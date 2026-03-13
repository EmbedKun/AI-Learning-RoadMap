#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer';

const cwd = process.cwd();
const defaultInput = fs.existsSync(path.resolve(cwd, 'README.md'))
  ? 'README.md'
  : 'AI-Learning-Roadmap.md';
const inputPath = path.resolve(cwd, process.argv[2] || defaultInput);
const outputPath = path.resolve(cwd, process.argv[3] || 'AI-Learning-Roadmap.pdf');
const htmlPath = path.resolve(cwd, '.roadmap-book-render.html');
const inputDir = path.dirname(inputPath);

if (!fs.existsSync(inputPath)) {
  console.error(`Input markdown not found: ${inputPath}`);
  process.exit(1);
}

const markdown = fs.readFileSync(inputPath, 'utf8');
const blocks = parseMarkdown(markdown);
const titleBlock = blocks.find((block) => block.type === 'heading' && block.level === 1);
const docTitle = titleBlock?.text || 'AI Learning Roadmap';

const html = buildHtml(docTitle, blocks, inputDir);
fs.writeFileSync(htmlPath, html, 'utf8');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--allow-file-access-from-files', '--no-sandbox']
});

try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(htmlPath).href, {
    waitUntil: 'networkidle0'
  });

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: '<div style="width:100%;font-size:9px;color:#7b8794;padding:0 10mm 4mm 10mm;box-sizing:border-box;text-align:right;"><span class="pageNumber"></span></div>',
    margin: {
      top: '0mm',
      bottom: '10mm',
      left: '0mm',
      right: '0mm'
    }
  });
} finally {
  await browser.close();
  if (fs.existsSync(htmlPath)) {
    fs.unlinkSync(htmlPath);
  }
}

console.log(`Created ${path.basename(outputPath)}`);

function parseMarkdown(source) {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (/^```/.test(trimmed)) {
      const codeLines = [];
      i += 1;

      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        codeLines.push(lines[i]);
        i += 1;
      }

      blocks.push({
        type: 'code',
        text: codeLines.join('\n')
      });

      if (i < lines.length) {
        i += 1;
      }

      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text: normalizeInline(headingMatch[2].trim())
      });
      i += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push({ type: 'rule' });
      i += 1;
      continue;
    }

    const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      blocks.push({
        type: 'image',
        alt: normalizeInline(imageMatch[1].trim()),
        path: imageMatch[2].trim()
      });
      i += 1;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      const quoteLines = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        quoteLines.push(lines[i].replace(/^>\s?/, ''));
        i += 1;
      }
      blocks.push({
        type: 'quote',
        text: normalizeInline(quoteLines.join('\n'))
      });
      continue;
    }

    const bulletMatch = line.match(/^\s*-\s+(.*)$/);
    if (bulletMatch) {
      const items = [];
      while (i < lines.length) {
        const match = lines[i].match(/^\s*-\s+(.*)$/);
        if (!match) {
          break;
        }

        items.push(normalizeInline(match[1].trim()));
        i += 1;
      }

      blocks.push({
        type: 'list',
        style: 'bullet',
        items
      });
      continue;
    }

    const numberedMatch = line.match(/^\s*\d+\.\s+(.*)$/);
    if (numberedMatch) {
      const items = [];
      while (i < lines.length) {
        const match = lines[i].match(/^\s*(\d+)\.\s+(.*)$/);
        if (!match) {
          break;
        }

        items.push({
          index: Number(match[1]),
          text: normalizeInline(match[2].trim())
        });
        i += 1;
      }

      blocks.push({
        type: 'list',
        style: 'numbered',
        items
      });
      continue;
    }

    const paragraphLines = [];
    while (i < lines.length) {
      const current = lines[i];
      const currentTrimmed = current.trim();

      if (
        !currentTrimmed ||
        /^```/.test(currentTrimmed) ||
        /^(#{1,6})\s+/.test(current) ||
        /^!\[([^\]]*)\]\(([^)]+)\)$/.test(currentTrimmed) ||
        /^>\s?/.test(currentTrimmed) ||
        /^\s*-\s+/.test(current) ||
        /^\s*\d+\.\s+/.test(current) ||
        /^---+$/.test(currentTrimmed)
      ) {
        break;
      }

      paragraphLines.push(currentTrimmed);
      i += 1;
    }

    if (paragraphLines.length > 0) {
      blocks.push({
        type: 'paragraph',
        text: normalizeInline(paragraphLines.join(' '))
      });
      continue;
    }

    i += 1;
  }

  return blocks;
}

function normalizeInline(text) {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function buildHtml(title, blocks, baseDir) {
  const bodyBlocks = [];
  let skippedTitle = false;

  for (const block of blocks) {
    if (!skippedTitle && block.type === 'heading' && block.level === 1) {
      skippedTitle = true;
      continue;
    }

    bodyBlocks.push(renderBlockHtml(block, baseDir));
  }

  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <style>
      @page {
        size: A4;
        margin: 16mm 14mm 18mm 14mm;
      }

      @page cover {
        size: A4;
        margin: 0;
      }

      @page back {
        size: A4;
        margin: 0;
      }

      * {
        box-sizing: border-box;
      }

      html, body {
        margin: 0;
        padding: 0;
        background: #f3f6f8;
        color: #2a3a4d;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      body {
        font-family: "Songti SC", "Songti TC", "STSong", "SimSun", "Noto Serif CJK SC", serif;
      }

      a {
        color: #0f6f8a;
        text-decoration: none;
      }

      .cover,
      .back-cover {
        width: 210mm;
        height: 297mm;
        min-height: 297mm;
        margin: 0;
        position: relative;
        overflow: hidden;
      }

      .cover {
        page: cover;
        break-after: page;
        page-break-after: always;
        background:
          radial-gradient(circle at 88% 12%, rgba(216, 179, 106, 0.18), transparent 18%),
          radial-gradient(circle at 14% 86%, rgba(111, 164, 199, 0.16), transparent 18%),
          linear-gradient(160deg, #0a1b30 0%, #09192d 50%, #10253a 100%);
        color: #ffffff;
      }

      .cover::before,
      .back-cover::before {
        content: "";
        position: absolute;
        left: 18mm;
        right: 18mm;
        top: 22mm;
        height: 3mm;
        border-radius: 999px;
        background: linear-gradient(90deg, #12304a 0%, #d8b36a 100%);
      }

      .cover-inner {
        padding: 34mm 18mm 24mm;
        position: relative;
        height: 100%;
      }

      .back-cover-inner {
        padding: 28mm 18mm 22mm;
        position: relative;
        min-height: 297mm;
        display: flex;
        flex-direction: column;
      }

      .cover-kicker {
        font-size: 10pt;
        letter-spacing: 0.22em;
        color: #d8b36a;
        text-transform: uppercase;
      }

      .back-kicker {
        font-size: 9.2pt;
        letter-spacing: 0.14em;
        color: #d8b36a;
        text-transform: uppercase;
      }

      .cover-title {
        margin: 26mm 0 8mm;
        font-family: "Iowan Old Style", "New York", "Times New Roman", "Songti SC", serif;
        font-size: 31pt;
        line-height: 1.15;
        letter-spacing: 0.01em;
      }

      .back-title {
        margin: 16mm 0 5mm;
        font-family: "Iowan Old Style", "New York", "Times New Roman", "Songti SC", serif;
        font-size: 25.5pt;
        line-height: 1.18;
        letter-spacing: 0.01em;
      }

      .cover-subtitle {
        max-width: 150mm;
        font-size: 12.4pt;
        line-height: 1.75;
        color: rgba(233, 239, 244, 0.92);
      }

      .back-subtitle {
        max-width: 138mm;
        font-size: 11.2pt;
        line-height: 1.68;
        color: rgba(233, 239, 244, 0.9);
      }

      .cover-chip {
        display: inline-block;
        margin-top: 108mm;
        padding: 10px 16px;
        border-radius: 999px;
        background: #d8b36a;
        color: #15202b;
        font-size: 10.5pt;
        font-weight: 600;
      }

      .back-chip {
        display: inline-block;
        margin-top: auto;
        align-self: flex-start;
        padding: 10px 16px;
        border-radius: 999px;
        background: #d8b36a;
        color: #15202b;
        font-size: 10.5pt;
        font-weight: 600;
      }

      .cover-meta {
        position: absolute;
        left: 18mm;
        bottom: 18mm;
        font-size: 9.2pt;
        color: rgba(184, 196, 208, 0.88);
      }

      .back-meta {
        margin-top: 10mm;
        font-size: 9pt;
        color: rgba(184, 196, 208, 0.88);
      }

      .book {
        width: auto;
        margin: 0;
        background: #fcfeff;
      }

      .content {
        padding: 0;
      }

      .content h2,
      .content h3,
      .content h4 {
        break-after: avoid;
      }

      .content h2 {
        margin: 0 0 5mm;
        padding-top: 2mm;
        font-size: 19.4pt;
        color: #14324b;
        border-bottom: 3px solid #0f7a8a;
        page-break-before: always;
      }

      .content h2:first-of-type {
        page-break-before: auto;
      }

      .content h3 {
        margin: 7mm 0 3mm;
        font-size: 15.2pt;
        color: #2d4f6c;
      }

      .content h4 {
        margin: 5mm 0 2.5mm;
        font-size: 12.6pt;
        color: #3a506b;
      }

      .content p,
      .content li {
        font-size: 11.8pt;
        line-height: 1.84;
      }

      .content p {
        margin: 0 0 4mm;
      }

      .content hr {
        border: 0;
        border-top: 1px solid #d7e2ea;
        margin: 7mm 0 7mm;
      }

      blockquote {
        margin: 5mm 0;
        padding: 4mm 5mm;
        background: #f6fafc;
        border-left: 4px solid #0f7a8a;
        border-radius: 10px;
      }

      blockquote p {
        margin: 0;
        color: #39536b;
      }

      .roadmap-list {
        list-style: none;
        margin: 0 0 5mm;
        padding: 0 0 0 6mm;
      }

      .roadmap-list li {
        position: relative;
        margin: 2mm 0;
      }

      .roadmap-list li::before {
        content: "•";
        position: absolute;
        left: -5mm;
        top: 0;
        color: #0f7a8a;
        font-size: 12.5pt;
      }

      .roadmap-ordered {
        margin: 0 0 5mm 5mm;
        padding-left: 6mm;
      }

      .roadmap-ordered ol {
        margin-top: 1.6mm;
      }

      pre {
        margin: 5mm 0;
        padding: 4mm 4.5mm;
        border-radius: 12px;
        background: #f5f7fa;
        color: #35526d;
        font-family: "SF Mono", "SFMono-Regular", Menlo, Consolas, monospace;
        font-size: 10pt;
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-word;
      }

      code {
        font-family: "SF Mono", "SFMono-Regular", Menlo, Consolas, monospace;
        font-size: 0.92em;
      }

      figure {
        margin: 6mm 0 7mm;
        break-inside: avoid;
      }

      figure img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 14px;
        border: 1px solid #dbe6ed;
        box-shadow: 0 16px 40px rgba(17, 34, 64, 0.08);
        background: #ffffff;
      }

      figure.tight img {
        max-height: 112mm;
        object-fit: contain;
      }

      figcaption {
        margin-top: 2.6mm;
        text-align: center;
        font-size: 9.6pt;
        color: #6c7d90;
      }

      .back-cover {
        page: back;
        break-before: page;
        page-break-before: always;
        background:
          radial-gradient(circle at 84% 14%, rgba(216, 179, 106, 0.2), transparent 16%),
          linear-gradient(160deg, #09192d 0%, #10253a 100%);
        color: #ffffff;
      }

      .back-panel {
        margin-top: 10mm;
        max-width: 142mm;
        padding: 7mm 8mm;
        border-radius: 16px;
        background: rgba(10, 27, 48, 0.72);
        border: 1px solid rgba(216, 179, 106, 0.22);
      }

      .back-panel p {
        margin: 0;
        color: rgba(240, 244, 248, 0.96);
        line-height: 1.76;
        font-size: 10.8pt;
      }

      .back-list {
        margin: 4.5mm 0 0;
        padding-left: 4.5mm;
      }

      .back-list li {
        margin: 1.6mm 0;
        font-size: 10.4pt;
        color: rgba(226, 234, 241, 0.95);
      }
    </style>
  </head>
  <body>
    <section class="cover">
      <div class="cover-inner">
        <div class="cover-kicker">A ROADMAP FOR BUILDING REAL AI JUDGMENT</div>
        <div class="cover-title">${escapeHtml(title)}</div>
        <div class="cover-subtitle">
          From foundations and models to infra, systems, and AI products.<br />
          从基础原理到模型、系统、Infra 与产品的一体化学习路线图
        </div>
        <div class="cover-chip">Author: Minkun Xue</div>
        <div class="cover-meta">Markdown edition · Designed for GitHub and PDF reading</div>
      </div>
    </section>

    <main class="book">
      <article class="content">
        ${bodyBlocks.join('\n')}
      </article>
    </main>

    <section class="back-cover">
      <div class="back-cover-inner">
        <div class="back-kicker">LONG-TERM LEARNING MAP</div>
        <div class="back-title">${escapeHtml(title)}</div>
        <div class="back-subtitle">
          A serious learning map across foundations, models, infra, systems, and products.
        </div>
        <div class="back-panel">
          <p>这不是一份速成清单，而是一份帮助你持续建立技术判断力、系统直觉和产品视角的路线图。</p>
          <ul class="back-list">
            <li>Foundations, models, systems, and products in one map.</li>
            <li>Readable on GitHub, printable as a book, usable as a long-term checklist.</li>
            <li>Built for people who want to move from “会用” to “会做” and “会判断”.</li>
          </ul>
        </div>
        <div class="back-chip">Written by Minkun Xue</div>
        <div class="back-meta">Generated from markdown with local images and Songti-style typography</div>
      </div>
    </section>
  </body>
</html>`;
}

function renderBlockHtml(block, baseDir) {
  switch (block.type) {
    case 'heading':
      return `<h${Math.min(block.level, 4)}>${block.text}</h${Math.min(block.level, 4)}>`;
    case 'paragraph':
      return `<p>${block.text}</p>`;
    case 'quote':
      return `<blockquote><p>${block.text}</p></blockquote>`;
    case 'list':
      if (block.style === 'numbered') {
        const items = block.items
          .map((item) => `<li>${item.text}</li>`)
          .join('');
        return `<ol class="roadmap-ordered">${items}</ol>`;
      }

      return `<ul class="roadmap-list">${block.items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
    case 'code':
      return `<pre><code>${escapeHtml(block.text)}</code></pre>`;
    case 'rule':
      return '<hr />';
    case 'image': {
      const imagePath = path.resolve(baseDir, block.path);
      const imageSrc = pathToFileURL(imagePath).href;
      const classes = /五层/i.test(block.alt) ? 'tight' : '';
      return `<figure class="${classes}"><img src="${imageSrc}" alt="${escapeHtml(block.alt)}" />${block.alt ? `<figcaption>${escapeHtml(block.alt)}</figcaption>` : ''}</figure>`;
    }
    default:
      return '';
  }
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

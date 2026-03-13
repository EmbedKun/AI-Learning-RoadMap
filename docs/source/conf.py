project = "AI Learning Roadmap"
copyright = "2026, Minkun Xue"
author = "Minkun Xue"

extensions = [
    "myst_parser",
]

source_suffix = {
    ".rst": "restructuredtext",
    ".md": "markdown",
}

root_doc = "index"
language = "zh_CN"
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]
templates_path = ["_templates"]

myst_enable_extensions = [
    "colon_fence",
]
myst_heading_anchors = 4

html_theme = "sphinx_rtd_theme"
html_title = project
html_static_path = ["_static"]
html_css_files = ["custom.css"]
html_favicon = "_static/AI-five-layer-stack.png"
html_show_sourcelink = False

html_context = {
    "display_github": True,
    "github_user": "EmbedKun",
    "github_repo": "AI-Learning-RoadMap",
    "github_version": "main",
    "conf_py_path": "/docs/source/",
}

html_theme_options = {
    "collapse_navigation": False,
    "sticky_navigation": True,
    "navigation_depth": 4,
    "includehidden": True,
    "titles_only": False,
    "style_external_links": True,
}

numfig = True

latex_engine = "xelatex"
latex_use_xindy = False
latex_show_urls = "footnote"
latex_documents = [
    (
        "index",
        "AI-Learning-Roadmap.tex",
        "AI Learning Roadmap",
        author,
        "manual",
        False,
    ),
]
latex_elements = {
    "papersize": "a4paper",
    "pointsize": "11pt",
    "figure_align": "htbp",
    "preamble": r"""
\usepackage[UTF8]{ctex}
\setcounter{tocdepth}{2}
\setcounter{secnumdepth}{3}
\setcounter{chapter}{-1}
\definecolor{RoadmapInk}{HTML}{162033}
\definecolor{RoadmapAccent}{HTML}{B8892D}
\definecolor{RoadmapLine}{HTML}{D9C9A5}

\newcommand{\RoadmapTitlePage}{
  \begin{titlepage}
  \thispagestyle{empty}
  \begingroup
  \centering
  \vspace*{0.12\textheight}
  {\fontsize{30}{36}\selectfont\bfseries\color{RoadmapInk} AI Learning\par}
  \vspace{0.18cm}
  {\fontsize{30}{36}\selectfont\bfseries\color{RoadmapInk} Roadmap\par}
  \vspace{1.1cm}
  {\color{RoadmapLine}\rule{0.7\textwidth}{0.9pt}\par}
  \vspace{1.0cm}
  {\Large\itshape\color{RoadmapInk} A full-stack roadmap for learning AI\par}
  \vspace{0.28cm}
  {\large\color{RoadmapInk} from first principles to models, systems,\par}
  {\large\color{RoadmapInk} infrastructure, and products.\par}
  \vspace{0.9cm}
  {\large\color{RoadmapAccent} 2026, March\par}
  \vfill
  {\large\color{RoadmapAccent} Minkun Xue\par}
  \vspace*{0.09\textheight}
  \endgroup
  \end{titlepage}
}

\newcommand{\RoadmapBackCover}{
  \clearpage
  \thispagestyle{empty}
  \begingroup
  \centering
  \vspace*{\fill}
  {\color{RoadmapLine}\rule{0.58\textwidth}{0.9pt}\par}
  \vspace{0.9cm}
  \begin{minipage}{0.76\textwidth}
  \centering
  {\Large\itshape\color{RoadmapInk}
  A full-stack roadmap for learning AI from first principles to models, systems, infrastructure, and products.\par}
  \end{minipage}
  \vspace{0.9cm}
  {\color{RoadmapLine}\rule{0.58\textwidth}{0.9pt}\par}
  \vspace*{\fill}
  \endgroup
  \clearpage
}
""",
    "maketitle": r"\RoadmapTitlePage",
    "atendofbody": r"\RoadmapBackCover",
}

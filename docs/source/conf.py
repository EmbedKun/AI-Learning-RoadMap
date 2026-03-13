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
""",
}

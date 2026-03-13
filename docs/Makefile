SPHINXBUILD ?= sphinx-build
SOURCEDIR = source
BUILDDIR = _build

.PHONY: html latex clean

html:
	$(SPHINXBUILD) -b html "$(SOURCEDIR)" "$(BUILDDIR)/html"

latex:
	$(SPHINXBUILD) -b latex "$(SOURCEDIR)" "$(BUILDDIR)/latex"

clean:
	rm -rf "$(BUILDDIR)"

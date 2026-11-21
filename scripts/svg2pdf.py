#!/usr/bin/env python3
"""Convertit les figures SVG des exercices en PDF vectoriels pour les documents LaTeX.
Usage : python3 scripts/svg2pdf.py liste.json   (liste de {"out": chemin.pdf, "svg": "<svg ...>"})
Utilise Chromium via Playwright, avec le même moteur de figures que le site (assets/figs.js) :
étiquettes composées en LaTeX par MathJax, étiquettes écartées des traits, modèle de dessin.
Couleurs fixes : version claire du site, fond blanc."""
import json, os, re, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
PAGE = f"""<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="{(ROOT / 'assets' / 'site.css').as_uri()}">
<style>
@page {{ margin: 0 }}
html, body {{ margin: 0; padding: 0; background: #fff !important }}
:root {{ color-scheme: light; --bg:#fff }}
#box {{ position: absolute; left: 0; top: 0; padding: 10px; background: #fff }}
#box figure.fig {{ margin: 0; padding: 0; border: 0; border-radius: 0; background: #fff; --figbg: #fff }}
#box figure.fig > svg {{ max-height: none; overflow: visible }}
</style></head><body><div id="box"></div>
<script>window.__LEMME_FIGS_MANUAL = 1; window.MathJax = {{ startup: {{ typeset: false }}, svg: {{ fontCache: "local" }} }};</script>
<script src="{(ROOT / 'vendor' / 'mathjax' / 'tex-svg.js').as_uri()}"></script>
<script src="{(ROOT / 'assets' / 'figs.js').as_uri()}"></script>
</body></html>"""


def main(path):
    items = json.load(open(path, encoding="utf8"))
    html = ROOT / "build" / "svg2pdf.html"
    html.parent.mkdir(exist_ok=True)
    html.write_text(PAGE, encoding="utf8")
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(color_scheme="light")
        pg.goto(html.as_uri())
        pg.wait_for_function("window.MathJax && MathJax.tex2svg && window.LemmeFigs", timeout=30000)
        for it in items:
            svg = it["svg"]
            m = re.search(r'viewBox="0 0 ([\d.]+) ([\d.]+)"', svg)
            w, h = float(m.group(1)), float(m.group(2))
            # dessin à l'échelle 1 (1 unité du viewBox = 1 px), étiquettes traitées comme sur le site
            dims = pg.evaluate("""([svg, w, h]) => {
              const box = document.getElementById('box');
              box.innerHTML = '<figure class="fig">' + svg + '</figure>';
              const s = box.querySelector('svg');
              s.style.width = w + 'px'; s.style.height = h + 'px'; s.removeAttribute('width'); s.removeAttribute('height');
              LemmeFigs.processSvg(s);
              const bb = s.getBBox();
              const x0 = Math.min(0, bb.x), y0 = Math.min(0, bb.y), x1 = Math.max(w, bb.x + bb.width), y1 = Math.max(h, bb.y + bb.height);
              /* le contenu qui déborde du viewBox (étiquette au bord) reste dans la page */
              s.style.marginLeft = (-x0) + 'px'; s.style.marginTop = (-y0) + 'px';
              return [x1 - x0, y1 - y0];
            }""", [svg, w, h])
            pad = 10
            pg.pdf(path=it["out"], width=f"{dims[0] + 2 * pad}px", height=f"{dims[1] + 2 * pad + 1}px", print_background=True,
                   margin={"top": "0", "right": "0", "bottom": "0", "left": "0"}, page_ranges="1")
            print("figure", it["out"].rsplit("/", 1)[-1])
        b.close()


if __name__ == "__main__":
    main(sys.argv[1])

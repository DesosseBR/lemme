#!/usr/bin/env python3
"""Convertit les figures SVG des exercices en PDF vectoriels pour les documents LaTeX.
Usage : python3 scripts/svg2pdf.py liste.json   (liste de {"out": chemin.pdf, "svg": "<svg ...>"})
Utilise Chromium via Playwright. Couleurs fixes (version claire du site)."""
import json, re, sys
from playwright.sync_api import sync_playwright

CSS = """
@page { margin: 0 }
html, body { margin: 0; padding: 0; background: #fff }
svg { display: block; font-family: "Latin Modern Roman", "CMU Serif", "DejaVu Serif", serif; overflow: visible }
:root { --ink:#101935; --muted:#5A6484; --line:#DCE2EF; --bg-2:#E9EDF6; --yellow:#FFC93C; --yellow-soft:#FFF4CF;
        --blue:#2453D6; --red:#C8362B; --gold-ink:#B07A00; --green:#1F7A4D }
.k{stroke:var(--ink);fill:none;stroke-width:1.6}
.thin{stroke:var(--muted);fill:none;stroke-width:1;stroke-dasharray:4 4}
.ax{stroke:var(--muted);fill:none;stroke-width:1.2}
.axh{fill:var(--muted)}
.body{fill:var(--bg-2);stroke:var(--ink);stroke-width:1.6}
.mass{fill:var(--yellow);stroke:var(--ink);stroke-width:1.6}
.hatch{stroke:var(--muted);stroke-width:1.1}
.vb{stroke:var(--blue);stroke-width:2.4}.hb{fill:var(--blue)}
.vr{stroke:var(--red);stroke-width:2.6}.hr{fill:var(--red)}
.vg{stroke:var(--gold-ink);stroke-width:2.6}.hg{fill:var(--gold-ink)}
.vk{stroke:var(--ink);stroke-width:2.2}.hk{fill:var(--ink)}
.vv{stroke:var(--green);stroke-width:2.4}.hv{fill:var(--green)}
text{fill:var(--ink);font-size:15px}
text.it{font-style:italic}
text.sm{font-size:12.5px;fill:var(--muted);font-style:normal}
text.r{fill:var(--red)} text.g{fill:var(--gold-ink)} text.b{fill:var(--blue)} text.v{fill:var(--green)}
"""

def main(path):
    items = json.load(open(path, encoding="utf8"))
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page()
        for it in items:
            svg = it["svg"]
            m = re.search(r'viewBox="0 0 ([\d.]+) ([\d.]+)"', svg)
            w, h = float(m.group(1)), float(m.group(2))
            pad = 10
            pg.set_content(f'<!doctype html><meta charset="utf-8"><style>{CSS}</style><div style="padding:{pad}px">{svg}</div>')
            pg.pdf(path=it["out"], width=f"{w + 2 * pad}px", height=f"{h + 2 * pad + 1}px", print_background=True,
                   margin={"top": "0", "right": "0", "bottom": "0", "left": "0"}, page_ranges="1")
            print("figure", it["out"].rsplit("/", 1)[-1])
        b.close()

if __name__ == "__main__":
    main(sys.argv[1])

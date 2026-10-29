#!/usr/bin/env node
/* Génère les PDF de Lemme à partir du contenu (content/*.js) et des cours écrits à la main (tex/cours/*.tex).
   Usage : node scripts/build-pdf.js            (reconstruit seulement ce qui a changé)
           node scripts/build-pdf.js --force    (tout reconstruire)
           node scripts/build-pdf.js maths      (une seule matière)
   Produit pdf/*.pdf et content/pdfs.js (liste des PDF disponibles pour le site). */
const fs = require("fs"), path = require("path"), vm = require("vm"), crypto = require("crypto");
const { execFile, execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "lemme-ryq6.vercel.app";
const ORDER = ["core", "notions", "maths", "physique", "chimie", "si", "info", "anglais", "commando", "oraux"];
const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const ONLY = args.find(a => !a.startsWith("--"));

/* ---------- Charger le contenu ---------- */
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of ORDER) vm.runInContext(fs.readFileSync(path.join(ROOT, "content", f + ".js"), "utf8"), sandbox, { filename: f + ".js" });
const L = sandbox.window.LEMME;
const YEARS = { mpsi: "MPSI", mp: "MP" };
const pad = n => String(n).padStart(2, "0");

/* ---------- HTML + LaTeX vers LaTeX ---------- */
const ENT = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&nbsp;": " " };
const decode = s => s.replace(/&(lt|gt|amp|quot|nbsp);/g, m => ENT[m]);
const UNI = { "ℤ": "$\\mathbb{Z}$", "ℝ": "$\\mathbb{R}$", "ℂ": "$\\mathbb{C}$", "ℕ": "$\\mathbb{N}$", "ℚ": "$\\mathbb{Q}$", "★": "",
  "∘": "$\\circ$", "⌊": "$\\lfloor$", "⌋": "$\\rfloor$", "⊂": "$\\subset$", "⇒": "$\\Rightarrow$", "→": "$\\to$", "∞": "$\\infty$", "√": "$\\surd$",
  "⁺": "$^{+}$", "²": "$^{2}$", "ˣ": "$^{x}$", "ℓ": "$\\ell$", "α": "$\\alpha$", "−": "$-$", "≤": "$\\leqslant$", "≥": "$\\geqslant$", "π": "$\\pi$", "∩": "$\\cap$", "∪": "$\\cup$", "∈": "$\\in$", "∅": "$\\varnothing$", "⚔": "", "◎": "", "∑": "$\\sum$", "ᵀ": "$^{\\top}$", "₀": "$_0$", "₁": "$_1$", "₂": "$_2$", "ₙ": "$_n$", "⁻": "$^{-}$", "ω": "$\\omega$", "θ": "$\\theta$", "λ": "$\\lambda$", "≈": "$\\approx$", "ₛ": "$_s$", "×": "$\\times$" };
const UNI_RE = new RegExp("[" + Object.keys(UNI).join("") + "]", "g");
function escText(s) {
  return decode(s)
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/([&%#_{}])/g, "\\$1")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(UNI_RE, c => UNI[c]);
}
const FIGS = new Map();
function toTex(html) {
  if (!html) return "";
  const store = [];
  const keep = s => { store.push(s); return "\u0000" + (store.length - 1) + "\u0000"; };
  let s = html;
  /* Figures SVG : converties en PDF (tex/fig/<empreinte>.pdf) puis incluses avec leur légende */
  s = s.replace(/<figure class="fig">\s*(<svg[\s\S]*?<\/svg>)\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/g, (_, svg, cap) => {
    const h = crypto.createHash("sha1").update(svg).digest("hex").slice(0, 16);
    const w = +(svg.match(/viewBox="0 0 (\d+)/) || [0, 360])[1];
    FIGS.set(h, svg);
    return keep(`\n\\begin{center}\\includegraphics[width=${Math.min(0.62, w / 360 * 0.55).toFixed(2)}\\linewidth]{${path.join(ROOT, "tex", "fig", h + ".pdf")}}\\par\\vspace{0.2em}{\\small\\color{black!70}${toTex(cap)}\\par}\\end{center}\n`);
  });
  s = s.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (_, c) => keep("\n\\begin{lstlisting}\n" + decode(c) + "\n\\end{lstlisting}\n"));
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => keep("\n\\[" + decode(m) + "\\]\n"));
  s = s.replace(/\$([^$]+?)\$/g, (_, m) => keep("$" + decode(m) + "$"));
  s = s.replace(/<code>([\s\S]*?)<\/code>/g, (_, c) => keep("\\texttt{" + escText(c) + "}"));
  const tags = [];
  s = s.replace(/<[^>]+>/g, t => { tags.push(t); return "\u0001" + (tags.length - 1) + "\u0001"; });
  s = escText(s);
  s = s.replace(/\u0001(\d+)\u0001/g, (_, i) => {
    const t = tags[+i].toLowerCase();
    if (/^<p\b/.test(t)) return "\n\n";
    if (t === "</p>") return "\n\n";
    if (/^<ul\b/.test(t)) return "\n\\begin{itemize}\n";
    if (t === "</ul>") return "\n\\end{itemize}\n";
    if (/^<ol\b/.test(t)) return "\n\\begin{enumerate}\n";
    if (t === "</ol>") return "\n\\end{enumerate}\n";
    if (/^<li\b/.test(t)) return "\n\\item ";
    if (/^<(b|strong)\b/.test(t)) return "\\textbf{";
    if (/^<\/(b|strong)>/.test(t)) return "}";
    if (/^<(i|em)\b/.test(t)) return "\\emph{";
    if (/^<\/(i|em)>/.test(t)) return "}";
    if (/^<br/.test(t)) return "\\\\\n";
    return "";
  });
  s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => store[+i]);
  return s.replace(/\n{3,}/g, "\n\n").trim();
}

/* ---------- Documents ---------- */
function doc({ meta, kicker, title, titleTex, body, url }) {
  return `\\documentclass[11pt]{article}
\\usepackage{lemme}${body.includes("\\includegraphics") ? "\n\\usepackage{graphicx}" : ""}
\\renewcommand\\lemmemeta{${escText(meta)}}
\\renewcommand\\lemmeurl{${escText(url || SITE_URL)}}
\\begin{document}
\\lemmetitle{${escText(kicker)}}{${titleTex || escText(title)}}
${body}
\\end{document}
`;
}

const jobs = [];
for (const s of L.SUBJECTS) {
  if (ONLY && s.id !== ONLY) continue;
  for (const y of ["mpsi", "mp"]) s.years[y].forEach((c, i) => {
    /* Un résumé rédigé à la main dans tex/resumes/<matiere>-<annee>-<nn>.tex remplace le résumé généré. */
    const hand = path.join(ROOT, "tex", "resumes", `${s.id}-${y}-${pad(i + 1)}.tex`);
    if (fs.existsSync(hand)) { jobs.push({ name: `resume-${s.id}-${y}-${pad(i + 1)}`, tex: fs.readFileSync(hand, "utf8") }); return; }
    if (!c.r) return;
    const meta = `${s.name} · ${YEARS[y]} · Chapitre ${pad(i + 1)}`;
    jobs.push({ name: `resume-${s.id}-${y}-${pad(i + 1)}`, tex: doc({
      meta, kicker: `Résumé de cours · ${s.name} ${YEARS[y]}`, title: c.t,
      body: `\\lemmenotions{Au programme : ${escText(c.n)}.}\n\\lemmesection{L'essentiel}\n${toTex(c.r)}`
    }) });
  });
}
for (const e of L.EXERCISES) {
  if (ONLY && e.subj !== ONLY) continue;
  const s = L.SUBJECTS.find(x => x.id === e.subj), c = s.years[e.year][e.chap];
  const kind = e.concours ? "Oral " + (L.CONCOURS || {})[e.concours] : (e.kind === "probleme" ? "Problème" : "Exercice");
  jobs.push({ name: `enonce-${e.id}`, tex: doc({
    meta: `${s.name} · ${YEARS[e.year]} · ${c.t}`, kicker: `${kind} · ${s.name} ${YEARS[e.year]} · ${e.time}`, titleTex: e.tt, title: e.title,
    url: `Corrigé pas à pas : ${SITE_URL}/#e-${e.id}`,
    body: toTex(e.enonce)
  }) });
  /* Corrigé complet téléchargeable : énoncé, étapes, piège, méthode et rappels utilisés */
  const used = [...new Set(e.steps.flatMap(st => st.rappels || []))].filter(r => L.RAPPELS[r]);
  const d = e.decode || {};
  jobs.push({ name: `corrige-${e.id}`, tex: doc({
    meta: `${s.name} · ${YEARS[e.year]} · ${c.t}`, kicker: `Corrigé · ${kind} · ${s.name} ${YEARS[e.year]}`, titleTex: e.tt, title: e.title,
    url: `Version interactive : ${SITE_URL}/#e-${e.id}`,
    body: `\\lemmesection{Énoncé}\n${toTex(e.enonce)}\n`
      + ((d.donnees && d.donnees.length) || d.but ? `\\begin{ldef}[Décoder l'énoncé]\n${d.donnees && d.donnees.length ? `\\textbf{Ce que l'énoncé te donne.}\n\\begin{itemize}\n${d.donnees.map(x => "\\item " + toTex(x)).join("\n")}\n\\end{itemize}\n` : ""}${d.but ? `\\textbf{Ce qu'on te demande.} ${toTex(d.but)}\n` : ""}\\end{ldef}\n` : "")
      + `\\lemmesection{Corrigé}\n`
      + e.steps.map((st, k) => `\\par\\needspace{4\\baselineskip}\\vspace{0.5em}{\\sffamily\\bfseries\\color{navy}${k + 1}.~${escText(st.t)}\\par}\\vspace{0.2em}\n${toTex(st.b)}\n`).join("\n")
      + `\\begin{lthm}[Le piège]\n${toTex(e.piege)}\n\\end{lthm}\n\\begin{lnote}[La méthode]\n${toTex(e.methode)}\n\\end{lnote}\n`
      + (used.length ? `\\lemmesection{Rappels de cours utilisés}\n\\begin{itemize}\n${used.map(r => `\\item \\textbf{${escText(L.RAPPELS[r].t)}.} ${toTex(L.RAPPELS[r].b)}`).join("\n")}\n\\end{itemize}\n` : "")
  }) });
}
L.DM.forEach((d, k) => {
  if (ONLY && d.subj !== ONLY) return;
  const s = L.SUBJECTS.find(x => x.id === d.subj);
  jobs.push({ name: `dm-${d.subj}-${d.year}-${k + 1}`, tex: doc({
    meta: `${s.name} · ${YEARS[d.year]} · Devoir maison`, kicker: `Devoir maison · ${s.name} ${YEARS[d.year]}`, title: d.title,
    url: d.corrige ? `Corrigé pas à pas : ${SITE_URL}/#e-${d.corrige}` : SITE_URL,
    body: toTex(d.body)
  }) });
});
/* Cours écrits à la main : tex/cours/<matiere>-<annee>-<nn>.tex (document complet utilisant \usepackage{lemme}) */
const coursDir = path.join(ROOT, "tex", "cours");
if (fs.existsSync(coursDir)) for (const f of fs.readdirSync(coursDir)) if (f.endsWith(".tex") && (!ONLY || f.startsWith(ONLY + "-")))
  jobs.push({ name: "cours-" + f.replace(/\.tex$/, ""), tex: fs.readFileSync(path.join(coursDir, f), "utf8") });

/* ---------- Compilation ---------- */
const BUILD = path.join(ROOT, "build"), OUT = path.join(ROOT, "pdf");
/* Figures manquantes : SVG vers PDF avec Chromium (scripts/svg2pdf.py, Playwright) */
const FIGDIR = path.join(ROOT, "tex", "fig"); fs.mkdirSync(FIGDIR, { recursive: true });
const missing = [...FIGS].filter(([h]) => !fs.existsSync(path.join(FIGDIR, h + ".pdf")));
if (missing.length) {
  const list = path.join(BUILD, "figs.json"); fs.mkdirSync(BUILD, { recursive: true });
  fs.writeFileSync(list, JSON.stringify(missing.map(([h, svg]) => ({ out: path.join(FIGDIR, h + ".pdf"), svg }))));
  execFileSync("python3", [path.join(__dirname, "svg2pdf.py"), list], { stdio: "inherit" });
}
fs.mkdirSync(BUILD, { recursive: true }); fs.mkdirSync(OUT, { recursive: true });
const hashFile = path.join(OUT, ".hashes.json");
const hashes = fs.existsSync(hashFile) ? JSON.parse(fs.readFileSync(hashFile, "utf8")) : {};
const styHash = crypto.createHash("sha1").update(fs.readFileSync(path.join(ROOT, "tex", "lemme.sty"))).digest("hex").slice(0, 8);
const todo = jobs.filter(j => {
  j.hash = styHash + crypto.createHash("sha1").update(j.tex).digest("hex").slice(0, 12);
  return FORCE || hashes[j.name] !== j.hash || !fs.existsSync(path.join(OUT, j.name + ".pdf"));
});
const env = { ...process.env, TEXINPUTS: path.join(ROOT, "tex") + "//:" };
const run = j => new Promise(res => {
  fs.writeFileSync(path.join(BUILD, j.name + ".tex"), j.tex);
  execFile("latexmk", ["-xelatex", "-interaction=nonstopmode", "-halt-on-error", "-quiet", "-outdir=" + BUILD, j.name + ".tex"], { cwd: BUILD, env, maxBuffer: 1 << 24 }, err => {
    if (err) { const log = path.join(BUILD, j.name + ".log"); const tail = fs.existsSync(log) ? fs.readFileSync(log, "utf8").split("\n").filter(l => l.startsWith("!") || /^l\.\d+/.test(l)).slice(0, 6).join("\n") : String(err); res({ j, ok: false, tail }); return; }
    fs.copyFileSync(path.join(BUILD, j.name + ".pdf"), path.join(OUT, j.name + ".pdf"));
    hashes[j.name] = j.hash; res({ j, ok: true });
  });
});
(async () => {
  console.log(`${jobs.length} documents, ${todo.length} à compiler.`);
  const failed = []; let k = 0;
  const workers = Array.from({ length: 4 }, async () => { while (k < todo.length) { const r = await run(todo[k++]); if (!r.ok) failed.push(r); else process.stdout.write("."); } });
  await Promise.all(workers);
  fs.writeFileSync(hashFile, JSON.stringify(hashes, null, 1));
  const all = fs.readdirSync(OUT).filter(f => f.endsWith(".pdf")).map(f => f.replace(/\.pdf$/, "")).sort();
  fs.writeFileSync(path.join(ROOT, "content", "pdfs.js"), "/* Généré par scripts/build-pdf.js : ne pas modifier à la main. */\nLEMME.PDFS = " + JSON.stringify(all) + ";\n");
  console.log(`\n${todo.length - failed.length} compilés, ${failed.length} en erreur.`);
  failed.forEach(f => console.log("✗ " + f.j.name + "\n" + f.tail));
  process.exit(failed.length ? 1 : 0);
})();

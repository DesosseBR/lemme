/* Socle commun de Lemme. Chaque fichier de matière (maths.js, physique.js…) s'enregistre ici.
   Format complet d'un exercice : voir README.md. */
const R = String.raw;
const C = (t, n, r) => ({ t, n, r: r || "" });

const LEMME = window.LEMME = {
  SUBJECTS: [], EXERCISES: [], DM: [], KHOLLES: [], RAPPELS: {}, NOTIONS: {}, PDFS: [],
  BANKS: [
    { name: "X-ENS", desc: "Polytechnique et les ENS. Les sujets les plus longs et les plus ouverts." },
    { name: "Mines-Ponts", desc: "Mines Paris, Ponts, ISAE-Supaero, Télécom et d'autres écoles." },
    { name: "Centrale-Supélec", desc: "Écrits exigeants, oraux de maths dont une épreuve avec Python." },
    { name: "CCINP", desc: "Une banque officielle d'exercices d'oral est publiée chaque année." },
    { name: "e3a-Polytech", desc: "Réseau Polytech. Sujets proches du cours, où la rigueur paie." },
    { name: "CNC", desc: "Concours National Commun (Maroc) : l'écrit commun aux grandes écoles d'ingénieurs marocaines." }
  ],
  subject(s) { this.SUBJECTS.push(s); },
  exercises(list) { this.EXERCISES.push(...this.mergeParts(list)); },
  /* Un sujet « Aller plus loin » découpé en parties devient un seul exercice : énoncé complet, questions numérotées, corrigé d'un seul tenant. */
  ALIAS: {},
  mergeParts(list) {
    const groups = new Map(), out = [];
    for (const e of list) {
      if (!e.plus || !e.part) { out.push(e); continue; }
      if (!groups.has(e.plus)) { groups.set(e.plus, []); out.push({ __g: e.plus }); }
      groups.get(e.plus).push(e);
    }
    return out.map(x => {
      if (!x.__g) return x;
      const ps = groups.get(x.__g), f = ps[0];
      if (ps.length === 1) return f;
      const pre = (f.enonce.match(/^\s*<p class="pl-pre">[\s\S]*?<\/p>/) || [""])[0];
      const body = ps.map(e => {
        let h = e.enonce.replace(/^\s*<p class="pl-pre">[\s\S]*?<\/p>/, "");
        const lab = String(e.part).replace(/\.$/, "");
        const head = `<p class="pl-part"><b>${lab}. ${String(e.title).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</b></p>`;
        if (h.includes(`<p><b>${lab}.</b></p>`)) h = h.replace(`<p><b>${lab}.</b></p>`, head);
        else if (h.includes(`<p><b>${lab}.</b>`)) h = h.replace(new RegExp(`<p><b>${lab}\\.</b>\\s*`), head + "<p>");
        else h = head + h;
        return h;
      }).join("");
      const mins = ps.reduce((a, e) => a + (parseInt(e.time) || 0), 0);
      const dd = ps.flatMap(e => (e.decode && e.decode.donnees) || []);
      const joinP = k => ps.filter(e => e[k]).map(e => ps.length > 1 ? `<p><b>${e.part}.</b> ${String(e[k]).replace(/^<p>/, "").replace(/<\/p>$/, "")}</p>` : e[k]).join("");
      for (const e of ps.slice(1)) this.ALIAS[e.id] = f.id;
      const m = Object.assign({}, f, {
        title: f.sujet || f.title, part: undefined, time: mins >= 60 ? `${Math.floor(mins / 60)} h${mins % 60 ? " " + String(mins % 60).padStart(2, "0") : ""}` : `${mins} min`,
        enonce: pre + body, steps: ps.flatMap(e => e.steps || []),
        decode: { donnees: [...new Set(dd)], but: f.sujetDesc || (f.decode && f.decode.but) || "", cles: Object.assign({}, ...ps.map(e => (e.decode && e.decode.cles) || {})) },
        piege: joinP("piege"), methode: joinP("methode"), merged: ps.length
      });
      const viz = ps.flatMap(e => [].concat(e.viz || [])); if (viz.length) m.viz = viz;
      return m;
    });
  },
  dm(list) { this.DM.push(...list); },
  kholles(list) { this.KHOLLES.push(...list); },
  rappels(map) { Object.assign(this.RAPPELS, map); },
  notions(map) { Object.assign(this.NOTIONS, map); }
};

/* Rappels de cours partagés entre plusieurs matières */
LEMME.rappels({
  "recurrence": { t: "Raisonnement par récurrence", b: R`$$\left\{\begin{aligned}&P(n_0)\\&\forall n\geqslant n_0,\ P(n)\Rightarrow P(n+1)\end{aligned}\right.\quad\Longrightarrow\quad\forall n\geqslant n_0,\ P(n).$$` },
  "edo1": { t: "Équation différentielle linéaire d'ordre 1", b: R`$$y'+\frac y\tau = \frac A\tau\iff\exists\lambda\in\mathbb R,\ \forall t,\quad y(t) = A+\lambda\,e^{-t/\tau}.$$<p>$\lambda$ : fixé par la condition initiale.</p>` },
  "premier-ordre-reperes": { t: "Repères d'une réponse du premier ordre", b: R`Une réponse $A\big(1-e^{-t/\tau}\big)$ atteint $63\,\%$ de $A$ en $\tau$, $95\,\%$ en $3\tau$ et $99\,\%$ en $\tau\ln 100 \approx 4{,}6\,\tau$.` }
});

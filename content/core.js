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
  exercises(list) {
    const rest = [], touched = new Set();
    for (const e of list) { if (e.subj === "annales" && e.part && !e.plus) { const k = "ann-" + e.chap; (this.__ann[k] = this.__ann[k] || []).push(e); touched.add(k); } else rest.push(e); }
    this.EXERCISES.push(...this.mergeParts(rest));
    for (const k of touched) {
      const ps = this.__ann[k], m = ps.length > 1 ? this.mergeGroup(ps) : ps[0];
      m.__ann = k;
      const i = this.EXERCISES.findIndex(x => x.__ann === k);
      if (i >= 0) this.EXERCISES[i] = m; else this.EXERCISES.push(m);
    }
  },
  __ann: {},
  /* Un sujet « Aller plus loin » découpé en parties devient un seul exercice : énoncé complet, questions numérotées, corrigé d'un seul tenant. */
  ALIAS: {},
  mergeParts(list) {
    const groups = new Map(), out = [];
    for (const e of list) {
      /* Les sujets de concours aussi : toutes les parties d'un sujet forment un seul sujet complet. */
      const key = e.plus || null;
      if (!key || !e.part) { out.push(e); continue; }
      if (!groups.has(key)) { groups.set(key, []); out.push({ __g: key }); }
      groups.get(key).push(e);
    }
    return out.map(x => { if (!x.__g) return x; const ps = groups.get(x.__g); return ps.length === 1 ? ps[0] : this.mergeGroup(ps); });
  },
  mergeGroup(ps) {
    {
      let f = ps[0];
      const ann = f.subj === "annales";
      if (ann) {
        /* numéros de questions qui repartent de 1 dans une partie : on les préfixe par le numéro de partie */
        let restart = false;
        for (let i = 1; i < ps.length; i++) { const a = Math.max(...ps[i - 1].steps.map(s => parseFloat(s.q) || 0)), b = Math.min(...ps[i].steps.map(s => parseFloat(s.q) || 0)); if (b <= a) restart = true; }
        if (restart) { ps = ps.map((e, k) => Object.assign({}, e, { steps: e.steps.map(s => s.q == null ? s : Object.assign({}, s, { q: `${k + 1}.${s.q}` })) })); f = ps[0]; }
      }
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
      const sj = ann ? ((this.SUBJECTS.find(s => s.id === "annales") || { years: { mp: [] } }).years.mp[f.chap] || {}) : {};
      const m = Object.assign({}, f, {
        title: sj.titre || f.sujet || f.title, tt: undefined, part: undefined, time: mins >= 60 ? `${Math.floor(mins / 60)} h${mins % 60 ? " " + String(mins % 60).padStart(2, "0") : ""}` : `${mins} min`,
        enonce: pre + body, steps: ps.flatMap(e => e.steps || []),
        decode: { donnees: [...new Set(dd)], but: f.sujetDesc || (f.decode && f.decode.but) || "", cles: Object.assign({}, ...ps.map(e => (e.decode && e.decode.cles) || {})) },
        piege: joinP("piege"), methode: joinP("methode"), merged: ps.length
      });
      if (ann) { if (sj.duree) m.time = sj.duree; m.level = Math.round(ps.reduce((a, e) => a + (e.level || 3), 0) / ps.length); m.kind = "probleme"; m.qnav = true; m.side = ps.some(e => e.side) || undefined; }
      const viz = ps.flatMap(e => [].concat(e.viz || [])); if (viz.length) m.viz = viz;
      return m;
    }
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

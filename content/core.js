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
    { name: "e3a-Polytech", desc: "Réseau Polytech. Sujets proches du cours, où la rigueur paie." }
  ],
  subject(s) { this.SUBJECTS.push(s); },
  exercises(list) { this.EXERCISES.push(...list); },
  dm(list) { this.DM.push(...list); },
  kholles(list) { this.KHOLLES.push(...list); },
  rappels(map) { Object.assign(this.RAPPELS, map); },
  notions(map) { Object.assign(this.NOTIONS, map); }
};

/* Rappels de cours partagés entre plusieurs matières */
LEMME.rappels({
  "recurrence": { t: "Raisonnement par récurrence", b: R`Si $P(n_0)$ est vraie et si, pour tout $n\ge n_0$, $P(n)\Rightarrow P(n+1)$, alors $P(n)$ est vraie pour tout $n\ge n_0$.` },
  "edo1": { t: "Équation différentielle linéaire d'ordre 1", b: R`Les solutions de $y' + \dfrac{y}{\tau} = \dfrac{A}{\tau}$ sont $y(t) = A + \lambda\,e^{-t/\tau}$. La constante $\lambda$ se fixe avec la condition initiale.` },
  "premier-ordre-reperes": { t: "Repères d'une réponse du premier ordre", b: R`Une réponse $A\big(1-e^{-t/\tau}\big)$ atteint $63\,\%$ de $A$ en $\tau$, $95\,\%$ en $3\tau$ et $99\,\%$ en $\tau\ln 100 \approx 4{,}6\,\tau$.` }
});

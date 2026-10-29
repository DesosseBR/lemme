/* Socle commun de Lemme. Chaque fichier de matière (maths.js, physique.js…) s'enregistre ici. */
const R = String.raw;
const C = (t, n, r) => ({ t, n, r: r || "" });
const LEMME = window.LEMME = {
  SUBJECTS: [], EXERCISES: [], DM: [], KHOLLES: [],
  BANKS: [
    { name: "X-ENS", desc: "Concours commun de l'École polytechnique et des ENS. Les sujets les plus longs et les plus ouverts." },
    { name: "Mines-Ponts", desc: "Concours commun Mines-Ponts : Mines Paris, Ponts, ISAE-Supaero, Télécom et d'autres écoles." },
    { name: "Centrale-Supélec", desc: "Écrits exigeants sur le fond, oraux de maths avec une épreuve utilisant Python." },
    { name: "CCINP", desc: "Concours commun INP. Une banque officielle d'exercices d'oral est publiée : un outil de révision idéal." },
    { name: "e3a-Polytech", desc: "Réseau Polytech et écoles partenaires. Sujets proches du cours, où la rigueur paie." }
  ],
  subject(s) { this.SUBJECTS.push(s); },
  exercises(list) { this.EXERCISES.push(...list); },
  dm(list) { this.DM.push(...list); },
  kholles(list) { this.KHOLLES.push(...list); }
};

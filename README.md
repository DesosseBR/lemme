# Lemme

Cours, résumés et corrigés interactifs pour la prépa MPSI et MP. Site statique servi par Vercel.

## Organisation

```
index.html            Coquille de la page (ne change pas quand on ajoute du contenu)
assets/site.css       Design
assets/app.js         Navigation, lecteur PDF, visualisations, corrigé pas à pas
content/core.js       Socle commun et rappels partagés
content/<matiere>.js  Chapitres, résumés, rappels, exercices, problèmes, DM, khôlles
content/pdfs.js       Généré : liste des PDF disponibles
tex/lemme.sty         Style LaTeX commun des PDF
tex/cours/            Cours complets écrits à la main (optionnel)
pdf/                  PDF générés (résumés, énoncés, DM, cours)
scripts/build-pdf.js  Génère les PDF
vendor/               MathJax et pdf.js, hébergés avec le site
```

## Ajouter du contenu

Tout se fait dans `content/<matiere>.js`, puis on régénère les PDF :

```
node scripts/build-pdf.js maths     # seulement ce qui a changé dans une matière
```

Le script utilise `latexmk` et `xelatex`.

### Un exercice ou un problème

Ajouter un objet dans `LEMME.exercises([...])` :

```js
{
  id: "ex-mon-exo",            // unique, minuscules et tirets
  kind: "probleme",            // facultatif : problème multi-questions
  subj: "maths", year: "mpsi", // "mpsi" ou "mp"
  chap: 14,                    // index du chapitre dans la liste de l'année, à partir de 0
  classique: true,             // facultatif : apparaît dans « Classiques »
  level: 3, time: "10 min",    // difficulté de 1 à 5 étoiles
  title: "…",
  enonce: R`<p>… <span data-k="mot">terme à expliquer</span> …</p>`,
  decode: { donnees: [R`…`], but: R`…`, cles: { mot: R`définition affichée au clic` } },
  steps: [ { t: "Titre de l'étape", b: R`<p>…</p>`, rappels: ["id-du-rappel"] } ],
  piege: R`…`, methode: R`…`,
  viz: { … }                   // facultatif, voir les exemples existants (plot, seq, dicho)
}
```

Les formules s'écrivent en LaTeX entre `$…$` ou `$$…$$`. Dans un bloc `R\`…\``, ne jamais écrire `${` : utiliser `$\,{}` à la place.

### Un rappel de cours

Ajouter une entrée dans `LEMME.rappels({...})` du fichier de la matière : `"id": { t: "Titre", b: R\`énoncé\` }`.

### Un résumé de cours

Remplir le troisième argument de `C(titre, notions, résumé)` dans le chapitre concerné.

### Un résumé rédigé à la main

Créer `tex/resumes/<matiere>-<annee>-<nn>.tex` (par exemple `maths-mpsi-08.tex`). Il remplace le résumé généré automatiquement. Encadrés disponibles : `ldef` (définition), `lthm` (théorème), `lnote` (méthode).

### Un cours complet en PDF

Créer `tex/cours/<matiere>-<annee>-<nn>.tex` (par exemple `maths-mpsi-15.tex`), un document LaTeX qui commence par `\usepackage{lemme}`. Il apparaît automatiquement dans l'onglet « Cours » du chapitre.

## Demande type pour Claude

> Dans le repo DesosseBR/lemme, ajoute 3 exercices corrigés au chapitre « Séries entières » (Maths MP), dans content/maths.js uniquement, puis régénère les PDF de maths.

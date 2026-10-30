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

### Une notion de cours (soulignée en bleu)

Les notions sont dans `content/notions.js`. Le site souligne automatiquement en bleu la première apparition de chaque notion dans les énoncés et les corrigés. Pour en ajouter une : `"id": { p: "expression régulière", t: "Titre", b: R\`définition\` }`. Pour désactiver une notion dans un exercice où le mot a un autre sens : `noNotions: ["id"]`.

### Un exercice de physique (énoncé et corrigé côte à côte)

Ajouter `side: true` à l'exercice, écrire les questions dans une liste `<ol>` de l'énoncé, et donner à chaque étape le numéro de sa question : `{ q: 2, t: "…", b: R\`…\` }`. La question en cours est surlignée dans l'énoncé.

Les figures sont des SVG insérés dans le texte : `<figure class="fig"><svg viewBox="0 0 L H" width="L" height="H">…</svg><figcaption>légende</figcaption></figure>` (voir les fonctions d'aide en bas de `content/physique.js`). Pour les PDF, `scripts/build-pdf.js` les convertit en `tex/fig/*.pdf` avec Chromium (`scripts/svg2pdf.py`, Playwright requis).

`viz` peut être une liste. Types d'animation supplémentaires : `tige` (perle sur une tige en rotation) et `sismo` (sismomètre). Les notions de physique de `content/notions.js` portent `d: "phys"` : elles ne sont soulignées qu'en physique.

### Un exercice d'oral

Les 58 exercices d'analyse CCINP sont dans `content/oraux-analyse.js` (identifiants `o-an-<numéro>`), avec des fonctions d'aide pour les graphes SVG (`window.__LA`). Ailleurs, dans `content/oraux.js`, avec `subj: "oraux", year: "mp"`, `chap` = numéro du chapitre (0 à 16) et `concours` = `"ccinp"`, `"mt"` (Mines-Télécom), `"c1"` (Centrale Maths 1) ou `"mp"` (Mines-Ponts).

### Indices, rappels appliqués, encadrés

- Dans une étape, `h: R\`…\`` ajoute un indice repliable « le coup d'œil » : pourquoi on utilise cette idée.
- Dans un exercice, `ctx: { "id-du-rappel": R\`…\` }` ajoute au rappel une partie « Dans cet exercice ».
- `<div class="sbox">$$…$$</div>` encadre une formule à retenir (aussi dans les PDF).
- `<table class="vals">` pour un tableau de valeurs.

## Demande type pour Claude

> Dans le repo DesosseBR/lemme, ajoute 3 exercices corrigés au chapitre « Séries entières » (Maths MP), dans content/maths.js uniquement, puis régénère les PDF de maths.

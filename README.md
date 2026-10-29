# Lemme

Site de cours, résumés et exercices corrigés pour la prépa MPSI et MP.
Site statique : aucun build, Vercel sert les fichiers tels quels.

## Organisation

```
index.html          Design et navigation (ne change pas quand on ajoute du contenu)
content/core.js     Socle commun et liste des banques de concours
content/maths.js    Une matière par fichier : chapitres, résumés, exercices, DM, khôlles
content/physique.js
content/chimie.js
content/si.js
content/info.js
content/anglais.js
```

## Ajouter du contenu

Tout se fait dans le fichier de la matière concernée. `index.html` n'est jamais modifié.

- **Un exercice** : ajouter un objet dans `LEMME.exercises([...])`.
  - `id` unique, en minuscules avec des tirets (ex. `ex-taylor-young`)
  - `year` : `"mpsi"` ou `"mp"`
  - `chap` : numéro du chapitre dans la liste de cette année, en partant de 0
  - `enonce`, `steps`, `piege`, `methode` : texte HTML avec du LaTeX entre `$...$` ou `$$...$$`
- **Un résumé de cours** : remplir le troisième argument `R\`...\`` du chapitre `C(titre, notions, résumé)`.
- **Un DM** : ajouter un objet dans `LEMME.dm([...])`.
- **Une question de khôlle** : l'ajouter dans la liste `qs` de `LEMME.kholles([...])`.

Attention : dans les blocs `R\`...\``, ne jamais écrire `${` (utiliser `$\,{}` à la place).

## Demande type pour Claude

> Dans le repo lemme, ajoute 3 exercices corrigés au chapitre « Séries entières » (Maths MP), dans content/maths.js uniquement.

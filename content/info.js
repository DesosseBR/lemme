/* Contenu de la matière : programme, résumés, rappels de cours, exercices, problèmes, DM et khôlles.
   Le format est décrit dans README.md. */

LEMME.subject({
  id: "info", name: "Informatique", short: "Info", sym: "λ",
  intro: "Le tronc commun en Python : algorithmique, preuves, complexité, graphes, puis programmation dynamique, bases de données et algorithmes pour l'IA en MP.",
  years: {
    mpsi: [
      C("Bases de la programmation en Python", "Types, variables, conditions, boucles, fonctions, listes", ""),
      C("Représentation des nombres", "Entiers en binaire, complément à deux, nombres flottants",
        R`<ul><li>Sur $n$ bits en complément à deux, on code les entiers de $-2^{n-1}$ à $2^{n-1}-1$.</li><li>Les flottants sont approchés : on ne teste jamais l'égalité de deux flottants avec <code>==</code>.</li></ul>`),
      C("Preuves et complexité", "Invariant de boucle, variant, terminaison, notation O",
        R`<ul><li>Un variant est un entier positif qui décroît strictement à chaque tour : il prouve la terminaison.</li><li>Un invariant est vrai avant et après chaque tour : il prouve la correction.</li></ul>`),
      C("Recherche dichotomique", "Recherche dans une liste triée, complexité logarithmique", R`<ul><li>Complexité dans le pire cas : $O(\log n)$.</li></ul>`),
      C("Récursivité", "Fonctions récursives, cas de base, pile d'appels", ""),
      C("Algorithmes de tri", "Tri par insertion, tri fusion, tri rapide, complexités",
        R`<ul><li>Tri par insertion : $O(n^2)$ dans le pire cas.</li><li>Tri fusion : $O(n\log n)$ dans tous les cas.</li></ul>`),
      C("Graphes", "Représentations, parcours en largeur et en profondeur, plus courts chemins, Dijkstra", R`<ul><li>Parcours en largeur ou en profondeur : $O(|S|+|A|)$ avec des listes d'adjacence.</li><li>Dijkstra suppose des poids positifs.</li></ul>`),
      C("Dictionnaires", "Tables de hachage, opérations en temps moyen constant", "")
    ],
    mp: [
      C("Programmation dynamique", "Sous-structure optimale, mémoïsation, problème du sac à dos", ""),
      C("Bases de données", "Modèle relationnel, requêtes SQL, jointures, agrégation", ""),
      C("Algorithmes pour l'intelligence artificielle", "k plus proches voisins, k-moyennes, jeux à deux joueurs et min-max", ""),
      C("Graphes : compléments", "Algorithme A*, heuristiques", "")
    ]
  }
});


LEMME.rappels({
  "invariant": { t: "Invariant de boucle", b: R`Une propriété vraie avant la boucle et conservée par chaque tour. À la sortie, elle prouve la correction de l'algorithme.` },
  "variant": { t: "Variant de boucle", b: R`Un entier positif qui décroît strictement à chaque tour. Son existence prouve que la boucle termine.` },
  "complexite-log": { t: "Complexité logarithmique", b: R`Si la taille du problème est au moins divisée par $2$ à chaque étape, le nombre d'étapes est au plus $\lfloor\log_2n\rfloor+1$, soit $O(\log n)$.` }
});

LEMME.exercises([
{
  id: "ex-dicho", subj: "info", year: "mpsi", chap: 3, classique: true, level: 2, time: "15 min",
  title: "Recherche dichotomique",
  enonce: R`<p>Écrire une fonction <code>appartient(L, x)</code> qui teste si <code>x</code> est dans la liste <span data-k="triee">triée</span> <code>L</code> par dichotomie. Prouver sa terminaison et donner sa complexité.</p>`,
  decode: {
    donnees: [R`Une liste <code>L</code> triée dans l'ordre croissant, de longueur $n$.`],
    but: R`Un code correct, une preuve de terminaison, une complexité.`,
    cles: { triee: R`<code>L[0] &lt;= L[1] &lt;= … &lt;= L[n-1]</code>. C'est ce qui permet d'éliminer une moitié à chaque tour.` }
  },
  steps: [
    { t: "Le code", b: R`<pre><code>def appartient(L, x):
    g, d = 0, len(L) - 1
    while g &lt;= d:
        m = (g + d) // 2
        if L[m] == x:
            return True
        elif L[m] &lt; x:
            g = m + 1
        else:
            d = m - 1
    return False</code></pre>` },
    { t: "Invariant", b: R`<p>Si <code>x</code> est dans <code>L</code>, alors il est dans <code>L[g..d]</code>. Chaque mise à jour n'écarte qu'une zone où <code>x</code> ne peut pas être, car <code>L</code> est triée.</p>`, rappels: ["invariant"] },
    { t: "Terminaison", b: R`<p>$d-g+1$ est un entier positif tant que la boucle tourne, et il décroît strictement à chaque tour.</p>`, rappels: ["variant"] },
    { t: "Complexité", b: R`<p>La zone de recherche est au moins divisée par $2$ à chaque tour : au plus $\lfloor\log_2n\rfloor+1$ tours, soit $O(\log n)$.</p>`, rappels: ["complexite-log"] }
  ],
  piege: R`Écrire <code>g = m</code> au lieu de <code>g = m + 1</code> : la boucle peut ne jamais terminer.`,
  methode: R`Pour toute boucle <code>while</code>, donne un variant pour la terminaison et un invariant pour la correction.`,
  viz: { type: "dicho", title: "Lance la recherche et suis g, m et d tour par tour" }
}
]);

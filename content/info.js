/* Informatique : programme, résumés, exercices corrigés, DM et questions de khôlle.
   Pour ajouter un exercice : copier un objet de LEMME.exercises([...]) ci-dessous,
   changer son id (unique), son chapitre (chap = index du chapitre, en partant de 0) et son contenu. */

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

LEMME.exercises([
{
  id: "ex-dicho", subj: "info", year: "mpsi", chap: 3, level: 1, time: "15 min",
  title: "Recherche dichotomique : code, preuve, complexité",
  enonce: R`<p>Écrire une fonction <code>appartient(L, x)</code> qui teste si <code>x</code> est dans la liste triée <code>L</code> par dichotomie. Prouver sa terminaison et donner sa complexité.</p>`,
  steps: [
    ["Code", R`<pre><code>def appartient(L, x):
    g, d = 0, len(L) - 1
    while g &lt;= d:
        m = (g + d) // 2
        if L[m] == x:
            return True
        elif L[m] &lt; x:
            g = m + 1
        else:
            d = m - 1
    return False</code></pre>`],
    ["Invariant", R`<p>Si $x$ est dans $L$, alors il est dans $L[g..d]$. C'est vrai au départ et chaque mise à jour l'élimine seulement d'une zone où il ne peut pas être, car $L$ est triée.</p>`],
    ["Terminaison", R`<p>Le variant $d-g+1$ est un entier positif qui décroît strictement à chaque tour.</p>`],
    ["Complexité", R`<p>La taille de la zone est au moins divisée par $2$ à chaque tour : au plus $\lfloor\log_2 n\rfloor+1$ tours, soit $O(\log n)$.</p>`]
  ],
  piege: R`Écrire <code>g = m</code> au lieu de <code>g = m + 1</code> : la boucle peut ne jamais terminer.`,
  methode: R`Pour toute boucle <code>while</code>, donne un variant (terminaison) et un invariant (correction). C'est attendu à l'écrit.`
}
]);

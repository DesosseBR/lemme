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
    { t: "L'idée", h: R`<p>Compare <code>x</code> à l'élément du milieu : comme <code>L</code> est triée, tu sais alors dans quelle moitié chercher.</p>`, b: R`<p>On cherche <code>x</code> dans la zone <code>L[g..d]</code> (indices de <code>g</code> à <code>d</code> inclus), qui est au départ toute la liste. On regarde l'élément du milieu <code>L[m]</code> :</p><ul><li>s'il vaut <code>x</code>, on a trouvé ;</li><li>s'il est plus petit que <code>x</code>, tous les éléments à sa gauche le sont aussi (liste triée) : <code>x</code> ne peut être qu'à droite de <code>m</code> ;</li><li>s'il est plus grand, <code>x</code> ne peut être qu'à gauche.</li></ul><p>Exemple : <code>L = [2, 5, 8, 12, 17, 23]</code>, <code>x = 17</code>. $g = 0$, $d = 5$, $m = 2$ : <code>L[2] = 8 &lt; 17</code>, donc $g = 3$. Puis $m = 4$ : <code>L[4] = 17</code>, trouvé en $2$ tours.</p>` },
    { t: "Le code", h: R`<p>Deux indices <code>g</code> et <code>d</code>, une boucle tant que la zone n'est pas vide, et le milieu <code>m = (g + d) // 2</code>.</p>`, b: R`<pre><code>def appartient(L, x):
    g, d = 0, len(L) - 1
    while g &lt;= d:              # la zone L[g..d] n'est pas vide
        m = (g + d) // 2       # indice du milieu (division entière)
        if L[m] == x:
            return True
        elif L[m] &lt; x:
            g = m + 1          # x ne peut être qu'à droite de m
        else:
            d = m - 1          # x ne peut être qu'à gauche de m
    return False               # zone vide : x n'est pas dans L</code></pre><p>On écrit <code>m + 1</code> et <code>m - 1</code> (et pas <code>m</code>) : <code>L[m]</code> a déjà été testé, on l'exclut. C'est aussi ce qui garantit que la boucle s'arrête.</p>` },
    { t: "Invariant : la correction", h: R`<p>Énonce une propriété vraie avant chaque tour : « si <code>x</code> est dans <code>L</code>, il est dans <code>L[g..d]</code> ». Vérifie qu'elle est conservée.</p>`, b: R`<p><b>Invariant</b> : « si <code>x</code> est dans <code>L</code>, alors il est dans <code>L[g..d]</code> ».</p><ul><li><b>Au départ</b> : $g = 0$, $d = n-1$, c'est toute la liste. Vrai.</li><li><b>Conservation</b> : si <code>L[m] &lt; x</code>, comme <code>L</code> est triée, <code>L[0] ≤ … ≤ L[m] &lt; x</code> : <code>x</code> n'est pas dans <code>L[g..m]</code>, il est donc dans <code>L[m+1..d]</code>. Le cas <code>L[m] &gt; x</code> est symétrique.</li><li><b>À la sortie</b> : si on renvoie <code>True</code>, c'est que <code>L[m] == x</code>. Si la boucle s'arrête, $g>d$ : la zone est vide, donc par l'invariant <code>x</code> n'est pas dans <code>L</code>, et <code>False</code> est correct.</li></ul>`, rappels: ["invariant"] },
    { t: "Variant : la terminaison", h: R`<p>Trouve un entier positif qui diminue strictement à chaque tour : la taille de la zone, $d-g+1$.</p>`, b: R`<p>On prend $v = d-g+1$, le nombre d'éléments de la zone. Tant que la boucle tourne, $g\leqslant d$, donc $v\geqslant1$ : c'est un entier positif.</p><p>À chaque tour, $g\leqslant m\leqslant d$. Si <code>g = m + 1</code>, la nouvelle taille est $d-(m+1)+1 = d-m< d-g+1$. Si <code>d = m - 1</code>, elle vaut $(m-1)-g+1 = m-g< d-g+1$. Donc $v$ <b>diminue strictement</b>.</p><p>Une suite d'entiers positifs strictement décroissante est finie : la boucle s'arrête.</p>`, rappels: ["variant"] },
    { t: "La complexité", h: R`<p>Montre que la taille de la zone est au moins divisée par $2$ à chaque tour, puis compte combien de divisions par $2$ on peut faire à partir de $n$.</p>`, b: R`<p>Avec $v = d-g+1$ et $m = \lfloor\frac{g+d}2\rfloor$, la nouvelle taille vaut $d-m$ ou $m-g$, et ces deux nombres sont $\leqslant\frac{d-g}2 = \frac{v-1}2< \frac v2$. La taille est donc <b>au moins divisée par $2$</b> à chaque tour.</p><p>Après $k$ tours, la taille est $< \frac n{2^k}$. La boucle tourne tant que la taille est $\geqslant1$, donc il faut $\frac n{2^k}>1$, soit $2^k< n$, c'est-à-dire $k< \log_2n$. Il y a donc au plus $\lfloor\log_2n\rfloor+1$ tours, chacun en temps constant :</p><div class="sbox">$$\text{complexité } O(\log n).$$</div><p>Ordre de grandeur : pour $n = 10^6$, au plus $20$ tours, contre jusqu'à $10^6$ comparaisons pour une recherche élément par élément.</p>`, rappels: ["complexite-log"] }
  ],
  piege: R`Écrire <code>g = m</code> au lieu de <code>g = m + 1</code> : la boucle peut ne jamais terminer.`,
  methode: R`Pour toute boucle <code>while</code>, donne un variant pour la terminaison et un invariant pour la correction.`,
  viz: { type: "dicho", title: "Lance la recherche et suis g, m et d tour par tour" }
}
]);

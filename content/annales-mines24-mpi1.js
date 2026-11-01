/* Annales · Mines-Ponts 2024, Informatique 1 MPI (langage C). Énoncé transcrit (sujet GIP CCMP, licence CC BY-NC-ND), corrigé rédigé pour Lemme. */
(() => {
const R = String.raw;
const P = { subj: "annales", year: "mp", chap: 15, kind: "probleme", qnav: true, side: true };
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const C = s => `<pre><code>${esc(s.replace(/^\n/, ""))}</code></pre>`;

LEMME.rappels({
  "mpi1-guard": { t: "Garde d'inclusion", b: R`<p><code>#ifndef X</code> / <code>#define X</code> / <code>#endif</code> : le contenu n'est inclus qu'une fois par fichier compilé, même si l'en-tête est inclus plusieurs fois (directement ou par d'autres en-têtes).</p>` },
  "mpi1-compil": { t: "Compilation séparée en C", b: R`<p>Chaque fichier <code>.c</code> inclut les en-têtes <code>.h</code> dont il a besoin et se compile en un fichier objet (<code>gcc -c f.c</code>). L'édition de liens assemble les objets (<code>gcc f.o g.o -o prog</code>). Une variable globale définie dans un fichier s'utilise ailleurs grâce à une déclaration <code>extern</code>.</p>` },
  "mpi1-bfs": { t: "Parcours en largeur", b: R`<p>File FIFO : on défile un sommet, on enfile ses voisins non encore vus en notant leur prédécesseur. Chaque sommet est enfilé au plus une fois ; l'arborescence obtenue donne des plus courts chemins en nombre d'arcs.</p>` },
  "mpi1-flot": { t: "Coupe et chemins (Menger, Ford-Fulkerson)", b: R`<p>Le nombre maximal de chemins réalisables de $s$ à $t$ est égal à la multiplicité minimale d'une bordure séparant $s$ de $t$. Les chemins augmentants dans le réseau résiduel permettent de les construire.</p>` }
});

const E1 = R`<p>Langage C (ou pseudo-code de même niveau). <span data-def="reseau">Un réseau $H = (W,F,\mu,s,t)$ : sommets numérotés de $0$ à $n+1$, source $s = 0$, puits $t = n+1$, multiplicité $\mu(e)\in\mathbb N^*$ pour chaque arc $e\in F$</span>. Fichier <code>network.h</code> :</p>
<pre><code>#ifndef NETWORK_H
#define NETWORK_H
const unsigned int NMAX = 102;
struct network_s { unsigned int n; unsigned mu[NMAX][NMAX]; };
typedef struct network_s network;
void nw_init(unsigned int n);
void nw_add(int u, int v);
void nw_remove(int u, int v);
void nw_disconnect(void);
void _arr_init(int *T);
bool _bfs_tree(void);
void _residue(void);
#endif</code></pre>
<p>Fichier <code>network.c</code> : <span data-def="glob"><code>network H; int A[NMAX];</code> ; <code>H.mu[u][v]</code> vaut $\mu((u,v))$, ou $0$ si $(u,v)$ n'est pas un arc</span>.</p>
<ol><li>Rôle des lignes <code>#ifndef</code>, <code>#define</code> et <code>#endif</code>.</li><li>Comment faire interagir <code>network.h</code> et <code>network.c</code> ?</li><li><code>void nw_init(unsigned int n)</code> : précondition $n< n_{\max}$ vérifiée par une assertion ; <code>H</code> devient le réseau vide à $n+2$ sommets.</li><li><code>void nw_add(int u, int v)</code> : incrémente $\mu[u][v]$.</li><li><code>void nw_remove(int u, int v)</code> : retire une occurrence, avec une assertion si l'arc n'existe pas.</li><li><code>void _arr_init(int *T)</code> : met les $n+2$ cases de <code>T</code> à $-1$.</li><li><code>bool _bfs_tree(void)</code> : calcule dans <code>A</code> une arborescence de plus courts chemins (parcours en largeur depuis $s$) : <code>A[s] = s</code>, <code>A[v]</code> = prédécesseur pour $v$ accessible, $-1$ sinon ; renvoie <code>true</code> si $t$ est accessible.</li></ol>
<p><span data-def="real">Un ensemble $\Pi$ de $k$ chemins de $s$ à $t$ est réalisable si chaque arc $e$ est utilisé au plus $\mu(e)$ fois. Le réseau résiduel $\mathrm{Res}(H,\Pi)$ s'obtient en retirant, pour chaque arc $(u,v)$ de chaque chemin, une occurrence de $(u,v)$ et en ajoutant une occurrence de $(v,u)$</span>.</p>
<ol start="8"><li><code>void _residue(void)</code> : remplace <code>H</code> par $\mathrm{Res}(H,\{\alpha\})$, où $\alpha$ est le chemin de $s$ à $t$ dans l'arborescence <code>A</code>.</li><li>Après $k$ appels successifs (chemins $\alpha_1,\dots,\alpha_k$), montrer qu'il existe un ensemble réalisable $\Pi$ de $k$ chemins tel que le réseau obtenu soit $\mathrm{Res}(H,\Pi)$.</li><li><code>void nw_disconnect(void)</code> : tant qu'il existe un chemin de $s$ à $t$, remplacer $H$ par le résiduel le long d'un plus court chemin ; à la fin, <code>A</code> est une arborescence de racine $s$ n'atteignant pas $t$.</li><li>Montrer que <code>nw_disconnect</code> termine (variant inspiré de 9).</li></ol>
<p><span data-def="bord">Bordure $\partial S$ : arcs $(u,v)\in F$ avec $u\in S$, $v\notin S$ ; $\mu(\partial S) = \sum_{e\in\partial S}\mu(e)$. Un entourage est un $S\subseteq W$ avec $s\in S$, $t\notin S$</span>.</p>
<ol start="12"><li>Pour $\Pi$ réalisable de $k$ chemins et $S$ entourage : $k\leqslant\mu(\partial S)$.</li></ol>
<p>On fixe $\Pi_0$ réalisable de $k_0$ chemins tel que $\mathrm{Res}(H,\Pi_0)$ n'ait plus de chemin de $s$ à $t$, et <span data-def="S0">$S_0$ = sommets accessibles depuis $s$ dans $\mathrm{Res}(H,\Pi_0)$</span>.</p>
<ol start="13"><li>Pour tout arc $(u,v)$ avec $u\in S_0$, $v\notin S_0$ : toutes ses $\mu(e)$ occurrences sont utilisées par $\Pi_0$.</li><li>Aucune occurrence d'un arc $(v,u)$ avec $v\notin S_0$, $u\in S_0$ n'est utilisée par $\Pi_0$.</li><li>Montrer $k_0 = \mu(\partial S_0)$.</li><li>Montrer $k_0 = \sigma(H)$ (plus petite bordure d'un entourage) et que, après <code>nw_disconnect</code>, $\{v : A[v]\geqslant0\}$ est un entourage de plus petite bordure.</li></ol>`;

const E2 = R`<p><span data-def="graph">Graphe non orienté $G = (V,E)$ à sommets $1,\dots,n$, listes d'adjacence doublement chaînées : <code>struct link_s { int node; struct link_s *prev, *next; }</code> ; <code>struct graph_s { unsigned int n; link **neighbours; }</code>, tableau de longueur $n+1$ (case $0$ inutilisée) ; chaque arête est stockée comme deux arcs</span>. Densité $\delta(G) = \frac mn$ ; <span data-def="rho">$\rho(G) = \max_{X\neq\varnothing}\delta(G_X)$</span>, où $G_X$ est le sous-graphe induit par $X$.</p>
<ol start="17"><li><code>graph *gr_create(unsigned int n)</code> : graphe vide à $n$ sommets.</li><li><code>void gr_add(graph *G, int u, int v)</code> : insère l'arête $\{u,v\}$.</li><li><code>int degree(graph *G, int v)</code>.</li><li><code>int edges(graph *G)</code> : nombre d'arêtes.</li><li><code>double density(graph *G)</code>.</li></ol>
<p><b>Réseau associé</b> à $G$ ($n$ sommets, $m$ arêtes) et à un entier $r$ : <span data-def="assoc">$W = V\cup\{s,t\}$ ; arc $(s,v)$ de multiplicité $mn^2$ pour tout $v$ ; arcs $(u,v)$ et $(v,u)$ de multiplicité $n^2$ pour toute arête ; arc $(u,t)$ de multiplicité $mn^2-n^2\deg_G(u)+2r$ pour tout $u$</span>. Question : a-t-on $\rho(G)>\frac r{n^2}$ ?</p>
<ol start="22"><li><code>void reduce(graph *G, int r)</code> : place dans <code>H</code> le réseau associé.</li><li>Montrer $\delta(G_X) = \dfrac{\sum_{v\in X}\deg_G(v)-\mathrm{card}\{\{u,v\}\in E : u\in X,\ v\notin X\}}{2|X|}$.</li><li>Pour $S = \{s\}\cup X$ : $\mu(\partial S) = mn^3+2|X|\big(r-n^2\delta(G_X)\big)$, et $\mu(\partial\{s\}) = mn^3$.</li><li>Montrer : $\sigma(H) = mn^3\iff\rho(G)\leqslant\frac r{n^2}$ et $\sigma(H)< mn^3\iff\rho(G)>\frac r{n^2}$.</li><li><code>bool oracle(graph *G, int r)</code> : renvoie vrai si et seulement si $\rho(G)>\frac r{n^2}$. Justifier.</li></ol>
<p>$\Delta = \{(m',n') : 0\leqslant m'\leqslant m,\ 1\leqslant n'\leqslant n\}$.</p>
<ol start="27"><li>Si $\frac{m_1}{n_1}\neq\frac{m_2}{n_2}$ (couples de $\Delta$), alors $\big|\frac{m_1}{n_1}-\frac{m_2}{n_2}\big|\geqslant\frac1{n^2}$.</li><li>S'il n'existe aucun sous-graphe induit de densité $\geqslant\delta(G_X)+\frac1{n^2}$, alors $\delta(G_X) = \rho(G)$.</li><li><code>void binary_search(graph *G)</code> : modifie <code>A</code> pour que $X = \{v\in V : A[v]\geqslant0\}$ vérifie $\delta(G_X) = \rho(G)$. Justifier.</li><li>Comment faire interagir <code>densest_subgraph.c</code> avec <code>network.h</code> et <code>network.c</code> ?</li></ol>`;

const E3 = R`<p><b>Algorithme de Charikar</b> : <span data-def="algo">$\Gamma\leftarrow G$, $G_n\leftarrow G$ ; pour $i$ de $n$ à $2$ : si $\delta(G_i)>\delta(\Gamma)$ alors $\Gamma\leftarrow G_i$ ; on retire de $G_i$ un sommet $v_i$ de degré minimal (et ses arêtes) pour former $G_{i-1}$ ; on renvoie $\Gamma$</span>.</p>
<p><span data-def="orient">Une orientation de $G$ choisit un sens pour chaque arête ; $\deg^-(v)$ est le degré entrant. $\widehat G_0$ oriente l'arête $\{v_i,v_{i'}\}$ en $(v_{\min(i,i')},v_{\max(i,i')})$, c'est-à-dire vers le sommet dont le retrait l'a supprimée</span>.</p>
<ol start="31"><li>Montrer $\delta(G)\leqslant\max_v\deg^-_{\widehat G}(v)$ pour toute orientation $\widehat G$ de $G$.</li><li>Montrer $\deg^-_{\widehat G_0}(v_i)\leqslant2\delta(G_i)$ et en déduire un facteur d'approximation de l'algorithme.</li><li>Détailler une structure de données qui exécute l'algorithme en $O(n+m)$ (suggestion : une table des sommets de degré $d$ pour chaque $d\in[\![0,n]\!]$).</li></ol>`;

LEMME.exercises([
{ id: "mines24-mpi1-1", ...P, part: "1", level: 3, time: "1 h 10",
  title: "Réseaux, chemins augmentants et plus petite bordure",
  enonce: E1,
  decode: { donnees: [R`Les variables <code>H</code> et <code>A</code> sont globales : les fonctions n'ont presque pas d'arguments.`, R`Multiplicité = nombre de copies d'un arc ; résiduel = on « retourne » une copie de chaque arc emprunté.`], but: R`Construire des chemins réalisables jusqu'à déconnecter $s$ de $t$, puis prouver que leur nombre est la plus petite bordure (forme du théorème flot max / coupe min).`, cles: {} },
  steps: [
    { q: 1, t: "Q1. Rôle de la garde d'inclusion", h: R`<p>Que se passe-t-il si l'en-tête est inclus deux fois ?</p>`, b: R`<p>À la première inclusion, <code>NETWORK_H</code> n'est pas défini : <code>#ifndef NETWORK_H</code> laisse passer le contenu, et <code>#define NETWORK_H</code> le définit. À toute inclusion suivante dans le même fichier compilé, <code>#ifndef</code> est faux et le préprocesseur saute tout jusqu'au <code>#endif</code>. Cela évite les doubles définitions (de <code>struct network_s</code>, du <code>typedef</code>…), qui provoqueraient des erreurs de compilation.</p>`, rappels: ["mpi1-guard"] },
    { q: 2, t: "Q2. Faire interagir les deux fichiers", h: R`<p><code>#include "network.h"</code>, compilation séparée, édition de liens.</p>`, b: R`<ul><li><code>network.c</code> commence par <code>#include "network.h"</code> (guillemets : fichier local), qui lui donne la structure, la constante et les prototypes.</li><li>Tout autre fichier qui utilise le réseau inclut aussi <code>network.h</code>.</li><li>On compile séparément (<code>gcc -c network.c</code> donne <code>network.o</code>), puis on lie les objets : <code>gcc network.o main.o -o prog</code>.</li></ul><p><b>Remarques de rigueur</b> : en C (contrairement au C++), <code>const unsigned int NMAX</code> n'est pas une expression constante, donc ne peut pas dimensionner un tableau dans une <code>struct</code>, et une définition de variable dans un en-tête inclus par plusieurs fichiers provoque une double définition à l'édition de liens. On écrirait plutôt <code>#define NMAX 102</code>. De même, il faut <code>#include &lt;stdbool.h&gt;</code> pour le type <code>bool</code>.</p>`, rappels: ["mpi1-compil"] },
    { q: 3, t: "Q3. nw_init", h: R`<p>Assertion, puis remise à zéro des multiplicités.</p>`, b: C(String.raw`
void nw_init(unsigned int n) {
    assert(n < NMAX);              /* précondition (voir remarque) */
    H.n = n;
    for (unsigned int u = 0; u < n + 2; u++)
        for (unsigned int v = 0; v < n + 2; v++)
            H.mu[u][v] = 0;        /* aucun arc */
}`) + R`<p><b>Remarque</b> : les indices vont jusqu'à $n+1$ ; pour ne pas déborder, il faudrait en fait $n+2\leqslant n_{\max}$ (soit <code>assert(n + 2 &lt;= NMAX)</code>). La précondition de l'énoncé, $n< n_{\max}$, est un peu trop faible.</p>` },
    { q: 4, t: "Q4. nw_add", h: R`<p>Une ligne.</p>`, b: C(String.raw`
void nw_add(int u, int v) {
    H.mu[u][v] = H.mu[u][v] + 1;   /* une occurrence de plus de l'arc (u,v) */
}`) },
    { q: 5, t: "Q5. nw_remove", h: R`<p>On ne retire que si l'arc existe.</p>`, b: C(String.raw`
void nw_remove(int u, int v) {
    assert(H.mu[u][v] > 0);        /* l'arc doit exister */
    H.mu[u][v] = H.mu[u][v] - 1;
}`) + R`<p>L'assertion est indispensable : <code>mu</code> est non signé, $0-1$ donnerait un très grand entier.</p>` },
    { q: 6, t: "Q6. _arr_init", h: R`<p>Boucle sur les $n+2$ cases.</p>`, b: C(String.raw`
void _arr_init(int *T) {
    for (unsigned int v = 0; v < H.n + 2; v++)
        T[v] = -1;
}`) },
    { q: 7, t: "Q7. Parcours en largeur", h: R`<p>File dans un tableau de taille $n+2$, prédécesseurs dans <code>A</code>.</p>`, b: C(String.raw`
bool _bfs_tree(void) {
    int N = H.n + 2;               /* nombre de sommets */
    int file[NMAX];                /* chaque sommet est enfilé au plus une fois */
    int debut = 0, fin = 0;
    _arr_init(A);
    A[0] = 0;                      /* la source est sa propre racine */
    file[fin++] = 0;
    while (debut < fin) {
        int u = file[debut++];     /* on défile */
        for (int v = 0; v < N; v++)
            if (H.mu[u][v] > 0 && A[v] == -1) {   /* arc (u,v), v pas encore vu */
                A[v] = u;
                file[fin++] = v;
            }
    }
    return A[N - 1] != -1;         /* le puits t = n+1 est-il atteint ? */
}`) + R`<p>Un sommet reçoit son prédécesseur à sa découverte et n'est enfilé qu'une fois, donc la file de taille $n+2$ suffit. Le parcours en largeur découvre les sommets par distance croissante : l'arborescence donne des plus courts chemins. Complexité $O(n^2)$ (matrice d'adjacence).</p>`, rappels: ["mpi1-bfs"] },
    { q: 8, t: "Q8. _residue", h: R`<p>Remonter de $t$ à $s$ avec <code>A</code>.</p>`, b: C(String.raw`
void _residue(void) {
    int v = H.n + 1;               /* on part du puits */
    while (v != 0) {               /* jusqu'à la source */
        int u = A[v];              /* arc (u,v) du chemin alpha */
        nw_remove(u, v);           /* une occurrence de (u,v) en moins */
        nw_add(v, u);              /* une occurrence de l'arc opposé en plus */
        v = u;
    }
}`) + R`<p>On parcourt le chemin $\alpha$ à l'envers ; chaque arc est traité une fois, comme dans la définition du réseau résiduel.</p>` },
    { q: 9, t: "Q9. Des résiduels successifs à un seul résiduel", h: R`<p>Suivre un « flot » $f(e)$ = nombre de fois où l'arc $e$ est utilisé, en annulant les passages en sens inverse.</p>`, b: R`<p><b>Idée</b> : on enregistre, pour chaque arc $e = (u,v)\in F$, un entier $f(e)$ (combien de fois $e$ est utilisé « net »), tel que le réseau courant soit</p>$$\mu_{\text{cour}}(u,v) = \mu(u,v)-f(u,v)+f(v,u)$$<p>(on retire les copies utilisées et on ajoute les copies retournées). Au départ $f = 0$.</p><p><b>Mise à jour</b> quand on applique <code>_residue</code> avec un chemin $\alpha$ : pour chaque arc $(u,v)$ de $\alpha$, si $f(v,u)> 0$ on fait $f(v,u)\leftarrow f(v,u)-1$ (on annule un passage en sens inverse), sinon $f(u,v)\leftarrow f(u,v)+1$. Dans les deux cas, $\mu_{\text{cour}}(u,v)$ baisse de $1$ et $\mu_{\text{cour}}(v,u)$ monte de $1$ : c'est exactement l'effet de <code>_residue</code>. Comme $(u,v)$ existe dans le réseau courant, on garde $0\leqslant f\leqslant\mu$.</p><p><b>Invariant</b> après $j$ appels : $0\leqslant f\leqslant\mu$ ; en tout sommet autre que $s$ et $t$, autant d'unités de $f$ entrent que sortent (un chemin qui entre dans un sommet en ressort) ; il sort $j$ unités nettes de $s$.</p><p><b>Décomposition</b> : on extrait un chemin de $s$ à $t$ formé d'arcs où $f> 0$ (en partant de $s$ et en suivant des arcs « chargés », la conservation garantit qu'on ne reste pas bloqué avant $t$) ; on enlève $1$ sur ses arcs et on recommence. On obtient $k$ chemins $\Pi$ qui utilisent chaque arc $e$ exactement $f(e)\leqslant\mu(e)$ fois : $\Pi$ est réalisable et $\mathrm{Res}(H,\Pi)$ a pour multiplicités $\mu-f(u,v)+f(v,u)$, c'est-à-dire le réseau obtenu.</p><p>(S'il reste après extraction des circuits d'unités de flot sans lien avec $s$, on les traite comme des passages supplémentaires sur des arcs déjà comptés ; ils ne changent ni $k$ ni les raisonnements qui suivent, qui ne portent que sur les arcs qui sortent ou entrent dans un entourage.)</p>` },
    { q: 10, t: "Q10. nw_disconnect", h: R`<p>Boucle : parcours en largeur, puis résiduel.</p>`, b: C(String.raw`
void nw_disconnect(void) {
    while (_bfs_tree())            /* tant que t est accessible depuis s */
        _residue();                /* résiduel le long d'un plus court chemin */
}`) + R`<p>Le dernier appel à <code>_bfs_tree</code> a renvoyé <code>false</code> : <code>A</code> contient alors une arborescence de racine $s$ dans le réseau résiduel final, qui n'atteint pas $t$, comme demandé.</p>` },
    { q: 11, t: "Q11. Terminaison", h: R`<p>Le nombre $k$ de chemins réalisables est borné par $\mu(\partial\{s\})$.</p>`, b: R`<p>Après $k$ tours, par Q9, le réseau est $\mathrm{Res}(H,\Pi)$ pour un ensemble réalisable $\Pi$ de $k$ chemins. Par Q12 appliquée à l'entourage $S = \{s\}$ (qui contient $s$ et pas $t$) :</p>$$k\leqslant\mu(\partial\{s\}) = \sum_v\mu(s,v)\qquad(\text{multiplicités du réseau de départ}).$$<p><b>Variant</b> : $\mu(\partial\{s\})-k$ est un entier naturel qui diminue de $1$ à chaque tour. La boucle fait donc au plus $\mu(\partial\{s\})$ tours : elle termine.</p>` },
    { q: 12, t: "Q12. Chaque chemin traverse la bordure", h: R`<p>Un chemin part de $S$ et finit hors de $S$.</p>`, b: R`<p>Chaque chemin $\pi_j$ commence en $s\in S$ et finit en $t\notin S$ : il contient au moins un arc qui sort de $S$, c'est-à-dire un arc de $\partial S$ (le premier arc dont l'origine est dans $S$ et l'extrémité hors de $S$). En comptant ces passages :</p>$$k\leqslant\sum_{e\in\partial S}\mathrm{card}\{j : e\in\pi_j\}\leqslant\sum_{e\in\partial S}\mu(e) = \mu(\partial S),$$<p>la seconde inégalité venant de la réalisabilité.</p>`, rappels: ["mpi1-flot"] },
    { q: 13, t: "Q13. Arcs sortants de $S_0$ saturés", h: R`<p>Sinon, $v$ serait accessible dans le résiduel.</p>`, b: R`<p>Soit $e = (u,v)\in F$ avec $u\in S_0$, $v\notin S_0$. Dans $\mathrm{Res}(H,\Pi_0)$, la multiplicité de $(u,v)$ vaut $\mu(e)-(\text{utilisations de }e)+(\text{utilisations de }(v,u))\geqslant\mu(e)-(\text{utilisations de }e)$.</p><p>Si une occurrence de $e$ n'était pas utilisée, cette multiplicité serait $\geqslant1$ : l'arc $(u,v)$ existerait dans le résiduel, et $v$ serait accessible depuis $s$ (puisque $u$ l'est), donc $v\in S_0$ : contradiction. Toutes les $\mu(e)$ occurrences sont donc utilisées.</p>` },
    { q: 14, t: "Q14. Aucun arc entrant dans $S_0$ n'est utilisé", h: R`<p>Une utilisation de $(v,u)$ crée une copie de $(u,v)$ dans le résiduel.</p>`, b: R`<p>Soit $(v,u)\in F$ avec $v\notin S_0$, $u\in S_0$. Dans le résiduel, la multiplicité de $(u,v)$ vaut $\mu(u,v)-(\text{utilisations de }(u,v))+(\text{utilisations de }(v,u))$, avec $\mu(u,v) = 0$ si $(u,v)\notin F$.</p><p>Par Q13, si $(u,v)\in F$, toutes ses occurrences sont utilisées : les deux premiers termes se compensent. Il reste la multiplicité « utilisations de $(v,u)$ ». Si elle était $\geqslant1$, $(u,v)$ serait un arc du résiduel et $v$ serait accessible : contradiction. Donc $(v,u)$ n'est jamais utilisé.</p>` },
    { q: 15, t: "Q15. $k_0 = \\mu(\\partial S_0)$", h: R`<p>Compter les sorties et les entrées de chaque chemin dans $S_0$.</p>`, b: R`<p>Un chemin de $s\in S_0$ à $t\notin S_0$ sort de $S_0$ une fois de plus qu'il n'y entre. D'après Q14, aucun chemin n'entre dans $S_0$ : chaque chemin sort donc de $S_0$ <b>exactement une fois</b>. Le nombre total d'utilisations d'arcs de $\partial S_0$ vaut donc $k_0$.</p><p>D'après Q13, ce même nombre vaut $\sum_{e\in\partial S_0}\mu(e) = \mu(\partial S_0)$ (toutes les occurrences sont utilisées). D'où</p><div class="sbox">$$k_0 = \mu(\partial S_0).$$</div>` },
    { q: 16, t: "Q16. $k_0 = \\sigma(H)$ et entourage optimal", h: R`<p>Encadrer $\sigma(H)$ avec Q12 et Q15.</p>`, b: R`<p>Par Q12, $k_0\leqslant\mu(\partial S)$ pour tout entourage $S$, donc $k_0\leqslant\sigma(H)$. Par Q15, $\sigma(H)\leqslant\mu(\partial S_0) = k_0$. D'où</p><div class="sbox">$$k_0 = \sigma(H) = \mu(\partial S_0).$$</div><p><b>Après <code>nw_disconnect</code></b> : par Q9, le réseau obtenu est $\mathrm{Res}(H,\Pi_0)$ pour un $\Pi_0$ réalisable, et il n'a plus de chemin de $s$ à $t$. Le dernier parcours en largeur a marqué ($A[v]\geqslant0$) exactement les sommets accessibles depuis $s$, soit $S_0$. C'est un entourage ($s$ marqué, $t$ non) de multiplicité $\mu(\partial S_0) = \sigma(H)$ : un entourage de plus petite bordure.</p>`, rappels: ["mpi1-flot"] }
  ],
  piege: R`En Q14, oublier qu'utiliser l'arc $(v,u)$ ajoute une copie de $(u,v)$ dans le résiduel : c'est elle qui rendrait $v$ accessible.`,
  methode: R`Ford-Fulkerson : augmenter tant qu'un chemin existe dans le résiduel ; à la fin, les sommets accessibles forment une coupe minimale (arcs sortants saturés, arcs entrants inutilisés).`
},
{ id: "mines24-mpi1-2", ...P, part: "2", level: 4, time: "1 h 10",
  title: "Sous-graphe le plus dense : l'algorithme de Goldberg",
  enonce: E2,
  decode: { donnees: [R`Dans le réseau associé, la source est $0$, les sommets du graphe $1,\dots,n$, le puits $n+1$ : la numérotation colle avec celle du réseau.`], but: R`Décider $\rho(G)>\frac r{n^2}$ par une coupe minimale, puis trouver $\rho(G)$ exactement par dichotomie sur $r$.`, cles: {} },
  steps: [
    { q: 17, t: "Q17. gr_create", h: R`<p>Allouer la structure et un tableau de $n+1$ listes vides.</p>`, b: C(String.raw`
graph *gr_create(unsigned int n) {
    graph *G = malloc(sizeof(graph));
    G->n = n;
    G->neighbours = malloc((n + 1) * sizeof(link *));
    for (unsigned int v = 0; v <= n; v++)
        G->neighbours[v] = NULL;      /* liste d'adjacence vide */
    return G;
}`) },
    { q: 18, t: "Q18. gr_add", h: R`<p>Insérer en tête dans deux listes.</p>`, b: C(String.raw`
/* insère v en tête de la liste d'adjacence de u */
static void push_link(graph *G, int u, int v) {
    link *l = malloc(sizeof(link));
    l->node = v;
    l->prev = NULL;
    l->next = G->neighbours[u];
    if (l->next != NULL) l->next->prev = l;
    G->neighbours[u] = l;
}

void gr_add(graph *G, int u, int v) {
    push_link(G, u, v);    /* arc u -> v */
    push_link(G, v, u);    /* arc v -> u : l'arête est stockée deux fois */
}`) + R`<p>Insertion en tête en $O(1)$, sans oublier le chaînage arrière (<code>prev</code>).</p>` },
    { q: 19, t: "Q19. degree", h: R`<p>Longueur de la liste.</p>`, b: C(String.raw`
int degree(graph *G, int v) {
    int d = 0;
    for (link *l = G->neighbours[v]; l != NULL; l = l->next)
        d++;
    return d;
}`) },
    { q: 20, t: "Q20. edges", h: R`<p>La somme des degrés compte chaque arête deux fois.</p>`, b: C(String.raw`
int edges(graph *G) {
    int somme = 0;
    for (unsigned int v = 1; v <= G->n; v++)
        somme += degree(G, v);
    return somme / 2;      /* chaque arête est stockée comme deux arcs */
}`) },
    { q: 21, t: "Q21. density", h: R`<p>Attention à la division entière.</p>`, b: C(String.raw`
double density(graph *G) {
    return (double) edges(G) / G->n;
}`) + R`<p>La conversion en <code>double</code> évite la division entière.</p>` },
    { q: 22, t: "Q22. Le réseau associé", h: R`<p>Source $0$, sommets $1..n$, puits $n+1$ : remplir <code>H.mu</code>.</p>`, b: C(String.raw`
void reduce(graph *G, int r) {
    unsigned int n = G->n;
    unsigned int m = edges(G);
    nw_init(n);                                 /* n + 2 sommets, aucun arc */
    for (unsigned int u = 1; u <= n; u++) {
        H.mu[0][u] = m * n * n;                 /* arc (s, u) */
        for (link *l = G->neighbours[u]; l != NULL; l = l->next)
            H.mu[u][l->node] = n * n;           /* arc (u, v) pour l'arête {u,v} */
        H.mu[u][n + 1] = m * n * n - n * n * degree(G, u) + 2 * r;   /* arc (u, t) */
    }
}`) + R`<p>Chaque arête $\{u,v\}$ apparaît dans la liste de $u$ (donne l'arc $(u,v)$) et dans celle de $v$ (donne $(v,u)$). La multiplicité de $(u,t)$ vaut $n^2(m-\deg u)+2r\geqslant0$ ; si elle est nulle, il n'y a simplement pas d'arc.</p>` },
    { q: 23, t: "Q23. Densité et degrés", h: R`<p>Somme des degrés dans $X$ = arêtes internes comptées deux fois + arêtes qui sortent de $X$.</p>`, b: R`<p>Faisons la somme $\sum_{v\in X}\deg_G(v)$ : chaque arête $\{u,v\}$ de $G$ y compte autant de fois qu'elle a d'extrémités dans $X$ :</p><ul><li>deux fois si $u,v\in X$ (arête de $E_X$) ;</li><li>une fois si une seule extrémité est dans $X$ (arête « coupée ») ;</li><li>zéro fois sinon.</li></ul>$$\sum_{v\in X}\deg_G(v) = 2|E_X|+c_X,\qquad c_X = \mathrm{card}\{\{u,v\}\in E : u\in X,\ v\notin X\}.$$<p>On isole $|E_X|$ et on divise par $|X|$ :</p><div class="sbox">$$\delta(G_X) = \frac{|E_X|}{|X|} = \frac{\sum_{v\in X}\deg_G(v)-c_X}{2|X|}.$$</div>` },
    { q: 24, t: "Q24. Bordure de $\\{s\\}\\cup X$", h: R`<p>Lister les trois sortes d'arcs qui quittent $S$.</p>`, b: R`<p>Les arcs qui sortent de $S = \{s\}\cup X$ sont :</p><ul><li>$(s,v)$ pour $v\notin X$ : $(n-|X|)$ arcs de multiplicité $mn^2$ ;</li><li>$(u,t)$ pour $u\in X$ : multiplicité $mn^2-n^2\deg_G(u)+2r$ chacun ;</li><li>$(u,v)$ avec $u\in X$, $v\notin X$, $\{u,v\}\in E$ : $c_X$ arcs de multiplicité $n^2$.</li></ul>$$\mu(\partial S) = (n-|X|)mn^2+|X|mn^2-n^2\sum_{u\in X}\deg_G(u)+2r|X|+n^2c_X = mn^3+2r|X|-n^2\Big(\sum_{u\in X}\deg_G(u)-c_X\Big).$$<p>Avec Q23, la parenthèse vaut $2|X|\delta(G_X)$ :</p><div class="sbox">$$\mu(\partial S) = mn^3+2|X|\big(r-n^2\delta(G_X)\big).$$</div><p>Pour $S = \{s\}$ : seuls les $n$ arcs $(s,v)$ sortent, d'où $\mu(\partial\{s\}) = n\cdot mn^2 = mn^3$.</p>` },
    { q: 25, t: "Q25. Le test par la coupe minimale", h: R`<p>Les entourages sont exactement les $\{s\}\cup X$.</p>`, b: R`<p>Un entourage contient $s$, pas $t$ : c'est $\{s\}\cup X$ pour un $X\subseteq V$. Par Q24, sa bordure vaut $mn^3$ si $X = \varnothing$, et $mn^3+2|X|(r-n^2\delta(G_X))$ sinon. Donc</p>$$\sigma(H) = \min\Big(mn^3,\ \min_{X\neq\varnothing}\big[mn^3+2|X|(r-n^2\delta(G_X))\big]\Big)\leqslant mn^3.$$<ul><li>$\sigma(H)< mn^3\iff$ il existe $X\neq\varnothing$ avec $r-n^2\delta(G_X)< 0$, c'est-à-dire $\delta(G_X)>\frac r{n^2}$ $\iff\rho(G)>\frac r{n^2}$.</li><li>Comme toujours $\sigma(H)\leqslant mn^3$, la négation donne $\sigma(H) = mn^3\iff\rho(G)\leqslant\frac r{n^2}$.</li></ul>` },
    { q: 26, t: "Q26. L'oracle", h: R`<p>Après <code>nw_disconnect</code>, regarder si un sommet du graphe est marqué.</p>`, b: C(String.raw`
bool oracle(graph *G, int r) {
    reduce(G, r);
    nw_disconnect();                         /* A : sommets accessibles = S0 */
    for (unsigned int v = 1; v <= G->n; v++)
        if (A[v] >= 0) return true;          /* S0 contient un sommet du graphe */
    return false;                            /* S0 = {s} */
}`) + R`<p><b>Principe</b> : après <code>nw_disconnect</code>, $S_0 = \{v : A[v]\geqslant0\} = \{s\}\cup X_0$ est un entourage de plus petite bordure (Q16).</p><ul><li>Si $\rho(G)>\frac r{n^2}$ : $\sigma(H)< mn^3$ (Q25), donc $X_0\neq\varnothing$ (sinon la bordure vaudrait $mn^3$) : on renvoie <code>true</code>.</li><li>Si $\rho(G)\leqslant\frac r{n^2}$ : $\{s\}$ est lui-même de plus petite bordure. Or $S_0$ est inclus dans <b>tout</b> entourage minimal $S$ : pour un tel $S$, l'argument de Q15 montre que les arcs qui sortent de $S$ sont saturés et que ceux qui y entrent ne sont pas utilisés, donc aucun arc du résiduel ne sort de $S$, et les sommets accessibles depuis $s$ restent dans $S$. Avec $S = \{s\}$ : $S_0 = \{s\}$, on renvoie <code>false</code>.</li></ul><p>Bonus : quand la réponse est <code>true</code>, la ligne $\mu(\partial S_0)< mn^3$ de Q24 montre que $\delta(G_{X_0})>\frac r{n^2}$ : <code>A</code> désigne un sous-graphe témoin.</p>` },
    { q: 27, t: "Q27. Deux densités distinctes sont éloignées", h: R`<p>Réduire au même dénominateur.</p>`, b: R`$$\Big|\frac{m_1}{n_1}-\frac{m_2}{n_2}\Big| = \frac{|m_1n_2-m_2n_1|}{n_1n_2}.$$<p>Le numérateur est un entier, non nul puisque les fractions diffèrent : il vaut au moins $1$. Le dénominateur vérifie $n_1n_2\leqslant n^2$. D'où</p><div class="sbox">$$\Big|\frac{m_1}{n_1}-\frac{m_2}{n_2}\Big|\geqslant\frac1{n^2}.$$</div>` },
    { q: 28, t: "Q28. Un critère d'optimalité", h: R`<p>Toute densité de sous-graphe induit est un $\frac{m'}{n'}$ avec $(m',n')\in\Delta$.</p>`, b: R`<p>Soit $Y$ réalisant $\rho(G) = \delta(G_Y)$. Par définition, $\rho(G)\geqslant\delta(G_X)$. Les deux densités sont de la forme $\frac{m'}{n'}$ avec $(m',n')\in\Delta$ (un sous-graphe induit a au plus $m$ arêtes et entre $1$ et $n$ sommets).</p><p>Si $\rho(G)\neq\delta(G_X)$, Q27 donne $\rho(G)\geqslant\delta(G_X)+\frac1{n^2}$ : $G_Y$ serait un sous-graphe induit de densité $\geqslant\delta(G_X)+\frac1{n^2}$, ce que l'hypothèse exclut. Donc $\delta(G_X) = \rho(G)$.</p>` },
    { q: 29, t: "Q29. Recherche dichotomique", h: R`<p>Chercher le plus petit $r$ tel que l'oracle réponde faux, puis relancer l'oracle en $r-1$.</p>`, b: R`<p><b>Encadrement</b> : $0\leqslant\rho(G)\leqslant\frac{n-1}2$ (un sommet a au plus $n-1$ voisins, donc $m'\leqslant\frac{n'(n'-1)}2$). Avec $r_{\max} = \frac{n^2(n-1)}2$ (entier), l'oracle répond <code>false</code> en $r_{\max}$. La réponse de l'oracle est décroissante en $r$ (vraie pour $r< n^2\rho$, fausse ensuite).</p>` + C(String.raw`
void binary_search(graph *G) {
    int n = G->n;
    int lo = -1;                      /* oracle(lo) vrai (r = -1 : convention) */
    int hi = n * n * (n - 1) / 2;     /* oracle(hi) faux */
    while (hi - lo > 1) {
        int mid = (lo + hi) / 2;
        if (oracle(G, mid)) lo = mid; else hi = mid;
    }
    if (lo == -1) {                   /* rho(G) = 0 : pas d'arête */
        _arr_init(A); A[0] = 0; A[1] = 0;      /* un sommet seul convient */
    } else
        oracle(G, lo);                /* A décrit X avec delta(G_X) > lo / n^2 */
}`) + R`<p><b>Correction</b> : à la fin, $hi = lo+1$, $\rho(G)>\frac{lo}{n^2}$ et $\rho(G)\leqslant\frac{lo+1}{n^2}$. Le dernier appel <code>oracle(G, lo)</code> laisse dans <code>A</code> un ensemble $X$ avec $\delta(G_X)>\frac{lo}{n^2}$ (bonus de Q26). Si $\delta(G_X)\neq\rho(G)$, Q27 donnerait $\delta(G_X)\leqslant\rho(G)-\frac1{n^2}\leqslant\frac{lo}{n^2}$ : contradiction. Donc $\delta(G_X) = \rho(G)$.</p><p><b>Efficacité</b> : $O(\log n^3) = O(\log n)$ appels à l'oracle, au lieu de tester toutes les valeurs de $r$.</p>` },
    { q: 30, t: "Q30. Compilation des trois fichiers", h: R`<p><code>#include "network.h"</code>, déclarations <code>extern</code> pour <code>H</code> et <code>A</code>.</p>`, b: R`<ul><li><code>densest_subgraph.c</code> commence par <code>#include "network.h"</code> pour connaître le type <code>network</code> et les fonctions <code>nw_init</code>, <code>nw_disconnect</code>, <code>_arr_init</code>.</li><li>Les variables globales <code>H</code> et <code>A</code> sont <b>définies</b> dans <code>network.c</code> ; pour les utiliser ailleurs, il faut les <b>déclarer</b> : <code>extern network H; extern int A[NMAX];</code> (idéalement ajoutées dans <code>network.h</code>).</li><li>On compile chaque fichier en objet puis on lie : <code>gcc -c network.c</code>, <code>gcc -c densest_subgraph.c</code>, <code>gcc network.o densest_subgraph.o -o densest</code>.</li></ul>`, rappels: ["mpi1-compil"] }
  ],
  piege: R`En Q26, répondre <code>true</code> dès que $\sigma(H)\leqslant mn^3$ : il faut un $X$ non vide, et c'est la minimalité de l'ensemble accessible $S_0$ qui garantit $S_0 = \{s\}$ dans le cas d'égalité.`,
  methode: R`Réduction à une coupe minimale : construire un réseau dont la bordure de $\{s\}\cup X$ s'exprime avec la quantité à optimiser, puis dichotomie sur un seuil entier grâce à l'écart minimal entre fractions.`
},
{ id: "mines24-mpi1-3", ...P, part: "3", level: 3, time: "35 min",
  title: "Algorithme glouton de Charikar",
  enonce: E3,
  decode: { donnees: [R`Le sommet retiré à l'étape $i$ a un degré minimal dans $G_i$, donc au plus la moyenne $\frac{2m_i}i$.`], but: R`Prouver que le glouton est une 2-approximation, puis l'implémenter en temps linéaire.`, cles: {} },
  steps: [
    { q: 31, t: "Q31. Densité et degré entrant maximal", h: R`<p>La somme des degrés entrants vaut $m$.</p>`, b: R`<p>Chaque arête est orientée dans un seul sens, et chaque arc compte pour exactement un degré entrant :</p>$$\sum_{v\in V}\deg^-_{\widehat G}(v) = m.$$<p>Une moyenne est inférieure au maximum :</p><div class="sbox">$$\delta(G) = \frac mn = \frac1n\sum_v\deg^-_{\widehat G}(v)\leqslant\max_v\deg^-_{\widehat G}(v).$$</div>` },
    { q: 32, t: "Q32. Facteur d'approximation 2", h: R`<p>Le degré entrant de $v_i$ dans $\widehat G_0$ est son degré dans $G_i$.</p>`, b: R`<p><b>Degré entrant de $v_i$</b> : l'arête $\{v_i,v_{i'}\}$ est orientée vers $v_{\max(i,i')}$. Les arcs qui entrent dans $v_i$ viennent donc des arêtes $\{v_i,v_{i'}\}$ avec $i'< i$, c'est-à-dire des voisins de $v_i$ encore présents dans $G_i$ (qui contient $v_1,\dots,v_i$) :</p>$$\deg^-_{\widehat G_0}(v_i) = \deg_{G_i}(v_i).$$<p>Comme $v_i$ minimise le degré dans $G_i$, son degré est au plus la moyenne : $\deg_{G_i}(v_i)\leqslant\frac{2m_i}i = 2\delta(G_i)$, où $m_i$ est le nombre d'arêtes de $G_i$. (Pour $i = 1$, $G_1$ n'a pas d'arête et les deux membres sont nuls.)</p><div class="sbox">$$\deg^-_{\widehat G_0}(v_i)\leqslant2\delta(G_i)\leqslant2\delta(\Gamma).$$</div><p><b>Facteur</b> : soit $X$ avec $\delta(G_X) = \rho(G)$. En gardant de $\widehat G_0$ les arcs entre sommets de $X$, on obtient une orientation de $G_X$ dont les degrés entrants sont plus petits. Par Q31 :</p>$$\rho(G) = \delta(G_X)\leqslant\max_{v\in X}\deg^-_{\widehat G_0}(v)\leqslant2\delta(\Gamma).$$<p>L'algorithme renvoie $\Gamma$ avec $\delta(\Gamma)\geqslant\frac12\rho(G)$ : c'est une <b>2-approximation</b>.</p>` },
    { q: 33, t: "Q33. Implémentation en O(n + m)", h: R`<p>Des « seaux » de sommets par degré, un pointeur vers le degré minimal courant.</p>`, b: R`<p><b>Données</b> :</p><ul><li><code>deg[v]</code> : degré courant de $v$ dans $G_i$ ; <code>removed[v]</code> : booléen ;</li><li><code>bucket[d]</code> pour $d\in[\![0,n]\!]$ : liste doublement chaînée des sommets restants de degré $d$, et pour chaque sommet un pointeur vers son maillon (retrait en $O(1)$) ;</li><li><code>dmin</code> : un indice au plus égal au plus petit degré présent ;</li><li><code>m_cur</code> : nombre d'arêtes de $G_i$ ; <code>order[]</code> : ordre de suppression ; <code>best_i</code> : l'indice $i$ de la meilleure densité vue.</li></ul><p><b>Étape $i$</b> ($i$ de $n$ à $2$) :</p><ol><li>calculer $\delta(G_i) = $ <code>m_cur / i</code> en $O(1)$ et mettre à jour <code>best_i</code> ;</li><li>tant que <code>bucket[dmin]</code> est vide, faire <code>dmin++</code> ; prendre $v$ dans ce seau et le retirer ;</li><li>marquer $v$ supprimé et parcourir sa liste d'adjacence : pour chaque voisin $u$ non supprimé, déplacer $u$ de <code>bucket[deg[u]]</code> vers <code>bucket[deg[u]-1]</code> en $O(1)$, faire <code>deg[u]--</code>, <code>m_cur--</code>, et <code>dmin = min(dmin, deg[u])</code>.</li></ol><p>À la fin, $\Gamma = G_{\text{best\_i}}$ : ce sont les sommets qui n'étaient pas supprimés avant l'étape <code>best_i</code>, qu'on lit dans <code>order</code>.</p><p><b>Complexité</b> : initialisation des degrés et des seaux $O(n+m)$. Chaque sommet est retiré une fois et sa liste parcourue une fois : $O(n+m)$ au total. <code>dmin</code> augmente d'au plus $n$ au total, plus $1$ pour chaque fois qu'il a diminué ; il diminue d'au plus $1$ par arête retirée. Donc le total de ses incréments est $O(n+m)$.</p><div class="sbox"><p style="margin:0">Temps total : $O(n+m)$.</p></div>` }
  ],
  piege: R`En Q33, rechercher le degré minimal par un parcours de tous les sommets à chaque étape : on retombe en $O(n^2)$.`,
  methode: R`Approximation : relier la solution gloutonne à une borne de l'optimum (ici par une orientation et le degré entrant maximal). Linéarité : des seaux indexés par le degré.`
}
]);
})();

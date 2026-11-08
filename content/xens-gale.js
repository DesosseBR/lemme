/* Commando X-ENS · Aller plus loin · Sujet « Critère de parité de Gale ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 15, kind: "probleme", qnav: true, side: true, level: 4, plus: "gale",
  sujet: "Polytopes cycliques et critère de Gale",
  sujetDesc: "On prend n points sur la courbe des moments t ↦ (t, t², …, t^d) de ℝ^d et on étudie leur enveloppe convexe, le polytope cyclique C(d, n). Grâce au déterminant de Vandermonde, on montre que d points forment une facette si et seulement si une condition de parité (Gale) est vérifiée ; on compte les facettes, et on montre que C(d, n) est ⌊d/2⌋-voisinant, ce qui est optimal (lemme de Radon)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "ga-vdm": { t: "Vandermonde", b: R`<p>$\det\begin{pmatrix}1&x_0&\cdots&x_0^d\\\vdots&&&\vdots\\1&x_d&\cdots&x_d^d\end{pmatrix} = \prod_{0\leqslant i\lt j\leqslant d}(x_j-x_i)$.</p>` },
  "ga-aff": { t: "Indépendance affine", b: R`<p>$p_0,\dots,p_d\in\mathbb R^d$ sont affinement indépendants si et seulement si $\det\begin{pmatrix}1&p_0\\\vdots&\vdots\\1&p_d\end{pmatrix}\neq0$ (points écrits en ligne). Alors ils engendrent un hyperplan affine dès qu'on en prend $d$, d'équation $\det\begin{pmatrix}1&x\\1&p_1\\\vdots&\vdots\\1&p_d\end{pmatrix} = 0$.</p>` },
  "ga-sign": { t: "Signe d'un polynôme", b: R`<p>Un polynôme réel à racines simples change de signe en chacune de ses racines, et garde un signe constant entre deux racines consécutives.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Un <b>polytope</b> est l'enveloppe convexe d'un ensemble fini $V$ de points de $\mathbb R^d$. Une partie $F\subset V$ est une <b>face</b> s'il existe un hyperplan affine $H$ contenant $F$ tel que $V\setminus F$ soit strictement d'un même côté de $H$ ; une <b>facette</b> est une face de dimension $d-1$ (si le polytope est de dimension $d$). La <b>courbe des moments</b> est $\varphi(t) = (t,t^2,\dots,t^d)$. Pour $t_1\lt\dots\lt t_n$ ($n\geqslant d+1$), le <b>polytope cyclique</b> est $C(d,n) = \operatorname{Conv}\{\varphi(t_1),\dots,\varphi(t_n)\}$. On identifie une partie $S\subset[\![1,n]\!]$ à $\{\varphi(t_i) : i\in S\}$. $S$ vérifie la <b>condition de Gale</b> si pour tous $i\lt j$ hors de $S$, le nombre d'éléments de $S$ strictement entre $i$ et $j$ est pair.</p>`;

const figSigne = GRAPH({ w: 460, h: 230, x: [0.4, 7.6], y: [-3, 12], xt: [1, 2, 3, 4, 5, 6, 7], yt: [5, 10], xl: "t", curves: [{ f: t => (t - 2) * (t - 3) * (t - 5) * (t - 6), c: "b", n: 400 }], extra: (X, Y) => { let s = ""; [1, 4, 7].forEach(t => { const v = (t - 2) * (t - 3) * (t - 5) * (t - 6); s += `<circle cx="${X(t).toFixed(1)}" cy="${Y(Math.min(v, 11.5)).toFixed(1)}" r="5" class="ptv"/>`; }); [2, 3, 5, 6].forEach(t => { s += `<circle cx="${X(t).toFixed(1)}" cy="${Y(0).toFixed(1)}" r="5" class="ptr"/>`; }); return s; } }, R`$d = 4$, $n = 7$, $S = \{2,3,5,6\}$ (en rouge) : $P(t) = F_S(\varphi(t))$ s'annule exactement aux $t_i$, $i\in S$, et change de signe à chacun. Les points hors de $S$ (en vert, $1,4,7$) sont séparés par un nombre pair de racines : $P$ y a le même signe, et $S$ est une facette.`, "Signe de P");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "gale-1", ...P, part: "Partie I", time: "30 min",
  title: "Simplexes et courbe des moments",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Soit $V = \{p_0,\dots,p_d\}$ affinement indépendants (un simplexe). Montrer que toute partie non vide $F\subsetneq V$ est une face. (Utiliser les coordonnées barycentriques $\lambda_0,\dots,\lambda_d$, qui sont des fonctions affines.)</li>
<li>Montrer que $d+1$ points distincts de la courbe des moments sont toujours affinement indépendants.</li>
<li>Pour $S = \{s_1,\dots,s_d\}\subset[\![1,n]\!]$, on pose $F_S(x) = \det\begin{pmatrix}1&x\\1&\varphi(t_{s_1})\\\vdots&\vdots\\1&\varphi(t_{s_d})\end{pmatrix}$ ($x\in\mathbb R^d$ en ligne) et $P_S(t) = F_S(\varphi(t))$. Montrer que $P_S$ est un polynôme de degré $d$ dont les racines sont exactement les $t_{s_i}$, toutes simples.</li></ol>`,
  decode: { donnees: [R`Vandermonde.`], but: R`Construire, pour chaque $d$-uplet de points de la courbe, la forme affine qui définit l'hyperplan qu'ils engendrent.`, cles: {} },
  steps: [
    Q(1, "Toutes les parties d'un simplexe sont des faces", R`<p>$\ell = \sum_{i\notin F}\lambda_i$ est affine, nulle sur $F$, égale à $1$ sur $V\setminus F$.</p>`, R`<p>Tout $x\in\mathbb R^d$ s'écrit $x = \sum\lambda_i(x)p_i$, $\sum\lambda_i(x) = 1$, avec des $\lambda_i$ affines et $\lambda_i(p_j) = \delta_{ij}$. Pour $F\subsetneq V$ non vide, $\ell = \sum_{i : p_i\notin F}\lambda_i$ est affine non constante ($\ell = 0$ sur $F$, $1$ hors de $F$). L'hyperplan $H = \{\ell = 0\}$ contient $F$, et $V\setminus F$ est dans $\{\ell = 1\}\subset\{\ell>0\}$ : $F$ est une face.</p>`),
    Q(2, "Points de la courbe des moments", R`<p>Le déterminant de la question est un Vandermonde.</p>`, R`<p>Pour $u_0\lt\dots\lt u_d$, la matrice de lignes $(1,\varphi(u_i)) = (1,u_i,\dots,u_i^d)$ est de Vandermonde, de déterminant $\prod_{i\lt j}(u_j-u_i)\neq0$ : les $\varphi(u_i)$ sont affinement indépendants. En particulier toute facette de $C(d,n)$ a exactement $d$ sommets, et $C(d,n)$ est <b>simplicial</b> : ses facettes sont des simplexes.</p>`, ["ga-vdm", "ga-aff"]),
    Q(3, "Le polynôme P_S", R`<p>Développe selon la première ligne ; $P_S(t)$ est un Vandermonde quand $t = t_{s_0}$.</p>`, R`<p>Développé selon la première ligne, $F_S(x) = c_0+\sum_kc_kx_k$ est affine ; donc $P_S(t) = c_0+\sum_kc_kt^k$ est un polynôme de degré $\leqslant d$, de coefficient de $t^d$ égal (au signe près) au Vandermonde de $t_{s_1},\dots,t_{s_d}$, non nul : $\deg P_S = d$. $P_S(t_{s_i}) = 0$ (deux lignes égales), et pour $t$ distinct des $t_{s_i}$, $P_S(t) = \pm\prod(\text{différences})\neq0$. $P_S$ a donc exactement les $d$ racines $t_{s_i}$, simples (il est de degré $d$).</p>`, ["ga-vdm"])
  ],
  piege: R`L'ensemble $\{F_S = 0\}$ est bien un hyperplan : $F_S$ n'est pas constante (elle vaut $0$ en $\varphi(t_{s_1})$ et $\neq0$ ailleurs sur la courbe).`,
  methode: R`Hyperplan passant par $d$ points : l'écrire par un déterminant ; le restreindre à une courbe polynomiale donne un polynôme, dont on contrôle racines et signes.`
},

/* ===================== Partie II ===================== */
{ id: "gale-2", ...P, part: "Partie II", time: "35 min",
  title: "Le critère de parité de Gale",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que $S$ ($|S| = d$) est une facette de $C(d,n)$ si et seulement si $S$ vérifie la condition de Gale. En déduire que la structure des faces de $C(d,n)$ ne dépend pas du choix des $t_i$.</li>
<li>Décrire les facettes de $C(2,n)$, et retrouver qu'on obtient un $n$-gone convexe.</li>
<li>Montrer que $C(3,n)$ a $2(n-2)$ facettes, que l'on décrira. Lister les facettes de $C(4,6)$.</li></ol>`,
  decode: { donnees: [R`$P_S$ change de signe exactement aux $t_s$, $s\in S$.`], but: R`Traduire « tous les autres points sont du même côté » en « $P_S$ a le même signe en tous les $t_i$, $i\notin S$ ».`, cles: {} },
  steps: [
    Q(4, "Le critère", R`<p>Entre $t_i$ et $t_j$, $P_S$ change de signe autant de fois qu'il y a de $s\in S$ entre $i$ et $j$.</p>`, R`<p>Par Q2, l'unique hyperplan contenant les $\varphi(t_s)$, $s\in S$, est $H = \{F_S = 0\}$. $S$ est une facette si et seulement si les $\varphi(t_i)$, $i\notin S$, sont strictement du même côté de $H$, c'est-à-dire si les $P_S(t_i) = F_S(\varphi(t_i))$, $i\notin S$, sont non nuls (vrai par Q3) et de même signe.</p><p>Pour $i\lt j$ hors de $S$, $P_S$ a des racines simples, donc change de signe en chacune : $P_S(t_i)$ et $P_S(t_j)$ ont le même signe si et seulement si le nombre de racines $t_s$ entre $t_i$ et $t_j$, c'est-à-dire $|\{s\in S : i\lt s\lt j\}|$, est pair.</p><div class="sbox"><p>$S$ ($|S| = d$) est une facette de $C(d,n)$ $\iff$ $S$ vérifie la condition de parité de Gale.</p></div><p>Ce critère ne fait intervenir que l'ordre des indices. Comme $C(d,n)$ est simplicial (Q2) et que toute face est contenue dans une facette, l'ensemble des faces (toutes les parties des facettes, Q1) ne dépend que des facettes, donc pas des $t_i$.</p>${figSigne}`, ["ga-sign"]),
    Q(5, "Dimension 2", R`<p>$|S| = 2$ : entre deux indices hors de $S$, $0$ ou $2$ éléments de $S$.</p>`, R`<p>$S = \{a\lt b\}$. Si $b\geqslant a+2$ et que $S\neq\{1,n\}$, il existe $i$ hors de $S$ entre $a$ et $b$, et $j$ hors de $S$ avant $a$ ou après $b$ : entre $i$ et $j$, exactement un élément de $S$. Interdit. Restent $\{i,i+1\}$ ($1\leqslant i\lt n$) et $\{1,n\}$ (aucun indice hors de $S$ n'a d'élément de $S$ entre eux).</p><div class="sbox"><p>Facettes de $C(2,n)$ : les $n$ côtés $\{i,i+1\}$ et $\{1,n\}$. Les $n$ points de la parabole sont en position convexe : c'est un $n$-gone.</p></div>`),
    Q(6, "Dimension 3 et 4", R`<p>$d = 3$ : un bloc de longueur impaire doit toucher une extrémité.</p>`, R`<p><b>$d = 3$.</b> La condition de Gale dit : tout bloc maximal d'éléments consécutifs de $S$ qui ne contient ni $1$ ni $n$ est de longueur paire. Avec $|S| = 3$ : soit $1\in S$ et le reste forme un bloc pair $\{i,i+1\}$ ($2\leqslant i\leqslant n-1$, en incluant $\{1,2,3\}$ où le bloc contient $1$), soit $n\in S$ et $\{i,i+1\}\cup\{n\}$ ($1\leqslant i\leqslant n-2$). Ce sont $\{1,i,i+1\}$ pour $2\leqslant i\leqslant n-1$ et $\{i,i+1,n\}$ pour $1\leqslant i\leqslant n-2$ : $(n-2)+(n-2)$, sans doublon.</p><div class="sbox"><p>$C(3,n)$ a $2(n-2)$ facettes.</p></div><p><b>$C(4,6)$</b> (blocs intérieurs pairs) : $\{1,2,3,4\}$, $\{1,2,3,6\}$, $\{1,2,4,5\}$, $\{1,2,5,6\}$, $\{1,3,4,6\}$, $\{1,4,5,6\}$, $\{2,3,4,5\}$, $\{2,3,5,6\}$, $\{3,4,5,6\}$ : $9$ facettes.</p>`)
  ],
  piege: R`La condition porte sur les indices <b>hors</b> de $S$ : deux indices de $S$ peuvent avoir n'importe quoi entre eux. Penser « blocs de $S$ » : un bloc qui n'est pas au bord doit être pair.`,
  methode: R`Combinatoire des faces : choisir l'hyperplan candidat (unique ici), puis lire le côté de chaque point sur le signe d'une fonction affine, ramenée à un polynôme d'une variable.`
},

/* ===================== Partie III ===================== */
{ id: "gale-3", ...P, part: "Partie III", time: "35 min",
  title: "Polytopes voisinants",
  enonce: PRE + R`<p><b>Partie III.</b> Un polytope est <b>$k$-voisinant</b> si toute partie de $V$ de cardinal $\leqslant k$ est une face.</p><ol start="7">
<li>Montrer que $C(d,n)$ est $\lfloor\frac d2\rfloor$-voisinant : pour $T\subset[\![1,n]\!]$ de cardinal $k\leqslant\frac d2$, compléter $T$ en une partie vérifiant la condition de Gale, de cardinal $d$. En déduire que dans $C(4,n)$, deux sommets quelconques sont reliés par une arête.</li>
<li>(<b>Radon</b>) Montrer que $d+2$ points de $\mathbb R^d$ peuvent être partagés en deux parties $A_1,A_2$ dont les enveloppes convexes se rencontrent.</li>
<li>En déduire qu'un polytope de $\mathbb R^d$ ayant au moins $d+2$ sommets n'est pas $k$-voisinant pour $k>\frac d2$ : $C(d,n)$ est optimal.</li></ol>`,
  decode: { donnees: [R`Gale ; Q1.`], but: R`Compléter $T$ en facette en réparant les blocs impairs, puis montrer l'optimalité par un argument d'algèbre linéaire.`, cles: {} },
  steps: [
    Q(7, "⌊d/2⌋-voisinant", R`<p>Pour chaque bloc intérieur impair de $T$, ajoute l'élément suivant.</p>`, R`<p>Appelons <b>mauvais</b> un bloc maximal de $T$ de longueur impaire ne contenant pas $n$ (ni $1$). Pour un mauvais bloc, on ajoute l'élément qui le suit (il existe, le bloc ne contient pas $n$) : la longueur devient paire, ou le bloc fusionne avec le suivant ; dans tous les cas le nombre de mauvais blocs diminue de $1$. Il y a au plus $k$ mauvais blocs : on obtient $T'\supset T$ vérifiant Gale, avec $|T'|\leqslant2k\leqslant d$. On complète jusqu'au cardinal $d$ en ajoutant des paires consécutives de nouveaux éléments, ou un élément à côté de $n$ ou de $1$ (selon la parité de $d-|T'|$), sans créer de mauvais bloc. $T'$ est une facette, simplexe, et $T\subset T'$ est une face (Q1).</p><div class="sbox"><p>$C(d,n)$ est $\lfloor\frac d2\rfloor$-voisinant. Pour $d = 4$ : toute paire de sommets est une arête, le graphe des arêtes est complet.</p></div>`, ["ga-sign"]),
    Q(8, "Lemme de Radon", R`<p>Système $\sum\lambda_ia_i = 0$, $\sum\lambda_i = 0$ : $d+1$ équations, $d+2$ inconnues.</p>`, R`<p>Le système $\sum_{i=1}^{d+2}\lambda_ia_i = 0$, $\sum\lambda_i = 0$ a $d+1$ équations et $d+2$ inconnues : une solution $\lambda\neq0$. Soient $I_1 = \{\lambda_i>0\}$, $I_2 = \{\lambda_i\leqslant0\}$, et $c = \sum_{I_1}\lambda_i = \sum_{I_2}(-\lambda_i)>0$ (non nul car $\lambda\neq0$ et $\sum\lambda_i = 0$). Alors</p>$$\sum_{i\in I_1}\frac{\lambda_i}ca_i = \sum_{i\in I_2}\frac{-\lambda_i}ca_i,$$<p>combinaison convexe des $a_i$, $i\in I_1$, égale à une combinaison convexe des $a_i$, $i\in I_2$ : $\operatorname{Conv}(A_1)\cap\operatorname{Conv}(A_2)\neq\emptyset$.</p>`),
    Q(9, "Optimalité", R`<p>Applique Radon à $d+2$ sommets ; la plus petite partie a au plus $\frac{d+2}2\leqslant k$ éléments, donc serait une face.</p>`, R`<p>Soit un polytope $k$-voisinant avec $k>\frac d2$, et $d+2$ de ses sommets $A$. Radon donne $A = A_1\sqcup A_2$ avec $\operatorname{Conv}A_1\cap\operatorname{Conv}A_2\neq\emptyset$. Quitte à échanger, $|A_1|\leqslant\lfloor\frac{d+2}2\rfloor = \lfloor\frac d2\rfloor+1$, et comme $k$ est un entier $>\frac d2$, $k\geqslant\lfloor\frac d2\rfloor+1\geqslant|A_1|$. $A_1$ serait une face : un hyperplan $H\supset A_1$ laisse les autres sommets, donc $\operatorname{Conv}A_2$, strictement d'un côté, alors que $\operatorname{Conv}A_1\subset H$. Contradiction avec $\operatorname{Conv}A_1\cap\operatorname{Conv}A_2\neq\emptyset$.</p><div class="sbox"><p>Avec au moins $d+2$ sommets, on ne peut pas être plus que $\lfloor\frac d2\rfloor$-voisinant : les polytopes cycliques sont optimaux.</p></div>`)
  ],
  piege: R`En dimension $3$, aucun polytope à $5$ sommets n'a toutes ses paires de sommets reliées par une arête ; le graphe complet des arêtes n'apparaît qu'en dimension $4$ ($C(4,n)$), ce qui défie l'intuition.`,
  methode: R`Pour montrer qu'une partie est une face d'un polytope simplicial, il suffit de l'inclure dans une facette.`
}
]);
})();

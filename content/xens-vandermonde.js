/* Commando X-ENS · Aller plus loin · Sujet « Déterminant de Vandermonde ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 3, plus: "vdm",
  sujet: "Le déterminant de Vandermonde et ses applications",
  sujetDesc: "W(a₁, …, aₙ) = det(a_j^{i−1}) = ∏_{i<j}(a_j − a_i), par deux méthodes (polynôme en la dernière variable, opérations sur les lignes et colonnes), puis une généralisation : det(P_i(a_j)) = (∏ coefficients dominants)·W. Applications : ∏(a_j − a_i)/(j − i) est entier, interpolation de Lagrange, indépendance des exponentielles e^{λt}." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "vd-dev": { t: "Développement d'un déterminant", b: R`$$\det M = \sum_jm_{i,j}C_{i,j}\quad(\text{ligne }i);\qquad L_i = L_k\ (i\neq k)\Rightarrow\det M = 0.$$` },
  "vd-mult": { t: "Déterminant d'un produit", b: R`$$\det(BC) = \det B\det C,\qquad\det T = \prod_it_{ii}\ (T\text{ triangulaire}).$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $K$ est un corps. Pour $a_1,\dots,a_n\in K$, on note $V(a_1,\dots,a_n)$ la matrice de coefficients $a_j^{i-1}$ ($1\leqslant i,j\leqslant n$), et $W(a_1,\dots,a_n) = \det V(a_1,\dots,a_n)$. On veut montrer que</p>$$W(a_1,\dots,a_n) = \prod_{1\leqslant i\lt j\leqslant n}(a_j-a_i).$$`;

/* Figure : interpolation de Lagrange */
const pts = [[-2, 1], [-1, -0.5], [0.5, 0.8], [1.5, -0.3], [2.5, 1.4]];
const lag = x => pts.reduce((s, [xi, yi], i) => s + yi * pts.reduce((p, [xj], j) => j === i ? p : p * (x - xj) / (xi - xj), 1), 0);
const L2 = x => pts.reduce((p, [xj], j) => j === 2 ? p : p * (x - xj) / (pts[2][0] - xj), 1);
const figLag = GRAPH({ w: 460, h: 240, x: [-2.4, 2.8], y: [-1.6, 2.2], xt: [-2, -1, 1, 2], yt: [-1, 1, 2], xl: "x",
  curves: [{ f: x => lag(x) < 2.2 && lag(x) > -1.6 ? lag(x) : NaN, c: "b", lab: [-1.6, 2.0, "f (degré 4)"] }, { f: L2, c: "g", dash: true, lab: [1.15, 1.3, "L₃"] }],
  extra: (X, Y) => pts.map(([x, y]) => `<circle cx="${X(x).toFixed(1)}" cy="${Y(y).toFixed(1)}" r="4.5" class="ptr"/>`).join("") },
  R`Le polynôme interpolateur $f$ de degré $\leqslant4$ passant par $5$ points d'abscisses distinctes (rouge) existe et est unique car $V(a_1,\dots,a_5)$ est inversible. En pointillés, le polynôme de Lagrange $L_3$, qui vaut $1$ en $a_3$ et $0$ aux autres $a_j$ : $f = \sum b_iL_i$.`, "Interpolation de Lagrange");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "vdm-1", ...P, part: "Partie I", time: "25 min",
  title: "Deux calculs du déterminant",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>(<b>Par un polynôme</b>) On fixe $a_1,\dots,a_{n-1}$ et on pose $P(X) = W(a_1,\dots,a_{n-1},X)$. Montrer que $P$ est un polynôme de degré $\leqslant n-1$, de coefficient de $X^{n-1}$ égal à $W(a_1,\dots,a_{n-1})$, qui s'annule en $a_1,\dots,a_{n-1}$. Conclure par récurrence.</li>
<li>(<b>Par opérations élémentaires</b>) Dans $W(a_1,\dots,a_n)$ écrit avec les lignes $(1,a_j,\dots,a_j^{n-1})$, effectuer $C_k\leftarrow C_k-a_1C_{k-1}$ pour $k = n,\dots,2$, et en déduire $W(a_1,\dots,a_n) = \prod_{j\geqslant2}(a_j-a_1)\,W(a_2,\dots,a_n)$.</li>
<li>En déduire que $V(a_1,\dots,a_n)$ est inversible si et seulement si les $a_i$ sont deux à deux distincts.</li></ol>`,
  decode: { donnees: [R`Propriétés du déterminant.`], but: R`Calculer $W$.`, cles: {} },
  steps: [
    Q(1, "Méthode polynomiale", R`<p>Développer selon la colonne (ou ligne) qui contient $X$.</p>`, R`<p>Écrivons $W$ avec les puissances de $a_j$ dans la colonne $j$ ; la dernière colonne est $(1,X,\dots,X^{n-1})$. En développant selon cette colonne, $P(X) = \sum_{i=1}^n\Delta_iX^{i-1}$ où les cofacteurs $\Delta_i$ ne dépendent pas de $X$ : $P$ est un polynôme de degré $\leqslant n-1$, et le coefficient de $X^{n-1}$ est le cofacteur de la position $(n,n)$, soit $W(a_1,\dots,a_{n-1})$. Pour $X = a_i$ ($i\lt n$), deux colonnes sont égales : $P(a_i) = 0$.</p><p>Si les $a_1,\dots,a_{n-1}$ sont distincts, $P = W(a_1,\dots,a_{n-1})\prod_{i\lt n}(X-a_i)$ (le cas où $W(a_1,\dots,a_{n-1}) = 0$ donne un polynôme de degré $\lt n-1$ à $n-1$ racines, donc nul, et la formule reste vraie). Sinon, $P = 0$ (deux colonnes égales) et la formule aussi. En évaluant en $a_n$ et par récurrence (avec $W(a_1) = 1$) :</p>$$W(a_1,\dots,a_n) = W(a_1,\dots,a_{n-1})\prod_{i\lt n}(a_n-a_i) = \prod_{i\lt j}(a_j-a_i).$$`, ["vd-dev"]),
    Q(2, "Méthode par opérations", R`<p>Le coefficient en position $(j,k)$ devient $a_j^{k-1}-a_1a_j^{k-2} = a_j^{k-2}(a_j-a_1)$.</p>`, R`<p>Avec la ligne $j$ égale à $(1,a_j,a_j^2,\dots,a_j^{n-1})$, l'opération $C_k\leftarrow C_k-a_1C_{k-1}$ (pour $k$ décroissant, afin d'utiliser l'ancienne $C_{k-1}$) ne change pas le déterminant et transforme le coefficient $(j,k)$ en $a_j^{k-2}(a_j-a_1)$ pour $k\geqslant2$. La première ligne devient $(1,0,\dots,0)$. On développe selon cette ligne, puis on factorise $(a_j-a_1)$ dans chaque ligne $j\geqslant2$ :</p>$$\begin{aligned}W(a_1,\dots,a_n) &= \prod_{j=2}^n(a_j-a_1)\cdot\det\big(a_j^{k-2}\big)_{2\leqslant j,k\leqslant n}\\&= \prod_{j=2}^n(a_j-a_1)\,W(a_2,\dots,a_n).\end{aligned}$$<p>Une récurrence immédiate donne la formule.</p>`),
    Q(3, "Inversibilité", R`<p>Un produit dans un corps est nul ssi un facteur l'est.</p>`, R`<p>$W = \prod_{i\lt j}(a_j-a_i)\neq0$ si et seulement si $a_i\neq a_j$ pour tous $i\lt j$. Donc $V(a_1,\dots,a_n)$ est inversible si et seulement si les $a_i$ sont deux à deux distincts.</p>`)
  ],
  piege: R`Dans Q1, il faut traiter à part le cas où les $a_1,\dots,a_{n-1}$ ne sont pas distincts (le polynôme est alors nul), ou remarquer que la formule polynomiale reste vraie.`,
  methode: R`Pour un déterminant dépendant de paramètres : le voir comme un polynôme en l'un d'eux, trouver ses racines et son coefficient dominant.`
},

/* ===================== Partie II ===================== */
{ id: "vdm-2", ...P, part: "Partie II", time: "25 min",
  title: "Une généralisation et une conséquence arithmétique",
  enonce: PRE + R`<p><b>Partie II.</b> Soient $P_1,\dots,P_n\in K[X]$ avec $\deg P_i\leqslant i-1$, et $c_i$ le coefficient de $X^{i-1}$ dans $P_i$.</p><ol start="4">
<li>Montrer que $\det\big(P_i(a_j)\big)_{i,j} = c_1c_2\cdots c_n\,W(a_1,\dots,a_n)$. (Écrire la matrice comme produit $BV$.)</li>
<li>Retrouver la formule de Vandermonde avec $P_i = \prod_{k\lt i}(X-a_k)$.</li>
<li>Soient $a_1,\dots,a_n\in\mathbb Z$. Avec $P_i = \binom X{i-1} = \frac{X(X-1)\cdots(X-i+2)}{(i-1)!}$, montrer que</li></ol>$$\prod_{1\leqslant i\lt j\leqslant n}\frac{a_j-a_i}{j-i}\in\mathbb Z.$$`,
  decode: { donnees: [R`$\det(BV) = \det B\det V$.`], but: R`Généraliser puis appliquer à des polynômes à valeurs entières.`, cles: {} },
  steps: [
    Q(4, "Factorisation", R`<p>$P_i(a_j) = \sum_kb_{i,k}a_j^{k-1}$ où $B = (b_{i,k})$ est triangulaire inférieure.</p>`, R`<p>Écrivons $P_i = \sum_{k=1}^nb_{i,k}X^{k-1}$, avec $b_{i,k} = 0$ pour $k>i$ (car $\deg P_i\leqslant i-1$) et $b_{i,i} = c_i$. Alors $P_i(a_j) = \sum_kb_{i,k}a_j^{k-1} = (BV)_{i,j}$. $B$ est triangulaire inférieure de diagonale $(c_i)$, donc</p>$$\det\big(P_i(a_j)\big) = \det B\cdot\det V = c_1\cdots c_n\,W(a_1,\dots,a_n).$$`, ["vd-mult"]),
    Q(5, "Un choix qui triangularise", R`<p>$P_i(a_j) = 0$ pour $j\lt i$ : la matrice $(P_i(a_j))$ est triangulaire supérieure.</p>`, R`<p>Avec $P_i = \prod_{k\lt i}(X-a_k)$ : $\deg P_i = i-1$, $c_i = 1$, et $P_i(a_j) = 0$ si $j\lt i$. La matrice est triangulaire supérieure, de diagonale $P_j(a_j) = \prod_{k\lt j}(a_j-a_k)$. Par Q4 : $W(a_1,\dots,a_n) = \prod_j\prod_{k\lt j}(a_j-a_k)$.</p>`),
    Q(6, "Un quotient entier", R`<p>$\binom m{i-1}\in\mathbb Z$ pour tout $m\in\mathbb Z$ ; $c_i = \frac1{(i-1)!}$ ; $\prod_{i\lt j}(j-i) = \prod_{j=1}^n(j-1)!$.</p>`, R`<p>$P_i = \binom X{i-1}$ prend des valeurs entières sur $\mathbb Z$ (coefficients binomiaux généralisés : pour $m\geqslant0$ c'est un coefficient binomial, et $\binom{-m}k = (-1)^k\binom{m+k-1}k$). Donc $\det(P_i(a_j))\in\mathbb Z$. Son coefficient dominant est $c_i = \frac1{(i-1)!}$, et par Q4 :</p>$$\det\big(P_i(a_j)\big) = \frac{W(a_1,\dots,a_n)}{\prod_{i=1}^n(i-1)!}.$$<p>Or $\prod_{1\leqslant i\lt j\leqslant n}(j-i) = \prod_{j=1}^n\prod_{i\lt j}(j-i) = \prod_{j=1}^n(j-1)! = W(1,2,\dots,n)$. Donc $\prod_{i\lt j}\frac{a_j-a_i}{j-i} = \det(P_i(a_j))\in\mathbb Z$. Exemple : $a = (0,1,3)$ donne $\frac{1\cdot3\cdot2}{1\cdot2\cdot1} = 3$.</p>`)
  ],
  piege: R`$\binom X{i-1}$ n'est pas à coefficients entiers, mais il est <b>à valeurs entières</b> sur $\mathbb Z$ : c'est ce qui compte ici.`,
  methode: R`Remplacer la base canonique $(X^{i-1})$ par une base triangulaire $(P_i)$ adaptée change le déterminant par le produit des coefficients dominants.`
},

/* ===================== Partie III ===================== */
{ id: "vdm-3", ...P, part: "Partie III", time: "25 min",
  title: "Interpolation et exponentielles",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Soient $a_1,\dots,a_n$ distincts et $b_1,\dots,b_n\in K$. Montrer qu'il existe un unique $f\in K_{n-1}[X]$ avec $f(a_i) = b_i$, et que $f = \sum_ib_iL_i$ avec $L_i = \prod_{j\neq i}\frac{X-a_j}{a_i-a_j}$.</li>
<li>Soient $\lambda_1,\dots,\lambda_n$ des réels distincts. En calculant le wronskien de $y_k(t) = e^{\lambda_kt}$, montrer que ces fonctions sont linéairement indépendantes.</li>
<li>Soient $x_1,\dots,x_n$ les racines (distinctes) d'un polynôme unitaire $Q$ de degré $n$. Montrer que $W(x_1,\dots,x_n)^2 = \pm\prod_iQ'(x_i)$, et préciser le signe.</li></ol>`,
  decode: { donnees: [R`Parties I et II.`], but: R`Exploiter l'inversibilité de $V$.`, cles: {} },
  steps: [
    Q(7, "Interpolation de Lagrange", R`<p>Le système $f(a_i) = b_i$ a pour matrice $\,{}^tV$.</p>`, R`<p>Si $f = \sum_kf_kX^k$, les conditions $f(a_i) = b_i$ forment le système linéaire $\sum_kf_ka_i^k = b_i$, de matrice $\,{}^tV(a_1,\dots,a_n)$, inversible (Q3) : solution unique. Le polynôme $\sum_ib_iL_i$ est de degré $\leqslant n-1$ et $L_i(a_j) = \delta_{i,j}$, donc il convient : par unicité, c'est $f$.</p>${figLag}`),
    Q(8, "Exponentielles indépendantes", R`<p>$\mathrm{Wr}(t) = \det\big(y_k^{(i-1)}(t)\big) = e^{(\lambda_1+\dots+\lambda_n)t}W(\lambda_1,\dots,\lambda_n)$.</p>`, R`<p>Si $\sum\alpha_ky_k = 0$, en dérivant $i-1$ fois : $\sum_k\alpha_ky_k^{(i-1)}(t) = 0$ pour tout $i$ et tout $t$, donc le vecteur $(\alpha_k)$ est dans le noyau de la matrice $\big(y_k^{(i-1)}(t)\big)_{i,k}$. Or $y_k^{(i-1)}(t) = \lambda_k^{i-1}e^{\lambda_kt}$ : en factorisant $e^{\lambda_kt}$ dans chaque colonne,</p>$$\mathrm{Wr}(t) = e^{(\lambda_1+\dots+\lambda_n)t}\,W(\lambda_1,\dots,\lambda_n)\neq0.$$<p>La matrice est inversible, donc $\alpha = 0$. La famille $(t\mapsto e^{\lambda t})_{\lambda\in\mathbb R}$ est libre.</p>`),
    Q(9, "Vandermonde et discriminant", R`<p>$Q'(x_i) = \prod_{j\neq i}(x_i-x_j)$.</p>`, R`<p>$Q = \prod_j(X-x_j)$, donc $Q'(x_i) = \prod_{j\neq i}(x_i-x_j)$. Le produit $\prod_iQ'(x_i) = \prod_{i\neq j}(x_i-x_j)$ contient chaque paire $\{i,j\}$ deux fois : $(x_i-x_j)(x_j-x_i) = -(x_j-x_i)^2$. Il y a $\frac{n(n-1)}2$ paires, donc</p>$$\prod_iQ'(x_i) = (-1)^{\frac{n(n-1)}2}\prod_{i\lt j}(x_j-x_i)^2 = (-1)^{\frac{n(n-1)}2}W(x_1,\dots,x_n)^2.$$<p>$W^2$ est le discriminant de $Q$ ; pour $Q = X^2+bX+c$ : $W^2 = (x_2-x_1)^2 = b^2-4c$.</p>`)
  ],
  piege: R`Dans Q8, l'annulation du wronskien en un point ne suffit pas en général à conclure à la dépendance (contre-exemple de Peano) ; ici on utilise le sens facile : wronskien non nul $\Rightarrow$ famille libre.`,
  methode: R`Vandermonde apparaît dès qu'on évalue des puissances (ou des exponentielles, des caractères) en des points distincts : interpolation, indépendance linéaire, discriminant.`
}
]);
})();

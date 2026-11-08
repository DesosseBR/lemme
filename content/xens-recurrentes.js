/* Commando X-ENS · Aller plus loin · Sujet « Suites récurrentes linéaires : théorie et pratique ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 4, plus: "srl",
  sujet: "Suites récurrentes linéaires : deviner, prouver, calculer",
  sujetDesc: "On caractérise les suites récurrentes linéaires par le rang de leurs matrices de Hankel (ce qui permet de deviner une relation de récurrence à partir de termes calculés), on décrit leur forme générale Σ P_i(n) r_iⁿ, on en déduit que produits et sommes partielles restent récurrents linéaires, et on calcule un terme d'indice 10¹⁴ par exponentiation rapide de matrices. Fil rouge : une grenouille qui saute de pierre en pierre." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "srl-noy": { t: "Lemme des noyaux", b: R`$$P = P_1\cdots P_k,\ P_i\wedge P_j = 1\ \Longrightarrow\ \ker P(f) = \bigoplus_i\ker P_i(f)\quad(\text{même en dim. infinie}).$$` },
  "srl-rang": { t: "Rang d'une matrice extraite", b: R`$$\operatorname{rg}(\text{extraite})\leqslant\operatorname{rg}(M);\qquad F_0\supset F_1\supset\cdots,\ \dim F_0\lt\infty\Rightarrow\text{stationnaire}.$$` },
  "srl-expo": { t: "Exponentiation rapide", b: R`<p>$M^{2k} = (M^k)^2$ et $M^{2k+1} = M\,(M^k)^2$ : $M^N$ se calcule en au plus $2\log_2N$ produits.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $K$ est un corps. Une suite $(u_n)_{n\geqslant0}$ est <b>récurrente linéaire d'ordre au plus $p$</b> s'il existe $\alpha_0,\dots,\alpha_{p-1}\in K$ avec $u_{m+p} = \sum_{i=0}^{p-1}\alpha_iu_{m+i}$ pour tout $m$. On note $A_n = (u_{i+j})_{0\leqslant i,j\lt n}$ (matrice de <b>Hankel</b>) et $B_{n,p} = (u_{i+j})_{0\leqslant i\lt n,\ 0\leqslant j\leqslant p}$. <b>Fil rouge.</b> Des pierres numérotées $1,\dots,n$ ; une grenouille part de $1$, doit finir en $n$ en visitant chaque pierre une fois, avec des sauts de longueur au plus $3$. On note $f(n)$ le nombre de trajets, et $S(L) = \sum_{n=1}^Lf(n)^3$. On donne $f(1),\dots,f(10) = 1,1,1,2,6,14,28,56,118,254$.</p>`;

/* Figure : un trajet de la grenouille pour n = 6 */
const figFrog = (() => {
  const x = i => 30 + 62 * (i - 1), y = 120;
  let b = "";
  const path = [1, 3, 5, 2, 4, 6];
  for (let k = 0; k + 1 < path.length; k++) { const a = path[k], c = path[k + 1], mid = (x(a) + x(c)) / 2, hgt = 18 * Math.abs(c - a) * (k % 2 ? -1 : 1); b += `<path d="M${x(a)},${y} Q${mid},${y - 2 * hgt} ${x(c)},${y}" class="${k % 2 ? "vr" : "vb"}" style="fill:none;stroke-width:1.8"/>`; b += S(mid, y - hgt - (hgt > 0 ? 4 : -14), String(k + 1), "middle", "sm"); }
  for (let i = 1; i <= 6; i++) b += `<circle cx="${x(i)}" cy="${y}" r="13" style="fill:var(--bg);stroke:var(--ink)"/>` + S(x(i), y + 5, String(i), "middle", "it");
  return FIG(380, 230, b, R`Le trajet $1\to3\to5\to2\to4\to6$ (sauts de longueurs $2,2,3,2,2$) est l'un des $f(6) = 14$ trajets. On ne voit aucune formule directe ; on va <b>deviner</b> une récurrence linéaire d'ordre $8$ à partir des premières valeurs, puis l'exploiter.`, "Trajet de la grenouille");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "srl-1", ...P, part: "Partie I", time: "35 min",
  title: "Le critère de Hankel",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que si $(u_n)$ est récurrente linéaire d'ordre au plus $p$, alors $\operatorname{rg}A_n\leqslant p$ pour tout $n$.</li>
<li>Réciproquement, on suppose $\operatorname{rg}A_n\leqslant p$ pour tout $n$. Montrer que $\operatorname{rg}B_{n,p}\leqslant p$ pour $n>p$, que $(\ker B_{n,p})_{n>p}$ est une suite décroissante de sous-espaces non nuls de $K^{p+1}$, et en déduire une relation $\sum_{i=0}^p\beta_iu_{m+i} = 0$ valable pour tout $m$, avec $\beta\neq0$. Conclure (attention : il faut $\beta_p\neq0$ ; sinon, recommencer avec $p-1$).</li>
<li>Pour la suite de Fibonacci ($F_0 = 0$, $F_1 = 1$), calculer $\operatorname{rg}A_n$. Expliquer comment ce critère permet de « deviner » une relation de récurrence à partir de termes calculés, et comment trouver ses coefficients.</li></ol>`,
  decode: { donnees: [R`Les colonnes de $A_n$ sont des tranches consécutives de la suite.`], but: R`Une relation de récurrence = une relation linéaire entre colonnes de Hankel.`, cles: {} },
  steps: [
    Q(1, "Rang borné", R`<p>La colonne $j+p$ de $A_n$ est $\sum\alpha_i\times$ (colonne $j+i$).</p>`, R`<p>La colonne $C_j$ de $A_n$ est $(u_j,u_{j+1},\dots,u_{j+n-1})$. La relation de récurrence, appliquée à chaque coordonnée, donne $C_{j+p} = \sum_{i=0}^{p-1}\alpha_iC_{j+i}$. Par récurrence, toutes les colonnes sont combinaisons de $C_0,\dots,C_{p-1}$ : $\operatorname{rg}A_n\leqslant p$.</p>`),
    Q(2, "La réciproque", R`<p>$B_{n,p}$ est extraite de $A_m$ pour $m\geqslant n+p$. $\ker B_{n+1,p}\subset\ker B_{n,p}$ (une ligne de plus).</p>`, R`<p>Pour $n>p$, $B_{n,p}$ (taille $n\times(p+1)$) est extraite de $A_{n+p}$, donc $\operatorname{rg}B_{n,p}\leqslant p$, et $\dim\ker B_{n,p} = p+1-\operatorname{rg}\geqslant1$. $B_{n+1,p}$ est $B_{n,p}$ avec une ligne de plus : $\ker B_{n+1,p}\subset\ker B_{n,p}$. Une suite décroissante de sous-espaces de dimension $\geqslant1$ de $K^{p+1}$ est stationnaire en un $F\neq\{0\}$. Pour $\beta\in F\setminus\{0\}$ et tout $n$, $B_{n,p}\beta = 0$ : la ligne $m$ donne</p>$$\sum_{i=0}^p\beta_iu_{m+i} = 0\qquad\text{pour tout }m.$$<p>Si $\beta_p\neq0$, on divise : récurrence d'ordre $\leqslant p$. Si $\beta_p = 0$ : soit $q = \max\{i : \beta_i\neq0\}$, alors $\sum_{i\leqslant q}\beta_iu_{m+i} = 0$ avec $\beta_q\neq0$, récurrence d'ordre $q\leqslant p$.</p><div class="sbox"><p>$(u_n)$ est récurrente linéaire d'ordre au plus $p$ $\iff$ $\operatorname{rg}A_n\leqslant p$ pour tout $n$.</p></div>`, ["srl-rang"]),
    Q(3, "Fibonacci et l'art de deviner", R`<p>$A_1 = (0)$, $A_2 = \begin{pmatrix}0&1\\1&1\end{pmatrix}$.</p>`, R`<p>$A_1 = (0)$ : rang $0$. $A_2 = \begin{pmatrix}0&1\\1&1\end{pmatrix}$ : rang $2$. Pour $n\geqslant2$, $\operatorname{rg}A_n = 2$ (Q1 et $A_2$ extraite). La suite $(\operatorname{rg}A_n)$ est croissante et stationnaire à $2$ = l'ordre.</p><p><b>Deviner.</b> On calcule beaucoup de termes, puis $\operatorname{rg}A_n$ pour $n$ croissant ; si le rang se stabilise (par exemple pendant $10$ valeurs) à $p$, on <b>conjecture</b> l'ordre $p$, et un vecteur non nul de $\ker B_{N,p}$ (pour $N$ grand) donne les coefficients. Pour la grenouille, le rang se stabilise à $8$ et l'on trouve</p>$$\begin{aligned}f(n+8) = {}&2f(n+7)-f(n+6)+2f(n+5)+f(n+4)\\&+f(n+3)-f(n+1)-f(n).\end{aligned}$$<p>Vérification sur les données : $f(9) = 2\cdot56-28+2\cdot14+6+2-1-1 = 118$. ✓</p>${figFrog}`)
  ],
  piege: R`Le critère de Hankel ne <b>prouve</b> rien à partir d'un nombre fini de termes : une stabilisation du rang observée sur $10$ valeurs est une conjecture. On la teste ensuite sur d'autres valeurs connues (ici $f(40)$ fournie par l'énoncé).`,
  methode: R`Retrouver une récurrence linéaire inconnue : calculer des termes, observer où le rang des matrices de Hankel se stabilise, puis lire les coefficients dans un noyau.`
},

/* ===================== Partie II ===================== */
{ id: "srl-2", ...P, part: "Partie II", time: "35 min",
  title: "Forme générale et stabilité",
  enonce: PRE + R`<p><b>Partie II.</b> $K = \mathbb C$. Soit $\Delta$ l'opérateur de décalage $(u_n)\mapsto(u_{n+1})$ sur $\mathbb C^{\mathbb N}$.</p><ol start="4">
<li>Montrer que $(u_n)$ vérifie la récurrence de polynôme caractéristique $P = X^p-\sum\alpha_iX^i = \prod_i(X-r_i)^{m_i}$ si et seulement si $u\in\ker P(\Delta) = \bigoplus_i\ker(\Delta-r_i)^{m_i}$.</li>
<li>Pour $r\neq0$, montrer que les suites $(n^jr^n)_n$, $0\leqslant j\lt m$, forment une base de $\ker(\Delta-r)^m$. (Libre : polynôme qui s'annule une infinité de fois. Dans le noyau : $(\Delta-r)(n^jr^n)$ est combinaison des $(n^kr^n)$, $k\lt j$. Dimension : une suite de $\ker(\Delta-r)^m$ est déterminée par ses $m$ premiers termes.) Conclure : $u_n = \sum_iP_i(n)r_i^n$ avec $\deg P_i\lt m_i$ (si $0$ n'est pas racine de $P$).</li>
<li>Montrer qu'une suite de la forme $\sum_{i=1}^kP_i(n)r_i^n$ est récurrente linéaire d'ordre au plus $\sum(\deg P_i+1)$. En déduire que si $u$ et $v$ sont récurrentes d'ordres $\leqslant p$ et $\leqslant q$, alors $(u_nv_n)$ l'est d'ordre $\leqslant pq$, et que $\big(\sum_{k\leqslant n}u_k\big)$ l'est d'ordre $\leqslant p+1$.</li></ol>`,
  decode: { donnees: [R`Lemme des noyaux.`], but: R`Écrire les suites récurrentes comme combinaisons d'exponentielles-polynômes, une forme visiblement stable par produit et sommation.`, cles: {} },
  steps: [
    Q(4, "Récurrence = noyau", R`<p>$P(\Delta)(u)_m = u_{m+p}-\sum\alpha_iu_{m+i}$.</p>`, R`<p>$(\Delta^iu)_m = u_{m+i}$, donc $(P(\Delta)u)_m = u_{m+p}-\sum_{i\lt p}\alpha_iu_{m+i}$ : la récurrence équivaut à $u\in\ker P(\Delta)$. Les $(X-r_i)^{m_i}$ sont deux à deux premiers entre eux : par le lemme des noyaux, $\ker P(\Delta) = \bigoplus_i\ker(\Delta-r_i)^{m_i}$.</p>`, ["srl-noy"]),
    Q(5, "Base de ker(Δ − r)^m", R`<p>$(n+1)^jr^{n+1}-rn^jr^n = r^{n+1}\big((n+1)^j-n^j\big)$, de degré $j-1$ en $n$.</p>`, R`<p><b>Libre.</b> Si $\sum_{j\lt m}\beta_jn^jr^n = 0$ pour tout $n$, le polynôme $\sum\beta_jX^j$ a une infinité de racines : il est nul.</p><p><b>Dans le noyau.</b> $\big((\Delta-r)(n^jr^n)\big)_n = r^{n+1}\big((n+1)^j-n^j\big)$, et $(n+1)^j-n^j$ est un polynôme de degré $j-1$ : c'est une combinaison des $(n^kr^n)$, $k\lt j$. Par récurrence sur $j$, $(\Delta-r)^{j+1}(n^jr^n) = 0$, donc $(n^jr^n)\in\ker(\Delta-r)^m$ pour $j\lt m$.</p><p><b>Dimension.</b> $\ker(\Delta-r)^m$ est l'ensemble des suites vérifiant la récurrence de polynôme $(X-r)^m$, d'ordre $m$ : une telle suite est déterminée par $u_0,\dots,u_{m-1}$, donc $\dim\leqslant m$. La famille libre de $m$ éléments est une base.</p><div class="sbox">$$u\ \text{récurrente de polynôme}\ \prod(X-r_i)^{m_i}$$$$\iff\quad u_n = \sum_iP_i(n)r_i^n,\quad\deg P_i\lt m_i.$$</div>`),
    Q(6, "Produits et sommes", R`<p>$n^ar^n\cdot n^bs^n = n^{a+b}(rs)^n$. Pour la somme : $\sum_{k\leqslant n}r^k$ fait apparaître $r^{n+1}$ et une constante ($= 1^n$).</p>`, R`<p>La suite $\sum_{i=1}^kP_i(n)r_i^n$ est dans $\ker\prod_i(\Delta-r_i)^{\deg P_i+1}$ (Q5), donc récurrente d'ordre $\leqslant\sum(\deg P_i+1)$ (on peut regrouper les $r_i$ égaux).</p><p><b>Produit.</b> $u_n = \sum_iP_i(n)r_i^n$ avec $\sum m_i\leqslant p$, $v_n = \sum_jQ_j(n)s_j^n$ avec $\sum m'_j\leqslant q$. Alors $u_nv_n = \sum_{i,j}P_i(n)Q_j(n)(r_is_j)^n$, et $\deg(P_iQ_j)+1\leqslant m_i+m'_j-1\leqslant m_im'_j$. L'ordre est $\leqslant\sum_{i,j}m_im'_j\leqslant pq$.</p><p><b>Somme.</b> $U_n = \sum_{k\leqslant n}u_k$ vérifie $U_{n+1}-U_n = u_{n+1}$, donc $P(\Delta)(\Delta-1)U = P(\Delta)(\Delta u) = \Delta P(\Delta)u = 0$ : $U$ est récurrente d'ordre $\leqslant p+1$.</p><div class="sbox"><p>Pour la grenouille : $f$ d'ordre $8$, $f^3$ d'ordre $\leqslant8^3 = 512$, et $S$ d'ordre $\leqslant513$. (Un comptage plus fin des $(r_ir_jr_k)^n$ symétriques donne $\leqslant\binom{10}3+1 = 121$.)</p></div>`)
  ],
  piege: R`Si $0$ est racine de $P$ ($\alpha_0 = 0$), la récurrence ne détermine pas la suite « vers le passé », et il faut ajouter des suites nulles à partir d'un certain rang. Ici les suites considérées ont $\alpha_0\neq0$ (pour la grenouille, $\alpha_0 = -1$).`,
  methode: R`Toute suite récurrente linéaire est une combinaison d'exponentielles-polynômes $n^jr^n$ ; les opérations (produit, somme partielle, décalage) préservent cette forme, avec un contrôle de l'ordre.`
},

/* ===================== Partie III ===================== */
{ id: "srl-3", ...P, part: "Partie III", time: "30 min",
  title: "Calculer S(N) modulo un milliard pour N géant",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Vérifier à la main $f(4) = 2$ et $f(5) = 6$, et $S(10) = 18\,230\,635$ à partir des valeurs données.</li>
<li>Soit $(w_n)$ récurrente d'ordre $p$ et $W_n = (w_n,\dots,w_{n+p-1})$. Montrer que $W_{n+1} = CW_n$ pour une matrice compagnon $C\in\mathcal M_p(K)$, puis que $w_N$ se calcule modulo $10^9$ en $O(p^3\log N)$ opérations.</li>
<li>Estimer le temps de calcul de $S(10^{14})\bmod10^9$ avec $p = 121$, sur un ordinateur faisant $10^9$ opérations par seconde. Comparer avec l'énumération des trajets.</li></ol>`,
  decode: { donnees: [R`Partie II : $S$ récurrente d'ordre $\leqslant121$.`], but: R`Remplacer $10^{14}$ étapes de récurrence par environ $47$ élévations au carré de matrices.`, cles: {} },
  steps: [
    Q(7, "Petites vérifications", R`<p>$n = 4$ : la grenouille doit finir en $4$ ; depuis $1$, elle va en $2$ ou $3$.</p>`, R`<p><b>$n = 4$</b> : $1\to2\to3\to4$ et $1\to3\to2\to4$ ($1\to4$ directement est interdit : il faut visiter $2$ et $3$). Donc $f(4) = 2$. <b>$n = 5$</b> : la pierre $5$ est la dernière, on ordonne $2,3,4$ avec des sauts $\leqslant3$ et un dernier saut vers $5$ depuis $2,3$ ou $4$ : $12345$, $12435$, $13245$, $13425$, $14235$, $14325$ (les $3! = 6$ ordres conviennent), soit $6$ trajets. ✓</p><p>$S(10) = 1+1+1+8+216+2744+21952+175616+1643032+16387064 = 18\,230\,635$. ✓</p>`),
    Q(8, "Matrice compagnon et exponentiation", R`<p>$W_N = C^NW_0$ ; $C^N$ par exponentiation rapide, chaque produit en $O(p^3)$, modulo $10^9$.</p>`, R`<p>Si $w_{n+p} = \sum\alpha_iw_{n+i}$, alors</p>$$W_{n+1} = \begin{pmatrix}0&1&&\\&\ddots&\ddots&\\&&0&1\\\alpha_0&\alpha_1&\cdots&\alpha_{p-1}\end{pmatrix}W_n = CW_n,\qquad W_N = C^NW_0.$$<p>Par exponentiation rapide, $C^N$ demande au plus $2\log_2N$ produits de matrices $p\times p$, chacun en $O(p^3)$ opérations. On réduit modulo $10^9$ après chaque opération (c'est un morphisme d'anneaux $\mathbb Z\to\mathbb Z/10^9\mathbb Z$), ce qui garde des entiers de taille bornée. Coût : $O(p^3\log N)$.</p>`, ["srl-expo"]),
    Q(9, "Ordre de grandeur", R`<p>$\log_2(10^{14})\approx46{,}5$.</p>`, R`<p>$2\log_2(10^{14})\approx93$ produits, chacun d'environ $2\cdot121^3\approx3{,}5\cdot10^6$ opérations : environ $3\cdot10^8$ opérations, soit moins d'une seconde. (Il faut auparavant trouver la récurrence de $S$, d'ordre $\leqslant121$, par le critère de Hankel sur quelques centaines de termes.)</p><p>L'énumération des trajets est hors de portée : $f(n)$ croît comme $\rho^n$ avec $\rho\approx2{,}1$ (racine dominante du polynôme caractéristique), et il faudrait de toute façon $10^{14}$ termes.</p><div class="sbox"><p>Deviner la récurrence (Hankel), la justifier (structure exponentielle-polynomiale), puis l'exploiter (exponentiation rapide) : une seconde de calcul au lieu de l'impossible.</p></div>`)
  ],
  piege: R`On ne peut pas calculer $f(n)$ exactement puis réduire : $f(10^{14})$ a des milliers de milliards de chiffres. Toute la chaîne de calcul doit se faire modulo $10^9$.`,
  methode: R`Terme d'indice $N$ d'une suite récurrente linéaire d'ordre $p$ : matrice compagnon et exponentiation rapide, en $O(p^3\log N)$ ; modulo $m$ pour garder des entiers petits.`
}
]);
})();

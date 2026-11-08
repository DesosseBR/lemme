/* Commando X-ENS · Aller plus loin · Sujet « Enveloppe convexe de Oₙ(ℝ) ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 5, plus: "conv",
  sujet: "L'enveloppe convexe du groupe orthogonal",
  sujetDesc: "On montre que l'enveloppe convexe de Oₙ(ℝ) est la boule unité de la norme subordonnée euclidienne, d'abord par séparation (projection sur un convexe compact, produit scalaire Tr(ᵗAB), décomposition polaire), puis par une preuve directe avec les valeurs singulières. On en déduit que les points extrémaux de cette boule sont exactement les matrices orthogonales." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "cv-pol": { t: "Décomposition polaire", b: R`<p>Toute $A\in\mathcal M_n(\mathbb R)$ s'écrit $A = OS$ avec $O\in O_n(\mathbb R)$ et $S\in\mathcal S_n^+(\mathbb R)$. Et $|||A||| = \lambda_{\max}(S)$ (car $\|Ax\| = \|Sx\|$).</p>` },
  "cv-spec": { t: "Théorème spectral", b: R`<p>Si $S\in\mathcal S_n(\mathbb R)$, il existe une base orthonormée $(e_i)$ de vecteurs propres, $Se_i = \lambda_ie_i$, et $\operatorname{Tr}(M) = \sum_i\langle Me_i,e_i\rangle$ pour toute $M$ (trace dans une base orthonormée).</p>` },
  "cv-cs": { t: "Cauchy-Schwarz et égalité", b: R`<p>$|\langle u,v\rangle|\leqslant\|u\|\|v\|$. Dans un espace euclidien, $\|u+v\| = \|u\|+\|v\|$ si et seulement si $u$ et $v$ sont positivement liés.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\mathbb R^n$ est euclidien, et pour $A\in\mathcal M_n(\mathbb R)$, $|||A||| = \sup_{\|x\| = 1}\|Ax\|$. On note $\mathcal B = \{A : |||A|||\leqslant1\}$ et $\operatorname{Conv}(X)$ l'enveloppe convexe de $X$, ensemble des combinaisons convexes finies $\sum\lambda_ix_i$ ($\lambda_i\geqslant0$, $\sum\lambda_i = 1$, $x_i\in X$). $\mathcal M_n(\mathbb R)$ est muni du produit scalaire $\langle A,B\rangle = \operatorname{Tr}({}^tAB) = \sum_{i,j}a_{ij}b_{ij}$, de dimension $N = n^2$. Un point $x$ d'un convexe $C$ est <b>extrémal</b> si $x = ty+(1-t)z$ avec $y,z\in C$, $t\in\,]0,1[$ impose $y = z = x$.</p>`;

/* Figure : la tranche diagonale */
const figDiag = (() => {
  const s = 90, cx = 170, cy = 150, X = a => cx + s * a, Y = b => cy - s * b;
  let b = `<line x1="${X(-1.5)}" y1="${Y(0)}" x2="${X(1.5)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(-1.4)}" x2="${X(0)}" y2="${Y(1.4)}" class="ax"/>`;
  b += `<rect x="${X(-1)}" y="${Y(1)}" width="${2 * s}" height="${2 * s}" class="hb" style="opacity:.12"/><rect x="${X(-1)}" y="${Y(1)}" width="${2 * s}" height="${2 * s}" class="vb" style="fill:none"/>`;
  [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([a, c]) => { b += `<circle cx="${X(a)}" cy="${Y(c)}" r="5" class="ptr"/>` + S(X(a) + (a > 0 ? 8 : -8), Y(c) + (c > 0 ? -8 : 18), `diag(${a > 0 ? "" : "−"}1, ${c > 0 ? "" : "−"}1)`, a > 0 ? "start" : "end", "sm"); });
  const p = [0.5, -0.2];
  b += `<line x1="${X(p[0])}" y1="${Y(1)}" x2="${X(p[0])}" y2="${Y(-1)}" class="thin"/><circle cx="${X(p[0])}" cy="${Y(p[1])}" r="4.5" class="pt"/>` + S(X(p[0]) + 8, Y(p[1]) + 4, "diag(s₁, s₂)", "start", "it");
  b += S(X(1.45), Y(0) - 8, "a", "end", "it") + S(X(0) + 8, Y(1.35), "b", "start", "it");
  return FIG(360, 300, b, R`Dans le plan des matrices diagonales $\operatorname{diag}(a,b)$, la boule $\mathcal B$ est le carré $|a|,|b|\leqslant1$ ; ses quatre sommets sont les matrices orthogonales diagonales $\operatorname{diag}(\pm1,\pm1)$. Un point intérieur s'écrit comme moyenne pondérée des sommets (d'abord sur le segment vertical, puis horizontalement).`, "Tranche diagonale de la boule");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "conv-1", ...P, part: "Partie I", time: "35 min",
  title: "Compacité et séparation",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $O_n(\mathbb R)\subset\mathcal B$, que $\mathcal B$ est convexe, et en déduire $\operatorname{Conv}(O_n(\mathbb R))\subset\mathcal B$.</li>
<li>(<b>Carathéodory</b>) Soit $X\subset\mathbb R^N$. Montrer que tout point de $\operatorname{Conv}(X)$ est combinaison convexe d'au plus $N+1$ points de $X$. (Si $x = \sum_{i=1}^p\lambda_ix_i$ avec $p>N+1$, utiliser une relation $\sum\mu_ix_i = 0$, $\sum\mu_i = 0$, $\mu\neq0$.)</li>
<li>En déduire que si $K\subset\mathbb R^N$ est compact, $\operatorname{Conv}(K)$ est compact, puis que $\operatorname{Conv}(O_n(\mathbb R))$ est un convexe compact.</li>
<li>(<b>Séparation</b>) Soit $C$ un convexe compact non vide d'un espace euclidien $E$, et $x\notin C$. Soit $p\in C$ réalisant $d(x,C)$. Montrer que $\langle x-p,y-p\rangle\leqslant0$ pour tout $y\in C$, puis qu'il existe une forme linéaire $\varphi$ avec $\sup_C\varphi\lt\varphi(x)$.</li></ol>`,
  decode: { donnees: [R`$\dim\mathcal M_n(\mathbb R) = n^2$ ; $O_n(\mathbb R)$ compact.`], but: R`Mettre en place la séparation stricte d'un point et d'un convexe compact.`, cles: {} },
  steps: [
    Q(1, "Une première inclusion", R`<p>Une matrice orthogonale conserve la norme ; l'inégalité triangulaire donne la convexité.</p>`, R`<p>Pour $O\in O_n(\mathbb R)$, $\|Ox\| = \|x\|$, donc $|||O||| = 1$ et $O\in\mathcal B$. Si $A,B\in\mathcal B$ et $t\in[0,1]$ : $|||tA+(1-t)B|||\leqslant t|||A|||+(1-t)|||B|||\leqslant1$. $\mathcal B$ est un convexe contenant $O_n(\mathbb R)$, donc contenant son enveloppe convexe :</p><div class="sbox">$$\operatorname{Conv}(O_n(\mathbb R))\subset\mathcal B.$$</div>`),
    Q(2, "Carathéodory", R`<p>$p-1>N$ vecteurs $x_i-x_1$ sont liés. Retire $t\mu$ avec $t = \min_{\mu_i>0}\frac{\lambda_i}{\mu_i}$.</p>`, R`<p>Soit $x = \sum_{i=1}^p\lambda_ix_i$ avec $p>N+1$, $\lambda_i>0$. Les $p-1>N$ vecteurs $x_2-x_1,\dots,x_p-x_1$ de $\mathbb R^N$ sont liés : $\sum_{i\geqslant2}\mu_i(x_i-x_1) = 0$ avec $(\mu_i)\neq0$. En posant $\mu_1 = -\sum_{i\geqslant2}\mu_i$ : $\sum_{i=1}^p\mu_ix_i = 0$, $\sum\mu_i = 0$, $\mu\neq0$. Quitte à changer $\mu$ en $-\mu$, un $\mu_i$ est $>0$. Soit $t = \min_{\mu_i>0}\frac{\lambda_i}{\mu_i}>0$. Alors</p>$$x = \sum_i(\lambda_i-t\mu_i)x_i,\qquad\lambda_i-t\mu_i\geqslant0,\qquad\sum_i(\lambda_i-t\mu_i) = 1,$$<p>et au moins un coefficient s'annule. On a écrit $x$ avec $p-1$ points ; on recommence tant que $p>N+1$.</p>`),
    Q(3, "Conv(K) est compact", R`<p>$\operatorname{Conv}(K)$ est l'image du compact $K^{N+1}\times\Lambda$ par une application continue, où $\Lambda$ est le simplexe.</p>`, R`<p>Soit $\Lambda = \{\lambda\in[0,1]^{N+1} : \sum\lambda_i = 1\}$, fermé borné, donc compact. L'application $f : K^{N+1}\times\Lambda\to\mathbb R^N$, $(x_1,\dots,x_{N+1},\lambda)\mapsto\sum\lambda_ix_i$ est continue, et son image est $\operatorname{Conv}(K)$ par Q2. L'image d'un compact par une application continue est compacte.</p><p>$O_n(\mathbb R)$ est compact (fermé : $\,{}^tMM = I_n$ ; borné : $\sum_{ij}m_{ij}^2 = \operatorname{Tr}({}^tMM) = n$), donc $\operatorname{Conv}(O_n(\mathbb R))$ est un convexe compact.</p>`),
    Q(4, "Séparation stricte", R`<p>Pour $y\in C$ et $s\in\,]0,1]$, $p+s(y-p)\in C$ est plus loin de $x$ que $p$. Développe et fais $s\to0$.</p>`, R`<p>$y\mapsto\|x-y\|$ est continue sur le compact $C$ : elle atteint son minimum en un $p\in C$, et $p\neq x$. Pour $y\in C$ et $s\in\,]0,1]$, $p+s(y-p)\in C$ (convexité), donc</p>$$\|x-p-s(y-p)\|^2\geqslant\|x-p\|^2\iff-2s\langle x-p,y-p\rangle+s^2\|y-p\|^2\geqslant0.$$<p>On divise par $s>0$ et on fait $s\to0$ : $\langle x-p,y-p\rangle\leqslant0$. Soit $\varphi = \langle x-p,\cdot\rangle$. Pour $y\in C$ :</p>$$\varphi(y)\leqslant\varphi(p) = \varphi(x)-\|x-p\|^2.$$<div class="sbox">$$\sup_C\varphi\leqslant\varphi(x)-d(x,C)^2\lt\varphi(x).$$</div>`)
  ],
  piege: R`La séparation stricte demande la <b>compacité</b> (ou au moins la fermeture) du convexe : un point du bord d'un convexe ouvert ne peut pas être séparé strictement. C'est pour cela qu'on a établi en Q3 que $\operatorname{Conv}(O_n(\mathbb R))$ est compact.`,
  methode: R`Pour montrer $\operatorname{Conv}(X) = Y$ : l'inclusion $\subset$ par convexité de $Y$ ; l'inclusion $\supset$ par l'absurde, en séparant un point de $Y\setminus\operatorname{Conv}(X)$ par une forme linéaire, puis en contredisant la séparation.`
},

/* ===================== Partie II ===================== */
{ id: "conv-2", ...P, part: "Partie II", time: "35 min",
  title: "Conv(Oₙ(ℝ)) est la boule unité",
  enonce: PRE + R`<p><b>Partie II.</b> Par l'absurde, soit $M\in\mathcal B\setminus\operatorname{Conv}(O_n(\mathbb R))$.</p><ol start="5">
<li>Montrer qu'il existe $A\in\mathcal M_n(\mathbb R)$ telle que $\operatorname{Tr}(AY)\lt\operatorname{Tr}(AM)$ pour toute $Y\in\operatorname{Conv}(O_n(\mathbb R))$.</li>
<li>Soit $A = OS$ la décomposition polaire de $A$ et $(e_i)$ une base orthonormée propre de $S$ ($Se_i = \lambda_ie_i$, $\lambda_i\geqslant0$). Montrer que $\operatorname{Tr}(AM)\leqslant\sum_i\lambda_i$.</li>
<li>Calculer $\operatorname{Tr}(A\,{}^tO)$ et conclure : $\operatorname{Conv}(O_n(\mathbb R)) = \mathcal B$.</li>
<li>Vérifier le résultat pour $n = 1$, et dans le plan des matrices diagonales pour $n = 2$.</li></ol>`,
  decode: { donnees: [R`Q4 : séparation stricte. Toute forme linéaire sur $\mathcal M_n$ s'écrit $Y\mapsto\operatorname{Tr}(AY)$.`], but: R`Trouver une matrice orthogonale où la forme séparante est plus grande qu'en $M$.`, cles: {} },
  steps: [
    Q(5, "La forme séparante", R`<p>Q4 avec le produit scalaire $\langle U,V\rangle = \operatorname{Tr}({}^tUV)$ ; pose $A = {}^tU$.</p>`, R`<p>Par Q3, $C = \operatorname{Conv}(O_n(\mathbb R))$ est un convexe compact, et $M\notin C$. Par Q4 dans l'espace euclidien $(\mathcal M_n(\mathbb R),\langle\cdot,\cdot\rangle)$, il existe $U$ ($U = M-p$) avec $\langle U,Y\rangle\lt\langle U,M\rangle$ pour tout $Y\in C$. Avec $A = {}^tU$ : $\langle U,Y\rangle = \operatorname{Tr}({}^tUY) = \operatorname{Tr}(AY)$.</p>`),
    Q(6, "Majorer Tr(AM)", R`<p>$\operatorname{Tr}(AM) = \operatorname{Tr}(MA) = \operatorname{Tr}(MOS) = \sum\lambda_i\langle MOe_i,e_i\rangle$.</p>`, R`<p>$\operatorname{Tr}(AM) = \operatorname{Tr}(MA) = \operatorname{Tr}(MOS)$. On calcule la trace dans la base orthonormée $(e_i)$ :</p>$$\operatorname{Tr}(MOS) = \sum_i\langle MOSe_i,e_i\rangle = \sum_i\lambda_i\langle MOe_i,e_i\rangle.$$<p>Par Cauchy-Schwarz, $|\langle MOe_i,e_i\rangle|\leqslant\|MOe_i\|\,\|e_i\|\leqslant|||M|||\,\|Oe_i\|\leqslant1$ (car $M\in\mathcal B$, $\|Oe_i\| = 1$). Comme $\lambda_i\geqslant0$ :</p><div class="sbox">$$\operatorname{Tr}(AM)\leqslant\sum_i\lambda_i = \operatorname{Tr}(S).$$</div>`, ["cv-pol", "cv-spec", "cv-cs"]),
    Q(7, "Contradiction", R`<p>$\,{}^tO\in O_n(\mathbb R)\subset C$ et $\operatorname{Tr}(OS\,{}^tO) = \operatorname{Tr}(S)$.</p>`, R`<p>$\,{}^tO$ est orthogonale, donc dans $C$, et</p>$$\operatorname{Tr}(A\,{}^tO) = \operatorname{Tr}(OS\,{}^tO) = \operatorname{Tr}(S\,{}^tOO) = \operatorname{Tr}(S).$$<p>Par Q5 et Q6 : $\operatorname{Tr}(S) = \operatorname{Tr}(A\,{}^tO)\lt\operatorname{Tr}(AM)\leqslant\operatorname{Tr}(S)$. Absurde. Avec Q1 :</p><div class="sbox">$$\operatorname{Conv}(O_n(\mathbb R)) = \{A\in\mathcal M_n(\mathbb R) : |||A|||\leqslant1\}.$$</div>`),
    Q(8, "Petites dimensions", R`<p>$O_1 = \{\pm1\}$. Pour $n = 2$ diagonal : $|||\operatorname{diag}(a,b)||| = \max(|a|,|b|)$.</p>`, R`<p><b>$n = 1$.</b> $O_1(\mathbb R) = \{-1,1\}$, $\operatorname{Conv} = [-1,1] = \{a : |a|\leqslant1\}$. ✓</p><p><b>$n = 2$, matrices diagonales.</b> $|||\operatorname{diag}(a,b)||| = \max(|a|,|b|)$ (le sup de $\sqrt{a^2x^2+b^2y^2}$ sur le cercle unité). La tranche diagonale de $\mathcal B$ est le carré $[-1,1]^2$, enveloppe convexe de ses sommets $\operatorname{diag}(\pm1,\pm1)$, qui sont orthogonales. Explicitement :</p>$$\operatorname{diag}(s_1,s_2) = \sum_{\varepsilon\in\{\pm1\}^2}\frac{1+\varepsilon_1s_1}2\cdot\frac{1+\varepsilon_2s_2}2\operatorname{diag}(\varepsilon_1,\varepsilon_2),$$<p>avec des coefficients positifs de somme $1$ (développer le produit $\prod_k\big(\frac{1+s_k}2+\frac{1-s_k}2\big) = 1$).</p>${figDiag}`)
  ],
  piege: R`La trace $\operatorname{Tr}(MOS)$ se calcule dans la base propre de $S$, pas de $M$ : on ne sait rien de $M$ sauf $|||M|||\leqslant1$, et c'est exactement ce que Cauchy-Schwarz utilise.`,
  methode: R`Identifier un dual : sur un espace euclidien, toute forme linéaire est $\langle U,\cdot\rangle$ ; sur $\mathcal M_n(\mathbb R)$, c'est $Y\mapsto\operatorname{Tr}(AY)$. La décomposition polaire $A = OS$ indique alors le meilleur choix d'élément de $O_n$.`
},

/* ===================== Partie III ===================== */
{ id: "conv-3", ...P, part: "Partie III", time: "35 min",
  title: "Une preuve directe et les points extrémaux",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="9">
<li>(<b>Preuve directe</b>) Soit $M\in\mathcal B$, $M = OS$ (polaire), $S = Q\operatorname{diag}(s_1,\dots,s_n)\,{}^tQ$ avec $Q\in O_n(\mathbb R)$. Montrer que $0\leqslant s_i\leqslant1$, puis écrire $M$ explicitement comme combinaison convexe des $2^n$ matrices orthogonales $OQ\operatorname{diag}(\varepsilon)\,{}^tQ$, $\varepsilon\in\{\pm1\}^n$.</li>
<li>En déduire que si $M\in\mathcal B\setminus O_n(\mathbb R)$, $M$ n'est pas un point extrémal de $\mathcal B$.</li>
<li>Montrer que toute $O\in O_n(\mathbb R)$ est un point extrémal de $\mathcal B$. Conclure : les points extrémaux de $\mathcal B$ sont exactement les matrices orthogonales.</li></ol>`,
  decode: { donnees: [R`$|||M||| = \max_is_i$ (valeurs propres de $S$).`], but: R`Ramener la boule $\mathcal B$ au cube $[0,1]^n$ des valeurs singulières, dont les sommets sont connus.`, cles: {} },
  steps: [
    Q(9, "Une combinaison convexe explicite", R`<p>$\prod_{k=1}^n\Big(\frac{1+s_k}2+\frac{1-s_k}2\Big) = 1$ ; développe.</p>`, R`<p>Par le rappel, $|||M||| = \max_is_i\leqslant1$, et $s_i\geqslant0$ ($S\geqslant0$). Pour $\varepsilon\in\{\pm1\}^n$, posons $c_\varepsilon = \prod_k\frac{1+\varepsilon_ks_k}2\geqslant0$. En développant $\prod_k\big(\frac{1+s_k}2+\frac{1-s_k}2\big)$ :</p>$$\sum_\varepsilon c_\varepsilon = 1,\qquad\sum_\varepsilon c_\varepsilon\varepsilon_j = \frac{1+s_j}2-\frac{1-s_j}2 = s_j$$<p>(dans la seconde somme, on factorise le terme $k = j$ et les autres facteurs somment à $1$).</p><p>Donc $\operatorname{diag}(s) = \sum_\varepsilon c_\varepsilon\operatorname{diag}(\varepsilon)$, et</p><div class="sbox">$$M = OQ\operatorname{diag}(s)\,{}^tQ = \sum_{\varepsilon\in\{\pm1\}^n}c_\varepsilon\,\underbrace{OQ\operatorname{diag}(\varepsilon)\,{}^tQ}_{\in O_n(\mathbb R)}.$$</div><p>On retrouve $\mathcal B\subset\operatorname{Conv}(O_n(\mathbb R))$, sans séparation.</p>`, ["cv-pol"]),
    Q(10, "Les points non orthogonaux ne sont pas extrémaux", R`<p>Si $M\notin O_n$, un $s_j\lt1$ ; fais varier $s_j$ seul.</p>`, R`<p>Si tous les $s_i$ valaient $1$, on aurait $S = I_n$ et $M = O\in O_n$. Donc un $s_j\lt1$. Soit $\eta = 1-s_j>0$ et $s^\pm$ le vecteur $s$ où $s_j$ est remplacé par $s_j\pm\eta$, soit $1$ et $2s_j-1\in[-1,1]$ (car $s_j\geqslant0$). Pour $D$ diagonale, $|||OQD\,{}^tQ||| = |||D||| = \max_k|d_k|$ ($O$ et $Q$ conservent la norme). Les matrices $M^\pm = OQ\operatorname{diag}(s^\pm)\,{}^tQ$ sont donc dans $\mathcal B$, distinctes, et $M = \frac12(M^++M^-)$: $M$ n'est pas extrémal.</p>`),
    Q(11, "Les matrices orthogonales sont extrémales", R`<p>Si $O = tU+(1-t)V$, pour $\|x\| = 1$ : $1 = \|Ox\|\leqslant t\|Ux\|+(1-t)\|Vx\|\leqslant1$. Cas d'égalité.</p>`, R`<p>Soit $O = tU+(1-t)V$, $U,V\in\mathcal B$, $t\in\,]0,1[$. Pour $\|x\| = 1$ :</p>$$1 = \|Ox\|\leqslant\|tUx\|+\|(1-t)Vx\|\leqslant t+(1-t) = 1.$$<p>Toutes les inégalités sont des égalités : $\|Ux\| = \|Vx\| = 1$, et l'inégalité triangulaire est une égalité, donc $tUx$ et $(1-t)Vx$ sont positivement liés : $Ux = \mu Vx$ avec $\mu\geqslant0$, et $\mu = 1$ (même norme). Donc $Ux = Vx$ pour tout $x$ unitaire, $U = V = O$.</p><div class="sbox"><p>Les points extrémaux de $\mathcal B = \operatorname{Conv}(O_n(\mathbb R))$ sont exactement les matrices orthogonales.</p></div><p>Comparaison : la boule unité de la norme euclidienne de $\mathbb R^n$ a pour points extrémaux toute la sphère ; celle de la norme subordonnée de $\mathcal M_n(\mathbb R)$ n'a pour points extrémaux que $O_n(\mathbb R)$, une partie « petite » (de dimension $\frac{n(n-1)}2$) de sa frontière.</p>`, ["cv-cs"])
  ],
  piege: R`En Q10, il faut que $M^\pm$ restent dans $\mathcal B$ : on ne peut perturber que les valeurs singulières strictement inférieures à $1$, d'où le choix d'un $s_j\lt1$.`,
  methode: R`Décomposition en valeurs singulières : $M = OQ\operatorname{diag}(s)\,{}^tQ$ transforme une question sur la boule de $\mathcal M_n(\mathbb R)$ en une question sur le cube $[0,1]^n$, dont les sommets sont évidents.`
}
]);
})();

/* Commando X-ENS · Aller plus loin · Sujet « Approximation et matrice de Hilbert ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 5, plus: "hilb",
  sujet: "Approximation quadratique et matrice de Hilbert",
  sujetDesc: "La meilleure approximation d'une fonction par un polynôme de degré < n au sens des moindres carrés se calcule en résolvant un système dont la matrice est la matrice de Gram de la base choisie. Pour la base (1, X, …, X^{n−1}), c'est la matrice de Hilbert Hₙ = (1/(i+j−1)). On calcule son déterminant (déterminant de Cauchy), on en tire son comportement asymptotique, et on montre que son conditionnement explose exponentiellement : cette base est numériquement catastrophique." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "hi-proj": { t: "Projection orthogonale", b: R`<p>Si $F$ est un sous-espace de dimension finie d'un espace préhilbertien $E$, la projection orthogonale $p(x)$ est l'unique $y\in F$ avec $x-y\perp F$, et $\|x-p(x)\| = \min_{y\in F}\|x-y\|$.</p>` },
  "hi-spec": { t: "Normes et valeurs propres", b: R`<p>Pour $A\in\mathcal S_n(\mathbb R)$, $|||A|||_2 = \rho(A)$ ; si $A$ est définie positive de valeurs propres $0\lt\lambda_1\leqslant\dots\leqslant\lambda_n$, alors $|||A^{-1}|||_2 = \frac1{\lambda_1}$ et $\det A = \prod\lambda_i$.</p>` },
  "hi-stir": { t: "Somme et intégrale", b: R`<p>$\ln(k!) = k\ln k-k+O(\ln k)$, et $\sum_{k=1}^{n}(k\ln k-k) = \frac{n^2}2\ln n-\frac34n^2+O(n\ln n)$ (comparaison série-intégrale avec $\int x\ln x\,dx = \frac{x^2}2\ln x-\frac{x^2}4$).</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $E = \mathcal C([0,1],\mathbb R)$ avec $\langle f,g\rangle = \int_0^1fg$. La <b>matrice de Gram</b> d'une famille $(e_1,\dots,e_n)$ est $G = (\langle e_i,e_j\rangle)_{i,j}$. La <b>matrice de Hilbert</b> est $H_n = \big(\frac1{i+j-1}\big)_{1\leqslant i,j\leqslant n}$, Gram de $(1,X,\dots,X^{n-1})$. Le <b>conditionnement</b> d'une matrice inversible est $\kappa(A) = |||A|||_2\,|||A^{-1}|||_2$ ; il majore le facteur d'amplification des erreurs relatives dans la résolution de $Ax = b$.</p>`;

const figExp = GRAPH({ w: 440, h: 230, x: [0, 1], y: [0.6, 2.9], xt: [0.25, 0.5, 0.75, 1], xtl: ["0,25", "0,5", "0,75", "1"], yt: [1, 2], xl: "x", curves: [{ f: x => Math.exp(x), c: "b", lab: [0.05, 1.25, "eˣ"] }, { f: x => (4 * Math.E - 10) + (18 - 6 * Math.E) * x, c: "r", dash: true, lab: [0.62, 1.75, "P(x) = (4e − 10) + (18 − 6e)x"] }] }, R`La meilleure approximation de $e^x$ par une fonction affine pour la norme $\|\cdot\|_2$ sur $[0,1]$ : $P(x)\approx0{,}873+1{,}690\,x$. L'erreur change de signe deux fois (l'écart est orthogonal à $1$ et à $x$).`, "Approximation de exp");

const kap = [0, 1.285, 2.719, 4.191, 5.678, 7.175, 8.677, 10.183, 11.693, 13.205], bnd = [0, 0.54, 1.111, 1.695, 2.285, 2.878, 3.474, 4.07, 4.668, 5.266];
const figCond = GRAPH({ w: 440, h: 240, x: [0.5, 10.5], y: [-0.5, 14], xt: [2, 4, 6, 8, 10], yt: [4, 8, 12], xl: "n", curves: [], extra: (X, Y) => { let s = ""; for (let n = 1; n <= 10; n++) { s += `<circle cx="${X(n).toFixed(1)}" cy="${Y(kap[n - 1]).toFixed(1)}" r="4.5" class="ptb"/><circle cx="${X(n).toFixed(1)}" cy="${Y(bnd[n - 1]).toFixed(1)}" r="4" class="ptr"/>`; } return s + `<text x="${X(6.2)}" y="${Y(9.6)}" class="sm b">log₁₀ κ(Hₙ)</text><text x="${X(6.6)}" y="${Y(2.4)}" class="sm r">−(1/n)·log₁₀ det(Hₙ)</text>`; } }, R`$\log_{10}\kappa(H_n)$ (bleu) et le minorant $\log_{10}\det(H_n)^{-1/n}$ (rouge) : deux droites, donc deux exponentielles. $\kappa(H_{10})\approx1{,}6\cdot10^{13}$ : en double précision ($\approx16$ chiffres), on perd presque tout.`, "Conditionnement de la matrice de Hilbert");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "hilb-1", ...P, part: "Partie I", time: "30 min",
  title: "Moindres carrés et matrices de Gram",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer qu'une matrice de Gram est symétrique positive, et définie positive si la famille est libre. En déduire que $H_n$ est symétrique définie positive.</li>
<li>Soit $F = \operatorname{Vect}(e_1,\dots,e_n)$ ($e_i$ libres) et $x\in E$. Montrer que $p(x) = \sum y_ie_i$ où $y$ est solution de $Gy = (\langle x,e_i\rangle)_i$.</li>
<li>Calculer la meilleure approximation de $e^x$ par un polynôme de degré $\leqslant1$ pour $\|\cdot\|_2$ sur $[0,1]$.</li></ol>`,
  decode: { donnees: [R`$x-p(x)\perp F$.`], but: R`Écrire les conditions d'orthogonalité dans la base $(e_i)$.`, cles: {} },
  steps: [
    Q(1, "Gram est positive", R`<p>$\,{}^tzGz = \big\|\sum z_ie_i\big\|^2$.</p>`, R`<p>$G$ est symétrique ($\langle e_i,e_j\rangle = \langle e_j,e_i\rangle$). Pour $z\in\mathbb R^n$ :</p>$$\,{}^tzGz = \sum_{i,j}z_iz_j\langle e_i,e_j\rangle = \Big\langle\sum_iz_ie_i,\sum_jz_je_j\Big\rangle = \Big\|\sum_iz_ie_i\Big\|^2\geqslant0,$$<p>avec égalité seulement si $\sum z_ie_i = 0$, soit $z = 0$ si la famille est libre. $(1,X,\dots,X^{n-1})$ est libre dans $E$, et $\langle X^{i-1},X^{j-1}\rangle = \int_0^1x^{i+j-2}dx = \frac1{i+j-1}$ : $H_n\in\mathcal S_n^{++}(\mathbb R)$.</p>`),
    Q(2, "Le système normal", R`<p>$\langle x-\sum y_je_j,e_i\rangle = 0$ pour tout $i$.</p>`, R`<p>$p(x) = \sum_jy_je_j$ est caractérisé par $x-p(x)\perp e_i$ pour tout $i$ :</p>$$\sum_jy_j\langle e_j,e_i\rangle = \langle x,e_i\rangle\quad(1\leqslant i\leqslant n),\qquad\text{soit}\qquad Gy = (\langle x,e_i\rangle)_i.$$<p>$G$ est inversible (Q1), d'où une unique solution.</p>`, ["hi-proj"]),
    Q(3, "Un exemple", R`<p>$H_2 = \begin{pmatrix}1&\frac12\\\frac12&\frac13\end{pmatrix}$, $b = (\int_0^1e^x,\int_0^1xe^x) = (e-1,1)$.</p>`, R`<p>$\int_0^1e^x = e-1$ et $\int_0^1xe^x = [xe^x-e^x]_0^1 = 1$. $\det H_2 = \frac13-\frac14 = \frac1{12}$ et $H_2^{-1} = 12\begin{pmatrix}\frac13&-\frac12\\-\frac12&1\end{pmatrix}$, donc</p>$$c_0 = 12\Big(\frac{e-1}3-\frac12\Big) = 4e-10,\qquad c_1 = 12\Big(-\frac{e-1}2+1\Big) = 18-6e.$$<div class="sbox">$$P(x) = (4e-10)+(18-6e)x\approx0{,}873+1{,}690\,x.$$</div>${figExp}`)
  ],
  piege: R`La meilleure approximation au sens $L^2$ n'est pas l'interpolation, ni le développement de Taylor ($1+x$) : elle minimise une erreur globale sur $[0,1]$.`,
  methode: R`Moindres carrés : projection orthogonale, calculée par le système normal $Gy = b$ (Gram de la base, produits scalaires avec le second membre).`
},

/* ===================== Partie II ===================== */
{ id: "hilb-2", ...P, part: "Partie II", time: "35 min",
  title: "Le déterminant de Cauchy",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Soit $C = \big(\frac1{x_i+y_j}\big)_{1\leqslant i,j\leqslant n}$ ($x_i+y_j\neq0$). Montrer, par des opérations sur les lignes puis les colonnes et une récurrence sur $n$, que $$\det C = \frac{\prod_{i\lt j}(x_j-x_i)(y_j-y_i)}{\prod_{i,j}(x_i+y_j)}.$$</li>
<li>En déduire $\det H_n = \dfrac{c_n^4}{c_{2n}}$ avec $c_n = \prod_{k=1}^{n-1}k!$. Vérifier pour $n = 2$ et $n = 3$.</li></ol>`,
  decode: { donnees: [R`$\frac1{x_i+y_j}-\frac1{x_n+y_j} = \frac{x_n-x_i}{(x_i+y_j)(x_n+y_j)}$.`], but: R`Faire apparaître le même déterminant de taille $n-1$.`, cles: {} },
  steps: [
    Q(4, "Le déterminant de Cauchy", R`<p>$L_i\leftarrow L_i-L_n$ pour $i\lt n$ ; factoriser $(x_n-x_i)$ en ligne et $\frac1{x_n+y_j}$ en colonne ; puis $C_j\leftarrow C_j-C_n$.</p>`, R`<p>Notons $D_n(x,y)$ le déterminant. Pour $i\lt n$, $L_i\leftarrow L_i-L_n$ :</p>$$\frac1{x_i+y_j}-\frac1{x_n+y_j} = \frac{x_n-x_i}{(x_i+y_j)(x_n+y_j)}.$$<p>On factorise $x_n-x_i$ dans la ligne $i$ ($i\lt n$) et $\frac1{x_n+y_j}$ dans chaque colonne $j$. La dernière ligne devient $(1,\dots,1)$ et les autres $\frac1{x_i+y_j}$. Puis $C_j\leftarrow C_j-C_n$ ($j\lt n$) : la dernière ligne devient $(0,\dots,0,1)$, et pour $i\lt n$,</p>$$\frac1{x_i+y_j}-\frac1{x_i+y_n} = \frac{y_n-y_j}{(x_i+y_j)(x_i+y_n)}.$$<p>On factorise $y_n-y_j$ (colonne $j\lt n$) et $\frac1{x_i+y_n}$ (ligne $i\lt n$), puis on développe selon la dernière ligne :</p>$$D_n = \frac{\prod_{i\lt n}(x_n-x_i)\prod_{j\lt n}(y_n-y_j)}{\prod_j(x_n+y_j)\prod_{i\lt n}(x_i+y_n)}\,D_{n-1}.$$<p>Avec $D_1 = \frac1{x_1+y_1}$, la récurrence donne la formule.</p>`),
    Q(5, "Le déterminant de Hilbert", R`<p>$x_i = i$, $y_j = j-1$. $\prod_{i\lt j}(j-i) = c_n$ et $\prod_{i,j}(i+j-1) = \prod_i\frac{(i+n-1)!}{(i-1)!}$.</p>`, R`<p>$x_i = i$, $y_j = j-1$ : $x_i+y_j = i+j-1$. $\prod_{i\lt j\leqslant n}(j-i) = \prod_{j=2}^n(j-1)! = c_n$, et de même pour les $y$. $\prod_{i,j}(i+j-1) = \prod_{i=1}^n\frac{(i+n-1)!}{(i-1)!}$, avec $\prod_{i=1}^n(i+n-1)! = \prod_{k=n}^{2n-1}k! = \frac{c_{2n}}{c_n}$ et $\prod_{i=1}^n(i-1)! = c_n$ : $\prod_{i,j}(i+j-1) = \frac{c_{2n}}{c_n^2}$.</p><div class="sbox">$$\det H_n = \frac{c_n^2}{c_{2n}/c_n^2} = \frac{c_n^4}{c_{2n}}.$$</div><p>$n = 2$ : $c_2 = 1$, $c_4 = 1!\,2!\,3! = 12$, $\det H_2 = \frac1{12}$ ✓. $n = 3$ : $c_3 = 2$, $c_6 = 1\cdot2\cdot6\cdot24\cdot120 = 34\,560$, $\det H_3 = \frac{16}{34560} = \frac1{2160}$.</p>`)
  ],
  piege: R`Attention aux indices : avec $x_i = i$ et $y_j = j-1$, les $y$ commencent à $0$ ; le produit $\prod(y_j-y_i)$ est le même que pour $x$ (différences invariantes par translation).`,
  methode: R`Déterminant à structure rationnelle : soustraire une ligne aux autres pour faire apparaître des facteurs communs, puis récurrence sur la taille.`
},

/* ===================== Partie III ===================== */
{ id: "hilb-3", ...P, part: "Partie III", time: "35 min",
  title: "Un conditionnement exponentiel",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="6">
<li>Montrer que pour $A$ symétrique définie positive, $\kappa(A) = \frac{\lambda_{\max}}{\lambda_{\min}}$.</li>
<li>Montrer que $\lambda_{\max}(H_n)\geqslant1$, puis que $\kappa(H_n)\geqslant\det(H_n)^{-1/n}$.</li>
<li>Montrer que $\ln c_n = \frac{n^2}2\ln n-\frac34n^2+O(n\ln n)$, puis que $\ln\det H_n = -n^2\ln4+O(n\ln n)$.</li>
<li>En déduire $\kappa(H_n)\geqslant4^{n}e^{O(\ln n)}$. Interpréter pour la résolution numérique de $H_nc = b$ en double précision. Que faire à la place ?</li></ol>`,
  decode: { donnees: [R`$\det H_n = c_n^4/c_{2n}$.`], but: R`Minorer $\kappa$ par une quantité calculable (le déterminant), puis estimer celle-ci asymptotiquement.`, cles: {} },
  steps: [
    Q(6, "Conditionnement d'une matrice symétrique", R`<p>$|||A|||_2 = \lambda_{\max}$, $|||A^{-1}|||_2 = \frac1{\lambda_{\min}}$.</p>`, R`<p>Par le rappel, $|||A|||_2 = \rho(A) = \lambda_{\max}$, et $A^{-1}$ est symétrique de valeurs propres $\frac1{\lambda_i}$, donc $|||A^{-1}|||_2 = \frac1{\lambda_{\min}}$. D'où $\kappa(A) = \frac{\lambda_{\max}}{\lambda_{\min}}$.</p>`, ["hi-spec"]),
    Q(7, "Minoration par le déterminant", R`<p>$\|H_ne_1\|_2\geqslant1$ ; $\lambda_{\min}^n\leqslant\det H_n$.</p>`, R`<p>$H_ne_1$ est la première colonne $(1,\frac12,\dots)$, de norme $\geqslant1$, donc $\lambda_{\max} = |||H_n|||_2\geqslant1$. Et $\det H_n = \prod\lambda_i\geqslant\lambda_{\min}^n$, donc $\lambda_{\min}\leqslant\det(H_n)^{1/n}$. Ainsi</p><div class="sbox">$$\kappa(H_n) = \frac{\lambda_{\max}}{\lambda_{\min}}\geqslant\det(H_n)^{-1/n}.$$</div>`, ["hi-spec"]),
    Q(8, "Asymptotique du déterminant", R`<p>$\ln c_n = \sum_{k\lt n}\ln k!$. Puis $4\ln c_n-\ln c_{2n}$, où les termes $n^2\ln n$ et $n^2$ se compensent.</p>`, R`<p>Par le rappel, $\ln c_n = \sum_{k=1}^{n-1}\big(k\ln k-k+O(\ln k)\big) = \frac{n^2}2\ln n-\frac34n^2+O(n\ln n)$. Alors</p>$$\begin{aligned}\ln\det H_n&= 4\ln c_n-\ln c_{2n}\\&= 2n^2\ln n-3n^2-\Big(2n^2\ln(2n)-3n^2\Big)+O(n\ln n)\\&= -2n^2\ln2+O(n\ln n).\end{aligned}$$<div class="sbox">$$\ln\det H_n = -n^2\ln4+O(n\ln n).$$</div><p>Ainsi $\det H_{10}\approx2\cdot10^{-53}$ : la matrice est « presque singulière ».</p>`, ["hi-stir"]),
    Q(9, "Conséquence numérique", R`<p>$\det(H_n)^{-1/n} = e^{n\ln4+O(\ln n)}$.</p>`, R`<p>Par Q7 et Q8 :</p>$$\kappa(H_n)\geqslant\exp\Big(-\frac1n\ln\det H_n\Big) = \exp\big(n\ln4+O(\ln n)\big) = 4^ne^{O(\ln n)}.$$<p>En réalité $\kappa(H_n)$ croît comme $(1+\sqrt2)^{4n}\approx34^n$ : $\kappa(H_{10})\approx1{,}6\cdot10^{13}$. En double précision (erreur relative $\approx10^{-16}$ sur les données), la solution de $H_{10}c = b$ n'a que $2$ ou $3$ chiffres significatifs, et pour $n\geqslant13$, aucun.</p>${figCond}<p><b>À la place</b>, on utilise une base orthogonale de $\mathbb R_{n-1}[X]$ (polynômes de Legendre sur $[0,1]$) : la matrice de Gram devient diagonale, de conditionnement modéré, et les coefficients sont $\frac{\langle f,L_k\rangle}{\|L_k\|^2}$ sans système à résoudre.</p>`)
  ],
  piege: R`Le minorant $\det(H_n)^{-1/n}$ ne donne qu'une croissance en $4^n$ alors que la vraie est en $34^n$ : il suffit à prouver l'explosion exponentielle, mais il n'est pas optimal.`,
  methode: R`Conditionnement d'une matrice symétrique définie positive : rapport des valeurs propres extrêmes ; une minoration par le déterminant suffit souvent à montrer qu'un problème est mal conditionné.`
}
]);
})();

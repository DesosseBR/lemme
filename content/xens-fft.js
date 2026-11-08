/* Commando X-ENS · Aller plus loin · Sujet « Transformée de Fourier rapide ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 4, plus: "fft",
  sujet: "La transformée de Fourier rapide",
  sujetDesc: "La transformée de Fourier discrète évalue un polynôme aux racines n-ièmes de l'unité ; elle transforme la convolution (le produit de polynômes) en produit terme à terme, et s'inverse par une autre transformée. Pour n = 2^m, l'algorithme « diviser pour régner » de Cooley-Tukey la calcule en O(n log n) opérations au lieu de n² : on en déduit la multiplication rapide des polynômes." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "fft-geo": { t: "Somme géométrique des racines de l'unité", b: R`<p>Si $w$ est une racine primitive $n$-ième de l'unité et $k\in\mathbb Z$ : $\sum_{j=0}^{n-1}w^{jk} = n$ si $n\mid k$, et $0$ sinon (car $w^k\neq1$ et $\frac{(w^k)^n-1}{w^k-1} = 0$).</p>` },
  "fft-vdm": { t: "Déterminant de Vandermonde", b: R`<p>$\det\big(x_i^{\,j}\big)_{0\leqslant i,j\lt n} = \prod_{i\lt j}(x_j-x_i)$, non nul si les $x_i$ sont distincts. Évaluer un polynôme de degré $\lt n$ en $n$ points distincts est donc une bijection (interpolation de Lagrange).</p>` },
  "fft-rec": { t: "Récurrences « diviser pour régner »", b: R`<p>Si $C(m) = 2C(m-1)+a2^m$, alors $T(m) = \frac{C(m)}{2^m}$ vérifie $T(m) = T(m-1)+a$, donc $C(m) = 2^m(C(0)+am)$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $n\geqslant1$, $w = e^{2i\pi/n}$ (racine primitive $n$-ième de l'unité). On identifie $f = (f_0,\dots,f_{n-1})\in\mathbb C^n$ au polynôme $f(X) = \sum_jf_jX^j$. La <b>transformée de Fourier discrète</b> (TFD) est $\hat f = F(w)f$, où $F(w) = (w^{ij})_{0\leqslant i,j\lt n}$, soit $\hat f_i = \sum_{j=0}^{n-1}f_jw^{ij} = f(w^i)$. La <b>convolution cyclique</b> est $(f*g)_i = \sum_{k=0}^{n-1}f_kg_{(i-k)\bmod n}$. On compte les additions et multiplications complexes (« opérations »).</p>`;

/* Figure : papillons de la FFT pour n = 8 */
const figPap = (() => {
  const order = [0, 4, 2, 6, 1, 5, 3, 7], x0 = 70, dx = 120, y0 = 30, dy = 34;
  let b = "";
  for (let s = 0; s < 3; s++) {
    const half = 1 << s;
    for (let i = 0; i < 8; i++) {
      const blk = Math.floor(i / (2 * half)), pos = i % (2 * half);
      const partner = pos < half ? i + half : i - half;
      const xa = x0 + dx * s, xb = x0 + dx * (s + 1);
      b += `<line x1="${xa}" y1="${y0 + dy * i}" x2="${xb}" y2="${y0 + dy * i}" class="thin" style="stroke-dasharray:none"/>`;
      b += `<line x1="${xa}" y1="${y0 + dy * partner}" x2="${xb}" y2="${y0 + dy * i}" class="${["vb", "vr", "vg"][s]}" style="stroke-width:1.3"/>`;
    }
  }
  for (let i = 0; i < 8; i++) { b += S(x0 - 10, y0 + dy * i + 4, "f" + "₀₁₂₃₄₅₆₇"[order[i]], "end", "it") + S(x0 + 3 * dx + 10, y0 + dy * i + 4, "f̂" + "₀₁₂₃₄₅₆₇"[i], "start", "it"); for (let s = 0; s <= 3; s++) b += `<circle cx="${x0 + dx * s}" cy="${y0 + dy * i}" r="3" class="pt"/>`; }
  ["taille 2", "taille 4", "taille 8"].forEach((t, s) => { b += S(x0 + dx * s + dx / 2, y0 + dy * 8 + 6, t, "middle", "sm"); });
  return FIG(520, 320, b, R`Le schéma des « papillons » pour $n = 8$ : on range les $f_j$ dans l'ordre des indices écrits en binaire à l'envers ($0,4,2,6,1,5,3,7$), puis trois étages ($\log_28$) combinent deux à deux des TFD de taille $2$, $4$, $8$ par $\hat f_i = \hat u_i+w^i\hat v_i$ et $\hat f_{i+n/2} = \hat u_i-w^i\hat v_i$. Chaque étage coûte $O(n)$.`, "Papillons de la FFT");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "fft-1", ...P, part: "Partie I", time: "30 min",
  title: "La transformée de Fourier discrète",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $F(w)$ est inversible (Vandermonde), et que $F(w)F(w^{-1}) = nI_n$. En déduire $F(w)^{-1} = \frac1nF(w^{-1})$ et l'interprétation : inverser la TFD, c'est interpoler.</li>
<li>Montrer que $\widehat{f*g} = \hat f\cdot\hat g$ (produit coordonnée par coordonnée). On pourra montrer que $f*g$ correspond au polynôme $f(X)g(X)$ réduit modulo $X^n-1$.</li>
<li>Calculer la TFD de $f = (1,2,3,4)$ ($n = 4$, $w = i$) directement. Combien d'opérations coûte le calcul direct de $\hat f$ en général ?</li></ol>`,
  decode: { donnees: [R`$\hat f_i = f(w^i)$.`], but: R`Voir la TFD comme une évaluation multipoint, et la convolution comme un produit de polynômes.`, cles: {} },
  steps: [
    Q(1, "Inversion", R`<p>Coefficient $(i,j)$ de $F(w)F(w^{-1})$ : $\sum_kw^{(i-j)k}$.</p>`, R`<p>$F(w)$ est la matrice de Vandermonde des points $1,w,\dots,w^{n-1}$, distincts : elle est inversible. Le coefficient $(i,j)$ de $F(w)F(w^{-1})$ est</p>$$\sum_{k=0}^{n-1}w^{ik}w^{-kj} = \sum_{k=0}^{n-1}(w^{i-j})^k = \begin{cases}n&i = j\\0&i\neq j\end{cases}$$<p>(car $0\lt|i-j|\lt n$ donne $w^{i-j}\neq1$). Donc</p><div class="sbox">$$F(w)^{-1} = \frac1nF(w^{-1}) = \frac1nF(\bar w).$$</div><p>Retrouver $f$ à partir des valeurs $f(w^i)$, c'est interpoler un polynôme de degré $\lt n$ en $n$ points ; ici l'interpolation est elle-même une TFD.</p>`, ["fft-geo", "fft-vdm"]),
    Q(2, "Le théorème de convolution", R`<p>$f(X)g(X) = \sum_i\big(\sum_{k+l = i}f_kg_l\big)X^i$ ; modulo $X^n-1$, $X^{i}\equiv X^{i\bmod n}$. Et $X^n-1$ s'annule aux $w^i$.</p>`, R`<p>Dans $f(X)g(X) = \sum_{k,l}f_kg_lX^{k+l}$, on réduit modulo $X^n-1$ : $X^{k+l}\equiv X^{(k+l)\bmod n}$. Le coefficient de $X^i$ dans le reste est $\sum_{k+l\equiv i\ (n)}f_kg_l = \sum_kf_kg_{(i-k)\bmod n} = (f*g)_i$. Donc $f(X)g(X) = (f*g)(X)+(X^n-1)H(X)$. En $X = w^i$, $(w^i)^n = 1$ :</p>$$\widehat{f*g}_i = (f*g)(w^i) = f(w^i)g(w^i) = \hat f_i\hat g_i.$$<div class="sbox">$$\widehat{f*g} = \hat f\cdot\hat g.$$</div>`),
    Q(3, "Un exemple et le coût naïf", R`<p>$\hat f_k = 1+2i^k+3i^{2k}+4i^{3k}$.</p>`, R`$$\begin{aligned}\hat f_0 &= 10, & \hat f_1 &= 1+2i-3-4i = -2-2i,\\ \hat f_2 &= 1-2+3-4 = -2, & \hat f_3 &= 1-2i-3+4i = -2+2i.\end{aligned}$$<p>Le calcul direct demande, pour chacun des $n$ coefficients, $n$ multiplications et $n-1$ additions (en supposant les $w^{ij}$ connus) : de l'ordre de $2n^2$ opérations, soit $O(n^2)$.</p>`)
  ],
  piege: R`La convolution qui correspond à la TFD est <b>cyclique</b> (indices modulo $n$). Pour obtenir le vrai produit de deux polynômes, il faudra compléter par des zéros pour éviter le repliement (Partie III).`,
  methode: R`TFD = évaluation aux racines de l'unité ; TFD inverse = interpolation = TFD avec $\bar w$, divisée par $n$ ; produit de polynômes = produit des valeurs.`
},

/* ===================== Partie II ===================== */
{ id: "fft-2", ...P, part: "Partie II", time: "35 min",
  title: "L'algorithme de Cooley-Tukey",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose $n = 2^m$, $m\geqslant1$.</p><ol start="4">
<li>Montrer que $w^{n/2} = -1$ et que $w^2$ est une racine primitive $\frac n2$-ième de l'unité.</li>
<li>On pose $u = (f_0,f_2,\dots,f_{n-2})$, $v = (f_1,f_3,\dots,f_{n-1})$, et $\hat u = F(w^2)u$, $\hat v = F(w^2)v$. Montrer que pour $0\leqslant i\lt\frac n2$ : $$\hat f_i = \hat u_i+w^i\hat v_i,\qquad\hat f_{i+n/2} = \hat u_i-w^i\hat v_i.$$</li>
<li>On note $C(m)$ le nombre d'opérations de l'algorithme récursif obtenu. Montrer que $C(m)\leqslant2C(m-1)+2\cdot2^m$, et en déduire $C(m)\leqslant(2m+1)2^m = O(n\log n)$.</li>
<li>Refaire l'exemple de Q3 avec l'algorithme. Pour $n = 2^{20}$, comparer les ordres de grandeur $n^2$ et $n\log_2n$.</li></ol>`,
  decode: { donnees: [R`$\hat f_i = f(w^i)$, $f(X) = u(X^2)+Xv(X^2)$.`], but: R`Couper le vecteur en indices pairs et impairs, et réutiliser deux TFD de taille moitié.`, cles: {} },
  steps: [
    Q(4, "Racines de l'unité", R`<p>$w^{n/2} = e^{i\pi}$.</p>`, R`<p>$w^{n/2} = e^{2i\pi\cdot\frac n2/n} = e^{i\pi} = -1$. Et $w^2 = e^{2i\pi/(n/2)}$ est la racine primitive $\frac n2$-ième de l'unité standard.</p>`),
    Q(5, "Le papillon", R`<p>$f(X) = u(X^2)+Xv(X^2)$, et $(w^{i+n/2})^2 = w^{2i}$, $w^{i+n/2} = -w^i$.</p>`, R`<p>En séparant indices pairs et impairs : $f(X) = \sum_jf_{2j}X^{2j}+\sum_jf_{2j+1}X^{2j+1} = u(X^2)+X\,v(X^2)$. Donc</p>$$\hat f_i = f(w^i) = u\big((w^2)^i\big)+w^iv\big((w^2)^i\big) = \hat u_i+w^i\hat v_i.$$<p>Pour $i+\frac n2$ : $(w^{i+n/2})^2 = w^{2i}w^n = w^{2i}$ et $w^{i+n/2} = -w^i$, d'où</p><div class="sbox">$$\hat f_i = \hat u_i+w^i\hat v_i,\qquad\hat f_{i+n/2} = \hat u_i-w^i\hat v_i\qquad(0\leqslant i\lt\tfrac n2).$$</div>${figPap}`),
    Q(6, "Complexité", R`<p>Deux appels récursifs de taille $2^{m-1}$, puis $\frac n2$ produits $w^i\hat v_i$ et $n$ additions ou soustractions.</p>`, R`<p>Calcul de $\hat f$ : deux TFD de taille $2^{m-1}$ ($2C(m-1)$), puis $\frac n2$ multiplications $w^i\hat v_i$ (réutilisées pour $i$ et $i+\frac n2$) et $n$ additions/soustractions, soit au plus $2n = 2\cdot2^m$ opérations. Donc $C(m)\leqslant2C(m-1)+2\cdot2^m$, avec $C(0) = 0\leqslant1$ (TFD de taille $1$ : $\hat f_0 = f_0$). Par le rappel :</p><div class="sbox">$$C(m)\leqslant2^m(1+2m) = n(1+2\log_2n) = O(n\log n).$$</div>`, ["fft-rec"]),
    Q(7, "Exemple et ordres de grandeur", R`<p>$u = (1,3)$, $v = (2,4)$, $w^2 = -1$.</p>`, R`<p>Avec $w^2 = -1$ : $\hat u = (1+3,\ 1-3) = (4,-2)$, $\hat v = (2+4,\ 2-4) = (6,-2)$. Puis</p>$$\begin{aligned}\hat f_0 &= 4+6 = 10, & \hat f_1 &= -2+i(-2) = -2-2i,\\ \hat f_2 &= 4-6 = -2, & \hat f_3 &= -2-i(-2) = -2+2i.\end{aligned}$$<p>On retrouve Q3. Pour $n = 2^{20}\approx10^6$ : $n^2\approx10^{12}$ alors que $n\log_2n\approx2\cdot10^7$, un gain d'un facteur $50\,000$.</p>`)
  ],
  piege: R`La récurrence demande $n$ pair à chaque étape, d'où $n = 2^m$. Pour un $n$ quelconque, on complète par des zéros jusqu'à la puissance de $2$ suivante (ce qui change la TFD, mais pas le produit de polynômes calculé en Partie III).`,
  methode: R`Diviser pour régner : couper le problème en deux moitiés de même nature, et recombiner en temps linéaire ; la récurrence $C(m) = 2C(m-1)+O(2^m)$ donne $O(n\log n)$.`
},

/* ===================== Partie III ===================== */
{ id: "fft-3", ...P, part: "Partie III", time: "30 min",
  title: "Multiplier vite les polynômes",
  enonce: PRE + R`<p><b>Partie III.</b> Soient $P,Q\in\mathbb C[X]$ de degrés $\lt d$.</p><ol start="8">
<li>Soit $n = 2^m\geqslant2d$. On complète les coefficients de $P$ et $Q$ par des zéros en vecteurs de $\mathbb C^n$. Montrer que la convolution cyclique de ces vecteurs donne exactement les coefficients de $PQ$, puis que $PQ$ se calcule en $O(d\log d)$ opérations.</li>
<li>Calculer $(1+2X)(3+X)$ par cette méthode avec $n = 4$, $w = i$.</li>
<li>Que se passe-t-il si l'on prend $n = d$ au lieu de $n\geqslant2d$ ? Donner un exemple. Expliquer comment ces idées permettent de multiplier rapidement deux grands entiers.</li></ol>`,
  decode: { donnees: [R`$\widehat{f*g} = \hat f\cdot\hat g$, $F(w)^{-1} = \frac1nF(\bar w)$.`], but: R`Produit de polynômes = TFD, produit terme à terme, TFD inverse.`, cles: {} },
  steps: [
    Q(8, "Produit de polynômes en O(d log d)", R`<p>$\deg PQ\leqslant2d-2\lt n$ : la réduction modulo $X^n-1$ ne change rien.</p>`, R`<p>Par Q2, la convolution cyclique des vecteurs correspond à $P(X)Q(X)$ réduit modulo $X^n-1$. Or $\deg(PQ)\leqslant2d-2\lt n$ : le reste est $PQ$ lui-même. Algorithme :</p><ol><li>calculer $\hat P$ et $\hat Q$ par FFT : $2C(m)$ ;</li><li>former $\hat P\cdot\hat Q$ : $n$ multiplications ;</li><li>appliquer $\frac1nF(\bar w)$ par FFT (avec $\bar w$ au lieu de $w$) : $C(m)+n$.</li></ol><p>On peut prendre $n\leqslant4d$, donc le coût est $3C(m)+2n = O(n\log n) = O(d\log d)$, contre $O(d^2)$ pour le produit naïf.</p>`),
    Q(9, "Un exemple", R`<p>$\hat P = (3,1+2i,-1,1-2i)$, $\hat Q = (4,3+i,2,3-i)$.</p>`, R`<p>$P = (1,2,0,0)$ : $\hat P_k = 1+2i^k = (3,\ 1+2i,\ -1,\ 1-2i)$. $Q = (3,1,0,0)$ : $\hat Q = (4,\ 3+i,\ 2,\ 3-i)$. Produit terme à terme :</p>$$\hat U = \big(12,\ (1+2i)(3+i),\ -2,\ (1-2i)(3-i)\big) = (12,\ 1+7i,\ -2,\ 1-7i).$$<p>Inversion : $U_j = \frac14\sum_k\hat U_k(-i)^{jk}$ :</p>$$U_0 = \tfrac{12+1+7i-2+1-7i}4 = 3,\quad U_1 = \tfrac{12+(1+7i)(-i)+2+(1-7i)i}4 = \tfrac{12+7-i+2+7+i}4 = 7,$$$$U_2 = \tfrac{12-(1+7i)-2-(1-7i)}4 = 2,\quad U_3 = \tfrac{12+(1+7i)i+2+(1-7i)(-i)}4 = 0.$$<div class="sbox">$$(1+2X)(3+X) = 3+7X+2X^2.\ ✓$$</div>`),
    Q(10, "Repliement et entiers", R`<p>Avec $n = d$, les termes de degré $\geqslant n$ se replient.</p>`, R`<p>Avec $n = d = 2$ : $P = (1,2)$, $Q = (3,1)$, $w = -1$. On obtient $PQ\bmod(X^2-1) = 3+7X+2X^2-2(X^2-1) = 5+7X$ : le coefficient de $X^2$ s'est ajouté à la constante. Le produit est faux : c'est le <b>repliement</b>.</p><p><b>Entiers.</b> Un entier $N = \sum_ja_j10^j$ est la valeur en $X = 10$ du polynôme $\sum a_jX^j$. Pour multiplier deux entiers de $d$ chiffres, on multiplie les polynômes par FFT en $O(d\log d)$, puis on évalue en $10$ en propageant les retenues (en $O(d)$). C'est le principe de l'algorithme de Schönhage-Strassen (qui travaille dans un anneau $\mathbb Z/(2^k+1)\mathbb Z$ pour éviter les erreurs d'arrondi des complexes).</p>`)
  ],
  piege: R`Prendre $n$ trop petit : la TFD calcule le produit modulo $X^n-1$, pas le produit. Il faut $n>\deg(PQ)$.`,
  methode: R`Multiplication rapide : évaluer (FFT), multiplier les valeurs, interpoler (FFT inverse). Le choix des racines de l'unité comme points d'évaluation est ce qui rend évaluation et interpolation rapides.`
}
]);
})();

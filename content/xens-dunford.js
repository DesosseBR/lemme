/* Commando X-ENS · Aller plus loin · Sujet « Décomposition de Dunford effective ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 5, plus: "dun",
  sujet: "Calculer la décomposition de Dunford sans les valeurs propres",
  sujetDesc: "La partie diagonalisable D de A = D + N annule le polynôme P = χ_A / (χ_A ∧ χ_A′), calculable par l'algorithme d'Euclide. On calcule D comme « racine » de P par une méthode de Newton matricielle A_{k+1} = A_k − P(A_k)P′(A_k)⁻¹, qui s'arrête en un nombre fini d'étapes. Applications : un exemple complet, la version polynomiale de Chevalley, l'exponentielle et le théorème spectral." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "dun-dun": { t: "Décomposition de Dunford", b: R`<p>Si $\chi_A$ est scindé, il existe un unique couple $(D,N)$ avec $A = D+N$, $D$ diagonalisable, $N$ nilpotente, $DN = ND$. De plus $D,N\in\mathbb K[A]$. Une matrice à la fois diagonalisable et nilpotente est nulle ; deux matrices diagonalisables qui commutent sont codiagonalisables ; une somme de nilpotentes qui commutent est nilpotente.</p>` },
  "dun-diag": { t: "Polynôme annulateur scindé simple", b: R`<p>Une matrice est diagonalisable si et seulement si elle annule un polynôme scindé à racines simples. $P$ est à racines simples si et seulement si $P\wedge P' = 1$.</p>` },
  "dun-bez": { t: "Bézout dans 𝕂[X]", b: R`<p>Si $P\wedge Q = 1$, il existe $U,V\in\mathbb K[X]$ avec $UP+VQ = 1$, calculables par l'algorithme d'Euclide étendu.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $A\in\mathcal M_n(\mathbb C)$, de polynôme caractéristique $\chi_A = \prod_{i=1}^r(X-\lambda_i)^{n_i}$ avec $\lambda_1,\dots,\lambda_r$ distincts. On note $A = D+N$ sa décomposition de Dunford ($D$ diagonalisable, $N$ nilpotente, $DN = ND$, $D,N\in\mathbb C[A]$), $\mathbb C[A]$ l'algèbre des polynômes en $A$ (commutative), et $$P = \prod_{i=1}^r(X-\lambda_i),\qquad r_0 = \max_in_i.$$ L'objectif est de calculer $D$ <b>sans connaître les $\lambda_i$</b>.</p>`;

/* Figure : schéma de Newton (analogie réelle) */
const figNewton = (() => {
  const X = x => 40 + 95 * x, Y = y => 170 - 40 * y;
  const f = x => (x - 1) * (x - 1) * (x - 2.6) + 0.05 * 0;
  let d = ""; for (let k = 0; k <= 200; k++) { const x = 0.2 + 3.05 * k / 200; d += (k ? "L" : "M") + X(x).toFixed(1) + "," + Y(f(x)).toFixed(1); }
  let b = `<line x1="${X(0.1)}" y1="${Y(0)}" x2="${X(3.5)}" y2="${Y(0)}" class="ax"/><path d="${d}" class="vb" style="fill:none"/>`;
  const x0 = 3.2, fx = f(x0), fp = 2 * (x0 - 1) * (x0 - 2.6) + (x0 - 1) ** 2, x1 = x0 - fx / fp;
  b += `<line x1="${X(x0)}" y1="${Y(fx)}" x2="${X(x1)}" y2="${Y(0)}" class="vr" style="stroke-width:1.6"/><line x1="${X(x0)}" y1="${Y(0)}" x2="${X(x0)}" y2="${Y(fx)}" class="thin"/>`;
  b += `<circle cx="${X(x0)}" cy="${Y(0)}" r="3.5" class="pt"/><circle cx="${X(x1)}" cy="${Y(0)}" r="3.5" class="ptr"/><circle cx="${X(2.6)}" cy="${Y(0)}" r="3.5" class="ptb"/>`;
  b += S(X(x0), Y(0) + 18, "x₀", "middle", "it") + S(X(x1), Y(0) + 18, "x₁", "middle", "it") + S(X(2.6) - 4, Y(0) - 8, "λ", "end", "it") + S(X(1), Y(0) - 12, "racine double", "middle", "sm");
  return FIG(380, 250, b, R`La méthode de Newton $x_{k+1} = x_k-\frac{P(x_k)}{P'(x_k)}$ remplace la courbe par sa tangente. Elle converge vite vers une racine <b>simple</b> ; c'est pourquoi on remplace $\chi_A$ (racines multiples) par $P = \frac{\chi_A}{\chi_A\wedge\chi_A'}$, à racines simples. Pour les matrices, la convergence devient même <b>finie</b>.`, "Méthode de Newton");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "dun-1", ...P, part: "Partie I", time: "35 min",
  title: "Le polynôme P et trois lemmes",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $P = \dfrac{\chi_A}{\chi_A\wedge\chi_A'}$ (calculable par l'algorithme d'Euclide, sans connaître les $\lambda_i$), que $P\wedge P' = 1$, et que $P(D) = 0$.</li>
<li>Montrer que $P(A)$ est nilpotente : $P(A)^{r_0} = 0$.</li>
<li>Soit $U\in GL_n(\mathbb C)\cap\mathbb C[A]$. Montrer que $U^{-1}\in\mathbb C[A]$. Soit de plus $M\in\mathbb C[A]$ nilpotente. Montrer que $U-M$ est inversible, d'inverse dans $\mathbb C[A]$.</li>
<li>Montrer que pour tout $Q\in\mathbb C[X]$, il existe $R_Q\in\mathbb C[X,Y]$ tel que $Q(X+Y) = Q(X)+YQ'(X)+Y^2R_Q(X,Y)$, puis que pour deux matrices $B,C$ qui commutent, $Q(B+C) = Q(B)+CQ'(B)+C^2R_Q(B,C)$.</li></ol>`,
  decode: { donnees: [R`$\chi_A = \prod(X-\lambda_i)^{n_i}$ ; Cayley-Hamilton $\chi_A(A) = 0$.`], but: R`Préparer les outils de la méthode de Newton : inverser dans $\mathbb C[A]$ et développer à l'ordre $2$.`, cles: {} },
  steps: [
    Q(1, "Le polynôme P", R`<p>$\chi_A' = \sum_in_i(X-\lambda_i)^{n_i-1}\prod_{j\neq i}(X-\lambda_j)^{n_j}$ : la multiplicité de $\lambda_i$ dans $\chi_A'$ est exactement $n_i-1$.</p>`, R`<p>$\lambda_i$ est racine de $\chi_A'$ de multiplicité exactement $n_i-1$ : en effet $\chi_A = (X-\lambda_i)^{n_i}g$ avec $g(\lambda_i)\neq0$, donc $\chi_A' = (X-\lambda_i)^{n_i-1}\big(n_ig+(X-\lambda_i)g'\big)$ et le second facteur vaut $n_ig(\lambda_i)\neq0$ en $\lambda_i$. Les racines de $\chi_A'$ hors des $\lambda_i$ ne divisent pas $\chi_A$. Donc</p>$$\chi_A\wedge\chi_A' = \prod_i(X-\lambda_i)^{n_i-1},\qquad\frac{\chi_A}{\chi_A\wedge\chi_A'} = \prod_i(X-\lambda_i) = P.$$<p>$P$ est scindé à racines simples, donc $P\wedge P' = 1$. $D$ est diagonalisable, de mêmes valeurs propres que $A$ (car $\chi_D = \chi_A$, $A$ et $D$ étant cotrigonalisables avec $N$ nilpotente), donc $D$ est semblable à une matrice diagonale à coefficients parmi les $\lambda_i$, et $P(D) = 0$.</p>`, ["dun-diag"]),
    Q(2, "P(A) est nilpotente", R`<p>$\chi_A$ divise $P^{r_0}$.</p>`, R`<p>$P^{r_0} = \prod(X-\lambda_i)^{r_0}$ et $r_0\geqslant n_i$ pour tout $i$, donc $\chi_A\mid P^{r_0}$. Par Cayley-Hamilton, $P(A)^{r_0} = P^{r_0}(A) = 0$.</p>`),
    Q(3, "Inverser dans 𝕂[A]", R`<p>Un polynôme annulateur de $U$ de valuation $m$ ; diviser par $U^{m+1}$. Puis $(U-M)^{-1} = \sum_kU^{-k-1}M^k$.</p>`, R`<p><b>$U^{-1}\in\mathbb C[U]$.</b> Soit $\chi_U = \sum_{i=m}^na_iX^i$ avec $a_m\neq0$. Comme $U$ est inversible et $U^m\sum_{i\geqslant m}a_iU^{i-m} = 0$, on a $\sum_{i\geqslant m}a_iU^{i-m} = 0$, d'où $a_mI_n = -U\sum_{i>m}a_iU^{i-m-1}$, et</p>$$U^{-1} = -\frac1{a_m}\sum_{i>m}a_iU^{i-m-1}\in\mathbb C[U]\subset\mathbb C[A].$$<p><b>$U-M$.</b> $U,M\in\mathbb C[A]$ commutent ; soit $M^{s} = 0$. Alors $(U^{-1}M)^s = U^{-s}M^s = 0$ et</p>$$\begin{aligned}(U-M)\sum_{k=0}^{s-1}U^{-k-1}M^k&= \sum_{k=0}^{s-1}U^{-k}M^k-\sum_{k=0}^{s-1}U^{-k-1}M^{k+1}\\&= I_n-U^{-s}M^s = I_n.\end{aligned}$$<div class="sbox"><p>$U-M$ est inversible, d'inverse $\sum_{k=0}^{s-1}U^{-k-1}M^k\in\mathbb C[A]$.</p></div>`),
    Q(4, "Taylor à l'ordre 2", R`<p>Pour $Q = X^p$ : binôme. Puis linéarité. Les matrices qui commutent se substituent comme des indéterminées.</p>`, R`<p>Pour $Q = X^p$, $p\geqslant2$, par le binôme :</p>$$(X+Y)^p = X^p+pYX^{p-1}+Y^2\sum_{k=2}^p\binom pkY^{k-2}X^{p-k},$$<p>et pour $p\leqslant1$, $R = 0$ convient. La propriété est stable par combinaison linéaire ($R_{Q_1+\lambda Q_2} = R_{Q_1}+\lambda R_{Q_2}$), donc vraie pour tout $Q$.</p><p>Si $BC = CB$, l'application $F(X,Y)\mapsto F(B,C)$ est un morphisme d'anneaux de $\mathbb C[X,Y]$ dans $\mathcal M_n(\mathbb C)$ (c'est la commutativité qui permet le binôme). L'identité polynomiale se transporte :</p><div class="sbox">$$Q(B+C) = Q(B)+C\,Q'(B)+C^2R_Q(B,C).$$</div>`)
  ],
  piege: R`Le binôme de Newton $(B+C)^p = \sum\binom pkB^kC^{p-k}$ est faux si $BC\neq CB$. Ici toutes les matrices manipulées sont dans $\mathbb C[A]$, qui est commutative : c'est ce qui rend tout le calcul légitime.`,
  methode: R`Travailler dans l'algèbre commutative $\mathbb C[A]$ : on y calcule comme avec des nombres (binôme, Taylor, inverses par séries finies quand un terme est nilpotent).`
},

/* ===================== Partie II ===================== */
{ id: "dun-2", ...P, part: "Partie II", time: "40 min",
  title: "La méthode de Newton matricielle",
  enonce: PRE + R`<p><b>Partie II.</b> On pose $A_0 = A$ et, tant que c'est possible, $A_{k+1} = A_k-P(A_k)\,P'(A_k)^{-1}$. On veut montrer par récurrence la propriété $(\mathcal H_k)$ : <i>$A_k\in\mathbb C[A]$, $P'(A_k)$ est inversible, et $P(A_k)\in P(A)^{2^k}\mathbb C[A]$.</i></p><ol start="5">
<li>Montrer $(\mathcal H_0)$. On pourra écrire $UP'+VP = 1$ (Bézout) et appliquer Q3 à $U(A)P'(A) = I_n-V(A)P(A)$.</li>
<li>On suppose $(\mathcal H_k)$ et on note $Y_k = -P(A_k)P'(A_k)^{-1}$. Montrer que $P(A_{k+1}) = Y_k^2R_P(A_k,Y_k)$, et en déduire que $P(A_{k+1})\in P(A)^{2^{k+1}}\mathbb C[A]$.</li>
<li>Montrer que $P'(A_{k+1})$ est inversible, et conclure que la suite est bien définie.</li>
<li>Montrer que la suite est stationnaire dès que $2^k\geqslant r_0$, que sa valeur finale $\Delta$ est diagonalisable, que $A-\Delta$ est nilpotente, et que $\Delta = D$.</li></ol>`,
  decode: { donnees: [R`$P\wedge P' = 1$, $P(A)^{r_0} = 0$, Taylor à l'ordre $2$.`], but: R`Montrer que l'« erreur » $P(A_k)$ est divisible par $P(A)^{2^k}$ : la convergence est quadratique, donc finie car $P(A)$ est nilpotente.`, cles: {} },
  steps: [
    Q(5, "Initialisation", R`<p>$V(A)P(A)$ est nilpotente car $P(A)$ l'est et tout commute.</p>`, R`<p>$P\wedge P' = 1$ (Q1) : il existe $U,V$ avec $UP'+VP = 1$, d'où $U(A)P'(A) = I_n-V(A)P(A)$. Or $(V(A)P(A))^{r_0} = V(A)^{r_0}P(A)^{r_0} = 0$ (Q2). Par Q3 avec $U = I_n$, $M = V(A)P(A)$ : $W = U(A)P'(A)$ est inversible, d'inverse dans $\mathbb C[A]$. Alors $(W^{-1}U(A))P'(A) = I_n$ : $P'(A)$ est inversible, d'inverse $W^{-1}U(A)\in\mathbb C[A]$. Enfin $P(A_0) = P(A) = P(A)^{2^0}$.</p>`, ["dun-bez"]),
    Q(6, "L'erreur est élevée au carré", R`<p>$P(A_k)+Y_kP'(A_k) = 0$ par définition de $Y_k$.</p>`, R`<p>$A_k$ et $Y_k$ sont dans $\mathbb C[A]$ (par $(\mathcal H_k)$ et Q5/Q3), donc commutent. Par Q4 :</p>$$P(A_{k+1}) = P(A_k+Y_k) = P(A_k)+Y_kP'(A_k)+Y_k^2R_P(A_k,Y_k).$$<p>Or $Y_kP'(A_k) = -P(A_k)P'(A_k)^{-1}P'(A_k) = -P(A_k)$ : les deux premiers termes s'annulent.</p>$$P(A_{k+1}) = Y_k^2R_P(A_k,Y_k) = P(A_k)^2\big(P'(A_k)^{-1}\big)^2R_P(A_k,Y_k).$$<p>Avec $P(A_k) = P(A)^{2^k}B_k$, $B_k\in\mathbb C[A]$ : $P(A_{k+1}) = P(A)^{2^{k+1}}B_{k+1}$ avec $B_{k+1}\in\mathbb C[A]$.</p><div class="sbox">$$P(A_{k+1})\in P(A)^{2^{k+1}}\,\mathbb C[A].$$</div>`),
    Q(7, "P′(A_{k+1}) est inversible", R`<p>Taylor à l'ordre $1$ pour $P'$ : $P'(A_{k+1}) = P'(A_k)+Y_kT(A_k,Y_k)$, et $Y_k$ est nilpotente.</p>`, R`<p>Par Q4 appliqué à $P'$ (on ne garde que l'ordre $1$) : $P'(A_k+Y_k) = P'(A_k)+Y_kT$ avec $T = P''(A_k)+Y_kR_{P'}(A_k,Y_k)\in\mathbb C[A]$. Or $Y_k = -P(A)^{2^k}B_kP'(A_k)^{-1}$ est nilpotente (produit commutatif contenant le facteur nilpotent $P(A)$), donc $Y_kT$ aussi. Par Q3, $P'(A_{k+1}) = P'(A_k)-(-Y_kT)$ est inversible d'inverse dans $\mathbb C[A]$, et $A_{k+1}\in\mathbb C[A]$. $(\mathcal H_{k+1})$ est établie.</p>`),
    Q(8, "Arrêt et limite", R`<p>$2^k\geqslant r_0$ donne $P(A_k) = 0$, donc $A_{k+1} = A_k$.</p>`, R`<p>Si $2^k\geqslant r_0$ : $P(A_k)\in P(A)^{2^k}\mathbb C[A] = \{0\}$ (Q2), donc $A_{k+1} = A_k$ : la suite est stationnaire, de valeur $\Delta$ avec $P(\Delta) = 0$. $P$ est scindé à racines simples : $\Delta$ est diagonalisable.</p><p>$A-\Delta = \sum_{j\lt k}(A_j-A_{j+1}) = -\sum_{j\lt k}Y_j$, somme de matrices nilpotentes de $\mathbb C[A]$ qui commutent : elle est nilpotente. $\Delta$ et $A-\Delta$ sont dans $\mathbb C[A]$, donc commutent. Par unicité de la décomposition de Dunford :</p><div class="sbox"><p>$\Delta = D$ : la méthode atteint $D$ en au plus $\lceil\log_2r_0\rceil$ étapes, sans calculer de valeur propre.</p></div>${figNewton}`, ["dun-dun", "dun-diag"])
  ],
  piege: R`Le schéma ne converge pas vers une valeur propre (comme le ferait Newton pour un nombre réel) mais vers une <b>matrice</b> : chaque bloc caractéristique de $A$ est « attiré » vers $\lambda_i$ fois l'identité de ce bloc. Il faut donc $P$ à racines simples, sinon $P'(A_k)$ n'est pas inversible.`,
  methode: R`Convergence quadratique de Newton : l'erreur est élevée au carré à chaque étape. Quand l'erreur vit dans un idéal nilpotent ($P(A)^{2^k}\mathbb C[A]$), elle devient exactement nulle en temps fini.`
},

/* ===================== Partie III ===================== */
{ id: "dun-3", ...P, part: "Partie III", time: "40 min",
  title: "Un exemple et trois applications",
  enonce: PRE + R`<p><b>Partie III.</b> On prend $A = \begin{pmatrix}1&1&0\\0&1&0\\-1&2&2\end{pmatrix}$.</p><ol start="9">
<li>Calculer $\chi_A$, $P$, puis $A_1$. Vérifier que $A_1 = D$ et donner $N$.</li>
<li>(<b>Chevalley</b>) Sans évaluer en $A$, on cherche directement $Q\in\mathbb C[X]$ avec $D = Q(A)$. Montrer que $Q = X^2-2X+2$ convient (on pourra vérifier $Q\equiv1\pmod{(X-1)^2}$ et $Q\equiv2\pmod{X-2}$), et le retrouver comme $R_1 = X-P(X)U(X)$ où $U\equiv P'^{-1}\pmod{\chi_A/P}$.</li>
<li>Calculer $e^{tA}$ pour $t\in\mathbb R$ sans diagonaliser, à l'aide de $D$ et $N$.</li>
<li>(<b>Théorème spectral par Dunford</b>) Soit $S\in\mathcal S_n(\mathbb R)$. Montrer que ses valeurs propres complexes sont réelles, puis que dans sa décomposition de Dunford, $N$ est symétrique et nilpotente, donc nulle. Conclure.</li></ol>`,
  decode: { donnees: [R`Partie II : $A_1 = A-P(A)P'(A)^{-1}$.`], but: R`Faire tourner l'algorithme, puis exploiter $D$ et $N$.`, cles: {} },
  steps: [
    Q(9, "L'exemple", R`<p>Développe $\det(XI-A)$ selon la troisième colonne. $P = (X-1)(X-2)$, $P' = 2X-3$.</p>`, R`<p>$\chi_A = \det\begin{pmatrix}X-1&-1&0\\0&X-1&0\\1&-2&X-2\end{pmatrix} = (X-2)(X-1)^2$ (troisième colonne). $\chi_A' = (X-1)(3X-5)$, $\chi_A\wedge\chi_A' = X-1$, $P = (X-1)(X-2) = X^2-3X+2$, $r_0 = 2$ : <b>une seule étape</b> suffit.</p>$$\begin{aligned}P(A)&= (A-I)(A-2I) = \begin{pmatrix}0&1&0\\0&0&0\\-1&2&1\end{pmatrix}\begin{pmatrix}-1&1&0\\0&-1&0\\-1&2&0\end{pmatrix}\\&= \begin{pmatrix}0&-1&0\\0&0&0\\0&-1&0\end{pmatrix}.\end{aligned}$$<p>$P'(A) = 2A-3I = \begin{pmatrix}-1&2&0\\0&-1&0\\-2&4&1\end{pmatrix}$. Comme $(2X-3)^2 = 4P+1$ et $P(A)^2 = 0$ : $P'(A)^{-1} = P'(A)(I-4P(A)) = \begin{pmatrix}-1&-2&0\\0&-1&0\\-2&0&1\end{pmatrix}$. Puis</p>$$P(A)P'(A)^{-1} = \begin{pmatrix}0&1&0\\0&0&0\\0&1&0\end{pmatrix},$$$$A_1 = A-P(A)P'(A)^{-1} = \begin{pmatrix}1&0&0\\0&1&0\\-1&1&2\end{pmatrix}.$$<p>On vérifie $P(A_1) = 0$. Donc :</p><div class="sbox">$$D = \begin{pmatrix}1&0&0\\0&1&0\\-1&1&2\end{pmatrix},\qquad N = A-D = \begin{pmatrix}0&1&0\\0&0&0\\0&1&0\end{pmatrix},\quad N^2 = 0.$$</div>`),
    Q(10, "La version polynomiale", R`<p>$\chi_A/P = X-1$ ; $P'\equiv-1\pmod{X-1}$, donc $U = -1$.</p>`, R`<p>$Q = X^2-2X+2 = (X-1)^2+1$ : $Q\equiv1\pmod{(X-1)^2}$, et $Q(2) = 2$. Sur le sous-espace caractéristique $\ker(A-I)^2$, $Q(A)$ vaut $I$ ; sur $\ker(A-2I)$, il vaut $2I$ : c'est exactement $D$. Calcul : $A^2 = \begin{pmatrix}1&2&0\\0&1&0\\-3&5&4\end{pmatrix}$ et</p>$$\begin{aligned}A^2-2A+2I&= \begin{pmatrix}1-2+2&2-2&0\\0&1&0\\-3+2&5-4&4-4+2\end{pmatrix}\\&= \begin{pmatrix}1&0&0\\0&1&0\\-1&1&2\end{pmatrix} = D.\ ✓\end{aligned}$$<p>Newton formel : $\chi_A/P = X-1$ et $P'(1) = -1$, donc $U = -1$ vérifie $UP'\equiv1\pmod{X-1}$. Alors $R_1 = X-P(X)U(X) = X+X^2-3X+2 = X^2-2X+2 = Q$.</p>`),
    Q(11, "L'exponentielle", R`<p>$e^{tA} = e^{tD}e^{tN} = e^{tD}(I+tN)$. Et $D = \Pi_1+2\Pi_2$ avec $\Pi_2 = D-I$, $\Pi_1 = 2I-D$.</p>`, R`<p>$D$ et $N$ commutent, donc $e^{tA} = e^{tD}e^{tN}$, et $N^2 = 0$ donne $e^{tN} = I+tN$. Comme $(D-I)(D-2I) = 0$, les projecteurs spectraux sont $\Pi_1 = 2I-D$ et $\Pi_2 = D-I$ ($\Pi_1+\Pi_2 = I$, $D = \Pi_1+2\Pi_2$), et $e^{tD} = e^t\Pi_1+e^{2t}\Pi_2$. Avec $\Pi_2 = \begin{pmatrix}0&0&0\\0&0&0\\-1&1&1\end{pmatrix}$ et $\Pi_1 = \begin{pmatrix}1&0&0\\0&1&0\\1&-1&0\end{pmatrix}$ :</p>$$e^{tD} = \begin{pmatrix}e^t&0&0\\0&e^t&0\\e^t-e^{2t}&e^{2t}-e^t&e^{2t}\end{pmatrix},\qquad e^{tA} = e^{tD}\begin{pmatrix}1&t&0\\0&1&0\\0&t&1\end{pmatrix}.$$<div class="sbox">$$e^{tA} = \begin{pmatrix}e^t&te^t&0\\0&e^t&0\\e^t-e^{2t}&e^{2t}-e^t+te^t&e^{2t}\end{pmatrix}.$$</div>`),
    Q(12, "Le théorème spectral", R`<p>$\lambda\bar U^tU = \overline{(SU)}^tU$… Pour $N$ : $\operatorname{Tr}(N^2) = \sum_{i,j}N_{i,j}^2$ si $N$ est symétrique.</p>`, R`<p><b>Valeurs propres réelles.</b> Si $SU = \lambda U$, $U\in\mathbb C^n\setminus\{0\}$ : $\lambda\,{}^t\bar UU = {}^t\bar USU = {}^t(\overline{SU})U = \bar\lambda\,{}^t\bar UU$ ($S$ réelle symétrique), et $\,{}^t\bar UU = \sum|u_i|^2>0$, donc $\lambda = \bar\lambda$. $\chi_S$ est scindé sur $\mathbb R$.</p><p><b>$N = 0$.</b> Par Dunford sur $\mathbb R$, $S = D+N$ avec $D = Q(S)$, $N = S-Q(S)$, $Q\in\mathbb R[X]$. Comme $\,{}^t(S^k) = S^k$, $N$ est symétrique. $N$ est nilpotente, $N^2$ aussi, donc $\operatorname{Tr}(N^2) = 0$. Mais $\operatorname{Tr}(N^2) = \operatorname{Tr}({}^tNN) = \sum_{i,j}N_{i,j}^2$. Donc $N = 0$.</p><div class="sbox"><p>$S = D$ est diagonalisable, à valeurs propres réelles.</p></div>`)
  ],
  piege: R`Dans l'exemple, $A$ a une seule valeur propre double mais $D\neq I$ : $D$ n'est pas la partie diagonale de $A$ ! La décomposition « diagonale + reste » d'une matrice ne donne pas Dunford en général, car le reste ne commute pas avec la diagonale.`,
  methode: R`Pour calculer avec une matrice non diagonalisable (puissances, exponentielle) : $A = D+N$ avec $DN = ND$, $D$ s'écrit avec ses projecteurs spectraux (polynômes en $D$), et $N$ ne fait apparaître qu'un nombre fini de termes.`
}
]);
})();

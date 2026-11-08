/* Commando X-ENS · Aller plus loin · Sujet « Décomposition polaire ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 4, plus: "pol",
  sujet: "La décomposition polaire",
  sujetDesc: "On construit la racine carrée d'une matrice symétrique positive et on prouve son unicité par interpolation de Lagrange, puis on écrit toute matrice réelle comme produit d'une matrice orthogonale et d'une matrice symétrique positive (A = OS), avec unicité si A est inversible. Applications : norme subordonnée euclidienne, et Oₙ(ℝ) est un sous-groupe compact maximal de GLₙ(ℝ)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "pol-spec": { t: "Théorème spectral", b: R`<p>Si $S\in\mathcal S_n(\mathbb R)$, il existe $P\in O_n(\mathbb R)$ et $D$ diagonale réelle avec $S = PDP^{-1} = PD\,{}^tP$. $S\in\mathcal S_n^+(\mathbb R)$ ($\langle Sx,x\rangle\geqslant0$) si et seulement si ses valeurs propres sont $\geqslant0$ ; $S\in\mathcal S_n^{++}(\mathbb R)$ si et seulement si elles sont $>0$.</p>` },
  "pol-lag": { t: "Interpolation de Lagrange", b: R`<p>Pour des réels $x_1,\dots,x_m$ distincts et des valeurs $y_1,\dots,y_m$, il existe un polynôme $L$ avec $L(x_i) = y_i$. Si $M = PDP^{-1}$ avec $D = \operatorname{diag}(d_i)$, alors $L(M) = P\operatorname{diag}(L(d_i))P^{-1}$.</p>` },
  "pol-comp": { t: "Compacité de Oₙ(ℝ)", b: R`<p>$O_n(\mathbb R) = \{M : {}^tMM = I_n\}$ est fermé (image réciproque de $\{I_n\}$ par une application continue) et borné (colonnes unitaires), donc compact. Toute suite de $O_n(\mathbb R)$ a une suite extraite convergente dans $O_n(\mathbb R)$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\mathbb R^n$ est muni de son produit scalaire canonique et de la norme $\|\cdot\|$ associée. $\mathcal S_n^+(\mathbb R)$ (resp. $\mathcal S_n^{++}(\mathbb R)$) désigne l'ensemble des matrices symétriques positives (resp. définies positives). Pour un nombre complexe $z\neq0$, l'écriture polaire est $z = e^{i\theta}\rho$ avec $|e^{i\theta}| = 1$ et $\rho>0$ ; on cherche l'analogue matriciel $A = OS$, $O$ orthogonale et $S$ symétrique positive.</p>`;

/* Figure : image du cercle unité par S puis par O, pour A = [[3,0],[4,5]] */
const figEll = (() => {
  const s = 17, cx = 230, cy = 150, X = x => (cx + s * x).toFixed(1), Y = y => (cy - s * y).toFixed(1);
  const curve = M => { let d = ""; for (let k = 0; k <= 120; k++) { const t = 2 * Math.PI * k / 120, x = Math.cos(t), y = Math.sin(t); const u = M[0][0] * x + M[0][1] * y, v = M[1][0] * x + M[1][1] * y; d += (k ? "L" : "M") + X(u) + "," + Y(v); } return d; };
  const r5 = Math.sqrt(5), Sm = [[2 * r5, r5], [r5, 2 * r5]], A = [[3, 0], [4, 5]];
  let b = `<line x1="${X(-8.5)}" y1="${Y(0)}" x2="${X(8.5)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(-8.3)}" x2="${X(0)}" y2="${Y(8.3)}" class="ax"/>`;
  b += `<path d="${curve([[1, 0], [0, 1]])}" class="vk" style="fill:none;stroke-width:1.6"/>`;
  b += `<path d="${curve(Sm)}" class="vb" style="fill:none;stroke-dasharray:6 4;stroke-width:1.8"/>`;
  b += `<path d="${curve(A)}" class="vr" style="fill:none;stroke-width:2"/>`;
  b += S(X(4.6), Y(5.4), "S(𝒞)", "start", "sm b") + S(X(1.2), Y(7.6), "A(𝒞) = O(S(𝒞))", "start", "sm r") + S(X(1.05), Y(-1.15), "𝒞", "start", "it");
  return FIG(460, 300, b, R`Pour $A = \begin{pmatrix}3&0\\4&5\end{pmatrix}$ : le cercle unité $\mathcal C$ (noir), son image par $S = \sqrt5\begin{pmatrix}2&1\\1&2\end{pmatrix}$ (ellipse d'axes les bissectrices, demi-axes $3\sqrt5$ et $\sqrt5$), puis par la rotation $O$ d'angle $\arctan\frac12$ : on obtient $A(\mathcal C)$. $S$ étire, $O$ tourne.`, "Décomposition polaire géométrique");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "pol-1", ...P, part: "Partie I", time: "30 min",
  title: "Racine carrée d'une matrice symétrique positive",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que si $A\in GL_n(\mathbb R)$, alors $\,{}^tAA\in\mathcal S_n^{++}(\mathbb R)$, et que pour toute $A\in\mathcal M_n(\mathbb R)$, $\,{}^tAA\in\mathcal S_n^+(\mathbb R)$.</li>
<li>Soit $M\in\mathcal S_n^+(\mathbb R)$. Montrer qu'il existe $S\in\mathcal S_n^+(\mathbb R)$ telle que $S^2 = M$, et que si $M\in\mathcal S_n^{++}(\mathbb R)$ alors $S\in\mathcal S_n^{++}(\mathbb R)$.</li>
<li>Soient $S,T\in\mathcal S_n^+(\mathbb R)$ avec $S^2 = T^2 = M$. En construisant un polynôme $L$ tel que $L(\lambda^2) = \lambda$ pour toute valeur propre $\lambda$ de $S$ ou de $T$, montrer que $S = T$. On note $S = \sqrt M$.</li>
<li>Montrer que $\sqrt M$ est un polynôme en $M$, et calculer $\sqrt M$ pour $M = \begin{pmatrix}5&4\\4&5\end{pmatrix}$.</li></ol>`,
  decode: { donnees: [R`Théorème spectral.`], but: R`Prendre la racine des valeurs propres, puis montrer l'unicité par un polynôme d'interpolation.`, cles: {} },
  steps: [
    Q(1, "tAA est symétrique positive", R`<p>$\langle{}^tAAx,x\rangle = \|Ax\|^2$.</p>`, R`<p>$\,{}^t({}^tAA) = {}^tA\,{}^t({}^tA) = {}^tAA$ : elle est symétrique. Pour $x\in\mathbb R^n$ :</p>$$\langle{}^tAAx,x\rangle = {}^tx\,{}^tAAx = {}^t(Ax)(Ax) = \|Ax\|^2\geqslant0.$$<p>Donc $\,{}^tAA\in\mathcal S_n^+(\mathbb R)$. Si $A$ est inversible et $x\neq0$, $Ax\neq0$ et $\|Ax\|^2>0$ : $\,{}^tAA\in\mathcal S_n^{++}(\mathbb R)$.</p>`),
    Q(2, "Existence de la racine", R`<p>Diagonalise $M$ en base orthonormée et prends la racine des valeurs propres.</p>`, R`<p>Par le théorème spectral, $M = PD\,{}^tP$ avec $P\in O_n(\mathbb R)$ et $D = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$, $\lambda_i\geqslant0$. Posons $U = \operatorname{diag}(\sqrt{\lambda_1},\dots,\sqrt{\lambda_n})$ et $S = PU\,{}^tP$. Alors $S$ est symétrique, de valeurs propres $\sqrt{\lambda_i}\geqslant0$, donc $S\in\mathcal S_n^+(\mathbb R)$, et</p>$$S^2 = PU\,{}^tPPU\,{}^tP = PU^2\,{}^tP = PD\,{}^tP = M.$$<p>Si les $\lambda_i$ sont $>0$, les $\sqrt{\lambda_i}$ aussi : $S\in\mathcal S_n^{++}(\mathbb R)$.</p>`, ["pol-spec"]),
    Q(3, "Unicité par interpolation", R`<p>$L$ est bien défini car $a^2 = b^2$ avec $a,b\geqslant0$ implique $a = b$. Puis $L(S^2) = S$.</p>`, R`<p>Soient $\lambda_1,\dots,\lambda_n\geqslant0$ les valeurs propres de $S$ et $\mu_1,\dots,\mu_n\geqslant0$ celles de $T$. On veut $L(\lambda_i^2) = \lambda_i$ et $L(\mu_j^2) = \mu_j$. C'est cohérent : si deux des nombres $x^2$ coïncident, par exemple $\lambda_i^2 = \mu_j^2$, alors $\lambda_i = \mu_j$ (positifs). Lagrange donne un tel $L\in\mathbb R[X]$.</p><p>$S = PD_S\,{}^tP$ avec $D_S = \operatorname{diag}(\lambda_i)$, donc</p>$$L(S^2) = P\,L(D_S^2)\,{}^tP = P\operatorname{diag}(L(\lambda_i^2))\,{}^tP = P\operatorname{diag}(\lambda_i)\,{}^tP = S.$$<p>De même $L(T^2) = T$. Comme $S^2 = T^2 = M$ :</p><div class="sbox">$$S = L(M) = T.$$</div>`, ["pol-lag", "pol-spec"]),
    Q(4, "Un exemple", R`<p>Valeurs propres de $M$ : $9$ et $1$. Interpole $L(9) = 3$, $L(1) = 1$.</p>`, R`<p>Le calcul précédent montre que $\sqrt M = L(M)$, polynôme en $M$. Pour $M = \begin{pmatrix}5&4\\4&5\end{pmatrix}$ : $\chi_M = (X-5)^2-16 = (X-9)(X-1)$. Le polynôme $L$ avec $L(9) = 3$, $L(1) = 1$ est $L(X) = 1+\frac{3-1}{9-1}(X-1) = \frac{X+3}4$. Donc</p>$$\sqrt M = \frac14(M+3I_2) = \frac14\begin{pmatrix}8&4\\4&8\end{pmatrix} = \begin{pmatrix}2&1\\1&2\end{pmatrix}.$$<p>Vérification : $\begin{pmatrix}2&1\\1&2\end{pmatrix}^2 = \begin{pmatrix}5&4\\4&5\end{pmatrix}$ ✓, et ses valeurs propres $3$ et $1$ sont positives.</p>`, ["pol-lag"])
  ],
  piege: R`L'unicité n'a lieu que <b>dans $\mathcal S_n^+(\mathbb R)$</b> : $-\sqrt M$, ou $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ (de carré $I_2$), sont d'autres racines carrées, mais pas positives.`,
  methode: R`Pour montrer qu'une matrice définie spectralement est un polynôme en une autre : interpoler la fonction voulue sur les valeurs propres (Lagrange).`
},

/* ===================== Partie II ===================== */
{ id: "pol-2", ...P, part: "Partie II", time: "35 min",
  title: "La décomposition A = OS",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="5">
<li>Soit $A\in GL_n(\mathbb R)$. Montrer que si $A = OS$ avec $O\in O_n(\mathbb R)$ et $S\in\mathcal S_n^{++}(\mathbb R)$, alors $S = \sqrt{{}^tAA}$ et $O = AS^{-1}$. En déduire l'unicité.</li>
<li>Montrer l'existence : avec $S = \sqrt{{}^tAA}$ et $O = AS^{-1}$, vérifier que $O\in O_n(\mathbb R)$.</li>
<li>Calculer la décomposition polaire de $A = \begin{pmatrix}3&0\\4&5\end{pmatrix}$ et l'interpréter géométriquement.</li>
<li>Soit $A\in\mathcal M_n(\mathbb R)$ quelconque. Montrer que $A_k = A+\frac1kI_n$ est inversible pour $k$ assez grand, puis, par compacité de $O_n(\mathbb R)$, que $A = OS$ avec $O\in O_n(\mathbb R)$ et $S\in\mathcal S_n^+(\mathbb R)$. Montrer que $S$ est unique mais que $O$ ne l'est pas toujours.</li></ol>`,
  decode: { donnees: [R`Partie I : racine carrée unique dans $\mathcal S_n^+$.`], but: R`Si $A = OS$, alors $\,{}^tAA = S\,{}^tOOS = S^2$.`, cles: {} },
  steps: [
    Q(5, "Unicité dans le cas inversible", R`<p>Calcule $\,{}^tAA$.</p>`, R`<p>Si $A = OS$ : $\,{}^tA = {}^tS\,{}^tO = S\,{}^tO$, donc</p>$$\,{}^tAA = S\,{}^tOOS = S^2.$$<p>$S\in\mathcal S_n^{++}\subset\mathcal S_n^+$ est une racine carrée positive de $\,{}^tAA$ : par unicité (Q3), $S = \sqrt{{}^tAA}$. $S$ est inversible, et $O = AS^{-1}$ est alors déterminée. Deux décompositions coïncident donc.</p>`),
    Q(6, "Existence", R`<p>Calcule $\,{}^tOO$ avec $\,{}^t(S^{-1}) = S^{-1}$.</p>`, R`<p>$\,{}^tAA\in\mathcal S_n^{++}$ (Q1), donc $S = \sqrt{{}^tAA}\in\mathcal S_n^{++}$ (Q2) est inversible et symétrique, ainsi que $S^{-1}$. Avec $O = AS^{-1}$ :</p>$$\,{}^tOO = {}^t(S^{-1})\,{}^tA\,A\,S^{-1} = S^{-1}S^2S^{-1} = I_n.$$<div class="sbox"><p>Toute $A\in GL_n(\mathbb R)$ s'écrit de façon unique $A = OS$ avec $O\in O_n(\mathbb R)$ et $S\in\mathcal S_n^{++}(\mathbb R)$.</p></div>`),
    Q(7, "Un exemple", R`<p>$\,{}^tAA = \begin{pmatrix}25&20\\20&25\end{pmatrix}$, de valeurs propres $45$ et $5$.</p>`, R`<p>$$\,{}^tAA = \begin{pmatrix}3&4\\0&5\end{pmatrix}\begin{pmatrix}3&0\\4&5\end{pmatrix} = \begin{pmatrix}25&20\\20&25\end{pmatrix} = 5\begin{pmatrix}5&4\\4&5\end{pmatrix}.$$<p>Par Q4, $\sqrt{\begin{pmatrix}5&4\\4&5\end{pmatrix}} = \begin{pmatrix}2&1\\1&2\end{pmatrix}$, donc $S = \sqrt5\begin{pmatrix}2&1\\1&2\end{pmatrix}$ (racine positive de $5M$). Puis $\det\begin{pmatrix}2&1\\1&2\end{pmatrix} = 3$ et</p>$$S^{-1} = \frac1{3\sqrt5}\begin{pmatrix}2&-1\\-1&2\end{pmatrix},$$$$O = AS^{-1} = \frac1{3\sqrt5}\begin{pmatrix}6&-3\\8-5&-4+10\end{pmatrix} = \frac1{\sqrt5}\begin{pmatrix}2&-1\\1&2\end{pmatrix}.$$<p>$O$ est la rotation d'angle $\theta$ avec $\cos\theta = \frac2{\sqrt5}$, $\sin\theta = \frac1{\sqrt5}$, soit $\theta = \arctan\frac12$.</p><div class="sbox">$$\begin{pmatrix}3&0\\4&5\end{pmatrix} = \underbrace{\frac1{\sqrt5}\begin{pmatrix}2&-1\\1&2\end{pmatrix}}_{O}\ \underbrace{\sqrt5\begin{pmatrix}2&1\\1&2\end{pmatrix}}_{S}.$$</div><p>Géométriquement, $S$ dilate selon deux directions orthogonales (les bissectrices, facteurs $3\sqrt5$ et $\sqrt5$), puis $O$ tourne. Le cercle unité devient une ellipse.</p>${figEll}`),
    Q(8, "Le cas général", R`<p>$A+\frac1kI_n$ est inversible dès que $-\frac1k$ n'est pas valeur propre. Extrais une suite convergente de $O_k$.</p>`, R`<p>$A$ a au plus $n$ valeurs propres réelles ; pour $k$ assez grand, $-\frac1k$ n'en est aucune (elles sont en nombre fini et $-\frac1k\to0$ ; si $0$ est valeur propre, $-\frac1k\neq0$ convient aussi). Donc $A_k\in GL_n(\mathbb R)$ et $A_k = O_kS_k$ (Q6).</p><p>$O_n(\mathbb R)$ est compact : une extraite $O_{\psi(k)}$ converge vers $O\in O_n(\mathbb R)$. Alors $S_{\psi(k)} = {}^tO_{\psi(k)}A_{\psi(k)}\to{}^tOA =: S$ (continuité du produit). Chaque $S_{\psi(k)}$ est symétrique et vérifie $\langle S_{\psi(k)}x,x\rangle\geqslant0$ ; ces conditions passent à la limite : $S\in\mathcal S_n^+(\mathbb R)$. Et $A = \lim A_{\psi(k)} = OS$.</p><p><b>Unicité de $S$.</b> Si $A = OS$, alors $\,{}^tAA = S^2$, et $S = \sqrt{{}^tAA}$ par Q3 : $S$ est unique. <b>Non-unicité de $O$.</b> Pour $A = 0$ : $S = 0$ et toute $O\in O_n(\mathbb R)$ convient.</p>`, ["pol-comp"])
  ],
  piege: R`Écrire $O = AS^{-1}$ quand $A$ n'est pas inversible : $S = \sqrt{{}^tAA}$ n'est alors pas inversible. C'est pourquoi le cas général passe par l'approximation et la compacité.`,
  methode: R`Étendre un résultat de $GL_n$ à $\mathcal M_n$ : approcher par des matrices inversibles ($A+\frac1kI_n$), puis extraire grâce à la compacité de $O_n(\mathbb R)$.`
},

/* ===================== Partie III ===================== */
{ id: "pol-3", ...P, part: "Partie III", time: "30 min",
  title: "Deux applications",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="9">
<li>On note $|||A||| = \sup_{\|x\| = 1}\|Ax\|$. Montrer que $|||A||| = \sqrt{\rho({}^tAA)}$, où $\rho$ désigne la plus grande valeur propre. Calculer $|||A|||$ pour la matrice de Q7.</li>
<li>Soit $H$ un sous-groupe compact de $GL_n(\mathbb R)$ contenant $O_n(\mathbb R)$, et $A\in H$, $A = OS$. Montrer que $S\in H$, puis que toutes les valeurs propres de $S$ valent $1$ (on étudiera $S^ke$ pour un vecteur propre $e$). Conclure que $H = O_n(\mathbb R)$.</li>
<li>En déduire que $SO_n(\mathbb R)$ est un sous-groupe compact maximal de $SL_n(\mathbb R)$.</li></ol>`,
  decode: { donnees: [R`$A = OS$, $O$ conserve la norme.`], but: R`Ramener les questions sur $A$ à des questions sur la matrice symétrique $S$.`, cles: {} },
  steps: [
    Q(9, "Norme subordonnée euclidienne", R`<p>$\|Ax\| = \|OSx\| = \|Sx\|$, et en base orthonormée propre de $S$, $\|Sx\|^2 = \sum\lambda_i^2x_i^2$.</p>`, R`<p>$O$ conserve la norme : $\|Ax\| = \|Sx\|$. Soit $(e_i)$ une base orthonormée propre de $S$, de valeurs propres $0\leqslant\lambda_1\leqslant\dots\leqslant\lambda_n$. Pour $x = \sum x_ie_i$ de norme $1$ :</p>$$\|Sx\|^2 = \sum\lambda_i^2x_i^2\leqslant\lambda_n^2\sum x_i^2 = \lambda_n^2,$$<p>avec égalité pour $x = e_n$. Donc $|||A||| = \lambda_n$. Or $S^2 = {}^tAA$ a pour valeurs propres les $\lambda_i^2$ :</p><div class="sbox">$$|||A||| = \lambda_n = \sqrt{\rho({}^tAA)}.$$</div><p>Pour $A = \begin{pmatrix}3&0\\4&5\end{pmatrix}$ : $\rho({}^tAA) = 45$ et $|||A||| = 3\sqrt5\approx6{,}7$ (le demi-grand axe de l'ellipse de la figure).</p>`, ["pol-spec"]),
    Q(10, "Oₙ(ℝ) est compact maximal", R`<p>$S = {}^tOA\in H$. Si $Se = \lambda e$ avec $\lambda\neq1$, alors $S^ke = \lambda^ke$ tend vers $0$ ou vers l'infini.</p>`, R`<p>$O\in O_n(\mathbb R)\subset H$, donc $\,{}^tO = O^{-1}\in H$, et $S = {}^tOA\in H$ (sous-groupe). Puis $S^k\in H$ pour tout $k\in\mathbb N$.</p><p>Soit $e$ un vecteur propre unitaire de $S$, $Se = \lambda e$, $\lambda>0$ (car $S\in\mathcal S_n^{++}$, $A$ étant inversible). $H$ est compact : une extraite $S^{\psi(k)}$ converge vers $T\in H\subset GL_n(\mathbb R)$, donc $S^{\psi(k)}e = \lambda^{\psi(k)}e\to Te$.</p><ul><li>si $\lambda\lt1$, $\lambda^{\psi(k)}e\to0$, donc $Te = 0$ : impossible, $T$ est inversible ;</li><li>si $\lambda>1$, $\|\lambda^{\psi(k)}e\|\to+\infty$ : impossible, la suite converge.</li></ul><p>Donc toutes les valeurs propres de $S$ valent $1$ ; $S$ est diagonalisable, donc $S = I_n$ et $A = O\in O_n(\mathbb R)$.</p><div class="sbox"><p>$H = O_n(\mathbb R)$ : aucun sous-groupe compact de $GL_n(\mathbb R)$ ne contient strictement $O_n(\mathbb R)$.</p></div>`, ["pol-comp"]),
    Q(11, "Le cas de SLₙ", R`<p>Si $A\in SL_n$, $\det S>0$ et $\det O = \pm1$ ; $\det A = 1$ force $\det O = 1$.</p>`, R`<p>$SO_n(\mathbb R)$ est compact (fermé dans $O_n(\mathbb R)$). Soit $H$ compact avec $SO_n(\mathbb R)\subset H\subset SL_n(\mathbb R)$, et $A = OS\in H$. $\det S>0$ (valeurs propres $>0$), $\det O = \pm1$ et $\det O\det S = 1$, donc $\det O = 1$ : $O\in SO_n\subset H$. Le raisonnement de Q10 s'applique mot pour mot : $S = I_n$, et $A = O\in SO_n(\mathbb R)$.</p><div class="sbox"><p>$SO_n(\mathbb R)$ est un sous-groupe compact maximal de $SL_n(\mathbb R)$.</p></div>`)
  ],
  piege: R`En Q10, ne pas oublier que la limite $T$ est dans $H\subset GL_n(\mathbb R)$ : c'est l'inversibilité de $T$ qui exclut $\lambda\lt1$. Dans $\mathcal M_n(\mathbb R)$, la suite $S^k$ pourrait très bien tendre vers $0$.`,
  methode: R`Décomposition polaire comme outil : elle sépare la partie « rotation » (compacte, $O$) de la partie « étirement » ($S$, diagonalisable en base orthonormée), sur laquelle on raisonne valeur propre par valeur propre.`
}
]);
})();

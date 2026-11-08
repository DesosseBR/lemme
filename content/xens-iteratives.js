/* Commando X-ENS · Aller plus loin · Sujet « Méthodes itératives pour les systèmes linéaires ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 4, plus: "iter",
  sujet: "Méthodes itératives pour les systèmes linéaires",
  sujetDesc: "Pour résoudre Ax = b, on écrit A = M − N et on itère x_{k+1} = M⁻¹(Nx_k + b). La méthode converge pour tout point de départ si et seulement si ρ(M⁻¹N) < 1 ; la clé est le lemme de Householder (une norme subordonnée presque égale au rayon spectral). Comparaison de Jacobi, Gauss-Seidel et de la relaxation sur le laplacien discret." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "it-trig": { t: "Trigonalisation", b: R`<p>Toute $A\in\mathcal M_n(\mathbb C)$ est trigonalisable : $A = PTP^{-1}$, $T$ triangulaire supérieure, et les $T_{i,i}$ sont les valeurs propres de $A$. Donc $\rho(A) = \max_i|T_{i,i}|$.</p>` },
  "it-sub": { t: "Norme subordonnée", b: R`<p>Pour une norme $\|\cdot\|$ sur $\mathbb C^n$, $|||B||| = \sup_{\|x\|\leqslant1}\|Bx\|$. Elle vérifie $\|Bx\|\leqslant|||B|||\,\|x\|$ et $|||BC|||\leqslant|||B|||\,|||C|||$, donc $|||B^k|||\leqslant|||B|||^k$. Pour toute valeur propre $\lambda$ de $B$, $|\lambda|\leqslant|||B|||$, donc $\rho(B)\leqslant|||B|||$.</p>` },
  "it-det": { t: "Déterminant et valeurs propres", b: R`<p>$\det B = \prod\lambda_i$ (valeurs propres complexes avec multiplicité), donc $|\det B|\leqslant\rho(B)^n$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $A\in GL_n(\mathbb R)$, $b\in\mathbb R^n$, et $x^* = A^{-1}b$. On écrit $A = M-N$ avec $M\in GL_n(\mathbb R)$ « facile à inverser », et on définit, pour $x_0\in\mathbb R^n$, $x_{k+1} = M^{-1}(Nx_k+b)$. On note $\rho(B)$ le rayon spectral (plus grand module des valeurs propres complexes). On écrit aussi $A = L+D+U$ (parties strictement inférieure, diagonale, strictement supérieure).</p>`;

/* Laplacien discret n = 10 : erreurs des trois méthodes */
const errs = (() => { const n = 10, xs = Array(n).fill(1), b = xs.map((_, i) => 2 - (i > 0 ? 1 : 0) - (i < n - 1 ? 1 : 0));
  const rj = Math.cos(Math.PI / (n + 1)), w0 = 2 / (1 + Math.sqrt(1 - rj * rj));
  const run = mode => { let x = Array(n).fill(0); const out = []; for (let k = 0; k <= 60; k++) { out.push(Math.log10(Math.max(...x.map((v, i) => Math.abs(v - xs[i]))))); const old = x.slice();
    for (let i = 0; i < n; i++) { const src = mode === "J" ? old : x; const s = b[i] + (i > 0 ? src[i - 1] : 0) + (i < n - 1 ? (mode === "J" ? old : old)[i + 1] : 0); const gs = s / 2; x[i] = mode === "SOR" ? (1 - w0) * old[i] + w0 * gs : gs; } } return out; };
  return { J: run("J"), G: run("G"), W: run("SOR"), w0 }; })();
const figErr = GRAPH({ w: 460, h: 250, x: [0, 60], y: [-8, 0.5], xt: [10, 20, 30, 40, 50, 60], yt: [-8, -6, -4, -2], ytl: ["10⁻⁸", "10⁻⁶", "10⁻⁴", "10⁻²"], xl: "k", curves: [],
  extra: (X, Y) => { let s = ""; [["J", "b"], ["G", "g"], ["W", "r"]].forEach(([m, c]) => { s += `<path class="v${c}" style="fill:none;stroke-width:2" d="${errs[m].filter(v => v > -8).map((v, k) => (k ? "L" : "M") + X(k).toFixed(1) + " " + Y(v).toFixed(1)).join("")}"/>`; });
    return s + S(X(48), Y(-0.9), "Jacobi", "middle", "sm b") + S(X(48), Y(-2.6), "Gauss-Seidel", "middle", "sm g") + S(X(36), Y(-7.2), "relaxation optimale", "middle", "sm r"); } },
  R`Erreur $\|x_k-x^*\|_\infty$ (échelle logarithmique) pour le laplacien discret $A = \mathrm{tridiag}(-1,2,-1)$ de taille $10$, $x_0 = 0$. Les pentes valent $\log_{10}\rho$ : $\rho_J = \cos\frac\pi{11}\approx0{,}959$, $\rho_{GS} = \rho_J^2\approx0{,}921$, et $\rho_{\omega_0} = \omega_0-1\approx0{,}560$ pour $\omega_0\approx1{,}560$.`, "Convergence des trois méthodes");

const vro = x => -Math.log(2 / (1 + Math.sqrt(1 - Math.exp(-2 * x))) - 1);
const figVit = GRAPH({ w: 460, h: 240, x: [0, 2], y: [0, 4.5], xt: [0.5, 1, 1.5, 2], xtl: ["0,5", "1", "1,5", "2"], yt: [1, 2, 3, 4], xl: "x",
  curves: [{ f: x => x, c: "b", lab: [1.6, 1.25, "Jacobi"] }, { f: x => 2 * x, c: "g", lab: [1.45, 3.3, "Gauss-Seidel"] }, { f: x => x > 0.001 && vro(x) < 4.5 ? vro(x) : NaN, c: "r", lab: [0.25, 3.3, "relaxation optimale"] }] },
  R`Vitesses de convergence $v = -\ln\rho$ pour une matrice symétrique définie positive tridiagonale, en fonction de la vitesse $x$ de Jacobi : $v_{GS} = 2x$ et $v_{\omega_0} = -\ln(\omega_0-1)\sim2\sqrt2\sqrt x$ quand $x\to0$. Le gain de la relaxation optimale est énorme quand Jacobi est lent ($x$ petit, cas des grands systèmes).`, "Vitesses comparées");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "iter-1", ...P, part: "Partie I", time: "30 min",
  title: "Le lemme de Householder",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que la norme subordonnée à $\|\cdot\|_\infty$ sur $\mathbb C^n$ est $|||B|||_\infty = \max_i\sum_j|B_{i,j}|$.</li>
<li>Soit $T$ triangulaire supérieure et $D_\delta = \mathrm{diag}(1,\delta,\dots,\delta^{n-1})$, $\delta>0$. Calculer $D_\delta^{-1}TD_\delta$.</li>
<li>(<b>Householder</b>) Soient $B\in\mathcal M_n(\mathbb C)$ et $\varepsilon>0$. Montrer qu'il existe une norme sur $\mathbb C^n$ dont la norme subordonnée vérifie $|||B|||\lt\rho(B)+\varepsilon$.</li>
<li>En déduire : $B^k\to0\iff\rho(B)\lt1$, puis $|||B^k|||^{1/k}\to\rho(B)$ pour toute norme subordonnée.</li></ol>`,
  decode: { donnees: [R`Trigonalisation, normes subordonnées.`], but: R`Approcher le rayon spectral par une norme subordonnée bien choisie.`, cles: {} },
  steps: [
    Q(1, "Norme ∞ subordonnée", R`<p>Majorer $|(Bx)_i|$, puis choisir $x_j = \overline{B_{i_0,j}}/|B_{i_0,j}|$ (ou $1$ si nul).</p>`, R`<p>Pour $\|x\|_\infty\leqslant1$ : $|(Bx)_i| = \big|\sum_jB_{i,j}x_j\big|\leqslant\sum_j|B_{i,j}|$, donc $|||B|||_\infty\leqslant\max_i\sum_j|B_{i,j}| = \sum_j|B_{i_0,j}|$.</p><p>Réciproquement, $x_j = \frac{\overline{B_{i_0,j}}}{|B_{i_0,j}|}$ (et $x_j = 1$ si $B_{i_0,j} = 0$) donne $\|x\|_\infty = 1$ et $(Bx)_{i_0} = \sum_j|B_{i_0,j}|$. D'où l'égalité.</p>`),
    Q(2, "Conjugaison par une diagonale", R`<p>$(D^{-1}TD)_{i,j} = d_i^{-1}T_{i,j}d_j$ avec $d_i = \delta^{i-1}$.</p>`, R`<p>Avec $d_i = \delta^{i-1}$, $(D_\delta^{-1}TD_\delta)_{i,j} = \delta^{-(i-1)}T_{i,j}\delta^{j-1} = \delta^{j-i}T_{i,j}$ :</p>$$D_\delta^{-1}TD_\delta = \begin{pmatrix}T_{1,1}&\delta T_{1,2}&\cdots&\delta^{n-1}T_{1,n}\\&T_{2,2}&\ddots&\vdots\\&&\ddots&\delta T_{n-1,n}\\0&&&T_{n,n}\end{pmatrix}.$$<p>La diagonale est inchangée, les termes au-dessus sont multipliés par des puissances positives de $\delta$. (Le livre écrit $\delta^{n+1}$ pour le dernier coefficient de $D_\delta$ : c'est $\delta^{n-1}$.)</p>`),
    Q(3, "Une norme presque optimale", R`<p>$\|x\| = \|(PD_\delta)^{-1}x\|_\infty$ : sa norme subordonnée est $|||(PD_\delta)^{-1}B(PD_\delta)|||_\infty$.</p>`, R`<p>Trigonalisons : $B = PTP^{-1}$. Posons $Q = PD_\delta$ et $\|x\| = \|Q^{-1}x\|_\infty$ (norme, car $Q$ inversible). Avec $x = Qy$ :</p>$$|||B||| = \sup_{\|Q^{-1}x\|_\infty\leqslant1}\|Q^{-1}Bx\|_\infty = \sup_{\|y\|_\infty\leqslant1}\|Q^{-1}BQy\|_\infty = |||D_\delta^{-1}TD_\delta|||_\infty.$$<p>Par Q1 et Q2, $|||B||| = \max_i\big(|T_{i,i}|+\sum_{j>i}\delta^{j-i}|T_{i,j}|\big)$. On choisit $\delta\in]0,1]$ tel que $\sum_{j>i}\delta^{j-i}|T_{i,j}|\leqslant\delta\sum_{j>i}|T_{i,j}|\lt\varepsilon$ pour tout $i$. Comme $\max_i|T_{i,i}| = \rho(B)$ :</p><div class="sbox">$$|||B|||\lt\rho(B)+\varepsilon.$$</div>`, ["it-trig"]),
    Q(4, "Rayon spectral et puissances", R`<p>Sens direct : vecteur propre. Réciproque : Q3 avec $\varepsilon = \frac{1-\rho}2$. Pour la limite : $\rho(B)^k = \rho(B^k)\leqslant|||B^k|||$, et Q3.</p>`, R`<p>Si $B^k\to0$ et $Bv = \lambda v$ ($v\neq0$), alors $\lambda^kv = B^kv\to0$, donc $|\lambda|\lt1$ : $\rho(B)\lt1$. Si $\rho(B)\lt1$, Q3 avec $\varepsilon = \frac{1-\rho(B)}2$ donne $|||B|||\lt1$, puis $|||B^k|||\leqslant|||B|||^k\to0$.</p><p>Pour toute norme subordonnée $N$ : $\rho(B)^k = \rho(B^k)\leqslant N(B^k)$, donc $\rho(B)\leqslant N(B^k)^{1/k}$. Pour $\varepsilon>0$, la norme $|||\cdot|||$ de Q3 est équivalente à $N$ : $N\leqslant C|||\cdot|||$, d'où $N(B^k)^{1/k}\leqslant C^{1/k}(\rho(B)+\varepsilon)\to\rho(B)+\varepsilon$. Ainsi $N(B^k)^{1/k}\to\rho(B)$ (formule de Gelfand).</p>`, ["it-sub"])
  ],
  piege: R`$\rho$ n'est pas une norme ($\rho\begin{pmatrix}0&1\\0&0\end{pmatrix} = 0$), et $|||B|||$ peut être bien plus grand que $\rho(B)$ pour une norme fixée. La norme de Householder dépend de $B$ et de $\varepsilon$.`,
  methode: R`Pour contrôler $B^k$, trigonaliser puis « écraser » la partie strictement triangulaire par conjugaison avec $\mathrm{diag}(1,\delta,\dots,\delta^{n-1})$.`
},

/* ===================== Partie II ===================== */
{ id: "iter-2", ...P, part: "Partie II", time: "25 min",
  title: "Critère de convergence",
  enonce: PRE + R`<p><b>Partie II.</b> On pose $e_k = x_k-x^*$ et $B = M^{-1}N$.</p><ol start="5">
<li>Montrer que $e_{k+1} = Be_k$, donc $e_k = B^ke_0$.</li>
<li>Montrer que si $\rho(B)\lt1$, alors $x_k\to x^*$ pour tout $x_0\in\mathbb R^n$.</li>
<li>Montrer que si $\rho(B)\geqslant1$, il existe $x_0\in\mathbb R^n$ tel que $(x_k)$ ne converge pas vers $x^*$. (Attention : $x_0$ doit être réel.)</li>
<li>Montrer que $\sup_{\|e_0\|_\infty = 1}\|e_k\|_\infty^{1/k}\to\rho(B)$ : $\rho(B)$ mesure la vitesse de convergence.</li></ol>`,
  decode: { donnees: [R`Partie I.`], but: R`Caractériser la convergence par $\rho(M^{-1}N)\lt1$.`, cles: {} },
  steps: [
    Q(5, "Équation de l'erreur", R`<p>$Mx^* = Nx^*+b$.</p>`, R`<p>$Ax^* = b$ s'écrit $Mx^* = Nx^*+b$, soit $x^* = M^{-1}(Nx^*+b)$. En soustrayant : $e_{k+1} = M^{-1}(Nx_k+b)-M^{-1}(Nx^*+b) = M^{-1}Ne_k = Be_k$, et par récurrence $e_k = B^ke_0$.</p>`),
    Q(6, "Convergence", R`<p>Q4.</p>`, R`<p>Si $\rho(B)\lt1$, $B^k\to0$ (Q4), donc $\|e_k\|\leqslant|||B^k|||\,\|e_0\|\to0$ pour tout $e_0$ : $x_k\to x^*$. Avec la norme de Householder pour $\varepsilon = \frac{1-\rho}2$, on a même $\|e_k\|\leqslant q^k\|e_0\|$, $q = \frac{1+\rho}2\lt1$ : convergence géométrique.</p>`),
    Q(7, "Divergence", R`<p>Vecteur propre $v = a+ib$ ($a,b\in\mathbb R^n$) de valeur propre $|\lambda|\geqslant1$ ; $B$ est réelle donc $B^kv = B^ka+iB^kb$.</p>`, R`<p>Soit $\lambda\in\mathbb C$ valeur propre avec $|\lambda|\geqslant1$ et $v = a+ib\neq0$ un vecteur propre associé ($a,b\in\mathbb R^n$). Alors $\|B^kv\| = |\lambda|^k\|v\|\geqslant\|v\|>0$ : $B^kv\not\to0$. Comme $B$ est réelle, $B^kv = B^ka+iB^kb$ avec $B^ka,B^kb$ réels ; si les deux tendaient vers $0$, $B^kv$ aussi. Donc $B^ka\not\to0$ ou $B^kb\not\to0$ : avec $x_0 = x^*+a$ ou $x_0 = x^*+b$ (réels), $e_k = B^ke_0\not\to0$.</p>`),
    Q(8, "Vitesse", R`<p>$\sup_{\|e_0\|_\infty = 1}\|B^ke_0\|_\infty = |||B^k|||_\infty$.</p>`, R`<p>Le sup sur la sphère réelle vaut la norme subordonnée réelle $|||B^k|||_\infty$, qui est encore $\max_i\sum_j|(B^k)_{i,j}|$ (Q1, avec $x_j = \pm1$). Par Q4, $|||B^k|||_\infty^{1/k}\to\rho(B)$. Heuristiquement $\|e_k\|\approx\rho(B)^k$ : le nombre d'itérations pour gagner un facteur $10$ est $\approx\frac{\ln10}{-\ln\rho(B)}$. On appelle $-\ln\rho(B)$ la vitesse asymptotique.</p>`)
  ],
  piege: R`Q7 : un vecteur propre complexe n'est pas une condition initiale admissible ; il faut passer par sa partie réelle ou imaginaire.`,
  methode: R`Méthode itérative linéaire : l'erreur est itérée par la matrice d'itération $B = M^{-1}N$ ; tout se lit sur $\rho(B)$.`
},

/* ===================== Partie III ===================== */
{ id: "iter-3", ...P, part: "Partie III", time: "35 min",
  title: "Jacobi, Gauss-Seidel, relaxation",
  enonce: PRE + R`<p><b>Partie III.</b> <b>Jacobi</b> : $M = D$, $N = -(L+U)$. <b>Gauss-Seidel</b> : $M = D+L$, $N = -U$. <b>Relaxation</b> ($\omega>0$) : $M = \frac1\omega D+L$, $N = \big(\frac1\omega-1\big)D-U$ (pour $\omega = 1$, c'est Gauss-Seidel).</p><ol start="9">
<li>Montrer que Jacobi converge si $A$ est à diagonale strictement dominante : $|a_{i,i}|>\sum_{j\neq i}|a_{i,j}|$ pour tout $i$. Montrer qu'une dominance large ($\geqslant$) ne suffit pas, avec $A = \begin{pmatrix}1&1\\-1&1\end{pmatrix}$.</li>
<li>Soit $A = \begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$. Calculer $\rho_J$ (Jacobi) et $\rho_{GS}$ (Gauss-Seidel), et vérifier $\rho_{GS} = \rho_J^2$.</li>
<li>Montrer que $|\det(M^{-1}N)| = |1-\omega|^n$ pour la relaxation. En déduire que la relaxation ne peut converger pour tout $x_0$ que si $\omega\in]0,2[$.</li>
<li>Pour une matrice symétrique définie positive tridiagonale, on admet que le paramètre optimal est $\omega_0 = \frac2{1+\sqrt{1-\rho_J^2}}$, avec $\rho(L_{\omega_0}) = \omega_0-1$. Le calculer pour la matrice de Q10, et comparer les nombres d'itérations pour gagner un facteur $10^6$.</li></ol>`,
  decode: { donnees: [R`Partie II.`], but: R`Appliquer le critère aux méthodes classiques.`, cles: {} },
  steps: [
    Q(9, "Jacobi et dominance diagonale", R`<p>$|||D^{-1}(L+U)|||_\infty = \max_i\frac{\sum_{j\neq i}|a_{i,j}|}{|a_{i,i}|}$.</p>`, R`<p>La matrice d'itération est $J = -D^{-1}(L+U)$, de coefficients $-\frac{a_{i,j}}{a_{i,i}}$ hors diagonale et $0$ sur la diagonale. Par Q1,</p>$$\rho(J)\leqslant|||J|||_\infty = \max_i\frac{\sum_{j\neq i}|a_{i,j}|}{|a_{i,i}|}\lt1,$$<p>d'où la convergence (Q6). Pour $A = \begin{pmatrix}1&1\\-1&1\end{pmatrix}$ (inversible, $\det A = 2$, dominance large), $J = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$ a pour valeurs propres $\pm i$ : $\rho(J) = 1$ et Jacobi ne converge pas pour tout $x_0$ (Q7). Le livre énonce la condition avec $\geqslant$ : il faut l'inégalité stricte.</p>`),
    Q(10, "Un exemple tridiagonal", R`<p>Jacobi : $J = \frac12\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}$. Gauss-Seidel : les valeurs propres $\lambda$ vérifient $\det(\lambda(D+L)+U) = 0$.</p>`, R`<p><b>Jacobi.</b> $J = I-D^{-1}A = \frac12\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}$, $\chi_J = \lambda^3-\frac12\lambda$, valeurs propres $0,\pm\frac{\sqrt2}2$ : $\rho_J = \frac{\sqrt2}2$.</p><p><b>Gauss-Seidel.</b> $\lambda$ est valeur propre de $(D+L)^{-1}(-U)$ si et seulement si $\det\big(\lambda(D+L)+U\big) = 0$. On développe selon la première ligne :</p>$$\det\begin{pmatrix}2\lambda&-1&0\\-\lambda&2\lambda&-1\\0&-\lambda&2\lambda\end{pmatrix} = 2\lambda(4\lambda^2-\lambda)+(-2\lambda^2) = 8\lambda^3-4\lambda^2 = 4\lambda^2(2\lambda-1).$$<p>Valeurs propres $0,0,\frac12$ : $\rho_{GS} = \frac12 = \rho_J^2$. Gauss-Seidel va deux fois plus vite que Jacobi : $-\ln\rho_{GS} = -2\ln\rho_J$. C'est un cas du théorème $\rho_{GS} = \rho_J^2$ pour les matrices tridiagonales.</p>${figErr}`),
    Q(11, "Condition nécessaire sur ω", R`<p>$\det M = \frac{\det D}{\omega^n}$, $\det N = \big(\frac1\omega-1\big)^n\det D$ (matrices triangulaires).</p>`, R`<p>$M = \frac1\omega D+L$ est triangulaire inférieure de diagonale $\frac1\omega D$, et $N = \big(\frac1\omega-1\big)D-U$ triangulaire supérieure de diagonale $\big(\frac1\omega-1\big)D$. Donc</p>$$\det(M^{-1}N) = \frac{(\frac1\omega-1)^n\det D}{\omega^{-n}\det D} = (1-\omega)^n.$$<p>Par le rappel, $\rho(M^{-1}N)^n\geqslant|\det(M^{-1}N)| = |1-\omega|^n$, donc $\rho\geqslant|1-\omega|$ (Kahan). Si $\omega\notin]0,2[$, $\rho\geqslant1$ et la méthode ne converge pas pour tout $x_0$ (Q7).</p>`, ["it-det"]),
    Q(12, "Relaxation optimale", R`<p>$\rho_J^2 = \frac12$, donc $\sqrt{1-\rho_J^2} = \frac1{\sqrt2}$.</p>`, R`<p>$\omega_0 = \frac2{1+1/\sqrt2} = \frac{2\sqrt2}{\sqrt2+1} = 2\sqrt2(\sqrt2-1) = 4-2\sqrt2\approx1{,}172$, et $\rho(L_{\omega_0}) = 3-2\sqrt2\approx0{,}172$.</p><p>Nombre d'itérations pour un facteur $10^6$ : $k\approx\frac{6\ln10}{-\ln\rho}$, soit</p><table class="vals"><tr><th>méthode</th><th>$\rho$</th><th>$k$</th></tr><tr><td>Jacobi</td><td>$0{,}707$</td><td>$\approx40$</td></tr><tr><td>Gauss-Seidel</td><td>$0{,}5$</td><td>$\approx20$</td></tr><tr><td>relaxation $\omega_0$</td><td>$0{,}172$</td><td>$\approx8$</td></tr></table><p>Pour le laplacien de taille $n$, $\rho_J = \cos\frac\pi{n+1}$ tend vers $1$ et l'écart se creuse : la vitesse de Jacobi est $x\approx\frac{\pi^2}{2(n+1)^2}$, celle de la relaxation optimale $\approx2\sqrt2\sqrt x\approx\frac{2\pi}{n+1}$.</p>${figVit}`)
  ],
  piege: R`Q11 donne seulement une condition nécessaire : $\omega\in]0,2[$ ne garantit la convergence que sous hypothèse (par exemple $A$ symétrique définie positive).`,
  methode: R`Pour comparer des méthodes itératives, comparer les rayons spectraux des matrices d'itération ; un déterminant donne une minoration gratuite de $\rho$.`
}
]);
})();

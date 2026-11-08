/* Commando X-ENS · Aller plus loin · Sujet « Théorème de Kronecker ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 5, plus: "kro",
  sujet: "Le théorème de Kronecker",
  sujetDesc: "Si un polynôme unitaire à coefficients entiers a toutes ses racines dans le disque unité fermé privé de 0, ce sont des racines de l'unité. La preuve combine la finitude de l'ensemble des polynômes entiers de degré n à racines dans le disque (relations coefficients-racines) et l'intégralité des polynômes ∏(X − z_iᵏ) (via la matrice compagnon). Applications : polynômes cyclotomiques, et les sous-groupes finis de GLₙ(ℤ) s'injectent dans GLₙ(ℤ/3ℤ)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "kr-coef": { t: "Relations coefficients-racines", b: R`<p>Si $P = X^n+a_{n-1}X^{n-1}+\dots+a_0 = \prod_{i = 1}^n(X-z_i)$, alors $a_{n-k} = (-1)^k\sigma_k$ avec $\sigma_k = \sum_{|I| = k}\prod_{i\in I}z_i$ (fonctions symétriques élémentaires).</p>` },
  "kr-comp": { t: "Matrice compagnon", b: R`<p>Pour $P$ unitaire de degré $n$, la matrice compagnon $C_P$ a pour polynôme caractéristique $P$. Si $C_P$ est trigonalisable de diagonale $z_1,\dots,z_n$, alors $C_P^k$ est trigonalisable de diagonale $z_1^k,\dots,z_n^k$, donc $\chi_{C_P^k} = \prod(X-z_i^k)$.</p>` },
  "kr-cyc": { t: "Polynômes cyclotomiques", b: R`<p>$X^N-1 = \prod_{d\mid N}\Phi_d$, où les $\Phi_d\in\mathbb Z[X]$ sont unitaires et irréductibles sur $\mathbb Q$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\overline{\mathbb D} = \{z\in\mathbb C : |z|\leqslant1\}$. Pour $n\geqslant1$, $\Omega_n$ est l'ensemble des polynômes <b>unitaires</b> de $\mathbb Z[X]$, de degré $n$, dont toutes les racines complexes sont dans $\overline{\mathbb D}$. On veut montrer le <b>théorème de Kronecker</b> : si $P\in\Omega_n$ et $P(0)\neq0$, toutes les racines de $P$ sont des racines de l'unité.</p>`;

/* Figure : les racines des polynômes de Ω₂ */
const figOm = (() => {
  const s = 110, cx = 170, cy = 150, X = x => (cx + s * x).toFixed(1), Y = y => (cy - s * y).toFixed(1);
  let b = `<line x1="${X(-1.3)}" y1="${Y(0)}" x2="${X(1.3)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(-1.25)}" x2="${X(0)}" y2="${Y(1.25)}" class="ax"/><circle cx="${cx}" cy="${cy}" r="${s}" class="vb" style="fill:none;stroke-width:1.6"/>`;
  const pts = [[1, 0], [0, 0], [0.5, 0.866], [0.5, -0.866], [-1, 0], [0, 1], [0, -1], [-0.5, 0.866], [-0.5, -0.866]];
  pts.forEach(([x, y]) => { b += `<circle cx="${X(x)}" cy="${Y(y)}" r="5" class="${x === 0 && y === 0 ? "ptr" : "pt"}"/>`; });
  b += `<circle cx="${X(0.5)}" cy="${Y(0.5)}" r="5" class="ptv"/><circle cx="${X(0.5)}" cy="${Y(-0.5)}" r="5" class="ptv"/>` + S(+X(0.5) + 8, +Y(0.5) - 6, "(1 ± i)/2", "start", "sm");
  b += S(+X(1) + 8, +Y(0) - 6, "1", "start", "it") + S(+X(-1) - 8, +Y(0) - 6, "−1", "end", "it") + S(+X(0) + 8, +Y(1) - 6, "i", "start", "it");
  return FIG(340, 300, b, R`Les racines des $9$ polynômes de $\Omega_2$ ($X^2+bX+c$, $|b|\leqslant2$, $|c|\leqslant1$, racines dans le disque) : $0$ (rouge) ou des racines de l'unité d'ordres $1,2,3,4,6$. En vert, les racines $\frac{1\pm i}2$ de $X^2-X+\frac12$, qui n'est pas à coefficients entiers.`, "Racines des polynômes de Ω₂");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "kro-1", ...P, part: "Partie I", time: "30 min",
  title: "Deux ingrédients",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que si $P = X^n+\sum_{k\lt n}a_kX^k\in\Omega_n$, alors $|a_{n-k}|\leqslant\binom nk$. En déduire que $\Omega_n$ est fini. Déterminer $\Omega_2$.</li>
<li>Soit $P\in\Omega_n$ de racines $z_1,\dots,z_n$ (avec multiplicité), et $P_k = \prod_i(X-z_i^k)$ pour $k\geqslant1$. En utilisant la matrice compagnon de $P$, montrer que $P_k\in\mathbb Z[X]$, puis que $P_k\in\Omega_n$.</li></ol>`,
  decode: { donnees: [R`Relations coefficients-racines ; $C_P$ à coefficients entiers.`], but: R`Les $P_k$ vivent dans un ensemble fini : leurs racines $z_i^k$ prennent un nombre fini de valeurs.`, cles: {} },
  steps: [
    Q(1, "Ωₙ est fini", R`<p>$|\sigma_k|\leqslant\sum_{|I| = k}\prod_{i\in I}|z_i|\leqslant\binom nk$.</p>`, R`<p>Par les relations coefficients-racines et $|z_i|\leqslant1$ :</p>$$|a_{n-k}| = |\sigma_k|\leqslant\sum_{|I| = k}\prod_{i\in I}|z_i|\leqslant\binom nk.$$<p>Les coefficients sont des entiers bornés : chacun prend au plus $2\binom nk+1$ valeurs, donc $\Omega_n$ est fini.</p><p>$n = 2$ : $X^2+bX+c$ avec $|b|\leqslant2$, $|c|\leqslant1$. En testant les $15$ cas, $\Omega_2$ contient $X^2$, $X^2\pm X$, $X^2-1$, $X^2+1$, $X^2\pm X+1$, $(X\pm1)^2$ : $9$ polynômes. (Exclus par exemple $X^2+2X-1$, de racine $-1-\sqrt2$.)</p>${figOm}`, ["kr-coef"]),
    Q(2, "Les polynômes Pₖ", R`<p>$\chi_{C_P^k} = P_k$, et $C_P^k$ est à coefficients entiers.</p>`, R`<p>$C_P\in\mathcal M_n(\mathbb Z)$ (ses coefficients sont $0$, $1$ et les $-a_i$) a pour polynôme caractéristique $P$. Trigonalisons sur $\mathbb C$ : $C_P = QTQ^{-1}$ avec $T$ triangulaire de diagonale $(z_1,\dots,z_n)$. Alors $C_P^k = QT^kQ^{-1}$, et $T^k$ est triangulaire de diagonale $(z_1^k,\dots,z_n^k)$, donc</p>$$P_k = \prod(X-z_i^k) = \chi_{C_P^k}.$$<p>Or $C_P^k\in\mathcal M_n(\mathbb Z)$, donc son polynôme caractéristique est dans $\mathbb Z[X]$, unitaire de degré $n$. Ses racines $z_i^k$ vérifient $|z_i^k|\leqslant1$ : $P_k\in\Omega_n$.</p>`, ["kr-comp"])
  ],
  piege: R`Le caractère <b>unitaire</b> est indispensable : $2X^2-2X+1$ est à coefficients entiers, de racines $\frac{1\pm i}2$ de module $\frac1{\sqrt2}$, et ce ne sont pas des racines de l'unité. Sans « unitaire », $\Omega_n$ ne serait pas fini (les $a_k$ ne seraient plus bornés).`,
  methode: R`Pour montrer que $\prod(X-z_i^k)$ est à coefficients entiers : l'écrire comme polynôme caractéristique de $C^k$, avec $C$ matrice entière de polynôme caractéristique $\prod(X-z_i)$ (alternative : théorème des polynômes symétriques).`
},

/* ===================== Partie II ===================== */
{ id: "kro-2", ...P, part: "Partie II", time: "30 min",
  title: "Le théorème et les polynômes cyclotomiques",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="3">
<li>Soit $P\in\Omega_n$ avec $P(0)\neq0$ et $z$ une racine de $P$. Montrer que $\{z^k : k\geqslant1\}$ est fini, puis que $z$ est une racine de l'unité.</li>
<li>Soit $P\in\mathbb Z[X]$ unitaire, irréductible sur $\mathbb Q$, dont toutes les racines sont dans $\overline{\mathbb D}$. Montrer que $P = X$ ou $P$ est un polynôme cyclotomique $\Phi_d$.</li>
<li>Montrer que le théorème tombe si l'on autorise une racine de module $>1$ : donner un polynôme unitaire de $\mathbb Z[X]$ ayant une racine de module $1$ qui n'est pas une racine de l'unité. (On pourra chercher un polynôme réciproque de degré $4$.)</li></ol>`,
  decode: { donnees: [R`Partie I : $\Omega_n$ fini, $P_k\in\Omega_n$.`], but: R`Principe des tiroirs sur les puissances de $z$.`, cles: {} },
  steps: [
    Q(3, "Le théorème de Kronecker", R`<p>Chaque $z^k$ est racine d'un $P_k\in\Omega_n$, ensemble fini de polynômes ayant un nombre fini de racines.</p>`, R`<p>$z^k$ est racine de $P_k\in\Omega_n$. L'ensemble $\Omega_n$ est fini et chaque polynôme a au plus $n$ racines : l'ensemble des racines de tous les éléments de $\Omega_n$ est fini, et contient $\{z^k : k\geqslant1\}$. Il existe donc $k\lt k'$ avec $z^k = z^{k'}$. Comme $z\neq0$ ($P(0)\neq0$), $z^{k'-k} = 1$.</p><div class="sbox"><p>Toute racine d'un polynôme unitaire de $\mathbb Z[X]$ dont les racines sont dans $\overline{\mathbb D}\setminus\{0\}$ est une racine de l'unité.</p></div>`),
    Q(4, "Polynômes cyclotomiques", R`<p>Si $P\neq X$, $P(0)\neq0$ ; ses racines sont des racines $N$-ièmes de l'unité ; $P$ irréductible divise $X^N-1 = \prod\Phi_d$.</p>`, R`<p>Si $P(0) = 0$, $X\mid P$ et $P = X$ (irréductible, unitaire). Sinon, par Q3, les racines de $P$ sont des racines de l'unité ; soit $N$ le ppcm de leurs ordres : elles sont racines de $X^N-1$, qui est à racines simples. Une racine $z$ de $P$ a $P$ pour polynôme minimal (irréductible unitaire), donc $P\mid X^N-1 = \prod_{d\mid N}\Phi_d$. $P$ est irréductible dans l'anneau factoriel $\mathbb Q[X]$, donc divise l'un des $\Phi_d$, irréductible et unitaire : $P = \Phi_d$.</p>`, ["kr-cyc"]),
    Q(5, "Une racine de module 1 qui n'est pas de l'unité", R`<p>Polynôme réciproque $X^4-X^3-X^2-X+1$ : poser $Y = X+\frac1X$.</p>`, R`<p>$P = X^4-X^3-X^2-X+1$. En divisant par $X^2$ : $X^2+\frac1{X^2}-\big(X+\frac1X\big)-1 = Y^2-2-Y-1 = Y^2-Y-3$ avec $Y = X+\frac1X$. Les racines $Y = \frac{1\pm\sqrt{13}}2$ : $Y_- = \frac{1-\sqrt{13}}2\approx-1{,}30\in\,]-2,2[$ donne $X+\frac1X = Y_-$, deux racines conjuguées de module $1$ ; $Y_+\approx2{,}30>2$ donne deux racines réelles, l'une $>1$.</p><p>Soit $z,\bar z$ ces deux racines de module $1$. Si $z$ était une racine de l'unité, son polynôme minimal $\Phi_d\in\mathbb Z[X]$ diviserait $P$, et ses racines (racines de l'unité) seraient parmi celles de $P$ de module $1$, soit $z,\bar z$ ($P(\pm1) = -1,\,3\neq0$). Donc $\Phi_d = (X-z)(X-\bar z) = X^2-Y_-X+1$, de coefficient $Y_- = \frac{1-\sqrt{13}}2\notin\mathbb Z$ : absurde. Le théorème exige vraiment <b>toutes</b> les racines dans le disque.</p>`)
  ],
  piege: R`L'hypothèse $P(0)\neq0$ sert à simplifier $z^k = z^{k'}$ en $z^{k'-k} = 1$ ; sans elle, $0$ est racine, et $0$ n'est pas une racine de l'unité.`,
  methode: R`Principe des tiroirs : une suite qui prend ses valeurs dans un ensemble fini se répète ; si elle est géométrique ($z^k$) et $z\neq0$, elle est périodique.`
},

/* ===================== Partie III ===================== */
{ id: "kro-3", ...P, part: "Partie III", time: "35 min",
  title: "Sous-groupes finis de GLₙ(ℤ)",
  enonce: PRE + R`<p><b>Partie III.</b> Soit $G$ un sous-groupe fini de $GL_n(\mathbb Z)$ et $m\geqslant3$. On note $\pi_m : GL_n(\mathbb Z)\to GL_n(\mathbb Z/m\mathbb Z)$ la réduction modulo $m$.</p><ol start="6">
<li>Soit $A\in G$ avec $\pi_m(A) = I_n$, c'est-à-dire $A = I_n+mB$, $B\in\mathcal M_n(\mathbb Z)$. Montrer que $A$ est diagonalisable sur $\mathbb C$ à valeurs propres racines de l'unité, puis que les valeurs propres de $B$ sont de module $\leqslant\frac2m\lt1$.</li>
<li>En appliquant le théorème de Kronecker à $\chi_B$, montrer que $B = 0$. En déduire que $\pi_m$ est injective sur $G$, et que $|G|\leqslant|GL_n(\mathbb F_3)| = \prod_{i = 0}^{n-1}(3^n-3^i)$.</li>
<li>Pour $n = 2$, calculer cette borne. Montrer que $A = \begin{pmatrix}1&-1\\1&0\end{pmatrix}$ est d'ordre $6$, et que $\langle A,\begin{pmatrix}0&1\\1&0\end{pmatrix}\rangle$ est un sous-groupe fini de $GL_2(\mathbb Z)$ d'ordre $12$.</li></ol>`,
  decode: { donnees: [R`Kronecker ; $A^e = I_n$.`], but: R`Montrer que les seuls éléments de $G$ congrus à $I_n$ modulo $m$ sont $I_n$.`, cles: {} },
  steps: [
    Q(6, "Valeurs propres de B", R`<p>$X^e-1$ annule $A$, à racines simples. $\beta = \frac{\alpha-1}m$ avec $|\alpha| = 1$.</p>`, R`<p>$G$ est fini : $A^e = I_n$ pour un $e\geqslant1$. $X^e-1$ est scindé à racines simples sur $\mathbb C$ et annule $A$ : $A$ est diagonalisable, de valeurs propres $\alpha$ avec $\alpha^e = 1$, $|\alpha| = 1$. $B = \frac{A-I_n}m$ est diagonalisable dans la même base, de valeurs propres $\beta = \frac{\alpha-1}m$, et</p>$$|\beta|\leqslant\frac{|\alpha|+1}m = \frac2m\leqslant\frac23\lt1.$$`),
    Q(7, "Injectivité de la réduction modulo m", R`<p>$\chi_B\in\mathbb Z[X]$ unitaire, racines dans le disque ouvert : Kronecker interdit les racines non nulles.</p>`, R`<p>$\chi_B\in\mathbb Z[X]$ est unitaire, et ses racines sont de module $\lt1$. Une racine non nulle $\beta$ serait, par Kronecker (appliqué au quotient de $\chi_B$ par la plus grande puissance de $X$), une racine de l'unité, de module $1$ : impossible. Donc toutes les valeurs propres de $B$ sont nulles ; $B$ est diagonalisable, donc $B = 0$ et $A = I_n$.</p><p>Ainsi $\ker(\pi_m|_G) = \{I_n\}$ : $\pi_m$ est un morphisme injectif de $G$ dans $GL_n(\mathbb Z/m\mathbb Z)$. Avec $m = 3$ : $|G|\leqslant|GL_n(\mathbb F_3)|$. On compte les bases de $\mathbb F_3^n$ : la colonne $i+1$ doit éviter l'espace de dimension $i$ engendré par les précédentes ($3^n-3^i$ choix).</p><div class="sbox">$$|G|\leqslant\prod_{i = 0}^{n-1}(3^n-3^i).$$</div>`),
    Q(8, "Le cas n = 2", R`<p>$\chi_A = X^2-X+1 = \Phi_6$. Le groupe engendré est diédral.</p>`, R`<p>Borne : $(9-1)(9-3) = 48$.</p><p>$\chi_A = X^2-X+1 = \Phi_6$ : les valeurs propres sont $e^{\pm i\pi/3}$, $A$ est diagonalisable (valeurs propres distinctes) d'ordre $6$. Avec $J = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ : $JAJ = \begin{pmatrix}0&1\\-1&1\end{pmatrix} = A^{-1}$ (vérification : $A\begin{pmatrix}0&1\\-1&1\end{pmatrix} = I_2$). Le groupe engendré est $\{A^k,A^kJ : 0\leqslant k\lt6\}$, d'ordre $12$ : c'est le groupe diédral $D_6$, groupe des symétries du réseau hexagonal $\mathbb Z[e^{i\pi/3}]$.</p><p>On peut montrer que $12$ est l'ordre maximal d'un sous-groupe fini de $GL_2(\mathbb Z)$ : la borne $48$ est grossière, mais elle est universelle et facile.</p>`)
  ],
  piege: R`Il faut $m\geqslant3$ : pour $m = 2$, $-I_n\equiv I_n\pmod2$ et la réduction n'est pas injective sur $\{\pm I_n\}$. C'est la majoration $|\beta|\leqslant\frac2m\lt1$ qui demande $m\geqslant3$.`,
  methode: R`Un groupe fini de matrices entières se « voit » modulo $3$ : un élément congru à l'identité est d'ordre fini et proche de l'identité, ce que Kronecker rend impossible sauf pour l'identité elle-même.`
}
]);
})();

/* Commando X-ENS · Aller plus loin · Sujet « Un théorème de point fixe de Kakutani ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 5, plus: "kak",
  sujet: "Points fixes communs : le théorème de Kakutani",
  sujetDesc: "Si un sous-groupe compact G de GLₙ(ℝ) laisse stable un compact convexe K, il fixe un point de K. La preuve fabrique une norme N(x) = max_g ‖g(x)‖ invariante par G et strictement convexe, dont l'unique minimum sur K est fixe. Conséquence : tout sous-groupe compact de GLₙ(ℝ) est conjugué à un sous-groupe de Oₙ(ℝ). On traite un exemple d'ordre 3, puis le théorème de Markov-Kakutani pour des applications qui commutent." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "ka-eg": { t: "Cas d'égalité de l'inégalité triangulaire", b: R`$$\|u+v\| = \|u\|+\|v\|\iff\exists\lambda\geqslant0,\ u = \lambda v\text{ ou }v = \lambda u.$$` },
  "ka-comp": { t: "Compacité", b: R`$$\begin{gathered}f\in\mathcal C(K,\mathbb R)\Rightarrow\min,\max\text{ atteints},\\[4pt]f(K)\text{ compact},\\[4pt]K\subset\mathbb R^N\text{ compact}\Rightarrow\operatorname{Conv}(K)\text{ compact}.\end{gathered}$$` },
  "ka-rac": { t: "Racine carrée", b: R`<p>Toute $S\in\mathcal S_n^{++}(\mathbb R)$ s'écrit $S = R^2$ avec $R\in\mathcal S_n^{++}(\mathbb R)$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\mathbb R^n$ est muni de sa norme euclidienne $\|\cdot\|$. $G$ est un sous-groupe <b>compact</b> de $GL_n(\mathbb R)$ et $K$ un compact convexe non vide de $\mathbb R^n$ <b>stable</b> par $G$ ($g(K)\subset K$ pour tout $g\in G$). On veut montrer le <b>théorème de Kakutani</b> : il existe $x\in K$ tel que $g(x) = x$ pour tout $g\in G$.</p>`;

/* Figure : orbite d'ordre 3 sur l'ellipse invariante */
const figOrb = (() => {
  const s = 70, cx = 170, cy = 150, X = x => (cx + s * x).toFixed(1), Y = y => (cy - s * y).toFixed(1);
  let b = `<line x1="${X(-2.2)}" y1="${Y(0)}" x2="${X(2.2)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(-1.9)}" x2="${X(0)}" y2="${Y(1.9)}" class="ax"/>`;
  let d = ""; for (let k = 0; k <= 120; k++) { const t = 2 * Math.PI * k / 120, u = Math.cos(t), v = Math.sin(t); const x = Math.SQRT2 * u + Math.sqrt(2 / 3) * v, y = Math.SQRT2 * u - Math.sqrt(2 / 3) * v; d += (k ? "L" : "M") + X(x / Math.SQRT2 * 1) + "," + Y(y / Math.SQRT2 * 1); }
  let d2 = ""; for (let k = 0; k <= 160; k++) { const t = 2 * Math.PI * k / 160; const r = 1 / Math.sqrt(1 - Math.cos(t) * Math.sin(t)); d2 += (k ? "L" : "M") + X(r * Math.cos(t)) + "," + Y(r * Math.sin(t)); }
  b += `<path d="${d2}" class="vb" style="fill:none;stroke-width:2"/><circle cx="${cx}" cy="${cy}" r="${s}" class="thin"/>`;
  let p = [1, 0];
  for (let k = 0; k < 3; k++) { const q = [-p[1], p[0] - p[1]]; b += `<line x1="${X(p[0])}" y1="${Y(p[1])}" x2="${X(q[0])}" y2="${Y(q[1])}" class="vr" style="stroke-width:1.4"/>`; b += `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="4.5" class="ptr"/>` + S(+X(p[0]) + 8, +Y(p[1]) - 6, ["v", "Av", "A²v"][k], "start", "it"); p = q; }
  return FIG(340, 300, b, R`$A = \begin{pmatrix}0&-1\\1&-1\end{pmatrix}$ est d'ordre $3$ mais n'est pas orthogonale : l'orbite de $v = (1,0)$ ne reste pas sur le cercle unité (pointillés). Elle reste sur l'ellipse $x^2-xy+y^2 = 1$ (bleu), sphère unité d'un produit scalaire invariant : dans une base orthonormée pour ce produit scalaire, $A$ devient une rotation d'angle $\frac{2\pi}3$.`, "Ellipse invariante");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "kak-1", ...P, part: "Partie I", time: "30 min",
  title: "Une norme invariante strictement convexe",
  enonce: PRE + R`<p><b>Partie I.</b> Pour $x\in\mathbb R^n$, on pose $N(x) = \sup_{g\in G}\|g(x)\|$.</p><ol start="1">
<li>Montrer que le sup est atteint : pour tout $x$, il existe $g_x\in G$ avec $N(x) = \|g_x(x)\|$.</li>
<li>Montrer que $N$ est une norme, et que $N(h(x)) = N(x)$ pour tout $h\in G$.</li>
<li>Montrer que $N(x+y) = N(x)+N(y)$ si et seulement si $x$ et $y$ sont positivement liés.</li></ol>`,
  decode: { donnees: [R`$G$ compact ; $g\mapsto\|g(x)\|$ continue.`], but: R`Fabriquer une norme invariante par $G$ qui garde le cas d'égalité euclidien.`, cles: {} },
  steps: [
    Q(1, "Le sup est un max", R`<p>$g\mapsto\|g(x)\|$ est continue sur le compact $G$.</p>`, R`<p>$g\mapsto g(x)$ est linéaire en $g$ (donc continue sur $\mathcal M_n(\mathbb R)$), et $\|\cdot\|$ est continue : $g\mapsto\|g(x)\|$ est continue sur le compact $G$, donc atteint son maximum en un $g_x$.</p>`, ["ka-comp"]),
    Q(2, "Une norme invariante", R`<p>Séparation : $\operatorname{Id}\in G$. Invariance : $g\mapsto gh$ est une bijection de $G$.</p>`, R`<p>$N(x)\geqslant\|\operatorname{Id}(x)\| = \|x\|$, donc $N(x) = 0\Rightarrow x = 0$. Homogénéité : $N(\lambda x) = \sup|\lambda|\|g(x)\| = |\lambda|N(x)$. Triangulaire : $N(x+y) = \|g_{x+y}(x)+g_{x+y}(y)\|\leqslant\|g_{x+y}(x)\|+\|g_{x+y}(y)\|\leqslant N(x)+N(y)$.</p><p>Invariance : $g\mapsto gh$ est une bijection de $G$ ($G$ est un groupe), donc $N(h(x)) = \sup_g\|gh(x)\| = \sup_{g'}\|g'(x)\| = N(x)$.</p>`),
    Q(3, "Stricte convexité", R`<p>Égalité ⇒ égalités dans les deux inégalités de Q2, dont l'inégalité triangulaire euclidienne pour $g_{x+y}(x)$, $g_{x+y}(y)$.</p>`, R`<p>Si $N(x+y) = N(x)+N(y)$, toutes les inégalités de Q2 sont des égalités, en particulier $\|g(x)+g(y)\| = \|g(x)\|+\|g(y)\|$ avec $g = g_{x+y}$. Par le cas d'égalité euclidien, $g(x)$ et $g(y)$ sont positivement liés, disons $g(x) = \lambda g(y)$, $\lambda\geqslant0$ ; $g$ est inversible, donc $x = \lambda y$. La réciproque est immédiate ($N(\lambda y+y) = (\lambda+1)N(y)$).</p>`, ["ka-eg"])
  ],
  piege: R`La norme $\max_i|x_i|$ (ou $\sum|x_i|$) n'a pas ce cas d'égalité : pour une telle norme, les « boules » ont des faces plates et le minimum sur un convexe peut ne pas être unique. C'est la norme euclidienne sous-jacente qui rend $N$ strictement convexe.`,
  methode: R`Moyenner (ou prendre le sup) sur un groupe compact pour fabriquer un objet invariant : norme, produit scalaire, forme quadratique.`
},

/* ===================== Partie II ===================== */
{ id: "kak-2", ...P, part: "Partie II", time: "30 min",
  title: "Le théorème de point fixe",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que $N$ atteint son minimum sur $K$ en un unique point $x_0$.</li>
<li>Montrer que $x_0$ est fixe par tout $g\in G$.</li>
<li>Montrer que la convexité de $K$ est nécessaire, avec $G = \{\pm I_2\}$ et $K = \{(-1,0),(1,0)\}$. Montrer que le point fixe n'est pas forcément $0$ : traiter $G = \{I_2,s\}$ ($s$ la symétrie orthogonale d'axe $(Ox)$) et $K = \{1\}\times[-1,1]$.</li></ol>`,
  decode: { donnees: [R`Partie I.`], but: R`Un minimum unique d'une fonction invariante est forcément invariant.`, cles: {} },
  steps: [
    Q(4, "Minimum unique", R`<p>Existence : compacité. Unicité : le milieu de deux minimiseurs, puis Q3.</p>`, R`<p>$N$ est continue (norme en dimension finie) sur le compact $K$ : elle atteint son minimum $m$ en un $x_0$. Si $y\in K$ vérifie aussi $N(y) = m$, alors $\frac{x_0+y}2\in K$ (convexité) et</p>$$m\leqslant N\Big(\frac{x_0+y}2\Big)\leqslant\frac{N(x_0)+N(y)}2 = m.$$<p>Égalité dans l'inégalité triangulaire : $x_0 = \lambda y$ avec $\lambda\geqslant0$ (ou l'inverse). Alors $m = N(x_0) = \lambda N(y) = \lambda m$ : si $m\neq0$, $\lambda = 1$ et $x_0 = y$ ; si $m = 0$, $x_0 = y = 0$. Le minimum est unique.</p>`),
    Q(5, "Le point fixe", R`<p>$g(x_0)\in K$ et $N(g(x_0)) = N(x_0)$.</p>`, R`<p>Pour $g\in G$ : $g(x_0)\in K$ ($K$ stable) et $N(g(x_0)) = N(x_0) = m$ (Q2). Par unicité du minimum, $g(x_0) = x_0$.</p><div class="sbox"><p>$G$ compact, $K$ compact convexe non vide stable par $G$ $\Longrightarrow$ $G$ a un point fixe dans $K$.</p></div>`),
    Q(6, "Les hypothèses sont utiles", R`<p>Un point fixe de $-I_2$ est nul. Pour $s$ : les points fixes sont ceux de l'axe $(Ox)$.</p>`, R`<p><b>Convexité.</b> $K = \{(-1,0),(1,0)\}$ est compact, stable par le groupe compact $\{\pm I_2\}$, mais le seul point fixe de $-I_2$ est $0\notin K$. Avec $\operatorname{Conv}(K) = [-1,1]\times\{0\}$, on retrouve le point fixe $0$.</p><p><b>Un point fixe non nul.</b> $s(x,y) = (x,-y)$ stabilise $K = \{1\}\times[-1,1]$, convexe compact ne contenant pas $0$. Les points fixes de $s$ dans $K$ forment $K\cap(Ox) = \{(1,0)\}$ : c'est le point fourni par le théorème. Ici $N = \|\cdot\|$ ($s$ est orthogonale), et $(1,0)$ est bien le point de $K$ de norme minimale.</p>`)
  ],
  piege: R`L'invariance $N\circ g = N$ ne suffit pas : il faut aussi que le minimiseur soit <b>unique</b>, d'où le besoin de la stricte convexité de $N$ et de la convexité de $K$.`,
  methode: R`Trouver un point fixe commun : construire une fonction invariante ayant un unique minimiseur sur un ensemble stable ; ce minimiseur est fixé par symétrie.`
},

/* ===================== Partie III ===================== */
{ id: "kak-3", ...P, part: "Partie III", time: "40 min",
  title: "Applications",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Soit $H$ un sous-groupe compact de $GL_n(\mathbb R)$. On fait agir $H$ sur $\mathcal S_n(\mathbb R)$ par $\varphi(A)(S) = {}^tASA$, et on pose $K = \operatorname{Conv}\{{}^tMM : M\in H\}$. Montrer que $K$ est un compact convexe de $\mathcal S_n^{++}(\mathbb R)$ stable par $\varphi(H)$, et en déduire $S\in\mathcal S_n^{++}$ avec $\,{}^tASA = S$ pour tout $A\in H$. Conclure : $H$ est conjugué à un sous-groupe de $O_n(\mathbb R)$.</li>
<li>Pour $H$ fini, retrouver ce résultat avec $q(x) = \sum_{A\in H}\|Ax\|^2$. Traiter $H = \{I,A,A^2\}$ avec $A = \begin{pmatrix}0&-1\\1&-1\end{pmatrix}$.</li>
<li>(<b>Markov-Kakutani, cas d'une application</b>) Soit $f$ linéaire laissant stable un compact convexe $K$ non vide. Pour $x\in K$, on pose $u_n = \frac1n\sum_{k = 0}^{n-1}f^k(x)$. Montrer que $\|f(u_n)-u_n\|\leqslant\frac{\operatorname{diam}K}n$, puis que $f$ a un point fixe dans $K$. Si de plus $g$ commute avec $f$ et stabilise $K$, montrer qu'ils ont un point fixe commun.</li></ol>`,
  decode: { donnees: [R`Théorème de Kakutani (Partie II).`], but: R`Appliquer le théorème à l'action de $H$ sur les formes quadratiques.`, cles: {} },
  steps: [
    Q(7, "Sous-groupes compacts de GLₙ", R`<p>$\varphi(A)({}^tMM) = {}^t(MA)(MA)$. Puis $S = R^2$ et $RAR^{-1}\in O_n$.</p>`, R`<p>$\varphi$ est un morphisme continu $H\to GL(\mathcal S_n(\mathbb R))$ ($\varphi(AB)(S) = {}^tB\,{}^tASAB = \varphi(B)\varphi(A)(S)$ : un anti-morphisme, ce qui ne change rien pour l'image, sous-groupe compact). $\{{}^tMM : M\in H\}$ est compact (image continue de $H$), inclus dans le convexe $\mathcal S_n^{++}$ ; son enveloppe convexe $K$ est compacte et incluse dans $\mathcal S_n^{++}$. Pour $A\in H$, $\varphi(A)({}^tMM) = {}^t(MA)(MA)$ avec $MA\in H$ : l'ensemble des $\,{}^tMM$ est stable, et par linéarité de $\varphi(A)$, $K$ aussi.</p><p>Par Kakutani, il existe $S\in K$ avec $\,{}^tASA = S$ pour tout $A\in H$. Écrivons $S = R^2$, $R\in\mathcal S_n^{++}$. Alors $\,{}^tAR^2A = R^2$ donne $\,{}^t(RAR^{-1})(RAR^{-1}) = R^{-1}\,{}^tAR^2AR^{-1} = I_n$.</p><div class="sbox"><p>$RHR^{-1}\subset O_n(\mathbb R)$ : tout sous-groupe compact de $GL_n(\mathbb R)$ est conjugué à un sous-groupe de $O_n(\mathbb R)$.</p></div>`, ["ka-comp", "ka-rac"]),
    Q(8, "Le cas fini et un exemple", R`<p>$q(Bx) = \sum_A\|ABx\|^2 = q(x)$. Pour l'exemple, $S = I+{}^tAA+{}^t(A^2)A^2$.</p>`, R`<p>Pour $B\in H$, $A\mapsto AB$ est une bijection de $H$ : $q(Bx) = \sum_A\|ABx\|^2 = q(x)$. $q$ est définie positive ($q(x)\geqslant\|x\|^2$) : $H$ préserve le produit scalaire associé.</p><p>Exemple : $A^2 = \begin{pmatrix}-1&1\\-1&0\end{pmatrix}$, $A^3 = I$. $\,{}^tAA = \begin{pmatrix}1&-1\\-1&2\end{pmatrix}$, $\,{}^t(A^2)A^2 = \begin{pmatrix}2&-1\\-1&1\end{pmatrix}$, d'où</p>$$S = I+{}^tAA+{}^t(A^2)A^2 = \begin{pmatrix}4&-2\\-2&4\end{pmatrix},\qquad q(x,y) = 4(x^2-xy+y^2).$$<p>Vérification : $A(x,y) = (-y,\ x-y)$ et $y^2-(-y)(x-y)+(x-y)^2 = y^2+xy-y^2+x^2-2xy+y^2 = x^2-xy+y^2$. ✓</p>${figOrb}`),
    Q(9, "Markov-Kakutani", R`<p>$f(u_n)-u_n = \frac1n\big(f^n(x)-x\big)$. Extrais une sous-suite convergente.</p>`, R`<p>$u_n\in K$ (combinaison convexe de points de $K$) et</p>$$f(u_n)-u_n = \frac1n\sum_{k = 0}^{n-1}\big(f^{k+1}(x)-f^k(x)\big) = \frac{f^n(x)-x}n,$$$$\|f(u_n)-u_n\|\leqslant\frac{\operatorname{diam}K}n.$$<p>Par compacité, une sous-suite $u_{\psi(n)}\to a\in K$, et par continuité $f(a)-a = \lim\big(f(u_{\psi(n)})-u_{\psi(n)}\big) = 0$.</p><p><b>Deux applications qui commutent.</b> $K_f = \{x\in K : f(x) = x\}$ est non vide, convexe, compact (fermé). Il est stable par $g$ : si $f(x) = x$, $f(g(x)) = g(f(x)) = g(x)$. On applique le cas d'une application à $g$ sur $K_f$ : un point de $K_f$ fixe par $g$ est fixe par $f$ et $g$.</p><div class="sbox"><p>Des applications linéaires qui commutent et stabilisent un compact convexe ont un point fixe commun (par récurrence pour une famille finie).</p></div>`)
  ],
  piege: R`Sans commutation, deux applications stabilisant $K$ peuvent n'avoir aucun point fixe commun (par exemple deux symétries affines de $[0,1]^2$ par rapport à des points différents). La commutation est ce qui rend $K_f$ stable par $g$.`,
  methode: R`Forme quadratique invariante par un groupe compact : point fixe de l'action $S\mapsto{}^tASA$, ou moyenne $\sum_A{}^tAA$ pour un groupe fini. Dans une base orthonormée pour cette forme, le groupe devient orthogonal.`
}
]);
})();

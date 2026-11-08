/* Commando X-ENS · Aller plus loin · Sujet « Théorème de Weierstrass par la convolution ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 12, kind: "probleme", qnav: true, side: true, level: 4, plus: "weier",
  sujet: "Théorème de Weierstrass par convolution avec les noyaux de Landau",
  sujetDesc: "Toute fonction continue sur un segment est limite uniforme de polynômes. On convole f avec les noyaux de Landau p_n(x) = (1 − x²)ⁿ/a_n sur [−1, 1] : ils forment une approximation de l'unité (positifs, de masse 1, concentrés en 0), donc f ∗ p_n → f uniformément, et f ∗ p_n est polynomiale sur [−1/2, 1/2]. Conséquences : densité des polynômes, problème des moments." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "wz-heine": { t: "Continuité uniforme", b: R`<p>Une fonction continue sur $\mathbb R$ et nulle hors d'un segment est uniformément continue et bornée (Heine sur un segment plus grand).</p>` },
  "wz-bern": { t: "Inégalité de Bernoulli", b: R`<p>Pour $u\in[0,1]$ et $n\in\mathbb N$ : $(1-u)^n\geqslant1-nu$ (récurrence, ou convexité de $u\mapsto(1-u)^n$).</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> On note $E$ l'ensemble des fonctions continues $\mathbb R\to\mathbb C$ nulles hors d'un segment. Une suite $(k_n)$ de fonctions continues par morceaux intégrables est une <b>approximation de l'unité</b> si $k_n\geqslant0$, $\int_{\mathbb R}k_n = 1$, et pour tout $\delta>0$, $\int_{|y|\geqslant\delta}k_n(y)\,dy\to0$. On note $(k\ast f)(x) = \int_{\mathbb R}k(y)f(x-y)\,dy$. Pour $n\in\mathbb N$, $p_n(x) = \frac{(1-x^2)^n}{a_n}$ si $|x|\leqslant1$, $0$ sinon, avec $a_n = \int_{-1}^1(1-x^2)^ndx$.</p>`;

/* Figures */
const an = n => { let s = 0, N = 2000; for (let k = 0; k < N; k++) { const x = -1 + 2 * (k + 0.5) / N; s += (1 - x * x) ** n; } return s * 2 / N; };
const A = { 2: an(2), 10: an(10), 50: an(50) };
const pn = (n, x) => Math.abs(x) <= 1 ? (1 - x * x) ** n / A[n] : 0;
const figLandau = GRAPH({ w: 440, h: 230, x: [-1.1, 1.1], y: [0, 4.3], xt: [-1, -0.5, 0.5, 1], xtl: ["−1", "−1/2", "1/2", "1"], yt: [1, 2, 3, 4], xl: "x",
  curves: [{ f: x => pn(2, x), c: "b", lab: [0.55, 0.9, "n = 2"] }, { f: x => pn(10, x), c: "g", lab: [0.3, 1.9, "n = 10"] }, { f: x => pn(50, x), c: "r", lab: [0.12, 3.8, "n = 50"] }] },
  R`Les noyaux de Landau $p_n$ : positifs, d'intégrale $1$, de plus en plus concentrés en $0$ (leur hauteur $\frac1{a_n}$ croît comme $\sqrt{\frac n\pi}$). Hors de $[-\delta,\delta]$, leur masse est $\leqslant\frac{3\sqrt n}2(1-\delta^2)^n\to0$.`, "Noyaux de Landau");
const f0 = x => Math.max(0, 0.4 - Math.abs(x - 0.05)) + (Math.abs(x) < 0.45 ? 0.15 * Math.sin(9 * x) * (0.45 - Math.abs(x)) * 4 : 0);
const conv = (n, x) => { let s = 0, N = 600; for (let k = 0; k < N; k++) { const t = -0.5 + (k + 0.5) / N; s += pn(n, x - t) * f0(t); } return s / N; };
const figConv = GRAPH({ w: 440, h: 230, x: [-0.5, 0.5], y: [-0.15, 0.6], xt: [-0.5, -0.25, 0.25, 0.5], xtl: ["−1/2", "−1/4", "1/4", "1/2"], yt: [0.2, 0.4], ytl: ["0,2", "0,4"], xl: "x",
  curves: [{ f: f0, c: "k", n: 400, lab: [0.1, 0.55, "f"] }, { f: x => conv(10, x), c: "b", n: 120, lab: [-0.45, 0.12, "f ∗ p₁₀"] }, { f: x => conv(50, x), c: "r", n: 120, lab: [-0.35, 0.3, "f ∗ p₅₀"] }] },
  R`Une fonction continue $f$ nulle hors de $[-\frac12,\frac12]$ (noir) et les polynômes $f\ast p_{10}$, $f\ast p_{50}$ (de degrés $20$ et $100$) restreints à $[-\frac12,\frac12]$. La convolution « lisse » $f$ en la moyennant contre $p_n$ ; plus $n$ est grand, plus la moyenne est locale.`, "Approximation par convolution");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "weier-1", ...P, part: "Partie I", time: "25 min",
  title: "Approximation de l'unité",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $(k_n)$ une approximation de l'unité et $f\in E$.</p><ol start="1">
<li>Montrer que $(k_n\ast f)(x)-f(x) = \int k_n(y)\big(f(x-y)-f(x)\big)dy$.</li>
<li>Soit $\varepsilon>0$. En coupant l'intégrale en $|y|\lt\delta$ et $|y|\geqslant\delta$ (avec $\delta$ donné par la continuité uniforme de $f$), montrer que $\|k_n\ast f-f\|_\infty\to0$.</li></ol>`,
  decode: { donnees: [R`$f$ uniformément continue et bornée.`], but: R`Montrer $k_n\ast f\to f$ uniformément.`, cles: {} },
  steps: [
    Q(1, "Écriture de l'écart", R`<p>$\int k_n = 1$.</p>`, R`<p>Comme $\int k_n = 1$, $f(x) = \int k_n(y)f(x)\,dy$, d'où $(k_n\ast f)(x)-f(x) = \int k_n(y)\big(f(x-y)-f(x)\big)dy$.</p>`),
    Q(2, "Convergence uniforme", R`<p>$|f(x-y)-f(x)|\leqslant\varepsilon$ si $|y|\lt\delta$, et $\leqslant2M$ toujours.</p>`, R`<p>$f$ est bornée par $M$ et uniformément continue : soit $\delta>0$ avec $|f(x-y)-f(x)|\leqslant\varepsilon$ dès que $|y|\lt\delta$. Comme $k_n\geqslant0$ :</p>$$\begin{aligned}|(k_n\ast f)(x)-f(x)|&\leqslant\int_{|y|\lt\delta}k_n(y)\varepsilon\,dy+\int_{|y|\geqslant\delta}k_n(y)\cdot2M\,dy\\&\leqslant\varepsilon+2M\int_{|y|\geqslant\delta}k_n.\end{aligned}$$<p>Le dernier terme tend vers $0$ : il est $\leqslant\varepsilon$ pour $n\geqslant N$, avec $N$ indépendant de $x$. Donc $\|k_n\ast f-f\|_\infty\leqslant(1+2M)\varepsilon$ pour $n\geqslant N$.</p>`, ["wz-heine"])
  ],
  piege: R`La positivité de $k_n$ sert à majorer $\big|\int k_n\,g\big|$ par $\int k_n|g|$. Sans elle, il faudrait supposer $\int|k_n|$ bornée.`,
  methode: R`Approximation de l'unité : couper en « près de $0$ » (continuité uniforme) et « loin de $0$ » (masse qui tend vers $0$).`
},

/* ===================== Partie II ===================== */
{ id: "weier-2", ...P, part: "Partie II", time: "35 min",
  title: "Les noyaux de Landau",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="3">
<li>Montrer que $a_n\geqslant\frac4{3\sqrt n}$. (Minorer $(1-x^2)^n$ par $1-nx^2$ sur $[-\frac1{\sqrt n},\frac1{\sqrt n}]$.)</li>
<li>En déduire que $(p_n)$ est une approximation de l'unité.</li>
<li>Soit $f\in E$ nulle hors de $[-\frac12,\frac12]$. Montrer que $f\ast p_n$ coïncide sur $[-\frac12,\frac12]$ avec un polynôme de degré $\leqslant2n$.</li></ol>`,
  decode: { donnees: [R`Bernoulli.`], but: R`Construire des noyaux polynomiaux.`, cles: {} },
  steps: [
    Q(3, "Minoration de a_n", R`<p>Bernoulli avec $u = x^2\leqslant\frac1n$.</p>`, R`<p>Pour $|x|\leqslant\frac1{\sqrt n}$, Bernoulli donne $(1-x^2)^n\geqslant1-nx^2\geqslant0$. Par positivité de l'intégrande :</p>$$a_n\geqslant\int_{-1/\sqrt n}^{1/\sqrt n}(1-nx^2)\,dx = \frac2{\sqrt n}-\frac{2n}{3n^{3/2}} = \frac4{3\sqrt n}.$$`, ["wz-bern"]),
    Q(4, "Masse loin de 0", R`<p>Pour $\delta\leqslant|x|\leqslant1$ : $(1-x^2)^n\leqslant(1-\delta^2)^n$.</p>`, R`<p>$p_n\geqslant0$ et $\int p_n = 1$ par construction. Pour $0\lt\delta\lt1$ :</p>$$\int_{|y|\geqslant\delta}p_n\leqslant\frac{2(1-\delta^2)^n}{a_n}\leqslant\frac{3\sqrt n}2(1-\delta^2)^n\xrightarrow[n\to\infty]{}0,$$<p>par croissances comparées ($0\lt1-\delta^2\lt1$). Pour $\delta\geqslant1$ l'intégrale est nulle. Donc $(p_n)$ est une approximation de l'unité.</p>${figLandau}`),
    Q(5, "Le convolé est polynomial", R`<p>Pour $x,t\in[-\frac12,\frac12]$, $|x-t|\leqslant1$, donc $p_n(x-t) = \frac{(1-(x-t)^2)^n}{a_n}$, polynôme en $x$.</p>`, R`<p>$(f\ast p_n)(x) = \int f(t)p_n(x-t)\,dt = \int_{-1/2}^{1/2}f(t)p_n(x-t)\,dt$. Pour $x\in[-\frac12,\frac12]$ et $t\in[-\frac12,\frac12]$, $|x-t|\leqslant1$, donc $p_n(x-t) = \frac1{a_n}(1-(x-t)^2)^n = \sum_{k=0}^{2n}q_k(t)x^k$ avec $q_k$ polynomiales en $t$. Par linéarité de l'intégrale :</p>$$(f\ast p_n)(x) = \sum_{k=0}^{2n}\Big(\int_{-1/2}^{1/2}f(t)q_k(t)\,dt\Big)x^k,$$<p>polynôme de degré $\leqslant2n$ sur $[-\frac12,\frac12]$.</p>`)
  ],
  piege: R`$p_n$ n'est polynomial que sur $[-1,1]$ : c'est pourquoi on restreint $x$ et le support de $f$ à $[-\frac12,\frac12]$, pour que $x-t$ reste dans $[-1,1]$.`,
  methode: R`Pour approcher par des polynômes : convoler avec un noyau polynomial sur une zone assez grande.`
},

/* ===================== Partie III ===================== */
{ id: "weier-3", ...P, part: "Partie III", time: "30 min",
  title: "Le théorème et ses conséquences",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="6">
<li>(<b>Weierstrass</b>) Soit $f : [a,b]\to\mathbb C$ continue. En prolongeant $f$ en une fonction de $E$ et par un changement de variable affine, montrer qu'il existe des polynômes $P_n$ avec $\|P_n-f\|_{\infty,[a,b]}\to0$.</li>
<li>(<b>Moments</b>) Soit $f$ continue sur $[0,1]$ avec $\int_0^1f(x)x^k\,dx = 0$ pour tout $k\in\mathbb N$. Montrer que $f = 0$.</li>
<li>Montrer qu'une limite uniforme sur $\mathbb R$ de polynômes est un polynôme. Le théorème de Weierstrass s'étend-il à $\mathbb R$ ?</li></ol>`,
  decode: { donnees: [R`Parties I et II.`], but: R`Conclure et exploiter la densité.`, cles: {} },
  steps: [
    Q(6, "Le théorème de Weierstrass", R`<p>Prolonger par des segments affines jusqu'à $0$ sur $[a-1,a]$ et $[b,b+1]$ ; $h(u) = \alpha u+\beta$ envoie $[-\frac12,\frac12]$ sur $[a-1,b+1]$.</p>`, R`<p>On prolonge $f$ par $0$ hors de $[a-1,b+1]$ et de façon affine sur $[a-1,a]$ (de $0$ à $f(a)$) et sur $[b,b+1]$ (de $f(b)$ à $0$) : le prolongement est dans $E$. Soit $h(u) = \alpha u+\beta$ l'application affine qui envoie $[-\frac12,\frac12]$ sur $[a-1,b+1]$ ($\alpha = b-a+2$, $\beta = \frac{a+b}2$). Alors $g = f\circ h$ est dans $E$, nulle hors de $[-\frac12,\frac12]$. Par les Parties I et II, $g\ast p_n$ est un polynôme $Q_n$ sur $[-\frac12,\frac12]$ et $\|Q_n-g\|_{\infty,[-1/2,1/2]}\to0$. Alors $P_n(x) = Q_n\big(\frac{x-\beta}\alpha\big)$ est un polynôme, et $\sup_{[a,b]}|P_n-f|\leqslant\sup_{[-1/2,1/2]}|Q_n-g|\to0$.</p>${figConv}`),
    Q(7, "Problème des moments", R`<p>$\int fP = 0$ pour tout polynôme $P$ ; prendre $P_n\to\bar f$ uniformément.</p>`, R`<p>Par linéarité, $\int_0^1fP = 0$ pour tout polynôme $P$. Soit $P_n\to\bar f$ uniformément sur $[0,1]$ (Q6). Alors $\big|\int f\bar f-\int fP_n\big|\leqslant\|f\|_\infty\|\bar f-P_n\|_\infty\to0$, donc $\int_0^1|f|^2 = \lim\int fP_n = 0$. Comme $|f|^2$ est continue positive, $f = 0$.</p>`),
    Q(8, "Pas de densité sur ℝ", R`<p>Si $\|P_n-P_m\|_{\infty,\mathbb R}\lt1$, alors $P_n-P_m$ est un polynôme borné sur $\mathbb R$, donc constant.</p>`, R`<p>Soit $(P_n)$ une suite de polynômes convergeant uniformément sur $\mathbb R$ vers $f$. Pour $n,m\geqslant N$, $P_n-P_m$ est un polynôme borné sur $\mathbb R$, donc constant : $P_n = P_N+c_n$. Les constantes $c_n$ convergent (évaluer en $0$), donc $f = P_N+\lim c_n$ est un polynôme. En particulier $x\mapsto\sin x$ (ou $\arctan$) n'est pas limite uniforme de polynômes sur $\mathbb R$ : le théorème de Weierstrass est propre aux segments (compacts).</p>`)
  ],
  piege: R`Le théorème de Weierstrass vaut sur un segment. Sur $\mathbb R$, ou même sur $[0,+\infty[$, la convergence uniforme par des polynômes est très restrictive.`,
  methode: R`Densité d'une famille dans $\mathcal C([a,b])$ : construire une approximation de l'unité dans la famille. Densité des polynômes $\Rightarrow$ une fonction orthogonale à tous les $x^k$ est nulle.`
}
]);
})();

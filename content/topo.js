/* Topologie des espaces vectoriels normés : exercices (Spé), avec figures */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 2 };
const { FIG, S, PL, GRAPH, f1 } = window.__LA;
const dot = (x, y, c = "b", r = 3.5) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" class="h${c}"/>`;

/* ---------- Figures ---------- */
const figU = GRAPH({ w: 440, h: 230, x: [-6, 6], y: [-0.3, 1.15], xt: [-4, -2, 2, 4], yt: [0.5, 1], xl: "x",
  curves: [{ f: x => 1 / (1 + x * x), c: "b", lab: [1.3, 0.78, "f(x) = 1/(1+x²)"] }, { f: x => 1 / (1 + x * x) - 0.15, c: "r", lab: [3.2, 0.13, "g = f − ε/2"] }] },
  R`Avec $\varepsilon = 0{,}3$ : $g$ est à distance $\frac\varepsilon2$ de $f$, mais devient négative quand $|x|$ est grand (sous l'axe), donc $g\notin U$.`, "f et g = f − ε/2");
const b0 = 1.8955;
const figSinc = GRAPH({ w: 460, h: 240, x: [-8.5, 8.5], y: [-0.35, 1.15], xt: [-6.283, -3.1416, 3.1416, 6.283], xtl: ["−2π", "−π", "π", "2π"], yt: [0.5, 1], ytl: ["1/2", "1"], xl: "x",
  hl: [{ y: 0.5 }], curves: [{ f: x => x === 0 ? 1 : Math.sin(x) / x, c: "b", n: 500, lab: [2.3, 0.85, "y = sin x / x"] }],
  extra: (X, Y) => `<line x1="${f1(X(-b0))}" y1="${f1(Y(0))}" x2="${f1(X(b0))}" y2="${f1(Y(0))}" style="stroke:var(--gold-ink);stroke-width:5"/>` + [-2, -1, 1, 2].map(k => dot(X(k * Math.PI), Y(0), "r", 4)).join("") + S(X(0) + 4, Y(0) + 26, "B", "middle", "sm g") + S(X(2 * Math.PI) + 6, Y(0) - 8, "A", "start", "sm r") },
  R`En rouge, les points de $A = \pi\mathbb Z^*$ (une infinité, de plus en plus loin) ; en jaune, $B = [-b,b]$ où $b\approx1{,}90$ est le premier point où la courbe redescend à $\frac12$.`, "Graphe de sin x / x");
const figRac = GRAPH({ w: 420, h: 240, x: [-3, 3], y: [-1.2, 3.4], xt: [-2, -1, 1, 2], yt: [1, 2, 3], xl: "x",
  curves: [{ f: x => Math.sqrt(x * x + 1), c: "b", lab: [-2.9, 3.25, "y = √(x²+1)"] }, { f: x => x, c: "r", dash: true, lab: [2.1, 1.6, "y = x"] }, { f: x => Math.abs(x), c: "k", dash: true, lab: [-2.3, 1.7, "y = |x|", "end"] }] },
  R`La courbe de $f$ reste strictement au-dessus de $y = |x|$, donc de $y = x$ : pas de point fixe. Sa pente $\frac{x}{\sqrt{x^2+1}}$ est toujours $< 1$ en valeur absolue, mais tend vers $1$.`, "Graphe de √(x²+1)");
const figBalls = (() => {
  const W = 430, H = 220, cx = 110, cy = 110, r = 80;
  const ballIn = () => { let s = `<circle cx="${cx}" cy="${cy}" r="${r}" class="zb"/>` + dot(cx, cy, "k") + S(cx - 6, cy - 8, "a", "end", "it"); const xx = cx + r, yy = cy; s += `<line class="thin" x1="${cx}" y1="${cy}" x2="${xx + 10}" y2="${yy}"/>` + dot(xx, yy, "r", 4) + S(xx + 8, yy + 16, "x", "start", "it"); [0.5, 0.75, 0.875, 0.94].forEach((t, i) => { s += dot(cx + t * r, cy, "b", 3); if (i < 2) s += S(cx + t * r, cy - 9, "x" + "₁₂"[i] , "middle", "sm b"); }); return s; };
  const ballOut = () => { const c2 = 320; let s = `<circle cx="${c2}" cy="${cy}" r="${r}" class="zb"/>` + dot(c2, cy, "k") + S(c2 - 6, cy - 8, "a", "end", "it"); const xx = c2 + r; s += `<line class="thin" x1="${c2}" y1="${cy}" x2="${W - 4}" y2="${cy}"/>` + dot(xx, cy, "r", 4) + S(xx - 6, cy + 18, "x", "end", "it"); [1.25, 1.12, 1.06].forEach(t => { s += dot(c2 + t * r, cy, "g", 3); }); s += S(c2 + 1.25 * r, cy - 9, "x′ₙ", "middle", "sm g"); return s; };
  return FIG(W, H, ballIn() + ballOut(), R`À gauche : $x_n = \frac1na+\left(1-\frac1n\right)x$ est dans la boule ouverte et tend vers $x$ (sur la sphère). À droite : $x'_n = -\frac1na+\left(1+\frac1n\right)x$ est hors de la boule fermée et tend aussi vers $x$.`, "Deux suites qui approchent un point de la sphère");
})();
const figExp = GRAPH({ w: 420, h: 240, x: [-0.2, 3], y: [0, 8], xt: [1, 2], yt: [2, 4, 6], xl: "t",
  vl: [{ x: 2 }], curves: [{ f: t => Math.exp(t), c: "b", lab: [2.05, 7.3, "y = eᵗ"] }, { f: t => 2 + t, c: "r", lab: [2.5, 3.9, "y = 2 + t"] }] },
  R`Pour $t\geqslant2$, la courbe de l'exponentielle est au-dessus de la droite $y = 2+t$ : les fonctions constantes égales à $t\geqslant2$ sont dans $A$.`, "eᵗ et 2 + t");
const figLin = GRAPH({ w: 380, h: 250, x: [-0.15, 1.2], y: [-1.2, 1.2], xt: [0.5, 1], xtl: ["1/2", "1"], yt: [-1, 1], xl: "x",
  curves: [{ f: x => x <= 1 ? 1 - 2 * x : NaN, c: "b", lab: [0.62, 0.55, "f(x) = 1 − 2x"] }],
  extra: (X, Y) => `<rect x="${f1(X(0))}" y="${f1(Y(1))}" width="${f1(X(1) - X(0))}" height="${f1(Y(-1) - Y(1))}" style="fill:none;stroke:var(--muted);stroke-dasharray:4 4"/>` },
  R`$f(x) = 1-2x$ vérifie $f(0) = 1$ et $\int_0^1f = 0$ (les deux triangles ont la même aire), et $|f|\leqslant1$ : elle réalise $d(0,A) = 1$.`, "f(x) = 1 − 2x");
const gn = (n, x) => { const a = 2 * n / (2 * n - 1); return x <= 1 / n ? n * a * x : a; };
const figGn = GRAPH({ w: 400, h: 240, x: [-0.08, 1.12], y: [0, 1.6], xt: [1 / 6, 1 / 3, 1], xtl: ["1/6", "1/3", "1"], yt: [1], xl: "x",
  curves: [{ f: x => x <= 1 ? gn(3, x) : NaN, c: "b", n: 600, lab: [0.55, 1.28, "g₃"] }, { f: x => x <= 1 ? gn(6, x) : NaN, c: "r", n: 600, lab: [0.55, 1.03, "g₆"] }] },
  R`$g_n$ monte linéairement de $0$ à $a_n = \frac{2n}{2n-1}$ sur $\left[0,\frac1n\right]$, puis reste constante. L'aire sous la courbe vaut $1$, et $a_n\to1$ : la distance tend vers $1$ sans jamais l'atteindre.`, "Les fonctions g₃ et g₆");
const figXsur = GRAPH({ w: 440, h: 240, x: [-5, 5], y: [-0.7, 0.7], xt: [-4, -1, 1, 4], yt: [-0.5, 0.5], ytl: ["−1/2", "1/2"], xl: "x",
  curves: [{ f: x => x / (1 + x * x), c: "b", lab: [1.6, 0.48, "y = x/(1+x²)"] }] },
  R`Dans $E = \mathbb R$ : $f$ atteint son maximum $\frac12$ en $1$ et son minimum $-\frac12$ en $-1$, et prend toutes les valeurs entre les deux : $f(\mathbb R) = \left[-\frac12,\frac12\right]$.`, "Graphe de x/(1+x²)");
const figCourbe = (() => {
  const g = x => x * x * (x - 1) * (x - 3);
  return GRAPH({ w: 420, h: 300, x: [-1, 3.6], y: [-2.4, 2.4], xt: [1, 2, 3], yt: [-2, -1, 1, 2], xl: "x",
    extra: (X, Y) => { let s = ""; for (let k = 0; k <= 1400; k++) { const x = -1 + 4.6 * k / 1400, D = 4 - g(x); if (D < 0) continue; [2 + Math.sqrt(D), 2 - Math.sqrt(D)].forEach(q => { if (q >= 0) { const y = Math.sqrt(q); s += `<circle cx="${f1(X(x))}" cy="${f1(Y(y))}" r="1.2" class="hb"/><circle cx="${f1(X(x))}" cy="${f1(Y(-y))}" r="1.2" class="hb"/>`; } }); } return s; } },
    R`La courbe $E$ tracée point par point (pour chaque $x$, on résout $y^4-4y^2+x^2(x-1)(x-3) = 0$ en $y^2$). Elle est bornée : c'est une partie fermée bornée du plan.`, "La courbe E");
})();
const fn = (n, x) => x <= 0.5 ? 1 : x <= 0.5 + 1 / n ? -n * x + (n + 2) / 2 : 0;
const figFn = GRAPH({ w: 420, h: 230, x: [-0.08, 1.12], y: [0, 1.3], xt: [0.5, 0.75, 1], xtl: ["1/2", "3/4", "1"], yt: [1], xl: "x",
  curves: [{ f: x => x <= 1 ? fn(4, x) : NaN, c: "b", n: 600, lab: [0.77, 0.55, "f₄"] }, { f: x => x <= 1 ? fn(12, x) : NaN, c: "r", n: 600, lab: [0.42, 0.8, "f₁₂", "end"] }] },
  R`$f_n$ vaut $1$ sur $\left[0,\frac12\right]$, descend en ligne droite jusqu'à $0$ sur $\left[\frac12,\frac12+\frac1n\right]$, puis vaut $0$. Quand $n$ grandit, la pente devient verticale : la « limite » serait la fonction en escalier, qui n'est pas continue.`, "Les fonctions f₄ et f₁₂");

LEMME.rappels({
  "top-fermeseq": { t: "Caractérisation séquentielle des fermés", b: R`$$F\text{ fermé}\iff\forall(x_n)\in F^{\mathbb N},\ \big(x_n\to\ell\in E\Rightarrow\ell\in F\big).$$$$x\in\overline A\iff\exists(a_n)\in A^{\mathbb N},\ a_n\to x.$$` },
  "top-ouvert": { t: "Ouvert, intérieur", b: R`$$\begin{gathered}U\text{ ouvert}\iff\forall x\in U,\ \exists r>0,\ B(x,r)\subset U,\\[4pt]x\in\mathring A\iff\exists r>0,\ B(x,r)\subset A.\end{gathered}$$$$\begin{gathered}\bigcup_iU_i\text{ ouvert},\\[4pt]f\text{ continue}\ \Longrightarrow\ f^{-1}(\text{ouvert})\text{ ouvert},\ f^{-1}(\text{fermé})\text{ fermé}.\end{gathered}$$` },
  "top-equiv": { t: "Normes équivalentes", b: R`$$N_1\sim N_2\iff\exists\alpha,\beta>0,\ \alpha N_1\leqslant N_2\leqslant\beta N_1;\qquad\frac{N_2(f_n)}{N_1(f_n)}\to+\infty\ \Longrightarrow\ N_1\not\sim N_2.$$` },
  "top-lc": { t: "Applications linéaires continues", b: R`$$u\text{ continue}\iff\exists C,\ \forall x,\ \|u(x)\|\leqslant C\|x\|;\qquad|||u||| = \sup_{x\neq0}\frac{\|u(x)\|}{\|x\|}.$$` },
  "top-compact": { t: "Compacité", b: R`$$K\text{ compact}\iff\forall(x_n)\in K^{\mathbb N},\ \exists\varphi,\ x_{\varphi(n)}\to\ell\in K.$$$$\begin{gathered}f\text{ continue}\Rightarrow f(K)\text{ compact},\\[4pt]K\times K'\text{ compact},\\[4pt]\dim E\lt\infty\ :\ \text{compact}\iff\text{fermé borné}.\end{gathered}$$` },
  "top-cauchy": { t: "Suites de Cauchy, complétude", b: R`$$(u_n)\text{ de Cauchy}\iff\forall\varepsilon>0,\ \exists N,\ \forall p,q\geqslant N,\ d(u_p,u_q)\leqslant\varepsilon;\qquad\text{CV}\Rightarrow\text{Cauchy}.$$` },
  "top-trirev": { t: "Inégalité triangulaire", b: R`$$\|x+y\|\leqslant\|x\|+\|y\|,\qquad\big|\|x\|-\|y\|\big|\leqslant\|x-y\|.$$` }
});

LEMME.exercises([
{ id: "topo-01", ...P, level: 1, time: "10 min",
  title: "Une inégalité entre quatre points",
  enonce: R`<p>Soit $(E,\|\cdot\|)$ un espace vectoriel normé et $x,y,z,t\in E$. Montrer que</p>$$\|x-y\|+\|z-t\|\leqslant\|x-z\|+\|y-t\|+\|x-t\|+\|y-z\|.$$`,
  decode: { donnees: [R`Inégalité triangulaire en passant par un point intermédiaire.`], but: R`Majorer chaque terme de gauche de deux façons, puis additionner.`, cles: {} },
  steps: [
    { t: "Quatre inégalités triangulaires", h: R`<p>$x-y = (x-z)+(z-y)$, etc.</p>`, b: R`<p>On écrit chaque différence en passant par un autre point, puis on applique l'inégalité triangulaire :</p>$$\begin{cases}\|x-y\| = \|(x-z)+(z-y)\|\leqslant\|x-z\|+\|y-z\|\\\|x-y\| = \|(x-t)+(t-y)\|\leqslant\|x-t\|+\|y-t\|\\\|z-t\| = \|(z-x)+(x-t)\|\leqslant\|x-z\|+\|x-t\|\\\|z-t\| = \|(z-y)+(y-t)\|\leqslant\|y-z\|+\|y-t\|\end{cases}$$<p>(On utilise $\|z-y\| = \|y-z\|$, car $\|-u\| = \|u\|$.)</p>`, rappels: ["top-trirev"] },
    { t: "On additionne", h: R`<p>Chaque terme de droite apparaît deux fois.</p>`, b: R`<p>En additionnant les quatre lignes, chacun des quatre termes de droite apparaît exactement deux fois :</p>$$2\|x-y\|+2\|z-t\|\leqslant2\big(\|x-z\|+\|y-t\|+\|x-t\|+\|y-z\|\big).$$<p>On divise par $2$ :</p><div class="sbox">$$\|x-y\|+\|z-t\|\leqslant\|x-z\|+\|y-t\|+\|x-t\|+\|y-z\|.$$</div>` }
  ],
  piege: R`Majorer $\|x-y\|$ et $\|z-t\|$ d'une seule façon chacun : on n'obtient pas les quatre termes de droite.`,
  methode: R`Inégalité entre distances : passer par des points intermédiaires, écrire plusieurs majorations et les additionner.`
},
{ id: "topo-02", ...P, level: 2, time: "30 min",
  title: "Adhérence et intérieur d'un produit",
  enonce: R`<p>Soit $E,F$ deux espaces vectoriels normés, $A\subset E$, $B\subset F$. On munit $E\times F$ de la norme $N(x,y) = \max(\|x\|_E,\|y\|_F)$. Montrer :</p><p>a) $\overline{A\times B} = \overline A\times\overline B$ ;<br>b) $(A\times B)^\circ = \mathring A\times\mathring B$.</p>`,
  decode: { donnees: [R`Une suite $(x_n,y_n)$ converge dans $E\times F$ si et seulement si $(x_n)$ et $(y_n)$ convergent.`], but: R`a) par les suites ; b) par les boules : $B_N((x,y),r) = B(x,r)\times B(y,r)$.`, cles: {} },
  steps: [
    { t: "a) Adhérence par les suites", h: R`<p>Convergence composante par composante.</p>`, b: R`<p>Avec la norme $N$, $N\big((x_n,y_n)-(x,y)\big) = \max(\|x_n-x\|,\|y_n-y\|)$ tend vers $0$ si et seulement si les deux termes tendent vers $0$. Donc :</p>$$(x,y)\in\overline{A\times B}\iff\exists(x_n,y_n)\in A\times B,\ (x_n,y_n)\to(x,y)$$$$\iff\begin{cases}\exists(x_n)\in A^{\mathbb N},\ x_n\to x\\\exists(y_n)\in B^{\mathbb N},\ y_n\to y\end{cases}\iff\begin{cases}x\in\overline A\\y\in\overline B\end{cases}$$<div class="sbox">$$\overline{A\times B} = \overline A\times\overline B.$$</div>`, rappels: ["top-fermeseq"] },
    { t: "b) Intérieur par les boules", h: R`<p>$B_N((x,y),r) = B(x,r)\times B(y,r)$.</p>`, b: R`<p>Pour la norme $N$ : $N\big((u,v)-(x,y)\big)< r\iff\|u-x\|< r$ et $\|v-y\|< r$, donc</p>$$B_N\big((x,y),r\big) = B(x,r)\times B(y,r).$$<ul><li>Si $(x,y)\in(A\times B)^\circ$ : il existe $r>0$ avec $B(x,r)\times B(y,r)\subset A\times B$, donc $B(x,r)\subset A$ et $B(y,r)\subset B$ : $x\in\mathring A$, $y\in\mathring B$.</li><li>Si $x\in\mathring A$ et $y\in\mathring B$ : $B(x,r_1)\subset A$, $B(y,r_2)\subset B$. Avec $r = \min(r_1,r_2)$, $B_N((x,y),r)\subset A\times B$.</li></ul><div class="sbox">$$(A\times B)^\circ = \mathring A\times\mathring B.$$</div><p>(Toutes les normes « produit » usuelles sur $E\times F$ sont équivalentes à $N$, donc le résultat ne dépend pas de ce choix.)</p>`, rappels: ["top-ouvert"] }
  ],
  piege: R`Croire qu'une boule du produit est un produit de boules pour toute norme : c'est vrai pour la norme $\max$ ; pour une autre norme équivalente, on encadre la boule par des produits de boules.`,
  methode: R`Adhérence : suites. Intérieur : boules. Dans un produit muni de la norme max, tout se fait composante par composante.`
},
{ id: "topo-03", ...P, level: 2, time: "25 min",
  title: "Fonctions positives : fermé ; strictement positives : pas ouvert",
  enonce: R`<p>Soit $E$ l'espace des fonctions continues bornées de $\mathbb R$ dans $\mathbb R$, muni de $\|\cdot\|_\infty$.</p><p>a) $F = \{f\in E : \forall x,\ f(x)\geqslant0\}$ est-il fermé dans $E$ ?<br>b) $U = \{f\in E : \forall x,\ f(x)>0\}$ est-il ouvert dans $E$ ?</p>`,
  decode: { donnees: [R`$|f_n(x)-f(x)|\leqslant\|f_n-f\|_\infty$ pour tout $x$.`], but: R`a) caractérisation séquentielle ; b) trouver $f\in U$ dont aucune boule n'est incluse dans $U$.`, cles: {} },
  steps: [
    { t: "a) F est fermé", h: R`<p>Passer à la limite dans $f_n(x)\geqslant0$.</p>`, b: R`<p>Soit $(f_n)$ une suite de $F$ qui converge vers $f\in E$. Pour tout $x$ : $|f_n(x)-f(x)|\leqslant\|f_n-f\|_\infty\to0$, donc $f_n(x)\to f(x)$. Comme $f_n(x)\geqslant0$ pour tout $n$, le passage à la limite dans l'inégalité donne $f(x)\geqslant0$. Donc $f\in F$.</p><div class="sbox"><p style="margin:0">$F$ est fermé dans $E$.</p></div>`, rappels: ["top-fermeseq"] },
    { t: "b) U n'est pas ouvert", h: R`<p>$f(x) = \frac1{x^2+1}$ tend vers $0$ à l'infini.</p>`, b: R`<p>Soit $f(x) = \frac1{x^2+1}$ : continue, bornée, strictement positive, donc $f\in U$. Soit $\varepsilon>0$ et $g = f-\frac\varepsilon2$ (une fonction constante retranchée). Alors $\|f-g\|_\infty = \frac\varepsilon2< \varepsilon$, donc $g\in B(f,\varepsilon)$. Mais $g(x)\to-\frac\varepsilon2< 0$ quand $x\to+\infty$ : $g$ prend des valeurs négatives, $g\notin U$.</p>${figU}<p>Aucune boule centrée en $f$ n'est incluse dans $U$ :</p><div class="sbox"><p style="margin:0">$U$ n'est pas ouvert dans $E$.</p></div><p>Remarque : sur $[0,1]$ (compact), $U$ serait ouvert, car une fonction continue $>0$ sur un compact est minorée par un $m>0$, et $B(f,m)\subset U$.</p>`, rappels: ["top-ouvert"] }
  ],
  piege: R`Croire que « $>0$ » donne toujours un ouvert : il faut une marge uniforme, que la fonction $\frac1{x^2+1}$ n'a pas.`,
  methode: R`Montrer qu'une partie n'est pas ouverte : exhiber un point dont toute boule déborde, en construisant un élément proche qui sort de la partie.`
},
{ id: "topo-04", ...P, level: 1, time: "20 min",
  title: "Deux normes équivalentes sur C¹([0, 1])",
  enonce: R`<p>Sur $E = \mathcal C^1([0,1],\mathbb R)$, on pose $\nu_1(f) = |f(0)|+2\int_0^1|f'|$ et $\nu_2(f) = 2|f(0)|+\int_0^1|f'|$. Montrer que $\nu_1$ et $\nu_2$ sont des normes équivalentes.</p>`,
  decode: { donnees: [R`$f$ est déterminée par $f(0)$ et $f'$ : $f(x) = f(0)+\int_0^xf'$.`], but: R`Les trois axiomes, puis un encadrement.`, cles: {} },
  steps: [
    { t: "ν₁ est une norme", h: R`<p>Le point délicat : $\nu_1(f) = 0\Rightarrow f = 0$.</p>`, b: R`<ul><li>$\nu_1(f)$ existe car $f'$ est continue sur $[0,1]$, et $\nu_1(f)\geqslant0$.</li><li><b>Homogénéité</b> : $\nu_1(\alpha f) = |\alpha||f(0)|+2|\alpha|\int|f'| = |\alpha|\nu_1(f)$.</li><li><b>Inégalité triangulaire</b> : $|f(0)+g(0)|\leqslant|f(0)|+|g(0)|$ et $|f'+g'|\leqslant|f'|+|g'|$, donc $\nu_1(f+g)\leqslant\nu_1(f)+\nu_1(g)$.</li><li><b>Séparation</b> : si $\nu_1(f) = 0$, alors $f(0) = 0$ et $\int_0^1|f'| = 0$ ; $|f'|$ est continue positive d'intégrale nulle, donc $f' = 0$ : $f$ est constante, égale à $f(0) = 0$.</li></ul><p>Même preuve pour $\nu_2$ (plus généralement $f\mapsto a|f(0)|+b\int|f'|$ avec $a,b>0$).</p>` },
    { t: "L'équivalence", h: R`<p>Comparer les coefficients $1,2$ et $2,1$.</p>`, b: R`$$\nu_2(f) = 2|f(0)|+\int|f'|\leqslant2|f(0)|+4\int|f'|$$$$= 2\nu_1(f),\qquad\nu_1(f) = |f(0)|+2\int|f'|\leqslant4|f(0)|+2\int|f'|$$$$= 2\nu_2(f).$$<div class="sbox">$$\tfrac12\nu_1\leqslant\nu_2\leqslant2\nu_1 : \text{les normes sont équivalentes.}$$</div><p>Exemple : $f = 1$ donne $\nu_1 = 1$, $\nu_2 = 2$ ; $f(x) = x$ donne $\nu_1 = 2$, $\nu_2 = 1$ : les constantes $\frac12$ et $2$ sont optimales.</p>`, rappels: ["top-equiv"] }
  ],
  piege: R`Dans la séparation, oublier que $f' = 0$ demande la continuité de $|f'|$ (fonction continue positive d'intégrale nulle).`,
  methode: R`Deux normes de même forme avec des coefficients différents : l'encadrement se lit sur les coefficients.`
},
{ id: "topo-05", ...P, level: 2, time: "15 min",
  title: "Translaté et somme d'une partie avec un ouvert",
  enonce: R`<p>Soit $E$ un espace normé et $\Omega$ un ouvert de $E$.</p><p>a) Montrer que pour tout $a\in E$, $a+\Omega = \{a+x : x\in\Omega\}$ est ouvert.<br>b) En déduire que pour toute partie $A$, $A+\Omega = \{a+x : a\in A,\ x\in\Omega\}$ est ouvert.</p>`,
  decode: { donnees: [R`La translation $\tau_{-a} : y\mapsto y-a$ est continue.`], but: R`$a+\Omega = \tau_{-a}^{-1}(\Omega)$, puis réunion.`, cles: {} },
  steps: [
    { t: "a) Image réciproque par une translation", h: R`<p>$y\in a+\Omega\iff y-a\in\Omega$.</p>`, b: R`<p>Pour $y\in E$ : $y\in a+\Omega\iff y-a\in\Omega\iff\tau_{-a}(y)\in\Omega$. Donc $a+\Omega = \tau_{-a}^{-1}(\Omega)$, image réciproque d'un ouvert par l'application continue (1-lipschitzienne) $\tau_{-a}$ : c'est un ouvert.</p><p>Directement avec les boules : si $B(x,r)\subset\Omega$, alors $B(a+x,r) = a+B(x,r)\subset a+\Omega$.</p>`, rappels: ["top-ouvert"] },
    { t: "b) Une réunion d'ouverts", h: R`<p>$A+\Omega = \bigcup_{a\in A}(a+\Omega)$.</p>`, b: R`$$A+\Omega = \bigcup_{a\in A}\big(\{a\}+\Omega\big).$$<p>Une réunion (quelconque) d'ouverts est ouverte.</p><div class="sbox"><p style="margin:0">$A+\Omega$ est ouvert, quelle que soit la partie $A$.</p></div><p>Exemple dans $\mathbb R$ : $\mathbb Z+\,]-\frac14,\frac14[$ est la réunion des intervalles $]k-\frac14,k+\frac14[$.</p>` }
  ],
  piege: R`Croire que $A+F$ est fermé quand $F$ est fermé : c'est faux en général (contrairement au cas des ouverts).`,
  methode: R`Une partie qui s'écrit comme réunion de translatés d'un ouvert est ouverte.`
},
{ id: "topo-06", ...P, level: 2, time: "15 min",
  title: "f(x) + g(y) est continue si et seulement si f et g le sont",
  enonce: R`<p>Soit $E,F,G$ des espaces normés, $A\subset E$, $B\subset F$ non vides, $f : A\to G$, $g : B\to G$, et $\varphi(x,y) = f(x)+g(y)$ sur $A\times B$. Montrer que $\varphi$ est continue si et seulement si $f$ et $g$ le sont.</p>`,
  decode: { donnees: [R`Les projections $(x,y)\mapsto x$ et $(x,y)\mapsto y$ sont continues.`], but: R`Composition dans les deux sens, en fixant une variable.`, cles: {} },
  steps: [
    { t: "Sens direct", h: R`<p>Fixer $b\in B$.</p>`, b: R`<p>$B\neq\varnothing$ : soit $b\in B$. Pour $x\in A$, $f(x) = \varphi(x,b)-g(b)$. L'application $x\mapsto(x,b)$ est continue, donc $x\mapsto\varphi(x,b)$ aussi (composée), et en retranchant la constante $g(b)$, $f$ est continue. De même pour $g$ (avec $a\in A$ fixé).</p>` },
    { t: "Réciproque", h: R`<p>$\varphi = f\circ\mathrm{pr}_1+g\circ\mathrm{pr}_2$.</p>`, b: R`<p>Les projections $\mathrm{pr}_1(x,y) = x$ et $\mathrm{pr}_2(x,y) = y$ sont continues (1-lipschitziennes pour la norme max). Donc $\varphi = f\circ\mathrm{pr}_1+g\circ\mathrm{pr}_2$ est continue (composées et somme).</p><div class="sbox"><p style="margin:0">$\varphi$ continue $\iff f$ et $g$ continues.</p></div>` }
  ],
  piege: R`Oublier l'hypothèse $B\neq\varnothing$ : elle permet de fixer un $b$ dans le sens direct.`,
  methode: R`Fonction de deux variables : fixer une variable donne une fonction d'une variable ; les projections donnent le retour.`
},
{ id: "topo-07", ...P, level: 1, time: "10 min",
  title: "Une application lipschitzienne de ℝ²",
  enonce: R`<p>Soit $a,b\geqslant0$. On munit $\mathbb R^2$ de $\|(x_1,x_2)\|_1 = |x_1|+|x_2|$ et on pose $f(x_1,x_2) = (ax_2,bx_1)$. Montrer que $f$ est lipschitzienne.</p>`,
  decode: { donnees: [R`$f$ est linéaire.`], but: R`Majorer $\|f(x)-f(y)\|_1$ par $k\|x-y\|_1$.`, cles: {} },
  steps: [
    { t: "Le calcul", h: R`<p>$k = \max(a,b)$.</p>`, b: R`<p>Pour $x = (x_1,x_2)$ et $y = (y_1,y_2)$ :</p>$$\|f(x)-f(y)\|_1 = \|(a(x_2-y_2),\ b(x_1-y_1))\|_1$$$$= a|x_2-y_2|+b|x_1-y_1|\leqslant k\big(|x_1-y_1|+|x_2-y_2|\big),$$<p>avec $k = \max(a,b)$.</p><div class="sbox"><p style="margin:0">$\|f(x)-f(y)\|_1\leqslant\max(a,b)\,\|x-y\|_1$ : $f$ est $\max(a,b)$-lipschitzienne.</p></div><p>La constante est optimale : si $a\geqslant b$, $x = (0,1)$, $y = 0$ donne $\|f(x)\|_1 = a = a\|x\|_1$.</p>` }
  ],
  piege: R`Prendre $k = a+b$ : ça marche, mais ce n'est pas la meilleure constante.`,
  methode: R`Application linéaire : majorer $\|f(x)\|$ par $k\|x\|$ en regroupant coordonnée par coordonnée.`
},
{ id: "topo-08", ...P, level: 2, time: "20 min",
  title: "Norme de l'intégrale pour la norme 1",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$ muni de $\|f\|_1 = \int_0^1|f|$, et $\phi(f) = \int_0^1f$. Montrer que $\phi$ est linéaire continue et calculer $|||\phi|||$.</p>`,
  decode: { donnees: [R`$\left|\int f\right|\leqslant\int|f|$.`], but: R`Majoration par $1$, puis une fonction qui l'atteint.`, cles: {} },
  steps: [
    { t: "Continuité et majoration", h: R`<p>$|\phi(f)|\leqslant\|f\|_1$.</p>`, b: R`<p>$\phi$ est linéaire (linéarité de l'intégrale) et</p>$$|\phi(f)| = \Big|\int_0^1f\Big|\leqslant\int_0^1|f| = \|f\|_1.$$<p>Donc $\phi$ est continue et $|||\phi|||\leqslant1$.</p>`, rappels: ["top-lc"] },
    { t: "La borne est atteinte", h: R`<p>$f_0 = 1$.</p>`, b: R`<p>Pour $f_0 = 1$ : $\|f_0\|_1 = 1$ et $\phi(f_0) = 1$, donc $\frac{|\phi(f_0)|}{\|f_0\|_1} = 1$ et $|||\phi|||\geqslant1$.</p><div class="sbox">$$|||\phi||| = 1.$$</div><p>(Toute fonction positive non nulle atteint aussi la borne.)</p>` }
  ],
  piege: R`Oublier de montrer que la borne $1$ est la plus petite : il faut une fonction (ou une suite) qui l'atteint.`,
  methode: R`Norme subordonnée : majorer, puis exhiber un vecteur (ou une suite) qui réalise l'égalité.`
},
{ id: "topo-09", ...P, level: 2, time: "15 min",
  title: "La somme de deux compacts est compacte",
  enonce: R`<p>Soit $E$ un espace normé et $K,L$ deux compacts de $E$. Montrer que $K+L = \{k+l : k\in K,\ l\in L\}$ est compact.</p>`,
  decode: { donnees: [R`Bolzano-Weierstrass.`], but: R`Extraire deux fois.`, cles: {} },
  steps: [
    { t: "Par les suites", h: R`<p>Extraire dans $K$, puis dans $L$.</p>`, b: R`<p>Soit $(z_n)$ une suite de $K+L$ : $z_n = k_n+l_n$, $k_n\in K$, $l_n\in L$.</p><ul><li>$K$ compact : il existe une extractrice $\sigma$ avec $k_{\sigma(n)}\to k\in K$.</li><li>$L$ compact : la suite $(l_{\sigma(n)})$ de $L$ a une sous-suite $l_{\sigma(\tau(n))}\to l\in L$.</li><li>$k_{\sigma(\tau(n))}\to k$ aussi (sous-suite d'une suite convergente).</li></ul><p>Donc $z_{\sigma(\tau(n))} = k_{\sigma(\tau(n))}+l_{\sigma(\tau(n))}\to k+l\in K+L$.</p><div class="sbox"><p style="margin:0">$K+L$ est compact.</p></div><p>Autre preuve : $K+L$ est l'image du compact $K\times L$ par l'application continue $(x,y)\mapsto x+y$.</p>`, rappels: ["top-compact"] }
  ],
  piege: R`Extraire séparément dans $(k_n)$ et dans $(l_n)$ avec deux extractrices différentes : il faut extraire la seconde à partir de la première.`,
  methode: R`Compacité séquentielle avec plusieurs suites : extractions successives (diagonale).`
},
{ id: "topo-10", ...P, level: 2, time: "25 min",
  title: "Deux parties définies par sin x / x : compactes ?",
  enonce: R`<p>Soit $f(x) = \frac{\sin x}x$ pour $x\neq0$ et $f(0) = 1$. On pose $A = \{x\in\mathbb R : f(x) = 0\}$ et $B = \{x\in\mathbb R : f(x)\geqslant\frac12\}$. $A$ est-elle compacte ? $B$ est-elle compacte ?</p>`,
  decode: { donnees: [R`Dans $\mathbb R$, compact $\iff$ fermé borné.`], but: R`$A = \pi\mathbb Z^*$ n'est pas bornée ; $B$ est fermée et contenue dans $[-2,2]$.`, cles: {} },
  steps: [
    { t: "f est continue", h: R`<p>$\frac{\sin x}x\to1$ en $0$.</p>`, b: R`<p>$f$ est continue sur $\mathbb R^*$ (quotient), et en $0$ : $\frac{\sin x}x\to1 = f(0)$. Donc $f$ est continue sur $\mathbb R$.</p>${figSinc}` },
    { t: "A n'est pas compacte", h: R`<p>$A = \pi\mathbb Z^*$.</p>`, b: R`<p>$f(x) = 0\iff x\neq0$ et $\sin x = 0\iff x\in\pi\mathbb Z^*$ ($f(0) = 1\neq0$). Donc $A = \{k\pi : k\in\mathbb Z^*\}$ n'est pas bornée :</p><div class="sbox"><p style="margin:0">$A$ n'est pas compacte (elle est fermée mais pas bornée).</p></div>` },
    { t: "B est compacte", h: R`<p>Fermée (image réciproque), bornée (si $|x|>2$, $|f(x)|< \frac12$).</p>`, b: R`<p><b>Fermée</b> : $B = f^{-1}\big([\frac12,+\infty[\big)$, image réciproque d'un fermé par une application continue.</p><p><b>Bornée</b> : si $|x|>2$, alors $|f(x)| = \frac{|\sin x|}{|x|}\leqslant\frac1{|x|}< \frac12$, donc $x\notin B$. Ainsi $B\subset[-2,2]$.</p><div class="sbox"><p style="margin:0">$B$ est fermée bornée dans $\mathbb R$ : elle est compacte.</p></div><p>(Plus précisément, sur la figure, $B = [-b,b]$ avec $b\approx1{,}90$.)</p>`, rappels: ["top-compact", "top-ouvert"] }
  ],
  piege: R`Oublier de vérifier la continuité de $f$ en $0$ : c'est elle qui permet d'utiliser l'image réciproque d'un fermé.`,
  methode: R`Dans $\mathbb R^n$ : compact $\iff$ fermé (image réciproque d'un fermé par une fonction continue) et borné (majoration explicite).`
},
{ id: "topo-11", ...P, level: 2, time: "15 min",
  title: "Une suite proche d'une suite de Cauchy est de Cauchy",
  enonce: R`<p>Soit $(E,\|\cdot\|)$ un espace normé, $d$ la distance associée, et $(u_n),(v_n)$ deux suites de $E$ telles que $d(u_n,v_n)\to0$. Montrer que si l'une est de Cauchy, l'autre l'est aussi.</p>`,
  decode: { donnees: [R`$d(v_p,v_q)\leqslant d(v_p,u_p)+d(u_p,u_q)+d(u_q,v_q)$.`], but: R`Un « $\varepsilon/3$ ».`, cles: {} },
  steps: [
    { t: "Le découpage en trois", h: R`<p>Chaque terme $\leqslant\frac\varepsilon3$.</p>`, b: R`<p>Supposons $(u_n)$ de Cauchy. Soit $\varepsilon>0$.</p><ul><li>$d(u_n,v_n)\to0$ : il existe $N_1$ avec $d(u_n,v_n)\leqslant\frac\varepsilon3$ pour $n\geqslant N_1$.</li><li>$(u_n)$ de Cauchy : il existe $N_2$ avec $d(u_p,u_q)\leqslant\frac\varepsilon3$ pour $p,q\geqslant N_2$.</li></ul><p>Pour $p,q\geqslant N = \max(N_1,N_2)$, par l'inégalité triangulaire :</p>$$d(v_p,v_q)\leqslant d(v_p,u_p)+d(u_p,u_q)+d(u_q,v_q)\leqslant\frac\varepsilon3+\frac\varepsilon3+\frac\varepsilon3$$$$= \varepsilon.$$<div class="sbox"><p style="margin:0">$(v_n)$ est de Cauchy (et symétriquement).</p></div>`, rappels: ["top-cauchy"] }
  ],
  piege: R`Oublier de prendre le même rang $N$ pour les deux conditions : on prend le maximum.`,
  methode: R`Transférer une propriété « à $\varepsilon$ près » : intercaler des termes et utiliser l'inégalité triangulaire.`
},
{ id: "topo-12", ...P, level: 2, time: "15 min",
  title: "Diminuer strictement les distances sans avoir de point fixe",
  enonce: R`<p>Donner une application $f : \mathbb R\to\mathbb R$ telle que $|f(x)-f(y)|< |x-y|$ pour tous $x\neq y$, mais sans point fixe.</p>`,
  decode: { donnees: [R`Le théorème du point fixe demande une constante $k< 1$ <b>uniforme</b>.`], but: R`$f(x) = \sqrt{x^2+1}$.`, cles: {} },
  steps: [
    { t: "L'exemple et la contraction stricte", h: R`<p>Multiplier par la quantité conjuguée.</p>`, b: R`<p>Soit $f(x) = \sqrt{x^2+1}$. Pour $x\neq y$ :</p>$$|f(x)-f(y)| = \frac{|x^2-y^2|}{\sqrt{x^2+1}+\sqrt{y^2+1}}$$$$= \frac{|x+y|}{\sqrt{x^2+1}+\sqrt{y^2+1}}\,|x-y|.$$<p>Or $|x+y|\leqslant|x|+|y|< \sqrt{x^2+1}+\sqrt{y^2+1}$ (car $|x|< \sqrt{x^2+1}$), donc la fraction est $< 1$ et $|f(x)-f(y)|< |x-y|$.</p>` },
    { t: "Pas de point fixe", h: R`<p>$f(x)>|x|\geqslant x$.</p>`, b: R`<p>Pour tout $x$ : $f(x) = \sqrt{x^2+1}>\sqrt{x^2} = |x|\geqslant x$, donc $f(x)\neq x$.</p>${figRac}<div class="sbox"><p style="margin:0">$f(x) = \sqrt{x^2+1}$ diminue strictement les distances sur $\mathbb R$ (complet) mais n'a pas de point fixe.</p></div><p>Le théorème du point fixe ne s'applique pas : il n'existe pas de $k< 1$ fixe avec $|f(x)-f(y)|\leqslant k|x-y|$, car le rapport tend vers $1$ quand $x,y\to+\infty$.</p>` }
  ],
  piege: R`Confondre « $|f(x)-f(y)|< |x-y|$ » et « $k$-contractante avec $k< 1$ » : seule la seconde garantit un point fixe.`,
  methode: R`Pour tester une hypothèse d'un théorème, construire un contre-exemple où elle est presque vérifiée.`
},
{ id: "topo-13", ...P, level: 3, time: "25 min",
  title: "Deux normes qui ont la même boule unité sont égales",
  enonce: R`<p>Soit $E$ un $\mathbb K$-espace vectoriel, $N_1,N_2$ deux normes, $B_i = \{x : N_i(x)< 1\}$ et $B'_i = \{x : N_i(x)\leqslant1\}$. Montrer :</p><p>a) $B'_1 = B'_2\iff N_1 = N_2$ ;<br>b) $B_1 = B_2\iff N_1 = N_2$.</p>`,
  decode: { donnees: [R`Homogénéité : $N\big(\frac x{N_1(x)}\big) = \frac{N(x)}{N_1(x)}$.`], but: R`Normaliser $x$ pour le mettre sur la sphère unité de $N_1$.`, cles: {} },
  steps: [
    { t: "a) Boules fermées", h: R`<p>$y = \frac1{N_1(x)}x$ vérifie $N_1(y) = 1$.</p>`, b: R`<p>Si $N_1 = N_2$, les boules sont égales. Réciproquement, supposons $B'_1 = B'_2$. Soit $x\neq0$ et $y = \frac x{N_1(x)}$ :</p>$$N_1(y) = \frac{N_1(x)}{N_1(x)} = 1\ \Rightarrow\ y\in B'_1$$$$= B'_2\ \Rightarrow\ N_2(y) = \frac{N_2(x)}{N_1(x)}\leqslant1\ \Rightarrow\ N_2(x)\leqslant N_1(x).$$<p>Les rôles étant symétriques, $N_1(x)\leqslant N_2(x)$. Pour $x = 0$, l'égalité est claire. Donc $N_1 = N_2$.</p>` },
    { t: "b) Boules ouvertes", h: R`<p>$y = \frac x{N_1(x)}$ n'est pas dans $B_1 = B_2$.</p>`, b: R`<p>Supposons $B_1 = B_2$, et soit $x\neq0$, $y = \frac x{N_1(x)}$. Alors $N_1(y) = 1$, donc $y\notin B_1 = B_2$, d'où $N_2(y)\geqslant1$, soit $N_2(x)\geqslant N_1(x)$. Par symétrie, $N_1(x)\geqslant N_2(x)$.</p><div class="sbox"><p style="margin:0">Une norme est déterminée par sa boule unité (ouverte ou fermée).</p></div>` }
  ],
  piege: R`Oublier le cas $x = 0$, où l'on ne peut pas diviser par $N_1(x)$.`,
  methode: R`Comparer deux normes : normaliser un vecteur pour se ramener à la sphère unité.`
},
{ id: "topo-14", ...P, level: 2, time: "25 min",
  title: "Un sous-espace d'intérieur non vide est l'espace entier",
  enonce: R`<p>a) Soit $F$ un sous-espace vectoriel d'un espace normé $E$. Montrer que si $\mathring F\neq\varnothing$, alors $F = E$.</p><p>b) Dans $E = \mathcal C([0,1],\mathbb R)$ muni de $\|\cdot\|_\infty$, soit $E_1$ (fonctions $\mathcal C^1$) et $\mathcal P$ (fonctions polynomiales). Montrer que $\mathring E_1 = \mathring{\mathcal P} = \varnothing$.</p>`,
  decode: { donnees: [R`Une boule $B(a,r)\subset F$ et la stabilité de $F$ par combinaisons linéaires.`], but: R`Tout $x$ s'écrit $a+\lambda(y-a)$ avec $y\in B(a,r)$.`, cles: {} },
  steps: [
    { t: "a) Une boule dans F suffit", h: R`<p>$y = a+\frac r{2\|x-a\|}(x-a)$.</p>`, b: R`<p>Soit $a\in\mathring F$ et $r>0$ avec $B(a,r)\subset F$. Soit $x\in E$, $x\neq a$, et</p>$$y = a+\frac{r}{2\|x-a\|}(x-a),\qquad\|y-a\| = \frac r2< r\ \Rightarrow\ y\in B(a,r)\subset F.$$<p>Comme $F$ est un sous-espace contenant $a$ et $y$ : $x-a = \frac{2\|x-a\|}r(y-a)\in F$, puis $x = (x-a)+a\in F$. Donc $F = E$.</p>` },
    { t: "b) Application", h: R`<p>$E_1\neq E$ et $\mathcal P\neq E$.</p>`, b: R`<p>$E_1$ et $\mathcal P$ sont des sous-espaces de $E$, différents de $E$ :</p><ul><li>$x\mapsto\left|x-\frac12\right|$ est continue mais pas dérivable en $\frac12$ : elle n'est pas dans $E_1$ ;</li><li>$x\mapsto\frac1{x+1}$ est $\mathcal C^1$ mais pas polynomiale (si $\frac1{x+1} = P(x)$ sur $[0,1]$, alors $(X+1)P-1$ a une infinité de racines, donc $(X+1)P = 1$, impossible : le membre de gauche est de degré $\geqslant1$) : elle est dans $E_1$ mais pas dans $\mathcal P$.</li></ul><p>Par contraposée de a) :</p><div class="sbox">$$\mathring E_1 = \mathring{\mathcal P} = \varnothing.$$</div><p>(Ils sont pourtant denses dans $E$, d'après le théorème de Weierstrass.)</p>` }
  ],
  piege: R`Confondre « d'intérieur vide » et « petit » : $\mathcal P$ est dense dans $E$ mais d'intérieur vide.`,
  methode: R`Un sous-espace propre (différent de $E$) est toujours d'intérieur vide.`
},
{ id: "topo-15", ...P, level: 3, time: "35 min",
  title: "Adhérence d'une boule ouverte, intérieur d'une boule fermée",
  enonce: R`<p>Soit $(E,\|\cdot\|)$ un espace normé, $a\in E$, $r>0$. Montrer :</p><p>a) $\overline{B(a,r)} = B'(a,r)$ ;<br>b) $\big(B'(a,r)\big)^\circ = B(a,r)$.</p>`,
  decode: { donnees: [R`La boule fermée est fermée, la boule ouverte est ouverte.`], but: R`Approcher un point de la sphère par des points du segment $[a,x]$ (dedans) et de son prolongement (dehors).`, cles: {} },
  steps: [
    { t: "a) Première inclusion", h: R`<p>$B'(a,r)$ est un fermé contenant $B(a,r)$.</p>`, b: R`<p>$B(a,r)\subset B'(a,r)$ et $B'(a,r)$ est fermée, donc $\overline{B(a,r)}\subset B'(a,r)$ (l'adhérence est le plus petit fermé contenant la partie).</p>` },
    { t: "a) Réciproque : une suite qui entre dans la boule", h: R`<p>$x_n = \frac1na+\left(1-\frac1n\right)x$.</p>`, b: R`<p>Soit $x\in B'(a,r)$. Si $\|x-a\|< r$, c'est fini. Sinon $\|x-a\| = r$ ; on pose, pour $n\geqslant1$, $x_n = \frac1na+\left(1-\frac1n\right)x$ (un point du segment $[a,x]$) :</p>$$\|x_n-a\| = \Big(1-\frac1n\Big)\|x-a\| = \Big(1-\frac1n\Big)r< r,$$$$\|x_n-x\| = \frac1n\|a-x\| = \frac rn\to0.$$${figBalls}<p>Donc $x$ est limite d'une suite de $B(a,r)$ : $x\in\overline{B(a,r)}$.</p><div class="sbox">$$\overline{B(a,r)} = B'(a,r).$$</div>`, rappels: ["top-fermeseq"] },
    { t: "b) Intérieur de la boule fermée", h: R`<p>Passer aux complémentaires, avec $x'_n = -\frac1na+\left(1+\frac1n\right)x$.</p>`, b: R`<p>$B(a,r)$ est un ouvert contenu dans $B'(a,r)$, donc $B(a,r)\subset(B'(a,r))^\circ$.</p><p>Réciproquement, soit $x$ avec $\|x-a\| = r$ (sur la sphère) ; montrons $x\notin(B'(a,r))^\circ$. Avec $x'_n = -\frac1na+\left(1+\frac1n\right)x$ (prolongement du segment au-delà de $x$, figure de droite) :</p>$$\|x'_n-a\| = \Big(1+\frac1n\Big)r>r,\qquad\|x'_n-x\| = \frac rn\to0.$$<p>Toute boule $B(x,\varepsilon)$ contient un $x'_n$ hors de $B'(a,r)$ : elle n'est pas incluse dans $B'(a,r)$. Donc les points de la sphère ne sont pas intérieurs, et</p><div class="sbox">$$\big(B'(a,r)\big)^\circ = B(a,r).$$</div><p>Ces résultats utilisent la structure d'espace vectoriel (segments) ; dans un espace métrique quelconque, ils peuvent être faux.</p>`, rappels: ["top-ouvert"] }
  ],
  piege: R`Croire que c'est évident : dans un espace métrique général (par exemple $\mathbb Z$ avec $|\cdot|$), l'adhérence de la boule ouverte peut être plus petite que la boule fermée.`,
  methode: R`Approcher un point de la sphère en se déplaçant sur la droite qui passe par le centre.`
},
{ id: "topo-16", ...P, level: 2, time: "20 min",
  title: "Une partie fermée non bornée d'un espace de fonctions",
  enonce: R`<p>Soit $E$ l'espace des fonctions bornées de $[0,1]$ dans $\mathbb R$, muni de $\|\cdot\|_\infty$, et $A = \{f\in E : \forall x\in[0,1],\ e^{f(x)}\geqslant2+f(x)\}$. Montrer que $A$ est fermée et non bornée.</p>`,
  decode: { donnees: [R`$t\mapsto e^t$ est continue.`], but: R`Fermée : suites ; non bornée : fonctions constantes $t\geqslant2$.`, cles: {} },
  steps: [
    { t: "A est fermée", h: R`<p>Convergence uniforme $\Rightarrow$ convergence en chaque point.</p>`, b: R`<p>Soit $(f_n)$ dans $A$ avec $f_n\to f$ dans $E$. Pour tout $x$ : $|f_n(x)-f(x)|\leqslant\|f_n-f\|_\infty\to0$. On passe à la limite dans $e^{f_n(x)}\geqslant2+f_n(x)$ (continuité de l'exponentielle) : $e^{f(x)}\geqslant2+f(x)$. Donc $f\in A$.</p>`, rappels: ["top-fermeseq"] },
    { t: "A n'est pas bornée", h: R`<p>$\varphi(t) = e^t-2-t$ est croissante sur $[2,+\infty[$.</p>`, b: R`<p>$\varphi(t) = e^t-(2+t)$ a pour dérivée $e^t-1>0$ sur $[2,+\infty[$, et $\varphi(2) = e^2-4>0$. Donc $e^t\geqslant2+t$ pour $t\geqslant2$.</p>${figExp}<p>Pour $t\geqslant2$, la fonction constante $f_t = t$ est dans $A$ et $\|f_t\|_\infty = t$, aussi grand qu'on veut.</p><div class="sbox"><p style="margin:0">$A$ est fermée et non bornée.</p></div>` }
  ],
  piege: R`Oublier que dans $E$ (dimension infinie), fermé et borné ne suffit pas pour compact ; ici ce n'est même pas borné.`,
  methode: R`Partie définie par une inégalité large entre fonctions continues de $f(x)$ : fermée par passage à la limite.`
},
{ id: "topo-17", ...P, level: 3, time: "45 min",
  title: "Distance de 0 à deux parties : atteinte ou non",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$ muni de $\|\cdot\|_\infty$.</p><p>a) $A = \{f\in E : f(0) = 1\text{ et }\int_0^1f = 0\}$.<br>1) Montrer que $A$ est fermée.<br>2) Calculer $d(0,A)$. Est-elle atteinte ?</p><p>b) Mêmes questions pour $B = \{f\in E : f(0) = 0\text{ et }\int_0^1f = 1\}$.</p>`,
  decode: { donnees: [R`$f\mapsto f(0)$ et $f\mapsto\int_0^1f$ sont continues pour $\|\cdot\|_\infty$.`], but: R`Minorer $\|f\|_\infty$, puis chercher une fonction (ou une suite) qui réalise la borne.`, cles: {} },
  steps: [
    { t: "a1) A est fermée", h: R`<p>$|f_n(0)-f(0)|$ et $\left|\int f_n-\int f\right|$ sont $\leqslant\|f_n-f\|_\infty$.</p>`, b: R`<p>Si $f_n\in A$ et $f_n\to f$ : $|f_n(0)-f(0)|\leqslant\|f_n-f\|_\infty\to0$, donc $f(0) = \lim f_n(0) = 1$ ; et $\left|\int f_n-\int f\right|\leqslant\int|f_n-f|\leqslant\|f_n-f\|_\infty\to0$, donc $\int f = 0$. Ainsi $f\in A$.</p>`, rappels: ["top-fermeseq"] },
    { t: "a2) d(0, A) = 1, atteinte", h: R`<p>$\|f\|_\infty\geqslant|f(0)| = 1$ ; $f(x) = 1-2x$.</p>`, b: R`<p>Pour $f\in A$, $\|f\|_\infty\geqslant|f(0)| = 1$, donc $d(0,A)\geqslant1$. La fonction $f(x) = 1-2x$ vérifie $f(0) = 1$, $\int_0^1(1-2x)dx = 1-1 = 0$, et $\|f\|_\infty = 1$ :</p>${figLin}<div class="sbox"><p style="margin:0">$d(0,A) = 1$, atteinte en $f(x) = 1-2x$.</p></div>` },
    { t: "b) d(0, B) ≥ 1", h: R`<p>$1 = \int f\leqslant\|f\|_\infty$.</p>`, b: R`<p>$B$ est fermée (même preuve). Pour $f\in B$ : $1 = \int_0^1f\leqslant\int_0^1|f|\leqslant\|f\|_\infty$. Donc $d(0,B)\geqslant1$.</p>` },
    { t: "b) La borne est approchée", h: R`<p>Fonctions $g_n$ affines puis constantes.</p>`, b: R`<p>Pour $n\geqslant1$, soit $g_n$ qui croît linéairement de $0$ à $a_n$ sur $\left[0,\frac1n\right]$ puis vaut $a_n$. Son intégrale vaut (triangle + rectangle)</p>$$\int_0^1g_n = \frac{a_n}{2n}+a_n\Big(1-\frac1n\Big) = a_n\Big(1-\frac1{2n}\Big) = 1$$$$\iff a_n = \frac{2n}{2n-1}.$$${figGn}<p>Ainsi $g_n\in B$ et $\|g_n\|_\infty = a_n\to1$ : $d(0,B)\leqslant1$, donc $d(0,B) = 1$.</p>` },
    { t: "b) Elle n'est pas atteinte", h: R`<p>$\int(\|f\|_\infty-f) = 0$.</p>`, b: R`<p>Supposons $f\in B$ avec $\|f\|_\infty = 1$. Alors $\int_0^1\big(1-f\big) = 1-1 = 0$ avec $1-f$ continue et $\geqslant0$ : donc $f = 1$ partout. Mais $f(0) = 0$ : contradiction.</p><div class="sbox"><p style="margin:0">$d(0,B) = 1$, non atteinte.</p></div><p>En dimension finie, la distance à un fermé non vide est toujours atteinte ; ici la dimension est infinie.</p>`, rappels: ["pre-intnulle"] }
  ],
  piege: R`Conclure que la distance est atteinte parce que la partie est fermée : c'est vrai en dimension finie seulement.`,
  methode: R`Distance à une partie : minorer pour tout élément, puis exhiber un élément (ou une suite) qui réalise la borne ; pour la non-atteinte, étudier le cas d'égalité.`
},
{ id: "topo-18", ...P, level: 3, time: "35 min",
  title: "Trois normes deux à deux non équivalentes sur C²([0, 1])",
  enonce: R`<p>Sur $E = \mathcal C^2([0,1],\mathbb R)$, on pose $N_\infty(f) = \sup|f|$, $N'_\infty(f) = |f(0)|+\sup|f'|$, $N''_\infty(f) = |f(0)|+|f'(0)|+\sup|f''|$.</p><p>a) Montrer que ce sont des normes.<br>b) Les comparer pour la relation d'équivalence des normes.</p>`,
  decode: { donnees: [R`Inégalité des accroissements finis.`], but: R`$N_\infty\leqslant N'_\infty\leqslant N''_\infty$, et une suite $f_n(x) = \sin(n\pi x)$ pour la non-équivalence.`, cles: {} },
  steps: [
    { t: "a) N″ est une norme", h: R`<p>Séparation : $f'' = 0$, $f(0) = f'(0) = 0$.</p>`, b: R`<p>Les quantités existent ($f,f',f''$ continues sur le segment). Homogénéité et inégalité triangulaire : termes à termes. <b>Séparation</b> : si $N''_\infty(f) = 0$, alors $f(0) = f'(0) = 0$ et $f'' = 0$, donc $f(x) = ax+b$ avec $b = f(0) = 0$, $a = f'(0) = 0$ : $f = 0$. Même chose (plus simple) pour $N'_\infty$ et $N_\infty$.</p>` },
    { t: "b) Les inégalités", h: R`<p>$|f(x)-f(0)|\leqslant x\sup|f'|$.</p>`, b: R`<p>Par l'inégalité des accroissements finis sur $[0,x]$ : $|f(x)-f(0)|\leqslant x\sup|f'|\leqslant\sup|f'|$, donc</p>$$|f(x)|\leqslant|f(0)|+|f(x)-f(0)|\leqslant N'_\infty(f)\ \Rightarrow\ N_\infty(f)\leqslant N'_\infty(f).$$<p>De même pour $f'$ : $|f'(x)|\leqslant|f'(0)|+\sup|f''|$, donc $N'_\infty(f)\leqslant N''_\infty(f)$.</p>` },
    { t: "b) Pas d'équivalence", h: R`<p>$f_n(x) = \sin(n\pi x)$.</p>`, b: R`<p>$f_n(x) = \sin(n\pi x)$, $f'_n = n\pi\cos(n\pi x)$, $f''_n = -n^2\pi^2\sin(n\pi x)$ :</p>$$N_\infty(f_n) = 1,\qquad N'_\infty(f_n)$$$$= 0+n\pi,\qquad N''_\infty(f_n)$$$$= 0+n\pi+n^2\pi^2.$$$$\frac{N'_\infty(f_n)}{N_\infty(f_n)} = n\pi\to+\infty,$$$$\frac{N''_\infty(f_n)}{N'_\infty(f_n)} = 1+n\pi\to+\infty,$$$$\frac{N''_\infty(f_n)}{N_\infty(f_n)}\to+\infty.$$<div class="sbox"><p style="margin:0">$N_\infty\leqslant N'_\infty\leqslant N''_\infty$, et ces trois normes sont deux à deux non équivalentes.</p></div>`, rappels: ["top-equiv"] }
  ],
  piege: R`Croire que toutes les normes sont équivalentes : c'est vrai seulement en dimension finie.`,
  methode: R`Non-équivalence de normes : une suite qui oscille de plus en plus vite fait exploser les normes faisant intervenir les dérivées.`
},
{ id: "topo-19", ...P, level: 3, time: "30 min",
  title: "L'image de x ↦ x / (1 + ‖x‖²)",
  enonce: R`<p>Soit $(E,\|\cdot\|)$ un espace normé non nul et $f(x) = \frac{x}{1+\|x\|^2}$. Montrer que $f$ est continue et que $f(E) = B'\big(0,\frac12\big)$.</p>`,
  decode: { donnees: [R`$\frac t{1+t^2}\leqslant\frac12$ pour $t\geqslant0$.`], but: R`Inclusion par la majoration ; réciproque en cherchant un antécédent $\lambda y$.`, cles: {} },
  steps: [
    { t: "Continuité et inclusion", h: R`<p>$\frac12-\frac t{1+t^2} = \frac{(1-t)^2}{2(1+t^2)}$.</p>`, b: R`<p>$f$ est continue (produit de $x\mapsto x$ et de $x\mapsto\frac1{1+\|x\|^2}$, continue car la norme l'est).</p><p>$\|f(x)\| = \frac{\|x\|}{1+\|x\|^2}$ et, pour $t\geqslant0$, $\frac12-\frac t{1+t^2} = \frac{(1-t)^2}{2(1+t^2)}\geqslant0$. Donc $f(E)\subset B'(0,\frac12)$.</p>${figXsur}` },
    { t: "Réciproque : un antécédent", h: R`<p>Chercher $x = \lambda y$ avec $\lambda\in\mathbb R$.</p>`, b: R`<p>Soit $y$ avec $\|y\|\leqslant\frac12$. Si $y = 0$, $f(0) = 0$. Sinon cherchons $x = \lambda y$ :</p>$$f(\lambda y) = y\iff\frac{\lambda}{1+\lambda^2\|y\|^2}y = y\iff\lambda = 1+\lambda^2\|y\|^2$$$$\iff\|y\|^2\lambda^2-\lambda+1 = 0.$$<p>Discriminant : $1-4\|y\|^2\geqslant0$ car $\|y\|\leqslant\frac12$ : il y a une solution réelle $\lambda$, donc $y\in f(E)$.</p><div class="sbox">$$f(E) = B'\Big(0,\frac12\Big).$$</div><p>Exemple dans $\mathbb R$ : $y = \frac12$ donne $\frac14\lambda^2-\lambda+1 = 0$, soit $\lambda = 2$, et $f(2\times\frac12) = f(1) = \frac12$ ✓.</p>` }
  ],
  piege: R`Chercher un antécédent quelconque : se restreindre à la droite engendrée par $y$ ramène le problème à une équation du second degré.`,
  methode: R`Image d'une fonction radiale $x\mapsto\varphi(\|x\|)x$ : étudier la fonction réelle $t\mapsto t\varphi(t)$.`
},
{ id: "topo-20", ...P, level: 2, time: "20 min",
  title: "Norme de l'opérateur de différence sur les suites bornées",
  enonce: R`<p>Soit $\ell^\infty$ l'espace des suites réelles bornées, muni de $\|x\|_\infty = \sup|x_n|$, et $\Delta(x) = y$ avec $y_n = x_{n+1}-x_n$. Montrer que $\Delta$ est linéaire continue et calculer $|||\Delta|||$.</p>`,
  decode: { donnees: [R`$|x_{n+1}-x_n|\leqslant2\|x\|_\infty$.`], but: R`Majoration par $2$, atteinte pour $x_n = (-1)^n$.`, cles: {} },
  steps: [
    { t: "Majoration", h: R`<p>Inégalité triangulaire.</p>`, b: R`<p>$\Delta$ est linéaire, et $|y_n|\leqslant|x_{n+1}|+|x_n|\leqslant2\|x\|_\infty$ : $y$ est bornée, $\|\Delta(x)\|_\infty\leqslant2\|x\|_\infty$. Donc $\Delta$ est continue, $|||\Delta|||\leqslant2$.</p>`, rappels: ["top-lc"] },
    { t: "La borne est atteinte", h: R`<p>$x_n = (-1)^n$.</p>`, b: R`<p>Pour $x_n = (-1)^n$ : $\|x\|_\infty = 1$ et $|x_{n+1}-x_n| = 2$ pour tout $n$, donc $\|\Delta(x)\|_\infty = 2$.</p><div class="sbox">$$|||\Delta||| = 2.$$</div>` }
  ],
  piege: R`Prendre une suite constante pour tester : elle donne $\Delta(x) = 0$, le pire cas est au contraire une suite qui oscille le plus possible.`,
  methode: R`Norme subordonnée : la majoration indique quel vecteur la réalise (ici une suite alternée).`
},
{ id: "topo-21", ...P, level: 2, time: "20 min",
  title: "Une courbe algébrique du plan est-elle compacte ?",
  enonce: R`<p>La partie $E = \{(x,y)\in\mathbb R^2 : x^2(x-1)(x-3)+y^2(y^2-4) = 0\}$ est-elle compacte ?</p>`,
  decode: { donnees: [R`En dimension finie : compact $\iff$ fermé borné.`], but: R`Fermée (image réciproque de $\{0\}$) ; bornée par une estimation de $\rho = \sqrt{x^2+y^2}$.`, cles: {} },
  steps: [
    { t: "E est fermée", h: R`<p>$E = f^{-1}(\{0\})$.</p>`, b: R`<p>$f(x,y) = x^2(x-1)(x-3)+y^2(y^2-4)$ est polynomiale, donc continue, et $\{0\}$ est fermé : $E = f^{-1}(\{0\})$ est fermée.</p>` },
    { t: "E est bornée", h: R`<p>$\rho^4\leqslant2(x^4+y^4)$.</p>`, b: R`<p>En développant, $(x,y)\in E\iff x^4+y^4 = 4x^3-3x^2+4y^2$. Avec $\rho = \sqrt{x^2+y^2}$, $|x|\leqslant\rho$, $|y|\leqslant\rho$ et $(x^2+y^2)^2\leqslant2(x^4+y^4)$ :</p>$$\rho^4\leqslant2\big(4x^3-3x^2+4y^2\big)\leqslant2(4\rho^3+4\rho^2)$$$$= 8\rho^3+8\rho^2.$$<p>Si $\rho\geqslant1$, $\rho^2\leqslant\rho^3$, donc $\rho^4\leqslant16\rho^3$ et $\rho\leqslant16$. Ainsi $\rho\leqslant16$ sur $E$ : $E$ est bornée.</p>${figCourbe}<div class="sbox"><p style="margin:0">$E$ est fermée et bornée dans $\mathbb R^2$ (dimension finie) : $E$ est compacte.</p></div>`, rappels: ["top-compact"] }
  ],
  piege: R`Vouloir tracer la courbe exactement pour montrer qu'elle est bornée : une majoration grossière de $\rho$ suffit.`,
  methode: R`Partie de $\mathbb R^n$ définie par une équation polynomiale : fermée par continuité ; bornée en comparant les termes de plus haut degré.`
},
{ id: "topo-22", ...P, level: 3, time: "20 min",
  title: "Dans un compact, une seule valeur d'adhérence entraîne la convergence",
  enonce: R`<p>Soit $E$ un espace normé, $K$ un compact de $E$ et $(u_n)$ une suite de $K$ qui n'a qu'une seule valeur d'adhérence $a$. Montrer que $(u_n)$ converge.</p>`,
  decode: { donnees: [R`Bolzano-Weierstrass dans $K$.`], but: R`Par l'absurde, construire une seconde valeur d'adhérence.`, cles: {} },
  steps: [
    { t: "Négation de la convergence vers a", h: R`<p>Une infinité de termes à distance $>\varepsilon$ de $a$.</p>`, b: R`<p>Par l'absurde, supposons que $(u_n)$ ne converge pas vers $a$ :</p>$$\exists\varepsilon>0,\ \forall N,\ \exists n\geqslant N,\ d(u_n,a)>\varepsilon.$$<p>On construit ainsi une extractrice $\sigma$ (strictement croissante) avec $d(u_{\sigma(n)},a)>\varepsilon$ pour tout $n$.</p>` },
    { t: "Une autre valeur d'adhérence", h: R`<p>Extraire dans $K$.</p>`, b: R`<p>$(u_{\sigma(n)})$ est une suite du compact $K$ : elle a une sous-suite $u_{\sigma(\tau(n))}\to b\in K$. En passant à la limite dans $d(u_{\sigma(\tau(n))},a)>\varepsilon$ (continuité de la distance) : $d(b,a)\geqslant\varepsilon>0$, donc $b\neq a$. Or $b$ est une valeur d'adhérence de $(u_n)$ : contradiction.</p><div class="sbox"><p style="margin:0">$(u_n)$ converge vers $a$.</p></div><p>Sans la compacité, c'est faux : $u_n = n$ si $n$ pair, $0$ si $n$ impair a pour seule valeur d'adhérence $0$ mais ne converge pas.</p>`, rappels: ["top-compact"] }
  ],
  piege: R`Oublier que le passage à la limite transforme l'inégalité stricte $>\varepsilon$ en inégalité large $\geqslant\varepsilon$ (ce qui suffit ici).`,
  methode: R`Dans un compact, une suite converge si et seulement si elle a une unique valeur d'adhérence.`
},
{ id: "topo-23", ...P, level: 3, time: "40 min",
  title: "C([0, 1]) muni de la norme 1 n'est pas complet",
  enonce: R`<p>Montrer que $\mathcal C([0,1],\mathbb R)$, muni de $\|f\|_1 = \int_0^1|f|$, n'est pas complet.</p>`,
  decode: { donnees: [R`Une suite de fonctions continues qui « tend » vers une fonction en escalier.`], but: R`Construire une suite de Cauchy qui ne converge vers aucune fonction continue.`, cles: {} },
  steps: [
    { t: "La suite", h: R`<p>$f_n = 1$ sur $[0,\frac12]$, affine, puis $0$.</p>`, b: R`<p>Pour $n\geqslant2$, on définit $f_n$ par : $f_n(x) = 1$ sur $\left[0,\frac12\right]$ ; $f_n(x) = -nx+\frac{n+2}2$ sur $\left[\frac12,\frac12+\frac1n\right]$ (segment qui va de $1$ à $0$) ; $f_n(x) = 0$ sur $\left[\frac12+\frac1n,1\right]$. Chaque $f_n$ est continue.</p>${figFn}` },
    { t: "Elle est de Cauchy", h: R`<p>$f_p-f_{p+r}$ est nulle hors de $[\frac12,\frac12+\frac1p]$.</p>`, b: R`<p>Pour $p\geqslant2$ et $r\geqslant0$ : $f_p$ et $f_{p+r}$ coïncident hors de $\left[\frac12,\frac12+\frac1p\right]$, et sur cet intervalle $0\leqslant f_{p+r}\leqslant f_p$. Donc</p>$$\|f_{p+r}-f_p\|_1 = \int_{1/2}^{1/2+1/p}(f_p-f_{p+r})\leqslant\int_{1/2}^{1/2+1/p}f_p$$$$= \frac1{2p}$$<p>(aire du triangle de base $\frac1p$ et de hauteur $1$). Pour $\varepsilon>0$, si $p\geqslant N$ avec $\frac1{2N}\leqslant\varepsilon$, on a $\|f_{p+r}-f_p\|_1\leqslant\varepsilon$ : la suite est de Cauchy.</p>`, rappels: ["top-cauchy"] },
    { t: "Elle ne converge pas", h: R`<p>Une limite $f$ vaudrait $1$ sur $[0,\frac12]$ et $0$ sur $]\frac12,1]$.</p>`, b: R`<p>Par l'absurde, soit $f$ continue avec $\|f_n-f\|_1\to0$.</p><ul><li>$\|f_n-f\|_1\geqslant\int_0^{1/2}|1-f|$ pour tout $n$, donc $\int_0^{1/2}|1-f| = 0$, et par continuité $f = 1$ sur $\left[0,\frac12\right]$.</li><li>Soit $x_0\in\,]\frac12,1]$. Pour $n$ assez grand ($\frac12+\frac1n\leqslant x_0$), $\|f_n-f\|_1\geqslant\int_{x_0}^1|f|$, donc $\int_{x_0}^1|f| = 0$ et $f = 0$ sur $[x_0,1]$. Ceci pour tout $x_0>\frac12$ : $f = 0$ sur $]\frac12,1]$.</li></ul><p>Alors $f$ saute de $1$ à $0$ en $\frac12$ : elle n'est pas continue. Contradiction.</p><div class="sbox"><p style="margin:0">$(\mathcal C([0,1]),\|\cdot\|_1)$ n'est pas complet.</p></div><p>(Pour $\|\cdot\|_\infty$, au contraire, $\mathcal C([0,1])$ est complet.)</p>`, rappels: ["pre-intnulle"] }
  ],
  piege: R`Croire que la suite converge vers la fonction en escalier « dans $E$ » : cette fonction n'est pas dans $E$.`,
  methode: R`Non-complétude : une suite de Cauchy d'éléments « réguliers » dont la limite naturelle sort de l'espace.`
}
]);
})();

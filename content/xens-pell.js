/* Commando X-ENS · Aller plus loin · Sujet « Équation de Pell-Fermat ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 4, plus: "pell",
  sujet: "L'équation de Pell-Fermat x² − dy² = 1",
  sujetDesc: "Les solutions entières de x² − dy² = 1 forment un groupe, via (x, y) ↦ x + y√d, isomorphe à un sous-groupe discret de (ℝ*, ×) contenant −1 : c'est {±1} ou {±εⁿ}. On classe les sous-groupes de ℝ, on prouve la discrétion, puis l'existence d'une solution non triviale quand d n'est pas un carré (approximation de Dirichlet et tiroirs). Exemples : d = 2, 7, 13 et fractions continues." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "pe-sgr": { t: "Sous-groupes de (ℝ, +)", b: R`$$G\leqslant(\mathbb R,+),\ G\neq\{0\},\ \alpha = \inf(G\cap\mathbb R_+^*)\ :\quad\alpha>0\Rightarrow G = \alpha\mathbb Z;\qquad\alpha = 0\Rightarrow\overline G = \mathbb R.$$` },
  "pe-irr": { t: "Irrationalité de √d", b: R`$$d\text{ non carré}\Rightarrow\sqrt d\notin\mathbb Q;\qquad x+y\sqrt d = x'+y'\sqrt d\ (x,y,x',y'\in\mathbb Q)\Rightarrow x = x',\ y = y'.$$` },
  "pe-tiroir": { t: "Principe des tiroirs", b: R`$$N+1\text{ objets},\ N\text{ tiroirs}\Rightarrow\exists\text{ tiroir}\geqslant2\text{ objets};\qquad\infty\text{ objets},\ N\text{ tiroirs}\Rightarrow\exists\text{ tiroir infini}.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $d\geqslant1$ est un entier. On étudie l'équation de Pell-Fermat $x^2-dy^2 = 1$, d'inconnues $(x,y)\in\mathbb Z^2$. On note $\mathcal H = \{(x,y)\in\mathbb R^2 : x^2-dy^2 = 1\}$, $\mathcal H_{\mathbb Z} = \mathcal H\cap\mathbb Z^2$, et $\theta(x,y) = x+y\sqrt d$. Les solutions $(\pm1,0)$ sont dites triviales.</p>`;

/* Figure : loi de groupe sur xy = 1 */
const figLoi = GRAPH({ w: 440, h: 260, x: [0, 4.2], y: [0, 4.2], xt: [1, 2, 3, 4], yt: [1, 2, 3, 4], xl: "X", yl: "Y",
  curves: [{ f: x => x > 0.2 ? 1 / x : NaN, c: "b", lab: [0.4, 3.6, "XY = 1"] }],
  extra: (X, Y) => { const p = [0.5, 2], q = [3, 1 / 3], pq = [1.5, 2 / 3], sl = (q[1] - p[1]) / (q[0] - p[0]); let s = "";
    s += `<line x1="${X(0.3).toFixed(1)}" y1="${Y(p[1] + sl * (0.3 - p[0])).toFixed(1)}" x2="${X(3.7).toFixed(1)}" y2="${Y(p[1] + sl * (3.7 - p[0])).toFixed(1)}" class="vk" style="stroke-width:1.2"/>`;
    s += `<line x1="${X(0.2).toFixed(1)}" y1="${Y(1 + sl * (0.2 - 1)).toFixed(1)}" x2="${X(2.6).toFixed(1)}" y2="${Y(1 + sl * (2.6 - 1)).toFixed(1)}" class="vr" style="stroke-width:1.4;stroke-dasharray:5 4"/>`;
    [[p, "p = (½, 2)", "ptb"], [q, "q = (3, ⅓)", "ptb"], [[1, 1], "(1, 1)", "pt"], [pq, "p ⋆ q = (3/2, 2/3)", "ptr"]].forEach(([[x, y], t, c]) => { s += `<circle cx="${X(x).toFixed(1)}" cy="${Y(y).toFixed(1)}" r="4.5" class="${c}"/>` + S(X(x) + 8, Y(y) + (c === "ptr" ? 20 : -8), t, "start", c === "ptr" ? "sm r" : "sm"); });
    return s; } },
  R`Loi de groupe sur l'hyperbole $XY = 1$ : $p\star q$ est le second point d'intersection de l'hyperbole avec la parallèle à $(pq)$ passant par le neutre $(1,1)$ (pointillés rouges). Le calcul (Q1) montre que $p\star q$ est le produit coordonnée par coordonnée.`, "Loi de groupe sur une hyperbole");

/* Figure : solutions entières de x² − 2y² = 1 */
const figPell = GRAPH({ w: 460, h: 260, x: [-20, 20], y: [-14, 14], xt: [-17, 17], yt: [-12, 12], xl: "x", yl: "y",
  curves: [],
  extra: (X, Y) => { let s = ""; for (const sg of [1, -1]) { let d = ""; for (let k = 0; k <= 200; k++) { const y = -14 + 28 * k / 200, x = sg * Math.sqrt(1 + 2 * y * y); d += (k ? "L" : "M") + X(x).toFixed(1) + " " + Y(y).toFixed(1); } s += `<path d="${d}" class="vb" style="fill:none;stroke-width:1.8"/>`; }
    [[1, 0, "1"], [3, 2, "ε"], [17, 12, "ε²"], [3, -2, "ε⁻¹"], [17, -12, "ε⁻²"], [-1, 0, "−1"], [-3, 2, "−ε⁻¹"], [-3, -2, "−ε"], [-17, 12, "−ε⁻²"], [-17, -12, "−ε²"]].forEach(([x, y, t]) => { s += `<circle cx="${X(x).toFixed(1)}" cy="${Y(y).toFixed(1)}" r="4.5" class="${x > 0 ? "ptr" : "ptb"}"/>` + S(X(x) + (x > 0 ? 8 : -8), Y(y) + 4, t, x > 0 ? "start" : "end", "sm"); });
    return s; } },
  R`Les solutions entières de $x^2-2y^2 = 1$ sur l'hyperbole, étiquetées par $\theta(x,y) = x+y\sqrt2$, avec $\varepsilon = 3+2\sqrt2$ : $(3,2)$, $(17,12)$, $(99,70)$… Elles forment le groupe $\{\pm\varepsilon^n,\ n\in\mathbb Z\}\simeq\mathbb Z/2\mathbb Z\times\mathbb Z$ ; la branche $x>0$ correspond à $+\varepsilon^n$.`, "Solutions de x² − 2y² = 1");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "pell-1", ...P, part: "Partie I", time: "30 min",
  title: "Une loi de groupe sur l'hyperbole",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Sur $\mathcal H' = \{(X,Y) : XY = 1\}$, pour $p = (x,1/x)$, $q = (u,1/u)$ distincts, on note $p\star q$ le second point d'intersection de $\mathcal H'$ avec la droite passant par $(1,1)$ parallèle à $(pq)$ (si $p = q$, parallèle à la tangente en $p$). Montrer que $p\star q = (xu,\frac1{xu})$ (si $xu = 1$, $p\star q = (1,1)$). En déduire que $\star$ est une loi de groupe et que $(\mathcal H',\star)\simeq(\mathbb R^*,\times)$.</li>
<li>Montrer que $\Phi(x,y) = (x+y\sqrt d,\ x-y\sqrt d)$ est une bijection de $\mathcal H$ sur $\mathcal H'$. Transporter la loi : montrer que $(x,y)\cdot(u,v) = (xu+dyv,\ xv+yu)$, et que $\theta : (\mathcal H,\cdot)\to(\mathbb R^*,\times)$ est un isomorphisme.</li>
<li>Montrer que $\mathcal H_{\mathbb Z}$ est un sous-groupe de $\mathcal H$ et en déduire l'identité de Brahmagupta : $(x^2-dy^2)(u^2-dv^2) = (xu+dyv)^2-d(xv+yu)^2$.</li></ol>`,
  decode: { donnees: [R`Géométrie de l'hyperbole.`], but: R`Munir l'ensemble des solutions d'une structure de groupe.`, cles: {} },
  steps: [
    Q(1, "La loi sur XY = 1", R`<p>Pente de $(pq)$ : $\frac{1/x-1/u}{x-u} = -\frac1{xu}$. Le point $(s,1/s)$ sur la droite issue de $(1,1)$ : $\frac{1/s-1}{s-1} = -\frac1s$.</p>`, R`<p>La pente de $(pq)$ est $\frac{\frac1x-\frac1u}{x-u} = \frac{u-x}{xu(x-u)} = -\frac1{xu}$. Pour $p = q$, la tangente en $p$ a pour pente $-\frac1{x^2}$ : c'est la même formule avec $u = x$. Un point $(s,\frac1s)\neq(1,1)$ de $\mathcal H'$ est sur la droite de pente $\lambda$ passant par $(1,1)$ si et seulement si $\frac{1/s-1}{s-1} = \lambda$, soit $-\frac1s = \lambda$. Avec $\lambda = -\frac1{xu}$ : $s = xu$. (Si $xu = 1$, la droite est tangente en $(1,1)$ et $p\star q = (1,1)$.)</p><p>Donc $p\star q = \big(xu,\frac1{xu}\big)$ : la projection $\pi_1(X,Y) = X$ est une bijection de $\mathcal H'$ sur $\mathbb R^*$ qui transforme $\star$ en $\times$. Ainsi $\star$ est une loi de groupe (neutre $(1,1)$, inverse $(\frac1x,x)$, associativité héritée de $\times$) et $\pi_1$ est un isomorphisme.</p>${figLoi}`),
    Q(2, "Transport sur x² − dy² = 1", R`<p>$(x+y\sqrt d)(x-y\sqrt d) = x^2-dy^2$. Réciproque : $x = \frac{X+Y}2$, $y = \frac{X-Y}{2\sqrt d}$.</p>`, R`<p>Si $(x,y)\in\mathcal H$, $\Phi(x,y) = (X,Y)$ vérifie $XY = x^2-dy^2 = 1$. Réciproquement, $(X,Y)\in\mathcal H'$ a pour unique antécédent $\big(\frac{X+Y}2,\frac{X-Y}{2\sqrt d}\big)$ (qui est dans $\mathcal H$ car $x^2-dy^2 = XY$). On définit $p\cdot q = \Phi^{-1}(\Phi(p)\star\Phi(q))$ : c'est une loi de groupe, et $\pi_1\circ\Phi = \theta$ est un isomorphisme $(\mathcal H,\cdot)\to(\mathbb R^*,\times)$. Calcul :</p>$$\theta(x,y)\,\theta(u,v) = (x+y\sqrt d)(u+v\sqrt d) = (xu+dyv)+(xv+yu)\sqrt d,$$<p>et de même avec $-\sqrt d$ pour la seconde coordonnée. Donc $(x,y)\cdot(u,v) = (xu+dyv,\ xv+yu)$.</p>`),
    Q(3, "Les solutions entières forment un groupe", R`<p>Neutre $(1,0)$, inverse $(x,-y)$, stabilité par la formule.</p>`, R`<p>Le neutre est $\theta^{-1}(1) = (1,0)\in\mathbb Z^2$. Si $(x,y),(u,v)\in\mathcal H_{\mathbb Z}$, leur produit $(xu+dyv,xv+yu)$ est à coordonnées entières et dans $\mathcal H$. L'inverse de $(x,y)$ est $(x,-y)$ car $(x+y\sqrt d)(x-y\sqrt d) = 1$. Donc $\mathcal H_{\mathbb Z}$ est un sous-groupe, isomorphe via $\theta$ au sous-groupe $G = \{x+y\sqrt d : (x,y)\in\mathcal H_{\mathbb Z}\}$ de $\mathbb R^*$, qui contient $-1 = \theta(-1,0)$.</p><p>L'identité de Brahmagupta est l'égalité $N(\alpha)N(\beta) = N(\alpha\beta)$ pour $N(x+y\sqrt d) = (x+y\sqrt d)(x-y\sqrt d)$, qui découle de la multiplicativité, valable pour tous $x,y,u,v$ réels.</p>`)
  ],
  piege: R`Pour $d = 0$, $\Phi$ n'est pas injective et l'équation $x^2 = 1$ a les solutions $(\pm1,y)$ pour tout $y$ : il faut $d\geqslant1$.`,
  methode: R`Une conique non dégénérée privée de ses points à l'infini est un groupe (corde parallèle par un point neutre) : pour une hyperbole, c'est $(\mathbb R^*,\times)$, pour un cercle, $(\mathbb U,\times)$.`
},

/* ===================== Partie II ===================== */
{ id: "pell-2", ...P, part: "Partie II", time: "35 min",
  title: "Structure du groupe des solutions",
  enonce: PRE + R`<p><b>Partie II.</b> On note $G = \theta(\mathcal H_{\mathbb Z})\subset\mathbb R^*$.</p><ol start="4">
<li>Soit $u = x+y\sqrt d\in G$ avec $u>1$. Montrer que $x\geqslant1$ et $y\geqslant1$. En déduire que pour tout $K>1$, $G\cap]1,K]$ est fini.</li>
<li>Montrer que si $G\neq\{\pm1\}$, alors $G\cap]1,+\infty[$ a un plus petit élément $\varepsilon$, et que $G = \{\pm\varepsilon^n,\ n\in\mathbb Z\}$. (On peut passer par $\ln(G\cap\mathbb R_+^*)$, sous-groupe de $(\mathbb R,+)$.)</li>
<li>En déduire que $\mathcal H_{\mathbb Z}$ est soit $\{(\pm1,0)\}$, soit isomorphe à $\mathbb Z/2\mathbb Z\times\mathbb Z$, et que les solutions avec $x,y>0$ sont exactement les $(x_n,y_n)$ définis par $x_n+y_n\sqrt d = \varepsilon^n$, $n\geqslant1$.</li>
<li>Montrer que si $d$ est un carré parfait, seules les solutions triviales existent.</li></ol>`,
  decode: { donnees: [R`$G$ sous-groupe de $\mathbb R^*$ contenant $-1$.`], but: R`Montrer que $G$ est discret, donc monogène à $\pm$ près.`, cles: {} },
  steps: [
    Q(4, "Discrétion", R`<p>$u^{-1} = x-y\sqrt d\in]0,1[$, donc $x = \frac{u+u^{-1}}2$, $y\sqrt d = \frac{u-u^{-1}}2$.</p>`, R`<p>Comme $(x+y\sqrt d)(x-y\sqrt d) = 1$, on a $u^{-1} = x-y\sqrt d\in]0,1[$. Donc $x = \frac{u+u^{-1}}2>0$ et $y\sqrt d = \frac{u-u^{-1}}2>0$ : $x,y$ sont des entiers $\geqslant1$.</p><p>Si de plus $u\leqslant K$, alors $x\leqslant\frac{K+1}2$ et $y\leqslant\frac K{2\sqrt d}$ : il n'y a qu'un nombre fini de couples $(x,y)$ possibles. Comme $\theta$ est injective sur $\mathcal H$, $G\cap]1,K]$ est fini.</p>`),
    Q(5, "G est engendré par −1 et ε", R`<p>$L = \ln(G\cap\mathbb R_+^*)$ est un sous-groupe de $\mathbb R$ ; Q4 dit que $L\cap]0,\ln K]$ est fini : $L$ n'est pas dense.</p>`, R`<p>$G_+ = G\cap\mathbb R_+^*$ est un sous-groupe de $(\mathbb R_+^*,\times)$, et $L = \ln(G_+)$ un sous-groupe de $(\mathbb R,+)$. Si $G\neq\{\pm1\}$, $G_+\neq\{1\}$ (car $-1\in G$), et $G_+$ contient un $u>1$ (quitte à inverser). Par Q4, $L\cap]0,\ln u]$ est fini et non vide : $L$ n'est pas dense, et le rappel donne $L = \alpha\mathbb Z$ avec $\alpha = \min(L\cap\mathbb R_+^*)>0$. Posons $\varepsilon = e^\alpha$ : c'est le plus petit élément de $G\cap]1,+\infty[$, et $G_+ = \{\varepsilon^n,\ n\in\mathbb Z\}$.</p><p>Enfin, si $g\in G$ et $g\lt0$, alors $-g = (-1)g\in G_+$. Donc $G = G_+\cup(-G_+) = \{\pm\varepsilon^n\}$.</p>`, ["pe-sgr"]),
    Q(6, "Toutes les solutions", R`<p>$(\sigma,n)\mapsto\sigma\varepsilon^n$ est un isomorphisme $\{\pm1\}\times\mathbb Z\to G$. Pour $x,y>0$ : $\theta>1$.</p>`, R`<p>L'application $\{\pm1\}\times\mathbb Z\to G$, $(\sigma,n)\mapsto\sigma\varepsilon^n$, est un morphisme surjectif (Q5), injectif car $\varepsilon>1$ (donc $\varepsilon^n = \pm1\Rightarrow n = 0$). Ainsi $\mathcal H_{\mathbb Z}\simeq G\simeq\mathbb Z/2\mathbb Z\times\mathbb Z$, sauf si $G = \{\pm1\}$, auquel cas $\mathcal H_{\mathbb Z} = \{(\pm1,0)\}$.</p><p>Si $x,y\geqslant1$, alors $\theta(x,y)>1$, donc $\theta(x,y) = \varepsilon^n$ avec $n\geqslant1$. Réciproquement, $\varepsilon^n>1$ pour $n\geqslant1$ correspond (Q4) à $x,y\geqslant1$. On a $\varepsilon = x_1+y_1\sqrt d$ où $(x_1,y_1)$ est la solution à coordonnées positives de plus petit $x$ (ou de plus petit $y$), appelée solution fondamentale, et</p><div class="sbox">$$x_n+y_n\sqrt d = (x_1+y_1\sqrt d)^n.$$</div>`),
    Q(7, "Le cas d'un carré", R`<p>$d = m^2$ : $(x-my)(x+my) = 1$ dans $\mathbb Z$.</p>`, R`<p>Si $d = m^2$ ($m\geqslant1$), $(x-my)(x+my) = 1$ avec deux facteurs entiers, donc $x-my = x+my = \pm1$, d'où $y = 0$ et $x = \pm1$.</p>`)
  ],
  piege: R`L'argument de discrétion (Q4) est essentiel : un sous-groupe de $\mathbb R^*$ peut être dense (par exemple $\{2^a3^b\}$), et ce sont les coordonnées <b>entières</b> qui l'empêchent ici.`,
  methode: R`Pour montrer qu'un groupe de « nombres » est monogène : le plonger dans $\mathbb R$ (via $\ln$), montrer qu'il est discret, et conclure par la classification des sous-groupes de $\mathbb R$.`
},

/* ===================== Partie III ===================== */
{ id: "pell-3", ...P, part: "Partie III", time: "40 min",
  title: "Existence d'une solution non triviale",
  enonce: PRE + R`<p><b>Partie III.</b> On suppose que $d$ n'est pas un carré parfait.</p><ol start="8">
<li>(<b>Dirichlet</b>) Soit $N\geqslant1$. En considérant les parties fractionnaires de $0,\sqrt d,2\sqrt d,\dots,N\sqrt d$, montrer qu'il existe $1\leqslant y\leqslant N$ et $x\in\mathbb Z$ avec $|x-y\sqrt d|\lt\frac1N$. En déduire une infinité de couples $(x,y)\in\mathbb N^{*2}$ avec $|x-y\sqrt d|\lt\frac1y$.</li>
<li>Montrer que pour ces couples, $|x^2-dy^2|\lt1+2\sqrt d$. En déduire qu'il existe un entier $k\neq0$ et une infinité de couples $(x,y)\in\mathbb N^{*2}$ avec $x^2-dy^2 = k$, tous congrus entre eux modulo $|k|$ (coordonnée par coordonnée).</li>
<li>Soient $(x_1,y_1)\neq(x_2,y_2)$ deux tels couples. Montrer que $\frac{x_1+y_1\sqrt d}{x_2+y_2\sqrt d} = X+Y\sqrt d$ avec $X,Y\in\mathbb Z$, $X^2-dY^2 = 1$ et $Y\neq0$. Conclure.</li>
<li>Vérifier que $(3,2)$, $(8,3)$, $(649,180)$ sont solutions pour $d = 2,7,13$, et calculer la solution suivante pour $d = 2$. Que représentent les $\frac{x_n}{y_n}$ ?</li></ol>`,
  decode: { donnees: [R`$\sqrt d$ irrationnel.`], but: R`Prouver l'existence d'une solution non triviale par des arguments de tiroirs.`, cles: {} },
  steps: [
    Q(8, "Approximation de Dirichlet", R`<p>$N+1$ nombres $\{j\sqrt d\}\in[0,1[$ et $N$ intervalles $[\frac iN,\frac{i+1}N[$.</p>`, R`<p>Les $N+1$ réels $\{j\sqrt d\} = j\sqrt d-\lfloor j\sqrt d\rfloor$, $0\leqslant j\leqslant N$, sont dans $[0,1[$, réunion des $N$ intervalles $[\frac iN,\frac{i+1}N[$. Par les tiroirs, deux d'entre eux, d'indices $j\lt j'$, sont dans le même intervalle : $|\{j'\sqrt d\}-\{j\sqrt d\}|\lt\frac1N$. Avec $y = j'-j\in[1,N]$ et $x = \lfloor j'\sqrt d\rfloor-\lfloor j\sqrt d\rfloor$ : $|y\sqrt d-x|\lt\frac1N\leqslant\frac1y$. Et $x\geqslant1$ car $x>y\sqrt d-1\geqslant\sqrt d-1\geqslant0$.</p><p><b>Infinité.</b> $|x-y\sqrt d|>0$ car $\sqrt d\notin\mathbb Q$. Si l'on n'avait qu'un nombre fini de couples, on choisirait $N$ avec $\frac1N$ plus petit que tous les $|x-y\sqrt d|$ correspondants : le couple fourni par $N$ serait nouveau. Contradiction.</p>`, ["pe-tiroir", "pe-irr"]),
    Q(9, "Une valeur k atteinte une infinité de fois", R`<p>$|x+y\sqrt d|\leqslant|x-y\sqrt d|+2y\sqrt d$. Puis tiroirs sur $k$, puis sur $(x\bmod|k|,y\bmod|k|)$.</p>`, R`<p>$|x^2-dy^2| = |x-y\sqrt d|\,|x+y\sqrt d|\lt\frac1y\big(\frac1y+2y\sqrt d\big)\leqslant1+2\sqrt d$. L'entier $x^2-dy^2$ est non nul ($\sqrt d$ irrationnel) et ne prend qu'un nombre fini de valeurs dans $]-1-2\sqrt d,1+2\sqrt d[$ : une valeur $k\neq0$ est atteinte par une infinité de couples. Parmi eux, $(x\bmod|k|,\,y\bmod|k|)$ ne prend que $k^2$ valeurs : une infinité de couples ont les mêmes restes.</p>`, ["pe-tiroir"]),
    Q(10, "Fabriquer une solution", R`<p>$\frac{x_1+y_1\sqrt d}{x_2+y_2\sqrt d} = \frac{(x_1+y_1\sqrt d)(x_2-y_2\sqrt d)}k$. Congruences : $x_1x_2-dy_1y_2\equiv x_1^2-dy_1^2 = k\equiv0$.</p>`, R`<p>En multipliant par le conjugué ($x_2^2-dy_2^2 = k$) :</p>$$\frac{x_1+y_1\sqrt d}{x_2+y_2\sqrt d} = \frac{(x_1x_2-dy_1y_2)+(x_2y_1-x_1y_2)\sqrt d}k.$$<p>Modulo $|k|$, $x_1\equiv x_2$ et $y_1\equiv y_2$, donc $x_1x_2-dy_1y_2\equiv x_1^2-dy_1^2 = k\equiv0$ et $x_2y_1-x_1y_2\equiv x_1y_1-x_1y_1 = 0$. Ainsi $X = \frac{x_1x_2-dy_1y_2}k$ et $Y = \frac{x_2y_1-x_1y_2}k$ sont entiers. Par multiplicativité de $N$ : $X^2-dY^2 = \frac{N(x_1+y_1\sqrt d)}{N(x_2+y_2\sqrt d)} = \frac kk = 1$.</p><p>Si $Y = 0$, alors $X = \pm1$ et $x_1+y_1\sqrt d = \pm(x_2+y_2\sqrt d)$ ; les deux sont $>0$, donc égalité, et $(x_1,y_1) = (x_2,y_2)$ par irrationalité de $\sqrt d$, exclu. Donc $(X,Y)$ est une solution non triviale.</p><div class="sbox"><p>Si $d$ n'est pas un carré, $\mathcal H_{\mathbb Z}\simeq\mathbb Z/2\mathbb Z\times\mathbb Z$ : l'équation a une infinité de solutions.</p></div>`, ["pe-irr"]),
    Q(11, "Exemples", R`<p>$9-8$, $64-63$, $649^2-13\cdot180^2$. $(3+2\sqrt2)^2$.</p>`, R`<p>$3^2-2\cdot2^2 = 1$ ; $8^2-7\cdot3^2 = 64-63 = 1$ ; $649^2-13\cdot180^2 = 421201-421200 = 1$. Ce sont les solutions fondamentales (données par les fractions continues : $\sqrt7 = [2;\overline{1,1,1,4}]$ donne la réduite $[2;1,1,1] = \frac83$).</p><p>Pour $d = 2$ : $(3+2\sqrt2)^2 = 17+12\sqrt2$, d'où $(17,12)$, puis $(3+2\sqrt2)(17+12\sqrt2) = 99+70\sqrt2$. Comme $\frac{x_n}{y_n}-\sqrt2 = \frac1{y_n(x_n+y_n\sqrt2)}$, les $\frac{x_n}{y_n}$ sont d'excellentes approximations de $\sqrt2$ : $\frac{99}{70}\approx1{,}4142857$, à $7\cdot10^{-5}$ près.</p>${figPell}`)
  ],
  piege: R`La solution fondamentale peut être énorme : pour $d = 61$, c'est $(1766319049,\ 226153980)$. Une recherche naïve est sans espoir ; ce sont les fractions continues qui la trouvent.`,
  methode: R`Existence par les tiroirs : produire une infinité d'objets dans un ensemble fini de classes, puis en comparer deux de la même classe (ici, leur quotient est une solution).`
}
]);
})();

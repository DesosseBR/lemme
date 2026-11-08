/* Commando X-ENS · Aller plus loin · Sujet « Calcul de l'intégrale de Fresnel ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 12, kind: "probleme", qnav: true, side: true, level: 4, plus: "fres",
  sujet: "L'intégrale de Fresnel par une équation différentielle",
  sujetDesc: "On calcule ∫₀^∞ e^{ix²} dx = (√π/2)e^{iπ/4} sans analyse complexe : on introduit φ(x) = ∫₀^∞ e^{−t}e^{ixt}t^{α−1} dt (transformée de Fourier d'une densité Gamma), on montre qu'elle vérifie une équation différentielle linéaire du premier ordre, on la résout, puis on fait tendre x vers +∞ avec une intégration par parties qui rend l'intégrale absolument convergente." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "fr-dom": { t: "Dérivation sous l'intégrale", b: R`$$|\partial_xg(x,t)|\leqslant h(t),\ h\text{ intégrable}\ \Longrightarrow\ \frac d{dx}\int g(x,t)\,dt = \int\partial_xg(x,t)\,dt.$$` },
  "fr-gam": { t: "Fonction Gamma", b: R`<p>$\Gamma(\alpha) = \int_0^{+\infty}e^{-t}t^{\alpha-1}dt$ pour $\alpha>0$ ; $\Gamma(\frac12) = \sqrt\pi$ (par $t = x^2$ et l'intégrale de Gauss).</p>` },
  "fr-ipp": { t: "Intégrale semi-convergente", b: R`$$-1\leqslant\beta\lt0\ :\quad\int_1^{+\infty}u^\beta e^{iu}du = \Big[-iu^\beta e^{iu}\Big]_1^{+\infty}+i\beta\int_1^{+\infty}u^{\beta-1}e^{iu}du\quad(\text{absolument CV}).$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> On veut calculer $\displaystyle\Phi = \int_0^{+\infty}e^{ix^2}dx = \int_0^{+\infty}\cos(x^2)\,dx+i\int_0^{+\infty}\sin(x^2)\,dx$. Pour $\alpha\in\,]0,1[$, on pose $J(\alpha) = \int_0^{+\infty}t^{\alpha-1}e^{it}\,dt$ et, pour $x\geqslant0$, $\varphi(x) = \int_0^{+\infty}e^{-t}e^{ixt}t^{\alpha-1}\,dt$.</p>`;

/* Figure : spirale de Cornu */
const figCornu = (() => {
  const s = 330, ox = 40, oy = 300, X = x => (ox + s * x).toFixed(1), Y = y => (oy - s * y).toFixed(1);
  let cx = 0, cy = 0, d = `M${X(0)},${Y(0)}`; const h = 0.004;
  for (let t = 0; t < 7; t += h) { const tm = t + h / 2; cx += Math.cos(tm * tm) * h; cy += Math.sin(tm * tm) * h; d += `L${X(cx)},${Y(cy)}`; }
  const L = Math.sqrt(Math.PI / 8);
  let b = `<line x1="${X(0)}" y1="${Y(0)}" x2="${X(0.95)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(0)}" x2="${X(0)}" y2="${Y(0.85)}" class="ax"/>`;
  b += `<path d="${d}" class="vb" style="fill:none;stroke-width:1.6"/>`;
  b += `<circle cx="${X(L)}" cy="${Y(L)}" r="4.5" class="ptr"/>` + S(+X(L) + 10, +Y(L) - 8, "(√(π/8), √(π/8))", "start", "sm");
  b += `<line x1="${X(L)}" y1="${Y(0)}" x2="${X(L)}" y2="${Y(L)}" class="thin"/><line x1="${X(0)}" y1="${Y(L)}" x2="${X(L)}" y2="${Y(L)}" class="thin"/>`;
  b += S(+X(0.93), +Y(0) + 18, "Re", "end", "sm") + S(+X(0) - 6, +Y(0.82), "Im", "end", "sm");
  return FIG(380, 330, b, R`La courbe $s\mapsto\int_0^se^{ix^2}dx$ (spirale de Cornu, pour $0\leqslant s\leqslant7$). Elle s'enroule autour de sa limite $\frac{\sqrt\pi}2e^{i\pi/4} = \sqrt{\frac\pi8}(1+i)$ : l'intégrale converge, mais lentement et en oscillant.`, "Spirale de Cornu");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "fres-1", ...P, part: "Partie I", time: "30 min",
  title: "Convergence et réduction",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $J(\alpha)$ converge. (Sur $[1,+\infty[$, intégrer par parties.) Est-elle absolument convergente ?</li>
<li>Montrer que $\Phi$ converge et que $\Phi = \frac12J(\frac12)$.</li>
<li>Montrer que $\varphi$ est bien définie, de classe $\mathcal C^1$ sur $[0,+\infty[$, et que $\varphi(0) = \Gamma(\alpha)$.</li></ol>`,
  decode: { donnees: [R`$\alpha\in\,]0,1[$ : $t^{\alpha-1}$ est intégrable en $0$ mais pas en $+\infty$.`], but: R`Ramener $\Phi$ à $J(\frac12)$, et introduire un paramètre $x$ avec un facteur $e^{-t}$ qui rend tout absolument convergent.`, cles: {} },
  steps: [
    Q(1, "Convergence de J(α)", R`<p>$\int_1^Mt^{\alpha-1}e^{it}dt = \big[t^{\alpha-1}\frac{e^{it}}i\big]_1^M-\frac{\alpha-1}i\int_1^Mt^{\alpha-2}e^{it}dt$.</p>`, R`<p>Sur $]0,1]$ : $|t^{\alpha-1}e^{it}| = t^{\alpha-1}$, intégrable (Riemann, $1-\alpha\lt1$). Sur $[1,M]$, par parties :</p>$$\int_1^Mt^{\alpha-1}e^{it}dt = \Big[\frac{t^{\alpha-1}e^{it}}i\Big]_1^M+i(\alpha-1)\int_1^Mt^{\alpha-2}e^{it}dt.$$<p>Le crochet tend vers $ie^{i}$ quand $M\to+\infty$ ($t^{\alpha-1}\to0$), et $|t^{\alpha-2}e^{it}| = t^{\alpha-2}$ est intégrable sur $[1,+\infty[$ ($2-\alpha>1$). Donc $J(\alpha)$ converge.</p><p>Elle n'est pas absolument convergente : $\int_1^{+\infty}t^{\alpha-1}dt = +\infty$.</p>`, ["fr-ipp"]),
    Q(2, "Réduction de Φ", R`<p>$t = x^2$, $dx = \frac{dt}{2\sqrt t}$.</p>`, R`<p>Le changement de variable $t = x^2$ (bijection $\mathcal C^1$ de $]0,+\infty[$) donne, pour $0\lt a\lt b$, $\int_a^be^{ix^2}dx = \int_{a^2}^{b^2}e^{it}\frac{dt}{2\sqrt t}$. Comme $J(\frac12)$ converge (Q1), on passe à la limite :</p><div class="sbox">$$\Phi = \frac12\int_0^{+\infty}t^{-1/2}e^{it}dt = \frac12J\big(\tfrac12\big).$$</div>`),
    Q(3, "La fonction φ", R`<p>$|e^{-t}e^{ixt}t^{\alpha-1}| = e^{-t}t^{\alpha-1}$ ; dérivée en $x$ dominée par $e^{-t}t^\alpha$.</p>`, R`<p>$|e^{-t}e^{ixt}t^{\alpha-1}| = e^{-t}t^{\alpha-1}$, intégrable sur $]0,+\infty[$ (c'est l'intégrande de $\Gamma(\alpha)$) : $\varphi$ est bien définie, et $\varphi(0) = \Gamma(\alpha)$. La dérivée en $x$ de l'intégrande est $ite^{-t}e^{ixt}t^{\alpha-1} = ie^{-t}e^{ixt}t^\alpha$, de module $e^{-t}t^\alpha$, intégrable, indépendant de $x$. Par dérivation sous l'intégrale :</p><div class="sbox">$$\varphi\in\mathcal C^1,\qquad\varphi'(x) = i\int_0^{+\infty}e^{t(ix-1)}t^\alpha\,dt.$$</div>`, ["fr-dom", "fr-gam"])
  ],
  piege: R`On ne peut pas dériver directement $\int t^{\alpha-1}e^{ixt}dt$ par rapport à $x$ : la dérivée $it^\alpha e^{ixt}$ n'est pas intégrable. Le facteur $e^{-t}$ est indispensable, et il faudra le faire disparaître à la fin par un passage à la limite.`,
  methode: R`Calculer une intégrale difficile : l'insérer dans une famille à paramètre, montrer que la famille vérifie une équation différentielle simple, la résoudre, puis spécialiser le paramètre.`
},

/* ===================== Partie II ===================== */
{ id: "fres-2", ...P, part: "Partie II", time: "30 min",
  title: "L'équation différentielle",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Par une intégration par parties dans $\varphi'(x)$, montrer que $\varphi'(x) = -\dfrac\alpha{x+i}\varphi(x)$.</li>
<li>Montrer que $\int_0^x\frac{dt}{t+i} = \frac12\ln(1+x^2)-i\arctan x$.</li>
<li>En déduire $\varphi(x) = \Gamma(\alpha)(1+x^2)^{-\alpha/2}e^{i\alpha\arctan x}$.</li></ol>`,
  decode: { donnees: [R`$\varphi'(x) = i\int e^{t(ix-1)}t^\alpha dt$.`], but: R`Faire apparaître $\varphi$ dans $\varphi'$, puis résoudre $y' = a(x)y$.`, cles: {} },
  steps: [
    Q(4, "Intégration par parties", R`<p>$u = t^\alpha$, $v = \frac{e^{t(ix-1)}}{ix-1}$. Le crochet est nul en $0$ et en $+\infty$.</p>`, R`<p>Avec $u(t) = t^\alpha$, $v(t) = \frac{e^{t(ix-1)}}{ix-1}$ ($v' = e^{t(ix-1)}$) :</p>$$\begin{aligned}\int_0^{+\infty}t^\alpha e^{t(ix-1)}dt &= \Big[\frac{t^\alpha e^{t(ix-1)}}{ix-1}\Big]_0^{+\infty}-\frac\alpha{ix-1}\int_0^{+\infty}t^{\alpha-1}e^{t(ix-1)}dt\\&= -\frac\alpha{ix-1}\varphi(x),\end{aligned}$$<p>car $|t^\alpha e^{t(ix-1)}| = t^\alpha e^{-t}\to0$ en $0$ et en $+\infty$. Donc</p>$$\varphi'(x) = -\frac{i\alpha}{ix-1}\varphi(x) = -\frac{i\alpha}{i(x+i)}\varphi(x)\quad\text{car}\quad ix-1 = i(x+i).$$<div class="sbox">$$\varphi'(x) = -\frac\alpha{x+i}\,\varphi(x).$$</div>`),
    Q(5, "Une primitive", R`<p>$\frac1{t+i} = \frac{t-i}{t^2+1}$.</p>`, R`$$\begin{aligned}\int_0^x\frac{dt}{t+i} &= \int_0^x\frac{t-i}{t^2+1}dt = \Big[\frac12\ln(1+t^2)\Big]_0^x-i\big[\arctan t\big]_0^x\\&= \frac12\ln(1+x^2)-i\arctan x.\end{aligned}$$`),
    Q(6, "Résolution", R`<p>$y' = a(x)y$ a pour solutions $y(0)e^{\int_0^xa}$, même pour $a$ à valeurs complexes.</p>`, R`<p>$\varphi' = a\varphi$ avec $a(x) = -\frac\alpha{x+i}$ continue. Les solutions sont $\varphi(x) = \varphi(0)\exp\big(\int_0^xa\big)$ (dériver $\varphi\,e^{-\int_0^xa}$). Avec Q5 et $\varphi(0) = \Gamma(\alpha)$ :</p>$$\varphi(x) = \Gamma(\alpha)\exp\Big(-\frac\alpha2\ln(1+x^2)+i\alpha\arctan x\Big),$$<div class="sbox">$$\varphi(x) = \Gamma(\alpha)\,(1+x^2)^{-\alpha/2}\,e^{i\alpha\arctan x}.$$</div><p>(C'est la fonction caractéristique de la loi Gamma : $(1-ix)^{-\alpha}$, écrite sous forme polaire.)</p>`)
  ],
  piege: R`Attention au logarithme complexe : on n'écrit pas $\ln(x+i)$, qui n'a pas de sens immédiat ; on calcule une primitive de $\frac1{t+i}$ en séparant parties réelle et imaginaire, puis on utilise l'exponentielle complexe.`,
  methode: R`Équation $y' = a(x)y$ à coefficient complexe : $y = y(0)\exp\int_0^xa$, avec une primitive explicite obtenue en multipliant par la quantité conjuguée.`
},

/* ===================== Partie III ===================== */
{ id: "fres-3", ...P, part: "Partie III", time: "35 min",
  title: "Passage à la limite et valeur de l'intégrale",
  enonce: PRE + R`<p><b>Partie III.</b> Pour $y\geqslant0$, on pose $K(y) = \int_0^{+\infty}e^{-uy}e^{iu}u^{\alpha-1}du$.</p><ol start="7">
<li>Montrer que pour $x>0$, $x^\alpha\varphi(x) = K(\frac1x)$, et que $K(0) = J(\alpha)$.</li>
<li>Montrer que $K$ est continue en $0$. On découpera en $[0,1]$ et $[1,+\infty[$, et sur $[1,+\infty[$ on intégrera par parties pour obtenir une intégrale dominée par $u^{\alpha-2}$.</li>
<li>En déduire $J(\alpha) = \Gamma(\alpha)e^{i\alpha\pi/2}$, puis $$\int_0^{+\infty}e^{ix^2}dx = \frac{\sqrt\pi}2e^{i\pi/4},$$$$\int_0^{+\infty}\cos(x^2)\,dx = \int_0^{+\infty}\sin(x^2)\,dx = \sqrt{\frac\pi8}.$$</li>
<li>Avec $J(\alpha)$, calculer $\int_0^{+\infty}\frac{\sin t}{t^{\beta}}dt$ pour $\beta\in\,]0,1[$.</li></ol>`,
  decode: { donnees: [R`$\varphi(x) = \Gamma(\alpha)(1+x^2)^{-\alpha/2}e^{i\alpha\arctan x}$.`], but: R`Faire tendre $x\to+\infty$ des deux côtés : $\arctan x\to\frac\pi2$.`, cles: {} },
  steps: [
    Q(7, "Changement de variable", R`<p>$u = xt$.</p>`, R`<p>Avec $u = xt$ ($x>0$) : $\varphi(x) = \int_0^{+\infty}e^{-u/x}e^{iu}\Big(\frac ux\Big)^{\alpha-1}\frac{du}x = x^{-\alpha}K\big(\tfrac1x\big)$. Et $K(0) = \int_0^{+\infty}e^{iu}u^{\alpha-1}du = J(\alpha)$.</p>`),
    Q(8, "Continuité de K en 0", R`<p>$\int_1^{+\infty}u^{\alpha-1}e^{u(i-y)}du = -\frac{e^{i-y}}{i-y}-\frac{\alpha-1}{i-y}\int_1^{+\infty}u^{\alpha-2}e^{u(i-y)}du$.</p>`, R`<p><b>Sur $[0,1]$.</b> $|e^{-uy}e^{iu}u^{\alpha-1}|\leqslant u^{\alpha-1}$, intégrable, indépendant de $y$ : par continuité sous l'intégrale, $y\mapsto\int_0^1$ est continue.</p><p><b>Sur $[1,+\infty[$.</b> Avec $e^{u(i-y)}$ de primitive $\frac{e^{u(i-y)}}{i-y}$ ($i-y\neq0$) et $|u^{\alpha-1}e^{u(i-y)}|\to0$ :</p>$$\int_1^{+\infty}u^{\alpha-1}e^{u(i-y)}du = -\frac{e^{i-y}}{i-y}-\frac{\alpha-1}{i-y}\int_1^{+\infty}u^{\alpha-2}e^{u(i-y)}du.$$<p>(Pour $y = 0$, c'est le calcul de Q1.) Le premier terme est continu en $y$. Dans l'intégrale, $|u^{\alpha-2}e^{u(i-y)}|\leqslant u^{\alpha-2}$, intégrable sur $[1,+\infty[$, indépendant de $y$ : elle est continue en $y$. Donc $K$ est continue sur $[0,+\infty[$, en particulier en $0$.</p>`, ["fr-ipp"]),
    Q(9, "La valeur", R`<p>$x^\alpha(1+x^2)^{-\alpha/2} = (1+x^{-2})^{-\alpha/2}\to1$ et $\arctan x\to\frac\pi2$.</p>`, R`<p>Par Q7 et Q8, $x^\alpha\varphi(x) = K(\frac1x)\to K(0) = J(\alpha)$ quand $x\to+\infty$. Par Q6 :</p>$$x^\alpha\varphi(x) = \Gamma(\alpha)\big(1+x^{-2}\big)^{-\alpha/2}e^{i\alpha\arctan x}\to\Gamma(\alpha)e^{i\alpha\pi/2}.$$<div class="sbox">$$J(\alpha) = \int_0^{+\infty}t^{\alpha-1}e^{it}dt = \Gamma(\alpha)e^{i\alpha\pi/2}.$$</div><p>Pour $\alpha = \frac12$, $\Gamma(\frac12) = \sqrt\pi$ et $\Phi = \frac12J(\frac12) = \frac{\sqrt\pi}2e^{i\pi/4} = \frac{\sqrt\pi}2\cdot\frac{1+i}{\sqrt2}$. En séparant parties réelle et imaginaire :</p><div class="sbox">$$\int_0^{+\infty}\cos(x^2)\,dx = \int_0^{+\infty}\sin(x^2)\,dx = \frac{\sqrt\pi}{2\sqrt2} = \sqrt{\frac\pi8}.$$</div>${figCornu}`, ["fr-gam"]),
    Q(10, "Une autre intégrale", R`<p>Partie imaginaire de $J(1-\beta)$.</p>`, R`<p>Avec $\alpha = 1-\beta\in\,]0,1[$ : $\int_0^{+\infty}t^{-\beta}e^{it}dt = \Gamma(1-\beta)e^{i(1-\beta)\pi/2}$. Partie imaginaire :</p>$$\int_0^{+\infty}\frac{\sin t}{t^\beta}dt = \Gamma(1-\beta)\sin\Big(\frac{(1-\beta)\pi}2\Big) = \Gamma(1-\beta)\cos\Big(\frac{\beta\pi}2\Big).$$<p>Quand $\beta\to1^-$, $\Gamma(1-\beta)\cos\frac{\beta\pi}2\sim\frac1{1-\beta}\cdot\frac\pi2(1-\beta)\to\frac\pi2$ : on retrouve formellement l'intégrale de Dirichlet $\int_0^{+\infty}\frac{\sin t}t\,dt = \frac\pi2$.</p>`)
  ],
  piege: R`La limite $\lim_{x\to+\infty}x^\alpha\varphi(x) = J(\alpha)$ n'est pas une simple convergence dominée : $J(\alpha)$ est semi-convergente. L'intégration par parties sur $[1,+\infty[$ remplace $u^{\alpha-1}$ par $u^{\alpha-2}$, intégrable, et permet de dominer.`,
  methode: R`Pour faire passer une limite sous une intégrale semi-convergente : intégrer par parties pour gagner une puissance de décroissance, puis appliquer la convergence dominée à l'intégrale absolument convergente obtenue.`
}
]);
})();

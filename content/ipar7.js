/* Intégrales dépendant d'un paramètre (Spé) : bloc « Études concrètes » (1re partie). Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 6 };
const { GRAPH } = window.__LA;
LEMME.rappels({
  "ip-cont": { t: "Continuité d'une intégrale à paramètre", b: R`<p>Soit $f(x) = \int_Iu(x,t)\,dt$ avec $x\in A$ (intervalle). Si :</p><ul><li>pour tout $t$, $x\mapsto u(x,t)$ est continue ;</li><li>pour tout $x$, $t\mapsto u(x,t)$ est continue par morceaux ;</li><li>$|u(x,t)|\leqslant\varphi(t)$ avec $\varphi$ intégrable, pour tout $x$ d'un segment quelconque $[a,b]\subset A$ (domination sur tout segment) ;</li></ul><p>alors $f$ est définie et continue sur $A$.</p>` },
  "ip-deriv": { t: "Dérivation sous l'intégrale", b: R`<p>Si de plus $\frac{\partial u}{\partial x}$ existe, est continue en $x$, continue par morceaux en $t$, et est dominée sur tout segment par une fonction intégrable (et $t\mapsto u(x,t)$ intégrable pour tout $x$), alors $f$ est de classe $\mathcal C^1$ et</p>$$f'(x) = \int_I\frac{\partial u}{\partial x}(x,t)\,dt.$$<p>Pour $\mathcal C^k$ : dominer la dérivée $k$-ième et vérifier l'intégrabilité des dérivées d'ordre $\lt k$.</p>` },
  "ip-cvdc": { t: "Convergence dominée à paramètre continu", b: R`<p>Si $u(x,t)\to v(t)$ quand $x\to x_0$ (pour tout $t$), et si $|u(x,t)|\leqslant\varphi(t)$ intégrable au voisinage de $x_0$, alors $\int_Iu(x,t)\,dt\to\int_Iv(t)\,dt$. (Se déduit du cas des suites par la caractérisation séquentielle.)</p>` },
  "ip-monot": { t: "Monotonie d'une intégrale à paramètre", b: R`<p>Si $x\leqslant y$ entraîne $u(x,t)\leqslant u(y,t)$ pour tout $t$, l'intégration en bon ordre donne $f(x)\leqslant f(y)$. C'est souvent plus rapide que de dériver.</p>` }
});
const fTan = x => { if (x <= -0.97) return NaN; let s = 0; const N = 3000; for (let n = 0; n < N; n++) s += (n % 2 ? -1 : 1) / (x + 2 * n + 1); s += (N % 2 ? -1 : 1) / (2 * (x + 2 * N + 1)); return s > 3.2 ? NaN : s; };
const figTan = GRAPH({ w: 460, h: 260, x: [-1, 6], y: [0, 3], xt: [-1, 0, 1, 2, 3, 4, 5, 6], xtl: ["−1", "0", "1", "2", "3", "4", "5", "6"], yt: [0.5, 1, 2, 3], ytl: ["0,5", "1", "2", "3"], xl: "x",
  curves: [
    { f: fTan, c: "b", lab: [0.2, 1.25, "f", "start"] },
    { f: x => { const v = 1 / (x + 1); return x <= -0.67 || v > 3.2 ? NaN : v; }, c: "g", dash: true, lab: [-0.55, 2.7, "1/(x + 1)", "start"] },
    { f: x => { if (x < 0.2) return NaN; const v = 1 / (2 * x); return v > 3.2 ? NaN : v; }, c: "r", dash: true, lab: [4.3, 0.32, "1/(2x)", "start"] }
  ] },
  R`La fonction $f(x) = \int_0^{\pi/4}\tan^x(t)\,dt$ (bleu) explose comme $\frac1{x+1}$ (orange, tirets) quand $x\to-1^+$, et décroît vers $0$ comme $\frac1{2x}$ (rouge, tirets) en $+\infty$.`, "La fonction f et ses deux équivalents");
LEMME.exercises([
{ id: "ipar-86", ...P, level: 2, time: "25 min",
  title: "∫₀^∞ dt/(1 + x³ + t³) : valeur en 0, continuité, limite",
  enonce: R`<p>Soit $f : x\mapsto\displaystyle\int_0^{+\infty}\frac{dt}{1+x^3+t^3}$.</p><ol><li>Montrer que $f$ est définie sur $\mathbb R_+$.</li><li>À l'aide du changement de variable $u = \frac1t$, calculer $f(0)$.</li><li>Montrer que $f$ est continue et décroissante.</li><li>Déterminer $\lim_{+\infty}f$.</li></ol>`,
  decode: { donnees: [R`$1+t^3 = (1+t)(t^2-t+1)$.`], but: R`Domination par $\frac1{1+t^3}$ ; monotonie par comparaison ; changement d'échelle $t = xu$.`, cles: {} },
  steps: [
    { t: "1) Définition", h: R`<p>Équivalent $\frac1{t^3}$.</p>`, b: R`<p>Pour $x\geqslant0$, $g(x,t) = \frac1{1+x^3+t^3}$ est continue en $t$ sur $\mathbb R_+$ et $g(x,t)\sim\frac1{t^3}$ en $+\infty$ : $f(x)$ existe.</p>` },
    { t: "2) Calcul de f(0)", h: R`<p>$\int_0^{+\infty}\frac{dt}{1+t^3} = \int_0^{+\infty}\frac{u\,du}{1+u^3}$.</p>`, b: R`<p>$t\mapsto\frac1t$ est une bijection $\mathcal C^1$ de $\mathbb R_+^*$ sur lui-même. Avec $t = \frac1u$, $dt = -\frac{du}{u^2}$ :</p>$$f(0) = \int_0^{+\infty}\frac{dt}{1+t^3} = \int_0^{+\infty}\frac{u^3}{u^3+1}\cdot\frac{du}{u^2} = \int_0^{+\infty}\frac{u\,du}{1+u^3}.$$<p>En additionnant les deux écritures et en simplifiant par $1+t$ :</p>$$\begin{aligned}2f(0) &= \int_0^{+\infty}\frac{1+t}{1+t^3}\,dt = \int_0^{+\infty}\frac{dt}{t^2-t+1}\\&= \frac2{\sqrt3}\Big[\arctan\frac{2t-1}{\sqrt3}\Big]_0^{+\infty} = \frac2{\sqrt3}\Big(\frac\pi2+\frac\pi6\Big).\end{aligned}$$<div class="sbox">$$f(0) = \frac{2\pi}{3\sqrt3}.$$</div>` },
    { t: "3) Continuité et monotonie", h: R`<p>$|g(x,t)|\leqslant\frac1{1+t^3}$.</p>`, b: R`<ul><li><b>Continuité</b> : $x\mapsto g(x,t)$ est continue et $0\leqslant g(x,t)\leqslant\frac1{1+t^3}$, intégrable, pour tout $x\geqslant0$. Par domination, $f$ est continue sur $\mathbb R_+$.</li><li><b>Monotonie</b> : si $0\leqslant x\leqslant y$, alors $g(y,t)\leqslant g(x,t)$ pour tout $t$, donc $f(y)\leqslant f(x)$ : $f$ est décroissante.</li></ul>`, rappels: ["ip-cont", "ip-monot"] },
    { t: "4) Limite en +∞", h: R`<p>$t = xu$.</p>`, b: R`<p>Pour $x>0$, avec $t = xu$ :</p>$$0\leqslant f(x)\leqslant\int_0^{+\infty}\frac{dt}{x^3+t^3} = \frac1{x^2}\int_0^{+\infty}\frac{du}{1+u^3}\xrightarrow[x\to+\infty]{}0.$$<div class="sbox">$$\lim_{x\to+\infty}f(x) = 0.$$</div>` }
  ],
  piege: R`Le changement de variable $u = \frac1t$ ne calcule pas l'intégrale directement : c'est la somme des deux écritures qui se simplifie.`,
  methode: R`Monotonie d'une intégrale à paramètre : comparer les intégrandes plutôt que dériver.`
},
{ id: "ipar-87", ...P, level: 2, time: "20 min",
  title: "∫₀^∞ e^{−t}/(1 + tx) dt est C^∞ ; dérivées en 0",
  enonce: R`<p>On pose $F(x) = \displaystyle\int_0^{+\infty}\frac{e^{-t}}{1+tx}\,dt$.</p><ol><li>Montrer que $F(x)$ est bien défini pour tout $x\geqslant0$.</li><li>Montrer que $F$ est de classe $\mathcal C^\infty$ sur $[0,+\infty[$.</li><li>Calculer $F^{(n)}(0)$ pour tout $n\in\mathbb N$.</li></ol>`,
  decode: { donnees: [R`$\frac{\partial^n}{\partial x^n}\frac1{1+tx} = \frac{(-1)^nn!\,t^n}{(1+tx)^{n+1}}$.`], but: R`Domination de chaque dérivée par $n!\,t^ne^{-t}$, indépendante de $x$.`, cles: {} },
  steps: [
    { t: "1) Définition", h: R`<p>$t^2f(x,t)\to0$.</p>`, b: R`<p>Pour $x\geqslant0$, $f(x,t) = \frac{e^{-t}}{1+tx}$ est continue en $t$, et $0\leqslant f(x,t)\leqslant e^{-t}$ : $F(x)$ existe.</p>` },
    { t: "2) Dérivées partielles", h: R`<p>Récurrence sur $n$.</p>`, b: R`<p>Pour $t\geqslant0$ fixé, $x\mapsto f(x,t)$ est $\mathcal C^\infty$ sur $[0,+\infty[$ et, par récurrence :</p>$$\frac{\partial^nf}{\partial x^n}(x,t) = \frac{(-1)^nn!\,t^n}{(1+tx)^{n+1}}e^{-t}.$$` },
    { t: "2) Domination", h: R`<p>$(1+tx)^{n+1}\geqslant1$.</p>`, b: R`<p>Pour tout $(x,t)\in[0,+\infty[^2$ :</p>$$\Big|\frac{\partial^nf}{\partial x^n}(x,t)\Big|\leqslant n!\,t^ne^{-t} = \varphi_n(t),$$<p>intégrable sur $[0,+\infty[$, indépendante de $x$. Par domination (pour chaque ordre $n$), $F$ est de classe $\mathcal C^\infty$ et</p>$$F^{(n)}(x) = (-1)^nn!\int_0^{+\infty}\frac{t^ne^{-t}}{(1+tx)^{n+1}}\,dt.$$`, rappels: ["ip-deriv"] },
    { t: "3) Valeur en 0", h: R`<p>$\int_0^{+\infty}t^ne^{-t}dt = n!$.</p>`, b: R`<div class="sbox">$$F^{(n)}(0) = (-1)^nn!\int_0^{+\infty}t^ne^{-t}\,dt = (-1)^n(n!)^2.$$</div><p><b>Remarque</b> : la série de Taylor $\sum(-1)^nn!\,x^n$ a un rayon nul : $F$ est $\mathcal C^\infty$ mais pas développable en série entière en $0$.</p>`, rappels: ["ip-tpe"] }
  ],
  piege: R`La domination doit être valable pour $x$ dans tout $[0,+\infty[$ (ou sur tout segment) : ici $\varphi_n$ ne dépend pas de $x$, c'est idéal.`,
  methode: R`Classe $\mathcal C^\infty$ : calculer la dérivée $n$-ième de l'intégrande et la dominer pour chaque $n$.`
},
{ id: "ipar-88", ...P, level: 2, time: "20 min",
  title: "La fonction x ↦ ∫₀ˣ cos t/(x + t) dt",
  enonce: R`<ol><li>Montrer la continuité de l'application $g$ définie sur $]0,+\infty[$ par $g(x) = \displaystyle\int_0^x\frac{\cos t}{x+t}\,dt$.</li><li>Étudier ses limites en $0^+$ et en $+\infty$.</li></ol>`,
  decode: { donnees: [], but: R`$t = xs$ pour fixer les bornes, puis domination ; intégration par parties en $+\infty$.`, cles: {} },
  steps: [
    { t: "1) Bornes fixes", h: R`<p>$t = xs$.</p>`, b: R`<p>Avec $t = xs$ :</p>$$g(x) = \int_0^1\frac{\cos(xs)}{1+s}\,ds.$$<p>$f(x,s) = \frac{\cos(xs)}{1+s}$ est continue en $x$ et $|f(x,s)|\leqslant1$, intégrable sur $[0,1]$. Par domination, $g$ est continue sur $]0,+\infty[$.</p>`, rappels: ["ip-cont"] },
    { t: "2) Limite en 0⁺", h: R`<p>Convergence dominée à paramètre continu.</p>`, b: R`<p>$f(x,s)\to\frac1{1+s}$ quand $x\to0^+$, avec la même domination :</p><div class="sbox">$$g(x)\xrightarrow[x\to0^+]{}\int_0^1\frac{ds}{1+s} = \ln2.$$</div>`, rappels: ["ip-cvdc"] },
    { t: "2) Limite en +∞", h: R`<p>Parties : $u(s) = \frac{\sin(xs)}x$, $v(s) = \frac1{1+s}$.</p>`, b: R`<p>Pour $x>0$, par parties :</p>$$g(x) = \Big[\frac{\sin(xs)}{x(1+s)}\Big]_0^1+\int_0^1\frac{\sin(xs)}{x(1+s)^2}\,ds = \frac{\sin x}{2x}+\int_0^1\frac{\sin(xs)}{x(1+s)^2}\,ds.$$<p>Les deux termes sont majorés en valeur absolue par $\frac1x$ :</p><div class="sbox">$$g(x)\xrightarrow[x\to+\infty]{}0.$$</div>` }
  ],
  piege: R`Sous la forme $\int_0^x$, la borne dépend de $x$ : le changement de variable $t = xs$ ramène à un intervalle fixe, où les théorèmes s'appliquent.`,
  methode: R`Oscillation rapide ($\cos(xs)$, $x\to+\infty$) : intégrer par parties pour faire apparaître $\frac1x$ (lemme de Riemann-Lebesgue).`
},
{ id: "ipar-89", ...P, level: 2, time: "20 min",
  title: "La fonction x ↦ ∫₀ˣ sin t/(x + t) dt",
  enonce: R`<ol><li>Montrer la continuité de l'application $g$ définie sur $]0,+\infty[$ par $g(x) = \displaystyle\int_0^x\frac{\sin t}{x+t}\,dt$.</li><li>Préciser ses limites en $0^+$ et en $+\infty$.</li></ol>`,
  decode: { donnees: [], but: R`Même méthode que pour l'intégrale avec $\cos$.`, cles: {} },
  steps: [
    { t: "1) Continuité", h: R`<p>$t = xs$.</p>`, b: R`<p>Avec $t = xs$ :</p>$$g(x) = \int_0^1\frac{\sin(xs)}{1+s}\,ds.$$<p>L'intégrande est continue en $x$ et majorée par $1$ (intégrable sur $[0,1]$) : $g$ est continue sur $]0,+\infty[$.</p>`, rappels: ["ip-cont"] },
    { t: "2) Limite en 0⁺", h: R`<p>$\sin(xs)\to0$.</p>`, b: R`<p>$\frac{\sin(xs)}{1+s}\to0$ quand $x\to0^+$, avec la domination par $1$ :</p><div class="sbox">$$g(x)\xrightarrow[x\to0^+]{}0.$$</div><p>Plus précisément, $|\sin(xs)|\leqslant xs$ donne $0\leqslant g(x)\leqslant x\int_0^1\frac s{1+s}ds = x(1-\ln2)$ pour $x\in\,]0,\pi]$.</p>`, rappels: ["ip-cvdc"] },
    { t: "2) Limite en +∞", h: R`<p>Parties avec $-\frac{\cos(xs)}x$.</p>`, b: R`<p>Par parties :</p>$$\begin{aligned}g(x) &= \Big[-\frac{\cos(xs)}{x(1+s)}\Big]_0^1-\int_0^1\frac{\cos(xs)}{x(1+s)^2}\,ds\\&= \frac1x\Big(1-\frac{\cos x}2\Big)-\int_0^1\frac{\cos(xs)}{x(1+s)^2}\,ds.\end{aligned}$$<p>Donc $|g(x)|\leqslant\frac{3/2}x+\frac1x$ :</p><div class="sbox">$$g(x)\xrightarrow[x\to+\infty]{}0.$$</div>` }
  ],
  piege: R`Pour $x\in[0,\pi]$, $\sin(xs)\geqslant0$ sur $[0,1]$ : c'est ce qui permet l'encadrement près de $0$.`,
  methode: R`Bornes dépendant de $x$ : se ramener à des bornes fixes avant d'appliquer les théorèmes.`
},
{ id: "ipar-90", ...P, level: 2, time: "20 min",
  title: "∫ dt/(√(1 + t²)√(x² − t²)) sur [−x, x]",
  enonce: R`<p>Pour $x>0$, on pose</p>$$f(x) = \int_{-x}^x\frac{dt}{\sqrt{1+t^2}\sqrt{x^2-t^2}}.$$<ol><li>Montrer que $f$ est définie et continue.</li><li>Déterminer les limites de $f$ en $0^+$ et en $+\infty$.</li></ol>`,
  decode: { donnees: [R`$\int_{-1}^1\frac{du}{\sqrt{1-u^2}} = \pi$.`], but: R`$t = ux$, puis domination par $\frac1{\sqrt{1-u^2}}$.`, cles: {} },
  steps: [
    { t: "1) Bornes fixes", h: R`<p>$t = ux$.</p>`, b: R`<p>Avec $t = ux$ ($dt = x\,du$, $\sqrt{x^2-t^2} = x\sqrt{1-u^2}$) :</p>$$f(x) = \int_{-1}^1\frac{du}{\sqrt{1+x^2u^2}\sqrt{1-u^2}}.$$` },
    { t: "1) Continuité", h: R`<p>$|g(x,u)|\leqslant\frac1{\sqrt{1-u^2}}$.</p>`, b: R`<p>$g(x,u) = \frac1{\sqrt{1+x^2u^2}\sqrt{1-u^2}}$ est continue sur $]0,+\infty[\times\,]-1,1[$ et</p>$$0\lt g(x,u)\leqslant\frac1{\sqrt{1-u^2}} = \varphi(u),$$<p>intégrable sur $]-1,1[$. Par domination, $f$ est définie et continue sur $]0,+\infty[$.</p>`, rappels: ["ip-cont"] },
    { t: "2) Limites", h: R`<p>Convergence dominée à paramètre continu.</p>`, b: R`<ul><li><b>En $0^+$</b> : $g(x,u)\to\frac1{\sqrt{1-u^2}}$, donc $f(x)\to\int_{-1}^1\frac{du}{\sqrt{1-u^2}} = [\arcsin u]_{-1}^1 = \pi$.</li><li><b>En $+\infty$</b> : $g(x,u)\to0$ pour $u\neq0$, donc $f(x)\to0$.</li></ul><div class="sbox">$$\lim_{x\to0^+}f(x) = \pi,\qquad\lim_{x\to+\infty}f(x) = 0.$$</div>`, rappels: ["ip-cvdc"] }
  ],
  piege: R`La limite simple en $+\infty$ n'est pas nulle en $u = 0$ (elle vaut $1$) : un point ne compte pas.`,
  methode: R`Bornes $\pm x$ : le changement de variable $t = ux$ ramène à $[-1,1]$.`
},
{ id: "ipar-91", ...P, level: 3, time: "25 min",
  title: "∫₀¹ dt/√(t(1 − t)(1 − x²t)) : domaine et explosion en 1 (ENSIIE)",
  enonce: R`<ol><li>Déterminer l'ensemble de définition de $f(x) = \displaystyle\int_0^1\frac{dt}{\sqrt{t(1-t)(1-x^2t)}}$.</li><li>Donner la limite de $f$ en $x = 1$.</li></ol>`,
  decode: { donnees: [R`$1-x^2t = (1-t)+t(1-x^2)$.`], but: R`Équivalents aux bornes ; minoration explicite qui diverge.`, cles: {} },
  steps: [
    { t: "1) Condition sur x", h: R`<p>Il faut $1-x^2t\geqslant0$ pour tout $t\in\,]0,1[$.</p>`, b: R`<p>Si $|x|>1$, $1-x^2t\lt0$ pour $t\in\,]\frac1{x^2},1[$ : la racine n'a pas de sens. Il faut donc $x\in[-1,1]$.</p>` },
    { t: "1) Convergence", h: R`<p>Équivalents en $0$ et en $1$.</p>`, b: R`<ul><li><b>$|x|\lt1$</b> : l'intégrande équivaut à $\frac1{\sqrt t}$ en $0$ et à $\frac C{\sqrt{1-t}}$ en $1$ (avec $C = \frac1{\sqrt{1-x^2}}$) : intégrable.</li><li><b>$x = \pm1$</b> : l'intégrande vaut $\frac1{\sqrt t\,(1-t)}$, équivalente à $\frac1{1-t}$ en $1$ : non intégrable.</li></ul><div class="sbox"><p>$f$ est définie sur $]-1,1[$.</p></div>` },
    { t: "2) Une minoration", h: R`<p>$1-x^2t\leqslant(1-t)+\varepsilon$ avec $\varepsilon = 1-x^2$.</p>`, b: R`<p>Soit $x\in[0,1[$ et $\varepsilon = 1-x^2>0$. Comme $1-x^2t = (1-t)+t\varepsilon\leqslant(1-t)+\varepsilon$ et $t\leqslant1$ :</p>$$f(x)\geqslant\int_{1/2}^1\frac{dt}{\sqrt{(1-t)(1-t+\varepsilon)}} = \int_0^{1/2}\frac{dv}{\sqrt{v(v+\varepsilon)}}\qquad(v = 1-t).$$` },
    { t: "2) Calcul et conclusion", h: R`<p>Primitive $2\ln(\sqrt v+\sqrt{v+\varepsilon})$.</p>`, b: R`<p>Une primitive de $\frac1{\sqrt{v(v+\varepsilon)}}$ est $2\ln\big(\sqrt v+\sqrt{v+\varepsilon}\big)$, donc</p>$$f(x)\geqslant2\ln\frac{\sqrt{1/2}+\sqrt{1/2+\varepsilon}}{\sqrt\varepsilon}\xrightarrow[\varepsilon\to0^+]{}+\infty.$$<p>Par parité de $f$ :</p><div class="sbox">$$f(x)\xrightarrow[x\to\pm1]{}+\infty.$$</div><p>La minoration montre même que $f(x)\geqslant-\ln(1-x^2)+O(1)$.</p>` }
  ],
  piege: R`On ne peut pas « remplacer $x$ par $1$ » : l'intégrale limite diverge, et c'est justement ce qu'il faut quantifier.`,
  methode: R`Pour montrer qu'une intégrale à paramètre explose : la minorer par une intégrale explicite qui diverge.`
},
{ id: "ipar-92", ...P, level: 2, time: "20 min",
  title: "F(x) = ∫₀^∞ sin(xt)/(eᵗ − 1) dt et sa limite",
  enonce: R`<p>Pour $x\in\mathbb R$, on pose $F(x) = \displaystyle\int_0^{+\infty}\frac{\sin(xt)}{e^t-1}\,dt$.</p><ol><li>Montrer que $F$ est définie et continue sur $\mathbb R$.</li><li>Justifier que $F(x) = \displaystyle\sum_{n = 1}^{+\infty}\frac x{n^2+x^2}$ pour tout $x\in\mathbb R$.</li><li>Déterminer la limite de $F$ en $+\infty$.</li></ol>`,
  decode: { donnees: [R`$|\sin u|\leqslant|u|$ ; $\int_0^{+\infty}\sin(xt)e^{-nt}dt = \frac x{n^2+x^2}$.`], but: R`Domination sur tout segment ; intégration terme à terme ; comparaison série-intégrale.`, cles: {} },
  steps: [
    { t: "1) Définition et continuité", h: R`<p>$|\sin(xt)|\leqslant At$ pour $|x|\leqslant A$.</p>`, b: R`<p>$u(x,t) = \frac{\sin(xt)}{e^t-1}$ est continue sur $\mathbb R\times\,]0,+\infty[$. Pour $|x|\leqslant A$ :</p>$$|u(x,t)|\leqslant\frac{At}{e^t-1} = \varphi_A(t),$$<p>intégrable sur $]0,+\infty[$ (limite $A$ en $0$, $o\big(\frac1{t^2}\big)$ en $+\infty$). Par domination sur tout segment, $F$ est définie et continue sur $\mathbb R$.</p>`, rappels: ["ip-cont"] },
    { t: "2) Expression en série", h: R`<p>Intégration terme à terme (exercice ENSTIM).</p>`, b: R`<p>Pour $x>0$, l'exercice « $\int_0^{+\infty}\frac{\sin(ax)}{e^x-1}dx$ » (avec $a = x$) donne</p>$$F(x) = \sum_{n = 1}^{+\infty}\int_0^{+\infty}\sin(xt)e^{-nt}\,dt = \sum_{n = 1}^{+\infty}\frac x{n^2+x^2}.$$<p>La formule vaut aussi pour $x = 0$ (les deux membres sont nuls) et pour $x\lt0$ (les deux membres sont impairs).</p>`, rappels: ["ip-itt"] },
    { t: "3) Limite en +∞", h: R`<p>Comparaison série-intégrale.</p>`, b: R`<p>Pour $x>0$, $t\mapsto\frac x{t^2+x^2}$ est décroissante sur $[0,+\infty[$ :</p>$$\frac\pi2-\arctan\frac1x = \int_1^{+\infty}\frac{x\,dt}{t^2+x^2}\leqslant F(x)\leqslant\int_0^{+\infty}\frac{x\,dt}{t^2+x^2} = \frac\pi2.$$<div class="sbox">$$F(x)\xrightarrow[x\to+\infty]{}\frac\pi2.$$</div>` }
  ],
  piege: R`La domination par $\frac1{e^t-1}$ (via $|\sin|\leqslant1$) échoue : cette fonction n'est pas intégrable en $0$.`,
  methode: R`Pour dominer près de $0$ : $|\sin(xt)|\leqslant|x|t$ compense la singularité $\frac1t$.`
},
{ id: "ipar-93", ...P, level: 2, time: "20 min",
  title: "f(x) = ∫₀¹ t^{x−1}/(1 + t) dt : relation fonctionnelle",
  enonce: R`<ol><li>Justifier que $f(x) = \displaystyle\int_0^1\frac{t^{x-1}}{1+t}\,dt$ est définie pour tout $x>0$.</li><li>Justifier la continuité de $f$ sur son domaine de définition.</li><li>Calculer $f(x)+f(x+1)$ pour $x>0$.</li><li>Donner un équivalent de $f(x)$ quand $x\to0^+$, et la limite de $f$ en $+\infty$.</li></ol>`,
  decode: { donnees: [], but: R`Domination par $t^{a-1}$ sur $[a,+\infty[$ ; relation fonctionnelle.`, cles: {} },
  steps: [
    { t: "1) Définition", h: R`<p>$\frac{t^{x-1}}{1+t}\sim\frac1{t^{1-x}}$ en $0$.</p>`, b: R`<p>L'intégrande est continue sur $]0,1]$ et équivaut à $\frac1{t^{1-x}}$ en $0$, avec $1-x\lt1$ : $f(x)$ existe.</p>` },
    { t: "2) Continuité", h: R`<p>Sur $[a,b]\subset\,]0,+\infty[$ : $|g(x,t)|\leqslant t^{a-1}$.</p>`, b: R`<p>Soit $g(x,t) = \frac{t^{x-1}}{1+t}$. Pour $x\geqslant a>0$ et $t\in\,]0,1]$ : $t^{x-1}\leqslant t^{a-1}$, donc $|g(x,t)|\leqslant t^{a-1}$, intégrable. Par domination sur $[a,+\infty[$ pour tout $a>0$, $f$ est continue sur $]0,+\infty[$.</p>`, rappels: ["ip-cont"] },
    { t: "3) Relation fonctionnelle", h: R`<p>$t^{x-1}+t^x = t^{x-1}(1+t)$.</p>`, b: R`<div class="sbox">$$f(x)+f(x+1) = \int_0^1t^{x-1}\,dt = \frac1x.$$</div>` },
    { t: "4) Équivalent et limite", h: R`<p>$f(x+1)\to f(1)$.</p>`, b: R`<ul><li><b>En $0^+$</b> : par continuité, $f(x+1)\to f(1) = \ln2$, donc $f(x) = \frac1x-f(x+1) = \frac1x+O(1)$ et $f(x)\sim\frac1x$.</li><li><b>En $+\infty$</b> : $0\leqslant f(x)\leqslant\int_0^1t^{x-1}dt = \frac1x\to0$.</li></ul><div class="sbox">$$f(x)\underset{x\to0^+}{\sim}\frac1x,\qquad\lim_{x\to+\infty}f(x) = 0.$$</div><p>Comme $f$ décroît, $\frac1{x}\leqslant 2f(x)\leqslant\frac1{x-1}$ pour $x>1$ : on a aussi $f(x)\sim\frac1{2x}$ en $+\infty$.</p>` }
  ],
  piege: R`Domination sur $]0,+\infty[$ tout entier impossible ($t^{x-1}$ explose quand $x\to0$) : on domine sur chaque $[a,+\infty[$.`,
  methode: R`Relation fonctionnelle $f(x)+f(x+1) = \frac1x$ : elle donne immédiatement le comportement en $0^+$.`
},
{ id: "ipar-94", ...P, level: 2, time: "25 min",
  title: "F(x) = ∫₀^∞ e^{−t}/(x + t) dt : équivalents",
  enonce: R`<p>Pour $x>0$, on pose $F(x) = \displaystyle\int_0^{+\infty}\frac{e^{-t}}{x+t}\,dt$.</p><ol><li>Montrer que $F$ est définie et continue sur $]0,+\infty[$.</li><li>Déterminer un équivalent simple de $F$ en $+\infty$.</li><li>Déterminer un équivalent simple de $F$ en $0^+$.</li></ol>`,
  decode: { donnees: [R`$|e^{-t}-1|\leqslant t$ pour $t\geqslant0$.`], but: R`Domination sur $[a,+\infty[$ ; $xF(x)\to1$ ; isoler la partie $\int_0^1\frac{dt}{x+t}$.`, cles: {} },
  steps: [
    { t: "1) Continuité", h: R`<p>Pour $x\geqslant a$ : $\frac{e^{-t}}{x+t}\leqslant\frac{e^{-t}}{a+t}$.</p>`, b: R`<p>$u(x,t) = \frac{e^{-t}}{x+t}$ est continue sur $]0,+\infty[\times[0,+\infty[$ et, pour $x\geqslant a>0$ :</p>$$0\lt u(x,t)\leqslant\frac{e^{-t}}a,$$<p>intégrable. Par domination sur tout $[a,+\infty[$, $F$ est définie et continue sur $]0,+\infty[$.</p>`, rappels: ["ip-cont"] },
    { t: "2) En +∞", h: R`<p>$xF(x) = \int_0^{+\infty}\frac{e^{-t}}{1+t/x}\,dt$.</p>`, b: R`<p>$xF(x) = \int_0^{+\infty}\frac{e^{-t}}{1+t/x}\,dt$ ; l'intégrande tend vers $e^{-t}$ et est majorée par $e^{-t}$. Par convergence dominée, $xF(x)\to1$ :</p><div class="sbox">$$F(x)\underset{x\to+\infty}{\sim}\frac1x.$$</div>`, rappels: ["ip-cvdc"] },
    { t: "3) Découpage en 0⁺", h: R`<p>$\int_0^1+\int_1^{+\infty}$, puis $e^{-t} = 1+(e^{-t}-1)$.</p>`, b: R`$$F(x) = \int_0^1\frac{dt}{x+t}+\int_0^1\frac{e^{-t}-1}{x+t}\,dt+\int_1^{+\infty}\frac{e^{-t}}{x+t}\,dt.$$<ul><li>$\Big|\displaystyle\int_0^1\frac{e^{-t}-1}{x+t}\,dt\Big|\leqslant\displaystyle\int_0^1\frac t{x+t}\,dt\leqslant1$ ;</li><li>$0\leqslant\displaystyle\int_1^{+\infty}\frac{e^{-t}}{x+t}\,dt\leqslant\int_1^{+\infty}e^{-t}\,dt\leqslant1$.</li></ul>` },
    { t: "3) Conclusion", h: R`<p>$\int_0^1\frac{dt}{x+t} = \ln\frac{1+x}x$.</p>`, b: R`$$F(x) = \ln(1+x)-\ln x+O(1) = -\ln x+O(1).$$<div class="sbox">$$F(x)\underset{x\to0^+}{\sim}-\ln x.$$</div>` }
  ],
  piege: R`En $0^+$, l'intégrale limite $\int_0^{+\infty}\frac{e^{-t}}t$ diverge : la convergence dominée ne s'applique pas, il faut isoler la partie singulière.`,
  methode: R`Équivalent d'une intégrale qui diverge à la limite : isoler une intégrale explicite qui porte la divergence, contrôler le reste par $O(1)$.`
},
{ id: "ipar-95", ...P, level: 3, time: "35 min",
  title: "f(x) = (1/x)∫₀^∞ (1 − e^{−tx})/(1 + t²) dt (Mines)",
  enonce: R`<p>Pour $x>0$, on pose</p>$$f(x) = \frac1x\int_0^{+\infty}\frac{1-e^{-tx}}{1+t^2}\,dt.$$<p>Montrer que $f$ est de classe $\mathcal C^2$ sur $]0,+\infty[$ et trouver des équivalents simples de $f$ en $0$ et en $+\infty$.</p>`,
  decode: { donnees: [R`$\int_0^{+\infty}\frac{dt}{1+t^2} = \frac\pi2$.`], but: R`Écrire $xf(x) = \frac\pi2-G(x)$ ; dérivation sous l'intégrale ; changement $u = tx$ et intégration par parties en $0$.`, cles: {} },
  steps: [
    { t: "Réécriture", h: R`<p>$xf(x) = \frac\pi2-G(x)$.</p>`, b: R`<p>Les deux intégrales convergent, donc</p>$$xf(x) = \frac\pi2-G(x),\qquad G(x) = \int_0^{+\infty}\frac{e^{-tx}}{1+t^2}\,dt.$$` },
    { t: "Classe C²", h: R`<p>$\frac{\partial^2u}{\partial x^2} = \frac{t^2}{1+t^2}e^{-tx}$, dominée par $e^{-at}$.</p>`, b: R`<p>Avec $u(x,t) = \frac{e^{-tx}}{1+t^2}$ :</p>$$\frac{\partial u}{\partial x} = -\frac t{1+t^2}e^{-tx},\qquad\frac{\partial^2u}{\partial x^2} = \frac{t^2}{1+t^2}e^{-tx}.$$<p>Pour $x>0$, $u$ et $\frac{\partial u}{\partial x}$ sont intégrables en $t$, et, pour $x\geqslant a>0$ : $\big|\frac{\partial^2u}{\partial x^2}\big|\leqslant e^{-at}$, intégrable. Donc $G$ est $\mathcal C^2$ sur $]0,+\infty[$, et $f = \frac1x\big(\frac\pi2-G\big)$ aussi.</p>`, rappels: ["ip-deriv"] },
    { t: "Équivalent en +∞", h: R`<p>$0\leqslant G(x)\leqslant\int_0^{+\infty}e^{-tx}dt = \frac1x$.</p>`, b: R`<p>$0\leqslant G(x)\leqslant\frac1x\to0$, donc $xf(x)\to\frac\pi2$ :</p><div class="sbox">$$f(x)\underset{x\to+\infty}{\sim}\frac\pi{2x}.$$</div>` },
    { t: "En 0 : changement de variable", h: R`<p>$u = tx$.</p>`, b: R`<p>Avec $u = tx$ :</p>$$f(x) = \int_0^{+\infty}\frac{1-e^{-u}}{x^2+u^2}\,du = \int_0^{+\infty}\frac u{x^2+u^2}\,\varphi(u)\,du,\qquad\varphi(u) = \frac{1-e^{-u}}u.$$<p>$\varphi$ se prolonge en $0$ par $\varphi(0) = 1$, est $\mathcal C^1$ sur $[0,+\infty[$, et $\varphi'(u) = \frac{e^{-u}}u-\frac{1-e^{-u}}{u^2}\sim-\frac1{u^2}$ en $+\infty$.</p>` },
    { t: "En 0 : intégration par parties", h: R`<p>Primitive $\frac12\ln(x^2+u^2)$.</p>`, b: R`$$f(x) = \Big[\frac12\ln(x^2+u^2)\varphi(u)\Big]_0^{+\infty}-\frac12\int_0^{+\infty}\ln(x^2+u^2)\varphi'(u)\,du.$$<p>Le crochet vaut $0-\ln(x)\varphi(0) = -\ln x$ (en $+\infty$, $\ln(u^2)\varphi(u)\sim\frac{2\ln u}u\to0$). Pour $x\in\,]0,1]$ :</p>$$|\ln(x^2+u^2)|\leqslant|\ln(u^2)|+\ln(1+u^2),$$<p>et $u\mapsto\big(|\ln u^2|+\ln(1+u^2)\big)|\varphi'(u)|$ est intégrable. L'intégrale restante est donc bornée :</p><div class="sbox">$$f(x) = -\ln x+O(1)\underset{x\to0^+}{\sim}-\ln x.$$</div><p><b>Coquille du livre</b> : il écrit $\varphi'(u)\sim\frac{e^{-u}}u$ en $+\infty$ ; c'est $-\frac1{u^2}$.</p>` }
  ],
  piege: R`En $0$, la convergence dominée seule ne suffit pas : $f(x)\to+\infty$. Il faut extraire le terme $-\ln x$ par intégration par parties.`,
  methode: R`Singularité logarithmique : faire apparaître une primitive en $\ln$ et contrôler le reste uniformément.`
},
{ id: "ipar-96", ...P, level: 2, time: "25 min",
  title: "f(x) = ∫₀^{π/2} cos t/(t + x) dt : variations, équivalents",
  enonce: R`<p>Soit $f : x\mapsto\displaystyle\int_0^{\pi/2}\frac{\cos t}{t+x}\,dt$.</p><ol><li>Montrer que $f$ est définie et continue sur $\mathbb R_+^*$. Étudier les variations de $f$.</li><li>Déterminer les limites de $f$ en $0^+$ et en $+\infty$.</li><li>Déterminer un équivalent de $f$ en $0^+$ et en $+\infty$.</li></ol>`,
  decode: { donnees: [R`$1-\frac{t^2}2\leqslant\cos t\leqslant1$.`], but: R`Domination sur $[a,b]$ ; encadrements.`, cles: {} },
  steps: [
    { t: "1) Continuité et variations", h: R`<p>Pour $x\geqslant a$ : $|g|\leqslant\frac1{t+a}$.</p>`, b: R`<p>$g(x,t) = \frac{\cos t}{t+x}$ est continue sur $\mathbb R_+^*\times[0,\frac\pi2]$. Pour $x\geqslant a>0$ : $|g(x,t)|\leqslant\frac1{t+a}$, intégrable sur $[0,\frac\pi2]$ : $f$ est continue sur $\mathbb R_+^*$.</p><p>Si $0\lt x\leqslant x'$, alors $g(x',t)\leqslant g(x,t)$ (car $\cos t\geqslant0$) : $f$ est décroissante.</p>`, rappels: ["ip-cont", "ip-monot"] },
    { t: "2) Limites", h: R`<p>Majorer en $+\infty$ ; minorer sur $[0,\frac\pi4]$ en $0$.</p>`, b: R`<ul><li><b>En $+\infty$</b> : $0\leqslant f(x)\leqslant\frac\pi{2x}\to0$.</li><li><b>En $0^+$</b> : sur $[0,\frac\pi4]$, $\cos t\geqslant\frac{\sqrt2}2$, donc$$f(x)\geqslant\frac{\sqrt2}2\int_0^{\pi/4}\frac{dt}{t+x} = \frac{\sqrt2}2\ln\frac{x+\pi/4}x\xrightarrow[x\to0^+]{}+\infty.$$</li></ul>` },
    { t: "3) Équivalent en +∞", h: R`<p>$\frac1{x+\pi/2}\leqslant\frac1{t+x}\leqslant\frac1x$.</p>`, b: R`<p>Comme $\int_0^{\pi/2}\cos t\,dt = 1$ :</p>$$\frac1{x+\pi/2}\leqslant f(x)\leqslant\frac1x.$$<div class="sbox">$$f(x)\underset{x\to+\infty}{\sim}\frac1x.$$</div>` },
    { t: "3) Équivalent en 0⁺", h: R`<p>$1-\frac{t^2}2\leqslant\cos t\leqslant1$.</p>`, b: R`$$\int_0^{\pi/2}\frac{dt}{t+x}-\frac12\int_0^{\pi/2}\frac{t^2}{t+x}\,dt\leqslant f(x)\leqslant\int_0^{\pi/2}\frac{dt}{t+x}.$$<p>Or $\int_0^{\pi/2}\frac{dt}{t+x} = \ln\frac{x+\pi/2}x\sim-\ln x$, et $0\leqslant\int_0^{\pi/2}\frac{t^2}{t+x}\,dt\leqslant\int_0^{\pi/2}t\,dt = \frac{\pi^2}8$ est borné.</p><div class="sbox">$$f(x)\underset{x\to0^+}{\sim}-\ln x.$$</div>` }
  ],
  piege: R`L'équivalent en $0^+$ ne dépend que du comportement de $\cos$ près de $0$ ($\cos0 = 1$) : la partie régulière est un $O(1)$.`,
  methode: R`Encadrer l'intégrande par des fonctions dont l'intégrale est explicite.`
},
{ id: "ipar-97", ...P, level: 2, time: "30 min",
  title: "f(x) = ∫₀^{π/4} tanˣ t dt : relation fonctionnelle, équivalents",
  enonce: R`<p>Pour $x$ réel convenable, on pose $f(x) = \displaystyle\int_0^{\pi/4}\tan^x(t)\,dt$.</p><ol><li>Déterminer l'intervalle $I$ de définition de $f$.</li><li>Établir que $f$ est continue sur $I$.</li><li>Étudier la monotonie de $f$.</li><li>Calculer $f(x)+f(x+2)$.</li><li>Déterminer des équivalents simples de $f$ aux extrémités de $I$.</li></ol>`,
  decode: { donnees: [R`$(\tan)' = 1+\tan^2$ ; $0\leqslant\tan t\leqslant1$ sur $[0,\frac\pi4]$.`], but: R`Équivalent en $0$ ; domination sur $[a,+\infty[$ ; relation fonctionnelle et encadrement.`, cles: {} },
  steps: [
    { t: "1) Intervalle de définition", h: R`<p>$\tan^xt\sim t^x$ en $0$.</p>`, b: R`<p>L'intégrande est continue et positive sur $]0,\frac\pi4]$, et $\tan^x(t)\sim t^x = \frac1{t^{-x}}$ en $0^+$. Elle est intégrable si, et seulement si, $-x\lt1$ :</p><div class="sbox">$$I = \,]-1,+\infty[.$$</div>` },
    { t: "2) et 3) Continuité, monotonie", h: R`<p>$0\leqslant\tan t\leqslant1$ : $\tan^xt$ décroît en $x$.</p>`, b: R`<p>Comme $0\leqslant\tan t\leqslant1$, $x\mapsto\tan^x(t)$ est décroissante. Pour $x\geqslant a>-1$ : $0\leqslant\tan^x(t)\leqslant\tan^a(t)$, intégrable. Par domination sur tout $[a,+\infty[$, $f$ est continue sur $I$ ; par intégration en bon ordre, $f$ est décroissante.</p>`, rappels: ["ip-cont", "ip-monot"] },
    { t: "4) Relation fonctionnelle", h: R`<p>$(1+\tan^2)\tan^x$ est la dérivée de $\frac{\tan^{x+1}}{x+1}$.</p>`, b: R`$$f(x)+f(x+2) = \int_0^{\pi/4}(1+\tan^2t)\tan^x(t)\,dt = \Big[\frac{\tan^{x+1}(t)}{x+1}\Big]_0^{\pi/4}.$$<div class="sbox">$$f(x)+f(x+2) = \frac1{x+1}.$$</div>` },
    { t: "5) Équivalent en −1⁺", h: R`<p>$f(x+2)\to f(1)$.</p>`, b: R`<p>Par continuité, $f(x+2)\to f(1)$ quand $x\to-1^+$, donc</p><div class="sbox">$$f(x) = \frac1{x+1}-f(x+2) = \frac1{x+1}+O(1)\underset{x\to-1^+}{\sim}\frac1{x+1}.$$</div>` },
    { t: "5) Équivalent en +∞", h: R`<p>Encadrer $2f(x)$ grâce à la décroissance.</p>`, b: R`<p>Pour $x>1$, par décroissance : $f(x+2)\leqslant f(x)\leqslant f(x-2)$, donc</p>$$\underbrace{f(x)+f(x+2)}_{= \frac1{x+1}}\leqslant2f(x)\leqslant\underbrace{f(x-2)+f(x)}_{= \frac1{x-1}}.$$<div class="sbox">$$f(x)\underset{x\to+\infty}{\sim}\frac1{2x}.$$</div>${figTan}` }
  ],
  piege: R`Pour l'équivalent en $+\infty$, la convergence dominée donne seulement $f\to0$ ; c'est la relation fonctionnelle et la monotonie qui donnent la vitesse.`,
  methode: R`Relation $f(x)+f(x+2) = h(x)$ et $f$ décroissante : encadrer $2f(x)$ entre $h(x)$ et $h(x-2)$.`
},
{ id: "ipar-98", ...P, level: 3, time: "40 min",
  title: "f(x) = ∫₀^{π/2} arctan(x tan θ) dθ (CCINP)",
  enonce: R`<p>Préliminaire : montrer que $\arctan x+\arctan\frac1x = \frac\pi2$ pour tout $x>0$.</p><p>Pour $x$ réel convenable, on pose $f(x) = \displaystyle\int_0^{\pi/2}\arctan(x\tan\theta)\,d\theta$.</p><ol><li>Montrer que $f$ est définie et impaire sur $\mathbb R$, continue sur $\mathbb R$, et croissante sur $\mathbb R_+$.</li><li>Montrer que $f$ est de classe $\mathcal C^1$ sur $\mathbb R_+^*$ et donner $f'$. En posant $u = x\tan\theta$, établir $\dfrac{f(x)}x\geqslant\dfrac\pi4\displaystyle\int_0^1\frac u{u^2+x^2}\,du$ pour $x>0$, et en déduire que $f$ n'est pas dérivable en $0^+$.</li><li>Montrer que $f(x)+f\big(\frac1x\big) = \frac{\pi^2}4$ pour $x>0$, et en déduire la limite de $f$ en $+\infty$.</li></ol>`,
  decode: { donnees: [R`$\arctan$ est concave sur $[0,1]$.`], but: R`Domination par $\frac\pi2$ ; dérivation sur $[a,+\infty[$ ; minoration ; identité fonctionnelle.`, cles: {} },
  steps: [
    { t: "Préliminaire", h: R`<p>Dérivée nulle.</p>`, b: R`<p>$\psi(x) = \arctan x+\arctan\frac1x$ est dérivable sur $]0,+\infty[$ de dérivée $\frac1{1+x^2}-\frac1{x^2}\cdot\frac1{1+1/x^2} = 0$. Donc $\psi$ est constante, égale à $\psi(1) = \frac\pi2$.</p>` },
    { t: "1) Définition, parité", h: R`<p>Intégrale faussement impropre en $\frac\pi2$.</p>`, b: R`<p>Pour $x\in\mathbb R$, l'intégrande est continue sur $[0,\frac\pi2[$ et a une limite finie en $\frac\pi2$ ($\pm\frac\pi2$ ou $0$ selon le signe de $x$) : l'intégrale converge. Par imparité de $\arctan$, $f(-x) = -f(x)$.</p>` },
    { t: "1) Continuité, croissance", h: R`<p>$|u(x,\theta)|\leqslant\frac\pi2$.</p>`, b: R`<ul><li>$x\mapsto\arctan(x\tan\theta)$ est continue et $|\arctan(x\tan\theta)|\leqslant\frac\pi2$, intégrable sur $[0,\frac\pi2[$ : $f$ est continue sur $\mathbb R$.</li><li>Si $x\leqslant y$, alors $x\tan\theta\leqslant y\tan\theta$ ($\tan\theta\geqslant0$) et $\arctan$ croît : $f(x)\leqslant f(y)$.</li></ul>`, rappels: ["ip-cont", "ip-monot"] },
    { t: "2) Classe C¹ sur ℝ₊*", h: R`<p>$\frac{\partial u}{\partial x} = \frac{\tan\theta}{1+x^2\tan^2\theta}$.</p>`, b: R`$$\frac{\partial u}{\partial x}(x,\theta) = \frac{\tan\theta}{1+x^2\tan^2\theta}.$$<p>Pour $x\geqslant a>0$ : $0\leqslant\frac{\partial u}{\partial x}\leqslant\frac{\tan\theta}{1+a^2\tan^2\theta}$, fonction continue sur $[0,\frac\pi2[$ de limite nulle en $\frac\pi2$, donc intégrable. Par domination :</p><div class="sbox">$$\forall x>0,\quad f'(x) = \int_0^{\pi/2}\frac{\tan\theta}{1+x^2\tan^2\theta}\,d\theta.$$</div>`, rappels: ["ip-deriv"] },
    { t: "2) Minoration", h: R`<p>$u = x\tan\theta$ : $d\theta = \frac{x\,du}{x^2+u^2}$.</p>`, b: R`<p>Pour $x>0$, avec $u = x\tan\theta$ (bijection $\mathcal C^1$ croissante de $[0,\frac\pi2[$ sur $[0,+\infty[$) :</p>$$f(x) = \int_0^{+\infty}\frac{x\arctan u}{x^2+u^2}\,du\geqslant x\int_0^1\frac{\arctan u}{x^2+u^2}\,du.$$<p>Par concavité de $\arctan$ sur $[0,1]$ (au-dessus de sa corde) : $\arctan u\geqslant\frac\pi4u$. Donc</p>$$\frac{f(x)}x\geqslant\frac\pi4\int_0^1\frac u{u^2+x^2}\,du.$$` },
    { t: "2) Non-dérivabilité en 0⁺", h: R`<p>$\int_0^1\frac u{u^2+x^2} = \frac12\ln\frac{1+x^2}{x^2}$.</p>`, b: R`$$\frac{f(x)-f(0)}x\geqslant\frac\pi8\ln\frac{1+x^2}{x^2}\xrightarrow[x\to0^+]{}+\infty.$$<div class="sbox"><p>$f$ n'est pas dérivable en $0$ (tangente verticale).</p></div>` },
    { t: "3) Identité fonctionnelle et limite", h: R`<p>Préliminaire appliqué à $x\tan\theta$.</p>`, b: R`<p>Par le changement de variable $\theta\mapsto\frac\pi2-\theta$, qui échange $\tan\theta$ et $\frac1{\tan\theta}$ :</p>$$f\Big(\frac1x\Big) = \int_0^{\pi/2}\arctan\Big(\frac1{x\tan\theta}\Big)d\theta,$$<p>donc, par le préliminaire,</p>$$\begin{aligned}f(x)+f\Big(\frac1x\Big) &= \int_0^{\pi/2}\Big(\arctan(x\tan\theta)+\arctan\frac1{x\tan\theta}\Big)d\theta\\&= \int_0^{\pi/2}\frac\pi2\,d\theta = \frac{\pi^2}4.\end{aligned}$$<p>Comme $f\big(\frac1x\big)\to f(0) = 0$ par continuité :</p><div class="sbox">$$f(x)+f\Big(\frac1x\Big) = \frac{\pi^2}4,\qquad\lim_{x\to+\infty}f(x) = \frac{\pi^2}4.$$</div>` }
  ],
  piege: R`La dérivabilité sur $\mathbb R_+^*$ ne s'étend pas en $0$ : la domination de $\frac{\partial u}{\partial x}$ par une fonction intégrable n'existe pas au voisinage de $x = 0$.`,
  methode: R`Identité $\arctan y+\arctan\frac1y = \frac\pi2$ et changement $\theta\mapsto\frac\pi2-\theta$ (qui échange $\tan$ et $\frac1\tan$).`
}
]);
})();

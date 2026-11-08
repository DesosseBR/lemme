/* Intégration sur un intervalle quelconque (Spé) : bloc « Convergence dominée sur intervalle variable ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 6 };
LEMME.rappels({
  "ip-varint": { t: "Intervalle qui dépend de n", b: R`<p>Pour $\int_0^{a_n}g_n$ avec $a_n\to+\infty$, on pose $f_n = g_n$ sur $[0,a_n]$ et $f_n = 0$ au-delà : alors $\int_0^{a_n}g_n = \int_0^{+\infty}f_n$, et on applique la convergence dominée sur l'intervalle fixe $[0,+\infty[$. La domination doit être vérifiée <b>sur tout l'intervalle</b> (elle est automatique là où $f_n = 0$).</p>` },
  "ip-ln": { t: "Inégalité ln(1 + u) ≤ u", b: R`<p>Pour tout $u>-1$ : $\ln(1+u)\leqslant u$ (concavité du logarithme). Conséquences : $\big(1+\frac xn\big)^n\leqslant e^x$ et $\big(1-\frac{x^2}n\big)^n\leqslant e^{-x^2}$ quand la base est positive.</p>` }
});
LEMME.exercises([
{ id: "ipar-18", ...P, level: 1, time: "10 min",
  title: "Moyenne de f sur [0, n] quand f a une limite (ENSTIM)",
  enonce: R`<p>Soit $f : [0,+\infty[\to\mathbb C$ continue, admettant une limite finie $\ell$ en $+\infty$. Déterminer la limite quand $n\to+\infty$ de $\mu_n = \dfrac1n\displaystyle\int_0^nf(t)\,dt$.</p>`,
  decode: { donnees: [R`$f$ continue avec une limite finie : $f$ est bornée.`], but: R`Changement de variable $t = ns$, puis convergence dominée sur $[0,1]$.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$t = ns$.</p>`, b: R`<p>Avec $t = ns$ :</p>$$\mu_n = \int_0^1f(ns)\,ds.$$` },
    { t: "Convergence dominée", h: R`<p>$f(ns)\to\ell$ pour $s>0$ ; $|f|\leqslant M$.</p>`, b: R`<p>$f$ est continue sur $[0,+\infty[$ et a une limite finie en $+\infty$ : elle est bornée par un certain $M$.</p><ul><li>Pour $s\in\,]0,1]$, $ns\to+\infty$ donc $f(ns)\to\ell$.</li><li>$|f(ns)|\leqslant M$, constante intégrable sur $[0,1]$.</li></ul><div class="sbox">$$\mu_n\xrightarrow[n\to+\infty]{}\int_0^1\ell\,ds = \ell.$$</div><p>C'est l'analogue continu du lemme de Cesàro.</p>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Il faut justifier que $f$ est bornée sur $[0,+\infty[$ : continuité sur tout segment, et proximité de $\ell$ au-delà d'un certain $A$.`,
  methode: R`Moyenne $\frac1n\int_0^n$ : le changement de variable $t = ns$ ramène à un intervalle fixe.`
},
{ id: "ipar-19", ...P, level: 2, time: "15 min",
  title: "Limite de ∫₀ⁿ (1 + x/n)ⁿ e^{−2x} dx",
  enonce: R`<p>Étudier $\displaystyle\lim_{n\to+\infty}\int_0^n\Big(1+\frac xn\Big)^ne^{-2x}\,dx$.</p>`,
  decode: { donnees: [R`$\big(1+\frac xn\big)^n\leqslant e^x$.`], but: R`Prolonger par $0$ au-delà de $n$, puis convergence dominée.`, cles: {} },
  steps: [
    { t: "Prolongement par 0", h: R`<p>$f_n = \big(1+\frac xn\big)^ne^{-2x}$ sur $[0,n]$, $0$ sinon.</p>`, b: R`<p>Posons</p>$$f_n(x) = \left\{\begin{aligned}\Big(1+\frac xn\Big)^ne^{-2x}&\quad\text{si }x\in[0,n],\\0&\quad\text{sinon,}\end{aligned}\right.$$<p>de sorte que l'intégrale vaut $\int_0^{+\infty}f_n$.</p>`, rappels: ["ip-varint"] },
    { t: "Limite simple et domination", h: R`<p>$n\ln(1+\frac xn)\to x$ ; $\ln(1+u)\leqslant u$.</p>`, b: R`<p>Pour $x$ fixé, dès que $n\geqslant x$ :</p>$$f_n(x) = \exp\Big(n\ln\Big(1+\frac xn\Big)-2x\Big)\xrightarrow[n\to+\infty]{}e^{x-2x} = e^{-x}.$$<p>Par $\ln(1+u)\leqslant u$ : $f_n(x)\leqslant e^{x-2x} = e^{-x}$ sur $[0,n]$, et $f_n = 0$ ailleurs. La domination $\varphi(x) = e^{-x}$ est intégrable.</p>`, rappels: ["ip-ln"] },
    { t: "Conclusion", h: R`<p>Convergence dominée.</p>`, b: R`<div class="sbox">$$\int_0^n\Big(1+\frac xn\Big)^ne^{-2x}\,dx\xrightarrow[n\to+\infty]{}\int_0^{+\infty}e^{-x}\,dx = 1.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Le facteur $e^{-2x}$ est indispensable : avec $e^{-x}$, la domination par $e^x\cdot e^{-x} = 1$ ne serait pas intégrable.`,
  methode: R`$\big(1+\frac xn\big)^n\to e^x$ en croissant : la majoration $\leqslant e^x$ fournit la domination.`
},
{ id: "ipar-20", ...P, level: 2, time: "15 min",
  title: "Limite de ∫₀^{√n} (1 − t²/n)ⁿ dt",
  enonce: R`<p>Étudier $\displaystyle\lim_{n\to+\infty}\int_0^{\sqrt n}\Big(1-\frac{t^2}n\Big)^n\,dt$.</p>`,
  decode: { donnees: [R`$\ln(1+u)\leqslant u$ pour $u>-1$.`], but: R`Domination par $e^{-t^2}$.`, cles: {} },
  steps: [
    { t: "Prolongement et limite simple", h: R`<p>$f_n = \big(1-\frac{t^2}n\big)^n$ sur $[0,\sqrt n[$, $0$ sinon.</p>`, b: R`<p>Posons $f_n(t) = \big(1-\frac{t^2}n\big)^n$ si $t\in[0,\sqrt n[$ et $f_n(t) = 0$ sinon. Pour $t$ fixé, dès que $\sqrt n>t$ :</p>$$f_n(t) = \exp\Big(n\ln\Big(1-\frac{t^2}n\Big)\Big)\xrightarrow[n\to+\infty]{}e^{-t^2}.$$`, rappels: ["ip-varint"] },
    { t: "Domination et conclusion", h: R`<p>$n\ln(1-\frac{t^2}n)\leqslant-t^2$.</p>`, b: R`<p>Par $\ln(1+u)\leqslant u$ : $0\leqslant f_n(t)\leqslant e^{-t^2}$ pour tout $t$ (y compris où $f_n = 0$). $e^{-t^2}$ est intégrable sur $[0,+\infty[$ :</p><div class="sbox">$$\int_0^{\sqrt n}\Big(1-\frac{t^2}n\Big)^ndt\xrightarrow[n\to+\infty]{}\int_0^{+\infty}e^{-t^2}\,dt = \frac{\sqrt\pi}2.$$</div>`, rappels: ["ip-cvd", "ip-ln"] }
  ],
  piege: R`Sur $[0,\sqrt n[$, la base $1-\frac{t^2}n$ est dans $]0,1]$ : le logarithme a un sens, ce qui justifie l'écriture exponentielle.`,
  methode: R`Approximations polynomiales de $e^{-t^2}$ : $\big(1-\frac{t^2}n\big)^n\leqslant e^{-t^2}$ fournit à la fois la limite et la domination.`
},
{ id: "ipar-21", ...P, level: 3, time: "25 min",
  title: "Limite de ∫₀ⁿ cos(x/n)^{n²} dx (X)",
  enonce: R`<p>Déterminer $\displaystyle\lim_{n\to+\infty}\int_0^n\Big(\cos\frac xn\Big)^{n^2}dx$.</p>`,
  decode: { donnees: [R`$\cos u\leqslant1-\frac{u^2}4$ sur $[0,1]$.`], but: R`Limite simple $e^{-x^2/2}$, domination $e^{-x^2/4}$.`, cles: {} },
  steps: [
    { t: "Limite simple", h: R`<p>$n^2\ln\cos\frac xn = n^2\ln\big(1-\frac{x^2}{2n^2}+o(\frac1{n^2})\big)$.</p>`, b: R`<p>Posons $f_n(x) = \big(\cos\frac xn\big)^{n^2}$ sur $[0,n[$, $0$ au-delà. Pour $x$ fixé et $n$ grand :</p>$$f_n(x) = \exp\Big(n^2\ln\Big(1-\frac{x^2}{2n^2}+o\Big(\frac1{n^2}\Big)\Big)\Big)\xrightarrow[n\to+\infty]{}e^{-x^2/2}.$$` },
    { t: "Une inégalité", h: R`<p>$\psi(t) = 1-\frac{t^2}4-\cos t\geqslant0$ sur $[0,1]$.</p>`, b: R`<p>Soit $\psi(t) = 1-\frac{t^2}4-\cos t$ sur $[0,1]$ : $\psi'(t) = \sin t-\frac t2$, $\psi''(t) = \cos t-\frac12\geqslant0$ sur $[0,1]\subset[0,\frac\pi3]$. Donc $\psi'$ croît, $\psi'(0) = 0$ donne $\psi'\geqslant0$, puis $\psi\geqslant\psi(0) = 0$ :</p>$$\forall t\in[0,1],\quad\cos t\leqslant1-\frac{t^2}4.$$` },
    { t: "Domination et conclusion", h: R`<p>$f_n(x)\leqslant\big(1-\frac{x^2}{4n^2}\big)^{n^2}\leqslant e^{-x^2/4}$.</p>`, b: R`<p>Pour $x\in[0,n[$, $\frac xn\in[0,1[$, donc</p>$$0\lt f_n(x)\leqslant\Big(1-\frac{x^2}{4n^2}\Big)^{n^2}\leqslant e^{-x^2/4},$$<p>par $\ln(1+u)\leqslant u$. Cette majoration vaut aussi là où $f_n = 0$. Par convergence dominée :</p><div class="sbox">$$\int_0^n\Big(\cos\frac xn\Big)^{n^2}dx\xrightarrow[n\to+\infty]{}\int_0^{+\infty}e^{-x^2/2}\,dx = \sqrt{\frac\pi2}.$$</div>`, rappels: ["ip-cvd", "ip-ln"] }
  ],
  piege: R`L'inégalité $\cos t\leqslant1-\frac{t^2}2$ est fausse : il faut une constante plus petite que $\frac12$ (ici $\frac14$), valable sur un intervalle borné.`,
  methode: R`Pour dominer $g(x/n)^{n^2}$ : une inégalité $g(t)\leqslant1-ct^2$ sur l'intervalle utile, puis $\ln(1+u)\leqslant u$.`
},
{ id: "ipar-22", ...P, level: 2, time: "25 min",
  title: "Équivalent de ∫₀^{π/2} cosⁿ t dt",
  enonce: R`<p>On donne $\int_0^{+\infty}e^{-x^2/2}dx = \sqrt{\frac\pi2}$.</p><ol><li>Justifier que $\cos t\leqslant1-\frac{t^2}\pi$ pour tout $t\in[0,\frac\pi2]$.</li><li>À l'aide d'un développement de $\cos$ en $0$, trouver un changement de variable qui permet d'établir $\displaystyle\int_0^{\pi/2}\cos^n(t)\,dt\underset{n\to+\infty}{\sim}\sqrt{\frac\pi{2n}}$.</li></ol>`,
  decode: { donnees: [R`$\sin t\geqslant\frac2\pi t$ sur $[0,\frac\pi2]$ (concavité).`], but: R`Inégalité par étude de fonction ; puis $t = \frac x{\sqrt n}$ et convergence dominée.`, cles: {} },
  steps: [
    { t: "1) L'inégalité", h: R`<p>$f(t) = 1-\frac{t^2}\pi-\cos t$, $f'(t) = \sin t-\frac2\pi t\geqslant0$.</p>`, b: R`<p>Soit $f(t) = 1-\frac{t^2}\pi-\cos t$ sur $[0,\frac\pi2]$ : $f'(t) = \sin t-\frac2\pi t$. Comme $\sin$ est concave sur $[0,\frac\pi2]$, son graphe est au-dessus de la corde joignant $(0,0)$ et $(\frac\pi2,1)$ : $\sin t\geqslant\frac2\pi t$. Donc $f'\geqslant0$, $f$ croît et $f\geqslant f(0) = 0$.</p>` },
    { t: "2) Le bon changement de variable", h: R`<p>$\cos^nt = \exp(n\ln(1-\frac{t^2}2+\dots))$ : il faut $t$ de l'ordre de $\frac1{\sqrt n}$.</p>`, b: R`<p>$\cos^nt = \exp\big(n\ln(1-\frac{t^2}2+o(t^2))\big)$ : pour obtenir une limite finie non nulle, on pose $t = \frac x{\sqrt n}$ :</p>$$\int_0^{\pi/2}\cos^n(t)\,dt = \frac1{\sqrt n}\int_0^{\sqrt n\pi/2}\Big(\cos\frac x{\sqrt n}\Big)^ndx.$$` },
    { t: "2) Convergence dominée", h: R`<p>Limite $e^{-x^2/2}$, domination $e^{-x^2/\pi}$ par 1.</p>`, b: R`<p>Soit $f_n(x) = \big(\cos\frac x{\sqrt n}\big)^n$ sur $[0,\frac{\sqrt n\pi}2[$, $0$ au-delà.</p><ul><li><b>Limite</b> : $f_n(x)\to e^{-x^2/2}$.</li><li><b>Domination</b> : par 1), $0\leqslant f_n(x)\leqslant\big(1-\frac{x^2}{n\pi}\big)^n\leqslant e^{-x^2/\pi}$, intégrable.</li></ul>$$\int_0^{\sqrt n\pi/2}\Big(\cos\frac x{\sqrt n}\Big)^ndx\xrightarrow[n\to+\infty]{}\int_0^{+\infty}e^{-x^2/2}dx = \sqrt{\frac\pi2}.$$<div class="sbox">$$\int_0^{\pi/2}\cos^n(t)\,dt\underset{n\to+\infty}{\sim}\sqrt{\frac\pi{2n}}.$$</div>`, rappels: ["ip-cvd", "ip-ln"] }
  ],
  piege: R`Le changement d'échelle $t = x/\sqrt n$ est dicté par le développement limité : $\cos^nt$ est « non négligeable » seulement pour $t$ de l'ordre de $\frac1{\sqrt n}$.`,
  methode: R`Méthode de Laplace élémentaire : zoomer sur le maximum à l'échelle $\frac1{\sqrt n}$, puis convergence dominée.`
},
{ id: "ipar-23", ...P, level: 2, time: "15 min",
  title: "Limite de n∫₀¹ f(nt)/(1 + t) dt",
  enonce: R`<p>Soit $f : [0,+\infty[\to\mathbb R$ continue et intégrable. Déterminer la limite quand $n\to+\infty$ de $\displaystyle n\int_0^1\frac{f(nt)}{1+t}\,dt$.</p>`,
  decode: { donnees: [R`$f$ intégrable sur $[0,+\infty[$.`], but: R`Changement de variable $u = nt$, puis convergence dominée par $|f|$.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$u = nt$.</p>`, b: R`<p>Avec $u = nt$ :</p>$$n\int_0^1\frac{f(nt)}{1+t}\,dt = \int_0^n\frac{f(u)}{1+u/n}\,du = \int_0^{+\infty}g_n(u)\,du,$$<p>où $g_n(u) = \frac{f(u)}{1+u/n}$ sur $[0,n]$ et $0$ au-delà.</p>`, rappels: ["ip-varint"] },
    { t: "Convergence dominée", h: R`<p>$g_n(u)\to f(u)$ ; $|g_n|\leqslant|f|$.</p>`, b: R`<ul><li>Pour $u$ fixé, dès que $n\geqslant u$ : $g_n(u) = \frac{f(u)}{1+u/n}\to f(u)$.</li><li>$|g_n(u)|\leqslant|f(u)|$ (car $1+\frac un\geqslant1$), et $|f|$ est intégrable.</li></ul><div class="sbox">$$n\int_0^1\frac{f(nt)}{1+t}\,dt\xrightarrow[n\to+\infty]{}\int_0^{+\infty}f(u)\,du.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Le facteur $n$ devant l'intégrale est absorbé par le changement de variable ; sans lui, aucune domination n'est possible.`,
  methode: R`Changement de variable $u = nt$, puis l'intégrabilité de $f$ fournit directement la domination.`
},
{ id: "ipar-24", ...P, level: 3, time: "35 min",
  title: "∫₀^∞ e^{−t} ln t dt = −γ (Ker Lann)",
  enonce: R`<p>On note $\gamma = \lim_{n\to+\infty}\Big(\sum_{k = 1}^n\frac1k-\ln n\Big)$ la constante d'Euler. À l'aide d'une suite de fonctions judicieuse, exprimer en fonction de $\gamma$ l'intégrale $I = \displaystyle\int_0^{+\infty}e^{-t}\ln t\,dt$.</p>`,
  decode: { donnees: [R`$\big(1-\frac tn\big)^n\to e^{-t}$ et $\leqslant e^{-t}$ sur $[0,n]$.`], but: R`Calculer $I_n = \int_0^n\big(1-\frac tn\big)^n\ln t\,dt$ explicitement, puis passer à la limite.`, cles: {} },
  steps: [
    { t: "La suite approchante", h: R`<p>$f_n(t) = \big(1-\frac tn\big)^n\ln t$ sur $]0,n]$, $0$ au-delà.</p>`, b: R`<p>Soit $f_n(t) = \big(1-\frac tn\big)^n\ln t$ pour $t\in\,]0,n]$, $0$ pour $t>n$.</p><ul><li>$f_n(t)\to e^{-t}\ln t$ pour tout $t>0$ ;</li><li>$|f_n(t)|\leqslant e^{-t}|\ln t|$ (par $\ln(1+u)\leqslant u$), intégrable sur $]0,+\infty[$ ($|\ln t|$ intégrable en $0$, $e^{-t}|\ln t|$ négligeable devant $\frac1{t^2}$ en $+\infty$).</li></ul><p>Par convergence dominée : $I = \lim I_n$ avec $I_n = \int_0^n\big(1-\frac tn\big)^n\ln t\,dt$.</p>`, rappels: ["ip-cvd", "ip-ln"] },
    { t: "Réduction de Iₙ", h: R`<p>$t = nu$, puis $v = 1-u$.</p>`, b: R`<p>Avec $t = nu$ :</p>$$I_n = n\int_0^1(1-u)^n(\ln n+\ln u)\,du = \frac{n\ln n}{n+1}+n\int_0^1(1-u)^n\ln u\,du.$$<p>Avec $v = 1-u$ : $J_n = \int_0^1(1-u)^n\ln u\,du = \int_0^1v^n\ln(1-v)\,dv$.</p>` },
    { t: "Calcul de Jₙ", h: R`<p>Parties avec la primitive $\frac{v^{n+1}-1}{n+1}$ de $v^n$ (nulle en $1$).</p>`, b: R`<p>On intègre par parties avec la primitive $\frac{v^{n+1}-1}{n+1}$ de $v^n$. Le crochet $\big[\frac{v^{n+1}-1}{n+1}\ln(1-v)\big]_0^1$ est nul (en $1$ : $(v^{n+1}-1)\ln(1-v)\sim-(n+1)(1-v)\ln(1-v)\to0$). Donc</p>$$\begin{aligned}J_n &= -\int_0^1\frac{v^{n+1}-1}{n+1}\cdot\frac{-1}{1-v}\,dv = -\frac1{n+1}\int_0^1\frac{1-v^{n+1}}{1-v}\,dv\\&= -\frac1{n+1}\int_0^1\sum_{k = 0}^nv^k\,dv = -\frac{H_{n+1}}{n+1},\end{aligned}$$<p>où $H_{n+1} = \sum_{k = 1}^{n+1}\frac1k$.</p>` },
    { t: "Conclusion", h: R`<p>$I_n = \frac n{n+1}(\ln n-H_{n+1})$.</p>`, b: R`$$I_n = \frac n{n+1}\big(\ln n-H_{n+1}\big)\xrightarrow[n\to+\infty]{}-\gamma,$$<p>car $H_{n+1}-\ln n = (H_{n+1}-\ln(n+1))+\ln\frac{n+1}n\to\gamma$.</p><div class="sbox">$$\int_0^{+\infty}e^{-t}\ln t\,dt = -\gamma.$$</div><p>C'est aussi $\Gamma'(1)$ : la dérivée de la fonction Gamma en $1$.</p>` }
  ],
  piege: R`L'intégration par parties directe sur $\int_0^1v^n\ln(1-v)$ avec la primitive $\frac{v^{n+1}}{n+1}$ fait diverger le crochet en $1$ ; le choix $\frac{v^{n+1}-1}{n+1}$ règle le problème.`,
  methode: R`Approcher $e^{-t}$ par $\big(1-\frac tn\big)^n$ : les intégrales deviennent des polynômes, explicitement calculables.`
},
{ id: "ipar-25", ...P, level: 3, time: "40 min",
  title: "La formule de Stirling par convergence dominée",
  enonce: R`<p>On donne $\int_{-\infty}^{+\infty}e^{-t^2/2}dt = \sqrt{2\pi}$ et $\int_0^{+\infty}t^ne^{-t}dt = n!$ pour $n\in\mathbb N$.</p><ol><li>Calculer $\displaystyle\int_{-n}^{+\infty}\Big(1+\frac tn\Big)^ne^{-t}\,dt$.</li><li>Déterminer $\displaystyle\lim_{n\to+\infty}\frac1{\sqrt n}\int_n^{+\infty}\Big(1+\frac tn\Big)^ne^{-t}\,dt$.</li><li>Calculer $\displaystyle\lim_{n\to+\infty}\frac1{\sqrt n}\int_{-n}^n\Big(1+\frac tn\Big)^ne^{-t}\,dt$.</li><li>Retrouver ainsi la formule de Stirling.</li></ol>`,
  decode: { donnees: [R`$h(u) = \ln(1+u)-u$ : $h(u)\leqslant-\frac{u^2}2$ sur $]-1,0]$ et $h(u)\leqslant-\frac{u^2}6$ sur $[0,1]$.`], but: R`Écrire $n!\,e^nn^{-n}$ comme une intégrale, la découper, et zoomer à l'échelle $\sqrt n$.`, cles: {} },
  steps: [
    { t: "1) Lien avec n!", h: R`<p>$u = n+t$.</p>`, b: R`<p>Avec $u = n+t$ :</p>$$\begin{aligned}\int_{-n}^{+\infty}\Big(1+\frac tn\Big)^ne^{-t}\,dt &= \int_0^{+\infty}\Big(\frac un\Big)^ne^{-(u-n)}\,du\\&= \frac{e^n}{n^n}\int_0^{+\infty}u^ne^{-u}\,du = \frac{e^n\,n!}{n^n}.\end{aligned}$$` },
    { t: "2) La queue t ≥ n", h: R`<p>$\frac{\ln(1+v)}v$ décroît : pour $v = \frac tn\geqslant1$, $\ln(1+v)-v\leqslant(\ln2-1)v$.</p>`, b: R`<p>Pour $t\geqslant n$, posons $v = \frac tn\geqslant1$. Comme $v\mapsto\frac{\ln(1+v)}v$ décroît, $\ln(1+v)\leqslant v\ln2$, donc</p>$$\Big(1+\frac tn\Big)^ne^{-t} = e^{n(\ln(1+v)-v)}\leqslant e^{-cnv} = e^{-ct},\qquad c = 1-\ln2>0.$$<p>Ainsi $\frac1{\sqrt n}\int_n^{+\infty}\big(1+\frac tn\big)^ne^{-t}dt\leqslant\frac{e^{-cn}}{c\sqrt n}\to0$.</p><div class="sbox"><p>La limite de la question 2 vaut $0$.</p></div>` },
    { t: "3) Zoom à l'échelle √n", h: R`<p>$t = \sqrt nx$ : intégrande $\exp\big(n\,h(x/\sqrt n)\big)$.</p>`, b: R`<p>Avec $t = \sqrt nx$ :</p>$$\frac1{\sqrt n}\int_{-n}^n\Big(1+\frac tn\Big)^ne^{-t}\,dt = \int_{-\sqrt n}^{\sqrt n}\exp\Big(n\,h\Big(\frac x{\sqrt n}\Big)\Big)dx,$$<p>où</p>$$h(u) = \ln(1+u)-u.$$<p>Comme $h(u) = -\frac{u^2}2+o(u^2)$, l'intégrande tend vers $e^{-x^2/2}$ pour tout $x$ fixé.</p>` },
    { t: "3) Domination", h: R`<p>Signes des termes du développement de $\ln(1+u)$.</p>`, b: R`<ul><li><b>$u\in\,]-1,0]$</b> : $h(u)+\frac{u^2}2 = \sum_{k\geqslant3}\frac{(-1)^{k+1}u^k}k$, dont tous les termes sont $\leqslant0$ (car $u\leqslant0$). Donc $h(u)\leqslant-\frac{u^2}2$.</li><li><b>$u\in[0,1]$</b> : $h(u)\leqslant-\frac{u^2}2+\frac{u^3}3\leqslant-\frac{u^2}2+\frac{u^2}3 = -\frac{u^2}6$ (série alternée).</li></ul><p>Donc pour $x\in\,]-\sqrt n,\sqrt n]$, $n\,h(x/\sqrt n)\leqslant-\frac{x^2}6$ : l'intégrande (prolongée par $0$) est dominée par $e^{-x^2/6}$, intégrable. Par convergence dominée :</p><div class="sbox">$$\frac1{\sqrt n}\int_{-n}^n\Big(1+\frac tn\Big)^ne^{-t}\,dt\xrightarrow[n\to+\infty]{}\int_{-\infty}^{+\infty}e^{-x^2/2}dx = \sqrt{2\pi}.$$</div>`, rappels: ["ip-cvd"] },
    { t: "4) Stirling", h: R`<p>Sommer 2) et 3).</p>`, b: R`<p>Par 1), 2), 3) :</p>$$\frac{e^n\,n!}{n^n\sqrt n} = \frac1{\sqrt n}\int_{-n}^n\dots+\frac1{\sqrt n}\int_n^{+\infty}\dots\xrightarrow[n\to+\infty]{}\sqrt{2\pi}+0.$$<div class="sbox">$$n!\underset{n\to+\infty}{\sim}\sqrt{2\pi n}\Big(\frac ne\Big)^n.$$</div>`, rappels: ["ip-stirling"] }
  ],
  piege: R`La domination doit être uniforme en $n$ : la majoration $n\,h(x/\sqrt n)\leqslant-\frac{x^2}6$ repose sur des inégalités valables sur tout $]-1,1]$, pas seulement au voisinage de $0$.`,
  methode: R`Stirling par la méthode de Laplace : écrire $n!$ comme une intégrale, centrer au maximum, zoomer à l'échelle $\sqrt n$, convergence dominée.`
},
{ id: "ipar-26", ...P, level: 2, time: "30 min",
  title: "Intégrale de Gauss par les intégrales de Wallis impaires (CCP)",
  enonce: R`<ol><li>Rappeler la formule de Stirling.</li><li>On pose $u_n = \int_0^{\pi/2}\cos^{2n+1}(t)\,dt$. Calculer $u_0$.</li><li>Trouver une relation de récurrence vérifiée par $(u_n)$, puis exprimer $u_n$ à l'aide de factorielles.</li><li>Sur $[0,+\infty[$, on pose $f_n(x) = \big(1-\frac{x^2}n\big)^n$ si $0\leqslant x\lt\sqrt n$ et $f_n(x) = 0$ sinon. Montrer que $\lim\int_0^{+\infty}f_n = \int_0^{+\infty}e^{-x^2}dx$.</li><li>Montrer que $\int_0^{\sqrt n}f_n = \sqrt n\,u_n$. En déduire la valeur de $\int_0^{+\infty}e^{-x^2}dx$.</li></ol>`,
  decode: { donnees: [R`$\cos^2 = 1-\sin^2$.`], but: R`Wallis, convergence dominée, changement de variable $x = \sqrt n\sin t$, Stirling.`, cles: {} },
  steps: [
    { t: "1) et 2)", h: R`<p>$u_0 = \int_0^{\pi/2}\cos t\,dt$.</p>`, b: R`<p>Stirling : $n!\sim\sqrt{2\pi n}\big(\frac ne\big)^n$. Et $u_0 = \int_0^{\pi/2}\cos t\,dt = [\sin t]_0^{\pi/2} = 1$.</p>`, rappels: ["ip-stirling"] },
    { t: "3) Récurrence", h: R`<p>Parties : $u_n = \int\cos t\cdot\cos^{2n}t$.</p>`, b: R`<p>Pour $n\geqslant1$, par parties ($\sin$ primitive de $\cos$) :</p>$$\begin{aligned}u_n &= \big[\sin t\cos^{2n}t\big]_0^{\pi/2}+2n\int_0^{\pi/2}\sin^2t\cos^{2n-1}t\,dt\\&= 2n\int_0^{\pi/2}(1-\cos^2t)\cos^{2n-1}t\,dt = 2n(u_{n-1}-u_n).\end{aligned}$$<p>Donc $u_n = \frac{2n}{2n+1}u_{n-1}$ et</p>$$u_n = \frac{2n(2n-2)\cdots2}{(2n+1)(2n-1)\cdots3} = \frac{2^{2n}(n!)^2}{(2n+1)!}.$$` },
    { t: "4) Convergence dominée", h: R`<p>Exercice « $\int_0^{\sqrt n}(1-\frac{t^2}n)^n$ ».</p>`, b: R`<p>Pour $x$ fixé et $n>x^2$ : $f_n(x) = e^{n\ln(1-x^2/n)}\to e^{-x^2}$. Par $\ln(1+u)\leqslant u$ : $0\leqslant f_n(x)\leqslant e^{-x^2}$, intégrable. Par convergence dominée : $\int_0^{+\infty}f_n\to\int_0^{+\infty}e^{-x^2}dx$.</p>`, rappels: ["ip-cvd", "ip-ln"] },
    { t: "5) Changement de variable", h: R`<p>$x = \sqrt n\sin t$.</p>`, b: R`<p>Avec $x = \sqrt n\sin t$, $t\in[0,\frac\pi2]$ : $1-\frac{x^2}n = \cos^2t$ et $dx = \sqrt n\cos t\,dt$, donc</p>$$\int_0^{\sqrt n}f_n = \int_0^{\pi/2}\cos^{2n}t\cdot\sqrt n\cos t\,dt = \sqrt n\,u_n.$$` },
    { t: "5) Valeur de l'intégrale", h: R`<p>Stirling dans $\sqrt n\,u_n$.</p>`, b: R`<p>Par Stirling :</p>$$\begin{aligned}\sqrt n\,u_n &= \frac{\sqrt n}{2n+1}\cdot\frac{2^{2n}(n!)^2}{(2n)!}\\&\sim\frac{\sqrt n}{2n}\cdot\frac{2^{2n}\cdot2\pi n(n/e)^{2n}}{\sqrt{4\pi n}(2n/e)^{2n}} = \frac{\sqrt n}{2n}\cdot\sqrt{\pi n} = \frac{\sqrt\pi}2.\end{aligned}$$<div class="sbox">$$\int_0^{+\infty}e^{-x^2}\,dx = \frac{\sqrt\pi}2.$$</div>` }
  ],
  piege: R`Le changement de variable $x = \sqrt n\sin t$ est naturel : il transforme $1-\frac{x^2}n$ en un carré.`,
  methode: R`Relier une intégrale gaussienne aux intégrales de Wallis par $x = \sqrt n\sin t$, puis Stirling.`
},
{ id: "ipar-27", ...P, level: 4, time: "50 min",
  title: "Méthode de Laplace et formule de Stirling",
  enonce: R`<p>On admet $\int_{-\infty}^{+\infty}e^{-x^2}dx = \sqrt\pi$. Soient $a\lt b$ et $f : [a,b]\to\mathbb R$ de classe $\mathcal C^\infty$ telle que :</p><ul><li>$f$ atteint son maximum en un unique point $x_0\in[a,b]$ ;</li><li>$a\lt x_0\lt b$ et $f''(x_0)\neq0$.</li></ul><ol><li>Montrer que $f''(x_0)\lt0$.</li><li>Montrer que pour tout $\eta>0$ avec $\eta\lt\min(x_0-a,b-x_0)$ : $\displaystyle\int_a^be^{tf(x)}dx\underset{t\to+\infty}{\sim}\int_{x_0-\eta}^{x_0+\eta}e^{tf(x)}dx$.</li><li>Conclure : $\displaystyle\int_a^be^{tf(x)}dx\underset{t\to+\infty}{\sim}e^{tf(x_0)}\sqrt{\frac{2\pi}{t|f''(x_0)|}}$.</li><li>Application : retrouver la formule de Stirling à partir de $n! = \int_0^{+\infty}e^{-t}t^n\,dt$.</li></ol>`,
  decode: { donnees: [R`Taylor-Young en $x_0$, $f'(x_0) = 0$.`], but: R`Localiser au voisinage du maximum, puis convergence dominée à paramètre continu après le changement d'échelle $s = \sqrt t\,h$.`, cles: {} },
  steps: [
    { t: "1) Signe de f″(x₀)", h: R`<p>$f(x)-f(x_0)\sim\frac12f''(x_0)(x-x_0)^2$.</p>`, b: R`<p>$x_0$ est un maximum intérieur : $f'(x_0) = 0$. Par Taylor-Young, $f(x)-f(x_0)\sim\frac12f''(x_0)(x-x_0)^2$ (car $f''(x_0)\neq0$). Comme $f(x)-f(x_0)\leqslant0$ près de $x_0$, on obtient $f''(x_0)\lt0$.</p>` },
    { t: "2) Les deux bouts sont négligeables", h: R`<p>Sur $[a,x_0-\eta]$ et $[x_0+\eta,b]$, $f$ est majorée par $\max(f(x_1),f(x_2))\lt f(x_0)$.</p>`, b: R`<p>$f$ atteint son maximum sur $[a,x_0-\eta]$ en $x_1$ et sur $[x_0+\eta,b]$ en $x_2$, avec $m = \max(f(x_1),f(x_2))\lt f(x_0)$ (unicité du maximum). Par continuité, il existe $\delta\in\,]0,\eta[$ avec $f>m'$ sur $[x_0-\delta,x_0+\delta]$, où $m\lt m'\lt f(x_0)$. Alors</p>$$\left\{\begin{aligned}\int_a^{x_0-\eta}e^{tf}+\int_{x_0+\eta}^be^{tf}&\leqslant(b-a)e^{tm},\\\int_{x_0-\eta}^{x_0+\eta}e^{tf}&\geqslant2\delta e^{tm'}.\end{aligned}\right.$$<p>Comme $\frac{e^{tm}}{e^{tm'}}\to0$, les deux bouts sont négligeables devant l'intégrale centrale : d'où l'équivalent.</p>` },
    { t: "3) Changement d'échelle", h: R`<p>$f(x) = f(x_0)+\frac12f''(x_0)h^2+h^2\varepsilon(h)$, puis $s = \sqrt t\,h$.</p>`, b: R`<p>Écrivons $f(x_0+h) = f(x_0)+\frac12f''(x_0)h^2+h^2\varepsilon(h)$ avec $\varepsilon(h)\to0$. Choisissons $\eta$ assez petit pour que $\varepsilon(h)\leqslant\frac14|f''(x_0)|$ sur $[-\eta,\eta]$ (la question 2 permet ce choix). Avec $s = \sqrt t\,h$ :</p>$$\int_{x_0-\eta}^{x_0+\eta}e^{tf} = \frac{e^{tf(x_0)}}{\sqrt t}\int_{-\eta\sqrt t}^{\eta\sqrt t}\exp\Big(\frac12f''(x_0)s^2+s^2\varepsilon\Big(\frac s{\sqrt t}\Big)\Big)ds.$$` },
    { t: "3) Convergence dominée à paramètre continu", h: R`<p>Limite $e^{\frac12f''(x_0)s^2}$, domination $e^{-\frac14|f''(x_0)|s^2}$.</p>`, b: R`<p>L'intégrande (prolongée par $0$) tend vers $e^{\frac12f''(x_0)s^2}$ quand $t\to+\infty$, et elle est majorée par $\exp\big(-\frac12|f''(x_0)|s^2+\frac14|f''(x_0)|s^2\big) = e^{-\frac14|f''(x_0)|s^2}$, intégrable. Par convergence dominée (le long de toute suite $t_k\to+\infty$) :</p>$$\int_{-\eta\sqrt t}^{\eta\sqrt t}\dots\,ds\xrightarrow[t\to+\infty]{}\int_{-\infty}^{+\infty}e^{-\frac12|f''(x_0)|s^2}ds = \sqrt{\frac{2\pi}{|f''(x_0)|}}.$$<div class="sbox">$$\int_a^be^{tf(x)}dx\underset{t\to+\infty}{\sim}e^{tf(x_0)}\sqrt{\frac{2\pi}{t|f''(x_0)|}}.$$</div>`, rappels: ["ip-cvd"] },
    { t: "4) Stirling", h: R`<p>$t = nu$ : $n! = n^{n+1}\int_0^{+\infty}e^{n(\ln u-u)}du$.</p>`, b: R`<p>Avec $t = nu$ : $n! = n^{n+1}\int_0^{+\infty}e^{n(\ln u-u)}du$. La fonction $f(u) = \ln u-u$ a un unique maximum en $u_0 = 1$, avec $f(1) = -1$, $f''(1) = -1$.</p><ul><li>Sur un segment $[a,b]\ni1$ ($a\lt1\lt b$) : $\int_a^be^{nf}\sim e^{-n}\sqrt{\frac{2\pi}n}$ par 3).</li><li>Les morceaux $]0,a]$ et $[b,+\infty[$ sont négligeables : $\int_0^ae^{nf}\leqslant ae^{nf(a)}$ avec $f(a)\lt-1$, et, en choisissant $b$ tel que $f(u)\leqslant-\frac u2$ pour $u\geqslant b$, $\int_b^{+\infty}e^{nf}\leqslant\int_b^{+\infty}e^{-nu/2}du\leqslant\frac2ne^{-nb/2}$ avec $\frac b2>1$.</li></ul><div class="sbox">$$n! = n^{n+1}\int_0^{+\infty}e^{n(\ln u-u)}du\underset{n\to+\infty}{\sim}n^{n+1}e^{-n}\sqrt{\frac{2\pi}n} = \sqrt{2\pi n}\Big(\frac ne\Big)^n.$$</div>`, rappels: ["ip-stirling"] }
  ],
  piege: R`L'unicité du maximum est essentielle pour que les bouts soient exponentiellement négligeables ; et $\eta$ doit être choisi assez petit pour que le reste $\varepsilon$ ne gâche pas la domination.`,
  methode: R`Méthode de Laplace : localiser l'intégrale au voisinage du maximum, développer à l'ordre $2$, zoomer à l'échelle $\frac1{\sqrt t}$ et conclure par convergence dominée.`
}
]);
})();

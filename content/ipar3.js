/* Intégrales dépendant d'un paramètre (Spé) : bloc « Applications de la convergence dominée ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 6 };
LEMME.rappels({
  "ip-ippeq": { t: "Équivalent par intégration par parties", b: R`<p><b>Cas $f\in\mathcal C^1([0,1])$</b> : par parties,</p><div class="sbox">$$\int_0^1f(x)x^n\,dx = \frac{f(1)}{n+1}-\frac1{n+1}\int_0^1f'(x)x^{n+1}\,dx = \frac{f(1)}{n+1}+O\Big(\frac1{n^2}\Big).$$</div><p><b>Cas $f$ continue</b> : $t = x^{n+1}$, puis convergence dominée :</p>$$(n+1)\int_0^1f(x)x^n\,dx = \int_0^1f\big(t^{1/(n+1)}\big)\,dt\xrightarrow[n\to+\infty]{}f(1).$$` },
  "ip-telesc": { t: "Lien suite-série", b: R`<div class="sbox">$$(u_n)\ \text{converge}\iff\sum(u_{n+1}-u_n)\ \text{converge}.$$</div>$$u_{n+1}-u_n = O\Big(\frac1{n^2}\Big)\ \Longrightarrow\ (u_n)\ \text{converge}.$$` }
});
LEMME.exercises([
{ id: "ipar-28", ...P, level: 2, time: "15 min",
  title: "Équivalent de ∫₀^∞ ln(1 + x/n) / (x(1 + x²)) dx (CCINP)",
  enonce: R`<p>Pour $n\in\mathbb N^*$ et $x>0$, on pose</p>$$f_n(x) = \frac1{x(1+x^2)}\ln\Big(1+\frac xn\Big).$$<ol><li>Montrer que $f_n$ est intégrable sur $]0,+\infty[$.</li><li>Déterminer un équivalent simple de $u_n = \displaystyle\int_0^{+\infty}f_n(x)\,dx$.</li></ol>`,
  decode: { donnees: [R`$\ln(1+u)\sim u$ en $0$ et $\ln(1+u)\leqslant u$.`], but: R`Étudier $nu_n$ par convergence dominée.`, cles: {} },
  steps: [
    { t: "1) Intégrabilité", h: R`<p>Comportement en $0$ et en $+\infty$.</p>`, b: R`<p>$f_n$ est continue sur $]0,+\infty[$.</p><ul><li><b>En $0$</b> : $\ln\big(1+\frac xn\big)\sim\frac xn$, donc $f_n(x)\to\frac1n$ : $f_n$ se prolonge par continuité.</li><li><b>En $+\infty$</b> : $f_n(x) = O\Big(\dfrac{\ln x}{x^3}\Big) = o\Big(\dfrac1{x^2}\Big)$.</li></ul><p>Donc $f_n$ est intégrable sur $]0,+\infty[$.</p>` },
    { t: "2) Limite simple de n fₙ", h: R`<p>$n\ln(1+\frac xn)\to x$.</p>`, b: R`<p>Posons $g_n = nf_n$. Pour $x>0$ fixé :</p>$$g_n(x) = \frac{n\ln\big(1+\frac xn\big)}{x(1+x^2)}\xrightarrow[n\to+\infty]{}\frac x{x(1+x^2)} = \frac1{1+x^2}.$$` },
    { t: "2) Domination et conclusion", h: R`<p>$\ln(1+u)\leqslant u$.</p>`, b: R`<p>Par $\ln(1+u)\leqslant u$ :</p>$$0\leqslant g_n(x)\leqslant\frac{n\cdot\frac xn}{x(1+x^2)} = \frac1{1+x^2},$$<p>fonction intégrable sur $]0,+\infty[$. Par convergence dominée :</p>$$nu_n\xrightarrow[n\to+\infty]{}\int_0^{+\infty}\frac{dx}{1+x^2} = \frac\pi2.$$<div class="sbox">$$u_n\underset{n\to+\infty}{\sim}\frac\pi{2n}.$$</div>`, rappels: ["ip-cvd", "ip-ln"] }
  ],
  piege: R`Pour un équivalent, on ne passe pas à la limite dans $u_n$ (qui tend vers $0$) : on cherche la bonne normalisation, ici $nu_n$.`,
  methode: R`Équivalent d'une intégrale qui tend vers $0$ : multiplier par la vitesse pressentie, puis convergence dominée.`
},
{ id: "ipar-29", ...P, level: 2, time: "15 min",
  title: "Équivalent de ∫₀^∞ e^{−nt} f(t)/√t dt (Mines)",
  enonce: R`<p>Soit $f : [0,+\infty[\to\mathbb R$ continue, bornée, avec $f(0)\neq0$. Déterminer un équivalent simple de</p>$$u_n = \int_0^{+\infty}\frac{e^{-nt}f(t)}{\sqrt t}\,dt\qquad(n\geqslant1).$$`,
  decode: { donnees: [R`$\int_0^{+\infty}e^{-x^2}dx = \frac{\sqrt\pi}2$.`], but: R`Changement de variable $s = nt$, puis convergence dominée.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$s = nt$.</p>`, b: R`<p>Avec $s = nt$, $dt = \frac{ds}n$ et $\sqrt t = \frac{\sqrt s}{\sqrt n}$ :</p>$$u_n = \frac1{\sqrt n}\int_0^{+\infty}f\Big(\frac sn\Big)\frac{e^{-s}}{\sqrt s}\,ds.$$` },
    { t: "Convergence dominée", h: R`<p>$|f(s/n)|\leqslant\|f\|_\infty$.</p>`, b: R`<ul><li>Pour $s>0$ fixé, $f\big(\frac sn\big)\to f(0)$ par continuité.</li><li>$\Big|f\big(\frac sn\big)\dfrac{e^{-s}}{\sqrt s}\Big|\leqslant\|f\|_\infty\dfrac{e^{-s}}{\sqrt s} = \varphi(s)$, intégrable sur $]0,+\infty[$ (en $0$ : $\frac1{\sqrt s}$ ; en $+\infty$ : $e^{-s}$).</li></ul>$$\sqrt n\,u_n\xrightarrow[n\to+\infty]{}f(0)\int_0^{+\infty}\frac{e^{-s}}{\sqrt s}\,ds.$$<p>Cela justifie au passage l'existence de $u_n$.</p>`, rappels: ["ip-cvd"] },
    { t: "Calcul et conclusion", h: R`<p>$s = x^2$.</p>`, b: R`<p>Avec $s = x^2$, $ds = 2x\,dx$ :</p>$$\int_0^{+\infty}\frac{e^{-s}}{\sqrt s}\,ds = 2\int_0^{+\infty}e^{-x^2}dx = \sqrt\pi.$$<p>Comme $f(0)\sqrt\pi\neq0$ :</p><div class="sbox">$$u_n\underset{n\to+\infty}{\sim}f(0)\sqrt{\frac\pi n}.$$</div><p><b>Coquille du livre</b> : la conclusion y est écrite $u_n\sim\frac{\sqrt\pi}{\sqrt n}$ ; il manque le facteur $f(0)$.</p>` }
  ],
  piege: R`L'hypothèse $f(0)\neq0$ sert à transformer la limite de $\sqrt n\,u_n$ en équivalent : une limite nulle ne donne pas d'équivalent.`,
  methode: R`Le poids $e^{-nt}$ concentre l'intégrale près de $0$ : $s = nt$ fait apparaître la vitesse $\frac1{\sqrt n}$.`
},
{ id: "ipar-30", ...P, level: 1, time: "10 min",
  title: "Équivalent de ∫₀ⁿ √(1 + (1 − x/n)ⁿ) dx",
  enonce: R`<p>Déterminer un équivalent quand $n\to+\infty$ de</p>$$\int_0^n\sqrt{1+\Big(1-\frac xn\Big)^n}\,dx.$$`,
  decode: { donnees: [], but: R`Changement de variable $u = 1-\frac xn$, puis convergence dominée sur $[0,1]$.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$u = 1-\frac xn$.</p>`, b: R`<p>Avec $u = 1-\frac xn$, $dx = -n\,du$ :</p>$$\int_0^n\sqrt{1+\Big(1-\frac xn\Big)^n}\,dx = n\int_0^1\sqrt{1+u^n}\,du.$$` },
    { t: "Convergence dominée", h: R`<p>$u^n\to0$ sur $[0,1[$ ; $\sqrt{1+u^n}\leqslant\sqrt2$.</p>`, b: R`<ul><li>Pour $u\in[0,1[$ : $\sqrt{1+u^n}\to1$.</li><li>$0\leqslant\sqrt{1+u^n}\leqslant\sqrt2$, constante intégrable sur $[0,1]$.</li></ul>$$\int_0^1\sqrt{1+u^n}\,du\xrightarrow[n\to+\infty]{}1.$$<div class="sbox">$$\int_0^n\sqrt{1+\Big(1-\frac xn\Big)^n}\,dx\underset{n\to+\infty}{\sim}n.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`La convergence simple n'a pas lieu en $u = 1$ vers $1$ (valeur $\sqrt2$) ; un point est négligeable pour l'intégrale.`,
  methode: R`Intervalle $[0,n]$ : le changement de variable affine ramène à $[0,1]$ et fait sortir le facteur $n$.`
},
{ id: "ipar-31", ...P, level: 2, time: "20 min",
  title: "Équivalent de ∫₀^∞ e^{−x/n}/(1 + cos² x) dx",
  enonce: R`<p>Déterminer un équivalent quand $n\to+\infty$ de</p>$$\int_0^{+\infty}\frac{e^{-x/n}}{1+\cos^2x}\,dx.$$`,
  decode: { donnees: [R`$1+\cos^2x$ est $\pi$-périodique et $\geqslant1$.`], but: R`Découper en périodes, sommer une série géométrique, puis convergence dominée sur $[0,\pi]$.`, cles: {} },
  steps: [
    { t: "Découpage en périodes", h: R`<p>Sur $[k\pi,(k+1)\pi]$, poser $x = k\pi+y$.</p>`, b: R`<p>L'intégrale converge car l'intégrande est majorée par $e^{-x/n}$. Par la relation de Chasles et $x = k\pi+y$ :</p>$$\begin{aligned}\int_0^{+\infty}\frac{e^{-x/n}}{1+\cos^2x}\,dx &= \sum_{k = 0}^{+\infty}\int_{k\pi}^{(k+1)\pi}\frac{e^{-x/n}}{1+\cos^2x}\,dx\\&= \sum_{k = 0}^{+\infty}e^{-k\pi/n}\int_0^\pi\frac{e^{-y/n}}{1+\cos^2y}\,dy.\end{aligned}$$` },
    { t: "Série géométrique", h: R`<p>Raison $e^{-\pi/n}\in\,]0,1[$.</p>`, b: R`<p>L'intégrale sur $[0,\pi]$ ne dépend pas de $k$ :</p>$$\int_0^{+\infty}\frac{e^{-x/n}}{1+\cos^2x}\,dx = \frac1{1-e^{-\pi/n}}\int_0^\pi\frac{e^{-y/n}}{1+\cos^2y}\,dy.$$<p>Et $1-e^{-\pi/n}\sim\frac\pi n$, donc $\dfrac1{1-e^{-\pi/n}}\sim\dfrac n\pi$.</p>` },
    { t: "Limite de l'intégrale sur [0, π]", h: R`<p>Convergence dominée par $1$.</p>`, b: R`<p>$\frac{e^{-y/n}}{1+\cos^2y}\to\frac1{1+\cos^2y}$ et l'intégrande est majorée par $1$ sur $[0,\pi]$. Donc</p>$$\int_0^\pi\frac{e^{-y/n}}{1+\cos^2y}\,dy\xrightarrow[n\to+\infty]{}\int_0^\pi\frac{dy}{1+\cos^2y}.$$`, rappels: ["ip-cvd"] },
    { t: "Calcul de ∫₀^π dy/(1 + cos² y)", h: R`<p>Symétrie, puis $t = \tan y$.</p>`, b: R`<p>Par symétrie $y\mapsto\pi-y$, c'est $2\int_0^{\pi/2}$. Avec $t = \tan y$ : $dy = \frac{dt}{1+t^2}$ et $1+\cos^2y = \frac{2+t^2}{1+t^2}$, donc</p>$$\int_0^\pi\frac{dy}{1+\cos^2y} = 2\int_0^{+\infty}\frac{dt}{2+t^2} = 2\cdot\frac1{\sqrt2}\cdot\frac\pi2 = \frac\pi{\sqrt2}.$$<div class="sbox">$$\int_0^{+\infty}\frac{e^{-x/n}}{1+\cos^2x}\,dx\underset{n\to+\infty}{\sim}\frac n\pi\cdot\frac\pi{\sqrt2} = \frac n{\sqrt2}.$$</div>` }
  ],
  piege: R`Le changement $t = \tan y$ n'est pas valable sur $[0,\pi]$ entier ($\tan$ n'y est pas continue) : on se ramène d'abord à $[0,\frac\pi2[$.`,
  methode: R`Intégrande produit d'une fonction périodique et d'une exponentielle : découper en périodes et sommer la série géométrique.`
},
{ id: "ipar-32", ...P, level: 2, time: "20 min",
  title: "∫₀¹ x ln x/(x² − 1) dx = ¼ Σ 1/k² (CCINP)",
  enonce: R`<p>Pour $n\in\mathbb N$, on pose</p>$$J_n = \int_0^1\frac{x^{2n+1}\ln x}{x^2-1}\,dx.$$<ol><li>Justifier l'existence de $J_n$.</li><li>Calculer $J_n-J_{n+1}$.</li><li>En déduire l'identité $\displaystyle\int_0^1\frac{x\ln x}{x^2-1}\,dx = \frac14\sum_{k = 1}^{+\infty}\frac1{k^2}$.</li></ol>`,
  decode: { donnees: [R`$\int_0^1x^m\ln x\,dx = -\frac1{(m+1)^2}$.`], but: R`Télescoper, puis montrer $J_n\to0$ par convergence dominée.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>Limites en $0$ et en $1$.</p>`, b: R`<p>La fonction $g_n : x\mapsto\frac{x^{2n+1}\ln x}{x^2-1}$ est continue sur $]0,1[$.</p><ul><li><b>En $0$</b> : $x^{2n+1}\ln x\to0$ (car $2n+1\geqslant1$), donc $g_n(x)\to0$.</li><li><b>En $1$</b> : $\ln x\sim x-1$ et $x^2-1 = (x-1)(x+1)$, donc $g_n(x)\to\frac12$.</li></ul><p>$g_n$ se prolonge par continuité sur $[0,1]$ : $J_n$ existe.</p>` },
    { t: "2) Différence", h: R`<p>$x^{2n+1}-x^{2n+3} = -x^{2n+1}(x^2-1)$.</p>`, b: R`<p>On simplifie par $x^2-1$ :</p>$$J_n-J_{n+1} = \int_0^1\frac{x^{2n+1}(1-x^2)\ln x}{x^2-1}\,dx = -\int_0^1x^{2n+1}\ln x\,dx.$$<p>Par parties (primitive $\frac{x^{2n+2}}{2n+2}$, crochet nul) :</p>$$\int_0^1x^{2n+1}\ln x\,dx = -\frac1{2n+2}\int_0^1x^{2n+1}\,dx = -\frac1{(2n+2)^2}.$$<div class="sbox">$$J_n-J_{n+1} = \frac1{4(n+1)^2}.$$</div>` },
    { t: "3) Limite de Jₙ", h: R`<p>$0\leqslant g_n\leqslant g_0$ prolongée.</p>`, b: R`<p>Sur $]0,1[$, $g_n(x) = x^{2n}g_0(x)$ avec $g_0\geqslant0$ prolongeable par continuité sur $[0,1]$, donc bornée par un réel $M$.</p><ul><li>$g_n(x)\to0$ pour $x\in\,]0,1[$ ;</li><li>$0\leqslant g_n(x)\leqslant M$, intégrable sur $[0,1]$.</li></ul><p>Par convergence dominée : $J_n\to0$.</p>`, rappels: ["ip-cvd"] },
    { t: "3) Conclusion", h: R`<p>Télescopage.</p>`, b: R`<p>Pour tout $N$ :</p>$$J_0-J_{N+1} = \sum_{n = 0}^N(J_n-J_{n+1}) = \frac14\sum_{n = 0}^N\frac1{(n+1)^2}.$$<p>En faisant $N\to+\infty$ :</p><div class="sbox">$$\int_0^1\frac{x\ln x}{x^2-1}\,dx = \frac14\sum_{k = 1}^{+\infty}\frac1{k^2} = \frac{\pi^2}{24}.$$</div>` }
  ],
  piege: R`L'intégrande est positive : $\ln x\lt0$ et $x^2-1\lt0$ sur $]0,1[$. Attention au signe en simplifiant $\frac{1-x^2}{x^2-1} = -1$.`,
  methode: R`Pour calculer $J_0$ : trouver une différence $J_n-J_{n+1}$ explicite, télescoper, et montrer $J_n\to0$.`
},
{ id: "ipar-33", ...P, level: 2, time: "25 min",
  title: "La suite ∫₀^∞ dx/(1 + x³)ⁿ et sa série alternée (CCINP)",
  enonce: R`<p>Pour $n\in\mathbb N^*$, on pose</p>$$I_n = \int_0^{+\infty}\frac{dx}{(1+x^3)^n}.$$<ol><li>Justifier l'existence de $I_n$.</li><li>Montrer que $(I_n)_{n\geqslant1}$ converge et trouver sa limite.</li><li>Étudier la convergence de $\sum_{n\geqslant1}(-1)^{n-1}I_n$ et calculer sa somme.</li></ol>`,
  decode: { donnees: [R`$\int_0^{+\infty}\frac{dt}{1+t^3} = \frac{2\pi}{3\sqrt3}$.`], but: R`Convergence dominée ; critère spécial ; somme géométrique sous l'intégrale.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>Équivalent en $+\infty$.</p>`, b: R`<p>$u_n(x) = \frac1{(1+x^3)^n}$ est continue sur $[0,+\infty[$, et $u_n(x)\sim\frac1{x^{3n}}$ en $+\infty$ avec $3n>1$ : $u_n$ est intégrable.</p>` },
    { t: "2) Limite", h: R`<p>Domination par $u_1$.</p>`, b: R`<ul><li>$u_n(x)\to0$ pour $x>0$ (et $u_n(0) = 1$).</li><li>$0\leqslant u_n(x)\leqslant\frac1{1+x^3} = \varphi(x)$, intégrable.</li></ul><div class="sbox">$$I_n\xrightarrow[n\to+\infty]{}0.$$</div>`, rappels: ["ip-cvd"] },
    { t: "3) Convergence de la série", h: R`<p>$(I_n)$ décroît vers $0$.</p>`, b: R`<p>$0\leqslant u_{n+1}\leqslant u_n$, donc $0\leqslant I_{n+1}\leqslant I_n$, et $I_n\to0$. Par le critère spécial des séries alternées, $\sum(-1)^{n-1}I_n$ converge.</p>` },
    { t: "3) Somme partielle", h: R`<p>$q = \frac1{1+x^3}$ : $\sum_{n = 1}^N(-1)^{n-1}q^n = \frac{q(1-(-q)^N)}{1+q}$.</p>`, b: R`<p>Posons $q = \frac1{1+x^3}$, de sorte que $\frac q{1+q} = \frac1{2+x^3}$. La somme géométrique donne</p>$$\begin{aligned}\sum_{n = 1}^N(-1)^{n-1}I_n &= \int_0^{+\infty}\frac{1-(-q)^N}{2+x^3}\,dx\\&= \int_0^{+\infty}\frac{dx}{2+x^3}+(-1)^{N+1}\int_0^{+\infty}\frac{q^N}{2+x^3}\,dx.\end{aligned}$$<p>Comme $2+x^3\geqslant1+x^3$ :</p>$$\Big|\int_0^{+\infty}\frac{q^N}{2+x^3}\,dx\Big|\leqslant\int_0^{+\infty}q^{N+1}dx = I_{N+1}\xrightarrow[N\to+\infty]{}0.$$` },
    { t: "3) Calcul de la somme", h: R`<p>$x = 2^{1/3}t$.</p>`, b: R`<p>Avec $x = 2^{1/3}t$ : $2+x^3 = 2(1+t^3)$, $dx = 2^{1/3}dt$, donc</p>$$\int_0^{+\infty}\frac{dx}{2+x^3} = 2^{-2/3}\int_0^{+\infty}\frac{dt}{1+t^3} = 2^{-2/3}\cdot\frac{2\pi}{3\sqrt3}.$$<p>La dernière intégrale se calcule avec la décomposition</p>$$\frac1{1+t^3} = \frac{1/3}{t+1}+\frac{-\frac13t+\frac23}{t^2-t+1}.$$<div class="sbox">$$\sum_{n = 1}^{+\infty}(-1)^{n-1}I_n = \frac{2^{1/3}\pi}{3\sqrt3}.$$</div>` }
  ],
  piege: R`La série $\sum I_n$ diverge ($I_n$ décroît trop lentement), donc on ne peut pas intervertir série et intégrale par convergence absolue : on passe par les sommes partielles et un reste explicite.`,
  methode: R`Série alternée d'intégrales : sommer la série géométrique sous l'intégrale, puis majorer le reste.`
},
{ id: "ipar-34", ...P, level: 3, time: "35 min",
  title: "Moyenne arithmético-géométrique et intégrale (Centrale)",
  enonce: R`<p>Soient $a,b>0$. On définit $(a_n)$ et $(b_n)$ par $a_0 = a$, $b_0 = b$ et, pour tout $n\in\mathbb N$ :</p>$$a_{n+1} = \frac{a_n+b_n}2,\qquad b_{n+1} = \sqrt{a_nb_n}.$$<ol><li>Montrer que $(a_n)$ et $(b_n)$ convergent vers une même limite, notée $M(a,b)$.</li><li>On pose $T(a,b) = \displaystyle\int_{-\infty}^{+\infty}\frac{du}{\sqrt{(a^2+u^2)(b^2+u^2)}}$. Montrer que $T\Big(\dfrac{a+b}2,\sqrt{ab}\Big) = T(a,b)$, à l'aide du changement de variable $u = \frac12\big(t-\frac{ab}t\big)$.</li><li>Montrer que $T(a,b) = \dfrac\pi{M(a,b)}$.</li></ol>`,
  decode: { donnees: [R`Inégalité arithmético-géométrique $\sqrt{xy}\leqslant\frac{x+y}2$.`], but: R`Suites adjacentes ; changement de variable bijectif $]0,+\infty[\to\mathbb R$ ; convergence dominée.`, cles: {} },
  steps: [
    { t: "1) Monotonie", h: R`<p>$b_{n+1}\leqslant a_{n+1}$ pour tout $n$.</p>`, b: R`<p>Les suites sont bien définies et strictement positives. Par l'inégalité arithmético-géométrique, $b_{n+1}\leqslant a_{n+1}$ pour tout $n\in\mathbb N$. Donc, pour $n\geqslant1$ :</p>$$\left\{\begin{aligned}a_{n+1}&= \frac{a_n+b_n}2\leqslant a_n,\\b_{n+1}&= \sqrt{a_nb_n}\geqslant b_n.\end{aligned}\right.$$<p>À partir du rang $1$ : $(a_n)$ décroît, $(b_n)$ croît, et $b_1\leqslant b_n\leqslant a_n\leqslant a_1$.</p>` },
    { t: "1) Limite commune", h: R`<p>Passer à la limite dans $a_{n+1} = \frac{a_n+b_n}2$.</p>`, b: R`<p>Monotones et bornées, les deux suites convergent, vers $\ell$ et $\ell'$. Par passage à la limite : $\ell = \frac{\ell+\ell'}2$, donc $\ell = \ell'$.</p><div class="sbox"><p>$(a_n)$ et $(b_n)$ convergent vers une même limite $M(a,b)\geqslant b_1>0$.</p></div><p>Notation : la note du livre « $a\leqslant b$ puis $a_{n+1}\leqslant b_{n+1}$ » est inversée ; c'est $b_{n+1}\leqslant a_{n+1}$.</p>` },
    { t: "2) Convergence de T(a, b)", h: R`<p>Équivalent en $\pm\infty$.</p>`, b: R`<p>L'intégrande est continue sur $\mathbb R$ et équivalente à $\frac1{u^2}$ en $\pm\infty$ : $T(a,b)$ converge.</p>` },
    { t: "2) Les calculs du changement de variable", h: R`<p>Calculer $\big(\frac{a+b}2\big)^2+u^2$, $ab+u^2$ et $du$.</p>`, b: R`<p>$\psi : t\mapsto\frac12\big(t-\frac{ab}t\big)$ est $\mathcal C^1$, strictement croissante, bijective de $]0,+\infty[$ sur $\mathbb R$. Avec $u = \psi(t)$ :</p>$$\left\{\begin{aligned}du&= \frac{t^2+ab}{2t^2}\,dt,\\\Big(\frac{a+b}2\Big)^2+u^2&= \frac{t^4+(a^2+b^2)t^2+a^2b^2}{4t^2} = \frac{(t^2+a^2)(t^2+b^2)}{4t^2},\\ab+u^2&= \frac{(t^2+ab)^2}{4t^2}.\end{aligned}\right.$$` },
    { t: "2) Conclusion", h: R`<p>Tout se simplifie, puis parité.</p>`, b: R`<p>Le produit des racines vaut $\frac{(t^2+ab)\sqrt{(t^2+a^2)(t^2+b^2)}}{4t^2}$, donc</p>$$\begin{aligned}T\Big(\frac{a+b}2,\sqrt{ab}\Big) &= \int_0^{+\infty}\frac{t^2+ab}{2t^2}\cdot\frac{4t^2}{(t^2+ab)\sqrt{(t^2+a^2)(t^2+b^2)}}\,dt\\&= \int_0^{+\infty}\frac{2\,dt}{\sqrt{(t^2+a^2)(t^2+b^2)}}.\end{aligned}$$<p>Par parité de l'intégrande, c'est $\int_{-\infty}^{+\infty}$ :</p><div class="sbox">$$T\Big(\frac{a+b}2,\sqrt{ab}\Big) = T(a,b).$$</div>` },
    { t: "3) Convergence dominée", h: R`<p>$T(a_n,b_n) = T(a,b)$ ; $a_n,b_n\geqslant m = \min(a,b)$.</p>`, b: R`<p>Par récurrence, $T(a_n,b_n) = T(a,b)$ pour tout $n$. Tous les termes sont $\geqslant m = \min(a,b)>0$ (car $b_n\geqslant b_1\geqslant\min(a,b)$ et $a_n\geqslant b_n$). Donc</p><ul><li>l'intégrande tend vers $\frac1{M(a,b)^2+u^2}$ ;</li><li>elle est majorée par $\frac1{m^2+u^2}$, intégrable sur $\mathbb R$.</li></ul><p>Par convergence dominée :</p>$$T(a,b) = T(a_n,b_n)\xrightarrow[n\to+\infty]{}\int_{-\infty}^{+\infty}\frac{du}{M(a,b)^2+u^2},$$<p>et</p>$$\int_{-\infty}^{+\infty}\frac{du}{M(a,b)^2+u^2} = \frac1{M(a,b)}\Big[\arctan\frac u{M(a,b)}\Big]_{-\infty}^{+\infty}.$$<div class="sbox">$$T(a,b) = \frac\pi{M(a,b)}.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Le changement de variable $u = \psi(t)$ envoie $]0,+\infty[$ sur $\mathbb R$ tout entier : la nouvelle intégrale est sur $]0,+\infty[$, d'où le facteur $2$ puis la parité.`,
  methode: R`Une intégrale invariante par la transformation $(a,b)\mapsto(a_1,b_1)$ est constante le long de la suite : sa valeur est sa limite, obtenue par convergence dominée.`
},
{ id: "ipar-35", ...P, level: 2, time: "15 min",
  title: "Équivalent de ∫₀¹ ln(1 + tⁿ) dt",
  enonce: R`<p>Donner un équivalent simple quand $n\to+\infty$ de</p>$$I_n = \int_0^1\ln(1+t^n)\,dt.$$`,
  decode: { donnees: [R`$\ln(1+u)\leqslant u$ ; $\int_0^1\frac{\ln(1+x)}x\,dx = \frac{\pi^2}{12}$.`], but: R`Changement de variable $x = t^n$, puis convergence dominée.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$x = t^n$, $t = x^{1/n}$.</p>`, b: R`<p>Avec $t = x^{1/n}$, $dt = \frac1nx^{\frac1n-1}dx$ :</p>$$nI_n = \int_0^1\ln(1+x)\,x^{\frac1n-1}\,dx.$$` },
    { t: "Convergence dominée", h: R`<p>$|u_n(x)|\leqslant x\cdot x^{\frac1n-1} = x^{1/n}\leqslant1$.</p>`, b: R`<p>Posons $u_n(x) = \ln(1+x)x^{\frac1n-1}$ sur $]0,1]$.</p><ul><li>$x^{\frac1n-1}\to x^{-1}$, donc $u_n(x)\to\frac{\ln(1+x)}x$.</li><li>Par $\ln(1+x)\leqslant x$ : $0\leqslant u_n(x)\leqslant x^{1/n}\leqslant1$, intégrable sur $]0,1]$.</li></ul>$$nI_n\xrightarrow[n\to+\infty]{}\int_0^1\frac{\ln(1+x)}x\,dx.$$<div class="sbox">$$I_n\underset{n\to+\infty}{\sim}\frac1n\int_0^1\frac{\ln(1+x)}x\,dx = \frac{\pi^2}{12n}.$$</div><p>La valeur $\frac{\pi^2}{12}$ s'obtient par intégration terme à terme (bloc suivant). <b>Coquille du livre</b> : il écrit $(n+1)I_n$ là où c'est $nI_n$ ; l'équivalent est le même.</p>`, rappels: ["ip-cvd", "ip-ln"] }
  ],
  piege: R`La limite simple $\frac{\ln(1+x)}x$ se prolonge en $0$ : il n'y a aucun problème d'intégrabilité.`,
  methode: R`$\int_0^1g(t^n)\,dt$ : poser $x = t^n$ fait apparaître le facteur $\frac1n$.`
},
{ id: "ipar-36", ...P, level: 2, time: "25 min",
  title: "Équivalent de ∫₀¹ f(x) xⁿ dx",
  enonce: R`<p>Soit $f : [0,1]\to\mathbb R$ continue. On pose $I_n = \displaystyle\int_0^1f(x)x^n\,dx$ pour $n\in\mathbb N$.</p><ol><li>Déterminer la limite de $(I_n)$.</li><li>On suppose $f(1)\neq0$ et $f$ de classe $\mathcal C^1$. Donner un équivalent simple de $I_n$.</li><li>On suppose toujours $f(1)\neq0$, mais $f$ seulement continue. Donner un équivalent simple de $I_n$.</li></ol>`,
  decode: { donnees: [R`$f$ continue sur un segment : bornée par $M$.`], but: R`Comparaison ; intégration par parties ; changement de variable $t = x^{n+1}$.`, cles: {} },
  steps: [
    { t: "1) Limite", h: R`<p>$|I_n|\leqslant M\int_0^1x^n$.</p>`, b: R`<p>Soit $M = \|f\|_\infty$ :</p>$$|I_n|\leqslant M\int_0^1x^n\,dx = \frac M{n+1}\xrightarrow[n\to+\infty]{}0.$$<div class="sbox">$$I_n\xrightarrow[n\to+\infty]{}0.$$</div>` },
    { t: "2) Cas C¹", h: R`<p>Parties avec $\frac{x^{n+1}}{n+1}$.</p>`, b: R`<p>Par parties :</p>$$I_n = \Big[f(x)\frac{x^{n+1}}{n+1}\Big]_0^1-\frac1{n+1}\int_0^1f'(x)x^{n+1}\,dx = \frac{f(1)}{n+1}+O\Big(\frac1{n^2}\Big),$$<p>car le dernier terme est majoré par $\frac{\|f'\|_\infty}{(n+1)(n+2)}$.</p><div class="sbox">$$I_n\underset{n\to+\infty}{\sim}\frac{f(1)}n.$$</div>`, rappels: ["ip-ippeq"] },
    { t: "3) Cas continu : changement de variable", h: R`<p>$t = x^{n+1}$, $dt = (n+1)x^n\,dx$.</p>`, b: R`<p>Le cas précédent invite à étudier $(n+1)I_n$. Avec $t = x^{n+1}$ :</p>$$(n+1)I_n = \int_0^1f\big(t^{1/(n+1)}\big)\,dt.$$` },
    { t: "3) Convergence dominée", h: R`<p>$t^{1/(n+1)}\to1$ pour $t>0$.</p>`, b: R`<ul><li>Pour $t\in\,]0,1]$, $t^{1/(n+1)}\to1$, donc $f\big(t^{1/(n+1)}\big)\to f(1)$ par continuité.</li><li>$\big|f\big(t^{1/(n+1)}\big)\big|\leqslant M$, intégrable sur $]0,1]$.</li></ul>$$(n+1)I_n\xrightarrow[n\to+\infty]{}f(1)\neq0.$$<div class="sbox">$$I_n\underset{n\to+\infty}{\sim}\frac{f(1)}n.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Pour $f$ seulement continue, l'intégration par parties est impossible : c'est le changement de variable qui prend le relais.`,
  methode: R`$x^n$ concentre la masse près de $1$ : $I_n$ ne dépend asymptotiquement que de $f(1)$.`
},
{ id: "ipar-37", ...P, level: 3, time: "25 min",
  title: "Somme des ∫₀¹ f(x) xⁿ dx quand f(1) = 0",
  enonce: R`<p>Soit $f : [0,1]\to\mathbb R$ de classe $\mathcal C^1$. On pose $I_n = \displaystyle\int_0^1f(x)x^n\,dx$.</p><ol><li>Déterminer la limite de $(I_n)$.</li><li>On suppose $f(1)\neq0$. Donner un équivalent simple de $I_n$.</li></ol><p>On suppose désormais $f(1) = 0$ et l'on pose $I = \displaystyle\int_0^1\frac{f(x)}{1-x}\,dx$.</p><ol start="3"><li>Montrer la convergence de l'intégrale $I$.</li><li>Montrer la convergence de la série $\sum I_n$ et donner sa somme en fonction de $I$.</li></ol>`,
  decode: { donnees: [R`$\sum_{k = 0}^nx^k = \frac{1-x^{n+1}}{1-x}$.`], but: R`Mêmes méthodes que l'exercice précédent, puis somme géométrique sous l'intégrale.`, cles: {} },
  steps: [
    { t: "1) et 2)", h: R`<p>Comparaison et intégration par parties.</p>`, b: R`<p>Comme dans l'exercice précédent :</p>$$|I_n|\leqslant\frac{\|f\|_\infty}{n+1}\to0,\qquad I_n = \frac{f(1)}{n+1}+O\Big(\frac1{n^2}\Big).$$<div class="sbox"><p>$I_n\to0$ et, si $f(1)\neq0$, $I_n\sim\dfrac{f(1)}n$.</p></div>`, rappels: ["ip-ippeq"] },
    { t: "3) Convergence de I", h: R`<p>Taux d'accroissement en $1$.</p>`, b: R`<p>$g : x\mapsto\frac{f(x)}{1-x}$ est continue sur $[0,1[$, et, comme $f(1) = 0$ :</p>$$g(x) = -\frac{f(x)-f(1)}{x-1}\xrightarrow[x\to1^-]{}-f'(1).$$<p>$g$ se prolonge par continuité en $1$ : l'intégrale $I$ est faussement impropre, donc convergente.</p>` },
    { t: "4) Somme partielle", h: R`<p>Somme géométrique.</p>`, b: R`<p>Pour $n\in\mathbb N$ :</p>$$\sum_{k = 0}^nI_k = \int_0^1f(x)\frac{1-x^{n+1}}{1-x}\,dx = I-\int_0^1x^{n+1}g(x)\,dx.$$` },
    { t: "4) Conclusion", h: R`<p>$g$ continue sur $[0,1]$, donc bornée.</p>`, b: R`<p>$g$ prolongée est continue sur $[0,1]$, bornée par $M_g$, donc</p>$$\Big|\int_0^1x^{n+1}g(x)\,dx\Big|\leqslant\frac{M_g}{n+2}\xrightarrow[n\to+\infty]{}0.$$<div class="sbox">$$\sum_{n = 0}^{+\infty}I_n = \int_0^1\frac{f(x)}{1-x}\,dx = I.$$</div>` }
  ],
  piege: R`L'hypothèse $f(1) = 0$ est nécessaire : sinon $I_n\sim\frac{f(1)}n$ et la série diverge, tout comme l'intégrale $I$.`,
  methode: R`Somme $\sum\int f x^k$ : sommer la série géométrique sous l'intégrale, puis contrôler le reste $\int x^{n+1}g$.`
},
{ id: "ipar-38", ...P, level: 2, time: "25 min",
  title: "Limite de ∫ f(x)/(1 + xⁿ) et équivalent (CCINP)",
  enonce: R`<p>Soit $f$ de classe $\mathcal C^1$ sur $[a,b]$ avec $0\lt a\lt1\lt b$ et $f(1)\neq0$. On pose $f_n(x) = \dfrac{f(x)}{1+x^n}$.</p><ol><li>Déterminer la limite simple de $(f_n)$.</li><li>Établir $\displaystyle\lim_{n\to+\infty}\int_a^bf_n(t)\,dt = \int_a^1f(t)\,dt$.</li><li>Montrer que $\displaystyle\int_a^1t^{n-1}f_n(t)\,dt\underset{n\to+\infty}{\sim}\frac{\ln2}n\,f(1)$.</li></ol>`,
  decode: { donnees: [R`Une primitive de $\frac{t^{n-1}}{1+t^n}$ est $\frac1n\ln(1+t^n)$.`], but: R`Convergence dominée ; intégration par parties.`, cles: {} },
  steps: [
    { t: "1) Limite simple", h: R`<p>$x^n\to0$, $1$ ou $+\infty$.</p>`, b: R`$$f_n(x)\xrightarrow[n\to+\infty]{}\left\{\begin{aligned}f(x)&\quad\text{si }x\in[a,1[,\\\tfrac{f(1)}2&\quad\text{si }x = 1,\\0&\quad\text{si }x\in\,]1,b].\end{aligned}\right.$$` },
    { t: "2) Convergence dominée", h: R`<p>$|f_n|\leqslant|f|$.</p>`, b: R`<p>$|f_n(x)|\leqslant|f(x)|$, intégrable sur $[a,b]$, et la limite simple est continue par morceaux. Par convergence dominée :</p><div class="sbox">$$\int_a^bf_n(t)\,dt\xrightarrow[n\to+\infty]{}\int_a^1f(t)\,dt.$$</div>`, rappels: ["ip-cvd"] },
    { t: "3) Intégration par parties", h: R`<p>Primitive $\frac1n\ln(1+t^n)$.</p>`, b: R`$$\int_a^1t^{n-1}f_n(t)\,dt = \Big[\frac1n\ln(1+t^n)f(t)\Big]_a^1-\frac1n\int_a^1\ln(1+t^n)f'(t)\,dt.$$` },
    { t: "3) Les deux termes", h: R`<p>$\ln(1+a^n)\to0$ ; $\ln(1+t^n)\leqslant t^n$.</p>`, b: R`<ul><li><b>Crochet</b> : $\dfrac{\ln2}nf(1)-\dfrac{\ln(1+a^n)}nf(a) = \dfrac{\ln2}nf(1)+o\Big(\dfrac1n\Big)$, car $a^n\to0$.</li><li><b>Intégrale</b> : $\Big|\dfrac1n\displaystyle\int_a^1\ln(1+t^n)f'(t)\,dt\Big|\leqslant\dfrac{\|f'\|_\infty}n\int_0^1t^n\,dt = O\Big(\dfrac1{n^2}\Big)$.</li></ul>$$\int_a^1t^{n-1}f_n(t)\,dt = \frac{\ln2}nf(1)+o\Big(\frac1n\Big).$$<div class="sbox">$$\int_a^1t^{n-1}f_n(t)\,dt\underset{n\to+\infty}{\sim}\frac{\ln2}n\,f(1).$$</div>`, rappels: ["ip-ln"] }
  ],
  piege: R`La valeur de la limite simple en $x = 1$ ($\frac{f(1)}2$) n'influe pas sur l'intégrale.`,
  methode: R`Repérer la dérivée logarithmique $\frac{nt^{n-1}}{1+t^n}$ pour intégrer par parties.`
},
{ id: "ipar-39", ...P, level: 3, time: "25 min",
  title: "Une approximation de l'unité (CCINP)",
  enonce: R`<p>Pour $n\in\mathbb N^*$ et $x\in\mathbb R$, on pose</p>$$f_n(x) = \frac n{\sqrt\pi}\Big(1-\frac{x^2}{2n^2}\Big)^{2n^4}.$$<p>Soit $g : \mathbb R\to\mathbb R$ continue et nulle en dehors d'un segment $[a,b]$. Montrer que</p>$$\lim_{n\to+\infty}\int_{\mathbb R}f_n(x)g(x)\,dx = g(0).$$`,
  decode: { donnees: [R`$\int_{-\infty}^{+\infty}e^{-u^2}du = \sqrt\pi$.`], but: R`Changement de variable $x = \frac un$, puis convergence dominée.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$x = \frac un$.</p>`, b: R`<p>L'intégrale vaut $\int_a^bf_ng$, bien définie. Avec $x = \frac un$ :</p>$$\int_{\mathbb R}f_n(x)g(x)\,dx = \frac1{\sqrt\pi}\int_{na}^{nb}\Big(1-\frac{u^2}{2n^4}\Big)^{2n^4}g\Big(\frac un\Big)du = \int_{-\infty}^{+\infty}h_n(u)\,du,$$<p>où $h_n(u) = \frac1{\sqrt\pi}\big(1-\frac{u^2}{2n^4}\big)^{2n^4}g\big(\frac un\big)$ sur $[na,nb]$, et $0$ ailleurs.</p>` },
    { t: "Limite simple", h: R`<p>$2n^4\ln\big(1-\frac{u^2}{2n^4}\big)\to-u^2$.</p>`, b: R`<p>Pour $u$ fixé et $n$ grand ($u\in[na,nb]$ dès que $a\lt0\lt b$ ; sinon $g(0) = 0$ et le raisonnement est le même) :</p>$$h_n(u)\xrightarrow[n\to+\infty]{}\frac1{\sqrt\pi}e^{-u^2}g(0).$$` },
    { t: "Domination", h: R`<p>Pour $n\geqslant\max(|a|,|b|)$ et $u\in[na,nb]$ : $\frac{u^2}{2n^4}\leqslant\frac12$.</p>`, b: R`<p>Pour $n\geqslant\max(|a|,|b|,1)$ et $u\in[na,nb]$ : $u^2\leqslant n^2\max(a^2,b^2)\leqslant n^4$, donc $\frac{u^2}{2n^4}\leqslant\frac12$. La base est dans $[\frac12,1]$ et, par $\ln(1+v)\leqslant v$ :</p>$$|h_n(u)| = \frac{|g(u/n)|}{\sqrt\pi}\exp\Big(2n^4\ln\Big(1-\frac{u^2}{2n^4}\Big)\Big)\leqslant\frac{\|g\|_\infty}{\sqrt\pi}e^{-u^2} = \varphi(u).$$<p>Cette inégalité vaut aussi hors de $[na,nb]$ où $h_n = 0$.</p>`, rappels: ["ip-ln"] },
    { t: "Conclusion", h: R`<p>Convergence dominée.</p>`, b: R`<div class="sbox">$$\int_{\mathbb R}f_n(x)g(x)\,dx\xrightarrow[n\to+\infty]{}\frac{g(0)}{\sqrt\pi}\int_{-\infty}^{+\infty}e^{-u^2}du = g(0).$$</div><p><b>Coquille du livre</b> : la domination y oublie le facteur $\|g\|_\infty$.</p>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Sur $\mathbb R$ entier, $f_n$ explose quand $|x|>\sqrt2\,n$ (base négative, exposant pair) : c'est le support borné de $g$ qui rend tout légitime.`,
  methode: R`Approximation de l'unité : la masse de $f_n$ vaut à peu près $1$ et se concentre en $0$ ; on zoome par $x = \frac un$.`
},
{ id: "ipar-40", ...P, level: 3, time: "30 min",
  title: "Une somme de Riemann avec un saut (X)",
  enonce: R`<p>Soit $F : \mathbb R\to\mathbb R$ continue et décroissante, tendant vers $1$ en $-\infty$ et vers $0$ en $+\infty$. Soient $h,\delta$ deux réels avec $0\lt h\lt\delta$.</p><ol><li>Déterminer la limite de $I_n = \displaystyle\int_0^1F\big(\sqrt n(\delta t-h)\big)\,dt$.</li><li>On pose $S_n = \displaystyle\sum_{k = 0}^{n-1}F\Big(\sqrt n\Big(\delta\frac{k+1}n-h\Big)\Big)$. Déterminer un équivalent de $S_n$.</li></ol>`,
  decode: { donnees: [R`$0\leqslant F\leqslant1$.`], but: R`Convergence dominée vers une indicatrice ; encadrement de la somme par des intégrales grâce à la monotonie.`, cles: {} },
  steps: [
    { t: "1) Limite simple", h: R`<p>Signe de $\delta t-h$.</p>`, b: R`<p>Soit $f_n(t) = F\big(\sqrt n(\delta t-h)\big)$ sur $[0,1]$. Comme $0\lt\frac h\delta\lt1$ :</p>$$f_n(t)\xrightarrow[n\to+\infty]{}f(t) = \left\{\begin{aligned}1&\quad\text{si }t\in[0,\tfrac h\delta[,\\F(0)&\quad\text{si }t = \tfrac h\delta,\\0&\quad\text{si }t\in\,]\tfrac h\delta,1].\end{aligned}\right.$$` },
    { t: "1) Convergence dominée", h: R`<p>$|f_n|\leqslant1$.</p>`, b: R`<p>$0\leqslant f_n\leqslant1$, constante intégrable sur $[0,1]$, et $f$ est continue par morceaux :</p><div class="sbox">$$I_n\xrightarrow[n\to+\infty]{}\int_0^{h/\delta}1\,dt = \frac h\delta.$$</div>`, rappels: ["ip-cvd"] },
    { t: "2) Encadrement", h: R`<p>$t\mapsto F(\sqrt n(\delta t-h))$ décroît.</p>`, b: R`<p>$f_n$ est décroissante. Pour $t\in[\frac kn,\frac{k+1}n]$, $f_n(t)\geqslant f_n(\frac{k+1}n)$, et pour $t\in[\frac{k+1}n,\frac{k+2}n]$, $f_n(t)\leqslant f_n(\frac{k+1}n)$. Donc</p>$$\int_{(k+1)/n}^{(k+2)/n}f_n(t)\,dt\leqslant\frac1nf_n\Big(\frac{k+1}n\Big)\leqslant\int_{k/n}^{(k+1)/n}f_n(t)\,dt.$$<p>En sommant pour $k = 0,\dots,n-1$ :</p>$$\int_{1/n}^{1+1/n}f_n(t)\,dt\leqslant\frac{S_n}n\leqslant I_n.$$` },
    { t: "2) Le minorant", h: R`<p>$t\mapsto t+\frac1n$, puis convergence dominée.</p>`, b: R`<p>Avec $t\mapsto t+\frac1n$ :</p>$$\int_{1/n}^{1+1/n}f_n(t)\,dt = \int_0^1F\Big(\sqrt n\Big(\delta t-h+\frac\delta n\Big)\Big)dt.$$<p>Pour $t\neq\frac h\delta$, $\sqrt n\big(\delta t-h+\frac\delta n\big)\to\pm\infty$ selon le signe de $\delta t-h$ : même limite simple $f$ (sauf en un point), domination par $1$. Ce minorant tend donc aussi vers $\frac h\delta$.</p>` },
    { t: "2) Conclusion", h: R`<p>Théorème des gendarmes.</p>`, b: R`<p>Par encadrement, $\frac{S_n}n\to\frac h\delta>0$ :</p><div class="sbox">$$S_n\underset{n\to+\infty}{\sim}\frac h\delta\,n.$$</div>` }
  ],
  piege: R`Une somme de Riemann ne se traite pas par le théorème usuel : la fonction dépend de $n$. D'où l'encadrement par des intégrales.`,
  methode: R`Somme de valeurs d'une fonction monotone : encadrer chaque terme par l'intégrale sur la case voisine.`
},
{ id: "ipar-41", ...P, level: 3, time: "35 min",
  title: "Équivalent de ∫₀¹ (1 − x^α)ⁿ dx",
  enonce: R`<p>Pour $\alpha>0$ et $n\in\mathbb N$, on pose $I_n(\alpha) = \displaystyle\int_0^1(1-x^\alpha)^n\,dx$.</p><ol><li>Former une relation entre $I_{n+1}(\alpha)$ et $I_n(\alpha)$.</li><li>Justifier la convergence de la suite $(u_n)_{n\geqslant1}$ définie par $u_n = \ln\big(n^{1/\alpha}I_n(\alpha)\big)$.</li><li>En déduire qu'il existe $A_\alpha>0$ tel que $I_n(\alpha)\underset{n\to+\infty}{\sim}\dfrac{A_\alpha}{n^{1/\alpha}}$.</li><li>Exprimer $A_\alpha$ à l'aide d'une intégrale.</li></ol>`,
  decode: { donnees: [R`$x^\alpha = 1-(1-x^\alpha)$.`], but: R`Intégration par parties ; lien suite-série ; convergence dominée après $t = n^{1/\alpha}x$.`, cles: {} },
  steps: [
    { t: "1) Relation de récurrence", h: R`<p>Parties en dérivant $(1-x^\alpha)^{n+1}$.</p>`, b: R`<p>Par parties (dériver $(1-x^\alpha)^{n+1}$, intégrer $1$) :</p>$$\begin{aligned}I_{n+1}(\alpha)&= \big[x(1-x^\alpha)^{n+1}\big]_0^1+\alpha(n+1)\int_0^1x^\alpha(1-x^\alpha)^n\,dx\\&= \alpha(n+1)\int_0^1\big(1-(1-x^\alpha)\big)(1-x^\alpha)^n\,dx\\&= \alpha(n+1)\big(I_n(\alpha)-I_{n+1}(\alpha)\big).\end{aligned}$$<div class="sbox">$$I_{n+1}(\alpha) = \frac{\alpha(n+1)}{1+\alpha(n+1)}\,I_n(\alpha).$$</div>` },
    { t: "2) Différence uₙ₊₁ − uₙ", h: R`<p>$O(\frac1{n^2})$.</p>`, b: R`<p>$I_n(\alpha)>0$ (intégrale d'une fonction continue positive non nulle), donc $u_n$ est défini. Par 1) :</p>$$\begin{aligned}u_{n+1}-u_n&= \frac1\alpha\ln\Big(1+\frac1n\Big)+\ln\Big(1-\frac1{1+\alpha(n+1)}\Big)\\&= \frac1{\alpha n}+O\Big(\frac1{n^2}\Big)-\frac1{1+\alpha(n+1)}+O\Big(\frac1{n^2}\Big) = O\Big(\frac1{n^2}\Big),\end{aligned}$$<p>car $\frac1{\alpha n}-\frac1{1+\alpha(n+1)} = \frac{1+\alpha}{\alpha n(1+\alpha(n+1))} = O\big(\frac1{n^2}\big)$.</p><p>La série $\sum(u_{n+1}-u_n)$ converge absolument : $(u_n)$ converge.</p>`, rappels: ["ip-telesc"] },
    { t: "3) Équivalent", h: R`<p>Exponentielle de la limite.</p>`, b: R`<p>Si $u_n\to\ell$, alors $n^{1/\alpha}I_n(\alpha)\to A_\alpha = e^\ell>0$ :</p><div class="sbox">$$I_n(\alpha)\underset{n\to+\infty}{\sim}\frac{A_\alpha}{n^{1/\alpha}}.$$</div>` },
    { t: "4) Changement de variable", h: R`<p>$t = n^{1/\alpha}x$.</p>`, b: R`<p>Avec $t = n^{1/\alpha}x$ :</p>$$n^{1/\alpha}I_n(\alpha) = \int_0^{n^{1/\alpha}}\Big(1-\frac{t^\alpha}n\Big)^ndt = \int_0^{+\infty}v_n(t)\,dt,$$<p>où $v_n(t) = \big(1-\frac{t^\alpha}n\big)^n$ sur $[0,n^{1/\alpha}[$ et $0$ au-delà.</p>`, rappels: ["ip-varint"] },
    { t: "4) Convergence dominée", h: R`<p>Limite $e^{-t^\alpha}$, domination $e^{-t^\alpha}$.</p>`, b: R`<ul><li>Pour $t$ fixé et $n$ grand : $v_n(t) = \exp\big(n\ln\big(1-\frac{t^\alpha}n\big)\big)\to e^{-t^\alpha}$.</li><li>Par $\ln(1+v)\leqslant v$ : $0\leqslant v_n(t)\leqslant e^{-t^\alpha}$, intégrable sur $[0,+\infty[$.</li></ul><div class="sbox">$$A_\alpha = \int_0^{+\infty}e^{-t^\alpha}\,dt = \Gamma\Big(1+\frac1\alpha\Big).$$</div>`, rappels: ["ip-cvd", "ip-ln"] }
  ],
  piege: R`La question 4 donne directement l'équivalent ; les questions 2 et 3 montrent l'existence de $A_\alpha$ sans le calculer, par une autre voie.`,
  methode: R`Équivalent d'une suite définie par récurrence multiplicative : étudier $\ln$ de la suite normalisée et utiliser le lien suite-série.`
},
{ id: "ipar-42", ...P, level: 4, time: "40 min",
  title: "Subdivision équirépartie pour une densité (Centrale)",
  enonce: R`<ol><li>Rappeler une condition nécessaire et suffisante pour qu'une fonction dérivable sur un intervalle y soit strictement croissante.</li><li>Soit $f : [a,b]\to\mathbb R_+$ continue, dont l'ensemble des zéros est d'intérieur vide, et $n\in\mathbb N^*$. Montrer qu'il existe une unique subdivision $(x_0,\dots,x_n)$ de $[a,b]$ telle que : $\forall i\in[\![1,n]\!]$, $\displaystyle\int_{x_{i-1}}^{x_i}f(x)\,dx = \frac1n\int_a^bf(x)\,dx$.</li><li>Soit $g : [a,b]\to\mathbb R_+$ continue. Calculer $\displaystyle\lim_{n\to+\infty}\frac1n\sum_{i = 1}^ng(x_i)$.</li></ol>`,
  decode: { donnees: [R`$F(x) = \int_a^xf$ est dérivable, de dérivée $f$.`], but: R`Bijection $F$ ; réécrire la somme comme une intégrale, puis convergence dominée.`, cles: {} },
  steps: [
    { t: "1) Le critère", h: R`<p>$f'\geqslant0$, zéros d'intérieur vide.</p>`, b: R`<p>Une fonction dérivable sur un intervalle y est strictement croissante si, et seulement si, sa dérivée est positive et ne s'annule sur aucun sous-intervalle non réduit à un point (l'ensemble des zéros de la dérivée est d'intérieur vide).</p>` },
    { t: "2) Existence et unicité", h: R`<p>$F$ bijection de $[a,b]$ sur $[0,L]$.</p>`, b: R`<p>Soit $L = \int_a^bf$ et $F(x) = \int_a^xf$. $F$ est dérivable de dérivée $f\geqslant0$ dont les zéros forment un ensemble d'intérieur vide : par 1), $F$ est strictement croissante, continue, bijective de $[a,b]$ sur $[0,L]$. La condition s'écrit $F(x_i)-F(x_{i-1}) = \frac Ln$, soit $F(x_i) = \frac{iL}n$ :</p><div class="sbox">$$x_i = F^{-1}\Big(\frac{iL}n\Big),\qquad i = 0,\dots,n.$$</div>` },
    { t: "3) Réécriture comme intégrale", h: R`<p>$\frac Ln g(x_i) = \int_{x_{i-1}}^{x_i}g(x_i)f(x)\,dx$.</p>`, b: R`<p>On a $\frac Lng(x_i) = \int_{x_{i-1}}^{x_i}g(x_i)f(x)\,dx$, donc</p>$$\frac Ln\sum_{i = 1}^ng(x_i) = \int_a^bh_n(x)\,dx,\qquad h_n(x) = g(x_i)f(x)\text{ pour }x\in[x_{i-1},x_i[$$<p>(les $x_i$ dépendent de $n$). Domination : $|h_n|\leqslant\|g\|_\infty\|f\|_\infty$, constante intégrable.</p>` },
    { t: "3) Convergence simple", h: R`<p>Si $f(x)\neq0$, la case contenant $x$ a une longueur qui tend vers $0$.</p>`, b: R`<p>Soit $x\in[a,b[$.</p><ul><li><b>Si $f(x) = 0$</b> : $h_n(x) = 0 = f(x)g(x)$.</li><li><b>Si $f(x)>0$</b> : il existe $m,\alpha>0$ avec $f\geqslant m$ sur $[x-\alpha,x+\alpha]\cap[a,b]$. Pour l'indice $i$ tel que $x\in[x_{i-1},x_i[$ :$$\frac Ln = \int_{x_{i-1}}^{x_i}f\geqslant m\min(x_i-x_{i-1},\alpha).$$Pour $n$ grand, $\frac Ln\lt m\alpha$, donc $x_i-x_{i-1}\leqslant\frac L{nm}\to0$, puis $x_i\to x$ et $h_n(x)\to g(x)f(x)$ par continuité de $g$.</li></ul>` },
    { t: "3) Conclusion", h: R`<p>Convergence dominée.</p>`, b: R`<p>Par convergence dominée : $\frac Ln\sum g(x_i)\to\int_a^bfg$. Donc</p><div class="sbox">$$\lim_{n\to+\infty}\frac1n\sum_{i = 1}^ng(x_i) = \frac{\displaystyle\int_a^bf(x)g(x)\,dx}{\displaystyle\int_a^bf(x)\,dx}.$$</div><p>Interprétation : les $x_i$ se répartissent selon la densité $\frac fL$.</p>`, rappels: ["ip-cvd"] }
  ],
  piege: R`La domination est facile ; la difficulté est la convergence simple, qui demande de contrôler la longueur de la case contenant $x$.`,
  methode: R`Transformer une somme en intégrale d'une fonction en escalier, puis convergence dominée.`
}
]);
})();

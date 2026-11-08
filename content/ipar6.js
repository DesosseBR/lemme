/* Intégrales dépendant d'un paramètre (Spé) : blocs « Applications de l'intégration terme à terme » et « Intégration terme à terme par les sommes partielles ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 6 };
LEMME.rappels({
  "ip-sp": { t: "Intégrer terme à terme par les sommes partielles", b: R`<p>Quand $\sum\int|f_n|$ diverge (série alternée typiquement), on applique la convergence dominée à la suite des <b>sommes partielles</b> $S_n = \sum_{k = 0}^nf_k$ :</p><ul><li>$S_n\to S$ simplement ;</li><li>$|S_n|\leqslant\varphi$ intégrable (souvent grâce à la somme géométrique explicite, ou au critère spécial des séries alternées).</li></ul><p>Alors $\int S_n = \sum_{k = 0}^n\int f_k\to\int S$ : la série $\sum\int f_k$ converge et a pour somme $\int S$.</p>` },
  "ip-csa": { t: "Critère spécial et sommes partielles", b: R`<p>Si $(u_n)$ décroît vers $0$, les sommes partielles de $\sum(-1)^nu_n$ sont toutes comprises entre $0$ et $u_0$. C'est une domination toute faite pour la méthode des sommes partielles.</p>` }
});
LEMME.exercises([
{ id: "ipar-73", ...P, level: 2, time: "20 min",
  title: "Σ 1/((n + 1)(2n + 3)) par une intégrale (ENTPE)",
  enonce: R`<p>Pour $n\in\mathbb N$ et $x\in[0,1]$, on pose $f_n(x) = x^n(1-\sqrt x)$.</p><ol><li>Montrer que $\displaystyle\sum_{n = 1}^{+\infty}\int_0^1f_n(x)\,dx = \int_0^1\frac x{1+\sqrt x}\,dx$.</li><li>En déduire la valeur de $\displaystyle\sum_{n = 1}^{+\infty}\frac1{(n+1)(2n+3)}$.</li></ol>`,
  decode: { donnees: [R`$1-x = (1-\sqrt x)(1+\sqrt x)$.`], but: R`Intégration terme à terme positive, puis $u = \sqrt x$.`, cles: {} },
  steps: [
    { t: "1) Somme des fonctions", h: R`<p>Série géométrique de raison $x$.</p>`, b: R`<p>Pour $x\in[0,1[$ :</p>$$\sum_{n = 1}^{+\infty}x^n(1-\sqrt x) = \frac{x(1-\sqrt x)}{1-x} = \frac x{1+\sqrt x}.$$<p>Cette somme est continue sur $[0,1[$ (et se prolonge en $1$).</p>` },
    { t: "1) Intégrales des termes", h: R`<p>$\int_0^1x^n = \frac1{n+1}$, $\int_0^1x^{n+1/2} = \frac1{n+3/2}$.</p>`, b: R`$$\int_0^1f_n(x)\,dx = \frac1{n+1}-\frac1{n+\frac32} = \frac{\frac12}{(n+1)(n+\frac32)} = \frac1{(n+1)(2n+3)}.$$<p>Les $f_n$ sont positives : par intégration terme à terme positive,</p><div class="sbox">$$\sum_{n = 1}^{+\infty}\int_0^1f_n = \int_0^1\frac x{1+\sqrt x}\,dx.$$</div>`, rappels: ["ip-ittpos"] },
    { t: "2) Calcul de l'intégrale", h: R`<p>$u = \sqrt x$, division euclidienne.</p>`, b: R`<p>Avec $x = u^2$, $dx = 2u\,du$ :</p>$$\begin{aligned}\int_0^1\frac x{1+\sqrt x}\,dx &= \int_0^1\frac{2u^3}{1+u}\,du = 2\int_0^1\Big(u^2-u+1-\frac1{1+u}\Big)du\\&= 2\Big(\frac13-\frac12+1-\ln2\Big).\end{aligned}$$<div class="sbox">$$\sum_{n = 1}^{+\infty}\frac1{(n+1)(2n+3)} = \frac53-2\ln2.$$</div>` }
  ],
  piege: R`La somme commence à $n = 1$ : le terme $n = 0$ ($\frac13$) n'est pas compté, ce qui est cohérent avec $\sum_{n\geqslant1}x^n = \frac x{1-x}$.`,
  methode: R`Calculer une série en reconnaissant chaque terme comme une intégrale, puis sommer sous l'intégrale.`
},
{ id: "ipar-74", ...P, level: 2, time: "15 min",
  title: "Limite de ∫₀^∞ e^{−2t} Σ_{p ≥ n} aₚ tᵖ/p! dt (Mines)",
  enonce: R`<p>Soit $(a_n)_{n\geqslant0}$ une suite bornée. Calculer</p>$$\lim_{n\to+\infty}\int_0^{+\infty}e^{-2t}\Big(\sum_{p = n}^{+\infty}a_p\frac{t^p}{p!}\Big)dt.$$`,
  decode: { donnees: [R`$\int_0^{+\infty}t^pe^{-2t}dt = \frac{p!}{2^{p+1}}$.`], but: R`Intégrer terme à terme, puis reconnaître le reste d'une série convergente.`, cles: {} },
  steps: [
    { t: "Existence", h: R`<p>$|a_p\frac{t^p}{p!}|\leqslant\|a\|_\infty\frac{t^p}{p!}$.</p>`, b: R`<p>Soit $M = \sup|a_p|$. La série $\sum a_p\frac{t^p}{p!}$ converge absolument, sa somme est continue (convergence normale sur tout segment) et</p>$$\Big|\sum_{p = n}^{+\infty}a_p\frac{t^p}{p!}\Big|\leqslant Me^t,$$<p>donc l'intégrande est majorée par $Me^{-t}$ : l'intégrale existe.</p>` },
    { t: "Intégration terme à terme", h: R`<p>$\int|f_p| = \frac{|a_p|}{2^{p+1}}$.</p>`, b: R`<p>Posons $f_p(t) = a_p\frac{t^p}{p!}e^{-2t}$. Alors</p>$$\int_0^{+\infty}|f_p| = \frac{|a_p|}{p!}\cdot\frac{p!}{2^{p+1}} = \frac{|a_p|}{2^{p+1}}\leqslant\frac M{2^{p+1}},$$<p>terme d'une série convergente. Par intégration terme à terme :</p>$$\int_0^{+\infty}e^{-2t}\sum_{p = n}^{+\infty}a_p\frac{t^p}{p!}\,dt = \sum_{p = n}^{+\infty}\frac{a_p}{2^{p+1}}.$$`, rappels: ["ip-itt", "ip-tpe"] },
    { t: "Conclusion", h: R`<p>Reste d'une série convergente.</p>`, b: R`<p>C'est le reste d'ordre $n$ de la série convergente $\sum\frac{a_p}{2^{p+1}}$ :</p><div class="sbox">$$\lim_{n\to+\infty}\int_0^{+\infty}e^{-2t}\Big(\sum_{p = n}^{+\infty}a_p\frac{t^p}{p!}\Big)dt = 0.$$</div>` }
  ],
  piege: R`Le facteur $e^{-2t}$ (et non $e^{-t}$) est essentiel : avec $e^{-t}$, la majoration $Me^t\cdot e^{-t} = M$ ne serait pas intégrable.`,
  methode: R`Une intégrale d'un reste de série devient le reste d'une série numérique.`
},
{ id: "ipar-75", ...P, level: 3, time: "30 min",
  title: "Développement asymptotique de ∫₀¹ dt/(1 + tⁿ) (Centrale)",
  enonce: R`<p>Pour $n\geqslant1$, on pose $I_n = \displaystyle\int_0^1\frac{dt}{1+t^n}$.</p><ol><li>Trouver la limite $\ell$ de $(I_n)$.</li><li>Donner un équivalent de $\ell-I_n$.</li><li>Justifier $\displaystyle\int_0^1\frac{\ln(1+y)}y\,dy = \sum_{k = 0}^{+\infty}\frac{(-1)^k}{(k+1)^2}$.</li><li>Donner un développement asymptotique à trois termes de $I_n$.</li></ol>`,
  decode: { donnees: [R`$\sum_{k\geqslant0}\frac{(-1)^k}{(k+1)^2} = \frac{\pi^2}{12}$.`], but: R`Convergence dominée ; intégration par parties ; changement de variable $y = t^n$.`, cles: {} },
  steps: [
    { t: "1) Limite", h: R`<p>Domination par $1$.</p>`, b: R`<p>Pour $t\in[0,1[$, $\frac1{1+t^n}\to1$, et $0\leqslant\frac1{1+t^n}\leqslant1$. Par convergence dominée :</p><div class="sbox">$$\ell = 1.$$</div>`, rappels: ["ip-cvd"] },
    { t: "2) Intégration par parties", h: R`<p>$\ell-I_n = \int_0^1t\cdot\frac{t^{n-1}}{1+t^n}\,dt$.</p>`, b: R`$$\begin{aligned}\ell-I_n &= \int_0^1\frac{t^n}{1+t^n}\,dt = \Big[\frac{t\ln(1+t^n)}n\Big]_0^1-\frac1n\int_0^1\ln(1+t^n)\,dt\\&= \frac{\ln2}n-\frac1n\int_0^1\ln(1+t^n)\,dt.\end{aligned}$$<p>Comme $0\leqslant\int_0^1\ln(1+t^n)\,dt\leqslant\int_0^1t^n\,dt = \frac1{n+1}$ :</p><div class="sbox">$$\ell-I_n\underset{n\to+\infty}{\sim}\frac{\ln2}n.$$</div>`, rappels: ["ip-ln"] },
    { t: "3) La série", h: R`<p>$\frac{\ln(1+y)}y = \sum\frac{(-1)^ky^k}{k+1}$.</p>`, b: R`<p>Pour $y\in\,]0,1[$ :</p>$$\frac{\ln(1+y)}y = \sum_{k = 0}^{+\infty}\frac{(-1)^ky^k}{k+1},\qquad\int_0^1\Big|\frac{(-1)^ky^k}{k+1}\Big|dy = \frac1{(k+1)^2}.$$<p>La série des intégrales des valeurs absolues converge : par intégration terme à terme,</p><div class="sbox">$$\int_0^1\frac{\ln(1+y)}y\,dy = \sum_{k = 0}^{+\infty}\frac{(-1)^k}{(k+1)^2} = \frac{\pi^2}{12}.$$</div>`, rappels: ["ip-itt"] },
    { t: "4) Le terme suivant", h: R`<p>$y = t^n$ dans $\int_0^1\ln(1+t^n)$.</p>`, b: R`<p>Avec $y = t^n$ :</p>$$\int_0^1\ln(1+t^n)\,dt = \frac1n\int_0^1\frac{\ln(1+y)}{y^{1-\frac1n}}\,dy.$$<p>L'intégrande tend vers $\frac{\ln(1+y)}y$ et est dominée par $\frac{\ln(1+y)}{y^{1-1/n}}\leqslant y^{1/n}\leqslant1$. Par convergence dominée, cette intégrale tend vers $\frac{\pi^2}{12}$.</p>`, rappels: ["ip-cvd", "ip-ln"] },
    { t: "4) Conclusion", h: R`<p>Réinjecter.</p>`, b: R`$$\ell-I_n = \frac{\ln2}n-\frac{\pi^2}{12n^2}+o\Big(\frac1{n^2}\Big).$$<div class="sbox">$$I_n = 1-\frac{\ln2}n+\frac{\pi^2}{12n^2}+o\Big(\frac1{n^2}\Big).$$</div>` }
  ],
  piege: R`L'intégration par parties sert deux fois : d'abord pour l'équivalent, puis pour isoler le terme en $\frac1{n^2}$.`,
  methode: R`Développement asymptotique d'une intégrale : intégrations par parties successives, puis convergence dominée sur le reste.`
},
{ id: "ipar-76", ...P, level: 3, time: "30 min",
  title: "Même développement par une série (ENSTIM)",
  enonce: R`<p>On reprend $I_n = \displaystyle\int_0^1\frac{dt}{1+t^n}$.</p><ol><li>Déterminer la limite $\ell$ de $(I_n)$.</li><li>Donner un équivalent de $I_n-\ell$.</li><li>Justifier $\displaystyle\int_0^1\ln(1+t^n)\,dt = \sum_{k = 1}^{+\infty}\frac{(-1)^{k-1}}{k(nk+1)}$.</li><li>En déduire un équivalent de $\int_0^1\ln(1+t^n)\,dt$, puis un développement asymptotique à trois termes de $I_n$.</li></ol>`,
  decode: { donnees: [R`$\ln(1+u) = \sum_{k\geqslant1}\frac{(-1)^{k-1}u^k}k$ sur $[0,1]$.`], but: R`Mêmes premières étapes ; développer $\ln(1+t^n)$ en série et intégrer terme à terme.`, cles: {} },
  steps: [
    { t: "1) Limite", h: R`<p>Majorer $|I_n-1|$.</p>`, b: R`$$|I_n-1| = \int_0^1\frac{t^n}{1+t^n}\,dt\leqslant\int_0^1t^n\,dt = \frac1{n+1}\xrightarrow[n\to+\infty]{}0.$$<div class="sbox">$$\ell = 1.$$</div>` },
    { t: "2) Équivalent", h: R`<p>Parties.</p>`, b: R`<p>Comme dans l'exercice précédent :</p>$$I_n-1 = -\frac{\ln2}n+\frac1n\int_0^1\ln(1+t^n)\,dt,\qquad0\leqslant\int_0^1\ln(1+t^n)\leqslant\frac1{n+1}.$$<div class="sbox">$$I_n-1\underset{n\to+\infty}{\sim}-\frac{\ln2}n.$$</div>` },
    { t: "3) Développement en série", h: R`<p>$\int|f_k| = \frac1{k(nk+1)}$.</p>`, b: R`<p>Pour $t\in[0,1[$ :</p>$$\ln(1+t^n) = \sum_{k = 1}^{+\infty}\frac{(-1)^{k-1}}kt^{nk},\qquad\int_0^1\frac{t^{nk}}k\,dt = \frac1{k(nk+1)}.$$<p>La série $\sum\frac1{k(nk+1)}$ converge : par intégration terme à terme,</p><div class="sbox">$$\int_0^1\ln(1+t^n)\,dt = \sum_{k = 1}^{+\infty}\frac{(-1)^{k-1}}{k(nk+1)}.$$</div>`, rappels: ["ip-itt"] },
    { t: "4) Équivalent de l'intégrale", h: R`<p>$\frac n{k(nk+1)}-\frac1{k^2} = -\frac1{k^2(nk+1)}$.</p>`, b: R`<p>On calcule</p>$$n\sum_{k = 1}^{+\infty}\frac{(-1)^{k-1}}{k(nk+1)}-\sum_{k = 1}^{+\infty}\frac{(-1)^{k-1}}{k^2} = \sum_{k = 1}^{+\infty}\frac{(-1)^k}{k^2(nk+1)},$$<p>dont la valeur absolue est majorée par $\frac1n\sum\frac1{k^3}\to0$. Donc</p>$$n\int_0^1\ln(1+t^n)\,dt\xrightarrow[n\to+\infty]{}\sum_{k = 1}^{+\infty}\frac{(-1)^{k-1}}{k^2} = \frac{\pi^2}{12}.$$<div class="sbox">$$\int_0^1\ln(1+t^n)\,dt\underset{n\to+\infty}{\sim}\frac{\pi^2}{12n},\qquad I_n = 1-\frac{\ln2}n+\frac{\pi^2}{12n^2}+o\Big(\frac1{n^2}\Big).$$</div>` }
  ],
  piege: R`Pour passer à la limite dans la série, on ne permute pas limite et somme sans justification : on majore explicitement l'écart.`,
  methode: R`Une intégrale paramétrée devient une série dont on contrôle chaque terme uniformément en $n$.`
},
{ id: "ipar-77", ...P, level: 3, time: "35 min",
  title: "Séries Σ nᵖ / C(2n, n) (Mines)",
  enonce: R`<ol><li>Pour $(m,n)\in\mathbb N^2$, calculer $\int_0^1x^n(1-x)^m\,dx$.</li><li>Pour $p\in\mathbb Z$, montrer l'existence de $S_p = \displaystyle\sum_{n = 1}^{+\infty}\frac{n^p}{\binom{2n}n}$.</li><li>Calculer $S_{-1}$ et $S_0$.</li><li>Si $p\in\mathbb N$, proposer une méthode de calcul de $S_p$.</li></ol>`,
  decode: { donnees: [R`$\binom{2n+2}{n+1} = \frac{4n+2}{n+1}\binom{2n}n$.`], but: R`Intégrale Bêta ; d'Alembert ; intégration terme à terme ; relation de récurrence entre $S_0$ et $S_{-1}$.`, cles: {} },
  steps: [
    { t: "1) L'intégrale Bêta", h: R`<p>Parties : $B(n,m) = \frac m{n+1}B(n+1,m-1)$.</p>`, b: R`<p>Soit $B(n,m) = \int_0^1x^n(1-x)^m\,dx$. Par parties (crochet nul pour $m\geqslant1$) :</p>$$B(n,m) = \frac m{n+1}B(n+1,m-1).$$<p>En itérant jusqu'à $B(n+m,0) = \frac1{n+m+1}$ :</p><div class="sbox">$$\int_0^1x^n(1-x)^m\,dx = \frac{n!\,m!}{(n+m+1)!}.$$</div>` },
    { t: "2) Existence", h: R`<p>Rapport $\to\frac14$.</p>`, b: R`<p>Avec $u_n = \frac{n^p}{\binom{2n}n}$ :</p>$$\frac{u_{n+1}}{u_n} = \Big(1+\frac1n\Big)^p\frac{(n+1)^2}{(2n+2)(2n+1)}\xrightarrow[n\to+\infty]{}\frac14\lt1.$$<p>Par la règle de d'Alembert, $S_p$ existe pour tout $p\in\mathbb Z$.</p>` },
    { t: "3) Calcul de S₋₁", h: R`<p>$\frac1{n\binom{2n}n} = \int_0^1x^n(1-x)^{n-1}dx$.</p>`, b: R`<p>Par 1) : $\int_0^1x^n(1-x)^{n-1}dx = \frac{n!(n-1)!}{(2n)!} = \frac1{n\binom{2n}n}$. Les intégrandes sont positives et, pour $x\in[0,1[$ :</p>$$\sum_{n = 1}^{+\infty}x^n(1-x)^{n-1} = \frac1{1-x}\cdot\frac{x(1-x)}{1-x(1-x)} = \frac x{1-x+x^2}.$$<p>Par intégration terme à terme positive :</p>$$S_{-1} = \int_0^1\frac{x\,dx}{x^2-x+1}.$$`, rappels: ["ip-ittpos"] },
    { t: "3) Valeur de S₋₁", h: R`<p>$x = \frac12(2x-1)+\frac12$.</p>`, b: R`$$\begin{aligned}S_{-1} &= \frac12\Big[\ln(x^2-x+1)\Big]_0^1+\frac12\int_0^1\frac{dx}{(x-\frac12)^2+\frac34}\\&= 0+\frac12\cdot\frac2{\sqrt3}\Big[\arctan\frac{2x-1}{\sqrt3}\Big]_0^1.\end{aligned}$$<div class="sbox">$$S_{-1} = \frac1{\sqrt3}\cdot\frac\pi3 = \frac\pi{3\sqrt3}.$$</div>` },
    { t: "3) Calcul de S₀", h: R`<p>$\frac1{\binom{2n}n} = \frac4{\binom{2n+2}{n+1}}-\frac2{(n+1)\binom{2n+2}{n+1}}$.</p>`, b: R`<p>De $\binom{2n+2}{n+1} = \frac{4n+2}{n+1}\binom{2n}n$ et $4n+2 = 4(n+1)-2$ :</p>$$\frac1{\binom{2n}n} = \frac4{\binom{2n+2}{n+1}}-\frac2{(n+1)\binom{2n+2}{n+1}}.\qquad(\ast)$$<p>En sommant pour $n\geqslant1$ (le terme d'indice $1$ manquant vaut $\frac1{\binom21} = \frac12$ dans les deux séries) :</p>$$S_0 = 4\Big(S_0-\frac12\Big)-2\Big(S_{-1}-\frac12\Big).$$<div class="sbox">$$S_0 = \frac{1+2S_{-1}}3 = \frac13+\frac{2\pi}{9\sqrt3}.$$</div>` },
    { t: "4) Méthode générale", h: R`<p>Multiplier $(\ast)$ par $(n+1)^p$.</p>`, b: R`<p>On multiplie $(\ast)$ par $(n+1)^p$ et l'on somme pour $n\geqslant1$. À gauche, on développe $(n+1)^p$ par la formule du binôme : on obtient $\sum_{q = 0}^p\binom pqS_q$. À droite, on obtient $4\big(S_p-\frac12\big)-2\big(S_{p-1}-\frac12\big)$.</p><p>Comme $\sum_{n\geqslant1}\frac{(n+1)^p}{\binom{2n}n} = S_p+\sum_{q = 0}^{p-1}\binom pqS_q$, on obtient $S_p+\sum_{q\lt p}\binom pqS_q = 4S_p-2S_{p-1}-1$, soit</p>$$3S_p = 1+2S_{p-1}+\sum_{q = 0}^{p-1}\binom pqS_q.$$<p>Cela exprime $S_p$ à l'aide de $S_{-1},S_0,\dots,S_{p-1}$, calculables de proche en proche (pour $p = 0$, on retrouve $3S_0 = 1+2S_{-1}$).</p>` }
  ],
  piege: R`En sommant $(\ast)$, les séries de droite commencent à l'indice $2$ : il faut rajouter et retrancher leur terme d'indice $1$.`,
  methode: R`$\frac1{\binom{2n}n}$ est une intégrale Bêta : les séries associées se calculent par intégration terme à terme.`
},
{ id: "ipar-78", ...P, level: 1, time: "15 min",
  title: "Σ (−1)ⁿ/(2n + 1) = π/4",
  enonce: R`<p>Montrer que</p>$$\sum_{n = 0}^{+\infty}\frac{(-1)^n}{2n+1} = \int_0^1\frac{dt}{1+t^2},$$<p>et en déduire la valeur de la somme.</p>`,
  decode: { donnees: [R`$\sum_{k = 0}^n(-t^2)^k = \frac{1-(-t^2)^{n+1}}{1+t^2}$.`], but: R`Sommes partielles : le reste est explicite.`, cles: {} },
  steps: [
    { t: "Pourquoi les sommes partielles", h: R`<p>$\int_0^1t^{2n} = \frac1{2n+1}$ : série divergente.</p>`, b: R`<p>Avec $f_n(t) = (-1)^nt^{2n}$, on a $\int_0^1|f_n| = \frac1{2n+1}$ : la série $\sum\int|f_n|$ diverge, le théorème d'intégration terme à terme ne s'applique pas. On passe par les sommes partielles.</p>`, rappels: ["ip-sp"] },
    { t: "Somme partielle", h: R`<p>Somme géométrique.</p>`, b: R`<p>Pour $t\in[0,1]$ :</p>$$\sum_{k = 0}^n(-1)^kt^{2k} = \frac1{1+t^2}-\frac{(-1)^{n+1}t^{2n+2}}{1+t^2}.$$<p>En intégrant sur $[0,1]$ :</p>$$\sum_{k = 0}^n\frac{(-1)^k}{2k+1} = \int_0^1\frac{dt}{1+t^2}+(-1)^n\int_0^1\frac{t^{2n+2}}{1+t^2}\,dt.$$` },
    { t: "Le reste tend vers 0", h: R`<p>$\frac{t^{2n+2}}{1+t^2}\leqslant t^{2n+2}$.</p>`, b: R`$$0\leqslant\int_0^1\frac{t^{2n+2}}{1+t^2}\,dt\leqslant\int_0^1t^{2n+2}\,dt = \frac1{2n+3}\xrightarrow[n\to+\infty]{}0.$$<p>Donc la série converge et</p><div class="sbox">$$\sum_{n = 0}^{+\infty}\frac{(-1)^n}{2n+1} = \int_0^1\frac{dt}{1+t^2} = \arctan1 = \frac\pi4.$$</div>` }
  ],
  piege: R`Le développement $\frac1{1+t^2} = \sum(-t^2)^n$ ne vaut pas en $t = 1$ ; avec les sommes partielles, ce point ne gêne pas.`,
  methode: R`Série alternée $\sum\int f_n$ : écrire la somme partielle avec son reste exact, puis majorer le reste.`
},
{ id: "ipar-79", ...P, level: 2, time: "20 min",
  title: "∫₀¹ dt/(1 + tᵃ) = Σ (−1)ⁿ/(na + 1)",
  enonce: R`<p>Soit $a>0$. Montrer que</p>$$\int_0^1\frac{dt}{1+t^a} = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{na+1}.$$`,
  decode: { donnees: [R`$|S_n(t)|\leqslant\frac2{1+t^a}$.`], but: R`Sommes partielles et convergence dominée.`, cles: {} },
  steps: [
    { t: "Pourquoi pas le théorème direct", h: R`<p>$\int_0^1t^{na} = \frac1{na+1}$.</p>`, b: R`<p>Avec $f_n(t) = (-1)^nt^{na}$ : $\int_0^1|f_n| = \frac1{na+1}$, série divergente. De plus, $\sum f_n$ ne converge pas en $t = 1$, donc pas uniformément sur $[0,1]$.</p>` },
    { t: "Sommes partielles", h: R`<p>$S_n(t) = \frac{1-(-1)^{n+1}t^{(n+1)a}}{1+t^a}$.</p>`, b: R`<p>Posons</p>$$S_n(t) = \sum_{k = 0}^n(-1)^kt^{ka} = \frac{1-(-1)^{n+1}t^{(n+1)a}}{1+t^a}.$$<ul><li>$S_n(t)\to\frac1{1+t^a}$ pour $t\in[0,1[$ ;</li><li>$|S_n(t)|\leqslant\frac2{1+t^a}\leqslant2$, intégrable sur $[0,1[$.</li></ul>`, rappels: ["ip-sp"] },
    { t: "Conclusion", h: R`<p>Convergence dominée.</p>`, b: R`<p>Par convergence dominée, $\int_0^1S_n\to\int_0^1\frac{dt}{1+t^a}$. Or</p>$$\int_0^1S_n(t)\,dt = \sum_{k = 0}^n\frac{(-1)^k}{ka+1}.$$<div class="sbox">$$\sum_{n = 0}^{+\infty}\frac{(-1)^n}{na+1} = \int_0^1\frac{dt}{1+t^a},$$</div><p>avec, au passage, la convergence de la série.</p>`, rappels: ["ip-cvd"] }
  ],
  piege: R`La convergence de la série n'est pas supposée : elle découle de la convergence de $\int S_n$.`,
  methode: R`La somme géométrique donne une domination uniforme des sommes partielles.`
},
{ id: "ipar-80", ...P, level: 2, time: "15 min",
  title: "∫₀¹ x^{α−1}/(1 + x) dx = Σ (−1)ⁿ/(n + α)",
  enonce: R`<p>Soit $\alpha>0$. Établir que</p>$$\int_0^1\frac{x^{\alpha-1}}{1+x}\,dx = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{n+\alpha}.$$`,
  decode: { donnees: [R`$x^{\alpha-1}$ est intégrable sur $]0,1]$.`], but: R`Sommes partielles, domination par $2x^{\alpha-1}$.`, cles: {} },
  steps: [
    { t: "Sommes partielles", h: R`<p>$S_n(x) = x^{\alpha-1}\frac{1-(-x)^{n+1}}{1+x}$.</p>`, b: R`<p>L'intégrale existe car $\frac{x^{\alpha-1}}{1+x}\leqslant x^{\alpha-1}$, intégrable. La série $\sum\frac1{n+\alpha}$ diverge, d'où le recours aux sommes partielles :</p>$$S_n(x) = \sum_{k = 0}^n(-1)^kx^{k+\alpha-1} = x^{\alpha-1}\,\frac{1-(-x)^{n+1}}{1+x}.$$`, rappels: ["ip-sp"] },
    { t: "Convergence dominée", h: R`<p>$|S_n(x)|\leqslant\frac{2x^{\alpha-1}}{1+x}$.</p>`, b: R`<ul><li>$S_n(x)\to\frac{x^{\alpha-1}}{1+x}$ pour $x\in\,]0,1[$ ;</li><li>$|S_n(x)|\leqslant\frac{2x^{\alpha-1}}{1+x}$, intégrable sur $]0,1[$.</li></ul><p>Par convergence dominée, et comme $\int_0^1S_n = \sum_{k = 0}^n\frac{(-1)^k}{k+\alpha}$ :</p><div class="sbox">$$\int_0^1\frac{x^{\alpha-1}}{1+x}\,dx = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{n+\alpha}.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Pour $\alpha\lt1$, l'intégrande n'est pas bornée en $0$ : la domination doit garder le facteur $x^{\alpha-1}$.`,
  methode: R`Même méthode que pour $\int\frac{dt}{1+t^a}$ : sommes partielles et somme géométrique.`
},
{ id: "ipar-81", ...P, level: 2, time: "25 min",
  title: "∫₀¹ t^{a−1}/(1 + tᵇ) dt et Σ (−1)ⁿ/(3n + 1) (Mines)",
  enonce: R`<ol><li>Soient $a,b>0$. Établir $\displaystyle\int_0^1\frac{t^{a-1}}{1+t^b}\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{a+nb}$.</li><li>Calculer $\displaystyle\sum_{n = 0}^{+\infty}\frac{(-1)^n}{3n+1}$.</li></ol>`,
  decode: { donnees: [R`$\frac1{1+t^3} = \frac{1/3}{1+t}+\frac{-t/3+2/3}{t^2-t+1}$.`], but: R`Sommes partielles ; décomposition en éléments simples.`, cles: {} },
  steps: [
    { t: "1) Sommes partielles", h: R`<p>$S_n(t) = t^{a-1}\frac{1-(-1)^{n+1}t^{(n+1)b}}{1+t^b}$.</p>`, b: R`$$S_n(t) = \sum_{k = 0}^n(-1)^kt^{a+kb-1} = t^{a-1}\,\frac{1-(-1)^{n+1}t^{(n+1)b}}{1+t^b}.$$<ul><li>$S_n(t)\to\frac{t^{a-1}}{1+t^b}$ sur $]0,1[$ ;</li><li>$|S_n(t)|\leqslant\frac{2t^{a-1}}{1+t^b}\leqslant2t^{a-1}$, intégrable.</li></ul><p>Par convergence dominée, avec $\int_0^1S_n = \sum_{k = 0}^n\frac{(-1)^k}{a+kb}$ :</p><div class="sbox">$$\int_0^1\frac{t^{a-1}}{1+t^b}\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{a+nb}.$$</div>`, rappels: ["ip-sp", "ip-cvd"] },
    { t: "2) Cas a = 1, b = 3", h: R`<p>$\sum\frac{(-1)^n}{3n+1} = \int_0^1\frac{dt}{1+t^3}$.</p>`, b: R`<p>Avec $a = 1$ et $b = 3$, il s'agit de calculer $\int_0^1\frac{dt}{1+t^3}$. Par la décomposition</p>$$\frac1{1+t^3} = \frac13\cdot\frac1{1+t}-\frac16\cdot\frac{2t-1}{t^2-t+1}+\frac12\cdot\frac1{t^2-t+1}.$$` },
    { t: "2) Calcul", h: R`<p>Trois primitives usuelles.</p>`, b: R`$$\left\{\begin{aligned}\int_0^1\frac{dt}{1+t}&= \ln2,\\\int_0^1\frac{2t-1}{t^2-t+1}\,dt&= \big[\ln(t^2-t+1)\big]_0^1 = 0,\\\int_0^1\frac{dt}{(t-\frac12)^2+\frac34}&= \frac2{\sqrt3}\Big[\arctan\frac{2t-1}{\sqrt3}\Big]_0^1 = \frac{2\pi}{3\sqrt3}.\end{aligned}\right.$$<div class="sbox">$$\sum_{n = 0}^{+\infty}\frac{(-1)^n}{3n+1} = \frac{\ln2}3+\frac\pi{3\sqrt3}.$$</div>` }
  ],
  piege: R`Vérifier la décomposition : $-\frac16(2t-1)+\frac12 = \frac{-t+2}3$, conforme au numérateur attendu.`,
  methode: R`Une série $\sum\frac{(-1)^n}{a+nb}$ se calcule par une intégrale de fraction rationnelle.`
},
{ id: "ipar-82", ...P, level: 3, time: "40 min",
  title: "∫₀^∞ x^{r−1}/(1 + x) dx comme série (CCINP)",
  enonce: R`<ol><li>Donner le développement en série entière de $x\mapsto\frac1{1+x}$.</li><li>Pour $r$ réel convenable, on pose $s(r) = \displaystyle\int_0^{+\infty}\frac{x^{r-1}}{1+x}\,dx$.<ol><li>Déterminer le domaine de définition $D$ de $s$.</li><li>Montrer que, pour tout $r\in D$ : $\displaystyle\int_1^{+\infty}\frac{x^{r-1}}{1+x}\,dx = \int_0^1\frac{t^{-r}}{1+t}\,dt$.</li></ol></li><li>On veut écrire $s(r)$ comme la somme d'une série.<ol><li>Soit $\alpha>-1$ et $u_n = \displaystyle\int_0^1\sum_{k = n+1}^{+\infty}(-1)^kt^{k+\alpha}\,dt$. Montrer que $\Big|\sum_{k = n+1}^{+\infty}(-1)^kt^{k+\alpha}\Big|\leqslant t^n$ pour $t\in[0,1[$, et en déduire $u_n\to0$.</li><li>En déduire une expression de $\int_0^1\frac{t^\alpha}{1+t}\,dt$ comme somme d'une série.</li><li>Conclure : $s(r) = \dfrac1r+\displaystyle\sum_{n = 1}^{+\infty}(-1)^{n-1}\frac{2r}{n^2-r^2}$.</li></ol></li></ol>`,
  decode: { donnees: [R`$\sum_{k\geqslant n+1}(-t)^k = \frac{(-t)^{n+1}}{1+t}$.`], but: R`Intégrabilité en $0$ et $+\infty$ ; $t = \frac1x$ ; sommes partielles avec reste explicite.`, cles: {} },
  steps: [
    { t: "1) Série géométrique", h: R`<p>Raison $-x$.</p>`, b: R`$$\forall x\in\,]-1,1[,\qquad\frac1{1+x} = \sum_{n = 0}^{+\infty}(-1)^nx^n.$$` },
    { t: "2a) Domaine", h: R`<p>Équivalents en $0$ et $+\infty$.</p>`, b: R`<p>L'intégrande est positive et continue sur $]0,+\infty[$, avec</p>$$\frac{x^{r-1}}{1+x}\underset{x\to0^+}{\sim}x^{r-1} = \frac1{x^{1-r}},\qquad\frac{x^{r-1}}{1+x}\underset{x\to+\infty}{\sim}x^{r-2} = \frac1{x^{2-r}}.$$<p>Intégrable en $0$ si, et seulement si, $1-r\lt1$, et en $+\infty$ si, et seulement si, $2-r>1$ :</p><div class="sbox">$$D = \,]0,1[.$$</div><p><b>Coquille du livre</b> : l'équivalent en $+\infty$ y est écrit $x^{2-r}$ au lieu de $x^{r-2}$.</p>` },
    { t: "2b) Changement de variable", h: R`<p>$x = \frac1t$.</p>`, b: R`<p>$t\mapsto\frac1t$ est une bijection $\mathcal C^1$ décroissante de $]0,1]$ sur $[1,+\infty[$. Avec $x = \frac1t$, $dx = -\frac{dt}{t^2}$ :</p>$$\int_1^{+\infty}\frac{x^{r-1}}{1+x}\,dx = \int_0^1\frac{t^{1-r}}{1+\frac1t}\cdot\frac{dt}{t^2} = \int_0^1\frac{t^{1-r}\cdot t}{(t+1)\,t^2}\,dt = \int_0^1\frac{t^{-r}}{1+t}\,dt.$$` },
    { t: "3a) Le reste", h: R`<p>Somme géométrique, puis $t^{1+\alpha}\leqslant1$.</p>`, b: R`<p>Pour $t\in[0,1[$ :</p>$$\sum_{k = n+1}^{+\infty}(-1)^kt^{k+\alpha} = (-1)^{n+1}\frac{t^{n+1+\alpha}}{1+t},\qquad\Big|\sum_{k = n+1}^{+\infty}(-1)^kt^{k+\alpha}\Big|\leqslant t^{n+1+\alpha}\leqslant t^n,$$<p>car $t^{1+\alpha}\leqslant1$ ($\alpha>-1$). Donc $|u_n|\leqslant\int_0^1t^n\,dt = \frac1{n+1}\to0$.</p>` },
    { t: "3b) La série", h: R`<p>Couper la somme en $N$.</p>`, b: R`<p>Pour $N\in\mathbb N$, en séparant les $N+1$ premiers termes (somme finie) du reste :</p>$$\int_0^1\frac{t^\alpha}{1+t}\,dt = \sum_{n = 0}^N\int_0^1(-1)^nt^{n+\alpha}\,dt+u_N = \sum_{n = 0}^N\frac{(-1)^n}{n+\alpha+1}+u_N.$$<p>Comme $u_N\to0$ :</p><div class="sbox">$$\int_0^1\frac{t^\alpha}{1+t}\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{n+\alpha+1}.$$</div>`, rappels: ["ip-sp"] },
    { t: "3c) Conclusion", h: R`<p>$\alpha = r-1$ et $\alpha = -r$.</p>`, b: R`<p>Par Chasles et 2b), puis 3b) avec $\alpha = r-1$ et $\alpha = -r$ (tous deux $>-1$) :</p>$$s(r) = \int_0^1\frac{t^{r-1}}{1+t}\,dt+\int_0^1\frac{t^{-r}}{1+t}\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{n+r}+\sum_{n = 0}^{+\infty}\frac{(-1)^n}{n+1-r}.$$<p>On isole $\frac1r$ dans la première somme et on décale l'indice dans la seconde ($m = n+1$) :</p>$$s(r) = \frac1r+\sum_{n = 1}^{+\infty}(-1)^{n-1}\Big(\frac1{n-r}-\frac1{n+r}\Big).$$<div class="sbox">$$s(r) = \frac1r+\sum_{n = 1}^{+\infty}(-1)^{n-1}\frac{2r}{n^2-r^2}.$$</div><p>On peut montrer que cette somme vaut $\frac\pi{\sin(\pi r)}$.</p>` }
  ],
  piege: R`On combine deux séries convergentes terme à terme : c'est licite (linéarité de la somme), mais pas une permutation de termes.`,
  methode: R`Couper $\int_0^{+\infty}$ en $1$, ramener $[1,+\infty[$ à $]0,1]$ par $x = \frac1t$, puis développer en série.`
},
{ id: "ipar-83", ...P, level: 2, time: "25 min",
  title: "∫₀^∞ Σ (−1)^{n−1}/(n² + t²) dt",
  enonce: R`<p>Montrer que</p>$$\int_0^{+\infty}\sum_{n = 1}^{+\infty}\frac{(-1)^{n-1}}{n^2+t^2}\,dt = \frac\pi2\sum_{n = 1}^{+\infty}\frac{(-1)^{n-1}}n.$$`,
  decode: { donnees: [R`$\int_0^{+\infty}\frac{dt}{n^2+t^2} = \frac\pi{2n}$.`], but: R`Sommes partielles, domination par le critère spécial.`, cles: {} },
  steps: [
    { t: "La fonction somme", h: R`<p>$\|f_n\|_\infty = \frac1{n^2}$.</p>`, b: R`<p>Avec $f_n(t) = \frac{(-1)^{n-1}}{n^2+t^2}$ : $\|f_n\|_\infty = \frac1{n^2}$, donc $\sum f_n$ converge normalement sur $[0,+\infty[$ et sa somme $S$ est continue.</p>` },
    { t: "Pourquoi les sommes partielles", h: R`<p>$\int|f_n| = \frac\pi{2n}$.</p>`, b: R`<p>$\int_0^{+\infty}|f_n| = \frac\pi{2n}$ : la série diverge, l'intégration terme à terme directe est impossible.</p>` },
    { t: "Domination des sommes partielles", h: R`<p>Critère spécial : $0\leqslant S_n(t)\leqslant\frac1{1+t^2}$.</p>`, b: R`<p>Pour $t$ fixé, $\big(\frac1{n^2+t^2}\big)_n$ décroît vers $0$ : par le critère spécial, les sommes partielles $S_n(t)$ sont comprises entre $0$ et le premier terme :</p>$$0\leqslant S_n(t)\leqslant\frac1{1+t^2} = \varphi(t),$$<p>avec $\varphi$ intégrable sur $[0,+\infty[$.</p>`, rappels: ["ip-csa"] },
    { t: "Conclusion", h: R`<p>Convergence dominée.</p>`, b: R`<p>Par convergence dominée, $\int_0^{+\infty}S_n\to\int_0^{+\infty}S$. Or</p>$$\int_0^{+\infty}S_n(t)\,dt = \sum_{k = 1}^n(-1)^{k-1}\frac\pi{2k}.$$<div class="sbox">$$\int_0^{+\infty}\sum_{n = 1}^{+\infty}\frac{(-1)^{n-1}}{n^2+t^2}\,dt = \frac\pi2\sum_{n = 1}^{+\infty}\frac{(-1)^{n-1}}n = \frac{\pi\ln2}2.$$</div>`, rappels: ["ip-sp", "ip-cvd"] }
  ],
  piege: R`La convergence normale sur $[0,+\infty[$ ne suffit pas à intégrer terme à terme sur un intervalle non borné.`,
  methode: R`Série alternée de fonctions : le critère spécial donne directement une domination des sommes partielles.`
},
{ id: "ipar-84", ...P, level: 3, time: "25 min",
  title: "∫₀^∞ Σ (−1)ⁿ e^{−aₙx} dx = Σ (−1)ⁿ/aₙ (Mines)",
  enonce: R`<p>Soit $(a_n)$ une suite croissante de réels strictement positifs, de limite $+\infty$. Justifier</p>$$\int_0^{+\infty}\Big(\sum_{n = 0}^{+\infty}(-1)^ne^{-a_nx}\Big)dx = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{a_n}.$$`,
  decode: { donnees: [R`$\int_0^{+\infty}e^{-a_nx}dx = \frac1{a_n}$.`], but: R`Critère spécial pour chaque $x>0$, puis sommes partielles et convergence dominée.`, cles: {} },
  steps: [
    { t: "Convergence simple", h: R`<p>$(e^{-a_nx})_n$ décroît vers $0$ pour $x>0$.</p>`, b: R`<p>Soit $x>0$. Comme $(a_n)$ croît vers $+\infty$, la suite $(e^{-a_nx})_n$ décroît et tend vers $0$. Par le critère spécial, la série $\sum(-1)^ne^{-a_nx}$ converge ; notons $S(x)$ sa somme.</p>` },
    { t: "Domination des sommes partielles", h: R`<p>$0\leqslant S_N(x)\leqslant e^{-a_0x}$.</p>`, b: R`<p>Par le critère spécial, les sommes partielles $S_N(x) = \sum_{n = 0}^N(-1)^ne^{-a_nx}$ sont comprises entre $0$ et le premier terme :</p>$$0\leqslant S_N(x)\leqslant e^{-a_0x} = \varphi(x),$$<p>et $\varphi$ est intégrable sur $]0,+\infty[$ car $a_0>0$.</p>`, rappels: ["ip-csa"] },
    { t: "Convergence dominée", h: R`<p>$\int_0^{+\infty}S_N = \sum_{n = 0}^N\frac{(-1)^n}{a_n}$.</p>`, b: R`<p>Les $S_N$ sont continues, convergent simplement vers $S$ sur $]0,+\infty[$, avec la domination ci-dessus. Par convergence dominée :</p>$$\sum_{n = 0}^N\frac{(-1)^n}{a_n} = \int_0^{+\infty}S_N(x)\,dx\xrightarrow[N\to+\infty]{}\int_0^{+\infty}S(x)\,dx.$$<div class="sbox">$$\int_0^{+\infty}\Big(\sum_{n = 0}^{+\infty}(-1)^ne^{-a_nx}\Big)dx = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{a_n}.$$</div><p>(La convergence de la série de droite résulte aussi du critère spécial.)</p>`, rappels: ["ip-sp", "ip-cvd"] }
  ],
  piege: R`Le théorème de convergence dominée demande que la limite $S$ soit continue par morceaux : c'est vrai, car la série converge uniformément sur tout $[\varepsilon,+\infty[$ (reste majoré par $e^{-a_{N+1}\varepsilon}$).`,
  methode: R`Série alternée de fonctions positives décroissantes en $n$ : sommes partielles dominées par le premier terme.`
},
{ id: "ipar-85", ...P, level: 2, time: "25 min",
  title: "∫₀^∞ tᵖ/(eᵗ − 1) dt par télescopage (CCINP)",
  enonce: R`<p>Soit $p\in\mathbb N^*$. Pour $n\in\mathbb N$, on pose $S_n = \displaystyle\int_0^{+\infty}\frac{t^p}{e^t-1}e^{-nt}\,dt$.</p><ol><li>Montrer l'existence de $S_n$.</li><li>Pour $a,b\in\mathbb N^*$, calculer $T(a,b) = \int_0^{+\infty}t^ae^{-bt}\,dt$.</li><li>Montrer que, pour tout $n\in\mathbb N$ : $S_0 = p!\displaystyle\sum_{k = 1}^n\frac1{k^{p+1}}+S_n$.</li><li>Montrer que $(S_n)$ converge vers $0$.</li><li>En déduire $S_0 = p!\displaystyle\sum_{k = 1}^{+\infty}\frac1{k^{p+1}}$.</li></ol>`,
  decode: { donnees: [R`$\frac{e^{-(n-1)t}-e^{-nt}}{e^t-1} = e^{-nt}$.`], but: R`Télescopage exact, puis convergence dominée sur le reste.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>Prolongement en $0$, $o(\frac1{t^2})$ en $+\infty$.</p>`, b: R`<p>L'intégrande est continue sur $]0,+\infty[$, se prolonge par continuité en $0$ (car $p\geqslant1$ et $e^t-1\sim t$) et est négligeable devant $\frac1{t^2}$ en $+\infty$ : $S_n$ existe.</p>` },
    { t: "2) Calcul de T(a, b)", h: R`<p>Parties : $T(a,b) = \frac abT(a-1,b)$.</p>`, b: R`<p>Par parties (crochet nul) : $T(a,b) = \frac abT(a-1,b)$, et $T(0,b) = \frac1b$. Donc</p><div class="sbox">$$T(a,b) = \frac{a!}{b^{a+1}}.$$</div>`, rappels: ["ip-tpe"] },
    { t: "3) Télescopage", h: R`<p>$S_{n-1}-S_n = T(p,n)$.</p>`, b: R`<p>Pour $n\geqslant1$, comme $e^{-(n-1)t}-e^{-nt} = e^{-nt}(e^t-1)$ :</p>$$S_{n-1}-S_n = \int_0^{+\infty}t^pe^{-nt}\,dt = \frac{p!}{n^{p+1}}.$$<p>En sommant de $1$ à $n$ :</p><div class="sbox">$$S_0 = p!\sum_{k = 1}^n\frac1{k^{p+1}}+S_n.$$</div>` },
    { t: "4) Limite de Sₙ", h: R`<p>Domination par l'intégrande de $S_0$.</p>`, b: R`<p>Pour $t>0$, $\frac{t^p}{e^t-1}e^{-nt}\to0$, et l'intégrande est majorée par $\frac{t^p}{e^t-1}$, intégrable. Par convergence dominée : $S_n\to0$.</p>`, rappels: ["ip-cvd"] },
    { t: "5) Conclusion", h: R`<p>Passer à la limite.</p>`, b: R`<div class="sbox">$$\int_0^{+\infty}\frac{t^p}{e^t-1}\,dt = p!\sum_{k = 1}^{+\infty}\frac1{k^{p+1}} = p!\,\zeta(p+1).$$</div><p>On retrouve le résultat obtenu par intégration terme à terme : ici, le reste est contrôlé explicitement.</p>` }
  ],
  piege: R`L'identité de la question 3 est exacte (pas de reste à estimer avant la question 4).`,
  methode: R`Variante de l'intégration terme à terme : sommer un nombre fini de termes et montrer que le reste intégral tend vers $0$.`
}
]);
})();

/* Commando X-ENS · Aller plus loin · Sujet « Théorème de Plancherel ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 18, kind: "probleme", qnav: true, side: true, level: 5, plus: "plan",
  sujet: "Le théorème de Plancherel",
  sujetDesc: "On montre que la transformée de Fourier envoie l'espace de Schwartz sur lui-même et conserve la norme L² (à un facteur √(2π) près), puis on la prolonge par densité et continuité uniforme en une isométrie bijective de L²(ℝ). Application : calcul de ∫ sin²x/x² et de ∫ dx/(1+x²)² sans primitive." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "pl-fub": { t: "Fubini", b: R`$$\iint|h|\lt+\infty\ \Longrightarrow\ \int\Big(\int h(x,y)\,dx\Big)dy = \int\Big(\int h(x,y)\,dy\Big)dx.$$` },
  "pl-inv": { t: "Inversion de Fourier (admise ici)", b: R`$$f,\mathcal Ff\in L^1\ \Longrightarrow\ f(x) = \frac1{2\pi}\int\mathcal Ff(\xi)e^{ix\xi}\,d\xi.$$` },
  "pl-prol": { t: "Prolongement des applications uniformément continues", b: R`$$\overline A = E,\ F\text{ complet},\ f : A\to F\text{ u.c.}\ \Longrightarrow\ \exists!\,\tilde f\in\mathcal C(E,F),\ \tilde f_{|A} = f.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\mathcal S(\mathbb R)$ est l'espace de Schwartz (fonctions $\mathcal C^\infty$ telles que $x^af^{(b)}$ soit bornée pour tous $a,b\in\mathbb N$). Pour $f\in L^1(\mathbb R)$, $\mathcal Ff(\xi) = \int_{\mathbb R}f(x)e^{-ix\xi}\,dx$. On note $\|f\|_2 = \big(\int|f|^2\big)^{1/2}$. On admet : $\mathcal S(\mathbb R)$ est dense dans $L^2(\mathbb R)$, et $L^2(\mathbb R)$ est complet.</p>`;

const figSinc = GRAPH({ w: 460, h: 240, x: [-12, 12], y: [-0.6, 2.2], xt: [-10, -5, 5, 10], yt: [1, 2], xl: "ξ", curves: [{ f: x => Math.abs(x) < 1e-9 ? 2 : 2 * Math.sin(x) / x, c: "b", lab: [3.2, 1.3, "𝓕f = 2 sin ξ / ξ"] }, { f: x => Math.abs(x) < 1e-9 ? 4 / (2 * Math.PI) : 4 * Math.sin(x) ** 2 / (x * x) / (2 * Math.PI), c: "r", dash: true, lab: [-11.5, 0.9, "|𝓕f|² / 2π"] }] }, R`Pour $f = \mathbf 1_{[-1,1]}$, $\mathcal Ff(\xi) = \frac{2\sin\xi}\xi$ n'est pas intégrable (décroissance en $\frac1\xi$), mais est de carré intégrable. Plancherel : l'aire sous la courbe rouge vaut $\|f\|_2^2 = 2$.`, "Transformée de l'indicatrice");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "plan-1", ...P, part: "Partie I", time: "35 min",
  title: "Fourier préserve l'espace de Schwartz",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $f\in\mathcal S(\mathbb R)$.</p><ol start="1">
<li>Montrer que $\mathcal Ff$ est $\mathcal C^\infty$ et que $(\mathcal Ff)^{(k)}(\xi) = \int(-ix)^kf(x)e^{-ix\xi}\,dx$.</li>
<li>Montrer que $(i\xi)^a(\mathcal Ff)^{(k)}(\xi) = \mathcal F\big(g^{(a)}\big)(\xi)$ avec $g(x) = (-ix)^kf(x)$, puis que $\mathcal Ff\in\mathcal S(\mathbb R)$.</li>
<li>Montrer que $\mathcal F$ est une bijection de $\mathcal S(\mathbb R)$ sur lui-même, d'inverse $\varphi\mapsto\frac1{2\pi}\overline{\mathcal F\bar\varphi}$.</li></ol>`,
  decode: { donnees: [R`$f\in\mathcal S$ : toutes les $x^af^{(b)}$ sont bornées, donc intégrables après multiplication par $\frac1{1+x^2}$.`], but: R`Échanger régularité et décroissance : dériver $\mathcal Ff$ correspond à multiplier $f$ par $-ix$, multiplier $\mathcal Ff$ par $i\xi$ correspond à dériver $f$.`, cles: {} },
  steps: [
    Q(1, "Régularité", R`<p>Domination de $\partial_\xi^k\big(f(x)e^{-ix\xi}\big)$ par $|x|^k|f(x)|$, intégrable.</p>`, R`<p>$h(\xi,x) = f(x)e^{-ix\xi}$ a pour dérivées $\partial_\xi^kh = (-ix)^kf(x)e^{-ix\xi}$, continues, de module $|x|^k|f(x)|\leqslant\frac{C_k}{1+x^2}$ (car $(1+x^2)|x|^kf$ est bornée), intégrable indépendamment de $\xi$. Par dérivation sous l'intégrale (récurrence sur $k$) :</p><div class="sbox">$$\mathcal Ff\in\mathcal C^\infty,\qquad(\mathcal Ff)^{(k)}(\xi) = \int(-ix)^kf(x)e^{-ix\xi}\,dx = \mathcal F\big((-ix)^kf\big)(\xi).$$</div>`),
    Q(2, "Décroissance", R`<p>Intégrations par parties : $\mathcal F(g') = i\xi\,\mathcal Fg$ pour $g\in\mathcal S$.</p>`, R`<p>Pour $g\in\mathcal S$, par parties ($g\to0$ à l'infini) :</p>$$\mathcal F(g')(\xi) = \big[g(x)e^{-ix\xi}\big]_{-\infty}^{+\infty}+i\xi\int g(x)e^{-ix\xi}\,dx = i\xi\,\mathcal Fg(\xi).$$<p>Par récurrence, $\mathcal F(g^{(a)}) = (i\xi)^a\mathcal Fg$. Avec $g = (-ix)^kf\in\mathcal S$ et Q1 :</p>$$(i\xi)^a(\mathcal Ff)^{(k)}(\xi) = (i\xi)^a\mathcal Fg(\xi) = \mathcal F(g^{(a)})(\xi),$$<p>et $|\mathcal F(g^{(a)})(\xi)|\leqslant\int|g^{(a)}|\lt+\infty$ ($g^{(a)}\in\mathcal S\subset L^1$). Donc $\xi^a(\mathcal Ff)^{(k)}$ est bornée pour tous $a,k$ :</p><div class="sbox">$$\mathcal F(\mathcal S(\mathbb R))\subset\mathcal S(\mathbb R).$$</div>`),
    Q(3, "Bijection", R`<p>Inversion de Fourier, applicable car $f$ et $\mathcal Ff$ sont dans $L^1$.</p>`, R`<p>Soit $\tilde{\mathcal F}\varphi(x) = \int\varphi(\xi)e^{ix\xi}\,d\xi = \overline{\mathcal F\bar\varphi(x)}$ ; le même raisonnement montre $\tilde{\mathcal F}(\mathcal S)\subset\mathcal S$. Pour $f\in\mathcal S$, $f$ et $\mathcal Ff$ sont intégrables et continues, donc par inversion $f = \frac1{2\pi}\tilde{\mathcal F}\mathcal Ff$. Symétriquement $\varphi = \frac1{2\pi}\mathcal F\tilde{\mathcal F}\varphi$. Donc $\mathcal F$ est bijective sur $\mathcal S$, d'inverse $\frac1{2\pi}\tilde{\mathcal F}$.</p>`, ["pl-inv"])
  ],
  piege: R`Sur $L^1$, $\mathcal F$ n'est pas surjective sur $L^1$ ($\mathcal Ff$ peut ne pas être intégrable : voir l'indicatrice). L'espace de Schwartz est le bon cadre où $\mathcal F$ est une bijection.`,
  methode: R`Dualité régularité / décroissance : $\mathcal F(-ixf) = (\mathcal Ff)'$ et $\mathcal F(f') = i\xi\,\mathcal Ff$. Une fonction lisse et rapidement décroissante a une transformée de même nature.`
},

/* ===================== Partie II ===================== */
{ id: "plan-2", ...P, part: "Partie II", time: "30 min",
  title: "L'égalité de Parseval sur 𝒮",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que pour $f,g\in\mathcal S(\mathbb R)$ : $\int f\,\mathcal Fg = \int\mathcal Ff\,g$.</li>
<li>En prenant $g = \overline{\mathcal Ff}$ convenablement, montrer que $\|\mathcal Ff\|_2^2 = 2\pi\|f\|_2^2$ pour $f\in\mathcal S$.</li>
<li>Vérifier sur $f(x) = e^{-x^2/2}$, dont on admet $\mathcal Ff(\xi) = \sqrt{2\pi}e^{-\xi^2/2}$.</li></ol>`,
  decode: { donnees: [R`Partie I.`], but: R`Échanger les intégrales par Fubini, puis utiliser l'inversion.`, cles: {} },
  steps: [
    Q(4, "Formule d'échange", R`<p>$h(x,y) = f(x)g(y)e^{-ixy}$, $|h| = |f(x)||g(y)|$ intégrable sur $\mathbb R^2$.</p>`, R`<p>$|h(x,y)| = |f(x)|\,|g(y)|$ est intégrable sur $\mathbb R^2$ (Tonelli : produit de deux fonctions intégrables). Par Fubini :</p>$$\int f(x)\Big(\int g(y)e^{-ixy}dy\Big)dx = \int g(y)\Big(\int f(x)e^{-ixy}dx\Big)dy,$$<div class="sbox">$$\int f\,\mathcal Fg = \int\mathcal Ff\,g.$$</div>`, ["pl-fub"]),
    Q(5, "Conservation de la norme", R`<p>Prends $g$ telle que $\mathcal Fg = \bar f$ : $g = \frac1{2\pi}\overline{\mathcal Ff}$.</p>`, R`<p>Posons $g = \frac1{2\pi}\overline{\mathcal Ff}\in\mathcal S$. Alors $\mathcal Fg(x) = \frac1{2\pi}\int\overline{\mathcal Ff(\xi)}e^{-ix\xi}d\xi = \overline{\frac1{2\pi}\int\mathcal Ff(\xi)e^{ix\xi}d\xi} = \overline{f(x)}$ (inversion). Par Q4 :</p>$$\int f\bar f = \int\mathcal Ff\cdot\frac1{2\pi}\overline{\mathcal Ff},\qquad\text{soit}\qquad\|f\|_2^2 = \frac1{2\pi}\|\mathcal Ff\|_2^2.$$<div class="sbox"><p>$\mathcal P = \frac1{\sqrt{2\pi}}\mathcal F$ conserve la norme $L^2$ sur $\mathcal S(\mathbb R)$.</p></div>`, ["pl-inv"]),
    Q(6, "La gaussienne", R`<p>$\int e^{-x^2} = \sqrt\pi$.</p>`, R`<p>$\|f\|_2^2 = \int e^{-x^2}dx = \sqrt\pi$ et $\|\mathcal Ff\|_2^2 = 2\pi\int e^{-\xi^2}d\xi = 2\pi\sqrt\pi$. On a bien $\|\mathcal Ff\|_2^2 = 2\pi\|f\|_2^2$. ✓ (La gaussienne normalisée $\frac{e^{-x^2/2}}{(2\pi)^{1/4}}$ est un point fixe de $\mathcal P$.)</p>`)
  ],
  piege: R`Le facteur $2\pi$ dépend de la convention : avec $\hat f(\xi) = \int f(x)e^{-2i\pi x\xi}dx$, la transformée est directement une isométrie. Toujours vérifier sur la gaussienne.`,
  methode: R`Pour comparer $\int|\mathcal Ff|^2$ et $\int|f|^2$ : formule d'échange $\int f\,\mathcal Fg = \int\mathcal Ff\,g$ (Fubini), appliquée avec $\mathcal Fg = \bar f$.`
},

/* ===================== Partie III ===================== */
{ id: "plan-3", ...P, part: "Partie III", time: "35 min",
  title: "Le prolongement à L² et deux intégrales",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Montrer que $\mathcal P = \frac1{\sqrt{2\pi}}\mathcal F : \mathcal S(\mathbb R)\to L^2(\mathbb R)$ se prolonge de façon unique en une application linéaire continue $\mathcal P : L^2(\mathbb R)\to L^2(\mathbb R)$, et que ce prolongement est une isométrie.</li>
<li>Montrer que $\mathcal P(L^2)$ est fermé et contient $\mathcal S$, et conclure que $\mathcal P$ est une isométrie bijective de $L^2(\mathbb R)$ (<b>théorème de Plancherel</b>).</li>
<li>On admet que pour $f\in L^1\cap L^2$, $\mathcal Pf = \frac1{\sqrt{2\pi}}\mathcal Ff$. Avec $f = \mathbf 1_{[-1,1]}$, montrer que $\int_{\mathbb R}\frac{\sin^2x}{x^2}\,dx = \pi$.</li>
<li>Avec $f(x) = e^{-|x|}$, calculer $\int_{\mathbb R}\frac{dx}{(1+x^2)^2}$.</li></ol>`,
  decode: { donnees: [R`$\|\mathcal Pf\|_2 = \|f\|_2$ sur $\mathcal S$ dense ; $L^2$ complet.`], but: R`Prolonger une isométrie définie sur une partie dense.`, cles: {} },
  steps: [
    Q(7, "Prolongement isométrique", R`<p>Linéaire et isométrique, donc $1$-lipschitzienne, donc uniformément continue.</p>`, R`<p>$\mathcal P$ est linéaire et $\|\mathcal Pf-\mathcal Pg\|_2 = \|f-g\|_2$ : elle est $1$-lipschitzienne, donc uniformément continue sur $\mathcal S$, dense dans $L^2$, à valeurs dans $L^2$ complet. Elle se prolonge de façon unique en $\mathcal P : L^2\to L^2$ continue. Pour $f\in L^2$, soit $f_n\in\mathcal S$ avec $f_n\to f$ : $\mathcal Pf_n\to\mathcal Pf$ et $\|\mathcal Pf_n\|_2 = \|f_n\|_2\to\|f\|_2$, donc $\|\mathcal Pf\|_2 = \|f\|_2$. La linéarité passe à la limite de même.</p>`, ["pl-prol"]),
    Q(8, "Surjectivité", R`<p>Image fermée : une suite $\mathcal Pf_n$ de Cauchy donne $f_n$ de Cauchy. Image dense : elle contient $\mathcal S$ (Partie I).</p>`, R`<p><b>Fermée.</b> Si $\mathcal Pf_n\to h$, $(\mathcal Pf_n)$ est de Cauchy, donc $(f_n)$ aussi (isométrie), et converge vers $f\in L^2$ (complétude). Par continuité, $\mathcal Pf_n\to\mathcal Pf$, donc $h = \mathcal Pf\in\mathcal P(L^2)$.</p><p><b>Dense.</b> Pour $\varphi\in\mathcal S$, il existe $g\in\mathcal S$ avec $\mathcal Fg = \sqrt{2\pi}\varphi$ (Q3), donc $\varphi = \mathcal Pg$ : $\mathcal S\subset\mathcal P(L^2)$, qui est dense.</p><p>Fermée et dense : $\mathcal P(L^2) = L^2$. Une isométrie est injective.</p><div class="sbox"><p>$\mathcal P$ est une isométrie bijective de $L^2(\mathbb R)$ sur lui-même : $\|\mathcal Pf\|_2 = \|f\|_2$.</p></div>`),
    Q(9, "L'intégrale de sin²x/x²", R`<p>$\mathcal F\mathbf 1_{[-1,1]}(\xi) = \frac{2\sin\xi}\xi$, et $\|f\|_2^2 = 2$.</p>`, R`<p>$\mathcal Ff(\xi) = \int_{-1}^1e^{-ix\xi}dx = \frac{e^{i\xi}-e^{-i\xi}}{i\xi} = \frac{2\sin\xi}\xi$. Plancherel : $\|f\|_2^2 = \frac1{2\pi}\|\mathcal Ff\|_2^2$, soit</p>$$2 = \frac1{2\pi}\int\frac{4\sin^2\xi}{\xi^2}d\xi\qquad\Longrightarrow\qquad\int_{\mathbb R}\frac{\sin^2\xi}{\xi^2}\,d\xi = \pi.$$${figSinc}`),
    Q(10, "L'intégrale de 1/(1+x²)²", R`<p>$\mathcal F(e^{-|x|})(\xi) = \frac2{1+\xi^2}$ et $\int e^{-2|x|} = 1$.</p>`, R`<p>$\mathcal Ff(\xi) = \int_0^{+\infty}e^{-x(1+i\xi)}dx+\int_0^{+\infty}e^{-x(1-i\xi)}dx = \frac1{1+i\xi}+\frac1{1-i\xi} = \frac2{1+\xi^2}$. Et $\|f\|_2^2 = \int e^{-2|x|}dx = 1$. Plancherel :</p>$$1 = \frac1{2\pi}\int\frac4{(1+\xi^2)^2}d\xi\qquad\Longrightarrow\qquad\int_{\mathbb R}\frac{d\xi}{(1+\xi^2)^2} = \frac\pi2.$$<p>(Vérification par $\xi = \tan\theta$ : $\int_{-\pi/2}^{\pi/2}\cos^2\theta\,d\theta = \frac\pi2$. ✓)</p>`)
  ],
  piege: R`Pour $f\in L^2\setminus L^1$, l'intégrale $\int f(x)e^{-ix\xi}dx$ n'a pas de sens en général : $\mathcal Pf$ est défini comme une limite dans $L^2$ (par exemple de $\frac1{\sqrt{2\pi}}\int_{-A}^Af(x)e^{-ix\xi}dx$), pas par une formule ponctuelle.`,
  methode: R`Prolonger une application : la définir sur un sous-espace dense où elle est simple, montrer qu'elle est uniformément continue (ici isométrique), puis prolonger par densité et complétude.`
}
]);
})();

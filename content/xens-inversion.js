/* Commando X-ENS · Aller plus loin · Sujet « Inversion de Fourier des fonctions de Schwartz ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 18, kind: "probleme", qnav: true, side: true, level: 4, plus: "invf",
  sujet: "La formule d'inversion de Fourier",
  sujetDesc: "On calcule la transformée de Fourier des gaussiennes par une équation différentielle, on montre que les gaussiennes renormalisées forment une approximation de l'identité, puis on en déduit la formule d'inversion f(x) = (1/2π)∫ 𝓕f(ξ) e^{ixξ} dξ pour les fonctions de Schwartz, en dimension 1 puis d. Applications : injectivité de 𝓕, 𝓕∘𝓕, et deux intégrales classiques." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "iv-dom": { t: "Convergence dominée", b: R`$$h_\varepsilon\xrightarrow[\varepsilon\to0]{}h\text{ p.p.},\ |h_\varepsilon|\leqslant g\in L^1\ \Longrightarrow\ \int h_\varepsilon\to\int h.$$` },
  "iv-fub": { t: "Fubini et formule d'échange", b: R`<div class="sbox">$$f,g\in L^1(\mathbb R)\ \Longrightarrow\ \int_{\mathbb R}f\,\mathcal Fg = \int_{\mathbb R}\mathcal Ff\,g.$$</div><p>Fubini : $(x,\xi)\mapsto|f(x)g(\xi)|$ intégrable sur $\mathbb R^2$.</p>` },
  "iv-gauss": { t: "Intégrale de Gauss", b: R`<p>$\int_{\mathbb R}e^{-x^2}dx = \sqrt\pi$, donc $\int_{\mathbb R}e^{-\varepsilon x^2}dx = \sqrt{\pi/\varepsilon}$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\mathcal S(\mathbb R)$ est l'espace de Schwartz. Pour $f\in L^1(\mathbb R)$, $\mathcal Ff(\xi) = \int f(x)e^{-ix\xi}dx$ et $\tilde{\mathcal F}f(x) = \int f(\xi)e^{ix\xi}d\xi$. On admet que $\mathcal F$ et $\tilde{\mathcal F}$ envoient $\mathcal S(\mathbb R)$ dans lui-même. Pour $\varepsilon>0$, $G_\varepsilon(x) = e^{-\varepsilon x^2}$. Le but est de montrer $\tilde{\mathcal F}\mathcal Ff = 2\pi f$ pour $f\in\mathcal S(\mathbb R)$.</p>`;

const figNoy = GRAPH({ w: 440, h: 240, x: [-3, 3], y: [-0.1, 2.9], xt: [-2, -1, 1, 2], yt: [1, 2], xl: "x", curves: [1, 0.25, 0.04].map((e, k) => ({ f: x => Math.exp(-x * x / (4 * e)) / Math.sqrt(4 * Math.PI * e), c: ["b", "r", "g"][k], lab: [[1.3, 0.35, "ε = 1"], [0.6, 0.9, "ε = 1/4"], [0.25, 2.5, "ε = 1/25"]][k] })) }, R`Les noyaux $\frac1{2\pi}\mathcal F(G_\varepsilon)(x) = \frac1{\sqrt{4\pi\varepsilon}}e^{-x^2/4\varepsilon}$ : positifs, d'intégrale $1$, de plus en plus concentrés en $0$ quand $\varepsilon\to0$. Ils « tendent vers $\delta$ » : c'est une approximation de l'identité.`, "Approximation de l'identité");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "invf-1", ...P, part: "Partie I", time: "30 min",
  title: "La transformée des gaussiennes",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $\varphi = \mathcal F(G_\varepsilon)$ est dérivable, et, par une intégration par parties, que $\varphi'(\xi) = -\frac\xi{2\varepsilon}\varphi(\xi)$.</li>
<li>En déduire $\mathcal F(G_\varepsilon)(\xi) = \sqrt{\dfrac\pi\varepsilon}\,e^{-\xi^2/4\varepsilon}$, et en particulier $\mathcal F\big(e^{-x^2/2}\big) = \sqrt{2\pi}e^{-\xi^2/2}$.</li>
<li>Montrer que $k_\varepsilon = \frac1{2\pi}\mathcal F(G_\varepsilon)$ est positive, d'intégrale $1$, et que pour tout $\eta>0$, $\int_{|x|>\eta}k_\varepsilon\to0$ quand $\varepsilon\to0$.</li></ol>`,
  decode: { donnees: [R`Dérivation sous l'intégrale ; intégrale de Gauss.`], but: R`Résoudre une équation différentielle pour la transformée d'une gaussienne.`, cles: {} },
  steps: [
    Q(1, "Une équation différentielle", R`<p>$\varphi'(\xi) = \int(-ix)e^{-\varepsilon x^2}e^{-ix\xi}dx$ ; $-ixe^{-\varepsilon x^2} = \frac i{2\varepsilon}\big(e^{-\varepsilon x^2}\big)'$.</p>`, R`<p>La dérivée en $\xi$ de l'intégrande est $-ixe^{-\varepsilon x^2}e^{-ix\xi}$, dominée par $|x|e^{-\varepsilon x^2}$, intégrable : $\varphi$ est dérivable et</p>$$\varphi'(\xi) = \int-ixe^{-\varepsilon x^2}e^{-ix\xi}dx = \frac i{2\varepsilon}\int\big(e^{-\varepsilon x^2}\big)'e^{-ix\xi}dx.$$<p>Par parties (le crochet est nul) : $\int\big(e^{-\varepsilon x^2}\big)'e^{-ix\xi}dx = i\xi\int e^{-\varepsilon x^2}e^{-ix\xi}dx = i\xi\varphi(\xi)$. Donc</p><div class="sbox">$$\varphi'(\xi) = \frac i{2\varepsilon}\cdot i\xi\varphi(\xi) = -\frac\xi{2\varepsilon}\varphi(\xi).$$</div>`, ["iv-dom"]),
    Q(2, "La formule", R`<p>$\varphi(\xi) = \varphi(0)e^{-\xi^2/4\varepsilon}$ et $\varphi(0) = \int e^{-\varepsilon x^2}$.</p>`, R`<p>La solution de $\varphi' = -\frac\xi{2\varepsilon}\varphi$ est $\varphi(\xi) = \varphi(0)e^{-\xi^2/4\varepsilon}$, et $\varphi(0) = \int e^{-\varepsilon x^2}dx = \sqrt{\pi/\varepsilon}$ :</p><div class="sbox">$$\mathcal F(G_\varepsilon)(\xi) = \sqrt{\frac\pi\varepsilon}\,e^{-\xi^2/4\varepsilon}.$$</div><p>Avec $\varepsilon = \frac12$ : $\mathcal F(e^{-x^2/2}) = \sqrt{2\pi}e^{-\xi^2/2}$ : la gaussienne est (à un facteur près) sa propre transformée.</p>`, ["iv-gauss"]),
    Q(3, "Un noyau qui se concentre", R`<p>$k_\varepsilon(x) = \frac1{\sqrt{4\pi\varepsilon}}e^{-x^2/4\varepsilon}$. Changement de variable $x = 2\sqrt\varepsilon u$.</p>`, R`<p>$k_\varepsilon(x) = \frac1{2\pi}\sqrt{\frac\pi\varepsilon}e^{-x^2/4\varepsilon} = \frac1{\sqrt{4\pi\varepsilon}}e^{-x^2/4\varepsilon}>0$. Avec $x = 2\sqrt\varepsilon u$ :</p>$$\int k_\varepsilon = \frac1{\sqrt{4\pi\varepsilon}}\int e^{-u^2}2\sqrt\varepsilon\,du = \frac{2\sqrt\varepsilon\sqrt\pi}{2\sqrt{\pi\varepsilon}} = 1,$$$$\int_{|x|>\eta}k_\varepsilon = \frac1{\sqrt\pi}\int_{|u|>\eta/2\sqrt\varepsilon}e^{-u^2}du\to0.$$${figNoy}`, ["iv-gauss"])
  ],
  piege: R`Le facteur $\frac1{2\pi}$ et l'exposant $\frac{\xi^2}{4\varepsilon}$ dépendent de la convention $e^{-ix\xi}$. Avec $e^{-2i\pi x\xi}$, $e^{-\pi x^2}$ est exactement invariante.`,
  methode: R`Transformée d'une gaussienne : dériver sous l'intégrale, intégrer par parties, résoudre $y' = -\frac\xi{2\varepsilon}y$.`
},

/* ===================== Partie II ===================== */
{ id: "invf-2", ...P, part: "Partie II", time: "35 min",
  title: "La formule d'inversion",
  enonce: PRE + R`<p><b>Partie II.</b> Soit $f\in\mathcal S(\mathbb R)$ et $x\in\mathbb R$.</p><ol start="4">
<li>Montrer que $I_\varepsilon(x) := \int\mathcal Ff(\xi)G_\varepsilon(\xi)e^{ix\xi}d\xi\to\tilde{\mathcal F}\mathcal Ff(x)$ quand $\varepsilon\to0$.</li>
<li>Par Fubini, montrer que $I_\varepsilon(x) = \int f(y)\,\mathcal F(G_\varepsilon)(y-x)\,dy = 2\pi\int f(x+t)k_\varepsilon(t)\,dt$.</li>
<li>Montrer que $\int f(x+t)k_\varepsilon(t)dt\to f(x)$. Conclure : $\tilde{\mathcal F}\mathcal Ff = 2\pi f$, et de même $\mathcal F\tilde{\mathcal F}f = 2\pi f$.</li></ol>`,
  decode: { donnees: [R`Partie I : $k_\varepsilon$ approximation de l'identité.`], but: R`Introduire le facteur de convergence $G_\varepsilon$, échanger les intégrales, puis faire tendre $\varepsilon\to0$.`, cles: {} },
  steps: [
    Q(4, "Le facteur de convergence", R`<p>$|\mathcal Ff(\xi)G_\varepsilon(\xi)e^{ix\xi}|\leqslant|\mathcal Ff(\xi)|$, intégrable.</p>`, R`<p>$G_\varepsilon(\xi)\to1$ pour tout $\xi$, et $|\mathcal Ff(\xi)G_\varepsilon(\xi)e^{ix\xi}|\leqslant|\mathcal Ff(\xi)|$, intégrable ($\mathcal Ff\in\mathcal S$). Par convergence dominée, $I_\varepsilon(x)\to\int\mathcal Ff(\xi)e^{ix\xi}d\xi = \tilde{\mathcal F}\mathcal Ff(x)$.</p>`, ["iv-dom"]),
    Q(5, "Échange des intégrales", R`<p>$\mathcal Ff(\xi) = \int f(y)e^{-iy\xi}dy$ ; $|f(y)G_\varepsilon(\xi)|$ intégrable sur $\mathbb R^2$.</p>`, R`<p>$$I_\varepsilon(x) = \int\Big(\int f(y)e^{-iy\xi}dy\Big)e^{-\varepsilon\xi^2}e^{ix\xi}d\xi.$$ L'intégrande a pour module $|f(y)|e^{-\varepsilon\xi^2}$, intégrable sur $\mathbb R^2$. Par Fubini :</p>$$I_\varepsilon(x) = \int f(y)\Big(\int e^{-\varepsilon\xi^2}e^{-i(y-x)\xi}d\xi\Big)dy = \int f(y)\,\mathcal F(G_\varepsilon)(y-x)\,dy.$$<p>Avec $y = x+t$ et $\mathcal F(G_\varepsilon) = 2\pi k_\varepsilon$ : $I_\varepsilon(x) = 2\pi\int f(x+t)k_\varepsilon(t)\,dt$.</p>`, ["iv-fub"]),
    Q(6, "Passage à la limite", R`<p>$\int f(x+t)k_\varepsilon(t)dt-f(x) = \int\big(f(x+t)-f(x)\big)k_\varepsilon(t)dt$ ; coupe en $|t|\leqslant\eta$ et $|t|>\eta$.</p>`, R`<p>Comme $\int k_\varepsilon = 1$ et $k_\varepsilon\geqslant0$ :</p>$$\Big|\int f(x+t)k_\varepsilon(t)dt-f(x)\Big|\leqslant\int_{|t|\leqslant\eta}|f(x+t)-f(x)|k_\varepsilon+\int_{|t|>\eta}2\|f\|_\infty k_\varepsilon.$$<p>Soit $\alpha>0$. Par continuité de $f$ en $x$, on choisit $\eta$ avec $|f(x+t)-f(x)|\leqslant\alpha$ pour $|t|\leqslant\eta$ : le premier terme est $\leqslant\alpha$. Le second tend vers $0$ (Q3). Donc la limite supérieure est $\leqslant\alpha$, pour tout $\alpha$ : la limite est $0$.</p><p>Avec Q4 et Q5 : $\tilde{\mathcal F}\mathcal Ff(x) = \lim I_\varepsilon(x) = 2\pi f(x)$. Le même calcul avec $e^{-ix\xi}$ et $e^{ix\xi}$ échangés donne $\mathcal F\tilde{\mathcal F}f = 2\pi f$.</p><div class="sbox">$$f(x) = \frac1{2\pi}\int_{\mathbb R}\mathcal Ff(\xi)e^{ix\xi}d\xi\qquad(f\in\mathcal S(\mathbb R)).$$</div>`)
  ],
  piege: R`On ne peut pas écrire directement $\tilde{\mathcal F}\mathcal Ff(x) = \iint f(y)e^{i(x-y)\xi}dy\,d\xi$ puis échanger : la fonction $(y,\xi)\mapsto f(y)e^{i(x-y)\xi}$ n'est pas intégrable sur $\mathbb R^2$ (pas de décroissance en $\xi$). Le facteur $G_\varepsilon$ est là pour rendre Fubini légitime.`,
  methode: R`Approximation de l'identité : $\int f(x+t)k_\varepsilon(t)dt\to f(x)$ si $k_\varepsilon\geqslant0$, $\int k_\varepsilon = 1$ et la masse se concentre en $0$. On coupe en un petit voisinage (continuité) et le reste (masse qui tend vers $0$).`
},

/* ===================== Partie III ===================== */
{ id: "invf-3", ...P, part: "Partie III", time: "30 min",
  title: "Conséquences",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Montrer que $\mathcal F$ est une bijection de $\mathcal S(\mathbb R)$, d'inverse $\frac1{2\pi}\tilde{\mathcal F}$, et que $\mathcal F\mathcal Ff(x) = 2\pi f(-x)$. Quel est l'ordre de $\mathcal F$ (à un scalaire près) ?</li>
<li>(<b>Dimension $d$</b>) Pour $f\in\mathcal S(\mathbb R^d)$ et $\mathcal Ff(\xi) = \int_{\mathbb R^d}f(x)e^{-ix\cdot\xi}dx$, montrer que $\mathcal F\big(e^{-\varepsilon\|x\|^2}\big) = (\pi/\varepsilon)^{d/2}e^{-\|\xi\|^2/4\varepsilon}$, et en déduire $\tilde{\mathcal F}\mathcal F = (2\pi)^d\operatorname{Id}$.</li>
<li>On admet que la formule d'inversion vaut aussi pour $f$ continue, intégrable, avec $\mathcal Ff$ intégrable. Avec $f(x) = e^{-|x|}$, calculer $\mathcal Ff$ et en déduire $\displaystyle\int_{\mathbb R}\frac{\cos(x\xi)}{1+\xi^2}d\xi = \pi e^{-|x|}$.</li></ol>`,
  decode: { donnees: [R`$\tilde{\mathcal F}\mathcal F = \mathcal F\tilde{\mathcal F} = 2\pi\operatorname{Id}$ sur $\mathcal S$.`], but: R`Exploiter l'inversion : bijectivité, symétries, calculs d'intégrales.`, cles: {} },
  steps: [
    Q(7, "Bijection et ordre 4", R`<p>$\tilde{\mathcal F}f(x) = \mathcal Ff(-x)$.</p>`, R`<p>$\frac1{2\pi}\tilde{\mathcal F}$ est un inverse à gauche et à droite de $\mathcal F$ sur $\mathcal S$ : bijection. Comme $\tilde{\mathcal F}g(x) = \mathcal Fg(-x)$, $2\pi f(x) = \tilde{\mathcal F}\mathcal Ff(x) = \mathcal F\mathcal Ff(-x)$, soit $\mathcal F^2f = 2\pi\check f$ avec $\check f(x) = f(-x)$. Donc $\mathcal F^4 = 4\pi^2\operatorname{Id}$ : $\frac1{\sqrt{2\pi}}\mathcal F$ est d'ordre $4$, ses valeurs propres sont dans $\{1,-1,i,-i\}$ (la gaussienne $e^{-x^2/2}$ est vecteur propre pour $1$).</p>`),
    Q(8, "Dimension d", R`<p>$e^{-\varepsilon\|x\|^2}e^{-ix\cdot\xi} = \prod_k e^{-\varepsilon x_k^2}e^{-ix_k\xi_k}$ : Fubini.</p>`, R`<p>L'intégrande se factorise et Fubini donne $\mathcal F(e^{-\varepsilon\|x\|^2})(\xi) = \prod_{k=1}^d\sqrt{\pi/\varepsilon}e^{-\xi_k^2/4\varepsilon} = (\pi/\varepsilon)^{d/2}e^{-\|\xi\|^2/4\varepsilon}$. Le noyau $k_\varepsilon = (2\pi)^{-d}\mathcal F(G_\varepsilon) = (4\pi\varepsilon)^{-d/2}e^{-\|t\|^2/4\varepsilon}$ est positif, d'intégrale $1$, et se concentre en $0$ ; la preuve de la Partie II s'adapte mot pour mot :</p><div class="sbox">$$\tilde{\mathcal F}\mathcal F = \mathcal F\tilde{\mathcal F} = (2\pi)^d\operatorname{Id}_{\mathcal S(\mathbb R^d)}.$$</div>`),
    Q(9, "Une intégrale", R`<p>$\mathcal F(e^{-|x|})(\xi) = \frac2{1+\xi^2}$, intégrable.</p>`, R`<p>$\mathcal Ff(\xi) = \int_0^{+\infty}e^{-x(1+i\xi)}dx+\int_0^{+\infty}e^{-x(1-i\xi)}dx = \frac1{1+i\xi}+\frac1{1-i\xi} = \frac2{1+\xi^2}$, intégrable. $f$ est continue et intégrable : par inversion,</p>$$e^{-|x|} = \frac1{2\pi}\int\frac2{1+\xi^2}e^{ix\xi}d\xi = \frac1\pi\int\frac{\cos(x\xi)}{1+\xi^2}d\xi$$<p>(la partie impaire $\sin(x\xi)$ s'intègre en $0$).</p><div class="sbox">$$\int_{\mathbb R}\frac{\cos(x\xi)}{1+\xi^2}d\xi = \pi e^{-|x|}.$$</div><p>On retrouve sans résidus le calcul qui donne la solution fondamentale de $y''-y = \delta$.</p>`)
  ],
  piege: R`$e^{-|x|}$ n'est pas dans $\mathcal S(\mathbb R)$ (pas dérivable en $0$) : il faut la version $L^1$ de l'inversion, admise ici. La conclusion reste vraie car $f$ est continue et $\mathcal Ff$ intégrable.`,
  methode: R`Inversion de Fourier : introduire un facteur gaussien, échanger les intégrales, reconnaître une approximation de l'identité.`
}
]);
})();

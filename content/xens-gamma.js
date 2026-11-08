/* Commando X-ENS · Aller plus loin · Sujet « Fonction caractéristique et moments de la loi Gamma ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 14, kind: "probleme", qnav: true, side: true, level: 4, plus: "gam",
  sujet: "La loi Gamma : fonction caractéristique et moments",
  sujetDesc: "La loi Γ(a, λ) a pour densité λ^a x^{a−1} e^{−λx}/Γ(a) sur ℝ₊*. Sa transformée de Laplace ψ(z) = E[e^{zX}] est holomorphe sur Re z < λ et vaut (λ/(λ − z))^a sur la demi-droite réelle ; par prolongement analytique, φ(t) = (λ/(λ − it))^a. On en déduit les moments a(a+1)⋯(a+n−1)/λⁿ, la stabilité par somme, le lien avec les lois exponentielle et du χ², et une méthode de simulation." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "gm-holo": { t: "Holomorphie sous l'intégrale", b: R`$$h(\cdot,x)\text{ holomorphe},\ |h(z,x)|\leqslant k(x),\ k\in L^1\ \Longrightarrow\ z\mapsto\int h(z,x)\,dx\text{ holomorphe}.$$` },
  "gm-zi": { t: "Prolongement analytique", b: R`$$f,g\text{ holomorphes sur }U\text{ connexe},\ f = g\text{ sur }A,\ A'\cap U\neq\varnothing\ \Longrightarrow\ f = g\text{ sur }U.$$` },
  "gm-cf": { t: "Fonction caractéristique", b: R`$$\varphi_X(t) = \mathbb E[e^{itX}];\qquad X\perp\!\!\!\perp Y\Rightarrow\varphi_{X+Y} = \varphi_X\varphi_Y;\qquad\mathbb E[X^n] = i^{-n}\varphi_X^{(n)}(0).$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Pour $a>0$, $\Gamma(a) = \int_0^{+\infty}x^{a-1}e^{-x}dx$. Pour $a,\lambda>0$, la loi $\Gamma(a,\lambda)$ a pour densité $\gamma_{a,\lambda}(x) = \frac{\lambda^a}{\Gamma(a)}x^{a-1}e^{-\lambda x}$ sur $]0,+\infty[$. On note $D_\lambda = \{z\in\mathbb C : \mathrm{Re}\,z\lt\lambda\}$ et, pour $z\in D_\lambda$, $\big(\frac\lambda{\lambda-z}\big)^a = \exp\big(-a\,\mathrm{Log}(1-\frac z\lambda)\big)$, où $\mathrm{Log}$ est la détermination principale du logarithme (définie et holomorphe sur $\{\mathrm{Re}\,w>0\}$).</p>`;

const g = (a, l, x) => x > 0 ? Math.exp(a * Math.log(l) + (a - 1) * Math.log(x) - l * x - lgam(a)) : 0;
function lgam(z) { const c = [76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5]; let x = z, y = z, t = x + 5.5; t -= (x + 0.5) * Math.log(t); let s = 1.000000000190015; for (const ci of c) s += ci / ++y; return -t + Math.log(2.5066282746310005 * s / x); }
const figDens = GRAPH({ w: 440, h: 230, x: [0, 10], y: [0, 1.05], xt: [2, 4, 6, 8, 10], yt: [0.5, 1], ytl: ["0,5", "1"], xl: "x",
  curves: [{ f: x => g(1, 1, x), c: "b", lab: [0.6, 0.85, "a = 1 (exponentielle)"] }, { f: x => g(2, 1, x), c: "g", lab: [1.7, 0.4, "a = 2"] }, { f: x => g(5, 1, x), c: "r", lab: [5.2, 0.2, "a = 5"] }, { f: x => g(0.5, 1, x), c: "v", lab: [0.15, 1.0, "a = 1/2"] }] },
  R`Densités de $\Gamma(a,1)$ : pour $a\lt1$ elle explose en $0$, pour $a = 1$ c'est la loi exponentielle, pour $a>1$ elle s'annule en $0$ et a un mode en $a-1$. La moyenne vaut $a$ et la variance $a$ (Q5) : la loi s'étale et se décale vers la droite.`, "Densités Gamma");
const rng = (seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; })(5);
const figSim = (() => { const N = 4000, B = 30, W = 12, h = Array(B).fill(0); for (let k = 0; k < N; k++) { const v = -Math.log(rng()) - Math.log(rng()) - Math.log(rng()); if (v < W) h[Math.floor(v / W * B)]++; }
  return GRAPH({ w: 440, h: 230, x: [0, 12], y: [0, 0.3], xt: [2, 4, 6, 8, 10, 12], yt: [0.1, 0.2, 0.3], ytl: ["0,1", "0,2", "0,3"], xl: "x",
    curves: [{ f: x => g(3, 1, x), c: "r", lab: [5, 0.22, "densité Γ(3, 1)"] }],
    extra: (X, Y) => h.map((c, i) => { const v = c / N / (W / B); return `<rect x="${X(i * W / B).toFixed(1)}" y="${Y(v).toFixed(1)}" width="${(X(W / B) - X(0) - 1).toFixed(1)}" height="${(Y(0) - Y(v)).toFixed(1)}" class="hb" style="opacity:.6"/>`; }).join("") },
    R`Histogramme de $4000$ tirages de $-\ln U_1-\ln U_2-\ln U_3$ ($U_i$ uniformes indépendantes) et la densité de $\Gamma(3,1)$ (rouge) : chaque $-\ln U_i$ suit la loi exponentielle $\mathcal E(1) = \Gamma(1,1)$, et leur somme suit $\Gamma(3,1)$ (Q8).`, "Simulation de la loi Gamma"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "gam-1", ...P, part: "Partie I", time: "30 min",
  title: "Transformée de Laplace complexe",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $X\sim\Gamma(a,\lambda)$.</p><ol start="1">
<li>Vérifier que $\gamma_{a,\lambda}$ est une densité de probabilité.</li>
<li>Pour $z\in D_\lambda$, montrer que $x\mapsto x^{a-1}e^{-(\lambda-z)x}$ est intégrable sur $]0,\infty[$, et que $\psi(z) = \frac{\lambda^a}{\Gamma(a)}\int_0^\infty x^{a-1}e^{-(\lambda-z)x}dx$ définit une fonction holomorphe sur $D_\lambda$. (Travailler sur $D_\alpha$, $\alpha\lt\lambda$.)</li>
<li>Montrer que pour $t\in]-\infty,\lambda[$ réel, $\psi(t) = \big(\frac\lambda{\lambda-t}\big)^a$.</li></ol>`,
  decode: { donnees: [R`Holomorphie sous l'intégrale.`], but: R`Calculer $\mathbb E[e^{zX}]$ sur la demi-droite réelle.`, cles: {} },
  steps: [
    Q(1, "Une densité", R`<p>Changement de variable $y = \lambda x$.</p>`, R`<p>$\gamma_{a,\lambda}\geqslant0$, et avec $y = \lambda x$ : $\int_0^\infty\frac{\lambda^a}{\Gamma(a)}x^{a-1}e^{-\lambda x}dx = \frac{\lambda^a}{\Gamma(a)}\int_0^\infty\frac{y^{a-1}}{\lambda^{a-1}}e^{-y}\frac{dy}\lambda = \frac{\Gamma(a)}{\Gamma(a)} = 1$.</p>`),
    Q(2, "Holomorphie", R`<p>Sur $D_\alpha$ ($0\lt\alpha\lt\lambda$) : $|x^{a-1}e^{-(\lambda-z)x}|\leqslant x^{a-1}e^{-(\lambda-\alpha)x}$.</p>`, R`<p>$|e^{-(\lambda-z)x}| = e^{-(\lambda-\mathrm{Re}\,z)x}$. Soit $\alpha\in]0,\lambda[$ ; pour $z\in D_\alpha$ et $x>0$ : $|x^{a-1}e^{-(\lambda-z)x}|\leqslant k(x) = x^{a-1}e^{-(\lambda-\alpha)x}$, intégrable sur $]0,\infty[$ (en $0$, $x^{a-1}$ avec $a-1>-1$ ; en $+\infty$, décroissance exponentielle). Comme $z\mapsto x^{a-1}e^{-(\lambda-z)x}$ est holomorphe (entière) pour tout $x$, $\psi$ est holomorphe sur $D_\alpha$. Les $D_\alpha$ recouvrent $D_\lambda$, et l'holomorphie est locale : $\psi$ est holomorphe sur $D_\lambda$. (Une domination sur $D_\lambda$ entier serait impossible : $k$ ne serait plus intégrable.)</p>`, ["gm-holo"]),
    Q(3, "Valeurs réelles", R`<p>Changement de variable $y = (\lambda-t)x$.</p>`, R`<p>Pour $t\lt\lambda$, avec $y = (\lambda-t)x$ :</p>$$\psi(t) = \frac{\lambda^a}{\Gamma(a)}\int_0^\infty\frac{y^{a-1}}{(\lambda-t)^{a-1}}e^{-y}\frac{dy}{\lambda-t} = \frac{\lambda^a}{(\lambda-t)^a}\cdot\frac{\Gamma(a)}{\Gamma(a)} = \Big(\frac\lambda{\lambda-t}\Big)^a.$$`)
  ],
  piege: R`$\big(\frac\lambda{\lambda-z}\big)^a$ avec $a$ non entier exige un choix de logarithme ; la détermination principale convient car $1-\frac z\lambda$ est de partie réelle $>0$ sur $D_\lambda$.`,
  methode: R`Pour calculer une fonction caractéristique : calculer la transformée de Laplace réelle (souvent un simple changement de variable), puis prolonger analytiquement jusqu'à l'axe imaginaire.`
},

/* ===================== Partie II ===================== */
{ id: "gam-2", ...P, part: "Partie II", time: "25 min",
  title: "Fonction caractéristique et moments",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que $\psi(z) = \big(\frac\lambda{\lambda-z}\big)^a$ sur $D_\lambda$, et en déduire $\varphi_X(t) = \big(\frac\lambda{\lambda-it}\big)^a$ pour $t\in\mathbb R$.</li>
<li>Montrer que $X$ a des moments de tout ordre et que $\mathbb E[X^n] = \frac{a(a+1)\cdots(a+n-1)}{\lambda^n}$. En déduire $\mathbb E[X]$ et $\mathbb V(X)$.</li></ol>`,
  decode: { donnees: [R`Prolongement analytique.`], but: R`Obtenir $\varphi_X$ et les moments.`, cles: {} },
  steps: [
    Q(4, "Prolongement", R`<p>Les deux membres sont holomorphes sur $D_\lambda$ connexe et coïncident sur $]-\infty,\lambda[$.</p>`, R`<p>$z\mapsto\exp\big(-a\,\mathrm{Log}(1-\frac z\lambda)\big)$ est holomorphe sur $D_\lambda$ (composée : $\mathrm{Re}(1-\frac z\lambda)>0$), et coïncide avec $\psi$ sur $]-\infty,\lambda[$ (Q3 ; pour $t$ réel, $\mathrm{Log}$ est le logarithme réel). $D_\lambda$ est un demi-plan, connexe : par prolongement analytique, $\psi(z) = \big(\frac\lambda{\lambda-z}\big)^a$ sur $D_\lambda$. Pour $t\in\mathbb R$, $it\in D_\lambda$ et $\psi(it) = \mathbb E[e^{itX}] = \varphi_X(t)$ :</p><div class="sbox">$$\varphi_X(t) = \Big(\frac\lambda{\lambda-it}\Big)^a = \Big(1-\frac{it}\lambda\Big)^{-a}.$$</div>`, ["gm-zi"]),
    Q(5, "Moments", R`<p>Dériver $\psi$ (holomorphe en $0$) : $\psi^{(n)}(0) = \mathbb E[X^n]$ par dérivation sous l'intégrale. Et $\frac{d^n}{dz^n}(1-\frac z\lambda)^{-a}$.</p>`, R`<p>Par dérivation sous l'intégrale (rappel), $\psi^{(n)}(z) = \frac{\lambda^a}{\Gamma(a)}\int_0^\infty x^nx^{a-1}e^{-(\lambda-z)x}dx$, donc $\psi^{(n)}(0) = \mathbb E[X^n]\lt\infty$ : $X$ a des moments de tout ordre. D'autre part, $\frac d{dz}(1-\frac z\lambda)^{-c} = \frac c\lambda(1-\frac z\lambda)^{-c-1}$, d'où par récurrence</p>$$\psi^{(n)}(z) = \frac{a(a+1)\cdots(a+n-1)}{\lambda^n}\Big(1-\frac z\lambda\Big)^{-a-n},$$$$\mathbb E[X^n] = \frac{a(a+1)\cdots(a+n-1)}{\lambda^n}.$$<p>En particulier $\mathbb E[X] = \frac a\lambda$, $\mathbb E[X^2] = \frac{a(a+1)}{\lambda^2}$ et $\mathbb V(X) = \frac{a(a+1)-a^2}{\lambda^2} = \frac a{\lambda^2}$.</p>${figDens}`, ["gm-holo"])
  ],
  piege: R`On aurait pu dériver $\varphi_X$ en $0$ ($\mathbb E[X^n] = i^{-n}\varphi_X^{(n)}(0)$), mais c'est plus simple avec $\psi$, holomorphe au voisinage de $0$ : ses dérivées sont directement les moments.`,
  methode: R`Une fonction génératrice des moments $\psi(z) = \mathbb E[e^{zX}]$ holomorphe près de $0$ donne tous les moments par $\psi^{(n)}(0)$, et leur série $\sum\frac{\mathbb E[X^n]}{n!}z^n$.`
},

/* ===================== Partie III ===================== */
{ id: "gam-3", ...P, part: "Partie III", time: "30 min",
  title: "Sommes, exponentielles et khi-deux",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="6">
<li>Soient $X\sim\Gamma(a,\lambda)$ et $Y\sim\Gamma(b,\lambda)$ indépendantes. Montrer que $X+Y\sim\Gamma(a+b,\lambda)$.</li>
<li>Soit $Z\sim\mathcal N(0,1)$. Montrer que $Z^2\sim\Gamma(\frac12,\frac12)$. En déduire que la loi du $\chi^2(k)$ (somme de $k$ carrés de gaussiennes centrées réduites indépendantes) est $\Gamma(\frac k2,\frac12)$, et donner sa moyenne et sa variance.</li>
<li>Montrer que si $U$ est uniforme sur $]0,1[$, $-\frac1\lambda\ln U\sim\Gamma(1,\lambda)$ (loi exponentielle). En déduire une méthode de simulation de $\Gamma(n,\lambda)$, $n\in\mathbb N^*$.</li></ol>`,
  decode: { donnees: [R`Partie II.`], but: R`Exploiter la forme de $\varphi$.`, cles: {} },
  steps: [
    Q(6, "Stabilité par somme", R`<p>$\varphi_{X+Y} = \varphi_X\varphi_Y$ ; $(1-\frac{it}\lambda)^{-a}(1-\frac{it}\lambda)^{-b} = (1-\frac{it}\lambda)^{-(a+b)}$ (même détermination).</p>`, R`<p>Par indépendance, $\varphi_{X+Y}(t) = \varphi_X(t)\varphi_Y(t) = \exp\big(-a\,\mathrm{Log}(1-\frac{it}\lambda)\big)\exp\big(-b\,\mathrm{Log}(1-\frac{it}\lambda)\big) = \big(1-\frac{it}\lambda\big)^{-(a+b)}$, qui est la fonction caractéristique de $\Gamma(a+b,\lambda)$. La fonction caractéristique caractérise la loi : $X+Y\sim\Gamma(a+b,\lambda)$. (À même $\lambda$ seulement.)</p>`, ["gm-cf"]),
    Q(7, "Le khi-deux", R`<p>$\mathbb P(Z^2\leqslant x) = 2\int_0^{\sqrt x}\frac{e^{-u^2/2}}{\sqrt{2\pi}}du$, dériver. $\Gamma(\frac12) = \sqrt\pi$.</p>`, R`<p>Pour $x>0$, $F(x) = \mathbb P(Z^2\leqslant x) = \mathbb P(|Z|\leqslant\sqrt x) = 2\int_0^{\sqrt x}\frac{e^{-u^2/2}}{\sqrt{2\pi}}du$. En dérivant : $F'(x) = 2\cdot\frac{e^{-x/2}}{\sqrt{2\pi}}\cdot\frac1{2\sqrt x} = \frac{x^{-1/2}e^{-x/2}}{\sqrt{2\pi}}$. Or $\gamma_{1/2,1/2}(x) = \frac{(1/2)^{1/2}}{\Gamma(1/2)}x^{-1/2}e^{-x/2} = \frac{x^{-1/2}e^{-x/2}}{\sqrt2\sqrt\pi}$ : c'est la même. Donc $Z^2\sim\Gamma(\frac12,\frac12)$, et par Q6, $\chi^2(k) = \Gamma(\frac k2,\frac12)$, de densité $\frac{x^{k/2-1}e^{-x/2}}{2^{k/2}\Gamma(k/2)}$. Par Q5 : moyenne $\frac{k/2}{1/2} = k$, variance $\frac{k/2}{1/4} = 2k$.</p>`),
    Q(8, "Simulation", R`<p>$\mathbb P(-\frac1\lambda\ln U>x) = \mathbb P(U\lt e^{-\lambda x})$. Puis Q6 avec $n$ exponentielles.</p>`, R`<p>Pour $x\geqslant0$ : $\mathbb P(-\frac1\lambda\ln U>x) = \mathbb P(U\lt e^{-\lambda x}) = e^{-\lambda x}$ : c'est la loi exponentielle $\mathcal E(\lambda)$, de densité $\lambda e^{-\lambda x} = \gamma_{1,\lambda}(x)$. Par Q6, si $U_1,\dots,U_n$ sont uniformes indépendantes,</p>$$-\frac1\lambda\sum_{i=1}^n\ln U_i = -\frac1\lambda\ln(U_1\cdots U_n)\sim\Gamma(n,\lambda).$$<p>C'est la loi du temps d'attente du $n$-ième événement d'un processus de Poisson d'intensité $\lambda$.</p>${figSim}`)
  ],
  piege: R`$\Gamma(a,\lambda)+\Gamma(b,\mu)$ n'est pas une loi Gamma si $\lambda\neq\mu$ : la stabilité exige le même paramètre d'échelle.`,
  methode: R`Lois stables par somme : lire la loi de la somme sur le produit des fonctions caractéristiques.`
}
]);
})();

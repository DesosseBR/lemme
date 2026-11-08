/* Commando X-ENS · Aller plus loin · Sujet « Fonction caractéristique et moments ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 14, kind: "probleme", qnav: true, side: true, level: 4, plus: "fcm",
  sujet: "Fonction caractéristique et moments d'une variable aléatoire",
  sujetDesc: "On montre qu'un moment d'ordre n rend la fonction caractéristique de classe Cⁿ, puis la réciproque partielle : deux dérivées en 0 suffisent pour un moment d'ordre 2. On termine par une loi dont la fonction caractéristique est dérivable en 0 mais qui n'a pas d'espérance." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "fcm-dom": { t: "Continuité et dérivation sous l'intégrale", b: R`<p><b>Continuité</b> :</p><div class="sbox">$$t\mapsto g(t,x)\ \text{continue},\ |g(t,x)|\leqslant h(x),\ h\ \text{intégrable}\ \Longrightarrow\ t\mapsto\int g(t,x)\,dx\ \text{continue}.$$</div><p><b>Dérivation</b> :</p>$$|\partial_tg(t,x)|\leqslant h_1(x),\ h_1\ \text{intégrable}\ \Longrightarrow\ \frac d{dt}\int g(t,x)\,dx = \int\partial_tg(t,x)\,dx.$$` },
  "fcm-cos": { t: "Encadrement de 1 − cos", b: R`<div class="sbox">$$\forall u\in\mathbb R,\quad0\leqslant1-\cos u\leqslant\frac{u^2}2,\qquad\Big|1-\cos u-\frac{u^2}2\Big|\leqslant\frac{u^4}{24}.$$</div><p>(Taylor-Lagrange à l'ordre $4$, $|\cos^{(4)}|\leqslant1$.)</p>` },
  "fcm-ty": { t: "Taylor-Young", b: R`<div class="sbox">$$\psi(t)\underset{t\to0}{=}\psi(0)+t\psi'(0)+\frac{t^2}2\psi''(0)+o(t^2).$$</div>$$\frac{\psi(t)+\psi(-t)-2\psi(0)}{t^2}\xrightarrow[t\to0]{}\psi''(0).$$` },
  "fcm-bert": { t: "Séries de Bertrand", b: R`$$\int_2^x\frac{dt}{t\ln t} = \ln\ln x-\ln\ln2\to+\infty\ \Longrightarrow\ \sum\frac1{k\ln k}\ \text{diverge}.$$$$\frac1{k^2\ln k}\leqslant\frac1{k^2}\ (k\geqslant3)\ \Longrightarrow\ \sum\frac1{k^2\ln k}\ \text{converge}.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $X$ est une variable aléatoire réelle à densité $f$ : $f$ est continue par morceaux, positive, et $\int_{\mathbb R}f = 1$. Sa <b>fonction caractéristique</b> est</p>$$\varphi(t) = \mathbb E\big[e^{itX}\big] = \int_{\mathbb R}e^{itx}f(x)\,dx,\qquad t\in\mathbb R.$$<p class="pl-pre">$X$ admet un <b>moment d'ordre</b> $r\in\mathbb N$ si $\int_{\mathbb R}|x|^rf(x)\,dx\lt +\infty$ ; on note alors $\mathbb E[X^r] = \int x^rf(x)\,dx$.</p>`;

const figPhi = GRAPH({ w: 440, h: 230, x: [-12, 12], y: [-0.35, 1.1], xt: [-10, -5, 5, 10], yt: [0.5, 1], ytl: ["0,5", "1"], xl: "t", curves: [{ f: t => Math.abs(t) < 1e-9 ? 1 : Math.sin(t) / t, c: "b", lab: [4.2, 0.62, "sin t / t (uniforme)"] }, { f: t => 1 / Math.sqrt(1 + t * t), c: "r", lab: [-11.5, 0.2, "|1/(1 − it)| (exponentielle)"] }] }, R`Fonction caractéristique de la loi uniforme sur $[-1,1]$, et module de celle de la loi exponentielle. Toutes deux valent $1$ en $0$.`, "Figure");

const figKer = GRAPH({ w: 440, h: 230, x: [-3.2, 3.2], y: [-0.3, 5], xt: [-3, -2, -1, 1, 2, 3], yt: [1, 2, 3, 4], xl: "x", curves: [{ f: x => x * x / 2, c: "r", lab: [2.35, 3.6, "x²/2"] }, { f: x => (1 - Math.cos(x)), c: "b", lab: [-3.1, 1.45, "t = 1"] }, { f: x => (1 - Math.cos(0.5 * x)) / 0.25, c: "g", lab: [-3.1, 2.65, "t = 1/2"] }] }, R`Le noyau $x\mapsto\frac{1-\cos(tx)}{t^2}$ est positif et majoré par $\frac{x^2}2$ ; il converge vers $\frac{x^2}2$ quand $t\to0$, uniformément sur tout segment $[-A,A]$.`, "Figure");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "fcm-1", ...P, part: "Partie I", time: "40 min",
  title: "Des moments à la régularité",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $\varphi$ est définie et continue sur $\mathbb R$, que $|\varphi(t)|\leqslant1 = \varphi(0)$ et que $\varphi(-t) = \overline{\varphi(t)}$.</li>
<li>Montrer que si $X$ admet un moment d'ordre $n$, elle admet un moment d'ordre $k$ pour tout $k\leqslant n$.</li>
<li>On suppose que $X$ admet un moment d'ordre $n$. Montrer que $\varphi$ est de classe $\mathcal C^n$ et que $$\varphi^{(k)}(t) = i^k\int x^ke^{itx}f(x)\,dx\qquad(0\leqslant k\leqslant n).$$ En déduire $\mathbb E[X^k] = (-i)^k\varphi^{(k)}(0)$.</li>
<li>Exemples.<br>a) $X$ uniforme sur $[-1,1]$ ($f = \frac12$ sur $[-1,1]$). Calculer $\varphi$ et retrouver $\mathbb E[X^2]$ par la question 3.<br>b) $X$ de loi exponentielle de paramètre $1$ ($f(x) = e^{-x}$ sur $[0,+\infty[$). Calculer $\varphi$, puis tous les moments.</li></ol>`,
  decode: { donnees: [R`$|e^{itx}| = 1$ et $\big|\frac{d^k}{dt^k}e^{itx}\big| = |x|^k$.`], but: R`Dériver sous l'intégrale en dominant par $|x|^kf(x)$.`, cles: {} },
  steps: [
    Q(1, "Définition et premières propriétés", R`<p>Domination par $f$, indépendante de $t$.</p>`, R`<p>$|e^{itx}f(x)| = f(x)$, intégrable : $\varphi(t)$ existe et $|\varphi(t)|\leqslant\int f = 1 = \varphi(0)$. Pour $x$ fixé, $t\mapsto e^{itx}f(x)$ est continue, et la domination par $f$ (indépendante de $t$) donne la continuité de $\varphi$. Enfin $\overline{e^{itx}} = e^{-itx}$ et $f$ est réelle, donc $\varphi(-t) = \overline{\varphi(t)}$.</p>`, ["fcm-dom"]),
    Q(2, "Moments d'ordre inférieur", R`<p>$|x|^k\leqslant1+|x|^n$.</p>`, R`<p>Pour $k\leqslant n$ : si $|x|\leqslant1$, $|x|^k\leqslant1$ ; si $|x|>1$, $|x|^k\leqslant|x|^n$. Donc $|x|^k\leqslant1+|x|^n$ et</p>$$\int|x|^kf\leqslant\int f+\int|x|^nf = 1+\int|x|^nf\lt +\infty.$$` ),
    Q(3, "Dérivées successives", R`<p>Récurrence sur $k$ avec la domination $|x|^kf(x)$.</p>`, R`<p>On note $g_k(t,x) = (ix)^ke^{itx}f(x)$. C'est $\frac{\partial^k}{\partial t^k}\big(e^{itx}f(x)\big)$, continue en $t$, et $|g_k(t,x)| = |x|^kf(x)$, intégrable pour $k\leqslant n$ (question 2), indépendamment de $t$.</p><p>Par récurrence sur $k\in\{0,\dots,n\}$ : $\varphi^{(k)}(t) = \int g_k(t,x)\,dx$. Pour $k = 0$, c'est la définition. Si c'est vrai au rang $k\lt n$, le théorème de dérivation sous l'intégrale (domination de $\partial_tg_k = g_{k+1}$ par $|x|^{k+1}f$) donne le rang $k+1$, et la continuité de $\varphi^{(n)}$ vient de la domination de $g_n$. Donc</p><div class="sbox">$$\varphi\in\mathcal C^n,\quad\varphi^{(k)}(t) = i^k\int x^ke^{itx}f(x)\,dx,\quad\mathbb E[X^k] = (-i)^k\varphi^{(k)}(0).$$</div>`, ["fcm-dom"]),
    Q(4, "a) Loi uniforme", R`<p>Intègre $\frac12e^{itx}$ sur $[-1,1]$, puis développe $\frac{\sin t}t$.</p>`, R`<p>Pour $t\neq0$ :</p>$$\varphi(t) = \frac12\int_{-1}^1e^{itx}\,dx = \frac12\cdot\frac{e^{it}-e^{-it}}{it} = \frac{\sin t}t,\qquad\varphi(0) = 1.$$<p>$X$ est bornée, donc a des moments de tout ordre et $\varphi\in\mathcal C^\infty$. Développement : $\frac{\sin t}t = 1-\frac{t^2}6+\frac{t^4}{120}-\dots$, donc $\varphi''(0) = 2\times\big(-\frac16\big) = -\frac13$ et</p>$$\mathbb E[X^2] = (-i)^2\varphi''(0) = -\Big(-\frac13\Big) = \frac13.$$<p>Vérification directe : $\frac12\int_{-1}^1x^2\,dx = \frac12\cdot\frac23 = \frac13$. ✓</p>`),
    Q(4, "b) Loi exponentielle", R`<p>$\int_0^{+\infty}e^{-(1-it)x}\,dx = \frac1{1-it}$. Développe en série entière.</p>`, R`$$\varphi(t) = \int_0^{+\infty}e^{itx}e^{-x}\,dx = \Big[\frac{e^{-(1-it)x}}{-(1-it)}\Big]_0^{+\infty} = \frac1{1-it}$$<p>(car $|e^{-(1-it)x}| = e^{-x}\to0$). Pour $|t|\lt 1$ : $\varphi(t) = \sum_{k\geqslant0}(it)^k$, donc $\varphi^{(k)}(0) = k!\,i^k$ et</p><div class="sbox">$$\mathbb E[X^k] = (-i)^k\,k!\,i^k = k!.$$</div><p>Vérification : $\int_0^{+\infty}x^ke^{-x}\,dx = \Gamma(k+1) = k!$ (intégrations par parties successives). ✓</p>${figPhi}`)
  ],
  piege: R`Dominer $|(ix)^ke^{itx}f(x)|$ par une fonction qui dépend de $t$ : la domination doit être uniforme en $t$ ; ici $|x|^kf(x)$ convient car $|e^{itx}| = 1$.`,
  methode: R`Moments et fonction caractéristique : chaque moment fini donne une dérivée de plus, par dérivation sous l'intégrale.`
},

/* ===================== Partie II ===================== */
{ id: "fcm-2", ...P, part: "Partie II", time: "40 min",
  title: "Deux dérivées en 0 donnent un moment d'ordre 2",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose seulement que $\varphi$ est deux fois dérivable en $0$.</p><ol start="5">
<li>Montrer que pour $t\neq0$ : $$\frac{\varphi(t)+\varphi(-t)-2\varphi(0)}{t^2} = -2\int_{\mathbb R}\frac{1-\cos(tx)}{t^2}f(x)\,dx.$$</li>
<li>Montrer que, pour tout $A>0$, $$\int_{-A}^Ax^2f(x)\,dx\leqslant-\varphi''(0).$$ (On pourra faire tendre $t$ vers $0$ dans l'intégrale restreinte à $[-A,A]$.)</li>
<li>En déduire que $X$ admet un moment d'ordre $2$ et que $\mathbb E[X^2] = -\varphi''(0)$.</li>
<li>Montrer par récurrence que si $\varphi$ est $2n$ fois dérivable en $0$, alors $X$ admet un moment d'ordre $2n$. Qu'en déduit-on si $\varphi$ est $k$ fois dérivable en $0$ ?</li></ol>`,
  decode: { donnees: [R`$\varphi(t)+\varphi(-t) = 2\int\cos(tx)f(x)\,dx$.`], but: R`Faire apparaître $x^2$ comme limite de $\frac{2(1-\cos tx)}{t^2}$, sans pouvoir dominer (on ne sait pas encore que $\int x^2f$ est fini).`, cles: {} },
  steps: [
    Q(5, "La différence seconde", R`<p>$e^{itx}+e^{-itx} = 2\cos(tx)$ et $\varphi(0) = \int f$.</p>`, R`$$\varphi(t)+\varphi(-t)-2\varphi(0) = \int\big(e^{itx}+e^{-itx}-2\big)f(x)\,dx = \int\big(2\cos(tx)-2\big)f(x)\,dx.$$<p>En divisant par $t^2$ :</p><div class="sbox">$$\frac{\varphi(t)+\varphi(-t)-2\varphi(0)}{t^2} = -2\int\frac{1-\cos(tx)}{t^2}f(x)\,dx.$$</div><p>Le membre de droite est l'opposé d'une intégrale de fonction <b>positive</b>.</p>`),
    Q(6, "Majoration sur [−A, A]", R`<p>Positivité : $\int_{-A}^A\leqslant\int_{\mathbb R}$. Puis convergence uniforme sur $[-A,A]$.</p>`, R`<p>Comme l'intégrande est positif :</p>$$\int_{-A}^A\frac{1-\cos(tx)}{t^2}f(x)\,dx\leqslant\int_{\mathbb R}\frac{1-\cos(tx)}{t^2}f(x)\,dx = -\frac{\varphi(t)+\varphi(-t)-2\varphi(0)}{2t^2}.$$<p>Quand $t\to0$, le membre de droite tend vers $-\frac12\varphi''(0)$ (Taylor-Young). À gauche, pour $|x|\leqslant A$ :</p>$$\Big|\frac{1-\cos(tx)}{t^2}-\frac{x^2}2\Big|\leqslant\frac{t^2x^4}{24}\leqslant\frac{t^2A^4}{24},$$<p>donc la convergence vers $\frac{x^2}2$ est uniforme sur $[-A,A]$, et $\int_{-A}^A\frac{1-\cos(tx)}{t^2}f\to\int_{-A}^A\frac{x^2}2f$ (car $\int_{-A}^Af\leqslant1$). En passant à la limite :</p><div class="sbox">$$\frac12\int_{-A}^Ax^2f(x)\,dx\leqslant-\frac12\varphi''(0).$$</div>${figKer}`, ["fcm-cos", "fcm-ty"]),
    Q(7, "Moment d'ordre 2", R`<p>$A\mapsto\int_{-A}^Ax^2f$ est croissante et majorée.</p>`, R`<p>$A\mapsto\int_{-A}^Ax^2f(x)\,dx$ est croissante et majorée par $-\varphi''(0)$ : elle a une limite finie quand $A\to+\infty$. La fonction positive $x^2f$ est donc intégrable sur $\mathbb R$ : $X$ admet un moment d'ordre $2$. Alors la question 3 s'applique : $\varphi\in\mathcal C^2$ et</p><div class="sbox">$$\mathbb E[X^2] = (-i)^2\varphi''(0) = -\varphi''(0).$$</div>`),
    Q(8, "Ordre 2n", R`<p>Applique le raisonnement à $\psi = \varphi^{(2n-2)}$ et à la fonction positive $x^{2n-2}f$.</p>`, R`<p>Récurrence sur $n\geqslant1$ ; $n = 1$ est la question 7. Si $\varphi$ est $2n$ fois dérivable en $0$, elle l'est $2n-2$ fois, donc par hypothèse de récurrence $X$ a un moment d'ordre $2n-2$, et par la question 3 :</p>$$\psi(t) := \varphi^{(2n-2)}(t) = (-1)^{n-1}\int x^{2n-2}e^{itx}f(x)\,dx.$$<p>$\psi$ est deux fois dérivable en $0$. Le calcul de la question 5 avec la fonction positive $g = x^{2n-2}f$ à la place de $f$ donne</p>$$(-1)^{n-1}\frac{\psi(t)+\psi(-t)-2\psi(0)}{t^2} = -2\int\frac{1-\cos(tx)}{t^2}x^{2n-2}f(x)\,dx,$$<p>et les questions 6 et 7 donnent $\int x^{2n}f\leqslant(-1)^n\psi''(0) = (-1)^n\varphi^{(2n)}(0)\lt +\infty$.</p><div class="sbox"><p>Si $\varphi$ est $k$ fois dérivable en $0$, $X$ admet des moments jusqu'à l'ordre $2\lfloor k/2\rfloor$.</p></div>`)
  ],
  piege: R`Dériver deux fois sous l'intégrale dès le départ : c'est justement interdit tant qu'on ne sait pas que $\int x^2f$ est fini. On contourne en restreignant à $[-A,A]$ et en utilisant la positivité.`,
  methode: R`Pour montrer qu'une intégrale de fonction positive est finie : la majorer sur $[-A,A]$ par une constante indépendante de $A$, puis faire $A\to+\infty$.`
},

/* ===================== Partie III ===================== */
{ id: "fcm-3", ...P, part: "Partie III", time: "40 min",
  title: "Dérivable en 0 sans espérance",
  enonce: PRE + R`<p><b>Partie III.</b> On sort du cadre à densité : $X$ est à valeurs dans $\mathbb Z$, avec $$\mathbb P(X = k) = \mathbb P(X = -k) = \frac c{k^2\ln k}\quad(k\geqslant2),\qquad\mathbb P(X\in\{-1,0,1\}) = 0,$$ et $\varphi(t) = \mathbb E[e^{itX}] = \sum_k\mathbb P(X = k)e^{itk}$.</p><ol start="9">
<li>Montrer qu'il existe une unique constante $c>0$ qui fait de ceci une loi de probabilité, et que $\mathbb E[|X|] = +\infty$.</li>
<li>Montrer que $\varphi(t) = 1-2c\sum_{k\geqslant2}\dfrac{1-\cos(kt)}{k^2\ln k}$.</li>
<li>Soit $0\lt t\leqslant\frac12$ et $N = \lfloor1/t\rfloor\geqslant2$. Montrer que $$\frac{1-\varphi(t)}t\leqslant c\,t\sum_{k=2}^N\frac1{\ln k}+\frac{4c}{t}\sum_{k>N}\frac1{k^2\ln k}.$$</li>
<li>En déduire que $\varphi$ est dérivable en $0$ avec $\varphi'(0) = 0$. Que montre cet exemple ?</li></ol>`,
  decode: { donnees: [R`$1-\cos u\leqslant\min\big(2,\frac{u^2}2\big)$.`], but: R`Voir que la réciproque de la question 3 est fausse à l'ordre $1$.`, cles: {} },
  steps: [
    Q(9, "Une loi sans espérance", R`<p>Bertrand : $\sum\frac1{k^2\ln k}$ converge, $\sum\frac1{k\ln k}$ diverge.</p>`, R`<p>$S = \sum_{k\geqslant2}\frac1{k^2\ln k}$ converge (majorée par $\frac1{\ln2}\sum\frac1{k^2}$). La somme des probabilités vaut $2cS$, d'où l'unique $c = \frac1{2S}>0$. Puis</p>$$\mathbb E[|X|] = 2c\sum_{k\geqslant2}k\cdot\frac1{k^2\ln k} = 2c\sum_{k\geqslant2}\frac1{k\ln k} = +\infty.$$`, ["fcm-bert"]),
    Q(10, "La fonction caractéristique", R`<p>Regroupe $k$ et $-k$.</p>`, R`$$\varphi(t) = \sum_{k\geqslant2}\frac c{k^2\ln k}\big(e^{ikt}+e^{-ikt}\big) = 2c\sum_{k\geqslant2}\frac{\cos(kt)}{k^2\ln k}.$$<p>Comme $2c\sum\frac1{k^2\ln k} = 1$ :</p><div class="sbox">$$\varphi(t) = 1-2c\sum_{k\geqslant2}\frac{1-\cos(kt)}{k^2\ln k}.$$</div>`),
    Q(11, "Découper la somme", R`<p>Pour $k\leqslant N$ : $1-\cos(kt)\leqslant\frac{k^2t^2}2$. Pour $k>N$ : $\leqslant2$, et $\frac1t\lt N+1\leqslant2N$.</p>`, R`<p>On coupe la somme en $k\leqslant N$ et $k>N$ :</p><ul><li>$k\leqslant N$ : $\frac{1-\cos(kt)}{k^2\ln k}\leqslant\frac{t^2}{2\ln k}$, contribution à $\frac{1-\varphi(t)}t$ au plus $\frac{2c}t\cdot\frac{t^2}2\sum_{k\leqslant N}\frac1{\ln k} = ct\sum_{k=2}^N\frac1{\ln k}$ ;</li><li>$k>N$ : $\frac{1-\cos(kt)}{k^2\ln k}\leqslant\frac2{k^2\ln k}$, contribution au plus $\frac{4c}t\sum_{k>N}\frac1{k^2\ln k}$.</li></ul>`, ["fcm-cos"]),
    Q(12, "Dérivée nulle en 0", R`<p>$\sum_{k\leqslant N}\frac1{\ln k}\leqslant\frac{\sqrt N}{\ln2}+\frac{2N}{\ln N}$ et $\sum_{k>N}\frac1{k^2}\leqslant\frac1N$.</p>`, R`<p><b>Premier terme.</b> On coupe en $\sqrt N$ : $\sum_{2\leqslant k\leqslant\sqrt N}\frac1{\ln k}\leqslant\frac{\sqrt N}{\ln2}$ et $\sum_{\sqrt N\lt k\leqslant N}\frac1{\ln k}\leqslant\frac N{\ln\sqrt N} = \frac{2N}{\ln N}$. Avec $t\leqslant\frac1N$ :</p>$$ct\sum_{k=2}^N\frac1{\ln k}\leqslant c\Big(\frac1{\sqrt N\ln2}+\frac2{\ln N}\Big).$$<p><b>Second terme.</b> $\sum_{k>N}\frac1{k^2\ln k}\leqslant\frac1{\ln N}\sum_{k>N}\frac1{k(k-1)} = \frac1{N\ln N}$, et $\frac1t\lt N+1\leqslant2N$ : contribution $\leqslant\frac{8c}{\ln N}$.</p><p>Quand $t\to0^+$, $N\to+\infty$ et les deux termes tendent vers $0$. Donc $0\leqslant\frac{1-\varphi(t)}t\to0$. Comme $\varphi$ est paire et réelle, $\frac{\varphi(t)-\varphi(0)}t\to0$ aussi pour $t\to0^-$ :</p><div class="sbox">$$\varphi\ \text{est dérivable en}\ 0,\quad\varphi'(0) = 0,\quad\text{mais}\ \mathbb E[|X|] = +\infty.$$</div><p>Ainsi la réciproque de la question 3 est fausse pour un ordre impair : une dérivée en $0$ ne donne pas d'espérance. La Partie II ne vaut que pour les ordres pairs.</p>`)
  ],
  piege: R`Croire qu'une dérivée en $0$ suffit pour l'espérance, par analogie avec la Partie II : l'argument de positivité ne marche qu'avec la différence seconde symétrique, d'où les ordres pairs.`,
  methode: R`Pour estimer $\sum_kh(kt)$ quand $t\to0$ : couper la somme en $k\leqslant1/t$ (on développe) et $k>1/t$ (on majore grossièrement).`
}
]);
})();

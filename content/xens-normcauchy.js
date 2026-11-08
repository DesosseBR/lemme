/* Commando X-ENS · Aller plus loin · Sujet « Fonctions caractéristiques des lois normale et de Cauchy ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 14, kind: "probleme", qnav: true, side: true, level: 4, plus: "fnc",
  sujet: "Fonctions caractéristiques des lois normale et de Cauchy",
  sujetDesc: "On calcule la fonction caractéristique de la loi normale par une équation différentielle, on en tire tous ses moments, puis celle de la loi de Cauchy de deux façons : par la transformée de e^(−|x|), puis par la méthode des résidus sur un demi-cercle. On termine par l'échec de la loi des grands nombres pour la loi de Cauchy." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "fnc-gauss": { t: "Intégrale de Gauss", b: R`<div class="sbox">$$\int_{\mathbb R}e^{-x^2/2}\,dx = \sqrt{2\pi}.$$</div>` },
  "fnc-dom": { t: "Dérivation sous l'intégrale", b: R`<div class="sbox">$$\left.\begin{aligned}&\partial_tg\ \text{continue en}\ t\\&|\partial_tg(t,x)|\leqslant h(x),\ h\ \text{intégrable}\end{aligned}\right\}\Longrightarrow\ \frac d{dt}\int g(t,x)\,dx = \int\partial_tg(t,x)\,dx.$$</div>` },
  "fnc-ipp": { t: "Intégration par parties sur ℝ", b: R`<div class="sbox">$$\int_{\mathbb R}u'v = \big[uv\big]_{-\infty}^{+\infty}-\int_{\mathbb R}uv',$$</div><p>$u,v\in\mathcal C^1$, valable dès que deux des trois termes existent.</p>` },
  "fnc-edl": { t: "Équation y' = a(t)y", b: R`<div class="sbox">$$y' = a(t)y,\ a\in\mathcal C^0(\mathbb R)\iff y(t) = y(0)\exp\Big(\int_0^ta(s)\,ds\Big).$$</div>` },
  "fnc-res": { t: "Théorème des résidus (admis)", b: R`<p>$g$ holomorphe sur un voisinage de $\Gamma$ et de son intérieur, sauf un pôle simple $z_0$ intérieur ; $\Gamma$ simple, sens direct :</p><div class="sbox">$$\oint_\Gamma g = 2i\pi\operatorname{Res}_{z_0}g,\qquad\operatorname{Res}_{z_0}g = \lim_{z\to z_0}(z-z_0)g(z).$$</div>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Pour une variable aléatoire $X$ de densité $f$, $\varphi_X(t) = \mathbb E[e^{itX}] = \int_{\mathbb R}e^{itx}f(x)\,dx$. La loi normale $\mathcal N(\mu,\sigma^2)$ ($\sigma>0$) a pour densité $\frac1{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/(2\sigma^2)}$, la loi de Cauchy $\mathcal C(a,b)$ ($b>0$) a pour densité $\frac1\pi\frac b{(x-a)^2+b^2}$. On admet que deux variables de même fonction caractéristique ont même loi, et que si $X,Y$ sont indépendantes, $\varphi_{X+Y} = \varphi_X\varphi_Y$.</p>`;

const figDens = GRAPH({ w: 440, h: 230, x: [-5, 5], y: [0, 0.45], xt: [-4, -2, 2, 4], yt: [0.1, 0.2, 0.3, 0.4], ytl: ["0,1", "0,2", "0,3", "0,4"], xl: "x", curves: [{ f: x => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI), c: "b", lab: [0.9, 0.39, "𝒩(0, 1)"] }, { f: x => 1 / (Math.PI * (1 + x * x)), c: "r", lab: [2.6, 0.09, "𝒞(0, 1)"] }] }, R`Les densités de $\mathcal N(0,1)$ et de $\mathcal C(0,1)$. La queue de la loi de Cauchy, en $\frac1{\pi x^2}$, est trop épaisse pour avoir une espérance.`, "Figure");
const figPhi = GRAPH({ w: 440, h: 230, x: [-4, 4], y: [0, 1.1], xt: [-3, -2, -1, 1, 2, 3], yt: [0.5, 1], ytl: ["0,5", "1"], xl: "t", curves: [{ f: t => Math.exp(-t * t / 2), c: "b", lab: [1.2, 0.9, "exp(−t²/2)"] }, { f: t => Math.exp(-Math.abs(t)), c: "r", lab: [-3.6, 0.2, "exp(−|t|)"] }] }, R`Les fonctions caractéristiques : $e^{-t^2/2}$ est $\mathcal C^\infty$ (tous les moments existent), $e^{-|t|}$ a un point anguleux en $0$ (pas d'espérance).`, "Figure");
const figCont = R`<figure class="fig"><svg viewBox="0 0 340 260" width="340" role="img" aria-label="Contour : segment [−R, R] puis demi-cercle de rayon R ; seul le pôle i est à l'intérieur" font-family="serif" font-size="14"><line x1="-5.0" y1="170.0" x2="345.0" y2="170.0" stroke="#888" stroke-width="1"/><line x1="170.0" y1="191.0" x2="170.0" y2="-5.0" stroke="#888" stroke-width="1"/><path d="M310.0,170.0 A140,140 0 0 0 30.0,170.0" fill="none" stroke="#2563EB" stroke-width="1.8"/><line x1="30.0" y1="170.0" x2="310.0" y2="170.0" stroke="#C2410C" stroke-width="1.8"/><path d="M177.0,165.0 L191.0,170.0 L177.0,175.0" fill="none" stroke="#C2410C" stroke-width="1.8"/><path d="M273.6,82.5 l-3,-9 l9,3" fill="none" stroke="#2563EB" stroke-width="1.8"/><circle cx="170.0" cy="100.0" r="3" fill="currentColor"/><text x="182.0" y="104.0" text-anchor="start" fill="currentColor" font-style="italic">i</text><circle cx="170.0" cy="240.0" r="3" fill="#888"/><text x="182.0" y="244.0" text-anchor="start" fill="currentColor" font-style="italic">−i</text><text x="30.0" y="188.0" text-anchor="middle" fill="currentColor" font-style="italic">−R</text><text x="310.0" y="188.0" text-anchor="middle" fill="currentColor" font-style="italic">R</text><text x="289.0" y="51.0" text-anchor="middle" fill="#2563EB" font-style="italic">γ<tspan font-size="10" dy="3">R</tspan></text><text x="107.0" y="162.0" text-anchor="middle" fill="#C2410C">[−R, R]</text></svg><figcaption>Le contour : le segment $[-R,R]$ puis le demi-cercle $\gamma_R$ de rayon $R>1$. Seul le pôle $i$ de $\frac{e^{itz}}{1+z^2}$ est à l'intérieur.</figcaption></figure>`;

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "fnc-1", ...P, part: "Partie I", time: "40 min",
  title: "La loi normale par une équation différentielle",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $X$ de loi $\mathcal N(0,1)$ et $\varphi = \varphi_X$.</p><ol start="1">
<li>Montrer que $\varphi$ est de classe $\mathcal C^1$ et que $\varphi'(t) = \dfrac i{\sqrt{2\pi}}\displaystyle\int xe^{itx}e^{-x^2/2}\,dx$.</li>
<li>Par une intégration par parties, montrer que $\varphi'(t) = -t\varphi(t)$.</li>
<li>En déduire $\varphi(t) = e^{-t^2/2}$, puis la fonction caractéristique de $\mathcal N(\mu,\sigma^2)$.</li>
<li>Développer $\varphi$ en série entière et en déduire $\mathbb E[X^{2n}]$ et $\mathbb E[X^{2n+1}]$. Vérifier $\mathbb E[X^4] = 3$ par un calcul direct.</li></ol>`,
  decode: { donnees: [R`$\big(e^{-x^2/2}\big)' = -xe^{-x^2/2}$.`], but: R`Trouver une équation différentielle vérifiée par $\varphi$ et la résoudre.`, cles: {} },
  steps: [
    Q(1, "Dériver sous l'intégrale", R`<p>Domination par $\frac{|x|}{\sqrt{2\pi}}e^{-x^2/2}$.</p>`, R`<p>$g(t,x) = \frac1{\sqrt{2\pi}}e^{itx}e^{-x^2/2}$ a pour dérivée $\partial_tg = \frac{ix}{\sqrt{2\pi}}e^{itx}e^{-x^2/2}$, continue en $t$ et dominée par $\frac{|x|}{\sqrt{2\pi}}e^{-x^2/2}$, intégrable sur $\mathbb R$ (négligeable devant $\frac1{x^2}$ en $\pm\infty$). Donc $\varphi\in\mathcal C^1$ et</p>$$\varphi'(t) = \frac i{\sqrt{2\pi}}\int_{\mathbb R}xe^{itx}e^{-x^2/2}\,dx.$$`, ["fnc-dom"]),
    Q(2, "Intégration par parties", R`<p>$u'(x) = xe^{-x^2/2}$, $u = -e^{-x^2/2}$, $v = e^{itx}$.</p>`, R`<p>Avec $u(x) = -e^{-x^2/2}$ et $v(x) = e^{itx}$ : $u'(x) = xe^{-x^2/2}$, $v'(x) = ite^{itx}$, et $uv\to0$ en $\pm\infty$. Donc</p>$$\int xe^{-x^2/2}e^{itx}\,dx = \Big[-e^{-x^2/2}e^{itx}\Big]_{-\infty}^{+\infty}+\int e^{-x^2/2}\,ite^{itx}\,dx = it\int e^{itx}e^{-x^2/2}\,dx.$$<p>En multipliant par $\frac i{\sqrt{2\pi}}$ :</p><div class="sbox">$$\varphi'(t) = i\cdot it\,\varphi(t) = -t\,\varphi(t).$$</div>`, ["fnc-ipp"]),
    Q(3, "Résolution", R`<p>EDL d'ordre $1$ et $\varphi(0) = 1$.</p>`, R`<p>$\varphi' = -t\varphi$ : $\varphi(t) = \varphi(0)\exp\big(-\int_0^ts\,ds\big) = \varphi(0)e^{-t^2/2}$, et $\varphi(0) = \int f = 1$ (intégrale de Gauss).</p><div class="sbox">$$\varphi_{\mathcal N(0,1)}(t) = e^{-t^2/2}.$$</div><p>Si $Y = \sigma X+\mu$ (qui suit $\mathcal N(\mu,\sigma^2)$, par changement de variable dans la densité) :</p>$$\varphi_Y(t) = \mathbb E\big[e^{it(\sigma X+\mu)}\big] = e^{i\mu t}\varphi_X(\sigma t) = e^{i\mu t}e^{-\sigma^2t^2/2}.$$`, ["fnc-edl", "fnc-gauss"]),
    Q(4, "Tous les moments", R`<p>$e^{-t^2/2} = \sum_n\frac{(-1)^nt^{2n}}{2^nn!}$, et $\varphi^{(k)}(0) = i^k\mathbb E[X^k]$.</p>`, R`<p>$X$ a des moments de tout ordre ($x^ke^{-x^2/2}$ est intégrable), donc $\varphi^{(k)}(0) = i^k\mathbb E[X^k]$. Par ailleurs, $\varphi(t) = \sum_{n\geqslant0}\frac{(-1)^n}{2^nn!}t^{2n}$ pour tout $t$, donc $\varphi^{(2n+1)}(0) = 0$ et $\varphi^{(2n)}(0) = (2n)!\frac{(-1)^n}{2^nn!}$. Avec $i^{2n} = (-1)^n$ :</p><div class="sbox">$$\mathbb E[X^{2n+1}] = 0,\qquad\mathbb E[X^{2n}] = \frac{(2n)!}{2^nn!} = 1\times3\times5\times\dots\times(2n-1).$$</div><p>$\mathbb E[X^2] = 1$, $\mathbb E[X^4] = 3$. Vérification par parties : $\int x^4e^{-x^2/2} = \int x^3\cdot xe^{-x^2/2} = 3\int x^2e^{-x^2/2} = 3\int e^{-x^2/2} = 3\sqrt{2\pi}$ (deux intégrations par parties), donc $\mathbb E[X^4] = 3$. ✓</p>${figDens}`)
  ],
  piege: R`Oublier de vérifier que le crochet $\big[-e^{-x^2/2}e^{itx}\big]$ est nul : c'est $|e^{-x^2/2}|\to0$ qui le donne, $e^{itx}$ étant de module $1$.`,
  methode: R`Pour calculer une intégrale à paramètre : trouver une équation différentielle qu'elle vérifie (dériver sous l'intégrale puis intégrer par parties), et la résoudre avec la valeur en un point.`
},

/* ===================== Partie II ===================== */
{ id: "fnc-2", ...P, part: "Partie II", time: "40 min",
  title: "La loi de Cauchy par la transformée de e^(−|x|)",
  enonce: PRE + R`<p><b>Partie II.</b> On <b>admet</b> la formule d'inversion : si $g$ est continue et intégrable sur $\mathbb R$ et si $\hat g(t) = \int g(x)e^{-itx}\,dx$ est intégrable, alors $g(x) = \frac1{2\pi}\int\hat g(t)e^{itx}\,dt$ pour tout $x$.</p><ol start="5">
<li>Soit $g(x) = e^{-|x|}$. Calculer $\hat g$.</li>
<li>En déduire que si $X$ suit la loi $\mathcal C(0,1)$, $\varphi_X(t) = e^{-|t|}$, puis la fonction caractéristique de $\mathcal C(a,b)$.</li>
<li>Montrer que $X$ n'a pas d'espérance. Est-ce cohérent avec la régularité de $\varphi_X$ ?</li>
<li>Soient $X_1,\dots,X_n$ indépendantes de loi $\mathcal C(0,1)$ et $\overline X_n = \frac1n(X_1+\dots+X_n)$. Déterminer la loi de $\overline X_n$. Commenter.</li></ol>`,
  decode: { donnees: [R`$\hat g$ est une fraction rationnelle : c'est elle qui fera apparaître la densité de Cauchy.`], but: R`Échanger les rôles : la transformée de $e^{-|x|}$ est (à constante près) la densité de Cauchy, donc la transformée de la densité de Cauchy est $e^{-|t|}$.`, cles: {} },
  steps: [
    Q(5, "Transformée de e^(−|x|)", R`<p>Coupe en $x\lt 0$ et $x>0$.</p>`, R`$$\hat g(t) = \int_{-\infty}^0e^{x}e^{-itx}\,dx+\int_0^{+\infty}e^{-x}e^{-itx}\,dx = \Big[\frac{e^{(1-it)x}}{1-it}\Big]_{-\infty}^0+\Big[\frac{e^{-(1+it)x}}{-(1+it)}\Big]_0^{+\infty} = \frac1{1-it}+\frac1{1+it}.$$<div class="sbox">$$\hat g(t) = \frac{(1+it)+(1-it)}{1+t^2} = \frac2{1+t^2}.$$</div>`),
    Q(6, "Inversion", R`<p>$g$ et $\hat g$ sont intégrables. Remplace $x$ par $t$ et la variable d'intégration par $x$.</p>`, R`<p>$g$ est continue intégrable, $\hat g$ intégrable : la formule d'inversion donne, pour tout réel $s$ :</p>$$e^{-|s|} = \frac1{2\pi}\int\frac2{1+x^2}e^{isx}\,dx = \int e^{isx}\frac1{\pi(1+x^2)}\,dx = \varphi_X(s).$$<div class="sbox">$$\varphi_{\mathcal C(0,1)}(t) = e^{-|t|}.$$</div><p>Si $X\sim\mathcal C(0,1)$, $Y = bX+a$ suit $\mathcal C(a,b)$ (changement de variable $y = bx+a$ dans la densité), et $\varphi_Y(t) = e^{iat}\varphi_X(bt) = e^{iat}e^{-b|t|}$.</p>${figPhi}`),
    Q(7, "Pas d'espérance", R`<p>$\frac{|x|}{\pi(1+x^2)}\sim\frac1{\pi|x|}$.</p>`, R`<p>$\frac{|x|}{\pi(1+x^2)}\sim\frac1{\pi|x|}$ en $\pm\infty$, non intégrable : $\mathbb E[|X|] = +\infty$. C'est cohérent : $e^{-|t|}$ n'est pas dérivable en $0$ (dérivées à gauche $1$ et à droite $-1$), alors qu'une espérance finie rendrait $\varphi$ de classe $\mathcal C^1$.</p>`),
    Q(8, "La moyenne ne se stabilise pas", R`<p>$\varphi_{\overline X_n}(t) = \prod\varphi_{X_k}(t/n)$.</p>`, R`<p>Par indépendance :</p>$$\varphi_{\overline X_n}(t) = \mathbb E\Big[e^{i\frac tn(X_1+\dots+X_n)}\Big] = \prod_{k=1}^n\varphi_{X_k}\Big(\frac tn\Big) = \big(e^{-|t|/n}\big)^n = e^{-|t|}.$$<div class="sbox">$$\overline X_n\sim\mathcal C(0,1)\quad\text{pour tout}\ n.$$</div><p>La moyenne de $n$ observations a exactement la même dispersion qu'une seule : elle ne converge vers aucune constante. La loi des grands nombres ne s'applique pas, faute d'espérance.</p>`)
  ],
  piege: R`Appliquer la loi des grands nombres à la loi de Cauchy « parce qu'elle est symétrique » : sans espérance, la moyenne empirique ne converge pas.`,
  methode: R`Dualité : si $\hat g$ est connue et intégrable, l'inversion de Fourier donne la transformée de $\hat g$. On calcule la transformée de la fonction simple pour obtenir celle de la fonction compliquée.`
},

/* ===================== Partie III ===================== */
{ id: "fnc-3", ...P, part: "Partie III", time: "35 min",
  title: "La loi de Cauchy par les résidus",
  enonce: PRE + R`<p><b>Partie III.</b> On admet le théorème des résidus (voir le rappel). Soit $t\geqslant0$, $g(z) = \dfrac{e^{itz}}{1+z^2}$ pour $z\in\mathbb C\setminus\{i,-i\}$, et pour $R>1$, $\Gamma_R$ le contour formé du segment $[-R,R]$ et du demi-cercle $\gamma_R : \theta\in[0,\pi]\mapsto Re^{i\theta}$.</p>` + figCont + R`<ol start="9">
<li>Calculer le résidu de $g$ en $i$ et en déduire $\oint_{\Gamma_R}g$.</li>
<li>Montrer que $\Big|\displaystyle\int_{\gamma_R}g\Big|\leqslant\dfrac{\pi R}{R^2-1}$.</li>
<li>Conclure que $\varphi_{\mathcal C(0,1)}(t) = e^{-t}$ pour $t\geqslant0$, puis pour tout $t$. Pourquoi faut-il fermer le contour vers le bas quand $t\lt 0$ ?</li></ol>`,
  decode: { donnees: [R`Pour $z = x+iy$ avec $y\geqslant0$ : $|e^{itz}| = e^{-ty}\leqslant1$ si $t\geqslant0$.`], but: R`Retrouver $e^{-|t|}$ par un calcul d'intégrale complexe.`, cles: {} },
  steps: [
    Q(9, "Le résidu en i", R`<p>$1+z^2 = (z-i)(z+i)$.</p>`, R`$$\operatorname{Res}_ig = \lim_{z\to i}(z-i)\frac{e^{itz}}{(z-i)(z+i)} = \frac{e^{it\cdot i}}{2i} = \frac{e^{-t}}{2i}.$$<p>Pour $R>1$, $i$ est le seul pôle à l'intérieur de $\Gamma_R$ ($-i$ est en dessous de l'axe réel), donc</p><div class="sbox">$$\int_{-R}^R\frac{e^{itx}}{1+x^2}\,dx+\int_{\gamma_R}g = 2i\pi\cdot\frac{e^{-t}}{2i} = \pi e^{-t}.$$</div>`, ["fnc-res"]),
    Q(10, "Le demi-cercle disparaît", R`<p>Sur $\gamma_R$ : $|e^{itz}| = e^{-tR\sin\theta}\leqslant1$ et $|1+z^2|\geqslant R^2-1$.</p>`, R`<p>Pour $z = Re^{i\theta}$, $\theta\in[0,\pi]$ : $|e^{itz}| = e^{-tR\sin\theta}\leqslant1$ ($t\geqslant0$, $\sin\theta\geqslant0$) et, par l'inégalité triangulaire renversée, $|1+z^2|\geqslant|z|^2-1 = R^2-1$. La longueur de $\gamma_R$ est $\pi R$, donc</p><div class="sbox">$$\Big|\int_{\gamma_R}g\Big|\leqslant\pi R\cdot\frac1{R^2-1}\xrightarrow[R\to+\infty]{}0.$$</div>`),
    Q(11, "Conclusion", R`<p>Fais $R\to+\infty$ ; pour $t\lt 0$, utilise la parité ou le demi-cercle inférieur.</p>`, R`<p>$\frac{e^{itx}}{1+x^2}$ est intégrable sur $\mathbb R$, donc $\int_{-R}^R\to\int_{\mathbb R}$. En passant à la limite dans Q9 :</p>$$\int_{\mathbb R}\frac{e^{itx}}{1+x^2}\,dx = \pi e^{-t},\qquad\varphi(t) = \frac1\pi\cdot\pi e^{-t} = e^{-t}\quad(t\geqslant0).$$<p>La densité est paire, donc $\varphi(-t) = \varphi(t)$ et $\varphi(t) = e^{-|t|}$ pour tout $t$, comme en Partie II. ✓</p><p>Pour $t\lt 0$, $|e^{itz}| = e^{-ty}$ <b>explose</b> quand $y\to+\infty$ : il faudrait fermer par le demi-cercle inférieur, qui entoure $-i$ (dans le sens indirect), et on obtient $-2i\pi\operatorname{Res}_{-i}g = -2i\pi\frac{e^{t}}{-2i} = \pi e^{t}$, soit encore $\pi e^{-|t|}$.</p>`)
  ],
  piege: R`Fermer le contour du mauvais côté : le choix du demi-plan dépend du signe de $t$, pour que $e^{itz}$ reste borné sur l'arc.`,
  methode: R`Intégrale de $\frac{e^{itx}}{Q(x)}$ sur $\mathbb R$ : fermer par un demi-cercle dans le demi-plan où $e^{itz}$ est borné, montrer que l'arc tend vers $0$, et sommer les résidus.`
}
]);
})();

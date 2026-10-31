
/* ===== Khôlles MP ===== */
/* ---------- MP · 0. Polynômes et approximation · 1. Séries de fonctions · 2. Intégration ---------- */
LEMME.rappels({
  "k-cauchy-unif": { t: "Critère de Cauchy uniforme", b: R`<p>$(f_n)$ converge uniformément sur $I$ si et seulement si</p><div class="sbox">$$\forall\varepsilon>0,\ \exists N,\ \forall n,m\geqslant N,\quad\sup_I|f_n-f_m|\leqslant\varepsilon.$$</div><p>Le sens direct est immédiat : $|f_n-f_m|\leqslant|f_n-f|+|f-f_m|$.</p>` },
  "k-poly-borne": { t: "Polynôme borné sur un ensemble non borné", b: R`<p>Un polynôme non constant tend vers $\pm\infty$ en $\pm\infty$. Donc :</p><div class="sbox">$$P\ \text{borné sur une partie non bornée de}\ \mathbb R\ \Longrightarrow\ P\ \text{constant}.$$</div>` },
  "k-bt": { t: "Inégalité de Bienaymé-Tchebychev", b: R`<p>Si $X$ admet une variance :</p><div class="sbox">$$\forall\alpha>0,\qquad P\big(|X-E(X)|\geqslant\alpha\big)\leqslant\frac{V(X)}{\alpha^2}.$$</div>` },
  "k-abel": { t: "Transformation d'Abel", b: R`<p>Avec $A_k = a_0+\dots+a_k$ (et $A_{-1} = 0$), on écrit $a_k = A_k-A_{k-1}$ et on regroupe :</p><div class="sbox">$$\sum_{k=0}^na_kb_k = A_nb_n+\sum_{k=0}^{n-1}A_k(b_k-b_{k+1}).$$</div><p>C'est une « intégration par parties discrète ».</p>` },
  "k-param-cont": { t: "Continuité d'une intégrale à paramètre", b: R`<p>Si $x\mapsto f(x,t)$ est continue, $t\mapsto f(x,t)$ continue par morceaux, et s'il existe $g$ intégrable avec</p><div class="sbox">$$|f(x,t)|\leqslant g(t)\quad\text{pour tout}\ x\in[a,b]\ \text{et tout}\ t,$$</div><p>alors $x\mapsto\int f(x,t)\,dt$ est continue sur $[a,b]$. On domine sur des segments, puis on conclut sur tout l'intervalle.</p>` },
  "k-param-der": { t: "Dérivation sous l'intégrale", b: R`<p>Si de plus $\frac{\partial f}{\partial x}$ existe, est continue en $x$, continue par morceaux en $t$, et dominée par une $h$ intégrable (sur chaque segment $[a,b]$), alors</p><div class="sbox">$$\frac{d}{dx}\int f(x,t)\,dt = \int\frac{\partial f}{\partial x}(x,t)\,dt.$$</div>` }
});

(() => {
const { FIG, S, f1, GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "kh-4-9", subj: "kholles", year: "mp", chap: 0, level: 3, time: "20 min",
  title: "Limite uniforme de polynômes sur un ensemble non borné",
  enonce: R`<p>Soit $I\subset\mathbb R$ une partie non bornée, $f : I\to\mathbb R$, et $(P_n)$ une suite de fonctions polynomiales qui converge uniformément vers $f$ sur $I$.</p><ol><li>Montrer qu'il existe $N$ tel que, pour tout $n\geqslant N$, $P_n-P_N$ est constant sur $I$.</li><li>En déduire que $f$ est polynomiale.</li><li>Montrer que l'hypothèse « $I$ non borné » est indispensable.</li></ol>`,
  decode: { donnees: [R`$\sup_I|P_n-f|\to0$ et $I$ non borné.`], but: R`Montrer que la limite est encore un polynôme.`, cles: {
    cauchy: R`À partir d'un rang $N$, $\sup_I|P_n-P_N|\leqslant1$ : la différence $P_n-P_N$ est un polynôme <b>borné</b> sur $I$.`,
    cst: R`$P_n-P_N = c_n$ (constante) ; en un point $x_0\in I$ fixé, $c_n = P_n(x_0)-P_N(x_0)\to f(x_0)-P_N(x_0)$.`,
    taylor: R`$T_n(x) = \sum_{k=0}^n\frac{x^k}{k!}$ converge uniformément vers $e^x$ sur $[0,1]$, et $e^x$ n'est pas polynomiale (toutes ses dérivées valent $1$ en $0$).` } },
  steps: [
    { q: 1, t: "Cauchy uniforme", h: R`<p>Une suite qui converge uniformément est uniformément de Cauchy : <span data-k="cauchy">les $P_n-P_N$ sont bornés sur $I$</span>. Or un polynôme borné sur un ensemble non borné est constant.</p>`, b: R`<p>Il existe $N$ tel que $\sup_I|P_n-f|\leqslant\frac12$ pour $n\geqslant N$. Alors <span data-k="cauchy">$\sup_I|P_n-P_N|\leqslant1$</span>. Le polynôme $P_n-P_N$ est borné sur $I$ non borné, donc constant.</p>`, rappels: ["k-cauchy-unif", "k-poly-borne"] },
    { q: 2, t: "Passer à la limite", h: R`<p>On écrit <span data-k="cst">$P_n = P_N+c_n$</span>. La suite de constantes $(c_n)$ converge (on le voit en un point), et la limite est $P_N+c$.</p>`, b: R`<p>$P_n = P_N+c_n$ pour $n\geqslant N$. En $x_0\in I$ : <span data-k="cst">$c_n\to c = f(x_0)-P_N(x_0)$</span>. Puis pour tout $x\in I$ : $f(x) = \lim P_n(x) = P_N(x)+c$.</p><div class="sbox">$$f = P_N+c\ \text{est polynomiale sur}\ I.$$</div><p>Attention : la suite n'est pas forcément stationnaire. Exemple : $P_n(x) = x+\frac1n$ converge uniformément vers $x$ sur $\mathbb R$.</p>` },
    { q: 3, t: "Sur un segment, c'est faux", h: R`<p>Sur un segment, <span data-k="taylor">les sommes de Taylor de l'exponentielle</span> convergent uniformément.</p>`, b: R`<p>Sur $[0,1]$ : $|e^x-T_n(x)|\leqslant\frac{e}{(n+1)!}$ (Taylor-Lagrange), donc <span data-k="taylor">$T_n\to\exp$ uniformément</span>, et $\exp$ n'est pas polynomiale. (Plus fort : par le théorème de Weierstrass, toute fonction continue sur un segment est limite uniforme de polynômes.) Sur $\mathbb R$, en revanche, $T_n-\exp$ n'est même pas bornée.</p>` }
  ],
  ctx: { "k-cauchy-unif": R`<p>Avec $\varepsilon = 1$ : $\sup_I|P_n-P_N|\leqslant1$.</p>`, "k-poly-borne": R`<p>$P_n-P_N$ borné sur $I$ non borné.</p>` },
  piege: R`Conclure que $P_n = P_N$ pour $n\geqslant N$ : la différence est constante, pas forcément nulle.`,
  methode: R`Limite uniforme sur un ensemble non borné : les différences $P_n-P_N$ sont bornées, donc constantes.`
},
{
  id: "kh-4-10", subj: "kholles", year: "mp", chap: 0, level: 4, time: "45 min",
  title: "Polynômes de Bernstein et théorème de Weierstrass",
  enonce: R`<p>Soit $f : [0,1]\to\mathbb R$ continue. Pour $n\geqslant1$, on pose $B_n(f)(x) = \displaystyle\sum_{k=0}^nf\left(\frac kn\right)\binom nkx^k(1-x)^{n-k}$.</p><ol><li>Soit $x\in[0,1]$ et $Z\sim\mathcal B(n,x)$. Montrer que $B_n(f)(x) = E\left(f\left(\frac Zn\right)\right)$. Calculer $B_n(f)$ pour $f = 1$ et $f(t) = t$.</li><li>Soit $\delta>0$. Montrer que $\displaystyle\sum_{|k/n-x|\geqslant\delta}\binom nkx^k(1-x)^{n-k}\leqslant\frac{1}{4n\delta^2}$.</li><li>Montrer que $B_n(f)$ converge uniformément vers $f$ sur $[0,1]$.</li><li>En déduire le théorème de Weierstrass sur un segment $[a,b]$ quelconque.</li></ol>`,
  decode: { donnees: [R`$f$ continue sur un segment : bornée par $M$ et uniformément continue.`], but: R`Approcher uniformément $f$ par des polynômes explicites.`, cles: {
    proba: R`$P(Z = k) = \binom nkx^k(1-x)^{n-k}$ : $B_n(f)(x)$ est la moyenne des valeurs $f(k/n)$ pondérées par ces probabilités.`,
    bt: R`$E(Z) = nx$, $V(Z) = nx(1-x)\leqslant\frac n4$. L'événement $|\frac Zn-x|\geqslant\delta$ est $|Z-nx|\geqslant n\delta$.`,
    coupe: R`On coupe la somme en deux : les $k$ proches de $nx$ (où $f(k/n)\approx f(x)$ par continuité uniforme) et les autres (de probabilité totale petite, et $|f(x)-f(k/n)|\leqslant2M$).` } },
  steps: [
    { q: 1, t: "Une espérance", h: R`<p>Les coefficients <span data-k="proba">sont les probabilités d'une loi binomiale</span> : la formule de transfert donne $E(f(Z/n))$.</p>`, b: R`<p>Par la formule de transfert, $E\left(f\left(\frac Zn\right)\right) = \sum_kf\left(\frac kn\right)P(Z = k) = B_n(f)(x)$.</p><ul><li>$f = 1$ : $B_n(1) = \sum_kP(Z = k) = 1$.</li><li>$f(t) = t$ : $B_n(f)(x) = E\left(\frac Zn\right) = \frac{nx}n = x$.</li></ul><p>$B_n$ reproduit exactement les fonctions affines.</p>`, rappels: ["o-c-transfert", "o-c-binom"] },
    { q: 2, t: "Bienaymé-Tchebychev", h: R`<p>La somme est la probabilité que $Z/n$ s'écarte de sa moyenne d'au moins $\delta$ : <span data-k="bt">Bienaymé-Tchebychev</span>, puis $x(1-x)\leqslant\frac14$.</p>`, b: R`$$\sum_{|k/n-x|\geqslant\delta}P(Z = k) = P\big(|Z-nx|\geqslant n\delta\big)\leqslant\frac{V(Z)}{n^2\delta^2} = \frac{x(1-x)}{n\delta^2}\leqslant\frac1{4n\delta^2}.$$<p>La borne ne dépend pas de $x$ : c'est ce qui donnera l'uniformité.</p>`, rappels: ["k-bt"] },
    { q: 3, t: "Écrire l'écart", h: R`<p>Grâce à $B_n(1) = 1$, on peut faire rentrer $f(x)$ dans la somme : l'écart devient une moyenne des écarts $f(x)-f(k/n)$.</p>`, b: R`<p>Comme $\sum_kP(Z = k) = 1$ :</p>$$|f(x)-B_n(f)(x)| = \Big|\sum_k\big(f(x)-f(\tfrac kn)\big)P(Z = k)\Big|\leqslant\sum_k\big|f(x)-f(\tfrac kn)\big|P(Z = k).$$` },
    { q: 3, t: "Couper en deux", h: R`<p><span data-k="coupe">Près de $x$</span>, la continuité uniforme rend chaque écart petit. Loin, l'écart est au plus $2M$ mais le poids total est petit (question 2).</p>`, b: R`<p>Soit $\varepsilon>0$. Par Heine, il existe $\delta>0$ tel que $|s-t|< \delta\Rightarrow|f(s)-f(t)|\leqslant\frac\varepsilon2$. Soit $M = \sup|f|$. En coupant la somme :</p>$$|f(x)-B_n(f)(x)|\leqslant\frac\varepsilon2\sum_{|k/n-x|< \delta}P(Z = k)+2M\sum_{|k/n-x|\geqslant\delta}P(Z = k)\leqslant\frac\varepsilon2+\frac{2M}{4n\delta^2}.$$<p>Pour $n\geqslant\frac{M}{\varepsilon\delta^2}$, le second terme est $\leqslant\frac\varepsilon2$, <b>pour tout $x$</b> :</p><div class="sbox">$$\sup_{[0,1]}|f-B_n(f)|\xrightarrow[n\to\infty]{}0.$$</div>` + GRAPH({ w: 420, h: 220, x: [0, 1], y: [-0.02, 0.55], xt: [0, 0.5, 1], yt: [0.25, 0.5], curves: [{ f: x => Math.abs(x - 0.5), c: "k", lab: [0.05, 0.5, "f"] }, ...[4, 16, 64].map((n, i) => ({ f: x => { let s = 0, c = 1; for (let k = 0; k <= n; k++) { if (k) c = c * (n - k + 1) / k; s += Math.abs(k / n - 0.5) * c * x ** k * (1 - x) ** (n - k); } return s; }, c: ["r", "g", "b"][i], dash: i < 2 ? 1 : 0, lab: [0.5, [0.2, 0.11, 0.05][i] + 0.02, "B" + n] }))] }, R`$f(x) = |x-\frac12|$ et ses polynômes de Bernstein $B_4$, $B_{16}$, $B_{64}$ : ils se rapprochent uniformément de $f$, lentement près du coin.`, "Polynômes de Bernstein"), rappels: ["k-heine"] },
    { q: 4, t: "Sur un segment quelconque", h: R`<p>On se ramène à $[0,1]$ par un changement de variable affine, qui transforme polynômes en polynômes.</p>`, b: R`<p>Soit $g$ continue sur $[a,b]$ et $f(t) = g(a+t(b-a))$, continue sur $[0,1]$. Les polynômes $Q_n(x) = B_n(f)\left(\frac{x-a}{b-a}\right)$ vérifient $\sup_{[a,b]}|g-Q_n| = \sup_{[0,1]}|f-B_n(f)|\to0$.</p><div class="sbox">$$\text{Toute fonction continue sur un segment est limite uniforme de polynômes.}$$</div>` }
  ],
  ctx: { "o-c-transfert": R`<p>$E(f(Z/n)) = \sum_kf(k/n)P(Z = k)$.</p>`, "o-c-binom": R`<p>$Z\sim\mathcal B(n,x)$ : $E(Z) = nx$, $V(Z) = nx(1-x)$.</p>`, "k-bt": R`<p>Avec $\alpha = n\delta$.</p>`, "k-heine": R`<p>$f$ continue sur le segment $[0,1]$.</p>` },
  piege: R`Prendre $\delta$ dépendant de $x$ (continuité simple) : on perdrait l'uniformité. Il faut la continuité <b>uniforme</b> (Heine).`,
  methode: R`Interpréter une somme pondérée par des $\binom nkx^k(1-x)^{n-k}$ comme une espérance, et contrôler les écarts avec Bienaymé-Tchebychev.`
},
{
  id: "kh-7-1", subj: "kholles", year: "mp", chap: 1, level: 4, time: "35 min",
  title: "Transformation d'Abel et convergence uniforme",
  enonce: R`<p>Soit $(a_k)$ une suite complexe dont les sommes partielles $A_n = \sum_{k=0}^na_k$ sont bornées par $M$, et $(b_k)$ une suite réelle décroissante de limite nulle.</p><ol><li>Montrer que $\displaystyle\sum_{k=0}^na_kb_k = A_nb_n+\sum_{k=0}^{n-1}A_k(b_k-b_{k+1})$.</li><li>En déduire que $\sum a_kb_k$ converge et que son reste vérifie $\Big|\sum_{k>n}a_kb_k\Big|\leqslant2Mb_n$.</li><li>Retrouver le critère des séries alternées.</li><li>Soit $\delta\in\,]0,\pi[$. Montrer que $\sum_{k\geqslant1}\frac{\sin(kx)}k$ converge uniformément sur $[\delta,2\pi-\delta]$.</li><li>Montrer que la convergence n'est pas uniforme sur $]0,\pi]$.</li></ol>`,
  decode: { donnees: [R`$|A_n|\leqslant M$ ; $b_k\searrow0$, donc $b_k-b_{k+1}\geqslant0$.`], but: R`Un critère de convergence pour des séries qui ne convergent pas absolument.`, cles: {
    telesc: R`$\sum_{k\geqslant n}(b_k-b_{k+1}) = b_n$ (somme télescopique, $b_k\to0$).`,
    borne: R`$\Big|\sum_{k=1}^n\sin(kx)\Big|\leqslant\frac1{|\sin(x/2)|}\leqslant\frac1{\sin(\delta/2)}$ pour $x\in[\delta,2\pi-\delta]$.`,
    paquet: R`Avec $x_n = \frac{\pi}{4n}$ : pour $n< k\leqslant2n$, $kx_n\in\left]\frac\pi4,\frac\pi2\right]$ donc $\sin(kx_n)\geqslant\frac{\sqrt2}2$.` } },
  steps: [
    { q: 1, t: "La transformation d'Abel", h: R`<p>On remplace $a_k$ par $A_k-A_{k-1}$ et on regroupe les termes en $A_k$ : c'est une intégration par parties pour les sommes.</p>`, b: R`<p>Avec $A_{-1} = 0$ :</p>$$\sum_{k=0}^na_kb_k = \sum_{k=0}^nA_kb_k-\sum_{k=0}^{n}A_{k-1}b_k = \sum_{k=0}^nA_kb_k-\sum_{k=0}^{n-1}A_kb_{k+1} = A_nb_n+\sum_{k=0}^{n-1}A_k(b_k-b_{k+1}).$$`, rappels: ["k-abel"] },
    { q: 2, t: "Convergence", h: R`<p>$A_nb_n\to0$ (borné fois tend vers $0$). La série $\sum A_k(b_k-b_{k+1})$ converge absolument : <span data-k="telesc">ses termes sont dominés par une série télescopique</span>.</p>`, b: R`<p>$|A_nb_n|\leqslant Mb_n\to0$. Et $|A_k(b_k-b_{k+1})|\leqslant M(b_k-b_{k+1})$, terme positif d'une série convergente (<span data-k="telesc">télescopique</span>). Donc $\sum A_k(b_k-b_{k+1})$ converge absolument, et $\sum a_kb_k$ converge.</p>`, rappels: ["o-a-cv-abs", "borne-zero"] },
    { q: 2, t: "Le reste", h: R`<p>On passe à la limite dans la transformation d'Abel et on soustrait : le reste s'écrit avec $A_nb_n$ et la queue de la série télescopique.</p>`, b: R`<p>En faisant $n\to\infty$ : $S = \sum_{k\geqslant0}A_k(b_k-b_{k+1})$. Donc</p>$$S-\sum_{k=0}^na_kb_k = -A_nb_n+\sum_{k\geqslant n}A_k(b_k-b_{k+1}),$$<div class="sbox">$$\Big|\sum_{k>n}a_kb_k\Big|\leqslant Mb_n+M\sum_{k\geqslant n}(b_k-b_{k+1}) = 2Mb_n.$$</div>` },
    { q: 3, t: "Séries alternées", h: R`<p>$a_k = (-1)^k$ : les sommes partielles valent $1$ ou $0$.</p>`, b: R`<p>Avec $a_k = (-1)^k$, $A_n\in\{0,1\}$ : $M = 1$. Le critère donne la convergence de $\sum(-1)^kb_k$ et $|R_n|\leqslant2b_n$ (le critère spécial donne même $|R_n|\leqslant b_{n+1}$).</p>` },
    { q: 4, t: "La série des sin(kx)/k", h: R`<p>$a_k = \sin(kx)$, $b_k = \frac1k$. Les sommes partielles de sinus sont bornées <span data-k="borne">par $\frac1{|\sin(x/2)|}$</span>, uniformément si on reste loin de $0$ et $2\pi$.</p>`, b: R`<p>D'après le calcul de $\sum\sin(kx)$ (exercice des sommes trigonométriques), pour $x\in[\delta,2\pi-\delta]$ : <span data-k="borne">$|A_n(x)|\leqslant\frac1{\sin(\delta/2)} = M$</span>, indépendant de $x$. Le reste vérifie donc</p>$$\sup_{x\in[\delta,2\pi-\delta]}\Big|\sum_{k>n}\frac{\sin(kx)}k\Big|\leqslant\frac{2M}{n}\xrightarrow[n\to\infty]{}0.$$<p>La convergence est uniforme sur $[\delta,2\pi-\delta]$.</p>`, rappels: ["o-a-cvu-majorer"] },
    { q: 5, t: "Pas uniforme près de 0", h: R`<p>Si la convergence était uniforme, les « paquets » $\sum_{k=n+1}^{2n}$ tendraient vers $0$ uniformément (Cauchy). On choisit $x$ de l'ordre de $\frac1n$ pour que <span data-k="paquet">tous les sinus du paquet soient grands</span>.</p>`, b: R`<p>Avec $x_n = \frac\pi{4n}\in\,]0,\pi]$ : <span data-k="paquet">$\sin(kx_n)\geqslant\frac{\sqrt2}2$ pour $n< k\leqslant2n$</span>, donc</p>$$\sum_{k=n+1}^{2n}\frac{\sin(kx_n)}k\geqslant\frac{\sqrt2}2\sum_{k=n+1}^{2n}\frac1{2n} = \frac{\sqrt2}4.$$<p>Le critère de Cauchy uniforme est mis en défaut : la convergence n'est pas uniforme sur $]0,\pi]$. (La somme vaut $\frac{\pi-x}2$ sur $]0,2\pi[$ et $0$ en $0$ : elle saute en $0$.)</p>`, rappels: ["k-cauchy-unif"] }
  ],
  ctx: { "k-abel": R`<p>Avec $A_{-1} = 0$.</p>`, "o-a-cv-abs": R`<p>Pour $\sum A_k(b_k-b_{k+1})$.</p>`, "borne-zero": R`<p>$A_n$ borné, $b_n\to0$.</p>`, "o-a-cvu-majorer": R`<p>Majoration du reste indépendante de $x$.</p>`, "k-cauchy-unif": R`<p>Sous forme de série : $\sup_x\big|\sum_{k=n+1}^{m}u_k(x)\big|\to0$.</p>` },
  piege: R`Oublier que $b_k-b_{k+1}\geqslant0$ : c'est la décroissance qui permet de majorer $\sum|A_k|(b_k-b_{k+1})$ par une somme télescopique.`,
  methode: R`Série $\sum a_kb_k$ avec $\sum a_k$ à sommes bornées et $b_k\searrow0$ : transformation d'Abel, reste $\leqslant2Mb_n$.`
},
{
  id: "kh-8-1", subj: "kholles", year: "mp", chap: 2, level: 4, time: "50 min",
  title: "La fonction Gamma d'Euler",
  enonce: R`<p>On pose $\Gamma(x) = \displaystyle\int_0^{+\infty}t^{x-1}e^{-t}\,dt$.</p><ol><li>Montrer que $\Gamma$ est définie sur $]0,+\infty[$.</li><li>Montrer que $\Gamma(x+1) = x\Gamma(x)$, puis $\Gamma(n+1) = n!$.</li><li>Calculer $\Gamma\left(\frac12\right)$ (on admet $\int_{-\infty}^{+\infty}e^{-u^2}du = \sqrt\pi$), puis $\Gamma\left(n+\frac12\right)$.</li><li>Montrer que $\Gamma$ est continue, puis de classe $\mathcal C^\infty$ sur $]0,+\infty[$ avec $\Gamma^{(k)}(x) = \int_0^{+\infty}(\ln t)^kt^{x-1}e^{-t}dt$.</li><li>Montrer que $\Gamma(x)\underset{0^+}{\sim}\frac1x$.</li><li>Montrer que $\Gamma$ est convexe, et étudier ses variations.</li></ol>`,
  decode: { donnees: [R`L'intégrande est continue et positive sur $]0,+\infty[$, avec deux bornes à étudier.`], but: R`Étudier la fonction qui prolonge la factorielle.`, cles: {
    bornes: R`En $0$ : $t^{x-1}e^{-t}\sim t^{x-1} = \frac1{t^{1-x}}$, intégrable si $1-x< 1$. En $+\infty$ : $t^{x-1}e^{-t} = o\left(\frac1{t^2}\right)$ par croissances comparées.`,
    dom: R`Pour $x\in[a,b]\subset\,]0,+\infty[$ : $t^{x-1}\leqslant t^{a-1}$ si $t\leqslant1$ et $t^{x-1}\leqslant t^{b-1}$ si $t\geqslant1$. Donc $t^{x-1}\leqslant t^{a-1}+t^{b-1}$ pour tout $t>0$.`,
    cdv: R`$t = u^2$, $dt = 2u\,du$ : $\int_0^{+\infty}t^{-1/2}e^{-t}dt = \int_0^{+\infty}\frac1ue^{-u^2}2u\,du = 2\int_0^{+\infty}e^{-u^2}du$.`,
    rolle: R`$\Gamma(1) = \Gamma(2) = 1$ : par Rolle, $\Gamma'$ s'annule en un $c\in\,]1,2[$, et une seule fois car $\Gamma'$ est strictement croissante.` } },
  steps: [
    { q: 1, t: "Domaine de définition", h: R`<p>Deux problèmes : en $0$ (si $x< 1$) et en $+\infty$. On <span data-k="bornes">compare à des intégrales de Riemann</span>.</p>`, b: R`<p>L'intégrande est continue et positive sur $]0,+\infty[$.</p><ul><li>En $0$ : <span data-k="bornes">$t^{x-1}e^{-t}\sim\frac1{t^{1-x}}$</span>, intégrable sur $]0,1]$ si et seulement si $1-x< 1$, soit $x>0$.</li><li>En $+\infty$ : $t^2\cdot t^{x-1}e^{-t}\to0$, donc $t^{x-1}e^{-t} = o(\frac1{t^2})$, intégrable sur $[1,+\infty[$.</li></ul><p>$\Gamma$ est définie exactement sur $]0,+\infty[$.</p>`, rappels: ["o-a-integ-comp", "o-a-riemann-int"] },
    { q: 2, t: "L'équation fonctionnelle", h: R`<p>On intègre par parties en dérivant $t^x$ : il apparaît $xt^{x-1}$. Les crochets sont nuls aux deux bornes.</p>`, b: R`<p>Pour $x>0$, sur $[\varepsilon,A]$ puis en passant à la limite :</p>$$\Gamma(x+1) = \Big[-t^xe^{-t}\Big]_0^{+\infty}+x\int_0^{+\infty}t^{x-1}e^{-t}dt = x\Gamma(x),$$<p>car $t^xe^{-t}\to0$ en $0^+$ ($x>0$) et en $+\infty$. Avec $\Gamma(1) = \int_0^{+\infty}e^{-t}dt = 1$ et une récurrence :</p><div class="sbox">$$\Gamma(x+1) = x\Gamma(x),\qquad\Gamma(n+1) = n!.$$</div>`, rappels: ["o-a-ipp"] },
    { q: 3, t: "Les demi-entiers", h: R`<p>Le changement de variable <span data-k="cdv">$t = u^2$</span> fait apparaître l'intégrale de Gauss. Puis on descend avec l'équation fonctionnelle.</p>`, b: R`<p><span data-k="cdv">$\Gamma\left(\frac12\right) = 2\int_0^{+\infty}e^{-u^2}du = \sqrt\pi$</span> (par parité). Puis</p>$$\Gamma\left(n+\tfrac12\right) = \left(n-\tfrac12\right)\left(n-\tfrac32\right)\cdots\tfrac12\,\Gamma\left(\tfrac12\right) = \frac{(2n-1)(2n-3)\cdots1}{2^n}\sqrt\pi = \frac{(2n)!}{4^nn!}\sqrt\pi.$$<p>Exemple : $\Gamma\left(\frac52\right) = \frac32\cdot\frac12\sqrt\pi = \frac{3\sqrt\pi}4$, et la formule donne $\frac{24}{16\cdot2}\sqrt\pi = \frac34\sqrt\pi$.</p>`, rappels: ["o-a-gauss"] },
    { q: 4, t: "Continuité et classe C∞", h: R`<p>Théorèmes des intégrales à paramètre, avec une <span data-k="dom">domination sur chaque segment $[a,b]$</span> : la puissance $t^{x-1}$ se majore par celle de $a$ près de $0$, par celle de $b$ près de $+\infty$.</p>`, b: R`<p>Soit $[a,b]\subset\,]0,+\infty[$. Pour $x\in[a,b]$ et $t>0$ :</p>$$\left|\frac{\partial^k}{\partial x^k}\big(t^{x-1}e^{-t}\big)\right| = |\ln t|^kt^{x-1}e^{-t}\leqslant|\ln t|^k\big(t^{a-1}+t^{b-1}\big)e^{-t} = h_k(t).$$<p>$h_k$ est intégrable sur $]0,+\infty[$ : en $0$, $|\ln t|^kt^{a-1} = o(t^{a/2-1})$ ; en $+\infty$, $h_k(t) = o(\frac1{t^2})$. Les hypothèses de continuité et de dérivation sous l'intégrale sont vérifiées à tout ordre :</p><div class="sbox">$$\Gamma\in\mathcal C^\infty(]0,+\infty[),\qquad\Gamma^{(k)}(x) = \int_0^{+\infty}(\ln t)^kt^{x-1}e^{-t}dt.$$</div>`, rappels: ["k-param-cont", "k-param-der"] },
    { q: 5, t: "Comportement en 0", h: R`<p>$\Gamma(x) = \frac{\Gamma(x+1)}x$ et $\Gamma$ est continue en $1$.</p>`, b: R`<p>$x\Gamma(x) = \Gamma(x+1)\xrightarrow[x\to0^+]{}\Gamma(1) = 1$ par continuité. Donc</p><div class="sbox">$$\Gamma(x)\underset{x\to0^+}{\sim}\frac1x.$$</div>` },
    { q: 6, t: "Convexité et variations", h: R`<p>$\Gamma'' = \int(\ln t)^2t^{x-1}e^{-t}>0$. Pour le minimum : <span data-k="rolle">$\Gamma(1) = \Gamma(2)$</span>.</p>`, b: R`<p>$\Gamma''(x)>0$ (intégrale d'une fonction continue positive non nulle) : $\Gamma$ est strictement convexe et $\Gamma'$ strictement croissante. <span data-k="rolle">Par Rolle sur $[1,2]$</span>, $\Gamma'(c) = 0$ pour un unique $c\in\,]1,2[$. Donc $\Gamma$ décroît sur $]0,c]$, croît sur $[c,+\infty[$, avec $\Gamma\to+\infty$ en $0^+$ et en $+\infty$ (car $\Gamma(n+1) = n!$ et $\Gamma$ croît). Numériquement $c\approx1{,}46$ et $\Gamma(c)\approx0{,}886$.</p>` + GRAPH({ w: 420, h: 240, x: [0, 4.3], y: [0, 7], xt: [1, 2, 3, 4], yt: [1, 2, 6], curves: [{ f: x => { if (x < 0.12) return NaN; const g = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7]; const G = z => { if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * G(1 - z)); z -= 1; let a = g[0]; const t = z + 7.5; for (let i = 1; i < 9; i++) a += g[i] / (z + i); return Math.sqrt(2 * Math.PI) * t ** (z + 0.5) * Math.exp(-t) * a; }; const v = G(x); return v > 6.9 ? NaN : v; }, c: "b", lab: [3.3, 5, "Γ"] }], extra: (X, Y) => [[1, 1], [2, 1], [3, 2], [4, 6]].map(([x, y]) => `<circle cx="${f1(X(x))}" cy="${f1(Y(y))}" r="4.5" class="mass"/>`).join("") }, R`Le graphe de $\Gamma$ : convexe, minimum entre $1$ et $2$, et passant par les points $(n+1,n!)$ en jaune.`, "Graphe de la fonction Gamma"), rappels: ["o-rolle"] }
  ],
  ctx: { "o-a-integ-comp": R`<p>Comparaison à $\frac1{t^{1-x}}$ en $0$ et à $\frac1{t^2}$ en $+\infty$.</p>`, "o-a-riemann-int": R`<p>$\int_0^1\frac{dt}{t^\alpha}$ converge ssi $\alpha< 1$.</p>`, "o-a-ipp": R`<p>$u = t^x$, $v' = e^{-t}$, crochets nuls.</p>`, "o-a-gauss": R`<p>Sur $[0,+\infty[$, la moitié : $\frac{\sqrt\pi}2$.</p>`, "k-param-cont": R`<p>Domination par $(t^{a-1}+t^{b-1})e^{-t}$ sur $[a,b]$.</p>`, "k-param-der": R`<p>Domination par $|\ln t|^k(t^{a-1}+t^{b-1})e^{-t}$.</p>`, "o-rolle": R`<p>Sur $[1,2]$ avec $\Gamma(1) = \Gamma(2)$.</p>` },
  piege: R`Chercher une domination valable sur tout $]0,+\infty[$ : c'est impossible (en $0$ il faudrait $t^{-1}$, non intégrable). On domine sur chaque segment $[a,b]$.`,
  methode: R`Intégrale à paramètre sur un intervalle ouvert : dominer sur des segments, puis recoller.`
},
{
  id: "kh-8-2", subj: "kholles", year: "mp", chap: 2, level: 4, time: "35 min",
  title: "Volume de la boule unité en dimension n",
  enonce: R`<p>On note $V_n(R)$ le volume de la boule euclidienne de $\mathbb R^n$ de rayon $R$. On admet les deux principes suivants : $V_n(R) = R^nV_n(1)$ (homothétie), et le volume s'obtient en intégrant l'aire des tranches :$$V_n(1) = \int_{-1}^1V_{n-1}\big(\sqrt{1-t^2}\big)\,dt.$$On note $W_n = \int_0^{\pi/2}\cos^nu\,du$ (intégrales de Wallis) et on rappelle $nW_nW_{n-1} = \frac\pi2$.</p><ol><li>Vérifier $V_1(1) = 2$ et $V_2(1) = \pi$.</li><li>Montrer que $V_n(1) = 2W_nV_{n-1}(1)$.</li><li>En déduire $V_n(1) = \frac{2\pi}nV_{n-2}(1)$, puis $V_{2p}(1) = \dfrac{\pi^p}{p!}$ et $V_{2p+1}(1)$.</li><li>Montrer que $V_n(1)\to0$ quand $n\to\infty$. Pour quelle dimension le volume est-il maximal ?</li></ol>`,
  decode: { donnees: [R`La tranche de la boule unité à la hauteur $t$ est une boule de dimension $n-1$ et de rayon $\sqrt{1-t^2}$.`], but: R`Obtenir une formule explicite pour le volume de la boule unité.`, cles: {
    tranche: R`$V_{n-1}\big(\sqrt{1-t^2}\big) = (1-t^2)^{\frac{n-1}2}V_{n-1}(1)$ par homothétie.`,
    sin: R`$t = \sin u$, $dt = \cos u\,du$, $\sqrt{1-t^2} = \cos u$ pour $u\in[-\frac\pi2,\frac\pi2]$.`,
    deux: R`$V_n = 2W_nV_{n-1} = 4W_nW_{n-1}V_{n-2} = \frac{2\pi}nV_{n-2}$.` } },
  steps: [
    { q: 1, t: "Petites dimensions", h: R`<p>En dimension $1$, la « boule » est un segment ; en dimension $2$, un disque. On vérifie aussi la formule des tranches pour $n = 2$.</p>`, b: R`<p>$V_1(1) = $ longueur de $[-1,1] = 2$. Par la formule des tranches : $V_2(1) = \int_{-1}^12\sqrt{1-t^2}\,dt = \pi$ (aire du disque unité ; avec $t = \sin u$, $\int_{-\pi/2}^{\pi/2}2\cos^2u\,du = \pi$).</p>` },
    { q: 2, t: "La relation avec Wallis", h: R`<p><span data-k="tranche">Chaque tranche est une boule réduite</span> : on sort $V_{n-1}(1)$, puis le changement de variable <span data-k="sin">$t = \sin u$</span> fait apparaître $\cos^n$.</p>`, b: R`<p><span data-k="tranche">$V_n(1) = V_{n-1}(1)\int_{-1}^1(1-t^2)^{\frac{n-1}2}dt$</span>. Avec <span data-k="sin">$t = \sin u$</span> :</p>$$\int_{-1}^1(1-t^2)^{\frac{n-1}2}dt = \int_{-\pi/2}^{\pi/2}\cos^{n-1}u\cos u\,du = 2\int_0^{\pi/2}\cos^nu\,du = 2W_n.$$<div class="sbox">$$V_n(1) = 2W_n\,V_{n-1}(1).$$</div>` + FIG(260, 200, (() => { const c = [130, 100], r = 80; let s = `<circle cx="${c[0]}" cy="${c[1]}" r="${r}" class="thin" style="fill:var(--bg-2)"/>`; const t = 0.55, w = r * Math.sqrt(1 - t * t); s += `<line class="vr" style="stroke-width:3" x1="${f1(c[0] - w)}" y1="${f1(c[1] - t * r)}" x2="${f1(c[0] + w)}" y2="${f1(c[1] - t * r)}"/><line class="ax" x1="${c[0]}" y1="${c[1] + r + 10}" x2="${c[0]}" y2="${c[1] - r - 10}"/>`; return s + S(c[0] + w + 6, c[1] - t * r + 4, "rayon √(1−t²)", "start", "sm r") + S(c[0] - 8, f1(c[1] - t * r - 6), "t", "end", "it"); })(), R`La tranche à la hauteur $t$ (en rouge) est une boule de dimension $n-1$ et de rayon $\sqrt{1-t^2}$.`, "Tranche de la boule") },
    { q: 3, t: "Deux crans d'un coup", h: R`<p>On applique deux fois la relation et on utilise <span data-k="deux">$nW_nW_{n-1} = \frac\pi2$</span>.</p>`, b: R`<p><span data-k="deux">$V_n(1) = 4W_nW_{n-1}V_{n-2}(1) = \frac{2\pi}nV_{n-2}(1)$</span>. En partant de $V_0 = 1$ (convention cohérente : $V_2 = \frac{2\pi}2V_0 = \pi$) et de $V_1 = 2$ :</p><div class="sbox">$$V_{2p}(1) = \frac{\pi^p}{p!},\qquad V_{2p+1}(1) = \frac{2(2\pi)^p}{1\cdot3\cdot5\cdots(2p+1)} = \frac{2^{2p+1}p!\,\pi^p}{(2p+1)!}.$$</div><p>Vérification : $V_3(1) = \frac{2\pi}3\cdot2 = \frac43\pi$ (la boule usuelle), $V_4(1) = \frac{\pi^2}2$.</p>`, rappels: ["recurrence"] },
    { q: 4, t: "Le volume tend vers 0", h: R`<p>$\frac{\pi^p}{p!}\to0$ (terme d'une série exponentielle convergente). Et $V_n = \frac{2\pi}nV_{n-2}$ : le volume augmente tant que $\frac{2\pi}n>1$.</p>`, b: R`<p>$\frac{\pi^p}{p!}\to0$ car $\sum\frac{\pi^p}{p!} = e^\pi$ converge ; de même pour les impairs. Donc $V_n(1)\to0$ : en grande dimension, la boule unité a un volume minuscule (elle occupe une part infime du cube $[-1,1]^n$, de volume $2^n$).</p><p>Le rapport $\frac{V_n}{V_{n-2}} = \frac{2\pi}n$ dépasse $1$ tant que $n\leqslant6$. Valeurs : $V_4\approx4{,}93$, $V_5 = \frac{8\pi^2}{15}\approx5{,}26$, $V_6 = \frac{\pi^3}6\approx5{,}17$, $V_7\approx4{,}72$ : le maximum est atteint en dimension $5$.</p>` }
  ],
  ctx: { "recurrence": R`<p>Récurrence de pas $2$ à partir de $V_0$ et $V_1$.</p>` },
  piege: R`Oublier le facteur $\frac{n-1}2$ en exposant : le rayon de la tranche est $\sqrt{1-t^2}$, et le volume d'une boule de dimension $n-1$ est proportionnel au rayon <b>puissance $n-1$</b>.`,
  methode: R`Volume en dimension $n$ : couper en tranches, reconnaître une boule de dimension $n-1$, obtenir une récurrence.`
}
]);
})();

/* ---------- MP · 3. Déterminants · 4. Groupes (1) ---------- */
LEMME.rappels({
  "k-ordre": { t: "Ordre d'un élément", b: R`<p>L'ordre de $x$ est le plus petit $m\geqslant1$ tel que $x^m = e$. Alors :</p><div class="sbox">$$x^k = e\iff m\mid k,\qquad\operatorname{ordre}\big(x^d\big) = \frac md\ \ (d\mid m).$$</div><p>Dans un groupe fini, l'ordre divise le cardinal (Lagrange).</p>` },
  "k-lagrange-gr": { t: "Théorème de Lagrange", b: R`<div class="sbox">$$H\ \text{sous-groupe de}\ G\ \text{fini}\ \Longrightarrow\ |H|\ \text{divise}\ |G|.$$</div><p>Car $G$ est réunion disjointe des classes $xH$, qui ont toutes $|H|$ éléments.</p>` },
  "k-cyclique": { t: "Groupe cyclique", b: R`<p>$G$ fini est cyclique s'il est engendré par un seul élément, ce qui équivaut à :</p><div class="sbox">$$\exists x\in G,\quad\operatorname{ordre}(x) = |G|.$$</div><p><b>Exemple :</b> $(\mathbb Z/n\mathbb Z,+)$, $\mathbb U_n$. <b>Contre-exemple :</b> $(\mathbb Z/2\mathbb Z)^2$, dont tous les éléments sont d'ordre $\leqslant2$.</p>` },
  "k-nilp-triang": { t: "Matrice nilpotente et déterminant", b: R`<p>Sur un corps quelconque, une matrice nilpotente $N$ est semblable à une matrice triangulaire supérieure stricte (base adaptée à la suite $\ker N\subset\ker N^2\subset\dots$). Donc, si $c$ est un scalaire :</p><div class="sbox">$$\det(cI_n+N) = c^n.$$</div>` },
  "k-fermat": { t: "Petit théorème de Fermat", b: R`<div class="sbox">$$p\ \text{premier},\ a\in\mathbb Z\ \Longrightarrow\ a^p\equiv a\pmod p.$$</div>` },
  "k-racines-corps": { t: "Racines dans un corps", b: R`<p>Dans un corps commutatif $K$, un polynôme non nul de degré $d$ a au plus $d$ racines.</p><div class="sbox">$$\#\{x\in K : x^d = 1\}\leqslant d.$$</div>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kh-11-7", subj: "kholles", year: "mp", chap: 3, level: 3, time: "30 min",
  title: "Déterminants circulants",
  enonce: R`<p>Soit $n\geqslant2$, $\omega = e^{2i\pi/n}$ et $J\in\mathcal M_n(\mathbb C)$ la matrice de la permutation circulaire : $Je_1 = e_n$ et $Je_k = e_{k-1}$ pour $k\geqslant2$ (des $1$ juste au-dessus de la diagonale et un $1$ en bas à gauche).</p><ol><li>Pour $0\leqslant k\leqslant n-1$, on pose $X_k = (1,\omega^k,\omega^{2k},\dots,\omega^{(n-1)k})^\top$. Calculer $JX_k$. En déduire que $J$ est diagonalisable.</li><li>Soient $a_1,\dots,a_n\in\mathbb C$ et $M$ la matrice circulante de première ligne $(a_1,a_2,\dots,a_n)$, chaque ligne étant la précédente décalée d'un cran vers la droite. Montrer que $M = P(J)$ avec $P = a_1+a_2X+\dots+a_nX^{n-1}$.</li><li>En déduire $\det M = \displaystyle\prod_{k=0}^{n-1}P(\omega^k)$.</li><li>Factoriser le déterminant circulant d'ordre $4$ de première ligne $(a,b,c,d)$.</li></ol>`,
  decode: { donnees: [R`$J$ décale les coordonnées : $J(x_1,\dots,x_n)^\top = (x_2,\dots,x_n,x_1)^\top$.`], but: R`Calculer un déterminant circulant comme produit de valeurs propres.`, cles: {
    decale: R`$JX_k = (\omega^k,\omega^{2k},\dots,\omega^{(n-1)k},1)^\top = \omega^kX_k$ car $\omega^{nk} = 1$.`,
    puiss: R`$J^m$ a des $1$ en positions $(i,i+m)$ (indices modulo $n$) : la ligne $i$ de $\sum_ma_{m+1}J^m$ est la première ligne décalée de $i-1$ crans.`,
    polyvp: R`Si $JX = \lambda X$, alors $P(J)X = P(\lambda)X$ : $P(J)$ a les mêmes vecteurs propres, de valeurs propres $P(\omega^k)$.` } },
  steps: [
    { q: 1, t: "Vecteurs propres de J", h: R`<p>$J$ décale les coordonnées d'un cran. Un vecteur formé de <b>puissances successives</b> est presque inchangé par décalage : <span data-k="decale">il est multiplié par la raison</span>.</p>`, b: R`<p><span data-k="decale">$JX_k = \omega^kX_k$</span>. Les $\omega^k$ ($0\leqslant k\leqslant n-1$) sont $n$ valeurs propres distinctes : $J$ est diagonalisable, et $(X_0,\dots,X_{n-1})$ est une base de vecteurs propres (c'est la matrice de Vandermonde des $\omega^k$, inversible).</p>`, rappels: ["valeurs-propres-distinctes"] },
    { q: 2, t: "M est un polynôme en J", h: R`<p>On regarde où sont les $1$ dans <span data-k="puiss">$J^m$</span> : sur la « diagonale décalée de $m$ » (circulairement).</p>`, b: R`<p><span data-k="puiss">$(J^m)_{i,j} = 1$ si $j\equiv i+m\pmod n$, $0$ sinon</span>. Dans $P(J) = \sum_{m=0}^{n-1}a_{m+1}J^m$, le coefficient $(i,j)$ est $a_{m+1}$ avec $m\equiv j-i\pmod n$. Ligne $1$ : $(a_1,\dots,a_n)$ ; ligne $2$ : $(a_n,a_1,\dots,a_{n-1})$ ; etc. C'est $M$.</p>` },
    { q: 3, t: "Le déterminant", h: R`<p>Dans la base des $X_k$, $P(J)$ est diagonale <span data-k="polyvp">de coefficients $P(\omega^k)$</span>. Le déterminant est le produit des valeurs propres.</p>`, b: R`<p><span data-k="polyvp">$MX_k = P(\omega^k)X_k$</span>. Donc $M$ est semblable à $\operatorname{diag}\big(P(1),P(\omega),\dots,P(\omega^{n-1})\big)$ :</p><div class="sbox">$$\det M = \prod_{k=0}^{n-1}P(\omega^k),\qquad P = a_1+a_2X+\dots+a_nX^{n-1}.$$</div>`, rappels: ["o-b-poly-endo"] },
    { q: 4, t: "Le cas n = 4", h: R`<p>$\omega = i$ : on évalue $P = a+bX+cX^2+dX^3$ en $1,i,-1,-i$, et on regroupe $P(i)P(-i)$.</p>`, b: R`<p>$P(1) = a+b+c+d$, $P(-1) = a-b+c-d$, $P(\pm i) = (a-c)\pm i(b-d)$, donc $P(i)P(-i) = (a-c)^2+(b-d)^2$ :</p><div class="sbox">$$\det\begin{pmatrix}a&b&c&d\\d&a&b&c\\c&d&a&b\\b&c&d&a\end{pmatrix} = (a+b+c+d)(a-b+c-d)\big[(a-c)^2+(b-d)^2\big].$$</div><p>Vérification $a = 1$, $b = c = d = 0$ : $1\cdot1\cdot1 = 1 = \det I_4$. Et $a = b = c = d = 1$ : $0$, normal (quatre lignes égales).</p>` }
  ],
  ctx: { "valeurs-propres-distinctes": R`<p>$n$ valeurs propres distinctes $\omega^k$ en dimension $n$.</p>`, "o-b-poly-endo": R`<p>$P(J)X_k = P(\omega^k)X_k$.</p>` },
  piege: R`Se tromper de sens de décalage : avec la première ligne $(a_1,\dots,a_n)$ décalée vers la droite, on obtient $P(J)$ avec la bonne $J$ ; avec l'autre sens, ce serait $P(J^\top)$ (même déterminant d'ailleurs).`,
  methode: R`Matrice circulante : la diagonaliser dans la base de Fourier $X_k = (\omega^{jk})_j$, comme polynôme en la permutation circulaire.`
},
{
  id: "kh-11-8", subj: "kholles", year: "mp", chap: 3, level: 4, time: "30 min",
  title: "Matrice circulante modulo un nombre premier",
  enonce: R`<p>Soit $p$ premier, $a_0,\dots,a_{p-1}\in\mathbb Z$, et $M$ la matrice circulante $p\times p$ de première ligne $(a_0,\dots,a_{p-1})$. On veut montrer que$$\det M\equiv a_0+a_1+\dots+a_{p-1}\pmod p.$$On travaille dans le corps $\mathbb F_p = \mathbb Z/p\mathbb Z$ et on note $\bar M$ la réduction de $M$ modulo $p$.</p><ol><li>Justifier que $\det\bar M$ est la réduction modulo $p$ de $\det M$.</li><li>Avec $J$ la matrice de la permutation circulaire ($M = P(J)$, $P = \sum a_kX^k$), montrer que $(J-I_p)^p = 0$ dans $\mathcal M_p(\mathbb F_p)$.</li><li>En déduire que $\bar M = P(1)I_p+N$ avec $N$ nilpotente, puis que $\det\bar M = P(1)^p$.</li><li>Conclure, et vérifier pour $p = 3$.</li></ol>`,
  decode: { donnees: [R`$J^p = I_p$ ; dans $\mathbb F_p$, les coefficients binomiaux $\binom pk$ ($0< k< p$) sont nuls.`], but: R`Calculer un déterminant modulo $p$ sans le développer.`, cles: {
    reduc: R`$\det M = \sum_\sigma\varepsilon(\sigma)\prod_ia_{\sigma(i)i}$ : une somme de produits d'entiers, et la réduction modulo $p$ respecte sommes et produits.`,
    frob: R`$J$ et $I_p$ commutent, donc $(J-I_p)^p = \sum_k\binom pk J^k(-1)^{p-k} = J^p+(-1)^pI_p$ modulo $p$. Pour $p$ impair : $J^p-I_p = 0$ ; pour $p = 2$ : $J^2+I_2 = 2I_2 = 0$.`,
    taylor: R`$P(X) = P(1)+(X-1)Q(X)$, donc $P(J) = P(1)I_p+(J-I_p)Q(J)$.` } },
  steps: [
    { q: 1, t: "Réduire modulo p", h: R`<p>Le déterminant est <span data-k="reduc">une expression polynomiale à coefficients entiers</span> des coefficients.</p>`, b: R`<p>Par la formule <span data-k="reduc">$\det M = \sum_\sigma\varepsilon(\sigma)\prod_ia_{\sigma(i)i}$</span> et parce que $\mathbb Z\to\mathbb F_p$ respecte les opérations, $\overline{\det M} = \det\bar M$.</p>`, rappels: ["k-det-entier"] },
    { q: 2, t: "La puissance p-ième de J − I", h: R`<p>Binôme de Newton pour deux matrices qui commutent ; <span data-k="frob">les binomiaux intermédiaires sont divisibles par $p$</span>.</p>`, b: R`<p>$J$ et $I_p$ commutent, donc $(J-I_p)^p = \sum_{k=0}^p\binom pkJ^k(-I_p)^{p-k}$. Pour $0< k< p$, $p\mid\binom pk$ : ces termes sont nuls dans $\mathbb F_p$. Il reste <span data-k="frob">$J^p+(-1)^pI_p$</span>. Or $J^p = I_p$ (permutation d'ordre $p$), d'où $(J-I_p)^p = 0$ (pour $p = 2$, $2I_2 = 0$ dans $\mathbb F_2$).</p>`, rappels: ["o-b-binom-p"] },
    { q: 3, t: "Scalaire plus nilpotent", h: R`<p>On <span data-k="taylor">factorise $P(X)-P(1)$ par $X-1$</span> : $\bar M-P(1)I_p$ est un multiple de $J-I_p$, nilpotent.</p>`, b: R`<p><span data-k="taylor">$P(X) = P(1)+(X-1)Q(X)$</span>, donc $\bar M = P(1)I_p+N$ avec $N = (J-I_p)Q(J)$. Comme $J-I_p$ et $Q(J)$ commutent, $N^p = (J-I_p)^pQ(J)^p = 0$ : $N$ est nilpotente. Donc</p>$$\det\bar M = \det\big(P(1)I_p+N\big) = P(1)^p.$$`, rappels: ["k-nilp-triang"] },
    { q: 4, t: "Fermat et vérification", h: R`<p>Le petit théorème de Fermat : $x^p = x$ dans $\mathbb F_p$.</p>`, b: R`<p>$P(1)^p = P(1)$ dans $\mathbb F_p$, et $P(1) = a_0+\dots+a_{p-1}$ :</p><div class="sbox">$$\det M\equiv a_0+a_1+\dots+a_{p-1}\pmod p.$$</div><p>$p = 3$ : $\det\begin{pmatrix}a&b&c\\c&a&b\\b&c&a\end{pmatrix} = a^3+b^3+c^3-3abc\equiv a+b+c\pmod3$, par Fermat. Exemple $(1,2,4)$ : $1+8+64-24 = 49\equiv1\equiv7\pmod3$.</p>`, rappels: ["k-fermat"] }
  ],
  ctx: { "k-det-entier": R`<p>Le déterminant est un polynôme en les coefficients.</p>`, "o-b-binom-p": R`<p>Pour $0< k< p$.</p>`, "k-nilp-triang": R`<p>$\det(cI_p+N) = c^p$ avec $N$ nilpotente.</p>`, "k-fermat": R`<p>Appliqué à $P(1)$.</p>` },
  piege: R`Appliquer la diagonalisation de $J$ comme sur $\mathbb C$ : dans $\mathbb F_p$, $X^p-1 = (X-1)^p$ n'a qu'une racine, et $J$ n'est pas diagonalisable.`,
  methode: R`Modulo $p$ : $(A+B)^p = A^p+B^p$ pour des matrices qui commutent. Cela transforme une matrice de permutation en « identité + nilpotente ».`
},
{
  id: "kh-12-1", subj: "kholles", year: "mp", chap: 4, level: 3, time: "25 min",
  title: "Produit d'éléments d'ordres premiers entre eux",
  enonce: R`<p>Soit $G$ un groupe abélien (noté multiplicativement).</p><ol><li>Soient $x,y\in G$ d'ordres $m$ et $n$ avec $m\wedge n = 1$. Montrer que $\langle x\rangle\cap\langle y\rangle = \{e\}$, puis que $xy$ est d'ordre $mn$.</li><li>Donner un contre-exemple si $m\wedge n\neq1$.</li><li>Soient $p\neq q$ premiers et $G$ abélien d'ordre $pq$. Montrer que $G$ contient un élément d'ordre $p$ et un élément d'ordre $q$ (on pourra raisonner par l'absurde avec un sous-groupe de la forme $\langle x\rangle\langle y\rangle$), puis que $G$ est cyclique.</li></ol>`,
  decode: { donnees: [R`$G$ abélien : $(xy)^k = x^ky^k$.`], but: R`Trouver l'ordre de $xy$, puis fabriquer un générateur.`, cles: {
    inter: R`Un élément de $\langle x\rangle\cap\langle y\rangle$ a un ordre qui divise $m$ et $n$, donc $1$.`,
    ordre: R`$(xy)^k = e\iff x^k = y^{-k}\in\langle x\rangle\cap\langle y\rangle = \{e\}\iff m\mid k$ et $n\mid k\iff mn\mid k$.`,
    prod: R`Si $H = \langle x\rangle$ et $K = \langle y\rangle$ ont $p$ éléments et $H\cap K = \{e\}$, l'application $(h,k)\mapsto hk$ est injective : $HK$ est un sous-groupe à $p^2$ éléments.` } },
  steps: [
    { q: 1, t: "Intersection triviale", h: R`<p>Par Lagrange, l'ordre d'un élément de $\langle x\rangle$ divise $m$, celui d'un élément de $\langle y\rangle$ divise $n$.</p>`, b: R`<p>Soit $z\in\langle x\rangle\cap\langle y\rangle$. <span data-k="inter">Son ordre divise $m$ et $n$</span>, premiers entre eux : il vaut $1$, donc $z = e$.</p>`, rappels: ["k-lagrange-gr"] },
    { q: 1, t: "L'ordre de xy", h: R`<p>On cherche les $k$ tels que $(xy)^k = e$ ; grâce à la commutativité, <span data-k="ordre">on sépare les puissances de $x$ et de $y$</span>.</p>`, b: R`<p><span data-k="ordre">$(xy)^k = e\iff x^k = y^{-k}$</span>. Ce dernier élément est dans $\langle x\rangle\cap\langle y\rangle = \{e\}$, donc $x^k = e$ et $y^k = e$ : $m\mid k$ et $n\mid k$, soit $mn\mid k$ (car $m\wedge n = 1$). Réciproquement $(xy)^{mn} = e$.</p><div class="sbox">$$m\wedge n = 1\ \Longrightarrow\ \operatorname{ordre}(xy) = mn.$$</div>`, rappels: ["k-ordre", "o-b-gauss"] },
    { q: 2, t: "Contre-exemple", h: R`<p>Prendre $y = x^{-1}$ : même ordre, produit $e$.</p>`, b: R`<p>Dans $\mathbb U_4$, $x = i$ et $y = -i$ sont d'ordre $4$, mais $xy = 1$ est d'ordre $1\neq16$.</p>` },
    { q: 3, t: "Des éléments d'ordre p et q", h: R`<p>Les ordres possibles sont $1,p,q,pq$. Si un élément est d'ordre $pq$, c'est gagné. Sinon, supposons qu'il n'y ait aucun élément d'ordre $q$ : <span data-k="prod">deux sous-groupes d'ordre $p$ distincts produiraient un sous-groupe d'ordre $p^2$</span>.</p>`, b: R`<p>Supposons qu'aucun élément ne soit d'ordre $q$ ni $pq$ : tous les éléments $\neq e$ sont d'ordre $p$. Soit $x\neq e$, $H = \langle x\rangle$ ($p$ éléments) ; comme $pq>p$, il existe $y\notin H$, $K = \langle y\rangle$. $H\cap K$ est un sous-groupe de $H$ distinct de $H$, donc $\{e\}$ (Lagrange). <span data-k="prod">$HK$ est un sous-groupe (groupe abélien) de cardinal $p^2$</span>, qui doit diviser $pq$ : impossible. Donc $G$ a un élément d'ordre $q$ ou $pq$ (et dans ce dernier cas $z^p$ est d'ordre $q$). De même pour $p$.</p>`, rappels: ["absurde", "k-lagrange-gr"] },
    { q: 3, t: "G est cyclique", h: R`<p>On multiplie un élément d'ordre $p$ et un élément d'ordre $q$ : question 1.</p>`, b: R`<p>Avec $x$ d'ordre $p$ et $y$ d'ordre $q$, $p\wedge q = 1$, donc $xy$ est d'ordre $pq = |G|$ :</p><div class="sbox">$$G\ \text{abélien d'ordre}\ pq\ \Longrightarrow\ G\ \text{cyclique}.$$</div><p>Exemple : $\mathbb Z/6\mathbb Z$ est engendré par $\bar1$, et aussi par $\bar3+\bar2 = \bar5$ (ordres $2$ et $3$).</p>`, rappels: ["k-cyclique"] }
  ],
  ctx: { "k-lagrange-gr": R`<p>L'ordre d'un élément d'un sous-groupe divise le cardinal de ce sous-groupe.</p>`, "k-ordre": R`<p>$x^k = e\iff m\mid k$.</p>`, "o-b-gauss": R`<p>$m\mid k$, $n\mid k$ et $m\wedge n = 1$ donnent $mn\mid k$.</p>`, "absurde": R`<p>On suppose que tous les éléments non neutres sont d'ordre $p$.</p>`, "k-cyclique": R`<p>Un élément d'ordre $|G|$.</p>` },
  piege: R`Oublier l'hypothèse « abélien » : sans elle, $(xy)^k\neq x^ky^k$ en général, et $HK$ n'est pas forcément un sous-groupe.`,
  methode: R`Pour l'ordre d'un produit : séparer les puissances (groupe abélien) et utiliser une intersection triviale.`
},
{
  id: "kh-12-2", subj: "kholles", year: "mp", chap: 4, level: 4, time: "35 min",
  title: "Le groupe multiplicatif d'un corps fini est cyclique",
  enonce: R`<p>Soit $G$ un groupe abélien fini, et $\varepsilon$ le PPCM des ordres de ses éléments (l'exposant de $G$).</p><ol><li>Soit $q$ un nombre premier, $q^\alpha$ la plus grande puissance de $q$ divisant $\varepsilon$. Montrer qu'il existe un élément d'ordre $q^\alpha$.</li><li>En déduire qu'il existe un élément d'ordre $\varepsilon$.</li><li>Soit $K$ un corps commutatif fini. Montrer que $K^\ast$ est cyclique.</li><li>Trouver un générateur de $(\mathbb Z/7\mathbb Z)^\ast$ et de $(\mathbb Z/11\mathbb Z)^\ast$.</li></ol>`,
  decode: { donnees: [R`$\varepsilon = \operatorname{ppcm}\{\operatorname{ordre}(x),x\in G\}$ ; $x^\varepsilon = e$ pour tout $x$.`], but: R`Montrer que l'exposant est atteint, puis l'appliquer à un corps fini.`, cles: {
    extraire: R`Si $x$ est d'ordre $q^\alpha r$, alors $x^r$ est d'ordre $q^\alpha$.`,
    exist: R`$q^\alpha$ divise un PPCM : il divise l'un des ordres (la valuation $q$-adique d'un PPCM est le maximum des valuations).`,
    compte: R`Tout $x\in K^\ast$ vérifie $x^\varepsilon = 1$ : c'est une racine de $X^\varepsilon-1$, qui en a au plus $\varepsilon$.` } },
  steps: [
    { q: 1, t: "Un élément d'ordre qᵅ", h: R`<p>La valuation $q$-adique d'un PPCM est le maximum des valuations : <span data-k="exist">un des ordres est divisible par $q^\alpha$</span>. Puis on <span data-k="extraire">élève à une puissance</span> pour ne garder que la partie $q^\alpha$.</p>`, b: R`<p>Il existe $x$ dont l'ordre $m$ vérifie <span data-k="exist">$q^\alpha\mid m$</span> : $m = q^\alpha r$. Alors <span data-k="extraire">$x^r$ est d'ordre $\frac mr = q^\alpha$</span>.</p>`, rappels: ["k-ordre"] },
    { q: 2, t: "Assembler les morceaux", h: R`<p>On écrit $\varepsilon = q_1^{\alpha_1}\cdots q_s^{\alpha_s}$ et on multiplie les éléments obtenus : leurs ordres sont premiers entre eux deux à deux.</p>`, b: R`<p>Soit $y_i$ d'ordre $q_i^{\alpha_i}$. Par l'exercice sur le produit d'éléments d'ordres premiers entre eux (et une récurrence sur $s$), $y = y_1\cdots y_s$ est d'ordre $q_1^{\alpha_1}\cdots q_s^{\alpha_s} = \varepsilon$.</p><div class="sbox">$$\exists y\in G,\quad\operatorname{ordre}(y) = \varepsilon.$$</div><p><b>Contre-exemple non abélien</b> : dans $S_3$, les ordres sont $1,2,3$, $\varepsilon = 6$, mais aucun élément n'est d'ordre $6$.</p>`, rappels: ["recurrence"] },
    { q: 3, t: "Le cas d'un corps fini", h: R`<p>$K^\ast$ est un groupe abélien fini : il a un élément d'ordre $\varepsilon$, donc $\varepsilon\leqslant|K^\ast|$. Inversement, <span data-k="compte">tous les éléments sont racines de $X^\varepsilon-1$</span>.</p>`, b: R`<p>Par Lagrange, $\varepsilon\leqslant|K^\ast|$ (l'élément $y$ d'ordre $\varepsilon$ engendre un sous-groupe à $\varepsilon$ éléments). <span data-k="compte">Tout $x\in K^\ast$ vérifie $x^\varepsilon = 1$</span>, et $X^\varepsilon-1$ a au plus $\varepsilon$ racines dans le corps $K$ : $|K^\ast|\leqslant\varepsilon$. Donc $\varepsilon = |K^\ast|$ et $y$ engendre $K^\ast$.</p><div class="sbox">$$K\ \text{corps fini}\ \Longrightarrow\ K^\ast\ \text{cyclique}.$$</div>`, rappels: ["k-racines-corps", "k-cyclique"] },
    { q: 4, t: "Deux exemples", h: R`<p>On calcule les puissances successives d'un candidat jusqu'à retomber sur $1$.</p>`, b: R`<ul><li>Modulo $7$ : $3^1,\dots,3^6\equiv3,2,6,4,5,1$. Les six valeurs sont atteintes : $\bar3$ engendre $(\mathbb Z/7\mathbb Z)^\ast$. ($\bar2$ ne marche pas : $2^3\equiv1$.)</li><li>Modulo $11$ : $2^1,\dots,2^{10}\equiv2,4,8,5,10,9,7,3,6,1$ : $\bar2$ est un générateur.</li></ul>` }
  ],
  ctx: { "k-ordre": R`<p>$\operatorname{ordre}(x^r) = \frac mr$ si $r\mid m$.</p>`, "recurrence": R`<p>On multiplie les $y_i$ un par un.</p>`, "k-racines-corps": R`<p>$X^\varepsilon-1$ dans le corps $K$.</p>`, "k-cyclique": R`<p>$y$ est d'ordre $|K^\ast|$.</p>` },
  piege: R`Appliquer l'argument des racines dans un anneau qui n'est pas un corps : dans $\mathbb Z/8\mathbb Z$, $X^2-1$ a quatre racines ($1,3,5,7$), et $(\mathbb Z/8\mathbb Z)^\ast$ n'est pas cyclique.`,
  methode: R`Pour montrer qu'un groupe abélien fini est cyclique : montrer que son exposant égale son cardinal.`
}
]);
})();

/* ---------- MP · 4. Groupes (2) ---------- */
LEMME.rappels({
  "k-sous-groupe-gen": { t: "Sous-groupe : caractérisation", b: R`<p>$H\subset G$ est un sous-groupe si $e\in H$ et si $x,y\in H\Rightarrow xy^{-1}\in H$.</p><div class="sbox">$$e\in H,\qquad x,y\in H\ \Longrightarrow\ xy^{-1}\in H.$$</div><p>Une réunion croissante de sous-groupes est un sous-groupe.</p>` },
  "k-quotient": { t: "Groupe quotient (abélien)", b: R`<p>Si $G$ est abélien et $H$ un sous-groupe, les classes $xH$ forment un groupe $G/H$ pour $(xH)(yH) = xyH$, de cardinal $\frac{|G|}{|H|}$. L'application $\pi : x\mapsto xH$ est un morphisme surjectif de noyau $H$ :</p><div class="sbox">$$\pi(x) = e_{G/H}\iff x\in H,\qquad|G/H| = \frac{|G|}{|H|}.$$</div><p>Chaque élément de $G/H$ a exactement $|H|$ antécédents.</p>` },
  "k-morph-card": { t: "Morphisme et cardinal", b: R`<p>Si $\varphi : G\to G'$ est un morphisme de groupes finis, chaque élément de l'image a exactement $|\ker\varphi|$ antécédents :</p><div class="sbox">$$|G| = |\ker\varphi|\cdot|\operatorname{Im}\varphi|.$$</div>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kh-12-3", subj: "kholles", year: "mp", chap: 4, level: 4, time: "35 min",
  title: "Le groupe de Prüfer",
  enonce: R`<p>Soit $p$ premier et $\mathbb U_{p^k}$ le groupe des racines $p^k$-ièmes de l'unité. On pose $G_p = \displaystyle\bigcup_{k\geqslant0}\mathbb U_{p^k}$ (les complexes $z$ tels que $z^{p^k} = 1$ pour un certain $k$).</p><ol><li>Montrer que $\mathbb U_{p^k}\subset\mathbb U_{p^{k+1}}$, et que $G_p$ est un sous-groupe de $(\mathbb C^\ast,\times)$.</li><li>Soit $z\in G_p$ d'ordre $p^m$. Montrer que $\langle z\rangle = \mathbb U_{p^m}$.</li><li>Soit $H$ un sous-groupe de $G_p$, $H\neq G_p$. Montrer que les ordres des éléments de $H$ sont bornés, puis que $H = \mathbb U_{p^m}$ pour un certain $m$.</li><li>Montrer que $G_p$ n'est engendré par aucune partie finie.</li></ol>`,
  decode: { donnees: [R`$\mathbb U_{p^k}$ est cyclique d'ordre $p^k$, engendré par $e^{2i\pi/p^k}$.`], but: R`Décrire tous les sous-groupes de $G_p$.`, cles: {
    ordre: R`Tout élément de $G_p$ est d'ordre une puissance de $p$ (l'ordre divise $p^k$).`,
    cyc: R`$\langle z\rangle\subset\mathbb U_{p^m}$ (car $z^{p^m} = 1$) et les deux ont $p^m$ éléments.`,
    nonborne: R`Si $H$ contient des éléments d'ordre $p^m$ pour des $m$ arbitrairement grands, il contient tous les $\mathbb U_{p^m}$, donc $G_p$.`,
    fini: R`Une partie finie est contenue dans un seul $\mathbb U_{p^n}$ (le plus grand), qui est un sous-groupe.` } },
  steps: [
    { q: 1, t: "Une réunion croissante", h: R`<p>Si $z^{p^k} = 1$, alors $z^{p^{k+1}} = (z^{p^k})^p = 1$. Une réunion croissante de sous-groupes est un sous-groupe.</p>`, b: R`<p>$\mathbb U_{p^k}\subset\mathbb U_{p^{k+1}}$ par le calcul ci-dessus. Pour $x,y\in G_p$ : $x\in\mathbb U_{p^k}$, $y\in\mathbb U_{p^l}$, et avec $m = \max(k,l)$ les deux sont dans le groupe $\mathbb U_{p^m}$, donc $xy^{-1}\in\mathbb U_{p^m}\subset G_p$. Et $1\in G_p$.</p>`, rappels: ["k-sous-groupe-gen"] },
    { q: 2, t: "Les sous-groupes monogènes", h: R`<p><span data-k="cyc">Inclusion et égalité des cardinaux</span>.</p>`, b: R`<p>$z^{p^m} = 1$ donc $\langle z\rangle\subset\mathbb U_{p^m}$, et $|\langle z\rangle| = \operatorname{ordre}(z) = p^m = |\mathbb U_{p^m}|$ : <span data-k="cyc">$\langle z\rangle = \mathbb U_{p^m}$</span>.</p>`, rappels: ["k-ordre"] },
    { q: 3, t: "Les ordres dans H sont bornés", h: R`<p>Par l'absurde : <span data-k="nonborne">des ordres arbitrairement grands donneraient tout $G_p$</span>, grâce à la question 2.</p>`, b: R`<p>Les ordres des éléments de $H$ sont <span data-k="ordre">des puissances de $p$</span>. S'ils n'étaient pas bornés, pour tout $k$ il y aurait $z\in H$ d'ordre $p^m$ avec $m\geqslant k$, et $\mathbb U_{p^k}\subset\mathbb U_{p^m} = \langle z\rangle\subset H$. Donc $G_p = \bigcup_k\mathbb U_{p^k}\subset H$ : contradiction.</p>`, rappels: ["absurde"] },
    { q: 3, t: "H est l'un des Uₚᵐ", h: R`<p>On prend un élément d'ordre maximal $p^m$ : il engendre $\mathbb U_{p^m}\subset H$, et tous les autres éléments sont dans $\mathbb U_{p^m}$.</p>`, b: R`<p>Soit $p^m$ le plus grand ordre d'un élément de $H$, atteint en $z$. Alors $\mathbb U_{p^m} = \langle z\rangle\subset H$. Inversement, tout $w\in H$ a un ordre $p^{m'}$ avec $m'\leqslant m$, donc $w^{p^m} = 1$ et $w\in\mathbb U_{p^m}$.</p><div class="sbox">$$H\subsetneq G_p\ \Longrightarrow\ H = \mathbb U_{p^m}\ \text{pour un}\ m\in\mathbb N.$$</div><p>Les sous-groupes de $G_p$ forment une chaîne : $\{1\}\subset\mathbb U_p\subset\mathbb U_{p^2}\subset\dots\subset G_p$.</p>` + FIG(400, 120, (() => { let s = ""; [[1, 16], [2, 4], [4, 2]].forEach(([k, n], j) => { const cx = 70 + j * 130; s += `<circle cx="${cx}" cy="60" r="42" class="thin" style="fill:none"/>`; const N = [2, 4, 8][j]; for (let i = 0; i < N; i++) { const a = 2 * Math.PI * i / N; s += `<circle cx="${f1(cx + 42 * Math.cos(a))}" cy="${f1(60 - 42 * Math.sin(a))}" r="4.5" class="${i ? "mass" : "body"}"/>`; } s += S(cx, 116, ["𝕌₂", "𝕌₄", "𝕌₈"][j], "middle"); }); return s; })(), R`Pour $p = 2$ : $\mathbb U_2\subset\mathbb U_4\subset\mathbb U_8\subset\dots$ Chaque étape ajoute les racines carrées des points précédents.`, "Chaîne des racines de l'unité") },
    { q: 4, t: "Pas de famille génératrice finie", h: R`<p><span data-k="fini">Une partie finie tombe dans un seul $\mathbb U_{p^n}$</span>, qui est un sous-groupe strict.</p>`, b: R`<p>Soit $A\subset G_p$ finie. Chaque $a\in A$ est dans un $\mathbb U_{p^{n_a}}$ ; avec $n = \max n_a$, <span data-k="fini">$A\subset\mathbb U_{p^n}$</span>, donc $\langle A\rangle\subset\mathbb U_{p^n}\neq G_p$ (car $e^{2i\pi/p^{n+1}}\notin\mathbb U_{p^n}$). $G_p$ n'est pas de type fini.</p>` }
  ],
  ctx: { "k-sous-groupe-gen": R`<p>Réunion croissante des $\mathbb U_{p^k}$.</p>`, "k-ordre": R`<p>$|\langle z\rangle| = \operatorname{ordre}(z)$.</p>`, "absurde": R`<p>On suppose les ordres non bornés.</p>` },
  piege: R`Oublier de justifier que $\mathbb U_{p^m}\subset H$ : c'est le fait que $\mathbb U_{p^m}$ est <b>cyclique</b>, engendré par n'importe quel élément d'ordre $p^m$.`,
  methode: R`Sous-groupes d'une réunion croissante de groupes cycliques : raisonner sur l'ordre maximal des éléments.`
},
{
  id: "kh-12-4", subj: "kholles", year: "mp", chap: 4, level: 3, time: "25 min",
  title: "Groupe dont tous les éléments vérifient x² = e",
  enonce: R`<p>Soit $G$ un groupe fini tel que $x^2 = e$ pour tout $x\in G$.</p><ol><li>Montrer que $G$ est abélien.</li><li>Soit $H$ un sous-groupe de $G$ et $x\in G\setminus H$. Montrer que le sous-groupe engendré par $H$ et $x$ est $H\cup xH$, de cardinal $2|H|$.</li><li>En déduire que $|G|$ est une puissance de $2$.</li><li>Exemple : l'ensemble $\mathcal P(E)$ des parties d'un ensemble fini $E$, muni de la différence symétrique $A\,\Delta\,B = (A\cup B)\setminus(A\cap B)$.</li></ol>`,
  decode: { donnees: [R`$x^2 = e$, donc $x^{-1} = x$ pour tout $x$.`], but: R`Montrer la commutativité et trouver le cardinal possible.`, cles: {
    inv: R`$x = x^{-1}$ pour tout $x$ ; appliqué à $xy$ : $xy = (xy)^{-1} = y^{-1}x^{-1} = yx$.`,
    stab: R`Avec $x^2 = e$ et la commutativité, $H\cup xH$ est stable : $(xh)(xh') = x^2hh' = hh'\in H$, $h(xh') = x(hh')\in xH$.`,
    disj: R`$H\cap xH = \emptyset$ : si $h = xh'$, alors $x = hh'^{-1}\in H$, exclu.` } },
  steps: [
    { q: 1, t: "Commutativité", h: R`<p>Chaque élément est <span data-k="inv">son propre inverse</span>. L'inverse d'un produit renverse l'ordre.</p>`, b: R`<p>Pour $x,y\in G$ : <span data-k="inv">$xy = (xy)^{-1} = y^{-1}x^{-1} = yx$</span>. $G$ est abélien.</p>` },
    { q: 2, t: "Le sous-groupe engendré", h: R`<p>Tout sous-groupe contenant $H$ et $x$ contient $xH$. Il reste à voir que <span data-k="stab">$H\cup xH$ est déjà un sous-groupe</span>, et que <span data-k="disj">les deux morceaux sont disjoints</span>.</p>`, b: R`<p>$H\cup xH$ contient $e$, est <span data-k="stab">stable par produit</span> (calculs ci-dessus) et par inverse ($y^{-1} = y$). C'est donc le plus petit sous-groupe contenant $H$ et $x$. <span data-k="disj">$H\cap xH = \emptyset$</span> et $h\mapsto xh$ est injective, donc</p><div class="sbox">$$|\langle H,x\rangle| = |H|+|xH| = 2|H|.$$</div>`, rappels: ["k-sous-groupe-gen"] },
    { q: 3, t: "Une puissance de 2", h: R`<p>On part de $\{e\}$ et on ajoute des éléments un par un : chaque ajout double le cardinal, et le processus s'arrête car $G$ est fini.</p>`, b: R`<p>$H_0 = \{e\}$. Tant que $H_k\neq G$, on choisit $x_{k+1}\notin H_k$ et $H_{k+1} = \langle H_k,x_{k+1}\rangle$ : $|H_{k+1}| = 2|H_k|$. Les cardinaux augmentent strictement et sont bornés par $|G|$ : on s'arrête sur $H_n = G$ et</p><div class="sbox">$$|G| = 2^n.$$</div><p>En fait $G$ est un espace vectoriel sur $\mathbb F_2$ (avec $\bar1\cdot x = x$), de base $(x_1,\dots,x_n)$, isomorphe à $(\mathbb Z/2\mathbb Z)^n$.</p>`, rappels: ["recurrence"] },
    { q: 4, t: "Les parties d'un ensemble", h: R`<p>Le neutre est $\emptyset$, et $A\,\Delta\,A = \emptyset$.</p>`, b: R`<p>$(\mathcal P(E),\Delta)$ est un groupe (l'associativité se vérifie avec les fonctions indicatrices : $\mathbf 1_{A\Delta B}\equiv\mathbf 1_A+\mathbf 1_B\pmod2$), de neutre $\emptyset$, et $A\,\Delta\,A = \emptyset$. Son cardinal $2^{|E|}$ est bien une puissance de $2$.</p>` }
  ],
  ctx: { "k-sous-groupe-gen": R`<p>$H\cup xH$ contient $e$, stable par produit et inverse.</p>`, "recurrence": R`<p>$|H_k| = 2^k$.</p>` },
  piege: R`Affirmer $|G| = 2^n$ par Lagrange seul : Lagrange dit que $2$ divise $|G|$ (si $G\neq\{e\}$), pas que $|G|$ est une puissance de $2$.`,
  methode: R`Pour connaître le cardinal d'un groupe : le construire par sous-groupes successifs dont on contrôle le cardinal.`
},
{
  id: "kh-12-5", subj: "kholles", year: "mp", chap: 4, level: 5, time: "50 min",
  title: "Sous-groupes d'un groupe abélien fini",
  enonce: R`<p>Soit $G$ un groupe abélien fini et $p$ un nombre premier. On utilise le groupe quotient $G/H$ (voir le rappel).</p><ol><li>Soit $H$ un sous-groupe de $G$. On suppose que $G/H$ a un élément d'ordre $p$. Montrer que $G$ a un élément d'ordre $p$.</li><li>(Lemme de Cauchy) Montrer par récurrence forte sur $|G|$ que si $p$ divise $|G|$, alors $G$ a un élément d'ordre $p$.</li><li>Montrer que si $p^a$ divise $|G|$, alors $G$ a un sous-groupe d'ordre $p^a$.</li><li>Montrer que pour tout diviseur $n$ de $|G|$, $G$ a un sous-groupe d'ordre $n$.</li></ol>`,
  decode: { donnees: [R`$G$ abélien fini ; $\pi : G\to G/H$ morphisme surjectif de noyau $H$.`], but: R`Réciproque du théorème de Lagrange pour les groupes abéliens.`, cles: {
    remonte: R`Si $\pi(x)$ est d'ordre $p$, alors $\pi(x^m) = \pi(x)^m$ ; avec $m$ l'ordre de $x$, $\pi(x)^m = e$, donc $p\mid m$.`,
    image: R`$K = \pi^{-1}(K')$ est un sous-groupe de $G$ qui contient $H$, et chaque élément de $K'$ a $|H|$ antécédents : $|K| = |H|\cdot|K'|$.`,
    copr: R`Si $s_1\cdots s_r = e$ avec $s_i\in S_i$ ($|S_i| = p_i^{a_i}$), on élève à la puissance $N_i = \prod_{j\neq i}p_j^{a_j}$ : tous les facteurs sauf $s_i^{N_i}$ disparaissent, et $N_i$ est premier avec l'ordre de $s_i$.` } },
  steps: [
    { q: 1, t: "Remonter un élément d'ordre p", h: R`<p>On prend un antécédent $x$ : <span data-k="remonte">l'ordre de $\pi(x)$ divise l'ordre de $x$</span>. Une puissance convenable de $x$ est alors d'ordre $p$.</p>`, b: R`<p>Soit $x$ tel que $\pi(x)$ soit d'ordre $p$, et $m$ l'ordre de $x$. <span data-k="remonte">$\pi(x)^m = \pi(x^m) = e$</span>, donc $p\mid m$. Alors $y = x^{m/p}$ est d'ordre $p$.</p>`, rappels: ["k-quotient", "k-ordre"] },
    { q: 2, t: "Lemme de Cauchy", h: R`<p>On prend $x\neq e$. Si $p$ divise son ordre, c'est fini. Sinon, on passe au quotient par $\langle x\rangle$, plus petit, dont le cardinal reste divisible par $p$, et on remonte par la question 1.</p>`, b: R`<p>Récurrence forte sur $|G|$ (le cas $|G| = p$ : tout $x\neq e$ est d'ordre $p$). Soit $x\neq e$ d'ordre $m$.</p><ul><li>Si $p\mid m$ : $x^{m/p}$ est d'ordre $p$.</li><li>Sinon, $H = \langle x\rangle$, $|G/H| = \frac{|G|}m< |G|$ est divisible par $p$ (Gauss). Par hypothèse de récurrence, $G/H$ a un élément d'ordre $p$, et la question 1 conclut.</li></ul>`, rappels: ["recurrence", "o-b-gauss"] },
    { q: 3, t: "Sous-groupes d'ordre pᵃ", h: R`<p>Récurrence sur $a$. Cauchy donne $H$ d'ordre $p$ ; on cherche un sous-groupe d'ordre $p^{a-1}$ dans $G/H$ et <span data-k="image">on prend son image réciproque</span>.</p>`, b: R`<p>Le cas $a = 0$ est trivial. Si $p^a\mid|G|$ avec $a\geqslant1$ : par Cauchy, $H = \langle y\rangle$ avec $y$ d'ordre $p$. $|G/H| = \frac{|G|}p$ est divisible par $p^{a-1}$ ; par récurrence (sur $a$, pour tous les groupes abéliens), $G/H$ a un sous-groupe $K'$ d'ordre $p^{a-1}$. Alors <span data-k="image">$K = \pi^{-1}(K')$ est un sous-groupe de $G$ d'ordre $p\cdot p^{a-1} = p^a$</span>.</p>`, rappels: ["k-quotient"] },
    { q: 4, t: "Tous les diviseurs", h: R`<p>On décompose $n = p_1^{a_1}\cdots p_r^{a_r}$, on prend un sous-groupe $S_i$ d'ordre $p_i^{a_i}$ pour chaque $i$, et on montre que $S_1S_2\cdots S_r$ a exactement $n$ éléments.</p>`, b: R`<p>Soit $S_i$ d'ordre $p_i^{a_i}$ (question 3). $\varphi : S_1\times\dots\times S_r\to G$, $(s_i)\mapsto s_1\cdots s_r$, est un morphisme ($G$ abélien). Son noyau est trivial : si $s_1\cdots s_r = e$, <span data-k="copr">en élevant à la puissance $N_i$</span>, $s_i^{N_i} = e$ ; l'ordre de $s_i$ divise $p_i^{a_i}$ et $N_i$, premiers entre eux, donc $s_i = e$. Ainsi $\varphi$ est injective et son image $S_1\cdots S_r$ est un sous-groupe à $n$ éléments.</p><div class="sbox">$$n\mid|G|\ \Longrightarrow\ G\ \text{a un sous-groupe d'ordre}\ n.$$</div><p><b>Contre-exemple non abélien</b> : le groupe alterné $\mathcal A_4$, d'ordre $12$, n'a pas de sous-groupe d'ordre $6$.</p>`, rappels: ["k-morph-card"] }
  ],
  ctx: { "k-quotient": R`<p>$\pi : G\to G/H$, $|G/H| = |G|/|H|$, chaque élément a $|H|$ antécédents.</p>`, "k-ordre": R`<p>$x^{m/p}$ est d'ordre $p$.</p>`, "recurrence": R`<p>Récurrence forte sur le cardinal.</p>`, "o-b-gauss": R`<p>$p\mid m\cdot|G/H|$ et $p\nmid m$ donnent $p\mid|G/H|$.</p>`, "k-morph-card": R`<p>Noyau trivial : $|\operatorname{Im}\varphi| = \prod|S_i| = n$.</p>` },
  piege: R`Croire que la réciproque de Lagrange est vraie pour tout groupe : elle est fausse en général ($\mathcal A_4$), l'hypothèse « abélien » sert à chaque étape.`,
  methode: R`Récurrence sur le cardinal d'un groupe : passer au quotient par un sous-groupe bien choisi, puis remonter.`
}
]);
})();

/* ---------- MP · 5. Anneaux et arithmétique (1) ---------- */
LEMME.rappels({
  "k-pgcd-sym": { t: "PGCD et soustraction", b: R`<div class="sbox">$$\operatorname{pgcd}(a,m) = \operatorname{pgcd}(m-a,m).$$</div><p>Tout diviseur commun de $a$ et $m$ divise $m-a$, et inversement.</p>` },
  "k-crt": { t: "Lemme chinois", b: R`<p>Si $m\wedge n = 1$, l'application suivante est un isomorphisme d'anneaux :</p><div class="sbox">$$\mathbb Z/mn\mathbb Z\to\mathbb Z/m\mathbb Z\times\mathbb Z/n\mathbb Z,\qquad\bar x\mapsto(\bar x,\bar x).$$</div><p>Concrètement : avec $um+vn = 1$, l'entier $x = a\,vn+b\,um$ vérifie $x\equiv a\ [m]$ et $x\equiv b\ [n]$, et les solutions sont les $x+kmn$.</p>` },
  "k-inversible-zn": { t: "Inversibles de ℤ/nℤ", b: R`<div class="sbox">$$\bar a\ \text{inversible dans}\ \mathbb Z/n\mathbb Z\iff a\wedge n = 1.$$</div><p>$\mathbb Z/n\mathbb Z$ est un corps si et seulement si $n$ est premier.</p>` },
  "k-irred-modp": { t: "Réduction modulo p", b: R`<p>L'application $\mathbb Z[X]\to\mathbb F_p[X]$ qui réduit chaque coefficient modulo $p$ est un morphisme d'anneaux : $\overline{QR} = \bar Q\,\bar R$. Dans $\mathbb F_p[X]$ (anneau de polynômes sur un corps), la décomposition en facteurs irréductibles est unique.</p><div class="sbox">$$\bar Q\bar R = cX^n\ \Longrightarrow\ \bar Q = \alpha X^q,\ \bar R = \beta X^r.$$</div>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kh-13-1", subj: "kholles", year: "mp", chap: 5, level: 2, time: "15 min",
  title: "Somme des entiers premiers avec m",
  enonce: R`<p>Soit $m\geqslant2$ et $\varphi(m)$ le nombre d'entiers $a\in\{1,\dots,m\}$ premiers avec $m$. On note $S_m$ la somme de ces entiers.</p><ol><li>Montrer que $a\mapsto m-a$ permute les entiers $a\in\{1,\dots,m-1\}$ premiers avec $m$.</li><li>En déduire $S_m = \dfrac{m\,\varphi(m)}2$.</li><li>Montrer que $\varphi(m)$ est pair pour $m\geqslant3$.</li><li>Vérifier pour $m = 12$ et $m = 7$.</li></ol>`,
  decode: { donnees: [R`$\operatorname{pgcd}(a,m) = \operatorname{pgcd}(m-a,m)$.`], but: R`Calculer une somme par un argument de symétrie.`, cles: {
    gauss: R`L'astuce de Gauss : écrire la somme à l'endroit et à l'envers, puis additionner terme à terme. Chaque paire donne $a+(m-a) = m$.`,
    fixe: R`$a = m-a$ signifie $m = 2a$, et alors $\operatorname{pgcd}(a,m) = a$ : il vaut $1$ seulement si $a = 1$, $m = 2$.` } },
  steps: [
    { q: 1, t: "Une symétrie", h: R`<p>Un diviseur commun de $a$ et $m$ divise $m-a$ : la condition « premier avec $m$ » est symétrique.</p>`, b: R`<p>Pour $1\leqslant a\leqslant m-1$ : $1\leqslant m-a\leqslant m-1$ et $\operatorname{pgcd}(m-a,m) = \operatorname{pgcd}(a,m)$. Donc $a\mapsto m-a$ envoie l'ensemble $E_m$ des entiers $< m$ premiers avec $m$ dans lui-même, et c'est une involution, donc une bijection. (Pour $m\geqslant2$, $m$ n'est pas premier avec lui-même, donc $E_m$ a $\varphi(m)$ éléments.)</p>`, rappels: ["k-pgcd-sym"] },
    { q: 2, t: "L'astuce de Gauss", h: R`<p><span data-k="gauss">On écrit $S_m$ deux fois</span>, la deuxième en remplaçant chaque $a$ par $m-a$.</p>`, b: R`<p><span data-k="gauss">$S_m = \sum_{a\in E_m}a = \sum_{a\in E_m}(m-a)$</span> (même somme, termes réordonnés). En additionnant : $2S_m = \sum_{a\in E_m}m = m\varphi(m)$.</p><div class="sbox">$$S_m = \frac{m\,\varphi(m)}2.$$</div>` },
    { q: 3, t: "φ(m) est pair", h: R`<p>L'involution $a\mapsto m-a$ regroupe les éléments par paires, sauf <span data-k="fixe">ses points fixes</span>.</p>`, b: R`<p>Pour $m\geqslant3$, l'involution n'a <span data-k="fixe">pas de point fixe</span> dans $E_m$. Les éléments vont par paires $\{a,m-a\}$ : $\varphi(m)$ est pair.</p>` },
    { q: 4, t: "Deux vérifications", h: R`<p>On liste les entiers premiers avec $m$.</p>`, b: R`<ul><li>$m = 12$ : $1,5,7,11$, somme $24 = \frac{12\times4}2$.</li><li>$m = 7$ : $1,\dots,6$, somme $21 = \frac{7\times6}2$.</li></ul>` }
  ],
  ctx: { "k-pgcd-sym": R`<p>$\operatorname{pgcd}(m-a,m) = \operatorname{pgcd}(a,m)$.</p>` },
  piege: R`Oublier le cas $m = 2$ pour la parité : $\varphi(2) = 1$ est impair, car $a = 1$ est son propre symétrique.`,
  methode: R`Somme sur un ensemble stable par $a\mapsto m-a$ : additionner la somme et sa symétrique.`
},
{
  id: "kh-13-2", subj: "kholles", year: "mp", chap: 5, level: 3, time: "30 min",
  title: "Le lemme chinois",
  enonce: R`<p>Soient $m,n\geqslant2$ premiers entre eux et $a,b\in\mathbb Z$.</p><ol><li>Montrer qu'il existe $x\in\mathbb Z$ tel que $x\equiv a\ [m]$ et $x\equiv b\ [n]$, et décrire toutes les solutions.</li><li>En déduire que $\bar x\mapsto(\bar x,\bar x)$ est un isomorphisme d'anneaux de $\mathbb Z/mn\mathbb Z$ sur $\mathbb Z/m\mathbb Z\times\mathbb Z/n\mathbb Z$.</li><li>Une troupe compte entre $1000$ et $1150$ personnes. Rangées par $3$, il en reste $1$ ; par $5$, il en reste $2$ ; par $7$, il en reste $3$. Combien sont-elles ?</li><li>Donner l'isomorphisme réciproque de $\mathbb Z/105\mathbb Z\to\mathbb Z/3\mathbb Z\times\mathbb Z/5\mathbb Z\times\mathbb Z/7\mathbb Z$.</li></ol>`,
  decode: { donnees: [R`$m\wedge n = 1$ : il existe $u,v$ avec $um+vn = 1$ (Bézout).`], but: R`Résoudre un système de congruences.`, cles: {
    idem: R`$vn\equiv1\ [m]$ et $vn\equiv0\ [n]$ ; $um\equiv0\ [m]$ et $um\equiv1\ [n]$. Ces deux nombres jouent le rôle de « $(1,0)$ » et « $(0,1)$ ».`,
    card: R`Les deux anneaux ont $mn$ éléments : une application injective entre eux est bijective.`,
    base: R`On cherche $e_3,e_5,e_7$ avec $e_3\equiv1\ [3]$, $e_3\equiv0\ [5]$ et $[7]$, etc. : $e_3$ est un multiple de $35$ congru à $1$ modulo $3$.` } },
  steps: [
    { q: 1, t: "Existence par Bézout", h: R`<p>Bézout fournit deux nombres qui valent <span data-k="idem">« $1$ d'un côté, $0$ de l'autre »</span>. On les combine avec $a$ et $b$.</p>`, b: R`<p>Soit $um+vn = 1$. Alors <span data-k="idem">$vn\equiv1\ [m]$, $vn\equiv0\ [n]$, $um\equiv0\ [m]$, $um\equiv1\ [n]$</span>. Donc $x = a\,vn+b\,um$ vérifie $x\equiv a\ [m]$ et $x\equiv b\ [n]$.</p>`, rappels: ["o-b-gauss"] },
    { q: 1, t: "Toutes les solutions", h: R`<p>Deux solutions ont une différence divisible par $m$ et par $n$, donc par $mn$ (Gauss).</p>`, b: R`<p>Si $x'$ est une autre solution, $m\mid x'-x$ et $n\mid x'-x$, donc $mn\mid x'-x$ ($m\wedge n = 1$). Réciproquement $x+kmn$ convient.</p><div class="sbox">$$\{x' : x'\equiv a\ [m],\ x'\equiv b\ [n]\} = x+mn\mathbb Z.$$</div>` },
    { q: 2, t: "L'isomorphisme", h: R`<p>L'application est bien définie et respecte $+$ et $\times$. Surjective par la question 1, et <span data-k="card">même cardinal fini</span>.</p>`, b: R`<p>Si $mn\mid x-y$, alors $m\mid x-y$ et $n\mid x-y$ : l'application est bien définie. Elle respecte sommes, produits et $\bar1$ : c'est un morphisme d'anneaux. Surjective par la question 1, entre deux ensembles <span data-k="card">à $mn$ éléments</span> : bijective.</p>`, rappels: ["k-crt"] },
    { q: 3, t: "La troupe", h: R`<p>On résout deux congruences, puis on combine avec la troisième. Ou on cherche directement modulo $105$.</p>`, b: R`<p>$x\equiv1\ [3]$ et $x\equiv2\ [5]$ : parmi $2,7,12,\dots$ (les $\equiv2\ [5]$), $7\equiv1\ [3]$, donc $x\equiv7\ [15]$. Puis $x\equiv7\ [15]$ et $x\equiv3\ [7]$ : parmi $7,22,37,52,\dots$, on a $52 = 7\cdot7+3$. Donc $x\equiv52\ [105]$. Entre $1000$ et $1150$ : $52+105\times10 = 1102$.</p><div class="sbox">$$\text{La troupe compte}\ 1102\ \text{personnes.}$$</div>` },
    { q: 4, t: "L'isomorphisme réciproque", h: R`<p>On construit <span data-k="base">trois entiers « interrupteurs »</span> modulo $105$, puis $h^{-1}(a,b,c) = ae_3+be_5+ce_7$.</p>`, b: R`<p><span data-k="base">$e_3$ multiple de $35$ avec $e_3\equiv1\ [3]$</span> : $70$. $e_5$ multiple de $21$, $\equiv1\ [5]$ : $21$. $e_7$ multiple de $15$, $\equiv1\ [7]$ : $15$.</p><div class="sbox">$$h^{-1}(\bar a,\bar b,\bar c) = \overline{70a+21b+15c}\ \text{dans}\ \mathbb Z/105\mathbb Z.$$</div><p>Vérification sur la troupe : $70+42+45 = 157\equiv52\ [105]$.</p>` }
  ],
  ctx: { "o-b-gauss": R`<p>Bézout : $um+vn = 1$.</p>`, "k-crt": R`<p>C'est exactement l'énoncé du lemme chinois.</p>` },
  piege: R`Oublier que les solutions forment une classe modulo $mn$ (et non modulo $m$ ou $n$) : c'est Gauss, avec $m\wedge n = 1$.`,
  methode: R`Système de congruences à modules premiers entre eux : construire des « interrupteurs » par Bézout.`
},
{
  id: "kh-13-3", subj: "kholles", year: "mp", chap: 5, level: 4, time: "30 min",
  title: "Un morphisme surjectif entre groupes d'inversibles",
  enonce: R`<p>Soit $m\geqslant2$ et $d\geqslant2$ un diviseur de $m$. On note $U_m = (\mathbb Z/m\mathbb Z)^\ast$.</p><ol><li>Montrer que $h : U_m\to U_d$, $x\bmod m\mapsto x\bmod d$, est bien définie et est un morphisme de groupes.</li><li>Soit $x$ premier avec $d$. On écrit $m = m_1m_2$, où $m_1$ regroupe les facteurs premiers de $m$ qui divisent $d$, et $m_2$ les autres. Montrer que $d\mid m_1$ et $m_1\wedge m_2 = 1$.</li><li>Montrer qu'il existe $y$ avec $y\equiv x\ [m_1]$ et $y\equiv1\ [m_2]$, et que $y$ est premier avec $m$. En déduire que $h$ est surjectif.</li><li>Exemple : $m = 12$, $d = 4$, et $m = 20$, $d = 10$ : décrire $h$.</li></ol>`,
  decode: { donnees: [R`$d\mid m$ ; $\bar x$ inversible modulo $n$ $\iff x\wedge n = 1$.`], but: R`Relever un inversible modulo $d$ en un inversible modulo $m$.`, cles: {
    bien: R`Si $x\equiv x'\ [m]$, alors $x\equiv x'\ [d]$ ; et si $x\wedge m = 1$, alors $x\wedge d = 1$ (un diviseur commun de $x$ et $d$ divise $m$).`,
    val: R`Pour $p\mid d$ : $v_p(d)\leqslant v_p(m) = v_p(m_1)$. Pour $p\nmid d$, $v_p(d) = 0$. Donc $d\mid m_1$.`,
    prem: R`Un premier $p\mid m$ divise $m_1$ ou $m_2$. Si $p\mid m_1$ : $p\mid d$, $p\nmid x$, et $y\equiv x\ [p]$. Si $p\mid m_2$ : $y\equiv1\ [p]$.` } },
  steps: [
    { q: 1, t: "Un morphisme bien défini", h: R`<p>Deux vérifications : <span data-k="bien">la réduction ne dépend pas du représentant, et elle envoie inversibles sur inversibles</span>.</p>`, b: R`<p><span data-k="bien">$m\mid x-x'\Rightarrow d\mid x-x'$</span>, et un inversible modulo $m$ reste inversible modulo $d$. Enfin $h(\bar x\bar y) = h(\bar x)h(\bar y)$ car la réduction respecte les produits.</p>`, rappels: ["k-inversible-zn"] },
    { q: 2, t: "Couper m en deux", h: R`<p>On sépare les nombres premiers de $m$ : ceux qui divisent $d$ (dans $m_1$) et les autres (dans $m_2$). <span data-k="val">Valuations $p$-adiques</span>.</p>`, b: R`<p>$m_1$ et $m_2$ n'ont aucun facteur premier commun : $m_1\wedge m_2 = 1$. <span data-k="val">Pour chaque premier $p$, $v_p(d)\leqslant v_p(m_1)$</span>, donc $d\mid m_1$.</p>` },
    { q: 3, t: "Construire un relevé inversible", h: R`<p>Lemme chinois : on impose $y\equiv x$ là où ça compte pour $d$, et $y\equiv1$ ailleurs, pour <span data-k="prem">qu'aucun premier de $m$ ne divise $y$</span>.</p>`, b: R`<p>Par le lemme chinois ($m_1\wedge m_2 = 1$), il existe $y$ avec $y\equiv x\ [m_1]$ et $y\equiv1\ [m_2]$. Comme $d\mid m_1$, $y\equiv x\ [d]$. <span data-k="prem">Aucun premier divisant $m$ ne divise $y$</span>, donc $y\wedge m = 1$, $\bar y\in U_m$ et $h(\bar y) = \bar x$.</p><div class="sbox">$$h : (\mathbb Z/m\mathbb Z)^\ast\to(\mathbb Z/d\mathbb Z)^\ast\ \text{est surjectif.}$$</div>`, rappels: ["k-crt"] },
    { q: 4, t: "Exemples", h: R`<p>Dans le premier exemple, le relevé naïf marche ; dans le second, il faut parfois l'astuce.</p>`, b: R`<ul><li>$m = 12$, $d = 4$ : $U_{12} = \{1,5,7,11\}\to U_4 = \{1,3\}$, avec $1,5\mapsto1$ et $7,11\mapsto3$.</li><li>$m = 20$, $d = 10$ : $U_{10} = \{1,3,7,9\}$, $U_{20} = \{1,3,7,9,11,13,17,19\}$. $h$ envoie $1,11\mapsto1$, $3,13\mapsto3$, etc. Ici $x = 3$ se relève directement ; mais avec $m = 30$, $d = 10$, $x = 3$ n'est pas premier avec $30$ : on prend $y\equiv3\ [10]$, $y\equiv1\ [3]$, soit $y = 13$.</li></ul>` }
  ],
  ctx: { "k-inversible-zn": R`<p>$x\wedge m = 1\Rightarrow x\wedge d = 1$.</p>`, "k-crt": R`<p>Avec $m_1\wedge m_2 = 1$.</p>` },
  piege: R`Relever $x$ par lui-même : $x$ premier avec $d$ ne l'est pas forcément avec $m$ (exemple $x = 3$, $d = 10$, $m = 30$).`,
  methode: R`Pour relever une classe en imposant une condition supplémentaire : lemme chinois avec une factorisation adaptée du module.`
},
{
  id: "kh-13-4", subj: "kholles", year: "mp", chap: 5, level: 3, time: "25 min",
  title: "Le théorème de Wilson",
  enonce: R`<ol><li>Soit $p$ premier. Déterminer les éléments de $\mathbb F_p^\ast$ égaux à leur inverse.</li><li>En déduire que $(p-1)!\equiv-1\ [p]$.</li><li>Réciproquement, montrer que si $n\geqslant2$ vérifie $(n-1)!\equiv-1\ [n]$, alors $n$ est premier.</li><li>Soit $p = 4k+1$ premier. Montrer que $\big((2k)!\big)^2\equiv-1\ [p]$. Vérifier pour $p = 13$.</li></ol>`,
  decode: { donnees: [R`$\mathbb F_p = \mathbb Z/p\mathbb Z$ est un corps.`], but: R`Caractériser les nombres premiers par une congruence.`, cles: {
    inv: R`$x = x^{-1}\iff x^2 = 1\iff(x-1)(x+1) = 0\iff x = \pm1$, car un corps est intègre.`,
    paires: R`Les autres éléments $2,\dots,p-2$ se regroupent par paires $\{x,x^{-1}\}$ de produit $1$.`,
    sym: R`$p-j\equiv-j\ [p]$ : les facteurs $2k+1,\dots,4k$ sont, modulo $p$, les opposés de $2k,\dots,1$.` } },
  steps: [
    { q: 1, t: "Les éléments égaux à leur inverse", h: R`<p>On résout $x^2 = 1$ dans un corps : <span data-k="inv">produit nul</span>.</p>`, b: R`<p><span data-k="inv">$x^2 = 1\iff(x-1)(x+1) = 0\iff x = 1$ ou $x = -1$</span>. Ce sont $\bar1$ et $\overline{p-1}$ (confondus si $p = 2$).</p>`, rappels: ["k-inversible-zn"] },
    { q: 2, t: "Simplifier le produit", h: R`<p>Dans $(p-1)!$, <span data-k="paires">chaque élément rencontre son inverse</span>, sauf $1$ et $-1$.</p>`, b: R`<p>Pour $p\geqslant3$ : <span data-k="paires">les éléments $\bar2,\dots,\overline{p-2}$ s'apparient avec leurs inverses</span>, chaque paire donne $\bar1$. Il reste $\bar1\cdot\overline{p-1}$ :</p><div class="sbox">$$(p-1)!\equiv-1\pmod p.$$</div><p>($p = 2$ : $1!\equiv-1\ [2]$.) Exemple $p = 7$ : $720 = 7\times103-1$.</p>` },
    { q: 3, t: "La réciproque", h: R`<p>Si $n$ a un diviseur $d$ avec $1< d< n$, alors $d$ divise $(n-1)!$, et aussi $(n-1)!+1$ : il divise $1$.</p>`, b: R`<p>Soit $d\mid n$ avec $1< d< n$. Alors $d\mid(n-1)!$ (c'est un des facteurs) et $d\mid n\mid(n-1)!+1$, donc $d\mid1$ : absurde. $n$ n'a pas de diviseur strict : il est premier.</p><div class="sbox">$$n\ \text{premier}\iff(n-1)!\equiv-1\pmod n.$$</div>`, rappels: ["absurde"] },
    { q: 4, t: "Une racine carrée de −1", h: R`<p>On coupe $(4k)!$ en deux moitiés : <span data-k="sym">la seconde moitié est l'opposée de la première</span> modulo $p$.</p>`, b: R`<p>$(p-1)! = \prod_{j=1}^{2k}j\cdot\prod_{j=1}^{2k}(p-j)\equiv(2k)!\cdot(-1)^{2k}(2k)! = \big((2k)!\big)^2$ (<span data-k="sym">car $p-j\equiv-j$</span>). Par Wilson :</p><div class="sbox">$$\big((2k)!\big)^2\equiv-1\pmod p.$$</div><p>$p = 13$, $k = 3$ : $6! = 720 = 13\times55+5$, et $5^2 = 25 = 26-1\equiv-1\ [13]$.</p>` }
  ],
  ctx: { "k-inversible-zn": R`<p>$\mathbb F_p$ est un corps, donc intègre.</p>`, "absurde": R`<p>On suppose un diviseur strict de $n$.</p>` },
  piege: R`Apparier $x$ avec $x^{-1}$ sans exclure les cas $x = x^{-1}$ : c'est la question 1 qui les identifie.`,
  methode: R`Produit de tous les éléments d'un groupe abélien fini : apparier chaque élément avec son inverse.`
},
{
  id: "kh-13-5", subj: "kholles", year: "mp", chap: 5, level: 4, time: "35 min",
  title: "Le critère d'Eisenstein",
  enonce: R`<p>Soit $P = a_nX^n+\dots+a_0\in\mathbb Z[X]$, $n\geqslant1$, et $p$ premier tel que $p\mid a_k$ pour $k< n$, $p\nmid a_n$ et $p^2\nmid a_0$.</p><ol><li>On suppose $P = QR$ avec $Q,R\in\mathbb Z[X]$ de degrés $q,r\geqslant1$. En réduisant modulo $p$, montrer que $\bar Q = \alpha X^q$ et $\bar R = \beta X^r$, puis aboutir à une contradiction.</li><li>Montrer que $X^n-2$ et $X^4+6X^2+3$ ne sont pas produits de deux polynômes non constants de $\mathbb Z[X]$.</li><li>Soit $\Phi_p = 1+X+\dots+X^{p-1}$. Calculer $\Phi_p(X+1)$ et en déduire que $\Phi_p$ n'est pas produit de deux polynômes non constants de $\mathbb Z[X]$.</li></ol>`,
  decode: { donnees: [R`Modulo $p$, $P$ se réduit à $\bar a_nX^n$, avec $\bar a_n\neq0$.`], but: R`Un critère pour montrer qu'un polynôme à coefficients entiers ne se factorise pas.`, cles: {
    monome: R`$\bar Q\bar R = \bar a_nX^n$ dans $\mathbb F_p[X]$ : par unicité de la décomposition (le seul irréductible qui apparaît est $X$), $\bar Q$ et $\bar R$ sont des monômes.`,
    const: R`Les termes constants de $\bar Q$ et $\bar R$ sont nuls ($q,r\geqslant1$), donc $p$ divise $Q(0)$ et $R(0)$, et $p^2$ divise $Q(0)R(0) = a_0$.`,
    shift: R`$P(X)\mapsto P(X+1)$ est un automorphisme de $\mathbb Z[X]$ qui respecte les degrés : une factorisation de $\Phi_p$ en donnerait une de $\Phi_p(X+1)$.` } },
  steps: [
    { q: 1, t: "Réduire modulo p", h: R`<p>Modulo $p$, $P$ devient un <b>monôme</b>. La réduction est un morphisme, et dans $\mathbb F_p[X]$ on a l'unicité de la factorisation : <span data-k="monome">les facteurs sont des monômes</span>.</p>`, b: R`<p>$\bar P = \bar Q\,\bar R = \bar a_nX^n$ avec $\bar a_n\neq0$. Dans $\mathbb F_p[X]$, <span data-k="monome">$\bar Q = \alpha X^{q'}$ et $\bar R = \beta X^{r'}$</span>. Comme $\deg Q+\deg R = n$ et $q'+r' = n$ avec $q'\leqslant q$, $r'\leqslant r$, on a $q' = q\geqslant1$ et $r' = r\geqslant1$.</p>`, rappels: ["k-irred-modp"] },
    { q: 1, t: "La contradiction", h: R`<p><span data-k="const">Les termes constants de $Q$ et $R$ sont divisibles par $p$</span>, donc leur produit $a_0$ par $p^2$.</p>`, b: R`<p>$q,r\geqslant1$, donc $\bar Q(0) = \bar R(0) = 0$ : $p\mid Q(0)$ et $p\mid R(0)$. Or $a_0 = P(0) = Q(0)R(0)$, divisible par $p^2$ : contradiction.</p><div class="sbox">$$P\ \text{n'est pas produit de deux polynômes non constants de}\ \mathbb Z[X].$$</div>`, rappels: ["absurde"] },
    { q: 2, t: "Deux applications", h: R`<p>Il suffit de trouver le bon nombre premier.</p>`, b: R`<ul><li>$X^n-2$ : $p = 2$ divise $-2$, ne divise pas $1$, et $4\nmid2$.</li><li>$X^4+6X^2+3$ : $p = 3$ divise $6$ et $3$, ne divise pas $1$, et $9\nmid3$.</li></ul><p>En particulier, $X^n-2$ est irréductible sur $\mathbb Q$ (lemme de Gauss) : $\sqrt[n]2$ est de degré $n$.</p>` },
    { q: 3, t: "Le polynôme cyclotomique", h: R`<p>$\Phi_p$ ne vérifie pas le critère tel quel, mais <span data-k="shift">après la translation $X\to X+1$</span>, si : ses coefficients deviennent des $\binom pk$.</p>`, b: R`<p>$\Phi_p(X) = \frac{X^p-1}{X-1}$, donc</p>$$\Phi_p(X+1) = \frac{(X+1)^p-1}{X} = X^{p-1}+\binom p{p-1}X^{p-2}+\dots+\binom p2X+p.$$<p>$p$ divise $\binom pk$ pour $1\leqslant k\leqslant p-1$, ne divise pas $1$, et $p^2\nmid p$ : Eisenstein s'applique à $\Phi_p(X+1)$. <span data-k="shift">Si $\Phi_p = QR$, alors $\Phi_p(X+1) = Q(X+1)R(X+1)$</span> serait une factorisation non triviale : impossible.</p>`, rappels: ["o-b-binom-p"] }
  ],
  ctx: { "k-irred-modp": R`<p>$\bar Q\bar R = \bar a_nX^n$ dans $\mathbb F_p[X]$.</p>`, "absurde": R`<p>On suppose une factorisation $P = QR$.</p>`, "o-b-binom-p": R`<p>Tous les coefficients intermédiaires de $\Phi_p(X+1)$ sont des $\binom pk$.</p>` },
  piege: R`Oublier de vérifier que les degrés ne baissent pas après réduction : c'est $p\nmid a_n$ qui l'assure.`,
  methode: R`Pour un polynôme de $\mathbb Z[X]$ : chercher un premier qui divise tout sauf le coefficient dominant (Eisenstein), quitte à translater la variable.`
}
]);
})();

/* ---------- MP · 5. Anneaux et arithmétique (2) ---------- */
LEMME.rappels({
  "k-ideal": { t: "Idéal d'un anneau commutatif", b: R`<p>$I\subset A$ est un idéal si c'est un sous-groupe additif et si $a\in A$, $x\in I\Rightarrow ax\in I$.</p><div class="sbox">$$x,y\in I\Rightarrow x-y\in I,\qquad a\in A,\ x\in I\Rightarrow ax\in I.$$</div><p>Si $1\in I$ (ou un inversible), alors $I = A$. L'idéal engendré par $a,b$ est $aA+bA$.</p>` },
  "k-premier": { t: "Idéal premier", b: R`<p>Un idéal $I\neq A$ est premier si</p><div class="sbox">$$xy\in I\ \Longrightarrow\ x\in I\ \text{ou}\ y\in I.$$</div><p>$\{0\}$ est premier si et seulement si $A$ est intègre. Dans $\mathbb Z$, les idéaux premiers non nuls sont les $p\mathbb Z$, $p$ premier.</p>` },
  "k-noyau-ideal": { t: "Noyau d'un morphisme d'anneaux", b: R`<p>Si $\varphi : A\to B$ est un morphisme d'anneaux, $\ker\varphi$ est un idéal de $A$. Si $B$ est intègre, $\ker\varphi$ est premier :</p><div class="sbox">$$\varphi(xy) = \varphi(x)\varphi(y) = 0\ \Longrightarrow\ \varphi(x) = 0\ \text{ou}\ \varphi(y) = 0.$$</div>` },
  "k-degre-produit": { t: "Degré d'un produit", b: R`<p>Si $A$ est intègre, $\deg(PQ) = \deg P+\deg Q$ dans $A[X]$. En particulier, les inversibles de $A[X]$ sont les constantes inversibles de $A$.</p>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kh-13-6", subj: "kholles", year: "mp", chap: 5, level: 3, time: "25 min",
  title: "ℤ[X] n'est pas principal",
  enonce: R`<ol><li>Soit $I = 2\mathbb Z[X]+X\mathbb Z[X]$ l'idéal engendré par $2$ et $X$. Décrire $I$ (les polynômes dont le terme constant est pair) et montrer que $I\neq\mathbb Z[X]$.</li><li>Montrer que $I$ n'est pas principal. Conclure.</li><li>Soit $A$ un anneau intègre. Montrer que $A[X]$ est principal si et seulement si $A$ est un corps.</li></ol>`,
  decode: { donnees: [R`Un anneau principal est intègre et tous ses idéaux sont de la forme $aA$.`], but: R`Exhiber un idéal de $\mathbb Z[X]$ engendré par deux éléments mais pas par un seul.`, cles: {
    desc: R`$2U+XV$ a pour terme constant $2U(0)$, pair. Réciproquement, un polynôme de terme constant $2c$ s'écrit $2c+X\cdot(\dots)$.`,
    deg: R`$2 = PQ$ dans $\mathbb Z[X]$ : les degrés s'ajoutent, donc $P$ est une constante, un diviseur de $2$ : $\pm1$ ou $\pm2$.`,
    gen: R`Avec $a$ non nul non inversible, l'idéal $aA[X]+XA[X]$ joue le même rôle que $(2,X)$.` } },
  steps: [
    { q: 1, t: "Décrire l'idéal", h: R`<p>On regarde le <span data-k="desc">terme constant</span> : $X\cdot V$ n'en a pas, $2U$ en a un pair.</p>`, b: R`<p><span data-k="desc">$I = \{P\in\mathbb Z[X] : P(0)\ \text{pair}\}$</span>. Comme $1(0) = 1$ est impair, $1\notin I$ : $I\neq\mathbb Z[X]$.</p>`, rappels: ["k-ideal"] },
    { q: 2, t: "Pas de générateur unique", h: R`<p>Si $I = P\,\mathbb Z[X]$, alors $P$ divise $2$ et $X$. <span data-k="deg">Diviser $2$ force $P$ constant</span> ; diviser $X$ force $P = \pm1$.</p>`, b: R`<p>Supposons $I = P\mathbb Z[X]$. $2\in I$, donc $2 = PQ$ : <span data-k="deg">$P$ est constant, $P\in\{\pm1,\pm2\}$</span>. $X\in I$, donc $X = PR$ : le coefficient dominant de $X$ est $1 = P\cdot r$, donc $P = \pm1$. Alors $I = \mathbb Z[X]$, contradiction avec la question 1.</p><div class="sbox">$$\mathbb Z[X]\ \text{n'est pas principal.}$$</div>`, rappels: ["k-degre-produit", "absurde"] },
    { q: 3, t: "Le cas général", h: R`<p>Si $A$ est un corps, $A[X]$ a une division euclidienne : il est principal. Sinon, <span data-k="gen">on imite $(2,X)$</span> avec un élément non inversible.</p>`, b: R`<p><b>$A$ corps</b> : $A[X]$ est euclidien, donc principal (un idéal non nul est engendré par un élément de degré minimal).</p><p><b>$A$ pas un corps</b> : soit $a\neq0$ non inversible et <span data-k="gen">$I = aA[X]+XA[X]$</span>. Si $I = PA[X]$ : $a = PQ$ donne $P$ constant, $X = PR$ donne $P\cdot r = 1$, donc $P$ inversible et $I = A[X]$. Alors $1 = aU+XV$ ; en évaluant en $0$ : $1 = aU(0)$, et $a$ serait inversible. Contradiction.</p><div class="sbox">$$A[X]\ \text{principal}\iff A\ \text{corps}.$$</div>` }
  ],
  ctx: { "k-ideal": R`<p>$I = 2\mathbb Z[X]+X\mathbb Z[X]$.</p>`, "k-degre-produit": R`<p>$\mathbb Z$ est intègre : $\deg(PQ) = \deg P+\deg Q$.</p>`, "absurde": R`<p>On suppose $I$ principal.</p>` },
  piege: R`Croire qu'un idéal engendré par deux éléments premiers entre eux est tout l'anneau : c'est vrai dans $\mathbb Z$ (Bézout), faux dans $\mathbb Z[X]$ ($2$ et $X$ n'ont pas de diviseur commun, mais $(2,X)\neq\mathbb Z[X]$).`,
  methode: R`Pour montrer qu'un idéal n'est pas principal : supposer $I = (P)$, en déduire $P$ par les degrés, puis évaluer en un point.`
},
{
  id: "kh-13-7", subj: "kholles", year: "mp", chap: 5, level: 4, time: "35 min",
  title: "Idéaux maximaux",
  enonce: R`<p>Soit $A$ un anneau commutatif. Un idéal $I\neq A$ est <b>maximal</b> si les seuls idéaux contenant $I$ sont $I$ et $A$.</p><ol><li>Montrer que $I$ est maximal si et seulement si, pour tout $a\notin I$, $I+aA = A$.</li><li>Montrer que tout idéal maximal est premier.</li><li>Déterminer les idéaux maximaux de $\mathbb Z$.</li><li>Soit $\varphi : \mathbb Z[X]\to\mathbb C$, $P\mapsto P(i)$. Montrer que $\ker\varphi = (X^2+1)\mathbb Z[X]$ et en déduire que cet idéal est premier. Montrer qu'il n'est pas maximal, en considérant $(X^2+1)\mathbb Z[X]+2\mathbb Z[X]$.</li></ol>`,
  decode: { donnees: [R`$I+aA = \{x+ab : x\in I,\ b\in A\}$ est le plus petit idéal contenant $I$ et $a$.`], but: R`Relier maximal et premier, avec des exemples dans $\mathbb Z$ et $\mathbb Z[X]$.`, cles: {
    un: R`$I+xA = A$ signifie : il existe $i\in I$, $b\in A$ avec $i+xb = 1$. On multiplie par $y$.`,
    div: R`$X^2+1$ est unitaire : la division euclidienne par $X^2+1$ marche dans $\mathbb Z[X]$. $P = (X^2+1)Q+(c+dX)$ avec $c,d\in\mathbb Z$.`,
    demi: R`Si $1 = (X^2+1)U+2V$, en évaluant en $i$ : $1 = 2V(i)$, avec $V(i)\in\mathbb Z[i]$. Or $\frac12\notin\mathbb Z[i]$.` } },
  steps: [
    { q: 1, t: "Une caractérisation", h: R`<p>$I+aA$ est un idéal qui contient $I$ et $a$ ; s'il contient strictement $I$ et que $I$ est maximal, c'est $A$.</p>`, b: R`<p>$\Rightarrow$ : si $a\notin I$, $I+aA$ est un idéal contenant strictement $I$, donc égal à $A$. $\Leftarrow$ : si $J\supsetneq I$ est un idéal, prenons $a\in J\setminus I$ ; alors $A = I+aA\subset J$, donc $J = A$.</p>`, rappels: ["k-ideal"] },
    { q: 2, t: "Maximal implique premier", h: R`<p>Si $xy\in I$ et $x\notin I$, on écrit <span data-k="un">$1 = i+xb$</span> et on multiplie par $y$ : tout se retrouve dans $I$.</p>`, b: R`<p>Soit $xy\in I$ avec $x\notin I$. Par la question 1, <span data-k="un">$1 = i+xb$</span> avec $i\in I$. Alors $y = iy+(xy)b\in I$.</p><div class="sbox">$$I\ \text{maximal}\ \Longrightarrow\ I\ \text{premier}.$$</div>`, rappels: ["k-premier"] },
    { q: 3, t: "Dans ℤ", h: R`<p>Tout idéal de $\mathbb Z$ est $n\mathbb Z$, et $n\mathbb Z\subset m\mathbb Z\iff m\mid n$.</p>`, b: R`<p>$n\mathbb Z$ ($n\geqslant2$) est maximal si et seulement si ses seuls « sur-idéaux » sont lui-même et $\mathbb Z$, c'est-à-dire si $n$ n'a pas d'autre diviseur positif que $1$ et $n$ : $n$ premier. ($\{0\}$ n'est pas maximal : $\{0\}\subsetneq2\mathbb Z$.)</p><div class="sbox">$$\text{Idéaux maximaux de}\ \mathbb Z : p\mathbb Z,\ p\ \text{premier}.$$</div>` },
    { q: 4, t: "Le noyau de P ↦ P(i)", h: R`<p><span data-k="div">Division euclidienne par $X^2+1$</span> (unitaire), puis on regarde le reste en $i$. Le noyau d'un morphisme vers un anneau intègre est premier.</p>`, b: R`<p>$(X^2+1)\mathbb Z[X]\subset\ker\varphi$ car $i^2+1 = 0$. Réciproquement, <span data-k="div">$P = (X^2+1)Q+c+dX$</span> ; si $P(i) = 0$ alors $c+di = 0$, donc $c = d = 0$. Ainsi $\ker\varphi = (X^2+1)\mathbb Z[X]$, et comme $\mathbb C$ est intègre, cet idéal est premier.</p>`, rappels: ["k-noyau-ideal"] },
    { q: 4, t: "Pas maximal", h: R`<p>On ajoute $2$ : l'idéal grossit strictement, mais <span data-k="demi">n'atteint pas $\mathbb Z[X]$</span> (sinon $\frac12$ serait un entier de Gauss).</p>`, b: R`<p>$J = (X^2+1)\mathbb Z[X]+2\mathbb Z[X]$ contient $2$, qui n'est pas multiple de $X^2+1$ : $J\supsetneq(X^2+1)$. Et $J\neq\mathbb Z[X]$ : <span data-k="demi">sinon $1 = 2V(i)$ dans $\mathbb Z[i]$</span>, impossible. Donc $(X^2+1)$ est premier mais pas maximal.</p><div class="sbox">$$\text{premier}\not\Rightarrow\text{maximal}.$$</div>` }
  ],
  ctx: { "k-ideal": R`<p>$I+aA$ est un idéal.</p>`, "k-premier": R`<p>On vérifie la définition.</p>`, "k-noyau-ideal": R`<p>$\mathbb C$ est intègre.</p>` },
  piege: R`Croire que premier et maximal coïncident partout : c'est vrai dans $\mathbb Z$ et $K[X]$ (pour les idéaux non nuls), faux dans $\mathbb Z[X]$.`,
  methode: R`Maximal : pour tout $a\notin I$, $1\in I+aA$. On l'utilise en écrivant $1 = i+ab$.`
},
{
  id: "kh-13-8", subj: "kholles", year: "mp", chap: 5, level: 3, time: "20 min",
  title: "Un anneau dont tous les idéaux sont premiers",
  enonce: R`<p>Soit $A$ un anneau commutatif non nul dans lequel tout idéal $I\neq A$ est premier.</p><ol><li>Montrer que $A$ est intègre.</li><li>Soit $a\neq0$. En considérant l'idéal $a^2A$, montrer que $a$ est inversible.</li><li>Conclure. Donner un exemple d'anneau intègre qui n'est pas un corps, et un idéal non premier.</li></ol>`,
  decode: { donnees: [R`Tous les idéaux stricts sont premiers, en particulier $\{0\}$ et les $a^2A$.`], but: R`Montrer que $A$ est un corps.`, cles: {
    zero: R`$\{0\}$ est un idéal strict ($A$ non nul), donc premier : $xy = 0\Rightarrow x = 0$ ou $y = 0$.`,
    carre: R`$a\cdot a = a^2\in a^2A$. Si $a^2A$ est premier, alors $a\in a^2A$ : $a = a^2b$.`,
    simpl: R`$a = a^2b\iff a(1-ab) = 0$, et $A$ est intègre.` } },
  steps: [
    { q: 1, t: "A est intègre", h: R`<p>On applique l'hypothèse à <span data-k="zero">l'idéal $\{0\}$</span>.</p>`, b: R`<p><span data-k="zero">$\{0\}$ est premier</span> : si $xy = 0$, alors $x = 0$ ou $y = 0$. $A$ est intègre.</p>`, rappels: ["k-premier"] },
    { q: 2, t: "L'idéal a²A", h: R`<p>Si $a^2A = A$, $a$ est inversible directement. Sinon il est premier, et <span data-k="carre">contient $a\cdot a$</span>.</p>`, b: R`<p>Si $a^2A = A$, alors $a^2b = 1$ et $a$ est inversible (d'inverse $ab$). Sinon $a^2A$ est premier et <span data-k="carre">$a\cdot a\in a^2A$ donne $a = a^2b$</span>. Alors <span data-k="simpl">$a(1-ab) = 0$</span>, $a\neq0$ et $A$ intègre : $ab = 1$.</p>` },
    { q: 3, t: "Conclusion et contre-exemple", h: R`<p>Tout élément non nul est inversible. Pour le contre-exemple, $\mathbb Z$ et l'idéal $4\mathbb Z$.</p>`, b: R`<div class="sbox">$$A\ \text{est un corps.}$$</div><p>Dans $\mathbb Z$ (intègre, pas un corps), $4\mathbb Z$ n'est pas premier : $2\times2\in4\mathbb Z$ mais $2\notin4\mathbb Z$. C'est exactement l'idéal $a^2A$ avec $a = 2$.</p>` }
  ],
  ctx: { "k-premier": R`<p>$\{0\}$ premier $\iff$ $A$ intègre.</p>` },
  piege: R`Oublier le cas $a^2A = A$, où l'hypothèse « premier » ne s'applique pas (un idéal premier est strict).`,
  methode: R`Pour montrer qu'un élément est inversible à partir d'une hypothèse sur les idéaux : regarder l'idéal engendré par une puissance de l'élément.`
},
{
  id: "kh-13-9", subj: "kholles", year: "mp", chap: 5, level: 4, time: "40 min",
  title: "Les valuations sur ℚ",
  enonce: R`<p>Une valuation sur $\mathbb Q$ est une application $\nu : \mathbb Q\to\mathbb R\cup\{+\infty\}$ telle que $\nu(xy) = \nu(x)+\nu(y)$, $\nu(x+y)\geqslant\min(\nu(x),\nu(y))$, et $\nu(x) = +\infty\iff x = 0$.</p><ol><li>Montrer que la valuation $p$-adique $v_p$ et la valuation triviale ($\nu(x) = 0$ pour $x\neq0$) en sont.</li><li>Soit $\nu$ une valuation. Montrer que $\nu(1) = \nu(-1) = 0$ et $\nu(n)\geqslant0$ pour $n\in\mathbb Z$.</li><li>On suppose $\nu$ non triviale. Montrer que $P = \{n\in\mathbb Z : \nu(n)>0\}$ est un idéal premier non nul de $\mathbb Z$, donc $P = p\mathbb Z$.</li><li>En déduire que $\nu = c\,v_p$ avec $c = \nu(p)>0$.</li></ol>`,
  decode: { donnees: [R`Trois axiomes : multiplicativité, inégalité ultramétrique, et seul $0$ vaut $+\infty$.`], but: R`Trouver toutes les valuations de $\mathbb Q$.`, cles: {
    un: R`$\nu(1) = \nu(1\cdot1) = 2\nu(1)$ donc $\nu(1) = 0$ ; $2\nu(-1) = \nu(1) = 0$.`,
    rec: R`$\nu(n+1)\geqslant\min(\nu(n),\nu(1)) = \min(\nu(n),0)\geqslant0$ par récurrence ; et $\nu(-n) = \nu(n)$.`,
    triv: R`Si $\nu(n) = 0$ pour tout entier $n\neq0$, alors $\nu(a/b) = \nu(a)-\nu(b) = 0$ : $\nu$ est triviale.`,
    decomp: R`$x = p^k\frac ab$ avec $a,b$ premiers avec $p$ et $k = v_p(x)$ ; $\nu(a) = \nu(b) = 0$ car $a,b\notin p\mathbb Z$.` } },
  steps: [
    { q: 1, t: "Deux exemples", h: R`<p>$v_p(x)$ est l'exposant de $p$ dans $x$. Pour la somme : on factorise par la plus petite puissance de $p$.</p>`, b: R`<p>$v_p(xy) = v_p(x)+v_p(y)$ (exposants qui s'ajoutent). Si $x = p^k\frac ab$, $y = p^l\frac cd$ avec $k\leqslant l$ : $x+y = p^k\frac{ad+p^{l-k}bc}{bd}$, et le numérateur est entier, de valuation $\geqslant0$ : $v_p(x+y)\geqslant k$. La valuation triviale vérifie clairement les axiomes.</p>` },
    { q: 2, t: "Les entiers ont une valuation positive", h: R`<p><span data-k="un">$\nu(1) = 0$</span>, puis <span data-k="rec">récurrence avec l'inégalité ultramétrique</span>.</p>`, b: R`<p><span data-k="un">$\nu(1) = 0$ et $\nu(-1) = 0$</span>. <span data-k="rec">Par récurrence, $\nu(n)\geqslant0$ pour $n\in\mathbb N$</span>, et $\nu(-n) = \nu(-1)+\nu(n) = \nu(n)$.</p>`, rappels: ["recurrence"] },
    { q: 3, t: "Un idéal premier", h: R`<p>$P$ est stable par somme (min de deux nombres $>0$) et par multiplication par un entier (valuation $\geqslant0$). Premier : une somme de deux nombres $\geqslant0$ est $>0$ si l'un des deux l'est.</p>`, b: R`<p>Si $n,m\in P$ : $\nu(n-m)\geqslant\min(\nu(n),\nu(-m))>0$. Si $k\in\mathbb Z$ : $\nu(kn) = \nu(k)+\nu(n)>0$. Donc $P$ est un idéal. $1\notin P$. Si $nm\in P$ : $\nu(n)+\nu(m)>0$ avec $\nu(n),\nu(m)\geqslant0$, donc l'un est $>0$ : $P$ est premier. <span data-k="triv">Si $P = \{0\}$, $\nu$ serait triviale</span>. Donc $P = p\mathbb Z$ avec $p$ premier.</p>`, rappels: ["k-ideal", "k-premier"] },
    { q: 4, t: "Identifier ν", h: R`<p>Tout entier premier avec $p$ est hors de $P$, donc de valuation $0$. On <span data-k="decomp">factorise par la puissance de $p$</span>.</p>`, b: R`<p>Soit $c = \nu(p)>0$. Pour $x\neq0$, <span data-k="decomp">$x = p^k\frac ab$ avec $p\nmid a$, $p\nmid b$</span> : $\nu(a) = \nu(b) = 0$, donc $\nu(x) = kc$.</p><div class="sbox">$$\nu = c\,v_p\quad(c>0,\ p\ \text{premier})\qquad\text{ou}\qquad\nu\ \text{triviale}.$$</div><p>Exemple : $\nu = 2v_3$ donne $\nu\left(\frac{18}{5}\right) = 4$.</p>` }
  ],
  ctx: { "recurrence": R`<p>$\nu(n+1)\geqslant\min(\nu(n),0)$.</p>`, "k-ideal": R`<p>$P$ stable par différence et par multiplication par un entier.</p>`, "k-premier": R`<p>Les idéaux premiers non nuls de $\mathbb Z$ sont les $p\mathbb Z$.</p>` },
  piege: R`Oublier de montrer $\nu(n)\geqslant0$ sur $\mathbb Z$ : c'est ce qui rend $P$ premier (sinon une somme de deux nombres pourrait être $>0$ avec un terme négatif).`,
  methode: R`Pour classer des objets définis sur $\mathbb Q$ : regarder ce qu'ils font sur $\mathbb Z$, et y repérer un idéal premier.`
}
]);
})();

/* ---------- MP · 6. Réduction (1) ---------- */
LEMME.rappels({
  "k-chi": { t: "Polynôme caractéristique", b: R`<div class="sbox">$$\chi_A(x) = \det(xI_n-A),\qquad\chi_A = X^n-\operatorname{tr}(A)X^{n-1}+\dots+(-1)^n\det A.$$</div><p>Deux matrices semblables ont le même polynôme caractéristique. Pour $n = 2$ : $\chi_A = X^2-\operatorname{tr}(A)X+\det A$.</p>` },
  "k-semblables": { t: "Matrices semblables", b: R`<div class="sbox">$$A\sim B\iff\exists P\in GL_n,\quad B = P^{-1}AP.$$</div><p>Deux matrices diagonalisables sont semblables si et seulement si elles ont le même polynôme caractéristique.</p>` },
  "k-poly-infini": { t: "Polynôme nul sur un ensemble infini", b: R`<p>Si un polynôme $Q(t)$ s'annule pour une infinité de valeurs de $t$, c'est le polynôme nul. En particulier :</p><div class="sbox">$$Q\neq0\ \Longrightarrow\ Q(t)\neq0\ \text{sauf pour un nombre fini de}\ t.$$</div>` },
  "k-rang-corps": { t: "Le rang ne dépend pas du corps", b: R`<p>Pour $A\in\mathcal M_n(\mathbb R)$, le rang de $A$ vu dans $\mathcal M_n(\mathbb C)$ est le même : c'est la taille du plus grand mineur non nul, et les mineurs sont les mêmes nombres.</p><div class="sbox">$$\operatorname{rg}_{\mathbb R}A = \operatorname{rg}_{\mathbb C}A.$$</div>` },
  "k-poly-min": { t: "Polynôme minimal", b: R`<p>$\pi_u$ est le polynôme unitaire de plus petit degré qui annule $u$. Tout polynôme annulateur est un multiple de $\pi_u$, et :</p><div class="sbox">$$P(u) = 0\iff\pi_u\mid P.$$</div><p>Les racines de $\pi_u$ sont exactement les valeurs propres de $u$.</p>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kh-14-1", subj: "kholles", year: "mp", chap: 6, level: 3, time: "30 min",
  title: "Localiser les valeurs propres : Gershgorin",
  enonce: R`<p>Soit $A = (a_{ij})\in\mathcal M_n(\mathbb C)$, et pour chaque $k$, $D_k = \overline D\big(a_{kk},r_k\big)$ avec $r_k = \sum_{j\neq k}|a_{kj}|$.</p><ol><li>Soit $\lambda$ valeur propre et $X$ un vecteur propre. En regardant la coordonnée de plus grand module, montrer que $\lambda\in\bigcup_kD_k$.</li><li>Montrer la même chose avec les disques construits sur les <b>colonnes</b>.</li><li>Soit $A$ symétrique réelle à diagonale strictement dominante et à coefficients diagonaux $>0$. Montrer que $A$ est définie positive.</li><li>Localiser les valeurs propres de $\begin{pmatrix}10&1&-1\\2&4&1\\0&1&-3\end{pmatrix}$ et montrer qu'elles sont réelles.</li></ol>`,
  decode: { donnees: [R`$AX = \lambda X$, $X\neq0$.`], but: R`Trouver des régions du plan complexe qui contiennent toutes les valeurs propres.`, cles: {
    max: R`$|x_k| = \max_j|x_j|>0$ : on divise la ligne $k$ par $x_k$, et tous les $\frac{|x_j|}{|x_k|}$ sont $\leqslant1$.`,
    transp: R`$A$ et $A^\top$ ont le même polynôme caractéristique, donc les mêmes valeurs propres.`,
    reel: R`Un polynôme réel a ses racines non réelles par paires conjuguées : si un disque isolé contient exactement une racine, elle est réelle.` } },
  steps: [
    { q: 1, t: "La ligne de la plus grande coordonnée", h: R`<p>Même idée que pour les matrices à diagonale dominante : <span data-k="max">la plus grande coordonnée contrôle la ligne</span>.</p>`, b: R`<p>Soit $k$ avec $|x_k| = \max_j|x_j|$. La ligne $k$ de $AX = \lambda X$ s'écrit $(\lambda-a_{kk})x_k = \sum_{j\neq k}a_{kj}x_j$, d'où</p>$$|\lambda-a_{kk}|\leqslant\sum_{j\neq k}|a_{kj}|\frac{|x_j|}{|x_k|}\leqslant r_k.$$<div class="sbox">$$\operatorname{sp}(A)\subset\bigcup_{k=1}^nD_k.$$</div>`, rappels: ["inegalite-triangulaire"] },
    { q: 2, t: "Version colonnes", h: R`<p>On applique la question 1 à <span data-k="transp">$A^\top$</span> : ses lignes sont les colonnes de $A$.</p>`, b: R`<p><span data-k="transp">$\operatorname{sp}(A) = \operatorname{sp}(A^\top)$</span>, et les disques de $A^\top$ sont $\overline D(a_{kk},c_k)$ avec $c_k = \sum_{i\neq k}|a_{ik}|$. Les valeurs propres sont donc dans l'intersection des deux réunions.</p>`, rappels: ["k-chi"] },
    { q: 3, t: "Symétrique à diagonale dominante", h: R`<p>Les valeurs propres sont réelles (théorème spectral). Chaque disque est centré en $a_{kk}>0$ avec un rayon $< a_{kk}$ : il est inclus dans $\{\operatorname{Re}z>0\}$.</p>`, b: R`<p>$A$ est symétrique réelle, ses valeurs propres sont réelles. Chacune est dans un $D_k\cap\mathbb R = [a_{kk}-r_k,a_{kk}+r_k]$ avec $a_{kk}-r_k>0$. Toutes les valeurs propres sont $>0$ : $A$ est définie positive.</p>`, rappels: ["o-b-spectral", "o-b-sym-pos"] },
    { q: 4, t: "Un exemple", h: R`<p>On calcule les trois disques ; s'ils sont deux à deux disjoints, chacun contient exactement une valeur propre (résultat admis, par continuité des racines), forcément <span data-k="reel">réelle</span>.</p>`, b: R`<p>Disques (lignes) : $\overline D(10,2)$, $\overline D(4,3)$, $\overline D(-3,1)$. Ils sont deux à deux disjoints : $[8,12]$, $[1,7]$, $[-4,-2]$ sur l'axe réel. En admettant que chaque disque isolé contient une valeur propre, celle-ci est réelle : sinon sa conjuguée, aussi valeur propre (matrice réelle), serait dans le même disque (symétrique par rapport à l'axe), et il y en aurait deux. Donc $\lambda_1\in[8,12]$, $\lambda_2\in[1,7]$, $\lambda_3\in[-4,-2]$ ; en particulier $\det A\neq0$.</p>` + FIG(420, 170, (() => { const X = v => 120 + v * 20, Y = 85; let s = `<line class="ax" x1="20" y1="${Y}" x2="410" y2="${Y}"/>`; for (const [c, r] of [[10, 2], [4, 3], [-3, 1]]) s += `<circle cx="${X(c)}" cy="${Y}" r="${r * 20}" style="fill:var(--yellow);opacity:.3;stroke:var(--ink);stroke-width:1.3"/><circle cx="${X(c)}" cy="${Y}" r="3.5" class="body"/>` + S(X(c), Y + 18, String(c).replace("-", "−"), "middle"); return s + `<line class="ax" x1="${X(0)}" y1="10" x2="${X(0)}" y2="160"/>`; })(), R`Les trois disques de Gershgorin (lignes) de l'exemple sont disjoints : une valeur propre réelle dans chacun.`, "Disques de Gershgorin disjoints") }
  ],
  ctx: { "inegalite-triangulaire": R`<p>Sur $\sum_{j\neq k}a_{kj}x_j$.</p>`, "k-chi": R`<p>$\chi_{A^\top} = \chi_A$.</p>`, "o-b-spectral": R`<p>Valeurs propres réelles d'une matrice symétrique réelle.</p>`, "o-b-sym-pos": R`<p>Spectre dans $]0,+\infty[$ : définie positive.</p>` },
  piege: R`Croire que chaque disque contient une valeur propre : c'est faux en général (seule la réunion est garantie), vrai pour un disque disjoint des autres.`,
  methode: R`Localiser des valeurs propres : prendre la plus grande coordonnée d'un vecteur propre et majorer la ligne correspondante.`
},
{
  id: "kh-14-2", subj: "kholles", year: "mp", chap: 6, level: 3, time: "25 min",
  title: "AB et BA ont le même polynôme caractéristique",
  enonce: R`<p>Soient $A,B\in\mathcal M_n(\mathbb K)$ ($\mathbb K = \mathbb R$ ou $\mathbb C$).</p><ol><li>Montrer que si $A$ est inversible, $AB$ et $BA$ sont semblables.</li><li>Pour $t\in\mathbb K$, on pose $A_t = A-tI_n$. Montrer que $A_t$ est inversible sauf pour un nombre fini de $t$.</li><li>Fixons $x\in\mathbb K$. En étudiant $t\mapsto\chi_{A_tB}(x)-\chi_{BA_t}(x)$, montrer que $\chi_{AB} = \chi_{BA}$.</li><li>En déduire que $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ et que $AB$, $BA$ ont les mêmes valeurs propres. Montrer qu'elles ne sont pas forcément semblables.</li></ol>`,
  decode: { donnees: [R`$\chi_M(x) = \det(xI_n-M)$ est un polynôme en les coefficients de $M$.`], but: R`Comparer les spectres de $AB$ et $BA$ sans hypothèse d'inversibilité.`, cles: {
    conj: R`$AB = A(BA)A^{-1}$ : on conjugue $BA$ par $A$.`,
    fini: R`$\det(A-tI_n) = (-1)^n\chi_A(t)$ est un polynôme non nul en $t$ : il a au plus $n$ racines.`,
    polyt: R`$t\mapsto\det\big(xI_n-(A-tI_n)B\big)$ est un polynôme en $t$ (déterminant d'une matrice dont les coefficients sont affines en $t$).` } },
  steps: [
    { q: 1, t: "Cas inversible", h: R`<p>On fait apparaître $BA$ au milieu de $AB$ : <span data-k="conj">conjugaison par $A$</span>.</p>`, b: R`<p><span data-k="conj">$A(BA)A^{-1} = AB$</span> : $AB$ et $BA$ sont semblables, donc $\chi_{AB} = \chi_{BA}$.</p>`, rappels: ["k-semblables"] },
    { q: 2, t: "Presque toujours inversible", h: R`<p>$A_t$ n'est pas inversible exactement quand $t$ est valeur propre de $A$ : <span data-k="fini">un nombre fini de cas</span>.</p>`, b: R`<p><span data-k="fini">$\det A_t = (-1)^n\chi_A(t)$</span>, polynôme unitaire au signe près, donc non nul : il s'annule en au plus $n$ valeurs de $t$.</p>`, rappels: ["k-poly-infini"] },
    { q: 3, t: "Une identité polynomiale en t", h: R`<p>Pour $x$ fixé, <span data-k="polyt">la différence est un polynôme en $t$</span>, nul pour une infinité de $t$ (question 1), donc nul. On prend $t = 0$.</p>`, b: R`<p>Fixons $x$. $D(t) = \chi_{A_tB}(x)-\chi_{BA_t}(x)$ est un polynôme en $t$. Pour tout $t$ non valeur propre de $A$, $A_t$ est inversible et $D(t) = 0$ (question 1). $D$ a une infinité de racines : $D = 0$. En $t = 0$ : $\chi_{AB}(x) = \chi_{BA}(x)$, pour tout $x$.</p><div class="sbox">$$\chi_{AB} = \chi_{BA}.$$</div>`, rappels: ["k-poly-infini"] },
    { q: 4, t: "Conséquences et limites", h: R`<p>La trace et le spectre se lisent sur $\chi$. Pour la non-similitude : un produit nul dans un sens, non nul dans l'autre.</p>`, b: R`<p>La trace est l'opposé du coefficient de $X^{n-1}$, et les valeurs propres sont les racines de $\chi$ : elles coïncident. Mais avec $A = \begin{pmatrix}1&0\\0&0\end{pmatrix}$, $B = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ : $AB = B\neq0$ et $BA = 0$. Même polynôme caractéristique $X^2$, mais $AB$ n'est pas semblable à $0$.</p>` }
  ],
  ctx: { "k-semblables": R`<p>$BA = A^{-1}(AB)A$.</p>`, "k-poly-infini": R`<p>$\chi_A$ a au plus $n$ racines ; $D(t)$ a une infinité de racines.</p>` },
  piege: R`Conclure que $AB$ et $BA$ sont semblables : seul le polynôme caractéristique est le même.`,
  methode: R`Prouver une identité polynomiale pour toutes les matrices : la prouver pour les inversibles, puis perturber $A$ en $A-tI_n$.`
},
{
  id: "kh-14-3", subj: "kholles", year: "mp", chap: 6, level: 3, time: "25 min",
  title: "Quand peut-on écrire U = AB et V = BA ?",
  enonce: R`<ol><li>Soient $U,V\in GL_n(\mathbb C)$. Montrer qu'il existe $A,B\in\mathcal M_n(\mathbb C)$ avec $AB = U$ et $BA = V$ si et seulement si $U$ et $V$ sont semblables.</li><li>Déterminer les $(a,b)\in\mathbb R^2$ pour lesquels il existe $A,B\in\mathcal M_2(\mathbb R)$ avec$$AB = \begin{pmatrix}2&1\\1&-2\end{pmatrix},\qquad BA = \begin{pmatrix}1&a\\-3&b\end{pmatrix}.$$</li></ol>`,
  decode: { donnees: [R`$U$ inversible : $\det U\neq0$.`], but: R`Caractériser les couples $(AB,BA)$ possibles.`, cles: {
    inv: R`$\det A\det B = \det U\neq0$ : $A$ et $B$ sont inversibles, et $BA = A^{-1}(AB)A$.`,
    const: R`Si $V = P^{-1}UP$ : on prend $A = P$ et $B = P^{-1}U$.`,
    diag: R`$\chi_U = X^2-5$ a deux racines réelles distinctes : $U$ est diagonalisable, et $V$ lui est semblable si et seulement si $\chi_V = \chi_U$.` } },
  steps: [
    { q: 1, t: "Sens direct", h: R`<p><span data-k="inv">Le déterminant force $A$ et $B$ inversibles</span>, puis on est dans le cas de l'exercice précédent.</p>`, b: R`<p>Si $AB = U$ et $BA = V$ : <span data-k="inv">$\det A\det B = \det U\neq0$</span>, donc $A$ inversible et $V = BA = A^{-1}(AB)A = A^{-1}UA$.</p>`, rappels: ["k-semblables"] },
    { q: 1, t: "Réciproque", h: R`<p>On cherche $A,B$ explicitement : <span data-k="const">$A = P$, $B = P^{-1}U$</span>.</p>`, b: R`<p>Si $V = P^{-1}UP$, posons <span data-k="const">$A = P$, $B = P^{-1}U$</span> : $AB = U$ et $BA = P^{-1}UP = V$.</p><div class="sbox">$$\exists A,B,\ AB = U,\ BA = V\iff U\sim V\qquad(U,V\ \text{inversibles}).$$</div>` },
    { q: 2, t: "Application", h: R`<p>$\det U = -5\neq0$. Et <span data-k="diag">$U$ est diagonalisable</span> : il suffit d'égaler traces et déterminants. Attention, on veut $A,B$ réelles.</p>`, b: R`<p>$\operatorname{tr}U = 0$, $\det U = -5$, $\chi_U = X^2-5$, racines $\pm\sqrt5$ distinctes. $V$ (réelle) est semblable à $U$ si et seulement si $\chi_V = X^2-5$ (alors $V$ est aussi diagonalisable avec les mêmes valeurs propres, et une matrice de passage réelle existe) :</p>$$\operatorname{tr}V = 1+b = 0,\qquad\det V = b+3a = -5.$$<div class="sbox">$$(a,b) = \left(-\tfrac43,\,-1\right).$$</div><p>Si $(a,b)$ est différent, $\chi_V\neq\chi_U$ et c'est impossible (question 1, ou simplement $\chi_{AB} = \chi_{BA}$).</p>`, rappels: ["k-chi"] }
  ],
  ctx: { "k-semblables": R`<p>$V = A^{-1}UA$.</p>`, "k-chi": R`<p>En dimension $2$ : $\chi = X^2-\operatorname{tr}X+\det$.</p>` },
  piege: R`Oublier de vérifier que $U$ est inversible : si $U$ ne l'était pas, l'exemple $AB\neq0$, $BA = 0$ montre que la similitude n'est plus nécessaire.`,
  methode: R`$AB$ et $BA$ avec un facteur inversible : ils sont semblables. Pour décider de la similitude en dimension $2$ diagonalisable : trace et déterminant.`
},
{
  id: "kh-14-4", subj: "kholles", year: "mp", chap: 6, level: 4, time: "30 min",
  title: "Similitude sur ℝ ou sur ℂ",
  enonce: R`<ol><li>Soient $A,B\in\mathcal M_n(\mathbb R)$ semblables dans $\mathcal M_n(\mathbb C)$ : $AP = PB$ avec $P\in GL_n(\mathbb C)$. On écrit $P = R+iS$ avec $R,S$ réelles. Montrer que $AR = RB$ et $AS = SB$.</li><li>Montrer que $t\mapsto\det(R+tS)$ est un polynôme non nul, et en déduire une matrice réelle inversible $Q$ telle que $AQ = QB$.</li><li>Soit $A\in\mathcal M_n(\mathbb R)$ à polynôme caractéristique scindé sur $\mathbb R$. Montrer que $A$ est diagonalisable dans $\mathcal M_n(\mathbb C)$ si et seulement si elle l'est dans $\mathcal M_n(\mathbb R)$.</li></ol>`,
  decode: { donnees: [R`$A,B$ réelles, $P$ complexe inversible.`], but: R`Remplacer une matrice de passage complexe par une réelle.`, cles: {
    parties: R`$AP = PB$ s'écrit $AR+iAS = RB+iSB$ ; comme $A,B,R,S$ sont réelles, on identifie parties réelles et imaginaires.`,
    nonnul: R`$\det(R+tS)$ est un polynôme en $t$ (à coefficients complexes) qui vaut $\det P\neq0$ en $t = i$ : il n'est pas nul, donc il a un nombre fini de racines, et il existe $t\in\mathbb R$ qui n'en est pas une.`,
    dim: R`$\dim_{\mathbb R}\ker(A-\lambda I_n) = n-\operatorname{rg}(A-\lambda I_n) = \dim_{\mathbb C}\ker(A-\lambda I_n)$ pour $\lambda$ réel.` } },
  steps: [
    { q: 1, t: "Parties réelle et imaginaire", h: R`<p><span data-k="parties">On sépare les parties réelle et imaginaire</span> de $AP = PB$.</p>`, b: R`<p><span data-k="parties">$AR+iAS = RB+iSB$</span> avec tout réel, donc $AR = RB$ et $AS = SB$. Par linéarité, $A(R+tS) = (R+tS)B$ pour tout réel $t$.</p>` },
    { q: 2, t: "Trouver un t réel qui marche", h: R`<p>$R+tS$ convient dès qu'elle est inversible. Le déterminant est <span data-k="nonnul">un polynôme non nul en $t$</span> (il vaut $\det P$ en $i$).</p>`, b: R`<p>$\Delta(t) = \det(R+tS)$ est polynomial en $t$ et <span data-k="nonnul">$\Delta(i) = \det P\neq0$</span> : $\Delta\neq0$, donc il a un nombre fini de racines. Il existe $t_0\in\mathbb R$ avec $\Delta(t_0)\neq0$ : $Q = R+t_0S\in GL_n(\mathbb R)$ et $AQ = QB$, soit $B = Q^{-1}AQ$.</p><div class="sbox">$$A\sim B\ \text{dans}\ \mathcal M_n(\mathbb C)\ \Longrightarrow\ A\sim B\ \text{dans}\ \mathcal M_n(\mathbb R).$$</div>`, rappels: ["k-poly-infini"] },
    { q: 3, t: "Diagonalisabilité", h: R`<p>Les valeurs propres sont réelles (polynôme scindé sur $\mathbb R$). Le critère « dimension des sous-espaces propres = multiplicité » ne dépend que de <span data-k="dim">rangs, identiques sur $\mathbb R$ et $\mathbb C$</span>.</p>`, b: R`<p>Les valeurs propres $\lambda$ sont réelles, de multiplicités $m_\lambda$ dans $\chi_A$ (les mêmes sur $\mathbb R$ et $\mathbb C$). <span data-k="dim">$\dim\ker(A-\lambda I_n) = n-\operatorname{rg}(A-\lambda I_n)$, le même sur les deux corps</span>. Le critère « $\dim E_\lambda = m_\lambda$ pour tout $\lambda$ » est donc le même.</p><div class="sbox">$$\chi_A\ \text{scindé sur}\ \mathbb R :\ A\ \text{diagonalisable sur}\ \mathbb C\iff\text{sur}\ \mathbb R.$$</div><p>Sans l'hypothèse « scindé sur $\mathbb R$ », c'est faux : la rotation $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ est diagonalisable sur $\mathbb C$, pas sur $\mathbb R$.</p>`, rappels: ["k-rang-corps", "o-b-diag-crit"] }
  ],
  ctx: { "k-poly-infini": R`<p>$\Delta\neq0$ a un nombre fini de racines ; $\mathbb R$ est infini.</p>`, "k-rang-corps": R`<p>Pour $A-\lambda I_n$, réelle.</p>`, "o-b-diag-crit": R`<p>Critère $\dim E_\lambda = m_\lambda$.</p>` },
  piege: R`Prendre directement $R$ ou $S$ comme matrice de passage : elles peuvent ne pas être inversibles. Il faut une combinaison $R+t_0S$.`,
  methode: R`Pour passer d'une matrice complexe à une réelle : écrire $P = R+iS$ et chercher $t$ réel avec $\det(R+tS)\neq0$.`
},
{
  id: "kh-14-5", subj: "kholles", year: "mp", chap: 6, level: 3, time: "25 min",
  title: "Quand un polynôme en u est-il inversible ?",
  enonce: R`<p>Soit $E$ de dimension finie, $u\in\mathcal L(E)$ de polynôme minimal $\pi_u$, et $P\in\mathbb K[X]$.</p><ol><li>Si $P\wedge\pi_u = 1$, montrer que $P(u)$ est inversible et que son inverse est un polynôme en $u$.</li><li>Si $D = P\wedge\pi_u\neq1$, écrire $\pi_u = BD$ et montrer que $B(u)\neq0$ et $D(u)\circ B(u) = 0$. En déduire que $P(u)$ n'est pas inversible.</li><li>Sur $\mathbb C$, en déduire : $P(u)$ inversible $\iff$ $P$ ne s'annule sur aucune valeur propre de $u$.</li><li>Exemple : $u$ de matrice $\begin{pmatrix}1&1\\0&1\end{pmatrix}$ et $P = X^2-X+1$. Calculer $P(u)^{-1}$.</li></ol>`,
  decode: { donnees: [R`$\pi_u(u) = 0$ et $\pi_u$ est de degré minimal.`], but: R`Caractériser l'inversibilité de $P(u)$ par l'arithmétique des polynômes.`, cles: {
    bez: R`Bézout : $MP+N\pi_u = 1$. En appliquant en $u$ : $M(u)P(u) = \mathrm{Id}$ car $\pi_u(u) = 0$.`,
    min: R`$\deg B< \deg\pi_u$ et $B\neq0$ : par minimalité, $B(u)\neq0$.`,
    racines: R`Sur $\mathbb C$, $P\wedge\pi_u\neq1$ ssi ils ont une racine commune, et les racines de $\pi_u$ sont les valeurs propres.` } },
  steps: [
    { q: 1, t: "Le cas premier", h: R`<p><span data-k="bez">Bézout, puis on évalue en $u$</span> : le terme en $\pi_u$ disparaît.</p>`, b: R`<p><span data-k="bez">$MP+N\pi_u = 1$</span> donne $M(u)\circ P(u) = \mathrm{Id}_E$ (et $P(u)\circ M(u) = \mathrm{Id}_E$, les polynômes en $u$ commutent).</p><div class="sbox">$$P\wedge\pi_u = 1\ \Longrightarrow\ P(u)^{-1} = M(u).$$</div>`, rappels: ["o-b-bezout-poly", "o-b-poly-endo"] },
    { q: 2, t: "Un diviseur de zéro", h: R`<p><span data-k="min">$B(u)\neq0$ par minimalité</span>, mais $D(u)B(u) = \pi_u(u) = 0$ : $D(u)$ n'est pas injectif sur $\operatorname{Im}B(u)\neq\{0\}$. Et $D$ divise $P$.</p>`, b: R`<p>$\deg B = \deg\pi_u-\deg D< \deg\pi_u$, donc <span data-k="min">$B(u)\neq0$</span>. Soit $y = B(u)(x)\neq0$ : $D(u)(y) = \pi_u(u)(x) = 0$, donc $D(u)$ n'est pas injectif. Comme $P = AD$, $P(u) = A(u)\circ D(u)$ n'est pas injectif.</p><div class="sbox">$$P(u)\ \text{inversible}\iff P\wedge\pi_u = 1.$$</div>`, rappels: ["k-poly-min"] },
    { q: 3, t: "Avec les valeurs propres", h: R`<p>Sur $\mathbb C$, deux polynômes sont premiers entre eux <span data-k="racines">si et seulement s'ils n'ont pas de racine commune</span>.</p>`, b: R`<p><span data-k="racines">$P\wedge\pi_u\neq1\iff$ ils ont une racine commune $\iff P(\lambda) = 0$ pour une valeur propre $\lambda$</span>. Donc $P(u)$ est inversible si et seulement si $P(\lambda)\neq0$ pour tout $\lambda\in\operatorname{sp}(u)$.</p>` },
    { q: 4, t: "Un calcul", h: R`<p>$\pi_u = (X-1)^2$ ; $P(1) = 1\neq0$. On cherche $M$ avec $MP\equiv1$ modulo $(X-1)^2$, sous la forme $M = \alpha+\beta(X-1)$.</p>`, b: R`<p>$u = \mathrm{Id}+N$ avec $N^2 = 0$, $\pi_u = (X-1)^2$. En posant $Y = X-1$ : $P = Y^2+Y+1\equiv1+Y$ modulo $Y^2$. Et $(1+Y)(1-Y) = 1-Y^2\equiv1$. Donc $M = 1-(X-1) = 2-X$ :</p><div class="sbox">$$P(u)^{-1} = 2\,\mathrm{Id}-u,\qquad\text{matrice}\ \begin{pmatrix}1&-1\\0&1\end{pmatrix}.$$</div><p>Vérification : $P(u) = u^2-u+I = \begin{pmatrix}1&1\\0&1\end{pmatrix}$, et le produit avec $\begin{pmatrix}1&-1\\0&1\end{pmatrix}$ vaut $I_2$.</p>` }
  ],
  ctx: { "o-b-bezout-poly": R`<p>$P\wedge\pi_u = 1$.</p>`, "o-b-poly-endo": R`<p>$(MP)(u) = M(u)\circ P(u)$.</p>`, "k-poly-min": R`<p>Aucun polynôme non nul de degré $< \deg\pi_u$ n'annule $u$.</p>` },
  piege: R`Confondre polynôme minimal et caractéristique : le critère marche aussi avec $\chi_u$ (mêmes racines), mais la preuve de la question 2 utilise la minimalité.`,
  methode: R`Inverser $P(u)$ : Bézout entre $P$ et un polynôme annulateur ; l'inverse est un polynôme en $u$.`
}
]);
})();

/* ---------- MP · 6. Réduction (2) ---------- */
LEMME.rappels({
  "k-vp-dim-finie": { t: "Nombre de valeurs propres", b: R`<p>En dimension finie $N$, un endomorphisme a au plus $N$ valeurs propres distinctes (des vecteurs propres associés à des valeurs propres distinctes sont libres).</p><div class="sbox">$$\#\operatorname{sp}(\varphi)\leqslant\dim F.$$</div>` },
  "k-stable-induit": { t: "Sous-espace stable et endomorphisme induit", b: R`<p>Si $F$ est stable par $u$ et $u$ diagonalisable, alors $u_{|F}$ est diagonalisable (il est annulé par le même polynôme scindé à racines simples).</p><div class="sbox">$$u\ \text{diagonalisable},\ u(F)\subset F\ \Longrightarrow\ u_{|F}\ \text{diagonalisable}.$$</div>` },
  "k-compact-dimfinie": { t: "Compacts en dimension finie", b: R`<p>Dans un espace vectoriel normé de dimension finie :</p><div class="sbox">$$K\ \text{compact}\iff K\ \text{fermé et borné}.$$</div><p>Un ensemble défini par des égalités et inégalités larges entre fonctions continues est fermé.</p>` },
  "k-compagnon": { t: "Matrice compagnon", b: R`<p>Pour $Q = X^n+a_{n-1}X^{n-1}+\dots+a_0$, la matrice compagnon $C_Q$ (des $1$ sous la diagonale, $-a_0,\dots,-a_{n-1}$ en dernière colonne) vérifie</p><div class="sbox">$$\chi_{C_Q} = Q.$$</div><p>C'est la matrice de $f$ dans une base $(x,f(x),\dots,f^{n-1}(x))$ quand $f^n(x) = -\sum a_kf^k(x)$.</p>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kh-14-6", subj: "kholles", year: "mp", chap: 6, level: 4, time: "30 min",
  title: "Une relation de commutation qui force la nilpotence",
  enonce: R`<p>Soit $E$ un $\mathbb C$-espace vectoriel de dimension finie, $\alpha\in\mathbb C^\ast$, et $f,g\in\mathcal L(E)$ avec $f\circ g-g\circ f = \alpha f$.</p><ol><li>Montrer que $f^k\circ g-g\circ f^k = k\alpha f^k$ pour tout $k\geqslant1$.</li><li>On pose $\varphi : h\mapsto h\circ g-g\circ h$ sur $\mathcal L(E)$. En déduire que $f$ est nilpotent.</li><li>Autre preuve, si $g$ est diagonalisable : montrer que $f$ envoie $\ker(g-\lambda\mathrm{Id})$ dans $\ker(g-(\lambda-\alpha)\mathrm{Id})$, et conclure.</li><li>Exemple : trouver $f,g$ dans $\mathcal M_2(\mathbb C)$ vérifiant la relation avec $\alpha = 1$.</li></ol>`,
  decode: { donnees: [R`$fg-gf = \alpha f$, $\alpha\neq0$.`], but: R`Montrer que $f^N = 0$ pour un certain $N$.`, cles: {
    telesc: R`$f^{k+1}g-gf^{k+1} = f(f^kg-gf^k)+(fg-gf)f^k$.`,
    vp: R`Si $f^k\neq0$, alors $k\alpha$ est valeur propre de $\varphi$ (de vecteur propre $f^k$).`,
    decale: R`Pour $x\in\ker(g-\lambda\mathrm{Id})$ : $g(f(x)) = f(g(x))-\alpha f(x) = (\lambda-\alpha)f(x)$.` } },
  steps: [
    { q: 1, t: "Récurrence", h: R`<p>On fait apparaître l'hypothèse de récurrence en <span data-k="telesc">insérant $fgf^k$</span>.</p>`, b: R`<p>Vrai pour $k = 1$. Si c'est vrai au rang $k$ :</p>$$f^{k+1}g-gf^{k+1} = f(f^kg-gf^k)+(fg-gf)f^k = f(k\alpha f^k)+\alpha ff^k = (k+1)\alpha f^{k+1}.$$`, rappels: ["recurrence"] },
    { q: 2, t: "Trop de valeurs propres", h: R`<p>La question 1 dit que $\varphi(f^k) = k\alpha f^k$. <span data-k="vp">Chaque $f^k$ non nul donne une valeur propre $k\alpha$</span>, toutes distinctes ($\alpha\neq0$). Mais $\mathcal L(E)$ est de dimension finie.</p>`, b: R`<p>$\varphi$ est linéaire sur $\mathcal L(E)$, de dimension $n^2$. Si tous les $f^k$ étaient non nuls, <span data-k="vp">les $k\alpha$ ($k\geqslant1$) seraient une infinité de valeurs propres distinctes de $\varphi$</span> : impossible. Donc $f^N = 0$ pour un certain $N$.</p><div class="sbox">$$fg-gf = \alpha f,\ \alpha\neq0\ \Longrightarrow\ f\ \text{nilpotent}.$$</div>`, rappels: ["k-vp-dim-finie"] },
    { q: 3, t: "Avec g diagonalisable", h: R`<p>$f$ <span data-k="decale">décale les valeurs propres de $g$ de $-\alpha$</span>. En partant d'un sous-espace propre et en appliquant $f$ assez de fois, on sort du spectre de $g$.</p>`, b: R`<p><span data-k="decale">$g(f(x)) = (\lambda-\alpha)f(x)$</span> : $f(E_\lambda(g))\subset E_{\lambda-\alpha}(g)$ (avec $E_\mu = \{0\}$ si $\mu\notin\operatorname{sp}g$). Donc $f^k(E_\lambda)\subset E_{\lambda-k\alpha}$. Le spectre de $g$ est fini et les $\lambda-k\alpha$ sont distincts : pour $k$ grand, $\lambda-k\alpha\notin\operatorname{sp}g$ et $f^k = 0$ sur $E_\lambda$. Comme $E = \bigoplus E_\lambda$, $f^N = 0$ pour $N$ assez grand.</p>` },
    { q: 4, t: "Un exemple", h: R`<p>On essaie $f = E_{12}$ et $g$ diagonale : $fg-gf$ est proportionnel à $E_{12}$.</p>`, b: R`<p>$f = \begin{pmatrix}0&1\\0&0\end{pmatrix}$, $g = \begin{pmatrix}0&0\\0&1\end{pmatrix}$ : $fg = f$ et $gf = 0$, donc $fg-gf = f$ ($\alpha = 1$). Et $f$ est bien nilpotent.</p>` }
  ],
  ctx: { "recurrence": R`<p>Sur $k$.</p>`, "k-vp-dim-finie": R`<p>$\varphi$ agit sur $\mathcal L(E)$, de dimension $n^2$.</p>` },
  piege: R`Chercher à utiliser que $g$ est diagonalisable à tout prix : l'argument par les valeurs propres de $\varphi$ s'en passe complètement.`,
  methode: R`Relation $\varphi(h) = \mu h$ pour une famille infinie de $\mu$ distincts : en dimension finie, presque tous les $h$ sont nuls.`
},
{
  id: "kh-14-7", subj: "kholles", year: "mp", chap: 6, level: 3, time: "25 min",
  title: "Matrices stochastiques",
  enonce: R`<p>Une matrice $M\in\mathcal M_n(\mathbb R)$ est stochastique si ses coefficients sont $\geqslant0$ et si chaque ligne a pour somme $1$. On note $\mathcal S_n$ leur ensemble et $U = (1,\dots,1)^\top$.</p><ol><li>Montrer que $M\in\mathcal S_n$ si et seulement si $M\geqslant0$ (coefficient par coefficient) et $MU = U$. En déduire une valeur propre commune.</li><li>Montrer que $\mathcal S_n$ est stable par produit.</li><li>Soit $\lambda\in\mathbb C$ valeur propre de $M\in\mathcal S_n$. Montrer que $|\lambda|\leqslant1$.</li><li>Montrer que $\mathcal S_n$ est convexe et compact.</li><li>Exemple : diagonaliser $\begin{pmatrix}1-a&a\\b&1-b\end{pmatrix}$ ($a,b\in\,]0,1[$) et calculer la limite de ses puissances.</li></ol>`,
  decode: { donnees: [R`$m_{ij}\geqslant0$ et $\sum_jm_{ij} = 1$ pour chaque ligne $i$.`], but: R`Propriétés spectrales et topologiques des matrices stochastiques.`, cles: {
    somme: R`$(MU)_i = \sum_jm_{ij}$ : « les lignes de somme $1$ » s'écrit $MU = U$.`,
    max: R`Avec $|x_i| = \max|x_j|$ : $|\lambda||x_i| = |\sum_jm_{ij}x_j|\leqslant\sum_jm_{ij}|x_j|\leqslant|x_i|$.`,
    ferme: R`$\mathcal S_n$ est défini par des inégalités larges $m_{ij}\geqslant0$ et des égalités $\sum_jm_{ij} = 1$ : intersection de fermés.` } },
  steps: [
    { q: 1, t: "Une valeur propre commune", h: R`<p><span data-k="somme">La somme d'une ligne, c'est la coordonnée correspondante de $MU$</span>.</p>`, b: R`<p><span data-k="somme">$(MU)_i = \sum_jm_{ij}$</span>, donc $M\in\mathcal S_n\iff M\geqslant0$ et $MU = U$. Ainsi $1$ est valeur propre de toute matrice stochastique, de vecteur propre $U$.</p>` },
    { q: 2, t: "Stabilité par produit", h: R`<p>Produit de matrices positives : positive. Et $MNU = MU = U$.</p>`, b: R`<p>Si $M,N\in\mathcal S_n$ : $MN\geqslant0$ (sommes de produits de nombres positifs) et $MNU = M(NU) = MU = U$. Donc $MN\in\mathcal S_n$.</p>` },
    { q: 3, t: "Spectre dans le disque unité", h: R`<p>La ligne de la <span data-k="max">plus grande coordonnée</span> d'un vecteur propre : c'est une moyenne pondérée (poids $m_{ij}$ de somme $1$).</p>`, b: R`<p>Soit $MX = \lambda X$, $X\neq0$, et $i$ avec $|x_i|$ maximal. <span data-k="max">$|\lambda||x_i|\leqslant\sum_jm_{ij}|x_j|\leqslant\big(\sum_jm_{ij}\big)|x_i| = |x_i|$</span>, d'où</p><div class="sbox">$$\operatorname{sp}_{\mathbb C}(M)\subset\overline D(0,1).$$</div>`, rappels: ["inegalite-triangulaire"] },
    { q: 4, t: "Convexe et compact", h: R`<p>Convexité : les deux conditions passent aux combinaisons $tM+(1-t)N$. Compacité : <span data-k="ferme">fermé</span> et borné (coefficients entre $0$ et $1$) en dimension finie.</p>`, b: R`<p>Pour $t\in[0,1]$ : $tM+(1-t)N\geqslant0$ et $(tM+(1-t)N)U = tU+(1-t)U = U$. Convexe. <span data-k="ferme">$\mathcal S_n$ est fermé</span> (conditions continues larges), et borné ($0\leqslant m_{ij}\leqslant1$). En dimension finie : compact.</p>`, rappels: ["k-compact-dimfinie"] },
    { q: 5, t: "Le cas 2×2", h: R`<p>Valeurs propres : $1$ (vecteur $U$) et la trace moins $1$.</p>`, b: R`<p>$\operatorname{tr}M = 2-a-b$, donc les valeurs propres sont $1$ et $\mu = 1-a-b\in\,]-1,1[$. Vecteurs propres : $U = (1,1)^\top$ et $(a,-b)^\top$. Comme $\mu^k\to0$, $M^k$ converge vers la matrice qui garde la composante sur $U$ :</p><div class="sbox">$$M^k\xrightarrow[k\to\infty]{}\frac1{a+b}\begin{pmatrix}b&a\\b&a\end{pmatrix}.$$</div><p>Ses lignes sont la loi stationnaire $\left(\frac b{a+b},\frac a{a+b}\right)$ de la chaîne de Markov à deux états.</p>`, rappels: ["puissance-diagonalisable"] }
  ],
  ctx: { "inegalite-triangulaire": R`<p>Sur la ligne $i$.</p>`, "k-compact-dimfinie": R`<p>$\mathcal M_n(\mathbb R)$ est de dimension finie.</p>`, "puissance-diagonalisable": R`<p>$M^k = P\operatorname{diag}(1,\mu^k)P^{-1}$.</p>` },
  piege: R`Confondre « lignes de somme $1$ » et « colonnes de somme $1$ » : avec des colonnes, c'est $U^\top M = U^\top$ (valeur propre $1$ pour $M^\top$).`,
  methode: R`Matrice positive à lignes de somme $1$ : $MU = U$, et la plus grande coordonnée d'un vecteur propre majore le module des valeurs propres.`
},
{
  id: "kh-14-8", subj: "kholles", year: "mp", chap: 6, level: 4, time: "40 min",
  title: "Matrices compagnon et Cayley-Hamilton",
  enonce: R`<p>Soit $Q = X^n+a_{n-1}X^{n-1}+\dots+a_0$ et $C_Q$ sa matrice compagnon (des $1$ juste sous la diagonale, la dernière colonne égale à $(-a_0,\dots,-a_{n-1})^\top$, des $0$ ailleurs).</p><ol><li>Montrer que $\chi_{C_Q} = Q$ (avec $\chi_A = \det(XI_n-A)$).</li><li>Soit $f\in\mathcal L(E)$, $\dim E = n$, et $x\neq0$. Montrer qu'il existe un plus petit $p\geqslant1$ tel que $(x,f(x),\dots,f^p(x))$ soit liée.</li><li>Montrer que $F = \operatorname{Vect}(x,\dots,f^{p-1}(x))$ est stable par $f$, de base $(x,\dots,f^{p-1}(x))$, et que la matrice de $f_{|F}$ dans cette base est une matrice compagnon.</li><li>En déduire que $\chi_{f_{|F}}(f)(x) = 0$, puis le théorème de Cayley-Hamilton $\chi_f(f) = 0$.</li></ol>`,
  decode: { donnees: [R`$C_Qe_k = e_{k+1}$ pour $k< n$, et $C_Qe_n = -\sum_ka_{k-1}e_k$.`], but: R`Démontrer Cayley-Hamilton.`, cles: {
    dev: R`On développe $\det(XI_n-C_Q)$ selon la dernière colonne, ou on fait $L_1\leftarrow L_1+XL_2+X^2L_3+\dots+X^{n-1}L_n$.`,
    rel: R`$(x,\dots,f^{p-1}(x))$ libre et $(x,\dots,f^p(x))$ liée : $f^p(x) = -\sum_{k< p}c_kf^k(x)$.`,
    divise: R`$F$ stable : $\chi_{f_{|F}}$ divise $\chi_f$ (matrice triangulaire par blocs dans une base adaptée).` } },
  steps: [
    { q: 1, t: "Le polynôme caractéristique", h: R`<p>On <span data-k="dev">ramène tout sur la première ligne</span> par une combinaison des lignes, puis on développe.</p>`, b: R`<p>$XI_n-C_Q$ a des $X$ sur la diagonale (sauf le dernier, $X+a_{n-1}$), des $-1$ juste dessous, et la dernière colonne $(a_0,\dots,a_{n-2},X+a_{n-1})^\top$. Avec <span data-k="dev">$L_1\leftarrow L_1+XL_2+\dots+X^{n-1}L_n$</span>, la première ligne devient $(0,\dots,0,Q(X))$. En développant selon cette ligne, le mineur est triangulaire avec des $-1$ :</p>$$\chi_{C_Q} = (-1)^{1+n}Q(X)(-1)^{n-1} = Q(X).$$`, rappels: ["k-det-operations", "k-dev-ligne"] },
    { q: 2, t: "Le premier rang de liaison", h: R`<p>$n+1$ vecteurs en dimension $n$ sont liés : l'ensemble des $p$ tels que la famille soit liée est non vide.</p>`, b: R`<p>$(x,f(x),\dots,f^n(x))$ est liée ($n+1$ vecteurs). L'ensemble des $p\geqslant1$ tels que $(x,\dots,f^p(x))$ soit liée est une partie non vide de $\mathbb N$ : elle a un plus petit élément $p$ ($p\geqslant1$ car $x\neq0$).</p>` },
    { q: 3, t: "Le sous-espace cyclique", h: R`<p>Par minimalité, $(x,\dots,f^{p-1}(x))$ est libre et <span data-k="rel">$f^p(x)$ s'écrit en fonction des précédents</span>.</p>`, b: R`<p>Par minimalité, $(x,\dots,f^{p-1}(x))$ est libre, et <span data-k="rel">$f^p(x) = -\sum_{k=0}^{p-1}c_kf^k(x)$</span>. Donc $f$ envoie chaque $f^k(x)$ ($k< p-1$) sur le suivant, et $f^{p-1}(x)$ sur $f^p(x)\in F$ : $F$ est stable. Dans la base $(x,\dots,f^{p-1}(x))$, la matrice de $f_{|F}$ est $C_R$ avec $R = X^p+c_{p-1}X^{p-1}+\dots+c_0$.</p>`, rappels: ["k-compagnon"] },
    { q: 4, t: "Cayley-Hamilton", h: R`<p>$\chi_{f_{|F}} = R$ (question 1), et $R(f)(x) = 0$ par la relation. Puis <span data-k="divise">$R$ divise $\chi_f$</span>.</p>`, b: R`<p>$\chi_{f_{|F}} = R$ et $R(f)(x) = f^p(x)+\sum c_kf^k(x) = 0$. <span data-k="divise">Comme $F$ est stable, $\chi_f = R\cdot T$</span> pour un polynôme $T$, donc $\chi_f(f)(x) = T(f)\big(R(f)(x)\big) = 0$. C'est vrai pour tout $x\neq0$ (et pour $x = 0$) :</p><div class="sbox">$$\chi_f(f) = 0.$$</div>`, rappels: ["o-b-poly-endo", "o-poly-induit"] }
  ],
  ctx: { "k-det-operations": R`<p>Combinaison de lignes sans changer le déterminant.</p>`, "k-dev-ligne": R`<p>Selon la première ligne $(0,\dots,0,Q)$.</p>`, "k-compagnon": R`<p>Ici avec le polynôme $R$ de degré $p$.</p>`, "o-b-poly-endo": R`<p>$(TR)(f) = T(f)\circ R(f)$.</p>`, "o-poly-induit": R`<p>Le polynôme caractéristique de l'induit divise celui de $f$.</p>` },
  piege: R`« Démontrer » Cayley-Hamilton en remplaçant $X$ par $A$ dans $\det(XI-A)$ : on obtiendrait $\det(AI-A) = 0$, un nombre, alors qu'on veut une matrice nulle.`,
  methode: R`Pour un résultat sur $f$ : travailler vecteur par vecteur, dans le sous-espace cyclique engendré par $x$.`
},
{
  id: "kh-14-9", subj: "kholles", year: "mp", chap: 6, level: 4, time: "35 min",
  title: "Diagonalisation simultanée",
  enonce: R`<p>Soit $E$ de dimension finie et $(f_i)_{i\in I}$ une famille d'endomorphismes diagonalisables qui commutent deux à deux.</p><ol><li>Montrer que si $f\circ g = g\circ f$, les sous-espaces propres de $f$ sont stables par $g$.</li><li>Montrer par récurrence sur $\dim E$ qu'une famille <b>finie</b> $(f_1,\dots,f_m)$ admet une base commune de vecteurs propres.</li><li>Montrer que l'on peut toujours se ramener au cas fini.</li><li>Application : montrer qu'une famille de projecteurs de $E$, deux à deux distincts et qui commutent, a au plus $2^{\dim E}$ éléments.</li></ol>`,
  decode: { donnees: [R`Chaque $f_i$ est diagonalisable ; $f_if_j = f_jf_i$.`], but: R`Trouver une même base qui diagonalise tous les $f_i$.`, cles: {
    stab: R`$x\in E_\lambda(f)$ : $f(g(x)) = g(f(x)) = \lambda g(x)$, donc $g(x)\in E_\lambda(f)$.`,
    homot: R`Si tous les $f_i$ sont des homothéties, n'importe quelle base convient. Sinon, l'un d'eux a au moins deux valeurs propres, et ses sous-espaces propres sont de dimension $< \dim E$.`,
    fini: R`$\operatorname{Vect}(f_i,\ i\in I)$ est un sous-espace de $\mathcal L(E)$, de dimension finie : il a une base $(f_{i_1},\dots,f_{i_m})$ extraite de la famille.` } },
  steps: [
    { q: 1, t: "Stabilité", h: R`<p><span data-k="stab">On fait commuter $f$ et $g$</span> sur un vecteur propre de $f$.</p>`, b: R`<p><span data-k="stab">Si $f(x) = \lambda x$ : $f(g(x)) = g(f(x)) = \lambda g(x)$</span>. Donc $g(E_\lambda(f))\subset E_\lambda(f)$.</p>`, rappels: ["k-commute-stable"] },
    { q: 2, t: "Récurrence sur la dimension", h: R`<p>Si tout le monde est une homothétie, c'est fini. Sinon, <span data-k="homot">on découpe $E$ selon les sous-espaces propres d'un $f_1$ non homothétie</span> : chacun est plus petit, stable par tous, et on applique l'hypothèse de récurrence.</p>`, b: R`<p>Dimension $1$ : clair. Supposons le résultat vrai en dimension $< d$, et $\dim E = d$. Si tous les $f_k$ sont des homothéties, toute base convient. Sinon, disons $f_1$ : $E = \bigoplus_\lambda E_\lambda(f_1)$, chaque $E_\lambda$ de dimension $< d$. Chaque $E_\lambda$ est stable par tous les $f_k$ (question 1), et les induits $f_{k|E_\lambda}$ sont diagonalisables et commutent. Par récurrence, chaque $E_\lambda$ a une base commune de vecteurs propres ; en les réunissant, on obtient une base de $E$ qui convient.</p>`, rappels: ["k-stable-induit", "recurrence"] },
    { q: 3, t: "Se ramener au cas fini", h: R`<p><span data-k="fini">L'espace engendré par les $f_i$ est de dimension finie</span>. Une base commune pour ceux d'une base de cet espace convient pour toutes leurs combinaisons linéaires.</p>`, b: R`<p><span data-k="fini">Soit $(f_{i_1},\dots,f_{i_m})$ une base de $\operatorname{Vect}(f_i)$</span>. Par la question 2, ils ont une base commune $\mathcal B$ de vecteurs propres. Chaque $f_i$ est combinaison linéaire des $f_{i_k}$, donc sa matrice dans $\mathcal B$ est une combinaison de matrices diagonales : diagonale.</p><div class="sbox">$$\text{Endomorphismes diagonalisables qui commutent}\ \Longrightarrow\ \text{base commune de diagonalisation}.$$</div>` },
    { q: 4, t: "Application aux projecteurs", h: R`<p>Dans la base commune, chaque projecteur a une matrice diagonale à coefficients dans $\{0,1\}$.</p>`, b: R`<p>Des projecteurs qui commutent se diagonalisent dans une même base, avec des matrices $\operatorname{diag}(\varepsilon_1,\dots,\varepsilon_n)$, $\varepsilon_k\in\{0,1\}$. Il y a $2^n$ telles matrices : une famille de projecteurs deux à deux distincts qui commutent a au plus $2^n$ éléments.</p>` }
  ],
  ctx: { "k-commute-stable": R`<p>$g$ commute avec $f$.</p>`, "k-stable-induit": R`<p>Les induits sur $E_\lambda(f_1)$ restent diagonalisables.</p>`, "recurrence": R`<p>Récurrence forte sur la dimension.</p>` },
  piege: R`Oublier que les sous-espaces propres peuvent être tous égaux à $E$ (homothéties) : la récurrence n'avancerait pas, d'où le cas séparé.`,
  methode: R`Diagonaliser simultanément : découper selon les sous-espaces propres de l'un, qui sont stables par les autres.`
},
{
  id: "kh-14-10", subj: "kholles", year: "mp", chap: 6, level: 3, time: "25 min",
  title: "Un sous-espace stable de dimension 1 ou 2",
  enonce: R`<p>Soit $E$ un $\mathbb K$-espace vectoriel et $u\in\mathcal L(E)$.</p><ol><li>Soit $P\in\mathbb K[X]$ unitaire de degré $d\geqslant1$ tel que $P(u)$ ne soit pas injectif. Montrer qu'il existe un sous-espace $F\neq\{0\}$, de dimension $\leqslant d$, stable par $u$.</li><li>On suppose $\mathbb K = \mathbb R$ et $E$ de dimension finie $n\geqslant1$. Montrer que $u$ admet un sous-espace stable de dimension $1$ ou $2$.</li><li>Exemple : trouver un plan stable par $u$ de matrice $\begin{pmatrix}0&0&-1\\1&0&0\\0&1&0\end{pmatrix}$, qui n'a qu'une valeur propre réelle.</li></ol>`,
  decode: { donnees: [R`Un vecteur non nul $x$ avec $P(u)(x) = 0$.`], but: R`Trouver un petit sous-espace stable.`, cles: {
    cyc: R`$F = \operatorname{Vect}(x,u(x),\dots,u^{d-1}(x))$ et $u^d(x) = -\sum_{k< d}p_ku^k(x)\in F$.`,
    fact: R`Sur $\mathbb R$, $\chi_u$ se factorise en polynômes de degré $1$ ou $2$ ; si tous les facteurs donnaient des $P_i(u)$ injectifs, leur composée $\chi_u(u)$ serait injective.` } },
  steps: [
    { q: 1, t: "Le sous-espace cyclique", h: R`<p>On prend $x\neq0$ dans $\ker P(u)$ et <span data-k="cyc">l'espace engendré par ses $d$ premières images</span> : la relation $P(u)(x) = 0$ le rend stable.</p>`, b: R`<p>Soit $x\neq0$ avec $P(u)(x) = 0$ et <span data-k="cyc">$F = \operatorname{Vect}(x,\dots,u^{d-1}(x))$</span>. $F\neq\{0\}$, $\dim F\leqslant d$. $u$ envoie $u^k(x)$ sur $u^{k+1}(x)\in F$ pour $k\leqslant d-2$, et $u^{d-1}(x)$ sur $u^d(x) = -\sum_{k< d}p_ku^k(x)\in F$. Donc $F$ est stable.</p>` },
    { q: 2, t: "Sur ℝ", h: R`<p>Cayley-Hamilton : $\chi_u(u) = 0$ n'est pas injectif. On <span data-k="fact">factorise $\chi_u$ en facteurs de degré $\leqslant2$</span> : l'un d'eux donne un $P(u)$ non injectif.</p>`, b: R`<p>$\chi_u = \prod_iP_i$ avec des $P_i$ unitaires de degré $1$ ou $2$. <span data-k="fact">Si tous les $P_i(u)$ étaient injectifs, $\chi_u(u) = P_1(u)\circ\dots\circ P_r(u)$ le serait</span>. Or $\chi_u(u) = 0$ (Cayley-Hamilton) et $E\neq\{0\}$. Donc un $P_i(u)$ n'est pas injectif, et la question 1 donne un sous-espace stable de dimension $1$ ou $2$.</p>`, rappels: ["o-b-cayley"] },
    { q: 3, t: "Un exemple", h: R`<p>$\chi = X^3+1 = (X+1)(X^2-X+1)$. Le facteur de degré $2$ : on cherche $x\in\ker(u^2-u+\mathrm{Id})$.</p>`, b: R`<p>$u(e_1) = e_2$, $u(e_2) = e_3$, $u(e_3) = -e_1$, donc $u^3 = -\mathrm{Id}$ et $\chi_u = X^3+1 = (X+1)(X^2-X+1)$. Seule valeur propre réelle : $-1$. Avec $x = (a,b,c)$ : $u(x) = (-c,a,b)$, $u^2(x) = (-b,-c,a)$, donc $(u^2-u+\mathrm{Id})(x) = (a-b+c)(1,-1,1)$. Le noyau est le plan $\{a-b+c = 0\}$, par exemple engendré par $x = (1,1,0)$ et $u(x) = (0,1,1)$. Ce plan est stable : $u(0,1,1) = (-1,0,1) = (0,1,1)-(1,1,0)$.</p>` }
  ],
  ctx: { "o-b-cayley": R`<p>$\chi_u(u) = 0$.</p>` },
  piege: R`Chercher une droite stable sur $\mathbb R$ à tout prix : une rotation du plan n'en a pas. Le bon énoncé est « dimension $1$ ou $2$ ».`,
  methode: R`Sous-espace stable à partir d'un polynôme : prendre $x\in\ker P(u)$ et le sous-espace cyclique de $x$.`
}
]);
})();

/* ---------- MP · 6. Réduction (3) ---------- */
LEMME.rappels({
  "k-edl1-sol": { t: "Équation y′ = a(x) y", b: R`<p>Sur un intervalle où $a$ est continue, les solutions sont</p><div class="sbox">$$y(x) = C\,e^{A(x)},\qquad A' = a.$$</div><p>Pour $xy' = \mu y$ sur $]0,+\infty[$ : $y = Cx^\mu$.</p>` },
  "k-libre-fonctions": { t: "Montrer qu'une famille de fonctions est libre", b: R`<p>On suppose $\sum c_kf_k = 0$ et on cherche à isoler les coefficients : évaluer en des points bien choisis, diviser par une fonction qui ne s'annule pas, ou se ramener à un polynôme qui a une infinité de racines.</p>` }
});

(() => {
const { FIG, S, f1, GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "kh-14-11", subj: "kholles", year: "mp", chap: 6, level: 3, time: "25 min",
  title: "Vecteur cyclique et valeurs propres distinctes",
  enonce: R`<p>Soit $E$ de dimension $n$ et $u\in\mathcal L(E)$ diagonalisable, de base propre $(e_1,\dots,e_n)$ associée aux valeurs propres $\lambda_1,\dots,\lambda_n$ (avec répétitions éventuelles).</p><ol><li>Soit $x = \sum\alpha_ke_k$. Écrire la matrice de la famille $(x,u(x),\dots,u^{n-1}(x))$ dans la base $(e_k)$ et calculer son déterminant.</li><li>En déduire l'équivalence : il existe $x$ tel que $(x,u(x),\dots,u^{n-1}(x))$ soit une base $\iff$ les $\lambda_k$ sont deux à deux distincts.</li><li>Exemple : $u$ de matrice $\operatorname{diag}(1,2,3)$. Trouver un tel $x$ et la matrice de $u$ dans la base obtenue.</li></ol>`,
  decode: { donnees: [R`$u^j(x) = \sum_k\alpha_k\lambda_k^je_k$.`], but: R`Caractériser l'existence d'un vecteur cyclique pour un endomorphisme diagonalisable.`, cles: {
    vdm: R`La matrice a pour coefficient $(k,j)$ le nombre $\alpha_k\lambda_k^{j}$ : on sort $\alpha_k$ de la ligne $k$, il reste une matrice de Vandermonde.`,
    choix: R`On prend tous les $\alpha_k = 1$ : $x = e_1+\dots+e_n$.` } },
  steps: [
    { q: 1, t: "Un déterminant de Vandermonde", h: R`<p>On calcule $u^j(x)$ dans la base propre, puis on <span data-k="vdm">factorise chaque ligne par $\alpha_k$</span>.</p>`, b: R`<p>$u^j(x) = \sum_k\alpha_k\lambda_k^je_k$. La matrice de la famille est $\big(\alpha_k\lambda_k^{j}\big)_{k,\,0\leqslant j\leqslant n-1}$. <span data-k="vdm">En sortant $\alpha_k$ de chaque ligne</span> :</p>$$\det = \Big(\prod_k\alpha_k\Big)\prod_{1\leqslant k< l\leqslant n}(\lambda_l-\lambda_k).$$`, rappels: ["o-b-iso"] },
    { q: 2, t: "L'équivalence", h: R`<p>La famille est une base si et seulement si ce déterminant est non nul : il faut tous les $\alpha_k\neq0$ et les $\lambda_k$ distincts.</p>`, b: R`<p>$\Rightarrow$ : si une base cyclique existe, le déterminant est non nul, donc les $\lambda_k$ sont distincts. $\Leftarrow$ : si les $\lambda_k$ sont distincts, <span data-k="choix">$x = e_1+\dots+e_n$</span> donne un déterminant égal au Vandermonde, non nul.</p><div class="sbox">$$u\ \text{diagonalisable admet un vecteur cyclique}\iff u\ \text{a}\ n\ \text{valeurs propres distinctes}.$$</div><p>Si une valeur propre est répétée, $\dim E_\lambda\geqslant2$ et il n'y a jamais de vecteur cyclique (par exemple $u = \mathrm{Id}$, $n\geqslant2$).</p>` },
    { q: 3, t: "Un exemple", h: R`<p>$x = (1,1,1)$ ; dans la base $(x,u(x),u^2(x))$, la matrice est une matrice compagnon de $\chi_u$.</p>`, b: R`<p>$x = (1,1,1)$, $u(x) = (1,2,3)$, $u^2(x) = (1,4,9)$ : Vandermonde de déterminant $(2-1)(3-1)(3-2) = 2\neq0$. Comme $\chi_u = (X-1)(X-2)(X-3) = X^3-6X^2+11X-6$, Cayley-Hamilton donne $u^3(x) = 6u^2(x)-11u(x)+6x$ : la matrice de $u$ dans cette base est la matrice compagnon</p>$$\begin{pmatrix}0&0&6\\1&0&-11\\0&1&6\end{pmatrix}.$$`, rappels: ["k-compagnon"] }
  ],
  ctx: { "o-b-iso": R`<p>Une famille de $n$ vecteurs est une base ssi le déterminant de sa matrice est non nul.</p>`, "k-compagnon": R`<p>$u^3(x)$ s'exprime avec $x,u(x),u^2(x)$.</p>` },
  piege: R`Prendre $x$ égal à un vecteur propre : alors $u(x)$ est colinéaire à $x$, la famille n'est jamais libre. Il faut une composante non nulle sur chaque vecteur propre.`,
  methode: R`Famille $(x,u(x),\dots)$ avec $u$ diagonalisable : passer dans la base propre, où l'on voit une matrice de Vandermonde.`
},
{
  id: "kh-14-12", subj: "kholles", year: "mp", chap: 6, level: 4, time: "35 min",
  title: "La matrice de Kac par un opérateur différentiel",
  enonce: R`<p>Soit $n\geqslant1$ et $A_n\in\mathcal M_{n+1}(\mathbb R)$ la matrice (indices de $0$ à $n$) avec des $0$ sur la diagonale, $k$ en position $(k-1,k)$ et $n-k$ en position $(k+1,k)$.</p><ol><li>Montrer que $A_n$ est la matrice, dans la base $(1,X,\dots,X^n)$, de $f : P\mapsto(1-X^2)P'+nXP$ sur $\mathbb R_n[X]$.</li><li>Pour $0\leqslant k\leqslant n$, on pose $P_k = (1-X)^{n-k}(1+X)^k$. Montrer que $f(P_k) = (2k-n)P_k$.</li><li>En déduire que $A_n$ est diagonalisable et $\operatorname{sp}(A_n) = \{-n,-n+2,\dots,n-2,n\}$.</li><li>Donner un vecteur propre pour la valeur propre $n$. Quel lien avec la chaîne des deux urnes (exercice de probabilités MPSI) ?</li></ol>`,
  decode: { donnees: [R`$f(X^k) = kX^{k-1}+(n-k)X^{k+1}$.`], but: R`Diagonaliser une matrice tridiagonale en la reconnaissant comme un opérateur sur les polynômes.`, cles: {
    image: R`$f(X^k) = (1-X^2)kX^{k-1}+nX^{k+1} = kX^{k-1}+(n-k)X^{k+1}$ : la colonne $k$ a $k$ en ligne $k-1$ et $n-k$ en ligne $k+1$.`,
    edo: R`D'où vient $P_k$ ? $f(P) = \lambda P$ est l'équation $(1-x^2)y' = (\lambda-nx)y$. Par éléments simples, $\frac{\lambda-nx}{1-x^2} = \frac{(\lambda+n)/2}{1+x}-\frac{(n-\lambda)/2}{1-x}$, ce qui donne $y = (1+x)^{(n+\lambda)/2}(1-x)^{(n-\lambda)/2}$.`,
    binom: R`$P_n = (1+X)^n = \sum_k\binom nkX^k$ : ses coordonnées sont les $\binom nk$.` } },
  steps: [
    { q: 1, t: "Reconnaître l'opérateur", h: R`<p>On calcule <span data-k="image">l'image de chaque $X^k$</span> et on la compare à la colonne $k$ de $A_n$. Le degré reste $\leqslant n$ car le terme en $X^{n+1}$ a pour coefficient $n-n = 0$.</p>`, b: R`<p><span data-k="image">$f(X^k) = kX^{k-1}+(n-k)X^{k+1}$</span>. Pour $k = n$, le second terme disparaît : $f$ envoie $\mathbb R_n[X]$ dans lui-même. La colonne $k$ de la matrice a $k$ en ligne $k-1$ et $n-k$ en ligne $k+1$ : c'est $A_n$.</p>`, rappels: ["k-mat-endo"] },
    { q: 2, t: "Des vecteurs propres explicites", h: R`<p>Les $P_k$ viennent de <span data-k="edo">l'équation différentielle</span> $f(y) = \lambda y$. On vérifie directement : $(1-X^2) = (1-X)(1+X)$ simplifie la dérivée.</p>`, b: R`<p>$P_k' = P_k\left(\frac{k}{1+X}-\frac{n-k}{1-X}\right)$ (dérivée logarithmique), donc</p>$$(1-X^2)P_k' = P_k\big(k(1-X)-(n-k)(1+X)\big) = P_k\big(2k-n-nX\big).$$<p>En ajoutant $nXP_k$ :</p><div class="sbox">$$f(P_k) = (2k-n)P_k.$$</div>`, rappels: ["k-edl1-sol"] },
    { q: 3, t: "Diagonalisabilité", h: R`<p>$n+1$ valeurs propres distinctes en dimension $n+1$.</p>`, b: R`<p>Les $2k-n$ ($0\leqslant k\leqslant n$) sont $n+1$ valeurs propres distinctes de $f$, en dimension $n+1$ : $f$ et $A_n$ sont diagonalisables, avec</p><div class="sbox">$$\operatorname{sp}(A_n) = \{-n,-n+2,\dots,n-2,n\}.$$</div><p>Exemple $n = 2$ : $A_2 = \begin{pmatrix}0&1&0\\2&0&2\\0&1&0\end{pmatrix}$, de valeurs propres $-2,0,2$ (trace nulle, déterminant nul).</p>`, rappels: ["valeurs-propres-distinctes"] },
    { q: 4, t: "La valeur propre n", h: R`<p>$k = n$ : $P_n = (1+X)^n$, dont les <span data-k="binom">coordonnées sont les coefficients binomiaux</span>.</p>`, b: R`<p>Le vecteur propre pour $n$ est <span data-k="binom">$\left(\binom n0,\binom n1,\dots,\binom nn\right)^\top$</span>. Dans l'exercice des deux urnes, la loi de $N_{k+1}$ est $\frac1nA_n$ fois celle de $N_k$ : c'est la même matrice ! Le vecteur propre pour la valeur propre $n$, normalisé, est la loi binomiale $\mathcal B(n,\frac12)$ : la loi invariante de la chaîne.</p>` }
  ],
  ctx: { "k-mat-endo": R`<p>Colonne $k$ = coordonnées de $f(X^k)$.</p>`, "k-edl1-sol": R`<p>Résoudre $(1-x^2)y' = (\lambda-nx)y$ sur $]-1,1[$ suggère la forme de $P_k$.</p>`, "valeurs-propres-distinctes": R`<p>$n+1$ valeurs propres distinctes.</p>` },
  piege: R`Chercher les valeurs propres par le polynôme caractéristique de $A_n$ : c'est un déterminant tridiagonal pénible. L'opérateur différentiel donne tout directement.`,
  methode: R`Matrice tridiagonale « à coefficients entiers qui montent et descendent » : chercher un opérateur sur les polynômes dont c'est la matrice.`
},
{
  id: "kh-14-13", subj: "kholles", year: "mp", chap: 6, level: 4, time: "35 min",
  title: "Dériver les produits de cosinus et de sinus",
  enonce: R`<p>Soit $n\geqslant1$. Pour $0\leqslant k\leqslant n$, $f_k(x) = \cos^kx\,\sin^{n-k}x$, et $V_n = \operatorname{Vect}(f_0,\dots,f_n)$.</p><ol><li>Montrer que $(f_0,\dots,f_n)$ est libre.</li><li>Montrer que la dérivation $D$ envoie $V_n$ dans $V_n$, et calculer sa matrice $B_n$ dans la base $(f_k)$.</li><li>Montrer que $g_k(x) = e^{i(2k-n)x}$ est dans $V_n$ (à coefficients complexes), et en déduire les valeurs propres de $B_n$. $B_n$ est-elle diagonalisable dans $\mathcal M_{n+1}(\mathbb C)$ ?</li><li>Pour quels $n$ la matrice $B_n$ est-elle inversible ?</li></ol>`,
  decode: { donnees: [R`$f_k' = -kf_{k-1}+(n-k)f_{k+1}$.`], but: R`Trouver le spectre d'une matrice tridiagonale par des exponentielles.`, cles: {
    cot: R`Sur $]0,\pi[$, $\sin x\neq0$ : diviser par $\sin^nx$ donne $\sum c_k\cot^kx = 0$, un polynôme en $\cot x$, qui prend une infinité de valeurs.`,
    deriv: R`$(\cos^k\sin^{n-k})' = -k\cos^{k-1}\sin^{n-k+1}+(n-k)\cos^{k+1}\sin^{n-k-1}$.`,
    expo: R`$e^{i(2k-n)x} = (e^{ix})^k(e^{-ix})^{n-k} = (\cos x+i\sin x)^k(\cos x-i\sin x)^{n-k}$ : en développant, on obtient une combinaison de $\cos^j\sin^{n-j}$.` } },
  steps: [
    { q: 1, t: "Liberté", h: R`<p><span data-k="cot">On divise par $\sin^nx$</span> : il apparaît un polynôme en $\cot x$.</p>`, b: R`<p>Si $\sum c_kf_k = 0$, sur $]0,\pi[$ : <span data-k="cot">$\sum c_k\cot^kx = 0$</span>. Le polynôme $\sum c_kY^k$ s'annule sur $\cot(]0,\pi[) = \mathbb R$, infini : tous les $c_k$ sont nuls.</p>`, rappels: ["k-libre-fonctions", "k-poly-egaux"] },
    { q: 2, t: "La matrice de la dérivation", h: R`<p>On <span data-k="deriv">dérive le produit</span> : on perd un cosinus ou un sinus, et on en gagne un de l'autre type.</p>`, b: R`<p><span data-k="deriv">$f_k' = -kf_{k-1}+(n-k)f_{k+1}$</span> (le premier terme est absent pour $k = 0$, le second pour $k = n$). Donc $D(V_n)\subset V_n$, et $B_n$ a des $0$ sur la diagonale, $-k$ en position $(k-1,k)$ et $n-k$ en position $(k+1,k)$.</p>` },
    { q: 3, t: "Des vecteurs propres exponentiels", h: R`<p><span data-k="expo">$g_k$ est un produit de $n$ facteurs $\cos\pm i\sin$</span>, donc un polynôme homogène de degré $n$ en $\cos,\sin$. Et $g_k' = i(2k-n)g_k$.</p>`, b: R`<p><span data-k="expo">$g_k = (\cos+i\sin)^k(\cos-i\sin)^{n-k}$</span>, et en développant chaque terme est un $\cos^j\sin^{n-j}$ : $g_k\in V_n$. Et $g_k' = i(2k-n)g_k$. Les $n+1$ nombres $i(2k-n)$ sont distincts :</p><div class="sbox">$$\operatorname{sp}(B_n) = \{i(2k-n),\ 0\leqslant k\leqslant n\},\qquad B_n\ \text{diagonalisable sur}\ \mathbb C.$$</div><p>(Elle ne l'est pas sur $\mathbb R$ dès que $n\geqslant1$ : ses valeurs propres ne sont pas toutes réelles. Comparer avec la matrice de Kac : même forme, au signe près, et un spectre multiplié par $i$.)</p>`, rappels: ["valeurs-propres-distinctes"] },
    { q: 4, t: "Inversibilité", h: R`<p>$B_n$ est inversible si et seulement si $0$ n'est pas valeur propre : $2k = n$ doit être impossible.</p>`, b: R`<p>$0\in\operatorname{sp}(B_n)\iff\exists k,\ 2k = n\iff n$ pair. Donc $B_n$ est inversible si et seulement si $n$ est <b>impair</b>. Interprétation : pour $n$ pair, $g_{n/2} = 1$ est dans $V_n$ (car $(\cos^2+\sin^2)^{n/2} = 1$) et sa dérivée est nulle.</p>` }
  ],
  ctx: { "k-libre-fonctions": R`<p>On divise par $\sin^n$ qui ne s'annule pas sur $]0,\pi[$.</p>`, "k-poly-egaux": R`<p>Un polynôme nul sur $\mathbb R$ est nul.</p>`, "valeurs-propres-distinctes": R`<p>$n+1$ valeurs propres distinctes en dimension $n+1$.</p>` },
  piege: R`Chercher les valeurs propres réelles : il n'y en a qu'une au plus ($0$, si $n$ pair). Le bon cadre est $\mathbb C$.`,
  methode: R`Matrice d'une dérivation sur un espace de fonctions : chercher des exponentielles dans l'espace, ce sont des vecteurs propres.`
},
{
  id: "kh-14-14", subj: "kholles", year: "mp", chap: 6, level: 4, time: "30 min",
  title: "L'opérateur de moyenne de Cesàro",
  enonce: R`<p>Soit $E = \mathcal C^0(\mathbb R_+,\mathbb R)$. Pour $f\in E$, on pose $\Gamma(f)(0) = f(0)$ et $\Gamma(f)(x) = \dfrac1x\displaystyle\int_0^xf(t)\,dt$ pour $x>0$.</p><ol><li>Montrer que $\Gamma(f)$ est continue sur $\mathbb R_+$, et que $\Gamma$ est un endomorphisme de $E$.</li><li>Calculer $\Gamma(x\mapsto x^a)$ pour $a\geqslant0$.</li><li>Montrer que $0$ n'est pas valeur propre. Soit $\lambda\neq0$ et $f$ avec $\Gamma(f) = \lambda f$. En posant $F(x) = \int_0^xf$, montrer que $F = \lambda xF'$ sur $]0,+\infty[$ et en déduire $f$.</li><li>Conclure : $\operatorname{sp}(\Gamma) = \,]0,1]$ et décrire les sous-espaces propres.</li></ol>`,
  decode: { donnees: [R`$\Gamma(f)(x)$ est la moyenne de $f$ sur $[0,x]$.`], but: R`Trouver les valeurs propres d'un opérateur sur un espace de dimension infinie.`, cles: {
    moy: R`$\frac1x\int_0^xf(t)dt-f(0) = \frac1x\int_0^x(f(t)-f(0))dt$, majoré en valeur absolue par $\sup_{[0,x]}|f-f(0)|\to0$.`,
    edo: R`$xF' = \frac1\lambda F$ : équation linéaire d'ordre $1$ sur $]0,+\infty[$, de solutions $Cx^{1/\lambda}$.`,
    cont: R`$f = F' = \frac C\lambda x^{\frac1\lambda-1}$ doit être continue en $0$ : il faut $\frac1\lambda-1\geqslant0$ (ou $C = 0$).` } },
  steps: [
    { q: 1, t: "Γ est bien défini", h: R`<p>Sur $]0,+\infty[$, c'est le quotient d'une primitive (continue) par $x$. En $0$, <span data-k="moy">la moyenne sur $[0,x]$ tend vers $f(0)$</span>.</p>`, b: R`<p>Sur $]0,+\infty[$, $\Gamma(f)$ est continue (et même $\mathcal C^1$). En $0$ : <span data-k="moy">$|\Gamma(f)(x)-f(0)|\leqslant\sup_{[0,x]}|f-f(0)|\xrightarrow[x\to0]{}0$</span> par continuité de $f$. La linéarité est claire.</p>` },
    { q: 2, t: "Les puissances", h: R`<p>On intègre directement.</p>`, b: R`<p>$\Gamma(x^a)(x) = \frac1x\cdot\frac{x^{a+1}}{a+1} = \frac{x^a}{a+1}$ (et en $0$ c'est cohérent). Donc $x^a$ est vecteur propre pour $\frac1{a+1}\in\,]0,1]$.</p>` },
    { q: 3, t: "Résoudre l'équation", h: R`<p>Avec $F = \int_0^xf$, l'équation $\Gamma(f) = \lambda f$ devient <span data-k="edo">une équation différentielle du premier ordre</span> en $F$.</p>`, b: R`<p>Si $\Gamma(f) = 0$, alors $F = 0$ sur $]0,+\infty[$, puis $f = F' = 0$ : $0$ n'est pas valeur propre. Pour $\lambda\neq0$ : $F(x) = x\lambda f(x) = \lambda xF'(x)$ sur $]0,+\infty[$. <span data-k="edo">Donc $F = Cx^{1/\lambda}$</span>, et $f = F' = \frac C\lambda x^{\frac1\lambda-1}$ sur $]0,+\infty[$.</p>`, rappels: ["k-edl1-sol"] },
    { q: 4, t: "La condition en 0", h: R`<p>$f$ doit être <span data-k="cont">continue en $0$</span> : l'exposant $\frac1\lambda-1$ doit être $\geqslant0$, c'est-à-dire $0< \lambda\leqslant1$.</p>`, b: R`<p>Si $C\neq0$, <span data-k="cont">$x^{\frac1\lambda-1}$ a une limite finie en $0^+$ ssi $\frac1\lambda-1\geqslant0$</span>, soit $0< \lambda\leqslant1$. Pour $\lambda< 0$ ou $\lambda>1$, seul $f = 0$ convient. Réciproquement la question 2 donne les vecteurs propres.</p><div class="sbox">$$\operatorname{sp}(\Gamma) = \,]0,1],\qquad E_\lambda = \operatorname{Vect}\big(x\mapsto x^{\frac1\lambda-1}\big).$$</div><p>Remarque : en dimension infinie, le spectre peut être un intervalle entier, ce qui n'arrive jamais en dimension finie.</p>` }
  ],
  ctx: { "k-edl1-sol": R`<p>$xF' = \mu F$ avec $\mu = \frac1\lambda$.</p>` },
  piege: R`Oublier la condition en $0$ : sur $]0,+\infty[$, l'équation a des solutions pour tout $\lambda\neq0$, mais elles ne sont pas toutes continues en $0$.`,
  methode: R`Valeurs propres d'un opérateur intégral : dériver pour obtenir une équation différentielle, la résoudre, puis imposer les conditions de régularité.`
}
]);
})();

/* ---------- MP · 6. Réduction (4) ---------- */
LEMME.rappels({
  "k-comatrice": { t: "Inverse par la comatrice", b: R`<div class="sbox">$$A^{-1} = \frac1{\det A}\operatorname{Com}(A)^\top.$$</div><p>Les coefficients de $\operatorname{Com}(A)$ sont des déterminants extraits : entiers si $A$ est à coefficients entiers.</p>` },
  "k-puiss-cv": { t: "Puissances d'une matrice diagonalisable", b: R`<p>Si $A = P\operatorname{diag}(\mu_1,\dots,\mu_n)P^{-1}$ avec tous les $|\mu_k|< 1$ :</p><div class="sbox">$$A^k = P\operatorname{diag}(\mu_1^k,\dots,\mu_n^k)P^{-1}\xrightarrow[k\to\infty]{}0.$$</div>` },
  "k-edl2-cc": { t: "Équation y″ + ω²y = 0 et variantes", b: R`<div class="sbox">$$y'' = -\omega^2y\iff y = a\cos\omega x+b\sin\omega x,\qquad y'' = \omega^2y\iff y = a\operatorname{ch}\omega x+b\operatorname{sh}\omega x.$$</div>` },
  "k-rec-lin2-c": { t: "Suites récurrentes linéaires d'ordre 2 (indices dans ℤ)", b: R`<p>Les suites $(u_n)_{n\in\mathbb Z}$ telles que $u_{n+1}-2\lambda u_n+u_{n-1} = 0$ forment un espace de dimension $2$ (on choisit $u_0$, $u_1$). Si $r^2-2\lambda r+1$ a deux racines distinctes $r,\frac1r$ :</p><div class="sbox">$$u_n = \alpha r^n+\beta r^{-n}\quad(n\in\mathbb Z).$$</div><p>Racine double $r = \pm1$ : $u_n = (\alpha+\beta n)r^n$.</p>` }
});

(() => {
const { FIG, S, f1, GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "kh-14-15", subj: "kholles", year: "mp", chap: 6, level: 5, time: "45 min",
  title: "Les sous-groupes finis de GLₙ(ℤ)",
  enonce: R`<p>$GL_n(\mathbb Z)$ désigne l'ensemble des $M\in\mathcal M_n(\mathbb Z)$ inversibles dont l'inverse est à coefficients entiers.</p><ol><li>Montrer que $M\in GL_n(\mathbb Z)\iff M\in\mathcal M_n(\mathbb Z)$ et $|\det M| = 1$, et que $GL_n(\mathbb Z)$ est un groupe.</li><li>Soit $M\in\mathcal M_n(\mathbb C)$ avec $M^d = I_n$ et $A = \frac13(M-I_n)$. Montrer que $A^k\to0$.</li><li>Soit $G$ un sous-groupe fini de $GL_n(\mathbb Z)$ et $\Phi : G\to GL_n(\mathbb Z/3\mathbb Z)$ la réduction modulo $3$. Montrer que $\Phi$ est un morphisme injectif.</li><li>En déduire que $|G|\leqslant3^{n^2}$.</li></ol>`,
  decode: { donnees: [R`$M^d = I_n$ pour $M\in G$, avec $d = |G|$ (Lagrange).`], but: R`Borner le cardinal d'un groupe fini de matrices entières.`, cles: {
    det: R`$\det M\det M^{-1} = 1$ avec deux entiers : $\det M = \pm1$. Réciproquement, $M^{-1} = \pm\operatorname{Com}(M)^\top$, à coefficients entiers.`,
    vp: R`$X^d-1$ est scindé à racines simples : $M$ est diagonalisable, de valeurs propres $\omega$ racines $d$-ièmes de l'unité. Celles de $A$ sont $\frac{\omega-1}3$, de module $\leqslant\frac23$.`,
    entier: R`Si $\bar M = \bar I_n$, $A = \frac13(M-I_n)$ est à coefficients entiers, et $A^k$ aussi. Une suite de matrices entières qui tend vers $0$ est nulle à partir d'un rang.`,
    pgcd: R`$X^d-1$ et $(X-1)^p$ annulent $M$ ; leur PGCD $X-1$ aussi (Bézout), car $X^d-1$ a $1$ comme racine simple.` } },
  steps: [
    { q: 1, t: "Caractérisation par le déterminant", h: R`<p><span data-k="det">Un entier inversible dans $\mathbb Z$ vaut $\pm1$</span> ; la comatrice donne l'inverse à coefficients entiers.</p>`, b: R`<p>Si $M,M^{-1}$ sont entières, <span data-k="det">$\det M\det M^{-1} = 1$ dans $\mathbb Z$</span>, donc $\det M = \pm1$. Réciproquement, si $\det M = \pm1$, $M^{-1} = \pm\operatorname{Com}(M)^\top$ est entière. $GL_n(\mathbb Z)$ contient $I_n$, est stable par produit (produit de matrices entières) et par inverse (par définition) : c'est un sous-groupe de $GL_n(\mathbb R)$.</p>`, rappels: ["k-comatrice"] },
    { q: 2, t: "A tend vers 0", h: R`<p>$M$ annule <span data-k="vp">$X^d-1$, scindé à racines simples sur $\mathbb C$</span>. Donc $A$ est diagonalisable et ses valeurs propres sont petites.</p>`, b: R`<p><span data-k="vp">$M$ est diagonalisable, de valeurs propres $\omega$ avec $\omega^d = 1$</span> ; $A$ est diagonalisable dans la même base, de valeurs propres $\frac{\omega-1}3$, et $|\omega-1|\leqslant|\omega|+1 = 2$. Toutes de module $\leqslant\frac23< 1$ : $A^k\to0$.</p>`, rappels: ["o-b-diag-crit", "k-puiss-cv"] },
    { q: 3, t: "Le noyau de la réduction", h: R`<p>Si $M\equiv I_n\pmod3$, <span data-k="entier">$A$ est entière, ses puissances aussi</span>, et elles tendent vers $0$ : $A$ est nilpotente. Puis $M$ est à la fois diagonalisable et « identité plus nilpotent ».</p>`, b: R`<p>La réduction modulo $3$ respecte les produits : $\Phi$ est un morphisme. Soit $M\in G$ avec $\bar M = \bar I_n$. <span data-k="entier">$A^k$ est entière et tend vers $0$, donc $A^p = 0$ pour un $p$</span> (ses coefficients sont des entiers de module $< 1$). Donc $(X-1)^p$ annule $M$, et $X^d-1$ aussi : <span data-k="pgcd">leur PGCD $X-1$ annule $M$</span>, soit $M = I_n$. $\ker\Phi = \{I_n\}$ : $\Phi$ est injectif.</p>`, rappels: ["o-b-bezout-poly"] },
    { q: 4, t: "Compter", h: R`<p>$\Phi$ injectif : $G$ a au plus autant d'éléments que $\mathcal M_n(\mathbb Z/3\mathbb Z)$.</p>`, b: R`<p>$|G|\leqslant|GL_n(\mathbb Z/3\mathbb Z)|\leqslant|\mathcal M_n(\mathbb Z/3\mathbb Z)| = 3^{n^2}$.</p><div class="sbox">$$G\subset GL_n(\mathbb Z)\ \text{fini}\ \Longrightarrow\ |G|\leqslant3^{n^2}.$$</div><p>Pourquoi $3$ et pas $2$ ? Avec $2$, $\frac{|\omega-1|}2$ peut valoir $1$ ($\omega = -1$) : la preuve échoue, et en effet $-I_n\equiv I_n\pmod2$.</p>` }
  ],
  ctx: { "k-comatrice": R`<p>$\det M = \pm1$.</p>`, "o-b-diag-crit": R`<p>$X^d-1$ scindé à racines simples sur $\mathbb C$.</p>`, "k-puiss-cv": R`<p>Valeurs propres de $A$ de module $\leqslant\frac23$.</p>`, "o-b-bezout-poly": R`<p>$\operatorname{pgcd}(X^d-1,(X-1)^p) = X-1$.</p>` },
  piege: R`Réduire modulo $2$ : le morphisme n'est plus injectif ($-I_n$ et $I_n$ ont la même image).`,
  methode: R`Une suite de matrices à coefficients entiers qui tend vers $0$ est stationnaire nulle : c'est l'argument clé.`
},
{
  id: "kh-14-16", subj: "kholles", year: "mp", chap: 6, level: 4, time: "35 min",
  title: "Éléments propres d'un opérateur à noyau min(x, t)",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$ et, pour $f\in E$, $T(f)(x) = \displaystyle\int_0^1\min(x,t)f(t)\,dt$.</p><ol><li>Montrer que $T(f)(x) = \int_0^xtf(t)dt+x\int_x^1f(t)dt$, puis que $T(f)$ est $\mathcal C^2$ avec $T(f)'' = -f$, $T(f)(0) = 0$ et $T(f)'(1) = 0$. En déduire que $T\in\mathcal L(E)$.</li><li>Montrer que $0$ n'est pas valeur propre.</li><li>Soit $\lambda\neq0$ et $f\neq0$ avec $T(f) = \lambda f$. Montrer que $\lambda f'' = -f$, $f(0) = 0$, $f'(1) = 0$, puis que $\lambda>0$.</li><li>Déterminer les valeurs propres et les sous-espaces propres.</li></ol>`,
  decode: { donnees: [R`$\min(x,t) = t$ si $t\leqslant x$, $x$ si $t\geqslant x$.`], but: R`Transformer un problème intégral en équation différentielle avec conditions aux bords.`, cles: {
    coupe: R`On coupe l'intégrale en $t = x$ pour se débarrasser du minimum.`,
    der: R`$\frac d{dx}\int_0^xtf(t)dt = xf(x)$ et $\frac d{dx}\Big(x\int_x^1f\Big) = \int_x^1f-xf(x)$.`,
    reg: R`$f = \frac1\lambda T(f)$ est $\mathcal C^2$ comme $T(f)$ : on peut dériver deux fois l'égalité.`,
    cos: R`$f = \sin(\omega x)$ avec $\omega = \frac1{\sqrt\lambda}$ ; $f'(1) = \omega\cos\omega = 0\iff\omega = \frac\pi2+k\pi$.` } },
  steps: [
    { q: 1, t: "Enlever le minimum", h: R`<p><span data-k="coupe">On coupe en $t = x$</span>, puis on <span data-k="der">dérive</span> chaque morceau (théorème fondamental).</p>`, b: R`<p><span data-k="coupe">$T(f)(x) = \int_0^xtf(t)dt+x\int_x^1f(t)dt$</span>. C'est $\mathcal C^1$ et <span data-k="der">$T(f)'(x) = xf(x)+\int_x^1f-xf(x) = \int_x^1f$</span>, encore $\mathcal C^1$, avec $T(f)'' = -f$. Enfin $T(f)(0) = 0$ et $T(f)'(1) = 0$. $T(f)$ est continue, et $T$ est linéaire : $T\in\mathcal L(E)$.</p>` },
    { q: 2, t: "Le noyau", h: R`<p>$T(f) = 0$ donne $T(f)'' = -f = 0$.</p>`, b: R`<p>Si $T(f) = 0$, alors $f = -T(f)'' = 0$. $T$ est injectif : $0$ n'est pas valeur propre.</p>` },
    { q: 3, t: "Une équation différentielle", h: R`<p><span data-k="reg">$f = \frac1\lambda T(f)$ hérite de la régularité de $T(f)$</span>. Pour le signe de $\lambda$, on intègre $f\cdot f''$ par parties.</p>`, b: R`<p><span data-k="reg">$f$ est $\mathcal C^2$</span> et $\lambda f'' = T(f)'' = -f$, $f(0) = \frac1\lambda T(f)(0) = 0$, $f'(1) = 0$. Puis</p>$$\lambda\int_0^1f'^2 = -\lambda\int_0^1ff''+\big[\lambda ff'\big]_0^1 = \int_0^1f^2>0,$$<p>(crochet nul car $f(0) = 0$ et $f'(1) = 0$), donc $\lambda>0$ (et $f'\neq0$, sinon $f$ serait constante nulle).</p>`, rappels: ["k-ipp"] },
    { q: 4, t: "Résoudre", h: R`<p>$f'' = -\omega^2f$ avec $\omega = \frac1{\sqrt\lambda}$ ; $f(0) = 0$ laisse le sinus ; <span data-k="cos">$f'(1) = 0$ quantifie $\omega$</span>.</p>`, b: R`<p>$f = a\cos\omega x+b\sin\omega x$, $f(0) = 0$ donne $a = 0$, et <span data-k="cos">$f'(1) = b\omega\cos\omega = 0$</span> avec $b\neq0$ : $\omega = \frac{(2k+1)\pi}2$, $k\in\mathbb N$. Réciproquement, si $f$ vérifie $\lambda f'' = -f$, $f(0) = 0$, $f'(1) = 0$, alors $g = T(f)-\lambda f$ vérifie $g'' = 0$, $g(0) = 0$, $g'(1) = 0$, donc $g = 0$.</p><div class="sbox">$$\operatorname{sp}(T) = \left\{\frac{4}{(2k+1)^2\pi^2},\ k\in\mathbb N\right\},\qquad E_{\lambda_k} = \operatorname{Vect}\left(\sin\frac{(2k+1)\pi x}{2}\right).$$</div>` + GRAPH({ w: 420, h: 220, x: [0, 1], y: [-1.15, 1.15], xt: [0, 0.5, 1], yt: [-1, 1], curves: [0, 1, 2].map(k => ({ f: x => Math.sin((2 * k + 1) * Math.PI * x / 2), c: ["b", "r", "g"][k], dash: k === 2 ? 1 : 0 })) }, R`Les trois premiers vecteurs propres : ils partent de $0$ en $x = 0$ et ont une tangente horizontale en $x = 1$.`, "Vecteurs propres de T"), rappels: ["k-edl2-cc"] }
  ],
  ctx: { "k-ipp": R`<p>$\int ff'' = [ff']-\int f'^2$.</p>`, "k-edl2-cc": R`<p>$f'' = -\omega^2f$.</p>` },
  piege: R`Oublier la réciproque : une solution de l'équation différentielle avec conditions aux bords est-elle bien un vecteur propre de $T$ ? Il faut le vérifier (fonction $g$ ci-dessus).`,
  methode: R`Opérateur à noyau du type $\min(x,t)$ : dériver deux fois pour obtenir $-f$, puis résoudre une équation avec conditions aux bords.`
},
{
  id: "kh-14-17", subj: "kholles", year: "mp", chap: 6, level: 4, time: "35 min",
  title: "Valeurs propres de la moyenne des voisins",
  enonce: R`<p>Soit $\mathcal B$ l'espace des suites complexes bornées indexées par $\mathbb Z$, et $T : \mathcal B\to\mathcal B$, $T(u)_n = \dfrac{u_{n+1}+u_{n-1}}2$.</p><ol><li>Montrer que $T$ est bien défini et linéaire.</li><li>Soit $\lambda\in\mathbb C$. Écrire $T(u) = \lambda u$ comme une récurrence linéaire d'ordre $2$, et donner ses solutions (sur $\mathbb Z$).</li><li>Montrer que si $|r|\neq1$, la solution $\alpha r^n+\beta r^{-n}$ n'est bornée que si $\alpha = \beta = 0$.</li><li>En déduire $\operatorname{sp}(T) = [-1,1]$ et les sous-espaces propres.</li></ol>`,
  decode: { donnees: [R`$u$ est bornée dans les deux directions ($n\to+\infty$ et $n\to-\infty$).`], but: R`Trouver tous les $\lambda$ pour lesquels il existe une suite bornée non nulle avec $T(u) = \lambda u$.`, cles: {
    car: R`$u_{n+1}-2\lambda u_n+u_{n-1} = 0$, équation caractéristique $r^2-2\lambda r+1 = 0$ ; le produit des racines vaut $1$.`,
    domine: R`Si $|r|>1$ : quand $n\to+\infty$, $r^n$ explose et $r^{-n}\to0$, donc il faut $\alpha = 0$ ; puis quand $n\to-\infty$, $r^{-n}$ explose, donc $\beta = 0$.`,
    cos: R`$r = e^{i\theta}$ et $\frac1r = e^{-i\theta}$ donnent $\lambda = \frac{r+1/r}2 = \cos\theta$.` } },
  steps: [
    { q: 1, t: "T est bien défini", h: R`<p>La moyenne de deux nombres bornés par $M$ est bornée par $M$.</p>`, b: R`<p>Si $|u_n|\leqslant M$ pour tout $n$, alors $|T(u)_n|\leqslant M$ : $T(u)\in\mathcal B$. La linéarité est claire.</p>` },
    { q: 2, t: "Une récurrence d'ordre 2", h: R`<p>$T(u) = \lambda u$ relie trois termes consécutifs : <span data-k="car">équation caractéristique</span>, dont les racines sont inverses l'une de l'autre.</p>`, b: R`<p>$T(u) = \lambda u\iff u_{n+1}-2\lambda u_n+u_{n-1} = 0$ pour tout $n\in\mathbb Z$. <span data-k="car">Racines $r$ et $\frac1r$</span>. Si $r\neq\frac1r$ (i.e. $\lambda\neq\pm1$) : $u_n = \alpha r^n+\beta r^{-n}$. Si $\lambda = \pm1$ : $r = \pm1$ double, $u_n = (\alpha+\beta n)(\pm1)^n$.</p>`, rappels: ["k-rec-lin2-c"] },
    { q: 3, t: "Bornée dans les deux sens", h: R`<p><span data-k="domine">Un des deux termes domine à chaque extrémité</span> : il doit être absent.</p>`, b: R`<p>Quitte à échanger $r$ et $\frac1r$, $|r|>1$. <span data-k="domine">En $+\infty$</span> : $u_nr^{-n} = \alpha+\beta r^{-2n}\to\alpha$, et $|u_nr^{-n}|\leqslant M|r|^{-n}\to0$, donc $\alpha = 0$. <span data-k="domine">En $-\infty$</span> : $u_n = \beta r^{-n}$ avec $|r^{-n}|\to+\infty$, donc $\beta = 0$.</p>` },
    { q: 4, t: "Le spectre", h: R`<p>Il faut $|r| = 1$, donc <span data-k="cos">$\lambda = \cos\theta$</span>. Cas $\lambda = \pm1$ : $\beta = 0$ pour que $(\alpha+\beta n)$ reste bornée.</p>`, b: R`<p>Pour $\lambda\notin[-1,1]$, les racines ne sont pas de module $1$ (car <span data-k="cos">$|r| = 1$ donne $\lambda = \cos\theta\in[-1,1]$</span>), et seule $u = 0$ convient. Pour $\lambda = \cos\theta$, $\theta\in\,]0,\pi[$ : toutes les solutions $\alpha e^{in\theta}+\beta e^{-in\theta}$ sont bornées. Pour $\lambda = \pm1$ : $(\alpha+\beta n)(\pm1)^n$ est bornée ssi $\beta = 0$.</p><div class="sbox">$$\operatorname{sp}(T) = [-1,1],\quad E_{\cos\theta} = \operatorname{Vect}\big((e^{in\theta}),(e^{-in\theta})\big),\quad E_1 = \operatorname{Vect}\big((1)\big),\quad E_{-1} = \operatorname{Vect}\big(((-1)^n)\big).$$</div><p>Les sous-espaces propres sont de dimension $2$, sauf aux bords.</p>` }
  ],
  ctx: { "k-rec-lin2-c": R`<p>Avec $r^2-2\lambda r+1 = 0$.</p>` },
  piege: R`Oublier que la suite est indexée par $\mathbb Z$ : sur $\mathbb N$, toute racine de module $< 1$ donnerait une suite bornée, et le spectre serait beaucoup plus gros.`,
  methode: R`Opérateur sur des suites défini par une relation entre voisins : écrire la récurrence linéaire et imposer la condition (ici bornée) aux deux bouts.`
}
]);
})();

/* ---------- MP · 7. Topologie des EVN (1) ---------- */
LEMME.rappels({
  "k-ferme-seq": { t: "Fermé : caractérisation séquentielle", b: R`<div class="sbox">$$F\ \text{fermé}\iff\big(x_n\in F,\ x_n\to x\ \Rightarrow\ x\in F\big).$$</div><p>L'image réciproque d'un fermé par une application continue est fermée ; l'image réciproque d'un ouvert est ouverte.</p>` },
  "k-compact-seq": { t: "Compacité (Bolzano-Weierstrass)", b: R`<p>$K$ est compact si toute suite de $K$ a une sous-suite qui converge dans $K$. En dimension finie, compact $\iff$ fermé borné.</p><div class="sbox">$$(x_n)\in K^{\mathbb N}\ \Longrightarrow\ \exists\varphi,\ x_{\varphi(n)}\to\ell\in K.$$</div>` },
  "k-trigo-mat": { t: "Trigonalisation sur ℂ", b: R`<p>Toute matrice de $\mathcal M_n(\mathbb C)$ est semblable à une matrice triangulaire supérieure, dont la diagonale porte les valeurs propres :</p><div class="sbox">$$A = PTP^{-1},\qquad T\ \text{triangulaire},\qquad\operatorname{diag}(T) = (\lambda_1,\dots,\lambda_n).$$</div>` },
  "k-cpa": { t: "Connexité par arcs", b: R`<p>$A$ est connexe par arcs si deux points de $A$ sont toujours reliés par un chemin continu à valeurs dans $A$. L'image d'un connexe par arcs par une application continue est connexe par arcs ; dans $\mathbb R$, ce sont les intervalles.</p><div class="sbox">$$A\ \text{c.p.a.},\ f\ \text{continue}\ \Longrightarrow\ f(A)\ \text{c.p.a.}$$</div>` },
  "k-valeur-adh": { t: "Valeur d'adhérence", b: R`<p>$\ell$ est valeur d'adhérence de $(u_n)$ si une sous-suite converge vers $\ell$, ce qui équivaut à :</p><div class="sbox">$$\forall\varepsilon>0,\ \forall N,\ \exists n\geqslant N,\quad|u_n-\ell|< \varepsilon.$$</div><p>(La suite revient près de $\ell$ une infinité de fois.)</p>` }
});

(() => {
const { FIG, S, f1, GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "kh-15-1", subj: "kholles", year: "mp", chap: 7, level: 3, time: "25 min",
  title: "Graphe fermé et continuité",
  enonce: R`<p>Soient $E,F$ deux espaces vectoriels normés et $f : E\to F$. On note $\Gamma_f = \{(x,f(x)),\ x\in E\}\subset E\times F$.</p><ol><li>Montrer que si $f$ est continue, $\Gamma_f$ est fermé.</li><li>Montrer que la réciproque est fausse avec $f : \mathbb R\to\mathbb R$, $f(x) = \frac1x$ pour $x\neq0$ et $f(0) = 0$.</li><li>On suppose que $f(E)$ est contenu dans un compact $K$ de $F$ et que $\Gamma_f$ est fermé. Montrer que $f$ est continue.</li></ol>`,
  decode: { donnees: [R`Sur $E\times F$, $(x_n,y_n)\to(x,y)\iff x_n\to x$ et $y_n\to y$.`], but: R`Relier continuité et fermeture du graphe.`, cles: {
    seq: R`$\Gamma_f$ fermé $\iff$ dès que $x_n\to x$ et $f(x_n)\to y$, on a $y = f(x)$.`,
    graphe: R`Le graphe de $\frac1x$ est une hyperbole (fermée dans $\mathbb R^2\setminus\{0\}\times\mathbb R$) et le point $(0,0)$, isolé : aucune suite de points du graphe ne s'approche de $(0,y)$.`,
    sous: R`Si $f(x_n)\not\to f(x)$, on extrait une sous-suite qui reste à distance $\geqslant\varepsilon$ de $f(x)$, puis (compacité) une sous-sous-suite qui converge vers un $y$.` } },
  steps: [
    { q: 1, t: "Continue implique graphe fermé", h: R`<p>Caractérisation séquentielle : <span data-k="seq">si $(x_n,f(x_n))\to(x,y)$</span>, la continuité donne $f(x_n)\to f(x)$, et l'unicité de la limite $y = f(x)$.</p>`, b: R`<p>Soit $(x_n,f(x_n))\to(x,y)$. Alors $x_n\to x$, donc $f(x_n)\to f(x)$ par continuité. Par unicité de la limite, $y = f(x)$ : $(x,y)\in\Gamma_f$. Donc $\Gamma_f$ est fermé.</p>`, rappels: ["k-ferme-seq", "o-a-seq-cont"] },
    { q: 2, t: "Contre-exemple", h: R`<p>Le graphe de $\frac1x$ ne s'approche jamais de l'axe vertical à distance finie : <span data-k="graphe">il n'a pas de point d'accumulation « au-dessus » de $0$</span>.</p>`, b: R`<p>Si $(x_n,f(x_n))\to(x,y)$ avec $x\neq0$ : $x_n\neq0$ à partir d'un rang et $\frac1{x_n}\to\frac1x$, donc $y = f(x)$. Si $x = 0$ : soit $x_n = 0$ à partir d'un rang ($y = 0 = f(0)$), soit une sous-suite de $x_n\neq0$ tend vers $0$, et $|f(x_n)| = \frac1{|x_n|}\to+\infty$ ne converge pas. <span data-k="graphe">Le graphe est fermé</span>, mais $f$ n'est pas continue en $0$.</p>` + GRAPH({ w: 380, h: 220, x: [-3, 3], y: [-3.5, 3.5], xt: [], yt: [], curves: [{ f: x => Math.abs(x) < 0.29 ? NaN : 1 / x, c: "b" }], extra: (X, Y) => `<circle cx="${f1(X(0))}" cy="${f1(Y(0))}" r="5" class="mass"/>` }, R`Le graphe de $f$ : les deux branches de l'hyperbole et le point isolé $(0,0)$. Il est fermé, mais $f$ n'est pas continue.`, "Graphe fermé discontinu") },
    { q: 3, t: "Avec un compact", h: R`<p>Par l'absurde, <span data-k="sous">une sous-suite reste loin de $f(x)$</span>. La compacité fournit une valeur d'adhérence $y$, que le graphe fermé force à valoir $f(x)$.</p>`, b: R`<p>Soit $x_n\to x$ et supposons $f(x_n)\not\to f(x)$ : il existe $\varepsilon>0$ et une sous-suite avec $\|f(x_{\varphi(n)})-f(x)\|\geqslant\varepsilon$. Les $f(x_{\varphi(n)})$ sont dans le compact $K$ : <span data-k="sous">une sous-suite converge vers un $y$</span>, avec $\|y-f(x)\|\geqslant\varepsilon$. Mais $(x_{\varphi\circ\psi(n)},f(x_{\varphi\circ\psi(n)}))\to(x,y)$ et $\Gamma_f$ est fermé, donc $y = f(x)$ : contradiction.</p><div class="sbox">$$\Gamma_f\ \text{fermé et}\ f(E)\subset K\ \text{compact}\ \Longrightarrow\ f\ \text{continue}.$$</div>`, rappels: ["k-compact-seq", "absurde"] }
  ],
  ctx: { "k-ferme-seq": R`<p>Appliqué au graphe dans $E\times F$.</p>`, "o-a-seq-cont": R`<p>$x_n\to x\Rightarrow f(x_n)\to f(x)$.</p>`, "k-compact-seq": R`<p>Pour la suite $f(x_{\varphi(n)})\in K$.</p>`, "absurde": R`<p>On suppose $f(x_n)\not\to f(x)$.</p>` },
  piege: R`Oublier de passer par une sous-suite : $f(x_n)$ peut ne pas converger du tout, mais elle a des sous-suites convergentes grâce au compact.`,
  methode: R`Pour montrer $f(x_n)\to f(x)$ dans un compact : montrer que $f(x)$ est la seule valeur d'adhérence possible.`
},
{
  id: "kh-15-2", subj: "kholles", year: "mp", chap: 7, level: 2, time: "25 min",
  title: "O(n) est compact, GLₙ est un ouvert dense",
  enonce: R`<ol><li>Montrer que $O_n(\mathbb R) = \{M\in\mathcal M_n(\mathbb R) : M^\top M = I_n\}$ est fermé et borné, donc compact.</li><li>Montrer que $GL_n(\mathbb C)$ est un ouvert de $\mathcal M_n(\mathbb C)$.</li><li>Soit $A\in\mathcal M_n(\mathbb C)$. Montrer que $A-\frac1kI_n$ est inversible pour $k$ assez grand. En déduire que $GL_n(\mathbb C)$ est dense. Même question sur $\mathbb R$.</li><li>Application : en déduire que $\det(I_n+AB) = \det(I_n+BA)$ pour toutes $A,B$.</li></ol>`,
  decode: { donnees: [R`$\mathcal M_n(\mathbb K)$ est de dimension finie : toutes les normes sont équivalentes.`], but: R`Trois propriétés topologiques des groupes de matrices.`, cles: {
    colonnes: R`$M^\top M = I_n$ : les colonnes de $M$ forment une famille orthonormée, donc chaque coefficient vérifie $|m_{ij}|\leqslant1$.`,
    det: R`$GL_n = \det^{-1}(\mathbb C^\ast)$, image réciproque d'un ouvert par une application continue (polynomiale).`,
    fini: R`$A-\frac1kI_n$ n'est pas inversible ssi $\frac1k$ est valeur propre de $A$ : au plus $n$ valeurs de $k$.` } },
  steps: [
    { q: 1, t: "Compacité de O(n)", h: R`<p>Fermé : image réciproque de $\{I_n\}$ par $M\mapsto M^\top M$, continue. Borné : <span data-k="colonnes">les colonnes sont unitaires</span>.</p>`, b: R`<p>$\varphi : M\mapsto M^\top M$ est continue (polynomiale en les coefficients), et $O_n(\mathbb R) = \varphi^{-1}(\{I_n\})$ est fermé. <span data-k="colonnes">Les colonnes sont unitaires</span>, donc $\|M\|_\infty\leqslant1$ : borné. En dimension finie, fermé borné $\Rightarrow$ compact.</p>`, rappels: ["k-ferme-seq", "k-compact-dimfinie"] },
    { q: 2, t: "GLₙ est ouvert", h: R`<p><span data-k="det">Image réciproque de l'ouvert $\mathbb C^\ast$</span> par le déterminant, continu.</p>`, b: R`<p>$\det$ est polynomial en les coefficients, donc continu, et <span data-k="det">$GL_n(\mathbb C) = \det^{-1}(\mathbb C^\ast)$</span>, image réciproque d'un ouvert : c'est un ouvert.</p>`, rappels: ["o-a-image-rec"] },
    { q: 3, t: "GLₙ est dense", h: R`<p>On perturbe $A$ par une petite homothétie. <span data-k="fini">Seul un nombre fini de perturbations sont mauvaises</span>.</p>`, b: R`<p><span data-k="fini">$\det(A-\frac1kI_n) = 0\iff\frac1k\in\operatorname{sp}(A)$</span>, et le spectre a au plus $n$ éléments. Donc pour $k$ assez grand, $A_k = A-\frac1kI_n\in GL_n$, et $A_k\to A$. Le même argument marche sur $\mathbb R$ (valeurs propres réelles en nombre fini).</p><div class="sbox">$$\overline{GL_n(\mathbb K)} = \mathcal M_n(\mathbb K).$$</div>`, rappels: ["o-a-adh-seq"] },
    { q: 4, t: "Une application de la densité", h: R`<p>Égalité vraie pour $A$ inversible (par similitude), et les deux membres sont continus en $A$ : on passe à la limite.</p>`, b: R`<p>Si $A$ est inversible, $I_n+BA = A^{-1}(I_n+AB)A$, d'où l'égalité des déterminants. Pour $A$ quelconque, $A_k\to A$ avec $A_k$ inversible, et $A\mapsto\det(I_n+AB)-\det(I_n+BA)$ est continue, nulle sur $GL_n$ dense : nulle partout.</p>` }
  ],
  ctx: { "k-ferme-seq": R`<p>$O_n = \varphi^{-1}(\{I_n\})$.</p>`, "k-compact-dimfinie": R`<p>Dans $\mathcal M_n(\mathbb R)$.</p>`, "o-a-image-rec": R`<p>$\det^{-1}(\mathbb C^\ast)$.</p>`, "o-a-adh-seq": R`<p>$A$ est limite de la suite $(A_k)$ d'inversibles.</p>` },
  piege: R`Croire que $GL_n(\mathbb R)$ est fermé : la suite $\frac1kI_n$ est inversible et tend vers $0$, non inversible.`,
  methode: R`Prouver une identité matricielle continue : la prouver pour les inversibles, puis densité.`
},
{
  id: "kh-15-3", subj: "kholles", year: "mp", chap: 7, level: 3, time: "30 min",
  title: "Densité des matrices diagonalisables",
  enonce: R`<ol><li>Soit $A\in\mathcal M_n(\mathbb C)$, écrite $A = PTP^{-1}$ avec $T$ triangulaire supérieure de diagonale $(t_1,\dots,t_n)$. Construire des matrices triangulaires $T_k\to T$ à coefficients diagonaux deux à deux distincts.</li><li>En déduire que l'ensemble $\Delta_n(\mathbb C)$ des matrices diagonalisables est dense dans $\mathcal M_n(\mathbb C)$.</li><li>Montrer que pour $n\geqslant2$, $\Delta_n(\mathbb R)$ n'est pas dense dans $\mathcal M_n(\mathbb R)$, en considérant $R = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$ (complétée par des zéros).</li><li>Application : retrouver Cayley-Hamilton sur $\mathbb C$ à partir du cas diagonalisable.</li></ol>`,
  decode: { donnees: [R`Toute matrice complexe est trigonalisable.`], but: R`Approcher toute matrice par des matrices diagonalisables.`, cles: {
    pert: R`On ajoute $\frac{j}{k}$ au $j$-ième coefficient diagonal. Pour $k$ assez grand, les $t_j+\frac jk$ sont distincts : deux d'entre eux ne coïncident que pour un nombre fini de valeurs de $k$.`,
    discr: R`Pour $M\in\mathcal M_2(\mathbb R)$, $\delta(M) = \operatorname{tr}(M)^2-4\det M$ est continu ; $\delta(R) = -4< 0$, donc $\delta< 0$ près de $R$ : valeurs propres non réelles.`,
    ch: R`$A\mapsto\chi_A(A)$ est continue (coefficients polynomiaux en ceux de $A$), nulle sur $\Delta_n(\mathbb C)$.` } },
  steps: [
    { q: 1, t: "Séparer les valeurs propres", h: R`<p>On <span data-k="pert">perturbe la diagonale de $T$ par des quantités différentes</span> qui tendent vers $0$.</p>`, b: R`<p>Posons $T_k = T+\operatorname{diag}\left(\frac1k,\frac2k,\dots,\frac nk\right)$. $T_k\to T$. Pour $i\neq j$, $t_i+\frac ik = t_j+\frac jk\iff k = \frac{j-i}{t_i-t_j}$ (si $t_i\neq t_j$) ou jamais (si $t_i = t_j$, car $i\neq j$) : <span data-k="pert">au plus une valeur de $k$ par paire</span>. Pour $k$ assez grand, les coefficients diagonaux de $T_k$ sont distincts.</p>`, rappels: ["k-trigo-mat"] },
    { q: 2, t: "Densité", h: R`<p>$T_k$ triangulaire à valeurs propres distinctes : diagonalisable. On revient avec $P$, et $M\mapsto PMP^{-1}$ est continue.</p>`, b: R`<p>$T_k$ a $n$ valeurs propres distinctes, donc est diagonalisable, comme $A_k = PT_kP^{-1}$. Et $A_k\to PTP^{-1} = A$ (continuité du produit matriciel).</p><div class="sbox">$$\overline{\Delta_n(\mathbb C)} = \mathcal M_n(\mathbb C).$$</div>`, rappels: ["valeurs-propres-distinctes"] },
    { q: 3, t: "Sur ℝ, c'est faux", h: R`<p>Près de la rotation $R$, les matrices <span data-k="discr">ont un discriminant négatif</span> (continuité) : elles ne sont pas diagonalisables sur $\mathbb R$.</p>`, b: R`<p>Pour $n = 2$ : <span data-k="discr">$\delta(M) = \operatorname{tr}(M)^2-4\det M$</span> est continu et $\delta(R) = -4$. Il existe donc une boule $B(R,r)$ où $\delta< 0$ : les matrices de cette boule n'ont pas de valeur propre réelle, donc ne sont pas diagonalisables sur $\mathbb R$. $\Delta_2(\mathbb R)$ ne rencontre pas $B(R,r)$ : il n'est pas dense. Pour $n\geqslant3$, même argument avec le bloc $R$ complété par des zéros (le polynôme caractéristique garde un facteur sans racine réelle, par continuité des coefficients).</p>` },
    { q: 4, t: "Cayley-Hamilton par densité", h: R`<p>Pour une matrice diagonalisable, c'est un calcul direct. Puis <span data-k="ch">l'application $A\mapsto\chi_A(A)$ est continue</span>.</p>`, b: R`<p>Si $A = PDP^{-1}$, $\chi_A(A) = P\chi_A(D)P^{-1} = P\operatorname{diag}(\chi_A(\lambda_i))P^{-1} = 0$. <span data-k="ch">$A\mapsto\chi_A(A)$ est continue</span> et nulle sur le dense $\Delta_n(\mathbb C)$ : elle est nulle partout.</p><div class="sbox">$$\forall A\in\mathcal M_n(\mathbb C),\qquad\chi_A(A) = 0.$$</div>` }
  ],
  ctx: { "k-trigo-mat": R`<p>$A = PTP^{-1}$.</p>`, "valeurs-propres-distinctes": R`<p>$T_k$ a $n$ valeurs propres distinctes.</p>` },
  piege: R`Perturber $A$ par $\frac1kI_n$ : cela décale toutes les valeurs propres de la même quantité, sans les séparer.`,
  methode: R`Densité d'une propriété générique : trigonaliser, puis perturber la diagonale pour séparer les valeurs propres.`
},
{
  id: "kh-15-4", subj: "kholles", year: "mp", chap: 7, level: 3, time: "25 min",
  title: "Connexité par arcs de GLₙ(ℂ) et GLₙ(ℝ)",
  enonce: R`<ol><li>Montrer que $GL_n(\mathbb R)$ n'est pas connexe par arcs.</li><li>Soient $A,B\in GL_n(\mathbb C)$. Montrer que $P(z) = \det\big((1-z)A+zB\big)$ est un polynôme non nul en $z$.</li><li>En déduire un chemin continu de $A$ à $B$ dans $GL_n(\mathbb C)$. Conclure.</li><li>Montrer que $GL_n^+(\mathbb R) = \{\det>0\}$ contient $I_n$ et $\operatorname{diag}(-1,-1,1,\dots,1)$, et relier ces deux matrices par un chemin dans $GL_n^+(\mathbb R)$.</li></ol>`,
  decode: { donnees: [R`$\det$ est continu ; $\mathbb C$ privé d'un nombre fini de points est connexe par arcs.`], but: R`Comparer la connexité de $GL_n$ sur $\mathbb R$ et sur $\mathbb C$.`, cles: {
    image: R`Si $GL_n(\mathbb R)$ était connexe par arcs, $\det(GL_n(\mathbb R)) = \mathbb R^\ast$ le serait (image continue).`,
    contour: R`Le segment $[0,1]$ peut passer par une racine de $P$ ; on le remplace par un chemin de $\mathbb C$ de $0$ à $1$ qui évite les racines (en nombre fini).`,
    rot: R`$\begin{pmatrix}\cos t&-\sin t\\\sin t&\cos t\end{pmatrix}$ va de $I_2$ ($t = 0$) à $-I_2$ ($t = \pi$) en restant de déterminant $1$.` } },
  steps: [
    { q: 1, t: "Sur ℝ : deux morceaux", h: R`<p><span data-k="image">Le déterminant envoie $GL_n(\mathbb R)$ sur $\mathbb R^\ast$</span>, qui n'est pas un intervalle.</p>`, b: R`<p>$\det : GL_n(\mathbb R)\to\mathbb R^\ast$ est continu et surjectif ($\det\operatorname{diag}(t,1,\dots,1) = t$). <span data-k="image">Si $GL_n(\mathbb R)$ était connexe par arcs, $\mathbb R^\ast$ le serait</span>, or ce n'est pas un intervalle. Concrètement, un chemin de $I_n$ à $\operatorname{diag}(-1,1,\dots,1)$ ferait passer $\det$ de $1$ à $-1$, donc par $0$ (TVI).</p>`, rappels: ["k-cpa"] },
    { q: 2, t: "Un polynôme non nul", h: R`<p>$P(0) = \det A\neq0$.</p>`, b: R`<p>$P(z)$ est un déterminant dont les coefficients sont affines en $z$ : c'est un polynôme en $z$. $P(0) = \det A\neq0$, donc $P\neq0$, et $P$ a un nombre fini de racines (aucune n'est $0$ ou $1$).</p>` },
    { q: 3, t: "Contourner les racines", h: R`<p>On relie $0$ à $1$ <span data-k="contour">par un chemin du plan complexe qui évite les racines de $P$</span> (par exemple un arc de cercle légèrement décalé).</p>`, b: R`<p>Soit $\gamma : [0,1]\to\mathbb C$ continu, $\gamma(0) = 0$, $\gamma(1) = 1$, <span data-k="contour">évitant les racines de $P$</span> (possible car elles sont en nombre fini : par exemple $\gamma(s) = s+i\eta\sin(\pi s)$ pour un $\eta$ bien choisi). Alors $s\mapsto(1-\gamma(s))A+\gamma(s)B$ est continu, va de $A$ à $B$ et reste dans $GL_n(\mathbb C)$.</p><div class="sbox">$$GL_n(\mathbb C)\ \text{est connexe par arcs}.$$</div>` + FIG(340, 140, (() => { const X = v => 50 + v * 240; let s = `<line class="ax" x1="20" y1="100" x2="330" y2="100"/>`; s += `<path class="vb" style="fill:none;stroke-width:2.2" d="M${X(0)} 100 Q ${X(0.5)} 10 ${X(1)} 100"/>`; for (const [x, y] of [[0.35, 0], [0.62, 0], [0.8, 0.25]]) s += `<circle cx="${f1(X(x))}" cy="${f1(100 - y * 200)}" r="5" class="body" style="fill:var(--red)"/>`; return s + `<circle cx="${X(0)}" cy="100" r="5" class="mass"/><circle cx="${X(1)}" cy="100" r="5" class="mass"/>` + S(X(0), 120, "0", "middle") + S(X(1), 120, "1", "middle"); })(), R`Les racines de $P$ (en rouge) sont en nombre fini : un chemin de $0$ à $1$ dans $\mathbb C$ peut les contourner. Sur $\mathbb R$, impossible : on est coincé sur la droite.`, "Chemin évitant les racines") },
    { q: 4, t: "Dans GLₙ⁺(ℝ)", h: R`<p>Une <span data-k="rot">rotation d'angle variable</span> dans le plan des deux premiers vecteurs.</p>`, b: R`<p>$\operatorname{diag}(-1,-1,1,\dots,1)$ a pour déterminant $1>0$. Le chemin $t\mapsto\operatorname{diag}(R_t,I_{n-2})$, avec <span data-k="rot">$R_t$ la rotation d'angle $t$</span>, est continu, de déterminant $1$, et va de $I_n$ ($t = 0$) à $\operatorname{diag}(-1,-1,1,\dots,1)$ ($t = \pi$). (On peut montrer que $GL_n^+(\mathbb R)$ est connexe par arcs : $GL_n(\mathbb R)$ a exactement deux « morceaux ».)</p>` }
  ],
  ctx: { "k-cpa": R`<p>$\det$ est continu ; les connexes par arcs de $\mathbb R$ sont les intervalles.</p>` },
  piege: R`Utiliser le segment $[A,B]$ directement : il peut rencontrer des matrices non inversibles (par exemple $A = I_n$, $B = -I_n$, qui passe par $0$).`,
  methode: R`Relier deux points en évitant un ensemble fini : passer par le plan complexe.`
},
{
  id: "kh-15-5", subj: "kholles", year: "mp", chap: 7, level: 4, time: "30 min",
  title: "Valeurs d'adhérence d'une suite à petits pas",
  enonce: R`<p>Soit $(u_n)$ une suite réelle bornée telle que $u_{n+1}-u_n\to0$. On note $V$ l'ensemble de ses valeurs d'adhérence.</p><ol><li>Justifier que $V$ est non vide, et que $V\subset[\ell^-,\ell^+]$ où $\ell^- = \min V$ et $\ell^+ = \max V$ (on admet que $V$ est fermé).</li><li>Soit $c\in\,]\ell^-,\ell^+[$. Montrer que $c\in V$.</li><li>Conclure que $V = [\ell^-,\ell^+]$. Donner un exemple où $V = [-1,1]$.</li><li>Montrer que l'hypothèse $u_{n+1}-u_n\to0$ est nécessaire.</li></ol>`,
  decode: { donnees: [R`$(u_n)$ bornée ; les pas tendent vers $0$.`], but: R`Montrer que l'ensemble des valeurs d'adhérence est un intervalle.`, cles: {
    bw: R`Bolzano-Weierstrass : toute suite réelle bornée a une valeur d'adhérence.`,
    traverse: R`La suite passe une infinité de fois près de $\ell^-$ (sous $c$) et près de $\ell^+$ (au-dessus de $c$) : elle traverse le niveau $c$ une infinité de fois, à petits pas.`,
    premier: R`Entre un indice $p\geqslant N$ avec $u_p< c$ et un indice $q>p$ avec $u_q>c$, soit $m$ le premier indice $> p$ avec $u_m\geqslant c$ : $u_{m-1}< c\leqslant u_m$, et $u_m-u_{m-1}< \varepsilon$.` } },
  steps: [
    { q: 1, t: "V non vide", h: R`<p><span data-k="bw">Bolzano-Weierstrass</span>. Un fermé borné non vide de $\mathbb R$ a un plus petit et un plus grand élément.</p>`, b: R`<p><span data-k="bw">$(u_n)$ bornée a une sous-suite convergente</span> : $V\neq\emptyset$. $V$ est borné (contenu dans $[\inf u,\sup u]$) et fermé, donc $\ell^- = \min V$ et $\ell^+ = \max V$ existent.</p>`, rappels: ["k-compact-seq"] },
    { q: 2, t: "Traverser le niveau c", h: R`<p>La suite revient <span data-k="traverse">infiniment souvent sous $c$ et au-dessus de $c$</span>. À chaque traversée, comme les pas sont petits, un terme tombe près de $c$.</p>`, b: R`<p>Soit $\varepsilon>0$ et $N$ avec $|u_{n+1}-u_n|< \varepsilon$ pour $n\geqslant N$. Comme $\ell^-< c$ est valeur d'adhérence, il existe $p\geqslant N$ avec $u_p< c$ ; comme $\ell^+>c$, il existe $q>p$ avec $u_q>c$. <span data-k="premier">Soit $m$ le premier indice $> p$ avec $u_m\geqslant c$</span> : $u_{m-1}< c\leqslant u_m< u_{m-1}+\varepsilon< c+\varepsilon$. Donc $|u_m-c|< \varepsilon$ avec $m>N$. $N$ et $\varepsilon$ étant arbitraires, $c\in V$.</p>`, rappels: ["k-valeur-adh"] },
    { q: 3, t: "Conclusion et exemple", h: R`<p>$V$ contient ses bornes et tout ce qui est entre. Pour l'exemple : une suite qui oscille de plus en plus lentement entre $-1$ et $1$.</p>`, b: R`<div class="sbox">$$V = [\ell^-,\ell^+].$$</div><p>Exemple : $u_n = \sin\sqrt n$. Ses pas tendent vers $0$ ($|\sin\sqrt{n+1}-\sin\sqrt n|\leqslant\sqrt{n+1}-\sqrt n\to0$), et on a vu (exercice MPSI sur $\sin\sqrt n$) que tout point de $[-1,1]$ est approché à des rangs arbitrairement grands : $V = [-1,1]$.</p>` + GRAPH({ w: 420, h: 200, x: [0, 400], y: [-1.2, 1.2], xt: [0, 100, 200, 300, 400], yt: [-1, 1], curves: [{ f: x => Math.sin(Math.sqrt(Math.round(x))), c: "b", n: 400 }] }, R`$u_n = \sin\sqrt n$ : les oscillations ralentissent, et la suite balaie tout $[-1,1]$.`, "Suite sin racine de n") },
    { q: 4, t: "L'hypothèse est nécessaire", h: R`<p>Une suite qui saute d'une valeur à l'autre sans passer entre les deux.</p>`, b: R`<p>$u_n = (-1)^n$ : bornée, $V = \{-1,1\}$, pas un intervalle. Ici $|u_{n+1}-u_n| = 2\not\to0$.</p>` }
  ],
  ctx: { "k-compact-seq": R`<p>Bolzano-Weierstrass dans $\mathbb R$.</p>`, "k-valeur-adh": R`<p>Pour tout $\varepsilon$ et tout $N$, un $m\geqslant N$ avec $|u_m-c|< \varepsilon$.</p>` },
  piege: R`Prendre un indice $m$ quelconque entre $p$ et $q$ : il faut le <b>premier</b> passage au-dessus de $c$, pour que le terme précédent soit encore sous $c$.`,
  methode: R`Une suite à pas tendant vers $0$ ne peut pas sauter un niveau : prendre le premier franchissement.`
}
]);
})();

/* ---------- MP · 7. Topologie des EVN (2) · 8. Convexité ---------- */
LEMME.rappels({
  "k-lin-cont": { t: "Continuité d'une application linéaire", b: R`<p>Pour $f$ linéaire entre espaces normés, il y a équivalence :</p><div class="sbox">$$f\ \text{continue}\iff f\ \text{continue en}\ 0\iff\exists C,\ \forall x,\ \|f(x)\|\leqslant C\|x\|.$$</div><p>En dimension finie (au départ), toute application linéaire est continue.</p>` },
  "k-riesz": { t: "Compacité et dimension", b: R`<p>Dans un espace normé de dimension finie, la boule unité fermée est compacte. En dimension infinie, elle ne l'est jamais (théorème de Riesz, hors programme mais instructif).</p>` },
  "k-concave-ln": { t: "Concavité du logarithme", b: R`<p>$\ln$ est concave sur $]0,+\infty[$ ($\ln'' = -\frac1{x^2}< 0$) :</p><div class="sbox">$$\alpha\ln u+\beta\ln v\leqslant\ln(\alpha u+\beta v)\qquad(\alpha,\beta\geqslant0,\ \alpha+\beta = 1).$$</div>` }
});

(() => {
const { FIG, S, f1, GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "kh-15-6", subj: "kholles", year: "mp", chap: 7, level: 3, time: "20 min",
  title: "Applications linéaires continues et suites",
  enonce: R`<p>Soient $E,F$ normés et $f\in\mathcal L(E,F)$. Montrer l'équivalence :</p><ol><li>$f$ est continue ;</li><li>pour toute suite $(u_n)$ de $E$ qui tend vers $0$, la suite $(f(u_n))$ est bornée.</li></ol><p>Puis : 3. Appliquer à $E = \mathbb R[X]$ normé par $\|P\| = \sup_{[0,1]}|P|$ et $f(P) = P(2)$.</p>`,
  decode: { donnees: [R`$f$ linéaire : $f(\lambda x) = \lambda f(x)$.`], but: R`Une caractérisation faible (bornée au lieu de convergente) qui suffit pourtant.`, cles: {
    nonborne: R`Si $f$ n'est pas continue, elle n'est pas bornée sur la boule unité : pour tout $n$, il existe $x_n$ avec $\|x_n\|\leqslant1$ et $\|f(x_n)\|\geqslant n^2$.`,
    ech: R`$u_n = \frac{x_n}n\to0$ mais $\|f(u_n)\| = \frac{\|f(x_n)\|}n\geqslant n$ : non bornée. Le facteur $n^2$ laisse un $n$ après division.`,
    pn: R`$P_n = \left(\frac{2X}3\right)^n$ : $\sup_{[0,1]}|P_n| = \left(\frac23\right)^n\to0$, mais $P_n(2) = \left(\frac43\right)^n\to+\infty$.` } },
  steps: [
    { q: 1, t: "Sens direct", h: R`<p>Continue en $0$ : $f(u_n)\to f(0) = 0$, et une suite convergente est bornée.</p>`, b: R`<p>Si $f$ est continue et $u_n\to0$, alors $f(u_n)\to f(0) = 0$, donc $(f(u_n))$ est bornée.</p>`, rappels: ["k-lin-cont"] },
    { q: 2, t: "Réciproque par contraposée", h: R`<p>Si $f$ n'est pas continue, elle est <span data-k="nonborne">non bornée sur la boule unité</span>, avec une marge : on prend des valeurs $\geqslant n^2$, puis on <span data-k="ech">divise par $n$</span>.</p>`, b: R`<p>Supposons $f$ non continue : il n'existe pas de $C$ avec $\|f(x)\|\leqslant C\|x\|$, donc <span data-k="nonborne">pour tout $n$, un $x_n$ avec $\|x_n\|\leqslant1$ et $\|f(x_n)\|\geqslant n^2$</span> (par homogénéité). Alors <span data-k="ech">$u_n = \frac{x_n}n\to0$ et $\|f(u_n)\|\geqslant n$</span> : la propriété 2 est fausse.</p><div class="sbox">$$f\ \text{continue}\iff\big(u_n\to0\Rightarrow(f(u_n))\ \text{bornée}\big).$$</div>`, rappels: ["k-contraposee"] },
    { q: 3, t: "Un exemple non continu", h: R`<p>Un polynôme petit sur $[0,1]$ mais grand en $2$ : <span data-k="pn">une puissance de $\frac{2X}3$</span>.</p>`, b: R`<p><span data-k="pn">$P_n = \left(\frac{2X}3\right)^n\to0$ pour la norme, mais $f(P_n) = \left(\frac43\right)^n$ n'est pas bornée</span>. Donc $f : P\mapsto P(2)$ n'est pas continue (en dimension infinie, une forme linéaire peut être discontinue).</p>` }
  ],
  ctx: { "k-lin-cont": R`<p>Continuité en $0$.</p>`, "k-contraposee": R`<p>On montre « non 1 $\Rightarrow$ non 2 ».</p>` },
  piege: R`Prendre $\|f(x_n)\|\geqslant n$ seulement : après division par $n$, on n'obtient qu'une suite $\geqslant1$, qui peut être bornée.`,
  methode: R`Linéarité : on peut toujours « renormaliser » une suite ; une marge $n^2$ permet de faire tendre vers $0$ tout en gardant l'image non bornée.`
},
{
  id: "kh-15-8", subj: "kholles", year: "mp", chap: 7, level: 2, time: "20 min",
  title: "Un fermé borné qui n'est pas compact",
  enonce: R`<p>Soit $E = \mathbb R[X]$, normé par $\|P\| = \max_k|a_k|$ si $P = \sum a_kX^k$.</p><ol><li>Vérifier que c'est une norme.</li><li>Montrer que la boule unité fermée $B = \{P : \|P\|\leqslant1\}$ est fermée et bornée.</li><li>Montrer que la suite $(X^n)$ n'a aucune sous-suite convergente. Conclure.</li><li>Pourquoi cela n'arrive-t-il pas dans $\mathbb R_d[X]$ ?</li></ol>`,
  decode: { donnees: [R`Une norme qui regarde le plus grand coefficient.`], but: R`Trouver un fermé borné non compact.`, cles: {
    dist: R`$\|X^n-X^m\| = 1$ pour $n\neq m$ : deux termes distincts sont toujours à distance $1$.`,
    cauchy: R`Une suite convergente a des termes de plus en plus proches : $\|u_p-u_q\|\leqslant\|u_p-\ell\|+\|\ell-u_q\|$.` } },
  steps: [
    { q: 1, t: "Une norme", h: R`<p>Séparation, homogénéité, inégalité triangulaire coefficient par coefficient.</p>`, b: R`<p>$\|P\| = 0\Rightarrow$ tous les coefficients nuls $\Rightarrow P = 0$. $\|\lambda P\| = |\lambda|\|P\|$. $|a_k+b_k|\leqslant|a_k|+|b_k|\leqslant\|P\|+\|Q\|$, puis on prend le max.</p>`, rappels: ["o-a-norme-def"] },
    { q: 2, t: "Fermée et bornée", h: R`<p>Bornée par définition. Fermée : une boule fermée l'est toujours (image réciproque de $[0,1]$ par la norme, continue).</p>`, b: R`<p>$B = \|\cdot\|^{-1}([0,1])$, image réciproque d'un fermé par une application $1$-lipschitzienne : fermée. Et bornée par $1$.</p>`, rappels: ["o-a-norme-cont"] },
    { q: 3, t: "Pas de sous-suite convergente", h: R`<p>Les $X^n$ sont dans $B$ et <span data-k="dist">tous à distance $1$ les uns des autres</span>. Une sous-suite convergente aurait des termes proches.</p>`, b: R`<p>Si $X^{\varphi(n)}\to\ell$, alors pour $n$ grand $\|X^{\varphi(n)}-\ell\|< \frac12$, et <span data-k="cauchy">$\|X^{\varphi(n)}-X^{\varphi(n+1)}\|< 1$</span>, alors que <span data-k="dist">cette distance vaut $1$</span>. Contradiction : $B$ n'est pas compacte.</p><div class="sbox">$$\text{fermé borné}\not\Rightarrow\text{compact en dimension infinie.}$$</div>`, rappels: ["k-compact-seq"] },
    { q: 4, t: "En dimension finie", h: R`<p>$\mathbb R_d[X]$ est de dimension finie : fermé borné y équivaut à compact.</p>`, b: R`<p>Dans $\mathbb R_d[X]$ (dimension $d+1$), $B\cap\mathbb R_d[X]$ est fermée bornée donc compacte, et la suite $(X^n)$ n'y reste pas (elle sort dès $n>d$). Tout le problème vient de la dimension infinie (théorème de Riesz).</p>`, rappels: ["k-riesz"] }
  ],
  ctx: { "o-a-norme-def": R`<p>Trois axiomes.</p>`, "o-a-norme-cont": R`<p>La norme est continue.</p>`, "k-compact-seq": R`<p>Une suite de $B$ sans valeur d'adhérence.</p>`, "k-riesz": R`<p>Boule unité compacte $\iff$ dimension finie.</p>` },
  piege: R`Appliquer « fermé borné $\Rightarrow$ compact » dans un espace de fonctions ou de polynômes : ce n'est vrai qu'en dimension finie.`,
  methode: R`Pour montrer qu'une partie n'est pas compacte : y trouver une suite dont les termes restent à distance fixe les uns des autres.`
},
{
  id: "kh-15-9", subj: "kholles", year: "mp", chap: 7, level: 4, time: "30 min",
  title: "Un théorème de point fixe sur un compact",
  enonce: R`<p>Soit $K$ une partie compacte non vide d'un espace normé et $f : K\to K$ telle que $\|f(x)-f(y)\|< \|x-y\|$ pour $x\neq y$.</p><ol><li>Montrer que $f$ est continue et que $g(x) = \|f(x)-x\|$ atteint son minimum en un $a\in K$.</li><li>Montrer que $f(a) = a$, et que ce point fixe est unique.</li><li>Soit $u_0\in K$, $u_{n+1} = f(u_n)$. Montrer que $d_n = \|u_n-a\|$ décroît vers une limite $\delta$, puis que $\delta = 0$.</li><li>Montrer que l'hypothèse de compacité est indispensable avec $f(x) = x+\frac1x$ sur $[1,+\infty[$.</li></ol>`,
  decode: { donnees: [R`$f$ rapproche strictement deux points distincts, mais sans constante $k< 1$.`], but: R`Point fixe unique et convergence des itérées.`, cles: {
    min: R`Si $g(a)>0$, alors $f(a)\neq a$ et $g(f(a)) = \|f(f(a))-f(a)\|< \|f(a)-a\| = g(a)$ : contradiction avec la minimalité.`,
    extr: R`Une sous-suite $u_{\varphi(n)}\to b$. Alors $\|b-a\| = \delta$, et $u_{\varphi(n)+1} = f(u_{\varphi(n)})\to f(b)$, d'où $\|f(b)-a\| = \delta$ aussi.`,
    contrex: R`$|f(x)-f(y)| = |x-y|\left(1-\frac1{xy}\right)< |x-y|$ pour $x\neq y$ dans $[1,+\infty[$, mais $f(x)>x$ : pas de point fixe.` } },
  steps: [
    { q: 1, t: "Continuité et minimum", h: R`<p>$f$ est $1$-lipschitzienne. $g$ est continue sur un compact : bornes atteintes.</p>`, b: R`<p>$\|f(x)-f(y)\|\leqslant\|x-y\|$ : $f$ est continue, $g$ aussi. Sur le compact $K$, $g$ atteint son minimum en un point $a$.</p>`, rappels: ["o-a-bornes"] },
    { q: 2, t: "Le point fixe", h: R`<p><span data-k="min">Si $a$ n'était pas fixe, $f(a)$ ferait mieux que $a$</span>.</p>`, b: R`<p><span data-k="min">Si $g(a)>0$, alors $g(f(a))< g(a)$</span> : absurde. Donc $f(a) = a$. Unicité : si $f(b) = b\neq a$, $\|a-b\| = \|f(a)-f(b)\|< \|a-b\|$, absurde.</p>`, rappels: ["absurde"] },
    { q: 3, t: "Convergence des itérées", h: R`<p>$d_{n+1} = \|f(u_n)-f(a)\|\leqslant d_n$ : décroissante, positive, converge. Pour montrer $\delta = 0$, on <span data-k="extr">extrait une sous-suite convergente</span> et on applique l'hypothèse stricte à sa limite.</p>`, b: R`<p>$(d_n)$ décroît vers $\delta\geqslant0$. Par compacité, <span data-k="extr">$u_{\varphi(n)}\to b$, avec $\|b-a\| = \delta$ et $\|f(b)-a\| = \lim d_{\varphi(n)+1} = \delta$</span>. Si $b\neq a$ : $\delta = \|f(b)-f(a)\|< \|b-a\| = \delta$, absurde. Donc $b = a$, $\delta = 0$.</p><div class="sbox">$$u_n\xrightarrow[n\to\infty]{}a,\ \text{l'unique point fixe de}\ f.$$</div>`, rappels: ["o-a-limite-monotone", "k-compact-seq"] },
    { q: 4, t: "Sans compacité", h: R`<p><span data-k="contrex">On calcule $f(x)-f(y)$</span> : le facteur $1-\frac1{xy}$ est $< 1$ mais pas uniformément.</p>`, b: R`<p>$f$ va de $[1,+\infty[$ dans lui-même, et <span data-k="contrex">$|f(x)-f(y)| = |x-y|\left(1-\frac1{xy}\right)< |x-y|$</span>. Mais $f(x) = x+\frac1x>x$ : aucun point fixe, et $u_n\to+\infty$. $[1,+\infty[$ est fermé mais non borné.</p>` }
  ],
  ctx: { "o-a-bornes": R`<p>$g$ continue sur le compact $K$.</p>`, "absurde": R`<p>On suppose $g(a)>0$, puis deux points fixes.</p>`, "o-a-limite-monotone": R`<p>$(d_n)$ décroissante minorée.</p>`, "k-compact-seq": R`<p>Extraction dans $K$.</p>` },
  piege: R`Appliquer le théorème du point fixe de Banach : il faut une constante $k< 1$ uniforme, qu'on n'a pas ici. C'est la compacité qui remplace cette hypothèse.`,
  methode: R`Sur un compact, pour montrer qu'une quantité atteint $0$ : prendre son minimum et montrer qu'on peut faire mieux s'il n'est pas nul.`
},
{
  id: "kh-15-10", subj: "kholles", year: "mp", chap: 7, level: 3, time: "25 min",
  title: "Adhérence des suites à support fini",
  enonce: R`<p>Soit $E$ l'espace des suites réelles convergentes, normé par $\|u\|_\infty = \sup_n|u_n|$, et $A$ l'ensemble des suites nulles à partir d'un certain rang.</p><ol><li>Montrer que $L : u\mapsto\lim u_n$ est une forme linéaire continue sur $E$.</li><li>En déduire que $\overline A\subset c_0 = \{u : u_n\to0\}$.</li><li>Montrer que $c_0\subset\overline A$ en tronquant les suites.</li><li>Montrer que l'intérieur de $A$ est vide.</li></ol>`,
  decode: { donnees: [R`$A\subset c_0\subset E$.`], but: R`Calculer l'adhérence et l'intérieur de $A$.`, cles: {
    lip: R`$|\lim u_n-\lim v_n| = \lim|u_n-v_n|\leqslant\|u-v\|_\infty$ : $L$ est $1$-lipschitzienne.`,
    tronc: R`$u^{(N)} = (u_0,\dots,u_N,0,0,\dots)\in A$ et $\|u-u^{(N)}\|_\infty = \sup_{n>N}|u_n|\to0$ si $u\in c_0$.`,
    pert: R`$a+\frac r2(1,1,1,\dots)$ est à distance $\frac r2$ de $a$ mais n'est pas à support fini.` } },
  steps: [
    { q: 1, t: "La limite est continue", h: R`<p>Linéarité des limites ; <span data-k="lip">majoration par la norme infinie</span>.</p>`, b: R`<p>$L$ est linéaire, et <span data-k="lip">$|L(u)|\leqslant\|u\|_\infty$</span> : $L$ est continue.</p>`, rappels: ["k-lin-cont"] },
    { q: 2, t: "L'adhérence est dans c₀", h: R`<p>$c_0 = L^{-1}(\{0\})$ est fermé et contient $A$.</p>`, b: R`<p>$c_0 = \ker L$ est fermé (image réciproque de $\{0\}$ par $L$ continue) et $A\subset c_0$. Donc $\overline A\subset c_0$.</p>`, rappels: ["k-ferme-seq"] },
    { q: 3, t: "Tronquer", h: R`<p>On approche $u\in c_0$ par <span data-k="tronc">ses tronquées</span> : l'erreur est la queue de la suite.</p>`, b: R`<p>Pour $u\in c_0$, <span data-k="tronc">$\|u-u^{(N)}\|_\infty = \sup_{n>N}|u_n|\to0$</span> car $u_n\to0$. Donc $u\in\overline A$.</p><div class="sbox">$$\overline A = c_0.$$</div><p>Contre-exemple : la suite constante $1$ n'est pas dans $\overline A$ (sa limite vaut $1$, et toute suite de $A$ est à distance $\geqslant1$).</p>`, rappels: ["o-a-adh-seq"] },
    { q: 4, t: "Intérieur vide", h: R`<p>Une boule autour d'un élément de $A$ contient <span data-k="pert">une suite qui ne s'annule jamais</span>.</p>`, b: R`<p>Soit $a\in A$ et $r>0$. <span data-k="pert">$b = a+\frac r2(1,1,\dots)$</span> est dans $B(a,r)$, convergente, mais ses termes valent $\frac r2$ à partir d'un rang : $b\notin A$. Aucune boule n'est incluse dans $A$ : $\mathring A = \emptyset$.</p>` }
  ],
  ctx: { "k-lin-cont": R`<p>$|L(u)|\leqslant\|u\|_\infty$.</p>`, "k-ferme-seq": R`<p>$c_0 = L^{-1}(\{0\})$.</p>`, "o-a-adh-seq": R`<p>$u^{(N)}\in A$ tend vers $u$.</p>` },
  piege: R`Croire que l'adhérence de $A$ est $E$ tout entier : les suites qui tendent vers une limite non nulle restent loin de $A$.`,
  methode: R`Adhérence : un fermé qui contient $A$ (inclusion) et une approximation explicite (inclusion réciproque).`
},
{
  id: "kh-15-12", subj: "kholles", year: "mp", chap: 7, level: 4, time: "30 min",
  title: "Le noyau d'une forme linéaire discontinue est dense",
  enonce: R`<p>Soit $E$ un espace normé (de dimension infinie) et $\varphi$ une forme linéaire non nulle sur $E$.</p><ol><li>Si $\varphi$ est continue, montrer que $\ker\varphi$ est fermé et n'est pas dense.</li><li>Si $\varphi$ n'est pas continue, montrer qu'il existe $(x_n)$ avec $\|x_n\|\leqslant1$ et $|\varphi(x_n)|\geqslant n$.</li><li>En déduire que $\ker\varphi$ est dense.</li><li>Exemple : $E = \mathbb R[X]$, $\|P\| = \sup_{[0,1]}|P|$, $\varphi(P) = P(2)$. Que dire des polynômes qui s'annulent en $2$ ?</li></ol>`,
  decode: { donnees: [R`$\ker\varphi$ est un hyperplan : $E = \ker\varphi\oplus\mathbb Rx_0$ pour $\varphi(x_0)\neq0$.`], but: R`Montrer qu'un hyperplan est soit fermé, soit dense.`, cles: {
    corr: R`$y_n = x-\frac{\varphi(x)}{\varphi(x_n)}x_n$ : on corrige $x$ par un petit multiple de $x_n$ pour annuler $\varphi$.`,
    petit: R`$\|y_n-x\| = \frac{|\varphi(x)|}{|\varphi(x_n)|}\|x_n\|\leqslant\frac{|\varphi(x)|}{n}\to0$.` } },
  steps: [
    { q: 1, t: "Cas continu", h: R`<p>Image réciproque de $\{0\}$. Un fermé dense serait $E$ entier, or $\varphi\neq0$.</p>`, b: R`<p>$\ker\varphi = \varphi^{-1}(\{0\})$ est fermé. S'il était dense, il serait égal à son adhérence $E$, donc $\varphi = 0$ : exclu.</p>`, rappels: ["k-ferme-seq"] },
    { q: 2, t: "Une suite qui fait exploser φ", h: R`<p>Non continue $\iff$ non bornée sur la boule unité.</p>`, b: R`<p>Si $\varphi$ était bornée par $C$ sur la boule unité, on aurait $|\varphi(x)|\leqslant C\|x\|$ et $\varphi$ serait continue. Donc pour tout $n$, il existe $x_n$, $\|x_n\|\leqslant1$, $|\varphi(x_n)|\geqslant n$.</p>`, rappels: ["k-lin-cont"] },
    { q: 3, t: "Densité", h: R`<p>On <span data-k="corr">corrige $x$ par un multiple de $x_n$</span> pour tomber dans le noyau ; la correction est <span data-k="petit">petite</span> car $\varphi(x_n)$ est grand.</p>`, b: R`<p>Soit $x\in E$. <span data-k="corr">$y_n = x-\frac{\varphi(x)}{\varphi(x_n)}x_n$</span> vérifie $\varphi(y_n) = 0$ et <span data-k="petit">$\|y_n-x\|\leqslant\frac{|\varphi(x)|}n\to0$</span>.</p><div class="sbox">$$\varphi\ \text{non continue}\ \Longrightarrow\ \overline{\ker\varphi} = E.$$</div><p>Un hyperplan est donc fermé ou dense, sans intermédiaire.</p>`, rappels: ["o-a-adh-seq"] },
    { q: 4, t: "L'exemple", h: R`<p>$\varphi(P) = P(2)$ n'est pas continue pour cette norme (exercice précédent avec $(\frac{2X}3)^n$).</p>`, b: R`<p>$\varphi$ n'est pas continue, donc $\{P : P(2) = 0\}$ est dense : toute fonction polynomiale (et même, par Weierstrass, toute fonction continue sur $[0,1]$) est limite uniforme sur $[0,1]$ de polynômes qui s'annulent en $2$. Surprenant mais logique : la contrainte porte sur un point hors de $[0,1]$.</p>` }
  ],
  ctx: { "k-ferme-seq": R`<p>$\ker\varphi = \varphi^{-1}(\{0\})$.</p>`, "k-lin-cont": R`<p>Continue $\iff$ bornée sur la boule unité.</p>`, "o-a-adh-seq": R`<p>$y_n\in\ker\varphi$, $y_n\to x$.</p>` },
  piege: R`Chercher une forme linéaire discontinue en dimension finie : il n'y en a pas, tout est continu. Il faut un espace de dimension infinie.`,
  methode: R`Approcher $x$ dans un noyau : corriger par un vecteur sur lequel la forme est très grande.`
},
{
  id: "kh-16-1", subj: "kholles", year: "mp", chap: 8, level: 3, time: "30 min",
  title: "L'inégalité de Hölder",
  enonce: R`<ol><li>Soient $\alpha,\beta\geqslant0$ avec $\alpha+\beta = 1$, et $u,v>0$. Montrer que $u^\alpha v^\beta\leqslant\alpha u+\beta v$.</li><li>Soient $p,q>1$ avec $\frac1p+\frac1q = 1$, et $a,b\in(\mathbb R_+)^n$. Montrer que$$\sum_ia_ib_i\leqslant\Big(\sum_ia_i^p\Big)^{1/p}\Big(\sum_ib_i^q\Big)^{1/q}.$$</li><li>Même inégalité pour $f,g$ continues positives sur $[a,b]$ avec des intégrales.</li><li>Retrouver Cauchy-Schwarz, et appliquer avec $p = 3$ à $\sum_{k=1}^nk$.</li></ol>`,
  decode: { donnees: [R`$\ln$ est concave.`], but: R`Établir une inégalité de produit à partir d'une inégalité de convexité.`, cles: {
    young: R`Avec $\alpha = \frac1p$, $\beta = \frac1q$ : $xy\leqslant\frac{x^p}p+\frac{y^q}q$ (inégalité de Young), en posant $u = x^p$, $v = y^q$.`,
    norm: R`On normalise : $x_i = \frac{a_i}{A}$, $y_i = \frac{b_i}B$ avec $A = (\sum a_i^p)^{1/p}$, $B = (\sum b_i^q)^{1/q}$, de sorte que $\sum x_i^p = \sum y_i^q = 1$.` } },
  steps: [
    { q: 1, t: "Concavité du logarithme", h: R`<p>On passe au logarithme (croissant) : l'inégalité devient exactement la concavité de $\ln$.</p>`, b: R`<p>$\ln(u^\alpha v^\beta) = \alpha\ln u+\beta\ln v\leqslant\ln(\alpha u+\beta v)$ par concavité. Comme $\exp$ est croissante :</p><div class="sbox">$$u^\alpha v^\beta\leqslant\alpha u+\beta v.$$</div><p>C'est l'inégalité arithmético-géométrique pondérée ($\alpha = \beta = \frac12$ : $\sqrt{uv}\leqslant\frac{u+v}2$).</p>`, rappels: ["k-concave-ln"] },
    { q: 2, t: "Young puis normalisation", h: R`<p>On en tire <span data-k="young">$xy\leqslant\frac{x^p}p+\frac{y^q}q$</span>. Pour la somme, on <span data-k="norm">normalise</span> pour que les membres de droite valent $1$.</p>`, b: R`<p>Si $A = 0$ ou $B = 0$, tout est nul. Sinon, avec <span data-k="norm">$x_i = a_i/A$, $y_i = b_i/B$</span> et <span data-k="young">Young</span> :</p>$$\sum_ix_iy_i\leqslant\frac1p\sum x_i^p+\frac1q\sum y_i^q = \frac1p+\frac1q = 1.$$<p>En multipliant par $AB$ :</p><div class="sbox">$$\sum a_ib_i\leqslant\Big(\sum a_i^p\Big)^{1/p}\Big(\sum b_i^q\Big)^{1/q}.$$</div>` },
    { q: 3, t: "Version intégrale", h: R`<p>Même normalisation, puis on intègre Young point par point.</p>`, b: R`<p>Avec $A = (\int f^p)^{1/p}$, $B = (\int g^q)^{1/q}$ supposés $>0$ : $\frac{f(x)g(x)}{AB}\leqslant\frac{f(x)^p}{pA^p}+\frac{g(x)^q}{qB^q}$, et en intégrant, $\frac{\int fg}{AB}\leqslant\frac1p+\frac1q = 1$. (Si $A = 0$, $f = 0$ car continue positive.)</p><div class="sbox">$$\int_a^bfg\leqslant\Big(\int_a^bf^p\Big)^{1/p}\Big(\int_a^bg^q\Big)^{1/q}.$$</div>`, rappels: ["o-a-int-nulle"] },
    { q: 4, t: "Cas particuliers", h: R`<p>$p = q = 2$ : Cauchy-Schwarz. Pour $p = 3$, $q = \frac32$ : on écrit $k = k\cdot1$.</p>`, b: R`<p>$p = q = 2$ donne $\sum a_ib_i\leqslant\sqrt{\sum a_i^2}\sqrt{\sum b_i^2}$. Avec $p = 3$, $a_k = k$, $b_k = 1$ : $\sum_{k=1}^nk\leqslant\left(\sum k^3\right)^{1/3}n^{2/3}$. Vérification $n = 3$ : $6\leqslant36^{1/3}\cdot9^{1/3} = 324^{1/3}\approx6{,}87$.</p>`, rappels: ["o-b-cs"] }
  ],
  ctx: { "k-concave-ln": R`<p>Avec les poids $\alpha$, $\beta$.</p>`, "o-a-int-nulle": R`<p>Si $\int f^p = 0$, alors $f = 0$.</p>`, "o-b-cs": R`<p>Cas $p = q = 2$.</p>` },
  piege: R`Oublier de normaliser : appliquer Young directement donne $\sum a_ib_i\leqslant\frac1p\sum a_i^p+\frac1q\sum b_i^q$, inégalité vraie mais pas homogène, donc plus faible.`,
  methode: R`Inégalité homogène : la prouver quand les normes valent $1$, puis normaliser.`
}
]);
})();

/* ---------- MP · 9. Endomorphismes des espaces euclidiens (1) ---------- */
LEMME.rappels({
  "k-spectral-mat": { t: "Théorème spectral (forme matricielle)", b: R`<div class="sbox">$$A\in\mathcal S_n(\mathbb R)\ \Longrightarrow\ A = P\,\operatorname{diag}(\lambda_1,\dots,\lambda_n)\,P^\top,\quad P\in O_n(\mathbb R).$$</div><p>Les colonnes de $P$ forment une base orthonormée de vecteurs propres.</p>` },
  "k-trace-cyc": { t: "Trace d'un produit", b: R`<div class="sbox">$$\operatorname{tr}(AB) = \operatorname{tr}(BA),\qquad\operatorname{tr}(XX^\top M) = X^\top MX.$$</div>` },
  "k-quad-diag": { t: "Forme quadratique dans une base propre", b: R`<p>Si $A = PDP^\top$ et $Y = P^\top X$ :</p><div class="sbox">$$X^\top AX = Y^\top DY = \sum_i\lambda_iy_i^2,\qquad\|Y\| = \|X\|.$$</div>` },
  "k-interp-poly": { t: "Un polynôme qui prend des valeurs données", b: R`<p>Par interpolation de Lagrange, il existe un polynôme $Q$ avec $Q(\lambda_i) = \mu_i$ pour des $\lambda_i$ distincts. Si $A = P\operatorname{diag}(\lambda_i)P^{-1}$ :</p><div class="sbox">$$Q(A) = P\operatorname{diag}(\mu_i)P^{-1}.$$</div>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kh-18-4", subj: "kholles", year: "mp", chap: 9, level: 2, time: "20 min",
  title: "Matrices symétriques positives et valeurs propres",
  enonce: R`<p>Soit $A\in\mathcal S_n(\mathbb R)$. $A$ est positive si $X^\top AX\geqslant0$ pour tout $X$, définie positive si $X^\top AX>0$ pour tout $X\neq0$.</p><ol><li>Montrer que $A$ est positive si et seulement si $\operatorname{sp}(A)\subset\mathbb R_+$.</li><li>Montrer que $A$ est définie positive si et seulement si $\operatorname{sp}(A)\subset\mathbb R_+^\ast$.</li><li>Montrer que pour $A$ définie positive, $\lambda_{\min}\|X\|^2\leqslant X^\top AX\leqslant\lambda_{\max}\|X\|^2$.</li><li>Étudier $\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ et $\begin{pmatrix}1&2\\2&1\end{pmatrix}$.</li></ol>`,
  decode: { donnees: [R`Théorème spectral : $A = PDP^\top$, $P$ orthogonale.`], but: R`Lire la positivité sur les valeurs propres.`, cles: {
    sens1: R`Si $AX = \lambda X$, $X\neq0$ : $X^\top AX = \lambda\|X\|^2$, donc $\lambda$ a le signe de $X^\top AX$.`,
    somme: R`Dans la base propre, $X^\top AX = \sum\lambda_iy_i^2$ : une somme de termes $\geqslant0$ si tous les $\lambda_i\geqslant0$.` } },
  steps: [
    { q: 1, t: "Positive ⇒ valeurs propres ≥ 0", h: R`<p>On teste la positivité sur <span data-k="sens1">un vecteur propre</span>.</p>`, b: R`<p><span data-k="sens1">$0\leqslant X^\top AX = \lambda\|X\|^2$</span>, donc $\lambda\geqslant0$.</p>` },
    { q: 1, t: "Réciproque", h: R`<p>On diagonalise en base orthonormée : <span data-k="somme">la forme devient une somme de carrés pondérés</span>.</p>`, b: R`<p>$A = PDP^\top$, $Y = P^\top X$ : <span data-k="somme">$X^\top AX = \sum\lambda_iy_i^2\geqslant0$</span>.</p><div class="sbox">$$A\in\mathcal S_n^+\iff\operatorname{sp}(A)\subset\mathbb R_+.$$</div>`, rappels: ["k-spectral-mat", "k-quad-diag"] },
    { q: 2, t: "Le cas défini", h: R`<p>Même calcul avec des inégalités strictes ; $X\neq0\iff Y\neq0$ car $P$ est inversible.</p>`, b: R`<p>Si $\lambda_i>0$ et $X\neq0$, alors $Y\neq0$ et $\sum\lambda_iy_i^2>0$. Réciproquement $\lambda\|X\|^2>0$ pour un vecteur propre. </p><div class="sbox">$$A\in\mathcal S_n^{++}\iff\operatorname{sp}(A)\subset\mathbb R_+^\ast.$$</div>` },
    { q: 3, t: "Encadrement de Rayleigh", h: R`<p>On encadre chaque $\lambda_i$ par $\lambda_{\min}$ et $\lambda_{\max}$ dans la somme, et $\|Y\| = \|X\|$.</p>`, b: R`<p>$\lambda_{\min}\sum y_i^2\leqslant\sum\lambda_iy_i^2\leqslant\lambda_{\max}\sum y_i^2$ et $\sum y_i^2 = \|X\|^2$ ($P$ orthogonale). Les bornes sont atteintes sur les vecteurs propres.</p>` },
    { q: 4, t: "Deux exemples", h: R`<p>Trace et déterminant donnent les valeurs propres en dimension $2$.</p>`, b: R`<ul><li>$\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$ : valeurs propres $1$ et $3$, définie positive. Directement : $2x^2-2xy+2y^2 = x^2+y^2+(x-y)^2$.</li><li>$\begin{pmatrix}1&2\\2&1\end{pmatrix}$ : valeurs propres $3$ et $-1$, pas positive ; avec $X = (1,-1)$, $X^\top AX = -2< 0$. Coefficients positifs ne veut pas dire matrice positive !</li></ul>` }
  ],
  ctx: { "k-spectral-mat": R`<p>$A$ symétrique réelle.</p>`, "k-quad-diag": R`<p>$X^\top AX = \sum\lambda_iy_i^2$.</p>` },
  piege: R`Confondre « matrice positive » et « coefficients positifs » : le deuxième exemple a des coefficients positifs et une valeur propre négative.`,
  methode: R`Positivité d'une matrice symétrique : passer en base orthonormée de vecteurs propres, la forme devient $\sum\lambda_iy_i^2$.`
},
{
  id: "kh-18-3", subj: "kholles", year: "mp", chap: 9, level: 3, time: "25 min",
  title: "Caractériser la positivité par la trace",
  enonce: R`<p>Soit $A\in\mathcal S_n(\mathbb R)$.</p><ol><li>Pour $X\in\mathbb R^n$, montrer que $XX^\top\in\mathcal S_n^+$ et que $\operatorname{tr}(AXX^\top) = X^\top AX$.</li><li>En déduire : si $\operatorname{tr}(AB)\geqslant0$ pour toute $B\in\mathcal S_n^+$, alors $A\in\mathcal S_n^+$.</li><li>Réciproquement, soit $A,B\in\mathcal S_n^+$. En écrivant $B = \sum_i\mu_iE_iE_i^\top$ (théorème spectral), montrer que $\operatorname{tr}(AB)\geqslant0$.</li><li>Montrer que $\operatorname{tr}(AB)$ peut être négatif si $A$ est seulement symétrique.</li></ol>`,
  decode: { donnees: [R`$\operatorname{tr}(MN) = \operatorname{tr}(NM)$.`], but: R`$A\in\mathcal S_n^+\iff\operatorname{tr}(AB)\geqslant0$ pour toute $B\in\mathcal S_n^+$.`, cles: {
    rang1: R`$Y^\top(XX^\top)Y = (X^\top Y)^2\geqslant0$ : $XX^\top$ est symétrique positive, de rang $\leqslant1$.`,
    dec: R`$B = PDP^\top = \sum_i\mu_iE_iE_i^\top$ où $E_i$ est la $i$-ième colonne de $P$ et $\mu_i\geqslant0$.` } },
  steps: [
    { q: 1, t: "Matrices de rang 1", h: R`<p><span data-k="rang1">On calcule la forme quadratique de $XX^\top$</span>, et on utilise $\operatorname{tr}(MN) = \operatorname{tr}(NM)$.</p>`, b: R`<p>$(XX^\top)^\top = XX^\top$ et <span data-k="rang1">$Y^\top XX^\top Y = (X^\top Y)^2\geqslant0$</span>. Puis $\operatorname{tr}(AXX^\top) = \operatorname{tr}(X^\top AX) = X^\top AX$ (trace d'un nombre).</p>`, rappels: ["k-trace-cyc"] },
    { q: 2, t: "Sens réciproque", h: R`<p>On teste l'hypothèse avec les $B = XX^\top$.</p>`, b: R`<p>Avec $B = XX^\top\in\mathcal S_n^+$ : $X^\top AX = \operatorname{tr}(AXX^\top)\geqslant0$ pour tout $X$, donc $A\in\mathcal S_n^+$.</p>` },
    { q: 3, t: "Sens direct", h: R`<p>On <span data-k="dec">décompose $B$ en somme de matrices de rang 1</span> à coefficients positifs, puis on utilise la question 1.</p>`, b: R`<p><span data-k="dec">$B = \sum\mu_iE_iE_i^\top$ avec $\mu_i\geqslant0$</span>. Par linéarité de la trace :</p>$$\operatorname{tr}(AB) = \sum_i\mu_i\operatorname{tr}(AE_iE_i^\top) = \sum_i\mu_iE_i^\top AE_i\geqslant0.$$<div class="sbox">$$A\in\mathcal S_n^+\iff\forall B\in\mathcal S_n^+,\ \operatorname{tr}(AB)\geqslant0.$$</div>`, rappels: ["k-spectral-mat"] },
    { q: 4, t: "Contre-exemple", h: R`<p>Si $A$ a une valeur propre négative, on prend pour $B$ le projecteur sur le vecteur propre correspondant.</p>`, b: R`<p>$A = \operatorname{diag}(1,-1)$, $B = \operatorname{diag}(0,1)\in\mathcal S_2^+$ : $\operatorname{tr}(AB) = -1< 0$.</p>` }
  ],
  ctx: { "k-trace-cyc": R`<p>$\operatorname{tr}(AXX^\top) = \operatorname{tr}(X^\top AX)$.</p>`, "k-spectral-mat": R`<p>Pour décomposer $B\in\mathcal S_n^+$.</p>` },
  piege: R`Croire que le produit $AB$ de deux symétriques positives est symétrique positif : il n'est même pas symétrique en général. Seule sa trace est positive.`,
  methode: R`Les $XX^\top$ engendrent le cône $\mathcal S_n^+$ : tester une propriété linéaire sur ces matrices de rang $1$.`
},
{
  id: "kh-18-5", subj: "kholles", year: "mp", chap: 9, level: 4, time: "35 min",
  title: "Racines p-ièmes et produit de deux symétriques",
  enonce: R`<p>Soient $A\in\mathcal S_n^+(\mathbb R)$ et $B\in\mathcal S_n(\mathbb R)$.</p><ol><li>Montrer qu'il existe $R\in\mathcal S_n^+$ avec $R^2 = A$, définie positive si $A$ l'est. Généraliser à $R^p = A$ ($p\geqslant1$).</li><li>Si $A\in\mathcal S_n^{++}$, montrer que $AB$ est semblable à $RBR$, et en déduire que $AB$ est diagonalisable dans $\mathcal M_n(\mathbb R)$.</li><li>Montrer que les valeurs propres de $AB$ sont réelles même si $A$ est seulement positive.</li><li>Trouver $A\in\mathcal S_2^+$ et $B\in\mathcal S_2$ avec $AB$ non diagonalisable.</li></ol>`,
  decode: { donnees: [R`$A = P\operatorname{diag}(\lambda_i)P^\top$ avec $\lambda_i\geqslant0$.`], but: R`Construire des racines, puis étudier $AB$.`, cles: {
    racine: R`On prend la racine de chaque valeur propre : $R = P\operatorname{diag}(\sqrt{\lambda_i})P^\top$.`,
    conj: R`$R^{-1}(AB)R = R^{-1}R^2BR = RBR$, et $RBR$ est symétrique.`,
    chi: R`$\chi_{AB} = \chi_{R(RB)} = \chi_{(RB)R} = \chi_{RBR}$ (exercice $\chi_{AB} = \chi_{BA}$), et $RBR$ est symétrique.` } },
  steps: [
    { q: 1, t: "Racine carrée, racine p-ième", h: R`<p><span data-k="racine">On prend la racine de chaque valeur propre</span> dans la diagonalisation orthogonale.</p>`, b: R`<p><span data-k="racine">$R = P\operatorname{diag}(\sqrt{\lambda_i})P^\top$</span> est symétrique, de valeurs propres $\sqrt{\lambda_i}\geqslant0$ (donc positive), et $R^2 = P\operatorname{diag}(\lambda_i)P^\top = A$. Si les $\lambda_i>0$, les $\sqrt{\lambda_i}>0$. De même $R_p = P\operatorname{diag}(\lambda_i^{1/p})P^\top$ vérifie $R_p^p = A$.</p>`, rappels: ["k-spectral-mat", "o-b-sym-pos"] },
    { q: 2, t: "AB diagonalisable si A définie positive", h: R`<p>$R$ est inversible : <span data-k="conj">on conjugue $AB$ par $R$</span> et on obtient une matrice symétrique.</p>`, b: R`<p><span data-k="conj">$R^{-1}ABR = RBR$</span>, symétrique réelle, donc diagonalisable (théorème spectral). $AB$ lui est semblable :</p><div class="sbox">$$A\in\mathcal S_n^{++},\ B\in\mathcal S_n\ \Longrightarrow\ AB\ \text{diagonalisable sur}\ \mathbb R.$$</div>`, rappels: ["k-semblables"] },
    { q: 3, t: "Valeurs propres réelles en général", h: R`<p>$R$ n'est plus inversible, mais <span data-k="chi">$AB$ et $RBR$ ont le même polynôme caractéristique</span>.</p>`, b: R`<p><span data-k="chi">$\chi_{AB} = \chi_{R\cdot RB} = \chi_{RB\cdot R}$</span>, et $RBR$ est symétrique réelle : son polynôme caractéristique est scindé sur $\mathbb R$. Donc les valeurs propres de $AB$ sont réelles.</p>` },
    { q: 4, t: "Contre-exemple", h: R`<p>On cherche $AB$ nilpotent non nul, avec $A$ positive non inversible.</p>`, b: R`<p>$A = \begin{pmatrix}1&0\\0&0\end{pmatrix}\in\mathcal S_2^+$, $B = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ : $AB = \begin{pmatrix}0&1\\0&0\end{pmatrix}$, nilpotente non nulle, donc non diagonalisable. Valeurs propres réelles ($0$), mais pas diagonalisable : la question 2 a besoin de « définie ».</p>` }
  ],
  ctx: { "k-spectral-mat": R`<p>$A = P\operatorname{diag}(\lambda_i)P^\top$.</p>`, "o-b-sym-pos": R`<p>Valeurs propres $\geqslant0$.</p>`, "k-semblables": R`<p>$AB = R(RBR)R^{-1}$.</p>` },
  piege: R`Croire que $AB$ est symétrique : ce n'est pas le cas, mais il est semblable à une matrice symétrique quand $A$ est définie positive.`,
  methode: R`Produit d'une symétrique définie positive et d'une symétrique : conjuguer par la racine carrée pour symétriser.`
},
{
  id: "kh-18-6", subj: "kholles", year: "mp", chap: 9, level: 4, time: "35 min",
  title: "Unicité de la racine carrée d'un auto-adjoint positif",
  enonce: R`<p>Soit $E$ euclidien et $u\in\mathcal S^+(E)$ (auto-adjoint, positif), de valeurs propres distinctes $\lambda_1,\dots,\lambda_r\geqslant0$.</p><ol><li>Montrer qu'il existe $h\in\mathcal S^+(E)$ avec $h^2 = u$.</li><li>Montrer qu'il existe un polynôme $Q$ avec $Q(\lambda_i) = \sqrt{\lambda_i}$, et que $h = Q(u)$.</li><li>Soit $h'\in\mathcal S^+(E)$ avec $h'^2 = u$. Montrer que $h'$ commute avec $u$, puis stabilise chaque $\ker(u-\lambda_i\mathrm{Id})$.</li><li>Montrer que $h'$ induit sur $\ker(u-\lambda_i\mathrm{Id})$ un auto-adjoint positif de carré $\lambda_i\mathrm{Id}$, et conclure $h' = h$.</li></ol>`,
  decode: { donnees: [R`$E = \bigoplus_i\ker(u-\lambda_i\mathrm{Id})$, somme orthogonale.`], but: R`Existence et unicité de la racine carrée positive.`, cles: {
    lag: R`Les $\lambda_i$ sont distincts : un polynôme d'interpolation $Q$ avec $Q(\lambda_i) = \sqrt{\lambda_i}$ existe.`,
    stab: R`$h'u = h'^3 = uh'$ : $h'$ commute avec $u$, donc stabilise ses sous-espaces propres.`,
    rest: R`Sur $E_i$, $h'_i$ est auto-adjoint positif avec $h_i'^2 = \lambda_i\mathrm{Id}$ : ses valeurs propres $\mu\geqslant0$ vérifient $\mu^2 = \lambda_i$, donc $\mu = \sqrt{\lambda_i}$, et $h'_i$ diagonalisable a une seule valeur propre : $h'_i = \sqrt{\lambda_i}\mathrm{Id}$.` } },
  steps: [
    { q: 1, t: "Existence", h: R`<p>Dans une base orthonormée propre, on prend la racine des valeurs propres.</p>`, b: R`<p>$h$ défini par $h = \sqrt{\lambda_i}\mathrm{Id}$ sur chaque $E_i = \ker(u-\lambda_i\mathrm{Id})$ : auto-adjoint (diagonal en base orthonormée), positif, et $h^2 = u$.</p>`, rappels: ["o-b-spectral"] },
    { q: 2, t: "h est un polynôme en u", h: R`<p><span data-k="lag">Interpolation de Lagrange</span> sur les valeurs propres distinctes.</p>`, b: R`<p><span data-k="lag">$Q$ avec $Q(\lambda_i) = \sqrt{\lambda_i}$</span>. Sur $E_i$, $Q(u) = Q(\lambda_i)\mathrm{Id} = \sqrt{\lambda_i}\mathrm{Id} = h$. Donc $h = Q(u)$.</p>`, rappels: ["k-interp-poly"] },
    { q: 3, t: "Toute racine commute avec u", h: R`<p><span data-k="stab">$h'$ commute avec son propre carré</span>.</p>`, b: R`<p><span data-k="stab">$h'u = h'h'^2 = h'^2h' = uh'$</span>. Donc chaque $E_i$ est stable par $h'$.</p>`, rappels: ["k-commute-stable"] },
    { q: 4, t: "Unicité", h: R`<p>Sur chaque $E_i$, <span data-k="rest">$h'$ est forcé de valoir $\sqrt{\lambda_i}\mathrm{Id}$</span>.</p>`, b: R`<p>L'induit $h'_i$ sur $E_i$ est auto-adjoint positif (restriction d'un tel endomorphisme à un sous-espace stable) avec $h_i'^2 = \lambda_i\mathrm{Id}$. <span data-k="rest">Ses valeurs propres valent $\sqrt{\lambda_i}$, et il est diagonalisable : $h'_i = \sqrt{\lambda_i}\mathrm{Id}$</span>. Donc $h' = h$.</p><div class="sbox">$$\exists!\,h\in\mathcal S^+(E),\ h^2 = u,\qquad h = Q(u).$$</div><p>Sans « positive », c'est faux : $-h$ est aussi une racine, et $\operatorname{diag}(1,-1)$ est une racine symétrique de $I_2$.</p>`, rappels: ["k-stable-induit"] }
  ],
  ctx: { "o-b-spectral": R`<p>Base orthonormée propre de $u$.</p>`, "k-interp-poly": R`<p>Points $\lambda_i$, valeurs $\sqrt{\lambda_i}$.</p>`, "k-commute-stable": R`<p>$h'$ commute avec $u$.</p>`, "k-stable-induit": R`<p>$h'_i$ reste diagonalisable.</p>` },
  piege: R`Oublier « positive » dans l'unicité : $I_2$ a une infinité de racines carrées symétriques (toutes les symétries orthogonales).`,
  methode: R`Unicité d'une racine : montrer qu'elle commute avec la matrice, puis travailler sur chaque sous-espace propre.`
},
{
  id: "kh-18-7", subj: "kholles", year: "mp", chap: 9, level: 4, time: "30 min",
  title: "Les matrices de Hilbert sont définies positives",
  enonce: R`<p>Soit $H_n = \left(\dfrac1{i+j-1}\right)_{1\leqslant i,j\leqslant n}$.</p><ol><li>Sur $\mathbb R_{n-1}[X]$, on pose $\langle P,Q\rangle = \int_0^1PQ$. Montrer que $H_n$ est la matrice de ce produit scalaire dans la base $(1,X,\dots,X^{n-1})$.</li><li>En déduire que $H_n$ est symétrique définie positive.</li><li>Par le déterminant de Cauchy, montrer que $\det H_n = \dfrac{c_n^4}{c_{2n}}$ avec $c_n = \prod_{k=1}^{n-1}k!$.</li><li>Vérifier pour $n = 2$ et $n = 3$.</li></ol>`,
  decode: { donnees: [R`$\int_0^1t^{i-1}t^{j-1}dt = \frac1{i+j-1}$.`], but: R`Positivité et déterminant d'une matrice célèbre.`, cles: {
    quad: R`$X^\top H_nX = \sum_{i,j}\frac{x_ix_j}{i+j-1} = \int_0^1\Big(\sum_ix_it^{i-1}\Big)^2dt$.`,
    cauchy: R`$H_n$ est la matrice de Cauchy $\frac1{a_i+b_j}$ avec $a_i = i$, $b_j = j-1$.`,
    prod: R`$\prod_{i< j}(j-i) = \prod_{j=2}^n(j-1)! = c_n$, et $\prod_{i,j}(i+j-1) = \prod_{i=1}^n\frac{(i+n-1)!}{(i-1)!} = \frac{c_{2n}}{c_n^2}$.` } },
  steps: [
    { q: 1, t: "Une matrice de Gram", h: R`<p>Le coefficient $(i,j)$ est $\langle X^{i-1},X^{j-1}\rangle$.</p>`, b: R`<p>$\langle X^{i-1},X^{j-1}\rangle = \int_0^1t^{i+j-2}dt = \frac1{i+j-1}$ : c'est le coefficient $(i,j)$ de $H_n$.</p>` },
    { q: 2, t: "Définie positive", h: R`<p><span data-k="quad">La forme quadratique est l'intégrale d'un carré</span>.</p>`, b: R`<p><span data-k="quad">$X^\top H_nX = \int_0^1P(t)^2dt$</span> avec $P = \sum x_it^{i-1}$. C'est $\geqslant0$, et nul ssi $P = 0$ sur $[0,1]$, ssi $X = 0$.</p><div class="sbox">$$H_n\in\mathcal S_n^{++}(\mathbb R).$$</div>`, rappels: ["o-b-sym-pos"] },
    { q: 3, t: "Le déterminant", h: R`<p><span data-k="cauchy">C'est un déterminant de Cauchy</span> ; on <span data-k="prod">calcule les deux produits</span> en les regroupant en factorielles.</p>`, b: R`<p>Formule de Cauchy avec <span data-k="cauchy">$a_i = i$, $b_j = j-1$</span> : $a_j-a_i = b_j-b_i = j-i$, donc le numérateur vaut $\Big(\prod_{i< j}(j-i)\Big)^2 = c_n^2$. Pour le dénominateur, à $i$ fixé, $\prod_{j=1}^n(i+j-1) = \frac{(i+n-1)!}{(i-1)!}$, puis</p>$$\prod_{i=1}^n(i+n-1)! = n!\,(n+1)!\cdots(2n-1)! = \frac{c_{2n}}{c_n},\qquad\prod_{i=1}^n(i-1)! = c_n.$$<p>Le dénominateur vaut <span data-k="prod">$\frac{c_{2n}}{c_n^2}$</span>, d'où</p><div class="sbox">$$\det H_n = \frac{c_n^2}{c_{2n}/c_n^2} = \frac{c_n^4}{c_{2n}}.$$</div>`, rappels: ["k-det-operations"] },
    { q: 4, t: "Vérifications", h: R`<p>$c_2 = 1$, $c_3 = 2$, $c_4 = 12$, $c_6 = 1\cdot2\cdot6\cdot24\cdot120 = 34560$.</p>`, b: R`<ul><li>$n = 2$ : $\frac{1}{12} = 1\cdot\frac13-\frac14$.</li><li>$n = 3$ : $\frac{2^4}{34560} = \frac1{2160}$, la valeur trouvée dans l'exercice du déterminant de Cauchy.</li></ul>` }
  ],
  ctx: { "o-b-sym-pos": R`<p>$X^\top H_nX>0$ pour $X\neq0$.</p>`, "k-det-operations": R`<p>Formule du déterminant de Cauchy (exercice MPSI).</p>` },
  piege: R`Conclure « coefficients positifs donc matrice positive » : c'est faux en général ; ici c'est la structure de Gram qui donne la positivité.`,
  methode: R`Une matrice $\left(\int f_if_j\right)$ est une matrice de Gram : symétrique positive, définie si les $f_i$ sont libres.`
}
]);
})();

/* ---------- MP · 9. Euclidiens (2) · 10. Calcul différentiel ---------- */
LEMME.rappels({
  "k-gs-mat": { t: "Gram-Schmidt en matrices", b: R`<p>Si $(C_1,\dots,C_n)$ est une base et $(D_1,\dots,D_n)$ son orthonormalisée de Gram-Schmidt, alors $C_j\in\operatorname{Vect}(D_1,\dots,D_j)$ et $(D_j|C_j)>0$ :</p><div class="sbox">$$C_j = \sum_{i\leqslant j}(D_i|C_j)\,D_i,\qquad r_{jj} = (D_j|C_j)>0.$$</div>` },
  "k-triang-orth": { t: "Triangulaire et orthogonale", b: R`<p>Une matrice à la fois orthogonale et triangulaire supérieure est diagonale, à coefficients $\pm1$ (son inverse $M^\top$ est triangulaire inférieure et supérieure). Avec des coefficients diagonaux $>0$, c'est $I_n$.</p>` },
  "k-det-deriv": { t: "Dérivée de det(Iₙ + tM)", b: R`<p>$\det(I_n+tM)$ est un polynôme en $t$ :</p><div class="sbox">$$\det(I_n+tM) = 1+t\operatorname{tr}(M)+O(t^2).$$</div><p>(Dans le développement en somme sur les permutations, seule l'identité donne des termes de degré $\leqslant1$.)</p>` }
});

(() => {
const { FIG, S, f1, ARR } = window.__LA;
LEMME.exercises([
{
  id: "kh-18-8", subj: "kholles", year: "mp", chap: 9, level: 4, time: "35 min",
  title: "Décomposition QR et inégalité de Hadamard",
  enonce: R`<ol><li>Soit $A\in GL_n(\mathbb R)$ de colonnes $C_1,\dots,C_n$. En orthonormalisant $(C_j)$ par Gram-Schmidt, montrer qu'il existe $Q\in O_n(\mathbb R)$ et $R$ triangulaire supérieure à diagonale $>0$ avec $A = QR$.</li><li>Montrer l'unicité de ce couple.</li><li>Montrer que $|\det A|\leqslant\|C_1\|\cdots\|C_n\|$ pour toute $A\in\mathcal M_n(\mathbb R)$. Cas d'égalité ?</li><li>Interpréter en dimension $2$ et $3$.</li></ol>`,
  decode: { donnees: [R`Colonnes libres ; Gram-Schmidt produit une base orthonormée $(D_j)$.`], but: R`Factoriser $A$ et majorer son déterminant.`, cles: {
    coef: R`$C_j = \sum_{i\leqslant j}(D_i|C_j)D_i$ : la matrice $R = \big((D_i|C_j)\big)$ est triangulaire supérieure, et $A = QR$ avec $Q = (D_1|\dots|D_n)$.`,
    unic: R`$QR = Q'R'\Rightarrow Q'^\top Q = R'R^{-1}$ : orthogonale et triangulaire supérieure à diagonale $>0$, donc $I_n$.`,
    cs: R`$r_{jj} = (D_j|C_j)\leqslant\|D_j\|\|C_j\| = \|C_j\|$ (Cauchy-Schwarz).` } },
  steps: [
    { q: 1, t: "Existence par Gram-Schmidt", h: R`<p>Chaque $C_j$ ne dépend que de $D_1,\dots,D_j$ : <span data-k="coef">les coordonnées forment une matrice triangulaire</span>.</p>`, b: R`<p>Soit $(D_j)$ l'orthonormalisée de $(C_j)$, $Q = (D_1|\dots|D_n)\in O_n(\mathbb R)$. <span data-k="coef">$C_j = \sum_{i\leqslant j}(D_i|C_j)D_i$</span>, d'où $A = QR$ avec $R$ triangulaire supérieure, et $r_{jj} = (D_j|C_j)>0$ par construction.</p>`, rappels: ["k-gs-mat"] },
    { q: 2, t: "Unicité", h: R`<p><span data-k="unic">Une matrice orthogonale triangulaire à diagonale positive est l'identité</span>.</p>`, b: R`<p>Si $QR = Q'R'$ : <span data-k="unic">$Q'^\top Q = R'R^{-1}$</span>, orthogonale, triangulaire supérieure à diagonale $>0$, donc $I_n$. Ainsi $Q = Q'$ et $R = R'$.</p>`, rappels: ["k-triang-orth"] },
    { q: 3, t: "Hadamard", h: R`<p>$|\det A| = |\det Q|\det R = \prod r_{jj}$, puis <span data-k="cs">Cauchy-Schwarz sur chaque $r_{jj}$</span>.</p>`, b: R`<p>Si $A$ n'est pas inversible, $\det A = 0$ et c'est clair. Sinon $|\det A| = \prod r_{jj}$ et <span data-k="cs">$r_{jj}\leqslant\|C_j\|$</span>.</p><div class="sbox">$$|\det A|\leqslant\prod_{j=1}^n\|C_j\|.$$</div><p>Égalité (pour $A$ inversible) $\iff$ chaque $C_j$ est colinéaire à $D_j$ $\iff$ les colonnes sont deux à deux orthogonales.</p>`, rappels: ["o-b-cs"] },
    { q: 4, t: "Interprétation", h: R`<p>$|\det A|$ est l'aire (ou le volume) du parallélogramme (parallélépipède) construit sur les colonnes.</p>`, b: R`<p>L'aire d'un parallélogramme est au plus le produit des longueurs de ses côtés, avec égalité pour un rectangle ; de même pour un volume en dimension $3$.</p>` + FIG(300, 170, (() => { const o = [40, 140]; let s = `<polygon points="40,140 200,140 260,50 100,50" style="fill:var(--yellow);opacity:.3;stroke:var(--ink);stroke-width:1.3"/>`; s += ARR(40, 140, 200, 140, "b", 9) + ARR(40, 140, 100, 50, "r", 9); return s + S(120, 158, "C₁", "middle", "sm b") + S(60, 90, "C₂", "end", "sm r") + `<line class="thin" style="stroke-dasharray:4 3" x1="100" y1="50" x2="100" y2="140"/>`; })(), R`Aire $= \|C_1\|\times$ hauteur $\leqslant\|C_1\|\|C_2\|$ : la hauteur (pointillés) est plus courte que $C_2$.`, "Parallélogramme et Hadamard") }
  ],
  ctx: { "k-gs-mat": R`<p>Appliqué aux colonnes de $A$.</p>`, "k-triang-orth": R`<p>$Q'^\top Q = R'R^{-1}$.</p>`, "o-b-cs": R`<p>$(D_j|C_j)\leqslant\|C_j\|$ car $\|D_j\| = 1$.</p>` },
  piege: R`Oublier l'hypothèse de diagonale $>0$ dans l'unicité : on peut changer simultanément le signe d'une colonne de $Q$ et d'une ligne de $R$.`,
  methode: R`Majorer un déterminant : factoriser $A = QR$, le déterminant devient un produit de produits scalaires.`
},
{
  id: "kh-18-9", subj: "kholles", year: "mp", chap: 9, level: 4, time: "35 min",
  title: "Décomposition polaire",
  enonce: R`<ol><li>Soit $A\in GL_n(\mathbb R)$. Montrer que si $A = OS$ avec $O\in O_n(\mathbb R)$ et $S\in\mathcal S_n^{++}$, alors $S^2 = A^\top A$.</li><li>En déduire l'existence et l'unicité d'une telle écriture.</li><li>Soit $A\in\mathcal M_n(\mathbb R)$ quelconque. Montrer qu'il existe $O\in O_n$ et $S\in\mathcal S_n^+$ avec $A = OS$ (approcher $A$ par des inversibles).</li><li>Calculer la décomposition polaire de $\begin{pmatrix}0&-2\\1&0\end{pmatrix}$.</li></ol>`,
  decode: { donnees: [R`$A^\top A$ est symétrique définie positive si $A$ est inversible.`], but: R`Écrire $A$ comme une rotation (ou isométrie) fois un étirement.`, cles: {
    analyse: R`$A^\top A = SO^\top OS = S^2$ : $S$ est la racine carrée positive de $A^\top A$, unique.`,
    synth: R`$O = AS^{-1}$ : $O^\top O = S^{-1}A^\top AS^{-1} = S^{-1}S^2S^{-1} = I_n$.`,
    compact: R`$O_n$ est compact : de la suite $(O_k)$ on extrait une sous-suite convergente.` } },
  steps: [
    { q: 1, t: "Analyse", h: R`<p><span data-k="analyse">On calcule $A^\top A$</span> : $O$ disparaît.</p>`, b: R`<p><span data-k="analyse">$A^\top A = S^\top O^\top OS = S^2$</span>.</p>` },
    { q: 2, t: "Existence et unicité", h: R`<p>$S$ est imposée : la racine positive (unique) de $A^\top A$. Puis <span data-k="synth">$O = AS^{-1}$</span>, dont on vérifie l'orthogonalité.</p>`, b: R`<p>$A^\top A\in\mathcal S_n^{++}$ ($X^\top A^\top AX = \|AX\|^2>0$ si $X\neq0$). Soit $S$ son unique racine carrée définie positive et <span data-k="synth">$O = AS^{-1}$ : $O^\top O = I_n$</span>. Unicité : $S$ est forcée (unicité de la racine), puis $O = AS^{-1}$.</p><div class="sbox">$$A\in GL_n(\mathbb R)\ \Longrightarrow\ \exists!(O,S)\in O_n\times\mathcal S_n^{++},\ A = OS.$$</div>`, rappels: ["o-b-sym-pos"] },
    { q: 3, t: "Cas non inversible", h: R`<p>On approche $A$ par $A_k$ inversibles, on décompose, et <span data-k="compact">on extrait dans le compact $O_n$</span>.</p>`, b: R`<p>$A_k = A-\frac1kI_n\in GL_n$ pour $k$ grand, $A_k = O_kS_k$. <span data-k="compact">Sous-suite $O_{\varphi(k)}\to O\in O_n$</span>. Alors $S_{\varphi(k)} = O_{\varphi(k)}^\top A_{\varphi(k)}\to O^\top A =: S$, limite de matrices symétriques positives, donc dans $\mathcal S_n^+$ (fermé). Et $A = OS$. (Pas d'unicité de $O$ en général.)</p>`, rappels: ["k-compact-seq"] },
    { q: 4, t: "Un exemple", h: R`<p>$A^\top A$ est diagonale ici : la racine est immédiate.</p>`, b: R`<p>$A = \begin{pmatrix}0&-2\\1&0\end{pmatrix}$ : $A^\top A = \operatorname{diag}(1,4)$, $S = \operatorname{diag}(1,2)$, $O = AS^{-1} = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$ (rotation d'un quart de tour). $A$ étire d'un facteur $2$ selon $e_2$, puis tourne.</p>` }
  ],
  ctx: { "o-b-sym-pos": R`<p>$A^\top A$ définie positive, de racine carrée positive unique.</p>`, "k-compact-seq": R`<p>$O_n(\mathbb R)$ est compact.</p>` },
  piege: R`Prendre $S^2 = AA^\top$ au lieu de $A^\top A$ : ce serait la décomposition $A = S'O$ (étirement puis rotation), une autre écriture.`,
  methode: R`Décomposition polaire : analyse ($S^2 = A^\top A$) puis synthèse ($O = AS^{-1}$) ; densité et compacité de $O_n$ pour le cas général.`
},
{
  id: "kh-18-10", subj: "kholles", year: "mp", chap: 9, level: 4, time: "35 min",
  title: "Décomposition de Cholesky",
  enonce: R`<ol><li>Soit $S\in\mathcal S_n^+$. Montrer qu'il existe $A\in\mathcal M_n(\mathbb R)$ avec $S = A^\top A$.</li><li>Soit $S\in\mathcal S_n^{++}$. Montrer que $\varphi(X,Y) = X^\top SY$ est un produit scalaire sur $\mathbb R^n$.</li><li>En orthonormalisant la base canonique pour $\varphi$, montrer qu'il existe $A$ triangulaire supérieure à diagonale $>0$ avec $S = A^\top A$, et qu'elle est unique.</li><li>Calculer la décomposition de Cholesky de $\begin{pmatrix}4&2\\2&5\end{pmatrix}$.</li></ol>`,
  decode: { donnees: [R`$S$ symétrique positive (ou définie positive).`], but: R`Écrire $S = A^\top A$ avec $A$ triangulaire.`, cles: {
    racine: R`$S = R^2 = R^\top R$ avec $R$ la racine carrée symétrique positive.`,
    passage: R`Si $\mathcal B'$ est $\varphi$-orthonormée et $P$ la matrice de passage de la base canonique à $\mathcal B'$, alors $P^\top SP = I_n$, donc $S = (P^{-1})^\top P^{-1}$ ; $P$ est triangulaire supérieure à diagonale $>0$ (Gram-Schmidt), comme $A = P^{-1}$.`,
    unic: R`Si $A^\top A = B^\top B$, alors $(AB^{-1})^\top(AB^{-1}) = I_n$ : $AB^{-1}$ est orthogonale, et triangulaire supérieure à diagonale $>0$, donc $I_n$.` } },
  steps: [
    { q: 1, t: "Avec la racine carrée", h: R`<p><span data-k="racine">$S$ a une racine carrée symétrique</span>.</p>`, b: R`<p><span data-k="racine">$S = R^2 = R^\top R$</span> avec $R\in\mathcal S_n^+$ : $A = R$ convient.</p>` },
    { q: 2, t: "Un produit scalaire", h: R`<p>Bilinéaire, symétrique (car $S^\top = S$), défini positif (car $S\in\mathcal S_n^{++}$).</p>`, b: R`<p>$\varphi$ est bilinéaire, $\varphi(Y,X) = Y^\top SX = (X^\top SY)^\top = \varphi(X,Y)$, et $\varphi(X,X)>0$ pour $X\neq0$.</p>`, rappels: ["k-ps-def"] },
    { q: 3, t: "Gram-Schmidt pour φ", h: R`<p>La matrice de $\varphi$ dans la nouvelle base est $I_n$ ; <span data-k="passage">la formule de changement de base</span> donne $S$ en fonction de la matrice de passage, triangulaire par Gram-Schmidt.</p>`, b: R`<p>Gram-Schmidt pour $\varphi$ appliqué à $(e_1,\dots,e_n)$ donne $\mathcal B'$, avec une matrice de passage $P$ triangulaire supérieure à diagonale $>0$. <span data-k="passage">$P^\top SP = I_n$</span>, donc $S = A^\top A$ avec $A = P^{-1}$, triangulaire supérieure à diagonale $>0$. Unicité : <span data-k="unic">$AB^{-1}$ est orthogonale ($(AB^{-1})^\top AB^{-1} = (B^{-1})^\top SB^{-1} = I_n$)</span> et triangulaire à diagonale $>0$, donc $I_n$.</p>`, rappels: ["k-gram-schmidt", "k-triang-orth"] },
    { q: 4, t: "Un calcul", h: R`<p>On cherche $A = \begin{pmatrix}a&b\\0&c\end{pmatrix}$ et on identifie $A^\top A$.</p>`, b: R`<p>$A^\top A = \begin{pmatrix}a^2&ab\\ab&b^2+c^2\end{pmatrix}$ : $a = 2$, $b = 1$, $c^2 = 4$, $c = 2$.</p><div class="sbox">$$\begin{pmatrix}4&2\\2&5\end{pmatrix} = \begin{pmatrix}2&0\\1&2\end{pmatrix}\begin{pmatrix}2&1\\0&2\end{pmatrix}.$$</div>` }
  ],
  ctx: { "k-ps-def": R`<p>Quatre propriétés pour $\varphi$.</p>`, "k-gram-schmidt": R`<p>Pour le produit scalaire $\varphi$.</p>`, "k-triang-orth": R`<p>$AB^{-1}$ orthogonale et triangulaire.</p>` },
  piege: R`Chercher une matrice triangulaire pour $S$ seulement positive (non définie) : l'unicité tombe, et la construction par Gram-Schmidt ne marche plus.`,
  methode: R`Matrice symétrique définie positive = matrice d'un produit scalaire : Gram-Schmidt fournit Cholesky.`
},
{
  id: "kh-18-11", subj: "kholles", year: "mp", chap: 9, level: 3, time: "20 min",
  title: "Inégalité de Hadamard pour une matrice positive",
  enonce: R`<p>Soit $S = (s_{ij})\in\mathcal S_n^+(\mathbb R)$.</p><ol><li>Montrer que $s_{ii}\geqslant0$, et traiter le cas $\det S = 0$.</li><li>Si $S$ est définie positive, écrire $S = A^\top A$ (Cholesky) et montrer $s_{ii} = \|C_i\|^2\geqslant a_{ii}^2$.</li><li>En déduire $\det S\leqslant\prod_is_{ii}$. Cas d'égalité ?</li><li>Retrouver l'inégalité de Hadamard sur les colonnes.</li></ol>`,
  decode: { donnees: [R`$s_{ii} = e_i^\top Se_i\geqslant0$.`], but: R`Majorer le déterminant par le produit des coefficients diagonaux.`, cles: {
    col: R`$s_{ii} = (A^\top A)_{ii} = \|C_i\|^2$ où $C_i$ est la colonne $i$ de $A$ ; et $C_i$ a pour coordonnée $a_{ii}$ en position $i$.`,
    det: R`$\det S = (\det A)^2 = \prod a_{ii}^2$.` } },
  steps: [
    { q: 1, t: "La diagonale est positive", h: R`<p>Teste la positivité $X^\top SX\geqslant0$ avec $X = e_i$, le $i$-ème vecteur de la base canonique.</p>`, b: R`<p>$S\in\mathcal S_n^+$ signifie : $S$ symétrique et $X^\top SX\geqslant0$ pour tout $X\in\mathbb R^n$. Avec $X = e_i$ :</p>$$Se_i = \text{colonne }i\text{ de }S,\qquad e_i^\top(Se_i) = \text{coefficient }i\text{ de cette colonne} = s_{ii}.$$<div class="sbox">$$s_{ii} = e_i^\top Se_i\geqslant0.$$</div>` },
    { q: 1, t: "Le cas det S = 0", h: R`<p>Si le déterminant est nul, compare $0$ et un produit de nombres positifs.</p>`, b: R`<p>Si $\det S = 0$, l'inégalité à démontrer $\det S\leqslant\prod_is_{ii}$ s'écrit $0\leqslant\prod_is_{ii}$, vraie puisque chaque $s_{ii}\geqslant0$.</p><p>Si $\det S\neq0$, $S$ est inversible : ses valeurs propres (positives) sont non nulles, donc $S$ est <b>définie</b> positive. C'est le cas traité ensuite.</p>` },
    { q: 2, t: "Avec Cholesky", h: R`<p><span data-k="col">Le coefficient diagonal est la norme au carré d'une colonne de $A$</span>, qui contient $a_{ii}$.</p>`, b: R`<p>Par la décomposition de Cholesky, $S = A^\top A$ avec $A$ triangulaire supérieure à diagonale strictement positive. Notons $C_1,\dots,C_n$ les colonnes de $A$.</p><p>Le coefficient $(i,j)$ d'un produit $A^\top A$ est « ligne $i$ de $A^\top$ » fois « colonne $j$ de $A$ », c'est-à-dire $C_i^\top C_j$. Pour $j = i$ :</p>$$s_{ii} = C_i^\top C_i = \|C_i\|^2 = \sum_{k=1}^na_{ki}^2.$$<p>Tous les termes sont des carrés, donc positifs : la somme est au moins égale à son terme $k = i$.</p><div class="sbox">$$s_{ii} = \|C_i\|^2\geqslant a_{ii}^2.$$</div><p>C'est exactement : <span data-k="col">le coefficient diagonal $s_{ii}$ est la norme au carré de la colonne $C_i$</span>, qui contient $a_{ii}$.</p>`, rappels: ["k-det-triang"] },
    { q: 3, t: "Cas d'égalité", h: R`<p>Un produit de facteurs $a_{ii}^2\leqslant s_{ii}$ (tous $>0$) est égal au produit des $s_{ii}$ si et seulement si chaque facteur l'est.</p>`, b: R`<p>Pour $S$ définie positive, tous les $a_{ii}^2$ sont $>0$. L'égalité $\prod a_{ii}^2 = \prod s_{ii}$ avec $a_{ii}^2\leqslant s_{ii}$ pour tout $i$ force $a_{ii}^2 = s_{ii}$ pour tout $i$ (sinon un facteur strictement plus petit rend le produit strictement plus petit).</p><p>Or $s_{ii}-a_{ii}^2 = \sum_{k\neq i}a_{ki}^2$. Elle est nulle si et seulement si la colonne $i$ de $A$ n'a que son coefficient diagonal. Donc $A$ est diagonale, puis $S = A^\top A$ est diagonale. Réciproquement, pour $S$ diagonale on a bien égalité.</p><div class="sbox"><p style="margin:0;text-align:center">Égalité (pour $S$ définie positive) $\iff$ $S$ diagonale.</p></div>` },
    { q: 4, t: "Retour aux colonnes", h: R`<p>Avec $S = M^\top M$ : $s_{ii} = \|M_i\|^2$ et $\det S = (\det M)^2$.</p>`, b: R`<p>Soit $M$ quelconque, de colonnes $M_1,\dots,M_n$. La matrice $S = M^\top M$ est symétrique et positive : $X^\top SX = (MX)^\top(MX) = \|MX\|^2\geqslant0$.</p><p>Comme en Q2, $s_{ii} = \|M_i\|^2$, et $\det S = (\det M)^2$. Q3 donne</p>$$(\det M)^2\leqslant\prod_i\|M_i\|^2.$$<p>On prend la racine carrée (tout est positif) :</p><div class="sbox">$$|\det M|\leqslant\prod_{i=1}^n\|M_i\|.$$</div><p>Interprétation : le volume du parallélépipède construit sur les colonnes est au plus le produit des longueurs des côtés, avec égalité quand les côtés sont orthogonaux.</p>` }
  ],
  ctx: { "o-trace-tBB": R`<p>$(A^\top A)_{ii} = \sum_ka_{ki}^2$.</p>`, "k-det-triang": R`<p>$\det A = \prod a_{ii}$.</p>` },
  piege: R`Oublier l\'hypothèse « positive » : $S = \begin{pmatrix}-1&1&1\\1&-1&1\\1&1&-1\end{pmatrix}$ est symétrique, de déterminant $4$, alors que le produit de ses coefficients diagonaux vaut $-1$.`,
  methode: R`Inégalités sur $\det S$ pour $S$ positive : écrire $S = A^\top A$ avec $A$ triangulaire.`
},
{
  id: "kh-18-12", subj: "kholles", year: "mp", chap: 9, level: 3, time: "25 min",
  title: "Toute matrice symétrique positive est une matrice de Gram",
  enonce: R`<p>Soit $S\in\mathcal S_n^+(\mathbb R)$ de rang $p$.</p><ol><li>Montrer qu'il existe $v_1,\dots,v_n\in\mathbb R^n$ avec $S = \big((v_i|v_j)\big)_{i,j}$.</li><li>Montrer qu'on peut prendre $v_1,\dots,v_n\in\mathbb R^p$.</li><li>Réciproquement, montrer qu'une matrice de Gram est symétrique positive, de rang égal au rang de la famille.</li><li>Exemple : trouver trois vecteurs du plan dont la matrice de Gram est $\begin{pmatrix}1&-\frac12&-\frac12\\-\frac12&1&-\frac12\\-\frac12&-\frac12&1\end{pmatrix}$.</li></ol>`,
  decode: { donnees: [R`$S = P^\top DP$ avec $P\in O_n$, $D = \operatorname{diag}(\lambda_1,\dots,\lambda_p,0,\dots,0)$, $\lambda_i>0$.`], but: R`Représenter $S$ comme une table de produits scalaires.`, cles: {
    gram: R`$S = A^\top A$ signifie $s_{ij} = C_i^\top C_j = (C_i|C_j)$ où $C_i$ est la colonne $i$ de $A$.`,
    bloc: R`$A = \sqrt DP$ a ses $n-p$ dernières lignes nulles : ses colonnes vivent dans $\mathbb R^p\times\{0\}$.`,
    tri: R`$1 = \|v_i\|^2$ et $(v_i|v_j) = -\frac12 = \cos120°$ : trois vecteurs unitaires à $120°$.` } },
  steps: [
    { q: 1, t: "Une factorisation", h: R`<p><span data-k="gram">$S = A^\top A$ revient à dire que $S$ est la matrice de Gram des colonnes de $A$</span>.</p>`, b: R`<p>$A = \sqrt DP$ vérifie $A^\top A = P^\top DP = S$. <span data-k="gram">Avec $v_i$ la colonne $i$ de $A$ : $s_{ij} = (v_i|v_j)$</span>.</p>`, rappels: ["k-spectral-mat"] },
    { q: 2, t: "Dans ℝᵖ", h: R`<p><span data-k="bloc">Les dernières lignes de $A$ sont nulles</span> : on les supprime.</p>`, b: R`<p><span data-k="bloc">$A = \begin{pmatrix}B\\0\end{pmatrix}$ avec $B\in\mathcal M_{p,n}(\mathbb R)$</span>, et $A^\top A = B^\top B$. Les colonnes de $B$ sont dans $\mathbb R^p$.</p>` },
    { q: 3, t: "Réciproque", h: R`<p>$X^\top GX = \|\sum x_iv_i\|^2$.</p>`, b: R`<p>$G = \big((v_i|v_j)\big)$ est symétrique et $X^\top GX = \big\|\sum x_iv_i\big\|^2\geqslant0$. Son noyau est $\{X : \sum x_iv_i = 0\}$, de dimension $n-\operatorname{rg}(v_i)$, donc $\operatorname{rg}G = \operatorname{rg}(v_1,\dots,v_n)$.</p><div class="sbox">$$\mathcal S_n^+ = \{\text{matrices de Gram de}\ n\ \text{vecteurs}\}.$$</div>`, rappels: ["k-gram"] },
    { q: 4, t: "Un exemple", h: R`<p><span data-k="tri">Trois vecteurs unitaires à $120°$</span> : de somme nulle, rang $2$.</p>`, b: R`<p>$v_k = \left(\cos\frac{2k\pi}3,\sin\frac{2k\pi}3\right)$, $k = 0,1,2$ : <span data-k="tri">unitaires et $(v_i|v_j) = \cos\frac{2\pi}3 = -\frac12$</span>. Comme la matrice est de rang $2$ (ses lignes ont une somme nulle), on ne pouvait pas faire mieux que le plan.</p>` }
  ],
  ctx: { "k-spectral-mat": R`<p>$S = P^\top DP$.</p>`, "k-gram": R`<p>Rang de la matrice de Gram.</p>` },
  piege: R`Croire qu'il faut $n$ vecteurs libres : une matrice positive non définie correspond à une famille liée.`,
  methode: R`$S = A^\top A$ et « $S$ matrice de Gram des colonnes de $A$ » sont la même chose.`
},
{
  id: "kh-19-1", subj: "kholles", year: "mp", chap: 10, level: 4, time: "35 min",
  title: "Différentielle du déterminant",
  enonce: R`<ol><li>Soit $\varphi : GL_n(\mathbb R)\to\mathcal M_n(\mathbb R)$, $X\mapsto(\det X)X^{-1}$. Montrer que $\varphi(X) = \operatorname{Com}(X)^\top$, et en déduire que $\varphi$ admet un unique prolongement continu $\tilde\varphi$ à $\mathcal M_n(\mathbb R)$.</li><li>Montrer que $\det(I_n+tM) = 1+t\operatorname{tr}M+O(t^2)$.</li><li>Pour $A$ inversible et $B$ quelconque, en déduire $\dfrac{d}{dt}\det(A+tB)\Big|_{t = 0} = \operatorname{tr}\big(\tilde\varphi(A)B\big)$.</li><li>Étendre à $A$ quelconque. Exemple : $n = 2$.</li></ol>`,
  decode: { donnees: [R`$X\operatorname{Com}(X)^\top = (\det X)I_n$.`], but: R`Calculer la dérivée directionnelle du déterminant.`, cles: {
    com: R`Les coefficients de $\operatorname{Com}(X)$ sont des déterminants extraits : polynomiaux, donc continus sur tout $\mathcal M_n$.`,
    dense: R`$GL_n$ est dense : deux prolongements continus coïncident sur un dense, donc partout.`,
    fact: R`$\det(A+tB) = \det A\det(I_n+tA^{-1}B)$.`,
    coef: R`$\det(A+tB)$ est un polynôme en $t$ ; son coefficient de $t$ est un polynôme en les coefficients de $A$ et $B$.` } },
  steps: [
    { q: 1, t: "La comatrice", h: R`<p>Formule de l'inverse : $X^{-1} = \frac1{\det X}\operatorname{Com}(X)^\top$. <span data-k="com">La comatrice a un sens et est continue partout</span>.</p>`, b: R`<p>Pour $X$ inversible, $\varphi(X) = \operatorname{Com}(X)^\top$. <span data-k="com">$X\mapsto\operatorname{Com}(X)^\top$ est polynomiale, donc continue</span> sur $\mathcal M_n$ : c'est un prolongement. <span data-k="dense">Unique par densité de $GL_n$</span>.</p>`, rappels: ["k-comatrice"] },
    { q: 2, t: "Le premier ordre de det(I + tM)", h: R`<p>On développe le déterminant comme somme sur les permutations : seule l'identité donne un terme de degré $\leqslant1$ non nul.</p>`, b: R`<p>Dans $\det(I_n+tM) = \sum_\sigma\varepsilon(\sigma)\prod_i(\delta_{\sigma(i)i}+tm_{\sigma(i)i})$, une permutation $\sigma\neq\mathrm{id}$ déplace au moins deux indices, son terme est $O(t^2)$. Le terme de l'identité est $\prod_i(1+tm_{ii}) = 1+t\operatorname{tr}M+O(t^2)$.</p>`, rappels: ["k-det-deriv"] },
    { q: 3, t: "En A inversible", h: R`<p>On <span data-k="fact">factorise par $\det A$</span> et on applique la question 2 avec $M = A^{-1}B$.</p>`, b: R`<p><span data-k="fact">$\det(A+tB) = \det A\big(1+t\operatorname{tr}(A^{-1}B)+O(t^2)\big)$</span>. La dérivée en $0$ vaut</p><div class="sbox">$$\frac{d}{dt}\det(A+tB)\Big|_{0} = \det A\operatorname{tr}(A^{-1}B) = \operatorname{tr}\big(\operatorname{Com}(A)^\top B\big).$$</div>` },
    { q: 4, t: "Pour A quelconque", h: R`<p><span data-k="coef">Les deux membres sont des fonctions continues de $A$</span>, égales sur le dense $GL_n$.</p>`, b: R`<p><span data-k="coef">Le coefficient de $t$ dans $\det(A+tB)$ est polynomial en $A$</span>, comme $\operatorname{tr}(\operatorname{Com}(A)^\top B)$ ; égaux sur $GL_n$ dense, ils sont égaux partout. Exemple $n = 2$ : $\det\begin{pmatrix}a+tb_{11}&c+tb_{12}\\d+tb_{21}&e+tb_{22}\end{pmatrix}$ a pour coefficient de $t$ : $eb_{11}+ab_{22}-db_{12}-cb_{21}$, et $\operatorname{Com}(A)^\top = \begin{pmatrix}e&-c\\-d&a\end{pmatrix}$ donne la même trace.</p>`, rappels: ["o-a-diff-def"] }
  ],
  ctx: { "k-comatrice": R`<p>$X^{-1} = \frac1{\det X}\operatorname{Com}(X)^\top$.</p>`, "k-det-deriv": R`<p>Avec $M$ quelconque.</p>`, "o-a-diff-def": R`<p>La différentielle de $\det$ en $A$ est $H\mapsto\operatorname{tr}(\operatorname{Com}(A)^\top H)$.</p>` },
  piege: R`Écrire $\frac d{dt}\det(A+tB) = \det B$ par analogie avec une fonction linéaire : le déterminant n'est pas linéaire.`,
  methode: R`Dériver une fonction de matrices : le faire en $A$ inversible en factorisant, puis étendre par densité.`
}
]);
})();

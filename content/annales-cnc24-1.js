/* Annales · CNC (Maroc) 2024 MP, Mathématiques 1. Énoncé transcrit, corrigé rédigé pour Lemme. */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "annales", year: "mp", chap: 25, kind: "probleme", qnav: true, side: true };
const S = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "c24a-ipp": { t: "Intégration par parties", b: R`$$\int_0^Au'v = \big[uv\big]_0^A-\int_0^Auv',\quad\text{puis }A\to+\infty.$$` },
  "c24a-gauss": { t: "Intégrale gaussienne généralisée", b: R`<p>$\int_0^{+\infty}e^{-x^2/2}dx = \sqrt{\pi/2}$, donc $\int_{-\infty}^{+\infty}e^{-x^2/2}dx = \sqrt{2\pi}$ et, par changement de variable, $\int_{-\infty}^{+\infty}e^{-tx^2/2}dx = \sqrt{2\pi/t}$.</p>` },
  "c24a-densite": { t: "Densité, espérance, variance", b: R`$$E(X) = \int xf(x)\,dx\ \Big(\text{si }\int|x|f\lt\infty\Big),\qquad E(X^2) = \int x^2f(x)\,dx,\qquad V(X) = E(X^2)-E(X)^2,\qquad F(x) = \int_{-\infty}^xf.$$` },
  "c24a-param": { t: "Intégrales à paramètre", b: R`<p>Pour $|x|\leqslant a$ :</p>$$\partial_x^kf\ \text{continue},\qquad|\partial_x^kf(x,u)|\leqslant\varphi_a(u),\ \varphi_a\ \text{intégrable},$$<div class="sbox">$$\Longrightarrow\quad\Big(\int f(x,u)\,du\Big)^{(k)} = \int\partial_x^kf(x,u)\,du.$$</div>` },
  "c24a-tat": { t: "Intégration terme à terme", b: R`$$\sum_k\int|u_k|\lt+\infty\ \Longrightarrow\ \int\sum u_k = \sum\int u_k.$$` }
});

const EX = R`<h4>Exercice</h4><p>On pose $I_0 = \int_0^{+\infty}e^{-3x}dx$ et, pour $n\geqslant1$, $I_n = \int_0^{+\infty}x^ne^{-3x}dx$.</p><ol start="1">
<li>a) Montrer que $I_0$ converge et vaut $\frac13$. b) Vérifier que $x^ne^{-3x} = o\big(\frac1{x^2}\big)$ en $+\infty$. c) En déduire que $I_n$ converge.</li>
<li>Montrer par parties que pour $n\in\mathbb N$ et $A\geqslant0$ : $$\int_0^Ax^{n+1}e^{-3x}dx = \frac{-A^{n+1}}3e^{-3A}+\frac{n+1}3\int_0^Ax^ne^{-3x}dx.$$</li>
<li>Montrer que $I_{n+1} = \frac{n+1}3I_n$.</li>
<li>En déduire que $I_n = \frac{n!}{3^{n+1}}$.</li>
<li>Soit $X$ de densité $f(x) = 0$ si $x\leqslant0$ et $f(x) = \frac94(1+x)e^{-3x}$ si $x>0$. a) Déterminer $E(X)$. b) Déterminer $V(X)$.</li></ol>`;

const PRE = R`<p class="pl-pre"><b>Problème.</b> Pour $t>0$ : $f_t(x) = e^{-t\frac{x^2}2}$ et $g_t(x) = 0$ si $x\leqslant0$, $g_t(x) = txf_t(x)$ si $x>0$. On rappelle que $\int_0^{+\infty}e^{-\frac{x^2}2}dx = \sqrt{\frac\pi2}$. Dans tout le problème, $t>0$.</p>`;

const E1 = PRE + R`<h4>Partie 1 : étude d'une variable aléatoire</h4><ol start="1">
<li>a) Montrer que pour $n\geqslant0$, $I_n = \int_0^{+\infty}x^nf_t(x)dx$ converge. b) Déterminer $I_0$ (changement de variable $u = x\sqrt t$). c) Déterminer $I_1$.</li>
<li>a) Montrer que pour $n\geqslant2$ et $u\geqslant0$ : $$\int_0^ux^nf_t(x)dx = \frac{-u^{n-1}}tf_t(u)+\frac{n-1}t\int_0^ux^{n-2}f_t(x)dx.$$ b) En déduire que $I_n = \frac{n-1}tI_{n-2}$ pour $n\geqslant2$.</li>
<li>a) Montrer que $g_t$ est une densité de probabilité ; on note $X_t$ une variable de densité $g_t$. b) Déterminer sa fonction de répartition $F_t$. c) Montrer que $X_t$ a une espérance et la calculer. d) Montrer que $X_t$ a une variance et la calculer. e) Déterminer $t$ pour que $\sigma(X_t) = 1$.</li>
<li>Pour $k\in\mathbb N$ : $A_k = \big(\sqrt{2k}\lt X_t\leqslant\sqrt{2k+1}\big)$ et $B_k = \big(\sqrt{2k+1}\lt X_t\leqslant\sqrt{2k+2}\big)$. a) Déterminer $P(A_k)$ et $P(B_k)$. b) i) Montrer que $\sum P(A_n)$ converge et calculer sa somme. ii) Même question pour $\sum P(B_n)$. iii) Peut-on avoir $P\big(\bigcup A_n\big) = P\big(\bigcup B_n\big)$ ?</li></ol>`;

const E2 = PRE + R`<h4>Partie 2 : calcul d'une intégrale impropre</h4><p>Pour $n\geqslant0$ et $x\in\mathbb R$ : $S_n(x) = \sum_{k=0}^n\frac{(-tx)^k}{k!}f_t(x)$, et $m_n = \int_{-\infty}^{+\infty}x^nf_t(x)dx$ (moment d'ordre $n$).</p><ol start="1">
<li>Déterminer $m_{2k}$ et $m_{2k+1}$.</li>
<li>Montrer que pour $a>0$, $b,c\in\mathbb R$ : $\int_{-\infty}^{+\infty}e^{-(ax^2+bx+c)}dx$ converge et vaut $\sqrt{\frac\pi a}\,e^{\frac\Delta{4a}}$, $\Delta = b^2-4ac$.</li>
<li>Montrer que $\int_{-\infty}^{+\infty}e^{-tx}f_t(x)dx$ converge et la calculer.</li>
<li>Déterminer $\lim_{n\to+\infty}S_n(x)$.</li>
<li>Montrer que $\int_{-\infty}^{+\infty}e^{-tx}f_t(x)dx = \sum_{k\geqslant0}(-1)^km_k\frac{t^k}{k!}$.</li>
<li>En déduire $\sum_{k\geqslant0}m_{2k}\frac{t^{2k}}{(2k)!}$.</li>
<li>Montrer que $\int_0^1\frac1{\sqrt t}e^{\frac t2}dt$ converge.</li>
<li>Montrer que $\int_0^1\frac1{\sqrt t}e^{\frac t2}dt = \sum_{k\geqslant0}\frac1{k!(2k+1)2^{k-1}}$.</li></ol>`;

const E3 = PRE + R`<h4>Partie 3 : produit de convolution et transformée</h4><p>$\mathbf E$ est l'ensemble des fonctions $h$ continues sur $\mathbb R$ telles qu'il existe $M\geqslant0$ et $\lambda>0$ avec $|h(x)|\leqslant Mf_t(\lambda x)$ pour tout $x$. On admet : si $\phi$ est continue sur $\mathbb R^2$ et $|\phi(x,y)|\leqslant\phi_1(x)\phi_2(y)$ avec $\phi_1,\phi_2$ continues intégrables sur $\mathbb R$, alors $\int\big(\int\phi(x,y)dx\big)dy$ et $\int\big(\int\phi(x,y)dy\big)dx$ existent et sont égales.</p><ol start="1">
<li>Montrer que $\mathbf E$ est un espace vectoriel et que $f_t\in\mathbf E$.</li>
<li>Pour $\varphi,\psi\in\mathbf E$, $(\varphi*\psi)(x) = \int_{-\infty}^{+\infty}\varphi(u)\psi(x-u)du$. a) Montrer que $\varphi*\psi$ est définie sur $\mathbb R$. b) Montrer que $\varphi*\psi = \psi*\varphi$. c) Déterminer $f_t*f_t$. d) Montrer que $\varphi*\psi\in\mathbf E$.</li>
<li>Pour $\varphi\in\mathbf E$, $\widehat\varphi(x) = \int_{-\infty}^{+\infty}e^{-xu}\varphi(u)du$. a) Montrer que $\widehat\varphi$ est définie sur $\mathbb R$. b) Montrer que $\widehat\varphi$ est $\mathcal C^2$ et exprimer $\widehat\varphi'$ et $\widehat\varphi''$.</li>
<li>Soient $\varphi,\psi\in\mathbf E$. a) Montrer qu'il existe $\alpha>0$ avec $u^2+(x-u)^2\geqslant\alpha(u^2+x^2)$ pour tous $x,u$. b) Montrer que $\int(\varphi*\psi) = \int\psi\cdot\int\psi$ (lire : $\int\varphi\cdot\int\psi$). c) Montrer que $\widehat{\varphi*\psi}(\omega) = \widehat\varphi(\omega)\widehat\psi(\omega)$.</li></ol>`;

const E4 = PRE + R`<h4>Partie 4 : une suite de fonctions construite par convolution</h4><p>$\mathbf E$, $*$ et $\widehat{\ }$ sont ceux de la partie 3. $\mathbf E_1$ est l'ensemble des $\psi\in\mathbf E$ avec $\int\psi = 1$. Pour $\phi\in\mathbf E_1$, $\phi_1 = \phi$ et $\phi_n = \phi_{n-1}*\phi_1$ pour $n\geqslant2$.</p><ol start="1">
<li>Montrer que $\phi_n\in\mathbf E_1$.</li>
<li>Déterminer $\widehat{\phi_n}(x)$ en fonction de $\widehat\phi(x)$ et de $n$.</li>
<li>Ici $\phi = \sqrt{\frac t{2\pi}}f_t$. a) Montrer qu'il existe $C_n(t)$, à déterminer, tel que $\phi_n(x) = C_n(t)e^{-t\frac{x^2}{2n}}$. b) Montrer qu'il existe $\nu>0$ tel que $\widehat{\phi_n}\big(u\sqrt{t/n}\big) = e^{\nu u^2}$.</li>
<li>Soit $\phi\in\mathbf E_1$ quelconque ; $M_{n,1} = \int u\phi_n(u)du$, $M_{n,2} = \int u^2\phi_n(u)du$, $V_n = M_{n,2}-M_{n,1}^2$. a) Montrer que $\widehat{\phi_n}$ a un développement limité à l'ordre $2$ en $0$ en fonction de $M_{n,1}$ et $M_{n,2}$. b) En déduire $M_{n,1} = nM_{1,1}$ et $V_n = nV_1$.</li>
<li>On suppose $M_{1,1} = 0$. Déterminer $\lim_{n\to+\infty}\widehat{\phi_n}\big(u\sqrt{t/n}\big)$.</li></ol>`;

const rayFig = GRAPH({ w: 440, h: 220, x: [0, 3], y: [0, 1.3], xt: [1, 2, 3], yt: [0.5, 1], ytl: ["0,5", "1"], xl: "x", curves: [{ f: (x) => x * Math.exp(-x * x / 2), c: "b", lab: [1.6, 0.68, "densité g₁"] }, { f: (x) => 1 - Math.exp(-x * x / 2), c: "r", lab: [2.1, 1.08, "répartition F₁"] }] }, R`Pour $t = 1$ : densité $g_1(x) = xe^{-x^2/2}$ (loi de Rayleigh, maximum en $x = \frac1{\sqrt t}$) et fonction de répartition $F_1(x) = 1-e^{-x^2/2}$.`, "Loi de Rayleigh");

LEMME.exercises([
{ id: "cnc24-1-ex", ...P, part: "Exercice", level: 1, time: "30 min",
  title: "Intégrales de x^n e^(−3x) et une densité",
  tt: R`Intégrales de $x^ne^{-3x}$ et une densité`,
  enonce: EX,
  decode: { donnees: [R`$I_n = \int_0^{+\infty}x^ne^{-3x}dx$.`], but: R`Calculer $I_n = \frac{n!}{3^{n+1}}$ et l'utiliser pour l'espérance et la variance d'une loi à densité.`, cles: {} },
  steps: [
    S(1, "1. Convergence", R`<p>Primitive de $e^{-3x}$ ; croissances comparées.</p>`, R`<p><b>a)</b> $\int_0^Ae^{-3x}dx = \frac{1-e^{-3A}}3\to\frac13$ : $I_0$ converge et vaut $\frac13$.</p><p><b>b)</b> $x^2\cdot x^ne^{-3x} = x^{n+2}e^{-3x}\to0$ (croissances comparées) : $x^ne^{-3x} = o\big(\frac1{x^2}\big)$.</p><p><b>c)</b> $x\mapsto x^ne^{-3x}$ est continue et positive sur $[0,+\infty[$ ; par b) et la convergence de $\int_1^{+\infty}\frac{dx}{x^2}$, elle est intégrable en $+\infty$ : $I_n$ converge.</p>`),
    S(2, "2. Intégration par parties", R`<p>$u = x^{n+1}$, $v' = e^{-3x}$, $v = -\frac13e^{-3x}$.</p>`, R`<p>Avec $u(x) = x^{n+1}$ et $v(x) = -\frac13e^{-3x}$, de classe $\mathcal C^1$ :</p>$$\int_0^Ax^{n+1}e^{-3x}dx = \Big[-\frac{x^{n+1}}3e^{-3x}\Big]_0^A+\frac{n+1}3\int_0^Ax^ne^{-3x}dx$$$$= -\frac{A^{n+1}}3e^{-3A}+\frac{n+1}3\int_0^Ax^ne^{-3x}dx.$$`, ["c24a-ipp"]),
    S(3, "3. Relation de récurrence", R`<p>$A\to+\infty$ ; $A^{n+1}e^{-3A}\to0$.</p>`, R`<p>Quand $A\to+\infty$, $A^{n+1}e^{-3A}\to0$ et les intégrales convergent (1c) : $I_{n+1} = \frac{n+1}3I_n$.</p>`),
    S(4, "4. Formule explicite", R`<p>Récurrence.</p>`, R`<p>$I_0 = \frac13 = \frac{0!}{3^1}$. Si $I_n = \frac{n!}{3^{n+1}}$, alors $I_{n+1} = \frac{n+1}3\cdot\frac{n!}{3^{n+1}} = \frac{(n+1)!}{3^{n+2}}$.</p><div class="sbox">$$I_n = \frac{n!}{3^{n+1}}.$$</div>`),
    S(5, "5. Espérance et variance", R`<p>$E(X) = \frac94(I_1+I_2)$, $E(X^2) = \frac94(I_2+I_3)$.</p>`, R`<p>(Vérification : $\int f = \frac94(I_0+I_1) = \frac94\big(\frac13+\frac19\big) = 1$.) $I_1 = \frac19$, $I_2 = \frac2{27}$, $I_3 = \frac6{81} = \frac2{27}$.</p><p><b>a)</b> $xf(x)\geqslant0$ est intégrable (combinaison des $x^ke^{-3x}$) et $E(X) = \frac94(I_1+I_2) = \frac94\cdot\frac{3+2}{27} = \frac5{12}$.</p><p><b>b)</b> $E(X^2) = \frac94(I_2+I_3) = \frac94\cdot\frac4{27} = \frac13$, donc</p><div class="sbox">$$E(X) = \frac5{12},\qquad V(X) = \frac13-\frac{25}{144} = \frac{23}{144}.$$</div>`, ["c24a-densite"])
  ],
  piege: R`Ne pas oublier de vérifier que $\int f = 1$ : c'est un bon contrôle des calculs de $I_n$.`,
  methode: R`Les intégrales $\int_0^{+\infty}x^ne^{-ax}dx = \frac{n!}{a^{n+1}}$ se calculent par une récurrence d'intégration par parties.`
},

{ id: "cnc24-1-p1", ...P, part: "Partie 1", level: 2, time: "45 min",
  title: "La loi de Rayleigh",
  enonce: E1,
  decode: { donnees: [R`$\int_0^{+\infty}e^{-x^2/2}dx = \sqrt{\pi/2}$.`], but: R`Étudier la variable de densité $g_t(x) = txe^{-tx^2/2}$ sur $]0,+\infty[$.`, cles: {} },
  steps: [
    S(1, "1. Les intégrales I_n", R`<p>Croissances comparées pour la convergence ; $u = x\sqrt t$ pour $I_0$ ; primitive pour $I_1$.</p>`, R`<p><b>a)</b> $x^nf_t(x)$ est continue, positive, et $x^2\cdot x^ne^{-tx^2/2}\to0$ : intégrable sur $[0,+\infty[$.</p><p><b>b)</b> Avec $x = \frac u{\sqrt t}$ : $I_0 = \frac1{\sqrt t}\int_0^{+\infty}e^{-u^2/2}du = \sqrt{\frac\pi{2t}}$.</p><p><b>c)</b> $\frac d{dx}\Big(-\frac1te^{-tx^2/2}\Big) = xe^{-tx^2/2}$, donc $I_1 = \Big[-\frac1te^{-tx^2/2}\Big]_0^{+\infty} = \frac1t$.</p>`),
    S(2, "2. Récurrence", R`<p>$x^nf_t = x^{n-1}\cdot xf_t$ et $xf_t = -\frac1tf_t'$.</p>`, R`<p><b>a)</b> $f_t'(x) = -txf_t(x)$. Par parties avec $u(x) = x^{n-1}$ et $v = -\frac1tf_t$ ($n\geqslant2$) :</p>$$\int_0^ux^nf_t = \Big[-\frac{x^{n-1}}tf_t(x)\Big]_0^u+\frac{n-1}t\int_0^ux^{n-2}f_t$$$$= -\frac{u^{n-1}}tf_t(u)+\frac{n-1}t\int_0^ux^{n-2}f_t,$$<p>(le crochet est nul en $0$ car $n-1\geqslant1$).</p><p><b>b)</b> $u^{n-1}f_t(u)\to0$ quand $u\to+\infty$ : $I_n = \frac{n-1}tI_{n-2}$.</p>`, ["c24a-ipp"]),
    S(3, "3. La variable X_t", R`<p>$\int g_t = tI_1$, $E(X_t) = tI_2$, $E(X_t^2) = tI_3$.</p>`, R`<p><b>a)</b> $g_t$ est continue (en $0$ : $txf_t(x)\to0$), positive, et $\int_{\mathbb R}g_t = tI_1 = 1$ : c'est une densité.</p><p><b>b)</b> $F_t(x) = 0$ si $x\leqslant0$ et, pour $x>0$, $F_t(x) = \int_0^xtue^{-tu^2/2}du = 1-e^{-tx^2/2}$.</p><p><b>c)</b> $xg_t(x) = tx^2f_t(x)$ intégrable : $E(X_t) = tI_2 = t\cdot\frac1tI_0 = \sqrt{\frac\pi{2t}}$.</p><p><b>d)</b> $E(X_t^2) = tI_3 = t\cdot\frac2tI_1 = \frac2t$, donc</p><div class="sbox">$$E(X_t) = \sqrt{\frac\pi{2t}},\qquad V(X_t) = \frac2t-\frac\pi{2t} = \frac{4-\pi}{2t}.$$</div><p><b>e)</b> $\sigma(X_t) = 1\iff V(X_t) = 1\iff t = \frac{4-\pi}2$.</p>${rayFig}`, ["c24a-densite"]),
    S(4, "4. Deux familles d'événements", R`<p>$P(a\lt X_t\leqslant b) = F_t(b)-F_t(a)$ ; séries géométriques.</p>`, R`<p><b>a)</b> $P(A_k) = F_t(\sqrt{2k+1})-F_t(\sqrt{2k}) = e^{-tk}-e^{-t(2k+1)/2}$ et $P(B_k) = e^{-t(2k+1)/2}-e^{-t(k+1)}$.</p><p><b>b) i)</b> $P(A_k) = e^{-tk}(1-e^{-t/2})$ : série géométrique de raison $e^{-t}\in]0,1[$,</p>$$\sum_{k\geqslant0}P(A_k) = \frac{1-e^{-t/2}}{1-e^{-t}} = \frac1{1+e^{-t/2}}.$$<p><b>ii)</b> $P(B_k) = e^{-t/2}P(A_k)$, donc $\sum P(B_k) = \frac{e^{-t/2}}{1+e^{-t/2}} = \frac1{1+e^{t/2}}$.</p><p><b>iii)</b> Les $A_k$ sont deux à deux disjoints, de même que les $B_k$ : $P(\bigcup A_k) = \sum P(A_k)$ et $P(\bigcup B_k) = \sum P(B_k)$. L'égalité équivaudrait à $1 = e^{-t/2}$, soit $t = 0$ : impossible. (Les deux sommes valent $1$ au total, car $\bigcup A_k\cup\bigcup B_k = ]0,+\infty[$.)</p>`)
  ],
  piege: R`En 4.b.iii, la $\sigma$-additivité exige des événements deux à deux disjoints : ici c'est le cas car les intervalles $]\sqrt{2k},\sqrt{2k+1}]$ sont disjoints.`,
  methode: R`Pour les moments d'une loi à densité gaussienne : relation de récurrence $I_n = \frac{n-1}tI_{n-2}$ par parties.`
},

{ id: "cnc24-1-p2", ...P, part: "Partie 2", level: 3, time: "45 min",
  title: "Moments gaussiens et une intégrale impropre",
  enonce: E2,
  decode: { donnees: [R`Partie 1 : $I_{2k} = \frac{(2k)!}{2^kk!t^k}\sqrt{\frac\pi{2t}}$.`], but: R`Intégrer terme à terme $e^{-tx}f_t(x) = \sum\frac{(-tx)^k}{k!}f_t(x)$.`, cles: {} },
  steps: [
    S(1, "1. Les moments", R`<p>Parité ; $m_{2k} = 2I_{2k}$ et récurrence de la partie 1.</p>`, R`<p>$x^{2k+1}f_t(x)$ est impaire et intégrable : $m_{2k+1} = 0$. $x^{2k}f_t$ est paire : $m_{2k} = 2I_{2k}$. Par la partie 1, $I_{2k} = \frac{(2k-1)(2k-3)\cdots1}{t^k}I_0 = \frac{(2k)!}{2^kk!\,t^k}\sqrt{\frac\pi{2t}}$, donc</p><div class="sbox">$$m_{2k} = \frac{(2k)!}{2^kk!\,t^k}\sqrt{\frac{2\pi}t},\qquad m_{2k+1} = 0.$$</div>`),
    S(2, "2. Intégrale gaussienne générale", R`<p>Forme canonique : $ax^2+bx+c = a\big(x+\frac b{2a}\big)^2-\frac\Delta{4a}$.</p>`, R`<p>$ax^2+bx+c = a\big(x+\frac b{2a}\big)^2-\frac\Delta{4a}$. Avec $y = \sqrt{2a}\big(x+\frac b{2a}\big)$ (changement de variable affine) :</p>$$\int_{-\infty}^{+\infty}e^{-(ax^2+bx+c)}dx$$$$= e^{\frac\Delta{4a}}\int_{-\infty}^{+\infty}e^{-y^2/2}\frac{dy}{\sqrt{2a}} = e^{\frac\Delta{4a}}\frac{\sqrt{2\pi}}{\sqrt{2a}}$$$$= \sqrt{\frac\pi a}\,e^{\frac\Delta{4a}}.$$<p>La convergence vient de celle de $\int e^{-y^2/2}$.</p>`, ["c24a-gauss"]),
    S(3, "3. Une intégrale explicite", R`<p>$a = \frac t2$, $b = t$, $c = 0$.</p>`, R`<p>$e^{-tx}f_t(x) = e^{-(\frac t2x^2+tx)}$ : $a = \frac t2$, $b = t$, $c = 0$, $\Delta = t^2$, $\frac\Delta{4a} = \frac t2$. Par 2 :</p><div class="sbox">$$\int_{-\infty}^{+\infty}e^{-tx}f_t(x)dx = \sqrt{\frac{2\pi}t}\,e^{t/2}.$$</div>`),
    S(4, "4. Limite de S_n", R`<p>Série de l'exponentielle.</p>`, R`<p>$\sum_{k=0}^n\frac{(-tx)^k}{k!}\to e^{-tx}$, donc $S_n(x)\to e^{-tx}f_t(x)$.</p>`),
    S(5, "5. Intégration terme à terme", R`<p>$\sum_k\int\big|\frac{(-tx)^k}{k!}f_t\big| = \int e^{t|x|}f_t<+\infty$.</p>`, R`<p>Soit $u_k(x) = \frac{(-tx)^k}{k!}f_t(x)$, continues et intégrables. Par convergence monotone des sommes partielles positives :</p>$$\sum_k\int|u_k| = \int\sum_k\frac{(t|x|)^k}{k!}f_t(x)dx$$$$= \int_{-\infty}^{+\infty}e^{t|x|}e^{-tx^2/2}dx<+\infty$$<p>(la fonction est $o(1/x^2)$ en $\pm\infty$). Par intégration terme à terme et 4 :</p>$$\int e^{-tx}f_t(x)dx = \sum_k\frac{(-t)^k}{k!}m_k = \sum_k(-1)^km_k\frac{t^k}{k!}.$$`, ["c24a-tat"]),
    S(6, "6. Une somme de moments", R`<p>Les moments impairs sont nuls.</p>`, R`<p>Comme $m_{2k+1} = 0$, la somme de 5 se réduit aux indices pairs. Avec 3 :</p><div class="sbox">$$\sum_{k\geqslant0}m_{2k}\frac{t^{2k}}{(2k)!} = \sqrt{\frac{2\pi}t}\,e^{t/2}.$$</div><p>Vérification avec 1 : $\sum\frac{(2k)!}{2^kk!t^k}\sqrt{\frac{2\pi}t}\frac{t^{2k}}{(2k)!} = \sqrt{\frac{2\pi}t}\sum\frac{(t/2)^k}{k!}$. ✓</p>`),
    S(7, "7. Convergence", R`<p>$\frac{e^{t/2}}{\sqrt t}\leqslant\frac{e^{1/2}}{\sqrt t}$ sur $]0,1]$.</p>`, R`<p>Sur $]0,1]$, $0<\frac{e^{t/2}}{\sqrt t}\leqslant\frac{\sqrt e}{\sqrt t}$, intégrable (Riemann, $\frac12<1$).</p>`),
    S(8, "8. Développement en série", R`<p>$e^{t/2} = \sum\frac{t^k}{2^kk!}$ et $\int_0^1t^{k-\frac12}dt = \frac2{2k+1}$ ; termes positifs.</p>`, R`<p>Sur $]0,1]$, $\frac{e^{t/2}}{\sqrt t} = \sum_k\frac{t^{k-1/2}}{2^kk!}$, fonctions positives intégrables, avec $\int_0^1\frac{t^{k-1/2}}{2^kk!}dt = \frac2{2^kk!(2k+1)}$, terme d'une série convergente. Par intégration terme à terme :</p><div class="sbox">$$\int_0^1\frac{e^{t/2}}{\sqrt t}dt = \sum_{k\geqslant0}\frac2{2^kk!(2k+1)}$$$$= \sum_{k\geqslant0}\frac1{k!(2k+1)2^{k-1}}.$$</div>`, ["c24a-tat"])
  ],
  piege: R`En 5, la domination se fait avec $e^{t|x|}$ (et non $e^{-tx}$) : il faut sommer les valeurs absolues.`,
  methode: R`Développer une exponentielle en série puis intégrer terme à terme, en vérifiant $\sum\int|u_k|<\infty$.`
},

{ id: "cnc24-1-p3", ...P, part: "Partie 3", level: 4, time: "1 h",
  title: "Produit de convolution et transformée",
  enonce: E3,
  decode: { donnees: [R`Les fonctions de $\mathbf E$ ont une décroissance gaussienne.`], but: R`Montrer que $\mathbf E$ est stable par convolution et que la transformée $\widehat\varphi(x) = \int e^{-xu}\varphi(u)du$ transforme la convolution en produit.`, cles: {} },
  steps: [
    S(1, "1. L'espace E", R`<p>$\lambda\mapsto f_t(\lambda x)$ décroît : on prend le plus petit des deux $\lambda$.</p>`, R`<p>$\mathbf E\subset\mathcal C(\mathbb R,\mathbb R)$ contient $0$ ($M = 0$). Si $|h_1|\leqslant M_1f_t(\lambda_1x)$ et $|h_2|\leqslant M_2f_t(\lambda_2x)$, avec $\lambda = \min(\lambda_1,\lambda_2)$ on a $f_t(\lambda_ix) = e^{-t\lambda_i^2x^2/2}\leqslant f_t(\lambda x)$, donc $|\alpha h_1+h_2|\leqslant(|\alpha|M_1+M_2)f_t(\lambda x)$. $\mathbf E$ est un sous-espace vectoriel. Et $f_t\in\mathbf E$ ($M = 1$, $\lambda = 1$).</p>`),
    S(2, "2. Le produit de convolution", R`<p>a) $|\varphi(u)\psi(x-u)|\leqslant M_1M_2f_t(\lambda_1u)$. d) Utilise l'inégalité de 4a.</p>`, R`<p>Soit $|\varphi|\leqslant M_1f_t(\lambda_1\cdot)$, $|\psi|\leqslant M_2f_t(\lambda_2\cdot)$ et $\lambda = \min(\lambda_1,\lambda_2)$.</p><p><b>a)</b> $|\varphi(u)\psi(x-u)|\leqslant M_1M_2f_t(\lambda_1u)$, intégrable en $u$ : $(\varphi*\psi)(x)$ existe.</p><p><b>b)</b> Avec $v = x-u$ : $\int\varphi(u)\psi(x-u)du = \int\varphi(x-v)\psi(v)dv = (\psi*\varphi)(x)$.</p><p><b>c)</b> $(f_t*f_t)(x) = \int e^{-\frac t2(u^2+(x-u)^2)}du = \int e^{-(tu^2-txu+\frac t2x^2)}du$ : $a = t$, $b = -tx$, $c = \frac t2x^2$, $\Delta = t^2x^2-2t^2x^2 = -t^2x^2$. Par la partie 2 :</p>$$(f_t*f_t)(x) = \sqrt{\frac\pi t}\,e^{-tx^2/4}.$$<p><b>d)</b> <i>Continuité</i> : $(x,u)\mapsto\varphi(u)\psi(x-u)$ est continue et dominée par $M_1M_2f_t(\lambda_1u)$, intégrable et indépendante de $x$ : $\varphi*\psi$ est continue. <i>Majoration</i> : par 4a (prouvée ci-dessous, $\alpha = \frac13$), $u^2+(x-u)^2\geqslant\frac13(u^2+x^2)$, donc</p>$$|\varphi(u)\psi(x-u)|\leqslant M_1M_2e^{-\frac{t\lambda^2}2(u^2+(x-u)^2)}\leqslant M_1M_2e^{-\frac{t\lambda^2}6x^2}e^{-\frac{t\lambda^2}6u^2},$$<p>d'où $|(\varphi*\psi)(x)|\leqslant M'f_t\big(\frac\lambda{\sqrt3}x\big)$ avec $M' = M_1M_2\int e^{-t\lambda^2u^2/6}du$. Donc $\varphi*\psi\in\mathbf E$.</p>`),
    S(3, "3. La transformée", R`<p>$|e^{-xu}\varphi(u)|\leqslant Me^{|x||u|-t\lambda^2u^2/2}$ ; domination sur $[-A,A]$ pour les dérivées.</p>`, R`<p><b>a)</b> $|e^{-xu}\varphi(u)|\leqslant Me^{|x||u|}e^{-t\lambda^2u^2/2}$, qui est $o(1/u^2)$ en $\pm\infty$ : intégrable.</p><p><b>b)</b> $\frac{\partial^k}{\partial x^k}\big(e^{-xu}\varphi(u)\big) = (-u)^ke^{-xu}\varphi(u)$, continue. Pour $|x|\leqslant A$ : $|u|^ke^{-xu}|\varphi(u)|\leqslant M|u|^ke^{A|u|}e^{-t\lambda^2u^2/2}$, intégrable et indépendante de $x$ ($k = 1,2$). Donc $\widehat\varphi$ est $\mathcal C^2$ sur chaque $[-A,A]$, donc sur $\mathbb R$, et</p>$$\widehat\varphi'(x) = -\int ue^{-xu}\varphi(u)du,$$$$\widehat\varphi''(x) = \int u^2e^{-xu}\varphi(u)du.$$`, ["c24a-param"]),
    S(4, "4. Convolution et transformée", R`<p>a) Trinôme en $u$ de discriminant négatif. b) et c) : théorème admis avec $\phi_1(u)\phi_2(x)$.</p>`, R`<p><b>a)</b> $u^2+(x-u)^2-\alpha(u^2+x^2) = (2-\alpha)u^2-2xu+(1-\alpha)x^2$. Pour $\alpha = \frac13$, le discriminant réduit vaut $x^2-\frac53\cdot\frac23x^2 = -\frac19x^2\leqslant0$ : le trinôme est positif. $\alpha = \frac13$ convient.</p><p><b>b)</b> (L'énoncé écrit $\int\psi\cdot\int\psi$ ; il faut lire $\int\varphi\cdot\int\psi$.) Par 2d, $|\varphi(u)\psi(x-u)|\leqslant\phi_1(u)\phi_2(x)$ avec $\phi_1(u) = M_1M_2e^{-t\lambda^2u^2/6}$ et $\phi_2(x) = e^{-t\lambda^2x^2/6}$, continues intégrables. Par le résultat admis :</p>$$\int(\varphi*\psi)(x)dx = \int\varphi(u)\Big(\int\psi(x-u)dx\Big)du$$$$= \int\varphi\cdot\int\psi.$$<p><b>c)</b> Comme $e^{-\omega x} = e^{-\omega u}e^{-\omega(x-u)}$, la fonction $e^{-\omega x}\varphi(u)\psi(x-u)$ est majorée par $\big(e^{|\omega||x|}\phi_2(x)\big)\phi_1(u)$, produit de fonctions intégrables. Par le résultat admis :</p>$$\widehat{\varphi*\psi}(\omega) = \int e^{-\omega u}\varphi(u)\Big(\int e^{-\omega(x-u)}\psi(x-u)dx\Big)du$$$$= \widehat\varphi(\omega)\widehat\psi(\omega).$$`)
  ],
  piege: R`L'énoncé de 4b contient une coquille ($\int\psi\cdot\int\psi$) : le résultat correct est $\int\varphi\cdot\int\psi$.`,
  methode: R`Pour intervertir deux intégrales : majorer par un produit $\phi_1(x)\phi_2(y)$ de fonctions intégrables, grâce à une inégalité du type $u^2+(x-u)^2\geqslant\alpha(u^2+x^2)$.`
},

{ id: "cnc24-1-p4", ...P, part: "Partie 4", level: 4, time: "50 min",
  title: "Convolutions itérées et théorème central limite",
  enonce: E4,
  decode: { donnees: [R`$\widehat{\varphi*\psi} = \widehat\varphi\,\widehat\psi$.`], but: R`Montrer que $\widehat{\phi_n}(u\sqrt{t/n})\to e^{tV_1u^2/2}$ : la convolée $n$-ième, renormalisée, se comporte comme une gaussienne.`, cles: {} },
  steps: [
    S(1, "1 et 2. Itération", R`<p>Récurrence avec 2d, 4b, 4c.</p>`, R`<p><b>1.</b> Par récurrence : $\phi_1 = \phi\in\mathbf E_1$ ; si $\phi_{n-1}\in\mathbf E_1$, $\phi_n = \phi_{n-1}*\phi\in\mathbf E$ (2d) et $\int\phi_n = \int\phi_{n-1}\cdot\int\phi = 1$ (4b).</p><p><b>2.</b> Par 4c et récurrence : $\widehat{\phi_n} = \widehat{\phi_{n-1}}\,\widehat\phi = \widehat\phi^{\,n}$.</p>`),
    S(3, "3. Le cas gaussien", R`<p>Calcule $\phi_{n+1} = \phi_n*\phi$ avec la formule de la partie 2, puis $\widehat\phi(x) = e^{x^2/(2t)}$.</p>`, R`<p>$\int f_t = \sqrt{\frac{2\pi}t}$, donc $\phi = \sqrt{\frac t{2\pi}}f_t\in\mathbf E_1$.</p><p><b>a)</b> Montrons par récurrence $\phi_n(x) = \sqrt{\frac t{2\pi n}}e^{-t\frac{x^2}{2n}}$. Vrai pour $n = 1$. Si c'est vrai au rang $n$ :</p>$$\phi_{n+1}(x) = \frac t{2\pi\sqrt n}\int e^{-\frac t{2n}u^2-\frac t2(x-u)^2}du.$$<p>Ici $a = \frac{t(n+1)}{2n}$, $b = -tx$, $c = \frac t2x^2$, $\Delta = t^2x^2-\frac{t^2(n+1)}nx^2 = -\frac{t^2x^2}n$, $\frac\Delta{4a} = -\frac{tx^2}{2(n+1)}$, $\sqrt{\frac\pi a} = \sqrt{\frac{2\pi n}{t(n+1)}}$. D'où</p>$$\phi_{n+1}(x) = \frac t{2\pi\sqrt n}\sqrt{\frac{2\pi n}{t(n+1)}}e^{-\frac{tx^2}{2(n+1)}}$$$$= \sqrt{\frac t{2\pi(n+1)}}e^{-t\frac{x^2}{2(n+1)}}.$$<div class="sbox">$$C_n(t) = \sqrt{\frac t{2\pi n}}.$$</div><p><b>b)</b> $\widehat\phi(x) = \sqrt{\frac t{2\pi}}\int e^{-(\frac t2u^2+xu)}du = \sqrt{\frac t{2\pi}}\sqrt{\frac{2\pi}t}e^{\frac{x^2}{2t}} = e^{\frac{x^2}{2t}}$. Donc $\widehat{\phi_n}\big(u\sqrt{t/n}\big) = \big(e^{\frac{tu^2}{2tn}}\big)^n = e^{u^2/2}$ : $\nu = \frac12$.</p>`),
    S(4, "4. Moments des convolées", R`<p>Taylor-Young : $\widehat{\phi_n}(0) = 1$, $\widehat{\phi_n}'(0) = -M_{n,1}$, $\widehat{\phi_n}''(0) = M_{n,2}$. Puis développe $\widehat\phi^{\,n}$.</p>`, R`<p><b>a)</b> $\widehat{\phi_n}$ est $\mathcal C^2$ (3b) avec $\widehat{\phi_n}(0) = \int\phi_n = 1$, $\widehat{\phi_n}'(0) = -M_{n,1}$, $\widehat{\phi_n}''(0) = M_{n,2}$. Par Taylor-Young :</p>$$\widehat{\phi_n}(x) = 1-M_{n,1}x+\frac{M_{n,2}}2x^2+o(x^2).$$<p><b>b)</b> Par 2, $\widehat{\phi_n} = \widehat\phi^{\,n} = \big(1-M_{1,1}x+\frac{M_{1,2}}2x^2+o(x^2)\big)^n = 1-nM_{1,1}x+\Big(\frac{nM_{1,2}}2+\binom n2M_{1,1}^2\Big)x^2+o(x^2)$. Par unicité du développement limité :</p>$$M_{n,1} = nM_{1,1},\qquad M_{n,2} = nM_{1,2}+n(n-1)M_{1,1}^2,$$<p>donc $V_n = nM_{1,2}+n(n-1)M_{1,1}^2-n^2M_{1,1}^2 = n(M_{1,2}-M_{1,1}^2) = nV_1$.</p>`),
    S(5, "5. La limite", R`<p>$\widehat{\phi_n}(u\sqrt{t/n}) = \widehat\phi(u\sqrt{t/n})^n$ et $\ln(1+y)\sim y$.</p>`, R`<p>Avec $M_{1,1} = 0$, $V_1 = M_{1,2}$ et $\widehat\phi(y) = 1+\frac{V_1}2y^2+o(y^2)$. Pour $u$ fixé et $y_n = u\sqrt{t/n}\to0$ :</p>$$\widehat{\phi_n}(y_n) = \widehat\phi(y_n)^n = \exp\Big(n\ln\Big(1+\frac{V_1tu^2}{2n}+o\Big(\frac1n\Big)\Big)\Big)\xrightarrow[n\to+\infty]{}e^{\frac{tV_1}2u^2}.$$<p>(Pour $n$ grand, $\widehat\phi(y_n)>0$.) Dans le cas gaussien de 3, $V_1 = \frac1t$ et on retrouve $e^{u^2/2}$ : c'est une forme du <b>théorème central limite</b>.</p>`)
  ],
  piege: R`En 4b, développer $(1+h)^n$ à l'ordre $2$ : le terme $\binom n2M_{1,1}^2x^2$ vient du carré du terme d'ordre $1$.`,
  methode: R`La transformée change la convolution en produit : les moments de $\phi_n$ se lisent sur le développement limité de $\widehat\phi^{\,n}$.`
}
]);
})();

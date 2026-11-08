/* Commando X-ENS · Aller plus loin · Sujet « Poursuite de robots ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 19, kind: "probleme", qnav: true, side: true, level: 4, plus: "robot",
  sujet: "Courbe de poursuite : un robot en suit un autre",
  sujetDesc: "Le robot A avance sur l'axe des abscisses à vitesse 1 ; le robot S se dirige à chaque instant vers A, à vitesse 1 lui aussi. La distance d(t) vérifie d′ = x′ − 1, puis d·d′ = K − 2d avec K = d₀ − x₀ : on l'intègre à l'aide de la fonction W de Lambert, et d(t) → K/2. Le suiveur ne rattrape jamais A (sauf départ sur l'axe devant lui) : il se cale derrière, à distance K/2." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "rb-lambert": { t: "Fonction W de Lambert", b: R`$$x\mapsto xe^x\ :\ [-1,+\infty[\ \to\ \Big[-\frac1e,+\infty\Big[\ \text{bijective},\qquad W = (x\mapsto xe^x)^{-1}.$$<div class="sbox">$$y>0\ :\quad we^w = y\iff w = W(y).$$</div>` },
  "rb-cl": { t: "Cauchy-Lipschitz et sortie de compacts", b: R`$$\begin{gathered}F\in\mathcal C^1(\Omega)\ \Longrightarrow\ \exists!\text{ solution maximale},\\[4pt]t_0\lt\infty\ \Longrightarrow\ (t,Y(t))\text{ sort de tout compact de }\Omega.\end{gathered}$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Le robot $A$ est en $A(t) = (t,0)$. Le robot $S$, en $S(t) = (x(t),y(t))$, part de $(x_0,y_0)\neq(0,0)$ et se déplace à vitesse $1$ en direction de $A$ :</p>$$S'(t) = \frac{A(t)-S(t)}{d(t)},\qquad d(t) = \|A(t)-S(t)\| = \sqrt{(t-x)^2+y^2}.$$<p>On note $d_0 = d(0)$ et $K = d_0-x_0\geqslant0$. On veut montrer que $d(t)\to\frac K2$.</p>`;

/* Simulation */
const pursue = (x0, y0, T, N) => { let t = 0, x = x0, y = y0; const h = T / N, out = [[t, x, y]]; const F = (t, x, y) => { const d = Math.hypot(t - x, y); return [(t - x) / d, -y / d]; };
  for (let k = 0; k < N; k++) { const k1 = F(t, x, y), k2 = F(t + h / 2, x + h / 2 * k1[0], y + h / 2 * k1[1]), k3 = F(t + h / 2, x + h / 2 * k2[0], y + h / 2 * k2[1]), k4 = F(t + h, x + h * k3[0], y + h * k3[1]);
    x += h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]); y += h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]); t += h; out.push([t, x, y]); } return out; };
const tr = [[0, 2], [-1.5, 1], [1.5, 1.5], [0.5, -1.2]].map(([a, b]) => pursue(a, b, 8, 800));
const figTraj = GRAPH({ w: 460, h: 250, x: [-2, 8], y: [-1.5, 2.3], xt: [2, 4, 6, 8], yt: [-1, 1, 2], xl: "x", curves: [],
  extra: (X, Y) => { let s = `<line x1="${X(0)}" y1="${Y(0)}" x2="${X(8)}" y2="${Y(0)}" class="vk" style="stroke-width:2.4"/>` + S(X(7.8), Y(0) - 8, "A", "end", "sm");
    ["vb", "vr", "vg", "vv"].forEach((c, i) => { const p = tr[i]; s += `<path d="${p.map((q, k) => (k ? "L" : "M") + X(q[1]).toFixed(1) + " " + Y(q[2]).toFixed(1)).join("")}" class="${c}" style="fill:none;stroke-width:1.8"/><circle cx="${X(p[0][1]).toFixed(1)}" cy="${Y(p[0][2]).toFixed(1)}" r="4" class="pt"/>`;
      [2, 4, 6].forEach(t => { const q = p[t * 100]; s += `<line x1="${X(q[1]).toFixed(1)}" y1="${Y(q[2]).toFixed(1)}" x2="${X(t).toFixed(1)}" y2="${Y(0).toFixed(1)}" class="thin"/>`; }); });
    return s; } },
  R`Trajectoires du suiveur $S$ pour quatre points de départ (points blancs), $A$ partant de l'origine. Les traits fins relient $S(t)$ à $A(t)$ aux instants $t = 2,4,6$ : ils sont tangents aux trajectoires. Chaque suiveur rejoint l'axe et se cale derrière $A$.`, "Courbes de poursuite");
const figDist = GRAPH({ w: 460, h: 230, x: [0, 8], y: [0, 2.6], xt: [2, 4, 6, 8], yt: [0.5, 1, 1.5, 2, 2.5], ytl: ["0,5", "1", "1,5", "2", "2,5"], xl: "t", curves: [],
  extra: (X, Y) => { let s = ""; ["vb", "vr", "vg", "vv"].forEach((c, i) => { const p = tr[i], d0 = Math.hypot(p[0][1], p[0][2]), K = d0 - p[0][1];
      s += `<path d="${p.map((q, k) => (k ? "L" : "M") + X(q[0]).toFixed(1) + " " + Y(Math.hypot(q[0] - q[1], q[2])).toFixed(1)).join("")}" class="${c}" style="fill:none;stroke-width:1.8"/><line x1="${X(0)}" y1="${Y(K / 2).toFixed(1)}" x2="${X(8)}" y2="${Y(K / 2).toFixed(1)}" class="${c}" style="stroke-width:1;stroke-dasharray:4 4"/>`; }); return s; } },
  R`Distance $d(t)$ entre les robots (traits pleins) et sa limite $\frac K2 = \frac{d_0-x_0}2$ (pointillés de même couleur). Par exemple, pour le départ $(0,2)$ (bleu) : $d_0 = 2$, $K = 2$, $d\to1$.`, "Distance limite");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "robot-1", ...P, part: "Partie I", time: "25 min",
  title: "Mise en équation",
  enonce: PRE + R`<p><b>Partie I.</b> On considère la solution maximale, définie sur $[0,t_0[$, tant que $d>0$.</p><ol start="1">
<li>Montrer que $d\,x' = t-x$, $d\,y' = -y$ et $x'^2+y'^2 = 1$.</li>
<li>En dérivant $d^2$, montrer que $d' = x'-1$, puis que $x(t) = d(t)+t-K$.</li>
<li>En déduire que $d\,d' = K-2d$. Que se passe-t-il si $K = 0$ ? Vérifier que $2d_0-K>0$ dans tous les cas.</li></ol>`,
  decode: { donnees: [R`Équation de poursuite.`], but: R`Obtenir une équation différentielle autonome pour $d$.`, cles: {} },
  steps: [
    Q(1, "Les équations", R`<p>Écrire $S' = \frac{A-S}d$ coordonnée par coordonnée.</p>`, R`<p>Coordonnée par coordonnée : $x' = \frac{t-x}d$ et $y' = \frac{0-y}d$, d'où $dx' = t-x$ et $dy' = -y$. Et $\|S'\| = \frac{\|A-S\|}d = 1$, soit $x'^2+y'^2 = 1$.</p>`),
    Q(2, "Une intégrale première", R`<p>$2dd' = 2(x'-1)(x-t)+2yy'$, remplacer $x'-1$… et utiliser $x' = \frac{t-x}d$, $y' = -\frac yd$.</p>`, R`<p>$d^2 = (x-t)^2+y^2$, donc $dd' = (x'-1)(x-t)+yy'$. Or $(x-t)x' = -\frac{(x-t)^2}d$ et $yy' = -\frac{y^2}d$, donc</p>$$dd' = -\frac{(x-t)^2+y^2}d-(x-t) = -d+(t-x) = -d+dx'.$$<p>Comme $d>0$ : $d' = x'-1$. En intégrant de $0$ à $t$ : $d(t)-d_0 = x(t)-x_0-t$, soit $x(t) = d(t)+t-K$.</p>`),
    Q(3, "L'équation de la distance", R`<p>Reporter dans $dx' = t-x$.</p>`, R`<p>$dx' = t-x = t-(d+t-K) = K-d$ et $x' = d'+1$, donc $d(d'+1) = K-d$, soit</p><div class="sbox">$$d\,d' = K-2d.$$</div><p>Si $K = 0$ : $d_0 = x_0$, donc $y_0 = 0$ et $x_0>0$ : $S$ part sur l'axe, devant $A$, et va vers lui. Alors $dd' = -2d$, $d' = -2$, $d(t) = d_0-2t$ : ils se rencontrent en $t = \frac{d_0}2$. Sinon $K>0$, et $2d_0-K = d_0+x_0\geqslant0$ car $d_0\geqslant|x_0|$, avec égalité si et seulement si $y_0 = 0$ et $x_0\lt0$ ($S$ derrière $A$ sur l'axe) : alors $2d = K$ en $t = 0$, $d' = 0$, et la distance reste égale à $d_0 = \frac K2$. On suppose désormais $y_0\neq0$, de sorte que $2d_0-K>0$.</p>`)
  ],
  piege: R`L'équation $dd' = K-2d$ ne fait plus intervenir $t$ : c'est une équation autonome en $d$, à variables séparables, alors que le système de départ dépendait explicitement de $t$.`,
  methode: R`Pour un problème de poursuite : chercher une quantité conservée ou une relation simple (ici $d-x+t$ constant) qui découple le système.`
},

/* ===================== Partie II ===================== */
{ id: "robot-2", ...P, part: "Partie II", time: "35 min",
  title: "Résolution et distance limite",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose $y_0\neq0$, donc $K>0$ et $2d_0-K>0$. On pose $u = 2d-K$.</p><ol start="4">
<li>Montrer que tant que $u>0$ : $-u'\big(1+\frac Ku\big) = 4$, puis $u+K\ln u = u_0+K\ln u_0-4t$.</li>
<li>En déduire que $u\,e^{u/K} = e^{M-4t/K}$ avec $M = \frac{u_0}K+\ln u_0$, puis que $u(t) = K\,W\Big(\frac{e^{M-4t/K}}K\Big)$ et</li></ol>$$d(t) = \frac K2\Big(1+W\Big(\frac1Ke^{M-\frac{4t}K}\Big)\Big).$$<ol start="6">
<li>Montrer que la solution est définie sur $[0,+\infty[$ et que $d(t)\to\frac K2$.</li></ol>`,
  decode: { donnees: [R`$dd' = K-2d$, fonction de Lambert.`], but: R`Intégrer explicitement et passer à la limite.`, cles: {} },
  steps: [
    Q(4, "Séparation des variables", R`<p>$d = \frac{u+K}2$, $d' = \frac{u'}2$ ; $dd' = -u$.</p>`, R`<p>Avec $d = \frac{u+K}2$, $d' = \frac{u'}2$ et $K-2d = -u$, l'équation devient $\frac{(u+K)u'}4 = -u$, soit (pour $u>0$) $-u'\big(1+\frac Ku\big) = 4$. Une primitive du membre de gauche est $-(u+K\ln u)$, donc $u(t)+K\ln u(t) = u_0+K\ln u_0-4t$, avec $u_0 = 2d_0-K>0$.</p>`),
    Q(5, "Expression par la fonction de Lambert", R`<p>Diviser par $K$ et exponentier : $ue^{u/K} = e^{M-4t/K}$, puis $\frac uKe^{u/K} = \frac1Ke^{M-4t/K}$.</p>`, R`<p>En divisant par $K$ et en prenant l'exponentielle : $u\,e^{u/K} = \exp\big(\frac{u_0}K+\ln u_0-\frac{4t}K\big) = e^{M-4t/K}$. Donc $w = \frac uK>0$ vérifie $we^w = \frac1Ke^{M-4t/K}>0$, et par définition de $W$ : $u = K\,W\big(\frac1Ke^{M-4t/K}\big)$. Comme $d = \frac{u+K}2$ :</p>$$d(t) = \frac K2\Big(1+W\Big(\frac1Ke^{M-\frac{4t}K}\Big)\Big).$$<p>(Le livre écrit $\frac K{1+W(\cdots)}$ : c'est $\frac K2(1+W(\cdots))$.)</p>`, ["rb-lambert"]),
    Q(6, "Existence globale et limite", R`<p>Sur $[0,t_0[$, $d\in[\frac K2,d_0]$ et $u>0$ ; la solution reste dans un compact de l'ouvert $\{d>0\}$.</p>`, R`<p>Par Q5, $u(t) = KW(\cdots)>0$ et $u$ décroît (car $u'\lt0$ par Q4), donc $\frac K2\lt d(t)\leqslant d_0$ sur $[0,t_0[$. Ainsi $S(t)$ reste à distance $\geqslant\frac K2>0$ de $A(t)$ et $\|S(t)-S(0)\|\leqslant t$ : si $t_0\lt\infty$, $(t,S(t))$ resterait dans le compact $\{(t,s) : t\in[0,t_0],\ \|s-S(0)\|\leqslant t_0,\ \|s-(t,0)\|\geqslant\frac K2\}$ de l'ouvert de définition, ce qui contredit le théorème de sortie des compacts. Donc $t_0 = +\infty$.</p><p>Quand $t\to+\infty$, $\frac1Ke^{M-4t/K}\to0$ et $W$ est continue avec $W(0) = 0$, donc</p><div class="sbox">$$d(t)\xrightarrow[t\to+\infty]{}\frac K2 = \frac{d_0-x_0}2.$$</div><p>Le suiveur ne rattrape jamais $A$ (car $K>0$).</p>`, ["rb-cl", "rb-lambert"])
  ],
  piege: R`On ne peut pas diviser par $u$ sans savoir que $u$ ne s'annule pas : l'expression par $W$ montre a posteriori que $u>0$ pour tout $t$.`,
  methode: R`Équation autonome $d' = g(d)$ : séparer les variables, intégrer, puis inverser la relation obtenue (ici à l'aide de la fonction de Lambert).`
},

/* ===================== Partie III ===================== */
{ id: "robot-3", ...P, part: "Partie III", time: "25 min",
  title: "Comportement de la trajectoire",
  enonce: PRE + R`<p><b>Partie III.</b> On garde $y_0\neq0$.</p><ol start="7">
<li>Montrer que $y(t) = y_0\exp\big(-\int_0^t\frac{ds}{d(s)}\big)$ et que $y(t)\to0$ exponentiellement vite.</li>
<li>Montrer que $t-x(t)\to\frac K2$ : asymptotiquement, $S$ suit $A$ sur l'axe, à distance $\frac K2$.</li>
<li>Application : $S$ part de $(0,1)$. Donner la distance limite, et la valeur de $u+K\ln u$ en fonction de $t$. À quel instant $d = 0{,}6$ ?</li></ol>`,
  decode: { donnees: [R`Partie II.`], but: R`Décrire la trajectoire asymptotique.`, cles: {} },
  steps: [
    Q(7, "La composante verticale", R`<p>$y' = -\frac yd$ est linéaire en $y$.</p>`, R`<p>$y' = -\frac1dy$ est une équation linéaire du premier ordre : $y(t) = y_0\exp\big(-\int_0^t\frac{ds}{d(s)}\big)$. Comme $d\leqslant d_0$, $\int_0^t\frac{ds}d\geqslant\frac t{d_0}$, donc $|y(t)|\leqslant|y_0|e^{-t/d_0}\to0$. En particulier $y$ garde le signe de $y_0$ : $S$ ne traverse jamais l'axe.</p>`),
    Q(8, "Le décalage horizontal", R`<p>$x = d+t-K$.</p>`, R`<p>Par Q2, $t-x(t) = K-d(t)\to K-\frac K2 = \frac K2$. Avec $y\to0$, $S(t)-A(t)\to(-\frac K2,0)$ : le suiveur se retrouve sur l'axe, derrière $A$, à distance $\frac K2$, et avance à la même vitesse.</p>${figTraj}`),
    Q(9, "Un exemple numérique", R`<p>$d_0 = 1$, $x_0 = 0$, $K = 1$, $u_0 = 1$.</p>`, R`<p>$d_0 = 1$, $K = 1-0 = 1$, $u_0 = 2d_0-K = 1$. La distance limite est $\frac12$. Par Q4, $u+\ln u = 1-4t$. Pour $d = 0{,}6$ : $u = 2\cdot0{,}6-1 = 0{,}2$, d'où $t = \frac{1-0{,}2-\ln0{,}2}4 = \frac{0{,}8+1{,}609}4\approx0{,}60$. Pour $d = 0{,}51$ : $u = 0{,}02$, $t = \frac{0{,}98+3{,}91}4\approx1{,}22$. L'écart $d-\frac K2 = \frac u2$ décroît comme $e^{-4t/K}$ (car $W(y)\sim y$ en $0$) : convergence exponentielle.</p>${figDist}`)
  ],
  piege: R`On pourrait croire que le suiveur finit par rattraper $A$ puisqu'il va « droit vers lui » ; mais à vitesse égale, sa composante utile $x'$ est strictement inférieure à $1$ tant que $y\neq0$, et il perd du terrain au départ.`,
  methode: R`Courbe de poursuite : utiliser l'invariant $d-x+t$, puis l'équation de $d$ seule ; la trajectoire se déduit ensuite des équations linéaires en $y$.`
}
]);
})();

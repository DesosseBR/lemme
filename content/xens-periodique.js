/* Commando X-ENS · Aller plus loin · Sujet « Solution périodique d'une équation différentielle périodique ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 19, kind: "probleme", qnav: true, side: true, level: 4, plus: "per",
  sujet: "Solutions périodiques d'une équation différentielle périodique",
  sujetDesc: "Pour une équation scalaire y′ = F(t, y) avec F périodique en t, l'existence d'une solution bornée entraîne l'existence d'une solution périodique. La preuve compare les solutions (deux graphes ne se croisent pas), en déduit que la suite φ(kT) est monotone, puis passe à la limite grâce à la continuité du flot. Compléments : Massera pour les équations affines, et le théorème de comparaison de Sturm." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "pe-cl": { t: "Cauchy-Lipschitz global", b: R`$$\|F(t,y)-F(t,y')\|\leqslant L\|y-y'\|\ \Longrightarrow\ \exists!\,y\text{ définie sur }\mathbb R,\ y' = F(t,y),\ y(t_0) = x_0.$$` },
  "pe-flot": { t: "Continuité du flot", b: R`$$\|\Psi(t_0,x_0,t)-\Psi(t_0,x_1,t)\|\leqslant e^{L|t-t_0|}\|x_0-x_1\|\quad(\text{Grönwall}),\qquad\Psi\text{ continue}.$$` },
  "pe-mono": { t: "Suites monotones bornées", b: R`$$(u_n)\text{ monotone bornée dans }\mathbb R\ \Longrightarrow\ (u_n)\text{ converge}.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $F : \mathbb R^2\to\mathbb R$ est de classe $\mathcal C^1$, lipschitzienne en la seconde variable, et $T$-périodique en la première : $F(t+T,y) = F(t,y)$ pour tous $(t,y)$ ($T>0$). On étudie l'équation scalaire $(E) : y' = F(t,y)$. Par Cauchy-Lipschitz global, toutes ses solutions maximales sont définies sur $\mathbb R$ ; on note $\Psi$ son flot. On veut montrer : <b>si $(E)$ admet une solution bornée, elle admet une solution $T$-périodique</b>.</p>`;

/* Figure : solutions de y' = -arctan y + cos(t)/2 qui convergent vers la solution 2π-périodique */
const rk = (y0, tmax, N) => { const F = (t, y) => -Math.atan(y) + Math.cos(t) / 2, h = tmax / N, pts = [[0, y0]]; let t = 0, y = y0; for (let k = 0; k < N; k++) { const k1 = F(t, y), k2 = F(t + h / 2, y + h / 2 * k1), k3 = F(t + h / 2, y + h / 2 * k2), k4 = F(t + h, y + h * k3); y += h / 6 * (k1 + 2 * k2 + 2 * k3 + k4); t += h; pts.push([t, y]); } return pts; };
const figConv = GRAPH({ w: 460, h: 250, x: [0, 4 * Math.PI], y: [-2.2, 2.2], xt: [Math.PI, 2 * Math.PI, 3 * Math.PI, 4 * Math.PI], xtl: ["π", "2π", "3π", "4π"], yt: [-2, -1, 1, 2], xl: "t", curves: [],
  extra: (X, Y) => { let s = ""; [[2, "b"], [-2, "g"], [1, "v"], [-1, "k"]].forEach(([y0, c]) => { const p = rk(y0, 4 * Math.PI, 400); s += `<path class="v${c}" style="fill:none;stroke-width:1.6" d="${p.map((q, k) => (k ? "L" : "M") + X(q[0]).toFixed(1) + " " + Y(q[1]).toFixed(1)).join("")}"/>`; });
    const per = rk(0.24889, 4 * Math.PI, 400); s += `<path class="vr" style="fill:none;stroke-width:2.6" d="${per.map((q, k) => (k ? "L" : "M") + X(q[0]).toFixed(1) + " " + Y(q[1]).toFixed(1)).join("")}"/>`;
    [0, 1, 2].forEach(k => { s += `<circle cx="${X(2 * k * Math.PI).toFixed(1)}" cy="${Y(0.24889).toFixed(1)}" r="4" class="ptr"/>`; });
    return s + S(X(2.6 * Math.PI), Y(0.75), "solution 2π-périodique", "middle", "sm r"); } },
  R`Solutions de $y' = -\arctan y+\frac12\cos t$ issues de $y(0)\in\{-2,-1,1,2\}$ : elles restent dans $[-2,2]$ et sont attirées par la solution $2\pi$-périodique (rouge), qui vaut $\ell\approx0{,}249$ aux instants $2k\pi$ (points). La limite $\ell$ est celle de la suite $\varphi(2k\pi)$ de la Partie II.`, "Solutions attirées par l'orbite périodique");

/* Figure : comparaison de Sturm */
const figSturm = GRAPH({ w: 460, h: 220, x: [0, 7], y: [-1.3, 1.3], xt: [Math.PI / 2, Math.PI, 3 * Math.PI / 2, 2 * Math.PI], xtl: ["π/2", "π", "3π/2", "2π"], yt: [-1, 1], xl: "t",
  curves: [{ f: t => Math.sin(t), c: "b", lab: [0.2, -0.7, "sin t   (q = 1)"] }, { f: t => Math.sin(2 * t), c: "r", dash: true, lab: [5.6, 1.12, "sin 2t   (q = 4)"] }] },
  R`$y'' + qy = 0$ avec $q$ constant : les zéros de $\sin(\mu t)$ sont espacés de $\frac\pi\mu$. Plus $q$ est grand, plus la solution oscille. Le théorème de Sturm (Q9) dit que c'est encore vrai pour $q$ variable : si $q\leqslant\mu^2$, deux zéros consécutifs sont à distance $\geqslant\frac\pi\mu$.`, "Comparaison de Sturm");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "per-1", ...P, part: "Partie I", time: "25 min",
  title: "Les graphes des solutions ne se croisent pas",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Soient $f,g$ deux solutions de $(E)$ et $t_0\in\mathbb R$ avec $f(t_0)\lt g(t_0)$. Montrer que $f(t)\lt g(t)$ pour tout $t\in\mathbb R$.</li>
<li>Soit $\varphi$ une solution de $(E)$. Montrer que $\varphi_T : t\mapsto\varphi(t+T)$ est encore une solution de $(E)$.</li>
<li>Montrer que la suite $\big(\varphi(kT)\big)_{k\in\mathbb N}$ est monotone. (Distinguer trois cas selon la position de $\varphi(T)$ par rapport à $\varphi(0)$.)</li></ol>`,
  decode: { donnees: [R`Unicité de Cauchy-Lipschitz, $T$-périodicité de $F$ en $t$.`], but: R`Montrer que les solutions sont ordonnées, et en déduire la monotonie de $\varphi(kT)$.`, cles: {} },
  steps: [
    Q(1, "Pas de croisement", R`<p>Par l'absurde, valeurs intermédiaires appliquées à $f-g$.</p>`, R`<p>Supposons qu'il existe $t_1$ avec $f(t_1)\geqslant g(t_1)$. La fonction $\delta = f-g$ est continue, $\delta(t_0)\lt0$ et $\delta(t_1)\geqslant0$. Par le théorème des valeurs intermédiaires, il existe $u$ entre $t_0$ et $t_1$ avec $\delta(u) = 0$, soit $f(u) = g(u)$.</p><p>Alors $f$ et $g$ sont deux solutions de $(E)$ qui prennent la même valeur en $u$ : par l'unicité de Cauchy-Lipschitz, $f = g$ sur $\mathbb R$, ce qui contredit $f(t_0)\lt g(t_0)$. Donc $f(t)\lt g(t)$ pour tout $t$.</p>`, ["pe-cl"]),
    Q(2, "Décalage d'une période", R`<p>Dériver $\varphi(t+T)$ et utiliser $F(t+T,\cdot) = F(t,\cdot)$.</p>`, R`<p>$\varphi_T$ est dérivable et, pour tout $t$,</p>$$\varphi_T'(t) = \varphi'(t+T) = F\big(t+T,\varphi(t+T)\big) = F\big(t,\varphi_T(t)\big),$$<p>par $T$-périodicité de $F$ en la première variable. Donc $\varphi_T$ est solution de $(E)$, définie sur $\mathbb R$.</p>`),
    Q(3, "Monotonie de φ(kT)", R`<p>Comparer $\varphi$ et $\varphi_T$ en $t = 0$, puis évaluer en $t = kT$.</p>`, R`<p>On compare les deux solutions $\varphi$ et $\varphi_T$, qui valent respectivement $\varphi(0)$ et $\varphi(T)$ en $0$.</p><ul><li>Si $\varphi(0) = \varphi(T) = \varphi_T(0)$ : par unicité, $\varphi = \varphi_T$, donc $\varphi$ est $T$-périodique et $\big(\varphi(kT)\big)$ est constante.</li><li>Si $\varphi(0)\lt\varphi_T(0)$ : par Q1, $\varphi(t)\lt\varphi_T(t)$ pour tout $t$ ; en $t = kT$, $\varphi(kT)\lt\varphi\big((k+1)T\big)$ : la suite est strictement croissante.</li><li>Si $\varphi(0)>\varphi_T(0)$ : de même, elle est strictement décroissante.</li></ul><p>Dans tous les cas, $\big(\varphi(kT)\big)_k$ est monotone.</p>`)
  ],
  piege: R`Q1 est un argument de dimension $1$ : dans $\mathbb R^n$ ($n\geqslant2$), deux trajectoires peuvent « se contourner » sans se rencontrer, et il n'y a plus d'ordre pour parler de suite monotone.`,
  methode: R`Unicité de Cauchy-Lipschitz en dimension $1$ : deux solutions distinctes ont des graphes disjoints, donc restent dans le même ordre. Combinée à l'invariance par translation de $T$, elle donne une suite monotone.`
},

/* ===================== Partie II ===================== */
{ id: "per-2", ...P, part: "Partie II", time: "30 min",
  title: "Passage à la limite et existence de la solution périodique",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose que $(E)$ a une solution $\varphi$ bornée sur $\mathbb R_+$.</p><ol start="4">
<li>Montrer que $\big(\varphi(kT)\big)$ converge vers un réel $\ell$, et que pour tout $k\in\mathbb N$ et tout $t\in\mathbb R$ : $\varphi(kT+t) = \Psi\big(0,\varphi(kT),t\big)$.</li>
<li>En déduire que $t\mapsto\Psi(0,\ell,t)$ est une solution $T$-périodique de $(E)$.</li>
<li>Application : $y' = -\arctan y+\frac12\cos t$. Vérifier que $F$ satisfait le cadre (avec $T = 2\pi$), montrer que la solution issue de $y(0) = 0$ reste dans $[-1,1]$ pour $t\geqslant0$, et conclure.</li></ol>`,
  decode: { donnees: [R`$\big(\varphi(kT)\big)$ monotone (Partie I).`], but: R`Construire la solution périodique comme limite des translatées de $\varphi$.`, cles: {} },
  steps: [
    Q(4, "Convergence et réécriture par le flot", R`<p>Suite monotone bornée. Pour l'égalité : les deux membres sont solutions de $(E)$ et coïncident en $t = 0$.</p>`, R`<p>Par Q3, $\big(\varphi(kT)\big)$ est monotone ; elle est bornée car $\varphi$ l'est sur $\mathbb R_+$. Elle converge donc vers un réel $\ell$.</p><p>Fixons $k$. Par Q2 itérée, $t\mapsto\varphi(kT+t)$ est solution de $(E)$ ; elle vaut $\varphi(kT)$ en $t = 0$. Par définition du flot, $t\mapsto\Psi(0,\varphi(kT),t)$ est aussi solution de $(E)$ et vaut $\varphi(kT)$ en $0$. Par unicité :</p>$$\forall t\in\mathbb R,\quad\varphi(kT+t) = \Psi\big(0,\varphi(kT),t\big).$$`, ["pe-mono", "pe-cl"]),
    Q(5, "La solution limite est périodique", R`<p>Écrire $\varphi(kT+t+T)$ de deux façons, puis faire $k\to+\infty$ grâce à la continuité de $\Psi$ en $x_0$.</p>`, R`<p>Soit $t\in\mathbb R$. Par Q4 appliquée aux rangs $k$ et $k+1$ :</p>$$\begin{aligned}\Psi\big(0,\varphi(kT),t+T\big) &= \varphi(kT+t+T) = \varphi\big((k+1)T+t\big)\\&= \Psi\big(0,\varphi((k+1)T),t\big).\end{aligned}$$<p>Quand $k\to+\infty$, $\varphi(kT)\to\ell$ et $\varphi((k+1)T)\to\ell$. Par continuité de $x_0\mapsto\Psi(0,x_0,s)$ (pour $s = t+T$ et $s = t$) :</p><div class="sbox">$$\Psi(0,\ell,t+T) = \Psi(0,\ell,t)\quad\text{pour tout }t\in\mathbb R.$$</div><p>La solution $y_\ell = \Psi(0,\ell,\cdot)$ de $(E)$ est donc $T$-périodique. Remarquons que seule la bornitude de $\varphi$ sur $\mathbb R_+$ a servi.</p>`, ["pe-flot"]),
    Q(6, "Un exemple", R`<p>$\arctan$ est $1$-lipschitzienne. En $y = 1$ : $y'\leqslant-\frac\pi4+\frac12\lt0$. En $y = -1$ : $y'\geqslant\frac\pi4-\frac12>0$.</p>`, R`<p><b>Cadre.</b> $F(t,y) = -\arctan y+\frac12\cos t$ est $\mathcal C^1$, $2\pi$-périodique en $t$, et $|F(t,y)-F(t,y')| = |\arctan y-\arctan y'|\leqslant|y-y'|$ (inégalité des accroissements finis, $|\arctan'|\leqslant1$).</p><p><b>Piégeage.</b> Soit $y$ la solution avec $y(0) = 0$. Supposons que $y$ sorte de $[-1,1]$ sur $\mathbb R_+$, et soit $t_1 = \inf\{t\geqslant0 : |y(t)|>1\}$. Alors $|y|\leqslant1$ sur $[0,t_1]$, $|y(t_1)| = 1$ et $t_1>0$. Si $y(t_1) = 1$ : $y'(t_1) = -\frac\pi4+\frac12\cos t_1\leqslant-\frac\pi4+\frac12\lt0$, donc $y>1$ juste avant $t_1$, ce qui est exclu. Le cas $y(t_1) = -1$ est symétrique ($y'(t_1)\geqslant\frac\pi4-\frac12>0$). Donc $|y(t)|\leqslant1$ pour tout $t\geqslant0$.</p><p><b>Conclusion.</b> Par Q5, l'équation a une solution $2\pi$-périodique, à valeurs dans $[-1,1]$ (limite de solutions qui y restent). Numériquement, $\ell\approx0{,}249$, proche de la solution périodique $\frac14(\cos t+\sin t)$ du linéarisé $y' = -y+\frac12\cos t$.</p>${figConv}`)
  ],
  piege: R`Sans solution bornée, la conclusion tombe : $y' = 1$ (avec $F$ constante, donc périodique) n'a que les solutions $t+c$, aucune n'est périodique.`,
  methode: R`Solution périodique comme point fixe de l'application de Poincaré $P : x\mapsto\Psi(0,x,T)$ : ici $\varphi((k+1)T) = P(\varphi(kT))$, la suite est monotone et converge vers un point fixe $\ell$ de $P$ (continue), et $P(\ell) = \ell$ signifie exactement que la solution issue de $\ell$ est $T$-périodique.`
},

/* ===================== Partie III ===================== */
{ id: "per-3", ...P, part: "Partie III", time: "30 min",
  title: "Le cas affine (Massera) et la comparaison de Sturm",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>On note $P(x) = \Psi(0,x,T)$ (application de Poincaré). Montrer que $(E)$ a une solution $T$-périodique si et seulement si $P$ a un point fixe.</li>
<li>(<b>Massera, dimension 1</b>) Soient $a,b : \mathbb R\to\mathbb R$ continues $T$-périodiques, et $(E') : y' = a(t)y+b(t)$. Montrer que $P$ est affine, $P(x) = \alpha x+\beta$ avec $\alpha>0$. En déduire que si $(E')$ a une solution bornée sur $\mathbb R_+$, elle a une solution $T$-périodique.</li>
<li>(<b>Sturm</b>) Soit $q$ continue sur un intervalle $I$ avec $q\leqslant\mu^2$ ($\mu>0$), et $y$ une solution non nulle de $y''+q(t)y = 0$ s'annulant en $t_1\lt t_2$ consécutifs. Montrer que $t_2-t_1\geqslant\frac\pi\mu$. (Comparer avec $z(t) = \sin\mu(t-t_1)$ à l'aide du wronskien $W = y'z-yz'$.)</li></ol>`,
  decode: { donnees: [R`Flot, équations affines.`], but: R`Reformuler par l'application de Poincaré ; traiter le cas affine directement ; une comparaison d'oscillation.`, cles: {} },
  steps: [
    Q(7, "Solutions périodiques et points fixes", R`<p>Sens réciproque : $t\mapsto y(t+T)$ et $y$ sont deux solutions égales en $0$.</p>`, R`<p>Si $y$ est solution $T$-périodique, $x = y(0)$ vérifie $P(x) = y(T) = y(0) = x$.</p><p>Réciproquement, si $P(x) = x$, soit $y = \Psi(0,x,\cdot)$. Par Q2, $t\mapsto y(t+T)$ est solution, et vaut $y(T) = P(x) = x = y(0)$ en $0$. Par unicité, $y(t+T) = y(t)$ pour tout $t$ : $y$ est $T$-périodique.</p>`),
    Q(8, "Le cas affine", R`<p>Variation de la constante : $y(t) = e^{A(t)}\big(x+\int_0^te^{-A(s)}b(s)\,ds\big)$, $A(t) = \int_0^ta$.</p>`, R`<p>Avec $A(t) = \int_0^ta(s)\,ds$, la solution valant $x$ en $0$ est $y(t) = e^{A(t)}\big(x+\int_0^te^{-A(s)}b(s)\,ds\big)$. Donc</p>$$P(x) = \alpha x+\beta,\qquad\alpha = e^{A(T)}>0,\qquad\beta = e^{A(T)}\int_0^Te^{-A(s)}b(s)\,ds.$$<p>Si $\alpha\neq1$, $P$ a le point fixe $\frac\beta{1-\alpha}$. Si $\alpha = 1$ et $\beta = 0$, $P = \mathrm{id}$ : tout point est fixe. Reste $\alpha = 1$, $\beta\neq0$ : alors $P^k(x) = x+k\beta$, donc toute solution vérifie $y(kT) = y(0)+k\beta\to\pm\infty$, et aucune n'est bornée sur $\mathbb R_+$. Par contraposée, une solution bornée sur $\mathbb R_+$ force un point fixe de $P$, donc (Q7) une solution $T$-périodique.</p><p>Ici $F(t,y) = a(t)y+b(t)$ est lipschitzienne en $y$ de constante $\max_{[0,T]}|a|$ (et $a$ est bornée par périodicité). C'est la version scalaire du théorème de Massera, qui reste vrai pour les systèmes affines $Y' = A(t)Y+B(t)$ dans $\mathbb R^n$.</p>`),
    Q(9, "Sturm : espacement des zéros", R`<p>$W' = (\mu^2-q)yz\geqslant0$ si $y,z>0$ sur $]t_1,t_2[$ ; $W(t_1) = 0$ et $W(t_2) = y'(t_2)z(t_2)$.</p>`, R`<p>Quitte à changer $y$ en $-y$, $y>0$ sur $]t_1,t_2[$. On a $y'(t_2)\neq0$ (sinon $y(t_2) = y'(t_2) = 0$ et $y = 0$ par unicité), et $y'(t_2)\leqslant0$ car $y>0$ avant $t_2$ : donc $y'(t_2)\lt0$.</p><p>Supposons par l'absurde $t_2-t_1\lt\frac\pi\mu$. Alors $z(t) = \sin\mu(t-t_1)>0$ sur $]t_1,t_2]$, et $z'' = -\mu^2z$. Le wronskien $W = y'z-yz'$ vérifie</p>$$W' = y''z-yz'' = -qyz+\mu^2yz = (\mu^2-q)\,yz\geqslant0\ \text{sur}\ [t_1,t_2].$$<p>Or $W(t_1) = y'(t_1)z(t_1)-y(t_1)z'(t_1) = 0$ et $W(t_2) = y'(t_2)z(t_2)\lt0$ : $W$ décroît strictement entre $t_1$ et $t_2$, contradiction. Donc</p><div class="sbox">$$q\leqslant\mu^2\ \Longrightarrow\ t_2-t_1\geqslant\frac\pi\mu.$$</div><p>Symétriquement, si $q\geqslant\mu^2$, toute solution s'annule dans tout intervalle fermé de longueur $\frac\pi\mu$. (Le livre inverse le sens de l'inégalité dans le premier cas.)</p>${figSturm}`)
  ],
  piege: R`Dans Q9, il faut $t_2-t_1\lt\frac\pi\mu$ pour que $z$ reste positive sur tout $]t_1,t_2]$ : c'est exactement ce qui fait marcher l'argument par l'absurde.`,
  methode: R`Réduire l'existence d'une solution périodique à un point fixe de l'application de Poincaré. Comparer les oscillations de deux équations du second ordre par le wronskien $W = y'z-yz'$.`
}
]);
})();

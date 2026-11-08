/* Commando X-ENS · Aller plus loin · Sujet « Théorème de stabilité de Liapounov ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 19, kind: "probleme", qnav: true, side: true, level: 5, plus: "liap",
  sujet: "Stabilité des équilibres : le théorème de Liapounov",
  sujetDesc: "Si f(0) = 0 et si toutes les valeurs propres de A = Df(0) sont de partie réelle strictement négative, alors toute solution de y′ = f(y) partant assez près de 0 est définie sur [0, +∞[ et tend vers 0 exponentiellement vite. La preuve construit, à partir du système linéarisé, une forme quadratique q(x) = ∫₀^∞ ‖e^{tA}x‖² dt qui décroît le long des trajectoires (fonction de Liapounov). Exemple : le pendule amorti." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "li-exp": { t: "Décroissance de e^{tA}", b: R`<p>Si toutes les valeurs propres de $A$ sont de partie réelle $\lt0$, il existe $K,a>0$ avec $|||e^{tA}|||\leqslant Ke^{-at}$ pour $t\geqslant0$ (Dunford : exponentielles fois polynômes).</p>` },
  "li-sort": { t: "Théorème de sortie de tout compact", b: R`<p>Si $f$ est $\mathcal C^1$ et $y$ une solution maximale de $y' = f(y)$ définie sur $[0,d[$ avec $d\lt+\infty$, alors $y$ sort de tout compact : $\|y(t)\|\to+\infty$. Une solution maximale bornée sur $[0,d[$ est donc définie sur $[0,+\infty[$.</p>` },
  "li-gron": { t: "Lemme de type Grönwall", b: R`<p>Si $\varphi$ est dérivable et $\varphi'\leqslant-\beta\varphi$ sur $[0,T]$, alors $(e^{\beta t}\varphi)'\leqslant0$ et $\varphi(t)\leqslant\varphi(0)e^{-\beta t}$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $f : \mathbb R^n\to\mathbb R^n$ est de classe $\mathcal C^1$, $f(0) = 0$, et $A = Df(0)$ a toutes ses valeurs propres de partie réelle strictement négative. On considère $y' = f(y)$, $y(0) = y_0$, et sa solution maximale. $\mathbb R^n$ est euclidien. On veut montrer le <b>théorème de Liapounov</b> : il existe $\rho>0$ tel que si $\|y_0\|\lt\rho$, la solution est définie sur $[0,+\infty[$ et $\|y(t)\|\leqslant Ce^{-\gamma t}\|y_0\|$ ($C,\gamma>0$).</p>`;

/* Figure : portrait de phase du pendule amorti */
const figPend = (() => {
  const s = 52, cx = 200, cy = 140, X = x => (cx + s * x).toFixed(1), Y = y => (cy - s * y).toFixed(1);
  const F = ([th, w]) => [w, -0.5 * w - Math.sin(th)];
  const traj = (p) => { let d = `M${X(p[0])},${Y(p[1])}`, h = 0.02; for (let k = 0; k < 1200; k++) { const k1 = F(p), k2 = F([p[0] + h / 2 * k1[0], p[1] + h / 2 * k1[1]]), k3 = F([p[0] + h / 2 * k2[0], p[1] + h / 2 * k2[1]]), k4 = F([p[0] + h * k3[0], p[1] + h * k3[1]]); p = [p[0] + h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), p[1] + h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])]; d += `L${X(p[0])},${Y(p[1])}`; } return d; };
  let b = `<line x1="${X(-3.6)}" y1="${Y(0)}" x2="${X(3.6)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(-2.4)}" x2="${X(0)}" y2="${Y(2.4)}" class="ax"/>`;
  [[2.5, 0], [-2.5, 0], [0, 2.2], [0, -2.2], [1.5, 1.5]].forEach((p, k) => { b += `<path d="${traj(p)}" class="${["vb", "vr", "vg", "vv", "vk"][k]}" style="fill:none;stroke-width:1.5"/><circle cx="${X(p[0])}" cy="${Y(p[1])}" r="3.5" class="pt"/>`; });
  b += `<circle cx="${X(0)}" cy="${Y(0)}" r="4" class="ptr"/>` + S(+X(3.5), +Y(0) - 6, "θ", "end", "it") + S(+X(0) + 6, +Y(2.3), "θ′", "start", "it");
  return FIG(400, 280, b, R`Trajectoires du pendule amorti $\theta''+\frac12\theta'+\sin\theta = 0$ dans le plan $(\theta,\theta')$ : toutes spiralent vers l'équilibre $(0,0)$. Le linéarisé $\theta''+\frac12\theta'+\theta = 0$ a des valeurs propres $-\frac14\pm i\frac{\sqrt{15}}4$, de partie réelle $\lt0$.`, "Pendule amorti");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "liap-1", ...P, part: "Partie I", time: "30 min",
  title: "Une forme quadratique adaptée au linéarisé",
  enonce: PRE + R`<p><b>Partie I.</b> Pour $x,y\in\mathbb R^n$, on pose $B(x,y) = \int_0^{+\infty}\langle e^{tA}x,e^{tA}y\rangle\,dt$ et $q(x) = B(x,x)$.</p><ol start="1">
<li>Montrer que $B$ est bien définie, bilinéaire, symétrique, définie positive. On note $\|x\|_q = \sqrt{q(x)}$, et $u>0$ tel que $u\|x\|_q\leqslant\|x\|$.</li>
<li>Montrer que $2B(x,Ax) = -\|x\|^2$. (Dériver $t\mapsto\|e^{tA}x\|^2$.)</li>
<li>En déduire que pour une solution $z$ du système linéaire $z' = Az$ : $\frac d{dt}q(z(t)) = -\|z(t)\|^2\leqslant-u^2q(z(t))$, puis $\|z(t)\|_q\leqslant e^{-u^2t/2}\|z(0)\|_q$.</li>
<li>Exprimer la matrice $S$ de $q$ ($q(x) = {}^txSx$) par une intégrale, et montrer que $\,{}^tAS+SA = -I_n$ (équation de Lyapunov).</li></ol>`,
  decode: { donnees: [R`$|||e^{tA}|||\leqslant Ke^{-at}$.`], but: R`Construire une norme pour laquelle les solutions du linéarisé décroissent strictement.`, cles: {} },
  steps: [
    Q(1, "Une forme définie positive", R`<p>$|\langle e^{tA}x,e^{tA}y\rangle|\leqslant K^2e^{-2at}\|x\|\|y\|$.</p>`, R`<p>Par Cauchy-Schwarz et le rappel, $|\langle e^{tA}x,e^{tA}y\rangle|\leqslant K^2e^{-2at}\|x\|\|y\|$, intégrable : $B$ est bien définie, bilinéaire et symétrique (linéarité de l'intégrale). $q(x) = \int_0^{+\infty}\|e^{tA}x\|^2dt\geqslant0$ ; si $q(x) = 0$, la fonction continue positive $t\mapsto\|e^{tA}x\|^2$ est nulle, en particulier en $t = 0$ : $x = 0$. $\|\cdot\|_q$ est une norme euclidienne, et par équivalence des normes il existe $u>0$ avec $u\|x\|_q\leqslant\|x\|$.</p>`, ["li-exp"]),
    Q(2, "L'identité fondamentale", R`<p>$\frac d{dt}\|e^{tA}x\|^2 = 2\langle e^{tA}x,e^{tA}Ax\rangle$, intégrer de $0$ à $+\infty$.</p>`, R`<p>$\frac d{dt}\|e^{tA}x\|^2 = 2\langle e^{tA}x,Ae^{tA}x\rangle = 2\langle e^{tA}x,e^{tA}Ax\rangle$ ($A$ commute avec $e^{tA}$). En intégrant sur $[0,T]$ et en faisant $T\to+\infty$ ($e^{TA}x\to0$) :</p><div class="sbox">$$2B(x,Ax) = \Big[\|e^{tA}x\|^2\Big]_0^{+\infty} = -\|x\|^2.$$</div>`),
    Q(3, "Décroissance pour le linéarisé", R`<p>$\frac d{dt}B(z,z) = 2B(z,z') = 2B(z,Az)$.</p>`, R`<p>$\frac d{dt}q(z(t)) = 2B(z(t),z'(t)) = 2B(z,Az) = -\|z(t)\|^2\leqslant-u^2q(z(t))$. Par le rappel, $q(z(t))\leqslant e^{-u^2t}q(z(0))$, soit $\|z(t)\|_q\leqslant e^{-u^2t/2}\|z(0)\|_q$.</p>`, ["li-gron"]),
    Q(4, "L'équation de Lyapunov", R`<p>$q(x) = {}^tx\Big(\int_0^{+\infty}{}^te^{tA}e^{tA}dt\Big)x$ ; polariser Q2.</p>`, R`<p>$q(x) = \int{}^tx\,{}^t(e^{tA})e^{tA}x\,dt = {}^txSx$ avec $S = \int_0^{+\infty}e^{t\,{}^tA}e^{tA}dt\in\mathcal S_n^{++}$. Q2 s'écrit $2\,{}^txSAx = -{}^txx$, soit $\,{}^tx({}^tAS+SA)x = -{}^txx$ pour tout $x$ ; les deux matrices étant symétriques, $\,{}^tAS+SA = -I_n$.</p>`)
  ],
  piege: R`La norme euclidienne usuelle ne décroît pas forcément le long des solutions de $z' = Az$ (penser à $A = \begin{pmatrix}-1&4\\0&-1\end{pmatrix}$, avec une croissance transitoire). Il faut une norme adaptée à $A$, et c'est $\|\cdot\|_q$.`,
  methode: R`Fonction de Liapounov quadratique : $q(x) = \int_0^\infty\|e^{tA}x\|^2dt$, solution de $\,{}^tAS+SA = -I$ ; elle décroît strictement le long des trajectoires du linéarisé.`
},

/* ===================== Partie II ===================== */
{ id: "liap-2", ...P, part: "Partie II", time: "35 min",
  title: "Le cas non linéaire",
  enonce: PRE + R`<p><b>Partie II.</b> On pose $r(x) = f(x)-Ax$, et on garde $B$, $q$, $u$ de la Partie I.</p><ol start="5">
<li>Montrer que $r(x) = o(\|x\|_q)$ en $0$, et qu'il existe $\alpha>0$ tel que $\|r(x)\|_q\leqslant\frac{u^2}4\|x\|_q$ pour $\|x\|_q\leqslant\alpha$.</li>
<li>Montrer que tant que $\|y(t)\|_q\leqslant\alpha$ : $\frac d{dt}q(y(t))\leqslant-\frac{u^2}2q(y(t))$.</li>
<li>On suppose $\|y_0\|_q\lt\alpha$. Montrer par l'absurde que $\|y(t)\|_q\lt\alpha$ pour tout $t\geqslant0$ de l'intervalle de définition, puis que $y$ est définie sur $[0,+\infty[$.</li>
<li>Conclure : $\|y(t)\|_q\leqslant e^{-u^2t/4}\|y_0\|_q$, et énoncer le théorème avec la norme euclidienne.</li></ol>`,
  decode: { donnees: [R`$2B(x,Ax) = -\|x\|^2\leqslant-u^2q(x)$.`], but: R`Le terme non linéaire $r$ est négligeable près de $0$ : il ne détruit pas la décroissance de $q$.`, cles: {} },
  steps: [
    Q(5, "Le reste est petit", R`<p>Différentiabilité en $0$, puis équivalence des normes.</p>`, R`<p>$f$ est différentiable en $0$, $f(0) = 0$ : $f(x) = Ax+o(\|x\|)$, soit $r(x) = o(\|x\|)$, et par équivalence des normes $r(x) = o(\|x\|_q)$, au sens $\|r(x)\|_q = o(\|x\|_q)$. Avec $\varepsilon = \frac{u^2}4$, il existe $\alpha>0$ tel que $\|x\|_q\leqslant\alpha\Rightarrow\|r(x)\|_q\leqslant\frac{u^2}4\|x\|_q$.</p>`),
    Q(6, "Décroissance de q le long des solutions", R`<p>$\frac d{dt}q(y) = 2B(y,Ay)+2B(y,r(y))$ ; Cauchy-Schwarz pour $B$.</p>`, R`<p>$\frac d{dt}q(y(t)) = 2B(y,f(y)) = 2B(y,Ay)+2B(y,r(y))$. Le premier terme vaut $-\|y\|^2\leqslant-u^2q(y)$. Le second, par Cauchy-Schwarz pour le produit scalaire $B$ : $|2B(y,r(y))|\leqslant2\|y\|_q\|r(y)\|_q\leqslant\frac{u^2}2\|y\|_q^2$ si $\|y\|_q\leqslant\alpha$. D'où</p><div class="sbox">$$\frac d{dt}q(y(t))\leqslant-u^2q(y)+\frac{u^2}2q(y) = -\frac{u^2}2q(y(t)).$$</div>`),
    Q(7, "La trajectoire reste piégée", R`<p>Premier instant $t_0$ où $\|y\|_q = \alpha$ ; sur $[0,t_0]$, $q(y)$ décroît.</p>`, R`<p>Supposons qu'il existe $t$ avec $\|y(t)\|_q\geqslant\alpha$ ; par continuité, $t_0 = \inf\{t\geqslant0 : \|y(t)\|_q = \alpha\}$ existe, $t_0>0$ et $\|y\|_q\leqslant\alpha$ sur $[0,t_0]$. Par Q6, $q(y)$ est décroissante sur $[0,t_0]$, donc $q(y(t_0))\leqslant q(y_0)\lt\alpha^2$ : contradiction avec $\|y(t_0)\|_q = \alpha$.</p><p>Ainsi $y$ reste dans la boule compacte $\{\|x\|_q\leqslant\alpha\}$ ; par le théorème de sortie de tout compact, elle est définie sur $[0,+\infty[$.</p>`, ["li-sort"]),
    Q(8, "Décroissance exponentielle", R`<p>Grönwall avec $\beta = \frac{u^2}2$.</p>`, R`<p>Q6 vaut pour tout $t\geqslant0$ ; par le rappel, $q(y(t))\leqslant e^{-u^2t/2}q(y_0)$, soit $\|y(t)\|_q\leqslant e^{-u^2t/4}\|y_0\|_q$. Avec $c_1\|x\|\leqslant\|x\|_q\leqslant c_2\|x\|$ :</p><div class="sbox"><p>Pour $\|y_0\|\lt\rho = \frac\alpha{c_2}$, la solution est globale sur $[0,+\infty[$ et $\|y(t)\|\leqslant\frac{c_2}{c_1}e^{-u^2t/4}\|y_0\|$ : $0$ est un équilibre <b>asymptotiquement stable</b>.</p></div>`, ["li-gron"])
  ],
  piege: R`On ne peut pas appliquer Grönwall avant d'avoir montré que la trajectoire reste dans la boule où l'estimation de Q6 est valable : c'est l'argument du premier instant de sortie (Q7) qui le garantit.`,
  methode: R`Stabilité par linéarisation : construire une fonction de Liapounov pour le linéarisé, montrer qu'elle reste une fonction de Liapounov pour le système non linéaire près de l'équilibre (le reste est $o(\|x\|)$), puis piéger la trajectoire.`
},

/* ===================== Partie III ===================== */
{ id: "liap-3", ...P, part: "Partie III", time: "30 min",
  title: "Exemples et limites",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="9">
<li>(<b>Pendule amorti</b>) $\theta''+k\theta'+\sin\theta = 0$ ($k>0$). Écrire le système d'ordre $1$, calculer la jacobienne en $(0,0)$ et ses valeurs propres, et conclure. Que dire de l'équilibre $(\pi,0)$ ?</li>
<li>Montrer que le théorème ne conclut pas quand une valeur propre est de partie réelle nulle : étudier $y' = -y^3$ et $y' = y^3$ en dimension $1$.</li>
<li>Pour $f(x,y) = \big(e^{-x-y}\cos(x+y)-1,\ -e^{y-x}\cos y+1\big)$, calculer $Df(0,0)$ et conclure sur la stabilité de $(0,0)$.</li></ol>`,
  decode: { donnees: [R`Théorème de Liapounov.`], but: R`Appliquer le critère sur la jacobienne, et voir ses limites.`, cles: {} },
  steps: [
    Q(9, "Le pendule amorti", R`<p>$Y = (\theta,\omega)$, $f(\theta,\omega) = (\omega,-k\omega-\sin\theta)$. Polynôme caractéristique $X^2+kX+1$.</p>`, R`<p>$f(\theta,\omega) = (\omega,\ -k\omega-\sin\theta)$, $f(0,0) = 0$ et</p>$$Df(0,0) = \begin{pmatrix}0&1\\-1&-k\end{pmatrix},\qquad\chi = X^2+kX+1.$$<p>Les racines ont pour produit $1$ et pour somme $-k\lt0$ : si $k\lt2$, $-\frac k2\pm i\frac{\sqrt{4-k^2}}2$ ; si $k\geqslant2$, deux réels négatifs. Dans tous les cas, partie réelle $\lt0$ : <b>$(0,0)$ est asymptotiquement stable</b>. En $(\pi,0)$ : $Df = \begin{pmatrix}0&1\\1&-k\end{pmatrix}$, $\chi = X^2+kX-1$, de racines de produit $-1$ : une est $>0$. Le pendule à l'envers est instable (on l'admet : une valeur propre de partie réelle $>0$ entraîne l'instabilité).</p>${figPend}`),
    Q(10, "Un cas douteux", R`<p>$Df(0) = 0$ dans les deux cas. Résoudre explicitement.</p>`, R`<p>Pour $f(y) = \mp y^3$, $f'(0) = 0$ : la valeur propre $0$ est de partie réelle nulle, le théorème ne s'applique pas. Résolution : $y' = -y^3$ donne $y(t) = \frac{y_0}{\sqrt{1+2y_0^2t}}\to0$ (stable, mais décroissance en $\frac1{\sqrt t}$, pas exponentielle). $y' = y^3$ donne $y(t) = \frac{y_0}{\sqrt{1-2y_0^2t}}$, qui explose en $t = \frac1{2y_0^2}$ : instable. Le linéarisé ($y' = 0$) ne permet pas de distinguer.</p>`),
    Q(11, "Un exemple du plan", R`<p>Développer à l'ordre $1$ : $e^{-x-y}\cos(x+y)\approx1-x-y$, $e^{y-x}\cos y\approx1+y-x$.</p>`, R`<p>À l'ordre $1$ : $e^{-x-y}\cos(x+y)-1 = -x-y+o(\|(x,y)\|)$ et $-e^{y-x}\cos y+1 = -(1+y-x)+1+o = x-y+o$. Donc</p>$$Df(0,0) = \begin{pmatrix}-1&-1\\1&-1\end{pmatrix},\qquad\chi = (X+1)^2+1,$$$$\text{valeurs propres }-1\pm i.$$<p>Parties réelles $-1\lt0$ : $(0,0)$ est asymptotiquement stable, les trajectoires proches spiralent vers $0$ (rotation $\pm i$) en $e^{-t}$ environ.</p>`)
  ],
  piege: R`Le théorème est local : il ne dit rien des conditions initiales loin de l'équilibre (le pendule lancé assez fort fait des tours complets avant de s'arrêter, éventuellement en un autre équilibre stable $(2\pi,0)$).`,
  methode: R`Étudier la stabilité d'un équilibre : calculer la jacobienne en ce point ; si toutes les valeurs propres ont une partie réelle $\lt0$, il est asymptotiquement stable ; si l'une est $>0$, instable ; si des parties réelles sont nulles, le linéarisé ne conclut pas.`
}
]);
})();

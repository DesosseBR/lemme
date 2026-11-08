/* Commando X-ENS · Aller plus loin · Sujet « Théorème de Lax-Milgram ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 19, kind: "probleme", qnav: true, side: true, level: 5, plus: "lax",
  sujet: "Le théorème de Lax-Milgram",
  sujetDesc: "Dans un espace de Hilbert, toute forme linéaire continue est un produit scalaire (Riesz). Si a(·,·) est bilinéaire continue et coercive, l'équation a(u, v) = φ(v) pour tout v a une unique solution, obtenue comme point fixe d'une contraction (Picard). On en tire des applications : matrices « coercives », et la résolution faible du problème −u″ + u = f, u(0) = u(1) = 0." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "lm-proj": { t: "Projection sur un sous-espace fermé (admis)", b: R`<p>Si $F$ est un sous-espace fermé d'un espace de Hilbert $H$, alors $H = F\oplus F^\perp$. En particulier, si $F\neq H$, $F^\perp\neq\{0\}$.</p>` },
  "lm-pic": { t: "Théorème de Picard", b: R`<p>Une application $k$-lipschitzienne avec $k\lt1$ d'un espace métrique complet dans lui-même a un unique point fixe, limite de toute suite itérée.</p>` },
  "lm-cont": { t: "Continuité des formes", b: R`<p>Une forme bilinéaire $a$ est continue si et seulement s'il existe $M$ avec $|a(u,v)|\leqslant M\|u\|\|v\|$ ; elle est <b>coercive</b> s'il existe $\mu>0$ avec $a(u,u)\geqslant\mu\|u\|^2$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $H$ est un espace de Hilbert réel (préhilbertien complet), de produit scalaire $\langle\cdot,\cdot\rangle$. $a : H\times H\to\mathbb R$ est une forme bilinéaire <b>continue</b> ($|a(u,v)|\leqslant M\|u\|\|v\|$) et <b>coercive</b> ($a(u,u)\geqslant\mu\|u\|^2$, $\mu>0$), non nécessairement symétrique ; $\varphi$ est une forme linéaire continue. On veut montrer le <b>théorème de Lax-Milgram</b> : il existe un unique $u\in H$ tel que $a(u,v) = \varphi(v)$ pour tout $v\in H$.</p>`;

const figSol = GRAPH({ w: 440, h: 230, x: [0, 1], y: [-0.01, 0.13], xt: [0.25, 0.5, 0.75, 1], xtl: ["0,25", "0,5", "0,75", "1"], yt: [0.05, 0.1], ytl: ["0,05", "0,1"], xl: "x", curves: [{ f: x => 1 - Math.cosh(x - 0.5) / Math.cosh(0.5), c: "b", lab: [0.5, 0.085, "u(x) = 1 − ch(x − ½)/ch(½)", "middle"] }, { f: x => x * (1 - x) / 2, c: "r", dash: true, lab: [0.8, 0.1, "x(1−x)/2"] }] }, R`La solution de $-u''+u = 1$, $u(0) = u(1) = 0$ (bleu), et celle de $-u'' = 1$ (rouge pointillé), un peu plus grande : le terme $+u$ « rappelle » la solution vers $0$.`, "Solution du problème aux limites");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "lax-1", ...P, part: "Partie I", time: "30 min",
  title: "Le théorème de représentation de Riesz",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $\psi$ une forme linéaire continue non nulle sur $H$.</p><ol start="1">
<li>Montrer que $\ker\psi$ est un sous-espace fermé distinct de $H$, et qu'il existe $z\in(\ker\psi)^\perp$ avec $\|z\| = 1$.</li>
<li>Pour $v\in H$, montrer que $v-\frac{\psi(v)}{\psi(z)}z\in\ker\psi$, et en déduire $\psi(v) = \langle w,v\rangle$ avec $w = \psi(z)z$. Montrer l'unicité de $w$ et $\|w\| = \|\psi\|$.</li>
<li>Montrer que la complétude est nécessaire : sur $E = \mathbb R[X]$ muni de $\langle P,Q\rangle = \int_0^1PQ$, la forme $\psi(P) = \int_0^{1/2}P$ est continue mais n'est représentée par aucun polynôme. (On admettra que si $\int_0^1PW = \int_0^{1/2}P$ pour tout polynôme $P$, alors $W = \mathbf 1_{[0,1/2]}$ presque partout, par densité des polynômes dans $L^2$.)</li></ol>`,
  decode: { donnees: [R`$H = F\oplus F^\perp$ pour $F$ fermé.`], but: R`Le noyau d'une forme non nulle est un hyperplan fermé ; sa droite orthogonale porte le vecteur représentant.`, cles: {} },
  steps: [
    Q(1, "Le noyau", R`<p>Image réciproque du fermé $\{0\}$ ; projection sur un fermé.</p>`, R`<p>$\ker\psi = \psi^{-1}(\{0\})$ est fermé ($\psi$ continue), et $\neq H$ ($\psi\neq0$). Par le rappel, $(\ker\psi)^\perp\neq\{0\}$ : il contient un $z$ unitaire, et $\psi(z)\neq0$ (sinon $z\in\ker\psi\cap(\ker\psi)^\perp = \{0\}$).</p>`, ["lm-proj"]),
    Q(2, "Le vecteur représentant", R`<p>$\psi\Big(v-\frac{\psi(v)}{\psi(z)}z\Big) = 0$. Fais le produit scalaire avec $z$.</p>`, R`<p>$\psi\big(v-\frac{\psi(v)}{\psi(z)}z\big) = \psi(v)-\psi(v) = 0$. Ce vecteur est dans $\ker\psi$, donc orthogonal à $z$ :</p>$$\langle v,z\rangle-\frac{\psi(v)}{\psi(z)}\|z\|^2 = 0,$$$$\psi(v) = \psi(z)\langle v,z\rangle = \langle w,v\rangle,\quad w = \psi(z)z.$$<p><b>Unicité.</b> Si $\langle w,v\rangle = \langle w',v\rangle$ pour tout $v$, alors $v = w-w'$ donne $\|w-w'\|^2 = 0$. <b>Norme.</b> $|\psi(v)|\leqslant\|w\|\|v\|$ (Cauchy-Schwarz), avec égalité pour $v = w$ : $\|\psi\| = \|w\|$.</p><div class="sbox"><p>Toute forme linéaire continue sur $H$ s'écrit $v\mapsto\langle w,v\rangle$, pour un unique $w$.</p></div>`),
    Q(3, "La complétude est nécessaire", R`<p>$|\psi(P)|\leqslant\sqrt{\frac12}\|P\|$ (Cauchy-Schwarz).</p>`, R`<p>$|\psi(P)| = \big|\int_0^1P\mathbf 1_{[0,1/2]}\big|\leqslant\|P\|\cdot\|\mathbf 1_{[0,1/2]}\|_2 = \frac{\|P\|}{\sqrt2}$ : $\psi$ est continue. Si un polynôme $W$ représentait $\psi$, on aurait $\int_0^1P(W-\mathbf 1_{[0,1/2]}) = 0$ pour tout $P$, donc (admis) $W = \mathbf 1_{[0,1/2]}$ presque partout : impossible pour un polynôme (continu, il serait constant égal à $1$ sur $[0,\frac12[$ et à $0$ sur $]\frac12,1]$). L'espace $\mathbb R[X]$ n'est pas complet pour cette norme : sa complétion est $L^2([0,1])$, où $\psi$ est représentée par $\mathbf 1_{[0,1/2]}$.</p>`)
  ],
  piege: R`Le théorème de Riesz identifie $H$ à son dual : il dépend du produit scalaire choisi. Changer de produit scalaire change le vecteur représentant d'une même forme.`,
  methode: R`Représenter une forme linéaire : trouver la direction orthogonale à son noyau (hyperplan fermé), et normaliser.`
},

/* ===================== Partie II ===================== */
{ id: "lax-2", ...P, part: "Partie II", time: "35 min",
  title: "Lax-Milgram par un point fixe",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer qu'il existe $w\in H$ et une application linéaire $A : H\to H$ telles que $\varphi(v) = \langle w,v\rangle$ et $a(u,v) = \langle Au,v\rangle$ pour tous $u,v$. Montrer que $\|Au\|\leqslant M\|u\|$.</li>
<li>Pour $\eta>0$, soit $T(u) = u-\eta(Au-w)$. Montrer que $\|T(u)-T(v)\|^2\leqslant(1-2\eta\mu+\eta^2M^2)\|u-v\|^2$, et choisir $\eta$ pour que $T$ soit contractante.</li>
<li>Conclure. Montrer aussi la stabilité : $\|u\|\leqslant\frac{\|\varphi\|}\mu$.</li>
<li>Lorsque $a$ est symétrique, montrer que $u$ est l'unique minimum de $J(v) = \frac12a(v,v)-\varphi(v)$.</li></ol>`,
  decode: { donnees: [R`Riesz ; Picard.`], but: R`Ramener l'équation à $Au = w$, puis à un point fixe d'une contraction.`, cles: {} },
  steps: [
    Q(4, "L'opérateur A", R`<p>Pour $u$ fixé, $v\mapsto a(u,v)$ est linéaire continue : Riesz. Linéarité de $A$ par unicité.</p>`, R`<p>Riesz donne $w$ pour $\varphi$. Pour $u$ fixé, $v\mapsto a(u,v)$ est linéaire, continue ($|a(u,v)|\leqslant M\|u\|\|v\|$) : elle s'écrit $\langle Au,v\rangle$ pour un unique $Au$. Linéarité : $\langle A(u+\lambda u')-Au-\lambda Au',v\rangle = a(u+\lambda u',v)-a(u,v)-\lambda a(u',v) = 0$ pour tout $v$. Borne : $\|Au\|^2 = a(u,Au)\leqslant M\|u\|\|Au\|$, d'où $\|Au\|\leqslant M\|u\|$.</p><p>L'équation $a(u,v) = \varphi(v)$ pour tout $v$ équivaut à $\langle Au-w,v\rangle = 0$ pour tout $v$, soit $Au = w$.</p>`),
    Q(5, "Une contraction", R`<p>Développe $\|x-\eta Ax\|^2$ avec $x = u-v$ ; $\langle x,Ax\rangle = a(x,x)\geqslant\mu\|x\|^2$.</p>`, R`<p>Avec $x = u-v$ : $T(u)-T(v) = x-\eta Ax$ et</p>$$\begin{aligned}\|x-\eta Ax\|^2 &= \|x\|^2-2\eta\langle Ax,x\rangle+\eta^2\|Ax\|^2\\&\leqslant\|x\|^2-2\eta\mu\|x\|^2+\eta^2M^2\|x\|^2.\end{aligned}$$<p>Le trinôme $1-2\eta\mu+\eta^2M^2$ est minimal en $\eta = \frac\mu{M^2}$, où il vaut $1-\frac{\mu^2}{M^2}\in[0,1[$ (car $\mu\leqslant M$ : $\mu\|u\|^2\leqslant a(u,u)\leqslant M\|u\|^2$).</p><div class="sbox">$$\|T(u)-T(v)\|\leqslant\sqrt{1-\frac{\mu^2}{M^2}}\,\|u-v\|.$$</div>`),
    Q(6, "Conclusion et stabilité", R`<p>Picard. Pour la stabilité : $v = u$ dans l'équation.</p>`, R`<p>$H$ est complet et $T$ contractante : $T$ a un unique point fixe $u$, soit $Au = w$. Donc il existe un unique $u$ avec $a(u,v) = \varphi(v)$ pour tout $v$.</p><p>Avec $v = u$ : $\mu\|u\|^2\leqslant a(u,u) = \varphi(u)\leqslant\|\varphi\|\|u\|$, d'où $\|u\|\leqslant\frac{\|\varphi\|}\mu$ : la solution dépend continûment des données.</p><div class="sbox"><p><b>Lax-Milgram.</b> $a$ continue coercive, $\varphi$ continue : $\exists!\,u\in H$, $\forall v\in H$, $a(u,v) = \varphi(v)$, et $\|u\|\leqslant\frac{\|\varphi\|}\mu$.</p></div>`, ["lm-pic"]),
    Q(7, "Le cas symétrique : un problème de minimisation", R`<p>$J(u+h) = J(u)+a(u,h)-\varphi(h)+\frac12a(h,h)$.</p>`, R`<p>Si $a$ est symétrique : $J(u+h) = \frac12a(u,u)+a(u,h)+\frac12a(h,h)-\varphi(u)-\varphi(h) = J(u)+\big(a(u,h)-\varphi(h)\big)+\frac12a(h,h)$. Pour la solution $u$ de Lax-Milgram, le terme du milieu est nul, et $\frac12a(h,h)\geqslant\frac\mu2\|h\|^2>0$ pour $h\neq0$ : $u$ est l'unique minimum de $J$. (Principe de Dirichlet : l'équation est la condition d'optimalité.)</p>`)
  ],
  piege: R`La coercivité $a(u,u)\geqslant\mu\|u\|^2$ n'est pas la même chose que « $a(u,u)>0$ pour $u\neq0$ » : en dimension infinie, la seconde ne suffit pas (la borne inférieure peut tendre vers $0$).`,
  methode: R`Résoudre $Au = w$ avec $A$ « coercif » : $u\mapsto u-\eta(Au-w)$ est contractante pour $\eta$ petit (méthode de Richardson). En dimension finie, c'est aussi un algorithme numérique.`
},

/* ===================== Partie III ===================== */
{ id: "lax-3", ...P, part: "Partie III", time: "35 min",
  title: "Applications",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="8">
<li>(<b>Dimension finie</b>) Soit $B\in\mathcal M_n(\mathbb R)$ avec $\,{}^txBx\geqslant\mu\|x\|^2$. Montrer que $B$ est inversible et que $\|B^{-1}\|\leqslant\frac1\mu$. Exemple : $B = \begin{pmatrix}1&1\\-1&1\end{pmatrix}$.</li>
<li>(<b>Problème aux limites</b>) On admet que $H = H_0^1(]0,1[)$ (fonctions continues sur $[0,1]$, nulles en $0$ et $1$, de dérivée faible $u'\in L^2$) est un Hilbert pour $\langle u,v\rangle = \int_0^1(u'v'+uv)$. Pour $f\in L^2$, montrer qu'il existe un unique $u\in H$ avec $\int_0^1(u'v'+uv) = \int_0^1fv$ pour tout $v\in H$.</li>
<li>Montrer que si $u$ est $\mathcal C^2$ et vérifie $-u''+u = f$, $u(0) = u(1) = 0$, alors $u$ est la solution de Q9. Résoudre explicitement pour $f = 1$.</li></ol>`,
  decode: { donnees: [R`Lax-Milgram.`], but: R`Reconnaître une forme bilinéaire coercive, et une formulation faible d'une équation différentielle.`, cles: {} },
  steps: [
    Q(8, "Matrices coercives", R`<p>Lax-Milgram dans $\mathbb R^n$ avec $a(x,y) = {}^tyBx$.</p>`, R`<p>Avec $a(x,y) = \langle Bx,y\rangle$ (continue en dimension finie, coercive par hypothèse) et $\varphi = \langle b,\cdot\rangle$ : pour tout $b$, il existe un unique $x$ avec $Bx = b$. $B$ est bijective et $\|x\|\leqslant\frac{\|b\|}\mu$, soit $\|B^{-1}\|\leqslant\frac1\mu$. (Directement : $Bx = 0\Rightarrow\mu\|x\|^2\leqslant{}^txBx = 0$.)</p><p>Exemple : $\,{}^tx\begin{pmatrix}1&1\\-1&1\end{pmatrix}x = x_1^2+x_1x_2-x_2x_1+x_2^2 = \|x\|^2$ : $\mu = 1$, $B$ non symétrique est inversible, $B^{-1} = \frac12\begin{pmatrix}1&-1\\1&1\end{pmatrix}$, de norme $\frac1{\sqrt2}\leqslant1$. ✓</p>`),
    Q(9, "Formulation faible", R`<p>$a(u,v) = \int(u'v'+uv)$ est le produit scalaire de $H$ : $M = \mu = 1$.</p>`, R`<p>$a(u,v) = \int_0^1(u'v'+uv) = \langle u,v\rangle_H$ : bilinéaire, continue ($M = 1$), coercive ($a(u,u) = \|u\|_H^2$, $\mu = 1$). $\varphi(v) = \int fv$ est linéaire et $|\varphi(v)|\leqslant\|f\|_2\|v\|_2\leqslant\|f\|_2\|v\|_H$ : continue. Par Lax-Milgram (ici simplement Riesz), il existe un unique $u\in H$ avec</p><div class="sbox">$$\int_0^1(u'v'+uv) = \int_0^1fv\qquad\forall v\in H,\qquad\|u\|_H\leqslant\|f\|_2.$$</div>`),
    Q(10, "Solutions classiques", R`<p>Intègre par parties $\int u'v'$ avec $v(0) = v(1) = 0$.</p>`, R`<p>Si $u\in\mathcal C^2$, $-u''+u = f$, $u(0) = u(1) = 0$ : $u\in H$, et pour $v\in H$, $\int_0^1u'v' = [u'v]_0^1-\int_0^1u''v = -\int u''v$. Donc $\int(u'v'+uv) = \int(-u''+u)v = \int fv$ : $u$ est la solution faible, unique par Q9.</p><p>$f = 1$ : $u = 1+\alpha\operatorname{ch}(x-\frac12)$ (solution particulière $1$, et solutions homogènes paires par rapport à $\frac12$ par symétrie). $u(0) = 0$ donne $\alpha = -\frac1{\operatorname{ch}(1/2)}$ :</p><div class="sbox">$$u(x) = 1-\frac{\operatorname{ch}(x-\frac12)}{\operatorname{ch}\frac12}.$$</div><p>Vérification : $-u''+u = \frac{\operatorname{ch}(x-\frac12)}{\operatorname{ch}\frac12}+1-\frac{\operatorname{ch}(x-\frac12)}{\operatorname{ch}\frac12} = 1$. ✓</p>${figSol}`)
  ],
  piege: R`La formulation faible ne demande que $u'\in L^2$ : elle a une solution même si $f$ n'est pas continue (pour $f$ en escalier, la solution n'est pas $\mathcal C^2$). C'est tout l'intérêt de passer par un espace de Hilbert.`,
  methode: R`Formulation variationnelle : multiplier l'équation par une fonction test, intégrer par parties pour faire apparaître une forme bilinéaire symétrique coercive, puis appliquer Lax-Milgram (ou Riesz).`
}
]);
})();

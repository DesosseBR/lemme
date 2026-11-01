/* Topologie des espaces vectoriels normés : exercices 1.24 à 1.52 (Spé), avec figures */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 2 };
const { FIG, S, PL, GRAPH, f1 } = window.__LA;
const dot = (x, y, c = "b", r = 3.5) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" class="h${c}"/>`;
const seg = (x1, y1, x2, y2, c = "b", w = 2) => `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" class="v${c}" style="stroke-width:${w}"/>`;

/* ---------- Figures ---------- */
const figEtoile = FIG(360, 230, `<path d="M60 120 C 40 40, 150 20, 200 60 C 260 20, 340 70, 300 130 C 330 200, 220 220, 170 190 C 120 225, 50 200, 60 120 Z" class="zb"/>` + dot(170, 120, "k") + S(160, 112, "a", "end", "it") + seg(95, 70, 170, 120, "r") + seg(170, 120, 290, 175, "r") + dot(95, 70, "r") + dot(290, 175, "r") + S(88, 64, "x", "end", "it") + S(298, 188, "y", "start", "it") + S(125, 88, "t = 0 → ½", "middle", "sm r") + S(238, 160, "½ → 1", "middle", "sm r"),
  R`Une partie étoilée par rapport à $a$ : on va de $x$ à $a$ en ligne droite (pour $t\in[0,\frac12]$), puis de $a$ à $y$ (pour $t\in[\frac12,1]$). Les deux segments sont dans $A$.`, "Chemin passant par le centre a");
const figBouleN = GRAPH({ w: 380, h: 330, x: [-1.4, 1.4], y: [-2, 2], xt: [-1, 1], yt: [-1.732, -1, 1, 1.732], ytl: ["−√3", "−1", "1", "√3"], xl: "x", yl: "y",
  extra: (X, Y) => { let L = "", Rr = ""; for (let k = 0; k <= 120; k++) { const y = -Math.sqrt(3) + 2 * Math.sqrt(3) * k / 120; L += `${k ? "L" : "M"}${f1(X((y + 1) ** 2 / 4 - 1))} ${f1(Y(y))} `; Rr = `L${f1(X(1 - (y - 1) ** 2 / 4))} ${f1(Y(y))} ` + Rr; } return `<path d="${L}${Rr}Z" class="zb"/>` + S(X(0.15), Y(0.15), "B′(0 ; 1)", "middle", "sm b") + S(X(1.05), Y(1.7), "P", "start", "sm") + S(X(-1.25), Y(-1.7), "Q", "start", "sm"); } },
  R`La boule unité fermée de $N$ : la partie du plan comprise entre la parabole $P$ d'équation $x = 1-\frac{(y-1)^2}4$ et la parabole $Q$ d'équation $x = \frac{(y+1)^2}4-1$. Elles se coupent en $y = \pm\sqrt3$.`, "Boule unité de N");
const figConvexe = FIG(380, 200, `<ellipse cx="190" cy="100" rx="170" ry="85" class="zg"/>` + [[95, 105], [190, 105], [285, 105]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="38" class="zb"/>`).join("") + dot(95, 105, "k") + dot(285, 105, "k") + dot(190, 105, "r") + seg(95, 105, 285, 105, "k", 1.2) + S(95, 125, "x", "middle", "it") + S(285, 125, "y", "middle", "it") + S(190, 125, "z", "middle", "it") + S(340, 40, "C", "middle", "it"),
  R`Si $B(x,r)$ et $B(y,r)$ sont dans le convexe $C$, alors la boule $B(z,r)$ centrée en tout point $z$ du segment $[x,y]$ y est aussi : chaque point de $B(z,r)$ est une combinaison convexe d'un point de $B(x,r)$ et d'un point de $B(y,r)$.`, "Boules dans un convexe");
const figHyp = GRAPH({ w: 380, h: 260, x: [-0.6, 4.2], y: [-0.6, 4.2], xt: [1, 2, 3, 4], yt: [1, 2, 3, 4], xl: "x", yl: "y",
  curves: [{ f: x => x > 0.24 ? 1 / x : NaN, c: "b", n: 400, lab: [0.42, 3.3, "A : xy = 1"] }],
  extra: (X, Y) => seg(X(-0.6), Y(0), X(4.2), Y(0), "r", 3.5) + S(X(3.3), Y(0) - 8, "B = ℝ × {0}", "middle", "sm r") },
  R`$A$ est la branche d'hyperbole ($x>0$), $B$ l'axe des abscisses. $A+B$ est le demi-plan ouvert $y>0$ ; son adhérence est $y\geqslant0$, alors que $\overline A+\overline B = A+B$.`, "Hyperbole et axe");
const figIntervalles = (() => {
  const W = 420, rows = [["A", [[0, 1, "()"], [2, 4, "()"]]], ["B", [[1, 3, "()"]]], ["A ∩ B", [[2, 3, "()"]]], ["A ∩ adh(B)", [[2, 3, "(]"]]], ["adh(A) ∩ B", [[2, 3, "[)"]]], ["adh(A) ∩ adh(B)", [[1, 1, "pt"], [2, 3, "[]"]]], ["adh(A ∩ B)", [[2, 3, "[]"]]]];
  const X = v => 140 + v * 66; let s = "";
  [0, 1, 2, 3, 4].forEach(v => { s += S(X(v), 14, String(v), "middle", "sm"); });
  rows.forEach(([lab, ivs], i) => { const y = 34 + i * 26; s += S(100, y + 4, lab, "end", "sm b") + seg(X(0) - 8, y, X(4) + 8, y, "k", 0.6);
    ivs.forEach(([a, b, br]) => { if (br === "pt") { s += dot(X(a), y, "b", 4); return; } s += seg(X(a), y, X(b), y, "b", 4); s += br[0] === "[" ? dot(X(a), y, "b", 4) : `<circle cx="${X(a)}" cy="${y}" r="4" style="fill:var(--surface);stroke:var(--blue);stroke-width:2"/>`; s += br[1] === "]" ? dot(X(b), y, "b", 4) : `<circle cx="${X(b)}" cy="${y}" r="4" style="fill:var(--surface);stroke:var(--blue);stroke-width:2"/>`; }); });
  return FIG(W, 34 + rows.length * 26, s, R`Avec $A = \,]0,1[\,\cup\,]2,4[$ et $B = \,]1,3[$ : un point plein est inclus, un point creux est exclu. Les cinq dernières lignes sont deux à deux distinctes (adh = adhérence).`, "Les cinq ensembles");
})();
const figPhiMax = GRAPH({ w: 420, h: 230, x: [-0.05, 1.1], y: [-1.25, 1.25], xt: [0.2, 0.35, 0.7, 1], xtl: ["a₁", "a₂", "a₃", "1"], yt: [-1, 1], xl: "x",
  curves: [{ f: x => x > 1 ? NaN : x <= 0.35 ? 1 : x >= 0.7 ? -1 : 1 - 2 * (x - 0.35) / 0.35, c: "b", n: 600, lab: [0.45, 0.75, "y = f(x)"] }] },
  R`Exemple avec $p = 3$, $\lambda_1,\lambda_2\geqslant0$ et $\lambda_3< 0$ : $f$ vaut $1$ en $a_1,a_2$, $-1$ en $a_3$, est affine entre, et $|f|\leqslant1$. Alors $\phi(f) = \lambda_1+\lambda_2-\lambda_3 = \sum|\lambda_k|$.`, "Fonction qui réalise la norme");
const figCarre = FIG(420, 220, `<rect x="20" y="20" width="180" height="180" class="zb"/>` + S(14, 214, "0", "end", "sm") + S(200, 214, "1", "middle", "sm") + S(14, 26, "1", "end", "sm") + `<path d="M60 60 C 110 90, 70 150, 120 170 S 180 140, 170 120" style="fill:none;stroke:var(--red);stroke-width:2.2"/>` + dot(60, 60, "k") + dot(170, 120, "k") + dot(70, 175, "g") + S(52, 56, "a", "end", "it") + S(178, 124, "c", "start", "it") + S(78, 192, "b", "start", "it") + S(108, 110, "γ", "middle", "sm r")
  + seg(260, 120, 410, 120, "k", 1.4) + S(260, 140, "0", "middle", "sm") + S(410, 140, "1", "middle", "sm") + dot(290, 120, "r") + dot(335, 120, "g") + dot(380, 120, "r") + S(290, 108, "f(a)", "middle", "sm") + S(335, 108, "f(b)", "middle", "sm") + S(380, 108, "f(c)", "middle", "sm") + S(335, 170, "f∘γ relie f(a) à f(c)", "middle", "sm r"),
  R`Le carré privé du point $b$ reste connexe par arcs : on relie $a$ à $c$ par un chemin $\gamma$ qui évite $b$. L'image $f\circ\gamma$ est un chemin de $[0,1]$ qui va de $f(a)$ à $f(c)$, donc passe par $f(b)$.`, "Chemin évitant b dans le carré");
const figChapeau = GRAPH({ w: 420, h: 220, x: [-0.05, 1.1], y: [-0.08, 0.35], xt: [0.3, 0.55, 0.8, 1], xtl: ["α", "(α+β)/2", "β", "1"], yt: [0.25], ytl: ["(β−α)/2"], xl: "x",
  curves: [{ f: x => x > 1 ? NaN : x < 0.3 || x > 0.8 ? 0 : x < 0.55 ? x - 0.3 : 0.8 - x, c: "b", n: 600, lab: [0.6, 0.27, "f"] }],
  extra: (X, Y) => seg(X(0.3), Y(0) + 1, X(0.8), Y(0) + 1, "r", 4) + S(X(0.55), Y(0) + 26, "φ = 0 ici", "middle", "sm r") },
  R`Si $\varphi$ est nulle sur un intervalle $[\alpha,\beta]$, la fonction « chapeau » $f$, nulle hors de cet intervalle, vérifie $f\varphi = 0$ sans être nulle : $N_\varphi$ n'est pas une norme.`, "Fonction chapeau");
const figProj = FIG(360, 220, `<path d="M20 170 L120 120 L340 120 L240 170 Z" class="zb"/>` + S(40, 160, "F", "start", "it") + dot(180, 145, "k") + S(176, 162, "0", "end", "sm") + seg(180, 145, 250, 50, "k", 1.6) + seg(250, 50, 250, 140, "r", 1.6) + seg(180, 145, 250, 140, "b", 2.2) + dot(250, 50, "k") + dot(250, 140, "b") + S(256, 46, "x", "start", "it") + S(256, 154, "p_F(x)", "start", "sm b") + S(258, 96, "x − p_F(x)", "start", "sm r") + `<path d="M250 130 L240 130 L240 140" style="fill:none;stroke:var(--ink);stroke-width:1"/>`,
  R`$p_F(x)$ est le point de $F$ le plus proche de $x$, et $x-p_F(x)$ est orthogonal à $F$. Pythagore donne $\|x\|^2 = \|x-p_F(x)\|^2+\|p_F(x)\|^2$.`, "Projection orthogonale");

LEMME.rappels({
  "top-connexe": { t: "Connexité par arcs", b: R`<p>$A$ est connexe par arcs si deux points quelconques de $A$ sont reliés par un chemin continu $\gamma : [0,1]\to A$. Un convexe (et plus généralement une partie étoilée) est connexe par arcs ; l'image d'un connexe par arcs par une application continue est connexe par arcs ; dans $\mathbb R$, les connexes par arcs sont les intervalles.</p>` },
  "top-dist": { t: "Distance à une partie", b: R`<p>$d(x,A) = \inf_{a\in A}\|x-a\|$. L'application $x\mapsto d(x,A)$ est 1-lipschitzienne, et $d(x,A) = 0\iff x\in\overline A$.</p>` },
  "top-sousmult": { t: "Norme subordonnée sous-multiplicative", b: R`<p>Pour $f,g\in\mathcal L_c(E)$ : $|||g\circ f|||\leqslant|||g|||\,|||f|||$, et $\|f(x)\|\leqslant|||f|||\,\|x\|$.</p>` }
});

LEMME.exercises([
{ id: "topo-24", ...P, level: 2, time: "25 min",
  title: "Distance d'un point fixé aux termes d'une suite de Cauchy",
  enonce: R`<p>Soit $(E,\|\cdot\|)$ un espace normé, $d$ la distance associée et $(u_n)$ une suite de Cauchy.</p><p>a) Montrer que pour tout $a\in E$, la suite $\big(d(a,u_n)\big)$ converge. On note $f(a)$ sa limite.</p><p>b) Montrer que $\inf_{a\in E}f(a) = 0$, et que cette borne inférieure est atteinte si et seulement si $(u_n)$ converge.</p>`,
  decode: { donnees: [R`$|d(a,u_p)-d(a,u_q)|\leqslant d(u_p,u_q)$.`], but: R`a) suite de Cauchy réelle ; b) prendre $a = u_p$.`, cles: {} },
  steps: [
    { t: "a) Une suite de Cauchy réelle", h: R`<p>Inégalité triangulaire renversée.</p>`, b: R`<p>Par l'inégalité triangulaire (forme renversée) : $|d(a,u_p)-d(a,u_q)|\leqslant d(u_p,u_q)$. Pour $\varepsilon>0$, il existe $N$ avec $d(u_p,u_q)\leqslant\varepsilon$ pour $p,q\geqslant N$, donc $\big(d(a,u_n)\big)$ est de Cauchy dans $\mathbb R$. Comme $\mathbb R$ est complet, elle converge.</p>`, rappels: ["top-trirev", "top-cauchy"] },
    { t: "b) La borne inférieure vaut 0", h: R`<p>$f(u_p) = \lim_qd(u_p,u_q)\leqslant\varepsilon$.</p>`, b: R`<p>$f\geqslant0$. Soit $\varepsilon>0$ et $N$ comme ci-dessus. Pour $p\geqslant N$ fixé, $d(u_p,u_q)\leqslant\varepsilon$ pour tout $q\geqslant N$ ; en faisant $q\to+\infty$ : $f(u_p)\leqslant\varepsilon$. Donc $\inf f\leqslant\varepsilon$ pour tout $\varepsilon>0$ :</p><div class="sbox">$$\inf_{a\in E}f(a) = 0.$$</div>` },
    { t: "b) Quand est-elle atteinte ?", h: R`<p>$f(a) = 0\iff u_n\to a$.</p>`, b: R`$$\exists a\in E,\ f(a) = 0\iff\exists a\in E,\ d(a,u_n)\xrightarrow[n\to+\infty]{}0$$$$\iff\exists a\in E,\ u_n\to a.$$<div class="sbox"><p style="margin:0">La borne inférieure est atteinte si et seulement si $(u_n)$ converge.</p></div><p>Dans un espace non complet (exercice 1.23), on a donc une fonction de borne inférieure nulle jamais atteinte.</p>` }
  ],
  piege: R`Confondre « $\inf f = 0$ » (toujours vrai) et « $\min f = 0$ » (vrai seulement si la suite converge).`,
  methode: R`Une suite de distances à une suite de Cauchy est de Cauchy dans $\mathbb R$ (complet), grâce à l'inégalité triangulaire renversée.`
},
{ id: "topo-25", ...P, level: 1, time: "10 min",
  title: "La somme de deux connexes par arcs est connexe par arcs",
  enonce: R`<p>Soit $E$ un espace normé et $A,B$ deux parties connexes par arcs. Montrer que $A+B$ est connexe par arcs.</p>`,
  decode: { donnees: [R`Chemins $\gamma$ dans $A$, $\delta$ dans $B$.`], but: R`$\gamma+\delta$ est un chemin dans $A+B$.`, cles: {} },
  steps: [
    { t: "La somme de deux chemins", h: R`<p>Relier $a_1+b_1$ à $a_2+b_2$.</p>`, b: R`<p>Soit $x_1 = a_1+b_1$ et $x_2 = a_2+b_2$ dans $A+B$. Il existe $\gamma,\delta : [0,1]\to E$ continues avec $\gamma(t)\in A$, $\delta(t)\in B$, $\gamma(0) = a_1$, $\gamma(1) = a_2$, $\delta(0) = b_1$, $\delta(1) = b_2$. Alors $\gamma+\delta$ est continue, à valeurs dans $A+B$, et va de $x_1$ à $x_2$.</p><div class="sbox"><p style="margin:0">$A+B$ est connexe par arcs.</p></div><p>Autre preuve : $A\times B$ est connexe par arcs et $A+B$ est son image par l'application continue $(x,y)\mapsto x+y$.</p>`, rappels: ["top-connexe"] }
  ],
  piege: R`Prendre deux chemins paramétrés sur des intervalles différents : on les reparamètre tous les deux sur $[0,1]$.`,
  methode: R`Combiner des chemins coordonnée par coordonnée.`
},
{ id: "topo-26", ...P, level: 2, time: "20 min",
  title: "Les parties étoilées sont connexes par arcs ; les matrices diagonalisables",
  enonce: R`<p>a) Soit $A$ une partie d'un espace normé, étoilée : il existe $a\in A$ tel que $[a,x] = \{(1-t)a+tx : t\in[0,1]\}\subset A$ pour tout $x\in A$. Montrer que $A$ est connexe par arcs.</p><p>b) Montrer que l'ensemble $\mathcal D$ des matrices diagonalisables de $\mathcal M_n(\mathbb R)$ est connexe par arcs.</p>`,
  decode: { donnees: [R`Passer par le centre $a$.`], but: R`a) un chemin $x\to a\to y$ ; b) $\mathcal D$ est étoilé par rapport à $0$.`, cles: {} },
  steps: [
    { t: "a) Le chemin par le centre", h: R`<p>Deux segments mis bout à bout.</p>`, b: R`<p>Soit $x,y\in A$. On pose</p>$$\gamma(t) = \begin{cases}a+(1-2t)(x-a)&\text{si }0\leqslant t\leqslant\frac12\\a+(2t-1)(y-a)&\text{si }\frac12< t\leqslant1\end{cases}$$<p>Les deux expressions valent $a$ en $t = \frac12$ : $\gamma$ est continue. $\gamma(0) = x$, $\gamma(1) = y$, et $\gamma(t)\in[a,x]\cup[a,y]\subset A$.</p>${figEtoile}<div class="sbox"><p style="margin:0">Une partie étoilée est connexe par arcs.</p></div>`, rappels: ["top-connexe"] },
    { t: "b) 𝒟 est étoilé par rapport à 0", h: R`<p>$tX = P(tD)P^{-1}$.</p>`, b: R`<p>$0\in\mathcal D$. Si $X = PDP^{-1}\in\mathcal D$ ($D$ diagonale) et $t\in[0,1]$, alors $(1-t)\cdot0+tX = P(tD)P^{-1}$ avec $tD$ diagonale : $tX\in\mathcal D$. Donc $[0,X]\subset\mathcal D$ : $\mathcal D$ est étoilé par rapport à $0$, et par a) connexe par arcs.</p><p>Remarque : $\mathcal D$ n'est pas convexe : $\begin{pmatrix}1&0\\0&0\end{pmatrix}$ et $\begin{pmatrix}0&1\\0&1\end{pmatrix}$ sont diagonalisables, mais leur moitié-somme $\frac12\begin{pmatrix}1&1\\0&1\end{pmatrix}$ ne l'est pas.</p>` }
  ],
  piege: R`Confondre étoilé et convexe : étoilé ne demande les segments que depuis un point particulier.`,
  methode: R`Connexité par arcs d'une partie étoilée : passer par le centre.`
},
{ id: "topo-27", ...P, level: 2, time: "20 min",
  title: "Un sous-espace dont l'orthogonal n'est pas un supplémentaire",
  enonce: R`<p>On munit $E = \mathcal C([0,1],\mathbb R)$ de $\langle f,g\rangle = \int_0^1fg$ et on considère $F = \{f\in E : f(0) = 0\}$. Montrer : a) $F^\perp = \{0\}$ ; b) $F\oplus F^\perp\neq E$.</p>`,
  decode: { donnees: [R`Pour $g\in E$, la fonction $x\mapsto xg(x)$ est dans $F$.`], but: R`Tester $g\in F^\perp$ contre $xg(x)$.`, cles: {} },
  steps: [
    { t: "a) L'orthogonal est nul", h: R`<p>$\langle xg,g\rangle = \int xg^2 = 0$.</p>`, b: R`<p>Soit $g\in F^\perp$. La fonction $f(x) = xg(x)$ est continue et $f(0) = 0$, donc $f\in F$ et</p>$$0 = \langle f,g\rangle = \int_0^1xg(x)^2\,dx.$$<p>$x\mapsto xg(x)^2$ est continue, positive, d'intégrale nulle : elle est nulle sur $[0,1]$, donc $g = 0$ sur $]0,1]$, puis $g(0) = 0$ par continuité.</p><div class="sbox">$$F^\perp = \{0\}.$$</div>`, rappels: ["pre-intnulle"] },
    { t: "b) Pas de décomposition", h: R`<p>$F\oplus F^\perp = F$.</p>`, b: R`<p>$F\oplus F^\perp = F\oplus\{0\} = F$, et $F\neq E$ (la fonction constante $1$ n'est pas dans $F$).</p><div class="sbox"><p style="margin:0">$F\oplus F^\perp\neq E$.</p></div><p>En dimension finie, on aurait toujours $F\oplus F^\perp = E$. Ici, $F$ est dense dans $E$ pour la norme $\|\cdot\|_2$, ce qui explique que son orthogonal soit nul.</p>` }
  ],
  piege: R`Appliquer $F\oplus F^\perp = E$ hors de la dimension finie : c'est faux en général.`,
  methode: R`Montrer qu'un orthogonal est nul : tester $g$ contre un élément de $F$ fabriqué à partir de $g$.`
},
{ id: "topo-28", ...P, level: 3, time: "45 min",
  title: "Une norme sur ℝ² et le dessin de sa boule unité",
  enonce: R`<p>On pose $N(x,y) = \sup_{t\in\mathbb R}\dfrac{|x+ty|}{1+t+t^2}$.</p><p>a) Montrer que $N$ est une norme sur $\mathbb R^2$. b) Représenter $B'_N(0,1) = \{(x,y) : N(x,y)\leqslant1\}$. c) Calculer l'aire de cette boule.</p>`,
  decode: { donnees: [R`$1+t+t^2\geqslant\frac34>0$ pour tout $t$.`], but: R`b) $N\leqslant1$ revient à deux trinômes positifs pour tout $t$ : discriminants $\leqslant0$.`, cles: {} },
  steps: [
    { t: "a) N est bien défini", h: R`<p>Majorer pour $|t|\leqslant1$ et pour $|t|\geqslant1$.</p>`, b: R`<p>$1+t+t^2 = \left(t+\frac12\right)^2+\frac34\geqslant\frac34$.</p><ul><li>Si $|t|\leqslant1$ : $\frac{|x+ty|}{1+t+t^2}\leqslant\frac43(|x|+|y|)$.</li><li>Si $|t|\geqslant1$ : $t^2+1\geqslant2|t|$, donc $1+t+t^2\geqslant2|t|-|t| = |t|$, et $\frac{|x+ty|}{1+t+t^2}\leqslant\frac{|x|+|t||y|}{|t|}\leqslant|x|+|y|$.</li></ul><p>La fonction est bornée par $\frac43(|x|+|y|)$ : la borne supérieure $N(x,y)$ existe.</p>` },
    { t: "a) Les trois axiomes", h: R`<p>Sup d'une somme $\leqslant$ somme des sup.</p>`, b: R`<ul><li><b>Inégalité triangulaire</b> : $\frac{|x+x'+t(y+y')|}{1+t+t^2}\leqslant\frac{|x+ty|}{1+t+t^2}+\frac{|x'+ty'|}{1+t+t^2}\leqslant N(x,y)+N(x',y')$, puis on passe au sup en $t$.</li><li><b>Homogénéité</b> : $N(\alpha x,\alpha y) = |\alpha|N(x,y)$.</li><li><b>Séparation</b> : $N(x,y) = 0\Rightarrow x+ty = 0$ pour tout $t$ ; $t = 0$ donne $x = 0$, puis $t = 1$ donne $y = 0$.</li></ul>` },
    { t: "b) Deux conditions de discriminant", h: R`<p>$-(1+t+t^2)\leqslant x+ty\leqslant1+t+t^2$.</p>`, b: R`$$N(x,y)\leqslant1\iff\forall t,\ -(1+t+t^2)\leqslant x+ty\leqslant1+t+t^2$$$$\iff\begin{cases}\forall t,\ t^2+(1-y)t+1-x\geqslant0\\\forall t,\ t^2+(1+y)t+1+x\geqslant0\end{cases}$$<p>Un trinôme unitaire est positif sur $\mathbb R$ si et seulement si son discriminant est $\leqslant0$ :</p>$$\iff\begin{cases}(1-y)^2-4(1-x)\leqslant0\\(1+y)^2-4(1+x)\leqslant0\end{cases}$$$$\iff\frac{(y+1)^2}4-1\leqslant x\leqslant1-\frac{(y-1)^2}4.$$${figBouleN}` },
    { t: "c) L'aire", h: R`<p>Intégrer en $y$ la largeur horizontale.</p>`, b: R`<p>Les paraboles se coupent quand $\frac{(y+1)^2}4-1 = 1-\frac{(y-1)^2}4$, soit $(y+1)^2+(y-1)^2 = 8$, $2y^2+2 = 8$, $y = \pm\sqrt3$. La largeur à la hauteur $y$ vaut</p>$$1-\frac{(y-1)^2}4-\frac{(y+1)^2}4+1 = 2-\frac{2y^2+2}4 = \frac32-\frac{y^2}2.$$$$\mathcal A = \int_{-\sqrt3}^{\sqrt3}\Big(\frac32-\frac{y^2}2\Big)dy = \Big[\frac32y-\frac{y^3}6\Big]_{-\sqrt3}^{\sqrt3}$$$$= 2\Big(\frac{3\sqrt3}2-\frac{3\sqrt3}6\Big) = 2\sqrt3.$$<div class="sbox">$$\text{Aire}\big(B'_N(0,1)\big) = 2\sqrt3.$$</div>` }
  ],
  piege: R`Majorer $\frac1{1+t+t^2}$ par $1$ pour $t\in[-1,0]$ : c'est faux (en $t = -\frac12$, le dénominateur vaut $\frac34$).`,
  methode: R`Norme définie par un sup : $N\leqslant1$ se traduit par une inégalité pour tout paramètre, souvent un trinôme positif, donc une condition de discriminant.`
},
{ id: "topo-29", ...P, level: 2, time: "20 min",
  title: "Adhérence et intérieur d'un convexe sont convexes",
  enonce: R`<p>Soit $C$ une partie convexe d'un espace normé $E$. Montrer que $\overline C$ et $\mathring C$ sont convexes.</p>`,
  decode: { donnees: [R`Suites pour l'adhérence, boules pour l'intérieur.`], but: R`Pour $\lambda\in[0,1]$ et $x,y$ dans la partie, montrer que $\lambda x+(1-\lambda)y$ y est.`, cles: {} },
  steps: [
    { t: "L'adhérence", h: R`<p>Combinaisons convexes de suites.</p>`, b: R`<p>Soit $x,y\in\overline C$, $\lambda\in[0,1]$, et $x_n\to x$, $y_n\to y$ avec $x_n,y_n\in C$. Par convexité, $\lambda x_n+(1-\lambda)y_n\in C$, et cette suite tend vers $\lambda x+(1-\lambda)y$, qui est donc dans $\overline C$.</p>`, rappels: ["top-fermeseq"] },
    { t: "L'intérieur", h: R`<p>$B(z,r)\subset C$ avec $r = \min(\alpha,\beta)$.</p>`, b: R`<p>Soit $x,y\in\mathring C$ : $B(x,r)\subset C$ et $B(y,r)\subset C$ pour un $r>0$ (le plus petit des deux rayons). Soit $z = \lambda x+(1-\lambda)y$ et $u\in B(z,r)$. On pose $v = x+(u-z)$ et $w = y+(u-z)$ : $\|v-x\| = \|w-y\| = \|u-z\|< r$, donc $v,w\in C$, et</p>$$\lambda v+(1-\lambda)w = \lambda x+(1-\lambda)y+(u-z)$$$$= u.$$<p>Par convexité, $u\in C$. Donc $B(z,r)\subset C$ et $z\in\mathring C$.</p>${figConvexe}<div class="sbox"><p style="margin:0">$\overline C$ et $\mathring C$ sont convexes.</p></div>`, rappels: ["top-ouvert"] }
  ],
  piege: R`Pour l'intérieur, oublier de prendre le même rayon pour les deux boules (le minimum).`,
  methode: R`Intérieur d'un convexe : translater une boule autour d'un point du segment en deux boules autour des extrémités.`
},
{ id: "topo-30", ...P, level: 2, time: "20 min",
  title: "Adhérence d'une somme : une inclusion seulement",
  enonce: R`<p>a) Soit $A,B$ deux parties d'un espace normé $E$. Montrer que $\overline A+\overline B\subset\overline{A+B}$.</p><p>b) Montrer par un exemple que l'inclusion peut être stricte.</p>`,
  decode: { donnees: [R`Suites.`], but: R`b) une branche d'hyperbole et une droite.`, cles: {} },
  steps: [
    { t: "a) L'inclusion", h: R`<p>$a_n+b_n\to a+b$.</p>`, b: R`<p>Soit $x = a+b$ avec $a\in\overline A$, $b\in\overline B$, et $a_n\to a$, $b_n\to b$ ($a_n\in A$, $b_n\in B$). Alors $a_n+b_n\in A+B$ et $a_n+b_n\to a+b$ : $x\in\overline{A+B}$.</p>`, rappels: ["top-fermeseq"] },
    { t: "b) Un exemple dans ℝ²", h: R`<p>$A = \{xy = 1,\ x>0\}$, $B = \mathbb R\times\{0\}$.</p>`, b: R`<p>Dans $\mathbb R^2$, soit $A = \{(x,y) : x>0,\ xy = 1\}$ et $B = \mathbb R\times\{0\}$, toutes deux fermées.</p>${figHyp}<p>$A+B = \{(x+t,\frac1x) : x>0,\ t\in\mathbb R\} = \mathbb R\times\,]0,+\infty[$ (toute ordonnée $>0$ est atteinte, toute abscisse aussi). Donc</p>$$\overline A+\overline B = A+B = \mathbb R\times\,]0,+\infty[\ \subsetneq\ \overline{A+B}$$$$= \mathbb R\times[0,+\infty[.$$<div class="sbox"><p style="margin:0">La somme de deux fermés n'est pas forcément fermée.</p></div>` }
  ],
  piege: R`Croire que la somme de deux fermés est fermée : il faut une hypothèse de compacité sur l'un des deux (exercice 1.37).`,
  methode: R`Contre-exemple de somme non fermée : une courbe asymptote à une droite.`
},
{ id: "topo-31", ...P, level: 3, time: "35 min",
  title: "Adhérence d'une intersection avec un ouvert",
  enonce: R`<p>a) Soit $A$ un ouvert et $B$ une partie de $E$. Montrer que $\overline{A\cap\overline B} = \overline{A\cap B}$.</p><p>b) Soit $A$ une partie telle que $A\cap\overline B\subset\overline{A\cap B}$ pour toute partie $B$. Montrer que $A$ est ouvert.</p><p>c) Trouver deux ouverts $A,B$ de $\mathbb R$ tels que $A\cap B$, $A\cap\overline B$, $\overline A\cap B$, $\overline A\cap\overline B$, $\overline{A\cap B}$ soient deux à deux distincts.</p>`,
  decode: { donnees: [R`$x\in\overline X\iff$ tout voisinage ouvert de $x$ rencontre $X$.`], but: R`a) caractérisation par les voisinages ; b) prendre $B = \complement_EA$.`, cles: {} },
  steps: [
    { t: "a) Les deux inclusions", h: R`<p>$V\cap A$ est un voisinage ouvert de $y$.</p>`, b: R`<p>$B\subset\overline B$ donne $A\cap B\subset A\cap\overline B$, donc $\overline{A\cap B}\subset\overline{A\cap\overline B}$.</p><p>Réciproquement, il suffit de montrer $A\cap\overline B\subset\overline{A\cap B}$ (puis on passe à l'adhérence). Soit $y\in A\cap\overline B$ et $V$ un voisinage ouvert de $y$. $V\cap A$ est un ouvert contenant $y$, et $y\in\overline B$, donc $(V\cap A)\cap B\neq\varnothing$, c'est-à-dire $V\cap(A\cap B)\neq\varnothing$. Ainsi $y\in\overline{A\cap B}$.</p><div class="sbox">$$\overline{A\cap\overline B} = \overline{A\cap B}\quad(A\text{ ouvert}).$$</div>` },
    { t: "b) Réciproque", h: R`<p>$B = \complement_EA$.</p>`, b: R`<p>Avec $B = \complement_EA$ : $A\cap B = \varnothing$, donc $A\cap\overline{\complement_EA}\subset\overline\varnothing = \varnothing$. Ainsi $A\subset\complement_E\overline{\complement_EA} = \mathring A$ (le complémentaire de l'adhérence du complémentaire est l'intérieur). Donc $A = \mathring A$ est ouvert.</p>` },
    { t: "c) Un exemple", h: R`<p>$A = \,]0,1[\,\cup\,]2,4[$, $B = \,]1,3[$.</p>`, b: R`<p>Avec $A = \,]0,1[\,\cup\,]2,4[$ et $B = \,]1,3[$ : $\overline A = [0,1]\cup[2,4]$, $\overline B = [1,3]$, et</p>$$A\cap B = \,]2,3[,\quad A\cap\overline B = \,]2,3],$$$$\overline A\cap B = [2,3[,\quad\overline A\cap\overline B = \{1\}\cup[2,3],$$$$\overline{A\cap B} = [2,3].$$${figIntervalles}<p>Ces cinq ensembles sont deux à deux distincts.</p>` }
  ],
  piege: R`Croire que $\overline{A\cap B} = \overline A\cap\overline B$ : seule l'inclusion $\subset$ est vraie (voir le point isolé $1$).`,
  methode: R`Adhérence et intersection : travailler avec « tout voisinage rencontre ».`
},
{ id: "topo-32", ...P, level: 2, time: "25 min",
  title: "Deux normes équivalentes sur les fonctions C¹ nulles en 0",
  enonce: R`<p>Soit $E$ l'espace des $f\in\mathcal C^1([0,1],\mathbb R)$ telles que $f(0) = 0$. On pose $N(f) = \sup|f|+\sup|f'|$ et $\nu(f) = \sup|f+f'|$. Montrer que ce sont des normes équivalentes.</p>`,
  decode: { donnees: [R`$g(x) = e^xf(x)$ a pour dérivée $e^x(f+f')$.`], but: R`$\nu\leqslant N\leqslant(1+2e)\nu$.`, cles: {} },
  steps: [
    { t: "Ce sont des normes", h: R`<p>Séparation pour $\nu$ : $f'+f = 0$ et $f(0) = 0$.</p>`, b: R`<p>Homogénéité et inégalité triangulaire sont immédiates. Séparation : $N(f) = 0\Rightarrow f = 0$. Si $\nu(f) = 0$, alors $f'+f = 0$, donc $f(x) = \lambda e^{-x}$, et $f(0) = 0$ donne $\lambda = 0$.</p>` },
    { t: "ν ≤ N", h: R`<p>Inégalité triangulaire.</p>`, b: R`<p>$|f(x)+f'(x)|\leqslant|f(x)|+|f'(x)|\leqslant N(f)$, donc $\nu(f)\leqslant N(f)$.</p>` },
    { t: "N ≤ (1 + 2e) ν", h: R`<p>$g(x) = e^xf(x)$, $g(0) = 0$.</p>`, b: R`<p>Soit $g(x) = e^xf(x)$ : $g(0) = 0$ et $|g'(t)| = e^t|f(t)+f'(t)|\leqslant e\,\nu(f)$. Donc</p>$$|g(x)| = \Big|\int_0^xg'(t)\,dt\Big|\leqslant e\,\nu(f),$$$$|f(x)| = e^{-x}|g(x)|\leqslant e\,\nu(f).$$<p>Puis $|f'(x)|\leqslant|f(x)+f'(x)|+|f(x)|\leqslant(1+e)\nu(f)$. Au total :</p><div class="sbox">$$\nu(f)\leqslant N(f)\leqslant(1+2e)\,\nu(f).$$</div>`, rappels: ["top-equiv"] }
  ],
  piege: R`Oublier l'hypothèse $f(0) = 0$ : sans elle, $\nu$ n'est pas une norme ($f(x) = e^{-x}$ donne $\nu(f) = 0$).`,
  methode: R`Contrôler $f$ par $f+f'$ : multiplier par $e^x$ pour faire apparaître une dérivée.`
},
{ id: "topo-33", ...P, level: 2, time: "20 min",
  title: "Séparer deux fermés disjoints par deux ouverts disjoints",
  enonce: R`<p>Soit $E$ un espace normé et $F,G$ deux fermés disjoints. Montrer qu'il existe deux ouverts disjoints $U,V$ avec $F\subset U$ et $G\subset V$.</p>`,
  decode: { donnees: [R`$x\mapsto d(x,A)$ est continue ; $d(x,G)>0$ si $x\notin G$ ($G$ fermé).`], but: R`$\varphi(x) = d(x,G)-d(x,F)$, $U = \{\varphi>0\}$, $V = \{\varphi< 0\}$.`, cles: {} },
  steps: [
    { t: "La fonction φ", h: R`<p>Image réciproque d'ouverts.</p>`, b: R`<p>Si $F$ ou $G$ est vide, on prend $U = E$, $V = \varnothing$ (ou l'inverse). Sinon, $\varphi(x) = d(x,G)-d(x,F)$ est continue (différence de fonctions 1-lipschitziennes), donc $U = \varphi^{-1}(]0,+\infty[)$ et $V = \varphi^{-1}(]-\infty,0[)$ sont ouverts, et disjoints.</p>`, rappels: ["top-dist", "top-ouvert"] },
    { t: "Les inclusions", h: R`<p>Pour $x\in F$ : $d(x,F) = 0< d(x,G)$.</p>`, b: R`<p>Soit $x\in F$ : $d(x,F) = 0$. Comme $x\notin G$ et $G$ est fermé, $x\notin\overline G$, donc $d(x,G)>0$. Ainsi $\varphi(x)>0$ : $F\subset U$. De même $G\subset V$.</p><div class="sbox"><p style="margin:0">$U$ et $V$ sont deux ouverts disjoints séparant $F$ et $G$.</p></div>` }
  ],
  piege: R`Oublier que $d(x,G)>0$ demande que $G$ soit fermé : pour une partie non fermée, la distance peut être nulle sans appartenance.`,
  methode: R`Séparer des fermés : fonctions distance et images réciproques.`
},
{ id: "topo-34", ...P, level: 3, time: "40 min",
  title: "Quatre caractérisations de la continuité",
  enonce: R`<p>Soit $E,F$ deux espaces normés et $f : E\to F$. Montrer l'équivalence de :</p><p>(i) $f$ est continue ; (ii) $\forall A\subset E$, $f(\overline A)\subset\overline{f(A)}$ ; (iii) $\forall B\subset F$, $\overline{f^{-1}(B)}\subset f^{-1}(\overline B)$ ; (iv) $\forall B\subset F$, $f^{-1}(\mathring B)\subset\big(f^{-1}(B)\big)^\circ$.</p>`,
  decode: { donnees: [R`Caractérisation séquentielle ; passage au complémentaire.`], but: R`(i)$\Rightarrow$(ii)$\Rightarrow$(iii)$\Rightarrow$(iv)$\Rightarrow$(i).`, cles: {} },
  steps: [
    { t: "(i) ⟹ (ii)", h: R`<p>Suites.</p>`, b: R`<p>Soit $y = f(x)$ avec $x\in\overline A$, et $a_n\to x$, $a_n\in A$. Par continuité, $f(a_n)\to f(x)$, et $f(a_n)\in f(A)$ : $y\in\overline{f(A)}$.</p>` },
    { t: "(ii) ⟹ (iii)", h: R`<p>Appliquer (ii) à $A = f^{-1}(B)$.</p>`, b: R`<p>Avec $A = f^{-1}(B)$ : $f(\overline{f^{-1}(B)})\subset\overline{f(f^{-1}(B))}\subset\overline B$ (car $f(f^{-1}(B))\subset B$). Donc $\overline{f^{-1}(B)}\subset f^{-1}(\overline B)$.</p>` },
    { t: "(iii) ⟹ (iv)", h: R`<p>Appliquer (iii) au complémentaire de $B$.</p>`, b: R`<p>On utilise $\mathring B = \complement_F\overline{\complement_FB}$ et $f^{-1}(\complement_FX) = \complement_Ef^{-1}(X)$. Par (iii) appliqué à $\complement_FB$ :</p>$$\overline{f^{-1}(\complement_FB)}\subset f^{-1}(\overline{\complement_FB}),$$<p>et en passant aux complémentaires (ce qui renverse l'inclusion) :</p>$$f^{-1}(\mathring B) = \complement_Ef^{-1}(\overline{\complement_FB})\subset\complement_E\overline{\complement_Ef^{-1}(B)}$$$$= \big(f^{-1}(B)\big)^\circ.$$` },
    { t: "(iv) ⟹ (i)", h: R`<p>Un ouvert $U$ vérifie $\mathring U = U$.</p>`, b: R`<p>Soit $U$ un ouvert de $F$. Par (iv), $f^{-1}(U) = f^{-1}(\mathring U)\subset\big(f^{-1}(U)\big)^\circ\subset f^{-1}(U)$ : $f^{-1}(U)$ est égal à son intérieur, donc ouvert. L'image réciproque de tout ouvert est ouverte : $f$ est continue.</p><div class="sbox"><p style="margin:0">(i), (ii), (iii), (iv) sont équivalentes.</p></div>`, rappels: ["top-ouvert"] }
  ],
  piege: R`Oublier de renverser l'inclusion en passant au complémentaire.`,
  methode: R`Équivalences cycliques ; adhérence et intérieur s'échangent par passage au complémentaire.`
},
{ id: "topo-35", ...P, level: 2, time: "25 min",
  title: "L'opérateur u ↦ (uₙ/n) sur les suites bornées",
  enonce: R`<p>Soit $\ell^\infty$ l'espace des suites réelles bornées $(u_n)_{n\geqslant1}$, muni de $\|\cdot\|_\infty$, et $T(u) = \left(\frac{u_n}n\right)_{n\geqslant1}$.</p><p>a) Montrer que $T\in\mathcal L_c(\ell^\infty)$ et calculer $|||T|||$. b) Déterminer $\ker T$ et $\operatorname{Im}T$. $T$ est-il injectif ? surjectif ?</p>`,
  decode: { donnees: [R`$\left|\frac{u_n}n\right|\leqslant|u_n|$.`], but: R`$|||T||| = 1$ ; l'image est formée des suites $v$ avec $nv_n$ borné.`, cles: {} },
  steps: [
    { t: "a) Continuité et norme", h: R`<p>La suite constante $1$.</p>`, b: R`<p>$T$ est linéaire, et $\left|\frac{u_n}n\right|\leqslant|u_n|\leqslant\|u\|_\infty$ : $T(u)\in\ell^\infty$ et $\|T(u)\|_\infty\leqslant\|u\|_\infty$, donc $|||T|||\leqslant1$. Pour $u = (1,1,\dots)$ : $T(u) = (1,\frac12,\frac13,\dots)$, de norme $1 = \|u\|_\infty$.</p><div class="sbox">$$|||T||| = 1.$$</div>`, rappels: ["top-lc"] },
    { t: "b) Noyau et image", h: R`<p>$v = T(u)\iff u_n = nv_n$.</p>`, b: R`<p>$T(u) = 0\iff u_n = 0$ pour tout $n$ : $\ker T = \{0\}$, $T$ est injectif.</p><p>$v\in\operatorname{Im}T\iff$ la suite $u = (nv_n)$ est bornée $\iff v_n = O\left(\frac1n\right)$.</p><div class="sbox"><p style="margin:0">$\operatorname{Im}T = \{v : v_n = O(1/n)\}$ ; la suite constante $1$ n'y est pas : $T$ n'est pas surjectif.</p></div><p>(En dimension finie, injectif équivaut à surjectif ; pas ici.)</p>` }
  ],
  piege: R`Croire qu'un endomorphisme injectif est surjectif hors de la dimension finie.`,
  methode: R`Image d'un opérateur diagonal sur des suites : résoudre coordonnée par coordonnée.`
},
{ id: "topo-36", ...P, level: 2, time: "30 min",
  title: "Norme d'une combinaison de valeurs ponctuelles",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$ muni de $\|\cdot\|_\infty$, $a_1< \dots< a_p$ dans $[0,1]$ et $\lambda_1,\dots,\lambda_p\in\mathbb R$. On pose $\phi(f) = \sum_{k=1}^p\lambda_kf(a_k)$. Montrer que $\phi\in\mathcal L_c(E,\mathbb R)$ et calculer $|||\phi|||$.</p>`,
  decode: { donnees: [R`$|f(a_k)|\leqslant\|f\|_\infty$.`], but: R`$|||\phi||| = \sum|\lambda_k|$, atteint par une fonction affine par morceaux qui vaut le signe de $\lambda_k$ en $a_k$.`, cles: {} },
  steps: [
    { t: "Majoration", h: R`<p>Inégalité triangulaire.</p>`, b: R`<p>$\phi$ est linéaire et $|\phi(f)|\leqslant\sum|\lambda_k||f(a_k)|\leqslant M\|f\|_\infty$ avec $M = \sum_k|\lambda_k|$. Donc $\phi$ est continue et $|||\phi|||\leqslant M$.</p>`, rappels: ["top-lc"] },
    { t: "Une fonction qui réalise M", h: R`<p>$f(a_k) = \pm1$ selon le signe de $\lambda_k$.</p>`, b: R`<p>Soit $f$ la fonction affine par morceaux qui vaut $1$ en $a_k$ si $\lambda_k\geqslant0$, $-1$ si $\lambda_k< 0$, affine entre deux $a_k$ consécutifs, et constante sur $[0,a_1]$ et $[a_p,1]$. Alors $\|f\|_\infty = 1$ et</p>$$\phi(f) = \sum_k\lambda_k\operatorname{signe}(\lambda_k) = \sum_k|\lambda_k| = M.$$${figPhiMax}<div class="sbox">$$|||\phi||| = \sum_{k=1}^p|\lambda_k|.$$</div>` }
  ],
  piege: R`Oublier que les $a_k$ doivent être distincts : sinon on regroupe d'abord les coefficients d'un même point.`,
  methode: R`Norme d'une forme linéaire $f\mapsto\sum\lambda_kf(a_k)$ : choisir $f$ égale au signe de $\lambda_k$ en $a_k$.`
},
{ id: "topo-37", ...P, level: 2, time: "20 min",
  title: "Un fermé plus un compact est fermé",
  enonce: R`<p>Soit $E$ un espace normé, $F$ un fermé et $K$ un compact de $E$. Montrer que $F+K$ est fermé.</p>`,
  decode: { donnees: [R`Caractérisation séquentielle ; Bolzano-Weierstrass dans $K$.`], but: R`Extraire dans $K$, puis récupérer la limite dans $F$.`, cles: {} },
  steps: [
    { t: "Par les suites", h: R`<p>$z_n = x_n+y_n$ ; extraire $y_{\sigma(n)}\to y$.</p>`, b: R`<p>Soit $z_n = x_n+y_n\to z$ avec $x_n\in F$, $y_n\in K$. $K$ compact : $y_{\sigma(n)}\to y\in K$. Alors $x_{\sigma(n)} = z_{\sigma(n)}-y_{\sigma(n)}\to z-y$, et $F$ fermé donne $z-y\in F$. Donc $z = (z-y)+y\in F+K$.</p><div class="sbox"><p style="margin:0">$F+K$ est fermé.</p></div><p>Sans compacité, c'est faux (exercice 1.30 : deux fermés de somme non fermée).</p>`, rappels: ["top-compact", "top-fermeseq"] }
  ],
  piege: R`Extraire dans $F$ : un fermé non borné n'a pas forcément de sous-suite convergente. C'est dans $K$ qu'il faut extraire.`,
  methode: R`Somme fermé + compact : extraire dans le compact, conclure par fermeture de l'autre.`
},
{ id: "topo-38", ...P, level: 3, time: "25 min",
  title: "Diminuer strictement les distances sur un compact donne un point fixe",
  enonce: R`<p>Soit $K$ un compact non vide d'un espace normé et $f : K\to K$ telle que $d(f(x),f(y))< d(x,y)$ pour tous $x\neq y$. Montrer que $f$ admet un unique point fixe.</p>`,
  decode: { donnees: [R`Une fonction continue sur un compact atteint son minimum.`], but: R`Minimiser $\varphi(x) = d(x,f(x))$.`, cles: {} },
  steps: [
    { t: "Unicité", h: R`<p>Deux points fixes $x\neq y$.</p>`, b: R`<p>Si $f(x) = x$ et $f(y) = y$ avec $x\neq y$ : $d(x,y) = d(f(x),f(y))< d(x,y)$, absurde.</p>` },
    { t: "Existence", h: R`<p>Le minimum de $\varphi$ est nul.</p>`, b: R`<p>$f$ est 1-lipschitzienne, donc continue, et $\varphi(x) = d(x,f(x))$ est continue sur le compact $K$ : elle atteint son minimum en un $z$. Si $f(z)\neq z$ :</p>$$\varphi(f(z)) = d\big(f(z),f(f(z))\big)< d\big(z,f(z)\big)$$$$= \varphi(z),$$<p>ce qui contredit la minimalité. Donc $f(z) = z$.</p><div class="sbox"><p style="margin:0">$f$ a un unique point fixe.</p></div><p>Sur $\mathbb R$ (non compact), l'exercice 1.12 montre que c'est faux.</p>`, rappels: ["top-compact"] }
  ],
  piege: R`Appliquer le théorème du point fixe de Banach : il demande une constante $k< 1$ uniforme, qu'on n'a pas.`,
  methode: R`Point fixe sur un compact : minimiser $x\mapsto d(x,f(x))$.`
},
{ id: "topo-39", ...P, level: 3, time: "35 min",
  title: "Applications propres de ℝ dans ℝ",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb R$ continue. Montrer l'équivalence de :</p><p>(i) l'image réciproque par $f$ de tout compact est compacte ; (ii) $\lim_{-\infty}|f| = \lim_{+\infty}|f| = +\infty$ ; (iii) $f$ tend vers $\pm\infty$ en $-\infty$, et vers $\pm\infty$ en $+\infty$.</p>`,
  decode: { donnees: [R`Compacts de $\mathbb R$ = fermés bornés.`], but: R`(i)$\Rightarrow$(ii)$\Rightarrow$(iii)$\Rightarrow$(i).`, cles: {} },
  steps: [
    { t: "(i) ⟹ (ii)", h: R`<p>$f^{-1}([-A,A])$ est borné.</p>`, b: R`<p>Soit $A>0$. $f^{-1}([-A,A])$ est compact, donc contenu dans un $[-B,B]$. Si $|x|>B$, alors $x\notin f^{-1}([-A,A])$, donc $|f(x)|>A$. C'est exactement $|f|\to+\infty$ en $\pm\infty$.</p>` },
    { t: "(ii) ⟹ (iii)", h: R`<p>Valeurs intermédiaires : $f$ ne change pas de signe pour $x< -B$.</p>`, b: R`<p>Soit $A>0$ et $B$ avec $|f(x)|>A$ pour $|x|>B$. Sur $]-\infty,-B[$, $f$ ne s'annule pas (car $|f|>A>0$), donc par le théorème des valeurs intermédiaires garde un signe constant : soit $f>A$ partout, soit $f< -A$ partout. Le signe ne dépend pas de $A$ (les intervalles sont emboîtés), d'où $f\to+\infty$ ou $f\to-\infty$ en $-\infty$. De même en $+\infty$.</p>`, rappels: ["red-tvi"] },
    { t: "(iii) ⟹ (i)", h: R`<p>Fermé (continuité) et borné.</p>`, b: R`<p>(iii) entraîne (ii). Soit $K$ compact, $K\subset[-A,A]$, et $B$ avec $|f(x)|>A$ pour $|x|>B$. Alors $f^{-1}(K)\subset f^{-1}([-A,A])\subset[-B,B]$ : borné. Et $f^{-1}(K)$ est fermé (image réciproque d'un fermé par $f$ continue). Fermé borné de $\mathbb R$ : compact.</p><div class="sbox"><p style="margin:0">(i), (ii), (iii) sont équivalentes.</p></div><p>Exemples : $x\mapsto x^3$ et $x\mapsto x^2$ conviennent ; $x\mapsto\arctan x$ non ($f^{-1}([0,2]) = [0,+\infty[$ n'est pas compact).</p>` }
  ],
  piege: R`Dans (ii)$\Rightarrow$(iii), oublier le théorème des valeurs intermédiaires : c'est lui qui interdit à $f$ d'osciller entre $+\infty$ et $-\infty$.`,
  methode: R`Préimage de compacts compacte $\iff$ $|f|\to+\infty$ aux bornes de l'espace.`
},
{ id: "topo-40", ...P, level: 2, time: "20 min",
  title: "Une réunion de boules fermées centrées sur un compact est fermée",
  enonce: R`<p>Soit $E$ un espace normé, $K$ un compact, $r>0$, et $F = \bigcup_{x\in K}B'(x,r)$. Montrer que $F$ est fermé.</p>`,
  decode: { donnees: [R`$f\in F\iff\exists x\in K,\ \|f-x\|\leqslant r$.`], but: R`Extraire dans $K$ les centres associés.`, cles: {} },
  steps: [
    { t: "Par les suites", h: R`<p>$f_n\in B'(x_n,r)$, $x_{\sigma(n)}\to x$.</p>`, b: R`<p>Soit $f_n\in F$, $f_n\to f$, et $x_n\in K$ avec $\|f_n-x_n\|\leqslant r$. $K$ compact : $x_{\sigma(n)}\to x\in K$. Alors</p>$$\|f-x\|\leqslant\|f-f_{\sigma(n)}\|+\|f_{\sigma(n)}-x_{\sigma(n)}\|+\|x_{\sigma(n)}-x\|\leqslant\|f-f_{\sigma(n)}\|+r+\|x_{\sigma(n)}-x\|\xrightarrow[n\to\infty]{}r.$$<p>Donc $\|f-x\|\leqslant r$, $f\in B'(x,r)\subset F$.</p><div class="sbox"><p style="margin:0">$F$ est fermé. (C'est aussi $F = K+B'(0,r)$, compact + fermé : exercice 1.37.)</p></div>`, rappels: ["top-compact", "top-fermeseq"] }
  ],
  piege: R`Croire qu'une réunion quelconque de fermés est fermée : c'est faux ; ici, la compacité de l'ensemble des centres sauve la situation.`,
  methode: R`Réunion indexée par un compact : extraire dans l'ensemble des indices.`
},
{ id: "topo-41", ...P, level: 3, time: "30 min",
  title: "Les valeurs d'adhérence d'une suite bornée en dimension finie forment un compact",
  enonce: R`<p>Soit $E$ un espace normé de dimension finie et $(u_n)$ une suite bornée. On note $V$ l'ensemble de ses valeurs d'adhérence. Montrer que $V$ est un compact non vide.</p>`,
  decode: { donnees: [R`En dimension finie : fermés bornés = compacts.`], but: R`Non vide, borné, fermé.`, cles: {} },
  steps: [
    { t: "Non vide et borné", h: R`<p>Bolzano-Weierstrass ; $\|v\|\leqslant M$.</p>`, b: R`<p>$\|u_n\|\leqslant M$. La boule $B'(0,M)$ est un fermé borné de $E$ de dimension finie, donc compacte : $(u_n)$ a une valeur d'adhérence, $V\neq\varnothing$. Si $v\in V$, $u_{\sigma(n)}\to v$ avec $\|u_{\sigma(n)}\|\leqslant M$, donc $\|v\|\leqslant M$ : $V$ est borné.</p>` },
    { t: "Fermé", h: R`<p>Le complémentaire est ouvert.</p>`, b: R`<p>Soit $x\notin V$ : il existe $\varepsilon>0$ tel que $\{n : u_n\in B(x,\varepsilon)\}$ soit fini (sinon on extrairait une suite tendant vers $x$). Pour $y\in B(x,\varepsilon)$, la boule $B(y,\varepsilon-\|y-x\|)$ est incluse dans $B(x,\varepsilon)$, donc ne contient qu'un nombre fini de termes : $y\notin V$. Ainsi $B(x,\varepsilon)\subset\complement V$ : $\complement V$ est ouvert.</p><div class="sbox"><p style="margin:0">$V$ est fermé, borné, non vide, en dimension finie : c'est un compact non vide.</p></div>`, rappels: ["top-compact"] }
  ],
  piege: R`Oublier que la dimension finie sert deux fois : pour trouver une valeur d'adhérence, et pour « fermé borné $\Rightarrow$ compact ».`,
  methode: R`$x$ est valeur d'adhérence $\iff$ toute boule autour de $x$ contient une infinité de termes.`
},
{ id: "topo-42", ...P, level: 3, time: "25 min",
  title: "Pas d'injection continue du carré dans le segment",
  enonce: R`<p>Montrer qu'il n'existe aucune application continue injective de $[0,1]^2$ dans $[0,1]$.</p>`,
  decode: { donnees: [R`Le carré privé d'un point est connexe par arcs.`], but: R`Trois points $a,b,c$ avec $f(a)< f(b)< f(c)$, un chemin de $a$ à $c$ qui évite $b$.`, cles: {} },
  steps: [
    { t: "Trois valeurs ordonnées", h: R`<p>$f$ injective prend au moins trois valeurs.</p>`, b: R`<p>Par l'absurde, soit $f$ continue injective. Elle prend une infinité de valeurs distinctes ; on en choisit trois et on nomme $a,b,c$ leurs antécédents de sorte que $f(a)< f(b)< f(c)$.</p>` },
    { t: "Un chemin qui évite b", h: R`<p>Théorème des valeurs intermédiaires pour $f\circ\gamma$.</p>`, b: R`<p>Le carré privé du point $b$ reste connexe par arcs : il existe $\gamma : [0,1]\to[0,1]^2$ continue avec $\gamma(0) = a$, $\gamma(1) = c$ et $\gamma(t)\neq b$ pour tout $t$.</p>${figCarre}<p>$f\circ\gamma$ est continue sur $[0,1]$, vaut $f(a)$ en $0$ et $f(c)$ en $1$ : par le théorème des valeurs intermédiaires, il existe $u$ avec $f(\gamma(u)) = f(b)$. Par injectivité, $\gamma(u) = b$ : contradiction.</p><div class="sbox"><p style="margin:0">Aucune application continue de $[0,1]^2$ dans $[0,1]$ n'est injective.</p></div>`, rappels: ["top-connexe", "red-tvi"] }
  ],
  piege: R`Oublier de justifier qu'on peut éviter $b$ : retirer un point à un intervalle le déconnecte, mais pas au carré.`,
  methode: R`Retirer un point : un segment devient non connexe, un carré reste connexe par arcs. C'est un invariant qui sépare les deux.`
},
{ id: "topo-43", ...P, level: 2, time: "25 min",
  title: "Une norme issue d'un produit scalaire sur C¹([0, 1])",
  enonce: R`<p>Sur $E = \mathcal C^1([0,1],\mathbb R)$, on pose $N(f) = \left(\int_0^1f'^2+f(0)f(1)\right)^{1/2}$. Montrer que $N$ est une norme.</p>`,
  decode: { donnees: [R`Cauchy-Schwarz : $(f(1)-f(0))^2\leqslant\int_0^1f'^2$.`], but: R`$N(f)^2 = \varphi(f,f)$ pour un produit scalaire $\varphi$.`, cles: {} },
  steps: [
    { t: "La forme bilinéaire", h: R`<p>« Dédoubler » $f$.</p>`, b: R`<p>On pose $\varphi(f,g) = \int_0^1f'g'+\frac12\big(f(0)g(1)+f(1)g(0)\big)$ : bilinéaire, symétrique, et $\varphi(f,f) = \int f'^2+f(0)f(1) = N(f)^2$.</p>` },
    { t: "Positivité", h: R`<p>$\int f'^2\geqslant(f(1)-f(0))^2$.</p>`, b: R`<p>Par Cauchy-Schwarz : $(f(1)-f(0))^2 = \left(\int_0^1f'\right)^2\leqslant\int_0^11^2\int_0^1f'^2 = \int f'^2$. Donc</p>$$\varphi(f,f)\geqslant(f(1)-f(0))^2+f(0)f(1)$$$$= f(1)^2-f(0)f(1)+f(0)^2$$$$= \Big(f(1)-\frac{f(0)}2\Big)^2+\frac34f(0)^2\geqslant0.$$`, rappels: ["o-b-cs"] },
    { t: "Définie", h: R`<p>Tous les termes sont nuls.</p>`, b: R`<p>Si $\varphi(f,f) = 0$, les deux carrés ci-dessus sont nuls : $f(0) = 0$ puis $f(1) = 0$. Alors $\int f'^2 = \varphi(f,f)-f(0)f(1) = 0$, donc $f' = 0$ (continue positive d'intégrale nulle) et $f$ est constante égale à $f(0) = 0$.</p><div class="sbox"><p style="margin:0">$\varphi$ est un produit scalaire, et $N$ est la norme associée.</p></div>`, rappels: ["pre-ps"] }
  ],
  piege: R`Croire $\varphi(f,f)\geqslant0$ évident : $f(0)f(1)$ peut être négatif, il faut Cauchy-Schwarz pour le compenser.`,
  methode: R`Montrer qu'une racine carrée est une norme : reconnaître une forme quadratique $\varphi(f,f)$ associée à un produit scalaire.`
},
{ id: "topo-44", ...P, level: 2, time: "15 min",
  title: "Distance entre deux vecteurs normalisés",
  enonce: R`<p>Soit $(E,\|\cdot\|)$ un espace normé et $x,y\neq0$. Montrer que $\left\|\dfrac x{\|x\|}-\dfrac y{\|y\|}\right\|\leqslant\dfrac{2\|x-y\|}{\max(\|x\|,\|y\|)}$.</p>`,
  decode: { donnees: [R`Intercaler $\frac x{\|y\|}$.`], but: R`Majorer par $\frac{2\|x-y\|}{\|y\|}$, puis échanger les rôles.`, cles: {} },
  steps: [
    { t: "Le calcul", h: R`<p>Inégalité triangulaire en intercalant $\frac x{\|y\|}$.</p>`, b: R`$$\Big\|\frac x{\|x\|}-\frac y{\|y\|}\Big\|\leqslant\Big\|\frac x{\|x\|}-\frac x{\|y\|}\Big\|+\Big\|\frac x{\|y\|}-\frac y{\|y\|}\Big\|$$$$= \Big|\frac1{\|x\|}-\frac1{\|y\|}\Big|\|x\|+\frac{\|x-y\|}{\|y\|}$$$$= \frac{\big|\|y\|-\|x\|\big|}{\|y\|}+\frac{\|x-y\|}{\|y\|}\leqslant\frac{2\|x-y\|}{\|y\|}$$<p>(inégalité triangulaire renversée). En échangeant $x$ et $y$, on a aussi la majoration par $\frac{2\|x-y\|}{\|x\|}$ ; on garde la meilleure :</p><div class="sbox">$$\Big\|\frac x{\|x\|}-\frac y{\|y\|}\Big\|\leqslant\frac{2\|x-y\|}{\max(\|x\|,\|y\|)}.$$</div>`, rappels: ["top-trirev"] }
  ],
  piege: R`Majorer par $\frac{2\|x-y\|}{\min}$ seulement : le symétrique donne mieux.`,
  methode: R`Comparer deux quotients : intercaler un terme mixte.`
},
{ id: "topo-45", ...P, level: 3, time: "25 min",
  title: "Intersection de deux ouverts denses",
  enonce: R`<p>Soit $E$ un espace normé. a) Montrer que si $U,V$ sont deux ouverts denses ($\overline U = \overline V = E$), alors $U\cap V$ est dense. b) En déduire que si $F,G$ sont deux fermés d'intérieur vide, alors $F\cup G$ est d'intérieur vide.</p>`,
  decode: { donnees: [R`Dense $\iff$ tout ouvert non vide la rencontre.`], but: R`b) par passage au complémentaire.`, cles: {} },
  steps: [
    { t: "a) Densité de U ∩ V", h: R`<p>$\Omega\cap U$ est un ouvert non vide.</p>`, b: R`<p>Soit $x\in E$ et $\Omega$ un voisinage ouvert de $x$. $U$ dense : $\Omega\cap U\neq\varnothing$, et c'est un ouvert (intersection de deux ouverts). $V$ dense : $(\Omega\cap U)\cap V\neq\varnothing$. Donc tout voisinage de $x$ rencontre $U\cap V$ : $x\in\overline{U\cap V}$.</p>` },
    { t: "b) Passage aux complémentaires", h: R`<p>$\mathring F = \varnothing\iff\overline{\complement F} = E$.</p>`, b: R`<p>$\complement F$ et $\complement G$ sont ouverts, et denses (car $\overline{\complement F} = \complement\mathring F = E$). Par a), $\complement F\cap\complement G = \complement(F\cup G)$ est dense, donc $(F\cup G)^\circ = \complement\overline{\complement(F\cup G)} = \varnothing$.</p><div class="sbox"><p style="margin:0">Une réunion de deux fermés d'intérieur vide est d'intérieur vide.</p></div><p>L'hypothèse « ouvert » est essentielle : $\mathbb Q$ et $\mathbb R\setminus\mathbb Q$ sont denses dans $\mathbb R$, mais d'intersection vide.</p>` }
  ],
  piege: R`Oublier que l'un des deux au moins doit être ouvert : deux parties denses quelconques peuvent être disjointes.`,
  methode: R`Densité : tout ouvert non vide rencontre la partie. Intérieur vide $\iff$ complémentaire dense.`
},
{ id: "topo-46", ...P, level: 3, time: "40 min",
  title: "La norme ‖fφ‖∞ paramétrée par une fonction",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$ et, pour $\varphi\in E$, $N_\varphi(f) = \|f\varphi\|_\infty$.</p><p>a) Montrer que $N_\varphi$ est une norme si et seulement si $\big(\varphi^{-1}(\{0\})\big)^\circ = \varnothing$. b) Montrer que $N_\varphi$ et $\|\cdot\|_\infty$ sont équivalentes si et seulement si $\varphi^{-1}(\{0\}) = \varnothing$.</p>`,
  decode: { donnees: [R`Homogénéité et inégalité triangulaire sont toujours vraies.`], but: R`Seule la séparation pose problème ; pour b), une fonction « chapeau » près d'un zéro de $\varphi$.`, cles: {} },
  steps: [
    { t: "a) Si l'intérieur des zéros est vide", h: R`<p>$f\varphi = 0$ et $f(x_0)\neq0$.</p>`, b: R`<p>$N_\varphi$ est homogène et vérifie l'inégalité triangulaire. Supposons $(\varphi^{-1}(0))^\circ = \varnothing$ et $N_\varphi(f) = 0$, donc $f\varphi = 0$. Si $f(x_0)\neq0$, par continuité $f\neq0$ sur un intervalle $I$ non réduit à un point, et $\varphi = 0$ sur $I$ : $I\subset\varphi^{-1}(0)$, qui aurait un intérieur non vide. Contradiction : $f = 0$.</p>` },
    { t: "a) Sinon : une fonction chapeau", h: R`<p>$\varphi = 0$ sur $[\alpha,\beta]$.</p>`, b: R`<p>Si $(\varphi^{-1}(0))^\circ\neq\varnothing$, il contient un intervalle $[\alpha,\beta]$ ($\alpha< \beta$). La fonction « chapeau » nulle hors de $[\alpha,\beta]$, valant $x-\alpha$ puis $\beta-x$ dessus, est non nulle mais $f\varphi = 0$.</p>${figChapeau}<div class="sbox"><p style="margin:0">$N_\varphi$ norme $\iff\big(\varphi^{-1}(\{0\})\big)^\circ = \varnothing$.</p></div>` },
    { t: "b) Si φ ne s'annule pas", h: R`<p>$\frac1\varphi$ est continue et bornée.</p>`, b: R`<p>$N_\varphi(f)\leqslant\|\varphi\|_\infty\|f\|_\infty$. Si $\varphi$ ne s'annule pas, $\frac1\varphi$ est continue sur le segment donc bornée, et $\|f\|_\infty = \left\|\frac1\varphi f\varphi\right\|_\infty\leqslant\left\|\frac1\varphi\right\|_\infty N_\varphi(f)$ : les normes sont équivalentes.</p>` },
    { t: "b) Si φ s'annule en x₀", h: R`<p>Des pics étroits autour de $x_0$.</p>`, b: R`<p>Supposons $\varphi(x_0) = 0$ (et $N_\varphi$ norme). Pour $n\geqslant1$, par continuité il existe $\eta>0$ avec $|\varphi|\leqslant\frac1n$ sur $[x_0-\eta,x_0+\eta]\cap[0,1]$. Soit $f_n$ un pic triangulaire de hauteur $1$ en $x_0$, nul hors de cet intervalle. Alors $\|f_n\|_\infty = 1$ et $N_\varphi(f_n)\leqslant\frac1n\to0$ : les normes ne sont pas équivalentes.</p><div class="sbox"><p style="margin:0">$N_\varphi\sim\|\cdot\|_\infty\iff\varphi$ ne s'annule pas.</p></div>`, rappels: ["top-equiv"] }
  ],
  piege: R`Confondre « $\varphi$ ne s'annule pas » (équivalence) et « $\varphi$ ne s'annule pas sur un intervalle » (simple norme).`,
  methode: R`Norme pondérée : la séparation dépend des intervalles où le poids s'annule ; l'équivalence, de ses zéros isolés.`
},
{ id: "topo-47", ...P, level: 3, time: "30 min",
  title: "Pas d'endomorphismes continus avec uv − vu = Id",
  enonce: R`<p>Soit $E\neq\{0\}$ un espace normé et $e = \mathrm{Id}_E$. On suppose qu'il existe $u,v\in\mathcal L_c(E)$ avec $u\circ v-v\circ u = e$.</p><p>a) Montrer : $\forall n\in\mathbb N$, $u\circ v^{n+1}-v^{n+1}\circ u = (n+1)v^n$. b) En déduire : $(n+1)|||v^n|||\leqslant2|||u|||\,|||v|||\,|||v^n|||$. c) Conclure.</p>`,
  decode: { donnees: [R`Norme subordonnée sous-multiplicative.`], but: R`Montrer qu'aucun $v^n$ n'est nul et obtenir une contradiction pour $n$ grand.`, cles: {} },
  steps: [
    { t: "a) La récurrence", h: R`<p>$uv^{n+2} = (uv^{n+1})v$.</p>`, b: R`<p>$n = 0$ : c'est l'hypothèse. Si $uv^{n+1}-v^{n+1}u = (n+1)v^n$ :</p>$$uv^{n+2}-v^{n+2}u = (uv^{n+1}-v^{n+1}u)v+v^{n+1}(uv-vu)$$$$= (n+1)v^{n+1}+v^{n+1} = (n+2)v^{n+1}.$$` },
    { t: "b) Majoration", h: R`<p>$|||uv^{n+1}|||\leqslant|||u|||\,|||v^n|||\,|||v|||$.</p>`, b: R`$$(n+1)|||v^n|||$$$$= |||uv^{n+1}-v^{n+1}u|||\leqslant|||u|||\,|||v^n|||\,|||v|||+|||v^n|||\,|||v|||\,|||u|||$$$$= 2|||u|||\,|||v|||\,|||v^n|||.$$`, rappels: ["top-sousmult"] },
    { t: "c) Contradiction", h: R`<p>Si aucun $v^n$ n'est nul, $n+1\leqslant2|||u|||\,|||v|||$ pour tout $n$.</p>`, b: R`<ul><li>Si $v^n\neq0$ pour tout $n$, on divise : $n+1\leqslant2|||u|||\,|||v|||$ pour tout $n$, absurde.</li><li>Sinon, soit $n_0$ le plus petit entier avec $v^{n_0} = 0$ ; $n_0\geqslant1$ car $v^0 = e\neq0$. a) avec $n = n_0-1$ donne $0 = n_0v^{n_0-1}$, donc $v^{n_0-1} = 0$ : contradiction avec la minimalité.</li></ul><div class="sbox"><p style="margin:0">Il n'existe pas $u,v\in\mathcal L_c(E)$ avec $uv-vu = \mathrm{Id}_E$.</p></div><p>(En dimension finie, la trace suffit : $\operatorname{tr}(uv-vu) = 0\neq\dim E$. En dimension infinie, la dérivation et la multiplication par $X$ sur $\mathbb R[X]$ vérifient la relation, mais ne sont pas toutes deux continues.)</p>` }
  ],
  piege: R`Diviser par $|||v^n|||$ sans traiter le cas où un $v^n$ est nul.`,
  methode: R`Relation de commutation : itérer, puis passer aux normes pour obtenir une croissance linéaire impossible.`
},
{ id: "topo-48", ...P, level: 3, time: "25 min",
  title: "L'image d'un fermé par un polynôme complexe est fermée",
  enonce: R`<p>Soit $P\in\mathbb C[X]$. Montrer que l'image par $P$ de tout fermé de $\mathbb C$ est un fermé.</p>`,
  decode: { donnees: [R`Si $\deg P\geqslant1$, $|P(z)|\to+\infty$ quand $|z|\to+\infty$.`], but: R`Une suite d'antécédents est bornée ; Bolzano-Weierstrass.`, cles: {} },
  steps: [
    { t: "Les antécédents sont bornés", h: R`<p>$P$ constant : trivial.</p>`, b: R`<p>Si $P$ est constant, $P(F)$ est vide ou un point : fermé. Sinon $|P(z)|\to+\infty$. Soit $Z_n = P(z_n)\to Z$ avec $z_n\in F$. $(Z_n)$ est bornée par un $M$ ; il existe $A$ avec $|P(z)|>M$ dès que $|z|\geqslant A$, donc $|z_n|< A$ : $(z_n)$ est bornée.</p>` },
    { t: "Extraction et conclusion", h: R`<p>$\mathbb C$ est de dimension finie.</p>`, b: R`<p>Par Bolzano-Weierstrass, $z_{\sigma(n)}\to u$, et $u\in F$ ($F$ fermé). Par continuité, $P(z_{\sigma(n)})\to P(u)$ ; mais $P(z_{\sigma(n)}) = Z_{\sigma(n)}\to Z$. Donc $Z = P(u)\in P(F)$.</p><div class="sbox"><p style="margin:0">$P(F)$ est fermé.</p></div><p>Ce n'est pas vrai pour toute fonction continue : $\arctan(\mathbb R) = \,]-\frac\pi2,\frac\pi2[$ n'est pas fermé.</p>`, rappels: ["top-compact"] }
  ],
  piege: R`Oublier le cas des polynômes constants, où $|P(z)|$ ne tend pas vers l'infini.`,
  methode: R`Image fermée : les antécédents d'une suite convergente doivent rester bornés, puis on extrait.`
},
{ id: "topo-49", ...P, level: 3, time: "30 min",
  title: "Image d'une intersection décroissante de fermés dans un compact",
  enonce: R`<p>Soit $K$ un compact, $(F_n)$ une suite décroissante de fermés de $K$, et $f : K\to K$ continue. Montrer que $f\big(\bigcap_nF_n\big) = \bigcap_nf(F_n)$.</p>`,
  decode: { donnees: [R`Une inclusion est ensembliste ; l'autre demande la compacité.`], but: R`Pour $x\in\bigcap f(F_n)$, extraire une suite d'antécédents.`, cles: {} },
  steps: [
    { t: "L'inclusion facile", h: R`<p>$F\subset F_n$.</p>`, b: R`<p>Avec $F = \bigcap F_n$ : $F\subset F_n$, donc $f(F)\subset f(F_n)$ pour tout $n$, d'où $f(F)\subset\bigcap f(F_n)$.</p>` },
    { t: "L'inclusion réciproque", h: R`<p>$x = f(x_n)$, $x_n\in F_n$, extraction.</p>`, b: R`<p>Soit $x\in\bigcap f(F_n)$ : $x = f(x_n)$ avec $x_n\in F_n\subset K$. Par compacité, $x_{\sigma(n)}\to y\in K$. Pour $N$ fixé et $n\geqslant N$ : $x_{\sigma(n)}\in F_{\sigma(n)}\subset F_N$ (suite décroissante, $\sigma(n)\geqslant n\geqslant N$). $F_N$ fermé : $y\in F_N$. Ceci pour tout $N$ : $y\in F$. Par continuité, $x = f(x_{\sigma(n)})\to f(y)$, donc $x = f(y)\in f(F)$.</p><div class="sbox">$$f\Big(\bigcap_nF_n\Big) = \bigcap_nf(F_n).$$</div><p>Sans compacité, c'est faux : dans $\mathbb R$, avec $F_n = [n,+\infty[$ (fermés décroissants) et $f$ constante égale à $0$, on a $\bigcap F_n = \varnothing$ donc $f(\bigcap F_n) = \varnothing$, alors que $\bigcap f(F_n) = \{0\}$.</p>`, rappels: ["top-compact"] }
  ],
  piege: R`Oublier d'utiliser la décroissance des $F_n$ : c'est elle qui permet d'affirmer $x_{\sigma(n)}\in F_N$ pour $n\geqslant N$.`,
  methode: R`Intersection décroissante dans un compact : extraire, puis la limite est dans chaque $F_N$.`
},
{ id: "topo-50", ...P, level: 2, time: "35 min",
  title: "Le théorème du point fixe de Banach",
  enonce: R`<p>Soit $(E,\|\cdot\|)$ un espace normé, $F\subset E$ complète et $f : F\to F$ contractante : il existe $k\in[0,1[$ avec $\|f(x)-f(y)\|\leqslant k\|x-y\|$.</p><p>a) Montrer l'unicité d'un éventuel point fixe. b) Pour $a\in F$, on pose $u_0 = a$, $u_{n+1} = f(u_n)$. Montrer que $(u_n)$ converge vers un point fixe. c) Conclure.</p>`,
  decode: { donnees: [R`$\|u_{n+1}-u_n\|\leqslant k^n\|u_1-u_0\|$.`], but: R`Suite de Cauchy par sommation géométrique.`, cles: {} },
  steps: [
    { t: "a) Unicité", h: R`<p>$(1-k)\|x-y\|\leqslant0$.</p>`, b: R`<p>Si $f(x) = x$ et $f(y) = y$ : $\|x-y\| = \|f(x)-f(y)\|\leqslant k\|x-y\|$, donc $(1-k)\|x-y\|\leqslant0$ avec $1-k>0$ : $x = y$.</p>` },
    { t: "b) Une suite de Cauchy", h: R`<p>Somme géométrique.</p>`, b: R`<p>Par récurrence, $\|u_{n+1}-u_n\|\leqslant k^n\|u_1-u_0\|$ (hérédité : $\|u_{n+2}-u_{n+1}\| = \|f(u_{n+1})-f(u_n)\|\leqslant k\|u_{n+1}-u_n\|$). Pour $p,r\in\mathbb N$ :</p>$$\|u_{p+r}-u_p\|\leqslant\sum_{i=0}^{r-1}\|u_{p+i+1}-u_{p+i}\|\leqslant\|u_1-u_0\|\sum_{i=0}^{r-1}k^{p+i}\leqslant\frac{k^p}{1-k}\|u_1-u_0\|\xrightarrow[p\to\infty]{}0.$$<p>Donc $(u_n)$ est de Cauchy dans $F$ complet : $u_n\to\ell\in F$. Comme $f$ est continue (lipschitzienne), $u_{n+1} = f(u_n)\to f(\ell)$, et aussi $u_{n+1}\to\ell$ : $f(\ell) = \ell$.</p>`, rappels: ["top-cauchy"] },
    { t: "c) Conclusion", h: R`<p>a) et b).</p>`, b: R`<div class="sbox"><p style="margin:0">Une application contractante d'une partie complète dans elle-même a un unique point fixe, limite de toute suite $u_{n+1} = f(u_n)$.</p></div><p>Estimation d'erreur : en faisant $r\to\infty$, $\|\ell-u_p\|\leqslant\frac{k^p}{1-k}\|u_1-u_0\|$. Exemple : $f = \cos$ sur $[0,1]$ ($k = \sin1< 1$) : la suite $u_{n+1} = \cos u_n$ converge vers l'unique solution de $\cos x = x$, environ $0{,}739$.</p>` }
  ],
  piege: R`Oublier que $F$ doit être complète et stable par $f$ : ce sont les deux ingrédients de la preuve.`,
  methode: R`Point fixe de Banach : suite récurrente, Cauchy par série géométrique, limite par continuité.`
},
{ id: "topo-51", ...P, level: 4, time: "40 min",
  title: "Le théorème de Darboux : une dérivée vérifie les valeurs intermédiaires",
  enonce: R`<p>Soit $I$ un intervalle de $\mathbb R$ non réduit à un point et $f : I\to\mathbb R$ dérivable. Montrer que $f'(I)$ est un intervalle (même si $f'$ n'est pas continue).</p>`,
  decode: { donnees: [R`$\tau(x,y) = \frac{f(x)-f(y)}{x-y}$ sur $T = \{(x,y)\in I^2 : x< y\}$, convexe.`], but: R`$\tau(T)\subset f'(I)\subset\overline{\tau(T)}$ avec $\tau(T)$ intervalle.`, cles: {} },
  steps: [
    { t: "τ(T) est un intervalle", h: R`<p>$T$ est convexe et $\tau$ continue.</p>`, b: R`<p>$T = \{(x,y)\in I^2 : x< y\}$ est convexe (un triangle éventuellement privé de bords), donc connexe par arcs. $\tau$ est continue sur $T$, donc $\tau(T)$ est connexe par arcs dans $\mathbb R$ : c'est un intervalle.</p>`, rappels: ["top-connexe"] },
    { t: "τ(T) ⊂ f′(I) ⊂ adh(τ(T))", h: R`<p>Accroissements finis ; définition de la dérivée.</p>`, b: R`<ul><li>Pour $(x,y)\in T$, l'égalité des accroissements finis donne $c\in\,]x,y[$ avec $\tau(x,y) = f'(c)$ : $\tau(T)\subset f'(I)$.</li><li>Pour $x\in I$, soit $x_n\to x$, $x_n\in I$, $x_n\neq x$. Alors $\frac{f(x_n)-f(x)}{x_n-x}\to f'(x)$, et ce quotient vaut $\tau(x_n,x)$ ou $\tau(x,x_n)$, élément de $\tau(T)$ : $f'(x)\in\overline{\tau(T)}$.</li></ul>` },
    { t: "Conclusion", h: R`<p>Une partie coincée entre un intervalle et son adhérence est un intervalle.</p>`, b: R`<p>$J = \tau(T)$ est un intervalle, et $J\subset f'(I)\subset\overline J$ : $\overline J$ n'ajoute à $J$ que des extrémités. Si $a< b$ sont dans $f'(I)$, alors tout $c\in\,]a,b[$ est intérieur à $\overline J$, donc dans $J\subset f'(I)$.</p><div class="sbox"><p style="margin:0">$f'(I)$ est un intervalle.</p></div><p>Exemple : $f(x) = x^2\sin\frac1x$ ($f(0) = 0$) est dérivable, $f'$ n'est pas continue en $0$, et pourtant $f'(\mathbb R)$ est un intervalle.</p>` }
  ],
  piege: R`Croire qu'il faut la continuité de $f'$ : le théorème des valeurs intermédiaires pour $f'$ vaut pour toute dérivée.`,
  methode: R`Encadrer l'ensemble étudié entre un intervalle et son adhérence.`
},
{ id: "topo-52", ...P, level: 4, time: "45 min",
  title: "Projection orthogonale sur un sous-espace complet",
  enonce: R`<p>Soit $E$ un espace préhilbertien réel et $F$ un sous-espace vectoriel complet de $E$.</p><p>a) Montrer que pour tout $x\in E$, il existe un unique $z\in F$ tel que $x-z\in F^\perp$. On note $p_F(x) = z$.</p><p>b) Montrer : 1) $p_F\in\mathcal L_c(E)$ ; 2) $p_F\circ p_F = p_F$ ; 3) $\langle p_F(x),y\rangle = \langle x,p_F(y)\rangle$ pour tous $x,y$.</p>`,
  decode: { donnees: [R`Identité du parallélogramme.`], but: R`Une suite minimisante de $\|x-u\|$ est de Cauchy ; sa limite est le projeté.`, cles: {} },
  steps: [
    { t: "a) Unicité", h: R`<p>$z_1-z_2\in F\cap F^\perp$.</p>`, b: R`<p>Si $x-z_1$ et $x-z_2$ sont dans $F^\perp$, alors $z_1-z_2 = (x-z_2)-(x-z_1)\in F^\perp$, et $z_1-z_2\in F$ : $\|z_1-z_2\|^2 = \langle z_1-z_2,z_1-z_2\rangle = 0$.</p>` },
    { t: "a) Une suite minimisante est de Cauchy", h: R`<p>Parallélogramme avec $u_p-x$ et $u_q-x$.</p>`, b: R`<p>Soit $\alpha = \inf_{u\in F}\|x-u\|$ et $u_n\in F$ avec $\alpha\leqslant\|x-u_n\|\leqslant\alpha+\frac1n$. Par l'identité du parallélogramme appliquée à $u_p-x$ et $u_q-x$ :</p>$$\|u_p-u_q\|^2 = 2\|u_p-x\|^2+2\|u_q-x\|^2-4\Big\|\frac{u_p+u_q}2-x\Big\|^2.$$<p>Or $\frac{u_p+u_q}2\in F$, donc $\big\|\frac{u_p+u_q}2-x\big\|\geqslant\alpha$, et</p>$$\|u_p-u_q\|^2\leqslant2\Big(\alpha+\frac1p\Big)^2+2\Big(\alpha+\frac1q\Big)^2-4\alpha^2\xrightarrow[p,q\to\infty]{}0.$$<p>$(u_n)$ est de Cauchy dans $F$ complet : $u_n\to z\in F$, et $\|x-z\| = \alpha$ (continuité de la norme).</p>`, rappels: ["top-cauchy"] },
    { t: "a) x − z est orthogonal à F", h: R`<p>$\|x-(z+\lambda y)\|^2\geqslant\|x-z\|^2$ pour tout $\lambda$.</p>`, b: R`<p>Soit $y\in F$, $y\neq0$. Pour $\lambda\in\mathbb R$, $z+\lambda y\in F$, donc</p>$$\|x-z-\lambda y\|^2\geqslant\|x-z\|^2$$$$\iff\lambda^2\|y\|^2-2\lambda\langle x-z,y\rangle\geqslant0.$$<p>Avec $\lambda = \frac{\langle x-z,y\rangle}{\|y\|^2}$ : $-\frac{\langle x-z,y\rangle^2}{\|y\|^2}\geqslant0$, donc $\langle x-z,y\rangle = 0$.</p>${figProj}` },
    { t: "b) Propriétés de p_F", h: R`<p>Linéarité par unicité ; Pythagore.</p>`, b: R`<ul><li><b>Linéaire</b> : $\alpha p_F(x)+p_F(x')\in F$ et $(\alpha x+x')-(\alpha p_F(x)+p_F(x'))\in F^\perp$ ; par unicité, c'est $p_F(\alpha x+x')$.</li><li><b>Continue</b> : Pythagore donne $\|x\|^2 = \|x-p_F(x)\|^2+\|p_F(x)\|^2$, donc $\|p_F(x)\|\leqslant\|x\|$ ($|||p_F|||\leqslant1$, égal à $1$ si $F\neq\{0\}$).</li><li><b>$p_F\circ p_F = p_F$</b> : pour $y\in F$, $p_F(y) = y$ (car $y-y = 0\in F^\perp$) ; appliqué à $y = p_F(x)$.</li><li><b>Autoadjoint</b> : $\langle x-p_F(x),p_F(y)\rangle = 0$ donne $\langle x,p_F(y)\rangle = \langle p_F(x),p_F(y)\rangle$ ; par symétrie c'est aussi $\langle p_F(x),y\rangle$.</li></ul><div class="sbox"><p style="margin:0">$p_F$ est un projecteur orthogonal continu et autoadjoint, et $E = F\oplus F^\perp$.</p></div><p>Comparer avec l'exercice 1.27 : là, $F$ n'est pas complet et $F\oplus F^\perp\neq E$.</p>`, rappels: ["pre-proj"] }
  ],
  piege: R`Oublier l'hypothèse de complétude : sans elle, la suite minimisante peut ne pas converger dans $F$ (exercice 1.27).`,
  methode: R`Existence d'un minimum de distance : suite minimisante, parallélogramme pour la rendre de Cauchy, complétude pour conclure.`
}
]);
})();

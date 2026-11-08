/* Commando X-ENS · Aller plus loin · Sujet « Ellipsoïde de John-Löwner ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 5, plus: "john",
  sujet: "L'ellipsoïde de John-Löwner",
  sujetDesc: "Tout compact d'intérieur non vide de ℝⁿ est contenu dans un unique ellipsoïde centré en 0 de volume minimal. On relie le volume de l'ellipsoïde {ᵗxSx ≤ 1} à (det S)^{−1/2}, on montre que cette fonction est strictement convexe sur les matrices symétriques définies positives (réduction simultanée, concavité du logarithme), puis on conclut par compacité et convexité. On exploite l'unicité pour trouver l'ellipse minimale d'un rectangle." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "jo-red": { t: "Réduction simultanée", b: R`<p>Si $R\in\mathcal S_n^{++}(\mathbb R)$ et $S\in\mathcal S_n(\mathbb R)$, il existe $P\in GL_n(\mathbb R)$ et $\Delta$ diagonale avec $R = {}^tPP$ et $S = {}^tP\Delta P$ (diagonaliser $S$ dans une base orthonormée pour le produit scalaire défini par $R$).</p>` },
  "jo-jac": { t: "Changement de variables linéaire", b: R`<p>Si $A\in GL_n(\mathbb R)$, $\operatorname{Vol}(A(E)) = |\det A|\operatorname{Vol}(E)$.</p>` },
  "jo-agm": { t: "Inégalité arithmético-géométrique pondérée", b: R`<p>Pour $x,y>0$ et $t\in\,]0,1[$ : $x^ty^{1-t}\leqslant tx+(1-t)y$ (concavité de $\ln$), avec égalité si et seulement si $x = y$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Pour $S\in\mathcal S_n^{++}(\mathbb R)$, on note $q_S(x) = {}^txSx$ et $\xi_S = \{x\in\mathbb R^n : q_S(x)\leqslant1\}$ l'<b>ellipsoïde</b> (centré en $0$) associé. On pose $\mu(S) = (\det S)^{-1/2}$. $B$ est la boule unité euclidienne fermée. On veut montrer : <b>pour tout compact $K$ d'intérieur non vide, il existe un unique ellipsoïde centré en $0$ de volume minimal contenant $K$.</b></p>`;

/* Figure : ellipse minimale d'un rectangle */
const figRect = (() => {
  const s = 52, cx = 200, cy = 140, X = x => (cx + s * x).toFixed(1), Y = y => (cy - s * y).toFixed(1);
  const a = 2, b = 1;
  const ell = (A, Bb) => { let d = ""; for (let k = 0; k <= 120; k++) { const t = 2 * Math.PI * k / 120; d += (k ? "L" : "M") + X(A * Math.cos(t)) + "," + Y(Bb * Math.sin(t)); } return d; };
  let b2 = `<line x1="${X(-3.6)}" y1="${Y(0)}" x2="${X(3.6)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(-2.3)}" x2="${X(0)}" y2="${Y(2.3)}" class="ax"/>`;
  b2 += `<rect x="${X(-a)}" y="${Y(b)}" width="${2 * a * s}" height="${2 * b * s}" class="hb" style="opacity:.15"/><rect x="${X(-a)}" y="${Y(b)}" width="${2 * a * s}" height="${2 * b * s}" class="vk" style="fill:none;stroke-width:1.4"/>`;
  b2 += `<path d="${ell(a * Math.SQRT2, b * Math.SQRT2)}" class="vr" style="fill:none;stroke-width:2"/>`;
  const A2 = Math.sqrt(a * a + b * b);
  b2 += `<path d="${ell(A2 * 1.0, A2 * 1.0)}" class="thin"/>`;
  [[a, b], [-a, b], [a, -b], [-a, -b]].forEach(([x, y]) => { b2 += `<circle cx="${X(x)}" cy="${Y(y)}" r="3.5" class="pt"/>`; });
  b2 += S(+X(a * 1.41) + 6, +Y(0) - 6, "a√2", "start", "sm r") + S(+X(0) + 6, +Y(b * 1.41) - 4, "b√2", "start", "sm r") + S(+X(A2 * 0.72) + 4, +Y(A2 * 0.72), "cercle", "start", "sm");
  return FIG(400, 280, b2, R`Le rectangle $[-a,a]\times[-b,b]$ ($a = 2$, $b = 1$), son ellipse de John-Löwner (rouge, demi-axes $a\sqrt2$ et $b\sqrt2$, aire $2\pi ab$), et le cercle circonscrit (pointillés, aire $\pi(a^2+b^2)$, plus grande dès que $a\neq b$).`, "Ellipse minimale d'un rectangle");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "john-1", ...P, part: "Partie I", time: "30 min",
  title: "Volume d'un ellipsoïde",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $\xi_S$ est un compact convexe symétrique, et que $\sqrt{q_S}$ est une norme sur $\mathbb R^n$.</li>
<li>Montrer que $\operatorname{Vol}(\xi_S) = \mu(S)\operatorname{Vol}(B)$. Vérifier sur l'ellipse $\frac{x^2}{\alpha^2}+\frac{y^2}{\beta^2}\leqslant1$.</li>
<li>Montrer que $\xi_S\subset\xi_T$ si et seulement si $T\leqslant S$ au sens des formes quadratiques ($q_T\leqslant q_S$).</li></ol>`,
  decode: { donnees: [R`Théorème spectral ; changement de variables linéaire.`], but: R`Ramener le calcul du volume à celui de la boule par une application linéaire.`, cles: {} },
  steps: [
    Q(1, "Une norme", R`<p>$q_S(x) = \|S^{1/2}x\|^2$.</p>`, R`<p>Avec $S^{1/2}\in\mathcal S_n^{++}$ (racine carrée), $q_S(x) = {}^tx(S^{1/2})^2x = \|S^{1/2}x\|^2$, donc $\sqrt{q_S}(x) = \|S^{1/2}x\|$ : norme ($S^{1/2}$ inversible). $\xi_S$ en est la boule unité fermée : convexe, symétrique, fermée et bornée (normes équivalentes), donc compacte.</p>`),
    Q(2, "Le volume", R`<p>$\xi_S = S^{-1/2}(B)$.</p>`, R`<p>$x\in\xi_S\iff\|S^{1/2}x\|\leqslant1\iff S^{1/2}x\in B$, donc $\xi_S = S^{-1/2}(B)$ et</p>$$\operatorname{Vol}(\xi_S) = |\det S^{-1/2}|\operatorname{Vol}(B) = (\det S)^{-1/2}\operatorname{Vol}(B) = \mu(S)\operatorname{Vol}(B).$$<p>Ellipse : $S = \operatorname{diag}(\alpha^{-2},\beta^{-2})$, $\mu(S) = \alpha\beta$ et $\operatorname{Vol}(B) = \pi$ : aire $\pi\alpha\beta$. ✓</p>`, ["jo-jac"]),
    Q(3, "Inclusion d'ellipsoïdes", R`<p>Par homogénéité, $\xi_S\subset\xi_T\iff(q_S(x)\leqslant1\Rightarrow q_T(x)\leqslant1)$.</p>`, R`<p>Si $q_T\leqslant q_S$, $q_S(x)\leqslant1$ implique $q_T(x)\leqslant1$. Réciproquement, si $\xi_S\subset\xi_T$ et $x\neq0$, $y = \frac x{\sqrt{q_S(x)}}\in\xi_S\subset\xi_T$, donc $q_T(y) = \frac{q_T(x)}{q_S(x)}\leqslant1$ : $q_T\leqslant q_S$. (Un « grand » ellipsoïde correspond à une « petite » matrice.)</p>`)
  ],
  piege: R`Le volume est $(\det S)^{-1/2}$, une fonction <b>décroissante</b> de $S$ : minimiser le volume, c'est maximiser $\det S$, parmi les $S$ pour lesquelles $\xi_S$ contient $K$.`,
  methode: R`Volume d'une image linéaire : $\operatorname{Vol}(A(E)) = |\det A|\operatorname{Vol}(E)$ ; un ellipsoïde est l'image de la boule unité.`
},

/* ===================== Partie II ===================== */
{ id: "john-2", ...P, part: "Partie II", time: "30 min",
  title: "Stricte convexité de μ",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que $\mathcal S_n^{++}(\mathbb R)$ est convexe.</li>
<li>Soient $R,S\in\mathcal S_n^{++}(\mathbb R)$, $R = {}^tP\Delta P$, $S = {}^tP\Delta'P$ avec $\Delta = \operatorname{diag}(r_i)$, $\Delta' = \operatorname{diag}(s_i)$ (réduction simultanée, $r_i,s_i>0$). Pour $t\in\,]0,1[$, montrer que $$\mu\big(tR+(1-t)S\big)\leqslant\mu(R)^t\mu(S)^{1-t}\leqslant t\mu(R)+(1-t)\mu(S).$$</li>
<li>Montrer que l'inégalité est stricte si $R\neq S$ : $\mu$ est strictement convexe.</li></ol>`,
  decode: { donnees: [R`$\mu(tR+(1-t)S) = |\det P|^{-1}\prod(tr_i+(1-t)s_i)^{-1/2}$.`], but: R`Appliquer l'inégalité arithmético-géométrique coordonnée par coordonnée.`, cles: {} },
  steps: [
    Q(4, "Convexité de Sₙ⁺⁺", R`<p>$q_{tR+(1-t)S} = tq_R+(1-t)q_S$.</p>`, R`<p>$tR+(1-t)S$ est symétrique et, pour $x\neq0$, $\,{}^tx(tR+(1-t)S)x = tq_R(x)+(1-t)q_S(x)>0$.</p>`),
    Q(5, "L'inégalité", R`<p>$tr_i+(1-t)s_i\geqslant r_i^ts_i^{1-t}$, puis $x\mapsto x^{-1/2}$ décroissante.</p>`, R`<p>$tR+(1-t)S = {}^tP\operatorname{diag}(tr_i+(1-t)s_i)P$, donc $\mu(tR+(1-t)S) = |\det P|^{-1}\prod_i(tr_i+(1-t)s_i)^{-1/2}$. Par l'inégalité AM-GM pondérée, $tr_i+(1-t)s_i\geqslant r_i^ts_i^{1-t}$, et $x\mapsto x^{-1/2}$ décroît :</p>$$\mu(tR+(1-t)S)\leqslant|\det P|^{-1}\Big(\prod r_i^{-1/2}\Big)^t\Big(\prod s_i^{-1/2}\Big)^{1-t} = \mu(R)^t\mu(S)^{1-t},$$<p>car $\mu(R) = |\det P|^{-1}\prod r_i^{-1/2}$ (de même pour $S$) et $|\det P|^{-1} = (|\det P|^{-1})^t(|\det P|^{-1})^{1-t}$. Puis encore AM-GM : $\mu(R)^t\mu(S)^{1-t}\leqslant t\mu(R)+(1-t)\mu(S)$.</p>`, ["jo-red", "jo-agm"]),
    Q(6, "Stricte convexité", R`<p>Si $R\neq S$, alors $\Delta\neq\Delta'$ : un $r_i\neq s_i$.</p>`, R`<p>Si $R\neq S$, alors $\Delta\neq\Delta'$ ($P$ inversible) : il existe $i$ avec $r_i\neq s_i$, et l'AM-GM est stricte pour cet $i$. Donc la première inégalité de Q5 est stricte.</p><div class="sbox"><p>$\mu$ est strictement convexe sur $\mathcal S_n^{++}(\mathbb R)$ ; de façon équivalente, $\ln\det$ est strictement concave.</p></div>`)
  ],
  piege: R`On ne peut pas diagonaliser $R$ et $S$ dans une même base orthonormée en général (elles ne commutent pas) : la réduction simultanée utilise une base orthonormée pour $R$, pas pour le produit scalaire usuel.`,
  methode: R`Convexité d'une fonction de matrices définie par le déterminant : réduction simultanée, puis inégalité scalaire (concavité de $\ln$) coefficient par coefficient.`
},

/* ===================== Partie III ===================== */
{ id: "john-3", ...P, part: "Partie III", time: "40 min",
  title: "Existence, unicité, exemple",
  enonce: PRE + R`<p><b>Partie III.</b> Soit $K$ compact d'intérieur non vide, $r>0$ avec $K\subset rB$, $S_+ = r^{-2}I_n$, et $\mathcal C = \{S\in\mathcal S_n^{++}(\mathbb R) : \mu(S)\leqslant\mu(S_+),\ K\subset\xi_S\}$.</p><ol start="7">
<li>Montrer que $\mathcal C$ est non vide et fermé dans $\mathcal M_n(\mathbb R)$.</li>
<li>Soit $B(b,\delta)\subset K$. Montrer que $q_S(x)\leqslant4$ pour $S\in\mathcal C$ et $\|x\|\leqslant\delta$, puis que $\rho(S)\leqslant\frac4{\delta^2}$ : $\mathcal C$ est borné.</li>
<li>Montrer que $\mathcal C$ est convexe, et conclure : il existe un unique ellipsoïde centré en $0$ de volume minimal contenant $K$.</li>
<li>Soit $K = [-a,a]\times[-b,b]$. Montrer que l'ellipse minimale est invariante par les symétries $(x,y)\mapsto(-x,y)$ et $(x,y)\mapsto(x,-y)$, en déduire que $S$ est diagonale, puis que c'est $\frac{x^2}{2a^2}+\frac{y^2}{2b^2}\leqslant1$.</li></ol>`,
  decode: { donnees: [R`$\mu$ strictement convexe ; $\operatorname{Vol}(\xi_S) = \mu(S)\operatorname{Vol}(B)$.`], but: R`Minimiser une fonction continue strictement convexe sur un compact convexe.`, cles: {} },
  steps: [
    Q(7, "Non vide et fermé", R`<p>$\xi_{S_+} = rB\supset K$. Pour une limite $S$ : positivité, $\det S\geqslant\det S_+>0$, et $q_S\leqslant1$ sur $K$ passent à la limite.</p>`, R`<p>$\xi_{S_+} = rB\supset K$ : $S_+\in\mathcal C$. Soit $S_p\in\mathcal C$, $S_p\to S$. Par continuité, $S$ est symétrique, $\,{}^txSx\geqslant0$, $\det S_p\to\det S$ ; or $\mu(S_p)\leqslant\mu(S_+)$ donne $\det S_p\geqslant\det S_+$, donc $\det S\geqslant\det S_+>0$ : $S$ est positive inversible, donc définie positive, et $\mu(S)\leqslant\mu(S_+)$. Enfin, pour $x\in K$, $q_{S_p}(x)\leqslant1$ passe à la limite. Donc $S\in\mathcal C$.</p>`),
    Q(8, "Borné", R`<p>$\sqrt{q_S}(x)\leqslant\sqrt{q_S}(x+b)+\sqrt{q_S}(-b)\leqslant2$.</p>`, R`<p>Pour $\|x\|\leqslant\delta$, $x+b\in K$ et $b\in K$, donc par l'inégalité triangulaire pour la norme $\sqrt{q_S}$ (et la symétrie) :</p>$$\sqrt{q_S(x)}\leqslant\sqrt{q_S(x+b)}+\sqrt{q_S(b)}\leqslant2.$$<p>Pour $x$ vecteur propre de norme $\delta$, $Sx = \lambda x$ : $q_S(x) = \lambda\delta^2\leqslant4$. Donc $\rho(S) = |||S|||_2\leqslant\frac4{\delta^2}$ : $\mathcal C$ est borné.</p>`),
    Q(9, "Convexe, puis conclusion", R`<p>$q_{tS+(1-t)R} = tq_S+(1-t)q_R\leqslant1$ sur $K$. Unicité : le milieu de deux minimiseurs.</p>`, R`<p>Pour $S,R\in\mathcal C$, $T = tS+(1-t)R\in\mathcal S_n^{++}$ (Q4), $\mu(T)\leqslant t\mu(S)+(1-t)\mu(R)\leqslant\mu(S_+)$ (Q5), et $q_T\leqslant1$ sur $K$. Donc $\mathcal C$ est convexe.</p><p>$\mathcal C$ est fermé borné en dimension finie, donc compact ; $\mu$ continue y atteint son minimum. Tout ellipsoïde contenant $K$ de volume $\leqslant\operatorname{Vol}(rB)$ correspond à un élément de $\mathcal C$, donc ce minimum est le volume minimal. Si $S\neq R$ réalisent le minimum $m$, $T = \frac{S+R}2\in\mathcal C$ et $\mu(T)\lt\frac{\mu(S)+\mu(R)}2 = m$ (stricte convexité) : contradiction.</p><div class="sbox"><p>Il existe un unique ellipsoïde centré en $0$ de volume minimal contenant $K$.</p></div>`),
    Q(10, "Le rectangle", R`<p>Si $\xi_S$ est minimale, $\xi_{\,{}^tMSM}$ aussi pour $M$ une symétrie du rectangle. Puis maximiser $s_1s_2$ sous $s_1a^2+s_2b^2\leqslant1$.</p>`, R`<p>Soit $M = \operatorname{diag}(-1,1)$. $M$ conserve $K$ et les volumes, et $M(\xi_S) = \xi_{{}^tM^{-1}SM^{-1}} = \xi_{MSM}$. Donc $\xi_{MSM}$ contient $K$ et a le même volume : par unicité, $MSM = S$. Avec $S = \begin{pmatrix}s_1&c\\c&s_2\end{pmatrix}$, $MSM = \begin{pmatrix}s_1&-c\\-c&s_2\end{pmatrix}$, donc $c = 0$.</p><p>$\xi_S\supset K$ équivaut (par convexité) à contenir les sommets $(\pm a,\pm b)$ : $s_1a^2+s_2b^2\leqslant1$. On maximise $\det S = s_1s_2$ : par AM-GM, $s_1a^2\cdot s_2b^2\leqslant\big(\frac{s_1a^2+s_2b^2}2\big)^2\leqslant\frac14$, avec égalité si et seulement si $s_1a^2 = s_2b^2 = \frac12$.</p><div class="sbox">$$\xi = \Big\{\frac{x^2}{2a^2}+\frac{y^2}{2b^2}\leqslant1\Big\},\qquad\text{aire }2\pi ab.$$</div><p>Pour le carré ($a = b$), c'est le cercle circonscrit ; sinon, l'ellipse fait mieux que le cercle (aire $\pi(a^2+b^2)>2\pi ab$).</p>${figRect}`)
  ],
  piege: R`Contenir les quatre sommets suffit à contenir le rectangle, parce que l'ellipsoïde est convexe ; pour un compact non convexe, on raisonnerait sur son enveloppe convexe.`,
  methode: R`Existence et unicité d'un optimum : minimiser une fonction continue strictement convexe sur un compact convexe non vide. Puis l'unicité impose les symétries du problème à la solution.`
}
]);
})();

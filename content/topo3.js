/* Topologie des espaces vectoriels normés (Spé) : blocs « Normes » et « Espaces normés usuels ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 2 };
const { GRAPH, S, f1 } = window.__LA;
LEMME.rappels({
  "nrm-def": { t: "Définition d'une norme", b: R`$$N : E\to\mathbb R_+\text{ norme}\iff\left\{\begin{aligned}&N(x) = 0\Rightarrow x = 0\\&N(\lambda x) = |\lambda|N(x)\\&N(x+y)\leqslant N(x)+N(y)\end{aligned}\right.$$<p><b>Avant tout</b> : $N(x)\in\mathbb R_+$ bien défini (sup fini, série ou intégrale convergente).</p>` },
  "nrm-tri2": { t: "Seconde inégalité triangulaire", b: R`$$\big|N(x)-N(y)\big|\leqslant N(x-y)\ \Longrightarrow\ N\ 1\text{-lipschitzienne}.$$` },
  "nrm-cs": { t: "Cauchy-Schwarz dans 𝕂ⁿ", b: R`$$\sum a_ib_i\leqslant\Big(\sum a_i^2\Big)^{1/2}\Big(\sum b_i^2\Big)^{1/2};\qquad\Big|\sum x_iy_i\Big|\leqslant\|x\|_2\|y\|_2;\qquad\int|fg|\leqslant\|f\|_2\|g\|_2.$$` },
  "nrm-cmp": { t: "Comparaison de séries et d'intégrales positives", b: R`$$0\leqslant u_n\leqslant v_n,\ \sum v_n\text{ CV}\Rightarrow\sum u_n\leqslant\sum v_n;\qquad0\leqslant f\leqslant g,\ g\text{ intégrable}\Rightarrow f\text{ intégrable}.$$` }
});
const poly = (X, Y, pts, cls, st = "") => `<polygon points="${pts.map(([x, y]) => f1(X(x)) + "," + f1(Y(y))).join(" ")}" class="${cls}" style="${st}"/>`;
const figBoules = GRAPH({ w: 380, h: 320, x: [-1.7, 1.7], y: [-1.35, 1.35], xt: [-1, 1], xtl: ["−1", "1"], yt: [-1, 1], ytl: ["−1", "1"], xl: "x₁", yl: "x₂",
  extra: (X, Y) => poly(X, Y, [[1, 0], [0, 1], [-1, 0], [0, -1]], "vr", "fill:none;stroke-width:2.2")
    + poly(X, Y, Array.from({ length: 120 }, (_, k) => [Math.cos(k * Math.PI / 60), Math.sin(k * Math.PI / 60)]), "vb", "fill:none;stroke-width:2.2")
    + poly(X, Y, [[1, 1], [-1, 1], [-1, -1], [1, -1]], "vg", "fill:none;stroke-width:2.2")
    + S(X(0.3), Y(0.28), "‖·‖₁", "start", "sm r") + S(X(0.74), Y(0.8), "‖·‖₂", "start", "sm b") + S(X(1.06), Y(1.12), "‖·‖∞", "start", "sm g") },
  R`Boules unités fermées de $\mathbb R^2$ ($n = 1$, $p = 2$) : losange pour $\|\cdot\|_1$ (rouge), disque pour $\|\cdot\|_2$ (bleu), carré pour $\|\cdot\|_\infty$ (orange). Les inclusions $B_1\subset B_2\subset B_\infty$ traduisent $\|\cdot\|_\infty\leqslant\|\cdot\|_2\leqslant\|\cdot\|_1$.`, "Trois boules unités");
LEMME.exercises([
{ id: "topo-53", ...P, level: 1, time: "5 min",
  title: "La seconde inégalité triangulaire",
  enonce: R`<p>Soit $N$ une norme sur un $\mathbb K$-espace vectoriel $E$. Montrer que pour tous $x,y\in E$ : $\big|N(x)-N(y)\big|\leqslant N(x-y)$.</p>`,
  decode: { donnees: [R`Inégalité triangulaire et homogénéité.`], but: R`Écrire $x = (x-y)+y$, puis échanger les rôles.`, cles: {} },
  steps: [
    { t: "Une première inégalité", h: R`<p>$x = (x-y)+y$.</p>`, b: R`<p>Par l'inégalité triangulaire, $N(x) = N\big((x-y)+y\big)\leqslant N(x-y)+N(y)$, donc</p>$$N(x)-N(y)\leqslant N(x-y).$$`, rappels: ["nrm-def"] },
    { t: "Échanger x et y", h: R`<p>$N(y-x) = N(-(x-y)) = N(x-y)$.</p>`, b: R`<p>En échangeant les rôles : $N(y)-N(x)\leqslant N(y-x) = |-1|\,N(x-y) = N(x-y)$. Le nombre $N(x)-N(y)$ et son opposé sont tous deux $\leqslant N(x-y)$ ; or $|N(x)-N(y)|$ est l'un des deux. D'où</p><div class="sbox">$$\big|N(x)-N(y)\big|\leqslant N(x-y).$$</div><p>Conséquence : $N$ est $1$-lipschitzienne, donc continue sur $(E,N)$.</p>` }
  ],
  piege: R`Ne pas oublier l'homogénéité pour justifier $N(y-x) = N(x-y)$.`,
  methode: R`Pour majorer une valeur absolue $|a|$ : majorer $a$ et $-a$.`
},
{ id: "topo-54", ...P, level: 2, time: "15 min",
  title: "Deux normes de même boule unité sont égales",
  enonce: R`<p>Soient $N_1$ et $N_2$ deux normes sur un $\mathbb K$-espace vectoriel $E$.</p><ol><li>On suppose que les boules unités <b>fermées</b> de $N_1$ et $N_2$ sont égales. Montrer que $N_1 = N_2$.</li><li>Même question avec les boules unités <b>ouvertes</b>.</li></ol>`,
  decode: { donnees: [R`$B_i = \{x : N_i(x)\leqslant1\}$, $B_i^\circ = \{x : N_i(x)\lt1\}$.`], but: R`Normaliser $x$ pour le placer dans la boule, puis utiliser l'homogénéité.`, cles: {} },
  steps: [
    { t: "1) Boules fermées", h: R`<p>Pour $x\neq0$, $\frac x{N_1(x)}$ est sur la sphère unité de $N_1$.</p>`, b: R`<p>Soit $x\neq0$ et $y = \frac x{N_1(x)}$ : $N_1(y) = \frac{N_1(x)}{N_1(x)} = 1$, donc $y\in B_1 = B_2$, soit $N_2(y)\leqslant1$. Par homogénéité, $N_2(y) = \frac{N_2(x)}{N_1(x)}$, donc $N_2(x)\leqslant N_1(x)$. Les hypothèses étant symétriques, $N_1(x)\leqslant N_2(x)$. Enfin $N_1(0) = N_2(0) = 0$. Donc $N_1 = N_2$.</p>`, rappels: ["nrm-def"] },
    { t: "2) Boules ouvertes", h: R`<p>Pour $\varepsilon>0$, $y = \frac x{(1+\varepsilon)N_1(x)}$ est dans la boule ouverte de $N_1$.</p>`, b: R`<p>Soit $x\neq0$ et $\varepsilon>0$. Posons $y = \frac x{(1+\varepsilon)N_1(x)}$ : $N_1(y) = \frac1{1+\varepsilon}\lt1$, donc $y$ est dans la boule ouverte de $N_1$, qui est celle de $N_2$ : $N_2(y)\lt1$, soit</p>$$N_2(x)\lt(1+\varepsilon)N_1(x).$$<p>C'est vrai pour tout $\varepsilon>0$ ; en faisant $\varepsilon\to0$, $N_2(x)\leqslant N_1(x)$. Par symétrie, $N_1(x)\leqslant N_2(x)$, donc $N_1 = N_2$.</p>` }
  ],
  piege: R`Avec les boules ouvertes, $\frac x{N_1(x)}$ est sur la sphère, donc <b>pas</b> dans la boule ouverte : il faut un $\varepsilon$ de marge.`,
  methode: R`Une norme est entièrement déterminée par sa boule unité (ouverte ou fermée) : $N(x) = \inf\{t>0 : x\in tB\}$.`
},
{ id: "topo-55", ...P, level: 2, time: "20 min",
  title: "‖x‖ + ‖y‖ ≤ C max(‖x + y‖, ‖x − y‖) : constante 2, puis √2 (Mines)",
  enonce: R`<p>Soit $(E,\|\cdot\|)$ un espace vectoriel normé sur $\mathbb K = \mathbb R$ ou $\mathbb C$.</p><ol><li>Montrer que pour tous $x,y\in E$ : $\|x\|+\|y\|\leqslant2\max\{\|x+y\|,\|x-y\|\}$.</li><li>Montrer qu'il peut y avoir égalité avec $x\neq0$ et $y\neq0$.</li></ol><p>On suppose désormais la norme euclidienne.</p><ol start="3"><li>Montrer que pour tous $x,y\in E$ : $\|x\|+\|y\|\leqslant\sqrt2\max\{\|x+y\|,\|x-y\|\}$.</li><li>Peut-on améliorer la constante $\sqrt2$ ?</li></ol>`,
  decode: { donnees: [R`$x = \frac12(x+y)+\frac12(x-y)$, $y = \frac12(x+y)-\frac12(x-y)$ ; identité du parallélogramme.`], but: R`Inégalité triangulaire pour 1) ; parallélogramme pour 3).`, cles: {} },
  steps: [
    { t: "1) Constante 2", h: R`<p>$x = \frac12(x+y)+\frac12(x-y)$.</p>`, b: R`<p>Notons $M = \max\{\|x+y\|,\|x-y\|\}$. Par l'inégalité triangulaire :</p>$$\|x\| = \Big\|\tfrac12(x+y)+\tfrac12(x-y)\Big\|\leqslant\tfrac12\|x+y\|+\tfrac12\|x-y\|\leqslant M,$$<p>et de même $\|y\| = \|\frac12(x+y)-\frac12(x-y)\|\leqslant M$. En sommant : $\|x\|+\|y\|\leqslant2M$.</p>` },
    { t: "2) Cas d'égalité", h: R`<p>$\|\cdot\|_\infty$ sur $\mathbb R^2$, $x = (1,0)$, $y = (0,1)$.</p>`, b: R`<p>Sur $\mathbb R^2$ muni de $\|\cdot\|_\infty$, avec $x = (1,0)$ et $y = (0,1)$ : $\|x\|_\infty+\|y\|_\infty = 2$ et $x\pm y = (1,\pm1)$, de norme $1$. Donc $2 = 2\cdot1$ : égalité, avec $x,y$ non nuls.</p>` },
    { t: "3) Parallélogramme", h: R`<p>$(a+b)^2\leqslant2a^2+2b^2$ et $\|x\|^2+\|y\|^2 = \frac12(\|x+y\|^2+\|x-y\|^2)$.</p>`, b: R`<p>D'une part $(\|x\|+\|y\|)^2\leqslant2\|x\|^2+2\|y\|^2$ (car $2ab\leqslant a^2+b^2$). D'autre part, pour une norme euclidienne, l'identité du parallélogramme donne</p>$$\|x\|^2+\|y\|^2 = \frac12\big(\|x+y\|^2+\|x-y\|^2\big)\leqslant\frac12\cdot2M^2 = M^2.$$<p>Donc $(\|x\|+\|y\|)^2\leqslant2M^2$, et en prenant la racine :</p><div class="sbox">$$\|x\|+\|y\|\leqslant\sqrt2\,\max\{\|x+y\|,\|x-y\|\}.$$</div><p>(L'identité du parallélogramme s'obtient en développant $\|x\pm y\|^2 = \|x\|^2\pm2\,\mathrm{Re}(x|y)+\|y\|^2$ et en sommant.)</p>` },
    { t: "4) Optimalité", h: R`<p>$x = (1,0)$, $y = (0,1)$ dans $\mathbb R^2$ euclidien.</p>`, b: R`<p>Dans $\mathbb R^2$ euclidien, avec $x = (1,0)$, $y = (0,1)$ : $\|x\|+\|y\| = 2$ et $\|x\pm y\| = \sqrt2$, donc $\sqrt2\cdot\sqrt2 = 2$ : il y a égalité. La constante $\sqrt2$ ne peut pas être améliorée (dès que $\dim E\geqslant2$).</p>` }
  ],
  piege: R`Dans 3), il faut utiliser que la norme est euclidienne : avec $\|\cdot\|_\infty$, la constante $2$ est atteinte (question 2).`,
  methode: R`Majoration faisant intervenir $x\pm y$ : réécrire $x$ et $y$ comme demi-somme et demi-différence ; en euclidien, penser au parallélogramme.`
},
{ id: "topo-56", ...P, level: 3, time: "40 min",
  title: "Une norme est euclidienne ⟺ identité du parallélogramme",
  enonce: R`<p>Soit $E$ un espace vectoriel réel et $\|\cdot\|$ une norme sur $E$. Montrer que $\|\cdot\|$ est euclidienne (c'est-à-dire associée à un produit scalaire) si et seulement si</p>$$\forall(x,y)\in E^2,\quad\|x+y\|^2+\|x-y\|^2 = 2\big(\|x\|^2+\|y\|^2\big).$$`,
  decode: { donnees: [R`Candidat : $\varphi(x,y) = \frac14\big(\|x+y\|^2-\|x-y\|^2\big)$ (identité de polarisation).`], but: R`Montrer que $\varphi$ est un produit scalaire : symétrie et positivité immédiates, additivité par le parallélogramme, puis homogénéité sur $\mathbb N$, $\mathbb Z$, $\mathbb Q$, $\mathbb R$.`, cles: {} },
  steps: [
    { t: "Sens direct", h: R`<p>Développer $\|x\pm y\|^2$.</p>`, b: R`<p>Si $\|x\|^2 = (x|x)$, alors $\|x\pm y\|^2 = \|x\|^2\pm2(x|y)+\|y\|^2$ ; en sommant, $\|x+y\|^2+\|x-y\|^2 = 2\|x\|^2+2\|y\|^2$.</p>` },
    { t: "Le candidat φ", h: R`<p>$\varphi(x,y) = \frac14(\|x+y\|^2-\|x-y\|^2)$.</p>`, b: R`<p>Supposons l'identité du parallélogramme et posons $\varphi(x,y) = \frac14\big(\|x+y\|^2-\|x-y\|^2\big)$. Immédiatement :</p><ul><li>$\varphi(y,x) = \varphi(x,y)$ (car $\|y-x\| = \|x-y\|$) ;</li><li>$\varphi(x,x) = \frac14\|2x\|^2 = \|x\|^2$, donc $\varphi(x,x)\geqslant0$ avec égalité ssi $x = 0$ ;</li><li>$\varphi(-x,y) = \frac14(\|y-x\|^2-\|x+y\|^2) = -\varphi(x,y)$ et $\varphi(0,y) = 0$.</li></ul><p>Il reste la linéarité en la première variable.</p>` },
    { t: "Une identité clé", h: R`<p>Parallélogramme avec $a = x+z$, $b = y+z$, puis avec $x-z$, $y-z$.</p>`, b: R`<p>Le parallélogramme appliqué à $a = x+z$ et $b = y+z$ (avec $a+b = x+y+2z$, $a-b = x-y$) donne</p>$$\|x+z\|^2+\|y+z\|^2 = \tfrac12\big(\|x+y+2z\|^2+\|x-y\|^2\big).$$<p>De même avec $x-z$ et $y-z$ :</p>$$\|x-z\|^2+\|y-z\|^2 = \tfrac12\big(\|x+y-2z\|^2+\|x-y\|^2\big).$$<p>En soustrayant et en divisant par $4$ :</p>$$\begin{aligned}\varphi(x,z)+\varphi(y,z)&= \tfrac18\big(\|x+y+2z\|^2-\|x+y-2z\|^2\big)\\&= \tfrac12\varphi(x+y,2z).\quad(\ast)\end{aligned}$$` },
    { t: "Additivité", h: R`<p>$(\ast)$ avec $y = 0$ : $\varphi(x,2z) = 2\varphi(x,z)$.</p>`, b: R`<p>Avec $y = 0$ dans $(\ast)$ : $\varphi(x,z) = \frac12\varphi(x,2z)$, c'est-à-dire $\varphi(x,2z) = 2\varphi(x,z)$ pour tous $x,z$. Appliqué à $x+y$ : $\frac12\varphi(x+y,2z) = \varphi(x+y,z)$. Donc $(\ast)$ devient</p><div class="sbox">$$\varphi(x+y,z) = \varphi(x,z)+\varphi(y,z).$$</div>` },
    { t: "Homogénéité rationnelle", h: R`<p>Récurrence sur $n$, puis $-x$, puis $\frac pq$.</p>`, b: R`<p>Par récurrence, $\varphi(nx,z) = n\varphi(x,z)$ pour $n\in\mathbb N$ (additivité). Avec $\varphi(-x,z) = -\varphi(x,z)$, c'est vrai pour $n\in\mathbb Z$. Pour $r = \frac pq$ ($p\in\mathbb Z$, $q\in\mathbb N^*$) : $q\,\varphi(rx,z) = \varphi(qrx,z) = \varphi(px,z) = p\,\varphi(x,z)$, donc $\varphi(rx,z) = r\varphi(x,z)$.</p>` },
    { t: "Homogénéité réelle", h: R`<p>$\lambda\mapsto\varphi(\lambda x,z)$ est continue ; densité de $\mathbb Q$.</p>`, b: R`<p>Fixons $x,z$. Par la seconde inégalité triangulaire, $\big|\|\lambda x+z\|-\|\mu x+z\|\big|\leqslant|\lambda-\mu|\,\|x\|$ : $\lambda\mapsto\|\lambda x\pm z\|$ est continue, donc $g : \lambda\mapsto\varphi(\lambda x,z)-\lambda\varphi(x,z)$ est continue sur $\mathbb R$. Elle est nulle sur $\mathbb Q$, dense dans $\mathbb R$ : elle est nulle partout. Ainsi $\varphi$ est linéaire en la première variable, donc bilinéaire par symétrie, symétrique, définie positive : c'est un produit scalaire, et $\varphi(x,x) = \|x\|^2$. La norme est euclidienne.</p>`, rappels: ["nrm-tri2"] }
  ],
  piege: R`L'additivité ne donne directement l'homogénéité que pour les rationnels : le passage aux réels demande un argument de continuité.`,
  methode: R`Théorème de Jordan-von Neumann : poser le produit scalaire par polarisation, puis additivité $\to$ $\mathbb Q$-linéarité $\to$ $\mathbb R$-linéarité par continuité.`
},
{ id: "topo-57", ...P, level: 1, time: "20 min",
  title: "Les normes ‖·‖₁, ‖·‖₂, ‖·‖∞ sur les matrices",
  enonce: R`<p>Pour $A = (a_{ij})\in\mathcal M_{n,p}(\mathbb K)$, on pose</p>$$\begin{gathered}\|A\|_1 = \sum_{i=1}^n\sum_{j=1}^p|a_{ij}|,\qquad\|A\|_\infty = \max_{i,j}|a_{ij}|,\\\|A\|_2 = \Big(\sum_{i=1}^n\sum_{j=1}^p|a_{ij}|^2\Big)^{1/2}.\end{gathered}$$<p>Montrer que ce sont des normes sur $\mathcal M_{n,p}(\mathbb K)$.</p>`,
  decode: { donnees: [R`$|a+b|\leqslant|a|+|b|$ dans $\mathbb K$.`], but: R`Vérifier les trois axiomes ; pour $\|\cdot\|_2$, l'inégalité triangulaire vient de Cauchy-Schwarz.`, cles: {} },
  steps: [
    { t: "Séparation et homogénéité", h: R`<p>Une somme (ou un max) de réels positifs est nulle ssi chacun l'est.</p>`, b: R`<p>Les trois applications sont à valeurs dans $\mathbb R_+$. Si $\|A\|_1 = 0$ (resp. $\|A\|_2 = 0$, $\|A\|_\infty = 0$), chaque $|a_{ij}|$ est nul, donc $A = 0$. Homogénéité : $|\lambda a_{ij}| = |\lambda||a_{ij}|$, d'où $\|\lambda A\|_1 = |\lambda|\|A\|_1$, $\|\lambda A\|_2 = (|\lambda|^2\sum|a_{ij}|^2)^{1/2} = |\lambda|\|A\|_2$, $\|\lambda A\|_\infty = |\lambda|\|A\|_\infty$.</p>`, rappels: ["nrm-def"] },
    { t: "Triangulaire pour ‖·‖₁ et ‖·‖∞", h: R`<p>$|a_{ij}+b_{ij}|\leqslant|a_{ij}|+|b_{ij}|$.</p>`, b: R`<p>En sommant $|a_{ij}+b_{ij}|\leqslant|a_{ij}|+|b_{ij}|$ : $\|A+B\|_1\leqslant\|A\|_1+\|B\|_1$. Et pour tous $i,j$ : $|a_{ij}+b_{ij}|\leqslant\|A\|_\infty+\|B\|_\infty$, donc en passant au max, $\|A+B\|_\infty\leqslant\|A\|_\infty+\|B\|_\infty$.</p>` },
    { t: "Triangulaire pour ‖·‖₂", h: R`<p>Développer $\sum(|a|+|b|)^2$ et majorer $\sum|a||b|$ par Cauchy-Schwarz.</p>`, b: R`<p>Notons $\alpha_{ij} = |a_{ij}|$, $\beta_{ij} = |b_{ij}|$. Alors</p>$$\begin{aligned}\|A+B\|_2^2&\leqslant\sum(\alpha_{ij}+\beta_{ij})^2 = \|A\|_2^2+2\sum\alpha_{ij}\beta_{ij}+\|B\|_2^2\\&\leqslant\|A\|_2^2+2\|A\|_2\|B\|_2+\|B\|_2^2 = (\|A\|_2+\|B\|_2)^2,\end{aligned}$$<p>par Cauchy-Schwarz dans $\mathbb R^{np}$. En prenant la racine : $\|A+B\|_2\leqslant\|A\|_2+\|B\|_2$.</p><p>Ce sont simplement les normes usuelles de $\mathbb K^{np}$, transportées par l'isomorphisme qui range les coefficients en colonne.</p>${figBoules}`, rappels: ["nrm-cs"] }
  ],
  piege: R`Pour $\mathbb K = \mathbb C$, $\|A\|_2^2 = \sum|a_{ij}|^2$, pas $\sum a_{ij}^2$ (qui peut être négatif ou complexe).`,
  methode: R`Norme $2$ : l'inégalité triangulaire se ramène toujours à Cauchy-Schwarz.`
},
{ id: "topo-58", ...P, level: 1, time: "20 min",
  title: "L'espace L¹(I, 𝕂) des fonctions continues intégrables",
  enonce: R`<p>Soit $I$ un intervalle d'intérieur non vide. On note $L^1(I,\mathbb K)$ l'ensemble des fonctions $f : I\to\mathbb K$ continues et intégrables, c'est-à-dire telles que $\int_I|f|\lt+\infty$. Montrer que $L^1(I,\mathbb K)$ est un $\mathbb K$-espace vectoriel et que $\|f\|_1 = \int_I|f(t)|\,dt$ y définit une norme.</p>`,
  decode: { donnees: [R`$|\lambda f+\mu g|\leqslant|\lambda||f|+|\mu||g|$.`], but: R`Sous-espace de $\mathcal C(I,\mathbb K)$, puis les axiomes de norme.`, cles: {} },
  steps: [
    { t: "Sous-espace vectoriel", h: R`<p>Comparaison de fonctions positives.</p>`, b: R`<p>$L^1(I,\mathbb K)\subset\mathcal C(I,\mathbb K)$, qui est un espace vectoriel, et la fonction nulle est intégrable. Soient $f,g\in L^1$ et $\lambda,\mu\in\mathbb K$. $\lambda f+\mu g$ est continue et pour tout $t\in I$ :</p>$$|(\lambda f+\mu g)(t)|\leqslant|\lambda||f(t)|+|\mu||g(t)|,$$<p>fonction positive intégrable. Par comparaison, $\lambda f+\mu g$ est intégrable. Donc $L^1(I,\mathbb K)$ est un sous-espace vectoriel de $\mathcal C(I,\mathbb K)$.</p>`, rappels: ["nrm-cmp"] },
    { t: "Les axiomes", h: R`<p>Séparation : $|f|$ continue positive d'intégrale nulle sur un intervalle d'intérieur non vide.</p>`, b: R`<p>$\|f\|_1$ est bien défini et positif. Si $\|f\|_1 = 0$, la fonction $|f|$, continue et positive, est d'intégrale nulle sur $I$ d'intérieur non vide : elle est nulle, donc $f = 0$. Homogénéité : $\|\lambda f\|_1 = \int_I|\lambda||f| = |\lambda|\|f\|_1$. Triangulaire :</p>$$\|f+g\|_1 = \int_I|f+g|\leqslant\int_I(|f|+|g|) = \|f\|_1+\|g\|_1.$$<p>$\|\cdot\|_1$ est une norme.</p>`, rappels: ["nrm-def"] }
  ],
  piege: R`La continuité est indispensable pour la séparation : sur les fonctions continues par morceaux, $\|f\|_1 = 0$ n'impose pas $f = 0$ (une fonction nulle sauf en un point).`,
  methode: R`Norme intégrale : séparation par « continue, positive, d'intégrale nulle ».`
},
{ id: "topo-59", ...P, level: 1, time: "15 min",
  title: "L'espace ℓ¹ des suites sommables",
  enonce: R`<p>On note $\ell^1(\mathbb N,\mathbb K)$ l'ensemble des suites $u = (u_n)\in\mathbb K^{\mathbb N}$ telles que $\sum|u_n|$ converge. Montrer que c'est un $\mathbb K$-espace vectoriel et que $\|u\|_1 = \sum_{n=0}^{+\infty}|u_n|$ y définit une norme.</p>`,
  decode: { donnees: [R`$|\lambda u_n+\mu v_n|\leqslant|\lambda||u_n|+|\mu||v_n|$.`], but: R`Comparaison de séries à termes positifs.`, cles: {} },
  steps: [
    { t: "Sous-espace vectoriel", h: R`<p>Comparaison de séries positives.</p>`, b: R`<p>La suite nulle est dans $\ell^1$. Pour $u,v\in\ell^1$ et $\lambda,\mu\in\mathbb K$ : $|\lambda u_n+\mu v_n|\leqslant|\lambda||u_n|+|\mu||v_n|$, terme général d'une série convergente. Par comparaison, $\lambda u+\mu v\in\ell^1$ : c'est un sous-espace vectoriel de $\mathbb K^{\mathbb N}$.</p>`, rappels: ["nrm-cmp"] },
    { t: "Les axiomes", h: R`<p>Une série de termes positifs de somme nulle a tous ses termes nuls.</p>`, b: R`<p>Si $\|u\|_1 = 0$, chaque $|u_n|\leqslant\sum_k|u_k| = 0$, donc $u = 0$. $\|\lambda u\|_1 = \sum|\lambda||u_n| = |\lambda|\|u\|_1$. Et</p>$$\|u+v\|_1 = \sum_{n=0}^{+\infty}|u_n+v_n|\leqslant\sum_{n=0}^{+\infty}(|u_n|+|v_n|) = \|u\|_1+\|v\|_1.$$` }
  ],
  piege: R`Les manipulations de sommes infinies (somme de deux séries, comparaison) ne sont licites qu'une fois la convergence établie.`,
  methode: R`Espaces de suites : comparaison terme à terme puis sommation.`
},
{ id: "topo-60", ...P, level: 2, time: "25 min",
  title: "L'espace L²(I, 𝕂) des fonctions continues de carré intégrable",
  enonce: R`<p>Soit $I$ un intervalle d'intérieur non vide et $L^2(I,\mathbb K)$ l'ensemble des fonctions continues $f : I\to\mathbb K$ telles que $\int_I|f|^2\lt+\infty$. Montrer que $L^2(I,\mathbb K)$ est un $\mathbb K$-espace vectoriel et que $\|f\|_2 = \big(\int_I|f(t)|^2dt\big)^{1/2}$ y définit une norme.</p>`,
  decode: { donnees: [R`$2ab\leqslant a^2+b^2$ ; Cauchy-Schwarz sur un segment.`], but: R`Stabilité par somme via $(a+b)^2\leqslant2a^2+2b^2$ ; triangulaire via Cauchy-Schwarz sur les segments puis passage à la borne supérieure.`, cles: {} },
  steps: [
    { t: "Sous-espace vectoriel", h: R`<p>$|f+g|^2\leqslant(|f|+|g|)^2\leqslant2|f|^2+2|g|^2$.</p>`, b: R`<p>$0\in L^2$. Pour $\lambda\in\mathbb K$, $|\lambda f|^2 = |\lambda|^2|f|^2$ est intégrable. Pour $f,g\in L^2$ :</p>$$|f+g|^2\leqslant(|f|+|g|)^2 = |f|^2+2|f||g|+|g|^2\leqslant2\big(|f|^2+|g|^2\big),$$<p>car $2ab\leqslant a^2+b^2$. Par comparaison, $f+g\in L^2$. C'est un sous-espace vectoriel de $\mathcal C(I,\mathbb K)$.</p>`, rappels: ["nrm-cmp"] },
    { t: "Séparation et homogénéité", h: R`<p>$|f|^2$ continue positive d'intégrale nulle.</p>`, b: R`<p>Si $\|f\|_2 = 0$, $|f|^2$ est continue, positive, d'intégrale nulle sur $I$ : $f = 0$. Et $\|\lambda f\|_2 = \big(|\lambda|^2\int|f|^2\big)^{1/2} = |\lambda|\|f\|_2$.</p>` },
    { t: "Cauchy-Schwarz sur I", h: R`<p>Sur un segment $[a,b]\subset I$ : $\int_a^b|f||g|\leqslant\|f\|_2\|g\|_2$, puis sup sur $[a,b]$.</p>`, b: R`<p>Pour tout segment $[a,b]\subset I$, Cauchy-Schwarz pour les intégrales sur un segment donne</p>$$\int_a^b|f||g|\leqslant\Big(\int_a^b|f|^2\Big)^{1/2}\Big(\int_a^b|g|^2\Big)^{1/2}\leqslant\|f\|_2\|g\|_2.$$<p>La fonction $|f||g|\leqslant\frac12(|f|^2+|g|^2)$ est intégrable sur $I$, et son intégrale sur $I$ est la borne supérieure des intégrales sur les segments inclus dans $I$ (fonction positive) : $\int_I|f||g|\leqslant\|f\|_2\|g\|_2$.</p>`, rappels: ["nrm-cs"] },
    { t: "Inégalité triangulaire", h: R`<p>Développer $(|f|+|g|)^2$.</p>`, b: R`<p>$$\|f+g\|_2^2\leqslant\int_I(|f|+|g|)^2 = \|f\|_2^2+2\int_I|f||g|+\|g\|_2^2\leqslant(\|f\|_2+\|g\|_2)^2.$$<p>D'où $\|f+g\|_2\leqslant\|f\|_2+\|g\|_2$ : $\|\cdot\|_2$ est une norme.</p>` }
  ],
  piege: R`Cauchy-Schwarz est d'abord connu sur les segments : sur un intervalle quelconque, il faut passer à la limite (ou à la borne supérieure).`,
  methode: R`Norme $L^2$ : stabilité par $(a+b)^2\leqslant2a^2+2b^2$, triangulaire par Cauchy-Schwarz.`
},
{ id: "topo-61", ...P, level: 2, time: "25 min",
  title: "L'espace ℓ² des suites de carré sommable",
  enonce: R`<p>On note $\ell^2(\mathbb N,\mathbb K)$ l'ensemble des suites $u\in\mathbb K^{\mathbb N}$ telles que $\sum|u_n|^2$ converge. Montrer que $\ell^2(\mathbb N,\mathbb K)$ est un $\mathbb K$-espace vectoriel normé par $\|u\|_2 = \big(\sum_{n=0}^{+\infty}|u_n|^2\big)^{1/2}$.</p>`,
  decode: { donnees: [R`$|u_n+v_n|^2\leqslant2|u_n|^2+2|v_n|^2$ ; Cauchy-Schwarz pour les sommes finies.`], but: R`Même schéma que pour $L^2$ : sommes partielles puis passage à la limite.`, cles: {} },
  steps: [
    { t: "Sous-espace vectoriel", h: R`<p>$|u_n+v_n|^2\leqslant2(|u_n|^2+|v_n|^2)$.</p>`, b: R`<p>La suite nulle est dans $\ell^2$, et $|\lambda u_n|^2 = |\lambda|^2|u_n|^2$. Pour $u,v\in\ell^2$ : $|u_n+v_n|^2\leqslant(|u_n|+|v_n|)^2\leqslant2|u_n|^2+2|v_n|^2$, terme général d'une série convergente. Par comparaison, $u+v\in\ell^2$.</p>`, rappels: ["nrm-cmp"] },
    { t: "Séparation et homogénéité", h: R`<p>Somme de termes positifs nulle.</p>`, b: R`<p>Si $\|u\|_2 = 0$, chaque $|u_n|^2$ est nul : $u = 0$. $\|\lambda u\|_2 = (|\lambda|^2\sum|u_n|^2)^{1/2} = |\lambda|\|u\|_2$.</p>` },
    { t: "Inégalité triangulaire", h: R`<p>Sur les sommes partielles : Minkowski fini $\big(\sum_{n\leqslant N}|u_n+v_n|^2\big)^{1/2}\leqslant\|u\|_2+\|v\|_2$, puis $N\to\infty$.</p>`, b: R`<p>Fixons $N$. Dans $\mathbb K^{N+1}$ muni de la norme $2$ usuelle (exercice sur les matrices avec $p = 1$) :</p>$$\Big(\sum_{n=0}^N|u_n+v_n|^2\Big)^{1/2}\leqslant\Big(\sum_{n=0}^N|u_n|^2\Big)^{1/2}+\Big(\sum_{n=0}^N|v_n|^2\Big)^{1/2}\leqslant\|u\|_2+\|v\|_2.$$<p>Le membre de gauche est croissant en $N$ et tend vers $\|u+v\|_2$ : en passant à la limite, $\|u+v\|_2\leqslant\|u\|_2+\|v\|_2$.</p>`, rappels: ["nrm-cs"] }
  ],
  piege: R`Majorer d'abord les sommes partielles par une quantité <b>indépendante de $N$</b>, puis passer à la limite.`,
  methode: R`Normes sur des espaces de suites : prouver l'inégalité en dimension finie (sommes partielles) puis passer à la limite.`
},
{ id: "topo-62", ...P, level: 2, time: "20 min",
  title: "La norme triple (norme subordonnée) d'un endomorphisme",
  enonce: R`<p>Soit $E$ un espace normé de dimension finie non nulle. Pour $u\in\mathcal L(E)$, on pose</p>$$|||u||| = \sup_{x\in E\setminus\{0\}}\frac{\|u(x)\|}{\|x\|}.$$<ol><li>Vérifier que cette borne supérieure existe et que $\|u(x)\|\leqslant|||u|||\,\|x\|$ pour tout $x\in E$.</li><li>Montrer que $|||\cdot|||$ est une norme sur $\mathcal L(E)$ et que $|||u\circ v|||\leqslant|||u|||\,|||v|||$ pour tous $u,v\in\mathcal L(E)$.</li></ol>`,
  decode: { donnees: [R`En dimension finie, toute application linéaire est continue, donc $\exists k,\ \|u(x)\|\leqslant k\|x\|$.`], but: R`Existence par majoration ; puis axiomes, la sous-multiplicativité par composition des majorations.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>$u$ linéaire en dimension finie est lipschitzienne.</p>`, b: R`<p>$E$ étant de dimension finie, $u$ est continue, donc il existe $k\geqslant0$ avec $\|u(x)\|\leqslant k\|x\|$ pour tout $x$. L'ensemble $\big\{\frac{\|u(x)\|}{\|x\|} : x\neq0\big\}$ est non vide ($E\neq\{0\}$) et majoré par $k$ : sa borne supérieure existe. Pour $x\neq0$, $\frac{\|u(x)\|}{\|x\|}\leqslant|||u|||$, soit $\|u(x)\|\leqslant|||u|||\,\|x\|$ ; pour $x = 0$, c'est $0\leqslant0$.</p>` },
    { t: "2) Axiomes de norme", h: R`<p>$|||u||| = 0\Rightarrow u(x) = 0$ pour tout $x$.</p>`, b: R`<p>$|||u|||\geqslant0$. Si $|||u||| = 0$, alors $\|u(x)\|\leqslant0$ pour tout $x$ : $u = 0$. Homogénéité : $\frac{\|\lambda u(x)\|}{\|x\|} = |\lambda|\frac{\|u(x)\|}{\|x\|}$, et le sup d'un ensemble multiplié par $|\lambda|\geqslant0$ est multiplié par $|\lambda|$. Triangulaire : pour $x\neq0$,</p>$$\frac{\|(u+v)(x)\|}{\|x\|}\leqslant\frac{\|u(x)\|+\|v(x)\|}{\|x\|}\leqslant|||u|||+|||v|||,$$<p>donc $|||u+v|||\leqslant|||u|||+|||v|||$ (le sup est le plus petit majorant).</p>`, rappels: ["nrm-def"] },
    { t: "2) Sous-multiplicativité", h: R`<p>$\|u(v(x))\|\leqslant|||u|||\,\|v(x)\|\leqslant|||u|||\,|||v|||\,\|x\|$.</p>`, b: R`<p>Pour tout $x$, en appliquant deux fois 1) :</p>$$\|u(v(x))\|\leqslant|||u|||\,\|v(x)\|\leqslant|||u|||\,|||v|||\,\|x\|.$$<p>En divisant par $\|x\|$ ($x\neq0$) et en passant au sup : $|||u\circ v|||\leqslant|||u|||\,|||v|||$. Remarque : $|||\mathrm{Id}||| = 1$, et $|||u||| = \sup_{\|x\| = 1}\|u(x)\|$ par homogénéité.</p>` }
  ],
  piege: R`L'existence de la borne supérieure utilise la dimension finie (continuité automatique) ; en dimension infinie, $|||u|||$ peut être infinie.`,
  methode: R`Pour majorer un sup : majorer chaque élément par une quantité fixe, puis « le sup est le plus petit majorant ».`
}
]);
})();

/* Topologie des espaces vectoriels normés (Spé) : bloc « Comparaison de normes ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 2 };
const { GRAPH, S, f1 } = window.__LA;
LEMME.rappels({
  "nrm-equiv": { t: "Comparer deux normes", b: R`<div class="sbox">$$N_2\ \text{dominée par}\ N_1\iff\exists C,\ N_2\leqslant CN_1.$$</div>$$\frac{N_2(x_n)}{N_1(x_n)}\to+\infty\ \Longrightarrow\ N_2\ \text{non dominée},\qquad\dim E\lt\infty\ \Longrightarrow\ \text{normes équivalentes}.$$` },
  "nrm-suites": { t: "Normes et convergence", b: R`$$N_2\leqslant CN_1,\ x_n\xrightarrow{N_1}\ell\ \Longrightarrow\ x_n\xrightarrow{N_2}\ell;\qquad\text{CV}\Rightarrow\text{bornée};\qquad N(x_n)\to+\infty\Rightarrow\text{DV}.$$` },
  "nrm-edo": { t: "Résoudre y′ + ay = g", b: R`<p>$f(0) = 0$ :</p><div class="sbox">$$(fe^{at})' = (f'+af)e^{at}\ \Longrightarrow\ f(x) = e^{-ax}\int_0^x\big(f'(t)+af(t)\big)e^{at}\,dt.$$</div>$$y''+y = g,\ y(0) = y'(0) = 0\ \Longrightarrow\ y(x) = \int_0^x\sin(x-t)\,g(t)\,dt.$$` }
});
const poly = (X, Y, pts, cls, st = "") => `<polygon points="${pts.map(([x, y]) => f1(X(x)) + "," + f1(Y(y))).join(" ")}" class="${cls}" style="${st}"/>`;
const ell = a => Array.from({ length: 160 }, (_, k) => { const t = k * Math.PI / 80, r = 1 / Math.sqrt(1 + a * Math.sin(2 * t)); return [r * Math.cos(t), r * Math.sin(t)]; });
const figNa = GRAPH({ w: 380, h: 340, x: [-2.4, 2.4], y: [-2.1, 2.1], xt: [-2, -1, 1, 2], xtl: ["−2", "−1", "1", "2"], yt: [-2, -1, 1, 2], ytl: ["−2", "−1", "1", "2"], xl: "x", yl: "y",
  extra: (X, Y) => poly(X, Y, ell(0), "vb", "fill:none;stroke-width:2") + poly(X, Y, ell(0.5), "vr", "fill:none;stroke-width:2") + poly(X, Y, ell(-0.8), "vg", "fill:none;stroke-width:2")
    + S(X(0.75), Y(0.85), "a = 0", "start", "sm b") + S(X(1.15), Y(-1.2), "a = 1/2", "start", "sm r") + S(X(-2.3), Y(1.6), "a = −0,8", "start", "sm g") },
  R`Boules unités de $N_a(x,y) = \sqrt{x^2+2axy+y^2}$ : le disque pour $a = 0$ (bleu), une ellipse allongée le long de la seconde bissectrice pour $a = \frac12$ (rouge) et étirée le long de la première pour $a = -0{,}8$ (orange). Quand $a\to\pm1$, l'ellipse s'allonge à l'infini : ce n'est plus une norme.`, "Boules unités des normes Nₐ");
LEMME.exercises([
{ id: "topo-93", ...P, level: 1, time: "15 min",
  title: "Comparer ‖·‖₁, ‖·‖₂ et ‖·‖∞ sur ℝⁿ",
  enonce: R`<p>On considère les normes usuelles $\|\cdot\|_1$, $\|\cdot\|_2$ et $\|\cdot\|_\infty$ sur $\mathbb R^n$.</p><ol><li>Montrer que, pour tout $x\in\mathbb R^n$ : $\|x\|_1\leqslant\sqrt n\,\|x\|_2$ et $\|x\|_2\leqslant\|x\|_1$, et trouver pour chaque inégalité un vecteur non nul qui réalise l'égalité.</li><li>Comparer de même $\|\cdot\|_1$ et $\|\cdot\|_\infty$ d'une part, $\|\cdot\|_2$ et $\|\cdot\|_\infty$ d'autre part.</li></ol>`,
  decode: { donnees: [R`Cauchy-Schwarz avec le vecteur $(1,\dots,1)$.`], but: R`Six inégalités optimales entre les trois normes.`, cles: {} },
  steps: [
    { t: "1) ‖x‖₁ ≤ √n ‖x‖₂", h: R`<p>$\sum|x_i| = \sum1\cdot|x_i|$ et Cauchy-Schwarz.</p>`, b: R`<p>Par Cauchy-Schwarz appliqué à $(1,\dots,1)$ et $(|x_1|,\dots,|x_n|)$ :</p>$$\|x\|_1 = \sum_{i = 1}^n1\cdot|x_i|\leqslant\Big(\sum_{i = 1}^n1^2\Big)^{1/2}\Big(\sum_{i = 1}^nx_i^2\Big)^{1/2} = \sqrt n\,\|x\|_2.$$<p><b>Égalité</b> pour $x = (1,\dots,1)$ : $\|x\|_1 = n$ et $\|x\|_2 = \sqrt n$.</p>`, rappels: ["nrm-cs"] },
    { t: "1) ‖x‖₂ ≤ ‖x‖₁", h: R`<p>Développer $\big(\sum|x_i|\big)^2$.</p>`, b: R`<p>$$\|x\|_1^2 = \Big(\sum_i|x_i|\Big)^2 = \sum_ix_i^2+\sum_{i\neq j}|x_i||x_j|\geqslant\sum_ix_i^2 = \|x\|_2^2.$$<p><b>Égalité</b> pour $x = e_1 = (1,0,\dots,0)$ : les deux normes valent $1$.</p>` },
    { t: "2) Les autres comparaisons", h: R`<p>$|x_i|\leqslant\|x\|_\infty$ pour tout $i$, et $\|x\|_\infty$ est l'un des $|x_i|$.</p>`, b: R`<p>Comme $\|x\|_\infty = |x_{i_0}|$ pour un indice $i_0$ et $|x_i|\leqslant\|x\|_\infty$ pour tout $i$ :</p>$$\left\{\begin{aligned}\|x\|_\infty&\leqslant\|x\|_1\leqslant n\,\|x\|_\infty,\\\|x\|_\infty&\leqslant\|x\|_2\leqslant\sqrt n\,\|x\|_\infty.\end{aligned}\right.$$<p>Les égalités sont atteintes :</p><ul><li>à gauche, pour $x = e_1$ ;</li><li>à droite, pour $x = (1,\dots,1)$.</li></ul><div class="sbox">$$\|x\|_\infty\leqslant\|x\|_2\leqslant\|x\|_1\leqslant\sqrt n\|x\|_2\leqslant n\|x\|_\infty.$$</div>` }
  ],
  piege: R`Les constantes dépendent de $n$ : elles explosent quand $n\to\infty$, ce qui annonce la non-équivalence en dimension infinie.`,
  methode: R`Comparer des normes $p$ : Cauchy-Schwarz (ou Hölder) dans un sens, développement ou majoration terme à terme dans l'autre ; vecteurs extrémaux $e_1$ et $(1,\dots,1)$.`
},
{ id: "topo-94", ...P, level: 2, time: "20 min",
  title: "Norme du sup et norme des accroissements sur les suites nulles en 0 (CCINP)",
  enonce: R`<p>Soit $E$ l'espace des suites réelles bornées $u = (u_n)$ telles que $u_0 = 0$.</p><ol><li>Montrer que $N_\infty(u) = \sup_{n\in\mathbb N}|u_n|$ et $N(u) = \sup_{n\in\mathbb N}|u_{n+1}-u_n|$ définissent des normes sur $E$.</li><li>Vérifier que $N(u)\leqslant2N_\infty(u)$ pour tout $u\in E$, et trouver $u\in E$ non nulle réalisant l'égalité.</li><li>Montrer que les normes $N_\infty$ et $N$ ne sont pas équivalentes.</li></ol>`,
  decode: { donnees: [R`$u_0 = 0$ : c'est ce qui rend $N$ séparante.`], but: R`Axiomes ; inégalité triangulaire ; suite qui croît lentement.`, cles: {} },
  steps: [
    { t: "1) Deux normes", h: R`<p>$N_\infty$ : norme usuelle. $N$ : séparation grâce à $u_0 = 0$.</p>`, b: R`<p>$N_\infty$ est la norme usuelle des suites bornées, restreinte à $E$.</p><p>Pour $N$ : elle est bien définie ($|u_{n+1}-u_n|\leqslant2N_\infty(u)$), positive, homogène, et</p>$$|(u_{n+1}+v_{n+1})-(u_n+v_n)|\leqslant|u_{n+1}-u_n|+|v_{n+1}-v_n|\leqslant N(u)+N(v).$$<p><b>Séparation.</b> Si $N(u) = 0$, alors $u_{n+1} = u_n$ pour tout $n$ : la suite est constante, égale à $u_0 = 0$.</p>`, rappels: ["nrm-def"] },
    { t: "2) N ≤ 2N∞", h: R`<p>$|u_{n+1}-u_n|\leqslant|u_{n+1}|+|u_n|$.</p>`, b: R`<p>$$|u_{n+1}-u_n|\leqslant|u_{n+1}|+|u_n|\leqslant2N_\infty(u),\qquad\text{donc}\qquad N(u)\leqslant2N_\infty(u).$$<p><b>Égalité</b> pour $u_0 = 0$ et $u_n = (-1)^n$ ($n\geqslant1$) : $N_\infty(u) = 1$ et $|u_2-u_1| = 2$, donc $N(u) = 2$.</p>` },
    { t: "3) Non-équivalence", h: R`<p>$u^{(p)}(n) = \min(n,p)$.</p>`, b: R`<p>Pour $p\in\mathbb N^*$, soit</p>$$u^{(p)}(n) = \left\{\begin{aligned}n&\quad\text{si }n\leqslant p,\\p&\quad\text{sinon.}\end{aligned}\right.$$<p>Alors $u^{(p)}\in E$, avec</p>$$N_\infty(u^{(p)}) = p,\qquad N(u^{(p)}) = 1,\qquad\frac{N_\infty(u^{(p)})}{N(u^{(p)})} = p\xrightarrow[p\to+\infty]{}+\infty.$$<div class="sbox"><p>$N_\infty$ n'est pas dominée par $N$ : les deux normes ne sont pas équivalentes.</p></div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`Sans la condition $u_0 = 0$, $N$ n'est qu'une semi-norme : elle s'annule sur les suites constantes.`,
  methode: R`Pour réfuter une domination : une suite de vecteurs de petite norme d'un côté et de grande norme de l'autre (ici, une « rampe »).`
},
{ id: "topo-95", ...P, level: 2, time: "20 min",
  title: "Les normes 1, 2 et ∞ sur les suites à support fini",
  enonce: R`<p>On note $\mathbb R^{(\mathbb N)}$ l'espace des suites réelles nulles à partir d'un certain rang, muni de</p>$$\|u\|_1 = \sum_{n = 0}^{+\infty}|u_n|,\qquad\|u\|_2 = \Big(\sum_{n = 0}^{+\infty}u_n^2\Big)^{1/2},\qquad\|u\|_\infty = \sup_n|u_n|.$$<ol><li>Comparer $\|\cdot\|_1$ et $\|\cdot\|_\infty$.</li><li>Comparer $\|\cdot\|_1$ et $\|\cdot\|_2$.</li></ol>`,
  decode: { donnees: [R`Les sommes sont finies.`], but: R`Une inégalité dans un sens, un contre-exemple $u^N = (1,\dots,1,0,\dots)$ dans l'autre.`, cles: {} },
  steps: [
    { t: "1) ‖·‖∞ et ‖·‖₁", h: R`<p>Le plus grand terme est l'un des termes de la somme.</p>`, b: R`<p><b>Domination.</b> Pour tout $n$, $|u_n|\leqslant\sum_k|u_k|$, donc $\|u\|_\infty\leqslant\|u\|_1$.</p><p><b>Pas d'équivalence.</b> Soit $u^N$ définie par $u^N_n = 1$ si $n\lt N$, $0$ sinon :</p>$$\|u^N\|_\infty = 1,\qquad\|u^N\|_1 = N.$$<p>Aucune constante $\alpha$ ne vérifie $\|\cdot\|_1\leqslant\alpha\|\cdot\|_\infty$.</p>`, rappels: ["nrm-equiv"] },
    { t: "2) ‖·‖₂ et ‖·‖₁", h: R`<p>$\sum u_n^2\leqslant\big(\sum|u_n|\big)^2$ ; même contre-exemple.</p>`, b: R`<p><b>Domination.</b> Si $u_n = 0$ pour $n>N$ :</p>$$\|u\|_2^2 = \sum_{n = 0}^Nu_n^2\leqslant\Big(\sum_{n = 0}^N|u_n|\Big)^2 = \|u\|_1^2,\qquad\text{donc}\qquad\|u\|_2\leqslant\|u\|_1.$$<p><b>Pas d'équivalence.</b> Avec la même suite $u^N$ :</p>$$\|u^N\|_1 = N,\qquad\|u^N\|_2 = \sqrt N,\qquad\frac{\|u^N\|_1}{\|u^N\|_2} = \sqrt N\to+\infty.$$<div class="sbox">$$\|\cdot\|_\infty\leqslant\|\cdot\|_2\leqslant\|\cdot\|_1,$$</div><p>et aucune de ces normes n'est équivalente à une autre (on montre de même $\|u^N\|_2/\|u^N\|_\infty = \sqrt N$).</p>` }
  ],
  piege: R`En dimension infinie, les inégalités de dimension finie ($\|u\|_1\leqslant n\|u\|_\infty$) ne donnent rien : la « dimension » $N$ du support n'est pas bornée.`,
  methode: R`Non-équivalence en dimension infinie : tester sur les vecteurs « plats » $(1,\dots,1,0,\dots)$ de longueur $N\to\infty$.`
},
{ id: "topo-96", ...P, level: 2, time: "20 min",
  title: "Dans ℓ¹ : comparer ‖·‖₁ avec ‖·‖∞ et ‖·‖₂",
  enonce: R`<p>On note $\ell^1(\mathbb N,\mathbb R)$ l'espace des suites sommables, normé par $\|u\|_1 = \sum_{n = 0}^{+\infty}|u_n|$.</p><ol><li>Soit $u\in\ell^1$. Montrer que $u$ est bornée ; on peut donc introduire $\|u\|_\infty = \sup_n|u_n|$. Comparer $\|\cdot\|_1$ et $\|\cdot\|_\infty$.</li><li>Soit $u\in\ell^1$. Montrer que $u$ est de carré sommable ; on peut donc introduire $\|u\|_2 = \big(\sum u_n^2\big)^{1/2}$. Comparer $\|\cdot\|_1$ et $\|\cdot\|_2$.</li></ol>`,
  decode: { donnees: [R`Une série convergente a un terme général qui tend vers $0$.`], but: R`Même résultat que sur les suites à support fini, avec un passage à la limite.`, cles: {} },
  steps: [
    { t: "1) Bornée, et ‖·‖∞ ≤ ‖·‖₁", h: R`<p>$|u_n|\leqslant\sum_k|u_k|$.</p>`, b: R`<p>Pour tout $n$ : $|u_n|\leqslant\sum_{k = 0}^{+\infty}|u_k| = \|u\|_1$. Donc $u$ est bornée et</p>$$\|u\|_\infty\leqslant\|u\|_1.$$<p>Avec $u^N = (1,\dots,1,0,\dots)$ ($N$ termes égaux à $1$), qui est dans $\ell^1$ : $\|u^N\|_1 = N$ et $\|u^N\|_\infty = 1$. Les normes ne sont pas équivalentes.</p>`, rappels: ["nrm-equiv"] },
    { t: "2) De carré sommable, et ‖·‖₂ ≤ ‖·‖₁", h: R`<p>Sommes partielles : $\sum_{n\leqslant N}u_n^2\leqslant\big(\sum_{n\leqslant N}|u_n|\big)^2\leqslant\|u\|_1^2$.</p>`, b: R`<p>Pour tout $N$ :</p>$$\sum_{n = 0}^Nu_n^2\leqslant\Big(\sum_{n = 0}^N|u_n|\Big)^2\leqslant\|u\|_1^2.$$<p>Les sommes partielles de la série positive $\sum u_n^2$ sont majorées : elle converge, et en passant à la limite</p>$$\|u\|_2\leqslant\|u\|_1.$$<p>Avec la même suite : $\|u^N\|_1 = N$ et $\|u^N\|_2 = \sqrt N$. Les normes ne sont pas équivalentes.</p><div class="sbox">$$\|\cdot\|_\infty\leqslant\|\cdot\|_2\leqslant\|\cdot\|_1\quad\text{sur }\ell^1,\ \text{sans équivalence.}$$</div>` }
  ],
  piege: R`On ne peut pas développer directement $\big(\sum|u_n|\big)^2$ pour une série infinie sans précaution : on passe par les sommes partielles.`,
  methode: R`Inégalités entre sommes infinies : les établir sur les sommes partielles, puis passer à la limite.`
},
{ id: "topo-97", ...P, level: 2, time: "20 min",
  title: "Les normes pondérées Σ aₙ|xₙ| sur les suites bornées",
  enonce: R`<p>On note $\mathcal B(\mathbb N,\mathbb R)$ l'espace des suites réelles bornées, normé par $\|\cdot\|_\infty$.</p><ol><li>Soit $a = (a_n)$ une suite réelle. Donner une condition nécessaire et suffisante sur $a$ pour que $N_a : x\mapsto\sum_{n = 0}^{+\infty}a_n|x_n|$ définisse une norme sur $\mathcal B(\mathbb N,\mathbb R)$.</li><li>Comparer alors $N_a$ et $\|\cdot\|_\infty$.</li></ol>`,
  decode: { donnees: [R`Suites élémentaires $e_m = (\delta_{m,n})_n$.`], but: R`La condition est : $a_n>0$ pour tout $n$ et $\sum a_n$ converge.`, cles: {} },
  steps: [
    { t: "1) Condition nécessaire", h: R`<p>Tester sur $e_m$ et sur la suite constante $1$.</p>`, b: R`<p>Supposons que $N_a$ soit une norme sur $\mathcal B(\mathbb N,\mathbb R)$.</p><ul><li>Pour la suite élémentaire $e_m$ (un $1$ en position $m$) : $N_a(e_m) = a_m$ doit être $>0$.</li><li>Pour la suite constante $u = (1)_n$ : $N_a(u) = \sum a_n$ doit exister, donc la série $\sum a_n$ converge.</li></ul>` },
    { t: "1) Condition suffisante", h: R`<p>$a_n|x_n|\leqslant a_n\|x\|_\infty$.</p>`, b: R`<p>Supposons $a_n>0$ et $\sum a_n$ convergente. Pour $x$ bornée, $0\leqslant a_n|x_n|\leqslant a_n\|x\|_\infty$, donc $N_a(x)$ existe par comparaison. Homogénéité et inégalité triangulaire se vérifient terme à terme. Si $N_a(x) = 0$, chaque terme $a_n|x_n|$ est nul, et $a_n>0$ donne $x_n = 0$.</p><div class="sbox"><p>$N_a$ est une norme si et seulement si $a_n>0$ pour tout $n$ et $\sum a_n$ converge.</p></div>` },
    { t: "2) Comparaison", h: R`<p>$N_a\leqslant\big(\sum a_n\big)\|\cdot\|_\infty$ ; l'inverse échoue sur $e_m$.</p>`, b: R`<p><b>Domination.</b> En sommant $a_n|x_n|\leqslant a_n\|x\|_\infty$ :</p>$$N_a(x)\leqslant k\,\|x\|_\infty,\qquad k = \sum_{n = 0}^{+\infty}a_n.$$<p><b>Pas d'équivalence.</b> Supposons $\|\cdot\|_\infty\leqslant k'N_a$. Avec $x = e_m$ : $1\leqslant k'a_m$, soit $a_m\geqslant\frac1{k'}$ pour tout $m$. C'est incompatible avec la convergence de $\sum a_m$ (qui impose $a_m\to0$).</p><div class="sbox"><p>$N_a$ est dominée par $\|\cdot\|_\infty$, mais les deux normes ne sont pas équivalentes.</p></div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`La convergence de $\sum a_n$ est nécessaire dès qu'on veut définir $N_a$ sur toutes les suites bornées (même constantes).`,
  methode: R`Norme pondérée : les poids doivent être $>0$ (séparation) et sommables (existence) ; la décroissance des poids empêche l'équivalence.`
},
{ id: "topo-98", ...P, level: 2, time: "15 min",
  title: "Comparer les normes Σ aⁿ|xₙ| pour deux valeurs de a",
  enonce: R`<p>On note $E = \mathcal B(\mathbb N,\mathbb R)$. Pour $a\in\,]0,1[$ et $x = (x_n)\in E$, on pose $N_a(x) = \sum_{n = 0}^{+\infty}a^n|x_n|$.</p><ol><li>Montrer que $N_a$ définit une norme sur $E$.</li><li>Soient $a,b\in\,]0,1[$ distincts. Comparer les normes $N_a$ et $N_b$.</li></ol>`,
  decode: { donnees: [R`$a^nx_n = O(a^n)$ avec $|a|\lt1$.`], but: R`Cas particulier de l'exercice précédent ; puis comparer avec $e_p$.`, cles: {} },
  steps: [
    { t: "1) Une norme", h: R`<p>Les poids $a^n$ sont $>0$ et sommables.</p>`, b: R`<p>Pour $x\in E$, $a^n|x_n|\leqslant\|x\|_\infty a^n$, terme général d'une série géométrique convergente : $N_a(x)$ existe. Les poids $a^n$ sont strictement positifs : si $N_a(x) = 0$, tous les $x_n$ sont nuls. Homogénéité et inégalité triangulaire se vérifient terme à terme.</p>` },
    { t: "2) N_a ≤ N_b si a < b", h: R`<p>$a^n\leqslant b^n$.</p>`, b: R`<p>Quitte à échanger, $a\lt b$. Alors $a^n\leqslant b^n$ pour tout $n$, d'où</p>$$\forall x\in E,\quad N_a(x)\leqslant N_b(x).$$` },
    { t: "2) Pas de domination inverse", h: R`<p>$\frac{N_b(e_p)}{N_a(e_p)} = \big(\frac ba\big)^p$.</p>`, b: R`<p>Pour la suite élémentaire $e_p$ :</p>$$\frac{N_b(e_p)}{N_a(e_p)} = \frac{b^p}{a^p} = \Big(\frac ba\Big)^p\xrightarrow[p\to+\infty]{}+\infty.$$<div class="sbox"><p>Pour $a\lt b$ : $N_a\leqslant N_b$, mais $N_b$ n'est pas dominée par $N_a$ ; les normes ne sont pas équivalentes.</p></div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`Le sens de l'inégalité suit celui des poids : un poids plus grand donne une norme plus grande.`,
  methode: R`Comparer deux normes pondérées : comparer les poids, puis tester sur les vecteurs de base pour la non-équivalence.`
},
{ id: "topo-99", ...P, level: 2, time: "15 min",
  title: "Norme 1 et norme ∞ des coefficients d'un polynôme",
  enonce: R`<p>Pour $P = \sum a_kX^k\in\mathbb R[X]$, on pose $N_1(P) = \sum_{k = 0}^{+\infty}|a_k|$ et $N_\infty(P) = \max_k|a_k|$.</p><ol><li>Justifier que $N_1$ et $N_\infty$ sont des normes sur $\mathbb R[X]$.</li><li>Comparer $N_1$ et $N_\infty$.</li></ol>`,
  decode: { donnees: [R`Les sommes sont finies (coefficients nuls à partir d'un rang).`], but: R`$N_\infty\leqslant N_1$, pas d'équivalence avec $P_n = 1+X+\dots+X^n$.`, cles: {} },
  steps: [
    { t: "1) Deux normes", h: R`<p>Ce sont $\|\cdot\|_1$ et $\|\cdot\|_\infty$ des suites de coefficients.</p>`, b: R`<p>La suite des coefficients est nulle à partir d'un certain rang : la somme et le max sont finis. Pour $N_1$ :</p>$$\begin{aligned}N_1(\lambda P)&= \sum|\lambda a_k| = |\lambda|N_1(P),\\N_1(P+Q)&= \sum|a_k+b_k|\leqslant\sum|a_k|+\sum|b_k|.\end{aligned}$$<p>Si $N_1(P) = 0$, tous les coefficients sont nuls, donc $P = 0$. Même raisonnement pour $N_\infty$.</p>`, rappels: ["nrm-def"] },
    { t: "2) Comparaison", h: R`<p>$P_n = 1+X+\dots+X^n$.</p>`, b: R`<p>Le plus grand $|a_k|$ est l'un des termes de la somme, donc $N_\infty\leqslant N_1$. Pour $P_n = 1+X+\dots+X^n$ :</p>$$N_1(P_n) = n+1,\qquad N_\infty(P_n) = 1,\qquad\frac{N_1(P_n)}{N_\infty(P_n)} = n+1\to+\infty.$$<div class="sbox"><p>$N_\infty\leqslant N_1$, et les normes ne sont pas équivalentes.</p></div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`Sur $\mathbb R_n[X]$ (dimension finie), elles seraient équivalentes ($N_1\leqslant(n+1)N_\infty$) ; c'est le degré non borné qui casse l'équivalence.`,
  methode: R`Espace de polynômes : faire tendre le degré vers l'infini pour séparer deux normes.`
},
{ id: "topo-100", ...P, level: 2, time: "20 min",
  title: "Σ|P⁽ᵏ⁾(0)| contre le sup sur [−1, 1]",
  enonce: R`<p>Pour $P\in\mathbb R[X]$, on pose $N_1(P) = \sum_{k = 0}^{+\infty}|P^{(k)}(0)|$ et $N_2(P) = \sup_{t\in[-1,1]}|P(t)|$.</p><ol><li>Montrer que $N_1$ et $N_2$ sont deux normes sur $\mathbb R[X]$.</li><li>Étudier la convergence, pour l'une et l'autre norme, de la suite $P_n = \frac1nX^n$.</li><li>Les normes $N_1$ et $N_2$ sont-elles équivalentes ?</li></ol>`,
  decode: { donnees: [R`Formule de Taylor : $P = \sum\frac{P^{(k)}(0)}{k!}X^k$.`], but: R`Axiomes ; puis $N_1(P_n) = (n-1)!$ et $N_2(P_n) = \frac1n$.`, cles: {} },
  steps: [
    { t: "1) N₁ est une norme", h: R`<p>Séparation par Taylor.</p>`, b: R`<p>La somme est finie ($P^{(k)} = 0$ pour $k>\deg P$). Homogénéité et inégalité triangulaire découlent de la linéarité de la dérivation :</p>$$N_1(P+Q) = \sum_k|P^{(k)}(0)+Q^{(k)}(0)|\leqslant N_1(P)+N_1(Q).$$<p>Si $N_1(P) = 0$, alors $P^{(k)}(0) = 0$ pour tout $k$, et la formule de Taylor $P = \sum_k\frac{P^{(k)}(0)}{k!}X^k$ donne $P = 0$.</p>` },
    { t: "1) N₂ est une norme", h: R`<p>Séparation : infinité de racines.</p>`, b: R`<p>$|P|$ est continue sur le segment $[-1,1]$ : $N_2(P)$ existe. Homogénéité et inégalité triangulaire comme pour la norme uniforme. Si $N_2(P) = 0$, $P$ s'annule sur $[-1,1]$ : une infinité de racines, $P = 0$.</p>`, rappels: ["nrm-sep"] },
    { t: "2) La suite Xⁿ/n", h: R`<p>Seule la dérivée $n$-ième en $0$ est non nulle : $n!$.</p>`, b: R`<p>Pour $P_n = \frac1nX^n$ :</p><ul><li>$P_n^{(k)}(0) = 0$ pour $k\neq n$ et $P_n^{(n)}(0) = \frac{n!}n = (n-1)!$, donc $N_1(P_n) = (n-1)!\to+\infty$ ;</li><li>$\sup_{[-1,1]}|t^n| = 1$, donc $N_2(P_n) = \frac1n\to0$.</li></ul><p>Conclusion :</p><ul><li>pour $N_2$, $P_n\to0$ ;</li><li>pour $N_1$, la suite n'est pas bornée, donc ne converge pas.</li></ul>`, rappels: ["nrm-suites"] },
    { t: "3) Pas d'équivalence", h: R`<p>Des normes équivalentes ont les mêmes suites convergentes.</p>`, b: R`<p>Si les normes étaient équivalentes, une suite convergente pour $N_2$ le serait pour $N_1$. La question 2 montre le contraire.</p><div class="sbox"><p>$N_1$ et $N_2$ ne sont pas équivalentes.</p></div>` }
  ],
  piege: R`$N_1$ fait intervenir des factorielles cachées : les dérivées successives grossissent beaucoup plus vite que les valeurs du polynôme.`,
  methode: R`Pour montrer que deux normes ne sont pas équivalentes : une suite qui converge pour l'une et pas pour l'autre.`
},
{ id: "topo-101", ...P, level: 3, time: "35 min",
  title: "La norme |P(a)| + ∫₀¹|P′| : équivalences et convergences",
  enonce: R`<p>Soit $a\in\mathbb R$. Pour $P\in\mathbb R[X]$, on pose $N_a(P) = |P(a)|+\int_0^1|P'(t)|\,dt$.</p><ol><li>Établir que $N_a$ est une norme sur $\mathbb R[X]$.</li><li>Justifier que, pour tous $a,b\in[0,1]$, les normes $N_a$ et $N_b$ sont équivalentes.</li><li>On considère la suite $P_n = \frac{X^n}{2^n}$. Pour quelle(s) norme(s) $N_a$ peut-on affirmer que $(P_n)$ converge ?</li><li>Montrer que pour $a\in[0,1]$ et $b\in\,]1,+\infty[$, les normes $N_a$ et $N_b$ ne sont pas équivalentes.</li></ol>`,
  decode: { donnees: [R`$P(b) = P(a)+\int_a^bP'(t)\,dt$.`], but: R`Séparation, comparaison par l'intégrale de $P'$, puis calculs sur $X^n/2^n$.`, cles: {} },
  steps: [
    { t: "1) Une norme", h: R`<p>$N_a(P) = 0\Rightarrow P' = 0$ sur $[0,1]$ et $P(a) = 0$.</p>`, b: R`<p>$N_a$ est bien définie, positive, homogène, et l'inégalité triangulaire découle de celles de $|\cdot|$ et de l'intégrale. Si $N_a(P) = 0$ :</p>$$|P(a)| = 0\qquad\text{et}\qquad\int_0^1|P'(t)|\,dt = 0.$$<p>$|P'|$ est continue, positive, d'intégrale nulle : $P' = 0$ sur $[0,1]$, donc $P' = 0$ (infinité de racines). $P$ est constant, égal à $P(a) = 0$.</p>`, rappels: ["nrm-def"] },
    { t: "2) Équivalence pour a, b ∈ [0, 1]", h: R`<p>$|P(b)|\leqslant|P(a)|+\int_0^1|P'|$.</p>`, b: R`<p>Soient $a,b\in[0,1]$. Comme $P(b) = P(a)+\int_a^bP'(t)\,dt$ et que $[a,b]\subset[0,1]$ :</p>$$|P(b)|\leqslant|P(a)|+\int_0^1|P'(t)|\,dt = N_a(P).$$<p>Donc $N_b(P) = |P(b)|+\int_0^1|P'|\leqslant N_a(P)+\int_0^1|P'|\leqslant2N_a(P)$. Par symétrie, $N_a\leqslant2N_b$ : les normes sont équivalentes.</p>`, rappels: ["nrm-equiv"] },
    { t: "3) Calcul de N_a(Pₙ)", h: R`<p>$\int_0^1\frac{nt^{n-1}}{2^n}dt = \frac1{2^n}$.</p>`, b: R`<p>$$N_a(P_n) = \frac{|a|^n}{2^n}+\int_0^1\frac{nt^{n-1}}{2^n}\,dt = \frac{|a|^n+1}{2^n}.$$<p>On distingue selon $a$.</p>` },
    { t: "3) Discussion selon a", h: R`<p>Quatre cas : $|a|\lt2$, $|a|>2$, $a = 2$, $a = -2$.</p>`, b: R`<ul><li><b>$|a|\lt2$</b> : $N_a(P_n)\to0$, donc $P_n\to0$.</li><li><b>$|a|>2$</b> : $N_a(P_n)\geqslant\big(\frac{|a|}2\big)^n\to+\infty$ ; la suite n'est pas bornée, elle diverge.</li><li><b>$a = 2$</b> : $N_2(P_n-1) = |1-1|+\frac1{2^n}\to0$, donc $P_n\to1$.</li><li><b>$a = -2$</b> : $P_n(-2) = (-1)^n$, et</li></ul>$$N_{-2}(P_{2n}-1) = \frac1{2^{2n}}\to0,\qquad N_{-2}(P_{2n+1}+1) = \frac1{2^{2n+1}}\to0.$$<p>Les suites extraites paire et impaire ont des limites différentes ($1$ et $-1$) : $(P_n)$ diverge.</p><div class="sbox"><p>$(P_n)$ converge pour $N_a$ si et seulement si $-2\lt a\leqslant2$ (vers $0$ si $|a|\lt2$, vers $1$ si $a = 2$).</p></div>`, rappels: ["nrm-suites"] },
    { t: "4) Non-équivalence pour b > 1", h: R`<p>$Q_n = \frac{X^n}{b^n}$.</p>`, b: R`<p>Soient $a\in[0,1]$ et $b>1$, et $Q_n = \frac{X^n}{b^n}$. Le même calcul donne</p>$$N_a(Q_n) = \frac{a^n+1}{b^n}\xrightarrow[n\to\infty]{}0,\qquad N_b(Q_n) = 1+\frac1{b^n}\xrightarrow[n\to\infty]{}1.$$<p>Le rapport $\frac{N_b(Q_n)}{N_a(Q_n)}$ tend vers $+\infty$.</p><div class="sbox"><p>$N_a$ et $N_b$ ne sont pas équivalentes.</p></div>` }
  ],
  piege: R`Ne pas oublier que la limite d'une suite dépend de la norme : pour $a = 2$, la suite converge, mais vers $1$ et pas vers $0$.`,
  methode: R`Étudier la convergence pour une norme : calculer explicitement $N(P_n-L)$ pour la limite candidate, et séparer les cas.`
},
{ id: "topo-102", ...P, level: 2, time: "15 min",
  title: "Normes pondérées sur les coefficients d'un polynôme (Mines)",
  enonce: R`<p>Soit $a = (a_n)\in\mathbb R^{\mathbb N}$. Pour $P = \sum_kp_kX^k\in\mathbb R[X]$, on pose $N_a(P) = \sum_{k = 0}^{+\infty}|a_kp_k|$.</p><ol><li>À quelle condition $N_a$ est-elle une norme ?</li><li>Soient $a$ et $b$ telles que $N_a$ et $N_b$ sont des normes. À quelle condition ces normes sont-elles équivalentes ?</li></ol>`,
  decode: { donnees: [R`$N_a(X^n) = |a_n|$.`], but: R`Tester sur les monômes.`, cles: {} },
  steps: [
    { t: "1) Condition de norme", h: R`<p>$N_a(X^n) = |a_n|$.</p>`, b: R`<p>$N_a$ est bien définie (somme finie), positive, homogène et vérifie l'inégalité triangulaire. Pour la séparation :</p><ul><li>si un $a_n$ est nul, $N_a(X^n) = 0$ avec $X^n\neq0$ : pas une norme ;</li><li>si tous les $a_n$ sont non nuls, $N_a(P) = 0$ impose $p_k = 0$ pour tout $k$.</li></ul><div class="sbox"><p>$N_a$ est une norme si et seulement si $a_n\neq0$ pour tout $n$.</p></div>` },
    { t: "2) Condition d'équivalence", h: R`<p>Nécessaire : tester sur $X^n$. Suffisant : sommer terme à terme.</p>`, b: R`<p><b>Nécessaire.</b> Si $kN_a\leqslant N_b\leqslant k'N_a$, en appliquant à $X^n$ :</p>$$\forall n\in\mathbb N,\quad k|a_n|\leqslant|b_n|\leqslant k'|a_n|.$$<p><b>Suffisant.</b> Si cet encadrement a lieu, alors pour tout $P$ :</p>$$N_b(P) = \sum_k|b_k||p_k|\leqslant k'\sum_k|a_k||p_k| = k'N_a(P),$$<p>et de même $kN_a(P)\leqslant N_b(P)$.</p><div class="sbox"><p>$N_a$ et $N_b$ sont équivalentes si et seulement si il existe $k,k'>0$ tels que $k|a_n|\leqslant|b_n|\leqslant k'|a_n|$ pour tout $n$.</p></div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`La condition porte sur le rapport $|b_n|/|a_n|$, qui doit rester entre deux constantes $>0$, et pas seulement être borné.`,
  methode: R`Normes « diagonales » dans une base : elles sont équivalentes si et seulement si les rapports des poids sont bornés et minorés.`
},
{ id: "topo-103", ...P, level: 1, time: "15 min",
  title: "Les normes 1, 2 et ∞ sur C([0, 1])",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$, muni de</p>$$\|f\|_1 = \int_0^1|f|,\qquad\|f\|_2 = \Big(\int_0^1f^2\Big)^{1/2},\qquad\|f\|_\infty = \sup_{[0,1]}|f|.$$<ol><li>Montrer que $\|\cdot\|_\infty$ est plus fine que $\|\cdot\|_1$ et $\|\cdot\|_2$, mais qu'elle n'est équivalente ni à l'une ni à l'autre.</li><li>Comparer $\|\cdot\|_1$ et $\|\cdot\|_2$.</li></ol>`,
  decode: { donnees: [R`Intervalle de longueur $1$.`], but: R`Majorer les intégrales par le sup ; contre-exemples $x^n$.`, cles: {} },
  steps: [
    { t: "1) Dominations", h: R`<p>$|f|\leqslant\|f\|_\infty$ sur $[0,1]$.</p>`, b: R`<p>Comme $|f(t)|\leqslant\|f\|_\infty$ et que l'intervalle est de longueur $1$ :</p>$$\|f\|_1 = \int_0^1|f|\leqslant\|f\|_\infty,\qquad\|f\|_2 = \Big(\int_0^1f^2\Big)^{1/2}\leqslant\|f\|_\infty.$$` },
    { t: "1) Non-équivalences", h: R`<p>$f_n(x) = x^n$.</p>`, b: R`<p>Pour $f_n(x) = x^n$ :</p>$$\|f_n\|_\infty = 1,\qquad\|f_n\|_1 = \frac1{n+1}\to0,\qquad\|f_n\|_2 = \frac1{\sqrt{2n+1}}\to0.$$<p>Aucune constante $C$ ne vérifie $\|\cdot\|_\infty\leqslant C\|\cdot\|_1$ (ou $C\|\cdot\|_2$).</p>`, rappels: ["nrm-equiv"] },
    { t: "2) ‖·‖₁ ≤ ‖·‖₂", h: R`<p>Cauchy-Schwarz avec la fonction $1$ ; contre-exemple $\sqrt{2n+1}\,x^n$.</p>`, b: R`<p>Par Cauchy-Schwarz :</p>$$\int_0^11\times|f(t)|\,dt\leqslant\Big(\int_0^11\,dt\Big)^{1/2}\Big(\int_0^1f(t)^2dt\Big)^{1/2},$$<p>donc $\|f\|_1\leqslant\|f\|_2$.</p><p>Pour $f_n(x) = \sqrt{2n+1}\,x^n$ :</p>$$\|f_n\|_2 = 1,\qquad\|f_n\|_1 = \frac{\sqrt{2n+1}}{n+1}\to0.$$<div class="sbox">$$\|\cdot\|_1\leqslant\|\cdot\|_2\leqslant\|\cdot\|_\infty,\ \text{aucune équivalence.}$$</div>`, rappels: ["nrm-cs"] }
  ],
  piege: R`Sur un intervalle de longueur $L\neq1$, les constantes changent : $\|f\|_1\leqslant L\|f\|_\infty$, $\|f\|_1\leqslant\sqrt L\|f\|_2$.`,
  methode: R`Fonctions-tests : $x^n$ se concentre près de $1$, ce qui écrase les normes intégrales sans changer le sup.`
},
{ id: "topo-104", ...P, level: 2, time: "20 min",
  title: "La norme |f(0)| + ‖f′‖∞ sur C¹([0, 1])",
  enonce: R`<p>On considère $E = \mathcal C^1([0,1],\mathbb R)$.</p><ol><li>Pour $f\in E$, on pose $N(f) = |f(0)|+\|f'\|_\infty$. Montrer que $N$ est une norme sur $E$.</li><li>Pour $f\in E$, on pose $N'(f) = \|f\|_\infty+\|f'\|_\infty$ (on admet que c'est une norme). Montrer que $N'$ est équivalente à $N$.</li><li>Les normes $N$ et $N'$ sont-elles équivalentes à $\|\cdot\|_\infty$ ?</li></ol>`,
  decode: { donnees: [R`$f(x) = f(0)+\int_0^xf'$.`], but: R`Contrôler $\|f\|_\infty$ par $N(f)$ ; puis $x^n$ pour la non-équivalence.`, cles: {} },
  steps: [
    { t: "1) N est une norme", h: R`<p>$N(f) = 0\Rightarrow f' = 0$ et $f(0) = 0$.</p>`, b: R`<p>$N$ est bien définie ($f'$ continue sur un segment), positive, homogène, et vérifie l'inégalité triangulaire (somme de deux telles quantités). Si $N(f) = 0$ : $f' = 0$, donc $f$ est constante, égale à $f(0) = 0$.</p>` },
    { t: "2) Équivalence de N et N′", h: R`<p>$|f(x)|\leqslant|f(0)|+x\|f'\|_\infty\leqslant N(f)$.</p>`, b: R`<p><b>$N\leqslant N'$</b> : $|f(0)|\leqslant\|f\|_\infty$.</p><p><b>$N'\leqslant2N$</b> : pour $x\in[0,1]$,</p>$$|f(x)| = \Big|f(0)+\int_0^xf'(t)\,dt\Big|\leqslant|f(0)|+x\|f'\|_\infty\leqslant N(f),$$<p>donc $\|f\|_\infty\leqslant N(f)$ et $N'(f) = \|f\|_\infty+\|f'\|_\infty\leqslant2N(f)$.</p><div class="sbox">$$N\leqslant N'\leqslant2N.$$</div>`, rappels: ["nrm-equiv"] },
    { t: "3) Comparaison avec ‖·‖∞", h: R`<p>$\|\cdot\|_\infty\leqslant N$, mais $f_n(x) = x^n$.</p>`, b: R`<p>On vient de voir $\|f\|_\infty\leqslant N(f)$. Mais pour $f_n(x) = x^n$ :</p>$$\|f_n\|_\infty = 1,\qquad N(f_n) = 0+\|nx^{n-1}\|_\infty = n\to+\infty.$$<div class="sbox"><p>$N$ et $N'$ dominent $\|\cdot\|_\infty$ mais ne lui sont pas équivalentes.</p></div>` }
  ],
  piege: R`La norme uniforme ne contrôle pas la dérivée : une fonction bornée peut osciller ou monter très vite.`,
  methode: R`Normes $\mathcal C^1$ : contrôler $f$ par $f(0)$ et $f'$ grâce à $f(x) = f(0)+\int_0^xf'$.`
},
{ id: "topo-105", ...P, level: 2, time: "20 min",
  title: "Trois normes sur C¹([−1, 1])",
  enonce: R`<p>Soit $E = \mathcal C^1([-1,1],\mathbb R)$. On définit</p>$$\begin{gathered}N_1(f) = \sup_{[-1,1]}|f|,\qquad N_2(f) = |f(0)|+\sup_{[-1,1]}|f'|,\\N_3(f) = \int_{-1}^1|f|.\end{gathered}$$<ol><li>Montrer que $N_1$, $N_2$ et $N_3$ sont des normes sur $E$.</li><li>Comparer $N_1$ et $N_2$ d'une part, $N_1$ et $N_3$ d'autre part.</li></ol>`,
  decode: { donnees: [R`$f(x) = f(0)+\int_0^xf'$ et $|x|\leqslant1$.`], but: R`Inégalités puis contre-exemples avec $x^n$.`, cles: {} },
  steps: [
    { t: "1) Trois normes", h: R`<p>Séparations : sup nul ; $f' = 0$ et $f(0) = 0$ ; intégrale d'une fonction continue positive.</p>`, b: R`<ul><li><b>$N_1$</b> : norme uniforme sur un segment.</li><li><b>$N_2$</b> : si $N_2(f) = 0$, alors $f' = 0$ et $f(0) = 0$, donc $f = 0$.</li><li><b>$N_3$</b> : si $N_3(f) = 0$, $|f|$ est continue, positive, d'intégrale nulle, donc $f = 0$.</li></ul><p>Homogénéité et inégalités triangulaires ne posent pas de difficulté.</p>`, rappels: ["nrm-def"] },
    { t: "2) N₁ et N₂", h: R`<p>$|f(x)|\leqslant|f(0)|+|x|\sup|f'|$.</p>`, b: R`<p>Pour $x\in[-1,1]$ :</p>$$|f(x)|\leqslant|f(0)|+\Big|\int_0^xf'(t)\,dt\Big|\leqslant|f(0)|+|x|\sup_{[-1,1]}|f'|\leqslant N_2(f),$$<p>donc $N_1\leqslant N_2$. Pour $f_n(x) = x^n$ : $N_1(f_n) = 1$ et $N_2(f_n) = n$. Pas d'équivalence.</p>`, rappels: ["nrm-equiv"] },
    { t: "2) N₁ et N₃", h: R`<p>$N_3\leqslant2N_1$ ; $N_3(x^n) = \frac2{n+1}$.</p>`, b: R`<p>$N_3(f) = \int_{-1}^1|f|\leqslant2N_1(f)$. Pour $f_n(x) = x^n$ :</p>$$N_1(f_n) = 1,\qquad N_3(f_n) = \int_{-1}^1|t|^n\,dt = \frac2{n+1}\to0.$$<div class="sbox">$$N_3\leqslant2N_1\leqslant2N_2,\ \text{aucune équivalence.}$$</div>` }
  ],
  piege: R`Sur $[-1,1]$, l'intervalle est de longueur $2$ : la constante dans $N_3\leqslant2N_1$ en tient compte.`,
  methode: R`Même méthode que sur $[0,1]$ : inégalités par l'intégrale de $f'$ ou la longueur de l'intervalle, contre-exemples par $x^n$.`
},
{ id: "topo-106", ...P, level: 2, time: "20 min",
  title: "La norme √(f(0)² + ∫f′²) contre ‖·‖∞ (Centrale)",
  enonce: R`<p>Soient $E = \mathcal C^1([0,1],\mathbb R)$ et $N : E\to\mathbb R_+$ définie par</p>$$N(f) = \sqrt{f(0)^2+\int_0^1f'(t)^2\,dt}.$$<ol><li>Montrer que $N$ définit une norme sur $E$.</li><li>Comparer $N$ et $\|\cdot\|_\infty$.</li></ol>`,
  decode: { donnees: [R`$N$ est associée à $\varphi(f,g) = f(0)g(0)+\int_0^1f'g'$.`], but: R`Produit scalaire, puis $\|f\|_\infty\leqslant2N(f)$ ; contre-exemple $\sin(n\pi x)$.`, cles: {} },
  steps: [
    { t: "1) Une norme euclidienne", h: R`<p>$\varphi(f,g) = f(0)g(0)+\int_0^1f'g'$.</p>`, b: R`<p>Posons $\varphi(f,g) = f(0)g(0)+\int_0^1f'(t)g'(t)\,dt$. C'est une forme bilinéaire symétrique, positive. Si $\varphi(f,f) = 0$ :</p>$$f(0) = 0\qquad\text{et}\qquad\int_0^1f'^2 = 0\ \Longrightarrow\ f' = 0\ \Longrightarrow\ f = 0.$$<p>$\varphi$ est un produit scalaire et $N$ est la norme associée.</p>`, rappels: ["eu-ps"] },
    { t: "2) ‖·‖∞ ≤ 2N", h: R`<p>$|f(0)|\leqslant N(f)$ et $\big|\int_0^xf'\big|\leqslant\big(\int_0^1f'^2\big)^{1/2}\leqslant N(f)$.</p>`, b: R`<p>Pour $x\in[0,1]$, par Cauchy-Schwarz :</p>$$|f(x)|\leqslant\underbrace{|f(0)|}_{\leqslant N(f)}+\underbrace{\Big|\int_0^xf'(t)\,dt\Big|}_{\leqslant\left(\int_0^1f'^2\right)^{1/2}\leqslant N(f)}\leqslant2N(f).$$<p>Donc $\|f\|_\infty\leqslant2N(f)$.</p>`, rappels: ["nrm-cs"] },
    { t: "2) Pas de domination inverse", h: R`<p>$f_n(x) = \sin(n\pi x)$.</p>`, b: R`<p>Pour $f_n(x) = \sin(n\pi x)$ : $f_n(0) = 0$ et $f_n' = n\pi\cos(n\pi x)$, donc</p>$$\|f_n\|_\infty = 1,\qquad N(f_n) = \Big(\int_0^1n^2\pi^2\cos^2(n\pi x)\,dx\Big)^{1/2} = \frac{n\pi}{\sqrt2}\xrightarrow[n\to+\infty]{}+\infty.$$<div class="sbox"><p>$\|\cdot\|_\infty\leqslant2N$, mais les deux normes ne sont pas équivalentes.</p></div>` }
  ],
  piege: R`L'accolade sous chaque terme montre où sert Cauchy-Schwarz : seulement pour le terme intégral.`,
  methode: R`Contrôler $\|f\|_\infty$ par une norme « de type $H^1$ » : $f(x) = f(0)+\int_0^xf'$ et Cauchy-Schwarz.`
},
{ id: "topo-107", ...P, level: 2, time: "20 min",
  title: "‖f′‖∞ et ‖f + f′‖∞ sur les fonctions nulles en 0",
  enonce: R`<p>Soit $E = \{f\in\mathcal C^1([0,1],\mathbb R) : f(0) = 0\}$, et $N_1(f) = \|f'\|_\infty$, $N_2(f) = \|f+f'\|_\infty$.</p><ol><li>Vérifier que $N_1$ et $N_2$ sont des normes sur $E$.</li><li>Montrer que $N_2$ est dominée par $N_1$.</li><li>En justifiant puis en employant l'identité $f(x) = e^{-x}\int_0^x\big(f(t)+f'(t)\big)e^t\,dt$, montrer que $N_1$ est dominée par $N_2$.</li></ol>`,
  decode: { donnees: [R`$(fe^t)' = (f+f')e^t$.`], but: R`$N_2\leqslant2N_1$ et $N_1\leqslant2N_2$ : les normes sont équivalentes.`, cles: {} },
  steps: [
    { t: "1) Deux normes", h: R`<p>Séparation : $f' = 0$ ou $f+f' = 0$, avec $f(0) = 0$.</p>`, b: R`<p>Ce sont des normes uniformes de fonctions continues sur un segment : bien définies, homogènes, triangulaires.</p><ul><li>Si $N_1(f) = 0$ : $f' = 0$ et $f(0) = 0$, donc $f = 0$.</li><li>Si $N_2(f) = 0$ : $f'+f = 0$ et $f(0) = 0$ ; l'unique solution de ce problème de Cauchy est $f = 0$.</li></ul>` },
    { t: "2) N₂ ≤ 2N₁", h: R`<p>$f(x) = \int_0^xf'$, donc $\|f\|_\infty\leqslant\|f'\|_\infty$.</p>`, b: R`<p>Comme $f(0) = 0$, $f(x) = \int_0^xf'(t)\,dt$ et $|f(x)|\leqslant x\|f'\|_\infty\leqslant\|f'\|_\infty$. Donc</p>$$N_2(f) = \|f+f'\|_\infty\leqslant\|f\|_\infty+\|f'\|_\infty\leqslant2N_1(f).$$` },
    { t: "3) L'identité", h: R`<p>Dériver $t\mapsto f(t)e^t$.</p>`, b: R`<p>$(fe^t)' = (f'+f)e^t$ et $f(0)e^0 = 0$, donc $f(x)e^x = \int_0^x\big(f(t)+f'(t)\big)e^t\,dt$, ce qui est l'identité annoncée.</p>`, rappels: ["nrm-edo"] },
    { t: "3) N₁ ≤ 2N₂", h: R`<p>$|f(x)|\leqslant e^{-x}(e^x-1)N_2(f)\leqslant N_2(f)$, puis $f' = (f+f')-f$.</p>`, b: R`<p>Par l'identité :</p>$$|f(x)|\leqslant e^{-x}\int_0^xe^t\,dt\;N_2(f) = (1-e^{-x})N_2(f)\leqslant N_2(f).$$<p>Puis $f' = (f+f')-f$ donne $|f'(x)|\leqslant N_2(f)+|f(x)|\leqslant2N_2(f)$.</p><div class="sbox">$$N_1\leqslant2N_2\leqslant4N_1\qquad\text{: les normes sont équivalentes.}$$</div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`L'hypothèse $f(0) = 0$ est indispensable : sans elle, $N_1$ ne sépare pas les constantes et l'identité perd le terme $f(0)e^{-x}$.`,
  methode: R`Norme définie par un opérateur différentiel $f\mapsto f'+af$ : résoudre l'équation pour exprimer $f$ à partir de $f'+af$.`
},
{ id: "topo-108", ...P, level: 2, time: "20 min",
  title: "La norme ‖3f + f′‖∞ (Centrale)",
  enonce: R`<p>Sur $E = \{f\in\mathcal C^1([0,1],\mathbb R) : f(0) = 0\}$, on considère $N(f) = \|3f+f'\|_\infty = \sup_{t\in[0,1]}|3f(t)+f'(t)|$.</p><ol><li>Montrer que $N$ définit une norme sur $E$.</li><li>Déterminer un réel $\alpha>0$ tel que $\|f\|_\infty\leqslant\alpha N(f)$ pour toute $f\in E$.</li><li>Les normes $\|\cdot\|_\infty$ et $N$ sont-elles équivalentes ?</li></ol>`,
  decode: { donnees: [R`$(fe^{3t})' = (3f+f')e^{3t}$.`], but: R`Exprimer $f$ à partir de $g = 3f+f'$ ; contre-exemple oscillant pour la question 3.`, cles: {} },
  steps: [
    { t: "1) Une norme", h: R`<p>$3f+f' = 0$, $f(0) = 0$ $\Rightarrow f = 0$.</p>`, b: R`<p>$N$ est bien définie, positive, homogène, triangulaire. Si $N(f) = 0$, alors $f'+3f = 0$ et $f(0) = 0$ : $f(x) = f(0)e^{-3x} = 0$.</p>` },
    { t: "2) Expression de f", h: R`<p>$g = 3f+f'$, $(fe^{3t})' = ge^{3t}$.</p>`, b: R`<p>Notons $g = 3f+f'$. Comme $(fe^{3t})' = ge^{3t}$ et $f(0) = 0$ :</p>$$f(x) = e^{-3x}\int_0^xg(t)e^{3t}\,dt.$$`, rappels: ["nrm-edo"] },
    { t: "2) La constante α = 1/3", h: R`<p>$\int_0^xe^{3t}dt = \frac{e^{3x}-1}3$.</p>`, b: R`<p>$$\begin{aligned}|f(x)|&\leqslant e^{-3x}\int_0^x|g(t)|e^{3t}\,dt\leqslant N(f)\,e^{-3x}\,\frac{e^{3x}-1}3\\&= \frac{1-e^{-3x}}3\,N(f)\leqslant\frac13N(f).\end{aligned}$$<div class="sbox">$$\|f\|_\infty\leqslant\frac13N(f),\qquad\alpha = \frac13.$$</div>` },
    { t: "3) Pas d'équivalence", h: R`<p>$f_n(x) = \sin(nx)$ : bornée par $1$, mais $N(f_n)\geqslant|f_n'(0)| = n$.</p>`, b: R`<p>Soit $f_n(x) = \sin(nx)$, qui est dans $E$. Alors $\|f_n\|_\infty\leqslant1$, et</p>$$N(f_n)\geqslant|3f_n(0)+f_n'(0)| = |0+n| = n\xrightarrow[n\to+\infty]{}+\infty.$$<p>Aucune constante $C$ ne vérifie $N\leqslant C\|\cdot\|_\infty$.</p><div class="sbox"><p>$\|\cdot\|_\infty\leqslant\frac13N$, mais les normes ne sont pas équivalentes.</p></div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`L'inégalité de la question 2 n'utilise que $N(f)$ : elle ne permet pas de contrôler $f'$ par $\|f\|_\infty$, qui ne voit pas les oscillations.`,
  methode: R`Norme $\|f'+af\|_\infty$ : résolution de l'équation différentielle pour contrôler $f$ ; fonctions oscillantes pour la non-équivalence.`
},
{ id: "topo-109", ...P, level: 2, time: "25 min",
  title: "Normes ‖f‖_φ = sup |fφ| à poids",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$ et $E^+$ l'ensemble des fonctions de $E$ positives qui ne s'annulent qu'en un nombre fini de points. Pour $\varphi\in E^+$ et $f\in E$, on pose $\|f\|_\varphi = \sup_{t\in[0,1]}|f(t)\varphi(t)|$.</p><ol><li>Montrer que $\|\cdot\|_\varphi$ est une norme sur $E$.</li><li>Montrer que si $\varphi_1$ et $\varphi_2$ sont deux fonctions <b>strictement</b> positives de $E^+$, les normes associées sont équivalentes.</li><li>Les normes $\|\cdot\|_x$ et $\|\cdot\|_{x^2}$ (associées à $\varphi_1(x) = x$ et $\varphi_2(x) = x^2$) sont-elles équivalentes ?</li></ol>`,
  decode: { donnees: [R`$\varphi_2/\varphi_1$ est continue sur $[0,1]$ si $\varphi_1>0$.`], but: R`Séparation par continuité ; bornes atteintes ; puis $f_n = (1-x)^n$.`, cles: {} },
  steps: [
    { t: "1) Une norme", h: R`<p>Séparation : $f = 0$ sauf en un nombre fini de points, puis continuité.</p>`, b: R`<p>$|f\varphi|$ est continue sur un segment : le sup existe. Homogénéité et inégalité triangulaire se vérifient point par point. Si $\|f\|_\varphi = 0$, alors $f(t)\varphi(t) = 0$ pour tout $t$. En dehors des zéros de $\varphi$ (en nombre fini), $f$ s'annule ; par continuité, $f$ s'annule aussi en ces points. Donc $f = 0$.</p>` },
    { t: "2) Poids strictement positifs", h: R`<p>$\frac{\varphi_2}{\varphi_1}$ continue sur un segment, donc bornée.</p>`, b: R`<p>Si $\varphi_1,\varphi_2>0$ sur $[0,1]$, la fonction $\varphi_2/\varphi_1$ est continue sur un segment : elle est bornée par une constante $M$. Donc</p>$$|f(t)\varphi_2(t)| = |f(t)\varphi_1(t)|\,\frac{\varphi_2(t)}{\varphi_1(t)}\leqslant M\|f\|_{\varphi_1},\qquad\|f\|_{\varphi_2}\leqslant M\|f\|_{\varphi_1}.$$<p>Par symétrie, $\|\cdot\|_{\varphi_1}$ est dominée par $\|\cdot\|_{\varphi_2}$ : les normes sont équivalentes.</p>`, rappels: ["nrm-compact"] },
    { t: "3) Le sens facile", h: R`<p>$x^2\leqslant x$ sur $[0,1]$.</p>`, b: R`<p>Comme $x^2\leqslant x$ sur $[0,1]$ : $\|f\|_{x^2}\leqslant\|f\|_x$.</p>` },
    { t: "3) Pas d'équivalence", h: R`<p>$f_n(x) = (1-x)^n$ : maxima de $x(1-x)^n$ et $x^2(1-x)^n$.</p>`, b: R`<p>Soit $f_n(x) = (1-x)^n$. Une étude de variations donne :</p><ul><li>$x(1-x)^n$ est maximal en $x = \frac1{n+1}$ ;</li><li>$x^2(1-x)^n$ est maximal en $x = \frac2{n+2}$.</li></ul><p>D'où</p>$$\begin{aligned}\|f_n\|_x&= \frac1{n+1}\Big(1-\frac1{n+1}\Big)^n\sim\frac{e^{-1}}n,\\\|f_n\|_{x^2}&= \Big(\frac2{n+2}\Big)^2\Big(1-\frac2{n+2}\Big)^n\sim\frac{4e^{-2}}{n^2}.\end{aligned}$$<p>Le rapport $\|f_n\|_x/\|f_n\|_{x^2}\sim\frac{e\,n}4\to+\infty$ : aucune constante $M$ ne vérifie $\|\cdot\|_x\leqslant M\|\cdot\|_{x^2}$.</p><div class="sbox"><p>$\|\cdot\|_{x^2}\leqslant\|\cdot\|_x$, mais les normes ne sont pas équivalentes.</p></div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`Quand les poids s'annulent au même point, c'est l'ordre d'annulation qui compte : $x$ et $x^2$ ne s'annulent pas « à la même vitesse » en $0$.`,
  methode: R`Poids qui s'annulent : concentrer la fonction-test près du zéro commun ($(1-x)^n$ vit près de $0$).`
},
{ id: "topo-110", ...P, level: 2, time: "25 min",
  title: "Normes intégrales à poids ∫|f|φ (Mines)",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$ et $E^+$ l'ensemble des fonctions de $E$ positives qui ne s'annulent qu'en un nombre fini de points. Pour $\varphi\in E^+$ et $f\in E$, on pose $\|f\|_\varphi = \int_0^1|f(t)|\varphi(t)\,dt$.</p><ol><li>Montrer que $\|\cdot\|_\varphi$ est une norme sur $E$.</li><li>Montrer que si $\varphi_1,\varphi_2\in E^+$ sont strictement positives, les normes associées sont équivalentes.</li><li>Avec $\varphi_1(t) = t$ et $\varphi_2(t) = t^2$, les normes $\|\cdot\|_{\varphi_1}$ et $\|\cdot\|_{\varphi_2}$ sont-elles équivalentes ?</li></ol>`,
  decode: { donnees: [R`Une fonction continue positive d'intégrale nulle est nulle.`], but: R`Même schéma que pour les normes sup à poids, avec une fonction « tente » concentrée près de $0$.`, cles: {} },
  steps: [
    { t: "1) Une norme", h: R`<p>$|f|\varphi$ continue positive d'intégrale nulle.</p>`, b: R`<p>Homogénéité et inégalité triangulaire viennent de la linéarité et de la croissance de l'intégrale. Si $\|f\|_\varphi = 0$, la fonction continue positive $|f|\varphi$ est d'intégrale nulle, donc nulle. Comme $\varphi$ ne s'annule qu'en un nombre fini de points, $f$ est nulle ailleurs, puis partout par continuité.</p>`, rappels: ["eu-intnulle"] },
    { t: "2) Poids strictement positifs", h: R`<p>$m\leqslant\varphi_2/\varphi_1\leqslant M$ avec $m>0$.</p>`, b: R`<p>$\varphi_2/\varphi_1$ est continue et strictement positive sur le segment $[0,1]$ : elle atteint un minimum $m>0$ et un maximum $M$. Donc $m\varphi_1\leqslant\varphi_2\leqslant M\varphi_1$, et en intégrant contre $|f|$ :</p>$$m\|f\|_{\varphi_1}\leqslant\|f\|_{\varphi_2}\leqslant M\|f\|_{\varphi_1}.$$`, rappels: ["nrm-compact"] },
    { t: "3) Le sens facile", h: R`<p>$t^2\leqslant t$ sur $[0,1]$.</p>`, b: R`<p>$t^2\leqslant t$ donne $\|f\|_{\varphi_2}\leqslant\|f\|_{\varphi_1}$.</p>` },
    { t: "3) Une fonction tente près de 0", h: R`<p>$f_n(t) = \max(0,1-nt)$.</p>`, b: R`<p>Soit $f_n(t) = \max(0,1-nt)$, continue, nulle sur $[\frac1n,1]$. On calcule :</p>$$\begin{aligned}\|f_n\|_{\varphi_1}&= \int_0^{1/n}(1-nt)\,t\,dt = \frac1{2n^2}-\frac1{3n^2} = \frac1{6n^2},\\\|f_n\|_{\varphi_2}&= \int_0^{1/n}(1-nt)\,t^2\,dt = \frac1{3n^3}-\frac1{4n^3} = \frac1{12n^3}.\end{aligned}$$<p>Le rapport vaut $\frac{\|f_n\|_{\varphi_1}}{\|f_n\|_{\varphi_2}} = 2n\to+\infty$.</p><div class="sbox"><p>$\|\cdot\|_{\varphi_2}\leqslant\|\cdot\|_{\varphi_1}$, mais les normes ne sont pas équivalentes.</p></div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`La question 2 exige des poids strictement positifs : c'est précisément ce qui manque en 3 (les deux poids s'annulent en $0$, à des ordres différents).`,
  methode: R`Normes à poids : équivalentes si le quotient des poids est encadré ; sinon, concentrer une fonction-test là où le quotient dégénère.`
},
{ id: "topo-111", ...P, level: 3, time: "30 min",
  title: "‖f + f″‖∞ sur les fonctions nulles en 0 avec dérivée nulle (Centrale)",
  enonce: R`<p>Soit $E = \{f\in\mathcal C^2([0,\pi],\mathbb R) : f(0) = f'(0) = 0\}$.</p><ol><li>Montrer que $N : f\mapsto\|f+f''\|_\infty$ est une norme sur $E$.</li><li>Pour $f\in E$, on pose $N'(f) = \|f\|_\infty+\|f''\|_\infty$ (on admet que c'est une norme). Montrer que $N'$ est équivalente à $N$.</li></ol>`,
  decode: { donnees: [R`Solution de $y''+y = g$, $y(0) = y'(0) = 0$ : $y(x) = \int_0^x\sin(x-t)g(t)\,dt$.`], but: R`$N\leqslant N'$ directement ; $N'\leqslant(1+2\pi)N$ par la formule de variation des constantes.`, cles: {} },
  steps: [
    { t: "1) Une norme", h: R`<p>$f''+f = 0$, $f(0) = f'(0) = 0$.</p>`, b: R`<p>$N$ est bien définie, positive, homogène et triangulaire. Si $N(f) = 0$, $f$ est solution de</p>$$\left\{\begin{aligned}&y''+y = 0,\\&y(0) = y'(0) = 0,\end{aligned}\right.$$<p>dont l'unique solution est la fonction nulle (Cauchy-Lipschitz). Donc $f = 0$.</p>` },
    { t: "2) N ≤ N′", h: R`<p>Inégalité triangulaire.</p>`, b: R`<p>$N(f) = \|f+f''\|_\infty\leqslant\|f\|_\infty+\|f''\|_\infty = N'(f)$.</p>` },
    { t: "2) Expression de f", h: R`<p>$g = f+f''$ ; variation des constantes.</p>`, b: R`<p>Soit $g = f+f''$. Alors $f$ est solution de $y''+y = g$ avec $y(0) = y'(0) = 0$, et la méthode de variation des constantes donne</p>$$f(x) = \int_0^x\sin(x-t)\,g(t)\,dt.$$<p>(On vérifie : $f'(x) = \int_0^x\cos(x-t)g(t)\,dt$ et $f''(x) = g(x)-\int_0^x\sin(x-t)g(t)\,dt = g(x)-f(x)$.)</p>`, rappels: ["nrm-edo"] },
    { t: "2) N′ ≤ (1 + 2π) N", h: R`<p>$|f(x)|\leqslant x\|g\|_\infty\leqslant\pi N(f)$ et $f'' = g-f$.</p>`, b: R`<p>Pour $x\in[0,\pi]$ :</p>$$|f(x)|\leqslant\int_0^x|\sin(x-t)||g(t)|\,dt\leqslant x\|g\|_\infty\leqslant\pi N(f).$$<p>Puis $f'' = g-f$ donne $\|f''\|_\infty\leqslant\|g\|_\infty+\|f\|_\infty\leqslant(1+\pi)N(f)$. Au total :</p>$$N'(f) = \|f\|_\infty+\|f''\|_\infty\leqslant\pi N(f)+(1+\pi)N(f) = (1+2\pi)N(f).$$<div class="sbox">$$N\leqslant N'\leqslant(1+2\pi)N\qquad\text{: les normes sont équivalentes.}$$</div>`, rappels: ["nrm-equiv"] }
  ],
  piege: R`Les conditions $f(0) = f'(0) = 0$ sont essentielles : sans elles, $\cos$ et $\sin$ vérifient $f+f'' = 0$ et $N$ ne sépare plus.`,
  methode: R`Norme $\|Lf\|_\infty$ pour un opérateur différentiel $L$ : résoudre $Lf = g$ avec les conditions initiales pour contrôler $f$ par $g$.`
},
{ id: "topo-112", ...P, level: 3, time: "30 min",
  title: "Les normes √(x² + 2axy + y²) sur ℝ² (Centrale)",
  enonce: R`<p>Pour $a\in\mathbb R$, on considère $N_a(x,y) = \sqrt{x^2+2axy+y^2}$.</p><ol><li>Pour quelles valeurs de $a$ l'application $N_a$ définit-elle une norme sur $\mathbb R^2$ ?</li><li>Si $N_a$ et $N_b$ sont des normes, calculer</li></ol>$$\inf_{(x,y)\neq0}\frac{N_a(x,y)}{N_b(x,y)}\qquad\text{et}\qquad\sup_{(x,y)\neq0}\frac{N_a(x,y)}{N_b(x,y)}.$$`,
  decode: { donnees: [R`Polaires : $x^2+2axy+y^2 = r^2(1+a\sin2t)$.`], but: R`Norme euclidienne si $|a|\lt1$ ; puis étudier $s\mapsto\frac{1+as}{1+bs}$ sur $[-1,1]$.`, cles: {} },
  steps: [
    { t: "1) Condition nécessaire", h: R`<p>Tester en $(1,1)$ et $(1,-1)$.</p>`, b: R`<p>Si $N_a$ est une norme, $N_a(1,1)$ et $N_a(1,-1)$ existent et sont $>0$ :</p>$$\left\{\begin{aligned}N_a(1,1)^2&= 2+2a>0,\\N_a(1,-1)^2&= 2-2a>0,\end{aligned}\right.\qquad\text{donc}\qquad a\in\,]-1,1[.$$` },
    { t: "1) Condition suffisante", h: R`<p>$\varphi((x,y),(x',y')) = xx'+yy'+a(xy'+x'y)$ ; $2|xy|\leqslant x^2+y^2$.</p>`, b: R`<p>Soit $a\in\,]-1,1[$ et $\varphi\big((x,y),(x',y')\big) = xx'+yy'+a(xy'+x'y)$, forme bilinéaire symétrique avec $\varphi(v,v) = N_a(v)^2$. Comme $2|xy|\leqslant x^2+y^2$ :</p>$$\varphi\big((x,y),(x,y)\big) = x^2+y^2+2axy\geqslant(1-|a|)(x^2+y^2),$$<p>qui est $>0$ pour $(x,y)\neq0$.</p><p>$\varphi$ est un produit scalaire et $N_a$ est la norme euclidienne associée.</p><div class="sbox"><p>$N_a$ est une norme si et seulement si $a\in\,]-1,1[$.</p></div>${figNa}`, rappels: ["eu-ps"] },
    { t: "2) Réduction à une variable", h: R`<p>Homogénéité : $(x,y) = r(\cos t,\sin t)$, puis $s = \sin2t\in[-1,1]$.</p>`, b: R`<p>Le cas $a = b$ est immédiat (le rapport vaut $1$). Quitte à échanger, supposons $a\lt b$. Le rapport est homogène de degré $0$ ; avec $(x,y) = r(\cos t,\sin t)$ :</p>$$\frac{N_a(x,y)^2}{N_b(x,y)^2} = \frac{1+a\sin2t}{1+b\sin2t} = h(s),$$<p>avec</p>$$h(s) = \frac{1+as}{1+bs},\qquad s = \sin2t\in[-1,1].$$` },
    { t: "2) Variations et conclusion", h: R`<p>$h'(s) = \frac{a-b}{(1+bs)^2}\lt0$.</p>`, b: R`<p>$h'(s) = \frac{a(1+bs)-b(1+as)}{(1+bs)^2} = \frac{a-b}{(1+bs)^2}\lt0$ : $h$ décroît sur $[-1,1]$. Ses extrema sont atteints aux bornes :</p>$$\left\{\begin{aligned}\min h&= h(1) = \frac{1+a}{1+b}\quad(t = \tfrac\pi4,\ \text{direction }(1,1)),\\\max h&= h(-1) = \frac{1-a}{1-b}\quad(t = -\tfrac\pi4,\ \text{direction }(1,-1)).\end{aligned}\right.$$<p>Donc, pour $a\lt b$ :</p><div class="sbox">$$\inf\frac{N_a}{N_b} = \sqrt{\frac{1+a}{1+b}},\qquad\sup\frac{N_a}{N_b} = \sqrt{\frac{1-a}{1-b}}.$$</div><p>Ces bornes sont atteintes : ce sont les meilleures constantes d'équivalence entre $N_a$ et $N_b$.</p>` }
  ],
  piege: R`Le passage en polaires transforme un problème à deux variables en l'étude d'une fonction homographique d'une variable, monotone : pas besoin de dériver en $t$.`,
  methode: R`Meilleures constantes entre deux normes : par homogénéité, étudier le rapport sur la sphère unité (ici, un paramètre angulaire).`
}
]);
})();

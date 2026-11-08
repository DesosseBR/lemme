/* Topologie des espaces vectoriels normés (Spé) : bloc « Études pratiques de normes ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 2 };
const { GRAPH, S, f1 } = window.__LA;
LEMME.rappels({
  "nrm-sousmult": { t: "Norme sous-multiplicative (norme d'algèbre)", b: R`$$\|AB\|\leqslant\|A\|\,\|B\|\ \Longrightarrow\ \|A^k\|\leqslant\|A\|^k,\qquad\forall\lambda\in\operatorname{Sp}A,\ |\lambda|\leqslant\|A\|.$$<p>Toute norme subordonnée $\|A\| = \sup_{N(X) = 1}N(AX)$ est sous-multiplicative.</p>` },
  "nrm-compact": { t: "Bornes atteintes", b: R`$$\begin{gathered}f : K\to\mathbb R\text{ continue},\ K\text{ compact}\neq\varnothing\Rightarrow\min,\max\text{ atteints},\\[4pt]\dim E\lt\infty\ :\ \text{compact}\iff\text{fermé borné}.\end{gathered}$$` },
  "nrm-sep": { t: "Séparation par les racines", b: R`$$\deg P\leqslant n,\ \operatorname{Card}\{\text{racines}\}\geqslant n+1\ \Longrightarrow\ P = 0.$$` }
});
const poly = (X, Y, pts, cls, st = "") => `<polygon points="${pts.map(([x, y]) => f1(X(x)) + "," + f1(Y(y))).join(" ")}" class="${cls}" style="${st}"/>`;
const sq = r => [[r, r], [-r, r], [-r, -r], [r, -r]];
const figN = GRAPH({ w: 380, h: 360, x: [-2.4, 2.4], y: [-2.4, 2.4], xt: [-2, -1, 1, 2], xtl: ["−2", "−1", "1", "2"], yt: [-2, -1, 1, 2], ytl: ["−2", "−1", "1", "2"], xl: "x₁", yl: "x₂",
  extra: (X, Y) => poly(X, Y, [[1, 0], [1, -2], [-1, 0], [-1, 2]], "zb", "stroke:var(--blue,#2b59d9);stroke-width:2")
    + poly(X, Y, sq(0.5), "vr", "fill:none;stroke-width:1.8;stroke-dasharray:5 4")
    + poly(X, Y, sq(2), "vk", "fill:none;stroke-width:1.4;stroke-dasharray:5 4")
    + S(X(0.55), Y(-1.35), "N ≤ 1", "start", "sm b") + S(X(0.55), Y(0.62), "‖·‖∞ ≤ 1/2", "start", "sm r") + S(X(-2.3), Y(2.15), "‖·‖∞ ≤ 2", "start", "sm") },
  R`La boule unité fermée de $N(x) = \max(|x_1|,|x_1+x_2|)$ : le parallélogramme bleu de sommets $(1,0)$, $(1,-2)$, $(-1,0)$, $(-1,2)$, délimité par $|x_1|\leqslant1$ et $|x_1+x_2|\leqslant1$. Il contient le carré $\|x\|_\infty\leqslant\frac12$ (rouge) et est contenu dans le carré $\|x\|_\infty\leqslant2$ (noir) : c'est l'encadrement $\frac12\|x\|_\infty\leqslant N(x)\leqslant2\|x\|_\infty$.`, "Boule unité de N");
const figLp = GRAPH({ w: 360, h: 320, x: [-1.4, 1.4], y: [-1.25, 1.25], xt: [-1, 1], xtl: ["−1", "1"], yt: [-1, 1], ytl: ["−1", "1"], xl: "x₁", yl: "x₂",
  extra: (X, Y) => [[1, "vr"], [1.5, "vg"], [2, "vb"], [4, "vk"], [12, "vk"]].map(([p, c]) => poly(X, Y, Array.from({ length: 160 }, (_, k) => { const t = k * Math.PI / 80, c1 = Math.cos(t), s1 = Math.sin(t); const r = (Math.abs(c1) ** p + Math.abs(s1) ** p) ** (-1 / p); return [r * c1, r * s1]; }), c, "fill:none;stroke-width:" + (p === 12 ? 1.4 : 2) + (p === 4 ? ";stroke-dasharray:5 4" : ""))).join("")
    + S(X(0.08), Y(0.6), "p = 1", "start", "sm r") + S(X(1.03), Y(1.12), "p = 12", "start", "sm") },
  R`Boules unités de $\|\cdot\|_p$ dans $\mathbb R^2$ pour $p = 1$ (rouge), $\frac32$ (orange), $2$ (bleu), $4$ (pointillé) et $12$ (noir). Quand $p$ augmente, elles grossissent et se rapprochent du carré, boule unité de $\|\cdot\|_\infty$ : c'est la limite $\|x\|_p\to\|x\|_\infty$.`, "Boules des normes p");
LEMME.exercises([
{ id: "topo-63", ...P, level: 1, time: "10 min",
  title: "La norme P ↦ max |P(aₖ)| sur ℝₙ[X]",
  enonce: R`<p>Soient $n\in\mathbb N$ et $a_0,\dots,a_n$ des réels deux à deux distincts. Sur $E_n = \mathbb R_n[X]$, on pose $N(P) = \max_{0\leqslant k\leqslant n}|P(a_k)|$. Vérifier que $N$ est une norme sur $E_n$.</p>`,
  decode: { donnees: [R`$n+1$ points distincts, polynômes de degré $\leqslant n$.`], but: R`Homogénéité et triangulaire comme pour $\|\cdot\|_\infty$ ; séparation par les racines.`, cles: {} },
  steps: [
    { t: "Homogénéité et triangulaire", h: R`<p>Valeur absolue point par point, puis max.</p>`, b: R`<p>$N(P)$ est un max de réels positifs, donc bien défini et positif. $N(\lambda P) = \max|\lambda||P(a_k)| = |\lambda|N(P)$. Pour tout $k$, $|(P+Q)(a_k)|\leqslant|P(a_k)|+|Q(a_k)|\leqslant N(P)+N(Q)$, donc $N(P+Q)\leqslant N(P)+N(Q)$.</p>`, rappels: ["nrm-def"] },
    { t: "Séparation", h: R`<p>$N(P) = 0$ : $P$ a $n+1$ racines distinctes.</p>`, b: R`<p>Si $N(P) = 0$, alors $P(a_0) = \dots = P(a_n) = 0$ : $P$, de degré $\leqslant n$, a $n+1$ racines distinctes, donc $P = 0$. $N$ est une norme.</p><p>Remarque : avec seulement $n$ points, $N$ ne serait plus séparante ($P = \prod_{k\lt n}(X-a_k)\neq0$ donnerait $N(P) = 0$).</p>`, rappels: ["nrm-sep"] }
  ],
  piege: R`La séparation dépend du nombre de points : il en faut au moins $n+1$, distincts.`,
  methode: R`Norme définie par des valeurs ponctuelles : la séparation vient d'un argument de racines.`
},
{ id: "topo-64", ...P, level: 1, time: "10 min",
  title: "La norme P ↦ sup sur [−1, 1] de |P| sur ℝ[X]",
  enonce: R`<p>Sur $E = \mathbb R[X]$, on pose $N(P) = \sup_{t\in[-1,1]}|P(t)|$. Vérifier que $N$ est une norme sur $E$.</p>`,
  decode: { donnees: [R`$t\mapsto|P(t)|$ est continue sur le segment $[-1,1]$.`], but: R`Bonne définition, puis axiomes ; séparation par une infinité de racines.`, cles: {} },
  steps: [
    { t: "Bonne définition", h: R`<p>Fonction continue sur un segment.</p>`, b: R`<p>$t\mapsto|P(t)|$ est continue sur le segment $[-1,1]$, donc bornée (et elle atteint son max) : $N(P)\in\mathbb R_+$ existe.</p>`, rappels: ["nrm-compact"] },
    { t: "Axiomes", h: R`<p>Séparation : $P$ nul sur $[-1,1]$.</p>`, b: R`<p>$N(\lambda P) = |\lambda|N(P)$ et, pour tout $t$, $|P(t)+Q(t)|\leqslant N(P)+N(Q)$, d'où $N(P+Q)\leqslant N(P)+N(Q)$. Si $N(P) = 0$, $P(t) = 0$ pour tout $t\in[-1,1]$ : $P$ a une infinité de racines, $P = 0$.</p><p>Remarque : sur $\mathcal C([-1,1])$, c'est la norme uniforme ; c'est l'identification polynôme/fonction sur un ensemble infini qui rend $N$ séparante sur $\mathbb R[X]$.</p>`, rappels: ["nrm-sep"] }
  ],
  piege: R`Sur $\mathbb R[X]$ (et non sur un espace de fonctions), la séparation n'est pas automatique : il faut dire qu'un polynôme nul sur $[-1,1]$ est le polynôme nul.`,
  methode: R`Sup d'une fonction continue sur un segment : toujours fini, et atteint.`
},
{ id: "topo-65", ...P, level: 1, time: "15 min",
  title: "Somme des modules des coefficients : une norme matricielle",
  enonce: R`<p>Pour $A = (a_{ij})\in\mathcal M_n(\mathbb R)$, on pose $\|A\| = \sum_{i,j = 1}^n|a_{ij}|$. Montrer que c'est une norme sur $\mathcal M_n(\mathbb R)$ vérifiant $\|AB\|\leqslant\|A\|\,\|B\|$ pour toutes $A,B$.</p>`,
  decode: { donnees: [R`$(AB)_{ij} = \sum_ka_{ik}b_{kj}$.`], but: R`C'est la norme $1$ de $\mathbb R^{n^2}$ ; pour la sous-multiplicativité, réorganiser la triple somme.`, cles: {} },
  steps: [
    { t: "Une norme", h: R`<p>Norme $1$ dans la base canonique.</p>`, b: R`<p>C'est la norme $1$ associée à la base canonique $(E_{ij})$ de $\mathcal M_n(\mathbb R)$, donc une norme (exercice sur les normes usuelles des matrices).</p>` },
    { t: "Majoration de ‖AB‖", h: R`<p>$|\sum_ka_{ik}b_{kj}|\leqslant\sum_k|a_{ik}||b_{kj}|$, puis sommer d'abord en $j$.</p>`, b: R`<p>$$\|AB\| = \sum_{i,j}\Big|\sum_ka_{ik}b_{kj}\Big|\leqslant\sum_{i,j,k}|a_{ik}||b_{kj}| = \sum_{i,k}\Big(|a_{ik}|\sum_j|b_{kj}|\Big).$$<p>Pour chaque $k$, $\sum_j|b_{kj}|\leqslant\sum_{l,j}|b_{lj}| = \|B\|$. Donc</p><div class="sbox">$$\|AB\|\leqslant\sum_{i,k}|a_{ik}|\,\|B\| = \|A\|\,\|B\|.$$</div>`, rappels: ["nrm-sousmult"] }
  ],
  piege: R`La majoration $\sum_j|b_{kj}|\leqslant\|B\|$ est grossière (une ligne contre toute la matrice) mais suffit.`,
  methode: R`Sous-multiplicativité : inégalité triangulaire sur chaque coefficient, puis réorganiser les sommes.`
},
{ id: "topo-66", ...P, level: 2, time: "15 min",
  title: "La norme de Frobenius est sous-multiplicative",
  enonce: R`<p>Pour $A = (a_{ij})\in\mathcal M_n(\mathbb R)$, on pose $\|A\| = \big(\sum_{i,j = 1}^na_{ij}^2\big)^{1/2}$. Montrer que c'est une norme vérifiant $\|AB\|\leqslant\|A\|\,\|B\|$.</p>`,
  decode: { donnees: [R`Cauchy-Schwarz : $\big(\sum_ka_{ik}b_{kj}\big)^2\leqslant\sum_ka_{ik}^2\sum_lb_{lj}^2$.`], but: R`Cauchy-Schwarz coefficient par coefficient, puis sommer.`, cles: {} },
  steps: [
    { t: "Une norme", h: R`<p>Norme $2$ dans la base canonique.</p>`, b: R`<p>C'est la norme euclidienne de $\mathbb R^{n^2}$ (associée au produit scalaire $\mathrm{tr}({}^tAB)$), donc une norme.</p>` },
    { t: "Cauchy-Schwarz", h: R`<p>Coefficient $(i,j)$ de $AB$ : produit scalaire de la ligne $i$ de $A$ et de la colonne $j$ de $B$.</p>`, b: R`<p>$$\begin{aligned}\|AB\|^2 &= \sum_{i,j}\Big(\sum_ka_{ik}b_{kj}\Big)^2\leqslant\sum_{i,j}\Big(\sum_ka_{ik}^2\Big)\Big(\sum_lb_{lj}^2\Big)\\&= \Big(\sum_{i,k}a_{ik}^2\Big)\Big(\sum_{j,l}b_{lj}^2\Big) = \|A\|^2\|B\|^2.\end{aligned}$$<p>(La double somme d'un produit d'un terme ne dépendant que de $i$ et d'un terme ne dépendant que de $j$ se factorise.) D'où $\|AB\|\leqslant\|A\|\,\|B\|$.</p>`, rappels: ["nrm-cs", "nrm-sousmult"] }
  ],
  piege: R`La norme de Frobenius n'est pas subordonnée : $\|I_n\| = \sqrt n\neq1$ pour $n\geqslant2$.`,
  methode: R`Coefficient d'un produit = produit scalaire ligne-colonne : Cauchy-Schwarz.`
},
{ id: "topo-67", ...P, level: 2, time: "20 min",
  title: "La norme « max des sommes en ligne » sur Mₙ(ℂ)",
  enonce: R`<p>Pour $A = (a_{ij})\in\mathcal M_n(\mathbb C)$, on pose $\|A\| = \max_{1\leqslant i\leqslant n}\sum_{j = 1}^n|a_{ij}|$.</p><ol><li>Montrer que $\|\cdot\|$ est une norme sur $\mathcal M_n(\mathbb C)$.</li><li>Montrer que $\|AB\|\leqslant\|A\|\,\|B\|$ pour toutes $A,B$.</li></ol>`,
  decode: { donnees: [R`Pour chaque ligne $k$ de $B$ : $\sum_j|b_{kj}|\leqslant\|B\|$.`], but: R`Axiomes ligne par ligne ; sous-multiplicativité en sommant d'abord en $j$.`, cles: {} },
  steps: [
    { t: "1) Séparation", h: R`<p>$\|A\| = 0$ : chaque somme de ligne est nulle.</p>`, b: R`<p>$\|A\|\in\mathbb R_+$. Si $\|A\| = 0$, pour tout $i$, $\sum_j|a_{ij}| = 0$, donc $a_{ij} = 0$ pour tous $i,j$ : $A = 0$.</p>` },
    { t: "1) Homogénéité et triangulaire", h: R`<p>Le max d'une somme est $\leqslant$ la somme des max.</p>`, b: R`<p>$$\|\lambda A\| = \max_i\sum_j|\lambda||a_{ij}| = |\lambda|\max_i\sum_j|a_{ij}| = |\lambda|\,\|A\|.$$<p>Pour tout $i$ : $\sum_j|a_{ij}+b_{ij}|\leqslant\sum_j|a_{ij}|+\sum_j|b_{ij}|\leqslant\|A\|+\|B\|$ ; en passant au max sur $i$, $\|A+B\|\leqslant\|A\|+\|B\|$.</p>`, rappels: ["nrm-def"] },
    { t: "2) Sous-multiplicativité", h: R`<p>Fixer $i$ : $\sum_j|\sum_ka_{ik}b_{kj}|\leqslant\sum_k|a_{ik}|\sum_j|b_{kj}|$.</p>`, b: R`<p>Fixons $i$. Par l'inégalité triangulaire puis en échangeant les sommes finies :</p>$$\begin{aligned}\sum_j\Big|\sum_ka_{ik}b_{kj}\Big|&\leqslant\sum_k|a_{ik}|\sum_j|b_{kj}|\\&\leqslant\sum_k|a_{ik}|\,\|B\|\leqslant\|A\|\,\|B\|.\end{aligned}$$<p>En passant au max sur $i$ : $\|AB\|\leqslant\|A\|\,\|B\|$. (C'est la norme subordonnée à $\|\cdot\|_\infty$ sur les colonnes.)</p>`, rappels: ["nrm-sousmult"] }
  ],
  piege: R`Ne pas confondre avec $\max_j\sum_i|a_{ij}|$ (sommes en colonne), qui est la norme subordonnée à $\|\cdot\|_1$.`,
  methode: R`Norme définie par un max : prouver l'inégalité pour chaque indice, puis passer au max.`
},
{ id: "topo-68", ...P, level: 2, time: "20 min",
  title: "Norme d'algèbre et majoration des valeurs propres",
  enonce: R`<p>Pour $A = (a_{ij})\in\mathcal M_n(\mathbb C)$, on pose $\|A\| = \max_{1\leqslant i\leqslant n}\sum_{j = 1}^n|a_{ij}|$.</p><ol><li>Montrer que $\|\cdot\|$ est une norme d'algèbre sur $\mathcal M_n(\mathbb C)$ (norme vérifiant $\|AB\|\leqslant\|A\|\|B\|$).</li><li>Montrer que si $\lambda$ est valeur propre de $A$, alors $|\lambda|\leqslant\|A\|$.</li></ol>`,
  decode: { donnees: [R`$AX = \lambda X$ avec $X\neq0$ ; on regarde la ligne où $|x_i|$ est maximal.`], but: R`1) : exercice précédent. 2) : la ligne $i_0$ de l'équation $AX = \lambda X$.`, cles: {} },
  steps: [
    { t: "1) Norme d'algèbre", h: R`<p>Mêmes calculs que l'exercice précédent.</p>`, b: R`<p>Séparation, homogénéité et inégalité triangulaire se vérifient ligne par ligne puis en passant au max. Pour le produit, à $i$ fixé :</p>$$\sum_j|(AB)_{ij}|\leqslant\sum_k|a_{ik}|\sum_j|b_{kj}|\leqslant\sum_k|a_{ik}|\,\|B\|\leqslant\|A\|\,\|B\|,$$<p>puis on passe au max sur $i$.</p>`, rappels: ["nrm-sousmult"] },
    { t: "2) Une coordonnée maximale", h: R`<p>$X\neq0$ avec $AX = \lambda X$, et $i_0$ tel que $|x_{i_0}| = \max_j|x_j|>0$.</p>`, b: R`<p>Soit $X = (x_1,\dots,x_n)\neq0$ avec $AX = \lambda X$ : pour tout $i$, $\lambda x_i = \sum_ja_{ij}x_j$. Choisissons $i_0$ avec $|x_{i_0}| = \max_j|x_j|$, qui est $>0$. La ligne $i_0$ donne</p>$$|\lambda||x_{i_0}| = \Big|\sum_ja_{i_0j}x_j\Big|\leqslant\sum_j|a_{i_0j}||x_j|\leqslant\Big(\sum_j|a_{i_0j}|\Big)|x_{i_0}|.$$<p>En divisant par $|x_{i_0}|>0$ :</p><div class="sbox">$$|\lambda|\leqslant\sum_j|a_{i_0j}|\leqslant\|A\|.$$</div><p>Version plus précise (théorème de Gershgorin) : $|\lambda-a_{i_0i_0}|\leqslant\sum_{j\neq i_0}|a_{i_0j}|$.</p>` }
  ],
  piege: R`Prendre la coordonnée de module <b>maximal</b> : c'est elle qui permet de majorer $|x_j|$ par $|x_{i_0}|$.`,
  methode: R`Majorer une valeur propre : regarder la ligne de $AX = \lambda X$ correspondant à la plus grande coordonnée de $X$.`
},
{ id: "topo-69", ...P, level: 3, time: "25 min",
  title: "La norme « lignes » est subordonnée à ‖·‖∞",
  enonce: R`<p>Pour $A = (a_{ij})\in\mathcal M_n(\mathbb R)$, on pose $\|A\| = \max_{1\leqslant i\leqslant n}\sum_{j = 1}^n|a_{ij}|$, et pour une colonne $X$, $N(X) = \max_i|x_i|$.</p><ol><li>Montrer que $\|\cdot\|$ est une norme sur $\mathcal M_n(\mathbb R)$.</li><li>Montrer qu'elle est sous-multiplicative.</li><li>Vérifier que $N(AX)\leqslant\|A\|\,N(X)$ pour toute colonne $X$.</li><li>En déduire que $\|A\| = \sup_{N(X) = 1}N(AX)$.</li></ol>`,
  decode: { donnees: [R`$|(AX)_i|\leqslant\sum_j|a_{ij}||x_j|$.`], but: R`1), 2) : comme précédemment. 4) : exhiber une colonne de signes qui réalise le max.`, cles: {} },
  steps: [
    { t: "1) et 2)", h: R`<p>Ligne par ligne puis max.</p>`, b: R`<p>Ce sont les calculs de l'exercice « la norme max des sommes en ligne » (valables sur $\mathbb R$ comme sur $\mathbb C$) : séparation, homogénéité, triangulaire ligne par ligne, puis $\sum_j|(AB)_{ij}|\leqslant\sum_k|a_{ik}|\sum_j|b_{kj}|\leqslant\|A\|\|B\|$.</p>`, rappels: ["nrm-sousmult"] },
    { t: "3) N(AX) ≤ ‖A‖ N(X)", h: R`<p>$|x_j|\leqslant N(X)$.</p>`, b: R`<p>Pour tout $i$ : $|(AX)_i| = |\sum_ja_{ij}x_j|\leqslant\sum_j|a_{ij}||x_j|\leqslant\Big(\sum_j|a_{ij}|\Big)N(X)\leqslant\|A\|\,N(X)$. En passant au max sur $i$ : $N(AX)\leqslant\|A\|\,N(X)$.</p>` },
    { t: "4) Une colonne qui réalise l'égalité", h: R`<p>Soit $i_0$ la ligne réalisant le max ; $x_j = \pm1$ du signe de $a_{i_0j}$.</p>`, b: R`<p>Par 3), $\sup_{N(X) = 1}N(AX)\leqslant\|A\|$. Soit $i_0$ tel que $\|A\| = \sum_j|a_{i_0j}|$, et $X_0$ la colonne de coordonnées $x_j = 1$ si $a_{i_0j}\geqslant0$, $x_j = -1$ sinon. Alors $N(X_0) = 1$ et $a_{i_0j}x_j = |a_{i_0j}|$, donc</p>$$N(AX_0)\geqslant|(AX_0)_{i_0}| = \sum_j|a_{i_0j}| = \|A\|.$$<p>Le sup est atteint en $X_0$ :</p><div class="sbox">$$\|A\| = \max_{N(X) = 1}N(AX).$$</div><p>$\|\cdot\|$ est la norme subordonnée à $\|\cdot\|_\infty$, ce qui redonne la sous-multiplicativité.</p>` }
  ],
  piege: R`Choisir $x_j = 1$ (et non $0$) quand $a_{i_0j} = 0$, pour garder $N(X_0) = 1$.`,
  methode: R`Calcul d'une norme subordonnée : majorer, puis trouver un vecteur unitaire qui réalise l'égalité.`
},
{ id: "topo-70", ...P, level: 3, time: "25 min",
  title: "Norme subordonnée à ‖·‖∞ : définition par un sup",
  enonce: R`<p>On munit $\mathcal M_{n,1}(\mathbb R)$ de $\|X\| = \max_i|x_i|$, et on note $S$ l'ensemble des colonnes de norme $1$.</p><ol><li>Soit $A\in\mathcal M_n(\mathbb R)$. Montrer l'existence de $\sup_{X\in S}\|AX\|$.</li><li>On pose $N(A) = \sup_{X\in S}\|AX\|$. Justifier que $\|AX\|\leqslant N(A)\|X\|$ pour toute colonne $X$.</li><li>Vérifier que $N$ est une norme sur $\mathcal M_n(\mathbb R)$.</li><li>Montrer que $N(A) = \max_{1\leqslant i\leqslant n}\sum_{j = 1}^n|a_{ij}|$.</li></ol>`,
  decode: { donnees: [R`Pour $X\in S$, $|x_j|\leqslant1$.`], but: R`Majorer par $M = \max_i\sum_j|a_{ij}|$, homogénéité, puis vecteur de signes pour l'égalité.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>Pour $X\in S$, $\|AX\|\leqslant M = \max_i\sum_j|a_{ij}|$.</p>`, b: R`<p>Pour $X\in S$ et tout $i$, $|(AX)_i|\leqslant\sum_j|a_{ij}||x_j|\leqslant\sum_j|a_{ij}|\leqslant M$, avec $M = \max_i\sum_j|a_{ij}|$. Donc $\{\|AX\| : X\in S\}$ est une partie de $\mathbb R$ non vide (elle contient $\|Ae_1\|$) et majorée par $M$ : sa borne supérieure existe, et $N(A)\leqslant M$.</p>` },
    { t: "2) Inégalité fondamentale", h: R`<p>$X' = X/\|X\|\in S$.</p>`, b: R`<p>Si $X = 0$, c'est $0\leqslant0$. Sinon $X' = \frac X{\|X\|}\in S$, donc $\|AX'\|\leqslant N(A)$, soit $\|AX\|\leqslant N(A)\|X\|$ par homogénéité.</p>` },
    { t: "3) Axiomes", h: R`<p>Séparation avec les colonnes élémentaires $E_j$.</p>`, b: R`<p>$N(A)\geqslant0$. Si $N(A) = 0$, alors $AX = 0$ pour tout $X$ (par 2)), en particulier $AE_j = 0$ : chaque colonne de $A$ est nulle, $A = 0$. Homogénéité : $N(\lambda A) = \sup|\lambda|\|AX\| = |\lambda|N(A)$. Triangulaire : pour $X\in S$, $\|(A+B)X\|\leqslant\|AX\|+\|BX\|\leqslant N(A)+N(B)$, d'où $N(A+B)\leqslant N(A)+N(B)$.</p>`, rappels: ["nrm-def"] },
    { t: "4) Calcul de N(A)", h: R`<p>$N(A)\leqslant M$ par 1) ; égalité avec $x_j = \pm1$ du signe de $a_{i_0j}$.</p>`, b: R`<p>On a vu $N(A)\leqslant M$. Soit $i_0$ avec $M = \sum_j|a_{i_0j}|$, et $X$ de coordonnées $x_j = \pm1$ telles que $a_{i_0j}x_j = |a_{i_0j}|$. Alors $X\in S$ et $\|AX\|\geqslant|(AX)_{i_0}| = \sum_j|a_{i_0j}| = M$, donc $N(A)\geqslant M$.</p><div class="sbox">$$N(A) = \max_{1\leqslant i\leqslant n}\sum_{j = 1}^n|a_{ij}|.$$</div>` }
  ],
  piege: R`Dans 1), il faut préciser que l'ensemble est <b>non vide</b> et majoré.`,
  methode: R`Norme subordonnée : définie comme un sup sur la sphère, elle se calcule par « majoration + vecteur extrémal ».`
},
{ id: "topo-71", ...P, level: 3, time: "40 min",
  title: "Inégalités de Young, Hölder et Minkowski",
  enonce: R`<p>Soient $p,q>1$ avec $\frac1p+\frac1q = 1$.</p><ol><li>Montrer que pour tous réels $a,b\geqslant0$ : $ab\leqslant\frac1pa^p+\frac1qb^q$.</li></ol><p>Pour $x,y\in\mathbb K^n$, on pose $\|x\|_p = \big(\sum_i|x_i|^p\big)^{1/p}$ et $\|y\|_q = \big(\sum_i|y_i|^q\big)^{1/q}$.</p><ol start="2"><li>Établir l'inégalité de Hölder : $\sum_{i = 1}^n|x_iy_i|\leqslant\|x\|_p\|y\|_q$.</li><li>En écrivant $$(|x_i|+|y_i|)^p = |x_i|(|x_i|+|y_i|)^{p-1}+|y_i|(|x_i|+|y_i|)^{p-1},$$ obtenir l'inégalité de Minkowski : $\|x+y\|_p\leqslant\|x\|_p+\|y\|_p$.</li></ol>`,
  decode: { donnees: [R`$\ln$ est concave ; $(p-1)q = p$.`], but: R`Young par concavité ; Hölder par Young appliquée aux vecteurs normalisés ; Minkowski par Hölder.`, cles: {} },
  steps: [
    { t: "1) Inégalité de Young", h: R`<p>Concavité du logarithme : $\ln\big(\frac1pu+\frac1qv\big)\geqslant\frac1p\ln u+\frac1q\ln v$.</p>`, b: R`<p>Si $a = 0$ ou $b = 0$, l'inégalité est $0\leqslant\dots$, vraie. Sinon, comme $\ln$ est concave et $\frac1p+\frac1q = 1$ avec $\frac1p,\frac1q\in]0,1[$ :</p>$$\ln\Big(\frac1pa^p+\frac1qb^q\Big)\geqslant\frac1p\ln(a^p)+\frac1q\ln(b^q) = \ln a+\ln b = \ln(ab).$$<p>$\exp$ étant croissante : $ab\leqslant\frac1pa^p+\frac1qb^q$. (Pour $p = q = 2$, c'est $ab\leqslant\frac{a^2+b^2}2$.)</p>` },
    { t: "2) Hölder : cas dégénéré", h: R`<p>Si $\|x\|_p = 0$, alors $x = 0$.</p>`, b: R`<p>Si $\|x\|_p = 0$, tous les $|x_i|^p$ sont nuls, donc $x = 0$ et les deux membres sont nuls. De même si $\|y\|_q = 0$. On suppose désormais $\|x\|_p>0$ et $\|y\|_q>0$.</p>` },
    { t: "2) Hölder : normaliser", h: R`<p>Young avec $a_i = \frac{|x_i|}{\|x\|_p}$, $b_i = \frac{|y_i|}{\|y\|_q}$, puis sommer.</p>`, b: R`<p>Posons $a_i = \frac{|x_i|}{\|x\|_p}$ et $b_i = \frac{|y_i|}{\|y\|_q}$, de sorte que $\sum a_i^p = 1$ et $\sum b_i^q = 1$. Par Young, $a_ib_i\leqslant\frac1pa_i^p+\frac1qb_i^q$, et en sommant :</p>$$\frac{\sum_i|x_iy_i|}{\|x\|_p\|y\|_q} = \sum_ia_ib_i\leqslant\frac1p\cdot1+\frac1q\cdot1 = 1.$$<div class="sbox">$$\sum_{i = 1}^n|x_iy_i|\leqslant\|x\|_p\,\|y\|_q.$$</div><p>Pour $p = q = 2$, on retrouve Cauchy-Schwarz.</p>` },
    { t: "3) Minkowski : Hölder deux fois", h: R`<p>$S = \sum(|x_i|+|y_i|)^p$ ; appliquer Hölder à $(|x_i|)$ et $\big((|x_i|+|y_i|)^{p-1}\big)$, avec $(p-1)q = p$.</p>`, b: R`<p>Soit $S = \sum_i(|x_i|+|y_i|)^p$. Par l'identité de l'énoncé et Hölder :</p>$$\sum_i|x_i|(|x_i|+|y_i|)^{p-1}\leqslant\|x\|_p\Big(\sum_i(|x_i|+|y_i|)^{(p-1)q}\Big)^{1/q} = \|x\|_p\,S^{1/q},$$<p>car $(p-1)q = p$ (en effet $\frac1q = 1-\frac1p = \frac{p-1}p$). De même pour le terme en $y$. Donc</p>$$S\leqslant\big(\|x\|_p+\|y\|_p\big)S^{1/q}.$$` },
    { t: "3) Conclusion", h: R`<p>Diviser par $S^{1/q}$ si $S>0$ ; $1-\frac1q = \frac1p$.</p>`, b: R`<p>Si $S = 0$, alors $x = y = 0$ et c'est évident. Sinon, en divisant par $S^{1/q}>0$ : $S^{1-1/q} = S^{1/p}\leqslant\|x\|_p+\|y\|_p$. Enfin $|x_i+y_i|\leqslant|x_i|+|y_i|$ donne $\|x+y\|_p\leqslant S^{1/p}$, d'où</p><div class="sbox">$$\|x+y\|_p\leqslant\|x\|_p+\|y\|_p.$$</div><p>Avec la séparation et l'homogénéité (immédiates), $\|\cdot\|_p$ est une norme sur $\mathbb K^n$ pour tout $p>1$ (et aussi $p = 1$).</p>${figLp}` }
  ],
  piege: R`Pour $p\lt1$, $\|\cdot\|_p$ n'est <b>pas</b> une norme : l'inégalité triangulaire tombe ($\|(1,0)+(0,1)\|_{1/2} = 4>2$).`,
  methode: R`Inégalité homogène : normaliser les vecteurs ($\|x\|_p = \|y\|_q = 1$) puis appliquer une inégalité numérique terme à terme.`
},
{ id: "topo-72", ...P, level: 2, time: "15 min",
  title: "‖x‖ₚ tend vers ‖x‖∞ quand p → +∞",
  enonce: R`<p>Pour $x = (x_1,\dots,x_n)\in\mathbb K^n$ et $p\geqslant1$, on pose $\|x\|_p = \big(\sum_{i = 1}^n|x_i|^p\big)^{1/p}$. Montrer que $\|x\|_\infty = \lim_{p\to+\infty}\|x\|_p$.</p>`,
  decode: { donnees: [R`$\|x\|_\infty^p\leqslant\sum|x_i|^p\leqslant n\|x\|_\infty^p$.`], but: R`Encadrement puis $n^{1/p}\to1$.`, cles: {} },
  steps: [
    { t: "Encadrement", h: R`<p>Le max est l'un des termes, et chaque terme est $\leqslant$ le max.</p>`, b: R`<p>Si $x = 0$, tout vaut $0$. Sinon, $\|x\|_\infty^p = \max_i|x_i|^p\leqslant\sum_i|x_i|^p\leqslant n\|x\|_\infty^p$. En élevant à la puissance $\frac1p$ (croissante sur $\mathbb R_+$) :</p>$$\|x\|_\infty\leqslant\|x\|_p\leqslant n^{1/p}\,\|x\|_\infty.$$` },
    { t: "Passage à la limite", h: R`<p>$n^{1/p} = e^{\ln n/p}\to1$.</p>`, b: R`<p>$n^{1/p} = e^{\frac{\ln n}p}\xrightarrow[p\to+\infty]{}1$. Par encadrement :</p><div class="sbox">$$\lim_{p\to+\infty}\|x\|_p = \|x\|_\infty.$$</div><p>Cela justifie la notation $\|\cdot\|_\infty$ (voir la figure des boules $\|\cdot\|_p$ dans l'exercice sur Hölder et Minkowski).</p>` }
  ],
  piege: R`Le résultat est faux en dimension infinie sans précaution : la constante $n^{1/p}$ dépend de la dimension.`,
  methode: R`Limite d'une norme $p$ : encadrer la somme par le terme maximal.`
},
{ id: "topo-73", ...P, level: 2, time: "20 min",
  title: "N(x) = sup sur [0, 1] de |x₁ + t x₂| : boule unité",
  enonce: R`<p>Pour $x = (x_1,x_2)\in\mathbb R^2$, on pose $N(x) = \sup_{t\in[0,1]}|x_1+tx_2|$.</p><ol><li>Montrer que $N$ est une norme sur $\mathbb R^2$.</li><li>Représenter la boule unité fermée de $N$ et comparer $N$ à $\|\cdot\|_\infty$.</li></ol>`,
  decode: { donnees: [R`$t\mapsto x_1+tx_2$ est affine.`], but: R`Simplifier : $N(x) = \max(|x_1|,|x_1+x_2|)$.`, cles: {} },
  steps: [
    { t: "Simplification", h: R`<p>Une fonction affine sur $[0,1]$ prend ses valeurs entre $x_1$ et $x_1+x_2$.</p>`, b: R`<p>Quand $t$ décrit $[0,1]$, $x_1+tx_2$ décrit le segment d'extrémités $x_1$ et $x_1+x_2$. La valeur absolue est maximale en une extrémité (sur un segment $[\alpha,\beta]$, $|u|\leqslant\max(|\alpha|,|\beta|)$). Donc</p>$$N(x_1,x_2) = \max\big(|x_1|,|x_1+x_2|\big).$$` },
    { t: "1) Norme", h: R`<p>Axiomes sur l'expression simplifiée.</p>`, b: R`<p>Si $N(x) = 0$, $x_1 = 0$ et $x_1+x_2 = 0$, donc $x = 0$. $N(\lambda x) = \max(|\lambda||x_1|,|\lambda||x_1+x_2|) = |\lambda|N(x)$. Et</p>$$\begin{aligned}N(x+y)&= \max\big(|x_1+y_1|,|x_1+x_2+y_1+y_2|\big)\\&\leqslant\max\big(|x_1|+|y_1|,|x_1+x_2|+|y_1+y_2|\big)\leqslant N(x)+N(y).\end{aligned}$$`, rappels: ["nrm-def"] },
    { t: "2) La boule unité", h: R`<p>$N(x)\leqslant1\iff|x_1|\leqslant1$ et $|x_1+x_2|\leqslant1$ : intersection de deux bandes.</p>`, b: R`<p>$N(x)\leqslant1$ équivaut à $-1\leqslant x_1\leqslant1$ et $-1\leqslant x_1+x_2\leqslant1$ : c'est l'intersection d'une bande verticale et d'une bande oblique, un parallélogramme de sommets $(1,0)$, $(1,-2)$, $(-1,0)$, $(-1,2)$. Par cas de signe : si $x_1,x_2\geqslant0$, $N(x) = x_1+x_2$ ; si $x_1,x_2\leqslant0$, $N(x) = -(x_1+x_2)$ ; sinon $N(x) = \max(|x_1|,|x_1+x_2|)$ dépend de la position.</p>${figN}` },
    { t: "2) Comparaison avec ‖·‖∞", h: R`<p>$|x_2| = |(x_1+x_2)-x_1|$.</p>`, b: R`<p>$N(x)\leqslant\max(|x_1|,|x_1|+|x_2|)\leqslant2\|x\|_\infty$. Réciproquement $|x_1|\leqslant N(x)$ et $|x_2|\leqslant|x_1+x_2|+|x_1|\leqslant2N(x)$, donc $\|x\|_\infty\leqslant2N(x)$ :</p><div class="sbox">$$\tfrac12\|x\|_\infty\leqslant N(x)\leqslant2\|x\|_\infty.$$</div><p>Les constantes sont optimales : $N(1,1) = 2 = 2\|(1,1)\|_\infty$ et $N(1,-2) = 1$ avec $\|(1,-2)\|_\infty = 2$. En termes de boules : $B_\infty(0,\frac12)\subset B_N(0,1)\subset B_\infty(0,2)$.</p>` }
  ],
  piege: R`$t\mapsto|x_1+tx_2|$ n'est pas monotone en général (elle peut s'annuler au milieu), mais son max sur un segment est toujours atteint à une extrémité, par convexité.`,
  methode: R`Sup d'une fonction affine (ou convexe) sur un segment : il est atteint aux extrémités.`
},
{ id: "topo-74", ...P, level: 2, time: "10 min",
  title: "Quand N(x) = a₁|x₁| + … + aₙ|xₙ| est-elle une norme ?",
  enonce: R`<p>Soient $a_1,\dots,a_n\in\mathbb R$ et $N : \mathbb K^n\to\mathbb R$, $N(x) = a_1|x_1|+\dots+a_n|x_n|$. À quelle condition sur les $a_i$ l'application $N$ est-elle une norme ?</p>`,
  decode: { donnees: [R`Tester sur les vecteurs de la base canonique.`], but: R`Montrer que la condition est : $a_i>0$ pour tout $i$.`, cles: {} },
  steps: [
    { t: "Condition nécessaire", h: R`<p>$N(e_i) = a_i$.</p>`, b: R`<p>Si $N$ est une norme, pour le $i$-ème vecteur de base $e_i\neq0$ : $N(e_i) = a_i$ doit être $>0$ (positivité et séparation).</p>` },
    { t: "Condition suffisante", h: R`<p>Axiomes avec des poids positifs.</p>`, b: R`<p>Supposons tous les $a_i>0$. Alors $N(x)\geqslant0$ ; si $N(x) = 0$, chaque terme $a_i|x_i|\geqslant0$ est nul, donc $x_i = 0$. $N(\lambda x) = \sum a_i|\lambda||x_i| = |\lambda|N(x)$. Et $N(x+y) = \sum a_i|x_i+y_i|\leqslant\sum a_i(|x_i|+|y_i|) = N(x)+N(y)$ car $a_i>0$.</p><div class="sbox"><p>$N$ est une norme si et seulement si $a_i>0$ pour tout $i$.</p></div>`, rappels: ["nrm-def"] }
  ],
  piege: R`Avec un $a_i = 0$, $N$ est une semi-norme (tout sauf la séparation) ; avec un $a_i\lt0$, ce n'est même plus positif.`,
  methode: R`Pour trouver une condition nécessaire : tester sur une base.`
},
{ id: "topo-75", ...P, level: 2, time: "15 min",
  title: "Une norme définie par des fonctions continues",
  enonce: R`<p>Soient $f_1,\dots,f_n$ des fonctions continues de $[0,1]$ dans $\mathbb R$. À quelle condition l'application</p>$$N : (x_1,\dots,x_n)\mapsto\sup_{t\in[0,1]}|x_1f_1(t)+\dots+x_nf_n(t)|$$<p>définit-elle une norme sur $\mathbb R^n$ ?</p>`,
  decode: { donnees: [R`$N(x) = \|x_1f_1+\dots+x_nf_n\|_\infty$.`], but: R`Homogénéité et triangulaire sont automatiques ; la séparation équivaut à la liberté de $(f_1,\dots,f_n)$.`, cles: {} },
  steps: [
    { t: "Bonne définition et deux axiomes", h: R`<p>$N(x) = \|\varphi_x\|_\infty$ avec $\varphi_x = \sum x_if_i$.</p>`, b: R`<p>Notons $\varphi_x = \sum_ix_if_i$, continue sur le segment $[0,1]$ : $N(x) = \|\varphi_x\|_\infty$ existe. Comme $x\mapsto\varphi_x$ est linéaire et $\|\cdot\|_\infty$ est une norme : $N(\lambda x) = \|\lambda\varphi_x\|_\infty = |\lambda|N(x)$ et $N(x+y) = \|\varphi_x+\varphi_y\|_\infty\leqslant N(x)+N(y)$.</p>`, rappels: ["nrm-compact"] },
    { t: "La séparation", h: R`<p>$N(x) = 0\iff\sum x_if_i = 0$.</p>`, b: R`<p>$N(x) = 0\iff\varphi_x = 0\iff\sum_ix_if_i = 0$. La séparation « $N(x) = 0\Rightarrow x = 0$ » dit exactement que la seule combinaison linéaire nulle des $f_i$ est la triviale.</p><div class="sbox"><p>$N$ est une norme si et seulement si la famille $(f_1,\dots,f_n)$ est libre.</p></div><p>Exemple : $f_i(t) = t^{i-1}$ donne une norme ; $f_1 = \cos^2$, $f_2 = \sin^2$, $f_3 = 1$ n'en donne pas ($N(1,1,-1) = 0$).</p>` }
  ],
  piege: R`L'ensemble de définition $[0,1]$ compte : des fonctions libres sur $\mathbb R$ peuvent être liées sur $[0,1]$ (fonctions définies par morceaux).`,
  methode: R`$N = \|\cdot\|\circ L$ avec $L$ linéaire : c'est une norme ssi $L$ est injective.`
},
{ id: "topo-76", ...P, level: 2, time: "15 min",
  title: "Rendre une norme invariante par un groupe fini",
  enonce: R`<p>Soit $E$ un $\mathbb R$-espace vectoriel normé par $\|\cdot\|$ et $G$ un sous-groupe fini de $GL(E)$. Pour $x\in E$, on pose $N(x) = \max_{u\in G}\|u(x)\|$.</p><ol><li>Montrer que $N$ est une norme sur $E$.</li><li>Montrer que $N(u(x)) = N(x)$ pour tous $u\in G$, $x\in E$.</li></ol>`,
  decode: { donnees: [R`$\mathrm{Id}_E\in G$ ; pour $v\in G$, $u\mapsto u\circ v$ est une bijection de $G$.`], but: R`Axiomes ; invariance par réindexation du max.`, cles: {} },
  steps: [
    { t: "1) Norme", h: R`<p>Séparation avec $u = \mathrm{Id}_E$.</p>`, b: R`<p>$G$ est fini et non vide : le max existe et est positif. Si $N(x) = 0$, $\|u(x)\| = 0$ pour tout $u\in G$, en particulier pour $u = \mathrm{Id}_E$ : $x = 0$. Homogénéité : $\|u(\lambda x)\| = |\lambda|\|u(x)\|$, donc $N(\lambda x) = |\lambda|N(x)$. Triangulaire : pour tout $u\in G$,</p>$$\|u(x+y)\| = \|u(x)+u(y)\|\leqslant\|u(x)\|+\|u(y)\|\leqslant N(x)+N(y),$$<p>et en passant au max, $N(x+y)\leqslant N(x)+N(y)$.</p>`, rappels: ["nrm-def"] },
    { t: "2) Invariance", h: R`<p>Quand $u$ décrit $G$, $u\circ v$ décrit $G$.</p>`, b: R`<p>Soit $v\in G$. L'application $u\mapsto u\circ v$ est une bijection de $G$ sur $G$ (de réciproque $w\mapsto w\circ v^{-1}$). Donc</p>$$N(v(x)) = \max_{u\in G}\|(u\circ v)(x)\| = \max_{w\in G}\|w(x)\| = N(x).$$<p>Application classique : tout sous-groupe fini de $GL(E)$ est formé d'isométries pour une norme bien choisie (et même, en moyennant un produit scalaire, d'isométries euclidiennes).</p>` }
  ],
  piege: R`Il faut que $G$ soit un <b>groupe</b> (stable par composition et inverse) pour la réindexation ; un simple ensemble fini d'automorphismes ne suffit pas.`,
  methode: R`Rendre un objet invariant par un groupe fini : moyenner ou prendre le max sur le groupe.`
},
{ id: "topo-77", ...P, level: 2, time: "25 min",
  title: "max sur O(n) de ‖AX‖∞ : on retrouve la norme euclidienne",
  enonce: R`<p>Pour $X\in\mathcal M_{n,1}(\mathbb R)$, on pose $N(X) = \max_{A\in O_n(\mathbb R)}\|AX\|_\infty$.</p><ol><li>Montrer que $N$ est une norme sur $\mathcal M_{n,1}(\mathbb R)$.</li><li>Vérifier que $N(AX) = N(X)$ pour toute $A\in O_n(\mathbb R)$.</li><li>Montrer que $N = \|\cdot\|_2$.</li></ol>`,
  decode: { donnees: [R`$O_n(\mathbb R)$ est compact ; les lignes d'une matrice orthogonale sont unitaires.`], but: R`Existence du max par compacité ; invariance ; puis Cauchy-Schwarz et une matrice orthogonale bien choisie.`, cles: {} },
  steps: [
    { t: "1) Bonne définition", h: R`<p>$A\mapsto\|AX\|_\infty$ continue sur le compact $O_n(\mathbb R)$.</p>`, b: R`<p>$A\mapsto AX$ est linéaire en dimension finie, donc continue ; $A\mapsto\|AX\|_\infty$ aussi. $O_n(\mathbb R)$ est compact non vide (fermé, borné) : le max est atteint et $N(X)\in\mathbb R_+$.</p>`, rappels: ["nrm-compact"] },
    { t: "1) Axiomes", h: R`<p>Séparation avec $A = I_n$.</p>`, b: R`<p>Si $N(X) = 0$, $\|AX\|_\infty = 0$ pour toute $A$, en particulier $\|X\|_\infty = 0$ : $X = 0$. $N(\lambda X) = \max|\lambda|\|AX\|_\infty = |\lambda|N(X)$. Pour toute $A$ : $\|A(X+Y)\|_\infty\leqslant\|AX\|_\infty+\|AY\|_\infty\leqslant N(X)+N(Y)$, donc $N(X+Y)\leqslant N(X)+N(Y)$.</p>` },
    { t: "2) Invariance", h: R`<p>$B\mapsto BA$ est une bijection de $O_n(\mathbb R)$.</p>`, b: R`<p>Pour $A\in O_n(\mathbb R)$, $B\mapsto BA$ est une bijection de $O_n(\mathbb R)$ (réciproque $C\mapsto CA^{-1}$). Donc $N(AX) = \max_B\|BAX\|_\infty = \max_C\|CX\|_\infty = N(X)$.</p>` },
    { t: "3) N ≤ ‖·‖₂", h: R`<p>$(AX)_i = \sum_ja_{ij}x_j$, Cauchy-Schwarz et $\sum_ja_{ij}^2 = 1$.</p>`, b: R`<p>Soit $A\in O_n(\mathbb R)$ et $i$. Les lignes de $A$ sont unitaires ($A{}^tA = I_n$), donc par Cauchy-Schwarz :</p>$$|(AX)_i| = \Big|\sum_ja_{ij}x_j\Big|\leqslant\Big(\sum_ja_{ij}^2\Big)^{1/2}\Big(\sum_jx_j^2\Big)^{1/2} = \|X\|_2.$$<p>Donc $\|AX\|_\infty\leqslant\|X\|_2$ pour toute $A$, et $N(X)\leqslant\|X\|_2$.</p>`, rappels: ["nrm-cs"] },
    { t: "3) N ≥ ‖·‖₂", h: R`<p>Matrice orthogonale de première ligne $\frac{{}^tX}{\|X\|_2}$.</p>`, b: R`<p>Si $X = 0$, c'est clair. Sinon, la ligne $L = \frac1{\|X\|_2}{}^tX$ est unitaire ; complétons-la en une base orthonormée de $\mathcal M_{1,n}(\mathbb R)$ et formons la matrice $A$ dont ces vecteurs sont les lignes : $A\in O_n(\mathbb R)$. Sa première coordonnée vaut $(AX)_1 = LX = \frac{{}^tXX}{\|X\|_2} = \|X\|_2$. Donc $N(X)\geqslant\|AX\|_\infty\geqslant\|X\|_2$.</p><div class="sbox">$$N(X) = \|X\|_2.$$</div><p>Interprétation : on fait tourner $X$ pour l'aligner sur un axe ; c'est alors que sa plus grande coordonnée est maximale, égale à sa longueur.</p>` }
  ],
  piege: R`On a seulement $\|A(X+Y)\|_\infty\leqslant\|AX\|_\infty+\|AY\|_\infty$ (et non une égalité).`,
  methode: R`Norme invariante par $O_n$ : c'est un multiple de la norme euclidienne ; on le montre par Cauchy-Schwarz et une rotation qui aligne $X$ sur un axe.`
},
{ id: "topo-78", ...P, level: 2, time: "20 min",
  title: "La norme P ↦ Σ|P(ωᵏ)| aux racines de l'unité",
  enonce: R`<p>Soit $n\geqslant2$, $E_n$ l'espace des polynômes complexes de degré $\lt n$, et $\omega = e^{2i\pi/n}$. Pour $P\in E_n$, on pose $N(P) = \sum_{k = 0}^{n-1}|P(\omega^k)|$.</p><ol><li>Montrer que $N$ est une norme sur $E_n$.</li><li>Établir que $|P(0)|\leqslant\frac1nN(P)$ pour tout $P\in E_n$.</li></ol>`,
  decode: { donnees: [R`$\sum_{k = 0}^{n-1}\omega^{ik} = n$ si $i = 0$, $0$ si $1\leqslant i\leqslant n-1$.`], but: R`Séparation par les racines ; puis $\sum_kP(\omega^k) = na_0$.`, cles: {} },
  steps: [
    { t: "1) Norme", h: R`<p>Les $\omega^k$ sont $n$ points distincts, $\deg P\lt n$.</p>`, b: R`<p>$N(P)\geqslant0$ (somme finie). $N(\lambda P) = |\lambda|N(P)$ et $N(P+Q)\leqslant N(P)+N(Q)$ terme à terme. Si $N(P) = 0$, alors $P(\omega^k) = 0$ pour $k = 0,\dots,n-1$ : $P$ a $n$ racines distinctes (les racines $n$-ièmes de l'unité) et $\deg P\lt n$, donc $P = 0$.</p>`, rappels: ["nrm-sep"] },
    { t: "2) Somme des valeurs", h: R`<p>$P = \sum_{i = 0}^{n-1}a_iX^i$ ; échanger les sommes ; somme géométrique de raison $\omega^i$.</p>`, b: R`<p>Écrivons $P = \sum_{i = 0}^{n-1}a_iX^i$. Alors</p>$$\sum_{k = 0}^{n-1}P(\omega^k) = \sum_{k = 0}^{n-1}\sum_{i = 0}^{n-1}a_i\omega^{ik} = \sum_{i = 0}^{n-1}a_i\sum_{k = 0}^{n-1}(\omega^i)^k.$$<p>Pour $i = 0$, la somme intérieure vaut $n$ ; pour $1\leqslant i\leqslant n-1$, $\omega^i\neq1$ et $(\omega^i)^n = 1$, donc $\sum_k(\omega^i)^k = \frac{1-(\omega^i)^n}{1-\omega^i} = 0$. Ainsi $\sum_{k = 0}^{n-1}P(\omega^k) = na_0 = nP(0)$.</p>` },
    { t: "2) Conclusion", h: R`<p>Inégalité triangulaire.</p>`, b: R`<p>$$|P(0)| = \frac1n\Big|\sum_{k = 0}^{n-1}P(\omega^k)\Big|\leqslant\frac1n\sum_{k = 0}^{n-1}|P(\omega^k)| = \frac1nN(P).$$<p>C'est une version discrète de la formule de la moyenne $P(0) = \frac1{2\pi}\int_0^{2\pi}P(e^{i\theta})d\theta$.</p>` }
  ],
  piege: R`La séparation exige $\deg P\lt n$ : sur $\mathbb C_n[X]$, $X^n-1$ annulerait $N$.`,
  methode: R`Sommes sur les racines de l'unité : échanger les sommes et utiliser $\sum_k\omega^{ik} = n\,[n\mid i]$.`
},
{ id: "topo-79", ...P, level: 3, time: "35 min",
  title: "Norme sur ℂ[X] et principe du maximum (Centrale)",
  enonce: R`<p>Soient $\mathbb U = \{z\in\mathbb C : |z| = 1\}$ et $B = \{z\in\mathbb C : |z|\leqslant1\}$. Pour $P\in\mathbb C[X]$, on pose $\|P\| = \max\{|P(z)| : z\in\mathbb U\}$.</p><ol><li>Montrer que $\|\cdot\|$ définit une norme sur $\mathbb C[X]$.</li><li>Soit $P\in\mathbb C[X]$. Établir $|P(0)|\leqslant\|P\|$.</li><li>Soient $P\in\mathbb C[X]$ de degré $n\geqslant1$, $z_0\in\mathbb C$ et $\theta\in\mathbb R$. Établir l'existence de $c\in\mathbb C^*$ et $q\in\mathbb N^*$ tels que $P(z_0+re^{i\theta})-P(z_0)\underset{r\to0^+}{\sim}cr^qe^{iq\theta}$.</li><li>Montrer que pour tout $P\in\mathbb C[X]$ : $\|P\| = \sup\{|P(z)| : z\in B\}$.</li></ol>`,
  decode: { donnees: [R`$\frac1{2\pi}\int_0^{2\pi}e^{ik\theta}d\theta = 0$ pour $k\geqslant1$.`], but: R`Compacité ; formule de la moyenne ; premier terme non nul de $P(z_0+X)-P(z_0)$ ; raisonnement par l'absurde sur un maximum intérieur.`, cles: {} },
  steps: [
    { t: "1) Norme", h: R`<p>$\mathbb U$ compact ; séparation : une infinité de racines.</p>`, b: R`<p>$z\mapsto|P(z)|$ est continue sur le compact $\mathbb U$ : le max existe. Homogénéité et triangulaire se vérifient point par point puis par passage au max. Si $\|P\| = 0$, $P$ s'annule sur $\mathbb U$, ensemble infini : $P = 0$.</p>`, rappels: ["nrm-compact", "nrm-sep"] },
    { t: "2) Formule de la moyenne", h: R`<p>$P = \sum a_kX^k$ ; intégrer $P(e^{i\theta})$ sur $[0,2\pi]$.</p>`, b: R`<p>Avec $P = \sum_ka_kX^k$ : $\frac1{2\pi}\int_0^{2\pi}P(e^{i\theta})d\theta = \sum_ka_k\frac1{2\pi}\int_0^{2\pi}e^{ik\theta}d\theta = a_0 = P(0)$, car pour $k\geqslant1$, $\int_0^{2\pi}e^{ik\theta}d\theta = \big[\frac{e^{ik\theta}}{ik}\big]_0^{2\pi} = 0$. Donc</p>$$|P(0)|\leqslant\frac1{2\pi}\int_0^{2\pi}|P(e^{i\theta})|\,d\theta\leqslant\frac1{2\pi}\int_0^{2\pi}\|P\|\,d\theta = \|P\|.$$` },
    { t: "3) Développement local", h: R`<p>$Q(X) = P(z_0+X)-P(z_0)$ est non nul et s'annule en $0$ : $Q = cX^q+\dots$</p>`, b: R`<p>$Q(X) = P(z_0+X)-P(z_0)$ est de degré $n\geqslant1$ (même coefficient dominant que $P$), donc non nul, et $Q(0) = 0$. Soit $q\geqslant1$ la valuation de $Q$ et $c\neq0$ son coefficient : $Q = cX^q+\sum_{k>q}c_kX^k$. Pour $h = re^{i\theta}$ :</p>$$P(z_0+re^{i\theta})-P(z_0) = Q(re^{i\theta}) = cr^qe^{iq\theta}+O(r^{q+1})\underset{r\to0^+}{\sim}cr^qe^{iq\theta}.$$` },
    { t: "4) Un maximum sur B", h: R`<p>$|P|$ atteint son max sur le compact $B$ en $z_0$ ; supposer $|z_0|\lt1$ et $P$ non constant.</p>`, b: R`<p>$B$ est compact, $|P|$ y atteint son maximum en un point $z_0$. Si $P$ est constant, l'égalité est claire. Supposons $P$ non constant et, par l'absurde, que $|P(z)|\lt|P(z_0)|$ pour tout $z\in\mathbb U$ ; alors $z_0\notin\mathbb U$, donc $|z_0|\lt1$, et $z_0+re^{i\theta}\in B$ pour $r$ petit.</p>` },
    { t: "4) Choix de la direction", h: R`<p>Choisir $\theta$ pour que $ce^{iq\theta}$ ait le même argument que $P(z_0)$.</p>`, b: R`<p>Écrivons $P(z_0) = |P(z_0)|e^{i\alpha}$ et choisissons $\theta$ tel que $ce^{iq\theta} = |c|e^{i\alpha}$ (possible : $q\theta\equiv\alpha-\arg c$). Par 3) :</p>$$P(z_0+re^{i\theta}) = e^{i\alpha}\big(|P(z_0)|+|c|r^q\big)+o(r^q),$$<p>donc $|P(z_0+re^{i\theta})| = |P(z_0)|+|c|r^q+o(r^q)>|P(z_0)|$ pour $r>0$ assez petit. Ceci contredit la maximalité de $|P(z_0)|$ sur $B$. Donc le max sur $B$ est atteint sur $\mathbb U$ ; comme $\mathbb U\subset B$ :</p><div class="sbox">$$\|P\| = \max_{\mathbb U}|P| = \sup_{z\in B}|P(z)|.$$</div><p>C'est le <b>principe du maximum</b> pour les polynômes ; il redonne 2) avec $z = 0$.</p>` }
  ],
  piege: R`L'argument de direction demande $q\geqslant1$ et $c\neq0$, d'où l'hypothèse $\deg P\geqslant1$ (et le cas constant à part).`,
  methode: R`Principe du maximum : en un point intérieur, on trouve toujours une direction où le module augmente (premier terme non nul du développement local).`
},
{ id: "topo-80", ...P, level: 3, time: "30 min",
  title: "La norme duale N* et ses calculs classiques",
  enonce: R`<p>Soient $\langle\cdot,\cdot\rangle$ le produit scalaire canonique de $\mathbb R^n$ et $N$ une norme quelconque sur $\mathbb R^n$. Pour $x\in\mathbb R^n$, on pose</p>$$N^*(x) = \sup_{y\in S}|\langle x,y\rangle|,\qquad S = \{y\in\mathbb R^n : N(y) = 1\}.$$<ol><li>Vérifier que la borne supérieure définissant $N^*(x)$ existe et est un réel positif.</li><li>Montrer que $N^*$ est une norme sur $\mathbb R^n$.</li><li>Déterminer $N^*$ lorsque $N = \|\cdot\|_2$, $\|\cdot\|_\infty$, puis $\|\cdot\|_1$.</li></ol>`,
  decode: { donnees: [R`En dimension finie, les normes sont équivalentes : $\|y\|_2\leqslant\beta N(y)$.`], but: R`Majoration par Cauchy-Schwarz ; axiomes ; pour les calculs, majorer puis exhiber un $y$ extrémal.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>$|\langle x,y\rangle|\leqslant\|x\|_2\|y\|_2\leqslant\beta\|x\|_2$ pour $y\in S$.</p>`, b: R`<p>Les normes de $\mathbb R^n$ sont équivalentes : il existe $\beta>0$ avec $\|y\|_2\leqslant\beta N(y)$. Pour $y\in S$, par Cauchy-Schwarz, $|\langle x,y\rangle|\leqslant\|x\|_2\|y\|_2\leqslant\beta\|x\|_2$. L'ensemble $\{|\langle x,y\rangle| : y\in S\}$ est non vide ($\frac{e_1}{N(e_1)}\in S$), formé de réels positifs, majoré : sa borne supérieure $N^*(x)$ existe et $0\leqslant N^*(x)\leqslant\beta\|x\|_2$. (Elle est même atteinte, $S$ étant compact.)</p>`, rappels: ["nrm-cs", "nrm-compact"] },
    { t: "2) Inégalité utile", h: R`<p>$|\langle x,y\rangle|\leqslant N^*(x)N(y)$ pour tout $y$.</p>`, b: R`<p>Pour $y\neq0$, $\frac y{N(y)}\in S$, donc $\big|\langle x,\frac y{N(y)}\rangle\big|\leqslant N^*(x)$, soit $|\langle x,y\rangle|\leqslant N^*(x)N(y)$ ; c'est aussi vrai pour $y = 0$.</p>` },
    { t: "2) Axiomes", h: R`<p>Séparation : prendre $y = x$.</p>`, b: R`<p>Si $N^*(x) = 0$, alors $\langle x,y\rangle = 0$ pour tout $y$ (inégalité utile), en particulier $\|x\|_2^2 = \langle x,x\rangle = 0$ : $x = 0$. Homogénéité : $|\langle\lambda x,y\rangle| = |\lambda||\langle x,y\rangle|$, d'où $N^*(\lambda x) = |\lambda|N^*(x)$. Triangulaire : pour $y\in S$, $|\langle x+x',y\rangle|\leqslant|\langle x,y\rangle|+|\langle x',y\rangle|\leqslant N^*(x)+N^*(x')$, puis passage au sup.</p>`, rappels: ["nrm-def"] },
    { t: "3) N = ‖·‖₂", h: R`<p>Cauchy-Schwarz, égalité en $y = \frac x{\|x\|_2}$.</p>`, b: R`<p>Pour $\|y\|_2 = 1$ : $|\langle x,y\rangle|\leqslant\|x\|_2$, avec égalité pour $y = \frac x{\|x\|_2}$ ($x\neq0$). Donc $N^* = \|\cdot\|_2$ : la norme euclidienne est sa propre duale.</p>` },
    { t: "3) N = ‖·‖∞", h: R`<p>$|\sum x_iy_i|\leqslant\sum|x_i|$ si $|y_i|\leqslant1$ ; égalité avec $y_i = \pm1$ du signe de $x_i$.</p>`, b: R`<p>Pour $\|y\|_\infty = 1$ : $|\langle x,y\rangle|\leqslant\sum_i|x_i||y_i|\leqslant\sum_i|x_i| = \|x\|_1$. Avec $y_i = 1$ si $x_i\geqslant0$ et $y_i = -1$ sinon : $\|y\|_\infty = 1$ et $\langle x,y\rangle = \sum|x_i|$. Donc $N^* = \|\cdot\|_1$.</p>` },
    { t: "3) N = ‖·‖₁", h: R`<p>$|\sum x_iy_i|\leqslant\|x\|_\infty\sum|y_i|$ ; égalité avec $y = e_{i_0}$.</p>`, b: R`<p>Pour $\|y\|_1 = 1$ : $|\langle x,y\rangle|\leqslant\sum_i|x_i||y_i|\leqslant\|x\|_\infty\sum_i|y_i| = \|x\|_\infty$. Avec $i_0$ tel que $|x_{i_0}| = \|x\|_\infty$ et $y = e_{i_0}$ : $\|y\|_1 = 1$ et $|\langle x,y\rangle| = |x_{i_0}| = \|x\|_\infty$. Donc $N^* = \|\cdot\|_\infty$.</p><div class="sbox">$$\|\cdot\|_2^* = \|\cdot\|_2,\qquad\|\cdot\|_\infty^* = \|\cdot\|_1,\qquad\|\cdot\|_1^* = \|\cdot\|_\infty.$$</div><p>Plus généralement, Hölder montre que $\|\cdot\|_p^* = \|\cdot\|_q$ avec $\frac1p+\frac1q = 1$, et on a toujours $N^{**} = N$.</p>` }
  ],
  piege: R`L'existence de $N^*(x)$ repose sur l'équivalence des normes en dimension finie (pour majorer $\|y\|_2$ sur $S$).`,
  methode: R`Calcul d'une norme duale : inégalité de type Hölder, puis un $y$ extrémal (signes, ou vecteur de base).`
}
]);
})();

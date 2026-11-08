/* Espaces préhilbertiens et euclidiens (Spé) : blocs « Représentation d'une forme linéaire », « Éléments propres dans un espace euclidien », « Produit scalaire et transposition matricielle », « Polynômes orthogonaux ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 7 };
const { GRAPH } = window.__LA;
LEMME.rappels({
  "eu-riesz": { t: "Représentation des formes linéaires", b: R`$$E\text{ euclidien},\ \varphi\in E^*\ \Longrightarrow\ \exists!\,a\in E,\ \forall x,\ \varphi(x) = (a|x);\qquad\varphi\neq0\Rightarrow a\perp\ker\varphi.$$` },
  "eu-colonnes": { t: "Produit scalaire sur les colonnes", b: R`$$\langle X,Y\rangle = {}^tXY,\qquad\langle AX,Y\rangle = \langle X,{}^tAY\rangle,\qquad\ker{}^tA = (\operatorname{Im}A)^\perp,\quad\operatorname{Im}{}^tA = (\ker A)^\perp.$$` },
  "eu-lagrange": { t: "Interpolation de Lagrange", b: R`<p>$x_0,\dots,x_n$ distincts :</p><div class="sbox">$$L_k = \prod_{j\neq k}\frac{X-x_j}{x_k-x_j},\qquad L_k(x_j) = \delta_{jk},\qquad\forall P\in\mathbb R_n[X],\ P = \sum_{k=0}^nP(x_k)L_k.$$</div>` },
  "eu-leibniz": { t: "Formule de Leibniz", b: R`<p>$(fg)^{(n)} = \sum_{k=0}^n\binom nkf^{(k)}g^{(n-k)}$. Cas utile : $(xg)^{(n)} = xg^{(n)}+ng^{(n-1)}$.</p>` }
});
const figLeg = GRAPH({ w: 460, h: 250, x: [-1, 1], y: [-1.1, 1.1], xt: [-1, -0.5, 0.5, 1], xtl: ["−1", "−0,5", "0,5", "1"], yt: [-1, -0.5, 0.5, 1], ytl: ["−1", "−0,5", "0,5", "1"], xl: "x",
  curves: [
    { f: x => x, c: "b", lab: [0.42, 0.62, "P₁"] },
    { f: x => (3 * x * x - 1) / 2, c: "g", lab: [-0.78, 0.62, "P₂", "start"] },
    { f: x => (5 * x ** 3 - 3 * x) / 2, c: "r", lab: [0.5, -0.62, "P₃"] },
    { f: x => (35 * x ** 4 - 30 * x * x + 3) / 8, c: "k", lab: [0.08, 0.5, "P₄", "start"] }
  ] },
  R`Les polynômes de Legendre $P_1$ (bleu), $P_2$ (orange), $P_3$ (rouge), $P_4$ (noir) sur $[-1,1]$. On lit les propriétés de l'exercice : $P_n(1) = 1$, $P_n(-1) = (-1)^n$, parité de $P_n$, et $n$ racines simples dans $]-1,1[$.`, "Polynômes de Legendre");
LEMME.exercises([
{ id: "pre-47", ...P, level: 1, time: "10 min",
  title: "Toute forme linéaire sur Mₙ(ℝ) s'écrit M ↦ tr(AM)",
  enonce: R`<p>Soit $\varphi$ une forme linéaire sur $E = \mathcal M_n(\mathbb R)$. Montrer qu'il existe une unique matrice $A\in\mathcal M_n(\mathbb R)$ telle que $\varphi(M) = \mathrm{tr}(AM)$ pour toute $M\in E$.</p>`,
  decode: { donnees: [R`$(B|M) = \mathrm{tr}({}^tBM)$ est un produit scalaire sur $E$.`], but: R`Théorème de représentation, puis $A = {}^tB$.`, cles: {} },
  steps: [
    { t: "Représentation", h: R`<p>$E$ est euclidien pour $(B|M) = \mathrm{tr}({}^tBM)$.</p>`, b: R`<p>$E$ muni de $(B|M) = \mathrm{tr}({}^tBM)$ est un espace euclidien (dimension $n^2$). Par le théorème de représentation, il existe une unique $B\in E$ telle que $\varphi(M) = (B|M) = \mathrm{tr}({}^tBM)$ pour toute $M$. Posons $A = {}^tB$ : $\varphi(M) = \mathrm{tr}(AM)$.</p>`, rappels: ["eu-riesz", "eu-tr"] },
    { t: "Unicité", h: R`<p>Si $\mathrm{tr}(AM) = \mathrm{tr}(A'M)$ pour toute $M$, prendre $M = {}^t(A-A')$.</p>`, b: R`<p>Si $A$ et $A'$ conviennent, $\mathrm{tr}\big((A-A')M\big) = 0$ pour toute $M$. Avec $M = {}^t(A-A')$ : $\mathrm{tr}\big((A-A'){}^t(A-A')\big) = \sum_{i,j}(a_{ij}-a'_{ij})^2 = 0$, donc $A = A'$.</p><p>Version élémentaire de l'existence : $A = \big(\varphi(E_{ji})\big)_{i,j}$ convient, car $\mathrm{tr}(AE_{kl}) = a_{lk}$ et il suffit de vérifier sur la base canonique.</p>` }
  ],
  piege: R`Le produit scalaire est $\mathrm{tr}({}^tBM)$, pas $\mathrm{tr}(BM)$ : d'où la transposée finale.`,
  methode: R`Forme linéaire sur un espace euclidien : la représenter par un vecteur via le produit scalaire.`
},
{ id: "pre-48", ...P, level: 1, time: "15 min",
  title: "Vecteur normal d'un hyperplan de Mₙ(ℝ)",
  enonce: R`<p>On munit $E = \mathcal M_n(\mathbb R)$ du produit scalaire canonique $(A|B) = \mathrm{tr}({}^tAB)$, et on considère $H = \{M\in E : \mathrm{tr}(M) = 0\}$.</p><ol><li>Justifier que $H$ est un hyperplan de $E$.</li><li>Déterminer un vecteur normal à $H$.</li><li>Soit $H'$ un hyperplan quelconque de $E$. Montrer qu'il existe $A\in E$, $A\neq0$, telle que $M\in H'\iff\mathrm{tr}(AM) = 0$.</li></ol>`,
  decode: { donnees: [R`Un hyperplan d'un espace euclidien est $n^\perp$ pour un vecteur $n\neq0$.`], but: R`Trace = produit scalaire avec $I_n$ ; vecteur normal transposé.`, cles: {} },
  steps: [
    { t: "1) Hyperplan", h: R`<p>Noyau d'une forme linéaire non nulle.</p>`, b: R`<p>$H = \ker(\mathrm{tr})$, et la trace est une forme linéaire non nulle ($\mathrm{tr}(I_n) = n$). Donc $H$ est un hyperplan.</p>` },
    { t: "2) Vecteur normal", h: R`<p>$\mathrm{tr}(M) = (I_n|M)$.</p>`, b: R`<p>$(I_n|M) = \mathrm{tr}(M)$, donc $M\in H\iff(I_n|M) = 0$ : $H = I_n^{\ \perp}$ et $I_n$ est un vecteur normal à $H$.</p>` },
    { t: "3) Hyperplan quelconque", h: R`<p>$H' = N^\perp$ avec $N\neq0$ ; $(N|M) = \mathrm{tr}({}^tNM)$.</p>`, b: R`<p>$H'^{\perp}$ est une droite ; soit $N$ un vecteur directeur : $H' = (H'^\perp)^\perp = N^\perp$. Posons $A = {}^tN\neq0$. Alors</p>$$M\in H'\iff(N|M) = 0\iff\mathrm{tr}({}^tNM) = 0\iff\mathrm{tr}(AM) = 0.$$`, rappels: ["eu-orth"] }
  ],
  piege: R`En dimension finie seulement, $(H^\perp)^\perp = H$ et $H^\perp$ est une droite.`,
  methode: R`Équation d'un hyperplan d'un espace euclidien : produit scalaire avec un vecteur normal.`
},
{ id: "pre-49", ...P, level: 2, time: "10 min",
  title: "Pas de représentation de P ↦ P(0) dans ℝ[X] (X)",
  enonce: R`<p>On munit $\mathbb R[X]$ du produit scalaire $\langle P,Q\rangle = \int_0^1P(t)Q(t)\,dt$. Existe-t-il $A\in\mathbb R[X]$ tel que $P(0) = \langle A,P\rangle$ pour tout $P\in\mathbb R[X]$ ?</p>`,
  decode: { donnees: [R`$P = XA$ s'annule en $0$.`], but: R`Raisonner par l'absurde avec $P = XA$.`, cles: {} },
  steps: [
    { t: "Tester avec P = XA", h: R`<p>$0 = (XA)(0) = \int_0^1tA(t)^2dt$.</p>`, b: R`<p>Supposons qu'un tel $A$ existe, et prenons $P = XA$. Alors $P(0) = 0$, donc</p>$$0 = \langle A,XA\rangle = \int_0^1tA(t)^2\,dt.$$<p>La fonction $t\mapsto tA(t)^2$ est continue, positive sur $[0,1]$, d'intégrale nulle : elle est nulle. Donc $A(t) = 0$ pour tout $t\in]0,1]$ : $A$ a une infinité de racines, $A = 0$. Mais alors $P(0) = \langle0,P\rangle = 0$ pour tout $P$, ce qui est faux pour $P = 1$.</p><div class="sbox"><p>Il n'existe pas de tel $A$.</p></div><p>Le théorème de représentation ne s'applique pas : $\mathbb R[X]$ est de dimension infinie.</p>`, rappels: ["eu-intnulle", "eu-riesz"] }
  ],
  piege: R`Le résultat de représentation est un théorème de dimension finie (ou d'espace complet).`,
  methode: R`Pour réfuter $\varphi = \langle A,\cdot\rangle$ : choisir un $P$ construit à partir de $A$ qui annule $\varphi$ et rend $\langle A,P\rangle$ positif.`
},
{ id: "pre-50", ...P, level: 2, time: "15 min",
  title: "Représenter P ↦ P(0) dans ℝₙ[X] : degré du représentant (ENTPE)",
  enonce: R`<p>Soit $n\in\mathbb N$ et $E = \mathbb R_n[X]$ muni de $\langle P,Q\rangle = \int_0^1PQ$.</p><ol><li>Montrer qu'il existe un unique $A\in E$ tel que $P(0) = \int_0^1A(t)P(t)\,dt$ pour tout $P\in E$.</li><li>Montrer que $A$ est de degré $n$ exactement.</li></ol>`,
  decode: { donnees: [R`$E$ est euclidien, de dimension $n+1$.`], but: R`Représentation ; puis si $\deg A\lt n$, $XA\in E$ conduit à $A = 0$.`, cles: {} },
  steps: [
    { t: "1) Existence et unicité", h: R`<p>$\varphi : P\mapsto P(0)$ est une forme linéaire sur un espace euclidien.</p>`, b: R`<p>$\langle\cdot,\cdot\rangle$ est un produit scalaire sur $E$ (un polynôme nul sur $[0,1]$ est nul), et $E$ est de dimension finie $n+1$. $\varphi : P\mapsto P(0)$ est linéaire. Par le théorème de représentation, il existe un unique $A\in E$ avec $\varphi(P) = \langle A,P\rangle$ pour tout $P\in E$.</p>`, rappels: ["eu-riesz"] },
    { t: "2) deg A = n", h: R`<p>Si $\deg A\leqslant n-1$, alors $XA\in E$.</p>`, b: R`<p>$A\neq0$ car $\varphi(1) = 1\neq0$. Supposons $\deg A\leqslant n-1$ (pour $n = 0$, il n'y a rien à montrer : $A$ est une constante non nulle, de degré $0$). Alors $P = XA\in E$ et $P(0) = 0$, donc $0 = \int_0^1tA(t)^2dt$, ce qui force $A = 0$ (fonction continue positive d'intégrale nulle) : contradiction. Donc $\deg A = n$.</p><p>Exemple : $n = 1$. On cherche $A = \alpha+\beta X$ avec $\int_0^1A = 1$ et $\int_0^1tA = 0$ : $\alpha+\frac\beta2 = 1$, $\frac\alpha2+\frac\beta3 = 0$, d'où $A = 4-6X$, bien de degré $1$.</p>`, rappels: ["eu-intnulle"] }
  ],
  piege: R`Le représentant dépend de $n$ : quand $n\to\infty$, $\|A_n\|\to+\infty$, ce qui est cohérent avec l'exercice précédent (pas de représentant dans $\mathbb R[X]$).`,
  methode: R`Information sur le représentant : tester la relation de représentation sur des polynômes construits à partir de lui.`
},
{ id: "pre-51", ...P, level: 3, time: "25 min",
  title: "Le représentant de P ↦ P(0) a n racines simples dans ]0, 1[ (Mines)",
  enonce: R`<p>On munit $\mathcal C([0,1],\mathbb R)$ de $\langle f,g\rangle = \int_0^1f(x)g(x)\,dx$.</p><ol><li>Montrer qu'il existe un unique $A_n\in\mathbb R_n[X]$ tel que $P(0) = \langle P,A_n\rangle$ pour tout $P\in\mathbb R_n[X]$.</li><li>Montrer que $A_n$ possède $n$ racines simples, toutes dans $]0,1[$.</li></ol>`,
  decode: { donnees: [R`Racines d'ordre impair = changements de signe.`], but: R`Compter les racines de multiplicité impaire de $A_n$ dans $]0,1[$ et tester avec $P = X\prod(X-x_i)$.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>Représentation dans l'espace euclidien $\mathbb R_n[X]$.</p>`, b: R`<p>$\mathbb R_n[X]$ muni de la restriction de $\langle\cdot,\cdot\rangle$ est euclidien, et $P\mapsto P(0)$ est une forme linéaire : le théorème de représentation donne $A_n$, unique. $A_n\neq0$ car $1 = \langle1,A_n\rangle$.</p>`, rappels: ["eu-riesz"] },
    { t: "2) Les changements de signe", h: R`<p>Soient $x_1\lt\dots\lt x_p$ les racines de $A_n$ dans $]0,1[$ de multiplicité impaire ; supposer $p\lt n$.</p>`, b: R`<p>Notons $x_1,\dots,x_p$ les racines de $A_n$ appartenant à $]0,1[$ et de multiplicité impaire ($p\geqslant0$). Supposons $p\lt n$ et posons $P = X(X-x_1)\cdots(X-x_p)$, de degré $p+1\leqslant n$ : $P\in\mathbb R_n[X]$ et $P(0) = 0$. Donc</p>$$0 = \int_0^1A_n(x)\,x\,(x-x_1)\cdots(x-x_p)\,dx.$$<p>Or $A_n(x)(x-x_1)\cdots(x-x_p)$ ne change pas de signe sur $]0,1[$ : chaque changement de signe de $A_n$ (racine d'ordre impair) est compensé par celui du facteur correspondant, et les racines d'ordre pair ne changent pas le signe. Comme $x\geqslant0$, la fonction intégrée est continue, de signe constant, non identiquement nulle ($A_n\neq0$) : son intégrale est non nulle. Contradiction.</p>` },
    { t: "Conclusion", h: R`<p>$p\geqslant n$ et $\deg A_n\leqslant n$.</p>`, b: R`<p>Donc $p\geqslant n$ : $A_n$ a au moins $n$ racines distinctes dans $]0,1[$. Comme $\deg A_n\leqslant n$ et $A_n\neq0$, il en a exactement $n$, elles sont simples, et $\deg A_n = n$.</p>` }
  ],
  piege: R`Il faut utiliser les racines de multiplicité <b>impaire</b> : ce sont elles qui font changer le signe.`,
  methode: R`Localiser les racines d'un polynôme défini par des conditions d'orthogonalité : produit par les facteurs des changements de signe, intégrale de signe constant.`
},
{ id: "pre-52", ...P, level: 3, time: "30 min",
  title: "Le produit vectoriel par représentation d'une forme linéaire",
  enonce: R`<p>Soit $E$ un espace euclidien orienté de dimension $3$ et $[\cdot,\cdot,\cdot]$ le produit mixte (déterminant dans une base orthonormée directe).</p><ol><li>Soient $\vec u,\vec v\in E$. Montrer qu'il existe un unique vecteur, noté $\vec u\wedge\vec v$, tel que $[\vec u,\vec v,\vec x] = (\vec u\wedge\vec v\,|\,\vec x)$ pour tout $\vec x\in E$.</li><li>Montrer que $\vec u\wedge\vec v$ est orthogonal à $\vec u$ et à $\vec v$.</li><li>Montrer que $(\vec u,\vec v)$ est libre si et seulement si $\vec u\wedge\vec v\neq\vec0$, et qu'alors $(\vec u,\vec v,\vec u\wedge\vec v)$ est une base directe.</li><li>Soit $(\vec\imath,\vec\jmath,\vec k)$ une base orthonormée directe avec $\vec u\in\mathrm{Vect}(\vec\imath)$ et $\vec v\in\mathrm{Vect}(\vec\imath,\vec\jmath)$. Exprimer $\vec u\wedge\vec v$ et en déduire $(\vec u|\vec v)^2+\|\vec u\wedge\vec v\|^2 = \|\vec u\|^2\|\vec v\|^2$.</li></ol>`,
  decode: { donnees: [R`Le produit mixte est trilinéaire alterné, et indépendant de la base orthonormée directe choisie.`], but: R`Représenter la forme $\vec x\mapsto[\vec u,\vec v,\vec x]$.`, cles: {} },
  steps: [
    { t: "1) Existence et unicité", h: R`<p>$\vec x\mapsto[\vec u,\vec v,\vec x]$ est une forme linéaire.</p>`, b: R`<p>Le déterminant est linéaire par rapport à chaque vecteur : $\vec x\mapsto[\vec u,\vec v,\vec x]$ est une forme linéaire sur l'espace euclidien $E$. Le théorème de représentation fournit un unique vecteur $\vec w = \vec u\wedge\vec v$ avec $[\vec u,\vec v,\vec x] = (\vec w|\vec x)$ pour tout $\vec x$.</p>`, rappels: ["eu-riesz"] },
    { t: "2) Orthogonalité", h: R`<p>Un déterminant avec deux colonnes égales est nul.</p>`, b: R`<p>$(\vec w|\vec u) = [\vec u,\vec v,\vec u] = 0$ et $(\vec w|\vec v) = [\vec u,\vec v,\vec v] = 0$ (le déterminant est alterné).</p>` },
    { t: "3) Liberté", h: R`<p>Si $(\vec u,\vec v)$ est libre, compléter en une base $(\vec u,\vec v,\vec x)$.</p>`, b: R`<p>Si $(\vec u,\vec v)$ est liée, $[\vec u,\vec v,\vec x] = 0$ pour tout $\vec x$, donc $(\vec w|\vec x) = 0$ pour tout $\vec x$ : $\vec w = \vec0$. Si $(\vec u,\vec v)$ est libre, on la complète en une base $(\vec u,\vec v,\vec x)$ ; son déterminant est non nul, donc $(\vec w|\vec x)\neq0$ et $\vec w\neq\vec0$.</p><p>Dans ce cas, $[\vec u,\vec v,\vec w] = (\vec w|\vec w) = \|\vec w\|^2>0$ : la famille $(\vec u,\vec v,\vec w)$ est une base (déterminant non nul), et elle est directe (déterminant positif).</p>` },
    { t: "4) Calcul en base adaptée", h: R`<p>$\vec u = a\vec\imath$, $\vec v = b\vec\imath+c\vec\jmath$ : déterminant triangulaire.</p>`, b: R`<p>Écrivons $\vec u = a\vec\imath$, $\vec v = b\vec\imath+c\vec\jmath$ et $\vec x = x_1\vec\imath+x_2\vec\jmath+x_3\vec k$. Le produit mixte se calcule dans la base orthonormée directe $(\vec\imath,\vec\jmath,\vec k)$ :</p>$$[\vec u,\vec v,\vec x] = \begin{vmatrix}a&b&x_1\\0&c&x_2\\0&0&x_3\end{vmatrix} = ac\,x_3 = (ac\,\vec k\,|\,\vec x).$$<p>Par unicité, $\vec u\wedge\vec v = ac\,\vec k$. Alors $(\vec u|\vec v) = ab$, $\|\vec u\wedge\vec v\|^2 = a^2c^2$ et</p>$$(\vec u|\vec v)^2+\|\vec u\wedge\vec v\|^2 = a^2b^2+a^2c^2 = a^2(b^2+c^2) = \|\vec u\|^2\|\vec v\|^2.$$<p>Une telle base existe toujours : si $\vec u\neq\vec0$, $\vec\imath = \frac{\vec u}{\|\vec u\|}$, $\vec\jmath$ unitaire dans $\mathrm{Vect}(\vec u,\vec v)$ orthogonal à $\vec\imath$ (ou quelconque orthogonal à $\vec\imath$ si $\vec v\in\mathrm{Vect}(\vec u)$), puis $\vec k$ l'un des deux vecteurs unitaires orthogonaux à $\vec\imath,\vec\jmath$, choisi pour que la base soit directe. Si $\vec u = \vec0$, la formule est $0 = 0$. L'identité est intrinsèque, donc vraie en général : c'est l'identité de Lagrange, qui donne $\|\vec u\wedge\vec v\| = \|\vec u\|\|\vec v\||\sin\theta|$.</p>` }
  ],
  piege: R`Le produit mixte ne dépend pas de la base orthonormée <b>directe</b> choisie (matrice de passage de déterminant $1$) ; dans une base indirecte, il change de signe.`,
  methode: R`Définir un vecteur par une propriété « pour tout $\vec x$ » : représentation d'une forme linéaire. Calculer ensuite dans une base adaptée.`
},
{ id: "pre-53", ...P, level: 1, time: "15 min",
  title: "L'endomorphisme x ↦ x + α(a|x)a",
  enonce: R`<p>Soit $a$ un vecteur unitaire d'un espace euclidien $E$. Pour $\alpha\in\mathbb R$, on pose $f_\alpha(x) = x+\alpha(a|x)a$.</p><ol><li>Calculer $f_\alpha\circ f_\beta$. Quels sont les $f_\alpha$ bijectifs ?</li><li>Déterminer les éléments propres de $f_\alpha$.</li></ol>`,
  decode: { donnees: [R`$(a|a) = 1$.`], but: R`Composer, trouver un inverse de la forme $f_\beta$ ; puis étudier $a^\perp$ et $\mathrm{Vect}(a)$.`, cles: {} },
  steps: [
    { t: "1) Composition", h: R`<p>$(a|f_\beta(x)) = (1+\beta)(a|x)$.</p>`, b: R`<p>$(a|f_\beta(x)) = (a|x)+\beta(a|x)(a|a) = (1+\beta)(a|x)$. Donc</p>$$f_\alpha(f_\beta(x)) = f_\beta(x)+\alpha(1+\beta)(a|x)a = x+(\alpha+\beta+\alpha\beta)(a|x)a,$$<div class="sbox">$$f_\alpha\circ f_\beta = f_{\alpha+\beta+\alpha\beta}.$$</div>` },
    { t: "1) Bijectivité", h: R`<p>$f_{-1}(a) = 0$ ; pour $\alpha\neq-1$, chercher $\beta$ avec $\alpha+\beta+\alpha\beta = 0$.</p>`, b: R`<p>Si $\alpha = -1$ : $f_{-1}(a) = a-a = 0$, donc $a\in\ker f_{-1}$ et $f_{-1}$ n'est pas bijectif (c'est la projection orthogonale sur $a^\perp$).</p><p>Si $\alpha\neq-1$ : avec $\beta = -\frac\alpha{1+\alpha}$, $\alpha+\beta(1+\alpha) = 0$, donc $f_\alpha\circ f_\beta = f_\beta\circ f_\alpha = f_0 = \mathrm{Id}$. $f_\alpha$ est bijectif d'inverse $f_{-\alpha/(1+\alpha)}$.</p>` },
    { t: "2) Éléments propres", h: R`<p>$f_\alpha(x) = x$ sur $a^\perp$, $f_\alpha(a) = (1+\alpha)a$.</p>`, b: R`<p>Pour $x\in a^\perp$, $f_\alpha(x) = x$ ; et $f_\alpha(a) = (1+\alpha)a$. Comme $E = a^\perp\oplus\mathrm{Vect}(a)$, $f_\alpha$ est diagonalisable (en base orthonormée) :</p><ul><li>si $\alpha\neq0$ : valeurs propres $1$, de sous-espace propre $a^\perp$ (si $\dim E\geqslant2$), et $1+\alpha$, de sous-espace propre $\mathrm{Vect}(a)$ ;</li><li>si $\alpha = 0$ : $f_0 = \mathrm{Id}$, seule valeur propre $1$.</li></ul><p>Il n'y en a pas d'autres : les sous-espaces propres trouvés sont supplémentaires.</p>` }
  ],
  piege: R`Si $\dim E = 1$, $a^\perp = \{0\}$ et la seule valeur propre est $1+\alpha$. Pour $\alpha = -1$, la valeur propre $0$ apparaît : c'est exactement le cas non bijectif.`,
  methode: R`Endomorphisme « identité + rang 1 » : séparer $a^\perp$ (où il agit comme l'identité) et $\mathrm{Vect}(a)$.`
},
{ id: "pre-54", ...P, level: 2, time: "15 min",
  title: "L'endomorphisme x ↦ x − α⟨x, a⟩a (ENSTIM)",
  enonce: R`<p>Soit $a$ un vecteur unitaire d'un espace euclidien $E$ et, pour $\alpha\in\mathbb R$, $f_\alpha(x) = x-\alpha\langle x,a\rangle a$.</p><ol><li>Montrer que $f_\alpha$ est un endomorphisme de $E$. Que dire de $f_0$ ?</li><li>Soient $\alpha,\beta\in\mathbb R$. Trouver $\gamma$ tel que $f_\alpha\circ f_\beta = f_\gamma$. En déduire les $\alpha$ pour lesquels $f_\alpha$ est un automorphisme, et préciser $f_\alpha^{-1}$.</li><li>Montrer que $f_\alpha$ est diagonalisable et préciser ses éléments propres.</li></ol>`,
  decode: { donnees: [R`$f_\alpha = $ l'endomorphisme de l'exercice précédent avec $-\alpha$ à la place de $\alpha$.`], but: R`$\gamma = \alpha+\beta-\alpha\beta$ ; matrice diagonale en base orthonormée de premier vecteur $a$.`, cles: {} },
  steps: [
    { t: "1) Endomorphisme", h: R`<p>Linéarité du produit scalaire en $x$.</p>`, b: R`<p>$f_\alpha$ va de $E$ dans $E$ et $f_\alpha(\lambda x+\mu y) = \lambda x+\mu y-\alpha(\lambda\langle x,a\rangle+\mu\langle y,a\rangle)a = \lambda f_\alpha(x)+\mu f_\alpha(y)$. Et $f_0 = \mathrm{Id}_E$.</p>` },
    { t: "2) Composition", h: R`<p>$\langle f_\beta(x),a\rangle = (1-\beta)\langle x,a\rangle$.</p>`, b: R`<p>$\langle f_\beta(x),a\rangle = \langle x,a\rangle-\beta\langle x,a\rangle\|a\|^2 = (1-\beta)\langle x,a\rangle$, donc</p>$$f_\alpha(f_\beta(x)) = x-\beta\langle x,a\rangle a-\alpha(1-\beta)\langle x,a\rangle a = f_\gamma(x),\quad\gamma = \alpha+\beta-\alpha\beta.$$<p><b>Si $\alpha\neq1$</b> : $\beta = \frac\alpha{\alpha-1}$ vérifie $\alpha+\beta(1-\alpha) = 0$, donc $f_\alpha\circ f_\beta = f_\beta\circ f_\alpha = f_0 = \mathrm{Id}$ : $f_\alpha$ est un automorphisme et $f_\alpha^{-1} = f_{\alpha/(\alpha-1)}$.</p><p><b>Si $\alpha = 1$</b> : $f_1(a) = 0$, $f_1$ (projection orthogonale sur $a^\perp$) n'est pas un automorphisme.</p>` },
    { t: "3) Diagonalisation", h: R`<p>Base orthonormée $(a,e_2,\dots,e_n)$.</p>`, b: R`<p>Complétons $a$ en une base orthonormée $(a,e_2,\dots,e_n)$. $f_\alpha(a) = (1-\alpha)a$ et $f_\alpha(e_k) = e_k$ ($e_k\perp a$). Donc</p>$$\mathrm{Mat}(f_\alpha) = \begin{pmatrix}1-\alpha&&&\\&1&&\\&&\ddots&\\&&&1\end{pmatrix}.$$<p>$f_\alpha$ est diagonalisable. Pour $\alpha\neq0$ : valeur propre $1-\alpha$ de sous-espace propre $\mathrm{Vect}(a)$, et $1$ de sous-espace propre $a^\perp$. Pour $\alpha = 2$ : $f_2$ est la réflexion par rapport à $a^\perp$ (valeurs propres $-1$ et $1$).</p>` }
  ],
  piege: R`Ne pas oublier le cas $\alpha = 1$, où la formule de l'inverse donnerait une division par $0$.`,
  methode: R`Une base orthonormée qui contient $a$ diagonalise tout endomorphisme de la forme $x\mapsto x+c\langle x,a\rangle a$.`
},
{ id: "pre-55", ...P, level: 2, time: "20 min",
  title: "L'endomorphisme x ↦ x + (a|x)b : polynôme annulateur",
  enonce: R`<p>Soient $a,b$ deux vecteurs d'un espace euclidien $E$ et $f : x\mapsto x+(a|x)b$.</p><ol><li>Montrer que $f$ est linéaire.</li><li>Calculer $f^2$ et en déduire un polynôme annulateur de $f$.</li><li>À quelle condition $f$ est-il diagonalisable ?</li></ol>`,
  decode: { donnees: [R`$(a|f(x)) = (1+(a|b))(a|x)$.`], but: R`Exprimer $f^2$ en fonction de $f$ et $\mathrm{Id}$, puis étudier les racines du polynôme obtenu.`, cles: {} },
  steps: [
    { t: "1) Linéarité", h: R`<p>Linéarité du produit scalaire.</p>`, b: R`<p>$f(\lambda x+\mu y) = \lambda x+\mu y+(\lambda(a|x)+\mu(a|y))b = \lambda f(x)+\mu f(y)$.</p>` },
    { t: "2) Calcul de f²", h: R`<p>$(a|x)b = f(x)-x$.</p>`, b: R`<p>Posons $s = (a|b)$. $f(f(x)) = f(x)+(a|f(x))b = f(x)+(1+s)(a|x)b$, et $(a|x)b = f(x)-x$, donc</p>$$f^2(x) = f(x)+(1+s)(f(x)-x) = (2+s)f(x)-(1+s)x.$$<p>Ainsi $P = X^2-(2+s)X+(1+s) = (X-1)\big(X-(1+s)\big)$ est annulateur de $f$.</p>` },
    { t: "3) Cas s ≠ 0", h: R`<p>Polynôme scindé à racines simples.</p>`, b: R`<p>Si $s\neq0$, $P$ est scindé à racines simples $1$ et $1+s$ : $f$ est diagonalisable.</p>` },
    { t: "3) Cas s = 0", h: R`<p>Seule valeur propre possible : $1$.</p>`, b: R`<p>Si $s = 0$, $P = (X-1)^2$, la seule valeur propre possible est $1$, et $f$ est diagonalisable si et seulement si $f = \mathrm{Id}$, c'est-à-dire $(a|x)b = 0$ pour tout $x$, c'est-à-dire $a = 0$ ou $b = 0$ (si $b\neq0$, prendre $x = a$ donne $\|a\|^2 = 0$).</p><div class="sbox"><p>$f$ est diagonalisable si et seulement si $(a|b)\neq0$, ou $a = 0$, ou $b = 0$.</p></div><p>Exemple : $a\perp b$ non nuls donne $f = \mathrm{Id}+N$ avec $N : x\mapsto(a|x)b$ nilpotent non nul ($N^2 = 0$) : non diagonalisable.</p>` }
  ],
  piege: R`Un polynôme annulateur avec racine double ne permet pas de conclure seul : il faut examiner si $f-\mathrm{Id}$ est nul.`,
  methode: R`Endomorphisme « identité + rang 1 » : calculer $f^2$ pour obtenir un polynôme annulateur de degré $2$.`
},
{ id: "pre-56", ...P, level: 2, time: "20 min",
  title: "L'endomorphisme x ↦ x − (a|x)b : bijectivité et diagonalisabilité",
  enonce: R`<p>Soient $a,b$ deux vecteurs unitaires d'un espace euclidien $E$ de dimension $n\geqslant2$, et $f : x\mapsto x-(a|x)b$.</p><ol><li>À quelle condition simple $f$ est-il bijectif ?</li><li>À quelle condition $f$ est-il diagonalisable ?</li></ol>`,
  decode: { donnees: [R`C'est l'exercice précédent avec $-b$ : $s = (a|b)$ devient $-(a|b)$.`], but: R`Étudier le noyau ; polynôme annulateur $(X-1)(X-(1-s))$.`, cles: {} },
  steps: [
    { t: "1) Le noyau", h: R`<p>$f(x) = 0\iff x = (a|x)b$ : $x$ est colinéaire à $b$.</p>`, b: R`<p>Posons $s = (a|b)$. Si $f(x) = 0$, alors $x = (a|x)b = \lambda b$, et en reportant, $\lambda b = \lambda(a|b)b$, soit $\lambda(1-s) = 0$.</p><ul><li>Si $s\neq1$ : $\lambda = 0$, $x = 0$ ; $f$ est injectif donc bijectif (dimension finie).</li><li>Si $s = 1$ : $f(b) = b-b = 0$, $f$ n'est pas bijectif.</li></ul><p>Or, pour des vecteurs unitaires, $(a|b) = 1 = \|a\|\|b\|$ est le cas d'égalité de Cauchy-Schwarz avec signe positif : $a = b$.</p><div class="sbox"><p>$f$ est bijectif si et seulement si $a\neq b$.</p></div>`, rappels: ["eu-cs"] },
    { t: "2) Polynôme annulateur", h: R`<p>$f^2 = (2-s)f-(1-s)\mathrm{Id}$.</p>`, b: R`<p>$(a|f(x)) = (1-s)(a|x)$ et $(a|x)b = x-f(x)$, donc $f^2(x) = f(x)-(1-s)(a|x)b = f(x)-(1-s)(x-f(x))$ :</p>$$f^2-(2-s)f+(1-s)\mathrm{Id} = 0,\qquad\text{soit}\quad(f-\mathrm{Id})\circ\big(f-(1-s)\mathrm{Id}\big) = 0.$$` },
    { t: "2) Conclusion", h: R`<p>$s\neq0$ : racines simples ; $s = 0$ : $f\neq\mathrm{Id}$.</p>`, b: R`<p>Si $s\neq0$, le polynôme $(X-1)(X-(1-s))$ est scindé à racines simples : $f$ est diagonalisable, de valeurs propres $1$ (sous-espace propre $a^\perp$, de dimension $n-1$) et $1-s$ (vecteur propre $b$ : $f(b) = (1-s)b$).</p><p>Si $s = 0$, la seule valeur propre possible est $1$ ; or $f\neq\mathrm{Id}$ ($f(a) = a-b\neq a$), donc $f$ n'est pas diagonalisable.</p><div class="sbox"><p>$f$ est diagonalisable si et seulement si $(a|b)\neq0$.</p></div>` }
  ],
  piege: R`Le cas $a = b$ ($s = 1$) est diagonalisable (projection orthogonale sur $a^\perp$) mais non bijectif : les deux questions sont indépendantes.`,
  methode: R`Pour $f = \mathrm{Id}-(\text{rang }1)$ : noyau par colinéarité, puis polynôme annulateur de degré $2$.`
},
{ id: "pre-57", ...P, level: 1, time: "10 min",
  title: "Im(ᵗA) = (Ker A)⊥",
  enonce: R`<p>Soit $A\in\mathcal M_n(\mathbb R)$. On munit $\mathcal M_{n,1}(\mathbb R)$ du produit scalaire canonique $\langle X,Y\rangle = {}^tXY$. Montrer que $\mathrm{Im}({}^tA) = (\ker A)^\perp$.</p>`,
  decode: { donnees: [R`$\langle AX,Y\rangle = \langle X,{}^tAY\rangle$ ; $\mathrm{rg}({}^tA) = \mathrm{rg}(A)$.`], but: R`Une inclusion par le calcul, l'égalité par les dimensions.`, cles: {} },
  steps: [
    { t: "Inclusion", h: R`<p>$X\in\ker A$, $Y = {}^tAZ$ : $\langle X,Y\rangle = {}^tX\,{}^tAZ$.</p>`, b: R`<p>Soient $Y = {}^tAZ\in\mathrm{Im}({}^tA)$ et $X\in\ker A$. Alors</p>$$\langle X,Y\rangle = {}^tX\,{}^tAZ = {}^t(AX)Z = {}^t0\,Z = 0.$$<p>Donc $\mathrm{Im}({}^tA)\subset(\ker A)^\perp$.</p>`, rappels: ["eu-colonnes"] },
    { t: "Dimensions", h: R`<p>$\dim(\ker A)^\perp = n-\dim\ker A = \mathrm{rg}\,A$.</p>`, b: R`<p>$\dim\mathrm{Im}({}^tA) = \mathrm{rg}({}^tA) = \mathrm{rg}(A)$ et, par le théorème du rang, $\dim(\ker A)^\perp = n-\dim\ker A = \mathrm{rg}(A)$. L'inclusion est donc une égalité : $\mathrm{Im}({}^tA) = (\ker A)^\perp$.</p>` }
  ],
  piege: R`L'égalité utilise $\mathrm{rg}({}^tA) = \mathrm{rg}(A)$ : à citer.`,
  methode: R`Égalité de sous-espaces en dimension finie : une inclusion + dimensions.`
},
{ id: "pre-58", ...P, level: 2, time: "15 min",
  title: "Comparer Ker A et Ker(ᵗAA), Im A et Im(AᵗA)",
  enonce: R`<p>Soit $A\in\mathcal M_n(\mathbb R)$.</p><ol><li>Comparer $\ker A$ et $\ker({}^tAA)$.</li><li>Comparer $\mathrm{Im}\,A$ et $\mathrm{Im}(A\,{}^tA)$.</li></ol>`,
  decode: { donnees: [R`$\,{}^tX\,{}^tAAX = \|AX\|^2$.`], but: R`Montrer $\ker({}^tAA) = \ker A$ et $\mathrm{Im}(A{}^tA) = \mathrm{Im}\,A$.`, cles: {} },
  steps: [
    { t: "1) Noyaux", h: R`<p>Si $\,{}^tAAX = 0$, multiplier à gauche par $\,{}^tX$.</p>`, b: R`<p>Si $AX = 0$, alors $\,{}^tAAX = 0$ : $\ker A\subset\ker({}^tAA)$. Réciproquement, si $\,{}^tAAX = 0$ :</p>$$0 = {}^tX\,{}^tAAX = {}^t(AX)(AX) = \|AX\|^2,$$<p>donc $AX = 0$. Ainsi $\ker({}^tAA) = \ker A$.</p>`, rappels: ["eu-colonnes"] },
    { t: "2) Images", h: R`<p>Appliquer 1) à $\,{}^tA$ : $\ker(A{}^tA) = \ker{}^tA$, donc les rangs.</p>`, b: R`<p>$\mathrm{Im}(A{}^tA)\subset\mathrm{Im}\,A$ (car $A{}^tAX = A({}^tAX)$). Appliquons 1) à $\,{}^tA$ : $\ker(A\,{}^tA) = \ker({}^tA)$. Par le théorème du rang, $\mathrm{rg}(A{}^tA) = \mathrm{rg}({}^tA) = \mathrm{rg}(A)$. L'inclusion est une égalité : $\mathrm{Im}(A{}^tA) = \mathrm{Im}\,A$.</p>` }
  ],
  piege: R`Sur $\mathbb C$ avec la transposée simple, c'est faux : $\,{}^tX\,{}^tAAX$ n'est plus une norme. Il faudrait la transconjuguée.`,
  methode: R`$\,{}^tX\,{}^tAAX = \|AX\|^2$ : l'outil universel pour comparer $A$ et $\,{}^tAA$.`
},
{ id: "pre-59", ...P, level: 1, time: "10 min",
  title: "rg(ᵗAA) = rg A (ENSTIM)",
  enonce: R`<p>Soit $A\in\mathcal M_n(\mathbb R)$. Établir que $\mathrm{rg}({}^tAA) = \mathrm{rg}(A)$.</p>`,
  decode: { donnees: [R`$\|AX\|^2 = {}^tX\,{}^tAAX$.`], but: R`Égalité des noyaux, puis théorème du rang.`, cles: {} },
  steps: [
    { t: "Égalité des noyaux", h: R`<p>$\,{}^tAAX = 0\Rightarrow\|AX\|^2 = 0$.</p>`, b: R`<p>Si $AX = 0$ alors $\,{}^tAAX = 0$. Si $\,{}^tAAX = 0$, alors $\,{}^tX\,{}^tAAX = {}^t(AX)AX = \|AX\|^2 = 0$, donc $AX = 0$. Ainsi $\ker({}^tAA) = \ker A$.</p>` },
    { t: "Théorème du rang", h: R`<p>Même nombre de colonnes $n$.</p>`, b: R`<p>$A$ et $\,{}^tAA$ ont $n$ colonnes, donc $\mathrm{rg}({}^tAA) = n-\dim\ker({}^tAA) = n-\dim\ker A = \mathrm{rg}(A)$.</p><p>Le résultat vaut aussi pour $A\in\mathcal M_{p,n}(\mathbb R)$ rectangulaire, avec le même argument.</p>` }
  ],
  piege: R`L'argument repose sur la positivité du produit scalaire réel.`,
  methode: R`Rang d'un produit $\,{}^tAA$ : comparer les noyaux grâce à $\|AX\|^2$.`
},
{ id: "pre-60", ...P, level: 2, time: "20 min",
  title: "Si A² = 0 : quand ᵗA + A est-elle inversible ?",
  enonce: R`<p>Soit $A\in\mathcal M_n(\mathbb R)$ telle que $A^2 = 0$.</p><ol><li>Établir que $\ker({}^tA+A) = \ker A\cap\ker({}^tA)$.</li><li>En déduire que $\,{}^tA+A$ est inversible si et seulement si $\mathrm{Im}\,A = \ker A$.</li></ol>`,
  decode: { donnees: [R`$A^2 = 0$ donne $\mathrm{Im}\,A\subset\ker A$ ; $\ker{}^tA = (\mathrm{Im}\,A)^\perp$.`], but: R`Multiplier $({}^tA+A)X = 0$ par $A$ ; puis dimensions.`, cles: {} },
  steps: [
    { t: "1) Inclusion facile", h: R`<p>$AX = 0$ et $\,{}^tAX = 0$ donnent $({}^tA+A)X = 0$.</p>`, b: R`<p>$\ker A\cap\ker{}^tA\subset\ker({}^tA+A)$ est immédiat.</p>` },
    { t: "1) Inclusion réciproque", h: R`<p>Multiplier par $A$ à gauche : $A{}^tAX = 0$, puis $\,{}^tX$.</p>`, b: R`<p>Soit $X$ avec $\,{}^tAX+AX = 0$. Multiplions à gauche par $A$ : $A\,{}^tAX+A^2X = A\,{}^tAX = 0$. Puis</p>$$0 = {}^tX\,A\,{}^tAX = {}^t({}^tAX)({}^tAX) = \|{}^tAX\|^2,$$<p>donc $\,{}^tAX = 0$, puis $AX = -{}^tAX = 0$. Ainsi $X\in\ker A\cap\ker{}^tA$.</p>` },
    { t: "2) Traduction", h: R`<p>Inversible ⟺ $\ker A\cap(\mathrm{Im}\,A)^\perp = \{0\}$.</p>`, b: R`<p>$\,{}^tA+A$ est inversible ssi son noyau est nul, c'est-à-dire, par 1) et $\ker{}^tA = (\mathrm{Im}\,A)^\perp$ :</p>$$\ker A\cap(\mathrm{Im}\,A)^\perp = \{0\}.$$<p>Notons $r = \mathrm{rg}\,A$. Comme $A^2 = 0$, $\mathrm{Im}\,A\subset\ker A$, donc $r\leqslant n-r$.</p>`, rappels: ["eu-colonnes"] },
    { t: "2) Les deux sens", h: R`<p>Si $\ker A = \mathrm{Im}\,A$ : $\ker A\cap(\ker A)^\perp = \{0\}$. Réciproque : somme des dimensions $\leqslant n$.</p>`, b: R`<p>Si $\mathrm{Im}\,A = \ker A$, alors $\ker A\cap(\mathrm{Im}\,A)^\perp = \ker A\cap(\ker A)^\perp = \{0\}$ : $\,{}^tA+A$ est inversible.</p><p>Réciproquement, si $\ker A\cap(\mathrm{Im}\,A)^\perp = \{0\}$, ces deux sous-espaces sont en somme directe, donc $\dim\ker A+\dim(\mathrm{Im}\,A)^\perp\leqslant n$, soit $(n-r)+(n-r)\leqslant n$, c'est-à-dire $n\leqslant2r$. Avec $2r\leqslant n$, on obtient $2r = n$, donc $\dim\mathrm{Im}\,A = r = n-r = \dim\ker A$, et l'inclusion $\mathrm{Im}\,A\subset\ker A$ est une égalité.</p><div class="sbox"><p>$\,{}^tA+A\in GL_n(\mathbb R)\iff\mathrm{Im}\,A = \ker A$ (ce qui impose $n$ pair).</p></div><p>Exemple : $A = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ : $\,{}^tA+A = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ est inversible, et $\mathrm{Im}\,A = \ker A = \mathrm{Vect}(e_1)$.</p>` }
  ],
  piege: R`On a besoin de l'inclusion $\mathrm{Im}\,A\subset\ker A$ (venant de $A^2 = 0$) pour transformer l'égalité des dimensions en égalité d'espaces.`,
  methode: R`Équation $({}^tA+A)X = 0$ : multiplier par $A$ pour faire apparaître $A{}^tA$ puis une norme.`
},
{ id: "pre-61", ...P, level: 2, time: "20 min",
  title: "Matrices contractantes : Ker(A − I) ⊕ Im(A − I)",
  enonce: R`<p>Soit $A\in\mathcal M_n(\mathbb R)$ telle que $\|AX\|\leqslant\|X\|$ pour toute colonne $X$ (norme euclidienne canonique).</p><ol><li>Montrer que $\|{}^tAX\|\leqslant\|X\|$ pour toute colonne $X$.</li><li>Soit $X$ tel que $AX = X$. Montrer que $\,{}^tAX = X$.</li><li>Établir que $\mathcal M_{n,1}(\mathbb R) = \ker(A-I_n)\oplus\mathrm{Im}(A-I_n)$.</li></ol>`,
  decode: { donnees: [R`$\|{}^tAX\|^2 = \langle X,A{}^tAX\rangle$.`], but: R`Cauchy-Schwarz pour 1) ; développer $\|{}^tAX-X\|^2$ pour 2) ; intersection nulle + rang pour 3).`, cles: {} },
  steps: [
    { t: "1) ᵗA est aussi contractante", h: R`<p>$\|{}^tAX\|^2 = \langle X,A({}^tAX)\rangle\leqslant\|X\|\,\|A{}^tAX\|\leqslant\|X\|\,\|{}^tAX\|$.</p>`, b: R`<p>$$\|{}^tAX\|^2 = {}^tX\,A\,{}^tAX = \langle X,A({}^tAX)\rangle\leqslant\|X\|\,\|A({}^tAX)\|\leqslant\|X\|\,\|{}^tAX\|,$$<p>par Cauchy-Schwarz puis l'hypothèse appliquée à $\,{}^tAX$. Si $\,{}^tAX\neq0$, on divise par $\|{}^tAX\|$ ; sinon l'inégalité est évidente. Donc $\|{}^tAX\|\leqslant\|X\|$.</p>`, rappels: ["eu-cs"] },
    { t: "2) Points fixes de A et de ᵗA", h: R`<p>Développer $\|{}^tAX-X\|^2$, avec $\langle{}^tAX,X\rangle = \langle X,AX\rangle = \|X\|^2$.</p>`, b: R`<p>Si $AX = X$, alors $\langle{}^tAX,X\rangle = \langle X,AX\rangle = \|X\|^2$, et</p>$$\begin{aligned}\|{}^tAX-X\|^2 &= \|{}^tAX\|^2-2\langle{}^tAX,X\rangle+\|X\|^2\\ &\leqslant \|X\|^2-2\|X\|^2+\|X\|^2\\ &= 0.\end{aligned}$$<p>Donc $\,{}^tAX = X$.</p>` },
    { t: "3) Intersection nulle", h: R`<p>$X = AY-Y$ et $AX = X$ : $\|X\|^2 = {}^tX(AY-Y) = ({}^tAX)^tY-{}^tXY$.</p>`, b: R`<p>Soit $X\in\ker(A-I_n)\cap\mathrm{Im}(A-I_n)$ : $AX = X$ (donc $\,{}^tAX = X$ par 2)) et $X = AY-Y$. Alors</p>$$\begin{aligned}\|X\|^2 &= {}^tX(AY-Y)\\ &= {}^tXAY-{}^tXY\\ &= {}^t({}^tAX)Y-{}^tXY\\ &= {}^tXY-{}^tXY\\ &= 0.\end{aligned}$$<p>Donc $X = 0$.</p>` },
    { t: "3) Conclusion", h: R`<p>Théorème du rang pour $A-I_n$.</p>`, b: R`<p>Par le théorème du rang, $\dim\ker(A-I_n)+\dim\mathrm{Im}(A-I_n) = n$. Intersection nulle et somme des dimensions égale à $n$ :</p>$$\mathcal M_{n,1}(\mathbb R) = \ker(A-I_n)\oplus\mathrm{Im}(A-I_n).$$<p>On a même $\mathrm{Im}(A-I_n) = \ker({}^tA-I_n)^\perp = \ker(A-I_n)^\perp$ : la somme est orthogonale. C'est le point de départ du théorème ergodique : $\frac1N\sum_{k\lt N}A^kX$ converge vers le projeté orthogonal de $X$ sur $\ker(A-I_n)$.</p>` }
  ],
  piege: R`Pour une matrice quelconque, $\ker(A-I)$ et $\mathrm{Im}(A-I)$ ne sont pas supplémentaires (bloc de Jordan $\begin{pmatrix}1&1\\0&1\end{pmatrix}$) ; c'est la contraction qui l'empêche.`,
  methode: R`Contraction et adjoint : $\|{}^tA\| = \|A\|$, et un vecteur fixe de $A$ est fixe pour $\,{}^tA$.`
},
{ id: "pre-62", ...P, level: 3, time: "20 min",
  title: "Contraction : une autre preuve par perturbation",
  enonce: R`<p>Soit $A\in\mathcal M_n(\mathbb R)$ telle que $\|AX\|\leqslant\|X\|$ pour toute colonne $X$.</p><ol><li>En écrivant $\|Y\| = \max_{\|Z\| = 1}\langle Y,Z\rangle$, montrer que $\|{}^tAX\|\leqslant\|X\|$.</li><li>Soit $X$ tel que $AX = X$. En étudiant $t\mapsto\|X+tY\|^2-\|A(X+tY)\|^2$, montrer que $\,{}^tAX = X$.</li></ol>`,
  decode: { donnees: [R`Égalité de Cauchy-Schwarz : $\langle Y,\frac Y{\|Y\|}\rangle = \|Y\|$.`], but: R`Deux preuves alternatives à l'exercice précédent : dualité, et minimum d'un trinôme.`, cles: {} },
  steps: [
    { t: "1) Formule de dualité", h: R`<p>$\langle Y,Z\rangle\leqslant\|Y\|$ si $\|Z\| = 1$, égalité pour $Z = Y/\|Y\|$.</p>`, b: R`<p>Pour $\|Z\| = 1$, Cauchy-Schwarz donne $\langle Y,Z\rangle\leqslant\|Y\|$, avec égalité pour $Z = \frac Y{\|Y\|}$ si $Y\neq0$ (et tout $Z$ si $Y = 0$) : $\|Y\| = \max_{\|Z\| = 1}\langle Y,Z\rangle$. Avec $Y = {}^tAX$ :</p>$$\|{}^tAX\| = \max_{\|Z\| = 1}\langle{}^tAX,Z\rangle = \max_{\|Z\| = 1}\langle X,AZ\rangle\leqslant\max_{\|Z\| = 1}\|X\|\,\|AZ\|\leqslant\|X\|.$$` },
    { t: "2) Un trinôme positif nul en 0", h: R`<p>$g(t) = \|X+tY\|^2-\|A(X+tY)\|^2\geqslant0$ et $g(0) = 0$ : $g'(0) = 0$.</p>`, b: R`<p>Soit $Y$ quelconque et $g(t) = \|X+tY\|^2-\|AX+tAY\|^2$. Par hypothèse $g\geqslant0$, et $g(0) = \|X\|^2-\|AX\|^2 = 0$ car $AX = X$. En développant, avec $AX = X$ :</p>$$g(t) = 2t\big(\langle X,Y\rangle-\langle X,AY\rangle\big)+t^2\big(\|Y\|^2-\|AY\|^2\big).$$<p>$g$ atteint son minimum en $0$, donc $g'(0) = 0$ : $\langle X,Y\rangle = \langle X,AY\rangle = \langle{}^tAX,Y\rangle$. Ainsi $\langle{}^tAX-X,Y\rangle = 0$ pour tout $Y$ ; avec $Y = {}^tAX-X$, on obtient $\,{}^tAX = X$.</p>` }
  ],
  piege: R`Dans 2), il faut que $g(0) = 0$ : c'est l'hypothèse $AX = X$ qui fait de $0$ un point de minimum.`,
  methode: R`Une inégalité valable pour tout vecteur et qui devient égalité en un point : dériver en ce point (condition du premier ordre).`
},
{ id: "pre-63", ...P, level: 2, time: "25 min",
  title: "Polynômes orthogonaux unitaires sur [−1, 1] : relation de récurrence",
  enonce: R`<p>On munit $\mathbb R[X]$ de $\langle P,Q\rangle = \int_{-1}^1P(t)Q(t)\,dt$.</p><ol><li>Établir l'existence et l'unicité d'une suite $(P_n)$ de polynômes deux à deux orthogonaux, avec $P_n$ de degré $n$ et de coefficient dominant $1$.</li><li>Étudier la parité des $P_n$.</li><li>Prouver que pour $n\geqslant1$, $P_{n+1}-XP_n$ est orthogonal à $\mathbb R_{n-2}[X]$.</li><li>En déduire qu'il existe $\lambda_n\in\mathbb R$ tel que $P_{n+1} = XP_n+\lambda_nP_{n-1}$.</li></ol>`,
  decode: { donnees: [R`$\langle XP,Q\rangle = \langle P,XQ\rangle$ ; le poids est pair.`], but: R`Récurrence pour 1), unicité pour la parité, puis la symétrie de la multiplication par $X$.`, cles: {} },
  steps: [
    { t: "1) Existence et unicité", h: R`<p>$P_{n+1} = X^{n+1}+Q$ avec $Q\in\mathbb R_n[X]$, et $(P_0,\dots,P_n)$ base orthogonale de $\mathbb R_n[X]$.</p>`, b: R`<p>Récurrence. $P_0 = 1$ (seul polynôme unitaire de degré $0$). Supposons $P_0,\dots,P_n$ construits et uniques. Ils sont orthogonaux, non nuls, de degrés échelonnés : ils forment une base orthogonale de $\mathbb R_n[X]$. On cherche $P_{n+1} = X^{n+1}+Q$, $Q\in\mathbb R_n[X]$, avec $\langle P_{n+1},P_k\rangle = 0$ pour $k\leqslant n$, c'est-à-dire $\langle Q,P_k\rangle = -\langle X^{n+1},P_k\rangle$. Dans la base orthogonale, ceci détermine $Q$ de façon unique :</p>$$Q = -\sum_{k=0}^n\frac{\langle X^{n+1},P_k\rangle}{\|P_k\|^2}P_k.$$<p>(C'est le procédé de Gram-Schmidt sans normalisation : $P_{n+1} = X^{n+1}-p_{\mathbb R_n[X]}(X^{n+1})$.)</p>`, rappels: ["eu-schmidt"] },
    { t: "2) Parité", h: R`<p>$((-1)^nP_n(-X))$ vérifie les mêmes conditions ; unicité.</p>`, b: R`<p>Posons $\tilde P_n(X) = (-1)^nP_n(-X)$ : unitaire de degré $n$. Par le changement de variable $t\mapsto-t$ :</p>$$\begin{aligned}\langle\tilde P_n,\tilde P_m\rangle &= (-1)^{n+m}\int_{-1}^1P_n(-t)P_m(-t)\,dt\\ &= (-1)^{n+m}\langle P_n,P_m\rangle\\ &= 0\ (n\neq m).\end{aligned}$$<p>Par unicité, $\tilde P_n = P_n$ : $P_n(-X) = (-1)^nP_n(X)$. $P_n$ a la parité de $n$.</p>` },
    { t: "3) Orthogonalité à ℝ_{n−2}[X]", h: R`<p>$\langle XP_n,Q\rangle = \langle P_n,XQ\rangle$ et $\deg(XQ)\leqslant n-1$.</p>`, b: R`<p>Soit $Q\in\mathbb R_{n-2}[X]$. $Q\in\mathbb R_n[X]$, donc $\langle P_{n+1},Q\rangle = 0$ ($P_{n+1}$ est orthogonal à $\mathbb R_n[X] = \mathrm{Vect}(P_0,\dots,P_n)$). Et</p>$$\langle XP_n,Q\rangle = \int_{-1}^1tP_n(t)Q(t)dt = \langle P_n,XQ\rangle = 0$$<p>car $XQ\in\mathbb R_{n-1}[X]$. Donc $\langle P_{n+1}-XP_n,Q\rangle = 0$.</p>` },
    { t: "4) Récurrence à trois termes", h: R`<p>$P_{n+1}-XP_n\in\mathbb R_n[X]$ (les termes dominants s'annulent) ; le décomposer sur $(P_k)$.</p>`, b: R`<p>$P_{n+1}$ et $XP_n$ sont unitaires de degré $n+1$, donc $P_{n+1}-XP_n\in\mathbb R_n[X]$ : $P_{n+1}-XP_n = \sum_{k=0}^n\alpha_kP_k$ avec $\alpha_k = \frac{\langle P_{n+1}-XP_n,P_k\rangle}{\|P_k\|^2}$. Par 3), $\alpha_k = 0$ pour $k\leqslant n-2$. Donc $P_{n+1}-XP_n = \alpha_nP_n+\alpha_{n-1}P_{n-1}$. Enfin, $P_{n+1}-XP_n$ a la parité de $n+1$ alors que $P_n$ a celle de $n$ : $\alpha_n = 0$ (ou : $\alpha_n\|P_n\|^2 = -\int tP_n^2 = 0$, intégrande impaire). D'où</p><div class="sbox">$$P_{n+1} = XP_n+\lambda_nP_{n-1},\qquad\lambda_n = \alpha_{n-1} = -\frac{\|P_n\|^2}{\|P_{n-1}\|^2}\lt0.$$</div><p>(La valeur de $\lambda_n$ : $\langle P_{n+1}-XP_n,P_{n-1}\rangle = -\langle P_n,XP_{n-1}\rangle = -\langle P_n,P_n\rangle$ car $XP_{n-1} = P_n+(\text{degré}\lt n)$.) Exemple : $P_1 = X$, $P_2 = X^2-\frac13$, $P_3 = X^3-\frac35X$.</p>` }
  ],
  piege: R`La symétrie $\langle XP,Q\rangle = \langle P,XQ\rangle$ est la clé : elle vient du fait que le produit scalaire est une intégrale de $PQ$ contre un poids.`,
  methode: R`Polynômes orthogonaux pour un poids : récurrence à trois termes via $P_{n+1}-XP_n\perp\mathbb R_{n-2}[X]$.`
},
{ id: "pre-64", ...P, level: 3, time: "35 min",
  title: "Polynômes de Legendre : valeurs, orthogonalité, récurrence, norme",
  enonce: R`<p>On identifie polynôme et fonction polynomiale sur $[-1,1]$, et on munit $E = \mathcal C([-1,1],\mathbb R)$ de $(f|g) = \int_{-1}^1fg$. Pour $n\in\mathbb N$, on pose</p>$$P_n(x) = \frac1{2^nn!}\,\frac{d^n}{dx^n}\big((x^2-1)^n\big).$$<ol><li>Calculer $P_n(1)$ et $P_n(-1)$.</li><li>Montrer que $P_n$ est de degré $n$ et orthogonal à tout polynôme de degré $\lt n$.</li><li>En dérivant deux fois $(x^2-1)^{n+1}$, établir $P'_{n+1} = (2n+1)P_n+P'_{n-1}$ pour $n\geqslant1$.</li><li>En déduire $\|P_n\| = \sqrt{\frac2{2n+1}}$.</li></ol>`,
  decode: { donnees: [R`$u_n = (x^2-1)^n = (x-1)^n(x+1)^n$ ; $\pm1$ sont racines d'ordre $n$.`], but: R`Leibniz pour les valeurs, intégrations par parties pour l'orthogonalité, puis intégrer la relation de récurrence contre $P_n$.`, cles: {} },
  steps: [
    { t: "1) Valeurs en ±1", h: R`<p>Leibniz sur $(x-1)^n(x+1)^n$ : en $x = 1$, seul le terme où $(x-1)^n$ est dérivé $n$ fois survit.</p>`, b: R`<p>Posons $u_n = (x-1)^n(x+1)^n$. Par Leibniz :</p>$$u_n^{(n)} = \sum_{k=0}^n\binom nk\big((x-1)^n\big)^{(k)}\big((x+1)^n\big)^{(n-k)}.$$<p>En $x = 1$, $\big((x-1)^n\big)^{(k)}$ s'annule pour $k\lt n$ et vaut $n!$ pour $k = n$. Donc $u_n^{(n)}(1) = n!\,(1+1)^n = 2^nn!$ et $P_n(1) = 1$.</p><p>$u_n$ est pair, donc $u_n^{(n)}$ a la parité de $n$ (chaque dérivation échange pair et impair) : $P_n(-1) = (-1)^nP_n(1) = (-1)^n$.</p>`, rappels: ["eu-leibniz"] },
    { t: "2) Degré", h: R`<p>$u_n$ est de degré $2n$, de coefficient dominant $1$.</p>`, b: R`<p>$u_n = x^{2n}+\dots$, donc $u_n^{(n)} = \frac{(2n)!}{n!}x^n+\dots$ et $P_n$ est de degré $n$, de coefficient dominant $\frac{(2n)!}{2^n(n!)^2}\neq0$.</p>` },
    { t: "2) Orthogonalité", h: R`<p>$u_n^{(k)}(\pm1) = 0$ pour $k\lt n$ : $n$ intégrations par parties sans crochet.</p>`, b: R`<p>$\pm1$ étant racines d'ordre $n$ de $u_n$, on a $u_n^{(k)}(\pm1) = 0$ pour $0\leqslant k\leqslant n-1$. Soit $Q$ de degré $\lt n$. Par parties :</p>$$\int_{-1}^1u_n^{(n)}Q = \big[u_n^{(n-1)}Q\big]_{-1}^1-\int_{-1}^1u_n^{(n-1)}Q' = -\int_{-1}^1u_n^{(n-1)}Q'.$$<p>En répétant $n$ fois (tous les crochets sont nuls) : $\int_{-1}^1u_n^{(n)}Q = (-1)^n\int_{-1}^1u_nQ^{(n)} = 0$ car $Q^{(n)} = 0$. Donc $(P_n|Q) = 0$.</p>` },
    { t: "3) Dériver deux fois u_{n+1}", h: R`<p>$u'_{n+1} = 2(n+1)xu_n$, puis $x^2u_{n-1} = u_n+u_{n-1}$.</p>`, b: R`<p>$u'_{n+1} = 2(n+1)x(x^2-1)^n = 2(n+1)xu_n$, et $u_n' = 2nxu_{n-1}$, donc</p>$$u''_{n+1} = 2(n+1)\big(u_n+xu_n'\big) = 2(n+1)\big(u_n+2nx^2u_{n-1}\big).$$<p>Or $x^2u_{n-1} = (x^2-1)u_{n-1}+u_{n-1} = u_n+u_{n-1}$, d'où</p>$$u''_{n+1} = 2(n+1)(2n+1)\,u_n+4n(n+1)\,u_{n-1}.$$` },
    { t: "3) Dériver n fois", h: R`<p>$u_{n+1}^{(n+2)} = 2^{n+1}(n+1)!\,P'_{n+1}$, $u_n^{(n)} = 2^nn!\,P_n$, $u_{n-1}^{(n)} = 2^{n-1}(n-1)!\,P'_{n-1}$.</p>`, b: R`<p>Dérivons $n$ fois :</p>$$u_{n+1}^{(n+2)} = 2(n+1)(2n+1)\,u_n^{(n)}+4n(n+1)\,u_{n-1}^{(n)}.$$<p>Avec $u_{n+1}^{(n+2)} = 2^{n+1}(n+1)!\,P'_{n+1}$, $u_n^{(n)} = 2^nn!\,P_n$ et $u_{n-1}^{(n)} = 2^{n-1}(n-1)!\,P'_{n-1}$, puis en divisant par $2^{n+1}(n+1)!$ :</p>$$\begin{aligned}P'_{n+1} &= \frac{2(n+1)(2n+1)2^nn!}{2^{n+1}(n+1)!}P_n+\frac{4n(n+1)2^{n-1}(n-1)!}{2^{n+1}(n+1)!}P'_{n-1}\\ &= (2n+1)P_n+P'_{n-1}.\end{aligned}$$` },
    { t: "4) La norme", h: R`<p>Intégrer contre $P_n$ ; $\int P'_{n-1}P_n = 0$ ; $\int P'_{n+1}P_n = [P_{n+1}P_n]_{-1}^1 = 2$.</p>`, b: R`<p>Faisons le produit scalaire de la relation avec $P_n$ :</p>$$(P'_{n+1}|P_n) = (2n+1)\|P_n\|^2+(P'_{n-1}|P_n).$$<p>$P'_{n-1}$ est de degré $\leqslant n-2\lt n$, donc $(P'_{n-1}|P_n) = 0$ par 2). Par parties, et comme $P'_n$ est de degré $\lt n+1$ :</p>$$(P'_{n+1}|P_n) = \big[P_{n+1}P_n\big]_{-1}^1-\int_{-1}^1P_{n+1}P'_n = 1\cdot1-(-1)^{n+1}(-1)^n-0 = 2.$$<p>Donc $(2n+1)\|P_n\|^2 = 2$ pour $n\geqslant1$, et pour $n = 0$, $\|P_0\|^2 = \int_{-1}^11 = 2$ aussi :</p><div class="sbox">$$\|P_n\| = \sqrt{\frac2{2n+1}}.$$</div>${figLeg}` }
  ],
  piege: R`La relation porte sur les <b>dérivées</b> $P'_{n\pm1}$ ; et c'est l'intégration par parties sur $(P'_{n+1}|P_n)$ (et non la relation elle-même) qui donne la valeur $2$.`,
  methode: R`Formule de Rodrigues : valeurs aux bornes par Leibniz, orthogonalité par $n$ intégrations par parties, norme par une relation de récurrence intégrée.`
},
{ id: "pre-65", ...P, level: 3, time: "35 min",
  title: "Polynômes de Rodrigues : racines, valeurs, orthogonalité, norme (X)",
  enonce: R`<p>On définit $Q_n(X) = \frac1{2^nn!}\big((X^2-1)^n\big)^{(n)}$.</p><ol><li>Soit $n\geqslant1$. Montrer que $Q_n$ possède $n$ racines simples dans $]-1,1[$.</li><li>Montrer que $Q_n = X^n+(X^2-1)R_n$ avec $R_n\in\mathbb R[X]$. En déduire $Q_n(1)$ et $Q_n(-1)$.</li><li>Pour $P,Q\in\mathbb R[X]$, on pose $(P|Q) = \int_{-1}^1PQ$. Montrer que $Q_n$ est orthogonal à $\mathbb R_{n-1}[X]$.</li><li>Calculer $\|Q_n\|^2$.</li></ol>`,
  decode: { donnees: [R`$\pm1$ racines d'ordre $n$ de $(X^2-1)^n$ ; Rolle.`], but: R`Rolle itéré ; récurrence + Leibniz ; IPP ; calcul direct avec l'intégrale de Wallis $\int_{-1}^1(1-t^2)^n$.`, cles: {} },
  steps: [
    { t: "1) Rolle itéré", h: R`<p>Montrer par récurrence sur $k\leqslant n$ : $u^{(k)}$ a au moins $k$ racines distinctes dans $]-1,1[$, et s'annule en $\pm1$ si $k\lt n$.</p>`, b: R`<p>Soit $u = (X^2-1)^n$. Pour $k\leqslant n-1$, $u^{(k)}(\pm1) = 0$ ($\pm1$ racines d'ordre $n$). Montrons par récurrence que $u^{(k)}$ ($0\leqslant k\leqslant n$) a au moins $k$ racines distinctes dans $]-1,1[$. Pour $k = 0$ : rien à montrer. Si $u^{(k)}$ ($k\lt n$) a $k$ racines $a_1\lt\dots\lt a_k$ dans $]-1,1[$, alors avec $a_0 = -1$ et $a_{k+1} = 1$, ce sont $k+2$ zéros de $u^{(k)}$ ; Rolle sur chacun des $k+1$ intervalles $]a_i,a_{i+1}[$ fournit $k+1$ zéros distincts de $u^{(k+1)}$ dans $]-1,1[$.</p><p>Ainsi $Q_n$, proportionnel à $u^{(n)}$, a au moins $n$ racines distinctes dans $]-1,1[$. Comme $\deg Q_n = n$, ce sont toutes ses racines, et elles sont simples.</p>` },
    { t: "2) La forme Xⁿ + (X² − 1)Rₙ", h: R`<p>Récurrence : $Q_{n+1} = \frac1{2^{n+1}(n+1)!}\big(2(n+1)Xu_n\big)^{(n)}$, puis Leibniz.</p>`, b: R`<p>$n = 0$ : $Q_0 = 1 = X^0+(X^2-1)\cdot0$. Supposons le résultat au rang $n$. Avec $u_n = (X^2-1)^n$, $u'_{n+1} = 2(n+1)Xu_n$, donc</p>$$\begin{aligned}Q_{n+1} &= \frac{\big(u'_{n+1}\big)^{(n)}}{2^{n+1}(n+1)!}\\ &= \frac1{2^nn!}\big(Xu_n\big)^{(n)}\\ &= \frac1{2^nn!}\big(Xu_n^{(n)}+nu_n^{(n-1)}\big)\\ &= XQ_n+\frac{n}{2^nn!}u_n^{(n-1)}\end{aligned}$$<p>par Leibniz. Or $\pm1$ sont racines de $u_n^{(n-1)}$ (ordre $n$ dans $u_n$), donc $u_n^{(n-1)} = (X^2-1)S$ pour un polynôme $S$. Avec l'hypothèse de récurrence :</p>$$Q_{n+1} = X^{n+1}+(X^2-1)\Big(XR_n+\frac{n}{2^nn!}S\Big).$$<p>Conséquence : $Q_n(1) = 1$ et $Q_n(-1) = (-1)^n$.</p>`, rappels: ["eu-leibniz"] },
    { t: "3) Orthogonalité", h: R`<p>$n$ intégrations par parties, crochets nuls.</p>`, b: R`<p>Pour $P\in\mathbb R[X]$, comme $u_n^{(k)}(\pm1) = 0$ pour $k\lt n$, $n$ intégrations par parties donnent</p>$$\int_{-1}^1P\,Q_n = \frac{(-1)^n}{2^nn!}\int_{-1}^1P^{(n)}(t)\,(t^2-1)^n\,dt = \frac1{2^nn!}\int_{-1}^1P^{(n)}(t)(1-t^2)^n\,dt.$$<p>Si $P\in\mathbb R_{n-1}[X]$, $P^{(n)} = 0$ : $(P|Q_n) = 0$.</p>` },
    { t: "4) Réduction à une intégrale", h: R`<p>Prendre $P = Q_n$ : $Q_n^{(n)} = \frac{(2n)!}{2^nn!}$.</p>`, b: R`<p>Avec $P = Q_n$, dont le coefficient dominant est $\frac{(2n)!}{2^n(n!)^2}$ : $Q_n^{(n)} = \frac{(2n)!}{2^nn!}$ (constante). Donc</p>$$\|Q_n\|^2 = \frac{(2n)!}{(2^nn!)^2}\,I_n,\qquad I_n = \int_{-1}^1(1-t^2)^n\,dt.$$` },
    { t: "4) Calcul de Iₙ", h: R`<p>Par parties : $I_n = 2n\int t^2(1-t^2)^{n-1} = 2n(I_{n-1}-I_n)$.</p>`, b: R`<p>Par parties ($u = (1-t^2)^n$, $v' = 1$) :</p>$$\begin{aligned}I_n &= \big[t(1-t^2)^n\big]_{-1}^1+2n\int_{-1}^1t^2(1-t^2)^{n-1}dt\\ &= 2n\int_{-1}^1\big(1-(1-t^2)\big)(1-t^2)^{n-1}dt\\ &= 2n(I_{n-1}-I_n).\end{aligned}$$<p>Donc $I_n = \frac{2n}{2n+1}I_{n-1}$ et, avec $I_0 = 2$ :</p>$$I_n = 2\prod_{k=1}^n\frac{2k}{2k+1} = 2\cdot\frac{(2^nn!)^2}{(2n+1)!} = \frac{2^{2n+1}(n!)^2}{(2n+1)!}$$<p>(on a multiplié numérateur et dénominateur par $2\cdot4\cdots2n = 2^nn!$).</p>` },
    { t: "4) Conclusion", h: R`<p>Simplifier.</p>`, b: R`<p>$$\|Q_n\|^2 = \frac{(2n)!}{4^n(n!)^2}\cdot\frac{2^{2n+1}(n!)^2}{(2n+1)!} = \frac{2\,(2n)!}{(2n+1)!} = \frac2{2n+1}.$$<div class="sbox">$$\|Q_n\|^2 = \frac2{2n+1}.$$</div><p>On retrouve la norme des polynômes de Legendre ($Q_n = P_n$) par un calcul direct.</p>` }
  ],
  piege: R`Dans l'itération de Rolle, ne pas oublier les deux zéros $\pm1$ qui persistent tant que $k\lt n$ : ce sont eux qui font gagner une racine à chaque dérivation.`,
  methode: R`Racines d'une dérivée $n$-ième de $(X^2-1)^n$ : Rolle itéré en gardant les zéros aux bornes.`
},
{ id: "pre-66", ...P, level: 3, time: "30 min",
  title: "Distance à {P(0) = 0} pour le poids e^{−t} (Mines)",
  enonce: R`<p>Soient $n\in\mathbb N^*$, $E = \mathbb R_n[X]$ et $\langle P,Q\rangle = \int_0^{+\infty}P(t)Q(t)e^{-t}dt$.</p><ol><li>Justifier la définition de $\langle\cdot,\cdot\rangle$ et montrer que c'est un produit scalaire.</li></ol><p>On pose $F = \{P\in E : P(0) = 0\}$ et on note $(P_0,\dots,P_n)$ l'orthonormalisée de Gram-Schmidt de $(1,X,\dots,X^n)$.</p><ol start="2"><li>Calculer $P_k(0)^2$.</li><li>Déterminer une base de $F^\perp$, exprimée dans la base $(P_0,\dots,P_n)$. En déduire $d(1,F^\perp)$ et $d(1,F)$.</li></ol>`,
  decode: { donnees: [R`$\deg P_k = k$ et $P'_k\in\mathrm{Vect}(P_0,\dots,P_{k-1})$.`], but: R`IPP pour $P_k(0)^2$ ; $F^\perp$ est une droite dirigée par $\sum P_k(0)P_k$.`, cles: {} },
  steps: [
    { t: "1) Produit scalaire", h: R`<p>$t^2P(t)Q(t)e^{-t}\to0$.</p>`, b: R`<p>$t\mapsto P(t)Q(t)e^{-t}$ est continue sur $[0,+\infty[$ et $t^2P(t)Q(t)e^{-t}\to0$ en $+\infty$ : elle est intégrable. Bilinéarité, symétrie et positivité sont claires ; si $\langle P,P\rangle = 0$, $P^2e^{-t}$ continue positive d'intégrale nulle est nulle sur $[0,+\infty[$, donc $P = 0$.</p>`, rappels: ["eu-ps"] },
    { t: "2) P_k(0)² = 1", h: R`<p>$\int_0^{+\infty}P'_kP_ke^{-t} = 0$ ; IPP sur $\frac12(P_k^2)'e^{-t}$.</p>`, b: R`<p>Pour $k\geqslant1$, $P'_k$ est de degré $k-1$, donc $P'_k\in\mathbb R_{k-1}[X] = \mathrm{Vect}(P_0,\dots,P_{k-1})$, orthogonal à $P_k$. Pour $k = 0$, $P'_0 = 0$. Donc, par parties :</p>$$\begin{aligned}0 &= \int_0^{+\infty}P'_k(t)P_k(t)e^{-t}dt\\ &= \Big[\frac12P_k(t)^2e^{-t}\Big]_0^{+\infty}+\frac12\int_0^{+\infty}P_k(t)^2e^{-t}dt\\ &= -\frac12P_k(0)^2+\frac12\|P_k\|^2.\end{aligned}$$<div class="sbox">$$P_k(0)^2 = \|P_k\|^2 = 1.$$</div><p>(Ce sont, au signe près, les polynômes de Laguerre, qui valent $1$ en $0$.)</p>` },
    { t: "3) F⊥ est une droite", h: R`<p>$F$ hyperplan ; $Q = \sum\langle P_k,Q\rangle P_k$ et $P_k-P_k(0)\in F$.</p>`, b: R`<p>$F$ est le noyau de la forme linéaire non nulle $P\mapsto P(0)$ : c'est un hyperplan, et $F^\perp$ est une droite. Soit $Q$ un vecteur directeur. $P_k-P_k(0)\cdot1\in F$, donc $\langle P_k-P_k(0),Q\rangle = 0$, soit $\langle P_k,Q\rangle = P_k(0)\langle1,Q\rangle$. En base orthonormée :</p>$$Q = \sum_{k=0}^n\langle P_k,Q\rangle P_k = \langle1,Q\rangle\sum_{k=0}^nP_k(0)P_k,$$<p>avec $\langle1,Q\rangle\neq0$ (sinon $Q = 0$). Une base de $F^\perp$ est donc</p><div class="sbox">$$Q = \sum_{k=0}^nP_k(0)\,P_k.$$</div><p>On vérifie au passage $\langle Q,P\rangle = \sum P_k(0)\langle P_k,P\rangle = P(0)$ : $Q$ est le représentant de $P\mapsto P(0)$.</p>`, rappels: ["eu-riesz"] },
    { t: "3) Les distances", h: R`<p>$d(1,F) = \|p_{F^\perp}(1)\| = \frac{|\langle1,Q\rangle|}{\|Q\|}$ ; Pythagore.</p>`, b: R`<p>$d(1,F) = \|1-p_F(1)\| = \|p_{F^\perp}(1)\| = \frac{|\langle1,Q\rangle|}{\|Q\|}$. Comme $Q$ représente $P\mapsto P(0)$, $\langle1,Q\rangle = 1$, et $\|Q\|^2 = \sum_kP_k(0)^2 = n+1$. Donc</p>$$d(1,F) = \frac1{\sqrt{n+1}}.$$<p>Par Pythagore, $\|1\|^2 = d(1,F)^2+d(1,F^\perp)^2$ (car $1 = p_F(1)+p_{F^\perp}(1)$, et $d(1,F^\perp) = \|p_F(1)\|$), avec $\|1\|^2 = \int_0^{+\infty}e^{-t}dt = 1$ :</p><div class="sbox">$$d(1,F) = \frac1{\sqrt{n+1}},\qquad d(1,F^\perp) = \sqrt{\frac n{n+1}}.$$</div>`, rappels: ["eu-dist"] }
  ],
  piege: R`Quand $n\to\infty$, $d(1,F)\to0$ : dans $\mathbb R[X]$ tout entier, $1$ est adhérent à $\{P(0) = 0\}$, encore un hyperplan non fermé.`,
  methode: R`Distance à un hyperplan $\ker\varphi$ : trouver le représentant $Q$ de $\varphi$, puis $d(x,\ker\varphi) = \frac{|\varphi(x)|}{\|Q\|}$.`
},
{ id: "pre-67", ...P, level: 4, time: "40 min",
  title: "Quadrature de Gauss (Ker Lann)",
  enonce: R`<p>Soient $a\lt b$. On identifie polynôme et fonction polynomiale sur $[a,b]$, et on munit $E = \mathcal C([a,b],\mathbb R)$ de $(f|g) = \int_a^bf(t)g(t)\,dt$. Soit $n\in\mathbb N$.</p><ol><li>Montrer qu'il existe un polynôme $G$ de degré $n+1$ orthogonal à $\mathbb R_n[X]$.</li><li>Montrer que $G$ admet exactement $n+1$ racines distinctes, toutes dans $]a,b[$.</li></ol><p>On note $x_0,\dots,x_n$ ces racines et, pour des réels $\omega_0,\dots,\omega_n$ et $f\in E$, $\mathcal E(f) = \int_a^bf(t)dt-\sum_{k=0}^n\omega_kf(x_k)$.</p><ol start="3"><li>Montrer qu'on peut choisir les $\omega_k$ de sorte que $\mathcal E(P) = 0$ pour tout $P\in\mathbb R_n[X]$.</li><li>Vérifier qu'alors $\mathcal E(P) = 0$ pour tout $P$ de degré $\leqslant2n+1$.</li><li>Justifier que les $\omega_k$ sont strictement positifs.</li></ol>`,
  decode: { donnees: [R`$\mathbb R_n[X]$ est de dimension finie ; polynômes de Lagrange $L_k$ aux points $x_k$.`], but: R`$G = X^{n+1}-p(X^{n+1})$ ; signe constant pour les racines ; $\omega_k = \int L_k$ ; division euclidienne par $G$.`, cles: {} },
  steps: [
    { t: "1) Existence de G", h: R`<p>$G = X^{n+1}-p_{\mathbb R_n[X]}(X^{n+1})$.</p>`, b: R`<p>$\mathbb R_n[X]$ est de dimension finie : la projection orthogonale $p$ sur ce sous-espace existe. $G = X^{n+1}-p(X^{n+1})$ est orthogonal à $\mathbb R_n[X]$, et de degré $n+1$ (unitaire) car $p(X^{n+1})\in\mathbb R_n[X]$.</p>`, rappels: ["eu-dist"] },
    { t: "2) Les racines", h: R`<p>Soient $x_1,\dots,x_p$ les racines de $G$ dans $]a,b[$ de multiplicité impaire ; si $p\lt n+1$, tester avec $Q = \prod(X-x_i)$.</p>`, b: R`<p>Notons $y_1,\dots,y_p$ les racines distinctes de $G$ appartenant à $]a,b[$ et de multiplicité impaire. Supposons $p\leqslant n$ et posons $Q = \prod_{i=1}^p(X-y_i)\in\mathbb R_n[X]$ ($Q = 1$ si $p = 0$). Alors $GQ$ ne change pas de signe sur $[a,b]$ (chaque changement de signe de $G$ dans $]a,b[$ est compensé par $Q$), et n'est pas identiquement nul. Donc $\int_a^bGQ\neq0$, alors que $G\perp\mathbb R_n[X]$ impose $(G|Q) = 0$. Contradiction.</p><p>Donc $p\geqslant n+1 = \deg G$ : $G$ a exactement $n+1$ racines distinctes, toutes dans $]a,b[$, et elles sont simples.</p>` },
    { t: "3) Choix des poids", h: R`<p>$\omega_k = \int_a^bL_k$.</p>`, b: R`<p>Soient $L_0,\dots,L_n$ les polynômes de Lagrange aux points $x_0,\dots,x_n$, et $\omega_k = \int_a^bL_k(t)dt$. Pour $P\in\mathbb R_n[X]$, $P = \sum_kP(x_k)L_k$, donc</p>$$\int_a^bP = \sum_{k=0}^nP(x_k)\int_a^bL_k = \sum_{k=0}^n\omega_kP(x_k) :\quad\mathcal E(P) = 0.$$<p>(Réciproquement, ce choix est le seul : $\mathcal E(L_j) = 0$ impose $\omega_j = \int L_j$.)</p>`, rappels: ["eu-lagrange"] },
    { t: "4) Exactitude jusqu'au degré 2n + 1", h: R`<p>Division euclidienne $P = GQ+R$ avec $\deg Q\leqslant n$, $\deg R\leqslant n$.</p>`, b: R`<p>Soit $P$ de degré $\leqslant2n+1$. Division euclidienne par $G$ (degré $n+1$) : $P = GQ+R$ avec $\deg R\leqslant n$ et $\deg Q\leqslant n$. Alors</p>$$\int_a^bP = \underbrace{\int_a^bGQ}_{=0\ (G\perp\mathbb R_n[X])}+\int_a^bR = \sum_k\omega_kR(x_k) = \sum_k\omega_kP(x_k),$$<p>car $P(x_k) = G(x_k)Q(x_k)+R(x_k) = R(x_k)$. Donc $\mathcal E(P) = 0$ : avec seulement $n+1$ points, la méthode est exacte jusqu'au degré $2n+1$.</p>` },
    { t: "5) Positivité des poids", h: R`<p>Appliquer 4) à $L_k^2$, de degré $2n$.</p>`, b: R`<p>$L_k^2$ est de degré $2n\leqslant2n+1$, donc</p>$$\int_a^bL_k^2 = \sum_{j=0}^n\omega_jL_k(x_j)^2 = \omega_k.$$<p>$L_k^2$ est continue, positive et non identiquement nulle ($L_k(x_k) = 1$) : $\omega_k = \int_a^bL_k^2>0$.</p><p>Exemple ($[a,b] = [-1,1]$, $n = 1$) : $G = X^2-\frac13$, nœuds $\pm\frac1{\sqrt3}$, poids $1$ et $1$ : $\int_{-1}^1P\approx P(-\frac1{\sqrt3})+P(\frac1{\sqrt3})$, exacte pour les polynômes de degré $\leqslant3$.</p>` }
  ],
  piege: R`On ne peut pas faire mieux que $2n+1$ : pour $P = G^2$ (degré $2n+2$), $\int G^2>0$ alors que $\sum\omega_kG(x_k)^2 = 0$.`,
  methode: R`Quadrature de Gauss : nœuds = racines du polynôme orthogonal de degré $n+1$, poids = intégrales des polynômes de Lagrange.`
},
{ id: "pre-68", ...P, level: 3, time: "40 min",
  title: "Polynômes d'Hermite : expérimentation Python et orthogonalité (Centrale)",
  enonce: R`<p>Soit $\varphi : x\mapsto e^{-x^2/2}$ et, pour $n\in\mathbb N$, $H_n : x\mapsto(-1)^ne^{x^2/2}\varphi^{(n)}(x)$. Pour $P,Q\in\mathbb R[X]$, on pose</p>$$\langle P,Q\rangle = \frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}P(t)Q(t)e^{-t^2/2}dt.$$<ol><li>On admet provisoirement que les $H_n$ sont polynomiales et vérifient $H_{n+1} = XH_n-nH_{n-1}$ pour $n\in\mathbb N^*$. Avec Python :<br>(i) écrire une fonction <code>H(n, x)</code> calculant $H_n(x)$ ;<br>(ii) tracer $H_0,\dots,H_{10}$ ;<br>(iii) calculer la matrice $\big(\langle H_i,H_j\rangle\big)_{0\leqslant i,j\leqslant10}$ et vérifier numériquement l'orthogonalité.</li><li>Justifier la convergence de l'intégrale définissant $\langle P,Q\rangle$ et montrer que c'est un produit scalaire sur $\mathbb R[X]$.</li><li>Démontrer la relation de récurrence admise en 1.</li><li>Calculer $\langle H_n,H_n\rangle$ et montrer que $(H_n)$ est orthogonale.</li></ol>`,
  decode: { donnees: [R`$\varphi' = -x\varphi$ ; $\int_{-\infty}^{+\infty}e^{-t^2/2}dt = \sqrt{2\pi}$.`], but: R`Leibniz sur $\varphi' = -x\varphi$ pour la récurrence ; intégrations par parties pour l'orthogonalité.`, cles: {} },
  steps: [
    { t: "1) Le code Python", h: R`<p>Calcul itératif avec la récurrence (pas de récursivité naïve, qui recalcule tout).</p>`, b: R`<p>(i) Une version itérative (une fonction récursive directe ferait un nombre exponentiel d'appels) :</p><pre>def H(n, x):
    h0, h1 = 1 + 0 * x, x      # H_0 et H_1 (le 0*x garde la forme d'un tableau numpy)
    if n == 0:
        return h0
    for k in range(1, n):
        h0, h1 = h1, x * h1 - k * h0   # H_{k+1} = x H_k - k H_{k-1}
    return h1</pre><p>(ii) Tracé :</p><pre>import numpy as np
import matplotlib.pyplot as plt
x = np.linspace(-4, 4, 400)
for k in range(11):
    plt.plot(x, H(k, x), label=f"H{k}")
plt.ylim(-200, 200); plt.legend(); plt.show()</pre><p>(iii) Matrice de Gram (calcul de chaque coefficient une seule fois, par symétrie) :</p><pre>from scipy.integrate import quad
def ps(i, j):
    f = lambda t: H(i, t) * H(j, t) * np.exp(-t**2 / 2)
    return quad(f, -np.inf, np.inf)[0] / np.sqrt(2 * np.pi)
G = np.zeros((11, 11))
for i in range(11):
    for j in range(i + 1):
        G[i, j] = G[j, i] = ps(i, j)
print(np.round(G, 6))</pre><p>On observe une matrice diagonale, de coefficients diagonaux $1,1,2,6,24,\dots,10!$ : orthogonalité et $\langle H_n,H_n\rangle = n!$ (aux erreurs d'arrondi près).</p>` },
    { t: "2) Produit scalaire", h: R`<p>$t^2P(t)Q(t)e^{-t^2/2}\to0$ en $\pm\infty$.</p>`, b: R`<p>$f : t\mapsto P(t)Q(t)e^{-t^2/2}$ est continue sur $\mathbb R$, et par croissances comparées $t^2f(t)\to0$ en $\pm\infty$, donc $f(t) = o(1/t^2)$ : $f$ est intégrable sur $\mathbb R$. Bilinéarité et symétrie : claires. $\langle P,P\rangle\geqslant0$, et si $\langle P,P\rangle = 0$, la fonction continue positive $P^2e^{-t^2/2}$ est nulle sur $\mathbb R$, donc $P = 0$.</p>`, rappels: ["eu-ps"] },
    { t: "3) Récurrence", h: R`<p>Dériver $n$ fois $\varphi' = -x\varphi$ par Leibniz.</p>`, b: R`<p>$\varphi'(x) = -x\varphi(x)$. Par Leibniz, $(x\varphi)^{(n)} = x\varphi^{(n)}+n\varphi^{(n-1)}$, donc</p>$$\varphi^{(n+1)} = -x\varphi^{(n)}-n\varphi^{(n-1)}.$$<p>Multiplions par $(-1)^{n+1}e^{x^2/2}$ :</p>$$H_{n+1} = x\cdot(-1)^ne^{x^2/2}\varphi^{(n)}+n(-1)^ne^{x^2/2}\varphi^{(n-1)} = xH_n-nH_{n-1}.$$<p>Avec $H_0 = 1$ et $H_1 = -e^{x^2/2}\varphi' = x$, une récurrence double montre que $H_n$ est polynomial, unitaire, de degré $n$, et de la parité de $n$. Exemples : $H_2 = X^2-1$, $H_3 = X^3-3X$.</p>`, rappels: ["eu-leibniz"] },
    { t: "4) Intégrations par parties", h: R`<p>$\langle H_n,H_m\rangle = \frac{(-1)^m}{\sqrt{2\pi}}\int H_n\varphi^{(m)}$ ; IPP $m$ fois.</p>`, b: R`<p>Soient $n\leqslant m$. Comme $H_m(x)e^{-x^2/2} = (-1)^m\varphi^{(m)}(x)$ :</p>$$\langle H_n,H_m\rangle = \frac{(-1)^m}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}H_n(x)\varphi^{(m)}(x)\,dx.$$<p>Pour $j\lt m$, $\varphi^{(j)} = (-1)^jH_j\varphi$ est un polynôme fois $e^{-x^2/2}$, qui tend vers $0$ en $\pm\infty$, de même que $H_n^{(i)}\varphi^{(j)}$. Une intégration par parties donne donc $\int H_n\varphi^{(m)} = -\int H'_n\varphi^{(m-1)}$, et en itérant $m$ fois :</p>$$\langle H_n,H_m\rangle = \frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}H_n^{(m)}(x)\,\varphi(x)\,dx.$$` },
    { t: "4) Conclusion", h: R`<p>$m>n$ : $H_n^{(m)} = 0$. $m = n$ : $H_n^{(n)} = n!$.</p>`, b: R`<p>Si $m>n$, $H_n^{(m)} = 0$ car $\deg H_n = n$ : $\langle H_n,H_m\rangle = 0$. Si $m = n$, $H_n$ unitaire de degré $n$ donne $H_n^{(n)} = n!$ et</p>$$\langle H_n,H_n\rangle = \frac{n!}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{-x^2/2}dx = n!.$$<div class="sbox"><p>$(H_n)$ est une famille orthogonale de $\mathbb R[X]$, avec $\|H_n\|^2 = n!$ ; $\big(\frac{H_n}{\sqrt{n!}}\big)$ est une base orthonormée de $\mathbb R[X]$.</p></div><p>Ce sont les résultats observés numériquement en 1. Remarque : $\langle\cdot,\cdot\rangle$ est l'espérance $\mathbb E\big(P(Z)Q(Z)\big)$ pour $Z\sim\mathcal N(0,1)$, et $\langle H_0,H_0\rangle = 1$ traduit que la densité gaussienne est d'intégrale $1$.</p>` }
  ],
  piege: R`Une implémentation récursive naïve de <code>H(n, x)</code> appelle deux fois la fonction à chaque niveau : coût exponentiel. Itérer ou mémoïser.`,
  methode: R`Polynômes définis par une formule de Rodrigues (dérivées $n$-ièmes d'un poids) : orthogonalité par $m$ intégrations par parties, et norme via la dérivée $n$-ième du polynôme unitaire.`
}
]);
})();

/* Oraux de mathématiques : 17 chapitres, chacun découpé par concours.
   Matière cachée : elle n'apparaît que dans la page « Oraux ».
   Chaque exercice porte un champ concours : "ccinp", "mt" (Mines-Télécom), "c1" (Centrale Maths 1) ou "mp" (Mines-Ponts). */

const CC4 = ["ccinp", "mt", "c1", "mp"];
LEMME.CONCOURS = { ccinp: "CCINP", mt: "Mines-Télécom", c1: "Centrale Maths 1", mp: "Mines-Ponts" };

LEMME.subject({
  id: "oraux", name: "Oraux de maths", short: "Oraux", sym: "◎", hidden: true, home: "#oraux-maths",
  intro: "Les exercices d'oral classés par chapitre et par concours, corrigés pas à pas.",
  years: {
    mpsi: [],
    mp: [
      { ...C("Algèbre linéaire", "Sous-espaces, applications linéaires, rang, projecteurs, polynômes, matrices, déterminants"), cc: CC4 },
      { ...C("Réduction des endomorphismes et des matrices", "Valeurs propres, diagonalisation, trigonalisation, polynômes annulateurs"), cc: CC4 },
      { ...C("Espaces préhilbertiens", "Produit scalaire, Cauchy-Schwarz, orthogonalité, projection orthogonale"), cc: ["ccinp", "mt", "mp"] },
      { ...C("Endomorphismes des espaces euclidiens", "Isométries, matrices orthogonales, endomorphismes autoadjoints, théorème spectral"), cc: CC4 },
      { ...C("Structures algébriques et arithmétique", "Groupes, anneaux, idéaux, arithmétique dans ℤ et K[X]"), cc: ["ccinp", "c1", "mp"] },
      { ...C("Dénombrement", "Cardinaux, listes, combinaisons, formules de dénombrement"), cc: ["ccinp", "mt"] },
      { ...C("Suites et séries numériques", "Convergence, comparaison, séries alternées, sommation des relations de comparaison"), cc: CC4 },
      { ...C("Suites et séries de fonctions", "Convergence simple, uniforme, normale, interversions"), cc: CC4 },
      { ...C("Intégration", "Intégrales sur un intervalle quelconque, intégrabilité, convergence dominée"), cc: CC4 },
      { ...C("Intégrales à paramètres", "Continuité et dérivation sous l'intégrale, fonction Gamma"), cc: CC4 },
      { ...C("Séries entières", "Rayon de convergence, développements, équations différentielles"), cc: CC4 },
      { ...C("Espaces vectoriels normés", "Normes, topologie, compacité, continuité, dimension finie"), cc: CC4 },
      { ...C("Fonction d'une variable réelle", "Dérivabilité, convexité, formules de Taylor"), cc: ["mt", "c1", "mp"] },
      { ...C("Équations différentielles", "Équations linéaires scalaires et systèmes, wronskien"), cc: CC4 },
      { ...C("Fonctions de plusieurs variables", "Différentielle, dérivées partielles, extremums"), cc: ["ccinp", "mt", "mp"] },
      { ...C("Probabilités", "Espaces probabilisés, conditionnement, indépendance"), cc: ["ccinp", "mt", "mp"] },
      { ...C("Variables aléatoires", "Lois discrètes, espérance, variance, fonctions génératrices, inégalités"), cc: CC4 }
    ]
  }
});

LEMME.rappels({
  "o-supplementaires": { t: "Sous-espaces supplémentaires", b: R`$F\oplus G = E$ signifie : tout $x\in E$ s'écrit <b>de façon unique</b> $x = y+z$ avec $y\in F$ et $z\in G$. Équivalent à : $F+G = E$ et $F\cap G = \{0\}$. En dimension finie : $\dim E = \dim F+\dim G$.` },
  "o-grassmann": { t: "Formule de Grassmann", b: R`$\dim(F+G) = \dim F+\dim G-\dim(F\cap G)$. En particulier $\dim(F+G)\leqslant\dim F+\dim G$, avec égalité si et seulement si $F\cap G = \{0\}$.` },
  "o-projecteur": { t: "Projecteur", b: R`$p\in\mathcal L(E)$ est un projecteur si $p\circ p = p$. Alors $E = \ker p\oplus\operatorname{Im} p$, et $p(x) = x$ pour tout $x\in\operatorname{Im} p$. Si $p$ est un projecteur, $\mathrm{Id}-p$ aussi.` },
  "o-trace-projecteur": { t: "Trace d'un projecteur", b: R`Si $p$ est un projecteur en dimension finie, $\operatorname{tr}(p) = \operatorname{rg}(p)$ : dans une base adaptée à $\operatorname{Im} p\oplus\ker p$, sa matrice est $\begin{pmatrix}I_r&0\\0&0\end{pmatrix}$.` },
  "o-dim-L": { t: "Dimension de L(E)", b: R`Si $\dim E = n$, alors $\dim\mathcal L(E) = n^2$ : une application linéaire est entièrement décrite par sa matrice $n\times n$.` },
  "o-injectif-dim": { t: "Application linéaire injective", b: R`$\Phi$ linéaire est injective si et seulement si $\ker\Phi = \{0\}$. Si $\Phi : A\to B$ est linéaire injective en dimension finie, alors $\dim A\leqslant\dim B$ (théorème du rang).` },
  "o-dim-finie-bij": { t: "Endomorphisme en dimension finie", b: R`Si $\dim E$ est finie et $u\in\mathcal L(E)$ : $u$ injectif $\iff u$ surjectif $\iff u$ bijectif. C'est faux en dimension infinie : la dérivation sur $\mathbb R[X]$ est surjective mais pas injective.` },
  "o-racines-infinies": { t: "Un polynôme avec une infinité de racines", b: R`Un polynôme non nul de degré $d$ a au plus $d$ racines. Donc un polynôme qui s'annule en une infinité de points est le polynôme nul.` },
  "o-echelonnee": { t: "Famille échelonnée en degré", b: R`Une famille $(P_0,\dots,P_n)$ avec $\deg P_k = k$ est libre. Si elle a $n+1$ éléments dans $\mathbb R_n[X]$, de dimension $n+1$, c'est une base.` },
  "o-nilpotent": { t: "Endomorphisme nilpotent", b: R`$u$ est nilpotent s'il existe $p$ avec $u^p = 0$. L'indice de nilpotence est le plus petit tel $p$ : $u^p = 0$ mais $u^{p-1}\neq0$.` },
  "o-base-image": { t: "Image et base", b: R`Si $(e_0,\dots,e_n)$ est une base de $E$, alors $\operatorname{Im} u = \operatorname{Vect}\big(u(e_0),\dots,u(e_n)\big)$. Une application linéaire nulle sur une base est nulle.` },
  "o-multiplicite": { t: "Racine multiple", b: R`$a$ est racine d'ordre au moins $m$ de $P$ si et seulement si $P(a) = P'(a) = \dots = P^{(m-1)}(a) = 0$, si et seulement si $(X-a)^m$ divise $P$.` },
  "o-taylor-poly": { t: "Formule de Taylor pour les polynômes", b: R`Pour $P\in\mathbb R[X]$ de degré au plus $n$ et $a\in\mathbb R$ : $$P = \sum_{k=0}^{n}\frac{P^{(k)}(a)}{k!}(X-a)^k.$$ C'est une égalité exacte, sans reste.` },
  "o-derivee-puissance": { t: "Dériver (X − a)^k", b: R`Pour $j\leqslant k$ : $\big((X-a)^k\big)^{(j)} = \dfrac{k!}{(k-j)!}(X-a)^{k-j}$. Pour $j>k$, c'est $0$. En $X = a$, seule la valeur $j = k$ donne un résultat non nul, égal à $k!$.` },
  "o-iso-dim": { t: "Isomorphisme et dimensions", b: R`Si $f : E\to F$ est linéaire injective et $\dim E = \dim F$ finie, alors $f$ est un isomorphisme.` },
  "o-rang-thm": { t: "Théorème du rang", b: R`Si $E$ est de dimension finie et $f\in\mathcal L(E,F)$ : $\dim E = \operatorname{rg}(f)+\dim\ker f$. Ici $\operatorname{rg}(f) = \dim\operatorname{Im} f$.` },
  "o-image-auto-base": { t: "Image d'une base par un automorphisme", b: R`Un automorphisme envoie une base sur une base : il conserve la liberté (injectivité) et le nombre de vecteurs.` },
  "o-dev-det": { t: "Développement d'un déterminant", b: R`Selon la colonne $j$ : $\det A = \sum_i(-1)^{i+j}a_{ij}\Delta_{ij}$, où $\Delta_{ij}$ est le déterminant obtenu en supprimant la ligne $i$ et la colonne $j$. Le signe $(-1)^{i+j}$ suit un damier qui commence par $+$ en haut à gauche.` },
  "o-trigo-somme": { t: "Somme de deux sinus", b: R`$\sin(a+b)+\sin(a-b) = 2\sin a\cos b$. On l'obtient en additionnant $\sin(a\pm b) = \sin a\cos b\pm\cos a\sin b$.` },
  "o-rec-double": { t: "Récurrence double", b: R`Si $\mathcal H_1$ et $\mathcal H_2$ sont vraies, et si $(\mathcal H_{n-2}$ et $\mathcal H_{n-1})\implies\mathcal H_n$ pour tout $n\geqslant3$, alors $\mathcal H_n$ est vraie pour tout $n\geqslant1$.` },
  "o-rang-equiv": { t: "Rang et matrices équivalentes", b: R`Multiplier par une matrice inversible ne change pas le rang : $\operatorname{rg}(PMQ) = \operatorname{rg}(M)$ si $P,Q\in GL_n(\mathbb K)$. Et $\operatorname{rg} M = r\iff$ il existe $P,Q$ inversibles avec $PMQ = J_r = \begin{pmatrix}I_r&0\\0&0\end{pmatrix}$.` },
  "o-blocs": { t: "Produit par blocs", b: R`On multiplie des matrices par blocs comme des matrices $2\times2$, à condition que les tailles soient compatibles et en respectant l'ordre des produits : $$\begin{pmatrix}A&B\\C&D\end{pmatrix}\begin{pmatrix}A'&B'\\C'&D'\end{pmatrix} = \begin{pmatrix}AA'+BC'&AB'+BD'\\CA'+DC'&CB'+DD'\end{pmatrix}.$$` },
  "o-trace-tBB": { t: "La trace de BᵀB", b: R`Pour toute matrice réelle $B$ : $\operatorname{tr}(B^\top B) = \sum_{i,j}b_{ij}^2$. Donc $B^\top B = 0$ implique $B = 0$.` }
});

LEMME.exercises([
{
  id: "o-al-1", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 5, time: "45 min",
  title: "Deux sous-espaces supplémentaires de L(E) qui anticommutent",
  enonce: R`<p>Soit $E$ un espace vectoriel de dimension finie $n$, et $L_1$, $L_2$ deux sous-espaces <span data-k="supp">supplémentaires</span> de $\mathcal L(E)$ tels que</p>$$\forall(u,v)\in L_1\times L_2,\quad u\circ v+v\circ u = 0.$$<ol><li>Montrer qu'il existe deux <span data-k="proj">projecteurs</span> $p_1\in L_1$ et $p_2\in L_2$ tels que $\mathrm{Id}_E = p_1+p_2$.</li><li>Montrer que $n = \operatorname{rg}(p_1)+\operatorname{rg}(p_2)$.</li><li>Soit $u\in L_1$. Montrer que si $x\in\operatorname{Im}(p_2)$ alors $u(x) = 0$, et que si $x\in\ker(p_2)$ alors $u(x)\in\ker(p_2)$.</li><li>En déduire que $\dim L_1\leqslant\big(n-\operatorname{rg}(p_2)\big)^2$. Quelle inégalité a-t-on pour $\dim L_2$ ?</li><li>Justifier que $\dim\mathcal L(E) = \dim L_1+\dim L_2$.</li><li>Montrer que $\operatorname{rg}(p_1)\operatorname{rg}(p_2)\leqslant0$, puis que $L_1 = \{0\}$ ou $L_2 = \{0\}$.</li></ol>`,
  decode: {
    donnees: [R`$\mathcal L(E) = L_1\oplus L_2$ : chaque endomorphisme se coupe de façon unique en un morceau de $L_1$ et un morceau de $L_2$.`, R`Un élément de $L_1$ et un élément de $L_2$ <b>anticommutent</b> : $uv = -vu$.`],
    but: R`Montrer que cette situation est impossible, sauf si l'un des deux sous-espaces est nul.`,
    cles: {
      supp: R`$L_1\cap L_2 = \{0\}$ et $L_1+L_2 = \mathcal L(E)$ : tout endomorphisme s'écrit de façon unique $u_1+u_2$ avec $u_1\in L_1$, $u_2\in L_2$.`,
      proj: R`Un projecteur vérifie $p\circ p = p$ : appliquer $p$ deux fois revient à l'appliquer une fois.`,
      decomp: R`On décompose l'endomorphisme $\mathrm{Id}_E$ selon $L_1\oplus L_2$. C'est possible pour n'importe quel élément de $\mathcal L(E)$.`,
      restr: R`$u_{|K}$ est l'endomorphisme de $K$ qui envoie $x\in K$ sur $u(x)$. Il n'a de sens que parce que $u(K)\subset K$ (question 3).`,
      astuce: R`Une égalité $y = -y$ donne $2y = 0$, donc $y = 0$. C'est l'astuce qui remplace l'argument « valeur propre $-1$ » du livre.`
    }
  },
  steps: [
    { t: "Q1 · Décomposer l'identité", b: R`<p>$\mathrm{Id}_E$ est un élément de $\mathcal L(E) = L_1\oplus L_2$. On peut donc le <span data-k="decomp">décomposer</span> : il existe un unique couple $(p_1,p_2)\in L_1\times L_2$ tel que</p>$$\mathrm{Id}_E = p_1+p_2,\quad\text{autrement dit}\quad p_2 = \mathrm{Id}_E-p_1.$$<p>Il reste à montrer que $p_1$ et $p_2$ sont des projecteurs.</p>`, rappels: ["o-supplementaires"] },
    { t: "Q1 · Utiliser l'anticommutation", b: R`<p>On applique l'hypothèse avec $u = p_1\in L_1$ et $v = p_2\in L_2$ :</p>$$p_1\circ p_2+p_2\circ p_1 = 0.$$<p>On remplace $p_2$ par $\mathrm{Id}_E-p_1$ et on développe (la composition est distributive) :</p>$$p_1\circ(\mathrm{Id}_E-p_1)+(\mathrm{Id}_E-p_1)\circ p_1 = (p_1-p_1^2)+(p_1-p_1^2) = 2p_1-2p_1^2.$$<p>Donc $2p_1-2p_1^2 = 0$, c'est-à-dire $p_1^2 = p_1$ : $p_1$ est un projecteur.</p>`, rappels: ["o-projecteur"] },
    { t: "Q1 · Et p₂ ?", b: R`<p>$p_2 = \mathrm{Id}_E-p_1$, et on calcule directement :</p>$$p_2^2 = (\mathrm{Id}_E-p_1)^2 = \mathrm{Id}_E-2p_1+p_1^2 = \mathrm{Id}_E-2p_1+p_1 = \mathrm{Id}_E-p_1 = p_2.$$<p>On a pu développer $(\mathrm{Id}-p_1)^2$ comme une identité remarquable car $\mathrm{Id}$ commute avec $p_1$. Donc $p_2$ est aussi un projecteur.</p>`, rappels: ["o-projecteur"] },
    { t: "Q2 · Montrer que ker p₁ = Im p₂", b: R`<ul><li>Si $x\in\ker p_1$ : $x = p_1(x)+p_2(x) = 0+p_2(x)$, donc $x\in\operatorname{Im} p_2$.</li><li>Si $x\in\operatorname{Im} p_2$ : comme $p_2$ est un projecteur, $p_2(x) = x$, donc $p_1(x) = x-p_2(x) = 0$ et $x\in\ker p_1$.</li></ul><p>Ainsi $\ker p_1 = \operatorname{Im} p_2$.</p>`, rappels: ["o-projecteur"] },
    { t: "Q2 · Conclure par le théorème du rang", b: R`<p>Appliqué à $p_1$ :</p>$$n = \operatorname{rg}(p_1)+\dim\ker p_1 = \operatorname{rg}(p_1)+\dim\operatorname{Im} p_2 = \operatorname{rg}(p_1)+\operatorname{rg}(p_2).$$<p><b>Autre méthode en une ligne :</b> la trace d'un projecteur est son rang, donc $n = \operatorname{tr}(\mathrm{Id}_E) = \operatorname{tr}(p_1)+\operatorname{tr}(p_2) = \operatorname{rg}(p_1)+\operatorname{rg}(p_2)$.</p>`, rappels: ["o-rang-thm", "o-trace-projecteur"] },
    { t: "Q3 · Si x ∈ Im p₂, alors u(x) = 0", b: R`<p>Soit $u\in L_1$. Comme $p_2\in L_2$, l'hypothèse donne $u\circ p_2+p_2\circ u = 0$. Soit $x\in\operatorname{Im} p_2$, donc $p_2(x) = x$. En appliquant l'égalité à $x$ :</p>$$u(x)+p_2\big(u(x)\big) = 0,\quad\text{donc}\quad p_2\big(u(x)\big) = -u(x).\qquad(1)$$<p>On applique $p_2$ à $(1)$ et on utilise $p_2^2 = p_2$ : $p_2\big(u(x)\big) = -p_2\big(u(x)\big)$. <span data-k="astuce">Donc $p_2\big(u(x)\big) = 0$</span>, puis par $(1)$, $u(x) = 0$.</p>` },
    { t: "Q3 · Si x ∈ ker p₂, alors u(x) ∈ ker p₂", b: R`<p>Soit $x\in\ker p_2$, donc $p_2(x) = 0$. La même égalité appliquée à $x$ donne</p>$$u\big(p_2(x)\big)+p_2\big(u(x)\big) = u(0)+p_2\big(u(x)\big) = p_2\big(u(x)\big) = 0.$$<p>Donc $u(x)\in\ker p_2$ : le sous-espace $K = \ker p_2$ est stable par $u$.</p>` },
    { t: "Q4 · Une application vers L(K)", b: R`<p>On note $K = \ker p_2$ et $r = \operatorname{rg}(p_2)$. Par le théorème du rang, $\dim K = n-r$. Grâce à Q3, chaque $u\in L_1$ envoie $K$ dans $K$. On peut donc définir</p>$$\Phi : L_1\to\mathcal L(K),\qquad u\mapsto u_{|K}.$$<p>C'est la <span data-k="restr">restriction</span> de $u$ à $K$. $\Phi$ est linéaire : $(\lambda u+v)_{|K} = \lambda u_{|K}+v_{|K}$.</p>` },
    { t: "Q4 · Φ est injective", b: R`<p>Soit $u\in L_1$ avec $\Phi(u) = 0$, c'est-à-dire $u(x) = 0$ pour tout $x\in K$. Soit $x\in E$. Comme $p_2$ est un projecteur, $E = \ker p_2\oplus\operatorname{Im} p_2$, donc $x = x_1+x_2$ avec $x_1\in\ker p_2$ et $x_2\in\operatorname{Im} p_2$. Alors</p>$$u(x) = u(x_1)+u(x_2) = 0+0 = 0,$$<p>car $u(x_1) = 0$ (hypothèse sur $u$) et $u(x_2) = 0$ (question 3). Donc $u = 0$ : $\Phi$ est injective.</p>`, rappels: ["o-projecteur", "o-injectif-dim"] },
    { t: "Q4 · Conclure", b: R`<p>$\Phi$ est linéaire injective, donc $\dim L_1\leqslant\dim\mathcal L(K) = (\dim K)^2$ :</p>$$\dim L_1\leqslant(n-r)^2 = \big(n-\operatorname{rg}(p_2)\big)^2.$$<p>En échangeant les rôles de $L_1$ et $L_2$ (l'hypothèse est symétrique, car $vu+uv = uv+vu$) : $\dim L_2\leqslant\big(n-\operatorname{rg}(p_1)\big)^2 = \operatorname{rg}(p_2)^2 = r^2$, en utilisant Q2.</p>`, rappels: ["o-injectif-dim", "o-dim-L"] },
    { t: "Q5 · Dimension de L(E)", b: R`<p>$L_1$ et $L_2$ sont supplémentaires dans $\mathcal L(E)$, donc $L_1\cap L_2 = \{0\}$ et, par Grassmann :</p>$$n^2 = \dim\mathcal L(E) = \dim(L_1\oplus L_2) = \dim L_1+\dim L_2.$$`, rappels: ["o-grassmann", "o-dim-L"] },
    { t: "Q6 · L'inégalité", b: R`<p>On combine Q4 et Q5 :</p>$$n^2 = \dim L_1+\dim L_2\leqslant(n-r)^2+r^2 = n^2-2nr+2r^2.$$<p>En simplifiant par $n^2$ : $0\leqslant2r(r-n)$, soit $r(n-r)\leqslant0$. Or $n-r = \operatorname{rg}(p_1)$ par Q2, donc</p>$$\operatorname{rg}(p_1)\operatorname{rg}(p_2)\leqslant0.$$` },
    { t: "Q6 · Conclure", b: R`<p>Un produit de deux entiers positifs qui est $\leqslant0$ est nul : $\operatorname{rg}(p_2) = 0$ ou $\operatorname{rg}(p_1) = 0$.</p><ul><li>Si $r = \operatorname{rg}(p_2) = 0$ : $0\leqslant\dim L_2\leqslant r^2 = 0$, donc $L_2 = \{0\}$.</li><li>Si $\operatorname{rg}(p_1) = 0$, c'est-à-dire $r = n$ : $0\leqslant\dim L_1\leqslant(n-r)^2 = 0$, donc $L_1 = \{0\}$.</li></ul><p><b>Pour comprendre :</b> l'hypothèse est extrêmement forte. Si par exemple $L_1 = \operatorname{Vect}(\mathrm{Id}_E)$, il faudrait $\mathrm{Id}\circ v+v\circ\mathrm{Id} = 2v = 0$ pour tout $v\in L_2$, donc $L_2 = \{0\}$, alors qu'un supplémentaire de $L_1$ est de dimension $n^2-1$.</p>` }
  ],
  piege: R`En Q4, définir $\Phi$ sur tout $\mathcal L(E)$ : un endomorphisme quelconque ne laisse pas $\ker p_2$ stable, et sa restriction n'a pas de sens. Il faut la définir seulement sur $L_1$, grâce à la question 3.`,
  methode: R`Pour majorer la dimension d'un espace d'applications, construis une application linéaire injective vers un espace dont tu connais la dimension.`
},
{
  id: "o-al-2", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 3, time: "30 min",
  title: "Les polynômes binomiaux et l'opérateur de différence",
  enonce: R`<p>Soit $E = \mathbb R_n[X]$. On définit $N_0 = 1$ et, pour $k\in\mathbb N^*$,</p>$$N_k = \frac{X(X-1)\cdots(X-k+1)}{k!}.$$<p>On considère l'endomorphisme $u$ de $E$ défini par $u(P) = P(X+1)-P(X)$.</p><ol><li>Déterminer le noyau de $u$.</li><li>Montrer que $(N_0,\dots,N_n)$ est une base de $E$.</li><li>Calculer $u(N_k)$.</li><li>Montrer que $u$ est <span data-k="nilp">nilpotent</span>. Quel est son indice de nilpotence ?</li><li>Soit $P\in\mathbb R_{n-1}[X]$ ($n\geqslant1$). Montrer qu'il existe un unique $Q\in E$ tel que $u(Q) = P$ et $Q(0) = 0$.</li></ol>`,
  decode: {
    donnees: [R`$N_k$ est un produit de $k$ facteurs de degré $1$, divisé par $k!$. Par exemple $N_1 = X$, $N_2 = \frac{X(X-1)}2$.`, R`$u$ mesure de combien $P$ change quand on avance de $1$.`],
    but: R`Étudier $u$ dans la base adaptée $(N_k)$, où il agit très simplement.`,
    cles: {
      nilp: R`Une puissance de $u$ est nulle : appliquer $u$ assez de fois donne toujours $0$.`,
      endo: R`Avant tout, il faut vérifier que $u(P)$ reste dans $\mathbb R_n[X]$ : $P(X+1)$ et $P(X)$ sont de degré au plus $n$, leur différence aussi.`,
      commun: R`$N_k(X+1)$ et $N_k(X)$ ont $k-1$ facteurs en commun : $X(X-1)\cdots(X-k+2)$. On les met en facteur.`,
      binom: R`$N_k(m) = \binom mk$ pour tout entier $m\geqslant0$ : d'où le nom de polynômes binomiaux.`
    }
  },
  steps: [
    { t: "Avant de commencer", b: R`<p><span data-k="endo">$u$ est bien un endomorphisme de $E$</span> : il est linéaire, car $(\lambda P+Q)(X+1)-(\lambda P+Q)(X) = \lambda u(P)+u(Q)$, et $\deg u(P)\leqslant n$.</p>` },
    { t: "Q1 · Le noyau", b: R`<p>Soit $P\in\ker u$ : $P(X+1) = P(X)$. Par récurrence sur $m\in\mathbb N$, $P(m) = P(0)$ : c'est vrai pour $m = 0$, et si $P(m) = P(0)$ alors $P(m+1) = P(m) = P(0)$.</p><p>Le polynôme $P-P(0)$ s'annule donc en tous les entiers naturels : une infinité de racines. Il est nul, et $P$ est constant.</p><p>Réciproquement, un polynôme constant vérifie $P(X+1)-P(X) = 0$. Donc $\ker u = \mathbb R_0[X] = \operatorname{Vect}(1)$.</p>`, rappels: ["recurrence", "o-racines-infinies"] },
    { t: "Q2 · Une base", b: R`<p>$N_k$ est le produit de $k$ polynômes de degré $1$, divisé par une constante non nulle : $\deg N_k = k$. La famille $(N_0,\dots,N_n)$ est échelonnée en degré, donc libre. Elle a $n+1$ éléments et $\dim\mathbb R_n[X] = n+1$ : c'est une base.</p><p><b>Pourquoi échelonnée implique libre :</b> si $\sum a_kN_k = 0$ avec un $a_m\neq0$ et $m$ maximal, le terme de degré $m$ du membre de gauche vaut $a_m$ fois le coefficient dominant de $N_m$, qui est non nul. Contradiction.</p>`, rappels: ["o-echelonnee"] },
    { t: "Q3 · Le cas k = 0", b: R`<p>$N_0 = 1$ est constant : $u(N_0) = 1-1 = 0$.</p>` },
    { t: "Q3 · Le cas k ≥ 1", b: R`<p>On écrit les deux polynômes en faisant apparaître <span data-k="commun">les facteurs communs</span> :</p>$$N_k(X+1) = \frac{(X+1)\cdot X(X-1)\cdots(X-k+2)}{k!},\qquad N_k(X) = \frac{X(X-1)\cdots(X-k+2)\cdot(X-k+1)}{k!}.$$<p>En factorisant :</p>$$u(N_k) = \big[(X+1)-(X-k+1)\big]\frac{X(X-1)\cdots(X-k+2)}{k!} = k\,\frac{X(X-1)\cdots(X-k+2)}{k!} = \frac{X(X-1)\cdots(X-k+2)}{(k-1)!} = N_{k-1}.$$<p><b>Vérification avec $k = 2$ :</b> $N_2(X+1)-N_2(X) = \frac{(X+1)X-X(X-1)}2 = \frac{2X}2 = X = N_1$. Et pour $k = 1$ : $u(X) = 1 = N_0$.</p>` },
    { t: "Q4 · Les puissances de u", b: R`<p>Par Q3, $u$ fait « descendre » les indices : $N_k\mapsto N_{k-1}\mapsto\dots\mapsto N_0\mapsto0$. Précisément, pour $j\leqslant k$, $u^j(N_k) = N_{k-j}$, et $u^j(N_k) = 0$ si $j>k$.</p>` },
    { t: "Q4 · Nilpotence et indice", b: R`<ul><li>$u^{n+1}(N_k) = 0$ pour tout $k\leqslant n$, car $n+1>k$. Une application linéaire nulle sur une base est nulle : $u^{n+1} = 0$.</li><li>$u^n(N_n) = N_0 = 1\neq0$, donc $u^n\neq0$.</li></ul><p>$u$ est nilpotent d'indice exactement $n+1$.</p>`, rappels: ["o-nilpotent", "o-base-image"] },
    { t: "Q5 · L'image de u", b: R`$$\operatorname{Im} u = \operatorname{Vect}\big(u(N_0),\dots,u(N_n)\big) = \operatorname{Vect}(0,N_0,\dots,N_{n-1}) = \mathbb R_{n-1}[X],$$<p>car $(N_0,\dots,N_{n-1})$ est une base de $\mathbb R_{n-1}[X]$ (question 2 avec $n-1$).</p>`, rappels: ["o-base-image"] },
    { t: "Q5 · Existence", b: R`<p>Soit $P\in\mathbb R_{n-1}[X] = \operatorname{Im} u$ : il existe $P_1\in E$ avec $u(P_1) = P$. On corrige la valeur en $0$ en posant $Q = P_1-P_1(0)$. Comme $u$ est nul sur les constantes :</p>$$u(Q) = u(P_1)-u\big(P_1(0)\big) = P-0 = P,\qquad Q(0) = P_1(0)-P_1(0) = 0.$$<p><b>Formule explicite :</b> si $P = \sum_{k=0}^{n-1}a_kN_k$, alors $Q = \sum_{k=0}^{n-1}a_kN_{k+1}$ convient, car $u(N_{k+1}) = N_k$ et $N_{k+1}(0) = 0$.</p>` },
    { t: "Q5 · Unicité", b: R`<p>Si $Q$ et $R$ conviennent, alors $u(Q-R) = P-P = 0$, donc $Q-R\in\ker u$ : $Q-R = C$ constant. En évaluant en $0$ : $C = Q(0)-R(0) = 0$. Donc $Q = R$.</p>`, rappels: ["o-injectif-dim"] },
    { t: "Pour aller plus loin", b: R`<p>$Q$ est une « primitive discrète » de $P$ : en sommant $Q(m+1)-Q(m) = P(m)$ pour $m = 0,\dots,M-1$, on obtient par télescopage</p>$$\sum_{m=0}^{M-1}P(m) = Q(M).$$<p>Avec $P = X = N_1$, $Q = N_2$ : $\sum_{m=0}^{M-1}m = \frac{M(M-1)}2$. On retrouve une formule bien connue. Et <span data-k="binom">$N_k(m) = \binom mk$</span>.</p>`, rappels: ["telescopage"] }
  ],
  piege: R`En Q1, conclure trop vite « $P(X+1) = P(X)$ donc $P$ constant » : il faut un argument, ici le nombre infini de racines de $P-P(0)$.`,
  methode: R`Quand un endomorphisme agit simplement sur une base bien choisie ($N_k\mapsto N_{k-1}$), tout se lit dans cette base : noyau, image, puissances.`
},
{
  id: "o-al-3", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 3, time: "30 min",
  title: "Polynômes dont on impose les dérivées",
  enonce: R`<p>Soit $n\in\mathbb N$.</p><ol><li>Montrer qu'il existe au plus un polynôme $P\in\mathbb R_n[X]$ tel que $$(E) : \forall k\in\{0,\dots,n\},\quad P^{(k)}(1) = 1.$$</li><li><ol type="a"><li>On suppose qu'il existe un tel polynôme, noté $P_0$. Déterminer l'ensemble des polynômes de $\mathbb R[X]$ vérifiant $(E)$, en fonction de $P_0$.</li><li>Montrer que $P_0$ existe et écrire sa décomposition dans une base adaptée de $\mathbb R_n[X]$.</li></ol></li><li><ol type="a"><li>Soit $(a_0,\dots,a_n)$ et $(b_0,\dots,b_n)$ des réels. Montrer qu'il existe un unique $P\in\mathbb R_n[X]$ tel que $P^{(k)}(a_k) = b_k$ pour tout $k\in\{0,\dots,n\}$.</li><li>Si $m>n$, que dire des polynômes de $\mathbb R_m[X]$ vérifiant la même condition ?</li></ol></li></ol>`,
  decode: {
    donnees: [R`On impose $n+1$ conditions : les valeurs de $P$, $P'$, …, $P^{(n)}$ en des points donnés.`, R`$\mathbb R_n[X]$ est de dimension $n+1$ : autant d'inconnues que de conditions.`],
    but: R`Existence et unicité d'un polynôme vérifiant ces conditions, puis description de toutes les solutions.`,
    cles: {
      ordre: R`$1$ est racine d'ordre au moins $n+1$ de $D$ si $D(1) = D'(1) = \dots = D^{(n)}(1) = 0$. Alors $(X-1)^{n+1}$ divise $D$.`,
      adaptee: R`Une base « centrée en $1$ » : $\big(1,X-1,(X-1)^2,\dots,(X-1)^n\big)$. Les coordonnées s'y lisent avec la formule de Taylor.`,
      dom: R`Si $P = p_NX^N+\dots$ avec $p_N\neq0$, alors $P^{(N)} = N!\,p_N$ est une constante non nulle : elle ne s'annule nulle part.`,
      noyau: R`$g(P) = g(P_n)$ équivaut à $g(P-P_n) = 0$, c'est-à-dire $P-P_n\in\ker g$.`
    }
  },
  steps: [
    { t: "Q1 · Deux solutions sont égales", b: R`<p>Soit $P,Q\in\mathbb R_n[X]$ vérifiant $(E)$, et $D = P-Q$. Pour tout $k\leqslant n$ :</p>$$D^{(k)}(1) = P^{(k)}(1)-Q^{(k)}(1) = 1-1 = 0.$$<p>Donc $1$ est <span data-k="ordre">racine d'ordre au moins $n+1$</span> de $D$ : $(X-1)^{n+1}$ divise $D$. Mais $\deg D\leqslant n<n+1$. Le seul multiple de $(X-1)^{n+1}$ de degré $\leqslant n$ est $0$. Donc $D = 0$ et $P = Q$.</p>`, rappels: ["o-multiplicite"] },
    { t: "Q2a · Toutes les solutions dans ℝ[X]", b: R`<p>Le même raisonnement, sans contrainte de degré, donne : $P\in\mathbb R[X]$ vérifie $(E)$ si et seulement si $(P-P_0)^{(k)}(1) = 0$ pour $k\leqslant n$, si et seulement si $(X-1)^{n+1}$ divise $P-P_0$. Donc</p>$$\{P\in\mathbb R[X] : P\text{ vérifie }(E)\} = \big\{P_0+(X-1)^{n+1}Q : Q\in\mathbb R[X]\big\}.$$<p><b>Attention :</b> dans $\mathbb R[X]$, il y a une infinité de solutions. L'unicité de Q1 vient de la contrainte $\deg P\leqslant n$.</p>`, rappels: ["o-multiplicite"] },
    { t: "Q2b · Trouver le candidat", b: R`<p>Si $P\in\mathbb R_n[X]$ vérifie $(E)$, la formule de Taylor en $1$ donne</p>$$P = \sum_{k=0}^n\frac{P^{(k)}(1)}{k!}(X-1)^k = \sum_{k=0}^n\frac{(X-1)^k}{k!}.$$<p>C'est le seul candidat possible. On pose donc $P_0 = \sum_{k=0}^n\frac{(X-1)^k}{k!}$ et on vérifie qu'il convient.</p>`, rappels: ["o-taylor-poly"] },
    { t: "Q2b · Vérifier", b: R`<p>Soit $j\in\{0,\dots,n\}$. En dérivant $j$ fois chaque terme puis en évaluant en $1$, seul le terme $k = j$ ne s'annule pas, et il vaut $\frac{j!}{j!} = 1$ :</p>$$P_0^{(j)}(1) = \sum_{k=0}^n\frac{1}{k!}\Big((X-1)^k\Big)^{(j)}(1) = \frac{j!}{j!} = 1.$$<p>$P_0$ vérifie $(E)$. Dans la <span data-k="adaptee">base adaptée</span> $\big((X-1)^k\big)_{0\leqslant k\leqslant n}$, ses coordonnées sont $\big(1,1,\frac1{2!},\dots,\frac1{n!}\big)$.</p>`, rappels: ["o-derivee-puissance"] },
    { t: "Q2b · Un exemple et une remarque", b: R`<p>Pour $n = 2$ : $P_0 = 1+(X-1)+\frac{(X-1)^2}2$. On vérifie : $P_0(1) = 1$, $P_0' = 1+(X-1)$ donne $P_0'(1) = 1$, et $P_0'' = 1$.</p><p><b>Remarque :</b> $P_0$ est le développement de Taylor de $x\mapsto e^{x-1}$ en $1$. C'est logique : toutes les dérivées de cette fonction valent $1$ en $1$.</p>` },
    { t: "Q3a · L'application f", b: R`<p>On pose</p>$$f : \mathbb R_n[X]\to\mathbb R^{n+1},\qquad P\mapsto\big(P(a_0),P'(a_1),\dots,P^{(n)}(a_n)\big).$$<p>Elle est linéaire, car dériver et évaluer sont linéaires. Montrer le résultat revient à montrer que $f$ est bijective : pour tout $(b_k)$, il existe un unique $P$ avec $f(P) = (b_k)$.</p>` },
    { t: "Q3a · f est injective", b: R`<p>Soit $P\in\ker f$ : $P^{(k)}(a_k) = 0$ pour tout $k$. Supposons $P\neq0$, de degré $N\leqslant n$ et de coefficient dominant $p_N\neq0$. Alors <span data-k="dom">$P^{(N)} = N!\,p_N$ est une constante non nulle</span>, donc $P^{(N)}(a_N)\neq0$. Contradiction : $P = 0$.</p>`, rappels: ["o-injectif-dim"] },
    { t: "Q3a · Conclure", b: R`<p>$f$ est linéaire injective et $\dim\mathbb R_n[X] = n+1 = \dim\mathbb R^{n+1}$ : c'est un isomorphisme.</p><p><b>Exemple $n = 1$ :</b> on veut $P(a_0) = b_0$ et $P'(a_1) = b_1$. Avec $P = \alpha X+\beta$ : $P' = \alpha = b_1$, puis $\beta = b_0-b_1a_0$. Une seule solution, comme prévu.</p>`, rappels: ["o-iso-dim"] },
    { t: "Q3b · Le cas m > n", b: R`<p>On pose $g : \mathbb R_m[X]\to\mathbb R^{n+1}$, $P\mapsto\big(P^{(k)}(a_k)\big)_{0\leqslant k\leqslant n}$. Elle est surjective, car $g$ prolonge $f$. Soit $P_n$ l'unique solution dans $\mathbb R_n[X]$. Alors, <span data-k="noyau">par linéarité</span> :</p>$$P\text{ convient}\iff g(P) = g(P_n)\iff P-P_n\in\ker g.$$<p>Par le théorème du rang, $\dim\ker g = (m+1)-(n+1) = m-n\geqslant1$. Les solutions forment donc $P_n+\ker g$, un ensemble infini, de dimension $m-n$.</p><p><b>Exemple :</b> $n = 0$, $m = 1$ : $P(a_0) = b_0$ dans $\mathbb R_1[X]$ donne $P = b_0+c(X-a_0)$, pour tout $c$ réel.</p>`, rappels: ["o-rang-thm"] }
  ],
  piege: R`Oublier que l'unicité dépend du degré : dans $\mathbb R[X]$ il y a une infinité de solutions, toutes de la forme $P_0+(X-1)^{n+1}Q$.`,
  methode: R`« Il existe un unique objet vérifiant $n+1$ conditions linéaires » : montre qu'une application linéaire entre espaces de même dimension est injective.`,
  viz: { type: "plot", title: "P₀ colle à e^(x−1) autour de 1, d'autant mieux que n est grand", x: [-2, 4], y: [-1, 12], xlabel: "x", params: [{ k: "n", label: "n", min: 0, max: 8, step: 1, v: 2 }], curves: [{ label: "P₀(x)", f: (x, p) => { let s = 0, t = 1; for (let k = 0; k <= p.n; k++) { s += t; t *= (x - 1) / (k + 1); } return s; } }, { label: "e^(x−1)", f: x => Math.exp(x - 1) }], vlines: [{ x: () => 1, label: "x = 1" }] }
},
{
  id: "o-al-4", subj: "oraux", year: "mp", chap: 0, concours: "mt", level: 2, time: "15 min",
  title: "Rang d'une somme et d'une composée",
  enonce: R`<ol><li>Donner le théorème du rang. Soit $f$ et $g$ des endomorphismes de $E$, espace vectoriel de dimension $n$.</li><li>On suppose que $g\circ f = 0$. Montrer que $\operatorname{rg}(f)+\operatorname{rg}(g)\leqslant n$.</li><li>On suppose que $f+g$ est bijectif. Montrer que $\operatorname{rg}(f)+\operatorname{rg}(g)\geqslant n$.</li></ol>`,
  decode: {
    donnees: [R`$f,g\in\mathcal L(E)$ avec $\dim E = n$.`],
    but: R`Deux inégalités sur $\operatorname{rg} f+\operatorname{rg} g$, sous deux hypothèses différentes.`,
    cles: {
      inclus: R`$g\circ f = 0$ veut dire : tout ce que produit $f$ est détruit par $g$. Donc ce que produit $f$ est dans le noyau de $g$.`,
      somme: R`$\operatorname{Im} f+\operatorname{Im} g$ est l'ensemble des $a+b$ avec $a\in\operatorname{Im} f$ et $b\in\operatorname{Im} g$. C'est un sous-espace de $E$.`
    }
  },
  steps: [
    { t: "Q1 · Le théorème du rang", b: R`<p>Si $E$ est de dimension finie et $f\in\mathcal L(E,F)$, alors</p>$$\dim E = \operatorname{rg}(f)+\dim\ker f.$$<p>Cette question est un indice : il faudra l'utiliser.</p>`, rappels: ["o-rang-thm"] },
    { t: "Q2 · Im f est dans ker g", b: R`<p>Soit $y\in\operatorname{Im} f$ : $y = f(x)$ pour un $x\in E$. Alors $g(y) = (g\circ f)(x) = 0$, donc $y\in\ker g$. Ainsi <span data-k="inclus">$\operatorname{Im} f\subset\ker g$</span>.</p>` },
    { t: "Q2 · Conclure", b: R`<p>Un sous-espace inclus dans un autre a une dimension plus petite, et on applique le théorème du rang à $g$ :</p>$$\operatorname{rg}(f) = \dim\operatorname{Im} f\leqslant\dim\ker g = n-\operatorname{rg}(g).$$<p>Donc $\operatorname{rg}(f)+\operatorname{rg}(g)\leqslant n$.</p><p><b>Exemple d'égalité :</b> dans $\mathbb R^2$, $f$ la projection sur l'axe des $x$ parallèlement à l'axe des $y$, et $g$ la projection sur l'axe des $y$ parallèlement à l'axe des $x$. Alors $g\circ f = 0$ et $\operatorname{rg} f+\operatorname{rg} g = 1+1 = 2$.</p>`, rappels: ["o-rang-thm"] },
    { t: "Q3 · E = Im f + Im g", b: R`<p>Soit $x\in E$. Comme $f+g$ est surjective, il existe $x'$ avec $x = (f+g)(x') = f(x')+g(x')$. Donc $x\in\operatorname{Im} f+\operatorname{Im} g$. Ainsi $E\subset\operatorname{Im} f+\operatorname{Im} g\subset E$ : <span data-k="somme">$E = \operatorname{Im} f+\operatorname{Im} g$</span>.</p>` },
    { t: "Q3 · Grassmann", b: R`$$n = \dim(\operatorname{Im} f+\operatorname{Im} g) = \operatorname{rg} f+\operatorname{rg} g-\dim(\operatorname{Im} f\cap\operatorname{Im} g)\leqslant\operatorname{rg} f+\operatorname{rg} g.$$<p><b>L'inégalité peut être stricte :</b> avec $f = g = \frac12\mathrm{Id}_E$, $f+g = \mathrm{Id}_E$ est bijectif et $\operatorname{rg} f+\operatorname{rg} g = 2n>n$.</p>`, rappels: ["o-grassmann"] }
  ],
  piege: R`En Q3, croire que $\operatorname{Im}(f+g) = \operatorname{Im} f\oplus\operatorname{Im} g$ : la somme n'est pas forcément directe, d'où l'inégalité et non une égalité.`,
  methode: R`Hypothèse $g\circ f = 0$ : traduis-la en $\operatorname{Im} f\subset\ker g$. C'est le réflexe à avoir.`
},
{
  id: "o-al-5", subj: "oraux", year: "mp", chap: 0, concours: "mt", level: 3, time: "20 min",
  title: "Quand v∘u = Id : noyaux, images et supplémentaires",
  enonce: R`<p>Soit $E$ et $F$ deux espaces vectoriels, $u\in\mathcal L(E,F)$ et $v\in\mathcal L(F,E)$ tels que <span data-k="vu">$v\circ u = \mathrm{Id}_E$</span>.</p><ol><li>Montrer que $\ker(u\circ v) = \ker(v)$.</li><li>Montrer que $\operatorname{Im}(u\circ v) = \operatorname{Im}(u)$.</li><li>Montrer que $\ker(v)\oplus\operatorname{Im}(u) = F$.</li></ol>`,
  decode: {
    donnees: [R`$u : E\to F$ et $v : F\to E$, avec $v(u(x)) = x$ pour tout $x\in E$.`, R`Aucune hypothèse de dimension finie.`],
    but: R`Comparer noyaux et images, puis montrer une décomposition de $F$.`,
    cles: {
      vu: R`$v$ « défait » ce que fait $u$. Conséquence : $u$ est injective et $v$ est surjective. Mais $u\circ v$ n'est pas forcément $\mathrm{Id}_F$.`,
      sens: R`$u\circ v$ va de $F$ dans $F$ : on applique d'abord $v$, puis $u$.`,
      decoupe: R`On coupe $y$ en deux morceaux : $u(v(y))$, qui est clairement dans $\operatorname{Im} u$, et le reste $y-u(v(y))$.`
    }
  },
  steps: [
    { t: "Q1 · ker v ⊂ ker(u∘v)", b: R`<p>Attention au sens : <span data-k="sens">$u\circ v\in\mathcal L(F)$</span>. Si $v(y) = 0$, alors $(u\circ v)(y) = u(0) = 0$.</p>` },
    { t: "Q1 · ker(u∘v) ⊂ ker v", b: R`<p>Si $u(v(y)) = 0$, on applique $v$ des deux côtés :</p>$$0 = v\big(u(v(y))\big) = (v\circ u)\big(v(y)\big) = v(y).$$<p>Donc $y\in\ker v$, et $\ker(u\circ v) = \ker v$.</p>` },
    { t: "Q2 · Les deux inclusions", b: R`<ul><li>$\operatorname{Im}(u\circ v)\subset\operatorname{Im} u$ : $u(v(y))$ est l'image par $u$ de $v(y)$.</li><li>$\operatorname{Im} u\subset\operatorname{Im}(u\circ v)$ : si $z = u(x)$, on écrit $x = v(u(x))$, donc $z = u\big(v(u(x))\big) = (u\circ v)\big(u(x)\big)$.</li></ul>` },
    { t: "Q3 · L'intersection est nulle", b: R`<p>Soit $y\in\ker v\cap\operatorname{Im} u$ : $y = u(x)$ et $v(y) = 0$. Alors $x = v(u(x)) = v(y) = 0$, donc $y = u(0) = 0$.</p>` },
    { t: "Q3 · La somme fait tout F", b: R`<p>Soit $y\in F$. On <span data-k="decoupe">découpe</span> :</p>$$y = \underbrace{\big(y-u(v(y))\big)}_{\in\ker v\,?}+\underbrace{u(v(y))}_{\in\operatorname{Im} u}.$$<p>On vérifie le premier morceau : $v\big(y-u(v(y))\big) = v(y)-(v\circ u)(v(y)) = v(y)-v(y) = 0$. Donc $F = \ker v+\operatorname{Im} u$, et la somme est directe par l'étape précédente.</p>`, rappels: ["o-supplementaires"] },
    { t: "Comprendre ce qui se passe", b: R`<p>$p = u\circ v$ est un projecteur : $p^2 = u(v\circ u)v = u\circ v = p$. D'après Q1 et Q2, $\ker p = \ker v$ et $\operatorname{Im} p = \operatorname{Im} u$, et un projecteur vérifie toujours $F = \ker p\oplus\operatorname{Im} p$.</p><p><b>Exemple :</b> $E = \mathbb R$, $F = \mathbb R^2$, $u(x) = (x,0)$, $v(a,b) = a$. Alors $v\circ u = \mathrm{Id}$, mais $u\circ v(a,b) = (a,0)\neq(a,b)$ : $u\circ v$ n'est pas l'identité. Ici $\ker v$ est l'axe vertical et $\operatorname{Im} u$ l'axe horizontal.</p>`, rappels: ["o-projecteur"] }
  ],
  piege: R`Croire que $v\circ u = \mathrm{Id}_E$ entraîne $u\circ v = \mathrm{Id}_F$ : c'est faux sans dimensions égales finies, comme le montre l'exemple.`,
  methode: R`Pour montrer $F = A\oplus B$ sans dimension finie : vérifie $A\cap B = \{0\}$, puis découpe un $y$ quelconque à la main (analyse-synthèse si besoin).`
},
{
  id: "o-al-6", subj: "oraux", year: "mp", chap: 0, concours: "mt", level: 2, time: "15 min",
  title: "Une base formée des itérés d'un vecteur",
  enonce: R`<p>Soit $E$ un espace vectoriel de dimension finie $n\geqslant1$ et $u$ un endomorphisme de $E$. On suppose qu'il existe $x\in E$ tel que la famille $\big(u(x),u^2(x),\dots,u^n(x)\big)$ soit une base de $E$.</p><ol><li>Montrer que $u$ est un <span data-k="auto">automorphisme</span> de $E$.</li><li>Montrer que $\big(x,u(x),\dots,u^{n-1}(x)\big)$ est une base de $E$.</li></ol>`,
  decode: {
    donnees: [R`Les $n$ vecteurs $u(x),\dots,u^n(x)$ forment une base.`],
    but: R`Montrer que $u$ est bijectif, puis « décaler » la base d'un cran.`,
    cles: {
      auto: R`Un endomorphisme bijectif.`,
      factor: R`Chaque vecteur de la base est de la forme $u(\text{quelque chose})$ : on peut factoriser par $u$.`
    }
  },
  steps: [
    { t: "Q1 · u est surjectif", b: R`<p>Soit $y\in E$. On le décompose dans la base : $y = \sum_{k=1}^n\alpha_ku^k(x)$. Chaque $u^k(x)$ vaut $u\big(u^{k-1}(x)\big)$, donc par linéarité on <span data-k="factor">factorise par $u$</span> :</p>$$y = u\left(\sum_{k=1}^n\alpha_ku^{k-1}(x)\right)\in\operatorname{Im} u.$$` },
    { t: "Q1 · Conclure", b: R`<p>$u$ est un endomorphisme surjectif en dimension finie : il est bijectif, c'est un automorphisme.</p><p><b>Attention :</b> ce raisonnement exige la dimension finie. Sur $\mathbb R[X]$, la dérivation est surjective mais pas injective.</p>`, rappels: ["o-dim-finie-bij"] },
    { t: "Q2 · Appliquer u⁻¹", b: R`<p>$u^{-1}$ est un automorphisme, donc il envoie la base $\big(u(x),\dots,u^n(x)\big)$ sur une base. Or</p>$$u^{-1}\big(u^k(x)\big) = u^{k-1}(x)\quad\text{pour }1\leqslant k\leqslant n.$$<p>L'image de la base est donc $\big(x,u(x),\dots,u^{n-1}(x)\big)$, qui est une base de $E$.</p>`, rappels: ["o-image-auto-base"] }
  ],
  piege: R`Oublier de justifier que $u^{-1}$ existe : c'est précisément le rôle de la question 1.`,
  methode: R`En dimension finie, pour montrer qu'un endomorphisme est bijectif, il suffit de montrer qu'il est injectif ou qu'il est surjectif.`
},
{
  id: "o-al-7", subj: "oraux", year: "mp", chap: 0, concours: "mt", level: 4, time: "35 min",
  title: "Noyau et image supplémentaires, projecteur et automorphisme",
  enonce: R`<p>Soit $E$ un espace vectoriel et $u$ un endomorphisme de $E$.</p><ol><li>On suppose qu'il existe un projecteur $p$ et un automorphisme $v$ de $E$ tels que $u\circ v = v\circ u = p$. Justifier que $\ker(u) = \ker(p)$ et $\operatorname{Im}(u) = \operatorname{Im}(p)$.</li><li>Montrer que $E = \ker(u)\oplus\operatorname{Im}(u)$ si et seulement s'il existe un projecteur $p$ et un automorphisme $v$ de $E$ tels que $u\circ v = v\circ u = p$.</li></ol>`,
  decode: {
    donnees: [R`Aucune hypothèse de dimension finie.`],
    but: R`Caractériser les endomorphismes dont le noyau et l'image sont supplémentaires.`,
    cles: {
      w: R`$w$ est $u$ « vu seulement sur $\operatorname{Im} u$ ». Il a un sens car $u$ envoie $\operatorname{Im} u$ dans $\operatorname{Im} u$.`,
      v: R`Sur $\ker u$, $v$ ne fait rien ; sur $\operatorname{Im} u$, il défait $u$.`,
      dimfin: R`Le livre utilise ici la dimension finie. On peut s'en passer : on montre la surjectivité de $w$ directement.`
    }
  },
  steps: [
    { t: "Q1 · Les noyaux", b: R`<ul><li>Si $u(x) = 0$ : $p(x) = v(u(x)) = v(0) = 0$. Donc $\ker u\subset\ker p$.</li><li>Si $p(x) = 0$ : $v(u(x)) = 0$, et $v$ est injective, donc $u(x) = 0$. Donc $\ker p\subset\ker u$.</li></ul>` },
    { t: "Q1 · Les images", b: R`<ul><li>Si $x = u(y)$ : $v$ est surjective, donc $y = v(z)$, et $x = u(v(z)) = p(z)\in\operatorname{Im} p$.</li><li>Si $x = p(y) = u(v(y))$, alors $x\in\operatorname{Im} u$.</li></ul><p>On a utilisé $p = v\circ u$ pour les noyaux et $p = u\circ v$ pour les images.</p>` },
    { t: "Q2 · Le sens facile (⇐)", b: R`<p>Si $p$ et $v$ existent, $p$ est un projecteur, donc $E = \ker p\oplus\operatorname{Im} p$. Par Q1, cela s'écrit $E = \ker u\oplus\operatorname{Im} u$.</p>`, rappels: ["o-projecteur"] },
    { t: "Q2 (⇒) · Le projecteur", b: R`<p>On suppose $E = \ker u\oplus\operatorname{Im} u$. Tout $x$ s'écrit de façon unique $x = x_1+x_2$ avec $x_1\in\ker u$, $x_2\in\operatorname{Im} u$. On prend pour $p$ le projecteur sur $\operatorname{Im} u$ parallèlement à $\ker u$ : $p(x) = x_2$.</p>`, rappels: ["o-supplementaires", "o-projecteur"] },
    { t: "Q2 (⇒) · u restreint à Im u", b: R`<p>$u$ envoie $\operatorname{Im} u$ dans $\operatorname{Im} u$. On note <span data-k="w">$w : \operatorname{Im} u\to\operatorname{Im} u$</span>, $w(y) = u(y)$.</p><ul><li><b>Injective :</b> si $y\in\operatorname{Im} u$ et $u(y) = 0$, alors $y\in\ker u\cap\operatorname{Im} u = \{0\}$.</li><li><b>Surjective :</b> soit $z\in\operatorname{Im} u$, $z = u(t)$. On écrit $t = t_1+t_2$ ($t_1\in\ker u$, $t_2\in\operatorname{Im} u$). Alors $z = u(t_1)+u(t_2) = w(t_2)$.</li></ul><p>$w$ est donc bijective, <span data-k="dimfin">sans utiliser la dimension finie</span>.</p>` },
    { t: "Q2 (⇒) · Construire v", b: R`<p>On pose, pour $x = x_1+x_2$ :</p>$$v(x) = x_1+w^{-1}(x_2).$$<p><span data-k="v">Sur $\ker u$, $v$ est l'identité ; sur $\operatorname{Im} u$, c'est $w^{-1}$.</span> $v$ est linéaire (la décomposition et $w^{-1}$ le sont). Elle est bijective, d'inverse $x\mapsto x_1+w(x_2)$ : on vérifie que les deux compositions donnent l'identité.</p>` },
    { t: "Q2 (⇒) · Vérifier u∘v = p", b: R`$$u(v(x)) = u(x_1)+u\big(w^{-1}(x_2)\big) = 0+w\big(w^{-1}(x_2)\big) = x_2 = p(x).$$<p>On a utilisé $u = w$ sur $\operatorname{Im} u$, car $w^{-1}(x_2)\in\operatorname{Im} u$.</p>` },
    { t: "Q2 (⇒) · Vérifier v∘u = p", b: R`<p>$u(x) = u(x_1)+u(x_2) = u(x_2)$, qui est dans $\operatorname{Im} u$ : sa décomposition est $0+u(x_2)$. Donc</p>$$v(u(x)) = 0+w^{-1}\big(u(x_2)\big) = w^{-1}\big(w(x_2)\big) = x_2 = p(x).$$` },
    { t: "Exemples", b: R`<ul><li><b>Cas simple :</b> si $u$ est lui-même un projecteur, $p = u$ et $v = \mathrm{Id}$ conviennent.</li><li><b>Contre-exemple :</b> sur $\mathbb R^2$, $u(e_1) = 0$ et $u(e_2) = e_1$. Alors $\ker u = \operatorname{Im} u = \operatorname{Vect}(e_1)$ : pas supplémentaires. D'après Q2, aucun couple $(p,v)$ ne convient.</li></ul>` }
  ],
  piege: R`Oublier de vérifier que $w$ arrive bien dans $\operatorname{Im} u$ et qu'il est surjectif : c'est là que sert l'hypothèse $E = \ker u\oplus\operatorname{Im} u$.`,
  methode: R`Pour construire une application sur $E = A\oplus B$, définis-la séparément sur $A$ et sur $B$, puis recolle : $v(x_1+x_2) = v_A(x_1)+v_B(x_2)$.`
},
{
  id: "o-al-8", subj: "oraux", year: "mp", chap: 0, concours: "mt", level: 3, time: "25 min",
  title: "Un déterminant tridiagonal",
  enonce: R`<p>Montrer que pour tout $u\in\mathbb R\setminus\pi\mathbb Z$ et tout $n\geqslant1$, le déterminant de taille $n$</p>$$D_n = \begin{vmatrix}2\cos u&1&0&\cdots&0\\1&2\cos u&1&\ddots&\vdots\\0&\ddots&\ddots&\ddots&0\\\vdots&\ddots&1&2\cos u&1\\0&\cdots&0&1&2\cos u\end{vmatrix}$$<p>vaut $\dfrac{\sin\big((n+1)u\big)}{\sin u}$.</p>`,
  decode: {
    donnees: [R`Une matrice tridiagonale : $2\cos u$ sur la diagonale, $1$ juste au-dessus et juste au-dessous, $0$ ailleurs.`, R`$u\notin\pi\mathbb Z$ garantit $\sin u\neq0$.`],
    but: R`Trouver une relation de récurrence entre $D_n$, $D_{n-1}$ et $D_{n-2}$, puis prouver la formule.`,
    cles: {
      tri: R`Seules trois diagonales sont non nulles. En développant selon la première colonne, il ne reste que deux termes.`,
      mineur: R`Le déterminant obtenu en supprimant la ligne $2$ et la colonne $1$. Sa première ligne est $(1,0,\dots,0)$.`,
      signe: R`Le coefficient en position $(2,1)$ porte le signe $(-1)^{2+1} = -1$.`
    }
  },
  steps: [
    { t: "Développer selon la première colonne", b: R`<p>La matrice est <span data-k="tri">tridiagonale</span> : sa première colonne ne contient que deux coefficients non nuls : $2\cos u$ en position $(1,1)$ et $1$ en position $(2,1)$. Donc, pour $n\geqslant3$ :</p>$$D_n = 2\cos u\cdot D_{n-1}\;-\;1\cdot\Delta.$$<p>Le premier mineur est $D_{n-1}$ (même forme, taille $n-1$). Le <span data-k="signe">signe moins</span> vient de la position $(2,1)$, et $\Delta$ est le <span data-k="mineur">mineur associé</span>.</p>`, rappels: ["o-dev-det"] },
    { t: "Calculer le mineur Δ", b: R`<p>En supprimant la ligne $2$ et la colonne $1$, la première ligne devient $(1,0,\dots,0)$ :</p>$$\Delta = \begin{vmatrix}1&0&0&\cdots\\1&2\cos u&1&\ddots\\0&1&2\cos u&\ddots\\\vdots&\ddots&\ddots&\ddots\end{vmatrix}.$$<p>En développant selon cette première ligne, il ne reste que $1\times D_{n-2}$. Donc $\Delta = D_{n-2}$ et</p>$$D_n = 2\cos u\,D_{n-1}-D_{n-2}\qquad(n\geqslant3).$$`, rappels: ["o-dev-det"] },
    { t: "Les premiers termes", b: R`$$D_1 = 2\cos u,\qquad D_2 = \begin{vmatrix}2\cos u&1\\1&2\cos u\end{vmatrix} = 4\cos^2u-1.$$` },
    { t: "Initialisation", b: R`<p>On veut montrer $\mathcal H_n : D_n = \dfrac{\sin((n+1)u)}{\sin u}$, par récurrence double.</p><ul><li>$n = 1$ : $\sin2u = 2\sin u\cos u$, donc $\frac{\sin2u}{\sin u} = 2\cos u = D_1$.</li><li>$n = 2$ : $\sin3u = \sin(2u+u) = \sin2u\cos u+\cos2u\sin u = \sin u\big(2\cos^2u+2\cos^2u-1\big) = \sin u\,(4\cos^2u-1)$. Donc $\frac{\sin3u}{\sin u} = D_2$.</li></ul>`, rappels: ["o-rec-double"] },
    { t: "Hérédité", b: R`<p>Soit $n\geqslant3$, et supposons $\mathcal H_{n-1}$ et $\mathcal H_{n-2}$. Par la relation de récurrence :</p>$$D_n = \frac{2\cos u\,\sin(nu)-\sin\big((n-1)u\big)}{\sin u}.$$<p>Avec $a = nu$ et $b = u$ dans $\sin(a+b)+\sin(a-b) = 2\sin a\cos b$ : $2\sin(nu)\cos u = \sin\big((n+1)u\big)+\sin\big((n-1)u\big)$. Donc</p>$$D_n = \frac{\sin\big((n+1)u\big)}{\sin u}.$$`, rappels: ["o-trigo-somme"] },
    { t: "Vérifier sur un exemple", b: R`<p>Avec $u = \frac\pi3$ : $2\cos u = 1$. La récurrence donne $D_1 = 1$, $D_2 = 0$, $D_3 = 0-1 = -1$. La formule donne $\frac{\sin(2\pi/3)}{\sin(\pi/3)} = 1$, $\frac{\sin\pi}{\sin(\pi/3)} = 0$, $\frac{\sin(4\pi/3)}{\sin(\pi/3)} = -1$.</p><p><b>Autre méthode :</b> l'équation caractéristique $r^2-2\cos u\,r+1 = 0$ a pour racines $e^{\pm iu}$, d'où $D_n = \alpha e^{inu}+\beta e^{-inu}$. C'est plus long : quand le résultat est donné, la récurrence est le bon choix.</p>`, rappels: ["rec-lineaire-2"] }
  ],
  piege: R`Oublier le signe $-$ du coefficient en position $(2,1)$ : on obtiendrait $D_n = 2\cos u\,D_{n-1}+D_{n-2}$, qui est faux.`,
  methode: R`Déterminant tridiagonal : développe selon la première colonne (ou ligne) pour obtenir une récurrence d'ordre $2$.`,
  viz: { type: "seq", title: "Les valeurs de Dₙ (récurrence) et la formule coïncident", n: [1, 20], y: [-6, 6], params: [{ k: "u", label: "u (radians)", min: 0.2, max: 2.9, step: 0.01, v: 0.6 }], series: [{ label: "Dₙ par la récurrence", style: "bar", f: (n, p) => { let a = 1, b = 2 * Math.cos(p.u); if (n === 1) return b; for (let k = 2; k <= n; k++) { const c = 2 * Math.cos(p.u) * b - a; a = b; b = c; } return b; } }, { label: "sin((n+1)u) / sin u", style: "line", f: (n, p) => Math.sin((n + 1) * p.u) / Math.sin(p.u) }] }
},
{
  id: "o-al-9", subj: "oraux", year: "mp", chap: 0, concours: "c1", level: 4, time: "40 min",
  title: "Sous-espaces de matrices de rang au plus r",
  enonce: R`<p>Soit $n\in\mathbb N^*$ et $r\in\{1,\dots,n\}$. On note $J_r = \begin{pmatrix}I_r&0\\0&0\end{pmatrix}\in\mathcal M_n(\mathbb R)$.</p><ol><li>Rappeler pourquoi $\operatorname{rg}(M) = r\iff\exists(P,Q)\in GL_n(\mathbb R)^2,\ PMQ = J_r$.<br>Soit $B\in\mathcal M_{r,n-r}(\mathbb R)$, $C\in\mathcal M_{n-r,r}(\mathbb R)$, $D\in\mathcal M_{n-r}(\mathbb R)$ et $M = \begin{pmatrix}I_r&B\\C&D\end{pmatrix}$. Montrer que $\operatorname{rg}(M)\geqslant r$, avec égalité si et seulement si $D = CB$.</li><li>Soit $V$ un sous-espace vectoriel de $\mathcal M_n(\mathbb R)$ contenant $J_r$, dont toutes les matrices sont de rang au plus $r$. Soit $$W = \left\{\begin{pmatrix}0&B\\B^\top&A\end{pmatrix} : A\in\mathcal M_{n-r}(\mathbb R),\ B\in\mathcal M_{r,n-r}(\mathbb R)\right\}.$$ Montrer que $V\cap W = \{0\}$.</li><li>Montrer que la dimension d'un sous-espace de $\mathcal M_n(\mathbb R)$ dont tous les éléments sont de rang au plus $r$ est au plus $nr$.</li></ol>`,
  decode: {
    donnees: [R`Des matrices écrites par blocs.`, R`$B^\top$ désigne la transposée de $B$.`],
    but: R`Majorer la dimension d'un espace de matrices de petit rang.`,
    cles: {
      blocs: R`On découpe une matrice $n\times n$ en quatre morceaux : un carré $r\times r$ en haut à gauche, un carré $(n-r)\times(n-r)$ en bas à droite, et deux rectangles.`,
      pivot: R`$P$ fait l'opération sur les lignes « $L_{\text{bas}}\leftarrow L_{\text{bas}}-C\,L_{\text{haut}}$ », et $Q$ l'opération sur les colonnes correspondante.`,
      max: R`$s$ est le plus grand rang atteint par une matrice de $V'$. On a $s\leqslant r$ par hypothèse.`,
      atteint: R`La borne est la meilleure possible : on donne un sous-espace de dimension exactement $nr$.`
    }
  },
  steps: [
    { t: "Q1 · L'équivalence", b: R`<p>C'est un résultat de cours : une matrice de rang $r$ est équivalente à $J_r$. Idée : on choisit une base adaptée au noyau et à un supplémentaire, et dans ces bases l'application linéaire a pour matrice $J_r$. Réciproquement, multiplier par des matrices inversibles ne change pas le rang, et $\operatorname{rg} J_r = r$.</p>`, rappels: ["o-rang-equiv"] },
    { t: "Q1 · rg M ≥ r", b: R`<p>$M$ est écrite <span data-k="blocs">par blocs</span>. Ses $r$ premières colonnes sont libres. Si une combinaison $\sum_{j\leqslant r}\lambda_jC_j$ est nulle, ses $r$ premières lignes donnent $I_r\,(\lambda_1,\dots,\lambda_r)^\top = 0$, donc tous les $\lambda_j$ sont nuls. On a $r$ colonnes libres : $\operatorname{rg} M\geqslant r$.</p>` },
    { t: "Q1 · Faire apparaître D − CB", b: R`<p>On pose (<span data-k="pivot">un pivot par blocs</span>)</p>$$P = \begin{pmatrix}I_r&0\\-C&I_{n-r}\end{pmatrix},\qquad Q = \begin{pmatrix}I_r&-B\\0&I_{n-r}\end{pmatrix}.$$<p>Elles sont triangulaires par blocs avec des $I$ sur la diagonale : leur déterminant vaut $1$, elles sont inversibles. Par produit par blocs :</p>$$PM = \begin{pmatrix}I_r&B\\-C+C&-CB+D\end{pmatrix} = \begin{pmatrix}I_r&B\\0&D-CB\end{pmatrix},\qquad PMQ = \begin{pmatrix}I_r&-B+B\\0&D-CB\end{pmatrix} = \begin{pmatrix}I_r&0\\0&D-CB\end{pmatrix}.$$`, rappels: ["o-blocs"] },
    { t: "Q1 · Conclure", b: R`<p>Le rang ne change pas : $\operatorname{rg} M = \operatorname{rg}(PMQ)$. Pour une matrice diagonale par blocs, les colonnes du bloc $I_r$ et celles du bloc $D-CB$ vivent dans des lignes différentes, donc les rangs s'additionnent :</p>$$\operatorname{rg} M = r+\operatorname{rg}(D-CB).$$<p>Donc $\operatorname{rg} M = r\iff\operatorname{rg}(D-CB) = 0\iff D = CB$.</p>`, rappels: ["o-rang-equiv"] },
    { t: "Q2 · Une première matrice de V", b: R`<p>Soit $M = \begin{pmatrix}0&B\\B^\top&A\end{pmatrix}\in V\cap W$. Comme $V$ est un sous-espace contenant $J_r$ et $M$ :</p>$$J_r+M = \begin{pmatrix}I_r&B\\B^\top&A\end{pmatrix}\in V.$$<p>Son rang est $\leqslant r$ (car dans $V$) et $\geqslant r$ (Q1) : il vaut $r$. Par Q1 avec $C = B^\top$, $D = A$ : $A = B^\top B$.</p>` },
    { t: "Q2 · Une deuxième matrice de V", b: R`<p>De même $J_r-M = \begin{pmatrix}I_r&-B\\-B^\top&-A\end{pmatrix}\in V$ est de rang $r$. Par Q1 avec $C = -B^\top$, $D = -A$, et la matrice $-B$ en haut à droite :</p>$$-A = (-B^\top)(-B) = B^\top B.$$<p>Avec l'étape précédente : $A = B^\top B = -A$, donc $A = 0$ et $B^\top B = 0$.</p>` },
    { t: "Q2 · B est nulle", b: R`<p>Le coefficient diagonal $(j,j)$ de $B^\top B$ vaut $\sum_ib_{ij}^2$. En sommant, $\operatorname{tr}(B^\top B) = \sum_{i,j}b_{ij}^2 = 0$. Une somme de carrés réels est nulle si et seulement si chaque terme est nul : $B = 0$. Donc $M = 0$, et $V\cap W = \{0\}$.</p>`, rappels: ["o-trace-tBB"] },
    { t: "Q3 · Se ramener à Q2", b: R`<p>Soit $V'$ un sous-espace dont toutes les matrices sont de rang $\leqslant r$. Si $V' = \{0\}$, c'est fini. Sinon, soit <span data-k="max">$s\geqslant1$ le rang maximal</span> atteint dans $V'$, par une matrice $M_0$. Il existe $P,Q$ inversibles avec $PM_0Q = J_s$. On pose $V = \{PMQ : M\in V'\}$.</p><ul><li>$V$ est un sous-espace qui contient $J_s$.</li><li>Ses matrices ont un rang $\leqslant s$ (le rang est conservé).</li><li>$M\mapsto PMQ$ est linéaire et bijective (d'inverse $N\mapsto P^{-1}NQ^{-1}$) : $\dim V = \dim V'$.</li></ul>`, rappels: ["o-rang-equiv"] },
    { t: "Q3 · Compter les dimensions", b: R`<p>L'application $(A,B)\mapsto\begin{pmatrix}0&B\\B^\top&A\end{pmatrix}$ est linéaire et injective, donc</p>$$\dim W_s = (n-s)^2+s(n-s) = n(n-s).$$<p>Par Q2 (avec $s$ à la place de $r$), $V\cap W_s = \{0\}$. Par Grassmann :</p>$$\dim V+\dim W_s = \dim(V+W_s)\leqslant n^2,\quad\text{donc}\quad\dim V'\leqslant n^2-n(n-s) = ns\leqslant nr.$$`, rappels: ["o-grassmann"] },
    { t: "Q3 · La borne est atteinte", b: R`<p><span data-k="atteint">Exemple :</span> l'ensemble des matrices dont les $n-r$ dernières colonnes sont nulles. Elles ont au plus $r$ colonnes non nulles, donc un rang $\leqslant r$, et on choisit librement $n\times r$ coefficients : la dimension vaut exactement $nr$.</p>` }
  ],
  piege: R`En Q2, oublier d'utiliser $J_r-M$ : la seule matrice $J_r+M$ donne $A = B^\top B$, ce qui ne suffit pas pour conclure.`,
  methode: R`Un pivot de Gauss par blocs, $\begin{pmatrix}I&0\\-C&I\end{pmatrix}$ à gauche et $\begin{pmatrix}I&-B\\0&I\end{pmatrix}$ à droite, transforme $\begin{pmatrix}I&B\\C&D\end{pmatrix}$ en $\begin{pmatrix}I&0\\0&D-CB\end{pmatrix}$.`
}
]);

LEMME.rappels({
  "o-poly-commute": { t: "Les polynômes en u commutent", b: R`Pour tous $P,Q\in\mathbb K[X]$ : $P(u)\circ Q(u) = (PQ)(u) = Q(u)\circ P(u)$. En particulier, tout $P(u)$ commute avec $u$, et si $h$ commute avec $u$, alors $h$ commute avec tout $P(u)$.` },
  "o-lemme-noyaux": { t: "Lemme des noyaux", b: R`Si $P$ et $Q$ sont premiers entre eux, alors $\ker(PQ)(u) = \ker P(u)\oplus\ker Q(u)$.` },
  "o-bezout-poly": { t: "Théorème de Bézout pour les polynômes", b: R`$P$ et $Q$ sont premiers entre eux si et seulement s'il existe $A,B\in\mathbb K[X]$ tels que $AP+BQ = 1$. En évaluant en $u$ : $A(u)P(u)+B(u)Q(u) = \mathrm{Id}_E$.` },
  "o-poly-induit": { t: "Polynôme et endomorphisme induit", b: R`Si $F$ est stable par $u$ et $u_F$ est l'endomorphisme induit, alors pour tout polynôme $P$ et tout $x\in F$ : $P(u)(x) = P(u_F)(x)$.` },
  "o-rolle": { t: "Théorème de Rolle", b: R`Si $g$ est continue sur $[a,b]$, dérivable sur $]a,b[$ et $g(a) = g(b)$, il existe $c\in\,]a,b[$ avec $g'(c) = 0$. Donc si $g$ a $p$ zéros distincts, $g'$ en a au moins $p-1$, un dans chaque intervalle entre deux zéros consécutifs.` },
  "o-det-multilin": { t: "Linéarité du déterminant par colonne", b: R`Le déterminant est linéaire par rapport à chaque colonne quand les autres sont fixées : $$\det(C_1+\varepsilon e_1,C_2,\dots,C_n) = \det(C_1,C_2,\dots,C_n)+\varepsilon\det(e_1,C_2,\dots,C_n).$$ Si deux lignes (ou deux colonnes) sont égales, le déterminant est nul.` },
  "o-det-mult": { t: "Le déterminant est multiplicatif", b: R`$\det(AB) = \det(A)\det(B)$ et $\det(\lambda A) = \lambda^n\det A$ pour $A\in\mathcal M_n(\mathbb K)$. Mais en général $\det(A+B)\neq\det A+\det B$.` },
  "o-somme-geo-c": { t: "Somme géométrique complexe", b: R`Pour $q\in\mathbb C$ : $\displaystyle\sum_{k=0}^{n-1}q^k = \frac{1-q^n}{1-q}$ si $q\neq1$, et $n$ si $q = 1$.` },
  "o-racines-unite": { t: "Racines n-ièmes de l'unité", b: R`Avec $\omega = e^{2i\pi/n}$ : $\mathbb U_n = \{\omega^k : 0\leqslant k\leqslant n-1\}$, et $\omega^s = 1\iff n$ divise $s$.` },
  "o-division-euclid": { t: "Division euclidienne des polynômes", b: R`Pour $B\neq0$, il existe un unique couple $(Q,R)$ avec $A = BQ+R$ et $\deg R<\deg B$. $B$ divise $A$ si et seulement si $R = 0$.` },
  "o-tri-complexe": { t: "Inégalité triangulaire", b: R`Pour des complexes : $\left|\sum z_k\right|\leqslant\sum|z_k|$, et $|zz'| = |z|\,|z'|$. Si $|\omega| = 1$, alors $|\omega^k| = 1$.` },
  "o-rang-produit": { t: "Rang d'un produit", b: R`$\operatorname{rg}(AB)\leqslant\min\big(\operatorname{rg} A,\operatorname{rg} B\big)$, car $\operatorname{Im}(AB)\subset\operatorname{Im} A$ et $AB$ est l'image de l'image de $B$.` },
  "o-semblables": { t: "Matrices semblables", b: R`$B = P^{-1}AP$ avec $P$ inversible. Ce sont les matrices d'un même endomorphisme dans deux bases. Elles ont même trace, même déterminant, même polynôme caractéristique.` },
  "o-chi": { t: "Polynôme caractéristique", b: R`$\chi_A(X) = \det(XI_n-A)$ : polynôme unitaire de degré $n$, dont les racines sont les valeurs propres de $A$. Il en a donc au plus $n$.` },
  "o-poly-infini": { t: "Deux polynômes égaux en une infinité de points", b: R`Si deux polynômes coïncident en une infinité de points, ils sont égaux : leur différence a une infinité de racines, elle est nulle.` }
});

LEMME.exercises([
{
  id: "o-al-10", subj: "oraux", year: "mp", chap: 0, concours: "c1", level: 5, time: "50 min",
  title: "Le bicommutant d'un endomorphisme",
  enonce: R`<p>Soit $\mathbb K$ un corps, $E$ un $\mathbb K$-espace vectoriel de dimension finie $n$ et $u\in\mathcal L(E)$. On note $C(u)$ le commutant de $u$, et $C^2(u)$ le bicommutant de $u$ : l'ensemble des endomorphismes de $E$ qui commutent avec <span data-k="tous">tous</span> les éléments de $C(u)$.</p><ol><li>Vérifier que $C^2(u)$ est une sous-algèbre de $\mathcal L(E)$ contenant $\mathbb K[u]$.</li><li>On suppose $u$ nilpotent d'indice $n$. Montrer que $C^2(u) = \mathbb K[u]$.</li><li>Soit $E_1$ et $E_2$ deux sous-espaces supplémentaires de $E$ stables par $u$. On note $u_1$ (resp. $u_2$) l'endomorphisme induit par $u$ sur $E_1$ (resp. $E_2$). On suppose que les polynômes minimaux $\pi_1$, $\pi_2$ de $u_1$, $u_2$ sont premiers entre eux, et que $C^2(u_1) = \mathbb K[u_1]$ et $C^2(u_2) = \mathbb K[u_2]$. Montrer que $C^2(u) = \mathbb K[u]$.</li></ol>`,
  decode: {
    donnees: [R`$C(u) = \{v : vu = uv\}$ : ceux qui commutent avec $u$.`, R`$C^2(u)$ : ceux qui commutent avec tout le monde dans $C(u)$.`, R`$\mathbb K[u] = \{P(u) : P\in\mathbb K[X]\}$ : les polynômes en $u$.`],
    but: R`Montrer qu'on a toujours $\mathbb K[u]\subset C^2(u)$, et l'égalité dans deux situations.`,
    cles: {
      tous: R`Pour être dans $C^2(u)$, il faut commuter avec chaque $h\in C(u)$, pas seulement avec $u$.`,
      vandermonde: R`On applique $u^{n-1}$ : tous les termes avec un $u^k$, $k\geqslant1$, deviennent $u^{n-1+k} = 0$.`,
      pv: R`$p_v$ applique $v$ au morceau dans $E_1$ et « oublie » le morceau dans $E_2$. C'est un outil pour tester $h$ sur $E_1$.`,
      recolle: R`$P$ est construit pour valoir $P_1$ sur $E_1$ et $P_2$ sur $E_2$, grâce aux « interrupteurs » $A\pi_1$ et $B\pi_2$.`
    }
  },
  steps: [
    { t: "Q1 · Ce qu'il faut vérifier", b: R`<p>Une sous-algèbre de $\mathcal L(E)$ doit contenir $0$ et $\mathrm{Id}_E$, être stable par combinaison linéaire et par composition.</p><p>$0$ et $\mathrm{Id}_E$ commutent avec tout endomorphisme, donc avec tous les éléments de $C(u)$ : ils sont dans $C^2(u)$.</p>` },
    { t: "Q1 · Stabilité par combinaison", b: R`<p>Soit $v,w\in C^2(u)$, $\lambda,\mu\in\mathbb K$ et $h\in C(u)$. Par linéarité de $h$ :</p>$$(\lambda v+\mu w)\circ h = \lambda\,v\circ h+\mu\,w\circ h = \lambda\,h\circ v+\mu\,h\circ w = h\circ(\lambda v+\mu w).$$` },
    { t: "Q1 · Stabilité par composition", b: R`<p>On fait passer $h$ de droite à gauche, en commutant d'abord avec $w$, puis avec $v$ :</p>$$(v\circ w)\circ h = v\circ(h\circ w) = (v\circ h)\circ w = (h\circ v)\circ w = h\circ(v\circ w).$$` },
    { t: "Q1 · K[u] ⊂ C²(u)", b: R`<p>Si $h\in C(u)$, alors par définition $h\circ u = u\circ h$ : $u$ commute avec tout élément de $C(u)$, donc $u\in C^2(u)$. Une sous-algèbre contenant $u$ contient $\mathrm{Id}$, toutes les puissances $u^k$ et leurs combinaisons linéaires : $\mathbb K[u]\subset C^2(u)$.</p>` },
    { t: "Q2 · Une base adaptée", b: R`<p>$u$ est nilpotent d'indice $n$ : $u^n = 0$ et $u^{n-1}\neq0$. Il existe $x_0$ avec $u^{n-1}(x_0)\neq0$. Montrons que $\mathcal B = \big(x_0,u(x_0),\dots,u^{n-1}(x_0)\big)$ est libre. Si $\sum_{k=0}^{n-1}\lambda_ku^k(x_0) = 0$, on <span data-k="vandermonde">applique $u^{n-1}$</span> : il reste $\lambda_0u^{n-1}(x_0) = 0$, donc $\lambda_0 = 0$. On applique ensuite $u^{n-2}$ pour obtenir $\lambda_1 = 0$, et ainsi de suite. $\mathcal B$ est libre et a $n$ vecteurs : c'est une base.</p>` },
    { t: "Q2 · Le commutant est K[u]", b: R`<p>Soit $v\in C(u)$. On décompose $v(x_0) = \sum_ka_ku^k(x_0)$ et on pose $w = \sum_ka_ku^k\in\mathbb K[u]$. Pour tout $j$, comme $v$ et $w$ commutent avec $u^j$ :</p>$$v\big(u^j(x_0)\big) = u^j\big(v(x_0)\big) = u^j\big(w(x_0)\big) = w\big(u^j(x_0)\big).$$<p>$v$ et $w$ coïncident sur la base $\mathcal B$, donc $v = w\in\mathbb K[u]$. Ainsi $C(u) = \mathbb K[u]$, l'autre inclusion étant immédiate.</p>`, rappels: ["o-poly-commute"] },
    { t: "Q2 · Conclure", b: R`<p>Soit $h\in C^2(u)$. Comme $u\in C(u)$, $h$ commute avec $u$ : $h\in C(u) = \mathbb K[u]$. Donc $C^2(u)\subset\mathbb K[u]$, et Q1 donne l'égalité.</p><p><b>Exemple $n = 2$ :</b> avec $N = \begin{pmatrix}0&1\\0&0\end{pmatrix}$, $\begin{pmatrix}a&b\\c&d\end{pmatrix}N = \begin{pmatrix}0&a\\0&c\end{pmatrix}$ et $N\begin{pmatrix}a&b\\c&d\end{pmatrix} = \begin{pmatrix}c&d\\0&0\end{pmatrix}$. Ils sont égaux si et seulement si $c = 0$ et $a = d$ : la matrice vaut $aI+bN\in\mathbb K[N]$.</p>` },
    { t: "Q3 · Étape 1 : E_i = ker π_i(u)", b: R`<p>Pour $x\in E_i$ : $\pi_i(u)(x) = \pi_i(u_i)(x) = 0$, donc $E_i\subset\ker\pi_i(u)$. Par le lemme des noyaux ($\pi_1,\pi_2$ premiers entre eux) :</p>$$\ker\pi_1(u)\oplus\ker\pi_2(u) = \ker(\pi_1\pi_2)(u) = E,$$<p>car $(\pi_1\pi_2)(u)$ s'annule sur $E_1$ et sur $E_2$. En dimensions : $n = \dim E_1+\dim E_2\leqslant\dim\ker\pi_1(u)+\dim\ker\pi_2(u) = n$. Il y a donc égalité partout, et $E_i = \ker\pi_i(u)$.</p>`, rappels: ["o-poly-induit", "o-lemme-noyaux"] },
    { t: "Q3 · Étape 2 : E_i est stable par tout h ∈ C(u)", b: R`<p>Si $h$ commute avec $u$, il commute avec $\pi_i(u)$. Pour $x\in E_i = \ker\pi_i(u)$ :</p>$$\pi_i(u)\big(h(x)\big) = h\big(\pi_i(u)(x)\big) = h(0) = 0,$$<p>donc $h(x)\in E_i$. C'est vrai en particulier pour $h\in C^2(u)$, car $C^2(u)\subset C(u)$.</p>`, rappels: ["o-poly-commute"] },
    { t: "Q3 · Étape 3 : l'outil p_v", b: R`<p>Soit $h\in C^2(u)$ et $h_1$ sa restriction à $E_1$. Soit $v\in C(u_1)$. On définit <span data-k="pv">$p_v\in\mathcal L(E)$</span> par $p_v(x_1+x_2) = v(x_1)$, pour $x_1\in E_1$, $x_2\in E_2$. Montrons $p_v\in C(u)$. Comme $u(x_1)\in E_1$ et $u(x_2)\in E_2$ :</p>$$p_v\big(u(x)\big) = v\big(u_1(x_1)\big),\qquad u\big(p_v(x)\big) = u_1\big(v(x_1)\big) = v\big(u_1(x_1)\big).$$` },
    { t: "Q3 · Étape 3 : h₁ ∈ C²(u₁)", b: R`<p>Comme $p_v\in C(u)$ et $h\in C^2(u)$ : $h\circ p_v = p_v\circ h$. Pour $x_1\in E_1$, sachant $v(x_1)\in E_1$ et $h(x_1)\in E_1$ :</p>$$h_1\big(v(x_1)\big) = h\big(p_v(x_1)\big) = p_v\big(h(x_1)\big) = v\big(h_1(x_1)\big).$$<p>$h_1$ commute avec tout $v\in C(u_1)$ : $h_1\in C^2(u_1) = \mathbb K[u_1]$. De même $h_2\in\mathbb K[u_2]$. On écrit $h_1 = P_1(u_1)$ et $h_2 = P_2(u_2)$.</p>` },
    { t: "Q3 · Étape 4 : recoller", b: R`<p>Par Bézout, $A\pi_1+B\pi_2 = 1$, donc $\mathrm{Id}_E = A(u)\pi_1(u)+B(u)\pi_2(u)$. Sur $E_1$, $\pi_1(u) = 0$, donc $x = B(u)\pi_2(u)(x)$ pour $x\in E_1$. On <span data-k="recolle">recolle</span> avec $P = P_2A\pi_1+P_1B\pi_2$. Pour $x\in E_1$ :</p>$$P(u)(x) = P_2(u)A(u)\underbrace{\pi_1(u)(x)}_{=0}+P_1(u)\underbrace{B(u)\pi_2(u)(x)}_{=x} = P_1(u_1)(x) = h(x).$$<p>De même $P(u) = h$ sur $E_2$. Donc $h = P(u)\in\mathbb K[u]$ sur $E = E_1\oplus E_2$, et avec Q1, $C^2(u) = \mathbb K[u]$.</p>`, rappels: ["o-bezout-poly", "o-poly-induit"] }
  ],
  piege: R`Confondre $C(u)$ et $C^2(u)$ : pour être dans $C^2(u)$, commuter avec $u$ ne suffit pas, il faut commuter avec tout le commutant.`,
  methode: R`Pour décrire un commutant, trouve une base de la forme $\big(x_0,u(x_0),\dots\big)$ : un endomorphisme qui commute avec $u$ est alors déterminé par l'image de $x_0$.`
},
{
  id: "o-al-11", subj: "oraux", year: "mp", chap: 0, concours: "c1", level: 4, time: "35 min",
  title: "Zéros d'une somme de puissances et un déterminant positif",
  enonce: R`<ol><li>Soit $a_1,\dots,a_p$ des réels distincts et $t_1,\dots,t_p$ des réels non tous nuls. On pose $f(x) = t_1x^{a_1}+\dots+t_px^{a_p}$ pour $x\in\,]0,+\infty[$. Montrer que $f$ s'annule en au plus $p-1$ points. <i>Indication : raisonner par récurrence.</i></li><li>Soit $a_1<a_2<\dots<a_n$ et $0<x_1<x_2<\dots<x_n$ des réels. Montrer que le déterminant $D = \det\big(x_i^{a_j}\big)_{1\leqslant i,j\leqslant n}$ est strictement positif. <i>Indication : raisonner par récurrence et faire varier $x_n$.</i></li></ol>`,
  decode: {
    donnees: [R`Des exposants réels quelconques (pas forcément entiers), mais distincts.`, R`On travaille sur $]0,+\infty[$, où $x^a = e^{a\ln x}$ est bien défini et strictement positif.`],
    but: R`Une majoration du nombre de zéros, puis le signe d'un déterminant « de Vandermonde généralisé ».`,
    cles: {
      diviser: R`Multiplier $f$ par $x^{-a_p}>0$ ne change pas ses zéros, mais transforme le terme $t_px^{a_p}$ en une constante, qui disparaîtra en dérivant.`,
      forme: R`$g'$ est encore une somme de $p-1$ puissances, avec des exposants distincts : on peut lui appliquer l'hypothèse de récurrence.`,
      domine: R`Pour $a_j<a_n$, $\frac{x^{a_j}}{x^{a_n}} = x^{a_j-a_n}\to0$ quand $x\to+\infty$ : le terme d'exposant le plus grand l'emporte.`
    }
  },
  steps: [
    { t: "Q1 · L'énoncé de récurrence", b: R`<p>$\mathcal H_p$ : « pour tous $a_1,\dots,a_p$ distincts et $t_1,\dots,t_p$ non tous nuls, $f$ s'annule au plus $p-1$ fois sur $]0,+\infty[$ ».</p><p><b>Initialisation :</b> pour $p = 1$, $f(x) = t_1x^{a_1}$ avec $t_1\neq0$ et $x^{a_1}>0$ : $f$ ne s'annule jamais, soit $0 = p-1$ fois.</p>` },
    { t: "Q1 · Se débarrasser d'un terme", b: R`<p>Soit $p\geqslant2$, on suppose $\mathcal H_{p-1}$. On <span data-k="diviser">multiplie par $x^{-a_p}$</span> :</p>$$g(x) = x^{-a_p}f(x) = \sum_{i=1}^{p-1}t_ix^{a_i-a_p}+t_p.$$<p>Comme $x^{-a_p}>0$, $f$ et $g$ ont exactement les mêmes zéros.</p>` },
    { t: "Q1 · Un cas facile", b: R`<p>Si $t_1 = \dots = t_{p-1} = 0$, alors $t_p\neq0$ et $g = t_p$ est une constante non nulle : aucun zéro.</p>` },
    { t: "Q1 · Le cas général par l'absurde", b: R`<p>Sinon, supposons que $f$, donc $g$, ait au moins $p$ zéros $x_1<\dots<x_p$. $g$ est dérivable sur $]0,+\infty[$. Par Rolle sur chaque $[x_i,x_{i+1}]$, $g'$ a au moins $p-1$ zéros distincts. Or</p>$$g'(x) = \sum_{i=1}^{p-1}(a_i-a_p)\,t_i\,x^{a_i-a_p-1}.$$`, rappels: ["o-rolle"] },
    { t: "Q1 · Appliquer l'hypothèse", b: R`<p>$g'$ a <span data-k="forme">la même forme</span> avec $p-1$ termes : les exposants $a_i-a_p-1$ sont distincts, et les coefficients $(a_i-a_p)t_i$ sont non tous nuls, car $a_i\neq a_p$ et les $t_i$ ($i<p$) sont non tous nuls. Par $\mathcal H_{p-1}$, $g'$ a au plus $p-2$ zéros. Contradiction avec « au moins $p-1$ ». Donc $f$ a au plus $p-1$ zéros.</p><p><b>Exemple :</b> $x^2-3x+2 = (x-1)(x-2)$ : $3$ termes, $2$ zéros. La borne est atteinte.</p>` },
    { t: "Q2 · Récurrence et fonction auxiliaire", b: R`<p>Pour $n = 1$ : $D = x_1^{a_1}>0$. Soit $n\geqslant2$, on suppose le résultat au rang $n-1$. On fixe $x_1<\dots<x_{n-1}$ et on remplace $x_n$ par une variable $x$ :</p>$$f(x) = \det\begin{pmatrix}x_1^{a_1}&\cdots&x_1^{a_n}\\\vdots&&\vdots\\x_{n-1}^{a_1}&\cdots&x_{n-1}^{a_n}\\x^{a_1}&\cdots&x^{a_n}\end{pmatrix}.$$<p>On veut montrer $f(x_n)>0$.</p>` },
    { t: "Q2 · Développer selon la dernière ligne", b: R`$$f(x) = \sum_{j=1}^nt_jx^{a_j},\qquad t_j = (-1)^{n+j}\Delta_{n,j},$$<p>où $\Delta_{n,j}$ est le mineur obtenu en supprimant la dernière ligne et la colonne $j$. En particulier $t_n = \Delta_{n,n} = \det\big(x_i^{a_j}\big)_{i,j\leqslant n-1}>0$ par hypothèse de récurrence. Les $t_j$ sont donc non tous nuls.</p>`, rappels: ["o-dev-det"] },
    { t: "Q2 · Les zéros de f", b: R`<p>Pour $x = x_i$ avec $i\leqslant n-1$, la dernière ligne est égale à la ligne $i$ : $f(x_i) = 0$. Cela fait $n-1$ zéros, et par Q1, $f$ en a au plus $n-1$. Donc $f$ ne s'annule pas sur $]x_{n-1},+\infty[$.</p>`, rappels: ["o-det-multilin"] },
    { t: "Q2 · Le signe", b: R`<p>Quand $x\to+\infty$, <span data-k="domine">le terme d'exposant $a_n$ domine</span> : $f(x)\sim t_nx^{a_n}\to+\infty$. Donc $f$ prend des valeurs positives sur $]x_{n-1},+\infty[$. Elle y est continue et ne s'annule pas : par le TVI, elle garde un signe constant, donc $f>0$ sur cet intervalle. En particulier $D = f(x_n)>0$.</p>`, rappels: ["tvi"] }
  ],
  piege: R`En Q1, appliquer Rolle directement à $f$ : $f'$ a encore $p$ termes et la récurrence ne fonctionne pas. Il faut d'abord diviser par $x^{a_p}$.`,
  methode: R`Pour majorer le nombre de zéros d'une somme de fonctions, élimine un terme (division, puis dérivation) et utilise Rolle avec une récurrence.`,
  viz: { type: "plot", title: "f(x) = x² − 3x + 2 + t·x^0,5 : jamais plus de 3 zéros", x: [0.01, 4], y: [-2, 4], xlabel: "x", params: [{ k: "t", label: "t", min: -3, max: 3, step: 0.1, v: 0 }], curves: [{ label: "f(x)", f: (x, p) => x * x - 3 * x + 2 + p.t * Math.sqrt(x) }] }
},
{
  id: "o-al-12", subj: "oraux", year: "mp", chap: 0, concours: "c1", level: 4, time: "40 min",
  title: "Transformée de Fourier discrète et divisibilité par Xⁿ − 1",
  enonce: R`<p>Soit $n\geqslant1$ et $\omega = \exp\left(\frac{2i\pi}n\right)$. Pour $P\in\mathbb C[X]$, on définit</p>$$\mathcal F(P) = \sum_{k=0}^{n-1}P(\omega^k)X^k\qquad\text{et}\qquad\check{\mathcal F}(P) = \sum_{k=0}^{n-1}P(\omega^{-k})X^k.$$<ol><li>Montrer que $\mathcal F$ et $\check{\mathcal F}$ sont des endomorphismes de $\mathbb C[X]$.</li><li>Calculer $\check{\mathcal F}\circ\mathcal F$ et en déduire que $\mathcal F$ est un automorphisme de $\mathbb C_{n-1}[X]$, dont on précisera la réciproque.</li><li>Soit $P\in\mathbb Z[X]$ tel que $|P(z)|\leqslant1$ pour tout $z\in\mathbb U_n$, et tel qu'il existe $z\in\mathbb U_n$ racine de $P$. Montrer que $X^n-1$ divise $P$. <i>On admet que si $P$ et $A$ sont à coefficients entiers et $A$ unitaire, le quotient et le reste de la division euclidienne de $P$ par $A$ sont à coefficients entiers.</i></li></ol>`,
  decode: {
    donnees: [R`$\mathcal F(P)$ est le polynôme dont les coefficients sont les valeurs de $P$ aux racines $n$-ièmes de l'unité.`],
    but: R`Inverser $\mathcal F$, puis s'en servir pour retrouver les coefficients d'un reste à partir de ses valeurs.`,
    cles: {
      base: R`Une application linéaire est déterminée par ses valeurs sur une base : on calcule donc $\check{\mathcal F}\circ\mathcal F$ sur chaque $X^\ell$.`,
      fubini: R`On échange l'ordre de deux sommes finies : $\sum_k\sum_j = \sum_j\sum_k$. Aucune condition n'est nécessaire pour des sommes finies.`,
      entier: R`Un entier relatif de valeur absolue strictement inférieure à $1$ est forcément $0$.`
    }
  },
  steps: [
    { t: "Q1 · Linéarité", b: R`<p>Pour $P,Q\in\mathbb C[X]$ et $\lambda,\mu\in\mathbb C$ : $(\lambda P+\mu Q)(\omega^k) = \lambda P(\omega^k)+\mu Q(\omega^k)$, donc</p>$$\mathcal F(\lambda P+\mu Q) = \lambda\mathcal F(P)+\mu\mathcal F(Q).$$<p>Et $\mathcal F(P)\in\mathbb C_{n-1}[X]\subset\mathbb C[X]$. Même raisonnement pour $\check{\mathcal F}$.</p>` },
    { t: "Q2 · Calcul sur la base canonique", b: R`<p>On calcule <span data-k="base">sur chaque $X^\ell$</span>. D'abord $\mathcal F(X^\ell) = \sum_k\omega^{k\ell}X^k$. Puis, par linéarité de $\check{\mathcal F}$ :</p>$$\check{\mathcal F}\big(\mathcal F(X^\ell)\big) = \sum_{k=0}^{n-1}\omega^{k\ell}\sum_{j=0}^{n-1}\omega^{-jk}X^j = \sum_{j=0}^{n-1}\left(\sum_{k=0}^{n-1}\big(\omega^{\ell-j}\big)^k\right)X^j,$$<p>en <span data-k="fubini">échangeant les deux sommes finies</span>.</p>` },
    { t: "Q2 · La somme géométrique", b: R`<p>Avec $q = \omega^{\ell-j}$, on a $q^n = (\omega^n)^{\ell-j} = 1$. Donc :</p><ul><li>si $q\neq1$ : $\sum_kq^k = \frac{1-q^n}{1-q} = 0$ ;</li><li>si $q = 1$, c'est-à-dire $\ell\equiv j\ [n]$ : la somme vaut $n$.</li></ul>`, rappels: ["o-somme-geo-c", "o-racines-unite"] },
    { t: "Q2 · Le résultat", b: R`<p>Pour $\ell\in\{0,\dots,n-1\}$, le seul $j\in\{0,\dots,n-1\}$ avec $j\equiv\ell\ [n]$ est $j = \ell$. Donc $\check{\mathcal F}\circ\mathcal F(X^\ell) = nX^\ell$, et par linéarité :</p>$$\forall P\in\mathbb C_{n-1}[X],\quad\check{\mathcal F}\big(\mathcal F(P)\big) = nP.$$<p>Plus généralement, pour tout $\ell$, $\check{\mathcal F}\circ\mathcal F(X^\ell) = nX^{r}$, où $r$ est le reste de $\ell$ modulo $n$.</p>` },
    { t: "Q2 · Automorphisme", b: R`<p>$\mathcal F$ et $\check{\mathcal F}$ envoient $\mathbb C_{n-1}[X]$ dans lui-même. On a $\left(\frac1n\check{\mathcal F}\right)\circ\mathcal F = \mathrm{Id}$ sur $\mathbb C_{n-1}[X]$, donc $\mathcal F$ y est injectif. En dimension finie, c'est un automorphisme, de réciproque $\frac1n\check{\mathcal F}$.</p>`, rappels: ["o-dim-finie-bij"] },
    { t: "Q3 · Division euclidienne", b: R`<p>On divise $P$ par $X^n-1$, unitaire : $P = Q(X^n-1)+R$ avec $Q,R\in\mathbb Z[X]$ et $\deg R\leqslant n-1$. On écrit $R = \sum_{j=0}^{n-1}r_jX^j$ avec $r_j\in\mathbb Z$. Comme $(\omega^k)^n = 1$ : $R(\omega^k) = P(\omega^k)$ pour tout $k$.</p>`, rappels: ["o-division-euclid"] },
    { t: "Q3 · Retrouver les coefficients de R", b: R`<p>Par Q2, puisque $R\in\mathbb C_{n-1}[X]$ :</p>$$nR = \check{\mathcal F}\big(\mathcal F(R)\big) = \check{\mathcal F}\left(\sum_kP(\omega^k)X^k\right) = \sum_{j=0}^{n-1}\left(\sum_{k=0}^{n-1}P(\omega^k)\,\omega^{-jk}\right)X^j.$$<p>En identifiant les coefficients : $nr_j = \sum_{k=0}^{n-1}P(\omega^k)\,\omega^{-jk}$.</p>` },
    { t: "Q3 · Majorer", b: R`<p>$\mathbb U_n = \{\omega^k\}$, et un des $\omega^{k_0}$ est racine de $P$. Par l'inégalité triangulaire, avec $|\omega^{-jk}| = 1$ et $|P(\omega^k)|\leqslant1$ :</p>$$n|r_j|\leqslant\sum_{k\neq k_0}|P(\omega^k)|\leqslant n-1,\quad\text{donc}\quad|r_j|\leqslant\frac{n-1}n<1.$$<p>Or $r_j$ est <span data-k="entier">un entier</span> : $r_j = 0$. Donc $R = 0$ et $X^n-1$ divise $P$.</p>`, rappels: ["o-tri-complexe"] },
    { t: "Pourquoi les coefficients entiers sont essentiels", b: R`<p>Avec $n = 2$ et $P = \frac{X-1}2$ : $P(1) = 0$ et $|P(-1)| = 1$. Les hypothèses sur les valeurs sont vérifiées, mais $X^2-1$ ne divise pas $P$, qui est de degré $1$. L'argument « entier de valeur absolue $<1$ » est donc indispensable.</p>` }
  ],
  piege: R`Oublier de vérifier $R\in\mathbb C_{n-1}[X]$ avant d'appliquer $\check{\mathcal F}\circ\mathcal F = n\,\mathrm{Id}$ : la formule n'est vraie que sur $\mathbb C_{n-1}[X]$.`,
  methode: R`Pour tester la divisibilité par $X^n-1$, fais la division euclidienne et évalue aux racines $n$-ièmes de l'unité : le reste y prend les mêmes valeurs que $P$.`
},
{
  id: "o-al-13", subj: "oraux", year: "mp", chap: 0, concours: "mp", level: 3, time: "20 min",
  title: "u + v = Id et rangs complémentaires : deux projecteurs",
  enonce: R`<p>Soit $u$ et $v$ deux endomorphismes d'un $\mathbb K$-espace vectoriel $E$ de dimension $n$ tels que $u+v = \mathrm{Id}_E$ et $\operatorname{rg}(u)+\operatorname{rg}(v)\leqslant n$. Montrer que $u$ et $v$ sont des projecteurs.</p>`,
  decode: {
    donnees: [R`$u+v = \mathrm{Id}_E$, donc $v = \mathrm{Id}_E-u$.`, R`Une inégalité sur les rangs.`],
    but: R`Montrer $u^2 = u$ et $v^2 = v$.`,
    cles: {
      cle: R`Si $v(x) = 0$, l'égalité $x = u(x)+v(x)$ devient $x = u(x)$ : $x$ est une image de $u$.`
    }
  },
  steps: [
    { t: "ker v ⊂ Im u", b: R`<p>Soit $x\in\ker v$. <span data-k="cle">Alors</span> $x = \mathrm{Id}_E(x) = u(x)+v(x) = u(x)$, donc $x\in\operatorname{Im} u$.</p>` },
    { t: "Les rangs sont complémentaires", b: R`<p>Par le théorème du rang : $\dim\ker v = n-\operatorname{rg}(v)\leqslant\operatorname{rg}(u)$, donc $n\leqslant\operatorname{rg}(u)+\operatorname{rg}(v)$. Avec l'hypothèse : $\operatorname{rg}(u)+\operatorname{rg}(v) = n$.</p>`, rappels: ["o-rang-thm"] },
    { t: "ker v = Im u", b: R`<p>On a $\ker v\subset\operatorname{Im} u$ et $\dim\ker v = n-\operatorname{rg} v = \operatorname{rg} u = \dim\operatorname{Im} u$. Une inclusion entre sous-espaces de même dimension finie est une égalité. Par symétrie des rôles : $\ker u = \operatorname{Im} v$.</p>` },
    { t: "Les composées sont nulles", b: R`<p>Pour tout $x$ : $u(x)\in\operatorname{Im} u = \ker v$, donc $v(u(x)) = 0$ : $v\circ u = 0$. De même $u\circ v = 0$.</p>` },
    { t: "Conclure", b: R`<p>On compose $u+v = \mathrm{Id}$ par $u$ à gauche : $u^2+u\circ v = u$, donc $u^2 = u$. À droite par $v$ : $u\circ v+v^2 = v$, donc $v^2 = v$. $u$ et $v$ sont des projecteurs.</p><p><b>Exemple :</b> $u = p$ projecteur et $v = \mathrm{Id}-p$. <b>Sans l'hypothèse sur les rangs, c'est faux :</b> $u = 2\,\mathrm{Id}$, $v = -\mathrm{Id}$ vérifient $u+v = \mathrm{Id}$, avec $\operatorname{rg} u+\operatorname{rg} v = 2n$.</p>` }
  ],
  piege: R`Oublier que l'égalité de dimensions ne suffit pas seule : il faut aussi l'inclusion $\ker v\subset\operatorname{Im} u$ pour conclure à l'égalité.`,
  methode: R`Pour montrer qu'un endomorphisme est un projecteur, vise $u\circ v = 0$ avec $v = \mathrm{Id}-u$ : c'est exactement $u^2 = u$.`
},
{
  id: "o-al-14", subj: "oraux", year: "mp", chap: 0, concours: "mp", level: 4, time: "25 min",
  title: "Une fonction multiplicative sur les matrices détecte l'inversibilité",
  enonce: R`<p>Soit $\mathbb K$ un corps et $f : \mathcal M_n(\mathbb K)\to\mathbb K$ une fonction <span data-k="nc">non constante</span> telle que</p>$$\forall(A,B)\in\mathcal M_n(\mathbb K)^2,\quad f(AB) = f(A)f(B).$$<p>Montrer que $f(A) = 0$ si et seulement si $A$ n'est pas inversible.</p>`,
  decode: {
    donnees: [R`$f$ transforme les produits de matrices en produits de scalaires, comme le déterminant.`, R`$f$ n'est pas constante.`],
    but: R`Montrer que $f$ s'annule exactement sur les matrices non inversibles.`,
    cles: {
      nc: R`Il existe deux matrices $A$ et $B$ avec $f(A)\neq f(B)$. C'est cette hypothèse qui exclut $f\equiv0$ et $f\equiv1$.`,
      idem: R`Un scalaire qui vérifie $x^2 = x$ vaut $0$ ou $1$, car $x(x-1) = 0$ dans un corps.`,
      nr: R`Une matrice avec $r$ coefficients égaux à $1$ juste au-dessus de la diagonale, et des $0$ ailleurs. Elle est de rang $r$ et strictement triangulaire supérieure.`
    }
  },
  steps: [
    { t: "Calculer f(Iₙ)", b: R`<p>Avec $A = B = I_n$ : $f(I_n) = f(I_n)^2$, donc <span data-k="idem">$f(I_n)\in\{0,1\}$</span>. Si $f(I_n) = 0$, alors pour toute $A$ : $f(A) = f(AI_n) = f(A)f(I_n) = 0$, et $f$ serait constante. Donc $f(I_n) = 1$.</p>` },
    { t: "Calculer f(0)", b: R`<p>De même $f(0) = f(0)^2\in\{0,1\}$. Si $f(0) = 1$, alors pour toute $A$ : $f(0) = f(A\cdot0) = f(A)f(0)$, donc $f(A) = 1$ : $f$ constante. Donc $f(0) = 0$.</p>` },
    { t: "Sens direct, par contraposée", b: R`<p>Si $A$ est inversible : $1 = f(I_n) = f(AA^{-1}) = f(A)f(A^{-1})$, donc $f(A)\neq0$. Par contraposée : $f(A) = 0\implies A$ non inversible.</p>` },
    { t: "Une matrice nilpotente de rang r", b: R`<p>Soit $r\in\{0,\dots,n-1\}$ et <span data-k="nr">$N_r = \sum_{i=1}^rE_{i,i+1}$</span>. Ses colonnes $2,\dots,r+1$ contiennent chacune un $1$, sur des lignes différentes : $\operatorname{rg}N_r = r$. Elle est strictement triangulaire, donc nilpotente : $N_r^n = 0$. Alors $f(N_r)^n = f(N_r^n) = f(0) = 0$, et dans un corps, $f(N_r) = 0$.</p><p><b>Exemple $n = 3$, $r = 2$ :</b> $N_2 = \begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix}$.</p>` },
    { t: "Sens réciproque", b: R`<p>Soit $A$ non inversible, de rang $r<n$. $A$ et $N_r$ ont même rang, donc sont équivalentes : $A = PN_rQ$ avec $P,Q$ inversibles. Alors</p>$$f(A) = f(P)\,f(N_r)\,f(Q) = 0.$$`, rappels: ["o-rang-equiv"] },
    { t: "Exemples", b: R`<p>$f = \det$ convient, mais aussi $f(A) = (\det A)^2$, ou $f(A) = |\det A|$ sur $\mathbb R$. L'exercice montre que toutes partagent cette propriété du déterminant.</p>` }
  ],
  piege: R`Oublier de calculer $f(I_n)$ et $f(0)$ : sans eux, on ne peut rien dire, et c'est là que sert l'hypothèse « non constante ».`,
  methode: R`Pour une fonction multiplicative, teste-la sur les éléments remarquables ($I_n$, $0$, les nilpotents), puis utilise la réduction $A = PJ_rQ$ ou $A = PN_rQ$.`
},
{
  id: "o-al-15", subj: "oraux", year: "mp", chap: 0, concours: "mp", level: 4, time: "35 min",
  title: "Une matrice de trace nulle est semblable à une matrice de diagonale nulle",
  enonce: R`<p>Soit $A\in\mathcal M_n(\mathbb C)$.</p><ol><li>Montrer que si $A$ n'est pas une homothétie, alors il existe $x\in\mathcal M_{n,1}(\mathbb C)$ tel que la famille $(x,Ax)$ soit libre.</li><li>On suppose $\operatorname{Tr}(A) = 0$. Montrer que $A$ est semblable à une matrice de diagonale nulle.</li></ol>`,
  decode: {
    donnees: [R`$A$ est une matrice complexe carrée.`],
    but: R`Trouver un vecteur « non propre », puis construire une base où la diagonale est nulle.`,
    cles: {
      lie: R`$(x,Ax)$ liée avec $x\neq0$ signifie $Ax = \lambda x$ : $x$ est un vecteur propre.`,
      col: R`La première colonne d'une matrice contient les coordonnées de l'image du premier vecteur de base. Ici $a(x_0) = Ax_0$ est le deuxième vecteur de la base.`
    }
  },
  steps: [
    { t: "Q1 · Par contraposée", b: R`<p>Supposons que pour tout $x$, $(x,Ax)$ soit <span data-k="lie">liée</span>, et montrons que $A$ est une homothétie. Soit $(e_1,\dots,e_n)$ la base canonique. Chaque $e_i\neq0$, donc $Ae_i = \lambda_ie_i$ pour un $\lambda_i$.</p>` },
    { t: "Q1 · Comparer les λᵢ", b: R`<p>Pour $i\geqslant2$, $e_i-e_1\neq0$, donc $A(e_i-e_1) = \mu_i(e_i-e_1)$. Par linéarité :</p>$$\lambda_ie_i-\lambda_1e_1 = \mu_ie_i-\mu_ie_1.$$<p>Comme $(e_1,e_i)$ est libre, on identifie : $\lambda_i = \mu_i$ et $\lambda_1 = \mu_i$. Donc $\lambda_i = \lambda_1$ pour tout $i$, et $A = \lambda_1I_n$.</p>` },
    { t: "Q2 · Récurrence", b: R`<p>$\mathcal H_n$ : « toute matrice de $\mathcal M_n(\mathbb C)$ de trace nulle est semblable à une matrice de diagonale nulle ». Pour $n = 1$ : $A = (a)$ avec $a = 0$ : c'est déjà le cas.</p>`, rappels: ["recurrence"] },
    { t: "Q2 · Le cas d'une homothétie", b: R`<p>Soit $A\in\mathcal M_{n+1}(\mathbb C)$ de trace nulle. Si $A = \lambda I_{n+1}$, alors $\operatorname{Tr} A = (n+1)\lambda = 0$, donc $A = 0$, de diagonale nulle.</p>` },
    { t: "Q2 · Une base bien choisie", b: R`<p>Sinon, par Q1, il existe $x_0$ avec $(x_0,Ax_0)$ libre. On complète en une base $\mathcal B = (x_0,Ax_0,e_3,\dots,e_{n+1})$. Dans $\mathcal B$, <span data-k="col">la première colonne</span> est $(0,1,0,\dots,0)^\top$. Donc $A$ est semblable à</p>$$B = \begin{pmatrix}0&L\\c&C\end{pmatrix},\qquad C\in\mathcal M_n(\mathbb C).$$<p>Deux matrices semblables ont même trace : $0 = \operatorname{Tr} B = 0+\operatorname{Tr} C$, donc $\operatorname{Tr} C = 0$.</p>`, rappels: ["o-semblables"] },
    { t: "Q2 · Utiliser l'hypothèse de récurrence", b: R`<p>Par $\mathcal H_n$, il existe $P_1$ inversible avec $P_1^{-1}CP_1 = N_1$ de diagonale nulle. On pose $P = \begin{pmatrix}1&0\\0&P_1\end{pmatrix}$, d'inverse $\begin{pmatrix}1&0\\0&P_1^{-1}\end{pmatrix}$. Par produit par blocs :</p>$$P^{-1}BP = \begin{pmatrix}0&LP_1\\P_1^{-1}c&P_1^{-1}CP_1\end{pmatrix} = \begin{pmatrix}0&\ast\\\ast&N_1\end{pmatrix}.$$<p>Sa diagonale est nulle, et elle est semblable à $A$.</p>`, rappels: ["o-blocs"] }
  ],
  piege: R`En Q1, utiliser seulement les $e_i$ : on obtient que chaque $e_i$ est propre, mais pas que les valeurs propres sont égales. Les vecteurs $e_i-e_1$ sont indispensables.`,
  methode: R`Pour fabriquer une matrice semblable de forme imposée, choisis une base qui commence par $x_0$ et $Ax_0$, puis fais une récurrence sur le bloc restant.`
},
{
  id: "o-al-16", subj: "oraux", year: "mp", chap: 0, concours: "mp", level: 3, time: "25 min",
  title: "AB et BA ont le même polynôme caractéristique",
  enonce: R`<p>Soit $A,B\in\mathcal M_n(\mathbb C)$. Montrer que les polynômes caractéristiques de $AB$ et $BA$ sont égaux :</p><ol><li>lorsque $A$ est inversible ;</li><li>dans le cas général.</li></ol>`,
  decode: {
    donnees: [R`$\chi_M(X) = \det(XI_n-M)$.`],
    but: R`Montrer $\chi_{AB} = \chi_{BA}$, d'abord facilement, puis par un argument de prolongement.`,
    cles: {
      fini: R`$\chi_A$ est un polynôme non nul de degré $n$ : il a au plus $n$ racines. Donc $A-\lambda I_n$ est inversible pour tous les $\lambda$ sauf au plus $n$.`,
      poly: R`Les coefficients de $zI_n-(A-\lambda I_n)B$ sont des polynômes en $\lambda$, et un déterminant est une somme de produits de coefficients : c'est un polynôme en $\lambda$.`
    }
  },
  steps: [
    { t: "Q1 · AB et BA sont semblables", b: R`<p>Si $A$ est inversible : $AB = A(BA)A^{-1}$. Donc $AB$ et $BA$ sont semblables, et pour tout $x\in\mathbb C$ :</p>$$\det(xI_n-AB) = \det\big(A(xI_n-BA)A^{-1}\big) = \det A\,\det(xI_n-BA)\,\det A^{-1} = \det(xI_n-BA).$$<p>Les deux polynômes coïncident en tout $x$ : ils sont égaux.</p>`, rappels: ["o-det-mult", "o-semblables"] },
    { t: "Q2 · Un contre-exemple instructif", b: R`<p>Dans le cas général, $AB$ et $BA$ ne sont pas forcément semblables. Avec $A = \begin{pmatrix}1&0\\0&0\end{pmatrix}$ et $B = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ : $AB = \begin{pmatrix}0&1\\0&0\end{pmatrix}\neq0$ et $BA = 0$. Elles ne sont pas semblables, mais toutes deux ont pour polynôme caractéristique $X^2$. Il faut donc une autre idée.</p>` },
    { t: "Q2 · Perturber A", b: R`<p>Soit $S$ l'ensemble des racines de $\chi_A$ : <span data-k="fini">un ensemble fini</span>. Pour $\lambda\notin S$, $A-\lambda I_n$ est inversible, donc par Q1 :</p>$$\forall z\in\mathbb C,\quad\det\big(zI_n-(A-\lambda I_n)B\big) = \det\big(zI_n-B(A-\lambda I_n)\big).$$`, rappels: ["o-chi"] },
    { t: "Q2 · Un polynôme en λ", b: R`<p>Fixons $z\in\mathbb C$ et posons</p>$$\varphi(\lambda) = \det\big(zI_n-(A-\lambda I_n)B\big)-\det\big(zI_n-B(A-\lambda I_n)\big).$$<p><span data-k="poly">C'est un polynôme en $\lambda$.</span> Il s'annule pour tout $\lambda\notin S$, c'est-à-dire en une infinité de points : il est nul.</p>`, rappels: ["o-poly-infini"] },
    { t: "Q2 · Conclure", b: R`<p>En particulier $\varphi(0) = 0$ : $\det(zI_n-AB) = \det(zI_n-BA)$, c'est-à-dire $\chi_{AB}(z) = \chi_{BA}(z)$. Ceci pour tout $z\in\mathbb C$ : $\chi_{AB} = \chi_{BA}$.</p>` }
  ],
  piege: R`Croire que $AB$ et $BA$ sont toujours semblables : c'est faux, seul leur polynôme caractéristique est le même.`,
  methode: R`Pour étendre un résultat des matrices inversibles à toutes les matrices, remplace $A$ par $A-\lambda I_n$ et utilise qu'un polynôme nul en une infinité de points est nul.`
},
{
  id: "o-al-17", subj: "oraux", year: "mp", chap: 0, concours: "mp", level: 3, time: "20 min",
  title: "Si det(A + X) = det A + det X pour tout X, alors A = 0",
  enonce: R`<p>Soit $n\geqslant2$ et $A\in\mathcal M_n(\mathbb C)$ telle que</p>$$\forall X\in\mathcal M_n(\mathbb C),\quad\det(A+X) = \det(A)+\det(X).$$<ol><li>Montrer que $A$ n'est pas inversible.</li><li>Montrer que $A$ est nulle.</li></ol>`,
  decode: {
    donnees: [R`Une propriété d'additivité du déterminant, qui est fausse en général.`, R`$n\geqslant2$.`],
    but: R`Montrer que seule la matrice nulle vérifie cette propriété.`,
    cles: {
      choix: R`Toute la difficulté est de choisir le bon $X$ : il doit être non inversible, mais « compléter » $A$ en une matrice inversible.`,
      complement: R`$J_r$ garde les $r$ premières coordonnées, $I_n-J_r$ garde les $n-r$ dernières : leur somme vaut $I_n$.`
    }
  },
  steps: [
    { t: "Q1 · Prendre X = A", b: R`<p>$\det(2A) = 2^n\det A$, car on multiplie chacune des $n$ colonnes par $2$. L'hypothèse donne $2^n\det A = 2\det A$, soit $(2^n-2)\det A = 0$. Comme $n\geqslant2$, $2^n\geqslant4>2$, donc $\det A = 0$ : $A$ n'est pas inversible.</p>`, rappels: ["o-det-mult"] },
    { t: "Q2 · Par l'absurde", b: R`<p>Supposons $A\neq0$, de rang $r$. Comme $A$ est non nulle et non inversible : $0<r<n$. Il existe $P,Q$ inversibles avec $A = P\begin{pmatrix}I_r&0\\0&0\end{pmatrix}Q$.</p>`, rappels: ["o-rang-equiv"] },
    { t: "Q2 · Le bon choix de X", b: R`<p>On <span data-k="choix">choisit</span> $B = P\begin{pmatrix}0&0\\0&I_{n-r}\end{pmatrix}Q$. Son rang est $n-r<n$ (car $r>0$) : $\det B = 0$. Mais <span data-k="complement">les deux blocs se complètent</span> :</p>$$A+B = P\,I_n\,Q = PQ,$$<p>qui est inversible : $\det(A+B)\neq0$.</p>` },
    { t: "Q2 · La contradiction", b: R`<p>L'hypothèse donne $\det(A+B) = \det A+\det B = 0+0 = 0$, contradiction. Donc $A = 0$. Réciproquement, $A = 0$ vérifie bien la propriété.</p><p><b>Pour s'en souvenir :</b> le déterminant n'est pas additif. Par exemple $\det(I_2+I_2) = 4\neq2 = \det I_2+\det I_2$.</p>` }
  ],
  piege: R`Essayer des $X$ simples comme $I_n$ ou $-A$ : ils ne mènent à rien. Il faut construire $X$ à partir de la forme réduite de $A$.`,
  methode: R`Écris $A = PJ_rQ$ : beaucoup de questions sur les matrices de rang $r$ se ramènent à $J_r$, où tout est explicite.`
},
{
  id: "o-al-18", subj: "oraux", year: "mp", chap: 0, concours: "mp", level: 4, time: "30 min",
  title: "Une inégalité de déterminants avec une matrice de rang 1",
  enonce: R`<p>Soit $A,B\in\mathcal M_n(\mathbb R)$ avec $\operatorname{rg}(B) = 1$. Montrer que</p>$$\det(A+B)\det(A-B)\leqslant\big(\det A\big)^2.$$`,
  decode: {
    donnees: [R`$B$ est de rang $1$ : toutes ses colonnes sont proportionnelles à un même vecteur.`],
    but: R`Comparer $\det(A+B)\det(A-B)$ et $(\det A)^2$.`,
    cles: {
      e11: R`$E_{11}$ est la matrice dont le seul coefficient non nul est un $1$ en haut à gauche. Toute matrice de rang $1$ lui est équivalente.`,
      col: R`$A'+\varepsilon E_{11}$ ne diffère de $A'$ que par sa première colonne, à laquelle on ajoute $\varepsilon e_1$.`,
      carre: R`$(a+b)(a-b) = a^2-b^2\leqslant a^2$, car un carré réel est positif.`
    }
  },
  steps: [
    { t: "Se ramener à E₁₁", b: R`<p>$B$ est de rang $1$, donc équivalente à <span data-k="e11">$E_{11}$</span> : $B = PE_{11}Q$ avec $P,Q$ inversibles. On pose $A' = P^{-1}AQ^{-1}$, de sorte que $A = PA'Q$ et</p>$$A\pm B = P(A'\pm E_{11})Q.$$`, rappels: ["o-rang-equiv"] },
    { t: "Simplifier le produit", b: R`<p>Par multiplicativité du déterminant :</p>$$\det(A+B)\det(A-B) = (\det P\det Q)^2\det(A'+E_{11})\det(A'-E_{11}).$$`, rappels: ["o-det-mult"] },
    { t: "La clé : linéarité par colonne", b: R`<p>Pour $\varepsilon = \pm1$, <span data-k="col">seule la première colonne change</span>. Par linéarité du déterminant par rapport à cette colonne :</p>$$\det(A'+\varepsilon E_{11}) = \det A'+\varepsilon\det(e_1,C_2',\dots,C_n') = \det A'+\varepsilon\Delta,$$<p>où $\Delta$ est le mineur de $A'$ obtenu en supprimant la ligne $1$ et la colonne $1$ (on développe $\det(e_1,C_2',\dots)$ selon la première colonne).</p>`, rappels: ["o-det-multilin", "o-dev-det"] },
    { t: "L'inégalité", b: R`<p><span data-k="carre">Par l'identité remarquable</span> :</p>$$\det(A'+E_{11})\det(A'-E_{11}) = (\det A')^2-\Delta^2\leqslant(\det A')^2.$$` },
    { t: "Conclure", b: R`<p>On multiplie par $(\det P\det Q)^2\geqslant0$, ce qui conserve l'inégalité :</p>$$\det(A+B)\det(A-B)\leqslant(\det P\det A'\det Q)^2 = (\det A)^2.$$<p><b>Exemples :</b> avec $A = I_2$, $B = E_{11}$ : $2\times0 = 0\leqslant1$. Avec $A = I_2$, $B = E_{12}$ : $1\times1 = 1\leqslant1$, et l'égalité est atteinte.</p>` }
  ],
  piege: R`Vouloir développer $\det(A+B)$ directement : c'est impossible sans structure. Le passage à $E_{11}$ concentre toute la perturbation dans une seule colonne.`,
  methode: R`Une matrice de rang $1$ s'écrit $PE_{11}Q$ : la perturbation $A\mapsto A+B$ devient une modification d'une seule colonne, sur laquelle le déterminant est affine.`
},
{
  id: "o-al-19", subj: "oraux", year: "mp", chap: 0, concours: "mp", level: 4, time: "20 min",
  title: "Un groupe de matrices qui n'est pas dans GLₙ",
  enonce: R`<p>Soit $n\geqslant2$.</p><ol><li>Déterminer un groupe multiplicatif de matrices de $\mathcal M_n(\mathbb C)$ qui ne soit pas un sous-groupe de $GL_n(\mathbb C)$.</li><li>Montrer que tous les éléments d'un tel groupe ont le même rang.</li></ol>`,
  decode: {
    donnees: [R`On cherche un ensemble de matrices qui est un groupe pour le produit matriciel, avec son propre élément neutre.`],
    but: R`Un exemple, puis une propriété générale de tous ces groupes.`,
    cles: {
      neutre: R`Le neutre du groupe n'est pas forcément $I_n$. Ici c'est $E_{11}$ : il joue le rôle de « $1$ » seulement à l'intérieur du groupe.`,
      inverse: R`L'inverse dans le groupe : un élément $h$ du groupe tel que $gh = hg = e$, où $e$ est le neutre du groupe (pas $I_n$).`
    }
  },
  steps: [
    { t: "Q1 · Le candidat", b: R`<p>Pour $a\in\mathbb C^\ast$, on pose $M(a) = \begin{pmatrix}a&0\\0&0_{n-1}\end{pmatrix}$, et $G = \{M(a) : a\in\mathbb C^\ast\}$. Un calcul direct donne $M(a)M(b) = M(ab)$ : $G$ est stable par produit, et ce produit est associatif.</p>` },
    { t: "Q1 · Neutre et inverses", b: R`<ul><li><span data-k="neutre">Neutre</span> : $e = M(1) = E_{11}$, car $M(a)M(1) = M(1)M(a) = M(a)$.</li><li><span data-k="inverse">Inverse</span> : $M(a)M\big(\tfrac1a\big) = M(1) = e$.</li></ul><p>$G$ est un groupe (et même commutatif). Mais ses éléments sont de rang $1<n$ : aucun n'est inversible. $G\not\subset GL_n(\mathbb C)$.</p>` },
    { t: "Q2 · Les relations utiles", b: R`<p>Soit $G$ un groupe multiplicatif de matrices, de neutre $e$, et $g\in G$. Alors $g = eg$, et il existe $h\in G$ avec $e = gh$.</p>` },
    { t: "Q2 · Comparer les rangs", b: R`<p>Le rang d'un produit est au plus le rang de chaque facteur :</p>$$\operatorname{rg}(g) = \operatorname{rg}(eg)\leqslant\operatorname{rg}(e),\qquad\operatorname{rg}(e) = \operatorname{rg}(gh)\leqslant\operatorname{rg}(g).$$<p>Donc $\operatorname{rg}(g) = \operatorname{rg}(e)$ pour tout $g\in G$ : tous les éléments ont le même rang, celui du neutre.</p>`, rappels: ["o-rang-produit"] },
    { t: "Pour aller plus loin", b: R`<p>Dans l'exemple de Q1, le rang commun est $1$. Si le neutre est $I_n$, le rang commun est $n$ et on retrouve un sous-groupe de $GL_n(\mathbb C)$.</p>` }
  ],
  piege: R`Supposer que le neutre est $I_n$ : c'est faux en général, et c'est précisément le piège de la question 1.`,
  methode: R`Dans un groupe de matrices, écris $g = eg$ et $e = gh$, puis utilise $\operatorname{rg}(AB)\leqslant\min(\operatorname{rg} A,\operatorname{rg} B)$.`
}
]);

/* ---------- Oraux · Dénombrement (chapitre 6) : X-ENS ----------
   Champ h d'une étape : l'indice « coup d'œil ». Champ ctx : rappel de cours appliqué à l'exercice. */
LEMME.CONCOURS.x = "X-ENS";
(() => {
const ch = LEMME.SUBJECTS.find(s => s.id === "oraux").years.mp[5];
if (!ch.cc.includes("x")) ch.cc.push("x");

const f1 = v => +v.toFixed(1);
const FIG = (w, h, body, cap, label) => `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${cap}</figcaption></figure>`;
const S = (x, y, t, a = "start", cls = "sm") => `<text x="${f1(x)}" y="${f1(y)}" class="${cls}" text-anchor="${a}">${t}</text>`;
const TI = (x, y, t, a = "middle", cls = "it") => `<text x="${f1(x)}" y="${f1(y)}" class="${cls}" text-anchor="${a}">${t}</text>`;
const ARR = (x1, y1, x2, y2, c = "k", h = 8) => {
  const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - h * Math.cos(a), by = y2 - h * Math.sin(a), w = h * 0.42;
  return `<line class="v${c}" style="stroke-width:1.6" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(bx)}" y2="${f1(by)}"/><polygon class="h${c}" points="${[[x2, y2], [bx + w * Math.sin(a), by - w * Math.cos(a)], [bx - w * Math.sin(a), by + w * Math.cos(a)]].map(q => q.map(f1).join(",")).join(" ")}"/>`;
};

/* ===== Dominos ===== */
const C = 24;
/* t : suite de "|" (domino vertical, 1 colonne) et "=" (deux dominos horizontaux, 2 colonnes) */
const board = (x0, y0, t, shade) => {
  let x = x0, s = "";
  for (const p of t) {
    const fill = shade && shade.has(x - x0) ? "mass" : "body";
    if (p === "|") { s += `<rect class="${fill}" x="${x + 2}" y="${y0 + 2}" width="${C - 4}" height="${2 * C - 4}" rx="3"/>`; x += C; }
    else { s += `<rect class="${fill}" x="${x + 2}" y="${y0 + 2}" width="${2 * C - 4}" height="${C - 4}" rx="3"/><rect class="${fill}" x="${x + 2}" y="${y0 + C + 2}" width="${2 * C - 4}" height="${C - 4}" rx="3"/>`; x += 2 * C; }
  }
  return s;
};
const TIL = { 1: ["|"], 2: ["||", "="], 3: ["|||", "|=", "=|"], 4: ["||||", "||=", "|=|", "=||", "=="] };
const figDominos = FIG(560, 300, [1, 2, 3, 4].map((n, r) => {
  const y = 18 + r * 70; let x = 92, s = TI(14, y + 30, `n = ${n}`, "start") + S(14, y + 48, `t<tspan dy="3" font-size="9">${n}</tspan><tspan dy="-3"> = ${TIL[n].length}</tspan>`);
  for (const t of TIL[n]) { s += board(x, y, t); x += n * C + 16; }
  return s;
}).join(""),
  R`Tous les pavages pour $n\leqslant4$. Un domino vertical occupe une colonne ; deux dominos horizontaux superposés occupent deux colonnes.`,
  "Tous les pavages d'un ruban de 2 lignes et n colonnes pour n de 1 à 4");
const figCoupe = (() => {
  const grid = (x0, y0, n) => { let s = ""; for (let i = 0; i < n; i++) for (let j = 0; j < 2; j++) s += `<rect x="${x0 + i * C}" y="${y0 + j * C}" width="${C}" height="${C}" style="fill:var(--bg-2);stroke:var(--line)"/>`; return s; };
  const y1 = 30, y2 = 120, n = 6;
  return FIG(520, 210,
    S(10, y1 - 10, "Cas 1 : la dernière colonne est un domino vertical") +
    grid(20, y1, n) + `<rect x="20" y="${y1}" width="${n * C}" height="${2 * C}" class="thin" style="stroke-dasharray:none;stroke:var(--blue);stroke-width:1.5"/>` + TI(20 + n * C / 2, y1 + C + 5, "t<tspan dy=\"3\" font-size=\"10\">n</tspan>", "middle", "it b") + S(20 + n * C / 2, y1 + 2 * C + 16, "n colonnes", "middle") +
    `<rect class="mass" x="${20 + n * C + 2}" y="${y1 + 2}" width="${C - 4}" height="${2 * C - 4}" rx="3"/>` +
    S(10, y2 - 10, "Cas 2 : la case en haut à droite est couverte par un domino horizontal") +
    grid(20, y2, n - 1) + `<rect x="20" y="${y2}" width="${(n - 1) * C}" height="${2 * C}" class="thin" style="stroke-dasharray:none;stroke:var(--blue);stroke-width:1.5"/>` + TI(20 + (n - 1) * C / 2, y2 + C + 5, "t<tspan dy=\"3\" font-size=\"10\">n−1</tspan>", "middle", "it b") + S(20 + (n - 1) * C / 2, y2 + 2 * C + 16, "n − 1 colonnes", "middle") +
    `<rect class="mass" x="${20 + (n - 1) * C + 2}" y="${y2 + 2}" width="${2 * C - 4}" height="${C - 4}" rx="3"/><rect class="mass" x="${20 + (n - 1) * C + 2}" y="${y2 + C + 2}" width="${2 * C - 4}" height="${C - 4}" rx="3"/>` +
    S(20 + (n + 1) * C + 14, y2 + 20, "forcé : la case du bas") + S(20 + (n + 1) * C + 14, y2 + 36, "ne peut plus être couverte") + S(20 + (n + 1) * C + 14, y2 + 52, "que par un horizontal"),
    R`Pour un ruban à $n+1$ colonnes, tout dépend de la façon dont est couverte la case en haut à droite. Les deux cas ne se recouvrent pas et épuisent toutes les possibilités.`,
    "Les deux façons de terminer un pavage");
})();

/* ===== Permutations ===== */
/* Diagramme sagittal : i en haut, sigma(i) en bas ; les points fixes en jaune */
const perm = (x0, y0, sg, title, gap = 34) => {
  const n = sg.length, X = i => x0 + i * gap;
  let s = title ? S(x0 + (n - 1) * gap / 2, y0 - 16, title, "middle") : "";
  sg.forEach((v, i) => {
    const fixe = v === i + 1;
    s += ARR(X(i), y0 + 10, X(v - 1), y0 + 60, fixe ? "g" : "b");
  });
  for (let i = 0; i < n; i++) {
    const fixe = sg[i] === i + 1;
    s += `<circle cx="${X(i)}" cy="${y0}" r="9" class="${fixe ? "mass" : "body"}"/>` + TI(X(i), y0 + 4, i + 1, "middle", "") .replace("<text", '<text style="font-size:11px"');
    s += `<circle cx="${X(i)}" cy="${y0 + 70}" r="9" class="${sg.indexOf(i + 1) === i ? "mass" : "body"}"/>` + TI(X(i), y0 + 74, i + 1, "middle", "").replace("<text", '<text style="font-size:11px"');
  }
  return s;
};
const figPerm3 = FIG(560, 150,
  perm(30, 36, [2, 3, 1], "dérangement") + perm(150, 36, [3, 1, 2], "dérangement") + perm(270, 36, [1, 3, 2], "1 est fixe") + perm(390, 36, [3, 2, 1], "2 est fixe") +
  S(490, 40, "en haut : i") + S(490, 110, "en bas : σ(i)"),
  R`Quelques permutations de $\{1,2,3\}$, dessinées par des flèches $i\to\sigma(i)$. Un point fixe est une flèche verticale (en jaune). Les deux premières n'en ont aucun : $d_3 = 2$.`,
  "Diagrammes de permutations de 1, 2, 3");
const figPointsFixes = FIG(560, 170,
  perm(40, 40, [1, 4, 3, 5, 2], "", 44) +
  `<rect x="232" y="16" width="300" height="118" rx="12" class="thin"/>` +
  S(246, 38, "1. on choisit les points fixes : F = {1, 3}") + S(246, 58, "   2 parmi 5 : 10 choix possibles") +
  S(246, 86, "2. sur les autres, {2, 4, 5}, σ ne fixe rien :") + S(246, 106, "   c'est un dérangement de 3 éléments") + S(246, 126, "   d₃ = 2 choix") +
  S(40, 160, "exemple : σ = (1, 4, 3, 5, 2) a exactement 2 points fixes"),
  R`Une permutation de $\{1,\dots,5\}$ avec exactement $2$ points fixes est déterminée par deux choix indépendants : l'ensemble de ses points fixes, puis un dérangement des autres éléments.`,
  "Décomposer une permutation selon ses points fixes");
const figEmboite = FIG(460, 190,
  `<ellipse cx="200" cy="95" rx="185" ry="80" class="body" style="fill:none"/>` + S(14, 22, "{1, …, n}") +
  `<ellipse cx="230" cy="100" rx="120" ry="52" style="fill:var(--yellow-soft);stroke:var(--gold-ink);stroke-width:1.4"/>` + S(352, 40, "A : m éléments", "start", "sm g") +
  `<ellipse cx="190" cy="104" rx="52" ry="28" style="fill:var(--yellow);stroke:var(--ink);stroke-width:1.2"/>` + S(190, 108, "B : k éléments", "middle") +
  S(404, 182, "B ⊂ A ⊂ {1, …, n}", "end"),
  R`Compter les couples $(A,B)$ avec $B\subset A$, $|A| = m$, $|B| = k$, de deux façons : choisir $B$ puis compléter en $A$, ou choisir $A$ puis $B$ dedans. On obtient $\binom nk\binom{n-k}{m-k} = \binom nm\binom mk$.`,
  "Deux parties emboîtées");
const figTriangle = (() => {
  const n = 5, g = 30, x0 = 70, y0 = 180;
  let s = ARR(x0 - 10, y0, x0 + (n + 1) * g, y0, "k", 7) + ARR(x0, y0 + 10, x0, y0 - (n + 1) * g, "k", 7) + TI(x0 + (n + 1) * g + 4, y0 + 18, "k", "start") + TI(x0 - 18, y0 - (n + 1) * g + 6, "p", "start");
  for (let k = 0; k <= n; k++) for (let p = 0; p + k <= n; p++) s += `<circle cx="${x0 + k * g}" cy="${y0 - p * g}" r="5" class="mass"/>`;
  s += `<rect x="${x0 + 2 * g - 9}" y="${y0 - 3 * g - 9}" width="18" height="${3 * g + 18}" rx="9" class="thin" style="stroke:var(--blue);stroke-dasharray:none;stroke-width:1.6"/>`;
  s += `<rect x="${x0 - 9}" y="${y0 - 2 * g - 9}" width="${3 * g + 18}" height="18" rx="9" class="thin" style="stroke:var(--red);stroke-dasharray:none;stroke-width:1.6"/>`;
  s += S(x0 + 2 * g + 14, y0 - 3 * g - 14, "k fixé : p va de 0 à n − k", "start", "sm b") + S(x0 + 3 * g + 16, y0 - 2 * g + 4, "p fixé : k va de 0 à n − p", "start", "sm r");
  for (let k = 0; k <= n; k++) s += S(x0 + k * g, y0 + 18, k, "middle");
  return FIG(420, 210, s, R`Les couples $(k,p)$ avec $k+p\leqslant n$ (ici $n = 5$) forment un triangle. On peut le parcourir colonne par colonne ($k$ fixé) ou ligne par ligne ($p$ fixé) : la somme est la même.`, "Triangle des indices d'une somme double");
})();

/* ===== Dérangements : convergence vers 1/e ===== */
const dn = [1, 0, 1, 2, 9, 44, 265, 1854, 14833, 133496, 1334961];
const fact = n => n ? n * fact(n - 1) : 1;
const figVers1e = (() => {
  const X = n => 50 + n * 34, Y = y => 190 - y * 300;
  let s = ARR(40, 190, 420, 190, "k", 7) + ARR(50, 196, 50, 20, "k", 7) + S(424, 206, "n", "end") + TI(58, 28, "d<tspan dy=\"3\" font-size=\"10\">n</tspan><tspan dy=\"-3\"> / n!</tspan>", "start");
  s += `<line class="thin" x1="50" y1="${f1(Y(1 / Math.E))}" x2="410" y2="${f1(Y(1 / Math.E))}"/>` + S(412, f1(Y(1 / Math.E)) + 18, "1/e ≈ 0,368", "end");
  s += `<line class="thin" x1="50" y1="${f1(Y(0.5))}" x2="56" y2="${f1(Y(0.5))}" style="stroke-dasharray:none"/>` + S(44, f1(Y(0.5)) + 4, "0,5", "end") + S(44, 194, "0", "end");
  for (let n = 1; n <= 10; n++) { const v = dn[n] / fact(n); s += `<circle cx="${X(n)}" cy="${f1(Y(v))}" r="4.5" class="mass"/>` + S(X(n), 206, n, "middle"); }
  return FIG(440, 216, s, R`Les proportions $d_n/n!$ oscillent autour de $1/e$ et s'en approchent très vite : dès $n = 5$, l'écart est inférieur à $10^{-3}$.`, "La proportion de dérangements tend vers un sur e");
})();

/* ===== Court-circuit ===== */
const node = (x, y, t, cls = "body") => `<circle cx="${x}" cy="${y}" r="15" class="${cls}"/>` + `<text x="${x}" y="${y + 5}" text-anchor="middle" style="font-size:13px" class="it">${t}</text>`;
const figCourt = FIG(560, 210,
  S(14, 22, "Cas 2 : σ(k) ≠ n + 1. On retire n + 1 du cycle.") +
  S(30, 60, "σ :") + node(90, 56, "j") + ARR(106, 56, 164, 56, "b") + node(180, 56, "n+1", "mass") + ARR(196, 56, 254, 56, "b") + node(270, 56, "k") + ARR(286, 56, 344, 56, "b") + node(360, 56, "σ(k)") + S(400, 60, "…") +
  S(30, 126, "τ :") + node(90, 122, "j") + `<path class="vg" style="fill:none;stroke-width:1.8" d="M104 114 Q180 74 256 114"/><polygon class="hg" points="256,114 245,113 250,104"/>` + node(270, 122, "k") + ARR(286, 122, 344, 122, "b") + node(360, 122, "σ(k)") + S(400, 126, "…") +
  S(14, 170, "Cas 1 : σ(k) = n + 1. Les deux éléments s'échangent :") + node(330, 184, "k") + `<path class="vb" style="fill:none;stroke-width:1.6" d="M344 176 Q380 160 416 176"/><path class="vb" style="fill:none;stroke-width:1.6" d="M416 192 Q380 208 344 192"/>` + node(430, 184, "n+1", "mass") + S(460, 188, "on les enlève"),
  R`Le « court-circuit » : on remplace $j\to n+1\to k$ par $j\to k$. On obtient une permutation $\tau$ de $\{1,\dots,n\}$, toujours sans point fixe.`,
  "Retirer n plus un du cycle d'un dérangement");

LEMME.rappels({
  "o-binom": { t: "Coefficient binomial", b: R`<p>Pour $0\leqslant k\leqslant n$, $\binom nk$ (« $k$ parmi $n$ ») est le nombre de parties à $k$ éléments d'un ensemble à $n$ éléments.</p><div class="sbox">$$\begin{gathered}\binom nk = \frac{n!}{k!\,(n-k)!}\\\binom nk = \binom n{n-k},\qquad\binom n0 = \binom nn = 1\end{gathered}$$</div><p><b>Exemple :</b> $\binom42 = \frac{24}{2\times2} = 6$ : les paires de $\{1,2,3,4\}$ sont $12,13,14,23,24,34$.</p>` },
  "o-binome": { t: "Formule du binôme", b: R`<div class="sbox">$$(a+b)^m = \sum_{k=0}^m\binom mk a^kb^{m-k}.$$</div><p>Avec $a = -1$ et $b = 1$ :</p>$$\sum_{k=0}^m(-1)^k\binom mk = (1-1)^m = \begin{cases}1&\text{si }m = 0\\0&\text{si }m\geqslant1\end{cases}$$<p>(avec la convention $0^0 = 1$).</p>` },
  "o-partition": { t: "Principe additif (partition)", b: R`<p>Si $E = A_1\cup\dots\cup A_r$ avec des $A_i$ <b>deux à deux disjoints</b>, alors</p><div class="sbox">$$|E| = |A_1|+|A_2|+\dots+|A_r|.$$</div><p>Pour l'utiliser, il faut vérifier deux choses : chaque élément est dans un des $A_i$ (on n'oublie rien), et dans un seul (on ne compte rien deux fois).</p>` },
  "o-produit": { t: "Principe multiplicatif", b: R`<p>Si un objet est déterminé par une suite de choix, le premier ayant $a$ possibilités et le second $b$ possibilités <b>quel que soit le premier choix</b>, il y a</p><div class="sbox">$$a\times b\ \text{objets}.$$</div><p><b>Exemple :</b> un menu avec $3$ entrées et $4$ plats : $12$ menus.</p>` },
  "o-bij-card": { t: "Bijection et cardinal", b: R`<p>S'il existe une bijection $f : A\to B$ entre deux ensembles finis, alors</p><div class="sbox">$$|A| = |B|.$$</div><p>Pour montrer que $f$ est bijective, le plus simple est souvent d'écrire sa réciproque $g$ et de vérifier $g\circ f = \mathrm{Id}_A$ et $f\circ g = \mathrm{Id}_B$.</p>` },
  "o-rec-lin2": { t: "Suites récurrentes linéaires d'ordre 2", b: R`<p>Soit $u_{n+2} = a\,u_{n+1}+b\,u_n$ avec $b\neq0$. On cherche des solutions $r^n$ : $r$ doit vérifier l'<b>équation caractéristique</b></p><div class="sbox">$$r^2 = ar+b.$$</div><p>Si elle a deux racines réelles distinctes $r_1\neq r_2$, alors il existe des constantes $A,B$ (fixées par $u_0$ et $u_1$) telles que</p><div class="sbox">$$u_n = A\,r_1^n+B\,r_2^n\quad\text{pour tout }n.$$</div>` },
  "o-partie-entiere": { t: "Partie entière", b: R`<p>$\lfloor x\rfloor$ est le plus grand entier inférieur ou égal à $x$ :</p><div class="sbox">$$\lfloor x\rfloor = N\iff N\in\mathbb Z\ \text{et}\ N\leqslant x<N+1.$$</div><p>Méthode pratique : si $x = N+\theta$ avec $N$ entier et $0\leqslant\theta<1$, alors $\lfloor x\rfloor = N$.</p><p><b>Exemples :</b> $\lfloor2{,}7\rfloor = 2$, $\lfloor-2{,}7\rfloor = -3$.</p>` },
  "o-somme-double": { t: "Intervertir une somme triangulaire", b: R`<p>Les couples $(k,p)$ d'entiers positifs avec $k+p\leqslant n$ peuvent se parcourir dans les deux sens :</p><div class="sbox">$$\sum_{k=0}^n\ \sum_{p=0}^{n-k}a_{k,p} = \sum_{p=0}^n\ \sum_{k=0}^{n-p}a_{k,p}.$$</div><p>Une somme finie ne dépend pas de l'ordre des termes.</p>` },
  "o-rayon": { t: "Rayon de convergence", b: R`<p>Le rayon $R$ de $\sum a_nz^n$ est caractérisé par : la série converge (absolument) si $|z|<R$, et la suite $(a_nz^n)$ n'est pas bornée si $|z|>R$.</p><div class="sbox">$$|a_n|\leqslant|b_n|\ \Longrightarrow\ R_a\geqslant R_b$$</div><p>Et si $(a_nz_0^n)$ ne tend pas vers $0$, alors $R\leqslant|z_0|$.</p>` },
  "o-cauchy": { t: "Produit de Cauchy de séries entières", b: R`<p>Si $|z|$ est strictement inférieur aux deux rayons :</p><div class="sbox">$$\begin{gathered}\Big(\sum_{n\geqslant0}a_nz^n\Big)\Big(\sum_{n\geqslant0}b_nz^n\Big) = \sum_{n\geqslant0}c_nz^n\\c_n = \sum_{k=0}^na_kb_{n-k}\end{gathered}$$</div><p>On regroupe les termes $a_kz^k\cdot b_jz^j$ par puissance totale $k+j = n$, comme pour un produit de polynômes.</p>` },
  "o-exp": { t: "Série de l'exponentielle", b: R`<div class="sbox">$$\begin{gathered}e^z = \sum_{n=0}^{+\infty}\frac{z^n}{n!}\quad(z\in\mathbb C)\\\frac1{1-z} = \sum_{n=0}^{+\infty}z^n\quad(|z|<1)\end{gathered}$$</div><p>Le rayon de la première est $+\infty$, celui de la seconde est $1$.</p>` },
  "o-unicite": { t: "Unicité des coefficients", b: R`<p>Si $\sum a_nz^n = \sum b_nz^n$ pour tout $z$ d'un disque $|z|<r$ avec $r>0$, alors</p><div class="sbox">$$a_n = b_n\quad\text{pour tout }n.$$</div><p>On peut donc « identifier les coefficients », comme pour des polynômes.</p>` },
  "o-alternee": { t: "Critère des séries alternées", b: R`<p>Si $(u_n)$ est positive, décroissante et tend vers $0$, alors $\sum(-1)^nu_n$ converge, et son reste $R_n = \sum_{p>n}(-1)^pu_p$ vérifie :</p><div class="sbox">$$\begin{gathered}|R_n|\leqslant u_{n+1}\\R_n\ \text{a le signe de}\ (-1)^{n+1}\end{gathered}$$</div><p>Si $(u_n)$ est <b>strictement</b> décroissante, l'inégalité est stricte.</p>` },
  "o-telescopage": { t: "Somme télescopique", b: R`<div class="sbox">$$\sum_{k=1}^n(v_k-v_{k-1}) = v_n-v_0.$$</div><p>Les termes intermédiaires s'annulent deux à deux : $(v_1-v_0)+(v_2-v_1)+\dots+(v_n-v_{n-1})$.</p>` }
});

LEMME.notions({
  "permutation": { p: "permutations?", t: "Permutation", b: R`<p>Une permutation de $E = \{1,\dots,n\}$ est une bijection $\sigma : E\to E$. On l'écrit souvent par la liste de ses images :</p><div class="sbox">$$\begin{gathered}\sigma = \big(\sigma(1),\dots,\sigma(n)\big)\\|\mathfrak S_n| = n!\end{gathered}$$</div><p><b>Exemple :</b> $\sigma = (2,3,1)$ envoie $1\mapsto2$, $2\mapsto3$, $3\mapsto1$.</p><p><b>Pourquoi $n!$ :</b> $n$ choix pour $\sigma(1)$, puis $n-1$ pour $\sigma(2)$, etc.</p>` },
  "point-fixe": { p: "points? fixes?", t: "Point fixe", b: R`<p>$i$ est un point fixe de $\sigma$ si</p><div class="sbox">$$\sigma(i) = i.$$</div><p><b>Exemple :</b> $(1,3,2)$ fixe $1$ ; $(2,3,1)$ n'a aucun point fixe. L'identité a $n$ points fixes. Aucune permutation n'en a exactement $n-1$ : si $n-1$ éléments sont fixes, le dernier n'a plus que lui-même comme image.</p>` },
  "derangement": { p: "dérangements?", t: "Dérangement", b: R`<p>Une permutation <b>sans point fixe</b> :</p><div class="sbox">$$\forall i,\ \sigma(i)\neq i.$$</div><p>On note $d_n$ leur nombre, avec $d_0 = 1$ (la permutation vide n'a aucun point fixe).</p><table class="vals"><tr><th>$n$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><th>$d_n$</th><td>1</td><td>0</td><td>1</td><td>2</td><td>9</td><td>44</td><td>265</td></tr></table><p><b>Image :</b> $n$ personnes reprennent au hasard leur parapluie ; un dérangement est une répartition où personne n'a le sien.</p>` },
  "coef-binomial": { p: "coefficients? binomiaux|coefficients? binomial", t: "Coefficient binomial", b: R`<div class="sbox">$$\binom nk = \frac{n!}{k!\,(n-k)!} = \frac{n(n-1)\cdots(n-k+1)}{k!}.$$</div><p>Nombre de façons de choisir $k$ objets parmi $n$, sans ordre. <b>Exemple :</b> $\binom52 = \frac{5\times4}{2} = 10$.</p><p><b>Triangle de Pascal :</b> $\binom nk = \binom{n-1}{k-1}+\binom{n-1}k$.</p>` },
  "partition": { p: "partitions?|partitionne(?:r|nt)?", t: "Partition d'un ensemble", b: R`<p>$(A_1,\dots,A_r)$ est une partition de $E$ si les $A_i$ sont <b>disjoints deux à deux</b> et de réunion $E$ :</p><div class="sbox">$$E = A_1\sqcup\dots\sqcup A_r\ \Longrightarrow\ |E| = \sum_{i=1}^r|A_i|.$$</div><p><b>Exemple :</b> les permutations de $\{1,2,3\}$ classées par nombre de points fixes : $2$ (aucun) $+\,3$ (un) $+\,0$ (deux) $+\,1$ (trois) $= 6$.</p>` },
  "rec-lineaire": { p: "suites? récurrentes? linéaires?|récurrences? linéaires?", t: "Suite récurrente linéaire d'ordre 2", b: R`<p>Une suite telle que $u_{n+2} = a\,u_{n+1}+b\,u_n$. Elle est entièrement déterminée par $u_0$ et $u_1$.</p><div class="sbox">$$\begin{gathered}r^2 = ar+b\ \text{a deux racines}\ r_1\neq r_2\\\Longrightarrow\ u_n = A\,r_1^n+B\,r_2^n\end{gathered}$$</div><p><b>Exemple :</b> $u_{n+2} = u_{n+1}+2u_n$ : $r^2 = r+2$, racines $2$ et $-1$, donc $u_n = A\,2^n+B(-1)^n$.</p>` },
  "eq-caracteristique": { p: "équations? caractéristiques?", t: "Équation caractéristique", b: R`<p>Pour $u_{n+2} = a\,u_{n+1}+b\,u_n$, on cherche une solution de la forme $u_n = r^n$ : en divisant par $r^n$,</p><div class="sbox">$$r^{n+2} = a\,r^{n+1}+b\,r^n\iff r^2 = ar+b.$$</div><p>C'est l'équation caractéristique. Ses racines donnent les « briques » $r^n$ des solutions.</p>` },
  "nombre-or": { p: "nombre d'or", t: "Nombre d'or", b: R`<div class="sbox">$$\begin{gathered}\varphi = \frac{1+\sqrt5}2\approx1{,}618\\\psi = \frac{1-\sqrt5}2 = -\frac1\varphi\approx-0{,}618\end{gathered}$$</div><p>Ce sont les racines de $r^2 = r+1$. Relations utiles : $\varphi+\psi = 1$, $\varphi\psi = -1$, $\varphi-\psi = \sqrt5$.</p>` },
  "fibonacci": { p: "suite de Fibonacci|Fibonacci", t: "Suite de Fibonacci", b: R`<div class="sbox">$$F_0 = 0,\quad F_1 = 1,\quad F_{n+2} = F_{n+1}+F_n.$$</div><p>Premiers termes : $0,1,1,2,3,5,8,13,21,\dots$ Formule de Binet : $F_n = \dfrac{\varphi^n-\psi^n}{\sqrt5}$.</p>` },
  "partie-entiere": { p: "parties? entières?", t: "Partie entière", b: R`<div class="sbox">$$\lfloor x\rfloor = N\iff N\in\mathbb Z\ \text{et}\ N\leqslant x<N+1.$$</div><p><b>Entier le plus proche :</b> si $x$ n'est pas un demi-entier, l'entier le plus proche de $x$ est $\big\lfloor x+\tfrac12\big\rfloor$. <b>Exemple :</b> $\lfloor8{,}83+0{,}5\rfloor = 9$.</p>` },
  "serie-entiere": { p: "séries? entières?", t: "Série entière", b: R`<p>Une série de la forme $\sum a_nz^n$, où $z$ est la variable (réelle ou complexe). C'est un « polynôme de degré infini ».</p><div class="sbox">$$S(z) = \sum_{n=0}^{+\infty}a_nz^n\quad\text{pour }|z|<R.$$</div><p><b>Exemple :</b> $\sum z^n = \frac1{1-z}$ pour $|z|<1$.</p>` },
  "serie-gen-exp": { p: "séries? génératrices? exponentielles?", t: "Série génératrice exponentielle", b: R`<p>Pour une suite $(u_n)$, c'est la série entière</p><div class="sbox">$$\sum_{n\geqslant0}\frac{u_n}{n!}\,z^n.$$</div><p>On divise par $n!$ quand on compte des objets « étiquetés » (permutations...) : les produits de séries font alors apparaître des $\binom nk$. <b>Exemple :</b> pour $u_n = 1$, on obtient $e^z$.</p>` },
  "rayon-cv": { p: "rayons? de convergence", t: "Rayon de convergence", b: R`<p>Le nombre $R\in[0,+\infty]$ tel que $\sum a_nz^n$ converge absolument pour $|z|<R$ et diverge grossièrement pour $|z|>R$.</p><div class="sbox">$$|a_n|\leqslant1\ \Longrightarrow\ R\geqslant1.$$</div><p>On compare avec une série connue : ici la série géométrique $\sum z^n$, de rayon $1$.</p>` },
  "produit-cauchy": { p: "produits? de Cauchy", t: "Produit de Cauchy", b: R`<div class="sbox">$$\begin{gathered}\Big(\sum a_nz^n\Big)\Big(\sum b_nz^n\Big) = \sum c_nz^n\\c_n = \sum_{k=0}^na_kb_{n-k}\end{gathered}$$</div><p><b>Exemple :</b> $c_2 = a_0b_2+a_1b_1+a_2b_0$. Valable pour $|z|$ inférieur aux deux rayons.</p>` },
  "serie-alternee": { p: "séries? alternées?", t: "Série alternée", b: R`<p>Une série $\sum(-1)^nu_n$ avec $u_n\geqslant0$. Si $(u_n)$ décroît vers $0$, elle converge et son reste est plus petit que le premier terme négligé :</p><div class="sbox">$$\Big|\sum_{p=n+1}^{+\infty}(-1)^pu_p\Big|\leqslant u_{n+1}.$$</div><p><b>Exemple :</b> $\frac1e = 1-1+\frac12-\frac16+\frac1{24}-\dots$, et l'erreur après $\frac1{24}$ est au plus $\frac1{120}$.</p>` },
  "telescopage": { p: "télescopages?|télescopiques?|télescoper", t: "Télescopage", b: R`<div class="sbox">$$\sum_{k=1}^n(v_k-v_{k-1}) = v_n-v_0.$$</div><p><b>Exemple :</b> $\sum_{k=1}^n\Big(\frac1{k-1}-\frac1k\Big)$ pour $k\geqslant2$ se simplifie de la même façon.</p>` }
});

LEMME.exercises([
{
  id: "o-den-1", subj: "oraux", year: "mp", chap: 5, concours: "x", level: 3, time: "25 min",
  title: "Pavages d'un ruban par des dominos",
  enonce: R`<p>On dispose d'un ruban de $2$ lignes et $n$ colonnes ($n\geqslant1$), formé de $2n$ cases carrées, et d'autant de dominos $1\times2$ qu'on veut. Un <span data-k="pavage">pavage</span> du ruban est une façon de le recouvrir entièrement par des dominos, sans chevauchement ni débordement. On note $t_n$ le nombre de pavages, et on pose <span data-k="tzero">$t_0 = 1$</span>.</p>
<ol>
<li>Dessiner tous les pavages pour $n\leqslant4$.</li>
<li>Montrer que $t_{n+1} = t_n+t_{n-1}$ pour tout $n\geqslant1$.</li>
<li>Exprimer $t_n$ en fonction de $\varphi = \frac{1+\sqrt5}2$ et $\psi = \frac{1-\sqrt5}2$.</li>
<li>Montrer que, pour <b>tout</b> $n\in\mathbb N$, $t_n$ est <span data-k="proche">l'entier le plus proche</span> de $\dfrac{\varphi^{n+1}}{\sqrt5}$, c'est-à-dire $t_n = \Big\lfloor\dfrac{\varphi^{n+1}}{\sqrt5}+\dfrac12\Big\rfloor$.</li>
</ol>`,
  decode: {
    donnees: [R`Un ruban $2\times n$ et des dominos $1\times2$, posés verticalement ou horizontalement.`, R`La convention $t_0 = 1$.`],
    but: R`Les petites valeurs, une récurrence, une formule explicite, puis un calcul par partie entière.`,
    cles: {
      pavage: R`Un pavage est une liste de dominos qui couvre chaque case <b>exactement une fois</b> :$$\text{cases couvertes} = 2n = 2\times(\text{nombre de dominos}).$$Donc un pavage de $2\times n$ utilise toujours $n$ dominos.`,
      tzero: R`Le ruban $2\times0$ est vide : il a un seul pavage, celui qui n'utilise aucun domino.$$t_0 = 1.$$Cette convention rend la récurrence vraie dès $n = 1$ : $t_2 = t_1+t_0 = 1+1 = 2$.`,
      proche: R`Pour un réel $x$ qui n'est pas un demi-entier :$$\text{entier le plus proche de }x = \Big\lfloor x+\frac12\Big\rfloor.$$Exemple : $x = 4{,}96$ donne $\lfloor5{,}46\rfloor = 5$ ; $x = 3{,}04$ donne $\lfloor3{,}54\rfloor = 3$.`,
      bord: R`La case en haut à droite est la case $(1,n+1)$ : ligne $1$, dernière colonne. Elle doit être couverte par un domino, et il n'y a que deux positions possibles.`
    }
  },
  steps: [
    { q: 1, t: "Les petits cas, à la main", h: R`<p>En dénombrement, on commence <b>toujours</b> par les petits cas. Ils servent à deviner la récurrence ($1,2,3,5$ : on reconnaît Fibonacci) et à la vérifier ensuite.</p>`, b: R`<p>Un domino vertical occupe une colonne entière. Deux dominos horizontaux, l'un au-dessus de l'autre, occupent deux colonnes. On énumère :</p>` + figDominos + R`<table class="vals"><tr><th>$n$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>$t_n$</th><td>1</td><td>1</td><td>2</td><td>3</td><td>5</td></tr></table><p>Chaque valeur est la somme des deux précédentes : $2 = 1+1$, $3 = 2+1$, $5 = 3+2$.</p>` },
    { q: 2, t: "Regarder un bord du ruban", h: R`<p>Pour établir une récurrence sur un dénombrement, on fait une <b>partition</b> selon ce qui se passe à une extrémité. Ce qui reste est alors un objet du même type, en plus petit.</p>`, b: R`<p>On prend un pavage du ruban à $n+1$ colonnes et on regarde <span data-k="bord">la case en haut à droite</span>. Deux possibilités, et deux seulement :</p><ul><li><b>Cas 1 :</b> elle est couverte par un domino <b>vertical</b>. Ce domino occupe toute la dernière colonne.</li><li><b>Cas 2 :</b> elle est couverte par un domino <b>horizontal</b>, qui occupe les deux dernières cases de la ligne $1$. Alors la case en bas à droite ne peut plus être couverte par un vertical (la case du dessus est prise) : elle est couverte par un horizontal aussi.</li></ul>` + figCoupe, rappels: ["o-partition"] },
    { q: 2, t: "Compter chaque cas", h: R`<p>Une fois les cas séparés, on montre que chacun est <b>en bijection</b> avec des pavages plus petits. Les deux cas ne se recouvrent pas : on peut additionner.</p>`, b: R`<ul><li><b>Cas 1 :</b> si on enlève le domino vertical, il reste un pavage quelconque du ruban à $n$ colonnes. Inversement, tout pavage à $n$ colonnes, complété par un vertical, donne un pavage du cas 1. Il y en a donc $t_n$.</li><li><b>Cas 2 :</b> si on enlève les deux horizontaux, il reste un pavage quelconque du ruban à $n-1$ colonnes : il y en a $t_{n-1}$.</li></ul><p>Ces deux cas forment une partition des pavages à $n+1$ colonnes :</p><div class="sbox">$$t_{n+1} = t_n+t_{n-1}\qquad(n\geqslant1).$$</div><p><b>Vérification :</b> $t_5 = t_4+t_3 = 5+3 = 8$. C'est la suite de Fibonacci décalée : $t_n = F_{n+1}$.</p>`, rappels: ["o-partition", "o-bij-card"] },
    { q: 3, t: "L'équation caractéristique", h: R`<p>Une suite récurrente linéaire d'ordre 2 à coefficients constants : le réflexe est de chercher des solutions de la forme $r^n$.</p>`, b: R`<p>La récurrence $t_{n+2} = t_{n+1}+t_n$ a pour équation caractéristique</p>$$r^2 = r+1\iff r^2-r-1 = 0.$$<p>Discriminant $\Delta = 1+4 = 5>0$ : deux racines réelles</p>$$\varphi = \frac{1+\sqrt5}2\approx1{,}618,\qquad\psi = \frac{1-\sqrt5}2\approx-0{,}618.$$<p>Donc il existe $A,B$ réels tels que $t_n = A\varphi^n+B\psi^n$ pour tout $n$.</p><p><b>Relations utiles :</b> $\varphi+\psi = 1$, $\varphi\psi = -1$, $\varphi-\psi = \sqrt5$.</p>`, rappels: ["o-rec-lin2"] },
    { q: 3, t: "Trouver les constantes", h: R`<p>Deux inconnues $A,B$ : on utilise les deux premières valeurs $t_0$ et $t_1$, qui déterminent toute la suite.</p>`, b: R`$$\begin{cases}t_0 = A+B = 1\\t_1 = A\varphi+B\psi = 1\end{cases}$$<p>On remplace $B = 1-A$ dans la seconde : $A(\varphi-\psi)+\psi = 1$, donc</p>$$A = \frac{1-\psi}{\varphi-\psi} = \frac\varphi{\sqrt5},\qquad B = 1-A = \frac{\sqrt5-\varphi}{\sqrt5} = -\frac\psi{\sqrt5},$$<p>car $1-\psi = \varphi$ et $\sqrt5-\varphi = \frac{\sqrt5-1}2 = -\psi$. Finalement :</p><div class="sbox">$$t_n = \frac{\varphi^{n+1}-\psi^{n+1}}{\sqrt5}.$$</div><p><b>Contrôle pour $n = 2$ :</b> $\varphi^3 = \varphi\cdot\varphi^2 = \varphi(\varphi+1) = 2\varphi+1$, de même $\psi^3 = 2\psi+1$, donc $t_2 = \frac{2(\varphi-\psi)}{\sqrt5} = 2$.</p>`, rappels: ["o-rec-lin2"] },
    { q: 4, t: "Entier + petit reste", h: R`<p>Pour calculer une partie entière, on écrit le nombre sous la forme <b>entier $+$ reste</b> et on montre que le reste est dans $[0,1[$. Ici, l'entier sera $t_n$ et le reste viendra de $\psi^{n+1}$, qui est petit car $|\psi|<1$.</p>`, b: R`<p>D'après la formule précédente, $\dfrac{\varphi^{n+1}}{\sqrt5} = t_n+\dfrac{\psi^{n+1}}{\sqrt5}$. Donc</p>$$\frac{\varphi^{n+1}}{\sqrt5}+\frac12 = t_n+\underbrace{\Big(\frac12+\frac{\psi^{n+1}}{\sqrt5}\Big)}_{\theta_n}.$$<p>Il reste à montrer que $0<\theta_n<1$.</p>`, rappels: ["o-partie-entiere"] },
    { q: 4, t: "Majorer le reste et conclure", h: R`<p>On majore $|\psi|^{n+1}$ par $|\psi|$ : les puissances d'un nombre de module $<1$ sont de plus en plus petites. Le pire cas est $n = 0$.</p>`, b: R`<p>$|\psi| = \frac{\sqrt5-1}2\approx0{,}618<1$, donc pour tout $n\geqslant0$ :</p>$$\Big|\frac{\psi^{n+1}}{\sqrt5}\Big|\leqslant\frac{|\psi|}{\sqrt5} = \frac{\sqrt5-1}{2\sqrt5}\approx0{,}276<\frac12.$$<p>Donc $0<\theta_n<1$, et $t_n$ est un entier : par définition de la partie entière,</p><div class="sbox">$$t_n = \Big\lfloor\frac{\varphi^{n+1}}{\sqrt5}+\frac12\Big\rfloor\quad\text{pour tout }n\in\mathbb N.$$</div><table class="vals"><tr><th>$n$</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>10</td></tr><tr><th>$\varphi^{n+1}/\sqrt5$</th><td>0,724</td><td>1,171</td><td>1,894</td><td>3,065</td><td>4,960</td><td>89,003</td></tr><tr><th>$t_n$</th><td>1</td><td>1</td><td>2</td><td>3</td><td>5</td><td>89</td></tr></table><p>Comme $\psi<0$, l'approximation est alternativement au-dessus et au-dessous, et l'écart tend vers $0$ très vite.</p>`, rappels: ["o-partie-entiere"] }
  ],
  ctx: {
    "o-partition": R`<p>L'ensemble des pavages à $n+1$ colonnes est coupé en deux :</p>$$P_{n+1} = \underbrace{\{\text{dernière colonne verticale}\}}_{t_n}\ \sqcup\ \underbrace{\{\text{deux horizontaux à droite}\}}_{t_{n-1}}.$$<p>Disjoints : un domino ne peut pas être à la fois vertical et horizontal. Rien d'oublié : la case en haut à droite est forcément couverte.</p>`,
    "o-bij-card": R`<p>« Enlever le domino vertical de droite » est une bijection entre les pavages du cas 1 et ceux du ruban à $n$ colonnes ; sa réciproque est « ajouter un vertical à droite ».</p>`,
    "o-rec-lin2": R`<p>Ici $a = b = 1$ : $r^2 = r+1$, racines $\varphi$ et $\psi$, et $t_n = \frac{\varphi}{\sqrt5}\varphi^n-\frac{\psi}{\sqrt5}\psi^n$, obtenu avec $t_0 = t_1 = 1$.</p>`,
    "o-partie-entiere": R`<p>On écrit $\frac{\varphi^{n+1}}{\sqrt5}+\frac12 = N+\theta$ avec $N = t_n\in\mathbb Z$ et $\theta = \frac12+\frac{\psi^{n+1}}{\sqrt5}\in\,]0,1[$ car $\big|\frac{\psi^{n+1}}{\sqrt5}\big|\leqslant0{,}28$. Donc $\lfloor\cdot\rfloor = t_n$.</p>`
  },
  piege: R`Dans le cas 2, oublier que le domino du bas est <b>forcé</b> : on pourrait croire qu'il reste un ruban « en escalier ». Et ne pas se contenter de « pour $n$ assez grand » : la majoration $0{,}276<\frac12$ marche dès $n = 0$.`,
  methode: R`Récurrence de dénombrement : partition selon ce qui se passe au bord. Formule explicite : équation caractéristique puis conditions initiales. Partie entière : écrire entier $+$ reste et encadrer le reste.`
},
{
  id: "o-den-2", subj: "oraux", year: "mp", chap: 5, concours: "x", level: 3, time: "35 min",
  title: "Permutations sans point fixe : une inversion binomiale",
  enonce: R`<p>Pour $n\geqslant1$, une permutation $\sigma$ de $\{1,\dots,n\}$ est un <span data-k="derange">dérangement</span> si $\sigma(i)\neq i$ pour tout $i$. On note $d_n$ le nombre de dérangements de $\{1,\dots,n\}$, et on pose $d_0 = 1$.</p>
<ol>
<li>Calculer $d_1$, $d_2$, $d_3$ et $d_4$.</li>
<li>Soient $0\leqslant m\leqslant n$. Calculer $\displaystyle S_{n,m} = \sum_{k=0}^m(-1)^k\binom nk\binom{n-k}{m-k}$.</li>
<li>Montrer que $\displaystyle n! = \sum_{k=0}^n\binom nk\,d_{n-k}$.</li>
<li>En déduire que $\displaystyle d_n = n!\sum_{k=0}^n\frac{(-1)^k}{k!}$.</li>
</ol>`,
  decode: {
    donnees: [R`$d_n$ compte les permutations sans point fixe, avec $d_0 = 1$.`, R`$\binom nk$ désigne le coefficient binomial « $k$ parmi $n$ ».`],
    but: R`Une identité sur les coefficients binomiaux, une relation entre $n!$ et les $d_k$, puis l'inversion de cette relation.`,
    cles: {
      derange: R`$\sigma$ est un dérangement si et seulement si$$\forall i\in\{1,\dots,n\},\quad\sigma(i)\neq i.$$Exemple : $(2,1)$ est un dérangement de $\{1,2\}$ ; $(1,2)$ (l'identité) n'en est pas un.`,
      exact: R`« Exactement $k$ points fixes » :$$\big|\{i : \sigma(i) = i\}\big| = k.$$C'est différent de « au moins $k$ » : c'est ce qui rend les $A_k$ disjoints.`,
      delta: R`Le symbole de Kronecker :$$\delta_{m,0} = \begin{cases}1&\text{si }m = 0\\0&\text{sinon}\end{cases}$$Il « sélectionne » un seul terme dans une somme.`
    }
  },
  steps: [
    { q: 1, t: "Les premières valeurs", h: R`<p>On dessine les permutations sous forme de flèches $i\to\sigma(i)$ : un point fixe se voit tout de suite (flèche verticale).</p>`, b: R`<ul><li>$n = 1$ : la seule permutation est l'identité, qui fixe $1$. $d_1 = 0$.</li><li>$n = 2$ : $(1,2)$ et $(2,1)$ ; seule $(2,1)$ convient. $d_2 = 1$.</li><li>$n = 3$ : sur les $6$ permutations, seules $(2,3,1)$ et $(3,1,2)$ ne fixent rien. $d_3 = 2$.</li></ul>` + figPerm3 + R`<p>$n = 4$ : un dérangement de $4$ éléments est soit un cycle de longueur $4$ (il y en a $3! = 6$ : on fixe l'image de $1$, puis on enchaîne), soit le produit de deux échanges disjoints, comme $1\leftrightarrow2$ et $3\leftrightarrow4$ ($3$ façons d'apparier $4$ éléments). $d_4 = 6+3 = 9$.</p>` },
    { q: 2, t: "Transformer le produit de binomiaux", h: R`<p>Quand deux coefficients binomiaux sont « emboîtés » ($\binom nk$ puis $\binom{n-k}{\dots}$), on les écrit avec des factorielles : on voit souvent apparaître un autre produit plus simple, où un seul facteur dépend de $k$.</p>`, b: R`$$\binom nk\binom{n-k}{m-k} = \frac{n!}{k!\,(n-k)!}\cdot\frac{(n-k)!}{(m-k)!\,(n-m)!} = \frac{n!}{k!\,(m-k)!\,(n-m)!}.$$<p>On multiplie et divise par $m!$ :</p><div class="sbox">$$\binom nk\binom{n-k}{m-k} = \frac{n!}{m!\,(n-m)!}\cdot\frac{m!}{k!\,(m-k)!} = \binom nm\binom mk.$$</div><p><b>Interprétation :</b> les deux membres comptent les couples de parties emboîtées $B\subset A$ avec $|B| = k$, $|A| = m$.</p>` + figEmboite, rappels: ["o-binom"] },
    { q: 2, t: "Sommer avec la formule du binôme", h: R`<p>Une fois $\binom nm$ sorti de la somme, il reste $\sum(-1)^k\binom mk$ : c'est un binôme de Newton avec $a = -1$, $b = 1$.</p>`, b: R`<p>$\binom nm$ ne dépend pas de $k$ : on le factorise.</p>$$S_{n,m} = \binom nm\sum_{k=0}^m(-1)^k\binom mk = \binom nm(1-1)^m.$$<div class="sbox">$$S_{n,m} = \begin{cases}1&\text{si }m = 0\\0&\text{si }1\leqslant m\leqslant n\end{cases}\qquad\text{c'est-à-dire}\ S_{n,m} = \delta_{m,0}.$$</div><p><b>Vérification ($n = 2$, $m = 1$) :</b> $\binom20\binom21-\binom21\binom10 = 2-2 = 0$.</p>`, rappels: ["o-binome"] },
    { q: 3, t: "Classer les permutations par points fixes", h: R`<p>On veut une somme sur $k$ qui vaut $n!$ : on cherche une partition de toutes les permutations en paquets indexés par $k$. Le nombre de points fixes est le critère naturel.</p>`, b: R`<p>Pour $0\leqslant k\leqslant n$, soit $A_k$ l'ensemble des permutations ayant <span data-k="exact">exactement $k$</span> points fixes. Chaque permutation a un nombre de points fixes bien défini, compris entre $0$ et $n$ : les $A_k$ forment une partition de $\mathfrak S_n$, donc</p>$$n! = |\mathfrak S_n| = \sum_{k=0}^n|A_k|.$$`, rappels: ["o-partition"] },
    { q: 3, t: "Compter les permutations à k points fixes", h: R`<p>Un élément de $A_k$ se construit en deux choix indépendants : <b>où</b> sont les points fixes, puis <b>ce que fait</b> $\sigma$ ailleurs. Principe multiplicatif.</p>`, b: R`<ul><li>On choisit l'ensemble $F$ des $k$ points fixes : $\binom nk$ choix.</li><li>Sur les $n-k$ autres éléments, $\sigma$ est une permutation qui ne fixe <b>aucun</b> d'entre eux (sinon il y aurait plus de $k$ points fixes) : c'est un dérangement d'un ensemble à $n-k$ éléments, soit $d_{n-k}$ choix.</li></ul>` + figPointsFixes + R`<p>Donc $|A_k| = \binom nk d_{n-k}$, et</p><div class="sbox">$$n! = \sum_{k=0}^n\binom nk\,d_{n-k}.$$</div><p>$k = n$ donne l'identité ($d_0 = 1$), $k = n-1$ donne $0$ ($d_1 = 0$). <b>Vérification ($n = 3$) :</b> $d_3+3d_2+3d_1+d_0 = 2+3+0+1 = 6$.</p>`, rappels: ["o-produit", "o-binom"] },
    { q: 4, t: "Partir du membre de droite", h: R`<p>On veut « inverser » la relation de la question 3. Idée : partir de la formule à démontrer, développer $(n-k)!$ avec la question 3 elle-même, et espérer que la question 2 tue presque tout.</p>`, b: R`$$n!\sum_{k=0}^n\frac{(-1)^k}{k!} = \sum_{k=0}^n(-1)^k\frac{n!}{k!\,(n-k)!}(n-k)! = \sum_{k=0}^n(-1)^k\binom nk(n-k)!.$$<p>On applique la question 3 à l'entier $n-k$, en écrivant les termes dans l'autre sens ($\binom{n-k}{j} = \binom{n-k}{n-k-j}$) :</p>$$(n-k)! = \sum_{p=0}^{n-k}\binom{n-k}p\,d_p.$$` },
    { q: 4, t: "Intervertir les deux sommes", h: R`<p>On veut garder $d_p$ « à l'extérieur » pour isoler son coefficient. Il faut donc faire de $p$ l'indice de la somme extérieure.</p>`, b: R`$$n!\sum_{k=0}^n\frac{(-1)^k}{k!} = \sum_{k=0}^n\sum_{p=0}^{n-k}(-1)^k\binom nk\binom{n-k}p\,d_p.$$<p>Les couples $(k,p)$ parcourus sont ceux avec $k,p\geqslant0$ et $k+p\leqslant n$ :</p>` + figTriangle + R`$$= \sum_{p=0}^n d_p\underbrace{\sum_{k=0}^{n-p}(-1)^k\binom nk\binom{n-k}p}_{c_p}.$$`, rappels: ["o-somme-double"] },
    { q: 4, t: "Reconnaître la question 2", h: R`<p>Le coefficient $c_p$ ressemble à $S_{n,m}$ : il faut juste trouver le bon $m$, grâce à la symétrie $\binom ab = \binom a{a-b}$.</p>`, b: R`<p>Posons $m = n-p$. Alors $\binom{n-k}p = \binom{n-k}{(n-k)-p} = \binom{n-k}{m-k}$, et $k$ va de $0$ à $m$ :</p>$$c_p = \sum_{k=0}^m(-1)^k\binom nk\binom{n-k}{m-k} = S_{n,m} = \delta_{n-p,0}.$$<p>Seul le terme $p = n$ survit :</p><div class="sbox">$$n!\sum_{k=0}^n\frac{(-1)^k}{k!} = d_n.$$</div><p><b>Vérification :</b> $4!\big(1-1+\frac12-\frac16+\frac1{24}\big) = 12-4+1 = 9 = d_4$.</p>`, rappels: ["o-binom"] }
  ],
  ctx: {
    "o-binom": R`<p>On utilise la définition avec les factorielles pour simplifier $(n-k)!$, puis la symétrie</p>$$\binom{n-k}p = \binom{n-k}{n-k-p}$$<p>pour mettre $c_p$ sous la forme de $S_{n,n-p}$.</p>`,
    "o-binome": R`<p>Avec $a = -1$, $b = 1$ et l'exposant $m$ :</p>$$\sum_{k=0}^m(-1)^k\binom mk = 0^m.$$<p>C'est le seul endroit où le signe $(-1)^k$ sert : il fait tout s'annuler sauf pour $m = 0$.</p>`,
    "o-partition": R`<p>$\mathfrak S_n = A_0\sqcup A_1\sqcup\dots\sqcup A_n$. Pour $n = 3$ : $|A_0| = 2$, $|A_1| = 3$, $|A_2| = 0$, $|A_3| = 1$, total $6$.</p>`,
    "o-produit": R`<p>Premier choix : l'ensemble des points fixes ($\binom nk$ façons). Second choix : un dérangement des autres ($d_{n-k}$ façons, quel que soit le premier choix). D'où $|A_k| = \binom nk d_{n-k}$.</p>`,
    "o-somme-double": R`<p>Ici $a_{k,p} = (-1)^k\binom nk\binom{n-k}p d_p$, sur le triangle $k+p\leqslant n$. On passe de « $k$ dehors » à « $p$ dehors » pour regrouper tous les termes en $d_p$.</p>`
  },
  piege: R`Confondre « exactement $k$ points fixes » et « au moins $k$ » : seuls les premiers donnent une partition. Et oublier $d_0 = 1$ : sans lui, l'identité n'est pas comptée.`,
  methode: R`Pour inverser $u_n = \sum\binom nk v_k$ : développer, intervertir les sommes, et utiliser $\sum_k(-1)^k\binom mk = \delta_{m,0}$. On obtient $v_n = \sum(-1)^{n-k}\binom nk u_k$.`
},
{
  id: "o-den-3", subj: "oraux", year: "mp", chap: 5, concours: "x", level: 4, time: "30 min",
  title: "Dérangements et série génératrice exponentielle",
  enonce: R`<p>On note $d_n$ le nombre de permutations de $\{1,\dots,n\}$ sans point fixe, avec $d_0 = 1$. On admet que, pour tout $n\in\mathbb N$, $\displaystyle\sum_{k=0}^n\binom nk d_k = n!$.</p>
<p>On considère la <span data-k="sge">série génératrice exponentielle</span> $\displaystyle D(z) = \sum_{n=0}^{+\infty}\frac{d_n}{n!}z^n$.</p>
<ol>
<li>Montrer que son rayon de convergence $R$ vérifie $R\geqslant1$.</li>
<li>Montrer que $D(z)\,e^z = \dfrac1{1-z}$ pour $|z|<1$.</li>
<li>En déduire une expression de $\dfrac{d_n}{n!}$ comme somme finie.</li>
<li>Montrer que, pour $n\geqslant1$, $d_n$ est l'entier le plus proche de $\dfrac{n!}e$. Que se passe-t-il pour $n = 0$ ? Déterminer enfin $\displaystyle\lim_{n\to\infty}\frac{d_n}{n!}$ et la valeur exacte de $R$.</li>
</ol>`,
  decode: {
    donnees: [R`La relation $\sum_{k=0}^n\binom nk d_k = n!$ (admise, démontrée dans un autre exercice).`, R`Les séries entières de $e^z$ et de $\frac1{1-z}$.`],
    but: R`Le rayon, une identité de séries entières, puis une formule et une approximation de $d_n$.`,
    cles: {
      sge: R`On divise le $n$-ième terme par $n!$ :$$D(z) = \frac{d_0}{0!}+\frac{d_1}{1!}z+\frac{d_2}{2!}z^2+\dots = 1+0+\frac12z^2+\frac13z^3+\frac38z^4+\dots$$Avec ce choix, les produits de séries font apparaître les $\binom nk$.`,
      inclus: R`Les dérangements sont des permutations particulières :$$\{\text{dérangements}\}\subset\mathfrak S_n\ \Longrightarrow\ d_n\leqslant|\mathfrak S_n| = n!.$$`,
      reste: R`Le reste d'ordre $n$ de la série qui donne $\frac1e$ :$$R_n = \sum_{p=n+1}^{+\infty}\frac{(-1)^p}{p!} = \frac1e-\sum_{p=0}^n\frac{(-1)^p}{p!}.$$`
    }
  },
  steps: [
    { q: 1, t: "Comparer à la série géométrique", h: R`<p>Pour minorer un rayon de convergence, on <b>majore</b> les coefficients par ceux d'une série dont on connaît le rayon.</p>`, b: R`<p>Les dérangements sont des permutations, <span data-k="inclus">donc</span> $0\leqslant d_n\leqslant n!$, soit</p>$$0\leqslant\frac{d_n}{n!}\leqslant1.$$<p>Pour $|z|<1$ : $\Big|\dfrac{d_n}{n!}z^n\Big|\leqslant|z|^n$, terme d'une série géométrique convergente. La série $D(z)$ converge absolument, donc $R\geqslant1$.</p>`, rappels: ["o-rayon"] },
    { q: 2, t: "Repérer un produit de Cauchy", h: R`<p>Une somme $\sum_{k=0}^na_k\,b_{n-k}$ est le coefficient de $z^n$ dans le produit $\big(\sum a_kz^k\big)\big(\sum b_jz^j\big)$. Il faut donc diviser la relation admise par $n!$ pour faire apparaître $\frac{d_k}{k!}$ et $\frac1{(n-k)!}$.</p>`, b: R`<p>On divise la relation admise par $n!$, avec $\binom nk = \frac{n!}{k!(n-k)!}$ :</p>$$1 = \sum_{k=0}^n\frac{d_k}{k!}\cdot\frac1{(n-k)!}.$$<div class="sbox">$$\underbrace{1}_{c_n} = \sum_{k=0}^n\underbrace{\frac{d_k}{k!}}_{a_k}\ \underbrace{\frac1{(n-k)!}}_{b_{n-k}}.$$</div><p>Les $a_k$ sont les coefficients de $D$, les $b_j = \frac1{j!}$ ceux de $e^z$, et les $c_n = 1$ ceux de $\frac1{1-z}$.</p>`, rappels: ["o-cauchy"] },
    { q: 2, t: "Écrire le produit", h: R`<p>Le produit de Cauchy n'est valable que là où les <b>deux</b> séries convergent : le rayon de $e^z$ est $+\infty$, celui de $D$ au moins $1$.</p>`, b: R`<p>Pour $|z|<1$, les deux séries convergent absolument, donc</p>$$D(z)\,e^z = \sum_{n=0}^{+\infty}\Big(\sum_{k=0}^n\frac{d_k}{k!}\frac1{(n-k)!}\Big)z^n = \sum_{n=0}^{+\infty}z^n = \frac1{1-z}.$$<div class="sbox">$$D(z) = \frac{e^{-z}}{1-z}\qquad(|z|<1).$$</div>`, rappels: ["o-cauchy", "o-exp"] },
    { q: 3, t: "Développer et identifier", h: R`<p>On a maintenant $D$ comme produit de deux séries connues. Un nouveau produit de Cauchy donne ses coefficients, et l'unicité permet d'identifier avec $\frac{d_n}{n!}$.</p>`, b: R`<p>$e^{-z} = \sum_p\frac{(-1)^p}{p!}z^p$ et $\frac1{1-z} = \sum_qz^q$ (tous les coefficients valent $1$). Le coefficient de $z^n$ du produit est</p>$$\sum_{p=0}^n\frac{(-1)^p}{p!}\times1.$$<p>Par unicité des coefficients d'une série entière :</p><div class="sbox">$$\frac{d_n}{n!} = \sum_{p=0}^n\frac{(-1)^p}{p!} = 1-1+\frac1{2!}-\frac1{3!}+\dots+\frac{(-1)^n}{n!}.$$</div><p><b>Vérification ($n = 4$) :</b> $24\big(\frac12-\frac16+\frac1{24}\big) = 12-4+1 = 9$.</p>`, rappels: ["o-cauchy", "o-unicite", "o-exp"] },
    { q: 4, t: "Comparer à 1/e", h: R`<p>La somme $\sum_{p\leqslant n}\frac{(-1)^p}{p!}$ est le début de la série de $e^{-1}$. On écrit donc $\frac1e = $ (somme partielle) $+$ (reste), puis on multiplie par $n!$ : comme pour Fibonacci, on obtient « entier $+$ petit reste ».</p>`, b: R`$$\frac1e = \sum_{p=0}^{+\infty}\frac{(-1)^p}{p!} = \frac{d_n}{n!}+R_n,$$<p>où $R_n$ est <span data-k="reste">le reste</span>. En multipliant par $n!$ :</p><div class="sbox">$$\frac{n!}e = d_n+n!\,R_n.$$</div>`, rappels: ["o-exp"] },
    { q: 4, t: "Majorer le reste", h: R`<p>Le reste d'une série alternée se majore par le premier terme négligé. Ici il vaut $\frac1{(n+1)!}$, et le facteur $n!$ le transforme en $\frac1{n+1}$.</p>`, b: R`<p>$\big(\frac1{p!}\big)$ est positive, strictement décroissante et tend vers $0$ : par le critère des séries alternées,</p>$$|R_n|<\frac1{(n+1)!},\qquad\text{donc}\qquad|n!\,R_n|<\frac{n!}{(n+1)!} = \frac1{n+1}\leqslant\frac12\quad(n\geqslant1).$$<p>Alors $\frac{n!}e+\frac12 = d_n+\theta$ avec $\theta = \frac12+n!R_n\in\,]0,1[$ :</p><div class="sbox">$$d_n = \Big\lfloor\frac{n!}e+\frac12\Big\rfloor\qquad(n\geqslant1).$$</div><p><b>Exemples :</b> $\frac{4!}e\approx8{,}83$ donne $9$ ; $\frac{5!}e\approx44{,}15$ donne $44$.</p><p><b>Pour $n = 0$, c'est faux :</b> $\frac{0!}e+\frac12\approx0{,}87$ a pour partie entière $0$, alors que $d_0 = 1$. La majoration $\frac1{n+1}\leqslant\frac12$ demande bien $n\geqslant1$.</p>`, rappels: ["o-alternee", "o-partie-entiere"] },
    { q: 4, t: "Limite et rayon exact", h: R`<p>Si une série entière converge en un point $z_0$, son terme général tend vers $0$ en ce point. Donc un terme qui <b>ne</b> tend pas vers $0$ en $z_0 = 1$ interdit $R>1$.</p>`, b: R`<p>La somme partielle tend vers la somme de la série :</p>$$\frac{d_n}{n!}\xrightarrow[n\to\infty]{}\frac1e\approx0{,}368.$$` + figVers1e + R`<p><b>Interprétation :</b> une permutation tirée au hasard n'a aucun point fixe avec une probabilité proche de $37\,\%$, quel que soit $n$ grand.</p><p><b>Rayon :</b> en $z = 1$, le terme général $\frac{d_n}{n!}\cdot1^n$ tend vers $\frac1e\neq0$. Si on avait $R>1$, la série convergerait en $1$ et ce terme tendrait vers $0$ : contradiction. Donc $R\leqslant1$, et avec la question 1 :</p><div class="sbox">$$R = 1.$$</div><p>C'est cohérent avec $D(z) = \frac{e^{-z}}{1-z}$, qui « explose » en $z = 1$.</p>`, rappels: ["o-rayon"] }
  ],
  ctx: {
    "o-rayon": R`<p>Minoration : $\big|\frac{d_n}{n!}\big|\leqslant1$, donc $R\geqslant$ le rayon de $\sum z^n$, c'est-à-dire $1$.</p><p>Majoration : en $z_0 = 1$, $\frac{d_n}{n!}\to\frac1e\neq0$, donc $R\leqslant1$.</p>`,
    "o-cauchy": R`<p>Utilisé deux fois. D'abord avec $a_k = \frac{d_k}{k!}$, $b_j = \frac1{j!}$ : $c_n = 1$. Ensuite avec $a_p = \frac{(-1)^p}{p!}$, $b_q = 1$ : $c_n = \sum_{p\leqslant n}\frac{(-1)^p}{p!}$.</p>`,
    "o-exp": R`<p>$e^{-z} = \sum\frac{(-1)^p}{p!}z^p$ (on remplace $z$ par $-z$) et, en $z = 1$, $\frac1e = \sum\frac{(-1)^p}{p!}$.</p>`,
    "o-unicite": R`<p>Pour $|z|<1$ : $\sum\frac{d_n}{n!}z^n = \sum\Big(\sum_{p\leqslant n}\frac{(-1)^p}{p!}\Big)z^n$, donc les coefficients sont égaux un par un.</p>`,
    "o-alternee": R`<p>Ici $u_p = \frac1{p!}$, strictement décroissante pour $p\geqslant1$. Le premier terme négligé après le rang $n$ est $u_{n+1} = \frac1{(n+1)!}$.</p>`,
    "o-partie-entiere": R`<p>$\frac{n!}e+\frac12 = N+\theta$ avec $N = d_n$ et $\theta = \frac12+n!R_n$. Comme $|n!R_n|<\frac12$, on a $0<\theta<1$.</p>`
  },
  piege: R`Affirmer que la formule marche aussi pour $n = 0$ : $\lfloor\frac1e+\frac12\rfloor = 0\neq d_0$. Et utiliser le produit de Cauchy sans vérifier que $|z|$ est inférieur aux deux rayons.`,
  methode: R`Série génératrice exponentielle : une relation $\sum\binom nk a_kb_{n-k} = c_n$ devient $A(z)B(z) = C(z)$. On divise, on redéveloppe, on identifie les coefficients.`
},
{
  id: "o-den-4", subj: "oraux", year: "mp", chap: 5, concours: "x", level: 4, time: "30 min",
  title: "Dérangements : deux récurrences par une preuve combinatoire",
  enonce: R`<p>On note $\mathcal D_n$ l'ensemble des permutations de $\{1,\dots,n\}$ sans point fixe et $d_n = |\mathcal D_n|$, avec $d_0 = 1$ et $d_1 = 0$.</p>
<ol>
<li>Montrer, <span data-k="combi">par un argument combinatoire</span>, que $d_{n+1} = n\,(d_n+d_{n-1})$ pour tout $n\geqslant1$.</li>
<li>On pose $u_n = d_n-n\,d_{n-1}$ pour $n\geqslant1$. Calculer $u_{n+1}$ en fonction de $u_n$, puis montrer que $d_n = n\,d_{n-1}+(-1)^n$. Calculer $d_5$ et $d_6$.</li>
<li>En déduire une formule explicite pour $d_n$.</li>
</ol>`,
  decode: {
    donnees: [R`$d_0 = 1$, $d_1 = 0$ ; $d_n$ compte les dérangements de $\{1,\dots,n\}$.`],
    but: R`Une récurrence prouvée en comptant, une seconde obtenue par calcul, puis la formule de $d_n$.`,
    cles: {
      combi: R`Une preuve combinatoire montre une égalité $|E| = |F|$ en <b>comptant</b> : partition de $E$, bijections entre ensembles. Pas de calcul algébrique. Ici :$$|\mathcal D_{n+1}| = n\times\big(|\mathcal D_n|+|\mathcal D_{n-1}|\big).$$`,
      image: R`$\sigma(n+1)\neq n+1$ car $\sigma$ n'a pas de point fixe, donc$$\sigma(n+1)\in\{1,\dots,n\}\quad(n\ \text{valeurs possibles}).$$`,
      antec: R`$j = \sigma^{-1}(n+1)$ est l'unique élément envoyé sur $n+1$ :$$\sigma(j) = n+1.$$Il existe car $\sigma$ est bijective, et $j\neq n+1$ (pas de point fixe), $j\neq k$ (car $\sigma(k)\neq n+1$ dans ce cas).`
    }
  },
  steps: [
    { q: 1, t: "Classer selon l'image de n + 1", h: R`<p>Le facteur $n$ dans $n(d_n+d_{n-1})$ suggère $n$ paquets de même taille. Le critère naturel : où $\sigma$ envoie le dernier élément $n+1$.</p>`, b: R`<p>Soit $\sigma\in\mathcal D_{n+1}$. Son image <span data-k="image">$k = \sigma(n+1)$</span> est dans $\{1,\dots,n\}$. Pour chaque $k$, on note</p>$$F_k = \{\sigma\in\mathcal D_{n+1} : \sigma(n+1) = k\}.$$<p>Les $F_1,\dots,F_n$ forment une partition de $\mathcal D_{n+1}$. Il suffit de montrer que</p><div class="sbox">$$|F_k| = d_n+d_{n-1}\quad\text{pour chaque }k.$$</div><p>On fixe $k$ et on coupe $F_k$ en deux selon que $\sigma(k) = n+1$ ou non.</p>`, rappels: ["o-partition"] },
    { q: 1, t: "Cas 1 : k et n + 1 s'échangent", h: R`<p>Si $\sigma$ échange $k$ et $n+1$, ces deux éléments forment un « bloc » à part. Le reste de $\sigma$ est un dérangement de ce qui reste.</p>`, b: R`<p>Soit $G_k = \{\sigma\in F_k : \sigma(k) = n+1\}$. Pour un tel $\sigma$, les $n-1$ autres éléments $\{1,\dots,n\}\setminus\{k\}$ sont envoyés entre eux, sans point fixe.</p><p>Réciproquement, tout dérangement de ces $n-1$ éléments, complété par l'échange $k\leftrightarrow n+1$, donne un élément de $G_k$. C'est une bijection :</p>$$|G_k| = d_{n-1}.$$<p>(Pour $n = 1$ : il reste $0$ élément, et $d_0 = 1$ compte bien la seule possibilité, l'échange $1\leftrightarrow2$.)</p>`, rappels: ["o-bij-card"] },
    { q: 1, t: "Cas 2 : court-circuiter n + 1", h: R`<p>Si $n+1$ est « au milieu » d'un cycle ($j\to n+1\to k$), on peut le retirer en reliant directement $j$ à $k$. C'est l'idée clé : supprimer un élément sans créer de point fixe.</p>`, b: R`<p>Soit $H_k = F_k\setminus G_k$ : ici $\sigma(k)\neq n+1$. Soit <span data-k="antec">$j = \sigma^{-1}(n+1)$</span>. On définit $\tau$ sur $\{1,\dots,n\}$ par</p><div class="sbox">$$\tau(j) = k,\qquad\tau(i) = \sigma(i)\ \text{pour}\ i\neq j.$$</div>` + figCourt + R`<ul><li>$\tau$ est une permutation de $\{1,\dots,n\}$ : on a seulement « recollé » la flèche $j\to n+1\to k$ en $j\to k$.</li><li>$\tau$ n'a pas de point fixe : $\tau(j) = k\neq j$, et pour $i\neq j$, $\tau(i) = \sigma(i)\neq i$.</li></ul><p><b>Réciproque :</b> à partir de $\tau\in\mathcal D_n$, on pose $j = \tau^{-1}(k)$ et on insère $n+1$ : $\sigma(j) = n+1$, $\sigma(n+1) = k$, $\sigma = \tau$ ailleurs. On obtient un dérangement avec $\sigma(n+1) = k$ et $\sigma(k) = \tau(k)\neq n+1$. Donc $|H_k| = d_n$.</p>`, rappels: ["o-bij-card"] },
    { q: 1, t: "Assembler", h: R`<p>On additionne les deux cas (partition de $F_k$), puis les $n$ paquets $F_k$ (tous de même taille).</p>`, b: R`$$|F_k| = |G_k|+|H_k| = d_{n-1}+d_n,\qquad d_{n+1} = \sum_{k=1}^n|F_k| = n\,(d_n+d_{n-1}).$$<div class="sbox">$$d_{n+1} = n\,(d_n+d_{n-1})\qquad(n\geqslant1).$$</div><p><b>Vérification :</b> $d_2 = 1\cdot(0+1) = 1$, $d_3 = 2(1+0) = 2$, $d_4 = 3(2+1) = 9$.</p>`, rappels: ["o-partition"] },
    { q: 2, t: "Une suite qui change seulement de signe", h: R`<p>La récurrence contient $n\,d_n$ et $(n+1)\,d_n$ : en comparant $d_{n+1}-(n+1)d_n$ avec $d_n-n\,d_{n-1}$, on espère une relation très simple.</p>`, b: R`<p>Pour $n\geqslant1$ :</p>$$u_{n+1} = d_{n+1}-(n+1)d_n = n\,d_n+n\,d_{n-1}-(n+1)d_n = -\big(d_n-n\,d_{n-1}\big) = -u_n.$$<div class="sbox">$$u_{n+1} = -u_n.$$</div><p>$(u_n)$ est géométrique de raison $-1$.</p>` },
    { q: 2, t: "Conclure et calculer", h: R`<p>Une suite géométrique est déterminée par son premier terme : il suffit de calculer $u_1$.</p>`, b: R`<p>$u_1 = d_1-1\cdot d_0 = 0-1 = -1$, donc $u_n = (-1)^{n-1}u_1 = (-1)^n$ :</p><div class="sbox">$$d_n = n\,d_{n-1}+(-1)^n\qquad(n\geqslant1).$$</div><table class="vals"><tr><th>$n$</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><th>$d_n$</th><td>$1\cdot1-1 = 0$</td><td>$2\cdot0+1 = 1$</td><td>$3\cdot1-1 = 2$</td><td>$4\cdot2+1 = 9$</td><td>$5\cdot9-1 = 44$</td><td>$6\cdot44+1 = 265$</td></tr></table>` },
    { q: 3, t: "Diviser par n! et télescoper", h: R`<p>Dans $d_n = n\,d_{n-1}+\dots$, le facteur $n$ gêne. En divisant par $n!$, il disparaît : $\frac{n\,d_{n-1}}{n!} = \frac{d_{n-1}}{(n-1)!}$. On obtient une différence de termes consécutifs, qui se télescope.</p>`, b: R`$$\frac{d_n}{n!}-\frac{d_{n-1}}{(n-1)!} = \frac{(-1)^n}{n!}\qquad(n\geqslant1).$$<p>On somme pour $k = 1,\dots,n$ : à gauche, tout se simplifie sauf le dernier et le premier terme :</p>$$\frac{d_n}{n!}-\frac{d_0}{0!} = \sum_{k=1}^n\frac{(-1)^k}{k!}.$$<p>Comme $d_0 = 1 = \frac{(-1)^0}{0!}$ :</p><div class="sbox">$$d_n = n!\sum_{k=0}^n\frac{(-1)^k}{k!}.$$</div>`, rappels: ["o-telescopage"] }
  ],
  ctx: {
    "o-partition": R`<p>Deux niveaux de partition :</p>$$\mathcal D_{n+1} = F_1\sqcup\dots\sqcup F_n,\qquad F_k = G_k\sqcup H_k.$$<p>$G_k$ : $\sigma(k) = n+1$ ; $H_k$ : $\sigma(k)\neq n+1$.</p>`,
    "o-bij-card": R`<p>$G_k\to\mathcal D_{n-1}$ : on enlève l'échange $k\leftrightarrow n+1$. $H_k\to\mathcal D_n$ : on court-circuite $n+1$. Les deux sont bijectives car on sait écrire l'opération inverse.</p>`,
    "o-telescopage": R`<p>Avec $v_k = \frac{d_k}{k!}$ :</p>$$\sum_{k=1}^n(v_k-v_{k-1}) = v_n-v_0 = \frac{d_n}{n!}-1.$$`
  },
  piege: R`Dans le court-circuit, vérifier que $\tau$ n'a pas de point fixe : le seul point modifié est $j$, et $\tau(j) = k\neq j$ précisément parce qu'on est dans le cas $\sigma(k)\neq n+1$. Et ne pas oublier le cas 1, qui donne le terme $d_{n-1}$.`,
  methode: R`Récurrence combinatoire : partition selon l'image du dernier élément, puis bijection avec des objets plus petits. Récurrence $d_n = n\,d_{n-1}+\dots$ : diviser par $n!$ pour télescoper.`
}
]);
})();

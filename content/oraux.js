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

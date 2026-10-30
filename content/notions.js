/* Glossaire des notions de cours.
   Le site surligne en bleu la première apparition de chaque notion dans les énoncés et les corrigés ;
   un clic ouvre une fiche de cours complète. La détection est automatique.
   p : expression régulière (sans les bornes de mot), t : titre, b : fiche (HTML + LaTeX).
   Fiche : Définition, À retenir, Comment s'en servir, Exemple, Attention (sections facultatives). */
(() => {
const F = (o) => [["Définition", o.d], ["À retenir", o.r], ["Comment s'en servir", o.m], ["Exemple", o.e], ["Attention", o.a]].filter(x => x[1]).map(([h, c]) => `<h5>${h}</h5>${c}`).join("");
LEMME.notions({
  /* ---------- Algèbre linéaire ---------- */
  "sous-espace": { p: "sous-espaces? vectoriels?|sous-espaces?", t: "Sous-espace vectoriel", b: F({
    d: R`<p>Une partie $F$ d'un espace vectoriel $E$ est un sous-espace vectoriel si :</p><ul><li>$0\in F$ ;</li><li>pour tous $x,y\in F$ et tout scalaire $\lambda$ : $\lambda x+y\in F$ (stabilité par combinaison linéaire).</li></ul>`,
    r: R`<ul><li>Un sous-espace est lui-même un espace vectoriel, avec les mêmes opérations.</li><li>Une intersection de sous-espaces est un sous-espace ; une réunion, en général, non.</li><li>Le noyau et l'image d'une application linéaire sont des sous-espaces, ainsi que tout $\operatorname{Vect}(x_1,\dots,x_p)$.</li></ul>`,
    m: R`<p>Pour montrer que $F$ est un sous-espace : vérifier $0\in F$, puis prendre $x,y\in F$, $\lambda$ quelconque, et montrer $\lambda x+y\in F$. Plus rapide : écrire $F$ comme un noyau ($F = \ker u$) ou comme un $\operatorname{Vect}$.</p>`,
    e: R`<p>$F = \{(x,y,z)\in\mathbb R^3 : x+y+z = 0\}$ est le noyau de la forme linéaire $(x,y,z)\mapsto x+y+z$ : c'est un sous-espace (un plan).</p>`,
    a: R`<p>$\{(t,2t+1) : t\in\mathbb R\}$ n'est pas un sous-espace de $\mathbb R^2$ : il ne contient pas $(0,0)$.</p>` }) },
  "application-lineaire": { p: "applications? linéaires?", t: "Application linéaire", b: F({
    d: R`<p>$u : E\to F$ est linéaire si, pour tous $x,y\in E$ et tout scalaire $\lambda$ :</p>$$u(\lambda x+y) = \lambda u(x)+u(y).$$<p>On note $\mathcal L(E,F)$ leur ensemble, $\mathcal L(E)$ si $F = E$.</p>`,
    r: R`<ul><li>$u(0) = 0$ et $u\big(\sum\lambda_ix_i\big) = \sum\lambda_iu(x_i)$.</li><li>Une application linéaire est entièrement déterminée par les images des vecteurs d'une base.</li><li>En dimension finie, elle est représentée par une matrice : la colonne $j$ contient les coordonnées de $u(e_j)$.</li><li>Composée et combinaison linéaire d'applications linéaires sont linéaires.</li></ul>`,
    m: R`<p>Pour montrer la linéarité : prendre $x,y,\lambda$ quelconques et développer $u(\lambda x+y)$. Pour la définir : donner les images des vecteurs d'une base.</p>`,
    e: R`<p>La dérivation $D : P\mapsto P'$ sur $\mathbb R[X]$ : $(\lambda P+Q)' = \lambda P'+Q'$.</p>`,
    a: R`<p>$x\mapsto x+1$ n'est pas linéaire ($0\mapsto1$), ni $x\mapsto x^2$.</p>` }) },
  "endomorphisme": { p: "endomorphismes?", t: "Endomorphisme", b: F({
    d: R`<p>Une application linéaire d'un espace $E$ <b>dans lui-même</b> : $u\in\mathcal L(E)$.</p>`,
    r: R`<ul><li>Si $\dim E = n$, $u$ est représenté par une matrice carrée $n\times n$ (la même base au départ et à l'arrivée).</li><li>On peut composer $u$ avec lui-même : $u^2 = u\circ u$, $u^k$, et plus généralement $P(u)$ pour un polynôme $P$.</li><li>En dimension finie : $u$ injectif $\iff$ $u$ surjectif $\iff$ $u$ bijectif.</li></ul>`,
    e: R`<p>Sur $\mathbb R^2$, la rotation d'angle $\theta$, de matrice $\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$.</p>` }) },
  "automorphisme": { p: "automorphismes?", t: "Automorphisme", b: F({
    d: R`<p>Un endomorphisme <b>bijectif</b> de $E$.</p>`,
    r: R`<ul><li>Sa réciproque $u^{-1}$ est encore linéaire.</li><li>Les automorphismes forment un groupe pour la composition, noté $GL(E)$.</li><li>En dimension finie : automorphisme $\iff\ker u = \{0\}\iff\operatorname{rg}u = \dim E\iff$ sa matrice est inversible $\iff\det u\neq0$.</li></ul>`,
    m: R`<p>En dimension finie, il suffit de montrer l'injectivité ($\ker u = \{0\}$) <b>ou</b> la surjectivité.</p>`,
    e: R`<p>$P\mapsto P(X+1)$ est un automorphisme de $\mathbb R_n[X]$, de réciproque $P\mapsto P(X-1)$.</p>` }) },
  "isomorphisme": { p: "isomorphismes?", t: "Isomorphisme", b: F({
    d: R`<p>Une application linéaire <b>bijective</b> $u : E\to F$.</p>`,
    r: R`<ul><li>Sa réciproque est linéaire.</li><li>Un isomorphisme envoie une base de $E$ sur une base de $F$.</li><li>Deux espaces de dimension finie sont isomorphes si et seulement s'ils ont la même dimension.</li><li>Si $\dim E = \dim F$ (finie) : $u$ injective $\iff u$ surjective $\iff u$ bijective.</li></ul>`,
    e: R`<p>$\mathbb R_n[X]\to\mathbb R^{n+1}$, $P\mapsto(P(0),P'(0),\dots,P^{(n)}(0))$.</p>` }) },
  "injective": { p: "injectifs?|injectives?|injectivité", t: "Injective", b: F({
    d: R`<p>$f$ est injective si deux éléments distincts ont des images distinctes :</p>$$f(x) = f(y)\implies x = y.$$`,
    r: R`<ul><li>Pour une application linéaire : $u$ injective $\iff\ker u = \{0\}$.</li><li>Une composée d'injections est injective ; si $g\circ f$ est injective, alors $f$ l'est.</li><li>Une fonction réelle strictement monotone est injective.</li><li>En dimension finie, une application linéaire injective $E\to F$ impose $\dim E\leqslant\dim F$.</li></ul>`,
    m: R`<p>Supposer $f(x) = f(y)$ et en déduire $x = y$. Pour une application linéaire, prendre $x$ avec $u(x) = 0$ et montrer $x = 0$.</p>`,
    e: R`<p>$x\mapsto2x+3$ sur $\mathbb R$ : $2x+3 = 2y+3\implies x = y$.</p>`,
    a: R`<p>$x\mapsto x^2$ n'est pas injective sur $\mathbb R$ : $(-1)^2 = 1^2$. Elle l'est sur $\mathbb R_+$.</p>` }) },
  "surjective": { p: "surjectifs?|surjectives?|surjectivité", t: "Surjective", b: F({
    d: R`<p>$f : A\to B$ est surjective si tout élément de l'arrivée a au moins un antécédent :</p>$$\forall y\in B,\ \exists x\in A,\ f(x) = y.$$`,
    r: R`<ul><li>Pour une application linéaire $u : E\to F$ : surjective $\iff\operatorname{Im}u = F\iff\operatorname{rg}u = \dim F$.</li><li>Si $g\circ f$ est surjective, alors $g$ l'est.</li><li>Une fonction continue sur un intervalle atteint toutes les valeurs entre deux valeurs prises (TVI) : utile pour la surjectivité.</li></ul>`,
    m: R`<p>Prendre $y$ quelconque à l'arrivée et construire (ou prouver l'existence d') un $x$ tel que $f(x) = y$.</p>`,
    e: R`<p>$x\mapsto x^3$ est surjective de $\mathbb R$ dans $\mathbb R$ : $y = (\sqrt[3]y)^3$.</p>`,
    a: R`<p>La surjectivité dépend de l'ensemble d'arrivée : $\exp$ n'est pas surjective de $\mathbb R$ dans $\mathbb R$, mais l'est de $\mathbb R$ dans $]0,+\infty[$.</p>` }) },
  "bijective": { p: "bijectifs?|bijectives?|bijections?|bijectivité", t: "Bijective", b: F({
    d: R`<p>$f$ est bijective si elle est injective et surjective : tout élément de l'arrivée a <b>exactement un</b> antécédent.</p>`,
    r: R`<ul><li>$f$ admet alors une réciproque $f^{-1}$ : $f\circ f^{-1} = \mathrm{Id}$ et $f^{-1}\circ f = \mathrm{Id}$.</li><li>S'il existe $g$ avec $g\circ f = \mathrm{Id}$ et $f\circ g = \mathrm{Id}$, alors $f$ est bijective et $g = f^{-1}$.</li><li>Théorème de la bijection : une fonction continue strictement monotone sur un intervalle $I$ est une bijection de $I$ sur $f(I)$.</li><li>En dimension finie, pour un endomorphisme : injectif $\iff$ surjectif $\iff$ bijectif.</li></ul>`,
    m: R`<p>Montrer injectivité et surjectivité, ou bien exhiber directement la réciproque, ou résoudre $f(x) = y$ et trouver une unique solution.</p>`,
    e: R`<p>$\tan : \,]-\frac\pi2,\frac\pi2[\,\to\mathbb R$ est bijective, de réciproque $\arctan$.</p>` }) },
  "noyau": { p: "noyaux?", t: "Noyau", b: F({
    d: R`<p>Le noyau de $u\in\mathcal L(E,F)$ est l'ensemble des vecteurs envoyés sur $0$ :</p>$$\ker u = \{x\in E : u(x) = 0\}.$$`,
    r: R`<ul><li>$\ker u$ est un sous-espace de $E$.</li><li>$u$ injective $\iff\ker u = \{0\}$.</li><li>Théorème du rang : $\dim E = \dim\ker u+\operatorname{rg}u$.</li><li>Pour une matrice $A$ : $\ker A = \{X : AX = 0\}$, l'ensemble des solutions du système homogène.</li><li>$\ker u\subset\ker u^2\subset\ker u^3\subset\cdots$</li></ul>`,
    m: R`<p>Écrire l'équation $u(x) = 0$ (ou $AX = 0$) et la résoudre : on obtient le noyau sous forme de $\operatorname{Vect}$, donc une base.</p>`,
    e: R`<p>$A = \begin{pmatrix}1&2\\2&4\end{pmatrix}$ : $AX = 0\iff x+2y = 0$, donc $\ker A = \operatorname{Vect}\begin{pmatrix}-2\\1\end{pmatrix}$.</p>` }) },
  "image": { p: "images?", t: "Image", b: F({
    d: R`<p>L'image de $u\in\mathcal L(E,F)$ est l'ensemble des valeurs prises :</p>$$\operatorname{Im}u = \{u(x) : x\in E\}.$$`,
    r: R`<ul><li>$\operatorname{Im}u$ est un sous-espace de $F$.</li><li>Si $(e_1,\dots,e_n)$ est une base de $E$ : $\operatorname{Im}u = \operatorname{Vect}(u(e_1),\dots,u(e_n))$.</li><li>Pour une matrice, l'image est engendrée par ses colonnes.</li><li>$u$ surjective $\iff\operatorname{Im}u = F$ ; $\dim\operatorname{Im}u = \operatorname{rg}u$.</li></ul>`,
    m: R`<p>Calculer les images des vecteurs d'une base, puis extraire une famille libre de ces vecteurs : c'est une base de l'image.</p>`,
    e: R`<p>$D : P\mapsto P'$ sur $\mathbb R_2[X]$ : $D(1) = 0$, $D(X) = 1$, $D(X^2) = 2X$, donc $\operatorname{Im}D = \operatorname{Vect}(1,X) = \mathbb R_1[X]$.</p>`,
    a: R`<p>Le mot « image » sert aussi pour un seul point : l'image de $x$ par $f$ est $f(x)$.</p>` }) },
  "rang": { p: "(?<=(?:le|du|de|son|même|au|leur|un|en|plus grand) )rang(?! du premier)|rangs", t: "Rang", b: F({
    d: R`<p>Le rang d'une application linéaire $u$ est la dimension de son image : $\operatorname{rg}u = \dim\operatorname{Im}u$. Le rang d'une matrice est le nombre maximal de colonnes (ou de lignes) linéairement indépendantes.</p>`,
    r: R`<ul><li><b>Théorème du rang</b> : $\dim E = \dim\ker u+\operatorname{rg}u$.</li><li>$\operatorname{rg}(AB)\leqslant\min(\operatorname{rg}A,\operatorname{rg}B)$.</li><li>Multiplier par une matrice inversible ne change pas le rang ; deux matrices semblables ont le même rang.</li><li>$A\in\mathcal M_n$ est inversible $\iff\operatorname{rg}A = n$.</li><li>$\operatorname{rg}A = \operatorname{rg}A^{\mathsf T}$.</li></ul>`,
    m: R`<p>Repérer les colonnes proportionnelles ou combinaisons des autres ; ou échelonner la matrice (pivot de Gauss) et compter les pivots ; ou calculer $\dim\ker$ et utiliser le théorème du rang.</p>`,
    e: R`<p>$\begin{pmatrix}1&2&3\\2&4&6\end{pmatrix}$ est de rang $1$ : toutes les colonnes sont multiples de $\begin{pmatrix}1\\2\end{pmatrix}$.</p>`,
    a: R`<p>Une matrice symétrique diagonalisable de trace nulle et non nulle ne peut pas être de rang $1$ : sa seule valeur propre non nulle serait égale à la trace.</p>` }) },
  "dimension": { p: "dimensions?", t: "Dimension", b: F({
    d: R`<p>La dimension d'un espace vectoriel est le nombre de vecteurs d'une base (toutes les bases ont le même nombre de vecteurs).</p>`,
    r: R`<ul><li>$\dim\mathbb R^n = n$, $\dim\mathbb R_n[X] = n+1$, $\dim\mathcal M_{n,p} = np$.</li><li>Si $F\subset E$ : $\dim F\leqslant\dim E$, avec égalité si et seulement si $F = E$.</li><li>Dans un espace de dimension $n$ : une famille libre a au plus $n$ vecteurs, une famille génératrice au moins $n$, et une famille de $n$ vecteurs est une base dès qu'elle est libre <b>ou</b> génératrice.</li><li>Grassmann : $\dim(F+G) = \dim F+\dim G-\dim(F\cap G)$.</li></ul>`,
    m: R`<p>Pour calculer une dimension : trouver une base et compter. Pour montrer $F = E$ : montrer $F\subset E$ et $\dim F = \dim E$.</p>`,
    e: R`<p>Le plan $x+y+z = 0$ de $\mathbb R^3$ a pour base $((1,-1,0),(1,0,-1))$ : dimension $2$.</p>` }) },
  "base": { p: "bases?", t: "Base", b: F({
    d: R`<p>Une famille $(e_1,\dots,e_n)$ est une base de $E$ si elle est <b>libre</b> et <b>génératrice</b> : tout vecteur s'écrit de façon unique $x = \sum x_ie_i$. Les $x_i$ sont les coordonnées de $x$.</p>`,
    r: R`<ul><li>En dimension $n$, $n$ vecteurs libres, ou $n$ vecteurs générateurs, forment une base.</li><li>Base canonique de $\mathbb R^n$ : $e_1 = (1,0,\dots,0)$, …, $e_n = (0,\dots,0,1)$ ; de $\mathbb R_n[X]$ : $(1,X,\dots,X^n)$.</li><li>Une base de vecteurs propres diagonalise un endomorphisme.</li><li>Changer de base : $A' = P^{-1}AP$, avec $P$ la matrice de passage.</li></ul>`,
    m: R`<p>Montrer la liberté (souvent le plus simple), puis compter : si le nombre de vecteurs est égal à la dimension, c'est une base.</p>`,
    e: R`<p>$((1,1),(1,-1))$ est une base de $\mathbb R^2$ : deux vecteurs non colinéaires dans un espace de dimension $2$.</p>` }) },
  "libre": { p: "libres?", t: "Famille libre", b: F({
    d: R`<p>$(x_1,\dots,x_p)$ est libre si la seule combinaison linéaire nulle est la combinaison triviale :</p>$$\lambda_1x_1+\dots+\lambda_px_p = 0\implies\lambda_1 = \dots = \lambda_p = 0.$$`,
    r: R`<ul><li>Deux vecteurs sont libres si et seulement s'ils ne sont pas colinéaires.</li><li>Une famille de polynômes non nuls de degrés distincts est libre.</li><li>Des vecteurs propres associés à des valeurs propres distinctes forment une famille libre.</li><li>Une sous-famille d'une famille libre est libre.</li></ul>`,
    m: R`<p>Écrire une combinaison linéaire nulle et montrer que tous les coefficients sont nuls : en appliquant $u$ plusieurs fois, en évaluant en des points, ou en regardant le terme de plus haut degré.</p>`,
    e: R`<p>$(v,u(v),\dots,u^{n-1}(v))$ avec $u^n = 0$ et $u^{n-1}(v)\neq0$ : on applique $u^{n-1}$ à une relation, puis $u^{n-2}$, etc.</p>` }) },
  "liee": { p: "liées?|liés?", t: "Famille liée", b: F({
    d: R`<p>Une famille est liée si elle n'est pas libre : il existe une combinaison linéaire nulle à coefficients <b>non tous nuls</b>.</p>`,
    r: R`<ul><li>Une famille est liée si et seulement si l'un des vecteurs est combinaison linéaire des autres.</li><li>Une famille contenant le vecteur nul, ou deux vecteurs égaux, est liée.</li><li>Dans un espace de dimension $n$, toute famille de plus de $n$ vecteurs est liée.</li></ul>`,
    e: R`<p>$(1,2),(2,4)$ est liée : $2\cdot(1,2)-(2,4) = 0$.</p>` }) },
  "generatrice": { p: "(?<!fonctions? )génératrices?", t: "Famille génératrice", b: F({
    d: R`<p>$(x_1,\dots,x_p)$ engendre $E$ si tout vecteur de $E$ est combinaison linéaire des $x_i$ : $E = \operatorname{Vect}(x_1,\dots,x_p)$.</p>`,
    r: R`<ul><li>On peut toujours extraire une base d'une famille génératrice (en dimension finie).</li><li>Si $(e_i)$ engendre $E$, les $u(e_i)$ engendrent $\operatorname{Im}u$.</li><li>Une famille génératrice a au moins $\dim E$ vecteurs.</li></ul>`,
    e: R`<p>$(1,X,X^2)$ engendre $\mathbb R_2[X]$ : tout $P = a+bX+cX^2$.</p>` }) },
  "supplementaires": { p: "supplémentaires?", t: "Sous-espaces supplémentaires", b: F({
    d: R`<p>$F$ et $G$ sont supplémentaires dans $E$ si tout $x\in E$ s'écrit <b>de façon unique</b> $x = f+g$ avec $f\in F$, $g\in G$. On note $E = F\oplus G$.</p>`,
    r: R`<ul><li>$E = F\oplus G\iff F\cap G = \{0\}$ et $F+G = E$.</li><li>En dimension finie : $E = F\oplus G\iff F\cap G = \{0\}$ et $\dim F+\dim G = \dim E$.</li><li>En concaténant une base de $F$ et une base de $G$, on obtient une base de $E$.</li><li>Un supplémentaire n'est pas unique (sauf cas triviaux).</li></ul>`,
    m: R`<p>En dimension finie, montrer que l'intersection est nulle et que les dimensions s'additionnent. Sinon, analyse-synthèse : supposer $x = f+g$, trouver $f$ et $g$, puis vérifier.</p>`,
    e: R`<p>Dans $\mathcal M_n(\mathbb R)$, matrices symétriques et antisymétriques : $A = \frac{A+A^{\mathsf T}}2+\frac{A-A^{\mathsf T}}2$.</p>` }) },
  "somme-directe": { p: "sommes? directes?", t: "Somme directe", b: F({
    d: R`<p>La somme $F_1+\dots+F_p$ est directe si toute décomposition de $0$ est triviale : $x_1+\dots+x_p = 0$ avec $x_i\in F_i$ entraîne $x_i = 0$ pour tout $i$. On note $F_1\oplus\dots\oplus F_p$.</p>`,
    r: R`<ul><li>Pour deux sous-espaces : directe $\iff F_1\cap F_2 = \{0\}$.</li><li>En dimension finie : directe $\iff\dim(F_1+\dots+F_p) = \sum\dim F_i$.</li><li>Les sous-espaces propres d'un endomorphisme sont en somme directe.</li><li>Lemme des noyaux : si $P\wedge Q = 1$, $\ker PQ(u) = \ker P(u)\oplus\ker Q(u)$.</li></ul>`,
    e: R`<p>$u$ diagonalisable $\iff E = \bigoplus_\lambda E_\lambda(u)$.</p>` }) },
  "projecteur": { p: "projecteurs?|projections?", t: "Projecteur", b: F({
    d: R`<p>Si $E = F\oplus G$, le projecteur sur $F$ parallèlement à $G$ envoie $x = f+g$ sur $f$. Un endomorphisme $p$ est un projecteur si et seulement si $p\circ p = p$.</p>`,
    r: R`<ul><li>$E = \operatorname{Im}p\oplus\ker p$, et $\operatorname{Im}p = \ker(p-\mathrm{id}) = \{x : p(x) = x\}$.</li><li>Un projecteur est diagonalisable, de valeurs propres $0$ et $1$, et $\operatorname{rg}p = \operatorname{tr}p$.</li><li>$\mathrm{id}-p$ est le projecteur sur $\ker p$ parallèlement à $\operatorname{Im}p$.</li></ul>`,
    m: R`<p>Pour montrer qu'un endomorphisme est un projecteur : calculer $p\circ p$. Pour son image : chercher les vecteurs fixes.</p>`,
    e: R`<p>$(x,y)\mapsto(x,0)$ : projecteur sur l'axe des abscisses parallèlement à l'axe des ordonnées.</p>` }) },
  "nilpotent": { p: "nilpotents?|nilpotentes?|nilpotence", t: "Nilpotent", b: F({
    d: R`<p>$u$ (ou une matrice $A$) est nilpotent s'il existe $k$ avec $u^k = 0$. Le plus petit tel $k$ est l'<b>indice de nilpotence</b>.</p>`,
    r: R`<ul><li>La seule valeur propre d'un nilpotent est $0$ ; $\chi_u = X^n$ et $\operatorname{tr}u = 0$.</li><li>En dimension $n$, l'indice est au plus $n$ : $u^n = 0$.</li><li>Un nilpotent non nul n'est pas diagonalisable.</li><li>Si $u^{k-1}(x)\neq0$, la famille $(x,u(x),\dots,u^{k-1}(x))$ est libre.</li><li>Réduction : dans une base adaptée, la matrice est faite de blocs de Jordan $J_r$.</li></ul>`,
    e: R`<p>$\begin{pmatrix}0&1\\0&0\end{pmatrix}$ : son carré est nul, indice $2$.</p>` }) },
  "valeur-propre": { p: "valeurs? propres?", t: "Valeur propre", b: F({
    d: R`<p>$\lambda$ est valeur propre de $u$ s'il existe $x\neq0$ avec $u(x) = \lambda x$, c'est-à-dire si $u-\lambda\,\mathrm{id}$ n'est pas injectif.</p>`,
    r: R`<ul><li>En dimension finie : $\lambda$ valeur propre $\iff\det(A-\lambda I) = 0\iff\chi_A(\lambda) = 0$.</li><li>Le spectre $\operatorname{Sp}(u)$ est l'ensemble des valeurs propres.</li><li>Si $P(u) = 0$, toute valeur propre est racine de $P$.</li><li>La somme des valeurs propres (avec multiplicité, dans $\mathbb C$) est la trace ; leur produit est le déterminant.</li><li>Une matrice triangulaire a pour valeurs propres ses coefficients diagonaux.</li></ul>`,
    m: R`<p>Calculer $\chi_A(X) = \det(XI-A)$ et chercher ses racines. Ou chercher directement les $\lambda$ pour lesquels le système $AX = \lambda X$ a une solution non nulle.</p>`,
    e: R`<p>$A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$ : $\chi_A(X) = (X-2)^2-1 = (X-1)(X-3)$, valeurs propres $1$ et $3$.</p>` }) },
  "vecteur-propre": { p: "vecteurs? propres?", t: "Vecteur propre", b: F({
    d: R`<p>Un vecteur <b>non nul</b> $x$ tel que $u(x) = \lambda x$ : $u$ agit sur $x$ comme une multiplication par $\lambda$.</p>`,
    r: R`<ul><li>Les vecteurs propres associés à $\lambda$, avec $0$, forment le sous-espace propre $E_\lambda = \ker(u-\lambda\,\mathrm{id})$.</li><li>Des vecteurs propres associés à des valeurs propres distinctes forment une famille libre.</li><li>Une base de vecteurs propres diagonalise $u$.</li></ul>`,
    m: R`<p>Pour chaque valeur propre $\lambda$, résoudre le système $(A-\lambda I)X = 0$ ; on obtient $E_\lambda$ sous forme de $\operatorname{Vect}$.</p>`,
    e: R`<p>$A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$, $\lambda = 3$ : $(A-3I)X = 0\iff-x+y = 0$, donc $E_3 = \operatorname{Vect}\begin{pmatrix}1\\1\end{pmatrix}$.</p>`,
    a: R`<p>Le vecteur nul n'est jamais un vecteur propre.</p>` }) },
  "diagonalisable": { p: "diagonalisables?|diagonaliser|diagonalisation", t: "Diagonalisable", b: F({
    d: R`<p>$A$ est diagonalisable s'il existe $P$ inversible et $D$ diagonale avec $A = PDP^{-1}$, c'est-à-dire s'il existe une base formée de vecteurs propres.</p>`,
    r: R`<ul><li>$A$ diagonalisable $\iff\chi_A$ est scindé et $\dim E_\lambda$ = multiplicité de $\lambda$ pour chaque valeur propre.</li><li>$A$ diagonalisable $\iff$ elle annule un polynôme scindé à racines simples.</li><li>$n$ valeurs propres distinctes (en dimension $n$) : diagonalisable.</li><li>Toute matrice symétrique réelle est diagonalisable (théorème spectral).</li><li>Si $A = PDP^{-1}$, alors $A^k = PD^kP^{-1}$.</li></ul>`,
    m: R`<p><b>Diagonaliser en pratique :</b> 1) calculer $\chi_A$ et ses racines ; 2) pour chaque $\lambda$, résoudre $(A-\lambda I)X = 0$ ; 3) mettre les vecteurs propres en colonnes dans $P$, et les $\lambda$ dans le même ordre sur la diagonale de $D$.</p>`,
    e: R`<p>$\begin{pmatrix}2&1\\1&2\end{pmatrix} = PDP^{-1}$ avec $P = \begin{pmatrix}1&1\\-1&1\end{pmatrix}$, $D = \operatorname{diag}(1,3)$.</p>`,
    a: R`<p>$\begin{pmatrix}0&1\\0&0\end{pmatrix}$ n'est pas diagonalisable : sa seule valeur propre est $0$, et elle n'est pas nulle.</p>` }) },
  "polynome-caracteristique": { p: "polynômes? caractéristiques?", t: "Polynôme caractéristique", b: F({
    d: R`<p>$\chi_A(X) = \det(XI_n-A)$ : un polynôme unitaire de degré $n$ dont les racines sont les valeurs propres de $A$.</p>`,
    r: R`<ul><li>$\chi_A(X) = X^n-\operatorname{tr}(A)X^{n-1}+\dots+(-1)^n\det A$.</li><li>En taille $2$ : $\chi_A(X) = X^2-\operatorname{tr}(A)X+\det A$.</li><li>Deux matrices semblables ont le même polynôme caractéristique.</li><li>Cayley-Hamilton : $\chi_A(A) = 0$.</li><li>Pour une matrice triangulaire (par blocs), c'est le produit des polynômes des blocs diagonaux.</li></ul>`,
    m: R`<p>Écrire $XI-A$, calculer son déterminant (en taille $2$ : $ad-bc$ ; en taille $3$ : développer selon une ligne ou une colonne contenant des zéros), puis factoriser.</p>`,
    e: R`<p>$A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$ : $\det\begin{pmatrix}X-2&-1\\-1&X-2\end{pmatrix} = (X-2)^2-1 = (X-1)(X-3)$.</p>` }) },
  "polynome-minimal": { p: "polynômes? minimaux|polynômes? minimal", t: "Polynôme minimal", b: F({
    d: R`<p>Le polynôme minimal $\pi_u$ est le polynôme unitaire de plus petit degré qui annule $u$. Les polynômes annulateurs de $u$ sont exactement les multiples de $\pi_u$.</p>`,
    r: R`<ul><li>$\pi_u$ divise $\chi_u$ (Cayley-Hamilton) et a les mêmes racines.</li><li>$u$ diagonalisable $\iff\pi_u$ est scindé à racines simples.</li></ul>`,
    e: R`<p>Pour un projecteur $p\neq0,\mathrm{id}$ : $\pi_p = X^2-X$.</p>` }) },
  "trace": { p: "traces?", t: "Trace", b: F({
    d: R`<p>La trace d'une matrice carrée est la somme de ses coefficients diagonaux : $\operatorname{tr}A = \sum_ia_{ii}$.</p>`,
    r: R`<ul><li>Linéaire, et $\operatorname{tr}(AB) = \operatorname{tr}(BA)$.</li><li>Deux matrices semblables ont même trace : on définit la trace d'un endomorphisme.</li><li>$\operatorname{tr}A$ = somme des valeurs propres (dans $\mathbb C$, avec multiplicité).</li><li>Pour un projecteur : $\operatorname{tr}p = \operatorname{rg}p$.</li></ul>`,
    e: R`<p>$\operatorname{tr}\begin{pmatrix}2&1\\1&2\end{pmatrix} = 4 = 1+3$.</p>`,
    a: R`<p>$\operatorname{tr}(ABC)\neq\operatorname{tr}(BAC)$ en général : seules les permutations circulaires sont permises.</p>` }) },
  "determinant": { p: "déterminants?", t: "Déterminant", b: F({
    d: R`<p>Le déterminant d'une matrice carrée est le nombre $\det A = \sum_{\sigma\in\mathcal S_n}\varepsilon(\sigma)\prod_ia_{\sigma(i),i}$. En taille $2$ : $\begin{vmatrix}a&b\\c&d\end{vmatrix} = ad-bc$.</p>`,
    r: R`<ul><li>$A$ inversible $\iff\det A\neq0$.</li><li>$\det(AB) = \det A\det B$ et $\det A^{\mathsf T} = \det A$.</li><li>Linéaire par rapport à chaque colonne (et ligne) ; change de signe quand on échange deux colonnes.</li><li>Ajouter à une colonne une combinaison des autres ne le change pas.</li><li>Triangulaire (par blocs) : produit des termes (blocs) diagonaux.</li></ul>`,
    m: R`<p>Faire apparaître des zéros par opérations sur les lignes/colonnes, puis développer selon une ligne ou une colonne : $\det A = \sum_j(-1)^{i+j}a_{ij}\Delta_{ij}$.</p>`,
    e: R`<p>$\begin{vmatrix}1&2\\3&4\end{vmatrix} = 1\times4-2\times3 = -2$.</p>` }) },
  "inversible": { p: "inversibles?|inversibilité", t: "Matrice inversible", b: F({
    d: R`<p>$A\in\mathcal M_n$ est inversible s'il existe $B$ avec $AB = BA = I_n$ ; on note $B = A^{-1}$.</p>`,
    r: R`<ul><li>$A$ inversible $\iff\det A\neq0\iff\operatorname{rg}A = n\iff\ker A = \{0\}\iff 0\notin\operatorname{Sp}(A)$.</li><li>Il suffit de trouver $B$ avec $AB = I_n$ (ou $BA = I_n$).</li><li>$(AB)^{-1} = B^{-1}A^{-1}$.</li><li>En taille $2$ : $\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1} = \frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.</li></ul>`,
    m: R`<p>Pour calculer l'inverse : résoudre $AX = Y$ en exprimant $X$ en fonction de $Y$, ou pivot de Gauss sur $(A\mid I_n)$. Si l'on connaît un polynôme annulateur avec $P(0)\neq0$, on en tire $A^{-1}$.</p>`,
    e: R`<p>$\begin{pmatrix}1&1\\-1&1\end{pmatrix}^{-1} = \frac12\begin{pmatrix}1&-1\\1&1\end{pmatrix}$ ($ad-bc = 2$).</p>` }) },
  "semblables": { p: "semblables?", t: "Matrices semblables", b: F({
    d: R`<p>$A$ et $B$ sont semblables s'il existe $P$ inversible avec $B = P^{-1}AP$ : elles représentent le même endomorphisme dans deux bases.</p>`,
    r: R`<ul><li>Deux matrices semblables ont même rang, trace, déterminant, polynôme caractéristique, valeurs propres, et $\dim\ker(A-\lambda I)^k$ égales pour tous $\lambda,k$.</li><li>$A^k$ et $B^k$ sont semblables (avec le même $P$).</li></ul>`,
    m: R`<p>Pour montrer que deux matrices <b>ne sont pas</b> semblables : trouver un invariant qui diffère (trace, rang, …). Pour montrer qu'elles le sont : trouver une base où l'endomorphisme a la seconde matrice.</p>`,
    a: R`<p>Même polynôme caractéristique ne suffit pas : $0$ et $\begin{pmatrix}0&1\\0&0\end{pmatrix}$ ne sont pas semblables.</p>` }) },
  "equivalentes-mat": { p: "matrices? équivalentes", t: "Matrices équivalentes", b: F({
    d: R`<p>$A,B\in\mathcal M_{n,p}$ sont équivalentes s'il existe $P,Q$ inversibles avec $B = QAP$.</p>`,
    r: R`<ul><li>Deux matrices sont équivalentes si et seulement si elles ont le même rang.</li><li>Toute matrice de rang $r$ est équivalente à $J_r = \begin{pmatrix}I_r&0\\0&0\end{pmatrix}$.</li></ul>` }) },
  "transposee": { p: "transposées?", t: "Transposée", b: F({
    d: R`<p>$A^{\mathsf T}$ s'obtient en échangeant lignes et colonnes : $(A^{\mathsf T})_{ij} = a_{ji}$.</p>`,
    r: R`<ul><li>$(AB)^{\mathsf T} = B^{\mathsf T}A^{\mathsf T}$, $(A^{\mathsf T})^{\mathsf T} = A$.</li><li>Même rang, même déterminant, même trace, même polynôme caractéristique que $A$.</li><li>$A$ symétrique si $A^{\mathsf T} = A$, antisymétrique si $A^{\mathsf T} = -A$.</li></ul>` }) },
  "homothetie": { p: "homothéties?", t: "Homothétie", b: F({
    d: R`<p>Un endomorphisme de la forme $\lambda\,\mathrm{id}_E$ : il multiplie tous les vecteurs par le même $\lambda$.</p>`,
    r: R`<ul><li>Sa matrice est $\lambda I_n$ dans toute base.</li><li>Un endomorphisme qui commute avec tous les autres est une homothétie.</li><li>Si tout vecteur non nul est propre pour $u$, alors $u$ est une homothétie.</li></ul>` }) },
  "commutant": { p: "bicommutants?|commutants?", t: "Commutant et bicommutant", b: F({
    d: R`<p>Le commutant de $u$ est $\mathcal C(u) = \{v : uv = vu\}$ ; le bicommutant est l'ensemble des $w$ qui commutent avec tout élément de $\mathcal C(u)$.</p>`,
    r: R`<ul><li>$\mathcal C(u)$ est une sous-algèbre de $\mathcal L(E)$ qui contient tous les $P(u)$.</li><li>Si $v$ commute avec $u$, les sous-espaces propres et le noyau de $u$ sont stables par $v$.</li></ul>` }) },
  "stable": { p: "stables?|stabilité", t: "Sous-espace stable", b: F({
    d: R`<p>$F$ est stable par $u$ si $u(F)\subset F$ : l'image d'un vecteur de $F$ reste dans $F$.</p>`,
    r: R`<ul><li>On peut alors restreindre $u$ en un endomorphisme $u_F$ de $F$ (l'endomorphisme induit).</li><li>Si $v$ commute avec $u$, alors $\ker u$, $\operatorname{Im}u$ et les sous-espaces propres de $u$ sont stables par $v$.</li><li>Dans une base adaptée à $F$, la matrice de $u$ est triangulaire par blocs ; diagonale par blocs si un supplémentaire est aussi stable.</li><li>Une droite $\operatorname{Vect}(x)$ est stable si et seulement si $x$ est un vecteur propre.</li></ul>`,
    m: R`<p>Vérifier sur une famille génératrice de $F$ : $u(f_i)\in F$ pour chaque $i$.</p>` }) },
  "induit": { p: "induits?|induites?", t: "Endomorphisme induit", b: F({
    d: R`<p>Si $F$ est stable par $u$, l'endomorphisme induit est $u_F : F\to F$, $x\mapsto u(x)$.</p>`,
    r: R`<ul><li>$P(u_F) = P(u)_{|F}$ pour tout polynôme $P$ : un polynôme annulateur de $u$ annule $u_F$.</li><li>Si $u$ est diagonalisable, $u_F$ l'est aussi.</li><li>$\chi_{u_F}$ divise $\chi_u$.</li></ul>` }) },
  "premiers-entre-eux": { p: "premiers entre eux", t: "Premiers entre eux", b: F({
    d: R`<p>Deux polynômes (ou entiers) sont premiers entre eux si leurs seuls diviseurs communs sont les constantes non nulles (ou $\pm1$).</p>`,
    r: R`<ul><li>Bézout : $P\wedge Q = 1\iff\exists U,V,\ UP+VQ = 1$.</li><li>Gauss : si $P\mid QR$ et $P\wedge Q = 1$, alors $P\mid R$.</li><li>Deux polynômes sans racine complexe commune sont premiers entre eux.</li><li>Lemme des noyaux : $\ker PQ(u) = \ker P(u)\oplus\ker Q(u)$.</li></ul>` }) },
  "sous-algebre": { p: "sous-algèbres?", t: "Sous-algèbre", b: F({
    d: R`<p>Une partie d'une algèbre (comme $\mathcal M_n(\mathbb K)$) qui est un sous-espace vectoriel, stable par produit, et qui contient l'unité ($I_n$).</p>`,
    e: R`<p>L'ensemble des matrices triangulaires supérieures ; l'ensemble $\mathbb K[A]$ des polynômes en $A$.</p>` }) },
  "groupe": { p: "groupes?", t: "Groupe", b: F({
    d: R`<p>Un ensemble $G$ muni d'une loi associative, avec un élément neutre, et dans lequel tout élément a un symétrique.</p>`,
    r: R`<ul><li>Sous-groupe : partie non vide stable par $(x,y)\mapsto xy^{-1}$.</li><li>Les sous-groupes de $(\mathbb Z,+)$ sont les $n\mathbb Z$.</li><li>Théorème de Lagrange : dans un groupe fini, l'ordre d'un élément divise le cardinal du groupe.</li></ul>`,
    e: R`<p>$(\mathbb U_n,\times)$, $(GL_n(\mathbb R),\times)$, $(\mathcal S_n,\circ)$.</p>` }) },
  "racine-unite": { p: "racines? n-ièmes de l'unité", t: "Racines n-ièmes de l'unité", b: F({
    d: R`<p>Les solutions de $z^n = 1$ : les $n$ nombres $\omega_k = e^{2ik\pi/n}$, $k = 0,\dots,n-1$.</p>`,
    r: R`<ul><li>$X^n-1 = \prod_{k=0}^{n-1}(X-\omega_k)$ : polynôme scindé à racines simples.</li><li>Pour $n\geqslant2$ : $\sum_{k=0}^{n-1}\omega_k = 0$.</li><li>Plus généralement $\sum_{k=0}^{n-1}\omega^{rk} = n$ si $n\mid r$, et $0$ sinon.</li><li>Elles forment les sommets d'un polygone régulier inscrit dans le cercle unité.</li></ul>`,
    e: R`<p>$n = 3$ : $1$, $j = e^{2i\pi/3}$, $j^2 = \overline j$, avec $1+j+j^2 = 0$.</p>` }) },
  "degre": { p: "degrés?", t: "Degré d'un polynôme", b: F({
    d: R`<p>Le degré de $P\neq0$ est la plus grande puissance de $X$ de coefficient non nul ; $\deg0 = -\infty$.</p>`,
    r: R`<ul><li>$\deg(PQ) = \deg P+\deg Q$, $\deg(P+Q)\leqslant\max(\deg P,\deg Q)$.</li><li>Un polynôme non nul de degré $n$ a au plus $n$ racines : s'il en a plus, il est nul.</li><li>$\deg P' = \deg P-1$ si $\deg P\geqslant1$.</li></ul>` }) },
  "racine-multiple": { p: "racines? d'ordre|racines? multiples?|multiplicités?", t: "Racine multiple", b: F({
    d: R`<p>$a$ est racine d'ordre $m$ de $P$ si $(X-a)^m$ divise $P$ mais pas $(X-a)^{m+1}$.</p>`,
    r: R`<ul><li>Caractérisation : $P(a) = P'(a) = \dots = P^{(m-1)}(a) = 0$ et $P^{(m)}(a)\neq0$.</li><li>Racine multiple ($m\geqslant2$) $\iff P(a) = P'(a) = 0$.</li><li>Pour une matrice : la multiplicité d'une valeur propre est son ordre dans $\chi_A$ ; elle majore $\dim E_\lambda$.</li></ul>` }) },
  /* ---------- Analyse et topologie ---------- */
  "continue": { p: "uniformément continues?|continuité uniforme", t: "Continuité uniforme", b: F({
    d: R`<p>$f$ est uniformément continue sur $I$ si $\forall\varepsilon>0,\ \exists\delta>0,\ \forall x,y\in I,\ |x-y|\leqslant\delta\implies|f(x)-f(y)|\leqslant\varepsilon$. Le même $\delta$ convient pour tous les points.</p>`,
    r: R`<ul><li>Lipschitzienne $\implies$ uniformément continue $\implies$ continue.</li><li>Heine : une fonction continue sur un <b>segment</b> y est uniformément continue.</li></ul>`,
    a: R`<p>$x\mapsto x^2$ est continue sur $\mathbb R$ mais pas uniformément continue : $(n+\frac1n)^2-n^2\to2$.</p>` }) },
  "continuite": { p: "continues?|continuité|continus?", t: "Continuité", b: F({
    d: R`<p>$f$ est continue en $a$ si $f(x)\to f(a)$ quand $x\to a$ : $\forall\varepsilon>0,\ \exists\delta>0,\ |x-a|\leqslant\delta\implies|f(x)-f(a)|\leqslant\varepsilon$.</p>`,
    r: R`<ul><li>Caractérisation séquentielle : pour toute suite $x_n\to a$, $f(x_n)\to f(a)$.</li><li>Sommes, produits, quotients (dénominateur non nul) et composées de fonctions continues sont continus.</li><li>TVI : l'image d'un intervalle par une fonction continue est un intervalle.</li><li>Bornes atteintes : une fonction continue sur un segment est bornée et atteint ses bornes.</li></ul>`,
    m: R`<p>Le plus souvent : « continue par opérations sur des fonctions continues ». Pour un point délicat, calculer la limite et la comparer à la valeur.</p>`,
    a: R`<p>La partie entière n'est pas continue aux entiers ; $x\mapsto\sin\frac1x$ n'a pas de limite en $0$.</p>` }) },
  "derivable": { p: "dérivables?|dérivabilité", t: "Dérivable", b: F({
    d: R`<p>$f$ est dérivable en $a$ si le taux d'accroissement $\frac{f(x)-f(a)}{x-a}$ a une limite finie quand $x\to a$ ; cette limite est $f'(a)$.</p>`,
    r: R`<ul><li>Dérivable $\implies$ continue (la réciproque est fausse : $|x|$ en $0$).</li><li>Rolle, accroissements finis : $f(b)-f(a) = (b-a)f'(c)$ pour un $c\in\,]a,b[$.</li><li>$f'\geqslant0$ sur un intervalle $\iff f$ croissante.</li></ul>`,
    m: R`<p>Par opérations sur des fonctions dérivables, ou en calculant la limite du taux d'accroissement aux points délicats.</p>` }) },
  "rolle": { p: "théorème de Rolle|Rolle", t: "Théorème de Rolle", b: F({
    d: R`<p>Si $f$ est continue sur $[a,b]$, dérivable sur $]a,b[$, et $f(a) = f(b)$, alors il existe $c\in\,]a,b[$ avec $f'(c) = 0$.</p>`,
    r: R`<ul><li>Conséquence : entre deux racines de $f$, il y a une racine de $f'$.</li><li>Si $P$ a $n$ racines réelles distinctes, $P'$ en a au moins $n-1$.</li><li>Il donne les accroissements finis en appliquant Rolle à $f(x)-\frac{f(b)-f(a)}{b-a}x$.</li></ul>`,
    a: R`<p>Les hypothèses sont nécessaires : $|x|$ sur $[-1,1]$ n'a pas de point à dérivée nulle.</p>` }) },
  "majoree": { p: "majorées?|majorés?|minorées?|minorés?|bornées?|bornés?", t: "Majorée, minorée, bornée", b: F({
    d: R`<p>$f$ (ou une suite) est majorée s'il existe $M$ avec $f(x)\leqslant M$ pour tout $x$ ; minorée si $f(x)\geqslant m$ ; bornée si elle est les deux, c'est-à-dire si $|f|\leqslant K$.</p>`,
    r: R`<ul><li>Une suite convergente est bornée.</li><li>Une fonction continue sur un segment est bornée et atteint ses bornes.</li><li>Une suite croissante majorée converge.</li></ul>`,
    m: R`<p>Exhiber explicitement la constante $M$ (ou $K$), souvent avec $|\sin|\leqslant1$, l'inégalité triangulaire, ou une étude de fonction.</p>` }) },
  "monotone": { p: "strictement croissantes?|strictement décroissantes?|strictement croissants?|strictement décroissants?|croissantes?|décroissantes?|croissants?|décroissants?|monotones?|monotonie", t: "Fonction ou suite monotone", b: F({
    d: R`<p>$f$ est croissante si $x\leqslant y\implies f(x)\leqslant f(y)$ ; décroissante si l'inégalité est renversée ; strictement si les inégalités sont strictes pour $x< y$. Monotone : croissante ou décroissante.</p>`,
    r: R`<ul><li>Sur un intervalle, $f$ dérivable : $f'\geqslant0\iff f$ croissante ; $f'>0$ (sauf en des points isolés) $\implies$ strictement croissante.</li><li>Une suite croissante majorée converge (limite monotone).</li><li>Une fonction strictement monotone est injective.</li></ul>`,
    m: R`<p>Étudier le signe de $f'$, ou de $u_{n+1}-u_n$ (ou de $\frac{u_{n+1}}{u_n}$ si $u_n>0$).</p>` }) },
  "borne-sup": { p: "bornes? supérieures?|bornes? inférieures?", t: "Borne supérieure et inférieure", b: F({
    d: R`<p>La borne supérieure d'une partie $A$ de $\mathbb R$ est le plus petit des majorants de $A$.</p>`,
    r: R`<ul><li>Toute partie non vide et majorée de $\mathbb R$ a une borne supérieure.</li><li>$s = \sup A\iff s$ majore $A$ et $\forall\varepsilon>0,\ \exists a\in A,\ a>s-\varepsilon$.</li><li>Il existe une suite d'éléments de $A$ qui tend vers $\sup A$.</li></ul>`,
    a: R`<p>La borne supérieure n'est pas forcément atteinte : $\sup\,]0,1[\, = 1$.</p>` }) },
  "segment": { p: "segments?", t: "Segment", b: F({
    d: R`<p>Un intervalle fermé borné $[a,b]$.</p>`,
    r: R`<ul><li>Une fonction continue sur un segment est bornée et atteint ses bornes.</li><li>Heine : elle y est uniformément continue.</li><li>Les segments sont les parties compactes connexes de $\mathbb R$.</li></ul>` }) },
  "ouvert": { p: "ouverts?|ouvertes?", t: "Ouvert", b: F({
    d: R`<p>$U$ est ouvert si, autour de chacun de ses points, il contient une petite boule : $\forall x\in U,\ \exists r>0,\ B(x,r)\subset U$.</p>`,
    r: R`<ul><li>Une réunion quelconque d'ouverts est ouverte ; une intersection finie aussi.</li><li>L'image réciproque d'un ouvert par une fonction continue est ouverte.</li><li>$U$ est ouvert si et seulement si son complémentaire est fermé.</li></ul>`,
    e: R`<p>$]0,1[$ est ouvert dans $\mathbb R$ ; $\{(x,y) : x^2+y^2< 1\}$ est ouvert dans $\mathbb R^2$.</p>` }) },
  "ferme": { p: "fermés?|fermées?", t: "Fermé", b: F({
    d: R`<p>$F$ est fermé si son complémentaire est ouvert. De façon équivalente : toute suite d'éléments de $F$ qui converge a sa limite dans $F$.</p>`,
    r: R`<ul><li>Une intersection quelconque de fermés est fermée ; une réunion finie aussi.</li><li>L'image réciproque d'un fermé par une fonction continue est fermée : $\{x : f(x) = 0\}$ est fermé si $f$ est continue.</li></ul>`,
    a: R`<p>Une partie peut n'être ni ouverte ni fermée : $[0,1[$.</p>` }) },
  "adherence": { p: "adhérences?|adhérents?|adhérentes?", t: "Adhérence", b: F({
    d: R`<p>$x$ est adhérent à $A$ si toute boule centrée en $x$ rencontre $A$. L'adhérence $\overline A$ est l'ensemble de ces points : c'est le plus petit fermé contenant $A$.</p>`,
    r: R`<ul><li>$x\in\overline A\iff$ il existe une suite d'éléments de $A$ qui converge vers $x$.</li><li>$A$ est fermé $\iff\overline A = A$.</li></ul>`,
    e: R`<p>$\overline{]0,1[} = [0,1]$ et $\overline{\mathbb Q} = \mathbb R$.</p>` }) },
  "voisinage": { p: "voisinages?", t: "Voisinage", b: F({
    d: R`<p>Un voisinage de $a$ est une partie qui contient une boule $B(a,r)$ avec $r>0$. « Au voisinage de $a$ » : pour $x$ assez proche de $a$.</p>`,
    r: R`<p>En $+\infty$, un voisinage est une partie qui contient un intervalle $[A,+\infty[$.</p>` }) },
  "dense": { p: "denses?|densité", t: "Partie dense", b: F({
    d: R`<p>$A$ est dense dans $E$ si tout point de $E$ est limite d'une suite d'éléments de $A$ ($\overline A = E$). Dans $\mathbb R$ : tout intervalle ouvert non vide contient un élément de $A$.</p>`,
    r: R`<ul><li>$\mathbb Q$ et $\mathbb R\setminus\mathbb Q$ sont denses dans $\mathbb R$.</li><li>Deux fonctions continues égales sur une partie dense sont égales partout.</li><li>Un sous-groupe de $(\mathbb R,+)$ est soit de la forme $a\mathbb Z$, soit dense.</li></ul>` }) },
  "denombrable": { p: "dénombrables?", t: "Dénombrable", b: F({
    d: R`<p>Un ensemble est dénombrable s'il est en bijection avec $\mathbb N$ : on peut numéroter ses éléments $x_0,x_1,x_2,\dots$</p>`,
    r: R`<ul><li>$\mathbb Z$, $\mathbb Q$, $\mathbb N^2$ sont dénombrables ; $\mathbb R$ ne l'est pas.</li><li>Une réunion dénombrable d'ensembles dénombrables est dénombrable.</li></ul>` }) },
  "lipschitzienne": { p: "lipschitziennes?", t: "Fonction lipschitzienne", b: F({
    d: R`<p>$f$ est $K$-lipschitzienne si $|f(x)-f(y)|\leqslant K|x-y|$ pour tous $x,y$.</p>`,
    r: R`<ul><li>Lipschitzienne $\implies$ uniformément continue $\implies$ continue.</li><li>Si $f$ est dérivable avec $|f'|\leqslant K$ sur un intervalle, $f$ est $K$-lipschitzienne (accroissements finis).</li><li>Une composée de fonctions $K$- et $L$-lipschitziennes est $KL$-lipschitzienne.</li></ul>`,
    e: R`<p>$\sin$ est $1$-lipschitzienne ; $x\mapsto|x|$ aussi.</p>`,
    a: R`<p>$\sqrt{\cdot}$ n'est pas lipschitzienne sur $[0,1]$ : sa pente devient infinie en $0$.</p>` }) },
  "convergente": { p: "convergentes?|convergence|converge|convergent", t: "Convergence", b: F({
    d: R`<p>$(u_n)$ converge vers $\ell$ si $|u_n-\ell|$ devient aussi petit qu'on veut : $\forall\varepsilon>0,\ \exists N,\ \forall n\geqslant N,\ |u_n-\ell|\leqslant\varepsilon$. Une série $\sum u_n$ converge si la suite de ses sommes partielles converge.</p>`,
    r: R`<ul><li>La limite est unique ; une suite convergente est bornée.</li><li>Théorème des gendarmes, limite monotone.</li><li>Pour une série : $\sum u_n$ converge $\implies u_n\to0$ (la réciproque est fausse : $\sum\frac1n$).</li><li>Séries de Riemann : $\sum\frac1{n^a}$ converge $\iff a>1$.</li></ul>`,
    m: R`<p>Encadrer, majorer $|u_n-\ell|$ par une quantité qui tend vers $0$, ou utiliser un équivalent / une comparaison.</p>` }) },
  "recurrence": { p: "récurrence", t: "Raisonnement par récurrence", b: F({
    d: R`<p>Pour montrer $P(n)$ pour tout $n\geqslant n_0$ : on montre $P(n_0)$ (initialisation), puis que $P(n)\implies P(n+1)$ pour tout $n\geqslant n_0$ (hérédité).</p>`,
    r: R`<ul><li><b>Récurrence double</b> : initialiser $P(n_0)$ et $P(n_0+1)$, et montrer $P(n),P(n+1)\implies P(n+2)$.</li><li><b>Récurrence forte</b> : supposer $P(n_0),\dots,P(n)$ pour montrer $P(n+1)$.</li></ul>`,
    m: R`<p>Écrire clairement la propriété $P(n)$. Dans l'hérédité, partir de ce qu'on veut montrer au rang $n+1$ et faire apparaître le rang $n$.</p>` }) },
  "absurde": { p: "par l'absurde|absurde", t: "Raisonnement par l'absurde", b: F({
    d: R`<p>Pour montrer $P$ : on suppose $\text{non }P$, et on en déduit une contradiction.</p>`,
    e: R`<p>$\sqrt2\notin\mathbb Q$ : si $\sqrt2 = \frac pq$ irréductible, alors $p^2 = 2q^2$, donc $p$ pair, puis $q$ pair : contradiction.</p>` }) },
  "contraposee": { p: "contraposées?", t: "Contraposée", b: F({
    d: R`<p>La contraposée de « $A\implies B$ » est « non $B\implies$ non $A$ ». Elles sont équivalentes : montrer l'une suffit.</p>`,
    e: R`<p>« $n^2$ pair $\implies n$ pair » se montre par contraposée : si $n$ est impair, $n^2$ est impair.</p>`,
    a: R`<p>Ne pas confondre avec la réciproque « $B\implies A$ », qui n'est pas équivalente.</p>` }) },
  /* ---------- Probabilités ---------- */
  "esperance": { p: "espérances?", t: "Espérance", b: F({
    d: R`<p>Pour $X$ discrète : $E(X) = \sum_xx\,P(X = x)$ (si la série converge absolument). C'est la moyenne des valeurs de $X$, pondérée par leurs probabilités.</p>`,
    r: R`<ul><li>Linéarité : $E(aX+bY) = aE(X)+bE(Y)$.</li><li>Transfert : $E(f(X)) = \sum_xf(x)P(X = x)$.</li><li>Si $X\geqslant0$, $E(X)\geqslant0$ ; Markov : $P(X\geqslant a)\leqslant\frac{E(X)}a$.</li><li>Si $X$ et $Y$ sont indépendantes : $E(XY) = E(X)E(Y)$.</li><li>Bernoulli $p$ : $E = p$ ; binomiale $(n,p)$ : $E = np$ ; géométrique $p$ : $E = \frac1p$ ; Poisson $\lambda$ : $E = \lambda$.</li></ul>` }) },
  "variance": { p: "variances?", t: "Variance", b: F({
    d: R`<p>$V(X) = E\big((X-E(X))^2\big)$ : la moyenne des carrés des écarts à la moyenne. L'écart-type est $\sigma(X) = \sqrt{V(X)}$.</p>`,
    r: R`<ul><li>König-Huygens : $V(X) = E(X^2)-E(X)^2$.</li><li>$V(aX+b) = a^2V(X)$.</li><li>Si $X$ et $Y$ sont indépendantes : $V(X+Y) = V(X)+V(Y)$.</li><li>Bienaymé-Tchebychev : $P(|X-E(X)|\geqslant\varepsilon)\leqslant\frac{V(X)}{\varepsilon^2}$.</li><li>Bernoulli $p$ : $p(1-p)$ ; binomiale : $np(1-p)$ ; Poisson : $\lambda$.</li></ul>` }) }
});
})();

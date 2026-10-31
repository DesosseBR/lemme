/* Contenu de la matière : programme, résumés, rappels de cours, exercices, problèmes, DM et khôlles.
   Le format est décrit dans README.md. */

LEMME.subject({
  id: "maths", name: "Mathématiques", short: "Maths", sym: "∫",
  intro: "Analyse, algèbre et probabilités, dans l'ordre du programme officiel. Chaque chapitre a son résumé et ses exercices corrigés.",
  years: {
    mpsi: [
      C("Logique et raisonnements", "Quantificateurs, implication, contraposée, absurde, récurrence, analyse-synthèse",
        R`<ul><li>Négation : $\neg(\forall x,\ P(x)) \iff \exists x,\ \neg P(x)$.</li><li>Contraposée : $(P\Rightarrow Q) \iff (\neg Q \Rightarrow \neg P)$.</li><li>Récurrence forte : si $P(0)$ et $\big(P(0),\dots,P(n)\big)\Rightarrow P(n+1)$, alors $P(n)$ pour tout $n$.</li><li>Analyse-synthèse : on suppose une solution, on en déduit sa forme, puis on vérifie qu'elle convient.</li></ul>`),
      C("Ensembles et applications", "Opérations ensemblistes, injection, surjection, bijection, image réciproque, relations",
        R`<ul><li>$f$ injective : $f(x)=f(y)\Rightarrow x=y$. Surjective : tout $y$ a un antécédent.</li><li>$g\circ f$ injective $\Rightarrow f$ injective ; $g\circ f$ surjective $\Rightarrow g$ surjective.</li><li>Relation d'équivalence : réflexive, symétrique, transitive. Relation d'ordre : réflexive, antisymétrique, transitive.</li></ul>`),
      C("Calcul algébrique", "Sommes, produits, télescopage, coefficients binomiaux, formule du binôme",
        R`<ul><li>$\displaystyle\sum_{k=0}^{n} q^k = \frac{1-q^{n+1}}{1-q}$ pour $q\neq 1$.</li><li>$\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$ et $\displaystyle\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$.</li><li>Binôme : $(a+b)^n = \displaystyle\sum_{k=0}^{n}\binom{n}{k}a^k b^{n-k}$ si $ab=ba$.</li><li>Télescopage : $\displaystyle\sum_{k=0}^{n}(u_{k+1}-u_k) = u_{n+1}-u_0$.</li></ul>`),
      C("Nombres complexes", "Forme algébrique et exponentielle, formules d'Euler et de Moivre, racines n-ièmes",
        R`<ul><li>Euler : $\cos\theta = \dfrac{e^{i\theta}+e^{-i\theta}}{2}$, $\sin\theta = \dfrac{e^{i\theta}-e^{-i\theta}}{2i}$.</li><li>Moivre : $(\cos\theta+i\sin\theta)^n = \cos(n\theta)+i\sin(n\theta)$.</li><li>Racines $n$-ièmes de l'unité : $\omega_k = e^{2ik\pi/n}$, $0\le k\le n-1$, de somme nulle pour $n\ge 2$.</li><li>Technique de l'angle moitié : $e^{ia}+e^{ib} = 2\cos\!\big(\tfrac{a-b}{2}\big)e^{i(a+b)/2}$.</li></ul>`),
      C("Fonctions usuelles", "Logarithme, exponentielle, puissances, fonctions hyperboliques, fonctions circulaires réciproques",
        R`<ul><li>$\arctan'(x) = \dfrac{1}{1+x^2}$, $\arcsin'(x) = \dfrac{1}{\sqrt{1-x^2}}$ sur $]-1,1[$.</li><li>$\operatorname{ch}^2 - \operatorname{sh}^2 = 1$.</li><li>Croissances comparées : $\dfrac{(\ln x)^a}{x^b}\to 0$ et $\dfrac{x^b}{e^{cx}}\to 0$ en $+\infty$ ($a,b,c>0$).</li></ul>`),
      C("Primitives et équations différentielles linéaires", "Calcul de primitives, IPP, changement de variable, EDL d'ordre 1 et d'ordre 2 à coefficients constants",
        R`<ul><li>Ordre 1 : les solutions de $y'+a(x)y=b(x)$ sont $y = \lambda e^{-A(x)} + y_p$, où $A$ est une primitive de $a$.</li><li>Ordre 2 : pour $y''+ay'+by=0$, on résout $r^2+ar+b=0$. Deux racines réelles : $\lambda e^{r_1x}+\mu e^{r_2x}$. Racine double : $(\lambda+\mu x)e^{rx}$. Racines $\alpha\pm i\beta$ : $e^{\alpha x}(\lambda\cos\beta x+\mu\sin\beta x)$.</li><li>Variation de la constante pour trouver $y_p$.</li></ul>`),
      C("Nombres réels et suites numériques", "Borne supérieure, limites, suites monotones, adjacentes, extraites, récurrentes",
        R`<ul><li>Toute partie non vide majorée de $\mathbb R$ admet une borne supérieure.</li><li>Limite monotone : une suite croissante majorée converge.</li><li>Deux suites adjacentes convergent vers la même limite.</li><li>Bolzano-Weierstrass : toute suite réelle bornée admet une sous-suite convergente.</li></ul>`),
      C("Limites et continuité", "Limites de fonctions, continuité, théorème des valeurs intermédiaires, bornes atteintes",
        R`<ul><li>TVI : l'image d'un intervalle par une fonction continue est un intervalle.</li><li>Une fonction continue sur un segment est bornée et atteint ses bornes.</li><li>Une fonction continue strictement monotone sur un intervalle réalise une bijection sur son image.</li></ul>`),
      C("Dérivabilité", "Dérivée, Rolle, accroissements finis, convexité",
        R`<ul><li>Rolle : $f$ continue sur $[a,b]$, dérivable sur $]a,b[$, $f(a)=f(b)$ $\Rightarrow$ $\exists c,\ f'(c)=0$.</li><li>Accroissements finis : $f(b)-f(a) = f'(c)(b-a)$.</li><li>Inégalité des accroissements finis : $|f'|\le k \Rightarrow |f(x)-f(y)|\le k|x-y|$.</li><li>$f$ deux fois dérivable est convexe si et seulement si $f''\ge 0$.</li></ul>`),
      C("Arithmétique dans ℤ", "Division euclidienne, PGCD, Bézout, Gauss, nombres premiers, congruences",
        R`<ul><li>Bézout : $a\wedge b = d \iff$ il existe $u,v$ avec $au+bv=d$ (pour $d$ diviseur commun). En particulier $a\wedge b=1 \iff \exists u,v,\ au+bv=1$.</li><li>Gauss : $a\mid bc$ et $a\wedge b=1$ $\Rightarrow a\mid c$.</li><li>Petit théorème de Fermat : $p$ premier $\Rightarrow a^p\equiv a \pmod p$.</li></ul>`),
      C("Structures algébriques usuelles", "Groupes, sous-groupes, morphismes, anneaux, corps",
        R`<ul><li>$H$ est un sous-groupe de $G$ si $H\neq\varnothing$ et $\forall x,y\in H,\ xy^{-1}\in H$.</li><li>Un morphisme $f$ est injectif si et seulement si $\ker f = \{e\}$.</li><li>Un corps est un anneau commutatif où tout élément non nul est inversible.</li></ul>`),
      C("Polynômes", "Degré, division euclidienne, racines et multiplicité, factorisation dans ℝ[X] et ℂ[X]",
        R`<ul><li>$a$ est racine d'ordre $m$ de $P$ $\iff P(a)=P'(a)=\dots=P^{(m-1)}(a)=0$ et $P^{(m)}(a)\neq 0$.</li><li>D'Alembert-Gauss : tout polynôme non constant de $\mathbb C[X]$ est scindé.</li><li>Dans $\mathbb R[X]$, les irréductibles sont les polynômes de degré 1 et ceux de degré 2 à discriminant négatif.</li><li>Relations coefficients-racines : pour $X^2-SX+P$, $S=x_1+x_2$ et $P=x_1x_2$.</li></ul>`),
      C("Fractions rationnelles", "Décomposition en éléments simples, pôles",
        R`<ul><li>Si $a$ est un pôle simple de $F=P/Q$, le coefficient de $\dfrac{1}{X-a}$ vaut $\dfrac{P(a)}{Q'(a)}$.</li><li>La partie entière est le quotient de la division euclidienne de $P$ par $Q$.</li></ul>`),
      C("Matrices et systèmes linéaires", "Calcul matriciel, pivot de Gauss, matrices inversibles, transposée",
        R`<ul><li>$(AB)^{-1} = B^{-1}A^{-1}$ et $\,{}^t(AB) = {}^tB\,{}^tA$.</li><li>Une matrice carrée est inversible si et seulement si le pivot de Gauss donne $n$ pivots non nuls.</li><li>$\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1} = \dfrac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ si $ad-bc\neq0$.</li></ul>`),
      C("Analyse asymptotique", "Relations de comparaison, équivalents, développements limités",
        R`<ul><li>$e^x = 1+x+\dfrac{x^2}{2}+\dots+\dfrac{x^n}{n!}+o(x^n)$.</li><li>$\ln(1+x) = x-\dfrac{x^2}{2}+\dfrac{x^3}{3}+o(x^3)$.</li><li>$(1+x)^\alpha = 1+\alpha x+\dfrac{\alpha(\alpha-1)}{2}x^2+o(x^2)$.</li><li>$\sin x = x-\dfrac{x^3}{6}+o(x^3)$, $\cos x = 1-\dfrac{x^2}{2}+o(x^2)$.</li><li>On ne somme jamais des équivalents : on passe aux DL.</li></ul>`),
      C("Espaces vectoriels et dimension finie", "Sous-espaces, familles libres et génératrices, bases, dimension, supplémentaires",
        R`<ul><li>En dimension $n$, une famille libre de $n$ vecteurs est une base.</li><li>Grassmann : $\dim(F+G) = \dim F+\dim G-\dim(F\cap G)$.</li><li>$F\oplus G = E \iff F\cap G=\{0\}$ et $\dim F+\dim G = \dim E$.</li></ul>`),
      C("Applications linéaires", "Noyau, image, théorème du rang, matrices, changement de base, projecteurs",
        R`<ul><li>Théorème du rang : $\dim E = \dim\ker f + \operatorname{rg} f$.</li><li>En dimension finie égale, $f$ injective $\iff$ surjective $\iff$ bijective.</li><li>Changement de base : $A' = P^{-1}AP$.</li><li>$p$ est un projecteur $\iff p\circ p = p$.</li></ul>`),
      C("Groupe symétrique et déterminants", "Permutations, signature, déterminant, développement, comatrice",
        R`<ul><li>$\det(AB) = \det A\,\det B$ et $\det({}^tA) = \det A$.</li><li>$A$ inversible $\iff \det A\neq 0$.</li><li>Toute permutation est un produit de transpositions ; $\varepsilon(\tau)=-1$ pour une transposition.</li></ul>`),
      C("Intégration", "Intégrale sur un segment, sommes de Riemann, théorème fondamental, formules de Taylor",
        R`<ul><li>Sommes de Riemann : $\dfrac{b-a}{n}\displaystyle\sum_{k=0}^{n-1} f\!\Big(a+k\tfrac{b-a}{n}\Big) \xrightarrow[n\to\infty]{} \displaystyle\int_a^b f$ pour $f$ continue.</li><li>Si $f$ est continue, $x\mapsto\displaystyle\int_a^x f$ est l'unique primitive de $f$ nulle en $a$.</li><li>Taylor avec reste intégral : $f(b) = \displaystyle\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(b-a)^k + \int_a^b \frac{(b-t)^n}{n!}f^{(n+1)}(t)\,dt$.</li></ul>`),
      C("Séries numériques", "Convergence, séries à termes positifs, comparaison, séries alternées, absolue convergence",
        R`<ul><li>Si $\sum u_n$ converge, alors $u_n\to 0$ (réciproque fausse : $\sum\frac1n$ diverge).</li><li>Riemann : $\sum \dfrac{1}{n^\alpha}$ converge $\iff \alpha>1$.</li><li>Termes positifs : si $u_n\sim v_n$, les séries ont même nature.</li><li>Critère des séries alternées : $(-1)^n a_n$ avec $a_n$ décroissante de limite nulle.</li></ul>`),
      C("Dénombrement", "Cardinaux, listes, arrangements, combinaisons",
        R`<ul><li>Nombre de parties à $k$ éléments d'un ensemble à $n$ éléments : $\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$.</li><li>$\operatorname{Card}\mathcal P(E) = 2^n$.</li><li>Arrangements : $\dfrac{n!}{(n-k)!}$ listes de $k$ éléments distincts.</li></ul>`),
      C("Probabilités sur un univers fini", "Probabilités conditionnelles, Bayes, indépendance, variables aléatoires, espérance, variance",
        R`<ul><li>Probabilités totales : $P(B) = \displaystyle\sum_i P(B\mid A_i)P(A_i)$ pour un système complet $(A_i)$.</li><li>$V(X) = E(X^2)-E(X)^2$.</li><li>Bienaymé-Tchebychev : $P(|X-E(X)|\ge a) \le \dfrac{V(X)}{a^2}$.</li><li>Loi binomiale $\mathcal B(n,p)$ : $E=np$, $V=np(1-p)$.</li></ul>`),
      C("Espaces préhilbertiens réels", "Produit scalaire, Cauchy-Schwarz, orthonormalisation, projection orthogonale",
        R`<ul><li>Cauchy-Schwarz : $|\langle x,y\rangle| \le \|x\|\,\|y\|$, égalité si et seulement si $x,y$ sont colinéaires.</li><li>Projection sur $F$ de base orthonormée $(e_i)$ : $p_F(x) = \displaystyle\sum_i \langle x,e_i\rangle e_i$.</li><li>$d(x,F) = \|x-p_F(x)\|$.</li></ul>`),
      C("Fonctions de deux variables", "Continuité, dérivées partielles, gradient, points critiques",
        R`<ul><li>Un extremum local intérieur est un point critique : $\nabla f = 0$.</li><li>Dérivée selon $h$ : $D_hf(a) = \langle\nabla f(a), h\rangle$ pour $f$ de classe $C^1$.</li></ul>`)
    ],
    mp: [
      C("Compléments d'algèbre", "Groupes ℤ/nℤ, ordre d'un élément, anneaux, idéaux, polynômes d'endomorphismes",
        R`<ul><li>Lagrange : dans un groupe fini, l'ordre d'un élément divise le cardinal du groupe.</li><li>$\overline{k}$ est inversible dans $\mathbb Z/n\mathbb Z$ $\iff k\wedge n = 1$.</li><li>Les idéaux de $\mathbb K[X]$ sont de la forme $P\,\mathbb K[X]$.</li></ul>`),
      C("Réduction des endomorphismes", "Valeurs propres, polynôme caractéristique, diagonalisation, trigonalisation, Cayley-Hamilton",
        R`<ul><li>$\lambda$ valeur propre $\iff \chi_A(\lambda) = 0$.</li><li>$A$ est diagonalisable $\iff$ elle annule un polynôme scindé à racines simples $\iff \sum \dim E_\lambda = n$.</li><li>Cayley-Hamilton : $\chi_A(A) = 0$.</li><li>Tout endomorphisme d'un $\mathbb C$-espace de dimension finie est trigonalisable.</li></ul>`),
      C("Topologie des espaces vectoriels normés", "Normes, ouverts, fermés, compacité, connexité par arcs, continuité",
        R`<ul><li>En dimension finie, toutes les normes sont équivalentes.</li><li>En dimension finie, les compacts sont les fermés bornés.</li><li>Une application linéaire entre espaces de dimension finie est continue.</li><li>Une fonction continue sur un compact est bornée et atteint ses bornes.</li></ul>`),
      C("Séries et familles sommables", "Sommabilité, Fubini, produit de Cauchy, comparaison série-intégrale",
        R`<ul><li>Produit de Cauchy de deux séries absolument convergentes : $\displaystyle\sum c_n$ avec $c_n = \sum_{k=0}^n a_k b_{n-k}$, de somme $\big(\sum a_n\big)\big(\sum b_n\big)$.</li><li>Comparaison série-intégrale pour $f$ décroissante : $\displaystyle\int_{n}^{n+1} f \le f(n) \le \int_{n-1}^{n} f$.</li></ul>`),
      C("Suites et séries de fonctions", "Convergence simple, uniforme, normale, continuité, intégration, dérivation",
        R`<ul><li>Une limite uniforme de fonctions continues est continue.</li><li>Convergence normale $\Rightarrow$ convergence uniforme.</li><li>Dérivation terme à terme : convergence simple de $\sum f_n$ et convergence uniforme de $\sum f_n'$.</li></ul>`),
      C("Séries entières", "Rayon de convergence, règle de d'Alembert, opérations, développements usuels",
        R`<ul><li>Si $\left|\dfrac{a_{n+1}}{a_n}\right| \to \ell$, alors $R = \dfrac{1}{\ell}$.</li><li>$\dfrac{1}{1-x} = \displaystyle\sum_{n\ge0} x^n$ et $\ln(1+x) = \displaystyle\sum_{n\ge1}\frac{(-1)^{n+1}}{n}x^n$ pour $|x|<1$.</li><li>$e^x = \displaystyle\sum_{n\ge0}\frac{x^n}{n!}$ pour tout $x$ réel.</li><li>On dérive terme à terme sur $]-R,R[$ sans changer le rayon.</li></ul>`),
      C("Intégration sur un intervalle quelconque", "Intégrabilité, comparaison, convergence dominée, intégrales à paramètre",
        R`<ul><li>$\displaystyle\int_1^{+\infty}\frac{dt}{t^\alpha}$ converge $\iff \alpha>1$ ; $\displaystyle\int_0^{1}\frac{dt}{t^\alpha}$ converge $\iff \alpha<1$.</li><li>Convergence dominée : $f_n\to f$ simplement et $|f_n|\le\varphi$ intégrable $\Rightarrow \int f_n \to \int f$.</li><li>Continuité et dérivation sous l'intégrale par domination.</li></ul>`),
      C("Espaces euclidiens", "Endomorphismes autoadjoints, théorème spectral, isométries, matrices orthogonales",
        R`<ul><li>Théorème spectral : toute matrice symétrique réelle est diagonalisable dans une base orthonormée.</li><li>$A\in O(n) \iff {}^tAA = I_n$ ; ses colonnes forment une base orthonormée.</li></ul>`),
      C("Fonctions vectorielles et arcs paramétrés", "Dérivation, intégration, tangente, longueur",
        R`<ul><li>Tangente en un point régulier dirigée par $\vec f'(t)$.</li><li>Longueur d'un arc : $L = \displaystyle\int_a^b \|\vec f'(t)\|\,dt$.</li></ul>`),
      C("Équations différentielles linéaires", "Cauchy-Lipschitz linéaire, systèmes $X'=AX$, wronskien, ordre 2 à coefficients variables",
        R`<ul><li>Cauchy-Lipschitz linéaire : existence et unicité de la solution d'un problème de Cauchy.</li><li>L'espace des solutions de $X'=A(t)X$ est de dimension $n$.</li><li>Pour $A$ constante : $X(t) = e^{tA}X_0$.</li></ul>`),
      C("Calcul différentiel", "Différentielle, dérivées partielles, règle de la chaîne, points critiques, matrice hessienne",
        R`<ul><li>Règle de la chaîne : $\dfrac{d}{dt}f(x(t),y(t)) = \dfrac{\partial f}{\partial x}x'(t)+\dfrac{\partial f}{\partial y}y'(t)$.</li><li>En un point critique, une hessienne définie positive donne un minimum local strict.</li></ul>`),
      C("Fonctions convexes", "Inégalités de convexité, Jensen, position par rapport aux tangentes",
        R`<ul><li>Jensen : $f\Big(\sum\lambda_ix_i\Big) \le \sum\lambda_if(x_i)$ pour $\lambda_i\ge0$, $\sum\lambda_i=1$.</li><li>Une fonction convexe dérivable est au-dessus de ses tangentes.</li></ul>`),
      C("Probabilités et variables aléatoires discrètes", "Espaces probabilisés, lois géométrique et de Poisson, couples, indépendance, fonctions génératrices, loi faible des grands nombres",
        R`<ul><li>Géométrique $\mathcal G(p)$ : $P(X=k) = p(1-p)^{k-1}$, $E = \dfrac1p$, $V = \dfrac{1-p}{p^2}$.</li><li>Poisson $\mathcal P(\lambda)$ : $P(X=k) = e^{-\lambda}\dfrac{\lambda^k}{k!}$, $E = V = \lambda$.</li><li>$G_X(t) = E(t^X)$ et $E(X) = G_X'(1)$.</li><li>Loi faible des grands nombres : $P\big(|\overline{X}_n - m|\ge\varepsilon\big) \to 0$.</li></ul>`)
    ]
  }
});


LEMME.rappels({
  "limite-monotone": { t: "Théorème de la limite monotone", b: R`Une suite réelle croissante et majorée converge. Une suite croissante non majorée tend vers $+\infty$.` },
  "dl-usuels": { t: "Développements limités usuels en 0", b: R`$$e^x = 1+x+\frac{x^2}{2}+o(x^2),\qquad \sin x = x-\frac{x^3}{6}+o(x^3),$$ $$\cos x = 1-\frac{x^2}{2}+o(x^2),\qquad \ln(1+x) = x-\frac{x^2}{2}+o(x^2).$$` },
  "equivalents-somme": { t: "On ne somme pas des équivalents", b: R`$f\sim g$ et $h\sim k$ n'impliquent pas $f+h\sim g+k$. Pour une somme ou une différence, on passe aux développements limités.` },
  "theoreme-rang": { t: "Théorème du rang", b: R`Si $E$ est de dimension finie et $f\in\mathcal L(E,F)$, alors $\dim E = \dim\ker f + \operatorname{rg} f$.` },
  "image-base": { t: "Image et base", b: R`Si $(e_1,\dots,e_n)$ est une base de $E$, alors $\operatorname{Im} f = \operatorname{Vect}\big(f(e_1),\dots,f(e_n)\big)$.` },
  "valeurs-propres-distinctes": { t: "Valeurs propres distinctes", b: R`Une matrice de $\mathcal M_n(\mathbb K)$ qui possède $n$ valeurs propres distinctes est diagonalisable. La réciproque est fausse.` },
  "puissance-diagonalisable": { t: "Puissance d'une matrice diagonalisable", b: R`Si $A = PDP^{-1}$, alors $A^n = PD^nP^{-1}$, et $D^n$ s'obtient en élevant chaque coefficient diagonal à la puissance $n$.` },
  "spectral": { t: "Théorème spectral", b: R`Toute matrice symétrique réelle est diagonalisable dans une base orthonormée de vecteurs propres.` },
  "dalembert-se": { t: "Règle de d'Alembert pour les séries entières", b: R`Si $a_n\neq0$ à partir d'un certain rang et $\left|\dfrac{a_{n+1}}{a_n}\right|\to\ell\in[0,+\infty]$, alors $R = \dfrac{1}{\ell}$ (avec $\frac10 = +\infty$ et $\frac1{+\infty}=0$).` },
  "derivation-se": { t: "Dérivation d'une série entière", b: R`Sur $]-R,R[$, on dérive terme à terme sans changer le rayon : $\left(\sum a_nx^n\right)' = \sum na_nx^{n-1}$.` },
  "serie-geometrique": { t: "Série géométrique", b: R`Pour $|q|<1$ : $\displaystyle\sum_{n\ge0}q^n = \frac{1}{1-q}$.` },
  "loi-geometrique": { t: "Loi géométrique", b: R`$X\sim\mathcal G(p)$ : $P(X=k) = p(1-p)^{k-1}$ pour $k\ge1$. C'est le rang du premier succès.` },
  "fonction-generatrice": { t: "Fonction génératrice", b: R`$G_X(t) = E\big(t^X\big) = \sum_k P(X=k)\,t^k$. Si $G_X$ est dérivable en $1$, alors $E(X) = G_X'(1)$.` },
  "continuite-point-fixe": { t: "Limite d'une suite récurrente", b: R`Si $u_{n+1} = f(u_n)$, si $(u_n)$ converge vers $\ell$ et si $f$ est continue en $\ell$, alors $\ell = f(\ell)$.` },
  "quantite-conjuguee": { t: "Quantité conjuguée", b: R`Pour $a,b\ge0$ non tous deux nuls : $\sqrt a - \sqrt b = \dfrac{a-b}{\sqrt a + \sqrt b}$.` },
  "duplication-cos": { t: "Formule de duplication", b: R`$1+\cos\theta = 2\cos^2\dfrac{\theta}{2}$.` },
  "cayley-hamilton": { t: "Théorème de Cayley-Hamilton", b: R`Pour toute $A\in\mathcal M_n(\mathbb K)$ : $\chi_A(A) = 0$.` },
  "scinde-C": { t: "Polynômes sur ℂ", b: R`Tout polynôme non constant de $\mathbb C[X]$ est scindé. $\chi_A$ est donc scindé et ses racines sont les valeurs propres de $A$.` }
});

LEMME.exercises([
{
  id: "ex-recurrence", subj: "maths", year: "mpsi", chap: 0, classique: true, level: 2, time: "10 min",
  title: "Une majoration par récurrence",
  enonce: R`<p>Montrer que pour tout entier $n\ge1$ :</p>$$\sum_{k=1}^{n}\frac{1}{k^2} \le 2 - \frac{1}{n}$$<p>En déduire que <span data-k="sp">la suite des sommes partielles</span> converge.</p>`,
  decode: {
    donnees: [R`Une somme $S_n = \sum_{k=1}^n \frac1{k^2}$ de termes positifs.`],
    but: R`Majorer $S_n$ pour tout $n$, puis en tirer la convergence.`,
    cles: { sp: R`C'est la suite $(S_n)_{n\ge1}$, où $S_n$ est la somme des $n$ premiers termes.` }
  },
  steps: [
    { t: "L'idée", h: R`<p>Le majorant $2-\frac1n$ dépend de $n$ : on va le prouver rang après rang, par récurrence.</p>`, b: R`<p>On note $S_n = \sum_{k=1}^n\frac1{k^2} = 1+\frac14+\frac19+\dots+\frac1{n^2}$, et $P(n)$ la propriété « $S_n\leqslant2-\frac1n$ ».</p><p>Le majorant change avec $n$ : c'est le signal d'une récurrence. On ne récurre pas directement sur « $S_n\leqslant2$ » : savoir que $S_n\leqslant2$ ne dit pas si, en ajoutant $\frac1{(n+1)^2}$, on reste sous $2$. Le $-\frac1n$ laisse justement la marge nécessaire.</p>`, rappels: ["recurrence"] },
    { t: "Initialisation", h: R`<p>Calcule séparément les deux membres pour $n = 1$.</p>`, b: R`<p>Pour $n = 1$, la somme n'a qu'un terme :</p>$$S_1 = \frac1{1^2} = 1\qquad\text{et}\qquad2-\frac11 = 2-1 = 1.$$<p>On a bien $1\leqslant1$ : $P(1)$ est vraie.</p>` },
    { t: "Hérédité : écrire S_{n+1}", h: R`<p>$S_{n+1}$, c'est $S_n$ plus un terme : $S_{n+1} = S_n+\frac1{(n+1)^2}$. Utilise ensuite l'hypothèse sur $S_n$.</p>`, b: R`<p>Soit $n\geqslant1$. On suppose $P(n)$ : $S_n\leqslant2-\frac1n$. On veut montrer $P(n+1)$ : $S_{n+1}\leqslant2-\frac1{n+1}$.</p><p>La somme jusqu'à $n+1$ est la somme jusqu'à $n$ plus le dernier terme :</p>$$S_{n+1} = S_n+\frac1{(n+1)^2}.$$<p>On remplace $S_n$ par son majorant :</p>$$S_{n+1}\leqslant2-\frac1n+\frac1{(n+1)^2}.$$<p>Il suffit donc de montrer :</p><div class="sbox">$$2-\frac1n+\frac1{(n+1)^2}\leqslant2-\frac1{n+1},\quad\text{c'est-à-dire}\quad\frac1{(n+1)^2}\leqslant\frac1n-\frac1{n+1}.$$</div><p>(On a retiré $2$ des deux côtés et fait passer $-\frac1n$ à droite.)</p>` },
    { t: "Hérédité : le calcul clé", h: R`<p>Mets $\frac1n-\frac1{n+1}$ au même dénominateur $n(n+1)$, puis compare les dénominateurs.</p>`, b: R`<p>On met au même dénominateur :</p>$$\frac1n-\frac1{n+1} = \frac{n+1}{n(n+1)}-\frac{n}{n(n+1)} = \frac{(n+1)-n}{n(n+1)} = \frac1{n(n+1)}.$$<p>On compare maintenant $\frac1{n(n+1)}$ et $\frac1{(n+1)^2} = \frac1{(n+1)(n+1)}$. Comme $n\leqslant n+1$, en multipliant par $n+1>0$ :</p>$$n(n+1)\leqslant(n+1)^2.$$<p>Un dénominateur plus petit donne une fraction plus grande (tout est positif) :</p>$$\frac1{(n+1)^2}\leqslant\frac1{n(n+1)} = \frac1n-\frac1{n+1}.$$<p>Donc $S_{n+1}\leqslant2-\frac1{n+1}$ : $P(n+1)$ est vraie. Par récurrence, $P(n)$ est vraie pour tout $n\geqslant1$.</p>` },
    { t: "Conclusion : la convergence", h: R`<p>Une suite croissante et majorée converge. Pourquoi $(S_n)$ est-elle croissante ? Pourquoi est-elle majorée par une constante ?</p>`, b: R`<p><b>Croissante</b> : $S_{n+1}-S_n = \frac1{(n+1)^2}>0$.</p><p><b>Majorée</b> : pour tout $n$, $S_n\leqslant2-\frac1n\leqslant2$, car $\frac1n>0$.</p><p>Par le théorème de la limite monotone, $(S_n)$ converge, et sa limite est $\leqslant2$. (On peut montrer qu'elle vaut $\frac{\pi^2}6\approx1{,}645$.)</p>`, rappels: ["limite-monotone"] }
  ],
  piege: R`Écrire « $S_n\le2$ donc $S_{n+1}\le2$ » est faux : ajouter un terme positif peut faire dépasser $2$.`,
  methode: R`Quand une majoration constante ne passe pas par récurrence, cherche une majoration plus forte qui dépend de $n$.`,
  viz: {
    type: "seq", title: "Les sommes $S_n$ restent sous $2-1/n$", n: [1, 30], y: [0, 2.1],
    series: [
      { label: "S_n", style: "bar", f: n => { let s = 0; for (let k = 1; k <= n; k++) s += 1 / (k * k); return s; } },
      { label: "2 − 1/n", style: "line", f: n => 2 - 1 / n }
    ],
    hlines: [{ y: () => Math.PI * Math.PI / 6, label: "π²/6, la limite" }]
  }
},
{
  id: "ex-dl-limite", subj: "maths", year: "mpsi", chap: 14, classique: true, level: 2, time: "8 min",
  title: "Une limite par développements limités",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to0}\frac{e^x-1-\sin x}{x^2}$.</p>`,
  decode: {
    donnees: [R`Numérateur et dénominateur tendent vers $0$ : forme indéterminée $\frac00$.`],
    but: R`Trouver la limite en $0$.`,
    cles: {}
  },
  steps: [
    { t: "Repérer la forme indéterminée", h: R`<p>Remplace $x$ par $0$ en haut et en bas : que trouves-tu ?</p>`, b: R`<p>En $x = 0$ : numérateur $e^0-1-\sin0 = 1-1-0 = 0$, dénominateur $0^2 = 0$. C'est une forme indéterminée $\frac00$ : il faut savoir <b>à quelle vitesse</b> le numérateur tend vers $0$.</p><p>Le dénominateur est $x^2$ : on développe donc le numérateur jusqu'à l'ordre $2$ (jusqu'au terme en $x^2$).</p>`, rappels: ["dl-usuels"] },
    { t: "Les deux DL à l'ordre 2", h: R`<p>$e^x = 1+x+\frac{x^2}{2!}+\dots$ et $\sin x = x-\frac{x^3}{3!}+\dots$ Garde tout jusqu'à $x^2$.</p>`, b: R`<p>DL usuels en $0$, coupés après le terme en $x^2$ :</p>$$e^x = 1+x+\frac{x^2}2+o(x^2).$$<p>Pour $\sin x = x-\frac{x^3}6+\dots$ : il n'y a pas de terme en $x^2$ (le sinus est impair, seules les puissances impaires apparaissent). Le terme suivant, $-\frac{x^3}6$, est négligeable devant $x^2$ :</p>$$\sin x = x+o(x^2).$$` },
    { t: "Assembler le numérateur", h: R`<p>Remplace $e^x$ et $\sin x$ par leurs DL dans $e^x-1-\sin x$, puis regroupe les termes de même degré.</p>`, b: R`$$e^x-1-\sin x = \Big(1+x+\frac{x^2}2+o(x^2)\Big)-1-\Big(x+o(x^2)\Big).$$<p>On regroupe par degré :</p><ul><li>constantes : $1-1 = 0$ ;</li><li>termes en $x$ : $x-x = 0$ ;</li><li>termes en $x^2$ : $\frac{x^2}2$ ;</li><li>restes : $o(x^2)-o(x^2) = o(x^2)$.</li></ul><div class="sbox">$$e^x-1-\sin x = \frac{x^2}2+o(x^2).$$</div>` },
    { t: "Diviser par x² et conclure", h: R`<p>$\frac{o(x^2)}{x^2} = o(1)$, c'est-à-dire une quantité qui tend vers $0$.</p>`, b: R`<p>On divise chaque terme par $x^2$ (pour $x\neq0$) :</p>$$\frac{e^x-1-\sin x}{x^2} = \frac{\frac{x^2}2}{x^2}+\frac{o(x^2)}{x^2} = \frac12+o(1).$$<p>Le $o(1)$ tend vers $0$, donc :</p><div class="sbox">$$\lim_{x\to0}\frac{e^x-1-\sin x}{x^2} = \frac12.$$</div>` }
  ],
  piege: R`Remplacer $e^x-1$ par $x$ et $\sin x$ par $x$ donne $0$ au numérateur : on ne soustrait jamais des équivalents.`,
  methode: R`Développe chaque terme à l'ordre du dénominateur. Si tout s'annule, monte d'un ordre.`,
  viz: {
    type: "plot", title: "La fonction s'approche de 1/2 en 0", x: [-2, 2], y: [0, 1.4], xlabel: "x",
    curves: [{ label: "(eˣ − 1 − sin x) / x²", f: x => Math.abs(x) < 1e-4 ? NaN : (Math.exp(x) - 1 - Math.sin(x)) / (x * x) }],
    hlines: [{ y: () => 0.5, label: "1/2" }]
  }
},
{
  id: "ex-rang", subj: "maths", year: "mpsi", chap: 16, level: 3, time: "15 min",
  title: "Noyau, image et théorème du rang",
  enonce: R`<p>Soit $f:\mathbb R_2[X]\to\mathbb R_2[X]$ définie par $f(P) = P'$.</p><ol><li>Montrer que $f$ est linéaire.</li><li>Déterminer $\ker f$ et $\operatorname{Im} f$.</li><li>Vérifier <span data-k="rang">le théorème du rang</span>.</li></ol>`,
  decode: {
    donnees: [R`$\mathbb R_2[X]$ : les polynômes de degré au plus $2$, un espace de dimension $3$.`, R`$f$ associe à $P$ sa dérivée.`],
    but: R`Décrire noyau et image, puis vérifier une égalité de dimensions.`,
    cles: { rang: R`$\dim\mathbb R_2[X] = \dim\ker f + \operatorname{rg} f$.` }
  },
  steps: [
    { t: "Linéarité", h: R`<p>Prends $P,Q\in\mathbb R_2[X]$ et $\lambda\in\mathbb R$, et calcule $f(\lambda P+Q)$ avec les règles de dérivation.</p>`, b: R`<p>D'abord, $f$ va bien de $\mathbb R_2[X]$ dans $\mathbb R_2[X]$ : la dérivée d'un polynôme de degré $\leqslant2$ est de degré $\leqslant1$, donc $\leqslant2$.</p><p>Soient $P,Q\in\mathbb R_2[X]$ et $\lambda\in\mathbb R$. La dérivée d'une somme est la somme des dérivées, et on peut sortir une constante :</p>$$f(\lambda P+Q) = (\lambda P+Q)' = \lambda P'+Q' = \lambda f(P)+f(Q).$$<p>Donc $f$ est linéaire.</p>` },
    { t: "Noyau", h: R`<p>Écris $P = a+bX+cX^2$ et résous $P' = 0$.</p>`, b: R`<p>Le noyau est l'ensemble des $P$ tels que $f(P) = 0$. On écrit $P = a+bX+cX^2$. Alors</p>$$f(P) = P' = b+2cX.$$<p>Un polynôme est nul si et seulement si tous ses coefficients sont nuls :</p>$$P' = 0\iff\begin{cases}b = 0\\2c = 0\end{cases}\iff b = c = 0.$$<p>Donc $P = a$ : les polynômes constants. $a$ est libre.</p><div class="sbox">$$\ker f = \{a : a\in\mathbb R\} = \operatorname{Vect}(1),\qquad\dim\ker f = 1.$$</div>` },
    { t: "Image", h: R`<p>L'image est engendrée par les images d'une base : calcule $f(1)$, $f(X)$, $f(X^2)$.</p>`, b: R`<p>On prend la base canonique $(1,X,X^2)$ et on calcule les images :</p>$$f(1) = 0,\qquad f(X) = 1,\qquad f(X^2) = 2X.$$<p>L'image est engendrée par ces trois vecteurs :</p>$$\operatorname{Im}f = \operatorname{Vect}(0,1,2X) = \operatorname{Vect}(1,2X) = \operatorname{Vect}(1,X).$$<p>(On enlève le vecteur nul, et $\operatorname{Vect}(2X) = \operatorname{Vect}(X)$.) La famille $(1,X)$ est libre (degrés distincts), c'est donc une base de l'image :</p><div class="sbox">$$\operatorname{Im}f = \mathbb R_1[X],\qquad\operatorname{rg}f = 2.$$</div>`, rappels: ["image-base"] },
    { t: "Théorème du rang", h: R`<p>Compare $\dim\mathbb R_2[X]$ et $\dim\ker f+\operatorname{rg}f$.</p>`, b: R`<p>$\mathbb R_2[X]$ a pour base $(1,X,X^2)$, donc il est de dimension $3$. On vérifie :</p>$$\dim\mathbb R_2[X] = 3 = 1+2 = \dim\ker f+\operatorname{rg}f.$$<p>Interprétation : la dérivation « écrase » une dimension (les constantes) et les deux autres se retrouvent dans l'image.</p>`, rappels: ["theoreme-rang"] }
  ],
  piege: R`Montrer seulement $\operatorname{Im} f\subset\mathbb R_1[X]$ ne suffit pas : il faut l'égalité.`,
  methode: R`Pour trouver une image, calcule $f$ sur une base : l'image est engendrée par ces vecteurs.`
},
{
  id: "ex-diago", subj: "maths", year: "mp", chap: 1, classique: true, level: 3, time: "20 min",
  title: "Diagonaliser pour calculer une puissance",
  enonce: R`<p>Soit $A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$. <span data-k="diag">Diagonaliser</span> $A$ puis calculer $A^n$ pour $n\in\mathbb N$.</p>`,
  decode: {
    donnees: [R`Une matrice $2\times2$ symétrique réelle.`],
    but: R`Écrire $A = PDP^{-1}$ avec $D$ diagonale, puis en déduire $A^n$.`,
    cles: { diag: R`Trouver $P$ inversible et $D$ diagonale telles que $A = PDP^{-1}$.` }
  },
  steps: [
    { t: "Écrire la matrice XI − A", h: R`<p>On part de la définition $\chi_A(X) = \det(XI_2-A)$ : on soustrait $A$ à la matrice $XI_2$, coefficient par coefficient.</p>`, b: R`<p>Par définition, le polynôme caractéristique est $\chi_A(X) = \det(XI_2-A)$. On commence par écrire $XI_2$ :</p>$$XI_2 = X\begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}X&0\\0&X\end{pmatrix}.$$<p>On lui soustrait $A$ coefficient par coefficient :</p>$$XI_2-A = \begin{pmatrix}X-2&0-1\\0-1&X-2\end{pmatrix} = \begin{pmatrix}X-2&-1\\-1&X-2\end{pmatrix}.$$<p>Sur la diagonale on a $X$ moins le coefficient de $A$ ; hors de la diagonale, simplement l'opposé du coefficient de $A$.</p>` },
    { t: "Calculer le déterminant", h: R`<p>Pour une matrice $2\times2$ : $\begin{vmatrix}a&b\\c&d\end{vmatrix} = ad-bc$. Ici $a = d = X-2$ et $b = c = -1$.</p>`, b: R`<p>On applique la formule $\begin{vmatrix}a&b\\c&d\end{vmatrix} = ad-bc$ avec $a = d = X-2$ et $b = c = -1$ :</p>$$\chi_A(X) = (X-2)(X-2)-(-1)(-1) = (X-2)^2-1.$$<p>On développe $(X-2)^2 = X^2-4X+4$ :</p>$$\chi_A(X) = X^2-4X+4-1 = X^2-4X+3.$$<p><b>Vérification rapide</b> : en taille $2$, $\chi_A(X) = X^2-\operatorname{tr}(A)X+\det A$. Ici $\operatorname{tr}A = 2+2 = 4$ et $\det A = 2\times2-1\times1 = 3$. On retrouve bien $X^2-4X+3$.</p>` },
    { t: "Trouver les valeurs propres", h: R`<p>Les valeurs propres sont les racines de $\chi_A$. Cherche deux nombres de somme $4$ et de produit $3$, ou utilise le discriminant.</p>`, b: R`<p>On résout $X^2-4X+3 = 0$. Discriminant :</p>$$\Delta = (-4)^2-4\times1\times3 = 16-12 = 4,\qquad\sqrt\Delta = 2.$$$$X_1 = \frac{4-2}2 = 1,\qquad X_2 = \frac{4+2}2 = 3.$$<p>(Plus vite : $1+3 = 4$ et $1\times3 = 3$, donc $1$ et $3$ sont les racines.) On factorise :</p><div class="sbox">$$\chi_A(X) = (X-1)(X-3),\qquad\operatorname{Sp}(A) = \{1,3\}.$$</div><p>$A$ est de taille $2$ et possède $2$ valeurs propres distinctes : elle est diagonalisable.</p>`, rappels: ["valeurs-propres-distinctes"] },
    { t: "Vecteur propre pour λ = 1", h: R`<p>On cherche les $X = \begin{pmatrix}x\\y\end{pmatrix}$ tels que $AX = 1\cdot X$, c'est-à-dire $(A-I_2)X = 0$. Écris $A-I_2$, puis le système.</p>`, b: R`<p>On cherche $E_1 = \ker(A-I_2)$. D'abord la matrice :</p>$$A-I_2 = \begin{pmatrix}2-1&1\\1&2-1\end{pmatrix} = \begin{pmatrix}1&1\\1&1\end{pmatrix}.$$<p>Avec $X = \begin{pmatrix}x\\y\end{pmatrix}$, l'équation $(A-I_2)X = 0$ donne le système :</p>$$\begin{cases}x+y = 0\\x+y = 0\end{cases}\iff y = -x.$$<p>Les deux lignes sont identiques : il ne reste qu'une équation. Les solutions sont les $\begin{pmatrix}x\\-x\end{pmatrix} = x\begin{pmatrix}1\\-1\end{pmatrix}$, $x\in\mathbb R$. Donc</p><div class="sbox">$$E_1 = \operatorname{Vect}\begin{pmatrix}1\\-1\end{pmatrix}.$$</div><p><b>Vérification</b> : $A\begin{pmatrix}1\\-1\end{pmatrix} = \begin{pmatrix}2\times1+1\times(-1)\\1\times1+2\times(-1)\end{pmatrix} = \begin{pmatrix}1\\-1\end{pmatrix}$. C'est bien $1\times$ le vecteur.</p>` },
    { t: "Vecteur propre pour λ = 3", h: R`<p>Même méthode : résoudre $(A-3I_2)X = 0$.</p>`, b: R`<p>On cherche $E_3 = \ker(A-3I_2)$ :</p>$$A-3I_2 = \begin{pmatrix}2-3&1\\1&2-3\end{pmatrix} = \begin{pmatrix}-1&1\\1&-1\end{pmatrix}.$$<p>Le système $(A-3I_2)X = 0$ s'écrit :</p>$$\begin{cases}-x+y = 0\\x-y = 0\end{cases}\iff y = x.$$<p>(La deuxième ligne est l'opposée de la première.) Les solutions sont les $x\begin{pmatrix}1\\1\end{pmatrix}$ :</p><div class="sbox">$$E_3 = \operatorname{Vect}\begin{pmatrix}1\\1\end{pmatrix}.$$</div><p><b>Vérification</b> : $A\begin{pmatrix}1\\1\end{pmatrix} = \begin{pmatrix}2+1\\1+2\end{pmatrix} = \begin{pmatrix}3\\3\end{pmatrix} = 3\begin{pmatrix}1\\1\end{pmatrix}$.</p>` },
    { t: "Construire P et D", h: R`<p>Les vecteurs propres vont <b>en colonnes</b> dans $P$ ; les valeurs propres, <b>dans le même ordre</b>, sur la diagonale de $D$.</p>`, b: R`<p>On range les vecteurs propres en colonnes : d'abord celui de $\lambda = 1$, puis celui de $\lambda = 3$. Les valeurs propres vont sur la diagonale de $D$ dans le même ordre :</p>$$P = \begin{pmatrix}1&1\\-1&1\end{pmatrix},\qquad D = \begin{pmatrix}1&0\\0&3\end{pmatrix}.$$<p>Pourquoi $AP = PD$ ? La première colonne de $AP$ est $A\begin{pmatrix}1\\-1\end{pmatrix} = 1\cdot\begin{pmatrix}1\\-1\end{pmatrix}$, la seconde est $A\begin{pmatrix}1\\1\end{pmatrix} = 3\begin{pmatrix}1\\1\end{pmatrix}$ : c'est exactement $PD$. Comme $P$ est inversible ($\det P = 1\times1-1\times(-1) = 2\neq0$), on obtient</p><div class="sbox">$$A = PDP^{-1}.$$</div>` },
    { t: "Calculer P⁻¹", h: R`<p>Formule en taille $2$ : $\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1} = \dfrac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$ : on échange $a$ et $d$, on change le signe de $b$ et $c$.</p>`, b: R`<p>Pour $P = \begin{pmatrix}a&b\\c&d\end{pmatrix}$ avec $a = 1$, $b = 1$, $c = -1$, $d = 1$ :</p><ul><li>déterminant : $ad-bc = 1\times1-1\times(-1) = 1+1 = 2$ ;</li><li>on échange $a$ et $d$ (ici tous deux valent $1$) ;</li><li>on change les signes de $b$ et $c$ : $b = 1\to-1$ et $c = -1\to1$.</li></ul>$$P^{-1} = \frac12\begin{pmatrix}1&-1\\1&1\end{pmatrix}.$$<p><b>Vérification</b> :</p>$$PP^{-1} = \frac12\begin{pmatrix}1\times1+1\times1&1\times(-1)+1\times1\\(-1)\times1+1\times1&(-1)(-1)+1\times1\end{pmatrix} = \frac12\begin{pmatrix}2&0\\0&2\end{pmatrix} = I_2.$$` },
    { t: "Pourquoi Aⁿ = P Dⁿ P⁻¹", h: R`<p>Écris $A^2 = (PDP^{-1})(PDP^{-1})$ : au milieu, $P^{-1}P = I_2$ disparaît.</p>`, b: R`<p>Calculons $A^2$ :</p>$$A^2 = (PDP^{-1})(PDP^{-1}) = PD\underbrace{P^{-1}P}_{=I_2}DP^{-1} = PD^2P^{-1}.$$<p>De même, dans $A^n = (PDP^{-1})(PDP^{-1})\cdots(PDP^{-1})$, tous les $P^{-1}P$ du milieu disparaissent (on peut le rédiger par récurrence : si $A^n = PD^nP^{-1}$, alors $A^{n+1} = PD^nP^{-1}PDP^{-1} = PD^{n+1}P^{-1}$).</p><p>Et une matrice diagonale se met à la puissance coefficient par coefficient :</p><div class="sbox">$$A^n = PD^nP^{-1},\qquad D^n = \begin{pmatrix}1^n&0\\0&3^n\end{pmatrix} = \begin{pmatrix}1&0\\0&3^n\end{pmatrix}.$$</div>`, rappels: ["puissance-diagonalisable"] },
    { t: "Le produit P Dⁿ", h: R`<p>Multiplier à droite par une matrice diagonale multiplie chaque <b>colonne</b> par le coefficient diagonal correspondant.</p>`, b: R`<p>On calcule d'abord $PD^n$ : la première colonne de $P$ est multipliée par $1$, la seconde par $3^n$.</p>$$PD^n = \begin{pmatrix}1&1\\-1&1\end{pmatrix}\begin{pmatrix}1&0\\0&3^n\end{pmatrix} = \begin{pmatrix}1\times1+1\times0&1\times0+1\times3^n\\(-1)\times1+1\times0&(-1)\times0+1\times3^n\end{pmatrix} = \begin{pmatrix}1&3^n\\-1&3^n\end{pmatrix}.$$` },
    { t: "Le produit final", h: R`<p>Calcule $\begin{pmatrix}1&3^n\\-1&3^n\end{pmatrix}\begin{pmatrix}1&-1\\1&1\end{pmatrix}$ coefficient par coefficient (ligne × colonne), puis multiplie par $\frac12$.</p>`, b: R`<p>On multiplie $PD^n$ par $P^{-1} = \frac12\begin{pmatrix}1&-1\\1&1\end{pmatrix}$ ; on garde le $\frac12$ devant. Coefficient par coefficient (ligne $i$ de gauche × colonne $j$ de droite) :</p><ul><li>ligne 1, colonne 1 : $1\times1+3^n\times1 = 3^n+1$ ;</li><li>ligne 1, colonne 2 : $1\times(-1)+3^n\times1 = 3^n-1$ ;</li><li>ligne 2, colonne 1 : $(-1)\times1+3^n\times1 = 3^n-1$ ;</li><li>ligne 2, colonne 2 : $(-1)\times(-1)+3^n\times1 = 3^n+1$.</li></ul><div class="sbox">$$A^n = \frac12\begin{pmatrix}3^n+1&3^n-1\\3^n-1&3^n+1\end{pmatrix}.$$</div><p><b>Vérifications</b> : pour $n = 0$, $\frac12\begin{pmatrix}2&0\\0&2\end{pmatrix} = I_2$ ✓. Pour $n = 1$, $\frac12\begin{pmatrix}4&2\\2&4\end{pmatrix} = \begin{pmatrix}2&1\\1&2\end{pmatrix} = A$ ✓.</p>` }
  ],
  piege: R`Écrire $A^n = P^{-1}D^nP$. Vérifie toujours le cas $n=1$.`,
  methode: R`Une matrice symétrique réelle est toujours diagonalisable, même sans calcul.`
},
{
  id: "ex-serie-entiere", subj: "maths", year: "mp", chap: 5, level: 3, time: "15 min",
  title: "Rayon et somme d'une série entière",
  enonce: R`<p>Déterminer <span data-k="rayon">le rayon de convergence</span> puis la somme de $\displaystyle\sum_{n\ge0}\frac{n}{2^n}x^n$.</p>`,
  decode: {
    donnees: [R`$a_n = \dfrac{n}{2^n}$.`],
    but: R`Trouver $R$, puis une expression simple de la somme sur $]-R,R[$.`,
    cles: { rayon: R`Le réel $R$ tel que la série converge pour $|x|< R$ et diverge pour $|x|>R$.` }
  },
  steps: [
    { t: "Le rapport de deux termes", h: R`<p>Règle de d'Alembert : calcule $\left|\frac{a_{n+1}}{a_n}\right|$ et sa limite $L$ ; alors $R = \frac1L$.</p>`, b: R`<p>Ici $a_n = \frac n{2^n}$, donc $a_{n+1} = \frac{n+1}{2^{n+1}}$. On calcule le quotient (pour $n\geqslant1$) :</p>$$\frac{a_{n+1}}{a_n} = \frac{n+1}{2^{n+1}}\times\frac{2^n}{n} = \frac{n+1}{n}\times\frac{2^n}{2^{n+1}} = \frac{n+1}n\times\frac12.$$<p>Or $\frac{n+1}n = 1+\frac1n\to1$. Donc</p>$$\left|\frac{a_{n+1}}{a_n}\right|\longrightarrow\frac12.$$<p>Par la règle de d'Alembert, le rayon est l'inverse de cette limite :</p><div class="sbox">$$R = 2.$$</div>`, rappels: ["dalembert-se"] },
    { t: "Partir de la série géométrique", h: R`<p>Pour $|u|< 1$, $\sum_{n\geqslant0}u^n = \frac1{1-u}$. Dérive les deux membres terme à terme.</p>`, b: R`<p>Pour $|u|< 1$ :</p>$$\sum_{n\geqslant0}u^n = \frac1{1-u}.$$<p>Une série entière se dérive terme à terme sur son intervalle ouvert de convergence. La dérivée de $u^n$ est $nu^{n-1}$, celle de $\frac1{1-u} = (1-u)^{-1}$ est $(1-u)^{-2}$ :</p>$$\sum_{n\geqslant1}nu^{n-1} = \frac1{(1-u)^2}.$$<p>On multiplie par $u$ pour retrouver des $u^n$ (le terme $n = 0$ vaut $0$, on peut l'ajouter) :</p><div class="sbox">$$\sum_{n\geqslant0}nu^n = \frac u{(1-u)^2}\qquad(|u|< 1).$$</div>`, rappels: ["serie-geometrique", "derivation-se"] },
    { t: "Remplacer u par x/2", h: R`<p>$\frac n{2^n}x^n = n\left(\frac x2\right)^n$. Pose $u = \frac x2$, puis simplifie la fraction.</p>`, b: R`<p>On remarque que $\frac{n}{2^n}x^n = n\left(\frac x2\right)^n$. Avec $u = \frac x2$ : la condition $|u|< 1$ devient $|x|< 2$. Pour $|x|< 2$ :</p>$$\sum_{n\geqslant0}\frac n{2^n}x^n = \frac{x/2}{(1-x/2)^2}.$$<p>On simplifie. Au dénominateur, $1-\frac x2 = \frac{2-x}2$, donc $(1-\frac x2)^2 = \frac{(2-x)^2}4$. Ainsi :</p>$$\frac{x/2}{(2-x)^2/4} = \frac x2\times\frac4{(2-x)^2} = \frac{2x}{(2-x)^2}.$$<div class="sbox">$$\sum_{n\geqslant0}\frac n{2^n}x^n = \frac{2x}{(2-x)^2}\qquad\text{pour }x\in\,]-2,2[.$$</div><p><b>Vérification</b> en $x = 1$ : $\sum\frac n{2^n} = \frac2{1^2} = 2$ (résultat classique).</p>` }
  ],
  piege: R`Oublier de préciser que l'égalité n'est valable que sur $]-2,2[$.`,
  methode: R`Pour une série en $n\,u^n$, pars de la série géométrique et dérive.`,
  viz: {
    type: "plot", title: "Les sommes partielles rejoignent la somme sur ]−2, 2[", x: [-1.9, 1.9], y: [-1, 8], xlabel: "x",
    params: [{ k: "N", label: "Nombre de termes N", min: 1, max: 40, step: 1, v: 4 }],
    curves: [
      { label: "Somme 2x/(2−x)²", f: x => 2 * x / ((2 - x) * (2 - x)) },
      { label: "Somme partielle", f: (x, p) => { let s = 0; for (let n = 0; n <= p.N; n++) s += n * Math.pow(x / 2, n); return s; } }
    ]
  }
},
{
  id: "ex-geometrique", subj: "maths", year: "mp", chap: 12, level: 2, time: "10 min",
  title: "Espérance d'une loi géométrique",
  enonce: R`<p>Soit $X\sim\mathcal G(p)$ avec $p\in\,]0,1[$. Calculer <span data-k="gx">la fonction génératrice</span> $G_X$, puis $E(X)$.</p>`,
  decode: {
    donnees: [R`$X$ est le rang du premier succès dans des épreuves indépendantes de probabilité de succès $p$.`],
    but: R`Obtenir $G_X$ sous forme simple, puis la dériver en $1$.`,
    cles: { gx: R`$G_X(t) = E(t^X) = \sum_k P(X=k)\,t^k$.` }
  },
  steps: [
    { t: "La loi", h: R`<p>$X = k$ : $k-1$ échecs (probabilité $q$ chacun), puis un succès (probabilité $p$).</p>`, b: R`<p>On pose $q = 1-p$. L'événement $(X = k)$ signifie : les $k-1$ premières épreuves sont des échecs, la $k$-ième est un succès. Par indépendance :</p>$$P(X = k) = \underbrace{q\times\dots\times q}_{k-1\text{ fois}}\times p = pq^{k-1},\qquad k\geqslant1.$$`, rappels: ["loi-geometrique"] },
    { t: "Fonction génératrice", h: R`<p>Écris $G_X(t) = \sum_{k\geqslant1}pq^{k-1}t^k$, sors $pt$ et pose $j = k-1$ : il reste une série géométrique de raison $qt$.</p>`, b: R`<p>Par définition :</p>$$G_X(t) = E(t^X) = \sum_{k\geqslant1}P(X = k)\,t^k = \sum_{k\geqslant1}pq^{k-1}t^k.$$<p>On écrit $t^k = t\cdot t^{k-1}$ et on sort $pt$ (qui ne dépend pas de $k$) :</p>$$G_X(t) = pt\sum_{k\geqslant1}q^{k-1}t^{k-1} = pt\sum_{k\geqslant1}(qt)^{k-1}.$$<p>On pose $j = k-1$ ($j$ va de $0$ à $+\infty$) et on reconnaît une série géométrique, qui converge si $|qt|< 1$ :</p><div class="sbox">$$G_X(t) = pt\sum_{j\geqslant0}(qt)^j = \frac{pt}{1-qt}\qquad\text{pour }|t|<\tfrac1q.$$</div><p>Comme $q< 1$, $\frac1q>1$ : la formule est valable en $t = 1$ (et on retrouve $G_X(1) = \frac p{1-q} = 1$).</p>`, rappels: ["fonction-generatrice", "serie-geometrique"] },
    { t: "Dériver G_X", h: R`<p>Dérivée d'un quotient : $\left(\frac uv\right)' = \frac{u'v-uv'}{v^2}$, avec $u = pt$ et $v = 1-qt$.</p>`, b: R`<p>On dérive $G_X(t) = \frac{u}{v}$ avec $u = pt$, $u' = p$, $v = 1-qt$, $v' = -q$ :</p>$$G_X'(t) = \frac{p(1-qt)-pt(-q)}{(1-qt)^2} = \frac{p-pqt+pqt}{(1-qt)^2} = \frac p{(1-qt)^2}.$$<p>Les termes $-pqt$ et $+pqt$ se compensent.</p>` },
    { t: "Espérance", h: R`<p>$E(X) = G_X'(1)$. Rappelle-toi que $1-q = p$.</p>`, b: R`<p>On évalue en $t = 1$, en utilisant $1-q = p$ :</p>$$E(X) = G_X'(1) = \frac p{(1-q)^2} = \frac p{p^2} = \frac1p.$$<div class="sbox">$$E(X) = \frac1p.$$</div><p>Interprétation : si un succès a une chance sur $6$ ($p = \frac16$, un dé), on l'attend en moyenne au $6^{\text e}$ lancer.</p>` }
  ],
  piege: R`La loi géométrique commence à $k=1$. Commencer la somme à $0$ fausse tout.`,
  methode: R`$E(X) = G_X'(1)$ et $V(X) = G_X''(1)+G_X'(1)-G_X'(1)^2$.`,
  viz: {
    type: "seq", title: "La loi de X et son espérance 1/p", n: [1, 20], y: [0, 0.8],
    params: [{ k: "p", label: "Probabilité de succès p", min: 0.05, max: 0.8, step: 0.01, v: 0.3 }],
    series: [{ label: "P(X = k)", style: "bar", f: (k, p) => p.p * Math.pow(1 - p.p, k - 1) }],
    vlines: [{ x: p => 1 / p.p, label: "E(X) = 1/p" }]
  }
},
{
  id: "pb-suite-racine", kind: "probleme", subj: "maths", year: "mpsi", chap: 6, classique: true, level: 3, time: "45 min",
  title: "Une suite définie par une racine",
  enonce: R`<p>On définit $u_0 = 0$ et, pour tout $n$, $u_{n+1} = \sqrt{2+u_n}$.</p><ol><li>Montrer que $0\le u_n\le 2$ pour tout $n$.</li><li>Montrer que $(u_n)$ est croissante.</li><li>En déduire qu'elle converge et déterminer sa limite $\ell$.</li><li>Montrer que $|u_{n+1}-2| \le \frac12|u_n-2|$, puis majorer $|u_n-2|$.</li><li>Pour $\theta\in[0,\frac\pi2]$, vérifier que $\sqrt{2+2\cos\theta} = 2\cos\frac\theta2$. En déduire <span data-k="explicite">une expression explicite</span> de $u_n$.</li></ol>`,
  decode: {
    donnees: [R`Une suite récurrente $u_{n+1} = f(u_n)$ avec $f(x) = \sqrt{2+x}$ et $u_0 = 0$.`],
    but: R`Étudier la convergence, la vitesse de convergence, puis trouver $u_n$ en fonction de $n$.`,
    cles: { explicite: R`Une formule qui donne $u_n$ directement à partir de $n$, sans passer par les termes précédents.` }
  },
  steps: [
    { t: "Q1 · Initialisation", h: R`<p>Récurrence sur $P(n)$ : « $0\leqslant u_n\leqslant2$ ». Commence par $n = 0$.</p>`, b: R`<p>On note $P(n)$ : « $0\leqslant u_n\leqslant2$ ». Pour $n = 0$ : $u_0 = 0$ et $0\leqslant0\leqslant2$. $P(0)$ est vraie.</p>`, rappels: ["recurrence"] },
    { t: "Q1 · Hérédité", h: R`<p>Pars de $0\leqslant u_n\leqslant2$, ajoute $2$, puis applique $\sqrt{\ }$, qui est croissante.</p>`, b: R`<p>On suppose $0\leqslant u_n\leqslant2$. On ajoute $2$ partout :</p>$$2\leqslant2+u_n\leqslant4.$$<p>La racine carrée est croissante sur $[0,+\infty[$, elle conserve les inégalités :</p>$$\sqrt2\leqslant\sqrt{2+u_n}\leqslant\sqrt4,\quad\text{soit}\quad\sqrt2\leqslant u_{n+1}\leqslant2.$$<p>Comme $\sqrt2\geqslant0$ : $0\leqslant u_{n+1}\leqslant2$. Par récurrence, $0\leqslant u_n\leqslant2$ pour tout $n$.</p>` },
    { t: "Q2 · Monotonie", h: R`<p>Étudie le signe de $u_{n+1}-u_n = \sqrt{2+u_n}-u_n$. Multiplie par la quantité conjuguée $\sqrt{2+u_n}+u_n$.</p>`, b: R`<p>On étudie le signe de $u_{n+1}-u_n = \sqrt{2+u_n}-u_n$. Une différence avec une racine se traite avec la quantité conjuguée : on multiplie et divise par $\sqrt{2+u_n}+u_n$ (qui est $>0$ car $\sqrt{2+u_n}\geqslant\sqrt2$). Avec $(a-b)(a+b) = a^2-b^2$ :</p>$$u_{n+1}-u_n = \frac{(\sqrt{2+u_n})^2-u_n^2}{\sqrt{2+u_n}+u_n} = \frac{2+u_n-u_n^2}{\sqrt{2+u_n}+u_n}.$$<p>On factorise le numérateur $-u_n^2+u_n+2$ : ses racines sont $2$ et $-1$ (car $-4+2+2 = 0$ et $-1-1+2 = 0$), donc</p>$$2+u_n-u_n^2 = (2-u_n)(1+u_n).$$<p>Par Q1, $2-u_n\geqslant0$ et $1+u_n\geqslant1>0$. Le numérateur est $\geqslant0$, le dénominateur $>0$ :</p><div class="sbox">$$u_{n+1}-u_n\geqslant0 : (u_n)\text{ est croissante.}$$</div>`, rappels: ["quantite-conjuguee"] },
    { t: "Q3 · Convergence et limite", h: R`<p>Croissante + majorée $\Rightarrow$ convergente. Puis passe à la limite dans $u_{n+1} = \sqrt{2+u_n}$.</p>`, b: R`<p>$(u_n)$ est croissante (Q2) et majorée par $2$ (Q1) : par le théorème de la limite monotone, elle converge vers un réel $\ell$. En passant à la limite dans $0\leqslant u_n\leqslant2$ : $\ell\in[0,2]$.</p><p>Quand $n\to+\infty$, $u_{n+1}\to\ell$ et, comme $x\mapsto\sqrt{2+x}$ est continue, $\sqrt{2+u_n}\to\sqrt{2+\ell}$. Donc</p>$$\ell = \sqrt{2+\ell}.$$<p>On élève au carré : $\ell^2 = 2+\ell$, soit $\ell^2-\ell-2 = 0$. Discriminant $\Delta = 1+8 = 9$, racines $\frac{1\pm3}2$, c'est-à-dire $2$ et $-1$ :</p>$$(\ell-2)(\ell+1) = 0.$$<p>Comme $\ell\geqslant0$, on élimine $-1$ :</p><div class="sbox">$$\lim_{n\to+\infty}u_n = 2.$$</div>`, rappels: ["limite-monotone", "continuite-point-fixe"] },
    { t: "Q4 · L'inégalité de contraction", h: R`<p>$u_{n+1}-2 = \sqrt{2+u_n}-\sqrt4$ : quantité conjuguée avec $\sqrt{2+u_n}+2$, puis minore ce dénominateur.</p>`, b: R`<p>On écrit $2 = \sqrt4$ et on multiplie par la quantité conjuguée $\sqrt{2+u_n}+2$ :</p>$$u_{n+1}-2 = \sqrt{2+u_n}-2 = \frac{(2+u_n)-4}{\sqrt{2+u_n}+2} = \frac{u_n-2}{\sqrt{2+u_n}+2}.$$<p>On passe aux valeurs absolues. Le dénominateur vérifie $\sqrt{2+u_n}+2\geqslant0+2 = 2$, donc $\frac1{\sqrt{2+u_n}+2}\leqslant\frac12$ :</p><div class="sbox">$$|u_{n+1}-2| = \frac{|u_n-2|}{\sqrt{2+u_n}+2}\leqslant\frac12|u_n-2|.$$</div>`, rappels: ["quantite-conjuguee"] },
    { t: "Q4 · Majorer |u_n − 2|", h: R`<p>Applique l'inégalité plusieurs fois de suite : chaque pas divise l'écart par au moins $2$.</p>`, b: R`<p>On applique l'inégalité de proche en proche :</p>$$|u_n-2|\leqslant\frac12|u_{n-1}-2|\leqslant\frac12\cdot\frac12|u_{n-2}-2|\leqslant\dots\leqslant\frac1{2^n}|u_0-2|.$$<p>(Proprement : par récurrence, $|u_n-2|\leqslant\frac{|u_0-2|}{2^n}$ ; si c'est vrai au rang $n$, alors $|u_{n+1}-2|\leqslant\frac12\cdot\frac{|u_0-2|}{2^n} = \frac{|u_0-2|}{2^{n+1}}$.)</p><p>Comme $|u_0-2| = |0-2| = 2$ :</p><div class="sbox">$$|u_n-2|\leqslant\frac2{2^n} = \frac1{2^{n-1}}.$$</div><p>L'écart à la limite est au moins divisé par $2$ à chaque étape.</p>` },
    { t: "Q5 · La formule trigonométrique", h: R`<p>Formule de duplication : $\cos\theta = 2\cos^2\frac\theta2-1$. Que vaut alors $2+2\cos\theta$ ?</p>`, b: R`<p>La formule de duplication $\cos(2a) = 2\cos^2a-1$ avec $a = \frac\theta2$ donne $\cos\theta = 2\cos^2\frac\theta2-1$. Donc</p>$$2+2\cos\theta = 2+2\Big(2\cos^2\frac\theta2-1\Big) = 2+4\cos^2\frac\theta2-2 = 4\cos^2\frac\theta2.$$<p>Ainsi $\sqrt{2+2\cos\theta} = \sqrt{4\cos^2\frac\theta2} = 2\left|\cos\frac\theta2\right|$. Pour $\theta\in[0,\frac\pi2]$, $\frac\theta2\in[0,\frac\pi4]$, où le cosinus est positif. On enlève la valeur absolue :</p><div class="sbox">$$\sqrt{2+2\cos\theta} = 2\cos\frac\theta2.$$</div>`, rappels: ["duplication-cos"] },
    { t: "Q5 · L'expression de u_n", h: R`<p>$u_0 = 0 = 2\cos\frac\pi2$. Devine $u_1$, $u_2$ avec la formule, puis prouve $u_n = 2\cos\frac\pi{2^{n+1}}$ par récurrence.</p>`, b: R`<p>On cherche à écrire $u_n = 2\cos\theta_n$. Au départ, $u_0 = 0 = 2\cos\frac\pi2$, donc $\theta_0 = \frac\pi2$. Si $u_n = 2\cos\theta_n$, la formule précédente donne</p>$$u_{n+1} = \sqrt{2+2\cos\theta_n} = 2\cos\frac{\theta_n}2,$$<p>donc l'angle est divisé par $2$ à chaque étape : $\theta_1 = \frac\pi4$, $\theta_2 = \frac\pi8$, … , $\theta_n = \frac\pi{2^{n+1}}$.</p><p><b>Récurrence</b> : vrai pour $n = 0$. Si $u_n = 2\cos\frac\pi{2^{n+1}}$, comme $\frac\pi{2^{n+1}}\in[0,\frac\pi2]$ on peut appliquer la formule :</p>$$u_{n+1} = \sqrt{2+2\cos\frac\pi{2^{n+1}}} = 2\cos\frac\pi{2^{n+2}}.$$<div class="sbox">$$u_n = 2\cos\frac\pi{2^{n+1}}.$$</div><p>Vérification : $u_1 = 2\cos\frac\pi4 = \sqrt2 = \sqrt{2+0}$ ✓. Et comme $\frac\pi{2^{n+1}}\to0$, $u_n\to2\cos0 = 2$ : on retrouve Q3.</p>` }
  ],
  piege: R`En Q3, écrire « $\ell = \sqrt{2+\ell}$ » sans avoir prouvé la convergence. L'équation du point fixe ne vaut que si la suite converge.`,
  methode: R`Pour une suite $u_{n+1} = f(u_n)$ : encadrer, étudier le signe de $u_{n+1}-u_n$, conclure par la limite monotone, puis identifier la limite par continuité.`,
  viz: {
    type: "seq", title: "La suite monte vers 2, de plus en plus vite", n: [0, 12], y: [0, 2.2],
    series: [{ label: "u_n", style: "bar", f: n => 2 * Math.cos(Math.PI / Math.pow(2, n + 1)) }],
    hlines: [{ y: () => 2, label: "limite 2" }]
  }
},
{
  id: "pb-nilpotentes", kind: "probleme", subj: "maths", year: "mp", chap: 1, classique: true, level: 3, time: "30 min",
  title: "Autour des matrices nilpotentes",
  enonce: R`<p>Soit $N\in\mathcal M_n(\mathbb C)$ <span data-k="nilp">nilpotente</span> : il existe $p\ge1$ tel que $N^p = 0$.</p><ol><li>Montrer que $0$ est la seule valeur propre de $N$.</li><li>En déduire $\chi_N$, puis montrer que $N^n = 0$.</li><li>Montrer que $I_n - N$ est inversible et exprimer son inverse.</li><li>Montrer qu'une matrice nilpotente non nulle n'est pas diagonalisable.</li></ol>`,
  decode: {
    donnees: [R`$N^p = 0$ pour un certain $p$, éventuellement plus grand que $n$.`],
    but: R`Décrire le spectre, le polynôme caractéristique, puis deux conséquences.`,
    cles: { nilp: R`Une puissance de $N$ est la matrice nulle.` }
  },
  steps: [
    { t: "Q1 · Une valeur propre est forcément 0", h: R`<p>Si $NX = \lambda X$, que vaut $N^2X$ ? Puis $N^pX$ ?</p>`, b: R`<p>Soit $\lambda$ une valeur propre et $X\neq0$ avec $NX = \lambda X$. On applique $N$ à nouveau :</p>$$N^2X = N(NX) = N(\lambda X) = \lambda NX = \lambda\cdot\lambda X = \lambda^2X.$$<p>En recommençant (récurrence immédiate) : $N^kX = \lambda^kX$ pour tout $k$. Avec $k = p$ :</p>$$0 = N^pX = \lambda^pX.$$<p>Comme $X\neq0$, on a $\lambda^p = 0$, donc $\lambda = 0$. <b>La seule valeur propre possible est $0$.</b></p>` },
    { t: "Q1 · 0 est bien valeur propre", h: R`<p>$0$ est valeur propre $\iff N$ n'est pas inversible $\iff\det N = 0$. Utilise $\det(N^p) = (\det N)^p$.</p>`, b: R`<p>Il faut encore vérifier que $0$ est vraiment valeur propre, c'est-à-dire que $N$ n'est pas inversible. Le déterminant est multiplicatif :</p>$$(\det N)^p = \det(N^p) = \det(0) = 0,$$<p>donc $\det N = 0$ : $N$ n'est pas inversible, il existe $X\neq0$ avec $NX = 0 = 0\cdot X$.</p><div class="sbox">$$\operatorname{Sp}(N) = \{0\}.$$</div>` },
    { t: "Q2 · Le polynôme caractéristique", h: R`<p>Sur $\mathbb C$, $\chi_N$ se factorise en $\prod(X-\lambda_i)$, où les $\lambda_i$ sont les valeurs propres.</p>`, b: R`<p>$\chi_N$ est unitaire de degré $n$. Sur $\mathbb C$, tout polynôme est scindé :</p>$$\chi_N(X) = (X-\lambda_1)(X-\lambda_2)\cdots(X-\lambda_n),$$<p>où les $\lambda_i$ sont les valeurs propres de $N$ (avec répétitions). Par Q1, elles sont toutes nulles :</p><div class="sbox">$$\chi_N(X) = X\cdot X\cdots X = X^n.$$</div>`, rappels: ["scinde-C"] },
    { t: "Q2 · N^n = 0", h: R`<p>Cayley-Hamilton : $\chi_N(N) = 0$.</p>`, b: R`<p>Le théorème de Cayley-Hamilton dit que toute matrice annule son polynôme caractéristique : $\chi_N(N) = 0$. Avec $\chi_N = X^n$ :</p><div class="sbox">$$N^n = 0.$$</div><p>À retenir : même si l'énoncé donne $N^p = 0$ avec $p$ très grand, on a toujours $N^n = 0$ en taille $n$.</p>`, rappels: ["cayley-hamilton"] },
    { t: "Q3 · Inverser I − N", h: R`<p>Pense à $1-x^p = (1-x)(1+x+\dots+x^{p-1})$. Développe $(I_n-N)(I_n+N+\dots+N^{p-1})$.</p>`, b: R`<p>On s'inspire de la somme géométrique $(1-x)(1+x+\dots+x^{p-1}) = 1-x^p$. Développons :</p>$$(I_n-N)(I_n+N+N^2+\dots+N^{p-1}) = \underbrace{(I_n+N+\dots+N^{p-1})}_{\text{produit par }I_n}-\underbrace{(N+N^2+\dots+N^p)}_{\text{produit par }N}.$$<p>Tous les termes $N,N^2,\dots,N^{p-1}$ apparaissent une fois avec $+$ et une fois avec $-$ : ils se simplifient (somme télescopique). Il reste :</p>$$I_n-N^p = I_n-0 = I_n.$$<p>Une matrice carrée $A$ telle que $AB = I_n$ est inversible d'inverse $B$ :</p><div class="sbox">$$(I_n-N)^{-1} = I_n+N+N^2+\dots+N^{p-1} = \sum_{k=0}^{p-1}N^k.$$</div>` },
    { t: "Q4 · Pas diagonalisable", h: R`<p>Par l'absurde : si $N = PDP^{-1}$, que contient la diagonale de $D$ ?</p>`, b: R`<p>Supposons $N\neq0$ diagonalisable : $N = PDP^{-1}$ avec $D$ diagonale. Les coefficients diagonaux de $D$ sont les valeurs propres de $N$ ; par Q1, ils sont tous nuls. Donc $D = 0$, puis</p>$$N = P\cdot0\cdot P^{-1} = 0,$$<p>ce qui contredit $N\neq0$.</p><div class="sbox"><p style="margin:0;text-align:center">Une matrice nilpotente non nulle n'est pas diagonalisable.</p></div><p>Exemple : $\begin{pmatrix}0&1\\0&0\end{pmatrix}$, dont le carré est nul.</p>` }
  ],
  piege: R`En Q1, oublier de montrer que $0$ est effectivement valeur propre.`,
  methode: R`L'identité $I - N^p = (I-N)(I+N+\dots+N^{p-1})$ est l'analogue matriciel de la somme géométrique.`
}
]);

LEMME.dm([
  { subj: "maths", year: "mpsi", title: "Suite définie par une racine", corrige: "pb-suite-racine",
    body: R`<p>On définit $u_0 = 0$ et $u_{n+1} = \sqrt{2+u_n}$.</p><ol><li>Montrer que $0\le u_n\le 2$ pour tout $n$.</li><li>Montrer que $(u_n)$ est croissante.</li><li>En déduire qu'elle converge et déterminer sa limite $\ell$.</li><li>Montrer que $|u_{n+1}-2| \le \frac12|u_n-2|$, puis majorer $|u_n-2|$.</li><li>Pour $\theta\in[0,\frac\pi2]$, vérifier que $\sqrt{2+2\cos\theta} = 2\cos\frac\theta2$. En déduire une expression explicite de $u_n$.</li></ol>` },
  { subj: "maths", year: "mp", title: "Matrices nilpotentes", corrige: "pb-nilpotentes",
    body: R`<p>Soit $N\in\mathcal M_n(\mathbb C)$ telle que $N^p = 0$ pour un entier $p\ge1$.</p><ol><li>Montrer que $0$ est la seule valeur propre de $N$.</li><li>En déduire $\chi_N$ puis montrer que $N^n = 0$.</li><li>Montrer que $I_n - N$ est inversible et exprimer son inverse.</li><li>Montrer qu'une matrice nilpotente non nulle n'est pas diagonalisable.</li></ol>` }
]);

LEMME.kholles([
  { subj: "maths", year: "mpsi", qs: [R`Démontrer que $\sqrt2$ est irrationnel.`, "Démontrer la formule du binôme de Newton.", "Énoncer et démontrer le théorème de Bézout.", "Démontrer l'inégalité de Cauchy-Schwarz.", "Énoncer et démontrer le théorème du rang.", "Démontrer le théorème de Rolle."] },
  { subj: "maths", year: "mp", qs: ["Montrer que des vecteurs propres associés à des valeurs propres distinctes forment une famille libre.", "Énoncer le lemme d'Abel et en déduire la définition du rayon de convergence.", "Montrer qu'une limite uniforme de fonctions continues est continue.", "Énoncer le théorème spectral.", "Calculer espérance et variance d'une loi de Poisson."] }
]);

/* ---------- Chapitre « Limites et continuité » (MPSI, chap: 7) ---------- */
LEMME.rappels({
  "limite-monotone-fct": { t: "Limite monotone pour les fonctions", b: R`Si $f$ est croissante sur $[a,+\infty[$, alors $f$ admet une limite en $+\infty$ : c'est $\sup f$ si $f$ est majorée, et $+\infty$ sinon.` },
  "passage-limite": { t: "Passage à la limite dans une inégalité", b: R`Si $f(t)\leqslant g(t)$ pour $t$ assez grand et si $f$ et $g$ ont des limites finies $\ell$ et $\ell'$, alors $\ell\leqslant\ell'$. Attention : une inégalité stricte $f< g$ ne donne que $\ell\leqslant\ell'$.` },
  "absurde": { t: "Raisonnement par l'absurde", b: R`Pour montrer une propriété $P$, on suppose que $P$ est fausse et on en déduit une contradiction. Donc $P$ est vraie.` },
  "croissances-comparees": { t: "Croissances comparées", b: R`Pour $\alpha,\beta,\gamma>0$ : $$\lim_{x\to+\infty}\frac{x^\beta}{e^{\gamma x}} = 0,\qquad \lim_{x\to+\infty}\frac{(\ln x)^\alpha}{x^\beta} = 0.$$ L'exponentielle l'emporte sur les puissances, qui l'emportent sur le logarithme.` },
  "formes-indeterminees": { t: "Formes indéterminées", b: R`Les opérations sur les limites ne permettent pas de conclure dans les cas $(+\infty)-(+\infty)$, $0\times\infty$, $\dfrac00$ et $\dfrac\infty\infty$. Il faut alors transformer l'expression : factoriser, utiliser la forme exponentielle, encadrer…` },
  "operations-limites": { t: "Limites et opérations", b: R`Si $f\to\ell$ et $g\to\ell'$, alors $f+g\to\ell+\ell'$ et $fg\to\ell\ell'$. Avec des limites infinies : $(+\infty)\times\ell = +\infty$ si $\ell>0$, et $-\infty$ si $\ell<0$.` },
  "racine-carre": { t: "Racine d'un carré", b: R`Pour tout réel $x$ : $\sqrt{x^2} = |x|$. Donc $\sqrt{x^2} = x$ si $x\geqslant0$, et $\sqrt{x^2} = -x$ si $x<0$.` },
  "composition-limites": { t: "Limite d'une composée", b: R`Si $u(x)\to b$ quand $x\to a$, et si $g(X)\to\ell$ quand $X\to b$, alors $g\big(u(x)\big)\to\ell$ quand $x\to a$. Exemple : si $u(x)\to-\infty$, alors $e^{u(x)}\to0$.` },
  "borne-zero": { t: "Borné fois tend vers zéro", b: R`Si $g$ est bornée au voisinage de $a$ et si $f\to0$ en $a$, alors $fg\to0$ en $a$. Justification : $|f g|\leqslant M|f|$.` },
  "encadrement": { t: "Théorème d'encadrement", b: R`Si $g\leqslant f\leqslant h$ au voisinage de $a$ et si $g$ et $h$ tendent vers le même réel $\ell$, alors $f$ tend vers $\ell$.` },
  "partie-entiere": { t: "Partie entière", b: R`$\lfloor x\rfloor$ est l'unique entier $n$ tel que $n\leqslant x< n+1$. On en déduit l'encadrement utile $x-1<\lfloor x\rfloor\leqslant x$.` },
  "minoration-infini": { t: "Limite infinie par minoration", b: R`Si $g\leqslant f$ au voisinage de $a$ et si $g\to+\infty$ en $a$, alors $f\to+\infty$ en $a$.` }
});

LEMME.exercises([
{
  id: "ex-lim-croissante", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 3, time: "15 min",
  title: "Une fonction strictement croissante n'atteint pas sa limite",
  enonce: R`<p>Soit $f : [0,+\infty[\,\to\mathbb R$ une fonction <span data-k="sc">strictement croissante</span> qui admet <span data-k="lim">une limite finie</span> $\ell\in\mathbb R$ en $+\infty$.</p><p>Montrer que $f(x)<\ell$ pour tout $x\in[0,+\infty[$.</p>`,
  decode: {
    donnees: [R`$f$ est strictement croissante sur $[0,+\infty[$.`, R`$f(x)\to\ell$ quand $x\to+\infty$, avec $\ell$ réel.`],
    but: R`Une inégalité <b>stricte</b> : $f(x)<\ell$ pour tout $x$. Autrement dit, $f$ reste sous $\ell$ et ne la touche jamais.`,
    cles: {
      sc: R`Si $x< y$, alors $f(x)< f(y)$ : l'inégalité est stricte, $f$ n'est jamais constante sur un morceau.`,
      lim: R`$f(x)$ se rapproche autant qu'on veut de $\ell$ quand $x$ devient grand.`,
      large: R`Une inégalité large autorise l'égalité : $f(x)\leqslant\ell$. Ici, il faudra ensuite exclure le cas $f(x)=\ell$.`,
      fixe: R`On choisit un $x$ quelconque et on ne le change plus. C'est la variable $t$ qui va tendre vers $+\infty$.`,
      contradiction: R`Deux affirmations incompatibles : ici $f(b)>\ell$ et $f(b)\leqslant\ell$. L'hypothèse de départ est donc fausse.`
    }
  },
  steps: [
    { t: "Découper le problème", h: R`<p>Une inégalité stricte est difficile à obtenir directement. Sépare : d'abord « $\leqslant$ », puis « $\neq$ ».</p>`, b: R`<p>On veut montrer $f(x)< \ell$ pour tout $x\geqslant0$. Une inégalité stricte se démontre rarement d'un coup. On procède en deux temps :</p><ol><li>montrer l'inégalité <span data-k="large">large</span> $f(x)\leqslant\ell$ ;</li><li>montrer que l'égalité $f(x) = \ell$ est impossible.</li></ol><p>Les deux ensemble donnent $f(x)< \ell$.</p><p><b>Intuition</b> : $f$ est <span data-k="sc">strictement croissante</span> et <span data-k="lim">s'approche de $\ell$</span>. Elle monte toujours, donc si elle touchait $\ell$ en un point, elle le dépasserait juste après, et ne pourrait plus redescendre vers $\ell$.</p>` },
    { t: "L'inégalité large", h: R`<p>Fixe $x$, compare $f(x)$ à $f(t)$ pour $t\geqslant x$, puis fais tendre $t$ vers $+\infty$.</p>`, b: R`<p>Soit $x\geqslant0$ <span data-k="fixe">fixé</span> : il ne bougera plus. Pour tout $t\geqslant x$, comme $f$ est croissante :</p>$$f(x)\leqslant f(t).$$<p>On fait maintenant tendre $t$ vers $+\infty$ dans cette inégalité :</p><ul><li>à gauche, $f(x)$ ne dépend pas de $t$ : c'est une constante, sa limite est $f(x)$ ;</li><li>à droite, $f(t)\to\ell$ par hypothèse.</li></ul><p>Par passage à la limite dans une inégalité large :</p><div class="sbox">$$f(x)\leqslant\ell\quad\text{pour tout }x\geqslant0.$$</div>`, rappels: ["passage-limite", "limite-monotone-fct"] },
    { t: "Pourquoi ce n'est pas fini", h: R`<p>Si $f(x)< f(t)$ pour tout $t>x$, que donne le passage à la limite : $<$ ou $\leqslant$ ?</p>`, b: R`<p>On pourrait penser utiliser la stricte croissance : $f(x)< f(t)$ pour $t>x$. Mais le passage à la limite <b>ne conserve jamais les inégalités strictes</b> : on obtient seulement $f(x)\leqslant\ell$.</p><p>Exemple pour s'en convaincre : $\frac1t>0$ pour tout $t>0$, mais à la limite $0\geqslant0$ seulement, pas $0>0$.</p><p>Il faut donc un argument de plus pour exclure $f(x) = \ell$.</p>`, rappels: ["passage-limite"] },
    { t: "Exclure l'égalité", h: R`<p>Suppose $f(a) = \ell$ et regarde un point $b$ un peu plus loin que $a$.</p>`, b: R`<p>Raisonnons par l'absurde : supposons qu'il existe $a\geqslant0$ avec $f(a) = \ell$.</p><p>Prenons un point plus loin, par exemple $b = a+1$. Comme $b>a$ et $f$ est <b>strictement</b> croissante :</p>$$f(b)>f(a) = \ell.$$<p>Mais l'étape 2, appliquée au point $b$, donne $f(b)\leqslant\ell$. On a à la fois $f(b)>\ell$ et $f(b)\leqslant\ell$ : c'est une <span data-k="contradiction">contradiction</span>. Donc $f$ ne prend jamais la valeur $\ell$.</p>`, rappels: ["absurde"] },
    { t: "Conclusion", h: R`<p>Rassemble : $f(x)\leqslant\ell$ et $f(x)\neq\ell$.</p>`, b: R`<p>Pour tout $x\geqslant0$ : $f(x)\leqslant\ell$ (étape 2) et $f(x)\neq\ell$ (étape 4). Donc</p><div class="sbox">$$f(x)< \ell\quad\text{pour tout }x\geqslant0.$$</div><p><b>Exemple</b> : $f(x) = \arctan x$ est strictement croissante, tend vers $\frac\pi2$, et $\arctan x< \frac\pi2$ pour tout $x$. <b>Contre-exemple</b> si on enlève « strictement » : une fonction constante égale à $\ell$ atteint sa limite.</p>` }
  ],
  piege: R`Passer directement à la limite dans $f(x)< f(t)$ et écrire $f(x)<\ell$. Le passage à la limite transforme toujours une inégalité stricte en inégalité large.`,
  methode: R`Pour une inégalité stricte avec une limite : obtenir d'abord l'inégalité large par passage à la limite, puis exclure le cas d'égalité, souvent par l'absurde.`,
  viz: {
    type: "plot", title: "La courbe se rapproche de ℓ sans jamais la toucher", x: [0, 10], y: [0, 1.2], xlabel: "x",
    params: [{ k: "v", label: "Vitesse d'approche", min: 0.2, max: 2, step: 0.1, v: 0.6 }],
    curves: [{ label: "f(x) = ℓ − e^(−vx), avec ℓ = 1", f: (x, p) => 1 - Math.exp(-p.v * x) }],
    hlines: [{ y: () => 1, label: "ℓ = 1" }]
  }
},
{
  id: "ex-lim-3x2-exp", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "8 min",
  title: "Limite de 3x² − eˣ en +∞",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to+\infty}\big(3x^2-e^x\big)$.</p>`,
  decode: {
    donnees: [R`Deux termes qui tendent tous deux vers $+\infty$ : $3x^2$ et $e^x$.`],
    but: R`Savoir lequel « gagne », puis en déduire la limite.`,
    cles: {
      fi: R`On ne peut pas conclure par les règles de calcul : le résultat dépend de la vitesse à laquelle chaque terme tend vers l'infini.`,
      prep: R`Le terme qui grandit le plus vite. Ici $e^x$, car l'exponentielle l'emporte sur toute puissance de $x$.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Calcule séparément la limite de $3x^2$ et celle de $e^x$.</p>`, b: R`<p>Quand $x\to+\infty$ : $3x^2\to+\infty$ et $e^x\to+\infty$. On doit calculer la limite d'une différence $(+\infty)-(+\infty)$.</p><p>C'est une <span data-k="fi">forme indéterminée</span> : selon les fonctions, une telle différence peut tendre vers n'importe quoi. Par exemple $(x+1)-x\to1$, mais $x^2-x\to+\infty$ et $x-x^2\to-\infty$. Il faut transformer l'expression.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Qui l'emporte ?", h: R`<p>Lequel grandit le plus vite : une puissance de $x$ ou l'exponentielle ?</p>`, b: R`<p>Comparons les tailles pour quelques valeurs :</p><ul><li>$x = 2$ : $3x^2 = 12$, $e^2\approx7{,}4$ ;</li><li>$x = 5$ : $3x^2 = 75$, $e^5\approx148$ ;</li><li>$x = 10$ : $3x^2 = 300$, $e^{10}\approx22\,026$.</li></ul><p>L'exponentielle finit par écraser $3x^2$. C'est le théorème des croissances comparées : $\frac{x^2}{e^x}\to0$. Le <span data-k="prep">terme prépondérant</span> est donc $e^x$.</p>`, rappels: ["croissances-comparees"] },
    { t: "Factoriser", h: R`<p>Mets le terme le plus rapide en facteur : $3x^2-e^x = e^x(\dots)$.</p>`, b: R`<p>On met $e^x$ en facteur. Pour cela, on écrit $3x^2 = e^x\times\frac{3x^2}{e^x} = e^x\times3x^2e^{-x}$ :</p>$$3x^2-e^x = e^x\cdot3x^2e^{-x}-e^x\cdot1 = e^x\big(3x^2e^{-x}-1\big).$$<p>Vérification en redéveloppant : $e^x\cdot3x^2e^{-x} = 3x^2e^0 = 3x^2$ et $e^x\cdot(-1) = -e^x$ ✓.</p>` },
    { t: "Limite de chaque facteur", h: R`<p>$x^2e^{-x} = \frac{x^2}{e^x}$ : croissances comparées.</p>`, b: R`<p><b>La parenthèse</b> : par croissances comparées, $x^2e^{-x} = \frac{x^2}{e^x}\to0$, donc $3x^2e^{-x}\to3\times0 = 0$ et</p>$$3x^2e^{-x}-1\longrightarrow0-1 = -1.$$<p><b>Le facteur $e^x$</b> : $e^x\to+\infty$.</p>`, rappels: ["croissances-comparees"] },
    { t: "Conclusion", h: R`<p>Le produit d'un terme qui tend vers $+\infty$ par un terme qui tend vers $-1$.</p>`, b: R`<p>On a un produit $e^x\times(\dots)$ avec $e^x\to+\infty$ et $(\dots)\to-1< 0$. Un produit « $+\infty$ fois un nombre strictement négatif » tend vers $-\infty$ :</p><div class="sbox">$$\lim_{x\to+\infty}\big(3x^2-e^x\big) = -\infty.$$</div><p>Contrôle numérique : en $x = 10$, $300-22\,026\approx-21\,726$, très négatif ✓.</p>`, rappels: ["operations-limites"] }
  ],
  piege: R`Conclure « $+\infty-\infty = 0$ ». Une forme indéterminée peut donner n'importe quelle limite, ou aucune.`,
  methode: R`Devant $(+\infty)-(+\infty)$, on factorise par le terme qui grandit le plus vite. Il reste un facteur dont la limite se lit directement.`,
  viz: {
    type: "plot", title: "eˣ finit toujours par dépasser 3x²", x: [0, 5.5], y: [0, 120], xlabel: "x",
    curves: [{ label: "eˣ", f: x => Math.exp(x) }, { label: "3x²", f: x => 3 * x * x }],
    vlines: [{ x: () => 3.733, label: "croisement vers x ≈ 3,7" }]
  }
},
{
  id: "ex-lim-racine-quotient", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "10 min",
  title: "Limite d'un quotient avec une racine",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to+\infty}\frac{\sqrt{x^2+x+1}}{x+1}$.</p><p>Que se passe-t-il en $-\infty$ ?</p>`,
  decode: {
    donnees: [R`Le numérateur et le dénominateur tendent vers $+\infty$.`],
    but: R`Lever la forme $\dfrac{\infty}{\infty}$ en $+\infty$, puis refaire l'étude en $-\infty$.`,
    cles: {
      fi: R`$\dfrac{\infty}{\infty}$ : le résultat dépend de la vitesse de croissance du haut et du bas.`,
      prep: R`Dans $x^2+x+1$, c'est $x^2$ qui domine quand $x$ est grand. Dans $x+1$, c'est $x$.`,
      abs: R`$\sqrt{x^2}$ vaut $|x|$, pas $x$. La différence compte dès que $x$ est négatif.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Quelle est la limite du numérateur ? du dénominateur ?</p>`, b: R`<p>Quand $x\to+\infty$ : $x^2+x+1\to+\infty$ donc $\sqrt{x^2+x+1}\to+\infty$, et $x+1\to+\infty$. On a un quotient $\frac{+\infty}{+\infty}$ : c'est une <span data-k="fi">forme indéterminée</span>. Il faut savoir à quelle vitesse le haut et le bas grandissent.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Factoriser sous la racine", h: R`<p>Sous la racine, mets $x^2$ en facteur, puis utilise $\sqrt{ab} = \sqrt a\sqrt b$. Attention : $\sqrt{x^2} = |x|$.</p>`, b: R`<p>Sous la racine, le <span data-k="prep">terme prépondérant</span> est $x^2$ (pour $x = 100$ : $10\,000$ contre $100$ et $1$). On le met en facteur ($x\neq0$) :</p>$$x^2+x+1 = x^2\Big(1+\frac x{x^2}+\frac1{x^2}\Big) = x^2\Big(1+\frac1x+\frac1{x^2}\Big).$$<p>Comme $\sqrt{ab} = \sqrt a\sqrt b$ pour $a,b\geqslant0$, et $\sqrt{x^2} = |x|$ :</p>$$\sqrt{x^2+x+1} = |x|\sqrt{1+\frac1x+\frac1{x^2}}.$$`, rappels: ["racine-carre"] },
    { t: "Factoriser le dénominateur", h: R`<p>Au dénominateur, mets $x$ en facteur.</p>`, b: R`$$x+1 = x\Big(1+\frac1x\Big).$$<p>Le quotient devient :</p>$$\frac{\sqrt{x^2+x+1}}{x+1} = \frac{|x|\sqrt{1+\frac1x+\frac1{x^2}}}{x\big(1+\frac1x\big)} = \frac{|x|}{x}\cdot\frac{\sqrt{1+\frac1x+\frac1{x^2}}}{1+\frac1x}.$$<p>La forme indéterminée a disparu : il reste un facteur $\frac{|x|}x$ (qui vaut $\pm1$) et une fraction dont on connaît la limite.</p>` },
    { t: "En +∞", h: R`<p>En $+\infty$, $x>0$ : que vaut $\frac{|x|}x$ ?</p>`, b: R`<p>Pour $x>0$, $|x| = x$, donc $\frac{|x|}x = 1$.</p><p>Quand $x\to+\infty$, $\frac1x\to0$ et $\frac1{x^2}\to0$. Donc $\sqrt{1+\frac1x+\frac1{x^2}}\to\sqrt1 = 1$ et $1+\frac1x\to1$ :</p><div class="sbox">$$\lim_{x\to+\infty}\frac{\sqrt{x^2+x+1}}{x+1} = 1\times\frac11 = 1.$$</div><p>Contrôle : $x = 100$ donne $\frac{\sqrt{10\,101}}{101}\approx\frac{100{,}5}{101}\approx0{,}995$ ✓.</p>`, rappels: ["operations-limites"] },
    { t: "En −∞", h: R`<p>En $-\infty$, $x< 0$ : que vaut $|x|$, donc $\frac{|x|}x$ ?</p>`, b: R`<p>Pour $x< 0$, <span data-k="abs">$|x| = -x$</span>, donc $\frac{|x|}x = \frac{-x}x = -1$. La fraction tend toujours vers $1$ (les $\frac1x$, $\frac1{x^2}$ tendent vers $0$ aussi en $-\infty$) :</p><div class="sbox">$$\lim_{x\to-\infty}\frac{\sqrt{x^2+x+1}}{x+1} = -1\times1 = -1.$$</div><p>C'est cohérent avec les signes : le numérateur (une racine) est toujours positif, le dénominateur $x+1$ est négatif pour $x< -1$. Le quotient est donc négatif. Contrôle : $x = -100$ donne $\frac{\sqrt{9\,901}}{-99}\approx\frac{99{,}5}{-99}\approx-1{,}005$ ✓.</p>`, rappels: ["racine-carre"] }
  ],
  piege: R`Écrire $\sqrt{x^2} = x$ : c'est faux pour $x<0$, et on trouverait à tort la limite $1$ en $-\infty$.`,
  methode: R`Pour un quotient infini sur infini, factorise le terme prépondérant en haut et en bas. Sous une racine, $\sqrt{x^2} = |x|$.`,
  viz: {
    type: "plot", title: "Limite 1 à droite, −1 à gauche", x: [-30, 30], y: [-3, 3], xlabel: "x",
    curves: [{ label: "√(x²+x+1) / (x+1)", f: x => Math.abs(x + 1) < 0.05 ? NaN : Math.sqrt(x * x + x + 1) / (x + 1) }],
    hlines: [{ y: () => 1, label: "1" }, { y: () => -1, label: "−1" }]
  }
},
{
  id: "ex-lim-x-exp-racine", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "10 min",
  title: "Limite de x·e^(−√x) en +∞",
  tt: R`Limite de $x\,e^{-\sqrt{x}}$ en $+\infty$`,
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to+\infty}x\,e^{-\sqrt x}$.</p>`,
  decode: {
    donnees: [R`$x\to+\infty$ et $e^{-\sqrt x}\to0$.`],
    but: R`Savoir qui l'emporte entre $x$, qui grandit, et $e^{-\sqrt x}$, qui s'écrase vers $0$.`,
    cles: {
      fi: R`$(+\infty)\times0$ : on ne peut pas conclure sans savoir lequel des deux facteurs va « plus vite ».`,
      expo: R`Pour $x>0$, $x = e^{\ln x}$. Écrire tout le produit comme une seule exponentielle permet de ramener le produit à une somme dans l'exposant.`,
      prep: R`Entre $\ln x$ et $\sqrt x$, c'est $\sqrt x$ qui grandit le plus vite.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>$x\to+\infty$ et $e^{-\sqrt x}\to\,?$</p>`, b: R`<p>Quand $x\to+\infty$ : $\sqrt x\to+\infty$, donc $-\sqrt x\to-\infty$ et $e^{-\sqrt x}\to0$. On a un produit « $(+\infty)\times0$ » : c'est une <span data-k="fi">forme indéterminée</span>. Tout dépend de qui va le plus vite : $x$ qui grandit, ou $e^{-\sqrt x}$ qui s'écrase.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Tout passer en exponentielle", h: R`<p>Écris $x = e^{\ln x}$ pour tout regrouper en une seule exponentielle.</p>`, b: R`<p>Pour $x>0$, on peut écrire <span data-k="expo">$x = e^{\ln x}$</span>. Avec la règle $e^ae^b = e^{a+b}$ :</p>$$x\,e^{-\sqrt x} = e^{\ln x}\,e^{-\sqrt x} = e^{\ln x-\sqrt x}.$$<p>Le produit est devenu une seule exponentielle : il suffit de trouver la limite de l'exposant $\ln x-\sqrt x$.</p>` },
    { t: "L'exposant", h: R`<p>Dans $\ln x-\sqrt x$, mets $\sqrt x$ en facteur.</p>`, b: R`<p>$\ln x-\sqrt x$ est encore une forme $(+\infty)-(+\infty)$. Qui gagne ? Pour $x = 10\,000$ : $\ln x\approx9{,}2$ et $\sqrt x = 100$. Le <span data-k="prep">terme prépondérant</span> est $\sqrt x$, qu'on factorise :</p>$$\ln x-\sqrt x = \sqrt x\Big(\frac{\ln x}{\sqrt x}-1\Big).$$<p>Par croissances comparées ($\ln x$ est négligeable devant toute puissance positive de $x$, ici $x^{1/2}$) : $\frac{\ln x}{\sqrt x}\to0$. Donc la parenthèse tend vers $-1$, et</p>$$\ln x-\sqrt x = \underbrace{\sqrt x}_{\to+\infty}\times\underbrace{\Big(\frac{\ln x}{\sqrt x}-1\Big)}_{\to-1}\longrightarrow-\infty.$$`, rappels: ["croissances-comparees", "operations-limites"] },
    { t: "Conclusion", h: R`<p>Si l'exposant tend vers $-\infty$, vers quoi tend l'exponentielle ?</p>`, b: R`<p>L'exposant $X = \ln x-\sqrt x$ tend vers $-\infty$, et $e^X\to0$ quand $X\to-\infty$. Par composition des limites :</p><div class="sbox">$$\lim_{x\to+\infty}x\,e^{-\sqrt x} = 0.$$</div><p>Contrôle : $x = 400$ donne $400\,e^{-20}\approx400\times2\times10^{-9}\approx8\times10^{-7}$ ✓.</p>`, rappels: ["composition-limites"] },
    { t: "Une autre méthode", h: R`<p>Pose $X = \sqrt x$ : alors $x = X^2$.</p>`, b: R`<p>On pose $X = \sqrt x$, qui tend vers $+\infty$ quand $x\to+\infty$. Alors $x = X^2$ et</p>$$x\,e^{-\sqrt x} = X^2e^{-X} = \frac{X^2}{e^X}.$$<p>Par croissances comparées, $\frac{X^2}{e^X}\to0$ quand $X\to+\infty$. Par composition, on retrouve la limite $0$. Cette méthode est plus rapide : un bon changement de variable ramène à une croissance comparée connue.</p>`, rappels: ["croissances-comparees", "composition-limites"] }
  ],
  piege: R`Dire « $e^{-\sqrt x}\to0$ donc le produit tend vers $0$ » sans justification : c'est une forme indéterminée, il faut montrer que l'exponentielle l'emporte.`,
  methode: R`Pour un produit avec une exponentielle, tout écrire sous la forme $e^{(\dots)}$ et étudier l'exposant. Ou bien faire un changement de variable qui fait apparaître une croissance comparée connue.`,
  viz: {
    type: "plot", title: "Le produit monte un peu, puis retombe vers 0", x: [0, 100], y: [0, 0.6], xlabel: "x",
    curves: [{ label: "x·e^(−√x)", f: x => x * Math.exp(-Math.sqrt(x)) }],
    vlines: [{ x: () => 4, label: "maximum en x = 4" }]
  }
},
{
  id: "ex-lim-cos-exp", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "8 min",
  title: "Limite de x·cos(eˣ) / (x² + 1) en +∞",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to+\infty}\frac{x\cos\left(e^x\right)}{x^2+1}$.</p>`,
  decode: {
    donnees: [R`Un cosinus, qui oscille entre $-1$ et $1$.`, R`Une fraction $\dfrac{x}{x^2+1}$.`],
    but: R`Trouver la limite, alors que $\cos(e^x)$ n'en a pas.`,
    cles: {
      osc: R`$e^x\to+\infty$, donc $\cos(e^x)$ continue d'osciller entre $-1$ et $1$ sans jamais se stabiliser : il n'a pas de limite.`,
      bornee: R`Il existe $M$ tel que $|g(x)|\leqslant M$. Ici, $|\cos(e^x)|\leqslant1$.`
    }
  },
  steps: [
    { t: "Le problème", h: R`<p>$\cos(e^x)$ a-t-il une limite ? Est-il borné ?</p>`, b: R`<p>Quand $x\to+\infty$, $e^x\to+\infty$, et $\cos(e^x)$ prend sans arrêt toutes les valeurs entre $-1$ et $1$ : il <span data-k="osc">n'a pas de limite</span>. On ne peut donc pas utiliser « limite d'un produit = produit des limites ».</p><p>Mais on sait une chose : $\cos(e^x)$ est <span data-k="bornee">borné</span>, $|\cos(e^x)|\leqslant1$. C'est tout ce dont on aura besoin.</p>` },
    { t: "Séparer les deux morceaux", h: R`<p>Sépare le quotient en (fraction sans cosinus) $\times$ (cosinus).</p>`, b: R`$$\frac{x\cos(e^x)}{x^2+1} = \underbrace{\frac{x}{x^2+1}}_{\text{a une limite}}\times\underbrace{\cos(e^x)}_{\text{borné}}.$$<p>Si le premier facteur tend vers $0$, le produit sera « petit fois borné », donc petit.</p>` },
    { t: "La fraction tend vers 0", h: R`<p>Dans $\frac x{x^2+1}$, mets $x^2$ en facteur au dénominateur.</p>`, b: R`<p>C'est une forme $\frac\infty\infty$. On factorise le terme prépondérant du dénominateur, $x^2$ :</p>$$\frac{x}{x^2+1} = \frac{x}{x^2\big(1+\frac1{x^2}\big)} = \frac1x\cdot\frac1{1+\frac1{x^2}}.$$<p>$\frac1x\to0$ et $\frac1{1+1/x^2}\to\frac11 = 1$, donc la fraction tend vers $0\times1 = 0$.</p>`, rappels: ["operations-limites"] },
    { t: "Justifier par un encadrement", h: R`<p>Majore la valeur absolue en utilisant $|\cos|\leqslant1$.</p>`, b: R`<p>Pour $x>0$ (donc $\frac x{x^2+1}>0$), avec $|\cos(e^x)|\leqslant1$ :</p>$$\left|\frac{x\cos(e^x)}{x^2+1}\right| = \frac{x}{x^2+1}\,|\cos(e^x)|\leqslant\frac{x}{x^2+1}.$$<p>Autrement dit :</p>$$-\frac{x}{x^2+1}\leqslant\frac{x\cos(e^x)}{x^2+1}\leqslant\frac{x}{x^2+1}.$$<p>Les deux bornes tendent vers $0$ (étape 3).</p>`, rappels: ["borne-zero", "encadrement"] },
    { t: "Conclusion", h: R`<p>Théorème d'encadrement.</p>`, b: R`<p>Par le théorème d'encadrement :</p><div class="sbox">$$\lim_{x\to+\infty}\frac{x\cos\left(e^x\right)}{x^2+1} = 0.$$</div><p>À retenir : on n'a jamais eu besoin de la limite de $\cos(e^x)$ (qui n'existe pas), seulement du fait qu'il est borné.</p>` }
  ],
  piege: R`Chercher la limite de $\cos(e^x)$ : elle n'existe pas. Il suffit qu'il soit borné.`,
  methode: R`Une fonction bornée multipliée par une fonction qui tend vers $0$ tend vers $0$. On le justifie par $|fg|\leqslant M|f|$.`,
  viz: {
    type: "plot", title: "L'oscillation est coincée entre deux courbes qui tendent vers 0", x: [0, 6], y: [-0.6, 0.6], xlabel: "x",
    curves: [
      { label: "x·cos(eˣ) / (x² + 1)", f: x => x * Math.cos(Math.exp(x)) / (x * x + 1) },
      { label: "x / (x² + 1)", f: x => x / (x * x + 1) },
      { label: "− x / (x² + 1)", f: x => -x / (x * x + 1) }
    ]
  }
},
{
  id: "ex-lim-partie-entiere", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "8 min",
  title: "Limite de ⌊x⌋ / x en +∞",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to+\infty}\frac1x\lfloor x\rfloor$, où $\lfloor x\rfloor$ désigne <span data-k="pe">la partie entière</span> de $x$.</p>`,
  decode: {
    donnees: [R`$\lfloor x\rfloor\to+\infty$ et $\frac1x\to0$.`],
    but: R`Lever la forme $0\times(+\infty)$.`,
    cles: {
      pe: R`Le plus grand entier inférieur ou égal à $x$. Par exemple $\lfloor 3{,}7\rfloor = 3$ et $\lfloor 5\rfloor = 5$.`,
      fi: R`$0\times(+\infty)$ : on ne peut pas conclure par les règles de calcul.`,
      gendarmes: R`Si $f$ est coincée entre deux fonctions qui ont la même limite, elle a aussi cette limite.`
    }
  },
  steps: [
    { t: "Le problème", h: R`<p>$\frac1x\to\,?$ et $\lfloor x\rfloor\to\,?$</p>`, b: R`<p>Quand $x\to+\infty$ : $\frac1x\to0$ et $\lfloor x\rfloor\to+\infty$. Le produit $\frac1x\lfloor x\rfloor$ est une <span data-k="fi">forme indéterminée</span> $0\times(+\infty)$.</p><p>De plus, la <span data-k="pe">partie entière</span> n'a pas de formule algébrique : on ne peut pas la factoriser. L'outil adapté est l'encadrement.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Encadrer la partie entière", h: R`<p>Par définition, $\lfloor x\rfloor\leqslant x< \lfloor x\rfloor+1$.</p>`, b: R`<p>Par définition, $\lfloor x\rfloor$ est l'entier tel que $\lfloor x\rfloor\leqslant x< \lfloor x\rfloor+1$. De l'inégalité de droite, en retranchant $1$ : $x-1< \lfloor x\rfloor$. Donc</p>$$x-1< \lfloor x\rfloor\leqslant x.$$<p>Exemple : $x = 3{,}7$ donne $2{,}7< 3\leqslant3{,}7$ ✓.</p>`, rappels: ["partie-entiere"] },
    { t: "Diviser par x", h: R`<p>Divise l'encadrement par $x>0$.</p>`, b: R`<p>Comme $x\to+\infty$, on peut supposer $x>0$. Diviser par un nombre positif ne change pas le sens des inégalités :</p>$$\frac{x-1}x< \frac{\lfloor x\rfloor}x\leqslant\frac xx,\quad\text{soit}\quad1-\frac1x< \frac{\lfloor x\rfloor}x\leqslant1.$$` },
    { t: "Conclure par encadrement", h: R`<p>Les deux bornes ont-elles la même limite ?</p>`, b: R`<p>À gauche, $1-\frac1x\to1-0 = 1$. À droite, la constante $1$. L'expression est coincée entre deux fonctions qui tendent vers $1$. Par le <span data-k="gendarmes">théorème d'encadrement</span> :</p><div class="sbox">$$\lim_{x\to+\infty}\frac{\lfloor x\rfloor}{x} = 1.$$</div><p>Contrôle : $x = 1000{,}5$ donne $\frac{1000}{1000{,}5}\approx0{,}9995$ ✓.</p>`, rappels: ["encadrement"] }
  ],
  piege: R`Diviser l'encadrement par $x$ sans vérifier que $x>0$. Ici c'est le cas, car $x\to+\infty$.`,
  methode: R`Avec une partie entière, utilise toujours l'encadrement $x-1<\lfloor x\rfloor\leqslant x$, puis le théorème d'encadrement.`,
  viz: {
    type: "plot", title: "⌊x⌋/x fait des dents de scie qui se resserrent vers 1", x: [0.5, 20], y: [0, 1.2], xlabel: "x",
    curves: [{ label: "⌊x⌋ / x", f: x => Math.floor(x) / x }, { label: "1 − 1/x", f: x => 1 - 1 / x }],
    hlines: [{ y: () => 1, label: "1" }]
  }
},
{
  id: "ex-lim-x2-sin", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "8 min",
  title: "Limite de x² + x·sin x en +∞",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to+\infty}\big(x^2+x\sin x\big)$.</p>`,
  decode: {
    donnees: [R`$x^2\to+\infty$.`, R`$x\sin x$ oscille de plus en plus fort, sans limite.`],
    but: R`Montrer que la somme tend tout de même vers $+\infty$.`,
    cles: {
      sinus: R`$\sin x$ prend toutes les valeurs entre $-1$ et $1$ sur chaque intervalle de longueur $2\pi$ : il n'a pas de limite en $+\infty$.`,
      minorer: R`Trouver une fonction plus petite que la nôtre, mais assez simple pour connaître sa limite.`
    }
  },
  steps: [
    { t: "Le problème", h: R`<p>Peut-on additionner les limites ici ? $x\sin x$ a-t-il une limite ?</p>`, b: R`<p>$x^2\to+\infty$, mais <span data-k="sinus">$\sin x$ oscille entre $-1$ et $1$ sans limite</span>, et $x\sin x$ oscille entre $-x$ et $x$, de plus en plus fort. On ne peut pas additionner des limites qui n'existent pas.</p><p>Idée : $x^2$ grandit bien plus vite que $|x\sin x|\leqslant x$. On va <span data-k="minorer">minorer</span> l'expression par quelque chose de simple qui tend vers $+\infty$.</p>` },
    { t: "Minorer le sinus", h: R`<p>Le sinus est toujours $\geqslant-1$. Multiplie par $x\geqslant0$.</p>`, b: R`<p>Pour tout réel $x$, $\sin x\geqslant-1$. Pour $x\geqslant0$, multiplier par $x$ conserve le sens de l'inégalité :</p>$$x\sin x\geqslant-x.$$<p>C'est le pire cas : quand $\sin x = -1$, le terme $x\sin x$ enlève exactement $x$.</p>` },
    { t: "Minorer l'expression", h: R`<p>Ajoute $x^2$ des deux côtés.</p>`, b: R`<p>On ajoute $x^2$ aux deux membres :</p>$$x^2+x\sin x\geqslant x^2-x = x(x-1).$$` },
    { t: "Le minorant tend vers +∞", h: R`<p>$x(x-1)$ est un produit de deux termes qui tendent vers $+\infty$.</p>`, b: R`<p>$x\to+\infty$ et $x-1\to+\infty$, donc leur produit $x(x-1)\to+\infty$. (Ici, pas de forme indéterminée : « $+\infty$ fois $+\infty$ » vaut $+\infty$.)</p>`, rappels: ["operations-limites"] },
    { t: "Conclusion", h: R`<p>Si $f\geqslant g$ et $g\to+\infty$, alors $f\to\,?$</p>`, b: R`<p>L'expression est toujours au-dessus de $x(x-1)$, qui tend vers $+\infty$. Par le théorème de minoration :</p><div class="sbox">$$\lim_{x\to+\infty}\big(x^2+x\sin x\big) = +\infty.$$</div><p>Contrôle : en $x = \frac{3\pi}2+20\pi\approx67{,}5$ (où $\sin x = -1$), on a $67{,}5^2-67{,}5\approx4\,489$, déjà très grand.</p>`, rappels: ["minoration-infini"] }
  ],
  piege: R`Multiplier $\sin x\geqslant-1$ par $x$ sans préciser $x\geqslant0$ : pour $x<0$, l'inégalité changerait de sens.`,
  methode: R`Pour montrer qu'une limite vaut $+\infty$ quand un terme oscille, minore l'expression par une fonction simple qui tend vers $+\infty$.`,
  viz: {
    type: "plot", title: "La courbe reste au-dessus de x² − x, qui tend vers +∞", x: [0, 8], y: [-2, 70], xlabel: "x",
    curves: [{ label: "x² + x·sin x", f: x => x * x + x * Math.sin(x) }, { label: "x² − x", f: x => x * x - x }]
  }
}
]);

/* ---------- Limites et continuité : exercices d'apprentissage et d'entraînement (MPSI, chap: 7) ---------- */
LEMME.rappels({
  "taux-accroissement": { t: "Dérivée et taux d'accroissement", b: R`Si $f$ est dérivable en $a$ : $$\lim_{x\to a}\frac{f(x)-f(a)}{x-a} = f'(a).$$ Reconnaître un taux d'accroissement permet de calculer certaines limites de la forme $\frac00$.` },
  "translation": { t: "Se ramener en 0", b: R`Pour étudier une limite en $a\neq0$, on pose $x = a+h$ : quand $x\to a$, on a $h\to0$. C'est une composition de limites.` },
  "forme-exp": { t: "Puissance réelle", b: R`Pour $a>0$ et $b$ réel : $a^b = e^{b\ln a}$. Pour étudier une puissance où l'exposant varie, on passe toujours par cette forme.` },
  "continuite-operations": { t: "Opérations sur les fonctions continues", b: R`Sommes, produits, quotients (dénominateur non nul) et composées de fonctions continues sont continues. Les fonctions usuelles sont continues sur leur domaine. $x\mapsto|x|$ est continue sur $\mathbb R$.` },
  "continuite-droite-gauche": { t: "Continuité à gauche et à droite", b: R`En un point $a$ intérieur à $I$ : $f$ est continue en $a$ si et seulement si $\lim_{x\to a^-}f(x) = f(a)$ et $\lim_{x\to a^+}f(x) = f(a)$.` },
  "tvi": { t: "Théorème des valeurs intermédiaires", b: R`Si $f$ est continue sur un intervalle $I$ et si $a,b\in I$, alors $f$ prend toutes les valeurs comprises entre $f(a)$ et $f(b)$. En particulier, si $f(a)$ et $f(b)$ sont de signes opposés, $f$ s'annule entre $a$ et $b$.` },
  "image-intervalle": { t: "Image d'un intervalle", b: R`L'image d'un intervalle par une fonction continue est un intervalle.` },
  "bornes-atteintes": { t: "Théorème des bornes atteintes", b: R`Une fonction continue sur un segment $[a,b]$ est bornée et atteint son minimum et son maximum. L'image d'un segment est un segment.` },
  "injective-monotone": { t: "Continue et injective", b: R`Une fonction continue et injective sur un intervalle est strictement monotone.` },
  "sequentielle": { t: "Caractérisation séquentielle", b: R`$f\to\ell$ en $a$ si et seulement si, pour toute suite $(x_n)$ d'éléments de $I$ qui tend vers $a$, $f(x_n)\to\ell$. Pour montrer qu'il n'y a pas de limite, il suffit de deux suites tendant vers $a$ dont les images ont des limites différentes.` },
  "unicite-limite": { t: "Unicité de la limite", b: R`Une suite ou une fonction a au plus une limite. Si une même suite tend vers $\ell$ et vers $\ell'$, alors $\ell = \ell'$.` },
  "densite": { t: "Densité de ℚ et des irrationnels", b: R`Tout réel est limite d'une suite de rationnels, par exemple $\frac{\lfloor nx\rfloor}{n}\to x$, et aussi limite d'une suite d'irrationnels, par exemple $\frac{\lfloor nx\rfloor}{n}+\frac{\sqrt2}{n}$.` },
  "monotone-encadrement": { t: "Limites d'une fonction monotone en un point", b: R`Si $f$ est croissante sur un intervalle ouvert contenant $a$, elle a une limite à gauche et une limite à droite en $a$, et $$\lim_{x\to a^-}f(x)\leqslant f(a)\leqslant\lim_{x\to a^+}f(x).$$ Les inégalités s'inversent si $f$ est décroissante.` },
  "def-limite": { t: "Définition quantifiée d'une limite infinie", b: R`$|f(x)|\to+\infty$ quand $x\to+\infty$ signifie : $\forall A\in\mathbb R,\ \exists M\in\mathbb R,\ \forall x\geqslant M,\ |f(x)|\geqslant A$. On peut remplacer les inégalités larges par des strictes.` },
  "def-limite-finie": { t: "Définition quantifiée d'une limite finie en +∞", b: R`$f(x)\to\ell$ quand $x\to+\infty$ signifie : $\forall\varepsilon>0,\ \exists A,\ \forall x\geqslant A,\ |f(x)-\ell|\leqslant\varepsilon$.` },
  "telescopage": { t: "Somme télescopique", b: R`$\displaystyle\sum_{k=0}^{n-1}\big(u_{k+1}-u_k\big) = u_n-u_0$ : tous les termes intermédiaires se simplifient.` },
  "inegalite-triangulaire": { t: "Inégalité triangulaire", b: R`$|a+b|\leqslant|a|+|b|$, et plus généralement $\left|\sum a_k\right|\leqslant\sum|a_k|$.` },
  "periodique": { t: "Fonction périodique", b: R`$f$ est $T$-périodique si $f(x+T) = f(x)$ pour tout $x$. Alors $f(x+nT) = f(x)$ pour tout entier $n\in\mathbb Z$, et $f$ prend sur $[0,T]$ toutes les valeurs qu'elle prend sur $\mathbb R$.` },
  "rec-lineaire-2": { t: "Suites récurrentes linéaires d'ordre 2", b: R`Pour $u_{n+2} = au_{n+1}+bu_n$, on résout $r^2 = ar+b$. Si cette équation a une racine double $r$, alors $u_n = (\lambda+\mu n)r^n$.` },
  "bijection-continue": { t: "Bijection continue", b: R`Une fonction continue strictement monotone sur un intervalle $I$ réalise une bijection de $I$ sur l'intervalle $f(I)$.` },
  "lipschitz": { t: "Fonction lipschitzienne", b: R`$f$ est $k$-lipschitzienne si $|f(x)-f(y)|\leqslant k|x-y|$ pour tous $x,y$. Une fonction lipschitzienne est continue.` }
});

LEMME.exercises([
{
  id: "ex-lim-inv-ln", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "8 min",
  title: "Limite de 1/x + ln x en 0⁺",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to0^+}\left(\frac1x+\ln x\right)$.</p>`,
  decode: {
    donnees: [R`Quand $x\to0^+$ : $\frac1x\to+\infty$ et $\ln x\to-\infty$.`],
    but: R`Savoir lequel des deux termes l'emporte.`,
    cles: {
      fi: R`$(+\infty)+(-\infty)$ : le résultat dépend de la vitesse de chaque terme.`,
      prep: R`Près de $0$, $\frac1x$ explose beaucoup plus vite que $\ln x$ ne descend.`,
      xlnx: R`Croissance comparée en $0$ : $x\ln x\to0$. Le facteur $x$ « écrase » le logarithme.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Limites de $\frac1x$ et de $\ln x$ quand $x\to0^+$ ?</p>`, b: R`<p>Quand $x\to0^+$ : $\frac1x\to+\infty$ et $\ln x\to-\infty$. On additionne $+\infty$ et $-\infty$ : c'est une <span data-k="fi">forme indéterminée</span>.</p><p>Valeurs : pour $x = 0{,}01$, $\frac1x = 100$ et $\ln x\approx-4{,}6$. On devine que $\frac1x$ l'emporte.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Factoriser le terme dominant", h: R`<p>Le terme le plus « fort » est $\frac1x$ : mets-le en facteur.</p>`, b: R`<p>Le <span data-k="prep">terme prépondérant</span> est $\frac1x$. On le met en facteur, en écrivant $\ln x = \frac1x\times x\ln x$ :</p>$$\frac1x+\ln x = \frac1x\big(1+x\ln x\big).$$<p>Vérification en développant : $\frac1x\cdot1+\frac1x\cdot x\ln x = \frac1x+\ln x$ ✓.</p>` },
    { t: "Limite de la parenthèse", h: R`<p>Croissances comparées en $0$ : $x\ln x\to\,?$</p>`, b: R`<p>Par croissances comparées en $0^+$, <span data-k="xlnx">$x\ln x\to0$</span> : le $x$ qui tend vers $0$ l'emporte sur le $\ln x$ qui tend vers $-\infty$. (Pour $x = 0{,}01$ : $0{,}01\times(-4{,}6) = -0{,}046$.) Donc</p>$$1+x\ln x\longrightarrow1.$$`, rappels: ["croissances-comparees"] },
    { t: "Conclusion", h: R`<p>$(+\infty)\times1$.</p>`, b: R`<p>$\frac1x\to+\infty$ et $1+x\ln x\to1>0$ : le produit tend vers $+\infty$.</p><div class="sbox">$$\lim_{x\to0^+}\left(\frac1x+\ln x\right) = +\infty.$$</div>`, rappels: ["operations-limites"] }
  ],
  piege: R`Croire que $\ln x\to-\infty$ « compense » $\frac1x$. Le logarithme tend vers l'infini bien plus lentement que $\frac1x$.`,
  methode: R`Face à $(+\infty)+(-\infty)$, factorise le terme qui va le plus vite à l'infini.`,
  viz: { type: "plot", title: "La courbe monte vers +∞ quand x approche 0", x: [0.01, 3], y: [-1, 12], xlabel: "x", curves: [{ label: "1/x + ln x", f: x => 1 / x + Math.log(x) }, { label: "ln x", f: x => Math.log(x) }] }
},
{
  id: "ex-lim-x-puiss-racine", noNotions: ["base"], subj: "maths", year: "mpsi", chap: 7, level: 3, time: "8 min",
  title: "Limite de x^√x en 0⁺",
  tt: R`Limite de $x^{\sqrt{x}}$ en $0^+$`,
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to0^+}x^{\sqrt x}$.</p>`,
  decode: {
    donnees: [R`La base $x$ tend vers $0$ et l'exposant $\sqrt x$ tend aussi vers $0$.`],
    but: R`Lever la forme $0^0$.`,
    cles: {
      fi: R`$0^0$ est indéterminé : une base qui tend vers $0$ tire vers $0$, un exposant qui tend vers $0$ tire vers $1$.`,
      expo: R`$a^b = e^{b\ln a}$ pour $a>0$. On transforme la puissance en exponentielle d'un produit.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Que tendent la base $x$ et l'exposant $\sqrt x$ ?</p>`, b: R`<p>Quand $x\to0^+$, la base $x\to0$ et l'exposant $\sqrt x\to0$. On a « $0^0$ », une <span data-k="fi">forme indéterminée</span> : une base qui tend vers $0$ tire vers $0$, un exposant qui tend vers $0$ tire vers $1$. Qui gagne ?</p>`, rappels: ["formes-indeterminees"] },
    { t: "Passer en exponentielle", h: R`<p>Une puissance réelle se définit par $a^b = e^{b\ln a}$ pour $a>0$.</p>`, b: R`<p>Quand l'exposant n'est pas un entier, la puissance est définie par l'exponentielle : pour $a>0$, <span data-k="expo">$a^b = e^{b\ln a}$</span>. Avec $a = x>0$ et $b = \sqrt x$ :</p>$$x^{\sqrt x} = e^{\sqrt x\,\ln x}.$$<p>Il suffit d'étudier l'exposant $\sqrt x\ln x$.</p>`, rappels: ["forme-exp"] },
    { t: "Limite de l'exposant", h: R`<p>$\sqrt x\ln x = x^{1/2}\ln x$ : croissances comparées en $0^+$.</p>`, b: R`<p>$\sqrt x\ln x = x^{1/2}\ln x$ est de la forme $x^\beta\ln x$ avec $\beta = \frac12>0$. Par croissances comparées en $0^+$, $x^\beta\ln x\to0$ pour tout $\beta>0$ : la puissance qui tend vers $0$ l'emporte sur le logarithme.</p><p>Valeurs : $x = 10^{-2}$ : $0{,}1\times(-4{,}6) = -0{,}46$ ; $x = 10^{-6}$ : $10^{-3}\times(-13{,}8)\approx-0{,}014$. Ça tend bien vers $0$, lentement.</p>$$\sqrt x\ln x\xrightarrow[x\to0^+]{}0.$$`, rappels: ["croissances-comparees"] },
    { t: "Conclusion", h: R`<p>L'exponentielle est continue en $0$.</p>`, b: R`<p>L'exposant tend vers $0$ et l'exponentielle est continue en $0$, avec $e^0 = 1$. Par composition :</p><div class="sbox">$$\lim_{x\to0^+}x^{\sqrt x} = e^0 = 1.$$</div><p>Contrôle : $(10^{-6})^{10^{-3}} = e^{-0{,}0138}\approx0{,}986$ ✓.</p>`, rappels: ["composition-limites"] }
  ],
  piege: R`Dire « $0$ puissance quelque chose, ça fait $0$ » : ici l'exposant tend aussi vers $0$, et c'est lui qui gagne.`,
  methode: R`Dès que l'exposant dépend de $x$, écris $a^b = e^{b\ln a}$ et étudie l'exposant.`,
  viz: { type: "plot", title: "x^√x remonte vers 1 quand x tend vers 0", x: [0.0005, 2], y: [0, 2.2], xlabel: "x", curves: [{ label: "x^√x", f: x => Math.pow(x, Math.sqrt(x)) }], hlines: [{ y: () => 1, label: "1" }] }
},
{
  id: "ex-lim-ln-puiss-inv-ln", noNotions: ["base"], subj: "maths", year: "mpsi", chap: 7, level: 3, time: "12 min",
  title: "Limite de |ln x|^(1/ln x) en 0⁺",
  tt: R`Limite de $|\ln x|^{1/\ln x}$ en $0^+$`,
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to0^+}|\ln x|^{\frac{1}{\ln x}}$.</p>`,
  decode: {
    donnees: [R`Quand $x\to0^+$ : $|\ln x|\to+\infty$ et $\frac1{\ln x}\to0$.`],
    but: R`Lever la forme $(+\infty)^0$.`,
    cles: {
      fi: R`$(+\infty)^0$ : la base pousse vers l'infini, l'exposant vers $1$. Il faut calculer.`,
      var: R`On remplace $\ln x$ par une nouvelle lettre $X$. L'expression devient plus simple, et $X\to-\infty$ quand $x\to0^+$.`,
      ccx: R`$\dfrac{\ln|X|}{X}\to0$ quand $X\to-\infty$ : c'est la croissance comparée $\frac{\ln t}{t}\to0$ avec $t = |X|$.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Pour $x\in\,]0,1[$, quel est le signe de $\ln x$ ? Vers quoi tendent la base et l'exposant ?</p>`, b: R`<p>On se place sur $]0,1[$, où $\ln x< 0$, donc $|\ln x| = -\ln x>0$ : la puissance est bien définie. Quand $x\to0^+$ : $\ln x\to-\infty$, donc la base $|\ln x|\to+\infty$ et l'exposant $\frac1{\ln x}\to0$. On a « $(+\infty)^0$ », une <span data-k="fi">forme indéterminée</span>.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Passer en exponentielle", h: R`<p>$a^b = \exp(b\ln a)$ avec $a = |\ln x|$ et $b = \frac1{\ln x}$.</p>`, b: R`<p>Avec $a^b = e^{b\ln a}$, $a = |\ln x|>0$ et $b = \frac1{\ln x}$ :</p>$$|\ln x|^{\frac1{\ln x}} = \exp\left(\frac{1}{\ln x}\,\ln|\ln x|\right) = \exp\left(\frac{\ln|\ln x|}{\ln x}\right).$$<p>Il suffit d'étudier l'exposant.</p>`, rappels: ["forme-exp"] },
    { t: "Changer de variable", h: R`<p>Pose $X = \ln x$ : vers quoi tend $X$ ?</p>`, b: R`<p>L'exposant ne dépend de $x$ qu'à travers $\ln x$. On pose <span data-k="var">$X = \ln x$</span> : quand $x\to0^+$, $X\to-\infty$. L'exposant s'écrit</p>$$\frac{\ln|X|}{X}.$$` },
    { t: "Limite de l'exposant", h: R`<p>Pose $t = -X$ pour te ramener à $\frac{\ln t}t$ en $+\infty$.</p>`, b: R`<p>Comme $X< 0$, on pose $t = -X = |X|$, qui tend vers $+\infty$. Alors</p>$$\frac{\ln|X|}{X} = \frac{\ln t}{-t} = -\frac{\ln t}t.$$<p>Par croissances comparées, $\frac{\ln t}t\to0$ en $+\infty$. Donc <span data-k="ccx">l'exposant tend vers $0$</span>.</p>`, rappels: ["croissances-comparees"] },
    { t: "Conclusion", h: R`<p>L'exponentielle est continue en $0$.</p>`, b: R`<p>L'exposant tend vers $0$, donc par continuité de l'exponentielle en $0$ :</p><div class="sbox">$$\lim_{x\to0^+}|\ln x|^{\frac1{\ln x}} = e^0 = 1.$$</div><p>Contrôle : $x = 10^{-10}$, $\ln x\approx-23$ : $23^{-1/23} = e^{-\ln23/23}\approx e^{-0{,}136}\approx0{,}87$, puis cela continue de monter vers $1$.</p>`, rappels: ["composition-limites"] }
  ],
  piege: R`Oublier la valeur absolue : $\ln x<0$ près de $0$, et le logarithme d'un nombre négatif n'existe pas.`,
  methode: R`Une expression compliquée en $\ln x$ se simplifie souvent en posant $X = \ln x$. Pense à traduire où tend $X$.`,
  viz: { type: "plot", title: "La limite 1 est atteinte, mais très lentement", x: [0.000001, 0.9], y: [0, 2], xlabel: "x", curves: [{ label: "|ln x|^(1/ln x)", f: x => Math.pow(Math.abs(Math.log(x)), 1 / Math.log(x)) }], hlines: [{ y: () => 1, label: "1" }] }
},
{
  id: "ex-lim-sinx-x", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 2, time: "6 min",
  title: "La limite de sin x / x en 0",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to0}\frac{\sin x}{x}$.</p>`,
  decode: {
    donnees: [R`$\sin x\to0$ et $x\to0$.`],
    but: R`Lever la forme $\frac00$.`,
    cles: {
      taux: R`Une expression $\dfrac{f(x)-f(a)}{x-a}$. Sa limite quand $x\to a$ est $f'(a)$, si $f$ est dérivable en $a$.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Remplace $x$ par $0$ en haut et en bas.</p>`, b: R`<p>En $x = 0$ : $\sin0 = 0$ au numérateur, $0$ au dénominateur. C'est une forme indéterminée $\frac00$ : le quotient n'est pas défini en $0$, on cherche sa limite.</p><p>Valeurs : $x = 0{,}1$ donne $\frac{0{,}0998}{0{,}1}\approx0{,}998$ ; $x = 0{,}01$ donne $\approx0{,}99998$. On devine $1$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Faire apparaître un taux d'accroissement", h: R`<p>$\sin0 = 0$ : fais apparaître $\frac{\sin x-\sin0}{x-0}$.</p>`, b: R`<p>Comme $\sin0 = 0$, on peut ajouter ce zéro sans rien changer :</p>$$\frac{\sin x}{x} = \frac{\sin x-\sin0}{x-0}.$$<p>C'est le <span data-k="taux">taux d'accroissement</span> de la fonction $\sin$ entre $0$ et $x$ : la pente de la corde qui relie les points d'abscisses $0$ et $x$ de la courbe.</p>` },
    { t: "Utiliser la dérivée", h: R`<p>La limite d'un taux d'accroissement en $a$ est la dérivée en $a$.</p>`, b: R`<p>Par définition de la dérivée, si $f$ est dérivable en $a$ :</p>$$\frac{f(x)-f(a)}{x-a}\xrightarrow[x\to a]{}f'(a).$$<p>Ici $f = \sin$, $a = 0$. La fonction $\sin$ est dérivable, de dérivée $\cos$, donc $\sin'(0) = \cos0 = 1$.</p>`, rappels: ["taux-accroissement"] },
    { t: "Conclusion", h: R`<p>$\sin' = \cos$.</p>`, b: R`<div class="sbox">$$\lim_{x\to0}\frac{\sin x}{x} = \sin'(0) = \cos0 = 1.$$</div><p>Géométriquement : près de $0$, la courbe du sinus se confond avec sa tangente $y = x$, donc $\sin x\approx x$. Ce résultat est à connaître par cœur, il sert partout (équivalent $\sin x\sim x$).</p>` }
  ],
  piege: R`Écrire « $\frac{\sin x}{x}\to\frac00$ donc la limite n'existe pas » : $\frac00$ est une forme indéterminée, pas une absence de limite.`,
  methode: R`Une forme $\frac00$ de la forme $\frac{f(x)-f(a)}{x-a}$ se règle par la dérivée de $f$ en $a$.`,
  viz: { type: "plot", title: "sin x / x vaut presque 1 près de 0", x: [-12, 12], y: [-0.4, 1.2], xlabel: "x", curves: [{ label: "sin x / x", f: x => Math.abs(x) < 1e-6 ? 1 : Math.sin(x) / x }], hlines: [{ y: () => 1, label: "1" }] }
},
{
  id: "ex-lim-x-sin-ln", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "6 min",
  title: "Limite de x·sin(ln x) en 0⁺",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to0^+}x\sin(\ln x)$.</p>`,
  decode: {
    donnees: [R`$x\to0$ et $\sin(\ln x)$ oscille entre $-1$ et $1$.`],
    but: R`Trouver la limite du produit.`,
    cles: {
      osc: R`$\ln x\to-\infty$, donc $\sin(\ln x)$ oscille sans cesse : il n'a pas de limite en $0^+$.`,
      bornee: R`$|\sin(\ln x)|\leqslant1$ pour tout $x>0$.`
    }
  },
  steps: [
    { t: "Le problème", h: R`<p>$\ln x\to-\infty$ : le sinus oscille. Est-il borné ?</p>`, b: R`<p>Quand $x\to0^+$, $\ln x\to-\infty$, et $\sin(\ln x)$ prend sans arrêt toutes les valeurs entre $-1$ et $1$ : il <span data-k="osc">n'a pas de limite</span>. On ne peut pas utiliser « limite d'un produit ».</p><p>Mais $\sin(\ln x)$ est <span data-k="bornee">borné</span> par $1$, et $x\to0$. « Petit fois borné » doit tendre vers $0$.</p>` },
    { t: "Encadrer", h: R`<p>Utilise $|\sin|\leqslant1$.</p>`, b: R`<p>Pour $x>0$, avec $|\sin(\ln x)|\leqslant1$ :</p>$$|x\sin(\ln x)| = x\,|\sin(\ln x)|\leqslant x\times1 = x.$$<p>Autrement dit, $-x\leqslant x\sin(\ln x)\leqslant x$.</p>`, rappels: ["borne-zero"] },
    { t: "Conclusion", h: R`<p>Le majorant tend vers $0$ : théorème d'encadrement.</p>`, b: R`<p>Les deux bornes $-x$ et $x$ tendent vers $0$ quand $x\to0^+$. Par encadrement :</p><div class="sbox">$$\lim_{x\to0^+}x\sin(\ln x) = 0.$$</div><p>On n'a jamais eu besoin d'une limite pour $\sin(\ln x)$ : seulement qu'il soit borné.</p>`, rappels: ["encadrement"] }
  ],
  piege: R`Chercher la limite de $\sin(\ln x)$ : elle n'existe pas, et on n'en a pas besoin.`,
  methode: R`Borné fois une quantité qui tend vers $0$ : la limite est $0$. On le justifie par $|fg|\leqslant M|f|$.`,
  viz: { type: "plot", title: "Les oscillations sont écrasées entre −x et x", x: [0.0001, 1], y: [-1, 1], xlabel: "x", curves: [{ label: "x·sin(ln x)", f: x => x * Math.sin(Math.log(x)) }, { label: "x", f: x => x }, { label: "−x", f: x => -x }] }
},
{
  id: "ex-lim-pe-0", subj: "maths", year: "mpsi", chap: 7, level: 1, time: "5 min",
  title: "Limite de ⌊x⌋ / x en 0⁺",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to0^+}\frac1x\lfloor x\rfloor$.</p>`,
  decode: {
    donnees: [R`$\frac1x\to+\infty$ quand $x\to0^+$.`, R`$\lfloor x\rfloor$ est la partie entière de $x$.`],
    but: R`Trouver la limite, en regardant de près ce que vaut $\lfloor x\rfloor$ près de $0$.`,
    cles: {
      apriori: R`À première vue seulement. En regardant mieux, la forme indéterminée disparaît.`,
      pe: R`Pour $0\leqslant x<1$, le plus grand entier inférieur ou égal à $x$ est $0$.`
    }
  },
  steps: [
    { t: "Le piège apparent", h: R`<p>Avant de calculer, regarde ce que vaut $\lfloor x\rfloor$ pour $x$ proche de $0$, mais positif.</p>`, b: R`<p>Quand $x\to0^+$, $\frac1x\to+\infty$. On pourrait croire à une forme indéterminée $(+\infty)\times\lfloor x\rfloor$ et chercher des outils compliqués. Mais ce n'est qu'une apparence, <span data-k="apriori">a priori</span> : regardons d'abord ce que vaut vraiment $\lfloor x\rfloor$.</p>` },
    { t: "Regarder la partie entière", h: R`<p>Pour $0< x< 1$, quel est le plus grand entier $\leqslant x$ ?</p>`, b: R`<p>$\lfloor x\rfloor$ est le plus grand entier inférieur ou égal à $x$. Pour $x\in\,]0,1[$, cet entier est $0$ : <span data-k="pe">$\lfloor x\rfloor = 0$</span>. Par exemple $\lfloor0{,}3\rfloor = 0$, $\lfloor0{,}999\rfloor = 0$. Donc, sur cet intervalle :</p>$$\frac1x\lfloor x\rfloor = \frac1x\times0 = 0.$$`, rappels: ["partie-entiere"] },
    { t: "Conclusion", h: R`<p>Une fonction constante sur un voisinage a pour limite cette constante.</p>`, b: R`<p>Pour $x$ assez proche de $0$ (à droite), la fonction est constante égale à $0$. Sa limite est donc $0$ :</p><div class="sbox">$$\lim_{x\to0^+}\frac1x\lfloor x\rfloor = 0.$$</div><p>À comparer avec la limite en $+\infty$, qui vaut $1$ : la même expression se comporte très différemment selon l'endroit.</p>` }
  ],
  piege: R`Appliquer mécaniquement une méthode de forme indéterminée sans regarder ce que vaut vraiment l'expression près du point.`,
  methode: R`Avant de calculer, simplifie l'expression sur un voisinage du point : la partie entière y est souvent constante.`,
  viz: { type: "plot", title: "La fonction vaut 0 sur ]0, 1[", x: [0.01, 3.5], y: [-0.2, 1.2], xlabel: "x", curves: [{ label: "⌊x⌋ / x", f: x => Math.floor(x) / x }] }
},
{
  id: "ex-lim-ln-lnln", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "8 min",
  title: "Limite de ln(x)·ln(ln x) en 1⁺",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to1^+}\ln(x)\ln(\ln x)$.</p>`,
  decode: {
    donnees: [R`$x>1$, donc $\ln x>0$ et $\ln(\ln x)$ est bien défini.`, R`Quand $x\to1^+$ : $\ln x\to0^+$.`],
    but: R`Lever la forme $0\times(-\infty)$.`,
    cles: {
      compo: R`L'expression est une fonction de $\ln x$ seulement : on reconnaît $X\ln X$ avec $X = \ln x$.`,
      xlnx: R`Croissance comparée : $X\ln X\to0$ quand $X\to0^+$.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Quand $x\to1^+$, $\ln x\to0^+$. Et $\ln$ d'un nombre qui tend vers $0^+$ ?</p>`, b: R`<p>Pour $x>1$, $\ln x>0$, donc $\ln(\ln x)$ est bien défini. Quand $x\to1^+$ : $\ln x\to\ln1 = 0$, par valeurs positives. Puis $\ln(\ln x)\to-\infty$ (le logarithme d'un nombre qui tend vers $0^+$). On a un produit « $0\times(-\infty)$ » : c'est une forme indéterminée.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Reconnaître une composition", h: R`<p>Pose $X = \ln x$.</p>`, b: R`<p>L'expression ne dépend de $x$ qu'à travers $\ln x$. Posons $X = \ln x$. <span data-k="compo">L'expression s'écrit</span></p>$$\ln(x)\ln(\ln x) = X\ln X,$$<p>et $X\to0^+$ quand $x\to1^+$. On s'est ramené à une limite connue.</p>`, rappels: ["composition-limites"] },
    { t: "Conclusion", h: R`<p>Croissances comparées : $X\ln X$ en $0^+$.</p>`, b: R`<p>Par croissances comparées, <span data-k="xlnx">$X\ln X\to0$</span> quand $X\to0^+$ : le facteur $X$ qui tend vers $0$ l'emporte sur $\ln X$. Par composition :</p><div class="sbox">$$\lim_{x\to1^+}\ln(x)\ln(\ln x) = 0.$$</div><p>Contrôle : $x = 1{,}001$ donne $\ln x\approx0{,}001$ et $0{,}001\times\ln(0{,}001)\approx0{,}001\times(-6{,}9)\approx-0{,}007$ ✓.</p>`, rappels: ["croissances-comparees"] }
  ],
  piege: R`Oublier que l'étude n'a de sens que pour $x>1$ : pour $x<1$, $\ln x<0$ et $\ln(\ln x)$ n'existe pas.`,
  methode: R`Si l'expression ne dépend que d'une quantité $u(x)$, pose $X = u(x)$ et ramène-toi à une limite connue.`,
  viz: { type: "plot", title: "La courbe part de 0 en x = 1", x: [1.0001, 3], y: [-0.5, 0.2], xlabel: "x", curves: [{ label: "ln(x)·ln(ln x)", f: x => Math.log(x) * Math.log(Math.log(x)) }] }
},
{
  id: "ex-lim-sin2x-pi", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "10 min",
  title: "Limite de sin(2x)/(π − 2x) en π/2",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to\pi/2}\frac{\sin(2x)}{\pi-2x}$.</p>`,
  decode: {
    donnees: [R`Quand $x\to\frac\pi2$ : $\sin(2x)\to\sin\pi = 0$ et $\pi-2x\to0$.`],
    but: R`Lever la forme $\frac00$ en un point autre que $0$.`,
    cles: {
      trans: R`On pose $x = \frac\pi2+h$. Étudier $x\to\frac\pi2$ revient à étudier $h\to0$, où l'on connaît les limites usuelles.`,
      sinpi: R`$\sin(\pi+\theta) = -\sin\theta$ pour tout $\theta$.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Remplace $x$ par $\frac\pi2$ : $\sin\pi = \,?$</p>`, b: R`<p>En $x = \frac\pi2$ : $\sin(2x) = \sin\pi = 0$ et $\pi-2x = 0$. Forme indéterminée $\frac00$, mais en $\frac\pi2$ et non en $0$. On connaît bien les limites en $0$ (par exemple $\frac{\sin u}u\to1$) : on va s'y ramener.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Se ramener en 0", h: R`<p>On sait traiter les limites en $0$ : pose $h = x-\frac\pi2$.</p>`, b: R`<p>On <span data-k="trans">translate</span> : $h = x-\frac\pi2$ tend vers $0$ quand $x\to\frac\pi2$. Alors $x = \frac\pi2+h$ et</p>$$2x = \pi+2h,\qquad\pi-2x = \pi-(\pi+2h) = -2h.$$`, rappels: ["translation"] },
    { t: "Simplifier", h: R`<p>$\sin(\pi+a) = -\sin a$.</p>`, b: R`<p>Par la formule $\sin(a+b) = \sin a\cos b+\cos a\sin b$ avec $a = \pi$ : $\sin(\pi+2h) = \underbrace{\sin\pi}_{0}\cos2h+\underbrace{\cos\pi}_{-1}\sin2h$, donc <span data-k="sinpi">$\sin(\pi+2h) = -\sin(2h)$</span>. Le quotient devient :</p>$$\frac{\sin(2x)}{\pi-2x} = \frac{-\sin(2h)}{-2h} = \frac{\sin(2h)}{2h}.$$` },
    { t: "Conclusion", h: R`<p>Pose $u = 2h$ et utilise $\frac{\sin u}u\to1$.</p>`, b: R`<p>Avec $u = 2h\to0$, on reconnaît $\frac{\sin u}u\to1$. Par composition :</p><div class="sbox">$$\lim_{x\to\pi/2}\frac{\sin(2x)}{\pi-2x} = 1.$$</div><p>Contrôle : $x = \frac\pi2+0{,}01$ donne $\frac{\sin(\pi+0{,}02)}{-0{,}02} = \frac{-0{,}019999}{-0{,}02}\approx0{,}99993$ ✓.</p>`, rappels: ["composition-limites"] }
  ],
  piege: R`Écrire la flèche « $h\to0$ » en oubliant que c'est $x$ qui tend vers $\frac\pi2$ : $h$ est une fonction de $x$, c'est une composition.`,
  methode: R`Pour une limite en $a\neq0$, pose $x = a+h$ et ramène-toi à une limite usuelle en $0$.`,
  viz: { type: "plot", title: "La fonction vaut presque 1 autour de π/2", x: [0, 3.14], y: [-0.4, 1.2], xlabel: "x", curves: [{ label: "sin(2x) / (π − 2x)", f: x => Math.abs(Math.PI - 2 * x) < 1e-6 ? 1 : Math.sin(2 * x) / (Math.PI - 2 * x) }], vlines: [{ x: () => Math.PI / 2, label: "π/2" }], hlines: [{ y: () => 1, label: "1" }] }
},
{
  id: "ex-lim-x-1-lnx", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "6 min",
  title: "Limite de (x − 1)/ln x en 1",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to1}\frac{x-1}{\ln x}$.</p>`,
  decode: {
    donnees: [R`$x-1\to0$ et $\ln x\to0$ quand $x\to1$.`],
    but: R`Lever la forme $\frac00$.`,
    cles: {
      inv: R`L'inverse de l'expression, $\dfrac{\ln x}{x-1}$, est le taux d'accroissement de $\ln$ en $1$.`
    }
  },
  steps: [
    { t: "Reconnaître le problème", h: R`<p>Remplace $x$ par $1$ : $\ln1 = \,?$</p>`, b: R`<p>En $x = 1$ : le numérateur vaut $1-1 = 0$ et le dénominateur $\ln1 = 0$. C'est une forme indéterminée $\frac00$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Retourner la fraction", h: R`<p>Écris $\frac{x-1}{\ln x} = 1\Big/\frac{\ln x}{x-1}$ et utilise $\ln1 = 0$.</p>`, b: R`<p>On reconnaît un taux d'accroissement… mais à l'envers. On retourne la fraction, et on écrit $\ln x = \ln x-\ln1$ (car $\ln1 = 0$) :</p>$$\frac{x-1}{\ln x} = \frac{1}{\dfrac{\ln x}{x-1}} = \frac{1}{\dfrac{\ln x-\ln1}{x-1}}.$$<p>Au dénominateur, on reconnaît <span data-k="inv">le taux d'accroissement de $\ln$ entre $1$ et $x$</span>.</p>` },
    { t: "Utiliser la dérivée", h: R`<p>Dérivée de $\ln$ en $1$ ?</p>`, b: R`<p>$\ln$ est dérivable en $1$, de dérivée $\ln'(x) = \frac1x$, donc $\ln'(1) = 1$. La limite du taux d'accroissement est la dérivée :</p>$$\frac{\ln x-\ln1}{x-1}\xrightarrow[x\to1]{}1.$$`, rappels: ["taux-accroissement"] },
    { t: "Conclusion", h: R`<p>L'inverse d'une quantité qui tend vers $1$.</p>`, b: R`<p>Le dénominateur tend vers $1\neq0$, donc son inverse tend vers $\frac11$ :</p><div class="sbox">$$\lim_{x\to1}\frac{x-1}{\ln x} = 1.$$</div><p>Contrôle : $x = 1{,}01$ donne $\frac{0{,}01}{0{,}00995}\approx1{,}005$ ✓. À retenir : $\ln x\sim x-1$ quand $x\to1$.</p>` }
  ],
  piege: R`Chercher directement un taux d'accroissement dans $\frac{x-1}{\ln x}$ : il est « à l'envers ».`,
  methode: R`Si la fraction est l'inverse d'un taux d'accroissement, retourne-la, calcule la dérivée, puis prends l'inverse.`,
  viz: { type: "plot", title: "La fonction vaut presque 1 autour de x = 1", x: [0.05, 3], y: [0, 2.2], xlabel: "x", curves: [{ label: "(x − 1) / ln x", f: x => Math.abs(x - 1) < 1e-6 ? 1 : (x - 1) / Math.log(x) }], hlines: [{ y: () => 1, label: "1" }] }
}
]);

LEMME.exercises([
{
  id: "ct-x-abs-x", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 2, time: "10 min",
  title: "Continuité d'une fonction définie par morceaux",
  enonce: R`<p>Étudier la continuité de la fonction $f$ définie sur $\mathbb R$ par</p>$$f(x) = \begin{cases}x^2 & \text{si } x\geqslant0,\\ -x^2 & \text{si } x<0.\end{cases}$$`,
  decode: {
    donnees: [R`Deux formules, une pour $x\geqslant0$ et une pour $x<0$.`],
    but: R`Savoir en quels points $f$ est continue.`,
    cles: {
      voisinage: R`Un petit intervalle $]a-\alpha,a+\alpha[$ autour de $a$. Si $a>0$, on peut le choisir assez petit pour qu'il ne contienne que des nombres positifs.`,
      jonction: R`Le point où l'on change de formule : ici $0$. C'est le seul endroit délicat.`
    }
  },
  steps: [
    { t: "La stratégie", h: R`<p>La formule change en $0$ : ce point demande un traitement à part.</p>`, b: R`<p>$f$ est continue sur $\mathbb R$ si elle est continue en chaque point $a$, c'est-à-dire si $f(x)\to f(a)$ quand $x\to a$.</p><p>La formule de $f$ change en $0$ : c'est le <span data-k="jonction">point de jonction</span> entre les deux morceaux. On sépare trois cas : $a>0$, $a< 0$, et $a = 0$, le seul délicat.</p>` },
    { t: "Cas a > 0", h: R`<p>Près d'un $a>0$, quelle formule donne $f(x)$ ?</p>`, b: R`<p>Soit $a>0$. Pour $x$ dans l'intervalle $]\frac a2,+\infty[$, qui est un <span data-k="voisinage">voisinage</span> de $a$, on a $x>0$, donc $f(x) = x^2$. Près de $a$, $f$ coïncide avec la fonction polynomiale $x\mapsto x^2$, continue. Donc</p>$$f(x) = x^2\xrightarrow[x\to a]{}a^2 = f(a).$$<p>$f$ est continue en $a$.</p>`, rappels: ["continuite-operations"] },
    { t: "Cas a < 0", h: R`<p>Même raisonnement que pour $a>0$, avec l'autre formule.</p>`, b: R`<p>Soit $a< 0$. Sur $]-\infty,\frac a2[$, voisinage de $a$, tous les $x$ sont négatifs, donc $f(x) = -x^2$. Ainsi $f(x)\to-a^2 = f(a)$ quand $x\to a$ : $f$ est continue en $a$.</p>` },
    { t: "Cas a = 0, à droite", h: R`<p>Calcule la limite de $f(x)$ quand $x\to0$ avec $x>0$, et compare à $f(0)$.</p>`, b: R`<p>En $0$, on ne peut plus raisonner ainsi : tout intervalle autour de $0$ contient des $x$ positifs <b>et</b> négatifs, avec deux formules différentes. On étudie chaque côté séparément.</p><p>D'abord $f(0) = 0^2 = 0$ (cas $x\geqslant0$). Pour $x>0$ : $f(x) = x^2\to0 = f(0)$ quand $x\to0^+$. $f$ est continue à droite en $0$.</p>`, rappels: ["continuite-droite-gauche"] },
    { t: "Cas a = 0, à gauche", h: R`<p>Même chose avec $x< 0$.</p>`, b: R`<p>Pour $x< 0$ : $f(x) = -x^2\to-0 = 0 = f(0)$ quand $x\to0^-$. $f$ est continue à gauche en $0$.</p><p>Une fonction continue à gauche et à droite en un point, avec la même valeur $f(0)$, est continue en ce point : $f$ est continue en $0$.</p>`, rappels: ["continuite-droite-gauche"] },
    { t: "Conclusion et raccourci", h: R`<p>Peux-tu écrire $f$ avec une seule formule ? Pense à $|x|$.</p>`, b: R`<p>$f$ est continue en tout point :</p><div class="sbox"><p style="margin:0;text-align:center">$f$ est continue sur $\mathbb R$.</p></div><p><b>Raccourci</b> : pour $x\geqslant0$, $x|x| = x\cdot x = x^2$ ; pour $x< 0$, $x|x| = x\cdot(-x) = -x^2$. Donc $f(x) = x|x|$ pour tout $x$ : produit de deux fonctions continues, elle est continue. Une formule unique évite l'étude au point de jonction.</p>`, rappels: ["continuite-operations"] }
  ],
  piege: R`Étudier seulement les formules sans regarder le point de jonction : c'est le seul endroit où la continuité peut casser.`,
  methode: R`Pour une fonction définie par morceaux, la continuité au point de jonction se montre par la continuité à gauche et à droite.`,
  viz: { type: "plot", title: "Les deux morceaux se raccordent en 0", x: [-2, 2], y: [-4, 4], xlabel: "x", curves: [{ label: "x² si x ≥ 0", f: x => x >= 0 ? x * x : NaN }, { label: "−x² si x < 0", f: x => x < 0 ? -x * x : NaN }] }
},
{
  id: "ct-sup-fg", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "10 min",
  title: "Le maximum de deux fonctions continues",
  enonce: R`<p>Soit $f,g : I\to\mathbb R$ deux fonctions continues. Montrer que la fonction $\sup(f,g)$, définie par $\sup(f,g)(x) = \max\big(f(x),g(x)\big)$, est continue.</p>`,
  decode: {
    donnees: [R`$f$ et $g$ continues sur $I$.`],
    but: R`Prouver la continuité de $x\mapsto\max\big(f(x),g(x)\big)$.`,
    cles: {
      formule: R`Une écriture du maximum sans « si… sinon » : $\max(a,b) = \frac12\big(a+b+|a-b|\big)$.`
    }
  },
  steps: [
    { t: "L'idée", h: R`<p>On connaît la continuité des sommes, produits, valeurs absolues. Peut-on exprimer un max avec ça ?</p>`, b: R`<p>Le maximum de deux nombres n'est pas une opération « classique » comme $+$ ou $\times$. Mais si on arrive à l'écrire avec des sommes, des produits par une constante et une valeur absolue (des opérations qui conservent la continuité), on aura gagné.</p>` },
    { t: "Une formule pour le max", h: R`<p>Distingue $a\geqslant b$ et $a< b$ pour simplifier $|a-b|$.</p>`, b: R`<p>Montrons <span data-k="formule">la formule</span></p>$$\max(a,b) = \frac12\big(a+b+|a-b|\big).$$<ul><li><b>Si $a\geqslant b$</b> : $a-b\geqslant0$, donc $|a-b| = a-b$ et $\frac12(a+b+a-b) = \frac12\cdot2a = a = \max(a,b)$.</li><li><b>Si $a< b$</b> : $|a-b| = b-a$ et $\frac12(a+b+b-a) = \frac12\cdot2b = b = \max(a,b)$.</li></ul><p>Interprétation : $\frac{a+b}2$ est le milieu, $\frac{|a-b|}2$ la demi-distance ; milieu + demi-distance = le plus grand. Exemple : $a = 3$, $b = 7$ : $\frac12(10+4) = 7$ ✓.</p>` },
    { t: "Appliquer à f et g", h: R`<p>Applique la formule avec $a = f(x)$ et $b = g(x)$.</p>`, b: R`<p>Pour chaque $x\in I$, avec $a = f(x)$, $b = g(x)$ :</p>$$\sup(f,g)(x) = \frac12\big(f(x)+g(x)+|f(x)-g(x)|\big),$$<p>soit, comme égalité de fonctions :</p>$$\sup(f,g) = \frac12\big(f+g+|f-g|\big).$$` },
    { t: "Conclusion", h: R`<p>Justifie la continuité de chaque morceau : $f+g$, $f-g$, puis $|f-g|$.</p>`, b: R`<ul><li>$f+g$ et $f-g$ sont continues (somme et différence de fonctions continues).</li><li>$|f-g|$ est la composée de $f-g$ (continue) par $t\mapsto|t|$ (continue) : elle est continue.</li><li>La somme $f+g+|f-g|$ est continue, et multiplier par $\frac12$ conserve la continuité.</li></ul><div class="sbox"><p style="margin:0;text-align:center">$\sup(f,g)$ est continue. De même $\inf(f,g) = \frac12\big(f+g-|f-g|\big)$.</p></div>`, rappels: ["continuite-operations"] }
  ],
  piege: R`Raisonner « en chaque point, le max vaut $f$ ou $g$, donc il est continu » : le choix entre $f$ et $g$ peut changer d'un point à l'autre.`,
  methode: R`Pour prouver une continuité, écris la fonction à l'aide d'opérations dont tu connais la continuité.`,
  viz: { type: "plot", title: "Le max suit toujours la plus haute des deux courbes", x: [0, 7], y: [-1.2, 1.2], xlabel: "x", curves: [{ label: "max(sin, cos)", f: x => Math.max(Math.sin(x), Math.cos(x)) }, { label: "sin x", f: x => Math.sin(x) }, { label: "cos x", f: x => Math.cos(x) }] }
},
{
  id: "ct-egalite-fg", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "8 min",
  title: "Deux fonctions qui se croisent",
  enonce: R`<p>Soit $f,g : [a,b]\to\mathbb R$ continues telles que $\big(g(a)-f(a)\big)\big(g(b)-f(b)\big)\leqslant0$. Montrer qu'il existe $x\in[a,b]$ tel que $f(x) = g(x)$.</p>`,
  decode: {
    donnees: [R`$f$ et $g$ continues sur le segment $[a,b]$.`, R`Le produit $\big(g(a)-f(a)\big)\big(g(b)-f(b)\big)$ est négatif ou nul.`],
    but: R`Trouver un point où les deux fonctions sont égales.`,
    cles: {
      signes: R`Un produit est négatif ou nul quand ses deux facteurs sont de signes opposés, ou quand l'un d'eux est nul.`,
      aux: R`On remplace l'équation $f(x) = g(x)$ par $\varphi(x) = 0$ avec $\varphi = g-f$ : chercher un zéro est plus simple.`
    }
  },
  steps: [
    { t: "Traduire l'hypothèse", h: R`<p>Un produit $\leqslant0$ : que dire des signes des deux facteurs ?</p>`, b: R`<p>Le produit $\big(g(a)-f(a)\big)\big(g(b)-f(b)\big)$ est $\leqslant0$. Un produit de deux réels est $\leqslant0$ quand l'un est $\geqslant0$ et l'autre $\leqslant0$ : $g(a)-f(a)$ et $g(b)-f(b)$ sont <span data-k="signes">de signes opposés</span> (au sens large, l'un pouvant être nul).</p><p>Géométriquement : à une extrémité la courbe de $g$ est au-dessus de celle de $f$, à l'autre en dessous. Elles doivent se croiser.</p>` },
    { t: "La fonction auxiliaire", h: R`<p>Résoudre $f(x) = g(x)$, c'est annuler une fonction. Laquelle ?</p>`, b: R`<p>$f(x) = g(x)\iff g(x)-f(x) = 0$. On pose donc <span data-k="aux">$\varphi = g-f$</span>, définie sur $[a,b]$. Elle est continue comme différence de fonctions continues, et l'hypothèse s'écrit</p>$$\varphi(a)\,\varphi(b)\leqslant0.$$`, rappels: ["continuite-operations"] },
    { t: "Appliquer le TVI", h: R`<p>Une fonction continue sur un intervalle, qui change de signe : quel théorème ?</p>`, b: R`<p>$\varphi$ est continue sur l'intervalle $[a,b]$, et $\varphi(a)$, $\varphi(b)$ sont de signes opposés : $0$ est compris entre $\varphi(a)$ et $\varphi(b)$. Par le théorème des valeurs intermédiaires, il existe $x\in[a,b]$ tel que $\varphi(x) = 0$.</p>`, rappels: ["tvi"] },
    { t: "Conclusion", h: R`<p>Traduis $\varphi(x) = 0$.</p>`, b: R`<p>En ce point, $g(x)-f(x) = 0$ :</p><div class="sbox">$$\exists x\in[a,b],\quad f(x) = g(x).$$</div><p>Exemple : $f(x) = x$, $g(x) = \cos x$ sur $[0,1]$ : $g(0)-f(0) = 1>0$ et $g(1)-f(1) = \cos1-1< 0$. Il existe donc $x$ avec $\cos x = x$ (environ $0{,}739$).</p>` }
  ],
  piege: R`Appliquer le TVI à $f$ et à $g$ séparément : il faut une seule fonction qui change de signe.`,
  methode: R`Pour résoudre $f(x) = g(x)$, étudie le signe de $g-f$ et applique le TVI à cette différence.`
},
{
  id: "ex-continue-non-bornee", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "6 min",
  title: "Une fonction continue ni minorée ni majorée",
  enonce: R`<p>Donner un exemple de fonction continue sur $[0,+\infty[$ qui n'est ni minorée, ni majorée.</p>`,
  decode: {
    donnees: [R`Le domaine est $[0,+\infty[$ : $x$ peut devenir aussi grand qu'on veut.`],
    but: R`Une fonction continue qui prend des valeurs aussi grandes et aussi négatives qu'on veut.`,
    cles: {
      osc: R`Une fonction qui monte et descend sans arrêt, avec des oscillations de plus en plus grandes.`,
      majoree: R`$f$ est majorée s'il existe $M$ avec $f(x)\leqslant M$ pour tout $x$. Pour montrer qu'elle ne l'est pas, on exhibe des valeurs plus grandes que n'importe quel $M$.`
    }
  },
  steps: [
    { t: "L'idée", h: R`<p>Il faut une fonction qui monte de plus en plus haut ET descend de plus en plus bas. Pense à une oscillation dont l'amplitude grandit.</p>`, b: R`<p>Une fonction croissante sur $[0,+\infty[$ est minorée par $f(0)$ ; une décroissante est majorée par $f(0)$. Il faut donc une fonction qui <span data-k="osc">oscille</span>, et de plus en plus fort, pour dépasser n'importe quel niveau vers le haut et vers le bas.</p><p>Candidat : $f(x) = x\cos x$. Le cosinus oscille entre $-1$ et $1$, et le facteur $x$ fait grandir l'amplitude.</p>` },
    { t: "Continuité", h: R`<p>Produit de fonctions continues.</p>`, b: R`<p>$x\mapsto x$ et $\cos$ sont continues sur $[0,+\infty[$ ; leur produit $f$ l'est aussi.</p>`, rappels: ["continuite-operations"] },
    { t: "Non majorée", h: R`<p>Choisis des points où $\cos x = 1$.</p>`, b: R`<p>Aux points $x_n = 2n\pi$ ($n\in\mathbb N$), $\cos x_n = 1$, donc</p>$$f(2n\pi) = 2n\pi\xrightarrow[n\to\infty]{}+\infty.$$<p>Si $f$ était majorée par un réel $M$, on aurait $2n\pi\leqslant M$ pour tout $n$, ce qui est faux dès que $n>\frac M{2\pi}$. $f$ n'est <span data-k="majoree">pas majorée</span>.</p>` },
    { t: "Non minorée", h: R`<p>Choisis des points où $\cos x = -1$.</p>`, b: R`<p>Aux points $y_n = (2n+1)\pi$, $\cos y_n = -1$, donc</p>$$f\big((2n+1)\pi\big) = -(2n+1)\pi\xrightarrow[n\to\infty]{}-\infty.$$<p>Aucun réel $m$ ne minore ces valeurs : $f$ n'est pas minorée.</p><div class="sbox"><p style="margin:0;text-align:center">$f(x) = x\cos x$ est continue sur $[0,+\infty[$, ni majorée, ni minorée.</p></div>` }
  ],
  piege: R`Proposer une fonction qui tend vers $+\infty$ : elle est minorée, car continue sur $[0,+\infty[$ et grande à l'infini.`,
  methode: R`Pour montrer qu'une fonction n'est pas majorée, trouve une suite de points dont les images tendent vers $+\infty$.`,
  viz: { type: "plot", title: "Les oscillations grandissent sans limite", x: [0, 40], y: [-40, 40], xlabel: "x", curves: [{ label: "x·cos x", f: x => x * Math.cos(x) }, { label: "x", f: x => x }, { label: "−x", f: x => -x }] }
},
{
  id: "ex-continue-sans-limite", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "10 min",
  title: "Une fonction continue sans limite en 0",
  enonce: R`<p>Donner un exemple de fonction continue sur $]0,+\infty[$ qui n'a pas de limite en $0$.</p>`,
  decode: {
    donnees: [R`$0$ n'est pas dans le domaine : la fonction peut se comporter de façon sauvage près de $0$.`],
    but: R`Une fonction continue qui ne se stabilise pas quand $x\to0$.`,
    cles: {
      deux: R`Si une fonction a une limite $\ell$ en $0$, alors l'image de toute suite qui tend vers $0$ tend vers $\ell$. Deux suites aux images différentes suffisent donc à prouver l'absence de limite.`
    }
  },
  steps: [
    { t: "L'idée", h: R`<p>Cherche une fonction qui oscille de plus en plus vite près de $0$ : $\cos$ de quelque chose qui tend vers $+\infty$.</p>`, b: R`<p>Quand $x\to0^+$, $\frac1x\to+\infty$, et $\cos\frac1x$ fait des oscillations complètes entre $-1$ et $1$ de plus en plus serrées près de $0$. Candidat : $f(x) = \cos\frac1x$.</p><p>Elle est continue sur $]0,+\infty[$ comme composée de $x\mapsto\frac1x$ (continue sur $]0,+\infty[$) et de $\cos$.</p>`, rappels: ["continuite-operations"] },
    { t: "La méthode", h: R`<p>Caractérisation séquentielle : si $f\to\ell$, alors $f(x_n)\to\ell$ pour toute suite $x_n\to0$.</p>`, b: R`<p>Si $f$ avait une limite $\ell$ en $0$, alors pour <b>toute</b> suite $(x_n)$ de $]0,+\infty[$ tendant vers $0$, on aurait $f(x_n)\to\ell$. Pour montrer qu'il n'y a pas de limite, il suffit donc de trouver <span data-k="deux">deux suites</span> qui tendent vers $0$ et dont les images ont des limites différentes.</p>`, rappels: ["sequentielle"] },
    { t: "Les deux suites", h: R`<p>Choisis $x$ tel que $\frac1x = 2n\pi$, puis tel que $\frac1x = (2n+1)\pi$.</p>`, b: R`<p>On veut $\cos\frac1x = 1$, donc $\frac1x = 2n\pi$ ; et $\cos\frac1x = -1$, donc $\frac1x = (2n+1)\pi$. On pose, pour $n\geqslant1$ :</p>$$u_n = \frac1{2n\pi},\qquad v_n = \frac1{(2n+1)\pi}.$$<p>Les deux sont $>0$ et tendent vers $0$. Et</p>$$f(u_n) = \cos(2n\pi) = 1,\qquad f(v_n) = \cos\big((2n+1)\pi\big) = -1.$$` },
    { t: "Conclusion", h: R`<p>La limite, si elle existait, serait unique.</p>`, b: R`<p>Si $f$ avait une limite $\ell$ en $0$, on aurait $f(u_n)\to\ell$, donc $\ell = 1$ ; et $f(v_n)\to\ell$, donc $\ell = -1$. Impossible, une limite est unique.</p><div class="sbox"><p style="margin:0;text-align:center">$f(x) = \cos\frac1x$ est continue sur $]0,+\infty[$ et n'a pas de limite en $0$.</p></div>`, rappels: ["unicite-limite"] }
  ],
  piege: R`Dire « ça oscille, donc pas de limite » sans preuve : $x\sin\frac1x$ oscille aussi, et pourtant tend vers $0$.`,
  methode: R`Pour prouver qu'une limite n'existe pas : deux suites qui tendent vers le point, des images aux limites différentes.`,
  viz: { type: "plot", title: "cos(1/x) oscille de plus en plus vite près de 0", x: [0.005, 0.6], y: [-1.2, 1.2], xlabel: "x", curves: [{ label: "cos(1/x)", f: x => Math.cos(1 / x) }] }
},
{
  id: "ex-nulle-part-continue", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "12 min",
  title: "Une fonction continue en aucun point",
  enonce: R`<p>Donner un exemple de fonction définie sur $\mathbb R$ qui n'est continue en aucun point.</p>`,
  decode: {
    donnees: [R`Aucune contrainte : on peut choisir une fonction très irrégulière.`],
    but: R`Une fonction qui « saute » partout.`,
    cles: {
      indic: R`$\mathbf 1_{\mathbb Q}(x)$ vaut $1$ si $x$ est rationnel et $0$ sinon. Entre deux rationnels il y a toujours des irrationnels, et inversement.`,
      dense: R`Tout réel est limite d'une suite de rationnels, et aussi limite d'une suite d'irrationnels.`
    }
  },
  steps: [
    { t: "Le candidat", h: R`<p>Une fonction qui « saute » partout : sépare les rationnels et les irrationnels.</p>`, b: R`<p>On prend <span data-k="indic">l'indicatrice de $\mathbb Q$</span> :</p>$$f(x) = \mathbf 1_{\mathbb Q}(x) = \begin{cases}1&\text{si }x\in\mathbb Q\\0&\text{si }x\notin\mathbb Q.\end{cases}$$<p>Idée : rationnels et irrationnels sont mélangés partout sur la droite. Près de n'importe quel point, $f$ prend donc les deux valeurs $0$ et $1$ : elle ne peut pas se stabiliser.</p>` },
    { t: "La méthode", h: R`<p>Pour montrer qu'une fonction n'est pas continue en $a$ : une suite $x_n\to a$ avec $f(x_n)\not\to f(a)$.</p>`, b: R`<p>Caractérisation séquentielle : $f$ est continue en $a$ si et seulement si, pour toute suite $x_n\to a$, $f(x_n)\to f(a)$. Pour montrer que $f$ <b>n'est pas</b> continue en $a$, il suffit d'une seule suite $x_n\to a$ avec $f(x_n)\not\to f(a)$.</p>`, rappels: ["sequentielle"] },
    { t: "En un point irrationnel", h: R`<p>$\mathbb Q$ est dense : tout irrationnel est limite d'une suite de rationnels.</p>`, b: R`<p>Soit $a\notin\mathbb Q$, donc $f(a) = 0$. Par <span data-k="dense">densité</span> de $\mathbb Q$, il existe une suite de rationnels qui tend vers $a$ : par exemple $u_n = \frac{\lfloor10^na\rfloor}{10^n}$ (le développement décimal de $a$ tronqué à $n$ chiffres). Alors $f(u_n) = 1$ pour tout $n$, donc $f(u_n)\to1\neq0 = f(a)$. $f$ n'est pas continue en $a$.</p>`, rappels: ["densite"] },
    { t: "En un point rationnel", h: R`<p>Les irrationnels sont aussi denses, par exemple $a+\frac{\sqrt2}n$.</p>`, b: R`<p>Soit $a\in\mathbb Q$, donc $f(a) = 1$. La suite $v_n = a+\frac{\sqrt2}n$ tend vers $a$, et chaque $v_n$ est irrationnel (si $v_n$ était rationnel, $\sqrt2 = n(v_n-a)$ le serait). Alors $f(v_n) = 0\to0\neq1 = f(a)$. $f$ n'est pas continue en $a$.</p>`, rappels: ["densite"] },
    { t: "Conclusion", h: R`<p>Tout réel est dans l'un des deux cas.</p>`, b: R`<p>Tout réel est rationnel ou irrationnel, et dans les deux cas $f$ n'est pas continue :</p><div class="sbox"><p style="margin:0;text-align:center">$\mathbf 1_{\mathbb Q}$ n'est continue en aucun point de $\mathbb R$.</p></div>` }
  ],
  piege: R`Traiter seulement les irrationnels. Il faut les deux cas pour couvrir tous les réels.`,
  methode: R`Pour prouver une discontinuité en $a$, trouve une suite $x_n\to a$ telle que $f(x_n)$ ne tende pas vers $f(a)$.`
}
]);

LEMME.exercises([
{
  id: "ct-periodique-limite", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "10 min",
  title: "Une fonction périodique qui a une limite",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb R$ une fonction <span data-k="per">périodique</span> qui admet une limite finie $\ell$ en $+\infty$. Que dire de $f$ ?</p>`,
  decode: {
    donnees: [R`Il existe $T>0$ tel que $f(x+T) = f(x)$ pour tout $x$.`, R`$f(x)\to\ell$ quand $x\to+\infty$.`],
    but: R`Montrer que $f$ est constante, égale à $\ell$.`,
    cles: {
      per: R`Il existe $T>0$ tel que $f(x+T) = f(x)$ pour tout réel $x$ : la courbe se répète tous les $T$.`,
      fixe: R`On choisit $x$ une fois pour toutes. Ce qui varie ensuite, c'est l'entier $n$.`,
      proj: R`On « envoie » $x$ vers l'infini en ajoutant des périodes, sans changer la valeur de $f$.`
    }
  },
  steps: [
    { t: "L'intuition", h: R`<p>Dessine une fonction périodique non constante : peut-elle se stabiliser en $+\infty$ ?</p>`, b: R`<p>Une fonction <span data-k="per">périodique</span> répète indéfiniment le même motif : $\sin$, par exemple, repasse par $1$ et $-1$ sans fin et n'a pas de limite. Pour qu'une fonction périodique se stabilise vers $\ell$ à l'infini, il faut que son motif soit déjà « plat ». On devine : $f$ est constante, égale à $\ell$.</p>` },
    { t: "Projeter x à l'infini", h: R`<p>Si $T$ est une période, que vaut $f(x+T)$ ? $f(x+2T)$ ? $f(x+nT)$ ?</p>`, b: R`<p>Soit $T>0$ une période et $x$ un réel <span data-k="fixe">fixé</span>. Par périodicité, $f(x+T) = f(x)$, puis $f(x+2T) = f\big((x+T)+T\big) = f(x+T) = f(x)$, et par récurrence :</p>$$f(x+nT) = f(x)\quad\text{pour tout }n\in\mathbb N.$$<p>On a <span data-k="proj">projeté</span> la valeur $f(x)$ aussi loin qu'on veut vers $+\infty$.</p>`, rappels: ["periodique"] },
    { t: "Passer à la limite", h: R`<p>La suite $x+nT$ tend vers $+\infty$ : que donne la caractérisation séquentielle ?</p>`, b: R`<p>Comme $T>0$, $x+nT\to+\infty$ quand $n\to+\infty$. Puisque $f\to\ell$ en $+\infty$, la caractérisation séquentielle donne</p>$$f(x+nT)\xrightarrow[n\to\infty]{}\ell.$$`, rappels: ["sequentielle"] },
    { t: "Comparer", h: R`<p>Une suite constante tend vers sa valeur. Combien de limites peut-elle avoir ?</p>`, b: R`<p>Mais la suite $\big(f(x+nT)\big)_n$ est constante, égale à $f(x)$ (étape 2) : elle tend vers $f(x)$. Par unicité de la limite :</p>$$f(x) = \ell.$$`, rappels: ["unicite-limite"] },
    { t: "Conclusion", h: R`<p>$x$ était quelconque.</p>`, b: R`<p>Ceci vaut pour tout réel $x$ :</p><div class="sbox"><p style="margin:0;text-align:center">$f$ est constante, égale à $\ell$.</p></div><p>Réciproquement, une fonction constante est périodique et a une limite. Conséquence utile : $\sin$, $\cos$, et toute fonction périodique non constante n'ont pas de limite en $+\infty$.</p>` }
  ],
  piege: R`Oublier que la conclusion porte sur un $x$ quelconque : il faut fixer $x$ au début, puis conclure pour tout $x$.`,
  methode: R`Pour exploiter une périodicité avec une limite à l'infini, compare $f(x)$ et $f(x+nT)$ quand $n\to+\infty$.`
},
{
  id: "ct-reciproque-bornee", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "25 min",
  title: "Limite infinie et images réciproques bornées",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb R$. Montrer l'équivalence entre :</p><ol><li>$\displaystyle\lim_{x\to+\infty}|f(x)| = \lim_{x\to-\infty}|f(x)| = +\infty$ ;</li><li>pour tout segment $[a,b]$, <span data-k="preimage">$f^{-1}([a,b])$</span> est une partie bornée.</li></ol>`,
  decode: {
    donnees: [R`Aucune hypothèse de continuité sur $f$.`],
    but: R`Deux implications à prouver : (i) $\Rightarrow$ (ii), puis (ii) $\Rightarrow$ (i).`,
    cles: {
      preimage: R`$f^{-1}([a,b])$ est l'ensemble des $x$ tels que $f(x)\in[a,b]$. Ce n'est pas une fonction réciproque : $f$ n'a pas besoin d'être bijective.`,
      borne: R`Une partie de $\mathbb R$ est bornée si elle est incluse dans un intervalle $[-M,M]$.`,
      A: R`$A = \max(|a|,|b|)$ est assez grand pour que $[a,b]\subset[-A,A]$. Si $|f(x)|>A$, alors $f(x)$ ne peut pas être dans $[a,b]$.`
    }
  },
  steps: [
    { t: "(i) ⇒ (ii) · Préparer", h: R`<p>$[a,b]$ est contenu dans un segment centré $[-A,A]$ : choisis $A$.</p>`, b: R`<p>On suppose (i) : $|f(x)|\to+\infty$ en $+\infty$ et en $-\infty$. Soit $[a,b]$ un segment. On veut montrer que <span data-k="preimage">$f^{-1}([a,b]) = \{x : a\leqslant f(x)\leqslant b\}$</span> est bornée.</p><p>On pose <span data-k="A">$A = \max(|a|,|b|)$</span>. Alors $-A\leqslant a$ et $b\leqslant A$, donc $[a,b]\subset[-A,A]$ : si $f(x)\in[a,b]$, alors $|f(x)|\leqslant A$.</p>` },
    { t: "(i) ⇒ (ii) · Utiliser les limites", h: R`<p>Écris la définition de « $|f(x)|\to+\infty$ quand $x\to+\infty$ » avec le seuil $A$.</p>`, b: R`<p>Par définition de $|f(x)|\to+\infty$ quand $x\to+\infty$ : pour tout seuil, en particulier $A$, il existe $M$ tel que</p>$$x>M\implies|f(x)|>A.$$<p>De même en $-\infty$ : il existe $M'$ tel que $x< M'\implies|f(x)|>A$.</p>`, rappels: ["def-limite"] },
    { t: "(i) ⇒ (ii) · Conclure", h: R`<p>Si $|x|$ est grand, $|f(x)|>A$, donc $f(x)$ ne peut pas être dans $[a,b]$.</p>`, b: R`<p>On pose $M'' = \max(M,-M')$. Si $|x|>M''$, alors $x>M''\geqslant M$ ou $x< -M''\leqslant M'$. Dans les deux cas $|f(x)|>A$, donc $f(x)\notin[-A,A]$, et a fortiori $f(x)\notin[a,b]$.</p><p>Par contraposée : tout $x$ de $f^{-1}([a,b])$ vérifie $|x|\leqslant M''$. Cette partie est <span data-k="borne">bornée</span>.</p>` },
    { t: "(ii) ⇒ (i) · Préparer", h: R`<p>Applique (ii) au segment $[-A,A]$.</p>`, b: R`<p>On suppose (ii). Soit $A\geqslant0$ quelconque (un seuil). Le segment $[-A,A]$ a une image réciproque bornée : il existe $M\geqslant0$ tel que</p>$$f^{-1}([-A,A])\subset[-M,M].$$<p>Autrement dit : si $|f(x)|\leqslant A$, alors $|x|\leqslant M$.</p>` },
    { t: "(ii) ⇒ (i) · Conclure", h: R`<p>Passe à la contraposée : hors de $[-M,M]$, $f(x)$ n'est pas dans $[-A,A]$.</p>`, b: R`<p>Par contraposée : si $|x|>M$, alors $|f(x)|>A$. En particulier, $x>M\implies|f(x)|>A$ et $x< -M\implies|f(x)|>A$.</p><p>On a montré : pour tout $A$, il existe $M$ tel qu'au-delà de $M$ (dans les deux sens), $|f(x)|>A$. C'est exactement la définition de</p><div class="sbox">$$\lim_{x\to+\infty}|f(x)| = \lim_{x\to-\infty}|f(x)| = +\infty.$$</div><p>Exemple : $f(x) = x^2$ vérifie (i), et $f^{-1}([a,b])\subset[-\sqrt{|b|},\sqrt{|b|}]$ est bien bornée.</p>`, rappels: ["def-limite"] }
  ],
  piege: R`Confondre $f^{-1}([a,b])$ avec une fonction réciproque. C'est un ensemble de points, défini pour n'importe quelle fonction.`,
  methode: R`Quand un énoncé mélange limites et ensembles, reviens à la définition quantifiée de la limite et traduis chaque phrase en inégalités.`
},
{
  id: "ct-pe-carre", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "15 min",
  title: "Continuité de ⌊x⌋ + (x − ⌊x⌋)²",
  enonce: R`<p>Étudier la continuité de $f : x\mapsto\lfloor x\rfloor+\big(x-\lfloor x\rfloor\big)^2$.</p>`,
  decode: {
    donnees: [R`$\lfloor x\rfloor$ « saute » de $1$ à chaque entier.`],
    but: R`Savoir si le terme $(x-\lfloor x\rfloor)^2$ compense exactement ces sauts.`,
    cles: {
      cas: R`La partie entière est constante entre deux entiers et ne change qu'aux entiers. On sépare donc les points entiers des autres.`,
      gauche: R`Juste avant l'entier $a$, c'est-à-dire pour $x\in[a-1,a[$, on a $\lfloor x\rfloor = a-1$.`
    }
  },
  steps: [
    { t: "La stratégie", h: R`<p>Le problème ne peut venir que des points où $\lfloor x\rfloor$ saute : les entiers.</p>`, b: R`<p>$f(x) = \lfloor x\rfloor+(x-\lfloor x\rfloor)^2$. La partie entière est constante sur chaque $[n,n+1[$ et saute de $+1$ en chaque entier. On étudie la continuité en un réel $a$, en <span data-k="cas">distinguant</span> $a\notin\mathbb Z$ (pas de saut) et $a\in\mathbb Z$ (saut possible).</p><p>Valeurs pour voir : $f(1{,}5) = 1+0{,}25 = 1{,}25$, $f(1{,}9) = 1+0{,}81 = 1{,}81$, $f(2) = 2+0 = 2$. Ça semble se recoller.</p>` },
    { t: "Cas a non entier", h: R`<p>Si $a$ n'est pas entier, $\lfloor x\rfloor$ ne change pas près de $a$.</p>`, b: R`<p>Soit $a\notin\mathbb Z$ et $n = \lfloor a\rfloor$, de sorte que $n< a< n+1$. Sur l'intervalle ouvert $]n,n+1[$, qui contient $a$, $\lfloor x\rfloor = n$ est constant. Donc, près de $a$ :</p>$$f(x) = n+(x-n)^2,$$<p>fonction polynomiale, continue. Ainsi $f(x)\to n+(a-n)^2 = f(a)$ : $f$ est continue en $a$.</p>`, rappels: ["partie-entiere", "continuite-operations"] },
    { t: "Cas a entier, à droite", h: R`<p>Pour $x$ juste à droite de l'entier $a$, que vaut $\lfloor x\rfloor$ ?</p>`, b: R`<p>Soit $a\in\mathbb Z$. D'abord $f(a) = a+(a-a)^2 = a$. Pour $x\in[a,a+1[$, $\lfloor x\rfloor = a$, donc</p>$$f(x) = a+(x-a)^2\xrightarrow[x\to a^+]{}a+0 = a = f(a).$$<p>$f$ est continue à droite en $a$.</p>`, rappels: ["continuite-droite-gauche"] },
    { t: "Cas a entier, à gauche", h: R`<p>Pour $x$ juste à gauche de $a$, $\lfloor x\rfloor = a-1$. Calcule la limite.</p>`, b: R`<p><span data-k="gauche">Pour $x\in[a-1,a[$</span>, $\lfloor x\rfloor = a-1$, donc</p>$$f(x) = (a-1)+\big(x-(a-1)\big)^2.$$<p>Quand $x\to a^-$, $x-(a-1)\to a-a+1 = 1$, donc</p>$$f(x)\xrightarrow[x\to a^-]{}(a-1)+1^2 = a = f(a).$$<p>$f$ est continue à gauche en $a$.</p>`, rappels: ["continuite-droite-gauche"] },
    { t: "Conclusion", h: R`<p>Compare les limites à gauche, à droite, et $f(a)$.</p>`, b: R`<p>En tout entier, $f$ est continue à gauche et à droite avec la même valeur $a$ ; ailleurs elle est continue (étape 2) :</p><div class="sbox"><p style="margin:0;text-align:center">$f$ est continue sur $\mathbb R$.</p></div><p>Explication : en arrivant à gauche de $a$, la partie entière vaut $a-1$ et le carré tend vers $1$, total $a$. En passant à droite, la partie entière saute à $a$ et le carré retombe à $0$, total $a$. Le saut de $+1$ de la partie entière est exactement compensé par la chute de $-1$ du carré.</p>` }
  ],
  piege: R`Conclure « la partie entière n'est pas continue, donc $f$ non plus ». Une somme de fonctions discontinues peut être continue.`,
  methode: R`Avec une partie entière, sépare les points entiers et non entiers, et étudie les entiers par limites à gauche et à droite.`,
  viz: { type: "plot", title: "La courbe ne saute jamais", x: [-2, 3], y: [-2, 3.2], xlabel: "x", curves: [{ label: "⌊x⌋ + (x − ⌊x⌋)²", f: x => Math.floor(x) + Math.pow(x - Math.floor(x), 2) }, { label: "⌊x⌋", f: x => (x - Math.floor(x) > 0.995 ? NaN : Math.floor(x)) }] }
},
{
  id: "ct-croissante-fsurx", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "20 min",
  title: "f croissante et f(x)/x décroissante",
  enonce: R`<p>Soit $f : \mathbb R_+^*\to\mathbb R$ telle que $x\mapsto f(x)$ est croissante et $x\mapsto\dfrac{f(x)}x$ est décroissante. Montrer que $f$ est continue.</p>`,
  decode: {
    donnees: [R`$f$ croissante sur $]0,+\infty[$.`, R`$x\mapsto\frac{f(x)}x$ décroissante sur $]0,+\infty[$.`],
    but: R`Montrer la continuité en tout point $a>0$, sans formule pour $f$.`,
    cles: {
      lg: R`$f(a^-)$ et $f(a^+)$ désignent les limites de $f$ à gauche et à droite en $a$. Elles existent car $f$ est monotone.`,
      sens: R`Pour une fonction décroissante, l'encadrement est inversé : la limite à droite est plus petite que la valeur, la limite à gauche plus grande.`
    }
  },
  steps: [
    { t: "L'idée", h: R`<p>Une fonction monotone admet des limites à gauche et à droite en tout point. Il suffit de montrer qu'elles valent $f(a)$.</p>`, b: R`<p>Une fonction monotone peut seulement être discontinue par des « sauts » : en tout point, elle a une limite à gauche $f(a^-)$ et une limite à droite $f(a^+)$. Elle est continue en $a$ exactement quand ces deux limites valent $f(a)$.</p><p>Plan : la croissance de $f$ donne $f(a^-)\leqslant f(a)\leqslant f(a^+)$ ; la décroissance de $\frac{f(x)}x$ donnera l'inégalité inverse. Les deux ensemble forceront l'égalité.</p>` },
    { t: "Ce que donne la croissance de f", h: R`<p>Croissante : à gauche de $a$ les valeurs sont plus petites que $f(a)$, à droite plus grandes.</p>`, b: R`<p>Soit $a>0$. Pour $x< a$, $f(x)\leqslant f(a)$ ; pour $x>a$, $f(x)\geqslant f(a)$. Par le théorème de la limite monotone, <span data-k="lg">les limites à gauche et à droite existent</span>, et en passant à la limite :</p>$$f(a^-)\leqslant f(a)\leqslant f(a^+).\qquad(1)$$<p>Si $f$ avait un saut en $a$, il serait vers le haut : $f(a^+)>f(a^-)$.</p>`, rappels: ["monotone-encadrement"] },
    { t: "Ce que donne la décroissance de f(x)/x", h: R`<p>Même chose pour $x\mapsto\frac{f(x)}x$, mais décroissante : les inégalités sont dans l'autre sens.</p>`, b: R`<p>$g(x) = \frac{f(x)}x$ est décroissante, donc <span data-k="sens">les inégalités s'inversent</span> : à droite de $a$, $g$ est plus petite ; à gauche, plus grande :</p>$$\lim_{x\to a^+}\frac{f(x)}x\leqslant\frac{f(a)}a\leqslant\lim_{x\to a^-}\frac{f(x)}x.$$<p>Par quotient de limites (avec $x\to a\neq0$) : $\lim_{x\to a^\pm}\frac{f(x)}x = \frac{f(a^\pm)}a$. D'où</p>$$\frac{f(a^+)}a\leqslant\frac{f(a)}a\leqslant\frac{f(a^-)}a.$$`, rappels: ["monotone-encadrement", "operations-limites"] },
    { t: "Multiplier par a", h: R`<p>$a>0$ : multiplier par $a$ ne change pas le sens des inégalités.</p>`, b: R`<p>Comme $a>0$, on multiplie par $a$ sans changer le sens :</p>$$f(a^+)\leqslant f(a)\leqslant f(a^-).\qquad(2)$$<p>C'est l'inégalité inverse de (1) : un saut serait maintenant vers le bas.</p>` },
    { t: "Conclusion", h: R`<p>Mets bout à bout (1) et (2).</p>`, b: R`<p>En enchaînant (1) puis (2) :</p>$$f(a^-)\leqslant f(a)\leqslant f(a^+)\leqslant f(a)\leqslant f(a^-).$$<p>On part de $f(a^-)$ et on revient à $f(a^-)$ : toutes les inégalités sont des égalités, $f(a^-) = f(a) = f(a^+)$. $f$ est continue à gauche et à droite en $a$, donc continue en $a$, pour tout $a>0$.</p><div class="sbox"><p style="margin:0;text-align:center">$f$ est continue sur $\mathbb R_+^*$.</p></div><p>Exemple : $f(x) = \sqrt x$ est croissante, et $\frac{\sqrt x}x = \frac1{\sqrt x}$ est décroissante.</p>`, rappels: ["continuite-droite-gauche"] }
  ],
  piege: R`Écrire le même encadrement pour une fonction croissante et pour une fonction décroissante : pour la seconde, il s'inverse.`,
  methode: R`Une fonction monotone a des limites latérales partout. Pour montrer sa continuité, prouve que ces deux limites valent $f(a)$.`
},
{
  id: "tvi-surjective", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "8 min",
  title: "Continue, ni minorée ni majorée, donc surjective",
  enonce: R`<p>Soit $f$ une fonction réelle continue sur un intervalle $I$. On suppose que $f$ n'est ni minorée, ni majorée. Montrer que $f$ est <span data-k="surj">surjective</span> sur $\mathbb R$.</p>`,
  decode: {
    donnees: [R`$f$ continue sur un intervalle.`, R`$f$ prend des valeurs aussi grandes et aussi petites qu'on veut.`],
    but: R`Montrer que tout réel est atteint par $f$.`,
    cles: {
      surj: R`Tout réel $y$ a au moins un antécédent : il existe $x\in I$ avec $f(x) = y$.`,
      inter: R`Un intervalle de $\mathbb R$ qui n'est ni minoré ni majoré contient des nombres plus petits et plus grands que n'importe quel $y$, donc tous les $y$ : c'est $\mathbb R$.`
    }
  },
  steps: [
    { t: "L'outil", h: R`<p>Que dire de l'image d'un intervalle par une fonction continue ?</p>`, b: R`<p>Le théorème des valeurs intermédiaires, sous sa forme « image d'un intervalle » : si $f$ est continue sur un intervalle $I$, alors $f(I)$ est un intervalle. Autrement dit : si $f$ prend deux valeurs $u$ et $v$, elle prend toutes les valeurs entre $u$ et $v$.</p>`, rappels: ["image-intervalle"] },
    { t: "Ce que dit l'hypothèse", h: R`<p>Traduis « non majorée » : pour tout $M$, il existe une valeur $>M$.</p>`, b: R`<p>« $f$ n'est pas majorée » signifie : pour tout réel $M$, il existe $x\in I$ avec $f(x)>M$. Donc $f(I)$ contient des valeurs aussi grandes qu'on veut.</p><p>« $f$ n'est pas minorée » : pour tout $m$, il existe $x$ avec $f(x)< m$. Donc $f(I)$ contient des valeurs aussi petites qu'on veut.</p>` },
    { t: "Conclusion", h: R`<p>Un intervalle contient tout ce qui est entre deux de ses éléments.</p>`, b: R`<p>Montrons que $f$ est <span data-k="surj">surjective</span> : soit $y$ un réel quelconque.</p><ul><li>$f$ n'est pas minorée : il existe $u = f(x_1)$ avec $u< y$.</li><li>$f$ n'est pas majorée : il existe $v = f(x_2)$ avec $v>y$.</li></ul><p>$f(I)$ est un intervalle qui contient $u$ et $v$, donc tout ce qui est entre les deux, en particulier $y$ : il existe $x$ avec $f(x) = y$. Ainsi <span data-k="inter">$f(I) = \mathbb R$</span> :</p><div class="sbox"><p style="margin:0;text-align:center">$f$ est surjective de $I$ sur $\mathbb R$.</p></div><p>Exemple : $x\mapsto x\cos x$ sur $[0,+\infty[$ prend toutes les valeurs réelles.</p>`, rappels: ["tvi"] }
  ],
  piege: R`Oublier l'hypothèse « $I$ est un intervalle » : sur $\mathbb R^*$, la fonction $x\mapsto\frac1x$ n'est ni minorée ni majorée, et n'atteint pas $0$.`,
  methode: R`Pour montrer qu'une fonction continue atteint une valeur, regarde son image : c'est un intervalle.`
},
{
  id: "tvi-generalise", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 4, time: "20 min",
  title: "Le théorème des valeurs intermédiaires généralisé",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb R$ continue, possédant des limites $\ell$ et $\ell'$ (finies ou infinies) en $-\infty$ et $+\infty$. Montrer que toute valeur <span data-k="strict">strictement comprise</span> entre $\ell$ et $\ell'$ est prise par $f$.</p>`,
  decode: {
    donnees: [R`$f$ continue sur $\mathbb R$.`, R`$f\to\ell$ en $-\infty$ et $f\to\ell'$ en $+\infty$, avec $\ell,\ell'$ dans $\mathbb R\cup\{\pm\infty\}$.`],
    but: R`Pour tout $y$ strictement entre $\ell$ et $\ell'$, trouver $x$ avec $f(x) = y$.`,
    cles: {
      strict: R`Les valeurs $\ell$ et $\ell'$ elles-mêmes ne sont pas forcément atteintes, par exemple pour $\arctan$, dont les limites sont $\pm\frac\pi2$.`,
      quitte: R`Si $\ell>\ell'$, on applique le raisonnement à $-f$, dont les limites sont $-\ell<-\ell'$. On ne perd donc rien à supposer $\ell<\ell'$.`
    }
  },
  steps: [
    { t: "Se simplifier la vie", h: R`<p>Commence par les cas simples : $\ell = \ell'$, et réduis-toi à $\ell<\ell'$.</p>`, b: R`<p>Si $\ell = \ell'$, il n'y a aucune valeur <span data-k="strict">strictement comprise</span> entre les deux : rien à montrer.</p><p>Sinon, <span data-k="quitte">quitte à remplacer $f$ par $-f$</span> (ce qui change $\ell$, $\ell'$ en $-\ell$, $-\ell'$ et échange leur ordre), on peut supposer $\ell< \ell'$. Soit $y\in\,]\ell,\ell'[$. On cherche $x$ avec $f(x) = y$.</p><p>Plan : trouver un point $a$ où $f(a)< y$ et un point $b$ où $f(b)>y$, puis appliquer le TVI entre les deux.</p>` },
    { t: "f passe sous y", h: R`<p>Par l'absurde : si $f\geqslant y$ partout, que donne le passage à la limite en $-\infty$ ?</p>`, b: R`<p>Montrons qu'il existe $a$ avec $f(a)< y$. Par l'absurde : supposons $f(x)\geqslant y$ pour tout $x$. En passant à la limite quand $x\to-\infty$ dans cette inégalité large, on obtient $\ell\geqslant y$. (Si $\ell = -\infty$, c'est directement absurde.) Or $y>\ell$ : contradiction.</p><p>Intuition : $f$ s'approche de $\ell< y$ en $-\infty$, donc finit par passer sous $y$.</p>`, rappels: ["absurde", "passage-limite"] },
    { t: "f passe au-dessus de y", h: R`<p>Même raisonnement en $+\infty$.</p>`, b: R`<p>De même, si $f(x)\leqslant y$ pour tout $x$, la limite en $+\infty$ donne $\ell'\leqslant y$, ce qui contredit $y< \ell'$. Il existe donc $b$ avec $f(b)>y$.</p>`, rappels: ["absurde"] },
    { t: "Appliquer le TVI", h: R`<p>Tu as un point sous $y$ et un point au-dessus : TVI.</p>`, b: R`<p>$f$ est continue sur l'intervalle d'extrémités $a$ et $b$, et $f(a)< y< f(b)$. Par le théorème des valeurs intermédiaires, il existe $x$ entre $a$ et $b$ avec $f(x) = y$.</p><div class="sbox"><p style="margin:0;text-align:center">Toute valeur strictement entre $\ell$ et $\ell'$ est atteinte par $f$.</p></div><p>Exemple : $\arctan$ tend vers $-\frac\pi2$ et $\frac\pi2$, et prend toutes les valeurs de $]-\frac\pi2,\frac\pi2[$. Les bornes elles-mêmes ne sont pas forcément atteintes (ici, jamais).</p>`, rappels: ["tvi"] }
  ],
  piege: R`Appliquer le TVI « entre $-\infty$ et $+\infty$ » : le théorème demande deux points réels. Il faut d'abord trouver $a$ et $b$.`,
  methode: R`Pour utiliser une limite dans un TVI, trouve un point réel où $f$ est déjà assez proche de cette limite.`,
  viz: { type: "plot", title: "arctan atteint tout ce qui est strictement entre −π/2 et π/2", x: [-10, 10], y: [-2, 2], xlabel: "x", curves: [{ label: "arctan x", f: x => Math.atan(x) }], hlines: [{ y: () => Math.PI / 2, label: "π/2, jamais atteint" }, { y: () => -Math.PI / 2, label: "−π/2" }] }
}
]);

LEMME.exercises([
{
  id: "tvi-point-fixe-a", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 2, time: "10 min",
  title: "Point fixe quand f([a, b]) ⊂ [a, b]",
  enonce: R`<p>Soit $f : [a,b]\to\mathbb R$ continue telle que $f([a,b])\subset[a,b]$. Montrer que $f$ admet <span data-k="pf">un point fixe</span>.</p>`,
  decode: {
    donnees: [R`$f$ continue sur $[a,b]$.`, R`Pour tout $x\in[a,b]$, $f(x)\in[a,b]$.`],
    but: R`Trouver $x\in[a,b]$ tel que $f(x) = x$.`,
    cles: {
      pf: R`Un réel $x$ tel que $f(x) = x$. Graphiquement, c'est un point où la courbe de $f$ croise la droite $y = x$.`,
      phi: R`On transforme l'équation $f(x) = x$ en $\varphi(x) = 0$, avec $\varphi(x) = f(x)-x$.`
    }
  },
  steps: [
    { t: "La fonction auxiliaire", h: R`<p>Un point fixe vérifie $f(x) = x$, c'est-à-dire $f(x)-x = 0$.</p>`, b: R`<p>Un <span data-k="pf">point fixe</span> est un $x$ tel que $f(x) = x$ : sur le dessin, le graphe de $f$ croise la diagonale $y = x$. On transforme en recherche de zéro : <span data-k="phi">$\varphi(x) = f(x)-x$</span> sur $[a,b]$. Un point fixe de $f$ est un zéro de $\varphi$.</p><p>$\varphi$ est continue comme différence de deux fonctions continues.</p>`, rappels: ["continuite-operations"] },
    { t: "Signe en a", h: R`<p>$f(a)$ est dans $[a,b]$ : donc $f(a)\geqslant\,?$</p>`, b: R`<p>Par hypothèse $f([a,b])\subset[a,b]$, donc $f(a)\in[a,b]$, en particulier $f(a)\geqslant a$. Ainsi</p>$$\varphi(a) = f(a)-a\geqslant0.$$<p>Le graphe part au-dessus (ou sur) la diagonale.</p>` },
    { t: "Signe en b", h: R`<p>$f(b)$ est dans $[a,b]$ : donc $f(b)\leqslant\,?$</p>`, b: R`<p>De même $f(b)\in[a,b]$, donc $f(b)\leqslant b$ et</p>$$\varphi(b) = f(b)-b\leqslant0.$$<p>Le graphe finit en dessous (ou sur) la diagonale.</p>` },
    { t: "Conclusion", h: R`<p>Une fonction continue qui passe d'un signe $\geqslant0$ à un signe $\leqslant0$.</p>`, b: R`<p>$\varphi$ est continue sur $[a,b]$, $\varphi(a)\geqslant0\geqslant\varphi(b)$ : $0$ est compris entre $\varphi(a)$ et $\varphi(b)$. Par le TVI, il existe $x\in[a,b]$ avec $\varphi(x) = 0$ :</p><div class="sbox">$$\exists x\in[a,b],\quad f(x) = x.$$</div><p>Exemple : $f = \cos$ envoie $[0,1]$ dans $[\cos1,1]\subset[0,1]$ : il existe $x$ avec $\cos x = x$.</p>`, rappels: ["tvi"] }
  ],
  piege: R`Oublier que $\varphi(a)$ et $\varphi(b)$ peuvent être nuls : les inégalités sont larges, et le TVI s'applique quand même.`,
  methode: R`Pour un point fixe, étudie $\varphi(x) = f(x)-x$ et montre qu'elle change de signe.`,
  viz: { type: "plot", title: "cos envoie [0, 1] dans [0, 1] : sa courbe croise y = x", x: [0, 1], y: [0, 1], xlabel: "x", curves: [{ label: "cos x", f: x => Math.cos(x) }, { label: "y = x", f: x => x }], vlines: [{ x: () => 0.739085, label: "point fixe ≈ 0,739" }] }
},
{
  id: "tvi-point-fixe-b", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "10 min",
  title: "Point fixe quand [a, b] ⊂ f([a, b])",
  enonce: R`<p>Soit $f : [a,b]\to\mathbb R$ continue telle que $[a,b]\subset f([a,b])$. Montrer que $f$ admet un point fixe.</p>`,
  decode: {
    donnees: [R`$f$ continue sur $[a,b]$.`, R`Tout réel de $[a,b]$ est atteint par $f$.`],
    but: R`Trouver $x\in[a,b]$ tel que $f(x) = x$.`,
    cles: {
      atteint: R`$a\in f([a,b])$ veut dire qu'il existe $\alpha\in[a,b]$ avec $f(\alpha) = a$.`
    }
  },
  steps: [
    { t: "La fonction auxiliaire", h: R`<p>On cherche $x$ avec $f(x) = x$ : quelle fonction doit s'annuler ?</p>`, b: R`<p>Comme dans la version précédente, on pose $\varphi(x) = f(x)-x$ sur $[a,b]$, continue (différence de fonctions continues). Un point fixe de $f$ est un zéro de $\varphi$.</p><p>Différence : cette fois, on ne sait rien de $f(a)$ et $f(b)$. Il faut trouver d'autres points où $\varphi$ a un signe connu.</p>`, rappels: ["continuite-operations"] },
    { t: "Utiliser l'hypothèse", h: R`<p>$[a,b]\subset f([a,b])$ : $a$ et $b$ ont donc chacun un antécédent.</p>`, b: R`<p>L'hypothèse $[a,b]\subset f([a,b])$ dit que toute valeur de $[a,b]$ est prise par $f$. En particulier $a$ et $b$ sont <span data-k="atteint">atteints</span> : il existe $\alpha,\beta\in[a,b]$ avec</p>$$f(\alpha) = a,\qquad f(\beta) = b.$$` },
    { t: "Les signes", h: R`<p>Calcule $\varphi$ en ces deux antécédents. Rappel : ils sont dans $[a,b]$.</p>`, b: R`$$\varphi(\alpha) = f(\alpha)-\alpha = a-\alpha\leqslant0,\qquad\varphi(\beta) = f(\beta)-\beta = b-\beta\geqslant0,$$<p>car $\alpha\geqslant a$ et $\beta\leqslant b$ (ils sont dans $[a,b]$).</p>` },
    { t: "Conclusion", h: R`<p>Changement de signe d'une fonction continue.</p>`, b: R`<p>$\varphi$ est continue sur le segment d'extrémités $\alpha$ et $\beta$ (inclus dans $[a,b]$), avec $\varphi(\alpha)\leqslant0\leqslant\varphi(\beta)$. Par le TVI, elle s'annule entre $\alpha$ et $\beta$ :</p><div class="sbox">$$\exists x\in[a,b],\quad f(x) = x.$$</div><p>Exemple : $f(x) = 2x$ sur $[0,1]$ a pour image $[0,2]\supset[0,1]$, et $0$ est un point fixe.</p>`, rappels: ["tvi"] }
  ],
  piege: R`Évaluer $\varphi$ en $a$ et $b$ comme dans l'autre cas : ici on ne connaît pas le signe de $f(a)-a$. Il faut les points $\alpha$ et $\beta$.`,
  methode: R`Choisis les points où évaluer la fonction auxiliaire en fonction de ce que dit l'hypothèse.`
},
{
  id: "tvi-cordes", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "20 min",
  title: "Le théorème des cordes horizontales",
  enonce: R`<p>Soit $f : [0,1]\to\mathbb R$ continue avec $f(0) = f(1)$. Montrer que pour tout $n\in\mathbb N^*$, il existe $x_0\in\left[0,1-\frac1n\right]$ tel que</p>$$f(x_0) = f\left(x_0+\frac1n\right).$$`,
  decode: {
    donnees: [R`$f$ continue et $f(0) = f(1)$.`],
    but: R`Trouver deux points séparés de $\frac1n$ où $f$ prend la même valeur.`,
    cles: {
      corde: R`Graphiquement : un segment horizontal de longueur $\frac1n$ dont les deux extrémités sont sur la courbe.`,
      somme: R`On additionne $\varphi$ en $0,\frac1n,\frac2n,\dots,\frac{n-1}n$. Les termes se simplifient deux à deux.`
    }
  },
  steps: [
    { t: "La fonction auxiliaire", h: R`<p>On cherche $x$ où $f(x+\frac1n)-f(x)$ s'annule : nomme cette fonction.</p>`, b: R`<p>Soit $n\geqslant1$. On veut deux points d'abscisses $x_0$ et $x_0+\frac1n$ à la même hauteur : une <span data-k="corde">corde horizontale</span> de longueur $\frac1n$. On pose, pour $x\in\left[0,1-\frac1n\right]$ (pour que $x+\frac1n\leqslant1$) :</p>$$\varphi(x) = f\Big(x+\frac1n\Big)-f(x).$$<p>$\varphi$ est continue (différence et composée de fonctions continues), et on cherche un zéro de $\varphi$.</p>`, rappels: ["continuite-operations"] },
    { t: "Une somme télescopique", h: R`<p>Additionne $\varphi(0)+\varphi(\frac1n)+\dots+\varphi(\frac{n-1}n)$ : presque tout se simplifie.</p>`, b: R`<p>On calcule <span data-k="somme">la somme</span> de $\varphi$ aux $n$ points $0,\frac1n,\dots,\frac{n-1}n$ :</p>$$\sum_{k=0}^{n-1}\varphi\Big(\frac kn\Big) = \Big(f\big(\tfrac1n\big)-f(0)\Big)+\Big(f\big(\tfrac2n\big)-f\big(\tfrac1n\big)\Big)+\dots+\Big(f(1)-f\big(\tfrac{n-1}n\big)\Big).$$<p>Chaque $f\big(\frac kn\big)$ intermédiaire apparaît une fois avec $+$ et une fois avec $-$ : tout se télescope. Il reste</p>$$\sum_{k=0}^{n-1}\varphi\Big(\frac kn\Big) = f(1)-f(0) = 0.$$`, rappels: ["telescopage"] },
    { t: "Les signes", h: R`<p>Des nombres de somme nulle : peuvent-ils être tous $>0$ ?</p>`, b: R`<p>Une somme de nombres tous $>0$ est $>0$ ; une somme de nombres tous $< 0$ est $< 0$. Notre somme est nulle : les $\varphi\big(\frac kn\big)$ ne sont ni tous $>0$, ni tous $< 0$. Il existe donc $i$ et $j$ avec</p>$$\varphi\Big(\frac in\Big)\leqslant0\qquad\text{et}\qquad\varphi\Big(\frac jn\Big)\geqslant0.$$` },
    { t: "Conclusion", h: R`<p>Tu as un point où $\varphi\leqslant0$ et un où $\varphi\geqslant0$.</p>`, b: R`<p>$\varphi$ est continue sur le segment d'extrémités $\frac in$ et $\frac jn$, inclus dans $\left[0,1-\frac1n\right]$, et change de signe. Par le TVI, elle s'annule en un $x_0$ :</p><div class="sbox">$$f(x_0) = f\Big(x_0+\frac1n\Big).$$</div><p>Image concrète : un randonneur qui part et revient à la même altitude passe forcément par deux points à la même altitude distants de $\frac12$, $\frac13$, … du trajet. (Ça ne marche pas pour $0{,}4$, qui n'est pas de la forme $\frac1n$.)</p>`, rappels: ["tvi"] }
  ],
  piege: R`Évaluer $\varphi$ seulement en $0$ et en $1-\frac1n$ : rien ne garantit un changement de signe entre ces deux points.`,
  methode: R`Quand on cherche un zéro sans connaître de signes, additionne les valeurs en des points bien choisis : une somme nulle force un changement de signe.`,
  viz: {
    type: "plot", title: "Une corde horizontale de longueur 1/n existe toujours", x: [0, 1], y: [-1.6, 1.6], xlabel: "x",
    params: [{ k: "n", label: "n", min: 1, max: 8, step: 1, v: 3 }],
    curves: [{ label: "f(x)", f: x => Math.sin(2 * Math.PI * x) + 2.4 * x * (1 - x) - 0.3 * Math.sin(6 * Math.PI * x) }, { label: "f(x + 1/n)", f: (x, p) => { const y = x + 1 / p.n; return x > 1 - 1 / p.n + 1e-9 ? NaN : Math.sin(2 * Math.PI * y) + 2.4 * y * (1 - y) - 0.3 * Math.sin(6 * Math.PI * y); } }]
  }
},
{
  id: "ba-limite-finie-bornee", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 3, time: "12 min",
  title: "Continue avec une limite finie, donc bornée",
  enonce: R`<p>Soit $f : [0,+\infty[\,\to\mathbb R$ continue, admettant une limite finie $\ell$ en $+\infty$. Montrer que $f$ est <span data-k="bornee">bornée</span>.</p>`,
  decode: {
    donnees: [R`$f$ continue sur $[0,+\infty[$, qui n'est pas un segment.`, R`$f(x)\to\ell$ réel quand $x\to+\infty$.`],
    but: R`Trouver $M$ avec $|f(x)|\leqslant M$ pour tout $x\geqslant0$.`,
    cles: {
      bornee: R`Il existe $M$ tel que $|f(x)|\leqslant M$ pour tout $x$ du domaine.`,
      coupe: R`On sépare $[0,+\infty[$ en deux morceaux : $[0,A]$, un segment, et $[A,+\infty[$, où la limite contrôle $f$.`
    }
  },
  steps: [
    { t: "La stratégie", h: R`<p>Bornes atteintes : seulement sur un segment. Coupe $[0,+\infty[$ en $[0,A]$ et $[A,+\infty[$.</p>`, b: R`<p>On veut montrer que $f$ est <span data-k="bornee">bornée</span> : il existe $M$ avec $|f(x)|\leqslant M$ pour tout $x\geqslant0$.</p><p>Le théorème des bornes atteintes ne s'applique que sur un <b>segment</b>, et $[0,+\infty[$ n'en est pas un. On <span data-k="coupe">coupe</span> le domaine en deux morceaux :</p><ul><li>loin ($x\geqslant A$) : $f$ est proche de $\ell$, donc bornée ;</li><li>près ($x\in[0,A]$) : c'est un segment, $f$ continue y est bornée.</li></ul>`, rappels: ["bornes-atteintes"] },
    { t: "Loin, grâce à la limite", h: R`<p>Définition de la limite avec $\varepsilon = 1$, puis inégalité triangulaire.</p>`, b: R`<p>Par définition de $f(x)\to\ell$, pour $\varepsilon = 1$ il existe $A\geqslant0$ tel que</p>$$x\geqslant A\implies|f(x)-\ell|\leqslant1.$$<p>Pour ces $x$, par l'inégalité triangulaire ($f(x) = (f(x)-\ell)+\ell$) :</p>$$|f(x)|\leqslant|f(x)-\ell|+|\ell|\leqslant1+|\ell| = M_1.$$`, rappels: ["def-limite-finie", "inegalite-triangulaire"] },
    { t: "Près de 0, grâce à la continuité", h: R`<p>Sur un segment, une fonction continue est bornée.</p>`, b: R`<p>$[0,A]$ est un segment et $f$ y est continue. Par le théorème des bornes atteintes, elle y est bornée : il existe $M_2$ avec $|f(x)|\leqslant M_2$ pour tout $x\in[0,A]$.</p>`, rappels: ["bornes-atteintes"] },
    { t: "Conclusion", h: R`<p>Prends le plus grand des deux majorants.</p>`, b: R`<p>On pose $M = \max(M_1,M_2)$. Tout $x\geqslant0$ est dans $[0,A]$ ou dans $[A,+\infty[$, donc $|f(x)|\leqslant M$ :</p><div class="sbox"><p style="margin:0;text-align:center">$f$ est bornée sur $[0,+\infty[$.</p></div><p>Contre-exemple sans limite : $x\mapsto x$ est continue et non bornée. Sans continuité : $x\mapsto\frac1x$ prolongée par $0$ en $0$ tend vers $0$ en $+\infty$ mais n'est pas bornée près de $0$.</p>` }
  ],
  piege: R`Appliquer le théorème des bornes atteintes sur $[0,+\infty[$ : ce n'est pas un segment, et $x\mapsto x$ y est continue sans être bornée.`,
  methode: R`Pour borner une fonction sur un intervalle infini : la limite contrôle la fonction loin, la continuité sur un segment contrôle le reste.`
},
{
  id: "ba-periodique-bornee", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "6 min",
  title: "Une fonction continue périodique est bornée",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb R$ continue et périodique de période $T>0$. Montrer que $f$ est bornée.</p>`,
  decode: {
    donnees: [R`$f$ continue sur $\mathbb R$.`, R`$f(x+T) = f(x)$ pour tout $x$.`],
    but: R`Trouver un majorant de $|f|$ valable sur tout $\mathbb R$.`,
    cles: {
      periode: R`Tout réel $x$ s'écrit $x = y+nT$ avec $y\in[0,T[$ et $n\in\mathbb Z$, et alors $f(x) = f(y)$.`
    }
  },
  steps: [
    { t: "Se ramener à une période", h: R`<p>Tout réel $x$ s'écrit $x = y+kT$ avec $y\in[0,T]$ et $k\in\mathbb Z$.</p>`, b: R`<p>Soit $x\in\mathbb R$. On pose $k = \big\lfloor\frac xT\big\rfloor\in\mathbb Z$ et $y = x-kT$. Comme $k\leqslant\frac xT< k+1$, on a $0\leqslant y< T$. Par <span data-k="periode">périodicité</span> ($k$ fois) :</p>$$f(x) = f(y+kT) = f(y),\qquad y\in[0,T[.$$<p>Toute valeur de $f$ sur $\mathbb R$ est déjà prise sur $[0,T]$ : $f(\mathbb R) = f([0,T])$.</p>`, rappels: ["periodique"] },
    { t: "Borner sur la période", h: R`<p>$[0,T]$ est un segment.</p>`, b: R`<p>$[0,T]$ est un segment et $f$ y est continue. Par le théorème des bornes atteintes, il existe $M$ avec $|f(y)|\leqslant M$ pour tout $y\in[0,T]$.</p>`, rappels: ["bornes-atteintes"] },
    { t: "Conclusion", h: R`<p>$f(x) = f(y)$ avec $y\in[0,T]$.</p>`, b: R`<p>Pour tout $x$ réel, $|f(x)| = |f(y)|\leqslant M$ :</p><div class="sbox"><p style="margin:0;text-align:center">$f$ est bornée sur $\mathbb R$ (et atteint ses bornes).</p></div><p>Sans continuité, c'est faux : $\tan$ est $\pi$-périodique mais pas bornée (elle n'est pas définie, ni continue, partout).</p>` }
  ],
  piege: R`Appliquer directement les bornes atteintes sur $\mathbb R$ : ce n'est pas un segment.`,
  methode: R`Une fonction périodique se comprend entièrement sur une période. Ramène toujours l'étude à $[0,T]$.`
},
{
  id: "ba-periodique-demi", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "20 min",
  title: "Toutes les valeurs sur une demi-période",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb R$ continue et périodique de période $T>0$. Justifier l'existence d'un réel $x$ tel que</p>$$f\big([x,x+T/2]\big) = \operatorname{Im}(f).$$`,
  decode: {
    donnees: [R`$f$ continue et $T$-périodique : elle est bornée et atteint son minimum et son maximum.`],
    but: R`Trouver une fenêtre de longueur $\frac T2$ sur laquelle $f$ prend toutes ses valeurs.`,
    cles: {
      im: R`$\operatorname{Im}(f) = f(\mathbb R)$ est l'ensemble de toutes les valeurs prises par $f$.`,
      ab: R`$a$ est un point où $f$ atteint son minimum, et $b$ un point où elle atteint son maximum.`,
      quitte: R`Remplacer $b$ par $b+T$ ne change pas $f(b)$, par périodicité. On peut donc toujours placer $b$ dans $[a,a+T]$.`
    }
  },
  steps: [
    { t: "L'image de f", h: R`<p>Par périodicité, $\operatorname{Im}f = f([0,T])$, et sur un segment une fonction continue atteint son min et son max.</p>`, b: R`<p>Par périodicité (exercice précédent), toutes les valeurs de $f$ sont prises sur $[0,T]$ : $\operatorname{Im}f = f([0,T])$.</p><p>Sur le segment $[0,T]$, $f$ est continue : par le théorème des bornes atteintes, elle a un minimum $m$ et un maximum $M$, atteints en des points $a$ et $b$ : <span data-k="ab">$m = f(a)$ et $M = f(b)$</span>. Et par le TVI, $f([0,T])$ est un intervalle, donc</p>$$\operatorname{Im}f = [m,M].$$<p>C'est <span data-k="im">l'image de $f$</span>.</p>`, rappels: ["periodique"] },
    { t: "Le principe", h: R`<p>L'image d'un intervalle par une fonction continue est un intervalle.</p>`, b: R`<p>Supposons qu'une fenêtre $[x,x+\frac T2]$ contienne un point où $f$ vaut $m$ et un point où $f$ vaut $M$. Alors $f\big([x,x+\frac T2]\big)$ est un intervalle (image d'un intervalle par une fonction continue) qui contient $m$ et $M$, donc tout $[m,M]$. Et il est contenu dans $\operatorname{Im}f = [m,M]$. Donc</p>$$f\big([x,x+\tfrac T2]\big) = [m,M] = \operatorname{Im}f.$$<p>Il suffit donc de trouver une demi-période qui contient un point du min et un point du max.</p>`, rappels: ["image-intervalle"] },
    { t: "Premier cas", h: R`<p>Regarde où se trouve $b$ par rapport à $a+\frac T2$.</p>`, b: R`<p><b>Si $b\in[a,a+\frac T2]$</b> : la fenêtre $[a,a+\frac T2]$ contient $a$ (où $f = m$) et $b$ (où $f = M$). Par le principe, $x = a$ convient.</p>` },
    { t: "Second cas", h: R`<p>Utilise $f(a+T) = f(a)$.</p>`, b: R`<p><b>Sinon</b>, $b\in\,]a+\frac T2,a+T]$. Regardons la fenêtre $[a+\frac T2,a+T]$ : elle contient $b$ (où $f = M$) et $a+T$, où $f(a+T) = f(a) = m$ par périodicité. Par le principe, $x = a+\frac T2$ convient.</p><div class="sbox"><p style="margin:0;text-align:center">Il existe $x$ tel que $f\big([x,x+\frac T2]\big) = \operatorname{Im}f$.</p></div><p>Exemple : pour $\sin$ ($T = 2\pi$), la fenêtre $[-\frac\pi2,\frac\pi2]$ de longueur $\pi$ donne bien toutes les valeurs de $[-1,1]$.</p>`, rappels: ["periodique"] }
  ],
  piege: R`Oublier de justifier que l'image d'une fenêtre est un intervalle : c'est ce qui permet de passer de « contient $m$ et $M$ » à « contient tout $[m,M]$ ».`,
  methode: R`Pour qu'un intervalle atteigne toutes les valeurs, il suffit qu'il contienne un point de minimum et un point de maximum.`
},
{
  id: "tvi-extremum-translation", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "25 min",
  title: "Translations qui laissent une valeur inchangée",
  enonce: R`<p>Soit $f : [a,b]\to\mathbb R$ continue avec $f(a) = f(b)$ et $a< b$. Montrer qu'il existe $\alpha>0$ tel que</p>$$\forall t\in[0,\alpha],\ \exists x\in[a,b-\alpha],\quad f(x+t) = f(x).$$`,
  decode: {
    donnees: [R`$f$ continue sur $[a,b]$, avec la même valeur aux deux bouts.`],
    but: R`Pour tout décalage $t$ assez petit, trouver $x$ tel que $f$ prenne la même valeur en $x$ et en $x+t$.`,
    cles: {
      interieur: R`Comme $f(a) = f(b)$ et $f$ non constante, $f$ dépasse $f(a)$ vers le haut ou vers le bas : son maximum ou son minimum est atteint strictement entre $a$ et $b$.`,
      moinsf: R`Si c'est le minimum qui est intérieur, on travaille avec $-f$, dont le maximum est alors intérieur.`,
      alpha: R`$\alpha$ est choisi pour que $[c-\alpha,c+\alpha]$ reste dans $[a,b]$.`
    }
  },
  steps: [
    { t: "Le cas facile", h: R`<p>Commence par le cas où $f$ est constante.</p>`, b: R`<p>Si $f$ est constante, $f(x+t) = f(x)$ pour tous $x,t$ : n'importe quel $\alpha\in\,]0,b-a]$ convient (avec par exemple $x = a$).</p><p>On suppose désormais $f$ non constante.</p>` },
    { t: "Un extremum intérieur", h: R`<p>Si $f$ n'est pas constante et $f(a) = f(b)$, le max ou le min est atteint strictement entre $a$ et $b$.</p>`, b: R`<p>Sur le segment $[a,b]$, $f$ continue atteint son maximum $M$ et son minimum $m$, avec $m< M$ (car $f$ non constante). La valeur commune $f(a) = f(b)$ ne peut pas être égale à la fois à $m$ et à $M$. Donc l'un des deux est <span data-k="interieur">atteint en un point intérieur</span> $c\in\,]a,b[$.</p><p><span data-k="moinsf">Quitte à remplacer $f$ par $-f$</span> (ce qui échange max et min et ne change pas la conclusion $f(x+t) = f(x)$), on suppose que c'est le maximum : $f(c) = M$, $c\in\,]a,b[$.</p>`, rappels: ["bornes-atteintes"] },
    { t: "Choisir α", h: R`<p>Il faut pouvoir se décaler de $\alpha$ à gauche et à droite de $c$ sans sortir de $[a,b]$.</p>`, b: R`<p>On pose <span data-k="alpha">$\alpha = \min(c-a,b-c)$</span>, strictement positif car $a< c< b$. Alors $c-\alpha\geqslant a$ et $c+\alpha\leqslant b$ :</p>$$[c-\alpha,c+\alpha]\subset[a,b].$$` },
    { t: "La fonction auxiliaire", h: R`<p>Compare $f(c)$ à ses voisins : $c$ est un maximum.</p>`, b: R`<p>Soit $t\in[0,\alpha]$. Sur $[c-t,c]$, on pose $g(x) = f(x+t)-f(x)$, continue. Aux deux bouts, on utilise que $f(c) = M$ est le maximum :</p>$$g(c-t) = f(c)-f(c-t) = M-f(c-t)\geqslant0,\qquad g(c) = f(c+t)-f(c) = f(c+t)-M\leqslant0.$$`, rappels: ["continuite-operations"] },
    { t: "Conclusion", h: R`<p>TVI sur $g$, puis vérifie que $x$ est bien dans $[a,b-\alpha]$.</p>`, b: R`<p>$g$ passe de $\geqslant0$ à $\leqslant0$ sur $[c-t,c]$ : par le TVI, il existe $x\in[c-t,c]$ avec $g(x) = 0$, soit $f(x+t) = f(x)$.</p><p>Vérifions que $x\in[a,b-\alpha]$ : $x\geqslant c-t\geqslant c-\alpha\geqslant a$, et $x\leqslant c\leqslant b-\alpha$ (car $\alpha\leqslant b-c$).</p><div class="sbox">$$\forall t\in[0,\alpha],\ \exists x\in[a,b-\alpha],\quad f(x+t) = f(x).$$</div>`, rappels: ["tvi"] }
  ],
  piege: R`Oublier de vérifier que le $x$ trouvé est bien dans $[a,b-\alpha]$ : c'est le choix de $\alpha$ qui le garantit.`,
  methode: R`Autour d'un maximum, $f$ monte puis descend : la fonction $x\mapsto f(x+t)-f(x)$ y change de signe.`
},
{
  id: "ct-max-glissant", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "30 min",
  title: "Le maximum glissant est continu",
  enonce: R`<p>Soit $f : [0,+\infty[\,\to\mathbb R$ continue. Pour $x\geqslant0$, on pose $g(x) = \displaystyle\max_{t\in[0,x]}f(t)$. Montrer que $g$ est définie, continue et croissante.</p>`,
  decode: {
    donnees: [R`$f$ continue sur $[0,+\infty[$.`, R`$g(x)$ est le plus grand des $f(t)$ pour $t$ entre $0$ et $x$.`],
    but: R`Trois propriétés : $g$ existe, elle est croissante, elle est continue.`,
    cles: {
      glissant: R`$g(x)$ est le record de $f$ atteint jusqu'à l'instant $x$. Il ne peut que monter avec le temps.`,
      cas: R`Soit $f$ est en train de battre son record en $a$ ($f(a) = g(a)$), soit elle est en dessous ($f(a)< g(a)$).`,
      alpha: R`On choisit $\alpha\leqslant a$ pour que $[a-\alpha,a+\alpha]$ reste dans $[0,+\infty[$.`
    }
  },
  steps: [
    { t: "g est bien définie", h: R`<p>Une fonction continue sur un segment atteint son maximum.</p>`, b: R`<p>Pour $x\geqslant0$, $[0,x]$ est un segment et $f$ y est continue : par le théorème des bornes atteintes, $f$ y atteint son maximum. $g(x) = \max_{[0,x]}f$ existe. (Pour $x = 0$ : $g(0) = f(0)$.)</p>`, rappels: ["bornes-atteintes"] },
    { t: "g est croissante", h: R`<p>Plus l'ensemble est grand, plus le maximum est grand.</p>`, b: R`<p>Si $0\leqslant x\leqslant y$, alors $[0,x]\subset[0,y]$. Le maximum sur un ensemble plus grand est au moins aussi grand : $g(x)\leqslant g(y)$. $g$ est croissante.</p><p>Image : $g(x)$ est le <span data-k="glissant">record</span> de $f$ atteint jusqu'à l'instant $x$. Un record ne peut que monter.</p>` },
    { t: "Continuité : deux cas", h: R`<p>Deux situations : en $a$, $f$ est en train de battre son record, ou non.</p>`, b: R`<p>Soit $a>0$ (le cas $a = 0$ se traite de même, à droite seulement). On a toujours $f(a)\leqslant g(a)$. On <span data-k="cas">distingue</span> :</p><ul><li>$f(a)< g(a)$ : en $a$, $f$ est sous son record, qui a été atteint plus tôt ;</li><li>$f(a) = g(a)$ : en $a$, $f$ est exactement sur son record.</li></ul>` },
    { t: "Cas f(a) < g(a)", h: R`<p>Si $f(a)$ est strictement sous le record, $f$ reste sous le record autour de $a$.</p>`, b: R`<p>Le record $g(a)$ est atteint en un $t_0\in[0,a]$ : $f(t_0) = g(a)$. Par continuité de $f$ en $a$ (avec $\varepsilon = g(a)-f(a)>0$), il existe <span data-k="alpha">$\alpha>0$</span> tel que $f(x)< g(a)$ pour $x\in[a-\alpha,a+\alpha]$. En particulier $t_0\notin[a-\alpha,a]$, donc $t_0< a-\alpha$.</p><ul><li>Pour $x\in[a-\alpha,a]$ : $t_0\in[0,x]$ donc $g(x)\geqslant f(t_0) = g(a)$, et $g(x)\leqslant g(a)$ par croissance : $g(x) = g(a)$.</li><li>Pour $x\in[a,a+\alpha]$ : sur $[a,x]$, $f< g(a)$, donc le max sur $[0,x]$ reste $g(a)$.</li></ul><p>$g$ est constante sur $[a-\alpha,a+\alpha]$, donc continue en $a$.</p>`, rappels: ["continuite-operations"] },
    { t: "Cas f(a) = g(a) : encadrer", h: R`<p>Écris la continuité de $f$ en $a$ avec $\varepsilon$, et encadre $g(a-\alpha)$ et $g(a+\alpha)$.</p>`, b: R`<p>Soit $\varepsilon>0$. Par continuité de $f$ en $a$, il existe $\alpha>0$ avec $f(a)-\varepsilon\leqslant f(x)\leqslant f(a)+\varepsilon$ sur $[a-\alpha,a+\alpha]$. Avec $f(a) = g(a)$ :</p><ul><li><b>À gauche</b> : $g(a-\alpha)\geqslant f(a-\alpha)\geqslant g(a)-\varepsilon$.</li><li><b>À droite</b> : sur $[0,a]$, $f\leqslant g(a)$ ; sur $[a,a+\alpha]$, $f\leqslant g(a)+\varepsilon$. Donc le max sur $[0,a+\alpha]$ vérifie $g(a+\alpha)\leqslant g(a)+\varepsilon$.</li></ul>` },
    { t: "Cas f(a) = g(a) : conclure", h: R`<p>$g$ est croissante : $g(x)$ est entre $g(a-\alpha)$ et $g(a+\alpha)$.</p>`, b: R`<p>Pour $x\in[a-\alpha,a+\alpha]$, par croissance de $g$ :</p>$$g(a)-\varepsilon\leqslant g(a-\alpha)\leqslant g(x)\leqslant g(a+\alpha)\leqslant g(a)+\varepsilon.$$<p>Donc $|g(x)-g(a)|\leqslant\varepsilon$ dès que $|x-a|\leqslant\alpha$ : c'est la définition de la continuité de $g$ en $a$.</p><div class="sbox"><p style="margin:0;text-align:center">$g$ est définie, croissante et continue sur $[0,+\infty[$.</p></div>` }
  ],
  piege: R`Croire que le maximum glissant est continu « parce que $f$ l'est », sans preuve : c'est vrai, mais il faut traiter le cas où le record est en train d'être battu.`,
  methode: R`Pour une fonction croissante, il suffit de contrôler deux valeurs, en $a-\alpha$ et $a+\alpha$, pour encadrer tout ce qui est entre les deux.`,
  viz: {
    type: "plot", title: "g ne fait que monter, sans jamais sauter", x: [0, 12], y: [-2, 2], xlabel: "x",
    curves: [{ label: "f", f: x => Math.sin(x) + 0.6 * Math.sin(2.7 * x) }, { label: "g = max de f sur [0, x]", f: x => { let m = -Infinity; for (let k = 0; k <= 300; k++) { const t = x * k / 300; m = Math.max(m, Math.sin(t) + 0.6 * Math.sin(2.7 * t)); } return m; } }]
  }
}
]);

LEMME.exercises([
{
  id: "ef-f2x-fx", subj: "maths", year: "mpsi", chap: 7, level: 3, time: "12 min",
  title: "Les fonctions telles que f(2x) = f(x)",
  enonce: R`<p>Déterminer les fonctions $f : \mathbb R\to\mathbb R$ <span data-k="cont0">continues en $0$</span> vérifiant $f(2x) = f(x)$ pour tout réel $x$.</p>`,
  decode: {
    donnees: [R`Une équation fonctionnelle : $f(2x) = f(x)$.`, R`$f$ est continue en $0$, et seulement là.`],
    but: R`Trouver toutes les solutions.`,
    cles: {
      cont0: R`On n'utilisera la continuité qu'en un seul point, $0$. C'est donc vers $0$ qu'il faudra « pousser » $x$.`,
      analyse: R`On suppose qu'une solution existe et on en déduit sa forme. Puis on vérifie que cette forme convient : c'est l'analyse-synthèse.`
    }
  },
  steps: [
    { t: "Analyse", h: R`<p>Remplace $x$ par $\frac x2$ dans l'équation.</p>`, b: R`<p>On procède par <span data-k="analyse">analyse-synthèse</span> : on suppose qu'une solution $f$ existe, on en déduit sa forme (analyse), puis on vérifie que cette forme convient (synthèse).</p><p>Soit $f$ une solution. L'équation $f(2u) = f(u)$ vaut pour tout $u$ ; avec $u = \frac x2$ :</p>$$f(x) = f\Big(2\cdot\frac x2\Big) = f\Big(\frac x2\Big).$$<p>On peut donc diviser l'argument par $2$ sans changer la valeur.</p>` },
    { t: "Itérer", h: R`<p>Recommence : $f(x) = f(\frac x2) = f(\frac x4) = \dots$</p>`, b: R`<p>En recommençant : $f(x) = f\big(\frac x2\big) = f\big(\frac x4\big) = f\big(\frac x8\big) = \dots$ Par récurrence sur $n$ : si $f\big(\frac x{2^n}\big) = f(x)$, alors $f\big(\frac x{2^{n+1}}\big) = f\big(\frac12\cdot\frac x{2^n}\big) = f\big(\frac x{2^n}\big) = f(x)$. Donc</p>$$f\Big(\frac x{2^n}\Big) = f(x)\quad\text{pour tout }n\in\mathbb N.$$`, rappels: ["recurrence"] },
    { t: "Passer à la limite", h: R`<p>$\frac x{2^n}\to0$ : utilise la continuité en $0$.</p>`, b: R`<p>Fixons $x$. Quand $n\to+\infty$, $\frac x{2^n}\to0$. Comme $f$ est <span data-k="cont0">continue en $0$</span>, la caractérisation séquentielle donne</p>$$f\Big(\frac x{2^n}\Big)\xrightarrow[n\to\infty]{}f(0).$$<p>Mais d'après l'étape 2, cette suite est constante, égale à $f(x)$.</p>`, rappels: ["sequentielle"] },
    { t: "Identifier", h: R`<p>Une suite constante égale à $f(x)$ qui tend vers $f(0)$.</p>`, b: R`<p>Une suite constante égale à $f(x)$ tend vers $f(x)$. Par unicité de la limite, $f(x) = f(0)$. Ceci pour tout réel $x$ : $f$ est constante.</p>`, rappels: ["unicite-limite"] },
    { t: "Synthèse", h: R`<p>N'oublie pas de vérifier que les constantes conviennent.</p>`, b: R`<p>Réciproquement, si $f(x) = c$ pour tout $x$, alors $f(2x) = c = f(x)$, et $f$ est continue en $0$.</p><div class="sbox"><p style="margin:0;text-align:center">Les solutions sont exactement les fonctions constantes.</p></div><p>Sans la continuité en $0$, il y a d'autres solutions : par exemple $f(x) = 1$ si $x$ est de la forme $2^k$ ($k\in\mathbb Z$), $0$ sinon.</p>` }
  ],
  piege: R`Oublier la synthèse : l'analyse montre seulement qu'une solution est forcément constante, pas que les constantes conviennent.`,
  methode: R`Dans une équation fonctionnelle, itère la relation pour amener la variable vers le point où tu connais la continuité.`
},
{
  id: "ef-additive", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 4, time: "30 min",
  title: "Les fonctions additives et continues",
  enonce: R`<p>Déterminer les fonctions continues $f : \mathbb R\to\mathbb R$ vérifiant</p>$$f(x+y) = f(x)+f(y)\quad\text{pour tous } x,y\in\mathbb R.\qquad(*)$$`,
  decode: {
    donnees: [R`$f$ continue sur $\mathbb R$.`, R`La relation $(*)$ pour tous $x,y$.`],
    but: R`Montrer que $f(x) = ax$ pour une constante $a$, puis vérifier la réciproque.`,
    cles: {
      choix: R`On teste la relation avec des valeurs bien choisies de $x$ et $y$ pour en tirer des informations.`,
      arith: R`$f\big((n+1)x\big) = f(nx)+f(x)$ : on ajoute $f(x)$ à chaque pas, comme une suite arithmétique.`,
      dense: R`$\frac{\lfloor nx\rfloor}n$ est rationnel et tend vers $x$ : tout réel est limite de rationnels.`
    }
  },
  steps: [
    { t: "Premières valeurs", h: R`<p>Choisis des valeurs simples : $x = y = 0$, puis $y = -x$.</p>`, b: R`<p>Soit $f$ une solution. On teste l'équation $(*)$ sur des <span data-k="choix">valeurs simples</span>.</p><ul><li>$x = y = 0$ : $f(0) = f(0)+f(0) = 2f(0)$, donc $f(0) = 0$.</li><li>$y = -x$ : $f(0) = f(x)+f(-x)$, soit $f(-x) = -f(x)$ : $f$ est impaire.</li></ul>` },
    { t: "Multiples entiers", h: R`<p>Avec $y = x$ : $f(2x) = 2f(x)$. Généralise à $f(nx)$.</p>`, b: R`<p>Avec $y = nx$ dans $(*)$ : $f\big((n+1)x\big) = f(nx)+f(x)$. La suite $\big(f(nx)\big)_{n\in\mathbb N}$ est donc <span data-k="arith">arithmétique</span> de raison $f(x)$ et de premier terme $f(0) = 0$ :</p>$$f(nx) = n\,f(x)\quad(n\in\mathbb N).$$<p>Par imparité, $f(-nx) = -f(nx) = -nf(x)$ : la formule vaut pour $n\in\mathbb Z$.</p>`, rappels: ["recurrence"] },
    { t: "Les rationnels", h: R`<p>Calcule $f(1)$ en écrivant $1 = q\times\frac1q$.</p>`, b: R`<p>On pose $a = f(1)$. Pour $q\in\mathbb N^*$, l'étape 2 avec $x = \frac1q$ et $n = q$ donne $f(1) = f\big(q\cdot\frac1q\big) = q\,f\big(\frac1q\big)$, donc $f\big(\frac1q\big) = \frac aq$. Puis pour $p\in\mathbb Z$ :</p>$$f\Big(\frac pq\Big) = f\Big(p\cdot\frac1q\Big) = p\,f\Big(\frac1q\Big) = \frac pq\,a.$$<p>Sur les rationnels, $f(r) = ar$ : $f$ est déjà linéaire, sans même utiliser la continuité.</p>` },
    { t: "Tous les réels", h: R`<p>Approche $x$ par des rationnels, par exemple $\frac{\lfloor nx\rfloor}n$.</p>`, b: R`<p>Soit $x$ réel. Le rationnel $r_n = \frac{\lfloor nx\rfloor}n$ vérifie $nx-1< \lfloor nx\rfloor\leqslant nx$, donc $x-\frac1n< r_n\leqslant x$ : <span data-k="dense">$r_n\to x$</span>.</p><ul><li>Par continuité de $f$ : $f(r_n)\to f(x)$.</li><li>Par l'étape 3 : $f(r_n) = ar_n\to ax$.</li></ul>`, rappels: ["densite", "sequentielle"] },
    { t: "Conclusion", h: R`<p>Deux expressions de la même limite.</p>`, b: R`<p>Par unicité de la limite, $f(x) = ax$ pour tout réel $x$. Réciproquement, $x\mapsto ax$ est continue et $a(x+y) = ax+ay$ :</p><div class="sbox"><p style="margin:0;text-align:center">Les solutions sont les fonctions linéaires $x\mapsto ax$, $a\in\mathbb R$.</p></div>`, rappels: ["unicite-limite"] }
  ],
  piege: R`S'arrêter aux rationnels : sans la continuité, on ne peut pas étendre $f(x) = ax$ aux irrationnels.`,
  methode: R`Équation fonctionnelle et continuité : trouve $f$ sur les entiers, puis sur les rationnels, puis étends à $\mathbb R$ par densité et continuité.`
},
{
  id: "ef-multiplicative", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "20 min",
  title: "Les fonctions continues telles que f(x + y) = f(x)f(y)",
  enonce: R`<p>Déterminer les fonctions continues $f : \mathbb R\to\mathbb R$ vérifiant</p>$$f(x+y) = f(x)f(y)\quad\text{pour tous } x,y\in\mathbb R.$$<p>On pourra utiliser le résultat sur les fonctions additives continues.</p>`,
  decode: {
    donnees: [R`$f$ continue et transforme les sommes en produits.`],
    but: R`Montrer que $f$ est nulle, ou de la forme $x\mapsto e^{ax}$.`,
    cles: {
      ln: R`Le logarithme transforme les produits en sommes : si $f>0$, alors $g = \ln f$ vérifie $g(x+y) = g(x)+g(y)$.`,
      add: R`Les fonctions continues vérifiant $g(x+y) = g(x)+g(y)$ sont exactement les $x\mapsto ax$.`
    }
  },
  steps: [
    { t: "f est positive", h: R`<p>Écris $x = \frac x2+\frac x2$.</p>`, b: R`<p>Soit $f$ une solution. Pour tout $x$, avec $x = \frac x2+\frac x2$ :</p>$$f(x) = f\Big(\frac x2\Big)f\Big(\frac x2\Big) = f\Big(\frac x2\Big)^2\geqslant0.$$<p>$f$ est positive : c'est un carré.</p>` },
    { t: "Le cas où f s'annule", h: R`<p>Si $f(x_0) = 0$, écris $x = (x-x_0)+x_0$.</p>`, b: R`<p>Supposons qu'il existe $x_0$ avec $f(x_0) = 0$. Pour tout $x$, on écrit $x = (x-x_0)+x_0$ :</p>$$f(x) = f(x-x_0)\,f(x_0) = f(x-x_0)\times0 = 0.$$<p>$f$ est la fonction nulle. Sinon, $f$ ne s'annule jamais, et avec l'étape 1 : $f>0$ partout.</p>` },
    { t: "Passer au logarithme", h: R`<p>$\ln$ transforme les produits en sommes.</p>`, b: R`<p>Si $f>0$, on pose <span data-k="ln">$g = \ln\circ f$</span>, continue (composée de fonctions continues). Le logarithme transforme les produits en sommes :</p>$$g(x+y) = \ln\big(f(x)f(y)\big) = \ln f(x)+\ln f(y) = g(x)+g(y).$$<p>$g$ est continue et additive.</p>`, rappels: ["continuite-operations"] },
    { t: "Utiliser les fonctions additives", h: R`<p>$g$ est continue et additive : résultat de l'exercice précédent.</p>`, b: R`<p>Par l'exercice sur les fonctions additives continues, <span data-k="add">il existe $a$ réel</span> tel que $g(x) = ax$ pour tout $x$. On revient à $f$ par l'exponentielle :</p>$$f(x) = e^{g(x)} = e^{ax}.$$` },
    { t: "Synthèse", h: R`<p>Vérifie que $x\mapsto e^{ax}$ et $0$ conviennent.</p>`, b: R`<p>Réciproquement : la fonction nulle convient ($0 = 0\times0$), et $e^{a(x+y)} = e^{ax}e^{ay}$.</p><div class="sbox"><p style="margin:0;text-align:center">Les solutions sont la fonction nulle et les $x\mapsto e^{ax}$, $a\in\mathbb R$.</p></div><p>Avec $b = e^a>0$ : ce sont les fonctions $x\mapsto b^x$, les « exponentielles de base $b$ ».</p>` }
  ],
  piege: R`Prendre le logarithme sans avoir vérifié que $f>0$ : il faut d'abord traiter le cas où $f$ s'annule.`,
  methode: R`Pour une équation « somme devient produit », passe au logarithme pour te ramener à une équation additive.`,
  viz: { type: "plot", title: "Les solutions non nulles : les exponentielles e^(ax)", x: [-3, 3], y: [0, 6], xlabel: "x", params: [{ k: "a", label: "a", min: -2, max: 2, step: 0.1, v: 0.7 }], curves: [{ label: "e^(ax)", f: (x, p) => Math.exp(p.a * x) }] }
},
{
  id: "ef-involution", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "20 min",
  title: "Les fonctions telles que f∘f = Id sur [0, +∞[",
  enonce: R`<p>Déterminer les fonctions continues $f : [0,+\infty[\,\to[0,+\infty[$ vérifiant $f\big(f(x)\big) = x$ pour tout $x\geqslant0$.</p>`,
  decode: {
    donnees: [R`$f$ continue de $[0,+\infty[$ dans lui-même.`, R`Appliquer $f$ deux fois redonne $x$.`],
    but: R`Montrer que la seule solution est l'identité.`,
    cles: {
      bij: R`$f\circ f = \mathrm{Id}$ dit que $f$ est sa propre réciproque : elle est donc bijective.`,
      decr: R`Une fonction décroissante sur $[0,+\infty[$ vérifie $f(x)\leqslant f(0)$ : elle ne peut pas atteindre les valeurs plus grandes que $f(0)$.`
    }
  },
  steps: [
    { t: "f est bijective", h: R`<p>$f\circ f = \mathrm{Id}$ : $f$ a un « inverse ». Lequel ?</p>`, b: R`<p>Soit $f$ une solution. La relation $f\circ f = \mathrm{Id}$ dit que $f$ admet une réciproque : elle-même. Concrètement :</p><ul><li><b>injective</b> : si $f(x) = f(y)$, on applique $f$ : $x = f(f(x)) = f(f(y)) = y$ ;</li><li><b>surjective</b> : tout $y\geqslant0$ s'écrit $y = f\big(f(y)\big)$, il a l'antécédent $f(y)$.</li></ul><p>Donc <span data-k="bij">$f$ est une bijection de $[0,+\infty[$ sur lui-même</span>.</p>` },
    { t: "f est strictement monotone", h: R`<p>Continue et injective sur un intervalle $\Rightarrow$ ?</p>`, b: R`<p>Une fonction continue et injective sur un intervalle est strictement monotone. Donc $f$ est strictement croissante ou strictement décroissante sur $[0,+\infty[$.</p>`, rappels: ["injective-monotone"] },
    { t: "f est croissante", h: R`<p>Une fonction décroissante sur $[0,+\infty[$ est majorée par $f(0)$. Peut-elle atteindre toutes les valeurs de $[0,+\infty[$ ?</p>`, b: R`<p>Si $f$ était décroissante, on aurait $f(x)\leqslant f(0)$ pour tout $x\geqslant0$. Alors $f$ ne prendrait jamais la valeur $f(0)+1$ : <span data-k="decr">elle ne serait pas surjective</span>, contradiction avec l'étape 1. Donc $f$ est strictement croissante.</p>` },
    { t: "f(x) = x", h: R`<p>Si $f(x)< x$, applique $f$ (croissante) aux deux membres.</p>`, b: R`<p>Soit $x\geqslant0$. Raisonnons par l'absurde.</p><ul><li>Si $f(x)< x$ : on applique $f$, strictement croissante, qui conserve l'ordre : $f(f(x))< f(x)$, c'est-à-dire $x< f(x)$. Contradiction avec $f(x)< x$.</li><li>Si $f(x)>x$ : de même $f(f(x))>f(x)$, soit $x>f(x)$. Contradiction.</li></ul><p>Donc $f(x) = x$.</p>`, rappels: ["absurde"] },
    { t: "Synthèse", h: R`<p>Vérifie que l'identité convient.</p>`, b: R`<p>L'identité est continue, à valeurs dans $[0,+\infty[$, et $\mathrm{Id}\circ\mathrm{Id} = \mathrm{Id}$.</p><div class="sbox"><p style="margin:0;text-align:center">La seule solution est $f = \mathrm{Id}$.</p></div><p>Sur $\mathbb R$ entier, il y en aurait d'autres : $x\mapsto-x$, ou $x\mapsto c-x$ (décroissantes, mais surjectives sur $\mathbb R$).</p>` }
  ],
  piege: R`Penser que $x\mapsto\frac1x$ ou $x\mapsto-x$ conviennent : ils vérifient bien $f\circ f = \mathrm{Id}$, mais pas sur $[0,+\infty[$ avec des valeurs dans $[0,+\infty[$.`,
  methode: R`Pour une équation fonctionnelle avec continuité, commence par montrer que $f$ est monotone, puis compare $f(x)$ et $x$.`
},
{
  id: "ap-cesaro-fonction", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "30 min",
  title: "Si f(x + 1) − f(x) → ℓ, alors f(x)/x → ℓ",
  enonce: R`<p>Soit $f : [0,+\infty[\,\to\mathbb R$ continue telle que $f(x+1)-f(x)\xrightarrow[x\to+\infty]{}\ell\in\mathbb R$. Montrer que $\dfrac{f(x)}x\xrightarrow[x\to+\infty]{}\ell$.</p>`,
  decode: {
    donnees: [R`Les « accroissements d'une unité » de $f$ tendent vers $\ell$.`, R`$f$ continue.`],
    but: R`Montrer que $f$ grandit à peu près comme $\ell x$.`,
    cles: {
      reduc: R`La fonction $h(x) = f(x)-\ell x$ vérifie $h(x+1)-h(x)\to0$, et $\frac{f(x)}x\to\ell$ équivaut à $\frac{h(x)}x\to0$. On peut donc supposer $\ell = 0$.`,
      decr: R`On recule de $1$ en $1$ depuis $x$ jusqu'à tomber dans le segment $[A,A+1]$, où la continuité donne une borne.`,
      M: R`Sur le segment $[A,A+1]$, $f$ est continue donc bornée par un certain $M$.`
    }
  },
  steps: [
    { t: "Se ramener à ℓ = 0", h: R`<p>$f(x)-\ell x$ vérifie la même hypothèse avec $0$ à la place de $\ell$.</p>`, b: R`<p>On pose $g(x) = f(x)-\ell x$. Alors</p>$$g(x+1)-g(x) = f(x+1)-f(x)-\ell\to\ell-\ell = 0,\qquad\frac{g(x)}x = \frac{f(x)}x-\ell.$$<p>Montrer $\frac{f(x)}x\to\ell$ revient à montrer $\frac{g(x)}x\to0$. <span data-k="reduc">On peut donc supposer $\ell = 0$</span> : $f(x+1)-f(x)\to0$, et on veut $\frac{f(x)}x\to0$.</p><p>Soit $\varepsilon>0$. Il existe $A\geqslant0$ tel que $|f(y+1)-f(y)|\leqslant\varepsilon$ pour tout $y\geqslant A$.</p>`, rappels: ["def-limite-finie"] },
    { t: "Reculer d'unité en unité", h: R`<p>Écris $f(x)-f(x-n)$ comme une somme de différences $f(y+1)-f(y)$.</p>`, b: R`<p>Soit $x\geqslant A$ et $n = \lfloor x-A\rfloor$, de sorte que $n\leqslant x-A< n+1$, soit $x-n\in[A,A+1[$. On recule de $x$ jusqu'à $x-n$ par pas de $1$ : <span data-k="decr">par télescopage</span>,</p>$$f(x) = \big(f(x)-f(x-1)\big)+\big(f(x-1)-f(x-2)\big)+\dots+\big(f(x-n+1)-f(x-n)\big)+f(x-n),$$<p>soit $f(x) = \sum_{k=0}^{n-1}\big(f(x-k)-f(x-k-1)\big)+f(x-n)$.</p>`, rappels: ["telescopage", "partie-entiere"] },
    { t: "Majorer", h: R`<p>Chaque différence est $\leqslant\varepsilon$, et $f$ est bornée sur le segment $[A,A+1]$.</p>`, b: R`<ul><li>Chaque différence $f(y+1)-f(y)$ avec $y = x-k-1\geqslant x-n\geqslant A$ est $\leqslant\varepsilon$ en valeur absolue : il y en a $n$.</li><li>$x-n\in[A,A+1]$, segment sur lequel $f$ continue est bornée : <span data-k="M">$|f(x-n)|\leqslant M$</span>, où $M$ ne dépend pas de $x$.</li></ul><p>Par l'inégalité triangulaire, et comme $n\leqslant x-A\leqslant x$ :</p>$$|f(x)|\leqslant n\varepsilon+M\leqslant x\varepsilon+M.$$`, rappels: ["inegalite-triangulaire", "bornes-atteintes"] },
    { t: "Diviser par x", h: R`<p>Divise par $x$ : il reste $\varepsilon+\frac Mx$.</p>`, b: R`<p>Pour $x>0$ (et $x\geqslant A$) :</p>$$\left|\frac{f(x)}x\right|\leqslant\varepsilon+\frac Mx.$$<p>Le terme $\frac Mx$ tend vers $0$ : pour $x\geqslant A' = \frac M\varepsilon$, on a $\frac Mx\leqslant\varepsilon$.</p>` },
    { t: "Conclusion", h: R`<p>Écris la définition de la limite.</p>`, b: R`<p>Pour $x\geqslant\max(A,A',1)$ : $\left|\frac{f(x)}x\right|\leqslant2\varepsilon$. Comme $\varepsilon>0$ est quelconque, $\frac{f(x)}x\to0$. En revenant à $f$ quelconque (étape 1) :</p><div class="sbox">$$f(x+1)-f(x)\xrightarrow[x\to+\infty]{}\ell\ \Longrightarrow\ \frac{f(x)}x\xrightarrow[x\to+\infty]{}\ell.$$</div><p>Exemple : $f(x) = x^2$ ne vérifie pas l'hypothèse ($f(x+1)-f(x) = 2x+1\to+\infty$), et en effet $\frac{f(x)}x\to+\infty$. Avec $f(x) = 3x+\sin(2\pi x)$ : $f(x+1)-f(x) = 3$ et $\frac{f(x)}x\to3$ ✓.</p>`, rappels: ["def-limite-finie"] }
  ],
  piege: R`Oublier le terme $f(x-n)$ du télescopage : c'est lui qui demande la continuité sur $[A,A+1]$.`,
  methode: R`Pour passer d'une information sur $f(x+1)-f(x)$ à $f(x)$, télescope depuis un segment fixe et majore terme à terme.`,
  viz: { type: "plot", title: "Avec f(x) = 2x + √x : f(x + 1) − f(x) → 2 et f(x)/x → 2", x: [1, 200], y: [1.5, 3.2], xlabel: "x", curves: [{ label: "f(x) / x", f: x => (2 * x + Math.sqrt(x)) / x }, { label: "f(x + 1) − f(x)", f: x => 2 + Math.sqrt(x + 1) - Math.sqrt(x) }], hlines: [{ y: () => 2, label: "ℓ = 2" }] }
},
{
  id: "ap-suite-milieu", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "25 min",
  title: "Une suite qui converge vers un point fixe",
  enonce: R`<p>Soit $f : [a,b]\to[a,b]$ vérifiant $|f(y)-f(x)|\leqslant|y-x|$ pour tous $x,y\in[a,b]$. On définit $u_0\in[a,b]$ et</p>$$u_{n+1} = \frac{u_n+f(u_n)}2.$$<p>Montrer que $(u_n)$ converge vers <span data-k="pf">un point fixe</span> de $f$.</p>`,
  decode: {
    donnees: [R`$f$ envoie $[a,b]$ dans $[a,b]$.`, R`$f$ est $1$-lipschitzienne.`],
    but: R`Montrer que $(u_n)$ est bien définie, converge, et que sa limite vérifie $f(\ell) = \ell$.`,
    cles: {
      pf: R`Un réel $\ell$ tel que $f(\ell) = \ell$.`,
      milieu: R`$\frac{x+f(x)}2$ est le milieu de $x$ et $f(x)$, deux points de $[a,b]$ : il est donc dans $[a,b]$.`,
      signe: R`Si $d = u_n-u_{n-1}>0$, alors $f(u_n)-f(u_{n-1})\geqslant-d$, donc la somme des deux est $\geqslant0$. Le cas $d<0$ est symétrique.`
    }
  },
  steps: [
    { t: "La suite est bien définie", h: R`<p>Le milieu de deux points de $[a,b]$ est dans $[a,b]$.</p>`, b: R`<p>Pour calculer $u_{n+1}$, il faut que $f(u_n)$ ait un sens, donc que $u_n\in[a,b]$. Récurrence : $u_0\in[a,b]$. Si $u_n\in[a,b]$, alors $f(u_n)\in[a,b]$ (car $f$ va de $[a,b]$ dans $[a,b]$), et $u_{n+1} = \frac{u_n+f(u_n)}2$ est <span data-k="milieu">le milieu</span> de deux points de $[a,b]$ : il est dans $[a,b]$. Tous les termes existent et restent dans $[a,b]$.</p>`, rappels: ["recurrence"] },
    { t: "Écart entre deux termes", h: R`<p>Écris $u_{n+1}$ et $u_n$ avec la relation de récurrence, et soustrais.</p>`, b: R`<p>Pour $n\geqslant1$, on écrit $u_{n+1} = \frac{u_n+f(u_n)}2$ et $u_n = \frac{u_{n-1}+f(u_{n-1})}2$, et on soustrait :</p>$$u_{n+1}-u_n = \frac{\big(f(u_n)-f(u_{n-1})\big)+\big(u_n-u_{n-1}\big)}2.$$<p>On note $\alpha = f(u_n)-f(u_{n-1})$ et $\beta = u_n-u_{n-1}$ : $u_{n+1}-u_n = \frac{\alpha+\beta}2$.</p>` },
    { t: "Le signe se transmet", h: R`<p>Si $|\alpha|\leqslant|\beta|$, quel est le signe de $\alpha+\beta$ ?</p>`, b: R`<p>L'hypothèse sur $f$ ($1$-lipschitzienne) donne $|\alpha|\leqslant|\beta|$ : l'écart des images ne dépasse pas l'écart des points.</p><ul><li>Si $\beta\geqslant0$ : $\alpha\geqslant-|\alpha|\geqslant-|\beta| = -\beta$, donc $\alpha+\beta\geqslant0$.</li><li>Si $\beta\leqslant0$ : $\alpha\leqslant|\alpha|\leqslant|\beta| = -\beta$, donc $\alpha+\beta\leqslant0$.</li></ul><p>Ainsi <span data-k="signe">$u_{n+1}-u_n$ a le signe (au sens large) de $u_n-u_{n-1}$</span>. De proche en proche, tous les écarts ont le signe de $u_1-u_0$ : si $u_1\geqslant u_0$, la suite est croissante ; sinon décroissante. Elle est monotone.</p>`, rappels: ["lipschitz"] },
    { t: "Convergence", h: R`<p>Monotone et bornée.</p>`, b: R`<p>$(u_n)$ est monotone (étape 3) et bornée (à valeurs dans $[a,b]$, étape 1). Par le théorème de la limite monotone, elle converge vers un réel $\ell$, et $\ell\in[a,b]$ par passage à la limite dans $a\leqslant u_n\leqslant b$.</p>`, rappels: ["limite-monotone"] },
    { t: "La limite est un point fixe", h: R`<p>Passe à la limite dans $u_{n+1} = \frac{u_n+f(u_n)}2$.</p>`, b: R`<p>$f$ est lipschitzienne, donc continue : $f(u_n)\to f(\ell)$. En passant à la limite dans la relation de récurrence ($u_{n+1}\to\ell$ aussi) :</p>$$\ell = \frac{\ell+f(\ell)}2\iff2\ell = \ell+f(\ell)\iff f(\ell) = \ell.$$<div class="sbox"><p style="margin:0;text-align:center">$(u_n)$ converge vers un <span data-k="pf">point fixe</span> de $f$.</p></div><p>Pourquoi le « milieu » ? La suite $v_{n+1} = f(v_n)$ peut ne pas converger : avec $f(x) = 1-x$ sur $[0,1]$, $v_n$ oscille entre $v_0$ et $1-v_0$. Avec les milieux : $u_1 = \frac{u_0+1-u_0}2 = \frac12$, point fixe, atteint en un pas.</p>`, rappels: ["lipschitz", "continuite-point-fixe"] }
  ],
  piege: R`Étudier la suite $v_{n+1} = f(v_n)$ à la place : elle peut ne pas converger, par exemple avec $f(x) = a+b-x$. La moyenne avec $u_n$ est essentielle.`,
  methode: R`Pour une suite récurrente, étudie le signe de $u_{n+1}-u_n$ en le comparant à $u_n-u_{n-1}$.`,
  viz: { type: "seq", title: "Avec f = cos sur [0, 1], la suite converge vers le point fixe", n: [0, 15], y: [0, 1.05], params: [{ k: "u0", label: "u₀", min: 0, max: 1, step: 0.05, v: 0.05 }], series: [{ label: "u_n", style: "line", f: (n, p) => { let u = p.u0; for (let k = 0; k < n; k++) u = (u + Math.cos(u)) / 2; return u; } }], hlines: [{ y: () => 0.739085, label: "point fixe ≈ 0,739" }] }
},
{
  id: "ap-commutent", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "30 min",
  title: "Deux fonctions qui commutent se rencontrent",
  enonce: R`<p>Soit $f,g : [a,b]\to[a,b]$ continues vérifiant $f\circ g = g\circ f$. Montrer qu'il existe $x_0\in[a,b]$ tel que $f(x_0) = g(x_0)$.</p>`,
  decode: {
    donnees: [R`$f$ et $g$ continues de $[a,b]$ dans $[a,b]$.`, R`$f\big(g(x)\big) = g\big(f(x)\big)$ pour tout $x$.`],
    but: R`Trouver un point où $f$ et $g$ sont égales.`,
    cles: {
      signe: R`$g-f$ est continue sur un intervalle et ne s'annule pas : par le TVI, elle garde le même signe partout.`,
      pf: R`Une fonction continue de $[a,b]$ dans $[a,b]$ a toujours un point fixe : on l'étudie avec $x\mapsto f(x)-x$.`,
      iteres: R`On applique $g$ encore et encore : $x$, $g(x)$, $g(g(x))$… Chacun de ces points reste un point fixe de $f$.`
    }
  },
  steps: [
    { t: "Par l'absurde", h: R`<p>Si $g-f$ ne s'annule pas, que dit le TVI sur son signe ?</p>`, b: R`<p>Supposons que $g-f$ ne s'annule jamais sur $[a,b]$. C'est une fonction continue sur un intervalle : si elle prenait une valeur $>0$ et une valeur $< 0$, le TVI la forcerait à s'annuler. Donc elle <span data-k="signe">garde un signe constant</span>. Quitte à échanger les rôles de $f$ et $g$ (l'hypothèse $f\circ g = g\circ f$ est symétrique), on suppose $g(x)>f(x)$ pour tout $x$.</p>`, rappels: ["absurde", "tvi"] },
    { t: "Un point fixe de f", h: R`<p>$f$ envoie $[a,b]$ dans lui-même : exercice du point fixe.</p>`, b: R`<p>$f$ est continue et envoie $[a,b]$ dans $[a,b]$. Par l'exercice du point fixe (TVI appliqué à $f(x)-x$), <span data-k="pf">$f$ a un point fixe</span> $x_0$ : $f(x_0) = x_0$.</p>`, rappels: ["tvi"] },
    { t: "g envoie les points fixes de f sur des points fixes de f", h: R`<p>Calcule $f(g(x))$ en utilisant $f\circ g = g\circ f$.</p>`, b: R`<p>Soit $x$ un point fixe de $f$. Grâce à la commutation :</p>$$f\big(g(x)\big) = g\big(f(x)\big) = g(x).$$<p>Donc $g(x)$ est aussi un point fixe de $f$. De plus, par l'hypothèse de l'étape 1 : $g(x)>f(x) = x$. Le nouveau point fixe est strictement plus à droite.</p>` },
    { t: "La suite des itérés", h: R`<p>Itère $g$ à partir du point fixe : la suite obtenue est monotone et bornée.</p>`, b: R`<p>On pose <span data-k="iteres">$u_0 = x_0$ et $u_{n+1} = g(u_n)$</span>. Par récurrence avec l'étape 3 : chaque $u_n$ est un point fixe de $f$, et $u_{n+1} = g(u_n)>u_n$. La suite est strictement croissante, et à valeurs dans $[a,b]$ (car $g$ envoie $[a,b]$ dans $[a,b]$), donc majorée par $b$. Par la limite monotone, elle converge vers un $\ell\in[a,b]$.</p>`, rappels: ["recurrence", "limite-monotone"] },
    { t: "La contradiction", h: R`<p>Passe à la limite dans les deux relations.</p>`, b: R`<p>On passe à la limite, avec la continuité de $f$ et $g$ :</p><ul><li>dans $f(u_n) = u_n$ : $f(\ell) = \ell$ ;</li><li>dans $u_{n+1} = g(u_n)$ : $\ell = g(\ell)$.</li></ul><p>Donc $g(\ell)-f(\ell) = \ell-\ell = 0$, ce qui contredit $g-f>0$. L'hypothèse de l'étape 1 est fausse :</p><div class="sbox">$$\exists x_0\in[a,b],\quad f(x_0) = g(x_0).$$</div><p>Sans la commutation, c'est faux : $f(x) = 0$ et $g(x) = 1$ sur $[0,1]$ ne se rencontrent jamais (et $f\circ g = 0\neq1 = g\circ f$).</p>`, rappels: ["continuite-point-fixe"] }
  ],
  piege: R`Chercher directement $x_0$ : on ne sait rien construire. L'absurde donne une information de signe très utile.`,
  methode: R`Quand $f\circ g = g\circ f$, $g$ envoie les points fixes de $f$ sur des points fixes de $f$ : itérer $g$ est souvent la clé.`
},
{
  id: "ap-ff-2f-id", subj: "maths", year: "mpsi", chap: 7, level: 5, time: "40 min",
  title: "Les fonctions telles que f∘f = 2f − Id",
  enonce: R`<p>Déterminer les fonctions continues $f : \mathbb R\to\mathbb R$ vérifiant</p>$$f\circ f = 2f-\mathrm{Id}.\qquad(*)$$`,
  decode: {
    donnees: [R`$f$ continue sur $\mathbb R$.`, R`$f\big(f(x)\big) = 2f(x)-x$ pour tout $x$.`],
    but: R`Montrer que $f(x) = x+C$, puis vérifier.`,
    cles: {
      iter: R`$f^n$ désigne $f\circ f\circ\dots\circ f$, avec $n$ fois $f$ : c'est une composition, pas une puissance.`,
      rec: R`En appliquant $(*)$ au point $f^n(x)$, on obtient une relation entre trois termes consécutifs.`,
      const: R`On montre que $f(y)-y = f(x)-x$ pour tous $x,y$ : la quantité $f(t)-t$ ne dépend pas de $t$.`
    }
  },
  steps: [
    { t: "f est injective", h: R`<p>Si $f(x) = f(x')$, applique $f$ puis utilise $(*)$.</p>`, b: R`<p>Soit $f$ une solution. Si $f(x) = f(x')$, on applique $f$ : $f(f(x)) = f(f(x'))$. Par $(*)$, $f(f(x)) = 2f(x)-x$, donc</p>$$2f(x)-x = 2f(x')-x'.$$<p>Avec $f(x) = f(x')$, il reste $x = x'$ : $f$ est injective. Continue et injective sur $\mathbb R$, elle est strictement monotone.</p>`, rappels: ["injective-monotone"] },
    { t: "f est croissante et bijective", h: R`<p>Si $f$ décroît, $f\circ f$ croît. Regarde aussi les limites en $\pm\infty$.</p>`, b: R`<p><b>Croissante</b> : si $f$ était strictement décroissante, $f\circ f$ serait croissante (deux renversements d'ordre), et $2f$ décroissante. Alors $\mathrm{Id} = 2f-f\circ f$ serait décroissante : absurde.</p><p><b>Bijective</b> : $f$ croissante a une limite en $+\infty$. Si elle était finie, égale à $\ell$, alors, $f$ étant continue en $\ell$, $f(f(x))\to f(\ell)$ et $x = 2f(x)-f(f(x))\to2\ell-f(\ell)$, alors que $x\to+\infty$ : absurde. Donc $f\to+\infty$ en $+\infty$, et de même $f\to-\infty$ en $-\infty$. Continue, strictement croissante, de limites $\pm\infty$ : $f$ est une bijection de $\mathbb R$ sur $\mathbb R$.</p>`, rappels: ["bijection-continue", "absurde"] },
    { t: "La suite des itérés", h: R`<p>Applique $(*)$ au point $f^n(x)$.</p>`, b: R`<p>Soit $x$ réel et $u_n = f^n(x)$, les <span data-k="iter">itérés</span> de $x$ ($f^0 = \mathrm{Id}$, et pour $n< 0$ on utilise la réciproque $f^{-1}$, qui existe par l'étape 2). <span data-k="rec">En appliquant $(*)$ au point $u_n$</span> : $f(f(u_n)) = 2f(u_n)-u_n$, c'est-à-dire</p>$$u_{n+2} = 2u_{n+1}-u_n.$$` },
    { t: "Résoudre la récurrence", h: R`<p>Suite récurrente linéaire d'ordre $2$ : équation caractéristique $r^2-2r+1 = 0$.</p>`, b: R`<p>On réécrit : $u_{n+2}-u_{n+1} = u_{n+1}-u_n$. L'écart entre deux termes consécutifs est constant : la suite est <b>arithmétique</b>, de raison $u_1-u_0 = f(x)-x$. (Avec la méthode générale : $r^2-2r+1 = (r-1)^2$, racine double $1$, $u_n = \lambda n+\mu$.) Donc</p>$$f^n(x) = x+n\big(f(x)-x\big)\quad(n\in\mathbb Z).$$<p>En particulier, $\frac{f^n(x)}n\to f(x)-x$ quand $n\to+\infty$.</p>`, rappels: ["rec-lineaire-2"] },
    { t: "Comparer deux points", h: R`<p>Encadre $y$ entre deux itérés de $x$, puis applique $f^n$.</p>`, b: R`<p>Supposons $f\neq\mathrm{Id}$ : il existe $x$ avec $d = f(x)-x\neq0$, disons $d>0$ (l'autre cas est symétrique). Les itérés $f^p(x) = x+pd$, $p\in\mathbb Z$, quadrillent $\mathbb R$ avec un pas $d$. Pour tout $y$, il existe donc $p$ avec</p>$$f^p(x)\leqslant y< f^{p+1}(x).$$<p>On applique $f^n$ ($n\geqslant1$), strictement croissante :</p>$$f^{n+p}(x)\leqslant f^n(y)\leqslant f^{n+p+1}(x).$$` },
    { t: "Passer à la limite", h: R`<p>Divise par $n$ et passe à la limite.</p>`, b: R`<p>On divise par $n>0$. Par l'étape 4 appliquée à $x$ :</p>$$\frac{f^{n+p}(x)}n = \frac{x+(n+p)d}n\to d,\qquad\frac{f^{n+p+1}(x)}n\to d.$$<p>Et appliquée à $y$ : $\frac{f^n(y)}n\to f(y)-y$. Par encadrement : <span data-k="const">$f(y)-y = d = f(x)-x$</span>, pour tout $y$.</p>`, rappels: ["encadrement"] },
    { t: "Conclusion", h: R`<p>Vérifie que $x\mapsto x+C$ convient.</p>`, b: R`<p>Dans tous les cas (y compris $f = \mathrm{Id}$, avec $C = 0$), il existe une constante $C$ telle que $f(y) = y+C$ pour tout $y$. Réciproquement, pour $f(x) = x+C$ :</p>$$f(f(x)) = x+2C,\qquad2f(x)-x = 2x+2C-x = x+2C\ ✓.$$<div class="sbox"><p style="margin:0;text-align:center">Les solutions sont les translations $x\mapsto x+C$, $C\in\mathbb R$.</p></div>` }
  ],
  piege: R`Confondre $f^n$ (composée $n$ fois) et $f(x)^n$ (puissance) : ici c'est toujours la composition.`,
  methode: R`Une équation $f\circ f = af+b\,\mathrm{Id}$ donne une récurrence linéaire sur les itérés $f^n(x)$ : résous-la, puis exploite la croissance.`
}
]);

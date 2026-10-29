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
  id: "ex-recurrence", subj: "maths", year: "mpsi", chap: 0, classique: true, level: 1, time: "10 min",
  title: "Une majoration par récurrence",
  enonce: R`<p>Montrer que pour tout entier $n\ge1$ :</p>$$\sum_{k=1}^{n}\frac{1}{k^2} \le 2 - \frac{1}{n}$$<p>En déduire que <span data-k="sp">la suite des sommes partielles</span> converge.</p>`,
  decode: {
    donnees: [R`Une somme $S_n = \sum_{k=1}^n \frac1{k^2}$ de termes positifs.`],
    but: R`Majorer $S_n$ pour tout $n$, puis en tirer la convergence.`,
    cles: { sp: R`C'est la suite $(S_n)_{n\ge1}$, où $S_n$ est la somme des $n$ premiers termes.` }
  },
  steps: [
    { t: "L'idée", b: R`<p>Le majorant dépend de $n$ : c'est le signal d'une récurrence. On ne peut pas récurrer sur « $S_n\le2$ », car cette inégalité ne se transmet pas d'un rang au suivant.</p>`, rappels: ["recurrence"] },
    { t: "Initialisation", b: R`<p>Pour $n=1$ : $S_1 = 1$ et $2-\frac11 = 1$. On a bien $S_1\le 1$.</p>` },
    { t: "Hérédité", b: R`<p>On suppose $S_n \le 2-\frac1n$. Alors</p>$$S_{n+1} = S_n + \frac{1}{(n+1)^2} \le 2-\frac1n+\frac{1}{(n+1)^2}.$$<p>Il reste à montrer que $\dfrac{1}{(n+1)^2} \le \dfrac1n-\dfrac{1}{n+1}$.</p>` },
    { t: "Le calcul clé", b: R`$$\frac1n-\frac1{n+1} = \frac{1}{n(n+1)} \ge \frac{1}{(n+1)^2}\quad\text{car } n(n+1)\le(n+1)^2.$$<p>Donc $S_{n+1}\le 2-\frac{1}{n+1}$ : la propriété est héréditaire.</p>` },
    { t: "Conclusion", b: R`<p>$(S_n)$ est croissante, car on ajoute des termes positifs, et majorée par $2$. Elle converge.</p>`, rappels: ["limite-monotone"] }
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
  id: "ex-dl-limite", subj: "maths", year: "mpsi", chap: 14, classique: true, level: 1, time: "8 min",
  title: "Une limite par développements limités",
  enonce: R`<p>Déterminer $\displaystyle\lim_{x\to0}\frac{e^x-1-\sin x}{x^2}$.</p>`,
  decode: {
    donnees: [R`Numérateur et dénominateur tendent vers $0$ : forme indéterminée $\frac00$.`],
    but: R`Trouver la limite en $0$.`,
    cles: {}
  },
  steps: [
    { t: "L'idée", b: R`<p>Le dénominateur est d'ordre $2$. On développe donc le numérateur à l'ordre $2$.</p>` },
    { t: "Les DL", b: R`$$e^x = 1+x+\frac{x^2}{2}+o(x^2),\qquad \sin x = x+o(x^2).$$`, rappels: ["dl-usuels"] },
    { t: "On assemble", b: R`$$e^x-1-\sin x = \frac{x^2}{2}+o(x^2)\quad\text{donc}\quad \frac{e^x-1-\sin x}{x^2} = \frac12+o(1).$$` },
    { t: "Conclusion", b: R`<p>La limite vaut $\dfrac12$.</p>` }
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
  id: "ex-rang", subj: "maths", year: "mpsi", chap: 16, level: 2, time: "15 min",
  title: "Noyau, image et théorème du rang",
  enonce: R`<p>Soit $f:\mathbb R_2[X]\to\mathbb R_2[X]$ définie par $f(P) = P'$.</p><ol><li>Montrer que $f$ est linéaire.</li><li>Déterminer $\ker f$ et $\operatorname{Im} f$.</li><li>Vérifier <span data-k="rang">le théorème du rang</span>.</li></ol>`,
  decode: {
    donnees: [R`$\mathbb R_2[X]$ : les polynômes de degré au plus $2$, un espace de dimension $3$.`, R`$f$ associe à $P$ sa dérivée.`],
    but: R`Décrire noyau et image, puis vérifier une égalité de dimensions.`,
    cles: { rang: R`$\dim\mathbb R_2[X] = \dim\ker f + \operatorname{rg} f$.` }
  },
  steps: [
    { t: "Linéarité", b: R`<p>Pour $P,Q$ et $\lambda$ réel : $(\lambda P+Q)' = \lambda P'+Q'$, donc $f(\lambda P+Q) = \lambda f(P)+f(Q)$.</p>` },
    { t: "Noyau", b: R`<p>$P' = 0 \iff P$ est constant. Donc $\ker f = \mathbb R_0[X]$, de dimension $1$.</p>` },
    { t: "Image", b: R`<p>Sur la base $(1,X,X^2)$ : $f(1)=0$, $f(X)=1$, $f(X^2)=2X$. Donc $\operatorname{Im} f = \operatorname{Vect}(1,2X) = \mathbb R_1[X]$, de dimension $2$.</p>`, rappels: ["image-base"] },
    { t: "Théorème du rang", b: R`$$\dim\mathbb R_2[X] = 3 = 1 + 2 = \dim\ker f + \operatorname{rg} f.$$`, rappels: ["theoreme-rang"] }
  ],
  piege: R`Montrer seulement $\operatorname{Im} f\subset\mathbb R_1[X]$ ne suffit pas : il faut l'égalité.`,
  methode: R`Pour trouver une image, calcule $f$ sur une base : l'image est engendrée par ces vecteurs.`
},
{
  id: "ex-diago", subj: "maths", year: "mp", chap: 1, classique: true, level: 2, time: "20 min",
  title: "Diagonaliser pour calculer une puissance",
  enonce: R`<p>Soit $A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$. <span data-k="diag">Diagonaliser</span> $A$ puis calculer $A^n$ pour $n\in\mathbb N$.</p>`,
  decode: {
    donnees: [R`Une matrice $2\times2$ symétrique réelle.`],
    but: R`Écrire $A = PDP^{-1}$ avec $D$ diagonale, puis en déduire $A^n$.`,
    cles: { diag: R`Trouver $P$ inversible et $D$ diagonale telles que $A = PDP^{-1}$.` }
  },
  steps: [
    { t: "Polynôme caractéristique", b: R`$$\chi_A(X) = (X-2)^2-1 = (X-1)(X-3).$$<p>Deux valeurs propres distinctes en dimension $2$ : $A$ est diagonalisable.</p>`, rappels: ["valeurs-propres-distinctes"] },
    { t: "Vecteurs propres", b: R`<p>$E_1 = \operatorname{Vect}\begin{pmatrix}1\\-1\end{pmatrix}$ et $E_3 = \operatorname{Vect}\begin{pmatrix}1\\1\end{pmatrix}$.</p>` },
    { t: "Diagonalisation", b: R`$$P = \begin{pmatrix}1&1\\-1&1\end{pmatrix},\quad D = \begin{pmatrix}1&0\\0&3\end{pmatrix},\quad P^{-1} = \frac12\begin{pmatrix}1&-1\\1&1\end{pmatrix}.$$` },
    { t: "La puissance", b: R`$$A^n = PD^nP^{-1} = \frac12\begin{pmatrix}3^n+1&3^n-1\\3^n-1&3^n+1\end{pmatrix}.$$<p>Pour $n=1$, on retrouve bien $A$.</p>`, rappels: ["puissance-diagonalisable"] }
  ],
  piege: R`Écrire $A^n = P^{-1}D^nP$. Vérifie toujours le cas $n=1$.`,
  methode: R`Une matrice symétrique réelle est toujours diagonalisable, même sans calcul.`
},
{
  id: "ex-serie-entiere", subj: "maths", year: "mp", chap: 5, level: 2, time: "15 min",
  title: "Rayon et somme d'une série entière",
  enonce: R`<p>Déterminer <span data-k="rayon">le rayon de convergence</span> puis la somme de $\displaystyle\sum_{n\ge0}\frac{n}{2^n}x^n$.</p>`,
  decode: {
    donnees: [R`$a_n = \dfrac{n}{2^n}$.`],
    but: R`Trouver $R$, puis une expression simple de la somme sur $]-R,R[$.`,
    cles: { rayon: R`Le réel $R$ tel que la série converge pour $|x|<R$ et diverge pour $|x|>R$.` }
  },
  steps: [
    { t: "Le rayon", b: R`$$\left|\frac{a_{n+1}}{a_n}\right| = \frac{n+1}{2n} \longrightarrow \frac12,\quad\text{donc } R = 2.$$`, rappels: ["dalembert-se"] },
    { t: "La série de référence", b: R`<p>Pour $|u|<1$, on dérive $\sum u^n = \frac{1}{1-u}$, puis on multiplie par $u$ :</p>$$\sum_{n\ge0} n u^n = \frac{u}{(1-u)^2}.$$`, rappels: ["serie-geometrique", "derivation-se"] },
    { t: "La somme", b: R`<p>Avec $u = \frac x2$ et $|x|<2$ :</p>$$\sum_{n\ge0}\frac{n}{2^n}x^n = \frac{2x}{(2-x)^2}.$$` }
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
  id: "ex-geometrique", subj: "maths", year: "mp", chap: 12, level: 1, time: "10 min",
  title: "Espérance d'une loi géométrique",
  enonce: R`<p>Soit $X\sim\mathcal G(p)$ avec $p\in\,]0,1[$. Calculer <span data-k="gx">la fonction génératrice</span> $G_X$, puis $E(X)$.</p>`,
  decode: {
    donnees: [R`$X$ est le rang du premier succès dans des épreuves indépendantes de probabilité de succès $p$.`],
    but: R`Obtenir $G_X$ sous forme simple, puis la dériver en $1$.`,
    cles: { gx: R`$G_X(t) = E(t^X) = \sum_k P(X=k)\,t^k$.` }
  },
  steps: [
    { t: "La loi", b: R`<p>Avec $q = 1-p$ : $P(X=k) = pq^{k-1}$ pour $k\ge1$.</p>`, rappels: ["loi-geometrique"] },
    { t: "Fonction génératrice", b: R`$$G_X(t) = \sum_{k\ge1}pq^{k-1}t^k = pt\sum_{j\ge0}(qt)^j = \frac{pt}{1-qt}\quad\text{pour } |t|<\tfrac1q.$$`, rappels: ["fonction-generatrice", "serie-geometrique"] },
    { t: "Dérivée", b: R`$$G_X'(t) = \frac{p}{(1-qt)^2}.$$` },
    { t: "Espérance", b: R`$$E(X) = G_X'(1) = \frac{p}{p^2} = \frac1p.$$` }
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
  id: "pb-suite-racine", kind: "probleme", subj: "maths", year: "mpsi", chap: 6, classique: true, level: 2, time: "45 min",
  title: "Une suite définie par une racine",
  enonce: R`<p>On définit $u_0 = 0$ et, pour tout $n$, $u_{n+1} = \sqrt{2+u_n}$.</p><ol><li>Montrer que $0\le u_n\le 2$ pour tout $n$.</li><li>Montrer que $(u_n)$ est croissante.</li><li>En déduire qu'elle converge et déterminer sa limite $\ell$.</li><li>Montrer que $|u_{n+1}-2| \le \frac12|u_n-2|$, puis majorer $|u_n-2|$.</li><li>Pour $\theta\in[0,\frac\pi2]$, vérifier que $\sqrt{2+2\cos\theta} = 2\cos\frac\theta2$. En déduire <span data-k="explicite">une expression explicite</span> de $u_n$.</li></ol>`,
  decode: {
    donnees: [R`Une suite récurrente $u_{n+1} = f(u_n)$ avec $f(x) = \sqrt{2+x}$ et $u_0 = 0$.`],
    but: R`Étudier la convergence, la vitesse de convergence, puis trouver $u_n$ en fonction de $n$.`,
    cles: { explicite: R`Une formule qui donne $u_n$ directement à partir de $n$, sans passer par les termes précédents.` }
  },
  steps: [
    { t: "Q1 · Encadrement", b: R`<p>Récurrence. $u_0 = 0\in[0,2]$. Si $0\le u_n\le2$, alors $2\le 2+u_n\le4$, donc $\sqrt2\le u_{n+1}\le2$. En particulier $u_{n+1}\in[0,2]$.</p>`, rappels: ["recurrence"] },
    { t: "Q2 · Monotonie", b: R`$$u_{n+1}-u_n = \sqrt{2+u_n}-u_n = \frac{2+u_n-u_n^2}{\sqrt{2+u_n}+u_n} = \frac{(2-u_n)(1+u_n)}{\sqrt{2+u_n}+u_n}.$$<p>Le dénominateur est strictement positif et, d'après Q1, le numérateur est positif. La suite est croissante.</p>`, rappels: ["quantite-conjuguee"] },
    { t: "Q3 · Convergence", b: R`<p>$(u_n)$ est croissante et majorée par $2$ : elle converge vers $\ell\in[0,2]$. Comme $f$ est continue, $\ell = \sqrt{2+\ell}$, donc $\ell^2-\ell-2 = (\ell-2)(\ell+1) = 0$. Comme $\ell\ge0$, $\ell = 2$.</p>`, rappels: ["limite-monotone", "continuite-point-fixe"] },
    { t: "Q4 · Vitesse", b: R`$$|u_{n+1}-2| = \left|\sqrt{2+u_n}-2\right| = \frac{|u_n-2|}{\sqrt{2+u_n}+2} \le \frac{|u_n-2|}{2}.$$<p>Par récurrence, $|u_n-2| \le \dfrac{|u_0-2|}{2^n} = \dfrac{1}{2^{n-1}}$.</p>`, rappels: ["quantite-conjuguee"] },
    { t: "Q5 · La formule", b: R`<p>$2+2\cos\theta = 4\cos^2\frac\theta2$ et $\cos\frac\theta2\ge0$ pour $\theta\in[0,\frac\pi2]$, d'où $\sqrt{2+2\cos\theta} = 2\cos\frac\theta2$.</p>`, rappels: ["duplication-cos"] },
    { t: "Q5 · Conclusion", b: R`<p>$u_0 = 0 = 2\cos\frac\pi2$. Si $u_n = 2\cos\frac{\pi}{2^{n+1}}$, alors $u_{n+1} = \sqrt{2+2\cos\frac{\pi}{2^{n+1}}} = 2\cos\frac{\pi}{2^{n+2}}$. Donc</p>$$u_n = 2\cos\frac{\pi}{2^{n+1}}.$$<p>On retrouve $u_n\to2$.</p>` }
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
  id: "pb-nilpotentes", kind: "probleme", subj: "maths", year: "mp", chap: 1, classique: true, level: 2, time: "30 min",
  title: "Autour des matrices nilpotentes",
  enonce: R`<p>Soit $N\in\mathcal M_n(\mathbb C)$ <span data-k="nilp">nilpotente</span> : il existe $p\ge1$ tel que $N^p = 0$.</p><ol><li>Montrer que $0$ est la seule valeur propre de $N$.</li><li>En déduire $\chi_N$, puis montrer que $N^n = 0$.</li><li>Montrer que $I_n - N$ est inversible et exprimer son inverse.</li><li>Montrer qu'une matrice nilpotente non nulle n'est pas diagonalisable.</li></ol>`,
  decode: {
    donnees: [R`$N^p = 0$ pour un certain $p$, éventuellement plus grand que $n$.`],
    but: R`Décrire le spectre, le polynôme caractéristique, puis deux conséquences.`,
    cles: { nilp: R`Une puissance de $N$ est la matrice nulle.` }
  },
  steps: [
    { t: "Q1 · Spectre", b: R`<p>Si $NX = \lambda X$ avec $X\neq0$, alors $0 = N^pX = \lambda^pX$, donc $\lambda = 0$. Et $0$ est bien valeur propre : $(\det N)^p = \det(N^p) = 0$, donc $N$ n'est pas inversible.</p>` },
    { t: "Q2 · Polynôme caractéristique", b: R`<p>$\chi_N$ est unitaire de degré $n$, scindé sur $\mathbb C$, et sa seule racine est $0$ : $\chi_N = X^n$. Par Cayley-Hamilton, $N^n = 0$.</p>`, rappels: ["scinde-C", "cayley-hamilton"] },
    { t: "Q3 · Inverse", b: R`$$(I_n-N)\left(I_n+N+\dots+N^{p-1}\right) = I_n - N^p = I_n.$$<p>Donc $I_n-N$ est inversible, d'inverse $\sum_{k=0}^{p-1}N^k$.</p>` },
    { t: "Q4 · Non diagonalisable", b: R`<p>Si $N = PDP^{-1}$ avec $D$ diagonale, les coefficients de $D$ sont les valeurs propres, toutes nulles. Donc $D = 0$ puis $N = 0$. Une nilpotente non nulle n'est donc pas diagonalisable.</p>` }
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
  "passage-limite": { t: "Passage à la limite dans une inégalité", b: R`Si $f(t)\leqslant g(t)$ pour $t$ assez grand et si $f$ et $g$ ont des limites finies $\ell$ et $\ell'$, alors $\ell\leqslant\ell'$. Attention : une inégalité stricte $f<g$ ne donne que $\ell\leqslant\ell'$.` },
  "absurde": { t: "Raisonnement par l'absurde", b: R`Pour montrer une propriété $P$, on suppose que $P$ est fausse et on en déduit une contradiction. Donc $P$ est vraie.` },
  "croissances-comparees": { t: "Croissances comparées", b: R`Pour $\alpha,\beta,\gamma>0$ : $$\lim_{x\to+\infty}\frac{x^\beta}{e^{\gamma x}} = 0,\qquad \lim_{x\to+\infty}\frac{(\ln x)^\alpha}{x^\beta} = 0.$$ L'exponentielle l'emporte sur les puissances, qui l'emportent sur le logarithme.` },
  "formes-indeterminees": { t: "Formes indéterminées", b: R`Les opérations sur les limites ne permettent pas de conclure dans les cas $(+\infty)-(+\infty)$, $0\times\infty$, $\dfrac00$ et $\dfrac\infty\infty$. Il faut alors transformer l'expression : factoriser, utiliser la forme exponentielle, encadrer…` },
  "operations-limites": { t: "Limites et opérations", b: R`Si $f\to\ell$ et $g\to\ell'$, alors $f+g\to\ell+\ell'$ et $fg\to\ell\ell'$. Avec des limites infinies : $(+\infty)\times\ell = +\infty$ si $\ell>0$, et $-\infty$ si $\ell<0$.` },
  "racine-carre": { t: "Racine d'un carré", b: R`Pour tout réel $x$ : $\sqrt{x^2} = |x|$. Donc $\sqrt{x^2} = x$ si $x\geqslant0$, et $\sqrt{x^2} = -x$ si $x<0$.` },
  "composition-limites": { t: "Limite d'une composée", b: R`Si $u(x)\to b$ quand $x\to a$, et si $g(X)\to\ell$ quand $X\to b$, alors $g\big(u(x)\big)\to\ell$ quand $x\to a$. Exemple : si $u(x)\to-\infty$, alors $e^{u(x)}\to0$.` },
  "borne-zero": { t: "Borné fois tend vers zéro", b: R`Si $g$ est bornée au voisinage de $a$ et si $f\to0$ en $a$, alors $fg\to0$ en $a$. Justification : $|f g|\leqslant M|f|$.` },
  "encadrement": { t: "Théorème d'encadrement", b: R`Si $g\leqslant f\leqslant h$ au voisinage de $a$ et si $g$ et $h$ tendent vers le même réel $\ell$, alors $f$ tend vers $\ell$.` },
  "partie-entiere": { t: "Partie entière", b: R`$\lfloor x\rfloor$ est l'unique entier $n$ tel que $n\leqslant x<n+1$. On en déduit l'encadrement utile $x-1<\lfloor x\rfloor\leqslant x$.` },
  "minoration-infini": { t: "Limite infinie par minoration", b: R`Si $g\leqslant f$ au voisinage de $a$ et si $g\to+\infty$ en $a$, alors $f\to+\infty$ en $a$.` }
});

LEMME.exercises([
{
  id: "ex-lim-croissante", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 2, time: "15 min",
  title: "Une fonction strictement croissante n'atteint pas sa limite",
  enonce: R`<p>Soit $f : [0,+\infty[\,\to\mathbb R$ une fonction <span data-k="sc">strictement croissante</span> qui admet <span data-k="lim">une limite finie</span> $\ell\in\mathbb R$ en $+\infty$.</p><p>Montrer que $f(x)<\ell$ pour tout $x\in[0,+\infty[$.</p>`,
  decode: {
    donnees: [R`$f$ est strictement croissante sur $[0,+\infty[$.`, R`$f(x)\to\ell$ quand $x\to+\infty$, avec $\ell$ réel.`],
    but: R`Une inégalité <b>stricte</b> : $f(x)<\ell$ pour tout $x$. Autrement dit, $f$ reste sous $\ell$ et ne la touche jamais.`,
    cles: {
      sc: R`Si $x<y$, alors $f(x)<f(y)$ : l'inégalité est stricte, $f$ n'est jamais constante sur un morceau.`,
      lim: R`$f(x)$ se rapproche autant qu'on veut de $\ell$ quand $x$ devient grand.`,
      large: R`Une inégalité large autorise l'égalité : $f(x)\leqslant\ell$. Ici, il faudra ensuite exclure le cas $f(x)=\ell$.`,
      fixe: R`On choisit un $x$ quelconque et on ne le change plus. C'est la variable $t$ qui va tendre vers $+\infty$.`,
      contradiction: R`Deux affirmations incompatibles : ici $f(b)>\ell$ et $f(b)\leqslant\ell$. L'hypothèse de départ est donc fausse.`
    }
  },
  steps: [
    { t: "Découper le problème", b: R`<p>On veut une inégalité stricte. On procède en deux temps, ce qui est plus clair :</p><ol><li>montrer d'abord l'inégalité <span data-k="large">large</span> $f(x)\leqslant\ell$ ;</li><li>montrer ensuite que l'égalité $f(x)=\ell$ est impossible.</li></ol>` },
    { t: "L'inégalité large", b: R`<p>Soit $x\geqslant0$ <span data-k="fixe">fixé</span>. Pour tout $t\geqslant x$, la croissance de $f$ donne</p>$$f(x)\leqslant f(t).$$<p>On fait tendre $t$ vers $+\infty$ : le membre de droite tend vers $\ell$, le membre de gauche ne bouge pas. Par passage à la limite dans une inégalité large :</p>$$f(x)\leqslant\ell.$$`, rappels: ["passage-limite", "limite-monotone-fct"] },
    { t: "Pourquoi ce n'est pas fini", b: R`<p>Le passage à la limite ne donne jamais mieux qu'une inégalité large. Même en partant de $f(x)<f(t)$, on obtient seulement $f(x)\leqslant\ell$. Il faut un argument de plus pour exclure $f(x)=\ell$ : c'est là qu'intervient la stricte croissance.</p>`, rappels: ["passage-limite"] },
    { t: "Exclure l'égalité", b: R`<p>Raisonnons par l'absurde : supposons qu'il existe $a\geqslant0$ avec $f(a)=\ell$.</p><p>Prenons n'importe quel $b>a$, par exemple $b=a+1$. Comme $f$ est strictement croissante, $f(b)>f(a)=\ell$.</p><p>Mais l'étape précédente donne $f(b)\leqslant\ell$. C'est une <span data-k="contradiction">contradiction</span>.</p>`, rappels: ["absurde"] },
    { t: "Conclusion", b: R`<p>Pour tout $x\geqslant0$, on a $f(x)\leqslant\ell$ et $f(x)\neq\ell$, donc</p>$$f(x)<\ell.$$<p>Une fonction strictement croissante s'approche de sa limite sans jamais l'atteindre.</p>` }
  ],
  piege: R`Passer directement à la limite dans $f(x)<f(t)$ et écrire $f(x)<\ell$. Le passage à la limite transforme toujours une inégalité stricte en inégalité large.`,
  methode: R`Pour une inégalité stricte avec une limite : obtenir d'abord l'inégalité large par passage à la limite, puis exclure le cas d'égalité, souvent par l'absurde.`,
  viz: {
    type: "plot", title: "La courbe se rapproche de ℓ sans jamais la toucher", x: [0, 10], y: [0, 1.2], xlabel: "x",
    params: [{ k: "v", label: "Vitesse d'approche", min: 0.2, max: 2, step: 0.1, v: 0.6 }],
    curves: [{ label: "f(x) = ℓ − e^(−vx), avec ℓ = 1", f: (x, p) => 1 - Math.exp(-p.v * x) }],
    hlines: [{ y: () => 1, label: "ℓ = 1" }]
  }
},
{
  id: "ex-lim-3x2-exp", subj: "maths", year: "mpsi", chap: 7, level: 1, time: "8 min",
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
    { t: "Reconnaître le problème", b: R`<p>$3x^2\to+\infty$ et $e^x\to+\infty$. On est face à $(+\infty)-(+\infty)$ : c'est une <span data-k="fi">forme indéterminée</span>. On ne peut rien conclure sans transformer l'expression.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Qui l'emporte ?", b: R`<p>Par croissances comparées, l'exponentielle grandit beaucoup plus vite que $x^2$. Le <span data-k="prep">terme prépondérant</span> est donc $e^x$.</p>`, rappels: ["croissances-comparees"] },
    { t: "Factoriser", b: R`<p>On met $e^x$ en facteur :</p>$$3x^2-e^x = e^x\left(3x^2e^{-x}-1\right).$$<p>Vérification : en développant, on retrouve bien $3x^2-e^x$.</p>` },
    { t: "Limite de chaque facteur", b: R`<p>Par croissances comparées, $x^2e^{-x} = \dfrac{x^2}{e^x}\to0$, donc</p>$$3x^2e^{-x}-1\longrightarrow -1.$$<p>Et $e^x\to+\infty$.</p>`, rappels: ["croissances-comparees"] },
    { t: "Conclusion", b: R`<p>Un produit de la forme $(+\infty)\times(-1)$ tend vers $-\infty$ :</p>$$\lim_{x\to+\infty}\big(3x^2-e^x\big) = -\infty.$$`, rappels: ["operations-limites"] }
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
  id: "ex-lim-racine-quotient", subj: "maths", year: "mpsi", chap: 7, level: 1, time: "10 min",
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
    { t: "Reconnaître le problème", b: R`<p>Le haut et le bas tendent vers $+\infty$ : c'est une <span data-k="fi">forme indéterminée</span> du type $\dfrac{\infty}{\infty}$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Factoriser sous la racine", b: R`<p>Sous la racine, le <span data-k="prep">terme prépondérant</span> est $x^2$. On le met en facteur :</p>$$x^2+x+1 = x^2\left(1+\frac1x+\frac1{x^2}\right).$$<p>Donc $\sqrt{x^2+x+1} = \sqrt{x^2}\,\sqrt{1+\frac1x+\frac1{x^2}} = |x|\sqrt{1+\frac1x+\frac1{x^2}}$.</p>`, rappels: ["racine-carre"] },
    { t: "Factoriser le dénominateur", b: R`$$x+1 = x\left(1+\frac1x\right).$$<p>Le quotient devient</p>$$\frac{\sqrt{x^2+x+1}}{x+1} = \frac{|x|}{x}\cdot\frac{\sqrt{1+\frac1x+\frac1{x^2}}}{1+\frac1x}.$$` },
    { t: "En +∞", b: R`<p>Pour $x>0$, $|x| = x$, donc $\dfrac{|x|}{x} = 1$. Les termes $\frac1x$ et $\frac1{x^2}$ tendent vers $0$, donc la deuxième fraction tend vers $\dfrac{\sqrt1}{1} = 1$.</p>$$\lim_{x\to+\infty}\frac{\sqrt{x^2+x+1}}{x+1} = 1.$$`, rappels: ["operations-limites"] },
    { t: "En −∞", b: R`<p>Pour $x<0$, <span data-k="abs">$|x| = -x$</span>, donc $\dfrac{|x|}{x} = -1$. La deuxième fraction tend toujours vers $1$. La limite vaut donc</p>$$\lim_{x\to-\infty}\frac{\sqrt{x^2+x+1}}{x+1} = -1.$$<p>C'est logique : le numérateur est positif et le dénominateur négatif pour $x$ très négatif.</p>`, rappels: ["racine-carre"] }
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
  id: "ex-lim-x-exp-racine", subj: "maths", year: "mpsi", chap: 7, level: 2, time: "10 min",
  title: "Limite de x·e^(−√x) en +∞",
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
    { t: "Reconnaître le problème", b: R`<p>$x\to+\infty$ et $e^{-\sqrt x}\to0$ : c'est une <span data-k="fi">forme indéterminée</span> du type $(+\infty)\times0$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Tout passer en exponentielle", b: R`<p>Pour $x>0$, on écrit <span data-k="expo">$x = e^{\ln x}$</span>. Alors</p>$$x\,e^{-\sqrt x} = e^{\ln x}\,e^{-\sqrt x} = e^{\ln x-\sqrt x}.$$<p>Il suffit maintenant de trouver la limite de l'exposant $\ln x-\sqrt x$.</p>` },
    { t: "L'exposant", b: R`<p>$\ln x-\sqrt x$ est une forme $(+\infty)-(+\infty)$. Le <span data-k="prep">terme prépondérant</span> est $\sqrt x$, qu'on factorise :</p>$$\ln x-\sqrt x = \sqrt x\left(\frac{\ln x}{\sqrt x}-1\right).$$<p>Par croissances comparées, $\dfrac{\ln x}{\sqrt x} = \dfrac{\ln x}{x^{1/2}}\to0$. La parenthèse tend vers $-1$ et $\sqrt x\to+\infty$, donc l'exposant tend vers $-\infty$.</p>`, rappels: ["croissances-comparees", "operations-limites"] },
    { t: "Conclusion", b: R`<p>L'exposant tend vers $-\infty$ et $e^X\to0$ quand $X\to-\infty$. Par composition :</p>$$\lim_{x\to+\infty}x\,e^{-\sqrt x} = 0.$$`, rappels: ["composition-limites"] },
    { t: "Une autre méthode", b: R`<p>On peut poser $X = \sqrt x$, qui tend vers $+\infty$. Alors $x = X^2$ et</p>$$x\,e^{-\sqrt x} = X^2e^{-X} = \frac{X^2}{e^X}\longrightarrow0$$<p>par croissances comparées. Les deux méthodes donnent bien sûr le même résultat.</p>`, rappels: ["croissances-comparees", "composition-limites"] }
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
  id: "ex-lim-cos-exp", subj: "maths", year: "mpsi", chap: 7, level: 1, time: "8 min",
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
    { t: "Le problème", b: R`<p>On ne peut pas utiliser les règles sur les produits : $\cos(e^x)$ <span data-k="osc">n'a pas de limite</span> en $+\infty$. En revanche, il est <span data-k="bornee">borné</span>.</p>` },
    { t: "Séparer les deux morceaux", b: R`$$\frac{x\cos\left(e^x\right)}{x^2+1} = \underbrace{\frac{x}{x^2+1}}_{\text{tend vers }0\,?}\times\underbrace{\cos\left(e^x\right)}_{\text{borné}}.$$` },
    { t: "La fraction tend vers 0", b: R`<p>On factorise par $x^2$ au dénominateur :</p>$$\frac{x}{x^2+1} = \frac{x}{x^2\left(1+\frac1{x^2}\right)} = \frac1x\cdot\frac{1}{1+\frac1{x^2}}\longrightarrow0\times1 = 0.$$`, rappels: ["operations-limites"] },
    { t: "Justifier par un encadrement", b: R`<p>Pour $x>0$, comme $|\cos(e^x)|\leqslant1$ :</p>$$\left|\frac{x\cos\left(e^x\right)}{x^2+1}\right|\leqslant\frac{x}{x^2+1}.$$<p>Le majorant tend vers $0$, donc l'expression tend vers $0$.</p>`, rappels: ["borne-zero", "encadrement"] },
    { t: "Conclusion", b: R`$$\lim_{x\to+\infty}\frac{x\cos\left(e^x\right)}{x^2+1} = 0.$$` }
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
  id: "ex-lim-partie-entiere", subj: "maths", year: "mpsi", chap: 7, level: 1, time: "8 min",
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
    { t: "Le problème", b: R`<p>$\frac1x\to0$ et $\lfloor x\rfloor\to+\infty$ : c'est une <span data-k="fi">forme indéterminée</span> $0\times(+\infty)$. La partie entière ne se manipule pas bien dans les calculs : on va l'encadrer.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Encadrer la partie entière", b: R`<p>Par définition, $\lfloor x\rfloor\leqslant x<\lfloor x\rfloor+1$. La partie de droite donne $\lfloor x\rfloor>x-1$. D'où</p>$$x-1<\lfloor x\rfloor\leqslant x.$$`, rappels: ["partie-entiere"] },
    { t: "Diviser par x", b: R`<p>Pour $x>0$, on peut diviser par $x$ sans changer le sens des inégalités :</p>$$1-\frac1x<\frac{\lfloor x\rfloor}{x}\leqslant1.$$` },
    { t: "Conclure par encadrement", b: R`<p>À gauche, $1-\frac1x\to1$. À droite, la constante $1$. Par le <span data-k="gendarmes">théorème d'encadrement</span> :</p>$$\lim_{x\to+\infty}\frac{\lfloor x\rfloor}{x} = 1.$$`, rappels: ["encadrement"] }
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
  id: "ex-lim-x2-sin", subj: "maths", year: "mpsi", chap: 7, level: 1, time: "8 min",
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
    { t: "Le problème", b: R`<p>On ne peut pas additionner des limites : <span data-k="sinus">$\sin x$ n'a pas de limite</span>, donc $x\sin x$ non plus. L'idée est de <span data-k="minorer">minorer</span> l'expression.</p>` },
    { t: "Minorer le sinus", b: R`<p>Pour tout $x$, $\sin x\geqslant-1$. Pour $x\geqslant0$, on peut multiplier par $x$ sans changer le sens :</p>$$x\sin x\geqslant-x.$$` },
    { t: "Minorer l'expression", b: R`<p>En ajoutant $x^2$ :</p>$$x^2+x\sin x\geqslant x^2-x = x(x-1).$$` },
    { t: "Le minorant tend vers +∞", b: R`<p>$x\to+\infty$ et $x-1\to+\infty$, donc leur produit $x(x-1)\to+\infty$.</p>`, rappels: ["operations-limites"] },
    { t: "Conclusion", b: R`<p>Notre expression est plus grande qu'une fonction qui tend vers $+\infty$. Par minoration :</p>$$\lim_{x\to+\infty}\big(x^2+x\sin x\big) = +\infty.$$`, rappels: ["minoration-infini"] }
  ],
  piege: R`Multiplier $\sin x\geqslant-1$ par $x$ sans préciser $x\geqslant0$ : pour $x<0$, l'inégalité changerait de sens.`,
  methode: R`Pour montrer qu'une limite vaut $+\infty$ quand un terme oscille, minore l'expression par une fonction simple qui tend vers $+\infty$.`,
  viz: {
    type: "plot", title: "La courbe reste au-dessus de x² − x, qui tend vers +∞", x: [0, 8], y: [-2, 70], xlabel: "x",
    curves: [{ label: "x² + x·sin x", f: x => x * x + x * Math.sin(x) }, { label: "x² − x", f: x => x * x - x }]
  }
}
]);

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
  id: "ex-dl-limite", subj: "maths", year: "mpsi", chap: 14, classique: true, level: 2, time: "8 min",
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
  id: "ex-rang", subj: "maths", year: "mpsi", chap: 16, level: 3, time: "15 min",
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
  id: "ex-diago", subj: "maths", year: "mp", chap: 1, classique: true, level: 3, time: "20 min",
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
  id: "ex-serie-entiere", subj: "maths", year: "mp", chap: 5, level: 3, time: "15 min",
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
  id: "ex-geometrique", subj: "maths", year: "mp", chap: 12, level: 2, time: "10 min",
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
  id: "pb-suite-racine", kind: "probleme", subj: "maths", year: "mpsi", chap: 6, classique: true, level: 3, time: "45 min",
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
  id: "pb-nilpotentes", kind: "probleme", subj: "maths", year: "mp", chap: 1, classique: true, level: 3, time: "30 min",
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
  id: "ex-lim-croissante", subj: "maths", year: "mpsi", chap: 7, classique: true, level: 3, time: "15 min",
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
    { t: "Reconnaître le problème", b: R`<p>Quand $x\to0^+$, $\frac1x\to+\infty$ et $\ln x\to-\infty$. C'est une <span data-k="fi">forme indéterminée</span> $(+\infty)+(-\infty)$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Factoriser le terme dominant", b: R`<p>Le <span data-k="prep">terme prépondérant</span> est $\frac1x$. On le met en facteur :</p>$$\frac1x+\ln x = \frac1x\big(1+x\ln x\big).$$<p>On vérifie en développant : $\frac1x\cdot1 + \frac1x\cdot x\ln x = \frac1x+\ln x$.</p>` },
    { t: "Limite de la parenthèse", b: R`<p>Par croissances comparées, <span data-k="xlnx">$x\ln x\to0$</span> quand $x\to0^+$. Donc $1+x\ln x\to1$.</p>`, rappels: ["croissances-comparees"] },
    { t: "Conclusion", b: R`<p>On a un produit de la forme $(+\infty)\times1$ :</p>$$\lim_{x\to0^+}\left(\frac1x+\ln x\right) = +\infty.$$`, rappels: ["operations-limites"] }
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
    { t: "Reconnaître le problème", b: R`<p>La base et l'exposant tendent vers $0$ : c'est une <span data-k="fi">forme indéterminée</span> $0^0$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Passer en exponentielle", b: R`<p>Pour $x>0$, par définition d'une <span data-k="expo">puissance réelle</span> :</p>$$x^{\sqrt x} = e^{\sqrt x\,\ln x}.$$<p>Il suffit d'étudier l'exposant $\sqrt x\ln x$.</p>`, rappels: ["forme-exp"] },
    { t: "Limite de l'exposant", b: R`<p>$\sqrt x\ln x = x^{1/2}\ln x$ est de la forme $x^\beta\ln x$ avec $\beta = \frac12>0$. Par croissances comparées en $0$, il tend vers $0$.</p>`, rappels: ["croissances-comparees"] },
    { t: "Conclusion", b: R`<p>L'exposant tend vers $0$ et l'exponentielle est continue en $0$ :</p>$$\lim_{x\to0^+}x^{\sqrt x} = e^0 = 1.$$`, rappels: ["composition-limites"] }
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
    { t: "Reconnaître le problème", b: R`<p>On se place sur $]0,1[$, où $\ln x<0$ et $|\ln x|>0$. Quand $x\to0^+$, la base $|\ln x|\to+\infty$ et l'exposant $\frac1{\ln x}\to0$. C'est une <span data-k="fi">forme indéterminée</span> $(+\infty)^0$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Passer en exponentielle", b: R`$$|\ln x|^{\frac1{\ln x}} = \exp\left(\frac{1}{\ln x}\,\ln|\ln x|\right).$$`, rappels: ["forme-exp"] },
    { t: "Changer de variable", b: R`<p>Posons <span data-k="var">$X = \ln x$</span>. Quand $x\to0^+$, on a $X\to-\infty$. L'exposant s'écrit</p>$$\frac{\ln|X|}{X}.$$`, rappels: ["composition-limites"] },
    { t: "Limite de l'exposant", b: R`<p>Avec $t = |X| = -X\to+\infty$ : $\dfrac{\ln|X|}{X} = -\dfrac{\ln t}{t}$. Par croissances comparées, <span data-k="ccx">cela tend vers $0$</span>.</p>`, rappels: ["croissances-comparees"] },
    { t: "Conclusion", b: R`<p>L'exposant tend vers $0$, donc par continuité de l'exponentielle :</p>$$\lim_{x\to0^+}|\ln x|^{\frac1{\ln x}} = e^0 = 1.$$`, rappels: ["composition-limites"] }
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
    { t: "Reconnaître le problème", b: R`<p>Le numérateur et le dénominateur tendent vers $0$ : c'est une forme indéterminée $\frac00$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Faire apparaître un taux d'accroissement", b: R`<p>Comme $\sin0 = 0$, on peut écrire</p>$$\frac{\sin x}{x} = \frac{\sin x-\sin0}{x-0}.$$<p>C'est le <span data-k="taux">taux d'accroissement</span> de la fonction $\sin$ entre $0$ et $x$.</p>` },
    { t: "Utiliser la dérivée", b: R`<p>La fonction $\sin$ est dérivable en $0$, de dérivée $\cos0 = 1$. Le taux d'accroissement tend donc vers $\sin'(0)$.</p>`, rappels: ["taux-accroissement"] },
    { t: "Conclusion", b: R`$$\lim_{x\to0}\frac{\sin x}{x} = \sin'(0) = \cos0 = 1.$$<p>Ce résultat est à connaître par cœur.</p>` }
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
    { t: "Le problème", b: R`<p>$\sin(\ln x)$ <span data-k="osc">n'a pas de limite</span> en $0^+$ : on ne peut pas utiliser la règle sur les produits. Mais il est <span data-k="bornee">borné</span>.</p>` },
    { t: "Encadrer", b: R`<p>Pour $x>0$ :</p>$$|x\sin(\ln x)| = x\,|\sin(\ln x)|\leqslant x.$$`, rappels: ["borne-zero"] },
    { t: "Conclusion", b: R`<p>Le majorant $x$ tend vers $0$. Par encadrement :</p>$$\lim_{x\to0^+}x\sin(\ln x) = 0.$$`, rappels: ["encadrement"] }
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
    { t: "Le piège apparent", b: R`<p>On pourrait croire à une forme $(+\infty)\times0$. Ce n'est vrai qu'<span data-k="apriori">a priori</span>.</p>` },
    { t: "Regarder la partie entière", b: R`<p>Pour $x\in\,]0,1[$, <span data-k="pe">$\lfloor x\rfloor = 0$</span>. Donc, sur cet intervalle,</p>$$\frac1x\lfloor x\rfloor = \frac1x\times0 = 0.$$`, rappels: ["partie-entiere"] },
    { t: "Conclusion", b: R`<p>La fonction est constante égale à $0$ sur $]0,1[$, donc</p>$$\lim_{x\to0^+}\frac1x\lfloor x\rfloor = 0.$$` }
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
    { t: "Reconnaître le problème", b: R`<p>Quand $x\to1^+$, $\ln x\to0^+$ et $\ln(\ln x)\to-\infty$ : c'est une forme indéterminée $0\times(-\infty)$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Reconnaître une composition", b: R`<p>Posons $X = \ln x$. <span data-k="compo">L'expression s'écrit</span></p>$$\ln(x)\ln(\ln x) = X\ln X,$$<p>et $X\to0^+$ quand $x\to1^+$.</p>`, rappels: ["composition-limites"] },
    { t: "Conclusion", b: R`<p>Par croissances comparées, <span data-k="xlnx">$X\ln X\to0$</span> quand $X\to0^+$. Donc</p>$$\lim_{x\to1^+}\ln(x)\ln(\ln x) = 0.$$`, rappels: ["croissances-comparees"] }
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
    { t: "Reconnaître le problème", b: R`<p>Le numérateur et le dénominateur tendent vers $0$ : forme indéterminée $\frac00$, mais en $\frac\pi2$ et non en $0$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Se ramener en 0", b: R`<p>On <span data-k="trans">translate</span> : posons $h = x-\frac\pi2$, qui tend vers $0$. Alors $2x = \pi+2h$ et $\pi-2x = -2h$.</p>`, rappels: ["translation"] },
    { t: "Simplifier", b: R`<p>Comme <span data-k="sinpi">$\sin(\pi+2h) = -\sin(2h)$</span> :</p>$$\frac{\sin(2x)}{\pi-2x} = \frac{-\sin(2h)}{-2h} = \frac{\sin(2h)}{2h}.$$` },
    { t: "Conclusion", b: R`<p>Avec $u = 2h\to0$, $\dfrac{\sin u}{u}\to1$. Donc</p>$$\lim_{x\to\pi/2}\frac{\sin(2x)}{\pi-2x} = 1.$$`, rappels: ["composition-limites"] }
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
    { t: "Reconnaître le problème", b: R`<p>Forme indéterminée $\frac00$.</p>`, rappels: ["formes-indeterminees"] },
    { t: "Retourner la fraction", b: R`<p>Comme $\ln1 = 0$ :</p>$$\frac{x-1}{\ln x} = \frac{1}{\dfrac{\ln x-\ln1}{x-1}}.$$<p>Au dénominateur, on reconnaît <span data-k="inv">un taux d'accroissement</span> de $\ln$ en $1$.</p>` },
    { t: "Utiliser la dérivée", b: R`<p>$\ln$ est dérivable en $1$, de dérivée $\frac11 = 1$. Donc $\dfrac{\ln x-\ln1}{x-1}\to1$.</p>`, rappels: ["taux-accroissement"] },
    { t: "Conclusion", b: R`$$\lim_{x\to1}\frac{x-1}{\ln x} = \frac11 = 1.$$` }
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
    { t: "La stratégie", b: R`<p>$f$ est continue sur $\mathbb R$ si elle est continue en chaque point $a$. On sépare trois cas : $a>0$, $a<0$, et le point de <span data-k="jonction">jonction</span> $a = 0$.</p>` },
    { t: "Cas a > 0", b: R`<p>Sur un <span data-k="voisinage">voisinage</span> de $a$, tous les $x$ sont positifs, donc $f(x) = x^2$. Quand $x\to a$, $f(x)\to a^2 = f(a)$ : $f$ est continue en $a$.</p>`, rappels: ["continuite-operations"] },
    { t: "Cas a < 0", b: R`<p>De même, au voisinage de $a$ on a $f(x) = -x^2\to-a^2 = f(a)$. $f$ est continue en $a$.</p>` },
    { t: "Cas a = 0, à droite", b: R`<p>On ne peut pas raisonner pareil : tout voisinage de $0$ contient des $x$ positifs et négatifs. On étudie donc chaque côté. Pour $x>0$, $f(x) = x^2\to0 = f(0)$ : $f$ est continue à droite en $0$.</p>`, rappels: ["continuite-droite-gauche"] },
    { t: "Cas a = 0, à gauche", b: R`<p>Pour $x<0$, $f(x) = -x^2\to0 = f(0)$ : $f$ est continue à gauche en $0$. Étant continue des deux côtés, elle est continue en $0$.</p>`, rappels: ["continuite-droite-gauche"] },
    { t: "Conclusion et raccourci", b: R`<p>$f$ est continue sur $\mathbb R$. On pouvait aussi remarquer que $f(x) = x\,|x|$ pour tout $x$ : c'est un produit de fonctions continues.</p>`, rappels: ["continuite-operations"] }
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
    { t: "L'idée", b: R`<p>Le maximum n'est pas une opération « classique ». On va l'écrire avec des opérations dont on connaît la continuité : somme, produit par une constante, valeur absolue.</p>` },
    { t: "Une formule pour le max", b: R`<p>Montrons <span data-k="formule">la formule</span> $\max(a,b) = \frac12\big(a+b+|a-b|\big)$.</p><ul><li>Si $a\geqslant b$ : $|a-b| = a-b$ et $\frac12(a+b+a-b) = a$.</li><li>Si $a<b$ : $|a-b| = b-a$ et $\frac12(a+b+b-a) = b$.</li></ul><p>Dans les deux cas on obtient bien le plus grand des deux.</p>` },
    { t: "Appliquer à f et g", b: R`$$\sup(f,g) = \frac12\big(f+g+|f-g|\big).$$` },
    { t: "Conclusion", b: R`<p>$f+g$ et $f-g$ sont continues. $|f-g|$ est la composée de $f-g$ par la valeur absolue, qui est continue. La somme et le produit par $\frac12$ conservent la continuité : $\sup(f,g)$ est continue.</p>`, rappels: ["continuite-operations"] }
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
    { t: "Traduire l'hypothèse", b: R`<p>Le produit est $\leqslant0$ : $g(a)-f(a)$ et $g(b)-f(b)$ sont <span data-k="signes">de signes opposés</span> (au sens large).</p>` },
    { t: "La fonction auxiliaire", b: R`<p>On pose <span data-k="aux">$\varphi = g-f$</span>. Elle est continue sur $[a,b]$ comme différence de fonctions continues, et $\varphi(a)\varphi(b)\leqslant0$.</p>`, rappels: ["continuite-operations"] },
    { t: "Appliquer le TVI", b: R`<p>$\varphi$ est continue sur l'intervalle $[a,b]$ et $0$ est compris entre $\varphi(a)$ et $\varphi(b)$. Par le théorème des valeurs intermédiaires, il existe $x\in[a,b]$ tel que $\varphi(x) = 0$.</p>`, rappels: ["tvi"] },
    { t: "Conclusion", b: R`<p>En ce point, $g(x)-f(x) = 0$, c'est-à-dire $f(x) = g(x)$.</p>` }
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
    { t: "L'idée", b: R`<p>Une fonction croissante comme $x$ est minorée par sa valeur en $0$. Il faut donc une fonction qui <span data-k="osc">oscille</span> de plus en plus fort. Candidat : $f(x) = x\cos x$.</p>` },
    { t: "Continuité", b: R`<p>$f$ est le produit de deux fonctions continues : elle est continue sur $[0,+\infty[$.</p>`, rappels: ["continuite-operations"] },
    { t: "Non majorée", b: R`<p>Pour $n\in\mathbb N$, $f(2n\pi) = 2n\pi\cos(2n\pi) = 2n\pi$, qui tend vers $+\infty$. Aucun réel $M$ ne peut majorer toutes ces valeurs : $f$ n'est <span data-k="majoree">pas majorée</span>.</p>` },
    { t: "Non minorée", b: R`<p>$f\big((2n+1)\pi\big) = (2n+1)\pi\cos\big((2n+1)\pi\big) = -(2n+1)\pi$, qui tend vers $-\infty$. $f$ n'est pas minorée.</p>` }
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
    { t: "L'idée", b: R`<p>Quand $x\to0^+$, $\frac1x\to+\infty$. La fonction $f(x) = \cos\frac1x$ oscille donc de plus en plus vite près de $0$. Elle est continue sur $]0,+\infty[$ comme composée de fonctions continues.</p>`, rappels: ["continuite-operations"] },
    { t: "La méthode", b: R`<p>Pour montrer qu'il n'y a pas de limite, on cherche <span data-k="deux">deux suites</span> qui tendent vers $0$ et dont les images ont des limites différentes.</p>`, rappels: ["sequentielle"] },
    { t: "Les deux suites", b: R`<p>Posons $u_n = \dfrac{1}{2n\pi}$ et $v_n = \dfrac{1}{(2n+1)\pi}$ pour $n\geqslant1$. Les deux tendent vers $0$ par valeurs positives.</p>$$f(u_n) = \cos(2n\pi) = 1\qquad f(v_n) = \cos\big((2n+1)\pi\big) = -1.$$` },
    { t: "Conclusion", b: R`<p>Si $f$ avait une limite $\ell$ en $0$, on aurait $f(u_n)\to\ell$ et $f(v_n)\to\ell$, donc $\ell = 1$ et $\ell = -1$. C'est impossible : $f$ n'a pas de limite en $0$.</p>`, rappels: ["unicite-limite"] }
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
    { t: "Le candidat", b: R`<p>On prend <span data-k="indic">l'indicatrice de $\mathbb Q$</span> : $\mathbf 1_{\mathbb Q}(x) = 1$ si $x\in\mathbb Q$, et $0$ sinon.</p>` },
    { t: "La méthode", b: R`<p>Si $f$ est continue en $a$, alors pour toute suite $x_n\to a$, on a $f(x_n)\to f(a)$. On va trouver, en chaque point, une suite qui contredit cela.</p>`, rappels: ["sequentielle"] },
    { t: "En un point irrationnel", b: R`<p>Soit $a\notin\mathbb Q$, donc $f(a) = 0$. Par <span data-k="dense">densité</span>, il existe une suite de rationnels $u_n\to a$. Alors $f(u_n) = 1\to1\neq0 = f(a)$ : $f$ n'est pas continue en $a$.</p>`, rappels: ["densite"] },
    { t: "En un point rationnel", b: R`<p>Soit $a\in\mathbb Q$, donc $f(a) = 1$. Il existe une suite d'irrationnels $v_n\to a$. Alors $f(v_n) = 0\to0\neq1 = f(a)$ : $f$ n'est pas continue en $a$.</p>`, rappels: ["densite"] },
    { t: "Conclusion", b: R`<p>Tout réel est rationnel ou irrationnel : $\mathbf 1_{\mathbb Q}$ n'est continue en aucun point de $\mathbb R$.</p>` }
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
    { t: "L'intuition", b: R`<p>Une fonction périodique répète les mêmes valeurs à l'infini. Si elle se stabilise vers $\ell$, c'est qu'elle valait déjà $\ell$ partout. On va le prouver.</p>` },
    { t: "Projeter x à l'infini", b: R`<p>Soit $T>0$ une période et $x$ un réel <span data-k="fixe">fixé</span>. Par périodicité, pour tout $n\in\mathbb N$ :</p>$$f(x+nT) = f(x).$$<p>C'est l'idée de <span data-k="proj">projeter</span> le calcul de $f(x)$ à l'infini.</p>`, rappels: ["periodique"] },
    { t: "Passer à la limite", b: R`<p>Quand $n\to+\infty$, $x+nT\to+\infty$. Par caractérisation séquentielle, $f(x+nT)\to\ell$.</p>`, rappels: ["sequentielle"] },
    { t: "Comparer", b: R`<p>Mais la suite $\big(f(x+nT)\big)_n$ est constante, égale à $f(x)$ : elle tend aussi vers $f(x)$. Par unicité de la limite, $f(x) = \ell$.</p>`, rappels: ["unicite-limite"] },
    { t: "Conclusion", b: R`<p>Ceci vaut pour tout réel $x$ : $f$ est constante, égale à $\ell$.</p>` }
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
    { t: "(i) ⇒ (ii) · Préparer", b: R`<p>On suppose (i). Soit $[a,b]$ un segment. Posons <span data-k="A">$A = \max(|a|,|b|)$</span>. Alors $[a,b]\subset[-A,A]$.</p>` },
    { t: "(i) ⇒ (ii) · Utiliser les limites", b: R`<p>Par définition de $|f|\to+\infty$ en $+\infty$ et en $-\infty$, il existe des réels $M$ et $M'$ tels que</p>$$x>M\implies|f(x)|>A\qquad\text{et}\qquad x<M'\implies|f(x)|>A.$$`, rappels: ["def-limite"] },
    { t: "(i) ⇒ (ii) · Conclure", b: R`<p>Posons $M'' = \max(M,-M')$. Si $|x|>M''$, alors $x>M$ ou $x<M'$, donc $|f(x)|>A$, donc $f(x)\notin[a,b]$.</p><p>Ainsi, tout $x$ de $f^{-1}([a,b])$ vérifie $|x|\leqslant M''$ : cette partie est <span data-k="borne">bornée</span>.</p>` },
    { t: "(ii) ⇒ (i) · Préparer", b: R`<p>On suppose (ii). Soit $A\geqslant0$ quelconque. Le segment $[-A,A]$ a une image réciproque bornée : il existe $M\geqslant0$ tel que</p>$$f^{-1}([-A,A])\subset[-M,M].$$` },
    { t: "(ii) ⇒ (i) · Conclure", b: R`<p>Si $|x|>M$, alors $x\notin f^{-1}([-A,A])$, donc $f(x)\notin[-A,A]$, c'est-à-dire $|f(x)|>A$.</p><p>On a montré : pour tout $A$, il existe $M$ tel que $x>M\implies|f(x)|>A$, et de même pour $x<-M$. C'est exactement $|f|\to+\infty$ en $+\infty$ et en $-\infty$.</p>`, rappels: ["def-limite"] }
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
    { t: "La stratégie", b: R`<p>On étudie la continuité en un réel $a$, en <span data-k="cas">distinguant</span> $a\notin\mathbb Z$ et $a\in\mathbb Z$.</p>` },
    { t: "Cas a non entier", b: R`<p>Sur un petit intervalle autour de $a$, $\lfloor x\rfloor$ est constant égal à $\lfloor a\rfloor$. Donc, près de $a$,</p>$$f(x) = \lfloor a\rfloor+\big(x-\lfloor a\rfloor\big)^2\xrightarrow[x\to a]{}\lfloor a\rfloor+\big(a-\lfloor a\rfloor\big)^2 = f(a).$$<p>$f$ est continue en $a$.</p>`, rappels: ["partie-entiere", "continuite-operations"] },
    { t: "Cas a entier, à droite", b: R`<p>Pour $x\in[a,a+1[$, $\lfloor x\rfloor = a$, donc $f(x) = a+(x-a)^2\to a$ quand $x\to a^+$. Et $f(a) = a+0 = a$ : $f$ est continue à droite en $a$.</p>`, rappels: ["continuite-droite-gauche"] },
    { t: "Cas a entier, à gauche", b: R`<p><span data-k="gauche">Pour $x\in[a-1,a[$</span>, $\lfloor x\rfloor = a-1$, donc</p>$$f(x) = a-1+\big(x-(a-1)\big)^2\xrightarrow[x\to a^-]{}a-1+1^2 = a = f(a).$$<p>$f$ est continue à gauche en $a$.</p>`, rappels: ["continuite-droite-gauche"] },
    { t: "Conclusion", b: R`<p>$f$ est continue à gauche et à droite en tout entier, et continue ailleurs : $f$ est continue sur $\mathbb R$. Le saut de $-1$ de la partie entière est exactement compensé par le carré, qui passe de $1$ à $0$.</p>` }
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
    { t: "L'idée", b: R`<p>Une fonction monotone a toujours des limites à gauche et à droite. On va montrer qu'en tout point, elles sont égales à $f(a)$, ce qui donne la continuité.</p>` },
    { t: "Ce que donne la croissance de f", b: R`<p>Soit $a>0$. Comme $f$ est croissante, ses <span data-k="lg">limites à gauche et à droite</span> existent et</p>$$f(a^-)\leqslant f(a)\leqslant f(a^+).\qquad(1)$$`, rappels: ["monotone-encadrement"] },
    { t: "Ce que donne la décroissance de f(x)/x", b: R`<p>$x\mapsto\frac{f(x)}x$ est décroissante, donc, <span data-k="sens">avec le sens inversé</span> :</p>$$\lim_{x\to a^+}\frac{f(x)}x\leqslant\frac{f(a)}a\leqslant\lim_{x\to a^-}\frac{f(x)}x.$$<p>Par produit de limites, $\lim_{x\to a^\pm}\frac{f(x)}x = \frac{f(a^\pm)}a$. D'où</p>$$\frac{f(a^+)}a\leqslant\frac{f(a)}a\leqslant\frac{f(a^-)}a.$$`, rappels: ["monotone-encadrement", "operations-limites"] },
    { t: "Multiplier par a", b: R`<p>Comme $a>0$, on peut multiplier sans changer le sens :</p>$$f(a^+)\leqslant f(a)\leqslant f(a^-).\qquad(2)$$` },
    { t: "Conclusion", b: R`<p>En combinant (1) et (2) : $f(a^-)\leqslant f(a)\leqslant f(a^+)\leqslant f(a)\leqslant f(a^-)$. Tout est égal : $f(a^-) = f(a) = f(a^+)$. $f$ est continue à gauche et à droite en $a$, donc continue en $a$, et ce pour tout $a>0$.</p>`, rappels: ["continuite-droite-gauche"] }
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
    { t: "L'outil", b: R`<p>L'image d'un intervalle par une fonction continue est un intervalle. Donc $f(I)$ est un intervalle.</p>`, rappels: ["image-intervalle"] },
    { t: "Ce que dit l'hypothèse", b: R`<p>$f$ n'est ni minorée ni majorée : l'intervalle $f(I)$ n'est ni minoré ni majoré.</p>` },
    { t: "Conclusion", b: R`<p>Soit $y$ réel. Il existe $u,v\in f(I)$ avec $u<y<v$. Comme $f(I)$ est un intervalle, il contient tout ce qui est entre $u$ et $v$, donc $y$. Ainsi <span data-k="inter">$f(I) = \mathbb R$</span> : $f$ est surjective.</p>`, rappels: ["tvi"] }
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
    { t: "Se simplifier la vie", b: R`<p>Si $\ell = \ell'$, il n'y a aucune valeur strictement entre les deux : rien à montrer. Sinon, <span data-k="quitte">quitte à remplacer $f$ par $-f$</span>, on suppose $\ell<\ell'$. Soit $y\in\,]\ell,\ell'[$.</p>` },
    { t: "f passe sous y", b: R`<p>Montrons qu'il existe $a$ avec $f(a)<y$. Par l'absurde, si $f(x)\geqslant y$ pour tout $x$, alors en passant à la limite en $-\infty$, on obtient $\ell\geqslant y$. C'est faux, car $y>\ell$.</p>`, rappels: ["absurde", "passage-limite"] },
    { t: "f passe au-dessus de y", b: R`<p>De même, si $f(x)\leqslant y$ pour tout $x$, la limite en $+\infty$ donne $\ell'\leqslant y$ : faux. Il existe donc $b$ avec $f(b)>y$.</p>`, rappels: ["absurde"] },
    { t: "Appliquer le TVI", b: R`<p>$f$ est continue sur l'intervalle d'extrémités $a$ et $b$, et $y$ est compris entre $f(a)$ et $f(b)$. Par le théorème des valeurs intermédiaires, il existe $x$ avec $f(x) = y$.</p>`, rappels: ["tvi"] }
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
    { t: "La fonction auxiliaire", b: R`<p>On pose <span data-k="phi">$\varphi(x) = f(x)-x$</span> sur $[a,b]$. Elle est continue comme différence de fonctions continues. Un point fixe de $f$ est un zéro de $\varphi$.</p>`, rappels: ["continuite-operations"] },
    { t: "Signe en a", b: R`<p>Par hypothèse, $f(a)\in[a,b]$, donc $f(a)\geqslant a$ et $\varphi(a) = f(a)-a\geqslant0$.</p>` },
    { t: "Signe en b", b: R`<p>De même, $f(b)\in[a,b]$, donc $f(b)\leqslant b$ et $\varphi(b) = f(b)-b\leqslant0$.</p>` },
    { t: "Conclusion", b: R`<p>$\varphi$ est continue sur $[a,b]$, positive en $a$ et négative en $b$. Par le théorème des valeurs intermédiaires, elle s'annule en un $x\in[a,b]$ : $f(x) = x$.</p>`, rappels: ["tvi"] }
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
    { t: "La fonction auxiliaire", b: R`<p>Comme pour l'autre version, on pose $\varphi(x) = f(x)-x$, continue sur $[a,b]$. On cherche un zéro.</p>`, rappels: ["continuite-operations"] },
    { t: "Utiliser l'hypothèse", b: R`<p>$a$ et $b$ sont <span data-k="atteint">atteints</span> par $f$ : il existe $\alpha,\beta\in[a,b]$ avec $f(\alpha) = a$ et $f(\beta) = b$.</p>` },
    { t: "Les signes", b: R`$$\varphi(\alpha) = a-\alpha\leqslant0\qquad\varphi(\beta) = b-\beta\geqslant0,$$<p>car $\alpha$ et $\beta$ sont dans $[a,b]$.</p>` },
    { t: "Conclusion", b: R`<p>$\varphi$ est continue sur le segment d'extrémités $\alpha$ et $\beta$ et change de signe : par le TVI, elle s'annule entre les deux. On a trouvé un point fixe.</p>`, rappels: ["tvi"] }
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
    { t: "La fonction auxiliaire", b: R`<p>Soit $n\geqslant1$. On pose, pour $x\in\left[0,1-\frac1n\right]$,</p>$$\varphi(x) = f\left(x+\frac1n\right)-f(x).$$<p>Elle est continue, et on cherche un zéro de $\varphi$ : une <span data-k="corde">corde horizontale</span> de longueur $\frac1n$.</p>`, rappels: ["continuite-operations"] },
    { t: "Une somme télescopique", b: R`<p>Calculons <span data-k="somme">la somme</span> de $\varphi$ aux points $\frac kn$ :</p>$$\sum_{k=0}^{n-1}\varphi\left(\frac kn\right) = \sum_{k=0}^{n-1}\left(f\left(\frac{k+1}n\right)-f\left(\frac kn\right)\right) = f(1)-f(0) = 0.$$`, rappels: ["telescopage"] },
    { t: "Les signes", b: R`<p>Une somme nulle de nombres ne peut pas avoir tous ses termes strictement positifs, ni tous strictement négatifs. Il existe donc deux indices $i,j$ avec $\varphi\left(\frac in\right)\leqslant0$ et $\varphi\left(\frac jn\right)\geqslant0$.</p>` },
    { t: "Conclusion", b: R`<p>$\varphi$ est continue sur l'intervalle entre $\frac in$ et $\frac jn$, inclus dans $\left[0,1-\frac1n\right]$, et elle y change de signe. Par le TVI, elle s'annule en un $x_0$ : $f(x_0) = f\left(x_0+\frac1n\right)$.</p>`, rappels: ["tvi"] }
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
    { t: "La stratégie", b: R`<p>Le théorème des bornes atteintes ne s'applique pas directement : $[0,+\infty[$ n'est pas un segment. On <span data-k="coupe">coupe</span> le domaine en deux morceaux.</p>`, rappels: ["bornes-atteintes"] },
    { t: "Loin, grâce à la limite", b: R`<p>On applique la définition de la limite avec $\varepsilon = 1$ : il existe $A\geqslant0$ tel que $|f(x)-\ell|\leqslant1$ pour tout $x\geqslant A$. Alors</p>$$|f(x)|\leqslant|f(x)-\ell|+|\ell|\leqslant1+|\ell| = M_1.$$`, rappels: ["def-limite-finie", "inegalite-triangulaire"] },
    { t: "Près de 0, grâce à la continuité", b: R`<p>Sur le segment $[0,A]$, $f$ est continue donc bornée : il existe $M_2$ tel que $|f(x)|\leqslant M_2$ pour $x\in[0,A]$.</p>`, rappels: ["bornes-atteintes"] },
    { t: "Conclusion", b: R`<p>Avec $M = \max(M_1,M_2)$, on a $|f(x)|\leqslant M$ pour tout $x\geqslant0$ : $f$ est bornée.</p>` }
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
    { t: "Se ramener à une période", b: R`<p>Par <span data-k="periode">périodicité</span>, toutes les valeurs prises par $f$ sur $\mathbb R$ sont déjà prises sur $[0,T]$ : $f(\mathbb R) = f([0,T])$.</p>`, rappels: ["periodique"] },
    { t: "Borner sur la période", b: R`<p>$[0,T]$ est un segment et $f$ y est continue : par le théorème des bornes atteintes, il existe $M$ avec $|f(y)|\leqslant M$ pour tout $y\in[0,T]$.</p>`, rappels: ["bornes-atteintes"] },
    { t: "Conclusion", b: R`<p>Pour tout réel $x$, $f(x)$ est l'une des valeurs prises sur $[0,T]$, donc $|f(x)|\leqslant M$ : $f$ est bornée sur $\mathbb R$.</p>` }
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
    { t: "L'image de f", b: R`<p>$f(\mathbb R) = f([0,T])$ par périodicité. Sur le segment $[0,T]$, $f$ est continue : l'image est un segment $[m,M]$, avec <span data-k="ab">$m = f(a)$ et $M = f(b)$</span>.</p>`, rappels: ["periodique", "bornes-atteintes"] },
    { t: "Placer b après a", b: R`<p><span data-k="quitte">Quitte à remplacer $b$ par $b+T$</span>, on peut supposer $a\leqslant b\leqslant a+T$.</p>`, rappels: ["periodique"] },
    { t: "Le principe", b: R`<p>Si une fenêtre $[x,x+T/2]$ contient un point où $f$ vaut $m$ et un point où $f$ vaut $M$, alors son image est un intervalle contenant $m$ et $M$, donc égal à $[m,M] = \operatorname{Im}(f)$.</p>`, rappels: ["image-intervalle"] },
    { t: "Premier cas", b: R`<p>Si $b\in[a,a+T/2]$, la fenêtre $[a,a+T/2]$ contient $a$ (où $f = m$) et $b$ (où $f = M$) : $x = a$ convient.</p>` },
    { t: "Second cas", b: R`<p>Sinon $b\in[a+T/2,a+T]$. La fenêtre $[a+T/2,a+T]$ contient $b$ et $a+T$, où $f(a+T) = f(a) = m$. Donc $x = a+\frac T2$ convient.</p>`, rappels: ["periodique"] }
  ],
  piege: R`Oublier de justifier que l'image d'une fenêtre est un intervalle : c'est ce qui permet de passer de « contient $m$ et $M$ » à « contient tout $[m,M]$ ».`,
  methode: R`Pour qu'un intervalle atteigne toutes les valeurs, il suffit qu'il contienne un point de minimum et un point de maximum.`
},
{
  id: "tvi-extremum-translation", subj: "maths", year: "mpsi", chap: 7, level: 4, time: "25 min",
  title: "Translations qui laissent une valeur inchangée",
  enonce: R`<p>Soit $f : [a,b]\to\mathbb R$ continue avec $f(a) = f(b)$ et $a<b$. Montrer qu'il existe $\alpha>0$ tel que</p>$$\forall t\in[0,\alpha],\ \exists x\in[a,b-\alpha],\quad f(x+t) = f(x).$$`,
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
    { t: "Le cas facile", b: R`<p>Si $f$ est constante, n'importe quel $\alpha\in\left]0,b-a\right]$ convient : $f(x+t) = f(x)$ pour tous $x,t$.</p>` },
    { t: "Un extremum intérieur", b: R`<p>Sinon, $f$ atteint son maximum et son minimum sur $[a,b]$. L'un des deux est <span data-k="interieur">atteint à l'intérieur</span>. <span data-k="moinsf">Quitte à remplacer $f$ par $-f$</span>, le maximum est atteint en $c\in\,]a,b[$.</p>`, rappels: ["bornes-atteintes"] },
    { t: "Choisir α", b: R`<p>On pose <span data-k="alpha">$\alpha = \min(c-a,b-c)>0$</span>. Ainsi $[c-\alpha,c+\alpha]\subset[a,b]$.</p>` },
    { t: "La fonction auxiliaire", b: R`<p>Soit $t\in[0,\alpha]$. Sur $[c-t,c]$, on pose $g(x) = f(x+t)-f(x)$, qui est continue. Comme $f$ est maximale en $c$ :</p>$$g(c-t) = f(c)-f(c-t)\geqslant0,\qquad g(c) = f(c+t)-f(c)\leqslant0.$$`, rappels: ["continuite-operations"] },
    { t: "Conclusion", b: R`<p>Par le TVI, $g$ s'annule en un $x\in[c-t,c]$ : $f(x+t) = f(x)$. Enfin $x\geqslant c-t\geqslant c-\alpha\geqslant a$ et $x\leqslant c\leqslant b-\alpha$ : on a bien $x\in[a,b-\alpha]$.</p>`, rappels: ["tvi"] }
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
      cas: R`Soit $f$ est en train de battre son record en $a$ ($f(a) = g(a)$), soit elle est en dessous ($f(a)<g(a)$).`,
      alpha: R`On choisit $\alpha\leqslant a$ pour que $[a-\alpha,a+\alpha]$ reste dans $[0,+\infty[$.`
    }
  },
  steps: [
    { t: "g est bien définie", b: R`<p>Pour $x\geqslant0$, $f$ est continue sur le segment $[0,x]$ : elle y atteint son maximum. $g(x)$ existe.</p>`, rappels: ["bornes-atteintes"] },
    { t: "g est croissante", b: R`<p>Si $x\leqslant y$, alors $[0,x]\subset[0,y]$ : le maximum sur un ensemble plus grand est plus grand. Donc $g(x)\leqslant g(y)$. C'est un <span data-k="glissant">record glissant</span>.</p>` },
    { t: "Continuité : deux cas", b: R`<p>Soit $a>0$ (le cas $a = 0$ se traite de même, à droite seulement). On a toujours $f(a)\leqslant g(a)$. On <span data-k="cas">distingue</span> $f(a)<g(a)$ et $f(a) = g(a)$.</p>` },
    { t: "Cas f(a) < g(a)", b: R`<p>Par continuité de $f$, il existe <span data-k="alpha">$\alpha>0$</span> tel que $f(x)<g(a)$ sur $[a-\alpha,a+\alpha]$. Le record $g(a)$ est atteint en un $t_0<a-\alpha$. Pour $x$ dans $[a-\alpha,a+\alpha]$, le record reste donc $g(a)$ : $g$ est constante près de $a$, donc continue en $a$.</p>`, rappels: ["continuite-operations"] },
    { t: "Cas f(a) = g(a) : encadrer", b: R`<p>Soit $\varepsilon>0$. Par continuité de $f$, il existe $\alpha>0$ avec $f(a)-\varepsilon\leqslant f(x)\leqslant f(a)+\varepsilon$ sur $[a-\alpha,a+\alpha]$.</p><ul><li>$g(a-\alpha)\geqslant f(a-\alpha)\geqslant g(a)-\varepsilon$.</li><li>Sur $[0,a]$, $f\leqslant g(a)$, et sur $[a,a+\alpha]$, $f\leqslant g(a)+\varepsilon$. Donc $g(a+\alpha)\leqslant g(a)+\varepsilon$.</li></ul>` },
    { t: "Cas f(a) = g(a) : conclure", b: R`<p>$g$ est croissante, donc pour tout $x\in[a-\alpha,a+\alpha]$ :</p>$$g(a)-\varepsilon\leqslant g(a-\alpha)\leqslant g(x)\leqslant g(a+\alpha)\leqslant g(a)+\varepsilon.$$<p>C'est la définition de la continuité de $g$ en $a$.</p>` }
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
    { t: "Analyse", b: R`<p>On procède par <span data-k="analyse">analyse-synthèse</span>. Soit $f$ une solution. En appliquant l'équation à $\frac x2$ : $f(x) = f\left(2\cdot\frac x2\right) = f\left(\frac x2\right)$.</p>` },
    { t: "Itérer", b: R`<p>Par récurrence sur $n$, pour tout $x$ réel et tout $n\in\mathbb N$ :</p>$$f\left(\frac x{2^n}\right) = f(x).$$`, rappels: ["recurrence"] },
    { t: "Passer à la limite", b: R`<p>Fixons $x$. Quand $n\to+\infty$, $\frac x{2^n}\to0$. Par continuité de $f$ en $0$, $f\left(\frac x{2^n}\right)\to f(0)$. Mais cette suite est constante égale à $f(x)$.</p>`, rappels: ["sequentielle"] },
    { t: "Identifier", b: R`<p>Par unicité de la limite, $f(x) = f(0)$. Ceci pour tout $x$ : $f$ est constante.</p>`, rappels: ["unicite-limite"] },
    { t: "Synthèse", b: R`<p>Réciproquement, une fonction constante vérifie bien $f(2x) = f(x)$ et est continue en $0$. Les solutions sont exactement les fonctions constantes.</p>` }
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
    { t: "Premières valeurs", b: R`<p>Soit $f$ une solution. <span data-k="choix">Avec $x = y = 0$</span> : $f(0) = 2f(0)$, donc $f(0) = 0$. Avec $y = -x$ : $0 = f(x)+f(-x)$, donc $f$ est impaire.</p>` },
    { t: "Multiples entiers", b: R`<p>Avec $y = nx$ : $f\big((n+1)x\big) = f(nx)+f(x)$. La suite $\big(f(nx)\big)_n$ est <span data-k="arith">arithmétique</span> de raison $f(x)$, de premier terme $f(0) = 0$. Donc $f(nx) = nf(x)$ pour $n\in\mathbb N$, puis pour $n\in\mathbb Z$ par imparité.</p>`, rappels: ["recurrence"] },
    { t: "Les rationnels", b: R`<p>Posons $a = f(1)$. Soit $x = \frac pq$ avec $p\in\mathbb Z$, $q\in\mathbb N^*$. D'une part $f\left(\frac pq\right) = p\,f\left(\frac1q\right)$. D'autre part $a = f(1) = f\left(q\cdot\frac1q\right) = q\,f\left(\frac1q\right)$. Donc</p>$$f\left(\frac pq\right) = \frac pq\,a.$$` },
    { t: "Tous les réels", b: R`<p>Soit $x$ réel. Le rationnel $\frac{\lfloor nx\rfloor}n$ <span data-k="dense">tend vers $x$</span>. Par continuité, $f\left(\frac{\lfloor nx\rfloor}n\right)\to f(x)$. Mais par l'étape précédente, cette quantité vaut $a\frac{\lfloor nx\rfloor}n\to ax$.</p>`, rappels: ["densite", "sequentielle"] },
    { t: "Conclusion", b: R`<p>Par unicité de la limite, $f(x) = ax$ pour tout réel $x$. Réciproquement, $x\mapsto ax$ est continue et vérifie $(*)$. Les solutions sont les fonctions linéaires $x\mapsto ax$.</p>`, rappels: ["unicite-limite"] }
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
    { t: "f est positive", b: R`<p>Soit $f$ une solution. Pour tout $x$ : $f(x) = f\left(\frac x2+\frac x2\right) = f\left(\frac x2\right)^2\geqslant0$.</p>` },
    { t: "Le cas où f s'annule", b: R`<p>S'il existe $x_0$ avec $f(x_0) = 0$, alors pour tout $x$ :</p>$$f(x) = f\big((x-x_0)+x_0\big) = f(x-x_0)\,f(x_0) = 0.$$<p>$f$ est la fonction nulle.</p>` },
    { t: "Passer au logarithme", b: R`<p>Sinon $f>0$ partout, et on pose <span data-k="ln">$g = \ln\circ f$</span>, continue. Pour tous $x,y$ :</p>$$g(x+y) = \ln\big(f(x)f(y)\big) = \ln f(x)+\ln f(y) = g(x)+g(y).$$`, rappels: ["continuite-operations"] },
    { t: "Utiliser les fonctions additives", b: R`<p>$g$ est continue et additive : <span data-k="add">il existe $a$ réel</span> tel que $g(x) = ax$ pour tout $x$. Donc $f(x) = e^{g(x)} = e^{ax}$.</p>` },
    { t: "Synthèse", b: R`<p>Réciproquement, la fonction nulle et les fonctions $x\mapsto e^{ax}$ sont continues et vérifient $f(x+y) = f(x)f(y)$. Ce sont exactement les solutions.</p>` }
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
    { t: "f est bijective", b: R`<p>Soit $f$ une solution. La relation $f\circ f = \mathrm{Id}$ montre que <span data-k="bij">$f$ est une bijection</span>, de réciproque elle-même.</p>` },
    { t: "f est strictement monotone", b: R`<p>$f$ est continue et injective sur l'intervalle $[0,+\infty[$ : elle est strictement monotone.</p>`, rappels: ["injective-monotone"] },
    { t: "f est croissante", b: R`<p>Si $f$ était décroissante, on aurait $f(x)\leqslant f(0)$ pour tout $x$ : <span data-k="decr">elle ne serait pas surjective</span> sur $[0,+\infty[$. Donc $f$ est strictement croissante.</p>` },
    { t: "f(x) = x", b: R`<p>Soit $x\geqslant0$. Si $f(x)<x$, en appliquant $f$ strictement croissante : $f\big(f(x)\big)<f(x)$, c'est-à-dire $x<f(x)$. Contradiction. De même, $f(x)>x$ donnerait $x>f(x)$. Donc $f(x) = x$.</p>`, rappels: ["absurde"] },
    { t: "Synthèse", b: R`<p>L'identité convient évidemment. C'est la seule solution.</p>` }
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
    { t: "Se ramener à ℓ = 0", b: R`<p>On remplace $f$ par $x\mapsto f(x)-\ell x$ : <span data-k="reduc">on peut supposer $\ell = 0$</span>. Soit $\varepsilon>0$. Il existe $A\geqslant0$ tel que $|f(x+1)-f(x)|\leqslant\varepsilon$ pour tout $x\geqslant A$.</p>`, rappels: ["def-limite-finie"] },
    { t: "Reculer d'unité en unité", b: R`<p>Soit $x\geqslant A$ et $n = \lfloor x-A\rfloor$, de sorte que $x-n\in[A,A+1[$. <span data-k="decr">Par télescopage</span> :</p>$$f(x) = \sum_{k=0}^{n-1}\big(f(x-k)-f(x-k-1)\big)+f(x-n).$$`, rappels: ["telescopage", "partie-entiere"] },
    { t: "Majorer", b: R`<p>Chaque $x-k-1$ est $\geqslant x-n\geqslant A$, donc chaque terme de la somme est $\leqslant\varepsilon$ en valeur absolue. Et <span data-k="M">$|f(x-n)|\leqslant M$</span>. Par l'inégalité triangulaire :</p>$$|f(x)|\leqslant n\varepsilon+M\leqslant x\varepsilon+M.$$`, rappels: ["inegalite-triangulaire", "bornes-atteintes"] },
    { t: "Diviser par x", b: R`$$\left|\frac{f(x)}x\right|\leqslant\varepsilon+\frac Mx.$$<p>Pour $x\geqslant A' = \frac M\varepsilon$, on a $\frac Mx\leqslant\varepsilon$.</p>` },
    { t: "Conclusion", b: R`<p>Pour $x\geqslant\max(A,A')$ et $x>0$ : $\left|\frac{f(x)}x\right|\leqslant2\varepsilon$. Comme $\varepsilon$ est quelconque, $\frac{f(x)}x\to0$, ce qui donne le résultat pour $\ell$ quelconque.</p>`, rappels: ["def-limite-finie"] }
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
    { t: "La suite est bien définie", b: R`<p>Si $u_n\in[a,b]$, alors $f(u_n)\in[a,b]$, et $u_{n+1}$ est <span data-k="milieu">leur milieu</span> : $u_{n+1}\in[a,b]$. Par récurrence, tous les termes existent et restent dans $[a,b]$.</p>`, rappels: ["recurrence"] },
    { t: "Écart entre deux termes", b: R`<p>Pour $n\geqslant1$ :</p>$$u_{n+1}-u_n = \frac{\big(f(u_n)-f(u_{n-1})\big)+\big(u_n-u_{n-1}\big)}2.$$` },
    { t: "Le signe se transmet", b: R`<p>Par hypothèse, $|f(u_n)-f(u_{n-1})|\leqslant|u_n-u_{n-1}|$. Le premier morceau ne peut donc pas l'emporter sur le second : <span data-k="signe">$u_{n+1}-u_n$ a le signe de $u_n-u_{n-1}$</span> (au sens large). De proche en proche, tous les écarts ont le signe de $u_1-u_0$ : la suite est monotone.</p>`, rappels: ["lipschitz"] },
    { t: "Convergence", b: R`<p>$(u_n)$ est monotone et bornée, car à valeurs dans $[a,b]$ : elle converge vers un réel $\ell\in[a,b]$.</p>`, rappels: ["limite-monotone"] },
    { t: "La limite est un point fixe", b: R`<p>$f$ est lipschitzienne donc continue. En passant à la limite dans la relation de récurrence :</p>$$\ell = \frac{\ell+f(\ell)}2\iff f(\ell) = \ell.$$`, rappels: ["lipschitz", "continuite-point-fixe"] }
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
    { t: "Par l'absurde", b: R`<p>Supposons que $g-f$ ne s'annule jamais. Étant continue sur l'intervalle $[a,b]$, elle <span data-k="signe">garde un signe constant</span>. Quitte à échanger $f$ et $g$, on suppose $g-f>0$.</p>`, rappels: ["absurde", "tvi"] },
    { t: "Un point fixe de f", b: R`<p>$f$ envoie $[a,b]$ dans $[a,b]$ et est continue : <span data-k="pf">elle a un point fixe</span> $x$, c'est-à-dire $f(x) = x$.</p>`, rappels: ["tvi"] },
    { t: "g envoie les points fixes de f sur des points fixes de f", b: R`<p>Si $f(x) = x$, alors $f\big(g(x)\big) = g\big(f(x)\big) = g(x)$ : $g(x)$ est aussi un point fixe de $f$. De plus $g(x)>f(x) = x$.</p>` },
    { t: "La suite des itérés", b: R`<p>On pose <span data-k="iteres">$u_0 = x$ et $u_{n+1} = g(u_n)$</span>. Par l'étape précédente, chaque $u_n$ est un point fixe de $f$ et $u_{n+1}>u_n$. La suite est croissante et à valeurs dans $[a,b]$ : elle converge vers $\ell\in[a,b]$.</p>`, rappels: ["recurrence", "limite-monotone"] },
    { t: "La contradiction", b: R`<p>En passant à la limite dans $f(u_n) = u_n$ et $u_{n+1} = g(u_n)$, par continuité de $f$ et $g$ : $f(\ell) = \ell$ et $g(\ell) = \ell$. Donc $g(\ell)-f(\ell) = 0$, ce qui contredit $g-f>0$.</p>`, rappels: ["continuite-point-fixe"] }
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
    { t: "f est injective", b: R`<p>Soit $f$ une solution. Si $f(x) = f(x')$, alors $f(f(x)) = f(f(x'))$, et $(*)$ donne $2f(x)-x = 2f(x')-x'$, donc $x = x'$. $f$ est injective et continue : strictement monotone.</p>`, rappels: ["injective-monotone"] },
    { t: "f est croissante et bijective", b: R`<p>Si $f$ était décroissante, $f\circ f$ serait croissante, donc $\mathrm{Id} = 2f-f\circ f$ serait décroissante : absurde. Si $f$ avait une limite finie $\ell$ en $+\infty$, alors $x = 2f(x)-f(f(x))\to2\ell-f(\ell)$, absurde. Donc $f\to+\infty$ en $+\infty$, de même $f\to-\infty$ en $-\infty$ : $f$ est une bijection croissante de $\mathbb R$.</p>`, rappels: ["bijection-continue", "absurde"] },
    { t: "La suite des itérés", b: R`<p>Soit $x$ réel et $u_n = f^n(x)$, défini pour $n\in\mathbb Z$ (les <span data-k="iter">itérés</span>, avec $f^{-1}$ pour les indices négatifs). <span data-k="rec">En appliquant $(*)$ en $f^n(x)$</span> :</p>$$u_{n+2} = 2u_{n+1}-u_n.$$` },
    { t: "Résoudre la récurrence", b: R`<p>L'équation caractéristique $r^2-2r+1 = 0$ a la racine double $1$ : $u_n = \lambda n+\mu$. Avec $u_0 = x$ et $u_1 = f(x)$ :</p>$$f^n(x) = n\big(f(x)-x\big)+x.$$<p>En particulier, $\dfrac{f^n(x)}n\to f(x)-x$ quand $n\to+\infty$.</p>`, rappels: ["rec-lineaire-2"] },
    { t: "Comparer deux points", b: R`<p>Si $f\neq\mathrm{Id}$, il existe $x$ avec $f(x)\neq x$, par exemple $f(x)>x$. Pour $y$ réel, il existe $p\in\mathbb Z$ avec $p\big(f(x)-x\big)\leqslant y-x<(p+1)\big(f(x)-x\big)$, c'est-à-dire $f^p(x)\leqslant y<f^{p+1}(x)$. En appliquant $f^n$, qui est croissante :</p>$$f^{n+p}(x)\leqslant f^n(y)\leqslant f^{n+p+1}(x).$$` },
    { t: "Passer à la limite", b: R`<p>On divise par $n$ et on fait $n\to+\infty$ : les deux bornes tendent vers $f(x)-x$, et le milieu vers $f(y)-y$. Donc <span data-k="const">$f(y)-y = f(x)-x$</span> pour tout $y$.</p>`, rappels: ["encadrement"] },
    { t: "Conclusion", b: R`<p>Il existe une constante $C$ telle que $f(y) = y+C$ pour tout $y$ (cela inclut $f = \mathrm{Id}$, avec $C = 0$). Réciproquement : $f(f(x)) = x+2C$ et $2f(x)-x = x+2C$. Les solutions sont les $x\mapsto x+C$.</p>` }
  ],
  piege: R`Confondre $f^n$ (composée $n$ fois) et $f(x)^n$ (puissance) : ici c'est toujours la composition.`,
  methode: R`Une équation $f\circ f = af+b\,\mathrm{Id}$ donne une récurrence linéaire sur les itérés $f^n(x)$ : résous-la, puis exploite la croissance.`
}
]);

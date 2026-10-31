/* Maths MPSI · chapitre 02 : relations d'équivalence et relations d'ordre. */
(() => {
const R = String.raw;
const C1 = { subj: "maths", year: "mpsi", chap: 1 };

LEMME.rappels({
  "rel-eq": { t: "Relation d'équivalence", b: R`<p>$\mathcal R$ est une relation d'équivalence si elle est</p><ul><li><b>réflexive</b> : $x\,\mathcal R\,x$ ;</li><li><b>symétrique</b> : $x\,\mathcal R\,y\Rightarrow y\,\mathcal R\,x$ ;</li><li><b>transitive</b> : $(x\,\mathcal R\,y\ \text{et}\ y\,\mathcal R\,z)\Rightarrow x\,\mathcal R\,z$.</li></ul><p>La <b>classe</b> de $x$ est $\mathrm{Cl}(x) = \{y : y\,\mathcal R\,x\}$. Les classes forment une partition de l'ensemble.</p>` },
  "rel-ordre": { t: "Relation d'ordre", b: R`<p>$\preccurlyeq$ est une relation d'ordre si elle est <b>réflexive</b>, <b>antisymétrique</b> ($x\preccurlyeq y$ et $y\preccurlyeq x\Rightarrow x = y$) et <b>transitive</b>. L'ordre est <b>total</b> si deux éléments sont toujours comparables : $x\preccurlyeq y$ ou $y\preccurlyeq x$.</p>` }
});

LEMME.exercises([
/* ---------- Relations d'équivalence ---------- */
{ id: "rel-proportion", ...C1, level: 1, time: "15 min",
  title: "Deux réels proportionnels par un rationnel",
  enonce: R`<p>Sur $\mathbb R_+$, on pose $x\,\mathcal R\,y\iff\exists(k,\ell)\in(\mathbb N^\ast)^2,\ kx = \ell y$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\mathcal R$ est une relation d'équivalence.</li><li>Soit $x\in\mathbb R_+$. Décrire la classe de $x$.</li></ol>`,
  decode: { donnees: [R`$k$ et $\ell$ sont des entiers $\geqslant1$.`], but: R`Vérifier les trois propriétés, puis décrire les classes.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Réflexive et symétrique", h: R`<p>$k = \ell = 1$ ; puis échange $k$ et $\ell$.</p>`, b: R`<p><b>Réflexive</b> : $1\cdot x = 1\cdot x$, donc $x\,\mathcal R\,x$ avec $k = \ell = 1$.</p><p><b>Symétrique</b> : si $kx = \ell y$, alors $\ell y = kx$ : c'est $y\,\mathcal R\,x$ avec le couple $(\ell,k)$.</p>`, rappels: ["rel-eq"] },
    { q: 2, t: "(a) Transitive", h: R`<p>Multiplie la première égalité par $k'$.</p>`, b: R`<p>Supposons $kx = \ell y$ et $k'y = \ell'z$. On multiplie la première par $k'$ et la seconde par $\ell$ :</p>$$kk'x = \ell k'y = \ell\ell'z.$$<p>Donc $x\,\mathcal R\,z$ avec le couple $(kk',\ell\ell')$, formé d'entiers $\geqslant1$.</p>` },
    { q: 3, t: "(b) Les classes", h: R`<p>Distingue $x = 0$ et $x>0$.</p>`, b: R`<ul><li><b>$x = 0$</b> : $y\,\mathcal R\,0$ signifie $ky = \ell\cdot0 = 0$ avec $k\geqslant1$, donc $y = 0$. $\mathrm{Cl}(0) = \{0\}$.</li><li><b>$x>0$</b> : $y\,\mathcal R\,x$ signifie $ky = \ell x$, soit $y = \frac\ell k\,x$. Quand $k,\ell$ parcourent $\mathbb N^\ast$, $\frac\ell k$ parcourt tous les rationnels $>0$.</li></ul><div class="sbox">$$\mathrm{Cl}(0) = \{0\},\qquad\mathrm{Cl}(x) = \{qx : q\in\mathbb Q_+^\ast\}\ (x>0).$$</div><p>Exemple : $\sqrt2\,\mathcal R\,\frac{3\sqrt2}{5}$ ($k = 3$, $\ell = 5$), mais $1$ et $\sqrt2$ ne sont pas en relation, car $\sqrt2\notin\mathbb Q$.</p>` }
  ],
  piege: R`Oublier le cas $x = 0$, dont la classe est réduite à $\{0\}$.`,
  methode: R`Transitivité : combiner les deux égalités pour éliminer l'élément intermédiaire $y$.`
},
{ id: "rel-et-ou", ...C1, level: 1, time: "12 min",
  title: "Symétriser une relation par « et » ou par « ou »",
  enonce: R`<p>Soit $\mathcal R$ une relation réflexive et transitive sur $E$. On pose $x\,\mathcal S\,y\iff(x\,\mathcal R\,y\ \text{et}\ y\,\mathcal R\,x)$ et $x\,\mathcal T\,y\iff(x\,\mathcal R\,y\ \text{ou}\ y\,\mathcal R\,x)$. Ces relations sont-elles des relations d'équivalence ?</p>`,
  decode: { donnees: [R`$\mathcal R$ réflexive et transitive (pas forcément symétrique).`], but: R`Étudier $\mathcal S$ et $\mathcal T$.`, cles: {} },
  steps: [
    { q: 1, t: "𝒮 est une relation d'équivalence", h: R`<p>Transitivité : utilise celle de $\mathcal R$ deux fois.</p>`, b: R`<ul><li><b>Réflexive</b> : $x\,\mathcal R\,x$ et $x\,\mathcal R\,x$, donc $x\,\mathcal S\,x$.</li><li><b>Symétrique</b> : la définition ne change pas si on échange $x$ et $y$.</li><li><b>Transitive</b> : si $x\,\mathcal S\,y$ et $y\,\mathcal S\,z$, on a $x\,\mathcal R\,y$, $y\,\mathcal R\,z$, donc $x\,\mathcal R\,z$ ; et $z\,\mathcal R\,y$, $y\,\mathcal R\,x$, donc $z\,\mathcal R\,x$. Ainsi $x\,\mathcal S\,z$.</li></ul>`, rappels: ["rel-eq"] },
    { q: 2, t: "𝒯 n'est pas transitive en général", h: R`<p>Prends la divisibilité sur $\mathbb N^\ast$.</p>`, b: R`<p>$\mathcal T$ est réflexive et symétrique (même raisonnement). Mais la transitivité peut échouer : avec $\mathcal R$ = « divise » sur $\mathbb N^\ast$ (réflexive et transitive) :</p><ul><li>$2\mid6$, donc $2\,\mathcal T\,6$ ;</li><li>$3\mid6$, donc $6\,\mathcal T\,3$ ;</li><li>mais $2\nmid3$ et $3\nmid2$, donc $2$ et $3$ ne sont pas en relation par $\mathcal T$.</li></ul><div class="sbox"><p style="margin:0">$\mathcal S$ est une relation d'équivalence ; $\mathcal T$ n'en est pas une en général.</p></div>` }
  ],
  piege: R`Croire que « ou » se transmet comme « et » : avec le « ou », on ne sait pas lequel des deux sens est vrai à chaque étape.`,
  methode: R`Pour réfuter une transitivité : trois éléments, deux relations vraies, la troisième fausse.`
},
{ id: "rel-conjugaison", ...C1, level: 2, time: "15 min",
  title: "Applications conjuguées",
  enonce: R`<p>Sur l'ensemble $\mathcal F(E,E)$ des applications de $E$ dans $E$, on note $\mathcal S(E)$ l'ensemble des bijections de $E$ et on pose $f\,\mathcal R\,g\iff\exists\varphi\in\mathcal S(E),\ f\circ\varphi = \varphi\circ g$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\mathcal R$ est une relation d'équivalence.</li><li>Décrire la classe d'une application $f$.</li></ol>`,
  decode: { donnees: [R`$f\circ\varphi = \varphi\circ g\iff g = \varphi^{-1}\circ f\circ\varphi$.`], but: R`Les trois propriétés, puis la classe.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Réflexive et symétrique", h: R`<p>$\varphi = \mathrm{Id}_E$ ; puis compose par $\varphi^{-1}$.</p>`, b: R`<p><b>Réflexive</b> : $f\circ\mathrm{Id}_E = \mathrm{Id}_E\circ f$, et $\mathrm{Id}_E$ est bijective.</p><p><b>Symétrique</b> : si $f\circ\varphi = \varphi\circ g$, on compose par $\varphi^{-1}$ à gauche et à droite : $\varphi^{-1}\circ f = g\circ\varphi^{-1}$, soit $g\circ\varphi^{-1} = \varphi^{-1}\circ f$. C'est $g\,\mathcal R\,f$ avec la bijection $\varphi^{-1}$.</p>`, rappels: ["rel-eq"] },
    { q: 2, t: "(a) Transitive", h: R`<p>$\theta = \varphi\circ\psi$.</p>`, b: R`<p>Si $f\circ\varphi = \varphi\circ g$ et $g\circ\psi = \psi\circ h$, avec $\theta = \varphi\circ\psi$ (bijective comme composée de bijections) :</p>$$f\circ\theta = (f\circ\varphi)\circ\psi = \varphi\circ g\circ\psi = \varphi\circ(\psi\circ h) = \theta\circ h.$$<p>Donc $f\,\mathcal R\,h$.</p>` },
    { q: 3, t: "(b) La classe de f", h: R`<p>Isole $g$.</p>`, b: R`<p>$g\,\mathcal R\,f$ équivaut (par symétrie) à $f\,\mathcal R\,g$, c'est-à-dire $f\circ\varphi = \varphi\circ g$ pour une bijection $\varphi$, soit $g = \varphi^{-1}\circ f\circ\varphi$.</p><div class="sbox">$$\mathrm{Cl}(f) = \{\varphi^{-1}\circ f\circ\varphi : \varphi\in\mathcal S(E)\}.$$</div><p>Interprétation : $g$ est « la même application que $f$ après avoir renommé les éléments de $E$ par $\varphi$ ». Par exemple, la classe de $\mathrm{Id}_E$ est $\{\mathrm{Id}_E\}$.</p>` }
  ],
  piege: R`Oublier que $\varphi$ doit être bijective : c'est ce qui permet de composer par $\varphi^{-1}$.`,
  methode: R`Relation de conjugaison : réflexivité avec $\mathrm{Id}$, symétrie avec $\varphi^{-1}$, transitivité avec $\varphi\circ\psi$.`
},
{ id: "rel-noyau", ...C1, level: 1, time: "8 min",
  title: "La relation « même image »",
  enonce: R`<p>Soit $f : E\to F$. On pose $x\,\mathcal R\,y\iff f(x) = f(y)$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\mathcal R$ est une relation d'équivalence sur $E$.</li><li>Exprimer la classe d'un élément $x$.</li></ol>`,
  decode: { donnees: [R`L'égalité est réflexive, symétrique et transitive.`], but: R`Transmettre ces propriétés à $\mathcal R$.`, cles: {} },
  steps: [
    { q: 1, t: "(a) et (b)", h: R`<p>Tout vient des propriétés de l'égalité dans $F$.</p>`, b: R`<ul><li><b>Réflexive</b> : $f(x) = f(x)$.</li><li><b>Symétrique</b> : $f(x) = f(y)\Rightarrow f(y) = f(x)$.</li><li><b>Transitive</b> : $f(x) = f(y)$ et $f(y) = f(z)$ donnent $f(x) = f(z)$.</li></ul><p><b>Classe</b> : $y\in\mathrm{Cl}(x)\iff f(y) = f(x)$, donc</p><div class="sbox">$$\mathrm{Cl}(x) = f^{-1}(\{f(x)\}),$$</div><p>l'ensemble des antécédents de $f(x)$. Exemple : avec $f(x) = x^2$ sur $\mathbb R$, $\mathrm{Cl}(3) = \{-3,3\}$.</p>`, rappels: ["rel-eq"] }
  ],
  piege: R`Confondre la classe $\mathrm{Cl}(x)\subset E$ avec la valeur $f(x)\in F$.`,
  methode: R`Toute relation « $\varphi(x) = \varphi(y)$ » est une relation d'équivalence ; ses classes sont les fibres de $\varphi$.`
},
{ id: "rel-graphe", ...C1, level: 2, time: "15 min",
  title: "Nombre de classes et taille du graphe",
  tt: R`Nombre de classes et taille du graphe : $n^2\leqslant kp$`,
  enonce: R`<p>Soit $E$ un ensemble à $n$ éléments, $\mathcal R$ une relation d'équivalence sur $E$ ayant $k$ classes, et $G = \{(x,y)\in E^2 : x\,\mathcal R\,y\}$ son graphe, de cardinal $p$.</p><ol style="list-style:lower-alpha"><li>Exprimer $n$ et $p$ à l'aide des cardinaux $n_1,\dots,n_k$ des classes.</li><li>Montrer que $n^2\leqslant kp$.</li><li>(Question ajoutée) Cas d'égalité ?</li></ol>`,
  decode: { donnees: [R`Les classes forment une partition de $E$.`], but: R`Une inégalité entre $n$, $k$, $p$.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Compter", h: R`<p>$(x,y)\in G$ ssi $x$ et $y$ sont dans la même classe.</p>`, b: R`<p>Les classes $C_1,\dots,C_k$ forment une partition de $E$, donc $n = n_1+\dots+n_k$.</p><p>Un couple $(x,y)$ est dans $G$ si et seulement si $x$ et $y$ sont dans la même classe. Pour la classe $C_i$, il y a $n_i$ choix pour $x$ et $n_i$ pour $y$, soit $n_i^2$ couples, et ces ensembles de couples sont disjoints :</p>$$p = n_1^2+\dots+n_k^2.$$` },
    { q: 2, t: "(b) Cauchy-Schwarz", h: R`<p>Applique Cauchy-Schwarz à $(1,\dots,1)$ et $(n_1,\dots,n_k)$.</p>`, b: R`<p><b>Inégalité de Cauchy-Schwarz</b> : $\big(\sum a_ib_i\big)^2\leqslant\big(\sum a_i^2\big)\big(\sum b_i^2\big)$. Avec $a_i = 1$ et $b_i = n_i$ :</p>$$(n_1+\dots+n_k)^2\leqslant(1+\dots+1)(n_1^2+\dots+n_k^2) = k\,p.$$<div class="sbox">$$n^2\leqslant kp.$$</div>` },
    { q: 3, t: "(c) Égalité", h: R`<p>Égalité dans Cauchy-Schwarz : vecteurs proportionnels.</p>`, b: R`<p>Il y a égalité dans Cauchy-Schwarz si et seulement si $(n_1,\dots,n_k)$ est proportionnel à $(1,\dots,1)$, c'est-à-dire si toutes les classes ont le même cardinal $\frac nk$.</p><p>Vérification : avec $n_i = \frac nk$, $p = k\frac{n^2}{k^2} = \frac{n^2}k$, donc $kp = n^2$.</p>` }
  ],
  piege: R`Compter $p = n_1+\dots+n_k$ : un couple, ce sont deux éléments de la même classe, d'où les carrés.`,
  methode: R`Comparer $(\sum n_i)^2$ et $\sum n_i^2$ : Cauchy-Schwarz avec le vecteur $(1,\dots,1)$.`
},
{ id: "rel-union-A", ...C1, level: 2, time: "15 min",
  title: "La relation X ∪ A = Y ∪ A",
  tt: R`La relation $X\cup A = Y\cup A$`,
  enonce: R`<p>Soit $A\subset E$. Sur $\mathcal P(E)$, on pose $X\,\mathcal R\,Y\iff X\cup A = Y\cup A$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\mathcal R$ est une relation d'équivalence.</li><li>Décrire la classe de $X\in\mathcal P(E)$.</li></ol>`,
  decode: { donnees: [R`C'est une relation « même image » pour $X\mapsto X\cup A$.`], but: R`Classes : on peut changer $X$ librement dans $A$.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Équivalence", h: R`<p>C'est l'égalité des images par $\varphi(X) = X\cup A$.</p>`, b: R`<p>Avec $\varphi(X) = X\cup A$, on a $X\,\mathcal R\,Y\iff\varphi(X) = \varphi(Y)$. Comme pour toute relation « même image » (l'égalité est réflexive, symétrique, transitive), $\mathcal R$ est une relation d'équivalence.</p>`, rappels: ["rel-eq"] },
    { q: 2, t: "(b) Si Y ∈ Cl(X), alors Y ∖ A = X ∖ A", h: R`<p>Retire $A$ des deux côtés de $Y\cup A = X\cup A$.</p>`, b: R`<p>Supposons $Y\cup A = X\cup A$. Soit $x\in Y\setminus A$ : $x\in Y\cup A = X\cup A$ et $x\notin A$, donc $x\in X$, et $x\in X\setminus A$. Ainsi $Y\setminus A\subset X\setminus A$, et par symétrie l'égalité.</p><p>On écrit $Y = (Y\setminus A)\cup(Y\cap A) = (X\setminus A)\cup B$ avec $B = Y\cap A\subset A$.</p>` },
    { q: 3, t: "(b) Réciproque et conclusion", h: R`<p>Calcule $\big((X\setminus A)\cup B\big)\cup A$.</p>`, b: R`<p>Soit $Y = (X\setminus A)\cup B$ avec $B\subset A$. Comme $B\subset A$, $B\cup A = A$, donc</p>$$Y\cup A = (X\setminus A)\cup A = X\cup A.$$<p>(Un élément de $X$ est dans $A$ ou dans $X\setminus A$.) Donc $Y\in\mathrm{Cl}(X)$.</p><div class="sbox">$$\mathrm{Cl}(X) = \{(X\setminus A)\cup B : B\in\mathcal P(A)\}.$$</div><p>Autrement dit, deux parties sont équivalentes quand elles coïncident en dehors de $A$.</p>` }
  ],
  piege: R`Croire que la classe de $X$ est $\{X\}$ : on peut changer librement la partie de $X$ contenue dans $A$.`,
  methode: R`Décrire une classe : analyse (ce qui est imposé) puis synthèse (vérifier que cela suffit).`
},
{ id: "rel-preordre", ...C1, level: 2, time: "15 min",
  title: "D'un préordre à un ordre sur les classes",
  enonce: R`<p>Soit $\mathcal R$ une relation réflexive et transitive sur $E$. On pose $x\,\mathcal S\,y\iff(x\,\mathcal R\,y\ \text{et}\ y\,\mathcal R\,x)$. On sait que $\mathcal S$ est une relation d'équivalence (exercice « Symétriser une relation »). Montrer que $\mathcal R$ définit une relation d'ordre sur les classes de $\mathcal S$.</p>`,
  decode: { donnees: [R`$\mathcal R$ réflexive et transitive.`], but: R`Définir $\mathrm{Cl}(x)\preccurlyeq\mathrm{Cl}(y)\iff x\,\mathcal R\,y$ et vérifier que c'est un ordre.`, cles: {} },
  steps: [
    { q: 1, t: "La définition ne dépend pas des représentants", h: R`<p>Si $x'\,\mathcal S\,x$ et $y'\,\mathcal S\,y$, compare $x'\,\mathcal R\,y'$ et $x\,\mathcal R\,y$.</p>`, b: R`<p>On veut poser $\mathrm{Cl}(x)\preccurlyeq\mathrm{Cl}(y)\iff x\,\mathcal R\,y$. Il faut que le résultat ne dépende pas des éléments choisis dans les classes. Soient $x'\in\mathrm{Cl}(x)$ et $y'\in\mathrm{Cl}(y)$ : on a $x'\,\mathcal R\,x$ et $y\,\mathcal R\,y'$. Si $x\,\mathcal R\,y$, la transitivité donne $x'\,\mathcal R\,x\,\mathcal R\,y\,\mathcal R\,y'$, donc $x'\,\mathcal R\,y'$. Par symétrie des rôles, $x'\,\mathcal R\,y'\Rightarrow x\,\mathcal R\,y$. La relation $\preccurlyeq$ est bien définie.</p>` },
    { q: 2, t: "C'est un ordre", h: R`<p>L'antisymétrie vient de la définition de $\mathcal S$.</p>`, b: R`<ul><li><b>Réflexive</b> : $x\,\mathcal R\,x$, donc $\mathrm{Cl}(x)\preccurlyeq\mathrm{Cl}(x)$.</li><li><b>Transitive</b> : vient de celle de $\mathcal R$.</li><li><b>Antisymétrique</b> : si $\mathrm{Cl}(x)\preccurlyeq\mathrm{Cl}(y)$ et $\mathrm{Cl}(y)\preccurlyeq\mathrm{Cl}(x)$, alors $x\,\mathcal R\,y$ et $y\,\mathcal R\,x$, c'est-à-dire $x\,\mathcal S\,y$, donc $\mathrm{Cl}(x) = \mathrm{Cl}(y)$.</li></ul><div class="sbox"><p style="margin:0">$\preccurlyeq$ est une relation d'ordre sur l'ensemble des classes de $\mathcal S$.</p></div><p>Exemple : sur $\mathbb Z^\ast$ avec $\mathcal R$ = « divise », $\mathcal S$ identifie $n$ et $-n$, et l'ordre obtenu est la divisibilité sur $\mathbb N^\ast$.</p>`, rappels: ["rel-ordre"] }
  ],
  piege: R`Oublier de vérifier que la définition ne dépend pas du représentant choisi dans chaque classe.`,
  methode: R`Pour définir quelque chose sur des classes : le définir sur un représentant, puis vérifier que ça ne dépend pas du choix.`
},
{ id: "rel-groupe", ...C1, level: 2, time: "15 min",
  title: "La relation xy⁻¹ ∈ H dans un groupe",
  tt: R`La relation $xy^{-1}\in H$ dans un groupe`,
  enonce: R`<p>Soit $(G,\times)$ un groupe et $H$ un sous-groupe. On pose $x\,\mathcal R\,y\iff xy^{-1}\in H$. Montrer que $\mathcal R$ est une relation d'équivalence et décrire ses classes.</p>`,
  decode: { donnees: [R`$H$ contient le neutre $1$, est stable par produit et par passage à l'inverse.`], but: R`Les trois propriétés, puis $\mathrm{Cl}(a)$.`, cles: {} },
  steps: [
    { q: 1, t: "Équivalence", h: R`<p>Chaque propriété utilise une propriété de sous-groupe.</p>`, b: R`<ul><li><b>Réflexive</b> : $xx^{-1} = 1\in H$.</li><li><b>Symétrique</b> : si $xy^{-1}\in H$, son inverse $(xy^{-1})^{-1} = (y^{-1})^{-1}x^{-1} = yx^{-1}$ est dans $H$ (stabilité par inverse). Donc $y\,\mathcal R\,x$.</li><li><b>Transitive</b> : si $xy^{-1}\in H$ et $yz^{-1}\in H$, leur produit $xy^{-1}yz^{-1} = xz^{-1}$ est dans $H$ (stabilité par produit).</li></ul>`, rappels: ["rel-eq"] },
    { q: 2, t: "Les classes", h: R`<p>$xa^{-1} = h\iff x = ha$.</p>`, b: R`<p>Soit $a\in G$. $x\in\mathrm{Cl}(a)\iff xa^{-1}\in H\iff\exists h\in H,\ xa^{-1} = h\iff\exists h\in H,\ x = ha$ (on multiplie à droite par $a$).</p><div class="sbox">$$\mathrm{Cl}(a) = Ha = \{ha : h\in H\}.$$</div><p>Exemple : $G = (\mathbb Z,+)$, $H = 3\mathbb Z$ (en notation additive, $x\,\mathcal R\,y\iff x-y\in3\mathbb Z$) : les classes sont les trois classes de congruence modulo $3$.</p>` }
  ],
  piege: R`Écrire $(xy^{-1})^{-1} = x^{-1}y$ : l'inverse d'un produit renverse l'ordre.`,
  methode: R`Les trois axiomes de sous-groupe donnent exactement réflexivité, symétrie et transitivité.`
},
{ id: "rel-p-groupe", ...C1, level: 3, time: "30 min",
  title: "Le centre d'un p-groupe n'est pas trivial",
  tt: R`Le centre d'un groupe de cardinal $p^\alpha$ n'est pas trivial`,
  enonce: R`<p>Soit $G$ un groupe de cardinal $p^\alpha$ avec $p$ premier et $\alpha\geqslant1$. On note $Z(G) = \{y\in G : \forall x\in G,\ xy = yx\}$ son centre. On pose $y_1\,\mathcal R\,y_2\iff\exists x\in G,\ y_2 = xy_1x^{-1}$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\mathcal R$ est une relation d'équivalence, et que la classe de $y$ est $\{y\}$ si et seulement si $y\in Z(G)$.</li><li>Pour $y\in G$, on note $C_y = \{x\in G : xy = yx\}$. Montrer que $\mathrm{card}(\mathrm{Cl}(y))\times\mathrm{card}(C_y) = p^\alpha$.</li><li>En déduire que $Z(G)\neq\{1\}$.</li></ol>`,
  decode: { donnees: [R`Les diviseurs de $p^\alpha$ sont les $p^\beta$, $0\leqslant\beta\leqslant\alpha$.`], but: R`Compter les éléments de $G$ classe par classe.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Équivalence et classes singletons", h: R`<p>$x = 1$ ; $x^{-1}$ ; $x'x$.</p>`, b: R`<ul><li><b>Réflexive</b> : $y = 1\cdot y\cdot1^{-1}$.</li><li><b>Symétrique</b> : si $y_2 = xy_1x^{-1}$, alors $y_1 = x^{-1}y_2x = x^{-1}y_2(x^{-1})^{-1}$.</li><li><b>Transitive</b> : si $y_2 = xy_1x^{-1}$ et $y_3 = x'y_2x'^{-1}$, alors $y_3 = (x'x)y_1(x'x)^{-1}$.</li></ul><p><b>Singletons</b> : $\mathrm{Cl}(y) = \{xyx^{-1} : x\in G\}$. Elle vaut $\{y\}$ si et seulement si $xyx^{-1} = y$ pour tout $x$, c'est-à-dire $xy = yx$ pour tout $x$, c'est-à-dire $y\in Z(G)$.</p>`, rappels: ["rel-eq"] },
    { q: 2, t: "(b) Taille d'une classe", h: R`<p>Pour $z\in\mathrm{Cl}(y)$, compte les $x$ tels que $xyx^{-1} = z$.</p>`, b: R`<p>Pour chaque $z\in\mathrm{Cl}(y)$, notons $X_z = \{x\in G : xyx^{-1} = z\}$. Les $X_z$ sont disjoints (un $x$ donne un seul $z$) et leur réunion est $G$ (tout $x$ donne un $z$). Donc $p^\alpha = \sum_z\mathrm{card}(X_z)$.</p><p>Chaque $X_z$ a $\mathrm{card}(C_y)$ éléments. Fixons $x_0\in X_z$. Alors</p>$$xyx^{-1} = x_0yx_0^{-1}\iff x_0^{-1}xy = yx_0^{-1}x\iff x_0^{-1}x\in C_y\iff x\in x_0C_y,$$<p>et $c\mapsto x_0c$ est une bijection de $C_y$ sur $x_0C_y$ (de réciproque $x\mapsto x_0^{-1}x$). Donc $p^\alpha = \mathrm{card}(\mathrm{Cl}(y))\times\mathrm{card}(C_y)$.</p>` },
    { q: 3, t: "(c) Compter modulo p", h: R`<p>Une classe non réduite à un point a un cardinal multiple de $p$.</p>`, b: R`<p>Par (b), $\mathrm{card}(\mathrm{Cl}(y))$ divise $p^\alpha$, donc vaut $p^\beta$. Si la classe n'est pas un singleton, $\beta\geqslant1$ et $p$ divise son cardinal.</p><p>Les classes forment une partition de $G$. On sépare les classes singletons (ce sont les $\{y\}$ avec $y\in Z(G)$, par (a)) des autres :</p>$$p^\alpha = \mathrm{card}(G) = \mathrm{card}(Z(G))+N,$$<p>où $N$ est la somme des cardinaux des classes non singletons, divisible par $p$. Donc $p$ divise $\mathrm{card}(Z(G)) = p^\alpha-N$. Comme $1\in Z(G)$, $\mathrm{card}(Z(G))\geqslant1$, et un multiple de $p$ qui est $\geqslant1$ est $\geqslant p$ :</p><div class="sbox">$$\mathrm{card}(Z(G))\geqslant p\geqslant2,\qquad Z(G)\neq\{1\}.$$</div>` }
  ],
  piege: R`Oublier que $1\in Z(G)$ : c'est ce qui empêche $\mathrm{card}(Z(G)) = 0$.`,
  methode: R`Équation aux classes : $\mathrm{card}(G) = \mathrm{card}(Z(G))+\sum(\text{classes non triviales})$, puis raisonner modulo $p$.`
},
/* ---------- Relations d'ordre ---------- */
{ id: "ord-puissance", ...C1, level: 1, time: "15 min",
  title: "L'ordre « y est une puissance de x »",
  enonce: R`<p>Sur $\mathbb R_+^\ast$, on pose $x\preccurlyeq y\iff\exists n\in\mathbb N,\ y = x^n$. Montrer que $\preccurlyeq$ est une relation d'ordre. Est-il total ?</p>`,
  decode: { donnees: [R`$n = 0$ est autorisé : $x^0 = 1$.`], but: R`Réflexivité, antisymétrie, transitivité, puis totalité.`, cles: {} },
  steps: [
    { q: 1, t: "Réflexive et transitive", h: R`<p>$n = 1$ ; puis $z = (x^n)^m$.</p>`, b: R`<p><b>Réflexive</b> : $x = x^1$, avec $1\in\mathbb N$.</p><p><b>Transitive</b> : si $y = x^n$ et $z = y^m$, alors $z = (x^n)^m = x^{nm}$ avec $nm\in\mathbb N$ : $x\preccurlyeq z$.</p>`, rappels: ["rel-ordre"] },
    { q: 2, t: "Antisymétrique", h: R`<p>$x = x^{nm}$ : prends le logarithme.</p>`, b: R`<p>Supposons $y = x^n$ et $x = y^m$. Alors $x = (x^n)^m = x^{nm}$, et en prenant le logarithme : $\ln x = nm\ln x$.</p><ul><li>Si $x = 1$ : $y = 1^n = 1 = x$.</li><li>Si $x\neq1$ : $\ln x\neq0$, on divise : $nm = 1$. Des entiers naturels de produit $1$ valent $1$ tous les deux : $n = 1$ et $y = x^1 = x$.</li></ul><p>Dans les deux cas $x = y$.</p>` },
    { q: 3, t: "Pas total", h: R`<p>Compare $2$ et $3$.</p>`, b: R`<p>$2\preccurlyeq3$ demanderait $3 = 2^n$ : les puissances de $2$ sont $1,2,4,8,\dots$, jamais $3$. $3\preccurlyeq2$ demanderait $2 = 3^n$ : impossible de même. $2$ et $3$ ne sont pas comparables : l'ordre n'est <b>pas total</b>.</p><p>Remarque : $x\preccurlyeq1$ pour tout $x$ (avec $n = 0$), donc $1$ est le plus grand élément.</p>` }
  ],
  piege: R`Oublier le cas $x = 1$ dans l'antisymétrie : on ne peut pas diviser par $\ln1 = 0$.`,
  methode: R`Antisymétrie : combiner les deux relations pour obtenir une égalité du type $x = x^{nm}$.`
},
{ id: "ord-injection", ...C1, level: 1, time: "8 min",
  title: "Transporter l'ordre de ℝ par une injection",
  tt: R`Transporter l'ordre de $\mathbb R$ par une injection`,
  enonce: R`<p>Soit $f : E\to\mathbb R$ injective. On pose $x\preccurlyeq y\iff f(x)\leqslant f(y)$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\preccurlyeq$ est une relation d'ordre sur $E$.</li><li>Est-elle totale ?</li><li>(Question ajoutée) Que se passe-t-il si $f$ n'est pas injective ?</li></ol>`,
  decode: { donnees: [R`$\leqslant$ est un ordre total sur $\mathbb R$.`], but: R`Transmettre les propriétés de $\leqslant$.`, cles: {} },
  steps: [
    { q: 1, t: "(a), (b), (c)", h: R`<p>L'antisymétrie utilise l'injectivité.</p>`, b: R`<ul><li><b>Réflexive</b> : $f(x)\leqslant f(x)$.</li><li><b>Transitive</b> : $f(x)\leqslant f(y)\leqslant f(z)$ donne $f(x)\leqslant f(z)$.</li><li><b>Antisymétrique</b> : si $f(x)\leqslant f(y)$ et $f(y)\leqslant f(x)$, alors $f(x) = f(y)$, et par injectivité $x = y$.</li><li><b>Totale</b> : pour $x,y\in E$, les réels $f(x)$ et $f(y)$ sont comparables ($\leqslant$ est total sur $\mathbb R$), donc $x\preccurlyeq y$ ou $y\preccurlyeq x$.</li></ul><p><b>(c)</b> Sans injectivité, l'antisymétrie échoue : si $f(x) = f(y)$ avec $x\neq y$, on a $x\preccurlyeq y$ et $y\preccurlyeq x$ sans $x = y$. On obtient seulement un préordre.</p>`, rappels: ["rel-ordre"] }
  ],
  piege: R`Oublier l'injectivité : c'est elle seule qui donne l'antisymétrie.`,
  methode: R`Une relation définie par « $f(x)\leqslant f(y)$ » hérite de toutes les propriétés de $\leqslant$, sauf l'antisymétrie qui demande $f$ injective.`
},
{ id: "ord-lexico", ...C1, level: 2, time: "12 min",
  title: "L'ordre lexicographique",
  enonce: R`<p>Sur $\mathbb R^2$, on pose $(x,y)\preccurlyeq(x',y')\iff x< x'\ \text{ou}\ (x = x'\ \text{et}\ y\leqslant y')$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\preccurlyeq$ est une relation d'ordre.</li><li>Est-elle totale ?</li></ol>`,
  decode: { donnees: [R`C'est l'ordre du dictionnaire : on compare la première coordonnée, puis la seconde en cas d'égalité.`], but: R`Les trois propriétés et la totalité.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Réflexive et antisymétrique", h: R`<p>Antisymétrie : $x< x'$ et $x'< x$ est impossible.</p>`, b: R`<p><b>Réflexive</b> : $x = x$ et $y\leqslant y$.</p><p><b>Antisymétrique</b> : supposons $(x,y)\preccurlyeq(x',y')$ et $(x',y')\preccurlyeq(x,y)$. On ne peut pas avoir $x< x'$ : la seconde relation donnerait $x'< x$ ou $x' = x$, contradictoire. De même $x'< x$ est impossible. Donc $x = x'$, et les deux relations donnent $y\leqslant y'$ et $y'\leqslant y$, d'où $y = y'$.</p>`, rappels: ["rel-ordre"] },
    { q: 2, t: "(a) Transitive", h: R`<p>Distingue selon les cas « $<$ » ou « $=$ » sur les premières coordonnées.</p>`, b: R`<p>Supposons $(x,y)\preccurlyeq(x',y')\preccurlyeq(x'',y'')$. On a $x\leqslant x'\leqslant x''$.</p><ul><li>Si $x< x'$ ou $x'< x''$ : alors $x< x''$, donc $(x,y)\preccurlyeq(x'',y'')$.</li><li>Sinon $x = x' = x''$, et alors $y\leqslant y'\leqslant y''$, donc $(x,y)\preccurlyeq(x'',y'')$.</li></ul>` },
    { q: 3, t: "(b) Totale", h: R`<p>Compare d'abord $x$ et $x'$.</p>`, b: R`<p>Soient $(x,y)$ et $(x',y')$. Si $x< x'$ ou $x'< x$, ils sont comparables. Si $x = x'$, on compare $y$ et $y'$ dans $\mathbb R$ (ordre total) : $y\leqslant y'$ ou $y'\leqslant y$. Donc l'ordre lexicographique est <b>total</b>.</p><p>Exemple : $(1,100)\preccurlyeq(2,-5)$, car $1< 2$ (la seconde coordonnée ne compte pas).</p>` }
  ],
  piege: R`Comparer coordonnée par coordonnée : $(1,100)$ et $(2,-5)$ ne seraient pas comparables, alors qu'ici ils le sont.`,
  methode: R`Pour un ordre défini par cas, raisonner par cas sur la première coordonnée.`
},
{ id: "ord-intervalles", ...C1, level: 2, time: "12 min",
  title: "Ranger des segments de gauche à droite",
  enonce: R`<p>Soit $E = \{(a,b)\in\mathbb R^2 : a\leqslant b\}$ (on pense au segment $[a,b]$). On pose $(a,b)\preccurlyeq(a',b')\iff(a,b) = (a',b')\ \text{ou}\ b\leqslant a'$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\preccurlyeq$ est une relation d'ordre sur $E$.</li><li>Est-elle totale ?</li></ol>`,
  decode: { donnees: [R`$b\leqslant a'$ : le segment $[a,b]$ est entièrement à gauche de $[a',b']$.`], but: R`Les propriétés d'ordre.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Réflexive et antisymétrique", h: R`<p>Si $b\leqslant a'$ et $b'\leqslant a$, enchaîne avec $a\leqslant b$ et $a'\leqslant b'$.</p>`, b: R`<p><b>Réflexive</b> : $(a,b) = (a,b)$.</p><p><b>Antisymétrique</b> : supposons $(a,b)\preccurlyeq(a',b')$ et $(a',b')\preccurlyeq(a,b)$ avec $(a,b)\neq(a',b')$. Alors $b\leqslant a'$ et $b'\leqslant a$. Avec $a\leqslant b$ et $a'\leqslant b'$ (définition de $E$) :</p>$$a\leqslant b\leqslant a'\leqslant b'\leqslant a.$$<p>Le premier et le dernier terme sont égaux, donc toutes ces inégalités sont des égalités : $a = b = a' = b'$, et $(a,b) = (a',b')$, contradiction.</p>`, rappels: ["rel-ordre"] },
    { q: 2, t: "(a) Transitive", h: R`<p>$b\leqslant a'\leqslant b'\leqslant a''$.</p>`, b: R`<p>Supposons $(a,b)\preccurlyeq(a',b')\preccurlyeq(a'',b'')$. Si l'une des deux relations est une égalité, la conclusion est immédiate (on remplace). Sinon $b\leqslant a'$ et $b'\leqslant a''$, et comme $a'\leqslant b'$ :</p>$$b\leqslant a'\leqslant b'\leqslant a'',$$<p>donc $b\leqslant a''$ et $(a,b)\preccurlyeq(a'',b'')$.</p>` },
    { q: 3, t: "(b) Pas total", h: R`<p>Deux segments qui se chevauchent.</p>`, b: R`<p>$(0,2)$ et $(1,3)$ : ils sont différents, $2\leqslant1$ est faux et $3\leqslant0$ est faux. Ils ne sont pas comparables : l'ordre <b>n'est pas total</b>. Deux segments qui se chevauchent ne sont jamais comparables.</p>` }
  ],
  piege: R`En (a), oublier d'utiliser $a\leqslant b$ (définition de $E$) : c'est lui qui ferme la chaîne d'inégalités.`,
  methode: R`Antisymétrie : supposer les deux éléments différents et obtenir une chaîne d'inégalités qui revient à son point de départ.`
},
{ id: "ord-complexes", ...C1, level: 2, time: "15 min",
  title: "Un ordre total sur le demi-plan supérieur",
  enonce: R`<p>Sur $P = \{z\in\mathbb C : \operatorname{Im}(z)\geqslant0\}$, on pose $z\preccurlyeq z'\iff|z|< |z'|\ \text{ou}\ \big(|z| = |z'|\ \text{et}\ \operatorname{Re}(z)\leqslant\operatorname{Re}(z')\big)$. Montrer que c'est une relation d'ordre total.</p>`,
  decode: { donnees: [R`Sur $P$, $\operatorname{Im}(z) = \sqrt{|z|^2-\operatorname{Re}(z)^2}$.`], but: R`Les propriétés d'ordre et la totalité.`, cles: {} },
  steps: [
    { q: 1, t: "Réflexive, antisymétrique", h: R`<p>Module et partie réelle déterminent $z$ dans $P$.</p>`, b: R`<p><b>Réflexive</b> : $|z| = |z|$ et $\operatorname{Re}z\leqslant\operatorname{Re}z$.</p><p><b>Antisymétrique</b> : si $z\preccurlyeq z'$ et $z'\preccurlyeq z$, on ne peut pas avoir $|z|< |z'|$ (ni l'inverse), donc $|z| = |z'|$, puis $\operatorname{Re}z\leqslant\operatorname{Re}z'$ et $\operatorname{Re}z'\leqslant\operatorname{Re}z$, d'où $\operatorname{Re}z = \operatorname{Re}z'$. Alors $\operatorname{Im}(z)^2 = |z|^2-\operatorname{Re}(z)^2 = \operatorname{Im}(z')^2$, et comme les deux parties imaginaires sont $\geqslant0$, elles sont égales. Donc $z = z'$.</p>`, rappels: ["rel-ordre"] },
    { q: 2, t: "Transitive et totale", h: R`<p>Même structure que l'ordre lexicographique.</p>`, b: R`<p>C'est l'ordre lexicographique sur le couple $(|z|,\operatorname{Re}z)$ : même raisonnement de transitivité (cas « $<$ » ou « $=$ » sur les modules).</p><p><b>Totale</b> : si $|z|\neq|z'|$, l'un est strictement plus petit ; si $|z| = |z'|$, on compare les parties réelles, toujours comparables. Deux éléments sont donc toujours comparables.</p><div class="sbox"><p style="margin:0">$\preccurlyeq$ est un ordre total sur $P$.</p></div><p>Pourquoi le demi-plan ? Sur $\mathbb C$ tout entier, $i$ et $-i$ ont même module et même partie réelle, et l'antisymétrie échouerait.</p>` }
  ],
  piege: R`Oublier l'hypothèse $\operatorname{Im}\geqslant0$ : elle sert à l'antisymétrie.`,
  methode: R`Un ordre lexicographique sur des quantités qui déterminent l'élément est un ordre total.`
},
{ id: "ord-prolongement", ...C1, level: 2, time: "10 min",
  title: "L'ordre « prolongement »",
  enonce: R`<p>Soit $E$ l'ensemble des couples $(I,f)$ formés d'un intervalle $I$ et d'une fonction réelle $f$ définie sur $I$. On pose $(I,f)\preccurlyeq(J,g)\iff I\subset J\ \text{et}\ g_{|I} = f$. Montrer que c'est une relation d'ordre. (Question ajoutée : est-il total ?)</p>`,
  decode: { donnees: [R`$(I,f)\preccurlyeq(J,g)$ : $g$ prolonge $f$.`], but: R`Les trois propriétés.`, cles: {} },
  steps: [
    { q: 1, t: "Les trois propriétés", h: R`<p>Antisymétrie : $I = J$ puis $f = g$.</p>`, b: R`<ul><li><b>Réflexive</b> : $I\subset I$ et $f_{|I} = f$.</li><li><b>Antisymétrique</b> : si $I\subset J$, $J\subset I$, $g_{|I} = f$ et $f_{|J} = g$, alors $I = J$ et $f = g_{|I} = g$.</li><li><b>Transitive</b> : si $I\subset J\subset K$, $g_{|I} = f$ et $h_{|J} = g$, alors $I\subset K$ et $h_{|I} = (h_{|J})_{|I} = g_{|I} = f$.</li></ul><p><b>Pas total</b> : $([0,1],x\mapsto0)$ et $([0,1],x\mapsto1)$ ont le même domaine mais des fonctions différentes : aucune ne prolonge l'autre.</p>`, rappels: ["rel-ordre"] }
  ],
  piege: R`Oublier de comparer les fonctions : l'inclusion des domaines ne suffit pas.`,
  methode: R`Restreindre deux fois revient à restreindre directement au plus petit domaine.`
},
{ id: "ord-max-union", ...C1, level: 2, time: "12 min",
  title: "Plus grand élément d'une réunion",
  enonce: R`<p>Soit $(E,\preccurlyeq)$ un ensemble ordonné et $A,B\subset E$ ayant chacun un plus grand élément. Que dire de $A\cup B$ quand l'ordre est total ? quand il ne l'est pas ? Que dire de $A\cap B$ ?</p>`,
  decode: { donnees: [R`Plus grand élément : un élément de la partie qui majore tous les autres.`], but: R`Trois situations.`, cles: {} },
  steps: [
    { q: 1, t: "Ordre total", h: R`<p>Compare $a = \max A$ et $b = \max B$.</p>`, b: R`<p>Notons $a = \max A$ et $b = \max B$. L'ordre est total : par exemple $a\preccurlyeq b$ (sinon on échange). Alors $b$ majore $A\cup B$ : pour $x\in A$, $x\preccurlyeq a\preccurlyeq b$ ; pour $x\in B$, $x\preccurlyeq b$. Et $b\in A\cup B$.</p><div class="sbox">$$\max(A\cup B) = \max(\max A,\max B).$$</div>`, rappels: ["rel-ordre"] },
    { q: 2, t: "Ordre non total, et l'intersection", h: R`<p>Divisibilité sur $\mathbb N^\ast$.</p>`, b: R`<p><b>Ordre non total</b> : dans $(\mathbb N^\ast,\mid)$, $A = \{2,4\}$ a pour plus grand élément $4$, $B = \{3,9\}$ a $9$. Mais $A\cup B = \{2,3,4,9\}$ n'a pas de plus grand élément : il devrait être un multiple de $4$ et de $9$ parmi $2,3,4,9$, et il n'y en a pas.</p><p><b>Intersection</b> : $A\cap B$ peut ne pas avoir de plus grand élément. Elle peut être vide (ci-dessus, $A\cap B = \emptyset$). Dans $(\mathbb N^\ast,\mid)$, avec $A = \{1,2,3,6\}$ et $B = \{1,2,3,12\}$, $A\cap B = \{1,2,3\}$ n'a pas de plus grand élément ($2$ et $3$ ne sont pas comparables).</p>` }
  ],
  piege: R`Croire qu'un ensemble fini a toujours un plus grand élément : c'est vrai seulement pour un ordre total.`,
  methode: R`Pour un ordre partiel, chercher des contre-exemples avec la divisibilité ou l'inclusion.`
},
{ id: "ord-minimax", ...C1, level: 2, time: "12 min",
  title: "Le max des min est plus petit que le min des max",
  enonce: R`<p>Soit $(a_{i,j})$ un tableau de réels à $n$ lignes et $p$ colonnes.</p><ol style="list-style:lower-alpha"><li>Comparer $\displaystyle\max_{1\leqslant j\leqslant p}\Big(\min_{1\leqslant i\leqslant n}a_{i,j}\Big)$ et $\displaystyle\min_{1\leqslant i\leqslant n}\Big(\max_{1\leqslant j\leqslant p}a_{i,j}\Big)$.</li><li>Donner un exemple où ils sont différents.</li></ol>`,
  decode: { donnees: [R`Le premier : on prend le plus petit de chaque colonne, puis le plus grand de ces minima. Le second : l'inverse sur les lignes.`], but: R`Montrer que le premier est $\leqslant$ le second.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Passer par un coefficient", h: R`<p>$\min_ka_{k,j}\leqslant a_{i,j}\leqslant\max_la_{i,l}$.</p>`, b: R`<p>Pour tous $i,j$ : le minimum de la colonne $j$ est $\leqslant$ son coefficient de la ligne $i$, et ce coefficient est $\leqslant$ le maximum de la ligne $i$ :</p>$$\min_ka_{k,j}\leqslant a_{i,j}\leqslant\max_la_{i,l}.$$<p>À $i$ fixé, $\max_la_{i,l}$ majore tous les $\min_ka_{k,j}$ ($j$ variable), donc majore leur maximum : $\max_j\min_ka_{k,j}\leqslant\max_la_{i,l}$. Ce nombre minore tous les $\max_la_{i,l}$, donc leur minimum :</p><div class="sbox">$$\max_j\min_ia_{i,j}\leqslant\min_i\max_ja_{i,j}.$$</div>` },
    { q: 2, t: "(b) Un exemple strict", h: R`<p>$\begin{pmatrix}1&4\\3&2\end{pmatrix}$.</p>`, b: R`<p>Tableau $\begin{pmatrix}1&4\\3&2\end{pmatrix}$. Minima des colonnes : $\min(1,3) = 1$, $\min(4,2) = 2$ ; leur maximum vaut $2$. Maxima des lignes : $\max(1,4) = 4$, $\max(3,2) = 3$ ; leur minimum vaut $3$. On a $2< 3$.</p>` }
  ],
  piege: R`Inverser les rôles des lignes et des colonnes en cours de route.`,
  methode: R`Comparer deux expressions « sup-inf » en passant par un coefficient commun.`
},
{ id: "ord-descente", ...C1, level: 1, time: "8 min",
  title: "Pas de suite strictement décroissante d'entiers naturels",
  enonce: R`<p>Montrer qu'il n'existe pas de suite strictement décroissante d'entiers naturels.</p>`,
  decode: { donnees: [R`Toute partie non vide de $\mathbb N$ a un plus petit élément.`], but: R`Raisonner par l'absurde.`, cles: {} },
  steps: [
    { q: 1, t: "Par l'absurde", h: R`<p>Regarde le plus petit terme de la suite.</p>`, b: R`<p>Supposons qu'une telle suite $(u_n)$ existe. L'ensemble de ses valeurs $A = \{u_n : n\in\mathbb N\}$ est une partie non vide de $\mathbb N$ : il a un plus petit élément $m$. Comme $m\in A$, $m = u_N$ pour un certain $N$. Mais la suite est strictement décroissante : $u_{N+1}< u_N = m$, alors que $u_{N+1}\in A$ et $m = \min A$. Contradiction.</p><div class="sbox"><p style="margin:0">Aucune suite d'entiers naturels n'est strictement décroissante.</p></div><p>C'est le principe de la « descente infinie », utilisé par exemple pour montrer que $\sqrt2$ est irrationnel.</p>`, rappels: ["absurde"] }
  ],
  piege: R`Dire « la suite tend vers $-\infty$ » sans justification : l'argument propre passe par le plus petit élément.`,
  methode: R`Plus petit élément d'une partie de $\mathbb N$ : outil de base pour les raisonnements par l'absurde sur les entiers.`
},
{ id: "ord-fini", ...C1, level: 3, time: "15 min",
  title: "Si toute partie a un min et un max, l'ensemble est fini",
  enonce: R`<p>Soit $(E,\preccurlyeq)$ un ensemble ordonné dans lequel toute partie non vide a un plus petit et un plus grand élément. Montrer que $E$ est fini.</p>`,
  decode: { donnees: [R`Min et max existent pour toute partie non vide.`], but: R`Par l'absurde, construire une suite strictement croissante.`, cles: {} },
  steps: [
    { q: 1, t: "L'ordre est total", h: R`<p>Applique l'hypothèse à $\{x,y\}$.</p>`, b: R`<p>Pour $x,y\in E$, la partie $\{x,y\}$ a un plus grand élément : c'est $x$ ou $y$, et il majore l'autre. Donc $x$ et $y$ sont comparables : l'ordre est total.</p>`, rappels: ["rel-ordre"] },
    { q: 2, t: "Par l'absurde : une suite strictement croissante", h: R`<p>$x_0 = \min E$, puis $x_{n+1} = \min(E\setminus\{x_0,\dots,x_n\})$.</p>`, b: R`<p>Supposons $E$ infini. On construit par récurrence : $x_0 = \min E$ et $x_{n+1} = \min\big(E\setminus\{x_0,\dots,x_n\}\big)$, qui existe car cette partie est non vide ($E$ est infini). Chaque $x_{n+1}$ est différent des précédents, et $x_n\preccurlyeq x_{n+1}$ (le minimum d'une partie plus petite est plus grand). Donc la suite est strictement croissante.</p><p>La partie $X = \{x_n : n\in\mathbb N\}$ est non vide, donc a un plus grand élément $x_N$. Mais $x_{N+1}\in X$ et $x_N\prec x_{N+1}$ : contradiction.</p><div class="sbox"><p style="margin:0">$E$ est fini.</p></div>`, rappels: ["absurde"] }
  ],
  piege: R`Oublier de justifier que $x_n\preccurlyeq x_{n+1}$ : $x_n$ est le minimum d'une partie qui contient $x_{n+1}$.`,
  methode: R`Construire par récurrence une suite qui contredit l'hypothèse (ici, une partie sans plus grand élément).`
}
]);
})();

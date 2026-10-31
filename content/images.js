/* Maths MPSI · chapitre 02 : images directes et réciproques. */
(() => {
const R = String.raw;
const C1 = { subj: "maths", year: "mpsi", chap: 1 };

LEMME.rappels({
  "im-def": { t: "Image directe, image réciproque", b: R`<p>Pour $f : E\to F$, $A\subset E$, $B\subset F$ :</p><ul><li>$f(A) = \{f(a) : a\in A\}$, donc $y\in f(A)\iff\exists a\in A,\ y = f(a)$ ;</li><li>$f^{-1}(B) = \{x\in E : f(x)\in B\}$, donc $x\in f^{-1}(B)\iff f(x)\in B$.</li></ul><p>$f^{-1}(B)$ a un sens même si $f$ n'est pas bijective.</p>` }
});

LEMME.exercises([
{ id: "im-calculs", ...C1, level: 1, time: "15 min",
  title: "Calculer des images directes et réciproques",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb R$, $f(x) = x^2$.</p><ol style="list-style:lower-alpha"><li>Déterminer $f([-1,2])$.</li><li>Déterminer $f^{-1}([1,2[)$ et $f^{-1}([-1,4])$.</li><li>Déterminer l'image directe $\exp(\mathbb R)$.</li><li>(Question ajoutée) Comparer $f^{-1}\big(f([0,1])\big)$ et $[0,1]$.</li></ol>`,
  decode: { donnees: [R`$x\mapsto x^2$ décroît sur $\mathbb R_-$ et croît sur $\mathbb R_+$.`], but: R`Décrire chaque ensemble par des intervalles.`, cles: {} },
  steps: [
    { q: 1, t: "(a) f([−1, 2])", h: R`<p>Coupe $[-1,2]$ en $[-1,0]$ et $[0,2]$.</p>`, b: R`<p>Par définition, $f([-1,2]) = \{x^2 : -1\leqslant x\leqslant2\}$. On coupe l'intervalle en deux, là où $f$ change de sens de variation :</p><ul><li>sur $[-1,0]$, $f$ est décroissante et continue : elle prend toutes les valeurs entre $f(0) = 0$ et $f(-1) = 1$, soit $[0,1]$ ;</li><li>sur $[0,2]$, $f$ est croissante et continue : valeurs entre $f(0) = 0$ et $f(2) = 4$, soit $[0,4]$.</li></ul><p>L'image de la réunion est la réunion des images :</p><div class="sbox">$$f([-1,2]) = [0,1]\cup[0,4] = [0,4].$$</div>`, rappels: ["im-def"] },
    { q: 2, t: "(b) Deux images réciproques", h: R`<p>$x\in f^{-1}(B)\iff x^2\in B$.</p>`, b: R`<p><b>$f^{-1}([1,2[)$</b> : $x$ y appartient si et seulement si $1\leqslant x^2< 2$. La racine carrée est croissante sur $\mathbb R_+$ et $\sqrt{x^2} = |x|$, donc la condition équivaut à $1\leqslant|x|< \sqrt2$ :</p>$$f^{-1}([1,2[) = \,]-\sqrt2,-1]\cup[1,\sqrt2[.$$<p><b>$f^{-1}([-1,4])$</b> : condition $-1\leqslant x^2\leqslant4$. La partie $x^2\geqslant-1$ est toujours vraie ; il reste $x^2\leqslant4$, soit $|x|\leqslant2$ :</p>$$f^{-1}([-1,4]) = [-2,2].$$` },
    { q: 3, t: "(c) L'image de l'exponentielle", h: R`<p>Tout $y>0$ s'écrit $e^{\ln y}$.</p>`, b: R`<ul><li>$\exp(\mathbb R)\subset\,]0,+\infty[$ : une exponentielle est toujours $>0$.</li><li>$]0,+\infty[\,\subset\exp(\mathbb R)$ : pour $y>0$, $x = \ln y$ est un réel et $e^x = y$.</li></ul><div class="sbox">$$\exp(\mathbb R) = \,]0,+\infty[\, = \mathbb R_+^\ast.$$</div>` },
    { q: 4, t: "(d) Aller-retour", h: R`<p>Calcule d'abord $f([0,1])$.</p>`, b: R`<p>$f([0,1]) = [0,1]$ ($f$ croissante et continue sur $[0,1]$). Puis $f^{-1}([0,1]) = \{x : 0\leqslant x^2\leqslant1\} = [-1,1]$.</p><p>Donc $f^{-1}\big(f([0,1])\big) = [-1,1]$, qui contient strictement $[0,1]$ : l'aller-retour a ajouté les $x\in[-1,0[$, qui ont la même image que $-x$. C'est parce que $f$ n'est pas injective.</p>` }
  ],
  piege: R`Écrire $f([-1,2]) = [f(-1),f(2)] = [1,4]$ : on oublie que $f$ descend jusqu'à $0$ entre $-1$ et $2$.`,
  methode: R`Image directe : étudier les variations. Image réciproque : résoudre l'inéquation « $f(x)\in B$ ».`
},
{ id: "im-partition", ...C1, level: 1, time: "10 min",
  title: "Les fibres d'une surjection forment une partition",
  enonce: R`<p>Soit $f : E\to I$ surjective. Pour $i\in I$, on pose $A_i = f^{-1}(\{i\})$. Montrer que les $A_i$ sont non vides, deux à deux disjoints, et que leur réunion est $E$.</p>`,
  decode: { donnees: [R`$A_i$ est l'ensemble des antécédents de $i$.`], but: R`Les trois propriétés d'une partition.`, cles: {} },
  steps: [
    { q: 1, t: "Non vides et disjoints", h: R`<p>Surjectivité ; puis un $x$ commun aurait deux images.</p>`, b: R`<p><b>Non vides</b> : $f$ est surjective, donc tout $i\in I$ a un antécédent $x$ ; alors $f(x) = i$, c'est-à-dire $x\in A_i$.</p><p><b>Disjoints</b> : soient $i\neq j$. Si $x\in A_i\cap A_j$, alors $f(x) = i$ et $f(x) = j$, donc $i = j$ : contradiction. Donc $A_i\cap A_j = \emptyset$ dès que $i\neq j$.</p>` },
    { q: 2, t: "Réunion égale à E", h: R`<p>Tout $x$ est dans $A_{f(x)}$.</p>`, b: R`<p>Chaque $A_i$ est inclus dans $E$, donc $\bigcup_iA_i\subset E$. Réciproquement, soit $x\in E$ et $i = f(x)$ : alors $x\in A_i$. Donc $E\subset\bigcup_{i\in I}A_i$.</p><div class="sbox"><p style="margin:0">$(A_i)_{i\in I}$ est une partition de $E$ : chaque point est dans une et une seule « fibre » $f^{-1}(\{i\})$.</p></div>` }
  ],
  piege: R`Oublier la surjectivité : sans elle, certains $A_i$ seraient vides.`,
  methode: R`Partition : non vides, deux à deux disjoints, réunion égale à tout l'ensemble.`
},
{ id: "im-complementaire", ...C1, level: 1, time: "8 min",
  title: "Image réciproque d'un complémentaire",
  enonce: R`<p>Soit $f : E\to F$ et $B\subset F$. Montrer que $f^{-1}(F\setminus B) = E\setminus f^{-1}(B)$. (Question ajoutée : a-t-on de même $f(E\setminus A) = F\setminus f(A)$ pour $A\subset E$ ?)</p>`,
  decode: { donnees: [R`$x\in f^{-1}(B)\iff f(x)\in B$.`], but: R`Une égalité d'ensembles par équivalences.`, cles: {} },
  steps: [
    { q: 1, t: "Chaîne d'équivalences", h: R`<p>Traduis chaque appartenance.</p>`, b: R`<p>Soit $x\in E$.</p>$$x\in f^{-1}(F\setminus B)\iff f(x)\in F\setminus B\iff f(x)\notin B\iff x\notin f^{-1}(B)\iff x\in E\setminus f^{-1}(B).$$<p>(1) définition de l'image réciproque ; (2) $f(x)\in F$ toujours, donc « dans $F\setminus B$ » veut dire « pas dans $B$ » ; (3) négation de la définition ; (4) $x\in E$.</p><div class="sbox">$$f^{-1}(F\setminus B) = E\setminus f^{-1}(B).$$</div>`, rappels: ["im-def"] },
    { q: 2, t: "Et pour l'image directe ?", h: R`<p>Teste une fonction constante.</p>`, b: R`<p>Non en général. Avec $f : \mathbb R\to\mathbb R$ constante égale à $0$ et $A = \{1\}$ : $f(\mathbb R\setminus A) = \{0\}$, alors que $\mathbb R\setminus f(A) = \mathbb R\setminus\{0\}$. L'image réciproque se comporte bien avec toutes les opérations ; l'image directe, non (voir l'exercice « $f$ bijective et complémentaires »).</p>` }
  ],
  piege: R`Croire que l'image directe se comporte aussi bien que l'image réciproque.`,
  methode: R`Avec $f^{-1}$, tout se traduit en une condition sur $f(x)$ : on peut enchaîner des équivalences.`
},
{ id: "im-inclusions", ...C1, level: 2, time: "20 min",
  title: "Inclusions, et caractérisation de l'injectivité et de la surjectivité",
  enonce: R`<p>Soit $f : E\to F$.</p><ol style="list-style:lower-alpha"><li>Si $A\subset A'\subset E$, montrer $f(A)\subset f(A')$. Si $B\subset B'\subset F$, montrer $f^{-1}(B)\subset f^{-1}(B')$.</li><li>Montrer que $A\subset f^{-1}(f(A))$ et $f(f^{-1}(B))\subset B$.</li><li>Montrer : $f$ injective $\iff\forall A\subset E,\ f^{-1}(f(A)) = A$.</li><li>Montrer : $f$ surjective $\iff\forall B\subset F,\ f(f^{-1}(B)) = B$.</li></ol>`,
  decode: { donnees: [R`Les définitions de $f(A)$ et $f^{-1}(B)$.`], but: R`Inclusions générales, puis cas d'égalité.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Croissance", h: R`<p>Prends $y\in f(A)$, puis $x\in f^{-1}(B)$.</p>`, b: R`<p>Soit $y\in f(A)$ : $y = f(a)$ avec $a\in A\subset A'$, donc $a\in A'$ et $y\in f(A')$.</p><p>Soit $x\in f^{-1}(B)$ : $f(x)\in B\subset B'$, donc $f(x)\in B'$ et $x\in f^{-1}(B')$.</p>`, rappels: ["im-def"] },
    { q: 2, t: "(b) Deux inclusions toujours vraies", h: R`<p>$a\in A$ a pour image $f(a)\in f(A)$.</p>`, b: R`<p><b>$A\subset f^{-1}(f(A))$</b> : soit $a\in A$. Alors $f(a)\in f(A)$, ce qui signifie $a\in f^{-1}(f(A))$.</p><p><b>$f(f^{-1}(B))\subset B$</b> : soit $y\in f(f^{-1}(B))$ ; $y = f(x)$ avec $x\in f^{-1}(B)$, c'est-à-dire $f(x)\in B$. Donc $y\in B$.</p>` },
    { q: 3, t: "(c) Injectivité", h: R`<p>Sens ⇐ : applique à un singleton.</p>`, b: R`<p><b>⇒</b> Supposons $f$ injective. Par (b), il reste $f^{-1}(f(A))\subset A$. Soit $x\in f^{-1}(f(A))$ : $f(x)\in f(A)$, donc $f(x) = f(a)$ avec $a\in A$. Par injectivité $x = a\in A$.</p><p><b>⇐</b> Supposons l'égalité pour toute partie, et prenons $A = \{x\}$ : $f^{-1}(\{f(x)\}) = \{x\}$. L'ensemble des antécédents de $f(x)$ est réduit à $\{x\}$. Si $f(x') = f(x)$, $x'$ est un antécédent de $f(x)$, donc $x' = x$ : $f$ est injective.</p>` },
    { q: 4, t: "(d) Surjectivité", h: R`<p>Sens ⇐ : applique à $B = F$.</p>`, b: R`<p><b>⇒</b> Supposons $f$ surjective. Par (b), il reste $B\subset f(f^{-1}(B))$. Soit $y\in B$ ; il existe $x$ avec $f(x) = y\in B$, donc $x\in f^{-1}(B)$ et $y = f(x)\in f(f^{-1}(B))$.</p><p><b>⇐</b> Avec $B = F$ : $f^{-1}(F) = E$, donc $f(E) = F$. Tout élément de $F$ est une image : $f$ est surjective.</p><div class="sbox">$$f\ \text{injective}\iff\forall A,\ f^{-1}(f(A)) = A,\qquad f\ \text{surjective}\iff\forall B,\ f(f^{-1}(B)) = B.$$</div>` }
  ],
  piege: R`Écrire $f^{-1}(f(A)) = A$ sans hypothèse : avec $x\mapsto x^2$ et $A = [0,1]$, on obtient $[-1,1]$.`,
  methode: R`Pour un « pour toute partie » dans le sens ⇐, tester avec un singleton ou avec l'ensemble tout entier.`
},
{ id: "im-unions", ...C1, level: 2, time: "20 min",
  title: "Images et opérations ensemblistes",
  enonce: R`<p>Soit $f : E\to F$.</p><ol style="list-style:lower-alpha"><li>Pour $A_1,A_2\subset E$, montrer $f(A_1\cup A_2) = f(A_1)\cup f(A_2)$ et $f(A_1\cap A_2)\subset f(A_1)\cap f(A_2)$.</li><li>(Question ajoutée) Montrer sur un exemple que l'inclusion peut être stricte.</li><li>Pour $B_1,B_2\subset F$, montrer $f^{-1}(B_1\cup B_2) = f^{-1}(B_1)\cup f^{-1}(B_2)$ et $f^{-1}(B_1\cap B_2) = f^{-1}(B_1)\cap f^{-1}(B_2)$.</li><li>Montrer que $f(A_1\cap A_2) = f(A_1)\cap f(A_2)$ pour toutes parties $A_1,A_2$ si et seulement si $f$ est injective.</li></ol>`,
  decode: { donnees: [R`$y\in f(A)\iff\exists a\in A,\ y = f(a)$.`], but: R`Comparer image d'une opération et opération des images.`, cles: {} },
  steps: [
    { q: 1, t: "(a) La réunion", h: R`<p>« Il existe $a$ dans $A_1$ ou dans $A_2$ ».</p>`, b: R`<p>$$\begin{aligned}y\in f(A_1\cup A_2)&\iff\exists a\in A_1\cup A_2,\ y = f(a)\\&\iff(\exists a\in A_1,\ y = f(a))\ \text{ou}\ (\exists a\in A_2,\ y = f(a))\\&\iff y\in f(A_1)\cup f(A_2).\end{aligned}$$</p><p>(Ligne 2 : un $a$ dans la réunion est dans $A_1$ ou dans $A_2$.)</p>`, rappels: ["im-def"] },
    { q: 2, t: "(a) L'intersection, et (b) un exemple strict", h: R`<p>Teste $f(x) = x^2$ avec $A_1 = \{-1\}$, $A_2 = \{1\}$.</p>`, b: R`<p><b>Inclusion</b> : $A_1\cap A_2\subset A_1$, donc (croissance) $f(A_1\cap A_2)\subset f(A_1)$ ; de même $\subset f(A_2)$. Donc $f(A_1\cap A_2)\subset f(A_1)\cap f(A_2)$.</p><p><b>Exemple strict</b> : $f(x) = x^2$, $A_1 = \{-1\}$, $A_2 = \{1\}$. Alors $A_1\cap A_2 = \emptyset$, donc $f(A_1\cap A_2) = \emptyset$, alors que $f(A_1)\cap f(A_2) = \{1\}\cap\{1\} = \{1\}$.</p><p>L'égalité échoue parce que $y = 1$ a un antécédent dans $A_1$ et un autre dans $A_2$, mais pas un antécédent commun.</p>` },
    { q: 3, t: "(c) Images réciproques", h: R`<p>$x\in f^{-1}(B)\iff f(x)\in B$.</p>`, b: R`$$x\in f^{-1}(B_1\cup B_2)\iff f(x)\in B_1\cup B_2\iff(f(x)\in B_1\ \text{ou}\ f(x)\in B_2)\iff x\in f^{-1}(B_1)\cup f^{-1}(B_2).$$<p>Même chaîne avec « et » pour l'intersection. L'image réciproque respecte réunions et intersections.</p>` },
    { q: 4, t: "(d) Égalité pour l'intersection ⇔ injective", h: R`<p>⇐ : un $y$ dans les deux images a deux antécédents, égaux. ⇒ : singletons.</p>`, b: R`<p><b>⇐</b> Supposons $f$ injective et soit $y\in f(A_1)\cap f(A_2)$ : $y = f(a_1) = f(a_2)$ avec $a_1\in A_1$, $a_2\in A_2$. Par injectivité $a_1 = a_2$, qui est donc dans $A_1\cap A_2$, et $y\in f(A_1\cap A_2)$. Avec (a), égalité.</p><p><b>⇒</b> Supposons l'égalité pour toutes parties, et $f(x) = f(x')$. Avec $A_1 = \{x\}$, $A_2 = \{x'\}$ : $f(A_1)\cap f(A_2) = \{f(x)\}\neq\emptyset$, donc $f(A_1\cap A_2)\neq\emptyset$, donc $A_1\cap A_2 = \{x\}\cap\{x'\}\neq\emptyset$, c'est-à-dire $x = x'$.</p><div class="sbox">$$\big(\forall A_1,A_2,\ f(A_1\cap A_2) = f(A_1)\cap f(A_2)\big)\iff f\ \text{injective}.$$</div>` }
  ],
  piege: R`Écrire $f(A_1\cap A_2) = f(A_1)\cap f(A_2)$ sans injectivité.`,
  methode: R`L'image réciproque respecte toutes les opérations ; l'image directe respecte seulement la réunion.`
},
{ id: "im-bij-compl", ...C1, level: 3, time: "20 min",
  title: "f bijective et complémentaires",
  tt: R`$f$ bijective $\iff f(\complement_EA) = \complement_Ff(A)$`,
  enonce: R`<p>Soit $f : E\to F$. Montrer que $f$ est bijective si et seulement si, pour toute partie $A$ de $E$, $f(E\setminus A) = F\setminus f(A)$.</p>`,
  decode: { donnees: [R`L'égalité demandée se découpe en deux inclusions.`], but: R`Relier chaque inclusion à l'injectivité ou à la surjectivité.`, cles: {} },
  steps: [
    { q: 1, t: "⇒ : si f est bijective", h: R`<p>Deux inclusions : l'une par l'injectivité, l'autre par la surjectivité.</p>`, b: R`<p>Supposons $f$ bijective et soit $A\subset E$.</p><ul><li><b>$f(E\setminus A)\subset F\setminus f(A)$</b> : soit $y = f(x)$ avec $x\notin A$. Si on avait $y\in f(A)$, alors $y = f(a)$ avec $a\in A$, et par injectivité $x = a\in A$ : contradiction. Donc $y\notin f(A)$.</li><li><b>$F\setminus f(A)\subset f(E\setminus A)$</b> : soit $y\notin f(A)$. Par surjectivité $y = f(x)$ ; si $x\in A$, alors $y\in f(A)$, exclu. Donc $x\in E\setminus A$ et $y\in f(E\setminus A)$.</li></ul>` },
    { q: 2, t: "⇐ : surjectivité", h: R`<p>Prends $A = \emptyset$.</p>`, b: R`<p>Supposons l'égalité pour toute partie. Avec $A = \emptyset$ : $f(E) = F\setminus f(\emptyset) = F\setminus\emptyset = F$. Donc $f$ est surjective.</p>` },
    { q: 3, t: "⇐ : injectivité", h: R`<p>Prends $A = \{x\}$.</p>`, b: R`<p>Soient $x\neq x'$. Avec $A = \{x\}$ : $x'\in E\setminus A$, donc $f(x')\in f(E\setminus A) = F\setminus f(\{x\})$, c'est-à-dire $f(x')\neq f(x)$. $f$ est injective.</p><div class="sbox">$$f\ \text{bijective}\iff\forall A\subset E,\ f(E\setminus A) = F\setminus f(A).$$</div>` }
  ],
  piege: R`Ne vérifier qu'une inclusion : chacune correspond à une propriété différente.`,
  methode: R`Pour exploiter « pour toute partie », choisir les parties les plus simples : $\emptyset$, un singleton.`
},
{ id: "im-point-fixe", ...C1, level: 3, time: "25 min",
  title: "Une application croissante de 𝒫(E) a un point fixe",
  tt: R`Une application croissante de $\mathcal P(E)$ a un point fixe`,
  enonce: R`<p>Soit $f : \mathcal P(E)\to\mathcal P(E)$ croissante pour l'inclusion : $A\subset B\Rightarrow f(A)\subset f(B)$. On pose $\mathcal X = \{X\in\mathcal P(E) : X\subset f(X)\}$ et $A = \bigcup_{X\in\mathcal X}X$.</p><ol style="list-style:lower-alpha"><li>Montrer que $\mathcal X$ est non vide.</li><li>Montrer que $A\subset f(A)$.</li><li>Montrer que $f(A)\subset A$ et conclure que $f(A) = A$.</li></ol>`,
  decode: { donnees: [R`$f$ croissante pour $\subset$.`], but: R`Trouver une partie $A$ avec $f(A) = A$ (théorème de Knaster-Tarski).`, cles: {} },
  steps: [
    { q: 1, t: "(a) ∅ est dans 𝒳", h: R`<p>$\emptyset$ est inclus dans tout ensemble.</p>`, b: R`<p>$\emptyset\subset f(\emptyset)$ (l'ensemble vide est inclus dans tout ensemble), donc $\emptyset\in\mathcal X$ : $\mathcal X\neq\emptyset$.</p>` },
    { q: 2, t: "(b) A ⊂ f(A)", h: R`<p>Chaque $X\in\mathcal X$ vérifie $X\subset A$, donc $f(X)\subset f(A)$.</p>`, b: R`<p>Soit $x\in A$ : il existe $X\in\mathcal X$ avec $x\in X$. Comme $X\subset A$ (c'est l'un des ensembles de la réunion), la croissance donne $f(X)\subset f(A)$. Et $X\in\mathcal X$ donne $X\subset f(X)$. Donc</p>$$x\in X\subset f(X)\subset f(A).$$<p>Ainsi $A\subset f(A)$.</p>` },
    { q: 3, t: "(c) f(A) ⊂ A, puis l'égalité", h: R`<p>Montre que $f(A)\in\mathcal X$.</p>`, b: R`<p>On applique $f$ (croissante) à $A\subset f(A)$ : $f(A)\subset f(f(A))$. Cela signifie exactement que $f(A)\in\mathcal X$. Or $A$ est la réunion de tous les éléments de $\mathcal X$, donc $f(A)\subset A$.</p><p>Avec (b) :</p><div class="sbox">$$f(A) = A.$$</div><p>Exemple : $E = \{1,2\}$ et $f(X) = X\cup\{1\}$ ; $\mathcal X$ est formé de toutes les parties, $A = E$, et $f(E) = E$.</p>` }
  ],
  piege: R`Chercher un point fixe par essais : la construction de $A$ comme réunion fonctionne en général.`,
  methode: R`Plus grand point fixe : réunion de toutes les parties $X$ vérifiant $X\subset f(X)$.`
}
]);
})();

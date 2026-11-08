/* Maths MPSI · chapitre 02 : Ensembles (parties, opérations). */
(() => {
const R = String.raw;
const C1 = { subj: "maths", year: "mpsi", chap: 1 };

LEMME.rappels({
  "en-inclusion": { t: "Appartenance et inclusion", b: R`$$B\subset A\iff\forall x,\ (x\in B\Rightarrow x\in A);\qquad\{x\}\subset A\iff x\in A;\qquad\varnothing\subset A.$$` },
  "en-double": { t: "Égalité par double inclusion", b: R`<div class="sbox">$$A = B\iff A\subset B\ \wedge\ B\subset A,\qquad A\subset B\iff\forall x,\ x\in A\Rightarrow x\in B.$$</div>` },
  "en-operations": { t: "Opérations sur les parties", b: R`$$\begin{aligned}x\in A\cap B&\iff x\in A\wedge x\in B\\x\in A\cup B&\iff x\in A\vee x\in B\\x\in A\setminus B&\iff x\in A\wedge x\notin B\\x\in\overline A&\iff x\in E\wedge x\notin A\end{aligned}\qquad A\setminus B = A\cap\overline B,\quad\overline{\overline A} = A.$$` },
  "en-delta": { t: "Différence symétrique", b: R`$$A\,\Delta\,B = (A\setminus B)\cup(B\setminus A) = (A\cup B)\setminus(A\cap B).$$` },
  "en-indic": { t: "Fonction indicatrice", b: R`$$\mathbf 1_A(x) = \left\{\begin{aligned}&1&&x\in A\\&0&&x\notin A\end{aligned}\right.\qquad A = B\iff\mathbf 1_A = \mathbf 1_B.$$` }
});

LEMME.exercises([
{ id: "en-appartenance", ...C1, level: 1, time: "8 min",
  title: "Appartenance ou inclusion ?",
  tt: R`$\in$ ou $\subset$ ?`,
  enonce: R`<p>Soit $E = \{a,b,c\}$ un ensemble à trois éléments (aucun d'eux n'est l'ensemble vide). Les écritures suivantes sont-elles correctes ?</p><ol style="list-style:lower-alpha"><li>$a\in E$ ;</li><li>$a\subset E$ ;</li><li>$\{a\}\subset E$ ;</li><li>$\emptyset\in E$ ;</li><li>$\emptyset\subset E$ ;</li><li>$\{\emptyset\}\subset E$.</li></ol>`,
  decode: { donnees: [R`Les éléments de $E$ sont exactement $a$, $b$, $c$.`], but: R`Distinguer « être un élément » et « être une partie ».`, cles: {} },
  steps: [
    { q: 1, t: "La règle", h: R`<p>$\in$ relie un élément à un ensemble ; $\subset$ relie deux ensembles.</p>`, b: R`<ul><li>$x\in E$ se lit « $x$ est l'un des éléments de $E$ ». Ici les éléments sont $a$, $b$, $c$, et rien d'autre.</li><li>$B\subset E$ se lit « $B$ est un ensemble dont <b>tous</b> les éléments sont dans $E$ ».</li></ul>`, rappels: ["en-inclusion"] },
    { q: 2, t: "Les six réponses", h: R`<p>Pour $\subset$, liste les éléments de l'ensemble de gauche.</p>`, b: R`<ul><li><b>(a)</b> $a\in E$ : <b>oui</b>, $a$ est l'un des trois éléments.</li><li><b>(b)</b> $a\subset E$ : <b>non</b>. $a$ est un élément, pas une partie de $E$ ; on écrit $\{a\}\subset E$.</li><li><b>(c)</b> $\{a\}\subset E$ : <b>oui</b>. Le seul élément de $\{a\}$ est $a$, qui est dans $E$.</li><li><b>(d)</b> $\emptyset\in E$ : <b>non</b>. Les éléments de $E$ sont $a,b,c$, et aucun n'est $\emptyset$.</li><li><b>(e)</b> $\emptyset\subset E$ : <b>oui</b>. Il faudrait trouver un élément de $\emptyset$ qui ne soit pas dans $E$ ; or $\emptyset$ n'a aucun élément. L'ensemble vide est inclus dans tout ensemble.</li><li><b>(f)</b> $\{\emptyset\}\subset E$ : <b>non</b>. L'unique élément de $\{\emptyset\}$ est $\emptyset$, et il faudrait $\emptyset\in E$, faux par (d).</li></ul><div class="sbox"><p style="margin:0">Écritures correctes : (a), (c) et (e).</p></div>` }
  ],
  piege: R`Confondre $\emptyset$ (aucun élément) et $\{\emptyset\}$ (un élément, qui est l'ensemble vide).`,
  methode: R`$\{x\}\subset E\iff x\in E$ : pour passer de l'un à l'autre, on ajoute ou on retire les accolades.`
},
{ id: "en-comprehension", ...C1, level: 1, time: "12 min",
  title: "Décrire un ensemble en compréhension ou en extension",
  enonce: R`<p>Un ensemble est décrit <b>en compréhension</b> quand on donne une propriété que vérifient ses éléments (par exemple $\{n\in\mathbb Z : \exists k\in\mathbb Z,\ n = 2k\}$), et <b>en extension</b> quand on énumère ses éléments sous une forme paramétrée (par exemple $\{2k : k\in\mathbb Z\}$).</p><ol style="list-style:lower-alpha"><li>Décrire en compréhension et en extension $\{1,3,5,7,\dots\}$.</li><li>Même question pour $\{1,10,100,1000,\dots\}$.</li><li>Décrire $\mathbb Q$ en extension.</li><li>Décrire $]0,1]$ en compréhension.</li><li>Décrire en compréhension et en extension l'ensemble des valeurs prises par une fonction $f : \mathbb R\to\mathbb R$.</li><li>Décrire en compréhension l'ensemble des antécédents d'un réel $y$ par $f$.</li></ol>`,
  decode: { donnees: [R`Compréhension : $\{x\in E : \text{propriété}\}$. Extension : $\{\text{expression}(k) : k\in\dots\}$.`], but: R`Écrire chaque ensemble des deux façons.`, cles: {} },
  steps: [
    { q: 1, t: "(a) et (b)", h: R`<p>(a) les impairs positifs ; (b) les puissances de $10$.</p>`, b: R`<p><b>(a)</b> Ce sont les entiers naturels impairs, c'est-à-dire de la forme $2k+1$ avec $k\in\mathbb N$ ($k = 0$ donne $1$, $k = 1$ donne $3$…) :</p>$$\{1,3,5,\dots\} = \{n\in\mathbb N : \exists k\in\mathbb N,\ n = 2k+1\} = \{2k+1 : k\in\mathbb N\}.$$<p><b>(b)</b> Ce sont les puissances $10^k$ avec $k\in\mathbb N$ ($10^0 = 1$, $10^1 = 10$…) :</p>$$\{1,10,100,\dots\} = \{x\in\mathbb R : \exists k\in\mathbb N,\ x = 10^k\} = \{10^k : k\in\mathbb N\}.$$` },
    { q: 2, t: "(c) et (d)", h: R`<p>Un rationnel est une fraction d'entiers.</p>`, b: R`<p><b>(c)</b> Un rationnel est un quotient $\frac pq$ avec $p$ entier relatif et $q$ entier non nul ; on peut prendre $q>0$ :</p>$$\mathbb Q = \Big\{\frac pq : p\in\mathbb Z,\ q\in\mathbb N^\ast\Big\}.$$<p><b>(d)</b> Les réels strictement plus grands que $0$ et inférieurs ou égaux à $1$ :</p>$$]0,1] = \{x\in\mathbb R : 0< x\leqslant1\}.$$` },
    { q: 3, t: "(e) et (f)", h: R`<p>(e) est l'image $f(\mathbb R)$ ; (f) est $f^{-1}(\{y\})$.</p>`, b: R`<p><b>(e)</b> Un réel $y$ est une valeur prise par $f$ s'il existe $x$ avec $y = f(x)$ :</p>$$f(\mathbb R) = \{y\in\mathbb R : \exists x\in\mathbb R,\ y = f(x)\} = \{f(x) : x\in\mathbb R\}.$$<p><b>(f)</b> Les antécédents de $y$ sont les $x$ dont l'image vaut $y$ :</p>$$f^{-1}(\{y\}) = \{x\in\mathbb R : f(x) = y\}.$$<p>Exemple avec $f(x) = x^2$ : $f(\mathbb R) = [0,+\infty[$ et $f^{-1}(\{4\}) = \{-2,2\}$.</p>` }
  ],
  piege: R`En extension, oublier de dire où varie le paramètre : $\{2k+1\}$ seul ne veut rien dire, il faut « $k\in\mathbb N$ ».`,
  methode: R`Compréhension : « les $x$ de … tels que … ». Extension : « les … quand $k$ parcourt … ».`
},
{ id: "en-parties", ...C1, level: 2, time: "10 min",
  title: "Les parties des parties d'un singleton",
  tt: R`$\mathcal P\big(\mathcal P(\{a\})\big)$`,
  enonce: R`<p>Soit $a$ un élément. Décrire $\mathcal P(\{a\})$, puis $\mathcal P\big(\mathcal P(\{a\})\big)$.</p>`,
  decode: { donnees: [R`$\mathcal P(X)$ est l'ensemble de toutes les parties de $X$.`, R`Si $X$ a $n$ éléments, $\mathcal P(X)$ en a $2^n$.`], but: R`Lister les parties, deux fois de suite.`, cles: {} },
  steps: [
    { q: 1, t: "Les parties de {a}", h: R`<p>Une partie contient $a$ ou ne le contient pas.</p>`, b: R`<p>Une partie de $\{a\}$ contient ou non l'unique élément $a$ : il y a deux possibilités, $\emptyset$ et $\{a\}$ (et $2^1 = 2$).</p>$$\mathcal P(\{a\}) = \big\{\emptyset,\ \{a\}\big\}.$$` },
    { q: 2, t: "Les parties de cet ensemble à deux éléments", h: R`<p>Note $X = \{u,v\}$ avec $u = \emptyset$, $v = \{a\}$.</p>`, b: R`<p>$\mathcal P(\{a\})$ a deux éléments, $u = \emptyset$ et $v = \{a\}$. Un ensemble $\{u,v\}$ a $2^2 = 4$ parties : $\emptyset$, $\{u\}$, $\{v\}$, $\{u,v\}$. On remplace $u$ et $v$ :</p><div class="sbox">$$\mathcal P\big(\mathcal P(\{a\})\big) = \Big\{\emptyset,\ \{\emptyset\},\ \big\{\{a\}\big\},\ \big\{\emptyset,\{a\}\big\}\Big\}.$$</div><p>Remarque : $\emptyset$ et $\{\emptyset\}$ sont deux éléments différents de cet ensemble (le premier n'a aucun élément, le second en a un).</p>` }
  ],
  piege: R`Oublier les accolades : $\{\{a\}\}$ (un ensemble qui contient le singleton $\{a\}$) n'est pas $\{a\}$.`,
  methode: R`Nommer les éléments par des lettres ($u$, $v$) pour lister les parties sans se perdre dans les accolades.`
},
{ id: "en-indicatrices", ...C1, level: 2, time: "15 min",
  title: "Fonctions indicatrices",
  enonce: R`<p>Soit $E$ un ensemble. Pour $A\subset E$, la fonction indicatrice de $A$ est $\mathbf 1_A : E\to\mathbb R$, $\mathbf 1_A(x) = 1$ si $x\in A$ et $0$ sinon. Soient $A,B\subset E$. De quelles parties les fonctions suivantes sont-elles les indicatrices ?</p><ol style="list-style:lower-alpha"><li>$\min(\mathbf 1_A,\mathbf 1_B)$ ;</li><li>$\max(\mathbf 1_A,\mathbf 1_B)$ ;</li><li>$\mathbf 1_A\mathbf 1_B$ ;</li><li>$1-\mathbf 1_A$ ;</li><li>$\mathbf 1_A+\mathbf 1_B-\mathbf 1_A\mathbf 1_B$ ;</li><li>$(\mathbf 1_A-\mathbf 1_B)^2$.</li></ol>`,
  decode: { donnees: [R`Chaque fonction ne prend que les valeurs $0$ et $1$.`], but: R`Trouver l'ensemble des $x$ où elle vaut $1$.`, cles: {} },
  steps: [
    { q: 1, t: "La méthode : quatre cas", h: R`<p>Un point $x$ est dans $A$ ou non, dans $B$ ou non.</p>`, b: R`<p>Une fonction $g : E\to\{0,1\}$ est l'indicatrice de l'ensemble $\{x : g(x) = 1\}$. Pour un point $x$, il y a quatre cas selon que $x$ est dans $A$ ou non, dans $B$ ou non. On calcule chaque fonction dans les quatre cas ($a = \mathbf 1_A(x)$, $b = \mathbf 1_B(x)$) :</p>$$\begin{array}{cc|cccccc}a&b&\min&\max&ab&1-a&a+b-ab&(a-b)^2\\\hline1&1&1&1&1&0&1&0\\1&0&0&1&0&0&1&1\\0&1&0&1&0&1&1&1\\0&0&0&0&0&1&0&0\end{array}$$<p>Exemple de calcul, ligne 2 ($x\in A$, $x\notin B$) : $a+b-ab = 1+0-0 = 1$ et $(a-b)^2 = (1-0)^2 = 1$.</p>`, rappels: ["en-indic"] },
    { q: 2, t: "Lire les colonnes", h: R`<p>Repère les lignes où la colonne vaut $1$.</p>`, b: R`<ul><li><b>(a)</b> $\min = 1$ seulement si $x\in A$ et $x\in B$ : c'est $\mathbf 1_{A\cap B}$.</li><li><b>(b)</b> $\max = 1$ dès que $x\in A$ ou $x\in B$ : c'est $\mathbf 1_{A\cup B}$.</li><li><b>(c)</b> $ab = 1$ seulement si $a = b = 1$ : c'est $\mathbf 1_{A\cap B}$.</li><li><b>(d)</b> $1-a = 1$ quand $x\notin A$ : c'est $\mathbf 1_{\overline A}$, l'indicatrice du complémentaire de $A$ dans $E$.</li><li><b>(e)</b> $a+b-ab = 1$ sur les trois premières lignes : c'est $\mathbf 1_{A\cup B}$.</li><li><b>(f)</b> $(a-b)^2 = 1$ quand $x$ est dans exactement un des deux ensembles : c'est $\mathbf 1_{A\Delta B}$, avec $A\,\Delta\,B = (A\cup B)\setminus(A\cap B)$.</li></ul>`, rappels: ["en-delta"] }
  ],
  piege: R`En (e), écrire $\mathbf 1_A+\mathbf 1_B = \mathbf 1_{A\cup B}$ : sur $A\cap B$ la somme vaut $2$, d'où le terme $-\mathbf 1_A\mathbf 1_B$.`,
  methode: R`Une égalité entre indicatrices se vérifie en distinguant les quatre cas $x\in A$ ou non, $x\in B$ ou non.`
},
{ id: "en-simplification", ...C1, level: 1, time: "12 min",
  title: "Simplifier par A dans une intersection et une réunion",
  enonce: R`<p>Soient $A,B,C$ trois parties d'un ensemble $E$. On suppose $A\cap B = A\cap C$ et $A\cup B = A\cup C$. Montrer que $B = C$. La réciproque est-elle vraie ?</p>`,
  decode: { donnees: [R`Deux égalités, l'une avec $\cap$, l'autre avec $\cup$.`], but: R`Montrer $B = C$ par double inclusion.`, cles: {} },
  steps: [
    { q: 1, t: "B ⊂ C, par disjonction de cas", h: R`<p>Soit $x\in B$ : est-il dans $A$ ?</p>`, b: R`<p>On montre $B\subset C$. Soit $x\in B$. On distingue deux cas.</p><ul><li><b>$x\in A$</b> : alors $x\in A\cap B$. Comme $A\cap B = A\cap C$, $x\in A\cap C$, donc $x\in C$.</li><li><b>$x\notin A$</b> : comme $x\in B$, on a $x\in A\cup B = A\cup C$. Donc $x\in A$ ou $x\in C$ ; mais $x\notin A$, donc $x\in C$.</li></ul><p>Dans les deux cas $x\in C$ : $B\subset C$.</p>`, rappels: ["en-double", "lg-disjonction"] },
    { q: 2, t: "C ⊂ B, puis la réciproque", h: R`<p>Les hypothèses sont symétriques en $B$ et $C$.</p>`, b: R`<p>Les hypothèses ne changent pas si on échange $B$ et $C$. Le même raisonnement donne donc $C\subset B$. Par double inclusion, $B = C$.</p><p><b>Réciproque</b> : si $B = C$, alors évidemment $A\cap B = A\cap C$ et $A\cup B = A\cup C$.</p><div class="sbox">$$\big(A\cap B = A\cap C\ \text{et}\ A\cup B = A\cup C\big)\iff B = C.$$</div><p>Une seule des deux hypothèses ne suffit pas : avec $A = E$, on a toujours $A\cup B = A\cup C = E$, même si $B\neq C$.</p>` }
  ],
  piege: R`Simplifier « $A\cap B = A\cap C$ donc $B = C$ » : c'est faux (prendre $A = \emptyset$).`,
  methode: R`Pour une inclusion : prendre $x$ quelconque, puis séparer les cas $x\in A$ et $x\notin A$.`
},
{ id: "en-operations", ...C1, level: 1, time: "20 min",
  title: "Quatre manipulations de parties",
  enonce: R`<p>Soient $A,B,C$ trois parties d'un ensemble $E$.</p><ol style="list-style:lower-alpha"><li>Montrer que $A\setminus(B\cap C) = (A\setminus B)\cup(A\setminus C)$.</li><li>On suppose $A\cap B\subset A\cap C$ et $A\cup B\subset A\cup C$. Montrer que $B\subset C$.</li><li>On suppose $A\setminus B = C$. Montrer que $A\cup B = B\cup C$.</li><li>On suppose $A\cap B = B\cap C = C\cap A$ et $A\cup B = B\cup C = C\cup A$. Montrer que $A = B = C$.</li></ol>`,
  decode: { donnees: [R`Les définitions de $\cap$, $\cup$, $\setminus$.`], but: R`Quatre égalités ou inclusions, élément par élément.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Une chaîne d'équivalences", h: R`<p>La négation de « $x\in B$ et $x\in C$ » est « $x\notin B$ ou $x\notin C$ ».</p>`, b: R`<p>Soit $x\in E$. On traduit chaque symbole :</p>$$\begin{aligned}x\in A\setminus(B\cap C)&\iff x\in A\ \text{et}\ \text{non}(x\in B\ \text{et}\ x\in C)\\&\iff x\in A\ \text{et}\ (x\notin B\ \text{ou}\ x\notin C)\\&\iff(x\in A\ \text{et}\ x\notin B)\ \text{ou}\ (x\in A\ \text{et}\ x\notin C)\\&\iff x\in(A\setminus B)\cup(A\setminus C).\end{aligned}$$<p>Ligne 2 : négation d'un « et ». Ligne 3 : distributivité du « et » sur le « ou ». Les deux ensembles ont les mêmes éléments : ils sont égaux.</p>`, rappels: ["en-operations", "lg-negation"] },
    { q: 2, t: "(b) Comme pour l'égalité", h: R`<p>Même disjonction de cas que dans l'exercice « simplifier par $A$ ».</p>`, b: R`<p>Soit $x\in B$.</p><ul><li>Si $x\in A$ : $x\in A\cap B\subset A\cap C$, donc $x\in C$.</li><li>Si $x\notin A$ : $x\in A\cup B\subset A\cup C$, donc $x\in A$ ou $x\in C$ ; comme $x\notin A$, $x\in C$.</li></ul><p>Donc $B\subset C$.</p>` },
    { q: 3, t: "(c) Double inclusion", h: R`<p>Remplace $C$ par $A\setminus B$.</p>`, b: R`<p>On montre $A\cup B = B\cup(A\setminus B)$.</p><ul><li><b>$\subset$</b> : soit $x\in A\cup B$. Si $x\in B$, il est dans $B\cup C$. Sinon $x\notin B$, et comme $x\in A\cup B$, $x\in A$ ; donc $x\in A\setminus B = C$, et $x\in B\cup C$.</li><li><b>$\supset$</b> : soit $x\in B\cup C$. Si $x\in B$, alors $x\in A\cup B$. Si $x\in C = A\setminus B$, alors $x\in A\subset A\cup B$.</li></ul><div class="sbox">$$A\cup B = B\cup C.$$</div>`, rappels: ["en-double"] },
    { q: 4, t: "(d) Utiliser la simplification", h: R`<p>Applique « $A\cap B = A\cap C$ et $A\cup B = A\cup C\Rightarrow B = C$ ».</p>`, b: R`<p>On utilise le résultat de l'exercice « Simplifier par $A$ » : si $A\cap B = A\cap C$ et $A\cup B = A\cup C$, alors $B = C$.</p><ul><li>Les hypothèses donnent $A\cap B = C\cap A = A\cap C$ et $A\cup B = C\cup A = A\cup C$. Donc $B = C$.</li><li>De même, $B\cap A = B\cap C$ (car $A\cap B = B\cap C$) et $B\cup A = B\cup C$. En simplifiant par $B$ : $A = C$.</li></ul><div class="sbox">$$A = B = C.$$</div>` }
  ],
  piege: R`En (a), écrire $A\setminus(B\cap C) = (A\setminus B)\cap(A\setminus C)$ : la négation transforme le « et » en « ou ».`,
  methode: R`Traduire chaque opération en « et / ou / non » sur la phrase « $x\in\dots$ », puis appliquer les règles de logique.`
},
{ id: "en-deux-sur-trois", ...C1, level: 2, time: "12 min",
  title: "Appartenir à au moins deux des trois parties",
  enonce: R`<p>Soient $A,B,C$ trois parties d'un ensemble $E$. Vérifier que</p>$$(A\cup B)\cap(B\cup C)\cap(C\cup A) = (A\cap B)\cup(B\cap C)\cup(C\cap A).$$`,
  decode: { donnees: [R`Trois parties d'un même ensemble.`], but: R`Montrer que les deux membres décrivent le même ensemble.`, cles: {} },
  steps: [
    { q: 1, t: "Le membre de droite", h: R`<p>$x\in A\cap B$ veut dire : $x$ est dans au moins deux des ensembles.</p>`, b: R`<p>Soit $x\in E$. On note $m$ le nombre d'ensembles parmi $A,B,C$ qui contiennent $x$ ($m\in\{0,1,2,3\}$).</p><p>$x$ est dans la réunion de droite s'il est dans l'une des trois intersections, c'est-à-dire dans deux des ensembles au moins :</p>$$x\in(A\cap B)\cup(B\cap C)\cup(C\cap A)\iff m\geqslant2.$$` },
    { q: 2, t: "Le membre de gauche", h: R`<p>Quand $x$ manque-t-il une des réunions ?</p>`, b: R`<p>$x$ est dans l'intersection de gauche s'il est dans <b>chacune</b> des réunions $A\cup B$, $B\cup C$, $C\cup A$.</p><ul><li>Si $m\geqslant2$ : $x$ est dans deux ensembles, et chaque paire $\{A,B\}$, $\{B,C\}$, $\{C,A\}$ contient au moins l'un des deux (sur trois ensembles, deux paires différentes se rencontrent toujours). Donc $x$ est dans les trois réunions.</li><li>Si $m\leqslant1$ : $x$ est au plus dans un ensemble, disons au plus dans $A$. Alors $x\notin B$ et $x\notin C$, donc $x\notin B\cup C$.</li></ul><p>Donc $x\in(A\cup B)\cap(B\cup C)\cap(C\cup A)\iff m\geqslant2$.</p><div class="sbox"><p style="margin:0">Les deux membres sont l'ensemble des éléments qui appartiennent à au moins deux des parties $A$, $B$, $C$ : ils sont égaux.</p></div>` }
  ],
  piege: R`Développer brutalement l'intersection de trois réunions : on obtient $8$ termes, qu'il faut ensuite simplifier.`,
  methode: R`Décrire chaque membre par une phrase simple sur $x$ (« au moins deux », « exactement un »…).`
},
{ id: "en-equivalences", ...C1, level: 2, time: "15 min",
  title: "Trois équivalences sur les parties",
  enonce: R`<p>Soient $A,B,C$ trois parties d'un ensemble $E$. Justifier :</p><ol style="list-style:lower-alpha"><li>$A\subset B\iff A\cup B = B$ ;</li><li>$A = B\iff A\cap B = A\cup B$ ;</li><li>$A\cup B = A\cap C\iff B\subset A\subset C$.</li></ol>`,
  decode: { donnees: [R`On a toujours $A\cap B\subset A\subset A\cup B$.`], but: R`Trois équivalences : chaque sens séparément.`, cles: {} },
  steps: [
    { q: 1, t: "(a)", h: R`<p>On a toujours $B\subset A\cup B$.</p>`, b: R`<p><b>⇒</b> Supposons $A\subset B$. On a toujours $B\subset A\cup B$. Réciproquement, si $x\in A\cup B$ : soit $x\in B$, soit $x\in A\subset B$ ; dans les deux cas $x\in B$. Donc $A\cup B = B$.</p><p><b>⇐</b> Supposons $A\cup B = B$. Comme $A\subset A\cup B$, on a $A\subset B$.</p>` },
    { q: 2, t: "(b)", h: R`<p>Sens ⇐ : $A\subset A\cup B = A\cap B\subset B$.</p>`, b: R`<p><b>⇒</b> Si $A = B$, alors $A\cap B = A\cap A = A$ et $A\cup B = A\cup A = A$ : les deux sont égaux.</p><p><b>⇐</b> Supposons $A\cap B = A\cup B$. Alors</p>$$A\subset A\cup B = A\cap B\subset B,$$<p>donc $A\subset B$. De même $B\subset A\cup B = A\cap B\subset A$. Donc $A = B$.</p>` },
    { q: 3, t: "(c)", h: R`<p>Sens ⇒ : encadre $A$ et $B$ entre $A\cap C$ et $A\cup B$.</p>`, b: R`<p><b>⇒</b> Supposons $A\cup B = A\cap C$.</p><ul><li>$B\subset A\cup B = A\cap C\subset A$ : donc $B\subset A$.</li><li>$A\subset A\cup B = A\cap C\subset C$ : donc $A\subset C$.</li></ul><p><b>⇐</b> Supposons $B\subset A\subset C$. Par (a), $B\subset A$ donne $A\cup B = A$. Et $A\subset C$ donne $A\cap C = A$ (tout élément de $A$ est dans $C$). Donc $A\cup B = A = A\cap C$.</p><div class="sbox">$$A\cup B = A\cap C\iff B\subset A\subset C.$$</div>` }
  ],
  piege: R`Oublier l'un des deux sens d'une équivalence.`,
  methode: R`Utiliser les encadrements toujours vrais $A\cap B\subset A\subset A\cup B$ pour enchaîner les inclusions.`
},
{ id: "en-complementaires", ...C1, level: 1, time: "8 min",
  title: "Différence de deux complémentaires",
  enonce: R`<p>Soient $A$ et $B$ deux parties de $E$. On note $\overline X$ le complémentaire d'une partie $X$ dans $E$. Montrer que $\overline A\setminus\overline B = B\setminus A$.</p>`,
  decode: { donnees: [R`$X\setminus Y = X\cap\overline Y$ et $\overline{\overline Y} = Y$.`], but: R`Une égalité d'ensembles.`, cles: {} },
  steps: [
    { q: 1, t: "Par le calcul", h: R`<p>Remplace la différence par une intersection avec un complémentaire.</p>`, b: R`<p><b>Rappel</b> : retirer $Y$, c'est garder ce qui est hors de $Y$ : $X\setminus Y = X\cap\overline Y$. On l'applique avec $X = \overline A$, $Y = \overline B$ :</p>$$\overline A\setminus\overline B = \overline A\cap\overline{\overline B}.$$<p>Le complémentaire du complémentaire est la partie de départ : $\overline{\overline B} = B$. Donc, par commutativité de $\cap$ :</p>$$\overline A\setminus\overline B = \overline A\cap B = B\cap\overline A = B\setminus A.$$<p>Vérification élément par élément : $x\in\overline A\setminus\overline B$ signifie $x\notin A$ et non$(x\notin B)$, c'est-à-dire $x\in B$ et $x\notin A$.</p>`, rappels: ["en-operations"] }
  ],
  piege: R`Écrire $\overline A\setminus\overline B = \overline{A\setminus B}$ : c'est faux en général.`,
  methode: R`Remplacer systématiquement $X\setminus Y$ par $X\cap\overline Y$.`
},
{ id: "en-delta", ...C1, level: 2, time: "20 min",
  title: "La différence symétrique",
  tt: R`La différence symétrique $A\,\Delta\,B$`,
  enonce: R`<p>Pour $A,B\subset E$, on pose $A\,\Delta\,B = (A\setminus B)\cup(B\setminus A)$.</p><ol style="list-style:lower-alpha"><li>Montrer que $A\,\Delta\,B = (A\cup B)\setminus(A\cap B)$.</li><li>Calculer $A\,\Delta\,A$, $A\,\Delta\,\overline A$, $A\,\Delta\,E$ et $A\,\Delta\,\emptyset$.</li><li>Montrer que $A\,\Delta\,(B\,\Delta\,C) = (A\,\Delta\,B)\,\Delta\,C$.</li><li>En déduire que $A\,\Delta\,B = A\,\Delta\,C\iff B = C$.</li></ol>`,
  decode: { donnees: [R`$x\in A\,\Delta\,B$ : $x$ est dans exactement un des deux ensembles.`], but: R`Les propriétés de calcul de $\Delta$.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Exactement un des deux", h: R`<p>Décris chaque membre par une phrase sur $x$.</p>`, b: R`<p>Soit $x\in E$.</p><ul><li>$x\in(A\setminus B)\cup(B\setminus A)$ : ($x\in A$ et $x\notin B$) ou ($x\in B$ et $x\notin A$). Autrement dit, $x$ est dans <b>exactement un</b> des deux ensembles.</li><li>$x\in(A\cup B)\setminus(A\cap B)$ : $x$ est dans au moins un des deux, mais pas dans les deux. C'est encore « exactement un ».</li></ul><p>Les deux ensembles ont les mêmes éléments :</p><div class="sbox">$$A\,\Delta\,B = (A\cup B)\setminus(A\cap B).$$</div>`, rappels: ["en-delta"] },
    { q: 2, t: "(b) Quatre calculs", h: R`<p>Utilise « exactement un des deux ».</p>`, b: R`<ul><li>$A\,\Delta\,A$ : un élément est dans $A$ et $A$, ou dans aucun ; jamais dans exactement un. $A\,\Delta\,A = \emptyset$.</li><li>$A\,\Delta\,\overline A$ : tout $x$ est dans exactement un des deux ($A$ ou son complémentaire). $A\,\Delta\,\overline A = E$.</li><li>$A\,\Delta\,E = (A\cup E)\setminus(A\cap E) = E\setminus A = \overline A$.</li><li>$A\,\Delta\,\emptyset = (A\cup\emptyset)\setminus(A\cap\emptyset) = A\setminus\emptyset = A$.</li></ul>` },
    { q: 3, t: "(c) Associativité : compter la parité", h: R`<p>$x\in A\,\Delta\,B$ ssi $x$ est dans un nombre impair des ensembles $A$, $B$.</p>`, b: R`<p>Pour $x\in E$, notons $[x\in X]$ le nombre $1$ si $x\in X$, $0$ sinon. « Exactement un des deux » signifie que $[x\in A]+[x\in B]$ vaut $1$, c'est-à-dire est <b>impair</b> (il vaut $0$, $1$ ou $2$). Donc</p>$$[x\in A\,\Delta\,B]\equiv[x\in A]+[x\in B]\pmod2.$$<p>On l'applique deux fois :</p>$$[x\in(A\,\Delta\,B)\,\Delta\,C]\equiv[x\in A\,\Delta\,B]+[x\in C]\equiv[x\in A]+[x\in B]+[x\in C]\pmod2.$$<p>De même $[x\in A\,\Delta\,(B\,\Delta\,C)]\equiv[x\in A]+[x\in B]+[x\in C]\pmod2$. Les deux ensembles sont formés des $x$ qui appartiennent à un nombre <b>impair</b> des parties $A,B,C$ : ils sont égaux.</p><div class="sbox">$$A\,\Delta\,(B\,\Delta\,C) = (A\,\Delta\,B)\,\Delta\,C.$$</div>` },
    { q: 4, t: "(d) Simplifier par A", h: R`<p>Applique $A\,\Delta$ aux deux membres.</p>`, b: R`<p><b>⇐</b> Si $B = C$, l'égalité est évidente.</p><p><b>⇒</b> Supposons $A\,\Delta\,B = A\,\Delta\,C$. On fait $A\,\Delta$ des deux côtés, puis on utilise l'associativité (c) et les calculs (b) :</p>$$A\,\Delta\,(A\,\Delta\,B) = (A\,\Delta\,A)\,\Delta\,B = \emptyset\,\Delta\,B = B,$$<p>et de même $A\,\Delta\,(A\,\Delta\,C) = C$. Comme les deux membres de départ sont égaux, $B = C$.</p><div class="sbox">$$A\,\Delta\,B = A\,\Delta\,C\iff B = C.$$</div>` }
  ],
  piege: R`Confondre $A\,\Delta\,B$ avec $A\cup B$ : les éléments communs aux deux en sont exclus.`,
  methode: R`$\Delta$ se calcule comme une addition modulo $2$ : un élément est dans $A\,\Delta\,B\,\Delta\,C$ s'il est dans un nombre impair d'ensembles.`
},
{ id: "en-delta-2", ...C1, level: 2, time: "12 min",
  title: "Deux propriétés de A∖B et de A Δ B",
  tt: R`Deux propriétés de $A\setminus B$ et de $A\,\Delta\,B$`,
  enonce: R`<p>Soient $A,B$ deux parties d'un ensemble $E$. Montrer :</p><ol style="list-style:lower-alpha"><li>$A\setminus B = A\iff B\setminus A = B$ ;</li><li>$A\,\Delta\,B = A\cap B\Longrightarrow A = B = \emptyset$.</li></ol>`,
  decode: { donnees: [R`$A\,\Delta\,B = (A\cup B)\setminus(A\cap B)$.`], but: R`Une équivalence et une implication.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Les deux disent : A et B sont disjoints", h: R`<p>Quand retirer $B$ ne change-t-il rien à $A$ ?</p>`, b: R`<p>On montre que $A\setminus B = A$ équivaut à $A\cap B = \emptyset$.</p><ul><li>Si $A\cap B = \emptyset$ : aucun élément de $A$ n'est dans $B$, donc retirer $B$ n'enlève rien, $A\setminus B = A$.</li><li>Si $A\setminus B = A$ : tout $x\in A$ est dans $A\setminus B$, donc $x\notin B$. Aucun élément de $A$ n'est dans $B$ : $A\cap B = \emptyset$.</li></ul><p>En échangeant les rôles de $A$ et $B$ : $B\setminus A = B\iff B\cap A = \emptyset$. Comme $A\cap B = B\cap A$ :</p><div class="sbox">$$A\setminus B = A\iff A\cap B = \emptyset\iff B\setminus A = B.$$</div>` },
    { q: 2, t: "(b) Deux ensembles disjoints et égaux", h: R`<p>$A\,\Delta\,B$ et $A\cap B$ n'ont jamais d'élément commun.</p>`, b: R`<p>Un élément de $A\,\Delta\,B$ est dans exactement un des deux ensembles ; un élément de $A\cap B$ est dans les deux. Aucun élément n'est dans les deux à la fois : $(A\,\Delta\,B)\cap(A\cap B) = \emptyset$.</p><p>Si $A\,\Delta\,B = A\cap B = X$, alors $X\cap X = X = \emptyset$. Donc $A\cap B = \emptyset$ et $A\,\Delta\,B = \emptyset$.</p><p>Or $A\cup B = (A\,\Delta\,B)\cup(A\cap B)$ (un élément de $A\cup B$ est dans un seul ou dans les deux). Donc $A\cup B = \emptyset$, et comme $A\subset A\cup B$ et $B\subset A\cup B$ :</p><div class="sbox">$$A = B = \emptyset.$$</div>` }
  ],
  piege: R`En (a), croire que $A\setminus B = A$ impose $B = \emptyset$ : il suffit que $B$ ne rencontre pas $A$.`,
  methode: R`Découper $A\cup B$ en deux morceaux disjoints : $A\,\Delta\,B$ (dans un seul) et $A\cap B$ (dans les deux).`
},
{ id: "en-equation-union", ...C1, level: 2, time: "15 min",
  title: "Résoudre A ∪ X = B",
  tt: R`Résoudre $A\cup X = B$`,
  enonce: R`<p>Soient $A$ et $B$ deux parties d'un ensemble $E$. Discuter et résoudre l'équation $A\cup X = B$, d'inconnue $X\in\mathcal P(E)$.</p>`,
  decode: { donnees: [R`$A\subset A\cup X$ et $X\subset A\cup X$.`], but: R`Trouver toutes les parties $X$ solutions.`, cles: {} },
  steps: [
    { q: 1, t: "Une condition nécessaire", h: R`<p>$A\subset A\cup X$.</p>`, b: R`<p>Si $X$ est solution, alors $A\subset A\cup X = B$. Donc <b>si $A\not\subset B$, il n'y a aucune solution</b>.</p><p>On suppose désormais $A\subset B$.</p>` },
    { q: 2, t: "Analyse : encadrer X", h: R`<p>Montre $B\setminus A\subset X\subset B$.</p>`, b: R`<p>Soit $X$ une solution.</p><ul><li>$X\subset A\cup X = B$.</li><li>Soit $x\in B\setminus A$. Alors $x\in B = A\cup X$ et $x\notin A$, donc $x\in X$. Ainsi $B\setminus A\subset X$.</li></ul><p>Toute solution vérifie $B\setminus A\subset X\subset B$.</p>` },
    { q: 3, t: "Synthèse", h: R`<p>Vérifie que tout $X$ ainsi encadré convient.</p>`, b: R`<p>Soit $X$ avec $B\setminus A\subset X\subset B$ (et $A\subset B$).</p><ul><li>$A\cup X\subset B$ : car $A\subset B$ et $X\subset B$.</li><li>$B\subset A\cup X$ : soit $x\in B$ ; si $x\in A$, il est dans $A\cup X$ ; sinon $x\in B\setminus A\subset X$.</li></ul><p>Donc $A\cup X = B$.</p><div class="sbox">$$\text{Si }A\not\subset B :\ \text{aucune solution.}\qquad\text{Si }A\subset B :\ \mathcal S = \{X\in\mathcal P(E) : B\setminus A\subset X\subset B\}.$$</div><p>Autrement dit, $X$ contient obligatoirement $B\setminus A$, et on peut y ajouter n'importe quelle partie de $A$ : $X = (B\setminus A)\cup D$ avec $D\subset A$.</p>` }
  ],
  piege: R`Répondre seulement $X = B\setminus A$ ou $X = B$ : il y a en général beaucoup d'autres solutions.`,
  methode: R`Équation ensembliste : analyse (encadrer $X$), puis synthèse (vérifier que l'encadrement suffit).`
},
{ id: "en-equation-inter", ...C1, level: 2, time: "15 min",
  title: "Résoudre A ∩ X = B",
  tt: R`Résoudre $A\cap X = B$`,
  enonce: R`<p>Soient $A$ et $B$ deux parties d'un ensemble $E$. Discuter et résoudre l'équation $A\cap X = B$, d'inconnue $X\in\mathcal P(E)$.</p>`,
  decode: { donnees: [R`$A\cap X\subset A$ et $A\cap X\subset X$.`], but: R`Trouver toutes les parties $X$ solutions.`, cles: {} },
  steps: [
    { q: 1, t: "Une condition nécessaire", h: R`<p>$A\cap X\subset A$.</p>`, b: R`<p>Si $X$ est solution, $B = A\cap X\subset A$. Donc <b>si $B\not\subset A$, il n'y a aucune solution</b>. On suppose désormais $B\subset A$.</p>` },
    { q: 2, t: "Analyse : encadrer X", h: R`<p>Montre $B\subset X\subset B\cup\overline A$.</p>`, b: R`<p>Soit $X$ une solution.</p><ul><li>$B = A\cap X\subset X$.</li><li>Soit $x\in X$. Si $x\in A$, alors $x\in A\cap X = B$. Sinon $x\in\overline A$. Donc $X\subset B\cup\overline A$.</li></ul><p>Toute solution vérifie $B\subset X\subset B\cup\overline A$.</p>` },
    { q: 3, t: "Synthèse", h: R`<p>Calcule $A\cap X$ en l'encadrant.</p>`, b: R`<p>Soit $X$ avec $B\subset X\subset B\cup\overline A$ (et $B\subset A$).</p><ul><li>$A\cap X\supset A\cap B = B$, car $B\subset X$ et $B\subset A$.</li><li>$A\cap X\subset A\cap(B\cup\overline A) = (A\cap B)\cup(A\cap\overline A) = B\cup\emptyset = B$ (distributivité de $\cap$ sur $\cup$).</li></ul><p>Donc $A\cap X = B$.</p><div class="sbox">$$\text{Si }B\not\subset A :\ \text{aucune solution.}\qquad\text{Si }B\subset A :\ \mathcal S = \{X\in\mathcal P(E) : B\subset X\subset B\cup\overline A\}.$$</div><p>Autrement dit, $X = B\cup D$ où $D$ est une partie quelconque de $\overline A$.</p>` }
  ],
  piege: R`Oublier les éléments hors de $A$ : ils peuvent être dans $X$ sans changer $A\cap X$.`,
  methode: R`Même méthode que pour $A\cup X = B$ : condition nécessaire, analyse, synthèse.`
}
]);
})();

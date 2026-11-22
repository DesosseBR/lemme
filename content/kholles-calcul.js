/* Khôlles MPSI · Calcul algébrique : 44 exercices (entiers, récurrence, sommes, produits, factorielles, coefficients binomiaux).
   Énoncés repris du recueil de M. Dupuy de Lôme (diffusion libre), complétés par des questions ajoutées ; corrigés rédigés pour Lemme.
   Sujet caché « kholles », année MPSI, chapitre 1 (Calculs : sommes, produits, inégalités). */
LEMME.rappels({
  "ca-rec": { t: "Récurrences simple, double, forte", b: R`<ul><li><b>Simple</b> : $P(n_0)$ et $\big(P(n)\Rightarrow P(n+1)\big)$ pour $n\geqslant n_0$.</li><li><b>Double</b> : $P(n_0)$, $P(n_0+1)$ et $\big(P(n)\wedge P(n+1)\Rightarrow P(n+2)\big)$.</li><li><b>Forte</b> : $P(n_0)$ et $\big(P(n_0)\wedge\dots\wedge P(n)\Rightarrow P(n+1)\big)$.</li></ul><p>Conclusion dans les trois cas : $P(n)$ pour tout $n\geqslant n_0$.</p>` },
  "ca-bonordre": { t: "Parties de ℕ", b: R`<div class="sbox">$$A\subset\mathbb N,\ A\neq\emptyset\ \Longrightarrow\ A\ \text{a un plus petit élément}.$$</div><p>Une partie de $\mathbb N$ non vide et <b>majorée</b> a un plus grand élément.</p>` },
  "ca-usuelles": { t: "Sommes usuelles", b: R`<div class="sbox">$$\sum_{k=1}^nk = \frac{n(n+1)}2,\qquad\sum_{k=1}^nk^2 = \frac{n(n+1)(2n+1)}6,\qquad\sum_{k=1}^nk^3 = \frac{n^2(n+1)^2}4.$$</div>` },
  "ca-telesc": { t: "Télescopage", b: R`<div class="sbox">$$\sum_{k=p}^n(a_{k+1}-a_k) = a_{n+1}-a_p,\qquad\prod_{k=p}^n\frac{a_{k+1}}{a_k} = \frac{a_{n+1}}{a_p}.$$</div>` },
  "ca-geo": { t: "Somme géométrique", b: R`<div class="sbox">$$q\neq1 :\ \sum_{k=0}^nq^k = \frac{1-q^{n+1}}{1-q},\qquad q = 1 :\ \sum_{k=0}^nq^k = n+1.$$</div><p>Factorisation : $a^n-b^n = (a-b)\sum_{k=0}^{n-1}a^kb^{n-1-k}$.</p>` },
  "ca-indice": { t: "Changement d'indice", b: R`$$\sum_{k=p}^na_{k+1} = \sum_{j=p+1}^{n+1}a_j\ \ (j = k+1),\qquad\sum_{k=0}^na_{n-k} = \sum_{j=0}^na_j\ \ (j = n-k).$$<p>On change l'indice <b>et</b> les bornes en même temps.</p>` },
  "ca-double": { t: "Sommes doubles", b: R`$$\sum_{1\leqslant i,j\leqslant n}a_{i,j} = \sum_{i=1}^n\sum_{j=1}^na_{i,j} = \sum_{j=1}^n\sum_{i=1}^na_{i,j},\qquad\sum_{1\leqslant i< j\leqslant n}a_{i,j} = \sum_{j=2}^n\sum_{i=1}^{j-1}a_{i,j}.$$<div class="sbox">$$\Big(\sum_{i=1}^nx_i\Big)^2 = \sum_{i=1}^nx_i^2+2\sum_{1\leqslant i< j\leqslant n}x_ix_j.$$</div>` },
  "ca-fact": { t: "Factorielles", b: R`$$n! = 1\times2\times\dots\times n,\quad0! = 1,\quad(n+1)! = (n+1)\,n!,$$<div class="sbox">$$2\times4\times\dots\times(2n) = 2^nn!,\qquad1\times3\times\dots\times(2n+1) = \frac{(2n+1)!}{2^nn!}.$$</div>` },
  "ca-binome": { t: "Formule du binôme", b: R`<div class="sbox">$$(a+b)^n = \sum_{k=0}^n\binom nka^kb^{n-k}\qquad(a,b\ \text{complexes qui commutent}).$$</div><p>Avec $a = b = 1$ : $\sum_k\binom nk = 2^n$ ; avec $a = -1$, $b = 1$ : $\sum_k(-1)^k\binom nk = 0$ si $n\geqslant1$.</p>` },
  "ca-pascal": { t: "Coefficients binomiaux", b: R`$$\binom nk = \frac{n!}{k!\,(n-k)!}\ (0\leqslant k\leqslant n),\qquad\binom nk = 0\ \text{sinon}.$$<div class="sbox">$$\binom nk = \binom n{n-k},\qquad\binom nk+\binom n{k+1} = \binom{n+1}{k+1},\qquad k\binom nk = n\binom{n-1}{k-1}.$$</div>` },
  "ca-gauss": { t: "Lemme de Gauss", b: R`<div class="sbox">$$a\mid bc\ \text{et}\ a\wedge b = 1\ \Longrightarrow\ a\mid c.$$</div><p>Cas particulier (lemme d'Euclide) : un nombre premier qui divise un produit divise l'un des facteurs.</p>` },
  "ca-moitie": { t: "Factorisation par l'angle moitié", b: R`<div class="sbox">$$e^{ia}-1 = e^{ia/2}\big(e^{ia/2}-e^{-ia/2}\big) = 2i\sin\frac a2\,e^{ia/2}.$$</div>` },
  "ca-j": { t: "Racines cubiques de l'unité", b: R`<p>$j = e^{2i\pi/3}$ : $j^3 = 1$, $1+j+j^2 = 0$, $\bar j = j^2$, $1+j = -j^2 = e^{i\pi/3}$.</p>` }
});

(() => {
const P = { subj: "kholles", year: "mpsi", chap: 1 };
const AJ = R`<em>(question ajoutée)</em>`;
const B = (titre, html) => `<div class="plus"><p><b>Pour aller plus loin · ${titre}</b></p>${html}</div>`;
LEMME.exercises([
/* ---------- Nombres entiers ---------- */
{ id: "ca-01", ...P, level: 1, time: "10 min",
  title: "Pairs et impairs",
  enonce: R`<p>Soient $\mathcal P = \{2k\mid k\in\mathbb Z\}$ et $\mathcal I = \{2k+1\mid k\in\mathbb Z\}$ les ensembles des entiers pairs et impairs.</p><ol><li>Montrer que $\mathcal P\cap\mathcal I = \emptyset$.</li><li>${AJ} Montrer que $\mathcal P\cup\mathcal I = \mathbb Z$.</li></ol>`,
  decode: { donnees: [R`Un pair s'écrit $2k$, un impair $2\ell+1$, avec $k,\ell\in\mathbb Z$.`], but: R`Montrer que tout entier est pair ou impair, mais pas les deux.`, cles: {
    deux: R`Un entier pair et impair s'écrit $2k$ <b>et</b> $2\ell+1$ : deux entiers différents, $k$ et $\ell$.` } },
  steps: [
    { q: 1, t: "Intersection vide", h: R`<p>Par l'absurde : prends $x$ dans l'intersection. <span data-k="deux">Il faut deux noms d'entiers différents</span>.</p>`, b: R`<p>Par l'absurde, supposons qu'il existe $x\in\mathcal P\cap\mathcal I$.</p><ul><li>$x\in\mathcal P$ : il existe $k\in\mathbb Z$ tel que $x = 2k$.</li><li>$x\in\mathcal I$ : il existe $\ell\in\mathbb Z$ tel que $x = 2\ell+1$.</li></ul><p>Alors $2k = 2\ell+1$, donc $2(k-\ell) = 1$, soit $k-\ell = \frac12$. Or $k-\ell$ est un entier : contradiction.</p><div class="sbox">$$\mathcal P\cap\mathcal I = \emptyset.$$</div><p><b>Erreur classique</b> : écrire $x = 2k$ et $x = 2k+1$ avec <b>le même</b> $k$. Rien ne dit que c'est le même entier.</p>` },
    { q: 2, t: "Réunion égale à ℤ", h: R`<p>Division euclidienne de $n$ par $2$.</p>`, b: R`<p>L'inclusion $\mathcal P\cup\mathcal I\subset\mathbb Z$ est claire. Réciproquement, soit $n\in\mathbb Z$. La division euclidienne de $n$ par $2$ donne $n = 2q+r$ avec $q\in\mathbb Z$ et $r\in\{0,1\}$.</p><ul><li>si $r = 0$, $n = 2q\in\mathcal P$ ;</li><li>si $r = 1$, $n = 2q+1\in\mathcal I$.</li></ul><div class="sbox">$$\mathcal P\cup\mathcal I = \mathbb Z.$$</div><p>Avec la question 1 : $\mathcal P$ et $\mathcal I$ forment une partition de $\mathbb Z$.</p>` }
  ],
  piege: R`Utiliser la même lettre $k$ pour les deux écritures de $x$.`,
  methode: R`Pour montrer qu'un ensemble est vide : par l'absurde, on en prend un élément et on aboutit à une contradiction.`
},
{ id: "ca-02", ...P, level: 2, time: "15 min",
  title: "Pas de suite strictement décroissante dans ℕ",
  enonce: R`<ol><li>Montrer qu'il n'existe pas de suite strictement décroissante d'entiers naturels.</li><li>${AJ} Application (descente infinie). On suppose $\sqrt2 = \frac pq$ avec $p,q\in\mathbb N^*$. Montrer que $\sqrt2 = \frac{2q-p}{p-q}$ avec $0< p-q< q$, et conclure que $\sqrt2$ est irrationnel.</li></ol>`,
  decode: { donnees: [R`Toute partie non vide de $\mathbb N$ a un plus petit élément.`], but: R`Interdire les descentes infinies dans $\mathbb N$, puis s'en servir.`, cles: {
    min: R`On regarde l'ensemble des valeurs prises par la suite : il a un plus petit élément.` } },
  steps: [
    { q: 1, t: "Par l'absurde", h: R`<p><span data-k="min">L'ensemble des termes de la suite a un plus petit élément</span>. Et le terme suivant ?</p>`, b: R`<p>Supposons qu'une telle suite $(u_n)$ existe. L'ensemble $A = \{u_n\mid n\in\mathbb N\}$ est une partie non vide de $\mathbb N$ : il a un plus petit élément $m$.</p><p>Comme $m\in A$, il existe $n$ tel que $m = u_n$. Mais alors $u_{n+1}\in A$ et $u_{n+1}< u_n = m$ : cela contredit la minimalité de $m$.</p><div class="sbox">$$\text{Aucune suite d'entiers naturels n'est strictement décroissante.}$$</div>`, rappels: ["ca-bonordre"] },
    { q: 2, t: "Application : √2 est irrationnel", h: R`<p>De $1<\sqrt2<2$, tire $q< p< 2q$. Puis remplace $p$ par $\sqrt2\,q$ dans $\frac{2q-p}{p-q}$.</p>`, b: R`<p><b>Encadrement</b> : $1<\sqrt2<2$ et $\sqrt2 = \frac pq$ donnent $q< p< 2q$, donc $0< p-q< q$ et $2q-p > 0$.</p><p><b>Calcul</b> : avec $p = \sqrt2\,q$,</p>$$\frac{2q-p}{p-q} = \frac{(2-\sqrt2)\,q}{(\sqrt2-1)\,q} = \frac{\sqrt2(\sqrt2-1)}{\sqrt2-1} = \sqrt2.$$<p>On a donc écrit $\sqrt2 = \frac{p_1}{q_1}$ avec $p_1 = 2q-p$, $q_1 = p-q$ entiers naturels non nuls et $q_1< q$. On recommence avec $(p_1,q_1)$, et ainsi de suite : on obtient une suite $q> q_1> q_2> \dots$ d'entiers naturels, strictement décroissante. C'est impossible par la question 1.</p><div class="sbox">$$\sqrt2\notin\mathbb Q.$$</div>` }
  ],
  piege: R`Parler du « plus petit terme » sans justifier qu'il existe : c'est la propriété de $\mathbb N$ qui le donne.`,
  methode: R`Descente infinie : fabriquer, à partir d'une solution, une solution « plus petite » dans $\mathbb N$ ; c'est impossible indéfiniment.`
},
/* ---------- Récurrence ---------- */
{ id: "ca-03", ...P, level: 1, time: "10 min",
  title: "Une suite définie par un produit",
  enonce: R`<p>Soit $(u_n)$ la suite réelle telle que $u_0 = 1$ et $u_{n+1} = \Big(1+\dfrac1{n+1}\Big)u_n$ pour tout $n\in\mathbb N$.</p><ol><li>Calculer les premiers termes et conjecturer $u_n$. Le démontrer par récurrence.</li><li>${AJ} Retrouver le résultat sans récurrence, par un produit télescopique.</li></ol>`,
  decode: { donnees: [R`$1+\frac1{n+1} = \frac{n+2}{n+1}$.`], but: R`Trouver une expression explicite de $u_n$.`, cles: {} },
  steps: [
    { q: 1, t: "Conjecture et récurrence", h: R`<p>Calcule $u_1$, $u_2$, $u_3$.</p>`, b: R`<p>$u_1 = 2u_0 = 2$, $u_2 = \frac32\times2 = 3$, $u_3 = \frac43\times3 = 4$. Conjecture : $u_n = n+1$.</p><p><b>Initialisation</b> : $u_0 = 1 = 0+1$.</p><p><b>Hérédité</b> : si $u_n = n+1$, alors $u_{n+1} = \frac{n+2}{n+1}(n+1) = n+2$.</p><div class="sbox">$$\forall n\in\mathbb N,\quad u_n = n+1.$$</div>`, rappels: ["ca-rec"] },
    { q: 2, t: "Produit télescopique", h: R`<p>$u_n = u_0\prod_{k=0}^{n-1}\frac{u_{k+1}}{u_k}$ (les $u_k$ sont non nuls).</p>`, b: R`<p>Tous les $u_k$ sont strictement positifs (récurrence immédiate), donc</p>$$u_n = u_0\prod_{k=0}^{n-1}\frac{u_{k+1}}{u_k} = \prod_{k=0}^{n-1}\frac{k+2}{k+1} = \frac21\times\frac32\times\dots\times\frac{n+1}n = n+1.$$<p>Chaque numérateur se simplifie avec le dénominateur suivant.</p>`, rappels: ["ca-telesc"] }
  ],
  piege: R`Oublier de justifier $u_k\neq0$ avant de diviser.`,
  methode: R`Suite définie par $u_{n+1} = a_nu_n$ : $u_n = u_0\prod_{k=0}^{n-1}a_k$, souvent télescopique.`
},
{ id: "ca-04", ...P, level: 1, time: "15 min",
  title: "Une récurrence double",
  enonce: R`<p>Soit $(u_n)$ définie par $u_0 = 2$, $u_1 = 3$ et $u_{n+2} = 3u_{n+1}-2u_n$ pour tout $n\in\mathbb N$.</p><ol><li>Montrer que $u_n = 2^n+1$ pour tout $n\in\mathbb N$.</li><li>${AJ} Retrouver cette formule sans la connaître à l'avance : chercher les suites géométriques $(r^n)$ qui vérifient la relation, puis $u_n$ sous la forme $\alpha+\beta2^n$.</li></ol>`,
  decode: { donnees: [R`La relation fait intervenir deux termes précédents.`], but: R`Établir puis retrouver l'expression de $u_n$.`, cles: {
    double: R`Comme $u_{n+2}$ dépend de $u_{n+1}$ et $u_n$, l'hypothèse doit porter sur deux rangs consécutifs.` } },
  steps: [
    { q: 1, t: "Récurrence double", h: R`<p><span data-k="double">Suppose la formule vraie aux rangs $n$ et $n+1$</span>.</p>`, b: R`<p>Soit $P(n)$ : « $u_n = 2^n+1$ et $u_{n+1} = 2^{n+1}+1$ ».</p><p><b>Initialisation</b> : $u_0 = 2 = 2^0+1$ et $u_1 = 3 = 2^1+1$.</p><p><b>Hérédité</b> : si $P(n)$ est vraie,</p>$$u_{n+2} = 3(2^{n+1}+1)-2(2^n+1) = 3\cdot2^{n+1}-2^{n+1}+3-2 = 2\cdot2^{n+1}+1 = 2^{n+2}+1,$$<p>donc $P(n+1)$ est vraie.</p><div class="sbox">$$\forall n\in\mathbb N,\quad u_n = 2^n+1.$$</div>`, rappels: ["ca-rec"] },
    { q: 2, t: "Retrouver la formule", h: R`<p>$(r^n)$ convient si et seulement si $r^2 = 3r-2$.</p>`, b: R`<p>La suite $(r^n)$, $r\neq0$, vérifie la relation si et seulement si $r^{n+2} = 3r^{n+1}-2r^n$, c'est-à-dire $r^2-3r+2 = 0$, soit $(r-1)(r-2) = 0$ : $r = 1$ ou $r = 2$.</p><p>Toute suite $\alpha\cdot1^n+\beta\cdot2^n$ vérifie alors la relation (elle est linéaire). On ajuste les deux premiers termes :</p>$$\begin{cases}\alpha+\beta = u_0 = 2\\\alpha+2\beta = u_1 = 3\end{cases}\quad\Longrightarrow\quad\beta = 1,\ \alpha = 1.$$<p>Les deux suites ont mêmes premiers termes et même relation, donc elles sont égales (récurrence double) : $u_n = 1+2^n$.</p>` }
  ],
  piege: R`Faire une récurrence simple : l'hypothèse au seul rang $n$ ne permet pas de calculer $u_{n+2}$.`,
  methode: R`Relation $u_{n+2} = au_{n+1}+bu_n$ : équation caractéristique $r^2 = ar+b$ ; si deux racines distinctes $r_1,r_2$, $u_n = \alpha r_1^n+\beta r_2^n$.`
},
{ id: "ca-05", ...P, level: 2, time: "20 min",
  title: "Si x + 1/x est entier…",
  enonce: R`<ol><li>Soit $x\in\mathbb R^*$ tel que $x+\frac1x\in\mathbb Z$. Montrer que pour tout $n\in\mathbb N$, $x^n+\frac1{x^n}\in\mathbb Z$.</li><li>Déterminer un réel $x$ non entier tel que $x+\frac1x\in\mathbb Z$.</li><li>${AJ} Pour ce $x$, calculer $x^5+\frac1{x^5}$.</li></ol>`,
  decode: { donnees: [R`$s_n = x^n+x^{-n}$ ; $s_1\in\mathbb Z$.`], but: R`Montrer que tous les $s_n$ sont entiers.`, cles: {
    rel: R`En développant : $s_{n+1}s_1 = s_{n+2}+s_n$.` } },
  steps: [
    { q: 1, t: "Une relation entre les sₙ", h: R`<p>Développe $\big(x^{n+1}+x^{-(n+1)}\big)\big(x+x^{-1}\big)$.</p>`, b: R`<p>On note $s_n = x^n+\frac1{x^n}$. En développant :</p>$$s_{n+1}\,s_1 = x^{n+2}+x^n+x^{-n}+x^{-(n+2)} = s_{n+2}+s_n,\quad\text{donc}\quad\boxed{s_{n+2} = s_1s_{n+1}-s_n.}$$` },
    { q: 1, t: "Récurrence double", h: R`<p>Initialise aux rangs $0$ et $1$.</p>`, b: R`<p>$P(n)$ : « $s_n\in\mathbb Z$ et $s_{n+1}\in\mathbb Z$ ».</p><p><b>Initialisation</b> : $s_0 = 2\in\mathbb Z$ et $s_1\in\mathbb Z$ par hypothèse.</p><p><b>Hérédité</b> : si $s_n$ et $s_{n+1}$ sont entiers, $s_{n+2} = s_1s_{n+1}-s_n$ est un entier (produit et différence d'entiers).</p><div class="sbox">$$\forall n\in\mathbb N,\quad x^n+\frac1{x^n}\in\mathbb Z.$$</div>`, rappels: ["ca-rec"] },
    { q: 2, t: "Un x non entier", h: R`<p>$x+\frac1x = p$ équivaut à $x^2-px+1 = 0$.</p>`, b: R`<p>$x+\frac1x = p$ équivaut (pour $x\neq0$) à $x^2-px+1 = 0$. Pour $p = 3$, le discriminant vaut $\Delta = 9-4 = 5$ :</p><div class="sbox">$$x = \frac{3+\sqrt5}2\quad\text{vérifie}\quad x+\frac1x = 3.$$</div><p>Ce n'est pas un entier : sinon $\sqrt5 = 2x-3$ serait entier, alors que $2<\sqrt5<3$.</p>` },
    { q: 3, t: "Calcul de s₅", h: R`<p>Utilise $s_{n+2} = 3s_{n+1}-s_n$.</p>`, b: R`<p>Avec $s_0 = 2$, $s_1 = 3$ et $s_{n+2} = 3s_{n+1}-s_n$ :</p>$$s_2 = 9-2 = 7,\quad s_3 = 21-3 = 18,\quad s_4 = 54-7 = 47,\quad s_5 = 141-18 = 123.$$<div class="sbox">$$x^5+\frac1{x^5} = 123.$$</div><p>Vérification : $s_2 = s_1^2-2 = 7$ ✓.</p>` }
  ],
  piege: R`Initialiser seulement au rang $0$ : la récurrence est double.`,
  methode: R`Pour $x^n+x^{-n}$, $x^n+y^n$… : chercher une relation de récurrence en multipliant par $x+x^{-1}$ (ou $x+y$).`
},
{ id: "ca-06", ...P, level: 2, time: "20 min",
  title: "Minorer et majorer la somme des 1/k²",
  enonce: R`<ol><li>Montrer que pour tout $n\geqslant2$ : $\displaystyle1+\frac1{2^2}+\dots+\frac1{n^2} > \frac{3n}{2n+1}$.</li><li>${AJ} Montrer que pour tout $n\geqslant1$ : $\displaystyle\sum_{k=1}^n\frac1{k^2}\leqslant2-\frac1n$. En déduire un encadrement de $\sum_{k=1}^n\frac1{k^2}$ indépendant de $n$.</li></ol>`,
  decode: { donnees: [R`$S_n = \sum_{k=1}^n\frac1{k^2}$, $S_{n+1} = S_n+\frac1{(n+1)^2}$.`], but: R`Encadrer $S_n$ par deux expressions simples.`, cles: {
    reste: R`L'hérédité revient à montrer une inégalité entre fractions de $n$ : on fait la différence au même dénominateur.` } },
  steps: [
    { q: 1, t: "Initialisation et plan", h: R`<p>Vérifie $n = 2$. Pour l'hérédité, <span data-k="reste">il suffit de comparer deux fractions</span>.</p>`, b: R`<p><b>Initialisation</b> ($n = 2$) : $1+\frac14 = \frac54 = 1{,}25 > \frac65 = 1{,}2$ ✓.</p><p><b>Hérédité</b> : supposons $S_n > \frac{3n}{2n+1}$. Alors $S_{n+1} > \frac{3n}{2n+1}+\frac1{(n+1)^2}$, et <span data-k="reste">il suffit de prouver</span></p>$$\frac{3n}{2n+1}+\frac1{(n+1)^2}\geqslant\frac{3(n+1)}{2n+3}.$$`, rappels: ["ca-rec"] },
    { q: 1, t: "L'inégalité entre fractions", h: R`<p>Calcule d'abord $\frac{3n}{2n+1}-\frac{3(n+1)}{2n+3}$.</p>`, b: R`<p>D'abord</p>$$\frac{3n}{2n+1}-\frac{3(n+1)}{2n+3} = \frac{3n(2n+3)-3(n+1)(2n+1)}{(2n+1)(2n+3)} = \frac{3(2n^2+3n-2n^2-3n-1)}{(2n+1)(2n+3)} = \frac{-3}{(2n+1)(2n+3)}.$$<p>Donc</p>$$\frac{3n}{2n+1}+\frac1{(n+1)^2}-\frac{3(n+1)}{2n+3} = \frac{(2n+1)(2n+3)-3(n+1)^2}{(n+1)^2(2n+1)(2n+3)} = \frac{n^2+2n}{(n+1)^2(2n+1)(2n+3)} > 0.$$<p>On conclut $S_{n+1} > \frac{3(n+1)}{2n+3}$.</p><div class="sbox">$$\forall n\geqslant2,\quad\sum_{k=1}^n\frac1{k^2} > \frac{3n}{2n+1}.$$</div>` },
    { q: 2, t: "La majoration", h: R`<p>Récurrence : il faut $\frac1{(n+1)^2}\leqslant\frac1n-\frac1{n+1}$.</p>`, b: R`<p><b>Initialisation</b> : $S_1 = 1\leqslant2-1$ ✓.</p><p><b>Hérédité</b> : si $S_n\leqslant2-\frac1n$, alors $S_{n+1}\leqslant2-\frac1n+\frac1{(n+1)^2}$, et il suffit que $\frac1{(n+1)^2}\leqslant\frac1n-\frac1{n+1} = \frac1{n(n+1)}$, ce qui est vrai car $n(n+1)\leqslant(n+1)^2$.</p><div class="sbox">$$\forall n\geqslant2,\quad\frac{3n}{2n+1}< \sum_{k=1}^n\frac1{k^2}\leqslant2-\frac1n< 2.$$</div><p>La suite $(S_n)$ est croissante et majorée par $2$ : elle converge. Sa limite est $\frac{\pi^2}6\approx1{,}645$, entre $\frac32$ et $2$ (résultat d'Euler, admis ici).</p>` }
  ],
  piege: R`Une hérédité « à l'envers » : partir de la conclusion et la transformer. On part de l'hypothèse et on montre qu'une inégalité <b>suffit</b>.`,
  methode: R`Inégalité sur une somme par récurrence : l'hérédité se ramène à comparer les deux bornes en $n$ et $n+1$ avec le terme ajouté.`
},
{ id: "ca-07", ...P, level: 3, time: "20 min",
  title: "Produit de factorielles impaires",
  enonce: R`<p>Montrer que pour tout $n\in\mathbb N^*$ :$$1!\,3!\cdots(2n+1)!\ \geqslant\ \big((n+1)!\big)^{n+1}.$$</p>`,
  decode: { donnees: [R`Le produit de gauche a $n+1$ facteurs : $(2k+1)!$ pour $k = 0,\dots,n$.`], but: R`Démontrer l'inégalité par récurrence.`, cles: {
    quot: R`On compare le terme ajouté $(2n+3)!$ et le quotient $\frac{((n+2)!)^{n+2}}{((n+1)!)^{n+1}}$.` } },
  steps: [
    { q: 1, t: "Initialisation et hérédité", h: R`<p><span data-k="quot">Écris $((n+2)!)^{n+2} = (n+2)^{n+2}\,((n+1)!)^{n+2}$</span>.</p>`, b: R`<p>On note $\Pi_n = 1!\,3!\cdots(2n+1)!$.</p><p><b>Initialisation</b> ($n = 1$) : $\Pi_1 = 1!\times3! = 6\geqslant(2!)^2 = 4$ ✓.</p><p><b>Hérédité</b> : supposons $\Pi_n\geqslant((n+1)!)^{n+1}$. Alors $\Pi_{n+1} = \Pi_n\,(2n+3)!\geqslant((n+1)!)^{n+1}(2n+3)!$. Il suffit de montrer $((n+1)!)^{n+1}(2n+3)!\geqslant((n+2)!)^{n+2}$.</p><p>Comme $((n+2)!)^{n+2} = (n+2)^{n+2}((n+1)!)^{n+2}$, cela revient à</p>$$\frac{(2n+3)!}{(n+1)!}\geqslant(n+2)^{n+2}.$$` },
    { q: 1, t: "Conclure", h: R`<p>$\frac{(2n+3)!}{(n+1)!}$ est un produit de $n+2$ entiers consécutifs.</p>`, b: R`$$\frac{(2n+3)!}{(n+1)!} = (n+2)(n+3)\cdots(2n+3).$$<p>C'est un produit de $(2n+3)-(n+2)+1 = n+2$ facteurs, tous $\geqslant n+2$ : il est $\geqslant(n+2)^{n+2}$.</p><div class="sbox">$$\forall n\in\mathbb N^*,\quad1!\,3!\cdots(2n+1)!\geqslant\big((n+1)!\big)^{n+1}.$$</div>`, rappels: ["ca-fact", "ca-rec"] }
  ],
  piege: R`Mal compter les facteurs : de $(n+2)$ à $(2n+3)$, il y en a $n+2$.`,
  methode: R`Hérédité multiplicative : comparer le facteur ajouté au quotient des deux bornes.`
},
{ id: "ca-08", ...P, level: 2, time: "10 min",
  title: "Une récurrence fausse",
  enonce: R`<p>Le raisonnement suivant est erroné. Montrons par récurrence sur $n\in\mathbb N^*$ :</p><p>$\mathcal P(n)$ : « $n$ points deux à deux distincts quelconques du plan sont toujours alignés ».</p><p>Pour $n = 1$ et $n = 2$, c'est vrai. Supposons $\mathcal P(n)$ pour un $n\geqslant2$ et prenons $n+1$ points distincts $A_1,\dots,A_{n+1}$. Par hypothèse, $A_1,\dots,A_n$ sont alignés sur une droite $\mathcal D$, et $A_2,\dots,A_{n+1}$ sur une droite $\mathcal D'$. Or $\mathcal D$ et $\mathcal D'$ contiennent les deux points distincts $A_2$ et $A_n$, donc $\mathcal D = \mathcal D'$ : les $n+1$ points sont alignés.</p><ol><li>Où est l'erreur ?</li><li>${AJ} Pour quels $n$ l'implication $\mathcal P(n)\Rightarrow\mathcal P(n+1)$ est-elle réellement démontrée ? Pourquoi cela ne suffit-il pas ?</li></ol>`,
  decode: { donnees: [], but: R`Trouver l'étape fausse.`, cles: {
    a2an: R`$A_2$ et $A_n$ doivent être distincts : il faut $n\geqslant3$.` } },
  steps: [
    { q: 1, t: "L'étape qui casse", h: R`<p>Teste le passage de $n = 2$ à $n = 3$ : <span data-k="a2an">que valent $A_2$ et $A_n$ ?</span></p>`, b: R`<p>Pour $n = 2$, les deux points « $A_2$ » et « $A_n$ » sont <b>le même point</b> $A_2$. Avec trois points $A_1,A_2,A_3$ : $\mathcal D = (A_1A_2)$ et $\mathcal D' = (A_2A_3)$ n'ont en commun que $A_2$, et rien n'oblige ces droites à être égales.</p><p>L'argument « $\mathcal D$ et $\mathcal D'$ ont deux points distincts en commun » suppose $A_2\neq A_n$, donc $n\geqslant3$.</p>` },
    { q: 2, t: "Pourquoi l'hérédité ne suffit pas", h: R`<p>Une récurrence a besoin que l'initialisation et l'hérédité se « raccordent ».</p>`, b: R`<p>L'implication $\mathcal P(n)\Rightarrow\mathcal P(n+1)$ est bien prouvée pour $n\geqslant3$ (et elle est vraie : elle est même vide, car $\mathcal P(3)$ est fausse). Mais elle n'est pas prouvée pour $n = 2$.</p><p>L'initialisation porte sur $n\leqslant2$ et l'hérédité commence à $n = 3$ : la chaîne $\mathcal P(2)\Rightarrow\mathcal P(3)$ est cassée. Il faudrait initialiser à $n = 3$, ce qui est impossible (trois points non alignés existent).</p>` }
  ],
  piege: R`Vérifier l'hérédité « en général » sans regarder la plus petite valeur de $n$ où on l'applique.`,
  methode: R`Dans une hérédité, repérer chaque hypothèse implicite sur $n$ (points distincts, indices dans les bornes…).`
},
{ id: "ca-09", ...P, level: 2, time: "20 min",
  title: "Tout entier s'écrit 2ᵖ(2q + 1)",
  enonce: R`<p>On veut établir : $\forall n\in\mathbb N^*,\ \exists(p,q)\in\mathbb N^2,\ n = 2^p(2q+1)$.</p><ol><li>1<sup>re</sup> méthode : pour $n\in\mathbb N^*$ fixé, on pose $A = \{m\in\mathbb N\mid2^m\text{ divise }n\}$. Montrer que $A$ a un plus grand élément $p$, puis que $n = 2^p(2q+1)$ avec $q\in\mathbb N$.</li><li>2<sup>e</sup> méthode : procéder par récurrence forte sur $n$.</li><li>${AJ} Montrer que le couple $(p,q)$ est unique.</li></ol>`,
  decode: { donnees: [R`$2^m\mid n$ et $n\geqslant1$ entraînent $2^m\leqslant n$.`], but: R`Écrire $n$ comme puissance de $2$ fois un impair.`, cles: {
    maj: R`$A$ est majoré par $\log_2n$ et contient $0$.`,
    pair: R`Si $n+1$ est pair, $n+1 = 2k$ avec $k\leqslant n$ : on applique l'hypothèse à $k$.` } },
  steps: [
    { q: 1, t: "Par le plus grand élément", h: R`<p><span data-k="maj">$A$ est une partie non vide et majorée de $\mathbb N$</span>.</p>`, b: R`<p>$0\in A$ car $2^0 = 1$ divise $n$. Si $m\in A$, alors $2^m\leqslant n$ (un diviseur positif de $n\geqslant1$ est $\leqslant n$), donc $m\leqslant\log_2n$. <span data-k="maj">$A$ est une partie non vide et majorée de $\mathbb N$</span> : elle a un plus grand élément $p$.</p><p>Comme $p\in A$, $n = 2^pk$ avec $k\in\mathbb N^*$. Comme $p+1\notin A$, $2$ ne divise pas $k$ (sinon $2^{p+1}\mid n$). Donc $k$ est impair : $k = 2q+1$ avec $q\in\mathbb N$.</p><div class="sbox">$$n = 2^p(2q+1).$$</div>`, rappels: ["ca-bonordre"] },
    { q: 2, t: "Par récurrence forte", h: R`<p>Sépare $n+1$ impair et $n+1$ pair. <span data-k="pair">Dans le cas pair, utilise l'hypothèse pour $\frac{n+1}2$</span>.</p>`, b: R`<p><b>Initialisation</b> : $1 = 2^0(2\cdot0+1)$.</p><p><b>Hérédité</b> : supposons la propriété vraie pour tous les entiers de $1$ à $n$.</p><ul><li>Si $n+1$ est impair : $n+1 = 2q+1$, et $p = 0$ convient.</li><li>Si $n+1$ est pair : $n+1 = 2k$ avec $1\leqslant k\leqslant n$. <span data-k="pair">Par hypothèse</span>, $k = 2^p(2q+1)$, donc $n+1 = 2^{p+1}(2q+1)$.</li></ul><p>La propriété est vraie au rang $n+1$.</p>`, rappels: ["ca-rec"] },
    { q: 3, t: "Unicité", h: R`<p>Si $2^p(2q+1) = 2^{p'}(2q'+1)$ avec $p< p'$, simplifie par $2^p$.</p>`, b: R`<p>Supposons $2^p(2q+1) = 2^{p'}(2q'+1)$. Si $p< p'$, en divisant par $2^p$ : $2q+1 = 2^{p'-p}(2q'+1)$. Le membre de gauche est impair, celui de droite pair : impossible. De même $p> p'$ est impossible, donc $p = p'$.</p><p>Alors $2q+1 = 2q'+1$ et $q = q'$.</p><div class="sbox">$$\text{L'écriture }n = 2^p(2q+1)\text{ est unique.}$$</div><p>$p$ s'appelle la <b>valuation $2$-adique</b> de $n$.</p>` }
  ],
  piege: R`Récurrence simple : connaître la propriété en $n$ ne dit rien sur $n+1$ ; il faut l'avoir pour $\frac{n+1}2$.`,
  methode: R`Une propriété qui se ramène à un entier plus petit, mais pas forcément au précédent : récurrence forte.`
},
/* ---------- Sommes ---------- */
{ id: "ca-10", ...P, level: 1, time: "10 min",
  title: "Règles de calcul sur les sommes",
  enonce: R`<p>Parmi les formules suivantes, lesquelles sont vraies ? ${AJ} Donner un contre-exemple pour chaque formule fausse et la formule correcte quand elle existe.</p><ol style="list-style:lower-alpha"><li>$\displaystyle\sum_{i=1}^n(\alpha+a_i) = \alpha+\sum_{i=1}^na_i$</li><li>$\displaystyle\sum_{i=1}^n(a_i+b_i) = \sum_{i=1}^na_i+\sum_{i=1}^nb_i$</li><li>$\displaystyle\sum_{i=1}^n\alpha a_i = \alpha\sum_{i=1}^na_i$</li><li>$\displaystyle\sum_{i=1}^na_ib_i = \sum_{i=1}^na_i\sum_{i=1}^nb_i$</li><li>$\displaystyle\sum_{i=1}^na_i^\alpha = \Big(\sum_{i=1}^na_i\Big)^\alpha$</li><li>$\displaystyle\sum_{j=1}^n\sum_{i=1}^na_{i,j} = \sum_{i=1}^n\sum_{j=1}^na_{i,j}$</li></ol>`,
  decode: { donnees: [], but: R`Distinguer les règles valables (linéarité, interversion) des fausses.`, cles: {} },
  steps: [
    { q: 1, t: "Les formules vraies", h: R`<p>La somme est linéaire ; une somme double finie s'intervertit.</p>`, b: R`<ul><li><b>b)</b> vraie : on regroupe les termes (additivité).</li><li><b>c)</b> vraie : on factorise $\alpha$ (linéarité).</li><li><b>f)</b> vraie : dans les deux cas on additionne tous les $a_{i,j}$ du tableau $n\times n$, par colonnes ou par lignes.</li></ul>`, rappels: ["ca-double"] },
    { q: 1, t: "Les formules fausses", h: R`<p>Teste avec $n = 2$ et des valeurs simples.</p>`, b: R`<ul><li><b>a)</b> fausse : $\alpha$ est ajouté $n$ fois. Avec $n = 2$, $\alpha = 1$, $a_1 = a_2 = 0$ : $2\neq1$. Formule correcte : $\sum_{i=1}^n(\alpha+a_i) = n\alpha+\sum_{i=1}^na_i$.</li><li><b>d)</b> fausse : $n = 2$, $a_i = b_i = 1$ : $\sum a_ib_i = 2$ mais $\big(\sum a_i\big)\big(\sum b_i\big) = 4$. En développant le produit, on obtient tous les $a_ib_j$, pas seulement $i = j$.</li><li><b>e)</b> fausse : $n = 2$, $a_i = 1$, $\alpha = 2$ : $2\neq4$. Pas de formule simple.</li></ul><div class="sbox">$$\text{Vraies : b), c), f).}$$</div>` }
  ],
  piege: R`Écrire $\sum(\alpha+a_i) = \alpha+\sum a_i$ : la constante est sommée $n$ fois.`,
  methode: R`Pour réfuter une formule générale, un contre-exemple avec $n = 2$ suffit.`
},
{ id: "ca-11", ...P, level: 1, time: "25 min",
  title: "Les sommes Σk, Σk², Σk³",
  enonce: R`<p>Établir les trois formules suivantes ${AJ} (l'énoncé original n'en demandait qu'une) :</p><ol style="list-style:lower-alpha"><li>$\displaystyle\sum_{k=1}^nk = \frac{n(n+1)}2$ ;</li><li>$\displaystyle\sum_{k=1}^nk^2 = \frac{n(n+1)(2n+1)}6$ ;</li><li>$\displaystyle\sum_{k=1}^nk^3 = \frac{n^2(n+1)^2}4$.</li></ol><p>${AJ} Retrouver b) sans la connaître, en sommant $(k+1)^3-k^3$.</p>`,
  decode: { donnees: [], but: R`Démontrer les trois sommes usuelles.`, cles: {
    gauss: R`On écrit la somme à l'endroit puis à l'envers et on additionne.`,
    cube: R`$(k+1)^3-k^3 = 3k^2+3k+1$ et la somme de gauche télescope.` } },
  steps: [
    { q: 1, t: "Σk : l'astuce de Gauss", h: R`<p><span data-k="gauss">Somme à l'endroit plus somme à l'envers</span>.</p>`, b: R`<p>Avec $S = 1+2+\dots+n$ écrite dans les deux sens :</p>$$2S = (1+n)+(2+(n-1))+\dots+(n+1) = n(n+1).$$<div class="sbox">$$\sum_{k=1}^nk = \frac{n(n+1)}2.$$</div><p>En écriture indicielle : $S = \sum_{k=1}^n(n+1-k)$ (changement d'indice $k\to n+1-k$), donc $2S = \sum_{k=1}^n(n+1)$.</p>`, rappels: ["ca-indice"] },
    { q: 1, t: "Σk² par récurrence", h: R`<p>Ajoute $(n+1)^2$ et factorise par $(n+1)$.</p>`, b: R`<p><b>Initialisation</b> : $1 = \frac{1\cdot2\cdot3}6$.</p><p><b>Hérédité</b> :</p>$$\frac{n(n+1)(2n+1)}6+(n+1)^2 = \frac{(n+1)\big(n(2n+1)+6(n+1)\big)}6 = \frac{(n+1)(2n^2+7n+6)}6 = \frac{(n+1)(n+2)(2n+3)}6,$$<p>ce qui est la formule au rang $n+1$ (car $2(n+1)+1 = 2n+3$).</p>`, rappels: ["ca-rec"] },
    { q: 1, t: "Σk³ par récurrence", h: R`<p>Factorise par $\frac{(n+1)^2}4$.</p>`, b: R`<p><b>Initialisation</b> : $1 = \frac{1\cdot4}4$.</p><p><b>Hérédité</b> :</p>$$\frac{n^2(n+1)^2}4+(n+1)^3 = \frac{(n+1)^2\big(n^2+4n+4\big)}4 = \frac{(n+1)^2(n+2)^2}4.$$<div class="sbox">$$\sum_{k=1}^nk^3 = \Big(\sum_{k=1}^nk\Big)^2.$$</div>` },
    { q: 2, t: "Retrouver Σk² par télescopage", h: R`<p><span data-k="cube">Somme $(k+1)^3-k^3$ de $k = 1$ à $n$ de deux façons</span>.</p>`, b: R`<p><span data-k="cube">D'un côté la somme télescope</span> : $\sum_{k=1}^n\big((k+1)^3-k^3\big) = (n+1)^3-1$. De l'autre, $(k+1)^3-k^3 = 3k^2+3k+1$, donc</p>$$(n+1)^3-1 = 3\sum_{k=1}^nk^2+3\frac{n(n+1)}2+n.$$<p>On isole :</p>$$3\sum k^2 = (n+1)^3-(n+1)-\frac{3n(n+1)}2 = (n+1)\Big(n^2+2n-\frac{3n}2\Big) = \frac{n(n+1)(2n+1)}2,$$<p>d'où la formule b). La même méthode avec $(k+1)^4-k^4$ redonne c).</p>`, rappels: ["ca-telesc"] }
  ],
  piege: R`Dans $\sum_{k=1}^n1$, oublier que la somme vaut $n$ (et non $1$).`,
  methode: R`Pour trouver $\sum k^p$ : télescoper $(k+1)^{p+1}-k^{p+1}$ et utiliser les sommes d'exposants plus petits.`
},
{ id: "ca-12", ...P, level: 1, time: "15 min",
  title: "Deux sommes à partir de Σk et Σk²",
  enonce: R`<p>À partir des valeurs connues de $\sum_{k=1}^nk$ et $\sum_{k=1}^nk^2$, calculer :</p><ol style="list-style:lower-alpha"><li>$\displaystyle\sum_{k=1}^nk(k+1)$ ;</li><li>$1\cdot n+2\cdot(n-1)+\dots+(n-1)\cdot2+n\cdot1$.</li><li>${AJ} Retrouver a) par télescopage, en écrivant $k(k+1) = \frac13\big[k(k+1)(k+2)-(k-1)k(k+1)\big]$.</li></ol>`,
  decode: { donnees: [], but: R`Se ramener aux sommes usuelles par linéarité.`, cles: {
    terme: R`Le $k$-ième terme de b) est $k\,(n+1-k)$.` } },
  steps: [
    { q: 1, t: "Somme des k(k + 1)", b: R`$$\sum_{k=1}^nk(k+1) = \sum_{k=1}^nk^2+\sum_{k=1}^nk = \frac{n(n+1)(2n+1)}6+\frac{n(n+1)}2 = \frac{n(n+1)(2n+1+3)}6.$$<div class="sbox">$$\sum_{k=1}^nk(k+1) = \frac{n(n+1)(n+2)}3.$$</div>`, rappels: ["ca-usuelles"] },
    { q: 2, t: "La somme symétrique", h: R`<p><span data-k="terme">Écris le terme général</span>.</p>`, b: R`<p><span data-k="terme">Le $k$-ième terme est $k(n+1-k)$</span> (les deux facteurs ont pour somme $n+1$) :</p>$$\sum_{k=1}^nk(n+1-k) = (n+1)\frac{n(n+1)}2-\frac{n(n+1)(2n+1)}6 = \frac{n(n+1)\big(3(n+1)-(2n+1)\big)}6.$$<div class="sbox">$$1\cdot n+2\cdot(n-1)+\dots+n\cdot1 = \frac{n(n+1)(n+2)}6.$$</div><p>Vérification $n = 3$ : $3+4+3 = 10 = \frac{3\cdot4\cdot5}6$ ✓.</p>`, rappels: ["ca-usuelles"] },
    { q: 3, t: "Par télescopage", b: R`<p>On vérifie l'identité : $k(k+1)(k+2)-(k-1)k(k+1) = k(k+1)\big[(k+2)-(k-1)\big] = 3k(k+1)$. Avec $a_k = k(k+1)(k+2)$, on a $k(k+1) = \frac13(a_k-a_{k-1})$ et</p>$$\sum_{k=1}^nk(k+1) = \frac13(a_n-a_0) = \frac{n(n+1)(n+2)}3.$$<p>Même résultat, sans connaître $\sum k^2$. Plus généralement $\sum_{k=1}^nk(k+1)\cdots(k+p-1) = \frac{n(n+1)\cdots(n+p)}{p+1}$.</p>`, rappels: ["ca-telesc"] }
  ],
  piege: R`Mal identifier le terme général de b) : le second facteur décroît quand le premier croît, leur somme reste $n+1$.`,
  methode: R`Développer le terme général, puis utiliser la linéarité et les sommes usuelles.`
},
{ id: "ca-13", ...P, level: 2, time: "15 min",
  title: "Somme alternée des entiers",
  enonce: R`<ol><li>Calculer $\displaystyle\sum_{k=1}^n(-1)^kk$.</li><li>${AJ} Écrire le résultat en une seule formule valable pour tout $n$.</li><li>${AJ} Calculer de même $\displaystyle\sum_{k=1}^n(-1)^kk^2$.</li></ol>`,
  decode: { donnees: [], but: R`Calculer des sommes alternées en groupant les termes deux par deux.`, cles: {
    paire: R`On regroupe le terme d'indice $2\ell-1$ et celui d'indice $2\ell$.` } },
  steps: [
    { q: 1, t: "Grouper par paires", h: R`<p>Traite d'abord $n = 2p$ : <span data-k="paire">groupe les termes deux par deux</span>.</p>`, b: R`<p><b>$n = 2p$ pair</b> : <span data-k="paire">on groupe les termes $2\ell-1$ et $2\ell$</span> :</p>$$\sum_{k=1}^{2p}(-1)^kk = \sum_{\ell=1}^p\big(-(2\ell-1)+2\ell\big) = \sum_{\ell=1}^p1 = p = \frac n2.$$<p><b>$n = 2p+1$ impair</b> : on ajoute le dernier terme $-(2p+1)$ :</p>$$\sum_{k=1}^{2p+1}(-1)^kk = p-(2p+1) = -(p+1) = -\frac{n+1}2.$$<div class="sbox">$$\sum_{k=1}^n(-1)^kk = \begin{cases}\dfrac n2&\text{si }n\text{ pair}\\[2mm]-\dfrac{n+1}2&\text{si }n\text{ impair.}\end{cases}$$</div>` },
    { q: 2, t: "Une seule formule", b: R`<p>On cherche $S_n = a(-1)^n(2n+1)+b$ : $n$ pair donne $a(2n+1)+b = \frac n2$, $n$ impair donne $-a(2n+1)+b = -\frac{n+1}2$. Avec $a = \frac14$, $b = -\frac14$ : $\frac{2n+1-1}4 = \frac n2$ ✓ et $\frac{-(2n+1)-1}4 = -\frac{n+1}2$ ✓.</p><div class="sbox">$$\sum_{k=1}^n(-1)^kk = \frac{(-1)^n(2n+1)-1}4.$$</div>` },
    { q: 3, t: "Avec les carrés", h: R`<p>$(2\ell)^2-(2\ell-1)^2 = 4\ell-1$.</p>`, b: R`<p><b>$n = 2p$</b> : $\sum_{\ell=1}^p\big((2\ell)^2-(2\ell-1)^2\big) = \sum_{\ell=1}^p(4\ell-1) = 2p(p+1)-p = p(2p+1) = \frac{n(n+1)}2$.</p><p><b>$n = 2p+1$</b> : on retire $(2p+1)^2$ : $\frac{(n-1)n}2-n^2 = -\frac{n(n+1)}2$.</p><div class="sbox">$$\sum_{k=1}^n(-1)^kk^2 = (-1)^n\frac{n(n+1)}2.$$</div><p>Vérification $n = 3$ : $-1+4-9 = -6$ ✓.</p>`, rappels: ["ca-usuelles"] }
  ],
  piege: R`Oublier le cas impair : le regroupement par paires laisse un terme seul.`,
  methode: R`Somme alternée : grouper les termes deux par deux, en séparant $n$ pair et $n$ impair.`
},
{ id: "ca-14", ...P, level: 1, time: "10 min",
  title: "Une suite de sommes croissante",
  enonce: R`<p>Soit $u_n = \displaystyle\sum_{k=1}^n\frac1{n+k}$ pour $n\geqslant1$.</p><ol><li>Montrer que $(u_n)$ est strictement croissante.</li><li>${AJ} Montrer que $\frac12\leqslant u_n< 1$. Que peut-on en déduire ?</li></ol>`,
  decode: { donnees: [R`$u_n = \frac1{n+1}+\dots+\frac1{2n}$ : $n$ termes.`], but: R`Étudier la monotonie et les bornes de $(u_n)$.`, cles: {
    diff: R`En passant de $u_n$ à $u_{n+1}$, on perd $\frac1{n+1}$ et on gagne $\frac1{2n+1}+\frac1{2n+2}$.` } },
  steps: [
    { q: 1, t: "La différence u₍ₙ₊₁₎ − uₙ", h: R`<p><span data-k="diff">Écris les deux sommes en entier</span>.</p>`, b: R`<p>$u_n = \frac1{n+1}+\dots+\frac1{2n}$ et $u_{n+1} = \frac1{n+2}+\dots+\frac1{2n}+\frac1{2n+1}+\frac1{2n+2}$. <span data-k="diff">Les termes communs se simplifient</span> :</p>$$u_{n+1}-u_n = \frac1{2n+1}+\frac1{2n+2}-\frac1{n+1} = \frac1{2n+1}-\frac1{2n+2} > 0,$$<p>car $\frac1{n+1} = \frac2{2n+2}$.</p><div class="sbox">$$(u_n)\ \text{est strictement croissante.}$$</div>` },
    { q: 2, t: "Encadrement", h: R`<p>Chacun des $n$ termes est entre $\frac1{2n}$ et $\frac1{n+1}$.</p>`, b: R`<p>Pour $1\leqslant k\leqslant n$ : $\frac1{2n}\leqslant\frac1{n+k}\leqslant\frac1{n+1}$. En sommant les $n$ termes :</p>$$\frac12 = n\cdot\frac1{2n}\leqslant u_n\leqslant\frac n{n+1}< 1.$$<p>$(u_n)$ est croissante et majorée : elle converge, vers une limite dans $[\frac12,1]$. (On montre en analyse que la limite est $\ln2\approx0{,}693$.)</p>` }
  ],
  piege: R`Croire que $u_{n+1}$ s'obtient en ajoutant un terme à $u_n$ : les bornes de la somme dépendent de $n$.`,
  methode: R`Monotonie d'une somme dont les bornes dépendent de $n$ : écrire les deux sommes en entier et simplifier les termes communs.`
},
{ id: "ca-15", ...P, level: 1, time: "15 min",
  title: "Somme de factorielles",
  enonce: R`<ol><li>Montrer que pour tout $n\in\mathbb N$, $\displaystyle\sum_{k=0}^nk!\leqslant(n+1)!$.</li><li>${AJ} Améliorer : montrer que pour tout $n\geqslant1$, $\displaystyle\sum_{k=0}^nk!\leqslant2\,n!$.</li></ol>`,
  decode: { donnees: [R`$(n+2)! = (n+2)(n+1)!$.`], but: R`Majorer une somme de factorielles par son dernier terme.`, cles: {} },
  steps: [
    { q: 1, t: "Par récurrence", h: R`<p>$(n+1)!+(n+1)! = 2(n+1)!\leqslant(n+2)!$.</p>`, b: R`<p><b>Initialisation</b> : $0! = 1\leqslant1!$.</p><p><b>Hérédité</b> : si $\sum_{k=0}^nk!\leqslant(n+1)!$, alors</p>$$\sum_{k=0}^{n+1}k!\leqslant(n+1)!+(n+1)! = 2\,(n+1)!\leqslant(n+2)(n+1)! = (n+2)!.$$`, rappels: ["ca-rec", "ca-fact"] },
    { q: 2, t: "Une meilleure borne", h: R`<p>Même schéma : il faut $2\,n!\leqslant(n+1)!$.</p>`, b: R`<p><b>Initialisation</b> ($n = 1$) : $0!+1! = 2\leqslant2\cdot1!$ ✓.</p><p><b>Hérédité</b> : si $\sum_{k=0}^nk!\leqslant2\,n!$, alors $\sum_{k=0}^{n+1}k!\leqslant2\,n!+(n+1)!\leqslant(n+1)!+(n+1)! = 2(n+1)!$, car $2\,n!\leqslant(n+1)\,n!$ pour $n\geqslant1$.</p><div class="sbox">$$\forall n\geqslant1,\quad\sum_{k=0}^nk!\leqslant2\,n!.$$</div><p>Comme $2\,n!\leqslant(n+1)!$ dès $n\geqslant1$, c'est plus précis que la question 1 : la somme est du même ordre que son <b>dernier terme</b>.</p>` }
  ],
  piege: R`Initialiser la question 2 à $n = 0$ : $0! = 1\leqslant2$ marche, mais l'hérédité utilise $n\geqslant1$.`,
  methode: R`Majorer une somme par récurrence : on ajoute le terme suivant et on compare.`
},
{ id: "ca-16", ...P, level: 1, time: "10 min",
  title: "Somme télescopique de k/(k + 1)!",
  enonce: R`<ol><li>Calculer $\displaystyle\sum_{k=1}^n\frac k{(k+1)!}$.</li><li>${AJ} En déduire la limite de cette somme quand $n\to+\infty$.</li></ol>`,
  decode: { donnees: [], but: R`Rendre la somme télescopique.`, cles: {
    k: R`$k = (k+1)-1$.` } },
  steps: [
    { q: 1, t: "Télescoper", h: R`<p><span data-k="k">Écris $k = (k+1)-1$</span>.</p>`, b: R`$$\frac k{(k+1)!} = \frac{(k+1)-1}{(k+1)!} = \frac{k+1}{(k+1)!}-\frac1{(k+1)!} = \frac1{k!}-\frac1{(k+1)!}.$$<p>La somme télescope :</p>$$\sum_{k=1}^n\Big(\frac1{k!}-\frac1{(k+1)!}\Big) = \frac1{1!}-\frac1{(n+1)!}.$$<div class="sbox">$$\sum_{k=1}^n\frac k{(k+1)!} = 1-\frac1{(n+1)!}.$$</div>`, rappels: ["ca-telesc"] },
    { q: 2, t: "Limite", b: R`<p>$(n+1)!\to+\infty$, donc la somme tend vers $1$.</p><div class="sbox">$$\lim_{n\to+\infty}\sum_{k=1}^n\frac k{(k+1)!} = 1.$$</div>` }
  ],
  piege: R`Se tromper sur le terme restant : c'est $\frac1{1!} = 1$ (indice de départ $k = 1$).`,
  methode: R`Factorielles au dénominateur : écrire le numérateur comme différence pour faire apparaître $\frac1{k!}-\frac1{(k+1)!}$.`
},
{ id: "ca-17", ...P, level: 3, time: "30 min",
  title: "Écriture des entiers en base factorielle",
  enonce: R`<ol><li>Calculer $\displaystyle\sum_{k=1}^pk\cdot k!$.</li><li>Soit $p\in\mathbb N$. Montrer que pour tout $n\in[\![0,(p+1)!-1]\!]$, il existe $(n_0,\dots,n_p)\in\mathbb N^{p+1}$ tel que $0\leqslant n_k\leqslant k$ pour tout $k$ et $n = \displaystyle\sum_{k=0}^pn_k\,k!$.</li><li>Justifier l'unicité d'une telle écriture.</li><li>${AJ} Écrire $n = 100$ en base factorielle.</li></ol>`,
  decode: { donnees: [R`$k\cdot k! = (k+1)!-k!$.`], but: R`Construire une « numération » où le chiffre de rang $k$ va de $0$ à $k$ et pèse $k!$.`, cles: {
    div: R`On divise $n$ par $(p+1)!$ : le quotient est le chiffre $n_{p+1}$, le reste se traite avec l'hypothèse de récurrence.`,
    max: R`Le plus grand nombre écrit avec les chiffres de rang $< p$ vaut $\sum_{k< p}k\cdot k! = p!-1 < p!$.` } },
  steps: [
    { q: 1, t: "Somme des k · k!", b: R`<p>$k\cdot k! = (k+1-1)\,k! = (k+1)!-k!$, et la somme télescope :</p><div class="sbox">$$\sum_{k=1}^pk\cdot k! = (p+1)!-1.$$</div>`, rappels: ["ca-telesc"] },
    { q: 2, t: "Existence par récurrence", h: R`<p><span data-k="div">Division euclidienne de $n$ par $(p+1)!$</span>.</p>`, b: R`<p>Récurrence sur $p$.</p><p><b>$p = 0$</b> : $n\in[\![0,0]\!]$, $n = 0 = 0\cdot0!$ avec $n_0 = 0\leqslant0$ ✓.</p><p><b>Hérédité</b> : supposons la propriété vraie au rang $p$, et soit $n\in[\![0,(p+2)!-1]\!]$. <span data-k="div">On divise $n$ par $(p+1)!$</span> : $n = q\,(p+1)!+r$ avec $0\leqslant r< (p+1)!$.</p><ul><li>Comme $n< (p+2)! = (p+2)(p+1)!$, on a $q< p+2$, donc $0\leqslant q\leqslant p+1$.</li><li>$r\in[\![0,(p+1)!-1]\!]$ : par hypothèse, $r = \sum_{k=0}^pn_k\,k!$ avec $0\leqslant n_k\leqslant k$.</li></ul><p>En posant $n_{p+1} = q$ : $n = \sum_{k=0}^{p+1}n_k\,k!$ avec $0\leqslant n_k\leqslant k$ pour tout $k$.</p>`, rappels: ["ca-rec"] },
    { q: 3, t: "Unicité", h: R`<p><span data-k="max">Les chiffres de rang $< p$ ne peuvent pas atteindre $p!$</span>.</p>`, b: R`<p>Supposons $n = \sum_{k=0}^pn_k\,k! = \sum_{k=0}^pn'_k\,k!$ avec les conditions requises, et $n_p< n'_p$. Alors, avec la question 1 :</p>$$\sum_{k=0}^pn_k\,k!\leqslant n_p\,p!+\sum_{k=0}^{p-1}k\cdot k! = n_p\,p!+p!-1< (n_p+1)\,p!\leqslant n'_p\,p!\leqslant\sum_{k=0}^pn'_k\,k!,$$<p>contradiction. Donc $n_p\geqslant n'_p$, et par symétrie $n_p = n'_p$. On retire $n_p\,p!$ des deux côtés et on recommence avec $p-1$ : tous les chiffres sont égaux.</p><p>Autrement dit, $n_p$ est forcément le quotient de $n$ par $p!$ : <span data-k="max">le reste vient des chiffres de rang $< p$</span>.</p>` },
    { q: 4, t: "Exemple : 100", h: R`<p>Divise successivement par $4! = 24$, $3! = 6$, $2! = 2$.</p>`, b: R`<p>$5! = 120 > 100$, donc $p = 4$ suffit.</p><ul><li>$100 = 4\times24+4$ : $n_4 = 4$ ;</li><li>$4 = 0\times6+4$ : $n_3 = 0$ ;</li><li>$4 = 2\times2+0$ : $n_2 = 2$ ;</li><li>$0 = 0\times1$ : $n_1 = 0$, et $n_0 = 0$.</li></ul><div class="sbox">$$100 = 4\cdot4!+0\cdot3!+2\cdot2!+0\cdot1!+0\cdot0!.$$</div><p>Vérification : $96+4 = 100$ ✓.</p>` }
  ],
  piege: R`Oublier de vérifier que le quotient $q$ respecte $q\leqslant p+1$ : c'est la borne $n< (p+2)!$ qui le donne.`,
  methode: R`Existence d'une écriture en « base » : division euclidienne par le plus grand poids, puis récurrence sur le reste.`
},
{ id: "ca-18", ...P, level: 3, time: "25 min",
  title: "L'inégalité de Tchebychev",
  enonce: R`<p>Soient $(x_1,\dots,x_n)$ et $(y_1,\dots,y_n)$ deux suites réelles monotones.</p><ol><li>Comparer $\Big(\dfrac1n\displaystyle\sum_{k=1}^nx_k\Big)\Big(\dfrac1n\displaystyle\sum_{k=1}^ny_k\Big)$ et $\dfrac1n\displaystyle\sum_{k=1}^nx_ky_k$.</li><li>${AJ} Application : comparer $\frac{n(n+1)^2}4$ et $\sum_{k=1}^nk^2$ en prenant $x_k = y_k = k$.</li></ol>`,
  decode: { donnees: [R`Même monotonie : $(x_k-x_\ell)(y_k-y_\ell)\geqslant0$.`], but: R`Comparer « moyenne du produit » et « produit des moyennes ».`, cles: {
    double: R`On écrit la différence comme une somme double $\frac1{2n^2}\sum_{k,\ell}(x_k-x_\ell)(y_k-y_\ell)$.` } },
  steps: [
    { q: 1, t: "La différence en somme double", h: R`<p><span data-k="double">Écris $n\sum x_ky_k-\sum x_k\sum y_\ell$ comme une somme double</span>.</p>`, b: R`<p>On note $D = \frac1n\sum_kx_ky_k-\frac1{n^2}\big(\sum_kx_k\big)\big(\sum_\ell y_\ell\big)$. Comme $n\sum_kx_ky_k = \sum_k\sum_\ell x_ky_k$ :</p>$$n^2D = \sum_{k=1}^n\sum_{\ell=1}^n\big(x_ky_k-x_ky_\ell\big).$$<p>En échangeant les noms $k$ et $\ell$, la même somme vaut $\sum_{k,\ell}(x_\ell y_\ell-x_\ell y_k)$. On ajoute les deux écritures :</p>$$2n^2D = \sum_{k,\ell}\big(x_ky_k-x_ky_\ell+x_\ell y_\ell-x_\ell y_k\big) = \sum_{k=1}^n\sum_{\ell=1}^n(x_k-x_\ell)(y_k-y_\ell).$$`, rappels: ["ca-double"] },
    { q: 1, t: "Le signe", b: R`<ul><li><b>Même monotonie</b> (toutes deux croissantes, ou toutes deux décroissantes) : $x_k-x_\ell$ et $y_k-y_\ell$ ont le même signe, chaque terme est $\geqslant0$, donc $D\geqslant0$.</li><li><b>Monotonies contraires</b> : chaque terme est $\leqslant0$, donc $D\leqslant0$.</li></ul><div class="sbox">$$\text{même monotonie : }\Big(\frac1n\sum x_k\Big)\Big(\frac1n\sum y_k\Big)\leqslant\frac1n\sum x_ky_k ;\quad\text{monotonies contraires : }\geqslant.$$</div>` },
    { q: 2, t: "Application", b: R`<p>Avec $x_k = y_k = k$ (même monotonie) : $\big(\frac{n+1}2\big)^2\leqslant\frac1n\sum k^2$, soit</p>$$\frac{n(n+1)^2}4\leqslant\sum_{k=1}^nk^2 = \frac{n(n+1)(2n+1)}6.$$<p>Vérification directe : cela revient à $3(n+1)\leqslant2(2n+1)$, soit $n\geqslant1$ ✓. Égalité seulement pour $n = 1$.</p>` }
  ],
  piege: R`Comparer terme à terme $x_ky_k$ et $x_ky_\ell$ : le signe d'un seul terme ne dit rien ; c'est la symétrisation qui marche.`,
  methode: R`Pour une inégalité entre sommes symétriques : écrire la différence en somme double, puis symétriser en échangeant les indices.`
},
/* ---------- Sommes géométriques ---------- */
{ id: "ca-19", ...P, level: 2, time: "20 min",
  title: "Sommes trigonométriques par les exponentielles",
  enonce: R`<ol><li>Calculer, pour tout $\theta\in\mathbb R$, $\displaystyle\sum_{k=0}^ne^{ik\theta}$.</li><li>${AJ} En déduire $\displaystyle\sum_{k=0}^n\cos(k\theta)$ et $\displaystyle\sum_{k=0}^n\sin(k\theta)$ pour $\theta\not\equiv0\ [2\pi]$.</li></ol>`,
  decode: { donnees: [R`$e^{ik\theta} = \big(e^{i\theta}\big)^k$ : somme géométrique de raison $e^{i\theta}$.`], but: R`Calculer la somme, puis ses parties réelle et imaginaire.`, cles: {
    moitie: R`On factorise $e^{ia}-1$ par $e^{ia/2}$ : $e^{ia}-1 = 2i\sin\frac a2\,e^{ia/2}$.` } },
  steps: [
    { q: 1, t: "Somme géométrique", h: R`<p>Distingue $e^{i\theta} = 1$ et $e^{i\theta}\neq1$.</p>`, b: R`<ul><li>Si $\theta\equiv0\ [2\pi]$ : $e^{i\theta} = 1$ et la somme vaut $n+1$.</li><li>Sinon, la raison $e^{i\theta}\neq1$ :</li></ul>$$\sum_{k=0}^ne^{ik\theta} = \frac{e^{i(n+1)\theta}-1}{e^{i\theta}-1}.$$`, rappels: ["ca-geo"] },
    { q: 1, t: "Factoriser par l'angle moitié", h: R`<p><span data-k="moitie">Factorise numérateur et dénominateur</span>.</p>`, b: R`<p><span data-k="moitie">Avec $e^{ia}-1 = 2i\sin\frac a2\,e^{ia/2}$</span> en haut ($a = (n+1)\theta$) et en bas ($a = \theta$) :</p><div class="sbox">$$\sum_{k=0}^ne^{ik\theta} = e^{in\theta/2}\,\frac{\sin\frac{(n+1)\theta}2}{\sin\frac\theta2}\qquad(\theta\not\equiv0\ [2\pi]).$$</div>`, rappels: ["ca-moitie"] },
    { q: 2, t: "Parties réelle et imaginaire", b: R`<p>$\sum\cos(k\theta) = \mathrm{Re}\sum e^{ik\theta}$ et $\sum\sin(k\theta) = \mathrm{Im}\sum e^{ik\theta}$. Le quotient de sinus est réel, donc :</p><div class="sbox">$$\sum_{k=0}^n\cos(k\theta) = \frac{\cos\frac{n\theta}2\,\sin\frac{(n+1)\theta}2}{\sin\frac\theta2},\qquad\sum_{k=0}^n\sin(k\theta) = \frac{\sin\frac{n\theta}2\,\sin\frac{(n+1)\theta}2}{\sin\frac\theta2}.$$</div><p>Vérification $n = 1$ : $\frac{\cos\frac\theta2\sin\theta}{\sin\frac\theta2} = 2\cos^2\frac\theta2 = 1+\cos\theta$ ✓.</p>` }
  ],
  piege: R`Oublier le cas $\theta\equiv0\ [2\pi]$, où la formule géométrique ne s'applique pas.`,
  methode: R`Sommes de $\cos(k\theta)$, $\sin(k\theta)$ : passer par $\sum e^{ik\theta}$ et l'angle moitié.`
},
{ id: "ca-20", ...P, level: 1, time: "10 min",
  title: "Somme des puissances paires de q",
  enonce: R`<p>Calculer, pour tout $q\in\mathbb C$, la somme $\displaystyle\sum_{k=0}^nq^{2k}$. ${AJ} Application : $\sum_{k=0}^n4^k$ et $\sum_{k=0}^n(-1)^{2k}$.</p>`,
  decode: { donnees: [R`$q^{2k} = (q^2)^k$.`], but: R`Reconnaître une somme géométrique de raison $q^2$.`, cles: {} },
  steps: [
    { q: 1, t: "Raison q²", h: R`<p>Le cas particulier est $q^2 = 1$, c'est-à-dire $q = \pm1$.</p>`, b: R`<p>C'est une somme géométrique de raison $q^2$.</p><div class="sbox">$$\sum_{k=0}^nq^{2k} = \begin{cases}\dfrac{q^{2n+2}-1}{q^2-1}&\text{si }q\neq\pm1,\\[2mm]n+1&\text{si }q = \pm1.\end{cases}$$</div><p><b>Applications</b> : avec $q = 2$, $\sum_{k=0}^n4^k = \frac{4^{n+1}-1}3$ ; avec $q = -1$, la somme vaut $n+1$ (tous les termes valent $1$).</p>`, rappels: ["ca-geo"] }
  ],
  piege: R`Ne traiter que $q = 1$ : la raison $q^2$ vaut aussi $1$ pour $q = -1$.`,
  methode: R`Identifier la raison avant d'appliquer la formule, et isoler le cas raison $= 1$.`
},
{ id: "ca-21", ...P, level: 2, time: "20 min",
  title: "Somme des k qᵏ",
  enonce: R`<p>Pour $q\in\mathbb C\setminus\{1\}$ et $n\in\mathbb N$, on pose $S_n = \displaystyle\sum_{k=0}^nkq^k$.</p><ol><li>En calculant $qS_n-S_n$, déterminer $S_n$.</li><li>${AJ} Que vaut $S_n$ pour $q = 1$ ? Pour $q = 2$ ?</li><li>${AJ} Pour $q$ réel, $|q|< 1$, déterminer la limite de $S_n$ (on admet $nq^n\to0$).</li></ol>`,
  decode: { donnees: [], but: R`Calculer une somme « arithmético-géométrique ».`, cles: {
    dec: R`Dans $qS_n = \sum kq^{k+1}$, on pose $j = k+1$ : $qS_n = \sum_{j=1}^{n+1}(j-1)q^j$.` } },
  steps: [
    { q: 1, t: "Calcul de qSₙ − Sₙ", h: R`<p><span data-k="dec">Décale l'indice dans $qS_n$</span>.</p>`, b: R`<p><span data-k="dec">Par décalage d'indice</span>, $qS_n = \sum_{k=0}^nkq^{k+1} = \sum_{k=1}^{n+1}(k-1)q^k$. Donc</p>$$qS_n-S_n = \sum_{k=1}^{n+1}(k-1)q^k-\sum_{k=1}^nkq^k = nq^{n+1}-\sum_{k=1}^nq^k = nq^{n+1}-q\,\frac{q^n-1}{q-1}.$$`, rappels: ["ca-indice", "ca-geo"] },
    { q: 1, t: "Expression de Sₙ", b: R`<p>On divise par $q-1\neq0$ et on met au même dénominateur :</p>$$S_n = \frac{nq^{n+1}(q-1)-q^{n+1}+q}{(q-1)^2}.$$<div class="sbox">$$S_n = \frac{nq^{n+2}-(n+1)q^{n+1}+q}{(q-1)^2}.$$</div>` },
    { q: 2, t: "Deux cas particuliers", b: R`<ul><li>$q = 1$ : $S_n = \sum_{k=0}^nk = \frac{n(n+1)}2$ (la formule ne s'applique pas).</li><li>$q = 2$ : $S_n = n2^{n+2}-(n+1)2^{n+1}+2 = (n-1)2^{n+1}+2$. Vérification $n = 2$ : $2+8 = 10 = 1\cdot8+2$ ✓.</li></ul>` },
    { q: 3, t: "Limite", b: R`<p>Si $|q|< 1$, $q^{n+1}\to0$, $nq^{n+2}\to0$ et $(n+1)q^{n+1}\to0$. Donc</p><div class="sbox">$$\lim_{n\to+\infty}\sum_{k=0}^nkq^k = \frac q{(1-q)^2}.$$</div><p>Exemple : $\sum_{k\geqslant0}\frac k{2^k} = \frac{1/2}{1/4} = 2$.</p>` }
  ],
  piege: R`Oublier le dernier terme $nq^{n+1}$ en recombinant les deux sommes décalées.`,
  methode: R`Somme $\sum kq^k$ : multiplier par $q$ et soustraire, ou dériver $\sum x^k$.`
},
/* ---------- Sommes doubles ---------- */
{ id: "ca-22", ...P, level: 2, time: "25 min",
  title: "Trois sommes doubles",
  enonce: R`<p>À partir des valeurs connues de $\sum k$, $\sum k^2$ et $\sum k^3$, calculer :</p><ol style="list-style:lower-alpha"><li>$\displaystyle\sum_{1\leqslant i,j\leqslant n}(i+j)^2$ ;</li><li>$\displaystyle\sum_{1\leqslant i< j\leqslant n}ij$ ;</li><li>$\displaystyle\sum_{1\leqslant i,j\leqslant n}\min(i,j)$.</li></ol>`,
  decode: { donnees: [], but: R`Calculer des sommes doubles en sommant ligne par ligne, ou par une astuce de symétrie.`, cles: {
    carre: R`$\big(\sum i\big)^2 = \sum i^2+2\sum_{i< j}ij$.`,
    min: R`Pour $i$ fixé : $\min(i,j) = j$ si $j\leqslant i$, et $i$ si $j> i$.` } },
  steps: [
    { q: 1, t: "Somme des (i + j)²", h: R`<p>Développe $(i+j)^2 = i^2+2ij+j^2$ et somme chaque morceau.</p>`, b: R`$$\sum_{i,j}(i+j)^2 = \sum_{i,j}i^2+2\sum_{i,j}ij+\sum_{i,j}j^2 = n\sum_ii^2+2\Big(\sum_ii\Big)^2+n\sum_jj^2.$$<p>(La somme sur $j$ de $i^2$ vaut $n\,i^2$ ; $\sum_{i,j}ij = \sum_ii\sum_jj$.) Donc</p>$$\sum_{i,j}(i+j)^2 = \frac{n^2(n+1)(2n+1)}3+\frac{n^2(n+1)^2}2 = \frac{n^2(n+1)\big(2(2n+1)+3(n+1)\big)}6.$$<div class="sbox">$$\sum_{1\leqslant i,j\leqslant n}(i+j)^2 = \frac{n^2(n+1)(7n+5)}6.$$</div><p>Vérification $n = 1$ : $4 = \frac{1\cdot2\cdot12}6$ ✓.</p>`, rappels: ["ca-double", "ca-usuelles"] },
    { q: 2, t: "Somme des ij pour i < j", h: R`<p><span data-k="carre">Développe $\big(\sum i\big)^2$</span>.</p>`, b: R`<p><span data-k="carre">En développant le carré d'une somme</span> :</p>$$\sum_{i< j}ij = \frac12\Big[\Big(\sum_{i=1}^ni\Big)^2-\sum_{i=1}^ni^2\Big] = \frac12\Big[\frac{n^2(n+1)^2}4-\frac{n(n+1)(2n+1)}6\Big] = \frac{n(n+1)\big(3n^2+3n-4n-2\big)}{24}.$$<p>Comme $3n^2-n-2 = (n-1)(3n+2)$ :</p><div class="sbox">$$\sum_{1\leqslant i< j\leqslant n}ij = \frac{(n-1)n(n+1)(3n+2)}{24}.$$</div><p>Vérification $n = 3$ : $1\cdot2+1\cdot3+2\cdot3 = 11 = \frac{2\cdot3\cdot4\cdot11}{24}$ ✓.</p>`, rappels: ["ca-double"] },
    { q: 3, t: "Somme des min(i, j)", h: R`<p><span data-k="min">Fixe $i$ et coupe la somme sur $j$ en deux</span>.</p>`, b: R`<p><span data-k="min">Pour $i$ fixé</span> :</p>$$\sum_{j=1}^n\min(i,j) = \sum_{j=1}^ij+\sum_{j=i+1}^ni = \frac{i(i+1)}2+i(n-i).$$<p>On somme sur $i$ :</p>$$\sum_{i=1}^n\Big(\frac{i^2+i}2+ni-i^2\Big) = \Big(n+\frac12\Big)\sum i-\frac12\sum i^2 = \frac{(2n+1)n(n+1)}4-\frac{n(n+1)(2n+1)}{12}.$$<div class="sbox">$$\sum_{1\leqslant i,j\leqslant n}\min(i,j) = \frac{n(n+1)(2n+1)}6.$$</div><p>C'est aussi $\sum_{k=1}^nk^2$ ! Explication : $\min(i,j)$ est le nombre d'entiers $m\geqslant1$ tels que $m\leqslant i$ et $m\leqslant j$. En comptant d'abord par $m$ : pour $m$ fixé, il y a $(n-m+1)^2$ couples $(i,j)$ avec $i,j\geqslant m$, d'où $\sum_{i,j}\min(i,j) = \sum_{m=1}^n(n-m+1)^2 = \sum_{k=1}^nk^2$.</p>`, rappels: ["ca-double"] }
  ],
  piege: R`Dans $\sum_{i,j}i^2$, oublier que $i^2$ ne dépend pas de $j$ et est donc compté $n$ fois.`,
  methode: R`Somme double : fixer un indice, calculer la somme intérieure, puis sommer. Pour $\sum_{i< j}$, penser au carré d'une somme.`
},
{ id: "ca-23", ...P, level: 2, time: "15 min",
  title: "Somme des p + q pour p < q",
  enonce: R`<p>Soit $n\in\mathbb N^*$. Calculer $C_n = \displaystyle\sum_{1\leqslant p< q\leqslant n}(p+q)$ en remarquant que$$\sum_{1\leqslant p,q\leqslant n}(p+q) = 2C_n+2\sum_{p=1}^np.$$${AJ} Vérifier le résultat pour $n = 3$, puis le retrouver par un calcul direct (somme sur $q$ puis sur $p$).</p>`,
  decode: { donnees: [], but: R`Utiliser la symétrie du carré $[\![1,n]\!]^2$.`, cles: {
    decoup: R`Le carré se découpe en trois : $p< q$, $p> q$ (même somme par symétrie) et la diagonale $p = q$.` } },
  steps: [
    { q: 1, t: "Découper le carré", h: R`<p><span data-k="decoup">Trois zones : sous la diagonale, sur la diagonale, au-dessus</span>.</p>`, b: R`<p><span data-k="decoup">Les couples avec $p< q$ et ceux avec $p> q$ donnent la même somme</span> (on échange $p$ et $q$, et $p+q$ ne change pas). La diagonale $p = q$ donne $\sum_p2p$. D'où la relation de l'énoncé.</p><p><b>La somme complète</b> : $\sum_{p,q}(p+q) = \sum_{p,q}p+\sum_{p,q}q = 2n\sum_pp = n^2(n+1)$.</p><p>Donc $2C_n = n^2(n+1)-n(n+1)$.</p><div class="sbox">$$C_n = \frac{(n-1)n(n+1)}2.$$</div>`, rappels: ["ca-double"] },
    { q: 1, t: "Vérification et calcul direct", b: R`<p>$n = 3$ : $(1+2)+(1+3)+(2+3) = 12 = \frac{2\cdot3\cdot4}2$ ✓.</p><p><b>Directement</b> : pour $q$ fixé, $\sum_{p=1}^{q-1}(p+q) = \frac{(q-1)q}2+(q-1)q = \frac32q(q-1)$. Puis</p>$$C_n = \frac32\sum_{q=1}^n(q^2-q) = \frac32\Big(\frac{n(n+1)(2n+1)}6-\frac{n(n+1)}2\Big) = \frac32\cdot\frac{n(n+1)(2n-2)}6 = \frac{(n-1)n(n+1)}2.$$` }
  ],
  piege: R`Oublier la diagonale : $\sum_{p,q} = 2C_n+\sum_{p = q}$.`,
  methode: R`Somme sur $p< q$ d'une expression symétrique : passer par la somme sur tout le carré.`
},
/* ---------- Produits ---------- */
{ id: "ca-24", ...P, level: 1, time: "10 min",
  title: "Règles de calcul sur les produits",
  enonce: R`<p>Parmi les formules suivantes, lesquelles sont vraies ? ${AJ} Corriger les formules fausses (ou donner un contre-exemple).</p><ol style="list-style:lower-alpha"><li>$\displaystyle\prod_{i=1}^n\alpha a_i = \alpha\prod_{i=1}^na_i$</li><li>$\displaystyle\prod_{i=1}^na_ib_i = \prod_{i=1}^na_i\prod_{i=1}^nb_i$</li><li>$\displaystyle\prod_{i=1}^n(a_i+b_i) = \prod_{i=1}^na_i+\prod_{i=1}^nb_i$</li></ol>`,
  decode: { donnees: [], but: R`Connaître les règles de calcul sur $\prod$.`, cles: {} },
  steps: [
    { q: 1, t: "Réponses", h: R`<p>Teste avec $n = 2$.</p>`, b: R`<ul><li><b>a)</b> fausse : $\alpha$ apparaît $n$ fois. Formule correcte : $\prod_{i=1}^n\alpha a_i = \alpha^n\prod_{i=1}^na_i$. Contre-exemple : $n = 2$, $\alpha = 2$, $a_i = 1$ : $4\neq2$.</li><li><b>b)</b> vraie : on regroupe les facteurs (commutativité du produit).</li><li><b>c)</b> fausse : $n = 2$, $a_i = b_i = 1$ : $\prod(a_i+b_i) = 4$, mais $\prod a_i+\prod b_i = 2$. En développant, on obtient $2^n$ termes, pas seulement deux.</li></ul><div class="sbox">$$\text{Seule b) est vraie.}$$</div>` }
  ],
  piege: R`Sortir une constante d'un produit sans la mettre à la puissance $n$.`,
  methode: R`$\prod$ se comporte comme $\sum$ en remplaçant $+$ par $\times$ : une constante sort à la puissance $n$.`
},
{ id: "ca-25", ...P, level: 1, time: "10 min",
  title: "Deux produits télescopiques",
  enonce: R`<ol><li>Calculer $\displaystyle\prod_{k=1}^n\Big(1+\frac1k\Big)$.</li><li>${AJ} Calculer $\displaystyle\prod_{k=2}^n\Big(1-\frac1{k^2}\Big)$ pour $n\geqslant2$, et sa limite.</li></ol>`,
  decode: { donnees: [], but: R`Simplifier des produits en cascade.`, cles: {
    fact: R`$1-\frac1{k^2} = \frac{(k-1)(k+1)}{k^2} = \frac{k-1}k\cdot\frac{k+1}k$.` } },
  steps: [
    { q: 1, t: "Le premier produit", b: R`$$\prod_{k=1}^n\Big(1+\frac1k\Big) = \prod_{k=1}^n\frac{k+1}k = \frac21\cdot\frac32\cdots\frac{n+1}n.$$<div class="sbox">$$\prod_{k=1}^n\Big(1+\frac1k\Big) = n+1.$$</div>`, rappels: ["ca-telesc"] },
    { q: 2, t: "Le second produit", h: R`<p><span data-k="fact">Factorise $1-\frac1{k^2}$</span>, puis sépare en deux produits télescopiques.</p>`, b: R`<p><span data-k="fact">On factorise</span> : $1-\frac1{k^2} = \frac{k-1}k\cdot\frac{k+1}k$. Donc</p>$$\prod_{k=2}^n\Big(1-\frac1{k^2}\Big) = \prod_{k=2}^n\frac{k-1}k\times\prod_{k=2}^n\frac{k+1}k = \frac1n\times\frac{n+1}2.$$<div class="sbox">$$\prod_{k=2}^n\Big(1-\frac1{k^2}\Big) = \frac{n+1}{2n}\xrightarrow[n\to+\infty]{}\frac12.$$</div><p>Vérification $n = 2$ : $\frac34 = \frac34$ ✓.</p>`, rappels: ["ca-telesc"] }
  ],
  piege: R`Mal identifier les facteurs restants : dans $\prod_{k=2}^n\frac{k+1}k$, il reste $\frac{n+1}2$ (et non $n+1$).`,
  methode: R`Produit de fractions : écrire chaque facteur comme $\frac{a_{k+1}}{a_k}$ pour télescoper.`
},
{ id: "ca-26", ...P, level: 2, time: "20 min",
  title: "Le produit des cos(2ᵏx)",
  enonce: R`<p>On veut calculer $P(x) = \displaystyle\prod_{k=0}^n\cos(2^kx)$ pour tout $x\in\mathbb R$.</p><ol><li>Traiter le cas $x\equiv0\ [\pi]$.</li><li>Pour $x\not\equiv0\ [\pi]$, simplifier $\sin(x)P(x)$ et exprimer $P(x)$.</li><li>${AJ} En déduire $\cos\frac\pi7\cos\frac{2\pi}7\cos\frac{4\pi}7$.</li></ol>`,
  decode: { donnees: [R`$\sin(2a) = 2\sin a\cos a$.`], but: R`Simplifier un produit de cosinus en cascade.`, cles: {
    duplic: R`$\sin(2^kx)\cos(2^kx) = \frac12\sin(2^{k+1}x)$ : chaque cosinus « double » le sinus.` } },
  steps: [
    { q: 1, t: "Le cas x ≡ 0 [π]", b: R`<p>$x = m\pi$ avec $m\in\mathbb Z$. Pour $k\geqslant1$, $2^kx$ est un multiple pair de $\pi$, donc $\cos(2^kx) = 1$. Il reste $P(x) = \cos(m\pi) = (-1)^m$.</p><div class="sbox">$$P(x) = 1\ \text{si}\ x\equiv0\ [2\pi],\qquad P(x) = -1\ \text{si}\ x\equiv\pi\ [2\pi].$$</div>` },
    { q: 2, t: "Multiplier par sin x", h: R`<p><span data-k="duplic">Utilise $\sin a\cos a = \frac12\sin 2a$ en cascade</span>.</p>`, b: R`<p><span data-k="duplic">En regroupant de proche en proche</span> :</p>$$\sin x\cos x = \tfrac12\sin2x,\quad\tfrac12\sin2x\cos2x = \tfrac14\sin4x,\ \dots$$<p>Par récurrence immédiate sur $n$ :</p>$$\sin(x)\,P(x) = \frac1{2^{n+1}}\sin(2^{n+1}x).$$<p>Comme $\sin x\neq0$ :</p><div class="sbox">$$P(x) = \frac{\sin(2^{n+1}x)}{2^{n+1}\sin x}.$$</div>` },
    { q: 3, t: "Application", b: R`<p>Avec $x = \frac\pi7$ et $n = 2$ : $P = \frac{\sin\frac{8\pi}7}{8\sin\frac\pi7}$. Or $\sin\frac{8\pi}7 = \sin\big(\pi+\frac\pi7\big) = -\sin\frac\pi7$.</p><div class="sbox">$$\cos\frac\pi7\cos\frac{2\pi}7\cos\frac{4\pi}7 = -\frac18.$$</div>${B("la formule de Viète", R`<p>Le même calcul donne $\prod_{k=1}^n\cos\frac x{2^k} = \frac{\sin x}{2^n\sin\frac x{2^n}}$, qui tend vers $\frac{\sin x}x$ (car $2^n\sin\frac x{2^n}\to x$). Avec $x = \frac\pi2$ : $\frac2\pi = \frac{\sqrt2}2\cdot\frac{\sqrt{2+\sqrt2}}2\cdots$ (Viète, 1593).</p>`)}` }
  ],
  piege: R`Diviser par $\sin x$ sans avoir écarté le cas $x\equiv0\ [\pi]$.`,
  methode: R`Produit de $\cos(2^kx)$ : multiplier par $\sin x$ et appliquer $2\sin a\cos a = \sin2a$ en cascade.`
},
{ id: "ca-27", ...P, level: 2, time: "15 min",
  title: "Un produit qui donne une somme géométrique",
  enonce: R`<p>Soient $a\in\mathbb R$ et $P = \displaystyle\prod_{k=0}^n\big(1+a^{2^k}\big)$.</p><ol><li>Calculer $P$ quand $a = 1$.</li><li>Calculer $(1-a)P$ quand $a\neq1$ et en déduire $P$.</li><li>Comment expliquer la formule obtenue ?</li></ol>`,
  decode: { donnees: [R`$(1-u)(1+u) = 1-u^2$.`], but: R`Simplifier le produit en cascade, puis l'interpréter.`, cles: {
    cascade: R`$(1-a)(1+a) = 1-a^2$, puis $(1-a^2)(1+a^2) = 1-a^4$, etc.` } },
  steps: [
    { q: 1, t: "a = 1", b: R`<p>Chaque facteur vaut $2$ et il y en a $n+1$ :</p><div class="sbox">$$P = 2^{n+1}.$$</div>` },
    { q: 2, t: "Multiplier par 1 − a", h: R`<p><span data-k="cascade">Identité remarquable en cascade</span>.</p>`, b: R`<p><span data-k="cascade">En appliquant $(1-u)(1+u) = 1-u^2$ de proche en proche</span> :</p>$$(1-a)(1+a)(1+a^2)\cdots(1+a^{2^n}) = (1-a^2)(1+a^2)\cdots = (1-a^4)\cdots = 1-a^{2^{n+1}}.$$<div class="sbox">$$P = \frac{1-a^{2^{n+1}}}{1-a}\qquad(a\neq1).$$</div>` },
    { q: 3, t: "Interprétation", b: R`<p>La formule obtenue est celle de la somme géométrique $1+a+a^2+\dots+a^{2^{n+1}-1}$.</p><p>En développant le produit, on choisit dans chaque facteur $1$ ou $a^{2^k}$ : on obtient tous les termes $a^{\varepsilon_02^0+\varepsilon_12^1+\dots+\varepsilon_n2^n}$ avec $\varepsilon_k\in\{0,1\}$. Or tout entier de $[\![0,2^{n+1}-1]\!]$ s'écrit de façon unique en binaire avec $n+1$ chiffres. Chaque puissance $a^m$, $0\leqslant m\leqslant2^{n+1}-1$, apparaît exactement une fois :</p><div class="sbox">$$\prod_{k=0}^n\big(1+a^{2^k}\big) = \sum_{m=0}^{2^{n+1}-1}a^m.$$</div>`, rappels: ["ca-geo"] }
  ],
  piege: R`Confondre $a^{2^k}$ (exposant $2^k$) et $(a^2)^k = a^{2k}$.`,
  methode: R`Un produit qui « se télescope » par une identité remarquable : multiplier par le facteur qui amorce la cascade.`
},
{ id: "ca-28", ...P, level: 1, time: "10 min",
  title: "Un produit télescopique de quotients d'impairs",
  enonce: R`<p>Pour $n\in\mathbb N^*$, simplifier $\displaystyle\prod_{k=1}^n\frac{2k+3}{2k-1}$.</p>`,
  decode: { donnees: [], but: R`Simplifier un produit télescopique « à pas $2$ ».`, cles: {
    decal: R`Les numérateurs $5,7,\dots,2n+3$ et dénominateurs $1,3,\dots,2n-1$ ont les impairs de $5$ à $2n-1$ en commun.` } },
  steps: [
    { q: 1, t: "Simplifier", h: R`<p><span data-k="decal">Écris numérateurs et dénominateurs en liste</span>.</p>`, b: R`<p>Pour $n\geqslant2$ :</p>$$\prod_{k=1}^n\frac{2k+3}{2k-1} = \frac{5\times7\times\dots\times(2n+1)(2n+3)}{1\times3\times5\times\dots\times(2n-1)}.$$<p><span data-k="decal">Les facteurs $5,\dots,2n-1$ se simplifient</span> ; il reste $(2n+1)(2n+3)$ en haut et $1\times3$ en bas :</p><div class="sbox">$$\prod_{k=1}^n\frac{2k+3}{2k-1} = \frac{(2n+1)(2n+3)}3.$$</div><p>Pour $n = 1$ : le produit vaut $5 = \frac{3\times5}3$ ✓. La formule vaut pour tout $n\geqslant1$. (Avec $a_k = (2k-1)(2k+1)$, chaque facteur s'écrit $\frac{a_{k+1}}{a_k}$ : c'est un télescopage.)</p>`, rappels: ["ca-telesc"] }
  ],
  piege: R`Le décalage est de deux crans : il reste deux facteurs en haut et deux en bas.`,
  methode: R`Produit de quotients décalés : écrire les listes, ou trouver $a_k$ avec $\frac{a_{k+1}}{a_k}$.`
},
/* ---------- Factorielles ---------- */
{ id: "ca-29", ...P, level: 1, time: "10 min",
  title: "Produits des pairs et des impairs",
  enonce: R`<ol><li>Exprimer $2\times4\times\dots\times(2n)$ puis $1\times3\times\dots\times(2n+1)$ à l'aide de factorielles.</li><li>${AJ} En déduire $\dbinom{2n}n = \dfrac{2^n\times1\times3\times\dots\times(2n-1)}{n!}$.</li></ol>`,
  decode: { donnees: [], but: R`Exprimer les produits de pairs et d'impairs avec des factorielles.`, cles: {
    trou: R`Le produit des impairs est $(2n+1)!$ divisé par le produit des pairs qui manquent.` } },
  steps: [
    { q: 1, t: "Les deux produits", h: R`<p>Sors un $2$ de chaque facteur pair. Pour les impairs, <span data-k="trou">insère les pairs manquants</span>.</p>`, b: R`<p><b>Pairs</b> : $2\times4\times\dots\times(2n) = (2\times1)(2\times2)\cdots(2\times n) = 2^n\,n!$.</p><p><b>Impairs</b> : <span data-k="trou">on complète avec les pairs</span> :</p>$$1\times3\times\dots\times(2n+1) = \frac{1\times2\times3\times\dots\times(2n+1)}{2\times4\times\dots\times(2n)} = \frac{(2n+1)!}{2^nn!}.$$<div class="sbox">$$\prod_{k=1}^n(2k) = 2^nn!,\qquad\prod_{k=0}^n(2k+1) = \frac{(2n+1)!}{2^nn!}.$$</div>`, rappels: ["ca-fact"] },
    { q: 2, t: "Application au coefficient central", b: R`<p>Au rang $n-1$ : $1\times3\times\dots\times(2n-1) = \frac{(2n-1)!}{2^{n-1}(n-1)!} = \frac{(2n)!}{2^nn!}$ (multiplier en haut et en bas par $2n$). Donc $(2n)! = 2^nn!\times1\times3\times\dots\times(2n-1)$ et</p><div class="sbox">$$\binom{2n}n = \frac{(2n)!}{(n!)^2} = \frac{2^n\times1\times3\times\dots\times(2n-1)}{n!}.$$</div><p>Vérification $n = 3$ : $\frac{8\times15}6 = 20 = \binom63$ ✓.</p>` }
  ],
  piege: R`Écrire $2\times4\times\dots\times(2n) = 2n!$ : c'est $2^n\,n!$.`,
  methode: R`Produit des impairs : multiplier et diviser par le produit des pairs.`
},
{ id: "ca-30", ...P, level: 1, time: "15 min",
  title: "Produit des 4k − 2 et des n + k",
  enonce: R`<p>Montrer de deux manières que pour tout $n\in\mathbb N^*$ :$$\prod_{k=1}^n(4k-2) = \prod_{k=1}^n(n+k).$$</p>`,
  decode: { donnees: [R`$4k-2 = 2(2k-1)$.`], but: R`Comparer deux produits, par récurrence puis par calcul direct.`, cles: {
    rec: R`En passant de $n$ à $n+1$, le produit de droite perd $n+1$ et gagne $(2n+1)(2n+2)$.` } },
  steps: [
    { q: 1, t: "Par récurrence", h: R`<p><span data-k="rec">Calcule le quotient des membres de droite entre $n+1$ et $n$</span>.</p>`, b: R`<p><b>Initialisation</b> : $4-2 = 2 = 1+1$ ✓.</p><p><b>Hérédité</b> : le membre de gauche est multiplié par $4(n+1)-2 = 4n+2$. Celui de droite : $\prod_{k=1}^{n+1}(n+1+k) = (n+2)\cdots(2n+2)$, et <span data-k="rec">par rapport à $(n+1)\cdots(2n)$</span>, on a perdu $n+1$ et gagné $(2n+1)(2n+2)$ :</p>$$\prod_{k=1}^{n+1}(n+1+k) = \prod_{k=1}^n(n+k)\times\frac{(2n+1)(2n+2)}{n+1} = \prod_{k=1}^n(n+k)\times(4n+2).$$<p>Les deux membres sont multipliés par le même nombre : l'égalité passe au rang $n+1$.</p>`, rappels: ["ca-rec"] },
    { q: 1, t: "Calcul direct", b: R`$$\prod_{k=1}^n(4k-2) = 2^n\prod_{k=1}^n(2k-1) = 2^n\cdot\frac{(2n)!}{2^nn!} = \frac{(2n)!}{n!},\qquad\prod_{k=1}^n(n+k) = (n+1)\cdots(2n) = \frac{(2n)!}{n!}.$$<div class="sbox">$$\prod_{k=1}^n(4k-2) = \prod_{k=1}^n(n+k) = \frac{(2n)!}{n!}.$$</div>`, rappels: ["ca-fact"] }
  ],
  piege: R`Dans l'hérédité, oublier que le produit de droite change aussi de premier facteur (il commence à $n+2$).`,
  methode: R`Identité entre produits : tout exprimer avec des factorielles.`
},
/* ---------- Coefficients binomiaux ---------- */
{ id: "ca-31", ...P, level: 1, time: "15 min",
  title: "La formule du capitaine",
  enonce: R`<ol><li>Montrer que pour tout $n\in\mathbb N^*$ et tout $p\in\mathbb Z$ : $p\dbinom np = n\dbinom{n-1}{p-1}$.</li><li>En déduire $\displaystyle\sum_{p=0}^np\binom np = n2^{n-1}$.</li><li>${AJ} Donner une preuve par dénombrement de la formule de la question 1.</li></ol>`,
  decode: { donnees: [R`$\binom np = 0$ si $p< 0$ ou $p> n$.`], but: R`Établir $p\binom np = n\binom{n-1}{p-1}$ et l'utiliser.`, cles: {} },
  steps: [
    { q: 1, t: "Par le calcul", h: R`<p>Traite à part les $p$ hors de $[\![1,n]\!]$.</p>`, b: R`<ul><li>Si $p\leqslant0$ ou $p> n$ : les deux membres sont nuls ($p = 0$ annule le membre de gauche ; $\binom{n-1}{p-1} = 0$ car $p-1\notin[\![0,n-1]\!]$).</li><li>Si $1\leqslant p\leqslant n$ :</li></ul>$$p\binom np = p\frac{n!}{p!\,(n-p)!} = \frac{n\,(n-1)!}{(p-1)!\,(n-p)!} = n\binom{n-1}{p-1},$$<p>car $(n-1)-(p-1) = n-p$.</p>`, rappels: ["ca-pascal"] },
    { q: 2, t: "La somme", b: R`$$\sum_{p=0}^np\binom np = n\sum_{p=1}^n\binom{n-1}{p-1} = n\sum_{j=0}^{n-1}\binom{n-1}j = n\,2^{n-1}.$$<div class="sbox">$$\sum_{p=0}^np\binom np = n2^{n-1}.$$</div>`, rappels: ["ca-binome"] },
    { q: 3, t: "Par dénombrement", b: R`<p>On compte les comités de $p$ personnes parmi $n$, avec un président choisi dans le comité.</p><ul><li>Choisir le comité ($\binom np$ façons), puis son président ($p$ façons) : $p\binom np$.</li><li>Choisir le président parmi les $n$ ($n$ façons), puis les $p-1$ autres membres parmi les $n-1$ restants : $n\binom{n-1}{p-1}$.</li></ul><p>Les deux comptages dénombrent le même ensemble : ils sont égaux. La somme de la question 2 compte de même les couples (comité quelconque, président) : $n$ choix du président, $2^{n-1}$ choix des autres membres.</p>` }
  ],
  piege: R`Oublier de traiter $p\leqslant0$ ou $p> n$, où la formule avec factorielles n'a pas de sens.`,
  methode: R`$k\binom nk = n\binom{n-1}{k-1}$ fait disparaître un facteur $k$ devant le binomial.`
},
{ id: "ca-32", ...P, level: 2, time: "25 min",
  title: "Sommes pondérées de coefficients binomiaux",
  enonce: R`<p>Calculer pour tout $n\in\mathbb N^*$ :</p><ol style="list-style:lower-alpha"><li>$S_0 = \displaystyle\sum_{k=0}^n\binom nk$ ;</li><li>$S_1 = \displaystyle\sum_{k=0}^nk\binom nk$ ;</li><li>$S_2 = \displaystyle\sum_{k=0}^nk^2\binom nk$ ;</li><li>${AJ} $T = \displaystyle\sum_{k=0}^n\frac1{k+1}\binom nk$.</li></ol>`,
  decode: { donnees: [R`$k\binom nk = n\binom{n-1}{k-1}$.`], but: R`Calculer des sommes pondérées de binomiaux.`, cles: {
    kk1: R`$k^2 = k(k-1)+k$, et $k(k-1)\binom nk = n(n-1)\binom{n-2}{k-2}$.`,
    inv: R`$\frac1{k+1}\binom nk = \frac1{n+1}\binom{n+1}{k+1}$.` } },
  steps: [
    { q: 1, t: "S₀ et S₁", b: R`<p>Binôme avec $a = b = 1$ : $S_0 = 2^n$. Formule du capitaine : $S_1 = n\sum_{k=1}^n\binom{n-1}{k-1} = n2^{n-1}$.</p><div class="sbox">$$S_0 = 2^n,\qquad S_1 = n2^{n-1}.$$</div><p>(Autre méthode : dériver $(1+x)^n = \sum\binom nkx^k$ et prendre $x = 1$.)</p>`, rappels: ["ca-binome", "ca-pascal"] },
    { q: 1, t: "S₂", h: R`<p><span data-k="kk1">Écris $k^2 = k(k-1)+k$</span> et applique deux fois la formule du capitaine.</p>`, b: R`<p><span data-k="kk1">Pour $k\geqslant2$, en appliquant deux fois la formule du capitaine</span> : $k(k-1)\binom nk = (k-1)\,n\binom{n-1}{k-1} = n(n-1)\binom{n-2}{k-2}$. Donc, pour $n\geqslant2$,</p>$$\sum_{k=0}^nk(k-1)\binom nk = n(n-1)\sum_{k=2}^n\binom{n-2}{k-2} = n(n-1)2^{n-2},$$<p>et $S_2 = n(n-1)2^{n-2}+n2^{n-1} = n2^{n-2}(n-1+2)$.</p><div class="sbox">$$S_2 = n(n+1)2^{n-2}.$$</div><p>La formule vaut aussi pour $n = 1$ : $S_2 = 1 = 1\cdot2\cdot2^{-1}$ ✓.</p>` },
    { q: 1, t: "T", h: R`<p><span data-k="inv">Formule du capitaine « à l'envers »</span> : $(k+1)\binom{n+1}{k+1} = (n+1)\binom nk$.</p>`, b: R`<p>La formule du capitaine avec $n+1$ et $k+1$ donne $(k+1)\binom{n+1}{k+1} = (n+1)\binom nk$, donc <span data-k="inv">$\frac1{k+1}\binom nk = \frac1{n+1}\binom{n+1}{k+1}$</span> :</p>$$T = \frac1{n+1}\sum_{k=0}^n\binom{n+1}{k+1} = \frac1{n+1}\sum_{j=1}^{n+1}\binom{n+1}j = \frac{2^{n+1}-1}{n+1}.$$<div class="sbox">$$\sum_{k=0}^n\frac1{k+1}\binom nk = \frac{2^{n+1}-1}{n+1}.$$</div><p>(Autre méthode : intégrer $(1+x)^n$ entre $0$ et $1$.)</p>` }
  ],
  piege: R`Appliquer la formule du capitaine au terme $k = 0$ : il est nul, on commence la somme à $k = 1$.`,
  methode: R`Sommes $\sum P(k)\binom nk$ : décomposer $P(k)$ sur $1$, $k$, $k(k-1)$… et utiliser la formule du capitaine.`
},
{ id: "ca-33", ...P, level: 1, time: "10 min",
  title: "Binomiaux d'indice pair, d'indice impair",
  enonce: R`<p>Pour $n\in\mathbb N^*$, calculer $A = \displaystyle\sum_{k=0}^{\lfloor n/2\rfloor}\binom n{2k}$ et $B = \displaystyle\sum_{k=0}^{\lfloor(n-1)/2\rfloor}\binom n{2k+1}$ en formant un système dont $A$ et $B$ sont solutions.</p>`,
  decode: { donnees: [], but: R`Séparer les termes pairs et impairs avec $(1\pm1)^n$.`, cles: {
    sys: R`$A+B = (1+1)^n$ et $A-B = (1-1)^n$.` } },
  steps: [
    { q: 1, t: "Le système", h: R`<p><span data-k="sys">Binôme avec $(1,1)$ puis $(-1,1)$</span>.</p>`, b: R`<p>$A$ regroupe les $\binom np$ pour $p$ pair, $B$ pour $p$ impair. <span data-k="sys">Par la formule du binôme</span> :</p>$$A+B = \sum_{p=0}^n\binom np = 2^n,\qquad A-B = \sum_{p=0}^n(-1)^p\binom np = (1-1)^n = 0\quad(n\geqslant1).$$<div class="sbox">$$A = B = 2^{n-1}.$$</div><p>Dénombrement : un ensemble à $n\geqslant1$ éléments a autant de parties de cardinal pair que de cardinal impair (on ajoute ou on retire un élément fixé).</p>`, rappels: ["ca-binome"] }
  ],
  piege: R`Oublier $n\geqslant1$ : pour $n = 0$, $(1-1)^0 = 1$.`,
  methode: R`Pour isoler les termes pairs (ou impairs) d'une somme, combiner les valeurs en $x = 1$ et $x = -1$.`
},
{ id: "ca-34", ...P, level: 3, time: "30 min",
  title: "Binomiaux d'indice multiple de 3",
  enonce: R`<p>Soit $n\in\mathbb N$ et $j = e^{2i\pi/3}$.</p><ol><li>Calculer $\displaystyle\sum_{p=0}^n\binom npj^p$.</li><li>En déduire $A = \displaystyle\sum_{k=0}^{\lfloor n/3\rfloor}\binom n{3k}$, $B = \displaystyle\sum_{k=0}^{\lfloor(n-1)/3\rfloor}\binom n{3k+1}$ et $C = \displaystyle\sum_{k=0}^{\lfloor(n-2)/3\rfloor}\binom n{3k+2}$.</li><li>${AJ} Vérifier pour $n = 1$ et $n = 3$.</li></ol>`,
  decode: { donnees: [R`$j^3 = 1$, $1+j+j^2 = 0$, $\bar j = j^2$.`], but: R`Généraliser l'exercice précédent avec les racines cubiques de l'unité.`, cles: {
    unj: R`$1+j = -j^2 = e^{i\pi/3}$.`,
    filtre: R`$j^p$ ne dépend que du reste de $p$ modulo $3$ : $1$, $j$ ou $j^2$.` } },
  steps: [
    { q: 1, t: "La somme avec j", h: R`<p>Binôme, puis <span data-k="unj">calcule $1+j$</span>.</p>`, b: R`<p>Par la formule du binôme, $\sum_p\binom npj^p = (1+j)^n$. Or <span data-k="unj">$1+j = -j^2 = e^{i\pi/3}$</span> (car $1+j+j^2 = 0$ et $-j^2 = e^{i\pi}e^{4i\pi/3} = e^{i\pi/3}$).</p><div class="sbox">$$\sum_{p=0}^n\binom npj^p = e^{in\pi/3}.$$</div>`, rappels: ["ca-binome", "ca-j"] },
    { q: 2, t: "Le système", h: R`<p><span data-k="filtre">Regroupe les $p$ selon leur reste modulo $3$</span>.</p>`, b: R`<p><span data-k="filtre">Comme $j^{3k} = 1$, $j^{3k+1} = j$ et $j^{3k+2} = j^2$</span> :</p>$$\begin{cases}A+B+C = (1+1)^n = 2^n\\A+jB+j^2C = e^{in\pi/3}\\A+j^2B+jC = e^{-in\pi/3}\quad(\text{conjugué})\end{cases}$$<p><b>$A$</b> : on additionne les trois lignes, avec $1+j+j^2 = 0$ : $3A = 2^n+2\cos\frac{n\pi}3$.</p><p><b>$B$</b> : on multiplie la 2<sup>e</sup> ligne par $j^2$ et la 3<sup>e</sup> par $j$, puis on additionne : $3B = 2^n+j^2e^{in\pi/3}+je^{-in\pi/3} = 2^n+2\,\mathrm{Re}\big(e^{i(n-2)\pi/3}\big)$, car $j^2 = e^{-2i\pi/3}$.</p><p><b>$C$</b> : 2<sup>e</sup> ligne par $j$, 3<sup>e</sup> par $j^2$ : $3C = 2^n+2\cos\frac{(n+2)\pi}3$.</p><div class="sbox">$$A = \frac{2^n+2\cos\frac{n\pi}3}3,\quad B = \frac{2^n+2\cos\frac{(n-2)\pi}3}3,\quad C = \frac{2^n+2\cos\frac{(n+2)\pi}3}3.$$</div>` },
    { q: 3, t: "Vérifications", b: R`<ul><li>$n = 1$ : $A = \frac{2+1}3 = 1 = \binom10$, $B = \frac{2+2\cos(-\frac\pi3)}3 = 1 = \binom11$, $C = \frac{2+2\cos\pi}3 = 0$ ✓.</li><li>$n = 3$ : $A = \frac{8+2\cos\pi}3 = 2 = \binom30+\binom33$, $B = \frac{8+2\cos\frac\pi3}3 = 3 = \binom31$, $C = \frac{8+2\cos\frac{5\pi}3}3 = 3 = \binom32$ ✓.</li></ul><p>Les trois sommes valent toujours $\frac{2^n}3$ à moins de $1$ près.</p>` }
  ],
  piege: R`Se tromper dans la multiplication de la 2<sup>e</sup> ligne : pour isoler $B$, il faut que $jB$ devienne $B$, donc multiplier par $j^2$.`,
  methode: R`Filtrer les indices multiples de $m$ : combiner $(1+\omega)^n$ pour les racines $m$-ièmes de l'unité $\omega$.`
},
{ id: "ca-35", ...P, level: 2, time: "15 min",
  title: "Formule de Vandermonde",
  enonce: R`<p>Soient $n,p,q\in\mathbb N$ avec $n\leqslant p+q$.</p><ol><li>En développant de deux manières $(1+x)^p(1+x)^q$, établir $\displaystyle\sum_{k=0}^n\binom pk\binom q{n-k} = \binom{p+q}n$.</li><li>${AJ} En déduire $\displaystyle\sum_{k=0}^n\binom nk^2 = \binom{2n}n$.</li><li>${AJ} Interpréter la formule de la question 1 par un dénombrement.</li></ol>`,
  decode: { donnees: [], but: R`Identifier le coefficient de $x^n$ dans un produit de polynômes.`, cles: {
    coef: R`Dans le produit, $x^n$ s'obtient en multipliant $x^k$ (premier facteur) par $x^{n-k}$ (second).` } },
  steps: [
    { q: 1, t: "Identifier un coefficient", h: R`<p><span data-k="coef">Coefficient de $x^n$ dans le produit</span>.</p>`, b: R`<p>D'une part $(1+x)^p(1+x)^q = (1+x)^{p+q}$, où le coefficient de $x^n$ est $\binom{p+q}n$.</p><p>D'autre part, $(1+x)^p = \sum_k\binom pkx^k$ et $(1+x)^q = \sum_m\binom qmx^m$. <span data-k="coef">Dans le produit, $x^n$ s'obtient en croisant $x^k$ et $x^{n-k}$</span>, pour $0\leqslant k\leqslant n$ : le coefficient de $x^n$ est $\sum_{k=0}^n\binom pk\binom q{n-k}$ (les termes hors bornes sont nuls).</p><p>Deux polynômes égaux ont les mêmes coefficients :</p><div class="sbox">$$\sum_{k=0}^n\binom pk\binom q{n-k} = \binom{p+q}n.$$</div>`, rappels: ["ca-binome"] },
    { q: 2, t: "Somme des carrés", b: R`<p>Avec $p = q = n$ et la symétrie $\binom n{n-k} = \binom nk$ :</p><div class="sbox">$$\sum_{k=0}^n\binom nk^2 = \binom{2n}n.$$</div><p>Vérification $n = 2$ : $1+4+1 = 6 = \binom42$ ✓.</p>`, rappels: ["ca-pascal"] },
    { q: 3, t: "Dénombrement", b: R`<p>Une classe a $p$ filles et $q$ garçons. Choisir $n$ élèves parmi les $p+q$ : $\binom{p+q}n$ façons. On peut aussi classer les choix selon le nombre $k$ de filles : $\binom pk$ choix des filles, $\binom q{n-k}$ choix des garçons. En sommant sur $k$, on retrouve la formule.</p>` }
  ],
  piege: R`Oublier que les termes avec $k> p$ ou $n-k> q$ sont nuls : la somme peut s'écrire de $0$ à $n$ sans précaution.`,
  methode: R`Identité entre sommes de produits de binomiaux : chercher un coefficient dans un produit de polynômes.`
},
{ id: "ca-36", ...P, level: 2, time: "15 min",
  title: "Formule de la crosse de hockey",
  enonce: R`<ol><li>Calculer, pour tout $n,p\in\mathbb N$, $\displaystyle\sum_{k=0}^n\binom{p+k}k$.</li><li>${AJ} En déduire, avec $p = 1$ puis $p = 2$, les sommes $\sum_{k=0}^n(k+1)$ et $\sum_{k=0}^n\frac{(k+1)(k+2)}2$.</li></ol>`,
  decode: { donnees: [R`Pascal : $\binom{m}{k}+\binom{m}{k+1} = \binom{m+1}{k+1}$.`], but: R`Simplifier une somme de binomiaux le long d'une diagonale du triangle de Pascal.`, cles: {
    pascal: R`$\binom p0 = \binom{p+1}0$, puis $\binom{p+1}0+\binom{p+1}1 = \binom{p+2}1$, et ainsi de suite.` } },
  steps: [
    { q: 1, t: "Par la formule de Pascal", h: R`<p><span data-k="pascal">Remplace $\binom p0$ par $\binom{p+1}0$ et regroupe avec le terme suivant</span>.</p>`, b: R`<p>On montre par récurrence sur $n$ : $\sum_{k=0}^n\binom{p+k}k = \binom{p+n+1}n$.</p><p><b>Initialisation</b> : $\binom p0 = 1 = \binom{p+1}0$.</p><p><b>Hérédité</b> : $\sum_{k=0}^{n+1}\binom{p+k}k = \binom{p+n+1}n+\binom{p+n+1}{n+1} = \binom{p+n+2}{n+1}$ (formule de Pascal).</p><div class="sbox">$$\sum_{k=0}^n\binom{p+k}k = \binom{p+n+1}n.$$</div><p>Dans le triangle de Pascal, les termes forment une diagonale et le résultat est juste en dessous du dernier : d'où le nom « crosse de hockey ».</p>`, rappels: ["ca-pascal", "ca-rec"] },
    { q: 2, t: "Applications", b: R`<ul><li>$p = 1$ : $\binom{1+k}k = k+1$, donc $\sum_{k=0}^n(k+1) = \binom{n+2}n = \frac{(n+1)(n+2)}2$ ✓.</li><li>$p = 2$ : $\binom{2+k}k = \frac{(k+1)(k+2)}2$, donc $\sum_{k=0}^n\frac{(k+1)(k+2)}2 = \binom{n+3}n = \frac{(n+1)(n+2)(n+3)}6$.</li></ul><p>On retrouve les sommes des nombres triangulaires (exercice 12).</p>` }
  ],
  piege: R`Mal placer les indices dans Pascal : on additionne deux coefficients de la même ligne, d'indices consécutifs.`,
  methode: R`Somme de binomiaux sur une diagonale : la formule de Pascal fait « glisser » la somme.`
},
{ id: "ca-37", ...P, level: 2, time: "15 min",
  title: "Somme de produits d'entiers consécutifs",
  enonce: R`<p>Calculer pour $n,p\in\mathbb N^*$ la somme $\displaystyle\sum_{i=0}^n\Big(\prod_{j=1}^p(i+j)\Big)$. ${AJ} Vérifier pour $p = 1$.</p>`,
  decode: { donnees: [R`$\prod_{j=1}^p(i+j) = (i+1)(i+2)\cdots(i+p) = \frac{(i+p)!}{i!}$.`], but: R`Se ramener à la formule de l'exercice 36.`, cles: {
    bin: R`$\frac{(i+p)!}{i!} = p!\binom{i+p}i$.` } },
  steps: [
    { q: 1, t: "Faire apparaître un binomial", h: R`<p><span data-k="bin">Écris le produit avec des factorielles, puis avec un binomial</span>.</p>`, b: R`<p><span data-k="bin">On a</span> $\prod_{j=1}^p(i+j) = \frac{(i+p)!}{i!} = p!\binom{i+p}i$. Avec l'exercice 36 :</p>$$\sum_{i=0}^n\prod_{j=1}^p(i+j) = p!\sum_{i=0}^n\binom{p+i}i = p!\binom{p+n+1}n = \frac{p!\,(p+n+1)!}{n!\,(p+1)!}.$$<div class="sbox">$$\sum_{i=0}^n\prod_{j=1}^p(i+j) = \frac{(n+p+1)!}{(p+1)\,n!}.$$</div>`, rappels: ["ca-pascal"] },
    { q: 1, t: "Vérification", b: R`<p>$p = 1$ : $\sum_{i=0}^n(i+1) = \frac{(n+2)!}{2\,n!} = \frac{(n+1)(n+2)}2$ ✓. Pour $p = 2$, on retrouve $\sum_{i=0}^n(i+1)(i+2) = \frac{(n+1)(n+2)(n+3)}3$ (exercice 12).</p>` }
  ],
  piege: R`Écrire $\prod_{j=1}^p(i+j) = \frac{(i+p)!}{(i+1)!}$ : le produit commence à $i+1$, on divise donc par $i!$.`,
  methode: R`Produit d'entiers consécutifs $=$ quotient de factorielles $=$ factorielle fois binomial.`
},
{ id: "ca-38", ...P, level: 2, time: "15 min",
  title: "Formule du trinôme",
  enonce: R`<ol><li>Développer $(a+b+c)^n$.</li><li>${AJ} Combien de termes distincts $a^ib^jc^k$ obtient-on ? Quel est le coefficient de $abc$ dans $(a+b+c)^3$ ?</li></ol>`,
  decode: { donnees: [], but: R`Appliquer deux fois la formule du binôme.`, cles: {
    deux: R`On écrit $a+b+c = a+(b+c)$ et on applique le binôme, puis à nouveau à $(b+c)^k$.` } },
  steps: [
    { q: 1, t: "Deux binômes", h: R`<p><span data-k="deux">$(a+b+c)^n = \big(a+(b+c)\big)^n$</span>.</p>`, b: R`$$(a+b+c)^n = \sum_{k=0}^n\binom nk(b+c)^ka^{n-k} = \sum_{k=0}^n\sum_{\ell=0}^k\binom nk\binom k\ell a^{n-k}b^{k-\ell}c^\ell.$$<p>Le coefficient se simplifie : $\binom nk\binom k\ell = \frac{n!}{(n-k)!\,(k-\ell)!\,\ell!}$. En notant $i = n-k$, $j = k-\ell$ :</p><div class="sbox">$$(a+b+c)^n = \sum_{i+j+\ell = n}\frac{n!}{i!\,j!\,\ell!}\,a^ib^jc^\ell.$$</div>`, rappels: ["ca-binome"] },
    { q: 2, t: "Nombre de termes", b: R`<p>Il y a un terme par triplet $(i,j,\ell)\in\mathbb N^3$ de somme $n$. Pour $k = n-i$ fixé de $0$ à $n$, il y a $k+1$ choix de $\ell$ : en tout $\sum_{k=0}^n(k+1) = \frac{(n+1)(n+2)}2$ termes.</p><p>Coefficient de $abc$ dans $(a+b+c)^3$ : $\frac{3!}{1!\,1!\,1!} = 6$ (les $3!$ ordres possibles pour choisir $a$, $b$, $c$ dans les trois facteurs).</p>` }
  ],
  piege: R`Croire que les coefficients sont des $\binom n\cdot$ : ce sont des coefficients multinomiaux $\frac{n!}{i!\,j!\,\ell!}$.`,
  methode: R`$(a_1+\dots+a_m)^n$ : regrouper, appliquer le binôme plusieurs fois, ou compter les choix dans chaque facteur.`
},
{ id: "ca-39", ...P, level: 3, time: "30 min",
  title: "Formule d'inversion de Pascal",
  enonce: R`<ol><li>Soit $n\in\mathbb N$. Calculer $\displaystyle\sum_{k=0}^n(-1)^k\binom nk$.</li><li>Soient $\ell\leqslant k\leqslant n$ des entiers. Comparer $\dbinom nk\dbinom k\ell$ et $\dbinom n\ell\dbinom{n-\ell}{k-\ell}$.</li><li>Soit $(x_n)$ une suite de réels, et $y_k = \displaystyle\sum_{\ell=0}^k\binom k\ell x_\ell$. Montrer que $x_n = \displaystyle\sum_{k=0}^n(-1)^{n-k}\binom nky_k$ pour tout $n$.</li><li>${AJ} Application : avec $x_\ell = 1$ pour tout $\ell$, que vaut $y_k$ ? Vérifier la formule pour $n = 2$.</li></ol>`,
  decode: { donnees: [], but: R`Inverser la relation $y = $ « transformée binomiale » de $x$.`, cles: {
    inter: R`On remplace $y_k$, puis on intervertit les deux sommes : $\sum_{k=0}^n\sum_{\ell=0}^k = \sum_{\ell=0}^n\sum_{k=\ell}^n$.`,
    delta: R`$\sum_{k=\ell}^n(-1)^{k-\ell}\binom{n-\ell}{k-\ell} = (1-1)^{n-\ell}$ vaut $1$ si $\ell = n$, $0$ sinon.` } },
  steps: [
    { q: 1, t: "Somme alternée", b: R`<p>Binôme : $\sum_k(-1)^k\binom nk = (1-1)^n$.</p><div class="sbox">$$\sum_{k=0}^n(-1)^k\binom nk = \begin{cases}1&\text{si }n = 0\\0&\text{si }n\geqslant1.\end{cases}$$</div>`, rappels: ["ca-binome"] },
    { q: 2, t: "Produit de binomiaux", b: R`$$\binom nk\binom k\ell = \frac{n!}{k!\,(n-k)!}\cdot\frac{k!}{\ell!\,(k-\ell)!} = \frac{n!}{\ell!\,(n-\ell)!}\cdot\frac{(n-\ell)!}{(k-\ell)!\,(n-k)!}.$$<div class="sbox">$$\binom nk\binom k\ell = \binom n\ell\binom{n-\ell}{k-\ell}.$$</div><p>Dénombrement : choisir $k$ éléments parmi $n$, puis $\ell$ parmi ces $k$ ; ou d'abord les $\ell$, puis les $k-\ell$ autres parmi les $n-\ell$ restants.</p>` },
    { q: 3, t: "Intervertir les sommes", h: R`<p><span data-k="inter">Remplace $y_k$ et intervertis</span>.</p>`, b: R`<p><span data-k="inter">On remplace $y_k$ et on intervertit</span> (les couples $(k,\ell)$ avec $0\leqslant\ell\leqslant k\leqslant n$) :</p>$$\sum_{k=0}^n(-1)^{n-k}\binom nky_k = \sum_{\ell=0}^nx_\ell\sum_{k=\ell}^n(-1)^{n-k}\binom nk\binom k\ell = \sum_{\ell=0}^nx_\ell\binom n\ell\sum_{k=\ell}^n(-1)^{n-k}\binom{n-\ell}{k-\ell}.$$<p>Avec $m = k-\ell$ : la somme intérieure vaut $(-1)^{n-\ell}\sum_{m=0}^{n-\ell}(-1)^m\binom{n-\ell}m$, c'est-à-dire <span data-k="delta">$1$ si $\ell = n$, $0$ sinon</span> (question 1). Il ne reste que le terme $\ell = n$ :</p><div class="sbox">$$\sum_{k=0}^n(-1)^{n-k}\binom nky_k = \binom nnx_n = x_n.$$</div>`, rappels: ["ca-double"] },
    { q: 4, t: "Application", b: R`<p>Si $x_\ell = 1$ : $y_k = \sum_\ell\binom k\ell = 2^k$. La formule donne $1 = \sum_{k=0}^n(-1)^{n-k}\binom nk2^k = (2-1)^n$ ✓ (binôme). Pour $n = 2$ : $1-2\cdot2+4 = 1$ ✓.</p>${B("dérangements", R`<p>Le nombre $d_n$ de permutations de $n$ éléments sans point fixe vérifie $n! = \sum_\ell\binom n\ell d_\ell$ (on choisit les points fixes). L'inversion donne $d_n = \sum_{k=0}^n(-1)^{n-k}\binom nkk!$, soit $d_n = n!\sum_{j=0}^n\frac{(-1)^j}{j!}$.</p>`)}` }
  ],
  piege: R`Intervertir les sommes en gardant les mêmes bornes : la contrainte $\ell\leqslant k$ fait passer $k$ de $\ell$ à $n$.`,
  methode: R`Somme double triangulaire : dessiner le triangle $\ell\leqslant k$ pour écrire les bornes dans l'autre ordre.`
},
{ id: "ca-40", ...P, level: 3, time: "25 min",
  title: "Une somme alternée égale à la série harmonique",
  enonce: R`<p>Montrer que pour tout $n\in\mathbb N^*$ :$$\sum_{k=1}^n\frac{(-1)^{k+1}}k\binom nk = \sum_{k=1}^n\frac1k.$$</p>`,
  decode: { donnees: [R`$\frac1k\binom n{k-1} = \frac1{n+1}\binom{n+1}k$.`], but: R`Montrer que les deux membres ont les mêmes accroissements.`, cles: {
    capit: R`Formule du capitaine : $k\binom{n+1}k = (n+1)\binom n{k-1}$.` } },
  steps: [
    { q: 1, t: "La différence Aₙ₊₁ − Aₙ", h: R`<p>Pascal : $\binom{n+1}k = \binom nk+\binom n{k-1}$.</p>`, b: R`<p>On note $A_n$ le membre de gauche. Avec Pascal ($\binom n{n+1} = 0$) :</p>$$A_{n+1} = \sum_{k=1}^{n+1}\frac{(-1)^{k+1}}k\binom nk+\sum_{k=1}^{n+1}\frac{(-1)^{k+1}}k\binom n{k-1} = A_n+\sum_{k=1}^{n+1}\frac{(-1)^{k+1}}k\binom n{k-1}.$$`, rappels: ["ca-pascal"] },
    { q: 1, t: "Calcul de la somme restante", h: R`<p><span data-k="capit">Formule du capitaine</span> pour remplacer $\frac1k\binom n{k-1}$.</p>`, b: R`<p><span data-k="capit">Par la formule du capitaine</span>, $\frac1k\binom n{k-1} = \frac1{n+1}\binom{n+1}k$. Donc</p>$$\sum_{k=1}^{n+1}\frac{(-1)^{k+1}}k\binom n{k-1} = \frac{-1}{n+1}\sum_{k=1}^{n+1}(-1)^k\binom{n+1}k = \frac{-1}{n+1}\big((1-1)^{n+1}-1\big) = \frac1{n+1}.$$<p>Ainsi $A_{n+1} = A_n+\frac1{n+1}$.</p>` },
    { q: 1, t: "Conclure par récurrence", b: R`<p>$A_1 = \binom11 = 1 = \sum_{k=1}^1\frac1k$. Si $A_n = H_n = \sum_{k=1}^n\frac1k$, alors $A_{n+1} = H_n+\frac1{n+1} = H_{n+1}$.</p><div class="sbox">$$\sum_{k=1}^n\frac{(-1)^{k+1}}k\binom nk = 1+\frac12+\dots+\frac1n.$$</div>${B("une preuve intégrale", R`<p>$\frac{1-(1-t)^n}t = \sum_{k=1}^n\binom nk(-1)^{k+1}t^{k-1}$ ; en intégrant sur $[0,1]$, on obtient $A_n$. Avec $u = 1-t$, l'intégrale vaut $\int_0^1\frac{1-u^n}{1-u}du = \int_0^1(1+u+\dots+u^{n-1})du = H_n$.</p>`)}`, rappels: ["ca-rec"] }
  ],
  piege: R`Oublier le terme $k = 0$ dans $(1-1)^{n+1} = \sum_{k=0}^{n+1}(-1)^k\binom{n+1}k$ : il vaut $1$ et doit être retiré.`,
  methode: R`Identité dépendant de $n$ : comparer les accroissements $A_{n+1}-A_n$ et $B_{n+1}-B_n$.`
},
{ id: "ca-41", ...P, level: 2, time: "15 min",
  title: "Somme alternée sur une demi-ligne de Pascal",
  enonce: R`<p>Calculer $S_n = \displaystyle\sum_{k=0}^n(-1)^k\binom{2n+1}k$. ${AJ} Vérifier pour $n = 1$ et $n = 2$.</p>`,
  decode: { donnees: [R`La somme s'arrête à $k = n$, au milieu de la ligne $2n+1$.`], but: R`Faire télescoper la somme avec la formule de Pascal.`, cles: {
    pascal: R`$\binom{2n+1}k = \binom{2n}{k-1}+\binom{2n}k$.` } },
  steps: [
    { q: 1, t: "Télescoper avec Pascal", h: R`<p><span data-k="pascal">Décompose chaque terme par la formule de Pascal</span>.</p>`, b: R`<p><span data-k="pascal">Avec Pascal</span> :</p>$$S_n = \sum_{k=0}^n(-1)^k\binom{2n}{k-1}+\sum_{k=0}^n(-1)^k\binom{2n}k.$$<p>Dans la première somme, le terme $k = 0$ est nul ; on pose $j = k-1$ : $\sum_{j=0}^{n-1}(-1)^{j+1}\binom{2n}j$. Les termes $j = 0,\dots,n-1$ s'annulent avec ceux de la seconde somme ; il reste le terme $k = n$ de la seconde :</p><div class="sbox">$$S_n = (-1)^n\binom{2n}n.$$</div>`, rappels: ["ca-pascal", "ca-indice"] },
    { q: 1, t: "Vérifications", b: R`<ul><li>$n = 1$ : $1-3 = -2 = -\binom21$ ✓.</li><li>$n = 2$ : $1-5+10 = 6 = \binom42$ ✓.</li></ul>` }
  ],
  piege: R`Mal décaler l'indice : $\binom{2n}{k-1}$ avec $k = 0$ vaut $0$.`,
  methode: R`Somme alternée de binomiaux tronquée : la formule de Pascal la rend télescopique.`
},
{ id: "ca-42", ...P, level: 3, time: "30 min",
  title: "n premier si et seulement si n divise ses binomiaux",
  enonce: R`<p>Soit $n\geqslant2$.</p><ol><li>On suppose $n$ premier. Montrer que $n$ divise $\binom nk$ pour tout $k\in\{1,\dots,n-1\}$.</li><li>Inversement, on suppose $n$ composé. Montrer qu'il existe $k\in\{1,\dots,n-1\}$ tel que $n$ ne divise pas $\binom nk$.</li><li>${AJ} Pour $p$ premier et $a,b\in\mathbb Z$, en déduire que $(a+b)^p-a^p-b^p$ est divisible par $p$, puis que $a^p-a$ est divisible par $p$ (petit théorème de Fermat).</li></ol>`,
  decode: { donnees: [R`$k\binom nk = n\binom{n-1}{k-1}$.`], but: R`Caractériser les nombres premiers par la divisibilité des binomiaux.`, cles: {
    gauss: R`$n$ divise $k\binom nk$ et $n$ est premier avec $k$ : lemme de Gauss.`,
    fact: R`Si $p$ premier divise $n = pq$ : $\binom np = q\binom{n-1}{p-1}$.` } },
  steps: [
    { q: 1, t: "n premier", h: R`<p><span data-k="gauss">Formule du capitaine, puis lemme de Gauss</span>.</p>`, b: R`<p>Par la formule du capitaine, $k\binom nk = n\binom{n-1}{k-1}$ : $n$ divise $k\binom nk$.</p><p>Comme $n$ est premier et $1\leqslant k\leqslant n-1$, $n$ ne divise pas $k$, donc $n\wedge k = 1$. <span data-k="gauss">Par le lemme de Gauss</span>, $n$ divise $\binom nk$.</p>`, rappels: ["ca-gauss", "ca-pascal"] },
    { q: 2, t: "n composé", h: R`<p>Prends $k = p$, un facteur premier de $n$, et <span data-k="fact">écris $\binom np$ avec $q = \frac np$</span>.</p>`, b: R`<p>Soit $p$ un facteur premier de $n$ : $n = pq$ avec $q\geqslant2$ (car $n$ composé), donc $2\leqslant p\leqslant n-1$. <span data-k="fact">La formule du capitaine</span> donne $p\binom np = n\binom{n-1}{p-1}$, soit $\binom np = q\binom{n-1}{p-1}$.</p><p>Ainsi $n = pq$ divise $\binom np$ si et seulement si $p$ divise $\binom{n-1}{p-1}$. Or</p>$$(p-1)!\binom{n-1}{p-1} = (n-1)(n-2)\cdots(n-p+1).$$<p>Les $p-1$ entiers $n-1,\dots,n-p+1$ précèdent le multiple $n$ de $p$ : aucun n'est multiple de $p$. Comme $p$ est premier, $p$ ne divise pas leur produit (lemme d'Euclide). Si $p$ divisait $\binom{n-1}{p-1}$, il diviserait ce produit : impossible.</p><div class="sbox">$$n\ \text{composé}\ \Longrightarrow\ n\nmid\binom np\ \text{pour un facteur premier}\ p\ \text{de}\ n.$$</div><p>Exemple : $n = 4$, $p = 2$ : $\binom42 = 6$ n'est pas multiple de $4$.</p>`, rappels: ["ca-gauss"] },
    { q: 3, t: "Petit théorème de Fermat", b: R`<p>Par le binôme, $(a+b)^p-a^p-b^p = \sum_{k=1}^{p-1}\binom pka^kb^{p-k}$, et chaque $\binom pk$ est multiple de $p$ (question 1) : la somme l'est aussi.</p><p>Pour $a\in\mathbb N$, par récurrence : $0^p-0 = 0$, et $(a+1)^p-(a+1) = \big[(a+1)^p-a^p-1\big]+\big[a^p-a\big]$, somme de deux multiples de $p$. Pour $a< 0$, on écrit $a^p-a = -\big((-a)^p-(-a)\big)$ si $p$ est impair ; si $p = 2$, $a^2-a = a(a-1)$ est pair.</p><div class="sbox">$$\forall a\in\mathbb Z,\quad p\mid a^p-a.$$</div>`, rappels: ["ca-binome", "ca-rec"] }
  ],
  piege: R`Dans la question 2, choisir un $k$ quelconque : il faut un $k$ qui « voit » un facteur premier de $n$.`,
  methode: R`Divisibilité d'un binomial par un premier : formule du capitaine et lemme de Gauss.`
},
{ id: "ca-43", ...P, level: 2, time: "15 min",
  title: "Les coefficients binomiaux croissent puis décroissent",
  enonce: R`<p>Soit $n\in\mathbb N^*$.</p><ol><li>Justifier : $\forall1\leqslant k\leqslant n$, $\dbinom nk = \dfrac{n-k+1}k\dbinom n{k-1}$.</li><li>En déduire $\dbinom n{k-1}< \dbinom nk$ pour $1\leqslant k\leqslant\frac n2$, et $\dbinom n{k+1}< \dbinom nk$ pour $\frac n2\leqslant k\leqslant n-1$.</li><li>Comment interpréter ces inégalités ? ${AJ} Quel est le plus grand des $\binom nk$ ?</li></ol>`,
  decode: { donnees: [], but: R`Étudier les variations de $k\mapsto\binom nk$.`, cles: {
    ratio: R`$\binom nk/\binom n{k-1} = \frac{n-k+1}k$ est $> 1$ si et seulement si $k< \frac{n+1}2$.` } },
  steps: [
    { q: 1, t: "La relation", b: R`$$\binom nk = \frac{n!}{k!\,(n-k)!} = \frac{n-k+1}k\cdot\frac{n!}{(k-1)!\,(n-k+1)!} = \frac{n-k+1}k\binom n{k-1}.$$`, rappels: ["ca-pascal"] },
    { q: 2, t: "Les inégalités", h: R`<p><span data-k="ratio">Compare $n-k+1$ et $k$</span>.</p>`, b: R`<p>Si $1\leqslant k\leqslant\frac n2$ : $2k\leqslant n< n+1$, donc $n-k+1> k$ et <span data-k="ratio">$\frac{n-k+1}k> 1$</span>. Comme $\binom n{k-1}> 0$ : $\binom nk> \binom n{k-1}$.</p><p>Si $\frac n2\leqslant k\leqslant n-1$ : on pose $k' = n-k\in[\![1,\frac n2]\!]$. Par symétrie et la première inégalité :</p>$$\binom n{k+1} = \binom n{k'-1}< \binom n{k'} = \binom nk.$$` },
    { q: 3, t: "Interprétation", b: R`<p>À $n$ fixé, la suite $\binom n0,\binom n1,\dots,\binom nn$ est strictement croissante jusqu'au milieu, puis strictement décroissante : la ligne $n$ du triangle de Pascal « monte » puis « descend », symétriquement.</p><div class="sbox">$$\max_k\binom nk = \binom n{\lfloor n/2\rfloor}.$$</div><p>Si $n$ est pair, le maximum est atteint en $k = \frac n2$ seulement ; si $n$ est impair, en $k = \frac{n-1}2$ et $\frac{n+1}2$ (valeurs égales).</p>` }
  ],
  piege: R`Oublier que $\binom n{k-1}> 0$ avant de multiplier l'inégalité $\frac{n-k+1}k> 1$.`,
  methode: R`Monotonie d'une suite positive : comparer le quotient de deux termes consécutifs à $1$.`
},
{ id: "ca-44", ...P, level: 2, time: "15 min",
  title: "Encadrer le coefficient central",
  enonce: R`<ol><li>Montrer : $\forall n\in\mathbb N^*$, $\dbinom{2n}n\geqslant\dfrac{2^{2n}}{2n+1}$.</li><li>${AJ} Montrer que $\binom{2n}n\leqslant4^n$, puis $\binom{2n}n\leqslant\frac{4^n}2$ pour $n\geqslant1$.</li></ol>`,
  decode: { donnees: [R`$\sum_{k=0}^{2n}\binom{2n}k = 4^n$.`], but: R`Encadrer $\binom{2n}n$ à l'aide de la somme de la ligne $2n$.`, cles: {
    max: R`$\binom{2n}n$ est le plus grand des $2n+1$ coefficients (exercice 43).` } },
  steps: [
    { q: 1, t: "Minoration", h: R`<p><span data-k="max">Le coefficient central est le plus grand</span> : majore chaque terme de la somme par lui.</p>`, b: R`<p>Par le binôme, $\sum_{k=0}^{2n}\binom{2n}k = 2^{2n}$. <span data-k="max">Chacun des $2n+1$ termes est $\leqslant\binom{2n}n$</span> (exercice 43) :</p>$$2^{2n}\leqslant(2n+1)\binom{2n}n.$$<div class="sbox">$$\binom{2n}n\geqslant\frac{4^n}{2n+1}.$$</div>`, rappels: ["ca-binome"] },
    { q: 2, t: "Majorations", b: R`<p>$\binom{2n}n$ est l'un des termes positifs de la somme : $\binom{2n}n\leqslant4^n$.</p><p><b>Mieux.</b> Par symétrie $\binom{2n}k = \binom{2n}{2n-k}$, les termes autres que le terme central se groupent par paires égales :</p>$$4^n = \binom{2n}n+2\sum_{k=0}^{n-1}\binom{2n}k.$$<p>Pour $n\geqslant1$, la somme contient le terme $\binom{2n}{n-1}$. Avec la relation de l'exercice 43 ($k = n$) : $\binom{2n}n = \frac{n+1}n\binom{2n}{n-1}$, donc $\binom{2n}{n-1} = \frac n{n+1}\binom{2n}n\geqslant\frac12\binom{2n}n$. Ainsi</p>$$4^n\geqslant\binom{2n}n+2\cdot\frac12\binom{2n}n = 2\binom{2n}n.$$<div class="sbox">$$\frac{4^n}{2n+1}\leqslant\binom{2n}n\leqslant\frac{4^n}2\qquad(n\geqslant1).$$</div><p>On montre en analyse (formule de Stirling) que $\binom{2n}n\sim\frac{4^n}{\sqrt{\pi n}}$ : entre les deux bornes.</p>` }
  ],
  piege: R`Oublier qu'il y a $2n+1$ coefficients sur la ligne $2n$ (et non $2n$).`,
  methode: R`Majorer une somme par (nombre de termes) × (plus grand terme) donne une minoration du plus grand terme.`
}
]);
})();

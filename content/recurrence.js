/* Maths MPSI · chapitre 01 : raisonnements par récurrence. */
(() => {
const R = String.raw;
const C0 = { subj: "maths", year: "mpsi", chap: 0 };

LEMME.rappels({
  "rc-double": { t: "Récurrence double", b: R`<p>Si $P(0)$ et $P(1)$ sont vraies, et si pour tout $n$, $\big(P(n)\ \text{et}\ P(n+1)\big)\Rightarrow P(n+2)$, alors $P(n)$ est vraie pour tout $n$.</p>` },
  "rc-forte": { t: "Récurrence forte", b: R`<p>Si $P(n_0)$ est vraie, et si pour tout $n>n_0$, $\big(P(k)$ vraie pour tout $k$ avec $n_0\leqslant k< n\big)\Rightarrow P(n)$, alors $P(n)$ est vraie pour tout $n\geqslant n_0$.</p>` }
});

LEMME.exercises([
{ id: "rc-sin", ...C0, level: 1, time: "15 min",
  title: "|sin(nθ)| ≤ n|sin θ|",
  enonce: R`<p>Soit $\theta\in\mathbb R$. Montrer que pour tout $n\in\mathbb N$ :</p>$$|\sin(n\theta)|\leqslant n\,|\sin\theta|.$$`,
  decode: { donnees: [R`La formule $\sin(a+b) = \sin a\cos b+\sin b\cos a$.`, R`$|\cos x|\leqslant1$ pour tout réel $x$.`], but: R`Une inégalité pour tout $n$ : récurrence.`, cles: {} },
  steps: [
    { q: 1, t: "Un outil : |sin(a+b)| ≤ |sin a| + |sin b|", h: R`<p>Formule d'addition, puis inégalité triangulaire.</p>`, b: R`<p><b>Formule d'addition</b> : $\sin(a+b) = \sin a\cos b+\sin b\cos a$. On prend la valeur absolue et on applique l'<b>inégalité triangulaire</b> $|u+v|\leqslant|u|+|v|$, puis $|uv| = |u||v|$ :</p>$$|\sin(a+b)|\leqslant|\sin a|\,|\cos b|+|\sin b|\,|\cos a|.$$<p>Comme $|\cos b|\leqslant1$ et $|\cos a|\leqslant1$, on majore chaque produit :</p><div class="sbox">$$|\sin(a+b)|\leqslant|\sin a|+|\sin b|\qquad\text{pour tous réels }a,b.$$</div>` },
    { q: 2, t: "La récurrence", h: R`<p>Écris $(n+1)\theta = n\theta+\theta$.</p>`, b: R`<p>On note $P(n)$ : « $|\sin(n\theta)|\leqslant n|\sin\theta|$ ».</p><ul><li><b>Initialisation</b> ($n = 0$) : $|\sin(0\cdot\theta)| = |\sin0| = 0$ et $0\cdot|\sin\theta| = 0$. On a $0\leqslant0$ : $P(0)$ est vraie.</li><li><b>Hérédité</b> : soit $n\in\mathbb N$, supposons $P(n)$. On écrit $(n+1)\theta = n\theta+\theta$ et on applique l'étape 1 avec $a = n\theta$, $b = \theta$ :$$|\sin((n+1)\theta)| = |\sin(n\theta+\theta)|\leqslant|\sin(n\theta)|+|\sin\theta|.$$Par hypothèse de récurrence $|\sin(n\theta)|\leqslant n|\sin\theta|$, donc$$|\sin((n+1)\theta)|\leqslant n|\sin\theta|+|\sin\theta| = (n+1)|\sin\theta|.$$$P(n+1)$ est vraie.</li></ul><div class="sbox">$$\forall n\in\mathbb N,\quad|\sin(n\theta)|\leqslant n\,|\sin\theta|.$$</div>`, rappels: ["recurrence"] }
  ],
  piege: R`Écrire $|\sin(n\theta)| = n|\sin\theta|$ : c'est faux, par exemple $\sin(2\theta) = 2\sin\theta\cos\theta$.`,
  methode: R`Pour une inégalité indexée par $n$ : passer de $n$ à $n+1$ avec une formule d'addition et l'inégalité triangulaire.`
},
{ id: "rc-suite", ...C0, level: 1, time: "10 min",
  title: "Une suite définie par deux termes",
  enonce: R`<p>Soit $(u_n)$ la suite définie par $u_0 = 2$, $u_1 = 3$ et, pour tout $n\in\mathbb N$, $u_{n+2} = 3u_{n+1}-2u_n$. Montrer que $u_n = 2^n+1$ pour tout $n\in\mathbb N$.</p>`,
  decode: { donnees: [R`Chaque terme dépend des <b>deux</b> précédents.`], but: R`Prouver une formule explicite.`, cles: {} },
  steps: [
    { q: 1, t: "Pourquoi une récurrence double", h: R`<p>Pour calculer $u_{n+2}$, il faut connaître $u_{n+1}$ et $u_n$.</p>`, b: R`<p>La relation exprime $u_{n+2}$ à l'aide de $u_{n+1}$ <b>et</b> de $u_n$. Pour passer au rang suivant, il faut donc supposer la formule vraie aux <b>deux</b> rangs précédents : c'est une <b>récurrence double</b>.</p><p>On note $P(n)$ : « $u_n = 2^n+1$ et $u_{n+1} = 2^{n+1}+1$ » (on regroupe deux rangs consécutifs dans une seule propriété, ce qui ramène à une récurrence simple).</p>`, rappels: ["rc-double"] },
    { q: 2, t: "Initialisation", h: R`<p>Vérifie $n = 0$ et $n = 1$.</p>`, b: R`<p>$u_0 = 2$ et $2^0+1 = 1+1 = 2$ ✓ ; $u_1 = 3$ et $2^1+1 = 3$ ✓. Donc $P(0)$ est vraie.</p>` },
    { q: 3, t: "Hérédité", h: R`<p>Remplace $u_{n+1}$ et $u_n$ dans la relation.</p>`, b: R`<p>Soit $n\in\mathbb N$, supposons $P(n)$ : $u_n = 2^n+1$ et $u_{n+1} = 2^{n+1}+1$. Il faut montrer $u_{n+2} = 2^{n+2}+1$ (la partie « $u_{n+1}$ » de $P(n+1)$ est déjà connue).</p>$$u_{n+2} = 3u_{n+1}-2u_n = 3(2^{n+1}+1)-2(2^n+1) = 3\cdot2^{n+1}+3-2^{n+1}-2.$$<p>On a utilisé $2\cdot2^n = 2^{n+1}$. On regroupe : $3\cdot2^{n+1}-2^{n+1} = 2\cdot2^{n+1} = 2^{n+2}$, et $3-2 = 1$ :</p>$$u_{n+2} = 2^{n+2}+1.$$<p>Donc $P(n+1)$ est vraie.</p><div class="sbox">$$\forall n\in\mathbb N,\quad u_n = 2^n+1.$$</div>` }
  ],
  piege: R`Faire une récurrence simple : supposer seulement $u_n = 2^n+1$ ne permet pas de calculer $u_{n+1}$.`,
  methode: R`Relation sur trois termes consécutifs : récurrence double, avec deux initialisations.`
},
{ id: "rc-erreur", ...C0, level: 1, time: "10 min",
  title: "Une fausse preuve : tous les points sont alignés",
  enonce: R`<p>On propose la « démonstration » suivante, par récurrence sur $n\in\mathbb N^\ast$, de la propriété $P(n)$ : « $n$ points distincts quelconques du plan sont toujours alignés ».</p><ul><li>Pour $n = 1$ et $n = 2$, c'est vrai.</li><li>Supposons $P(n)$ vraie pour un $n\geqslant2$ et prenons $n+1$ points distincts $A_1,\dots,A_{n+1}$. Par hypothèse, $A_1,\dots,A_n$ sont sur une droite $\mathcal D$, et $A_2,\dots,A_{n+1}$ sont sur une droite $\mathcal D'$. Les droites $\mathcal D$ et $\mathcal D'$ contiennent toutes deux les points distincts $A_2$ et $A_n$, donc $\mathcal D = \mathcal D'$, et les $n+1$ points sont alignés.</li></ul><p>La conclusion est évidemment fausse. Où est l'erreur ?</p>`,
  decode: { donnees: [R`Une récurrence dont l'initialisation est correcte.`], but: R`Trouver le passage qui ne marche pas.`, cles: {} },
  steps: [
    { q: 1, t: "Tester l'hérédité au premier rang", h: R`<p>Fais $n = 2$ : combien de points communs ont $\mathcal D$ et $\mathcal D'$ ?</p>`, b: R`<p>L'initialisation est juste : un ou deux points sont toujours alignés. L'erreur est donc dans l'hérédité. On la teste au premier rang où elle sert : passer de $n = 2$ à $n+1 = 3$.</p><ul><li>On a trois points $A_1,A_2,A_3$.</li><li>« $A_1,\dots,A_n$ sur $\mathcal D$ » : ici $A_1,A_2$ sur $\mathcal D$.</li><li>« $A_2,\dots,A_{n+1}$ sur $\mathcal D'$ » : ici $A_2,A_3$ sur $\mathcal D'$.</li><li>Les « deux points distincts $A_2$ et $A_n$ » : ici $A_n = A_2$, c'est <b>le même point</b>.</li></ul><p>$\mathcal D$ et $\mathcal D'$ n'ont qu'un point commun connu, $A_2$. Deux droites qui ont un seul point commun peuvent être différentes : on ne peut pas conclure $\mathcal D = \mathcal D'$.</p>` },
    { q: 2, t: "Conclusion", h: R`<p>Pour quels $n$ l'hérédité est-elle correcte ?</p>`, b: R`<p>L'argument « $A_2\neq A_n$ » demande $n\geqslant3$. L'hérédité est correcte pour passer de $n$ à $n+1$ quand $n\geqslant3$, mais pas de $2$ à $3$.</p><p>La chaîne est donc rompue : $P(1)$ et $P(2)$ sont vraies, mais on ne peut pas en déduire $P(3)$. L'hérédité ne « s'accroche » pas à l'initialisation. (Et $P(3)$ est bien fausse : trois sommets d'un triangle ne sont pas alignés.)</p><div class="sbox"><p style="margin:0">Une récurrence exige que l'hérédité soit valable <b>pour tout</b> $n$ à partir du rang initialisé.</p></div>` }
  ],
  piege: R`Vérifier l'hérédité « en général » sans la tester au premier rang : c'est souvent là qu'elle casse.`,
  methode: R`Pour trouver l'erreur d'une récurrence, refaire l'hérédité avec le plus petit $n$ autorisé.`
},
{ id: "rc-puissance2", ...C0, level: 2, time: "15 min",
  title: "Écrire n = 2ᵏ(2p+1) de deux façons",
  enonce: R`<p>Montrer que tout entier $n\geqslant1$ s'écrit $n = 2^k(2p+1)$ avec $(k,p)\in\mathbb N^2$ :</p><ol style="list-style:lower-alpha"><li>en utilisant le plus grand entier $k$ tel que $2^k$ divise $n$ ;</li><li>par récurrence forte.</li></ol>`,
  decode: { donnees: [R`$n\geqslant1$ entier.`], but: R`Factoriser la plus grande puissance de $2$ ; le reste est impair.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Le plus grand k", h: R`<p>L'ensemble des $k$ tels que $2^k$ divise $n$ est non vide et majoré.</p>`, b: R`<p>Soit $A = \{k\in\mathbb N : 2^k\ \text{divise}\ n\}$.</p><ul><li>$A$ est non vide : $2^0 = 1$ divise $n$, donc $0\in A$.</li><li>$A$ est majoré : si $2^k$ divise $n\geqslant1$, alors $2^k\leqslant n$, et comme $k< 2^k$, on a $k< n$.</li></ul><p>Une partie non vide et majorée de $\mathbb N$ a un plus grand élément : on le note $k$. Comme $2^k$ divise $n$, on écrit $n = 2^km$ avec $m\in\mathbb N^\ast$.</p><p><b>$m$ est impair</b> : sinon $m = 2m'$ et $n = 2^{k+1}m'$, donc $k+1\in A$, ce qui contredit la maximalité de $k$. Donc $m = 2p+1$ avec $p\in\mathbb N$, et $n = 2^k(2p+1)$.</p>` },
    { q: 2, t: "(b) Récurrence forte : mise en place", h: R`<p>Si $n$ est pair, $n = 2m$ avec $m< n$.</p>`, b: R`<p>On note $P(n)$ : « il existe $(k,p)\in\mathbb N^2$ avec $n = 2^k(2p+1)$ ». On fait une <b>récurrence forte</b> : pour montrer $P(n)$, on suppose $P(m)$ vraie pour <b>tous</b> les $m$ avec $1\leqslant m< n$. C'est nécessaire, car si $n$ est pair on va utiliser $P(n/2)$, et pas $P(n-1)$.</p><p><b>Initialisation</b> : $1 = 2^0(2\cdot0+1)$ ; $P(1)$ est vraie avec $(k,p) = (0,0)$.</p>`, rappels: ["rc-forte"] },
    { q: 3, t: "(b) Hérédité", h: R`<p>Deux cas : $n$ impair, $n$ pair.</p>`, b: R`<p>Soit $n\geqslant2$ et supposons $P(m)$ pour tout $1\leqslant m< n$.</p><ul><li><b>$n$ impair</b> : $n = 2p+1$ avec $p = \frac{n-1}2\in\mathbb N$, donc $n = 2^0(2p+1)$.</li><li><b>$n$ pair</b> : $n = 2m$ avec $m = \frac n2$, et $1\leqslant m< n$. Par hypothèse de récurrence, $m = 2^k(2p+1)$. Donc $n = 2\cdot2^k(2p+1) = 2^{k+1}(2p+1)$.</li></ul><p>Dans les deux cas $P(n)$ est vraie.</p><div class="sbox">$$\forall n\geqslant1,\ \exists(k,p)\in\mathbb N^2,\quad n = 2^k(2p+1).$$</div><p>Exemples : $12 = 2^2\times3$ ($k = 2$, $p = 1$), $40 = 2^3\times5$ ($k = 3$, $p = 2$).</p>` }
  ],
  piege: R`Faire une récurrence simple : connaître l'écriture de $n-1$ n'aide pas à écrire $n$.`,
  methode: R`Quand $P(n)$ se déduit d'un rang beaucoup plus petit (comme $n/2$), utiliser une récurrence forte.`
},
{ id: "rc-x-inverse", ...C0, level: 2, time: "20 min",
  title: "Si x + 1/x est entier, xⁿ + 1/xⁿ aussi",
  tt: R`Si $x+\frac1x$ est entier, $x^n+\frac1{x^n}$ aussi`,
  enonce: R`<p>Soit $x$ un réel non nul tel que $x+\frac1x\in\mathbb Z$.</p><ol style="list-style:lower-alpha"><li>Montrer que pour tout $n\in\mathbb N$, $x^n+\dfrac1{x^n}\in\mathbb Z$.</li><li>Donner un exemple de réel $x$, différent de $1$ et $-1$, qui vérifie l'hypothèse.</li></ol>`,
  decode: { donnees: [R`$s = x+\frac1x$ est un entier.`], but: R`Exprimer $x^{n+1}+\frac1{x^{n+1}}$ à l'aide des deux termes précédents.`, cles: {} },
  steps: [
    { q: 1, t: "Une relation entre trois termes", h: R`<p>Développe $\left(x+\frac1x\right)\left(x^n+\frac1{x^n}\right)$.</p>`, b: R`<p>On note $a_n = x^n+\frac1{x^n}$ et $s = a_1 = x+\frac1x\in\mathbb Z$. On développe le produit (distributivité), avec $x\cdot x^n = x^{n+1}$, $x\cdot\frac1{x^n} = \frac1{x^{n-1}}$, $\frac1x\cdot x^n = x^{n-1}$ :</p>$$s\,a_n = \Big(x+\frac1x\Big)\Big(x^n+\frac1{x^n}\Big) = x^{n+1}+\frac1{x^{n-1}}+x^{n-1}+\frac1{x^{n+1}} = a_{n+1}+a_{n-1}.$$<div class="sbox">$$a_{n+1} = s\,a_n-a_{n-1}\qquad(n\geqslant1).$$</div>` },
    { q: 2, t: "(a) Récurrence double", h: R`<p>$a_0 = 2$ et $a_1 = s$.</p>`, b: R`<p>On montre par <b>récurrence double</b> : « $a_n\in\mathbb Z$ et $a_{n+1}\in\mathbb Z$ ».</p><ul><li><b>Initialisation</b> ($n = 0$) : $a_0 = x^0+\frac1{x^0} = 1+1 = 2\in\mathbb Z$, et $a_1 = s\in\mathbb Z$ par hypothèse.</li><li><b>Hérédité</b> : si $a_n$ et $a_{n+1}$ sont entiers, alors $a_{n+2} = s\,a_{n+1}-a_n$ (relation de l'étape 1 au rang $n+1$) est un produit et une différence d'entiers : c'est un entier.</li></ul><div class="sbox">$$\forall n\in\mathbb N,\quad x^n+\frac1{x^n}\in\mathbb Z.$$</div><p>Exemple de calcul : $a_2 = s^2-2$, $a_3 = s^3-3s$.</p>`, rappels: ["rc-double"] },
    { q: 3, t: "(b) Un exemple", h: R`<p>Résous $x+\frac1x = 3$.</p>`, b: R`<p>On choisit $s = 3$ et on résout $x+\frac1x = 3$. On multiplie par $x\neq0$ : $x^2-3x+1 = 0$. Discriminant $\Delta = 9-4 = 5>0$ :</p>$$x = \frac{3+\sqrt5}2\quad\text{ou}\quad x = \frac{3-\sqrt5}2.$$<p>Par exemple $x = \frac{3+\sqrt5}2\approx2{,}618$, qui n'est ni $1$ ni $-1$. Alors $x^2+\frac1{x^2} = 3^2-2 = 7$, $x^3+\frac1{x^3} = 27-9 = 18$, etc.</p><p>(Pour $s = 2$ ou $s = -2$, on trouverait $x = 1$ ou $x = -1$ : ce sont les cas « triviaux ».)</p>` }
  ],
  piege: R`Développer $\left(x+\frac1x\right)^n$ par le binôme : c'est possible mais beaucoup plus long.`,
  methode: R`Pour des suites du type $x^n+x^{-n}$ : la relation $a_{n+1} = s\,a_n-a_{n-1}$ et une récurrence double.`
},
{ id: "rc-somme-carres", ...C0, level: 2, time: "20 min",
  title: "Une minoration de la somme des 1/k²",
  tt: R`Une minoration de $\sum\frac1{k^2}$`,
  enonce: R`<p>Montrer que pour tout entier $n\geqslant2$ :</p>$$1+\frac1{2^2}+\dots+\frac1{n^2}>\frac{3n}{2n+1}.$$`,
  decode: { donnees: [R`$S_n = \sum_{k=1}^n\frac1{k^2}$ et $S_{n+1} = S_n+\frac1{(n+1)^2}$.`], but: R`Une inégalité stricte pour $n\geqslant2$, par récurrence.`, cles: {} },
  steps: [
    { q: 1, t: "Initialisation", h: R`<p>Calcule les deux membres pour $n = 2$.</p>`, b: R`<p>On note $S_n = \sum_{k=1}^n\frac1{k^2}$ et $P(n)$ : « $S_n>\frac{3n}{2n+1}$ ». Pour $n = 2$ :</p>$$S_2 = 1+\frac14 = \frac54 = 1{,}25\qquad\text{et}\qquad\frac{3\times2}{2\times2+1} = \frac65 = 1{,}2.$$<p>$1{,}25>1{,}2$ : $P(2)$ est vraie.</p>` },
    { q: 2, t: "Hérédité : ce qu'il faut montrer", h: R`<p>Utilise l'hypothèse sur $S_n$ ; il restera une inégalité sans somme.</p>`, b: R`<p>Soit $n\geqslant2$ avec $P(n)$. On ajoute le terme suivant et on utilise l'hypothèse :</p>$$S_{n+1} = S_n+\frac1{(n+1)^2}>\frac{3n}{2n+1}+\frac1{(n+1)^2}.$$<p>Pour obtenir $S_{n+1}>\frac{3(n+1)}{2n+3}$, il <b>suffit</b> de montrer :</p><div class="sbox">$$\frac{3n}{2n+1}+\frac1{(n+1)^2}\geqslant\frac{3(n+1)}{2n+3}.$$</div><p>On étudie le signe de la différence $D = \frac{3n}{2n+1}+\frac1{(n+1)^2}-\frac{3(n+1)}{2n+3}$.</p>` },
    { q: 3, t: "Hérédité : le calcul", h: R`<p>Dénominateur commun $(2n+1)(n+1)^2(2n+3)$.</p>`, b: R`<p>On réduit au dénominateur commun $Q = (2n+1)(n+1)^2(2n+3)>0$. Le numérateur vaut</p>$$N = 3n(n+1)^2(2n+3)+(2n+1)(2n+3)-3(n+1)(n+1)^2(2n+1).$$<p>On factorise $3(n+1)^2$ dans le premier et le dernier terme :</p>$$N = 3(n+1)^2\big[n(2n+3)-(n+1)(2n+1)\big]+(2n+1)(2n+3).$$<p>Dans le crochet : $n(2n+3) = 2n^2+3n$ et $(n+1)(2n+1) = 2n^2+3n+1$, donc le crochet vaut $-1$. Puis $(2n+1)(2n+3) = 4n^2+8n+3$ et $3(n+1)^2 = 3n^2+6n+3$ :</p>$$N = -(3n^2+6n+3)+4n^2+8n+3 = n^2+2n = n(n+2)\geqslant0.$$<p>Donc $D = \frac{n(n+2)}{Q}\geqslant0$, et $S_{n+1}>\frac{3n}{2n+1}+\frac1{(n+1)^2}\geqslant\frac{3(n+1)}{2n+3}$ : $P(n+1)$ est vraie.</p><div class="sbox">$$\forall n\geqslant2,\quad\sum_{k=1}^n\frac1{k^2}>\frac{3n}{2n+1}.$$</div>`, rappels: ["recurrence"] }
  ],
  piege: R`Oublier que l'inégalité stricte vient de l'hypothèse : on a « $>$ » puis « $\geqslant$ », ce qui donne bien « $>$ ».`,
  methode: R`Hérédité d'une inégalité : utiliser l'hypothèse, puis montrer une inégalité sans somme en étudiant le signe d'une différence.`
},
{ id: "rc-factorielles", ...C0, level: 2, time: "20 min",
  title: "Un produit de factorielles impaires",
  enonce: R`<p>Montrer que pour tout $n\in\mathbb N^\ast$ :</p>$$1!\times3!\times5!\times\dots\times(2n+1)!\geqslant\big((n+1)!\big)^{n+1}.$$`,
  decode: { donnees: [R`$k! = 1\times2\times\dots\times k$.`, R`Le produit de gauche contient les factorielles des nombres impairs $1,3,\dots,2n+1$.`], but: R`Une inégalité pour tout $n\geqslant1$, par récurrence.`, cles: {} },
  steps: [
    { q: 1, t: "Initialisation", h: R`<p>$n = 1$ : le produit est $1!\times3!$.</p>`, b: R`<p>On note $P_n = 1!\times3!\times\dots\times(2n+1)!$ et $\mathcal H(n)$ : « $P_n\geqslant\big((n+1)!\big)^{n+1}$ ».</p><p>Pour $n = 1$ : $P_1 = 1!\times3! = 1\times6 = 6$ et $\big(2!\big)^2 = 2^2 = 4$. On a $6\geqslant4$ : $\mathcal H(1)$ est vraie.</p>` },
    { q: 2, t: "Hérédité : se ramener à un quotient", h: R`<p>$P_{n+1} = P_n\times(2n+3)!$.</p>`, b: R`<p>Soit $n\geqslant1$ avec $\mathcal H(n)$. Le produit suivant ajoute la factorielle impaire suivante, $(2n+3)!$ :</p>$$P_{n+1} = P_n\times(2n+3)!\geqslant\big((n+1)!\big)^{n+1}(2n+3)!.$$<p>Il suffit de montrer que ce minorant est $\geqslant\big((n+2)!\big)^{n+2}$, c'est-à-dire, en divisant par un nombre $>0$ :</p><div class="sbox">$$q = \frac{\big((n+1)!\big)^{n+1}(2n+3)!}{\big((n+2)!\big)^{n+2}}\geqslant1.$$</div>` },
    { q: 3, t: "Hérédité : simplifier le quotient", h: R`<p>$(n+2)! = (n+2)\,(n+1)!$.</p>`, b: R`<p>On utilise $(n+2)! = (n+2)\times(n+1)!$, donc $\big((n+2)!\big)^{n+2} = (n+2)^{n+2}\big((n+1)!\big)^{n+2}$. On simplifie par $\big((n+1)!\big)^{n+1}$ :</p>$$q = \frac{(2n+3)!}{(n+1)!\,(n+2)^{n+2}}.$$<p>Or $\frac{(2n+3)!}{(n+1)!} = (n+2)(n+3)\cdots(2n+3)$ : on enlève les facteurs $1,\dots,n+1$. Ce produit a $(2n+3)-(n+2)+1 = n+2$ facteurs, chacun $\geqslant n+2$. Donc</p>$$q = \frac{(n+2)(n+3)\cdots(2n+3)}{\underbrace{(n+2)(n+2)\cdots(n+2)}_{n+2\ \text{facteurs}}} = \prod_{j=0}^{n+1}\frac{n+2+j}{n+2}\geqslant1,$$<p>car chaque fraction est $\geqslant1$. Donc $P_{n+1}\geqslant\big((n+2)!\big)^{n+2}$ : $\mathcal H(n+1)$ est vraie.</p><div class="sbox">$$\forall n\geqslant1,\quad1!\,3!\cdots(2n+1)!\geqslant\big((n+1)!\big)^{n+1}.$$</div>`, rappels: ["recurrence"] }
  ],
  piege: R`Mal compter les facteurs de $(n+2)\cdots(2n+3)$ : il y en a $n+2$, autant que dans $(n+2)^{n+2}$.`,
  methode: R`Pour comparer des produits, former le quotient et l'écrire comme produit de fractions toutes $\geqslant1$.`
}
]);
})();

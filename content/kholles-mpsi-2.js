/* Khôlles MPSI (deuxième recueil) : ensembles, applications, relations ; calculs ; réels ; complexes.
   Exercices reformulés et corrigés pas à pas. Sujet caché « kholles », année MPSI. */
LEMME.rappels({
  "k-inj": { t: "Injection, surjection, bijection", b: R`<ul><li>$f$ <b>injective</b> : $f(x) = f(x')\Rightarrow x = x'$ (deux éléments distincts ont des images distinctes).</li><li>$f$ <b>surjective</b> : tout $y$ de l'ensemble d'arrivée a au moins un antécédent.</li><li>$f$ <b>bijective</b> : tout $y$ a exactement un antécédent.</li></ul><div class="sbox">$$f\ \text{bijective}\iff\forall y\in F,\ \exists!\,x\in E,\ f(x) = y.$$</div><p><b>Méthode :</b> pour étudier $f$, on résout l'équation $y = f(x)$ d'inconnue $x$ : le nombre de solutions dit tout.</p>` },
  "k-compo": { t: "Composée d'applications", b: R`<div class="sbox">$$f,g\ \text{injectives}\Rightarrow g\circ f\ \text{injective},\qquad f,g\ \text{surjectives}\Rightarrow g\circ f\ \text{surjective}.$$</div><p>Et dans l'autre sens : $g\circ f$ injective $\Rightarrow f$ injective ; $g\circ f$ surjective $\Rightarrow g$ surjective.</p>` },
  "k-relation": { t: "Relations binaires", b: R`<p>Une relation $\mathcal R$ sur $E$ peut être :</p><ul><li>réflexive : $x\,\mathcal R\,x$ ;</li><li>symétrique : $x\,\mathcal R\,y\Rightarrow y\,\mathcal R\,x$ ;</li><li>antisymétrique : $x\,\mathcal R\,y$ et $y\,\mathcal R\,x\Rightarrow x = y$ ;</li><li>transitive : $x\,\mathcal R\,y$ et $y\,\mathcal R\,z\Rightarrow x\,\mathcal R\,z$.</li></ul><div class="sbox">$$\text{ordre} = \text{réflexive + antisymétrique + transitive},\qquad\text{équivalence} = \text{réflexive + symétrique + transitive}.$$</div><p>Un ordre est <b>total</b> si deux éléments sont toujours comparables.</p>` },
  "k-sup-ordre": { t: "Maximum et borne supérieure", b: R`<p>Dans un ensemble ordonné, le <b>maximum</b> de $A$ est un élément de $A$ qui majore $A$. La <b>borne supérieure</b> de $A$ est le plus petit des majorants de $A$ (s'il existe) ; elle n'est pas forcément dans $A$.</p><div class="sbox">$$\max A\ \text{existe}\ \Longrightarrow\ \sup A = \max A.$$</div>` },
  "k-strict-mono": { t: "Monotonie stricte et injectivité", b: R`<p>Une fonction strictement monotone sur une partie de $\mathbb R$ est injective. Si de plus elle est continue sur un intervalle $I$, elle réalise une bijection de $I$ sur l'intervalle $f(I)$.</p>` }
});

(() => {
const { FIG, S, f1, GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "kb-1-01", subj: "kholles", year: "mpsi", chap: 0, level: 1, time: "15 min",
  title: "Composées et injectivité, surjectivité",
  enonce: R`<p>Soient $f : E\to F$ et $g : F\to G$. Montrer :</p><ol style="list-style:lower-alpha"><li>$g\circ f$ injective $\Rightarrow f$ injective ;</li><li>$g\circ f$ injective et $f$ surjective $\Rightarrow g$ injective ;</li><li>$g\circ f$ surjective $\Rightarrow g$ surjective ;</li><li>$g\circ f$ surjective et $g$ injective $\Rightarrow f$ surjective.</li></ol><p>Montrer enfin, par des exemples, que dans (a) on ne peut pas conclure que $g$ est injective, et que dans (c) on ne peut pas conclure que $f$ est surjective.</p>`,
  decode: { donnees: [R`$(g\circ f)(x) = g(f(x))$ : on applique d'abord $f$, puis $g$.`], but: R`Transférer injectivité et surjectivité de la composée vers $f$ ou $g$.`, cles: {
    appg: R`Si $f(x) = f(x')$, on applique $g$ aux deux membres : $g(f(x)) = g(f(x'))$.`,
    relev: R`$f$ surjective : chaque élément de $F$ s'écrit $f(x)$. On peut donc remplacer $y,y'\in F$ par $f(x),f(x')$.`,
    ant: R`Un antécédent de $z$ par $g\circ f$ est un $x$ avec $g(f(x)) = z$ : alors $f(x)$ est un antécédent de $z$ par $g$.`,
    ex: R`Ensembles minuscules : $E = \{0\}$, $F = \{0,1\}$, $G = \{0\}$.` } },
  steps: [
    { q: 1, t: "(a) f est injective", h: R`<p>On part de $f(x) = f(x')$ et on veut $x = x'$. La seule information est sur $g\circ f$ : on <span data-k="appg">applique $g$</span>.</p>`, b: R`<p>Soient $x,x'\in E$ avec $f(x) = f(x')$. <span data-k="appg">Alors $g(f(x)) = g(f(x'))$</span>, soit $(g\circ f)(x) = (g\circ f)(x')$. Comme $g\circ f$ est injective, $x = x'$.</p>`, rappels: ["k-inj"] },
    { q: 1, t: "(b) g est injective", h: R`<p>On part de $g(y) = g(y')$ avec $y,y'\in F$. Pour utiliser $g\circ f$, il faut écrire $y$ et $y'$ comme images par $f$ : <span data-k="relev">c'est la surjectivité de $f$</span>.</p>`, b: R`<p>Soient $y,y'\in F$ avec $g(y) = g(y')$. <span data-k="relev">$f$ surjective : $y = f(x)$, $y' = f(x')$</span>. Alors $(g\circ f)(x) = (g\circ f)(x')$, donc $x = x'$, donc $y = f(x) = f(x') = y'$.</p>` },
    { q: 1, t: "(c) g est surjective", h: R`<p>Soit $z\in G$. <span data-k="ant">Un antécédent par $g\circ f$ fournit un antécédent par $g$</span>.</p>`, b: R`<p>Soit $z\in G$ : il existe $x$ avec $g(f(x)) = z$. <span data-k="ant">Donc $y = f(x)\in F$ vérifie $g(y) = z$</span>.</p>` },
    { q: 1, t: "(d) f est surjective", h: R`<p>Soit $y\in F$. On regarde $z = g(y)$, qui a un antécédent par $g\circ f$, puis on « simplifie » par $g$ grâce à son injectivité.</p>`, b: R`<p>Soit $y\in F$ et $z = g(y)$. Il existe $x$ avec $g(f(x)) = z = g(y)$. Comme $g$ est injective, $f(x) = y$ : $y$ a un antécédent par $f$.</p>` },
    { q: 1, t: "Les contre-exemples", h: R`<p>Il faut que $f$ « rate » une partie de $F$ là où $g$ n'est pas injective : <span data-k="ex">des ensembles à un ou deux éléments suffisent</span>.</p>`, b: R`<p>Avec <span data-k="ex">$E = \{0\}$, $F = \{0,1\}$, $G = \{0\}$</span>, $f(0) = 0$ et $g$ constante égale à $0$ : $g\circ f$ est bijective (de $\{0\}$ sur $\{0\}$), mais $g$ n'est pas injective ($g(0) = g(1)$) et $f$ n'est pas surjective ($1$ n'est pas atteint).</p><div class="sbox">$$g\circ f\ \text{injective}\Rightarrow f\ \text{injective},\qquad g\circ f\ \text{surjective}\Rightarrow g\ \text{surjective}.$$</div><p>Moyen mnémotechnique : l'injectivité se lit sur l'application « de départ » $f$, la surjectivité sur celle « d'arrivée » $g$.</p>`, rappels: ["k-compo"] }
  ],
  ctx: { "k-inj": R`<p>On revient aux définitions à chaque fois.</p>`, "k-compo": R`<p>Le bilan de l'exercice, à retenir.</p>` },
  piege: R`Écrire « $g\circ f$ injective donc $f$ et $g$ injectives » : seule $f$ l'est forcément.`,
  methode: R`Pour prouver une injectivité : partir de $f(x) = f(x')$. Pour une surjectivité : partir d'un élément quelconque de l'arrivée et construire un antécédent.`
},
{
  id: "kb-1-02", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "15 min",
  title: "Bijections de ℝ qui ne sont pas monotones",
  enonce: R`<ol><li>Donner une bijection de $\mathbb R$ sur $\mathbb R$ qui n'est pas monotone.</li><li>Montrer que $\sigma(x) = x$ si $x\in\mathbb Q$ et $\sigma(x) = -x$ si $x\notin\mathbb Q$ est une bijection de $\mathbb R$, monotone sur aucun intervalle $]a,b[$ ($a< b$).</li><li>Rappeler pourquoi une bijection <b>continue</b> de $\mathbb R$ sur $\mathbb R$ est forcément monotone.</li></ol>`,
  decode: { donnees: [R`Bijection : tout réel a exactement un antécédent.`], but: R`Montrer que « bijective » n'entraîne pas « monotone » sans continuité.`, cles: {
    echange: R`On échange deux valeurs : $f(0) = 1$, $f(1) = 0$ et $f(x) = x$ ailleurs. C'est sa propre réciproque.`,
    invol: R`$\sigma\circ\sigma = \mathrm{Id}$ : une application qui est sa propre réciproque est bijective.`,
    dense: R`Tout intervalle $]a,b[$ contient un rationnel et un irrationnel (densité), où $\sigma$ « monte » et « descend ».` } },
  steps: [
    { q: 1, t: "Échanger deux valeurs", h: R`<p>Partir de l'identité, bijective et croissante, et <span data-k="echange">échanger deux images</span> : on garde la bijectivité, on casse la monotonie.</p>`, b: R`<p>$f(0) = 1$, $f(1) = 0$, $f(x) = x$ sinon. <span data-k="echange">$f\circ f = \mathrm{Id}$</span>, donc $f$ est bijective. Mais $f(0) = 1>f(\frac12) = \frac12$ et $f(\frac12)< f(2) = 2$ : ni croissante ni décroissante.</p>`, rappels: ["k-inj"] },
    { q: 2, t: "σ est une bijection", h: R`<p>$x$ et $-x$ sont tous les deux rationnels ou tous les deux irrationnels : <span data-k="invol">$\sigma$ est une involution</span>.</p>`, b: R`<p>Si $x\in\mathbb Q$, $\sigma(\sigma(x)) = \sigma(x) = x$. Si $x\notin\mathbb Q$, $-x\notin\mathbb Q$ et $\sigma(\sigma(x)) = \sigma(-x) = x$. Donc <span data-k="invol">$\sigma\circ\sigma = \mathrm{Id}$</span> et $\sigma$ est bijective (de réciproque elle-même).</p>` },
    { q: 2, t: "Monotone nulle part", h: R`<p>Sur un intervalle, on trouve <span data-k="dense">deux rationnels et deux irrationnels</span> bien placés.</p>`, b: R`<p>Soit $]a,b[$ avec, disons, $0< a< b$ (les autres cas sont semblables). Par densité, il y a $r< r'$ rationnels dans $]a,b[$ : $\sigma(r)< \sigma(r')$, donc $\sigma$ n'est pas décroissante sur $]a,b[$. Il y a aussi $s< s'$ irrationnels : $\sigma(s) = -s>-s' = \sigma(s')$, donc $\sigma$ n'est pas croissante.</p>`, rappels: ["densite"] },
    { q: 3, t: "Avec la continuité", h: R`<p>Une fonction continue et injective sur un intervalle est strictement monotone (théorème des valeurs intermédiaires).</p>`, b: R`<p>Si $f$ est continue et injective sur $\mathbb R$ et non monotone, on trouverait $a< b< c$ avec $f(b)$ hors de l'intervalle entre $f(a)$ et $f(c)$ ; le TVI donne alors deux points distincts de même image, contredisant l'injectivité. Les deux exemples ci-dessus ne sont pas continus.</p>`, rappels: ["injective-monotone"] }
  ],
  ctx: { "k-inj": R`<p>$f\circ f = \mathrm{Id}$ donne la bijectivité.</p>`, "densite": R`<p>$\mathbb Q$ et $\mathbb R\setminus\mathbb Q$ sont denses dans $\mathbb R$.</p>`, "injective-monotone": R`<p>C'est le résultat qui manque à nos exemples, faute de continuité.</p>` },
  piege: R`Croire qu'une bijection de $\mathbb R$ est toujours monotone : c'est vrai seulement si elle est continue.`,
  methode: R`Pour fabriquer une bijection : chercher une involution ($f\circ f = \mathrm{Id}$).`
},
{
  id: "kb-1-03", subj: "kholles", year: "mpsi", chap: 0, level: 1, time: "15 min",
  title: "Étude d'une fonction homographique",
  enonce: R`<p>Soit $f : \mathbb R\setminus\{4\}\to\mathbb R$, $f(x) = \dfrac{2x+1}{x-4}$.</p><ol><li>Soit $y\in\mathbb R$. Résoudre l'équation $y = f(x)$ d'inconnue $x\in\mathbb R\setminus\{4\}$.</li><li>En déduire que $f$ est injective mais pas surjective.</li><li>Trouver $a$ tel que $f$ soit une bijection de $\mathbb R\setminus\{4\}$ sur $\mathbb R\setminus\{a\}$, et donner sa réciproque.</li></ol>`,
  decode: { donnees: [R`$f$ est définie partout sauf en $4$.`], but: R`Étudier $f$ en résolvant $y = f(x)$.`, cles: {
    eq: R`$y = \frac{2x+1}{x-4}\iff y(x-4) = 2x+1\iff x(y-2) = 4y+1$ (pour $x\neq4$).`,
    cas: R`Si $y = 2$, l'équation devient $0 = 9$ : aucune solution. Sinon $x = \frac{4y+1}{y-2}$.`,
    pasquatre: R`$\frac{4y+1}{y-2} = 4$ donnerait $4y+1 = 4y-8$, impossible : la solution est bien dans le domaine.` } },
  steps: [
    { q: 1, t: "Résoudre y = f(x)", h: R`<p>On <span data-k="eq">chasse le dénominateur</span> et on isole $x$ ; attention, on divise par $y-2$, qui peut être nul.</p>`, b: R`<p><span data-k="eq">$y = f(x)\iff x(y-2) = 4y+1$</span>. <span data-k="cas">Si $y = 2$ : pas de solution. Si $y\neq2$ : $x = \frac{4y+1}{y-2}$</span>, <span data-k="pasquatre">qui est bien différent de $4$</span>.</p>` },
    { q: 2, t: "Injective, pas surjective", h: R`<p>Le nombre de solutions de $y = f(x)$ dit tout : au plus une solution (injective), et aucune pour $y = 2$.</p>`, b: R`<p>Chaque $y$ a au plus un antécédent : $f$ est injective. $2$ n'a pas d'antécédent : $f$ n'est pas surjective sur $\mathbb R$.</p>`, rappels: ["k-inj"] },
    { q: 3, t: "Bijection et réciproque", h: R`<p>On retire de l'arrivée la seule valeur non atteinte.</p>`, b: R`<p>Avec $a = 2$, tout $y\neq2$ a exactement un antécédent :</p><div class="sbox">$$f : \mathbb R\setminus\{4\}\to\mathbb R\setminus\{2\}\ \text{bijective},\qquad f^{-1}(y) = \frac{4y+1}{y-2}.$$</div><p>Vérification : $f(0) = -\frac14$ et $f^{-1}(-\frac14) = \frac{-1+1}{-\frac94} = 0$. Géométriquement, $y = 2$ est l'asymptote horizontale de l'hyperbole.</p>` + GRAPH({ w: 400, h: 220, x: [-6, 14], y: [-8, 12], xt: [4], yt: [2], curves: [{ f: x => Math.abs(x - 4) < 0.35 ? NaN : (2 * x + 1) / (x - 4), c: "b" }], hl: [{ y: 2, t: "y = 2" }], vl: [{ x: 4, t: "x = 4" }] }, R`Le graphe de $f$ : une hyperbole d'asymptotes $x = 4$ et $y = 2$. La droite $y = 2$ n'est jamais atteinte.`, "Graphe de la fonction homographique") }
  ],
  ctx: { "k-inj": R`<p>Au plus une solution : injective ; une solution pour tout $y$ de l'arrivée : surjective.</p>` },
  piege: R`Diviser par $y-2$ sans traiter le cas $y = 2$ : c'est justement la valeur non atteinte.`,
  methode: R`Étudier une application : résoudre $y = f(x)$ en distinguant les cas où l'on divise par zéro.`
},
{
  id: "kb-1-04", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "15 min",
  title: "Une bijection de ℝ sur ]−1, 1[",
  enonce: R`<p>Soit $f : \mathbb R\to\,]-1,1[$, $f(x) = \dfrac{x}{\sqrt{1+x^2}}$.</p><ol><li>Vérifier que $f$ est bien à valeurs dans $]-1,1[$.</li><li>Montrer que $f$ est bijective et déterminer $f^{-1}$.</li><li>Même question pour $g(x) = \dfrac{x}{1+|x|}$.</li></ol>`,
  decode: { donnees: [R`$\sqrt{1+x^2}>|x|$ pour tout réel $x$.`], but: R`Résoudre $y = f(x)$ pour $y\in\,]-1,1[$.`, cles: {
    signe: R`$f(x)$ a le signe de $x$ : la solution $x$ aura le signe de $y$.`,
    carre: R`On élève au carré : $y^2(1+x^2) = x^2$, donc $x^2 = \frac{y^2}{1-y^2}$ (possible car $y^2< 1$).`,
    abs: R`Pour $g$ : $|g(x)| = \frac{|x|}{1+|x|}$, on résout d'abord en $|x|$ : $|x| = \frac{|y|}{1-|y|}$.` } },
  steps: [
    { q: 1, t: "Les valeurs", h: R`<p>Le dénominateur est plus grand que $|x|$.</p>`, b: R`<p>$\sqrt{1+x^2}>\sqrt{x^2} = |x|$, donc $|f(x)|< 1$.</p>` },
    { q: 2, t: "Résoudre y = f(x)", h: R`<p>On isole $x$ en élevant au carré, sans oublier <span data-k="signe">le signe</span>, perdu par le carré.</p>`, b: R`<p>Soit $y\in\,]-1,1[$. Si $y = f(x)$, alors <span data-k="carre">$x^2 = \frac{y^2}{1-y^2}$</span> et <span data-k="signe">$x$ a le signe de $y$</span>, donc $x = \frac{y}{\sqrt{1-y^2}}$. Réciproquement ce $x$ convient : $1+x^2 = \frac1{1-y^2}$ et $\frac x{\sqrt{1+x^2}} = \frac{y}{\sqrt{1-y^2}}\sqrt{1-y^2} = y$. Une unique solution :</p><div class="sbox">$$f^{-1}(y) = \frac{y}{\sqrt{1-y^2}},\qquad y\in\,]-1,1[.$$</div>`, rappels: ["k-inj"] },
    { q: 3, t: "La variante avec |x|", h: R`<p><span data-k="abs">On résout d'abord en $|x|$</span>, puis on remet le signe.</p>`, b: R`<p>$|g(x)|< 1$ et $g(x)$ a le signe de $x$. Pour $y\in\,]-1,1[$ : <span data-k="abs">$|y| = \frac{|x|}{1+|x|}\iff|x| = \frac{|y|}{1-|y|}$</span>, et avec le signe :</p><div class="sbox">$$g^{-1}(y) = \frac{y}{1-|y|}.$$</div>` + GRAPH({ w: 400, h: 200, x: [-6, 6], y: [-1.3, 1.3], xt: [-4, 0, 4], yt: [-1, 1], curves: [{ f: x => x / Math.sqrt(1 + x * x), c: "b", lab: [2.2, 0.6, "f"] }, { f: x => x / (1 + Math.abs(x)), c: "r", dash: 1, lab: [3.3, 0.55, "g"] }], hl: [{ y: 1 }, { y: -1 }] }, R`$f$ (bleu) et $g$ (rouge) : deux bijections croissantes de $\mathbb R$ sur $]-1,1[$, qui « tassent » la droite réelle.`, "Graphes de f et g") }
  ],
  ctx: { "k-inj": R`<p>Pour tout $y$ de $]-1,1[$, une unique solution.</p>` },
  piege: R`Oublier le signe en prenant la racine : $x^2 = \frac{y^2}{1-y^2}$ a deux solutions, une seule convient.`,
  methode: R`Équation avec carré ou valeur absolue : résoudre sur la valeur absolue, puis déterminer le signe.`
},
{
  id: "kb-1-05", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "20 min",
  title: "L'ordre sur les fonctions réelles",
  enonce: R`<p>Sur $\mathbb R^{\mathbb R}$ (fonctions de $\mathbb R$ dans $\mathbb R$), on pose $f\preccurlyeq g\iff\forall x,\ f(x)\leqslant g(x)$.</p><ol><li>Vérifier que c'est une relation d'ordre. Est-il total ?</li><li>À quelle condition $\{f,g\}$ a-t-elle un maximum ? A-t-elle toujours une borne supérieure ?</li><li>Toute partie non vide majorée de $\mathbb R^{\mathbb R}$ a-t-elle une borne supérieure ?</li></ol>`,
  decode: { donnees: [R`On compare deux fonctions point par point.`], but: R`Étudier cet ordre « produit ».`, cles: {
    pt: R`Chaque propriété (réflexivité, antisymétrie, transitivité) se vérifie en chaque point $x$, avec l'ordre usuel de $\mathbb R$.`,
    sup2: R`$h = \max(f,g)$ (point par point) majore $f$ et $g$, et tout majorant de $f$ et $g$ majore $h$.`,
    supA: R`$s(x) = \sup\{f(x),\ f\in A\}$ existe dans $\mathbb R$ car cet ensemble de réels est non vide et majoré par $m(x)$.` } },
  steps: [
    { q: 1, t: "Une relation d'ordre", h: R`<p>Tout se ramène <span data-k="pt">à l'ordre de $\mathbb R$, point par point</span>.</p>`, b: R`<p><span data-k="pt">Réflexive : $f(x)\leqslant f(x)$. Antisymétrique : $f\leqslant g$ et $g\leqslant f$ donnent $f(x) = g(x)$ pour tout $x$, donc $f = g$. Transitive : $f(x)\leqslant g(x)\leqslant h(x)$</span>. Pas total : $f(x) = x$ et $g = 0$ ne sont pas comparables ($f(1)>g(1)$ mais $f(-1)< g(-1)$).</p>`, rappels: ["k-relation"] },
    { q: 2, t: "Deux fonctions", h: R`<p>Un maximum doit appartenir à $\{f,g\}$. La borne supérieure, elle, peut être une autre fonction : <span data-k="sup2">le max point par point</span>.</p>`, b: R`<p>$\{f,g\}$ a un maximum $\iff$ $f\preccurlyeq g$ ou $g\preccurlyeq f$ (les deux sont comparables). Mais la borne supérieure existe toujours : <span data-k="sup2">$h(x) = \max(f(x),g(x))$</span>. Exemple : $\sup\{x,-x\} = |x|$, qui n'est ni $x$ ni $-x$.</p>`, rappels: ["k-sup-ordre"] },
    { q: 3, t: "Toute partie majorée", h: R`<p>On fait la même chose avec un sup de réels : <span data-k="supA">propriété de la borne supérieure dans $\mathbb R$</span>, en chaque point.</p>`, b: R`<p>Soit $A\neq\emptyset$ majorée par $m$. <span data-k="supA">$s(x) = \sup_{f\in A}f(x)$ existe</span> pour tout $x$. $s$ majore $A$, et si $h$ majore $A$, alors $h(x)\geqslant f(x)$ pour tout $f\in A$, donc $h(x)\geqslant s(x)$. Donc $s = \sup A$ : oui, toujours.</p>` }
  ],
  ctx: { "k-relation": R`<p>Ordre partiel non total.</p>`, "k-sup-ordre": R`<p>Maximum $\neq$ borne supérieure.</p>` },
  piege: R`Confondre maximum et borne supérieure : $\{x,-x\}$ n'a pas de maximum mais a une borne supérieure.`,
  methode: R`Ordre point par point : chaque propriété se vérifie en chaque $x$ avec l'ordre de $\mathbb R$.`
},
{
  id: "kb-1-06", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "20 min",
  title: "Domaines d'injectivité",
  enonce: R`<p>Pour $f : E\to F$, une partie $A\subset E$ est un <b>domaine d'injectivité</b> si $f_{|A}$ est injective, et il est <b>maximal</b> si aucun domaine d'injectivité ne contient strictement $A$.</p><ol><li>Montrer qu'un domaine d'injectivité $A$ est maximal si et seulement si $f(A) = f(E)$.</li><li>Donner deux domaines d'injectivité maximaux pour $x\mapsto x^2$ sur $\mathbb R$.</li><li>Donner un domaine d'injectivité maximal pour $h : x\mapsto x^3-3x$.</li></ol>`,
  decode: { donnees: [R`$f(A)\subset f(E)$ toujours.`], but: R`Caractériser les domaines d'injectivité maximaux.`, cles: {
    ajout: R`Si $y\in f(E)\setminus f(A)$, $y = f(x)$ avec $x\notin A$ : on peut ajouter $x$ à $A$ sans perdre l'injectivité.`,
    bloque: R`Si $f(A) = f(E)$, tout $x\notin A$ a la même image qu'un $a\in A$ : l'ajouter casse l'injectivité.`,
    var: R`$h' = 3(x^2-1)$ : $h$ croît sur $]-\infty,-1]$ jusqu'à $h(-1) = 2$, puis décroît, puis croît depuis $h(1) = -2$. On a $h(x) = 2\iff(x+1)^2(x-2) = 0$.` } },
  steps: [
    { q: 1, t: "Sens ⇐", h: R`<p>Si $A$ atteint déjà toutes les valeurs, <span data-k="bloque">tout point ajouté crée un doublon</span>.</p>`, b: R`<p>Supposons $f(A) = f(E)$ et $B\supsetneq A$. Soit $x\in B\setminus A$ : $f(x)\in f(A)$, donc $f(x) = f(a)$ avec $a\in A$, $a\neq x$. Donc $f_{|B}$ n'est pas injective : $A$ est maximal.</p>` },
    { q: 1, t: "Sens ⇒", h: R`<p>Contraposée : s'il manque une valeur, <span data-k="ajout">on ajoute un de ses antécédents</span>.</p>`, b: R`<p>Si $f(A)\neq f(E)$, soit $y = f(x)\notin f(A)$. Alors $x\notin A$ et $A\cup\{x\}$ est un domaine d'injectivité (la nouvelle image $y$ est différente des autres) : $A$ n'est pas maximal.</p>`, rappels: ["k-contraposee"] },
    { q: 2, t: "Le carré", h: R`<p>Il faut atteindre tout $[0,+\infty[$ une seule fois : on garde un seul des deux antécédents $\pm\sqrt y$.</p>`, b: R`<p>$\mathbb R_+$ et $\mathbb R_-$ conviennent, mais aussi $[0,1]\cup\,]-\infty,-1[$ : chaque $y\geqslant0$ y a exactement un antécédent.</p>` },
    { q: 3, t: "Le polynôme x³ − 3x", h: R`<p><span data-k="var">Tableau de variations</span> : on prend la première branche croissante, qui atteint $]-\infty,2]$, puis un morceau de la dernière branche pour atteindre $]2,+\infty[$.</p>`, b: R`<p><span data-k="var">$h(]-\infty,-1]) = ]-\infty,2]$ et $h(]2,+\infty[) = ]2,+\infty[$</span> ($h$ croît sur $[1,+\infty[$ et $h(2) = 2$). Sur $A = ]-\infty,-1]\cup\,]2,+\infty[$, $h$ est injective (images disjointes, monotone sur chaque morceau) et $h(A) = \mathbb R = h(\mathbb R)$ : $A$ est maximal.</p>` + GRAPH({ w: 400, h: 220, x: [-2.6, 2.8], y: [-4, 5], xt: [-1, 1, 2], yt: [-2, 2], curves: [{ f: x => x ** 3 - 3 * x, c: "k", dash: 1 }, { f: x => x <= -1 || x > 2 ? x ** 3 - 3 * x : NaN, c: "b" }], hl: [{ y: 2 }] }, R`En bleu, $h$ restreinte à $]-\infty,-1]\cup\,]2,+\infty[$ : chaque valeur réelle est atteinte une et une seule fois.`, "Domaine d'injectivité maximal"), rappels: ["k-strict-mono"] }
  ],
  ctx: { "k-contraposee": R`<p>On montre « $f(A)\neq f(E)\Rightarrow A$ non maximal ».</p>`, "k-strict-mono": R`<p>$h$ strictement croissante sur chacun des deux morceaux.</p>` },
  piege: R`Croire qu'un domaine d'injectivité maximal est forcément un intervalle : $]-\infty,-1]\cup\,]2,+\infty[$ ne l'est pas.`,
  methode: R`Maximalité : comparer les images. On ne peut plus rien ajouter quand toutes les valeurs sont déjà atteintes.`
},
{
  id: "kb-1-07", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "20 min",
  title: "Deux relations sur les fonctions",
  enonce: R`<p>Sur l'ensemble des fonctions réelles définies sur $[0,+\infty[$, on pose :</p>$$f\,\mathcal R\,g\iff\forall\varepsilon>0,\ \exists A>0,\ \forall x>A,\ |f(x)-g(x)|< \varepsilon,$$$$f\,\mathcal S\,g\iff\exists A>0,\ \forall\varepsilon>0,\ \forall x>A,\ |f(x)-g(x)|< \varepsilon.$$<ol><li>Traduire chaque relation en une phrase simple.</li><li>Montrer que $\mathcal R$ et $\mathcal S$ sont réflexives, symétriques et transitives.</li><li>Laquelle implique l'autre ? Donner un couple vérifiant l'une et pas l'autre.</li></ol>`,
  decode: { donnees: [R`Seule différence : l'ordre des quantificateurs $\exists A$ et $\forall\varepsilon$.`], but: R`Comprendre l'effet de l'ordre des quantificateurs.`, cles: {
    trad: R`$\mathcal R$ : $f-g$ tend vers $0$ en $+\infty$. $\mathcal S$ : $A$ ne dépend pas de $\varepsilon$, donc $|f-g|< \varepsilon$ pour tout $\varepsilon$ au-delà de $A$, c'est-à-dire $f = g$ sur $]A,+\infty[$.`,
    eps2: R`Pour la transitivité de $\mathcal R$ : $\varepsilon/2$ pour chaque morceau et $A = \max(A_1,A_2)$.`,
    ex: R`$f(x) = \frac1{1+x}$ et $g = 0$ : la différence tend vers $0$ mais n'est jamais nulle.` } },
  steps: [
    { q: 1, t: "Traduire", h: R`<p>Dans $\mathcal S$, <span data-k="trad">le même $A$ marche pour tous les $\varepsilon$</span> : une quantité positive plus petite que tout $\varepsilon$ est nulle.</p>`, b: R`<p><span data-k="trad">$f\,\mathcal R\,g\iff f(x)-g(x)\xrightarrow[x\to+\infty]{}0$ ; $f\,\mathcal S\,g\iff f$ et $g$ coïncident sur un intervalle $]A,+\infty[$</span>.</p>`, rappels: ["k-limite-suite"] },
    { q: 2, t: "Relations d'équivalence", h: R`<p>Réflexivité et symétrie sont immédiates. Transitivité : <span data-k="eps2">inégalité triangulaire avec $\varepsilon/2$</span>.</p>`, b: R`<p>$|f-f| = 0$, et $|f-g| = |g-f|$. Transitivité de $\mathcal R$ : avec <span data-k="eps2">$A_1$ pour $(f,g)$ et $A_2$ pour $(g,h)$ à $\frac\varepsilon2$</span>, pour $x>\max(A_1,A_2)$ : $|f-h|\leqslant|f-g|+|g-h|< \varepsilon$. Pour $\mathcal S$ : si $f = g$ sur $]A_1,+\infty[$ et $g = h$ sur $]A_2,+\infty[$, alors $f = h$ sur $]\max(A_1,A_2),+\infty[$.</p>`, rappels: ["k-relation", "inegalite-triangulaire"] },
    { q: 3, t: "Comparaison", h: R`<p>Coïncider à partir d'un rang entraîne avoir une différence qui tend vers $0$, pas l'inverse : <span data-k="ex">un exemple qui tend vers $0$ sans s'annuler</span>.</p>`, b: R`<p>$\mathcal S\Rightarrow\mathcal R$ (prendre le même $A$ pour tous les $\varepsilon$). Réciproque fausse : <span data-k="ex">$f(x) = \frac1{1+x}$, $g = 0$</span> vérifient $f\,\mathcal R\,g$, mais $f(x)\neq0$ pour tout $x$, donc pas $f\,\mathcal S\,g$.</p><div class="sbox">$$\exists A\,\forall\varepsilon\ \Longrightarrow\ \forall\varepsilon\,\exists A,\quad\text{réciproque fausse}.$$</div>` }
  ],
  ctx: { "k-limite-suite": R`<p>Même structure que la définition d'une limite.</p>`, "k-relation": R`<p>Réflexive, symétrique, transitive : relations d'équivalence.</p>`, "inegalite-triangulaire": R`<p>$|f-h|\leqslant|f-g|+|g-h|$.</p>` },
  piege: R`Intervertir $\forall\varepsilon$ et $\exists A$ sans y penser : on change complètement le sens de la phrase.`,
  methode: R`Lire une phrase quantifiée : se demander de quoi dépend chaque objet introduit par $\exists$.`
}
]);
})();

LEMME.rappels({
  "k-tiroirs": { t: "Principe des tiroirs", b: R`<p>Si on range $n+1$ objets dans $n$ tiroirs, un tiroir contient au moins deux objets.</p><div class="sbox">$$\operatorname{card}E>\operatorname{card}F\ \Longrightarrow\ \text{aucune application}\ E\to F\ \text{n'est injective}.$$</div>` },
  "k-image-rec": { t: "Image directe, image réciproque", b: R`<div class="sbox">$$f(A) = \{f(x),\ x\in A\},\qquad f^{-1}(B) = \{x\in E,\ f(x)\in B\}.$$</div><p>$f^{-1}(B)$ a un sens même si $f$ n'est pas bijective. $x\in f^{-1}(B)\iff f(x)\in B$.</p>` },
  "k-ensembles": { t: "Opérations sur les parties", b: R`<div class="sbox">$$X\cup Y = \emptyset\iff X = Y = \emptyset,\qquad A\cap X = \emptyset\iff X\subset\overline A.$$</div><p>Lois de De Morgan : $\overline{X\cup Y} = \overline X\cap\overline Y$, $\overline{X\cap Y} = \overline X\cup\overline Y$.</p>` }
});

(() => {
const { FIG, S, f1, GRAPH, ARR } = window.__LA;
LEMME.exercises([
{
  id: "kb-1-08", subj: "kholles", year: "mpsi", chap: 0, level: 3, time: "20 min",
  title: "Inégalité du minimax",
  enonce: R`<p>Soit $(x_{i,j})_{1\leqslant i\leqslant n,\,1\leqslant j\leqslant p}$ un tableau de réels (on pourrait travailler dans tout ensemble ordonné où les parties finies ont une borne inférieure et une borne supérieure).</p><ol><li>Montrer que$$\sup_{1\leqslant j\leqslant p}\Big(\inf_{1\leqslant i\leqslant n}x_{i,j}\Big)\leqslant\inf_{1\leqslant i\leqslant n}\Big(\sup_{1\leqslant j\leqslant p}x_{i,j}\Big).$$</li><li>Vérifier sur $\begin{pmatrix}1&3\\4&2\end{pmatrix}$ ($i$ = ligne, $j$ = colonne), et montrer que l'inégalité peut être stricte.</li></ol>`,
  decode: { donnees: [R`Le membre de gauche : le plus grand des minima de colonnes. Celui de droite : le plus petit des maxima de lignes.`], but: R`Comparer « le meilleur des pires cas » et « le pire des meilleurs cas ».`, cles: {
    chaine: R`Pour tous $i,j$ : $\inf_kx_{k,j}\leqslant x_{i,j}\leqslant\sup_lx_{i,l}$ (un élément est entre le min de sa colonne et le max de sa ligne).`,
    sup: R`Si un nombre $M$ majore tous les éléments d'un ensemble, il majore sa borne supérieure (le plus petit des majorants).` } },
  steps: [
    { q: 1, t: "Comparer à travers un élément", h: R`<p>On compare le min d'une colonne $j$ et le max d'une ligne $i$ <span data-k="chaine">en passant par l'élément commun $x_{i,j}$</span>.</p>`, b: R`<p><span data-k="chaine">$\inf_kx_{k,j}\leqslant x_{i,j}\leqslant\sup_lx_{i,l}$</span> pour tous $i,j$. Donc, à $i$ fixé, $\sup_lx_{i,l}$ majore tous les $\inf_kx_{k,j}$ ($j$ variable).</p>` },
    { q: 1, t: "Passer au sup, puis à l'inf", h: R`<p><span data-k="sup">Un majorant majore la borne supérieure</span> ; de même un minorant minore la borne inférieure.</p>`, b: R`<p><span data-k="sup">Donc $\sup_j\inf_kx_{k,j}\leqslant\sup_lx_{i,l}$</span>, pour tout $i$. Le membre de gauche minore tous les $\sup_lx_{i,l}$, donc leur borne inférieure :</p><div class="sbox">$$\sup_j\inf_ix_{i,j}\leqslant\inf_i\sup_jx_{i,j}.$$</div>`, rappels: ["k-sup-ordre"] },
    { q: 2, t: "Un exemple strict", h: R`<p>Maxima des lignes, minima des colonnes.</p>`, b: R`<p>Maxima des lignes : $3$ et $4$, leur min vaut $3$. Minima des colonnes : $1$ et $2$, leur max vaut $2$. On a $2\leqslant3$, avec inégalité stricte. (En théorie des jeux, l'égalité correspond à un « point selle ».)</p>` }
  ],
  ctx: { "k-sup-ordre": R`<p>Utilisé deux fois : sup d'une famille majorée, inf d'une famille minorée.</p>` },
  piege: R`Croire à l'égalité : l'exemple montre que l'ordre « sup puis inf » compte.`,
  methode: R`Comparer deux expressions avec des sup et inf imbriqués : passer par un élément commun, puis remonter les bornes une par une.`
},
{
  id: "kb-1-09", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "15 min",
  title: "Milieux à coordonnées entières",
  enonce: R`<ol><li>On choisit $5$ points du plan à coordonnées entières. Montrer que deux d'entre eux ont un milieu à coordonnées entières.</li><li>Montrer que le résultat est faux avec $4$ points.</li><li>Combien de points faut-il dans l'espace (coordonnées entières) pour garantir la même conclusion ?</li></ol>`,
  decode: { donnees: [R`Le milieu de $(a,b)$ et $(c,d)$ est $\left(\frac{a+c}2,\frac{b+d}2\right)$.`], but: R`Trouver deux points dont le milieu est entier.`, cles: {
    parite: R`$\frac{a+c}2\in\mathbb Z\iff a+c$ pair $\iff a$ et $c$ ont la même parité.`,
    tiroirs: R`Le « type de parité » d'un point est le couple (parité de $x$, parité de $y$) : $4$ types possibles.` } },
  steps: [
    { q: 1, t: "Une question de parité", h: R`<p><span data-k="parite">Le milieu est entier quand les coordonnées ont deux à deux la même parité</span>.</p>`, b: R`<p><span data-k="parite">Le milieu est entier $\iff$ les abscisses ont même parité et les ordonnées aussi</span>.</p>` },
    { q: 1, t: "Les tiroirs", h: R`<p><span data-k="tiroirs">$4$ types de parité</span> pour $5$ points.</p>`, b: R`<p>Les types possibles sont (pair, pair), (pair, impair), (impair, pair), (impair, impair) : $4$ tiroirs. Avec $5$ points, deux ont le même type, et leur milieu est entier.</p>`, rappels: ["k-tiroirs"] },
    { q: 2, t: "Avec 4 points", h: R`<p>Un point de chaque type.</p>`, b: R`<p>$(0,0)$, $(0,1)$, $(1,0)$, $(1,1)$ : deux points ont toujours un type différent, donc un milieu non entier (par exemple $(\frac12,0)$).</p>` + FIG(220, 180, (() => { let s = ""; for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) s += `<circle cx="${40 + i * 50}" cy="${30 + j * 50}" r="2.5" class="body"/>`; for (const [i, j] of [[0, 2], [1, 2], [0, 1], [1, 1]]) s += `<circle cx="${40 + i * 50}" cy="${30 + j * 50}" r="6" class="mass"/>`; return s; })(), R`Quatre points de types de parité différents : aucun milieu n'est entier.`, "Quatre points de types différents") },
    { q: 3, t: "Dans l'espace", h: R`<p>Combien de types de parité pour un triplet ?</p>`, b: R`<p>$2^3 = 8$ types : il faut et il suffit de $9$ points (les $8$ sommets du cube $\{0,1\}^3$ montrent que $8$ ne suffisent pas).</p>` }
  ],
  ctx: { "k-tiroirs": R`<p>$5$ points, $4$ types.</p>` },
  piege: R`Chercher une construction géométrique : tout est une question de parité.`,
  methode: R`Pour garantir que deux objets partagent une propriété : compter les « classes » possibles et appliquer le principe des tiroirs.`
},
{
  id: "kb-1-10", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "15 min",
  title: "Une équation entre parties d'un ensemble",
  enonce: R`<p>Soient $A,B$ deux parties d'un ensemble $E$, et $f : \mathcal P(E)\to\mathcal P(E)$, $X\mapsto(A\cap X)\cup(B\cap\overline X)$.</p><ol><li>Montrer que l'équation $f(X) = \emptyset$ a une solution si et seulement si $A\cap B = \emptyset$.</li><li>Dans ce cas, déterminer toutes les solutions. Combien y en a-t-il si $E$ est fini ?</li><li>Exemple : $E = \{1,\dots,6\}$, $A = \{1,2\}$, $B = \{5\}$.</li></ol>`,
  decode: { donnees: [R`$\overline X$ est le complémentaire de $X$ dans $E$.`], but: R`Résoudre une équation dont l'inconnue est une partie.`, cles: {
    union: R`Une réunion est vide si et seulement si chacun des morceaux est vide.`,
    traduc: R`$A\cap X = \emptyset\iff X\subset\overline A$ ; $B\cap\overline X = \emptyset\iff B\subset X$.` } },
  steps: [
    { q: 1, t: "Traduire l'équation", h: R`<p><span data-k="union">Une réunion est vide quand ses deux morceaux le sont</span>, puis on traduit en inclusions.</p>`, b: R`<p>$f(X) = \emptyset\iff A\cap X = \emptyset$ et $B\cap\overline X = \emptyset\iff$ <span data-k="traduc">$B\subset X\subset\overline A$</span>.</p>`, rappels: ["k-ensembles"] },
    { q: 1, t: "Condition d'existence", h: R`<p>Il existe $X$ entre $B$ et $\overline A$ si et seulement si $B\subset\overline A$.</p>`, b: R`<p>Si une solution existe, $B\subset X\subset\overline A$, donc $B\subset\overline A$, soit $A\cap B = \emptyset$. Réciproquement, si $A\cap B = \emptyset$, $X = B$ convient.</p><div class="sbox">$$f(X) = \emptyset\ \text{a une solution}\iff A\cap B = \emptyset.$$</div>` },
    { q: 2, t: "Toutes les solutions", h: R`<p>On choisit librement ce qu'on met de $\overline A\setminus B$ dans $X$.</p>`, b: R`<p>Les solutions sont les $X$ avec $B\subset X\subset\overline A$, c'est-à-dire $X = B\cup Y$ avec $Y\subset\overline A\setminus B = \overline{A\cup B}$. Si $E$ est fini, il y en a $2^{\operatorname{card}E-\operatorname{card}A-\operatorname{card}B}$.</p>` },
    { q: 3, t: "L'exemple", h: R`<p>$\overline{A\cup B} = \{3,4,6\}$.</p>`, b: R`<p>Les solutions sont $\{5\}\cup Y$, $Y\subset\{3,4,6\}$ : $8 = 2^{6-2-1}$ solutions, de $\{5\}$ à $\{3,4,5,6\}$.</p>` }
  ],
  ctx: { "k-ensembles": R`<p>On traduit chaque intersection vide en inclusion.</p>` },
  piege: R`Chercher $X$ « par essais » : la traduction en encadrement $B\subset X\subset\overline A$ donne tout d'un coup.`,
  methode: R`Équation ensembliste : décomposer en conditions simples (intersections vides) et les traduire en inclusions.`
},
{
  id: "kb-1-11", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "15 min",
  title: "Quand f ∘ g ∘ f est bijective",
  enonce: R`<p>Soient $f : E\to F$ et $g : F\to E$ telles que $f\circ g\circ f$ soit bijective (de $E$ dans $F$).</p><ol><li>Montrer que $f$ est injective puis surjective.</li><li>En déduire que $g$ est bijective.</li><li>Le résultat reste-t-il vrai si seulement $g\circ f$ est bijective ?</li></ol>`,
  decode: { donnees: [R`$f\circ g\circ f$ bijective.`], but: R`En déduire la bijectivité de $f$ et de $g$.`, cles: {
    groupe: R`On regroupe : $f\circ g\circ f = (f\circ g)\circ f = f\circ(g\circ f)$.`,
    expr: R`$g = f^{-1}\circ(f\circ g\circ f)\circ f^{-1}$ : composée de trois bijections.` } },
  steps: [
    { q: 1, t: "f injective et surjective", h: R`<p>On <span data-k="groupe">regroupe de deux façons</span> et on applique l'exercice sur les composées.</p>`, b: R`<p><span data-k="groupe">$(f\circ g)\circ f$</span> injective $\Rightarrow f$ injective (c'est l'application de départ). <span data-k="groupe">$f\circ(g\circ f)$</span> surjective $\Rightarrow f$ surjective (c'est l'application d'arrivée). Donc $f$ est bijective.</p>`, rappels: ["k-compo"] },
    { q: 2, t: "g bijective", h: R`<p>On <span data-k="expr">isole $g$</span> en composant par $f^{-1}$ à gauche et à droite.</p>`, b: R`<p><span data-k="expr">$g = f^{-1}\circ(f\circ g\circ f)\circ f^{-1}$</span>, composée de bijections : $g$ est bijective.</p>` },
    { q: 3, t: "Avec g ∘ f seulement", h: R`<p>Le même exemple que pour les composées : $f$ injective non surjective.</p>`, b: R`<p>Non : $E = \{0\}$, $F = \{0,1\}$, $f(0) = 0$, $g$ constante nulle. $g\circ f$ est bijective, mais ni $f$ (pas surjective) ni $g$ (pas injective) ne le sont. Dans $f\circ g\circ f$, $f$ apparaît à la fois au début et à la fin, ce qui la force à être bijective.</p>` }
  ],
  ctx: { "k-compo": R`<p>Injective : application de départ ; surjective : application d'arrivée.</p>` },
  piege: R`Oublier que l'énoncé ne suppose rien sur $g\circ f$ ou $f\circ g$ séparément.`,
  methode: R`Composées : regrouper les facteurs de manière à faire apparaître $f$ comme « premier » ou « dernier » appliqué.`
},
{
  id: "kb-1-12", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "25 min",
  title: "Paramétrer le cercle par des rationnelles",
  enonce: R`<p>Soit $F : \mathbb R\to\mathbb R^2$, $F(t) = \left(\dfrac{1-t^2}{1+t^2},\dfrac{2t}{1+t^2}\right)$, et $\mathcal C = \{(x,y) : x^2+y^2 = 1\}$.</p><ol><li>Montrer que $F(\mathbb R)\subset\mathcal C$.</li><li>Montrer que $F(t) = (x,y)$ entraîne $t = \dfrac{y}{1+x}$. En déduire que $F$ est injective.</li><li>Montrer que $F$ est une bijection de $\mathbb R$ sur $\mathcal C\setminus\{(-1,0)\}$ et donner sa réciproque.</li><li>Retrouver ces formules avec $t = \tan\frac\theta2$, et en déduire les points du cercle à coordonnées rationnelles.</li></ol>`,
  decode: { donnees: [R`$(1-t^2)^2+(2t)^2 = (1+t^2)^2$.`], but: R`Montrer qu'on décrit tout le cercle (sauf un point) avec un paramètre réel.`, cles: {
    unpx: R`$1+x = \frac{2}{1+t^2}$ et $y = \frac{2t}{1+t^2}$, donc $\frac{y}{1+x} = t$.`,
    pente: R`$t = \frac{y}{1+x}$ est la pente de la droite qui joint $(-1,0)$ au point $(x,y)$.`,
    moitie: R`$\cos\theta = \frac{1-\tan^2(\theta/2)}{1+\tan^2(\theta/2)}$ et $\sin\theta = \frac{2\tan(\theta/2)}{1+\tan^2(\theta/2)}$.` } },
  steps: [
    { q: 1, t: "Sur le cercle", h: R`<p>Calculer $x^2+y^2$ et reconnaître une identité remarquable.</p>`, b: R`<p>$(1-t^2)^2+4t^2 = 1+2t^2+t^4 = (1+t^2)^2$, donc $x^2+y^2 = 1$.</p>` },
    { q: 2, t: "Retrouver t", h: R`<p><span data-k="unpx">On calcule $1+x$</span> : il reste le dénominateur seul.</p>`, b: R`<p><span data-k="unpx">$1+x = \frac{2}{1+t^2}\neq0$ et $\frac{y}{1+x} = t$</span>. Si $F(t) = F(s)$, la formule donne $t = s$ : $F$ est injective. Et $x\neq-1$ toujours : $(-1,0)$ n'est pas atteint.</p>`, rappels: ["k-inj"] },
    { q: 3, t: "Surjectivité sur le cercle privé d'un point", h: R`<p>Soit $(x,y)\in\mathcal C$, $x\neq-1$. On pose $t = \frac{y}{1+x}$ et on vérifie $F(t) = (x,y)$ en utilisant $y^2 = 1-x^2$.</p>`, b: R`<p>$1+t^2 = \frac{(1+x)^2+y^2}{(1+x)^2} = \frac{2+2x}{(1+x)^2} = \frac{2}{1+x}$. Donc $\frac{1-t^2}{1+t^2} = \frac{2}{1+t^2}-1 = x$ et $\frac{2t}{1+t^2} = t(1+x) = y$.</p><div class="sbox">$$F : \mathbb R\to\mathcal C\setminus\{(-1,0)\}\ \text{bijective},\qquad F^{-1}(x,y) = \frac{y}{1+x}.$$</div><p>Interprétation : <span data-k="pente">$t$ est la pente de la droite passant par $(-1,0)$ et $(x,y)$</span>.</p>` + FIG(260, 230, (() => { const c = [140, 115], r = 80, t = 0.6, x = (1 - t * t) / (1 + t * t), y = 2 * t / (1 + t * t); let s = `<circle cx="${c[0]}" cy="${c[1]}" r="${r}" class="thin" style="fill:none"/><line class="ax" x1="20" y1="${c[1]}" x2="250" y2="${c[1]}"/>`; s += `<line class="vb" style="stroke-width:1.8" x1="${c[0] - r}" y1="${c[1]}" x2="${f1(c[0] + r * 1.15)}" y2="${f1(c[1] - r * t * 2.15)}"/>`; s += `<circle cx="${c[0] - r}" cy="${c[1]}" r="5" class="body"/><circle cx="${f1(c[0] + r * x)}" cy="${f1(c[1] - r * y)}" r="5" class="mass"/>`; return s + S(c[0] - r - 6, c[1] + 18, "(−1, 0)", "middle") + S(f1(c[0] + r * x + 8), f1(c[1] - r * y - 6), "F(t)") + S(70, 90, "pente t", "middle", "sm b"); })(), R`La droite de pente $t$ issue de $(-1,0)$ recoupe le cercle en $F(t)$.`, "Paramétrage rationnel du cercle") },
    { q: 4, t: "Angle moitié et points rationnels", h: R`<p><span data-k="moitie">Formules en tangente de l'angle moitié</span>. Si $t\in\mathbb Q$, $F(t)$ est rationnel, et réciproquement $t = \frac y{1+x}$.</p>`, b: R`<p>Avec $t = \tan\frac\theta2$ ($\theta\in\,]-\pi,\pi[$) : <span data-k="moitie">$F(t) = (\cos\theta,\sin\theta)$</span>. Points rationnels : $(x,y)\in\mathcal C\cap\mathbb Q^2$, $x\neq-1$ $\iff t\in\mathbb Q$. Par exemple $t = \frac12$ donne $\left(\frac35,\frac45\right)$, d'où le triangle $3,4,5$ ; $t = \frac23$ donne $\left(\frac5{13},\frac{12}{13}\right)$.</p>` }
  ],
  ctx: { "k-inj": R`<p>Injectivité par une formule qui retrouve $t$.</p>` },
  piege: R`Oublier le point $(-1,0)$ : il correspond à $t = \pm\infty$ ($\theta = \pi$).`,
  methode: R`Pour inverser un paramétrage : chercher une combinaison simple des coordonnées qui redonne le paramètre.`
},
{
  id: "kb-1-13", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "25 min",
  title: "Images directes et réciproques",
  enonce: R`<p>Soit $f : E\to F$.</p><ol><li>Soit $A\subset E$. Montrer $A\subset f^{-1}(f(A))$, avec égalité si $f$ est injective. En déduire : $f$ injective $\iff\forall A\subset E$, $f^{-1}(f(A)) = A$.</li><li>Soit $B\subset F$. Montrer $f(f^{-1}(B))\subset B$, avec égalité si $f$ est surjective. En déduire : $f$ surjective $\iff\forall B\subset F$, $f(f^{-1}(B)) = B$.</li><li>Illustrer avec $f(x) = x^2$ sur $\mathbb R$, $A = [0,1]$ et $B = [-1,4]$.</li></ol>`,
  decode: { donnees: [R`$x\in f^{-1}(B)\iff f(x)\in B$.`], but: R`Comparer $A$ avec $f^{-1}(f(A))$, et $B$ avec $f(f^{-1}(B))$.`, cles: {
    single: R`Avec $A = \{x\}$ : $f^{-1}(f(\{x\})) = \{x'\ :\ f(x') = f(x)\}$, l'ensemble des antécédents de $f(x)$.`,
    singleB: R`Avec $B = \{y\}$ : $f(f^{-1}(\{y\})) = \{y\}$ si $y$ a un antécédent, $\emptyset$ sinon.` } },
  steps: [
    { q: 1, t: "A ⊂ f⁻¹(f(A))", h: R`<p>Si $x\in A$, alors $f(x)\in f(A)$, ce qui veut dire $x\in f^{-1}(f(A))$.</p>`, b: R`<p>$x\in A\Rightarrow f(x)\in f(A)\Rightarrow x\in f^{-1}(f(A))$. Si $f$ est injective et $x\in f^{-1}(f(A))$ : $f(x) = f(a)$ avec $a\in A$, donc $x = a\in A$.</p>`, rappels: ["k-image-rec"] },
    { q: 1, t: "Caractériser l'injectivité", h: R`<p>Pour la réciproque, on teste la propriété <span data-k="single">sur un singleton</span>.</p>`, b: R`<p>Si $f^{-1}(f(\{x\})) = \{x\}$ pour tout $x$ : <span data-k="single">$x$ est le seul antécédent de $f(x)$</span>, donc $f$ est injective.</p><div class="sbox">$$f\ \text{injective}\iff\forall A,\ f^{-1}(f(A)) = A.$$</div>` },
    { q: 2, t: "f(f⁻¹(B)) ⊂ B", h: R`<p>Un élément de $f(f^{-1}(B))$ est l'image d'un $x$ dont l'image est dans $B$.</p>`, b: R`<p>$y = f(x)$ avec $f(x)\in B$ : $y\in B$. Si $f$ est surjective et $y\in B$ : $y = f(x)$ avec $x\in f^{-1}(B)$, donc $y\in f(f^{-1}(B))$. Réciproquement, <span data-k="singleB">avec $B = \{y\}$, l'égalité force $y$ à avoir un antécédent</span>.</p><div class="sbox">$$f\ \text{surjective}\iff\forall B,\ f(f^{-1}(B)) = B.$$</div>` },
    { q: 3, t: "Avec le carré", h: R`<p>Le carré n'est ni injectif ni surjectif sur $\mathbb R$ : les inclusions sont strictes.</p>`, b: R`<p>$f([0,1]) = [0,1]$ et $f^{-1}([0,1]) = [-1,1]\supsetneq A$. $f^{-1}([-1,4]) = [-2,2]$ et $f([-2,2]) = [0,4]\subsetneq B$ : les négatifs ne sont pas atteints.</p>` }
  ],
  ctx: { "k-image-rec": R`<p>Définitions utilisées à chaque ligne.</p>` },
  piege: R`Écrire $f^{-1}(f(A)) = A$ sans hypothèse : avec $x^2$, $f^{-1}(f([0,1])) = [-1,1]$.`,
  methode: R`Pour une égalité d'ensembles : deux inclusions, chacune par « soit $x$ dans… ».`
},
{
  id: "kb-1-14", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "20 min",
  title: "L'inversion envoie un cercle sur une droite",
  enonce: R`<p>Soit $f : \mathbb C^\ast\to\mathbb C$, $f(z) = \dfrac1z$.</p><ol><li>$f$ est-elle injective ? surjective ? Montrer qu'elle induit une bijection de $\mathbb C^\ast$ sur lui-même.</li><li>Soit $\mathcal E = \{z : |z-2| = 2\}$ et $\mathcal D = \{w : \operatorname{Re}w = \frac14\}$. Décrire $\mathcal E$ et $\mathcal D$ géométriquement.</li><li>Montrer que pour $z\neq0$ : $z\in\mathcal E\iff\frac1z\in\mathcal D$. En déduire que $f$ induit une bijection de $\mathcal E\setminus\{0\}$ sur $\mathcal D$.</li></ol>`,
  decode: { donnees: [R`$f\circ f = \mathrm{Id}$ sur $\mathbb C^\ast$.`], but: R`Montrer qu'une inversion transforme un cercle passant par $0$ en droite.`, cles: {
    dev: R`$|z-2|^2 = 4\iff z\bar z-2z-2\bar z+4 = 4\iff z\bar z = 2(z+\bar z)$.`,
    div: R`On divise par $z\bar z = |z|^2\neq0$ : $1 = 2\left(\frac1{\bar z}+\frac1z\right) = 4\operatorname{Re}\frac1z$.` } },
  steps: [
    { q: 1, t: "Bijectivité", h: R`<p>$f$ est sa propre réciproque sur $\mathbb C^\ast$ ; $0$ n'est jamais atteint.</p>`, b: R`<p>$\frac1z = \frac1{z'}\Rightarrow z = z'$ : injective. $0$ n'a pas d'antécédent : pas surjective sur $\mathbb C$. Mais $f(\mathbb C^\ast)\subset\mathbb C^\ast$ et $f\circ f = \mathrm{Id}$ : bijection de $\mathbb C^\ast$ sur lui-même.</p>`, rappels: ["k-inj"] },
    { q: 2, t: "Les deux ensembles", h: R`<p>$|z-a| = r$ : cercle de centre $a$ et de rayon $r$.</p>`, b: R`<p>$\mathcal E$ : cercle de centre $2$, de rayon $2$, passant par $0$ et $4$. $\mathcal D$ : droite verticale d'abscisse $\frac14$.</p>` },
    { q: 3, t: "L'équivalence", h: R`<p><span data-k="dev">On développe le module au carré</span>, puis <span data-k="div">on divise par $|z|^2$</span> pour faire apparaître $\frac1z$.</p>`, b: R`<p>Pour $z\neq0$ : <span data-k="dev">$z\in\mathcal E\iff z\bar z = 2(z+\bar z)$</span> <span data-k="div">$\iff1 = 4\operatorname{Re}\frac1z$</span> $\iff\frac1z\in\mathcal D$. Donc $f(\mathcal E\setminus\{0\})\subset\mathcal D$ et, comme $f\circ f = \mathrm{Id}$, tout $w\in\mathcal D$ (non nul) est l'image de $\frac1w\in\mathcal E\setminus\{0\}$.</p><div class="sbox">$$z\mapsto\frac1z\ :\ \mathcal E\setminus\{0\}\to\mathcal D\ \text{bijective}.$$</div><p>Vérification : $z = 4\in\mathcal E$ donne $\frac14\in\mathcal D$ ; $z = 2+2i$ donne $\frac{2-2i}{8} = \frac14-\frac i4\in\mathcal D$.</p>` + FIG(320, 200, (() => { const X = v => 60 + v * 45, Y = v => 100 - v * 45; let s = `<line class="ax" x1="10" y1="100" x2="310" y2="100"/><line class="ax" x1="${X(0)}" y1="10" x2="${X(0)}" y2="190"/><circle cx="${X(2)}" cy="100" r="90" class="vb" style="fill:none;stroke-width:2"/><line class="vr" style="stroke-width:2" x1="${f1(X(0.25))}" y1="10" x2="${f1(X(0.25))}" y2="190"/>`; return s + S(X(3.4), 30, "E", "middle", "sm b") + S(X(0.25) + 6, 22, "D", "start", "sm r"); })(), R`Le cercle $\mathcal E$ (bleu), qui passe par $0$, est envoyé par $z\mapsto\frac1z$ sur la droite $\mathcal D$ (rouge).`, "Inversion cercle droite"), rappels: ["k-module"] }
  ],
  ctx: { "k-inj": R`<p>$f\circ f = \mathrm{Id}$.</p>`, "k-module": R`<p>$|z-2|^2 = (z-2)(\bar z-2)$.</p>` },
  piege: R`Oublier d'exclure $0$ : il est sur le cercle mais n'a pas d'inverse ; il correspond au « point à l'infini » de la droite.`,
  methode: R`Lieu de $\frac1z$ : écrire l'équation en $z,\bar z$, diviser par $z\bar z$.`
},
{
  id: "kb-1-15", subj: "kholles", year: "mpsi", chap: 0, level: 3, time: "20 min",
  title: "Point fixe d'une fonction croissante",
  enonce: R`<p>Soit $f : [0,1]\to[0,1]$ <b>croissante</b> (pas forcément continue). On note $A = \{x\in[0,1] : f(x)\geqslant x\}$.</p><ol><li>Montrer que $A$ est non vide et majorée. On note $c = \sup A$ ; montrer que $c\in[0,1]$.</li><li>Montrer que $c\leqslant f(c)$.</li><li>Montrer que $f(c)\in A$, et conclure que $f(c) = c$.</li><li>Montrer que le résultat est faux pour une fonction décroissante.</li></ol>`,
  decode: { donnees: [R`$f$ croissante : $x\leqslant y\Rightarrow f(x)\leqslant f(y)$.`], but: R`Montrer l'existence d'un point fixe sans continuité.`, cles: {
    maj: R`Pour $x\in A$ : $x\leqslant f(x)\leqslant f(c)$ (car $x\leqslant c$ et $f$ croissante). Donc $f(c)$ majore $A$.`,
    stab: R`$c\leqslant f(c)$ donne $f(c)\leqslant f(f(c))$ : c'est exactement $f(c)\in A$.` } },
  steps: [
    { q: 1, t: "La borne supérieure existe", h: R`<p>$0\in A$ car $f(0)\geqslant0$.</p>`, b: R`<p>$f(0)\in[0,1]$ donc $f(0)\geqslant0$ : $0\in A$. $A\subset[0,1]$ est majorée par $1$. Donc $c = \sup A$ existe et $0\leqslant c\leqslant1$.</p>`, rappels: ["k-borne-inf"] },
    { q: 2, t: "c ≤ f(c)", h: R`<p>Montrer que <span data-k="maj">$f(c)$ est un majorant de $A$</span>, puis $c$ est le plus petit des majorants.</p>`, b: R`<p><span data-k="maj">Pour $x\in A$ : $x\leqslant f(x)\leqslant f(c)$</span>. Donc $f(c)$ majore $A$ et $c\leqslant f(c)$.</p>` },
    { q: 3, t: "f(c) ∈ A, puis f(c) = c", h: R`<p>On <span data-k="stab">applique $f$ à l'inégalité précédente</span>.</p>`, b: R`<p><span data-k="stab">$c\leqslant f(c)\Rightarrow f(c)\leqslant f(f(c))$</span>, donc $f(c)\in A$, donc $f(c)\leqslant\sup A = c$. Avec la question 2 :</p><div class="sbox">$$f(c) = c.$$</div><p>Exemple : $f(x) = 0$ pour $x< \frac12$, $f(x) = 1$ sinon. $A = \{0\}\cup[\frac12,1]$, $c = 1$, et $f(1) = 1$.</p>` },
    { q: 4, t: "Fonction décroissante", h: R`<p>Une fonction qui « saute » par-dessus la diagonale.</p>`, b: R`<p>$f(x) = 1$ si $x< \frac12$, $f(x) = 0$ sinon : décroissante, sans point fixe ($f(x) = x$ demanderait $x = 1< \frac12$ ou $x = 0\geqslant\frac12$). Avec continuité, il y aurait un point fixe (TVI), mais pas sans.</p>` + GRAPH({ w: 300, h: 220, x: [0, 1], y: [-0.05, 1.1], xt: [0, 0.5, 1], yt: [1], curves: [{ f: x => x < 0.5 ? 1 : NaN, c: "r" }, { f: x => x >= 0.5 ? 0 : NaN, c: "r" }, { f: x => x, c: "k", dash: 1 }] }, R`Une fonction décroissante qui saute par-dessus la diagonale $y = x$ : aucun point fixe.`, "Fonction décroissante sans point fixe") }
  ],
  ctx: { "k-borne-inf": R`<p>Version borne supérieure : $A$ non vide majorée.</p>` },
  piege: R`Chercher à utiliser le TVI : $f$ n'est pas supposée continue, seule la croissance sert.`,
  methode: R`Point fixe d'une application croissante : prendre la borne supérieure des $x$ tels que $f(x)\geqslant x$.`
}
]);
})();

LEMME.rappels({
  "k-max-N": { t: "Parties de ℕ", b: R`<p>Toute partie non vide de $\mathbb N$ a un plus petit élément. Toute partie non vide et <b>majorée</b> (en particulier finie) de $\mathbb N$ a un plus grand élément.</p>` },
  "k-recurrence-forte": { t: "Récurrence forte", b: R`<p>Si $P(0)$ est vraie et si, pour tout $n$, « $P(0),\dots,P(n-1)$ vraies » entraîne $P(n)$, alors $P(n)$ est vraie pour tout $n$.</p>` },
  "k-tan-diff": { t: "Tangente d'une différence", b: R`<div class="sbox">$$\tan(a-b) = \frac{\tan a-\tan b}{1+\tan a\tan b},$$</div><p>valable quand $a$, $b$ et $a-b$ sont hors de $\frac\pi2+\pi\mathbb Z$. Et $\tan\frac\pi6 = \frac1{\sqrt3}$.</p>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kb-1-16", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "20 min",
  title: "Une bijection de ℕ² sur ℕ*",
  enonce: R`<p>Pour $n\in\mathbb N$, on pose $A_n = \{k\in\mathbb N : 2^k\ \text{divise}\ n\}$.</p><ol><li>Décrire $A_0$.</li><li>Pour $n\geqslant1$, montrer que $A_n$ a un plus grand élément $p$.</li><li>Montrer que $n = 2^p(2q+1)$ avec $q\in\mathbb N$, et que cette écriture est unique.</li><li>En déduire que $f : \mathbb N^2\to\mathbb N^\ast$, $(p,q)\mapsto2^p(2q+1)$, est bijective. Calculer $f^{-1}(24)$ et $f^{-1}(40)$.</li></ol>`,
  decode: { donnees: [R`Tout entier $n\geqslant1$ s'écrit (puissance de $2$) $\times$ (nombre impair).`], but: R`Construire une bijection explicite entre $\mathbb N^2$ et $\mathbb N^\ast$.`, cles: {
    majo: R`Si $2^k\mid n$ avec $n\geqslant1$, alors $2^k\leqslant n$, donc $k< n$ : $A_n$ est majoré.`,
    impair: R`$m = \frac n{2^p}$ est impair : sinon $2^{p+1}$ diviserait $n$, contredisant la maximalité de $p$.`,
    unic: R`Si $2^p(2q+1) = 2^{p'}(2q'+1)$ avec $p< p'$, on divise par $2^p$ : impair $=$ pair, absurde.` } },
  steps: [
    { q: 1, t: "Le cas n = 0", h: R`<p>Tout entier divise $0$.</p>`, b: R`<p>$2^k\mid0$ pour tout $k$ : $A_0 = \mathbb N$, qui n'a pas de plus grand élément. C'est pourquoi $0$ est exclu de l'arrivée.</p>` },
    { q: 2, t: "Plus grand élément", h: R`<p>$A_n$ contient $0$ et <span data-k="majo">est majoré</span>.</p>`, b: R`<p>$0\in A_n$ ($2^0 = 1$ divise $n$). <span data-k="majo">Si $k\in A_n$, $2^k\leqslant n$ donc $k\leqslant n$</span>. Partie non vide majorée de $\mathbb N$ : elle a un plus grand élément $p$.</p>`, rappels: ["k-max-N"] },
    { q: 3, t: "La décomposition", h: R`<p>On divise $n$ par $2^p$ : <span data-k="impair">le quotient est impair</span> par maximalité. Pour l'unicité, <span data-k="unic">on compare les puissances de $2$</span>.</p>`, b: R`<p>$n = 2^pm$ et <span data-k="impair">$m$ est impair</span>, $m = 2q+1$. <span data-k="unic">Si $2^p(2q+1) = 2^{p'}(2q'+1)$, alors $p = p'$</span> (sinon on obtient « pair = impair »), puis $q = q'$.</p>` },
    { q: 4, t: "La bijection", h: R`<p>Existence de l'écriture : surjectivité. Unicité : injectivité.</p>`, b: R`<p>$f(p,q)\geqslant1$ ; tout $n\geqslant1$ a un antécédent (existence) et un seul (unicité) :</p><div class="sbox">$$f : (p,q)\mapsto2^p(2q+1)\ \text{est une bijection de}\ \mathbb N^2\ \text{sur}\ \mathbb N^\ast.$$</div><p>$24 = 2^3\times3$ : $f^{-1}(24) = (3,1)$. $40 = 2^3\times5$ : $f^{-1}(40) = (3,2)$. Conséquence : $\mathbb N^2$ est dénombrable.</p>`, rappels: ["k-inj"] }
  ],
  ctx: { "k-max-N": R`<p>$A_n$ non vide majorée.</p>`, "k-inj": R`<p>Existence et unicité de l'antécédent.</p>` },
  piege: R`Oublier que $A_0 = \mathbb N$ n'a pas de maximum : $0$ ne peut pas s'écrire $2^p(2q+1)$.`,
  methode: R`Pour une bijection : montrer que l'équation $f(x) = y$ a exactement une solution (existence puis unicité).`
},
{
  id: "kb-1-17", subj: "kholles", year: "mpsi", chap: 0, level: 2, time: "10 min",
  title: "Une équation fonctionnelle impossible",
  enonce: R`<p>Existe-t-il $f : \mathbb R\to\mathbb R$ surjective telle que $f(f(x)) = f(x)^2$ pour tout réel $x$ ? Même question avec $f(f(x)) = f(x)^3$.</p>`,
  decode: { donnees: [R`$f$ surjective : tout réel $y$ s'écrit $f(x)$.`], but: R`Décider si une telle fonction existe.`, cles: {
    subst: R`Si $y = f(x)$, la relation dit $f(y) = y^2$. Comme tout $y$ est de la forme $f(x)$, on obtient $f(y) = y^2$ pour tout $y$.`,
    cube: R`$f(y) = y^3$ est surjective sur $\mathbb R$, et vérifie bien $f(f(x)) = (x^3)^3 = f(x)^3$.` } },
  steps: [
    { q: 1, t: "Exploiter la surjectivité", h: R`<p>La relation porte sur les valeurs $f(x)$ ; <span data-k="subst">la surjectivité dit que ces valeurs sont tous les réels</span>.</p>`, b: R`<p>Soit $y\in\mathbb R$ ; $y = f(x)$, et la relation donne <span data-k="subst">$f(y) = y^2$</span>. Donc $f(y) = y^2$ pour tout $y$ : $f$ est la fonction carré.</p>` },
    { q: 1, t: "Contradiction", h: R`<p>La fonction carré n'atteint pas les négatifs.</p>`, b: R`<p>$y\mapsto y^2$ ne prend pas la valeur $-1$ : elle n'est pas surjective. Contradiction.</p><div class="sbox">$$\text{Aucune fonction surjective ne vérifie}\ f\circ f = f^2.$$</div>`, rappels: ["absurde"] },
    { q: 1, t: "Avec un cube", h: R`<p>Même raisonnement : $f(y) = y^3$.</p>`, b: R`<p>Le même argument force $f(y) = y^3$, et <span data-k="cube">cette fonction est surjective et convient</span>. Donc oui dans ce cas, et c'est la seule.</p>` }
  ],
  ctx: { "absurde": R`<p>On suppose qu'une telle $f$ existe.</p>` },
  piege: R`Chercher des exemples compliqués : la surjectivité détermine $f$ entièrement.`,
  methode: R`Équation fonctionnelle portant sur $f(f(x))$ : poser $y = f(x)$ et utiliser l'ensemble des valeurs prises par $f$.`
},
{
  id: "kb-1-18", subj: "kholles", year: "mpsi", chap: 0, level: 3, time: "20 min",
  title: "Une équation fonctionnelle à paramètre",
  enonce: R`<p>Soit $a\in\mathbb R$ et $f : \mathbb R\to\mathbb R$ telle que $f(0) = \frac12$ et$$\forall(x,y)\in\mathbb R^2,\quad f(x+y) = f(x)f(a-y)+f(y)f(a-x).$$<ol><li>Calculer $f(a)$.</li><li>Montrer que $f(a-x) = f(x)$ pour tout $x$.</li><li>Montrer que $f(x)^2 = \frac14$ pour tout $x$.</li><li>Montrer que $f$ est constante égale à $\frac12$.</li></ol>`,
  decode: { donnees: [R`Une relation vraie pour tous $x,y$ : on peut choisir des valeurs particulières.`], but: R`Déterminer $f$.`, cles: {
    zero: R`$x = y = 0$ : $f(0) = 2f(0)f(a)$.`,
    yzero: R`$y = 0$ : $f(x) = f(x)f(a)+f(0)f(a-x)$.`,
    yax: R`$y = a-x$ : $f(a) = f(x)f(x)+f(a-x)f(a-x)$.`,
    moitie: R`$x = y = \frac t2$ : $f(t) = 2f(\frac t2)f(a-\frac t2) = 2f(\frac t2)^2$.` } },
  steps: [
    { q: 1, t: "f(a)", h: R`<p>Le choix le plus simple : <span data-k="zero">$x = y = 0$</span>.</p>`, b: R`<p><span data-k="zero">$\frac12 = 2\cdot\frac12f(a)$</span>, donc $f(a) = \frac12$.</p>` },
    { q: 2, t: "Une symétrie", h: R`<p><span data-k="yzero">$y = 0$</span> fait apparaître $f(a-x)$.</p>`, b: R`<p><span data-k="yzero">$f(x) = \frac12f(x)+\frac12f(a-x)$</span>, donc $f(a-x) = f(x)$ : le graphe est symétrique par rapport à la droite $x = \frac a2$.</p>` },
    { q: 3, t: "Le carré", h: R`<p>On choisit <span data-k="yax">$y = a-x$</span> pour que $x+y = a$.</p>`, b: R`<p><span data-k="yax">$f(a) = f(x)^2+f(a-x)^2 = 2f(x)^2$</span>, donc $f(x)^2 = \frac14$ : $f(x) = \pm\frac12$.</p>` },
    { q: 4, t: "Le signe", h: R`<p>Il reste à exclure $-\frac12$. On écrit $f(t)$ comme <span data-k="moitie">un carré</span>, donc positif.</p>`, b: R`<p><span data-k="moitie">$f(t) = 2f(\frac t2)^2\geqslant0$</span>, donc $f(t) = \frac12$.</p><div class="sbox">$$f\equiv\tfrac12.$$</div><p>Réciproquement, la constante $\frac12$ convient : $\frac14+\frac14 = \frac12$.</p>` }
  ],
  ctx: {},
  piege: R`S'arrêter à $f(x) = \pm\frac12$ : une fonction qui vaut tantôt $\frac12$ tantôt $-\frac12$ n'est pas exclue sans l'argument de signe.`,
  methode: R`Équation fonctionnelle : tester des valeurs particulières ($0$, $a$, $a-x$, $\frac t2$) pour extraire des informations, puis vérifier la réciproque.`
},
{
  id: "kb-1-19", subj: "kholles", year: "mpsi", chap: 0, level: 3, time: "25 min",
  title: "Récurrence et plus grand élément",
  enonce: R`<ol><li>Rappeler le principe de récurrence et le principe du plus grand élément (toute partie finie non vide de $\mathbb N$ a un plus grand élément).</li><li>En admettant la récurrence, montrer le principe du plus grand élément par récurrence sur $n = \operatorname{card}E$.</li><li>Réciproquement, on admet le principe du plus grand élément. Soit $P$ une propriété avec $P(0)$ vraie et $P(k)\Rightarrow P(k+1)$. On suppose $P(N)$ fausse et on considère $B = \{k\leqslant N : P(0),\dots,P(k)\ \text{vraies}\}$. Aboutir à une contradiction.</li></ol>`,
  decode: { donnees: [R`Deux principes fondamentaux sur $\mathbb N$.`], but: R`Montrer qu'ils sont équivalents.`, cles: {
    retire: R`Pour $\operatorname{card}E = n+1$ : on retire un élément $a$ ; $E\setminus\{a\}$ a un plus grand élément $b$, et $\max E = \max(a,b)$.`,
    maxB: R`$B$ contient $0$ et est inclus dans $\{0,\dots,N\}$ : non vide et fini, il a un plus grand élément $m$.` } },
  steps: [
    { q: 1, t: "Les deux principes", h: R`<p>Énoncer précisément.</p>`, b: R`<p>Récurrence : si $P(0)$ et $\forall k$, $P(k)\Rightarrow P(k+1)$, alors $\forall n$, $P(n)$. Plus grand élément : toute partie finie non vide de $\mathbb N$ a un plus grand élément.</p>`, rappels: ["recurrence"] },
    { q: 2, t: "Récurrence ⇒ plus grand élément", h: R`<p>Récurrence sur le cardinal : <span data-k="retire">on enlève un élément</span>.</p>`, b: R`<p>$\operatorname{card}E = 1$ : $E = \{a\}$, $\max E = a$. Si c'est vrai pour les parties à $n$ éléments et $\operatorname{card}E = n+1$ : <span data-k="retire">$a\in E$, $b = \max(E\setminus\{a\})$</span>, et le plus grand de $a$ et $b$ est le maximum de $E$.</p>` },
    { q: 3, t: "Plus grand élément ⇒ récurrence", h: R`<p>On prend <span data-k="maxB">le plus grand $m$ jusqu'où tout est vrai</span>. L'hérédité permet d'aller un cran plus loin.</p>`, b: R`<p><span data-k="maxB">$B$ a un plus grand élément $m$</span>. $m< N$ car $P(N)$ est fausse. $P(0),\dots,P(m)$ vraies, donc $P(m+1)$ vraie (hérédité), et $m+1\leqslant N$ : $m+1\in B$, contradiction avec la maximalité de $m$. Donc $P(N)$ est vraie pour tout $N$.</p><div class="sbox">$$\text{récurrence}\iff\text{principe du plus grand élément (parties finies de}\ \mathbb N).$$</div>`, rappels: ["absurde"] }
  ],
  ctx: { "recurrence": R`<p>Le principe à démontrer ou à utiliser.</p>`, "absurde": R`<p>On suppose $P(N)$ fausse.</p>` },
  piege: R`Prendre $B = \{k : P(k)\ \text{vraie}\}$ : il pourrait ne pas être fini. On se restreint à $k\leqslant N$.`,
  methode: R`Pour démontrer une propriété par l'absurde dans $\mathbb N$ : considérer le plus grand (ou le plus petit) entier « problématique ».`
},
{
  id: "kb-1-20", subj: "kholles", year: "mpsi", chap: 0, level: 3, time: "15 min",
  title: "Le théorème de Cantor",
  enonce: R`<p>Soit $E$ un ensemble et $f : E\to\mathcal P(E)$.</p><ol><li>On pose $D = \{x\in E : x\notin f(x)\}$. Montrer que $D$ n'a pas d'antécédent par $f$.</li><li>En déduire qu'aucune application de $E$ dans $\mathcal P(E)$ n'est surjective.</li><li>Illustrer avec $E = \{1,2,3\}$ et $f(1) = \{1,2\}$, $f(2) = \emptyset$, $f(3) = \{1,3\}$.</li></ol>`,
  decode: { donnees: [R`$f(x)$ est une partie de $E$ : on peut se demander si $x\in f(x)$.`], but: R`Montrer qu'il y a « plus » de parties que d'éléments.`, cles: {
    diag: R`$D$ est construit pour différer de chaque $f(x)$ « en $x$ » : si $x\in f(x)$ alors $x\notin D$, et inversement.`,
    contra: R`Si $D = f(a)$ : $a\in D\iff a\notin f(a) = D$. Une proposition équivalente à sa négation : contradiction.` } },
  steps: [
    { q: 1, t: "L'argument diagonal", h: R`<p><span data-k="diag">$D$ diffère de $f(x)$ au moins par l'élément $x$</span>.</p>`, b: R`<p>Supposons $D = f(a)$. <span data-k="contra">$a\in D\iff a\notin f(a)\iff a\notin D$</span> : absurde. Donc $D$ n'est l'image d'aucun élément.</p>`, rappels: ["absurde"] },
    { q: 2, t: "Pas de surjection", h: R`<p>$D\in\mathcal P(E)$ n'est pas atteint.</p>`, b: R`<div class="sbox">$$\text{Aucune application}\ E\to\mathcal P(E)\ \text{n'est surjective.}$$</div><p>Pour $E$ fini, c'est cohérent avec $2^n>n$ ; pour $E = \mathbb N$, $\mathcal P(\mathbb N)$ n'est pas dénombrable.</p>` },
    { q: 3, t: "Un exemple", h: R`<p>On teste chaque $x$ : est-il dans sa propre image ?</p>`, b: R`<p>$1\in f(1)$, $2\notin f(2)$, $3\in f(3)$ : $D = \{2\}$, qui n'est en effet ni $\{1,2\}$, ni $\emptyset$, ni $\{1,3\}$.</p>` }
  ],
  ctx: { "absurde": R`<p>On suppose $D = f(a)$.</p>` },
  piege: R`Croire que l'argument ne marche que pour $E$ infini : il est valable pour tout ensemble, même vide ($\mathcal P(\emptyset) = \{\emptyset\}$).`,
  methode: R`Argument diagonal : construire un objet qui diffère de chaque $f(x)$ « à l'endroit $x$ ».`
},
{
  id: "kb-1-21", subj: "kholles", year: "mpsi", chap: 0, level: 3, time: "20 min",
  title: "Sept réels et la tangente",
  enonce: R`<ol><li>Rappeler la formule de $\tan(a-b)$ et ses conditions de validité. Que vaut $\tan\frac\pi6$ ?</li><li>Soient $x_1,\dots,x_7$ des réels. Montrer qu'il existe deux indices $i\neq j$ tels que $0\leqslant\dfrac{x_i-x_j}{1+x_ix_j}\leqslant\dfrac1{\sqrt3}$.</li><li>Avec combien de réels peut-on garantir $0\leqslant\frac{x_i-x_j}{1+x_ix_j}\leqslant1$ ?</li></ol>`,
  decode: { donnees: [R`$\arctan$ est une bijection de $\mathbb R$ sur $]-\frac\pi2,\frac\pi2[$.`], but: R`Trouver deux réels « proches » au sens de la tangente.`, cles: {
    angle: R`On écrit $x_i = \tan\theta_i$ avec $\theta_i\in\,]-\frac\pi2,\frac\pi2[$. L'expression devient $\tan(\theta_i-\theta_j)$.`,
    tiroirs: R`$]-\frac\pi2,\frac\pi2[$ se coupe en $6$ intervalles de longueur $\frac\pi6$ ; $7$ angles : deux dans le même intervalle.`,
    signe: R`$\cos(\theta_i-\theta_j) = \cos\theta_i\cos\theta_j(1+x_ix_j)$ : le dénominateur est positif quand $|\theta_i-\theta_j|< \frac\pi2$.` } },
  steps: [
    { q: 1, t: "La formule", h: R`<p>Formule d'addition.</p>`, b: R`<p>$\tan(a-b) = \frac{\tan a-\tan b}{1+\tan a\tan b}$ si $a,b,a-b\notin\frac\pi2+\pi\mathbb Z$. $\tan\frac\pi6 = \frac{1/2}{\sqrt3/2} = \frac1{\sqrt3}$.</p>`, rappels: ["k-tan-diff"] },
    { q: 2, t: "Passer aux angles", h: R`<p>L'expression ressemble à une tangente de différence : <span data-k="angle">on pose $x_i = \tan\theta_i$</span>.</p>`, b: R`<p><span data-k="angle">$\theta_i = \arctan x_i\in\,]-\frac\pi2,\frac\pi2[$</span>. Si $0\leqslant\theta_i-\theta_j< \frac\pi2$, alors $\frac{x_i-x_j}{1+x_ix_j} = \tan(\theta_i-\theta_j)$ (le dénominateur est non nul, <span data-k="signe">et même positif</span>).</p>` },
    { q: 2, t: "Les tiroirs", h: R`<p><span data-k="tiroirs">Six intervalles de longueur $\frac\pi6$</span> pour sept angles.</p>`, b: R`<p><span data-k="tiroirs">On découpe en $]-\frac\pi2,-\frac\pi3]$, $]-\frac\pi3,-\frac\pi6]$, …, $]\frac\pi3,\frac\pi2[$</span>. Deux angles $\theta_j\leqslant\theta_i$ sont dans le même : $0\leqslant\theta_i-\theta_j< \frac\pi6$, et $\tan$ croissante :</p><div class="sbox">$$0\leqslant\frac{x_i-x_j}{1+x_ix_j}\leqslant\tan\frac\pi6 = \frac1{\sqrt3}.$$</div>`, rappels: ["k-tiroirs"] },
    { q: 3, t: "Avec la borne 1", h: R`<p>$\tan\frac\pi4 = 1$ : intervalles de longueur $\frac\pi4$.</p>`, b: R`<p>$]-\frac\pi2,\frac\pi2[$ se coupe en $4$ intervalles de longueur $\frac\pi4$ : $5$ réels suffisent.</p>` }
  ],
  ctx: { "k-tan-diff": R`<p>Avec $a = \theta_i$, $b = \theta_j$.</p>`, "k-tiroirs": R`<p>$7$ angles, $6$ intervalles.</p>` },
  piege: R`Oublier que l'expression peut avoir un dénominateur nul ou négatif : on évite le problème en prenant deux angles proches.`,
  methode: R`Une expression de la forme $\frac{x-y}{1+xy}$ : penser à $\tan(a-b)$ et passer aux angles.`
},
{
  id: "kb-1-22", subj: "kholles", year: "mpsi", chap: 0, level: 3, time: "25 min",
  title: "Applications de ℕ dans ℕ et une équation itérée",
  enonce: R`<ol><li>Soit $f : \mathbb N\to\mathbb N$ injective telle que $f(n)\leqslant n$ pour tout $n$. Montrer que $f = \mathrm{Id}_{\mathbb N}$.</li><li>Déterminer les $f : \mathbb N\to\mathbb N$ telles que $f(n)+f(f(n))+f(f(f(n))) = 3n$ pour tout $n$.</li></ol>`,
  decode: { donnees: [R`Des fonctions à valeurs entières positives.`], but: R`Montrer que l'identité est la seule solution.`, cles: {
    occupe: R`Si $f(k) = k$ pour tout $k< n$, les valeurs $0,\dots,n-1$ sont « déjà prises » : par injectivité, $f(n)$ ne peut pas en être une.`,
    inj: R`$f(n) = f(m)\Rightarrow$ en appliquant la relation, $3n = 3m$ : $f$ est injective.`,
    trois: R`Trois entiers $\geqslant n$ de somme $3n$ sont tous égaux à $n$.` } },
  steps: [
    { q: 1, t: "Une récurrence forte", h: R`<p>$f(0)\leqslant0$ donne $f(0) = 0$. Puis <span data-k="occupe">les petites valeurs sont déjà prises</span>.</p>`, b: R`<p>Récurrence forte : $f(0) = 0$. Si $f(k) = k$ pour $k< n$, alors $f(n)\leqslant n$ et <span data-k="occupe">$f(n)\notin\{0,\dots,n-1\}$</span> (sinon $f(n) = k = f(k)$ avec $k\neq n$). Donc $f(n) = n$.</p>`, rappels: ["k-recurrence-forte"] },
    { q: 2, t: "f est injective", h: R`<p><span data-k="inj">Deux entiers de même image ont même valeur de $3n$</span>.</p>`, b: R`<p>Si $f(n) = f(m)$, alors $f(f(n)) = f(f(m))$, etc., et la relation donne <span data-k="inj">$3n = 3m$</span>.</p>` },
    { q: 2, t: "Minorer chaque terme", h: R`<p>Récurrence forte : si $f(k) = k$ pour $k< n$, alors toute valeur $< n$ n'est prise qu'en elle-même. On montre que les trois termes sont $\geqslant n$, puis <span data-k="trois">ils valent $n$</span>.</p>`, b: R`<p>Supposons $f(k) = k$ pour $k< n$. Si $f(n)< n$, $f(n) = k = f(k)$ avec $k< n$ : contredit l'injectivité. Donc $f(n)\geqslant n$. Si $f(f(n))< n$, alors $f(f(n)) = f(j)$ avec $j = f(f(n))< n$, d'où $f(n) = j< n$ : impossible. De même $f(f(f(n)))\geqslant n$. <span data-k="trois">Somme $3n$ de trois termes $\geqslant n$</span> : $f(n) = n$.</p><div class="sbox">$$f = \mathrm{Id}_{\mathbb N}.$$</div><p>Réciproquement, l'identité convient.</p>`, rappels: ["k-recurrence-forte"] }
  ],
  ctx: { "k-recurrence-forte": R`<p>Hypothèse : $f(k) = k$ pour tout $k< n$.</p>` },
  piege: R`Faire une récurrence simple : il faut connaître $f$ sur toutes les valeurs $< n$, pas seulement en $n-1$.`,
  methode: R`Fonctions $\mathbb N\to\mathbb N$ injectives : récurrence forte, en remarquant que les valeurs déjà prises ne peuvent plus l'être.`
}
]);
})();

LEMME.rappels({
  "k-telesc": { t: "Somme télescopique", b: R`<div class="sbox">$$\sum_{k=1}^n(a_{k+1}-a_k) = a_{n+1}-a_1.$$</div><p>Les termes intermédiaires se simplifient deux à deux. <b>Réflexe :</b> chercher à écrire le terme général comme une différence.</p>` },
  "k-amgm": { t: "Inégalité arithmético-géométrique (deux termes)", b: R`<div class="sbox">$$u,v\geqslant0\ \Longrightarrow\ u+v\geqslant2\sqrt{uv},\qquad y>0\ \Longrightarrow\ y+\frac1y\geqslant2.$$</div><p>Car $(\sqrt u-\sqrt v)^2\geqslant0$. Égalité si et seulement si $u = v$.</p>` },
  "k-prod-fact": { t: "Produits et factorielles", b: R`<div class="sbox">$$\prod_{k=1}^n(2k) = 2^nn!,\qquad\prod_{k=1}^n(2k-1) = \frac{(2n)!}{2^nn!}.$$</div><p>On complète le produit des impairs avec les pairs pour faire apparaître $(2n)!$.</p>` },
  "k-serie-geo-somme": { t: "Somme d'une série géométrique", b: R`<div class="sbox">$$|q|< 1\ \Longrightarrow\ \sum_{k=0}^{+\infty}q^k = \frac1{1-q}.$$</div>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kb-2-01", subj: "kholles", year: "mpsi", chap: 1, level: 2, time: "15 min",
  title: "Un produit de factorielles",
  enonce: R`<p>Montrer que pour tout entier $n\geqslant2$ :$$\frac{(n!)^n}{1!\,2!\cdots(n-1)!} = 1^1\cdot2^2\cdots n^n.$$Vérifier pour $n = 3$, puis donner une preuve par récurrence et une preuve par comptage des exposants.</p>`,
  decode: { donnees: [R`$k! = 1\cdot2\cdots k$.`], but: R`Établir une identité entre produits.`, cles: {
    expo: R`On compte combien de fois chaque entier $k$ apparaît comme facteur au numérateur et au dénominateur.`,
    rec: R`On passe de $n$ à $n+1$ en calculant le quotient des deux membres.` } },
  steps: [
    { q: 1, t: "Vérification", h: R`<p>Calcul direct pour $n = 3$.</p>`, b: R`<p>$\frac{6^3}{1!\,2!} = \frac{216}2 = 108$ et $1\cdot4\cdot27 = 108$.</p>` },
    { q: 1, t: "Comptage des exposants", h: R`<p><span data-k="expo">On compte les apparitions du facteur $k$</span> : $n$ fois dans $(n!)^n$, et une fois dans chaque $j!$ avec $j\geqslant k$.</p>`, b: R`<p>Fixons $k\in\{1,\dots,n\}$. Dans $(n!)^n$, le facteur $k$ apparaît $n$ fois. Dans $1!\cdots(n-1)!$, il apparaît dans $j!$ pour $k\leqslant j\leqslant n-1$, soit $n-k$ fois. Il reste $n-(n-k) = k$ facteurs $k$ :</p><div class="sbox">$$\frac{(n!)^n}{\prod_{j=1}^{n-1}j!} = \prod_{k=1}^nk^k.$$</div>` },
    { q: 1, t: "Par récurrence", h: R`<p><span data-k="rec">Quotient des membres de gauche</span> entre $n+1$ et $n$ : il doit valoir $(n+1)^{n+1}$.</p>`, b: R`<p>Notons $u_n$ le membre de gauche. $\frac{u_{n+1}}{u_n} = \frac{((n+1)!)^{n+1}}{(n!)^n\,n!} = \frac{((n+1)!)^{n+1}}{(n!)^{n+1}} = (n+1)^{n+1}$, exactement le facteur ajouté à droite. Avec $u_2 = \frac{4}{1} = 1\cdot4$, la récurrence conclut.</p>`, rappels: ["recurrence"] }
  ],
  ctx: { "recurrence": R`<p>Hérédité par quotient.</p>` },
  piege: R`Oublier que le dénominateur s'arrête à $(n-1)!$ : c'est ce qui donne $n-k$ apparitions, et non $n-k+1$.`,
  methode: R`Identité entre produits : comparer le quotient de deux termes consécutifs, ou compter les exposants de chaque facteur.`
},
{
  id: "kb-2-02", subj: "kholles", year: "mpsi", chap: 1, level: 1, time: "10 min",
  title: "Produit des 4k − 2",
  enonce: R`<p>Montrer que pour tout $n\geqslant1$ :$$\prod_{k=1}^n(4k-2) = \prod_{k=n+1}^{2n}k = \frac{(2n)!}{n!}.$$En déduire une expression de $\binom{2n}{n}$ à l'aide du produit des nombres impairs.</p>`,
  decode: { donnees: [R`$4k-2 = 2(2k-1)$.`], but: R`Transformer un produit d'impairs en quotient de factorielles.`, cles: {
    fact: R`$\prod(4k-2) = 2^n\prod(2k-1)$, et le produit des impairs se complète avec les pairs.`,
    binom: R`$\binom{2n}n = \frac{(2n)!}{n!\,n!} = \frac{2^n\cdot1\cdot3\cdots(2n-1)}{n!}$.` } },
  steps: [
    { q: 1, t: "Factoriser par 2", h: R`<p><span data-k="fact">On sort les $2$, puis on complète le produit des impairs</span>.</p>`, b: R`<p>$\prod_{k=1}^n(4k-2) = 2^n\prod_{k=1}^n(2k-1) = 2^n\frac{(2n)!}{2^nn!} = \frac{(2n)!}{n!}$, et $\frac{(2n)!}{n!} = (n+1)(n+2)\cdots(2n)$.</p><p>Vérification $n = 2$ : $2\times6 = 12 = 3\times4$.</p>`, rappels: ["k-prod-fact"] },
    { q: 1, t: "Le coefficient binomial central", h: R`<p><span data-k="binom">On divise par $n!$</span>.</p>`, b: R`<div class="sbox">$$\binom{2n}n = \frac{2^n\cdot1\cdot3\cdot5\cdots(2n-1)}{n!}.$$</div><p>Exemple $n = 3$ : $\frac{8\cdot15}{6} = 20 = \binom63$.</p>` }
  ],
  ctx: { "k-prod-fact": R`<p>Produit des impairs en factorielles.</p>` },
  piege: R`Oublier le facteur $2^n$ en sortant les $2$ de chaque terme.`,
  methode: R`Produit d'impairs : multiplier et diviser par le produit des pairs, qui vaut $2^nn!$.`
},
{
  id: "kb-2-03", subj: "kholles", year: "mpsi", chap: 1, level: 1, time: "15 min",
  title: "Deux sommes télescopiques avec des factorielles",
  enonce: R`<p>Pour $n\geqslant1$, $S_n = \displaystyle\sum_{k=1}^n\frac{k}{(k+1)!}$ et $T_n = \displaystyle\sum_{k=1}^nk\cdot k!$.</p><ol><li>Calculer $S_1,\dots,S_4$ et conjecturer $S_n$. Le démontrer par récurrence.</li><li>Simplifier $\frac1{k!}-\frac1{(k+1)!}$ et retrouver $S_n$.</li><li>Calculer $T_n$.</li></ol>`,
  decode: { donnees: [R`$(k+1)! = (k+1)k!$.`], but: R`Calculer deux sommes en les rendant télescopiques.`, cles: {
    diff: R`$\frac1{k!}-\frac1{(k+1)!} = \frac{(k+1)-1}{(k+1)!} = \frac{k}{(k+1)!}$.`,
    diff2: R`$(k+1)!-k! = k!\,(k+1-1) = k\cdot k!$.` } },
  steps: [
    { q: 1, t: "Conjecturer", h: R`<p>Calculer et regarder $1-S_n$.</p>`, b: R`<p>$S_1 = \frac12$, $S_2 = \frac12+\frac26 = \frac56$, $S_3 = \frac56+\frac3{24} = \frac{23}{24}$, $S_4 = \frac{119}{120}$. Conjecture : $S_n = 1-\frac1{(n+1)!}$. Hérédité : $1-\frac1{(n+1)!}+\frac{n+1}{(n+2)!} = 1-\frac{(n+2)-(n+1)}{(n+2)!} = 1-\frac1{(n+2)!}$.</p>`, rappels: ["recurrence"] },
    { q: 2, t: "Télescopage", h: R`<p><span data-k="diff">Le terme général est une différence</span>.</p>`, b: R`<p><span data-k="diff">$\frac k{(k+1)!} = \frac1{k!}-\frac1{(k+1)!}$</span>, donc</p><div class="sbox">$$S_n = 1-\frac1{(n+1)!}.$$</div>`, rappels: ["k-telesc"] },
    { q: 3, t: "La somme des k · k!", h: R`<p><span data-k="diff2">Même idée : $k\cdot k!$ est une différence de factorielles</span>.</p>`, b: R`<p><span data-k="diff2">$k\cdot k! = (k+1)!-k!$</span>, donc</p><div class="sbox">$$T_n = (n+1)!-1.$$</div><p>Vérification : $T_3 = 1+4+18 = 23 = 24-1$.</p>` }
  ],
  ctx: { "recurrence": R`<p>Pour valider la conjecture.</p>`, "k-telesc": R`<p>$a_k = -\frac1{k!}$ puis $a_k = k!$.</p>` },
  piege: R`Se tromper d'indices dans le télescopage : il reste le premier terme $\frac1{1!}$ et le dernier $\frac1{(n+1)!}$.`,
  methode: R`Somme avec factorielles : écrire le terme comme différence de deux termes consécutifs.`
},
{
  id: "kb-2-04", subj: "kholles", year: "mpsi", chap: 1, level: 2, time: "15 min",
  title: "Une inégalité symétrique",
  enonce: R`<p>Soient $a,b>0$ et $n\in\mathbb N$. Montrer que$$\left(1+\frac ab\right)^n+\left(1+\frac ba\right)^n\geqslant2^{n+1}.$$Cas d'égalité ?</p>`,
  decode: { donnees: [R`Les deux termes sont positifs, et ils jouent des rôles symétriques.`], but: R`Minorer une somme de deux puissances.`, cles: {
    amgm: R`$u^n+v^n\geqslant2\sqrt{u^nv^n} = 2(uv)^{n/2}$.`,
    prod: R`$uv = \left(1+\frac ab\right)\left(1+\frac ba\right) = 2+\frac ab+\frac ba\geqslant4$.` } },
  steps: [
    { q: 1, t: "Inégalité arithmético-géométrique", h: R`<p>Une somme de deux positifs est au moins deux fois la racine du produit : <span data-k="amgm">on se ramène au produit</span>, qui se simplifie.</p>`, b: R`<p>Avec $u = 1+\frac ab$, $v = 1+\frac ba$ : <span data-k="amgm">$u^n+v^n\geqslant2(uv)^{n/2}$</span>.</p>`, rappels: ["k-amgm"] },
    { q: 1, t: "Minorer le produit", h: R`<p>Développer, et utiliser $y+\frac1y\geqslant2$ avec $y = \frac ab$.</p>`, b: R`<p><span data-k="prod">$uv = 2+\frac ab+\frac ba\geqslant4$</span>. Donc $u^n+v^n\geqslant2\cdot4^{n/2} = 2^{n+1}$.</p><div class="sbox">$$\left(1+\tfrac ab\right)^n+\left(1+\tfrac ba\right)^n\geqslant2^{n+1}.$$</div><p>Égalité pour $n\geqslant1$ $\iff u = v$ et $uv = 4$ $\iff a = b$ (pour $n = 0$, toujours $2 = 2$).</p>` }
  ],
  ctx: { "k-amgm": R`<p>Deux fois : pour $u^n+v^n$ et pour $\frac ab+\frac ba$.</p>` },
  piege: R`Développer par le binôme : c'est possible mais très long. L'inégalité arithmético-géométrique va droit au but.`,
  methode: R`Somme symétrique de deux termes : minorer par $2\sqrt{\text{produit}}$, le produit se simplifie souvent.`
},
{
  id: "kb-2-06", subj: "kholles", year: "mpsi", chap: 1, level: 2, time: "20 min",
  title: "Sommes de deux carrés",
  enonce: R`<p>Soit $A = \{p^2+q^2,\ (p,q)\in\mathbb Z^2\}$.</p><ol><li>Montrer que le produit de deux éléments de $A$ est dans $A$.</li><li>Montrer que $90\in A$ en partant de $9$ et $10$.</li><li>Écrire $65$ de deux façons comme somme de deux carrés.</li><li>Montrer que $3\notin A$, puis qu'aucun entier congru à $3$ modulo $4$ n'est dans $A$.</li></ol>`,
  decode: { donnees: [R`$p^2+q^2 = |p+iq|^2$.`], but: R`Stabilité par produit des sommes de deux carrés.`, cles: {
    mod: R`$|z|^2|w|^2 = |zw|^2$, et si $z,w\in\mathbb Z[i]$, alors $zw\in\mathbb Z[i]$.`,
    dev: R`$(p+iq)(r+is) = (pr-qs)+i(ps+qr)$.`,
    mod4: R`Un carré est congru à $0$ ou $1$ modulo $4$ : une somme de deux carrés est congrue à $0$, $1$ ou $2$.` } },
  steps: [
    { q: 1, t: "Stabilité par produit", h: R`<p><span data-k="mod">Le module d'un produit est le produit des modules</span>.</p>`, b: R`<p>Avec $z = p+iq$, $w = r+is$ : <span data-k="mod">$(p^2+q^2)(r^2+s^2) = |zw|^2$</span> et <span data-k="dev">$zw = (pr-qs)+i(ps+qr)$</span> :</p><div class="sbox">$$(p^2+q^2)(r^2+s^2) = (pr-qs)^2+(ps+qr)^2.$$</div>`, rappels: ["k-module"] },
    { q: 2, t: "Le nombre 90", h: R`<p>$9 = 0^2+3^2$ et $10 = 1^2+3^2$.</p>`, b: R`<p>$3i(1+3i) = -9+3i$, donc $90 = 9^2+3^2 = 81+9$.</p>` },
    { q: 3, t: "Le nombre 65", h: R`<p>$65 = 5\times13$, $5 = |1+2i|^2$, $13 = |2+3i|^2$ ; on peut aussi multiplier par le conjugué.</p>`, b: R`<p>$(1+2i)(2+3i) = -4+7i$ : $65 = 16+49$. $(1+2i)(2-3i) = 8+i$ : $65 = 64+1$.</p>` },
    { q: 4, t: "Les entiers 4k + 3", h: R`<p><span data-k="mod4">Carrés modulo $4$</span>.</p>`, b: R`<p>$(2m)^2 = 4m^2\equiv0$ et $(2m+1)^2 = 4m^2+4m+1\equiv1$ modulo $4$. <span data-k="mod4">$p^2+q^2\in\{0,1,2\}$ modulo $4$</span>, jamais $3$. Donc $3,7,11,\dots\notin A$.</p>` }
  ],
  ctx: { "k-module": R`<p>$|zw|^2 = |z|^2|w|^2$.</p>` },
  piege: R`Croire que $A$ contient tous les entiers : $3$, $6$, $7$… n'y sont pas.`,
  methode: R`Sommes de deux carrés : passer aux complexes, $p^2+q^2 = |p+iq|^2$.`
},
{
  id: "kb-2-15", subj: "kholles", year: "mpsi", chap: 1, level: 3, time: "20 min",
  title: "Inverses d'entiers sans grand facteur premier",
  enonce: R`<p>Soient $x_1,\dots,x_n$ des entiers $\geqslant1$ deux à deux distincts, dont aucun n'est divisible par un nombre premier $\geqslant5$.</p><ol><li>Montrer que chaque $x_i$ s'écrit $2^{a}3^{b}$ avec $a,b\in\mathbb N$.</li><li>Montrer que $\displaystyle\sum_{i=1}^n\frac1{x_i}< 3$.</li><li>Que devient la borne si on autorise aussi le facteur $5$ ?</li></ol>`,
  decode: { donnees: [R`Seuls $2$ et $3$ peuvent diviser les $x_i$.`], but: R`Majorer une somme d'inverses.`, cles: {
    prod: R`$\sum_{a,b\geqslant0}\frac1{2^a3^b} = \Big(\sum_a\frac1{2^a}\Big)\Big(\sum_b\frac1{3^b}\Big) = 2\cdot\frac32 = 3$.`,
    strict: R`Une somme finie de termes d'une série à termes strictement positifs est strictement inférieure à la somme totale.` } },
  steps: [
    { q: 1, t: "La forme des x_i", h: R`<p>Décomposition en facteurs premiers.</p>`, b: R`<p>Les seuls facteurs premiers possibles sont $2$ et $3$ : $x_i = 2^{a_i}3^{b_i}$, et les couples $(a_i,b_i)$ sont distincts.</p>` },
    { q: 2, t: "Majorer par une série double", h: R`<p>On ajoute tous les $\frac1{2^a3^b}$ : <span data-k="prod">la somme se factorise</span> en produit de deux séries géométriques.</p>`, b: R`<p>Les $\frac1{x_i}$ sont des termes distincts de la famille $\left(\frac1{2^a3^b}\right)_{a,b}$, de somme <span data-k="prod">$2\cdot\frac32 = 3$</span>. <span data-k="strict">Comme on n'en prend qu'un nombre fini</span> :</p><div class="sbox">$$\sum_{i=1}^n\frac1{x_i}< 3.$$</div>`, rappels: ["k-serie-geo-somme"] },
    { q: 3, t: "Avec 5", h: R`<p>Un troisième facteur géométrique.</p>`, b: R`<p>$\sum_{a,b,c}\frac1{2^a3^b5^c} = 2\cdot\frac32\cdot\frac54 = \frac{15}4$ : la borne devient $\frac{15}4$. (Avec tous les premiers, le produit diverge : c'est une preuve d'Euler de l'infinité des nombres premiers.)</p>` }
  ],
  ctx: { "k-serie-geo-somme": R`<p>Raisons $\frac12$ et $\frac13$.</p>` },
  piege: R`Majorer seulement par $\sum\frac1k$ : la série harmonique diverge, ça ne donne rien.`,
  methode: R`Somme sur des entiers de forme imposée : majorer par une série complète, qui se factorise.`
},
{
  id: "kb-2-16", subj: "kholles", year: "mpsi", chap: 1, level: 2, time: "25 min",
  title: "Sommes des puissances des entiers",
  enonce: R`<p>Pour $p\in\mathbb N$, $S_p = \displaystyle\sum_{k=1}^nk^p$.</p><ol><li>Que valent $S_0$ et $S_1$ ?</li><li>Pour $q\in\mathbb N$, calculer $\displaystyle\sum_{\ell=0}^q\binom{q+1}\ell S_\ell$.</li><li>En déduire $S_2$ et $S_3$.</li></ol>`,
  decode: { donnees: [R`Binôme : $(k+1)^{q+1} = \sum_{\ell=0}^{q+1}\binom{q+1}\ell k^\ell$.`], but: R`Obtenir une formule de récurrence pour les $S_p$.`, cles: {
    inter: R`On intervertit : $\sum_\ell\binom{q+1}\ell\sum_kk^\ell = \sum_k\sum_{\ell\leqslant q}\binom{q+1}\ell k^\ell$.`,
    binome: R`$\sum_{\ell=0}^{q}\binom{q+1}\ell k^\ell = (k+1)^{q+1}-k^{q+1}$ (on retire le terme $\ell = q+1$).` } },
  steps: [
    { q: 1, t: "Les deux premières", h: R`<p>Formules classiques.</p>`, b: R`<p>$S_0 = n$, $S_1 = \frac{n(n+1)}2$.</p>` },
    { q: 2, t: "Une somme télescopique", h: R`<p><span data-k="inter">On intervertit les sommes</span> et <span data-k="binome">on reconnaît le binôme</span>.</p>`, b: R`$$\sum_{\ell=0}^q\binom{q+1}\ell S_\ell = \sum_{k=1}^n\big((k+1)^{q+1}-k^{q+1}\big) = (n+1)^{q+1}-1.$$`, rappels: ["o-binome", "k-telesc"] },
    { q: 3, t: "S₂ et S₃", h: R`<p>$q = 2$ puis $q = 3$, et on isole le dernier terme.</p>`, b: R`<p>$q = 2$ : $S_0+3S_1+3S_2 = (n+1)^3-1$, d'où $3S_2 = n^3+3n^2+3n-n-\frac{3n(n+1)}2$ :</p><div class="sbox">$$S_2 = \frac{n(n+1)(2n+1)}6,\qquad S_3 = \frac{n^2(n+1)^2}4.$$</div><p>($q = 3$ : $S_0+4S_1+6S_2+4S_3 = (n+1)^4-1$.) Vérification $n = 3$ : $1+4+9 = 14$ et $1+8+27 = 36 = 6^2$.</p>` }
  ],
  ctx: { "o-binome": R`<p>Développement de $(k+1)^{q+1}$.</p>`, "k-telesc": R`<p>$a_k = k^{q+1}$.</p>` },
  piege: R`Oublier de retirer le terme $\ell = q+1$ du binôme : c'est lui qui crée le télescopage.`,
  methode: R`Sommes de puissances : télescoper $(k+1)^{q+1}-k^{q+1}$ et développer par le binôme.`
}
]);
})();

LEMME.rappels({
  "k-somme-double": { t: "Intervertir deux sommes", b: R`<div class="sbox">$$\sum_{i=0}^n\sum_{j=i}^na_{i,j} = \sum_{j=0}^n\sum_{i=0}^ja_{i,j}.$$</div><p>On somme sur les couples $0\leqslant i\leqslant j\leqslant n$, ligne par ligne ou colonne par colonne.</p>` },
  "k-binome-somme": { t: "Sommes de coefficients binomiaux", b: R`<div class="sbox">$$\sum_{k=0}^n\binom nk = 2^n,\qquad\sum_{k=0}^n\binom nkx^k = (1+x)^n,\qquad\sum_{k=0}^n(-1)^k\binom nk = 0\ (n\geqslant1).$$</div>` },
  "k-cs-somme": { t: "Inégalité de Cauchy-Schwarz (sommes)", b: R`<div class="sbox">$$\Big(\sum_{k=1}^na_kb_k\Big)^2\leqslant\Big(\sum a_k^2\Big)\Big(\sum b_k^2\Big).$$</div>` },
  "k-abel-somme": { t: "Sommation par parties (Abel)", b: R`<p>Avec $S_k = x_1+\dots+x_k$ et $S_0 = 0$ :</p><div class="sbox">$$\sum_{k=1}^nkx_k = \sum_{k=1}^nk(S_k-S_{k-1}) = nS_n-\sum_{k=1}^{n-1}S_k.$$</div>` },
  "k-irrationnel": { t: "Rationnels et irrationnels", b: R`<p>$\mathbb Q$ est stable par somme, produit, et quotient (par un non nul). Donc si $x\notin\mathbb Q$ et $r\in\mathbb Q$ : $x+r\notin\mathbb Q$, et $rx\notin\mathbb Q$ si $r\neq0$.</p><p>$\sqrt2$, $\sqrt3$, $\sqrt6$, $\sqrt[3]2$ sont irrationnels.</p>` }
});

(() => {
const { FIG, S, f1 } = window.__LA;
LEMME.exercises([
{
  id: "kb-2-17", subj: "kholles", year: "mpsi", chap: 1, level: 3, time: "20 min",
  title: "Divisibilité de quotients de factorielles",
  enonce: R`<ol><li>Montrer que $u_n = \dfrac{(4n)!}{n!}$ est un entier divisible par $24^n$.</li><li>Trouver de même une puissance qui divise $v_n = \dfrac{(5n)!}{n!}$.</li></ol>`,
  decode: { donnees: [R`Parmi $k$ entiers consécutifs, l'un est divisible par $k$ ; leur produit est divisible par $k!$.`], but: R`Prouver une divisibilité par récurrence.`, cles: {
    quot: R`$\frac{u_{n+1}}{u_n} = \frac{(4n+1)(4n+2)(4n+3)(4n+4)}{n+1} = 4(4n+1)(4n+2)(4n+3)$.`,
    trois: R`$(4n+1)(4n+2)(4n+3)$ : trois entiers consécutifs (divisible par $3$), dont $4n+2$ est pair. Avec le facteur $4$ : divisible par $4\cdot2\cdot3 = 24$.`,
    quatre: R`$\frac{v_{n+1}}{v_n} = 5(5n+1)(5n+2)(5n+3)(5n+4)$ : quatre consécutifs, produit divisible par $4! = 24$.` } },
  steps: [
    { q: 1, t: "Le quotient de deux termes", h: R`<p><span data-k="quot">Le rapport $\frac{u_{n+1}}{u_n}$ est un entier simple</span> : on montre qu'il est multiple de $24$.</p>`, b: R`<p><span data-k="quot">$u_{n+1} = 4(4n+1)(4n+2)(4n+3)\,u_n$</span>. <span data-k="trois">Ce facteur est divisible par $24$</span>. Avec $u_0 = 1$, par récurrence, $u_n$ est un entier divisible par $24^n$.</p><p>Exemple : $u_1 = 24$, $u_2 = \frac{8!}{2} = 20160 = 24^2\times35$.</p>`, rappels: ["recurrence"] },
    { q: 2, t: "Avec 5n", h: R`<p><span data-k="quatre">Quatre entiers consécutifs</span>, et le facteur $5$.</p>`, b: R`<p><span data-k="quatre">$v_{n+1} = 5(5n+1)(5n+2)(5n+3)(5n+4)\,v_n$</span>, et $(5n+1)\cdots(5n+4)$ est divisible par $24$ : le facteur est multiple de $120$.</p><div class="sbox">$$24^n\ \Big|\ \frac{(4n)!}{n!},\qquad120^n\ \Big|\ \frac{(5n)!}{n!}.$$</div>` }
  ],
  ctx: { "recurrence": R`<p>$u_{n+1} = (\text{multiple de }24)\times u_n$.</p>` },
  piege: R`Oublier de vérifier que $u_n$ est entier : la récurrence le donne en même temps (produit d'entiers).`,
  methode: R`Divisibilité d'une suite de quotients : étudier le rapport de deux termes consécutifs.`
},
{
  id: "kb-2-18", subj: "kholles", year: "mpsi", chap: 1, level: 2, time: "15 min",
  title: "Une somme double de binomiaux",
  enonce: R`<p>Pour $n\in\mathbb N$, calculer $u_n = \displaystyle\sum_{i=0}^n\sum_{j=i}^n\binom nj\binom ji$. Vérifier pour $n = 2$, puis interpréter par un dénombrement.</p>`,
  decode: { donnees: [R`On somme sur les couples $0\leqslant i\leqslant j\leqslant n$.`], but: R`Calculer une somme double.`, cles: {
    inter: R`On intervertit : $\sum_{j=0}^n\binom nj\sum_{i=0}^j\binom ji$.`,
    denombr: R`$\binom nj\binom ji$ : choisir $J\subset\{1..n\}$ à $j$ éléments, puis $I\subset J$ à $i$ éléments. On compte les couples $I\subset J$.` } },
  steps: [
    { q: 1, t: "Intervertir", h: R`<p>La somme intérieure en $i$ est plus simple si $j$ est fixé : <span data-k="inter">on intervertit</span>.</p>`, b: R`<p><span data-k="inter">$u_n = \sum_{j=0}^n\binom nj\sum_{i=0}^j\binom ji = \sum_{j=0}^n\binom nj2^j = (1+2)^n$</span>.</p><div class="sbox">$$u_n = 3^n.$$</div><p>$n = 2$ : $(1+2+1)+(2+2)+1 = 9$ (pour $i = 0,1,2$).</p>`, rappels: ["k-somme-double", "k-binome-somme"] },
    { q: 1, t: "Dénombrement", h: R`<p><span data-k="denombr">On compte les couples de parties emboîtées</span>.</p>`, b: R`<p>$u_n$ compte les couples $(I,J)$ avec $I\subset J\subset\{1,\dots,n\}$. Chaque élément est dans $I$, dans $J\setminus I$, ou hors de $J$ : $3$ choix, d'où $3^n$.</p>` }
  ],
  ctx: { "k-somme-double": R`<p>Couples $i\leqslant j$.</p>`, "k-binome-somme": R`<p>$\sum_i\binom ji = 2^j$, puis $\sum_j\binom nj2^j = 3^n$.</p>` },
  piege: R`Mal intervertir les bornes : la condition $i\leqslant j$ devient $0\leqslant i\leqslant j$ à $j$ fixé.`,
  methode: R`Somme double triangulaire : intervertir pour que la somme intérieure soit connue.`
},
{
  id: "kb-2-19", subj: "kholles", year: "mpsi", chap: 1, level: 2, time: "15 min",
  title: "Somme et somme des inverses",
  enonce: R`<p>Soient $x_1,\dots,x_n>0$. Montrer que$$\Big(\sum_{k=1}^nx_k\Big)\Big(\sum_{k=1}^n\frac1{x_k}\Big)\geqslant n^2,$$par deux méthodes : en développant, puis avec Cauchy-Schwarz. Cas d'égalité ?</p>`,
  decode: { donnees: [R`Tous les $x_k$ sont strictement positifs.`], but: R`Minorer un produit de deux sommes.`, cles: {
    dev: R`$\sum_{k,l}\frac{x_k}{x_l} = n+\sum_{k< l}\left(\frac{x_k}{x_l}+\frac{x_l}{x_k}\right)$ : il y a $\frac{n(n-1)}2$ paires.`,
    cs: R`$a_k = \sqrt{x_k}$, $b_k = \frac1{\sqrt{x_k}}$ : $\sum a_kb_k = n$.` } },
  steps: [
    { q: 1, t: "En développant", h: R`<p><span data-k="dev">On regroupe les termes par paires</span> $\frac{x_k}{x_l}+\frac{x_l}{x_k}\geqslant2$.</p>`, b: R`<p>Le produit vaut <span data-k="dev">$n+\sum_{k< l}\left(\frac{x_k}{x_l}+\frac{x_l}{x_k}\right)\geqslant n+2\cdot\frac{n(n-1)}2 = n^2$</span>.</p>`, rappels: ["k-amgm"] },
    { q: 1, t: "Par Cauchy-Schwarz", h: R`<p><span data-k="cs">On choisit $a_k$, $b_k$ dont le produit vaut $1$</span>.</p>`, b: R`<p><span data-k="cs">$n^2 = \Big(\sum\sqrt{x_k}\cdot\frac1{\sqrt{x_k}}\Big)^2\leqslant\sum x_k\sum\frac1{x_k}$</span>.</p><div class="sbox">$$\Big(\sum x_k\Big)\Big(\sum\frac1{x_k}\Big)\geqslant n^2,\quad\text{égalité}\iff x_1 = \dots = x_n.$$</div>`, rappels: ["k-cs-somme"] }
  ],
  ctx: { "k-amgm": R`<p>$y+\frac1y\geqslant2$ avec $y = \frac{x_k}{x_l}$.</p>`, "k-cs-somme": R`<p>Avec $a_k = \sqrt{x_k}$, $b_k = 1/\sqrt{x_k}$.</p>` },
  piege: R`Oublier les termes diagonaux $k = l$ qui donnent le $n$ initial.`,
  methode: R`Produit de deux sommes à minorer : Cauchy-Schwarz avec des facteurs dont le produit est simple.`
},
{
  id: "kb-2-20", subj: "kholles", year: "mpsi", chap: 1, level: 2, time: "25 min",
  title: "Sommes de k xᵏ et k² xᵏ par dérivation",
  enonce: R`<p>Pour $n\geqslant1$ et $x\in\mathbb R$ : $S_1(x) = \displaystyle\sum_{k=0}^nkx^k$, $S_2(x) = \displaystyle\sum_{k=0}^nk^2x^k$ et $f(x) = \displaystyle\sum_{k=0}^nx^k$.</p><ol><li>Calculer $S_1(1)$ et $S_2(1)$.</li><li>Pour $x\neq1$, exprimer $f(x)$ sans signe somme, puis $S_1(x) = xf'(x)$ et $S_2(x) = xS_1'(x)$.</li><li>Application : $\sum_{k=0}^nk\,2^k$.</li></ol>`,
  decode: { donnees: [R`$x\frac{d}{dx}x^k = kx^k$.`], but: R`Calculer des sommes pondérées par dérivation.`, cles: {
    der: R`Dériver $x^k$ fait descendre un facteur $k$ ; multiplier par $x$ rétablit la puissance.`,
    fprime: R`$f(x) = \frac{1-x^{n+1}}{1-x}$, $f'(x) = \frac{1-(n+1)x^n+nx^{n+1}}{(1-x)^2}$.` } },
  steps: [
    { q: 1, t: "En x = 1", h: R`<p>Sommes classiques.</p>`, b: R`<p>$S_1(1) = \frac{n(n+1)}2$, $S_2(1) = \frac{n(n+1)(2n+1)}6$.</p>` },
    { q: 2, t: "S₁ par dérivation", h: R`<p><span data-k="der">$xf'(x) = \sum kx^k$</span> ; on dérive la forme close de $f$.</p>`, b: R`<p><span data-k="fprime">$f'(x) = \frac{1-(n+1)x^n+nx^{n+1}}{(1-x)^2}$</span>, donc</p><div class="sbox">$$S_1(x) = \frac{x\big(1-(n+1)x^n+nx^{n+1}\big)}{(1-x)^2}.$$</div>` },
    { q: 2, t: "S₂ par dérivation", h: R`<p>On recommence sur $S_1$ ; le calcul est plus long, on le vérifie sur $n = 1$.</p>`, b: R`<p>Avec $N(x) = x-(n+1)x^{n+1}+nx^{n+2}$ : $S_2(x) = x\frac{N'(x)(1-x)+2N(x)}{(1-x)^3}$, et après simplification</p><div class="sbox">$$S_2(x) = \frac{x\big(1+x-(n+1)^2x^n+(2n^2+2n-1)x^{n+1}-n^2x^{n+2}\big)}{(1-x)^3}.$$</div><p>Vérification $n = 1$ : le numérateur vaut $x(1-3x+3x^2-x^3) = x(1-x)^3$, et $S_2(x) = x$.</p>` },
    { q: 3, t: "Application", h: R`<p>$x = 2$ dans $S_1$.</p>`, b: R`<p>$S_1(2) = 2\big(1-(n+1)2^n+n2^{n+1}\big) = (n-1)2^{n+1}+2$. Vérification $n = 3$ : $2+8+24 = 34 = 2\cdot16+2$.</p>` }
  ],
  ctx: {},
  piege: R`Oublier le facteur $x$ : $f'(x) = \sum kx^{k-1}$, pas $\sum kx^k$.`,
  methode: R`Sommes $\sum k^px^k$ : dériver la somme géométrique et multiplier par $x$, autant de fois que nécessaire.`
},
{
  id: "kb-2-21", subj: "kholles", year: "mpsi", chap: 1, level: 3, time: "20 min",
  title: "Une somme alternée qui donne la série harmonique",
  enonce: R`<ol><li>Montrer que pour $1\leqslant k\leqslant n+1$ : $\dfrac1k\dbinom n{k-1} = \dfrac1{n+1}\dbinom{n+1}k$.</li><li>On pose $A_n = \displaystyle\sum_{k=1}^n\frac{(-1)^{k+1}}k\binom nk$. Montrer que $A_{n+1}-A_n = \frac1{n+1}$, et en déduire $A_n = \displaystyle\sum_{k=1}^n\frac1k$.</li></ol>`,
  decode: { donnees: [R`Pascal : $\binom{n+1}k = \binom nk+\binom n{k-1}$.`], but: R`Montrer une identité surprenante entre une somme alternée et $H_n$.`, cles: {
    fact: R`On revient aux factorielles : $\frac1k\cdot\frac{n!}{(k-1)!(n-k+1)!} = \frac{n!}{k!(n+1-k)!}$.`,
    pascal: R`$\binom{n+1}k-\binom nk = \binom n{k-1}$.`,
    zero: R`$\sum_{k=0}^{n+1}(-1)^k\binom{n+1}k = 0$.` } },
  steps: [
    { q: 1, t: "Une identité de factorielles", h: R`<p><span data-k="fact">Revenir aux factorielles</span> et multiplier haut et bas par $n+1$.</p>`, b: R`<p><span data-k="fact">$\frac1k\binom n{k-1} = \frac{n!}{k!(n+1-k)!} = \frac1{n+1}\cdot\frac{(n+1)!}{k!(n+1-k)!}$</span> $= \frac1{n+1}\binom{n+1}k$.</p>`, rappels: ["k-binom-def"] },
    { q: 2, t: "La différence", h: R`<p><span data-k="pascal">Pascal</span> fait apparaître $\binom n{k-1}$, puis la question 1, puis <span data-k="zero">une somme alternée connue</span>.</p>`, b: R`<p>$A_{n+1}-A_n = \sum_{k=1}^{n+1}\frac{(-1)^{k+1}}k\binom n{k-1}$ (le terme $k = n+1$ de $A_n$ est nul). Par la question 1 : $= \frac1{n+1}\sum_{k=1}^{n+1}(-1)^{k+1}\binom{n+1}k = \frac1{n+1}\big(1-\underbrace{\textstyle\sum_{k=0}^{n+1}(-1)^k\binom{n+1}k}_{0}\big) = \frac1{n+1}$.</p>`, rappels: ["k-binome-somme"] },
    { q: 2, t: "Conclusion", h: R`<p>$A_1 = 1$ et on somme les différences.</p>`, b: R`<div class="sbox">$$\sum_{k=1}^n\frac{(-1)^{k+1}}k\binom nk = 1+\frac12+\dots+\frac1n.$$</div><p>Vérification $n = 3$ : $3-\frac32+\frac13 = \frac{11}6 = 1+\frac12+\frac13$.</p>`, rappels: ["recurrence"] }
  ],
  ctx: { "k-binom-def": R`<p>Formule avec factorielles.</p>`, "k-binome-somme": R`<p>Somme alternée nulle.</p>`, "recurrence": R`<p>$A_1 = H_1$ et mêmes accroissements.</p>` },
  piege: R`Oublier que la somme alternée $\sum(-1)^k\binom{n+1}k$ commence à $k = 0$ : il faut ajuster le terme $k = 0$.`,
  methode: R`Identité dépendant de $n$ : calculer la différence entre les rangs $n+1$ et $n$ avec Pascal.`
},
{
  id: "kb-2-22", subj: "kholles", year: "mpsi", chap: 1, level: 3, time: "25 min",
  title: "Sommes doubles avec min et max",
  enonce: R`<p>Pour $n\in\mathbb N$ : $S_n = \displaystyle\sum_{i=0}^n\sum_{j=0}^n2^{\min(i,j)}$ et $T_n = \displaystyle\sum_{i=0}^n\sum_{j=0}^n2^{\max(i,j)}$.</p><ol><li>Pour $0\leqslant m\leqslant n$, combien de couples $(i,j)\in\{0..n\}^2$ vérifient $\min(i,j) = m$ ?</li><li>En déduire $S_n = 6\cdot2^n-2n-5$ (on admet $\sum_{m=0}^nm2^m = (n-1)2^{n+1}+2$).</li><li>Calculer $S_n+T_n$, puis $T_n$.</li></ol>`,
  decode: { donnees: [R`$\min+\max = i+j$ et $2^{\min}+2^{\max} = 2^i+2^j$.`], but: R`Calculer deux sommes doubles.`, cles: {
    carre: R`$\min(i,j)\geqslant m\iff i,j\in\{m..n\}$ : $(n-m+1)^2$ couples. Donc $\min = m$ : $(n-m+1)^2-(n-m)^2 = 2(n-m)+1$.`,
    somme: R`$2^{\min}+2^{\max} = 2^i+2^j$, donc $S_n+T_n = \sum_{i,j}(2^i+2^j) = 2(n+1)(2^{n+1}-1)$.` } },
  steps: [
    { q: 1, t: "Compter les couples", h: R`<p><span data-k="carre">Le min est $\geqslant m$ dans un carré</span> ; on soustrait deux carrés emboîtés.</p>`, b: R`<p><span data-k="carre">$\#\{\min = m\} = (n-m+1)^2-(n-m)^2 = 2(n-m)+1$</span> (une « équerre » dans le tableau).</p>` + FIG(200, 200, (() => { let s = ""; const n = 4; for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) { const m = Math.min(i, j); s += `<rect x="${20 + j * 32}" y="${20 + i * 32}" width="30" height="30" style="fill:${m === 1 ? "var(--yellow)" : "var(--bg-2)"};stroke:var(--line)"/>` + S(35 + j * 32, 40 + i * 32, String(m), "middle"); } return s; })(), R`Valeurs de $\min(i,j)$ pour $n = 4$ : l'équerre jaune ($m = 1$) contient $2(4-1)+1 = 7$ cases.`, "Tableau des min") },
    { q: 2, t: "Calcul de Sₙ", h: R`<p>On somme $2^m$ fois le nombre de couples.</p>`, b: R`$$S_n = \sum_{m=0}^n(2n+1-2m)2^m = (2n+1)(2^{n+1}-1)-2\big((n-1)2^{n+1}+2\big) = 6\cdot2^n-2n-5.$$<p>Vérification $n = 1$ : $1+1+1+2 = 5 = 12-2-5$.</p>` },
    { q: 3, t: "Le max", h: R`<p><span data-k="somme">Min et max ensemble redonnent $i$ et $j$</span>.</p>`, b: R`<p><span data-k="somme">$S_n+T_n = 2(n+1)(2^{n+1}-1)$</span>, d'où</p><div class="sbox">$$S_n = 6\cdot2^n-2n-5,\qquad T_n = (2n-1)2^{n+1}+3.$$</div><p>Vérification $n = 1$ : $T_1 = 1+2+2+2 = 7 = 4+3$.</p>` }
  ],
  ctx: {},
  piege: R`Compter $(n-m+1)^2$ couples pour $\min = m$ : c'est le nombre de couples avec $\min\geqslant m$.`,
  methode: R`Somme d'une fonction de $\min(i,j)$ : regrouper selon la valeur du min, en comptant les couples correspondants.`
},
{
  id: "kb-2-35", subj: "kholles", year: "mpsi", chap: 1, level: 3, time: "30 min",
  title: "L'inégalité de Tchebychev pour les sommes",
  enonce: R`<p>Soient $(a_i)$, $(b_i)$ ($1\leqslant i\leqslant n$) deux suites de réels positifs, rangées dans le même ordre (toutes deux croissantes).</p><ol><li>Montrer que $\Big(\sum a_i\Big)\Big(\sum b_i\Big)\leqslant n\sum a_ib_i$.</li><li>En déduire que $(a+b+c)^n\leqslant3^{n-1}(a^n+b^n+c^n)$ pour $a,b,c\geqslant0$.</li><li>Soient $a_1,\dots,a_n>0$ ($n\geqslant2$), $S = \sum a_j$ et $c_i = S-a_i$. Montrer que $\sum\frac{a_i}{c_i}\geqslant\frac n{n-1}$. (Pour $n = 3$ : inégalité de Nesbitt.)</li></ol>`,
  decode: { donnees: [R`Même ordre : $(a_i-a_j)(b_i-b_j)\geqslant0$ pour tous $i,j$.`], but: R`Comparer produit de sommes et somme de produits.`, cles: {
    double: R`$\sum_{i,j}(a_i-a_j)(b_i-b_j) = 2n\sum a_ib_i-2\sum a_i\sum b_j$, et c'est une somme de termes $\geqslant0$.`,
    ordre: R`Si $a_i\geqslant a_j$, alors $c_i\leqslant c_j$ et $\frac1{c_i}\geqslant\frac1{c_j}$ : $(a_i)$ et $\left(\frac1{c_i}\right)$ sont rangées dans le même ordre.` } },
  steps: [
    { q: 1, t: "Une somme double positive", h: R`<p><span data-k="double">On développe $\sum_{i,j}(a_i-a_j)(b_i-b_j)$</span>, positive terme à terme.</p>`, b: R`<p>Chaque $(a_i-a_j)(b_i-b_j)\geqslant0$. <span data-k="double">En développant : $2n\sum a_ib_i-2\sum a_i\sum b_j\geqslant0$</span>.</p><div class="sbox">$$\Big(\sum a_i\Big)\Big(\sum b_i\Big)\leqslant n\sum a_ib_i.$$</div>` },
    { q: 2, t: "Puissances de trois réels", h: R`<p>Récurrence : $(a,b,c)$ et $(a^{n-1},b^{n-1},c^{n-1})$ sont dans le même ordre.</p>`, b: R`<p>Par Tchebychev : $(a+b+c)(a^{n-1}+b^{n-1}+c^{n-1})\leqslant3(a^n+b^n+c^n)$. Si $(a+b+c)^{n-1}\leqslant3^{n-2}\sum a^{n-1}$, alors $(a+b+c)^n\leqslant3^{n-2}(a+b+c)\sum a^{n-1}\leqslant3^{n-1}\sum a^n$.</p>`, rappels: ["recurrence"] },
    { q: 3, t: "Nesbitt généralisé", h: R`<p><span data-k="ordre">$(a_i)$ et $(1/c_i)$ sont dans le même ordre</span> ; puis on minore $\sum\frac1{c_i}$ par l'exercice « somme et inverses ».</p>`, b: R`<p>Tchebychev : $n\sum\frac{a_i}{c_i}\geqslant S\sum\frac1{c_i}$. Et $\sum\frac1{c_i}\geqslant\frac{n^2}{\sum c_i} = \frac{n^2}{(n-1)S}$. Donc</p><div class="sbox">$$\sum_{i=1}^n\frac{a_i}{S-a_i}\geqslant\frac n{n-1}.$$</div><p>$n = 3$ : $\frac a{b+c}+\frac b{c+a}+\frac c{a+b}\geqslant\frac32$.</p>` }
  ],
  ctx: { "recurrence": R`<p>Sur $n$.</p>` },
  piege: R`Appliquer Tchebychev à deux suites rangées en sens contraires : l'inégalité s'inverse.`,
  methode: R`Inégalité de réarrangement : développer $\sum_{i,j}(a_i-a_j)(b_i-b_j)\geqslant0$.`
},
{
  id: "kb-2-39", subj: "kholles", year: "mpsi", chap: 1, level: 4, time: "30 min",
  title: "L'inégalité de Laframboise",
  enonce: R`<p>Soient $x_1,\dots,x_n\in[-1,1]$ avec $\sum x_k = 0$. On pose $S = \sum_{k=1}^nkx_k$, $S_k = x_1+\dots+x_k$, $p = \lfloor\frac n2\rfloor$.</p><ol><li>Montrer que $S = -\sum_{k=1}^{n-1}S_k$.</li><li>Montrer que $|S_k|\leqslant\min(k,n-k)$.</li><li>En déduire $|S|\leqslant\left\lfloor\frac{n^2}4\right\rfloor$, en distinguant $n$ pair et impair.</li><li>Montrer que la borne est atteinte.</li></ol>`,
  decode: { donnees: [R`$S_n = 0$ ; chaque $|x_k|\leqslant1$.`], but: R`Majorer une somme pondérée.`, cles: {
    abel: R`Sommation par parties : $\sum kx_k = nS_n-\sum_{k=1}^{n-1}S_k$, et $S_n = 0$.`,
    queue: R`$S_k = -(x_{k+1}+\dots+x_n)$, somme de $n-k$ termes.`,
    tri: R`$\sum_{k=1}^{n-1}\min(k,n-k)$ : pour $n = 2p$, $\frac{p(p+1)}2+\frac{p(p-1)}2 = p^2$ ; pour $n = 2p+1$, $2\cdot\frac{p(p+1)}2 = p(p+1)$.` } },
  steps: [
    { q: 1, t: "Sommation par parties", h: R`<p><span data-k="abel">$x_k = S_k-S_{k-1}$</span>.</p>`, b: R`<p><span data-k="abel">$S = nS_n-\sum_{k=1}^{n-1}S_k = -\sum_{k=1}^{n-1}S_k$</span>.</p>`, rappels: ["k-abel-somme"] },
    { q: 2, t: "Deux majorations", h: R`<p>$S_k$ est une somme de $k$ termes, et <span data-k="queue">aussi l'opposée d'une somme de $n-k$ termes</span>.</p>`, b: R`<p>$|S_k|\leqslant k$ et <span data-k="queue">$|S_k|\leqslant n-k$</span>, donc $|S_k|\leqslant\min(k,n-k)$.</p>` },
    { q: 3, t: "Additionner", h: R`<p><span data-k="tri">Somme d'une « pyramide »</span>.</p>`, b: R`<p>$|S|\leqslant\sum_{k=1}^{n-1}\min(k,n-k)$ = <span data-k="tri">$p^2 = \frac{n^2}4$ si $n = 2p$, $p(p+1) = \frac{n^2-1}4$ si $n = 2p+1$</span>.</p><div class="sbox">$$|x_1+2x_2+\dots+nx_n|\leqslant\left\lfloor\frac{n^2}4\right\rfloor.$$</div>` },
    { q: 4, t: "Cas d'égalité", h: R`<p>Il faut $|S_k| = \min(k,n-k)$ : des $-1$ d'abord, puis des $+1$.</p>`, b: R`<p>$n = 2p$ : $x_k = -1$ pour $k\leqslant p$, $+1$ ensuite : $S = p^2$. Exemple $n = 4$ : $-1-2+3+4 = 4$. Pour $n$ impair, on met $x_{p+1} = 0$.</p>` }
  ],
  ctx: { "k-abel-somme": R`<p>$S_n = 0$.</p>` },
  piege: R`Majorer $|S|$ directement par $\sum k = \frac{n(n+1)}2$ : on n'utilise pas $\sum x_k = 0$, et la borne est bien moins bonne.`,
  methode: R`Somme pondérée avec une contrainte sur la somme totale : sommation par parties.`
},
{
  id: "kb-2-13", subj: "kholles", year: "mpsi", chap: 2, level: 2, time: "20 min",
  title: "Sommes et produits de rationnels et d'irrationnels",
  enonce: R`<p>Pour $A,B\subset\mathbb R$ : $A+B = \{x+y\}$, $A\times B = \{xy\}$ ($x\in A$, $y\in B$). On note $\mathbb I = \mathbb R\setminus\mathbb Q$. Montrer :</p><ol><li>$\mathbb Q+\mathbb Q = \mathbb Q$ et $\mathbb Q\times\mathbb Q = \mathbb Q$ ;</li><li>$\mathbb I+\mathbb Q = \mathbb I$ et $\mathbb I\times\mathbb Q = \mathbb I\cup\{0\}$ ;</li><li>$\mathbb I+\mathbb I = \mathbb R$ et $\mathbb I\times\mathbb I = \mathbb R^\ast$.</li></ol>`,
  decode: { donnees: [R`$\sqrt2$, $\sqrt3$, $\sqrt6$ sont irrationnels.`], but: R`Déterminer six ensembles.`, cles: {
    stable: R`Si $x+r\in\mathbb Q$ avec $r\in\mathbb Q$, alors $x = (x+r)-r\in\mathbb Q$.`,
    deux: R`Pour $y$ irrationnel, $\frac y{\sqrt2}$ et $\frac y{\sqrt3}$ ne peuvent pas être tous deux rationnels (sinon leur quotient $\sqrt{3/2} = \frac{\sqrt6}2$ le serait).` } },
  steps: [
    { q: 1, t: "Avec Q", h: R`<p>Stabilité, et $r = r+0 = r\cdot1$.</p>`, b: R`<p>$\mathbb Q$ est stable, et tout $r$ s'écrit $r+0$, $r\cdot1$ : égalités.</p>` },
    { q: 2, t: "Irrationnel et rationnel", h: R`<p><span data-k="stable">On « retire » le rationnel</span>.</p>`, b: R`<p><span data-k="stable">$x+r\in\mathbb Q\Rightarrow x\in\mathbb Q$</span> : donc $\mathbb I+\mathbb Q\subset\mathbb I$, et $x = x+0$. De même $xr\in\mathbb I$ si $r\neq0$, et $0 = \sqrt2\cdot0$ : $\mathbb I\times\mathbb Q = \mathbb I\cup\{0\}$.</p>`, rappels: ["k-irrationnel"] },
    { q: 3, t: "Deux irrationnels", h: R`<p>Somme : $y = (y-\sqrt2)+\sqrt2$ ou $\frac y2+\frac y2$. Produit : <span data-k="deux">on divise par $\sqrt2$ ou par $\sqrt3$</span>.</p>`, b: R`<p>Somme : si $y\in\mathbb Q$, $y = (y-\sqrt2)+\sqrt2$ ; si $y\in\mathbb I$, $y = \frac y2+\frac y2$. Donc $\mathbb I+\mathbb I = \mathbb R$.</p><p>Produit : $0\notin\mathbb I\times\mathbb I$. Si $y\in\mathbb Q^\ast$, $y = (y\sqrt2)\cdot\frac1{\sqrt2}$. Si $y\in\mathbb I$, <span data-k="deux">l'un de $\frac y{\sqrt2}$, $\frac y{\sqrt3}$ est irrationnel</span>, et $y = \frac y{\sqrt2}\sqrt2$ ou $\frac y{\sqrt3}\sqrt3$.</p><div class="sbox">$$\mathbb I+\mathbb I = \mathbb R,\qquad\mathbb I\times\mathbb I = \mathbb R^\ast.$$</div>` }
  ],
  ctx: { "k-irrationnel": R`<p>Stabilité de $\mathbb Q$.</p>` },
  piege: R`Écrire $y = \frac y{\sqrt2}\sqrt2$ sans vérifier que $\frac y{\sqrt2}$ est irrationnel : pour $y = 3\sqrt2$, il vaut $3$.`,
  methode: R`Pour montrer qu'un réel est somme ou produit d'irrationnels : faire des cas selon que certains quotients sont rationnels.`
},
{
  id: "kb-2-14", subj: "kholles", year: "mpsi", chap: 2, level: 2, time: "15 min",
  title: "Puissances rationnelles",
  enonce: R`<p>Soit $x$ un réel. Vrai ou faux ?</p><ol><li>$\mathcal A_1$ : si $x^7$ et $x^{12}$ sont rationnels, alors $x$ est rationnel.</li><li>$\mathcal A_2$ : si $x^9$ et $x^{12}$ sont rationnels, alors $x$ est rationnel.</li><li>Généraliser : à quelle condition sur $a,b$, « $x^a,x^b\in\mathbb Q\Rightarrow x\in\mathbb Q$ » ?</li></ol>`,
  decode: { donnees: [R`$7\wedge12 = 1$, $9\wedge12 = 3$.`], but: R`Décider si $x$ est rationnel.`, cles: {
    bez: R`$7\cdot7-12\cdot4 = 1$ : $x = \frac{(x^7)^7}{(x^{12})^4}$ si $x\neq0$.`,
    ce: R`$x = \sqrt[3]2$ : $x^9 = 8$ et $x^{12} = 16$ sont rationnels.` } },
  steps: [
    { q: 1, t: "A₁ est vraie", h: R`<p><span data-k="bez">Bézout entre $7$ et $12$</span>.</p>`, b: R`<p>Si $x = 0$, c'est clair. Sinon <span data-k="bez">$x = \frac{(x^7)^7}{(x^{12})^4}\in\mathbb Q$</span>.</p>`, rappels: ["o-b-gauss"] },
    { q: 2, t: "A₂ est fausse", h: R`<p>$9$ et $12$ sont multiples de $3$ : <span data-k="ce">une racine cubique</span>.</p>`, b: R`<p><span data-k="ce">$x = \sqrt[3]2$</span> : $x^9 = 8$, $x^{12} = 16$, mais $x\notin\mathbb Q$ (si $\left(\frac pq\right)^3 = 2$ alors $p^3 = 2q^3$, et la valuation $2$-adique de $p^3$ est multiple de $3$, celle de $2q^3$ non).</p>` },
    { q: 3, t: "Cas général", h: R`<p>Le PGCD gouverne tout.</p>`, b: R`<div class="sbox">$$\big(x^a,x^b\in\mathbb Q\Rightarrow x\in\mathbb Q\big)\iff a\wedge b = 1.$$</div><p>Si $d = a\wedge b>1$, $x = \sqrt[d]2$ est un contre-exemple.</p>` }
  ],
  ctx: { "o-b-gauss": R`<p>$7u+12v = 1$.</p>` },
  piege: R`Écrire $x = (x^{12})^{1/12}$ : la racine d'un rationnel n'est pas forcément rationnelle.`,
  methode: R`Combiner des puissances : utiliser une relation de Bézout entre les exposants.`
}
]);
})();

LEMME.rappels({
  "k-acos-bsin": { t: "Écrire a cos x + b sin x", b: R`<p>Si $(a,b)\neq(0,0)$, avec $R = \sqrt{a^2+b^2}$ et $\varphi$ tel que $a = R\cos\varphi$, $b = R\sin\varphi$ :</p><div class="sbox">$$a\cos x+b\sin x = R\cos(x-\varphi) = \operatorname{Re}\big((a-ib)e^{ix}\big).$$</div><p>Ses zéros forment une suite de pas $\pi$.</p>` },
  "k-racine-carree-c": { t: "Racines carrées d'un complexe", b: R`<p>Pour résoudre $(a+ib)^2 = u+iv$ :</p><div class="sbox">$$a^2-b^2 = u,\qquad a^2+b^2 = |u+iv|,\qquad2ab = v.$$</div><p>Les deux premières donnent $a^2$ et $b^2$, la troisième le signe relatif de $a$ et $b$.</p>` },
  "k-forme-trigo": { t: "Forme trigonométrique", b: R`<div class="sbox">$$z = re^{i\theta},\qquad|z_1z_2| = |z_1||z_2|,\qquad\arg(z_1z_2)\equiv\arg z_1+\arg z_2\pmod{2\pi}.$$</div>` },
  "k-arctan-param": { t: "Paramétrer par l'arc tangente", b: R`<p>Pour $x\in\mathbb R$, $t = \arctan x\in\,]-\frac\pi2,\frac\pi2[$ et $x = \tan t$ :</p><div class="sbox">$$\frac{1+ix}{1-ix} = \frac{\cos t+i\sin t}{\cos t-i\sin t} = e^{2it}.$$</div>` }
});

(() => {
const { FIG, S, f1, ARR } = window.__LA;
LEMME.exercises([
{
  id: "kb-2-05", subj: "kholles", year: "mpsi", chap: 3, level: 2, time: "20 min",
  title: "Une combinaison de cosinus qui s'annule deux fois",
  enonce: R`<p>Soient $a_1,\dots,a_n$ et $c_1,\dots,c_n$ des réels, et $f(x) = \displaystyle\sum_{k=1}^nc_k\cos(a_k+x)$.</p><ol><li>Montrer que $f(x) = A\cos x-B\sin x$ avec $A = \sum c_k\cos a_k$ et $B = \sum c_k\sin a_k$.</li><li>Si $(A,B)\neq(0,0)$, décrire l'ensemble des zéros de $f$.</li><li>En déduire : si $f$ s'annule en $x_1$ et $x_2$ avec $x_1-x_2\notin\pi\mathbb Z$, alors $f$ est nulle. (Exemple : $c_k = k$.)</li></ol>`,
  decode: { donnees: [R`$\cos(a+x) = \cos a\cos x-\sin a\sin x$.`], but: R`Montrer que deux zéros « mal placés » forcent $f = 0$.`, cles: {
    dev: R`On développe chaque $\cos(a_k+x)$ et on regroupe les termes en $\cos x$ et en $\sin x$.`,
    zeros: R`$R\cos(x-\varphi) = 0\iff x-\varphi\in\frac\pi2+\pi\mathbb Z$ : deux zéros diffèrent d'un multiple de $\pi$.` } },
  steps: [
    { q: 1, t: "Développer", h: R`<p><span data-k="dev">Formule d'addition</span>, puis on factorise $\cos x$ et $\sin x$.</p>`, b: R`<p><span data-k="dev">$f(x) = \sum c_k(\cos a_k\cos x-\sin a_k\sin x) = A\cos x-B\sin x$</span>.</p>` },
    { q: 2, t: "Les zéros", h: R`<p>On écrit $f$ sous la forme $R\cos(x+\varphi)$.</p>`, b: R`<p>Avec $R = \sqrt{A^2+B^2}>0$, $A = R\cos\varphi$, $B = R\sin\varphi$ : $f(x) = R\cos(x+\varphi)$. <span data-k="zeros">Zéros : $x\in-\varphi+\frac\pi2+\pi\mathbb Z$</span>, deux zéros diffèrent d'un multiple de $\pi$.</p>`, rappels: ["k-acos-bsin"] },
    { q: 3, t: "Contraposée", h: R`<p>Si $f$ n'est pas nulle, $(A,B)\neq(0,0)$ et ses zéros sont espacés de multiples de $\pi$.</p>`, b: R`<p>Si $(A,B)\neq(0,0)$, deux zéros diffèrent d'un multiple de $\pi$ : contraire à l'hypothèse. Donc $A = B = 0$ et $f = 0$.</p><div class="sbox">$$f(x_1) = f(x_2) = 0,\ x_1-x_2\notin\pi\mathbb Z\ \Longrightarrow\ f\equiv0.$$</div>`, rappels: ["k-contraposee"] }
  ],
  ctx: { "k-acos-bsin": R`<p>Ici $f = A\cos x-B\sin x$.</p>`, "k-contraposee": R`<p>$f\neq0\Rightarrow$ zéros espacés de multiples de $\pi$.</p>` },
  piege: R`Croire que les coefficients $c_k$ comptent : seuls $A$ et $B$ interviennent.`,
  methode: R`Combinaison de $\cos(a_k+x)$ : c'est toujours une sinusoïde $R\cos(x+\varphi)$.`
},
{
  id: "kb-2-07", subj: "kholles", year: "mpsi", chap: 3, level: 2, time: "15 min",
  title: "|1 + a| ou |1 + a²|",
  enonce: R`<p>Soit $a\in\mathbb C$ avec $|a| = 1$. Montrer que $|1+a|\geqslant1$ ou $|1+a^2|\geqslant1$. Interpréter géométriquement.</p>`,
  decode: { donnees: [R`$a = e^{i\theta}$.`], but: R`Montrer qu'au moins l'un des deux modules est grand.`, cles: {
    moitie: R`$|1+e^{i\theta}| = 2\left|\cos\frac\theta2\right|$ et $|1+e^{2i\theta}| = 2|\cos\theta|$.`,
    duplic: R`$\cos\theta = 2\cos^2\frac\theta2-1$.` } },
  steps: [
    { q: 1, t: "Passer aux cosinus", h: R`<p><span data-k="moitie">Angle moitié</span>.</p>`, b: R`<p><span data-k="moitie">$|1+a| = 2|\cos\frac\theta2|$ et $|1+a^2| = 2|\cos\theta|$</span>.</p>`, rappels: ["k-moitie"] },
    { q: 1, t: "Par l'absurde", h: R`<p>Si $|\cos\frac\theta2|< \frac12$, <span data-k="duplic">la formule de duplication</span> rend $\cos\theta$ proche de $-1$.</p>`, b: R`<p>Si les deux étaient $< 1$ : $\cos^2\frac\theta2< \frac14$, donc <span data-k="duplic">$\cos\theta = 2\cos^2\frac\theta2-1< -\frac12$</span>, et $|\cos\theta|>\frac12$, soit $|1+a^2|>1$ : contradiction.</p><div class="sbox">$$|a| = 1\ \Longrightarrow\ |1+a|\geqslant1\ \text{ou}\ |1+a^2|\geqslant1.$$</div><p>Géométriquement : $a$ et $a^2$ ne peuvent pas être tous deux à distance $< 1$ du point $-1$ (un arc d'ouverture $\pm\frac\pi3$ autour de $-1$ ; si $a$ y est, $a^2$ est près de $1$).</p>`, rappels: ["absurde"] }
  ],
  ctx: { "k-moitie": R`<p>$1+e^{i\theta} = 2\cos\frac\theta2e^{i\theta/2}$.</p>`, "absurde": R`<p>On suppose les deux modules $< 1$.</p>` },
  piege: R`Oublier les valeurs absolues sur les cosinus.`,
  methode: R`Modules de $1\pm e^{i\theta}$ : angle moitié systématique.`
},
{
  id: "kb-2-08", subj: "kholles", year: "mpsi", chap: 3, level: 2, time: "20 min",
  title: "Racines quatrièmes par racines carrées",
  enonce: R`<p>Déterminer les racines quatrièmes de $Z = -119-120i$ sous forme algébrique, en calculant d'abord ses racines carrées.</p>`,
  decode: { donnees: [R`$|Z| = \sqrt{119^2+120^2} = 169$.`], but: R`Trouver les quatre complexes $z$ avec $z^4 = Z$.`, cles: {
    carre: R`$z^4 = Z\iff z^2 = w$ où $w$ est une racine carrée de $Z$.`,
    sys: R`$(a+ib)^2 = -119-120i$ : $a^2-b^2 = -119$, $a^2+b^2 = 169$, $ab< 0$.` } },
  steps: [
    { q: 1, t: "Racines carrées de Z", h: R`<p><span data-k="sys">Système classique</span> avec le module.</p>`, b: R`<p><span data-k="sys">$a^2 = 25$, $b^2 = 144$, $ab< 0$</span> : $w = \pm(5-12i)$.</p>`, rappels: ["k-racine-carree-c"] },
    { q: 1, t: "Racines carrées de 5 − 12i et −5 + 12i", h: R`<p><span data-k="carre">On recommence</span> avec $|5-12i| = 13$.</p>`, b: R`<p>$5-12i$ : $a^2-b^2 = 5$, $a^2+b^2 = 13$, $ab< 0$ : $\pm(3-2i)$. $-5+12i$ : $a^2 = 4$, $b^2 = 9$, $ab>0$ : $\pm(2+3i)$.</p><div class="sbox">$$z^4 = -119-120i\iff z\in\{2+3i,\,-2-3i,\,3-2i,\,-3+2i\}.$$</div><p>Vérification : $(2+3i)^2 = -5+12i$ et $(-5+12i)^2 = 25-120i-144 = -119-120i$. Les quatre racines forment un carré : on passe de l'une à l'autre en multipliant par $i$.</p>` }
  ],
  ctx: { "k-racine-carree-c": R`<p>Utilisé trois fois.</p>` },
  piege: R`Oublier la condition de signe $2ab = v$ : on obtiendrait huit candidats au lieu de quatre.`,
  methode: R`Racines quatrièmes : racines carrées des racines carrées.`
},
{
  id: "kb-2-09", subj: "kholles", year: "mpsi", chap: 3, level: 2, time: "20 min",
  title: "Trois complexes en progression",
  enonce: R`<ol><li>Écrire $P = \frac{27}{\sqrt2}(-1+i)$ sous forme trigonométrique.</li><li>Trois complexes $z_1,z_2,z_3$ ont pour produit $P$. Leurs modules sont en progression géométrique de raison $3$, leurs arguments en progression arithmétique de raison $\frac\pi3$ (dans l'ordre $z_1,z_2,z_3$). Sachant que $z_1$ a un argument dans $]\frac\pi2,\pi[$, déterminer $z_1,z_2,z_3$.</li></ol>`,
  decode: { donnees: [R`$|z_1| = r$, $|z_2| = 3r$, $|z_3| = 9r$ ; arguments $\alpha$, $\alpha+\frac\pi3$, $\alpha+\frac{2\pi}3$.`], but: R`Retrouver les trois nombres.`, cles: {
    mod: R`Module du produit : $27r^3 = |P| = 27$.`,
    arg: R`Argument du produit : $3\alpha+\pi\equiv\frac{3\pi}4\pmod{2\pi}$, soit $\alpha\equiv-\frac\pi{12}\pmod{\frac{2\pi}3}$.` } },
  steps: [
    { q: 1, t: "Forme trigonométrique", h: R`<p>$-1+i = \sqrt2e^{3i\pi/4}$.</p>`, b: R`<p>$P = 27e^{3i\pi/4}$.</p>`, rappels: ["k-forme-trigo"] },
    { q: 2, t: "Les modules", h: R`<p><span data-k="mod">Le module d'un produit est le produit des modules</span>.</p>`, b: R`<p><span data-k="mod">$r\cdot3r\cdot9r = 27r^3 = 27$</span>, donc $r = 1$.</p>` },
    { q: 2, t: "Les arguments", h: R`<p><span data-k="arg">Les arguments s'ajoutent, modulo $2\pi$</span> : trois solutions modulo $2\pi$, on choisit celle dans $]\frac\pi2,\pi[$.</p>`, b: R`<p><span data-k="arg">$\alpha\in\{-\frac\pi{12},\frac{7\pi}{12},\frac{5\pi}4\}$ modulo $2\pi$</span>, et seul $\frac{7\pi}{12}$ est dans $]\frac\pi2,\pi[$.</p><div class="sbox">$$z_1 = e^{7i\pi/12},\qquad z_2 = 3e^{11i\pi/12},\qquad z_3 = 9e^{5i\pi/4}.$$</div><p>Vérification : $\frac{7+11+15}{12}\pi = \frac{11\pi}4\equiv\frac{3\pi}4$.</p>` }
  ],
  ctx: { "k-forme-trigo": R`<p>Modules multipliés, arguments additionnés.</p>` },
  piege: R`Oublier le « modulo $2\pi$ » : diviser par $3$ donne trois arguments possibles, d'où la condition supplémentaire.`,
  methode: R`Produits de complexes : séparer modules (produit) et arguments (somme modulo $2\pi$).`
},
{
  id: "kb-2-10", subj: "kholles", year: "mpsi", chap: 3, level: 3, time: "30 min",
  title: "Une équation de degré 4 et cos(π/5)",
  enonce: R`<p>On considère $(E) : (z+i)^5 = (z-i)^5$.</p><ol><li>Résoudre $(E)$ en développant.</li><li>Résoudre $(E)$ avec les racines cinquièmes de l'unité.</li><li>En déduire $\cot^2\frac\pi5$, puis $\cos\frac\pi5$ et $\sin\frac\pi5$.</li></ol>`,
  decode: { donnees: [R`$z = i$ n'est pas solution.`], but: R`Résoudre de deux façons et comparer.`, cles: {
    dev: R`$(z+i)^5-(z-i)^5 = 2i(5z^4-10z^2+1)$ : les termes pairs en $i$ se simplifient.`,
    cot: R`$\frac{e^{i\theta}+1}{e^{i\theta}-1} = \frac{2\cos(\theta/2)}{2i\sin(\theta/2)} = -i\cot\frac\theta2$, donc $z = i\frac{\omega+1}{\omega-1} = \cot\frac\theta2$.`,
    ordre: R`$\cot$ décroît sur $]0,\pi[$ : $\cot^2\frac\pi5$ est la plus grande des valeurs $\cot^2\frac{k\pi}5$.` } },
  steps: [
    { q: 1, t: "Équation bicarrée", h: R`<p><span data-k="dev">Binôme</span> : il reste un polynôme pair de degré $4$.</p>`, b: R`<p><span data-k="dev">$(E)\iff5z^4-10z^2+1 = 0$</span>. Avec $u = z^2$ : $u = 1\pm\frac2{\sqrt5}$, tous deux positifs. Donc $z = \pm\sqrt{1\pm\frac2{\sqrt5}}$ : quatre solutions réelles.</p>` },
    { q: 2, t: "Avec les racines de l'unité", h: R`<p>$\left(\frac{z+i}{z-i}\right)^5 = 1$, puis <span data-k="cot">angle moitié</span>.</p>`, b: R`<p>$\frac{z+i}{z-i} = \omega = e^{2ik\pi/5}$, $k\in\{1,2,3,4\}$ ($\omega\neq1$), donc $z = i\frac{\omega+1}{\omega-1}$, et <span data-k="cot">$z = \cot\frac{k\pi}5$</span>.</p>`, rappels: ["k-moitie", "o-b-racines"] },
    { q: 3, t: "Identifier", h: R`<p><span data-k="ordre">La plus grande racine</span>.</p>`, b: R`<p><span data-k="ordre">$\cot^2\frac\pi5 = 1+\frac2{\sqrt5}$</span>. Puis $\sin^2\frac\pi5 = \frac1{1+\cot^2} = \frac{5-\sqrt5}8$ et $\cos^2\frac\pi5 = \frac{3+\sqrt5}8$ :</p><div class="sbox">$$\cos\frac\pi5 = \frac{1+\sqrt5}4,\qquad\sin\frac\pi5 = \sqrt{\frac{5-\sqrt5}8}.$$</div><p>(On vérifie $\left(\frac{1+\sqrt5}4\right)^2 = \frac{3+\sqrt5}8$ ; $\cos\frac\pi5$ est la moitié du nombre d'or.)</p>` }
  ],
  ctx: { "k-moitie": R`<p>Pour simplifier $\frac{\omega+1}{\omega-1}$.</p>`, "o-b-racines": R`<p>Racines cinquièmes de l'unité.</p>` },
  piege: R`Inclure $\omega = 1$ : il donnerait $z+i = z-i$, impossible.`,
  methode: R`Équation $(z+a)^n = (z-a)^n$ : passer au quotient et utiliser les racines $n$-ièmes de l'unité.`
},
{
  id: "kb-2-11", subj: "kholles", year: "mpsi", chap: 3, level: 2, time: "20 min",
  title: "La transformation de Cayley",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb C$, $f(x) = \dfrac{1+ix}{1-ix}$.</p><ol><li>Montrer que $f(x) = e^{2i\arctan x}$.</li><li>$f$ est-elle injective ? surjective ?</li><li>Déterminer $f^{-1}(\mathbb R)$ et $f(\mathbb R)$.</li></ol>`,
  decode: { donnees: [R`$1-ix\neq0$ pour $x$ réel.`], but: R`Décrire l'image de $\mathbb R$ par $f$.`, cles: {
    param: R`$x = \tan t$, $t\in\,]-\frac\pi2,\frac\pi2[$ : $\frac{1+i\tan t}{1-i\tan t} = \frac{\cos t+i\sin t}{\cos t-i\sin t} = e^{2it}$.`,
    angle: R`$2t$ parcourt $]-\pi,\pi[$ : $e^{2it}$ décrit le cercle unité privé de $-1$, chaque point une seule fois.` } },
  steps: [
    { q: 1, t: "Forme exponentielle", h: R`<p><span data-k="param">On pose $x = \tan t$</span> et on multiplie par $\cos t$.</p>`, b: R`<p><span data-k="param">$f(\tan t) = e^{2it}$</span>, soit $f(x) = e^{2i\arctan x}$.</p>`, rappels: ["k-arctan-param"] },
    { q: 2, t: "Injective, pas surjective", h: R`<p><span data-k="angle">$2t\in\,]-\pi,\pi[$</span>, intervalle de longueur $< 2\pi$.</p>`, b: R`<p>$e^{2it} = e^{2is}$ avec $2t,2s\in\,]-\pi,\pi[$ donne $t = s$ : injective. $|f(x)| = 1$ : pas surjective sur $\mathbb C$.</p>` },
    { q: 3, t: "Les ensembles", h: R`<p>Réel de module $1$ : $\pm1$.</p>`, b: R`<p>$f(x)\in\mathbb R\iff e^{2it} = \pm1\iff2t\in\{0\}$ (car $|2t|< \pi$) : $f^{-1}(\mathbb R) = \{0\}$.</p><div class="sbox">$$f(\mathbb R) = \mathbb U\setminus\{-1\}.$$</div><p>$-1$ correspondrait à $x = \pm\infty$. C'est la version complexe du paramétrage rationnel du cercle.</p>` }
  ],
  ctx: { "k-arctan-param": R`<p>$t = \arctan x$.</p>` },
  piege: R`Oublier que $-1$ n'est pas atteint.`,
  methode: R`$\frac{1+ix}{1-ix}$ : poser $x = \tan t$ pour obtenir une exponentielle.`
}
]);
})();

LEMME.rappels({
  "k-alignes": { t: "Alignement et angle droit en complexes", b: R`<p>Pour $A,B,C$ d'affixes $a,b,c$ avec $A\neq B$ :</p><div class="sbox">$$A,B,C\ \text{alignés}\iff\frac{c-a}{b-a}\in\mathbb R,\qquad(AB)\perp(AC)\iff\frac{c-a}{b-a}\in i\mathbb R.$$</div>` },
  "k-reel-conj": { t: "Réel, imaginaire pur et conjugué", b: R`<div class="sbox">$$w\in\mathbb R\iff\bar w = w,\qquad w\in i\mathbb R\iff\bar w = -w.$$</div><p>Et $\frac uv\in\mathbb R\iff u\bar v\in\mathbb R$ (on multiplie par $|v|^2>0$).</p>` },
  "k-second-degre-c": { t: "Équation du second degré dans ℂ", b: R`<p>$az^2+bz+c = 0$ ($a\neq0$) : avec $\Delta = b^2-4ac$ et $\delta^2 = \Delta$,</p><div class="sbox">$$z = \frac{-b\pm\delta}{2a}.$$</div><p>Une racine double si $\Delta = 0$, deux racines distinctes sinon.</p>` },
  "k-conique": { t: "Hyperbole équilatère", b: R`<p>$\frac{Y^2}{a^2}-\frac{X^2}{a^2} = 1$ : hyperbole équilatère d'axe focal vertical, de sommets $(0,\pm a)$, de foyers $(0,\pm a\sqrt2)$, d'excentricité $\sqrt2$, d'asymptotes $Y = \pm X$.</p>` }
});

(() => {
const { FIG, S, f1, GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "kb-2-12", subj: "kholles", year: "mpsi", chap: 3, level: 3, time: "30 min",
  title: "Lieux de points : alignement et triangle rectangle",
  enonce: R`<p>Déterminer l'ensemble des points $M$ d'affixe $z$ tels que :</p><ol style="list-style:lower-alpha"><li>les points d'affixes $z$, $z^2$ et $\frac1z$ sont alignés ;</li><li>les points d'affixes $i$, $z$ et $iz$ sont alignés ;</li><li>les points d'affixes $1$, $z$ et $z^2$ forment un triangle rectangle (non aplati).</li></ol>`,
  decode: { donnees: [R`On écrit $z = x+iy$ à la fin pour obtenir une équation cartésienne.`], but: R`Traduire des conditions géométriques en équations.`, cles: {
    a: R`$\frac{z^2-z}{\frac1z-z} = \frac{z^2(z-1)}{1-z^2} = -\frac{z^2}{1+z}$ pour $z\neq\pm1$ : il doit être réel.`,
    b: R`$\frac{iz-i}{z-i}$ réel $\iff\frac{z-i}{z-1}\in i\mathbb R\iff\operatorname{Re}\big((z-i)(\bar z-1)\big) = 0$.`,
    c: R`Angle droit en $1$ : $\frac{z^2-1}{z-1} = z+1\in i\mathbb R$. En $z$ : $\frac{z^2-z}{1-z} = -z\in i\mathbb R$. En $z^2$ : $\frac{1-z^2}{z-z^2} = \frac{1+z}z\in i\mathbb R$.` } },
  steps: [
    { q: 1, t: "a) Alignement de z, z², 1/z", h: R`<p>On forme <span data-k="a">le quotient des vecteurs</span>, qui se simplifie.</p>`, b: R`<p>Pour $z\neq0$, $z\neq\pm1$ (cas d'égalité de points, où l'alignement est automatique) : condition <span data-k="a">$\frac{z^2}{1+z}\in\mathbb R$</span> $\iff z^2(1+\bar z)\in\mathbb R\iff\operatorname{Im}(z^2+|z|^2z) = 0$. Avec $z = x+iy$ : $2xy+(x^2+y^2)y = 0$, soit $y\big((x+1)^2+y^2-1\big) = 0$.</p><div class="sbox">$$\text{(a)} : \mathbb R^\ast\ \cup\ \big(\mathcal C(-1,1)\setminus\{0\}\big).$$</div>`, rappels: ["k-alignes", "k-reel-conj"] },
    { q: 1, t: "b) Alignement de i, z, iz", h: R`<p><span data-k="b">On calcule une partie réelle</span>.</p>`, b: R`<p><span data-k="b">$\operatorname{Re}\big((z-i)(\bar z-1)\big) = x^2+y^2-x-y = 0$</span> : cercle de centre $\left(\frac12,\frac12\right)$, de rayon $\frac{\sqrt2}2$, passant par $0$, $1$ et $i$ (cas dégénérés compris).</p>` },
    { q: 1, t: "c) Triangle rectangle", h: R`<p><span data-k="c">Trois cas selon le sommet de l'angle droit</span>. On exclut les cas aplatis ($z$ réel).</p>`, b: R`<p>Points distincts : $z\notin\{0,1,-1\}$ ; non aplati : $z\notin\mathbb R$. <span data-k="c">En $1$ : $\operatorname{Re}z = -1$. En $z$ : $\operatorname{Re}z = 0$. En $z^2$ : $\operatorname{Re}\big((1+z)\bar z\big) = x^2+y^2+x = 0$</span>.</p><div class="sbox">$$\{x = -1\}\cup\{x = 0\}\cup\mathcal C\left(-\tfrac12,\tfrac12\right),\ \text{privés des points réels}.$$</div>` + FIG(300, 220, (() => { const X = v => 150 + v * 60, Y = v => 110 - v * 60; let s = `<line class="ax" x1="10" y1="110" x2="290" y2="110"/><line class="ax" x1="150" y1="10" x2="150" y2="210"/>`; s += `<line class="vb" style="stroke-width:2" x1="${X(-1)}" y1="10" x2="${X(-1)}" y2="210"/><line class="vr" style="stroke-width:2" x1="${X(0)}" y1="10" x2="${X(0)}" y2="210"/><circle cx="${X(-0.5)}" cy="110" r="30" class="vg" style="fill:none;stroke-width:2"/>`; return s + S(X(-1) - 4, 24, "angle droit en 1", "end", "sm b") + S(X(0) + 6, 24, "en z", "start", "sm r") + S(X(-0.5), 160, "en z²", "middle", "sm g"); })(), R`Les trois familles de solutions de (c) : droite $x = -1$, axe imaginaire, cercle de diamètre $[-1,0]$.`, "Lieu des triangles rectangles") }
  ],
  ctx: { "k-alignes": R`<p>Quotients réels ou imaginaires purs.</p>`, "k-reel-conj": R`<p>$\frac uv\in\mathbb R\iff u\bar v\in\mathbb R$.</p>` },
  piege: R`Diviser par une quantité nulle : traiter à part les cas où deux points coïncident.`,
  methode: R`Lieu de points en complexes : quotient de deux vecteurs réel (alignés) ou imaginaire pur (orthogonaux), puis $z = x+iy$.`
},
{
  id: "kb-2-23", subj: "kholles", year: "mpsi", chap: 3, level: 2, time: "25 min",
  title: "Équation de degré 3 avec une racine imaginaire pure",
  enonce: R`<p>Soit $f(z) = z^3-(8-3i)z^2+(41-24i)z+123i$.</p><ol><li>Montrer que $f$ a une racine imaginaire pure et la déterminer.</li><li>Résoudre $f(z) = 0$.</li><li>Quelle est la nature du triangle formé par les trois racines ?</li></ol>`,
  decode: { donnees: [R`On cherche $z = iy$, $y\in\mathbb R$.`], but: R`Factoriser puis résoudre.`, cles: {
    iy: R`$f(iy) = (8y^2+24y)+i(-y^3-3y^2+41y+123)$ : les deux parties doivent être nulles.`,
    fact: R`$f(z) = (z+3i)(z^2+az+b)$ ; on identifie $a$ et $b$.`,
    pyth: R`$|B-A|^2+|C-A|^2 = |B-C|^2$ : angle droit en $A$.` } },
  steps: [
    { q: 1, t: "La racine imaginaire pure", h: R`<p>On <span data-k="iy">sépare partie réelle et imaginaire</span> de $f(iy)$.</p>`, b: R`<p><span data-k="iy">Partie réelle : $8y(y+3) = 0$</span>, donc $y = 0$ ou $-3$. $y = 0$ donne une partie imaginaire $123\neq0$ ; $y = -3$ : $27-27-123+123 = 0$. Racine : $z = -3i$.</p>` },
    { q: 2, t: "Factoriser", h: R`<p><span data-k="fact">Identification des coefficients</span>.</p>`, b: R`<p><span data-k="fact">$f(z) = (z+3i)(z^2-8z+41)$</span> (le coefficient constant donne $3ib = 123i$, $b = 41$ ; celui de $z^2$ donne $a+3i = -8+3i$). $z^2-8z+41$ : $\Delta = 64-164 = -100$, $z = 4\pm5i$.</p><div class="sbox">$$f(z) = 0\iff z\in\{-3i,\ 4+5i,\ 4-5i\}.$$</div>`, rappels: ["k-second-degre-c"] },
    { q: 3, t: "Le triangle", h: R`<p>Calculer les trois longueurs et tester <span data-k="pyth">Pythagore</span>.</p>`, b: R`<p>$A = -3i$, $B = 4+5i$, $C = 4-5i$ : $AB^2 = 16+64 = 80$, $AC^2 = 16+4 = 20$, $BC^2 = 100$. <span data-k="pyth">$80+20 = 100$</span> : triangle rectangle en $A$ (non isocèle).</p>` }
  ],
  ctx: { "k-second-degre-c": R`<p>Discriminant $-100 = (10i)^2$.</p>` },
  piege: R`Oublier de vérifier la partie imaginaire pour $y = 0$ : seule $y = -3$ convient.`,
  methode: R`Racine imaginaire pure : poser $z = iy$ et annuler parties réelle et imaginaire.`
},
{
  id: "kb-2-24", subj: "kholles", year: "mpsi", chap: 3, level: 2, time: "15 min",
  title: "Trois complexes de module 1",
  enonce: R`<p>Soient $a,b,c\in\mathbb U$.</p><ol><li>Si $ab\neq-1$, montrer que $\dfrac{a+b}{1+ab}$ est réel.</li><li>Montrer que $|ab+bc+ca| = |a+b+c|$.</li></ol>`,
  decode: { donnees: [R`$|a| = 1\iff\bar a = \frac1a$.`], but: R`Deux propriétés des complexes de module $1$.`, cles: {
    conj: R`$\overline{\left(\frac{a+b}{1+ab}\right)} = \frac{\frac1a+\frac1b}{1+\frac1{ab}} = \frac{b+a}{ab+1}$.`,
    fact: R`$ab+bc+ca = abc\left(\frac1c+\frac1a+\frac1b\right) = abc\,\overline{(a+b+c)}$.` } },
  steps: [
    { q: 1, t: "Un réel", h: R`<p><span data-k="conj">On calcule le conjugué</span> avec $\bar a = \frac1a$.</p>`, b: R`<p><span data-k="conj">Le conjugué est égal au nombre</span> (on multiplie haut et bas par $ab$) : il est réel. Exemple : $a = i$, $b = 1$ : $\frac{1+i}{1+i} = 1$.</p>`, rappels: ["k-reel-conj"] },
    { q: 2, t: "Une égalité de modules", h: R`<p><span data-k="fact">On factorise par $abc$</span>.</p>`, b: R`<p><span data-k="fact">$ab+bc+ca = abc\,\overline{a+b+c}$</span>, et $|abc| = 1$ :</p><div class="sbox">$$|ab+bc+ca| = |a+b+c|.$$</div>` }
  ],
  ctx: { "k-reel-conj": R`<p>$\bar w = w$.</p>` },
  piege: R`Oublier la condition $ab\neq-1$ (dénominateur).`,
  methode: R`Complexes de module $1$ : remplacer $\bar a$ par $\frac1a$.`
},
{
  id: "kb-2-25", subj: "kholles", year: "mpsi", chap: 3, level: 3, time: "20 min",
  title: "Une identité de modules avec une moyenne",
  enonce: R`<p>Soient $u,z,z'\in\mathbb C$ avec $u^2 = zz'$. Montrer que$$|z|+|z'| = \left|\frac{z+z'}2+u\right|+\left|\frac{z+z'}2-u\right|.$$</p>`,
  decode: { donnees: [R`$u$ est une « moyenne géométrique » de $z$ et $z'$.`], but: R`Établir l'égalité en comparant les carrés.`, cles: {
    para: R`$|\alpha+\beta|^2+|\alpha-\beta|^2 = 2(|\alpha|^2+|\beta|^2)$.`,
    prod: R`$(s+u)(s-u) = s^2-u^2 = \left(\frac{z+z'}2\right)^2-zz' = \left(\frac{z-z'}2\right)^2$.` } },
  steps: [
    { q: 1, t: "Élever au carré", h: R`<p>Les deux membres sont positifs : on compare les carrés. Le carré de droite fait apparaître <span data-k="para">la somme des carrés</span> et <span data-k="prod">le produit</span>.</p>`, b: R`<p>Avec $s = \frac{z+z'}2$ : $(|s+u|+|s-u|)^2 = |s+u|^2+|s-u|^2+2|s^2-u^2|$. <span data-k="para">$= 2|s|^2+2|u|^2+2|s^2-u^2|$</span>, et <span data-k="prod">$|s^2-u^2| = \frac{|z-z'|^2}4$</span>, $|u|^2 = |z||z'|$.</p>`, rappels: ["k-parallelogramme"] },
    { q: 1, t: "Conclure", h: R`<p>Parallélogramme encore, avec $z$ et $z'$.</p>`, b: R`<p>On obtient $\frac{|z+z'|^2+|z-z'|^2}2+2|z||z'| = |z|^2+|z'|^2+2|z||z'| = (|z|+|z'|)^2$.</p><div class="sbox">$$|z|+|z'| = |s+u|+|s-u|.$$</div><p>Exemple : $z = 1$, $z' = 9$, $u = 3$ : $|5+3|+|5-3| = 10 = 1+9$.</p>` }
  ],
  ctx: { "k-parallelogramme": R`<p>Avec $\alpha = s$, $\beta = u$, puis $\alpha = z$, $\beta = z'$.</p>` },
  piege: R`Développer $|s+u|$ sans carré : il faut passer par les carrés de modules.`,
  methode: R`Égalité entre sommes de modules : élever au carré et utiliser l'identité du parallélogramme.`
},
{
  id: "kb-2-26", subj: "kholles", year: "mpsi", chap: 3, level: 4, time: "40 min",
  title: "Étude d'une fonction rationnelle complexe",
  enonce: R`<p>Soit $f(z) = \dfrac{z^2}{z-2i}$ sur $D = \mathbb C\setminus\{2i\}$.</p><ol><li>Déterminer les antécédents de $1+i$.</li><li>Pour $h\in\mathbb C$, discuter le nombre d'antécédents de $h$. $f$ est-elle surjective ? injective ?</li><li>Soit $g(z) = |z-2i|^2f(z)+z^3$. Exprimer $\operatorname{Re}g$ et $\operatorname{Im}g$ en fonction de $x = \operatorname{Re}z$, $y = \operatorname{Im}z$.</li><li>Déterminer l'ensemble $\Gamma$ des points d'affixe $z\in D$ tels que $g(z)$ soit imaginaire pur. Préciser la nature de la conique qui apparaît.</li></ol>`,
  decode: { donnees: [R`$f(z) = h\iff z^2-hz+2ih = 0$, et $2i$ n'est jamais racine.`], but: R`Étudier $f$, puis un lieu de points.`, cles: {
    eq: R`$z^2 = h(z-2i)$ : équation du second degré, $\Delta = h^2-8ih = h(h-8i)$.`,
    conj: R`$|z-2i|^2f(z) = z^2\overline{(z-2i)} = z^2(\bar z+2i) = |z|^2z+2iz^2$.`,
    hyp: R`$x^2-y^2-2y = 0\iff(y+1)^2-x^2 = 1$.` } },
  steps: [
    { q: 1, t: "Antécédents de 1 + i", h: R`<p>Second degré, discriminant à extraire.</p>`, b: R`<p>$z^2-(1+i)z-2+2i = 0$ ; $\Delta = 2i+8-8i = 8-6i = (3-i)^2$. $z = \frac{1+i\pm(3-i)}2$ : $z = 2$ ou $z = -1+i$.</p>`, rappels: ["k-second-degre-c"] },
    { q: 2, t: "Nombre d'antécédents", h: R`<p><span data-k="eq">$\Delta = h(h-8i)$</span> : une racine double si $\Delta = 0$.</p>`, b: R`<p>$2i$ n'est jamais solution ($-4\neq0$). <span data-k="eq">Si $h\in\{0,8i\}$</span> : un antécédent ($0$, resp. $4i$) ; sinon deux. Donc $f$ est surjective sur $\mathbb C$ mais pas injective.</p>` },
    { q: 3, t: "Partie réelle et imaginaire de g", h: R`<p><span data-k="conj">On simplifie $|z-2i|^2f(z)$</span>, puis on développe.</p>`, b: R`<p><span data-k="conj">$g = |z|^2z+2iz^2+z^3$</span>. Avec $z = x+iy$ :</p>$$\operatorname{Re}g = 2x(x^2-y^2-2y),\qquad\operatorname{Im}g = 2(2x^2y+x^2-y^2).$$` },
    { q: 4, t: "Le lieu Γ", h: R`<p>Imaginaire pur $\iff\operatorname{Re}g = 0$ : un produit nul. On reconnaît <span data-k="hyp">une hyperbole</span>.</p>`, b: R`<p>$\operatorname{Re}g = 0\iff x = 0$ ou <span data-k="hyp">$(y+1)^2-x^2 = 1$</span>. Donc $\Gamma = (\Delta\setminus\{2i\})\cup\mathcal C$, avec $\Delta$ l'axe imaginaire et $\mathcal C$ une hyperbole équilatère de centre $-i$, d'axe focal vertical, de sommets $0$ et $-2i$, de foyers $-i\pm i\sqrt2$, d'excentricité $\sqrt2$, d'asymptotes $y+1 = \pm x$.</p>` + GRAPH({ w: 360, h: 260, x: [-3, 3], y: [-4, 2.5], xt: [-2, 2], yt: [-2, 2], curves: [{ f: x => -1 + Math.sqrt(1 + x * x), c: "b" }, { f: x => -1 - Math.sqrt(1 + x * x), c: "b" }, { f: x => -1 + x, c: "k", dash: 1 }, { f: x => -1 - x, c: "k", dash: 1 }], vl: [{ x: 0 }] }, R`$\Gamma$ : l'axe imaginaire (privé de $2i$) et l'hyperbole équilatère de centre $-i$ (en bleu), avec ses asymptotes.`, "Lieu Gamma"), rappels: ["k-conique"] }
  ],
  ctx: { "k-second-degre-c": R`<p>$\Delta = (3-i)^2$.</p>`, "k-conique": R`<p>$(y+1)^2-x^2 = 1$.</p>` },
  piege: R`Oublier d'exclure $2i$ du lieu (hors du domaine).`,
  methode: R`Lieu « $g(z)$ imaginaire pur » : calculer $\operatorname{Re}g$ en fonction de $x,y$, factoriser.`
},
{
  id: "kb-2-27", subj: "kholles", year: "mpsi", chap: 3, level: 4, time: "35 min",
  title: "La tangente hyperbolique complexe",
  enonce: R`<p>Pour $z\in\mathbb C$, $\operatorname{th}z = \dfrac{e^z-e^{-z}}{e^z+e^{-z}}$.</p><ol><li>Pour quels $z$ est-elle définie ?</li><li>Résoudre $\operatorname{th}z = 0$.</li><li>Résoudre le système $|\operatorname{Im}z|< \frac\pi2$, $|\operatorname{th}z|< 1$.</li><li>Montrer que $\operatorname{th}$ est une bijection de $\Delta = \{|\operatorname{Im}z|< \frac\pi4\}$ sur le disque $\{|w|< 1\}$.</li></ol>`,
  decode: { donnees: [R`$\operatorname{th}z = \frac{e^{2z}-1}{e^{2z}+1}$.`], but: R`Étudier $\operatorname{th}$ sur $\mathbb C$.`, cles: {
    w: R`Avec $w = e^{2z} = e^{2x}e^{2iy}$ : $\operatorname{th}z = \frac{w-1}{w+1}$.`,
    disque: R`$\left|\frac{w-1}{w+1}\right|< 1\iff|w-1|< |w+1|\iff\operatorname{Re}w>0$ ($w$ plus proche de $1$ que de $-1$).`,
    bij: R`$z\mapsto e^{2z}$ : bande $|y|< \frac\pi4$ $\to$ demi-plan $\operatorname{Re}w>0$ (bijection). $w\mapsto\frac{w-1}{w+1}$ : demi-plan $\to$ disque, de réciproque $t\mapsto\frac{1+t}{1-t}$.` } },
  steps: [
    { q: 1, t: "Domaine", h: R`<p>Dénominateur : <span data-k="w">$w+1 = 0$</span>.</p>`, b: R`<p>$e^{2z} = -1\iff2z\in i\pi+2i\pi\mathbb Z$ : $\operatorname{th}$ est définie sur $\mathbb C\setminus\left(\frac{i\pi}2+i\pi\mathbb Z\right)$.</p>` },
    { q: 2, t: "Zéros", h: R`<p>$w = 1$.</p>`, b: R`<p>$e^{2z} = 1\iff z\in i\pi\mathbb Z$.</p>` },
    { q: 3, t: "Le système", h: R`<p><span data-k="disque">$|\operatorname{th}z|< 1\iff\operatorname{Re}e^{2z}>0$</span>.</p>`, b: R`<p><span data-k="disque">$\operatorname{Re}w = e^{2x}\cos2y>0\iff\cos2y>0$</span>. Avec $|y|< \frac\pi2$ : $|2y|< \pi$ et $\cos2y>0\iff|y|< \frac\pi4$. Solutions : la bande $\Delta$.</p>` },
    { q: 4, t: "La bijection", h: R`<p><span data-k="bij">Composée de deux bijections</span>.</p>`, b: R`<p><span data-k="bij">$z = x+iy\mapsto e^{2x}e^{2iy}$</span> envoie bijectivement $\Delta$ sur $\{\operatorname{Re}w>0\}$ (module $e^{2x}$ quelconque $>0$, argument $2y\in\,]-\frac\pi2,\frac\pi2[$). Puis $w\mapsto\frac{w-1}{w+1}$ est une bijection du demi-plan sur le disque (question 3, réciproque $\frac{1+t}{1-t}$).</p><div class="sbox">$$\operatorname{th} : \Delta\to\{|w|< 1\}\ \text{bijective}.$$</div>`, rappels: ["k-inj"] }
  ],
  ctx: { "k-inj": R`<p>Composée de bijections.</p>` },
  piege: R`Oublier que l'argument n'est défini que modulo $2\pi$ : c'est la largeur de la bande qui garantit l'injectivité.`,
  methode: R`Fonctions hyperboliques complexes : tout réécrire avec $w = e^{2z}$.`
}
]);
})();

LEMME.rappels({
  "k-j": { t: "Le nombre j", b: R`<div class="sbox">$$j = e^{2i\pi/3},\qquad j^3 = 1,\qquad1+j+j^2 = 0,\qquad\bar j = j^2,\qquad e^{i\pi/3} = -j^2.$$</div>` },
  "k-somme-racines": { t: "Somme des racines de l'unité", b: R`<p>Pour $\omega = e^{2i\pi/n}$ ($n\geqslant2$) :</p><div class="sbox">$$1+\omega+\omega^2+\dots+\omega^{n-1} = 0.$$</div>` },
  "k-viete2": { t: "Somme et produit de deux nombres", b: R`<p>Deux nombres de somme $s$ et de produit $p$ sont les racines de</p><div class="sbox">$$X^2-sX+p = 0.$$</div>` },
  "k-egal-tri": { t: "Égalité dans l'inégalité triangulaire", b: R`<div class="sbox">$$|z+z'| = |z|+|z'|\iff\bar zz'\in\mathbb R_+\iff z,z'\ \text{sur une même demi-droite issue de}\ O.$$</div><p>Car $|z+z'|^2 = |z|^2+|z'|^2+2\operatorname{Re}(\bar zz')$ et $\operatorname{Re}(\bar zz')\leqslant|\bar zz'|$.</p>` }
});

(() => {
const { FIG, S, f1, ARR } = window.__LA;
LEMME.exercises([
{
  id: "kb-2-28", subj: "kholles", year: "mpsi", chap: 3, level: 2, time: "20 min",
  title: "Cosinus de 2π/5 par les racines de l'unité",
  enonce: R`<p>Soit $\omega = e^{2i\pi/5}$, $\alpha = \omega+\omega^4$, $\beta = \omega^2+\omega^3$.</p><ol><li>Calculer $\alpha+\beta$ et $\alpha\beta$. En déduire une équation du second degré dont $\alpha$ et $\beta$ sont les racines.</li><li>En déduire $\cos\frac{2\pi}5$ et $\cos\frac{4\pi}5$.</li><li>En déduire $\cos\frac\pi5$ et $\sin\frac\pi5$.</li></ol>`,
  decode: { donnees: [R`$\omega^5 = 1$ et $\omega^4 = \bar\omega$.`], but: R`Calculer des cosinus exacts.`, cles: {
    reel: R`$\alpha = \omega+\bar\omega = 2\cos\frac{2\pi}5$ et $\beta = 2\cos\frac{4\pi}5$ : deux réels.`,
    prod: R`$\alpha\beta = \omega^3+\omega^4+\omega^6+\omega^7 = \omega^3+\omega^4+\omega+\omega^2$ (car $\omega^5 = 1$).`,
    signe: R`$\frac{2\pi}5< \frac\pi2$ : $\alpha>0$. $\frac{4\pi}5>\frac\pi2$ : $\beta< 0$.` } },
  steps: [
    { q: 1, t: "Somme et produit", h: R`<p><span data-k="prod">On réduit les exposants modulo $5$</span> et on utilise la somme des racines.</p>`, b: R`<p>$\alpha+\beta = \omega+\omega^2+\omega^3+\omega^4 = -1$. <span data-k="prod">$\alpha\beta = \omega+\omega^2+\omega^3+\omega^4 = -1$</span>. Donc $\alpha,\beta$ sont les racines de $X^2+X-1 = 0$ : $\frac{-1\pm\sqrt5}2$.</p>`, rappels: ["k-somme-racines", "k-viete2"] },
    { q: 2, t: "Attribuer les racines", h: R`<p><span data-k="signe">Signe des cosinus</span>.</p>`, b: R`<p><span data-k="reel">$\alpha = 2\cos\frac{2\pi}5>0$</span> : $\alpha = \frac{\sqrt5-1}2$.</p><div class="sbox">$$\cos\frac{2\pi}5 = \frac{\sqrt5-1}4,\qquad\cos\frac{4\pi}5 = -\frac{1+\sqrt5}4.$$</div>` },
    { q: 3, t: "L'angle π/5", h: R`<p>$\cos\frac\pi5 = -\cos\frac{4\pi}5$.</p>`, b: R`<p>$\cos\frac\pi5 = \frac{1+\sqrt5}4$, puis $\sin^2\frac\pi5 = 1-\frac{6+2\sqrt5}{16} = \frac{5-\sqrt5}8$, et $\sin\frac\pi5 = \sqrt{\frac{5-\sqrt5}8}$ (positif).</p>` }
  ],
  ctx: { "k-somme-racines": R`<p>$1+\omega+\dots+\omega^4 = 0$.</p>`, "k-viete2": R`<p>$s = -1$, $p = -1$.</p>` },
  piege: R`Se tromper dans l'attribution des racines : c'est le signe des cosinus qui décide.`,
  methode: R`Cosinus de $\frac{2k\pi}n$ : regrouper les racines $n$-ièmes conjuguées et utiliser somme et produit.`
},
{
  id: "kb-2-29", subj: "kholles", year: "mpsi", chap: 3, level: 4, time: "35 min",
  title: "Triangles équilatéraux et théorème de Napoléon",
  enonce: R`<ol><li>Montrer que $A,B,C$ d'affixes $a,b,c$ forment un triangle équilatéral direct si et seulement si $a+jb+j^2c = 0$ ($j = e^{2i\pi/3}$).</li><li>Soit $ABC$ un triangle. On construit à l'extérieur les triangles équilatéraux directs $BA'C$, $CB'A$, $AC'B$, de centres $G$, $H$, $K$. Montrer que $GHK$ est équilatéral (théorème de Napoléon).</li></ol>`,
  decode: { donnees: [R`$ABC$ direct équilatéral : $c-a = e^{i\pi/3}(b-a)$.`], but: R`Caractériser les triangles équilatéraux, puis le prouver pour $GHK$.`, cles: {
    rot: R`$e^{i\pi/3} = -j^2$ : $c-a = -j^2(b-a)$, et $1+j^2 = -j$.`,
    prime: R`$BA'C$ direct : $b+ja'+j^2c = 0$, d'où $a' = -j^2b-jc$ ; de même $b' = -j^2c-ja$, $c' = -j^2a-jb$.`,
    centres: R`$3g = b+a'+c$, $3h = c+b'+a$, $3k = a+c'+b$.` } },
  steps: [
    { q: 1, t: "La caractérisation", h: R`<p><span data-k="rot">Rotation d'angle $\frac\pi3$</span> autour de $A$, puis on simplifie avec $1+j+j^2 = 0$.</p>`, b: R`<p><span data-k="rot">$c-a = -j^2(b-a)\iff c+j^2b+ja = 0$</span> ; en multipliant par $j^2$ : $a+jb+j^2c = 0$.</p><div class="sbox">$$ABC\ \text{équilatéral direct}\iff a+jb+j^2c = 0.$$</div>`, rappels: ["k-j"] },
    { q: 2, t: "Les sommets extérieurs", h: R`<p><span data-k="prime">On applique la caractérisation aux trois triangles extérieurs</span>.</p>`, b: R`<p><span data-k="prime">$a' = -j^2b-jc$, $b' = -j^2c-ja$, $c' = -j^2a-jb$</span>. Puis <span data-k="centres">$3g = b(1-j^2)+c(1-j)$, $3h = c(1-j^2)+a(1-j)$, $3k = a(1-j^2)+b(1-j)$</span>.</p>` },
    { q: 2, t: "Vérifier la relation", h: R`<p>On calcule $g+jh+j^2k$ coefficient de $a$, de $b$, de $c$.</p>`, b: R`<p>Coefficient de $a$ dans $3(g+jh+j^2k)$ : $j(1-j)+j^2(1-j^2) = j-j^2+j^2-j = 0$. De même pour $b$ ($1-j^2+j^2-1$) et $c$ ($1-j+j-1$). Donc $g+jh+j^2k = 0$ :</p><div class="sbox">$$GHK\ \text{est équilatéral (direct)}.$$</div>` + FIG(300, 240, (() => { const P = { A: [60, 190], B: [230, 190], C: [120, 80] }; const rot = (p, q, s) => { const dx = q[0] - p[0], dy = q[1] - p[1], c = Math.cos(s * Math.PI / 3), n = Math.sin(s * Math.PI / 3); return [p[0] + c * dx - n * dy, p[1] + n * dx + c * dy]; }; const Ap = rot(P.B, P.C, 1), Bp = rot(P.C, P.A, 1), Cp = rot(P.A, P.B, 1); const cen = (u, v, w) => [(u[0] + v[0] + w[0]) / 3, (u[1] + v[1] + w[1]) / 3]; const G = cen(P.B, Ap, P.C), H = cen(P.C, Bp, P.A), K = cen(P.A, Cp, P.B); const poly = (pts, cl) => `<polygon points="${pts.map(p => p.map(f1).join(",")).join(" ")}" class="${cl}" style="fill:none;stroke-width:1.5"/>`; return `<g transform="translate(0,20) scale(0.8)">` + poly([P.A, P.B, P.C], "vk") + poly([P.B, Ap, P.C], "vb") + poly([P.C, Bp, P.A], "vb") + poly([P.A, Cp, P.B], "vb") + poly([G, H, K], "vr") + `</g>`; })(), R`Les centres des trois triangles équilatéraux extérieurs (bleus) forment un triangle équilatéral (rouge).`, "Théorème de Napoléon") }
  ],
  ctx: { "k-j": R`<p>$1+j+j^2 = 0$, $j^3 = 1$.</p>` },
  piege: R`Se tromper d'orientation : pour un triangle indirect, la relation devient $a+j^2b+jc = 0$.`,
  methode: R`Triangles équilatéraux : la relation $a+jb+j^2c = 0$ transforme la géométrie en calcul linéaire.`
},
{
  id: "kb-2-30", subj: "kholles", year: "mpsi", chap: 3, level: 4, time: "40 min",
  title: "Une équation du troisième degré « autoréciproque »",
  enonce: R`<p>Soit $a\in\mathbb C$ et $(E) : P(z) = z^3+az^2-\bar az-1 = 0$, de racines $z_1,z_2,z_3$ (comptées avec multiplicité).</p><ol><li>Discuter le nombre de racines réelles selon que $a$ est réel ou non.</li><li>Montrer que $P(z) = -z^3\,\overline{P(1/\bar z)}$. En déduire que si $z$ est racine, $\frac1{\bar z}$ aussi, avec la même multiplicité.</li><li>Calculer $z_1z_2z_3$ et $z_1+z_2+z_3$.</li><li>Montrer qu'une racine multiple est de module $1$.</li><li>Montrer que $(E)$ a toujours une racine de module $1$.</li></ol>`,
  decode: { donnees: [R`$0$ n'est pas racine ($P(0) = -1$).`], but: R`Étudier les racines d'un polynôme à symétrie.`, cles: {
    reel: R`Pour $x$ réel : $\operatorname{Im}P(x) = \operatorname{Im}(a)\,x(x+1)$.`,
    fact: R`$a$ réel : $P(z) = (z-1)\big(z^2+(a+1)z+1\big)$.`,
    invol: R`$z\mapsto\frac1{\bar z}$ est la symétrie par rapport au cercle unité : elle fixe exactement les points de module $1$.` } },
  steps: [
    { q: 1, t: "Racines réelles", h: R`<p>Cas $a$ réel : <span data-k="fact">$1$ est racine</span>. Cas $a$ non réel : <span data-k="reel">une racine réelle annule la partie imaginaire</span>.</p>`, b: R`<ul><li>$a$ réel : <span data-k="fact">$P = (z-1)(z^2+(a+1)z+1)$</span> ; le trinôme a des racines réelles ssi $(a+1)^2\geqslant4$. Trois racines réelles (avec multiplicité) si $a\leqslant-3$ ou $a\geqslant1$, une seule sinon.</li><li>$a$ non réel : <span data-k="reel">$x(x+1) = 0$</span>, $x = 0$ exclu, $x = -1$ : $P(-1) = 2\operatorname{Re}a-2$. Une racine réelle ($-1$) si $\operatorname{Re}a = 1$, aucune sinon.</li></ul>` },
    { q: 2, t: "La symétrie z ↦ 1/z̄", h: R`<p>On calcule $\overline{P(1/\bar z)}$ et on multiplie par $-z^3$.</p>`, b: R`<p>$\overline{P(1/\bar z)} = \frac1{z^3}+\frac{\bar a}{z^2}-\frac az-1$, et $-z^3$ fois cela donne $z^3+az^2-\bar az-1 = P(z)$. Donc $P(z_0) = 0\iff P(1/\bar z_0) = 0$, et en dérivant l'identité, les multiplicités sont les mêmes.</p>` },
    { q: 3, t: "Relations coefficients-racines", h: R`<p>Polynôme unitaire de degré $3$.</p>`, b: R`<p>$z_1z_2z_3 = -(-1) = 1$ et $z_1+z_2+z_3 = -a$.</p>`, rappels: ["k-relations-coef"] },
    { q: 4, t: "Racine multiple", h: R`<p>Si $|z_0|\neq1$, <span data-k="invol">$\frac1{\bar z_0}\neq z_0$</span> serait aussi double.</p>`, b: R`<p>Sinon on aurait deux racines doubles distinctes : $4>3$ racines. Donc $|z_0| = 1$.</p>`, rappels: ["absurde"] },
    { q: 5, t: "Toujours une racine de module 1", h: R`<p>Les racines de module $\neq1$ vont <span data-k="invol">par paires</span> de même multiplicité : leur nombre total est pair.</p>`, b: R`<p>Si aucune racine n'avait module $1$, les racines se regrouperaient en paires $\{z,\frac1{\bar z}\}$ distinctes, de même multiplicité : un total pair, alors que $\deg P = 3$. Donc une racine au moins est de module $1$.</p><p>Exemple : $a = 0$ : $z^3 = 1$, toutes de module $1$.</p>` }
  ],
  ctx: { "k-relations-coef": R`<p>$P$ unitaire de degré $3$.</p>`, "absurde": R`<p>On suppose $|z_0|\neq1$.</p>` },
  piege: R`Oublier les multiplicités dans l'argument de parité.`,
  methode: R`Polynôme vérifiant $P(z) = cz^n\overline{P(1/\bar z)}$ : ses racines sont symétriques par rapport au cercle unité.`
},
{
  id: "kb-2-31", subj: "kholles", year: "mpsi", chap: 3, level: 3, time: "30 min",
  title: "Égalité dans l'inégalité triangulaire (géométrique)",
  enonce: R`<p>Soient $z_1,\dots,z_n$ non nuls, d'images $A_1,\dots,A_n$.</p><ol><li>Pour $\vec u$, $\vec u'$ d'affixes $z$, $z'$, exprimer $\vec u\cdot\vec u'$ et $\det(\vec u,\vec u')$ à l'aide de $\bar zz'$.</li><li>Montrer que $|z_1+z_2| = |z_1|+|z_2|\iff\bar z_1z_2\in\mathbb R_+$, et interpréter.</li><li>Montrer par récurrence : si $\left|\sum z_k\right| = \sum|z_k|$, les $A_k$ sont sur une même demi-droite issue de $O$.</li><li>Réciproque.</li></ol>`,
  decode: { donnees: [R`$z = a+ib$, $z' = a'+ib'$.`], but: R`Caractériser le cas d'égalité.`, cles: {
    prod: R`$\bar zz' = (aa'+bb')+i(ab'-ba')$ : produit scalaire et déterminant.`,
    carre: R`$|z_1+z_2|^2 = |z_1|^2+|z_2|^2+2\operatorname{Re}(\bar z_1z_2)$ et $(|z_1|+|z_2|)^2 = |z_1|^2+|z_2|^2+2|\bar z_1z_2|$.`,
    rec: R`Si $|\sum_{k\leqslant n+1}z_k| = \sum|z_k|$, alors avec $Z = \sum_{k\leqslant n}z_k$ : $|Z|+|z_{n+1}|\geqslant|Z+z_{n+1}| = \sum|z_k|\geqslant|Z|+|z_{n+1}|$.` } },
  steps: [
    { q: 1, t: "Produit scalaire et déterminant", h: R`<p><span data-k="prod">On développe $\bar zz'$</span>.</p>`, b: R`<p><span data-k="prod">$\vec u\cdot\vec u' = \operatorname{Re}(\bar zz')$ et $\det(\vec u,\vec u') = \operatorname{Im}(\bar zz')$</span>.</p>` },
    { q: 2, t: "Deux nombres", h: R`<p><span data-k="carre">Comparer les carrés</span>.</p>`, b: R`<p>Égalité $\iff\operatorname{Re}(\bar z_1z_2) = |\bar z_1z_2|\iff\bar z_1z_2\in\mathbb R_+$. Alors $\frac{z_2}{z_1} = \frac{\bar z_1z_2}{|z_1|^2}>0$ : $z_2 = \lambda z_1$, $\lambda>0$, même demi-droite.</p>`, rappels: ["k-egal-tri"] },
    { q: 3, t: "Récurrence", h: R`<p><span data-k="rec">Les inégalités intermédiaires sont des égalités</span>.</p>`, b: R`<p><span data-k="rec">Toutes les inégalités sont des égalités</span> : $|Z| = \sum_{k\leqslant n}|z_k|$ (hypothèse de récurrence : $A_1,\dots,A_n$ sur une demi-droite $D$, et $Z$ aussi, non nul) et $|Z+z_{n+1}| = |Z|+|z_{n+1}|$ : $z_{n+1}$ est sur la demi-droite de $Z$, c'est-à-dire $D$.</p>`, rappels: ["recurrence"] },
    { q: 4, t: "Réciproque", h: R`<p>$z_k = \lambda_ke^{i\theta}$ avec $\lambda_k>0$.</p>`, b: R`<p>$\left|\sum\lambda_ke^{i\theta}\right| = \sum\lambda_k = \sum|z_k|$.</p><div class="sbox">$$\Big|\sum z_k\Big| = \sum|z_k|\iff\text{les}\ z_k\ \text{ont le même argument}.$$</div>` }
  ],
  ctx: { "k-egal-tri": R`<p>Cas de deux nombres.</p>`, "recurrence": R`<p>Sur le nombre de termes.</p>` },
  piege: R`Oublier « non nuls » : $0$ n'a pas d'argument.`,
  methode: R`Cas d'égalité : comparer les carrés, ce qui ramène à $\operatorname{Re}w = |w|$.`
},
{
  id: "kb-2-32", subj: "kholles", year: "mpsi", chap: 3, level: 3, time: "30 min",
  title: "Égalité dans l'inégalité triangulaire (somme double)",
  enonce: R`<p>Soient $z_1,\dots,z_n$ non nuls. On cherche une condition pour $(\ast) : \left|\sum z_k\right| = \sum|z_k|$.</p><ol><li>Montrer sur un exemple que $(\ast)$ n'est pas toujours vraie, et qu'elle l'est si les $z_k$ ont le même argument.</li><li>Montrer que $\left|\sum z_k\right|^2-\left(\sum|z_k|\right)^2 = \displaystyle\sum_k\sum_\ell\big(\operatorname{Re}(z_k\bar z_\ell)-|z_kz_\ell|\big)$.</li><li>En déduire que $(\ast)$ implique que tous les $z_k\bar z_\ell$ sont réels positifs, puis que les $z_k$ ont le même argument.</li></ol>`,
  decode: { donnees: [R`$|w|^2 = w\bar w$ et $\operatorname{Re}w\leqslant|w|$.`], but: R`Démontrer le cas d'égalité par un calcul global.`, cles: {
    dev: R`$\left|\sum z_k\right|^2 = \sum_{k,\ell}z_k\bar z_\ell$, réel, donc égal à sa partie réelle $\sum\operatorname{Re}(z_k\bar z_\ell)$.`,
    pos: R`Chaque terme $\operatorname{Re}(z_k\bar z_\ell)-|z_k\bar z_\ell|$ est $\leqslant0$ : une somme nulle de termes négatifs a tous ses termes nuls.` } },
  steps: [
    { q: 1, t: "Exemples", h: R`<p>Deux nombres opposés.</p>`, b: R`<p>$z_1 = 1$, $z_2 = -1$ : $0\neq2$. Si $z_k = r_ke^{i\theta}$ : $|\sum z_k| = \sum r_k$.</p>` },
    { q: 2, t: "La somme double", h: R`<p><span data-k="dev">Développer le carré du module</span>.</p>`, b: R`<p><span data-k="dev">$\left|\sum z_k\right|^2 = \sum_{k,\ell}\operatorname{Re}(z_k\bar z_\ell)$</span> et $\left(\sum|z_k|\right)^2 = \sum_{k,\ell}|z_k||z_\ell|$ : on soustrait.</p>` },
    { q: 3, t: "Tous les termes sont nuls", h: R`<p><span data-k="pos">Somme nulle de termes négatifs</span>.</p>`, b: R`<p>Si $(\ast)$, la somme est nulle et <span data-k="pos">chaque $\operatorname{Re}(z_k\bar z_\ell) = |z_k\bar z_\ell|$</span>, soit $z_k\bar z_\ell\in\mathbb R_+^\ast$. Avec $\ell = 1$ : $\frac{z_k}{z_1} = \frac{z_k\bar z_1}{|z_1|^2}>0$, donc $z_k$ a l'argument de $z_1$.</p><div class="sbox">$$(\ast)\iff\arg z_1 = \dots = \arg z_n.$$</div>`, rappels: ["k-egal-tri"] }
  ],
  ctx: { "k-egal-tri": R`<p>Version à $n$ termes.</p>` },
  piege: R`Oublier que $\left|\sum z_k\right|^2$ est réel, ce qui permet de passer aux parties réelles.`,
  methode: R`Somme de termes de signe constant nulle : chaque terme est nul.`
}
]);
})();

LEMME.rappels({
  "k-moivre": { t: "Formule de Moivre et linéarisation inverse", b: R`<div class="sbox">$$(\cos x+i\sin x)^n = \cos(nx)+i\sin(nx).$$</div><p>En développant par le binôme et en prenant parties réelle et imaginaire, on exprime $\cos(nx)$ et $\sin(nx)$ en fonction de $\cos x$ et $\sin x$. Exemple : $\sin3x = 3\sin x-4\sin^3x$.</p>` },
  "k-prod-sin": { t: "Produit de deux sinus", b: R`<div class="sbox">$$2\sin a\sin b = \cos(a-b)-\cos(a+b).$$</div>` },
  "k-somme-geo-racines": { t: "Somme des puissances d'une racine de l'unité", b: R`<p>Pour $\omega = e^{2i\pi/n}$ et $r\in\mathbb Z$ :</p><div class="sbox">$$\sum_{k=0}^{n-1}\omega^{rk} = \begin{cases}n&\text{si}\ n\mid r\\0&\text{sinon.}\end{cases}$$</div>` }
});

(() => {
const { FIG, S, f1, GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "kb-2-33", subj: "kholles", year: "mpsi", chap: 3, level: 3, time: "25 min",
  title: "Une équation de degré n avec une tangente",
  enonce: R`<p>Soit $n\geqslant2$ et $\alpha\in\,]-\frac\pi2,\frac\pi2[$.</p><ol><li>Résoudre $z^n = 1$.</li><li>Simplifier $\dfrac{1+i\tan\alpha}{1-i\tan\alpha}$.</li><li>Résoudre $(E) : \left(\dfrac{z+i}{z-i}\right)^n = \left(\dfrac{1+i\tan\alpha}{1-i\tan\alpha}\right)^n$ (montrer que les solutions sont réelles).</li></ol>`,
  decode: { donnees: [R`$z\neq i$.`], but: R`Résoudre en se ramenant aux racines de l'unité.`, cles: {
    expo: R`$\frac{1+i\tan\alpha}{1-i\tan\alpha} = \frac{e^{i\alpha}}{e^{-i\alpha}} = e^{2i\alpha}$ (on multiplie par $\cos\alpha$).`,
    quot: R`$(E)\iff\frac{z+i}{z-i} = e^{2i\alpha}\omega^k = e^{i\theta_k}$ avec $\theta_k = 2\alpha+\frac{2k\pi}n$.`,
    cot: R`$z(1-e^{i\theta}) = -i(1+e^{i\theta})$, puis l'angle moitié : $z = \cot\frac\theta2$, si $e^{i\theta}\neq1$.` } },
  steps: [
    { q: 1, t: "Racines de l'unité", h: R`<p>Forme exponentielle.</p>`, b: R`<p>$z^n = 1\iff z = \omega^k = e^{2ik\pi/n}$, $0\leqslant k\leqslant n-1$.</p>`, rappels: ["o-b-racines"] },
    { q: 2, t: "Simplifier", h: R`<p><span data-k="expo">Multiplier par $\cos\alpha>0$</span>.</p>`, b: R`<p><span data-k="expo">$\frac{1+i\tan\alpha}{1-i\tan\alpha} = e^{2i\alpha}$</span>.</p>` },
    { q: 3, t: "Résoudre", h: R`<p><span data-k="quot">On extrait la racine $n$-ième du quotient</span>, puis <span data-k="cot">on isole $z$</span>.</p>`, b: R`<p><span data-k="quot">$\frac{z+i}{z-i} = e^{i\theta_k}$</span>. Si $e^{i\theta_k} = 1$, pas de solution. Sinon <span data-k="cot">$z = -i\frac{1+e^{i\theta_k}}{1-e^{i\theta_k}} = \cot\frac{\theta_k}2$</span>.</p><div class="sbox">$$z = \cot\Big(\alpha+\frac{k\pi}n\Big),\quad0\leqslant k\leqslant n-1,\quad\alpha+\frac{k\pi}n\notin\pi\mathbb Z.$$</div><p>Ce sont des réels distincts (cotangente injective sur un intervalle de longueur $\pi$) : $n$ solutions si $\alpha\notin\frac\pi n\mathbb Z$, $n-1$ sinon.</p>`, rappels: ["k-moitie"] }
  ],
  ctx: { "o-b-racines": R`<p>$\omega = e^{2i\pi/n}$.</p>`, "k-moitie": R`<p>$\frac{1+e^{i\theta}}{1-e^{i\theta}} = \frac{2\cos(\theta/2)}{-2i\sin(\theta/2)}$.</p>` },
  piege: R`Oublier le cas $e^{i\theta_k} = 1$, qui donne une équation sans solution.`,
  methode: R`Équation $\left(\frac{z+i}{z-i}\right)^n = c$ : extraire les racines $n$-ièmes, puis l'angle moitié donne une cotangente.`
},
{
  id: "kb-2-34", subj: "kholles", year: "mpsi", chap: 3, level: 3, time: "25 min",
  title: "Identités trigonométriques dans un triangle",
  enonce: R`<ol><li>Exprimer $\sin3x$ en fonction de $\sin x$, puis montrer que $\sin3x = 4\sin x\sin\left(\frac\pi3-x\right)\sin\left(\frac\pi3+x\right)$.</li><li>Soient $x,y,z\in\,]0,\frac\pi3[$ avec $x+y+z = \frac\pi3$. Montrer que $\dfrac{\sin(3x+3y)}{\sin(x+y)} = 4\sin z\sin\left(z+\frac\pi3\right)$.</li><li>Soient $u,v,w$ réels avec $u+v+w = \pi$. Montrer que $\sin^2u+\sin^2v-2\sin u\sin v\cos w = \sin^2w$, et l'interpréter dans un triangle.</li></ol>`,
  decode: { donnees: [R`$\sin^2 = \frac{1-\cos2x}2$ et $2\sin a\sin b = \cos(a-b)-\cos(a+b)$.`], but: R`Établir trois identités.`, cles: {
    prod: R`$4\sin\left(\frac\pi3-x\right)\sin\left(\frac\pi3+x\right) = 2\big(\cos2x-\cos\frac{2\pi}3\big) = 2\cos2x+1 = 3-4\sin^2x$.`,
    sub: R`Avec $t = x+y = \frac\pi3-z$ : $\sin\left(\frac\pi3-t\right) = \sin z$ et $\sin\left(\frac\pi3+t\right) = \sin\left(\frac{2\pi}3-z\right) = \sin\left(\frac\pi3+z\right)$.`,
    kashi: R`$\cos w = -\cos(u+v)$, et on compare avec $\sin^2w = \sin^2(u+v)$ développé.` } },
  steps: [
    { q: 1, t: "sin 3x", h: R`<p>Moivre ou $\sin(2x+x)$ ; puis <span data-k="prod">transformer le produit en somme</span>.</p>`, b: R`<p>$\sin3x = 3\sin x-4\sin^3x = \sin x(3-4\sin^2x)$, et <span data-k="prod">$4\sin\left(\frac\pi3-x\right)\sin\left(\frac\pi3+x\right) = 3-4\sin^2x$</span>.</p>`, rappels: ["k-moivre", "k-prod-sin"] },
    { q: 2, t: "Avec x + y + z = π/3", h: R`<p><span data-k="sub">Substituer $t = x+y$</span> dans la question 1.</p>`, b: R`<p>$\frac{\sin3t}{\sin t} = 4\sin\left(\frac\pi3-t\right)\sin\left(\frac\pi3+t\right)$ ($\sin t\neq0$), et <span data-k="sub">les deux facteurs valent $\sin z$ et $\sin\left(z+\frac\pi3\right)$</span>.</p>` },
    { q: 3, t: "Al-Kashi trigonométrique", h: R`<p><span data-k="kashi">Exprimer $\cos w$ et $\sin w$ avec $u,v$</span>.</p>`, b: R`<p>$\cos w = \sin u\sin v-\cos u\cos v$. Gauche : $\sin^2u+\sin^2v-2\sin^2u\sin^2v+2\sin u\sin v\cos u\cos v$. Droite : $(\sin u\cos v+\cos u\sin v)^2$, qui donne la même chose avec $\cos^2 = 1-\sin^2$.</p><div class="sbox">$$\sin^2u+\sin^2v-2\sin u\sin v\cos w = \sin^2w.$$</div><p>Dans un triangle d'angles $u,v,w$, avec $a = 2R\sin u$ (loi des sinus), c'est $c^2 = a^2+b^2-2ab\cos w$.</p>` }
  ],
  ctx: { "k-moivre": R`<p>$n = 3$.</p>`, "k-prod-sin": R`<p>Avec $a = \frac\pi3-x$, $b = \frac\pi3+x$.</p>` },
  piege: R`Oublier que $\sin(x+y)\neq0$ (car $0< x+y< \frac\pi3$) avant de diviser.`,
  methode: R`Identités avec contrainte sur les angles : exprimer un angle en fonction des autres et développer.`
},
{
  id: "kb-2-36", subj: "kholles", year: "mpsi", chap: 3, level: 4, time: "30 min",
  title: "Points fixes de l'exponentielle complexe",
  enonce: R`<p>On cherche les $z\in\mathbb C$ tels que $e^z = z$.</p><ol><li>Montrer qu'il n'y a pas de solution réelle.</li><li>Avec $z = a+ib$, $b\neq0$, montrer que $e^z = z$ équivaut à $a = \frac{b\cos b}{\sin b}$ et $e^a = \frac{b}{\sin b}$.</li><li>Soit $\psi(b) = \exp\left(\frac{b\cos b}{\sin b}\right)-\frac b{\sin b}$ sur $]2\pi,\frac{5\pi}2]$. Étudier ses limites et conclure qu'il existe un point fixe.</li><li>Combien y en a-t-il ?</li></ol>`,
  decode: { donnees: [R`$e^{a+ib} = e^a(\cos b+i\sin b)$.`], but: R`Montrer l'existence de points fixes non réels.`, cles: {
    sys: R`$e^a\cos b = a$ et $e^a\sin b = b$. Si $\sin b = 0$, alors $b = 0$. Sinon on divise.`,
    lim: R`En $2\pi^+$ : $\frac{b\cos b}{\sin b}\to+\infty$, et l'exponentielle l'emporte sur $\frac b{\sin b}$ (de même ordre que son argument). En $\frac{5\pi}2$ : $\psi = 1-\frac{5\pi}2< 0$.` } },
  steps: [
    { q: 1, t: "Pas de solution réelle", h: R`<p>$e^x>x$ pour tout réel.</p>`, b: R`<p>$e^x\geqslant1+x>x$ : pas de point fixe réel.</p>` },
    { q: 2, t: "Le système", h: R`<p><span data-k="sys">Parties réelle et imaginaire</span>.</p>`, b: R`<p><span data-k="sys">$e^a\sin b = b\neq0$</span>, donc $\sin b\neq0$, $e^a = \frac b{\sin b}$, et $a = e^a\cos b = \frac{b\cos b}{\sin b}$. Réciproquement ces deux relations redonnent le système.</p>` },
    { q: 3, t: "Valeurs intermédiaires", h: R`<p><span data-k="lim">Limites aux bornes</span>, continuité, TVI.</p>`, b: R`<p>$\psi$ est continue sur $]2\pi,\frac{5\pi}2]$ ($\sin b>0$). En posant $X = \frac{b\cos b}{\sin b}\to+\infty$ : $\frac b{\sin b}\sim X$ et $e^X-X\to+\infty$. <span data-k="lim">$\psi(\frac{5\pi}2) = 1-\frac{5\pi}2< 0$</span>. Par le TVI, $\psi(b_0) = 0$, et $z_0 = \frac{b_0\cos b_0}{\sin b_0}+ib_0$ vérifie $e^{z_0} = z_0$.</p>`, rappels: ["k-tvi"] },
    { q: 4, t: "Une infinité", h: R`<p>Même raisonnement sur chaque $]2k\pi,2k\pi+\frac\pi2]$, et par conjugaison.</p>`, b: R`<p>Sur chaque $]2k\pi,2k\pi+\frac\pi2]$ ($k\geqslant1$), même étude : un point fixe. Et si $z$ est point fixe, $\bar z$ aussi. Donc l'exponentielle a une infinité de points fixes (aucun réel).</p>` }
  ],
  ctx: { "k-tvi": R`<p>$\psi$ change de signe sur $]2\pi,\frac{5\pi}2]$.</p>` },
  piege: R`Chercher une solution explicite : on ne peut que prouver l'existence.`,
  methode: R`Équation complexe sans solution explicite : réduire à une équation réelle et appliquer le TVI.`
},
{
  id: "kb-2-37", subj: "kholles", year: "mpsi", chap: 3, level: 4, time: "35 min",
  title: "Le module d'une somme de Gauss",
  enonce: R`<p>Soit $n$ impair, $\omega = e^{2i\pi/n}$ et $G = \displaystyle\sum_{k=0}^{n-1}\omega^{k^2}$.</p><ol><li>Calculer $\sum_{k=0}^{n-1}\omega^{rk}$ selon $r\in\mathbb Z$.</li><li>Montrer que $k\mapsto\omega^{k^2}$ est $n$-périodique sur $\mathbb Z$.</li><li>Montrer que $\sum_{k=0}^{n-1}\omega^{(k+j)^2} = G$ pour tout $j\in\mathbb Z$.</li><li>Montrer que $G\bar G = n$, et en déduire $|G|$. Vérifier pour $n = 3$.</li></ol>`,
  decode: { donnees: [R`$\bar\omega = \omega^{-1}$, $n$ impair.`], but: R`Calculer le module d'une somme d'apparence chaotique.`, cles: {
    per: R`$(k+n)^2 = k^2+2kn+n^2$ et $\omega^n = 1$.`,
    reindex: R`$G\bar G = \sum_{k,l}\omega^{k^2-l^2}$ ; avec $k = l+j$ (modulo $n$, permis par la périodicité) : $\sum_j\omega^{j^2}\sum_l\omega^{2lj}$.`,
    impair: R`$n$ impair : $n\mid2j\iff n\mid j$.` } },
  steps: [
    { q: 1, t: "Somme géométrique", h: R`<p>Raison $\omega^r$, égale à $1$ ssi $n\mid r$.</p>`, b: R`<p>$n$ si $n\mid r$, sinon $\frac{1-\omega^{rn}}{1-\omega^r} = 0$.</p>`, rappels: ["k-somme-geo-racines"] },
    { q: 2, t: "Périodicité", h: R`<p><span data-k="per">Développer $(k+n)^2$</span>.</p>`, b: R`<p><span data-k="per">$\omega^{(k+n)^2} = \omega^{k^2}\omega^{2kn}\omega^{n^2} = \omega^{k^2}$</span>.</p>` },
    { q: 3, t: "Invariance par décalage", h: R`<p>Une somme sur une période complète d'une suite périodique ne dépend pas du point de départ.</p>`, b: R`<p>$\sum_{k=0}^{n-1}\omega^{(k+j)^2} = \sum_{m=j}^{j+n-1}\omega^{m^2}$, somme sur $n$ entiers consécutifs d'une suite $n$-périodique : elle vaut $G$.</p>` },
    { q: 4, t: "G Ḡ = n", h: R`<p><span data-k="reindex">Réindexer la somme double</span>, puis question 1 et <span data-k="impair">$n$ impair</span>.</p>`, b: R`<p><span data-k="reindex">$G\bar G = \sum_l\sum_j\omega^{(l+j)^2-l^2} = \sum_j\omega^{j^2}\sum_l\omega^{2lj}$</span>. La somme intérieure vaut $n$ si <span data-k="impair">$n\mid j$</span>, soit $j = 0$, et $0$ sinon :</p><div class="sbox">$$G\bar G = n,\qquad|G| = \sqrt n.$$</div><p>$n = 3$ : $G = 1+j+j^4 = 1+2j = i\sqrt3$.</p>` }
  ],
  ctx: { "k-somme-geo-racines": R`<p>Avec $r = 2j$.</p>` },
  piege: R`Réindexer sans la périodicité : $l+j$ sort de $\{0,\dots,n-1\}$.`,
  methode: R`Module d'une somme : calculer $G\bar G$ comme somme double et réindexer par la différence.`
},
{
  id: "kb-2-38", subj: "kholles", year: "mpsi", chap: 3, level: 3, time: "30 min",
  title: "Construire un pentagone régulier",
  enonce: R`<ol><li>Résoudre $z^5 = 1$ sous forme trigonométrique.</li><li>Avec $Z = z+\frac1z$, montrer : $z^5 = 1\iff z = 1$ ou $Z^2+Z-1 = 0$.</li><li>En déduire $\cos\frac{2\pi}5$, $\cos\frac{4\pi}5$ et la forme algébrique des solutions.</li><li>Soient $A(-\frac14,0)$ et $B(0,\frac12)$. Déterminer les intersections du cercle de centre $A$ passant par $B$ avec l'axe $(Ox)$. En déduire une construction du pentagone régulier inscrit dans le cercle unité à la règle et au compas.</li></ol>`,
  decode: { donnees: [R`$z^5-1 = (z-1)(z^4+z^3+z^2+z+1)$.`], but: R`Construire le pentagone avec des outils élémentaires.`, cles: {
    div: R`$\frac{z^4+z^3+z^2+z+1}{z^2} = z^2+\frac1{z^2}+z+\frac1z+1 = Z^2-2+Z+1$.`,
    rayon: R`$AB^2 = \frac1{16}+\frac14 = \frac5{16}$ : intersections $x = -\frac14\pm\frac{\sqrt5}4$.` } },
  steps: [
    { q: 1, t: "Racines cinquièmes", h: R`<p>Forme exponentielle.</p>`, b: R`<p>$z_k = e^{2ik\pi/5}$, $k = 0,\dots,4$.</p>`, rappels: ["o-b-racines"] },
    { q: 2, t: "Changement de variable", h: R`<p><span data-k="div">Diviser par $z^2$</span> (polynôme réciproque).</p>`, b: R`<p>$z\neq0$ : <span data-k="div">$z^4+z^3+z^2+z+1 = z^2(Z^2+Z-1)$</span>.</p>` },
    { q: 3, t: "Les cosinus", h: R`<p>Pour $z = e^{i\theta}$, $Z = 2\cos\theta$.</p>`, b: R`<p>$Z = \frac{-1\pm\sqrt5}2$ : $\cos\frac{2\pi}5 = \frac{\sqrt5-1}4$, $\cos\frac{4\pi}5 = -\frac{\sqrt5+1}4$. Avec $\sin\frac{2\pi}5 = \frac{\sqrt{10+2\sqrt5}}4$ et $\sin\frac{4\pi}5 = \frac{\sqrt{10-2\sqrt5}}4$ :</p><div class="sbox">$$z\in\Big\{1,\ \tfrac{\sqrt5-1}4\pm i\tfrac{\sqrt{10+2\sqrt5}}4,\ -\tfrac{\sqrt5+1}4\pm i\tfrac{\sqrt{10-2\sqrt5}}4\Big\}.$$</div>` },
    { q: 4, t: "La construction", h: R`<p><span data-k="rayon">Le cercle coupe l'axe exactement aux deux cosinus</span>.</p>`, b: R`<p><span data-k="rayon">$x = -\frac14\pm\frac{\sqrt5}4$</span> : ce sont $\cos\frac{2\pi}5$ et $\cos\frac{4\pi}5$. Construction : tracer $A$ (milieux successifs), $B$, le cercle de centre $A$ passant par $B$ ; aux deux points obtenus, mener les perpendiculaires à $(Ox)$ ; elles coupent le cercle unité en quatre sommets, le cinquième est $1$.</p>` + FIG(260, 260, (() => { const c = 130, r = 100, X = v => c + v * r, Y = v => c - v * r; let s = `<line class="ax" x1="10" y1="${c}" x2="250" y2="${c}"/><line class="ax" x1="${c}" y1="10" x2="${c}" y2="250"/><circle cx="${c}" cy="${c}" r="${r}" class="thin" style="fill:none"/>`; s += `<circle cx="${X(-0.25)}" cy="${c}" r="${f1(r * Math.sqrt(5) / 4)}" class="vb" style="fill:none;stroke-width:1.5"/>`; const pts = [0, 1, 2, 3, 4].map(k => [X(Math.cos(2 * k * Math.PI / 5)), Y(Math.sin(2 * k * Math.PI / 5))]); s += `<polygon points="${pts.map(p => p.map(f1).join(",")).join(" ")}" class="vr" style="fill:none;stroke-width:2"/>`; for (const x of [Math.cos(2 * Math.PI / 5), Math.cos(4 * Math.PI / 5)]) s += `<line class="thin" style="stroke-dasharray:4 3" x1="${f1(X(x))}" y1="20" x2="${f1(X(x))}" y2="240"/>`; return s + `<circle cx="${X(-0.25)}" cy="${c}" r="4" class="mass"/><circle cx="${c}" cy="${Y(0.5)}" r="4" class="mass"/>` + S(X(-0.25) - 4, c + 16, "A", "end") + S(c + 6, Y(0.5) - 4, "B"); })(), R`Le cercle de centre $A$ passant par $B$ (bleu) coupe l'axe aux abscisses $\cos\frac{2\pi}5$ et $\cos\frac{4\pi}5$ ; les perpendiculaires donnent les sommets du pentagone (rouge).`, "Construction du pentagone") }
  ],
  ctx: { "o-b-racines": R`<p>$n = 5$.</p>` },
  piege: R`Oublier la racine $z = 1$ en divisant par $z-1$.`,
  methode: R`Polynôme réciproque : diviser par $z^{d/2}$ et poser $Z = z+\frac1z$.`
},
{
  id: "kb-2-40", subj: "kholles", year: "mpsi", chap: 3, level: 4, time: "35 min",
  title: "La somme des tan²(kπ/7)",
  enonce: R`<ol><li>Pour $\alpha$ avec $\cos\alpha\neq0$ et $\cos7\alpha\neq0$, exprimer $\tan7\alpha$ comme quotient de deux polynômes en $t = \tan\alpha$, de degrés $\leqslant7$.</li><li>Résoudre $\tan7\alpha = 0$.</li><li>Former une équation de degré $3$ dont les racines sont $\tan^2\frac\pi7$, $\tan^2\frac{2\pi}7$, $\tan^2\frac{3\pi}7$. En déduire leur somme.</li></ol>`,
  decode: { donnees: [R`$(1+it)^7 = \frac{e^{7i\alpha}}{\cos^7\alpha}$.`], but: R`Calculer $\tan^2\frac\pi7+\tan^2\frac{2\pi}7+\tan^2\frac{3\pi}7$.`, cles: {
    moivre: R`$\tan7\alpha = \frac{\operatorname{Im}(1+it)^7}{\operatorname{Re}(1+it)^7}$.`,
    racines: R`Les $t_k = \tan\frac{k\pi}7$ ($0\leqslant k\leqslant6$) sont $7$ réels distincts racines du numérateur de degré $7$ : ce sont toutes ses racines.`,
    pair: R`$\tan\frac{(7-k)\pi}7 = -\tan\frac{k\pi}7$ : les carrés vont par paires.` } },
  steps: [
    { q: 1, t: "La fraction rationnelle", h: R`<p><span data-k="moivre">Moivre et binôme</span>.</p>`, b: R`<p><span data-k="moivre">$(1+it)^7$</span> : partie réelle $1-21t^2+35t^4-7t^6$, imaginaire $7t-35t^3+21t^5-t^7$.</p><div class="sbox">$$\tan7\alpha = \frac{7t-35t^3+21t^5-t^7}{1-21t^2+35t^4-7t^6}.$$</div>`, rappels: ["k-moivre", "o-binome"] },
    { q: 2, t: "Les zéros", h: R`<p>$\sin7\alpha = 0$.</p>`, b: R`<p>$\tan7\alpha = 0\iff\alpha\in\frac\pi7\mathbb Z$.</p>` },
    { q: 3, t: "Une équation en u = t²", h: R`<p><span data-k="racines">Le numérateur a exactement les $t_k$ pour racines</span> ; on enlève $t = 0$ et <span data-k="pair">on regroupe par paires</span>.</p>`, b: R`<p>$7t-35t^3+21t^5-t^7 = -t(t^6-21t^4+35t^2-7)$. <span data-k="racines">Les racines non nulles sont $\tan\frac{k\pi}7$</span>, $k = 1,\dots,6$, et <span data-k="pair">leurs carrés sont les trois nombres demandés</span>. Donc ils sont racines de</p><div class="sbox">$$u^3-21u^2+35u-7 = 0,\qquad\tan^2\tfrac\pi7+\tan^2\tfrac{2\pi}7+\tan^2\tfrac{3\pi}7 = 21.$$</div><p>Vérification numérique : $0{,}2319+1{,}5874+19{,}1806\approx21$.</p>`, rappels: ["k-relations-coef"] }
  ],
  ctx: { "k-moivre": R`<p>$n = 7$.</p>`, "o-binome": R`<p>Développement de $(1+it)^7$.</p>`, "k-relations-coef": R`<p>Somme des racines du polynôme en $u$.</p>` },
  piege: R`Oublier de justifier qu'on a toutes les racines : $7$ racines distinctes pour un polynôme de degré $7$.`,
  methode: R`Sommes de $\tan^2\frac{k\pi}n$ : écrire $\tan(n\alpha)$ en fonction de $\tan\alpha$ et utiliser les relations coefficients-racines.`
}
]);
})();

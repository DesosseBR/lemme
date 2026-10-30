/* Formation commando X-ENS : exercices de niveau X-ENS, corrigés sans sauter d'étape.
   Matière cachée (hidden) : elle n'apparaît pas dans les listes de matières, seulement dans la section « Préparer les concours ».
   Les sous-chapitres sont dans years.mp ; le résumé PDF d'un sous-chapitre se rédige dans tex/resumes/xens-mp-<nn>.tex. */

LEMME.subject({
  id: "xens", name: "Commando X-ENS", short: "X-ENS", sym: "⚔", hidden: true,
  intro: "Exercices de niveau X-ENS, corrigés sans sauter une seule étape.",
  part: "Topologie des espaces métriques et vectoriels normés",
  years: {
    mpsi: [],
    mp: [
      C("Généralités", "Normes, distances, boules, ouverts, fermés, voisinages, adhérence, intérieur, frontière, points isolés, topologie induite, continuité, homéomorphismes, continuité uniforme, produits, limites"),
      C("Suites dans un espace métrique", "Suites convergentes, valeurs d'adhérence, caractérisation séquentielle, suites de Cauchy, espaces complets"),
      C("Espaces compacts", "Bolzano-Weierstrass, parties compactes, image continue d'un compact, théorème de Heine"),
      C("Espaces connexes", "Connexité, connexité par arcs, image continue d'un connexe"),
      C("Espaces vectoriels normés", "Applications linéaires continues, normes équivalentes en dimension finie, compacité en dimension finie")
    ]
  }
});

LEMME.rappels({
  "t-norme": { t: "Norme", b: R`Une norme sur un $\mathbb K$-espace vectoriel $E$ est une application $x\mapsto\|x\|$ à valeurs dans $\mathbb R_+$ telle que : $\|x\| = 0\iff x = 0$ ; $\|\lambda x\| = |\lambda|\,\|x\|$ ; $\|x+y\|\leqslant\|x\|+\|y\|$. Elle définit la distance $d(x,y) = \|x-y\|$.` },
  "t-distance": { t: "Distance", b: R`Une distance sur $E$ vérifie : $d(x,y) = 0\iff x = y$ ; $d(x,y) = d(y,x)$ ; $d(x,z)\leqslant d(x,y)+d(y,z)$ (inégalité triangulaire).` },
  "t-tri-inverse": { t: "Inégalité triangulaire renversée", b: R`Pour tous $x,y,z$ : $|d(x,z)-d(y,z)|\leqslant d(x,y)$. En particulier $d(a,y)\geqslant d(a,x)-d(x,y)$.` },
  "t-distance-discrete": { t: "Distance discrète", b: R`Sur un ensemble $E$ quelconque, $d(x,y) = 0$ si $x = y$ et $d(x,y) = 1$ sinon définit une distance. Pour elle, $B(x,1) = \{x\}$ et $B_f(x,1) = E$.` },
  "t-boules": { t: "Boules", b: R`$B(a,r) = \{x\in E : d(a,x)< r\}$ est la boule ouverte, $B_f(a,r) = \{x\in E : d(a,x)\leqslant r\}$ la boule fermée.` },
  "t-ouvert": { t: "Ouvert et fermé", b: R`$\Omega$ est ouvert si pour tout $x\in\Omega$, il existe $\rho>0$ avec $B(x,\rho)\subset\Omega$. $F$ est fermé si son complémentaire $E\setminus F$ est ouvert.` },
  "t-adherence": { t: "Adhérence", b: R`$\overline A$ est le plus petit fermé contenant $A$ : si $F$ est fermé et $A\subset F$, alors $\overline A\subset F$. On a les équivalences $$x\in\overline A\iff\forall\varepsilon>0,\ B(x,\varepsilon)\cap A\neq\varnothing\iff d(x,A) = 0.$$ Si $F$ est fermé, $\overline F = F$.` },
  "t-voisinage": { t: "Voisinage", b: R`$V$ est un voisinage de $x$ s'il contient un ouvert contenant $x$, par exemple une boule $B(x,\rho)$. Un ouvert qui contient $x$ est un voisinage de $x$. L'intérieur $\mathring V$ d'un voisinage de $x$ est un ouvert qui contient $x$.` },
  "t-inf": { t: "Borne inférieure", b: R`$\inf X$ est le plus grand minorant de $X$. Donc $\inf X\leqslant y$ pour tout $y\in X$, et si $m\leqslant y$ pour tout $y\in X$, alors $m\leqslant\inf X$.` },
  "t-dist-partie": { t: "Distance à une partie", b: R`Pour $A$ non vide : $d(x,A) = \inf_{y\in A}d(x,y)$. On a $d(x,A) = 0\iff x\in\overline A$. Si $F$ est fermé : $d(x,F) = 0\iff x\in F$.` },
  "t-lipschitz": { t: "Lipschitzienne, uniformément continue, continue", b: R`$f$ est $k$-lipschitzienne si $d'(f(x),f(y))\leqslant k\,d(x,y)$. Alors elle est uniformément continue : $\forall\varepsilon>0,\ \exists\alpha>0,\ \forall x,y,\ d(x,y)<\alpha\implies d'(f(x),f(y))<\varepsilon$ (prendre $\alpha = \varepsilon/k$). Uniformément continue entraîne continue.` },
  "t-uc": { t: "Continuité uniforme", b: R`$f$ est uniformément continue si $\forall\varepsilon>0,\ \exists\alpha>0,\ \forall x,y,\ d(x,y)<\alpha\implies d'(f(x),f(y))<\varepsilon$. Le $\alpha$ est le même pour tous les points : c'est toute la différence avec la continuité.` },
  "t-continuite-ouverts": { t: "Continuité et ouverts", b: R`$f : E\to E'$ est continue si et seulement si l'image réciproque de tout ouvert de $E'$ est un ouvert de $E$, ou encore si et seulement si l'image réciproque de tout fermé est un fermé.` },
  "t-operations": { t: "Opérations sur les fonctions continues", b: R`Si $f,g : E\to\mathbb R$ sont continues, alors $f+g$, $fg$ et $f/g$ (là où $g$ ne s'annule pas) sont continues.` },
  "t-topo-induite": { t: "Topologie induite", b: R`Pour $V\subset E$ muni de la distance restreinte : les ouverts de $V$ sont les $\Omega\cap V$ et les fermés de $V$ sont les $G\cap V$, avec $\Omega$ ouvert et $G$ fermé de $E$.` },
  "t-isole": { t: "Point isolé", b: R`$a\in A$ est isolé dans $A$ s'il existe $r>0$ tel que $B(a,r)\cap A = \{a\}$. Dans $\mathbb R$ : $]a-r,a+r[\,\cap A = \{a\}$.` },
  "t-densite-q": { t: "Densité de ℚ", b: R`Tout intervalle ouvert non vide $]u,v[$ de $\mathbb R$ contient au moins un rationnel.` },
  "t-denombrable": { t: "Ensembles dénombrables", b: R`$\mathbb Q$ est dénombrable. S'il existe une injection de $A$ dans un ensemble au plus dénombrable, alors $A$ est au plus dénombrable (fini ou dénombrable).` },
  "t-adh-ouvert": { t: "Ouvert et adhérence", b: R`Si $\Omega$ est ouvert et $B\subset E$ : $\Omega\cap\overline B\subset\overline{\Omega\cap B}$.` }
});

LEMME.exercises([
{
  id: "x-boule-adh", subj: "xens", year: "mp", chap: 0, level: 5, time: "15 min",
  title: "L'adhérence d'une boule ouverte est dans la boule fermée",
  enonce: R`<p>Soit $(E,d)$ un espace métrique, $a\in E$ et $r>0$. Montrer que</p>$$\overline{B(a,r)}\subset B_f(a,r).$$`,
  decode: {
    donnees: [R`$B(a,r) = \{x : d(a,x)< r\}$, la boule ouverte.`, R`$B_f(a,r) = \{x : d(a,x)\leqslant r\}$, la boule fermée.`],
    but: R`Montrer que tout point adhérent à la boule ouverte est dans la boule fermée.`,
    cles: {
      adh: R`$\overline A$ est le plus petit fermé qui contient $A$. Pour montrer $\overline A\subset F$, il suffit que $F$ soit fermé et contienne $A$.`,
      compl: R`Le complémentaire de $B_f(a,r)$ est l'ensemble des $x$ tels que $d(a,x)>r$.`,
      marge: R`$\rho$ est la « marge » entre $x$ et la boule : $x$ est à distance $d(a,x)$ du centre, soit $\rho$ de plus que le rayon.`
    }
  },
  steps: [
    { t: "La stratégie", b: R`<p>On ne calcule pas l'<span data-k="adh">adhérence</span> directement. On utilise sa propriété clé : c'est le plus petit fermé contenant la boule. Il suffit donc de montrer deux choses :</p><ol><li>$B(a,r)\subset B_f(a,r)$ ;</li><li>$B_f(a,r)$ est un fermé.</li></ol>`, rappels: ["t-adherence"] },
    { t: "La première inclusion", b: R`<p>Si $x\in B(a,r)$, alors $d(a,x)< r$, donc a fortiori $d(a,x)\leqslant r$ : $x\in B_f(a,r)$.</p>` },
    { t: "Ce qu'il faut prouver pour « fermé »", b: R`<p>Par définition, $B_f(a,r)$ est fermée si son <span data-k="compl">complémentaire</span> $U = \{x\in E : d(a,x)>r\}$ est ouvert. On doit donc trouver, autour de chaque point de $U$, une boule entièrement contenue dans $U$.</p>`, rappels: ["t-ouvert"] },
    { t: "Choisir le rayon", b: R`<p>Soit $x\in U$. On pose $\rho = d(a,x)-r$, qui est $>0$ car $x\in U$. C'est la <span data-k="marge">marge</span> dont on dispose.</p>` },
    { t: "La boule reste dans U", b: R`<p>Soit $y\in B(x,\rho)$, donc $d(x,y)<\rho$. Par l'inégalité triangulaire renversée :</p>$$d(a,y)\geqslant d(a,x)-d(x,y)>d(a,x)-\rho = r.$$<p>Donc $y\in U$. Ainsi $B(x,\rho)\subset U$ : $U$ est ouvert, et $B_f(a,r)$ est fermée.</p>`, rappels: ["t-tri-inverse"] },
    { t: "Conclusion", b: R`<p>$B_f(a,r)$ est un fermé qui contient $B(a,r)$. Comme $\overline{B(a,r)}$ est le plus petit fermé contenant $B(a,r)$ :</p>$$\overline{B(a,r)}\subset B_f(a,r).$$`, rappels: ["t-adherence"] }
  ],
  piege: R`Croire que l'égalité $\overline{B(a,r)} = B_f(a,r)$ est toujours vraie : elle est fausse dans certains espaces métriques (voir l'exercice suivant).`,
  methode: R`Pour montrer $\overline A\subset F$ : montrer que $A\subset F$ et que $F$ est fermé. C'est souvent bien plus simple que de décrire $\overline A$.`
},
{
  id: "x-boule-contre-ex", subj: "xens", year: "mp", chap: 0, level: 5, time: "15 min",
  title: "Adhérence et boule fermée peuvent être différentes",
  enonce: R`<p>Montrer qu'on n'a pas toujours $\overline{B(a,r)} = B_f(a,r)$ : construire un espace métrique $(E,d)$, un point $a$ et un rayon $r>0$ pour lesquels l'inclusion est stricte.</p>`,
  decode: {
    donnees: [R`On sait déjà que $\overline{B(a,r)}\subset B_f(a,r)$.`],
    but: R`Trouver un exemple où $B_f(a,r)$ contient un point qui n'est pas adhérent à $B(a,r)$.`,
    cles: {
      discrete: R`La distance qui vaut $0$ entre un point et lui-même, et $1$ entre deux points différents. Avec elle, tous les points sont « à la même distance » les uns des autres.`,
      tout: R`Avec la distance discrète, $B(x,\tfrac12) = \{x\}$ : chaque singleton est une boule ouverte, donc toute partie est une réunion de boules, donc ouverte.`
    }
  },
  steps: [
    { t: "L'idée", b: R`<p>Dans $\mathbb R$, la boule fermée est bien l'adhérence de la boule ouverte : il faut un espace plus « étrange ». On utilise la <span data-k="discrete">distance discrète</span> sur un ensemble $E$ qui a au moins deux éléments.</p>`, rappels: ["t-distance-discrete"] },
    { t: "C'est bien une distance", b: R`<p>On pose $d(x,y) = 0$ si $x = y$, et $1$ sinon. La séparation et la symétrie sont immédiates. Pour l'inégalité triangulaire $d(x,z)\leqslant d(x,y)+d(y,z)$ :</p><ul><li>si $x = z$, le membre de gauche est nul ;</li><li>si $x\neq z$, alors $y$ est différent de $x$ ou de $z$, donc le membre de droite vaut au moins $1$.</li></ul>`, rappels: ["t-distance"] },
    { t: "La boule ouverte", b: R`<p>Prenons $r = 1$. $d(a,x)<1$ signifie $d(a,x) = 0$, c'est-à-dire $x = a$. Donc $B(a,1) = \{a\}$.</p>` },
    { t: "Son adhérence", b: R`<p>Pour cette distance, <span data-k="tout">toute partie est ouverte</span>, donc toute partie est aussi fermée (son complémentaire est ouvert). En particulier $\{a\}$ est fermé et $\overline{B(a,1)} = \{a\}$.</p>`, rappels: ["t-adherence", "t-ouvert"] },
    { t: "La boule fermée", b: R`<p>$d(a,x)\leqslant1$ est vrai pour tout $x$ : $B_f(a,1) = E$.</p>` },
    { t: "Conclusion", b: R`<p>Comme $E$ a au moins deux éléments, $\{a\}\neq E$ :</p>$$\overline{B(a,1)} = \{a\}\subsetneq E = B_f(a,1).$$` }
  ],
  piege: R`Chercher un contre-exemple dans $\mathbb R$ ou dans un espace vectoriel normé : il n'y en a pas, l'égalité y est vraie (exercice suivant).`,
  methode: R`Pour un contre-exemple en topologie, pense d'abord à la distance discrète : elle rend toutes les parties ouvertes et fermées.`
},
{
  id: "x-boule-evn", subj: "xens", year: "mp", chap: 0, level: 5, time: "20 min",
  title: "Dans un espace normé, la boule fermée est l'adhérence de la boule ouverte",
  enonce: R`<p>Soit $E$ un $\mathbb R$-espace vectoriel normé. Montrer que</p>$$\overline{B(0,1)} = B_f(0,1).$$`,
  decode: {
    donnees: [R`$E$ est un espace vectoriel normé : on peut multiplier un vecteur par un réel.`, R`On sait déjà que $\overline{B(0,1)}\subset B_f(0,1)$.`],
    but: R`Montrer l'inclusion réciproque : tout $x$ avec $\|x\|\leqslant1$ est adhérent à $B(0,1)$.`,
    cles: {
      critere: R`$x\in\overline A$ si et seulement si, pour tout $\varepsilon>0$, il existe un point de $A$ à distance $<\varepsilon$ de $x$.`,
      ray: R`On recule un tout petit peu de $x$ vers le centre $0$ : le point $(1-t)x$ est sur le segment $[0,x]$, juste à l'intérieur de la boule.`
    }
  },
  steps: [
    { t: "Ce qu'il reste à montrer", b: R`<p>L'inclusion $\overline{B(0,1)}\subset B_f(0,1)$ a été démontrée dans le premier exercice. Il reste $B_f(0,1)\subset\overline{B(0,1)}$.</p>` },
    { t: "L'outil", b: R`<p>On utilise le <span data-k="critere">critère d'adhérence</span> : soit $x$ avec $\|x\|\leqslant1$ et $\varepsilon>0$, on cherche $y\in B(0,1)$ tel que $\|x-y\|<\varepsilon$.</p>`, rappels: ["t-adherence"] },
    { t: "Le cas facile", b: R`<p>Si $\|x\|<1$, alors $x\in B(0,1)$ et $y = x$ convient.</p>` },
    { t: "Le cas du bord", b: R`<p>Supposons $\|x\| = 1$. On <span data-k="ray">recule vers le centre</span> : on pose $t = \min\left(1,\tfrac\varepsilon2\right)\in\,]0,1]$ et $y = (1-t)x$.</p>` },
    { t: "y est dans la boule ouverte", b: R`<p>Par homogénéité de la norme, et comme $1-t\geqslant0$ :</p>$$\|y\| = (1-t)\|x\| = 1-t<1.$$`, rappels: ["t-norme"] },
    { t: "y est proche de x", b: R`$$\|x-y\| = \|tx\| = t\,\|x\| = t\leqslant\frac\varepsilon2<\varepsilon.$$<p>Donc $x\in\overline{B(0,1)}$.</p>`, rappels: ["t-norme"] },
    { t: "Conclusion", b: R`<p>Tout point de $B_f(0,1)$ est adhérent à $B(0,1)$. Avec l'autre inclusion :</p>$$\overline{B(0,1)} = B_f(0,1).$$` }
  ],
  piege: R`Oublier que ce résultat utilise la structure vectorielle (le point $(1-t)x$) : il est faux dans un espace métrique quelconque.`,
  methode: R`Pour montrer qu'un point du bord est adhérent, approche-le par des points intérieurs construits explicitement, ici sur le segment vers le centre.`
},
{
  id: "x-isoles-denombrable", subj: "xens", year: "mp", chap: 0, level: 5, time: "25 min",
  title: "Une partie de ℝ formée de points isolés est au plus dénombrable",
  enonce: R`<p>Soit $A\subset\mathbb R$ telle que tout point de $A$ soit <span data-k="isole">isolé</span> dans $A$. Montrer que $A$ est <span data-k="denomb">au plus dénombrable</span>.</p>`,
  decode: {
    donnees: [R`Chaque $a\in A$ possède un intervalle $]a-r_a,a+r_a[$ qui ne contient aucun autre point de $A$.`],
    but: R`Montrer que $A$ est fini ou dénombrable.`,
    cles: {
      isole: R`$a$ est isolé dans $A$ s'il existe $r>0$ tel que $]a-r,a+r[\,\cap A = \{a\}$ : aucun autre point de $A$ n'est près de $a$.`,
      denomb: R`Fini ou en bijection avec $\mathbb N$. Il suffit de trouver une injection de $A$ dans $\mathbb Q$.`,
      demi: R`On prend un rationnel dans l'intervalle de rayon moitié, pas dans l'intervalle entier : c'est ce qui rendra l'application injective.`
    }
  },
  steps: [
    { t: "La stratégie", b: R`<p>$\mathbb Q$ est dénombrable. Si l'on construit une application <b>injective</b> $\varphi : A\to\mathbb Q$, alors $A$ est au plus dénombrable.</p>`, rappels: ["t-denombrable"] },
    { t: "Le rayon d'isolement", b: R`<p>Pour chaque $a\in A$, on choisit $r_a>0$ tel que</p>$$]a-r_a,a+r_a[\,\cap A = \{a\}.\qquad(*)$$`, rappels: ["t-isole"] },
    { t: "Associer un rationnel", b: R`<p>L'intervalle $\left]a-\tfrac{r_a}2,a+\tfrac{r_a}2\right[$ est ouvert et non vide : il contient un rationnel, que l'on note $q_a$. On pose $\varphi(a) = q_a$. On prend <span data-k="demi">le rayon moitié</span> exprès.</p>`, rappels: ["t-densite-q"] },
    { t: "Injectivité : l'hypothèse", b: R`<p>Soit $a,b\in A$ avec $q_a = q_b = q$. Par construction, $|a-q|<\tfrac{r_a}2$ et $|b-q|<\tfrac{r_b}2$. Par l'inégalité triangulaire :</p>$$|a-b|\leqslant|a-q|+|q-b|<\frac{r_a+r_b}2\leqslant\max(r_a,r_b).$$` },
    { t: "Injectivité : la conclusion", b: R`<p>Supposons par exemple $r_a\geqslant r_b$. Alors $|a-b|< r_a$, donc $b\in\,]a-r_a,a+r_a[\,\cap A$. D'après $(*)$, cela force $b = a$. Le cas $r_b\geqslant r_a$ est symétrique.</p>` },
    { t: "Conclusion", b: R`<p>$\varphi : A\to\mathbb Q$ est injective et $\mathbb Q$ est dénombrable : $A$ est au plus dénombrable.</p>`, rappels: ["t-denombrable"] }
  ],
  piege: R`Choisir $q_a$ dans l'intervalle de rayon $r_a$ entier : deux points proches pourraient alors recevoir le même rationnel, et l'argument d'injectivité ne marche plus.`,
  methode: R`Pour montrer qu'une partie de $\mathbb R$ est dénombrable, injecte-la dans $\mathbb Q$ en associant à chaque point un rationnel bien choisi.`
},
{
  id: "x-uc-affine", subj: "xens", year: "mp", chap: 0, level: 5, time: "25 min",
  title: "Une fonction uniformément continue est sous-affine",
  enonce: R`<p>Soit $f : \mathbb R_+\to\mathbb R$ <span data-k="uc">uniformément continue</span>. Montrer qu'il existe $\alpha,\beta>0$ tels que</p>$$\forall x\in\mathbb R_+,\quad|f(x)|\leqslant\alpha x+\beta.$$`,
  decode: {
    donnees: [R`$f$ est uniformément continue sur $[0,+\infty[$.`],
    but: R`Majorer $|f(x)|$ par une fonction affine de $x$, avec des constantes qui ne dépendent pas de $x$.`,
    cles: {
      uc: R`Il existe un pas $\eta$, le même partout, tel que deux points à distance au plus $\eta$ aient des images proches.`,
      pas: R`On avance de $0$ à $x$ par sauts de longueur $\eta$, comme sur une échelle : à chaque saut, $f$ varie d'au plus $1$.`,
      n: R`$n$ est le nombre de sauts complets de longueur $\eta$ que l'on peut faire avant de dépasser $x$.`
    }
  },
  steps: [
    { t: "L'idée", b: R`<p>La continuité uniforme fournit un <span data-k="pas">pas fixe</span> $\eta$ sur lequel $f$ bouge peu. Pour aller de $0$ à $x$, il faut environ $\frac x\eta$ pas : $f$ varie donc au plus d'environ $\frac x\eta$. D'où une borne affine.</p>` },
    { t: "Le pas η", b: R`<p>On applique la définition avec $\varepsilon = 1$ : il existe $\eta_0>0$ tel que $|x-y|<\eta_0\implies|f(x)-f(y)|<1$. On pose $\eta = \frac{\eta_0}2$. Alors</p>$$\forall x,y\geqslant0,\quad|x-y|\leqslant\eta\implies|f(x)-f(y)|\leqslant1.\qquad(*)$$`, rappels: ["t-uc"] },
    { t: "Découper [0, x]", b: R`<p>Soit $x\geqslant0$. On pose <span data-k="n">$n = \left\lfloor\frac x\eta\right\rfloor$</span>, de sorte que $n\eta\leqslant x<(n+1)\eta$. On écrit $f(x)-f(0)$ comme une somme télescopique :</p>$$f(x)-f(0) = \big(f(x)-f(n\eta)\big)+\sum_{k=0}^{n-1}\big(f((k+1)\eta)-f(k\eta)\big).$$`, rappels: ["partie-entiere", "telescopage"] },
    { t: "Majorer chaque morceau", b: R`<p>Deux points consécutifs $k\eta$ et $(k+1)\eta$ sont à distance $\eta$, et $0\leqslant x-n\eta<\eta$. D'après $(*)$, chacun des $n+1$ morceaux vaut au plus $1$ en valeur absolue :</p>$$|f(x)-f(0)|\leqslant1+n.$$`, rappels: ["inegalite-triangulaire"] },
    { t: "Faire apparaître x", b: R`<p>Comme $n\leqslant\frac x\eta$ :</p>$$|f(x)|\leqslant|f(0)|+|f(x)-f(0)|\leqslant|f(0)|+1+\frac x\eta.$$` },
    { t: "Conclusion", b: R`<p>Avec $\alpha = \frac1\eta>0$ et $\beta = |f(0)|+1>0$, qui ne dépendent pas de $x$ :</p>$$\forall x\geqslant0,\quad|f(x)|\leqslant\alpha x+\beta.$$` }
  ],
  piege: R`Utiliser seulement la continuité : le pas $\eta$ dépendrait alors du point, et on ne pourrait pas compter les sauts. D'ailleurs $x\mapsto x^2$ est continue mais pas sous-affine.`,
  methode: R`La continuité uniforme donne un pas universel : pour contrôler $f$ loin, on avance pas à pas et on télescope.`,
  viz: { type: "plot", title: "√x, uniformément continue, reste sous une droite ; x² finit par dépasser toute droite", x: [0, 12], y: [0, 14], xlabel: "x", curves: [{ label: "√x", f: x => Math.sqrt(x) }, { label: "x + 1", f: x => x + 1 }, { label: "x², pas uniformément continue", f: x => x * x }] }
},
{
  id: "x-dist-lipschitz", subj: "xens", year: "mp", chap: 0, level: 5, time: "20 min",
  title: "La distance à une partie est 1-lipschitzienne",
  enonce: R`<p>Soit $(E,d)$ un espace métrique et $A$ une partie non vide de $E$. On rappelle que $d(x,A) = \displaystyle\inf_{y\in A}d(x,y)$. Montrer que $x\mapsto d(x,A)$ est <span data-k="lip">$1$-lipschitzienne</span>, donc continue sur $E$.</p>`,
  decode: {
    donnees: [R`$A$ est non vide : la borne inférieure existe et est un réel positif.`],
    but: R`Montrer $|d(x_1,A)-d(x_2,A)|\leqslant d(x_1,x_2)$ pour tous $x_1,x_2$.`,
    cles: {
      lip: R`$|d(x_1,A)-d(x_2,A)|\leqslant1\times d(x_1,x_2)$ : la fonction ne varie pas plus vite que la distance entre les points.`,
      minorant: R`$\inf X$ est le plus grand minorant de $X$ : si un nombre minore tous les éléments de $X$, il est plus petit que $\inf X$.`
    }
  },
  steps: [
    { t: "Ce qu'on veut", b: R`<p>Soit $x_1,x_2\in E$. On veut $|d(x_1,A)-d(x_2,A)|\leqslant d(x_1,x_2)$. On montre séparément les deux inégalités sans valeur absolue.</p>` },
    { t: "Pour un point y de A", b: R`<p>Soit $y\in A$. La borne inférieure minore $d(x_1,y)$, et l'inégalité triangulaire donne :</p>$$d(x_1,A)\leqslant d(x_1,y)\leqslant d(x_1,x_2)+d(x_2,y).$$`, rappels: ["t-inf", "t-distance"] },
    { t: "Passer à l'inf", b: R`<p>Ainsi $d(x_1,A)-d(x_1,x_2)\leqslant d(x_2,y)$ pour <b>tout</b> $y\in A$ : ce nombre est un minorant de $\{d(x_2,y) : y\in A\}$. Il est donc <span data-k="minorant">plus petit que la borne inférieure</span> :</p>$$d(x_1,A)-d(x_1,x_2)\leqslant d(x_2,A).$$`, rappels: ["t-inf"] },
    { t: "Échanger les rôles", b: R`<p>On a montré $d(x_1,A)-d(x_2,A)\leqslant d(x_1,x_2)$. En échangeant $x_1$ et $x_2$ : $d(x_2,A)-d(x_1,A)\leqslant d(x_1,x_2)$. Les deux ensemble donnent</p>$$|d(x_1,A)-d(x_2,A)|\leqslant d(x_1,x_2).$$` },
    { t: "Conclusion", b: R`<p>$x\mapsto d(x,A)$ est $1$-lipschitzienne. Une fonction lipschitzienne est uniformément continue, donc continue.</p>`, rappels: ["t-lipschitz"] }
  ],
  piege: R`Écrire $d(x_1,A) = d(x_1,y)$ pour un certain $y\in A$ : la borne inférieure n'est pas forcément atteinte.`,
  methode: R`Pour majorer une borne inférieure, majore-la par un élément quelconque ; pour la minorer, montre que ton nombre est un minorant.`,
  viz: { type: "plot", title: "d(x, A) pour A = [−3, −1] ∪ [1, 2] : nulle sur A, pentes ±1 ailleurs", x: [-5, 5], y: [0, 3.2], xlabel: "x", curves: [{ label: "d(x, A)", f: x => Math.min(x < -3 ? -3 - x : (x > -1 ? x + 1 : 0), x < 1 ? 1 - x : (x > 2 ? x - 2 : 0)) }] }
},
{
  id: "x-urysohn", subj: "xens", year: "mp", chap: 0, level: 5, time: "25 min",
  title: "Une fonction continue qui vaut 0 sur A et 1 sur B",
  enonce: R`<p>Soit $A$ et $B$ deux fermés non vides et disjoints d'un espace métrique $E$. Montrer qu'il existe $f : E\to\mathbb R$ continue, avec $0\leqslant f\leqslant1$, telle que</p>$$A = f^{-1}(\{0\})\quad\text{et}\quad B = f^{-1}(\{1\}).$$<p>On pourra utiliser l'exercice précédent.</p>`,
  decode: {
    donnees: [R`$A$ et $B$ fermés, non vides, avec $A\cap B = \varnothing$.`],
    but: R`Construire une fonction continue entre $0$ et $1$ qui vaut $0$ exactement sur $A$ et $1$ exactement sur $B$.`,
    cles: {
      exact: R`$A = f^{-1}(\{0\})$ veut dire deux choses : $f$ vaut $0$ sur $A$, et $f$ ne vaut $0$ nulle part ailleurs.`,
      ferme: R`Pour un fermé $F$, $d(x,F) = 0$ équivaut à $x\in F$. C'est faux pour une partie non fermée : on aurait seulement $x\in\overline F$.`,
      ratio: R`$\frac{d(x,A)}{d(x,A)+d(x,B)}$ mesure « la part de distance à $A$ » : $0$ quand on est sur $A$, $1$ quand on est sur $B$.`
    }
  },
  steps: [
    { t: "L'outil clé", b: R`<p>Comme $A$ et $B$ sont fermés : <span data-k="ferme">$d(x,A) = 0\iff x\in A$</span> et $d(x,B) = 0\iff x\in B$.</p>`, rappels: ["t-dist-partie"] },
    { t: "Le candidat", b: R`<p>On pose, pour $x\in E$ :</p>$$f(x) = \frac{d(x,A)}{d(x,A)+d(x,B)}.$$<p>C'est un <span data-k="ratio">rapport de distances</span>.</p>` },
    { t: "f est bien définie", b: R`<p>Si le dénominateur était nul, on aurait $d(x,A) = d(x,B) = 0$ (deux nombres positifs de somme nulle), donc $x\in A\cap B$. C'est impossible car $A\cap B = \varnothing$.</p>` },
    { t: "0 ≤ f ≤ 1", b: R`<p>Le numérateur est positif et plus petit que le dénominateur, qui est strictement positif : $0\leqslant f(x)\leqslant1$.</p>` },
    { t: "Où f vaut 0 et 1", b: R`<ul><li>$f(x) = 0\iff d(x,A) = 0\iff x\in A$.</li><li>$f(x) = 1\iff d(x,A) = d(x,A)+d(x,B)\iff d(x,B) = 0\iff x\in B$.</li></ul><p>Donc $f^{-1}(\{0\}) = A$ et $f^{-1}(\{1\}) = B$, <span data-k="exact">exactement</span>.</p>`, rappels: ["t-dist-partie"] },
    { t: "Continuité", b: R`<p>$x\mapsto d(x,A)$ et $x\mapsto d(x,B)$ sont continues (exercice précédent). Le dénominateur est continu et ne s'annule pas : le quotient $f$ est continu.</p>`, rappels: ["t-lipschitz", "t-operations"] }
  ],
  piege: R`Oublier de vérifier que le dénominateur ne s'annule jamais : c'est là que servent les hypothèses « fermés » et « disjoints ».`,
  methode: R`Pour fabriquer une fonction continue adaptée à deux fermés, combine les distances à ces fermés.`,
  viz: { type: "plot", title: "f vaut 0 sur A = [−3, −1], 1 sur B = [1, 2], et passe continûment entre les deux", x: [-5, 5], y: [-0.1, 1.15], xlabel: "x", curves: [{ label: "f(x)", f: x => { const a = x < -3 ? -3 - x : (x > -1 ? x + 1 : 0), b = x < 1 ? 1 - x : (x > 2 ? x - 2 : 0); return a / (a + b); } }], hlines: [{ y: () => 0.5, label: "1/2" }] }
},
{
  id: "x-separation", subj: "xens", year: "mp", chap: 0, level: 5, time: "15 min",
  title: "Séparer deux fermés disjoints par deux ouverts",
  enonce: R`<p>Soit $A$ et $B$ deux fermés non vides et disjoints d'un espace métrique $E$. Montrer qu'il existe deux ouverts $U$ et $V$, <span data-k="disj">disjoints</span>, tels que $A\subset U$ et $B\subset V$.</p><p>On pourra utiliser la fonction $f$ de l'exercice précédent.</p>`,
  decode: {
    donnees: [R`Une fonction $f$ continue, $0\leqslant f\leqslant1$, avec $f = 0$ exactement sur $A$ et $f = 1$ exactement sur $B$.`],
    but: R`Entourer $A$ et $B$ par deux ouverts qui ne se touchent pas.`,
    cles: {
      disj: R`$U\cap V = \varnothing$ : aucun point n'est dans les deux à la fois.`,
      seuil: R`On coupe les valeurs de $f$ au milieu, en $\frac12$ : tout ce qui est « plus près de $A$ » d'un côté, le reste de l'autre.`
    }
  },
  steps: [
    { t: "L'idée", b: R`<p>$f$ vaut $0$ sur $A$ et $1$ sur $B$. On <span data-k="seuil">coupe au seuil $\frac12$</span> :</p>$$U = f^{-1}\left(\left]-\infty,\tfrac12\right[\right),\qquad V = f^{-1}\left(\left]\tfrac12,+\infty\right[\right).$$` },
    { t: "U et V sont ouverts", b: R`<p>$\left]-\infty,\frac12\right[$ et $\left]\frac12,+\infty\right[$ sont des ouverts de $\mathbb R$, et $f$ est continue : leurs images réciproques sont des ouverts de $E$.</p>`, rappels: ["t-continuite-ouverts"] },
    { t: "U et V sont disjoints", b: R`<p>Un point de $U\cap V$ vérifierait $f(x)<\frac12$ et $f(x)>\frac12$ : impossible. Donc $U\cap V = \varnothing$.</p>` },
    { t: "A ⊂ U et B ⊂ V", b: R`<p>Si $x\in A$, $f(x) = 0<\frac12$, donc $x\in U$. Si $x\in B$, $f(x) = 1>\frac12$, donc $x\in V$.</p>` }
  ],
  piege: R`Prendre $U = f^{-1}(\{0\})$ : c'est $A$ lui-même, qui est fermé et pas forcément ouvert.`,
  methode: R`Une fonction continue transforme des ouverts de $\mathbb R$ en ouverts de $E$ : c'est l'outil standard pour fabriquer des ouverts.`
},
{
  id: "x-ouvert-adh", subj: "xens", year: "mp", chap: 0, level: 5, time: "20 min",
  title: "Un ouvert, une adhérence : A ∩ adh(B) ⊂ adh(A ∩ B)",
  tt: R`Un ouvert et une adhérence : $A\cap\overline{B}\subset\overline{A\cap B}$`,
  enonce: R`<p>Soit $(E,d)$ un espace métrique, $A$ un <span data-k="ouv">ouvert</span> de $E$ et $B\subset E$. Montrer que</p>$$A\cap\overline B\subset\overline{A\cap B}.$$`,
  decode: {
    donnees: [R`$A$ est ouvert.`, R`$B$ est une partie quelconque.`],
    but: R`Montrer que tout point de $A$ adhérent à $B$ est adhérent à $A\cap B$.`,
    cles: {
      ouv: R`Autour de chacun de ses points, $A$ contient une petite boule.`,
      min: R`On prend le plus petit des deux rayons : la boule obtenue est à la fois dans $A$ et dans la boule de rayon $\varepsilon$.`
    }
  },
  steps: [
    { t: "Ce qu'il faut montrer", b: R`<p>Soit $x\in A\cap\overline B$. Par le critère d'adhérence, il suffit de montrer : pour tout $\varepsilon>0$, $B(x,\varepsilon)\cap(A\cap B)\neq\varnothing$.</p>`, rappels: ["t-adherence"] },
    { t: "Utiliser que A est ouvert", b: R`<p>Soit $\varepsilon>0$. Comme $x\in A$ et $A$ est ouvert, il existe $\rho>0$ tel que $B(x,\rho)\subset A$.</p>`, rappels: ["t-ouvert"] },
    { t: "Le bon rayon", b: R`<p>On pose <span data-k="min">$\delta = \min(\varepsilon,\rho)>0$</span>. Alors $B(x,\delta)\subset A$ et $B(x,\delta)\subset B(x,\varepsilon)$.</p>` },
    { t: "Utiliser que x est adhérent à B", b: R`<p>Comme $x\in\overline B$, la boule $B(x,\delta)$ rencontre $B$ : il existe $y\in B(x,\delta)\cap B$.</p>`, rappels: ["t-adherence"] },
    { t: "Conclusion", b: R`<p>Ce $y$ est dans $B$, dans $B(x,\delta)\subset A$, et dans $B(x,\varepsilon)$ : $y\in B(x,\varepsilon)\cap(A\cap B)$. Ceci pour tout $\varepsilon>0$, donc $x\in\overline{A\cap B}$.</p>` }
  ],
  piege: R`Oublier l'hypothèse « $A$ ouvert » : avec $A = \{0\}$ et $B = \,]0,1[$ dans $\mathbb R$, on a $A\cap\overline B = \{0\}$ mais $A\cap B = \varnothing$.`,
  methode: R`Quand deux conditions donnent chacune un rayon, prends le minimum des deux rayons.`
},
{
  id: "x-ouvert-adh-strict", subj: "xens", year: "mp", chap: 0, level: 5, time: "10 min",
  title: "L'inclusion A ∩ adh(B) ⊂ adh(A ∩ B) peut être stricte",
  tt: R`L'inclusion $A\cap\overline{B}\subset\overline{A\cap B}$ peut être stricte`,
  enonce: R`<p>Donner un exemple dans $\mathbb R$ d'un ouvert $A$ et d'une partie $B$ tels que $A\cap\overline B\neq\overline{A\cap B}$.</p>`,
  decode: {
    donnees: [R`On sait que $A\cap\overline B\subset\overline{A\cap B}$ quand $A$ est ouvert.`],
    but: R`Trouver un point de $\overline{A\cap B}$ qui n'est pas dans $A\cap\overline B$.`,
    cles: {
      bord: R`$\overline{A\cap B}$ peut contenir des points du bord de $A$. Mais $A\cap\overline B$ est inclus dans $A$, qui est ouvert et ne contient pas son bord.`
    }
  },
  steps: [
    { t: "L'idée", b: R`<p>Un point du <span data-k="bord">bord de $A$</span> peut être adhérent à $A\cap B$ sans être dans $A$. On choisit $A$ et $B$ qui se chevauchent jusqu'au bord de $A$.</p>` },
    { t: "L'exemple", b: R`<p>Prenons $A = \,]0,2[$, ouvert, et $B = [1,3]$, fermé donc $\overline B = B$.</p>` },
    { t: "Le membre de gauche", b: R`$$A\cap\overline B = \,]0,2[\,\cap\,[1,3] = [1,2[.$$` },
    { t: "Le membre de droite", b: R`<p>$A\cap B = [1,2[$, dont l'adhérence est $[1,2]$.</p>`, rappels: ["t-adherence"] },
    { t: "Conclusion", b: R`<p>$2\in\overline{A\cap B}$ mais $2\notin A\cap\overline B$, car $2\notin A$. L'inclusion est stricte : $[1,2[\,\subsetneq[1,2]$.</p>` }
  ],
  piege: R`Choisir $B$ inclus dans $A$ : alors $\overline{A\cap B} = \overline B$, et l'inclusion stricte demande que $\overline B$ sorte de $A$.`,
  methode: R`Pour un contre-exemple dans $\mathbb R$, des intervalles bien placés suffisent presque toujours.`
},
{
  id: "x-loc-ferme-cs", subj: "xens", year: "mp", chap: 0, level: 5, time: "15 min",
  title: "Localement fermé : la condition suffisante",
  enonce: R`<p>Une partie $A$ de $E$ est dite <span data-k="locf">localement fermée</span> si pour tout $x\in A$, il existe un voisinage $V$ de $x$ tel que $V\cap A$ soit un fermé de $V$.</p><p>Montrer que si $A = \Omega\cap F$ avec $\Omega$ ouvert et $F$ fermé de $E$, alors $A$ est localement fermé.</p>`,
  decode: {
    donnees: [R`$A = \Omega\cap F$, avec $\Omega$ ouvert et $F$ fermé de $E$.`],
    but: R`Pour chaque $x\in A$, trouver un voisinage $V$ dans lequel $A$ est fermé.`,
    cles: {
      locf: R`Vu de près, autour de chacun de ses points, $A$ ressemble à un fermé, même si globalement il ne l'est pas. Exemple : $]0,1]$ dans $\mathbb R$.`,
      induit: R`Un fermé de $V$ (pour la distance restreinte à $V$) est une partie de la forme $G\cap V$, avec $G$ fermé de $E$.`
    }
  },
  steps: [
    { t: "Ce que veut dire « fermé de V »", b: R`<p>On munit $V$ de la distance restreinte. <span data-k="induit">Les fermés de $V$</span> sont les parties $G\cap V$ avec $G$ fermé de $E$.</p>`, rappels: ["t-topo-induite"] },
    { t: "Choisir le voisinage", b: R`<p>Soit $x\in A$. Alors $x\in\Omega$, et $\Omega$ est un ouvert : c'est un voisinage de $x$. On prend $V = \Omega$.</p>`, rappels: ["t-voisinage"] },
    { t: "Calculer V ∩ A", b: R`$$V\cap A = \Omega\cap(\Omega\cap F) = \Omega\cap F = F\cap V.$$` },
    { t: "Conclusion", b: R`<p>$F$ est un fermé de $E$, donc $F\cap V$ est un fermé de $V$. Ceci vaut pour tout $x\in A$ : $A$ est localement fermé.</p>`, rappels: ["t-topo-induite"] }
  ],
  piege: R`Confondre « fermé de $V$ » et « fermé de $E$ » : $V\cap A$ n'a pas besoin d'être fermé dans $E$.`,
  methode: R`Dans une question de topologie induite, écris toujours explicitement l'ouvert ou le fermé de $E$ qui sert de témoin.`
},
{
  id: "x-loc-ferme-cn", subj: "xens", year: "mp", chap: 0, level: 5, time: "35 min",
  title: "Localement fermé : la condition nécessaire",
  enonce: R`<p>On reprend la définition : $A$ est localement fermé si tout $x\in A$ a un voisinage $V$ tel que $V\cap A$ soit un fermé de $V$.</p><p>Montrer que si $A$ est localement fermé, alors il existe un ouvert $\Omega$ tel que $A = \Omega\cap\overline A$. En particulier, $A$ est l'intersection d'un ouvert et d'un fermé.</p><p>On pourra utiliser le résultat : si $W$ est ouvert, alors $W\cap\overline A\subset\overline{W\cap A}$.</p>`,
  decode: {
    donnees: [R`Pour chaque $x\in A$ : un voisinage $V_x$ et un fermé $G_x$ de $E$ avec $V_x\cap A = G_x\cap V_x$.`],
    but: R`Construire un ouvert $\Omega$ et prouver la double inclusion $A = \Omega\cap\overline A$.`,
    cles: {
      int: R`On remplace le voisinage $V_x$ par son intérieur : on obtient un ouvert qui contient encore $x$, ce qui permet ensuite de faire une réunion d'ouverts.`,
      reun: R`Une réunion quelconque d'ouverts est un ouvert.`,
      clef: R`C'est le résultat de l'exercice « un ouvert et une adhérence », appliqué à l'ouvert $W_y$ et à la partie $A$.`
    }
  },
  steps: [
    { t: "Traduire l'hypothèse", b: R`<p>Pour chaque $x\in A$, il existe un voisinage $V_x$ de $x$ et un fermé $G_x$ de $E$ tels que</p>$$V_x\cap A = G_x\cap V_x.$$`, rappels: ["t-topo-induite"] },
    { t: "Passer à des ouverts", b: R`<p>On pose <span data-k="int">$W_x = \mathring{V_x}$</span> : c'est un ouvert qui contient $x$, et $W_x\subset V_x$. En intersectant l'égalité précédente avec $W_x$ :</p>$$W_x\cap A = W_x\cap G_x.\qquad(*)$$`, rappels: ["t-voisinage"] },
    { t: "Le candidat Ω", b: R`<p>On pose $\Omega = \bigcup_{x\in A}W_x$. C'est <span data-k="reun">une réunion d'ouverts</span>, donc un ouvert. Chaque $x\in A$ est dans $W_x$, donc $A\subset\Omega$.</p>`, rappels: ["t-ouvert"] },
    { t: "Première inclusion", b: R`<p>On a $A\subset\Omega$ et $A\subset\overline A$, donc $A\subset\Omega\cap\overline A$.</p>` },
    { t: "Inclusion réciproque : se placer dans un W", b: R`<p>Soit $z\in\Omega\cap\overline A$. Comme $z\in\Omega$, il existe $y\in A$ tel que $z\in W_y$. On note $W = W_y$ et $G = G_y$.</p>` },
    { t: "Utiliser le résultat sur l'adhérence", b: R`<p>$W$ est ouvert et $z\in W\cap\overline A$. D'après <span data-k="clef">le résultat rappelé</span> :</p>$$z\in\overline{W\cap A} = \overline{W\cap G}.$$`, rappels: ["t-adh-ouvert"] },
    { t: "z est dans G", b: R`<p>$W\cap G\subset G$ et $G$ est fermé, donc $\overline{W\cap G}\subset G$. Ainsi $z\in G$.</p>`, rappels: ["t-adherence"] },
    { t: "z est dans A", b: R`<p>On a $z\in W$ et $z\in G$, donc par $(*)$ : $z\in W\cap G = W\cap A\subset A$.</p>` },
    { t: "Conclusion", b: R`<p>Les deux inclusions donnent $A = \Omega\cap\overline A$ : $A$ est l'intersection de l'ouvert $\Omega$ et du fermé $\overline A$.</p>` }
  ],
  piege: R`Travailler directement avec les voisinages $V_x$ : leur réunion n'est pas forcément ouverte. Il faut passer à leurs intérieurs.`,
  methode: R`Pour recoller des informations locales en une information globale : rends chaque morceau ouvert, puis prends la réunion.`
}
]);

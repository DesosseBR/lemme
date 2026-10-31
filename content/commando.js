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
    { t: "La stratégie", h: R`<p>Pas besoin de calculer l'adhérence : c'est le plus petit fermé contenant la partie.</p>`, b: R`<p>Rappels : $B(a,r) = \{x : d(a,x)< r\}$ (boule ouverte) et $B_f(a,r) = \{x : d(a,x)\leqslant r\}$ (boule fermée).</p><p>On ne calcule pas l'<span data-k="adh">adhérence</span> directement. On utilise sa propriété clé : $\overline A$ est le plus petit fermé contenant $A$, donc <b>tout fermé qui contient $A$ contient $\overline A$</b>. Il suffit de montrer :</p><ol><li>$B(a,r)\subset B_f(a,r)$ ;</li><li>$B_f(a,r)$ est un fermé.</li></ol>`, rappels: ["t-adherence"] },
    { t: "La première inclusion", h: R`<p>$d(a,x)< r$ entraîne-t-il $d(a,x)\leqslant r$ ?</p>`, b: R`<p>Si $x\in B(a,r)$, alors $d(a,x)< r$, donc a fortiori $d(a,x)\leqslant r$ : $x\in B_f(a,r)$. Ainsi $B(a,r)\subset B_f(a,r)$.</p>` },
    { t: "Ce qu'il faut prouver pour « fermé »", h: R`<p>Fermé = complémentaire ouvert. Écris ce complémentaire.</p>`, b: R`<p>Par définition, $B_f(a,r)$ est fermée si son <span data-k="compl">complémentaire</span> est ouvert. Ce complémentaire est</p>$$U = \{x\in E : d(a,x)>r\}$$<p>(les points strictement plus loin que $r$ de $a$). « $U$ ouvert » signifie : autour de chaque point $x\in U$, il y a une petite boule $B(x,\rho)$ entièrement contenue dans $U$.</p>`, rappels: ["t-ouvert"] },
    { t: "Choisir le rayon", h: R`<p>Pour $x$ hors de la boule fermée, de combien $d(a,x)$ dépasse-t-il $r$ ?</p>`, b: R`<p>Soit $x\in U$ : $d(a,x)>r$. Il dépasse $r$ de la quantité</p>$$\rho = d(a,x)-r>0.$$<p>C'est la <span data-k="marge">marge</span> dont on dispose : si on bouge de moins de $\rho$ autour de $x$, on ne peut pas revenir à distance $\leqslant r$ de $a$. Exemple dans $\mathbb R^2$ : $a = 0$, $r = 1$, $x = (3,0)$ : $\rho = 2$.</p>` },
    { t: "La boule reste dans U", h: R`<p>Inégalité triangulaire : $d(a,x)\leqslant d(a,y)+d(y,x)$.</p>`, b: R`<p>Soit $y\in B(x,\rho)$ : $d(x,y)< \rho$. Par l'inégalité triangulaire $d(a,x)\leqslant d(a,y)+d(y,x)$, donc :</p>$$d(a,y)\geqslant d(a,x)-d(x,y)>d(a,x)-\rho = r.$$<p>Donc $y\in U$. Ainsi $B(x,\rho)\subset U$ : $U$ est ouvert, et $B_f(a,r)$ est fermée.</p>`, rappels: ["t-tri-inverse"] },
    { t: "Conclusion", h: R`<p>Un fermé qui contient la boule contient son adhérence.</p>`, b: R`<p>$B_f(a,r)$ est un fermé qui contient $B(a,r)$. Comme $\overline{B(a,r)}$ est le plus petit fermé contenant $B(a,r)$ :</p><div class="sbox">$$\overline{B(a,r)}\subset B_f(a,r).$$</div><p>L'égalité n'est pas toujours vraie (exercice suivant), mais elle l'est dans un espace normé (exercice d'après).</p>`, rappels: ["t-adherence"] }
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
    { t: "L'idée", h: R`<p>Dans $\mathbb R$ ou $\mathbb R^n$ ça marche : il faut une distance très différente. Pense à une distance qui ne prend que les valeurs $0$ et $1$.</p>`, b: R`<p>Dans $\mathbb R$, $\overline{]a-r,a+r[} = [a-r,a+r]$ : l'égalité est vraie. Il faut un espace plus « étrange », où les points sont tous isolés les uns des autres. On utilise la <span data-k="discrete">distance discrète</span> sur un ensemble $E$ qui a au moins deux éléments : deux points distincts sont toujours à distance $1$.</p>`, rappels: ["t-distance-discrete"] },
    { t: "C'est bien une distance", h: R`<p>Vérifie l'inégalité triangulaire en distinguant $x = z$ et $x\neq z$.</p>`, b: R`<p>On pose $d(x,y) = 0$ si $x = y$, et $d(x,y) = 1$ sinon. On vérifie les trois axiomes :</p><ul><li><b>Séparation</b> : $d(x,y) = 0\iff x = y$, par définition.</li><li><b>Symétrie</b> : $x = y\iff y = x$, donc $d(x,y) = d(y,x)$.</li><li><b>Inégalité triangulaire</b> $d(x,z)\leqslant d(x,y)+d(y,z)$ : si $x = z$, le membre de gauche est nul. Si $x\neq z$, il vaut $1$ ; et $y$ ne peut pas être égal à la fois à $x$ et à $z$, donc l'une des deux distances de droite vaut $1$, et la somme est $\geqslant1$.</li></ul>`, rappels: ["t-distance"] },
    { t: "La boule ouverte", h: R`<p>Avec $r = 1$ : quels $x$ vérifient $d(a,x)< 1$ ?</p>`, b: R`<p>Prenons $r = 1$. $d(a,x)< 1$ signifie $d(a,x) = 0$ (la seule valeur possible $< 1$), c'est-à-dire $x = a$ :</p>$$B(a,1) = \{a\}.$$` },
    { t: "Son adhérence", h: R`<p>Pour la distance discrète, $B(x,\frac12) = \{x\}$ : que dire des ouverts ?</p>`, b: R`<p>Pour tout point $x$, $B(x,\frac12) = \{x\}$ (même raisonnement). Donc toute partie $P$ est ouverte : autour de chaque $x\in P$, la boule $B(x,\frac12) = \{x\}$ est incluse dans $P$. <span data-k="tout">Toute partie est ouverte</span>, donc toute partie est aussi fermée (son complémentaire, comme toute partie, est ouvert).</p><p>En particulier $\{a\}$ est fermé, et l'adhérence d'un fermé est lui-même :</p>$$\overline{B(a,1)} = \overline{\{a\}} = \{a\}.$$`, rappels: ["t-adherence", "t-ouvert"] },
    { t: "La boule fermée", h: R`<p>Quels $x$ vérifient $d(a,x)\leqslant1$ ?</p>`, b: R`<p>$d(a,x)$ vaut $0$ ou $1$, toujours $\leqslant1$ : tous les points conviennent.</p>$$B_f(a,1) = E.$$` },
    { t: "Conclusion", h: R`<p>Il suffit que $E$ ait un autre point que $a$.</p>`, b: R`<p>Comme $E$ a au moins deux éléments, $\{a\}\neq E$ :</p><div class="sbox">$$\overline{B(a,1)} = \{a\}\subsetneq E = B_f(a,1).$$</div><p>Exemple concret : $E = \{0,1\}$, $a = 0$. La boule ouverte de rayon $1$ est $\{0\}$, la boule fermée est $\{0,1\}$.</p>` }
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
    { t: "Ce qu'il reste à montrer", h: R`<p>Une inclusion est déjà connue (premier exercice).</p>`, b: R`<p>Dans un espace normé, $d(x,y) = \|x-y\|$, donc $B(0,1) = \{\|x\|< 1\}$ et $B_f(0,1) = \{\|x\|\leqslant1\}$. Le premier exercice donne $\overline{B(0,1)}\subset B_f(0,1)$. Il reste l'inclusion inverse :</p>$$B_f(0,1)\subset\overline{B(0,1)},$$<p>c'est-à-dire : tout $x$ avec $\|x\|\leqslant1$ est adhérent à la boule ouverte.</p>` },
    { t: "L'outil", h: R`<p>$x$ est adhérent à $A$ si l'on trouve des points de $A$ aussi proches qu'on veut de $x$.</p>`, b: R`<p>On utilise le <span data-k="critere">critère d'adhérence</span> : $x\in\overline A$ si et seulement si, pour tout $\varepsilon>0$, il existe $y\in A$ avec $\|x-y\|< \varepsilon$.</p><p>Soit donc $x$ avec $\|x\|\leqslant1$ et $\varepsilon>0$. On cherche $y$ avec $\|y\|< 1$ et $\|x-y\|< \varepsilon$.</p>`, rappels: ["t-adherence"] },
    { t: "Le cas facile", h: R`<p>Si $\|x\|< 1$, $x$ est lui-même dans la boule ouverte.</p>`, b: R`<p>Si $\|x\|< 1$, alors $x\in B(0,1)$, et $y = x$ convient : $\|x-y\| = 0< \varepsilon$.</p>` },
    { t: "Le cas du bord", h: R`<p>Si $\|x\| = 1$, rapproche $x$ du centre : $y = (1-t)x$ avec $t$ petit.</p>`, b: R`<p>Supposons $\|x\| = 1$ : $x$ est sur la sphère. On <span data-k="ray">recule un peu vers le centre</span>, le long du segment $[0,x]$ : on pose</p>$$t = \min\Big(1,\frac\varepsilon2\Big)\in\,]0,1],\qquad y = (1-t)x.$$<p>Dans $\mathbb R^2$ : si $x = (1,0)$ et $\varepsilon = 0{,}1$, alors $t = 0{,}05$ et $y = (0{,}95;0)$.</p>` },
    { t: "y est dans la boule ouverte", h: R`<p>$\|\lambda x\| = |\lambda|\,\|x\|$.</p>`, b: R`<p>Par homogénéité de la norme, et comme $1-t\geqslant0$ :</p>$$\|y\| = |1-t|\,\|x\| = (1-t)\times1 = 1-t< 1,$$<p>car $t>0$. Donc $y\in B(0,1)$.</p>`, rappels: ["t-norme"] },
    { t: "y est proche de x", h: R`<p>Calcule $x-y$.</p>`, b: R`<p>$x-y = x-(1-t)x = tx$, donc</p>$$\|x-y\| = \|tx\| = t\,\|x\| = t\leqslant\frac\varepsilon2< \varepsilon.$$<p>Par le critère d'adhérence, $x\in\overline{B(0,1)}$.</p>`, rappels: ["t-norme"] },
    { t: "Conclusion", h: R`<p>Rassemble les deux inclusions.</p>`, b: R`<p>Tout point de $B_f(0,1)$ est adhérent à $B(0,1)$. Avec l'inclusion du premier exercice :</p><div class="sbox">$$\overline{B(0,1)} = B_f(0,1).$$</div><p>Ce qui manquait dans l'espace discret : on ne pouvait pas « reculer vers le centre ». Dans un espace normé, le segment $[0,x]$ permet de s'approcher continûment du bord.</p>` }
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
    { t: "La stratégie", h: R`<p>Pour montrer qu'un ensemble est au plus dénombrable, il suffit de l'injecter dans un ensemble dénombrable connu. Lequel est dense dans $\mathbb R$ ?</p>`, b: R`<p>Un ensemble est au plus dénombrable s'il s'injecte dans $\mathbb N$. Or $\mathbb Q$ est dénombrable. Si l'on construit une application <b>injective</b> $\varphi : A\to\mathbb Q$, alors $A$ s'injecte dans $\mathbb N$ (en composant), donc est au plus dénombrable.</p><p>Idée : chaque point de $A$ a autour de lui un petit intervalle « à lui » ; on y choisit un rationnel, qui servira d'étiquette.</p>`, rappels: ["t-denombrable"] },
    { t: "Le rayon d'isolement", h: R`<p>Écris la définition de « $a$ est isolé dans $A$ ».</p>`, b: R`<p>$a$ est isolé dans $A$ s'il a un voisinage qui ne contient aucun autre point de $A$. Pour chaque $a\in A$, on choisit donc $r_a>0$ tel que</p>$$]a-r_a,a+r_a[\,\cap A = \{a\}.\qquad(*)$$<p>Exemple : $A = \{\frac1n : n\geqslant1\}$. Autour de $\frac1n$, le plus proche voisin est $\frac1{n+1}$, à distance $\frac1{n(n+1)}$ : on peut prendre $r_{1/n} = \frac1{n(n+1)}$.</p>`, rappels: ["t-isole"] },
    { t: "Associer un rationnel", h: R`<p>Tout intervalle ouvert non vide contient un rationnel. Pourquoi prendre un rayon moitié ?</p>`, b: R`<p>L'intervalle $\big]a-\frac{r_a}2,a+\frac{r_a}2\big[$ est ouvert et non vide : par densité de $\mathbb Q$, il contient un rationnel, noté $q_a$. On pose $\varphi(a) = q_a$.</p><p>On prend <span data-k="demi">le rayon moitié</span> exprès : si deux points avaient le même rationnel, leurs demi-intervalles se chevaucheraient, et on va voir que c'est impossible.</p>`, rappels: ["t-densite-q"] },
    { t: "Injectivité : l'hypothèse", h: R`<p>Si $a$ et $b$ ont le même rationnel $q$, majore $|a-b|$ via $q$.</p>`, b: R`<p>Soit $a,b\in A$ avec $q_a = q_b = q$. Par construction, $|a-q|< \frac{r_a}2$ et $|b-q|< \frac{r_b}2$. Par l'inégalité triangulaire :</p>$$|a-b|\leqslant|a-q|+|q-b|< \frac{r_a+r_b}2\leqslant\max(r_a,r_b).$$<p>(La moyenne de deux nombres est au plus le plus grand.)</p>` },
    { t: "Injectivité : la conclusion", h: R`<p>Si $|a-b|< r_a$, alors $b$ est dans l'intervalle d'isolement de $a$.</p>`, b: R`<p>Supposons $r_a\geqslant r_b$ (sinon on échange). Alors $|a-b|< r_a$, donc $b\in\,]a-r_a,a+r_a[$. Comme $b\in A$, la propriété $(*)$ force $b = a$. Donc $\varphi$ est injective.</p>` },
    { t: "Conclusion", h: R`<p>Injection dans $\mathbb Q$.</p>`, b: R`<p>$\varphi : A\to\mathbb Q$ est injective et $\mathbb Q$ est dénombrable :</p><div class="sbox"><p style="margin:0;text-align:center">$A$ est au plus dénombrable.</p></div><p>Exemples : $\mathbb Z$, $\{\frac1n\}$ sont formés de points isolés (et dénombrables). À l'inverse, $[0,1]$ n'est pas dénombrable, et en effet aucun de ses points n'est isolé.</p>`, rappels: ["t-denombrable"] }
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
    { t: "L'idée", h: R`<p>La continuité uniforme donne un écart $\eta$ valable partout. Combien de pas de longueur $\eta$ pour aller de $0$ à $x$ ?</p>`, b: R`<p><span data-k="uc">Uniformément continue</span> signifie : il existe un même écart $\eta$, valable partout, sur lequel $f$ bouge peu. C'est un <span data-k="pas">pas fixe</span>.</p><p>Pour aller de $0$ à $x$, il faut environ $\frac x\eta$ pas. À chaque pas, $f$ varie d'au plus $1$ (par exemple). Donc $f$ varie au total d'au plus environ $\frac x\eta$ : une borne affine en $x$.</p>` },
    { t: "Le pas η", h: R`<p>Définition de la continuité uniforme avec $\varepsilon = 1$.</p>`, b: R`<p>Par définition de la continuité uniforme avec $\varepsilon = 1$ : il existe $\eta_0>0$ tel que</p>$$\forall x,y\geqslant0,\quad|x-y|< \eta_0\implies|f(x)-f(y)|< 1.$$<p>On pose $\eta = \frac{\eta_0}2$, pour avoir une inégalité large confortable :</p>$$\forall x,y\geqslant0,\quad|x-y|\leqslant\eta\implies|f(x)-f(y)|\leqslant1.\qquad(*)$$`, rappels: ["t-uc"] },
    { t: "Découper [0, x]", h: R`<p>Coupe $[0,x]$ aux points $0,\eta,2\eta,\dots,n\eta$ et télescope.</p>`, b: R`<p>Soit $x\geqslant0$. On pose <span data-k="n">$n = \left\lfloor\frac x\eta\right\rfloor$</span> : le nombre de pas entiers qu'on peut faire, avec $n\eta\leqslant x< (n+1)\eta$. On coupe $[0,x]$ aux points $0,\eta,2\eta,\dots,n\eta$, puis $x$. Par télescopage :</p>$$f(x)-f(0) = \big(f(x)-f(n\eta)\big)+\sum_{k=0}^{n-1}\Big(f\big((k+1)\eta\big)-f(k\eta)\Big).$$<p>(En développant la somme, chaque $f(k\eta)$ intermédiaire se simplifie.)</p>`, rappels: ["partie-entiere", "telescopage"] },
    { t: "Majorer chaque morceau", h: R`<p>Chaque morceau relie deux points à distance $\leqslant\eta$.</p>`, b: R`<p>Deux points consécutifs $k\eta$ et $(k+1)\eta$ sont à distance exactement $\eta$ ; et $0\leqslant x-n\eta< \eta$. Par $(*)$, chacun des $n+1$ morceaux vaut au plus $1$ en valeur absolue. Par l'inégalité triangulaire :</p>$$|f(x)-f(0)|\leqslant\underbrace{1}_{\text{dernier morceau}}+\underbrace{n\times1}_{\text{les }n\text{ pas}} = n+1.$$`, rappels: ["inegalite-triangulaire"] },
    { t: "Faire apparaître x", h: R`<p>$n = \lfloor\frac x\eta\rfloor\leqslant\frac x\eta$.</p>`, b: R`<p>Comme $n\leqslant\frac x\eta$, et par l'inégalité triangulaire $|f(x)|\leqslant|f(0)|+|f(x)-f(0)|$ :</p>$$|f(x)|\leqslant|f(0)|+1+\frac x\eta.$$` },
    { t: "Conclusion", h: R`<p>Identifie $\alpha$ et $\beta$.</p>`, b: R`<p>On pose $\alpha = \frac1\eta>0$ et $\beta = |f(0)|+1>0$. Ils ne dépendent pas de $x$ :</p><div class="sbox">$$\forall x\geqslant0,\quad|f(x)|\leqslant\alpha x+\beta.$$</div><p>Conséquence : $x\mapsto x^2$ n'est pas uniformément continue sur $\mathbb R_+$, car elle grandit plus vite que toute fonction affine. En revanche $\sqrt x$ l'est, et on a bien $\sqrt x\leqslant x+1$.</p>` }
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
    { t: "Ce qu'on veut", h: R`<p>Montre les deux inégalités sans valeur absolue, l'une après l'autre.</p>`, b: R`<p>$d(x,A)$ est la plus petite distance de $x$ aux points de $A$ (plus exactement la borne inférieure). Être <span data-k="lip">$1$-lipschitzienne</span> signifie : pour tous $x_1,x_2$,</p>$$|d(x_1,A)-d(x_2,A)|\leqslant d(x_1,x_2).$$<p>Intuition : si on déplace $x$ d'une distance $\delta$, sa distance à $A$ change d'au plus $\delta$. On montre séparément $d(x_1,A)-d(x_2,A)\leqslant d(x_1,x_2)$, puis l'autre sens.</p>` },
    { t: "Pour un point y de A", h: R`<p>Pour $y\in A$ : $d(x_1,A)\leqslant d(x_1,y)$, puis inégalité triangulaire.</p>`, b: R`<p>Soit $y\in A$. La borne inférieure est plus petite que chaque élément de l'ensemble, donc $d(x_1,A)\leqslant d(x_1,y)$. Puis l'inégalité triangulaire (passer par $x_2$) :</p>$$d(x_1,A)\leqslant d(x_1,y)\leqslant d(x_1,x_2)+d(x_2,y).$$<p>Donc $d(x_1,A)-d(x_1,x_2)\leqslant d(x_2,y)$.</p>`, rappels: ["t-inf", "t-distance"] },
    { t: "Passer à l'inf", h: R`<p>Un minorant de l'ensemble est plus petit que la borne inférieure.</p>`, b: R`<p>Le nombre $c = d(x_1,A)-d(x_1,x_2)$ ne dépend pas de $y$, et $c\leqslant d(x_2,y)$ pour <b>tout</b> $y\in A$ : c'est un minorant de $\{d(x_2,y) : y\in A\}$. La borne inférieure est le plus grand des minorants, donc <span data-k="minorant">$c$ est plus petit que la borne inférieure</span> :</p>$$d(x_1,A)-d(x_1,x_2)\leqslant d(x_2,A).$$`, rappels: ["t-inf"] },
    { t: "Échanger les rôles", h: R`<p>Échange $x_1$ et $x_2$.</p>`, b: R`<p>On a montré $d(x_1,A)-d(x_2,A)\leqslant d(x_1,x_2)$. Le même raisonnement avec $x_1$ et $x_2$ échangés donne $d(x_2,A)-d(x_1,A)\leqslant d(x_2,x_1) = d(x_1,x_2)$. Un nombre et son opposé sont $\leqslant d(x_1,x_2)$, donc sa valeur absolue aussi :</p>$$|d(x_1,A)-d(x_2,A)|\leqslant d(x_1,x_2).$$` },
    { t: "Conclusion", h: R`<p>Lipschitzienne $\Rightarrow$ continue.</p>`, b: R`<div class="sbox"><p style="margin:0;text-align:center">$x\mapsto d(x,A)$ est $1$-lipschitzienne, donc uniformément continue, donc continue.</p></div><p>Exemple dans $\mathbb R$ : $A = [0,1]$, $d(x,A) = \max(0,-x,x-1)$. Son graphe a des pentes $-1$, $0$, $1$ : jamais plus de $1$ en valeur absolue.</p>`, rappels: ["t-lipschitz"] }
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
    { t: "L'outil clé", h: R`<p>Pour un fermé $A$ : $d(x,A) = 0\iff x\in\overline A = A$.</p>`, b: R`<p>Pour une partie $A$, $d(x,A) = 0\iff x\in\overline A$ (on trouve des points de $A$ aussi proches qu'on veut de $x$). Si $A$ est fermé, $\overline A = A$. Donc, comme $A$ et $B$ sont fermés :</p>$$d(x,A) = 0\iff x\in A,\qquad d(x,B) = 0\iff x\in B.$$<p>C'est là qu'on utilise que <span data-k="ferme">$A$ et $B$ sont fermés</span>.</p>`, rappels: ["t-dist-partie"] },
    { t: "Le candidat", h: R`<p>Cherche un quotient qui vaut $0$ quand $d(x,A) = 0$ et $1$ quand $d(x,B) = 0$.</p>`, b: R`<p>On veut une fonction qui vaut $0$ exactement sur $A$ et $1$ exactement sur $B$. On pose</p>$$f(x) = \frac{d(x,A)}{d(x,A)+d(x,B)}.$$<p>C'est un <span data-k="ratio">rapport de distances</span> : la part de « distance à $A$ » dans la distance totale. Près de $A$, le numérateur est petit, $f\approx0$ ; près de $B$, $d(x,B)\approx0$ et $f\approx1$.</p>` },
    { t: "f est bien définie", h: R`<p>Le dénominateur peut-il être nul ? Il faudrait $x\in A\cap B$.</p>`, b: R`<p>Si le dénominateur était nul, on aurait $d(x,A)+d(x,B) = 0$, somme de deux nombres positifs, donc $d(x,A) = d(x,B) = 0$. Par l'étape 1, $x\in A$ et $x\in B$, impossible car $A\cap B = \varnothing$. Le dénominateur est donc toujours $>0$.</p>` },
    { t: "0 ≤ f ≤ 1", h: R`<p>Numérateur positif, plus petit que le dénominateur.</p>`, b: R`<p>Le numérateur $d(x,A)$ est $\geqslant0$ et $\leqslant d(x,A)+d(x,B)$ (on ajoute $d(x,B)\geqslant0$). Le dénominateur est $>0$. Donc $0\leqslant f(x)\leqslant1$.</p>` },
    { t: "Où f vaut 0 et 1", h: R`<p>Traduis $f(x) = 0$ puis $f(x) = 1$.</p>`, b: R`<ul><li>$f(x) = 0\iff d(x,A) = 0\iff x\in A$.</li><li>$f(x) = 1\iff d(x,A) = d(x,A)+d(x,B)\iff d(x,B) = 0\iff x\in B$.</li></ul><p>Donc $f^{-1}(\{0\}) = A$ et $f^{-1}(\{1\}) = B$, <span data-k="exact">exactement</span> (et pas seulement des inclusions).</p>`, rappels: ["t-dist-partie"] },
    { t: "Continuité", h: R`<p>Quotient de fonctions continues, dénominateur jamais nul.</p>`, b: R`<p>$x\mapsto d(x,A)$ et $x\mapsto d(x,B)$ sont continues (exercice précédent : $1$-lipschitziennes). Le numérateur et le dénominateur sont continus, et le dénominateur ne s'annule pas : le quotient $f$ est continu.</p><div class="sbox"><p style="margin:0;text-align:center">$f$ continue, $0\leqslant f\leqslant1$, $f^{-1}(\{0\}) = A$, $f^{-1}(\{1\}) = B$.</p></div><p>Exemple dans $\mathbb R$ : $A = ]-\infty,0]$, $B = [1,+\infty[$ : $f$ vaut $0$ avant $0$, $x$ entre $0$ et $1$, et $1$ après.</p>`, rappels: ["t-lipschitz", "t-operations"] }
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
    { t: "L'idée", h: R`<p>$f$ vaut $0$ sur $A$ et $1$ sur $B$ : coupe entre les deux, à mi-hauteur.</p>`, b: R`<p>On reprend la fonction $f$ de l'exercice précédent : continue, $0$ sur $A$, $1$ sur $B$. On <span data-k="seuil">coupe au seuil $\frac12$</span> : les points où $f$ est « plutôt proche de $0$ » d'un côté, « plutôt proche de $1$ » de l'autre.</p>$$U = f^{-1}\Big(\Big]-\infty,\tfrac12\Big[\Big) = \{x : f(x)< \tfrac12\},\qquad V = f^{-1}\Big(\Big]\tfrac12,+\infty\Big[\Big) = \{x : f(x)>\tfrac12\}.$$` },
    { t: "U et V sont ouverts", h: R`<p>L'image réciproque d'un ouvert par une fonction continue est un ouvert.</p>`, b: R`<p>$\left]-\infty,\frac12\right[$ et $\left]\frac12,+\infty\right[$ sont des ouverts de $\mathbb R$. Comme $f$ est continue, leurs images réciproques $U$ et $V$ sont des ouverts de $E$.</p>`, rappels: ["t-continuite-ouverts"] },
    { t: "U et V sont disjoints", h: R`<p>Un point peut-il vérifier $f(x)<\frac12$ et $f(x)>\frac12$ ?</p>`, b: R`<p>Un point de $U\cap V$ vérifierait à la fois $f(x)< \frac12$ et $f(x)>\frac12$ : impossible. Donc $U\cap V = \varnothing$ : $U$ et $V$ sont <span data-k="disj">disjoints</span>.</p>` },
    { t: "A ⊂ U et B ⊂ V", h: R`<p>Que vaut $f$ sur $A$ ? sur $B$ ?</p>`, b: R`<p>Si $x\in A$, $f(x) = 0< \frac12$, donc $x\in U$. Si $x\in B$, $f(x) = 1>\frac12$, donc $x\in V$.</p><div class="sbox"><p style="margin:0;text-align:center">$U$, $V$ ouverts disjoints, $A\subset U$, $B\subset V$.</p></div><p>Les points où $f = \frac12$ exactement ne sont ni dans $U$ ni dans $V$ : ils forment une « zone tampon » entre les deux.</p>` }
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
    { t: "Ce qu'il faut montrer", h: R`<p>Critère d'adhérence : toute boule autour de $x$ rencontre $A\cap B$.</p>`, b: R`<p>Soit $x\in A\cap\overline B$. On veut $x\in\overline{A\cap B}$. Par le critère d'adhérence, il suffit de montrer : pour tout $\varepsilon>0$,</p>$$B(x,\varepsilon)\cap(A\cap B)\neq\varnothing.$$<p>On sait deux choses sur $x$ : il est dans l'<span data-k="ouv">ouvert</span> $A$, et il est adhérent à $B$.</p>`, rappels: ["t-adherence"] },
    { t: "Utiliser que A est ouvert", h: R`<p>$x\in A$ et $A$ ouvert : une petite boule autour de $x$ reste dans $A$.</p>`, b: R`<p>Soit $\varepsilon>0$. Comme $x\in A$ et $A$ est ouvert, il existe $\rho>0$ tel que $B(x,\rho)\subset A$ : autour de $x$, on reste dans $A$ si on ne s'éloigne pas trop.</p>`, rappels: ["t-ouvert"] },
    { t: "Le bon rayon", h: R`<p>Prends un rayon qui convient pour les deux contraintes à la fois.</p>`, b: R`<p>On pose <span data-k="min">$\delta = \min(\varepsilon,\rho)>0$</span>. Alors $B(x,\delta)\subset B(x,\rho)\subset A$, et $B(x,\delta)\subset B(x,\varepsilon)$ : cette boule est à la fois dans $A$ et dans la boule de rayon $\varepsilon$.</p>` },
    { t: "Utiliser que x est adhérent à B", h: R`<p>$x\in\overline B$ : toute boule autour de $x$ rencontre $B$.</p>`, b: R`<p>Comme $x\in\overline B$, toute boule centrée en $x$ rencontre $B$, en particulier $B(x,\delta)$ : il existe $y\in B(x,\delta)\cap B$.</p>`, rappels: ["t-adherence"] },
    { t: "Conclusion", h: R`<p>Le point $y$ trouvé est dans les trois ensembles.</p>`, b: R`<p>Ce $y$ est dans $B$ ; dans $B(x,\delta)\subset A$, donc dans $A$ ; et dans $B(x,\delta)\subset B(x,\varepsilon)$. Donc $y\in B(x,\varepsilon)\cap(A\cap B)$. Ceci pour tout $\varepsilon>0$ :</p><div class="sbox">$$A\cap\overline B\subset\overline{A\cap B}.$$</div><p>Sans « $A$ ouvert », c'est faux : $A = \{0\}$, $B = ]0,1]$ dans $\mathbb R$ donnent $A\cap\overline B = \{0\}$ mais $A\cap B = \varnothing$.</p>` }
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
    { t: "L'idée", h: R`<p>Ce qui peut manquer à gauche : un point du bord de $A$, qui n'est pas dans $A$ (ouvert).</p>`, b: R`<p>L'adhérence $\overline{A\cap B}$ peut ajouter des points du <span data-k="bord">bord de $A$</span>. Mais comme $A$ est ouvert, ces points de bord ne sont pas dans $A$, donc pas dans $A\cap\overline B$. On choisit $A$ et $B$ qui se chevauchent jusqu'au bord de $A$.</p>` },
    { t: "L'exemple", h: R`<p>Prends deux intervalles qui se chevauchent, $A$ ouvert.</p>`, b: R`<p>Prenons dans $\mathbb R$ :</p>$$A = \,]0,2[\ (\text{ouvert}),\qquad B = [1,3]\ (\text{fermé, donc }\overline B = B).$$<p>Ils se chevauchent sur $[1,2[$, jusqu'au bord $2$ de $A$.</p>` },
    { t: "Le membre de gauche", h: R`<p>Calcule l'intersection d'intervalles.</p>`, b: R`<p>$\overline B = B = [1,3]$, et l'intersection garde les points dans les deux :</p>$$A\cap\overline B = \,]0,2[\,\cap\,[1,3] = [1,2[.$$<p>$2$ n'y est pas, car $2\notin\,]0,2[$.</p>` },
    { t: "Le membre de droite", h: R`<p>L'adhérence d'un intervalle ajoute ses extrémités.</p>`, b: R`<p>$A\cap B = [1,2[$. Son adhérence ajoute l'extrémité $2$ : $2$ est limite de la suite $2-\frac1n\in[1,2[$. Donc</p>$$\overline{A\cap B} = [1,2].$$`, rappels: ["t-adherence"] },
    { t: "Conclusion", h: R`<p>Trouve un point dans l'un des deux ensembles mais pas dans l'autre.</p>`, b: R`<p>$2\in\overline{A\cap B}$, mais $2\notin A\cap\overline B$ car $2\notin A$. L'inclusion de l'exercice précédent est stricte :</p><div class="sbox">$$A\cap\overline B = [1,2[\ \subsetneq\ [1,2] = \overline{A\cap B}.$$</div>` }
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
    { t: "Ce que veut dire « fermé de V »", h: R`<p>Topologie induite : les fermés de $V$ sont les traces sur $V$ des fermés de $E$.</p>`, b: R`<p>On munit $V$ de la distance de $E$ restreinte à $V$. <span data-k="induit">Les fermés de $V$</span> sont alors exactement les parties de la forme $G\cap V$, où $G$ est un fermé de $E$.</p><p>Exemple : dans $V = \,]0,1[$, la partie $]0,\frac12]$ est un fermé de $V$ (c'est $[0,\frac12]\cap V$), alors qu'elle n'est pas fermée dans $\mathbb R$.</p><p>Être <span data-k="locf">localement fermé</span>, c'est donc : autour de chaque point, $A$ ressemble à un fermé.</p>`, rappels: ["t-topo-induite"] },
    { t: "Choisir le voisinage", h: R`<p>Un ouvert est un voisinage de chacun de ses points. Lequel as-tu sous la main ?</p>`, b: R`<p>Soit $x\in A = \Omega\cap F$. Alors $x\in\Omega$, et $\Omega$ est un ouvert : c'est un voisinage de chacun de ses points, en particulier de $x$. On prend $V = \Omega$.</p>`, rappels: ["t-voisinage"] },
    { t: "Calculer V ∩ A", h: R`<p>Simplifie $\Omega\cap(\Omega\cap F)$.</p>`, b: R`$$V\cap A = \Omega\cap(\Omega\cap F) = \Omega\cap F = F\cap V.$$<p>(Intersecter deux fois avec $\Omega$ revient à intersecter une fois.)</p>` },
    { t: "Conclusion", h: R`<p>$F\cap V$ avec $F$ fermé de $E$.</p>`, b: R`<p>$F$ est un fermé de $E$, donc $F\cap V$ est un fermé de $V$ (étape 1). Ceci vaut pour tout $x\in A$ :</p><div class="sbox"><p style="margin:0;text-align:center">L'intersection d'un ouvert et d'un fermé est localement fermée.</p></div><p>Exemple : $[0,1[ = \,]-1,1[\,\cap\,[0,2]$ est localement fermé dans $\mathbb R$, sans être ni ouvert ni fermé.</p>`, rappels: ["t-topo-induite"] }
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
    { t: "Traduire l'hypothèse", h: R`<p>« Fermé de $V_x$ » : trace sur $V_x$ d'un fermé $G_x$ de $E$.</p>`, b: R`<p>$A$ est localement fermé : pour chaque $x\in A$, il existe un voisinage $V_x$ de $x$ tel que $V_x\cap A$ soit un fermé de $V_x$. Par la description des fermés induits, il existe un fermé $G_x$ de $E$ avec</p>$$V_x\cap A = G_x\cap V_x.$$`, rappels: ["t-topo-induite"] },
    { t: "Passer à des ouverts", h: R`<p>Un voisinage contient un ouvert autour de $x$ : son intérieur.</p>`, b: R`<p>On veut construire un ouvert, donc on remplace chaque voisinage par un ouvert. On pose <span data-k="int">$W_x = \mathring{V_x}$</span>, l'intérieur de $V_x$ : c'est un ouvert, qui contient $x$ (car $V_x$ est un voisinage de $x$), et $W_x\subset V_x$. On intersecte l'égalité précédente avec $W_x$ :</p>$$W_x\cap A = W_x\cap G_x.\qquad(*)$$<p>(Comme $W_x\subset V_x$ : $W_x\cap V_x\cap A = W_x\cap A$ et de même à droite.)</p>`, rappels: ["t-voisinage"] },
    { t: "Le candidat Ω", h: R`<p>Réunis tous ces ouverts.</p>`, b: R`<p>On pose $\Omega = \bigcup_{x\in A}W_x$. C'est <span data-k="reun">une réunion d'ouverts</span>, donc un ouvert. Chaque $x\in A$ est dans son $W_x$, donc $A\subset\Omega$.</p><p>But : montrer $A = \Omega\cap\overline A$.</p>`, rappels: ["t-ouvert"] },
    { t: "Première inclusion", h: R`<p>$A$ est contenu dans $\Omega$ et dans $\overline A$.</p>`, b: R`<p>On a $A\subset\Omega$ (étape 3) et $A\subset\overline A$ (toujours). Donc $A\subset\Omega\cap\overline A$.</p>` },
    { t: "Inclusion réciproque : se placer dans un W", h: R`<p>Si $z\in\Omega$, il est dans l'un des $W_y$.</p>`, b: R`<p>Soit $z\in\Omega\cap\overline A$. Comme $z\in\Omega = \bigcup W_y$, il existe $y\in A$ tel que $z\in W_y$. On note $W = W_y$ (ouvert) et $G = G_y$ (fermé), avec $W\cap A = W\cap G$ par $(*)$.</p>` },
    { t: "Utiliser le résultat sur l'adhérence", h: R`<p>Applique le résultat rappelé avec l'ouvert $W$.</p>`, b: R`<p>$W$ est ouvert et $z\in W\cap\overline A$. Par <span data-k="clef">le résultat rappelé</span> ($W\cap\overline A\subset\overline{W\cap A}$ pour $W$ ouvert) puis $(*)$ :</p>$$z\in\overline{W\cap A} = \overline{W\cap G}.$$`, rappels: ["t-adh-ouvert"] },
    { t: "z est dans G", h: R`<p>L'adhérence d'une partie d'un fermé reste dans ce fermé.</p>`, b: R`<p>$W\cap G\subset G$, et $G$ est fermé : c'est un fermé qui contient $W\cap G$, donc il contient son adhérence (plus petit fermé la contenant). Ainsi $\overline{W\cap G}\subset G$, et $z\in G$.</p>`, rappels: ["t-adherence"] },
    { t: "z est dans A", h: R`<p>Utilise $(*)$.</p>`, b: R`<p>On a $z\in W$ (étape 5) et $z\in G$ (étape 7), donc $z\in W\cap G$. Par $(*)$, $W\cap G = W\cap A\subset A$ : $z\in A$.</p>` },
    { t: "Conclusion", h: R`<p>Les deux inclusions.</p>`, b: R`<p>Les étapes 4 à 8 donnent $A\subset\Omega\cap\overline A$ et $\Omega\cap\overline A\subset A$ :</p><div class="sbox">$$A = \Omega\cap\overline A.$$</div><p>Avec l'exercice précédent : $A$ est localement fermé si et seulement si $A$ est l'intersection d'un ouvert et d'un fermé.</p>` }
  ],
  piege: R`Travailler directement avec les voisinages $V_x$ : leur réunion n'est pas forcément ouverte. Il faut passer à leurs intérieurs.`,
  methode: R`Pour recoller des informations locales en une information globale : rends chaque morceau ouvert, puis prends la réunion.`
}
]);

/* Espaces préhilbertiens et euclidiens (Spé) : bloc « Calculs dans un espace préhilbertien réel ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 7 };
LEMME.rappels({
  "eu-weier": { t: "Théorème de Weierstrass", b: R`<p>Toute fonction continue sur un segment $[a,b]$ est limite uniforme d'une suite de fonctions polynomiales : $\forall\varepsilon>0,\ \exists P\in\mathbb R[X],\ \|f-P\|_{\infty,[a,b]}\leqslant\varepsilon$.</p>` },
  "eu-cont": { t: "Continuité du produit scalaire", b: R`<p>Par Cauchy-Schwarz, $|(x|y)-(x'|y)|\leqslant\|x-x'\|\,\|y\|$ : pour $y$ fixé, $x\mapsto(x|y)$ est une forme linéaire continue (et même $1$-lipschitzienne si $\|y\|\leqslant1$). Le produit scalaire est continu sur $E\times E$.</p>` },
  "eu-bon": { t: "Calculs en base orthonormée", b: R`<p>Si $(e_1,\dots,e_n)$ est une base orthonormée de $E$ : $x = \sum(e_k|x)e_k$, $(x|y) = \sum(e_k|x)(e_k|y) = {}^tXY$, $\|x\|^2 = \sum(e_k|x)^2$. La matrice $M$ d'un endomorphisme $u$ a pour coefficients $m_{ij} = (e_i|u(e_j))$.</p>` },
  "eu-adj": { t: "Adjoint d'un endomorphisme", b: R`<p>En dimension finie, pour tout $u\in\mathcal L(E)$ il existe un unique $u^*$ tel que $(u(x)|y) = (x|u^*(y))$ pour tous $x,y$ ; en base orthonormée, $\mathrm{Mat}(u^*) = {}^t\mathrm{Mat}(u)$. On a $\ker u^* = (\mathrm{Im}\,u)^\perp$ et $\mathrm{Im}\,u^* = (\ker u)^\perp$.</p>` }
});
LEMME.exercises([
{ id: "pre-19", ...P, level: 1, time: "10 min",
  title: "Des sous-espaces deux à deux orthogonaux sont en somme directe",
  enonce: R`<p>Soient $F_1,\dots,F_n$ des sous-espaces vectoriels d'un espace préhilbertien $E$, deux à deux orthogonaux. Montrer que la somme $F_1+\dots+F_n$ est directe.</p>`,
  decode: { donnees: [R`$\forall i\neq j,\ \forall(x,y)\in F_i\times F_j,\ (x|y) = 0$.`], but: R`Montrer que $x_1+\dots+x_n = 0$ avec $x_i\in F_i$ impose $x_i = 0$ pour tout $i$.`, cles: {} },
  steps: [
    { t: "Prendre une décomposition de 0", h: R`<p>Faire le produit scalaire de la relation avec $x_j$.</p>`, b: R`<p>Soient $x_1\in F_1,\dots,x_n\in F_n$ avec $x_1+\dots+x_n = 0$. Fixons $j$ et faisons le produit scalaire avec $x_j$ :</p>$$0 = \Big(\sum_{i=1}^nx_i\,\Big|\,x_j\Big) = \sum_{i=1}^n(x_i|x_j) = (x_j|x_j) = \|x_j\|^2,$$<p>car $(x_i|x_j) = 0$ pour $i\neq j$ (sous-espaces orthogonaux). Donc $x_j = 0$, et ce pour tout $j$.</p>` },
    { t: "Conclusion", h: R`<p>Caractérisation de la somme directe.</p>`, b: R`<p>La seule décomposition de $0$ dans $F_1+\dots+F_n$ est la décomposition triviale : la somme est directe. (Autre lecture : une famille orthogonale de vecteurs non nuls est libre, c'est le même calcul.)</p>` }
  ],
  piege: R`Pour $n\geqslant3$, il ne suffit pas en général que les intersections deux à deux soient nulles pour avoir une somme directe ; ici c'est l'orthogonalité, bien plus forte, qui fait tout marcher.`,
  methode: R`Pour exploiter une orthogonalité : faire le produit scalaire de la relation avec le vecteur que l'on veut isoler.`
},
{ id: "pre-20", ...P, level: 2, time: "10 min",
  title: "Un sous-espace et son adhérence ont le même orthogonal",
  enonce: R`<p>Soit $F$ un sous-espace vectoriel d'un espace préhilbertien réel $E$ et $\overline F$ son adhérence. Montrer que $\overline F^{\,\perp} = F^\perp$.</p>`,
  decode: { donnees: [R`$F\subset\overline F$ ; tout $x\in\overline F$ est limite d'une suite d'éléments de $F$.`], but: R`Double inclusion ; l'une est formelle, l'autre utilise la continuité du produit scalaire.`, cles: {} },
  steps: [
    { t: "Inclusion facile", h: R`<p>Si $A\subset B$, alors $B^\perp\subset A^\perp$.</p>`, b: R`<p>Comme $F\subset\overline F$, tout vecteur orthogonal à tout $\overline F$ l'est en particulier à tout $F$ : $\overline F^{\,\perp}\subset F^\perp$.</p>` },
    { t: "Inclusion réciproque", h: R`<p>$a\in F^\perp$, $x = \lim x_n$ avec $x_n\in F$ : passer à la limite dans $(x_n|a) = 0$.</p>`, b: R`<p>Soit $a\in F^\perp$ et $x\in\overline F$ : il existe $(x_n)$ dans $F$ avec $x_n\to x$. Pour tout $n$, $(x_n|a) = 0$. Par Cauchy-Schwarz,</p>$$|(x|a)-(x_n|a)| = |(x-x_n|a)|\leqslant\|x-x_n\|\,\|a\|\xrightarrow[n\to\infty]{}0,$$<p>donc $(x|a) = \lim(x_n|a) = 0$. Ainsi $a\in\overline F^{\,\perp}$, d'où $F^\perp\subset\overline F^{\,\perp}$ et l'égalité.</p>`, rappels: ["eu-cont"] }
  ],
  piege: R`Oublier de justifier le passage à la limite : c'est la continuité de $x\mapsto(x|a)$ (Cauchy-Schwarz) qui le permet.`,
  methode: R`Propriété « fermée » ($=0$, $\leqslant$) vraie sur $F$ : elle passe à $\overline F$ par continuité.`
},
{ id: "pre-21", ...P, level: 2, time: "10 min",
  title: "L'orthogonal d'une partie est fermé",
  enonce: R`<p>Soit $A$ une partie d'un espace préhilbertien réel $E$.</p><ol><li>Montrer que $A^\perp$ est une partie fermée de $E$.</li><li>Montrer que $A$ et $\overline A$ ont le même orthogonal.</li></ol>`,
  decode: { donnees: [R`$A^\perp = \bigcap_{a\in A}\{x : (a|x) = 0\}$.`], but: R`Écrire $A^\perp$ comme intersection de noyaux de formes linéaires continues.`, cles: {} },
  steps: [
    { t: "1) Intersection de fermés", h: R`<p>$\varphi_a : x\mapsto(a|x)$ est continue ; $\ker\varphi_a = \varphi_a^{-1}(\{0\})$.</p>`, b: R`<p>Pour $a\in A$, la forme linéaire $\varphi_a : x\mapsto(a|x)$ est continue, car lipschitzienne : $|\varphi_a(x)-\varphi_a(y)| = |(a|x-y)|\leqslant\|a\|\,\|x-y\|$ (Cauchy-Schwarz). Son noyau $\varphi_a^{-1}(\{0\})$ est l'image réciproque du fermé $\{0\}$ par une application continue : il est fermé. Donc</p>$$A^\perp = \bigcap_{a\in A}\ker\varphi_a$$<p>est une intersection de fermés : c'est un fermé (si $A = \emptyset$, $A^\perp = E$ est fermé aussi).</p>`, rappels: ["eu-cont"] },
    { t: "2) A et son adhérence", h: R`<p>Même raisonnement que pour un sous-espace : $\overline A^{\,\perp}\subset A^\perp$, puis passage à la limite.</p>`, b: R`<p>$A\subset\overline A$ donne $\overline A^{\,\perp}\subset A^\perp$. Réciproquement, soit $x\in A^\perp$ : alors $A\subset\{x\}^\perp = \ker\varphi_x$. Ce dernier ensemble est fermé (question 1), donc il contient l'adhérence de $A$ : $\overline A\subset\{x\}^\perp$, c'est-à-dire $x\in\overline A^{\,\perp}$. D'où $A^\perp = \overline A^{\,\perp}$.</p>` }
  ],
  piege: R`$A$ n'est qu'une partie, pas un sous-espace : l'argument doit éviter toute linéarité sur $A$, d'où l'emploi de $\{x\}^\perp$ fermé.`,
  methode: R`Un fermé qui contient $A$ contient $\overline A$ : c'est souvent plus rapide que les suites.`
},
{ id: "pre-22", ...P, level: 2, time: "20 min",
  title: "Convergence faible dans un espace préhilbertien",
  enonce: R`<p>Soit $E$ un espace préhilbertien réel. On dit que $(x_n)$ <b>converge faiblement</b> vers $x\in E$ si, pour tout $y\in E$, $(x_n|y)\xrightarrow[n\to\infty]{}(x|y)$.</p><ol><li>Montrer qu'une limite faible, si elle existe, est unique.</li><li>Montrer que la convergence en norme entraîne la convergence faible vers la même limite.</li><li>Montrer la réciproque lorsque $E$ est de dimension finie.</li></ol>`,
  decode: { donnees: [R`Le seul vecteur orthogonal à tout $E$ est $0$.`], but: R`Unicité par différence ; Cauchy-Schwarz pour 2) ; coordonnées en base orthonormée pour 3).`, cles: {} },
  steps: [
    { t: "1) Unicité", h: R`<p>Deux limites $x,x'$ : $(x-x'|y) = 0$ pour tout $y$, prendre $y = x-x'$.</p>`, b: R`<p>Si $(x_n)$ converge faiblement vers $x$ et vers $x'$, par différence des limites, pour tout $y$ : $(x|y)-(x'|y) = \lim\big((x_n|y)-(x_n|y)\big) = 0$, donc $(x-x'|y) = 0$. Avec $y = x-x'$ : $\|x-x'\|^2 = 0$, donc $x = x'$.</p>` },
    { t: "2) Norme ⇒ faible", h: R`<p>$|(x_n|y)-(x|y)|\leqslant\|x_n-x\|\,\|y\|$.</p>`, b: R`<p>Si $\|x_n-x\|\to0$, pour tout $y$, par Cauchy-Schwarz :</p>$$|(x_n|y)-(x|y)| = |(x_n-x|y)|\leqslant\|x_n-x\|\,\|y\|\xrightarrow[n\to\infty]{}0.$$<p>Donc $(x_n)$ converge faiblement vers $x$.</p>`, rappels: ["eu-cs"] },
    { t: "3) Faible ⇒ norme en dimension finie", h: R`<p>Base orthonormée $(e_1,\dots,e_p)$ : $\|x_n-x\|^2 = \sum_k(e_k|x_n-x)^2$.</p>`, b: R`<p>Soit $(e_1,\dots,e_p)$ une base orthonormée de $E$. Si $(x_n)$ converge faiblement vers $x$, alors pour chaque $k$, $(e_k|x_n)\to(e_k|x)$ (prendre $y = e_k$). Donc</p>$$\|x_n-x\|^2 = \sum_{k=1}^p(e_k|x_n-x)^2 = \sum_{k=1}^p\big((e_k|x_n)-(e_k|x)\big)^2\xrightarrow[n\to\infty]{}0,$$<p>somme finie de $p$ termes qui tendent vers $0$. Donc $x_n\to x$ en norme.</p>`, rappels: ["eu-bon"] }
  ],
  piege: R`En dimension infinie la réciproque est fausse : dans $\ell^2$, la suite $(\delta_n)$ des vecteurs de base converge faiblement vers $0$ (car $(\delta_n|y) = y_n\to0$) alors que $\|\delta_n\| = 1$.`,
  methode: R`En dimension finie, tout se ramène à un nombre fini de coordonnées dans une base orthonormée.`
},
{ id: "pre-23", ...P, level: 2, time: "15 min",
  title: "Orthogonal des polynômes dans C([a, b]) par Weierstrass",
  enonce: R`<p>On munit $E = \mathcal C([a,b],\mathbb R)$ ($a\lt b$) du produit scalaire $(f|g) = \int_a^bf(t)g(t)\,dt$. Soit $F$ le sous-espace des fonctions polynomiales. En utilisant le théorème de Weierstrass, montrer que $F^\perp = \{0\}$.</p>`,
  decode: { donnees: [R`$f\in F^\perp$ : $\int_afP = 0$ pour tout polynôme $P$.`], but: R`Écrire $\int f^2 = \int f(f-P)$ et rendre ce terme petit.`, cles: {} },
  steps: [
    { t: "Insérer un polynôme", h: R`<p>$\int_a^bf^2 = \int_a^bf(f-P)+\int_a^bfP$.</p>`, b: R`<p>Soit $f\in F^\perp$ et $\varepsilon>0$. Par Weierstrass, il existe $P\in\mathbb R[X]$ avec $\|f-P\|_\infty\leqslant\varepsilon$. Comme $\int_a^bfP = 0$ :</p>$$\int_a^bf^2 = \int_a^bf(f-P)+\int_a^bfP = \int_a^bf(f-P).$$`, rappels: ["eu-weier"] },
    { t: "Majorer et conclure", h: R`<p>$\big|\int f(f-P)\big|\leqslant(b-a)\|f\|_\infty\varepsilon$.</p>`, b: R`<p>$$0\leqslant\int_a^bf^2\leqslant\int_a^b|f|\,|f-P|\leqslant(b-a)\|f\|_\infty\,\varepsilon.$$<p>C'est vrai pour tout $\varepsilon>0$, donc $\int_a^bf^2 = 0$. La fonction $f^2$ est continue, positive, d'intégrale nulle : $f = 0$. Donc $F^\perp\subset\{0\}$, et $F^\perp = \{0\}$.</p>`, rappels: ["eu-intnulle"] }
  ],
  piege: R`$F^\perp = \{0\}$ ne signifie pas $F = E$ : $F$ est seulement dense dans $E$. On n'a donc pas $E = F\oplus F^\perp$.`,
  methode: R`Pour montrer qu'un vecteur orthogonal à une partie dense est nul : l'approcher par des éléments de la partie et écrire $\|f\|^2 = (f|f-P)$.`
},
{ id: "pre-24", ...P, level: 3, time: "30 min",
  title: "Orthogonal de C²([0, 1]) dans C([0, 1]) (CCINP)",
  enonce: R`<p>Soit $F$ un sous-espace vectoriel d'un espace préhilbertien $E$.</p><ol><li>Montrer que $F\cap F^\perp = \{0_E\}$ et que $F\subset(F^\perp)^\perp$.</li></ol><p>On considère maintenant $E = \mathcal C([0,1],\mathbb R)$ muni de $(f|g) = \int_0^1f(t)g(t)\,dt$, et $F = \mathcal C^2([0,1],\mathbb R)$.</p><ol start="2"><li>Soit $f\in E$. Montrer qu'il existe une unique $g\in F$ telle que $g'' = f$ et $g(0) = g(1) = 0$.</li><li>En déduire $F^\perp$ puis $(F^\perp)^\perp$.</li></ol>`,
  decode: { donnees: [R`Taylor avec reste intégral : $g(x) = g(0)+xg'(0)+\int_0^x(x-t)g''(t)dt$.`], but: R`Construire $g$ puis tester $f\in F^\perp$ contre ce $g$.`, cles: {} },
  steps: [
    { t: "1) Propriétés générales", h: R`<p>$x\in F\cap F^\perp\Rightarrow(x|x) = 0$.</p>`, b: R`<p>Si $x\in F\cap F^\perp$, $x$ est orthogonal à lui-même : $\|x\|^2 = (x|x) = 0$, donc $x = 0$. Et pour $x\in F$, $x$ est orthogonal à tout $y\in F^\perp$ (par définition de $F^\perp$), donc $x\in(F^\perp)^\perp$.</p>`, rappels: ["eu-orth"] },
    { t: "2) Analyse", h: R`<p>Taylor reste intégral en $0$ avec $g(0) = 0$, $g'' = f$ ; la condition $g(1) = 0$ fixe $g'(0)$.</p>`, b: R`<p>Si $g$ convient, la formule de Taylor avec reste intégral donne, pour $x\in[0,1]$ :</p>$$g(x) = g(0)+xg'(0)+\int_0^x(x-t)g''(t)\,dt = xg'(0)+\int_0^x(x-t)f(t)\,dt.$$<p>En $x = 1$ : $0 = g'(0)+\int_0^1(1-t)f(t)dt$, ce qui impose $g'(0) = -\int_0^1(1-t)f(t)dt$. Donc nécessairement</p>$$g(x) = \int_0^x(x-t)f(t)\,dt-x\int_0^1(1-t)f(t)\,dt :$$<p>il y a au plus une solution.</p>` },
    { t: "2) Synthèse", h: R`<p>Écrire $\int_0^x(x-t)f(t)dt = x\int_0^xf-\int_0^xtf(t)dt$ et dériver.</p>`, b: R`<p>Définissons $g$ par la formule ci-dessus. Clairement $g(0) = 0$ et $g(1) = \int_0^1(1-t)f-\int_0^1(1-t)f = 0$. Ensuite</p>$$g(x) = x\int_0^xf(t)dt-\int_0^xtf(t)dt-x\int_0^1(1-t)f(t)dt.$$<p>Comme $f$ est continue, $x\mapsto\int_0^xf$ et $x\mapsto\int_0^xtf(t)dt$ sont $\mathcal C^1$ de dérivées $f$ et $xf(x)$. Donc $g$ est $\mathcal C^1$ et</p>$$\begin{aligned}g'(x) &= \int_0^xf+xf(x)-xf(x)-\int_0^1(1-t)f\\ &= \int_0^xf(t)dt-\int_0^1(1-t)f(t)dt.\end{aligned}$$<p>Puis $g'$ est $\mathcal C^1$ avec $g'' = f$ continue : $g\in\mathcal C^2$, et $g$ est l'unique solution.</p>` },
    { t: "3) F⊥ = {0}", h: R`<p>Pour $f\in F^\perp$ et $g$ associée : $0 = (f|g) = \int_0^1g''g$, puis intégration par parties.</p>`, b: R`<p>Soit $f\in F^\perp$ et $g\in F$ donnée par 2). Alors $0 = (f|g) = \int_0^1g''(t)g(t)\,dt$. Par parties ($g,g'$ de classe $\mathcal C^1$) :</p>$$\int_0^1g''g = \big[g'g\big]_0^1-\int_0^1g'^2 = 0-\int_0^1g'^2,$$<p>car $g(0) = g(1) = 0$. Donc $\int_0^1g'^2 = 0$ ; $g'^2$ continue positive d'intégrale nulle, donc $g' = 0$, puis $f = g'' = 0$. Ainsi</p><div class="sbox">$$F^\perp = \{0\},\qquad(F^\perp)^\perp = \{0\}^\perp = E.$$</div><p>Comme $F\neq E$ (la fonction $t\mapsto|t-\frac12|$ est continue mais pas dérivable), on a $F\subsetneq(F^\perp)^\perp$ : l'inclusion de 1) est stricte.</p>`, rappels: ["eu-intnulle"] }
  ],
  piege: R`L'analyse ne prouve que l'unicité ; il faut une synthèse (vérifier $g\in\mathcal C^2$, $g'' = f$, conditions aux bords) pour l'existence.`,
  methode: R`Pour montrer $F^\perp = \{0\}$ : associer à $f$ un élément $g\in F$ lié à $f$ (ici $g'' = f$) puis exploiter $(f|g) = 0$ par intégration par parties.`
},
{ id: "pre-25", ...P, level: 4, time: "35 min",
  title: "Un hyperplan fermé dont l'orthogonal est nul",
  enonce: R`<p>Soit $E$ un espace préhilbertien réel.</p><ol><li>Montrer que pour tout sous-espace vectoriel $F$ de $E$ : $\overline F\subset(F^\perp)^\perp$.</li></ol><p>On montre que cette inclusion peut être stricte. Soit $E = \mathbb R[X]$ muni de $(P|Q) = \int_{-1}^1P(t)Q(t)\,dt$, et</p>$$H = \Big\{P\in\mathbb R[X] : \int_{-1}^1|t|P(t)\,dt = 0\Big\}.$$<ol start="2"><li>Montrer que $H$ est un hyperplan fermé de $E$.</li><li>Soit $Q\in H^\perp$. Montrer que pour tout $P\in\mathbb R[X]$ : $\int_{-1}^1PQ = \Big(\int_{-1}^1|t|P(t)dt\Big)\Big(\int_{-1}^1Q(t)dt\Big)$.</li><li>Montrer que $H^\perp = \{0\}$ et conclure.</li></ol>`,
  decode: { donnees: [R`$\int_{-1}^1|t|\,dt = 1$ ; $|t|$ n'est pas un polynôme.`], but: R`$H = \ker\varphi$ avec $\varphi$ continue ; pour $Q\in H^\perp$, montrer que $Q-c|t|$ est orthogonal à tous les polynômes.`, cles: {} },
  steps: [
    { t: "1) Inclusion générale", h: R`<p>$(F^\perp)^\perp$ est un fermé contenant $F$.</p>`, b: R`<p>$F\subset(F^\perp)^\perp$ (tout $x\in F$ est orthogonal à $F^\perp$), et un orthogonal est toujours fermé (intersection de noyaux de formes linéaires continues). Donc $(F^\perp)^\perp$ est un fermé contenant $F$ : il contient $\overline F$.</p>`, rappels: ["eu-orth", "eu-cont"] },
    { t: "2) H hyperplan fermé", h: R`<p>$\varphi(P) = \int_{-1}^1|t|P(t)dt$ ; Cauchy-Schwarz : $|\varphi(P)|\leqslant\sqrt{\int t^2}\,\|P\|$.</p>`, b: R`<p>$\varphi : P\mapsto\int_{-1}^1|t|P(t)dt$ est une forme linéaire, non nulle car $\varphi(1) = \int_{-1}^1|t|dt = 1$. Donc $H = \ker\varphi$ est un hyperplan. Par Cauchy-Schwarz pour les intégrales :</p>$$|\varphi(P)|\leqslant\Big(\int_{-1}^1t^2dt\Big)^{1/2}\Big(\int_{-1}^1P^2\Big)^{1/2} = \sqrt{\tfrac23}\,\|P\|.$$<p>$\varphi$ est linéaire et lipschitzienne, donc continue, et $H = \varphi^{-1}(\{0\})$ est fermé.</p>`, rappels: ["eu-cs"] },
    { t: "3) La formule", h: R`<p>$P-\varphi(P)\cdot1\in H$ puisque $\varphi(1) = 1$.</p>`, b: R`<p>Soit $P\in\mathbb R[X]$. Comme $\varphi(1) = 1$, $\varphi\big(P-\varphi(P)\cdot1\big) = \varphi(P)-\varphi(P) = 0$ : $P-\varphi(P)\in H$. Pour $Q\in H^\perp$ : $(P-\varphi(P)\cdot1\,|\,Q) = 0$, soit</p>$$\int_{-1}^1PQ = \varphi(P)\int_{-1}^1Q = \Big(\int_{-1}^1|t|P(t)dt\Big)\Big(\int_{-1}^1Q\Big).$$` },
    { t: "4) H⊥ = {0}", h: R`<p>Poser $c = \int_{-1}^1Q$ : la fonction continue $h = Q-c|t|$ est orthogonale (au sens de $\int_{-1}^1$) à tous les polynômes. Weierstrass.</p>`, b: R`<p>Soit $Q\in H^\perp$ et $c = \int_{-1}^1Q$. La formule 3) s'écrit $\int_{-1}^1P(t)\big(Q(t)-c|t|\big)dt = 0$ pour tout polynôme $P$. La fonction $h : t\mapsto Q(t)-c|t|$ est continue sur $[-1,1]$ et orthogonale à tous les polynômes pour le produit scalaire $\int_{-1}^1$ sur $\mathcal C([-1,1])$ : par le théorème de Weierstrass (voir l'exercice « Orthogonal des polynômes dans $\mathcal C([a,b])$ »), $h = 0$, c'est-à-dire</p>$$Q(t) = c|t|\quad\text{pour tout }t\in[-1,1].$$<p>Si $c\neq0$, la fonction $|t|$ serait polynomiale sur $[-1,1]$, donc dérivable en $0$ : absurde. Donc $c = 0$, puis $Q = 0$ sur $[-1,1]$, donc $Q = 0$. Ainsi $H^\perp = \{0\}$.</p>`, rappels: ["eu-weier"] },
    { t: "Conclusion", h: R`<p>$\overline H = H$ et $(H^\perp)^\perp = E$.</p>`, b: R`<p>$H$ est fermé, donc $\overline H = H$, et $(H^\perp)^\perp = \{0\}^\perp = \mathbb R[X]$. Comme $1\notin H$ :</p><div class="sbox">$$\overline H = H\subsetneq\mathbb R[X] = (H^\perp)^\perp.$$</div><p>L'inclusion de 1) est stricte, même pour un hyperplan fermé : $\mathbb R[X]$ n'est pas complet et le « représentant » $|t|$ de $\varphi$ n'est pas dans l'espace.</p>` }
  ],
  piege: R`On pourrait croire que l'orthogonal d'un hyperplan fermé est une droite (le théorème de Riesz) : c'est faux ici, car le vecteur qui représenterait $\varphi$ serait $|t|$, qui n'est pas un polynôme.`,
  methode: R`Forme linéaire $\varphi(P) = (w|P)$ avec $w$ hors de l'espace : son noyau est fermé mais d'orthogonal nul. C'est la façon standard de casser $F = F^{\perp\perp}$.`
},
{ id: "pre-26", ...P, level: 1, time: "10 min",
  title: "La boule unité est strictement convexe",
  enonce: R`<p>Soit $B$ la boule unité fermée d'un espace préhilbertien réel. Montrer que pour tous $x\neq y$ dans $B$ et tout $t\in]0,1[$ : $\|(1-t)x+ty\|\lt1$.</p>`,
  decode: { donnees: [R`Égalité dans l'inégalité triangulaire $\|u+v\| = \|u\|+\|v\|$ ssi $u,v$ positivement liés.`], but: R`Inégalité triangulaire, puis étude du cas d'égalité.`, cles: {} },
  steps: [
    { t: "Inégalité large", h: R`<p>Inégalité triangulaire.</p>`, b: R`<p>$\|(1-t)x+ty\|\leqslant(1-t)\|x\|+t\|y\|\leqslant(1-t)+t = 1$.</p>` },
    { t: "Cas d'égalité", h: R`<p>En norme euclidienne, $\|u+v\| = \|u\|+\|v\|$ impose $u,v$ positivement liés.</p>`, b: R`<p>Supposons $\|(1-t)x+ty\| = 1$. Alors les deux inégalités sont des égalités : $(1-t)\|x\|+t\|y\| = 1$ avec $\|x\|,\|y\|\leqslant1$ et $t\in]0,1[$ force $\|x\| = \|y\| = 1$. Ensuite $\|u+v\| = \|u\|+\|v\|$ pour $u = (1-t)x$, $v = ty$ ; en élevant au carré : $(u|v) = \|u\|\|v\|$, cas d'égalité de Cauchy-Schwarz avec signe $+$ : $u$ et $v$ sont positivement liés, donc $x = \lambda y$ avec $\lambda\geqslant0$. Comme $\|x\| = \|y\| = 1$, $\lambda = 1$ et $x = y$ : exclu. Donc l'inégalité est stricte.</p>`, rappels: ["eu-cs"] }
  ],
  piege: R`Le résultat est faux pour d'autres normes : pour $\|\cdot\|_\infty$ sur $\mathbb R^2$, $x = (1,1)$, $y = (1,-1)$ donnent $\|\frac{x+y}2\|_\infty = 1$.`,
  methode: R`Stricte convexité d'une norme euclidienne = cas d'égalité de Cauchy-Schwarz.`
},
{ id: "pre-27", ...P, level: 3, time: "20 min",
  title: "Sommes de vecteurs avec signes aléatoires",
  enonce: R`<p>Soient $e_1,\dots,e_n$ des vecteurs d'un espace euclidien $E$, et</p>$$M = \max_{(\varepsilon_1,\dots,\varepsilon_n)\in\{-1,1\}^n}\Big\|\sum_{k=1}^n\varepsilon_ke_k\Big\|.$$<ol><li>Soient $X_1,\dots,X_n$ des variables aléatoires deux à deux indépendantes, uniformes sur $\{-1,1\}$. Montrer que $\mathbb E\Big(\big\|\sum_{k=1}^nX_ke_k\big\|^2\Big) = \sum_{k=1}^n\|e_k\|^2$.</li><li>En déduire que $\sum_{k=1}^n\|e_k\|^2\leqslant M^2$.</li></ol>`,
  decode: { donnees: [R`$\mathbb E(X_k) = 0$, $X_k^2 = 1$.`], but: R`Développer la norme au carré, utiliser la linéarité de l'espérance et $\mathbb E(X_kX_l) = \delta_{kl}$.`, cles: {} },
  steps: [
    { t: "1) Développer", h: R`<p>$\|\sum X_ke_k\|^2 = \sum_{k,l}X_kX_l(e_k|e_l)$.</p>`, b: R`<p>Par bilinéarité :</p>$$\Big\|\sum_kX_ke_k\Big\|^2 = \sum_{k=1}^n\sum_{l=1}^nX_kX_l(e_k|e_l).$$<p>Les variables sont finies (valeurs bornées) ; par linéarité de l'espérance :</p>$$\mathbb E\Big(\Big\|\sum_kX_ke_k\Big\|^2\Big) = \sum_{k,l}\mathbb E(X_kX_l)(e_k|e_l).$$` },
    { t: "1) Calcul de E(XₖXₗ)", h: R`<p>$k = l$ : $X_k^2 = 1$. $k\neq l$ : indépendance.</p>`, b: R`<p>$\mathbb E(X_k) = \frac12\cdot1+\frac12\cdot(-1) = 0$. Si $k = l$, $X_k^2 = 1$ donc $\mathbb E(X_k^2) = 1$. Si $k\neq l$, $X_k$ et $X_l$ sont indépendantes : $\mathbb E(X_kX_l) = \mathbb E(X_k)\mathbb E(X_l) = 0$. Donc $\mathbb E(X_kX_l) = \delta_{kl}$ et</p><div class="sbox">$$\mathbb E\Big(\Big\|\sum_kX_ke_k\Big\|^2\Big) = \sum_{k=1}^n\|e_k\|^2.$$</div>` },
    { t: "2) Majoration", h: R`<p>La variable $\|\sum X_ke_k\|^2$ est toujours $\leqslant M^2$.</p>`, b: R`<p>Pour toute issue $\omega$, $(X_1(\omega),\dots,X_n(\omega))\in\{-1,1\}^n$, donc $\big\|\sum X_k(\omega)e_k\big\|\leqslant M$. La variable aléatoire $\big\|\sum X_ke_k\big\|^2$ est majorée par $M^2$, et par croissance de l'espérance :</p>$$\sum_{k=1}^n\|e_k\|^2 = \mathbb E\Big(\Big\|\sum_kX_ke_k\Big\|^2\Big)\leqslant M^2.$$<p>(Une moyenne est toujours inférieure au maximum.)</p>` }
  ],
  piege: R`L'indépendance deux à deux suffit : on n'utilise que des produits de deux variables.`,
  methode: R`Méthode probabiliste : pour montrer qu'un maximum dépasse une valeur, montrer qu'une moyenne la vaut.`
},
{ id: "pre-28", ...P, level: 3, time: "20 min",
  title: "Le même résultat par récurrence",
  enonce: R`<p>Soient $x_1,\dots,x_n$ des vecteurs d'un espace préhilbertien réel $E$ et $M\in\mathbb R$ tels que pour tout $(\varepsilon_1,\dots,\varepsilon_n)\in\{-1,1\}^n$, $\big\|\sum_{k=1}^n\varepsilon_kx_k\big\|\leqslant M$. Montrer, par récurrence sur $n$, que $\sum_{k=1}^n\|x_k\|^2\leqslant M^2$.</p>`,
  decode: { donnees: [R`Identité du parallélogramme : $\|x+y\|^2+\|x-y\|^2 = 2\|x\|^2+2\|y\|^2$.`], but: R`Traiter $n = 2$, puis l'utiliser pour passer de $n$ à $n+1$.`, cles: {} },
  steps: [
    { t: "Le cas de deux vecteurs", h: R`<p>Selon le signe de $(x|y)$, l'un des deux développements suffit.</p>`, b: R`<p>Supposons $\|x+y\|\leqslant M$ et $\|x-y\|\leqslant M$. Alors</p>$$\|x\|^2+2(x|y)+\|y\|^2\leqslant M^2\quad\text{et}\quad\|x\|^2-2(x|y)+\|y\|^2\leqslant M^2.$$<p>Si $(x|y)\geqslant0$, la première donne $\|x\|^2+\|y\|^2\leqslant M^2$ ; si $(x|y)\leqslant0$, c'est la seconde. Dans tous les cas $\|x\|^2+\|y\|^2\leqslant M^2$. (Ou : demi-somme et parallélogramme.)</p>` },
    { t: "Hérédité", h: R`<p>Appliquer le cas $n = 2$ à $x = \sum_{k\leqslant n}\varepsilon_kx_k$ et $y = x_{n+1}$.</p>`, b: R`<p>Le cas $n = 1$ est immédiat. Supposons le résultat vrai au rang $n$ et l'hypothèse vérifiée pour $x_1,\dots,x_{n+1}$. Fixons $(\varepsilon_1,\dots,\varepsilon_n)$ et posons $x = \sum_{k=1}^n\varepsilon_kx_k$, $y = x_{n+1}$. L'hypothèse avec $\varepsilon_{n+1} = \pm1$ donne $\|x\pm y\|\leqslant M$, d'où par le cas $n = 2$ :</p>$$\Big\|\sum_{k=1}^n\varepsilon_kx_k\Big\|^2\leqslant M^2-\|x_{n+1}\|^2.$$<p>En particulier $M^2-\|x_{n+1}\|^2\geqslant0$, et pour tous signes $\big\|\sum_{k\leqslant n}\varepsilon_kx_k\big\|\leqslant\sqrt{M^2-\|x_{n+1}\|^2}$. L'hypothèse de récurrence avec $M' = \sqrt{M^2-\|x_{n+1}\|^2}$ donne $\sum_{k=1}^n\|x_k\|^2\leqslant M^2-\|x_{n+1}\|^2$, soit $\sum_{k=1}^{n+1}\|x_k\|^2\leqslant M^2$.</p>` }
  ],
  piege: R`Bien vérifier que $M^2-\|x_{n+1}\|^2\geqslant0$ avant d'en prendre la racine.`,
  methode: R`Inégalité sur $2^n$ choix de signes : récurrence en isolant le dernier vecteur, ou moyenne probabiliste (exercice précédent).`
},
{ id: "pre-29", ...P, level: 3, time: "20 min",
  title: "Points mutuellement éloignés et rayon d'une boule",
  enonce: R`<p>Soit $(x_1,\dots,x_n)$ une famille de vecteurs d'un espace préhilbertien réel $E$ ($n\geqslant1$).</p><ol><li>Montrer que $\displaystyle\sum_{1\leqslant i\lt j\leqslant n}\|x_i-x_j\|^2 = n\sum_{i=1}^n\|x_i\|^2-\Big\|\sum_{i=1}^nx_i\Big\|^2$.</li><li>On suppose $\|x_i-x_j\|\geqslant1$ pour tous $i\neq j$. Montrer que toute boule fermée contenant $x_1,\dots,x_n$ a un rayon au moins égal à $\sqrt{\frac{n-1}{2n}}$.</li></ol>`,
  decode: { donnees: [R`$\|\sum x_i\|^2 = \sum\|x_i\|^2+2\sum_{i\lt j}(x_i|x_j)$.`], but: R`Développer, compter combien de fois chaque $\|x_i\|^2$ apparaît, puis appliquer 1) aux $x_i-a$.`, cles: {} },
  steps: [
    { t: "1) Développement", h: R`<p>$\|x_i-x_j\|^2 = \|x_i\|^2+\|x_j\|^2-2(x_i|x_j)$ ; chaque indice apparaît dans $n-1$ paires.</p>`, b: R`<p>$$\sum_{i\lt j}\|x_i-x_j\|^2 = \sum_{i\lt j}\big(\|x_i\|^2+\|x_j\|^2\big)-2\sum_{i\lt j}(x_i|x_j).$$<p>Dans $\sum_{i\lt j}(\|x_i\|^2+\|x_j\|^2)$, l'indice $k$ apparaît dans toutes les paires qui le contiennent, soit $n-1$ paires : cette somme vaut $(n-1)\sum_k\|x_k\|^2$. D'autre part $2\sum_{i\lt j}(x_i|x_j) = \|\sum x_i\|^2-\sum\|x_i\|^2$. Donc</p>$$\begin{aligned}\sum_{i\lt j}\|x_i-x_j\|^2 &= (n-1)\sum\|x_i\|^2-\Big\|\sum x_i\Big\|^2+\sum\|x_i\|^2\\ &= n\sum_{i=1}^n\|x_i\|^2-\Big\|\sum_{i=1}^nx_i\Big\|^2.\end{aligned}$$` },
    { t: "2) Appliquer aux xᵢ − a", h: R`<p>$B$ de centre $a$ et rayon $r$ ; les différences $x_i-x_j$ ne changent pas.</p>`, b: R`<p>Soit $B$ de centre $a$, de rayon $r$, contenant les $x_i$. Appliquons 1) aux vecteurs $y_i = x_i-a$, qui vérifient $y_i-y_j = x_i-x_j$ :</p>$$\begin{aligned}\sum_{i\lt j}\|x_i-x_j\|^2 &= n\sum_i\|x_i-a\|^2-\Big\|\sum_i(x_i-a)\Big\|^2\\ &\leqslant  n\sum_{i=1}^n\|x_i-a\|^2\\ &\leqslant  n\cdot nr^2.\end{aligned}$$<p>Le membre de gauche est $\geqslant$ le nombre de paires, $\binom n2 = \frac{n(n-1)}2$. Donc</p>$$\frac{n(n-1)}2\leqslant n^2r^2,\qquad r^2\geqslant\frac{n-1}{2n},\qquad r\geqslant\sqrt{\frac{n-1}{2n}}.$$` }
  ],
  piege: R`Le terme $-\|\sum(x_i-a)\|^2$ est négatif : on le majore par $0$, ce qui va dans le bon sens.`,
  methode: R`Identités de type « somme des distances au carré » : développer et compter les occurrences ; le choix du centre $a$ libre permet de translater.`
},
{ id: "pre-30", ...P, level: 2, time: "15 min",
  title: "Une quantité indépendante des bases orthonormées",
  enonce: R`<p>Soient $e = (e_i)_{1\leqslant i\leqslant n}$ et $f = (f_j)_{1\leqslant j\leqslant n}$ deux bases orthonormées d'un espace euclidien $E$ et $u\in\mathcal L(E)$. On pose $A = \sum_{i=1}^n\sum_{j=1}^n\big(f_i|u(e_j)\big)^2$. Montrer que $A$ ne dépend pas des bases orthonormées choisies.</p>`,
  decode: { donnees: [R`$\|x\|^2 = \sum_i(f_i|x)^2$ en base orthonormée.`], but: R`Éliminer $f$ (Parseval) puis écrire $A = \mathrm{tr}({}^tMM)$.`, cles: {} },
  steps: [
    { t: "Éliminer f", h: R`<p>Sommer d'abord sur $i$.</p>`, b: R`<p>Pour $j$ fixé, $f$ étant orthonormée, $\sum_i(f_i|u(e_j))^2 = \|u(e_j)\|^2$. Donc $A = \sum_{j=1}^n\|u(e_j)\|^2$, qui ne dépend pas de $f$. On peut donc aussi bien prendre $f = e$ : $A = \sum_{i,j}(e_i|u(e_j))^2$.</p>`, rappels: ["eu-bon"] },
    { t: "Éliminer e", h: R`<p>$M = \mathrm{Mat}_e(u)$, $m_{ij} = (e_i|u(e_j))$ : $A = \mathrm{tr}({}^tMM)$. Changement de base orthonormée : $M' = {}^tPMP$.</p>`, b: R`<p>La matrice $M$ de $u$ dans $e$ a pour coefficients $m_{ij} = (e_i|u(e_j))$, donc $A = \sum_{i,j}m_{ij}^2 = \mathrm{tr}({}^tMM)$. Si $e'$ est une autre base orthonormée, la matrice de passage $P$ est orthogonale ($P^{-1} = {}^tP$) et $M' = {}^tPMP$. Alors</p>$$\begin{aligned}\mathrm{tr}({}^tM'M') &= \mathrm{tr}({}^tP\,{}^tMP\,{}^tPMP)\\ &= \mathrm{tr}({}^tP\,{}^tMMP)\\ &= \mathrm{tr}({}^tMM\,P\,{}^tP)\\ &= \mathrm{tr}({}^tMM).\end{aligned}$$<p>$A$ ne dépend ni de $f$ ni de $e$ : c'est le carré de la norme de Frobenius de $u$.</p>`, rappels: ["eu-tr"] }
  ],
  piege: R`Le changement de base s'écrit $P^{-1}MP$ ; ce n'est $\,{}^tPMP$ que parce que $P$ est orthogonale (bases orthonormées).`,
  methode: R`Pour montrer qu'une quantité est intrinsèque : l'écrire comme un invariant (trace, déterminant) d'une matrice qui change par conjugaison.`
},
{ id: "pre-31", ...P, level: 2, time: "20 min",
  title: "Existence de l'adjoint, noyau et image",
  enonce: R`<p>Soit $u$ un endomorphisme d'un espace euclidien $E$.</p><ol><li>Montrer qu'il existe un unique endomorphisme $v$ de $E$ tel que $(u(x)|y) = (x|v(y))$ pour tous $x,y\in E$. (On pourra raisonner sur les matrices dans une base orthonormée.)</li><li>Exprimer $\ker v$ et $\mathrm{Im}\,v$ à l'aide de $\mathrm{Im}\,u$ et $\ker u$.</li></ol>`,
  decode: { donnees: [R`En base orthonormée $e$ : $(x|y) = {}^tXY$, et $b_{ij} = (e_i|v(e_j))$.`], but: R`Analyse-synthèse : $B = {}^tA$. Puis double inclusion et dimensions.`, cles: {} },
  steps: [
    { t: "1) Analyse", h: R`<p>$b_{ij} = (e_i|v(e_j)) = (u(e_i)|e_j) = a_{ji}$.</p>`, b: R`<p>Soit $e$ une base orthonormée, $A = \mathrm{Mat}_e(u)$. Si $v$ convient et $B = \mathrm{Mat}_e(v)$, alors</p>$$b_{ij} = (e_i|v(e_j)) = (u(e_i)|e_j) = a_{ji},$$<p>donc $B = {}^tA$ : $v$ est unique.</p>`, rappels: ["eu-bon"] },
    { t: "1) Synthèse", h: R`<p>$(AX)\cdot Y = {}^tX{}^tAY$.</p>`, b: R`<p>Soit $v$ l'endomorphisme de matrice $\,{}^tA$ dans $e$. Avec $X,Y$ les colonnes de coordonnées :</p>$$(u(x)|y) = {}^t(AX)Y = {}^tX\,{}^tAY = (x|v(y)).$$<p>$v$ convient : c'est l'adjoint $u^*$.</p>` },
    { t: "2) ker v = (Im u)⊥", h: R`<p>Double inclusion.</p>`, b: R`<p>Si $y\in\ker v$ et $x = u(a)\in\mathrm{Im}\,u$ : $(x|y) = (u(a)|y) = (a|v(y)) = 0$, donc $\ker v\subset(\mathrm{Im}\,u)^\perp$. Si $y\in(\mathrm{Im}\,u)^\perp$ : pour tout $x$, $(x|v(y)) = (u(x)|y) = 0$, donc $v(y)$ est orthogonal à tout $E$ : $v(y) = 0$. D'où</p><div class="sbox">$$\ker v = (\mathrm{Im}\,u)^\perp.$$</div>` },
    { t: "2) Im v = (ker u)⊥", h: R`<p>Une inclusion puis les dimensions.</p>`, b: R`<p>Si $x\in\ker u$ et $y = v(a)$ : $(x|y) = (x|v(a)) = (u(x)|a) = 0$, donc $\mathrm{Im}\,v\subset(\ker u)^\perp$. Dimensions, avec $n = \dim E$ :</p>$$\begin{aligned}\dim\mathrm{Im}\,v &= n-\dim\ker v\\ &= n-\dim(\mathrm{Im}\,u)^\perp\\ &= \mathrm{rg}\,u\\ &= n-\dim\ker u\\ &= \dim(\ker u)^\perp.\end{aligned}$$<div class="sbox">$$\mathrm{Im}\,v = (\ker u)^\perp.$$</div>`, rappels: ["eu-adj"] }
  ],
  piege: R`La matrice de l'adjoint est la transposée <b>seulement</b> en base orthonormée.`,
  methode: R`Dans un espace euclidien, pour une égalité de sous-espaces : une inclusion + égalité des dimensions.`
},
{ id: "pre-32", ...P, level: 3, time: "30 min",
  title: "Opérateur de Volterra : adjoint et valeurs propres de v*∘v",
  enonce: R`<p>Sur $E = \mathcal C([0,1],\mathbb R)$ muni de $(f|g) = \int_0^1f(x)g(x)\,dx$, on note $v(f) = F$ la primitive de $f$ nulle en $0$ : $F(x) = \int_0^xf(t)dt$.</p><ol><li>Trouver un endomorphisme $v^*$ de $E$ tel que $(v(f)|g) = (f|v^*(g))$ pour tous $f,g\in E$.</li><li>Déterminer les valeurs propres de $v^*\circ v$ et les vecteurs propres associés.</li></ol>`,
  decode: { donnees: [R`Intégration par parties avec $G(x) = \int_0^xg$.`], but: R`$v^*(g)(x) = \int_x^1g$ ; puis traduire $v^*v(f) = \lambda f$ en équation différentielle avec conditions aux bords.`, cles: {} },
  steps: [
    { t: "1) L'adjoint", h: R`<p>$\int_0^1Fg = [FG]_0^1-\int_0^1fG = \int_0^1f\,(G(1)-G)$.</p>`, b: R`<p>Soit $G(x) = \int_0^xg$. Par parties ($F,G$ de classe $\mathcal C^1$) :</p>$$\begin{aligned}\int_0^1F(x)g(x)dx &= \big[F G\big]_0^1-\int_0^1f(x)G(x)dx\\ &= F(1)G(1)-\int_0^1fG\\ &= \int_0^1f(x)\big(G(1)-G(x)\big)dx,\end{aligned}$$<p>car $F(1) = \int_0^1f$. Posons donc</p><div class="sbox">$$v^*(g)(x) = G(1)-G(x) = \int_x^1g(t)\,dt.$$</div><p>$v^*(g)$ est continue (et même $\mathcal C^1$), $v^*$ est linéaire, et $(v(f)|g) = (f|v^*(g))$.</p>` },
    { t: "2) 0 n'est pas valeur propre", h: R`<p>$v$ et $v^*$ sont injectifs (dériver).</p>`, b: R`<p>Si $v(f) = 0$, en dérivant $f = 0$ ; si $v^*(g) = 0$, en dérivant $-g = 0$. Donc $v$ et $v^*$ sont injectifs, ainsi que $v^*\circ v$ : $0$ n'est pas valeur propre.</p>` },
    { t: "2) Traduction différentielle", h: R`<p>$h = v^*v(f)$ : $h(x) = \int_x^1F$, donc $h(1) = 0$, $h' = -F$, $h'' = -f$, $h'(0) = -F(0) = 0$.</p>`, b: R`<p>Soit $\lambda\neq0$ et $f\neq0$ avec $v^*(v(f)) = \lambda f$, c'est-à-dire</p>$$\lambda f(x) = \int_x^1F(t)\,dt.$$<p>Le membre de droite est $\mathcal C^1$ de dérivée $-F$, elle-même $\mathcal C^1$ : donc $f = \frac1\lambda\int_x^1F$ est $\mathcal C^2$ et</p>$$\begin{aligned}\lambda f(1) &= 0,\qquad\lambda f'(x)\\ &= -F(x)\ \Rightarrow\ \lambda f'(0)\\ &= -F(0)\\ &= 0,\qquad\lambda f''(x)\\ &= -f(x).\end{aligned}$$<p>Ainsi $f$ vérifie $\lambda f''+f = 0$, $f'(0) = 0$, $f(1) = 0$. Réciproquement, si $f\in\mathcal C^2$ vérifie ces trois conditions, alors $\lambda f' = -F$ (les deux ont même dérivée $-f$ et valent $0$ en $0$), puis $\lambda f(x) = \lambda f(1)-\int_x^1\lambda f' = \int_x^1F$ : $v^*v(f) = \lambda f$.</p>` },
    { t: "2) Résolution", h: R`<p>$\lambda>0$ : poser $\lambda = \frac1{\omega^2}$, $f = \alpha\cos\omega x+\beta\sin\omega x$. $\lambda\lt0$ : exponentielles.</p>`, b: R`<p><b>Cas $\lambda\lt0$.</b> Avec $\lambda = -\frac1{\omega^2}$ : $f'' = \omega^2f$, $f = \alpha\,\mathrm{ch}(\omega x)+\beta\,\mathrm{sh}(\omega x)$. $f'(0) = \beta\omega = 0$ donne $\beta = 0$, puis $f(1) = \alpha\,\mathrm{ch}\,\omega = 0$ donne $\alpha = 0$ : pas de valeur propre négative.</p><p><b>Cas $\lambda>0$.</b> Avec $\lambda = \frac1{\omega^2}$, $\omega>0$ : $f''+\omega^2f = 0$, $f = \alpha\cos(\omega x)+\beta\sin(\omega x)$. $f'(0) = \beta\omega = 0$ donne $\beta = 0$, puis $f(1) = \alpha\cos\omega = 0$. Une solution non nulle existe si et seulement si $\cos\omega = 0$, soit $\omega = \frac\pi2+k\pi$ avec $k\in\mathbb N$.</p><div class="sbox"><p>Les valeurs propres de $v^*\circ v$ sont les $\displaystyle\lambda_k = \frac1{\big(k+\frac12\big)^2\pi^2} = \frac4{(2k+1)^2\pi^2}$, $k\in\mathbb N$, de vecteurs propres $x\mapsto\cos\big((k+\tfrac12)\pi x\big)$.</p></div><p>Remarque : la plus grande est $\lambda_0 = \frac4{\pi^2}$. Le texte original écrit « $\lambda = 1/\sqrt\omega$ » : c'est une coquille, la relation correcte est $\lambda = 1/\omega^2$.</p>` }
  ],
  piege: R`Oublier la condition $f'(0) = 0$, qui vient de $F(0) = 0$ : sans elle, on trouverait aussi des sinus.`,
  methode: R`Équation aux valeurs propres d'un opérateur intégral : dériver pour obtenir une équation différentielle, et récupérer les conditions aux bords en évaluant aux bornes des intégrales.`
},
{ id: "pre-33", ...P, level: 2, time: "15 min",
  title: "Adjoint de l'opérateur de primitivation",
  enonce: R`<p>Sur $E = \mathcal C([0,1],\mathbb R)$ muni de $(f|g) = \int_0^1fg$, on pose, pour $f\in E$, $T(f)(x) = \int_0^xf(t)dt$.</p><ol><li>Montrer que $T$ est un endomorphisme de $E$.</li><li>Justifier l'existence d'un endomorphisme $T^*$ de $E$ tel que $(T(f)|g) = (f|T^*(g))$ pour tous $f,g\in E$.</li></ol>`,
  decode: { donnees: [R`$T(f)$ est la primitive de $f$ nulle en $0$.`], but: R`Linéarité et continuité, puis même intégration par parties que pour Volterra.`, cles: {} },
  steps: [
    { t: "1) Un endomorphisme", h: R`<p>Théorème fondamental de l'analyse.</p>`, b: R`<p>$f$ étant continue, $T(f)$ est la primitive de $f$ qui s'annule en $0$ : elle est $\mathcal C^1$, donc continue, et $T(f)\in E$. La linéarité de l'intégrale donne $T(\lambda f+\mu g) = \lambda T(f)+\mu T(g)$. (Le texte original dit « qui s'annule en $1$ » : c'est une coquille, $T(f)(0) = 0$.)</p>` },
    { t: "2) Construction de T*", h: R`<p>Par parties avec $G(x) = -\int_x^1g$, primitive de $g$ nulle en $1$.</p>`, b: R`<p>Soit $G$ la primitive de $g$ nulle en $1$ : $G(x) = -\int_x^1g$. Par parties :</p>$$\begin{aligned}\int_0^1T(f)g &= \big[T(f)G\big]_0^1-\int_0^1fG\\ &= T(f)(1)G(1)-T(f)(0)G(0)-\int_0^1fG\\ &= -\int_0^1fG,\end{aligned}$$<p>car $G(1) = 0$ et $T(f)(0) = 0$. Il suffit donc de poser</p><div class="sbox">$$T^*(g)(x) = -G(x) = \int_x^1g(t)\,dt.$$</div><p>$T^*(g)$ est continue, $T^*$ est linéaire, et $(T(f)|g) = (f|T^*(g))$.</p>` }
  ],
  piege: R`En dimension infinie, l'adjoint n'existe pas toujours : ici on le construit explicitement.`,
  methode: R`Pour trouver l'adjoint d'un opérateur intégral : intégration par parties en choisissant la primitive qui annule le crochet.`
},
{ id: "pre-34", ...P, level: 2, time: "15 min",
  title: "Trigonaliser en base orthonormée",
  enonce: R`<p>Soit $f$ un endomorphisme trigonalisable d'un espace euclidien $E$ de dimension $n\geqslant1$. Montrer qu'il existe une base <b>orthonormée</b> de $E$ dans laquelle la matrice de $f$ est triangulaire supérieure.</p>`,
  decode: { donnees: [R`Gram-Schmidt : $\mathrm{Vect}(e'_1,\dots,e'_k) = \mathrm{Vect}(e_1,\dots,e_k)$.`], but: R`Orthonormaliser une base de trigonalisation ; la matrice de passage est triangulaire.`, cles: {} },
  steps: [
    { t: "Lecture en drapeau", h: R`<p>Matrice triangulaire supérieure dans $(e_1,\dots,e_n)$ ⟺ chaque $V_k = \mathrm{Vect}(e_1,\dots,e_k)$ est stable par $f$.</p>`, b: R`<p>Soit $e = (e_1,\dots,e_n)$ une base où $\mathrm{Mat}_e(f)$ est triangulaire supérieure. La $k$-ième colonne a des zéros sous la diagonale, c'est-à-dire $f(e_k)\in\mathrm{Vect}(e_1,\dots,e_k)$. Donc chaque $V_k = \mathrm{Vect}(e_1,\dots,e_k)$ est stable par $f$, et réciproquement une base adaptée à une suite de sous-espaces stables emboîtés donne une matrice triangulaire.</p>` },
    { t: "Gram-Schmidt conserve le drapeau", h: R`<p>$\mathrm{Vect}(e'_1,\dots,e'_k) = V_k$.</p>`, b: R`<p>Le procédé de Gram-Schmidt appliqué à $e$ donne une base orthonormée $e'$ avec $\mathrm{Vect}(e'_1,\dots,e'_k) = V_k$ pour tout $k$. Comme $V_k$ est stable : $f(e'_k)\in V_k = \mathrm{Vect}(e'_1,\dots,e'_k)$. Donc $\mathrm{Mat}_{e'}(f)$ est triangulaire supérieure.</p><p>Matriciellement : la matrice de passage $P$ de $e$ à $e'$ est triangulaire supérieure (inversible), $P^{-1}$ aussi, et $\mathrm{Mat}_{e'}(f) = P^{-1}AP$ est un produit de triangulaires supérieures.</p>`, rappels: ["eu-schmidt"] }
  ],
  piege: R`L'orthonormalisation doit se faire dans l'ordre de la base de trigonalisation ; dans un autre ordre, le drapeau est perdu.`,
  methode: R`Résultat de Schur réel : trigonalisable $\Rightarrow$ trigonalisable en base orthonormée, grâce à Gram-Schmidt.`
},
{ id: "pre-35", ...P, level: 2, time: "20 min",
  title: "L'endomorphisme x ↦ (x|a)b + (x|b)a (CCINP)",
  enonce: R`<p>Soient $E$ un espace euclidien et $(a,b)$ une famille libre de vecteurs unitaires. On définit $\varphi : x\mapsto(x|a)b+(x|b)a$.</p><ol><li>Montrer que $\varphi\in\mathcal L(E)$.</li><li>Montrer que $\ker\varphi = \mathrm{Vect}(a,b)^\perp$.</li><li>Déterminer $\mathrm{Im}\,\varphi$.</li><li>Calculer $\varphi(a+b)$ et $\varphi(a-b)$. L'endomorphisme $\varphi$ est-il diagonalisable ?</li></ol>`,
  decode: { donnees: [R`$\|a\| = \|b\| = 1$, $(a,b)$ libre.`], but: R`Liberté de $(a,b)$ pour le noyau ; rang pour l'image ; une base propre complète.`, cles: {} },
  steps: [
    { t: "1) Linéarité", h: R`<p>Linéarité du produit scalaire en $x$.</p>`, b: R`<p>$x\mapsto(x|a)$ et $x\mapsto(x|b)$ sont linéaires, donc $\varphi(\lambda x+\mu y) = \lambda\varphi(x)+\mu\varphi(y)$ : $\varphi\in\mathcal L(E)$.</p>` },
    { t: "2) Noyau", h: R`<p>$(x|a)b+(x|b)a = 0$ avec $(a,b)$ libre.</p>`, b: R`<p>Comme $(a,b)$ est libre, $(x|a)b+(x|b)a = 0$ équivaut à $(x|a) = (x|b) = 0$, c'est-à-dire $x\perp a$ et $x\perp b$ :</p>$$\ker\varphi = \{a,b\}^\perp = \mathrm{Vect}(a,b)^\perp.$$` },
    { t: "3) Image", h: R`<p>$\mathrm{Im}\,\varphi\subset\mathrm{Vect}(a,b)$ et théorème du rang.</p>`, b: R`<p>Clairement $\mathrm{Im}\,\varphi\subset\mathrm{Vect}(a,b)$. Par le théorème du rang, $\mathrm{rg}\,\varphi = n-\dim\mathrm{Vect}(a,b)^\perp = n-(n-2) = 2$. Donc $\mathrm{Im}\,\varphi = \mathrm{Vect}(a,b)$.</p>` },
    { t: "4) Vecteurs propres", h: R`<p>Poser $s = (a|b)$ ; $\varphi(a) = sb+a$, $\varphi(b) = b+sa$.</p>`, b: R`<p>Avec $s = (a|b)$ : $\varphi(a) = (a|a)b+(a|b)a = b+sa$ et $\varphi(b) = (b|a)b+(b|b)a = sb+a$. Donc</p>$$\varphi(a+b) = (1+s)(a+b),\qquad\varphi(a-b) = (s-1)(a-b).$$<p>$a+b$ et $a-b$ sont non nuls et non colinéaires (car $(a,b)$ libre), et forment une base de $\mathrm{Vect}(a,b)$. En les complétant par une base de $\ker\varphi = \mathrm{Vect}(a,b)^\perp$ (vecteurs propres pour $0$), on obtient une base de $E$ formée de vecteurs propres :</p><div class="sbox"><p>$\varphi$ est diagonalisable, de valeurs propres $1+(a|b)$, $(a|b)-1$ et $0$ (si $n\geqslant3$).</p></div><p>Par Cauchy-Schwarz strict ($a,b$ non colinéaires), $|s|\lt1$ : $1+s>0>s-1$, les deux valeurs propres non nulles sont distinctes. On pouvait aussi remarquer que $\varphi$ est symétrique ($(\varphi(x)|y) = (x|a)(b|y)+(x|b)(a|y)$ est symétrique en $x,y$) et appliquer le théorème spectral.</p>` }
  ],
  piege: R`Pour le noyau, la liberté de $(a,b)$ est indispensable : si $b = a$, $\varphi(x) = 2(x|a)a$ et le noyau est $a^\perp$.`,
  methode: R`Endomorphisme « de rang 2 » construit avec $a,b$ : chercher les vecteurs propres dans $\mathrm{Vect}(a,b)$ sous la forme $a\pm b$.`
},
{ id: "pre-36", ...P, level: 4, time: "30 min",
  title: "Extrema de (a|x)(b|x) sur la sphère unité (Mines)",
  enonce: R`<p>Soient $a,b$ deux vecteurs unitaires d'un espace euclidien $E$ de dimension $n\geqslant2$, et $S = \{x\in E : \|x\| = 1\}$. Montrer que $f : x\mapsto(a|x)(b|x)$ admet sur $S$ un minimum et un maximum, et les déterminer.</p>`,
  decode: { donnees: [R`$S$ est compacte en dimension finie, $f$ continue.`], but: R`Écrire $f$ comme différence de carrés à l'aide de $c = a+b$ et $d = a-b$, qui sont orthogonaux.`, cles: {} },
  steps: [
    { t: "Existence", h: R`<p>$S$ fermée bornée en dimension finie.</p>`, b: R`<p>$S$ est fermée (image réciproque de $\{1\}$ par la norme continue) et bornée, donc compacte en dimension finie. $f$ est continue (produit de formes linéaires continues) : elle est bornée et atteint ses bornes sur $S$.</p>` },
    { t: "Différence de carrés", h: R`<p>$uv = \frac14\big[(u+v)^2-(u-v)^2\big]$ avec $u = (a|x)$, $v = (b|x)$.</p>`, b: R`<p>Posons $c = a+b$, $d = a-b$, $s = (a|b)$. Comme $uv = \frac14[(u+v)^2-(u-v)^2]$ :</p>$$f(x) = \frac14\Big[(c|x)^2-(d|x)^2\Big].$$<p>De plus $(c|d) = \|a\|^2-\|b\|^2 = 0$, $\|c\|^2 = 2+2s$, $\|d\|^2 = 2-2s$.</p>` },
    { t: "Cas générique a ≠ ±b", h: R`<p>$c,d$ non nuls orthogonaux ; Bessel : $\frac{(c|x)^2}{\|c\|^2}+\frac{(d|x)^2}{\|d\|^2}\leqslant\|x\|^2 = 1$.</p>`, b: R`<p>Si $a\neq\pm b$, alors $c\neq0$ et $d\neq0$ ; $\big(\frac c{\|c\|},\frac d{\|d\|}\big)$ est orthonormée. Pour $x\in S$, l'inégalité de Bessel donne</p>$$\frac{(c|x)^2}{\|c\|^2}+\frac{(d|x)^2}{\|d\|^2}\leqslant1.$$<p>Donc $(c|x)^2\leqslant\|c\|^2$ et</p>$$f(x)\leqslant\frac14(c|x)^2\leqslant\frac{\|c\|^2}4 = \frac{1+s}2,$$<p>avec égalité en $x = \frac c{\|c\|}$ (alors $(d|x) = 0$ et $(c|x) = \|c\|$). De même $f(x)\geqslant-\frac14(d|x)^2\geqslant-\frac{\|d\|^2}4 = \frac{s-1}2$, avec égalité en $x = \frac d{\|d\|}$.</p>`, rappels: ["eu-dist"] },
    { t: "Cas a = ±b et conclusion", h: R`<p>$a = b$ : $f(x) = (a|x)^2\in[0,1]$, et $n\geqslant2$ donne un $x\perp a$.</p>`, b: R`<p>Si $a = b$ ($s = 1$) : $f(x) = (a|x)^2$, qui vaut au plus $1$ (Cauchy-Schwarz, atteint en $a$) et au moins $0$ (atteint en un $x\in S\cap a^\perp$, qui existe car $n\geqslant2$). Si $a = -b$ ($s = -1$) : $f(x) = -(a|x)^2$, d'extrema $0$ et $-1$. Dans les deux cas les formules générales restent valables. Finalement :</p><div class="sbox">$$\max_Sf = \frac{1+(a|b)}2,\qquad\min_Sf = \frac{(a|b)-1}2.$$</div><p>Interprétation : $f(x) = \big(x\,|\,\varphi(x)\big)/2$ avec $\varphi$ l'endomorphisme symétrique de l'exercice précédent, dont les valeurs propres extrêmes sont $1+s$ et $s-1$ (et $0$ si $n\geqslant3$).</p>` }
  ],
  piege: R`Ne pas oublier les cas dégénérés $a = \pm b$ (où $c$ ou $d$ est nul), et l'hypothèse $n\geqslant2$ qui sert pour atteindre $0$.`,
  methode: R`Forme quadratique sur la sphère : la diagonaliser à la main (ici via $a\pm b$ orthogonaux) puis appliquer Bessel ; ou utiliser le théorème spectral (valeurs propres extrêmes).`
}
]);
})();

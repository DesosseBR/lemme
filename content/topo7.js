/* Topologie des espaces vectoriels normés (Spé) : blocs « Équivalence de normes en dimension finie » et « Suites de vecteurs » (début). Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 2 };
LEMME.rappels({
  "nrm-dimfinie": { t: "Dimension finie : normes équivalentes", b: R`<p>Sur un espace de <b>dimension finie</b>, toutes les normes sont équivalentes. Conséquences :</p><ul><li>la convergence d'une suite ne dépend pas de la norme ;</li><li>elle équivaut à la convergence de chaque coordonnée dans une base ;</li><li>toute application linéaire (ou polynomiale en les coordonnées) est continue.</li></ul>` },
  "nrm-lim": { t: "Passage à la limite dans les opérations", b: R`<p>Dans $\mathcal M_n(\mathbb K)$ : si $A_k\to A$ et $B_k\to B$, alors $A_k+B_k\to A+B$, $\lambda A_k\to\lambda A$, $A_kB_k\to AB$, et les fonctions polynomiales des coefficients (trace, déterminant, mineurs) passent à la limite. Si une égalité ou une inégalité large est vraie pour tout $k$, elle reste vraie à la limite.</p>` }
});
LEMME.exercises([
{ id: "topo-113", ...P, level: 1, time: "10 min",
  title: "Toute norme sur Mₙ(ℝ) est sous-multiplicative à une constante près",
  enonce: R`<p>Soit $N$ une norme sur $\mathcal M_n(\mathbb R)$. Montrer qu'il existe $c>0$ tel que</p>$$\forall A,B\in\mathcal M_n(\mathbb R),\quad N(AB)\leqslant c\,N(A)\,N(B).$$`,
  decode: { donnees: [R`$\mathcal M_n(\mathbb R)$ est de dimension finie.`], but: R`Passer par $N_\infty(A) = \max|a_{ij}|$, qui vérifie $N_\infty(AB)\leqslant nN_\infty(A)N_\infty(B)$.`, cles: {} },
  steps: [
    { t: "Une norme commode", h: R`<p>$|(AB)_{ij}|\leqslant\sum_k|a_{ik}||b_{kj}|$.</p>`, b: R`<p>Soit $N_\infty(A) = \max_{i,j}|a_{ij}|$. Pour tous $i,j$ :</p>$$|(AB)_{ij}| = \Big|\sum_{k = 1}^na_{ik}b_{kj}\Big|\leqslant\sum_{k = 1}^nN_\infty(A)N_\infty(B) = n\,N_\infty(A)N_\infty(B).$$<p>Donc $N_\infty(AB)\leqslant n\,N_\infty(A)N_\infty(B)$.</p>` },
    { t: "Transfert par équivalence", h: R`<p>$\alpha N\leqslant N_\infty\leqslant\beta N$.</p>`, b: R`<p>En dimension finie, $N$ et $N_\infty$ sont équivalentes : il existe $\alpha,\beta>0$ avec $\alpha N\leqslant N_\infty\leqslant\beta N$. Alors</p>$$N(AB)\leqslant\frac1\alpha N_\infty(AB)\leqslant\frac n\alpha N_\infty(A)N_\infty(B)\leqslant\frac{n\beta^2}\alpha\,N(A)N(B).$$<div class="sbox"><p>$c = \dfrac{n\beta^2}\alpha$ convient.</p></div><p>Remarque : $c\,N$ est alors une norme sous-multiplicative ($cN(AB)\leqslant cN(A)\cdot cN(B)$).</p>`, rappels: ["nrm-dimfinie"] }
  ],
  piege: R`La constante $c$ ne peut pas toujours valoir $1$ : pour $N = N_\infty$ et $A = B = $ la matrice remplie de $1$, $N_\infty(A^2) = n$.`,
  methode: R`Propriété « à constante près » en dimension finie : la prouver pour une norme commode, puis la transférer par équivalence des normes.`
},
{ id: "topo-114", ...P, level: 1, time: "10 min",
  title: "∫₀¹|P| ≥ λ sup |P| sur ℝₙ[X]",
  enonce: R`<p>Soient $n\in\mathbb N$ et $E_n$ l'espace des polynômes réels de degré au plus $n$. Montrer qu'il existe $\lambda>0$ tel que</p>$$\forall P\in E_n,\quad\int_0^1|P(t)|\,dt\geqslant\lambda\sup_{t\in[0,1]}|P(t)|.$$`,
  decode: { donnees: [R`$E_n$ est de dimension $n+1$.`], but: R`Reconnaître deux normes sur un espace de dimension finie.`, cles: {} },
  steps: [
    { t: "Deux normes sur Eₙ", h: R`<p>Séparation : un polynôme nul sur $[0,1]$ est nul.</p>`, b: R`<p>Posons $N_1(P) = \int_0^1|P|$ et $N_\infty(P) = \sup_{[0,1]}|P|$. Homogénéité et inégalité triangulaire sont immédiates. Séparation :</p><ul><li>si $N_\infty(P) = 0$, $P$ s'annule sur $[0,1]$ ;</li><li>si $N_1(P) = 0$, $|P|$ est continue, positive, d'intégrale nulle, donc $P$ s'annule sur $[0,1]$.</li></ul><p>Dans les deux cas, $P$ a une infinité de racines : $P = 0$.</p>` },
    { t: "Conclusion", h: R`<p>Équivalence des normes en dimension finie.</p>`, b: R`<p>$E_n$ est de dimension finie : $N_1$ et $N_\infty$ sont équivalentes. Il existe donc $\lambda>0$ tel que $N_1\geqslant\lambda N_\infty$.</p><div class="sbox">$$\int_0^1|P|\geqslant\lambda\sup_{[0,1]}|P|\qquad(P\in E_n).$$</div><p>Sur $\mathbb R[X]$ tout entier, c'est faux : avec $P = X^k$, $\int_0^1t^k = \frac1{k+1}$ alors que $\sup = 1$. La constante $\lambda$ dépend donc de $n$.</p>`, rappels: ["nrm-dimfinie"] }
  ],
  piege: R`L'existence de $\lambda$ est un pur argument de dimension finie : on ne la calcule pas, et elle tend vers $0$ quand $n$ grandit.`,
  methode: R`Inégalité entre deux quantités homogènes sur un espace de dimension finie : vérifier que ce sont des normes, puis invoquer l'équivalence.`
},
{ id: "topo-115", ...P, level: 2, time: "25 min",
  title: "Convergence de polynômes de degré borné : trois modes équivalents",
  enonce: R`<p>Pour $d\in\mathbb N$, soit $E = \mathbb R_d[X]$.</p><ol><li>Pour $\xi = (\xi_0,\dots,\xi_d)$ famille de $d+1$ réels distincts et $P\in E$, on pose $N_\xi(P) = \sum_{k = 0}^d|P(\xi_k)|$. Montrer que $N_\xi$ est une norme sur $E$.</li></ol><p>Soit $(P_n)$ une suite d'éléments de $E$.</p><ol start="2"><li>Établir que les assertions suivantes sont équivalentes :<br>(i) la suite $(P_n)$ converge dans l'espace normé $(E,N_\xi)$ ;<br>(ii) la suite de fonctions $(P_n)$ converge uniformément sur tout segment de $\mathbb R$ ;<br>(iii) la suite de fonctions $(P_n)$ converge simplement sur $\mathbb R$.</li></ol>`,
  decode: { donnees: [R`Interpolation de Lagrange aux points $\xi_k$.`], but: R`(i)⇒(ii) par équivalence des normes, (ii)⇒(iii) direct, (iii)⇒(i) par interpolation.`, cles: {} },
  steps: [
    { t: "1) N_ξ est une norme", h: R`<p>Séparation : $d+1$ racines distinctes.</p>`, b: R`<p>$N_\xi$ est positive, homogène et vérifie l'inégalité triangulaire (somme de valeurs absolues). Si $N_\xi(P) = 0$, $P$ s'annule aux $d+1$ points distincts $\xi_k$ alors que $\deg P\leqslant d$ : $P = 0$.</p>`, rappels: ["nrm-sep"] },
    { t: "2) (i) ⇒ (ii)", h: R`<p>Sur un segment $[a,b]$ ($a\lt b$), $\|\cdot\|_{\infty,[a,b]}$ est une norme sur $E$.</p>`, b: R`<p>Supposons $P_n\to P$ pour $N_\xi$. Soit $[a,b]$ un segment avec $a\lt b$. L'application $Q\mapsto\|Q\|_{\infty,[a,b]}$ est une norme sur $E$ (un polynôme nul sur $[a,b]$ est nul). $E$ étant de dimension finie, elle est équivalente à $N_\xi$, donc</p>$$\|P_n-P\|_{\infty,[a,b]}\xrightarrow[n\to+\infty]{}0 :$$<p>$(P_n)$ converge uniformément vers $P$ sur $[a,b]$.</p>`, rappels: ["nrm-dimfinie"] },
    { t: "2) (ii) ⇒ (iii)", h: R`<p>Tout réel est dans un segment.</p>`, b: R`<p>Si $(P_n)$ converge uniformément sur tout segment vers une fonction $f$, alors pour tout $t\in\mathbb R$, en prenant le segment $[t-1,t+1]$, $P_n(t)\to f(t)$ : la convergence est simple.</p>` },
    { t: "2) (iii) ⇒ (i)", h: R`<p>Polynôme interpolateur $P$ de la limite $f$ aux points $\xi_k$.</p>`, b: R`<p>Supposons $P_n\to f$ simplement sur $\mathbb R$. Par interpolation de Lagrange, il existe $P\in E$ avec $P(\xi_k) = f(\xi_k)$ pour $k = 0,\dots,d$. Alors</p>$$N_\xi(P_n-P) = \sum_{k = 0}^d|P_n(\xi_k)-f(\xi_k)|\xrightarrow[n\to+\infty]{}0,$$<p>somme finie de termes qui tendent vers $0$. Donc $P_n\to P$ pour $N_\xi$.</p><div class="sbox"><p>Pour des polynômes de degré borné : convergence simple $\iff$ convergence uniforme sur tout segment $\iff$ convergence pour $N_\xi$.</p></div>`, rappels: ["eu-lagrange"] }
  ],
  piege: R`L'hypothèse « degré $\leqslant d$ » est cruciale : sur $\mathbb R[X]$, les polynômes de Taylor de $e^x$ convergent simplement mais pas uniformément sur $\mathbb R$, et leur limite n'est pas un polynôme.`,
  methode: R`Degré borné = dimension finie : toutes les notions de convergence raisonnables coïncident.`
},
{ id: "topo-116", ...P, level: 2, time: "20 min",
  title: "Limite simple de polynômes de degré ≤ N (ENTPE)",
  enonce: R`<p>Soient $N\in\mathbb N$ et $(P_n)$ une suite de fonctions polynomiales toutes de degré au plus $N$. Montrer que si $(P_n)$ converge simplement vers une fonction $f$ sur $\mathbb R$, alors $f$ est polynomiale et la convergence est uniforme sur tout segment de $\mathbb R$.</p>`,
  decode: { donnees: [R`$\mathbb R_N[X]$ est de dimension finie.`], but: R`Interpoler $f$ en $N+1$ points, puis utiliser l'équivalence des normes.`, cles: {} },
  steps: [
    { t: "Le candidat P", h: R`<p>$a_0,\dots,a_N$ distincts, $P(a_k) = f(a_k)$.</p>`, b: R`<p>Soient $a_0,\dots,a_N$ des réels deux à deux distincts et $P\in\mathbb R_N[X]$ le polynôme d'interpolation : $P(a_k) = f(a_k)$ pour $k = 0,\dots,N$. Sur $\mathbb R_N[X]$, on considère la norme</p>$$\nu(Q) = \max_{0\leqslant k\leqslant N}|Q(a_k)|.$$<p>Alors $\nu(P_n-P) = \max_k|P_n(a_k)-f(a_k)|\to0$ : $P_n\to P$ pour $\nu$.</p>`, rappels: ["eu-lagrange"] },
    { t: "Convergence uniforme sur les segments", h: R`<p>$\|\cdot\|_{\infty,[a,b]}$ est une autre norme sur $\mathbb R_N[X]$.</p>`, b: R`<p>Pour un segment $[a,b]$ ($a\lt b$), $Q\mapsto\|Q\|_{\infty,[a,b]}$ est une norme sur $\mathbb R_N[X]$, équivalente à $\nu$ (dimension finie). Donc $\|P_n-P\|_{\infty,[a,b]}\to0$ : $(P_n)$ converge vers $P$ uniformément sur tout segment, donc simplement.</p>`, rappels: ["nrm-dimfinie"] },
    { t: "Identification de f", h: R`<p>Unicité de la limite simple.</p>`, b: R`<p>$(P_n)$ converge simplement à la fois vers $f$ et vers $P$ : par unicité de la limite en chaque point, $f = P$.</p><div class="sbox"><p>$f$ est polynomiale (de degré $\leqslant N$), et la convergence est uniforme sur tout segment.</p></div>` }
  ],
  piege: R`La convergence n'est pas uniforme sur $\mathbb R$ en général : $P_n = \frac1nX$ tend simplement vers $0$ mais $\sup_{\mathbb R}|P_n| = +\infty$.`,
  methode: R`Identifier une limite simple : construire un candidat dans l'espace de dimension finie (par interpolation), puis conclure par équivalence des normes.`
},
{ id: "topo-117", ...P, level: 3, time: "35 min",
  title: "Sous-espace de dimension finie de C([0, 1]) : une norme par évaluations (Mines)",
  enonce: R`<p>Soit $E$ un sous-espace vectoriel de dimension finie $d\geqslant1$ de $\mathcal C([0,1],\mathbb R)$.</p><ol><li>Établir l'existence de $(a_1,\dots,a_d)\in[0,1]^d$ tel que $N : f\in E\mapsto\sum_{i = 1}^d|f(a_i)|$ soit une norme sur $E$.</li><li>Soit $(f_n)$ une suite de fonctions de $E$ convergeant simplement vers $f : [0,1]\to\mathbb R$. Montrer que $f\in E$ et que la convergence est uniforme.</li></ol>`,
  decode: { donnees: [R`Les formes linéaires d'évaluation $\delta_a : f\mapsto f(a)$, $a\in[0,1]$.`], but: R`Extraire de $\{\delta_a\}$ une base de $E^*$, puis travailler dans la base duale.`, cles: {} },
  steps: [
    { t: "1) Les évaluations engendrent E*", h: R`<p>Une fonction de $E$ annulée par tous les $\delta_a$ est nulle.</p>`, b: R`<p>Pour $a\in[0,1]$, notons $\delta_a$ la forme linéaire $f\mapsto f(a)$ sur $E$, et $W = \mathrm{Vect}(\delta_a : a\in[0,1])\subset E^*$.</p><p>Si $W\neq E^*$, il existe $f\in E$ non nulle annulée par toutes les formes de $W$ (l'orthogonal d'un sous-espace strict de $E^*$ n'est pas réduit à $\{0\}$). Mais alors $f(a) = 0$ pour tout $a$, donc $f = 0$ : contradiction. Donc $W = E^*$.</p>` },
    { t: "1) Choix des points", h: R`<p>Extraire une base $(\delta_{a_1},\dots,\delta_{a_d})$ de $E^*$.</p>`, b: R`<p>$W = E^*$ est de dimension $d$ : de la famille génératrice $(\delta_a)$, on extrait une base $(\delta_{a_1},\dots,\delta_{a_d})$.</p><p><b>$N$ est une norme.</b> Positivité, homogénéité, inégalité triangulaire sont claires. Si $N(f) = 0$, alors $\delta_{a_i}(f) = 0$ pour tout $i$ ; comme ces formes forment une base de $E^*$, toute forme linéaire s'annule en $f$, donc $f = 0$.</p>` },
    { t: "2) La base duale", h: R`<p>$(e_1,\dots,e_d)$ base de $E$ avec $e_j(a_i) = \delta_{ij}$.</p>`, b: R`<p>Soit $(e_1,\dots,e_d)$ la base de $E$ dont $(\delta_{a_i})$ est la base duale : $e_j(a_i) = \delta_{ij}$. Toute $g\in E$ s'écrit alors</p>$$g = \sum_{i = 1}^dg(a_i)\,e_i.$$` },
    { t: "2) Identification de la limite", h: R`<p>$g = \sum f(a_i)e_i$.</p>`, b: R`<p>Posons $g = \sum_{i = 1}^df(a_i)e_i\in E$. Pour tout $x\in[0,1]$ :</p>$$f_n(x) = \sum_{i = 1}^df_n(a_i)e_i(x)\xrightarrow[n\to+\infty]{}\sum_{i = 1}^df(a_i)e_i(x) = g(x).$$<p>Par unicité de la limite simple, $f = g\in E$.</p>` },
    { t: "2) Uniformité", h: R`<p>Majorer $\|f_n-f\|_\infty$ par une somme finie.</p>`, b: R`<p>$$\begin{aligned}\|f_n-f\|_\infty&= \Big\|\sum_{i = 1}^d\big(f_n(a_i)-f(a_i)\big)e_i\Big\|_\infty\\&\leqslant\sum_{i = 1}^d|f_n(a_i)-f(a_i)|\,\|e_i\|_\infty\xrightarrow[n\to+\infty]{}0.\end{aligned}$$<div class="sbox"><p>$f\in E$, et $(f_n)$ converge uniformément vers $f$ sur $[0,1]$.</p></div><p>C'est la version générale de l'exercice sur les polynômes de degré borné : là, $E = \mathbb R_d[X]$ et n'importe quels $d+1$ points distincts conviennent.</p>` }
  ],
  piege: R`Les points $a_i$ ne peuvent pas être choisis au hasard : il faut que les évaluations soient indépendantes sur $E$ (pour $E = \mathrm{Vect}(\sin(\pi x))$, le point $a = 0$ ne marche pas).`,
  methode: R`Dans un espace de fonctions de dimension finie : choisir des points d'évaluation qui forment une base du dual, puis écrire chaque fonction dans la base duale.`
},
{ id: "topo-118", ...P, level: 1, time: "5 min",
  title: "Si (AB)ⁿ → 0 alors (BA)ⁿ → 0",
  enonce: R`<p>Soient $A,B\in\mathcal M_p(\mathbb R)$. On suppose que $(AB)^n\xrightarrow[n\to+\infty]{}O_p$. Montrer que $(BA)^n\xrightarrow[n\to+\infty]{}O_p$.</p>`,
  decode: { donnees: [R`$(BA)^{n+1} = B(AB)^nA$.`], but: R`Faire passer le produit à la limite.`, cles: {} },
  steps: [
    { t: "Une identité", h: R`<p>Regrouper autrement les facteurs.</p>`, b: R`<p>$(BA)^{n+1} = BA\,BA\cdots BA = B\,(AB)^n\,A$ (on regroupe les $n$ produits $AB$ du milieu).</p>` },
    { t: "Passage à la limite", h: R`<p>$M\mapsto BMA$ est linéaire, donc continue.</p>`, b: R`<p>$M\mapsto BMA$ est linéaire sur un espace de dimension finie, donc continue. Ainsi</p>$$(BA)^{n+1} = B(AB)^nA\xrightarrow[n\to+\infty]{}BO_pA = O_p.$$<div class="sbox"><p>$(BA)^n\to O_p$.</p></div>`, rappels: ["nrm-lim"] }
  ],
  piege: R`On ne peut pas dire « $AB$ et $BA$ ont les mêmes valeurs propres » sans plus de travail ; l'identité de regroupement suffit.`,
  methode: R`Comparer des puissances de $AB$ et $BA$ : écrire $(BA)^{n+1} = B(AB)^nA$.`
},
{ id: "topo-119", ...P, level: 1, time: "5 min",
  title: "Limites de puissances de matrices qui commutent",
  enonce: R`<p>Soient $A,B\in\mathcal M_n(\mathbb R)$ telles que $A^k\xrightarrow[k\to+\infty]{}P$ et $B^k\xrightarrow[k\to+\infty]{}Q$. On suppose que $A$ et $B$ commutent. Montrer que $P$ et $Q$ commutent.</p>`,
  decode: { donnees: [R`$AB = BA\Rightarrow A^kB^k = B^kA^k$.`], but: R`Passer à la limite dans la relation de commutation.`, cles: {} },
  steps: [
    { t: "Commutation des puissances", h: R`<p>Récurrence.</p>`, b: R`<p>Comme $AB = BA$, on montre par récurrence que $A^k$ et $B^k$ commutent : $A^kB^k = B^kA^k$ pour tout $k$.</p>` },
    { t: "Passage à la limite", h: R`<p>Le produit matriciel est continu.</p>`, b: R`<p>Le produit $(M,N)\mapsto MN$ est continu (bilinéaire en dimension finie). En passant à la limite dans $A^kB^k = B^kA^k$ :</p><div class="sbox">$$PQ = QP.$$</div>`, rappels: ["nrm-lim"] }
  ],
  piege: R`Il faut la convergence des deux suites : si l'une diverge, on ne peut rien conclure.`,
  methode: R`Une relation algébrique vraie pour tout $k$ passe à la limite grâce à la continuité des opérations.`
},
{ id: "topo-120", ...P, level: 1, time: "10 min",
  title: "Limite de matrices inversibles dont les inverses convergent",
  enonce: R`<p>Soit $(A_n)$ une suite de matrices inversibles de $\mathcal M_p(\mathbb K)$ telle que</p>$$A_n\xrightarrow[n\to+\infty]{}A\qquad\text{et}\qquad A_n^{-1}\xrightarrow[n\to+\infty]{}B.$$<p>Montrer que $A$ est inversible et déterminer son inverse.</p>`,
  decode: { donnees: [R`$A_nA_n^{-1} = I_p$.`], but: R`Passer à la limite dans cette égalité.`, cles: {} },
  steps: [
    { t: "Passage à la limite", h: R`<p>$A_nA_n^{-1} = I_p$ pour tout $n$.</p>`, b: R`<p>Pour tout $n$, $A_nA_n^{-1} = I_p$. Le produit étant continu, en passant à la limite :</p>$$AB = I_p.$$` },
    { t: "Conclusion", h: R`<p>Inverse à droite en dimension finie.</p>`, b: R`<p>En dimension finie, une matrice qui admet un inverse à droite est inversible (théorème du rang : $AB = I_p$ impose $\mathrm{rg}\,A = p$), et son inverse est $B$.</p><div class="sbox">$$A\in GL_p(\mathbb K),\qquad A^{-1} = B = \lim_{n\to+\infty}A_n^{-1}.$$</div><p>Sans l'hypothèse sur $(A_n^{-1})$, c'est faux : $A_n = \frac1nI_p$ est inversible et tend vers $O_p$.</p>`, rappels: ["nrm-lim"] }
  ],
  piege: R`$GL_p(\mathbb K)$ n'est pas fermé : c'est la convergence des inverses qui empêche la limite de dégénérer.`,
  methode: R`Pour l'inversibilité d'une limite : passer à la limite dans $A_nA_n^{-1} = I_p$.`
},
{ id: "topo-121", ...P, level: 2, time: "10 min",
  title: "Si Aⁿ converge, la limite est une projection (ENTPE)",
  enonce: R`<p>Soit $A\in\mathcal M_p(\mathbb C)$. On suppose que la suite $(A^n)$ converge vers une matrice $B$. Montrer que $B^2 = B$.</p>`,
  decode: { donnees: [R`$(A^{2n})$ est une suite extraite de $(A^n)$.`], but: R`Calculer la limite de $A^{2n}$ de deux façons.`, cles: {} },
  steps: [
    { t: "Deux calculs de la même limite", h: R`<p>Extraction, et $A^{2n} = A^n\cdot A^n$.</p>`, b: R`<ul><li><b>Par extraction</b> : $(A^{2n})$ est extraite de $(A^n)$, donc $A^{2n}\to B$.</li><li><b>Par produit</b> : $A^{2n} = A^n\times A^n\to B\times B = B^2$ (continuité du produit).</li></ul><p>Par unicité de la limite :</p><div class="sbox">$$B^2 = B.$$</div><p>$B$ est la matrice d'une projection.</p>`, rappels: ["nrm-lim"] }
  ],
  piege: R`Ne pas oublier de justifier que $A^{2n}\to B$ : c'est une suite extraite.`,
  methode: R`Obtenir une équation sur une limite : calculer de deux façons la limite d'une suite extraite.`
},
{ id: "topo-122", ...P, level: 1, time: "10 min",
  title: "Limite des puissances d'une matrice antisymétrique (Mines)",
  enonce: R`<p>Soit $A\in\mathcal M_n(\mathbb R)$ antisymétrique telle que la suite $(A^k)$ converge vers $B$. Que dire de $B$ ?</p>`,
  decode: { donnees: [R`$\,{}^tA = -A$, donc $\,{}^t(A^k) = (-1)^kA^k$.`], but: R`Comparer les limites des puissances paires et impaires.`, cles: {} },
  steps: [
    { t: "Transposées des puissances", h: R`<p>La transposition est continue.</p>`, b: R`<p>$\,{}^t(A^k) = ({}^tA)^k = (-1)^kA^k$. La transposition étant linéaire (donc continue), $\,{}^t(A^k)\to{}^tB$.</p>` },
    { t: "Pair et impair", h: R`<p>$k = 2p$ et $k = 2p+1$.</p>`, b: R`<p>Les suites extraites paires et impaires convergent aussi vers $B$, donc</p>$$\left\{\begin{aligned}{}^t(A^{2p})&= A^{2p}\to B,\\{}^t(A^{2p+1})&= -A^{2p+1}\to-B.\end{aligned}\right.$$<p>Ces deux suites sont extraites de $({}^tA^k)$, qui converge vers $\,{}^tB$. Par unicité de la limite :</p>$$B = {}^tB = -B.$$<div class="sbox">$$B = O_n.$$</div>`, rappels: ["nrm-lim"] }
  ],
  piege: R`On n'a pas supposé $B$ symétrique ou antisymétrique : c'est le passage par les deux parités qui donne les deux égalités.`,
  methode: R`Quand une suite change de signe selon la parité, ses suites extraites paire et impaire donnent deux équations sur la limite.`
},
{ id: "topo-123", ...P, level: 2, time: "25 min",
  title: "La méthode de Newton pour l'inverse d'une matrice",
  enonce: R`<p>Soit $\|\cdot\|$ une norme sous-multiplicative sur $\mathcal M_n(\mathbb R)$. Soient $A\in\mathcal M_n(\mathbb R)$ et $M_0\in\mathcal M_n(\mathbb R)$ vérifiant $\|I_n-AM_0\|\lt1$. On pose</p>$$M_{k+1} = 2M_k-M_kAM_k.$$<p>Montrer que $A$ est inversible et que $M_k\xrightarrow[k\to+\infty]{}A^{-1}$.</p>`,
  decode: { donnees: [R`$\|XY\|\leqslant\|X\|\|Y\|$.`], but: R`Montrer que l'erreur $I_n-B_k$ est élevée au carré à chaque étape.`, cles: {} },
  steps: [
    { t: "L'erreur est élevée au carré", h: R`<p>$C_k = AM_k$ ; calculer $I_n-C_{k+1}$.</p>`, b: R`<p>Posons $C_k = AM_k$. En multipliant la récurrence à gauche par $A$ :</p>$$C_{k+1} = 2AM_k-AM_kAM_k = 2C_k-C_k^2,$$<p>donc</p>$$I_n-C_{k+1} = I_n-2C_k+C_k^2 = (I_n-C_k)^2.$$<p>Par récurrence immédiate :</p>$$I_n-C_k = (I_n-C_0)^{2^k} = (I_n-AM_0)^{2^k}.$$` },
    { t: "Convergence de AMₖ vers Iₙ", h: R`<p>Sous-multiplicativité, avec $q = \|I_n-AM_0\|\lt1$.</p>`, b: R`<p>Avec $q = \|I_n-AM_0\|\lt1$ et la sous-multiplicativité :</p>$$\|I_n-AM_k\| = \big\|(I_n-AM_0)^{2^k}\big\|\leqslant q^{2^k}\xrightarrow[k\to+\infty]{}0.$$<p>Donc $AM_k\to I_n$.</p>`, rappels: ["nrm-sousmult"] },
    { t: "A est inversible", h: R`<p>Continuité du déterminant.</p>`, b: R`<p>Le déterminant est continu, donc $\det(A)\det(M_k) = \det(AM_k)\to\det I_n = 1$.</p><p>Si l'on avait $\det A = 0$, la suite $\det(AM_k)$ serait constante égale à $0$ et ne pourrait pas tendre vers $1$. Donc $\det A\neq0$ : $A$ est inversible.</p>` },
    { t: "Limite de Mₖ", h: R`<p>$M_k = A^{-1}(AM_k)$.</p>`, b: R`<p>$M_k = A^{-1}(AM_k)\to A^{-1}I_n = A^{-1}$ (continuité du produit).</p><div class="sbox"><p>$A\in GL_n(\mathbb R)$ et $M_k\to A^{-1}$, avec $\|I_n-AM_k\|\leqslant q^{2^k}$ où $q = \|I_n-AM_0\|\lt1$.</p></div><p>La convergence est <b>quadratique</b> : le nombre de chiffres exacts double à chaque itération. C'est la méthode de Newton appliquée à $f(X) = X^{-1}-A$.</p>`, rappels: ["nrm-sousmult", "nrm-lim"] }
  ],
  piege: R`L'hypothèse porte sur $AM_0$ : il est plus commode de suivre $AM_k$ que $M_kA$ pour exploiter directement $\|I_n-AM_0\|\lt1$.`,
  methode: R`Itération de Newton : écrire la récurrence sur l'erreur ($E_{k+1} = E_k^2$), puis la sous-multiplicativité donne une convergence en $q^{2^k}$.`
},
{ id: "topo-124", ...P, level: 2, time: "20 min",
  title: "Limite de (I + (a/n)J)ⁿ : on retrouve une rotation (Mines)",
  enonce: R`<p>Soit $a\in\mathbb R$. Déterminer la limite de la suite $(A_n^n)_{n\geqslant1}$ avec</p>$$A_n = \begin{pmatrix}1&-\frac an\\[2pt]\frac an&1\end{pmatrix}.$$`,
  decode: { donnees: [R`$\begin{pmatrix}x&-y\\y&x\end{pmatrix}$ représente le nombre complexe $x+iy$.`], but: R`Passer par $\big(1+\frac{ia}n\big)^n\to e^{ia}$.`, cles: {} },
  steps: [
    { t: "Traduction complexe", h: R`<p>$\varphi : x+iy\mapsto\begin{pmatrix}x&-y\\y&x\end{pmatrix}$ est un morphisme d'algèbres.</p>`, b: R`<p>L'application $\varphi : x+iy\mapsto\begin{pmatrix}x&-y\\y&x\end{pmatrix}$ est linéaire, multiplicative ($\varphi(zz') = \varphi(z)\varphi(z')$, vérification directe), et continue. Comme $A_n = \varphi\big(1+\frac{ia}n\big)$ :</p>$$A_n^n = \varphi\Big(\big(1+\tfrac{ia}n\big)^n\Big).$$` },
    { t: "Limite de (1 + ia/n)ⁿ", h: R`<p>Module et argument.</p>`, b: R`<p>Écrivons $1+\frac{ia}n = \rho_ne^{i\theta_n}$ avec</p>$$\rho_n = \sqrt{1+\frac{a^2}{n^2}},\qquad\theta_n = \arctan\frac an.$$<ul><li>$\rho_n^n = \exp\big(\frac n2\ln(1+\frac{a^2}{n^2})\big)$ et $\frac n2\ln(1+\frac{a^2}{n^2})\sim\frac{a^2}{2n}\to0$, donc $\rho_n^n\to1$ ;</li><li>$n\theta_n = n\arctan\frac an\sim n\cdot\frac an = a$, donc $n\theta_n\to a$.</li></ul><p>Ainsi $\big(1+\frac{ia}n\big)^n = \rho_n^ne^{in\theta_n}\to e^{ia}$.</p>` },
    { t: "Conclusion", h: R`<p>Continuité de $\varphi$.</p>`, b: R`<p>Par continuité de $\varphi$ :</p><div class="sbox">$$A_n^n\xrightarrow[n\to+\infty]{}\varphi(e^{ia}) = \begin{pmatrix}\cos a&-\sin a\\\sin a&\cos a\end{pmatrix}.$$</div><p>La limite est la rotation d'angle $a$ : c'est l'exponentielle de la matrice $\begin{pmatrix}0&-a\\a&0\end{pmatrix}$, comme pour la formule $\big(1+\frac xn\big)^n\to e^x$.</p>` }
  ],
  piege: R`On ne peut pas passer à la limite « dans la base » : $A_n\to I_2$, mais $A_n^n$ ne tend pas vers $I_2$ (l'exposant grandit en même temps).`,
  methode: R`Matrices de similitude $\begin{pmatrix}x&-y\\y&x\end{pmatrix}$ : calculer dans $\mathbb C$, où les puissances se lisent en module et argument.`
},
{ id: "topo-125", ...P, level: 2, time: "20 min",
  title: "Convergence dans L(E) ⟺ convergence simple",
  enonce: R`<p>Soit $(e_1,\dots,e_n)$ une base d'un espace normé réel $(E,\|\cdot\|)$. Pour $u\in\mathcal L(E)$, on pose $N(u) = \sum_{i = 1}^n\|u(e_i)\|$.</p><ol><li>Vérifier que $N$ définit une norme sur $\mathcal L(E)$.</li><li>Soit $(u_k)$ une suite de $\mathcal L(E)$. Prouver qu'elle converge pour la norme $N$ si et seulement si la suite $(u_k(x))$ converge pour tout $x\in E$.</li></ol>`,
  decode: { donnees: [R`Une application linéaire est déterminée par les images d'une base.`], but: R`Sens direct par linéarité ; réciproque en construisant la limite $v$ par $v(e_i) = \lim u_k(e_i)$.`, cles: {} },
  steps: [
    { t: "1) Une norme", h: R`<p>Séparation : $u(e_i) = 0$ pour tout $i$.</p>`, b: R`<p>Si $N(u) = 0$, alors $u(e_i) = 0$ pour tout $i$ : l'application linéaire $u$ est nulle sur une base, donc nulle. Ensuite :</p>$$\left\{\begin{aligned}N(\lambda u)&= \sum\|\lambda u(e_i)\| = |\lambda|N(u),\\N(u+v)&= \sum\|u(e_i)+v(e_i)\|\leqslant N(u)+N(v).\end{aligned}\right.$$` },
    { t: "2) Sens direct", h: R`<p>$x = \sum x_ie_i$.</p>`, b: R`<p>Supposons $u_k\to v$ pour $N$ : $N(u_k-v) = \sum_i\|u_k(e_i)-v(e_i)\|\to0$, donc $u_k(e_i)\to v(e_i)$ pour chaque $i$. Pour $x = \sum x_ie_i$ :</p>$$u_k(x) = \sum_{i = 1}^nx_iu_k(e_i)\xrightarrow[k\to+\infty]{}\sum_{i = 1}^nx_iv(e_i) = v(x).$$` },
    { t: "2) Réciproque", h: R`<p>$v_i = \lim u_k(e_i)$, et $v$ linéaire avec $v(e_i) = v_i$.</p>`, b: R`<p>Supposons que $(u_k(x))$ converge pour tout $x$. Notons $v_i = \lim_ku_k(e_i)$ et $v$ l'unique application linéaire telle que $v(e_i) = v_i$. Alors</p>$$N(u_k-v) = \sum_{i = 1}^n\|u_k(e_i)-v_i\|\xrightarrow[k\to+\infty]{}0.$$<div class="sbox"><p>$(u_k)$ converge dans $\mathcal L(E)$ si et seulement si elle converge simplement ; la limite est la même.</p></div><p>$\mathcal L(E)$ étant de dimension finie, la norme choisie n'a pas d'importance.</p>`, rappels: ["nrm-dimfinie"] }
  ],
  piege: R`Dans la réciproque, il faut construire la limite $v$ et vérifier qu'elle est linéaire : on la définit sur la base.`,
  methode: R`En dimension finie, converger dans $\mathcal L(E)$ revient à converger sur les vecteurs d'une base.`
}
]);
})();

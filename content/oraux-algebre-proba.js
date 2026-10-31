
/* ===== Oraux CCINP : algèbre (exercices 59 à 94) et probabilités (95 à 112) ===== */
LEMME.rappels({
  "o-b-ker-inj": { t: "Noyau et injectivité", b: R`<div class="sbox">$$u\ \text{injective}\iff\ker u = \{0\}.$$</div><p>En dimension finie, pour un endomorphisme : injectif $\iff$ surjectif $\iff$ bijectif $\iff\det\neq0$.</p>` },
  "o-b-rang": { t: "Théorème du rang", b: R`<div class="sbox">$$\dim E = \operatorname{rg}u+\dim\ker u\qquad(u\in\mathcal L(E,F),\ \dim E<\infty).$$</div>` },
  "o-b-supp": { t: "Somme directe en dimension finie", b: R`<div class="sbox">$$E = F\oplus G\iff F\cap G = \{0\}\ \text{et}\ \dim F+\dim G = \dim E.$$</div>` },
  "o-b-triang": { t: "Matrice triangulaire", b: R`<p>Le déterminant d'une matrice triangulaire est le produit des coefficients diagonaux, et ses valeurs propres sont ses coefficients diagonaux :</p><div class="sbox">$$\chi_T = \prod_i(X-t_{ii}).$$</div>` },
  "o-b-diag-crit": { t: "Critères de diagonalisabilité", b: R`<div class="sbox">$$\begin{gathered}u\ \text{diagonalisable}\iff\chi_u\ \text{scindé et}\ \dim E_\lambda = m_\lambda\ \text{pour tout}\ \lambda\\\iff u\ \text{annule un polynôme scindé à racines simples}\end{gathered}$$</div><p>Condition suffisante : $n$ valeurs propres distinctes. Si $u$ a une seule valeur propre $\lambda$ et est diagonalisable, alors $u = \lambda\,\mathrm{Id}$.</p>` },
  "o-b-spectral": { t: "Théorème spectral", b: R`<div class="sbox">$$A\in\mathcal S_n(\mathbb R)\ \Longrightarrow\ \exists P\in O_n(\mathbb R),\ P^{\top}AP\ \text{diagonale}.$$</div><p>Une matrice symétrique réelle est diagonalisable dans une base orthonormée, et ses sous-espaces propres sont orthogonaux.</p>` },
  "o-b-annul": { t: "Polynôme annulateur et valeurs propres", b: R`<div class="sbox">$$P(u) = 0\ \text{et}\ u(x) = \lambda x\ (x\neq0)\ \Longrightarrow\ P(\lambda) = 0.$$</div><p>Car $P(u)(x) = P(\lambda)x$. Les valeurs propres sont parmi les racines de tout polynôme annulateur.</p>` },
  "o-b-noyaux": { t: "Lemme des noyaux", b: R`<div class="sbox">$$P\wedge Q = 1\ \Longrightarrow\ \ker(PQ)(u) = \ker P(u)\oplus\ker Q(u).$$</div><p>En particulier, si $PQ$ annule $u$ : $E = \ker P(u)\oplus\ker Q(u)$.</p>` },
  "o-b-bezout-poly": { t: "Bézout pour les polynômes", b: R`<div class="sbox">$$P\wedge Q = 1\iff\exists U,V\in\mathbb K[X],\ UP+VQ = 1.$$</div>` },
  "o-b-cayley": { t: "Théorème de Cayley-Hamilton", b: R`<div class="sbox">$$\chi_u(u) = 0.$$</div><p>Pour une matrice $2\times2$ : $\chi_A = X^2-\operatorname{tr}(A)X+\det A$.</p>` },
  "o-b-poly-endo": { t: "Polynômes d'endomorphismes", b: R`<div class="sbox">$$(PQ)(u) = P(u)\circ Q(u) = Q(u)\circ P(u),\qquad(P+\lambda Q)(u) = P(u)+\lambda Q(u).$$</div>` },
  "o-b-sev-propre": { t: "Sous-espace propre", b: R`<div class="sbox">$$E_\lambda(u) = \ker(u-\lambda\,\mathrm{Id}),\qquad\dim E_\lambda = n-\operatorname{rg}(u-\lambda\,\mathrm{Id}).$$</div>` },
  "o-b-trig": { t: "Trigonalisation", b: R`<p>Si $\chi_u$ est scindé, $u$ est trigonalisable. En dimension $2$ avec une valeur propre double $\lambda$ et $u\neq\lambda\,\mathrm{Id}$ : on prend $v_1$ propre et $v_2$ tel que $(u-\lambda\mathrm{Id})(v_2) = v_1$ :</p><div class="sbox">$$\operatorname{Mat}_{(v_1,v_2)}(u) = \begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}.$$</div>` },
  "o-b-syst-diff": { t: "Systèmes différentiels linéaires", b: R`<p>Pour $X' = AX$ avec $A = PDP^{-1}$ ou $A = PTP^{-1}$ : on pose $Y = P^{-1}X$, qui vérifie</p><div class="sbox">$$Y' = DY\ \ (\text{ou}\ Y' = TY).$$</div><p>On résout coordonnée par coordonnée (de bas en haut pour $T$), puis $X = PY$.</p>` },
  "o-b-cs": { t: "Inégalité de Cauchy-Schwarz", b: R`<div class="sbox">$$|(x|y)|\leqslant\|x\|\,\|y\|,\quad\text{égalité}\iff x,y\ \text{colinéaires}.$$</div><p>Version intégrale : $\Big(\int_a^bfg\Big)^2\leqslant\int_a^bf^2\int_a^bg^2$.</p>` },
  "o-b-ps": { t: "Produit scalaire", b: R`<p>Forme bilinéaire, symétrique, positive, définie :</p><div class="sbox">$$(x|x)\geqslant0,\qquad(x|x) = 0\Rightarrow x = 0.$$</div>` },
  "o-b-proj-orth": { t: "Projection orthogonale", b: R`<p>Si $(e_1,\dots,e_p)$ est une base orthogonale de $F$ :</p><div class="sbox">$$p_F(x) = \sum_{k=1}^p\frac{(x|e_k)}{\|e_k\|^2}e_k,\qquad d(x,F) = \|x-p_F(x)\|.$$</div><p>$x-p_F(x)\in F^\perp$ et $d(x,F)^2 = \|x\|^2-\|p_F(x)\|^2$.</p>` },
  "o-b-orth-dim": { t: "Orthogonal en dimension finie", b: R`<div class="sbox">$$E = F\oplus F^\perp,\qquad\dim F^\perp = n-\dim F,\qquad(F^\perp)^\perp = F.$$</div>` },
  "o-b-int-nulle": { t: "Intégrale nulle d'une fonction positive continue", b: R`<div class="sbox">$$h\ \text{continue},\ h\geqslant0,\ \int_a^bh = 0\ \Longrightarrow\ h = 0.$$</div>` },
  "o-b-adjoint": { t: "Adjoint", b: R`<div class="sbox">$$\forall x,y,\quad(u(x)|y) = (x|u^\ast(y)).$$</div><p>Dans une base orthonormée, $\operatorname{Mat}(u^\ast) = \operatorname{Mat}(u)^\top$.</p>` },
  "o-b-polarisation": { t: "Identité de polarisation", b: R`<div class="sbox">$$(x|y) = \frac14\big(\|x+y\|^2-\|x-y\|^2\big).$$</div><p>Un produit scalaire est entièrement déterminé par la norme associée.</p>` },
  "o-b-isometrie": { t: "Isométries", b: R`<div class="sbox">$$u\in O(E)\iff\forall x,\ \|u(x)\| = \|x\|\iff\forall x,y,\ (u(x)|u(y)) = (x|y).$$</div><p>Dans une base orthonormée, la matrice est orthogonale : $M^\top M = I_n$.</p>` },
  "o-b-sym-pos": { t: "Matrices symétriques positives", b: R`<div class="sbox">$$A\in\mathcal S_n^+(\mathbb R)\iff\forall X,\ X^\top AX\geqslant0\iff\operatorname{sp}(A)\subset\mathbb R_+.$$</div>` },
  "o-b-taylor-poly": { t: "Formule de Taylor pour les polynômes", b: R`<div class="sbox">$$P = \sum_{k=0}^n\frac{P^{(k)}(a)}{k!}(X-a)^k\quad(\deg P\leqslant n).$$</div>` },
  "o-b-racines": { t: "Racines n-ièmes de l'unité", b: R`<div class="sbox">$$z^n = 1\iff z = e^{2ik\pi/n},\ k\in\{0,\dots,n-1\}.$$</div><p>Il y en a exactement $n$, régulièrement réparties sur le cercle unité.</p>` },
  "o-b-angle-moitie": { t: "Factorisation par l'angle moitié", b: R`<div class="sbox">$$e^{i\theta}-1 = 2i\sin\frac\theta2\,e^{i\theta/2},\qquad e^{i\theta}+1 = 2\cos\frac\theta2\,e^{i\theta/2}.$$</div>` },
  "o-b-gauss": { t: "Lemme de Gauss et Bézout", b: R`<div class="sbox">$$a\wedge b = 1\iff\exists u,v\in\mathbb Z,\ au+bv = 1,\qquad a\mid bc\ \text{et}\ a\wedge b = 1\Rightarrow a\mid c.$$</div>` },
  "o-b-binom-p": { t: "Coefficients binomiaux et nombre premier", b: R`<div class="sbox">$$p\ \text{premier},\ 1\leqslant k\leqslant p-1\ \Longrightarrow\ p\mid\binom pk.$$</div><p>Car $k\binom pk = p\binom{p-1}{k-1}$ et $p\wedge k = 1$.</p>` },
  "o-b-lagrange": { t: "Polynômes interpolateurs de Lagrange", b: R`<div class="sbox">$$L_k = \prod_{i\neq k}\frac{X-a_i}{a_k-a_i},\qquad L_k(a_i) = \delta_{ik},\qquad P = \sum_kP(a_k)L_k\ \ (\deg P\leqslant n).$$</div>` },
  "o-b-iso": { t: "Isomorphisme en dimension finie", b: R`<div class="sbox">$$\dim E = \dim F<\infty\ \text{et}\ \varphi\ \text{linéaire injective}\ \Longrightarrow\ \varphi\ \text{isomorphisme}.$$</div>` },
  "o-b-racines-poly": { t: "Nombre de racines d'un polynôme", b: R`<div class="sbox">$$P\neq0,\ \deg P\leqslant n\ \Longrightarrow\ P\ \text{a au plus}\ n\ \text{racines}.$$</div>` },
  "o-b-norme-mat": { t: "Norme sous-multiplicative et séries de matrices", b: R`<div class="sbox">$$N(AB)\leqslant N(A)N(B)\ \Longrightarrow\ N(A^p)\leqslant N(A)^p.$$</div><p>Dans $\mathcal M_n(\mathbb C)$ (dimension finie), une série absolument convergente converge.</p>` }
});

LEMME.notions({
  "annulateur": { p: "polynômes? annulateurs?", t: "Polynôme annulateur", b: R`<p>$P$ annule $u$ si $P(u) = 0$. <b>Exemple :</b> pour un projecteur, $X^2-X$.</p><div class="sbox">$$P(u) = 0\ \Longrightarrow\ \operatorname{sp}(u)\subset\{\text{racines de}\ P\}.$$</div><p>Si $P$ est scindé à racines simples, $u$ est diagonalisable.</p>` },
  "lemme-noyaux": { p: "lemme des noyaux", t: "Lemme des noyaux", b: R`<div class="sbox">$$P\wedge Q = 1\ \Longrightarrow\ \ker(PQ)(u) = \ker P(u)\oplus\ker Q(u).$$</div><p><b>Exemple :</b> $u^2 = u$ donne $E = \ker u\oplus\ker(u-\mathrm{Id})$.</p>` },
  "sev-propre": { p: "sous-espaces? propres?", t: "Sous-espace propre", b: R`<div class="sbox">$$E_\lambda = \ker(u-\lambda\,\mathrm{Id}) = \{x : u(x) = \lambda x\}.$$</div><p>Sa dimension vaut $n-\operatorname{rg}(u-\lambda\mathrm{Id})$ et est comprise entre $1$ et la multiplicité de $\lambda$.</p>` },
  "trigonalisable": { p: "trigonalisables?|trigonaliser|trigonalisation", t: "Trigonalisable", b: R`<p>Il existe une base où la matrice est triangulaire supérieure :</p><div class="sbox">$$A = PTP^{-1},\qquad T\ \text{triangulaire}.$$</div><p>C'est toujours possible sur $\mathbb C$, et sur $\mathbb R$ si $\chi_A$ est scindé.</p>` },
  "adjoint": { p: "adjoints?", t: "Adjoint", b: R`<div class="sbox">$$(u(x)|y) = (x|u^\ast(y))\quad\forall x,y.$$</div><p>Dans une base orthonormée : matrice transposée. $u$ est autoadjoint si $u^\ast = u$ (matrice symétrique).</p>` },
  "isometrie": { p: "isométries?(?: vectorielles?)?", t: "Isométrie vectorielle", b: R`<div class="sbox">$$\|u(x)\| = \|x\|\ \ \forall x\iff M^\top M = I_n\ \text{(base orthonormée)}.$$</div><p><b>Exemples :</b> rotations, symétries orthogonales.</p>` },
  "bon": { p: "bases? orthonormé(?:e|es|s)?|bases? orthonormales?", t: "Base orthonormée", b: R`<div class="sbox">$$(e_i|e_j) = \delta_{ij} = \begin{cases}1&i = j\\0&i\neq j\end{cases}$$</div><p>Dans une telle base, $x = \sum(x|e_i)e_i$ et $\|x\|^2 = \sum(x|e_i)^2$.</p>` },
  "projete": { p: "projetés? orthogona(?:l|ux)|projections? orthogonales?", t: "Projeté orthogonal", b: R`<p>$p_F(x)$ est l'unique $y\in F$ tel que $x-y\in F^\perp$. C'est le point de $F$ le plus proche de $x$ :</p><div class="sbox">$$d(x,F) = \|x-p_F(x)\| = \min_{y\in F}\|x-y\|.$$</div>` },
  "symetrique-pos": { p: "symétriques? positives?|positives? semi-définies?", t: "Matrice symétrique positive", b: R`<div class="sbox">$$A^\top = A\quad\text{et}\quad\forall X\in\mathbb R^n,\ X^\top AX\geqslant0.$$</div><p>Équivalent : toutes les valeurs propres sont $\geqslant0$. <b>Exemple :</b> $B^\top B$.</p>` },
  "racines-unite": { p: "racines? n-ièmes? de l'unité|racines? de l'unité", t: "Racines de l'unité", b: R`<div class="sbox">$$\mathbb U_n = \{e^{2ik\pi/n},\ 0\leqslant k\leqslant n-1\},\qquad\sum_{\omega\in\mathbb U_n}\omega = 0\ (n\geqslant2).$$</div><p>Ce sont les sommets d'un polygone régulier inscrit dans le cercle unité.</p>` },
  "argument": { p: "arguments? d'un nombre complexe|module et (?:un )?argument", t: "Argument d'un complexe", b: R`<p>Pour $z\neq0$, un argument est un réel $\theta$ tel que</p><div class="sbox">$$z = |z|\,e^{i\theta},\quad\text{c'est-à-dire}\quad\cos\theta = \frac{\operatorname{Re}z}{|z|},\ \sin\theta = \frac{\operatorname{Im}z}{|z|}.$$</div><p>Il est défini à $2\pi$ près.</p>` },
  "congruence": { p: "congruences?|congrus?", t: "Congruence", b: R`<div class="sbox">$$a\equiv b\ [n]\iff n\mid a-b.$$</div><p>On peut additionner et multiplier des congruences de même module.</p>` },
  "bezout": { p: "théorème de Bézout|Bézout", t: "Théorème de Bézout", b: R`<div class="sbox">$$a\wedge b = 1\iff\exists(u,v)\in\mathbb Z^2,\ au+bv = 1.$$</div><p><b>Exemple :</b> $3\cdot5-2\cdot7 = 1$, donc $5\wedge7 = 1$.</p>` },
  "premier": { p: "nombres? premiers?", t: "Nombre premier", b: R`<p>Un entier $p\geqslant2$ dont les seuls diviseurs positifs sont $1$ et $p$.</p><div class="sbox">$$p\ \text{premier},\ p\nmid a\ \Longrightarrow\ p\wedge a = 1.$$</div>` },
  "fermat": { p: "petit théorème de Fermat|Fermat", t: "Petit théorème de Fermat", b: R`<div class="sbox">$$p\ \text{premier}\Rightarrow n^p\equiv n\ [p],\qquad p\nmid n\Rightarrow n^{p-1}\equiv1\ [p].$$</div><p><b>Exemple :</b> $2^6 = 64\equiv1\ [7]$.</p>` },
  "interpolation": { p: "interpolations?|interpolateurs?", t: "Interpolation de Lagrange", b: R`<p>Par $n+1$ points d'abscisses distinctes passe un unique polynôme de degré $\leqslant n$ :</p><div class="sbox">$$P = \sum_{k=0}^nb_kL_k,\qquad L_k = \prod_{i\neq k}\frac{X-a_i}{a_k-a_i}.$$</div>` },
  "loi-binomiale": { p: "lois? binomiales?", t: "Loi binomiale", b: R`<p>Nombre de succès dans $n$ épreuves de Bernoulli indépendantes de paramètre $p$ :</p><div class="sbox">$$P(X = k) = \binom nkp^k(1-p)^{n-k},\qquad E(X) = np,\quad V(X) = np(1-p).$$</div>` },
  "loi-geometrique": { p: "lois? géométriques?", t: "Loi géométrique", b: R`<p>Rang du premier succès dans une suite d'épreuves de Bernoulli indépendantes :</p><div class="sbox">$$P(X = k) = p(1-p)^{k-1}\ (k\geqslant1),\qquad E(X) = \frac1p,\quad V(X) = \frac{1-p}{p^2}.$$</div><p>Et $P(X>n) = (1-p)^n$.</p>` },
  "loi-poisson": { p: "lois? de Poisson", t: "Loi de Poisson", b: R`<div class="sbox">$$P(X = k) = e^{-\lambda}\frac{\lambda^k}{k!},\qquad E(X) = V(X) = \lambda,\qquad G_X(t) = e^{\lambda(t-1)}.$$</div>` },
  "loi-hyper": { p: "lois? hypergéométriques?", t: "Loi hypergéométrique", b: R`<p>Tirage simultané de $n$ objets parmi $N$, dont $m$ « gagnants » : $X$ = nombre de gagnants.</p><div class="sbox">$$P(X = k) = \frac{\binom mk\binom{N-m}{n-k}}{\binom Nn}.$$</div>` },
  "fonction-gen": { p: "fonctions? génératrices?", t: "Fonction génératrice", b: R`<div class="sbox">$$G_X(t) = E(t^X) = \sum_{n\geqslant0}P(X = n)\,t^n,\qquad P(X = n) = \frac{G_X^{(n)}(0)}{n!}.$$</div><p>Rayon $\geqslant1$. Si $X$, $Y$ sont indépendantes : $G_{X+Y} = G_XG_Y$. Et $E(X) = G_X'(1)$ si $X$ a une espérance.</p>` },
  "independantes": { p: "variables? (?:aléatoires? )?indépendantes?|(?<=sont )indépendantes|indépendance", t: "Indépendance", b: R`<p>Deux variables discrètes $X$, $Y$ sont indépendantes si</p><div class="sbox">$$\forall x,y,\quad P(X = x,Y = y) = P(X = x)\,P(Y = y).$$</div><p>Pour le nier, un seul couple $(x,y)$ suffit, par exemple avec $P(X = x,Y = y) = 0$ alors que $P(X = x)P(Y = y)>0$.</p>` },
  "loi-marginale": { p: "lois? marginales?", t: "Loi marginale", b: R`<div class="sbox">$$P(X = x) = \sum_yP(X = x,Y = y).$$</div><p>On somme la loi du couple sur toutes les valeurs de l'autre variable.</p>` },
  "proba-totales": { p: "probabilités totales", t: "Formule des probabilités totales", b: R`<p>Si $(A_i)$ est un système complet d'événements :</p><div class="sbox">$$P(B) = \sum_iP(B\mid A_i)\,P(A_i).$$</div>` },
  "bayes": { p: "formule de Bayes|Bayes", t: "Formule de Bayes", b: R`<div class="sbox">$$P(A_j\mid B) = \frac{P(B\mid A_j)\,P(A_j)}{\sum_iP(B\mid A_i)\,P(A_i)}.$$</div><p>Elle « renverse » le conditionnement : de la cause à l'effet, vers l'effet à la cause.</p>` },
  "sce": { p: "systèmes? complets? d'événements", t: "Système complet d'événements", b: R`<p>Des événements $A_1,\dots,A_n$ (ou une suite) deux à deux incompatibles et de réunion $\Omega$ :</p><div class="sbox">$$A_i\cap A_j = \varnothing\ (i\neq j),\qquad\bigcup_iA_i = \Omega.$$</div>` },
  "bienayme": { p: "Bienaymé-Tchebychev", t: "Inégalité de Bienaymé-Tchebychev", b: R`<div class="sbox">$$P\big(|X-E(X)|\geqslant a\big)\leqslant\frac{V(X)}{a^2}\qquad(a>0).$$</div><p>Elle mesure la probabilité de s'écarter de la moyenne à l'aide de la variance.</p>` },
  "proba-cond": { p: "probabilités? conditionnelles?|lois? conditionnelles?", t: "Probabilité conditionnelle", b: R`<div class="sbox">$$P(A\mid B) = \frac{P(A\cap B)}{P(B)}\quad(P(B)>0).$$</div><p>Formule des probabilités composées : $P(A\cap B) = P(B)\,P(A\mid B)$.</p>` }
});

/* Diagramme en bâtons pour une loi discrète */
window.__LA.BARS = (vals, labs, cap, label, o = {}) => {
  const { FIG, S, f1 } = window.__LA;
  const w = o.w || 420, h = o.h || 210, l = 40, b = 30, t = 16, n = vals.length, M = o.max || Math.max(...vals) * 1.15;
  const X = k => l + (k + 0.5) * (w - l - 16) / n, Y = v => h - b - v / M * (h - b - t), bw = Math.min(34, (w - l - 16) / n * 0.55);
  let s = `<line class="ax" x1="${l}" y1="${h - b}" x2="${w - 8}" y2="${h - b}"/>`;
  vals.forEach((v, k) => { s += `<rect x="${f1(X(k) - bw / 2)}" y="${f1(Y(v))}" width="${f1(bw)}" height="${f1(h - b - Y(v))}" class="mass"/>` + S(X(k), h - b + 16, labs[k], "middle") + S(X(k), Y(v) - 5, o.fmt ? o.fmt(v) : String(+v.toFixed(3)).replace(".", ","), "middle"); });
  return FIG(w, h, s, cap, label);
};

/* ===== Algèbre linéaire (chap. 1) et réduction (chap. 2) ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1 } = window.__LA;
LEMME.exercises([
{
  id: "o-an-59", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 2, time: "20 min",
  title: "L'endomorphisme P ↦ P + 2P′",
  enonce: R`<p>Soit $n\geqslant2$ et $E = \mathbb K_n[X]$ ($\mathbb K = \mathbb R$ ou $\mathbb C$). Pour $P\in E$, on pose $f(P) = P+2P'$.</p>
<ol>
<li>Montrer que $f$ est un automorphisme de $E$ :<ol style="list-style:lower-alpha"><li>sans utiliser de matrice ;</li><li>avec une matrice de $f$.</li></ol></li>
<li>Soit $Q\in E$. Trouver $P$ tel que $f(P) = Q$. On pourra remarquer que $P^{(n+1)} = 0$ pour tout $P\in E$.</li>
<li>$f$ est-il diagonalisable ?</li>
</ol>`,
  decode: { donnees: [R`$f = \mathrm{Id}+2D$ où $D : P\mapsto P'$ est la dérivation.`], but: R`Bijectivité, inverse explicite, diagonalisabilité.`, cles: {
    deg: R`Si $P\neq0$ : $\deg P'<\deg P$, donc $\deg(P+2P') = \deg P$. En particulier $P+2P'\neq0$.`,
    nil: R`$D^{n+1} = 0$ sur $E$ : dériver $n+1$ fois un polynôme de degré $\leqslant n$ donne $0$. Donc $$(\mathrm{Id}+2D)\sum_{k=0}^n(-2D)^k = \mathrm{Id}-(-2D)^{n+1} = \mathrm{Id}.$$` } },
  steps: [
    { q: 1, t: "Sans matrice : noyau nul", h: R`<p>En dimension finie, un endomorphisme injectif est bijectif. On regarde le degré de $P+2P'$.</p>`, b: R`<p>$f$ est linéaire et va de $E$ dans $E$ (le degré ne monte pas). Si $P\neq0$, <span data-k="deg">$\deg(P+2P') = \deg P$</span>, donc $f(P)\neq0$. Ainsi $\ker f = \{0\}$ : $f$ est injectif, donc bijectif ($\dim E = n+1$ finie).</p>`, rappels: ["o-b-ker-inj"] },
    { q: 1, t: "Avec la matrice", h: R`<p>Dans la base $(1,X,\dots,X^n)$, $f(X^k) = X^k+2kX^{k-1}$ : la matrice est triangulaire.</p>`, b: R`$$\operatorname{Mat}(f) = \begin{pmatrix}1&2&0&\cdots&0\\0&1&4&\ddots&\vdots\\\vdots&&\ddots&\ddots&0\\&&&1&2n\\0&\cdots&&0&1\end{pmatrix},\qquad\det f = 1\neq0.$$<p>$f$ est un automorphisme.</p>`, rappels: ["o-b-triang"] },
    { q: 2, t: "L'inverse par une série finie", h: R`<p>Comme $\frac1{1+2x} = \sum(-2x)^k$, on essaie $f^{-1} = \sum(-2D)^k$ ; la somme s'arrête car $D$ est nilpotent.</p>`, b: R`<p><span data-k="nil">$D^{n+1} = 0$</span>, donc $f\circ\sum_{k=0}^n(-2)^kD^k = \mathrm{Id}$. Pour $Q\in E$ :</p><div class="sbox">$$P = \sum_{k=0}^n(-2)^kQ^{(k)} = Q-2Q'+4Q''-\dots+(-2)^nQ^{(n)}.$$</div><p><b>Exemple :</b> $Q = X^2$ donne $P = X^2-4X+8$, et $P+2P' = X^2-4X+8+4X-8 = X^2$.</p>` },
    { q: 3, t: "Une seule valeur propre", h: R`<p>Matrice triangulaire avec des $1$ sur la diagonale : la seule valeur propre est $1$. Un endomorphisme diagonalisable avec une seule valeur propre est une homothétie.</p>`, b: R`<p>$\operatorname{sp}(f) = \{1\}$. Si $f$ était diagonalisable, on aurait $f = \mathrm{Id}$. Or $f(X) = X+2\neq X$.</p><div class="sbox">$$f\ \text{n'est pas diagonalisable}.$$</div>`, rappels: ["o-b-diag-crit"] }
  ],
  ctx: { "o-b-ker-inj": R`<p>$\ker f = \{0\}$ et $\dim E<\infty$.</p>`, "o-b-triang": R`<p>Diagonale formée de $1$ : $\det f = 1$ et $\operatorname{sp}(f) = \{1\}$.</p>`, "o-b-diag-crit": R`<p>Une seule valeur propre $1$ : diagonalisable $\iff f = \mathrm{Id}$.</p>` },
  piege: R`Oublier de vérifier que $f(P)$ reste dans $E$ (degré $\leqslant n$), ou conclure « diagonalisable car inversible ».`,
  methode: R`$\mathrm{Id}+\lambda D$ avec $D$ nilpotent : inverse $\sum(-\lambda D)^k$ ; une seule valeur propre $+$ pas une homothétie $\Rightarrow$ pas diagonalisable.`
},
{
  id: "o-an-60", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 2, time: "20 min",
  title: "Multiplication à gauche par une matrice de rang 1",
  enonce: R`<p>Soit $A = \begin{pmatrix}1&-1\\-2&2\end{pmatrix}$ et $f$ l'endomorphisme de $\mathcal M_2(\mathbb R)$ défini par $f(M) = AM$.</p>
<ol><li>Déterminer une base de $\ker f$.</li><li>$f$ est-il surjectif ?</li><li>Déterminer une base de $\operatorname{Im}f$.</li><li>A-t-on $\mathcal M_2(\mathbb R) = \ker f\oplus\operatorname{Im}f$ ?</li></ol>`,
  decode: { donnees: [R`$A$ de rang $1$ : ses colonnes sont proportionnelles.`], but: R`Noyau, image, et leur position relative.`, cles: {
    col: R`$AM$ a pour colonnes $A\,C_1$ et $A\,C_2$, où $C_1$, $C_2$ sont les colonnes de $M$ : on travaille colonne par colonne.`,
    kerA: R`$\ker A = \operatorname{Vect}\begin{pmatrix}1\\1\end{pmatrix}$ et $\operatorname{Im}A = \operatorname{Vect}\begin{pmatrix}1\\-2\end{pmatrix}$.` } },
  steps: [
    { q: 1, t: "Le noyau", h: R`<p>$AM = 0$ signifie que chaque colonne de $M$ est dans $\ker A$.</p>`, b: R`<p>Avec $M = \begin{pmatrix}x&y\\z&t\end{pmatrix}$ : $AM = \begin{pmatrix}x-z&y-t\\-2(x-z)&-2(y-t)\end{pmatrix}$. Donc $AM = 0\iff x = z$ et $y = t$.</p><div class="sbox">$$\ker f = \operatorname{Vect}\Big(\begin{pmatrix}1&0\\1&0\end{pmatrix},\begin{pmatrix}0&1\\0&1\end{pmatrix}\Big),\qquad\dim\ker f = 2.$$</div>` },
    { q: 2, t: "Surjectivité", h: R`<p>Endomorphisme en dimension finie : surjectif $\iff$ injectif.</p>`, b: R`<p>$\ker f\neq\{0\}$ : $f$ n'est pas injectif, donc pas surjectif.</p>`, rappels: ["o-b-ker-inj"] },
    { q: 3, t: "L'image", h: R`<p>Chaque colonne de $AM$ est dans $\operatorname{Im}A$, droite dirigée par $(1,-2)$. Le théorème du rang donne la dimension.</p>`, b: R`<p><span data-k="col">Colonne par colonne</span>, les colonnes de $AM$ sont dans <span data-k="kerA">$\operatorname{Vect}(1,-2)$</span>. Donc $\operatorname{Im}f\subset G = \operatorname{Vect}\Big(\begin{pmatrix}1&0\\-2&0\end{pmatrix},\begin{pmatrix}0&1\\0&-2\end{pmatrix}\Big)$. Par le théorème du rang, $\dim\operatorname{Im}f = 4-2 = 2 = \dim G$ :</p><div class="sbox">$$\operatorname{Im}f = \operatorname{Vect}\Big(\begin{pmatrix}1&0\\-2&0\end{pmatrix},\begin{pmatrix}0&1\\0&-2\end{pmatrix}\Big).$$</div>`, rappels: ["o-b-rang"] },
    { q: 4, t: "Somme directe ?", h: R`<p>Intersection nulle et dimensions qui s'ajoutent à $4$.</p>`, b: R`<p>Si $M\in\ker f\cap\operatorname{Im}f$, ses colonnes sont dans $\operatorname{Vect}(1,1)\cap\operatorname{Vect}(1,-2) = \{0\}$ : $M = 0$. Et $2+2 = 4$.</p><div class="sbox">$$\mathcal M_2(\mathbb R) = \ker f\oplus\operatorname{Im}f.$$</div>`, rappels: ["o-b-supp"] }
  ],
  ctx: { "o-b-ker-inj": R`<p>$\dim\ker f = 2>0$.</p>`, "o-b-rang": R`<p>$4 = \operatorname{rg}f+2$.</p>`, "o-b-supp": R`<p>$\ker f\cap\operatorname{Im}f = \{0\}$ et $2+2 = 4$.</p>` },
  piege: R`Croire que $\ker f\oplus\operatorname{Im}f = E$ est automatique : c'est faux en général (par exemple pour un endomorphisme nilpotent non nul).`,
  methode: R`$f(M) = AM$ : raisonner colonne par colonne avec $\ker A$ et $\operatorname{Im}A$.`
},
{
  id: "o-an-64", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 3, time: "20 min",
  title: "Noyau, image et image du carré",
  enonce: R`<p>Soit $f$ un endomorphisme d'un espace $E$ de dimension finie $n$.</p>
<ol><li>Montrer que $E = \operatorname{Im}f\oplus\ker f\Longrightarrow\operatorname{Im}f = \operatorname{Im}f^2$.</li><li><ol style="list-style:lower-alpha"><li>Montrer que $\operatorname{Im}f = \operatorname{Im}f^2\iff\ker f = \ker f^2$.</li><li>Montrer que $\operatorname{Im}f = \operatorname{Im}f^2\Longrightarrow E = \operatorname{Im}f\oplus\ker f$.</li></ol></li></ol>`,
  decode: { donnees: [R`$\dim E = n$ finie.`], but: R`Trois conditions équivalentes sur $f$.`, cles: {
    incl: R`Toujours : $\operatorname{Im}f^2\subset\operatorname{Im}f$ (car $f^2(x) = f(f(x))$) et $\ker f\subset\ker f^2$.`,
    ex: R`Contre-exemple instructif : $N = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ : $\operatorname{Im}N = \ker N = \operatorname{Vect}(e_1)$, $N^2 = 0$. Aucune des trois propriétés n'est vraie.` } },
  steps: [
    { q: 1, t: "Une inclusion gratuite, l'autre par décomposition", h: R`<p>On décompose l'antécédent $x$ selon $\operatorname{Im}f\oplus\ker f$ : la partie dans le noyau disparaît quand on applique $f$.</p>`, b: R`<p><span data-k="incl">$\operatorname{Im}f^2\subset\operatorname{Im}f$</span>. Soit $y = f(x)$. On écrit $x = a+b$ avec $a = f(c)\in\operatorname{Im}f$ et $b\in\ker f$. Alors $y = f(a)+f(b) = f^2(c)\in\operatorname{Im}f^2$.</p>` },
    { q: 2, t: "Équivalence par les dimensions", h: R`<p>Deux sous-espaces emboîtés sont égaux s'ils ont même dimension, et le théorème du rang relie $\dim\operatorname{Im}$ et $\dim\ker$.</p>`, b: R`$$\operatorname{Im}f = \operatorname{Im}f^2\iff\operatorname{rg}f = \operatorname{rg}f^2\iff n-\dim\ker f = n-\dim\ker f^2\iff\ker f = \ker f^2,$$<p>la première et la dernière équivalence venant des inclusions $\operatorname{Im}f^2\subset\operatorname{Im}f$ et $\ker f\subset\ker f^2$.</p>`, rappels: ["o-b-rang"] },
    { q: 2, t: "Intersection nulle et dimensions", h: R`<p>Un vecteur de $\operatorname{Im}f\cap\ker f$ s'écrit $f(x)$ avec $f^2(x) = 0$ : $x\in\ker f^2 = \ker f$.</p>`, b: R`<p>Si $y = f(x)\in\ker f$, alors $f^2(x) = 0$, donc $x\in\ker f^2 = \ker f$ (question 2.a), donc $y = 0$. Et $\dim\operatorname{Im}f+\dim\ker f = n$. Donc</p><div class="sbox">$$E = \operatorname{Im}f\oplus\ker f.$$</div><p><span data-k="ex">Contre-exemple</span> : un nilpotent non nul ne vérifie aucune des propriétés.</p>`, rappels: ["o-b-supp"] }
  ],
  ctx: { "o-b-rang": R`<p>Appliqué à $f$ et à $f^2$.</p>`, "o-b-supp": R`<p>Intersection nulle $+$ somme des dimensions égale à $n$.</p>` },
  piege: R`Oublier les inclusions automatiques : sans elles, l'égalité des dimensions ne donne rien.`,
  methode: R`Sous-espaces emboîtés : égalité des dimensions. Somme directe en dimension finie : intersection nulle $+$ théorème du rang.`
},
{
  id: "o-an-71", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 2, time: "20 min",
  title: "Projection sur un plan parallèlement à une droite",
  enonce: R`<p>Dans $\mathbb R^3$, soit $P$ le plan d'équation $x-y+2z = 0$ et $D = \operatorname{Vect}(w)$ avec $w = (1,1,1)$.</p>
<ol><li>Vérifier que $\mathbb R^3 = P\oplus D$.</li><li>Soit $p$ la projection sur $P$ parallèlement à $D$. Pour $u = (x,y,z)$, calculer $p(u)$ et donner la matrice de $p$ dans la base canonique.</li><li>Trouver une base de $\mathbb R^3$ où la matrice de $p$ est diagonale.</li></ol>`,
  decode: { donnees: [R`$P : x-y+2z = 0$, $D$ dirigée par $(1,1,1)$.`], but: R`Décomposer $u$ en une partie dans $P$ et une partie dans $D$.`, cles: {
    dec: R`On cherche $t$ tel que $u-tw\in P$. Alors $u = \underbrace{(u-tw)}_{\in P}+\underbrace{tw}_{\in D}$ et $p(u) = u-tw$.` } },
  steps: [
    { q: 1, t: "Somme directe", h: R`<p>Dimensions $2+1 = 3$ : il suffit que $w\notin P$.</p>`, b: R`<p>$1-1+2\cdot1 = 2\neq0$ : $w\notin P$, donc $P\cap D = \{0\}$, et $\dim P+\dim D = 3$ : $\mathbb R^3 = P\oplus D$.</p>`, rappels: ["o-b-supp"] },
    { q: 2, t: "Calculer p(u)", h: R`<p>On retire à $u$ le bon multiple de $w$ pour tomber dans le plan.</p>`, b: R`<p><span data-k="dec">On cherche $t$</span> : $(x-t)-(y-t)+2(z-t) = 0\iff t = \frac{x-y+2z}2$. Donc</p><div class="sbox">$$p(u) = u-\frac{x-y+2z}2(1,1,1),\qquad\operatorname{Mat}(p) = \frac12\begin{pmatrix}1&1&-2\\-1&3&-2\\-1&1&0\end{pmatrix}.$$</div><p><b>Contrôle :</b> $\operatorname{tr} = \frac{1+3+0}2 = 2 = \operatorname{rg}p$.</p>` + FIG(380, 220, `<path d="M40 150 L250 190 L340 110 L130 70 Z" style="fill:var(--yellow-soft);stroke:var(--gold-ink);stroke-width:1.2"/>` + S(300, 175, "P", "start", "it") + `<line class="thin" x1="190" y1="40" x2="190" y2="200"/>` + S(196, 50, "D", "start", "it") + ARR(110, 140, 190, 60, "b") + S(196, 70, "u", "start", "it b") + ARR(110, 140, 190, 128, "r") + S(180, 150, "p(u)", "middle", "sm r") + `<line class="vg" style="stroke-dasharray:4 3;stroke-width:1.6" x1="190" y1="60" x2="190" y2="128"/>` + S(200, 100, "t w", "start", "sm g"), R`$p(u)$ est le point du plan $P$ obtenu en descendant depuis $u$ parallèlement à $D$.`, "Projection sur un plan parallèlement à une droite") },
    { q: 3, t: "Base adaptée", h: R`<p>Dans une base formée de vecteurs de $P$ puis de $D$, $p$ agit comme $\operatorname{diag}(1,1,0)$.</p>`, b: R`<p>$(1,1,0)$ et $(0,2,1)$ sont dans $P$ et libres ; avec $w = (1,1,1)$ on obtient une base de $\mathbb R^3$ :</p><div class="sbox">$$\operatorname{Mat}_{((1,1,0),(0,2,1),(1,1,1))}(p) = \begin{pmatrix}1&0&0\\0&1&0\\0&0&0\end{pmatrix}.$$</div>` }
  ],
  ctx: { "o-b-supp": R`<p>$P\cap D = \{0\}$ car $w\notin P$, et $2+1 = 3$.</p>` },
  piege: R`Confondre avec la projection orthogonale : ici on projette parallèlement à $D$, qui n'est pas orthogonale au plan.`,
  methode: R`Projection sur $F$ parallèlement à $\operatorname{Vect}(w)$ : $p(u) = u-tw$ avec $t$ fixé par l'équation de $F$.`
},
{
  id: "o-an-85", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 2, time: "20 min",
  title: "Formule de Taylor et racines multiples",
  enonce: R`<ol><li>Soient $n\geqslant1$, $P\in\mathbb R_n[X]$ et $a\in\mathbb R$.<ol style="list-style:lower-alpha"><li>Donner, sans démonstration, la décomposition de $P$ dans la base $\big(1,X-a,\dots,(X-a)^n\big)$.</li><li>Soit $r\geqslant1$. En déduire que $a$ est racine d'ordre $r$ de $P$ si et seulement si $P(a) = \dots = P^{(r-1)}(a) = 0$ et $P^{(r)}(a)\neq0$.</li></ol></li><li>Déterminer $a,b$ réels pour que $1$ soit racine double de $P = X^5+aX^3+bX$, puis factoriser $P$ dans $\mathbb R[X]$.</li></ol>`,
  decode: { donnees: [R`Formule de Taylor pour les polynômes.`], but: R`Caractériser la multiplicité par les dérivées, puis l'appliquer.`, cles: {
    ordre: R`$a$ est racine d'ordre $r$ : $(X-a)^r$ divise $P$ et $(X-a)^{r+1}$ ne le divise pas.`,
    bic: R`$X^4-2X^2+1 = (X^2-1)^2 = (X-1)^2(X+1)^2$.` } },
  steps: [
    { q: 1, t: "Taylor", h: R`<p>À connaître : coefficients $\frac{P^{(k)}(a)}{k!}$.</p>`, b: R`<p>Formule de Taylor pour les polynômes : pour $P\in\mathbb R_n[X]$,</p><div class="sbox">$$P = \sum_{k=0}^n\frac{P^{(k)}(a)}{k!}(X-a)^k.$$</div><p>Exemple : $P = X^2$, $a = 1$ : $P(1) = 1$, $P'(1) = 2$, $P''(1) = 2$, d'où $X^2 = 1+2(X-1)+(X-1)^2$ ✓.</p>`, rappels: ["o-b-taylor-poly"] },
    { q: 1, t: "Lire la multiplicité", h: R`<p>Dans cette écriture, $(X-a)^r$ divise $P$ exactement quand les coefficients des $(X-a)^k$, $k< r$, sont nuls.</p>`, b: R`<p>$a$ est racine <span data-k="ordre">d'ordre $r$</span> si $P = (X-a)^rQ$ avec $Q(a)\neq0$.</p><ul><li>Si $P^{(k)}(a) = 0$ pour $k< r$, la formule de Taylor ne contient que des termes en $(X-a)^k$ avec $k\geqslant r$ : on factorise $(X-a)^r$, et $Q(a) = \frac{P^{(r)}(a)}{r!}\neq0$.</li><li>Réciproquement, si $P = (X-a)^rQ$, on développe $Q$ par Taylor en $a$ : $P = \sum_jc_j(X-a)^{r+j}$ avec $c_0 = Q(a)\neq0$. Par unicité des coordonnées dans la base $((X-a)^k)$, les coefficients d'indice $k< r$ sont nuls et celui d'indice $r$ vaut $Q(a)$.</li></ul><div class="sbox">$$P(a) = P'(a) = \dots = P^{(r-1)}(a) = 0,\qquad P^{(r)}(a)\neq0.$$</div>` },
    { q: 2, t: "Système sur a et b", h: R`<p>Racine double : $P(1) = P'(1) = 0$ et $P''(1)\neq0$.</p>`, b: R`<p>On calcule $P' = 5X^4+3aX^2+b$, puis :</p>$$\begin{cases}P(1) = 1+a+b = 0\\P'(1) = 5+3a+b = 0\end{cases}$$<p>On soustrait la première ligne à la seconde : $4+2a = 0$, donc $a = -2$, puis $b = -1-a = 1$.</p><p>On vérifie que la racine n'est pas triple : $P'' = 20X^3+6aX$, $P''(1) = 20-12 = 8\neq0$. Donc $1$ est racine double exactement.</p>` },
    { q: 2, t: "Factoriser", h: R`<p>Mets $X$ en facteur et reconnais une identité remarquable.</p>`, b: R`<p>Avec $a = -2$, $b = 1$ :</p>$$P = X^5-2X^3+X = X(X^4-2X^2+1).$$<p>En posant $Y = X^2$ : $Y^2-2Y+1 = (Y-1)^2$, donc <span data-k="bic">$X^4-2X^2+1 = (X^2-1)^2 = (X-1)^2(X+1)^2$</span> :</p><div class="sbox">$$P = X(X-1)^2(X+1)^2.$$</div><p>On retrouve $1$ racine double, et en bonus $-1$ double et $0$ simple ($P$ est impair).</p>` }
  ],
  ctx: { "o-b-taylor-poly": R`<p>Utilisée en $a$ quelconque, puis en $a = 1$.</p>` },
  piege: R`Vérifier seulement $P(1) = P'(1) = 0$ : cela donne « au moins double ». Il faut $P''(1)\neq0$ pour « exactement double ».`,
  methode: R`Multiplicité $r$ : annulation des $r$ premières dérivées, non-annulation de la $r$-ième.`
},
{
  id: "o-an-87", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 2, time: "20 min",
  title: "Interpolation de Lagrange",
  enonce: R`<p>Soient $a_0,\dots,a_n$ des réels deux à deux distincts.</p>
<ol><li>Montrer que pour tous réels $b_0,\dots,b_n$, il existe un unique $P$ de degré $\leqslant n$ avec $P(a_i) = b_i$ pour tout $i$.</li><li>Pour $k\in[\![0,n]\!]$, expliciter ce polynôme, noté $L_k$, lorsque $b_i = 1$ si $i = k$ et $b_i = 0$ sinon.</li><li>Montrer que $\sum_{k=0}^na_k^pL_k = X^p$ pour tout $p\in[\![0,n]\!]$.</li></ol>`,
  decode: { donnees: [R`$n+1$ abscisses distinctes.`], but: R`Existence, unicité et forme explicite du polynôme interpolateur.`, cles: {
    phi: R`$\varphi : \mathbb R_n[X]\to\mathbb R^{n+1}$, $P\mapsto\big(P(a_0),\dots,P(a_n)\big)$ : linéaire, entre deux espaces de dimension $n+1$.`,
    lk: R`$L_k$ doit s'annuler en tous les $a_i$, $i\neq k$ : il est multiple de $\prod_{i\neq k}(X-a_i)$, de degré $n$. On normalise pour avoir $L_k(a_k) = 1$.` } },
  steps: [
    { q: 1, t: "Un isomorphisme", h: R`<p>Existence et unicité pour tout second membre : c'est exactement la bijectivité de $\varphi$.</p>`, b: R`<p><span data-k="phi">$\varphi$</span> est linéaire. Si $\varphi(P) = 0$, $P$ a $n+1$ racines distinctes avec $\deg P\leqslant n$ : $P = 0$. $\varphi$ est injective entre espaces de même dimension, donc bijective : pour tout $(b_i)$, un unique $P$ convient.</p>`, rappels: ["o-b-racines-poly", "o-b-iso"] },
    { q: 2, t: "Les polynômes L_k", h: R`<p>On construit d'abord un polynôme qui s'annule là où il faut, puis on le normalise.</p>`, b: R`<p><span data-k="lk">Forme</span> :</p><div class="sbox">$$L_k = \prod_{i\neq k}\frac{X-a_i}{a_k-a_i}.$$</div><p>Il est de degré $n$, vaut $0$ en $a_i$ ($i\neq k$) et $1$ en $a_k$ ; par unicité, c'est le polynôme cherché.</p>`, rappels: ["o-b-lagrange"] },
    { q: 3, t: "Interpoler X^p", h: R`<p>Deux polynômes de degré $\leqslant n$ qui coïncident en $n+1$ points sont égaux.</p>`, b: R`<p>$Q = \sum_ka_k^pL_k$ est de degré $\leqslant n$ et $Q(a_i) = a_i^p$. $X^p$ aussi ($p\leqslant n$). Par unicité :</p><div class="sbox">$$\sum_{k=0}^na_k^pL_k = X^p.$$</div><p>Pour $p = 0$ : $\sum L_k = 1$. <b>Exemple</b> ($a = 0,1,2$, $p = 2$) : $L_1+4L_2 = -X(X-2)+2X(X-1) = X^2$.</p>` }
  ],
  ctx: { "o-b-racines-poly": R`<p>$\deg P\leqslant n$ et $n+1$ racines : $P = 0$.</p>`, "o-b-iso": R`<p>$\dim\mathbb R_n[X] = \dim\mathbb R^{n+1} = n+1$.</p>`, "o-b-lagrange": R`<p>$L_k(a_i) = \delta_{ik}$.</p>` },
  piege: R`Oublier que $p\leqslant n$ dans la question 3 : pour $p>n$, $X^p$ n'est pas dans $\mathbb R_n[X]$ et l'égalité est fausse.`,
  methode: R`Unicité par l'injectivité de l'évaluation ; égalités de polynômes par « mêmes valeurs en $n+1$ points ».`
},
{
  id: "o-an-90", subj: "oraux", year: "mp", chap: 0, concours: "ccinp", level: 2, time: "20 min",
  title: "Une parabole par trois points",
  enonce: R`<p>Soient $a_1,a_2,a_3$ trois scalaires distincts de $\mathbb K$.</p>
<ol><li>Montrer que $\Phi : P\mapsto\big(P(a_1),P(a_2),P(a_3)\big)$ est un isomorphisme de $\mathbb K_2[X]$ sur $\mathbb K^3$.</li><li>Soit $(e_1,e_2,e_3)$ la base canonique de $\mathbb K^3$ et $L_k = \Phi^{-1}(e_k)$.<ol style="list-style:lower-alpha"><li>Justifier que $(L_1,L_2,L_3)$ est une base de $\mathbb K_2[X]$.</li><li>Exprimer les $L_k$ en fonction de $a_1,a_2,a_3$.</li></ol></li><li>Soit $P\in\mathbb K_2[X]$. Donner ses coordonnées dans la base $(L_1,L_2,L_3)$.</li><li>Application : trouver une fonction polynomiale de degré $2$ dont la courbe passe par $A(-1,2)$, $B(1,0)$ et $C(2,5)$.</li></ol>`,
  decode: { donnees: [R`Trois abscisses distinctes.`], but: R`La base de Lagrange et une interpolation concrète.`, cles: {
    image: R`Un isomorphisme envoie une base sur une base ; $\Phi^{-1}$ aussi.`,
    coord: R`$\Phi(P) = \sum P(a_k)e_k$, donc en appliquant $\Phi^{-1}$ : $P = \sum P(a_k)L_k$.` } },
  steps: [
    { q: 1, t: "Isomorphisme", h: R`<p>Linéaire, injective, même dimension $3$.</p>`, b: R`<p>$\Phi$ est linéaire. Si $\Phi(P) = 0$, $P$ de degré $\leqslant2$ a trois racines : $P = 0$. Injective et $\dim\mathbb K_2[X] = \dim\mathbb K^3 = 3$ : isomorphisme.</p>`, rappels: ["o-b-iso", "o-b-racines-poly"] },
    { q: 2, t: "Base et formules", h: R`<p><span data-k="image">Image d'une base par un isomorphisme</span>. Pour $L_1$ : nul en $a_2$, $a_3$, égal à $1$ en $a_1$.</p>`, b: R`<p>$(L_k)$ est l'image de la base canonique par l'isomorphisme $\Phi^{-1}$ : c'est une base.</p><div class="sbox">$$L_1 = \frac{(X-a_2)(X-a_3)}{(a_1-a_2)(a_1-a_3)},\quad L_2 = \frac{(X-a_1)(X-a_3)}{(a_2-a_1)(a_2-a_3)},\quad L_3 = \frac{(X-a_1)(X-a_2)}{(a_3-a_1)(a_3-a_2)}.$$</div>`, rappels: ["o-b-lagrange"] },
    { q: 3, t: "Coordonnées", h: R`<p>On décompose $\Phi(P)$ dans la base canonique.</p>`, b: R`<p><span data-k="coord">$P = P(a_1)L_1+P(a_2)L_2+P(a_3)L_3$</span> : les coordonnées de $P$ sont ses valeurs aux trois points.</p>` },
    { q: 4, t: "Application", h: R`<p>$a = (-1,1,2)$, valeurs $(2,0,5)$ : $P = 2L_1+5L_3$.</p>`, b: R`$$L_1 = \frac{(X-1)(X-2)}6,\qquad L_3 = \frac{(X+1)(X-1)}3,$$$$P = \frac{X^2-3X+2}3+\frac{5(X^2-1)}3 = 2X^2-X-1.$$<div class="sbox">$$x\mapsto2x^2-x-1.$$</div><p><b>Contrôle :</b> $P(-1) = 2$, $P(1) = 0$, $P(2) = 5$.</p>` + GRAPH({ w: 400, h: 220, x: [-1.6, 2.4], y: [-1.5, 6], xt: [-1, 1, 2], yt: [2, 4], xl: "x", curves: [{ f: x => 2 * x * x - x - 1, c: "b" }], extra: (X, Y) => [[-1, 2, "A"], [1, 0, "B"], [2, 5, "C"]].map(([x, y, t]) => `<circle cx="${f1(X(x))}" cy="${f1(Y(y))}" r="5" class="mass"/>` + S(X(x) + 8, Y(y) - 6, t, "start", "it")).join("") }, R`La parabole $y = 2x^2-x-1$ passe par les trois points.`, "Parabole passant par trois points") }
  ],
  ctx: { "o-b-iso": R`<p>Injective entre espaces de dimension $3$.</p>`, "o-b-racines-poly": R`<p>Degré $\leqslant2$, trois racines.</p>`, "o-b-lagrange": R`<p>Cas $n = 2$.</p>` },
  piege: R`Chercher $P = \alpha X^2+\beta X+\gamma$ par un système $3\times3$ : ça marche, mais la base de Lagrange donne la réponse directement.`,
  methode: R`Interpolation : $P = \sum b_kL_k$.`
},
{
  id: "o-an-62", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 2, time: "20 min",
  title: "Un endomorphisme annulé par (X − 1)(X − 2)",
  enonce: R`<p>Soit $E$ un espace vectoriel sur $\mathbb R$ ou $\mathbb C$ et $f\in\mathcal L(E)$ tel que $f^2-3f+2\,\mathrm{Id} = 0$.</p>
<ol><li>Montrer que $f$ est bijectif et exprimer $f^{-1}$ en fonction de $f$.</li><li>Montrer que $E = \ker(f-\mathrm{Id})\oplus\ker(f-2\mathrm{Id})$ :<ol style="list-style:lower-alpha"><li>avec le lemme des noyaux ;</li><li>sans le lemme des noyaux.</li></ol></li><li>On suppose $\dim E$ finie. Montrer que $\operatorname{Im}(f-\mathrm{Id}) = \ker(f-2\mathrm{Id})$.</li></ol>`,
  decode: { donnees: [R`$X^2-3X+2 = (X-1)(X-2)$ annule $f$.`], but: R`Inverse, décomposition de $E$, et une égalité image-noyau.`, cles: {
    deco: R`On cherche $x = a+b$ avec $f(a) = a$ et $f(b) = 2b$. En appliquant $f$ : $f(x) = a+2b$. Donc $b = f(x)-x$ et $a = 2x-f(x)$.`,
    comp: R`$(f-2\mathrm{Id})\circ(f-\mathrm{Id}) = f^2-3f+2\mathrm{Id} = 0$, donc $\operatorname{Im}(f-\mathrm{Id})\subset\ker(f-2\mathrm{Id})$.` } },
  steps: [
    { q: 1, t: "Inverse", h: R`<p>On isole $\mathrm{Id}$ : $f\circ(3\mathrm{Id}-f) = 2\mathrm{Id}$.</p>`, b: R`<p>On isole $2\,\mathrm{Id}$ dans la relation : $2\,\mathrm{Id} = 3f-f^2 = f\circ(3\,\mathrm{Id}-f)$. On divise par $2$ :</p>$$f\circ\frac{3\mathrm{Id}-f}2 = \frac{3\mathrm{Id}-f}2\circ f = \mathrm{Id}$$<p>(les polynômes en $f$ commutent). Donc $f$ est bijectif et</p><div class="sbox">$$f^{-1} = \frac{3\mathrm{Id}-f}2.$$</div>` },
    { q: 2, t: "Lemme des noyaux", h: R`<p>$X-1$ et $X-2$ sont premiers entre eux et leur produit annule $f$.</p>`, b: R`<p>$(X-1)\wedge(X-2) = 1$ et $\ker\big((f-\mathrm{Id})(f-2\mathrm{Id})\big) = \ker0 = E$ :</p><div class="sbox">$$E = \ker(f-\mathrm{Id})\oplus\ker(f-2\mathrm{Id}).$$</div>`, rappels: ["o-b-noyaux"] },
    { q: 2, t: "À la main", h: R`<p>Analyse-synthèse : on trouve la seule décomposition possible, puis on vérifie qu'elle marche.</p>`, b: R`<p><b>Analyse</b> : si $x = a+b$ avec $f(a) = a$ et $f(b) = 2b$, alors $f(x) = a+2b$. On résout le système $x = a+b$, $f(x) = a+2b$ : en soustrayant, $b = f(x)-x$, puis $a = x-b = 2x-f(x)$. <span data-k="deco">Donc forcément $a = 2x-f(x)$ et $b = f(x)-x$</span> : c'est l'unicité. <b>Synthèse</b> : $a+b = x$, et</p>$$(f-\mathrm{Id})(a) = -(f^2-3f+2\mathrm{Id})(x) = 0,\qquad(f-2\mathrm{Id})(b) = (f^2-3f+2\mathrm{Id})(x) = 0.$$` },
    { q: 3, t: "Image et noyau", h: R`<p>Une inclusion par composition, puis égalité des dimensions.</p>`, b: R`<p><span data-k="comp">Inclusion</span> : $\operatorname{Im}(f-\mathrm{Id})\subset\ker(f-2\mathrm{Id})$. Dimensions : $\dim\operatorname{Im}(f-\mathrm{Id}) = n-\dim\ker(f-\mathrm{Id}) = \dim\ker(f-2\mathrm{Id})$ (question 2).</p><div class="sbox">$$\operatorname{Im}(f-\mathrm{Id}) = \ker(f-2\mathrm{Id}).$$</div>`, rappels: ["o-b-rang"] }
  ],
  ctx: { "o-b-noyaux": R`<p>$P = X-1$, $Q = X-2$, $PQ$ annulateur.</p>`, "o-b-rang": R`<p>Pour $f-\mathrm{Id}$.</p>` },
  piege: R`Écrire $f^{-1}$ sans vérifier les deux compositions (ici elles commutent, donc une suffit en dimension finie).`,
  methode: R`Polynôme annulateur scindé à racines simples : décomposition en sous-espaces propres.`
},
{
  id: "o-an-65", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 2, time: "20 min",
  title: "Polynômes d'endomorphismes et multiples d'un annulateur",
  enonce: R`<p>Soit $u\in\mathcal L(E)$, $E$ espace vectoriel sur $\mathbb K$.</p>
<ol><li>Montrer que $(PQ)(u) = P(u)\circ Q(u)$ pour tous $P,Q\in\mathbb K[X]$.</li><li><ol style="list-style:lower-alpha"><li>Montrer que $P(u)\circ Q(u) = Q(u)\circ P(u)$.</li><li>Montrer que si $P$ annule $u$, alors $PQ$ annule $u$.</li></ol></li><li>Soit $A = \begin{pmatrix}1&1\\2&2\end{pmatrix}$. Calculer $\chi_A$, puis montrer que $R = X^4-2X^3-2X^2-3X$ annule $A$.</li></ol>`,
  decode: { donnees: [R`$P(u) = \sum a_ku^k$ si $P = \sum a_kX^k$.`], but: R`Propriétés de base des polynômes d'endomorphismes, puis un exemple.`, cles: {
    mono: R`Pour des monômes : $(X^kX^l)(u) = u^{k+l} = u^k\circ u^l$. Le cas général s'obtient par linéarité (en $P$ et en $Q$).`,
    div: R`Division de $R$ par $X^2-3X$ : $X^4-2X^3-2X^2-3X = (X^2-3X)(X^2+X+1)$.` } },
  steps: [
    { q: 1, t: "Monômes puis linéarité", h: R`<p>On prouve l'égalité sur les monômes, puis on développe.</p>`, b: R`<p><span data-k="mono">Sur les monômes</span> : $(X^kX^l)(u) = u^{k+l} = u^k\circ u^l$, par définition des puissances de $u$.</p><p>Pour $P = \sum_ka_kX^k$ et $Q = \sum_lb_lX^l$, on a $PQ = \sum_{k,l}a_kb_lX^{k+l}$. La composition est bilinéaire (car $u^k$ est linéaire), donc on peut développer :</p>$$(PQ)(u) = \sum_{k,l}a_kb_lu^{k+l} = \sum_{k,l}a_kb_l\,u^k\circ u^l = \Big(\sum_ka_ku^k\Big)\circ\Big(\sum_lb_lu^l\Big) = P(u)\circ Q(u).$$`, rappels: ["o-b-poly-endo"] },
    { q: 2, t: "Commutation et multiples", h: R`<p>$PQ = QP$ dans $\mathbb K[X]$.</p>`, b: R`<p><b>(a)</b> Le produit des polynômes est commutatif : $PQ = QP$. Par Q1 :</p>$$P(u)\circ Q(u) = (PQ)(u) = (QP)(u) = Q(u)\circ P(u).$$<p><b>(b)</b> Si $P(u) = 0$, alors $(PQ)(u) = Q(u)\circ P(u) = Q(u)\circ0 = 0$ : tout multiple d'un polynôme annulateur est annulateur.</p>` },
    { q: 3, t: "Polynôme caractéristique", h: R`<p>En taille $2$ : $\chi_A = X^2-\operatorname{tr}(A)X+\det A$.</p>`, b: R`<p>$\operatorname{tr}A = 1+2 = 3$ et $\det A = 1\times2-1\times2 = 0$ :</p>$$\chi_A = X^2-3X = X(X-3).$$<p>Par Cayley-Hamilton, $\chi_A(A) = A^2-3A = 0$. Vérification directe : $A^2 = \begin{pmatrix}1+2&1+2\\2+4&2+4\end{pmatrix} = \begin{pmatrix}3&3\\6&6\end{pmatrix} = 3A$ ✓.</p>`, rappels: ["o-b-cayley"] },
    { q: 3, t: "R est un multiple de χ_A", h: R`<p>Factorise $R$ par $X$, puis divise $X^3-2X^2-2X-3$ par $X-3$.</p>`, b: R`<p>$R = X^4-2X^3-2X^2-3X = X(X^3-2X^2-2X-3)$. Le polynôme $X^3-2X^2-2X-3$ s'annule en $3$ : $27-18-6-3 = 0$. On le divise par $X-3$ :</p>$$X^3-2X^2-2X-3 = (X-3)(X^2+X+1).$$<p>(On vérifie en développant : $X^3+X^2+X-3X^2-3X-3$ ✓.) <span data-k="div">Donc $R = X(X-3)(X^2+X+1) = \chi_A\cdot(X^2+X+1)$</span>. Par 2.b :</p><div class="sbox">$$R(A) = 0.$$</div>` }
  ],
  ctx: { "o-b-poly-endo": R`<p>On le démontre ici.</p>`, "o-b-cayley": R`<p>$\chi_A = X^2-3X$ annule $A$.</p>` },
  piege: R`Calculer $A^4$, $A^3$, $A^2$ pour vérifier $R(A) = 0$ : c'est long ; la factorisation est immédiate.`,
  methode: R`Pour montrer qu'un polynôme annule $A$ : le diviser par $\chi_A$ (ou par le polynôme minimal).`
},
{
  id: "o-an-67", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 2, time: "15 min",
  title: "Une matrice antisymétrique 3 × 3",
  enonce: R`<p>Soient $a,b,c$ réels et $M = \begin{pmatrix}0&a&b\\-a&0&c\\-b&-c&0\end{pmatrix}$. $M$ est-elle diagonalisable dans $\mathcal M_3(\mathbb R)$ ? Dans $\mathcal M_3(\mathbb C)$ ?</p>`,
  decode: { donnees: [R`$M^\top = -M$.`], but: R`Diagonalisabilité sur $\mathbb R$ et sur $\mathbb C$ selon $a,b,c$.`, cles: {
    s: R`On note $s = a^2+b^2+c^2\geqslant0$, avec $s = 0\iff a = b = c = 0\iff M = 0$.` } },
  steps: [
    { q: 1, t: "Polynôme caractéristique", h: R`<p>Développement d'un déterminant $3\times3$ par la première ligne.</p>`, b: R`$$\chi_M(x) = \begin{vmatrix}x&-a&-b\\a&x&-c\\b&c&x\end{vmatrix} = x(x^2+c^2)+a(ax+bc)-b(ac-bx) = x\,(x^2+s),$$<p>avec <span data-k="s">$s = a^2+b^2+c^2$</span>.</p>` },
    { q: 1, t: "Discussion", h: R`<p>Si $s>0$, $x^2+s$ n'a pas de racine réelle mais deux racines complexes distinctes.</p>`, b: R`<ul><li>$s = 0$ : $M = 0$, diagonalisable.</li><li>$s>0$ : sur $\mathbb R$, $\chi_M$ n'est pas scindé : $M$ <b>n'est pas diagonalisable</b> dans $\mathcal M_3(\mathbb R)$. Sur $\mathbb C$, les valeurs propres $0$, $i\sqrt s$, $-i\sqrt s$ sont distinctes : $M$ <b>est diagonalisable</b> dans $\mathcal M_3(\mathbb C)$.</li></ul>`, rappels: ["o-b-diag-crit"] }
  ],
  ctx: { "o-b-diag-crit": R`<p>Trois valeurs propres distinctes sur $\mathbb C$ ; polynôme non scindé sur $\mathbb R$.</p>` },
  piege: R`Oublier le cas $M = 0$.`,
  methode: R`Diagonalisabilité selon le corps : scindé sur $\mathbb R$ ou non, valeurs propres distinctes sur $\mathbb C$.`
},
{
  id: "o-an-68", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 2, time: "25 min",
  title: "Quatre preuves de diagonalisabilité",
  enonce: R`<p>Soit $A = \begin{pmatrix}1&1&-1\\1&1&-1\\-1&-1&1\end{pmatrix}$.</p>
<ol><li>Montrer que $A$ est diagonalisable de quatre façons :<ol style="list-style:lower-alpha"><li>sans calcul ;</li><li>en calculant $\det(\lambda I_3-A)$ et les sous-espaces propres ;</li><li>avec le rang de $A$ ;</li><li>en calculant $A^2$.</li></ol></li><li>Soit $f$ l'endomorphisme de $\mathbb R^3$ de matrice $A$ dans la base canonique. Trouver une base orthonormée où la matrice de $f$ est diagonale.</li></ol>`,
  decode: { donnees: [R`$A = vv^\top$ avec $v = (1,1,-1)^\top$.`], but: R`Diagonaliser $A$ de plusieurs façons, puis en base orthonormée.`, cles: {
    vv: R`$A = vv^\top$ avec $v = \begin{pmatrix}1\\1\\-1\end{pmatrix}$ : $Av = v(v^\top v) = 3v$, et $AX = 0\iff v^\top X = 0$.` } },
  steps: [
    { q: 1, t: "(a) Symétrique réelle", h: R`<p>Théorème spectral.</p>`, b: R`<p>$A^\top = A$ : $A$ est symétrique réelle. Par le théorème spectral, elle est diagonalisable (même en base orthonormée).</p>`, rappels: ["o-b-spectral"] },
    { q: 1, t: "(b) Le polynôme caractéristique", h: R`<p>Retranche la ligne $1$ à la ligne $2$, puis développe.</p>`, b: R`<p>$\chi_A(\lambda) = \begin{vmatrix}\lambda-1&-1&1\\-1&\lambda-1&1\\1&1&\lambda-1\end{vmatrix}$. On fait $L_2\leftarrow L_2-L_1$ (ne change pas le déterminant) :</p>$$\chi_A(\lambda) = \begin{vmatrix}\lambda-1&-1&1\\-\lambda&\lambda&0\\1&1&\lambda-1\end{vmatrix} = \lambda\begin{vmatrix}\lambda-1&-1&1\\-1&1&0\\1&1&\lambda-1\end{vmatrix}.$$<p>Puis $C_1\leftarrow C_1+C_2$ : la ligne $2$ devient $(0,1,0)$, et on développe selon elle :</p>$$\chi_A(\lambda) = \lambda\begin{vmatrix}\lambda-2&-1&1\\0&1&0\\2&1&\lambda-1\end{vmatrix} = \lambda\begin{vmatrix}\lambda-2&1\\2&\lambda-1\end{vmatrix} = \lambda\big((\lambda-2)(\lambda-1)-2\big) = \lambda(\lambda^2-3\lambda).$$<div class="sbox">$$\chi_A(\lambda) = \lambda^2(\lambda-3).$$</div>`, rappels: ["o-b-diag-crit"] },
    { q: 1, t: "(b) Les sous-espaces propres", h: R`<p>$E_0 = \ker A$ : toutes les lignes sont $\pm(1,1,-1)$. Pour $E_3$, devine un vecteur.</p>`, b: R`<p><span data-k="vv">Sous-espaces propres</span>.</p><ul><li>$E_0 = \ker A$ : les trois lignes donnent la même équation $x+y-z = 0$. C'est un plan : $\dim E_0 = 2$, égale à la multiplicité de $0$.</li><li>$E_3$ : $A\begin{pmatrix}1\\1\\-1\end{pmatrix} = \begin{pmatrix}1+1+1\\1+1+1\\-1-1-1\end{pmatrix} = 3\begin{pmatrix}1\\1\\-1\end{pmatrix}$. Donc $E_3 = \operatorname{Vect}(1,1,-1)$, de dimension $1$ = multiplicité.</li></ul><p>$\chi_A$ est scindé et chaque dimension égale la multiplicité : $A$ est diagonalisable.</p>` },
    { q: 1, t: "(c) Avec le rang", h: R`<p>Le rang donne $\dim E_0$ ; la trace donne la dernière valeur propre.</p>`, b: R`<p>Les trois lignes de $A$ sont proportionnelles et non nulles : $\operatorname{rg}A = 1$. Par le théorème du rang, $\dim E_0 = \dim\ker A = 3-1 = 2$. La somme des valeurs propres (avec multiplicité) vaut $\operatorname{tr}A = 3$ : les valeurs propres sont $0,0,3$. Donc $\dim E_3\geqslant1$ et $\dim E_0+\dim E_3\geqslant3$ : il y a une base de vecteurs propres.</p>` },
    { q: 1, t: "(d) Avec A²", h: R`<p>Calcule $A^2$ et compare à $A$.</p>`, b: R`<p>Le coefficient $(1,1)$ de $A^2$ est $1\cdot1+1\cdot1+(-1)(-1) = 3$, et de même chaque coefficient de $A^2$ vaut $3$ fois celui de $A$ (lignes et colonnes sont $\pm(1,1,-1)$, de norme au carré $3$). Donc</p>$$A^2 = 3A.$$<p>Le polynôme $X^2-3X = X(X-3)$ annule $A$ : il est scindé à racines simples, donc $A$ est diagonalisable.</p>`, rappels: ["o-b-annul"] },
    { q: 2, t: "Base orthonormée", h: R`<p>Normalise $v = (1,1,-1)$, puis prends une base orthonormée du plan $E_0 = v^\perp$.</p>`, b: R`<p>$E_3 = \operatorname{Vect}(1,1,-1)$ et $E_0$ (plan $x+y-z = 0$) sont orthogonaux. On normalise $(1,1,-1)$ (norme $\sqrt3$). Dans $E_0$, on prend $(1,-1,0)$ (on vérifie $1-1-0 = 0$), puis un vecteur de $E_0$ orthogonal à lui : le produit vectoriel $(1,1,-1)\wedge(1,-1,0) = (0\cdot1-(-1)(-1),\ (-1)\cdot1-1\cdot0,\ 1\cdot(-1)-1\cdot1) = (-1,-1,-2)$, soit $(1,1,2)$ au signe près.</p><div class="sbox">$$\varepsilon_1 = \frac1{\sqrt3}(1,1,-1),\quad\varepsilon_2 = \frac1{\sqrt2}(1,-1,0),\quad\varepsilon_3 = \frac1{\sqrt6}(1,1,2),$$</div><p>de matrice $\operatorname{diag}(3,0,0)$. Vérifications : $1+1-2 = 0$ ($\varepsilon_3\in E_0$), $(\varepsilon_2|\varepsilon_3)\propto1-1+0 = 0$.</p>`, rappels: ["o-b-spectral"] }
  ],
  ctx: { "o-b-spectral": R`<p>$A^\top = A$.</p>`, "o-b-diag-crit": R`<p>$\dim E_0 = 2$, $\dim E_3 = 1$.</p>`, "o-b-annul": R`<p>$X(X-3)$ annule $A$.</p>` },
  piege: R`Prendre une base quelconque de $E_0$ sans l'orthonormaliser.`,
  methode: R`Matrice de rang $1$ : $A = vw^\top$, valeurs propres $0$ et $w^\top v$.`
},
{
  id: "o-an-69", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 3, time: "25 min",
  title: "Diagonalisabilité selon un paramètre",
  enonce: R`<p>Pour $a\in\mathbb R$, soit $A = \begin{pmatrix}0&a&a\\1&0&1\\1&1&0\end{pmatrix}$.</p><ol><li>Déterminer le rang de $A$.</li><li>Pour quelles valeurs de $a$ la matrice $A$ est-elle diagonalisable dans $\mathcal M_3(\mathbb R)$ ?</li></ol>`,
  decode: { donnees: [R`Un paramètre réel $a$.`], but: R`Rang et diagonalisabilité selon $a$.`, cles: {
    chi: R`$\chi_A(x) = \begin{vmatrix}x&-a&-a\\-1&x&-1\\-1&-1&x\end{vmatrix} = x(x^2-1)-2a(x+1) = (x+1)(x^2-x-2a)$.`,
    cas: R`Racines de $x^2-x-2a$ : $\frac{1\pm\sqrt{1+8a}}2$. Coïncidences : racine double si $a = -\frac18$ ; racine $-1$ si $1+1-2a = 0$, soit $a = 1$.` } },
  steps: [
    { q: 1, t: "Rang", h: R`<p>Calculer le déterminant.</p>`, b: R`<p>$\det A = 2a$. Si $a\neq0$ : $\operatorname{rg}A = 3$. Si $a = 0$, la première ligne est nulle et les deux autres sont libres : $\operatorname{rg}A = 2$.</p>` },
    { q: 2, t: "Polynôme caractéristique", h: R`<p>On développe et on factorise par $x+1$.</p>`, b: R`<div class="sbox">$$\chi_A = (X+1)(X^2-X-2a).$$</div><p><span data-k="chi">Calcul</span> par la première ligne.</p>` },
    { q: 2, t: "Discussion", h: R`<p>Valeurs propres distinctes : diagonalisable. Sinon, on calcule la dimension du sous-espace propre de la valeur propre multiple.</p>`, b: R`<p><span data-k="cas">Cas</span> :</p><ul><li>$a<-\frac18$ : $\chi_A$ non scindé sur $\mathbb R$ : non diagonalisable.</li><li>$a>-\frac18$, $a\neq1$ : trois valeurs propres réelles distinctes : diagonalisable.</li><li>$a = 1$ : $\chi_A = (X+1)^2(X-2)$ et $A+I_3 = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$ de rang $1$ : $\dim E_{-1} = 2$, diagonalisable.</li><li>$a = -\frac18$ : $\frac12$ est double, $A-\frac12I_3$ a deux lignes non proportionnelles (les deux dernières), rang $\geqslant2$ : $\dim E_{1/2} = 1<2$, non diagonalisable.</li></ul><div class="sbox">$$A\ \text{diagonalisable sur}\ \mathbb R\iff a>-\tfrac18.$$</div>`, rappels: ["o-b-diag-crit", "o-b-sev-propre"] }
  ],
  ctx: { "o-b-diag-crit": R`<p>Multiplicités contre dimensions des sous-espaces propres.</p>`, "o-b-sev-propre": R`<p>$\dim E_\lambda = 3-\operatorname{rg}(A-\lambda I_3)$.</p>` },
  piege: R`Oublier les cas où deux racines coïncident ($a = 1$ et $a = -\frac18$).`,
  methode: R`Paramètre : factoriser $\chi$, repérer les coïncidences de racines, étudier chaque cas par le rang.`
},
{
  id: "o-an-70", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 2, time: "20 min",
  title: "Matrice de permutation circulaire",
  enonce: R`<p>Soit $A = \begin{pmatrix}0&1&0\\0&0&1\\1&0&0\end{pmatrix}\in\mathcal M_3(\mathbb C)$.</p><ol><li>Déterminer les valeurs propres et vecteurs propres de $A$. Est-elle diagonalisable ?</li><li>Soient $a,b,c\in\mathbb C$ et $B = aI_3+bA+cA^2$. En déduire les éléments propres de $B$.</li></ol>`,
  decode: { donnees: [R`$A(x_1,x_2,x_3)^\top = (x_2,x_3,x_1)^\top$.`], but: R`Diagonaliser $A$, puis toute matrice polynomiale en $A$.`, cles: {
    j: R`$j = e^{2i\pi/3}$ : $1$, $j$, $j^2$ sont les racines de $X^3 = 1$.`,
    poly: R`Si $AX = \lambda X$, alors $A^2X = \lambda^2X$ et $Q(A)X = Q(\lambda)X$ pour tout polynôme $Q$.` } },
  steps: [
    { q: 1, t: "A³ = I", h: R`<p>$A$ décale les coordonnées : trois décalages ramènent au départ.</p>`, b: R`<p>$A^3 = I_3$ : $X^3-1 = (X-1)(X-j)(X-j^2)$ annule $A$, scindé à racines simples sur $\mathbb C$ : $A$ est diagonalisable, de valeurs propres parmi <span data-k="j">$1,j,j^2$</span>.</p>`, rappels: ["o-b-annul", "o-b-diag-crit"] },
    { q: 1, t: "Vecteurs propres", h: R`<p>$AX = \lambda X$ s'écrit $x_2 = \lambda x_1$, $x_3 = \lambda x_2$.</p>`, b: R`<p>$X = (1,\lambda,\lambda^2)^\top$ convient pour $\lambda\in\{1,j,j^2\}$ (la troisième équation $x_1 = \lambda x_3$ donne $\lambda^3 = 1$). Les trois valeurs propres sont atteintes, chaque sous-espace propre est une droite :</p><div class="sbox">$$E_\lambda = \operatorname{Vect}(1,\lambda,\lambda^2),\qquad\lambda\in\{1,j,j^2\}.$$</div>` },
    { q: 2, t: "Matrice B", h: R`<p>$B = Q(A)$ avec $Q = a+bX+cX^2$ : mêmes vecteurs propres.</p>`, b: R`<p><span data-k="poly">Polynôme en $A$</span> : $B(1,\lambda,\lambda^2)^\top = Q(\lambda)(1,\lambda,\lambda^2)^\top$. $B$ est diagonalisable dans la même base, de valeurs propres</p><div class="sbox">$$a+b+c,\quad a+bj+cj^2,\quad a+bj^2+cj.$$</div>` }
  ],
  ctx: { "o-b-annul": R`<p>$X^3-1$ annule $A$.</p>`, "o-b-diag-crit": R`<p>Polynôme annulateur scindé à racines simples sur $\mathbb C$.</p>` },
  piege: R`Dire que les sous-espaces propres de $B$ sont des droites : c'est faux si deux valeurs $Q(\lambda)$ coïncident (par exemple $b = c = 0$).`,
  methode: R`Matrices circulantes : diagonaliser la permutation, puis $Q(A)$ en découle.`
},
{
  id: "o-an-72", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 3, time: "20 min",
  title: "Un endomorphisme de rang au plus 1",
  enonce: R`<p>Soit $f\in\mathcal L(E)$, $\dim E = n\geqslant1$, $(e_1,\dots,e_n)$ une base de $E$ et $v = \sum_kv_ke_k\in E$. On suppose $f(e_k) = k\,v$ pour tout $k$.</p><ol><li>Déterminer le rang de $f$.</li><li>$f$ est-il diagonalisable ? (discuter selon $v$)</li></ol>`,
  decode: { donnees: [R`$f(e_k) = kv$.`], but: R`Rang et diagonalisabilité.`, cles: {
    t: R`$f(v) = \sum_kv_kf(e_k) = \Big(\sum_kkv_k\Big)v$. On note $t = \sum_kkv_k$, qui est aussi la trace de $f$.`,
    nil: R`Si $t = 0$ : $f(f(x))\in f(\operatorname{Vect}v) = \{0\}$, donc $f^2 = 0$.` } },
  steps: [
    { q: 1, t: "Le rang", h: R`<p>L'image est engendrée par les $f(e_k)$, tous colinéaires à $v$.</p>`, b: R`<p>$\operatorname{Im}f = \operatorname{Vect}(v,2v,\dots,nv)$ : $\operatorname{rg}f = 0$ si $v = 0$, $\operatorname{rg}f = 1$ sinon.</p>` },
    { q: 2, t: "Le noyau et v", h: R`<p>Si $v\neq0$, le noyau est un hyperplan (dimension $n-1$). Il reste à savoir si $v$ est propre pour une valeur non nulle.</p>`, b: R`<p>Si $v = 0$, $f = 0$ est diagonalisable. Sinon, par le théorème du rang, $\dim\ker f = n-1$. On calcule l'image de $v$ par linéarité :</p>$$f(v) = \sum_kv_kf(e_k) = \sum_kv_k\,kv = \Big(\sum_kkv_k\Big)v.$$<p>On pose $t = \sum_kkv_k$ : <span data-k="t">$f(v) = tv$</span>, donc $v$ est un vecteur propre, de valeur propre $t$.</p>`, rappels: ["o-b-rang"] },
    { q: 2, t: "Discussion", h: R`<p>$t\neq0$ : $\ker f\oplus\operatorname{Vect}(v)$ donne une base de vecteurs propres. $t = 0$ : $f$ est nilpotent non nul.</p>`, b: R`<ul><li>$t\neq0$ : $v\notin\ker f$, donc $E = \ker f\oplus\operatorname{Vect}(v)$, somme de sous-espaces propres : <b>diagonalisable</b>, semblable à $\operatorname{diag}(t,0,\dots,0)$.</li><li>$t = 0$ : <span data-k="nil">$f^2 = 0$</span> (car $f^2(e_k) = kf(v) = ktv = 0$) et $f\neq0$ : la seule valeur propre est $0$ et $f\neq0$, <b>non diagonalisable</b>.</li></ul><div class="sbox">$$f\ \text{diagonalisable}\iff v = 0\ \text{ou}\ \sum_kkv_k\neq0.$$</div>`, rappels: ["o-b-diag-crit"] }
  ],
  ctx: { "o-b-rang": R`<p>$\dim\ker f = n-1$ si $v\neq0$.</p>`, "o-b-diag-crit": R`<p>Une seule valeur propre $0$ et $f\neq0$ : pas diagonalisable.</p>` },
  piege: R`Oublier le cas $v = 0$.`,
  methode: R`Rang $1$ : $f$ est diagonalisable si et seulement si sa trace est non nulle (ou $f = 0$).`
},
{
  id: "o-an-73", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 2, time: "20 min",
  title: "Le commutant d'une matrice diagonalisable",
  enonce: R`<p>Soit $A = \begin{pmatrix}1&2\\3&2\end{pmatrix}$.</p><ol><li>Déterminer les valeurs propres et vecteurs propres de $A$.</li><li>Déterminer les matrices qui commutent avec $D = \begin{pmatrix}4&0\\0&-1\end{pmatrix}$, puis montrer que l'ensemble des matrices qui commutent avec $A$ est $\operatorname{Vect}(I_2,A)$.</li></ol>`,
  decode: { donnees: [R`$\operatorname{tr}A = 3$, $\det A = -4$.`], but: R`Diagonaliser $A$ et décrire son commutant.`, cles: {
    conj: R`Si $A = PDP^{-1}$ : $MA = AM\iff(P^{-1}MP)D = D(P^{-1}MP)$.` } },
  steps: [
    { q: 1, t: "Valeurs propres", h: R`<p>$\chi_A = X^2-\operatorname{tr}(A)X+\det A$.</p>`, b: R`<p>$\operatorname{tr}A = 1+2 = 3$, $\det A = 1\times2-2\times3 = -4$ :</p>$$\chi_A = X^2-3X-4.$$<p>Discriminant $9+16 = 25$, racines $\frac{3\pm5}2$, soit $4$ et $-1$ :</p><div class="sbox">$$\chi_A = (X-4)(X+1),\qquad\operatorname{sp}(A) = \{4,-1\}.$$</div>` },
    { q: 1, t: "Vecteurs propres", h: R`<p>Résous $(A-4I_2)X = 0$ puis $(A+I_2)X = 0$.</p>`, b: R`<p><b>$\lambda = 4$</b> : $A-4I_2 = \begin{pmatrix}-3&2\\3&-2\end{pmatrix}$, le système se réduit à $-3x+2y = 0$, soit $y = \frac32x$ : $E_4 = \operatorname{Vect}\begin{pmatrix}2\\3\end{pmatrix}$.</p><p><b>$\lambda = -1$</b> : $A+I_2 = \begin{pmatrix}2&2\\3&3\end{pmatrix}$, le système se réduit à $x+y = 0$ : $E_{-1} = \operatorname{Vect}\begin{pmatrix}1\\-1\end{pmatrix}$.</p><p>Vérification : $A\begin{pmatrix}2\\3\end{pmatrix} = \begin{pmatrix}2+6\\6+6\end{pmatrix} = \begin{pmatrix}8\\12\end{pmatrix} = 4\begin{pmatrix}2\\3\end{pmatrix}$ ✓. Avec $P = \begin{pmatrix}2&1\\3&-1\end{pmatrix}$ : $A = PDP^{-1}$.</p>` },
    { q: 2, t: "Commutant de D", h: R`<p>Écris $MD = DM$ coefficient par coefficient.</p>`, b: R`<p>Avec $M = \begin{pmatrix}a&b\\c&d\end{pmatrix}$ : multiplier à droite par $D$ multiplie les colonnes par $4$ et $-1$, à gauche les lignes :</p>$$MD = \begin{pmatrix}4a&-b\\4c&-d\end{pmatrix},\qquad DM = \begin{pmatrix}4a&4b\\-c&-d\end{pmatrix}.$$<p>$MD = DM\iff-b = 4b$ et $4c = -c\iff b = c = 0$. Les matrices qui commutent avec $D$ sont les matrices diagonales (dimension $2$).</p>` },
    { q: 2, t: "Commutant de A", h: R`<p>On se ramène à $D$ par <span data-k="conj">changement de base</span> : $M' = P^{-1}MP$.</p>`, b: R`<p>On pose $M' = P^{-1}MP$. <span data-k="conj">Par changement de base</span>, avec $A = PDP^{-1}$ :</p>$$AM = MA\iff PDP^{-1}M = MPDP^{-1}\iff D(P^{-1}MP) = (P^{-1}MP)D\iff DM' = M'D.$$<p>Donc $M$ commute avec $A$ si et seulement si $M'$ est diagonale : le commutant de $A$ est l'image de l'espace des diagonales par $M'\mapsto PM'P^{-1}$, isomorphisme. Il est de dimension $2$. Il contient $I_2$ et $A$, qui sont libres ($A$ n'est pas un multiple de $I_2$) :</p><div class="sbox">$$\{M : AM = MA\} = \operatorname{Vect}(I_2,A).$$</div>` }
  ],
  piege: R`Affirmer que le commutant est $\operatorname{Vect}(I_2,A)$ sans argument de dimension.`,
  methode: R`Commutant d'une matrice à valeurs propres distinctes : se ramener au cas diagonal.`
},
{
  id: "o-an-83", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 3, time: "20 min",
  title: "Valeurs propres de u∘v et de v∘u",
  enonce: R`<p>Soient $u$, $v$ deux endomorphismes d'un $\mathbb R$-espace vectoriel $E$.</p><ol><li>Soit $\lambda\neq0$. Montrer que si $\lambda$ est valeur propre de $u\circ v$, elle l'est de $v\circ u$.</li><li>Sur $E = \mathbb R[X]$, soient $u : P\mapsto\int_0^XP(t)\,dt$ et $v : P\mapsto P'$. Déterminer $\ker(u\circ v)$ et $\ker(v\circ u)$. Le résultat de 1 reste-t-il vrai pour $\lambda = 0$ ?</li><li>Si $\dim E<\infty$, montrer que le résultat de 1 reste vrai pour $\lambda = 0$.</li></ol>`,
  decode: { donnees: [R`$u\circ v$ et $v\circ u$.`], but: R`Comparer leurs valeurs propres.`, cles: {
    vx: R`Si $(u\circ v)(x) = \lambda x$, alors $(v\circ u)(v(x)) = v(\lambda x) = \lambda v(x)$ : $v(x)$ est candidat vecteur propre.` } },
  steps: [
    { q: 1, t: "Transporter le vecteur propre", h: R`<p>On applique $v$ à l'égalité $(u\circ v)(x) = \lambda x$.</p>`, b: R`<p><span data-k="vx">$v(x)$ vérifie $(v\circ u)(v(x)) = \lambda v(x)$</span>. Il reste $v(x)\neq0$ : sinon $\lambda x = u(v(x)) = 0$, impossible car $\lambda\neq0$ et $x\neq0$.</p>` },
    { q: 2, t: "Contre-exemple pour λ = 0", h: R`<p>$v\circ u = \mathrm{Id}$ (dériver une primitive), mais $u\circ v$ perd la constante.</p>`, b: R`<p>$(v\circ u)(P) = P$ et $(u\circ v)(P) = P-P(0)$. Donc $\ker(v\circ u) = \{0\}$ et $\ker(u\circ v) = \mathbb R_0[X]$ (constantes). $0$ est valeur propre de $u\circ v$ mais pas de $v\circ u$ : le résultat est faux pour $\lambda = 0$ en dimension infinie.</p>` },
    { q: 3, t: "Avec le déterminant", h: R`<p>$0$ est valeur propre $\iff$ $\det = 0$.</p>`, b: R`<p>$\det(u\circ v) = \det u\det v = \det(v\circ u)$ : l'un est nul si et seulement si l'autre l'est.</p><div class="sbox">$$\dim E<\infty\ \Longrightarrow\ \operatorname{sp}(u\circ v) = \operatorname{sp}(v\circ u).$$</div>` }
  ],
  piege: R`Oublier de vérifier $v(x)\neq0$ : un vecteur propre est non nul par définition.`,
  methode: R`Transporter un vecteur propre par $v$ ; pour $0$, déterminant (dimension finie seulement).`
},
{
  id: "o-an-88", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 3, time: "25 min",
  title: "M ↦ M + tr(M)E : annulateur et diagonalisabilité",
  enonce: R`<ol><li>Soit $u\in\mathcal L(E)$ et $P\in\mathbb K[X]$ qui annule $u$. Montrer que toute valeur propre de $u$ est racine de $P$.</li><li>Soit $n\geqslant2$, $E = \mathcal M_n(\mathbb R)$ et $N = E_{1n}$ (le coefficient $(1,n)$ vaut $1$, les autres $0$). On pose $u(M) = M+\operatorname{tr}(M)\,N$.<ol style="list-style:lower-alpha"><li>Montrer que $(X-1)^2$ annule $u$.</li><li>$u$ est-il diagonalisable ? Le justifier de deux façons (avec, puis sans la question 1).</li></ol></li></ol>`,
  decode: { donnees: [R`$\operatorname{tr}N = 0$ car $n\geqslant2$.`], but: R`Un annulateur, puis la non-diagonalisabilité.`, cles: {
    tr: R`$(u-\mathrm{Id})(M) = \operatorname{tr}(M)N$, puis $(u-\mathrm{Id})^2(M) = \operatorname{tr}(M)\operatorname{tr}(N)N = 0$.` } },
  steps: [
    { q: 1, t: "Valeurs propres et annulateur", h: R`<p>Sur un vecteur propre, $u^k$ agit comme $\lambda^k$.</p>`, b: R`<p>Si $u(x) = \lambda x$ avec $x\neq0$ : $P(u)(x) = P(\lambda)x = 0$, donc $P(\lambda) = 0$.</p>`, rappels: ["o-b-annul"] },
    { q: 2, t: "L'annulateur", h: R`<p>$u-\mathrm{Id}$ envoie tout sur un multiple de $N$, et $N$ est de trace nulle.</p>`, b: R`<p>On pose $v = u-\mathrm{Id}$ : $v(M) = \operatorname{tr}(M)\,N$. On applique $v$ deux fois :</p>$$v^2(M) = v\big(\operatorname{tr}(M)N\big) = \operatorname{tr}(M)\,v(N) = \operatorname{tr}(M)\operatorname{tr}(N)\,N.$$<p><span data-k="tr">Or $\operatorname{tr}N = 0$</span> ($N = E_{1n}$ n'a pas de coefficient diagonal, car $n\geqslant2$). Donc $v^2 = 0$, c'est-à-dire</p><div class="sbox">$$(u-\mathrm{Id})^2 = u^2-2u+\mathrm{Id} = 0.$$</div>` },
    { q: 2, t: "Méthode 1", h: R`<p>Seule valeur propre possible : $1$.</p>`, b: R`<p>Par la question 1, $\operatorname{sp}(u)\subset\{1\}$. Si $u$ était diagonalisable, on aurait $u = \mathrm{Id}$ ; or $u(I_n) = I_n+nN\neq I_n$. Non diagonalisable.</p>`, rappels: ["o-b-diag-crit"] },
    { q: 2, t: "Méthode 2", h: R`<p>Calculer directement les sous-espaces propres.</p>`, b: R`<p>Si $u(M) = \lambda M$ avec $\lambda\neq1$ : $(1-\lambda)M = -\operatorname{tr}(M)N$, donc $M = \mu N$, puis $\operatorname{tr}M = 0$ et $M = 0$. Seule valeur propre : $1$, avec $E_1 = \{M : \operatorname{tr}M = 0\}$, hyperplan de dimension $n^2-1< n^2$. Non diagonalisable.</p>` }
  ],
  ctx: { "o-b-annul": R`<p>Avec $P = (X-1)^2$ : $\operatorname{sp}(u)\subset\{1\}$.</p>`, "o-b-diag-crit": R`<p>Une seule valeur propre et $u\neq\mathrm{Id}$.</p>` },
  piege: R`Croire que $(X-1)^2$ annulateur interdit la diagonalisabilité en soi : c'est le fait que $u\neq\mathrm{Id}$ qui conclut.`,
  methode: R`$u-\mathrm{Id}$ nilpotent non nul $\Rightarrow$ pas diagonalisable.`
},
{
  id: "o-an-91", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 3, time: "25 min",
  title: "Une matrice unipotente et ses puissances",
  enonce: R`<p>Soit $A = \begin{pmatrix}2&1&-1\\1&2&-1\\2&2&-1\end{pmatrix}$.</p><ol><li>Montrer que $A$ n'a qu'une valeur propre.</li><li>$A$ est-elle inversible ? diagonalisable ?</li><li>Déterminer son polynôme minimal.</li><li>Pour $n\in\mathbb N$, déterminer le reste de la division de $X^n$ par $(X-1)^2$ et en déduire $A^n$.</li></ol>`,
  decode: { donnees: [R`$N = A-I_3 = \begin{pmatrix}1&1&-1\\1&1&-1\\2&2&-2\end{pmatrix}$.`], but: R`Réduction et puissances de $A$.`, cles: {
    n2: R`$N = uw^\top$ avec $u = (1,1,2)^\top$, $w = (1,1,-1)^\top$ et $w^\top u = 1+1-2 = 0$ : $N^2 = u(w^\top u)w^\top = 0$.`,
    reste: R`$X^n = (X-1)^2Q+\alpha X+\beta$. En $X = 1$ : $1 = \alpha+\beta$. En dérivant puis $X = 1$ : $n = \alpha$.` } },
  steps: [
    { q: 1, t: "Calculer N = A − I₃", h: R`<p>Soustrais $1$ sur la diagonale. Compare les lignes obtenues.</p>`, b: R`<p>On pose $N = A-I_3$ : on retire $1$ à chaque coefficient diagonal.</p>$$N = \begin{pmatrix}2-1&1&-1\\1&2-1&-1\\2&2&-1-1\end{pmatrix} = \begin{pmatrix}1&1&-1\\1&1&-1\\2&2&-2\end{pmatrix}.$$<p>Les trois lignes sont proportionnelles à $(1,1,-1)$ (la troisième vaut $2$ fois la première) : $N$ est de rang $1$.</p>` },
    { q: 1, t: "N² = 0", h: R`<p>Calcule $N^2$ coefficient par coefficient : chaque ligne de $N$ fois chaque colonne de $N$.</p>`, b: R`<p>Chaque ligne de $N$ est un multiple de $(1,1,-1)$, et chaque colonne de $N$ est un multiple de $\begin{pmatrix}1\\1\\2\end{pmatrix}$. Un coefficient de $N^2$ est donc un multiple de</p>$$(1,1,-1)\cdot\begin{pmatrix}1\\1\\2\end{pmatrix} = 1+1-2 = 0.$$<p>Par exemple, coefficient $(1,1)$ : $1\times1+1\times1+(-1)\times2 = 0$ ; coefficient $(3,3)$ : $2\times(-1)+2\times(-1)+(-2)\times(-2) = -2-2+4 = 0$.</p><div class="sbox">$$N^2 = 0.$$</div><p>Ainsi <span data-k="n2">$N^2 = 0$</span> : $N$ est nilpotente.</p>` },
    { q: 1, t: "La seule valeur propre est 1", h: R`<p>Si $AX = \lambda X$, que vaut $NX$ ? Puis $N^2X$ ?</p>`, b: R`<p>Soit $\lambda$ une valeur propre et $X\neq0$ avec $AX = \lambda X$. Alors</p>$$NX = (A-I_3)X = \lambda X-X = (\lambda-1)X,\qquad N^2X = N\big((\lambda-1)X\big) = (\lambda-1)^2X.$$<p>Or $N^2 = 0$, donc $(\lambda-1)^2X = 0$, et $X\neq0$ donne $\lambda = 1$. Et $1$ est bien valeur propre : $N\neq0$ est de rang $1$, donc $\ker(A-I_3)$ est de dimension $2$, non nul.</p><div class="sbox">$$\operatorname{sp}(A) = \{1\}.$$</div>` },
    { q: 2, t: "Inversible, pas diagonalisable", h: R`<p>$0$ n'est pas valeur propre. Et une seule valeur propre avec $A\neq I_3$.</p>`, b: R`<p><b>Inversible</b> : $0\notin\operatorname{sp}(A)$, donc $A$ est inversible. (Et même : $\det A = 1^3 = 1$.)</p><p><b>Pas diagonalisable</b> : si $A = PDP^{-1}$ avec $D$ diagonale, $D$ ne contiendrait que des $1$, donc $D = I_3$ et $A = PI_3P^{-1} = I_3$. Or $A\neq I_3$. Autre argument : $\dim E_1 = \dim\ker N = 3-1 = 2< 3$.</p>`, rappels: ["o-b-diag-crit"] },
    { q: 3, t: "Polynôme minimal", h: R`<p>$(X-1)^2$ annule $A$, $X-1$ non : c'est le minimal.</p>`, b: R`<p>$(A-I_3)^2 = N^2 = 0$ : le polynôme $(X-1)^2$ annule $A$. Le polynôme minimal en est un diviseur unitaire : $1$, $X-1$ ou $(X-1)^2$. Ni $1$ (qui donnerait $I_3 = 0$) ni $X-1$ (car $A-I_3 = N\neq0$) n'annulent $A$.</p><div class="sbox">$$\pi_A = (X-1)^2.$$</div>` },
    { q: 4, t: "Le reste de la division", h: R`<p>Écris $X^n = Q(X)(X-1)^2+aX+b$. Évalue en $1$, puis dérive et évalue en $1$.</p>`, b: R`<p>Le reste de la division par un polynôme de degré $2$ est de degré $\leqslant1$ :</p>$$X^n = Q(X)(X-1)^2+aX+b.$$<ul><li>En $X = 1$ : $1 = 0+a+b$.</li><li>On dérive : $nX^{n-1} = Q'(X)(X-1)^2+2Q(X)(X-1)+a$. En $X = 1$ : $n = a$.</li></ul><p>Donc $a = n$ et $b = 1-n$ : le <span data-k="reste">reste</span> est $nX+1-n$.</p>` },
    { q: 4, t: "Les puissances de A", h: R`<p>Évalue l'égalité en $A$ : le terme avec $(A-I_3)^2$ s'annule.</p>`, b: R`<p>On remplace $X$ par $A$ : $(A-I_3)^2 = 0$ fait disparaître le quotient :</p>$$A^n = Q(A)\cdot0+nA+(1-n)I_3.$$<p>Avec $A = I_3+N$ : $nA+(1-n)I_3 = nI_3+nN+I_3-nI_3 = I_3+nN$.</p><div class="sbox">$$A^n = nA+(1-n)I_3 = I_3+nN = \begin{pmatrix}1+n&n&-n\\n&1+n&-n\\2n&2n&1-2n\end{pmatrix}.$$</div><p><b>Contrôle $n = 1$</b> : on retrouve $A$. <b>$n = 2$</b> : $(I_3+N)^2 = I_3+2N+N^2 = I_3+2N$ ✓.</p>` }
  ],
  ctx: { "o-b-diag-crit": R`<p>Seule valeur propre $1$ et $A\neq I_3$.</p>` },
  piege: R`Chercher à diagonaliser $A$ pour calculer $A^n$ : impossible ici.`,
  methode: R`$A = I+N$ avec $N^2 = 0$ : $A^n = I+nN$ (binôme, ou division euclidienne par le minimal).`
},
{
  id: "o-an-93", subj: "oraux", year: "mp", chap: 1, concours: "ccinp", level: 3, time: "25 min",
  title: "Un endomorphisme annulé par X³ − X² + X",
  enonce: R`<p>Soit $E$ un espace réel de dimension finie $n>0$ et $u\in\mathcal L(E)$ tel que $u^3-u^2+u = 0$. Les questions sont indépendantes.</p><ol><li>Montrer que $\operatorname{Im}u\oplus\ker u = E$.</li><li><ol style="list-style:lower-alpha"><li>Énoncer le lemme des noyaux pour deux polynômes.</li><li>En déduire que $\operatorname{Im}u = \ker(u^2-u+\mathrm{Id})$.</li></ol></li><li>On suppose $u$ non bijectif. Déterminer ses valeurs propres.</li></ol>`,
  decode: { donnees: [R`$X^3-X^2+X = X(X^2-X+1)$, et $X^2-X+1$ n'a pas de racine réelle ($\Delta = -3$).`], but: R`Décomposition de $E$ et spectre.`, cles: {
    inter: R`Si $x = u(y)$ et $u(x) = 0$ : $u^2(y) = 0$, et la relation appliquée à $y$ donne $u(y) = u^2(y)-u^3(y) = 0$.` } },
  steps: [
    { q: 1, t: "Intersection nulle", h: R`<p>Prends $x = u(y)$ avec $u(x) = 0$ : que valent $u^2(y)$ et $u^3(y)$ ? Applique la relation à $y$.</p>`, b: R`<p><span data-k="inter">Soit $x\in\operatorname{Im}u\cap\ker u$</span> : $x = u(y)$ pour un $y$, et $u(x) = 0$. Alors</p>$$u^2(y) = u(x) = 0,\qquad u^3(y) = u(u^2(y)) = u(0) = 0.$$<p>On applique la relation $u^3-u^2+u = 0$ au vecteur $y$ :</p>$$u^3(y)-u^2(y)+u(y) = 0-0+u(y) = 0,$$<p>donc $x = u(y) = 0$. Ainsi $\operatorname{Im}u\cap\ker u = \{0\}$.</p>`, rappels: ["o-b-supp"] },
    { q: 1, t: "Les dimensions", h: R`<p>Théorème du rang.</p>`, b: R`<p>Par le théorème du rang, $\dim\operatorname{Im}u+\dim\ker u = n = \dim E$. Une intersection nulle et des dimensions qui s'ajoutent pour faire $n$ donnent :</p><div class="sbox">$$E = \operatorname{Im}u\oplus\ker u.$$</div>`, rappels: ["o-b-rang"] },
    { q: 2, t: "Lemme des noyaux", h: R`<p>$X$ et $X^2-X+1$ sont premiers entre eux (pas de racine commune).</p>`, b: R`<p><b>Lemme des noyaux</b> : si $P\wedge Q = 1$, alors $\ker(PQ)(u) = \ker P(u)\oplus\ker Q(u)$.</p><p>Ici $X^3-X^2+X = X(X^2-X+1)$. Les racines de $X^2-X+1$ sont $\frac{1\pm i\sqrt3}2\neq0$ : pas de racine commune avec $X$, donc $X\wedge(X^2-X+1) = 1$. Comme $(u^3-u^2+u) = 0$, son noyau est $E$ :</p>$$E = \ker u\oplus\ker(u^2-u+\mathrm{Id}).$$`, rappels: ["o-b-noyaux"] },
    { q: 2, t: "Identifier l'image", h: R`<p>Inclusion par composition, puis dimensions.</p>`, b: R`<p><b>Inclusion</b> : pour $x = u(y)$, $(u^2-u+\mathrm{Id})(x) = (u^3-u^2+u)(y) = 0$. Donc $\operatorname{Im}u\subset\ker(u^2-u+\mathrm{Id})$.</p><p><b>Dimensions</b> : par le lemme des noyaux, $\dim\ker(u^2-u+\mathrm{Id}) = n-\dim\ker u$, et par le théorème du rang, $\dim\operatorname{Im}u = n-\dim\ker u$. Mêmes dimensions :</p><div class="sbox">$$\operatorname{Im}u = \ker(u^2-u+\mathrm{Id}).$$</div>` },
    { q: 3, t: "Spectre", h: R`<p>Les valeurs propres sont des racines réelles de $X(X^2-X+1)$.</p>`, b: R`<p>Si $u(x) = \lambda x$ avec $x\neq0$, la relation donne $(\lambda^3-\lambda^2+\lambda)x = 0$, donc $\lambda$ est racine de $X(X^2-X+1)$. Le discriminant de $X^2-X+1$ est $1-4 = -3< 0$ : pas de racine réelle. La seule valeur propre réelle possible est $0$.</p><p>Comme $u$ n'est pas bijectif, il n'est pas injectif en dimension finie : $\ker u\neq\{0\}$, donc $0$ est valeur propre.</p><div class="sbox">$$\operatorname{sp}(u) = \{0\}.$$</div>`, rappels: ["o-b-annul"] }
  ],
  ctx: { "o-b-rang": R`<p>Pour $u$.</p>`, "o-b-supp": R`<p>Intersection nulle et dimensions.</p>`, "o-b-noyaux": R`<p>$P = X$, $Q = X^2-X+1$.</p>`, "o-b-annul": R`<p>Racines réelles de $X^3-X^2+X$ : seulement $0$.</p>` },
  piege: R`Chercher des valeurs propres complexes : $E$ est un espace réel.`,
  methode: R`Polynôme annulateur factorisé : lemme des noyaux, inclusions par composition, dimensions.`
}
]);
})();

/* ===== Préhilbertiens (chap. 3), euclidiens (chap. 4), arithmétique (chap. 5), EVN, systèmes différentiels ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1 } = window.__LA;
const unitCircle = (pts, cap, label, extra = "") => FIG(300, 300, (() => { const c = 150, r = 105; let s = `<line class="ax" x1="20" y1="${c}" x2="285" y2="${c}"/><line class="ax" x1="${c}" y1="285" x2="${c}" y2="15"/><circle cx="${c}" cy="${c}" r="${r}" class="k" style="stroke-width:1.4"/>`; pts.forEach(([x, y, t, cl]) => { s += `<circle cx="${f1(c + r * x)}" cy="${f1(c - r * y)}" r="5" class="${cl || "mass"}"/>` + (t ? S(c + r * x * 1.18, c - r * y * 1.18 + 4, t, "middle") : ""); }); return s + extra; })(), cap, label);
LEMME.exercises([
{
  id: "o-an-63", subj: "oraux", year: "mp", chap: 3, concours: "ccinp", level: 3, time: "20 min",
  title: "Endomorphismes normaux",
  enonce: R`<p>Soit $E$ un espace euclidien de produit scalaire $(\,|\,)$ et de norme $\|\ \|$. Pour $u\in\mathcal L(E)$, on note $u^\ast$ son adjoint.</p><ol><li>Un endomorphisme $u$ tel que $(u(x)|x) = 0$ pour tout $x$ est-il forcément nul ?</li><li>Soit $u\in\mathcal L(E)$. Montrer l'équivalence de : (i) $u\circ u^\ast = u^\ast\circ u$ ; (ii) $(u(x)|u(y)) = (u^\ast(x)|u^\ast(y))$ pour tous $x,y$ ; (iii) $\|u(x)\| = \|u^\ast(x)\|$ pour tout $x$.</li></ol>`,
  decode: { donnees: [R`$(u(x)|y) = (x|u^\ast(y))$.`], but: R`Un contre-exemple, puis une caractérisation des endomorphismes normaux.`, cles: {
    rot: R`La rotation d'angle $\frac\pi2$ dans $\mathbb R^2$ : $u(x_1,x_2) = (-x_2,x_1)$. Chaque vecteur est envoyé sur un vecteur orthogonal.` } },
  steps: [
    { q: 1, t: "Un contre-exemple", h: R`<p>On cherche une application qui envoie chaque vecteur sur un vecteur qui lui est orthogonal.</p>`, b: R`<p>Dans $\mathbb R^2$ muni du produit scalaire usuel, prenons la <span data-k="rot">rotation d'un quart de tour</span> :</p>$$u(x_1,x_2) = (-x_2,x_1),\qquad\text{de matrice }\begin{pmatrix}0&-1\\1&0\end{pmatrix}.$$<p>Pour tout $x = (x_1,x_2)$ :</p>$$(u(x)|x) = (-x_2)\times x_1+x_1\times x_2 = 0.$$<p>Pourtant $u\neq0$ (par exemple $u(1,0) = (0,1)$). Réponse : <b>non</b>. Géométriquement, tourner de $90°$ donne toujours un vecteur perpendiculaire.</p>` },
    { q: 2, t: "(i) ⇒ (ii)", h: R`<p>Passe $u$ de l'autre côté du produit scalaire avec l'adjoint : $(u(a)|b) = (a|u^\ast(b))$.</p>`, b: R`<p>Par définition de l'adjoint, $(u(a)|b) = (a|u^\ast(b))$ pour tous $a,b$. Avec $a = x$ et $b = u(y)$, puis (i), puis la définition de l'adjoint de $u^\ast$ (qui est $u$) :</p>$$(u(x)|u(y)) = (x|u^\ast u(y)) \overset{(i)}{=} (x|uu^\ast(y)) = (u^\ast(x)|u^\ast(y)).$$<p>La dernière égalité vient de $(x|u(z)) = (u^\ast(x)|z)$ avec $z = u^\ast(y)$.</p>`, rappels: ["o-b-adjoint"] },
    { q: 2, t: "(ii) ⇔ (iii)", h: R`<p>(iii) est (ii) avec $y = x$. Réciproquement, la polarisation retrouve le produit scalaire à partir des normes.</p>`, b: R`<p><b>(ii) ⇒ (iii)</b> : on prend $y = x$ dans (ii) : $\|u(x)\|^2 = \|u^\ast(x)\|^2$, puis on prend la racine.</p><p><b>(iii) ⇒ (ii)</b> : l'identité de polarisation et la linéarité de $u$ donnent</p>$$(u(x)|u(y)) = \frac14\big(\|u(x)+u(y)\|^2-\|u(x)-u(y)\|^2\big) = \frac14\big(\|u(x+y)\|^2-\|u(x-y)\|^2\big).$$<p>Le même calcul vaut pour $u^\ast$. Par (iii), $\|u(x\pm y)\| = \|u^\ast(x\pm y)\|$ : les deux membres sont égaux, d'où (ii).</p>`, rappels: ["o-b-polarisation"] },
    { q: 2, t: "(ii) ⇒ (i)", h: R`<p>Réécris les deux membres de (ii) avec l'adjoint pour obtenir $(x|(u^\ast u-uu^\ast)(y)) = 0$ pour tout $x$.</p>`, b: R`<p>On transforme chaque membre de (ii) avec l'adjoint :</p>$$(u(x)|u(y)) = (x|u^\ast u(y)),\qquad(u^\ast(x)|u^\ast(y)) = (x|uu^\ast(y)).$$<p>(ii) donne donc, pour tous $x,y$ :</p>$$\big(x\,\big|\,u^\ast u(y)-uu^\ast(y)\big) = 0.$$<p>Le vecteur $w = u^\ast u(y)-uu^\ast(y)$ est orthogonal à tout $x$, en particulier à lui-même : $\|w\|^2 = 0$, donc $w = 0$. Ceci pour tout $y$ :</p><div class="sbox">$$u\circ u^\ast = u^\ast\circ u.$$</div>` }
  ],
  ctx: { "o-b-adjoint": R`<p>$(u(x)|u(y)) = (x|u^\ast(u(y)))$.</p>`, "o-b-polarisation": R`<p>Appliquée aux normes $\|u(\cdot)\|$ et $\|u^\ast(\cdot)\|$.</p>` },
  piege: R`Conclure à la question 1 que $u = 0$ par polarisation : la polarisation s'applique à une forme <b>symétrique</b>, ce que $(u(x)|y)$ n'est pas en général.`,
  methode: R`Pour passer de normes à produits scalaires : polarisation. Pour conclure qu'un vecteur est nul : il est orthogonal à tout.`
},
{
  id: "o-an-66", subj: "oraux", year: "mp", chap: 3, concours: "ccinp", level: 3, time: "25 min",
  title: "Matrices symétriques positives et racine carrée",
  enonce: R`<ol><li>Soit $A\in\mathcal S_n(\mathbb R)$. Montrer que $A\in\mathcal S_n^+(\mathbb R)\iff\operatorname{sp}(A)\subset[0,+\infty[$.</li><li>Montrer que $A^2\in\mathcal S_n^+(\mathbb R)$ pour tout $A\in\mathcal S_n(\mathbb R)$.</li><li>Soient $A\in\mathcal S_n(\mathbb R)$ et $B\in\mathcal S_n^+(\mathbb R)$ avec $AB = BA$. Montrer que $A^2B\in\mathcal S_n^+(\mathbb R)$.</li><li>Soit $A\in\mathcal S_n^+(\mathbb R)$. Montrer qu'il existe $B\in\mathcal S_n^+(\mathbb R)$ avec $A = B^2$.</li></ol>`,
  decode: { donnees: [R`$\mathcal S_n^+ = \{A$ symétrique, $X^\top AX\geqslant0$ pour tout $X\}$.`], but: R`Caractérisation spectrale et racine carrée.`, cles: {
    diag: R`$A = PDP^\top$ avec $P$ orthogonale et $D = \operatorname{diag}(\lambda_i)$. Avec $Y = P^\top X$ : $X^\top AX = Y^\top DY = \sum\lambda_iy_i^2$.`,
    ab: R`$A^2B = ABA$ (car $AB = BA$), donc $X^\top A^2BX = (AX)^\top B(AX)\geqslant0$.` } },
  steps: [
    { q: 1, t: "Spectre et forme quadratique", h: R`<p>Dans une base orthonormée de vecteurs propres, la forme quadratique devient une somme $\sum\lambda_iy_i^2$.</p>`, b: R`<p>Par le théorème spectral, <span data-k="diag">$A = PDP^\top$ avec $P$ orthogonale et $D = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$</span>. Pour $X\in\mathbb R^n$, on pose $Y = P^\top X$ :</p>$$X^\top AX = X^\top PDP^\top X = (P^\top X)^\top D(P^\top X) = Y^\top DY = \sum_i\lambda_iy_i^2.$$<p><b>$\Leftarrow$</b> : si tous les $\lambda_i\geqslant0$, la somme est $\geqslant0$ : $A\in\mathcal S_n^+$.</p><p><b>$\Rightarrow$</b> : si $AX = \lambda X$ avec $X\neq0$, alors $0\leqslant X^\top AX = \lambda X^\top X = \lambda\|X\|^2$, donc $\lambda\geqslant0$.</p>`, rappels: ["o-b-spectral", "o-b-sym-pos"] },
    { q: 2, t: "Le carré", h: R`<p>$X^\top A^2X = (AX)^\top(AX)$ car $A^\top = A$.</p>`, b: R`<p>$(A^2)^\top = (A^\top)^2 = A^2$ : $A^2$ est symétrique. Et, comme $A^\top = A$ :</p>$$X^\top A^2X = X^\top A^\top AX = (AX)^\top(AX) = \|AX\|^2\geqslant0.$$<p>Donc $A^2\in\mathcal S_n^+$.</p>` },
    { q: 3, t: "Le produit A²B", h: R`<p>Symétrie : $(A^2B)^\top = BA^2 = A^2B$. Positivité : écris $A^2B = ABA$ et fais apparaître $(AX)^\top B(AX)$.</p>`, b: R`<p><b>Symétrie</b> : $(A^2B)^\top = B^\top(A^\top)^2 = BA^2$. Comme $AB = BA$, $BA^2 = ABA = A^2B$. Donc $A^2B$ est symétrique.</p><p><b><span data-k="ab">Positivité</span></b> : $A^2B = A(AB) = A(BA) = ABA$. Pour tout $X$, avec $A^\top = A$ :</p>$$X^\top A^2BX = X^\top ABAX = (AX)^\top B(AX)\geqslant0,$$<p>car $B$ est positive (appliquée au vecteur $AX$). Donc $A^2B\in\mathcal S_n^+$.</p>` },
    { q: 4, t: "Racine carrée", h: R`<p>On prend la racine des valeurs propres dans la base orthonormée.</p>`, b: R`<p>Par Q1, $A = PDP^\top$ avec $P$ orthogonale et $D = \operatorname{diag}(\lambda_i)$, $\lambda_i\geqslant0$. On pose</p>$$B = P\,\operatorname{diag}(\sqrt{\lambda_1},\dots,\sqrt{\lambda_n})\,P^\top.$$<ul><li>$B^\top = B$ : symétrique.</li><li>Ses valeurs propres sont les $\sqrt{\lambda_i}\geqslant0$ : $B\in\mathcal S_n^+$ par Q1.</li><li>$B^2 = P\operatorname{diag}(\sqrt{\lambda_i})P^\top P\operatorname{diag}(\sqrt{\lambda_i})P^\top = P\operatorname{diag}(\lambda_i)P^\top = A$, car $P^\top P = I_n$.</li></ul><div class="sbox">$$B^2 = A.$$</div>`, rappels: ["o-b-spectral"] }
  ],
  ctx: { "o-b-spectral": R`<p>$A = PDP^\top$, $P$ orthogonale.</p>`, "o-b-sym-pos": R`<p>Démontrée ici.</p>` },
  piege: R`Oublier de vérifier la symétrie de $A^2B$ : elle utilise $AB = BA$.`,
  methode: R`Questions sur $\mathcal S_n^+$ : se placer dans une base orthonormée de vecteurs propres.`
},
{
  id: "o-an-76", subj: "oraux", year: "mp", chap: 2, concours: "ccinp", level: 2, time: "25 min",
  title: "Cauchy-Schwarz et une borne inférieure",
  enonce: R`<p>Soit $E$ un espace préhilbertien réel, de norme $\|x\| = \sqrt{(x|x)}$.</p><ol><li><ol style="list-style:lower-alpha"><li>Énoncer et démontrer l'inégalité de Cauchy-Schwarz.</li><li>Étudier le cas d'égalité.</li></ol></li><li>Soit $\mathcal F$ l'ensemble des fonctions continues et <span data-k="pos">strictement positives</span> sur $[a,b]$. Montrer que $\Big\{\int_a^bf^2\times\int_a^b\frac1{f^2},\ f\in\mathcal F\Big\}$ admet une borne inférieure $m$, et la calculer.</li></ol>`,
  decode: { donnees: [R`Un produit scalaire quelconque.`], but: R`Démontrer Cauchy-Schwarz, puis l'appliquer à une optimisation.`, cles: {
    pos: R`$f>0$ sur $[a,b]$ : $\frac1f$ est continue, et $f\cdot\frac1f = 1$.`,
    trin: R`$\varphi(t) = \|x+ty\|^2 = \|y\|^2t^2+2t(x|y)+\|x\|^2\geqslant0$ pour tout $t$ : un trinôme toujours positif a un discriminant $\leqslant0$.` } },
  steps: [
    { q: 1, t: "Démonstration", h: R`<p>Le carré d'une norme est positif : regarde $\|x+ty\|^2$ comme un polynôme de degré $2$ en $t$.</p>`, b: R`<p><b>Énoncé</b> : $|(x|y)|\leqslant\|x\|\,\|y\|$.</p><p>Si $y = 0$, les deux membres sont nuls. Sinon, pour tout réel $t$, on développe par bilinéarité :</p>$$0\leqslant\|x+ty\|^2 = (x+ty|x+ty) = \|y\|^2t^2+2(x|y)t+\|x\|^2.$$<p>C'est <span data-k="trin">un trinôme en $t$</span> (car $\|y\|^2>0$) qui reste positif : il n'a pas deux racines distinctes, donc son discriminant est $\leqslant0$ :</p><div class="sbox">$$4(x|y)^2-4\|x\|^2\|y\|^2\leqslant0,\quad\text{donc}\quad|(x|y)|\leqslant\|x\|\,\|y\|.$$</div>`, rappels: ["o-b-cs"] },
    { q: 1, t: "Cas d'égalité", h: R`<p>Discriminant nul : le trinôme a une racine $t_0$, donc $\|x+t_0y\| = 0$.</p>`, b: R`<p>Si $y\neq0$ et qu'il y a égalité, le discriminant est nul : le trinôme a une racine $t_0$, donc $\|x+t_0y\|^2 = 0$, puis $x = -t_0y$ : $x$ et $y$ sont colinéaires. (Si $y = 0$, ils le sont aussi.)</p><p>Réciproquement, si $x = \lambda y$ : $|(x|y)| = |\lambda|\|y\|^2 = \|\lambda y\|\,\|y\|$. Égalité.</p><div class="sbox"><p style="margin:0;text-align:center">Égalité $\iff$ $x$ et $y$ colinéaires.</p></div>` },
    { q: 2, t: "Minoration", h: R`<p>Cauchy-Schwarz avec $f$ et $\frac1f$ pour le produit scalaire $\int_a^bgh$ : leur produit scalaire est $\int1 = b-a$.</p>`, b: R`<p>Sur $\mathcal C([a,b])$, $(g|h) = \int_a^bgh$ est un produit scalaire. Pour $f\in\mathcal F$, $f$ et $\frac1f$ sont continues (car $f$ est <span data-k="pos">strictement positive</span>, donc ne s'annule pas). Par Cauchy-Schwarz :</p>$$(b-a)^2 = \Big(\int_a^bf\cdot\frac1f\Big)^2\leqslant\int_a^bf^2\times\int_a^b\frac1{f^2}.$$<p>L'ensemble est une partie non vide de $\mathbb R$, minorée par $(b-a)^2$ : il admet une borne inférieure $m\geqslant(b-a)^2$.</p>` },
    { q: 2, t: "Atteinte", h: R`<p>Égalité quand $f$ et $\frac1f$ sont colinéaires : $f$ constante.</p>`, b: R`<p>Pour $f = 1$ : $\int_a^b1\times\int_a^b1 = (b-a)^2$. La minoration est atteinte, donc c'est un minimum :</p><div class="sbox">$$m = (b-a)^2,\ \text{atteinte pour les fonctions constantes}.$$</div><p>(Par le cas d'égalité : $\frac1f = \lambda f$ donne $f^2 = \frac1\lambda$, constante.)</p>` }
  ],
  ctx: { "o-b-cs": R`<p>Avec $x = f$, $y = \frac1f$ pour $(g|h) = \int_a^bgh$.</p>` },
  piege: R`Oublier que $f>0$ est nécessaire pour que $\frac1f$ soit définie et continue.`,
  methode: R`Minimiser un produit d'intégrales : Cauchy-Schwarz avec des fonctions dont le produit est simple.`
},
{
  id: "o-an-77", subj: "oraux", year: "mp", chap: 2, concours: "ccinp", level: 2, time: "20 min",
  title: "Orthogonaux de sommes et d'intersections",
  enonce: R`<p>Soit $E$ un espace euclidien.</p><ol><li>Soit $A$ un sous-espace de $E$. Montrer que $(A^\perp)^\perp = A$.</li><li>Soient $F$, $G$ deux sous-espaces.<ol style="list-style:lower-alpha"><li>Montrer que $(F+G)^\perp = F^\perp\cap G^\perp$.</li><li>Montrer que $(F\cap G)^\perp = F^\perp+G^\perp$.</li></ol></li></ol>`,
  decode: { donnees: [R`$\dim E<\infty$ : $E = A\oplus A^\perp$.`], but: R`Règles de calcul sur l'orthogonal.`, cles: {
    dec: R`$x\perp F+G\iff x\perp F$ et $x\perp G$ : être orthogonal à une somme, c'est être orthogonal à chaque morceau.` } },
  steps: [
    { q: 1, t: "Double orthogonal", h: R`<p>Une inclusion directe, puis égalité des dimensions.</p>`, b: R`<p><b>Inclusion</b> : soit $a\in A$. Pour tout $y\in A^\perp$, $(a|y) = 0$ par définition de $A^\perp$. Donc $a$ est orthogonal à tout $A^\perp$ : $a\in(A^\perp)^\perp$. Ainsi $A\subset(A^\perp)^\perp$.</p><p><b>Dimensions</b> : en dimension finie $n$, $\dim F^\perp = n-\dim F$. Appliqué deux fois :</p>$$\dim(A^\perp)^\perp = n-\dim A^\perp = n-(n-\dim A) = \dim A.$$<p>Inclusion et même dimension : $(A^\perp)^\perp = A$.</p>`, rappels: ["o-b-orth-dim"] },
    { q: 2, t: "Orthogonal d'une somme", h: R`<p>Double inclusion directe.</p>`, b: R`<p><b>$\subset$</b> : si $x\perp F+G$, alors $x$ est orthogonal à tout vecteur de $F$ (car $F\subset F+G$) et de $G$ : $x\in F^\perp\cap G^\perp$.</p><p><b>$\supset$</b> : si $x\in F^\perp\cap G^\perp$, un vecteur de $F+G$ s'écrit $f+g$, et <span data-k="dec">par linéarité</span> $(x|f+g) = (x|f)+(x|g) = 0+0 = 0$.</p><div class="sbox">$$(F+G)^\perp = F^\perp\cap G^\perp.$$</div>` },
    { q: 2, t: "Orthogonal d'une intersection", h: R`<p>Applique la formule précédente à $F^\perp$ et $G^\perp$, puis prends l'orthogonal.</p>`, b: R`<p>On applique 2.a aux sous-espaces $F^\perp$ et $G^\perp$, puis Q1 ($F^{\perp\perp} = F$) :</p>$$(F^\perp+G^\perp)^\perp = F^{\perp\perp}\cap G^{\perp\perp} = F\cap G.$$<p>On prend l'orthogonal des deux membres et on réutilise Q1 :</p>$$F^\perp+G^\perp = \big((F^\perp+G^\perp)^\perp\big)^\perp = (F\cap G)^\perp.$$<div class="sbox">$$(F\cap G)^\perp = F^\perp+G^\perp.$$</div>`, rappels: ["o-b-orth-dim"] }
  ],
  ctx: { "o-b-orth-dim": R`<p>$\dim A^\perp = n-\dim A$ et $(A^\perp)^\perp = A$.</p>` },
  piege: R`Utiliser $(A^\perp)^\perp = A$ en dimension infinie : c'est faux en général.`,
  methode: R`Une inclusion facile $+$ égalité des dimensions ; ou se ramener à une formule déjà prouvée par passage à l'orthogonal.`
},
{
  id: "o-an-78", subj: "oraux", year: "mp", chap: 3, concours: "ccinp", level: 2, time: "25 min",
  title: "Le groupe des isométries",
  enonce: R`<p>Soit $E$ un espace euclidien de dimension $n$.</p><ol><li>Soit $u\in\mathcal L(E)$ tel que $\|u(x)\| = \|x\|$ pour tout $x$.<ol style="list-style:lower-alpha"><li>Montrer que $(u(x)|u(y)) = (x|y)$ pour tous $x,y$.</li><li>Montrer que $u$ est bijectif.</li></ol></li><li>Montrer que $O(E)$, ensemble de ces endomorphismes, est un groupe pour $\circ$.</li><li>Soit $(e_1,\dots,e_n)$ une base orthonormée. Montrer que $u\in O(E)$ si et seulement si $(u(e_1),\dots,u(e_n))$ est une base orthonormée.</li></ol>`,
  decode: { donnees: [R`$u$ conserve la norme.`], but: R`Propriétés de base des isométries.`, cles: {
    sg: R`On montre que $O(E)$ est un sous-groupe de $GL(E)$ : il contient $\mathrm{Id}$, est stable par composition et par inverse.` } },
  steps: [
    { q: 1, t: "Conservation du produit scalaire", h: R`<p>Polarisation : $(x|y) = \frac14\big(\|x+y\|^2-\|x-y\|^2\big)$.</p>`, b: R`<p>L'identité de polarisation exprime le produit scalaire avec des normes :</p>$$(x|y) = \frac14\big(\|x+y\|^2-\|x-y\|^2\big).$$<p>(On la vérifie en développant : $\|x\pm y\|^2 = \|x\|^2\pm2(x|y)+\|y\|^2$, et la différence vaut $4(x|y)$.)</p><p>On l'applique à $u(x),u(y)$, puis on utilise la linéarité ($u(x)+u(y) = u(x+y)$) et la conservation des normes :</p>$$(u(x)|u(y)) = \tfrac14\big(\|u(x+y)\|^2-\|u(x-y)\|^2\big) = \tfrac14\big(\|x+y\|^2-\|x-y\|^2\big) = (x|y).$$`, rappels: ["o-b-polarisation"] },
    { q: 1, t: "Bijectivité", h: R`<p>Noyau nul, dimension finie.</p>`, b: R`<p>Si $u(x) = 0$, alors $\|x\| = \|u(x)\| = 0$, donc $x = 0$ : $\ker u = \{0\}$ et $u$ est injectif. Un endomorphisme injectif d'un espace de dimension finie est bijectif (théorème du rang : $\operatorname{rg}u = n$).</p>`, rappels: ["o-b-ker-inj"] },
    { q: 2, t: "Sous-groupe de GL(E)", h: R`<p><span data-k="sg">Trois vérifications</span> : neutre, composée, inverse.</p>`, b: R`<p>Par 1.b, $O(E)\subset GL(E)$. On vérifie que c'est un sous-groupe :</p><ul><li><b>Neutre</b> : $\|\mathrm{Id}(x)\| = \|x\|$, donc $\mathrm{Id}\in O(E)$.</li><li><b>Composée</b> : si $u,v\in O(E)$, $\|u(v(x))\| = \|v(x)\| = \|x\|$.</li><li><b>Inverse</b> : on applique la propriété de $u$ au vecteur $u^{-1}(x)$ : $\|x\| = \|u(u^{-1}(x))\| = \|u^{-1}(x)\|$.</li></ul><p>$O(E)$ est un sous-groupe de $(GL(E),\circ)$, donc un groupe.</p>` },
    { q: 3, t: "Sens direct", h: R`<p>Utilise 1.a avec $x = e_i$, $y = e_j$.</p>`, b: R`<p>Si $u\in O(E)$, par 1.a : $(u(e_i)|u(e_j)) = (e_i|e_j) = \delta_{ij}$ (qui vaut $1$ si $i = j$, $0$ sinon). La famille $(u(e_1),\dots,u(e_n))$ est orthonormée, donc libre ; elle a $n$ vecteurs : c'est une base orthonormée.</p>`, rappels: ["o-b-isometrie"] },
    { q: 3, t: "Réciproque", h: R`<p>Décompose $x = \sum x_ie_i$, puis développe $\|u(x)\|^2 = \big(\sum x_iu(e_i)\big|\sum x_ju(e_j)\big)$.</p>`, b: R`<p>Supposons $(u(e_i))$ orthonormée. Pour $x = \sum_ix_ie_i$, par linéarité $u(x) = \sum_ix_iu(e_i)$, et en développant le produit scalaire :</p>$$\|u(x)\|^2 = \sum_{i,j}x_ix_j\,(u(e_i)|u(e_j)) = \sum_{i,j}x_ix_j\delta_{ij} = \sum_ix_i^2.$$<p>De même, la base $(e_i)$ étant orthonormée, $\|x\|^2 = \sum_ix_i^2$. Donc $\|u(x)\| = \|x\|$ et $u\in O(E)$.</p>` }
  ],
  ctx: { "o-b-polarisation": R`<p>Pour passer de la norme au produit scalaire.</p>`, "o-b-ker-inj": R`<p>$\ker u = \{0\}$.</p>`, "o-b-isometrie": R`<p>Caractérisation par l'image d'une base orthonormée.</p>` },
  piege: R`Oublier la stabilité par inverse dans la structure de groupe.`,
  methode: R`Isométries : polarisation, noyau nul, calcul de $\|u(x)\|^2$ dans une base orthonormée.`
},
{
  id: "o-an-79", subj: "oraux", year: "mp", chap: 2, concours: "ccinp", level: 2, time: "20 min",
  title: "Un produit scalaire intégral",
  enonce: R`<p>Soient $a< b$.</p><ol><li>Soit $h$ continue et positive sur $[a,b]$. Montrer que $\int_a^bh = 0\Rightarrow h = 0$.</li><li>Sur $E = \mathcal C([a,b],\mathbb R)$, montrer que $(f|g) = \int_a^bfg$ est un produit scalaire.</li><li>Majorer $\int_0^1\sqrt x\,e^x\,dx$ à l'aide de l'inégalité de Cauchy-Schwarz.</li></ol>`,
  decode: { donnees: [R`Fonctions continues sur un segment.`], but: R`Un lemme, un produit scalaire, une majoration.`, cles: {
    x0: R`Si $h(x_0)>0$, par continuité $h\geqslant\frac{h(x_0)}2$ sur un intervalle $[\alpha,\beta]$ de longueur $>0$ autour de $x_0$.` } },
  steps: [
    { q: 1, t: "Le lemme", h: R`<p>Par l'absurde : si $h$ est strictement positive en un point, elle l'est sur tout un petit intervalle, qui donne une aire strictement positive.</p>`, b: R`<p><span data-k="x0">Si $h(x_0)>0$</span> : $\int_a^bh\geqslant\int_\alpha^\beta h\geqslant(\beta-\alpha)\frac{h(x_0)}2>0$. Contradiction.</p>` },
    { q: 2, t: "Les axiomes", h: R`<p>Bilinéarité et symétrie : propriétés de l'intégrale. Le point clé est « défini », par le lemme.</p>`, b: R`<p>Symétrique, bilinéaire (linéarité de l'intégrale), positive ($\int f^2\geqslant0$). Définie : $\int f^2 = 0$ avec $f^2$ continue positive donne $f^2 = 0$, donc $f = 0$.</p>`, rappels: ["o-b-ps", "o-b-int-nulle"] },
    { q: 3, t: "Majoration", h: R`<p>On sépare l'intégrande en deux facteurs dont on sait intégrer les carrés : $\sqrt x$ et $e^x$.</p>`, b: R`$$\int_0^1\sqrt x\,e^x\,dx\leqslant\Big(\int_0^1x\,dx\Big)^{1/2}\Big(\int_0^1e^{2x}dx\Big)^{1/2} = \sqrt{\frac12}\sqrt{\frac{e^2-1}2} = \frac{\sqrt{e^2-1}}2.$$<div class="sbox">$$\int_0^1\sqrt x\,e^x\,dx\leqslant\frac{\sqrt{e^2-1}}2\approx1{,}26.$$</div><p>(La valeur exacte est environ $1{,}256$ : la majoration est très bonne.)</p>`, rappels: ["o-b-cs"] }
  ],
  ctx: { "o-b-ps": R`<p>Vérification des quatre axiomes.</p>`, "o-b-int-nulle": R`<p>Avec $h = f^2$.</p>`, "o-b-cs": R`<p>Avec $f(x) = \sqrt x$, $g(x) = e^x$ sur $[0,1]$.</p>` },
  piege: R`Oublier la continuité dans le lemme : une fonction nulle sauf en un point a une intégrale nulle.`,
  methode: R`Produit scalaire intégral : « défini » vient du lemme de positivité. Majorer une intégrale de produit : Cauchy-Schwarz.`
},
{
  id: "o-an-80", subj: "oraux", year: "mp", chap: 2, concours: "ccinp", level: 2, time: "20 min",
  title: "Projection orthogonale sur des fonctions trigonométriques",
  enonce: R`<p>Soit $E$ l'espace des fonctions continues $2\pi$-périodiques de $\mathbb R$ dans $\mathbb R$.</p><ol><li>Montrer que $(f|g) = \dfrac1{2\pi}\displaystyle\int_0^{2\pi}f(t)g(t)\,dt$ est un produit scalaire sur $E$.</li><li>Soit $F = \operatorname{Vect}(c_1,c_2)$ avec $c_1(x) = \cos x$, $c_2(x) = \cos2x$. Déterminer le projeté orthogonal sur $F$ de $u : x\mapsto\cos^3x$.</li></ol>`,
  decode: { donnees: [R`Fonctions périodiques continues.`], but: R`Un produit scalaire et un projeté orthogonal.`, cles: {
    orth: R`$\frac1{2\pi}\int_0^{2\pi}\cos(px)\cos(qx)\,dx = 0$ si $p\neq q$ et $\frac12$ si $p = q\geqslant1$.`,
    lin: R`$\cos^3x = \frac34\cos x+\frac14\cos3x$.` } },
  steps: [
    { q: 1, t: "Produit scalaire", h: R`<p>Comme pour les fonctions continues sur un segment : la seule difficulté est « défini ».</p>`, b: R`<p>Bilinéaire, symétrique, positif. Si $(f|f) = 0$, $f^2$ continue positive d'intégrale nulle sur $[0,2\pi]$ : $f = 0$ sur $[0,2\pi]$, donc sur $\mathbb R$ par périodicité.</p>`, rappels: ["o-b-int-nulle"] },
    { q: 2, t: "Base orthogonale de F", h: R`<p>$\cos x$ et $\cos2x$ sont orthogonales : la formule du projeté se simplifie.</p>`, b: R`<p><span data-k="orth">Orthogonalité</span> : $(c_1|c_2) = \frac1{2\pi}\int_0^{2\pi}\cos t\cos2t\,dt = \frac1{4\pi}\int_0^{2\pi}(\cos3t+\cos t)\,dt = 0$, et $\|c_1\|^2 = \frac1{2\pi}\int_0^{2\pi}\cos^2t\,dt = \frac1{2\pi}\int_0^{2\pi}\frac{1+\cos2t}2dt = \frac12$ ; de même $\|c_2\|^2 = \frac12$.</p>`, rappels: ["o-b-proj-orth"] },
    { q: 2, t: "Calcul", h: R`<p>Linéariser $\cos^3$ rend les produits scalaires immédiats.</p>`, b: R`<p><span data-k="lin">Linéarisation</span> : $\cos3x = 4\cos^3x-3\cos x$, donc $\cos^3x = \frac34\cos x+\frac14\cos3x$. Avec l'orthogonalité des $\cos kx$ ($(\cos kx|\cos lx) = 0$ si $k\neq l$, $\frac12$ si $k = l\geqslant1$) :</p>$$(u|c_1) = \frac34\cdot\frac12+\frac14\cdot0 = \frac38,\qquad(u|c_2) = 0.$$<p>Formule du projeté sur la base orthogonale $(c_1,c_2)$ : $p_F(u) = \frac{(u|c_1)}{\|c_1\|^2}c_1+\frac{(u|c_2)}{\|c_2\|^2}c_2$. Donc</p><div class="sbox">$$p_F(u) = \frac{3/8}{1/2}c_1 = \frac34\cos x.$$</div>` }
  ],
  ctx: { "o-b-int-nulle": R`<p>Sur $[0,2\pi]$.</p>`, "o-b-proj-orth": R`<p>Base orthogonale $(c_1,c_2)$.</p>` },
  piege: R`Oublier de diviser par $\|c_k\|^2 = \frac12$.`,
  methode: R`Projeté sur des fonctions trigonométriques : linéariser, puis utiliser l'orthogonalité des $\cos(kx)$.`
},
{
  id: "o-an-81", subj: "oraux", year: "mp", chap: 2, concours: "ccinp", level: 2, time: "25 min",
  title: "Distance à l'espace des similitudes",
  enonce: R`<p>Sur $\mathcal M_2(\mathbb R)$, on admet que $\varphi(A,A') = \operatorname{tr}(A^\top A')$ est un produit scalaire. Soit $F = \Big\{\begin{pmatrix}a&b\\-b&a\end{pmatrix},\ (a,b)\in\mathbb R^2\Big\}$.</p><ol><li>Montrer que $F$ est un sous-espace vectoriel.</li><li>Déterminer une base de $F^\perp$.</li><li>Déterminer le projeté orthogonal de $J = \begin{pmatrix}1&2\\3&4\end{pmatrix}$ sur $F^\perp$.</li><li>Calculer $d(J,F)$.</li></ol>`,
  decode: { donnees: [R`$\operatorname{tr}(A^\top A') = \sum a_{ij}a'_{ij}$.`], but: R`Orthogonal, projeté et distance.`, cles: {
    ps: R`Le produit scalaire est la somme des produits des coefficients, comme dans $\mathbb R^4$.` } },
  steps: [
    { q: 1, t: "Sous-espace", h: R`<p>$F = \operatorname{Vect}(I_2,K)$ avec $K = \begin{pmatrix}0&1\\-1&0\end{pmatrix}$.</p>`, b: R`<p>On sépare les deux paramètres :</p>$$\begin{pmatrix}a&b\\-b&a\end{pmatrix} = a\begin{pmatrix}1&0\\0&1\end{pmatrix}+b\begin{pmatrix}0&1\\-1&0\end{pmatrix} = aI_2+bK.$$<p>Donc $F = \operatorname{Vect}(I_2,K)$ : c'est un sous-espace vectoriel. $I_2$ et $K$ ne sont pas colinéaires, donc $\dim F = 2$.</p>` },
    { q: 2, t: "L'orthogonal", h: R`<p>$M$ est orthogonale à $F$ si elle l'est à $I_2$ et à $K$. Utilise $\operatorname{tr}(A^\top A') = \sum a_{ij}a'_{ij}$.</p>`, b: R`<p>Le produit scalaire s'écrit $\varphi(A,A') = \sum_{i,j}a_{ij}a'_{ij}$ (somme des produits des coefficients de même place). <span data-k="ps">Avec $M = \begin{pmatrix}x&y\\z&t\end{pmatrix}$</span> :</p>$$\varphi(M,I_2) = x\cdot1+y\cdot0+z\cdot0+t\cdot1 = x+t,\qquad\varphi(M,K) = x\cdot0+y\cdot1+z\cdot(-1)+t\cdot0 = y-z.$$<p>$M\in F^\perp\iff x+t = 0$ et $y-z = 0\iff t = -x$ et $z = y$ :</p><div class="sbox">$$F^\perp = \Big\{\begin{pmatrix}c&d\\d&-c\end{pmatrix}\Big\} = \operatorname{Vect}\Big(\begin{pmatrix}1&0\\0&-1\end{pmatrix},\begin{pmatrix}0&1\\1&0\end{pmatrix}\Big).$$</div><p>Contrôle : $\dim F^\perp = 2 = 4-\dim F$ ✓.</p>` },
    { q: 3, t: "Projeté sur F", h: R`<p>$(I_2,K)$ est orthogonale : $p_F(J) = \frac{(J|I_2)}{\|I_2\|^2}I_2+\frac{(J|K)}{\|K\|^2}K$.</p>`, b: R`<p>$(I_2|K) = 0+0+0+0 = 0$ : la base $(I_2,K)$ est orthogonale, et $\|I_2\|^2 = 1+1 = 2$, $\|K\|^2 = 1+1 = 2$. On calcule :</p>$$(J|I_2) = 1+4 = 5,\qquad(J|K) = 2\cdot1+3\cdot(-1) = -1.$$<p>Formule du projeté sur une base orthogonale :</p>$$p_F(J) = \frac52I_2-\frac12K = \begin{pmatrix}5/2&0\\0&5/2\end{pmatrix}+\begin{pmatrix}0&-1/2\\1/2&0\end{pmatrix} = \begin{pmatrix}5/2&-1/2\\1/2&5/2\end{pmatrix}.$$`, rappels: ["o-b-proj-orth"] },
    { q: 3, t: "Projeté sur F⊥", h: R`<p>$J = p_F(J)+p_{F^\perp}(J)$.</p>`, b: R`<p>Comme $\mathcal M_2(\mathbb R) = F\oplus F^\perp$ (orthogonalement), $p_{F^\perp}(J) = J-p_F(J)$ :</p><div class="sbox">$$p_{F^\perp}(J) = \begin{pmatrix}1-\frac52&2+\frac12\\3-\frac12&4-\frac52\end{pmatrix} = \begin{pmatrix}-3/2&5/2\\5/2&3/2\end{pmatrix}.$$</div><p>Contrôle : elle est bien de la forme $\begin{pmatrix}c&d\\d&-c\end{pmatrix}$ avec $c = -\frac32$, $d = \frac52$ ✓.</p>` },
    { q: 4, t: "Distance", h: R`<p>$d(J,F) = \|J-p_F(J)\| = \|p_{F^\perp}(J)\|$.</p>`, b: R`<p>La distance à $F$ est atteinte au projeté : $d(J,F) = \|J-p_F(J)\| = \|p_{F^\perp}(J)\|$. On somme les carrés des coefficients :</p>$$\|p_{F^\perp}(J)\|^2 = \frac94+\frac{25}4+\frac{25}4+\frac94 = \frac{68}4 = 17.$$<div class="sbox">$$d(J,F) = \sqrt{17}.$$</div>` }
  ],
  ctx: { "o-b-proj-orth": R`<p>Base orthogonale $(I_2,K)$ de $F$.</p>` },
  piege: R`Prendre $\|I_2\|^2 = 1$ : c'est $\operatorname{tr}(I_2) = 2$.`,
  methode: R`Distance à $F$ : projeter sur $F$ (base orthogonale) et calculer la norme du reste.`
},
{
  id: "o-an-82", subj: "oraux", year: "mp", chap: 2, concours: "ccinp", level: 2, time: "15 min",
  title: "Distance d'une matrice aux matrices symétriques",
  enonce: R`<p>Pour $A = \begin{pmatrix}a&b\\c&d\end{pmatrix}$, $A' = \begin{pmatrix}a'&b'\\c'&d'\end{pmatrix}$, on pose $(A|A') = aa'+bb'+cc'+dd'$.</p><ol><li>Montrer que c'est un produit scalaire sur $\mathcal M_2(\mathbb R)$.</li><li>Calculer la distance de $A = \begin{pmatrix}2&-1\\3&4\end{pmatrix}$ au sous-espace $\mathcal S_2(\mathbb R)$ des matrices symétriques.</li></ol>`,
  decode: { donnees: [R`Le produit scalaire canonique de $\mathbb R^4$ transporté.`], but: R`Projeter sur les symétriques.`, cles: {
    dec: R`$A = \underbrace{\frac{A+A^\top}2}_{\text{symétrique}}+\underbrace{\frac{A-A^\top}2}_{\text{antisymétrique}}$, et une symétrique est orthogonale à une antisymétrique.` } },
  steps: [
    { q: 1, t: "Produit scalaire", h: R`<p>C'est le produit scalaire canonique de $\mathbb R^4$ via $(a,b,c,d)$.</p>`, b: R`<p>Bilinéaire, symétrique ; $(A|A) = a^2+b^2+c^2+d^2\geqslant0$, nul seulement si $A = 0$.</p>`, rappels: ["o-b-ps"] },
    { q: 2, t: "Décomposer A", h: R`<p>Une partie symétrique et une partie antisymétrique orthogonale aux symétriques.</p>`, b: R`<p><span data-k="dec">Décomposition</span> : $S = \begin{pmatrix}2&1\\1&4\end{pmatrix}$, $T = \begin{pmatrix}0&-2\\2&0\end{pmatrix}$. Pour $M$ symétrique, $(T|M) = -2m_{12}+2m_{21} = 0$ : $T\in\mathcal S_2^\perp$. Donc $S = p_{\mathcal S_2}(A)$ et</p><div class="sbox">$$d(A,\mathcal S_2) = \|T\| = \sqrt{4+4} = 2\sqrt2.$$</div>`, rappels: ["o-b-proj-orth"] }
  ],
  ctx: { "o-b-ps": R`<p>Identification à $\mathbb R^4$.</p>`, "o-b-proj-orth": R`<p>$A-S\in\mathcal S_2^\perp$ caractérise le projeté.</p>` },
  piege: R`Projeter sur une base non orthogonale de $\mathcal S_2$ sans orthonormaliser.`,
  methode: R`Si on trouve $A = s+t$ avec $s\in F$ et $t\in F^\perp$, alors $s$ est le projeté et $d(A,F) = \|t\|$.`
},
{
  id: "o-an-92", subj: "oraux", year: "mp", chap: 2, concours: "ccinp", level: 2, time: "20 min",
  title: "Symétriques, antisymétriques et diagonales",
  enonce: R`<p>Sur $E = \mathcal M_n(\mathbb R)$, on pose $\langle A,B\rangle = \operatorname{tr}(A^\top B)$.</p><ol><li>Montrer que c'est un produit scalaire.</li><li>Soient $\mathcal S_n$ et $\mathcal A_n$ les sous-espaces des matrices symétriques et antisymétriques.<ol style="list-style:lower-alpha"><li>Montrer que $E = \mathcal S_n\oplus\mathcal A_n$.</li><li>Montrer que $\mathcal A_n^\perp = \mathcal S_n$.</li></ol></li><li>Soit $\mathcal D$ le sous-espace des matrices diagonales. Déterminer $\mathcal D^\perp$.</li></ol>`,
  decode: { donnees: [R`$\operatorname{tr}(A^\top B) = \sum_{i,j}a_{ij}b_{ij}$.`], but: R`Structure euclidienne de $\mathcal M_n(\mathbb R)$.`, cles: {
    tr: R`$\operatorname{tr}(A^\top B) = \sum_j(A^\top B)_{jj} = \sum_j\sum_ia_{ij}b_{ij}$.`,
    sa: R`Pour $S$ symétrique, $T$ antisymétrique : $\langle S,T\rangle = \operatorname{tr}(ST) = \operatorname{tr}((ST)^\top) = \operatorname{tr}(T^\top S^\top) = -\operatorname{tr}(TS) = -\operatorname{tr}(ST)$, donc $\langle S,T\rangle = 0$.` } },
  steps: [
    { q: 1, t: "La trace comme une somme", h: R`<p>Écris le coefficient diagonal $(A^\top B)_{jj}$ comme une somme, puis somme sur $j$.</p>`, b: R`<p>Le coefficient $(j,j)$ du produit $A^\top B$ est « ligne $j$ de $A^\top$ » fois « colonne $j$ de $B$ ». La ligne $j$ de $A^\top$ est la colonne $j$ de $A$ :</p>$$(A^\top B)_{jj} = \sum_{i=1}^na_{ij}b_{ij}.$$<p>On somme sur $j$ :</p><div class="sbox">$$\langle A,B\rangle = \operatorname{tr}(A^\top B) = \sum_{i,j}a_{ij}b_{ij}.$$</div><p>C'est la <span data-k="tr">formule</span> qui rend tout clair.</p>`, rappels: ["o-b-ps"] },
    { q: 1, t: "Les axiomes", h: R`<p>C'est le produit scalaire canonique de $\mathbb R^{n^2}$, en rangeant les coefficients en un seul vecteur.</p>`, b: R`<p>En rangeant les $n^2$ coefficients d'une matrice en un vecteur de $\mathbb R^{n^2}$, $\langle A,B\rangle$ est exactement le produit scalaire canonique. On vérifie directement :</p><ul><li><b>Symétrique</b> : $\sum a_{ij}b_{ij} = \sum b_{ij}a_{ij}$.</li><li><b>Bilinéaire</b> : linéaire en $B$ (et en $A$ par symétrie).</li><li><b>Défini positif</b> : $\langle A,A\rangle = \sum_{i,j}a_{ij}^2\geqslant0$, et c'est nul si et seulement si tous les $a_{ij}$ sont nuls.</li></ul>`, rappels: ["o-b-ps"] },
    { q: 2, t: "Somme directe", h: R`<p>$A = \frac{A+A^\top}2+\frac{A-A^\top}2$, et une matrice à la fois symétrique et antisymétrique est nulle.</p>`, b: R`<p><b>Somme</b> : toute matrice s'écrit</p>$$A = \underbrace{\frac{A+A^\top}2}_{S}+\underbrace{\frac{A-A^\top}2}_{T}.$$<p>$S^\top = \frac{A^\top+A}2 = S$ est symétrique, et $T^\top = \frac{A^\top-A}2 = -T$ est antisymétrique.</p><p><b>Intersection</b> : si $A\in\mathcal S_n\cap\mathcal A_n$, alors $A = A^\top = -A$, donc $2A = 0$ et $A = 0$.</p><div class="sbox">$$\mathcal M_n(\mathbb R) = \mathcal S_n\oplus\mathcal A_n.$$</div>` },
    { q: 2, t: "Symétriques ⟂ antisymétriques", h: R`<p>Pour $S$ symétrique et $T$ antisymétrique, calcule $\operatorname{tr}(S^\top T)$ de deux façons avec $\operatorname{tr}(M) = \operatorname{tr}(M^\top)$.</p>`, b: R`<p>Soit $S\in\mathcal S_n$ et $T\in\mathcal A_n$. Comme une matrice et sa transposée ont même trace :</p>$$\langle S,T\rangle = \operatorname{tr}(S^\top T) = \operatorname{tr}\big((S^\top T)^\top\big) = \operatorname{tr}(T^\top S) = \operatorname{tr}(-TS) = -\operatorname{tr}(TS).$$<p>Et $\operatorname{tr}(TS) = \operatorname{tr}(ST) = \operatorname{tr}(S^\top T) = \langle S,T\rangle$. <span data-k="sa">Donc $\langle S,T\rangle = -\langle S,T\rangle$, soit $\langle S,T\rangle = 0$</span>. Ainsi $\mathcal S_n\subset\mathcal A_n^\perp$.</p>` },
    { q: 2, t: "Égalité par les dimensions", h: R`<p>$\dim F^\perp = \dim E-\dim F$, et $\dim\mathcal S_n+\dim\mathcal A_n = n^2$.</p>`, b: R`<p>En dimension finie, $\dim\mathcal A_n^\perp = n^2-\dim\mathcal A_n$. Par la somme directe, $\dim\mathcal S_n = n^2-\dim\mathcal A_n$. Les deux dimensions sont égales, et $\mathcal S_n\subset\mathcal A_n^\perp$ :</p><div class="sbox">$$\mathcal A_n^\perp = \mathcal S_n.$$</div>`, rappels: ["o-b-orth-dim"] },
    { q: 3, t: "Orthogonal des diagonales", h: R`<p>$\mathcal D$ est engendré par les $E_{ii}$, et $\langle M,E_{ii}\rangle = m_{ii}$.</p>`, b: R`<p>$\mathcal D = \operatorname{Vect}(E_{11},\dots,E_{nn})$, où $E_{ii}$ a un seul $1$ en position $(i,i)$. Être orthogonal à $\mathcal D$, c'est être orthogonal à chaque $E_{ii}$. Par la formule de Q1 :</p>$$\langle M,E_{ii}\rangle = \sum_{k,l}m_{kl}(E_{ii})_{kl} = m_{ii}.$$<p>Donc $M\perp\mathcal D\iff m_{ii} = 0$ pour tout $i$.</p><div class="sbox">$$\mathcal D^\perp = \{M : \text{diagonale nulle}\}.$$</div><p>Contrôle : $\dim\mathcal D^\perp = n^2-n = n^2-\dim\mathcal D$ ✓.</p>` }
  ],
  ctx: { "o-b-ps": R`<p>Identification à $\mathbb R^{n^2}$.</p>`, "o-b-orth-dim": R`<p>$\dim\mathcal S_n = \frac{n(n+1)}2$, $\dim\mathcal A_n = \frac{n(n-1)}2$.</p>` },
  piege: R`Oublier que $\operatorname{tr}(M^\top) = \operatorname{tr}(M)$ dans le calcul de $\langle S,T\rangle$.`,
  methode: R`Orthogonal dans $\mathcal M_n$ : tester contre les matrices élémentaires $E_{ij}$.`
},
{
  id: "o-an-84", subj: "oraux", year: "mp", chap: 4, concours: "ccinp", level: 2, time: "20 min",
  title: "Racines de l'unité et une équation imaginaire pure",
  enonce: R`<ol><li>Donner la définition d'un argument d'un nombre complexe non nul.</li><li>Soit $n\in\mathbb N^\ast$. Résoudre $z^n = 1$ dans $\mathbb C$ et donner le nombre de solutions.</li><li>En déduire les solutions de $(z+1)^n = (z-1)^n$ et montrer qu'elles sont imaginaires pures.</li></ol>`,
  decode: { donnees: [R`$n\geqslant1$.`], but: R`Racines $n$-ièmes et une équation qui s'y ramène.`, cles: {
    quot: R`$z = 1$ n'est pas solution (à gauche $2^n$, à droite $0$). On peut donc diviser : $\Big(\frac{z+1}{z-1}\Big)^n = 1$.`,
    inv: R`$\frac{z+1}{z-1} = \omega\iff z+1 = \omega z-\omega\iff z(\omega-1) = \omega+1\iff z = \frac{\omega+1}{\omega-1}$ (si $\omega\neq1$).` } },
  steps: [
    { q: 1, t: "Argument", h: R`<p>Forme exponentielle.</p>`, b: R`<p>Pour $z\neq0$, $\theta$ est un argument de $z$ si $z = |z|e^{i\theta}$.</p>` },
    { q: 2, t: "z^n = 1", h: R`<p>On écrit $z = re^{i\theta}$ et on identifie module et argument.</p>`, b: R`<p>$r^n = 1$ donne $r = 1$ ; $n\theta\equiv0\ [2\pi]$ donne $\theta = \frac{2k\pi}n$. Les $n$ valeurs $k = 0,\dots,n-1$ donnent des points distincts :</p><div class="sbox">$$z^n = 1\iff z = e^{2ik\pi/n},\ 0\leqslant k\leqslant n-1.$$</div>` + unitCircle([0, 1, 2, 3, 4, 5].map(k => [Math.cos(k * Math.PI / 3), Math.sin(k * Math.PI / 3), k === 0 ? "1" : "", ""]), R`Les racines sixièmes de l'unité forment un hexagone régulier.`, "Racines sixièmes de l'unité"), rappels: ["o-b-racines"] },
    { q: 3, t: "Se ramener à ω^n = 1", h: R`<p>On divise par $(z-1)^n$.</p>`, b: R`<p>$z = 1$ n'est pas solution ($2^n\neq0$). Pour $z\neq1$, <span data-k="quot">on divise par $(z-1)^n$</span> : $\big(\frac{z+1}{z-1}\big)^n = 1$, donc $\frac{z+1}{z-1} = \omega$ avec $\omega^n = 1$, et $\omega\neq1$ (car $z+1\neq z-1$). <span data-k="inv">On isole $z$</span> : $z+1 = \omega z-\omega\iff z(\omega-1) = \omega+1\iff z = \frac{\omega+1}{\omega-1}$.</p>` },
    { q: 3, t: "Angle moitié", h: R`<p>$e^{i\theta}+1$ et $e^{i\theta}-1$ se factorisent par $e^{i\theta/2}$.</p>`, b: R`<p>Avec $\omega = e^{i\theta}$, $\theta = \frac{2k\pi}n$, $1\leqslant k\leqslant n-1$ :</p>$$z = \frac{2\cos\frac\theta2e^{i\theta/2}}{2i\sin\frac\theta2e^{i\theta/2}} = -i\cot\frac\theta2.$$<div class="sbox">$$z_k = -i\cot\frac{k\pi}n,\quad1\leqslant k\leqslant n-1\qquad(\text{imaginaires purs}).$$</div>`, rappels: ["o-b-angle-moitie"] }
  ],
  ctx: { "o-b-racines": R`<p>Démontré ici.</p>`, "o-b-angle-moitie": R`<p>Au numérateur et au dénominateur.</p>` },
  piege: R`Garder $\omega = 1$ : il ne donne aucune solution.`,
  methode: R`Équation $A^n = B^n$ : diviser pour obtenir $(A/B)^n = 1$, puis factoriser par l'angle moitié.`
},
{
  id: "o-an-86", subj: "oraux", year: "mp", chap: 4, concours: "ccinp", level: 2, time: "25 min",
  title: "Le petit théorème de Fermat",
  enonce: R`<ol><li>Soient $a,b,p\in\mathbb Z$. Montrer que si $p\wedge a = 1$ et $p\wedge b = 1$, alors $p\wedge(ab) = 1$.</li><li>Soit $p$ un nombre premier.<ol style="list-style:lower-alpha"><li>Montrer que $p$ divise $\binom pk$ pour $1\leqslant k\leqslant p-1$.</li><li>Montrer par récurrence que $n^p\equiv n\ [p]$ pour tout $n\in\mathbb N$.</li><li>En déduire que si $p\nmid n$, alors $n^{p-1}\equiv1\ [p]$.</li></ol></li><li>Application : calculer le reste de $2^{100}$ modulo $13$.</li></ol>`,
  decode: { donnees: [R`$p$ premier.`], but: R`Démontrer Fermat et l'utiliser.`, cles: {
    bez: R`$pu+av = 1$ et $pu'+bv' = 1$. On multiplie : $1 = p(\dots)+ab\,vv'$.`,
    bin: R`$(n+1)^p = \sum_{k=0}^p\binom pkn^k\equiv n^p+1\ [p]$ par 2.a.` } },
  steps: [
    { q: 1, t: "Bézout", h: R`<p>Deux relations de Bézout, on les multiplie.</p>`, b: R`<p>Par le théorème de Bézout, $p\wedge a = 1$ donne $u,v\in\mathbb Z$ avec $up+va = 1$, et $p\wedge b = 1$ donne $u',v'$ avec $u'p+v'b = 1$.</p><p><span data-k="bez">On multiplie ces deux égalités</span> membre à membre et on développe :</p>$$1 = (up+va)(u'p+v'b) = uu'p^2+uv'pb+u'vpa+vv'ab.$$<p>On met $p$ en facteur dans les trois premiers termes :</p>$$1 = p\,(uu'p+uv'b+u'va)+(vv')\,ab.$$<p>C'est une relation de Bézout entre $p$ et $ab$ (coefficients entiers $U = uu'p+uv'b+u'va$ et $V = vv'$). Donc tout diviseur commun de $p$ et $ab$ divise $1$ :</p><div class="sbox">$$p\wedge(ab) = 1.$$</div>`, rappels: ["o-b-gauss"] },
    { q: 2, t: "p divise les binomiaux", h: R`<p>$k\binom pk = p\binom{p-1}{k-1}$ et $p$ est premier avec $k$.</p>`, b: R`<p>On part de la formule « du capitaine » : pour $1\leqslant k\leqslant p$,</p>$$k\binom pk = k\cdot\frac{p!}{k!\,(p-k)!} = \frac{p!}{(k-1)!\,(p-k)!} = p\cdot\frac{(p-1)!}{(k-1)!\,(p-k)!} = p\binom{p-1}{k-1}.$$<p>Donc $p$ divise $k\binom pk$. Comme $p$ est premier et $1\leqslant k\leqslant p-1$, $p$ ne divise pas $k$, donc $p\wedge k = 1$. Par le lemme de Gauss ($p\mid k\cdot\binom pk$ et $p\wedge k = 1$) :</p><div class="sbox">$$p\mid\binom pk\qquad(1\leqslant k\leqslant p-1).$$</div><p><b>Exemple</b> $p = 5$ : $\binom51,\dots,\binom54 = 5,10,10,5$, tous multiples de $5$.</p>`, rappels: ["o-b-binom-p"] },
    { q: 2, t: "Récurrence", h: R`<p>Formule du binôme et 2.a.</p>`, b: R`<p>On montre $\mathcal H_n$ : « $n^p\equiv n\ [p]$ » par récurrence sur $n\in\mathbb N$.</p><p><b>Initialisation</b> : $0^p = 0\equiv0$.</p><p><b>Hérédité</b> : on suppose $n^p\equiv n\ [p]$. Par la formule du binôme :</p>$$(n+1)^p = \sum_{k=0}^p\binom pkn^k = n^p+\sum_{k=1}^{p-1}\binom pkn^k+1.$$<p>Par 2.a, chaque terme de la somme du milieu est un multiple de $p$, donc $\equiv0$. Il reste, avec l'hypothèse de récurrence :</p><p><span data-k="bin">$(n+1)^p\equiv n^p+1\equiv n+1\ [p]$</span>.</p><p>Donc $\mathcal H_{n+1}$ est vraie, et $n^p\equiv n\ [p]$ pour tout $n\in\mathbb N$.</p>` },
    { q: 2, t: "Simplifier par n", h: R`<p>$p\mid n(n^{p-1}-1)$ et $p\wedge n = 1$.</p>`, b: R`<p>Par 2.b, $p$ divise $n^p-n$. On factorise par $n$ :</p>$$n^p-n = n\,(n^{p-1}-1).$$<p>Si $p\nmid n$, comme $p$ est premier, $p\wedge n = 1$. Par le lemme de Gauss, $p$ divise l'autre facteur : $p\mid n^{p-1}-1$.</p><div class="sbox">$$p\nmid n\ \Longrightarrow\ n^{p-1}\equiv1\ [p].$$</div>` },
    { q: 3, t: "Application", h: R`<p>$2^{12}\equiv1\ [13]$ : on réduit l'exposant modulo $12$.</p>`, b: R`<p>$13$ est premier et ne divise pas $2$. Par 2.c avec $p = 13$ : $2^{12}\equiv1\ [13]$.</p><p>On fait la division euclidienne de l'exposant par $12$ : $100 = 8\times12+4$. Donc</p>$$2^{100} = 2^{8\times12+4} = \big(2^{12}\big)^8\times2^4\equiv1^8\times16 = 16\ [13].$$<p>Enfin $16 = 13+3$, donc $16\equiv3\ [13]$ :</p><div class="sbox">$$2^{100}\equiv3\ [13].$$</div><p><b>Vérification de $2^{12}\equiv1$</b> : $2^4 = 16\equiv3$, $2^8\equiv3^2 = 9$, $2^{12} = 2^8\cdot2^4\equiv9\times3 = 27 = 2\times13+1\equiv1$.</p>` }
  ],
  ctx: { "o-b-gauss": R`<p>Bézout dans les deux sens.</p>`, "o-b-binom-p": R`<p>Démontré ici.</p>` },
  piege: R`Appliquer $n^{p-1}\equiv1$ quand $p\mid n$ : c'est faux (on a alors $n^{p-1}\equiv0$).`,
  methode: R`Grandes puissances modulo $p$ premier : réduire l'exposant modulo $p-1$.`
},
{
  id: "o-an-89", subj: "oraux", year: "mp", chap: 4, concours: "ccinp", level: 3, time: "25 min",
  title: "Somme des longueurs des cordes d'un polygone régulier",
  enonce: R`<p>Soit $n\geqslant2$ et $z = e^{2i\pi/n}$.</p><ol><li>Pour $k\in[\![1,n-1]\!]$, déterminer le module et un argument de $z^k-1$.</li><li>Soit $S = \sum_{k=0}^{n-1}|z^k-1|$. Montrer que $S = \dfrac2{\tan\frac\pi{2n}}$.</li></ol>`,
  decode: { donnees: [R`Les $z^k$ sont les sommets d'un polygone régulier.`], but: R`Calculer la somme des distances d'un sommet aux autres.`, cles: {
    geo: R`$|z^k-1|$ est la distance entre le sommet $1$ et le sommet $z^k$ du polygone.`,
    somsin: R`$\sum_{k=0}^{n-1}\sin\frac{k\pi}n = \operatorname{Im}\sum_{k=0}^{n-1}e^{ik\pi/n} = \operatorname{Im}\frac{1-e^{i\pi}}{1-e^{i\pi/n}} = \operatorname{Im}\frac2{1-e^{i\pi/n}}$.` } },
  steps: [
    { q: 1, t: "Angle moitié", h: R`<p>$e^{i\theta}-1 = 2i\sin\frac\theta2e^{i\theta/2}$.</p>`, b: R`<p>Avec $\theta = \frac{2k\pi}n$ : $z^k-1 = 2\sin\frac{k\pi}n\,e^{i(\frac{k\pi}n+\frac\pi2)}$. Pour $1\leqslant k\leqslant n-1$, $\sin\frac{k\pi}n>0$ :</p><div class="sbox">$$|z^k-1| = 2\sin\frac{k\pi}n,\qquad\arg(z^k-1)\equiv\frac{k\pi}n+\frac\pi2.$$</div>` + unitCircle([0, 1, 2, 3, 4].map(k => [Math.cos(2 * k * Math.PI / 5), Math.sin(2 * k * Math.PI / 5), k === 0 ? "1" : "", k === 0 ? "mass" : "body"]), R`Pour $n = 5$ : les cordes (en bleu) relient le sommet $1$ aux autres ; leurs longueurs sont $|z^k-1|$.`, "Cordes d'un pentagone", (() => { let s = ""; for (let k = 1; k < 5; k++) s += `<line class="vb" x1="255" y1="150" x2="${f1(150 + 105 * Math.cos(2 * k * Math.PI / 5))}" y2="${f1(150 - 105 * Math.sin(2 * k * Math.PI / 5))}"/>`; return s; })()), rappels: ["o-b-angle-moitie"] },
    { q: 2, t: "Somme de sinus", h: R`<p>Une somme de sinus est la partie imaginaire d'une somme géométrique.</p>`, b: R`<p>$S = 2\sum_{k=0}^{n-1}\sin\frac{k\pi}n$ (le terme $k = 0$ est nul). <span data-k="somsin">Somme géométrique</span> de raison $e^{i\pi/n}\neq1$, avec $1-e^{i\pi/n} = -2i\sin\frac\pi{2n}e^{i\pi/2n}$ :</p>$$\frac2{1-e^{i\pi/n}} = \frac{i\,e^{-i\pi/2n}}{\sin\frac\pi{2n}},\qquad\operatorname{Im} = \frac{\cos\frac\pi{2n}}{\sin\frac\pi{2n}}.$$<div class="sbox">$$S = \frac2{\tan\frac\pi{2n}}.$$</div><p><b>Contrôle $n = 2$ :</b> $S = |1-1|+|-1-1| = 2$ et $\frac2{\tan(\pi/4)} = 2$.</p>`, rappels: ["o-b-angle-moitie"] }
  ],
  ctx: { "o-b-angle-moitie": R`<p>Pour $z^k-1$ et pour $1-e^{i\pi/n}$.</p>` },
  piege: R`Oublier que $\sin\frac{k\pi}n>0$ pour justifier le module (sinon il faudrait une valeur absolue).`,
  methode: R`Sommes de $\sin$ ou $\cos$ en progression arithmétique : partie imaginaire ou réelle d'une somme géométrique.`
},
{
  id: "o-an-94", subj: "oraux", year: "mp", chap: 4, concours: "ccinp", level: 3, time: "25 min",
  title: "Systèmes de congruences",
  enonce: R`<ol><li>Montrer par l'absurde que le système $x\equiv3\ [10]$, $x\equiv2\ [4]$ n'a pas de solution dans $\mathbb Z$.</li><li><ol style="list-style:lower-alpha"><li>Énoncer le théorème de Bézout dans $\mathbb Z$.</li><li>Soient $a,b\in\mathbb N$ premiers entre eux et $c\in\mathbb Z$. Montrer que $(a\mid c$ et $b\mid c)\iff ab\mid c$.</li></ol></li><li>On considère le système $x\equiv2\ [7]$, $x\equiv3\ [8]$, $x\equiv4\ [9]$.<ol style="list-style:lower-alpha"><li>Trouver une solution particulière $x_0$.</li><li>Résoudre le système dans $\mathbb Z$.</li></ol></li></ol>`,
  decode: { donnees: [R`$7$, $8$, $9$ sont deux à deux premiers entre eux.`], but: R`Compatibilité et résolution de systèmes de congruences.`, cles: {
    par: R`$x\equiv3\ [10]$ donne $x = 3+10k$, impair. $x\equiv2\ [4]$ donne $x = 2+4l$, pair.`,
    m5: R`$2\equiv-5\ [7]$, $3\equiv-5\ [8]$, $4\equiv-5\ [9]$ : la même valeur $-5$ convient pour les trois.` } },
  steps: [
    { q: 1, t: "Parité", h: R`<p>Les deux congruences imposent des parités contradictoires.</p>`, b: R`<p>Supposons qu'il existe $x$ solution.</p><ul><li>$x\equiv3\ [10]$ : $x = 3+10k = 2(5k+1)+1$, donc $x$ est <b>impair</b>.</li><li>$x\equiv2\ [4]$ : $x = 2+4m = 2(1+2m)$, donc $x$ est <b>pair</b>.</li></ul><p>Les <span data-k="par">parités</span> se contredisent : il n'y a pas de solution.</p>` },
    { q: 2, t: "Bézout", h: R`<p>Énonce l'équivalence entre « premiers entre eux » et l'existence d'une combinaison égale à $1$.</p>`, b: R`<p><b>Théorème de Bézout</b> : deux entiers $a$ et $b$ sont premiers entre eux si et seulement s'il existe $u,v\in\mathbb Z$ tels que $au+bv = 1$.</p>` },
    { q: 2, t: "Divisibilité par un produit", h: R`<p>Sens difficile : écris $c = ak$ et utilise le lemme de Gauss.</p>`, b: R`<p><b>Si $ab\mid c$</b> : $c = abm$, donc $a\mid c$ et $b\mid c$.</p><p><b>Réciproquement</b>, si $a\mid c$ et $b\mid c$ : on écrit $c = ak$. Alors $b$ divise $ak$ et $b\wedge a = 1$ : par le lemme de Gauss, $b\mid k$, donc $k = bm$ et $c = abm$. Ainsi $ab\mid c$.</p><p><b>Attention</b> : sans l'hypothèse $a\wedge b = 1$, c'est faux ($4$ et $6$ divisent $12$, mais $24$ ne divise pas $12$).</p>`, rappels: ["o-b-gauss"] },
    { q: 3, t: "Solution particulière", h: R`<p>Chaque résidu vaut « module moins $5$ ».</p>`, b: R`<p><span data-k="m5">Observation</span> : $2 = 7-5$, $3 = 8-5$, $4 = 9-5$. Donc chaque congruence s'écrit $x\equiv-5$ modulo $7$, $8$, $9$. Ainsi $x_0 = -5$ convient.</p><p>Vérification : $-5 = -7+2$, $-5 = -8+3$, $-5 = -9+4$ ✓.</p>` },
    { q: 3, t: "Toutes les solutions", h: R`<p>$x$ solution $\iff$ $7$, $8$, $9$ divisent $x-x_0$ $\iff$ $504\mid x-x_0$.</p>`, b: R`<p>$x$ est solution si et seulement si $x\equiv x_0$ modulo $7$, $8$ et $9$, c'est-à-dire si $7$, $8$ et $9$ divisent $x+5$.</p><p>$7$, $8 = 2^3$, $9 = 3^2$ sont premiers entre eux deux à deux. Par 2.b avec $a = 7$, $b = 8$ : $7\mid x+5$ et $8\mid x+5\iff56\mid x+5$. Puis $56\wedge9 = 1$, et 2.b à nouveau : $\iff56\times9 = 504\mid x+5$.</p><div class="sbox">$$x\equiv-5\ [504],\quad\text{soit}\quad x = 499+504k,\ k\in\mathbb Z.$$</div>` }
  ],
  ctx: { "o-b-gauss": R`<p>Pour $b\mid ak$ avec $a\wedge b = 1$.</p>` },
  piege: R`Appliquer 2.b avec des modules non premiers entre eux (comme $10$ et $4$).`,
  methode: R`Système de congruences : chercher une solution évidente, puis diviser par le produit des modules (premiers entre eux).`
},
{
  id: "o-an-61", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 2, time: "20 min",
  title: "Exponentielle de matrice et norme somme",
  enonce: R`<p>Pour $A = (a_{ij})\in\mathcal M_n(\mathbb C)$, on pose $N(A) = \sum_{i,j}|a_{ij}|$.</p><ol><li>Montrer que $N$ est une norme sur $\mathcal M_n(\mathbb C)$.</li><li>Montrer que $N(AB)\leqslant N(A)N(B)$, puis $N(A^p)\leqslant N(A)^p$ pour $p\geqslant1$.</li><li>Montrer que $\sum\frac{A^p}{p!}$ converge absolument. Converge-t-elle ?</li></ol>`,
  decode: { donnees: [R`$N$ est la norme $\|\ \|_1$ de $\mathbb C^{n^2}$.`], but: R`Une norme sous-multiplicative et l'exponentielle de matrice.`, cles: {
    prod: R`$|(AB)_{ij}|\leqslant\sum_k|a_{ik}||b_{kj}|$, et en sommant sur $i,j$ : $\sum_{i,j,k}|a_{ik}||b_{kj}|\leqslant\Big(\sum_{i,k}|a_{ik}|\Big)\Big(\sum_{k',j}|b_{k'j}|\Big)$.` } },
  steps: [
    { q: 1, t: "Norme", h: R`<p>Somme de modules : les axiomes se vérifient coefficient par coefficient.</p>`, b: R`<p>On vérifie les trois axiomes.</p><ul><li><b>Séparation</b> : $N(A) = 0$ est une somme de nombres $\geqslant0$, nulle seulement si chaque $|a_{ij}| = 0$, donc $A = 0$.</li><li><b>Homogénéité</b> : $N(\lambda A) = \sum|\lambda a_{ij}| = |\lambda|\sum|a_{ij}| = |\lambda|N(A)$.</li><li><b>Inégalité triangulaire</b> : $|a_{ij}+b_{ij}|\leqslant|a_{ij}|+|b_{ij}|$, et on somme sur $i,j$ : $N(A+B)\leqslant N(A)+N(B)$.</li></ul>`, rappels: ["o-a-norme-def"] },
    { q: 2, t: "Sous-multiplicativité", h: R`<p>Inégalité triangulaire sur chaque coefficient du produit, puis on ajoute des termes positifs.</p>`, b: R`<p>Le coefficient $(i,j)$ de $AB$ est $\sum_ka_{ik}b_{kj}$. Par l'inégalité triangulaire :</p>$$N(AB) = \sum_{i,j}\Big|\sum_ka_{ik}b_{kj}\Big|\leqslant\sum_{i,j,k}|a_{ik}||b_{kj}|.$$<p>Développons maintenant $N(A)N(B) = \Big(\sum_{i,k}|a_{ik}|\Big)\Big(\sum_{k',j}|b_{k'j}|\Big) = \sum_{i,k,k',j}|a_{ik}||b_{k'j}|$. <span data-k="prod">Cette somme contient tous les termes $k' = k$ (ceux de la majoration) et d'autres termes positifs</span>. Donc</p><div class="sbox">$$N(AB)\leqslant N(A)N(B).$$</div><p>Par récurrence : $N(A^{p+1}) = N(A^pA)\leqslant N(A^p)N(A)\leqslant N(A)^pN(A)$. Donc $N(A^p)\leqslant N(A)^p$.</p>` },
    { q: 3, t: "Convergence", h: R`<p>$N\big(\frac{A^p}{p!}\big)\leqslant\frac{N(A)^p}{p!}$, série de l'exponentielle.</p>`, b: R`<p>Par homogénéité et Q2 :</p>$$N\Big(\frac{A^p}{p!}\Big) = \frac{N(A^p)}{p!}\leqslant\frac{N(A)^p}{p!}.$$<p>La série réelle $\sum\frac{N(A)^p}{p!}$ converge (vers $e^{N(A)}$). Par comparaison, $\sum N\big(\frac{A^p}{p!}\big)$ converge : la série est absolument convergente. Dans un espace de dimension finie (complet), la convergence absolue entraîne la convergence.</p><div class="sbox">$$e^A = \sum_{p\geqslant0}\frac{A^p}{p!}\ \text{existe},\qquad N(e^A)\leqslant e^{N(A)}.$$</div>`, rappels: ["o-b-norme-mat"] }
  ],
  ctx: { "o-a-norme-def": R`<p>Vérification coefficient par coefficient.</p>`, "o-b-norme-mat": R`<p>$N$ sous-multiplicative et $\dim\mathcal M_n(\mathbb C) = n^2$.</p>` },
  piege: R`Confondre « absolument convergente » et « convergente » : c'est la dimension finie qui fait le lien.`,
  methode: R`Séries de matrices : norme sous-multiplicative, puis convergence absolue.`
},
{
  id: "o-an-74", subj: "oraux", year: "mp", chap: 13, concours: "ccinp", level: 2, time: "25 min",
  title: "Un système différentiel à matrice symétrique",
  enonce: R`<ol><li>Soit $A = \begin{pmatrix}2&0&1\\0&3&0\\1&0&2\end{pmatrix}$.<ol style="list-style:lower-alpha"><li>Justifier sans calcul que $A$ est diagonalisable.</li><li>Déterminer ses valeurs propres et une base de vecteurs propres.</li></ol></li><li>Résoudre le système $x' = 2x+z$, $y' = 3y$, $z' = x+2z$, où $x,y,z$ sont dérivables sur $\mathbb R$.</li></ol>`,
  decode: { donnees: [R`$X' = AX$ avec $X = (x,y,z)^\top$.`], but: R`Diagonaliser $A$ pour découpler le système.`, cles: {
    dec: R`Avec $X = PY$ ($P$ constante inversible) : $Y' = P^{-1}X' = P^{-1}AX = (P^{-1}AP)Y = DY$.` } },
  steps: [
    { q: 1, t: "Symétrique", h: R`<p>Théorème spectral.</p>`, b: R`<p>$A^\top = A$ : $A$ est symétrique réelle. Par le théorème spectral, elle est diagonalisable (et même dans une base orthonormée).</p>`, rappels: ["o-b-spectral"] },
    { q: 1, t: "Valeurs propres", h: R`<p>Développe $\det(XI_3-A)$ selon la deuxième ligne : $y$ est découplé.</p>`, b: R`<p>On développe selon la deuxième ligne, qui ne contient que $X-3$ :</p>$$\chi_A = \begin{vmatrix}X-2&0&-1\\0&X-3&0\\-1&0&X-2\end{vmatrix} = (X-3)\begin{vmatrix}X-2&-1\\-1&X-2\end{vmatrix} = (X-3)\big((X-2)^2-1\big).$$<p>Et $(X-2)^2-1 = (X-2-1)(X-2+1) = (X-3)(X-1)$ :</p><div class="sbox">$$\chi_A = (X-3)^2(X-1),\qquad\operatorname{sp}(A) = \{3,1\}.$$</div>` },
    { q: 1, t: "Vecteurs propres", h: R`<p>Résous $(A-3I_3)X = 0$ puis $(A-I_3)X = 0$.</p>`, b: R`<p><b>$\lambda = 3$</b> : $A-3I_3 = \begin{pmatrix}-1&0&1\\0&0&0\\1&0&-1\end{pmatrix}$. Le système se réduit à $-x+z = 0$ : $z = x$, $y$ libre. $E_3 = \operatorname{Vect}\big((1,0,1),(0,1,0)\big)$, de dimension $2$.</p><p><b>$\lambda = 1$</b> : $A-I_3 = \begin{pmatrix}1&0&1\\0&2&0\\1&0&1\end{pmatrix}$. Le système donne $x+z = 0$ et $2y = 0$ : $E_1 = \operatorname{Vect}(1,0,-1)$.</p><div class="sbox">$$P = \begin{pmatrix}1&0&1\\0&1&0\\1&0&-1\end{pmatrix},\qquad D = \operatorname{diag}(3,3,1),\qquad A = PDP^{-1}.$$</div>` },
    { q: 2, t: "Écrire le système", h: R`<p>Le système s'écrit $X' = AX$ avec $X = (x,y,z)$.</p>`, b: R`<p>Avec $X(t) = \begin{pmatrix}x(t)\\y(t)\\z(t)\end{pmatrix}$, le système s'écrit $X' = AX$ : la première ligne de $A$ donne $2x+0y+1z$, etc.</p>` },
    { q: 2, t: "Découpler", h: R`<p>Pose $Y = P^{-1}X$ : alors $Y' = DY$, et chaque coordonnée vérifie $u' = \lambda u$.</p>`, b: R`<p><span data-k="dec">Changement d'inconnue</span> : $Y = P^{-1}X$, soit $X = PY$. Comme $P$ est constante, $X' = PY'$, et</p>$$PY' = AX = PDP^{-1}PY = PDY\iff Y' = DY.$$<p>$D$ est diagonale : $y_1' = 3y_1$, $y_2' = 3y_2$, $y_3' = y_3$, d'où $y_1 = \alpha e^{3t}$, $y_2 = \beta e^{3t}$, $y_3 = \gamma e^t$. On revient à $X = PY$ (combinaison des colonnes de $P$) :</p><div class="sbox">$$\begin{pmatrix}x\\y\\z\end{pmatrix} = \alpha e^{3t}\begin{pmatrix}1\\0\\1\end{pmatrix}+\beta e^{3t}\begin{pmatrix}0\\1\\0\end{pmatrix}+\gamma e^t\begin{pmatrix}1\\0\\-1\end{pmatrix},\quad\alpha,\beta,\gamma\in\mathbb R.$$</div><p>Vérification : $x = \alpha e^{3t}+\gamma e^t$, $z = \alpha e^{3t}-\gamma e^t$, et $2x+z = 3\alpha e^{3t}+\gamma e^t = x'$ ✓.</p>`, rappels: ["o-b-syst-diff"] }
  ],
  ctx: { "o-b-spectral": R`<p>$A^\top = A$.</p>`, "o-b-syst-diff": R`<p>$P$ constante, $Y' = DY$.</p>` },
  piege: R`Oublier une constante : l'espace des solutions est de dimension $3$.`,
  methode: R`$X' = AX$ avec $A$ diagonalisable : $X = \sum c_ke^{\lambda_kt}V_k$.`
},
{
  id: "o-an-75", subj: "oraux", year: "mp", chap: 13, concours: "ccinp", level: 3, time: "25 min",
  title: "Trigonaliser pour résoudre un système",
  enonce: R`<p>Soit $A = \begin{pmatrix}3&-1\\1&1\end{pmatrix}$.</p><ol><li>Montrer que $A$ n'est pas diagonalisable.</li><li>Soit $f$ l'endomorphisme de $\mathbb R^2$ associé. Trouver une base $(v_1,v_2)$ où sa matrice est $\begin{pmatrix}a&b\\0&c\end{pmatrix}$, en précisant $a,b,c$.</li><li>Résoudre le système $x' = 3x-y$, $y' = x+y$.</li></ol>`,
  decode: { donnees: [R`$\operatorname{tr}A = 4$, $\det A = 4$.`], but: R`Trigonaliser puis résoudre.`, cles: {
    v2: R`On cherche $v_2$ avec $(A-2I)v_2 = v_1$ : $\begin{pmatrix}1&-1\\1&-1\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}1\\1\end{pmatrix}$, soit $x-y = 1$ : $v_2 = (1,0)$.`,
    rem: R`On résout d'abord l'équation du bas ($b' = 2b$), puis on remonte ($a' = 2a+b$).` } },
  steps: [
    { q: 1, t: "Valeur propre double", h: R`<p>$\chi_A = X^2-4X+4 = (X-2)^2$.</p>`, b: R`<p>$\operatorname{tr}A = 4$ et $\det A = 3\times1-(-1)\times1 = 4$, donc $\chi_A = X^2-4X+4 = (X-2)^2$. Seule valeur propre $2$. Si $A$ était diagonalisable, elle serait semblable à $2I_2$, donc égale à $2I_2$. Or $A\neq2I_2$ : non diagonalisable.</p>`, rappels: ["o-b-diag-crit"] },
    { q: 2, t: "Trigonaliser", h: R`<p>Un vecteur propre $v_1$, puis $v_2$ tel que $f(v_2) = 2v_2+v_1$.</p>`, b: R`<p>$A-2I_2 = \begin{pmatrix}1&-1\\1&-1\end{pmatrix}$ : le noyau est $x = y$, donc $v_1 = (1,1)$. <span data-k="v2">On cherche $v_2$ avec $(A-2I_2)v_2 = v_1$</span> : $x-y = 1$, par exemple $v_2 = (1,0)$. Vérification : $Av_2 = (3,1) = 2(1,0)+(1,1) = 2v_2+v_1$ ✓.</p><div class="sbox">$$\operatorname{Mat}_{(v_1,v_2)}(f) = \begin{pmatrix}2&1\\0&2\end{pmatrix},\quad a = c = 2,\ b = 1.$$</div>`, rappels: ["o-b-trig"] },
    { q: 3, t: "Résoudre", h: R`<p>Système triangulaire : <span data-k="rem">de bas en haut</span>.</p>`, b: R`<p>Avec $(x,y) = \alpha(t)v_1+\beta(t)v_2$ : $\beta' = 2\beta$, $\alpha' = 2\alpha+\beta$. Donc $\beta = \mu e^{2t}$, $\alpha = (\lambda+\mu t)e^{2t}$, et</p><div class="sbox">$$\begin{cases}x(t) = (\lambda+\mu+\mu t)\,e^{2t}\\y(t) = (\lambda+\mu t)\,e^{2t}\end{cases}\qquad\lambda,\mu\in\mathbb R.$$</div><p><b>Contrôle :</b> $x-y = \mu e^{2t}$ et $y' = x+y$ donne bien $(\mu+2\lambda+2\mu t)e^{2t}$ des deux côtés.</p>`, rappels: ["o-b-syst-diff"] }
  ],
  ctx: { "o-b-diag-crit": R`<p>Une seule valeur propre et $A\neq2I_2$.</p>`, "o-b-trig": R`<p>$\lambda = 2$, $v_1 = (1,1)$, $v_2 = (1,0)$.</p>`, "o-b-syst-diff": R`<p>Avec $T$ triangulaire : résolution de bas en haut.</p>` },
  piege: R`Résoudre $\alpha' = 2\alpha+\beta$ avant de connaître $\beta$.`,
  methode: R`Matrice non diagonalisable $2\times2$ : trigonaliser, puis résoudre le système triangulaire de bas en haut.`
}
]);
})();

/* ===== Probabilités (chap. 16) et variables aléatoires (chap. 17) ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1, BARS } = window.__LA;
const C = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return r; };

LEMME.rappels({
  "o-c-binom": { t: "Loi binomiale", b: R`<div class="sbox">$$X\sim\mathcal B(n,p)\iff P(X = k) = \binom nkp^k(1-p)^{n-k},\qquad E(X) = np,\quad V(X) = np(1-p).$$</div><p>C'est le nombre de succès dans $n$ épreuves de Bernoulli indépendantes de même paramètre $p$.</p>` },
  "o-c-affine": { t: "Espérance et variance d'une transformation affine", b: R`<div class="sbox">$$E(aX+b) = aE(X)+b,\qquad V(aX+b) = a^2V(X).$$</div>` },
  "o-c-hyper": { t: "Tirages simultanés", b: R`<p>Tirer $n$ objets simultanément parmi $N$ : les $\binom Nn$ parties sont équiprobables. Avec $m$ objets « gagnants » :</p><div class="sbox">$$P(X = k) = \frac{\binom mk\binom{N-m}{n-k}}{\binom Nn}.$$</div>` },
  "o-c-gen": { t: "Fonction génératrice", b: R`<div class="sbox">$$G_X(t) = E(t^X) = \sum_nP(X = n)t^n,\qquad G_{X+Y} = G_XG_Y\ \text{si}\ X,Y\ \text{indépendantes}.$$</div><p>La loi est déterminée par $G_X$ : $P(X = n) = \frac{G_X^{(n)}(0)}{n!}$.</p>` },
  "o-c-transfert": { t: "Formule de transfert", b: R`<div class="sbox">$$E\big(f(X,Y)\big) = \sum_{(x,y)}f(x,y)\,P(X = x,Y = y),$$</div><p>sous réserve de convergence absolue de la série (automatique si $f\geqslant0$ et la somme est finie).</p>` },
  "o-c-marginale": { t: "Lois marginales", b: R`<div class="sbox">$$P(X = x) = \sum_yP(X = x,Y = y),\qquad P(Y = y) = \sum_xP(X = x,Y = y).$$</div>` },
  "o-c-indep": { t: "Indépendance de deux variables", b: R`<div class="sbox">$$X,Y\ \text{indépendantes}\iff\forall x,y,\ P(X = x,Y = y) = P(X = x)P(Y = y).$$</div><p>Si elles le sont : $E(XY) = E(X)E(Y)$, $V(X+Y) = V(X)+V(Y)$, $E(f(X)g(Y)) = E(f(X))E(g(Y))$.</p>` },
  "o-c-totales": { t: "Probabilités totales", b: R`<p>Si $(A_i)$ est un système complet d'événements (de probabilités non nulles) :</p><div class="sbox">$$P(B) = \sum_iP(B\mid A_i)P(A_i).$$</div>` },
  "o-c-bayes": { t: "Formule de Bayes", b: R`<div class="sbox">$$P(A_j\mid B) = \frac{P(B\mid A_j)P(A_j)}{\sum_iP(B\mid A_i)P(A_i)}.$$</div>` },
  "o-c-bt": { t: "Inégalité de Bienaymé-Tchebychev", b: R`<div class="sbox">$$P\big(|X-E(X)|\geqslant a\big)\leqslant\frac{V(X)}{a^2}.$$</div><p>Pour une moyenne de $n$ variables indépendantes de même loi : $V\big(\frac{S_n}n\big) = \frac{V(X_1)}n$.</p>` },
  "o-c-geo": { t: "Loi géométrique", b: R`<div class="sbox">$$X\sim\mathcal G(p) : P(X = k) = p(1-p)^{k-1}\ (k\geqslant1),\quad P(X>n) = (1-p)^n,\quad E(X) = \frac1p,\quad V(X) = \frac{1-p}{p^2}.$$</div>` },
  "o-c-poisson": { t: "Loi de Poisson", b: R`<div class="sbox">$$P(X = k) = e^{-\lambda}\frac{\lambda^k}{k!},\qquad E(X) = V(X) = \lambda.$$</div><p>La somme de deux Poisson indépendantes de paramètres $\lambda_1,\lambda_2$ est une Poisson de paramètre $\lambda_1+\lambda_2$.</p>` },
  "o-c-conv": { t: "Loi d'une somme de variables à valeurs entières", b: R`<div class="sbox">$$P(X+Y = n) = \sum_{k=0}^nP(X = k)\,P(Y = n-k)\quad(X,Y\ \text{indépendantes}).$$</div>` },
  "o-c-moments": { t: "Existence d'une espérance, d'une variance", b: R`<div class="sbox">$$E(X)\ \text{existe}\iff\sum n\,P(X = n)<\infty,\qquad V(X)\ \text{existe}\iff\sum n^2P(X = n)<\infty.$$</div>` },
  "o-c-indicatrices": { t: "Espérance par indicatrices", b: R`<p>Si $X = \sum_{i}\mathbb 1_{A_i}$ (nombre d'événements réalisés), alors par linéarité :</p><div class="sbox">$$E(X) = \sum_iP(A_i).$$</div><p>Aucune indépendance n'est nécessaire.</p>` },
  "o-c-surj": { t: "Nombre de surjections", b: R`<p>Nombre de façons de ranger $n$ boules numérotées dans $k$ boîtes sans en laisser de vide :</p><div class="sbox">$$S(n,2) = 2^n-2,\qquad S(n,3) = 3^n-3\cdot2^n+3.$$</div><p>(Formule du crible : on retire les rangements qui laissent une boîte vide, on rajoute ceux qui en laissent deux...)</p>` }
});

LEMME.exercises([
{
  id: "o-an-95", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 2, time: "20 min",
  title: "Gains et tirages dans une urne",
  enonce: R`<p>Une urne contient $3$ boules blanches et $7$ noires. Une boule blanche rapporte $3$ points, une noire en fait perdre $1$. On note $X$ le nombre de blanches tirées et $Y$ le nombre de points.</p><ol><li>On tire successivement $4$ boules <span data-k="remise">avec remise</span>.<ol style="list-style:lower-alpha"><li>Loi, espérance et variance de $X$.</li><li>Loi, espérance et variance de $Y$.</li></ol></li><li>On tire $4$ boules simultanément.<ol style="list-style:lower-alpha"><li>Loi de $X$.</li><li>Loi de $Y$.</li></ol></li></ol>`,
  decode: { donnees: [R`$3$ blanches, $7$ noires ; $+3$ ou $-1$ point.`], but: R`Lois binomiale et hypergéométrique, puis une transformation affine.`, cles: {
    remise: R`Avec remise : chaque tirage est identique et indépendant des autres, $P(\text{blanche}) = \frac3{10}$ à chaque fois.`,
    y: R`$X$ blanches et $4-X$ noires : $Y = 3X-(4-X) = 4X-4$.` } },
  steps: [
    { q: 1, t: "Loi binomiale", h: R`<p>Quatre épreuves de Bernoulli indépendantes de même paramètre : on compte les succès.</p>`, b: R`<p>$X\sim\mathcal B\big(4,\frac3{10}\big)$ : $P(X = k) = \binom4k(0{,}3)^k(0{,}7)^{4-k}$, $E(X) = np = 4\times0{,}3 = 1{,}2$, $V(X) = np(1-p) = 4\times0{,}3\times0{,}7 = 0{,}84$.</p>` + BARS([0, 1, 2, 3, 4].map(k => C(4, k) * 0.3 ** k * 0.7 ** (4 - k)), ["0", "1", "2", "3", "4"], R`Loi de $X\sim\mathcal B(4;0{,}3)$.`, "Loi binomiale"), rappels: ["o-c-binom"] },
    { q: 1, t: "Loi de Y", h: R`<p>$Y$ est une fonction affine de $X$.</p>`, b: R`<p>Sur $4$ boules, $X$ sont blanches ($+3$ chacune) et $4-X$ noires ($-1$ chacune) : $Y = 3X-(4-X)$, soit <span data-k="y">$Y = 4X-4$</span>, à valeurs dans $\{-4,0,4,8,12\}$ avec $P(Y = 4k-4) = P(X = k)$.</p><div class="sbox">$$E(Y) = 4E(X)-4 = 4\cdot1{,}2-4 = 0{,}8,\qquad V(Y) = 4^2V(X) = 16\cdot0{,}84 = 13{,}44.$$</div>`, rappels: ["o-c-affine"] },
    { q: 2, t: "Tirage simultané", h: R`<p>Les $\binom{10}4 = 210$ mains sont équiprobables : loi hypergéométrique.</p>`, b: R`$$P(X = k) = \frac{\binom3k\binom7{4-k}}{210}:\quad P(X = 0) = \frac16,\ P(X = 1) = \frac12,\ P(X = 2) = \frac3{10},\ P(X = 3) = \frac1{30}.$$<p>(Contrôle : $35+105+63+7 = 210$.) Et $Y = 4X-4$ prend les valeurs $-4,0,4,8$ avec ces probabilités.</p>`, rappels: ["o-c-hyper"] }
  ],
  ctx: { "o-c-binom": R`<p>$n = 4$, $p = 0{,}3$.</p>`, "o-c-affine": R`<p>$a = 4$, $b = -4$.</p>`, "o-c-hyper": R`<p>$N = 10$, $m = 3$, $n = 4$.</p>` },
  piege: R`Oublier que $X\leqslant3$ dans le tirage simultané (il n'y a que $3$ blanches).`,
  methode: R`Avec remise : binomiale. Simultané : hypergéométrique. Points : transformation affine.`
},
{
  id: "o-an-96", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 3, time: "25 min",
  title: "Fonctions génératrices et somme de tirages",
  enonce: R`<p>Soit $X$ à valeurs dans $\mathbb N$, de loi $p_n = P(X = n)$, et $G_X(t) = \sum p_nt^n$.</p><ol><li>Montrer que $G_X$ est définie au moins sur $]-1,1[$.</li><li>Soient $X_1,X_2$ indépendantes à valeurs dans $\mathbb N$ et $S = X_1+X_2$. Montrer que $G_S = G_{X_1}G_{X_2}$ sur $]-1,1[$ :<ol style="list-style:lower-alpha"><li>avec le produit de Cauchy ;</li><li>avec la seule définition $G_X(t) = E(t^X)$.</li></ol></li><li>Un sac contient $9$ boules : une numérotée $0$, quatre numérotées $1$, quatre numérotées $2$. On fait $n$ tirages avec remise et on note $S_n$ la somme des numéros. Déterminer $G_{S_n}$, puis la loi de $S_n$.</li></ol>`,
  decode: { donnees: [R`$\sum p_n = 1$.`], but: R`Utiliser les fonctions génératrices pour trouver une loi.`, cles: {
    carre: R`$\frac{1+4t+4t^2}9 = \Big(\frac{1+2t}3\Big)^2$.` } },
  steps: [
    { q: 1, t: "Rayon", h: R`<p>Les coefficients sont dans $[0,1]$ et de somme $1$.</p>`, b: R`<p>Pour $|t|\leqslant1$ : $|p_nt^n| = p_n|t|^n\leqslant p_n$. Or $\sum p_n = P(X\in\mathbb N) = 1$ converge. Par comparaison, $\sum p_nt^n$ converge absolument pour tout $t\in[-1,1]$. $G_X$ est donc définie sur $[-1,1]$, et a fortiori sur $]-1,1[$ : son rayon est $\geqslant1$.</p>`, rappels: ["o-a-rayon-outils"] },
    { q: 2, t: "Par Cauchy", h: R`<p>La loi de la somme est une convolution, c'est exactement le coefficient du produit de Cauchy.</p>`, b: R`<p><b>Loi de $S$</b> : $(S = n) = \bigcup_{k=0}^n(X_1 = k,X_2 = n-k)$, réunion disjointe. Par indépendance :</p>$$P(S = n) = \sum_{k=0}^nP(X_1 = k)P(X_2 = n-k).$$<p><b>Produit de Cauchy</b> : pour $|t|< 1$, les deux séries convergent absolument, donc</p>$$G_{X_1}(t)G_{X_2}(t) = \sum_{n\geqslant0}\Big(\sum_{k=0}^nP(X_1 = k)P(X_2 = n-k)\Big)t^n = \sum_nP(S = n)t^n = G_S(t).$$`, rappels: ["o-c-conv", "o-a-cauchy-se"] },
    { q: 2, t: "Par l'espérance", h: R`<p>$t^{X_1}$ et $t^{X_2}$ sont indépendantes.</p>`, b: R`<p>Par définition, $G_S(t) = E(t^S) = E(t^{X_1+X_2}) = E(t^{X_1}t^{X_2})$. Les variables $t^{X_1}$ et $t^{X_2}$ sont des fonctions de $X_1$ et $X_2$, donc indépendantes, et bornées par $1$ : l'espérance du produit est le produit des espérances.</p><div class="sbox">$$G_S(t) = E(t^{X_1})E(t^{X_2}) = G_{X_1}(t)G_{X_2}(t).$$</div>`, rappels: ["o-c-indep"] },
    { q: 3, t: "Un tirage", h: R`<p>Écris $G$ pour un seul tirage, et reconnais un carré.</p>`, b: R`<p>Un tirage donne $0$ avec probabilité $\frac19$, $1$ avec $\frac49$, $2$ avec $\frac49$. Donc</p>$$G_{X_1}(t) = \frac19+\frac49t+\frac49t^2 = \frac{1+4t+4t^2}9 = \frac{(1+2t)^2}{9}.$$<p>C'est <span data-k="carre">un carré</span> : $G_{X_1}(t) = \Big(\frac{1+2t}3\Big)^2 = \Big(\frac13+\frac23t\Big)^2$.</p><p>Les $n$ tirages (avec remise) sont indépendants et de même loi. Par Q2 répétée $n-1$ fois :</p><div class="sbox">$$G_{S_n}(t) = G_{X_1}(t)^n = \Big(\frac13+\frac23t\Big)^{2n}.$$</div>` },
    { q: 3, t: "Identifier la loi", h: R`<p>Développe par le binôme ; la loi est déterminée par les coefficients de $G$.</p>`, b: R`<p>Par la formule du binôme :</p>$$\Big(\frac13+\frac23t\Big)^{2n} = \sum_{k=0}^{2n}\binom{2n}k\Big(\frac23\Big)^k\Big(\frac13\Big)^{2n-k}t^k.$$<p>Par unicité des coefficients d'une série entière, $P(S_n = k)$ est le coefficient de $t^k$ :</p><div class="sbox">$$P(S_n = k) = \binom{2n}k\Big(\frac23\Big)^k\Big(\frac13\Big)^{2n-k} : \quad S_n\sim\mathcal B\Big(2n,\frac23\Big).$$</div><p><b>Intuition :</b> chaque tirage revient à deux pièces indépendantes qui donnent chacune « $1$ » avec probabilité $\frac23$ : $P(0) = \frac19$, $P(1) = 2\cdot\frac23\cdot\frac13 = \frac49$, $P(2) = \frac49$ ✓.</p>`, rappels: ["o-c-gen", "o-c-binom"] }
  ],
  ctx: { "o-a-rayon-outils": R`<p>$(p_n)$ bornée : $R\geqslant1$.</p>`, "o-c-conv": R`<p>Pour $S = X_1+X_2$.</p>`, "o-a-cauchy-se": R`<p>$c_n = \sum p_kq_{n-k}$.</p>`, "o-c-indep": R`<p>Pour $t^{X_1}$ et $t^{X_2}$.</p>`, "o-c-gen": R`<p>$G_{S_n} = G_{X_1}^n$.</p>`, "o-c-binom": R`<p>$G = (q+pt)^N$.</p>` },
  piege: R`Oublier de citer l'unicité des coefficients pour conclure sur la loi.`,
  methode: R`Somme de variables indépendantes : produit des fonctions génératrices, puis reconnaître une loi connue.`
},
{
  id: "o-an-97", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 3, time: "25 min",
  title: "Un couple de lois de type Poisson",
  enonce: R`<p>Soit $(X,Y)$ à valeurs dans $\mathbb N^2$ avec $P\big((X,Y) = (j,k)\big) = c\,\dfrac{j+k}{3^{j+k}\,j!\,k!}$.</p><ol><li>Déterminer $c$.</li><li>Déterminer les lois marginales. $X$ et $Y$ sont-elles indépendantes ?</li><li>Montrer que $E(3^{X+Y})$ existe et la calculer.</li></ol>`,
  decode: { donnees: [R`Une loi de couple symétrique en $j$, $k$.`], but: R`Constante, marginales, indépendance, une espérance.`, cles: {
    som: R`$\sum_k\frac{(j+k)a^k}{k!} = j\,e^a+a\,e^a$ (car $\sum_kk\frac{a^k}{k!} = ae^a$).` } },
  steps: [
    { q: 1, t: "La constante", h: R`<p>On sépare $j+k$ en deux sommes, chacune se factorise en séries exponentielles.</p>`, b: R`<p>Il faut $\sum_{j,k}P(X = j,Y = k) = 1$. On sépare le numérateur $j+k$ ; par symétrie les deux sommes sont égales :</p>$$\sum_{j,k}\frac{j+k}{3^{j+k}j!k!} = 2\sum_{j,k}\frac{j}{3^jj!}\cdot\frac1{3^kk!} = 2\Big(\sum_j\frac{j(1/3)^j}{j!}\Big)\Big(\sum_k\frac{(1/3)^k}{k!}\Big).$$<p>Avec $\sum_k\frac{a^k}{k!} = e^a$ et $\sum_j\frac{ja^j}{j!} = a\sum_{j\geqslant1}\frac{a^{j-1}}{(j-1)!} = ae^a$, pour $a = \frac13$ :</p>$$2\cdot\frac13e^{1/3}\cdot e^{1/3} = \frac23e^{2/3}.$$<div class="sbox">$$c = \frac32e^{-2/3}.$$</div>` },
    { q: 2, t: "Marginale de X", h: R`<p>On somme sur $k$ à $j$ fixé, en séparant $j+k$.</p>`, b: R`<p>À $j$ fixé, on <span data-k="som">somme</span> sur $k$, avec $a = \frac13$ :</p>$$P(X = j) = c\frac{a^j}{j!}\sum_k\frac{(j+k)a^k}{k!} = c\frac{a^j}{j!}\big(je^a+ae^a\big) = c\,e^{1/3}\frac{(1/3)^j}{j!}\Big(j+\frac13\Big).$$<p>Avec $c\,e^{1/3} = \frac32e^{-1/3}$ et $\frac32\big(j+\frac13\big) = \frac{3j+1}2$ :</p><div class="sbox">$$P(X = j) = \frac{(3j+1)\,e^{-1/3}}{2\cdot3^j\,j!},$$</div><p>et $Y$ a la même loi, par symétrie de la formule en $j$ et $k$.</p>`, rappels: ["o-c-marginale"] },
    { q: 2, t: "Indépendance", h: R`<p>Un seul couple suffit : $(0,0)$ a probabilité nulle.</p>`, b: R`<p>$P(X = 0,Y = 0) = c\cdot\frac0{1} = 0$, mais $P(X = 0) = P(Y = 0) = \frac{e^{-1/3}}2$, donc $P(X = 0)P(Y = 0) = \frac{e^{-2/3}}4>0$. $X$ et $Y$ ne sont <b>pas indépendantes</b>.</p>`, rappels: ["o-c-indep"] },
    { q: 3, t: "Espérance", h: R`<p>Formule de transfert : le facteur $3^{j+k}$ simplifie le dénominateur.</p>`, b: R`<p>Par la formule de transfert (série à termes positifs) :</p>$$E(3^{X+Y}) = \sum_{j,k}3^{j+k}\cdot c\frac{j+k}{3^{j+k}j!k!} = c\sum_{j,k}\frac{j+k}{j!k!}.$$<p>C'est le calcul de Q1 avec $a = 1$ : $2\cdot1\cdot e\cdot e = 2e^2$. La série converge, donc l'espérance existe, et</p><div class="sbox">$$E(3^{X+Y}) = \frac32e^{-2/3}\times2e^2 = 3e^{4/3}.$$</div>`, rappels: ["o-c-transfert"] }
  ],
  ctx: { "o-c-marginale": R`<p>Somme sur $k$.</p>`, "o-c-indep": R`<p>Contre-exemple en $(0,0)$.</p>`, "o-c-transfert": R`<p>$f(j,k) = 3^{j+k}\geqslant0$.</p>` },
  piege: R`Conclure à l'indépendance parce que les marginales ont la même forme : il faut tester le produit.`,
  methode: R`Lois de couple avec factorielles : séparer et reconnaître des séries exponentielles.`
},
{
  id: "o-an-98", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 3, time: "25 min",
  title: "Deux séries d'appels",
  enonce: R`<p>On appelle $n$ correspondants distincts ; chaque appel aboutit avec probabilité $p\in\,]0,1[$, indépendamment. Soit $X$ le nombre de correspondants joints.</p><ol><li>Loi de $X$ ?</li><li>On rappelle les $n-X$ autres ; chaque nouvel appel aboutit avec probabilité $r\in\,]0,1[$, indépendamment. Soit $Y$ le nombre de personnes jointes au second tour.<ol style="list-style:lower-alpha"><li>Pour $i\in[\![0,n]\!]$, déterminer $P(Y = k\mid X = i)$.</li><li>Montrer que $Z = X+Y$ suit une loi binomiale. On admet $\binom ni\binom{n-i}{k-i} = \binom nk\binom ki$.</li><li>Calculer $E(Z)$ et $V(Z)$.</li></ol></li></ol>`,
  decode: { donnees: [R`$q = 1-p$.`], but: R`La loi du nombre total de personnes jointes.`, cles: {
    s: R`Chaque correspondant est joint au total avec probabilité $s = p+(1-p)r$ : au premier tour, ou bien raté puis joint au second.` } },
  steps: [
    { q: 1, t: "Loi de X", h: R`<p>$n$ épreuves indépendantes de même paramètre.</p>`, b: R`<p>Chaque appel est une épreuve de Bernoulli de paramètre $p$ (succès = joindre), et les $n$ appels sont indépendants. $X$ compte les succès :</p><div class="sbox">$$X\sim\mathcal B(n,p),\qquad P(X = i) = \binom nip^iq^{n-i},\ q = 1-p.$$</div>`, rappels: ["o-c-binom"] },
    { q: 2, t: "Loi conditionnelle", h: R`<p>Sachant $X = i$, il reste $n-i$ appels indépendants de paramètre $r$.</p>`, b: R`<p>Sachant $X = i$, on rappelle les $n-i$ correspondants non joints. Chacun est joint avec probabilité $r$, indépendamment. Sachant $X = i$, $Y$ suit donc $\mathcal B(n-i,r)$ :</p><div class="sbox">$$P(Y = k\mid X = i) = \binom{n-i}kr^k(1-r)^{n-i-k}\quad(0\leqslant k\leqslant n-i),\ 0\ \text{sinon}.$$</div>` },
    { q: 2, t: "Probabilités totales", h: R`<p>$(Z = k) = \bigcup_i(X = i,Y = k-i)$. Utilise $P(X = i,Y = k-i) = P(X = i)P(Y = k-i\mid X = i)$.</p>`, b: R`<p>$Z = k$ signifie $X = i$ et $Y = k-i$ pour un $i$ entre $0$ et $k$. Par la formule des probabilités totales :</p>$$P(Z = k) = \sum_{i=0}^kP(X = i)\,P(Y = k-i\mid X = i) = \sum_{i=0}^k\binom nip^iq^{n-i}\binom{n-i}{k-i}r^{k-i}(1-r)^{n-k}.$$<p>(On a $(n-i)-(k-i) = n-k$ dans l'exposant de $1-r$.)</p>`, rappels: ["o-c-totales"] },
    { q: 2, t: "Simplifier", h: R`<p>Remplace $\binom ni\binom{n-i}{k-i}$ par $\binom nk\binom ki$, sors ce qui ne dépend pas de $i$, et reconnais un binôme.</p>`, b: R`<p>Avec la formule admise, et en écrivant $q^{n-i} = q^{n-k}q^{k-i}$ :</p>$$P(Z = k) = \binom nkq^{n-k}(1-r)^{n-k}\sum_{i=0}^k\binom kip^i(qr)^{k-i} = \binom nk\big(q(1-r)\big)^{n-k}(p+qr)^k$$<p>par la formule du binôme. Posons $s = p+qr$. Alors</p>$$1-s = 1-p-qr = q-qr = q(1-r).$$<div class="sbox">$$P(Z = k) = \binom nks^k(1-s)^{n-k} : \quad Z\sim\mathcal B(n,s),\ s = p+(1-p)r.$$</div><p><span data-k="s">Interprétation</span> : chaque correspondant est joint au premier tour ($p$), ou raté puis joint au second ($(1-p)r$), indépendamment des autres.</p>` },
    { q: 2, t: "Moments", h: R`<p>Ceux de la binomiale.</p>`, b: R`<p>Pour $\mathcal B(n,s)$ : $E = ns$ et $V = ns(1-s)$.</p><div class="sbox">$$E(Z) = n\big(p+(1-p)r\big),\qquad V(Z) = n\big(p+(1-p)r\big)(1-p)(1-r).$$</div>` }
  ],
  ctx: { "o-c-binom": R`<p>Pour $X$, puis pour $Z$.</p>`, "o-c-totales": R`<p>Système complet $(X = i)_{0\leqslant i\leqslant n}$.</p>` },
  piege: R`Oublier que $P(Y = k\mid X = i) = 0$ si $k>n-i$, d'où la somme limitée à $i\leqslant k$.`,
  methode: R`Loi d'une somme avec conditionnement : probabilités totales, puis simplifier les produits de binomiaux.`
},
{
  id: "o-an-99", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 2, time: "20 min",
  title: "Combien de tirages pour estimer une proportion ?",
  enonce: R`<ol><li>Rappeler l'inégalité de Bienaymé-Tchebychev.</li><li>Soit $(Y_n)$ une suite de variables indépendantes de même loi, de variance finie, et $S_n = \sum_{k=1}^nY_k$. Montrer que pour tout $a>0$ : $P\Big(\Big|\frac{S_n}n-E(Y_1)\Big|\geqslant a\Big)\leqslant\dfrac{V(Y_1)}{na^2}$.</li><li>On tire avec remise dans une urne de $1$ boule rouge et $3$ noires. À partir de combien de tirages peut-on garantir, avec probabilité au moins $90\,\%$, que la proportion de rouges est strictement entre $0{,}2$ et $0{,}3$ ?</li></ol>`,
  decode: { donnees: [R`$p = \frac14$, $V = \frac14\cdot\frac34 = \frac3{16}$.`], but: R`Loi faible des grands nombres quantitative.`, cles: {
    comp: R`« Entre $0{,}2$ et $0{,}3$ » $\iff\big|\frac{S_n}n-\frac14\big|<0{,}05$. Le contraire est $\big|\frac{S_n}n-\frac14\big|\geqslant0{,}05$.` } },
  steps: [
    { q: 1, t: "L'inégalité", h: R`<p>À savoir.</p>`, b: R`<p><b>Bienaymé-Tchebychev</b> : si $X$ admet une variance, pour tout $a>0$,</p><div class="sbox">$$P(|X-E(X)|\geqslant a)\leqslant\frac{V(X)}{a^2}.$$</div>`, rappels: ["o-c-bt"] },
    { q: 2, t: "Moyenne empirique", h: R`<p>Espérance et variance de $\frac{S_n}n$ : linéarité et indépendance.</p>`, b: R`<p>On note $m = E(Y_1)$, $\sigma^2 = V(Y_1)$. Par linéarité : $E(S_n) = nm$, donc $E\big(\frac{S_n}n\big) = m$.</p><p>Par indépendance, les variances s'ajoutent : $V(S_n) = n\sigma^2$. Et $V(cX) = c^2V(X)$, donc</p>$$V\Big(\frac{S_n}n\Big) = \frac1{n^2}\cdot n\sigma^2 = \frac{\sigma^2}n.$$<p>On applique Q1 à $X = \frac{S_n}n$ :</p><div class="sbox">$$P\Big(\Big|\frac{S_n}n-E(Y_1)\Big|\geqslant a\Big)\leqslant\frac{V(Y_1)}{na^2}.$$</div>`, rappels: ["o-c-indep"] },
    { q: 3, t: "Modéliser", h: R`<p>$Y_i$ indicatrice « rouge au $i$-ième tirage », Bernoulli de paramètre $\frac14$.</p>`, b: R`<p>On pose $Y_i = 1$ si le $i$-ième tirage est rouge, $0$ sinon. Les tirages sont avec remise : les $Y_i$ sont indépendantes, de loi de Bernoulli de paramètre $\frac14$ ($1$ rouge sur $4$ boules). Donc</p>$$E(Y_1) = \frac14,\qquad V(Y_1) = \frac14\times\frac34 = \frac3{16}.$$<p>$\frac{S_n}n$ est la proportion de rouges. « Strictement entre $0{,}2$ et $0{,}3$ » signifie $\big|\frac{S_n}n-0{,}25\big|< 0{,}05$.</p>` },
    { q: 3, t: "Trouver n", h: R`<p>Passe à l'<span data-k="comp">événement contraire</span> et applique Q2 avec $a = 0{,}05$.</p>`, b: R`<p>On veut $P\big(\big|\frac{S_n}n-\frac14\big|< 0{,}05\big)\geqslant0{,}9$, c'est-à-dire, avec l'<span data-k="comp">événement contraire</span>, $P\big(\big|\frac{S_n}n-\frac14\big|\geqslant0{,}05\big)\leqslant0{,}1$. Par Q2 avec $a = 0{,}05$, $a^2 = 0{,}0025$ :</p>$$P\Big(\Big|\frac{S_n}n-\frac14\Big|\geqslant0{,}05\Big)\leqslant\frac{3/16}{0{,}0025\,n} = \frac{0{,}1875}{0{,}0025\,n} = \frac{75}n.$$<p>Il suffit donc que $\frac{75}n\leqslant0{,}1$, c'est-à-dire $n\geqslant750$.</p><div class="sbox">$$n\geqslant750.$$</div><p>C'est une condition suffisante : la borne de Bienaymé-Tchebychev est grossière, et en réalité beaucoup moins de tirages suffisent.</p>` }
  ],
  ctx: { "o-c-bt": R`<p>Appliquée à $\frac{S_n}n$.</p>`, "o-c-indep": R`<p>$V(S_n) = \sum V(Y_k)$.</p>` },
  piege: R`Oublier de passer à l'événement contraire : l'inégalité majore la probabilité de <b>s'écarter</b>.`,
  methode: R`Taille d'échantillon : $\frac{V}{na^2}\leqslant\alpha$.`
},
{
  id: "o-an-100", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 2, time: "25 min",
  title: "Une loi avec espérance mais sans variance",
  enonce: R`<p>Soit $\lambda>0$ et $X$ à valeurs dans $\mathbb N$ avec $P(X = n) = \dfrac\lambda{(n+1)(n+2)(n+3)}$.</p><ol><li>Décomposer en éléments simples $R(x) = \dfrac1{(x+1)(x+2)(x+3)}$.</li><li>Calculer $\lambda$.</li><li>Montrer que $X$ a une espérance et la calculer.</li><li>$X$ a-t-elle une variance ?</li></ol>`,
  decode: { donnees: [R`Une loi définie par une fraction rationnelle.`], but: R`Normaliser, puis étudier les moments.`, cles: {
    tel: R`$\frac1{(n+1)(n+2)}-\frac1{(n+2)(n+3)} = \frac{2}{(n+1)(n+2)(n+3)}$ : la somme télescope.` } },
  steps: [
    { q: 1, t: "Éléments simples", h: R`<p>Trois pôles simples : écris $R = \frac a{x+1}+\frac b{x+2}+\frac c{x+3}$, multiplie par chaque facteur et évalue au pôle.</p>`, b: R`<p>Les pôles $-1,-2,-3$ sont simples, donc</p>$$R(x) = \frac a{x+1}+\frac b{x+2}+\frac c{x+3}.$$<ul><li><b>$a$</b> : on multiplie par $x+1$ et on pose $x = -1$ : $a = \frac1{(-1+2)(-1+3)} = \frac1{1\times2} = \frac12$.</li><li><b>$b$</b> : on multiplie par $x+2$, $x = -2$ : $b = \frac1{(-2+1)(-2+3)} = \frac1{(-1)\times1} = -1$.</li><li><b>$c$</b> : on multiplie par $x+3$, $x = -3$ : $c = \frac1{(-3+1)(-3+2)} = \frac1{(-2)(-1)} = \frac12$.</li></ul><div class="sbox">$$R(x) = \frac1{2(x+1)}-\frac1{x+2}+\frac1{2(x+3)}.$$</div><p><b>Contrôle</b> en $x = 0$ : $\frac12-\frac12+\frac16 = \frac16 = \frac1{1\cdot2\cdot3}$ ✓.</p>` },
    { q: 2, t: "Normalisation", h: R`<p>Écris $\frac1{(n+1)(n+2)(n+3)} = \frac12\Big(\frac1{(n+1)(n+2)}-\frac1{(n+2)(n+3)}\Big)$ : <span data-k="tel">télescopage</span>.</p>`, b: R`<p>Il faut $\sum_nP(X = n) = 1$. On cherche une écriture télescopique. On vérifie, en réduisant au même dénominateur :</p>$$\frac1{(n+1)(n+2)}-\frac1{(n+2)(n+3)} = \frac{(n+3)-(n+1)}{(n+1)(n+2)(n+3)} = \frac2{(n+1)(n+2)(n+3)}.$$<p>Donc, avec $u_n = \frac1{(n+1)(n+2)}$ :</p>$$\sum_{n=0}^N\frac1{(n+1)(n+2)(n+3)} = \frac12\sum_{n=0}^N(u_n-u_{n+1}) = \frac12(u_0-u_{N+1})\xrightarrow[N\to\infty]{}\frac12u_0 = \frac12\times\frac12 = \frac14.$$<p>La condition $\lambda\times\frac14 = 1$ donne :</p><div class="sbox">$$\lambda = 4.$$</div>`, rappels: ["o-telescopage"] },
    { q: 3, t: "L'espérance existe", h: R`<p>$nP(X = n)$ se comporte comme $\frac4{n^2}$ : série de Riemann.</p>`, b: R`<p>$X\geqslant0$, donc $E(X)$ existe si et seulement si $\sum nP(X = n)$ converge. Pour $n\to\infty$ :</p>$$nP(X = n) = \frac{4n}{(n+1)(n+2)(n+3)}\sim\frac{4n}{n^3} = \frac4{n^2}.$$<p>$\sum\frac1{n^2}$ converge (Riemann, $2>1$) : par comparaison de séries à termes positifs, $E(X)$ existe.</p>`, rappels: ["o-c-moments"] },
    { q: 3, t: "Calcul de E(X)", h: R`<p>$n = (n+1)-1$ fait apparaître deux sommes connues.</p>`, b: R`<p>On écrit $n = (n+1)-1$ :</p>$$nP(X = n) = \frac{4(n+1)}{(n+1)(n+2)(n+3)}-\frac4{(n+1)(n+2)(n+3)} = \frac4{(n+2)(n+3)}-P(X = n).$$<p>Les deux séries convergent, on peut sommer séparément.</p><ul><li>$\frac1{(n+2)(n+3)} = \frac1{n+2}-\frac1{n+3}$ télescope : $\sum_{n\geqslant0}\frac1{(n+2)(n+3)} = \frac12$.</li><li>$\sum_nP(X = n) = 1$.</li></ul>$$E(X) = 4\times\frac12-1 = 2-1.$$<div class="sbox">$$E(X) = 1.$$</div>` },
    { q: 4, t: "Pas de variance", h: R`<p>$n^2P(X = n)\sim\frac4n$.</p>`, b: R`<p>La variance existe si et seulement si $E(X^2) = \sum n^2P(X = n)$ converge. Or</p>$$n^2P(X = n) = \frac{4n^2}{(n+1)(n+2)(n+3)}\sim\frac{4n^2}{n^3} = \frac4n.$$<p>$\sum\frac1n$ diverge (série harmonique) : par comparaison, $\sum n^2P(X = n)$ diverge. $X$ n'a pas de moment d'ordre $2$, donc <b>pas de variance</b>.</p><p>À retenir : une espérance finie n'entraîne pas une variance finie. Ici la queue $P(X = n)\approx\frac4{n^3}$ est juste assez fine pour $E(X)$, pas pour $E(X^2)$.</p>`, rappels: ["o-c-moments"] }
  ],
  ctx: { "o-telescopage": R`<p>Avec $v_n = \frac1{(n+1)(n+2)}$.</p>`, "o-c-moments": R`<p>$nP(X = n)\sim\frac4{n^2}$, $n^2P(X = n)\sim\frac4n$.</p>` },
  piege: R`Confondre « $E(X)$ existe » et « $V(X)$ existe » : décroissance en $\frac1{n^3}$ donne la première, pas la seconde.`,
  methode: R`Moments d'une loi : équivalents de $n^kP(X = n)$.`
},
{
  id: "o-an-101", subj: "oraux", year: "mp", chap: 15, concours: "ccinp", level: 3, time: "25 min",
  title: "Un animal entre quatre points d'eau",
  enonce: R`<p>Un animal se déplace entre quatre points d'eau $A$, $B$, $C$, $D$. À $t = 0$, il est en $A$. À chaque trajet, il rejoint avec équiprobabilité l'un des trois autres points. On note $a_n,b_n,c_n,d_n$ les probabilités qu'il soit en $A,B,C,D$ après $n$ trajets, et $V_n = (a_n,b_n,c_n,d_n)^\top$.</p><ol><li>Exprimer $V_{n+1}$ en fonction de $V_n$ à l'aide d'une matrice $M$.</li><li><ol style="list-style:lower-alpha"><li>Justifier sans calcul que $M$ est diagonalisable.</li><li>Déterminer ses valeurs propres et sous-espaces propres.</li></ol></li><li>En déduire $a_n$, $b_n$, $c_n$, $d_n$.</li></ol>`,
  decode: { donnees: [R`Transitions de probabilité $\frac13$ entre points distincts.`], but: R`Une chaîne de Markov et sa limite.`, cles: {
    tot: R`Système complet $(A_n,B_n,C_n,D_n)$ : $a_{n+1} = \frac13b_n+\frac13c_n+\frac13d_n$.`,
    j: R`$M = \frac13(J-I_4)$, où $J$ est la matrice remplie de $1$ : $J$ a pour valeurs propres $4$ (vecteur $(1,1,1,1)$) et $0$ (sur l'hyperplan $x_1+x_2+x_3+x_4 = 0$).` } },
  steps: [
    { q: 1, t: "La relation matricielle", h: R`<p>Probabilités totales selon la position au temps $n$.</p>`, b: R`<p><span data-k="tot">Probabilités totales</span> :</p><div class="sbox">$$V_{n+1} = MV_n,\qquad M = \frac13\begin{pmatrix}0&1&1&1\\1&0&1&1\\1&1&0&1\\1&1&1&0\end{pmatrix}.$$</div>` + FIG(260, 220, (() => { const P = { A: [50, 40], B: [210, 40], C: [210, 180], D: [50, 180] }; let s = ""; const ks = Object.keys(P); for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) { const [x1, y1] = P[ks[i]], [x2, y2] = P[ks[j]]; s += `<line class="thin" style="stroke-dasharray:none" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`; } for (const k of ks) { const [x, y] = P[k]; s += `<circle cx="${x}" cy="${y}" r="16" class="${k === "A" ? "mass" : "body"}"/>` + S(x, y + 5, k, "middle", "it"); } return s + S(130, 30, "1/3", "middle"); })(), R`Chaque trajet relie le point actuel à l'un des trois autres, avec probabilité $\frac13$.`, "Graphe des quatre points d'eau"), rappels: ["o-c-totales"] },
    { q: 2, t: "Diagonalisation", h: R`<p>$M$ est symétrique réelle. Et $M$ s'écrit avec la matrice $J$.</p>`, b: R`<p>Symétrique réelle : diagonalisable. <span data-k="j">Avec $J$</span> : valeurs propres $\frac{4-1}3 = 1$ (sur $\operatorname{Vect}(1,1,1,1)$) et $\frac{0-1}3 = -\frac13$ (sur l'hyperplan $x_1+x_2+x_3+x_4 = 0$, de dimension $3$).</p>`, rappels: ["o-b-spectral"] },
    { q: 3, t: "Décomposer V₀", h: R`<p>On écrit $V_0$ comme somme d'un vecteur propre pour $1$ et d'un vecteur propre pour $-\frac13$ ; $M^n$ agit sur chaque morceau par $1$ ou $\big(-\frac13\big)^n$.</p>`, b: R`$$V_0 = \begin{pmatrix}1\\0\\0\\0\end{pmatrix} = \frac14\begin{pmatrix}1\\1\\1\\1\end{pmatrix}+\begin{pmatrix}3/4\\-1/4\\-1/4\\-1/4\end{pmatrix}.$$<div class="sbox">$$a_n = \frac14+\frac34\Big(-\frac13\Big)^n,\qquad b_n = c_n = d_n = \frac14-\frac14\Big(-\frac13\Big)^n.$$</div><p>Quand $n\to\infty$, chaque point a probabilité $\frac14$.</p>` }
  ],
  ctx: { "o-c-totales": R`<p>Système complet : la position au temps $n$.</p>`, "o-b-spectral": R`<p>$M^\top = M$.</p>` },
  piege: R`Écrire la matrice transposée (lignes et colonnes inversées) : ici elle est symétrique, mais en général il faut faire attention.`,
  methode: R`Chaîne de Markov : $V_{n+1} = MV_n$, diagonaliser $M$ et décomposer $V_0$ dans la base propre.`
},
{
  id: "o-an-102", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 2, time: "20 min",
  title: "Le minimum de variables géométriques",
  enonce: R`<p>Soient $X_1,\dots,X_N$ indépendantes, $X_i\sim\mathcal G(p_i)$ avec $p_i\in\,]0,1[$, et $q_i = 1-p_i$.</p><ol><li>Pour $n\in\mathbb N^\ast$, calculer $P(X_i\leqslant n)$ et $P(X_i>n)$.</li><li>Soit $Y = \min(X_1,\dots,X_N)$.<ol style="list-style:lower-alpha"><li>Calculer $P(Y>n)$, puis $P(Y\leqslant n)$ et $P(Y = n)$.</li><li>Reconnaître la loi de $Y$ et donner $E(Y)$.</li></ol></li></ol>`,
  decode: { donnees: [R`$P(X_i = k) = p_iq_i^{k-1}$.`], but: R`La loi du premier succès parmi plusieurs suites indépendantes.`, cles: {
    min: R`$Y>n\iff$ tous les $X_i$ sont $>n$ : $(Y>n) = \bigcap_i(X_i>n)$.`,
    q: R`On pose $Q = q_1q_2\cdots q_N\in\,]0,1[$.` } },
  steps: [
    { q: 1, t: "Queue d'une géométrique", h: R`<p>$X_i>n$ : les $n$ premiers essais sont des échecs.</p>`, b: R`<p>$X_i\sim\mathcal G(p_i)$ est le rang du premier succès dans des épreuves indépendantes de probabilité de succès $p_i$. L'événement $(X_i>n)$ signifie : les $n$ premiers essais sont des échecs. Par indépendance :</p>$$P(X_i>n) = q_i\times q_i\times\dots\times q_i = q_i^n.$$<p>(Par le calcul : $\sum_{k>n}p_iq_i^{k-1} = p_iq_i^n\sum_{j\geqslant0}q_i^j = p_iq_i^n\cdot\frac1{p_i} = q_i^n$.)</p><div class="sbox">$$P(X_i>n) = q_i^n,\qquad P(X_i\leqslant n) = 1-q_i^n.$$</div>`, rappels: ["o-c-geo"] },
    { q: 2, t: "Queue du minimum", h: R`<p>Le minimum dépasse $n$ si et seulement si chacun dépasse $n$.</p>`, b: R`<p>Le plus petit des $X_i$ est $>n$ si et seulement si tous sont $>n$ : <span data-k="min">$(Y>n) = (X_1>n)\cap\dots\cap(X_N>n)$</span>. Par indépendance :</p>$$P(Y>n) = \prod_{i=1}^Nq_i^n = \Big(\prod_{i=1}^Nq_i\Big)^n = Q^n.$$<p>On a noté <span data-k="q">$Q = q_1q_2\cdots q_N$</span>. Donc $P(Y\leqslant n) = 1-Q^n$.</p>`, rappels: ["o-c-indep"] },
    { q: 2, t: "Loi de Y", h: R`<p>$(Y>n-1) = (Y = n)\cup(Y>n)$, réunion disjointe.</p>`, b: R`<p>$Y$ est à valeurs dans $\mathbb N^*$. Pour $n\geqslant1$, $(Y>n-1)$ est la réunion disjointe de $(Y = n)$ et $(Y>n)$, donc</p>$$P(Y = n) = P(Y>n-1)-P(Y>n) = Q^{n-1}-Q^n = (1-Q)\,Q^{n-1}.$$<div class="sbox">$$P(Y = n) = (1-Q)\,Q^{n-1}.$$</div>` },
    { q: 2, t: "Loi et espérance", h: R`<p>C'est la forme $p(1-p)^{n-1}$ d'une géométrique.</p>`, b: R`<p>C'est la loi géométrique de paramètre $p = 1-Q\in\,]0,1[$, dont l'espérance est $\frac1p$ :</p><div class="sbox">$$Y\sim\mathcal G(1-Q),\qquad E(Y) = \frac1{1-q_1q_2\cdots q_N}.$$</div><p>Si tous les $p_i$ valent $p$ : $E(Y) = \frac1{1-(1-p)^N}$. Interprétation : on lance $N$ expériences en parallèle et on attend le premier succès, qui arrive à chaque tour avec probabilité $1-Q$ (au moins un succès).</p>`, rappels: ["o-c-geo"] }
  ],
  ctx: { "o-c-geo": R`<p>$P(X>n) = (1-p)^n$.</p>`, "o-c-indep": R`<p>Des événements $(X_i>n)$.</p>` },
  piege: R`Calculer $P(Y = n)$ directement : il faut gérer « au moins un vaut $n$ et les autres plus ». Passer par $P(Y>n)$ est bien plus simple.`,
  methode: R`Minimum de variables indépendantes : $P(\min>n) = \prod P(X_i>n)$.`
},
{
  id: "o-an-103", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 3, time: "25 min",
  title: "Lois de Poisson : somme et amincissement",
  enonce: R`<p>Les questions sont indépendantes.</p><ol><li>Soient $X_1$, $X_2$ indépendantes, de lois de Poisson de paramètres $\lambda_1,\lambda_2>0$.<ol style="list-style:lower-alpha"><li>Déterminer la loi de $X_1+X_2$.</li><li>En déduire son espérance et sa variance.</li></ol></li><li>Soient $p\in\,]0,1]$, $\lambda>0$, $Y\sim\mathcal P(\lambda)$ et $X$ à valeurs dans $\mathbb N$ telle que, pour tout $m$, la loi de $X$ sachant $(Y = m)$ soit $\mathcal B(m,p)$. Déterminer la loi de $X$, puis celle de $Y-X$.</li></ol>`,
  decode: { donnees: [R`Lois de Poisson.`], but: R`Stabilité de la loi de Poisson.`, cles: {
    bin: R`$\sum_{k=0}^n\binom nk\lambda_1^k\lambda_2^{n-k} = (\lambda_1+\lambda_2)^n$.`,
    shift: R`On pose $j = m-k$ : $\sum_{m\geqslant k}\frac{\lambda^m}{m!}\binom mk p^k(1-p)^{m-k} = \frac{(\lambda p)^k}{k!}\sum_{j\geqslant0}\frac{(\lambda(1-p))^j}{j!}$.` } },
  steps: [
    { q: 1, t: "Convolution", h: R`<p>Loi de la somme par indépendance, puis binôme.</p>`, b: R`$$P(X_1+X_2 = n) = \sum_{k=0}^ne^{-\lambda_1}\frac{\lambda_1^k}{k!}e^{-\lambda_2}\frac{\lambda_2^{n-k}}{(n-k)!} = \frac{e^{-(\lambda_1+\lambda_2)}}{n!}(\lambda_1+\lambda_2)^n.$$<p><span data-k="bin">Binôme</span>.</p><div class="sbox">$$X_1+X_2\sim\mathcal P(\lambda_1+\lambda_2),\qquad E = V = \lambda_1+\lambda_2.$$</div>`, rappels: ["o-c-conv", "o-c-poisson"] },
    { q: 2, t: "Loi de X", h: R`<p>Probabilités totales selon $Y$, puis on fait sortir les termes qui ne dépendent pas de $m$.</p>`, b: R`$$P(X = k) = \sum_{m\geqslant k}e^{-\lambda}\frac{\lambda^m}{m!}\binom mkp^k(1-p)^{m-k} = e^{-\lambda}\frac{(\lambda p)^k}{k!}e^{\lambda(1-p)}.$$<p><span data-k="shift">Changement d'indice</span>.</p><div class="sbox">$$X\sim\mathcal P(\lambda p).$$</div>`, rappels: ["o-c-totales"] },
    { q: 2, t: "Loi de Y − X", h: R`<p>Même calcul en échangeant les rôles de « succès » et « échecs ».</p>`, b: R`<p>Sachant $Y = m$, $Y-X\sim\mathcal B(m,1-p)$ : par le même calcul, $Y-X\sim\mathcal P(\lambda(1-p))$.</p><p><b>Interprétation :</b> si un nombre poissonnien de clients arrive et que chacun achète avec probabilité $p$, le nombre d'acheteurs est encore poissonnien.</p>` }
  ],
  ctx: { "o-c-conv": R`<p>Pour $X_1+X_2$.</p>`, "o-c-poisson": R`<p>Stabilité par somme indépendante.</p>`, "o-c-totales": R`<p>Système complet $(Y = m)_m$.</p>` },
  piege: R`Faire commencer la somme sur $m$ à $0$ : pour $m< k$, la probabilité conditionnelle est nulle.`,
  methode: R`Lois de Poisson : produit de convolution et série exponentielle.`
},
{
  id: "o-an-104", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 3, time: "25 min",
  title: "Boules dans quatre compartiments",
  enonce: R`<p>Soit $n\geqslant4$. On lance $n$ boules numérotées qui se rangent au hasard, indépendamment, dans $4$ compartiments numérotés (un compartiment peut tout recevoir). Soit $X$ le nombre de compartiments vides.</p><ol><li>Quelles valeurs prend $X$ ?</li><li>Déterminer $P(X = 3)$, $P(X = 2)$, $P(X = 1)$ et $P(X = 0)$.</li><li><ol style="list-style:lower-alpha"><li>Calculer $E(X)$.</li><li>Déterminer sa limite quand $n\to+\infty$ et l'interpréter.</li></ol></li></ol>`,
  decode: { donnees: [R`$4^n$ rangements équiprobables.`], but: R`Loi et espérance du nombre de compartiments vides.`, cles: {
    ind: R`$X = \sum_{i=1}^4\mathbb 1_{V_i}$ où $V_i$ = « le compartiment $i$ est vide », et $P(V_i) = \big(\frac34\big)^n$.` } },
  steps: [
    { q: 1, t: "Valeurs", h: R`<p>Au moins un compartiment est occupé ; tous peuvent l'être si $n\geqslant4$.</p>`, b: R`<p>Les $n$ boules occupent au moins un compartiment, donc au plus $3$ sont vides. Et comme $n\geqslant4$, on peut remplir les $4$ : $X$ peut valoir $0$.</p><div class="sbox">$$X(\Omega) = \{0,1,2,3\}.$$</div>` },
    { q: 2, t: "Compter", h: R`<p>On choisit les compartiments occupés, puis on compte les rangements qui les remplissent tous (surjections).</p>`, b: R`<p>Il y a $4^n$ rangements équiprobables (chaque boule choisit parmi $4$ compartiments).</p><ul><li><b>$X = 3$</b> : un seul compartiment occupé ; $4$ choix, et tout y va : $4$ rangements.</li><li><b>$X = 2$</b> : $\binom42 = 6$ choix des deux compartiments occupés ; rangements dans ces $2$ qui remplissent les deux : $2^n-2$ (on retire « tout dans l'un »).</li><li><b>$X = 1$</b> : $4$ choix du compartiment vide ; rangements dans les $3$ autres qui les remplissent tous : $3^n-3\cdot2^n+3$ (inclusion-exclusion : on retire les $3$ cas avec un vide, on rajoute les $3$ cas avec deux vides).</li></ul>$$P(X = 3) = \frac4{4^n},\quad P(X = 2) = \frac{6(2^n-2)}{4^n},\quad P(X = 1) = \frac{4(3^n-3\cdot2^n+3)}{4^n},$$<p>et $P(X = 0) = 1-P(X = 1)-P(X = 2)-P(X = 3)$.</p>` + BARS([1560, 2160, 372, 4].map(v => v / 4096), ["0", "1", "2", "3"], R`Loi de $X$ pour $n = 6$.`, "Loi du nombre de compartiments vides"), rappels: ["o-c-surj"] },
    { q: 3, t: "Espérance par indicatrices", h: R`<p>Compter les compartiments vides, c'est sommer des indicatrices.</p>`, b: R`<p><span data-k="ind">On écrit $X = \sum_{k=1}^4\mathbf 1_{V_k}$</span>, où $V_k$ = « le compartiment $k$ est vide ». $V_k$ arrive si chaque boule va dans l'un des $3$ autres : $P(V_k) = \big(\frac34\big)^n$. Par linéarité de l'espérance :</p><div class="sbox">$$E(X) = 4\Big(\frac34\Big)^n\xrightarrow[n\to\infty]{}0.$$</div><p>Avec beaucoup de boules, il devient très improbable qu'un compartiment reste vide.</p>`, rappels: ["o-c-indicatrices"] }
  ],
  ctx: { "o-c-surj": R`<p>$S(n,2)$ et $S(n,3)$ pour les compartiments occupés.</p>`, "o-c-indicatrices": R`<p>$P(V_i) = (3/4)^n$.</p>` },
  piege: R`Calculer $E(X)$ avec la loi : c'est possible mais long. Les indicatrices donnent le résultat en une ligne.`,
  methode: R`Nombre d'objets ayant une propriété : somme d'indicatrices pour l'espérance.`
},
{
  id: "o-an-105", subj: "oraux", year: "mp", chap: 15, concours: "ccinp", level: 2, time: "20 min",
  title: "Un dé pipé ? La formule de Bayes",
  enonce: R`<ol><li>Énoncer et démontrer la formule de Bayes pour un système complet d'événements.</li><li>On a $50$ dés, dont $10$ pipés : pour un dé pipé, la probabilité d'obtenir $6$ vaut $\frac13$.<ol style="list-style:lower-alpha"><li>On prend un dé au hasard et on obtient $6$. Probabilité qu'il soit pipé ?</li><li>On le lance $n$ fois et on obtient $n$ fois $6$. Probabilité $p_n$ qu'il soit pipé ?</li><li>Limite de $p_n$ et interprétation.</li></ol></li></ol>`,
  decode: { donnees: [R`$P(\text{pipé}) = \frac15$, $P(6\mid\text{pipé}) = \frac13$, $P(6\mid\text{normal}) = \frac16$.`], but: R`Remonter de l'observation à la cause.`, cles: {
    ind: R`Les lancers d'un même dé sont indépendants sachant le dé : $P(n\ \text{fois}\ 6\mid\text{pipé}) = \big(\frac13\big)^n$.` } },
  steps: [
    { q: 1, t: "Bayes", h: R`<p>Définition de la probabilité conditionnelle, deux fois, et probabilités totales au dénominateur.</p>`, b: R`<p><b>Énoncé</b> : soit $(A_i)$ un système complet d'événements de probabilités non nulles, et $B$ avec $P(B)>0$. Alors</p>$$P(A_j\mid B) = \frac{P(B\mid A_j)P(A_j)}{\sum_iP(B\mid A_i)P(A_i)}.$$<p><b>Preuve</b> : par définition, $P(A_j\mid B) = \frac{P(A_j\cap B)}{P(B)}$. Au numérateur, encore par définition, $P(A_j\cap B) = P(B\mid A_j)P(A_j)$. Au dénominateur, la formule des probabilités totales donne $P(B) = \sum_iP(B\mid A_i)P(A_i)$.</p>`, rappels: ["o-c-bayes", "o-c-totales"] },
    { q: 2, t: "Un seul 6", h: R`<p>Système complet : pipé / normal. $P(\text{pipé}) = \frac{10}{50} = \frac15$.</p>`, b: R`<p>Système complet : $T$ = « le dé est pipé », $\overline T$ = « il est normal », avec $P(T) = \frac{10}{50} = \frac15$, $P(\overline T) = \frac45$. Et $P(6\mid T) = \frac13$, $P(6\mid\overline T) = \frac16$.</p>$$P(T\mid6) = \frac{\frac13\cdot\frac15}{\frac13\cdot\frac15+\frac16\cdot\frac45} = \frac{\frac1{15}}{\frac1{15}+\frac4{30}} = \frac{\frac1{15}}{\frac1{15}+\frac2{15}} = \frac13.$$<p>Un seul $6$ fait passer la probabilité d'être pipé de $\frac15$ à $\frac13$.</p>` },
    { q: 2, t: "n fois 6", h: R`<p><span data-k="ind">Indépendance conditionnelle</span> des lancers : sachant le type du dé, $P(n\text{ fois }6) = p^n$.</p>`, b: R`<p>Sachant le type du dé, les lancers sont <span data-k="ind">indépendants</span> : $P(6^n\mid T) = \big(\frac13\big)^n$ et $P(6^n\mid\overline T) = \big(\frac16\big)^n$. Par Bayes :</p>$$p_n = \frac{\frac15\big(\frac13\big)^n}{\frac15\big(\frac13\big)^n+\frac45\big(\frac16\big)^n}.$$<p>On divise haut et bas par $\frac15\big(\frac13\big)^n$ ; il reste $4\big(\frac{1/6}{1/3}\big)^n = 4\big(\frac12\big)^n$ :</p>$$p_n = \frac1{1+4\cdot2^{-n}}.$$<p>Contrôle $n = 1$ : $\frac1{1+2} = \frac13$ ✓.</p>` },
    { q: 2, t: "Limite et interprétation", h: R`<p>$2^{-n}\to0$.</p>`, b: R`<div class="sbox">$$p_n\xrightarrow[n\to\infty]{}1.$$</div><p>Plus on observe de $6$ d'affilée, plus on est sûr que le dé est pipé. Dès $n = 5$ : $p_5 = \frac1{1+4/32} = \frac{32}{36} = \frac89\approx0{,}89$.</p>` }
  ],
  ctx: { "o-c-bayes": R`<p>$A_1$ = pipé, $A_2$ = normal.</p>`, "o-c-totales": R`<p>Au dénominateur.</p>` },
  piege: R`Confondre $P(6\mid\text{pipé})$ et $P(\text{pipé}\mid6)$.`,
  methode: R`Bayes : arbre de probabilités, puis rapport « branche favorable / toutes les branches ».`
},
{
  id: "o-an-106", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 3, time: "25 min",
  title: "Maximum et minimum de deux géométriques",
  enonce: R`<p>Soient $X$, $Y$ indépendantes à valeurs dans $\mathbb N$, de même loi $P(X = k) = pq^k$ ($p\in\,]0,1[$, $q = 1-p$). Soient $U = \max(X,Y)$ et $V = \min(X,Y)$.</p><ol><li>Déterminer la loi du couple $(U,V)$.</li><li>Déterminer la loi de $U$. On admet que $P(V = n) = pq^{2n}(1+q)$.</li><li>Montrer que $W = V+1$ suit une loi géométrique et en déduire $E(V)$.</li><li>$U$ et $V$ sont-elles indépendantes ?</li></ol>`,
  decode: { donnees: [R`Lois géométriques sur $\mathbb N$ (en partant de $0$).`], but: R`Loi du couple (max, min).`, cles: {
    cas: R`$(U,V) = (m,n)$ avec $m>n$ : soit $X = m,Y = n$, soit $X = n,Y = m$ (deux cas). Avec $m = n$ : un seul cas $X = Y = n$.` } },
  steps: [
    { q: 1, t: "Loi du couple", h: R`<p>Trois cas : $m< n$ (impossible), $m = n$, $m>n$.</p>`, b: R`<p>On calcule $P(U = m,V = n)$ en distinguant les <span data-k="cas">cas</span>.</p><ul><li><b>$m< n$</b> : impossible, car le max est toujours $\geqslant$ le min. Probabilité $0$.</li><li><b>$m = n$</b> : max et min égaux à $n$, c'est $X = Y = n$. Par indépendance : $P(X = n)P(Y = n) = pq^n\cdot pq^n = p^2q^{2n}$.</li><li><b>$m>n$</b> : deux façons, $(X = m,Y = n)$ ou $(X = n,Y = m)$, incompatibles. Chacune a pour probabilité $pq^m\cdot pq^n = p^2q^{m+n}$.</li></ul><div class="sbox">$$P(U = m,V = n) = \begin{cases}2p^2q^{m+n}&m>n\\p^2q^{2n}&m = n\\0&m< n\end{cases}$$</div>`, rappels: ["o-c-indep"] },
    { q: 2, t: "Loi de U", h: R`<p>On somme sur $n\leqslant m$ ; somme géométrique.</p>`, b: R`<p>On somme la loi du couple sur $n$ : seuls $n\leqslant m$ comptent. On sépare $n = m$ et $n< m$ :</p>$$P(U = m) = p^2q^{2m}+\sum_{n=0}^{m-1}2p^2q^{m+n} = p^2q^{2m}+2p^2q^m\sum_{n=0}^{m-1}q^n.$$<p>Somme géométrique : $\sum_{n=0}^{m-1}q^n = \frac{1-q^m}{1-q} = \frac{1-q^m}p$. Donc</p><div class="sbox">$$P(U = m) = p^2q^{2m}+2pq^m(1-q^m).$$</div><p><b>Contrôle</b> $m = 0$ : $P(U = 0) = p^2 = P(X = 0)P(Y = 0)$ ✓.</p>`, rappels: ["o-c-marginale"] },
    { q: 3, t: "W = V + 1", h: R`<p>Utilise $p = 1-q$ et $(1-q)(1+q) = 1-q^2$.</p>`, b: R`<p>Pour $k\geqslant1$ : $P(W = k) = P(V = k-1) = pq^{2(k-1)}(1+q)$. Or</p>$$p(1+q) = (1-q)(1+q) = 1-q^2,\qquad q^{2(k-1)} = (q^2)^{k-1}.$$<p>Donc $P(W = k) = (1-q^2)(q^2)^{k-1}$ : c'est la loi géométrique de paramètre $s = 1-q^2$ :</p>$$W\sim\mathcal G(1-q^2),\qquad E(W) = \frac1{1-q^2}.$$<p>Par linéarité, $E(V) = E(W)-1$ :</p><div class="sbox">$$E(V) = \frac1{1-q^2}-1 = \frac{1-(1-q^2)}{1-q^2} = \frac{q^2}{1-q^2}.$$</div><p>Interprétation : le min est « le premier succès » d'une épreuve qui réussit si $X$ ou $Y$ réussit.</p>`, rappels: ["o-c-geo"] },
    { q: 4, t: "Indépendance ?", h: R`<p>Un couple de probabilité nulle.</p>`, b: R`<p>$P(U = 0,V = 1) = 0$, car on ne peut pas avoir max $<$ min. Mais séparément :</p>$$P(U = 0) = p^2>0,\qquad P(V = 1) = pq^2(1+q)>0.$$<p>Donc $P(U = 0,V = 1)\neq P(U = 0)P(V = 1)$ : $U$ et $V$ ne sont <b>pas indépendantes</b>.</p>` }
  ],
  ctx: { "o-c-indep": R`<p>$P(X = m,Y = n) = p^2q^{m+n}$.</p>`, "o-c-marginale": R`<p>Somme sur $n$.</p>`, "o-c-geo": R`<p>Paramètre $1-q^2$.</p>` },
  piege: R`Oublier le facteur $2$ quand $m>n$ (deux façons d'obtenir ce couple).`,
  methode: R`Max et min : distinguer égalité et inégalité stricte.`
},
{
  id: "o-an-107", subj: "oraux", year: "mp", chap: 15, concours: "ccinp", level: 2, time: "20 min",
  title: "Deux urnes et une récurrence affine",
  enonce: R`<p>L'urne $U_1$ contient $1$ boule blanche et $2$ noires ; l'urne $U_2$ contient $3$ blanches et $1$ noire. Au premier tirage, on choisit une urne au hasard et on tire une boule (remise ensuite). Si elle est blanche, le tirage suivant se fait dans $U_1$, sinon dans $U_2$. On note $p_n = P(B_n)$, où $B_n$ = « la $n$-ième boule est blanche ».</p><ol><li>Calculer $p_1$.</li><li>Montrer que $p_{n+1} = -\frac5{12}p_n+\frac34$.</li><li>En déduire $p_n$.</li></ol>`,
  decode: { donnees: [R`$P(B\mid U_1) = \frac13$, $P(B\mid U_2) = \frac34$.`], but: R`Une suite arithmético-géométrique.`, cles: {
    fix: R`Point fixe : $\ell = -\frac5{12}\ell+\frac34\iff\frac{17}{12}\ell = \frac34\iff\ell = \frac9{17}$.` } },
  steps: [
    { q: 1, t: "Premier tirage", h: R`<p>Probabilités totales selon l'urne choisie.</p>`, b: R`<p>Au premier tirage, on choisit $U_1$ ou $U_2$ avec probabilité $\frac12$. Dans $U_1$ ($1$ blanche sur $3$), on tire une blanche avec probabilité $\frac13$ ; dans $U_2$ ($3$ blanches sur $4$), avec probabilité $\frac34$. Formule des probabilités totales :</p>$$p_1 = \frac12\times\frac13+\frac12\times\frac34 = \frac16+\frac38 = \frac4{24}+\frac9{24} = \frac{13}{24}.$$`, rappels: ["o-c-totales"] },
    { q: 2, t: "Récurrence", h: R`<p>Système complet $(B_n,\overline{B_n})$ : il fixe l'urne du tirage suivant.</p>`, b: R`<p>Si la $n$-ième boule est blanche, on tire ensuite dans $U_1$ : $P(B_{n+1}\mid B_n) = \frac13$. Sinon dans $U_2$ : $P(B_{n+1}\mid\overline{B_n}) = \frac34$. Avec le système complet $(B_n,\overline{B_n})$ :</p>$$p_{n+1} = \frac13p_n+\frac34(1-p_n) = \Big(\frac13-\frac34\Big)p_n+\frac34.$$<p>Et $\frac13-\frac34 = \frac4{12}-\frac9{12} = -\frac5{12}$ :</p><div class="sbox">$$p_{n+1} = -\frac5{12}p_n+\frac34.$$</div>`, rappels: ["o-c-totales"] },
    { q: 3, t: "Le point fixe", h: R`<p>Cherche le réel $\ell$ tel que $\ell = -\frac5{12}\ell+\frac34$.</p>`, b: R`<p>Une suite arithmético-géométrique se traite avec son <span data-k="fix">point fixe</span> $\ell$ :</p>$$\ell = -\frac5{12}\ell+\frac34\iff\frac{17}{12}\ell = \frac34\iff\ell = \frac34\times\frac{12}{17} = \frac9{17}.$$` },
    { q: 3, t: "La suite géométrique", h: R`<p>Soustrais les deux égalités $p_{n+1} = -\frac5{12}p_n+\frac34$ et $\ell = -\frac5{12}\ell+\frac34$.</p>`, b: R`<p>En soustrayant, le $\frac34$ disparaît :</p>$$p_{n+1}-\ell = -\frac5{12}(p_n-\ell).$$<p>La suite $(p_n-\ell)$ est géométrique de raison $-\frac5{12}$, donc $p_n-\ell = \big(-\frac5{12}\big)^{n-1}(p_1-\ell)$. On calcule le premier terme :</p>$$p_1-\frac9{17} = \frac{13}{24}-\frac9{17} = \frac{13\times17-9\times24}{408} = \frac{221-216}{408} = \frac5{408}.$$<div class="sbox">$$p_n = \frac9{17}+\frac5{408}\Big(-\frac5{12}\Big)^{n-1}\xrightarrow[n\to\infty]{}\frac9{17}.$$</div><p>Comme $\big|-\frac5{12}\big|< 1$, le second terme tend vers $0$.</p>` }
  ],
  ctx: { "o-c-totales": R`<p>Selon l'urne (Q1), puis selon la couleur précédente (Q2).</p>` },
  piege: R`Oublier que le premier tirage se fait dans une urne choisie au hasard, contrairement aux suivants.`,
  methode: R`$u_{n+1} = au_n+b$ : retrancher le point fixe.`
},
{
  id: "o-an-108", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 2, time: "25 min",
  title: "Un couple géométrique-Poisson",
  enonce: R`<p>Soit $(X,Y)$ à valeurs dans $\mathbb N^2$ avec $P(X = i,Y = j) = \dfrac{2}{3^{i+1}}\cdot e^{-2}\dfrac{2^j}{j!}$.</p><ol><li>Déterminer les lois de $X$ et de $Y$.</li><li><ol style="list-style:lower-alpha"><li>Montrer que $1+X$ suit une loi géométrique ; en déduire $E(X)$ et $V(X)$.</li><li>Donner $E(Y)$ et $V(Y)$.</li></ol></li><li>$X$ et $Y$ sont-elles indépendantes ?</li><li>Calculer $P(X = Y)$.</li></ol>`,
  decode: { donnees: [R`La loi du couple est un produit.`], but: R`Marginales, moments, indépendance, $P(X = Y)$.`, cles: {
    prod: R`$P(X = i,Y = j) = f(i)\,g(j)$ avec $\sum f = \sum g = 1$ : les marginales sont $f$ et $g$, et il y a indépendance.` } },
  steps: [
    { q: 1, t: "Loi de X", h: R`<p>$P(X = i) = \sum_jP(X = i,Y = j)$ : sors ce qui ne dépend pas de $j$, il reste une série exponentielle.</p>`, b: R`<p>Formule des probabilités totales (loi marginale) : on somme la loi du couple sur toutes les valeurs de $Y$.</p>$$P(X = i) = \sum_{j=0}^{+\infty}\frac2{3^{i+1}}e^{-2}\frac{2^j}{j!} = \frac2{3^{i+1}}\,e^{-2}\sum_{j=0}^{+\infty}\frac{2^j}{j!}.$$<p>On reconnaît la série exponentielle $\sum_j\frac{x^j}{j!} = e^x$ avec $x = 2$ : elle vaut $e^2$, qui se simplifie avec $e^{-2}$.</p><div class="sbox">$$P(X = i) = \frac2{3^{i+1}},\qquad i\in\mathbb N.$$</div>`, rappels: ["o-c-marginale"] },
    { q: 1, t: "Loi de Y", h: R`<p>Même méthode en sommant sur $i$ : il reste une série géométrique de raison $\frac13$.</p>`, b: R`$$P(Y = j) = \sum_{i=0}^{+\infty}\frac2{3^{i+1}}e^{-2}\frac{2^j}{j!} = e^{-2}\frac{2^j}{j!}\times\frac23\sum_{i=0}^{+\infty}\Big(\frac13\Big)^i.$$<p>Série géométrique : $\sum_i\big(\frac13\big)^i = \frac1{1-1/3} = \frac32$, et $\frac23\times\frac32 = 1$ :</p><div class="sbox">$$P(Y = j) = e^{-2}\frac{2^j}{j!} : \quad Y\sim\mathcal P(2).$$</div>` },
    { q: 2, t: "1 + X est géométrique", h: R`<p>Calcule $P(1+X = k)$ pour $k\geqslant1$ et écris-le sous la forme $p(1-p)^{k-1}$.</p>`, b: R`<p>Pour $k\geqslant1$ : $P(1+X = k) = P(X = k-1) = \dfrac2{3^k}$. On fait apparaître la forme géométrique :</p>$$\frac2{3^k} = \frac23\times\frac1{3^{k-1}} = \frac23\Big(\frac13\Big)^{k-1} = p(1-p)^{k-1}\quad\text{avec }p = \frac23.$$<div class="sbox">$$1+X\sim\mathcal G\Big(\frac23\Big).$$</div>`, rappels: ["o-c-geo"] },
    { q: 2, t: "Moments de X et Y", h: R`<p>Pour $\mathcal G(p)$ : $E = \frac1p$ et $V = \frac{1-p}{p^2}$. Puis $E(X) = E(1+X)-1$ et $V(X) = V(1+X)$.</p>`, b: R`<p>Pour $G = 1+X\sim\mathcal G(p)$ avec $p = \frac23$ :</p>$$E(G) = \frac1p = \frac32,\qquad V(G) = \frac{1-p}{p^2} = \frac{1/3}{4/9} = \frac13\times\frac94 = \frac34.$$<p>Par linéarité, $E(X) = E(G)-1$, et une constante ne change pas la variance :</p><div class="sbox">$$E(X) = \frac12,\qquad V(X) = \frac34.$$</div><p>Pour $Y\sim\mathcal P(2)$, espérance et variance valent le paramètre : $E(Y) = V(Y) = 2$.</p>`, rappels: ["o-c-geo", "o-c-poisson"] },
    { q: 3, t: "Indépendance", h: R`<p><span data-k="prod">Loi produit</span> : compare $P(X = i,Y = j)$ et $P(X = i)P(Y = j)$.</p>`, b: R`<p>D'après Q1, pour tous $i,j$ :</p>$$P(X = i)\,P(Y = j) = \frac2{3^{i+1}}\times e^{-2}\frac{2^j}{j!} = P(X = i,Y = j).$$<p>La loi du couple est le produit des lois marginales : $X$ et $Y$ sont <b>indépendantes</b>.</p>`, rappels: ["o-c-indep"] },
    { q: 4, t: "P(X = Y)", h: R`<p>$(X = Y)$ est la réunion disjointe des $(X = k,Y = k)$. Regroupe les puissances $\frac{2^k}{3^k}$.</p>`, b: R`<p>$(X = Y) = \bigcup_{k\geqslant0}(X = k,Y = k)$, réunion disjointe, donc</p>$$P(X = Y) = \sum_{k=0}^{+\infty}\frac2{3^{k+1}}e^{-2}\frac{2^k}{k!} = \frac23e^{-2}\sum_{k=0}^{+\infty}\frac{2^k}{3^k\,k!} = \frac23e^{-2}\sum_{k=0}^{+\infty}\frac{(2/3)^k}{k!}.$$<p>Série exponentielle avec $x = \frac23$ : elle vaut $e^{2/3}$. Et $e^{-2}e^{2/3} = e^{-4/3}$ :</p><div class="sbox">$$P(X = Y) = \frac23e^{-4/3}\approx0{,}176.$$</div>` }
  ],
  ctx: { "o-c-marginale": R`<p>Sommes séparées.</p>`, "o-c-geo": R`<p>$p = \frac23$.</p>`, "o-c-poisson": R`<p>$\lambda = 2$.</p>`, "o-c-indep": R`<p>Loi produit.</p>` },
  piege: R`Oublier le décalage : $X$ commence à $0$, c'est $1+X$ qui est géométrique.`,
  methode: R`Loi de couple factorisée : marginales immédiates et indépendance.`
},
{
  id: "o-an-109", subj: "oraux", year: "mp", chap: 15, concours: "ccinp", level: 3, time: "25 min",
  title: "Rangs d'apparition dans un tirage complet",
  enonce: R`<p>Une urne contient $n$ boules blanches numérotées de $1$ à $n$ et $3$ boules noires numérotées $1$, $2$, $3$. On tire toutes les boules une à une sans remise, tous les ordres étant équiprobables.</p><ol><li>Soit $X$ le rang de la première boule blanche. Déterminer sa loi.</li><li>Soit $Y$ le rang de la première boule portant le numéro $1$. Déterminer sa loi.</li></ol>`,
  decode: { donnees: [R`$n+3$ boules ; deux boules portent le numéro $1$ (une blanche, une noire).`], but: R`Deux lois de rangs.`, cles: {
    comp: R`Probabilités composées : $P(N_1\cap\dots\cap N_{k-1}\cap B_k) = P(N_1)P(N_2\mid N_1)\cdots P(B_k\mid N_1\cap\dots\cap N_{k-1})$.`,
    pos: R`Les positions des deux boules « $1$ » forment une paire uniformément répartie parmi les $\binom{n+3}2$ paires de positions.` } },
  steps: [
    { q: 1, t: "Loi de X", h: R`<p>$X = k$ : les $k-1$ premières sont noires, la $k$-ième blanche. Il n'y a que $3$ noires.</p>`, b: R`<p><span data-k="comp">Probabilités composées</span>, $X(\Omega) = \{1,2,3,4\}$ :</p>$$P(X = 1) = \frac n{n+3},\quad P(X = 2) = \frac{3n}{(n+3)(n+2)},\quad P(X = 3) = \frac{6n}{(n+3)(n+2)(n+1)},\quad P(X = 4) = \frac6{(n+3)(n+2)(n+1)}.$$<p><b>Contrôle $n = 1$ :</b> $\frac14+\frac14+\frac14+\frac14 = 1$.</p>`, rappels: ["o-c-totales"] },
    { q: 2, t: "Loi de Y", h: R`<p>Seules les positions des deux boules numérotées $1$ comptent.</p>`, b: R`<p><span data-k="pos">Paire de positions uniforme</span>. $Y = k$ : la plus petite est $k$, l'autre parmi les $n+3-k$ positions suivantes :</p><div class="sbox">$$P(Y = k) = \frac{n+3-k}{\binom{n+3}2} = \frac{2(n+3-k)}{(n+3)(n+2)},\quad1\leqslant k\leqslant n+2.$$</div>` }
  ],
  ctx: { "o-c-totales": R`<p>On utilise ici les probabilités composées le long de l'arbre.</p>` },
  piege: R`Oublier que $X\leqslant4$ (au plus trois noires avant la première blanche).`,
  methode: R`Rangs dans un tirage complet : probabilités composées, ou ne regarder que les positions des boules qui comptent.`
},
{
  id: "o-an-110", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 2, time: "20 min",
  title: "Fonction génératrice d'une loi de Poisson",
  enonce: R`<p>Soit $X$ à valeurs dans $\mathbb N$.</p><ol><li><ol style="list-style:lower-alpha"><li>Montrer que le rayon $R_X$ de $\sum P(X = n)t^n$ vérifie $R_X\geqslant1$, que $G_X$ est définie sur $[-1,1]$ et que $G_X(t) = E(t^X)$.</li><li>Exprimer $P(X = k)$ à l'aide de $G_X^{(k)}(0)$.</li></ol></li><li><ol style="list-style:lower-alpha"><li>Si $X\sim\mathcal P(\lambda)$, déterminer $G_X$ et son domaine. Retrouver $E(X)$.</li><li>Soient $X\sim\mathcal P(\lambda_1)$, $Y\sim\mathcal P(\lambda_2)$ indépendantes. Déterminer la loi de $X+Y$ à l'aide des fonctions génératrices.</li></ol></li></ol>`,
  decode: { donnees: [R`$\sum P(X = n) = 1$.`], but: R`Utiliser les fonctions génératrices pour une somme de Poisson.`, cles: {
    der: R`Si $G_X$ est dérivable en $1$ : $E(X) = G_X'(1)$, car $G_X'(t) = \sum nP(X = n)t^{n-1}$.` } },
  steps: [
    { q: 1, t: "Domaine et espérance", h: R`<p>Coefficients bornés par $1$ et de somme $1$.</p>`, b: R`<p>$|P(X = n)t^n|\leqslant P(X = n)$ pour $|t|\leqslant1$ : convergence absolue sur $[-1,1]$, donc $R_X\geqslant1$. Par transfert, $G_X(t) = E(t^X)$. Et $P(X = k) = \frac{G_X^{(k)}(0)}{k!}$ (coefficients d'une série entière).</p>`, rappels: ["o-a-se-derivation", "o-c-transfert"] },
    { q: 2, t: "Cas de Poisson", h: R`<p>Série exponentielle.</p>`, b: R`$$G_X(t) = \sum e^{-\lambda}\frac{(\lambda t)^n}{n!} = e^{\lambda(t-1)},\quad t\in\mathbb R.$$<p><span data-k="der">Dérivée en $1$</span> : $E(X) = \lambda$.</p>`, rappels: ["o-c-poisson"] },
    { q: 2, t: "Somme", h: R`<p>Produit des fonctions génératrices, puis unicité.</p>`, b: R`<p>$G_{X+Y}(t) = e^{\lambda_1(t-1)}e^{\lambda_2(t-1)} = e^{(\lambda_1+\lambda_2)(t-1)}$. La fonction génératrice détermine la loi :</p><div class="sbox">$$X+Y\sim\mathcal P(\lambda_1+\lambda_2).$$</div>`, rappels: ["o-c-gen"] }
  ],
  ctx: { "o-a-se-derivation": R`<p>$P(X = k) = a_k = \frac{G^{(k)}(0)}{k!}$.</p>`, "o-c-transfert": R`<p>$E(t^X) = \sum t^nP(X = n)$.</p>`, "o-c-poisson": R`<p>$G = e^{\lambda(t-1)}$.</p>`, "o-c-gen": R`<p>$G_{X+Y} = G_XG_Y$.</p>` },
  piege: R`Oublier l'argument d'unicité : deux lois de même fonction génératrice sont égales.`,
  methode: R`Lois discrètes sur $\mathbb N$ : la fonction génératrice transforme les sommes indépendantes en produits.`
},
{
  id: "o-an-111", subj: "oraux", year: "mp", chap: 16, concours: "ccinp", level: 3, time: "25 min",
  title: "Un couple binomial-géométrique",
  enonce: R`<p>On admet que pour $q\in\mathbb N$ et $x\in\,]-1,1[$, $\sum_{k\geqslant q}\binom kqx^{k-q} = \dfrac1{(1-x)^{q+1}}$. Soit $p\in\,]0,1[$ et $(X,Y)$ à valeurs dans $\mathbb N^2$ avec</p>$$P(X = k,Y = n) = \binom nk\Big(\frac13\Big)^k\Big(\frac23\Big)^{n-k}p(1-p)^n\ \text{si}\ k\leqslant n,\quad0\ \text{sinon}.$$<ol><li>Vérifier qu'il s'agit d'une loi de probabilité.</li><li><ol style="list-style:lower-alpha"><li>Déterminer la loi de $Y$.</li><li>Montrer que $1+Y$ suit une loi géométrique.</li><li>Donner $E(Y)$.</li></ol></li><li>Déterminer la loi de $X$.</li></ol>`,
  decode: { donnees: [R`Sachant $Y = n$, $X\sim\mathcal B(n,\frac13)$.`], but: R`Marginales d'un couple hiérarchique.`, cles: {
    x: R`On pose $x = \frac{2(1-p)}3\in\,]0,1[$ pour appliquer la formule admise.` } },
  steps: [
    { q: 1, t: "Somme totale", h: R`<p>À $n$ fixé, la somme en $k$ est un binôme égal à $1$.</p>`, b: R`$$\sum_n\sum_{k\leqslant n}(\dots) = \sum_np(1-p)^n\Big(\frac13+\frac23\Big)^n = \sum_np(1-p)^n = 1.$$<p>Les termes sont positifs : c'est une loi.</p>` },
    { q: 2, t: "Loi de Y", h: R`<p>Même calcul, à $n$ fixé.</p>`, b: R`<p>$P(Y = n) = p(1-p)^n$, donc $P(1+Y = m) = p(1-p)^{m-1}$ : $1+Y\sim\mathcal G(p)$, et</p><div class="sbox">$$E(Y) = \frac1p-1 = \frac{1-p}p.$$</div>`, rappels: ["o-c-geo"] },
    { q: 3, t: "Loi de X", h: R`<p>On somme sur $n\geqslant k$ et on utilise la formule admise.</p>`, b: R`$$P(X = k) = p\Big(\frac{1-p}3\Big)^k\sum_{n\geqslant k}\binom nk\Big(\frac{2(1-p)}3\Big)^{n-k} = p\Big(\frac{1-p}3\Big)^k\Big(\frac3{1+2p}\Big)^{k+1}.$$<p>On a appliqué la formule admise avec $q = k$ et <span data-k="x">$x = \frac{2(1-p)}3\in\,]0,1[$</span> : $1-x = \frac{3-2+2p}3 = \frac{1+2p}3$, d'où le facteur $\frac1{(1-x)^{k+1}} = \big(\frac3{1+2p}\big)^{k+1}$. On simplifie : $p\big(\frac{1-p}3\big)^k\big(\frac3{1+2p}\big)^{k+1} = \frac{3p}{1+2p}\big(\frac{1-p}{1+2p}\big)^k$.</p><div class="sbox">$$P(X = k) = \frac{3p}{1+2p}\Big(\frac{1-p}{1+2p}\Big)^k :\ 1+X\sim\mathcal G\Big(\frac{3p}{1+2p}\Big).$$</div>`, rappels: ["o-c-marginale"] }
  ],
  ctx: { "o-c-geo": R`<p>Paramètre $p$ pour $1+Y$.</p>`, "o-c-marginale": R`<p>Somme sur $n\geqslant k$.</p>` },
  piege: R`Sommer sur $n\geqslant0$ au lieu de $n\geqslant k$.`,
  methode: R`Couple hiérarchique : sommer d'abord sur la variable « interne » (binôme), puis utiliser la série dérivée de la géométrique.`
},
{
  id: "o-an-112", subj: "oraux", year: "mp", chap: 5, concours: "ccinp", level: 2, time: "15 min",
  title: "Compter des familles de parties",
  enonce: R`<p>Soit $E$ un ensemble à $n\geqslant1$ éléments.</p><ol><li>Combien y a-t-il de triplets $(A,B,C)$ de parties de $E$ avec $A\subset B\subset C$ ?</li><li>Combien y a-t-il de couples $(A,B)$ avec $A\cup B = E$ ?</li><li>Combien y a-t-il de couples $(A,B)$ avec $|A\cap B| = 1$ ?</li></ol>`,
  decode: { donnees: [R`$|E| = n$.`], but: R`Trois dénombrements par « choix élément par élément ».`, cles: {
    zone: R`Un triplet $A\subset B\subset C$ est déterminé par la « zone » de chaque élément $x$ : dans $A$, dans $B\setminus A$, dans $C\setminus B$, ou hors de $C$. Quatre choix indépendants par élément.` } },
  steps: [
    { q: 1, t: "Parties emboîtées", h: R`<p>Au lieu de choisir les parties, on choisit pour chaque élément l'endroit où il se trouve.</p>`, b: R`<p><b>L'idée :</b> un triplet $(A,B,C)$ avec $A\subset B\subset C$ est entièrement décrit si l'on sait, pour chaque élément $x$ de $E$, « jusqu'où » il est rangé. Comme les parties sont emboîtées, il n'y a que <span data-k="zone">quatre zones</span> possibles pour $x$ :</p><ul><li>$x\in A$ (donc aussi dans $B$ et $C$) ;</li><li>$x\in B$ mais $x\notin A$ ;</li><li>$x\in C$ mais $x\notin B$ ;</li><li>$x\notin C$.</li></ul><p>Réciproquement, choisir une zone pour chaque élément définit un unique triplet emboîté : $A$ = éléments de la zone 1, $B$ = zones 1 et 2, $C$ = zones 1, 2 et 3.</p><p>On fait $n$ choix indépendants, avec $4$ possibilités chacun. Par le principe multiplicatif :</p><div class="sbox">$$4\times4\times\dots\times4 = 4^n.$$</div><p><b>Contrôle $n = 1$</b>, $E = \{x\}$ : $(\varnothing,\varnothing,\varnothing)$, $(\varnothing,\varnothing,E)$, $(\varnothing,E,E)$, $(E,E,E)$. Il y en a bien $4$.</p>`, rappels: ["o-produit"] },
    { q: 2, t: "Réunion égale à E", h: R`<p>Chaque élément est dans $A$ seul, dans $B$ seul, ou dans les deux.</p>`, b: R`<p>Un couple $(A,B)$ est décrit par la position de chaque élément $x$ : dans $A$ seulement, dans $B$ seulement, dans les deux, ou dans aucun. Cela fait $4$ cas.</p><p>La condition $A\cup B = E$ dit que tout élément est dans $A$ ou dans $B$ : on interdit seulement le cas « dans aucun ». Il reste $3$ possibilités pour chacun des $n$ éléments :</p><div class="sbox">$$3^n.$$</div><p><b>Contrôle $n = 1$</b> : $(E,\varnothing)$, $(\varnothing,E)$, $(E,E)$. Il y en a bien $3$.</p>`, rappels: ["o-produit"] },
    { q: 3, t: "Intersection à un élément", h: R`<p>On choisit l'élément commun, puis pour chacun des autres trois possibilités (dans $A$ seul, $B$ seul, aucun des deux).</p>`, b: R`<p>$|A\cap B| = 1$ : exactement un élément est dans les deux parties. On construit le couple en deux temps :</p><ol><li><b>On choisit l'élément commun</b> $x_0$ : $n$ choix.</li><li><b>Pour chacun des $n-1$ autres éléments</b>, il ne doit pas être dans les deux à la fois. Il reste $3$ cas : dans $A$ seul, dans $B$ seul, dans aucun. Cela donne $3^{n-1}$ choix.</li></ol><p>Chaque couple est obtenu une seule fois (l'élément commun est imposé par le couple). Par le principe multiplicatif :</p><div class="sbox">$$n\cdot3^{n-1}.$$</div><p><b>Contrôle $n = 1$ :</b> seul $(E,E)$ convient : $1\cdot3^0 = 1$. <b>Contrôle $n = 2$</b>, $E = \{a,b\}$ : $2\times3 = 6$ couples, par exemple, avec $a$ commun : $(\{a\},\{a\})$, $(\{a,b\},\{a\})$, $(\{a\},\{a,b\})$.</p>`, rappels: ["o-produit"] }
  ],
  ctx: { "o-produit": R`<p>Un choix par élément, indépendant des autres.</p>` },
  piege: R`Compter les parties une par une avec des sommes de binomiaux : correct mais bien plus long.`,
  methode: R`Familles de parties : coder chaque élément par sa position relative (diagramme de Venn) et appliquer le principe multiplicatif.`
}
]);
})();

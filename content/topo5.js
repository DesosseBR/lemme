/* Topologie des espaces vectoriels normés (Spé) : blocs « Études dans un espace normé » et « Calcul de distance à une partie ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 2 };
const { GRAPH, S, f1 } = window.__LA;
LEMME.rappels({
  "nrm-dist": { t: "Distance à une partie", b: R`<p>Pour $A$ non vide : $d(x,A) = \inf_{a\in A}\|x-a\|$.</p><ul><li>Pour la <b>majorer</b> : exhiber un $a\in A$ et calculer $\|x-a\|$.</li><li>Pour la <b>minorer</b> par $m$ : montrer que $\|x-a\|\geqslant m$ pour <b>tout</b> $a\in A$.</li></ul>` },
  "nrm-sup": { t: "Borne supérieure", b: R`<p>Toute partie de $\mathbb R$ non vide et majorée admet une borne supérieure, qui est son plus petit majorant :</p><ul><li>si tous les éléments sont $\leqslant M$, alors $\sup\leqslant M$ ;</li><li>si $A\subset B$, alors $\sup A\leqslant\sup B$.</li></ul>` },
  "nrm-cheb": { t: "Polynômes de Tchebychev", b: R`<p>$T_0 = 1$, $T_1 = X$, $T_{n+1} = 2XT_n-T_{n-1}$. Pour tout $\theta$ : $T_n(\cos\theta) = \cos(n\theta)$. Pour $n\geqslant1$, $T_n$ est de degré $n$ et de coefficient dominant $2^{n-1}$.</p>` }
});
const cheb = (n, x) => Math.cos(n * Math.acos(Math.max(-1, Math.min(1, x))));
const figCheb = GRAPH({ w: 460, h: 250, x: [-1, 1], y: [-0.2, 0.2], xt: [-1, -0.5, 0.5, 1], xtl: ["−1", "−0,5", "0,5", "1"], yt: [-0.125, 0.125], ytl: ["−1/8", "1/8"], xl: "x",
  curves: [
    { f: x => cheb(4, x) / 8, c: "b", lab: [0.12, 0.165, "T₄/8", "start"] },
    { f: x => { const v = x ** 4 - x * x / 2; return Math.abs(v) > 0.19 ? NaN : v; }, c: "r", dash: true, lab: [0.18, 0.17, "x⁴ − x²/2", "start"] }
  ],
  extra: (X, Y) => [0, 1, 2, 3, 4].map(k => { const x = Math.cos(k * Math.PI / 4); return `<circle cx="${f1(X(x))}" cy="${f1(Y(cheb(4, x) / 8))}" r="4" class="hb"/>`; }).join("") },
  R`Le polynôme unitaire $\frac{T_4}8$ (bleu) oscille entre $-\frac18$ et $\frac18$ et atteint ces valeurs, en alternant, aux $5$ points $x_k = \cos\frac{k\pi}4$. Un autre polynôme unitaire de degré $4$, ici $x^4-\frac{x^2}2$ (rouge, coupé quand il sort du cadre), sort de la bande $[-\frac18,\frac18]$ : sa norme uniforme vaut $1-\frac12 = \frac12$.`, "Polynôme de Tchebychev normalisé");
LEMME.exercises([
{ id: "topo-81", ...P, level: 1, time: "15 min",
  title: "Quand deux boules se rencontrent-elles ? (Mines)",
  enonce: R`<p>Soit $N$ une norme sur un espace vectoriel réel $E$, $a,b\in E$ et $r,s\geqslant0$.</p><ol><li>À quelle condition les boules fermées $B_f(a,r)$ et $B_f(b,s)$ ont-elles une intersection non vide ?</li><li>Même question pour les boules ouvertes $B(a,r)$ et $B(b,s)$ (avec $r,s>0$).</li></ol>`,
  decode: { donnees: [R`$B_f(a,r) = \{x : N(x-a)\leqslant r\}$, $B(a,r) = \{x : N(x-a)\lt r\}$.`], but: R`Montrer que la condition est $N(b-a)\leqslant r+s$ (resp. $\lt r+s$).`, cles: {} },
  steps: [
    { t: "1) Condition nécessaire", h: R`<p>Inégalité triangulaire avec un point commun $x$.</p>`, b: R`<p>Supposons qu'un vecteur $x$ appartienne aux deux boules fermées :</p>$$N(x-a)\leqslant r\qquad\text{et}\qquad N(b-x)\leqslant s.$$<p>Par l'inégalité triangulaire :</p>$$N(b-a) = N\big((b-x)+(x-a)\big)\leqslant N(b-x)+N(x-a)\leqslant s+r.$$`, rappels: ["nrm-def"] },
    { t: "1) Condition suffisante", h: R`<p>Chercher $x$ sur le segment $[a,b]$, à la proportion $\frac r{r+s}$.</p>`, b: R`<p>Supposons $N(b-a)\leqslant r+s$.</p><ul><li><b>Si $r+s = 0$</b> : alors $N(b-a) = 0$, donc $a = b$, qui est dans les deux boules.</li><li><b>Sinon</b>, on pose $t = \frac r{r+s}\in[0,1]$ et $x = a+t(b-a)$.</li></ul><p>Alors $x-a = t(b-a)$ et $b-x = (1-t)(b-a)$, donc</p>$$\left\{\begin{aligned}N(x-a)&= \frac r{r+s}\,N(b-a)\leqslant r,\\N(b-x)&= \frac s{r+s}\,N(b-a)\leqslant s.\end{aligned}\right.$$<p>Le point $x$ est dans les deux boules.</p><div class="sbox"><p>$B_f(a,r)\cap B_f(b,s)\neq\emptyset\iff N(b-a)\leqslant r+s$.</p></div>` },
    { t: "2) Boules ouvertes", h: R`<p>Mêmes calculs avec des inégalités strictes.</p>`, b: R`<p><b>Nécessaire.</b> Si $x$ est dans les deux boules ouvertes, le même calcul donne</p>$$N(b-a)\leqslant N(b-x)+N(x-a)\lt s+r.$$<p><b>Suffisant.</b> Si $N(b-a)\lt r+s$, le même point $x = a+\frac r{r+s}(b-a)$ convient :</p>$$N(x-a) = \frac r{r+s}N(b-a)\lt r,\qquad N(b-x) = \frac s{r+s}N(b-a)\lt s.$$<div class="sbox"><p>$B(a,r)\cap B(b,s)\neq\emptyset\iff N(b-a)\lt r+s$.</p></div><p>Interprétation : comme pour des disques du plan, deux boules se rencontrent exactement quand la distance des centres est au plus la somme des rayons, et cela pour <b>n'importe quelle</b> norme.</p>` }
  ],
  piege: R`Le choix du point $x$ doit dépendre des rayons : le milieu de $[a,b]$ ne marche que si $r = s$.`,
  methode: R`Intersection de boules : nécessité par l'inégalité triangulaire, suffisance en se plaçant sur le segment qui joint les centres.`
},
{ id: "topo-82", ...P, level: 2, time: "20 min",
  title: "Diamètre d'une partie bornée",
  enonce: R`<p>Soit $(E,N)$ un espace normé. Pour une partie $A$ bornée non vide, on définit son <b>diamètre</b> :</p>$$\delta(A) = \sup_{(x,y)\in A^2}N(y-x).$$<ol><li>Justifier l'existence de cette borne supérieure.</li></ol><p>Soient $A$ et $B$ deux parties bornées non vides de $E$.</p><ol start="2"><li>Montrer que $A\subset B\Longrightarrow\delta(A)\leqslant\delta(B)$.</li><li>On suppose de plus $A\cap B\neq\emptyset$. Montrer que $\delta(A\cup B)\leqslant\delta(A)+\delta(B)$.</li></ol>`,
  decode: { donnees: [R`$A$ bornée : il existe $M$ avec $N(x)\leqslant M$ pour tout $x\in A$.`], but: R`Majorer l'ensemble des distances, puis découper selon l'appartenance de $x$ et $y$.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>Ensemble non vide et majoré par $2M$.</p>`, b: R`<p>Soit $M\geqslant0$ tel que $N(x)\leqslant M$ pour tout $x\in A$, et</p>$$\Delta_A = \{N(y-x) : (x,y)\in A^2\}.$$<ul><li>$\Delta_A$ est <b>non vide</b> : pour $x_0\in A$, il contient $N(x_0-x_0) = 0$.</li><li>$\Delta_A$ est <b>majoré</b> : pour $x,y\in A$, $N(y-x)\leqslant N(y)+N(x)\leqslant2M$.</li></ul><p>Donc $\delta(A) = \sup\Delta_A$ existe, et $0\leqslant\delta(A)\leqslant2M$.</p>`, rappels: ["nrm-sup"] },
    { t: "2) Croissance", h: R`<p>$A\subset B\Rightarrow\Delta_A\subset\Delta_B$.</p>`, b: R`<p>Si $A\subset B$, tout couple de $A^2$ est dans $B^2$, donc $\Delta_A\subset\Delta_B$ et</p>$$\delta(A) = \sup\Delta_A\leqslant\sup\Delta_B = \delta(B).$$` },
    { t: "3) Union de deux parties qui se coupent", h: R`<p>Fixer $z\in A\cap B$ ; quatre cas selon que $x,y$ sont dans $A$ ou $B$.</p>`, b: R`<p>Fixons $z\in A\cap B$ et soient $x,y\in A\cup B$.</p><ul><li><b>$x,y\in A$</b> : $N(y-x)\leqslant\delta(A)\leqslant\delta(A)+\delta(B)$.</li><li><b>$x,y\in B$</b> : $N(y-x)\leqslant\delta(B)\leqslant\delta(A)+\delta(B)$.</li><li><b>$x\in A$, $y\in B$</b> : on passe par $z$,</li></ul>$$N(y-x)\leqslant N(y-z)+N(z-x)\leqslant\delta(B)+\delta(A),$$<p>car $y,z\in B$ et $z,x\in A$.</p><ul><li><b>$x\in B$, $y\in A$</b> : de même, $N(y-x)\leqslant\delta(A)+\delta(B)$.</li></ul><p>Dans tous les cas $\delta(A)+\delta(B)$ majore $\Delta_{A\cup B}$, donc</p><div class="sbox">$$\delta(A\cup B)\leqslant\delta(A)+\delta(B).$$</div><p>Sans l'hypothèse $A\cap B\neq\emptyset$, c'est faux : $A = \{0\}$ et $B = \{b\}$ avec $b\neq0$ donnent $\delta(A) = \delta(B) = 0$ mais $\delta(A\cup B) = N(b)>0$.</p>` }
  ],
  piege: R`Le point commun $z$ sert de relais : sans lui, deux parties éloignées ont une union de grand diamètre.`,
  methode: R`Majorer un sup : majorer chaque élément de l'ensemble, en distinguant les cas.`
},
{ id: "topo-83", ...P, level: 2, time: "20 min",
  title: "Endomorphisme contractant : Ker(u − Id) ⊕ Im(u − Id) = E",
  enonce: R`<p>Soit $u$ un endomorphisme d'un espace normé $E$ de dimension finie, tel que</p>$$\forall x\in E,\quad\|u(x)\|\leqslant\|x\|.$$<p>Montrer que $\ker(u-\mathrm{Id}_E)$ et $\mathrm{Im}(u-\mathrm{Id}_E)$ sont supplémentaires.</p>`,
  decode: { donnees: [R`La norme est quelconque (pas forcément euclidienne).`], but: R`Montrer que l'intersection est nulle, puis conclure par le théorème du rang.`, cles: {} },
  steps: [
    { t: "Un vecteur de l'intersection", h: R`<p>$u(x) = x$ et $x = u(y)-y$ : calculer $u^k(y)$.</p>`, b: R`<p>Soit $x\in\ker(u-\mathrm{Id})\cap\mathrm{Im}(u-\mathrm{Id})$ :</p>$$\left\{\begin{aligned}&u(x) = x,\\&x = u(y)-y\ \text{ pour un certain }y\in E.\end{aligned}\right.$$<p><b>Récurrence.</b> Montrons $u^k(y) = y+kx$ pour tout $k\in\mathbb N$.</p><ul><li>$k = 0$ : clair.</li><li>Si $u^k(y) = y+kx$, alors $u^{k+1}(y) = u(y)+k\,u(x) = (y+x)+kx = y+(k+1)x$.</li></ul>` },
    { t: "La contraction force x = 0", h: R`<p>$\|u^k(y)\|\leqslant\|y\|$ pour tout $k$.</p>`, b: R`<p>En itérant l'hypothèse, $\|u^k(y)\|\leqslant\|y\|$. Donc, pour tout $k\geqslant1$ :</p>$$k\|x\| = \|(y+kx)-y\|\leqslant\|u^k(y)\|+\|y\|\leqslant2\|y\|,$$<p>soit $\|x\|\leqslant\frac{2\|y\|}k$. En faisant $k\to+\infty$ : $\|x\| = 0$, donc $x = 0$.</p>` },
    { t: "Conclusion par le rang", h: R`<p>$\dim\ker(u-\mathrm{Id})+\mathrm{rg}(u-\mathrm{Id}) = \dim E$.</p>`, b: R`<p>L'intersection est réduite à $\{0\}$, et le théorème du rang appliqué à $u-\mathrm{Id}$ donne</p>$$\dim\ker(u-\mathrm{Id})+\dim\mathrm{Im}(u-\mathrm{Id}) = \dim E.$$<div class="sbox">$$E = \ker(u-\mathrm{Id}_E)\oplus\mathrm{Im}(u-\mathrm{Id}_E).$$</div><p>Contre-exemple sans l'hypothèse : $u = \begin{pmatrix}1&1\\0&1\end{pmatrix}$, pour lequel $\ker(u-\mathrm{Id}) = \mathrm{Im}(u-\mathrm{Id}) = \mathrm{Vect}(e_1)$. On a bien $\|u^k(e_2)\| = \|ke_1+e_2\|\to+\infty$ : $u$ n'est contractant pour aucune norme.</p>` }
  ],
  piege: R`Avec une norme quelconque, on ne dispose ni de produit scalaire ni d'adjoint : l'argument doit n'utiliser que la norme (ici, la croissance linéaire de $u^k(y)$).`,
  methode: R`Pour montrer qu'un vecteur est nul : trouver une famille de majorations $\|x\|\leqslant\frac Ck$ et faire tendre $k$ vers l'infini.`
},
{ id: "topo-84", ...P, level: 2, time: "15 min",
  title: "Deux projecteurs proches ont le même rang",
  enonce: R`<p>Soit $E$ un $\mathbb K$-espace vectoriel normé par $N$, et $p,q$ deux projecteurs de $E$ tels que</p>$$\forall x\in E\setminus\{0\},\quad N\big((p-q)(x)\big)\lt N(x).$$<p>Montrer que $p$ et $q$ ont le même rang.</p>`,
  decode: { donnees: [R`$p^2 = p$, $q^2 = q$ ; $\ker p\oplus\mathrm{Im}\,p = E$.`], but: R`Raisonner par l'absurde : trouver $x\neq0$ dans $\ker p\cap\mathrm{Im}\,q$.`, cles: {} },
  steps: [
    { t: "Un vecteur commun", h: R`<p>Si $\mathrm{rg}\,p\lt\mathrm{rg}\,q$, alors $\dim\ker p+\dim\mathrm{Im}\,q>\dim E$.</p>`, b: R`<p>Par l'absurde, supposons $\mathrm{rg}(p)\neq\mathrm{rg}(q)$ ; quitte à échanger $p$ et $q$, $\mathrm{rg}(p)\lt\mathrm{rg}(q)$. Par le théorème du rang :</p>$$\dim\ker p+\dim\mathrm{Im}\,q = \dim E-\mathrm{rg}(p)+\mathrm{rg}(q)>\dim E.$$<p>Deux sous-espaces dont la somme des dimensions dépasse $\dim E$ ne sont pas en somme directe : il existe $x\neq0$ avec $x\in\ker p\cap\mathrm{Im}\,q$.</p>` },
    { t: "Contradiction", h: R`<p>$p(x) = 0$ et $q(x) = x$.</p>`, b: R`<p>Pour ce vecteur, $p(x) = 0$ et $q(x) = x$ (car $x\in\mathrm{Im}\,q$ et $q$ est un projecteur), donc</p>$$(p-q)(x) = -x\qquad\text{et}\qquad N\big((p-q)(x)\big) = N(x).$$<p>Cela contredit l'hypothèse $N((p-q)(x))\lt N(x)$. Donc :</p><div class="sbox"><p>$\mathrm{rg}(p) = \mathrm{rg}(q)$.</p></div>` }
  ],
  piege: R`L'argument de dimension suppose $E$ de dimension finie (comme les rangs).`,
  methode: R`Comparer deux dimensions : par l'absurde, fabriquer un vecteur dans une intersection trop grande.`
},
{ id: "topo-85", ...P, level: 2, time: "15 min",
  title: "Pas de norme invariante par conjugaison sur Mₙ(ℂ) (X)",
  enonce: R`<p>Soit $n\geqslant2$. Existe-t-il une norme $\|\cdot\|$ sur $\mathcal M_n(\mathbb C)$ invariante par conjugaison, c'est-à-dire telle que</p>$$\forall(A,P)\in\mathcal M_n(\mathbb C)\times GL_n(\mathbb C),\quad\|A\| = \|P^{-1}AP\|\ ?$$`,
  decode: { donnees: [R`Une norme sépare : $\|A\| = 0\Rightarrow A = 0$.`], but: R`Trouver $A\neq0$ semblable à $2A$.`, cles: {} },
  steps: [
    { t: "Une matrice semblable à son double", h: R`<p>$A = E_{12}$ et $P = \mathrm{diag}(1,2,1,\dots,1)$.</p>`, b: R`<p>Soit $A = E_{12}$ (un $1$ en position $(1,2)$, des $0$ ailleurs) et $P = \mathrm{diag}(1,2,1,\dots,1)$. Pour une matrice diagonale $P = \mathrm{diag}(d_i)$ :</p>$$(P^{-1}AP)_{ij} = \frac{d_j}{d_i}a_{ij},\qquad\text{donc}\qquad P^{-1}E_{12}P = \frac{d_2}{d_1}E_{12} = 2E_{12}.$$` },
    { t: "Conclusion", h: R`<p>$\|A\| = \|2A\| = 2\|A\|$.</p>`, b: R`<p>Si une telle norme existait :</p>$$\|A\| = \|P^{-1}AP\| = \|2A\| = 2\|A\|,$$<p>donc $\|A\| = 0$, alors que $A\neq0$ : contradiction.</p><div class="sbox"><p>Il n'existe aucune norme sur $\mathcal M_n(\mathbb C)$ invariante par conjugaison ($n\geqslant2$).</p></div><p>En revanche, il existe des fonctions invariantes par conjugaison (trace, déterminant, rayon spectral), mais aucune n'est une norme. Pour $n = 1$, la conjugaison est triviale et $|\cdot|$ convient.</p>` }
  ],
  piege: R`Le phénomène vient des matrices nilpotentes : $E_{12}$ est semblable à $\lambda E_{12}$ pour tout $\lambda\neq0$.`,
  methode: R`Pour réfuter l'existence d'une norme invariante : trouver $A\neq0$ semblable à $\lambda A$ avec $|\lambda|\neq1$.`
},
{ id: "topo-86", ...P, level: 2, time: "25 min",
  title: "Une inégalité sur N((f + g)⁻¹) pour la norme L¹",
  enonce: R`<p>On munit $E = \mathcal C([0,1],\mathbb R)$ de la norme $N(f) = \int_0^1|f(t)|\,dt$.</p><ol><li>Soient $a,b\geqslant0$ et $u,v>0$. Établir : $\sqrt a+\sqrt b = 1\Longrightarrow\dfrac1{u+v}\leqslant\dfrac au+\dfrac bv$.</li><li>Soient $f,g\in E$ avec $f,g>0$. Montrer que</li></ol>$$N\big((f+g)^{-1}\big)\leqslant\frac{N(f)^2N(f^{-1})+N(g)^2N(g^{-1})}{\big(N(f)+N(g)\big)^2}.$$<ol start="3"><li>En déduire que $N(f+g)\,N\big((f+g)^{-1}\big)\leqslant\max\big(N(f)N(f^{-1}),\,N(g)N(g^{-1})\big)$.</li></ol>`,
  decode: { donnees: [R`Pour $f>0$ continue, $f^{-1} = \frac1f$ est continue et positive.`], but: R`Une inégalité numérique, appliquée point par point puis intégrée.`, cles: {} },
  steps: [
    { t: "1) Mise au même dénominateur", h: R`<p>Faire apparaître un carré $(\sqrt{av}-\sqrt{bu})^2$.</p>`, b: R`<p>On calcule la différence :</p>$$\frac au+\frac bv-\frac1{u+v} = \frac{av(u+v)+bu(u+v)-uv}{uv(u+v)}.$$<p>Le numérateur se réécrit :</p>$$av^2+bu^2+(a+b-1)uv = \big(\sqrt{av}-\sqrt{bu}\big)^2+\big(a+b+2\sqrt{ab}-1\big)uv.$$<p>Si $\sqrt a+\sqrt b = 1$, alors $a+b+2\sqrt{ab} = (\sqrt a+\sqrt b)^2 = 1$ et</p>$$\frac au+\frac bv-\frac1{u+v} = \frac{\big(\sqrt{av}-\sqrt{bu}\big)^2}{uv(u+v)}\geqslant0.$$` },
    { t: "2) Application point par point", h: R`<p>$u = f(t)$, $v = g(t)$, puis intégrer ; choisir $a,b$.</p>`, b: R`<p>Soient $a,b\geqslant0$ avec $\sqrt a+\sqrt b = 1$. Pour tout $t\in[0,1]$, la question 1 avec $u = f(t)$, $v = g(t)$ donne $\frac1{f(t)+g(t)}\leqslant\frac a{f(t)}+\frac b{g(t)}$. En intégrant (fonctions positives) :</p>$$N\big((f+g)^{-1}\big)\leqslant a\,N(f^{-1})+b\,N(g^{-1}).$$<p>On choisit</p>$$a = \frac{N(f)^2}{\big(N(f)+N(g)\big)^2},\qquad b = \frac{N(g)^2}{\big(N(f)+N(g)\big)^2},$$<p>qui vérifient bien $\sqrt a+\sqrt b = \frac{N(f)+N(g)}{N(f)+N(g)} = 1$. On obtient l'inégalité demandée.</p>` },
    { t: "3) Conclusion", h: R`<p>$N(f+g)\leqslant N(f)+N(g)$, puis majorer par $M$.</p>`, b: R`<p>Notons $M = \max\big(N(f)N(f^{-1}),N(g)N(g^{-1})\big)$. Par l'inégalité triangulaire puis la question 2 :</p>$$\begin{aligned}N(f+g)N\big((f+g)^{-1}\big)&\leqslant\big(N(f)+N(g)\big)N\big((f+g)^{-1}\big)\\&\leqslant\frac{N(f)\cdot N(f)N(f^{-1})+N(g)\cdot N(g)N(g^{-1})}{N(f)+N(g)}\\&\leqslant\frac{N(f)M+N(g)M}{N(f)+N(g)} = M.\end{aligned}$$<div class="sbox">$$\begin{aligned}&N(f+g)\,N\big((f+g)^{-1}\big)\\&\qquad\leqslant\max\big(N(f)N(f^{-1}),\,N(g)N(g^{-1})\big).\end{aligned}$$</div>` }
  ],
  piege: R`Le choix de $a$ et $b$ n'est pas arbitraire : il est fait pour que la question 3 devienne une moyenne pondérée.`,
  methode: R`Inégalité intégrale : établir l'inégalité numérique, l'appliquer en chaque point, intégrer, puis optimiser les paramètres libres.`
},
{ id: "topo-87", ...P, level: 3, time: "40 min",
  title: "Polynômes de Tchebychev et polynômes unitaires de norme minimale (Centrale)",
  enonce: R`<p>Soit $n\in\mathbb N^*$ et $\|\cdot\|$ la norme uniforme sur $[-1,1]$.</p><ol><li>Montrer qu'il existe un unique polynôme $T_n$ tel que $T_n(\cos\theta) = \cos(n\theta)$ pour tout $\theta\in\mathbb R$.</li><li>Soit $P$ unitaire de degré $n$. Montrer que $\|P\|\geqslant\frac1{2^{n-1}}$. (On pourra s'intéresser aux valeurs de $P$ et $T_n$ aux points $\cos\frac{k\pi}n$.)</li><li>Cas d'égalité : montrer que $\|P\| = \frac1{2^{n-1}}\iff P = \frac1{2^{n-1}}T_n$.</li></ol>`,
  decode: { donnees: [R`$\cos((n+1)\theta)+\cos((n-1)\theta) = 2\cos\theta\cos(n\theta)$.`], but: R`Construire $T_n$ par récurrence ; puis comparer $P$ et $\frac{T_n}{2^{n-1}}$ aux $n+1$ points où $T_n = \pm1$, grâce à l'interpolation de Lagrange.`, cles: {} },
  steps: [
    { t: "1) Unicité et existence", h: R`<p>Unicité : infinité de racines. Existence : $T_{n+1} = 2XT_n-T_{n-1}$.</p>`, b: R`<p><b>Unicité.</b> Si $T$ et $T'$ conviennent, $T-T'$ s'annule en tout $\cos\theta$, donc sur $[-1,1]$ : c'est le polynôme nul.</p><p><b>Existence.</b> On pose</p>$$T_0 = 1,\qquad T_1 = X,\qquad T_{n+1} = 2XT_n-T_{n-1}.$$<p>Par récurrence double, grâce à la formule $\cos((n+1)\theta) = 2\cos\theta\cos(n\theta)-\cos((n-1)\theta)$, on a $T_n(\cos\theta) = \cos(n\theta)$.</p><p>La même récurrence montre que, pour $n\geqslant1$, $T_n$ est de degré $n$ et de coefficient dominant $2^{n-1}$.</p>`, rappels: ["nrm-cheb"] },
    { t: "2) Valeurs de Tchebychev aux points xₖ", h: R`<p>$x_k = \cos\frac{k\pi}n$, $0\leqslant k\leqslant n$ : $T_n(x_k) = (-1)^k$.</p>`, b: R`<p>Comme $T_n(\cos\theta) = \cos(n\theta)\in[-1,1]$ et vaut $1$ en $\theta = 0$ : $\|T_n\| = 1$. Posons</p>$$x_k = \cos\frac{k\pi}n\quad(0\leqslant k\leqslant n),\qquad x_0>x_1>\dots>x_n.$$<p>Ce sont $n+1$ points distincts de $[-1,1]$, et $T_n(x_k) = \cos(k\pi) = (-1)^k$.</p>${figCheb}` },
    { t: "2) Le coefficient dominant par Lagrange", h: R`<p>Pour $\deg P\leqslant n$ : coefficient de $X^n$ $= \sum_kP(x_k)/\omega'(x_k)$, avec $\omega = \prod(X-x_j)$.</p>`, b: R`<p>Soit $\omega = \prod_{j = 0}^n(X-x_j)$. Pour tout $P$ de degré $\leqslant n$, l'interpolation de Lagrange donne</p>$$P = \sum_{k = 0}^nP(x_k)L_k,\qquad L_k = \prod_{j\neq k}\frac{X-x_j}{x_k-x_j} = \frac1{\omega'(x_k)}\prod_{j\neq k}(X-x_j).$$<p>En lisant le coefficient de $X^n$ :</p>$$\mathrm{cd}_n(P) = \sum_{k = 0}^n\frac{P(x_k)}{\omega'(x_k)}.$$<p><b>Signe de $\omega'(x_k)$.</b> $\omega'(x_k) = \prod_{j\neq k}(x_k-x_j)$ ; les facteurs avec $j\lt k$ sont négatifs (car $x_j>x_k$), il y en a $k$. Donc</p>$$\frac{(-1)^k}{\omega'(x_k)} = \frac1{|\omega'(x_k)|}.$$`, rappels: ["eu-lagrange"] },
    { t: "2) La minoration", h: R`<p>Appliquer la formule à $\frac{T_n}{2^{n-1}}$, puis à $P$.</p>`, b: R`<p><b>Avec $\frac{T_n}{2^{n-1}}$</b> (unitaire, $T_n(x_k) = (-1)^k$) :</p>$$1 = \frac1{2^{n-1}}\sum_{k = 0}^n\frac{(-1)^k}{\omega'(x_k)} = \frac1{2^{n-1}}\sum_{k = 0}^n\frac1{|\omega'(x_k)|},$$<p>donc</p>$$\sum_{k = 0}^n\frac1{|\omega'(x_k)|} = 2^{n-1}.$$<p><b>Avec $P$ unitaire</b> :</p>$$1 = \sum_{k = 0}^n\frac{P(x_k)}{\omega'(x_k)}\leqslant\sum_{k = 0}^n\frac{|P(x_k)|}{|\omega'(x_k)|}\leqslant\|P\|\sum_{k = 0}^n\frac1{|\omega'(x_k)|} = 2^{n-1}\|P\|.$$<div class="sbox">$$\|P\|\geqslant\frac1{2^{n-1}}.$$</div>` },
    { t: "3) Cas d'égalité", h: R`<p>Égalité partout dans la chaîne : $P(x_k) = (-1)^k\|P\|$.</p>`, b: R`<p><b>Sens $\Leftarrow$.</b> $\big\|\frac{T_n}{2^{n-1}}\big\| = \frac1{2^{n-1}}$.</p><p><b>Sens $\Rightarrow$.</b> Si $\|P\| = \frac1{2^{n-1}}$, la chaîne précédente devient une suite d'égalités :</p><ul><li>$P(x_k)/\omega'(x_k) = |P(x_k)|/|\omega'(x_k)|$, donc $P(x_k)$ a le signe de $\omega'(x_k)$, c'est-à-dire de $(-1)^k$ ;</li><li>$|P(x_k)| = \|P\| = \frac1{2^{n-1}}$ pour tout $k$.</li></ul><p>Donc $P(x_k) = \frac{(-1)^k}{2^{n-1}} = \frac{T_n(x_k)}{2^{n-1}}$ pour $k = 0,\dots,n$. Le polynôme $P-\frac{T_n}{2^{n-1}}$ est de degré $\leqslant n-1$ (différence de deux unitaires de degré $n$) et a $n+1$ racines : il est nul.</p><div class="sbox">$$\|P\| = \frac1{2^{n-1}}\iff P = \frac{T_n}{2^{n-1}}.$$</div>` }
  ],
  piege: R`La méthode par « changements de signe » marche bien pour l'inégalité stricte mais devient délicate en cas d'égalité (racines doubles possibles) ; la formule de Lagrange traite les deux d'un coup.`,
  methode: R`Le coefficient dominant d'un polynôme de degré $\leqslant n$ est une combinaison linéaire de ses valeurs en $n+1$ points : $\sum P(x_k)/\omega'(x_k)$.`
},
{ id: "topo-88", ...P, level: 2, time: "30 min",
  title: "Matrices qui conservent la somme des carrés par conjugaison (Centrale)",
  enonce: R`<p>Soit $\varphi : \mathcal M_n(\mathbb R)\to\mathbb R$ qui associe à une matrice la somme des carrés de ses coefficients.</p><ol><li>Déterminer un produit scalaire dont $N : M\mapsto\sqrt{\varphi(M)}$ est la norme associée.</li><li>Montrer que deux matrices semblables n'ont pas nécessairement la même norme.</li><li>Montrer que deux matrices semblables par l'intermédiaire d'une matrice orthogonale ont la même norme.</li><li>Soit $A\in\mathcal M_n(\mathbb R)$. Calculer $AE_{ij}$ et $E_{ij}A$.</li><li>Trouver les $P\in GL_n(\mathbb R)$ telles que $\varphi(M) = \varphi(P^{-1}MP)$ pour toute $M$.</li></ol>`,
  decode: { donnees: [R`$\varphi(M) = \mathrm{tr}({}^tMM)$.`], but: R`Tester l'invariance sur des matrices élémentaires pour obtenir des conditions sur les lignes et colonnes de $P$.`, cles: {} },
  steps: [
    { t: "1) Le produit scalaire", h: R`<p>$\varphi(M) = \sum m_{ij}^2 = \mathrm{tr}({}^tMM)$.</p>`, b: R`<p>$N$ est la norme associée au produit scalaire canonique de $\mathcal M_n(\mathbb R)$ :</p>$$(A|B) = \mathrm{tr}({}^tAB) = \sum_{i,j}a_{ij}b_{ij},\qquad N(M)^2 = \mathrm{tr}({}^tMM) = \varphi(M).$$`, rappels: ["eu-tr"] },
    { t: "2) Contre-exemple", h: R`<p>Une matrice à valeurs propres distinctes et sa diagonalisée.</p>`, b: R`<p>Pour $n = 2$, prenons</p>$$A = \begin{pmatrix}1&1\\0&2\end{pmatrix},\qquad B = \begin{pmatrix}1&0\\0&2\end{pmatrix}.$$<p>$A$ a deux valeurs propres distinctes $1$ et $2$ : elle est diagonalisable, semblable à $B$. Mais $\varphi(A) = 6\neq5 = \varphi(B)$. (Pour $n\geqslant3$, compléter par des blocs nuls.)</p>` },
    { t: "3) Invariance orthogonale", h: R`<p>$P^{-1} = {}^tP$ et $\mathrm{tr}(XY) = \mathrm{tr}(YX)$.</p>`, b: R`<p>Pour $P\in O_n(\mathbb R)$, $P^{-1} = {}^tP$, donc</p>$$\begin{aligned}N(P^{-1}MP)^2&= \mathrm{tr}\big({}^t(P^{-1}MP)\,P^{-1}MP\big) = \mathrm{tr}\big({}^tP\,{}^tM\,P\,{}^tP\,MP\big)\\&= \mathrm{tr}\big({}^tP\,{}^tMMP\big) = \mathrm{tr}\big({}^tMM\,P\,{}^tP\big) = N(M)^2.\end{aligned}$$` },
    { t: "4) Produits par les matrices élémentaires", h: R`<p>$AE_{ij}$ agit sur les colonnes, $E_{ij}A$ sur les lignes.</p>`, b: R`<ul><li>$AE_{ij}$ a toutes ses colonnes nulles, sauf la $j$-ième, égale à la $i$-ième colonne de $A$.</li><li>$E_{ij}A$ a toutes ses lignes nulles, sauf la $i$-ième, égale à la $j$-ième ligne de $A$.</li></ul>` },
    { t: "5) Lignes et colonnes de même norme", h: R`<p>$M = PE_{ij}$ : $P^{-1}MP = E_{ij}P$.</p>`, b: R`<p>Soit $P$ solution, de colonnes $C_1,\dots,C_n$ et de lignes $L_1,\dots,L_n$. Avec $M = PE_{ij}$, on a $P^{-1}MP = E_{ij}P$, et la question 4 donne</p>$$\varphi(PE_{ij}) = \|C_i\|^2,\qquad\varphi(E_{ij}P) = \|L_j\|^2.$$<p>Donc $\|C_i\|^2 = \|L_j\|^2$ pour tous $i,j$ : toutes les lignes et toutes les colonnes de $P$ ont la même norme $\alpha$, avec $\alpha>0$ car $P$ est inversible.</p>` },
    { t: "5) Colonnes orthogonales et conclusion", h: R`<p>$M = PE_{ij}+PE_{i'j}$ avec $i\neq i'$.</p>`, b: R`<p>Soit $i'\neq i$ et $M = PE_{ij}+PE_{i'j}$ : sa seule colonne non nulle est la $j$-ième, égale à $C_i+C_{i'}$. Et $P^{-1}MP = E_{ij}P+E_{i'j}P$ a deux lignes non nulles (les $i$-ième et $i'$-ième), toutes deux égales à $L_j$. L'invariance donne</p>$$\|C_i+C_{i'}\|^2 = 2\|L_j\|^2,\qquad\text{soit}\qquad\alpha^2+2\langle C_i,C_{i'}\rangle+\alpha^2 = 2\alpha^2.$$<p>Donc $\langle C_i,C_{i'}\rangle = 0$ : les colonnes de $\frac1\alpha P$ forment une famille orthonormée, $\frac1\alpha P$ est orthogonale.</p><p><b>Réciproque.</b> Si $P = \alpha Q$ avec $Q\in O_n(\mathbb R)$, alors $P^{-1}MP = Q^{-1}MQ$, et la question 3 conclut.</p><div class="sbox"><p>Les matrices cherchées sont les $P = \alpha Q$ avec $\alpha>0$ et $Q\in O_n(\mathbb R)$ (similitudes).</p></div>` }
  ],
  piege: R`On ne peut pas conclure directement « $P$ orthogonale » : les multiples $\alpha Q$ conviennent aussi, car la conjugaison efface le facteur $\alpha$.`,
  methode: R`Pour déterminer les transformations qui conservent une quantité : la tester sur des matrices élémentaires $E_{ij}$ et leurs sommes.`
},
{ id: "topo-89", ...P, level: 1, time: "10 min",
  title: "Distance de la suite constante 1 aux suites de limite nulle",
  enonce: R`<p>On norme l'espace $\mathcal B(\mathbb N,\mathbb R)$ des suites réelles bornées par $\|\cdot\|_\infty$. Déterminer la distance de la suite $e$ constante égale à $1$ au sous-espace $\mathcal C_0$ des suites réelles de limite nulle.</p>`,
  decode: { donnees: [R`$d(e,\mathcal C_0) = \inf_{x\in\mathcal C_0}\|x-e\|_\infty$.`], but: R`Majorer avec la suite nulle, minorer en faisant tendre $n$ vers l'infini.`, cles: {} },
  steps: [
    { t: "Majoration", h: R`<p>$0\in\mathcal C_0$.</p>`, b: R`<p>La suite nulle est dans $\mathcal C_0$, donc</p>$$d(e,\mathcal C_0)\leqslant\|e-0\|_\infty = 1.$$`, rappels: ["nrm-dist"] },
    { t: "Minoration", h: R`<p>$|x_n-1|\leqslant\|x-e\|_\infty$ et $x_n\to0$.</p>`, b: R`<p>Soit $x\in\mathcal C_0$. Pour tout $n$ :</p>$$|x_n-1|\leqslant\|x-e\|_\infty.$$<p>En faisant $n\to+\infty$ ($x_n\to0$) : $1\leqslant\|x-e\|_\infty$. C'est vrai pour tout $x\in\mathcal C_0$, donc $d(e,\mathcal C_0)\geqslant1$.</p><div class="sbox">$$d(e,\mathcal C_0) = 1.$$</div><p>La distance est atteinte (par la suite nulle), et même par une infinité de suites : toute $x\in\mathcal C_0$ à valeurs dans $[0,2]$ convient.</p>` }
  ],
  piege: R`Pour minorer une borne inférieure, il faut une minoration valable pour <b>toutes</b> les suites $x\in\mathcal C_0$.`,
  methode: R`Distance à un sous-espace de suites : majorer par un élément explicite, minorer par passage à la limite dans l'inégalité coordonnée par coordonnée.`
},
{ id: "topo-90", ...P, level: 2, time: "15 min",
  title: "Distance de ((−1)ⁿ) aux suites convergentes",
  enonce: R`<p>On norme $\mathcal B(\mathbb N,\mathbb R)$ par $\|\cdot\|_\infty$. Déterminer la distance de la suite $u = \big((-1)^n\big)_{n\in\mathbb N}$ au sous-espace $\mathcal C$ des suites réelles convergentes.</p>`,
  decode: { donnees: [R`$u_{2p} = 1$, $u_{2p+1} = -1$.`], but: R`Majorer par la suite nulle ; minorer en regardant les termes pairs et impairs.`, cles: {} },
  steps: [
    { t: "Majoration", h: R`<p>La suite nulle converge.</p>`, b: R`<p>$0\in\mathcal C$, donc $d(u,\mathcal C)\leqslant\|u\|_\infty = 1$.</p>`, rappels: ["nrm-dist"] },
    { t: "Minoration", h: R`<p>Soit $x\in\mathcal C$ de limite $\ell$ : regarder $n = 2p$ et $n = 2p+1$.</p>`, b: R`<p>Soit $x\in\mathcal C$, de limite $\ell$. Pour tout $p$ :</p>$$\left\{\begin{aligned}|x_{2p}-1|&\leqslant\|x-u\|_\infty,\\|x_{2p+1}+1|&\leqslant\|x-u\|_\infty.\end{aligned}\right.$$<p>En faisant $p\to+\infty$ :</p>$$|\ell-1|\leqslant\|x-u\|_\infty\qquad\text{et}\qquad|\ell+1|\leqslant\|x-u\|_\infty.$$<p>Alors, par l'inégalité triangulaire :</p>$$2 = |(1+\ell)+(1-\ell)|\leqslant|1+\ell|+|1-\ell|\leqslant2\|x-u\|_\infty.$$<p>Donc $\|x-u\|_\infty\geqslant1$ pour tout $x\in\mathcal C$.</p><div class="sbox">$$d(u,\mathcal C) = 1.$$</div>` }
  ],
  piege: R`Une suite convergente ne peut pas être proche à la fois de $1$ (termes pairs) et de $-1$ (termes impairs) : sa limite est à distance $\geqslant1$ de l'un des deux.`,
  methode: R`Minorer $\|x-u\|_\infty$ en passant à la limite le long de sous-suites bien choisies.`
},
{ id: "topo-91", ...P, level: 2, time: "15 min",
  title: "Distance de la suite constante 1 aux suites de différences",
  enonce: R`<p>On norme $\mathcal B(\mathbb N,\mathbb R)$ par $\|\cdot\|_\infty$. Pour $x$ bornée, on note $\Delta x$ la suite $\Delta x(n) = x(n+1)-x(n)$, et $F = \{\Delta x : x\in\mathcal B(\mathbb N,\mathbb R)\}$. Déterminer la distance de la suite $e$ constante égale à $1$ au sous-espace $F$.</p>`,
  decode: { donnees: [R`$\sum_{k = 0}^{n-1}\Delta x(k) = x(n)-x(0)$ (télescopage).`], but: R`Montrer que $d(e,F) = 1$ par l'absurde : un $\Delta x$ trop proche de $1$ ferait croître $x$ sans borne.`, cles: {} },
  steps: [
    { t: "Majoration", h: R`<p>$0 = \Delta0\in F$.</p>`, b: R`<p>$0\in F$ (c'est $\Delta$ de la suite nulle), donc $d(e,F)\leqslant\|e\|_\infty = 1$.</p>`, rappels: ["nrm-dist"] },
    { t: "Minoration par l'absurde", h: R`<p>Si $\|\Delta x-e\|_\infty = \rho\lt1$, alors $\Delta x(k)\geqslant1-\rho>0$.</p>`, b: R`<p>Supposons $d(e,F)\lt1$ : il existe $x$ bornée avec $\|\Delta x-e\|_\infty = \rho\lt1$. Pour tout $k$ :</p>$$|\Delta x(k)-1|\leqslant\rho\qquad\Longrightarrow\qquad\Delta x(k)\geqslant1-\rho.$$<p>En sommant de $k = 0$ à $n-1$ (télescopage) :</p>$$x(n)-x(0)\geqslant n(1-\rho)\xrightarrow[n\to+\infty]{}+\infty.$$<p>Donc $x$ n'est pas bornée : contradiction.</p><div class="sbox">$$d(e,F) = 1.$$</div>` }
  ],
  piege: R`$F$ contient des suites arbitrairement proches de $e$ sur un nombre fini de termes, mais jamais uniformément : c'est la condition « $x$ bornée » qui l'interdit.`,
  methode: R`Distance à l'image d'un opérateur différence : télescoper pour revenir à la suite elle-même.`
},
{ id: "topo-92", ...P, level: 2, time: "15 min",
  title: "Distance d'une fonction « signe » aux fonctions continues",
  enonce: R`<p>Soit $E$ l'espace des fonctions bornées de $[-1,1]$ dans $\mathbb R$, normé par $\|f\|_\infty = \sup_{x\in[-1,1]}|f(x)|$. Déterminer la distance de la fonction</p>$$f : x\mapsto\left\{\begin{aligned}1&\quad\text{si }x\in\,]0,1]\\0&\quad\text{si }x = 0\\-1&\quad\text{si }x\in[-1,0[\end{aligned}\right.$$<p>au sous-espace $F$ des fonctions continues de $[-1,1]$ dans $\mathbb R$.</p>`,
  decode: { donnees: [R`$d(f,F) = \inf_{g\in F}\|f-g\|_\infty$.`], but: R`Majorer par $g = 0$ ; minorer en faisant tendre $x$ vers $0^\pm$.`, cles: {} },
  steps: [
    { t: "Majoration", h: R`<p>La fonction nulle est continue.</p>`, b: R`<p>$0\in F$, donc $d(f,F)\leqslant\|f\|_\infty = 1$.</p>`, rappels: ["nrm-dist"] },
    { t: "Minoration", h: R`<p>Pour $g$ continue : limites en $0^+$ et $0^-$.</p>`, b: R`<p>Soit $g\in F$.</p><ul><li>Pour $x>0$ : $|1-g(x)| = |f(x)-g(x)|\leqslant\|f-g\|_\infty$ ; quand $x\to0^+$, par continuité de $g$ : $|1-g(0)|\leqslant\|f-g\|_\infty$.</li><li>Pour $x\lt0$ : $|1+g(x)|\leqslant\|f-g\|_\infty$ ; quand $x\to0^-$ : $|1+g(0)|\leqslant\|f-g\|_\infty$.</li></ul><p>En sommant :</p>$$2 = |(1-g(0))+(1+g(0))|\leqslant|1-g(0)|+|1+g(0)|\leqslant2\|f-g\|_\infty.$$<p>Donc $\|f-g\|_\infty\geqslant1$ pour toute $g\in F$.</p><div class="sbox">$$d(f,F) = 1.$$</div><p>Interprétation : une fonction continue ne peut pas suivre un saut d'amplitude $2$ à moins d'une erreur de $1$ (la moitié du saut).</p>` }
  ],
  piege: R`La valeur $f(0) = 0$ ne joue aucun rôle : seules comptent les limites à gauche et à droite.`,
  methode: R`Distance d'une fonction discontinue aux fonctions continues : la moitié de l'amplitude du saut.`
}
]);
})();

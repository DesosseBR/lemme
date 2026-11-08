/* Commando X-ENS · Aller plus loin · Sujet « Le théorème de Bézout faible ». */
(() => {
const R = String.raw;
const { f1 } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 7, kind: "probleme", qnav: true, side: true, level: 5, plus: "bez",
  sujet: "Combien de points communs à deux courbes ? Le théorème de Bézout faible",
  sujetDesc: "Avec le résultant de deux polynômes, on montre que deux courbes algébriques de degrés d et d' sans composante commune se coupent en au plus dd' points, puis on l'illustre sur des coniques et sur deux rosaces." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

/* ---------- Figures (courbes en coordonnées polaires) ---------- */
const polar = (r, sc, cx, cy, n = 720) => { let d = ""; for (let k = 0; k <= n; k++) { const th = 2 * Math.PI * k / n, rr = r(th); d += `${k ? "L" : "M"}${f1(cx + sc * rr * Math.cos(th))} ${f1(cy - sc * rr * Math.sin(th))} `; } return d; };
const figRose = (() => {
  const cx = 230, cy = 170, sc = 140;
  const pts = [[0, 0], [0.76942, -0.55902], [-0.76942, -0.55902], [0.18164, 0.55902], [-0.18164, 0.55902]];
  return R`<figure class="fig"><svg viewBox="0 0 460 340" width="460" height="340" role="img" aria-label="Quadrifolium et trifolium">
<line x1="40" y1="${cy}" x2="420" y2="${cy}" class="ax"/><line x1="${cx}" y1="20" x2="${cx}" y2="320" class="ax"/>
<path d="${polar(t => Math.sin(2 * t), sc, cx, cy)}" class="vb" style="fill:none;stroke-width:2"/>
<path d="${polar(t => -Math.sin(3 * t), sc, cx, cy)}" class="vr" style="fill:none;stroke-width:2;stroke-dasharray:6 4"/>
${pts.map(([x, y]) => `<circle cx="${f1(cx + sc * x)}" cy="${f1(cy - sc * y)}" r="5" class="pt"/>`).join("")}
<text x="400" y="40" class="sm b" text-anchor="end">quadrifolium (degré 6)</text><text x="400" y="58" class="sm r" text-anchor="end">trifolium (degré 4)</text></svg>
<figcaption>Le quadrifolium $(x^2+y^2)^3 = 4x^2y^2$ (trait plein) et le trifolium $(x^2+y^2)^2+3x^2y-y^3 = 0$ (pointillés). Ils ont $5$ points réels communs (en noir), bien moins que la borne $6\times4 = 24$.</figcaption></figure>`;
})();
const figConiques = (() => {
  const cx = 200, cy = 130, sc = 70;
  return R`<figure class="fig"><svg viewBox="0 0 400 260" width="400" height="260" role="img" aria-label="Cercle et ellipse tangents">
<line x1="30" y1="${cy}" x2="370" y2="${cy}" class="ax"/><line x1="${cx}" y1="15" x2="${cx}" y2="245" class="ax"/>
<ellipse cx="${cx}" cy="${cy}" rx="${sc}" ry="${sc}" class="vb" style="fill:none;stroke-width:2"/>
<ellipse cx="${cx}" cy="${cy}" rx="${2 * sc}" ry="${sc}" class="vr" style="fill:none;stroke-width:2;stroke-dasharray:6 4"/>
<circle cx="${cx}" cy="${cy - sc}" r="5" class="pt"/><circle cx="${cx}" cy="${cy + sc}" r="5" class="pt"/>
<text x="${cx + 8}" y="${cy - sc - 8}" class="sm">(0, 1)</text><text x="${cx + 8}" y="${cy + sc + 18}" class="sm">(0, −1)</text></svg>
<figcaption>Le cercle $x^2+y^2 = 1$ et l'ellipse $x^2+4y^2 = 4$ se touchent en $(0,1)$ et $(0,-1)$ : deux points de <b>même abscisse</b>.</figcaption></figure>`;
})();

LEMME.rappels({
  "bez-fact": { t: "Polynômes à deux indéterminées", b: R`$$\deg(X^iY^j) = i+j;\qquad P = \sum_ka_k(X)Y^k,\ \deg P = d\ \Longrightarrow\ \deg a_k+k\leqslant d.$$` },
  "bez-res": { t: "Résultant et facteur commun (admis)", b: R`$$\operatorname{Res}(P,Q) = 0\iff P,Q\text{ ont un facteur commun de degré}\geqslant1\text{ en }Y.$$` },
  "bez-det": { t: "Déterminant", b: R`$$\det M = \sum_{\sigma\in\mathfrak S_N}\varepsilon(\sigma)\prod_{j = 1}^NM_{\sigma(j),j} = \sum_jM_{1,j}C_{1,j}.$$<p>$L_i\leftarrow L_i+\sum_{k\neq i}\lambda_kL_k$ ne change pas $\det$.</p>` },
  "bez-racines": { t: "Nombre de racines", b: R`$$P\neq0,\ \deg P = m\ \Longrightarrow\ \operatorname{Card}\{\text{racines}\}\leqslant m.$$` },
  "bez-subst": { t: "Changement de variable linéaire", b: R`$$\theta : F(X,Y)\mapsto F(X-uY,Y),\qquad\theta^{-1} : F(X,Y)\mapsto F(X+uY,Y),\qquad\deg\theta(F) = \deg F.$$` }
});

const PRE = R`<p class="pl-pre"><b>Notations pour tout le sujet.</b> $\mathbb K$ est un corps <b>infini</b> (par exemple $\mathbb R$ ou $\mathbb C$). Pour $F\in\mathbb K[X,Y]$, $V(F) = \{(x,y)\in\mathbb K^2 : F(x,y) = 0\}$. Soit $\mathbb A$ un anneau commutatif intègre et $P = \sum_{k=0}^pa_kY^k$, $Q = \sum_{k=0}^qb_kY^k$ dans $\mathbb A[Y]$, avec $p,q\geqslant1$ et $a_pb_q\neq0$. La <b>matrice de Sylvester</b> $\operatorname{Syl}(P,Q)\in\mathcal M_{p+q}(\mathbb A)$ a pour colonnes les coefficients de $P,YP,\dots,Y^{q-1}P,Q,YQ,\dots,Y^{p-1}Q$ dans la base $1,Y,\dots,Y^{p+q-1}$ : $$\operatorname{Syl}_{i,j} = \begin{cases}a_{i-j}&\text{si }1\leqslant j\leqslant q\\b_{i-j+q}&\text{si }q\lt j\leqslant p+q\end{cases}$$ (avec $a_k = b_k = 0$ si $k$ est hors de $[0,p]$, resp. $[0,q]$). Le <b>résultant</b> est $\operatorname{Res}(P,Q) = \det\operatorname{Syl}(P,Q)$.</p>`;

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "bez-1", ...P, part: "Partie I", time: "40 min",
  title: "Le résultant",
  enonce: PRE + R`<p><b>Partie I. Le résultant.</b></p><ol start="1">
<li>Montrer qu'il existe $U,V\in\mathbb A[Y]$ tels que $\operatorname{Res}(P,Q) = UP+VQ$.</li>
<li>On prend $\mathbb A = \mathbb K[X]$, de sorte que $P,Q\in\mathbb K[X,Y]$, et on note $R(X) = \operatorname{Res}_Y(P,Q)$. Montrer que si $(x,y)\in V(P)\cap V(Q)$, alors $R(x) = 0$.</li>
<li>Exemple : $P = Y^2+X^2-1$ (cercle) et $Q = X-Y$ (droite). Écrire $\operatorname{Syl}(P,Q)$, calculer $R$, et en déduire $V(P)\cap V(Q)$. Trouver $U,V$ explicites.</li></ol>`,
  decode: { donnees: [R`Un point commun annule $P$ et $Q$ en même temps.`], but: R`Éliminer $y$ : fabriquer un polynôme en $X$ seul qui s'annule sur les abscisses des points communs.`, cles: {} },
  steps: [
    Q(1, "Le résultant est une combinaison de P et Q", R`<p>Ajoute à la première ligne les lignes $i\geqslant2$ multipliées par $Y^{i-1}$, puis développe selon cette ligne.</p>`, R`<p>On travaille dans $\mathcal M_{p+q}(\mathbb A[Y])$. La ligne $i$ de $\operatorname{Syl}$ correspond au monôme $Y^{i-1}$. Effectuons</p>$$L_1\leftarrow L_1+\sum_{i=2}^{p+q}Y^{i-1}L_i,$$<p>ce qui ne change pas le déterminant. Le nouveau coefficient de la colonne $j$ sur la ligne $1$ est $\sum_iY^{i-1}\operatorname{Syl}_{i,j}$, c'est-à-dire le polynôme dont la colonne $j$ donne les coefficients :</p>$$Y^{j-1}P\ \ (j\leqslant q),\qquad Y^{j-q-1}Q\ \ (j\gt q).$$<p>On développe selon la première ligne, $C_{1,j}$ désignant les cofacteurs (qui sont dans $\mathbb A$) :</p>$$\operatorname{Res}(P,Q) = \sum_{j\leqslant q}Y^{j-1}P\,C_{1,j}+\sum_{j\gt q}Y^{j-q-1}Q\,C_{1,j} = UP+VQ,$$<p>avec $U = \sum_{j\leqslant q}C_{1,j}Y^{j-1}$ et $V = \sum_{j\gt q}C_{1,j}Y^{j-q-1}$.</p>`, ["bez-det"]),
    Q(2, "Le résultant s'annule aux abscisses communes", R`<p>Évalue $R = UP+VQ$ au point $(x,y)$.</p>`, R`<p>Dans $\mathbb K[X][Y] = \mathbb K[X,Y]$, la question 1 donne $R(X) = U(X,Y)P(X,Y)+V(X,Y)Q(X,Y)$. En évaluant en $(x,y)$ commun à $V(P)$ et $V(Q)$ :</p>$$R(x) = U(x,y)\cdot0+V(x,y)\cdot0 = 0.$$<div class="sbox"><p style="margin:0">Les abscisses des points communs sont des racines du polynôme $R(X) = \operatorname{Res}_Y(P,Q)$, dans lequel $Y$ a été éliminé.</p></div>`),
    Q(3, "Un cercle et une droite", R`<p>$p = 2$, $q = 1$ : matrice $3\times3$. Colonne 1 : $P$ ; colonnes 2 et 3 : $Q$ et $YQ$.</p>`, R`<p>En $Y$ : $P = 1\cdot Y^2+0\cdot Y+(X^2-1)$, donc $a_2 = 1$, $a_1 = 0$, $a_0 = X^2-1$ ; $Q = -Y+X$, donc $b_1 = -1$, $b_0 = X$. Ici $q = 1$ : la colonne 1 contient $P$, les colonnes 2 et 3 contiennent $Q$ et $YQ$ (lignes : coefficients de $1,Y,Y^2$) :</p>$$\operatorname{Syl}(P,Q) = \begin{pmatrix}\chg{X^2-1}&\chg{X}&0\\0&\chg{-1}&X\\\chg{1}&0&-1\end{pmatrix}.$$<p>Développement selon la première ligne :</p>$$\begin{aligned}R &= (X^2-1)\begin{vmatrix}-1&X\\0&-1\end{vmatrix}-X\begin{vmatrix}0&X\\1&-1\end{vmatrix}+0\\&= (X^2-1)\cdot1-X\cdot(0-X) = 2X^2-1.\end{aligned}$$<p>Par la question 2, l'abscisse $x$ d'un point commun vérifie $2x^2 = 1$, soit $x = \pm\frac1{\sqrt2}$, et $y = x$ (équation de la droite). Réciproquement ces points conviennent : $\frac12+\frac12 = 1$.</p><div class="sbox">$$V(P)\cap V(Q) = \Big\{\big(\tfrac1{\sqrt2},\tfrac1{\sqrt2}\big),\ \big(-\tfrac1{\sqrt2},-\tfrac1{\sqrt2}\big)\Big\}.$$</div><p><b>$U$ et $V$ explicites</b> : $(X-Y)(X+Y) = X^2-Y^2$, donc $$P+(X+Y)\,Q = Y^2+X^2-1+X^2-Y^2 = 2X^2-1 = R.$$ On peut prendre $U = 1$, $V = X+Y$.</p>`)
  ],
  piege: R`$R(x) = 0$ ne garantit pas l'existence d'un point commun d'abscisse $x$ dans $\mathbb K^2$ (la racine commune en $y$ peut ne pas être dans $\mathbb K$) : il faut toujours revenir aux équations.`,
  methode: R`Le résultant « élimine » une variable : pour résoudre $P = Q = 0$, on calcule $\operatorname{Res}_Y(P,Q)$, on trouve ses racines $x$, puis on cherche les $y$ correspondants.`
},

/* ===================== Partie II ===================== */
{ id: "bez-2", ...P, part: "Partie II", time: "40 min",
  title: "Le degré du résultant",
  enonce: PRE + R`<p><b>Partie II.</b> Soient $P,Q\in\mathbb K[X,Y]$ de degrés totaux $d$ et $d'$, écrits $P = \sum_{k=0}^pa_k(X)Y^k$ et $Q = \sum_{k=0}^qb_k(X)Y^k$ avec $p,q\geqslant1$, $a_pb_q\neq0$. On note $R = \operatorname{Res}_Y(P,Q)\in\mathbb K[X]$.</p><ol start="4">
<li>Montrer que $\deg a_k\leqslant d-k$, $\deg b_k\leqslant d'-k$, $p\leqslant d$ et $q\leqslant d'$.</li>
<li>Soit $\sigma\in\mathfrak S_{p+q}$ tel que le produit $\prod_j\operatorname{Syl}_{\sigma(j),j}$ soit non nul. Montrer que son degré est au plus $qd+pd'-pq$.</li>
<li>En déduire que $\deg R\leqslant dd'-(d-p)(d'-q)\leqslant dd'$.</li></ol>`,
  decode: { donnees: [R`Le degré total contrôle à la fois le degré en $X$ et le degré en $Y$.`], but: R`Borner le nombre de racines de $R$, donc le nombre d'abscisses possibles.`, cles: {} },
  steps: [
    Q(4, "Degrés des coefficients", R`<p>Le monôme $X^iY^k$ de $a_k(X)Y^k$ est de degré total $i+k\leqslant d$.</p>`, R`<p>Si $a_k\neq0$, le terme dominant de $a_k(X)Y^k$ est $cX^{\deg a_k}Y^k$, monôme de $P$ de degré total $\deg a_k+k\leqslant d$. Donc $\deg a_k\leqslant d-k$ (si $a_k = 0$, il n'y a rien à montrer : on convient que $\deg0 = -\infty$).</p><p>En particulier, $a_p\neq0$ donne $0\leqslant\deg a_p\leqslant d-p$, donc $p\leqslant d$. De même pour $Q$ : $\deg b_k\leqslant d'-k$ et $q\leqslant d'$.</p><p>Exemple : $P = Y^2+X^2-1$, $d = 2$ : $\deg a_0 = 2\leqslant2-0$, $\deg a_2 = 0\leqslant2-2$.</p>`, ["bez-fact"]),
    Q(5, "Degré d'un terme du déterminant", R`<p>Additionne les majorations de la question 4 colonne par colonne ; la somme des $j-\sigma(j)$ est nulle.</p>`, R`<p>Le produit est non nul, donc chaque facteur l'est. Pour $j\leqslant q$, $\operatorname{Syl}_{\sigma(j),j} = a_{\sigma(j)-j}$, de degré $\leqslant d-\sigma(j)+j$. Pour $j\gt q$, $\operatorname{Syl}_{\sigma(j),j} = b_{\sigma(j)-j+q}$, de degré $\leqslant d'-\sigma(j)+j-q$. Le degré d'un produit est la somme des degrés :</p>$$\begin{aligned}\deg\prod_j\operatorname{Syl}_{\sigma(j),j}&\leqslant\sum_{j=1}^q\big(d+j-\sigma(j)\big)+\sum_{j=q+1}^{p+q}\big(d'-q+j-\sigma(j)\big)\\&= qd+p(d'-q)+\sum_{j=1}^{p+q}\big(j-\sigma(j)\big).\end{aligned}$$<p>Comme $\sigma$ est une permutation de $\{1,\dots,p+q\}$, $\sum_j\sigma(j) = \sum_jj$, et la dernière somme est nulle :</p><div class="sbox">$$\deg\prod_j\operatorname{Syl}_{\sigma(j),j}\leqslant qd+pd'-pq.$$</div>`, ["bez-det"]),
    Q(6, "La borne d fois d prime", R`<p>$R$ est la somme de ces termes. Factorise $dd'-(qd+pd'-pq)$.</p>`, R`<p>$R = \sum_\sigma\varepsilon(\sigma)\prod_j\operatorname{Syl}_{\sigma(j),j}$, et le degré d'une somme est au plus le maximum des degrés : $\deg R\leqslant qd+pd'-pq$. Or</p>$$dd'-(qd+pd'-pq) = (d-p)(d'-q)\geqslant0$$<p>(développer le membre de droite), car $p\leqslant d$ et $q\leqslant d'$. Donc</p><div class="sbox">$$\deg R\leqslant dd'-(d-p)(d'-q)\leqslant dd'.$$</div><p>Vérification sur l'exemple de la question 3 : $d = 2$, $d' = 1$, $p = 2$, $q = 1$ ; borne $2$, et $\deg(2X^2-1) = 2$.</p>`)
  ],
  piege: R`Majorer brutalement chaque coefficient par $d$ ou $d'$ : on obtiendrait une borne bien plus grande que $dd'$. C'est la compensation $\sum(j-\sigma(j)) = 0$ qui fait tout.`,
  methode: R`Pour majorer le degré d'un déterminant, majorer celui de chaque terme $\prod_jM_{\sigma(j),j}$ par une formule du type $\alpha_j-\beta_{\sigma(j)}$ : la somme sur une permutation se simplifie.`
},

/* ===================== Partie III ===================== */
{ id: "bez-3", ...P, part: "Partie III", time: "50 min",
  title: "Le théorème de Bézout faible",
  enonce: PRE + R`<p><b>Partie III.</b> Soient $P,Q\in\mathbb K[X,Y]$ non constants, de degrés totaux $d,d'$, sans facteur irréductible commun. On note $Z = V(P)\cap V(Q)$ et on veut montrer $|Z|\leqslant dd'$.</p><ol start="7">
<li>On suppose que $P$ ne dépend pas de $Y$ (c'est-à-dire $P\in\mathbb K[X]$). Montrer que $|Z|\leqslant dd'$. Que dire si $Q\in\mathbb K[X]$, ou si $P$ ou $Q$ ne dépend pas de $X$ ?</li>
<li>On suppose désormais que $P$ et $Q$ dépendent de $Y$. Montrer que $R = \operatorname{Res}_Y(P,Q)$ est non nul, puis que $Z$ est fini.</li>
<li>On écrit $Z = \{(x_1,y_1),\dots,(x_s,y_s)\}$. Montrer qu'il existe $u\in\mathbb K$ tel que les $x_i+uy_i$ soient deux à deux distincts.</li>
<li>On pose $\tilde P(X,Y) = P(X-uY,Y)$ et $\tilde Q(X,Y) = Q(X-uY,Y)$. Montrer que $\tilde P,\tilde Q$ ont pour degrés totaux $d,d'$, n'ont pas de facteur irréductible commun, et que $(x,y)\mapsto(x+uy,y)$ est une bijection de $Z$ sur $\tilde Z = V(\tilde P)\cap V(\tilde Q)$.</li>
<li>Conclure : $|Z|\leqslant dd'$.</li></ol>`,
  decode: { donnees: [R`Partie I : les abscisses des points communs sont racines de $R$.`, R`Partie II : $\deg R\leqslant dd'$.`], but: R`Il reste un obstacle : plusieurs points peuvent avoir la même abscisse. Un changement de variable les sépare.`, cles: {} },
  steps: [
    Q(7, "Le cas où une variable manque", R`<p>Les abscisses sont parmi les racines de $P$ ; pour chacune, $Q(x,Y)$ n'est pas le polynôme nul.</p>`, R`<p>$P\in\mathbb K[X]$ est non constant de degré $d$ : il a au plus $d$ racines $x$. Pour une telle racine, $X-x$ divise $P$ et est irréductible. Si $Q(x,Y)$ était le polynôme nul, alors $X-x$ diviserait $Q$ (division par $X-x$, unitaire en $X$, dans $\mathbb K[Y][X]$ : le reste est $Q(x,Y) = 0$), et $X-x$ serait un facteur irréductible commun : exclu.</p><p>Donc $Q(x,Y)\in\mathbb K[Y]$ est non nul, de degré $\leqslant d'$ : au plus $d'$ valeurs de $y$. Au total, au plus $d\cdot d'$ points.</p><p>Les autres cas sont identiques en échangeant les rôles de $P$ et $Q$, ou de $X$ et $Y$.</p>`, ["bez-racines"]),
    Q(8, "R est non nul et Z est fini", R`<p>Propriété admise du résultant dans l'anneau factoriel $\mathbb K[X]$. Pour la finitude, élimine aussi $X$.</p>`, R`<p><b>$R\neq0$.</b> $P$ et $Q$ sont de degrés $p,q\geqslant1$ en $Y$, à coefficients dans l'anneau factoriel $\mathbb A = \mathbb K[X]$. Si $R = 0$, ils auraient un facteur commun de degré $\geqslant1$ en $Y$, donc un facteur irréductible commun (un de ses facteurs irréductibles) : exclu. Donc $R\neq0$.</p><p><b>$Z$ est fini.</b> Par la question 2, l'abscisse de tout point de $Z$ est racine de $R\neq0$ : au plus $\deg R\leqslant dd'$ valeurs. En échangeant les rôles de $X$ et $Y$, $S(Y) = \operatorname{Res}_X(P,Q)$ est non nul (ou on est dans le cas de la question 7) et l'ordonnée de tout point est racine de $S$. Donc $Z$ est contenu dans un produit de deux ensembles finis :</p>$$Z\subset\{R = 0\}\times\{S = 0\},\qquad|Z|\leqslant(dd')^2.$$<p>C'est fini, mais pas encore la borne voulue : plusieurs points peuvent partager la même abscisse.</p>`, ["bez-res"]),
    Q(9, "Séparer les abscisses", R`<p>$x_i+uy_i = x_j+uy_j$ n'arrive que pour une valeur de $u$ (si $y_i\neq y_j$). $\mathbb K$ est infini.</p>`, R`<p>Soient $i\neq j$. Les points étant distincts, $(x_i,y_i)\neq(x_j,y_j)$.</p><ul><li>Si $y_i = y_j$, alors $x_i\neq x_j$, et $x_i+uy_i\neq x_j+uy_j$ pour tout $u$.</li><li>Si $y_i\neq y_j$, l'égalité $x_i+uy_i = x_j+uy_j$ équivaut à $u = \dfrac{x_j-x_i}{y_i-y_j}$ : une seule valeur interdite.</li></ul><p>Il y a donc au plus $\binom s2$ valeurs interdites. Comme $\mathbb K$ est <b>infini</b>, on peut choisir $u$ en dehors.</p>`),
    Q(10, "Le changement de variable", R`<p>$\theta : F\mapsto F(X-uY,Y)$ est un automorphisme d'anneau qui conserve le degré total.</p>`, R`<p><b>Degrés.</b> Remplacer $X$ par $X-uY$ transforme un monôme de degré $k$ en une somme de monômes de degré $k$ : $\deg\tilde P\leqslant d$. Par la transformation inverse ($X\leftarrow X+uY$), $d\leqslant\deg\tilde P$. Donc $\deg\tilde P = d$, et de même $\deg\tilde Q = d'$.</p><p><b>Pas de facteur commun.</b> Si $W$ irréductible divise $\tilde P$ et $\tilde Q$, alors $W(X+uY,Y)$ divise $\tilde P(X+uY,Y) = P$ et $Q$ ; il est irréductible car $\theta^{-1}$ est un automorphisme d'anneau. Contradiction.</p><p><b>Bijection.</b> Pour $(a,b)\in\mathbb K^2$ :</p>$$\begin{aligned}(a,b)\in Z&\iff P(a,b) = Q(a,b) = 0\\&\iff P\big((a+ub)-ub,\,b\big) = Q\big((a+ub)-ub,\,b\big) = 0\\&\iff\tilde P(a+ub,b) = \tilde Q(a+ub,b) = 0\iff(a+ub,b)\in\tilde Z.\end{aligned}$$<p>L'application $(a,b)\mapsto(a+ub,b)$ est une bijection de $\mathbb K^2$ (réciproque $(c,b)\mapsto(c-ub,b)$) qui envoie $Z$ sur $\tilde Z$ : $|Z| = |\tilde Z|$.</p>`, ["bez-subst"]),
    Q(11, "Conclusion", R`<p>Les points de $\tilde Z$ ont des abscisses distinctes, toutes racines de $\tilde R$.</p>`, R`<p>Les points de $\tilde Z$ sont les $(x_i+uy_i,y_i)$, d'abscisses deux à deux distinctes (question 9).</p><ul><li>Si $\tilde P$ ou $\tilde Q$ ne dépend pas de $Y$, la question 7 donne directement $|\tilde Z|\leqslant dd'$.</li><li>Sinon, $\tilde R = \operatorname{Res}_Y(\tilde P,\tilde Q)$ est non nul (question 8) et de degré $\leqslant dd'$ (Partie II, avec les degrés $d,d'$ de la question 10). Les $s$ abscisses distinctes des points de $\tilde Z$ sont des racines de $\tilde R$ (question 2), donc $s\leqslant\deg\tilde R\leqslant dd'$.</li></ul><div class="sbox"><p style="margin:0"><b>Bézout faible.</b> Deux courbes $V(P)$, $V(Q)$ de degrés $d$, $d'$, sans composante commune, ont au plus $dd'$ points communs.</p></div><p>Exemples : deux droites distinctes, au plus $1$ point ; une droite et un cercle, au plus $2$ ; deux coniques, au plus $4$.</p>`)
  ],
  piege: R`Sans l'hypothèse « sans facteur commun », $Z$ peut être infini : $P = Q = Y-X$ s'annulent sur toute une droite.`,
  methode: R`Quand une projection écrase plusieurs points sur un seul, on fait d'abord un changement de coordonnées « générique » (possible car le corps est infini) pour qu'elle devienne injective sur l'ensemble fini étudié.`
},

/* ===================== Partie IV ===================== */
{ id: "bez-4", ...P, part: "Partie IV", time: "30 min",
  title: "Deux exemples géométriques",
  enonce: PRE + R`<p><b>Partie IV.</b> Ici $\mathbb K = \mathbb R$.</p><ol start="12">
<li>Soient $P = X^2+Y^2-1$ et $Q = X^2+4Y^2-4$. Calculer $V(P)\cap V(Q)$ et $\operatorname{Res}_Y(P,Q)$. Combien $\operatorname{Res}_Y(P,Q)$ a-t-il de racines distinctes ? Expliquer le rôle du changement de variable de la question 10 sur cet exemple.</li>
<li>Le quadrifolium $V(P_4)$, $P_4 = (X^2+Y^2)^3-4X^2Y^2$, et le trifolium $V(P_3)$, $P_3 = (X^2+Y^2)^2+3X^2Y-Y^3$, n'ont pas de composante commune (on l'admet). Que donne le théorème ? En polaires, montrer que les courbes ont pour équations $r = \sin2\theta$ et $r = -\sin3\theta$.</li></ol>`,
  decode: { donnees: [R`Bézout faible (Partie III).`], but: R`Voir la borne en action, et quand elle n'est pas atteinte.`, cles: {} },
  steps: [
    Q(12, "Un cercle et une ellipse : les points communs", R`<p>Soustrais les équations.</p>`, R`<p>On résout $x^2+y^2 = 1$ et $x^2+4y^2 = 4$. En soustrayant : $3y^2 = 3$, donc $y = \pm1$, puis $x^2 = 1-1 = 0$. Donc</p><div class="sbox">$$V(P)\cap V(Q) = \{(0,1),\ (0,-1)\},$$</div><p>deux points ($\leqslant2\times2 = 4$), qui ont la <b>même abscisse</b> $0$.</p>${figConiques}`),
    Q(12, "Le résultant et le changement de variable", R`<p>Matrice $4\times4$ ; elle se découpe en deux blocs $2\times2$.</p>`, R`<p>En $Y$ : $a = (a_0,a_1,a_2) = (X^2-1,0,1)$ et $b = (b_0,b_1,b_2) = (X^2-4,0,4)$, avec $p = q = 2$ :</p>$$\operatorname{Syl}(P,Q) = \begin{pmatrix}X^2-1&0&X^2-4&0\\0&X^2-1&0&X^2-4\\1&0&4&0\\0&1&0&4\end{pmatrix}.$$<p>Les lignes et colonnes d'indices $\{1,3\}$ et $\{2,4\}$ forment deux blocs indépendants (en permutant de la même façon lignes et colonnes, le déterminant ne change pas) :</p>$$R = \begin{vmatrix}X^2-1&X^2-4\\1&4\end{vmatrix}^2$$$$= \big(4(X^2-1)-(X^2-4)\big)^2 = (3X^2)^2 = 9X^4.$$<p>$R$ est de degré $4\leqslant dd' = 4$, mais n'a qu'<b>une</b> racine distincte, $x = 0$, alors qu'il y a deux points : compter les racines distinctes de $R$ ne suffit pas ici.</p><p><b>Après changement de variable</b> avec $u = 1$ : les points deviennent $(0+1\cdot1,1) = (1,1)$ et $(0-1,-1) = (-1,-1)$, d'abscisses distinctes. Le résultant $\tilde R$ des nouveaux polynômes a alors (au moins) deux racines distinctes $1$ et $-1$, et l'argument de la question 11 s'applique.</p>`),
    Q(13, "Le quadrifolium et le trifolium", R`<p>$x = r\cos\theta$, $y = r\sin\theta$ ; utilise $\sin3\theta = 3\sin\theta-4\sin^3\theta$.</p>`, R`<p><b>La borne.</b> $\deg P_4 = 6$, $\deg P_3 = 4$ : les courbes ont au plus $6\times4 = 24$ points communs.</p><p><b>Quadrifolium.</b> $(x^2+y^2)^3 = r^6$ et $4x^2y^2 = 4r^4\cos^2\theta\sin^2\theta = r^4\sin^22\theta$. Pour $r\neq0$ : $r^2 = \sin^22\theta$, soit $r = \pm\sin2\theta$. Les deux signes décrivent la même courbe : le point de coordonnées polaires $(-\sin2\theta,\theta)$ est aussi le point $(\sin2\theta,\theta+\pi)$, et $\sin2(\theta+\pi) = \sin2\theta$ ; il est donc sur la courbe $r = \sin2\varphi$ (avec $\varphi = \theta+\pi$). D'où l'équation $r = \sin2\theta$.</p><p><b>Trifolium.</b> $3x^2y-y^3 = r^3(3\cos^2\theta\sin\theta-\sin^3\theta) = r^3(3\sin\theta-4\sin^3\theta) = r^3\sin3\theta$. L'équation $r^4+r^3\sin3\theta = 0$ donne, pour $r\neq0$, $r = -\sin3\theta$.</p><p><b>Les points communs réels.</b> La résolution numérique (par exemple en calculant le résultant) donne exactement $5$ points réels : l'origine, et $(\pm0{,}769;\,-0{,}559)$, $(\pm0{,}182;\,0{,}559)$ (les ordonnées valent $\pm\frac{\sqrt5}4$).</p>${figRose}<p>$5\leqslant24$ : la borne est loin d'être atteinte sur $\mathbb R$. La version forte du théorème de Bézout (sur $\mathbb C$, dans le plan projectif, en comptant les multiplicités) donne exactement $24$ ; ici l'origine, point très singulier, compte avec une grande multiplicité.</p>`)
  ],
  piege: R`Lire le nombre de points communs sur le degré du résultant : $\deg R = 4$ dans la question 12, mais il n'y a que deux points (et une seule racine distincte).`,
  methode: R`Pour l'intersection de deux courbes données en polaires, il est souvent plus simple de résoudre $r_1(\theta) = r_2(\theta)$, sans oublier l'origine et les points obtenus pour $(r,\theta)$ et $(-r,\theta+\pi)$.`
}
]);
})();

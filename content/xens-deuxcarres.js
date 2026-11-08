/* Commando X-ENS · Aller plus loin · Sujet « Théorème des deux carrés de Fermat ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 4, plus: "dc",
  sujet: "Le théorème des deux carrés",
  sujetDesc: "On caractérise les entiers somme de deux carrés : n = a² + b² si et seulement si les nombres premiers p ≡ 3 (mod 4) apparaissent dans n avec un exposant pair. Outils : les carrés de 𝔽_p (critère d'Euler), l'anneau euclidien ℤ[i] des entiers de Gauss, puis la preuve en une phrase de Zagier par involutions." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "dc-fp": { t: "Le corps 𝔽_p", b: R`<p>$\mathbb F_p = \mathbb Z/p\mathbb Z$ est un corps ; $\mathbb F_p^*$ a $p-1$ éléments et $x^{p-1} = 1$ pour $x\neq0$ (Fermat). Un polynôme de degré $d$ a au plus $d$ racines dans $\mathbb F_p$.</p>` },
  "dc-eucl": { t: "Anneau euclidien", b: R`<p>Un anneau intègre muni d'une division euclidienne est principal. Dans un anneau principal, un élément irréductible est premier : s'il divise $ab$, il divise $a$ ou $b$ (lemme d'Euclide).</p>` },
  "dc-inv": { t: "Involutions et parité", b: R`<p>Si $\varphi$ est une involution ($\varphi\circ\varphi = \operatorname{id}$) d'un ensemble fini $E$, les éléments non fixes vont par paires $\{x,\varphi(x)\}$ : $|E|$ et le nombre de points fixes de $\varphi$ ont la même parité.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\Sigma = \{a^2+b^2 : a,b\in\mathbb Z\}$. L'anneau des <b>entiers de Gauss</b> est $\mathbb Z[i] = \{a+ib : a,b\in\mathbb Z\}\subset\mathbb C$, muni de la <b>norme</b> $N(z) = z\bar z = a^2+b^2$. Ainsi $n\in\Sigma\iff\exists z\in\mathbb Z[i],\ N(z) = n$. Pour $p$ premier, $v_p(n)$ est l'exposant de $p$ dans la décomposition de $n\geqslant1$.</p>`;

/* Figure : division euclidienne dans Z[i] */
const figDiv = (() => {
  const s = 56, ox = 40, oy = 230, X = x => ox + s * x, Y = y => oy - s * y;
  let b = "";
  for (let i = 0; i <= 5; i++) for (let j = 0; j <= 3; j++) b += `<circle cx="${X(i)}" cy="${Y(j)}" r="3" class="pt"/>`;
  const zx = 2.62, zy = 1.38;
  b += `<rect x="${X(2.5)}" y="${Y(1.5)}" width="${s}" height="${s}" class="hb" style="opacity:.12"/><rect x="${X(2.5)}" y="${Y(1.5)}" width="${s}" height="${s}" class="thin"/>`;
  b += `<circle cx="${X(3)}" cy="${Y(1)}" r="${(s * Math.SQRT1_2).toFixed(1)}" class="thin"/>`;
  b += `<line x1="${X(zx)}" y1="${Y(zy)}" x2="${X(3)}" y2="${Y(1)}" class="vr" style="stroke-width:1.6"/>`;
  b += `<circle cx="${X(zx)}" cy="${Y(zy)}" r="4.5" class="ptr"/>` + S(X(zx) - 8, Y(zy) - 8, "z/t", "end", "it");
  b += `<circle cx="${X(3)}" cy="${Y(1)}" r="5" class="ptb"/>` + S(X(3) + 8, Y(1) + 16, "q", "start", "it");
  b += S(X(0) - 6, Y(0) + 18, "0", "middle", "sm") + S(X(1), Y(0) + 18, "1", "middle", "sm") + S(X(0) - 10, Y(1) + 4, "i", "end", "it");
  return FIG(360, 260, b, R`On arrondit $\frac zt$ au point $q$ du réseau $\mathbb Z[i]$ le plus proche : $\frac zt$ est dans le carré de côté $1$ centré en $q$, donc à distance au plus $\frac{\sqrt2}2\lt1$ de $q$ (cercle pointillé). Le reste $r = t\big(\frac zt-q\big)$ vérifie $N(r)\leqslant\frac12N(t)$.`, "Division euclidienne dans Z[i]");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "dc-1", ...P, part: "Partie I", time: "30 min",
  title: "Carrés de 𝔽_p et premières propriétés de Σ",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $p$ un nombre premier impair.</p><ol start="1">
<li>(<b>Critère d'Euler</b>) Montrer que $x\in\mathbb F_p^*$ est un carré si et seulement si $x^{\frac{p-1}2} = 1$. On comparera l'ensemble $C$ des carrés non nuls à $X = \{x : x^{\frac{p-1}2} = 1\}$.</li>
<li>En déduire que $-1$ est un carré de $\mathbb F_p$ si et seulement si $p\equiv1\pmod4$. Que se passe-t-il pour $p = 2$ ? Trouver $a$ avec $a^2\equiv-1\pmod{13}$.</li>
<li>Montrer que $\Sigma$ est stable par produit, en établissant l'<b>identité de Diophante</b> $(a^2+b^2)(c^2+d^2) = (ac-bd)^2+(ad+bc)^2$. Écrire $65$ de deux façons comme somme de deux carrés.</li>
<li>Montrer qu'un premier $p\equiv3\pmod4$ n'est pas dans $\Sigma$, et plus généralement qu'aucun entier $n\equiv3\pmod4$ ne l'est.</li></ol>`,
  decode: { donnees: [R`$x^{p-1} = 1$ pour $x\in\mathbb F_p^*$.`], but: R`Compter les carrés : $x\mapsto x^2$ est $2$ pour $1$ sur $\mathbb F_p^*$.`, cles: {} },
  steps: [
    Q(1, "Critère d'Euler", R`<p>$C\subset X$ par Fermat ; $|X|\leqslant\frac{p-1}2$ (racines d'un polynôme) ; $|C| = \frac{p-1}2$.</p>`, R`<p><b>$C\subset X$.</b> Si $x = y^2$ avec $y\neq0$ : $x^{\frac{p-1}2} = y^{p-1} = 1$ (Fermat).</p><p><b>$|X|\leqslant\frac{p-1}2$.</b> $X$ est l'ensemble des racines de $X^{\frac{p-1}2}-1$, de degré $\frac{p-1}2$, dans le corps $\mathbb F_p$.</p><p><b>$|C| = \frac{p-1}2$.</b> $y\mapsto y^2$ va de $\mathbb F_p^*$ sur $C$, et $y^2 = y'^2\iff(y-y')(y+y') = 0\iff y' = \pm y$. Comme $p\neq2$, $y\neq-y$ : chaque carré a exactement deux antécédents, et $|C| = \frac{p-1}2$.</p><p>Donc $C\subset X$ avec $|X|\leqslant|C|$ :</p><div class="sbox">$$x\in\mathbb F_p^*\ \text{est un carré}\iff x^{\frac{p-1}2} = 1.$$</div>`, ["dc-fp"]),
    Q(2, "Quand −1 est-il un carré ?", R`<p>$(-1)^{\frac{p-1}2} = 1\iff\frac{p-1}2$ pair.</p>`, R`<p>Par Q1, $-1$ est un carré si et seulement si $(-1)^{\frac{p-1}2} = 1$ dans $\mathbb F_p$ ; comme $1\neq-1$ ($p$ impair), c'est équivalent à $\frac{p-1}2$ pair, soit $p\equiv1\pmod4$. Pour $p = 2$ : $-1 = 1 = 1^2$ est un carré.</p><div class="sbox"><p>$-1$ est un carré modulo $p$ si et seulement si $p = 2$ ou $p\equiv1\pmod4$.</p></div><p>Pour $p = 13$ : $5^2 = 25 = 26-1\equiv-1$. Donc $a = 5$ convient (et $a = 8$).</p>`),
    Q(3, "Stabilité par produit", R`<p>$N(zz') = N(z)N(z')$ avec $z = a+ib$, $z' = c+id$.</p>`, R`<p>$N$ est multiplicative : $N(zz') = zz'\overline{zz'} = z\bar z\,z'\bar z' = N(z)N(z')$. Avec $z = a+ib$, $z' = c+id$ : $zz' = (ac-bd)+i(ad+bc)$, d'où</p><div class="sbox">$$(a^2+b^2)(c^2+d^2) = (ac-bd)^2+(ad+bc)^2.$$</div><p>Ainsi $\Sigma\cdot\Sigma\subset\Sigma$. Avec $5 = 1^2+2^2$ et $13 = 2^2+3^2$ : $65 = (2-6)^2+(3+4)^2 = 4^2+7^2$, et en remplaçant $z'$ par $\bar z'$ : $65 = (2+6)^2+(3-4)^2 = 8^2+1^2$.</p>`),
    Q(4, "Les entiers ≡ 3 (mod 4)", R`<p>Un carré est congru à $0$ ou $1$ modulo $4$.</p>`, R`<p>$a$ pair : $a^2\equiv0$ ; $a$ impair, $a = 2k+1$ : $a^2 = 4k^2+4k+1\equiv1\pmod4$. Donc $a^2+b^2\in\{0,1,2\}\pmod4$, jamais $3$.</p><div class="sbox"><p>Aucun entier $n\equiv3\pmod4$ n'est somme de deux carrés ; en particulier aucun premier $p\equiv3\pmod4$.</p></div>`)
  ],
  piege: R`Le critère d'Euler compte les racines d'un polynôme : cela n'a de sens que dans un <b>corps</b> (dans $\mathbb Z/8\mathbb Z$, $X^2-1$ a quatre racines).`,
  methode: R`Pour caractériser un sous-ensemble d'un groupe fini : trouver une inclusion facile, puis comparer les cardinaux.`
},

/* ===================== Partie II ===================== */
{ id: "dc-2", ...P, part: "Partie II", time: "35 min",
  title: "L'anneau des entiers de Gauss",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="5">
<li>Montrer que les inversibles de $\mathbb Z[i]$ sont $\pm1,\pm i$.</li>
<li>Montrer que $\mathbb Z[i]$ est euclidien pour $N$ : pour $z,t\in\mathbb Z[i]$, $t\neq0$, il existe $q,r$ avec $z = qt+r$ et $N(r)\lt N(t)$. En déduire qu'un irréductible de $\mathbb Z[i]$ est premier.</li>
<li>Soit $p$ premier. Montrer que $p\in\Sigma$ si et seulement si $p$ n'est pas irréductible dans $\mathbb Z[i]$.</li>
<li>Calculer, par l'algorithme d'Euclide dans $\mathbb Z[i]$, un pgcd de $13$ et $5+i$, et en déduire une écriture de $13$ comme somme de deux carrés.</li></ol>`,
  decode: { donnees: [R`$N$ multiplicative, à valeurs dans $\mathbb N$.`], but: R`Faire de l'arithmétique dans $\mathbb Z[i]$ comme dans $\mathbb Z$.`, cles: {} },
  steps: [
    Q(5, "Les inversibles", R`<p>$zu = 1$ donne $N(z)N(u) = 1$ dans $\mathbb N$.</p>`, R`<p>Si $zu = 1$, $N(z)N(u) = N(1) = 1$ avec $N(z),N(u)\in\mathbb N$, donc $N(z) = 1$ : $a^2+b^2 = 1$, soit $(a,b)\in\{(\pm1,0),(0,\pm1)\}$. Réciproquement $1\cdot1 = (-1)(-1) = i(-i) = 1$.</p><div class="sbox">$$\mathbb Z[i]^* = \{1,-1,i,-i\} = \{z : N(z) = 1\}.$$</div>`),
    Q(6, "Division euclidienne", R`<p>Arrondis les parties réelle et imaginaire de $\frac zt\in\mathbb C$.</p>`, R`<p>Écrivons $\frac zt = x+iy\in\mathbb C$ et choisissons $a,b\in\mathbb Z$ avec $|x-a|\leqslant\frac12$, $|y-b|\leqslant\frac12$. Soit $q = a+ib$ et $r = z-qt\in\mathbb Z[i]$. Alors</p>$$\begin{aligned}N(r)&= |t|^2\Big|\frac zt-q\Big|^2 = N(t)\big((x-a)^2+(y-b)^2\big)\\&\leqslant N(t)\Big(\frac14+\frac14\Big) = \frac{N(t)}2\lt N(t).\end{aligned}$$${figDiv}<p>$\mathbb Z[i]$ est intègre (sous-anneau de $\mathbb C$) et euclidien, donc principal, et ses irréductibles sont premiers.</p>`, ["dc-eucl"]),
    Q(7, "p somme de deux carrés ⟺ p non irréductible", R`<p>Sens direct : $p = (a+ib)(a-ib)$. Réciproque : $p = zu$ avec $z,u$ non inversibles donne $N(z)N(u) = p^2$.</p>`, R`<p><b>$\Rightarrow$.</b> Si $p = a^2+b^2$, alors $p = (a+ib)(a-ib)$. Ni $a$ ni $b$ n'est nul (sinon $p$ serait un carré), donc $N(a\pm ib) = p\neq1$ : ces facteurs ne sont pas inversibles, et $p$ n'est pas irréductible.</p><p><b>$\Leftarrow$.</b> Si $p = zu$ avec $z,u$ non inversibles, $N(z)N(u) = N(p) = p^2$ avec $N(z)\neq1$, $N(u)\neq1$ (Q5). Donc $N(z) = N(u) = p$, et $p = N(z)\in\Sigma$.</p>`),
    Q(8, "Euclide dans ℤ[i]", R`<p>$\frac{13}{5+i} = \frac{13(5-i)}{26} = \frac52-\frac i2$ ; prends $q = 2$.</p>`, R`<p>$\frac{13}{5+i} = \frac{13(5-i)}{26} = \frac52-\frac12i$. On prend $q = 2$ : $r = 13-2(5+i) = 3-2i$, $N(r) = 13\lt N(5+i) = 26$.</p><p>Puis $\frac{5+i}{3-2i} = \frac{(5+i)(3+2i)}{13} = \frac{15+10i+3i-2}{13} = \frac{13+13i}{13} = 1+i$ : la division est exacte, $5+i = (1+i)(3-2i)$.</p><p>Un pgcd de $13$ et $5+i$ est donc $3-2i$. Comme $5^2+1 = 26$ est divisible par $13$, ce pgcd est un diviseur strict non trivial de $13$ ; sa norme donne :</p><div class="sbox">$$13 = N(3-2i) = 3^2+2^2.$$</div><p>On a factorisé $13 = (3-2i)(3+2i)$ dans $\mathbb Z[i]$.</p>`)
  ],
  piege: R`Dans $\mathbb Z[i]$, « premier » et « irréductible » coïncident parce que l'anneau est principal ; dans $\mathbb Z[i\sqrt5]$, non euclidien, $6 = 2\cdot3 = (1+i\sqrt5)(1-i\sqrt5)$ et $2$ est irréductible sans être premier.`,
  methode: R`Arithmétique dans un anneau de nombres : une norme multiplicative à valeurs entières détecte les inversibles (norme $1$) et ramène les factorisations à des factorisations d'entiers.`
},

/* ===================== Partie III ===================== */
{ id: "dc-3", ...P, part: "Partie III", time: "40 min",
  title: "Le théorème, et la preuve de Zagier",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="9">
<li>Soit $p = 2$ ou $p\equiv1\pmod4$ premier. En utilisant $a$ tel que $p\mid a^2+1 = (a-i)(a+i)$, montrer que $p\in\Sigma$.</li>
<li>(<b>Théorème des deux carrés</b>) Montrer que $n\geqslant1$ est dans $\Sigma$ si et seulement si $v_p(n)$ est pair pour tout premier $p\equiv3\pmod4$. Lesquels des entiers $2026$, $2023$, $325$, $441$ sont dans $\Sigma$ ?</li>
<li>(<b>Zagier</b>) Soit $p = 4k+1$ premier et $S = \{(x,y,z)\in(\mathbb N^*)^3 : x^2+4yz = p\}$. On définit $\varphi$ sur $S$ par $$\varphi(x,y,z) = \begin{cases}(x+2z,\ z,\ y-x-z)&\text{si }x\lt y-z\\(2y-x,\ y,\ x-y+z)&\text{si }y-z\lt x\lt2y\\(x-2y,\ x-y+z,\ y)&\text{si }x>2y.\end{cases}$$ a) Montrer que les cas $x = y-z$ et $x = 2y$ n'arrivent pas, que $\varphi(S)\subset S$, et que $\varphi$ est une involution.<br>b) Montrer que $\varphi$ a exactement un point fixe, et conclure que $p\in\Sigma$ grâce à l'involution $(x,y,z)\mapsto(x,z,y)$.</li></ol>`,
  decode: { donnees: [R`Partie I : $-1$ carré mod $p\iff p\equiv1\ (4)$ ou $p = 2$. Partie II : irréductible $\Leftrightarrow$ premier dans $\mathbb Z[i]$.`], but: R`Traiter chaque facteur premier, puis recoller par l'identité de Diophante.`, cles: {} },
  steps: [
    Q(9, "Les premiers 1 (mod 4)", R`<p>$p$ divise $(a-i)(a+i)$ mais ni $a-i$ ni $a+i$.</p>`, R`<p>Par Q2, il existe $a\in\mathbb Z$ avec $a^2\equiv-1\pmod p$, donc $p\mid a^2+1 = (a-i)(a+i)$. Mais $p\nmid a\pm i$ dans $\mathbb Z[i]$ : sinon $\frac ap\pm\frac ip\in\mathbb Z[i]$, et $\frac1p\notin\mathbb Z$. Donc $p$ n'est pas premier dans $\mathbb Z[i]$, donc pas irréductible (Q6), et $p\in\Sigma$ (Q7). Pour $p = 2 = 1^2+1^2$, c'est direct.</p>`, ["dc-eucl"]),
    Q(10, "Le théorème", R`<p>Sens direct : un premier $p\equiv3\ (4)$ qui divise $a^2+b^2$ divise $a$ et $b$ (il est premier dans $\mathbb Z[i]$).</p>`, R`<p><b>$\Leftarrow$.</b> $n = \prod p^{v_p(n)}$. Si $p = 2$ ou $p\equiv1\ (4)$, $p\in\Sigma$ (Q9), donc $p^{v_p(n)}\in\Sigma$ (Q3). Si $p\equiv3\ (4)$, $v_p(n) = 2m$ et $p^{2m} = (p^m)^2+0^2\in\Sigma$. Par stabilité par produit, $n\in\Sigma$.</p><p><b>$\Rightarrow$.</b> Soit $n = a^2+b^2$ et $p\equiv3\ (4)$ divisant $n$. $p\notin\Sigma$ (Q4), donc $p$ est irréductible (Q7), donc premier dans $\mathbb Z[i]$. Il divise $(a+ib)(a-ib)$, donc l'un des deux, disons $a+ib = p(c+id)$ : $p\mid a$ et $p\mid b$. Alors $p^2\mid n$ et $\frac n{p^2} = \big(\frac ap\big)^2+\big(\frac bp\big)^2\in\Sigma$. On recommence : par récurrence sur $v_p(n)$, $v_p(n)$ est pair.</p><div class="sbox">$$n\in\Sigma\iff\forall p\equiv3\ (4),\ v_p(n)\ \text{pair}.$$</div><ul><li>$2026 = 2\times1013$, et $1013\equiv1\ (4)$ est premier : $2026\in\Sigma$ ($2026 = 45^2+1^2$).</li><li>$2023 = 7\times17^2$ : $v_7 = 1$ impair, $2023\notin\Sigma$ (d'ailleurs $2023\equiv3\ (4)$).</li><li>$325 = 5^2\times13\in\Sigma$ : $325 = 1^2+18^2 = 6^2+17^2 = 10^2+15^2$.</li><li>$441 = 3^2\times7^2\in\Sigma$ : $441 = 21^2+0^2$.</li></ul>`),
    Q(11, "a) L'involution de Zagier", R`<p>Égalités interdites : $x = y-z$ donne $p = (y+z)^2$ ; $x = 2y$ rend $p$ pair. Puis vérifie chaque cas.</p>`, R`<p><b>Cas d'égalité.</b> Si $x = y-z$ : $p = (y-z)^2+4yz = (y+z)^2$, pas premier. Si $x = 2y$ : $p = 4y^2+4yz$ est pair. Donc $\varphi$ est définie sur tout $S$.</p><p><b>$\varphi(S)\subset S$.</b> Cas 1 : $(x+2z)^2+4z(y-x-z) = x^2+4xz+4z^2+4yz-4xz-4z^2 = x^2+4yz$, et $y-x-z>0$. Cas 2 : $(2y-x)^2+4y(x-y+z) = 4y^2-4xy+x^2+4xy-4y^2+4yz = x^2+4yz$, avec $2y-x>0$, $x-y+z>0$. Cas 3 : $(x-2y)^2+4(x-y+z)y = x^2-4xy+4y^2+4xy-4y^2+4yz = x^2+4yz$, avec $x-2y>0$, $x-y+z>y-y+z>0$.</p><p><b>Involution.</b> Le cas 1 envoie dans le cas 3 : $x' = x+2z>2z = 2y'$. Et le cas 3 appliqué à $(x+2z,z,y-x-z)$ donne $\big(x+2z-2z,\ x+2z-z+y-x-z,\ z\big) = (x,y,z)$. Symétriquement le cas 3 envoie dans le cas 1 et revient. Le cas 2 reste dans le cas 2 : $y'-z' = 2y-x-z\lt2y-x = x'\lt2y = 2y'$, et l'appliquer deux fois donne $\big(2y-(2y-x),\ y,\ (2y-x)-y+(x-y+z)\big) = (x,y,z)$.</p>`, ["dc-inv"]),
    Q(11, "b) Un point fixe, donc deux carrés", R`<p>Un point fixe est forcément dans le cas 2, avec $x = y$ ; alors $x(x+4z) = p$.</p>`, R`<p>Dans les cas 1 et 3, $x'\neq x$ ($z\neq0$, $y\neq0$). Dans le cas 2, $\varphi(x,y,z) = (x,y,z)\iff x = 2y-x\iff x = y$, et alors $p = x^2+4xz = x(x+4z)$, avec $x+4z>1$ : $x = 1$, $z = k$. Le seul point fixe est $(1,1,k)$, qui est bien dans $S$ et dans le cas 2 ($1-k\lt1\lt2$).</p><p>Par le rappel, $|S|$ est <b>impair</b>. L'involution $\psi(x,y,z) = (x,z,y)$ de $S$ a donc un nombre impair de points fixes, donc au moins un : $(x,y,y)\in S$, soit</p><div class="sbox">$$p = x^2+4y^2 = x^2+(2y)^2.$$</div><p>Exemple $p = 13$, $k = 3$ : le point fixe de $\varphi$ est $(1,1,3)$ ; celui de $\psi$ est $(3,1,1)$ : $13 = 3^2+2^2$.</p>`, ["dc-inv"])
  ],
  piege: R`Dans le sens direct du théorème, utiliser seulement « $p\notin\Sigma$ » ne suffit pas : il faut que $p$ soit <b>premier dans $\mathbb Z[i]$</b> pour passer de $p\mid(a+ib)(a-ib)$ à $p\mid a+ib$, d'où le rôle de l'anneau euclidien.`,
  methode: R`Équation diophantienne $a^2+b^2 = n$ : factoriser dans $\mathbb Z[i]$, $n = (a+ib)(a-ib)$, et utiliser l'arithmétique de cet anneau euclidien.`
}
]);
})();

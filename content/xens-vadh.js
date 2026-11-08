/* Commando X-ENS · Aller plus loin · Sujet « Connexité des valeurs d'adhérence d'une suite ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 3, kind: "probleme", qnav: true, side: true, level: 4, plus: "vadh",
  sujet: "Connexité de l'ensemble des valeurs d'adhérence",
  sujetDesc: "Dans un espace métrique compact, si les pas d(x_{n+1}, x_n) tendent vers 0, l'ensemble des valeurs d'adhérence est connexe. On en déduit qu'une suite récurrente x_{n+1} = f(x_n) sur [0, 1] dont les pas tendent vers 0 converge, et que les valeurs d'adhérence de cos(√n) remplissent [−1, 1]." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "va-adh": { t: "Valeur d'adhérence", b: R`$$a\text{ valeur d'adhérence}\iff\exists\varphi,\ x_{\varphi(n)}\to a\iff\forall\varepsilon>0,\ \forall N,\ \exists n\geqslant N,\ d(x_n,a)\lt\varepsilon.$$<p>Compact : au moins une valeur d'adhérence ; une seule $\Rightarrow$ convergence.</p>` },
  "va-conn": { t: "Connexité", b: R`$$\begin{gathered}\Gamma\text{ connexe}\iff\nexists A,B\text{ fermés de }\Gamma\text{ non vides},\ \Gamma = A\sqcup B,\\[4pt]\text{connexes de }\mathbb R = \text{intervalles}.\end{gathered}$$` },
  "va-dist": { t: "Distance à une partie", b: R`$$d(x,A) = \inf_{a\in A}d(x,a),\qquad|d(x,A)-d(y,A)|\leqslant d(x,y),\qquad d(x,A) = 0\iff x\in\overline A.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $(X,d)$ est un espace métrique, $(x_n)_{n\in\mathbb N}$ une suite de $X$, et $\Gamma$ l'ensemble de ses valeurs d'adhérence. Pour deux parties non vides, $d(A,B) = \inf\{d(a,b) : a\in A,\ b\in B\}$.</p>`;

/* Figure de la preuve */
const figPreuve = (() => {
  let b = "";
  b += `<rect x="6" y="6" width="448" height="218" rx="10" style="fill:none;stroke:var(--line)"/>`;
  b += `<ellipse cx="110" cy="115" rx="42" ry="58" class="hb" style="opacity:.18"/><ellipse cx="110" cy="115" rx="42" ry="58" class="vb" style="fill:none"/>`;
  b += `<ellipse cx="110" cy="115" rx="66" ry="82" class="thin"/>`;
  b += `<ellipse cx="350" cy="115" rx="40" ry="50" class="hr" style="opacity:.18"/><ellipse cx="350" cy="115" rx="40" ry="50" class="vr" style="fill:none"/>`;
  b += `<ellipse cx="350" cy="115" rx="64" ry="74" class="thin"/>`;
  b += S(110, 120, "A", "middle", "it") + S(350, 120, "B", "middle", "it") + S(160, 46, "A′", "start", "it") + S(398, 54, "B′", "start", "it") + S(230, 30, "K", "middle", "it");
  const path = [[120, 95], [150, 110], [178, 98], [200, 120], [226, 104], [252, 126], [278, 108], [304, 122], [338, 112]];
  b += `<polyline points="${path.map(p => p.join(",")).join(" ")}" class="vk" style="fill:none;stroke-width:1.2"/>`;
  path.forEach(([x, y], k) => { b += `<circle cx="${x}" cy="${y}" r="3.4" class="${k === 2 ? "ptb" : k === 3 ? "ptr" : k === 8 ? "ptr" : "pt"}"/>`; });
  b += S(178, 86, "xₙ₁₋₁", "middle", "it") + S(202, 140, "xₙ₁", "middle", "it") + S(116, 84, "xₙ₀", "middle", "it") + S(338, 136, "xₙ₂", "middle", "it");
  return FIG(460, 230, b, R`$A$ et $B$ sont à distance $\alpha$ ; leurs $\frac\alpha3$-voisinages $A'$ et $B'$ (pointillés) sont disjoints. Une suite à petits pas ($\leqslant\frac\alpha3$) qui va de $A'$ à $B'$ doit poser un pied dans $K = X\setminus(A'\cup B')$.`, "Schéma de la preuve");
})();

const figCos = GRAPH({ w: 460, h: 230, x: [0, 400], y: [-1.15, 1.15], xt: [100, 200, 300, 400], yt: [-1, 1], ytl: ["−1", "1"], xl: "n", curves: [{ f: x => Math.cos(Math.sqrt(x)), c: "b", n: 800 }], extra: (X, Y) => { let s = ""; for (let n = 0; n <= 400; n += 4) s += `<circle cx="${X(n).toFixed(1)}" cy="${Y(Math.cos(Math.sqrt(n))).toFixed(1)}" r="1.6" class="pt"/>`; return s; } }, R`Les points $\cos(\sqrt n)$ (un sur quatre) : les pas tendent vers $0$, la suite balaie $[-1,1]$ de plus en plus lentement, et toute valeur de $[-1,1]$ est valeur d'adhérence.`, "cos √n");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "vadh-1", ...P, part: "Partie I", time: "30 min",
  title: "L'ensemble des valeurs d'adhérence",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $\Gamma = \bigcap_{p\in\mathbb N}\overline{\{x_n : n\geqslant p\}}$. En déduire que $\Gamma$ est fermé, et que si $X$ est compact, $\Gamma$ est un compact non vide.</li>
<li>Déterminer $\Gamma$ pour $x_n = (-1)^n$ et pour $x_n = n(1+(-1)^n)$ dans $\mathbb R$. La seconde converge-t-elle ? Commenter.</li>
<li>Soient $K$ compact et $F$ fermé, non vides et disjoints. Montrer que $d(K,F)>0$. Montrer que c'est faux pour deux fermés, avec $F_1 = \{(x,y)\in\mathbb R^2 : y\leqslant0\}$ et $F_2 = \{(x,y) : y\geqslant e^x\}$.</li>
<li>On suppose $X$ compact. Soit $K$ un fermé de $X$ disjoint de $\Gamma$. Montrer que $\{n : x_n\in K\}$ est fini.</li></ol>`,
  decode: { donnees: [R`$a\in\Gamma\iff\forall\varepsilon,\ \forall p,\ \exists n\geqslant p,\ d(x_n,a)\lt\varepsilon$.`], but: R`Mettre en place les outils de la Partie II : $\Gamma$ compact, distance strictement positive entre compact et fermé disjoints.`, cles: {} },
  steps: [
    Q(1, "Une intersection de fermés", R`<p>$a\in\overline{\{x_n : n\geqslant p\}}$ si et seulement si toute boule autour de $a$ contient un $x_n$ avec $n\geqslant p$.</p>`, R`<p>Notons $F_p = \overline{\{x_n : n\geqslant p\}}$. Pour $a\in X$ :</p>$$a\in\bigcap_pF_p\iff\forall p,\ \forall\varepsilon>0,\ \exists n\geqslant p,\ d(x_n,a)\lt\varepsilon\iff a\in\Gamma.$$<p>Une intersection de fermés est fermée : $\Gamma$ est fermé. Si $X$ est compact, $\Gamma$ est un fermé d'un compact, donc compact, et il est non vide par Bolzano-Weierstrass (toute suite d'un compact a une valeur d'adhérence).</p>`, ["va-adh"]),
    Q(2, "Deux exemples", R`<p>Sépare les indices pairs et impairs.</p>`, R`<p>$x_n = (-1)^n$ : les extraites paires et impaires sont constantes, égales à $1$ et $-1$. Toute extraite a une infinité d'indices pairs ou d'impairs, donc $\Gamma = \{-1,1\}$.</p><p>$x_n = n(1+(-1)^n)$ : $x_{2k+1} = 0$ et $x_{2k} = 4k\to+\infty$. Une extraite convergente est bornée, donc n'a qu'un nombre fini d'indices pairs : elle converge vers $0$. Ainsi $\Gamma = \{0\}$, mais la suite ne converge pas (elle n'est pas bornée).</p><div class="sbox"><p>« Une seule valeur d'adhérence $\Rightarrow$ convergence » demande que la suite reste dans un compact.</p></div>`, ["va-adh"]),
    Q(3, "Distance entre compact et fermé", R`<p>$x\mapsto d(x,F)$ est continue et strictement positive sur $K$.</p>`, R`<p>$\varphi(x) = d(x,F)$ est $1$-lipschitzienne, donc continue. Elle est strictement positive sur $K$ : si $\varphi(x) = 0$, alors $x\in\overline F = F$, impossible car $K\cap F = \emptyset$. Sur le compact $K$, $\varphi$ atteint son minimum $m>0$ en un point. Pour $a\in K$, $b\in F$ : $d(a,b)\geqslant\varphi(a)\geqslant m$, donc $d(K,F)\geqslant m>0$.</p><p><b>Contre-exemple.</b> $F_1$ et $F_2$ sont fermés (images réciproques de fermés par des fonctions continues) et disjoints ($y\leqslant0\lt e^x\leqslant y$ est impossible). Mais $(x,0)\in F_1$, $(x,e^x)\in F_2$ et $d = e^x\to0$ quand $x\to-\infty$ : $d(F_1,F_2) = 0$.</p>`, ["va-dist"]),
    Q(4, "Un fermé sans valeur d'adhérence", R`<p>Par l'absurde : une infinité d'indices dans $K$ fournit une suite extraite dans le compact $K$.</p>`, R`<p>Si $\{n : x_n\in K\}$ était infini, on pourrait en extraire une suite $(x_{\psi(n)})$ à valeurs dans $K$. $K$ est fermé dans le compact $X$, donc compact : cette suite a une valeur d'adhérence $a\in K$, qui est aussi valeur d'adhérence de $(x_n)$. Donc $a\in K\cap\Gamma = \emptyset$ : absurde.</p><div class="sbox"><p>Dans un compact, la suite ne visite qu'un nombre fini de fois tout fermé disjoint de $\Gamma$.</p></div>`)
  ],
  piege: R`En Q3, la compacité de $K$ sert à <b>atteindre</b> le minimum de $d(\cdot,F)$ ; sans elle, l'inf d'une fonction strictement positive peut être nul, comme le montre le contre-exemple.`,
  methode: R`Écrire $\Gamma$ comme intersection des adhérences des « queues » de la suite : cela donne immédiatement qu'il est fermé.`
},

/* ===================== Partie II ===================== */
{ id: "vadh-2", ...P, part: "Partie II", time: "35 min",
  title: "Le théorème de connexité",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose $X$ compact et $d(x_{n+1},x_n)\to0$. On veut montrer que $\Gamma$ est connexe. Par l'absurde, on suppose $\Gamma = A\sqcup B$ avec $A,B$ fermés de $\Gamma$, non vides, disjoints.</p><ol start="5">
<li>Montrer que $\alpha = d(A,B)>0$. On pose $A' = \{x : d(x,A)\lt\frac\alpha3\}$, $B' = \{x : d(x,B)\lt\frac\alpha3\}$ et $K = X\setminus(A'\cup B')$. Montrer que $A'$ et $B'$ sont ouverts et disjoints, et que $K$ est un fermé disjoint de $\Gamma$.</li>
<li>Soit $N$ tel que $d(x_{n+1},x_n)\leqslant\frac\alpha3$ pour $n\geqslant N$. Montrer que pour tout $p\geqslant N$, il existe $n_0\geqslant p$ avec $x_{n_0}\in A'$, et $n_2>n_0$ avec $x_{n_2}\in B'$.</li>
<li>Soit $n_1$ le plus petit indice $n\geqslant n_0$ tel que $x_n\notin A'$. Justifier son existence et montrer que $x_{n_1}\in K$.</li>
<li>Conclure.</li></ol>`,
  decode: { donnees: [R`Partie I : $\Gamma$ compact ; $d(K,F)>0$ ; $K$ fermé disjoint de $\Gamma$ n'est visité qu'un nombre fini de fois.`], but: R`Montrer que la suite visite une infinité de fois le « fossé » $K$ entre $A$ et $B$.`, cles: {} },
  steps: [
    Q(5, "Le fossé entre A et B", R`<p>$A$ et $B$ sont fermés dans le compact $\Gamma$, donc compacts. Pour $A'\cap B' = \emptyset$, inégalité triangulaire.</p>`, R`<p>$A$ et $B$ sont fermés dans $\Gamma$ qui est compact (Q1), donc compacts ; disjoints et non vides, ils vérifient $\alpha = d(A,B)>0$ (Q3).</p><p>$A' = \varphi_A^{-1}(]-\infty,\frac\alpha3[)$ avec $\varphi_A = d(\cdot,A)$ continue : c'est un ouvert, de même que $B'$. S'il existait $x\in A'\cap B'$, il y aurait $a\in A$ et $b\in B$ avec $d(x,a)\lt\frac\alpha3$ et $d(x,b)\lt\frac\alpha3$, donc $d(a,b)\lt\frac{2\alpha}3\lt\alpha$ : absurde.</p><p>$K$ est le complémentaire de l'ouvert $A'\cup B'$ : il est fermé. Et $\Gamma = A\cup B\subset A'\cup B'$, donc $K\cap\Gamma = \emptyset$.</p>${figPreuve}`, ["va-dist"]),
    Q(6, "Aller de A′ à B′", R`<p>Prends $a\in A$ : c'est une valeur d'adhérence, donc la suite repasse près de $a$ après tout rang.</p>`, R`<p>Soit $a\in A$, $b\in B$ (non vides). Comme $a\in\Gamma$, il existe $n_0\geqslant p$ avec $d(x_{n_0},a)\lt\frac\alpha3$, donc $x_{n_0}\in A'$. Comme $b\in\Gamma$, il existe $n_2\geqslant n_0+1$ avec $d(x_{n_2},b)\lt\frac\alpha3$, donc $x_{n_2}\in B'$.</p>`, ["va-adh"]),
    Q(7, "La sortie de A′", R`<p>$x_{n_2}\notin A'$. Si $x_{n_1}\in B'$, compare avec $x_{n_1-1}\in A'$.</p>`, R`<p>$x_{n_2}\in B'$ et $A'\cap B' = \emptyset$, donc $x_{n_2}\notin A'$ : l'ensemble $\{n\geqslant n_0 : x_n\notin A'\}$ est non vide, il a un plus petit élément $n_1$, avec $n_0\lt n_1\leqslant n_2$ (car $x_{n_0}\in A'$). Par minimalité, $x_{n_1-1}\in A'$.</p><p>Supposons $x_{n_1}\in B'$ : il existe $a'\in A$, $b'\in B$ avec $d(x_{n_1-1},a')\lt\frac\alpha3$ et $d(x_{n_1},b')\lt\frac\alpha3$. Comme $n_1-1\geqslant N$, $d(x_{n_1-1},x_{n_1})\leqslant\frac\alpha3$, d'où</p>$$d(a',b')\leqslant d(a',x_{n_1-1})+d(x_{n_1-1},x_{n_1})+d(x_{n_1},b')\lt\frac\alpha3+\frac\alpha3+\frac\alpha3 = \alpha,$$<p>ce qui contredit $\alpha = d(A,B)$. Donc $x_{n_1}\notin A'\cup B'$ :</p><div class="sbox">$$x_{n_1}\in K\quad\text{avec}\quad n_1\geqslant p.$$</div>`),
    Q(8, "Conclusion", R`<p>$p$ est arbitraire : $K$ est visité une infinité de fois.</p>`, R`<p>Pour tout $p\geqslant N$, on a trouvé $n_1\geqslant p$ avec $x_{n_1}\in K$. Donc $\{n : x_n\in K\}$ est infini. Or $K$ est un fermé disjoint de $\Gamma$ (Q5), ce qui contredit Q4.</p><div class="sbox"><p>Si $X$ est compact et $d(x_{n+1},x_n)\to0$, l'ensemble $\Gamma$ des valeurs d'adhérence est un compact connexe non vide.</p></div>`)
  ],
  piege: R`L'hypothèse de compacité de $X$ est indispensable (voir Q12) : c'est elle qui garantit, via Q4, qu'un fermé disjoint de $\Gamma$ n'est visité qu'un nombre fini de fois.`,
  methode: R`Prouver la connexité par l'absurde : séparer $\Gamma$ en deux fermés à distance $\alpha>0$, et montrer qu'une suite à pas plus petits que $\frac\alpha3$ doit traverser le fossé une infinité de fois.`
},

/* ===================== Partie III ===================== */
{ id: "vadh-3", ...P, part: "Partie III", time: "35 min",
  title: "Applications et contre-exemples",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="9">
<li>Soit $f : [0,1]\to[0,1]$ continue, $x_0\in[0,1]$, $x_{n+1} = f(x_n)$, et on suppose $x_{n+1}-x_n\to0$.<br>a) Montrer que $\Gamma$ est un segment $[\ell_1,\ell_2]$ et que $\Gamma\subset\operatorname{Fix}(f) = \{a : f(a) = a\}$.<br>b) On suppose $\ell_1\lt\ell_2$. Montrer qu'il existe $N$ avec $x_N\in\,]\ell_1,\ell_2[$, et en déduire une contradiction. Conclure que $(x_n)$ converge.</li>
<li>Montrer que l'hypothèse $x_{n+1}-x_n\to0$ est nécessaire, avec $f(x) = 1-x$ et $x_0 = 0$.</li>
<li>Montrer que l'ensemble des valeurs d'adhérence de $(\cos\sqrt n)$ est $[-1,1]$.</li>
<li>Montrer que la compacité de $X$ est nécessaire, avec $X = [0,1]\setminus\{\frac12\}$ et une suite qui fait des allers-retours entre $0$ et $1$ avec des pas de plus en plus petits.</li></ol>`,
  decode: { donnees: [R`Partie II : $\Gamma$ compact connexe.`], but: R`Utiliser que les connexes de $\mathbb R$ sont les intervalles.`, cles: {} },
  steps: [
    Q(9, "a) Γ est un segment de points fixes", R`<p>Si $x_{\varphi(n)}\to a$, alors $x_{\varphi(n)+1} = f(x_{\varphi(n)})\to f(a)$, et $x_{\varphi(n)+1}-x_{\varphi(n)}\to0$.</p>`, R`<p>$[0,1]$ est compact et les pas tendent vers $0$ : par la Partie II, $\Gamma$ est un compact connexe non vide de $\mathbb R$, donc un segment $[\ell_1,\ell_2]$.</p><p>Si $a\in\Gamma$, soit $x_{\varphi(n)}\to a$. Par continuité de $f$, $x_{\varphi(n)+1} = f(x_{\varphi(n)})\to f(a)$. Mais $x_{\varphi(n)+1} = x_{\varphi(n)}+(x_{\varphi(n)+1}-x_{\varphi(n)})\to a+0$. Par unicité de la limite, $f(a) = a$.</p>`, ["va-conn"]),
    Q(9, "b) La suite converge", R`<p>Prends $c$ au milieu de $\Gamma$ : la suite s'en approche, et une fois dans $]\ell_1,\ell_2[$, elle est sur un point fixe.</p>`, R`<p>Soit $c = \frac{\ell_1+\ell_2}2\in\Gamma$ et $h = \frac{\ell_2-\ell_1}2>0$. Comme $c$ est valeur d'adhérence, il existe $N$ avec $|x_N-c|\lt h$, c'est-à-dire $x_N\in\,]\ell_1,\ell_2[\,\subset\Gamma\subset\operatorname{Fix}(f)$. Alors $x_{N+1} = f(x_N) = x_N$, et par récurrence $x_n = x_N$ pour $n\geqslant N$ : la suite est stationnaire, donc $\Gamma = \{x_N\}$, ce qui contredit $\ell_1\lt\ell_2$.</p><p>Donc $\Gamma = \{\ell\}$ est un singleton ; la suite est dans le compact $[0,1]$ et a une seule valeur d'adhérence :</p><div class="sbox"><p>$(x_n)$ converge (vers un point fixe de $f$).</p></div>`, ["va-adh"]),
    Q(10, "Un contre-exemple sans l'hypothèse sur les pas", R`<p>Calcule les premiers termes.</p>`, R`<p>$x_0 = 0$, $x_1 = 1$, $x_2 = 0$… : $x_n = \frac{1-(-1)^n}2$. La suite ne converge pas, et $\Gamma = \{0,1\}$ n'est pas connexe. Ici $|x_{n+1}-x_n| = 1$ ne tend pas vers $0$. Le seul point fixe de $f$ est $\frac12$.</p>`),
    Q(11, "Les valeurs d'adhérence de cos √n", R`<p>Pas : $|\cos\sqrt{n+1}-\cos\sqrt n|\leqslant\sqrt{n+1}-\sqrt n$. Pour $\pm1$, prends $n_k = \lfloor(k\pi)^2\rfloor$.</p>`, R`<p><b>Pas.</b> $\cos$ est $1$-lipschitzienne :</p>$$|\cos\sqrt{n+1}-\cos\sqrt n|\leqslant\sqrt{n+1}-\sqrt n = \frac1{\sqrt{n+1}+\sqrt n}\to0.$$<p><b>$\pm1$ sont valeurs d'adhérence.</b> Soit $n_k = \lfloor(k\pi)^2\rfloor$ : $(k\pi)^2-1\lt n_k\leqslant(k\pi)^2$, donc</p>$$0\leqslant k\pi-\sqrt{n_k} = \frac{(k\pi)^2-n_k}{k\pi+\sqrt{n_k}}\lt\frac1{k\pi}\to0,$$<p>et $\cos\sqrt{n_k}-\cos(k\pi)\to0$, avec $\cos(k\pi) = (-1)^k$. En prenant $k$ pair ou impair, $1$ et $-1$ sont valeurs d'adhérence.</p><p><b>Conclusion.</b> La suite vit dans le compact $[-1,1]$ ; par la Partie II, $\Gamma$ est un connexe de $\mathbb R$, donc un intervalle, contenant $-1$ et $1$ et inclus dans $[-1,1]$ :</p><div class="sbox">$$\Gamma = [-1,1].$$</div>${figCos}`, ["va-conn"]),
    Q(12, "La compacité est nécessaire", R`<p>Pas de $\frac1k$ dans la $k$-ième traversée ; le point $\frac12$ est sauté.</p>`, R`<p>Construisons la suite par « traversées » : pendant la $k$-ième traversée ($k\geqslant3$), on va de $0$ à $1$ (si $k$ est impair) ou de $1$ à $0$ (si $k$ est pair) par pas de $\frac1k$, en sautant le point $\frac12$ quand il tombe sur la grille (on passe de $\frac12-\frac1k$ à $\frac12+\frac1k$, pas de $\frac2k$). Tous les termes sont dans $X = [0,1]\setminus\{\frac12\}$ et les pas sont $\leqslant\frac2k\to0$.</p><p>Tout $a\in X$ est valeur d'adhérence : la $k$-ième traversée passe à distance $\leqslant\frac2k$ de $a$. Donc $\Gamma = X$ (pour la distance induite), qui n'est pas connexe : $X = [0,\frac12[\,\sqcup\,]\frac12,1]$, deux fermés de $X$. Le théorème tombe car $X$ n'est pas compact ; dans $[0,1]$, l'ensemble des valeurs d'adhérence serait $[0,1]$, connexe.</p>`)
  ],
  piege: R`En Q9 b), trouver $x_N$ dans l'intérieur $]\ell_1,\ell_2[$ et non seulement près de $\Gamma$ : un point fixe au bord ne bloque pas la suite, puisque $x_N$ peut être proche de $\ell_1$ sans être un point fixe.`,
  methode: R`Pour connaître toutes les valeurs d'adhérence d'une suite réelle bornée à pas tendant vers $0$, il suffit de trouver la plus petite et la plus grande : tout ce qui est entre suit par connexité.`
}
]);
})();

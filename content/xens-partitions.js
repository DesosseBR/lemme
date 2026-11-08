/* Commando X-ENS · Aller plus loin · Sujet « Nombre de partitions à parts fixées ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 4, plus: "part",
  sujet: "Rendre la monnaie : nombre de partitions à parts fixées",
  sujetDesc: "Combien de façons de payer n centimes avec des pièces de 1, 2, 5 et 10 ? La série génératrice est la fraction rationnelle ∏ 1/(1 − X^{a_i}). Sa décomposition en éléments simples montre que seul le pôle 1, d'ordre s, domine : q_n ∼ n^{s−1}/((s−1)! a_1⋯a_s), soit n³/600 pour l'euro. Compléments : formule exacte pour {1, 2}, terme suivant, croissance des partitions quelconques." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "pa-geo": { t: "Séries géométriques et dérivées", b: R`<p>Pour $z\neq0$ : $\frac1{z-X} = \sum_{n\geqslant0}\frac{X^n}{z^{n+1}}$ (série formelle, ou série entière de rayon $|z|$). En dérivant $k-1$ fois : $\frac1{(z-X)^k} = \sum_{n\geqslant0}\binom{n+k-1}{k-1}\frac{X^n}{z^{n+k}}$.</p>` },
  "pa-des": { t: "Décomposition en éléments simples", b: R`<p>Une fraction $F = \frac1Q$ avec $\deg Q\geqslant1$ s'écrit de façon unique $F = \sum_{w}\sum_{j = 1}^{m_w}\frac{c_{w,j}}{(w-X)^j}$, la somme portant sur les racines $w$ de $Q$, de multiplicités $m_w$, avec $c_{w,m_w}\neq0$.</p>` },
  "pa-bez": { t: "Bézout", b: R`<p>Si $\gcd(a_1,\dots,a_s) = 1$, il existe $b_1,\dots,b_s\in\mathbb Z$ avec $a_1b_1+\dots+a_sb_s = 1$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $a_1,\dots,a_s$ ($s\geqslant1$) sont des entiers $\geqslant1$ distincts et <b>premiers entre eux dans leur ensemble</b>. Pour $n\in\mathbb N$, $q_n$ est le nombre de $(k_1,\dots,k_s)\in\mathbb N^s$ tels que $k_1a_1+\dots+k_sa_s = n$ (nombre de façons de payer $n$ avec des pièces de valeurs $a_1,\dots,a_s$). On note $F(X) = \sum_{n\geqslant0}q_nX^n$ et $\mathbb U_d$ le groupe des racines $d$-ièmes de l'unité.</p>`;

/* Figure : pôles pour {1,2,5,10} */
const figPoles = (() => { const cx = 160, cy = 140, r = 100; let b = `<circle cx="${cx}" cy="${cy}" r="${r}" class="thin" style="fill:none"/><line x1="${cx - 125}" y1="${cy}" x2="${cx + 125}" y2="${cy}" class="ax"/><line x1="${cx}" y1="${cy - 125}" x2="${cx}" y2="${cy + 125}" class="ax"/>`;
  const col = { 4: "ptr", 2: "ptb", 1: "pt" }, rad = { 4: 8, 2: 6, 1: 4 };
  for (let k = 0; k < 10; k++) { const g = (a => { let x = k, y = 10; while (y) [x, y] = [y, x % y]; return x; })(); const d = 10 / g; const m = d === 1 ? 4 : d === 2 ? 2 : d === 5 ? 2 : 1; const t = 2 * Math.PI * k / 10;
    b += `<circle cx="${(cx + r * Math.cos(t)).toFixed(1)}" cy="${(cy - r * Math.sin(t)).toFixed(1)}" r="${rad[m]}" class="${col[m]}"/>`; }
  b += S(cx + r + 10, cy + 20, "1", "start", "sm r") + S(cx - r - 10, cy + 20, "−1", "end", "sm b");
  b += S(330, 60, "rouge : pôle d'ordre 4 (= s)", "start", "sm r") + S(330, 84, "bleu : ordre 2 (racines de 1 − X² et 1 − X¹⁰,", "start", "sm b") + S(330, 102, "ou de 1 − X⁵ et 1 − X¹⁰)", "start", "sm b") + S(330, 126, "blanc : ordre 1 (racines primitives", "start", "sm") + S(330, 144, "10-ièmes, seulement dans 1 − X¹⁰)", "start", "sm");
  return FIG(620, 280, b, R`Pôles de $F = \frac1{(1-X)(1-X^2)(1-X^5)(1-X^{10})}$ : ce sont des racines $10$-ièmes de l'unité. Une racine primitive $d$-ième est pôle d'ordre égal au nombre de $a_i$ divisibles par $d$. Seul $1$ est d'ordre $s = 4$ ; c'est lui qui donne le terme dominant $\frac{n^3}{600}$.`, "Pôles de la série génératrice"); })();

/* Figure : q_n et équivalents */
const qn = (() => { const S0 = [1, 2, 5, 10], N = 100, q = Array(N + 1).fill(0); q[0] = 1; S0.forEach(a => { for (let n = a; n <= N; n++) q[n] += q[n - a]; }); return q; })();
const figQ = GRAPH({ w: 460, h: 250, x: [0, 100], y: [0, 2300], xt: [20, 40, 60, 80, 100], yt: [500, 1000, 1500, 2000], xl: "n",
  curves: [{ f: n => n ** 3 / 600, c: "r", dash: true, lab: [72, 450, "n³/600"] }, { f: n => n ** 3 / 600 + 9 * n * n / 200, c: "g", lab: [55, 1400, "n³/600 + 9n²/200", "end"] }],
  extra: (X, Y) => qn.map((v, n) => n % 2 ? "" : `<circle cx="${X(n).toFixed(1)}" cy="${Y(v).toFixed(1)}" r="2.2" class="ptb"/>`).join("") + S(X(96), Y(2156) - 8, "q₁₀₀ = 2156", "end", "sm b") },
  R`Les $q_n$ pour les pièces $\{1,2,5,10\}$ (points bleus), l'équivalent $\frac{n^3}{600}$ (rouge) et le développement à deux termes $\frac{n^3}{600}+\frac{9n^2}{200}$ (orange, Q9). Pour $n = 100$ : $q_{100} = 2156$, contre $1667$ et $2117$. L'équivalent est juste mais converge lentement : l'erreur relative est en $O\big(\frac1n\big)$.`, "Croissance de q_n");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "part-1", ...P, part: "Partie I", time: "25 min",
  title: "La série génératrice",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $F(X) = \prod_{i=1}^s\frac1{1-X^{a_i}}$ (égalité de séries formelles, ou de séries entières pour $|x|\lt1$).</li>
<li>On note $U(n,j)$ le nombre de façons de payer $n$ avec les seules pièces $a_1,\dots,a_j$. Établir $U(n,j) = \sum_{k\geqslant0,\ ka_j\leqslant n}U(n-ka_j,j-1)$, et calculer $q_{10}$ pour les pièces $\{1,2,5,10\}$.</li>
<li>Pour $\{a_1,a_2\} = \{1,2\}$, montrer que $q_n = \lfloor\frac n2\rfloor+1$. Pour $\{2,4\}$ (non premiers entre eux), que vaut $q_n$ pour $n$ impair ? Pourquoi l'hypothèse de coprimalité est-elle naturelle ?</li></ol>`,
  decode: { donnees: [R`Produit de Cauchy de séries.`], but: R`Traduire le dénombrement en un produit de séries géométriques.`, cles: {} },
  steps: [
    Q(1, "Produit de séries géométriques", R`<p>$\frac1{1-X^a} = \sum_{k\geqslant0}X^{ak}$ ; développer le produit.</p>`, R`<p>$\frac1{1-X^{a_i}} = \sum_{k_i\geqslant0}X^{a_ik_i}$. Le produit de Cauchy de ces $s$ séries donne</p>$$\begin{aligned}\prod_{i=1}^s\frac1{1-X^{a_i}} &= \sum_{(k_1,\dots,k_s)\in\mathbb N^s}X^{a_1k_1+\dots+a_sk_s}\\&= \sum_{n\geqslant0}\#\{(k_i) : \textstyle\sum a_ik_i = n\}\,X^n = F(X).\end{aligned}$$<p>Le coefficient de $X^n$ ne fait intervenir qu'un nombre fini de termes ($k_i\leqslant n/a_i$), donc le calcul est licite dans $\mathbb C[[X]]$ ; pour $|x|\lt1$, les séries convergent absolument et l'égalité vaut aussi pour les sommes.</p>`),
    Q(2, "Calcul par programmation dynamique", R`<p>Classer selon le nombre $k$ de pièces $a_j$ utilisées.</p>`, R`<p>Une façon de payer $n$ avec $a_1,\dots,a_j$ utilise $k$ pièces $a_j$ ($0\leqslant k\leqslant n/a_j$) et paie le reste $n-ka_j$ avec $a_1,\dots,a_{j-1}$ : d'où la formule, avec $U(0,0) = 1$ et $U(n,0) = 0$ pour $n\geqslant1$.</p><p>Pour $\{1,2,5,10\}$ : avec $\{1\}$, $U(n,1) = 1$. Avec $\{1,2\}$, $U(n,2) = \lfloor\frac n2\rfloor+1$ : $U(0..10,2) = 1,1,2,2,3,3,4,4,5,5,6$. Avec $\{1,2,5\}$ : $U(10,3) = U(10,2)+U(5,2)+U(0,2) = 6+3+1 = 10$, et $U(0,3) = 1$. Avec les pièces de $10$ :</p>$$q_{10} = U(10,4) = U(10,3)+U(0,3) = 10+1 = 11.$$`),
    Q(3, "Deux exemples", R`<p>$\{1,2\}$ : choisir le nombre $k_2$ de pièces de $2$. $\{2,4\}$ : parité.</p>`, R`<p>Pour $\{1,2\}$ : une solution est déterminée par $k_2\in\{0,\dots,\lfloor\frac n2\rfloor\}$ (alors $k_1 = n-2k_2$), d'où $q_n = \lfloor\frac n2\rfloor+1\sim\frac n2$, conforme à $\frac{n^{s-1}}{(s-1)!\,a_1a_2}$ avec $s = 2$.</p><p>Pour $\{2,4\}$ : $2k_1+4k_2$ est pair, donc $q_n = 0$ pour $n$ impair, alors que $q_{2m} = \lfloor\frac m2\rfloor+1$. La suite n'a pas d'équivalent de la forme $cn^{s-1}$. Si $g = \gcd(a_i)>1$, on se ramène à $\frac{a_i}g$ et aux $n$ multiples de $g$ : la coprimalité n'est pas une restriction.</p>`)
  ],
  piege: R`Sans coprimalité, $F$ a d'autres pôles d'ordre $s$ que $1$ (les racines $g$-ièmes de l'unité), et leurs contributions oscillantes sont du même ordre : on obtient des $q_n$ nuls une fois sur deux.`,
  methode: R`Dénombrer des solutions de $\sum a_ik_i = n$ : série génératrice $\prod\frac1{1-X^{a_i}}$.`
},

/* ===================== Partie II ===================== */
{ id: "part-2", ...P, part: "Partie II", time: "35 min",
  title: "Les pôles et l'équivalent",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que les pôles de $F$ sont des racines de l'unité, que $1$ est pôle d'ordre exactement $s$, et que tout autre pôle $w$ est d'ordre $\lt s$. (Si $w^{a_i} = 1$ pour tout $i$, utiliser Bézout.)</li>
<li>Soient $z\in\mathbb C$, $|z| = 1$, $c\in\mathbb C$ et $k\geqslant1$. Montrer que le coefficient de $X^n$ dans $\frac c{(z-X)^k}$ est $O(n^{k-1})$.</li>
<li>En décomposant $F$ en éléments simples, montrer que $q_n = A\binom{n+s-1}{s-1}+O(n^{s-2})$, où $A = \lim_{x\to1}(1-x)^sF(x)$.</li>
<li>Calculer $A$ et conclure :</li></ol><div class="sbox">$$q_n\underset{n\to\infty}\sim\frac{n^{s-1}}{(s-1)!\,a_1a_2\cdots a_s}.$$</div>`,
  decode: { donnees: [R`$F = \prod\frac1{1-X^{a_i}}$.`], but: R`Lire l'asymptotique des coefficients sur le pôle de plus grand ordre.`, cles: {} },
  steps: [
    Q(4, "Les pôles", R`<p>$1-X^{a}$ est scindé à racines simples, de racines $\mathbb U_a$. L'ordre de $w$ est $\#\{i : w^{a_i} = 1\}$.</p>`, R`<p>$1-X^{a_i} = -\prod_{\zeta\in\mathbb U_{a_i}}(X-\zeta)$ est à racines simples. Donc $F = \frac1Q$ avec $Q = \prod(1-X^{a_i})$, et l'ordre d'un pôle $w$ est le nombre d'indices $i$ tels que $w\in\mathbb U_{a_i}$. Le pôle $1$ appartient à tous les $\mathbb U_{a_i}$ : il est d'ordre $s$.</p><p>Si $w$ est d'ordre $s$, alors $w^{a_i} = 1$ pour tout $i$. Par Bézout, $\sum a_ib_i = 1$ avec $b_i\in\mathbb Z$, et</p>$$w = w^{\sum a_ib_i} = \prod_i(w^{a_i})^{b_i} = 1.$$<p>Tout pôle $w\neq1$ est donc d'ordre $\leqslant s-1$, et $|w| = 1$.</p>`, ["pa-bez"]),
    Q(5, "Coefficients d'un élément simple", R`<p>Le rappel donne le coefficient $\frac c{z^{n+k}}\binom{n+k-1}{k-1}$, de module $|c|\binom{n+k-1}{k-1}$.</p>`, R`<p>Par le rappel, le coefficient de $X^n$ dans $\frac c{(z-X)^k}$ vaut $B_n = \frac c{z^{n+k}}\binom{n+k-1}{k-1}$. Comme $|z| = 1$ :</p>$$|B_n| = |c|\binom{n+k-1}{k-1} = |c|\frac{(n+1)(n+2)\cdots(n+k-1)}{(k-1)!} = O(n^{k-1}),$$<p>car c'est un polynôme de degré $k-1$ en $n$.</p>`, ["pa-geo"]),
    Q(6, "Seul le pôle 1 d'ordre s compte", R`<p>Décomposition : $F = \frac A{(1-X)^s}+\sum_{j\lt s}\frac{A_j}{(1-X)^j}+\sum_{w\neq1}\sum_{j\lt s}\frac{c_{w,j}}{(w-X)^j}$.</p>`, R`<p>$\deg Q = \sum a_i\geqslant1$ et le numérateur est $1$ : il n'y a pas de partie entière. Par Q4, la décomposition s'écrit</p>$$F = \frac A{(1-X)^s}+\sum_{j = 1}^{s-1}\frac{A_j}{(1-X)^j}+\sum_{w\neq1}\sum_{j = 1}^{s-1}\frac{c_{w,j}}{(w-X)^j}.$$<p>Par Q5 (tous les pôles sont de module $1$), chaque terme d'ordre $j\leqslant s-1$ contribue au coefficient de $X^n$ pour $O(n^{s-2})$, et il y en a un nombre fini. Le premier contribue pour $A\binom{n+s-1}{s-1}$ (rappel avec $z = 1$). Donc $q_n = A\binom{n+s-1}{s-1}+O(n^{s-2})$. Enfin, en multipliant la décomposition par $(1-x)^s$ et en faisant $x\to1$, tous les autres termes tendent vers $0$ : $A = \lim_{x\to1}(1-x)^sF(x)$.</p>`, ["pa-des"]),
    Q(7, "Calcul de la constante", R`<p>$\frac{1-x}{1-x^a} = \frac1{1+x+\dots+x^{a-1}}\to\frac1a$.</p>`, R`<p>$(1-x)^sF(x) = \prod_{i=1}^s\frac{1-x}{1-x^{a_i}} = \prod_{i=1}^s\frac1{1+x+\dots+x^{a_i-1}}\xrightarrow[x\to1]{}\prod_{i=1}^s\frac1{a_i}$. Donc $A = \frac1{a_1\cdots a_s}$. Comme $\binom{n+s-1}{s-1} = \frac{(n+1)\cdots(n+s-1)}{(s-1)!}\sim\frac{n^{s-1}}{(s-1)!}$ et $O(n^{s-2}) = o(n^{s-1})$ :</p><div class="sbox">$$q_n\sim\frac{n^{s-1}}{(s-1)!\,a_1\cdots a_s}.$$</div>${figPoles}`)
  ],
  piege: R`Le terme $A\binom{n+s-1}{s-1}$ contient lui-même des termes en $n^{s-2}$ : l'équivalent est exact, mais le développement à deux termes demande de regarder aussi les pôles d'ordre $s-1$ (Q9).`,
  methode: R`Asymptotique des coefficients d'une fraction rationnelle : les pôles de plus petit module dominent, et parmi eux ceux d'ordre maximal ; un pôle $z$ d'ordre $k$ donne $\frac{n^{k-1}}{(k-1)!}z^{-n}\times$constante.`
},

/* ===================== Partie III ===================== */
{ id: "part-3", ...P, part: "Partie III", time: "30 min",
  title: "La monnaie européenne et au-delà",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="8">
<li>Pour $\{1,2\}$, décomposer $F$ en éléments simples et retrouver $q_n = \frac{2n+3+(-1)^n}4$.</li>
<li>Pour $\{1,2,5,10\}$, donner l'équivalent. On admet que si $s-1$ quelconques des $a_i$ sont premiers entre eux, le terme suivant est $\frac{(a_1+\dots+a_s)\,n^{s-2}}{2\,(s-2)!\,a_1\cdots a_s}$. Vérifier cette hypothèse pour $\{1,2,5,10\}$ et écrire le développement à deux termes.</li>
<li>Soit $p(n)$ le nombre de partitions de $n$ (parts quelconques). Montrer que pour tout $s$, $p(n)\geqslant\frac{n^{s-1}}{s!\,(s-1)!}(1+o(1))$, et en déduire que $p(n)$ croît plus vite que tout polynôme.</li></ol>`,
  decode: { donnees: [R`Partie II.`], but: R`Exploiter la méthode sur des exemples.`, cles: {} },
  steps: [
    Q(8, "Formule exacte pour {1, 2}", R`<p>$\frac1{(1-X)^2(1+X)} = \frac\alpha{(1-X)^2}+\frac\beta{1-X}+\frac\gamma{1+X}$.</p>`, R`<p>$(1-X)(1-X^2) = (1-X)^2(1+X)$. On cherche $\frac1{(1-X)^2(1+X)} = \frac\alpha{(1-X)^2}+\frac\beta{1-X}+\frac\gamma{1+X}$. En multipliant par $(1-X)^2$ et $X = 1$ : $\alpha = \frac12$. En multipliant par $1+X$ et $X = -1$ : $\gamma = \frac14$. En $X = 0$ : $1 = \alpha+\beta+\gamma$, donc $\beta = \frac14$. Avec $\frac1{(1-X)^2} = \sum(n+1)X^n$ :</p>$$q_n = \frac{n+1}2+\frac14+\frac{(-1)^n}4 = \frac{2n+3+(-1)^n}4.$$<p>Pour $n$ pair, $\frac{2n+4}4 = \frac n2+1$ ; pour $n$ impair, $\frac{2n+2}4 = \frac{n+1}2$ : c'est bien $\lfloor\frac n2\rfloor+1$ (Q3). Le pôle $-1$, d'ordre $1$, donne la petite oscillation $\frac{(-1)^n}4$.</p>`),
    Q(9, "Pièces et billets", R`<p>$s = 4$, $\prod a_i = 100$, $\sum a_i = 18$.</p>`, R`<p>Par Q7 : $q_n\sim\frac{n^3}{3!\cdot1\cdot2\cdot5\cdot10} = \frac{n^3}{600}$.</p><p>Les triplets $\{1,2,5\},\{1,2,10\},\{1,5,10\}$ contiennent $1$, et $\gcd(2,5,10) = 1$ : l'hypothèse est vérifiée. Alors aucun pôle $w\neq1$ n'est d'ordre $3 = s-1$ (même argument de Bézout qu'en Q4), et le terme suivant est $\frac{18\,n^2}{2\cdot2!\cdot100} = \frac{9n^2}{200}$ :</p>$$q_n = \frac{n^3}{600}+\frac{9n^2}{200}+O(n).$$<p>Numériquement, $q_{100} = 2156$, contre $\frac{10^6}{600}\approx1667$ et $1667+450 = 2117$.</p>${figQ}`),
    Q(10, "Les partitions quelconques", R`<p>Une partition de $n$ en parts $\leqslant s$ est une partition. $\{1,\dots,s\}$ est premier entre eux.</p>`, R`<p>Une solution de $k_1\cdot1+k_2\cdot2+\dots+k_s\cdot s = n$ définit une partition de $n$ (avec $k_j$ parts égales à $j$), et deux solutions distinctes donnent des partitions distinctes. Donc $p(n)\geqslant q_n^{(s)}$, le nombre associé aux pièces $\{1,\dots,s\}$ (premières entre elles, car $1$ en fait partie). Par Q7 :</p>$$p(n)\geqslant q_n^{(s)}\sim\frac{n^{s-1}}{(s-1)!\,s!}.$$<p>Pour tout entier $d$, en prenant $s = d+2$ : $\frac{p(n)}{n^d}\geqslant\frac{q_n^{(s)}}{n^d}\to+\infty$. Ainsi $p(n)$ croît plus vite que tout polynôme. (Hardy-Ramanujan : $p(n)\sim\frac1{4n\sqrt3}e^{\pi\sqrt{2n/3}}$, croissance sous-exponentielle.)</p>`)
  ],
  piege: R`L'équivalent ne donne pas une bonne approximation numérique pour $n$ modéré : le terme en $n^{s-2}$ est relativement grand ($\frac{9n^2}{200}$ contre $\frac{n^3}{600}$ : égalité pour $n = 27$).`,
  methode: R`Série génératrice rationnelle : coefficients = somme de quasi-polynômes, un par pôle ; le terme dominant vient du pôle d'ordre maximal sur le cercle de convergence.`
}
]);
})();

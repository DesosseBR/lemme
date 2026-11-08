/* Commando X-ENS · Aller plus loin · Sujet « Théorème des lacunes d'Hadamard ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 19, kind: "probleme", qnav: true, side: true, level: 5, plus: "lac",
  sujet: "Le théorème des lacunes d'Hadamard",
  sujetDesc: "Une série entière Σ aₙ z^{pₙ} de rayon 1 dont les exposants croissent géométriquement (p_{n+1} ≥ c pₙ, c > 1) ne se prolonge analytiquement au voisinage d'aucun point du cercle unité : le cercle est une frontière naturelle. La preuve compose la somme avec le polynôme (z^M + z^{M+1})/2, qui envoie un disque un peu plus grand dans le domaine de prolongement, et exploite le fait que les supports des puissances ne se chevauchent pas." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "la-hol": { t: "Holomorphe = analytique (admis)", b: R`$$f\text{ holomorphe sur }U\ \Longrightarrow\ f\text{ DSE sur tout disque }D\subset U;\qquad f = g\text{ sur }V\neq\varnothing,\ U\text{ connexe}\Rightarrow f = g\text{ sur }U.$$` },
  "la-dist": { t: "Distance entre compact et fermé", b: R`<div class="sbox">$$K\ \text{compact},\ F\ \text{fermé},\ K\cap F = \emptyset\ \Longrightarrow\ d(K,F) = \inf_{x\in K}d(x,F)>0.$$</div>` },
  "la-ray": { t: "Rayon de convergence", b: R`$$\begin{gathered}\sum|c_m||w_0|^m\lt\infty,\ |w_0|>R'\Rightarrow R>R',\\[4pt]c_m\geqslant0,\ R = 1\Rightarrow\sum c_mr^m\xrightarrow[r\to1^-]{}\sum c_m\in[0,+\infty].\end{gathered}$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\mathbb D = \{|z|\lt1\}$, $\overline{\mathbb D}$ le disque fermé. Soit $f(z) = \sum_{n\geqslant0}a_nz^{p_n}$ une série entière de rayon de convergence $1$, où $(p_n)$ est une suite strictement croissante d'entiers <b>lacunaire</b> : il existe $c>1$ avec $p_{n+1}\geqslant cp_n$ pour tout $n$. Un point $z_0$ avec $|z_0| = 1$ est <b>régulier</b> s'il existe un ouvert $\Omega\supset\mathbb D\cup\{z_0\}$ et $g$ holomorphe sur $\Omega$ avec $g = f$ sur $\mathbb D$ ; sinon il est <b>singulier</b>. On veut montrer le <b>théorème d'Hadamard</b> : tous les points du cercle unité sont singuliers.</p>`;

const lac = r => t => { let re = 0, im = 0; for (let n = 0; n < 25; n++) { const p = Math.pow(2, n), m = Math.pow(r, p); if (m < 1e-12) break; re += m * Math.cos(p * t); im += m * Math.sin(p * t); } return Math.hypot(re, im); };
const figBord = GRAPH({ w: 470, h: 250, x: [0, 2 * Math.PI], y: [0, 9.5], xt: [Math.PI / 2, Math.PI, 3 * Math.PI / 2, 2 * Math.PI], xtl: ["π/2", "π", "3π/2", "2π"], yt: [2, 4, 6, 8], xl: "θ", curves: [{ f: lac(0.9), c: "r", n: 900, lab: [4.6, 5.2, "r = 0,9"] }, { f: lac(0.98), c: "b", n: 1600, lab: [3.4, 8.6, "r = 0,98"] }] }, R`$\theta\mapsto|f(re^{i\theta})|$ pour $f(z) = \sum_nz^{2^n}$. Quand $r\to1$, des pics apparaissent en $\theta = 0$, puis aux angles $\frac{2k\pi}{2^m}$ : les singularités sont denses sur le cercle.`, "Frontière naturelle");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "lac-1", ...P, part: "Partie I", time: "30 min",
  title: "Un exemple et un lemme géométrique",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Pour $\sum_nz^n = \frac1{1-z}$, montrer que $1$ est singulier et que tout autre point du cercle est régulier.</li>
<li>Pour $g(z) = \sum_{n\geqslant0}z^{2^n}$ : montrer que le rayon est $1$, que $g(r)\to+\infty$ quand $r\to1^-$, puis que pour $\zeta$ racine $2^k$-ième de l'unité, $|g(r\zeta)|\to+\infty$. En déduire directement que tout point du cercle est singulier.</li>
<li>Soit $M\geqslant1$ et $Q(z) = \frac{z^M+z^{M+1}}2$. Montrer que $Q(\overline{\mathbb D}\setminus\{1\})\subset\mathbb D$ et $Q(1) = 1$. En déduire que si $\Omega$ est un ouvert contenant $\mathbb D\cup\{1\}$, il existe $R>1$ avec $Q(D(0,R))\subset\Omega$.</li></ol>`,
  decode: { donnees: [R`Définition des points singuliers.`], but: R`Comprendre les singularités sur des exemples, et préparer un polynôme qui « pousse » le disque dans le domaine de prolongement.`, cles: {} },
  steps: [
    Q(1, "La série géométrique", R`<p>$\frac1{1-z}$ est holomorphe sur $\mathbb C\setminus\{1\}$ ; en $1$, une limite infinie.</p>`, R`<p>$z\mapsto\frac1{1-z}$ est holomorphe sur $\Omega = \mathbb C\setminus\{1\}$, qui contient $\mathbb D\cup\{z_0\}$ pour tout $z_0\neq1$ du cercle : ces points sont réguliers. En $1$ : un prolongement $g$ holomorphe près de $1$ serait continu en $1$, mais $f(r) = \frac1{1-r}\to+\infty$ quand $r\to1^-$. Donc $1$ est singulier.</p>`),
    Q(2, "Un exemple lacunaire", R`<p>$g(r\zeta) = \sum_{n\lt k}(r\zeta)^{2^n}+\sum_{n\geqslant k}r^{2^n}$ car $\zeta^{2^n} = 1$ pour $n\geqslant k$.</p>`, R`<p>Les coefficients valent $0$ ou $1$ (une infinité de $1$) : rayon $1$. Pour $0\lt r\lt1$ et tout $N$, $g(r)\geqslant\sum_{n\leqslant N}r^{2^n}\to N+1$ quand $r\to1$ : $g(r)\to+\infty$. Si $\zeta^{2^k} = 1$, alors $\zeta^{2^n} = 1$ pour $n\geqslant k$ et</p>$$|g(r\zeta)|\geqslant\sum_{n\geqslant k}r^{2^n}-k\xrightarrow[r\to1^-]{}+\infty.$$<p>Un point $\zeta$ de ce type ne peut donc pas être régulier (un prolongement serait borné près de $\zeta$). Les racines $2^k$-ièmes de l'unité sont denses sur le cercle, et l'ensemble des points réguliers est ouvert (sur le cercle) : s'il contenait un point, il contiendrait un arc, donc une racine $2^k$-ième. Donc tous les points sont singuliers.</p>${figBord}`),
    Q(3, "Le polynôme Q", R`<p>$|Q(z)|\leqslant|z|^M\frac{|1+z|}2$ ; égalité $|1+z| = 2$ avec $|z| = 1$ seulement pour $z = 1$. Puis $d(\overline{\mathbb D},Q^{-1}(\Omega^c))>0$.</p>`, R`<p>$|Q(z)| = |z|^M\frac{|1+z|}2$. Si $|z|\lt1$ : $|Q(z)|\lt1$. Si $|z| = 1$, $z\neq1$ : $|1+z|\lt|1|+|z| = 2$ (égalité seulement si $z$ est positivement lié à $1$, soit $z = 1$), donc $|Q(z)|\lt1$. Et $Q(1) = 1$. Ainsi $Q(\overline{\mathbb D})\subset\mathbb D\cup\{1\}\subset\Omega$.</p><p>$F = Q^{-1}(\mathbb C\setminus\Omega)$ est fermé ($Q$ continue, $\Omega$ ouvert) et disjoint du compact $\overline{\mathbb D}$ : $\mu = d(\overline{\mathbb D},F)>0$. Avec $R = 1+\frac\mu2$, $D(0,R)\cap F = \emptyset$, soit $Q(D(0,R))\subset\Omega$.</p>`, ["la-dist"])
  ],
  piege: R`Une série peut converger en un point singulier : $\sum\frac{z^{2^n}}{n^2}$ converge (absolument) sur tout le cercle, et pourtant tous les points sont singuliers par le théorème d'Hadamard. « Singulier » ne veut pas dire « la série diverge ».`,
  methode: R`Montrer qu'un point n'est pas régulier : trouver une suite qui y converge le long de laquelle la somme est non bornée, ou, plus généralement, contredire le rayon de convergence.`
},

/* ===================== Partie II ===================== */
{ id: "lac-2", ...P, part: "Partie II", time: "40 min",
  title: "Le théorème d'Hadamard",
  enonce: PRE + R`<p><b>Partie II.</b> Par l'absurde, on suppose $1$ régulier : $g$ holomorphe sur $\Omega\supset\mathbb D\cup\{1\}$ prolonge $f$.</p><ol start="4">
<li>Montrer qu'il existe $M\geqslant1$ tel que $Mp_{n+1}>(M+1)p_n$ pour tout $n$.</li>
<li>Avec ce $M$, $Q$ et $R$ de la question 3, on pose $F = g\circ Q$ sur $D(0,R)$. Montrer que $F(z) = \sum_mb_mz^m$ sur $D(0,R)$, et que pour $|z|\lt1$ : $F(z) = \sum_na_n\frac{(z^M+z^{M+1})^{p_n}}{2^{p_n}}$.</li>
<li>Montrer que les polynômes $(z^M+z^{M+1})^{p_n}$, développés, ont des supports (ensembles d'exposants) deux à deux disjoints, et en déduire que $b_m$ s'obtient en développant chaque terme.</li>
<li>En prenant $x\in\,]1,R[$, montrer que $\sum_n|a_n|\,Q(x)^{p_n}\lt+\infty$ avec $Q(x)>1$, et conclure à une contradiction. En déduire que $1$, puis tout point du cercle, est singulier.</li></ol>`,
  decode: { donnees: [R`Partie I : $Q(D(0,R))\subset\Omega$ ; lacunarité.`], but: R`Faire « voir » le rayon de convergence de $\sum a_nw^{p_n}$ au-delà de $1$ à travers $F = g\circ Q$, holomorphe sur un disque plus grand.`, cles: {} },
  steps: [
    Q(4, "Choix de M", R`<p>$\frac{M+1}M\to1\lt c$.</p>`, R`<p>Comme $\frac{M+1}M\to1\lt c$, on choisit $M$ avec $\frac{M+1}M\lt c$. Alors $\frac{p_{n+1}}{p_n}\geqslant c>\frac{M+1}M$, soit $Mp_{n+1}>(M+1)p_n$.</p>`),
    Q(5, "La fonction composée", R`<p>$F$ holomorphe sur $D(0,R)$, donc développable sur tout ce disque. Sur $\mathbb D$, $Q(z)\in\mathbb D$ et $g = f$.</p>`, R`<p>$F = g\circ Q$ est holomorphe sur $D(0,R)$ (composée), donc somme d'une série entière $\sum b_mz^m$ de rayon $\geqslant R$. Pour $|z|\lt1$, $Q(z)\in\mathbb D$ (Q3) et $g(Q(z)) = f(Q(z)) = \sum_na_nQ(z)^{p_n}$, avec $Q(z)^{p_n} = \frac{(z^M+z^{M+1})^{p_n}}{2^{p_n}}$.</p>`, ["la-hol"]),
    Q(6, "Supports disjoints", R`<p>$(z^M+z^{M+1})^{p} = z^{Mp}(1+z)^{p}$ : exposants de $Mp$ à $(M+1)p$.</p>`, R`<p>$(z^M+z^{M+1})^{p_n} = z^{Mp_n}(1+z)^{p_n} = \sum_{k = 0}^{p_n}\binom{p_n}kz^{Mp_n+k}$ : exposants dans $[Mp_n,(M+1)p_n]$. Par Q4, $(M+1)p_n\lt Mp_{n+1}$ : ces intervalles sont deux à deux disjoints. Pour $|z|\lt1$, on peut réordonner la série double (elle converge absolument : $\sum|a_n|\frac{(|z|^M+|z|^{M+1})^{p_n}}{2^{p_n}}\leqslant\sum|a_n||z|^{Mp_n}\lt\infty$), et par unicité du développement en série entière sur $\mathbb D$ :</p><div class="sbox">$$b_m = \frac{a_n}{2^{p_n}}\binom{p_n}k\ \text{si}\ m = Mp_n+k\ (0\leqslant k\leqslant p_n),\qquad b_m = 0\ \text{sinon}.$$</div>`),
    Q(7, "La contradiction", R`<p>$\sum|b_m|x^m\lt\infty$ pour $x\lt R$, et en regroupant : $\sum_n|a_n|\frac{(x^M+x^{M+1})^{p_n}}{2^{p_n}}$.</p>`, R`<p>Soit $x\in\,]1,R[$. La série $\sum b_mx^m$ converge absolument ($x\lt R\leqslant$ rayon). Par Q6, $|b_m| = \frac{|a_n|}{2^{p_n}}\binom{p_n}k$ pour $m = Mp_n+k$ ; en regroupant les termes positifs par blocs :</p>$$\begin{aligned}\sum_m|b_m|x^m &= \sum_n\frac{|a_n|}{2^{p_n}}\sum_k\binom{p_n}kx^{Mp_n+k}\\&= \sum_n|a_n|\Big(\frac{x^M+x^{M+1}}2\Big)^{p_n} = \sum_n|a_n|Q(x)^{p_n}\lt+\infty.\end{aligned}$$<p>Or $Q(x) = x^M\frac{1+x}2>1$. La série $\sum a_nw^{p_n}$ converge donc absolument en $w = Q(x)>1$ : son rayon est $\geqslant Q(x)>1$, contradiction. Donc $1$ est singulier.</p><p>Pour $z_0 = e^{i\theta}$ : $f_\theta(z) = f(e^{i\theta}z) = \sum(a_ne^{i\theta p_n})z^{p_n}$ est lacunaire de rayon $1$, et $z_0$ est régulier pour $f$ si et seulement si $1$ l'est pour $f_\theta$. Donc :</p><div class="sbox"><p>Tous les points du cercle unité sont singuliers : le cercle est une <b>frontière naturelle</b> de $f$.</p></div>`, ["la-ray"])
  ],
  piege: R`Le regroupement par blocs n'est licite que parce que les supports sont <b>disjoints</b> : sinon les coefficients $b_m$ mélangeraient plusieurs $a_n$, et des compensations pourraient rendre $\sum|b_m|x^m$ finie sans que $\sum|a_n|Q(x)^{p_n}$ le soit.`,
  methode: R`Changement de variable polynomial : composer avec un polynôme qui envoie un disque plus grand dans le domaine d'holomorphie, puis lire les coefficients. La lacunarité garantit qu'on peut remonter aux coefficients d'origine.`
},

/* ===================== Partie III ===================== */
{ id: "lac-3", ...P, part: "Partie III", time: "25 min",
  title: "Exemples et limites du théorème",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="8">
<li>Montrer que $\sum_nz^{n!}$ et $\sum_n\frac{z^{2^n}}{n^2}$ ont le cercle unité pour frontière naturelle. La seconde est continue sur $\overline{\mathbb D}$ : pourquoi n'est-ce pas contradictoire ?</li>
<li>Montrer que pour $p_n = n^2$, la suite n'est pas lacunaire au sens d'Hadamard. (Le théorème de Fabry, admis, montre que $\sum z^{n^2}$ a pourtant aussi le cercle pour frontière naturelle.) Donner une série entière non lacunaire de rayon $1$ dont le seul point singulier est $1$.</li>
<li>Montrer que toute série entière de rayon $1$ a au moins un point singulier sur le cercle. (Si tous étaient réguliers, recouvrir le cercle par un nombre fini de disques de prolongement.)</li></ol>`,
  decode: { donnees: [R`Théorème d'Hadamard.`], but: R`Situer le théorème : ce qu'il donne, et ce qu'il ne dit pas.`, cles: {} },
  steps: [
    Q(8, "Deux exemples", R`<p>$\frac{(n+1)!}{n!} = n+1\geqslant2$ ; $\frac{2^{n+1}}{2^n} = 2$. Rayon : $\limsup|a_n|^{1/p_n} = 1$.</p>`, R`<p>$p_n = n!$ ($n\geqslant1$) : $\frac{p_{n+1}}{p_n} = n+1\geqslant2$, lacunaire ; coefficients $1$, rayon $1$. $p_n = 2^n$ : rapport $2$ ; coefficients $\frac1{n^2}$, et $\big(\frac1{n^2}\big)^{1/2^n}\to1$ : rayon $1$. Par Hadamard, le cercle est une frontière naturelle dans les deux cas.</p><p>$\sum\frac{z^{2^n}}{n^2}$ converge normalement sur $\overline{\mathbb D}$ : sa somme est continue sur le disque fermé. Ce n'est pas contradictoire : être singulier signifie ne pas avoir de prolongement <b>holomorphe</b> sur un voisinage ; une fonction peut être continue jusqu'au bord sans se prolonger holomorphiquement au-delà.</p>`),
    Q(9, "Hors du cadre", R`<p>$\frac{(n+1)^2}{n^2}\to1$. Pour l'exemple, penser à $\frac1{1-z}$.</p>`, R`<p>$\frac{(n+1)^2}{n^2}\to1$ : aucune constante $c>1$ ne minore ce rapport. Le théorème d'Hadamard ne s'applique pas ; il faut un résultat plus fin (Fabry : $\frac{p_n}n\to+\infty$ suffit).</p><p>La série $\sum z^n = \frac1{1-z}$ n'est pas lacunaire, a pour rayon $1$ et un seul point singulier, $1$ (Q1). La lacunarité est donc essentielle.</p>`),
    Q(10, "Au moins un point singulier", R`<p>Compacité du cercle ; les prolongements se recollent par le principe du prolongement analytique ; on obtient un prolongement sur $D(0,1+\eta)$.</p>`, R`<p>Si tout point $\zeta$ du cercle était régulier, il y aurait un disque $D_\zeta$ centré en $\zeta$ et $g_\zeta$ holomorphe sur $\mathbb D\cup D_\zeta$ (connexe) prolongeant $f$. Par compacité, un nombre fini $D_{\zeta_1},\dots,D_{\zeta_r}$ recouvre le cercle. Sur $D_{\zeta_i}\cap D_{\zeta_j}$ (connexe, intersection de deux disques, qui rencontre $\mathbb D$ si non vide), $g_{\zeta_i} = f = g_{\zeta_j}$ sur la partie dans $\mathbb D$, donc partout par prolongement analytique. Les $g_{\zeta_i}$ se recollent en une fonction holomorphe sur $\mathbb D\cup\bigcup D_{\zeta_i}\supset D(0,1+\eta)$ pour un $\eta>0$. Elle est développable en série entière sur ce disque, et ce développement coïncide avec celui de $f$ : le rayon serait $\geqslant1+\eta$. Contradiction.</p><div class="sbox"><p>Toute série entière de rayon $R\in\,]0,+\infty[$ a au moins un point singulier sur le cercle de rayon $R$ ; une série lacunaire les a tous.</p></div>`, ["la-hol"])
  ],
  piege: R`« Rayon $1$ » dit qu'il y a au moins un point singulier, pas qu'ils le sont tous ; et inversement une singularité n'empêche pas la convergence de la série au point considéré.`,
  methode: R`Compacité du bord et recollement par prolongement analytique : si une propriété locale vaut en chaque point du cercle, on la globalise sur une couronne.`
}
]);
})();

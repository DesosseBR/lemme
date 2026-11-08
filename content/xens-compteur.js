/* Commando X-ENS · Aller plus loin · Sujet « Compter jusqu'à n » (compteur probabiliste de Morris-Flajolet). */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 14, kind: "probleme", qnav: true, side: true, level: 4, plus: "cpt",
  sujet: "Compter jusqu'à n avec log log n bits",
  sujetDesc: "On étudie un compteur probabiliste : au lieu de stocker n, on stocke un entier S_n de l'ordre de log₂ n, incrémenté avec une probabilité qui décroît. On montre que 2^{S_n} − 1 estime n sans biais, on calcule sa variance, on construit un (ε, δ)-estimateur par moyenne de copies indépendantes, et on contrôle la mémoire presque sûrement avec le lemme de Borel-Cantelli." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "cpt-indep": { t: "Indépendance et espérance", b: R`<p>Si $X$ et $Y$ sont indépendantes et intégrables, $\mathbb E[XY] = \mathbb E[X]\,\mathbb E[Y]$. Des fonctions de familles disjointes de variables indépendantes sont indépendantes (lemme des coalitions).</p>` },
  "cpt-bt": { t: "Bienaymé-Tchebychev", b: R`<p>Si $X$ admet une variance : $\mathbb P\big(|X-\mathbb E[X]|\geqslant\alpha\big)\leqslant\dfrac{\operatorname{Var}(X)}{\alpha^2}$ pour tout $\alpha>0$. Pour $X_1,\dots,X_k$ indépendantes, $\operatorname{Var}(X_1+\dots+X_k) = \sum\operatorname{Var}(X_i)$.</p>` },
  "cpt-lim": { t: "Limite supérieure d'événements", b: R`<p>$\limsup A_n = \bigcap_{n\geqslant0}\bigcup_{k\geqslant n}A_k$ est l'événement « une infinité des $A_k$ sont réalisés ». Son complémentaire est « à partir d'un certain rang, aucun $A_k$ n'est réalisé ».</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> On veut compter des événements (des requêtes reçues par un serveur, par exemple) sans stocker le nombre exact $n$, qui demande $\lfloor\log_2n\rfloor+1$ bits. Soit $(u_{i,j})_{i\geqslant0,\,j\geqslant1}$ une famille de variables aléatoires <b>indépendantes</b>, avec $u_{i,j}$ de loi de Bernoulli de paramètre $2^{-i}$. On pose $S_0 = 0$ et, pour $n\geqslant0$, $$S_{n+1} = S_n+u_{S_n,\,n+1}.$$ Autrement dit, à la $(n+1)$-ième requête, le compteur passe de $S_n$ à $S_n+1$ avec probabilité $2^{-S_n}$. On pose $Y_n = 2^{S_n}-1$. Pour $\varepsilon,\delta\in\,]0,1[$, un <b>$(\varepsilon,\delta)$-estimateur</b> de $\mu>0$ est une variable $Z$ telle que $\mathbb P(|Z-\mu|\geqslant\varepsilon\mu)\leqslant\delta$.</p>`;

/* Trajectoires simulées (générateur pseudo-aléatoire à graine fixe, pour une figure stable) */
const traj = seed => {
  let a = seed >>> 0; const rnd = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const Y = [0]; let s = 0;
  for (let n = 1; n <= 400; n++) { if (rnd() < Math.pow(2, -s)) s++; Y.push(Math.pow(2, s) - 1); }
  return x => Y[Math.max(0, Math.min(400, Math.floor(x)))];
};
const figTraj = GRAPH({ w: 460, h: 250, x: [0, 400], y: [0, 640], xt: [100, 200, 300, 400], yt: [128, 256, 512], xl: "n", curves: [{ f: x => x, c: "k", dash: true, lab: [300, 345, "Y = n", "end"] }, { f: traj(7), c: "b", n: 400 }, { f: traj(2024), c: "r", n: 400 }, { f: traj(31), c: "g", n: 400 }] }, R`Trois trajectoires simulées de $Y_n = 2^{S_n}-1$ pour $n\leqslant400$. Le compteur ne prend que les valeurs $2^s-1$ ; il reste en moyenne sur la droite $Y = n$, et chaque trajectoire ne stocke que $S_n\leqslant9$.`, "Trajectoires du compteur");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "cpt-1", ...P, part: "Partie I", time: "30 min",
  title: "Un estimateur sans biais de n",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $0\leqslant S_n\leqslant n$, que $S_1 = 1$, et que $S_n$ est une fonction des seules variables $(u_{i,j})_{i\geqslant0,\,j\leqslant n}$. En déduire que, pour tout $k$, $S_n$ et $u_{k,n+1}$ sont indépendantes.</li>
<li>Calculer $\mathbb E\big[2^{u_{k,n+1}}\big]$, puis montrer que $\mathbb E\big[2^{S_{n+1}}\big] = \mathbb E\big[2^{S_n}\big]+1$ (on pourra écrire $2^{S_{n+1}} = \sum_{k=0}^n2^{k+u_{k,n+1}}\mathbf 1_{S_n = k}$).</li>
<li>Retrouver ce résultat par une autre méthode : calculer $\mathbb P(S_{n+1} = k,\ S_n = k)$ et $\mathbb P(S_{n+1} = k,\ S_n = k-1)$, puis $\mathbb E\big[2^{S_{n+1}}-1\big]$ par la formule de transfert.</li>
<li>En déduire $\mathbb E[Y_n] = n$. Calculer la loi de $S_2$ et vérifier.</li></ol>`,
  decode: { donnees: [R`$u_{k,n+1}\sim\mathcal B(2^{-k})$, indépendante de $S_n$.`], but: R`Montrer que $2^{S_n}-1$ est d'espérance $n$.`, cles: {} },
  steps: [
    Q(1, "Premières propriétés", R`<p>Récurrence : $S_{n+1}-S_n\in\{0,1\}$. Pour $S_1$ : $u_{0,1}$ suit $\mathcal B(1)$.</p>`, R`<p>Chaque pas ajoute $u_{S_n,n+1}\in\{0,1\}$, donc par récurrence $0\leqslant S_n\leqslant n$. $u_{0,1}$ suit la loi $\mathcal B(2^0) = \mathcal B(1)$ : elle vaut $1$ presque sûrement, et $S_1 = 0+u_{0,1} = 1$.</p><p>Par récurrence, $S_n$ est une fonction des $u_{i,j}$ pour $j\leqslant n$ : c'est vrai pour $S_0 = 0$, et $S_{n+1} = S_n+\sum_{i=0}^n\mathbf 1_{S_n = i}u_{i,n+1}$ ne fait intervenir que $S_n$ et les $u_{i,n+1}$.</p><p>Les familles $(u_{i,j})_{j\leqslant n}$ et $\{u_{k,n+1}\}$ sont disjointes, donc (lemme des coalitions) $S_n$ et $u_{k,n+1}$ sont indépendantes.</p>`, ["cpt-indep"]),
    Q(2, "Récurrence sur l'espérance", R`<p>$\mathbb E[2^{u}] = 2\cdot2^{-k}+1\cdot(1-2^{-k})$. Puis l'indépendance terme à terme.</p>`, R`<p>Pour $u\sim\mathcal B(2^{-k})$ : $2^u$ vaut $2$ avec probabilité $2^{-k}$ et $1$ sinon, donc</p>$$\mathbb E[2^{u_{k,n+1}}] = 2\cdot2^{-k}+(1-2^{-k}) = 1+2^{-k}.$$<p>Sur $\{S_n = k\}$, $S_{n+1} = k+u_{k,n+1}$ ; comme $0\leqslant S_n\leqslant n$, la somme est finie :</p>$$2^{S_{n+1}} = \sum_{k=0}^n2^k\cdot2^{u_{k,n+1}}\mathbf 1_{S_n = k}.$$<p>Par linéarité et indépendance de $u_{k,n+1}$ et $\mathbf 1_{S_n = k}$ (Q1) :</p>$$\begin{aligned}\mathbb E[2^{S_{n+1}}]&= \sum_{k=0}^n2^k(1+2^{-k})\,\mathbb P(S_n = k)\\&= \sum_{k=0}^n2^k\,\mathbb P(S_n = k)+\sum_{k=0}^n\mathbb P(S_n = k).\end{aligned}$$<div class="sbox">$$\mathbb E[2^{S_{n+1}}] = \mathbb E[2^{S_n}]+1.$$</div>`, ["cpt-indep"]),
    Q(3, "Par la formule de transfert", R`<p>$\mathbb P(S_{n+1} = k,\ S_n = k) = \mathbb P(S_n = k)\,\mathbb P(u_{k,n+1} = 0)$.</p>`, R`<p>Par indépendance :</p>$$\mathbb P(S_{n+1} = k,\ S_n = k) = \mathbb P(S_n = k,\ u_{k,n+1} = 0) = \mathbb P(S_n = k)(1-2^{-k}),$$$$\mathbb P(S_{n+1} = k,\ S_n = k-1) = \mathbb P(S_n = k-1)\,2^{-(k-1)}.$$<p>Comme $S_{n+1} = k$ impose $S_n\in\{k,k-1\}$, la formule de transfert donne (le terme $k = 0$ est nul) :</p>$$\mathbb E[2^{S_{n+1}}-1] = \sum_{k\geqslant1}(2^k-1)\Big[\mathbb P(S_n = k)(1-2^{-k})+\mathbb P(S_n = k-1)\,2^{-k+1}\Big].$$<p>On décale l'indice dans la seconde somme ($k\to k+1$) et on regroupe selon $\mathbb P(S_n = k)$, $k\geqslant0$ :</p>$$\begin{aligned}\mathbb E[2^{S_{n+1}}-1]&= \sum_{k\geqslant0}\Big[(2^k-1)(1-2^{-k})+(2^{k+1}-1)2^{-k}\Big]\mathbb P(S_n = k)\\&= \sum_{k\geqslant0}\Big[2^k-1-1+2^{-k}+2-2^{-k}\Big]\mathbb P(S_n = k)\\&= \sum_{k\geqslant0}2^k\,\mathbb P(S_n = k).\end{aligned}$$<p>C'est $\mathbb E[2^{S_n}]$ : on retrouve $\mathbb E[2^{S_{n+1}}] = \mathbb E[2^{S_n}]+1$.</p>`),
    Q(4, "Espérance de Yₙ", R`<p>Récurrence à partir de $\mathbb E[2^{S_0}] = 1$.</p>`, R`<p>Par récurrence, $\mathbb E[2^{S_n}] = \mathbb E[2^{S_0}]+n = n+1$, donc</p><div class="sbox">$$\mathbb E[Y_n] = \mathbb E[2^{S_n}]-1 = n.$$</div><p><b>Vérification pour $n = 2$.</b> $S_1 = 1$, puis $S_2 = 1+u_{1,2}$ avec $u_{1,2}\sim\mathcal B(\frac12)$ : $S_2\in\{1,2\}$ avec probabilité $\frac12$ chacun. Alors $Y_2\in\{1,3\}$ et $\mathbb E[Y_2] = \frac12(1+3) = 2$. ✓</p>${figTraj}`)
  ],
  piege: R`Écrire $\mathbb E[2^{S_{n+1}}] = \mathbb E[2^{S_n}]\,\mathbb E[2^{u_{S_n,n+1}}]$ : l'indice $S_n$ est aléatoire, et $u_{S_n,n+1}$ n'est pas indépendante de $S_n$. Il faut découper selon les valeurs de $S_n$.`,
  methode: R`Variable indexée par une variable aléatoire : découper sur $\{S_n = k\}$, où l'indice devient fixe, puis utiliser l'indépendance terme à terme.`
},

/* ===================== Partie II ===================== */
{ id: "cpt-2", ...P, part: "Partie II", time: "30 min",
  title: "Variance et (ε, δ)-estimateur",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="5">
<li>Montrer que $\mathbb E\big[4^{S_{n+1}}\big] = \mathbb E\big[4^{S_n}\big]+3(n+1)$, puis que $\mathbb E\big[4^{S_n}\big] = 1+\frac{3n(n+1)}2$.</li>
<li>En déduire $\operatorname{Var}(Y_n) = \dfrac{n(n-1)}2$. Vérifier pour $n = 1$ et $n = 2$.</li>
<li>Montrer que $Y_n$ seul n'est pas un bon estimateur : majorer $\mathbb P(|Y_n-n|\geqslant\varepsilon n)$ par Bienaymé-Tchebychev et commenter.</li>
<li>Soient $S_n^{(1)},\dots,S_n^{(k)}$ des copies indépendantes de $S_n$ (construites avec des familles $u$ indépendantes), $Y_n^{(i)} = 2^{S_n^{(i)}}-1$ et $U_n = \frac1k\sum_{i=1}^kY_n^{(i)}$. Montrer que $U_n$ est un $(\varepsilon,\delta)$-estimateur de $n$ dès que $k\geqslant\dfrac1{2\varepsilon^2\delta}$.</li></ol>`,
  decode: { donnees: [R`$\mathbb E[2^{S_n}] = n+1$ (Partie I).`], but: R`Calculer le moment d'ordre $2$ de $2^{S_n}$, puis moyenner pour réduire la variance.`, cles: {} },
  steps: [
    Q(5, "Le moment d'ordre 2", R`<p>$\mathbb E[4^{u}] = 4\cdot2^{-k}+(1-2^{-k}) = 1+3\cdot2^{-k}$.</p>`, R`<p>Même découpage qu'en Q2, avec $\mathbb E[4^{u_{k,n+1}}] = 4\cdot2^{-k}+(1-2^{-k}) = 1+3\cdot2^{-k}$ :</p>$$\begin{aligned}\mathbb E[4^{S_{n+1}}]&= \sum_{k=0}^n4^k(1+3\cdot2^{-k})\,\mathbb P(S_n = k)\\&= \sum_{k=0}^n\big(4^k+3\cdot2^k\big)\mathbb P(S_n = k) = \mathbb E[4^{S_n}]+3\,\mathbb E[2^{S_n}].\end{aligned}$$<p>Avec $\mathbb E[2^{S_n}] = n+1$ : $\mathbb E[4^{S_{n+1}}] = \mathbb E[4^{S_n}]+3(n+1)$. En sommant à partir de $\mathbb E[4^{S_0}] = 1$ :</p><div class="sbox">$$\mathbb E[4^{S_n}] = 1+3\sum_{j=0}^{n-1}(j+1) = 1+\frac{3n(n+1)}2.$$</div>`, ["cpt-indep"]),
    Q(6, "La variance", R`<p>$\operatorname{Var}(Y_n) = \operatorname{Var}(2^{S_n}) = \mathbb E[4^{S_n}]-(n+1)^2$.</p>`, R`<p>Une translation ne change pas la variance, et $(2^{S_n})^2 = 4^{S_n}$ :</p>$$\begin{aligned}\operatorname{Var}(Y_n)&= \mathbb E[4^{S_n}]-\mathbb E[2^{S_n}]^2 = 1+\frac{3n(n+1)}2-(n+1)^2\\&= \frac{2+3n^2+3n-2n^2-4n-2}2.\end{aligned}$$<div class="sbox">$$\operatorname{Var}(Y_n) = \frac{n^2-n}2 = \frac{n(n-1)}2.$$</div><p><b>Vérifications.</b> $n = 1$ : $Y_1 = 1$ est constante, variance $0$. ✓ $n = 2$ : $Y_2\in\{1,3\}$ équiprobables, variance $\frac12(1-2)^2+\frac12(3-2)^2 = 1 = \frac{2\cdot1}2$. ✓</p>`),
    Q(7, "Un seul compteur ne suffit pas", R`<p>Le rapport $\frac{\operatorname{Var}(Y_n)}{(\varepsilon n)^2}$ ne tend pas vers $0$.</p>`, R`<p>Bienaymé-Tchebychev :</p>$$\mathbb P(|Y_n-n|\geqslant\varepsilon n)\leqslant\frac{n(n-1)}{2\varepsilon^2n^2}\leqslant\frac1{2\varepsilon^2}.$$<p>Pour $\varepsilon\lt\frac1{\sqrt2}$, cette borne dépasse $1$ : elle ne dit rien. L'écart-type de $Y_n$ est de l'ordre de $\frac n{\sqrt2}$, comparable à $n$ : un seul compteur a une erreur relative de l'ordre de $70\,\%$.</p>`, ["cpt-bt"]),
    Q(8, "Moyenne de k copies", R`<p>$\operatorname{Var}(U_n) = \frac1{k^2}\sum\operatorname{Var}(Y_n^{(i)})$.</p>`, R`<p>Par linéarité, $\mathbb E[U_n] = n$. Par indépendance des copies :</p>$$\operatorname{Var}(U_n) = \frac1{k^2}\sum_{i=1}^k\operatorname{Var}(Y_n^{(i)}) = \frac{n(n-1)}{2k}.$$<p>Bienaymé-Tchebychev :</p>$$\mathbb P(|U_n-n|\geqslant\varepsilon n)\leqslant\frac{n(n-1)}{2k\varepsilon^2n^2}\leqslant\frac1{2k\varepsilon^2}\leqslant\delta\quad\text{dès que}\quad k\geqslant\frac1{2\varepsilon^2\delta}.$$<div class="sbox"><p>Avec $k = \big\lceil\frac1{2\varepsilon^2\delta}\big\rceil$ copies, $U_n$ est un $(\varepsilon,\delta)$-estimateur de $n$, pour <b>tout</b> $n$.</p></div><p>Exemple : $\varepsilon = 0{,}1$, $\delta = 0{,}05$ donne $k = 1000$.</p>`, ["cpt-bt"])
  ],
  piege: R`Le choix de $k$ ne doit pas dépendre de $n$ : c'est le cas ici car $\frac{n(n-1)}{n^2}\leqslant1$. Si la variance avait été d'ordre $n^3$, aucune taille fixe ne conviendrait.`,
  methode: R`Réduire la variance en moyennant $k$ copies indépendantes : l'écart-type est divisé par $\sqrt k$, et Bienaymé-Tchebychev donne une taille d'échantillon explicite.`
},

/* ===================== Partie III ===================== */
{ id: "cpt-3", ...P, part: "Partie III", time: "30 min",
  title: "La mémoire utilisée, presque sûrement",
  enonce: PRE + R`<p><b>Partie III.</b> On garde les notations de la Partie II, $k$ étant fixé.</p><ol start="9">
<li>(<b>Borel-Cantelli</b>) Soit $(A_n)$ une suite d'événements telle que $\sum\mathbb P(A_n)\lt+\infty$. Montrer que $\mathbb P(\limsup A_n) = 0$.</li>
<li>Pour stocker $U_n$, on stocke les $k$ entiers $S_n^{(i)}\geqslant1$ ($n\geqslant1$), ce qui demande $B_n = \sum_{i=1}^k\big(\lfloor\log_2S_n^{(i)}\rfloor+1\big)$ bits. On note $L_n = \log_2\log_2n$. Montrer que, pour $n\geqslant4$, $$\{B_n\geqslant3kL_n\}\subset\bigcup_{i=1}^k\Big\{Y_n^{(i)}-n\geqslant n^{\log_2n}-n-1\Big\}.$$</li>
<li>En déduire que $\mathbb P(B_n\geqslant3kL_n)\leqslant\dfrac{2k}{n^6}$ pour $n\geqslant16$.</li>
<li>Conclure que, presque sûrement, $B_n\lt3k\log_2\log_2n$ pour tout $n$ assez grand. Comparer avec le stockage exact de $n$.</li></ol>`,
  decode: { donnees: [R`$\operatorname{Var}(Y_n) = \frac{n(n-1)}2$.`], but: R`Rendre la probabilité de dépasser la mémoire prévue sommable, puis appliquer Borel-Cantelli.`, cles: {} },
  steps: [
    Q(9, "Lemme de Borel-Cantelli", R`<p>$\limsup A_n\subset\bigcup_{k\geqslant n}A_k$ pour tout $n$.</p>`, R`<p>Pour tout $n$, $\limsup A_k\subset\bigcup_{k\geqslant n}A_k$, donc par sous-additivité</p>$$\mathbb P(\limsup A_k)\leqslant\sum_{k\geqslant n}\mathbb P(A_k).$$<p>Le membre de droite est le reste d'une série convergente : il tend vers $0$ quand $n\to+\infty$. Donc $\mathbb P(\limsup A_n) = 0$.</p><div class="sbox"><p>Presque sûrement, seul un nombre fini des $A_n$ est réalisé.</p></div>`, ["cpt-lim"]),
    Q(10, "Traduire la mémoire en valeur de Yₙ", R`<p>Si une somme de $k$ termes dépasse $3kL$, un des termes dépasse $3L$. Puis $\log_2S\geqslant3L-1\geqslant2L$ si $L\geqslant1$.</p>`, R`<p>Si $B_n\geqslant3kL_n$, l'un des $k$ termes vaut au moins $3L_n$ : il existe $i$ avec $\lfloor\log_2S_n^{(i)}\rfloor+1\geqslant3L_n$, donc $\log_2S_n^{(i)}\geqslant3L_n-1$.</p><p>Pour $n\geqslant4$, $\log_2n\geqslant2$ et $L_n\geqslant1$, donc $3L_n-1\geqslant2L_n$ et $S_n^{(i)}\geqslant2^{2L_n} = (\log_2n)^2$. Alors</p>$$2^{S_n^{(i)}}\geqslant2^{(\log_2n)^2} = \big(2^{\log_2n}\big)^{\log_2n} = n^{\log_2n},$$<p>soit $Y_n^{(i)}-n\geqslant n^{\log_2n}-1-n$.</p>`),
    Q(11, "Une probabilité sommable", R`<p>Bienaymé-Tchebychev avec $\alpha = n^{\log_2n}-n-1$, puis minore $\alpha$ par $\frac{n^4}2$.</p>`, R`<p>Pour $n\geqslant16$, $\log_2n\geqslant4$ et $\alpha_n = n^{\log_2n}-n-1\geqslant n^4-n-1\geqslant\frac{n^4}2$ (car $\frac{n^4}2\geqslant n+1$). Par la question 10, la sous-additivité, puis Bienaymé-Tchebychev (les $Y_n^{(i)}$ ont la loi de $Y_n$) :</p>$$\mathbb P(B_n\geqslant3kL_n)\leqslant k\,\mathbb P(|Y_n-n|\geqslant\alpha_n)\leqslant k\frac{n(n-1)}{2\alpha_n^2}\leqslant k\frac{n^2}{2}\cdot\frac4{n^8} = \frac{2k}{n^6}.$$`, ["cpt-bt"]),
    Q(12, "Conclusion", R`<p>$\sum\frac1{n^6}$ converge : applique Q9.</p>`, R`<p>$\sum_n\frac{2k}{n^6}\lt+\infty$, donc par Borel-Cantelli, presque sûrement l'événement $\{B_n\geqslant3kL_n\}$ n'est réalisé que pour un nombre fini de $n$ :</p><div class="sbox"><p>Presque sûrement, à partir d'un certain rang, $B_n\lt3k\log_2\log_2n$.</p></div><p>Le stockage exact de $n$ demande $\lfloor\log_2n\rfloor+1$ bits. Pour $n = 10^9$ : environ $30$ bits pour le compteur exact, contre $3\log_2(30)\approx15$ bits par copie. Le gain devient très net quand on surveille des millions de compteurs (un par adresse IP, par exemple) : on paie la précision $\varepsilon$ et le risque $\delta$ par le facteur $k$.</p>`)
  ],
  piege: R`Borel-Cantelli ne dit pas que $B_n\lt3kL_n$ pour tout $n$ : pour un nombre fini de $n$ (aléatoire), la borne peut être dépassée. « Presque sûrement à partir d'un certain rang » est exactement ce que donne le lemme.`,
  methode: R`Pour un résultat presque sûr « à partir d'un certain rang » : majorer $\mathbb P(A_n)$ par le terme d'une série convergente (ici par Bienaymé-Tchebychev), puis appliquer Borel-Cantelli.`
}
]);
})();

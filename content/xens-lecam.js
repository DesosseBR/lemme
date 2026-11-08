/* Commando X-ENS · Aller plus loin · Sujet « Inégalité de Le Cam ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 14, kind: "probleme", qnav: true, side: true, level: 4, plus: "lec",
  sujet: "L'inégalité de Le Cam : la loi de Poisson approche la binomiale",
  sujetDesc: "On mesure l'écart entre deux lois sur ℕ par la distance en variation totale, qu'on majore par la probabilité de désaccord d'un couplage. En couplant une variable de Bernoulli et une variable de Poisson de même paramètre par une même variable uniforme, on obtient Σₖ |P(Sₙ = k) − e^{−λ}λᵏ/k!| ≤ 2 Σ pᵢ², d'où l'erreur 2λ²/n pour la binomiale B(n, λ/n)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "lc-poi": { t: "Somme de Poisson indépendantes", b: R`<p>Si $X\sim\mathcal P(\lambda)$ et $Y\sim\mathcal P(\mu)$ sont indépendantes, $X+Y\sim\mathcal P(\lambda+\mu)$ : $\mathbb P(X+Y = k) = \sum_j e^{-\lambda}\frac{\lambda^j}{j!}e^{-\mu}\frac{\mu^{k-j}}{(k-j)!} = e^{-(\lambda+\mu)}\frac{(\lambda+\mu)^k}{k!}$ (binôme).</p>` },
  "lc-ineg": { t: "Deux inégalités", b: R`<p>Pour $p\geqslant0$ : $1-p\leqslant e^{-p}$, et $e^{-p}\geqslant1-p$ donne $1-e^{-p}\leqslant p$.</p>` },
  "lc-unif": { t: "Simulation par une uniforme", b: R`$$U\sim\mathcal U([0,1]),\quad c_{k+1}-c_k = q_k,\quad X = k\text{ sur }\{c_k\lt U\leqslant c_{k+1}\}\ \Longrightarrow\ P(X = k) = q_k.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Pour deux lois $\mu,\nu$ sur $\mathbb N$, la <b>distance en variation totale</b> est $d(\mu,\nu) = \sup_{A\subset\mathbb N}|\mu(A)-\nu(A)|$. On note $\mathcal B(p)$ la loi de Bernoulli, $\mathcal B(n,p)$ la loi binomiale, $\mathcal P(\lambda)$ la loi de Poisson ($\mathbb P(Y = k) = e^{-\lambda}\frac{\lambda^k}{k!}$). Un <b>couplage</b> de $\mu$ et $\nu$ est un couple $(X,Y)$ de variables définies sur un même espace, avec $X\sim\mu$ et $Y\sim\nu$.</p>`;

const binom = (n, p, k) => { let c = 1; for (let i = 0; i < k; i++) c = c * (n - i) / (i + 1); return c * Math.pow(p, k) * Math.pow(1 - p, n - k); };
const poi = (l, k) => { let f = 1; for (let i = 2; i <= k; i++) f *= i; return Math.exp(-l) * Math.pow(l, k) / f; };
const figBar = GRAPH({ w: 460, h: 240, x: [-0.6, 8.6], y: [0, 0.32], xt: [0, 1, 2, 3, 4, 5, 6, 7, 8], yt: [0.1, 0.2, 0.3], ytl: ["0,1", "0,2", "0,3"], xl: "k", curves: [], extra: (X, Y) => { let s = ""; for (let k = 0; k <= 8; k++) { const b = binom(10, 0.2, k), q = poi(2, k); s += `<rect x="${(X(k) - 13).toFixed(1)}" y="${Y(b).toFixed(1)}" width="12" height="${(Y(0) - Y(b)).toFixed(1)}" class="hb"/><rect x="${(X(k) + 1).toFixed(1)}" y="${Y(q).toFixed(1)}" width="12" height="${(Y(0) - Y(q)).toFixed(1)}" class="hr"/>`; } return s + `<rect x="${X(5.6)}" y="${Y(0.3)}" width="10" height="10" class="hb"/><text x="${X(5.6) + 14}" y="${Y(0.3) + 9}" class="sm">ℬ(10 ; 0,2)</text><rect x="${X(5.6)}" y="${Y(0.27)}" width="10" height="10" class="hr"/><text x="${X(5.6) + 14}" y="${Y(0.27) + 9}" class="sm">𝒫(2)</text>`; } }, R`$\mathcal B(10\,;0{,}2)$ (bleu) et $\mathcal P(2)$ (rouge) : même moyenne, lois proches. La somme des écarts vaut environ $0{,}10$, sous la borne de Le Cam $\frac{2\lambda^2}n = 0{,}8$ (qui est loin d'être optimale pour $n$ petit, mais tend vers $0$).`, "Binomiale et Poisson");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "lec-1", ...P, part: "Partie I", time: "30 min",
  title: "Variation totale et couplage",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $d(\mu,\nu) = \frac12\sum_{k\geqslant0}|\mu(k)-\nu(k)|$ (considérer $A_+ = \{k : \mu(k)>\nu(k)\}$).</li>
<li>(<b>Inégalité de couplage</b>) Si $(X,Y)$ est un couplage de $\mu$ et $\nu$, montrer que $d(\mu,\nu)\leqslant\mathbb P(X\neq Y)$.</li>
<li>Si $(X_i,Y_i)_{1\leqslant i\leqslant n}$ sont des couples, montrer que $\mathbb P\big(\sum X_i\neq\sum Y_i\big)\leqslant\sum_i\mathbb P(X_i\neq Y_i)$.</li></ol>`,
  decode: { donnees: [R`$\mu(A) = \sum_{k\in A}\mu(k)$.`], but: R`Transformer une comparaison de lois en une comparaison de variables aléatoires définies ensemble.`, cles: {} },
  steps: [
    Q(1, "Expression de la variation totale", R`<p>$\mu(A)-\nu(A)\leqslant\mu(A\cap A_+)-\nu(A\cap A_+)\leqslant\mu(A_+)-\nu(A_+)$.</p>`, R`<p>Pour $A\subset\mathbb N$, en ne gardant que les termes positifs : $\mu(A)-\nu(A)\leqslant\sum_{k\in A\cap A_+}(\mu(k)-\nu(k))\leqslant\mu(A_+)-\nu(A_+)$. De même $\nu(A)-\mu(A)\leqslant\nu(A_+^c)-\mu(A_+^c)$. Or $\mu(A_+)-\nu(A_+) = \nu(A_+^c)-\mu(A_+^c)$ (les deux lois sont de masse $1$), et leur somme est $\sum_k|\mu(k)-\nu(k)|$. Donc le sup est atteint en $A_+$ et</p><div class="sbox">$$d(\mu,\nu) = \mu(A_+)-\nu(A_+) = \frac12\sum_k|\mu(k)-\nu(k)|.$$</div>`),
    Q(2, "Inégalité de couplage", R`<p>$\{X\in A\}\subset\{Y\in A\}\cup\{X\neq Y\}$.</p>`, R`<p>$\{X\in A\}\subset\{Y\in A\}\cup\{X\neq Y\}$, donc $\mu(A) = \mathbb P(X\in A)\leqslant\nu(A)+\mathbb P(X\neq Y)$. Symétriquement, d'où $|\mu(A)-\nu(A)|\leqslant\mathbb P(X\neq Y)$ pour tout $A$, et $d(\mu,\nu)\leqslant\mathbb P(X\neq Y)$.</p>`),
    Q(3, "Sommes", R`<p>Si $\sum X_i\neq\sum Y_i$, il existe $i$ avec $X_i\neq Y_i$.</p>`, R`<p>$\{\sum X_i\neq\sum Y_i\}\subset\bigcup_i\{X_i\neq Y_i\}$, et la probabilité d'une réunion est majorée par la somme des probabilités.</p>`)
  ],
  piege: R`La distance en variation totale ne dépend que des lois, pas du couplage : l'inégalité de couplage est vraie pour <b>tout</b> couplage, et l'art consiste à en choisir un où $X$ et $Y$ coïncident le plus souvent possible.`,
  methode: R`Méthode de couplage : pour comparer deux lois, construire sur un même espace deux variables de ces lois, égales avec grande probabilité.`
},

/* ===================== Partie II ===================== */
{ id: "lec-2", ...P, part: "Partie II", time: "30 min",
  title: "Coupler Bernoulli et Poisson",
  enonce: PRE + R`<p><b>Partie II.</b> Soit $p\in[0,1]$ et $U\sim\mathcal U([0,1])$. On pose $Y = \mathbf 1_{\{U>1-p\}}$, et on définit $X$ en découpant $[0,1]$ en intervalles consécutifs de longueurs $e^{-p}\frac{p^k}{k!}$ ($k = 0,1,2,\dots$) : $X = k$ si $U$ tombe dans le $k$-ième. En particulier $X = 0$ si $U\leqslant e^{-p}$ et $X = 1$ si $e^{-p}\lt U\leqslant e^{-p}(1+p)$.</p><ol start="4">
<li>Montrer que $Y\sim\mathcal B(p)$ et $X\sim\mathcal P(p)$.</li>
<li>Montrer que $\{X\neq Y\} = \{1-p\lt U\leqslant e^{-p}\}\cup\{U>e^{-p}(1+p)\}$, et calculer $\mathbb P(X\neq Y) = p(1-e^{-p})$.</li>
<li>En déduire $d(\mathcal B(p),\mathcal P(p))\leqslant p^2$. Comparer avec la valeur exacte $d(\mathcal B(p),\mathcal P(p)) = p(1-e^{-p})$.</li></ol>`,
  decode: { donnees: [R`$1-p\leqslant e^{-p}\leqslant e^{-p}(1+p)$.`], but: R`Faire coïncider $X$ et $Y$ sur la plus grande partie possible de $[0,1]$.`, cles: {} },
  steps: [
    Q(4, "Les lois marginales", R`<p>$\mathbb P(U>1-p) = p$ ; les intervalles de $X$ ont pour longueurs $e^{-p}\frac{p^k}{k!}$.</p>`, R`<p>$\mathbb P(Y = 1) = \mathbb P(U>1-p) = p$ : $Y\sim\mathcal B(p)$. Pour $X$, on découpe $[0,1]$ en intervalles consécutifs de longueurs $e^{-p}\frac{p^k}{k!}$ ($k = 0,1,2,\dots$), de somme $1$ ; $X = k$ sur le $k$-ième. Les deux premiers sont $]0,e^{-p}]$ et $]e^{-p},e^{-p}(1+p)]$. Donc $X\sim\mathcal P(p)$.</p>`, ["lc-unif"]),
    Q(5, "Probabilité de désaccord", R`<p>Sur $U\leqslant1-p$ : $X = Y = 0$. Sur $]e^{-p},e^{-p}(1+p)]$ : $X = Y = 1$.</p>`, R`<p>Par le rappel, $1-p\leqslant e^{-p}$. On distingue :</p><ul><li>$U\leqslant1-p$ : $Y = 0$ et $U\leqslant e^{-p}$ donc $X = 0$ ;</li><li>$1-p\lt U\leqslant e^{-p}$ : $Y = 1$, $X = 0$ : <b>désaccord</b> ;</li><li>$e^{-p}\lt U\leqslant e^{-p}(1+p)$ : $Y = 1$, $X = 1$ ;</li><li>$U>e^{-p}(1+p)$ : $Y = 1$, $X\geqslant2$ : <b>désaccord</b>.</li></ul>$$\mathbb P(X\neq Y) = \big(e^{-p}-(1-p)\big)+\big(1-e^{-p}(1+p)\big) = p-pe^{-p} = p(1-e^{-p}).$$`),
    Q(6, "Le cas d'une seule variable", R`<p>$1-e^{-p}\leqslant p$.</p>`, R`<p>Par Q2 et $1-e^{-p}\leqslant p$ : $d(\mathcal B(p),\mathcal P(p))\leqslant p(1-e^{-p})\leqslant p^2$.</p><p>Valeur exacte : $\mathcal B(p)$ charge $0$ et $1$ ; par Q1, $d = \frac12\big(|1-p-e^{-p}|+|p-pe^{-p}|+\sum_{k\geqslant2}e^{-p}\frac{p^k}{k!}\big) = \frac12\big((e^{-p}-1+p)+p(1-e^{-p})+(1-e^{-p}-pe^{-p})\big) = p(1-e^{-p})$. Le couplage est donc <b>optimal</b>.</p>`, ["lc-ineg"])
  ],
  piege: R`Coupler deux variables indépendantes de lois $\mathcal B(p)$ et $\mathcal P(p)$ donne $\mathbb P(X\neq Y)\approx2p$, bien trop grand : l'intérêt du couplage par une même uniforme est de faire coïncider les deux variables autant que possible.`,
  methode: R`Couplage par la fonction quantile : utiliser la même uniforme $U$ pour simuler les deux lois ; elles diffèrent seulement là où leurs fonctions de répartition diffèrent.`
},

/* ===================== Partie III ===================== */
{ id: "lec-3", ...P, part: "Partie III", time: "30 min",
  title: "L'inégalité de Le Cam",
  enonce: PRE + R`<p><b>Partie III.</b> Soient $p_1,\dots,p_n\in[0,1]$, $S_n = \sum Y_i$ avec $Y_i\sim\mathcal B(p_i)$ indépendantes, et $\lambda = \sum p_i$.</p><ol start="7">
<li>En couplant chaque $Y_i$ avec $X_i\sim\mathcal P(p_i)$ comme en Partie II (avec des uniformes indépendantes), montrer l'<b>inégalité de Le Cam</b> : $$\sum_{k\geqslant0}\Big|\mathbb P(S_n = k)-e^{-\lambda}\frac{\lambda^k}{k!}\Big|\leqslant2\sum_{i = 1}^np_i^2.$$</li>
<li>En déduire $\sum_k|\mathcal B(n,\frac\lambda n)(k)-\mathcal P(\lambda)(k)|\leqslant\frac{2\lambda^2}n$, et que $\mathcal B(n,\frac\lambda n)$ converge vers $\mathcal P(\lambda)$.</li>
<li>Application : un livre de $500$ pages contient $1000$ coquilles réparties indépendamment et uniformément. Estimer la probabilité qu'une page donnée n'ait aucune coquille, et majorer l'erreur commise en utilisant la loi de Poisson.</li></ol>`,
  decode: { donnees: [R`Parties I et II.`], but: R`Additionner les couplages élémentaires.`, cles: {} },
  steps: [
    Q(7, "Le Cam", R`<p>$\sum X_i\sim\mathcal P(\lambda)$ ; Q3 ; Q5.</p>`, R`<p>Avec des uniformes $U_1,\dots,U_n$ indépendantes, les couples $(X_i,Y_i)$ sont indépendants ; $Y_i\sim\mathcal B(p_i)$, $X_i\sim\mathcal P(p_i)$, et $T = \sum X_i\sim\mathcal P(\lambda)$ (rappel). Par Q2, Q3 et Q6 :</p>$$d\big(\mathcal L(S_n),\mathcal P(\lambda)\big)\leqslant\mathbb P(S_n\neq T)\leqslant\sum_i\mathbb P(X_i\neq Y_i)\leqslant\sum_ip_i^2.$$<p>Par Q1, $\sum_k|\mathbb P(S_n = k)-\mathbb P(T = k)| = 2d\leqslant2\sum p_i^2$.</p>`, ["lc-poi"]),
    Q(8, "Le cas binomial", R`<p>$p_i = \frac\lambda n$ : $\sum p_i^2 = \frac{\lambda^2}n$.</p>`, R`<p>Avec $p_i = \frac\lambda n$, $S_n\sim\mathcal B(n,\frac\lambda n)$ et $2\sum p_i^2 = \frac{2\lambda^2}n$ :</p><div class="sbox">$$\sum_k\Big|\binom nk\Big(\frac\lambda n\Big)^k\Big(1-\frac\lambda n\Big)^{n-k}-e^{-\lambda}\frac{\lambda^k}{k!}\Big|\leqslant\frac{2\lambda^2}n.$$</div><p>En particulier, pour chaque $k$, $\mathcal B(n,\frac\lambda n)(k)\to\mathcal P(\lambda)(k)$, avec une vitesse explicite en $\frac1n$, uniforme en $k$.</p>${figBar}`),
    Q(9, "Les coquilles", R`<p>Le nombre de coquilles sur la page suit $\mathcal B(1000,\frac1{500})$, $\lambda = 2$.</p>`, R`<p>Chaque coquille tombe sur la page donnée avec probabilité $\frac1{500}$, indépendamment : le nombre $N$ de coquilles de la page suit $\mathcal B(1000,\frac1{500})$, de moyenne $\lambda = 2$. Approximation de Poisson : $\mathbb P(N = 0)\approx e^{-2}\approx0{,}135$. Erreur : $|\mathbb P(N = 0)-e^{-2}|\leqslant d\leqslant\sum p_i^2 = 1000\cdot\frac1{500^2} = 0{,}004$.</p><p>(Valeur exacte : $\big(1-\frac1{500}\big)^{1000}\approx0{,}1351$, et $e^{-2}\approx0{,}1353$ : l'erreur réelle est de l'ordre de $3\cdot10^{-4}$.)</p>`)
  ],
  piege: R`L'inégalité ne demande pas que les $p_i$ soient égaux : c'est la « loi des petits nombres » pour des événements rares de probabilités différentes. Ce qui compte est que $\sum p_i^2$ soit petit devant $1$, même si $\lambda = \sum p_i$ est de taille quelconque.`,
  methode: R`Approximation poissonienne : coupler chaque Bernoulli avec une Poisson de même paramètre, sommer, et contrôler l'erreur par $\sum p_i^2$.`
}
]);
})();

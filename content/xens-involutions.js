/* Commando X-ENS · Aller plus loin · Sujet « Dénombrement des involutions ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 10, kind: "probleme", qnav: true, side: true, level: 4, plus: "invo",
  sujet: "Compter les involutions de 𝔖ₙ",
  sujetDesc: "On établit la récurrence I_{n+1} = I_n + nI_{n−1} pour le nombre d'involutions de 𝔖ₙ, on la traduit en équation différentielle F′ = (1 + X)F sur la série génératrice exponentielle, d'où F = exp(X + X²/2) et une formule explicite. On retrouve cette formule par un dénombrement direct, et on estime la croissance de Iₙ." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "inv-ed": { t: "Équation différentielle formelle", b: R`$$F' = AF\ \Longrightarrow\ F = F(0)\exp\big(I(A)\big),\qquad I\Big(\sum a_nX^n\Big) = \sum\frac{a_n}{n+1}X^{n+1}.$$` },
  "inv-cauchy": { t: "Produit de Cauchy", b: R`<p>$\Big(\sum a_nX^n\Big)\Big(\sum b_nX^n\Big) = \sum_n\Big(\sum_{k = 0}^na_kb_{n-k}\Big)X^n$. En particulier $e^Xe^{X^2/2} = \sum_n\Big(\sum_{2k+j = n}\frac1{j!\,k!\,2^k}\Big)X^n$.</p>` },
  "inv-bij": { t: "Dénombrement par partition", b: R`$$E = \bigsqcup_{i = 1}^mA_i\Rightarrow|E| = \sum_i|A_i|;\qquad f : A\to B\text{ bijective}\Rightarrow|A| = |B|.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Une <b>involution</b> de $[\![1,n]\!]$ est une permutation $\sigma$ avec $\sigma^2 = \operatorname{Id}$ ; elle est faite de points fixes et de transpositions à supports disjoints. On note $I_n$ leur nombre, avec $I_0 = 1$. On note $F = \sum_{n\geqslant0}\frac{I_n}{n!}X^n$ la <b>série génératrice exponentielle</b>.</p>`;

/* Figure : une involution comme couplage */
const figCoupl = (() => {
  const x = i => 30 + 50 * (i - 1), y = 130;
  const pairs = [[1, 4], [2, 7], [5, 6]], fixes = [3, 8];
  let b = "";
  pairs.forEach(([a, c], k) => { const m = (x(a) + x(c)) / 2, h = 22 * (c - a); b += `<path d="M${x(a)},${y - 8} Q${m},${y - 8 - h} ${x(c)},${y - 8}" class="${["vb", "vr", "vg"][k]}" style="fill:none;stroke-width:2"/>`; });
  fixes.forEach(a => { b += `<path d="M${x(a) - 7},${y - 9} C${x(a) - 16},${y - 40} ${x(a) + 16},${y - 40} ${x(a) + 7},${y - 9}" class="vk" style="fill:none;stroke-width:1.5"/>`; });
  for (let i = 1; i <= 8; i++) b += `<circle cx="${x(i)}" cy="${y}" r="10" style="fill:var(--bg);stroke:var(--ink)"/>` + S(x(i), y + 4.5, String(i), "middle", "it");
  return FIG(420, 170, b, R`L'involution $\sigma = (1\,4)(2\,7)(5\,6)$ de $[\![1,8]\!]$ : $3$ transpositions disjointes (arcs) et $2$ points fixes (boucles). Choisir une involution, c'est choisir un couplage partiel de $[\![1,n]\!]$.`, "Involution comme couplage");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "invo-1", ...P, part: "Partie I", time: "30 min",
  title: "La relation de récurrence",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Calculer $I_1$, $I_2$, $I_3$, $I_4$ en listant les involutions.</li>
<li>Pour $n\geqslant1$ et $k\in[\![1,n+1]\!]$, soit $\mathcal I^{(k)}$ l'ensemble des involutions de $[\![1,n+1]\!]$ telles que $\sigma(n+1) = k$. Montrer que $|\mathcal I^{(n+1)}| = I_n$ et $|\mathcal I^{(k)}| = I_{n-1}$ pour $k\leqslant n$.</li>
<li>En déduire $I_{n+1} = I_n+nI_{n-1}$ ($n\geqslant1$), et calculer $I_n$ pour $n\leqslant8$.</li></ol>`,
  decode: { donnees: [R`Une involution est faite de points fixes et de transpositions disjointes.`], but: R`Classer selon le sort du dernier élément.`, cles: {} },
  steps: [
    Q(1, "Petites valeurs", R`<p>$n = 3$ : l'identité et les trois transpositions.</p>`, R`<p>$I_1 = 1$ (l'identité). $I_2 = 2$ : $\operatorname{Id}$, $(1\,2)$. $I_3 = 4$ : $\operatorname{Id}$, $(1\,2)$, $(1\,3)$, $(2\,3)$. $I_4 = 10$ : $\operatorname{Id}$, les $6$ transpositions, et les $3$ doubles transpositions $(1\,2)(3\,4)$, $(1\,3)(2\,4)$, $(1\,4)(2\,3)$.</p>`),
    Q(2, "Le sort du dernier élément", R`<p>Si $\sigma(n+1) = n+1$, restreindre à $[\![1,n]\!]$. Si $\sigma(n+1) = k\leqslant n$, alors $\sigma(k) = n+1$ : retirer $k$ et $n+1$.</p>`, R`<p><b>$k = n+1$.</b> $\sigma$ stabilise $[\![1,n]\!]$, et sa restriction est une involution de $[\![1,n]\!]$. Réciproquement, toute involution $\tau$ de $[\![1,n]\!]$ se prolonge par $n+1\mapsto n+1$. Bijection : $|\mathcal I^{(n+1)}| = I_n$.</p><p><b>$k\leqslant n$.</b> $\sigma(k) = \sigma(\sigma(n+1)) = n+1$ : $\sigma$ contient la transposition $(k\ n{+}1)$ et stabilise $E_k = [\![1,n+1]\!]\setminus\{k,n+1\}$, de cardinal $n-1$. La restriction à $E_k$ est une involution de $E_k$, et réciproquement on recolle avec $(k\ n{+}1)$. Le nombre d'involutions d'un ensemble ne dépend que de son cardinal : $|\mathcal I^{(k)}| = I_{n-1}$.</p>`, ["inv-bij"]),
    Q(3, "La récurrence", R`<p>Les $\mathcal I^{(k)}$ partitionnent l'ensemble des involutions de $[\![1,n+1]\!]$.</p>`, R`<p>Les $\mathcal I^{(k)}$, $1\leqslant k\leqslant n+1$, forment une partition :</p><div class="sbox">$$I_{n+1} = I_n+nI_{n-1}\qquad(n\geqslant1).$$</div><p>Avec $I_0 = I_1 = 1$ : $I_2 = 1+1 = 2$, $I_3 = 2+2 = 4$, $I_4 = 4+3\cdot2 = 10$, $I_5 = 10+4\cdot4 = 26$, $I_6 = 26+5\cdot10 = 76$, $I_7 = 76+6\cdot26 = 232$, $I_8 = 232+7\cdot76 = 764$.</p>${figCoupl}`)
  ],
  piege: R`Pour $k\leqslant n$, on retire <b>deux</b> éléments ($k$ et $n+1$), d'où $I_{n-1}$ et non $I_n$ ; et il y a $n$ choix de $k$, d'où le facteur $n$.`,
  methode: R`Récurrence combinatoire : classer les objets selon le comportement du dernier élément, et établir une bijection entre chaque classe et des objets plus petits.`
},

/* ===================== Partie II ===================== */
{ id: "invo-2", ...P, part: "Partie II", time: "35 min",
  title: "Série génératrice et formule explicite",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que $F' = (1+X)F$ dans $\mathbb Q[[X]]$.</li>
<li>En déduire $F = \exp\Big(X+\dfrac{X^2}2\Big)$.</li>
<li>En déduire $I_n = \displaystyle\sum_{k = 0}^{\lfloor n/2\rfloor}\frac{n!}{k!\,(n-2k)!\,2^k}$, et vérifier pour $n = 4$.</li>
<li>Retrouver cette formule directement : compter les involutions ayant exactement $k$ transpositions.</li></ol>`,
  decode: { donnees: [R`$I_{n+1} = I_n+nI_{n-1}$.`], but: R`Une récurrence avec un facteur $n$ devient une équation différentielle sur la série génératrice <b>exponentielle</b>.`, cles: {} },
  steps: [
    Q(4, "L'équation différentielle", R`<p>$F' = \sum_{n\geqslant0}\frac{I_{n+1}}{n!}X^n$ ; remplace $I_{n+1}$ par $I_n+nI_{n-1}$.</p>`, R`$$\begin{aligned}F' &= \sum_{n\geqslant0}\frac{I_{n+1}}{n!}X^n = I_1+\sum_{n\geqslant1}\frac{I_n+nI_{n-1}}{n!}X^n\\&= \sum_{n\geqslant0}\frac{I_n}{n!}X^n+\sum_{n\geqslant1}\frac{I_{n-1}}{(n-1)!}X^n,\end{aligned}$$<p>(le terme $n = 0$ de la première somme est $I_0 = 1 = I_1$). La seconde somme vaut $XF$. Donc</p><div class="sbox">$$F' = F+XF = (1+X)F.$$</div>`),
    Q(5, "Résolution", R`<p>$I(1+X) = X+\frac{X^2}2$ et $F(0) = I_0 = 1$.</p>`, R`<p>Par le rappel, $F = F(0)\exp\big(I(1+X)\big) = \exp\Big(X+\frac{X^2}2\Big)$, avec $F(0) = I_0 = 1$. (Vérification : $G = \exp(X+\frac{X^2}2)$ vérifie $G' = (1+X)G$, $G(0) = 1$, et la solution d'une telle équation est unique car les coefficients sont déterminés de proche en proche.)</p>`, ["inv-ed"]),
    Q(6, "La formule", R`<p>$\exp(X)\exp(X^2/2)$, produit de Cauchy.</p>`, R`<p>$\exp\big(X+\frac{X^2}2\big) = \exp(X)\exp\big(\frac{X^2}2\big) = \Big(\sum_j\frac{X^j}{j!}\Big)\Big(\sum_k\frac{X^{2k}}{2^kk!}\Big)$. Le coefficient de $X^n$ est $\sum_{j+2k = n}\frac1{j!\,2^kk!}$, et c'est $\frac{I_n}{n!}$ :</p><div class="sbox">$$I_n = \sum_{k = 0}^{\lfloor n/2\rfloor}\frac{n!}{k!\,(n-2k)!\,2^k}.$$</div><p>$n = 4$ : $\frac{24}{1\cdot24\cdot1}+\frac{24}{1\cdot2\cdot2}+\frac{24}{2\cdot1\cdot4} = 1+6+3 = 10$. ✓</p>`, ["inv-cauchy"]),
    Q(7, "Preuve directe", R`<p>Choisir les $2k$ éléments non fixes, puis les apparier.</p>`, R`<p>Une involution à exactement $k$ transpositions est déterminée par l'ensemble de ses $2k$ points non fixes ($\binom n{2k}$ choix) et un appariement parfait de cet ensemble. Le nombre d'appariements de $2k$ éléments : on ordonne les $2k$ éléments ($(2k)!$) et on les groupe par deux consécutifs ; chaque appariement est obtenu $2^kk!$ fois (ordre dans chaque paire, ordre des paires). D'où $\frac{(2k)!}{2^kk!}$ et</p>$$\binom n{2k}\frac{(2k)!}{2^kk!} = \frac{n!}{(n-2k)!\,2^k\,k!}.$$<p>En sommant sur $k$, on retrouve Q6. Interprétation : $e^X$ compte les points fixes, $e^{X^2/2}$ les appariements.</p>`)
  ],
  piege: R`La série génératrice <b>ordinaire</b> $\sum I_nX^n$ a un rayon de convergence nul ($I_n$ croît plus vite que toute exponentielle) ; c'est la série <b>exponentielle</b> qui convient, avec rayon infini.`,
  methode: R`Récurrence de la forme $u_{n+1} = au_n+nbu_{n-1}$ : série génératrice exponentielle, qui transforme la multiplication par $n$ en dérivation.`
},

/* ===================== Partie III ===================== */
{ id: "invo-3", ...P, part: "Partie III", time: "30 min",
  title: "Variations et croissance",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="8">
<li>Soit $J_n$ le nombre d'involutions <b>sans point fixe</b>. Montrer que $J_{2m+1} = 0$, $J_{2m} = \frac{(2m)!}{2^mm!} = 1\cdot3\cdot5\cdots(2m-1)$, et que $\sum\frac{J_n}{n!}X^n = e^{X^2/2}$.</li>
<li>Soit $r_n = \frac{I_n}{I_{n-1}}$ ($n\geqslant1$). Montrer que $r_{n+1} = 1+\frac n{r_n}$, puis par récurrence que $\sqrt n\leqslant r_n\leqslant\sqrt n+1$.</li>
<li>En déduire que $\sqrt{n!}\leqslant I_n\leqslant\prod_{k = 1}^n(1+\sqrt k)$, et que $I_n/n!\to0$. Interpréter : la probabilité qu'une permutation uniforme soit une involution.</li></ol>`,
  decode: { donnees: [R`$I_{n+1} = I_n+nI_{n-1}$.`], but: R`Contrôler les quotients successifs pour encadrer $I_n$.`, cles: {} },
  steps: [
    Q(8, "Sans point fixe", R`<p>C'est le terme $k = m$ (aucun point fixe) de la formule.</p>`, R`<p>Une involution sans point fixe est un appariement parfait : impossible si $n$ est impair, et $J_{2m} = \frac{(2m)!}{2^mm!}$ par Q7. Et $\frac{(2m)!}{2^mm!} = \frac{1\cdot2\cdot3\cdots(2m)}{2\cdot4\cdots(2m)} = 1\cdot3\cdots(2m-1)$. La série : $\sum_m\frac{J_{2m}}{(2m)!}X^{2m} = \sum_m\frac{X^{2m}}{2^mm!} = e^{X^2/2}$.</p>`),
    Q(9, "Encadrement des quotients", R`<p>Divise la récurrence par $I_n$. Pour la minoration, $\frac n{\sqrt n+1}\geqslant\sqrt{n+1}-1$.</p>`, R`<p>$\frac{I_{n+1}}{I_n} = 1+n\frac{I_{n-1}}{I_n}$, soit $r_{n+1} = 1+\frac n{r_n}$. $r_1 = 1$ : $\sqrt1\leqslant1\leqslant2$. Si $\sqrt n\leqslant r_n\leqslant\sqrt n+1$ :</p><ul><li>$r_{n+1}\leqslant1+\frac n{\sqrt n} = 1+\sqrt n\leqslant1+\sqrt{n+1}$ ;</li><li>$r_{n+1}\geqslant1+\frac n{\sqrt n+1}$, et $\frac n{\sqrt n+1}\geqslant\sqrt{n+1}-1\iff n\geqslant(\sqrt{n+1}-1)(\sqrt n+1) = \sqrt{n(n+1)}+\sqrt{n+1}-\sqrt n-1$. Or $\sqrt{n(n+1)}\leqslant n+\frac12$ et $\sqrt{n+1}-\sqrt n\leqslant\frac12$ : le membre de droite est $\leqslant n$. Donc $r_{n+1}\geqslant\sqrt{n+1}$.</li></ul><div class="sbox">$$\sqrt n\leqslant\frac{I_n}{I_{n-1}}\leqslant\sqrt n+1.$$</div>`),
    Q(10, "Croissance de Iₙ", R`<p>Produit télescopique des $r_k$.</p>`, R`<p>$I_n = \prod_{k = 1}^nr_k$, donc $\prod\sqrt k\leqslant I_n\leqslant\prod(1+\sqrt k)$, soit $\sqrt{n!}\leqslant I_n\leqslant\prod_{k\leqslant n}(1+\sqrt k)$. Et $\frac{I_n}{n!} = \prod_k\frac{r_k}k\leqslant\prod_k\frac{1+\sqrt k}k$, avec $\frac{1+\sqrt k}k\leqslant\frac12$ pour $k\geqslant8$ : $\frac{I_n}{n!}\to0$ (au moins géométriquement).</p><div class="sbox"><p>Une permutation uniforme de $\mathfrak S_n$ est une involution avec probabilité $\frac{I_n}{n!}\to0$ ; $I_n$ est de l'ordre de $\sqrt{n!}$ à des facteurs plus petits près (en fait $I_n\sim\frac{1}{\sqrt2}\big(\frac ne\big)^{n/2}e^{\sqrt n-1/4}$).</p></div>`)
  ],
  piege: R`Ne pas confondre $J_{2m} = (2m-1)(2m-3)\cdots1$ (double factorielle impaire) avec $(2m)!!$ = $2\cdot4\cdots2m$.`,
  methode: R`Encadrer une suite définie par $u_{n+1} = au_n+b_nu_{n-1}$ : étudier le quotient $r_n = u_n/u_{n-1}$, qui vérifie une récurrence d'ordre $1$ (homographique), et l'encadrer par récurrence.`
}
]);
})();

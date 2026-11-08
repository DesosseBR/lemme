/* Commando X-ENS · Aller plus loin · Sujet « Méthode de Monte-Carlo ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 14, kind: "probleme", qnav: true, side: true, level: 3, plus: "mc",
  sujet: "La méthode de Monte-Carlo",
  sujetDesc: "On approche ∫_{[0,1]^d} f par la moyenne de f en n points tirés uniformément. La loi forte des grands nombres donne la convergence presque sûre ; une inégalité de type Chernoff (Markov appliqué à une exponentielle) donne P(|e_n| > ε) ≤ 2exp(−nε²/4B). Applications : calcul de π, choix de n, comparaison avec Tchebychev et avec les méthodes déterministes en grande dimension." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "mc-lfgn": { t: "Loi forte des grands nombres", b: R`<p>Si $(Y_i)_{i\geqslant1}$ sont des variables réelles indépendantes, de même loi, avec $\mathbb E|Y_1|\lt+\infty$, alors $\frac1n\sum_{i=1}^nY_i\to\mathbb E[Y_1]$ presque sûrement.</p>` },
  "mc-markov": { t: "Inégalité de Markov", b: R`<p>Si $Z\geqslant0$ et $a>0$ : $\mathbb P(Z\geqslant a)\leqslant\frac{\mathbb E[Z]}a$. Avec $Z = (Y-\mathbb E Y)^2$, on obtient Bienaymé-Tchebychev : $\mathbb P(|Y-\mathbb EY|\geqslant a)\leqslant\frac{\mathbb V(Y)}{a^2}$.</p>` },
  "mc-transfert": { t: "Transfert, indépendance", b: R`<p>Si $X$ est uniforme sur $I = [0,1]^d$ et $g$ intégrable sur $I$, alors $\mathbb E[g(X)] = \int_Ig$. Si $Y_1,\dots,Y_n$ sont indépendantes, $\mathbb E\big[\prod h(Y_i)\big] = \prod\mathbb E[h(Y_i)]$ (pour $h\geqslant0$ mesurable).</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $I = [0,1]^d$ muni de la mesure de Lebesgue, $f : I\to\mathbb R$ mesurable avec $|f|\leqslant A$ presque partout et $\int_If^2\leqslant B$ ($A,B>0$). On note $m = \int_If$. Soit $(X_i)_{i\geqslant1}$ une suite de variables indépendantes uniformes sur $I$, et</p>$$e_n = \frac1n\sum_{i=1}^nf(X_i)-m.$$`;

/* générateur pseudo-aléatoire reproductible */
const rng = (seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; });
const figPts = (() => { const r = rng(7), s = 230, o = 30; let b = `<rect x="${o}" y="${o}" width="${s}" height="${s}" class="thin" style="fill:none"/><path d="M${o} ${o} A${s} ${s} 0 0 1 ${o + s} ${o + s}" class="vk" style="fill:none;stroke-width:1.5"/>`; let inn = 0; const N = 400;
  for (let k = 0; k < N; k++) { const x = r(), y = r(), ok = x * x + y * y <= 1; if (ok) inn++; b += `<circle cx="${(o + s * x).toFixed(1)}" cy="${(o + s - s * y).toFixed(1)}" r="2.2" class="${ok ? "ptb" : "ptr"}"/>`; }
  b += S(o, o + s + 18, "0", "middle", "sm") + S(o + s, o + s + 18, "1", "middle", "sm") + S(o - 8, o + 4, "1", "end", "sm");
  b += S(o + s + 18, o + 40, `${inn} points bleus sur ${N}`, "start", "sm") + S(o + s + 18, o + 62, `4 × ${inn}/${N} = ${(4 * inn / N).toFixed(2).replace(".", ",")}`, "start", "sm b") + S(o + s + 18, o + 84, "π ≈ 3,14", "start", "sm");
  return FIG(440, 290, b, R`$400$ points uniformes dans $[0,1]^2$ : la proportion de points dans le quart de disque $x^2+y^2\leqslant1$ approche $\frac\pi4$. C'est la méthode de Monte-Carlo pour $f = \mathbf 1_{\{x^2+y^2\leqslant1\}}$, $m = \frac\pi4$.`, "Monte-Carlo pour π"); })();

const figTraj = (() => { const r = rng(11), N = 5000, est = []; let inn = 0; for (let n = 1; n <= N; n++) { const x = r(), y = r(); if (x * x + y * y <= 1) inn++; est.push(4 * inn / n); }
  const B = Math.PI / 4, eps = n => 4 * Math.sqrt(4 * B * Math.log(40) / n);
  return GRAPH({ w: 460, h: 250, x: [0, 5000], y: [2.6, 3.7], xt: [1000, 2000, 3000, 4000, 5000], xtl: ["1000", "2000", "3000", "4000", "5000"], yt: [2.8, 3, 3.2, 3.4, 3.6], ytl: ["2,8", "3", "3,2", "3,4", "3,6"], xl: "n",
    curves: [{ f: () => Math.PI, c: "k", dash: true, lab: [4300, 3.07, "π"] }, { f: n => n > 40 && Math.PI + eps(n) < 3.7 ? Math.PI + eps(n) : NaN, c: "r", lab: [3000, 3.55, "π ± borne à 95 %"] }, { f: n => n > 40 && Math.PI - eps(n) > 2.6 ? Math.PI - eps(n) : NaN, c: "r" }],
    extra: (X, Y) => `<path class="vb" style="fill:none;stroke-width:1.4" d="${est.map((v, k) => k % 5 ? "" : (k ? "L" : "M") + X(k + 1).toFixed(1) + " " + Y(Math.max(2.6, Math.min(3.7, v))).toFixed(1)).join("")}"/>` },
    R`Estimation $4\cdot\frac1n\sum f(X_i)$ de $\pi$ en fonction de $n$ (bleu), et l'enveloppe $\pi\pm4\varepsilon_n$ donnée par Q6 avec probabilité $\geqslant0{,}95$ : $\varepsilon_n = \sqrt{4B\ln40/n}$, $B = \frac\pi4$. L'erreur décroît comme $\frac1{\sqrt n}$ : la borne est prudente, l'estimation réelle est souvent bien plus proche.`, "Convergence de l'estimation de π"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "mc-1", ...P, part: "Partie I", time: "20 min",
  title: "Convergence presque sûre",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que pour tout $t\in[-1,1]$, $e^t\leqslant1+t+t^2$. (Étudier $g(t) = e^{-t}(1+t+t^2)$.)</li>
<li>Montrer que $e_n\to0$ presque sûrement.</li>
<li>Montrer que $\mathbb E[e_n] = 0$ et $\mathbb V(e_n) = \frac{\sigma^2}n$, où $\sigma^2 = \int_If^2-m^2\leqslant B$.</li></ol>`,
  decode: { donnees: [R`$f$ bornée, $X_i$ i.i.d. uniformes.`], but: R`Établir la convergence et la taille typique $\frac\sigma{\sqrt n}$ de l'erreur.`, cles: {} },
  steps: [
    Q(1, "Une inégalité exponentielle", R`<p>$g'(t) = e^{-t}t(1-t)$.</p>`, R`<p>$g'(t) = e^{-t}\big(-(1+t+t^2)+1+2t\big) = e^{-t}(t-t^2) = e^{-t}\,t(1-t)$. Sur $[-1,0]$, $g'\leqslant0$ ; sur $[0,1]$, $g'\geqslant0$. Donc $g$ atteint son minimum sur $[-1,1]$ en $0$ : $g(t)\geqslant g(0) = 1$, soit</p><div class="sbox">$$\forall t\in[-1,1],\quad e^t\leqslant1+t+t^2.$$</div>`),
    Q(2, "Loi forte", R`<p>Les $f(X_i)$ sont i.i.d. et intégrables.</p>`, R`<p>Les $Y_i = f(X_i)$ sont indépendantes et de même loi (images par la même fonction de variables i.i.d.). Par transfert, $\mathbb E|Y_1| = \int_I|f|\leqslant A\lt+\infty$ et $\mathbb E[Y_1] = \int_If = m$. Par la loi forte des grands nombres, $\frac1n\sum Y_i\to m$ presque sûrement, soit $e_n\to0$ p.s.</p>`, ["mc-lfgn", "mc-transfert"]),
    Q(3, "Espérance et variance", R`<p>Linéarité, et variance d'une somme de variables indépendantes.</p>`, R`<p>$\mathbb E[e_n] = \frac1n\sum\mathbb E[Y_i]-m = 0$. Par indépendance, $\mathbb V\big(\sum Y_i\big) = n\,\mathbb V(Y_1)$, et $\mathbb V(Y_1) = \mathbb E[Y_1^2]-m^2 = \int_If^2-m^2 = \sigma^2\leqslant B$. Donc $\mathbb V(e_n) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}n$ : l'erreur est typiquement de taille $\frac\sigma{\sqrt n}$, <b>quelle que soit la dimension $d$</b>.</p>`, ["mc-transfert"])
  ],
  piege: R`La loi forte ne dit rien de la vitesse : pour savoir combien de points tirer, il faut une inégalité quantitative (Partie II).`,
  methode: R`Monte-Carlo : une intégrale est une espérance, $\int_If = \mathbb E[f(X)]$, que l'on estime par une moyenne empirique.`
},

/* ===================== Partie II ===================== */
{ id: "mc-2", ...P, part: "Partie II", time: "35 min",
  title: "Une inégalité de concentration",
  enonce: PRE + R`<p><b>Partie II.</b> Soient $\varepsilon\in]0,\frac BA[$ et $\alpha>0$.</p><ol start="4">
<li>Montrer que $\mathbb P(e_n>\varepsilon)\leqslant e^{-\alpha\varepsilon}\,\mathbb E\big[e^{\alpha e_n}\big]$, puis que $\mathbb E\big[e^{\alpha e_n}\big] = \Big(\mathbb E\big[e^{\frac\alpha n(f(X_1)-m)}\big]\Big)^n$.</li>
<li>Montrer que $|f(x)-m|\leqslant2A$ pour presque tout $x$. En déduire que si $\alpha\leqslant\frac n{2A}$, alors $\mathbb E\big[e^{\frac\alpha n(f(X_1)-m)}\big]\leqslant1+\frac{\alpha^2B}{n^2}$, puis $\mathbb E\big[e^{\alpha e_n}\big]\leqslant e^{\alpha^2B/n}$.</li>
<li>Optimiser en $\alpha$ et conclure :</li></ol><div class="sbox">$$\mathbb P(|e_n|>\varepsilon)\leqslant2\exp\Big(-\frac{n\varepsilon^2}{4B}\Big).$$</div>`,
  decode: { donnees: [R`Q1, Markov, indépendance.`], but: R`Méthode de Chernoff : Markov appliqué à $e^{\alpha e_n}$, puis choix optimal de $\alpha$.`, cles: {} },
  steps: [
    Q(4, "Markov exponentiel", R`<p>$x\mapsto e^{\alpha x}$ est croissante. $e^{\alpha e_n} = \prod_ie^{\frac\alpha n(Y_i-m)}$.</p>`, R`<p>Comme $x\mapsto e^{\alpha x}$ est strictement croissante, $\{e_n>\varepsilon\} = \{e^{\alpha e_n}>e^{\alpha\varepsilon}\}$. Par Markov appliqué à $e^{\alpha e_n}\geqslant0$ :</p>$$\mathbb P(e_n>\varepsilon)\leqslant\frac{\mathbb E[e^{\alpha e_n}]}{e^{\alpha\varepsilon}}.$$<p>Ensuite $e_n = \frac1n\sum(Y_i-m)$, donc $e^{\alpha e_n} = \prod_{i=1}^ne^{\frac\alpha n(Y_i-m)}$. Par indépendance puis égalité des lois :</p>$$\mathbb E[e^{\alpha e_n}] = \prod_{i=1}^n\mathbb E\big[e^{\frac\alpha n(Y_i-m)}\big] = \Big(\mathbb E\big[e^{\frac\alpha n(Y_1-m)}\big]\Big)^n.$$`, ["mc-markov", "mc-transfert"]),
    Q(5, "Majoration de la transformée de Laplace", R`<p>$f(x)-m = \int_I(f(x)-f(t))\,dt$. Appliquer Q1 à $t = \frac\alpha n(f(x)-m)$, puis prendre l'espérance : le terme d'ordre $1$ est nul.</p>`, R`<p>Pour presque tout $x$, $|f(x)-m| = \big|\int_I\big(f(x)-f(t)\big)dt\big|\leqslant\int_I(|f(x)|+|f(t)|)\,dt\leqslant2A$. Si $\alpha\leqslant\frac n{2A}$, alors $\big|\frac\alpha n(f(x)-m)\big|\leqslant1$, et Q1 donne presque partout</p>$$e^{\frac\alpha n(f(x)-m)}\leqslant1+\frac\alpha n(f(x)-m)+\frac{\alpha^2}{n^2}(f(x)-m)^2.$$<p>On intègre sur $I$ (transfert) : $\int_I(f-m) = 0$ et $\int_I(f-m)^2 = \int f^2-2m^2+m^2 = \int f^2-m^2\leqslant B$. D'où</p>$$\mathbb E\big[e^{\frac\alpha n(Y_1-m)}\big]\leqslant1+\frac{\alpha^2B}{n^2}.$$<p>Comme $1+u\leqslant e^u$, la puissance $n$-ième donne $\mathbb E[e^{\alpha e_n}]\leqslant\big(1+\frac{\alpha^2B}{n^2}\big)^n\leqslant e^{\alpha^2B/n}$.</p>`, ["mc-transfert"]),
    Q(6, "Choix optimal de α", R`<p>Minimiser $-\alpha\varepsilon+\frac{\alpha^2B}n$ : $\alpha = \frac{n\varepsilon}{2B}$, admissible car $\varepsilon\lt\frac BA$.</p>`, R`<p>Par Q4 et Q5, pour $0\lt\alpha\leqslant\frac n{2A}$ : $\mathbb P(e_n>\varepsilon)\leqslant\exp\big(-\alpha\varepsilon+\frac{\alpha^2B}n\big)$. Le trinôme $-\alpha\varepsilon+\frac{\alpha^2B}n$ est minimal en $\alpha = \frac{n\varepsilon}{2B}$, qui vérifie $\alpha\leqslant\frac n{2A}\iff\varepsilon\leqslant\frac BA$ : il est admissible. Sa valeur est $-\frac{n\varepsilon^2}{2B}+\frac{n\varepsilon^2}{4B} = -\frac{n\varepsilon^2}{4B}$, donc</p>$$\mathbb P(e_n>\varepsilon)\leqslant e^{-n\varepsilon^2/4B}.$$<p>La fonction $-f$ vérifie les mêmes hypothèses, avec erreur $-e_n$ : $\mathbb P(-e_n>\varepsilon)\leqslant e^{-n\varepsilon^2/4B}$. En sommant (réunion de deux événements) :</p><div class="sbox">$$\mathbb P(|e_n|>\varepsilon)\leqslant2\exp\Big(-\frac{n\varepsilon^2}{4B}\Big).$$</div>`)
  ],
  piege: R`La condition $\varepsilon\lt\frac BA$ n'est pas décorative : elle garantit que l'$\alpha$ optimal reste dans la zone $\alpha\leqslant\frac n{2A}$ où l'inégalité $e^t\leqslant1+t+t^2$ est valable.`,
  methode: R`Méthode de Chernoff : $\mathbb P(S>a)\leqslant e^{-\alpha a}\mathbb E[e^{\alpha S}]$, l'indépendance factorise l'espérance, puis on optimise en $\alpha$. On obtient une décroissance exponentielle en $n$, bien meilleure que Tchebychev pour les petites probabilités d'erreur.`
},

/* ===================== Partie III ===================== */
{ id: "mc-3", ...P, part: "Partie III", time: "30 min",
  title: "Combien de points ? Applications",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Soit $\delta\in]0,1[$. Donner $n$ assurant $\mathbb P(|e_n|>\varepsilon)\leqslant\delta$ d'après Q6, puis d'après Bienaymé-Tchebychev. Comparer pour $\delta = \frac12$ et pour $\delta = 10^{-6}$.</li>
<li>(<b>Calcul de π</b>) $d = 2$, $f = \mathbf 1_{\{x^2+y^2\leqslant1\}}$. Donner $m$, $A$, $B$. Combien de points garantissent, avec probabilité $\geqslant0{,}95$, une erreur $\leqslant5\cdot10^{-3}$ sur $\pi$ ?</li>
<li>(<b>Grande dimension</b>) Soit $f$ $L$-lipschitzienne pour $\|\cdot\|_\infty$ sur $I = [0,1]^d$. On découpe $I$ en $N = k^d$ cubes de côté $\frac1k$ et on approche $m$ par la moyenne des valeurs de $f$ aux centres. Majorer l'erreur, et comparer le nombre d'évaluations nécessaires pour une erreur $10^{-2}$ en dimension $d = 10$ avec Monte-Carlo.</li></ol>`,
  decode: { donnees: [R`Q3 et Q6.`], but: R`Dimensionner l'algorithme et le comparer.`, cles: {} },
  steps: [
    Q(7, "Chernoff contre Tchebychev", R`<p>$2e^{-n\varepsilon^2/4B}\leqslant\delta\iff n\geqslant\frac{4B\ln(2/\delta)}{\varepsilon^2}$. Tchebychev : $\mathbb P(|e_n|>\varepsilon)\leqslant\frac{\sigma^2}{n\varepsilon^2}\leqslant\frac B{n\varepsilon^2}$.</p>`, R`<p><b>Q6.</b> $2e^{-n\varepsilon^2/4B}\leqslant\delta\iff n\geqslant\frac{4B\ln(2/\delta)}{\varepsilon^2}$.</p><p><b>Tchebychev.</b> Par Q3, $\mathbb P(|e_n|>\varepsilon)\leqslant\frac{\mathbb V(e_n)}{\varepsilon^2}\leqslant\frac B{n\varepsilon^2}$, d'où $n\geqslant\frac B{\delta\varepsilon^2}$.</p><table class="vals"><tr><th></th><th>Q6</th><th>Tchebychev</th></tr><tr><td>$\delta = \frac12$</td><td>$4\ln4\approx5{,}5$</td><td>$2$</td></tr><tr><td>$\delta = 10^{-6}$</td><td>$4\ln(2\cdot10^6)\approx58$</td><td>$10^6$</td></tr></table><p>(en unités de $\frac B{\varepsilon^2}$). Pour une confiance modeste Tchebychev est meilleur ; pour une grande confiance l'exponentielle l'emporte largement : $\ln\frac1\delta$ au lieu de $\frac1\delta$. Dans les deux cas $n$ est proportionnel à $\frac1{\varepsilon^2}$ : <b>une décimale de plus coûte $100$ fois plus de points</b>. Avec $\delta = \frac12$, $\varepsilon = 10^{-k}$ : $n\geqslant4B\ln4\cdot10^{2k}$.</p>`, ["mc-markov"]),
    Q(8, "Calcul de π", R`<p>$f^2 = f$. Une erreur $5\cdot10^{-3}$ sur $\pi = 4m$ est une erreur $1{,}25\cdot10^{-3}$ sur $m$.</p>`, R`<p>$m = \int_{[0,1]^2}\mathbf 1_{\{x^2+y^2\leqslant1\}} = \frac\pi4$ (aire du quart de disque), $|f|\leqslant1 = A$, et $\int f^2 = \int f = \frac\pi4 = B$. On veut $|4e_n|\leqslant5\cdot10^{-3}$, soit $\varepsilon = 1{,}25\cdot10^{-3}\lt\frac BA$, avec $\delta = 0{,}05$ :</p>$$n\geqslant\frac{4\cdot\frac\pi4\cdot\ln40}{(1{,}25\cdot10^{-3})^2} = \frac{\pi\ln40}{1{,}5625\cdot10^{-6}}\approx7{,}4\cdot10^6.$$<p>Environ $7{,}4$ millions de points pour deux décimales garanties : la méthode est simple mais lente.</p>${figPts}${figTraj}`),
    Q(9, "Pourquoi Monte-Carlo en grande dimension", R`<p>Sur chaque cube $C$ de centre $c$, $|f-f(c)|\leqslant\frac L{2k}$.</p>`, R`<p>Sur un cube $C$ de côté $\frac1k$ et de centre $c$, $\|x-c\|_\infty\leqslant\frac1{2k}$, donc $|f(x)-f(c)|\leqslant\frac L{2k}$. En sommant sur les $N$ cubes (de volume $\frac1N$) :</p>$$\Big|m-\frac1N\sum_Cf(c)\Big|\leqslant\sum_C\int_C|f-f(c)|\leqslant\frac L{2k} = \frac L{2N^{1/d}}.$$<p>Pour une erreur $10^{-2}$ avec $L = 1$ : $k = 50$, $N = 50^{10}\approx10^{17}$ évaluations en dimension $10$. Si de plus $|f|\leqslant1$, on peut prendre $A = B = 1$, et Monte-Carlo (Q7, $\delta = 0{,}05$) demande $n\approx\frac{4\ln40}{10^{-4}}\approx1{,}5\cdot10^5$ points, <b>indépendamment de $d$</b>. Le prix : un résultat seulement probable, et une erreur en $\frac1{\sqrt n}$.</p>`)
  ],
  piege: R`Dans Q8, $B$ est une borne de $\int f^2$, pas de la variance ; utiliser la variance $\sigma^2 = \frac\pi4\big(1-\frac\pi4\big)\approx0{,}17$ améliorerait Tchebychev, mais Q6 telle qu'énoncée utilise $B$.`,
  methode: R`Dimensionner une simulation : fixer précision $\varepsilon$ et risque $\delta$, puis inverser une inégalité de concentration. Retenir $n\propto\frac{\ln(1/\delta)}{\varepsilon^2}$, sans dépendance en la dimension.`
}
]);
})();

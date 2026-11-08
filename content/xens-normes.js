/* Commando X-ENS · Aller plus loin · Sujet « Équivalence des normes et théorème de Riesz ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 4, kind: "probleme", qnav: true, side: true, level: 3, plus: "nriesz",
  sujet: "Dimension finie : équivalence des normes et compacité de la boule (Riesz)",
  sujetDesc: "Sur un espace de dimension finie, toutes les normes sont équivalentes : une norme N est majorée par β·N_∞, donc continue, et atteint son minimum α > 0 sur la sphère de N_∞, qui est compacte. Réciproquement, un espace normé dont la boule unité fermée est compacte est de dimension finie (théorème de Riesz), grâce à un vecteur unitaire à distance 1 d'un sous-espace de dimension finie." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "nr-bw": { t: "Compacts de (ℝⁿ, ‖·‖∞)", b: R`$$K\subset(\mathbb R^n,\|\cdot\|_\infty)\text{ fermé borné}\ \Longrightarrow\ K\text{ compact}.$$` },
  "nr-cont": { t: "Compacité et continuité", b: R`$$\begin{gathered}f\text{ continue}\Rightarrow f(K)\text{ compact},\\[4pt]f : K\to\mathbb R\text{ continue}\Rightarrow\min,\max\text{ atteints},\\[4pt]\|f(x)\|\leqslant C\|x\|\Rightarrow f\text{ continue}.\end{gathered}$$` },
  "nr-bl": { t: "Borel-Lebesgue", b: R`$$K\text{ compact},\ K\subset\bigcup_{i\in I}U_i\ \Longrightarrow\ \exists J\subset I\text{ fini},\ K\subset\bigcup_{i\in J}U_i.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $E$ est un $\mathbb R$-espace vectoriel. Deux normes $N,N'$ sur $E$ sont équivalentes s'il existe $\alpha,\beta>0$ avec $\alpha N'\leqslant N\leqslant\beta N'$. Si $E$ est de dimension finie $n$ et $\mathcal B = (e_1,\dots,e_n)$ une base, on note $N_\infty(x) = \max_i|x_i|$ ($x_i$ coordonnées de $x$ dans $\mathcal B$).</p>`;

const figBoules = (() => { const cx = 150, cy = 140, s = 90; let b = `<line x1="${cx - 120}" y1="${cy}" x2="${cx + 120}" y2="${cy}" class="ax"/><line x1="${cx}" y1="${cy - 120}" x2="${cx}" y2="${cy + 120}" class="ax"/>`;
  b += `<rect x="${cx - s}" y="${cy - s}" width="${2 * s}" height="${2 * s}" class="vr" style="fill:none;stroke-width:2"/><circle cx="${cx}" cy="${cy}" r="${s}" class="vg" style="fill:none;stroke-width:2"/><path d="M${cx + s} ${cy} L${cx} ${cy - s} L${cx - s} ${cy} L${cx} ${cy + s} Z" class="vb" style="fill:none;stroke-width:2"/>`;
  b += S(cx + s + 6, cy + s - 4, "‖·‖∞ ≤ 1", "start", "sm r") + S(cx - 0.72 * s - 8, cy - 0.72 * s - 4, "‖·‖₂ ≤ 1", "end", "sm g") + S(cx + s / 2 + 4, cy - s / 2 + 24, "‖·‖₁ ≤ 1", "start", "sm b");
  b += S(300, 70, "‖x‖∞ ≤ ‖x‖₂ ≤ ‖x‖₁", "start", "sm") + S(300, 95, "‖x‖₁ ≤ √n ‖x‖₂ ≤ n ‖x‖∞", "start", "sm") + S(300, 130, "Les boules sont emboîtées :", "start", "sm") + S(300, 150, "chacune contient une petite", "start", "sm") + S(300, 170, "copie de l'autre.", "start", "sm");
  return FIG(500, 280, b, R`Boules unités de $\mathbb R^2$ pour $\|\cdot\|_1$ (losange), $\|\cdot\|_2$ (disque), $\|\cdot\|_\infty$ (carré). Être équivalentes, c'est exactement cela : la boule de l'une contient une boule de l'autre de rayon $\alpha>0$ et est contenue dans une de rayon $\beta$. Les constantes dépendent de la dimension.`, "Boules unités"); })();

const figRiesz = (() => { let b = ""; b += `<line x1="40" y1="200" x2="440" y2="200" class="vb" style="stroke-width:2"/>` + S(430, 192, "F", "end", "sm b");
  b += `<circle cx="300" cy="70" r="4.5" class="ptr"/><circle cx="300" cy="200" r="4.5" class="ptb"/><line x1="300" y1="70" x2="300" y2="200" class="vr" style="stroke-width:1.8;stroke-dasharray:5 4"/>` + S(308, 66, "y", "start", "sm r") + S(308, 216, "x₀ (distance atteinte)", "start", "sm b");
  b += `<line x1="140" y1="200" x2="140" y2="140" class="vk" style="stroke-width:2"/><circle cx="140" cy="140" r="4" class="pt"/>` + S(140, 112, "u = (y − x₀)/‖y − x₀‖", "middle", "sm") + S(140, 130, "d(u, F) = 1", "middle", "sm");
  b += `<path d="M80 200 A60 60 0 0 1 200 200" class="thin" style="fill:none"/>`;
  return FIG(480, 240, b, R`Lemme de Riesz : si $F$ est de dimension finie et $y\notin F$, la distance $d(y,F)$ est atteinte en $x_0$, et $u = \frac{y-x_0}{\|y-x_0\|}$ est un vecteur unitaire à distance exactement $1$ de $F$ (car $x_0$ est aussi un point le plus proche pour $y$, et tout se dilate par $\frac1{\|y-x_0\|}$).`, "Lemme de Riesz"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "nriesz-1", ...P, part: "Partie I", time: "25 min",
  title: "Toutes les normes sont équivalentes en dimension finie",
  enonce: PRE + R`<p><b>Partie I.</b> $E$ est de dimension finie $n$, $N$ une norme sur $E$.</p><ol start="1">
<li>Montrer que $N\leqslant\beta N_\infty$ avec $\beta = \sum_iN(e_i)$.</li>
<li>Soit $f : (\mathbb R^n,\|\cdot\|_\infty)\to(E,N)$, $x\mapsto\sum x_ie_i$. Montrer que $f$ est continue et que $S_E = \{x\in E : N_\infty(x) = 1\}$ est un compact de $(E,N)$.</li>
<li>Montrer que $N$ atteint un minimum $\alpha>0$ sur $S_E$, puis que $\alpha N_\infty\leqslant N$. Conclure.</li></ol>`,
  decode: { donnees: [R`Bolzano-Weierstrass dans $\mathbb R^n$.`], but: R`Comparer toute norme à $N_\infty$.`, cles: {} },
  steps: [
    Q(1, "Majoration", R`<p>Inégalité triangulaire sur $x = \sum x_ie_i$.</p>`, R`<p>$N(x) = N\big(\sum x_ie_i\big)\leqslant\sum|x_i|N(e_i)\leqslant\big(\sum_iN(e_i)\big)\max_i|x_i| = \beta N_\infty(x)$, avec $\beta>0$ car les $e_i$ sont non nuls.</p>`),
    Q(2, "Compacité de la sphère", R`<p>$N(f(x))\leqslant\beta\|x\|_\infty$ ; $S_E = f(S^n_\infty)$.</p>`, R`<p>$f$ est linéaire et $N(f(x)) = N\big(\sum x_ie_i\big)\leqslant\beta\|x\|_\infty$ (Q1) : $f$ est continue. La sphère $S^n_\infty = \{x\in\mathbb R^n : \|x\|_\infty = 1\}$ est fermée bornée, donc compacte. Comme $N_\infty(f(x)) = \|x\|_\infty$, on a $S_E = f(S^n_\infty)$, image d'un compact par une application continue : c'est un compact de $(E,N)$.</p>`, ["nr-bw", "nr-cont"]),
    Q(3, "Minoration et conclusion", R`<p>$N$ est continue sur $(E,N)$ (1-lipschitzienne). Puis homogénéité.</p>`, R`<p>$N$ est $1$-lipschitzienne sur $(E,N)$ ($|N(x)-N(y)|\leqslant N(x-y)$), donc continue ; sur le compact non vide $S_E$, elle atteint son minimum $\alpha = N(x_0)$. Comme $N_\infty(x_0) = 1$, $x_0\neq0$ et $\alpha>0$. Pour $x\neq0$, $\frac x{N_\infty(x)}\in S_E$, donc $N\big(\frac x{N_\infty(x)}\big)\geqslant\alpha$, soit $N(x)\geqslant\alpha N_\infty(x)$ (vrai aussi pour $x = 0$). Ainsi $\alpha N_\infty\leqslant N\leqslant\beta N_\infty$ : toute norme est équivalente à $N_\infty$, et par transitivité toutes les normes sur $E$ sont équivalentes.</p>${figBoules}`, ["nr-cont"])
  ],
  piege: R`L'argument de compacité a lieu dans $(E,N)$ : il faut d'abord savoir que $f$ est continue pour $N$, d'où la majoration de Q1, qui ne demande que l'inégalité triangulaire.`,
  methode: R`Pour comparer deux normes en dimension finie : majoration par l'inégalité triangulaire, minoration par compacité de la sphère.`
},

/* ===================== Partie II ===================== */
{ id: "nriesz-2", ...P, part: "Partie II", time: "25 min",
  title: "Conséquences",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que si $E$ est de dimension finie, toute application linéaire de $E$ dans un espace normé $G$ est continue.</li>
<li>Montrer qu'un sous-espace $F$ de dimension finie d'un espace normé $V$ est fermé, et que pour $y\in V$, $d(y,F)$ est atteinte.</li>
<li>Sur $\mathbb R[X]$, comparer $N_1(P) = \sum|a_k|$ (somme des modules des coefficients) et $N_\infty(P) = \sup_{[0,1]}|P|$ à l'aide de $P_n = (X-1)^n$. Conclusion ?</li></ol>`,
  decode: { donnees: [R`Partie I.`], but: R`Exploiter l'équivalence des normes.`, cles: {} },
  steps: [
    Q(4, "Continuité automatique", R`<p>$\|u(x)\|\leqslant\sum|x_i|\|u(e_i)\|\leqslant C\,N_\infty(x)$, puis équivalence.</p>`, R`<p>Pour $u$ linéaire, $\|u(x)\|_G\leqslant\sum|x_i|\|u(e_i)\|_G\leqslant\big(\sum\|u(e_i)\|_G\big)N_\infty(x)$. Comme $N_\infty\leqslant\frac1\alpha N$ pour la norme $N$ de $E$, $\|u(x)\|_G\leqslant C\,N(x)$ : $u$ est continue.</p>`, ["nr-cont"]),
    Q(5, "Sous-espaces de dimension finie", R`<p>Une suite de $F$ qui converge dans $V$ est de Cauchy dans $F$ ; $F$ est complet (équivalent à $\mathbb R^n$). Pour la distance : minimiser $x\mapsto\|y-x\|$ sur une boule fermée de $F$.</p>`, R`<p><b>Fermé.</b> Sur $F$, la norme de $V$ est équivalente à $N_\infty$ : $F$ est isomorphe (normes équivalentes) à $(\mathbb R^p,\|\cdot\|_\infty)$, complet. Si $x_k\in F$ et $x_k\to x\in V$, $(x_k)$ est de Cauchy dans $F$, donc converge dans $F$, et par unicité de la limite $x\in F$.</p><p><b>Distance atteinte.</b> Soit $K = \{x\in F : \|x\|\leqslant2\|y\|\}$, fermé borné de $F$, donc compact (Q2-Q3). Pour $x\in F\setminus K$, $\|y-x\|\geqslant\|x\|-\|y\|>\|y\| = \|y-0\|$ avec $0\in K$ : donc $d(y,F) = d(y,K)$, et la fonction continue $x\mapsto\|y-x\|$ atteint son minimum sur le compact $K$.</p>`),
    Q(6, "En dimension infinie", R`<p>$N_1(P_n) = 2^n$, $N_\infty(P_n) = 1$.</p>`, R`<p>$(X-1)^n = \sum_k\binom nk(-1)^{n-k}X^k$, donc $N_1(P_n) = \sum_k\binom nk = 2^n$, tandis que $\sup_{[0,1]}|x-1|^n = 1$. Le rapport $\frac{N_1(P_n)}{N_\infty(P_n)} = 2^n$ n'est pas borné : $N_1$ et $N_\infty$ ne sont pas équivalentes sur $\mathbb R[X]$ (on a seulement $N_\infty\leqslant N_1$). En dimension infinie, l'équivalence des normes est fausse, et une application linéaire peut ne pas être continue : la dérivation $P\mapsto P'$ ne l'est pas pour $N_\infty$, car $N_\infty(X^n) = 1$ et $N_\infty\big((X^n)'\big) = n$.</p>`)
  ],
  piege: R`« Fermé et borné implique compact » est propre à la dimension finie ; la Partie III montre que c'est même une caractérisation.`,
  methode: R`En dimension finie, on peut choisir la norme la plus commode : les notions topologiques (convergence, continuité, compacité) n'en dépendent pas.`
},

/* ===================== Partie III ===================== */
{ id: "nriesz-3", ...P, part: "Partie III", time: "30 min",
  title: "Le théorème de Riesz",
  enonce: PRE + R`<p><b>Partie III.</b> $(E,\|\cdot\|)$ est un espace normé quelconque, $B_E$ sa boule unité fermée.</p><ol start="7">
<li>(<b>Lemme de Riesz</b>) Soit $F$ un sous-espace de dimension finie de $E$, $F\neq E$. Montrer qu'il existe $u\in E$ avec $\|u\| = 1$ et $d(u,F) = 1$.</li>
<li>Montrer que si $E$ est de dimension infinie, $B_E$ n'est pas compacte. (Construire une suite de vecteurs unitaires deux à deux à distance $\geqslant1$.)</li>
<li>Exemples : dans $\ell^2$, calculer $\|e_k-e_l\|$ ; dans $(\mathcal C([0,1]),\|\cdot\|_\infty)$, exhiber une suite de $B_E$ sans sous-suite convergente.</li></ol>`,
  decode: { donnees: [R`Q5.`], but: R`Caractériser la dimension finie par la compacité de la boule.`, cles: {} },
  steps: [
    Q(7, "Vecteur à distance 1", R`<p>$y\notin F$, $x_0\in F$ réalise $d(y,F)>0$. Pour $x\in F$ : $\|u-x\| = \frac{\|y-(x_0+\|y-x_0\|x)\|}{\|y-x_0\|}$.</p>`, R`<p>Soit $y\in E\setminus F$. $F$ est fermé (Q5), donc $\delta = d(y,F)>0$, et $\delta = \|y-x_0\|$ pour un $x_0\in F$ (Q5). Posons $u = \frac{y-x_0}\delta$ : $\|u\| = 1$, et pour $x\in F$, $x_0+\delta x\in F$, donc</p>$$\|u-x\| = \frac{\|y-(x_0+\delta x)\|}\delta\geqslant\frac{d(y,F)}\delta = 1.$$<p>Avec $x = 0$ : $\|u\| = 1$, donc $d(u,F) = 1$.</p>${figRiesz}`),
    Q(8, "Non-compacité en dimension infinie", R`<p>Construire $u_1,u_2,\dots$ avec $u_{k+1}$ à distance $1$ de $\mathrm{Vect}(u_1,\dots,u_k)$.</p>`, R`<p>Prenons $u_1$ unitaire. Si $u_1,\dots,u_k$ sont construits, $F_k = \mathrm{Vect}(u_1,\dots,u_k)$ est de dimension finie, donc $\neq E$ ; par Q7, il existe $u_{k+1}$ unitaire avec $d(u_{k+1},F_k) = 1$. Alors $\|u_k-u_l\|\geqslant1$ pour $k\neq l$. La suite $(u_k)$ de $B_E$ n'a aucune sous-suite de Cauchy, donc aucune sous-suite convergente : $B_E$ n'est pas compacte.</p><div class="sbox"><p>$B_E$ est compacte si et seulement si $E$ est de dimension finie (théorème de Riesz).</p></div>`),
    Q(9, "Deux exemples", R`<p>$\|e_k-e_l\|_2 = \sqrt2$. Dans $\mathcal C([0,1])$ : des « bosses » à supports disjoints.</p>`, R`<p>Dans $\ell^2$, $\|e_k-e_l\|_2 = \sqrt{1+1} = \sqrt2$ pour $k\neq l$ : $(e_k)$ est une suite de la sphère unité sans sous-suite convergente.</p><p>Dans $(\mathcal C([0,1]),\|\cdot\|_\infty)$, soit $f_k$ la fonction « triangle » de hauteur $1$ supportée par $[\frac1{k+1},\frac1k]$. Les supports sont disjoints (à un point près), donc $\|f_k-f_l\|_\infty = 1$ pour $k\neq l$ : pas de sous-suite convergente. La boule unité de $\mathcal C([0,1])$ n'est pas compacte, ce qui confirme que cet espace est de dimension infinie.</p>`)
  ],
  piege: R`Dans Q7, la distance $d(y,F)$ doit être atteinte : c'est là que sert la dimension finie de $F$. Pour $F$ fermé de dimension infinie, on n'obtient en général qu'un $u$ avec $d(u,F)\geqslant1-\varepsilon$.`,
  methode: R`Pour montrer qu'un ensemble n'est pas compact : exhiber une suite dont les termes restent à distance $\geqslant c>0$ les uns des autres.`
}
]);
})();

/* Commando X-ENS · Aller plus loin · Sujet « Méthode de Newton ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 1, kind: "probleme", qnav: true, side: true, level: 3, plus: "newt",
  sujet: "La méthode de Newton : racine simple, racine double",
  sujetDesc: "On remplace f par sa tangente en x_n et on prend le zéro de la tangente : x_{n+1} = x_n − f(x_n)/f′(x_n). En une racine simple la convergence est quadratique (le nombre de décimales exactes double à chaque pas) ; en une racine double elle n'est plus que linéaire de rapport 1/2, et la méthode modifiée x − 2f/f′ restaure la vitesse quadratique. Exemples : Héron pour √2." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "nw-tl": { t: "Taylor-Lagrange", b: R`<p>Si $f$ est de classe $\mathcal C^2$ sur un intervalle $I$ et $|f''|\leqslant M$ sur $I$, alors pour $x,a\in I$ : $|f(x)-f(a)-f'(a)(x-a)|\leqslant\frac M2(x-a)^2$.</p>` },
  "nw-pf": { t: "Point fixe attractif", b: R`<p>Si $g$ est de classe $\mathcal C^1$ près d'un point fixe $r$ avec $|g'(r)|\lt1$, il existe $\eta>0$ et $k\lt1$ tels que $|g'|\leqslant k$ sur $J = [r-\eta,r+\eta]$. Alors $g(J)\subset J$ et, pour $x_0\in J$, $|x_{n+1}-r| = |g(x_n)-g(r)|\leqslant k|x_n-r|$ : convergence linéaire vers $r$.</p>` },
  "nw-vit": { t: "Vitesses de convergence", b: R`<p>$(x_n)$ converge <b>linéairement</b> vers $r$ s'il existe $k\in[0,1[$ avec $|x_{n+1}-r|\leqslant k|x_n-r|$, et <b>quadratiquement</b> s'il existe $C$ avec $|x_{n+1}-r|\leqslant C|x_n-r|^2$. Dans le second cas, si $C|x_0-r|\lt1$, alors $C|x_n-r|\leqslant(C|x_0-r|)^{2^n}$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $f : [a,b]\to\mathbb R$ est de classe $\mathcal C^2$ et s'annule en un point $r\in]a,b[$. La <b>méthode de Newton</b> consiste à itérer $x_{n+1} = N(x_n)$, où $N(x) = x-\frac{f(x)}{f'(x)}$ est l'abscisse du point où la tangente au graphe de $f$ en $x$ coupe l'axe des abscisses.</p>`;

/* Figure : tangentes pour f(x) = x² - 2, x0 = 2 */
const figTan = GRAPH({ w: 460, h: 250, x: [0.9, 2.15], y: [-1.2, 2.6], xt: [1], xtl: ["1"], yt: [-1, 1, 2], xl: "x",
  curves: [{ f: x => x * x - 2, c: "b", lab: [1.95, 2.35, "f(x) = x² − 2", "end"] }],
  extra: (X, Y) => { let s = "", x = 2; const lab = ["x₀", "x₁", "x₂"];
    for (let k = 0; k < 3; k++) { const fx = x * x - 2, x1 = x - fx / (2 * x);
      s += `<line x1="${X(x).toFixed(1)}" y1="${Y(0).toFixed(1)}" x2="${X(x).toFixed(1)}" y2="${Y(fx).toFixed(1)}" class="thin"/><line x1="${X(x).toFixed(1)}" y1="${Y(fx).toFixed(1)}" x2="${X(x1).toFixed(1)}" y2="${Y(0).toFixed(1)}" class="vr" style="stroke-width:1.6"/><circle cx="${X(x).toFixed(1)}" cy="${Y(fx).toFixed(1)}" r="3.5" class="ptr"/>`;
      s += S(X(x), Y(0) + 16 + (k === 2 ? 0 : 0), lab[k], "middle", "sm r"); x = x1; }
    return s + `<circle cx="${X(Math.SQRT2).toFixed(1)}" cy="${Y(0).toFixed(1)}" r="4" class="ptb"/>` + S(X(Math.SQRT2) - 6, Y(0) - 10, "√2", "end", "sm b"); } },
  R`Méthode de Newton pour $f(x) = x^2-2$ depuis $x_0 = 2$ : on suit la tangente (rouge) jusqu'à l'axe. $x_1 = 1{,}5$, $x_2 = \frac{17}{12}\approx1{,}4167$, $x_3 = \frac{577}{408}\approx1{,}414216$ : les points se resserrent très vite sur $\sqrt2$.`, "Tangentes de Newton");

/* Figure : erreurs simple / double / modifiée */
const errSeq = (step, x0) => { const out = []; let x = x0; for (let n = 0; n <= 12; n++) { const e = Math.abs(x - 1); out.push(e > 1e-16 ? Math.log10(e) : NaN); if (e > 1e-16) x = step(x); } return out; };
const eS = errSeq(x => x - (x - 1) / x, 2), eD = errSeq(x => x - (x - 1) / (x + 1), 2), eM = errSeq(x => x - 2 * (x - 1) / (x + 1), 2);
const figErr = GRAPH({ w: 460, h: 250, x: [0, 12], y: [-16, 0.5], xt: [2, 4, 6, 8, 10, 12], yt: [-15, -10, -5], ytl: ["10⁻¹⁵", "10⁻¹⁰", "10⁻⁵"], xl: "n", curves: [],
  extra: (X, Y) => { let s = ""; [[eS, "b"], [eD, "r"], [eM, "g"]].forEach(([e, c]) => { let d = "", on = false; e.forEach((v, n) => { if (isFinite(v) && v > -16) { d += (on ? "L" : "M") + X(n).toFixed(1) + " " + Y(v).toFixed(1); on = true; s += `<circle cx="${X(n).toFixed(1)}" cy="${Y(v).toFixed(1)}" r="3" class="pt${c === "b" ? "b" : c === "r" ? "r" : ""}"/>`; } }); s += `<path d="${d}" class="v${c}" style="fill:none;stroke-width:1.8"/>`; });
    return s + S(X(6.2), Y(-13.8), "racine simple", "start", "sm b") + S(X(9.5), Y(-2), "racine double", "middle", "sm r") + S(X(0.4), Y(-8.5), "double, x − 2f/f′", "start", "sm g"); } },
  R`$\log_{10}|x_n-r|$ depuis $x_0 = 2$ pour $f(x) = (x-1)e^x$ (racine simple $r = 1$, bleu, $N(x) = x-\frac{x-1}x$) et $f(x) = (x-1)^2e^x$ (racine double), avec Newton (rouge, $N(x) = x-\frac{x-1}{x+1}$) et Newton modifié $x-2\frac f{f'}$ (orange). Quadratique : la courbe plonge de plus en plus vite. Linéaire de rapport $\frac12$ : droite de pente $\log_{10}\frac12\approx-0{,}3$.`, "Vitesse de convergence");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "newt-1", ...P, part: "Partie I", time: "30 min",
  title: "Racine simple : convergence quadratique",
  enonce: PRE + R`<p><b>Partie I.</b> On suppose que $f'$ ne s'annule pas sur $[a,b]$ et que $f(a)f(b)\lt0$. On note $m = \min_{[a,b]}|f'|$, $M = \max_{[a,b]}|f''|$ et $C = \frac M{2m}$.</p><ol start="1">
<li>Justifier que $m>0$ et que $r$ est l'unique zéro de $f$ sur $[a,b]$.</li>
<li>Montrer que si $x_n\in[a,b]$, alors $|x_{n+1}-r|\leqslant C|x_n-r|^2$.</li>
<li>Soit $h>0$ avec $Ch\lt1$ et $[r-h,r+h]\subset[a,b]$. Montrer que si $x_0\in[r-h,r+h]$, la suite est bien définie, reste dans cet intervalle, et vérifie $C|x_n-r|\leqslant(Ch)^{2^n}$.</li>
<li>(<b>Héron</b>) Écrire la méthode pour $f(x) = x^2-2$ sur $[1,2]$, calculer $C$, et estimer le nombre de décimales exactes de $x_4$ en partant de $x_0 = 2$.</li></ol>`,
  decode: { donnees: [R`$f'$ ne s'annule pas, Taylor-Lagrange.`], but: R`Montrer $|x_{n+1}-r|\leqslant C|x_n-r|^2$ et en tirer la convergence.`, cles: {} },
  steps: [
    Q(1, "Existence et unicité de la racine", R`<p>$|f'|$ est continue sur un segment. $f'$ de signe constant (valeurs intermédiaires).</p>`, R`<p>$|f'|$ est continue sur le compact $[a,b]$, donc atteint son minimum $m = |f'(c)|$ en un point $c$ ; comme $f'(c)\neq0$, $m>0$. Par le théorème des valeurs intermédiaires appliqué à $f'$ (continue, ne s'annulant pas), $f'$ est de signe constant : $f$ est strictement monotone, donc a au plus un zéro. Comme $f(a)f(b)\lt0$, elle en a un : $r$.</p>`),
    Q(2, "L'inégalité clé", R`<p>Taylor-Lagrange entre $x_n$ et $r$, puis diviser par $|f'(x_n)|\geqslant m$.</p>`, R`<p>Par Taylor-Lagrange en $x_n$ : $|f(r)-f(x_n)-f'(x_n)(r-x_n)|\leqslant\frac M2(r-x_n)^2$. Comme $f(r) = 0$, on divise par $|f'(x_n)|\geqslant m$ :</p>$$\Big|r-x_n+\frac{f(x_n)}{f'(x_n)}\Big|\leqslant\frac M{2|f'(x_n)|}(x_n-r)^2\leqslant\frac M{2m}(x_n-r)^2.$$<p>Le membre de gauche est $|r-x_{n+1}|$ :</p><div class="sbox">$$|x_{n+1}-r|\leqslant C\,|x_n-r|^2.$$</div><p>(Si $M = 0$, $f$ est affine et $x_1 = r$ dès le premier pas.)</p>`, ["nw-tl"]),
    Q(3, "Stabilité de l'intervalle et doublement des décimales", R`<p>Récurrence : $|x_{n+1}-r|\leqslant Ch^2\lt h$. Puis poser $u_n = C|x_n-r|$ : $u_{n+1}\leqslant u_n^2$.</p>`, R`<p>Si $x_n\in[r-h,r+h]\subset[a,b]$, alors $x_{n+1}$ est défini ($f'(x_n)\neq0$) et $|x_{n+1}-r|\leqslant Ch^2\lt h$ : $x_{n+1}\in[r-h,r+h]$. Par récurrence, toute la suite est définie et reste dans l'intervalle.</p><p>Avec $u_n = C|x_n-r|$, Q2 donne $u_{n+1}\leqslant C^2|x_n-r|^2 = u_n^2$, d'où $u_n\leqslant u_0^{2^n}\leqslant(Ch)^{2^n}$. Comme $Ch\lt1$, la convergence est quadratique : si $|x_n-r|\approx10^{-p}$, alors $|x_{n+1}-r|\lesssim C\cdot10^{-2p}$, le nombre de décimales exactes double à peu près à chaque pas.</p>`, ["nw-vit"]),
    Q(4, "La méthode de Héron", R`<p>$N(x) = \frac12\big(x+\frac2x\big)$, $m = 2$, $M = 2$, $C = \frac12$.</p>`, R`<p>$N(x) = x-\frac{x^2-2}{2x} = \frac12\Big(x+\frac2x\Big)$ : c'est la méthode de Héron. Sur $[1,2]$, $|f'| = 2x\geqslant2 = m$, $f'' = 2 = M$, donc $C = \frac12$. On calcule $x_1 = \frac32$, $x_2 = \frac{17}{12}$, $x_3 = \frac{577}{408}$, $x_4 = \frac{665857}{470832}$.</p><p>Par Q2 : $|x_1-\sqrt2|\leqslant0{,}09$, puis $|x_2-\sqrt2|\leqslant\frac12\cdot0{,}09^2\approx4\cdot10^{-3}$, $|x_3-\sqrt2|\leqslant\frac12(4\cdot10^{-3})^2 = 8\cdot10^{-6}$, $|x_4-\sqrt2|\leqslant\frac12(8\cdot10^{-6})^2\approx3\cdot10^{-11}$ : au moins $10$ décimales exactes (en réalité $|x_4-\sqrt2|\approx1{,}6\cdot10^{-12}$).</p>${figTan}`)
  ],
  piege: R`La convergence n'est que <b>locale</b> : loin de $r$ (ou si $f'$ s'annule entre $x_0$ et $r$), la tangente peut envoyer $x_1$ hors de $[a,b]$, et la suite peut diverger ou osciller.`,
  methode: R`Newton : $x_{n+1}-r = \frac{f''(\xi)}{2f'(x_n)}(x_n-r)^2$ (Taylor). Une racine simple donne une erreur au carré à chaque pas.`
},

/* ===================== Partie II ===================== */
{ id: "newt-2", ...P, part: "Partie II", time: "35 min",
  title: "Racine double : convergence linéaire",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose maintenant $f(r) = f'(r) = 0$ et $f''(r)\neq0$.</p><ol start="5">
<li>Montrer qu'il existe $\eta>0$ tel que $f'(x)\neq0$ pour $0\lt|x-r|\leqslant\eta$. On pose $g(x) = x-\frac{f(x)}{f'(x)}$ si $x\neq r$ et $g(r) = r$.</li>
<li>Montrer que $g(x) = \frac{x+r}2+o(x-r)$ quand $x\to r$, puis que $g$ est continue et dérivable en $r$ avec $g'(r) = \frac12$.</li>
<li>Montrer que $g'(x) = \frac{f(x)f''(x)}{f'(x)^2}$ pour $x\neq r$, et que $g'(x)\to\frac12$. En déduire que $g$ est $\mathcal C^1$ près de $r$ et que $(x_n)$ converge linéairement vers $r$ si $x_0$ est assez proche de $r$.</li>
<li>Exemple : $f(x) = (x-1)^2$. Calculer $x_n$ explicitement.</li></ol>`,
  decode: { donnees: [R`$f(r) = f'(r) = 0$, $f''(r)\neq0$.`], but: R`Prolonger $N$ en $r$, montrer $N'(r) = \frac12$, et conclure par le point fixe.`, cles: {} },
  steps: [
    Q(5, "Bonne définition", R`<p>$f'(x) = (x-r)f''(r)+o(x-r)$.</p>`, R`<p>$f'$ est dérivable en $r$ avec $f'(r) = 0$ : $f'(x) = (x-r)\big(f''(r)+\varepsilon(x)\big)$ avec $\varepsilon(x)\to0$. Pour $|x-r|\leqslant\eta$ assez petit, $|\varepsilon(x)|\lt|f''(r)|$, donc $f'(x)\neq0$ dès que $x\neq r$. Ainsi $g$ est bien définie sur $J = [r-\eta,r+\eta]$ (on réduit $\eta$ pour que $J\subset[a,b]$).</p>`),
    Q(6, "Développement limité de g", R`<p>$f(x) = \frac{f''(r)}2h^2+o(h^2)$, $f'(x) = f''(r)h+o(h)$, $h = x-r$.</p>`, R`<p>Avec $h = x-r$, Taylor-Young à l'ordre $2$ pour $f$ et à l'ordre $1$ pour $f'$ :</p>$$f(x) = \frac{f''(r)}2h^2+o(h^2),\qquad f'(x) = f''(r)h+o(h).$$<p>Donc, pour $h\neq0$ :</p>$$\frac{f(x)}{f'(x)} = \frac{h^2\big(\frac{f''(r)}2+o(1)\big)}{h\big(f''(r)+o(1)\big)} = h\Big(\frac12+o(1)\Big) = \frac h2+o(h).$$<p>D'où $g(x) = x-\frac h2+o(h) = \frac{x+r}2+o(x-r)$. En particulier $g(x)\to r = g(r)$ : $g$ est continue en $r$, et $\frac{g(x)-g(r)}{x-r} = \frac12+o(1)$ : $g'(r) = \frac12$.</p>`),
    Q(7, "Régularité et convergence linéaire", R`<p>$g' = 1-\frac{f'^2-ff''}{f'^2} = \frac{ff''}{f'^2}$. Numérateur $\sim\frac{f''(r)^2}2h^2$, dénominateur $\sim f''(r)^2h^2$.</p>`, R`<p>Pour $x\neq r$, $g' = 1-\frac{f'^2-ff''}{f'^2} = \frac{ff''}{f'^2}$. Quand $x\to r$ : $f(x)f''(x) = \big(\frac{f''(r)}2h^2+o(h^2)\big)\big(f''(r)+o(1)\big) = \frac{f''(r)^2}2h^2+o(h^2)$ et $f'(x)^2 = f''(r)^2h^2+o(h^2)$. Donc $g'(x)\to\frac12 = g'(r)$ : $g'$ est continue en $r$, et sur $J\setminus\{r\}$ elle est continue (quotient de fonctions continues). Ainsi $g$ est $\mathcal C^1$ sur $J$.</p><p>Comme $|g'(r)| = \frac12\lt1$, $r$ est un point fixe attractif : pour $x_0$ proche de $r$, $|x_{n+1}-r|\leqslant k|x_n-r|$ avec $k\lt1$ (on peut prendre $k$ proche de $\frac12$), et même $\frac{x_{n+1}-r}{x_n-r}\to\frac12$ si $x_n\neq r$. La convergence est <b>linéaire de rapport $\frac12$</b> : on gagne un bit par itération, environ $0{,}3$ décimale.</p>`, ["nw-pf"]),
    Q(8, "Un exemple explicite", R`<p>$N(x) = x-\frac{(x-1)^2}{2(x-1)}$.</p>`, R`<p>Pour $x\neq1$ : $N(x) = x-\frac{x-1}2 = \frac{x+1}2$, donc $x_{n+1}-1 = \frac{x_n-1}2$ et $x_n = 1+\frac{x_0-1}{2^n}$. La convergence est exactement géométrique de rapport $\frac12$ : il faut environ $3{,}3$ itérations par décimale, au lieu d'un doublement des décimales.</p>`)
  ],
  piege: R`Ici $f$ ne change pas de signe en $r$ : le cadre « $f(a)f(b)\lt0$ » de la Partie I ne s'applique pas, et la dichotomie non plus. Newton converge quand même, mais lentement.`,
  methode: R`Pour étudier une itération $x_{n+1} = g(x_n)$ en un point fixe $r$ : calculer $g'(r)$. $|g'(r)|\lt1$ donne une convergence linéaire de rapport $|g'(r)|$ ; $g'(r) = 0$ donne mieux (quadratique si $g$ est $\mathcal C^2$).`
},

/* ===================== Partie III ===================== */
{ id: "newt-3", ...P, part: "Partie III", time: "25 min",
  title: "Racine multiple : restaurer la vitesse",
  enonce: PRE + R`<p><b>Partie III.</b> On suppose $f$ de classe $\mathcal C^{p+1}$ ($p\geqslant1$) avec $f(r) = \dots = f^{(p-1)}(r) = 0$ et $f^{(p)}(r)\neq0$ (racine de multiplicité $p$).</p><ol start="9">
<li>Montrer que $N(x)-r\sim\big(1-\frac1p\big)(x-r)$ : la méthode de Newton converge linéairement de rapport $1-\frac1p$ (si $p\geqslant2$).</li>
<li>On pose $N_p(x) = x-p\frac{f(x)}{f'(x)}$. Montrer que $N_p(x)-r = O\big((x-r)^2\big)$.</li>
<li>Montrer que $u = \frac f{f'}$ (prolongée par $0$ en $r$) a une racine simple en $r$, et en déduire une méthode quadratique qui ne demande pas de connaître $p$.</li></ol>`,
  decode: { donnees: [R`Partie II pour $p = 2$.`], but: R`Comprendre la perte de vitesse et la corriger.`, cles: {} },
  steps: [
    Q(9, "Rapport de convergence 1 − 1/p", R`<p>$f(x) = \frac{f^{(p)}(r)}{p!}h^p(1+O(h))$, $f'(x) = \frac{f^{(p)}(r)}{(p-1)!}h^{p-1}(1+O(h))$.</p>`, R`<p>Avec $h = x-r$ et $c = f^{(p)}(r)\neq0$, Taylor (avec $f\in\mathcal C^{p+1}$) donne $f(x) = \frac c{p!}h^p\big(1+O(h)\big)$ et $f'(x) = \frac c{(p-1)!}h^{p-1}\big(1+O(h)\big)$. Donc</p>$$\frac{f(x)}{f'(x)} = \frac hp\big(1+O(h)\big),$$$$N(x)-r = h-\frac hp+O(h^2) = \Big(1-\frac1p\Big)h+O(h^2).$$<p>Pour $p = 1$ on retrouve un $O(h^2)$ (quadratique) ; pour $p = 2$, le rapport $\frac12$ de la Partie II ; pour $p\geqslant2$, convergence linéaire de rapport $1-\frac1p$, d'autant plus lente que $p$ est grand.</p>`),
    Q(10, "Newton modifié", R`<p>Même développement, avec le facteur $p$.</p>`, R`<p>$N_p(x)-r = h-p\cdot\frac hp\big(1+O(h)\big) = O(h^2)$. Le $O$ vient de Taylor : plus précisément, $\frac{f(x)}{f'(x)} = \frac hp+O(h^2)$ car $f\in\mathcal C^{p+1}$. Donc $|N_p(x_n)-r|\leqslant C|x_n-r|^2$ près de $r$ : la convergence redevient quadratique.</p>${figErr}`),
    Q(11, "Sans connaître la multiplicité", R`<p>$u(x) = \frac hp(1+O(h))$, donc $u(r) = 0$ et $u'(r) = \frac1p\neq0$.</p>`, R`<p>Par Q9, $u(x) = \frac{f(x)}{f'(x)} = \frac hp\big(1+O(h)\big)$ pour $x\neq r$ proche de $r$ ; prolongée par $u(r) = 0$, elle est dérivable en $r$ avec $u'(r) = \frac1p\neq0$ : $r$ est une racine simple de $u$. La méthode de Newton appliquée à $u$,</p>$$x_{n+1} = x_n-\frac{u(x_n)}{u'(x_n)} = x_n-\frac{f(x_n)f'(x_n)}{f'(x_n)^2-f(x_n)f''(x_n)},$$<p>converge donc quadratiquement (sous réserve de régularité suffisante de $u$, par exemple $f\in\mathcal C^{p+2}$), sans connaître $p$. Le prix : il faut calculer $f''$.</p>`)
  ],
  piege: R`On ne peut pas appliquer la Partie I à $u = \frac f{f'}$ sans vérifier qu'elle est $\mathcal C^2$ près de $r$ : c'est vrai si $f$ est assez régulière, mais c'est à vérifier.`,
  methode: R`Une racine de multiplicité $p$ ralentit Newton (rapport $1-\frac1p$) ; corriger par $x-p\frac f{f'}$, ou appliquer Newton à $\frac f{f'}$.`
}
]);
})();

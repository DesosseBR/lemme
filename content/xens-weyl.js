/* Commando X-ENS · Aller plus loin · Sujet « Critère de Weyl ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 9, kind: "probleme", qnav: true, side: true, level: 4, plus: "weyl",
  sujet: "Équirépartition modulo 1 et critère de Weyl",
  sujetDesc: "Une suite réelle est équirépartie modulo 1 si la proportion de ses parties fractionnaires dans tout intervalle [a, b] ⊂ [0, 1[ tend vers b − a. On montre que c'est équivalent à la convergence des moyennes (1/N)Σf(u_n) vers ∫f pour toute f continue 1-périodique, puis au critère de Weyl : (1/N)Σe^{2iπku_n} → 0 pour tout k ≠ 0. Applications : (nα) pour α irrationnel, premier chiffre des puissances de 2 (loi de Benford)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "wy-fejer": { t: "Fejér (Weierstrass trigonométrique)", b: R`$$f\in\mathcal C(\mathbb R,\mathbb C),\ 1\text{-périodique}\ \Longrightarrow\ \forall\varepsilon>0,\ \exists T = \sum_{|k|\leqslant d}c_ke^{2i\pi kx},\quad\|f-T\|_\infty\leqslant\varepsilon.$$` },
  "wy-esc": { t: "Fonctions en escalier", b: R`$$f\in\mathcal C([0,1])\ \Longrightarrow\ \forall\varepsilon>0,\ \exists\varphi\text{ en escalier},\ \|f-\varphi\|_\infty\leqslant\varepsilon.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Soit $u = (u_n)_{n\geqslant1}$ une suite réelle. On note $\{x\} = x-\lfloor x\rfloor$ et, pour $[a,b]\subset[0,1[$, $X_N(a,b) = \frac1N\#\{n\leqslant N : \{u_n\}\in[a,b]\}$. La suite est <b>équirépartie modulo 1</b> si $X_N(a,b)\to b-a$ pour tout $[a,b]\subset[0,1[$. On veut montrer l'équivalence de :</p><p>(i) $u$ est équirépartie modulo $1$ ;<br>(ii) pour toute $f : \mathbb R\to\mathbb C$ continue $1$-périodique, $\frac1N\sum_{n=1}^Nf(u_n)\to\int_0^1f$ ;<br>(iii) (<b>critère de Weyl</b>) pour tout $k\in\mathbb Z^*$, $\frac1N\sum_{n=1}^Ne^{2i\pi ku_n}\to0$.</p>`;

/* Figures */
const figHist = (() => { const N = 2000, B = 20, h = Array(B).fill(0); for (let n = 1; n <= N; n++) { const v = (n * Math.SQRT2) % 1; h[Math.floor(v * B)]++; }
  return GRAPH({ w: 440, h: 220, x: [0, 1], y: [0, 1.6], xt: [0.25, 0.5, 0.75, 1], xtl: ["0,25", "0,5", "0,75", "1"], yt: [0.5, 1, 1.5], ytl: ["0,5", "1", "1,5"], xl: "",
    curves: [{ f: () => 1, c: "r", dash: true, lab: [0.02, 1.12, "densité uniforme"] }],
    extra: (X, Y) => h.map((c, i) => { const v = c * B / N; return `<rect x="${X(i / B).toFixed(1)}" y="${Y(v).toFixed(1)}" width="${(X(1 / B) - X(0) - 1).toFixed(1)}" height="${(Y(0) - Y(v)).toFixed(1)}" class="hb" style="opacity:.7"/>`; }).join("") },
    R`Histogramme des parties fractionnaires $\{n\sqrt2\}$ pour $n\leqslant2000$, en $20$ classes, normalisé en densité : toutes les classes ont à peu près la même proportion $\frac1{20}$. C'est l'équirépartition de $(n\alpha)$ pour $\alpha$ irrationnel (Q7).`, "Équirépartition de n√2"); })();
const figBenford = (() => { const c = Array(10).fill(0); let x = 1; const N = 1000; for (let n = 1; n <= N; n++) { x *= 2; while (x >= 10) x /= 10; c[Math.floor(x)]++; }
  return GRAPH({ w: 440, h: 220, x: [0.4, 9.6], y: [0, 0.34], xt: [1, 2, 3, 4, 5, 6, 7, 8, 9], yt: [0.1, 0.2, 0.3], ytl: ["0,1", "0,2", "0,3"], xl: "",
    curves: [], extra: (X, Y) => { let s = ""; for (let d = 1; d <= 9; d++) { const v = c[d] / N, w = Math.log10(1 + 1 / d); s += `<rect x="${(X(d) - 14).toFixed(1)}" y="${Y(v).toFixed(1)}" width="13" height="${(Y(0) - Y(v)).toFixed(1)}" class="hb" style="opacity:.8"/><rect x="${(X(d) + 1).toFixed(1)}" y="${Y(w).toFixed(1)}" width="13" height="${(Y(0) - Y(w)).toFixed(1)}" class="hr" style="opacity:.8"/>`; } return s + S(X(6.2), Y(0.3), "bleu : 2ⁿ, n ≤ 1000", "start", "sm b") + S(X(6.2), Y(0.27), "rouge : log₁₀(1 + 1/d)", "start", "sm r"); } },
    R`Fréquence du premier chiffre $d$ de $2^n$ pour $n\leqslant1000$ (bleu) et la loi de Benford $\log_{10}\big(1+\frac1d\big)$ (rouge) : environ $30\,\%$ des puissances de $2$ commencent par $1$, contre $4{,}6\,\%$ par $9$. Cela découle de l'équirépartition de $(n\log_{10}2)$ (Q8).`, "Loi de Benford"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "weyl-1", ...P, part: "Partie I", time: "30 min",
  title: "Intervalles et fonctions continues",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer (i) $\Rightarrow$ (ii) : d'abord pour le prolongement $1$-périodique d'une indicatrice d'intervalle de $[0,1[$, puis pour une fonction en escalier, puis pour $f$ continue.</li>
<li>Montrer (ii) $\Rightarrow$ (i). (Encadrer l'indicatrice périodisée $\chi$ de $[a,b]$ par deux fonctions continues $1$-périodiques $\psi\leqslant\chi\leqslant\varphi$ avec $\int(\varphi-\psi)\leqslant2\varepsilon$.)</li></ol>`,
  decode: { donnees: [R`Approximation uniforme par des fonctions en escalier.`], but: R`Passer des intervalles aux fonctions continues et retour.`, cles: {} },
  steps: [
    Q(1, "Des intervalles aux fonctions continues", R`<p>Pour $\chi$ l'indicatrice périodisée de $[a,b]$ : $\frac1N\sum\chi(u_n) = X_N(a,b)$. Puis $\|f-g\|_\infty\leqslant\varepsilon$ avec $g$ en escalier.</p>`, R`<p>Pour $\chi$ indicatrice périodisée de $[a,b]\subset[0,1[$, $\chi(u_n) = 1\iff\{u_n\}\in[a,b]$, donc $\frac1N\sum_{n\leqslant N}\chi(u_n) = X_N(a,b)\to b-a = \int_0^1\chi$. Par linéarité, (ii) vaut pour toute fonction en escalier périodisée (les intervalles ouverts ou semi-ouverts s'obtiennent aussi, par différence avec des points, qui sont des $[a,a]$ de mesure nulle).</p><p>Soit $f$ continue $1$-périodique et $\varepsilon>0$ ; il existe $g$ en escalier (périodisée) avec $\|f-g\|_\infty\leqslant\varepsilon$. Alors</p>$$\begin{aligned}\Big|\frac1N\sum f(u_n)-\int_0^1f\Big|&\leqslant\frac1N\sum|f(u_n)-g(u_n)|+\Big|\frac1N\sum g(u_n)-\int_0^1g\Big|+\int_0^1|g-f|\\&\leqslant3\varepsilon\end{aligned}$$<p>pour $N$ assez grand. D'où (ii).</p>`, ["wy-esc"]),
    Q(2, "Des fonctions continues aux intervalles", R`<p>$\varphi$ : vaut $1$ sur $[a,b]$, $0$ hors de $[a-\varepsilon,b+\varepsilon]$, affine entre. $\psi$ : vaut $1$ sur $[a+\varepsilon,b-\varepsilon]$, $0$ hors de $[a,b]$.</p>`, R`<p>Soit $\varepsilon>0$ petit et $\varphi,\psi$ continues $1$-périodiques, affines par morceaux, avec $\psi\leqslant\chi\leqslant\varphi$, $\int_0^1\varphi\leqslant b-a+2\varepsilon$ et $\int_0^1\psi\geqslant b-a-2\varepsilon$ (trapèzes qui débordent ou rentrent de $\varepsilon$ ; si $b-a\lt2\varepsilon$, on prend $\psi = 0$). Alors</p>$$\frac1N\sum\psi(u_n)\leqslant X_N(a,b)\leqslant\frac1N\sum\varphi(u_n).$$<p>Par (ii), les deux bornes tendent vers $\int\psi$ et $\int\varphi$, donc $b-a-2\varepsilon\leqslant\liminf X_N\leqslant\limsup X_N\leqslant b-a+2\varepsilon$. Comme $\varepsilon$ est arbitraire, $X_N(a,b)\to b-a$.</p>`)
  ],
  piege: R`On ne peut pas appliquer (ii) directement à une indicatrice : elle n'est pas continue. L'encadrement par deux fonctions continues proches en intégrale contourne le problème.`,
  methode: R`Pour passer de fonctions régulières à des indicatrices (ou l'inverse) : approximation uniforme d'un côté, encadrement par des fonctions continues de l'autre.`
},

/* ===================== Partie II ===================== */
{ id: "weyl-2", ...P, part: "Partie II", time: "20 min",
  title: "Le critère de Weyl",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="3">
<li>Montrer (ii) $\Rightarrow$ (iii).</li>
<li>Montrer (iii) $\Rightarrow$ (ii) : d'abord pour un polynôme trigonométrique, puis pour $f$ continue $1$-périodique.</li></ol>`,
  decode: { donnees: [R`Fejér.`], but: R`Tester l'équirépartition sur les seules exponentielles.`, cles: {} },
  steps: [
    Q(3, "Sens direct", R`<p>$e_k(x) = e^{2i\pi kx}$ est continue $1$-périodique, d'intégrale nulle si $k\neq0$.</p>`, R`<p>Pour $k\neq0$, $e_k : x\mapsto e^{2i\pi kx}$ est continue et $1$-périodique, et $\int_0^1e_k = \Big[\frac{e^{2i\pi kx}}{2i\pi k}\Big]_0^1 = 0$. Par (ii), $\frac1N\sum e_k(u_n)\to0$.</p>`),
    Q(4, "Sens réciproque", R`<p>Pour $T = \sum_{|k|\leqslant d}c_ke_k$ : $\frac1N\sum T(u_n)\to c_0 = \int T$. Puis approximation uniforme.</p>`, R`<p>Pour $T = \sum_{|k|\leqslant d}c_ke_k$, par linéarité et (iii), $\frac1N\sum T(u_n)\to c_0$ (le terme $k = 0$ vaut $c_0$ pour tout $N$), et $\int_0^1T = c_0$. Soit $f$ continue $1$-périodique et $\varepsilon>0$ : par Fejér, $\|f-T\|_\infty\leqslant\varepsilon$ pour un polynôme trigonométrique $T$. Le même découpage en trois termes qu'en Q1 donne $\big|\frac1N\sum f(u_n)-\int f\big|\leqslant3\varepsilon$ pour $N$ grand.</p><div class="sbox"><p>$u$ est équirépartie modulo $1$ $\iff$ $\frac1N\sum_{n\leqslant N}e^{2i\pi ku_n}\to0$ pour tout $k\neq0$.</p></div>`, ["wy-fejer"])
  ],
  piege: R`Le critère de Weyl ne concerne que les fréquences entières $k$ : c'est la périodicité $1$ qui le veut. Pour l'équirépartition modulo $L$, on prendrait $e^{2i\pi ku_n/L}$.`,
  methode: R`Critère de Weyl : réduire une question de répartition à des sommes d'exponentielles, souvent calculables (sommes géométriques) ou majorables.`
},

/* ===================== Partie III ===================== */
{ id: "weyl-3", ...P, part: "Partie III", time: "35 min",
  title: "Applications",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="5">
<li>Montrer qu'une suite équirépartie modulo $1$ a des parties fractionnaires denses dans $[0,1]$.</li>
<li>Soit $\alpha = \frac pq$ rationnel ($q\geqslant1$). Montrer que $(n\alpha)$ n'est pas équirépartie.</li>
<li>Soit $\alpha$ irrationnel. Montrer que $(n\alpha)$ est équirépartie modulo $1$.</li>
<li>(<b>Benford</b>) Montrer que la proportion des $n\leqslant N$ tels que $2^n$ s'écrive en base $10$ avec le premier chiffre $d$ tend vers $\log_{10}\big(1+\frac1d\big)$.</li></ol>`,
  decode: { donnees: [R`Critère de Weyl.`], but: R`Étudier des suites classiques.`, cles: {} },
  steps: [
    Q(5, "Densité", R`<p>Si $\{u_n\}$ évitait $]a,b[$, alors $X_N(a',b') = 0$ pour $[a',b']\subset]a,b[$.</p>`, R`<p>Si $\{u_n\}$ n'était pas dense, il existerait $[a,b]\subset[0,1[$ avec $a\lt b$ ne contenant aucun $\{u_n\}$ ; alors $X_N(a,b) = 0\not\to b-a>0$. Contradiction. (La réciproque est fausse : $\{\log_{10}n\}$ est dense mais pas équirépartie.)</p>`),
    Q(6, "Le cas rationnel", R`<p>$\{n\frac pq\}$ ne prend que les valeurs $\frac jq$.</p>`, R`<p>$\{n\alpha\}\in\{0,\frac1q,\dots,\frac{q-1}q\}$, ensemble fini. Pour un intervalle $[a,b]$ ne contenant aucun $\frac jq$ (avec $a\lt b$), $X_N(a,b) = 0\not\to b-a$. Ou par Weyl : pour $k = q$, $e^{2i\pi qn\alpha} = e^{2i\pi np} = 1$, et la moyenne vaut $1\not\to0$.</p>`),
    Q(7, "Le cas irrationnel", R`<p>Somme géométrique de raison $z = e^{2i\pi k\alpha}\neq1$.</p>`, R`<p>Pour $k\neq0$, $z = e^{2i\pi k\alpha}\neq1$ car $k\alpha\notin\mathbb Z$ ($\alpha$ irrationnel). Alors</p>$$\Big|\frac1N\sum_{n=1}^Nz^n\Big| = \frac1N\Big|z\frac{1-z^N}{1-z}\Big|\leqslant\frac2{N|1-z|}\xrightarrow[N\to\infty]{}0.$$<p>Par le critère de Weyl, $(n\alpha)$ est équirépartie modulo $1$. (Le livre énonce « si et seulement si $\gamma\in\mathbb Q$ » : c'est $\gamma\notin\mathbb Q$.)</p>${figHist}`),
    Q(8, "Loi de Benford", R`<p>$2^n$ commence par $d$ $\iff$ $d\cdot10^m\leqslant2^n\lt(d+1)10^m$ $\iff$ $\{n\log_{10}2\}\in[\log_{10}d,\log_{10}(d+1)[$.</p>`, R`<p>$2^n$ a pour premier chiffre $d$ si et seulement s'il existe $m$ avec $d\cdot10^m\leqslant2^n\lt(d+1)10^m$, soit, en prenant $\log_{10}$, $\log_{10}d\leqslant n\log_{10}2-m\lt\log_{10}(d+1)$, c'est-à-dire $\{n\log_{10}2\}\in[\log_{10}d,\log_{10}(d+1)[$. Or $\log_{10}2$ est irrationnel : si $\log_{10}2 = \frac pq$, alors $2^q = 10^p$, impossible (facteur $5$) pour $p,q\geqslant1$. Par Q7 (et Q2 pour un intervalle semi-ouvert), la proportion tend vers $\log_{10}(d+1)-\log_{10}d = \log_{10}\big(1+\frac1d\big)$ : $30{,}1\,\%$ pour $d = 1$, $17{,}6\,\%$ pour $d = 2$, $4{,}6\,\%$ pour $d = 9$.</p>${figBenford}`)
  ],
  piege: R`L'équirépartition dépend de l'ordre des termes : c'est une propriété des moyennes de Cesàro, pas de l'ensemble des valeurs.`,
  methode: R`Pour $(n\alpha)$ et plus généralement les suites polynomiales : le critère de Weyl ramène tout à des sommes géométriques (ou, pour $n^2\alpha$, à l'inégalité de van der Corput).`
}
]);
})();

/* Commando X-ENS · Aller plus loin · Sujet « Théorème de Frobenius-Zolotarev ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 5, plus: "zol",
  sujet: "Le théorème de Frobenius-Zolotarev",
  sujetDesc: "Un automorphisme u d'un 𝔽_p-espace vectoriel V de dimension finie permute les pⁿ éléments de V : sa signature vaut le symbole de Legendre de det u. On le prouve en montrant que les dilatations engendrent GL(V) dès que le corps a au moins trois éléments, puis en comptant les orbites d'une dilatation. Application : 2 est un carré modulo p si et seulement si p ≡ ±1 (mod 8)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "zo-leg": { t: "Symbole de Legendre", b: R`<p>Pour $p$ premier impair et $a\in\mathbb F_p^*$, $\big(\frac ap\big) = 1$ si $a$ est un carré, $-1$ sinon. Critère d'Euler : $\big(\frac ap\big) = a^{\frac{p-1}2}$ dans $\mathbb F_p$ ; c'est un morphisme $\mathbb F_p^*\to\{\pm1\}$, et il y a $\frac{p-1}2$ carrés dans $\mathbb F_p^*$.</p>` },
  "zo-cyc": { t: "Signature et cycles", b: R`<p>La signature est un morphisme $\mathfrak S(E)\to\{\pm1\}$. Si une permutation se décompose en cycles de longueurs $\ell_1,\dots,\ell_r$ (points fixes compris), sa signature est $\prod(-1)^{\ell_i-1}$ : chaque cycle de longueur paire compte $-1$.</p>` },
  "zo-gen": { t: "Générateurs de GL(E) (admis)", b: R`<p>$GL(E)$ est engendré par les transvections (endomorphismes $u\neq\operatorname{Id}$ fixant un hyperplan $H$ point par point, de déterminant $1$) et les dilatations. Le groupe $\mathbb F_q^*$ est cyclique.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $p$ est un nombre premier impair, $\mathbb F_p = \mathbb Z/p\mathbb Z$, $V$ un $\mathbb F_p$-espace vectoriel de dimension $n\geqslant1$, donc $|V| = p^n$. Tout $u\in GL(V)$ est une permutation de l'ensemble $V$, de signature $\varepsilon(u)$. Une <b>dilatation</b> de base l'hyperplan $H$, de direction une droite $G$ supplémentaire, de rapport $\lambda\in K^*\setminus\{1\}$, est l'endomorphisme $x+y\mapsto x+\lambda y$ ($x\in H$, $y\in G$). On veut montrer le <b>théorème de Frobenius-Zolotarev</b> : $\varepsilon(u) = \Big(\dfrac{\det u}p\Big)$.</p>`;

/* Figure : x ↦ 2x sur F_11 */
const figCyc = (() => {
  const n = 11, cx = 160, cy = 150, r = 115, pt = k => [cx + r * Math.sin(2 * Math.PI * k / n), cy - r * Math.cos(2 * Math.PI * k / n)];
  let b = `<circle cx="${cx}" cy="${cy}" r="${r}" class="thin"/>`;
  for (let k = 1; k < n; k++) { const [x1, y1] = pt(k), [x2, y2] = pt((2 * k) % n); const a = Math.atan2(y2 - y1, x2 - x1), ex = x2 - 10 * Math.cos(a), ey = y2 - 10 * Math.sin(a); b += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" class="vb" style="stroke-width:1.3"/><polygon points="${ex + 6 * Math.cos(a + 2.7)},${ey + 6 * Math.sin(a + 2.7)} ${x2 - 8 * Math.cos(a)},${y2 - 8 * Math.sin(a)} ${ex + 6 * Math.cos(a - 2.7)},${ey + 6 * Math.sin(a - 2.7)}" class="hb"/>`; }
  for (let k = 0; k < n; k++) { const [x, y] = pt(k); b += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="11" style="fill:var(--bg);stroke:var(--ink)"/>` + S(x, y + 4.5, String(k), "middle", "it"); }
  return FIG(320, 300, b, R`La permutation $x\mapsto2x$ de $\mathbb F_{11}$ : $0$ est fixe, et les $10$ autres éléments forment un seul cycle ($2$ engendre $\mathbb F_{11}^*$). Un cycle de longueur paire : signature $-1 = \big(\frac2{11}\big)$, et en effet $11\equiv3\pmod8$.`, "x ↦ 2x sur F11");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "zol-1", ...P, part: "Partie I", time: "30 min",
  title: "Le lemme de Zolotarev en dimension 1",
  enonce: PRE + R`<p><b>Partie I.</b> Ici $V = \mathbb F_p$ ($n = 1$) et $u = m_a : x\mapsto ax$, $a\in\mathbb F_p^*$.</p><ol start="1">
<li>Soit $d$ l'ordre de $a$ dans $\mathbb F_p^*$. Montrer que $m_a$ fixe $0$ et que ses autres cycles ont tous la longueur $d$. En déduire $\varepsilon(m_a) = (-1)^{\frac{p-1}d(d-1)}$.</li>
<li>Montrer que $\varepsilon(m_a) = -1$ si $a$ engendre $\mathbb F_p^*$, et qu'un générateur n'est pas un carré.</li>
<li>Conclure que $\varepsilon(m_a) = \big(\frac ap\big)$ pour tout $a$ (lemme de Zolotarev). Vérifier sur $p = 7$, $a = 2$ et $a = 3$.</li></ol>`,
  decode: { donnees: [R`$\mathbb F_p^*$ est cyclique d'ordre $p-1$.`], but: R`Calculer une signature par les longueurs de cycles, et comparer deux morphismes vers $\{\pm1\}$ sur un générateur.`, cles: {} },
  steps: [
    Q(1, "Les cycles de x ↦ ax", R`<p>Le cycle de $x\neq0$ est $\{x,ax,a^2x,\dots\}$, de longueur l'ordre de $a$.</p>`, R`<p>$m_a(0) = 0$. Pour $x\neq0$, $m_a^k(x) = a^kx = x\iff a^k = 1\iff d\mid k$ : le cycle de $x$ a exactement $d$ éléments. Les $p-1$ éléments non nuls se répartissent en $\frac{p-1}d$ cycles de longueur $d$, d'où</p>$$\varepsilon(m_a) = \big((-1)^{d-1}\big)^{\frac{p-1}d} = (-1)^{\frac{p-1}d(d-1)}.$$`, ["zo-cyc"]),
    Q(2, "Le cas d'un générateur", R`<p>$d = p-1$ pair. Si $a = b^2$, alors $a^{\frac{p-1}2} = b^{p-1} = 1$.</p>`, R`<p>Si $a$ engendre $\mathbb F_p^*$, $d = p-1$ est pair et il y a un seul cycle non trivial, de longueur paire : $\varepsilon(m_a) = -1$. Si $a = b^2$, alors $a^{\frac{p-1}2} = b^{p-1} = 1$ : l'ordre de $a$ serait $\leqslant\frac{p-1}2$. Donc un générateur n'est pas un carré : $\big(\frac ap\big) = -1$.</p>`, ["zo-leg"]),
    Q(3, "Le lemme de Zolotarev", R`<p>$a\mapsto\varepsilon(m_a)$ et $a\mapsto\big(\frac ap\big)$ sont deux morphismes qui coïncident sur un générateur.</p>`, R`<p>$m_{ab} = m_a\circ m_b$, donc $a\mapsto\varepsilon(m_a)$ est un morphisme $\mathbb F_p^*\to\{\pm1\}$, comme $a\mapsto\big(\frac ap\big)$. Ils coïncident sur un générateur $g$ (Q2), donc partout :</p><div class="sbox">$$\varepsilon(m_a) = \Big(\frac ap\Big).$$</div><p>$p = 7$ : $2$ est d'ordre $3$, $m_2 = (1\,2\,4)(3\,6\,5)$, deux $3$-cycles, $\varepsilon = 1$ ; et $2 = 3^2 = 9$ mod $7$ est un carré. ✓ $3$ est d'ordre $6$ : un $6$-cycle, $\varepsilon = -1$ ; les carrés mod $7$ sont $1,2,4$, et $3$ n'en est pas un. ✓</p>`, ["zo-leg"])
  ],
  piege: R`Deux morphismes vers $\{\pm1\}$ qui coïncident sur un <b>générateur</b> sont égaux ; coïncider sur un élément quelconque ne suffit pas.`,
  methode: R`Signature d'une permutation « algébrique » : décomposer en cycles grâce à la structure (ici des orbites sous un groupe cyclique), puis compter les cycles de longueur paire.`
},

/* ===================== Partie II ===================== */
{ id: "zol-2", ...P, part: "Partie II", time: "35 min",
  title: "Les dilatations engendrent GL(V)",
  enonce: PRE + R`<p><b>Partie II.</b> Dans cette partie, $K$ est un corps quelconque et $E$ un $K$-espace de dimension $n$.</p><ol start="4">
<li>Soit $u\in GL(E)$ fixant point par point un hyperplan $H$, avec $\det u = \lambda\neq1$. Montrer que $u$ est une dilatation de base $H$ et de rapport $\lambda$.</li>
<li>On suppose $|K|\geqslant3$. Soit $\tau$ une transvection d'hyperplan $H$, et $v$ une dilatation de base $H$ et de rapport $\lambda\neq1$. Montrer que $\tau\circ v$ est une dilatation, puis que $\tau$ est produit de deux dilatations. En déduire que les dilatations engendrent $GL(E)$.</li>
<li>Pourquoi l'hypothèse $|K|\geqslant3$ est-elle nécessaire ?</li></ol>`,
  decode: { donnees: [R`$GL(E)$ est engendré par transvections et dilatations.`], but: R`Écrire chaque transvection comme produit de deux dilatations.`, cles: {} },
  steps: [
    Q(4, "Caractérisation des dilatations", R`<p>$\chi_u = (X-1)^{n-1}(X-\lambda)$ : $\lambda$ est valeur propre, et un vecteur propre associé n'est pas dans $H$.</p>`, R`<p>Dans une base $(e_1,\dots,e_{n-1})$ de $H$ complétée par $e_n$, la matrice de $u$ a pour $n-1$ premières colonnes celles de l'identité ; son déterminant est le coefficient $(n,n)$, donc vaut $\lambda$, et $\chi_u = (X-1)^{n-1}(X-\lambda)$. Comme $\lambda\neq1$, il existe $y\neq0$ avec $u(y) = \lambda y$, et $y\notin H$ (sur $H$, $u = \operatorname{Id}$). Avec $G = Ky$, supplémentaire de $H$ :</p>$$u(x+ty) = x+\lambda ty\qquad(x\in H,\ t\in K).$$<p>$u$ est la dilatation de base $H$, de direction $G$, de rapport $\lambda$.</p>`),
    Q(5, "Une transvection = deux dilatations", R`<p>$\tau\circ v$ fixe $H$ et a pour déterminant $\lambda\neq1$ ; $v^{-1}$ est la dilatation de rapport $\lambda^{-1}$.</p>`, R`<p>$|K|\geqslant3$ fournit $\lambda\in K^*\setminus\{1\}$, donc une dilatation $v$ de base $H$ et de rapport $\lambda$. Alors $w = \tau\circ v$ fixe $H$ point par point et $\det w = 1\cdot\lambda\neq1$ : par Q4, $w$ est une dilatation. De même $v^{-1}$ fixe $H$ et $\det v^{-1} = \lambda^{-1}\neq1$ : dilatation. Donc</p><div class="sbox">$$\tau = w\circ v^{-1}\ \text{est produit de deux dilatations.}$$</div><p>Comme $GL(E)$ est engendré par transvections et dilatations (rappel), il est engendré par les dilatations seules.</p>`, ["zo-gen"]),
    Q(6, "Le cas de 𝔽₂", R`<p>Sur $\mathbb F_2$, quel rapport $\lambda\neq1$ ?</p>`, R`<p>Sur $\mathbb F_2$, $K^* = \{1\}$ : il n'y a aucune dilatation (rapport $\neq1$). Le groupe engendré est trivial, alors que $GL_2(\mathbb F_2)\simeq\mathfrak S_3$ a $6$ éléments. Ici $p$ est impair, donc $|\mathbb F_p|\geqslant3$ et le résultat s'applique.</p>`)
  ],
  piege: R`Une transvection a déterminant $1$ : ce n'est jamais une dilatation. Il faut la « corriger » par une dilatation de même hyperplan pour obtenir un déterminant $\neq1$.`,
  methode: R`Réduire un théorème sur $GL(E)$ à une famille génératrice : si deux morphismes coïncident sur les générateurs, ils sont égaux.`
},

/* ===================== Partie III ===================== */
{ id: "zol-3", ...P, part: "Partie III", time: "35 min",
  title: "Le théorème et la loi complémentaire",
  enonce: PRE + R`<p><b>Partie III.</b> Soit $g$ un générateur de $\mathbb F_p^*$.</p><ol start="7">
<li>Montrer que toute dilatation de base $H$ et de direction $G$ est une puissance de la dilatation $f$ de mêmes base et direction, et de rapport $g$. Montrer que $\big(\frac{\det f}p\big) = -1$.</li>
<li>Décrire les orbites de $f$ agissant sur $V$, et montrer que $\varepsilon(f) = -1$.</li>
<li>Conclure : $\varepsilon(u) = \big(\frac{\det u}p\big)$ pour tout $u\in GL(V)$.</li>
<li>En comptant les inversions de $x\mapsto2x$ sur $\{0,\dots,p-1\}$, montrer que $\big(\frac2p\big) = (-1)^{\frac{p^2-1}8}$. Pour quels $p$ le nombre $2$ est-il un carré modulo $p$ ?</li></ol>`,
  decode: { donnees: [R`Partie II : les dilatations engendrent $GL(V)$ ; Partie I.`], but: R`Vérifier l'égalité de deux morphismes $GL(V)\to\{\pm1\}$ sur les dilatations.`, cles: {} },
  steps: [
    Q(7, "Réduction à une dilatation de rapport g", R`<p>$\lambda = g^k$, et $f^k(x+y) = x+g^ky$.</p>`, R`<p>Une dilatation de rapport $\lambda$ : $\lambda = g^k$ pour un $k$, et $f^k(x+y) = x+g^ky = x+\lambda y$. Les deux applications $u\mapsto\varepsilon(u)$ et $u\mapsto\big(\frac{\det u}p\big)$ sont des morphismes $GL(V)\to\{\pm1\}$ (composés de morphismes). Par la Partie II, il suffit de les comparer sur les dilatations, donc sur les $f$ de rapport $g$. Or $\det f = g$ et $\big(\frac gp\big) = -1$ (Q2).</p>`),
    Q(8, "Signature de la dilatation", R`<p>Orbites : les points de $H$ sont fixes ; si $y\neq0$, l'orbite de $x+y$ est $\{x+g^ky\}$, de cardinal $p-1$.</p>`, R`<p>Les points de $H$ sont fixes ($p^{n-1}$ orbites de cardinal $1$). Pour $x\in H$ et $y\in G\setminus\{0\}$ : $f^k(x+y) = x+g^ky$, et $x+g^ky = x+g^jy\iff g^k = g^j\iff k\equiv j\pmod{p-1}$. L'orbite a exactement $p-1$ éléments. Ces orbites recouvrent les $p^{n-1}(p-1)$ points hors de $H$ : il y en a $p^{n-1}$, chacune de longueur paire $p-1$. Donc</p>$$\varepsilon(f) = (-1)^{p^{n-1}} = -1\qquad(p^{n-1}\ \text{impair}).$$`, ["zo-cyc"]),
    Q(9, "Le théorème", R`<p>Deux morphismes égaux sur une partie génératrice.</p>`, R`<p>Par Q7 et Q8, $\varepsilon(f) = -1 = \big(\frac{\det f}p\big)$ pour la dilatation $f$ de rapport $g$, donc pour toutes ses puissances, donc pour toutes les dilatations. Elles engendrent $GL(V)$ (Partie II), et les deux applications sont des morphismes :</p><div class="sbox">$$\forall u\in GL(V),\qquad\varepsilon(u) = \Big(\frac{\det u}p\Big).$$</div>`),
    Q(10, "2 est-il un carré ?", R`<p>Pour $j\leqslant\frac{p-1}2$, $2j$ est inversé avec les $j$ images impaires $1,3,\dots,2j-1$ placées après lui.</p>`, R`<p>Par le théorème avec $n = 1$ : $\big(\frac2p\big) = \varepsilon(m_2)$. On compte les inversions de la suite $m_2(0),\dots,m_2(p-1)$ :</p>$$0,\ 2,\ 4,\ \dots,\ p-1,\ 1,\ 3,\ \dots,\ p-2.$$<p>Les termes pairs $2j$ ($1\leqslant j\leqslant\frac{p-1}2$) sont suivis des impairs $1,3,\dots$, et $2j$ forme une inversion exactement avec $1,3,\dots,2j-1$ : $j$ inversions. Les autres paires sont dans l'ordre. Total :</p>$$\sum_{j=1}^{\frac{p-1}2}j = \frac{\frac{p-1}2\cdot\frac{p+1}2}2 = \frac{p^2-1}8.$$<div class="sbox">$$\Big(\frac2p\Big) = (-1)^{\frac{p^2-1}8}.$$</div><p>$\frac{p^2-1}8$ est pair si et seulement si $p\equiv\pm1\pmod8$ (pour $p = 8k\pm1$ : $\frac{p^2-1}8 = 8k^2\pm2k$ ; pour $p = 8k\pm3$ : $8k^2\pm6k+1$). Donc $2$ est un carré modulo $p$ si et seulement si $p\equiv\pm1\pmod8$ : par exemple $p = 7$ ($3^2\equiv2$), $17$ ($6^2 = 36\equiv2$).</p>${figCyc}`)
  ],
  piege: R`Ne pas oublier que $p^{n-1}$ est impair : c'est ce qui donne $\varepsilon(f) = -1$. Pour $p = 2$, l'énoncé n'aurait pas de sens (le symbole de Legendre n'est pas défini, et toutes les dilatations sont triviales).`,
  methode: R`Égalité de deux morphismes de groupes : la vérifier sur une famille génératrice bien choisie, ici les dilatations, dont les orbites se décrivent à la main.`
}
]);
})();

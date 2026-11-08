/* Commando X-ENS · Aller plus loin · Sujet « Loi de réciprocité quadratique ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 5, plus: "rq",
  sujet: "La loi de réciprocité quadratique par un comptage",
  sujetDesc: "Pour p, q premiers impairs distincts : (p/q)(q/p) = (−1)^{(p−1)(q−1)/4}. On compte de deux façons, modulo p, les points de la sphère x₀² + … + x_{p−1}² = 1 dans (𝔽_q)^p : par l'action de ℤ/pℤ qui permute circulairement les coordonnées (seuls les points constants comptent), et en remplaçant la forme quadratique par une forme équivalente hyperbolique dont on dénombre les solutions." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "rq-euler": { t: "Critère d'Euler", b: R`<p>Pour $p$ premier impair et $a\in\mathbb F_p^*$ : $a^{\frac{p-1}2} = \big(\frac ap\big)$ dans $\mathbb F_p$, où $\big(\frac ap\big) = 1$ si $a$ est un carré de $\mathbb F_p^*$, $-1$ sinon. Le symbole de Legendre est multiplicatif, et $\mathbb F_p^*$ contient $\frac{p-1}2$ carrés.</p>` },
  "rq-orb": { t: "Orbites et points fixes", b: R`<p>Si un groupe $G$ d'ordre $p$ premier agit sur un ensemble fini $B$, chaque orbite a $1$ ou $p$ éléments (elle a $\frac{|G|}{|\mathrm{Stab}|}$ éléments), donc $|B|\equiv|B^G|\pmod p$, où $B^G$ est l'ensemble des points fixes.</p>` },
  "rq-class": { t: "Formes quadratiques sur 𝔽_q", b: R`<p>(Admis.) Sur $\mathbb F_q$ ($q$ impair), deux formes quadratiques non dégénérées de même dimension sont équivalentes si et seulement si leurs discriminants (déterminants des matrices) ont le même caractère quadratique, c'est-à-dire diffèrent d'un facteur carré. Des formes équivalentes ont le même nombre de solutions de $Q(x) = 1$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $p$ et $q$ sont deux nombres premiers impairs distincts. On note $\big(\frac ap\big)$ le symbole de Legendre. On veut démontrer la <b>loi de réciprocité quadratique</b> :</p>$$\Big(\frac pq\Big)\Big(\frac qp\Big) = (-1)^{\frac{p-1}2\cdot\frac{q-1}2}.$$<p>On pose $B = \{(x_0,\dots,x_{p-1})\in\mathbb F_q^{\,p} : x_0^2+\dots+x_{p-1}^2 = 1\}$ et $d = \frac{p-1}2$.</p>`;

/* Figure : table des symboles de Legendre */
const figTab = (() => { const pr = [3, 5, 7, 11, 13, 17, 19, 23], c = 36, o = 70; let b = "";
  const leg = (a, p) => { let r = 1, e = (p - 1) / 2, x = a % p; for (let k = 0; k < e; k++) r = (r * x) % p; return r === 1 ? 1 : -1; };
  pr.forEach((p, i) => { b += S(o + c * i + c / 2, o - 10, String(p), "middle", "sm") + S(o - 10, o + c * i + c / 2 + 4, String(p), "end", "sm"); });
  b += S(o - 10, o - 10, "p \\ q", "end", "sm");
  pr.forEach((p, i) => pr.forEach((q, j) => { if (p === q) { b += `<rect x="${o + c * j}" y="${o + c * i}" width="${c - 3}" height="${c - 3}" rx="3" class="thin" style="fill:none"/>`; return; } const v = leg(p, q), anti = p % 4 === 3 && q % 4 === 3;
    b += `<rect x="${o + c * j}" y="${o + c * i}" width="${c - 3}" height="${c - 3}" rx="3" class="${v > 0 ? "hb" : "hr"}" style="opacity:${anti ? 0.95 : 0.45}"/>` + S(o + c * j + (c - 3) / 2, o + c * i + c / 2 + 3, v > 0 ? "+" : "−", "middle", "sm"); }));
  b += S(o + c * 8 + 14, o + 20, "case (p, q) : (p/q)", "start", "sm") + S(o + c * 8 + 14, o + 42, "bleu : +1, rouge : −1", "start", "sm") + S(o + c * 8 + 14, o + 64, "couleur foncée :", "start", "sm") + S(o + c * 8 + 14, o + 82, "p ≡ q ≡ 3 (mod 4)", "start", "sm");
  return FIG(560, 370, b, R`Symboles de Legendre $\big(\frac pq\big)$ pour les premiers impairs jusqu'à $23$ (ligne $p$, colonne $q$). La table est symétrique, sauf pour les couples où $p\equiv q\equiv3\pmod4$ (cases foncées) : là, $\big(\frac pq\big) = -\big(\frac qp\big)$. C'est exactement la loi de réciprocité.`, "Table des symboles de Legendre"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "rq-1", ...P, part: "Partie I", time: "25 min",
  title: "Préliminaires sur les carrés",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer le critère d'Euler : pour $a\in\mathbb F_p^*$, $a^{\frac{p-1}2} = \pm1$, et $a^{\frac{p-1}2} = 1$ si et seulement si $a$ est un carré.</li>
<li>Pour $a\in\mathbb F_q^*$, montrer que le nombre $|R(a)|$ de solutions de $ax^2 = 1$ dans $\mathbb F_q$ vaut $1+\big(\frac aq\big)$.</li>
<li>Montrer que $q^d\equiv\big(\frac qp\big)\pmod p$ et que $\big(\frac{-1}q\big) = (-1)^{\frac{q-1}2}$.</li></ol>`,
  decode: { donnees: [R`$\mathbb F_p^*$ est cyclique d'ordre $p-1$.`], but: R`Disposer du critère d'Euler et du comptage des solutions de $ax^2 = 1$.`, cles: {} },
  steps: [
    Q(1, "Critère d'Euler", R`<p>$y = a^{\frac{p-1}2}$ vérifie $y^2 = 1$. Les carrés sont racines de $X^{\frac{p-1}2}-1$, il y en a $\frac{p-1}2$.</p>`, R`<p>Par Lagrange, $a^{p-1} = 1$, donc $y = a^{\frac{p-1}2}$ vérifie $y^2 = 1$, soit $y = \pm1$ ($\mathbb F_p$ est un corps). Si $a = b^2$, $y = b^{p-1} = 1$. L'application $x\mapsto x^2$ sur $\mathbb F_p^*$ a pour noyau $\{\pm1\}$, donc son image (les carrés) a $\frac{p-1}2$ éléments, tous racines de $X^{\frac{p-1}2}-1$, qui en a au plus $\frac{p-1}2$ : ce sont exactement ses racines. Un non-carré vérifie donc $a^{\frac{p-1}2}\neq1$, soit $= -1$.</p>`, ["rq-euler"]),
    Q(2, "Solutions de ax² = 1", R`<p>Selon que $a$ est un carré ou non ; $a$ et $a^{-1}$ ont même caractère.</p>`, R`<p>$ax^2 = 1\iff x^2 = a^{-1}$. Si $a = b^2$, les solutions sont $\pm b^{-1}$, distinctes car $q$ est impair : $|R(a)| = 2 = 1+\big(\frac aq\big)$. Sinon $a^{-1}$ n'est pas un carré (sinon $a = (a^{-1})^{-1}$ en serait un) : $|R(a)| = 0 = 1+\big(\frac aq\big)$.</p>`),
    Q(3, "Deux conséquences", R`<p>Euler dans $\mathbb F_p$ pour $a = q$, et dans $\mathbb F_q$ pour $a = -1$.</p>`, R`<p>Par Euler dans $\mathbb F_p$ (et $q\not\equiv0$), $q^{\frac{p-1}2}\equiv\big(\frac qp\big)\pmod p$. Par Euler dans $\mathbb F_q$, $(-1)^{\frac{q-1}2} = \big(\frac{-1}q\big)$ dans $\mathbb F_q$, et comme les deux membres valent $\pm1$ et que $1\neq-1$ dans $\mathbb F_q$, l'égalité vaut dans $\mathbb Z$ : $-1$ est un carré modulo $q$ si et seulement si $q\equiv1\pmod4$. Plus généralement $\big(\frac{(-1)^d}q\big) = (-1)^{d\frac{q-1}2}$.</p>`)
  ],
  piege: R`Une égalité modulo $p$ entre deux nombres valant $\pm1$ est une égalité dans $\mathbb Z$, car $1\not\equiv-1\pmod p$ pour $p\geqslant3$. On s'en sert à la fin.`,
  methode: R`Symbole de Legendre : le calculer par le critère d'Euler $a^{\frac{p-1}2}\bmod p$.`
},

/* ===================== Partie II ===================== */
{ id: "rq-2", ...P, part: "Partie II", time: "20 min",
  title: "Premier comptage : par une action de groupe",
  enonce: PRE + R`<p><b>Partie II.</b> Le groupe $\mathbb Z/p\mathbb Z$ agit sur $B$ par permutation circulaire : $k\cdot(x_0,\dots,x_{p-1}) = (x_k,x_{k+1},\dots,x_{k+p-1})$, indices modulo $p$.</p><ol start="4">
<li>Vérifier que c'est une action sur $B$, et déterminer ses points fixes.</li>
<li>En déduire que $|B|\equiv1+\big(\frac pq\big)\pmod p$.</li></ol>`,
  decode: { donnees: [R`Q2.`], but: R`Réduire $|B|$ modulo $p$ aux points constants.`, cles: {} },
  steps: [
    Q(4, "L'action et ses points fixes", R`<p>La somme des carrés ne dépend pas de l'ordre. Un point fixé par $1$ a toutes ses coordonnées égales.</p>`, R`<p>Permuter les coordonnées ne change pas $\sum x_i^2$ : $B$ est stable. $0\cdot x = x$ et $k\cdot(l\cdot x) = (k+l)\cdot x$ : c'est une action. Un point fixe vérifie $1\cdot x = x$, soit $x_{i+1} = x_i$ pour tout $i$ : $x = (y,\dots,y)$ avec $py^2 = 1$ dans $\mathbb F_q$. Les points fixes sont en bijection avec $R(p)$, où $p$ est vu dans $\mathbb F_q^*$ ($p\neq q$).</p>`),
    Q(5, "Réduction modulo p", R`<p>Orbites de taille $1$ ou $p$.</p>`, R`<p>Par le rappel ($|\mathbb Z/p\mathbb Z| = p$ premier), $|B|\equiv|\text{points fixes}| = |R(p)|\pmod p$, et par Q2 :</p><div class="sbox">$$|B|\equiv1+\Big(\frac pq\Big)\pmod p.$$</div>`, ["rq-orb"])
  ],
  piege: R`$p$ est ici un élément de $\mathbb F_q$ : c'est $\big(\frac pq\big)$ qui apparaît, alors que le comptage se fait modulo $p$. C'est ce croisement des rôles qui produit la réciprocité.`,
  methode: R`Compter modulo un premier $p$ : faire agir un $p$-groupe et ne garder que les points fixes.`
},

/* ===================== Partie III ===================== */
{ id: "rq-3", ...P, part: "Partie III", time: "40 min",
  title: "Second comptage et conclusion",
  enonce: PRE + R`<p><b>Partie III.</b> Soit $a = (-1)^d$ et la forme quadratique sur $\mathbb F_q^{\,p}$ (coordonnées $(y_1,z_1,\dots,y_d,z_d,t)$) : $Q_2 = 2\sum_{i=1}^dy_iz_i+at^2$.</p><ol start="6">
<li>Montrer que $Q_1 = \sum x_i^2$ et $Q_2$ sont non dégénérées de même déterminant. En déduire que $|B| = |B'|$ où $B' = \{Q_2 = 1\}$.</li>
<li>Montrer que $|B'| = q^d\Big(q^d+\big(\frac aq\big)\Big)$. (Distinguer $y = 0$ et $y\neq0$.)</li>
<li>Conclure à la loi de réciprocité.</li>
<li>Applications : $3$ est-il un carré modulo $101$ ? Pour quels premiers $\ell\geqslant7$ le nombre $5$ est-il un carré modulo $\ell$ ?</li></ol>`,
  decode: { donnees: [R`Classification des formes quadratiques sur $\mathbb F_q$ (admise).`], but: R`Calculer $|B|$ exactement et comparer modulo $p$.`, cles: {} },
  steps: [
    Q(6, "Deux formes équivalentes", R`<p>Matrice de $Q_2$ : $d$ blocs $J = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ et $(a)$. $\det J = -1$.</p>`, R`<p>La matrice de $Q_1$ est $I_p$, de déterminant $1$. Celle de $Q_2$ est diagonale par blocs, avec $d$ blocs $J = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ (car $2y_iz_i = y_iz_i+z_iy_i$) et un bloc $(a)$ : son déterminant est $(-1)^d\cdot a = (-1)^{2d} = 1$. Les deux formes sont non dégénérées de même discriminant : par le rappel, elles sont équivalentes, $Q_2 = Q_1\circ\Phi$ pour un isomorphisme $\Phi$, qui envoie $B'$ bijectivement sur $B$.</p>`, ["rq-class"]),
    Q(7, "Comptage sur la forme hyperbolique", R`<p>Si $y = 0$ : $at^2 = 1$, $z$ quelconque. Si $y\neq0$ : pour $(y,t)$ fixés, l'équation en $z$ est affine non triviale.</p>`, R`<p><b>Cas $y_1 = \dots = y_d = 0$.</b> L'équation devient $at^2 = 1$ : $|R(a)| = 1+\big(\frac aq\big)$ choix de $t$ (Q2), et $q^d$ choix libres de $z$. Total $q^d\big(1+\big(\frac aq\big)\big)$.</p><p><b>Cas $y\neq0$.</b> Pour $y\neq0$ et $t$ fixés, $2\sum y_iz_i = 1-at^2$ est une équation affine en $z$, de partie linéaire non nulle : $q^{d-1}$ solutions. Il y a $q^d-1$ choix de $y$ et $q$ choix de $t$ : total $(q^d-1)\,q\,q^{d-1} = q^{2d}-q^d$.</p><p>En sommant :</p>$$|B'| = q^d+q^d\Big(\frac aq\Big)+q^{2d}-q^d = q^d\Big(q^d+\Big(\frac aq\Big)\Big).$$`),
    Q(8, "La loi de réciprocité", R`<p>Modulo $p$ : $q^{2d} = q^{p-1}\equiv1$ et $q^d\equiv\big(\frac qp\big)$ ; $\big(\frac aq\big) = (-1)^{d\frac{q-1}2}$.</p>`, R`<p>Par Q5, Q6, Q7 : $1+\big(\frac pq\big)\equiv q^{2d}+q^d\big(\frac aq\big)\pmod p$. Par Fermat $q^{2d} = q^{p-1}\equiv1$, et par Q3 $q^d\equiv\big(\frac qp\big)$ et $\big(\frac aq\big) = (-1)^{d\frac{q-1}2}$. Donc</p>$$\Big(\frac pq\Big)\equiv\Big(\frac qp\Big)(-1)^{\frac{p-1}2\cdot\frac{q-1}2}\pmod p.$$<p>Les deux membres valent $\pm1$ et $p\geqslant3$ : l'égalité vaut dans $\mathbb Z$. En multipliant par $\big(\frac qp\big)$ (dont le carré vaut $1$) :</p><div class="sbox">$$\Big(\frac pq\Big)\Big(\frac qp\Big) = (-1)^{\frac{p-1}2\cdot\frac{q-1}2}.$$</div><p>Autrement dit : $\big(\frac pq\big) = \big(\frac qp\big)$, sauf si $p\equiv q\equiv3\pmod4$, auquel cas $\big(\frac pq\big) = -\big(\frac qp\big)$.</p>${figTab}`),
    Q(9, "Applications", R`<p>$101\equiv1\pmod4$ ; $101\equiv2\pmod3$. Pour $5$ : $5\equiv1\pmod4$, donc $\big(\frac5\ell\big) = \big(\frac\ell5\big)$.</p>`, R`<p>$101\equiv1\pmod4$, donc $\big(\frac3{101}\big) = \big(\frac{101}3\big) = \big(\frac23\big) = -1$ ($2$ n'est pas un carré modulo $3$) : $3$ n'est pas un carré modulo $101$. (Vérification par Euler : $3^{50}\equiv-1\pmod{101}$.)</p><p>Comme $5\equiv1\pmod4$, $\big(\frac5\ell\big) = \big(\frac\ell5\big)$, et les carrés non nuls modulo $5$ sont $1$ et $4$. Donc $5$ est un carré modulo $\ell$ si et seulement si $\ell\equiv\pm1\pmod5$. Par exemple $5\equiv4^2\pmod{11}$, mais $5$ n'est pas un carré modulo $7$ ou $13$.</p>`)
  ],
  piege: R`Le comptage de Q7 se fait dans $\mathbb Z$ (c'est un vrai cardinal) ; c'est seulement ensuite qu'on le réduit modulo $p$.`,
  methode: R`Réciprocité par double comptage : un même cardinal, calculé par une action de $\mathbb Z/p\mathbb Z$ (fait apparaître $\big(\frac pq\big)$) et par une forme quadratique équivalente (fait apparaître $q^{\frac{p-1}2}\equiv\big(\frac qp\big)$).`
}
]);
})();

/* Commando X-ENS · Aller plus loin · Sujet « Polygones réguliers constructibles ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 5, plus: "poly",
  sujet: "Quels polygones réguliers sont constructibles ?",
  sujetDesc: "Avec le théorème de Wantzel (un nombre constructible à la règle et au compas a un degré qui est une puissance de 2), on montre que le p^a-gone régulier (p premier impair) n'est constructible que si a = 1 et p = 2^{2^k} + 1 est un premier de Fermat. Réciproquement, pour ces p, on construit une tour d'extensions quadratiques de ℚ(e^{2iπ/p}) grâce au groupe cyclique des automorphismes (périodes de Gauss). On traite le pentagone en détail et on conclut avec le théorème de Gauss-Wantzel." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "pg-wan": { t: "Théorème de Wantzel (admis)", b: R`$$z\text{ constructible}\iff\exists\,\mathbb Q = L_0\subset\dots\subset L_r,\ [L_{i+1}:L_i] = 2,\ z\in L_r\ \Longrightarrow\ [\mathbb Q(z):\mathbb Q] = 2^k.$$` },
  "pg-cyc": { t: "Polynômes cyclotomiques (admis)", b: R`$$\Phi_m\text{ irréductible},\quad\deg\Phi_m = \varphi(m),\quad\Phi_m = \pi_{e^{2i\pi/m}};\qquad\Phi_p = 1+X+\dots+X^{p-1}.$$` },
  "pg-tel": { t: "Base télescopique", b: R`<div class="sbox">$$L\subset M\subset N\ \text{corps},\ [N:L]\lt\infty\ \Longrightarrow\ [N:L] = [N:M]\,[M:L].$$</div>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Un nombre complexe est <b>constructible</b> s'il s'obtient à partir de $0$ et $1$ par une suite finie d'intersections de droites et de cercles construits à partir de points déjà obtenus (règle et compas). Le polygone régulier à $m$ côtés est constructible si et seulement si $\omega_m = e^{2i\pi/m}$ l'est. Pour une extension de corps $L\subset M$, $[M:L]$ est la dimension de $M$ comme $L$-espace vectoriel.</p>`;

/* Figure : pentagone régulier */
const figPent = (() => {
  const s = 120, cx = 170, cy = 150, X = x => (cx + s * x).toFixed(1), Y = y => (cy - s * y).toFixed(1);
  let b = `<circle cx="${cx}" cy="${cy}" r="${s}" class="thin"/><line x1="${X(-1.25)}" y1="${Y(0)}" x2="${X(1.25)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(-1.15)}" x2="${X(0)}" y2="${Y(1.15)}" class="ax"/>`;
  const pts = [0, 1, 2, 3, 4].map(k => [Math.cos(2 * Math.PI * k / 5), Math.sin(2 * Math.PI * k / 5)]);
  b += `<polygon points="${pts.map(([x, y]) => X(x) + "," + Y(y)).join(" ")}" class="vb" style="fill:none"/>`;
  const c = Math.cos(2 * Math.PI / 5);
  b += `<line x1="${X(c)}" y1="${Y(0)}" x2="${X(c)}" y2="${Y(pts[1][1])}" class="vr" style="stroke-width:1.6"/><line x1="${X(c)}" y1="${Y(0)}" x2="${X(c)}" y2="${Y(pts[4][1])}" class="vr" style="stroke-width:1.6"/>`;
  pts.forEach(([x, y], k) => { b += `<circle cx="${X(x)}" cy="${Y(y)}" r="4" class="pt"/>` + S(+X(x * 1.13), +Y(y * 1.13) + 4, ["1", "ω", "ω²", "ω³", "ω⁴"][k], "middle", "it"); });
  b += `<circle cx="${X(c)}" cy="${Y(0)}" r="4" class="ptr"/>` + S(+X(c) + 6, +Y(0) + 16, "(√5 − 1)/4", "start", "sm");
  return FIG(340, 300, b, R`Le pentagone régulier : $\omega+\omega^4 = 2\cos\frac{2\pi}5 = \frac{\sqrt5-1}2$. Le point $\cos\frac{2\pi}5$ se construit (racine carrée), puis la verticale en ce point coupe le cercle en $\omega$ et $\omega^4$.`, "Pentagone régulier");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "poly-1", ...P, part: "Partie I", time: "30 min",
  title: "Conditions nécessaires",
  enonce: PRE + R`<p><b>Partie I.</b> $p$ désigne un nombre premier impair et $a\geqslant1$.</p><ol start="1">
<li>Montrer que si le $p^a$-gone régulier est constructible, alors $a = 1$ et $p-1$ est une puissance de $2$.</li>
<li>Montrer que si $2^n+1$ est premier ($n\geqslant1$), alors $n$ est une puissance de $2$. (Si $n = mq$ avec $q$ impair $>1$, factoriser $X^q+1$.) On note $F_k = 2^{2^k}+1$ les nombres de Fermat.</li>
<li>En déduire que le $7$-gone, le $9$-gone et le $11$-gone ne sont pas constructibles. Vérifier que $641$ divise $F_5$ (on admet $641 = 5\cdot2^7+1 = 5^4+2^4$).</li></ol>`,
  decode: { donnees: [R`Wantzel ; degré de $\omega_m$ = $\varphi(m)$.`], but: R`Imposer que $\varphi(p^a)$ soit une puissance de $2$.`, cles: {} },
  steps: [
    Q(1, "Degré de ω", R`<p>$\deg\omega_{p^a} = \varphi(p^a) = p^{a-1}(p-1)$ doit être une puissance de $2$.</p>`, R`<p>$\omega_{p^a}$ a pour polynôme minimal $\Phi_{p^a}$, de degré $\varphi(p^a) = p^{a-1}(p-1)$. S'il est constructible, ce degré est une puissance de $2$ (Wantzel). Comme $p$ est impair, $p^{a-1}$ doit valoir $1$, donc $a = 1$, et $p-1$ est une puissance de $2$ : $p = 2^n+1$.</p>`, ["pg-wan", "pg-cyc"]),
    Q(2, "Premiers de Fermat", R`<p>$X^q+1 = (X+1)(X^{q-1}-X^{q-2}+\dots+1)$ pour $q$ impair.</p>`, R`<p>Si $n = mq$ avec $q>1$ impair : $2^n+1 = (2^m)^q+1$ est divisible par $2^m+1$, car $X+1$ divise $X^q+1$ ($q$ impair, $(-1)^q+1 = 0$). Et $1\lt2^m+1\lt2^n+1$ : $2^n+1$ n'est pas premier. Donc $n$ n'a pas de facteur impair : $n = 2^k$.</p><div class="sbox"><p>Les seuls $p$ premiers impairs possibles sont les premiers de Fermat $F_k = 2^{2^k}+1$ : $3, 5, 17, 257, 65537$ sont premiers.</p></div>`),
    Q(3, "Exemples négatifs", R`<p>$7-1 = 6$, $9 = 3^2$, $11-1 = 10$. Pour $F_5$ : $5\cdot2^7\equiv-1$ et $2^4\equiv-5^4\pmod{641}$.</p>`, R`<p>$7$ : $p-1 = 6$ n'est pas une puissance de $2$. $9 = 3^2$ : $a = 2$. $11$ : $10$ n'est pas une puissance de $2$. Aucun n'est constructible (le $9$-gone, c'est la trisection de l'angle $\frac{2\pi}3$ : impossible).</p><p>$F_5 = 2^{32}+1$. Modulo $641$ : $5\cdot2^7\equiv-1$, donc $5^4\cdot2^{28}\equiv1$ ; et $2^4\equiv-5^4$ (car $641 = 5^4+2^4$). Donc $2^{32} = 2^4\cdot2^{28}\equiv-5^4\cdot2^{28}\equiv-1$ : $641\mid F_5$ (Euler, 1732).</p>`)
  ],
  piege: R`« $p-1$ puissance de $2$ » ne suffit pas à conclure à la constructibilité : c'est la Partie III (tour d'extensions quadratiques) qui donne la réciproque.`,
  methode: R`Impossibilité de construction : calculer le degré algébrique du nombre à construire et vérifier s'il est une puissance de $2$.`
},

/* ===================== Partie II ===================== */
{ id: "poly-2", ...P, part: "Partie II", time: "35 min",
  title: "Le groupe des automorphismes de ℚ(ω)",
  enonce: PRE + R`<p><b>Partie II.</b> $p = 2^n+1$ est premier, $\omega = e^{2i\pi/p}$, $K = \mathbb Q(\omega)$, et $G$ le groupe des automorphismes de corps de $K$.</p><ol start="4">
<li>Montrer que $B = (\omega,\omega^2,\dots,\omega^{p-1})$ est une base de $K$ sur $\mathbb Q$ et que $[K:\mathbb Q] = 2^n$.</li>
<li>Montrer que tout $\sigma\in G$ vérifie $\sigma(\omega) = \omega^k$ pour un $k\in(\mathbb Z/p\mathbb Z)^*$, et que $\sigma\mapsto k$ est un morphisme injectif $G\to(\mathbb Z/p\mathbb Z)^*$.</li>
<li>Pour $k\in(\mathbb Z/p\mathbb Z)^*$, soit $\sigma_k$ l'application $\mathbb Q$-linéaire définie sur $B$ par $\sigma_k(\omega^i) = \omega^{ki}$. Montrer que $\sigma_k(\omega^i) = \omega^{ki}$ pour tout $i\in\mathbb N$, puis que $\sigma_k\in G$. Conclure : $G\simeq(\mathbb Z/p\mathbb Z)^*$, cyclique d'ordre $2^n$.</li></ol>`,
  decode: { donnees: [R`$\Phi_p$ est le polynôme minimal de $\omega$, de degré $p-1$ ; $(\mathbb Z/p\mathbb Z)^*$ est cyclique.`], but: R`Décrire explicitement les automorphismes : ils permutent les puissances de $\omega$.`, cles: {} },
  steps: [
    Q(4, "Une base", R`<p>$(1,\omega,\dots,\omega^{p-2})$ est une base (degré $p-1$), et $1 = -\sum_{j=1}^{p-1}\omega^j$.</p>`, R`<p>$\omega$ est de degré $p-1$ : $(1,\omega,\dots,\omega^{p-2})$ est une base de $K$, et $[K:\mathbb Q] = p-1 = 2^n$. Comme $\Phi_p(\omega) = 0$, $1 = -(\omega+\dots+\omega^{p-1})$ ; donc $(\omega,\dots,\omega^{p-1})$ engendre aussi $K$, et a $p-1$ éléments : c'est une base.</p>`, ["pg-cyc"]),
    Q(5, "Les automorphismes envoient ω sur une racine", R`<p>$\Phi_p(\sigma(\omega)) = \sigma(\Phi_p(\omega)) = 0$.</p>`, R`<p>Un automorphisme de corps fixe $\mathbb Q$ (il fixe $1$, donc $\mathbb Z$, donc $\mathbb Q$) et respecte les opérations, donc $\Phi_p(\sigma(\omega)) = \sigma(\Phi_p(\omega)) = 0$ : $\sigma(\omega)$ est une racine de $\Phi_p$, soit $\omega^k$ avec $k\not\equiv0$. $\sigma$ est déterminé par $\sigma(\omega)$ (car $K = \mathbb Q[\omega]$), d'où l'injectivité. Enfin $\sigma\circ\tau(\omega) = \sigma(\omega^{l}) = \omega^{kl}$ : c'est un morphisme.</p>`),
    Q(6, "Surjectivité", R`<p>Vérifie $\sigma_k(1) = 1$ avec $1 = -\sum\omega^j$, puis la multiplicativité sur la base.</p>`, R`<p>$\sigma_k(1) = -\sum_{j=1}^{p-1}\omega^{kj} = -\sum_{j=1}^{p-1}\omega^j = 1$, car $j\mapsto kj$ permute $(\mathbb Z/p\mathbb Z)^*$. Pour $i\in\mathbb N$, $\omega^i$ vaut $1$ ou $\omega^{i\bmod p}$ : dans les deux cas $\sigma_k(\omega^i) = \omega^{ki}$. Par bilinéarité, il suffit de vérifier la multiplicativité sur la base : $\sigma_k(\omega^i\omega^j) = \omega^{k(i+j)} = \sigma_k(\omega^i)\sigma_k(\omega^j)$. $\sigma_k$ est un morphisme d'anneaux, injectif (corps), donc bijectif (dimension finie) : $\sigma_k\in G$ et $\sigma_k(\omega) = \omega^k$.</p><div class="sbox"><p>$G\simeq(\mathbb Z/p\mathbb Z)^*$, cyclique d'ordre $p-1 = 2^n$.</p></div>`)
  ],
  piege: R`On ne peut pas définir $\sigma_k$ sur $K$ par « $\sigma_k(P(\omega)) = P(\omega^k)$ » sans vérifier que c'est bien défini (un même élément a plusieurs écritures polynomiales). Passer par une base règle le problème.`,
  methode: R`Automorphismes d'un corps $\mathbb Q(\alpha)$ : ils envoient $\alpha$ sur une racine de son polynôme minimal, et sont déterminés par cette image.`
},

/* ===================== Partie III ===================== */
{ id: "poly-3", ...P, part: "Partie III", time: "40 min",
  title: "La tour d'extensions quadratiques",
  enonce: PRE + R`<p><b>Partie III.</b> On garde les notations de la Partie II ; $g$ engendre $G$, et $B' = (g^i(\omega))_{0\leqslant i\lt2^n}$.</p><ol start="7">
<li>Montrer que $B'$ est une base de $K$ (c'est $B$ réordonnée), et que $g$ agit sur les coordonnées dans $B'$ par permutation circulaire.</li>
<li>Pour $0\leqslant i\leqslant n$, soit $K_i = \{z\in K : g^{2^i}(z) = z\}$. Montrer que $K_i$ est un sous-corps, que $K_0 = \mathbb Q$, $K_n = K$, $K_i\subset K_{i+1}$, et $[K_i:\mathbb Q] = 2^i$. Conclure que $\omega$ est constructible.</li>
<li>Pour $p = 5$ (avec $g = \sigma_2$), expliciter $K_1$, montrer que $\eta = \omega+\omega^4$ vérifie $\eta^2+\eta-1 = 0$, et en déduire $\cos\frac{2\pi}5$.</li>
<li>(<b>Gauss-Wantzel</b>) Montrer que si les $m$-gone et $m'$-gone sont constructibles avec $m\wedge m' = 1$, le $mm'$-gone l'est ; que le $2m$-gone l'est si le $m$-gone l'est. Énoncer la classification complète.</li></ol>`,
  decode: { donnees: [R`$G$ cyclique d'ordre $2^n$, $[K:\mathbb Q] = 2^n$.`], but: R`Les sous-groupes de $G$ (d'indices $1,2,4,\dots$) découpent $K$ en une tour de corps fixes de degrés doublés.`, cles: {} },
  steps: [
    Q(7, "Base adaptée à g", R`<p>$g = \sigma_r$ avec $r$ générateur de $(\mathbb Z/p\mathbb Z)^*$ : $g^i(\omega) = \omega^{r^i}$ parcourt toutes les puissances.</p>`, R`<p>$g = \sigma_r$ avec $r$ d'ordre $2^n$ modulo $p$, donc $g^i(\omega) = \omega^{r^i}$, et $\{r^i\}$ parcourt $(\mathbb Z/p\mathbb Z)^*$ : $B'$ est la base $B$ réordonnée. Pour $z = \sum_iz_ig^i(\omega)$ ($z_i\in\mathbb Q$), $g(z) = \sum_iz_ig^{i+1}(\omega)$ : la coordonnée d'indice $i+1$ de $g(z)$ est $z_i$ (indices modulo $2^n$). C'est une permutation circulaire des coordonnées.</p>`),
    Q(8, "Les corps fixes", R`<p>$z\in K_i\iff z_{j+2^i} = z_j$ pour tout $j$ : $z$ est déterminé par $2^i$ coordonnées.</p>`, R`<p>$K_i$ est un sous-corps (ensemble des points fixes d'un automorphisme). $g^{2^0} = g$ ; $g^{2^n} = \operatorname{Id}$ donc $K_n = K$ ; si $g^{2^i}(z) = z$, alors $g^{2^{i+1}}(z) = z$ : $K_i\subset K_{i+1}$.</p><p>Par Q7, $z\in K_i\iff z_{j+2^i} = z_j$ pour tout $j$ : les coordonnées sont $2^i$-périodiques. Une base de $K_i$ est donc formée des <b>périodes de Gauss</b> $e_j = \sum_{l\equiv j\ (2^i)}g^l(\omega)$, $0\leqslant j\lt2^i$ : $[K_i:\mathbb Q] = 2^i$. En particulier $K_0 = \mathbb Q e_0$ avec $e_0 = \sum_{l}g^l(\omega) = -1$ : $K_0 = \mathbb Q$.</p><p>Par la base télescopique, $[K_{i+1}:K_i] = \frac{2^{i+1}}{2^i} = 2$ : $\mathbb Q = K_0\subset K_1\subset\dots\subset K_n = K\ni\omega$ est une tour d'extensions quadratiques.</p><div class="sbox"><p>Par Wantzel, $\omega = e^{2i\pi/p}$ est constructible : le $p$-gone régulier l'est pour tout premier de Fermat $p$.</p></div>`, ["pg-wan", "pg-tel"]),
    Q(9, "Le pentagone", R`<p>$2$ engendre $(\mathbb Z/5\mathbb Z)^*$ : $B' = (\omega,\omega^2,\omega^4,\omega^3)$. $K_1$ a pour base $\omega+\omega^4$, $\omega^2+\omega^3$.</p>`, R`<p>$2^1 = 2$, $2^2 = 4$, $2^3 = 8\equiv3$ : $B' = (\omega,\omega^2,\omega^4,\omega^3)$. $K_1$ (coordonnées $2$-périodiques) a pour base $\eta = \omega+\omega^4$ et $\eta' = \omega^2+\omega^3$. On a $\eta+\eta' = -1$ et</p>$$\eta\eta' = \omega^3+\omega^4+\omega^6+\omega^7 = \omega^3+\omega^4+\omega+\omega^2 = -1.$$<p>Donc $\eta,\eta'$ sont racines de $X^2+X-1$. Comme $\eta = 2\cos\frac{2\pi}5>0$ :</p><div class="sbox">$$\eta = \frac{-1+\sqrt5}2,\qquad\cos\frac{2\pi}5 = \frac{\sqrt5-1}4.$$</div><p>Puis $\omega$ est racine de $X^2-\eta X+1$ (car $\omega+\omega^{-1} = \eta$, $\omega\omega^{-1} = 1$) : $K_2 = K_1(\omega)$ est quadratique sur $K_1$.</p>${figPent}`),
    Q(10, "Gauss-Wantzel", R`<p>Bézout : $\frac{2\pi}{mm'} = u\frac{2\pi}{m'}+v\frac{2\pi}m$ si $um+vm' = 1$. Bissectrice pour $2m$.</p>`, R`<p>Si $um+vm' = 1$ : $\frac1{mm'} = \frac u{m'}+\frac v m$, donc $\omega_{mm'} = \omega_{m'}^u\omega_m^v$, produit de constructibles : constructible. La bissectrice d'un angle se construit, donc $\omega_{2m}$ (de l'angle $\frac{2\pi}m$) aussi.</p><p>Réciproquement, si $\omega_m$ est constructible et $p^a\mid m$, $\omega_{p^a} = \omega_m^{m/p^a}$ l'est : par la Partie I, $a = 1$ et $p$ est de Fermat.</p><div class="sbox"><p><b>Gauss-Wantzel.</b> Le $m$-gone régulier est constructible si et seulement si $m = 2^kp_1\cdots p_r$ avec des premiers de Fermat $p_i$ distincts.</p></div><p>Ainsi $3,4,5,6,8,10,12,15,16,17,20$ conviennent ; $7,9,11,13,14,18,19$ non.</p>`)
  ],
  piege: R`Les $K_i$ sont emboîtés dans le bon sens : plus l'exposant $2^i$ est grand, plus $g^{2^i}$ est « petit » (sous-groupe engendré plus petit), donc plus il fixe d'éléments.`,
  methode: R`Correspondance de Galois en miniature : un groupe cyclique d'ordre $2^n$ a une chaîne de sous-groupes d'indices $2$, dont les corps fixes forment une tour quadratique ; les périodes de Gauss en donnent des bases explicites.`
}
]);
})();

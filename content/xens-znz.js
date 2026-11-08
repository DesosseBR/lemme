/* Commando X-ENS · Aller plus loin · Sujet « Structure de ℤ/nℤ ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 17, kind: "probleme", qnav: true, side: true, level: 4, plus: "znz",
  sujet: "Structure de l'anneau ℤ/nℤ et de son groupe des unités",
  sujetDesc: "Le théorème chinois ramène tout à ℤ/p^aℤ. On caractérise les n et k pour lesquels x ↦ x^k est une bijection de ℤ/nℤ (n sans facteur carré, k premier à chaque p − 1), on dénombre nilpotents et idempotents (2^s idempotents), puis on détermine la structure de (ℤ/nℤ)^× : cyclique pour p^r (p impair), ℤ/2 × ℤ/2^{r−2} pour 2^r, et Aut(ℤ/nℤ) ≃ (ℤ/nℤ)^×." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "zn-crt": { t: "Théorème chinois", b: R`$$n = \prod p_i^{a_i}\ :\quad\mathbb Z/n\mathbb Z\simeq\prod_i\mathbb Z/p_i^{a_i}\mathbb Z,\qquad(\mathbb Z/n\mathbb Z)^\times\simeq\prod_i(\mathbb Z/p_i^{a_i}\mathbb Z)^\times.$$` },
  "zn-cyc": { t: "𝔽_p^× est cyclique", b: R`<p>Pour $p$ premier, $(\mathbb Z/p\mathbb Z)^\times$ est cyclique d'ordre $p-1$.</p>` },
  "zn-ord": { t: "Ordres dans un groupe abélien", b: R`$$xy = yx,\ a\wedge b = 1\Rightarrow\operatorname{ord}(xy) = ab;\qquad\operatorname{ord}x = m,\ d\mid m\Rightarrow\operatorname{ord}x^{m/d} = d.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $n\geqslant2$ est un entier, de décomposition $n = p_1^{a_1}\cdots p_s^{a_s}$ ($p_i$ premiers distincts, $a_i\geqslant1$). On note $\varphi$ l'indicatrice d'Euler et $(\mathbb Z/n\mathbb Z)^\times$ le groupe des inversibles.</p>`;

/* Figure : cycles des unités */
const figCyc = (() => { let b = ""; const circ = (cx, cy, r, pts, cls, lab) => { const P2 = pts.map((v, k) => { const t = Math.PI / 2 - 2 * Math.PI * k / pts.length; return [cx + r * Math.cos(t), cy - r * Math.sin(t), v]; });
    P2.forEach(([x, y], k) => { const [x2, y2] = P2[(k + 1) % P2.length]; b += `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="${cls}" style="stroke-width:1.6"/>`; });
    P2.forEach(([x, y, v]) => { b += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="12" class="pt"/>` + S(x, y + 4, String(v), "middle", "sm"); }); if (lab) b += S(cx, cy + r + 30, lab, "middle", "sm"); };
  circ(120, 120, 70, [1, 2, 4, 8, 7, 5], "vb", "(ℤ/9ℤ)ˣ = ⟨2⟩ ≃ ℤ/6ℤ");
  circ(330, 120, 50, [1, 5, 9, 13], "vr", "⟨5⟩ ≃ ℤ/4ℤ");
  circ(470, 120, 50, [15, 11, 7, 3], "vr", "−⟨5⟩");
  b += S(400, 230, "(ℤ/16ℤ)ˣ = {±1} × ⟨5⟩ ≃ ℤ/2ℤ × ℤ/4ℤ", "middle", "sm");
  return FIG(560, 250, b, R`À gauche, $(\mathbb Z/9\mathbb Z)^\times$ est cyclique, engendré par $2$ : $2,4,8,7,5,1$. À droite, $(\mathbb Z/16\mathbb Z)^\times$ n'est pas cyclique : les puissances de $5$ ne donnent que les $x\equiv1\pmod4$, et l'autre moitié est $-\langle5\rangle$. Chaque flèche est la multiplication par le générateur.`, "Groupes des unités"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "znz-1", ...P, part: "Partie I", time: "30 min",
  title: "Quand x ↦ x^k est-elle bijective ?",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $k\geqslant2$ et $\Phi : \mathbb Z/n\mathbb Z\to\mathbb Z/n\mathbb Z$, $x\mapsto x^k$.</p><ol start="1">
<li>Montrer que $\Phi$ est bijective si et seulement si chaque $x\mapsto x^k$ sur $\mathbb Z/p_i^{a_i}\mathbb Z$ l'est.</li>
<li>Montrer que si $a\geqslant2$, $x\mapsto x^k$ n'est pas surjective sur $\mathbb Z/p^a\mathbb Z$.</li>
<li>Montrer que $x\mapsto x^k$ est bijective sur $\mathbb Z/p\mathbb Z$ si et seulement si $k\wedge(p-1) = 1$.</li>
<li>Conclure, et l'appliquer à $n = 15$, $k = 3$ et à $n = 55$, $k = 3$.</li></ol>`,
  decode: { donnees: [R`Théorème chinois, $\mathbb F_p^\times$ cyclique.`], but: R`Caractériser $\Phi$ bijective : $n$ sans facteur carré et $k\wedge(p-1) = 1$ pour tout $p\mid n$.`, cles: {} },
  steps: [
    Q(1, "Réduction par le théorème chinois", R`<p>L'isomorphisme d'anneaux $\psi$ commute aux puissances.</p>`, R`<p>Soit $\psi$ l'isomorphisme chinois. Comme $\psi$ est un morphisme d'anneaux, $\psi(x^k) = \psi(x)^k$, donc $\psi\circ\Phi\circ\psi^{-1}(x_1,\dots,x_s) = (x_1^k,\dots,x_s^k)$. Une application produit est bijective si et seulement si chaque composante l'est.</p>`, ["zn-crt"]),
    Q(2, "Un facteur carré empêche la surjectivité", R`<p>Chercher un antécédent de $p$.</p>`, R`<p>Si $x^k\equiv p\pmod{p^a}$ avec $a\geqslant2$, alors $p\mid x^k$, donc $p\mid x$, donc $p^2\mid x^k$ ($k\geqslant2$). Comme $p^2\mid p^a$, on aurait $p^2\mid p$, absurde. Donc $p$ n'a pas d'antécédent.</p>`),
    Q(3, "Le cas premier", R`<p>Sur $\mathbb F_p^\times$, $x\mapsto x^k$ est un morphisme. Noyau : éléments d'ordre divisant $k\wedge(p-1)$.</p>`, R`<p>$0\mapsto0$, et $x\mapsto x^k$ est un endomorphisme du groupe cyclique $\mathbb F_p^\times = \langle g\rangle$ d'ordre $p-1$. Son noyau est $\{x : x^k = 1\}$ ; or $x^k = 1 = x^{p-1}$ équivaut à $x^{k\wedge(p-1)} = 1$ (Bézout), et dans un groupe cyclique d'ordre $p-1$, il y a exactement $d = k\wedge(p-1)$ éléments vérifiant $x^d = 1$. Donc l'application est injective, donc bijective (ensemble fini), si et seulement si $d = 1$.</p>`, ["zn-cyc"]),
    Q(4, "Conclusion et exemples", R`<p>$15 = 3\cdot5$ ; $55 = 5\cdot11$.</p>`, R`<div class="sbox"><p>$x\mapsto x^k$ est une bijection de $\mathbb Z/n\mathbb Z$ si et seulement si $n$ est sans facteur carré et $k\wedge(p-1) = 1$ pour tout premier $p\mid n$.</p></div><p>$n = 15$, $k = 3$ : $3\wedge2 = 1$, $3\wedge4 = 1$ : bijection. $n = 55$, $k = 3$ : $3\wedge4 = 1$ mais $3\wedge10 = 1$ aussi : bijection. Avec $k = 5$, $5\wedge4 = 1$ mais $5\wedge10 = 5$ : ce n'est plus une bijection. C'est le principe du chiffrement RSA : $x\mapsto x^k$ est inversible, d'inverse $x\mapsto x^{k'}$ avec $kk'\equiv1\pmod{\mathrm{ppcm}(p_i-1)}$.</p>`)
  ],
  piege: R`Pour $k = 2$, la condition $2\wedge(p-1) = 1$ n'est vraie que pour $p = 2$ : l'élévation au carré n'est bijective que sur $\mathbb Z/2\mathbb Z$.`,
  methode: R`Questions sur $\mathbb Z/n\mathbb Z$ : théorème chinois pour se ramener aux $\mathbb Z/p^a\mathbb Z$, puis cyclicité de $\mathbb F_p^\times$.`
},

/* ===================== Partie II ===================== */
{ id: "znz-2", ...P, part: "Partie II", time: "20 min",
  title: "Nilpotents et idempotents",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="5">
<li>Montrer que $a\in\mathbb Z/n\mathbb Z$ est nilpotent si et seulement si $r = p_1\cdots p_s$ (le radical de $n$) divise $a$. Combien y a-t-il de nilpotents ?</li>
<li>Montrer que $\mathbb Z/p^a\mathbb Z$ a exactement deux idempotents ($x^2 = x$), puis que $\mathbb Z/n\mathbb Z$ en a exactement $2^s$. Les expliciter pour $n = 12$.</li></ol>`,
  decode: { donnees: [R`Théorème chinois.`], but: R`Dénombrer nilpotents et idempotents.`, cles: {} },
  steps: [
    Q(5, "Nilpotents", R`<p>$n\mid a^m\Rightarrow p_i\mid a$. Réciproquement, $a^{\max a_i}$ est divisible par $n$.</p>`, R`<p>Si $a^m\equiv0\pmod n$, chaque $p_i$ divise $a^m$, donc $a$ ; les $p_i$ étant premiers entre eux, $r\mid a$. Réciproquement, si $r\mid a$ et $m = \max a_i$, alors $p_i^{a_i}\mid p_i^m\mid a^m$ pour tout $i$, donc $n\mid a^m$. Les nilpotents sont les multiples de $r$ dans $\mathbb Z/n\mathbb Z$ : il y en a $\frac nr$.</p>`),
    Q(6, "Idempotents", R`<p>$p^a\mid x(x-1)$ avec $x\wedge(x-1) = 1$. Puis théorème chinois.</p>`, R`<p>Dans $\mathbb Z/p^a\mathbb Z$, $x^2 = x$ signifie $p^a\mid x(x-1)$ ; comme $x$ et $x-1$ sont premiers entre eux, $p$ ne divise pas les deux, donc $p^a\mid x$ ou $p^a\mid x-1$ : $x\in\{0,1\}$. Par le théorème chinois, $x$ est idempotent dans $\mathbb Z/n\mathbb Z$ si et seulement si chaque composante l'est, d'où $2^s$ idempotents (un choix $0$ ou $1$ par facteur). (Le livre écrit « nilpotents » au lieu d'« idempotents » à la fin de la preuve.)</p><p>Pour $n = 12 = 4\cdot3$ : les couples $(0,0),(1,1),(0,1),(1,0)$ de $\mathbb Z/4\times\mathbb Z/3$ correspondent à $0,1,4,9$. Vérification : $4^2 = 16\equiv4$, $9^2 = 81\equiv9\pmod{12}$.</p>`, ["zn-crt"])
  ],
  piege: R`Un idempotent n'est pas forcément $0$ ou $1$ dans un anneau non intègre : dans $\mathbb Z/12\mathbb Z$, $4$ et $9$ le sont. Ils correspondent à la décomposition en produit.`,
  methode: R`Idempotents d'un produit d'anneaux $=$ produits d'idempotents ; ils comptent les facteurs.`
},

/* ===================== Partie III ===================== */
{ id: "znz-3", ...P, part: "Partie III", time: "40 min",
  title: "Structure du groupe des unités",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Soit $p$ premier impair. Montrer par récurrence que $(1+p)^{p^k} = 1+p^{k+1}\lambda_k$ avec $p\nmid\lambda_k$. En déduire que $1+p$ est d'ordre $p^{r-1}$ dans $(\mathbb Z/p^r\mathbb Z)^\times$.</li>
<li>Montrer que $(\mathbb Z/p^r\mathbb Z)^\times$ contient un élément d'ordre $p-1$, puis qu'il est cyclique.</li>
<li>Pour $r\geqslant3$, montrer que $5^{2^k} = 1+2^{k+2}\mu_k$ avec $\mu_k$ impair, puis que $(\mathbb Z/2^r\mathbb Z)^\times\simeq\mathbb Z/2\mathbb Z\times\mathbb Z/2^{r-2}\mathbb Z$.</li>
<li>Montrer que $\mathrm{Aut}(\mathbb Z/n\mathbb Z)\simeq(\mathbb Z/n\mathbb Z)^\times$.</li></ol>`,
  decode: { donnees: [R`$\mathbb F_p^\times$ cyclique, ordres dans un groupe abélien.`], but: R`Déterminer la structure de $(\mathbb Z/p^r\mathbb Z)^\times$.`, cles: {} },
  steps: [
    Q(7, "L'élément 1 + p", R`<p>$(1+p^{k+1}\lambda)^p = 1+p^{k+2}\lambda+\binom p2p^{2k+2}\lambda^2+\dots$, et $p\mid\binom p2$ car $p$ est impair.</p>`, R`<p>Pour $k = 0$ : $\lambda_0 = 1$. Si $(1+p)^{p^k} = 1+p^{k+1}\lambda$ avec $p\nmid\lambda$, alors</p>$$\begin{aligned}(1+p)^{p^{k+1}} &= \sum_{j=0}^p\binom pj p^{j(k+1)}\lambda^j\\&= 1+p^{k+2}\lambda+\binom p2p^{2k+2}\lambda^2+\sum_{j\geqslant3}\binom pjp^{j(k+1)}\lambda^j.\end{aligned}$$<p>Comme $p$ est impair, $p\mid\binom p2$, donc le troisième terme est divisible par $p^{2k+3}$ ; les suivants par $p^{3k+3}$. Comme $2k+3\geqslant k+3$, $(1+p)^{p^{k+1}} = 1+p^{k+2}(\lambda+p\nu)$ et $p\nmid\lambda+p\nu$.</p><p>Ainsi $(1+p)^{p^{r-1}}\equiv1\pmod{p^r}$, et $(1+p)^{p^{r-2}} = 1+p^{r-1}\lambda_{r-2}\not\equiv1\pmod{p^r}$. L'ordre divise $p^{r-1}$ sans diviser $p^{r-2}$ : il vaut $p^{r-1}$.</p>`),
    Q(8, "Cyclicité pour p impair", R`<p>Relever un générateur $g$ de $\mathbb F_p^\times$ : son ordre modulo $p^r$ est un multiple de $p-1$ divisant $(p-1)p^{r-1}$.</p>`, R`<p>Soit $g$ un entier dont la classe engendre $\mathbb F_p^\times$. Son ordre $m$ modulo $p^r$ vérifie $g^m\equiv1\pmod p$, donc $(p-1)\mid m$, et $m\mid\varphi(p^r) = (p-1)p^{r-1}$ : $m = (p-1)p^j$. Alors $h = g^{p^j}$ est d'ordre $p-1$. Comme $p-1$ et $p^{r-1}$ sont premiers entre eux, $h(1+p)$ est d'ordre $(p-1)p^{r-1} = |(\mathbb Z/p^r\mathbb Z)^\times|$ : le groupe est cyclique.</p><p>Exemple : $2$ engendre $(\mathbb Z/9\mathbb Z)^\times$ ($2^3 = 8\neq1$, $2^2 = 4\neq1$, ordre $6$). (La preuve du livre parle d'un élément « d'ordre $k(p-1)$ » puis de $x^k$ : il faut élever à la puissance $p^j$, pas $k$.)</p>`, ["zn-cyc", "zn-ord"]),
    Q(9, "Le cas p = 2", R`<p>$(1+2^{k+2}\mu)^2 = 1+2^{k+3}(\mu+2^{k+1}\mu^2)$. Puis $-1\notin\langle5\rangle$ car $5^u\equiv1\pmod4$.</p>`, R`<p>$5 = 1+4$ : $\mu_0 = 1$. Si $5^{2^k} = 1+2^{k+2}\mu$ ($\mu$ impair), alors $5^{2^{k+1}} = 1+2^{k+3}\mu+2^{2k+4}\mu^2 = 1+2^{k+3}(\mu+2^{k+1}\mu^2)$, avec $\mu+2^{k+1}\mu^2$ impair. Donc $5$ est d'ordre exactement $2^{r-2}$ modulo $2^r$ (même argument qu'en Q7).</p><p>Toute puissance de $5$ est $\equiv1\pmod4$, donc $-1\notin\langle5\rangle$ ($r\geqslant2$). L'application $\{\pm1\}\times\langle5\rangle\to(\mathbb Z/2^r\mathbb Z)^\times$, $(\varepsilon,u)\mapsto\varepsilon u$, est un morphisme injectif (si $\varepsilon u = 1$ avec $\varepsilon = -1$, alors $-1 = u^{-1}\in\langle5\rangle$, exclu), entre groupes de même cardinal $2\cdot2^{r-2} = \varphi(2^r)$ : c'est un isomorphisme. Donc $(\mathbb Z/2^r\mathbb Z)^\times\simeq\mathbb Z/2\mathbb Z\times\mathbb Z/2^{r-2}\mathbb Z$, non cyclique pour $r\geqslant3$.</p>${figCyc}`, ["zn-ord"]),
    Q(10, "Automorphismes", R`<p>Un endomorphisme du groupe $\mathbb Z/n\mathbb Z$ est déterminé par $f(1)$ : $f(x) = xf(1)$.</p>`, R`<p>Pour $a\in(\mathbb Z/n\mathbb Z)^\times$, $m_a : x\mapsto ax$ est un automorphisme (d'inverse $m_{a^{-1}}$), et $m_{ab} = m_a\circ m_b$. Réciproquement, un automorphisme $f$ vérifie $f(x) = f(1+\dots+1) = xf(1)$ ; comme $f$ est surjective, $1 = f(k) = kf(1)$ pour un $k$, donc $a = f(1)$ est inversible et $f = m_a$. Enfin $m_a = \mathrm{id}$ impose $a = m_a(1) = 1$. Donc $a\mapsto m_a$ est un isomorphisme $(\mathbb Z/n\mathbb Z)^\times\simeq\mathrm{Aut}(\mathbb Z/n\mathbb Z)$. Avec le théorème chinois, $(\mathbb Z/n\mathbb Z)^\times$ est cyclique si et seulement si $n\in\{2,4,p^r,2p^r\}$ ($p$ premier impair).</p>`)
  ],
  piege: R`L'argument de Q7 utilise $p\mid\binom p2$, faux pour $p = 2$ : c'est pourquoi $1+2 = 3$ ne marche pas et que $(\mathbb Z/2^r\mathbb Z)^\times$ n'est pas cyclique.`,
  methode: R`Pour l'ordre d'un élément $1+p^a\lambda$ modulo $p^r$ : suivre la valuation $p$-adique de $x^{p^k}-1$ par le binôme (« lifting the exponent »).`
}
]);
})();

/* Commando X-ENS · Aller plus loin · Sujet « Endomorphismes semi-simples ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 4, plus: "ssim",
  sujet: "Endomorphismes semi-simples et polynôme minimal",
  sujetDesc: "Un endomorphisme est semi-simple si tout sous-espace stable admet un supplémentaire stable. On montre que c'est le cas si et seulement si le polynôme minimal est sans facteur carré : réduction par le lemme des noyaux au cas μ = Q^α, puis étude de ce cas (K[f] est un corps quand μ est irréductible). Conséquence : diagonalisable ⇔ semi-simple et χ scindé." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "ss-noy": { t: "Lemme des noyaux", b: R`<p>Si $P = P_1\cdots P_r$ avec les $P_i$ premiers entre eux deux à deux, alors $\ker P(f) = \bigoplus_i\ker P_i(f)$, et les projecteurs associés sont des polynômes en $f$.</p>` },
  "ss-corps": { t: "K[f] quand μ_f est irréductible", b: R`<p>$K[f]\simeq K[X]/(\mu_f)$. Si $\mu_f$ est irréductible, c'est un corps : tout $P(f)\neq0$ est inversible, d'inverse un polynôme en $f$.</p>` },
  "ss-mono": { t: "Sous-espace monogène", b: R`<p>Pour $x\in E$, $E_x = \{P(f)(x) : P\in K[X]\} = \mathrm{Vect}(f^k(x),\ k\in\mathbb N)$ est le plus petit sous-espace stable par $f$ contenant $x$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $E$ est un $K$-espace vectoriel de dimension finie $n\geqslant1$, $f\in\mathcal L(E)$, de polynôme minimal $\mu_f$. On dit que $f$ est <b>semi-simple</b> si tout sous-espace $F$ stable par $f$ admet un supplémentaire $G$ stable par $f$. On veut montrer : $f$ est semi-simple si et seulement si $\mu_f$ est <b>sans facteur carré</b> (produit d'irréductibles distincts).</p>`;

/* Figure : sous-espaces stables en dimension 2 */
const figStab = (() => { let b = ""; const pan = (cx, title, lines, note) => { b += `<rect x="${cx - 80}" y="20" width="160" height="160" rx="6" class="thin" style="fill:none"/><line x1="${cx - 70}" y1="100" x2="${cx + 70}" y2="100" class="ax"/><line x1="${cx}" y1="30" x2="${cx}" y2="170" class="ax"/>`;
    lines.forEach(([a, cls]) => { const dx = 70 * Math.cos(a), dy = 70 * Math.sin(a); b += `<line x1="${(cx - dx).toFixed(1)}" y1="${(100 + dy).toFixed(1)}" x2="${(cx + dx).toFixed(1)}" y2="${(100 - dy).toFixed(1)}" class="${cls}" style="stroke-width:3"/>`; });
    b += S(cx, 200, title, "middle", "sm") + S(cx, 218, note, "middle", "sm"); };
  pan(100, "diag(1, 2)", [[0, "vb"], [Math.PI / 2, "vb"]], "2 droites stables : semi-simple");
  pan(300, "rotation d'angle π/2", [], "aucune droite stable : semi-simple");
  pan(500, "( 1 1 ; 0 1 )", [[0, "vr"]], "1 seule droite stable : non");
  return FIG(600, 230, b, R`Sous-espaces stables non triviaux de quelques endomorphismes de $\mathbb R^2$. Pour la rotation, $\mu = X^2+1$ est irréductible sur $\mathbb R$ : elle est semi-simple sans être diagonalisable. Pour le bloc de Jordan, $\mu = (X-1)^2$ : la seule droite stable $\mathbb Re_1$ n'a pas de supplémentaire stable.`, "Droites stables en dimension 2"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "ssim-1", ...P, part: "Partie I", time: "25 min",
  title: "Réduction par le lemme des noyaux",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Soit $F$ stable par $f$. Montrer que si $f$ est semi-simple, $f|_F$ l'est aussi.</li>
<li>Soit $\mu_f = P_1^{\alpha_1}\cdots P_r^{\alpha_r}$ la décomposition en irréductibles unitaires distincts, et $E_i = \ker P_i^{\alpha_i}(f)$. Montrer que $f$ est semi-simple si et seulement si chaque $f_i = f|_{E_i}$ l'est. (Pour la réciproque, si $F$ est stable, montrer que $F = \bigoplus_i(F\cap E_i)$.)</li>
<li>Montrer que le polynôme minimal de $f_i$ est $P_i^{\alpha_i}$.</li></ol>`,
  decode: { donnees: [R`Lemme des noyaux.`], but: R`Se ramener au cas où $\mu_f$ est une puissance d'un irréductible.`, cles: {} },
  steps: [
    Q(1, "Restriction à un sous-espace stable", R`<p>Si $G\subset F$ est stable, prendre un supplémentaire stable $H$ de $G$ dans $E$, puis $H\cap F$.</p>`, R`<p>Soit $G\subset F$ stable par $f|_F$ ; il est stable par $f$, donc admet un supplémentaire $H$ dans $E$ stable par $f$. Alors $H\cap F$ est stable par $f$, et c'est un supplémentaire de $G$ dans $F$ : $G\cap(H\cap F) = \{0\}$, et pour $x\in F$, $x = g+h$ avec $g\in G\subset F$ donc $h = x-g\in F\cap H$. Ainsi $f|_F$ est semi-simple.</p>`),
    Q(2, "Recollement", R`<p>Les projecteurs $\pi_i$ sur les $E_i$ sont des polynômes en $f$, donc stabilisent $F$.</p>`, R`<p>Par le lemme des noyaux, $E = \bigoplus E_i$ (car $\mu_f(f) = 0$), et les projecteurs $\pi_i$ sont des polynômes en $f$. Les $E_i$ sont stables par $f$, donc si $f$ est semi-simple, chaque $f_i$ l'est (Q1).</p><p>Réciproquement, soit $F$ stable par $f$. Il est stable par chaque $\pi_i$, donc pour $x\in F$, $x = \sum\pi_i(x)$ avec $\pi_i(x)\in F\cap E_i$ : $F = \bigoplus F_i$, $F_i = F\cap E_i$. Chaque $F_i$ est stable par $f_i$, qui est semi-simple : soit $W_i\subset E_i$ un supplémentaire stable. Alors $W = \bigoplus W_i$ est stable par $f$, et $E = \bigoplus(F_i\oplus W_i) = F\oplus W$. Donc $f$ est semi-simple.</p>`, ["ss-noy"]),
    Q(3, "Polynôme minimal des restrictions", R`<p>$\mu_{f_i}$ divise $P_i^{\alpha_i}$ ; et $\prod\mu_{f_i}$ annule $f$.</p>`, R`<p>$P_i^{\alpha_i}(f_i) = 0$, donc $\mu_{f_i} = P_i^{\beta_i}$ avec $\beta_i\leqslant\alpha_i$. Le polynôme $\prod_i P_i^{\beta_i}$ annule chaque $f_i$, donc $f$ (car $E = \bigoplus E_i$), donc est divisible par $\mu_f$ : $\beta_i\geqslant\alpha_i$. Ainsi $\mu_{f_i} = P_i^{\alpha_i}$.</p>`)
  ],
  piege: R`Dans Q2, on a besoin que les projecteurs soient des polynômes en $f$ : un sous-espace stable par $f$ n'est pas stable par un projecteur quelconque.`,
  methode: R`Lemme des noyaux : décomposer $E$ en sous-espaces caractéristiques, travailler sur chacun, puis recoller grâce aux projecteurs polynomiaux.`
},

/* ===================== Partie II ===================== */
{ id: "ssim-2", ...P, part: "Partie II", time: "35 min",
  title: "Le cas μ = Q^α",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose $\mu_f = Q^\alpha$ avec $Q$ irréductible et $\alpha\geqslant1$.</p><ol start="4">
<li>On suppose $f$ semi-simple et $\alpha\geqslant2$. Soit $G$ un supplémentaire stable de $K = \ker Q^{\alpha-1}(f)$. Montrer que $Q(f)(G)\subset G\cap K$, puis aboutir à une contradiction.</li>
<li>On suppose $\alpha = 1$. Soit $F$ stable et $x\notin F$. Montrer que $E_x\cap F = \{0\}$.</li>
<li>En déduire que $f$ est semi-simple si $\alpha = 1$.</li></ol>`,
  decode: { donnees: [R`$K[f]$ est un corps si $\mu_f$ est irréductible.`], but: R`Montrer : semi-simple $\iff\alpha = 1$.`, cles: {} },
  steps: [
    Q(4, "Un facteur carré interdit la semi-simplicité", R`<p>$Q^{\alpha-1}(f)(Q(f)(x)) = Q^\alpha(f)(x) = 0$. Puis $G\subset\ker Q(f)\subset K$.</p>`, R`<p>$K = \ker Q^{\alpha-1}(f)$ est stable par $f$ ; soit $G$ stable avec $E = K\oplus G$. $G$ est stable par $Q(f)$, et pour $x\in G$, $Q^{\alpha-1}(f)\big(Q(f)(x)\big) = \mu_f(f)(x) = 0$, donc $Q(f)(x)\in G\cap K = \{0\}$. Ainsi $G\subset\ker Q(f)\subset\ker Q^{\alpha-1}(f) = K$ (car $\alpha-1\geqslant1$), d'où $G = G\cap K = \{0\}$ et $E = K$ : $Q^{\alpha-1}(f) = 0$, ce qui contredit la minimalité de $\mu_f = Q^\alpha$. Donc $\alpha = 1$.</p>`),
    Q(5, "Un sous-espace monogène en somme directe", R`<p>Si $y = P(f)(x)\in F$ et $P(f)\neq0$, inverser $P(f)$ dans le corps $K[f]$.</p>`, R`<p>Soit $y\in E_x\cap F$, $y = P(f)(x)$. Si $P(f)\neq0$, comme $K[f]$ est un corps ($\mu_f = Q$ irréductible), il existe $R$ avec $R(f)P(f) = \mathrm{id}$. Alors $x = R(f)(y)\in F$ ($F$ stable par $f$, donc par $R(f)$), ce qui contredit $x\notin F$. Donc $P(f) = 0$ et $y = 0$.</p>`, ["ss-corps", "ss-mono"]),
    Q(6, "Construction d'un supplémentaire stable", R`<p>Itérer : $F_0 = F$, $F_{i+1} = F_i\oplus E_{x_{i+1}}$ avec $x_{i+1}\notin F_i$.</p>`, R`<p>Si $F = E$, $G = \{0\}$ convient. Sinon, on construit par récurrence $F_0 = F$ et, tant que $F_i\neq E$, $x_{i+1}\notin F_i$ et $F_{i+1} = F_i+E_{x_{i+1}}$. Par Q5 appliquée à $F_i$ (stable), la somme est directe et $\dim F_{i+1}>\dim F_i$ : le procédé s'arrête, avec $E = F\oplus E_{x_1}\oplus\dots\oplus E_{x_s}$. Le sous-espace $G = \bigoplus E_{x_j}$ est stable et supplémentaire de $F$. Donc $f$ est semi-simple.</p><p>(Autre point de vue : $E$ est un espace vectoriel sur le corps $K[f]$, les sous-espaces stables sont exactement ses $K[f]$-sous-espaces, et tout sous-espace d'un espace vectoriel a un supplémentaire.)</p>`)
  ],
  piege: R`Dans Q4, c'est la stabilité de $G$ par $Q(f)$ qui permet de conclure ; un supplémentaire quelconque de $K$ ne marcherait pas.`,
  methode: R`Quand $\mu_f$ est irréductible, $E$ est un $K[f]$-espace vectoriel et « stable par $f$ » signifie « sous-$K[f]$-espace ».`
},

/* ===================== Partie III ===================== */
{ id: "ssim-3", ...P, part: "Partie III", time: "25 min",
  title: "Le théorème et ses conséquences",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Conclure : $f$ est semi-simple si et seulement si $\mu_f$ est sans facteur carré.</li>
<li>Montrer que $f$ est diagonalisable si et seulement si $f$ est semi-simple et $\chi_f$ est scindé.</li>
<li>Étudier la semi-simplicité de $R = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$ et $J = \begin{pmatrix}1&1\\0&1\end{pmatrix}$ sur $\mathbb R$, et de $A = \begin{pmatrix}R&I_2\\0&R\end{pmatrix}\in\mathcal M_4(\mathbb R)$.</li></ol>`,
  decode: { donnees: [R`Parties I et II.`], but: R`Énoncer et exploiter la caractérisation.`, cles: {} },
  steps: [
    Q(7, "La caractérisation", R`<p>Q2 + Q3 + Partie II.</p>`, R`<p>Par Q2, $f$ est semi-simple si et seulement si chaque $f_i$ l'est ; par Q3, $\mu_{f_i} = P_i^{\alpha_i}$, et par la Partie II, $f_i$ est semi-simple si et seulement si $\alpha_i = 1$. Donc</p><div class="sbox">$$f\ \text{semi-simple}\iff\mu_f = P_1\cdots P_r\ \text{(irréductibles distincts)}.$$</div>`),
    Q(8, "Lien avec la diagonalisabilité", R`<p>Un polynôme scindé sans facteur carré est scindé à racines simples. $\mu_f$ divise $\chi_f$.</p>`, R`<p>Si $f$ est diagonalisable, $\mu_f$ est scindé à racines simples, donc sans facteur carré : $f$ est semi-simple ; et $\chi_f$ est scindé. Réciproquement, si $\chi_f$ est scindé, $\mu_f$ (qui le divise) aussi ; s'il est de plus sans facteur carré, ses facteurs irréductibles sont des $X-\lambda$ distincts : $\mu_f$ est scindé à racines simples et $f$ est diagonalisable.</p><p>Sur $\mathbb C$, semi-simple équivaut donc à diagonalisable. Sur un corps parfait (par exemple $\mathbb Q$, $\mathbb R$, $\mathbb F_q$), semi-simple équivaut à diagonalisable sur une clôture algébrique ; sur $\mathbb F_p(T)$, $X^p-T$ est irréductible mais égal à $(X-T^{1/p})^p$ après extension, et ce n'est plus vrai.</p>`),
    Q(9, "Exemples", R`<p>$\mu_R = X^2+1$, $\mu_J = (X-1)^2$, $\mu_A = (X^2+1)^2$ ?</p>`, R`<p>$\mu_R = X^2+1$, irréductible sur $\mathbb R$ : $R$ est semi-simple, mais pas diagonalisable sur $\mathbb R$ (aucune droite stable : $R$ n'a pas de valeur propre réelle). $\mu_J = (X-1)^2$ : $J$ n'est pas semi-simple ; en effet la seule droite stable est $\mathbb Re_1$ (vecteurs propres), qui n'a pas de supplémentaire stable.</p><p>Pour $A$ : $A^2+I_4 = \begin{pmatrix}R^2+I_2&2R\\0&R^2+I_2\end{pmatrix} = \begin{pmatrix}0&2R\\0&0\end{pmatrix}\neq0$ (bloc par bloc, $R$ commute avec $I_2$), et $(A^2+I_4)^2 = 0$. Donc $\mu_A = (X^2+1)^2$ ($\mu_A$ divise $(X^2+1)^2$ et ne divise pas $X^2+1$, et $X^2+1$ est irréductible) : $A$ n'est pas semi-simple. Le sous-espace stable $\mathrm{Vect}(e_1,e_2)$ n'a pas de supplémentaire stable.</p>${figStab}`)
  ],
  piege: R`« Sans facteur carré » n'est pas « à racines simples » : $X^2+1$ est sans facteur carré sur $\mathbb R$ mais pas scindé. Semi-simple ne veut pas dire diagonalisable.`,
  methode: R`Semi-simplicité : lire le polynôme minimal. Diagonalisable $=$ semi-simple $+$ $\chi$ scindé.`
}
]);
})();

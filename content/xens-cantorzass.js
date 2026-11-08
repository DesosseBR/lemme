/* Commando X-ENS · Aller plus loin · Sujet « Algorithme de Cantor-Zassenhaus ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 8, kind: "probleme", qnav: true, side: true, level: 4, plus: "cz",
  sujet: "Factoriser sur 𝔽_q par le hasard : l'algorithme de Cantor-Zassenhaus",
  sujetDesc: "Soit P ∈ 𝔽_q[X] (q impair) produit de r ≥ 2 irréductibles distincts de même degré d. On tire Q au hasard ; si Q ∧ P = 1, on calcule (Q^{(q^d−1)/2} − 1) ∧ P. Par le théorème chinois, Q correspond à r éléments indépendants et uniformes des corps 𝔽_q[X]/(P_i), dont chacun est un carré avec probabilité 1/2 : le pgcd est un facteur non trivial avec probabilité 1 − 2^{1−r} ≥ 1/2." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "cz-crt": { t: "Théorème chinois pour les polynômes", b: R`$$P = \prod P_i,\ P_i\wedge P_j = 1\ \Longrightarrow\ \mathbb F_q[X]/(P)\simeq\prod_i\mathbb F_q[X]/(P_i).$$` },
  "cz-corps": { t: "Corps de rupture", b: R`$$\begin{gathered}P_i\text{ irréductible},\ \deg P_i = d\ \Longrightarrow\ |\mathbb F_q[X]/(P_i)| = q^d,\\[4pt]\text{groupe multiplicatif d'ordre }q^d-1.\end{gathered}$$` },
  "cz-ddf": { t: "Les polynômes X^(qⁿ) − X", b: R`$$X^{q^n}-X = \prod_{\substack{P\text{ irr. unitaire}\\\deg P\mid n}}P;\qquad P\wedge(X^{q^n}-X) = \prod_{\substack{P_i\mid P\\\deg P_i\mid n}}P_i.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $q$ est une puissance d'un premier impair. $P\in\mathbb F_q[X]$ est unitaire de degré $n = rd$, produit de $r\geqslant2$ irréductibles unitaires distincts $P_1,\dots,P_r$, tous de degré $d$. Un <b>pas</b> de l'algorithme : tirer $Q$ uniformément parmi les polynômes de degré $\lt n$ ; si $Q\wedge P\neq1$, renvoyer $Q\wedge P$ ; sinon renvoyer $\big(Q^{\frac{q^d-1}2}-1\big)\wedge P$ (calculé modulo $P$). On veut montrer qu'il renvoie un <b>facteur non trivial</b> de $P$ avec probabilité au moins $\frac12$.</p>`;

const figCRT = (() => { let b = ""; const sg = ["+1", "−1", "+1", "−1", "+1"];
  b += `<rect x="20" y="95" width="110" height="50" rx="8" class="hb" style="opacity:.25"/><rect x="20" y="95" width="110" height="50" rx="8" class="vb" style="fill:none"/>` + S(75, 116, "Q mod P", "middle", "sm") + S(75, 134, "uniforme", "middle", "sm");
  sg.forEach((s, i) => { const y = 20 + 45 * i; b += `<line x1="130" y1="120" x2="200" y2="${y + 18}" class="thin"/><rect x="200" y="${y}" width="150" height="36" rx="6" class="${s === "+1" ? "hg" : "hr"}" style="opacity:.3"/><rect x="200" y="${y}" width="150" height="36" rx="6" class="${s === "+1" ? "vg" : "vr"}" style="fill:none"/>` + S(275, y + 23, `Yᵢ^((q^d−1)/2) = ${s}`, "middle", "sm") + S(190, y + 23, `P${["₁", "₂", "₃", "₄", "₅"][i]}`, "end", "sm"); });
  b += S(380, 90, "Q^((q^d−1)/2) − 1 est divisible", "start", "sm") + S(380, 108, "exactement par les Pᵢ « +1 » :", "start", "sm") + S(380, 130, "pgcd = P₁ P₃ P₅", "start", "sm g") + S(380, 160, "Échec seulement si tous les", "start", "sm") + S(380, 178, "signes sont égaux : 2 · 2⁻ʳ.", "start", "sm");
  return FIG(600, 250, b, R`Par le théorème chinois, $Q$ inversible modulo $P$ correspond à $r$ éléments $Y_i\in\big(\mathbb F_q[X]/(P_i)\big)^*$, indépendants et uniformes. Chaque $Y_i^{(q^d-1)/2}$ vaut $\pm1$ avec probabilité $\frac12$ (carré ou non). Le pgcd récolte les $P_i$ marqués $+1$ ; il est non trivial dès que les signes ne sont pas tous égaux.`, "Pile ou face sur chaque facteur"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "cz-1", ...P, part: "Partie I", time: "20 min",
  title: "Carrés dans un corps fini",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $\mathbb K$ un corps fini à $Q_0$ éléments, $Q_0$ impair, et $f : \mathbb K^*\to\mathbb K^*$, $x\mapsto x^{\frac{Q_0-1}2}$.</p><ol start="1">
<li>Montrer que $f$ est à valeurs dans $\{1,-1\}$, et que $f^{-1}(\{1\})$ et $f^{-1}(\{-1\})$ ont chacun $\frac{Q_0-1}2$ éléments.</li>
<li>Montrer que $f^{-1}(\{1\})$ est exactement l'ensemble des carrés de $\mathbb K^*$.</li></ol>`,
  decode: { donnees: [R`Lagrange dans $\mathbb K^*$, racines d'un polynôme dans un corps.`], but: R`Montrer que $x^{\frac{Q_0-1}2}$ est « pile ou face » équilibré.`, cles: {} },
  steps: [
    Q(1, "Deux valeurs équiprobables", R`<p>$y = f(x)$ vérifie $y^2 = 1$. Les deux ensembles sont racines de $X^{\frac{Q_0-1}2}\mp1$.</p>`, R`<p>Par Lagrange, $x^{Q_0-1} = 1$, donc $y = f(x)$ vérifie $y^2 = 1$, soit $y\in\{1,-1\}$ ($\mathbb K$ est un corps, $1\neq-1$ car $Q_0$ impair). Ainsi $\mathbb K^* = f^{-1}(1)\sqcup f^{-1}(-1)$. Chacun de ces ensembles est contenu dans l'ensemble des racines de $X^{\frac{Q_0-1}2}-1$ (resp. $+1$), qui en a au plus $\frac{Q_0-1}2$. Comme leurs cardinaux ont pour somme $Q_0-1$, chacun vaut exactement $\frac{Q_0-1}2$.</p>`),
    Q(2, "Critère d'Euler", R`<p>Les carrés non nuls sont dans $f^{-1}(1)$, et ils sont $\frac{Q_0-1}2$.</p>`, R`<p>Si $x = z^2$, $f(x) = z^{Q_0-1} = 1$. L'application $z\mapsto z^2$ sur $\mathbb K^*$ a pour noyau $\{\pm1\}$, donc son image a $\frac{Q_0-1}2$ éléments, tous dans $f^{-1}(1)$ qui a le même cardinal : c'est l'égalité.</p>`)
  ],
  piege: R`L'hypothèse $q$ impair est essentielle : en caractéristique $2$, tout élément est un carré et $\frac{q-1}2$ n'est pas entier. On utilise alors une autre variante (trace).`,
  methode: R`Dans $\mathbb F_{Q_0}^*$, l'exposant $\frac{Q_0-1}2$ partage le groupe en deux moitiés égales (carrés et non-carrés).`
},

/* ===================== Partie II ===================== */
{ id: "cz-2", ...P, part: "Partie II", time: "35 min",
  title: "Probabilité de succès",
  enonce: PRE + R`<p><b>Partie II.</b> On note $\mathbb K_i = \mathbb F_q[X]/(P_i)$ (corps à $q^d$ éléments), $A = \mathbb F_q[X]/(P)$, et $\varphi : A\to\prod\mathbb K_i$ l'isomorphisme chinois. On note $e = \frac{q^d-1}2$.</p><ol start="3">
<li>Montrer que si $Q\wedge P\neq1$, la réponse est un facteur non trivial de $P$.</li>
<li>Conditionnellement à $Q\wedge P = 1$, $Y = Q\bmod P$ est uniforme sur $A^*$. Montrer que les composantes $Y_i = Q\bmod P_i$ sont indépendantes et uniformes sur $\mathbb K_i^*$.</li>
<li>Montrer que $P_i$ divise $Q^e-1$ si et seulement si $Y_i^e = 1$. En déduire que $(Q^e-1)\wedge P = P$ avec probabilité $2^{-r}$, et $= 1$ avec probabilité $2^{-r}$.</li>
<li>Conclure : $\mathbb P(\text{facteur non trivial})\geqslant1-2^{1-r}\geqslant\frac12$.</li></ol>`,
  decode: { donnees: [R`Théorème chinois, Partie I.`], but: R`Calculer la probabilité d'obtenir un facteur non trivial.`, cles: {} },
  steps: [
    Q(3, "Le cas chanceux", R`<p>$Q\wedge P$ divise $P$, est unitaire, de degré $\leqslant\deg Q\lt n$.</p>`, R`<p>$Q\wedge P$ divise $P$ ; il n'est pas égal à $1$ par hypothèse, et son degré est $\leqslant\deg Q\lt n = \deg P$ (si $Q = 0$, $Q\wedge P = P$ : on exclut ce tirage, ou on considère $\deg 0 = -\infty$ et on recommence). C'est un facteur non trivial. (Le livre écrit « si $Q\wedge P = 1$ » : c'est « $\neq1$ ».)</p>`),
    Q(4, "Indépendance des composantes", R`<p>$\varphi$ est une bijection $A^*\to\prod\mathbb K_i^*$ ; une loi uniforme sur un produit a des marges indépendantes uniformes.</p>`, R`<p>$\varphi$ induit une bijection $A^*\to\prod_i\mathbb K_i^*$ (un élément est inversible si et seulement si chaque composante l'est). Donc $(Y_1,\dots,Y_r) = \varphi(Y)$ est uniforme sur $\prod\mathbb K_i^*$, ensemble de cardinal $(q^d-1)^r$ : pour tous $c_i\in\mathbb K_i^*$,</p>$$\mathbb P(Y_1 = c_1,\dots,Y_r = c_r) = \frac1{(q^d-1)^r} = \prod_i\frac1{q^d-1}.$$<p>En sommant sur les $c_j$, $j\neq i$ : $\mathbb P(Y_i = c_i) = \frac1{q^d-1}$, et la probabilité jointe est le produit des marginales : indépendance.</p>`, ["cz-crt", "cz-corps"]),
    Q(5, "Les deux cas triviaux", R`<p>$P_i\mid Q^e-1\iff Q^e\equiv1\pmod{P_i}\iff Y_i^e = 1$ dans $\mathbb K_i$.</p>`, R`<p>$P_i\mid Q^e-1$ équivaut à $Q^e = 1$ dans $\mathbb K_i$, soit $Y_i^e = 1$. Par la Partie I (avec $Q_0 = q^d$), $\mathbb P(Y_i^e = 1) = \frac12$. Les $P_i$ étant premiers entre eux, $(Q^e-1)\wedge P = \prod_{i : Y_i^e = 1}P_i$. Par indépendance :</p>$$\mathbb P\big((Q^e-1)\wedge P = P\big) = \prod_i\mathbb P(Y_i^e = 1) = 2^{-r},$$$$\mathbb P\big((Q^e-1)\wedge P = 1\big) = \prod_i\mathbb P(Y_i^e = -1) = 2^{-r}.$$`),
    Q(6, "Conclusion", R`<p>Hors de ces deux cas, le pgcd est un facteur non trivial.</p>`, R`<p>Sachant $Q\wedge P = 1$, l'algorithme échoue seulement si $(Q^e-1)\wedge P\in\{1,P\}$, de probabilité $2\cdot2^{-r} = 2^{1-r}$. Sachant $Q\wedge P\neq1$, il réussit toujours (Q3). Donc</p><div class="sbox">$$\mathbb P(\text{succès})\geqslant1-2^{1-r}\geqslant1-\frac12 = \frac12\quad(r\geqslant2).$$</div><p>Plus $P$ a de facteurs, meilleure est la probabilité. En répétant les tirages indépendamment, le nombre moyen de pas avant un succès est au plus $2$.</p>${figCRT}`)
  ],
  piege: R`Le pas renvoie toujours un diviseur de $P$ ; c'est la <b>non-trivialité</b> qui est aléatoire. Il faut donc tester le résultat et recommencer en cas d'échec.`,
  methode: R`Algorithme probabiliste : par le théorème chinois, un tirage uniforme modulo $P$ devient $r$ tirages indépendants modulo les $P_i$, et un « test » qui coupe chaque corps en deux moitiés sépare les facteurs avec bonne probabilité.`
},

/* ===================== Partie III ===================== */
{ id: "cz-3", ...P, part: "Partie III", time: "30 min",
  title: "En pratique",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Sur $\mathbb F_5$, factoriser $P = X^2+1$ par un pas de l'algorithme avec $Q = X+1$.</li>
<li>Expliquer comment se ramener au cadre de l'algorithme pour un polynôme quelconque de $\mathbb F_q[X]$ : facteurs carrés ($P\wedge P'$), puis séparation des degrés à l'aide de $X^{q^k}-X$.</li>
<li>Montrer que $P\wedge(X^q-X)$ est le produit des $X-\alpha$, $\alpha$ racine de $P$ dans $\mathbb F_q$. En déduire un algorithme probabiliste qui trouve une racine de $P$ dans $\mathbb F_q$ s'il en existe.</li></ol>`,
  decode: { donnees: [R`Parties I-II, rappel sur $X^{q^n}-X$.`], but: R`Mettre l'algorithme en œuvre.`, cles: {} },
  steps: [
    Q(7, "Un exemple à la main", R`<p>$d = 1$, $e = \frac{5-1}2 = 2$. Modulo $X^2+1$, $X^2 = -1$.</p>`, R`<p>Dans $\mathbb F_5$, $-1 = 4 = 2^2$, donc $X^2+1 = (X-2)(X+2) = (X-2)(X-3)$ : $r = 2$, $d = 1$, $e = 2$. $Q = X+1$ est premier avec $P$ ($Q(2) = 3$, $Q(3) = 4$ non nuls). Modulo $P$ : $Q^2 = X^2+2X+1\equiv2X$. Donc $Q^e-1\equiv2X-1$, et $(2X-1)\wedge(X^2+1)$ : la racine de $2X-1$ est $X = 2^{-1} = 3$, et $3^2+1 = 10\equiv0$. Le pgcd vaut $X-3$ : on a trouvé un facteur, et $P = (X-3)(X-2)$.</p><p>Vérification par la Partie II : $Y_1 = Q(2) = 3$, $Y_1^2 = 9 = 4 = -1$ ; $Y_2 = Q(3) = 4$, $Y_2^2 = 16 = 1$. Signes différents : succès, et le pgcd est le facteur où le signe vaut $+1$, c'est-à-dire $X-3$.</p>`),
    Q(8, "Préparation d'un polynôme quelconque", R`<p>$P\wedge P'$ ; puis $D_k = P_{(k)}\wedge(X^{q^k}-X)$ itérativement.</p>`, R`<p><b>Facteurs carrés.</b> Si $P\wedge P'\neq1$, on obtient un facteur (ou, si $P' = 0$, $P$ est une puissance $p$-ième : $P = R(X^p) = \tilde R^p$, et on recommence avec $\tilde R$). On se ramène ainsi à $P$ sans facteur carré.</p><p><b>Séparation des degrés.</b> Pour $P$ sans facteur carré, $D_1 = P\wedge(X^q-X)$ est le produit de ses facteurs irréductibles de degré $1$ (rappel). On remplace $P$ par $\frac P{D_1}$, puis $D_2 = P\wedge(X^{q^2}-X)$ donne le produit des facteurs de degré $2$, etc. Chaque $D_k$ est produit d'irréductibles distincts de même degré $k$ : c'est le cadre de l'algorithme, qu'on applique récursivement à chaque facteur trouvé. Les puissances $X^{q^k}$ se calculent modulo $P$ par exponentiation rapide.</p>`, ["cz-ddf"]),
    Q(9, "Recherche de racines", R`<p>Rappel avec $n = 1$ ; puis Cantor-Zassenhaus avec $d = 1$, $e = \frac{q-1}2$.</p>`, R`<p>Par le rappel ($n = 1$), $X^q-X = \prod_{\alpha\in\mathbb F_q}(X-\alpha)$, donc $D = P\wedge(X^q-X) = \prod(X-\alpha)$ sur les racines distinctes $\alpha\in\mathbb F_q$ de $P$. Si $D = 1$, pas de racine. Si $\deg D = 1$, $D = X-\alpha$ donne la racine. Sinon $D$ est produit de $r\geqslant2$ facteurs de degré $1$ : un pas de Cantor-Zassenhaus avec $Q = X+c$ ($c$ aléatoire) et $e = \frac{q-1}2$ le coupe avec probabilité $\geqslant\frac12$ ; on recommence sur le plus petit morceau. On trouve une racine en un nombre moyen d'étapes $O(\log\deg P)$, chacune coûtant des exponentiations modulaires : c'est très efficace, même pour $q$ très grand (là où tester les $q$ valeurs est impossible).</p>`)
  ],
  piege: R`Avec $Q$ constant, les $Y_i$ sont tous égaux : le test ne sépare jamais rien. Il faut des $Q$ « génériques » (au moins de degré $1$ quand $d = 1$, avec un coefficient aléatoire).`,
  methode: R`Factorisation sur $\mathbb F_q$ : sans facteur carré ($P\wedge P'$), séparation des degrés ($X^{q^k}-X$), puis séparation des facteurs de même degré (Cantor-Zassenhaus).`
}
]);
})();

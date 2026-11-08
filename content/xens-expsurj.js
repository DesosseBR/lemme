/* Commando X-ENS · Aller plus loin · Sujet « Surjectivité de l'exponentielle matricielle ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 5, plus: "expsurj",
  sujet: "L'exponentielle est surjective de Mₙ(ℂ) sur GLₙ(ℂ)",
  sujetDesc: "Pour C inversible, on travaille dans l'algèbre commutative ℂ[C] : l'exponentielle y est un morphisme de groupes (ℂ[C], +) → (ℂ[C]*, ×), dont l'image est un sous-groupe ouvert (inversion locale) donc fermé ; ℂ[C]* est connexe (une droite complexe privée d'un nombre fini de points l'est), donc l'image est ℂ[C]* tout entier, qui contient C. Sur ℝ : exp(Mₙ(ℝ)) est l'ensemble des carrés de GLₙ(ℝ)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "es-inv": { t: "Inversion locale", b: R`$$Df(a)\text{ isomorphisme}\ \Longrightarrow\ \exists V\ni a,\ f(V)\text{ ouvert},\ f : V\to f(V)\ \mathcal C^1\text{-difféomorphisme}.$$` },
  "es-ouf": { t: "Sous-groupes ouverts", b: R`$$H\leqslant G\text{ ouvert}\ \Longrightarrow\ G\setminus H = \bigcup_{g\notin H}gH\text{ ouvert}\Rightarrow H\text{ fermé};\qquad G\text{ connexe}\Rightarrow H = G.$$` },
  "es-ch": { t: "Inverse polynomial", b: R`<p>Si $M\in GL_n(\mathbb C)$, Cayley-Hamilton donne $\chi_M(M) = 0$ avec $\chi_M(0) = \pm\det M\neq0$, d'où $M^{-1}\in\mathbb C[M]$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Pour $C\in\mathcal M_n(\mathbb C)$, on note $\mathbb C[C] = \{P(C) : P\in\mathbb C[X]\}$ et $\mathbb C[C]^* = \mathbb C[C]\cap GL_n(\mathbb C)$. On admet que $\exp(A+B) = \exp A\exp B$ si $AB = BA$, et que $\exp$ est de classe $\mathcal C^1$ avec $D\exp(0) = \mathrm{id}$. On veut montrer que $\exp : \mathcal M_n(\mathbb C)\to GL_n(\mathbb C)$ est <b>surjective</b>.</p>`;

/* Figure : chemin évitant les racines */
const figChemin = (() => { const X = x => 70 + 300 * x, Y = y => 140 - 300 * y; let b = `<line x1="30" y1="140" x2="430" y2="140" class="ax"/><line x1="70" y1="30" x2="70" y2="250" class="ax"/>`;
  const roots = [[0.5, 0], [0.3, 0.22], [0.75, -0.12], [1.15, 0.15]];
  b += `<path d="M${X(0)} ${Y(0)} C ${X(0.2)} ${Y(-0.18)}, ${X(0.55)} ${Y(-0.2)}, ${X(0.62)} ${Y(-0.05)} S ${X(0.9)} ${Y(0.12)}, ${X(1)} ${Y(0)}" class="vb" style="fill:none;stroke-width:2.2"/>`;
  b += `<line x1="${X(0)}" y1="${Y(0)}" x2="${X(1)}" y2="${Y(0)}" class="vk" style="stroke-dasharray:4 4"/>`;
  roots.forEach(([x, y]) => { b += `<g transform="translate(${X(x)},${Y(y)})"><line x1="-6" y1="-6" x2="6" y2="6" class="vr" style="stroke-width:2.2"/><line x1="-6" y1="6" x2="6" y2="-6" class="vr" style="stroke-width:2.2"/></g>`; });
  b += `<circle cx="${X(0)}" cy="${Y(0)}" r="4.5" class="ptb"/><circle cx="${X(1)}" cy="${Y(0)}" r="4.5" class="ptb"/>` + S(X(0) - 6, Y(0) + 18, "0 : A", "end", "sm b") + S(X(1) + 6, Y(0) + 18, "1 : B", "start", "sm b") + S(X(0.3), Y(0) + 18, "segment réel bloqué", "middle", "sm");
  b += S(X(0.62), Y(-0.2) + 22, "γ(t) évite les racines de P", "middle", "sm b") + S(X(1.15) - 10, Y(0.15) - 10, "racines de P", "end", "sm r");
  return FIG(460, 270, b, R`Les racines de $P(z) = \det\big((1-z)A+zB\big)$ (croix) sont en nombre fini. Le segment réel $[0,1]$ peut en contenir, mais un chemin complexe $\gamma$ de $0$ à $1$ les contourne, et $t\mapsto(1-\gamma(t))A+\gamma(t)B$ relie $A$ à $B$ dans $\mathbb C[C]^*$. Sur $\mathbb R$, ce contournement est impossible : $GL_n(\mathbb R)$ n'est pas connexe.`, "Connexité de ℂ[C]*"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "expsurj-1", ...P, part: "Partie I", time: "25 min",
  title: "L'algèbre ℂ[C]",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $C\in\mathcal M_n(\mathbb C)$.</p><ol start="1">
<li>Montrer que $\mathbb C[C]$ est une sous-algèbre commutative fermée de $\mathcal M_n(\mathbb C)$, et que $\exp(M)\in\mathbb C[C]$ pour tout $M\in\mathbb C[C]$.</li>
<li>Montrer que $\mathbb C[C]^*$ est un sous-groupe de $GL_n(\mathbb C)$, ouvert dans $\mathbb C[C]$.</li>
<li>Montrer que $\exp : (\mathbb C[C],+)\to(\mathbb C[C]^*,\times)$ est un morphisme de groupes.</li></ol>`,
  decode: { donnees: [R`Dimension finie, Cayley-Hamilton.`], but: R`Se placer dans un cadre commutatif où $\exp$ est un morphisme.`, cles: {} },
  steps: [
    Q(1, "Une algèbre commutative fermée", R`<p>Sous-espace de dimension finie, donc fermé. $\exp(M)$ est limite de sommes partielles dans $\mathbb C[C]$.</p>`, R`<p>$\mathbb C[C]$ est l'image de $\mathbb C[X]$ par le morphisme d'algèbres $P\mapsto P(C)$ : c'est une sous-algèbre, commutative car $P(C)Q(C) = (PQ)(C) = Q(C)P(C)$. C'est un sous-espace vectoriel de l'espace de dimension finie $\mathcal M_n(\mathbb C)$ : il est fermé. Pour $M\in\mathbb C[C]$, les sommes partielles $\sum_{k\leqslant N}\frac{M^k}{k!}$ sont dans $\mathbb C[C]$, et convergent vers $\exp M$ : donc $\exp M\in\mathbb C[C]$.</p>`),
    Q(2, "Le groupe des inversibles", R`<p>Pour $M\in\mathbb C[C]^*$ : $M^{-1}\in\mathbb C[M]\subset\mathbb C[C]$.</p>`, R`<p>$I_n\in\mathbb C[C]^*$, et $\mathbb C[C]^*$ est stable par produit. Si $M\in\mathbb C[C]^*$, $M^{-1}\in\mathbb C[M]$ (rappel), et $\mathbb C[M]\subset\mathbb C[C]$ car $M$ est un polynôme en $C$. Donc $M^{-1}\in\mathbb C[C]^*$ : c'est un sous-groupe. Il est ouvert dans $\mathbb C[C]$ : c'est $\mathbb C[C]\cap GL_n(\mathbb C)$, avec $GL_n(\mathbb C) = \det^{-1}(\mathbb C^*)$ ouvert.</p>`, ["es-ch"]),
    Q(3, "Un morphisme de groupes", R`<p>Tous les éléments de $\mathbb C[C]$ commutent.</p>`, R`<p>Pour $M\in\mathbb C[C]$, $\exp M\in\mathbb C[C]$ (Q1) et $\exp M\exp(-M) = \exp(0) = I_n$ : $\exp M\in\mathbb C[C]^*$. Pour $M,N\in\mathbb C[C]$, $MN = NM$, donc $\exp(M+N) = \exp M\exp N$ : $\exp$ est un morphisme de $(\mathbb C[C],+)$ dans $(\mathbb C[C]^*,\times)$. Son image $\exp(\mathbb C[C])$ est donc un sous-groupe de $\mathbb C[C]^*$.</p>`)
  ],
  piege: R`Sur $\mathcal M_n(\mathbb C)$ tout entier, $\exp$ n'est pas un morphisme ($\exp(A+B)\neq\exp A\exp B$ en général) : c'est pourquoi on se restreint à l'algèbre commutative $\mathbb C[C]$.`,
  methode: R`Pour exploiter une exponentielle non commutative, se placer dans une algèbre commutative (ici $\mathbb C[C]$) où elle devient un morphisme.`
},

/* ===================== Partie II ===================== */
{ id: "expsurj-2", ...P, part: "Partie II", time: "35 min",
  title: "Un sous-groupe ouvert d'un groupe connexe",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que $\mathbb C[C]^*$ est connexe par arcs. (Pour $A,B\in\mathbb C[C]^*$, considérer $P(z) = \det\big((1-z)A+zB\big)$.)</li>
<li>Montrer que $\exp(\mathbb C[C])$ contient un voisinage de $I_n$ dans $\mathbb C[C]$, puis qu'il est ouvert dans $\mathbb C[C]^*$.</li>
<li>Conclure que $\exp(\mathbb C[C]) = \mathbb C[C]^*$, puis que $\exp : \mathcal M_n(\mathbb C)\to GL_n(\mathbb C)$ est surjective. Montrer de plus que toute $C\in GL_n(\mathbb C)$ est l'exponentielle d'un polynôme en $C$.</li></ol>`,
  decode: { donnees: [R`Partie I, inversion locale.`], but: R`Montrer $\exp(\mathbb C[C]) = \mathbb C[C]^*$ par connexité.`, cles: {} },
  steps: [
    Q(4, "Connexité de ℂ[C]*", R`<p>$P$ est un polynôme non nul ($P(0) = \det A\neq0$), donc a un nombre fini de racines ; $\mathbb C$ privé d'un ensemble fini est connexe par arcs.</p>`, R`<p>$P(z) = \det((1-z)A+zB)$ est un polynôme en $z$ (développement du déterminant), avec $P(0) = \det A\neq0$ et $P(1) = \det B\neq0$. Il a un nombre fini de racines $z_1,\dots,z_m$, différentes de $0$ et $1$. Comme $\mathbb C\setminus\{z_1,\dots,z_m\}$ est connexe par arcs, il existe $\gamma : [0,1]\to\mathbb C\setminus\{z_i\}$ continue avec $\gamma(0) = 0$, $\gamma(1) = 1$. Alors $t\mapsto(1-\gamma(t))A+\gamma(t)B$ est un chemin continu de $A$ à $B$, à valeurs dans $\mathbb C[C]$ (combinaison linéaire) et inversible ($P(\gamma(t))\neq0$) : il reste dans $\mathbb C[C]^*$.</p>${figChemin}`),
    Q(5, "L'image est ouverte", R`<p>Inversion locale pour $\exp : \mathbb C[C]\to\mathbb C[C]$ en $0$. Puis translater par $\exp A$.</p>`, R`<p>$\exp$ est $\mathcal C^1$ de $\mathbb C[C]$ (de dimension finie) dans lui-même, de différentielle $\mathrm{id}$ en $0$. Par inversion locale, il existe un voisinage $U$ de $0$ tel que $V = \exp(U)$ soit un ouvert de $\mathbb C[C]$ contenant $I_n$ ; quitte à le réduire, $V\subset\mathbb C[C]^*$.</p><p>Soit $M = \exp A\in\exp(\mathbb C[C])$. L'application $L : N\mapsto(\exp A)^{-1}N$ est continue de $\mathbb C[C]$ dans lui-même, donc $(\exp A)V = L^{-1}(V)$ est ouvert, contient $M$, et est inclus dans $\exp(\mathbb C[C])$ car $\exp A\exp B = \exp(A+B)$ pour $\exp B\in V$. Ainsi $\exp(\mathbb C[C])$ est un ouvert de $\mathbb C[C]^*$.</p>`, ["es-inv"]),
    Q(6, "Conclusion", R`<p>Sous-groupe ouvert $\Rightarrow$ fermé ; connexité. Puis $C\in\mathbb C[C]^*$.</p>`, R`<p>$\exp(\mathbb C[C])$ est un sous-groupe ouvert de $\mathbb C[C]^*$ (Q3, Q5), donc aussi fermé dans $\mathbb C[C]^*$ (rappel), et non vide. Comme $\mathbb C[C]^*$ est connexe (Q4), $\exp(\mathbb C[C]) = \mathbb C[C]^*$.</p><p>Soit $C\in GL_n(\mathbb C)$. Alors $C\in\mathbb C[C]^*$, donc il existe $M\in\mathbb C[C]$, c'est-à-dire $M = P(C)$, avec $\exp(P(C)) = C$.</p><div class="sbox"><p>$\exp : \mathcal M_n(\mathbb C)\to GL_n(\mathbb C)$ est surjective, et toute matrice inversible a un logarithme qui est un polynôme en elle.</p></div>`, ["es-ouf"])
  ],
  piege: R`L'argument de connexité échoue sur $\mathbb R$ : $\mathbb R$ privé d'un point n'est pas connexe, et $\mathbb R[C]^*$ peut ne pas l'être (par exemple $\mathbb R[I_n]^* = \mathbb R^*I_n$).`,
  methode: R`Pour montrer qu'un morphisme continu à valeurs dans un groupe connexe est surjectif : montrer que son image est un sous-groupe ouvert (inversion locale).`
},

/* ===================== Partie III ===================== */
{ id: "expsurj-3", ...P, part: "Partie III", time: "30 min",
  title: "Le cas réel",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Montrer que $\exp(\mathcal M_n(\mathbb R))\subset\{A^2 : A\in GL_n(\mathbb R)\}$.</li>
<li>Réciproquement, soit $A\in GL_n(\mathbb R)$ et $P\in\mathbb C[X]$ avec $\exp(P(A)) = A$ (Partie II). Montrer que $A^2 = \exp\big((P+\bar P)(A)\big)$ et conclure : $\exp(\mathcal M_n(\mathbb R)) = \{A^2 : A\in GL_n(\mathbb R)\}$.</li>
<li>Montrer que $-I_2\in\exp(\mathcal M_2(\mathbb R))$, mais que $T = \begin{pmatrix}-1&1\\0&-1\end{pmatrix}$ n'y est pas, bien que $\det T>0$.</li></ol>`,
  decode: { donnees: [R`Partie II.`], but: R`Déterminer l'image de l'exponentielle réelle.`, cles: {} },
  steps: [
    Q(7, "Toute exponentielle réelle est un carré", R`<p>$\exp M = \big(\exp\frac M2\big)^2$.</p>`, R`<p>Pour $M\in\mathcal M_n(\mathbb R)$, $\frac M2$ commute avec lui-même, donc $\exp M = \big(\exp\frac M2\big)^2$ avec $\exp\frac M2\in GL_n(\mathbb R)$. En particulier $\det\exp M = e^{\mathrm{tr}M}>0$.</p>`),
    Q(8, "Tout carré inversible est une exponentielle réelle", R`<p>Conjuguer $\exp(P(A)) = A$ : $\overline{\exp(P(A))} = \exp(\bar P(\bar A)) = \exp(\bar P(A))$. $P(A)$ et $\bar P(A)$ commutent.</p>`, R`<p>$A$ étant réelle, en conjuguant les coefficients : $A = \bar A = \overline{\exp(P(A))} = \exp(\bar P(A))$, où $\bar P$ a les coefficients conjugués. Comme $P(A)$ et $\bar P(A)$ commutent (polynômes en $A$) :</p>$$A^2 = \exp(P(A))\exp(\bar P(A)) = \exp\big((P+\bar P)(A)\big),$$<p>et $(P+\bar P)(A) = 2\,\mathrm{Re}(P)(A)$ est réelle. Avec Q7 : $\exp(\mathcal M_n(\mathbb R)) = \{A^2,\ A\in GL_n(\mathbb R)\}$.</p>`),
    Q(9, "Exemples", R`<p>$-I_2 = \exp\begin{pmatrix}0&-\pi\\\pi&0\end{pmatrix}$. Si $T = B^2$ avec $B$ réelle, les valeurs propres de $B$ sont de carré $-1$.</p>`, R`<p>$\exp\begin{pmatrix}0&-\theta\\\theta&0\end{pmatrix}$ est la rotation d'angle $\theta$ ; pour $\theta = \pi$, c'est $-I_2$.</p><p>Supposons $T = B^2$, $B\in\mathcal M_2(\mathbb R)$. Les valeurs propres $\beta$ de $B$ vérifient $\beta^2\in\mathrm{Sp}(T) = \{-1\}$, donc $\beta\in\{i,-i\}$. Comme $B$ est réelle, son polynôme caractéristique est réel : $\mathrm{Sp}(B) = \{i,-i\}$ (pas $\{i,i\}$, de trace $2i$ non réelle). Alors $B$ a deux valeurs propres distinctes : elle est diagonalisable sur $\mathbb C$, donc $T = B^2$ aussi. Or $T$ n'est pas diagonalisable ($T+I_2\neq0$ mais $(T+I_2)^2 = 0$). Contradiction : $T$ n'est pas un carré réel, donc $T\notin\exp(\mathcal M_2(\mathbb R))$, alors que $T\in GL_2^+(\mathbb R)$. Ainsi $\exp(\mathcal M_n(\mathbb R))\subsetneq GL_n^+(\mathbb R)$.</p>`)
  ],
  piege: R`$\det(\exp M)>0$ est nécessaire mais pas suffisant pour être une exponentielle réelle (Q9) : la bonne condition est d'être le carré d'une matrice réelle inversible.`,
  methode: R`Passer de $\mathbb C$ à $\mathbb R$ : conjuguer l'égalité obtenue sur $\mathbb C$ et combiner, en profitant de la commutation des polynômes en $A$.`
}
]);
})();

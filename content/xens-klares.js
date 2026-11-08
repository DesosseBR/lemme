/* Commando X-ENS · Aller plus loin · Sujet « Critère de Klarès ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 5, plus: "klar",
  sujet: "Critère de Klarès : diagonalisabilité et endomorphisme ad_u",
  sujetDesc: "Pour u trigonalisable, on note ad_u(v) = uv − vu. Alors u est diagonalisable si et seulement si Ker ad_u = Ker ad_u², c'est-à-dire si et seulement si le commutant de u est en somme directe avec l'image de ad_u. Sens direct : ad_u = G_u − D_u est diagonalisable. Réciproque : la partie nilpotente n de Dunford commute avec u, et on l'écrit comme un crochet [u, v] grâce à l'identité J_kM_k − M_kJ_k = J_k, avec M_k = diag(1, …, k)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "kl-dun": { t: "Décomposition de Dunford", b: R`<p>Si $\chi_u$ est scindé, $u = d+n$ avec $d$ diagonalisable, $n$ nilpotent, $dn = nd$, et $d,n$ polynômes en $u$. Sur chaque sous-espace caractéristique $N_\lambda = \ker(u-\lambda)^{m_\lambda}$, $d = \lambda\,\mathrm{id}$.</p>` },
  "kl-jor": { t: "Réduction des nilpotents", b: R`<p>Un endomorphisme nilpotent admet une base dans laquelle sa matrice est $\mathrm{diag}(J_{k_1},\dots,J_{k_r})$, où $J_k$ est le bloc de Jordan nilpotent de taille $k$ ($1$ sur la surdiagonale).</p>` },
  "kl-codiag": { t: "Endomorphismes qui commutent", b: R`<p>Deux endomorphismes diagonalisables qui commutent sont simultanément diagonalisables ; leur somme et leur différence sont diagonalisables. Un endomorphisme annulé par un polynôme scindé à racines simples est diagonalisable.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $E$ est un $K$-espace vectoriel de dimension finie, $u\in\mathcal L(E)$ <b>trigonalisable</b>. On note $\mathrm{ad}_u : \mathcal L(E)\to\mathcal L(E)$, $v\mapsto uv-vu$ (crochet $[u,v]$), et $\mathcal C(u) = \ker\mathrm{ad}_u$ le commutant de $u$. On veut montrer le <b>critère de Klarès</b> : $u$ est diagonalisable si et seulement si $\ker\mathrm{ad}_u = \ker\mathrm{ad}_u^2$.</p>`;

/* Figure : valeurs propres de ad_u */
const figAd = (() => { const L = [1, 2, 4], c = 54, o = 90; let b = "";
  L.forEach((li, i) => { b += S(o - 14, 40 + c * i + c / 2 + 4, `λ${["₁", "₂", "₃"][i]} = ${li}`, "end", "sm"); L.forEach((lj, j) => { const v = li - lj;
    b += `<rect x="${o + c * j}" y="${40 + c * i}" width="${c - 4}" height="${c - 4}" rx="4" class="${v === 0 ? "hg" : v > 0 ? "hb" : "hr"}" style="opacity:.55"/>` + S(o + c * j + (c - 4) / 2, 40 + c * i + c / 2, `E${i + 1}${j + 1}`, "middle", "sm") + S(o + c * j + (c - 4) / 2, 40 + c * i + c / 2 + 16, String(v), "middle", "sm b"); }); });
  L.forEach((lj, j) => { b += S(o + c * j + (c - 4) / 2, 32, `λ${["₁", "₂", "₃"][j]}`, "middle", "sm"); });
  b += S(o + 3 * c + 20, 70, "ad_u(Eᵢⱼ) = (λᵢ − λⱼ) Eᵢⱼ", "start", "sm") + S(o + 3 * c + 20, 100, "diagonale (orange) : valeur propre 0,", "start", "sm") + S(o + 3 * c + 20, 120, "c'est le commutant de u", "start", "sm") + S(o + 3 * c + 20, 150, "les autres cases engendrent Im ad_u", "start", "sm");
  return FIG(560, 220, b, R`Pour $u = \mathrm{diag}(1,2,4)$, les matrices élémentaires $E_{ij}$ sont vecteurs propres de $\mathrm{ad}_u$, de valeurs propres $\lambda_i-\lambda_j$ (nombre en bleu). $\mathrm{ad}_u$ est diagonalisable, $\ker\mathrm{ad}_u$ (diagonales) et $\mathrm{Im}\,\mathrm{ad}_u$ (hors diagonale) sont supplémentaires.`, "Spectre de ad_u"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "klar-1", ...P, part: "Partie I", time: "20 min",
  title: "Préliminaires",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Soit $f\in\mathcal L(F)$ ($F$ de dimension finie). Montrer que $\ker f = \ker f^2\iff\ker f\cap\mathrm{Im}f = \{0\}$.</li>
<li>Montrer que si $f$ est diagonalisable, $\ker f = \ker f^2$.</li>
<li>Pour $u = \begin{pmatrix}1&1\\0&1\end{pmatrix}$, trouver $v$ avec $\mathrm{ad}_u(v)\neq0$ et $\mathrm{ad}_u^2(v) = 0$.</li></ol>`,
  decode: { donnees: [R`Algèbre linéaire de base.`], but: R`Préparer les outils et voir le critère sur un exemple.`, cles: {} },
  steps: [
    Q(1, "Noyaux itérés", R`<p>Si $x = f(y)\in\ker f$, alors $y\in\ker f^2$.</p>`, R`<p>($\Rightarrow$) Si $x = f(y)\in\ker f$, alors $f^2(y) = 0$, donc $y\in\ker f^2 = \ker f$, et $x = f(y) = 0$. ($\Leftarrow$) On a toujours $\ker f\subset\ker f^2$. Si $x\in\ker f^2$, alors $f(x)\in\ker f\cap\mathrm{Im}f = \{0\}$, donc $x\in\ker f$.</p>`),
    Q(2, "Cas diagonalisable", R`<p>Dans une base propre, $f^2(x) = \sum\lambda_i^2x_ie_i$.</p>`, R`<p>Dans une base propre $(e_i)$ de valeurs propres $\lambda_i$, si $f^2(x) = \sum\lambda_i^2x_ie_i = 0$, alors $\lambda_i^2x_i = 0$, donc $\lambda_ix_i = 0$ pour tout $i$, et $f(x) = \sum\lambda_ix_ie_i = 0$.</p>`),
    Q(3, "Un contre-exemple", R`<p>$u = I+N$, $N = E_{12}$, donc $\mathrm{ad}_u = \mathrm{ad}_N$. Essayer $v = E_{11}$.</p>`, R`<p>$\mathrm{ad}_u = \mathrm{ad}_N$ avec $N = E_{12}$ (l'identité commute avec tout). $\mathrm{ad}_N(E_{11}) = E_{12}E_{11}-E_{11}E_{12} = 0-E_{12} = -E_{12}\neq0$, et $\mathrm{ad}_N(E_{12}) = E_{12}E_{12}-E_{12}E_{12} = 0$. Donc $v = E_{11}\in\ker\mathrm{ad}_u^2\setminus\ker\mathrm{ad}_u$ : le critère « détecte » que $u$ n'est pas diagonalisable.</p>`)
  ],
  piege: R`$\ker\mathrm{ad}_u = \ker\mathrm{ad}_u^2$ ne dit pas que $\mathrm{ad}_u$ est injective : son noyau, le commutant, contient toujours $\mathrm{id}$ et $u$.`,
  methode: R`$\ker f = \ker f^2$ signifie que $0$ est une valeur propre « semi-simple » de $f$ (pas de bloc de Jordan de taille $\geqslant2$ pour $0$).`
},

/* ===================== Partie II ===================== */
{ id: "klar-2", ...P, part: "Partie II", time: "25 min",
  title: "Le sens direct",
  enonce: PRE + R`<p><b>Partie II.</b> Pour $w\in\mathcal L(E)$, on note $G_w(f) = wf$ et $D_w(f) = fw$ ($f\in\mathcal L(E)$).</p><ol start="4">
<li>Montrer que $\mathrm{ad}_u = G_u-D_u$, que $G_u$ et $D_u$ commutent, et que $P(G_u) = G_{P(u)}$, $P(D_u) = D_{P(u)}$ pour tout $P\in K[X]$.</li>
<li>En déduire que si $u$ est diagonalisable, $\mathrm{ad}_u$ l'est, puis que $\ker\mathrm{ad}_u = \ker\mathrm{ad}_u^2$.</li>
<li>Si $u$ est diagonale dans la base $(e_i)$ de valeurs propres $\lambda_i$, calculer $\mathrm{ad}_u(E_{ij})$ et retrouver le résultat.</li></ol>`,
  decode: { donnees: [R`Codiagonalisation.`], but: R`Montrer que $u$ diagonalisable entraîne $\mathrm{ad}_u$ diagonalisable.`, cles: {} },
  steps: [
    Q(4, "Multiplications à gauche et à droite", R`<p>$G_uD_u(f) = ufu = D_uG_u(f)$. $G_u^k = G_{u^k}$.</p>`, R`<p>$\mathrm{ad}_u(f) = uf-fu = G_u(f)-D_u(f)$. $G_u(D_u(f)) = u(fu) = (uf)u = D_u(G_u(f))$ : ils commutent. $G_u^k(f) = u^kf = G_{u^k}(f)$, et $w\mapsto G_w$ est linéaire, donc $P(G_u) = G_{P(u)}$. De même $D_u^k(f) = fu^k$, donc $P(D_u) = D_{P(u)}$.</p>`),
    Q(5, "ad_u est diagonalisable", R`<p>$\mu_u$ scindé à racines simples annule $G_u$ et $D_u$.</p>`, R`<p>Si $u$ est diagonalisable, $\mu_u$ est scindé à racines simples et $\mu_u(G_u) = G_{\mu_u(u)} = G_0 = 0$ : $G_u$ est diagonalisable ; de même $D_u$. Comme ils commutent, ils sont codiagonalisables, et $\mathrm{ad}_u = G_u-D_u$ est diagonalisable. Par Q2, $\ker\mathrm{ad}_u = \ker\mathrm{ad}_u^2$.</p>`, ["kl-codiag"]),
    Q(6, "Calcul explicite", R`<p>$uE_{ij} = \lambda_iE_{ij}$ et $E_{ij}u = \lambda_jE_{ij}$.</p>`, R`<p>$u = \sum\lambda_kE_{kk}$, donc $uE_{ij} = \lambda_iE_{ij}$ et $E_{ij}u = \lambda_jE_{ij}$, d'où $\mathrm{ad}_u(E_{ij}) = (\lambda_i-\lambda_j)E_{ij}$. Les $n^2$ matrices $E_{ij}$ forment une base propre de $\mathrm{ad}_u$ : il est diagonalisable, de valeurs propres les $\lambda_i-\lambda_j$. Son noyau est engendré par les $E_{ij}$ avec $\lambda_i = \lambda_j$ (matrices diagonales par blocs), et son image par les autres.</p>${figAd}`)
  ],
  piege: R`$G_u$ et $D_u$ ont les mêmes valeurs propres que $u$, mais $\mathrm{ad}_u$ a pour valeurs propres les différences $\lambda_i-\lambda_j$ ; $0$ est toujours valeur propre.`,
  methode: R`Opérateurs sur $\mathcal L(E)$ : écrire $\mathrm{ad}_u = G_u-D_u$, deux opérateurs qui commutent et héritent des polynômes annulateurs de $u$.`
},

/* ===================== Partie III ===================== */
{ id: "klar-3", ...P, part: "Partie III", time: "40 min",
  title: "La réciproque",
  enonce: PRE + R`<p><b>Partie III.</b> On suppose $\ker\mathrm{ad}_u = \ker\mathrm{ad}_u^2$, et on écrit $u = d+n$ (Dunford).</p><ol start="7">
<li>Montrer que $n\in\ker\mathrm{ad}_u$. Il suffit donc de montrer que $n\in\mathrm{Im}\,\mathrm{ad}_u$ pour conclure que $n = 0$. Pourquoi ?</li>
<li>Soit $M_k = \mathrm{diag}(1,2,\dots,k)$. Montrer que $J_kM_k-M_kJ_k = J_k$.</li>
<li>Sur chaque sous-espace caractéristique $N_\lambda$, on prend une base où $n|_{N_\lambda} = \mathrm{diag}(J_{k_1},\dots,J_{k_r})$, et on définit $v_\lambda$ de matrice $\mathrm{diag}(M_{k_1},\dots,M_{k_r})$. Soit $v$ l'endomorphisme de $E$ qui induit $v_\lambda$ sur chaque $N_\lambda$. Montrer que $uv-vu = n$, et conclure.</li></ol>`,
  decode: { donnees: [R`Dunford, réduction des nilpotents, Q1.`], but: R`Montrer $n\in\ker\mathrm{ad}_u\cap\mathrm{Im}\,\mathrm{ad}_u$.`, cles: {} },
  steps: [
    Q(7, "Le nilpotent est dans le noyau", R`<p>$n$ est un polynôme en $u$. Q1 avec $f = \mathrm{ad}_u$.</p>`, R`<p>$n$ est un polynôme en $u$, donc commute avec $u$ : $n\in\mathcal C(u) = \ker\mathrm{ad}_u$. Par Q1 appliquée à $f = \mathrm{ad}_u$ sur $\mathcal L(E)$, l'hypothèse $\ker\mathrm{ad}_u = \ker\mathrm{ad}_u^2$ équivaut à $\ker\mathrm{ad}_u\cap\mathrm{Im}\,\mathrm{ad}_u = \{0\}$. Si $n\in\mathrm{Im}\,\mathrm{ad}_u$, alors $n = 0$ et $u = d$ est diagonalisable.</p>`, ["kl-dun"]),
    Q(8, "Une identité matricielle", R`<p>$(J_kM_k)_{i,i+1} = i+1$ et $(M_kJ_k)_{i,i+1} = i$.</p>`, R`<p>$J_k$ a des $1$ en positions $(i,i+1)$. $J_kM_k$ multiplie la colonne $i+1$ de $J_k$ par $i+1$ : son coefficient $(i,i+1)$ vaut $i+1$. $M_kJ_k$ multiplie la ligne $i$ par $i$ : coefficient $(i,i+1)$ égal à $i$. Tous les autres coefficients sont nuls. Donc $J_kM_k-M_kJ_k$ a des $(i+1)-i = 1$ sur la surdiagonale : c'est $J_k$.</p>`),
    Q(9, "Conclusion", R`<p>Sur $N_\lambda$ : $u = \lambda\,\mathrm{id}+n$, et $\lambda\,\mathrm{id}$ commute avec $v_\lambda$.</p>`, R`<p>Les $N_\lambda$ sont stables par $u$, $d$, $n$ et $v$, et $E = \bigoplus N_\lambda$ (lemme des noyaux, $\chi_u$ scindé). Sur $N_\lambda$, $d = \lambda\,\mathrm{id}$ (rappel), donc $u|_{N_\lambda} = \lambda\,\mathrm{id}+n_\lambda$, et</p>$$u_\lambda v_\lambda-v_\lambda u_\lambda = n_\lambda v_\lambda-v_\lambda n_\lambda,$$<p>dont la matrice est $\mathrm{diag}(J_{k_i}M_{k_i}-M_{k_i}J_{k_i}) = \mathrm{diag}(J_{k_i})$ par Q8, c'est-à-dire celle de $n_\lambda$. En recollant : $uv-vu = n$, donc $n = \mathrm{ad}_u(v)\in\mathrm{Im}\,\mathrm{ad}_u$. Par Q7, $n = 0$ et</p><div class="sbox"><p>$u$ trigonalisable est diagonalisable $\iff$ $\ker\mathrm{ad}_u = \ker\mathrm{ad}_u^2$ $\iff$ $\mathcal C(u)\cap\mathrm{Im}\,\mathrm{ad}_u = \{0\}$.</p></div>`, ["kl-jor"])
  ],
  piege: R`L'hypothèse « trigonalisable » sert à disposer de Dunford et de la réduction de Jordan. Sur $\mathbb R$, la rotation d'angle $\frac\pi2$ vérifie le critère (elle est semi-simple) sans être diagonalisable.`,
  methode: R`Pour montrer qu'un nilpotent commutant est nul, l'écrire comme un crochet $[u,v]$ : l'identité $[J_k,M_k] = J_k$ est l'astuce clé (c'est la relation $[h,e] = 2e$ de $\mathfrak{sl}_2$ à normalisation près).`
}
]);
})();

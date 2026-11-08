/* Commando X-ENS · Aller plus loin · Sujet « Théorème de Riesz-Fischer ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 12, kind: "probleme", qnav: true, side: true, level: 4, plus: "rf",
  sujet: "Riesz-Fischer : les espaces Lᵖ sont complets",
  sujetDesc: "Une suite de Cauchy de Lᵖ converge dans Lᵖ, et une sous-suite converge presque partout. Pour p = ∞ on passe à la limite point par point hors d'un ensemble négligeable ; pour p < ∞ on extrait une sous-suite qui converge « vite » (écarts sommables), on construit la limite par une série absolument convergente, puis on conclut par Fatou. Contre-exemples : la suite « machine à écrire » et l'espace C([0,1]) muni de ‖·‖₁." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "rf-tcm": { t: "Convergence monotone", b: R`<p>Si $(g_n)$ est une suite croissante de fonctions mesurables positives, de limite $g$, alors $\int g_n\,d\mu\to\int g\,d\mu$ (dans $[0,+\infty]$).</p>` },
  "rf-fatou": { t: "Lemme de Fatou", b: R`<p>Pour des fonctions mesurables positives $h_m$ : $\int\liminf_mh_m\,d\mu\leqslant\liminf_m\int h_m\,d\mu$.</p>` },
  "rf-mink": { t: "Minkowski", b: R`<p>Pour $1\leqslant p\leqslant\infty$ : $\|f+g\|_p\leqslant\|f\|_p+\|g\|_p$. Et $\|f\|_\infty = \inf\{M : |f|\leqslant M\ \mu\text{-p.p.}\}$, avec $|f|\leqslant\|f\|_\infty$ presque partout.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $(X,\mathcal A,\mu)$ est un espace mesuré, $p\in[1,+\infty]$, et $L^p = L^p(X,\mu)$ l'espace des (classes de) fonctions mesurables $f : X\to\mathbb C$ avec $\|f\|_p\lt+\infty$. Soit $(f_n)$ une suite de Cauchy de $L^p$. On veut montrer qu'elle converge dans $L^p$ (<b>théorème de Riesz-Fischer</b>).</p>`;

/* Figure : machine à écrire */
const figTW = (() => { const W = 480, H = 230, o = 40, w = 400; let b = "";
  let row = 0; const rows = []; for (let k = 0; k <= 3; k++) for (let j = 0; j < 2 ** k; j++) rows.push([k, j]);
  rows.slice(0, 15).forEach(([k, j], n) => { const y = 24 + 13 * n, x0 = o + w * j / 2 ** k, x1 = o + w * (j + 1) / 2 ** k;
    b += `<line x1="${o}" y1="${y}" x2="${o + w}" y2="${y}" class="thin"/><rect x="${x0}" y="${y - 5}" width="${x1 - x0}" height="10" rx="2" class="${k % 2 ? "hr" : "hb"}" style="opacity:.75"/>` + S(o - 6, y + 4, `f${["₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₁₀", "₁₁", "₁₂", "₁₃", "₁₄", "₁₅"][n]}`, "end", "sm"); });
  b += S(o, 24 + 13 * 15 + 10, "0", "middle", "sm") + S(o + w, 24 + 13 * 15 + 10, "1", "middle", "sm");
  return FIG(W, H, b, R`La « machine à écrire » : $f_n = \mathbf 1_{[j2^{-k},(j+1)2^{-k}]}$ avec $n = 2^k+j$. On a $\|f_n\|_p = 2^{-k/p}\to0$, mais en chaque point $x$, $f_n(x)$ vaut $1$ une fois par « ligne » $k$ : la suite ne converge en aucun point. La sous-suite $f_{2^k}$ (premier intervalle de chaque ligne) converge vers $0$ sauf en $0$.`, "Machine à écrire"); })();

/* Figure : C([0,1]) non complet pour la norme 1 */
const figRamp = GRAPH({ w: 440, h: 220, x: [0, 1], y: [-0.15, 1.2], xt: [0.5, 1], xtl: ["1/2", "1"], yt: [1], xl: "x",
  curves: [{ f: x => Math.min(1, Math.max(0, (x - 0.5) * 4 + 0.5)), c: "g", lab: [0.72, 0.85, "n = 2"] }, { f: x => Math.min(1, Math.max(0, (x - 0.5) * 12 + 0.5)), c: "r", lab: [0.6, 1.08, "n = 6"] }, { f: x => x < 0.5 ? 0 : 1, c: "b", dash: true, lab: [0.05, 0.12, "limite 𝟙[1/2,1]"] }] },
  R`Les fonctions continues $f_n$ (affines de pente $2n$ autour de $\frac12$) forment une suite de Cauchy pour $\|\cdot\|_1$ : $\|f_n-f_m\|_1\leqslant\frac1{2\min(n,m)}$. Leur limite dans $L^1$ est l'indicatrice de $[\frac12,1]$, qui n'a pas de représentant continu : $(\mathcal C([0,1]),\|\cdot\|_1)$ n'est pas complet, et $L^1([0,1])$ en est le complété.`, "Un espace non complet");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "rf-1", ...P, part: "Partie I", time: "25 min",
  title: "Le cas p = ∞",
  enonce: PRE + R`<p><b>Partie I.</b> On suppose $p = +\infty$.</p><ol start="1">
<li>Montrer qu'il existe un ensemble $E$ négligeable tel que pour tous $n,m$ et tout $x\notin E$ : $|f_n(x)|\leqslant\|f_n\|_\infty$ et $|f_n(x)-f_m(x)|\leqslant\|f_n-f_m\|_\infty$.</li>
<li>En déduire que $(f_n(x))$ converge pour $x\notin E$ ; on note $f(x)$ sa limite et $f = 0$ sur $E$. Montrer que $f$ est mesurable, que $f\in L^\infty$ et que $\|f_n-f\|_\infty\to0$.</li></ol>`,
  decode: { donnees: [R`$|g|\leqslant\|g\|_\infty$ p.p.`], but: R`Se ramener à une convergence uniforme hors d'un négligeable.`, cles: {} },
  steps: [
    Q(1, "Un négligeable universel", R`<p>Réunion dénombrable des ensembles exceptionnels $A_k$ et $B_{n,m}$.</p>`, R`<p>Pour chaque $k$, $A_k = \{|f_k|>\|f_k\|_\infty\}$ est négligeable, et pour chaque $(n,m)$, $B_{n,m} = \{|f_n-f_m|>\|f_n-f_m\|_\infty\}$ aussi (rappel). $E = \bigcup_kA_k\cup\bigcup_{n,m}B_{n,m}$ est une réunion dénombrable de négligeables, donc négligeable, et hors de $E$ les inégalités voulues sont vraies pour tous les indices à la fois.</p>`, ["rf-mink"]),
    Q(2, "Limite uniforme hors de E", R`<p>$(f_n(x))$ est de Cauchy dans $\mathbb C$ ; passer à la limite en $m$ dans $|f_n(x)-f_m(x)|\leqslant\varepsilon$.</p>`, R`<p>Soit $\varepsilon>0$ et $N$ tel que $\|f_n-f_m\|_\infty\leqslant\varepsilon$ pour $n,m\geqslant N$. Pour $x\notin E$, $|f_n(x)-f_m(x)|\leqslant\varepsilon$ : la suite $(f_n(x))$ est de Cauchy dans $\mathbb C$, complet, donc converge. $f = \lim f_n\mathbf 1_{X\setminus E}$ est mesurable (limite simple de fonctions mesurables). En faisant $m\to\infty$ : $|f_n(x)-f(x)|\leqslant\varepsilon$ pour $x\notin E$, $n\geqslant N$, donc $\|f_n-f\|_\infty\leqslant\varepsilon$ ($E$ négligeable). Enfin $\|f\|_\infty\leqslant\|f-f_N\|_\infty+\|f_N\|_\infty\lt\infty$ : $f\in L^\infty$ et $f_n\to f$ dans $L^\infty$.</p>`)
  ],
  piege: R`Il faut un seul négligeable pour toutes les inégalités ; c'est possible car il n'y en a qu'une quantité dénombrable.`,
  methode: R`Dans $L^\infty$, la convergence est la convergence uniforme hors d'un négligeable : on recopie la preuve de la complétude de $(\mathcal B(X),\|\cdot\|_\infty)$.`
},

/* ===================== Partie II ===================== */
{ id: "rf-2", ...P, part: "Partie II", time: "40 min",
  title: "Le cas 1 ≤ p < ∞",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose $1\leqslant p\lt\infty$.</p><ol start="3">
<li>Construire une extraction $\varphi$ telle que $\|f_{\varphi(k+1)}-f_{\varphi(k)}\|_p\leqslant2^{-k}$ pour tout $k$.</li>
<li>On pose $g_n = \sum_{k=0}^n|f_{\varphi(k+1)}-f_{\varphi(k)}|$ et $g = \lim g_n\in[0,+\infty]$. Montrer que $\|g\|_p\leqslant2$, puis que $g\lt\infty$ presque partout.</li>
<li>En déduire que $(f_{\varphi(k)}(x))$ converge pour presque tout $x$ ; on note $f$ la limite (prolongée par $0$).</li>
<li>Montrer, à l'aide du lemme de Fatou, que $\|f-f_n\|_p\to0$ et que $f\in L^p$.</li></ol>`,
  decode: { donnees: [R`Suite de Cauchy, convergence monotone, Fatou.`], but: R`Construire une limite presque partout puis contrôler la norme.`, cles: {} },
  steps: [
    Q(3, "Une sous-suite qui converge vite", R`<p>Pour chaque $k$, il existe $N_k$ avec $\|f_n-f_m\|_p\leqslant2^{-k}$ si $n,m\geqslant N_k$.</p>`, R`<p>Pour tout $k$, soit $N_k$ tel que $\|f_n-f_m\|_p\leqslant2^{-k}$ pour $n,m\geqslant N_k$. On pose $\varphi(0) = N_0$ et $\varphi(k+1) = \max(\varphi(k)+1,N_{k+1})$. Alors $\varphi$ est strictement croissante, et $\varphi(k),\varphi(k+1)\geqslant N_k$ donne $\|f_{\varphi(k+1)}-f_{\varphi(k)}\|_p\leqslant2^{-k}$.</p>`),
    Q(4, "La fonction de contrôle", R`<p>Minkowski pour $\|g_n\|_p$, convergence monotone pour $\int g_n^p$.</p>`, R`<p>Par Minkowski, $\|g_n\|_p\leqslant\sum_{k=0}^n2^{-k}\leqslant2$, soit $\int g_n^p\leqslant2^p$. La suite $(g_n^p)$ est croissante, positive, de limite $g^p$ : par convergence monotone, $\int g^p = \lim\int g_n^p\leqslant2^p$. Donc $\|g\|_p\leqslant2$, et $\int g^p\lt\infty$ impose $g\lt\infty$ presque partout (sinon $\int g^p = +\infty$ sur un ensemble de mesure $>0$).</p>`, ["rf-tcm", "rf-mink"]),
    Q(5, "Limite presque partout", R`<p>$f_{\varphi(n)} = f_{\varphi(0)}+\sum_{k\lt n}(f_{\varphi(k+1)}-f_{\varphi(k)})$, série absolument convergente là où $g\lt\infty$.</p>`, R`<p>Soit $E$ un négligeable hors duquel $g(x)\lt\infty$ et les $f_{\varphi(k)}(x)$ sont finis. Pour $x\notin E$, la série $\sum(f_{\varphi(k+1)}(x)-f_{\varphi(k)}(x))$ converge absolument (ses sommes partielles en module sont $\leqslant g(x)$), donc $f_{\varphi(n)}(x) = f_{\varphi(0)}(x)+\sum_{k\lt n}(\cdots)$ converge. On pose $f(x) = \lim f_{\varphi(n)}(x)$ hors de $E$, $0$ sur $E$ : $f$ est mesurable. <b>Une sous-suite converge presque partout.</b></p>`),
    Q(6, "Convergence dans Lᵖ", R`<p>$|f-f_n|^p = \liminf_m|f_{\varphi(m)}-f_n|^p$ p.p. ; Fatou.</p>`, R`<p>Soit $\varepsilon>0$ et $N$ tel que $\|f_m-f_n\|_p\leqslant\varepsilon$ pour $m,n\geqslant N$. Pour $n\geqslant N$, presque partout $|f-f_n|^p = \lim_m|f_{\varphi(m)}-f_n|^p$, et par Fatou :</p>$$\int|f-f_n|^p\,d\mu\leqslant\liminf_{m\to\infty}\int|f_{\varphi(m)}-f_n|^p\,d\mu\leqslant\varepsilon^p,$$<p>car $\varphi(m)\geqslant m\geqslant N$ pour $m\geqslant N$. Donc $f-f_n\in L^p$ et $\|f-f_n\|_p\leqslant\varepsilon$ pour $n\geqslant N$. Ainsi $f = (f-f_N)+f_N\in L^p$ et $f_n\to f$ dans $L^p$.</p><div class="sbox"><p>$L^p$ est un espace de Banach ; $L^2$ est un espace de Hilbert.</p></div>`, ["rf-fatou"])
  ],
  piege: R`On ne peut pas définir directement $f$ comme limite simple de $(f_n)$ : elle peut ne converger nulle part (Partie III). L'extraction rapide est indispensable.`,
  methode: R`Complétude par séries : une suite de Cauchy converge dès qu'une sous-suite converge, et on fait converger une sous-suite à écarts sommables en montrant la convergence absolue de la série des écarts.`
},

/* ===================== Partie III ===================== */
{ id: "rf-3", ...P, part: "Partie III", time: "25 min",
  title: "Conséquences et contre-exemples",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Montrer que si $f_n\to f$ dans $L^p$ ($p\lt\infty$), une sous-suite converge vers $f$ presque partout.</li>
<li>Sur $[0,1]$ muni de la mesure de Lebesgue, pour $n = 2^k+j$ ($0\leqslant j\lt2^k$), soit $f_n = \mathbf 1_{[j2^{-k},(j+1)2^{-k}]}$. Montrer que $f_n\to0$ dans $L^p$ mais que $(f_n(x))$ ne converge pour aucun $x$.</li>
<li>Montrer que $(\mathcal C([0,1]),\|\cdot\|_1)$ n'est pas complet.</li></ol>`,
  decode: { donnees: [R`Partie II.`], but: R`Mesurer exactement ce qu'apporte le théorème.`, cles: {} },
  steps: [
    Q(7, "Sous-suite presque partout", R`<p>Une suite convergente est de Cauchy ; appliquer la Partie II.</p>`, R`<p>$(f_n)$ est de Cauchy, donc la Partie II fournit une sous-suite $(f_{\varphi(k)})$ qui converge presque partout vers une $\tilde f$ avec $f_n\to\tilde f$ dans $L^p$. Par unicité de la limite dans $L^p$, $\tilde f = f$ presque partout : $f_{\varphi(k)}\to f$ p.p.</p>`),
    Q(8, "La machine à écrire", R`<p>$\|f_n\|_p^p = 2^{-k}$. Pour $x$ fixé, chaque ligne $k$ contient un $j$ avec $x\in[j2^{-k},(j+1)2^{-k}]$, et aussi des $j$ avec $x$ en dehors.</p>`, R`<p>$\|f_n\|_p = (2^{-k})^{1/p}\to0$ quand $n\to\infty$ (car $k\to\infty$). Soit $x\in[0,1]$. Pour chaque $k\geqslant1$, il existe $j$ avec $x\in[j2^{-k},(j+1)2^{-k}]$, donc $f_{2^k+j}(x) = 1$ ; et comme ces intervalles ont longueur $2^{-k}\leqslant\frac12$, il existe aussi $j'$ avec $f_{2^k+j'}(x) = 0$. La suite $(f_n(x))$ prend une infinité de fois les valeurs $0$ et $1$ : elle diverge. Le résultat de Q7 est donc optimal : on ne peut pas se passer d'extraction (ici $f_{2^k}\to0$ sauf en $0$).</p>${figTW}`),
    Q(9, "Un espace non complet", R`<p>$f_n$ affine de $0$ à $1$ sur $[\frac12-\frac1{4n},\frac12+\frac1{4n}]$. Une limite continue devrait valoir $0$ sur $[0,\frac12[$ et $1$ sur $]\frac12,1]$.</p>`, R`<p>Soit $f_n$ nulle sur $[0,\frac12-\frac1{4n}]$, égale à $1$ sur $[\frac12+\frac1{4n},1]$, affine entre. Pour $m\geqslant n$, $f_n$ et $f_m$ coïncident hors de $[\frac12-\frac1{4n},\frac12+\frac1{4n}]$ et diffèrent de moins de $1$ : $\|f_n-f_m\|_1\leqslant\frac1{2n}$. La suite est de Cauchy.</p><p>Si $f$ continue vérifiait $\|f_n-f\|_1\to0$, alors pour tout $a\lt\frac12$, $\int_0^a|f| = \lim\int_0^a|f-f_n|\leqslant\lim\|f-f_n\|_1 = 0$ ($f_n = 0$ sur $[0,a]$ pour $n$ grand), donc $f = 0$ sur $[0,\frac12[$ ; de même $f = 1$ sur $]\frac12,1]$ : $f$ ne peut être continue en $\frac12$. Contradiction. Dans $L^1$, la limite existe : c'est $\mathbf 1_{[\frac12,1]}$.</p>${figRamp}`)
  ],
  piege: R`« Converge dans $L^p$ » et « converge presque partout » ne se comparent pas en général : aucune n'implique l'autre (pour la réciproque, $n\mathbf 1_{]0,1/n]}\to0$ p.p. mais pas dans $L^1$).`,
  methode: R`Retenir : convergence $L^p$ $\Rightarrow$ convergence p.p. d'une sous-suite ; la machine à écrire montre qu'on ne peut pas faire mieux.`
}
]);
})();

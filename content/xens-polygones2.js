/* Commando X-ENS · Aller plus loin · Sujet « Suite de polygones ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 3, plus: "polyg",
  sujet: "Polygones des milieux : convergence vers l'isobarycentre",
  sujetDesc: "On remplace un polygone par le polygone des milieux de ses côtés, et on itère. La matrice de l'opération est circulante, diagonalisable dans la base de Fourier, de valeurs propres (1 + ω^j)/2 : toutes de module < 1 sauf la valeur propre 1, d'où la convergence vers l'isobarycentre à vitesse cos(π/n)^k. Variante avec des poids μ_k : convergence vers un point si Σμ_k diverge, vers un vrai polygone sinon." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "pg-circ": { t: "Matrices circulantes", b: R`$$Je_k = e_{k-1},\quad F_j = (\omega^{jk})_{0\leqslant k\lt n},\quad JF_j = \omega^jF_j\ \Longrightarrow\ P(J) = \operatorname{diag}\big(P(\omega^j)\big)\text{ dans }(F_j).$$` },
  "pg-prod": { t: "Produits infinis", b: R`$$\begin{gathered}\sum|z_k|\lt\infty,\ 1+z_k\neq0\Rightarrow\prod_{k = 0}^p(1+z_k)\to L\neq0,\\[4pt]0\leqslant x_k\lt1,\ \sum x_k = \infty\Rightarrow\prod(1-x_k)\to0.\end{gathered}$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Un polygone à $n\geqslant3$ sommets est un vecteur $Z = (z_1,\dots,z_n)\in\mathbb C^n$ (affixes des sommets). On définit $Z^{(0)} = Z$ et $Z^{(k+1)} = AZ^{(k)}$, où $Z^{(k+1)}$ est le polygone des milieux : $z^{(k+1)}_i = \frac{z^{(k)}_i+z^{(k)}_{i+1}}2$ (indices modulo $n$). On note $g = \frac1n\sum z_i$ l'isobarycentre et $\omega = e^{2i\pi/n}$.</p>`;

/* Figure : itérations sur un pentagone */
const figIter = (() => { const z0 = [[-1.6, -0.9], [1.9, -1.3], [0.4, 0.2], [1.3, 1.6], [-1.4, 1.1]]; const s = 62, cx = 180, cy = 135; let Z = z0.map(p => p.slice()), b = "";
  const g = [Z.reduce((a, p) => a + p[0], 0) / 5, Z.reduce((a, p) => a + p[1], 0) / 5];
  const cls = ["vb", "vr", "vg", "vv", "vk", "vb", "vr"];
  for (let k = 0; k < 7; k++) { b += `<path d="${Z.map((p, i) => (i ? "L" : "M") + (cx + s * p[0]).toFixed(1) + " " + (cy - s * p[1]).toFixed(1)).join("")}Z" class="${cls[k]}" style="fill:none;stroke-width:${k === 0 ? 2 : 1.4};opacity:${1 - k * 0.1}"/>`;
    Z = Z.map((p, i) => [(p[0] + Z[(i + 1) % 5][0]) / 2, (p[1] + Z[(i + 1) % 5][1]) / 2]); }
  b += `<circle cx="${(cx + s * g[0]).toFixed(1)}" cy="${(cy - s * g[1]).toFixed(1)}" r="4.5" class="ptr"/>` + S(cx + s * g[0] + 8, cy - s * g[1] + 16, "g", "start", "sm r");
  b += S(cx + s * z0[0][0] - 6, cy - s * z0[0][1] + 14, "P₀", "end", "sm b");
  return FIG(380, 280, b, R`Un pentagone $P_0$ non convexe et ses six premiers polygones des milieux. Ils deviennent rapidement convexes, se contractent et convergent vers l'isobarycentre $g$ (en rouge), qui est le même pour tous.`, "Polygones des milieux"); })();

/* Figure : valeurs propres */
const figVp = (() => { const n = 7, cx = 120, cy = 130, s = 90; let b = `<circle cx="${cx}" cy="${cy}" r="${s}" class="thin" style="fill:none"/><circle cx="${cx + s / 2}" cy="${cy}" r="${s / 2}" class="vb" style="fill:none;stroke-width:1.2"/><line x1="${cx - s - 10}" y1="${cy}" x2="${cx + s + 15}" y2="${cy}" class="ax"/><line x1="${cx}" y1="${cy - s - 10}" x2="${cx}" y2="${cy + s + 10}" class="ax"/>`;
  for (let j = 0; j < n; j++) { const t = 2 * Math.PI * j / n, w = [Math.cos(t), Math.sin(t)], l = [(1 + w[0]) / 2, w[1] / 2];
    b += `<circle cx="${(cx + s * w[0]).toFixed(1)}" cy="${(cy - s * w[1]).toFixed(1)}" r="3" class="pt"/><circle cx="${(cx + s * l[0]).toFixed(1)}" cy="${(cy - s * l[1]).toFixed(1)}" r="4" class="${j === 0 ? "ptr" : "ptb"}"/><line x1="${(cx + s * w[0]).toFixed(1)}" y1="${(cy - s * w[1]).toFixed(1)}" x2="${(cx + s * l[0]).toFixed(1)}" y2="${(cy - s * l[1]).toFixed(1)}" class="thin"/>`; }
  b += S(cx + s + 6, cy - 8, "1", "start", "sm r") + S(cx + s / 2, cy + s / 2 + 18, "λⱼ = (1 + ωʲ)/2", "middle", "sm b");
  b += S(250, 60, "n = 7 : les ωʲ (blancs) sont ramenés", "start", "sm") + S(250, 80, "à mi-chemin de 1 (bleus).", "start", "sm") + S(250, 110, "Seul λ₀ = 1 est de module 1 ;", "start", "sm") + S(250, 130, "le plus grand des autres vaut", "start", "sm") + S(250, 150, "cos(π/7) ≈ 0,90.", "start", "sm");
  return FIG(480, 260, b, R`Valeurs propres de $A = \frac12(I+J)$ pour $n = 7$ : $\lambda_j = \frac{1+\omega^j}2$ est le milieu de $1$ et $\omega^j$. Elles sont sur le cercle de centre $\frac12$ et de rayon $\frac12$, qui ne touche le cercle unité qu'en $1$.`, "Spectre de la matrice des milieux"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "polyg-1", ...P, part: "Partie I", time: "25 min",
  title: "La matrice des milieux",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $J$ la matrice telle que $(JZ)_i = z_{i+1}$ (indices modulo $n$).</p><ol start="1">
<li>Montrer que $A = \frac12(I_n+J)$ et que $Z^{(k)} = A^kZ$.</li>
<li>Montrer que $F_j = (\omega^{j(i-1)})_{1\leqslant i\leqslant n}$ est vecteur propre de $J$, puis de $A$, pour la valeur propre $\lambda_j = \frac{1+\omega^j}2$ ($0\leqslant j\leqslant n-1$). En déduire que $A$ est diagonalisable.</li>
<li>Montrer que $|\lambda_j| = \big|\cos\frac{j\pi}n\big|$, donc que $|\lambda_j|\leqslant\cos\frac\pi n\lt1$ pour $j\neq0$.</li></ol>`,
  decode: { donnees: [R`Racines de l'unité.`], but: R`Diagonaliser $A$.`, cles: {} },
  steps: [
    Q(1, "Écriture matricielle", R`<p>$(AZ)_i = \frac{z_i+z_{i+1}}2$.</p>`, R`<p>$(\frac12(I+J)Z)_i = \frac{z_i+z_{i+1}}2 = z'_i$ : c'est la règle des milieux. Par récurrence, $Z^{(k)} = A^kZ$. La matrice $A$ a des $\frac12$ sur la diagonale et sur la surdiagonale, et un $\frac12$ en position $(n,1)$ : elle est circulante.</p>`),
    Q(2, "Base propre de Fourier", R`<p>$(JF_j)_i = \omega^{ji} = \omega^j\cdot\omega^{j(i-1)}$ (aussi pour $i = n$ car $\omega^{jn} = 1$).</p>`, R`<p>$(JF_j)_i = (F_j)_{i+1} = \omega^{ji} = \omega^j(F_j)_i$ pour $i\lt n$, et pour $i = n$ : $(F_j)_1 = 1 = \omega^{jn} = \omega^j\omega^{j(n-1)}$. Donc $JF_j = \omega^jF_j$ et $AF_j = \frac{1+\omega^j}2F_j$. La matrice des $F_j$ est une matrice de Vandermonde en les $\omega^j$, distincts : elle est inversible. Les $F_j$ forment une base propre de $A$, qui est diagonalisable. ($F_0 = (1,\dots,1)$, pour $\lambda_0 = 1$.)</p>`, ["pg-circ"]),
    Q(3, "Module des valeurs propres", R`<p>$1+e^{i\theta} = e^{i\theta/2}\cdot2\cos\frac\theta2$.</p>`, R`<p>Avec $\theta = \frac{2j\pi}n$ : $1+e^{i\theta} = e^{i\theta/2}(e^{-i\theta/2}+e^{i\theta/2}) = 2\cos\frac\theta2\,e^{i\theta/2}$, donc $|\lambda_j| = \big|\cos\frac{j\pi}n\big|$. Pour $1\leqslant j\leqslant n-1$, $\frac{j\pi}n\in[\frac\pi n,\pi-\frac\pi n]$, donc $|\cos\frac{j\pi}n|\leqslant\cos\frac\pi n\lt1$. Pour $n$ pair, $j = \frac n2$ donne $\lambda = 0$ : $A$ n'est alors pas inversible (deux polygones différents peuvent avoir le même polygone des milieux).</p>${figVp}`)
  ],
  piege: R`Pour $n$ pair, $A$ est singulière : son noyau est engendré par $F_{n/2} = (1,-1,1,-1,\dots)$, donc le polygone des milieux ne détermine pas le polygone de départ (on peut ajouter $tF_{n/2}$ sans changer les milieux).`,
  methode: R`Matrices circulantes : se diagonalisent dans la base de Fourier $(\omega^{j(i-1)})_i$, la valeur propre associée à $F_j$ étant $P(\omega^j)$ si la matrice est $P(J)$.`
},

/* ===================== Partie II ===================== */
{ id: "polyg-2", ...P, part: "Partie II", time: "25 min",
  title: "Convergence vers l'isobarycentre",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que l'isobarycentre de $Z^{(k)}$ est $g$ pour tout $k$.</li>
<li>En décomposant $Z = \sum_jc_jF_j$, montrer que $Z^{(k)}\to c_0F_0$ et que $c_0 = g$.</li>
<li>Montrer que $\|Z^{(k)}-gF_0\|\leqslant C\cos^k\frac\pi n$ pour une constante $C$ (norme quelconque). Combien d'itérations faut-il, pour $n = 100$, pour diviser la taille du polygone par $10$ ?</li></ol>`,
  decode: { donnees: [R`Partie I.`], but: R`Établir la convergence et sa vitesse.`, cles: {} },
  steps: [
    Q(4, "Isobarycentre invariant", R`<p>$\sum_i\frac{z_i+z_{i+1}}2 = \sum_iz_i$.</p>`, R`<p>$\frac1n\sum_iz'_i = \frac1n\sum_i\frac{z_i+z_{i+1}}2 = \frac1{2n}\big(\sum_iz_i+\sum_iz_{i+1}\big) = \frac1n\sum_iz_i = g$, les indices étant modulo $n$. Par récurrence, tous les $Z^{(k)}$ ont pour isobarycentre $g$.</p>`),
    Q(5, "La limite", R`<p>$A^kZ = \sum c_j\lambda_j^kF_j$ ; l'isobarycentre est linéaire et continu.</p>`, R`<p>$Z^{(k)} = A^kZ = \sum_jc_j\lambda_j^kF_j\to c_0F_0$, car $\lambda_0 = 1$ et $|\lambda_j|\lt1$ pour $j\neq0$. L'application isobarycentre $Y\mapsto\frac1n\sum y_i$ est linéaire, donc continue, et vaut $g$ en chaque $Z^{(k)}$ (Q4) ; elle vaut $c_0$ en $c_0F_0 = (c_0,\dots,c_0)$. Donc $c_0 = g$ et</p><div class="sbox"><p>Le polygone $Z^{(k)}$ converge vers le point $g$ : tous ses sommets tendent vers l'isobarycentre.</p></div>`),
    Q(6, "Vitesse", R`<p>$\|Z^{(k)}-gF_0\|\leqslant\sum_{j\neq0}|c_j||\lambda_j|^k\|F_j\|$.</p>`, R`<p>$Z^{(k)}-gF_0 = \sum_{j\neq0}c_j\lambda_j^kF_j$, d'où $\|Z^{(k)}-gF_0\|\leqslant\big(\sum_{j\neq0}|c_j|\|F_j\|\big)\cos^k\frac\pi n$. Pour $n = 100$ : $\cos\frac\pi{100}\approx1-\frac{\pi^2}{2\cdot10^4}\approx0{,}99951$, et diviser par $10$ demande $k\approx\frac{\ln10}{\pi^2/(2\cdot10^4)}\approx4\,670$ itérations. La convergence est géométrique mais lente pour $n$ grand : en $\frac{2n^2}{\pi^2}\ln10$.</p>${figIter}`)
  ],
  piege: R`La vitesse n'est pas $\frac12$ (« on prend des milieux ») : le facteur pertinent est le plus grand $|\lambda_j|$ hors de $\lambda_0$, soit $\cos\frac\pi n$, proche de $1$.`,
  methode: R`Suite $A^kZ$ avec $A$ diagonalisable : décomposer $Z$ sur une base propre ; la limite est la composante sur la valeur propre $1$, la vitesse est le second plus grand module.`
},

/* ===================== Partie III ===================== */
{ id: "polyg-3", ...P, part: "Partie III", time: "35 min",
  title: "Barycentres pondérés",
  enonce: PRE + R`<p><b>Partie III.</b> Soit $(\mu_k)$ une suite de $]0,1-\varepsilon]$ ($\varepsilon>0$) et $z^{(k+1)}_i = (1-\mu_k)z^{(k)}_i+\mu_kz^{(k)}_{i+1}$, soit $Z^{(k+1)} = A_kZ^{(k)}$ avec $A_k = (1-\mu_k)I+\mu_kJ$.</p><ol start="7">
<li>Montrer que $A_kF_j = y_{k,j}F_j$ avec $y_{k,j} = 1-\mu_k+\mu_k\omega^j$, et $|y_{k,j}|^2 = 1-4\mu_k(1-\mu_k)\sin^2\frac{j\pi}n$.</li>
<li>Montrer que si $\sum\mu_k = +\infty$, $Z^{(k)}$ converge vers $gF_0$.</li>
<li>On suppose $\mu_k\neq\frac12$ pour tout $k$. Montrer que si $\sum\mu_k\lt+\infty$, $Z^{(k)}$ converge vers un polygone $Z^\infty$, qui n'est pas réduit à un point dès que $Z$ ne l'est pas. Le cas $\mu_k = \mu$ constant entre-t-il dans un de ces cas ?</li></ol>`,
  decode: { donnees: [R`Produits infinis.`], but: R`Étudier $\prod_ky_{k,j}$.`, cles: {} },
  steps: [
    Q(7, "Valeurs propres pondérées", R`<p>$|1-\mu+\mu e^{i\theta}|^2 = (1-\mu)^2+\mu^2+2\mu(1-\mu)\cos\theta$.</p>`, R`<p>$A_kF_j = (1-\mu_k)F_j+\mu_k\omega^jF_j$. Avec $\theta = \frac{2j\pi}n$ :</p>$$\begin{aligned}|y_{k,j}|^2 &= (1-\mu_k)^2+\mu_k^2+2\mu_k(1-\mu_k)\cos\theta\\&= 1-2\mu_k(1-\mu_k)(1-\cos\theta) = 1-4\mu_k(1-\mu_k)\sin^2\frac{j\pi}n.\end{aligned}$$<p>(Le livre échange les rôles de $\mu_k$ et $1-\mu_k$ dans $y_{k,j}$ ; le module est le même.)</p>`),
    Q(8, "Cas Σμ_k = ∞", R`<p>$Z^{(k)} = \sum_jc_j\big(\prod_{l\lt k}y_{l,j}\big)F_j$. Pour $j\neq0$ : $|y_{l,j}|^2\leqslant1-4\varepsilon\mu_l\sin^2\frac\pi n$.</p>`, R`<p>Les $A_k$ sont tous diagonaux dans la base $(F_j)$, donc $Z^{(k)} = \sum_jc_j\pi_{k,j}F_j$ avec $\pi_{k,j} = \prod_{l\lt k}y_{l,j}$, et $\pi_{k,0} = 1$. Pour $j\neq0$, comme $1-\mu_l\geqslant\varepsilon$ et $\sin^2\frac{j\pi}n\geqslant\sin^2\frac\pi n$ : $|y_{l,j}|^2\leqslant1-x_l$ avec $x_l = 4\varepsilon\mu_l\sin^2\frac\pi n\in[0,1[$, et $\sum x_l = \infty$. Par le rappel, $|\pi_{k,j}|^2\leqslant\prod(1-x_l)\to0$. Donc $Z^{(k)}\to c_0F_0 = gF_0$ (même argument qu'en Q5).</p>`, ["pg-prod"]),
    Q(9, "Cas Σμ_k < ∞", R`<p>$y_{l,j} = 1+\mu_l(\omega^j-1)$ avec $\sum\mu_l|\omega^j-1|\lt\infty$, et $y_{l,j}\neq0$.</p>`, R`<p>$y_{l,j} = 1+z_l$ avec $z_l = \mu_l(\omega^j-1)$, $\sum|z_l|\leqslant2\sum\mu_l\lt\infty$. De plus $y_{l,j}\neq0$ : $|y_{l,j}|^2 = 0$ imposerait $4\mu_l(1-\mu_l)\sin^2\frac{j\pi}n = 1$, donc $\mu_l = \frac12$ (et $j = \frac n2$), cas exclu. Le rappel donne $\pi_{k,j}\to u_j\neq0$. Donc $Z^{(k)}\to Z^\infty = \sum_jc_ju_jF_j$. Si $Z$ n'est pas réduit à un point, un $c_j$ ($j\neq0$) est non nul, et $c_ju_j\neq0$ : $Z^\infty$ n'est pas un point. Les sommets se rapprochent de moins en moins vite et se figent.</p><p>Pour $\mu_k = \mu\in]0,1[$ constant, $\sum\mu_k = \infty$ : on retrouve la convergence vers l'isobarycentre (cas des milieux pour $\mu = \frac12$).</p>`, ["pg-prod"])
  ],
  piege: R`L'hypothèse $\mu_k\leqslant1-\varepsilon$ évite des $\mu_k$ proches de $1$ : avec $\mu_k = 1$, $A_k = J$ décale juste les indices, et le polygone « tourne » sans se contracter.`,
  methode: R`Produits de matrices simultanément diagonalisables : on se ramène à des produits de scalaires $\prod_ly_{l,j}$, à étudier par le logarithme.`
}
]);
})();

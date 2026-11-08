/* Commando X-ENS · Aller plus loin · Sujet « Optimisation dans un espace de Hilbert ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 19, kind: "probleme", qnav: true, side: true, level: 5, plus: "opth",
  sujet: "Minimum d'une fonction convexe coercive dans un Hilbert",
  sujetDesc: "En dimension finie, une fonction continue coercive atteint son minimum (Bolzano-Weierstrass). En dimension infinie, les boules ne sont plus compactes et ce n'est plus vrai, mais une fonction convexe, continue et coercive sur un Hilbert atteint encore son minimum. Outils : extraction diagonale, convergence faible, Riesz, projection sur un convexe fermé." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "oh-proj": { t: "Projection sur un convexe fermé", b: R`$$\begin{gathered}C\text{ convexe fermé}\neq\varnothing\ :\quad\exists!\,p_C(x)\in C,\ \|x-p_C(x)\| = d(x,C),\\[4pt]\forall y\in C,\ \langle x-p_C(x),y-p_C(x)\rangle\leqslant0.\end{gathered}$$` },
  "oh-riesz": { t: "Riesz", b: R`$$\ell\in H'\ \Longrightarrow\ \exists!\,a\in H,\ \forall u,\ \ell(u) = \langle u,a\rangle.$$` },
  "oh-orth": { t: "Supplémentaire orthogonal", b: R`<div class="sbox">$$F\ \text{sous-espace de}\ H\ \text{Hilbert}\ \Longrightarrow\ H = \overline F\oplus F^\perp,\qquad F^\perp = \overline F^{\,\perp}.$$</div>` },
  "oh-coer": { t: "Coercivité", b: R`$$J\text{ coercive}\iff J(x)\xrightarrow[\|x\|\to+\infty]{}+\infty\iff\forall A,\ \exists\rho,\ \|x\|\geqslant\rho\Rightarrow J(x)\geqslant A.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $H$ est un espace de Hilbert réel, et $J : H\to\mathbb R$. On cherche des conditions pour que $\inf_HJ$ soit fini et <b>atteint</b>. On note $\ell^2$ l'espace des suites réelles $x = (x_k)_{k\geqslant1}$ de carré sommable, de produit scalaire $\langle x,y\rangle = \sum x_ky_k$, et $(e_k)$ sa base canonique.</p>`;

/* Figure : extraction diagonale */
const figDiag = (() => { const c = 34, o = 70, rows = 5, cols = 7; let b = "";
  const names = ["φ₀", "φ₀∘φ₁", "φ₀∘φ₁∘φ₂", "φ₀∘…∘φ₃", "φ₀∘…∘φ₄"];
  for (let i = 0; i < rows; i++) { b += S(o - 8, 34 + c * i + c / 2 + 4, names[i], "end", "sm"); for (let j = 0; j < cols; j++) { const diag = i === j; b += `<rect x="${o + c * j}" y="${34 + c * i}" width="${c - 4}" height="${c - 4}" rx="4" class="${diag ? "hr" : "thin"}" style="${diag ? "opacity:.85" : "fill:none"}"/>` + S(o + c * j + (c - 4) / 2, 34 + c * i + c / 2 + 3, j === cols - 1 ? "…" : `${j}`, "middle", diag ? "sm b" : "sm"); } }
  for (let j = 0; j < cols - 1; j++) b += S(o + c * j + (c - 4) / 2, 26, `k=${j}`, "middle", "sm");
  b += S(o + c * cols + 10, 34 + c * 2, "ligne i : ⟨xᵢ, ·⟩ converge", "start", "sm") + S(o + c * cols + 10, 34 + c * 2 + 20, "le long de cette sous-suite", "start", "sm") + S(o + c * cols + 10, 34 + c * 4, "diagonale : ψ(k)", "start", "sm r");
  return FIG(500, 220, b, R`Extraction diagonale : la ligne $i$ est la sous-suite $\varphi_0\circ\dots\circ\varphi_i$, le long de laquelle $\langle x_i,x_{\cdot}\rangle$ converge ; chaque ligne est extraite de la précédente. La diagonale $\psi(k) = \varphi_0\circ\dots\circ\varphi_k(k)$ est, à partir du rang $i$, extraite de la ligne $i$ : elle fait converger <b>toutes</b> les suites $\langle x_i,x_{\psi(k)}\rangle$ à la fois.`, "Extraction diagonale"); })();

/* Figure : projection et limite faible */
const figProj = (() => { let b = "";
  b += `<path d="M90 190 C 60 120, 120 50, 210 60 C 290 70, 300 150, 250 200 C 200 240, 120 240, 90 190 Z" class="hb" style="opacity:.18"/><path d="M90 190 C 60 120, 120 50, 210 60 C 290 70, 300 150, 250 200 C 200 240, 120 240, 90 190 Z" class="vb" style="fill:none;stroke-width:1.6"/>`;
  const p = [292, 128], a = [400, 110];
  b += `<line x1="${p[0] - 20}" y1="${p[1] - 120}" x2="${p[0] + 22}" y2="${p[1] + 132}" class="thin"/>`;
  b += `<line x1="${a[0]}" y1="${a[1]}" x2="${p[0]}" y2="${p[1]}" class="vr" style="stroke-width:1.8"/><circle cx="${a[0]}" cy="${a[1]}" r="4.5" class="ptr"/><circle cx="${p[0]}" cy="${p[1]}" r="4" class="ptb"/>`;
  [[170, 120], [200, 170], [140, 180], [230, 110]].forEach(([x, y], k) => { b += `<circle cx="${x}" cy="${y}" r="3.5" class="pt"/>` + S(x + 6, y - 6, `y${["ₖ", "ₖ₊₁", "ₖ₊₂", "ₖ₊₃"][k]}`, "start", "sm"); });
  b += S(a[0] + 8, a[1] - 6, "a ?", "start", "sm r") + S(p[0] - 8, p[1] + 18, "p(a)", "end", "sm b") + S(120, 80, "Cβ = {J ≤ β}", "middle", "sm b");
  b += S(330, 250, "⟨y − p(a), a − p(a)⟩ ≤ 0 pour y ∈ Cβ", "middle", "sm");
  return FIG(480, 270, b, R`Si la limite faible $a$ des $y_k$ était hors du convexe fermé $C_\beta$, l'hyperplan passant par $p(a)$ et orthogonal à $a-p(a)$ séparerait $a$ de $C_\beta$. Les $y_k\in C_\beta$ sont du côté $\langle y-p(a),a-p(a)\rangle\leqslant0$, et un passage à la limite faible donne $\|a-p(a)\|^2\leqslant0$.`, "Séparation par la projection"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "opth-1", ...P, part: "Partie I", time: "25 min",
  title: "Dimension finie, et ce qui casse en dimension infinie",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Soit $F$ un fermé non vide de $\mathbb R^n$ et $J : F\to\mathbb R$ continue et coercive. Montrer que $J$ atteint son minimum sur $F$.</li>
<li>En déduire que si $G$ est un sous-espace de dimension finie d'un espace normé $V$, $a\in V$ et $F\subset G$ fermé non vide, alors $d(a,F)$ est atteinte.</li>
<li>Sur $\ell^2$, on pose $J(x) = \big(\|x\|^2-1\big)^2+\sum_{k\geqslant1}\frac{x_k^2}k$. Montrer que $J$ est continue, coercive, que $\inf J = 0$, et que cet infimum n'est pas atteint. Quelle hypothèse manque ?</li></ol>`,
  decode: { donnees: [R`Bolzano-Weierstrass en dimension finie.`], but: R`Voir l'argument de compacité, puis un contre-exemple en dimension infinie.`, cles: {} },
  steps: [
    Q(1, "Existence en dimension finie", R`<p>Suite minimisante ; elle est bornée par coercivité ; Bolzano-Weierstrass.</p>`, R`<p>Soit $\alpha = \inf_FJ\in[-\infty,+\infty[$ et $(x_k)$ une suite de $F$ avec $J(x_k)\to\alpha$. Si $(x_k)$ n'était pas bornée, une sous-suite vérifierait $\|x_{\varphi(k)}\|\to+\infty$, donc $J(x_{\varphi(k)})\to+\infty$ par coercivité, ce qui contredit $J(x_k)\to\alpha\lt+\infty$. Donc $(x_k)$ est bornée.</p><p>Par Bolzano-Weierstrass, une sous-suite converge vers $x\in\mathbb R^n$, et $x\in F$ car $F$ est fermé. Par continuité, $J(x) = \lim J(x_{\psi(k)}) = \alpha$ : $\alpha$ est fini et atteint.</p>`, ["oh-coer"]),
    Q(2, "Distance à un fermé de dimension finie", R`<p>$J(x) = \|a-x\|$ sur $F$ ; $\|a-x\|\geqslant\|x\|-\|a\|$.</p>`, R`<p>$G$ est de dimension finie, donc isomorphe (normes équivalentes) à un $\mathbb R^n$ ; $F$ y est fermé. $J(x) = \|a-x\|$ est continue (1-lipschitzienne), et coercive : $J(x)\geqslant\|x\|-\|a\|\geqslant A$ dès que $\|x\|\geqslant A+\|a\|$. Par Q1, il existe $y\in F$ avec $\|a-y\| = \inf_{x\in F}\|a-x\| = d(a,F)$. (C'est l'existence des polynômes de meilleure approximation.)</p>`, ["oh-coer"]),
    Q(3, "Un infimum non atteint", R`<p>$J(e_k) = \frac1k$. Si $J(x) = 0$, alors tous les $x_k$ sont nuls et $\|x\| = 1$.</p>`, R`<p><b>Continuité.</b> $x\mapsto\|x\|^2$ est continue, et $x\mapsto\sum\frac{x_k^2}k = \|Dx\|^2$ avec $Dx = \big(\frac{x_k}{\sqrt k}\big)$, opérateur linéaire de norme $\leqslant1$, est continue.</p><p><b>Coercivité.</b> $J(x)\geqslant(\|x\|^2-1)^2\to+\infty$.</p><p><b>Infimum.</b> $J\geqslant0$ et $J(e_k) = 0+\frac1k\to0$ : $\inf J = 0$. Si $J(x) = 0$, les deux termes positifs sont nuls : $x_k = 0$ pour tout $k$, donc $x = 0$, mais alors $\|x\|^2-1 = -1\neq0$. Contradiction : l'infimum n'est pas atteint.</p><p>Ce qui manque : la <b>convexité</b>. $(e_k)$ est une suite minimisante bornée sans sous-suite convergente (car $\|e_k-e_l\| = \sqrt2$) : la boule unité de $\ell^2$ n'est pas compacte. Notons que $e_k$ converge <b>faiblement</b> vers $0$ ($\langle u,e_k\rangle = u_k\to0$), et $J(0) = 1>\inf J$ : $J$ n'est pas « faiblement semi-continue », faute de convexité.</p>`)
  ],
  piege: R`En dimension infinie, « fermé borné » n'implique pas « compact » : Q1 ne se généralise pas telle quelle, même pour $J$ continue et coercive.`,
  methode: R`Existence d'un minimum : suite minimisante, bornée par coercivité, puis extraction d'une sous-suite qui converge (fortement en dimension finie, faiblement dans un Hilbert).`
},

/* ===================== Partie II ===================== */
{ id: "opth-2", ...P, part: "Partie II", time: "40 min",
  title: "Toute suite bornée a une sous-suite faiblement convergente",
  enonce: PRE + R`<p><b>Partie II.</b> Soit $(x_k)_{k\in\mathbb N}$ une suite de $H$ avec $\|x_k\|\leqslant K$ pour tout $k$.</p><ol start="4">
<li>Construire des extractions $\varphi_0,\varphi_1,\dots$ telles que pour tout $i$, la suite $\big(\langle x_i,x_{\varphi_0\circ\dots\circ\varphi_i(k)}\rangle\big)_k$ converge. On pose $\psi(k) = \varphi_0\circ\dots\circ\varphi_k(k)$ et $y_k = x_{\psi(k)}$. Montrer que $\psi$ est une extraction et que $\big(\langle v,y_k\rangle\big)_k$ converge pour tout $v\in F = \mathrm{Vect}(x_p,\ p\in\mathbb N)$.</li>
<li>Montrer que $\big(\langle u,y_k\rangle\big)_k$ converge pour tout $u\in H$. (Écrire $u = v+w$, $v\in\overline F$, $w\in F^\perp$, et approcher $v$ par $\tilde v\in F$.)</li>
<li>En déduire qu'il existe $a\in H$ tel que $\langle u,y_k\rangle\to\langle u,a\rangle$ pour tout $u\in H$ (on dit que $y_k$ <b>converge faiblement</b> vers $a$), et que $\|a\|\leqslant K$.</li></ol>`,
  decode: { donnees: [R`Bolzano-Weierstrass dans $\mathbb R$, Riesz.`], but: R`Remplacer la compacité forte, perdue en dimension infinie, par une compacité faible.`, cles: {} },
  steps: [
    Q(4, "L'extraction diagonale", R`<p>Par Cauchy-Schwarz, $|\langle x_i,x_k\rangle|\leqslant K^2$ : Bolzano-Weierstrass ligne par ligne. Pour $\psi$ : $\varphi(k+1)\geqslant k+1$ pour toute extraction.</p>`, R`<p><b>Construction.</b> $\big(\langle x_0,x_k\rangle\big)_k$ est bornée par $K^2$ (Cauchy-Schwarz) : par Bolzano-Weierstrass, il existe une extraction $\varphi_0$ qui la fait converger. Si $\varphi_0,\dots,\varphi_i$ sont construites, la suite $\big(\langle x_{i+1},x_{\varphi_0\circ\dots\circ\varphi_i(k)}\rangle\big)_k$ est bornée : on en extrait par $\varphi_{i+1}$ une sous-suite convergente. Une sous-suite d'une suite convergente converge vers la même limite : le long de $\varphi_0\circ\dots\circ\varphi_{i+1}$, les suites $\langle x_j,\cdot\rangle$ convergent pour tous $j\leqslant i+1$.</p><p><b>La diagonale.</b> Notons $\Phi_k = \varphi_0\circ\dots\circ\varphi_k$. Une extraction vérifie $\varphi(m)\geqslant m$, donc $\psi(k+1) = \Phi_k\big(\varphi_{k+1}(k+1)\big)\geqslant\Phi_k(k+1)>\Phi_k(k) = \psi(k)$ : $\psi$ est strictement croissante. Pour $k\geqslant i$, $\psi(k) = \Phi_i\big(\varphi_{i+1}\circ\dots\circ\varphi_k(k)\big)$, et $k\mapsto\varphi_{i+1}\circ\dots\circ\varphi_k(k)$ est strictement croissante (même argument) : $(y_k)_{k\geqslant i}$ est extraite de $(x_{\Phi_i(k)})_k$. Donc $\langle x_i,y_k\rangle$ converge, pour tout $i$. Par linéarité, $\langle v,y_k\rangle$ converge pour tout $v\in F$.</p>${figDiag}`),
    Q(5, "Convergence pour tout u", R`<p>$\langle w,y_k\rangle = 0$ car $y_k\in F$. Critère de Cauchy : $|\langle v,y_k-y_l\rangle|\leqslant\|v-\tilde v\|\cdot2K+|\langle\tilde v,y_k-y_l\rangle|$.</p>`, R`<p>Par le rappel, $u = v+w$ avec $v\in\overline F$, $w\in F^\perp$. Comme $y_k\in F$, $\langle w,y_k\rangle = 0$, donc $\langle u,y_k\rangle = \langle v,y_k\rangle$. Soit $\varepsilon>0$ et $\tilde v\in F$ avec $\|v-\tilde v\|\leqslant\varepsilon$. La suite $\langle\tilde v,y_k\rangle$ converge (Q4), donc est de Cauchy : il existe $N$ tel que $|\langle\tilde v,y_k-y_l\rangle|\leqslant\varepsilon$ pour $k,l\geqslant N$. Alors</p>$$|\langle u,y_k-y_l\rangle|\leqslant|\langle v-\tilde v,y_k-y_l\rangle|+|\langle\tilde v,y_k-y_l\rangle|\leqslant\varepsilon\cdot2K+\varepsilon.$$<p>La suite réelle $\langle u,y_k\rangle$ est de Cauchy, donc converge ($\mathbb R$ est complet).</p>`, ["oh-orth"]),
    Q(6, "La limite faible", R`<p>$\ell(u) = \lim\langle u,y_k\rangle$ est linéaire et $|\ell(u)|\leqslant K\|u\|$ : Riesz.</p>`, R`<p>Posons $\ell(u) = \lim_k\langle u,y_k\rangle$. Par linéarité de la limite, $\ell$ est linéaire, et $|\langle u,y_k\rangle|\leqslant K\|u\|$ donne $|\ell(u)|\leqslant K\|u\|$ : $\ell$ est continue. Par Riesz, $\ell(u) = \langle u,a\rangle$ pour un $a\in H$, d'où $\langle u,y_k\rangle\to\langle u,a\rangle$ pour tout $u$. Enfin $\|a\|^2 = \ell(a)\leqslant K\|a\|$, donc $\|a\|\leqslant K$.</p><div class="sbox"><p>Dans un Hilbert, toute suite bornée admet une sous-suite faiblement convergente.</p></div>`, ["oh-riesz"])
  ],
  piege: R`La convergence faible ne donne pas la convergence en norme : $e_k\rightharpoonup0$ mais $\|e_k\| = 1$. C'est pour cela que la Partie III doit utiliser la convexité.`,
  methode: R`Extraction diagonale : pour faire converger une infinité dénombrable de suites bornées à la fois, extraire successivement puis prendre la diagonale.`
},

/* ===================== Partie III ===================== */
{ id: "opth-3", ...P, part: "Partie III", time: "30 min",
  title: "Le théorème d'existence",
  enonce: PRE + R`<p><b>Partie III.</b> On suppose $J$ <b>convexe, continue et coercive</b>.</p><ol start="7">
<li>Soit $(x_k)$ une suite minimisante : $J(x_k)\to\inf_HJ\in[-\infty,+\infty[$. Montrer qu'elle est bornée, et en extraire $(y_k)$ faiblement convergente vers $a$ (Partie II).</li>
<li>Pour $\beta>\inf J$, on pose $C_\beta = \{x\in H : J(x)\leqslant\beta\}$. Montrer que $C_\beta$ est un convexe fermé non vide, puis que $a\in C_\beta$. (Utiliser la projection $p$ sur $C_\beta$.)</li>
<li>Conclure : $J(a) = \min_HJ$ (en particulier l'infimum est fini). Montrer que si $J$ est strictement convexe, le minimum est atteint en un unique point.</li>
<li>Application : pour $b\in H$ et $\lambda>0$, montrer que $J(x) = \|x\|^2+\lambda\|x-b\|-\langle x,b\rangle$ atteint son minimum.</li></ol>`,
  decode: { donnees: [R`Partie II, projection sur un convexe fermé.`], but: R`Montrer qu'un ensemble de sous-niveau convexe fermé contient les limites faibles de ses suites.`, cles: {} },
  steps: [
    Q(7, "Suite minimisante bornée", R`<p>Même argument qu'en Q1.</p>`, R`<p>Si $(x_k)$ n'était pas bornée, une sous-suite aurait une norme qui tend vers $+\infty$, et $J$ tendrait vers $+\infty$ le long de cette sous-suite (coercivité), contredisant $J(x_k)\to\inf J\lt+\infty$. Donc $\|x_k\|\leqslant K$, et la Partie II fournit une extraction $y_k = x_{\psi(k)}$ et $a\in H$ avec $\langle u,y_k\rangle\to\langle u,a\rangle$ pour tout $u$. On a toujours $J(y_k)\to\inf J$.</p>`, ["oh-coer"]),
    Q(8, "La limite faible reste dans les sous-niveaux", R`<p>Pour $k$ grand, $y_k\in C_\beta$, donc $\langle y_k-p(a),a-p(a)\rangle\leqslant0$ ; passer à la limite faible avec $u = a-p(a)$.</p>`, R`<p><b>$C_\beta$ convexe fermé non vide.</b> Fermé : image réciproque de $]-\infty,\beta]$ par $J$ continue. Convexe : si $x,y\in C_\beta$ et $t\in[0,1]$, $J(tx+(1-t)y)\leqslant tJ(x)+(1-t)J(y)\leqslant\beta$. Non vide : $\beta>\inf J$, donc il existe $x$ avec $J(x)\lt\beta$.</p><p><b>$a\in C_\beta$.</b> Comme $J(y_k)\to\inf J\lt\beta$, il existe $N$ tel que $y_k\in C_\beta$ pour $k\geqslant N$. Par la caractérisation de la projection :</p>$$\forall k\geqslant N,\quad\langle y_k-p(a),\,a-p(a)\rangle\leqslant0.$$<p>Avec $u = a-p(a)$ fixé, $\langle y_k,u\rangle\to\langle a,u\rangle$ (convergence faible). En passant à la limite :</p>$$\langle a-p(a),\,a-p(a)\rangle = \|a-p(a)\|^2\leqslant0,$$<p>donc $a = p(a)\in C_\beta$.</p>${figProj}`, ["oh-proj"]),
    Q(9, "Conclusion et unicité", R`<p>$J(a)\leqslant\beta$ pour tout $\beta>\inf J$. Unicité : milieu de deux minimiseurs.</p>`, R`<p>Par Q8, $J(a)\leqslant\beta$ pour tout réel $\beta>\inf J$. Si $\inf J = -\infty$, c'est absurde ($J(a)$ est un réel, et on prend $\beta = J(a)-1$) ; donc $\inf J$ est fini, et en faisant $\beta\to\inf J$, $J(a)\leqslant\inf J$, soit</p><div class="sbox">$$J(a) = \min_HJ.$$</div><p><b>Unicité.</b> Si $J$ est strictement convexe et $a\neq a'$ sont deux minimiseurs, $J\big(\frac{a+a'}2\big)\lt\frac12J(a)+\frac12J(a') = \min J$ : absurde.</p>`),
    Q(10, "Une application", R`<p>$J\geqslant\|x\|^2-\|x\|\|b\|$ (en minorant $\lambda\|x-b\|\geqslant0$) ; convexité terme à terme.</p>`, R`<p><b>Continue</b> : somme de fonctions continues. <b>Convexe</b> : $\|x\|^2$ est convexe (même strictement : $\|tx+(1-t)y\|^2 = t\|x\|^2+(1-t)\|y\|^2-t(1-t)\|x-y\|^2$), $x\mapsto\lambda\|x-b\|$ est convexe (inégalité triangulaire), et $x\mapsto-\langle x,b\rangle$ est linéaire. <b>Coercive</b> : $J(x)\geqslant\|x\|^2-\|x\|\,\|b\|\to+\infty$. Par Q9, $J$ atteint son minimum, et en un unique point car $J$ est strictement convexe. Le terme $\lambda\|x-b\|$ n'est pas différentiable en $b$ : l'argument d'existence n'utilise aucune dérivée.</p>`)
  ],
  piege: R`La convexité sert exactement à une chose : rendre les ensembles de sous-niveau convexes, pour pouvoir y appliquer la projection et passer à la limite faible. Sans elle, Q3 montre que tout s'écroule.`,
  methode: R`Méthode directe du calcul des variations : suite minimisante bornée, sous-suite faiblement convergente, et semi-continuité inférieure faible de $J$ (ici fournie par convexité + continuité).`
}
]);
})();

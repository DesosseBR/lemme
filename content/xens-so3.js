/* Commando X-ENS · Aller plus loin · Sujet « SO₃(ℝ) et les quaternions ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 15, kind: "probleme", qnav: true, side: true, level: 4, plus: "so3",
  sujet: "Les quaternions et le groupe des rotations SO₃(ℝ)",
  sujetDesc: "Les quaternions unitaires agissent par conjugaison sur les quaternions purs (≃ ℝ³) en préservant la norme : on obtient un morphisme Sp(1) → SO₃(ℝ), continu, de noyau {±1}, surjectif car il atteint tous les retournements. D'où SO₃(ℝ) ≃ Sp(1)/{±1}. Le quaternion cos(θ/2) + sin(θ/2)v code la rotation d'angle θ autour de v : c'est ainsi qu'on compose les rotations en informatique 3D." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "s3-ret": { t: "Retournements", b: R`$$r_D = 2p_D-\mathrm{id},\qquad SO_3(\mathbb R) = \langle\text{retournements}\rangle,\qquad\operatorname{Rot}_{\theta} = r_{D_2}\circ r_{D_1},\ \widehat{(D_1,D_2)} = \frac\theta2.$$` },
  "s3-conn": { t: "Connexité et continuité", b: R`$$f\text{ continue},\ A\text{ connexe}\Rightarrow f(A)\text{ connexe};\qquad S^3\text{ c.p.a.};\qquad f : A\to\{-1,1\}\text{ continue}\Rightarrow f\text{ constante}.$$` },
  "s3-on": { t: "Endomorphismes orthogonaux", b: R`$$\forall x,\ \|u(x)\| = \|x\|\ \Longrightarrow\ u\in O(E),\ \det u = \pm1;\qquad s\in O(E),\ s^2 = \mathrm{id}\Rightarrow s\text{ symétrie orthogonale}.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\mathbb H$ est le $\mathbb R$-espace vectoriel de base $(1,i,j,k)$, muni de la multiplication bilinéaire telle que $1$ est neutre et $i^2 = j^2 = k^2 = ijk = -1$ (d'où $ij = k = -ji$, $jk = i = -kj$, $ki = j = -ik$). On admet que $\mathbb H$ est une $\mathbb R$-algèbre associative. Pour $q = a+bi+cj+dk$, on pose $\bar q = a-bi-cj-dk$, $N(q) = a^2+b^2+c^2+d^2$, $\mathrm{Re}\,q = a$, et $\mathrm{Im}\,\mathbb H = \{q : \mathrm{Re}\,q = 0\} = \mathrm{Vect}(i,j,k)$, identifié à $\mathbb R^3$ euclidien. On note $Sp(1) = \{q : N(q) = 1\}$.</p>`;

/* Figure : retournement s_v et rotation s_u */
const figRot = (() => { let b = "";
  const o = [170, 150];
  b += `<line x1="${o[0]}" y1="${o[1] + 110}" x2="${o[0]}" y2="${o[1] - 125}" class="vk" style="stroke-width:1.6"/>` + S(o[0] + 8, o[1] - 118, "axe v", "start", "sm");
  b += `<ellipse cx="${o[0]}" cy="${o[1] - 30}" rx="80" ry="22" class="thin" style="fill:none"/>`;
  const p1 = [o[0] + 70, o[1] - 41], p2 = [o[0] - 70, o[1] - 19];
  b += `<line x1="${o[0]}" y1="${o[1]}" x2="${p1[0]}" y2="${p1[1]}" class="vb" style="stroke-width:2"/><line x1="${o[0]}" y1="${o[1]}" x2="${p2[0]}" y2="${p2[1]}" class="vr" style="stroke-width:2"/><line x1="${o[0]}" y1="${o[1] - 30}" x2="${p1[0]}" y2="${p1[1]}" class="thin"/><line x1="${o[0]}" y1="${o[1] - 30}" x2="${p2[0]}" y2="${p2[1]}" class="thin"/>`;
  b += `<circle cx="${p1[0]}" cy="${p1[1]}" r="3.5" class="ptb"/><circle cx="${p2[0]}" cy="${p2[1]}" r="3.5" class="ptr"/>` + S(p1[0] + 6, p1[1] - 4, "x", "start", "sm b") + S(p2[0] + 10, p2[1] + 20, "s_v(x) = vxv⁻¹", "middle", "sm r");
  b += S(o[0], o[1] + 128, "retournement : u = v pur unitaire", "middle", "sm");
  const c = [410, 150]; b += `<line x1="${c[0]}" y1="${c[1] + 110}" x2="${c[0]}" y2="${c[1] - 125}" class="vk" style="stroke-width:1.6"/>` + S(c[0] + 8, c[1] - 118, "axe v", "start", "sm");
  b += `<ellipse cx="${c[0]}" cy="${c[1] - 30}" rx="80" ry="22" class="thin" style="fill:none"/>`;
  const q1 = [c[0] + 78, c[1] - 34], q2 = [c[0] + 18, c[1] - 9];
  b += `<line x1="${c[0]}" y1="${c[1] - 30}" x2="${q1[0]}" y2="${q1[1]}" class="vb" style="stroke-width:2"/><line x1="${c[0]}" y1="${c[1] - 30}" x2="${q2[0]}" y2="${q2[1]}" class="vr" style="stroke-width:2"/><path d="M${c[0] + 40} ${c[1] - 31} Q ${c[0] + 34} ${c[1] - 18} ${c[0] + 12} ${c[1] - 20}" class="vk" style="fill:none;stroke-width:1.2"/>`;
  b += S(q1[0] + 4, q1[1] - 4, "w", "start", "sm b") + S(q2[0] + 6, q2[1] + 14, "cos θ w + sin θ vw", "start", "sm r") + S(c[0] + 44, c[1] - 40, "θ", "start", "sm") + S(c[0], c[1] + 128, "rotation : u = cos(θ/2) + sin(θ/2) v", "middle", "sm");
  return FIG(540, 290, b, R`À gauche : pour $v$ pur unitaire, $s_v$ fixe $v$ et renverse le plan orthogonal à $v$ : c'est le retournement d'axe $\mathbb Rv$. À droite : $u = \cos\frac\theta2+\sin\frac\theta2v$ fixe $v$ et fait tourner d'un angle $\theta$ le plan $v^\perp$, dont $(w,vw)$ est une base orthonormée directe.`, "Quaternions et rotations"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "so3-1", ...P, part: "Partie I", time: "30 min",
  title: "L'algèbre des quaternions",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $q\bar q = \bar qq = N(q)$, que $\overline{pq} = \bar q\,\bar p$, puis que $N(pq) = N(p)N(q)$. En déduire que tout $q\neq0$ est inversible, d'inverse $\frac{\bar q}{N(q)}$, et que $Sp(1)$ est un groupe, homéomorphe à la sphère $S^3$.</li>
<li>Montrer que le centre de $\mathbb H$ (éléments qui commutent avec tous les autres) est $\mathbb R$.</li>
<li>Montrer que pour $q\in\mathrm{Im}\,\mathbb H$ : $q^2 = -N(q)$. En déduire qu'un quaternion pur unitaire $v$ vérifie $v^2 = -1$ et $v^{-1} = -v$.</li>
<li>Pour $v,w\in\mathrm{Im}\,\mathbb H$, montrer que $vw = -\langle v,w\rangle+v\wedge w$ (produit scalaire et produit vectoriel de $\mathbb R^3$).</li></ol>`,
  decode: { donnees: [R`Table de multiplication de $i,j,k$.`], but: R`Établir les propriétés algébriques et métriques de $\mathbb H$.`, cles: {} },
  steps: [
    Q(1, "Conjugaison et norme", R`<p>Calculer $q\bar q$ directement ; pour $\overline{pq}$, vérifier sur la base par bilinéarité.</p>`, R`<p>Écrivons $q = a+x$ avec $x = bi+cj+dk$ pur. Alors $\bar q = a-x$ et $q\bar q = a^2-x^2$ (car $a$ réel commute avec tout). Or $x^2 = b^2i^2+c^2j^2+d^2k^2+bc(ij+ji)+bd(ik+ki)+cd(jk+kj) = -(b^2+c^2+d^2)$. Donc $q\bar q = N(q) = \bar qq$.</p><p>L'application $(p,q)\mapsto\overline{pq}$ et $(p,q)\mapsto\bar q\bar p$ sont bilinéaires : il suffit de comparer sur la base. Pour $p = i$, $q = j$ : $\overline{ij} = \bar k = -k$ et $\bar j\,\bar i = (-j)(-i) = ji = -k$. Les autres cas sont analogues (et triviaux si $p$ ou $q$ vaut $1$, ou si $p = q$).</p><p>Ainsi $N(pq) = pq\overline{pq} = pq\bar q\bar p = p\,N(q)\,\bar p = N(q)\,p\bar p = N(p)N(q)$. Si $q\neq0$, $q\cdot\frac{\bar q}{N(q)} = 1 = \frac{\bar q}{N(q)}\cdot q$. Par multiplicativité, $Sp(1)$ est stable par produit et inverse ($N(q^{-1}) = N(q)^{-1}$) : c'est un groupe, et c'est la sphère unité de $\mathbb R^4$ pour la norme euclidienne $\sqrt N$.</p>`),
    Q(2, "Le centre", R`<p>Commuter avec $i$ et avec $j$.</p>`, R`<p>Soit $q = a+bi+cj+dk$ central. $iq = ai-b+ck-dj$ et $qi = ai-b-ck+dj$ : $iq = qi$ impose $c = d = 0$. De même $jq = qj$ impose $b = d = 0$ (calcul analogue). Donc $q = a\in\mathbb R$. Réciproquement, les réels commutent avec tout.</p>`),
    Q(3, "Carré d'un quaternion pur", R`<p>Calcul déjà fait en Q1.</p>`, R`<p>Pour $x = bi+cj+dk$, on a vu $x^2 = -(b^2+c^2+d^2) = -N(x)$. Si de plus $N(v) = 1$, $v^2 = -1$, donc $v(-v) = 1$ : $v^{-1} = -v = \bar v$.</p>`),
    Q(4, "Produit de deux quaternions purs", R`<p>Développer $(b_1i+c_1j+d_1k)(b_2i+c_2j+d_2k)$.</p>`, R`<p>Avec $v = (b_1,c_1,d_1)$, $w = (b_2,c_2,d_2)$ : les termes « diagonaux » donnent $-(b_1b_2+c_1c_2+d_1d_2) = -\langle v,w\rangle$ ; les termes croisés donnent $(c_1d_2-d_1c_2)i+(d_1b_2-b_1d_2)j+(b_1c_2-c_1b_2)k = v\wedge w$ (par $jk = i$, $kj = -i$, etc.). Donc</p><div class="sbox">$$vw = -\langle v,w\rangle+v\wedge w.$$</div><p>En particulier, si $v\perp w$, $vw = v\wedge w$ est pur et orthogonal à $v$ et $w$.</p>`)
  ],
  piege: R`$\mathbb H$ n'est pas commutatif : $\overline{pq} = \bar q\bar p$ (ordre inversé), et un polynôme de degré $2$ peut y avoir une infinité de racines ($X^2+1$ s'annule sur toute la sphère des purs unitaires).`,
  methode: R`Dans $\mathbb H$, écrire $q = \mathrm{Re}\,q+\mathrm{Im}\,q$ et utiliser $vw = -\langle v,w\rangle+v\wedge w$ pour les parties pures.`
},

/* ===================== Partie II ===================== */
{ id: "so3-2", ...P, part: "Partie II", time: "35 min",
  title: "Le morphisme Sp(1) → SO₃(ℝ)",
  enonce: PRE + R`<p><b>Partie II.</b> Pour $u\in Sp(1)$, on pose $S_u(q) = uqu^{-1} = uq\bar u$ pour $q\in\mathbb H$.</p><ol start="5">
<li>Montrer que $S_u$ est linéaire, conserve $N$, que $S_{uu'} = S_u\circ S_{u'}$, et que $S_u$ stabilise $\mathbb R$ et $\mathrm{Im}\,\mathbb H$. On note $s_u = S_u|_{\mathrm{Im}\,\mathbb H}\in O(\mathrm{Im}\,\mathbb H)$.</li>
<li>Montrer que $s : u\mapsto s_u$ est un morphisme de groupes de noyau $\{\pm1\}$.</li>
<li>Pour $u = a+bi+cj+dk$, calculer la première colonne de la matrice de $s_u$ dans la base $(i,j,k)$. En déduire que $s$ est continue, puis que $s_u\in SO_3(\mathbb R)$ pour tout $u$.</li></ol>`,
  decode: { donnees: [R`Partie I.`], but: R`Construire un morphisme continu de la sphère $S^3$ dans le groupe des rotations.`, cles: {} },
  steps: [
    Q(5, "Conjugaison par un unitaire", R`<p>$N(uq\bar u) = N(u)N(q)N(\bar u)$. Pour la stabilité de $\mathrm{Im}\,\mathbb H$ : $\overline{uq\bar u} = u\bar q\bar u$.</p>`, R`<p>$S_u$ est linéaire (distributivité). $N(S_u(q)) = N(u)N(q)N(\bar u) = N(q)$. $S_{uu'}(q) = uu'q(uu')^{-1} = u(u'qu'^{-1})u^{-1} = S_u(S_{u'}(q))$. Pour $q$ réel, $S_u(q) = quu^{-1} = q$. Pour $q$ pur, $\bar q = -q$, donc $\overline{S_u(q)} = \overline{uq\bar u} = u\bar q\bar u = -S_u(q)$ : $S_u(q)$ est pur.</p><p>Ainsi $s_u$ est un endomorphisme de $\mathrm{Im}\,\mathbb H\simeq\mathbb R^3$ qui conserve la norme euclidienne $\sqrt N$ : $s_u\in O_3(\mathbb R)$.</p>`, ["s3-on"]),
    Q(6, "Morphisme et noyau", R`<p>$s_u = \mathrm{id}$ signifie que $u$ commute avec $i,j,k$, donc avec tout $\mathbb H$.</p>`, R`<p>Par Q5, $s_{uu'} = s_u\circ s_{u'}$ et $s_1 = \mathrm{id}$ : $s$ est un morphisme $Sp(1)\to O_3(\mathbb R)$. Si $s_u = \mathrm{id}$, $uq = qu$ pour tout $q$ pur, et aussi pour $q$ réel, donc pour tout $q\in\mathbb H$ : $u$ est central, donc réel (Q2), et $N(u) = 1$ donne $u = \pm1$. Réciproquement $s_{\pm1} = \mathrm{id}$. Donc $\ker s = \{\pm1\}$ : $u$ et $-u$ donnent la même isométrie.</p>`),
    Q(7, "Continuité et déterminant", R`<p>$s_u(i) = ui\bar u$ : développer. Puis $\det\circ s$ est continue sur $S^3$ connexe, à valeurs dans $\{\pm1\}$, et vaut $1$ en $u = 1$.</p>`, R`<p>On calcule $ui = (a+bi+cj+dk)i = ai-b-ck+dj$, puis</p>$$\begin{aligned}s_u(i) &= (ai-b-ck+dj)(a-bi-cj-dk)\\&= (a^2+b^2-c^2-d^2)\,i+2(bc+ad)\,j+2(bd-ac)\,k.\end{aligned}$$<p>(La partie réelle s'annule, comme prévu.) De même pour $s_u(j)$, $s_u(k)$ : les coefficients de la matrice de $s_u$ sont des polynômes en $(a,b,c,d)$, donc $s$ est continue. (Le livre donne un coefficient inexact en $k$ : c'est $2(bd-ac)$.)</p><p>$\det\circ s : Sp(1)\to\{-1,1\}$ est continue sur $Sp(1)\simeq S^3$, connexe : elle est constante, égale à $\det(s_1) = 1$. Donc $s$ est à valeurs dans $SO_3(\mathbb R)$.</p>`, ["s3-conn"])
  ],
  piege: R`Sans l'argument de connexité, rien n'empêche a priori $s_u$ d'être une isométrie indirecte. C'est la connexité de $S^3$ qui l'exclut.`,
  methode: R`Pour montrer qu'un morphisme continu à valeurs dans $O_n$ tombe dans $SO_n$ : connexité de l'espace de départ et continuité du déterminant.`
},

/* ===================== Partie III ===================== */
{ id: "so3-3", ...P, part: "Partie III", time: "35 min",
  title: "Surjectivité et rotations explicites",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="8">
<li>Soit $v\in\mathrm{Im}\,\mathbb H$ unitaire. Montrer que $s_v$ est le retournement d'axe $\mathbb Rv$. En déduire que $s$ est surjective et que $SO_3(\mathbb R)\simeq Sp(1)/\{\pm1\}$.</li>
<li>Soient $v$ pur unitaire et $\theta\in\mathbb R$, $u = \cos\frac\theta2+\sin\frac\theta2\,v$. Montrer que $s_u$ est la rotation d'axe $\mathbb Rv$ (orienté par $v$) et d'angle $\theta$. (Calculer $s_u(v)$ et $s_u(w)$ pour $w$ pur unitaire orthogonal à $v$.)</li>
<li>Déterminer la composée de la rotation d'angle $\frac\pi2$ autour de $i$ suivie de la rotation d'angle $\frac\pi2$ autour de $j$.</li></ol>`,
  decode: { donnees: [R`Parties I et II.`], but: R`Atteindre tous les retournements, puis lire angle et axe sur le quaternion.`, cles: {} },
  steps: [
    Q(8, "Retournements et surjectivité", R`<p>$s_v(v) = v$, $s_v^2 = s_{v^2} = s_{-1} = \mathrm{id}$, $s_v\neq\mathrm{id}$, $\det s_v = 1$.</p>`, R`<p>$s_v(v) = vvv^{-1} = v$. Par Q3, $v^2 = -1$, donc $s_v^2 = s_{v^2} = s_{-1} = \mathrm{id}$ : $s_v$ est une isométrie involutive, donc une symétrie orthogonale. Ses valeurs propres sont $\pm1$ ; $\det s_v = 1$ (Q7) impose une multiplicité paire pour $-1$. Comme $v\neq\pm1$, $s_v\neq\mathrm{id}$ (Q6) : $-1$ est de multiplicité $2$ et $1$ de multiplicité $1$, avec $v$ vecteur propre pour $1$. Donc $s_v$ est le retournement d'axe $\mathbb Rv$.</p><p>Tout retournement $r_D$ s'obtient ainsi (choisir $v$ unitaire dirigeant $D$). Comme les retournements engendrent $SO_3(\mathbb R)$ et que $s(Sp(1))$ est un sous-groupe, $s$ est surjective. Par le premier théorème d'isomorphisme :</p><div class="sbox">$$SO_3(\mathbb R)\simeq Sp(1)/\{\pm1\}.$$</div>`, ["s3-ret"]),
    Q(9, "Le quaternion d'une rotation", R`<p>$u$ commute avec $v$. Pour $w\perp v$ : $vw = -wv$, donc $uw\bar u = u^2w$.</p>`, R`<p>$N(u) = \cos^2\frac\theta2+\sin^2\frac\theta2 = 1$. $u$ est combinaison de $1$ et $v$, donc commute avec $v$ : $s_u(v) = v$. Soit $w$ pur unitaire, $w\perp v$. Par Q4, $vw = v\wedge w = -wv$, donc $w\bar u = w\big(\cos\frac\theta2-\sin\frac\theta2v\big) = \big(\cos\frac\theta2+\sin\frac\theta2v\big)w = uw$. Ainsi</p>$$s_u(w) = uw\bar u = u^2w = (\cos\theta+\sin\theta\,v)w = \cos\theta\,w+\sin\theta\,vw,$$<p>car $u^2 = \cos^2\frac\theta2-\sin^2\frac\theta2+2\cos\frac\theta2\sin\frac\theta2v$ ($v^2 = -1$). Or $vw = v\wedge w$ : $(v,w,v\wedge w)$ est orthonormée directe, et $s_u$ envoie $w$ sur $\cos\theta\,w+\sin\theta\,(v\wedge w)$. C'est la rotation d'axe dirigé par $v$ et d'angle $\theta$. Pour $\theta = \pi$, $u = v$ et on retrouve Q8.</p>${figRot}`),
    Q(10, "Composer deux rotations", R`<p>$u_1 = \frac{1+i}{\sqrt2}$, $u_2 = \frac{1+j}{\sqrt2}$, composée $s_{u_2}\circ s_{u_1} = s_{u_2u_1}$.</p>`, R`<p>Par Q9, la rotation d'angle $\frac\pi2$ autour de $i$ est $s_{u_1}$ avec $u_1 = \cos\frac\pi4+\sin\frac\pi4i = \frac{1+i}{\sqrt2}$, et celle autour de $j$ est $s_{u_2}$, $u_2 = \frac{1+j}{\sqrt2}$. La composée est $s_{u_2u_1}$ avec</p>$$u_2u_1 = \frac{(1+j)(1+i)}2 = \frac{1+i+j+ji}2 = \frac{1+i+j-k}2.$$<p>On l'écrit $\cos\frac\theta2+\sin\frac\theta2v$ : $\cos\frac\theta2 = \frac12$, donc $\theta = \frac{2\pi}3$, et $\sin\frac\theta2v = \frac{i+j-k}2$, soit $v = \frac{i+j-k}{\sqrt3}$. La composée est la rotation d'angle $\frac{2\pi}3$ autour de l'axe dirigé par $(1,1,-1)$ (un axe de symétrie d'ordre $3$ du cube). Avec des matrices, il aurait fallu multiplier deux matrices $3\times3$ puis lire l'axe et l'angle.</p>`)
  ],
  piege: R`Le quaternion d'une rotation n'est défini qu'au signe près : $u$ et $-u$ (angles $\theta$ et $\theta+2\pi$ pour $\frac\theta2$) donnent la même rotation. C'est le noyau $\{\pm1\}$.`,
  methode: R`Pour composer des rotations de l'espace : multiplier les quaternions $\cos\frac\theta2+\sin\frac\theta2v$, puis relire angle et axe sur la partie réelle et la partie pure du produit.`
}
]);
})();

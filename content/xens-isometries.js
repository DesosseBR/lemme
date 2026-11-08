/* Commando X-ENS · Aller plus loin · Sujet « Générateurs des isométries vectorielles et affines ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 15, kind: "probleme", qnav: true, side: true, level: 4, plus: "iso",
  sujet: "Les réflexions engendrent les isométries",
  sujetDesc: "Les réflexions jouent pour les isométries le rôle des transpositions pour les permutations : toute isométrie vectorielle u est produit de r = rg(u − Id) réflexions, et pas moins. En dimension ≥ 3, les isométries positives sont produits d'au plus r retournements. Dans un espace affine, il faut r réflexions s'il y a un point fixe, et r + 2 sinon (translations, symétries glissées)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "is-refl": { t: "Réflexions", b: R`<p>La réflexion d'hyperplan $H = a^\perp$ ($\|a\| = 1$) est $s(x) = x-2\langle x,a\rangle a$ : elle fixe $H$, envoie $a$ sur $-a$, est une isométrie involutive de déterminant $-1$. Si $\|x\| = \|y\|$ et $x\neq y$, la réflexion d'hyperplan $(x-y)^\perp$ échange $x$ et $y$.</p>` },
  "is-gras": { t: "Intersection d'hyperplans", b: R`<p>Par Grassmann, $p$ hyperplans de $E$ ont une intersection de dimension $\geqslant\dim E-p$, avec égalité si et seulement si les formes linéaires qui les définissent sont indépendantes.</p>` },
  "is-rang": { t: "Théorème du rang", b: R`<p>$\dim\ker(u-\operatorname{Id})+\operatorname{rg}(u-\operatorname{Id}) = \dim E$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $E$ est un espace euclidien de dimension $n\geqslant1$, $O(E)$ le groupe de ses isométries, $SO(E)$ celles de déterminant $1$. La <b>symétrie orthogonale</b> par rapport à un sous-espace $F$ est $s_F(x+y) = x-y$ ($x\in F$, $y\in F^\perp$). Une <b>réflexion</b> est une $s_H$ avec $H$ hyperplan ; un <b>retournement</b> est une $s_F$ avec $\dim F = n-2$. Pour $u\in O(E)$, on note $r(u) = \operatorname{rg}(u-\operatorname{Id})$. Dans un espace affine euclidien $\mathcal E$ de direction $E$, une isométrie $f$ a une partie linéaire $\vec f\in O(E)$ ; une réflexion affine est une isométrie de partie linéaire une réflexion qui a un point fixe.</p>`;

/* Figure : deux réflexions → rotation ou translation */
const figDeux = (() => {
  let b = "";
  const cx = 110, cy = 140;
  b += `<line x1="${cx - 90}" y1="${cy}" x2="${cx + 90}" y2="${cy}" class="vb" style="stroke-width:1.8"/>`;
  const a = Math.PI / 6;
  b += `<line x1="${cx - 90 * Math.cos(a)}" y1="${cy + 90 * Math.sin(a)}" x2="${cx + 90 * Math.cos(a)}" y2="${cy - 90 * Math.sin(a)}" class="vr" style="stroke-width:1.8"/>`;
  const P0 = [cx + 70, cy + 25], rot = (p, t) => [cx + (p[0] - cx) * Math.cos(t) + (p[1] - cy) * Math.sin(t), cy - (p[0] - cx) * Math.sin(t) + (p[1] - cy) * Math.cos(t)];
  const P1 = [P0[0], 2 * cy - P0[1]], P2 = rot(P0, 2 * a);
  [P0, P1, P2].forEach((p, k) => { b += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4" class="${["pt", "ptb", "ptr"][k]}"/>` + S(p[0] + 8, p[1] + 4, ["x", "s₁(x)", "s₂s₁(x)"][k], "start", "it"); });
  b += `<path d="M${cx + 40},${cy} A40,40 0 0 0 ${(cx + 40 * Math.cos(a)).toFixed(1)},${(cy - 40 * Math.sin(a)).toFixed(1)}" class="thin" style="stroke-dasharray:none"/>` + S(cx + 46, cy - 6, "θ", "start", "it");
  b += S(cx, cy + 105, "droites sécantes : rotation d'angle 2θ", "middle", "sm");
  const ox = 300;
  b += `<line x1="${ox}" y1="40" x2="${ox}" y2="230" class="vb" style="stroke-width:1.8"/><line x1="${ox + 50}" y1="40" x2="${ox + 50}" y2="230" class="vr" style="stroke-width:1.8"/>`;
  const Q0 = [ox - 30, 120], Q1 = [ox + 30, 120], Q2 = [ox + 70, 120];
  [Q0, Q1, Q2].forEach((p, k) => { b += `<circle cx="${p[0]}" cy="${p[1]}" r="4" class="${["pt", "ptb", "ptr"][k]}"/>` + S(p[0], p[1] - 10, ["x", "s₁x", "s₂s₁x"][k], "middle", "it"); });
  b += `<line x1="${ox - 30}" y1="150" x2="${ox + 70}" y2="150" class="vk" style="stroke-width:1.2"/>` + S(ox + 20, 168, "2d", "middle", "it") + S(ox + 25, 245, "droites parallèles : translation", "middle", "sm");
  return FIG(440, 260, b, R`Composée de deux réflexions du plan : par rapport à deux droites sécantes faisant un angle $\theta$, c'est la rotation d'angle $2\theta$ ; par rapport à deux droites parallèles à distance $d$, c'est la translation de vecteur $2d$ (perpendiculaire aux droites).`, "Deux réflexions");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "iso-1", ...P, part: "Partie I", time: "35 min",
  title: "r(u) réflexions suffisent et sont nécessaires",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $u\in O(E)$.</p><ol start="1">
<li>Montrer que $\ker(u-\operatorname{Id})$ et $\operatorname{Im}(u-\operatorname{Id})$ sont orthogonaux (et donc supplémentaires).</li>
<li>On suppose $u\neq\operatorname{Id}$ ; soit $e$ unitaire avec $u(e)\neq e$, et $s$ la réflexion d'hyperplan $(u(e)-e)^\perp$. Montrer que $s(u(e)) = e$ et que $\ker(u-\operatorname{Id})\subsetneq\ker(su-\operatorname{Id})$.</li>
<li>En déduire par récurrence que $u$ est produit de $r(u)$ réflexions.</li>
<li>Montrer que si $u = s_1\cdots s_p$ (réflexions d'hyperplans $H_i$), alors $p\geqslant r(u)$, et que $p\equiv r(u)\pmod2$. Que vaut $\det u$ en fonction de $r(u)$ ?</li></ol>`,
  decode: { donnees: [R`$\|u(x)\| = \|x\|$, $\langle u(x),u(y)\rangle = \langle x,y\rangle$.`], but: R`Agrandir l'espace des points fixes d'au moins une dimension en composant par une réflexion bien choisie.`, cles: {} },
  steps: [
    Q(1, "Noyau et image orthogonaux", R`<p>Si $u(x) = x$ : $\langle x,u(y)-y\rangle = \langle u(x),u(y)\rangle-\langle x,y\rangle$.</p>`, R`<p>Soit $x\in\ker(u-\operatorname{Id})$ et $y\in E$. Comme $u(x) = x$ et $u$ conserve le produit scalaire :</p>$$\langle x,u(y)-y\rangle = \langle u(x),u(y)\rangle-\langle x,y\rangle = 0.$$<p>Donc $\ker(u-\operatorname{Id})\perp\operatorname{Im}(u-\operatorname{Id})$, et par le théorème du rang ils sont supplémentaires (orthogonaux et de dimensions complémentaires).</p>`, ["is-rang"]),
    Q(2, "Une réflexion qui gagne un point fixe", R`<p>$\|u(e)\| = \|e\|$ : $s$ échange $u(e)$ et $e$. Les points fixes de $u$ sont orthogonaux à $u(e)-e\in\operatorname{Im}(u-\operatorname{Id})$.</p>`, R`<p>$\|u(e)\| = \|e\| = 1$ et $u(e)\neq e$ : $s$ échange $u(e)$ et $e$ (rappel), donc $(su)(e) = e$. Soit $x\in\ker(u-\operatorname{Id})$ : $x\perp u(e)-e$ (Q1), donc $s(x) = x$ et $su(x) = s(x) = x$. Ainsi $\ker(u-\operatorname{Id})\subset\ker(su-\operatorname{Id})$, et l'inclusion est stricte car $e$ est dans le second mais pas dans le premier.</p>`, ["is-refl"]),
    Q(3, "Existence de la décomposition", R`<p>$r(su)\lt r(u)$ ; récurrence forte sur $r$.</p>`, R`<p>Par le théorème du rang, $r(su) = n-\dim\ker(su-\operatorname{Id})\lt n-\dim\ker(u-\operatorname{Id}) = r(u)$. Récurrence forte sur $r$ : si $r = 0$, $u = \operatorname{Id}$, produit vide. Sinon, $su = s_1\cdots s_q$ avec $q\leqslant r(su)\leqslant r(u)-1$, d'où $u = s\,s_1\cdots s_q$ (car $s^2 = \operatorname{Id}$) : au plus $r(u)$ réflexions. La minoration de Q4 montrera qu'on ne peut pas faire mieux.</p><div class="sbox"><p>Toute isométrie $u$ est produit d'au plus $r(u)$ réflexions.</p></div>`),
    Q(4, "Minoration et parité", R`<p>$H_1\cap\dots\cap H_p\subset\ker(u-\operatorname{Id})$, et $\dim\geqslant n-p$.</p>`, R`<p>Tout $x\in H_1\cap\dots\cap H_p$ est fixé par chaque $s_i$, donc par $u$ : $H_1\cap\dots\cap H_p\subset\ker(u-\operatorname{Id})$. Donc $n-p\leqslant\dim\ker(u-\operatorname{Id}) = n-r(u)$, soit $p\geqslant r(u)$. Avec Q3 :</p><div class="sbox"><p>$u$ est produit de $r(u)$ réflexions, et pas moins.</p></div><p>$\det u = (-1)^p$ pour toute décomposition, donc $p\equiv$ constante modulo $2$, et $\det u = (-1)^{r(u)}$. Par exemple, une rotation de $\mathbb R^3$ d'angle $\neq0$ a $r = 2$ : produit de deux réflexions (figure) ; $-\operatorname{Id}_{\mathbb R^3}$ a $r = 3$.</p>${figDeux}`, ["is-gras"])
  ],
  piege: R`La réflexion qui envoie $u(e)$ sur $e$ doit fixer <b>tous</b> les points fixes de $u$, sinon on perdrait d'un côté ce qu'on gagne de l'autre : c'est l'orthogonalité de Q1 qui le garantit.`,
  methode: R`Décomposer en générateurs « simples » : composer par un générateur qui fait strictement progresser un invariant (ici $\dim\ker(u-\operatorname{Id})$), puis récurrence.`
},

/* ===================== Partie II ===================== */
{ id: "iso-2", ...P, part: "Partie II", time: "30 min",
  title: "Les retournements engendrent SO(E) en dimension ≥ 3",
  enonce: PRE + R`<p><b>Partie II.</b> On suppose $n\geqslant3$.</p><ol start="5">
<li>Montrer qu'un retournement est dans $SO(E)$, alors qu'une réflexion n'y est pas.</li>
<li>Soient $s_1,s_2$ des réflexions d'hyperplans $H_1\neq H_2$. Soit $V\subset H_1\cap H_2$ de dimension $n-3$. On pose $\rho_i = s_i$ sur $V$ et $\rho_i = -s_i$ sur $V^\perp$. Montrer que $\rho_i$ est le retournement par rapport à $V\oplus H_i^\perp$, et que $s_1s_2 = \rho_1\rho_2$.</li>
<li>En déduire que tout $u\in SO(E)$ est produit d'au plus $r(u)$ retournements. Pourquoi faut-il $n\geqslant3$ ?</li></ol>`,
  decode: { donnees: [R`Partie I ; $\det u = (-1)^{r(u)}$.`], but: R`Regrouper les réflexions deux par deux et remplacer chaque paire par deux retournements.`, cles: {} },
  steps: [
    Q(5, "Déterminants", R`<p>$\det s_F = (-1)^{\dim F^\perp}$.</p>`, R`<p>Dans une base orthonormée adaptée à $F\oplus F^\perp$, $s_F$ est diagonale avec $\dim F$ coefficients $1$ et $\dim F^\perp$ coefficients $-1$ : $\det s_F = (-1)^{\dim F^\perp}$. Réflexion : $\dim F^\perp = 1$, $\det = -1$. Retournement : $\dim F^\perp = 2$, $\det = 1$, et $s_F\in SO(E)$.</p>`),
    Q(6, "Deux réflexions = deux retournements", R`<p>Vérifie $\rho_i$ sur $V$, $H_i^\perp$, et l'orthogonal $W_i$ de $V$ dans $H_i$. Puis $\rho_1\rho_2 = s_1s_2$ car $-\operatorname{Id}$ sur $V^\perp$ commute et se compense.</p>`, R`<p>$V$ est stable par $s_i$ (fixé), donc $V^\perp$ aussi, et $\rho_i$ est bien défini. On décompose $E = V\oplus H_i^\perp\oplus W_i$ (orthogonalement), où $W_i$ est l'orthogonal de $V$ dans $H_i$ ($\dim W_i = 2$) :</p><ul><li>sur $V\subset H_i$ : $\rho_i = s_i = \operatorname{Id}$ ;</li><li>sur $H_i^\perp\subset V^\perp$ : $\rho_i = -s_i = -(-\operatorname{Id}) = \operatorname{Id}$ ;</li><li>sur $W_i\subset H_i\cap V^\perp$ : $\rho_i = -s_i = -\operatorname{Id}$.</li></ul><p>Donc $\rho_i$ est la symétrie orthogonale par rapport à $V\oplus H_i^\perp$, de dimension $(n-3)+1 = n-2$ : un retournement. Enfin $\rho_i = s_i\circ\delta$ où $\delta$ vaut $\operatorname{Id}$ sur $V$ et $-\operatorname{Id}$ sur $V^\perp$ ; $\delta$ commute avec $s_1,s_2$ (qui stabilisent $V$ et $V^\perp$) et $\delta^2 = \operatorname{Id}$, donc $\rho_1\rho_2 = s_1\delta s_2\delta = s_1s_2\delta^2 = s_1s_2$.</p>`),
    Q(7, "Conclusion", R`<p>$r(u)$ est pair pour $u\in SO(E)$.</p>`, R`<p>Pour $u\in SO(E)$, $(-1)^{r(u)} = 1$ : $r(u)$ est pair, $u = (s_1s_2)(s_3s_4)\cdots$. Chaque paire avec $H_{2k-1}\neq H_{2k}$ est un produit de deux retournements (Q6), et une paire avec hyperplans égaux vaut $\operatorname{Id}$. Donc $u$ est produit d'au plus $r(u)$ retournements.</p><p>Il faut $n\geqslant3$ pour avoir $\dim V = n-3\geqslant0$. Pour $n = 2$, un retournement est $s_{\{0\}} = -\operatorname{Id}$, et les produits de retournements sont $\pm\operatorname{Id}$ : ils n'engendrent pas $SO_2$.</p>`)
  ],
  piege: R`Un retournement de $\mathbb R^3$ est la rotation d'angle $\pi$ autour d'une droite ; en dimension $3$, toute rotation est donc produit de deux demi-tours, ce qui est vrai mais peu intuitif.`,
  methode: R`Transformer une décomposition en une autre : agir sur des sous-espaces orthogonaux stables, où l'on peut changer le signe sans changer le produit.`
},

/* ===================== Partie III ===================== */
{ id: "iso-3", ...P, part: "Partie III", time: "35 min",
  title: "Le cas affine",
  enonce: PRE + R`<p><b>Partie III.</b> Soit $f$ une isométrie de $\mathcal E$ et $r = r(\vec f)$.</p><ol start="8">
<li>Montrer que si $f$ a un point fixe, $f$ est produit de $r$ réflexions affines, et pas moins.</li>
<li>Montrer qu'une translation de vecteur $v\neq0$ est produit de deux réflexions affines, mais pas d'une.</li>
<li>On suppose que $f$ n'a pas de point fixe. Montrer que $f$ est produit de $r+2$ réflexions, et qu'elle ne peut pas l'être de $r$ (on montrera que $r$ hyperplans affines dont les directions ont une intersection de dimension $n-r$ se coupent) ni de $r+1$.</li>
<li>Application dans le plan : décrire une symétrie glissée et le nombre minimal de réflexions qui la composent.</li></ol>`,
  decode: { donnees: [R`Partie I ; $\overrightarrow{f\circ g} = \vec f\circ\vec g$.`], but: R`Vectorialiser en un point fixe s'il y en a un, sinon écrire $f$ = translation $\circ$ isométrie à point fixe.`, cles: {} },
  steps: [
    Q(8, "Avec un point fixe", R`<p>Vectorialiser en le point fixe $A$.</p>`, R`<p>En prenant un point fixe $A$ comme origine, $f$ s'identifie à $\vec f$, et les réflexions affines fixant $A$ aux réflexions vectorielles. Par la Partie I, $f$ est produit de $r$ réflexions affines (passant par $A$). Et si $f = \sigma_1\cdots\sigma_p$, alors $\vec f = \vec\sigma_1\cdots\vec\sigma_p$ est produit de $p$ réflexions vectorielles, donc $p\geqslant r$.</p>`),
    Q(9, "Les translations", R`<p>Deux hyperplans parallèles orthogonaux à $v$, à distance $\frac{\|v\|}2$.</p>`, R`<p>Soient $H_1$ et $H_2$ deux hyperplans affines orthogonaux à $v$, avec $H_2 = H_1+\frac v2$. Pour $x$, notons $x = h+tv$ avec $h\in H_1$. La réflexion $\sigma_1$ envoie $x$ sur $h-tv$, puis $\sigma_2$ (miroir en $H_1+\frac v2$) envoie $h-tv$ sur $h+(1+t)v = x+v$. Donc $\sigma_2\sigma_1$ est la translation de vecteur $v$. Une seule réflexion a des points fixes, la translation non : pas une.</p>${figDeux}`),
    Q(10, "Sans point fixe : r + 2", R`<p>$f = t_v\circ g$ avec $g$ à point fixe et $\vec g = \vec f$. Pour exclure $r$ : les formes linéaires des $\vec H_i$ sont indépendantes, donc le système affine a une solution.</p>`, R`<p><b>Existence.</b> Soit $A$ un point, $v = \overrightarrow{Af(A)}$ et $g = t_{-v}\circ f$ : $g(A) = A$ et $\vec g = \vec f$. Par Q8, $g$ est produit de $r$ réflexions, $t_v$ de $2$ (Q9) : $f = t_v\circ g$ est produit de $r+2$ réflexions.</p><p><b>Pas $r+1$.</b> Si $f = \sigma_1\cdots\sigma_p$, $\det\vec f = (-1)^p = (-1)^r$ : $p\equiv r\pmod2$.</p><p><b>Pas $r$.</b> Si $f = \sigma_1\cdots\sigma_r$ (hyperplans affines $H_i$), alors $\vec H_1\cap\dots\cap\vec H_r\subset\ker(\vec f-\operatorname{Id})$, de dimension $n-r$, et l'intersection est de dimension $\geqslant n-r$ : égalité, donc les $r$ formes linéaires définissant les $\vec H_i$ sont indépendantes. Le système affine $\ell_i(x) = c_i$ ($1\leqslant i\leqslant r$) a alors une solution : $\bigcap H_i\neq\emptyset$. Un point de cette intersection est fixé par tous les $\sigma_i$, donc par $f$ : contradiction.</p><div class="sbox"><p>Une isométrie affine est produit de $r$ réflexions si elle a un point fixe, de $r+2$ sinon, et pas moins.</p></div>`, ["is-gras"]),
    Q(11, "Symétrie glissée", R`<p>$f = t_v\circ\sigma_D$ avec $v$ parallèle à $D$ : $r = 1$, pas de point fixe.</p>`, R`<p>Une <b>symétrie glissée</b> du plan est $f = t_v\circ\sigma_D$ avec $v\neq0$ parallèle à la droite $D$. $\vec f$ est une réflexion vectorielle : $r = 1$. $f$ n'a pas de point fixe : $f(x) = x$ imposerait $\sigma_D(x)-x = -v$, or $\sigma_D(x)-x$ est orthogonal à $D$ et $v$ lui est parallèle, non nul. Par Q10, $f$ est produit de $3$ réflexions et pas moins : $\sigma_D$ suivie de deux réflexions par des droites perpendiculaires à $D$ (pour la translation). Exemple : les traces de pas dans le sable.</p>`)
  ],
  piege: R`Pour une isométrie affine, la décomposition de $\vec f$ ne suffit pas : les hyperplans affines doivent être placés, et l'absence de point fixe coûte exactement deux réflexions de plus.`,
  methode: R`Isométrie affine sans point fixe : l'écrire translation $\circ$ isométrie avec point fixe (même partie linéaire), puis traiter chaque morceau.`
}
]);
})();

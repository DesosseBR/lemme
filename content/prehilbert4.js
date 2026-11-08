/* Espaces préhilbertiens et euclidiens (Spé) : blocs « Projections orthogonales et calcul de distances » et « Familles obtusangles ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 7 };
const { GRAPH } = window.__LA;
LEMME.rappels({
  "eu-projo": { t: "Projection orthogonale", b: R`$$p^2 = p,\ \ker p = (\operatorname{Im}p)^\perp\ \Longrightarrow\ p\text{ projection orthogonale},\quad\operatorname{Mat}_{\text{b.o.n.}}(p)\in\mathcal S_n(\mathbb R).$$` },
  "eu-normal": { t: "Équations normales", b: R`$$p_F(x) = \sum_j\lambda_jf_j\ :\quad\forall i,\ \sum_j\lambda_j(f_j|f_i) = (x|f_i);\qquad d(x,F)^2 = \|x\|^2-(p_F(x)|x).$$` }
});
const figLn = GRAPH({ w: 460, h: 250, x: [0, 1], y: [-3, 1], xt: [0.25, 0.5, 0.75, 1], xtl: ["0,25", "0,5", "0,75", "1"], yt: [-2, -1, 0, 1], xl: "t",
  curves: [
    { f: t => t > 0.05 ? Math.log(t) : NaN, c: "b", lab: [0.12, -2.55, "ln t", "start"] },
    { f: t => 3 * t - 2.5, c: "r", lab: [0.66, 0.42, "3t − 5/2", "start"] }
  ] },
  R`La fonction $\ln$ (bleu) et sa meilleure approximation affine au sens des moindres carrés sur $]0,1]$ (rouge) : la droite $t\mapsto3t-\frac52$. L'aire « au carré » entre les deux vaut $m = \frac14$. La droite colle mal près de $0$ (où $\ln\to-\infty$) mais l'écart y est de carré intégrable.`, "Approximation de ln par une droite");
LEMME.exercises([
{ id: "pre-37", ...P, level: 2, time: "15 min",
  title: "Une projection telle que ⟨p(x), x⟩ ≥ 0 est orthogonale",
  enonce: R`<p>Soit $E$ un espace euclidien et $p$ une projection de $E$ (c'est-à-dire $p\circ p = p$) telle que $\langle p(x),x\rangle\geqslant0$ pour tout $x\in E$. Montrer que $p$ est une projection orthogonale.</p>`,
  decode: { donnees: [R`$E = \mathrm{Im}\,p\oplus\ker p$, et $p(y+z) = y$ pour $y\in\mathrm{Im}\,p$, $z\in\ker p$.`], but: R`Montrer que tout $y\in\mathrm{Im}\,p$ est orthogonal à tout $z\in\ker p$.`, cles: {} },
  steps: [
    { t: "Tester avec x = y + tz", h: R`<p>$y\in\mathrm{Im}\,p$, $z\in\ker p$, $t\in\mathbb R$ : $p(y+tz) = y$.</p>`, b: R`<p>Soient $y\in\mathrm{Im}\,p$ et $z\in\ker p$. Pour $t\in\mathbb R$, posons $x = y+tz$. Comme $p(y) = y$ et $p(z) = 0$ : $p(x) = y$. L'hypothèse donne</p>$$0\leqslant\langle p(x),x\rangle = \langle y,y+tz\rangle = \|y\|^2+t\langle y,z\rangle\quad\text{pour tout }t\in\mathbb R.$$`, rappels: ["eu-projo"] },
    { t: "Une fonction affine positive est constante", h: R`<p>Si $\langle y,z\rangle\neq0$, faire tendre $t$ vers $\pm\infty$.</p>`, b: R`<p>La fonction affine $t\mapsto\|y\|^2+t\langle y,z\rangle$ est minorée par $0$ sur $\mathbb R$. Si sa pente $\langle y,z\rangle$ était non nulle, elle tendrait vers $-\infty$ en $+\infty$ ou en $-\infty$. Donc $\langle y,z\rangle = 0$.</p><p>Ainsi $\ker p\perp\mathrm{Im}\,p$ : $p$ est la projection orthogonale sur $\mathrm{Im}\,p$.</p>` }
  ],
  piege: R`La réciproque est vraie : pour une projection orthogonale, $\langle p(x),x\rangle = \langle p(x),p(x)+(x-p(x))\rangle = \|p(x)\|^2\geqslant0$.`,
  methode: R`Pour montrer $\ker p\perp\mathrm{Im}\,p$ : injecter $x = y+tz$ dans l'hypothèse et exploiter le paramètre libre $t$.`
},
{ id: "pre-38", ...P, level: 3, time: "15 min",
  title: "Projection orthogonale ⟺ ‖p(x)‖ ≤ ‖x‖ (Mines)",
  enonce: R`<p>Soit $p$ une projection d'un espace euclidien $E$. Montrer que $p$ est orthogonale si et seulement si $\|p(x)\|\leqslant\|x\|$ pour tout $x\in E$.</p>`,
  decode: { donnees: [R`$x = p(x)+(x-p(x))$, avec $x-p(x)\in\ker p$.`], but: R`Sens direct : Pythagore. Réciproque : $x = y+tz$ et un trinôme de signe constant.`, cles: {} },
  steps: [
    { t: "Sens direct", h: R`<p>Pythagore : $\|x\|^2 = \|p(x)\|^2+\|x-p(x)\|^2$.</p>`, b: R`<p>Si $p$ est orthogonale, $p(x)\in\mathrm{Im}\,p$ et $x-p(x)\in\ker p$ sont orthogonaux, donc par Pythagore</p>$$\|x\|^2 = \|p(x)\|^2+\|x-p(x)\|^2\geqslant\|p(x)\|^2.$$`, rappels: ["eu-projo"] },
    { t: "Réciproque", h: R`<p>$y\in\mathrm{Im}\,p$, $z\in\ker p$, $x = y+tz$ : $\|y\|^2\leqslant\|y+tz\|^2$.</p>`, b: R`<p>Soient $y\in\mathrm{Im}\,p$, $z\in\ker p$, $t\in\mathbb R$ et $x = y+tz$ : $p(x) = y$. L'hypothèse $\|y\|^2\leqslant\|y+tz\|^2 = \|y\|^2+2t\langle y,z\rangle+t^2\|z\|^2$ donne</p>$$2t\langle y,z\rangle+t^2\|z\|^2\geqslant0\quad\text{pour tout }t\in\mathbb R.$$<p>Pour $t>0$, divisons par $t$ : $2\langle y,z\rangle+t\|z\|^2\geqslant0$, et en faisant $t\to0^+$, $\langle y,z\rangle\geqslant0$. Pour $t\lt0$, la division renverse l'inégalité : $2\langle y,z\rangle+t\|z\|^2\leqslant0$, et $t\to0^-$ donne $\langle y,z\rangle\leqslant0$. Donc $\langle y,z\rangle = 0$ : $\ker p\perp\mathrm{Im}\,p$, et $p$ est orthogonale.</p>` }
  ],
  piege: R`Une projection non orthogonale peut augmenter la norme : dans $\mathbb R^2$, la projection sur $\mathbb R(1,0)$ parallèlement à $\mathbb R(1,1)$ envoie $(1,-1)$, de norme $\sqrt2$, sur $(2,0)$, de norme $2$.`,
  methode: R`Inégalité vraie pour tout $t$ réel : diviser par $t$ selon son signe et faire $t\to0$ (dérivée en $0$ d'une fonction minimale en $0$).`
},
{ id: "pre-39", ...P, level: 2, time: "15 min",
  title: "Matrice d'une projection orthogonale en base orthonormée",
  enonce: R`<p>Soit $E$ un espace euclidien de dimension $n\geqslant1$, muni d'une base orthonormée $\mathcal B$, et $p$ la projection orthogonale sur un sous-espace $F$ de base orthonormée $(x_1,\dots,x_r)$. On note $X_1,\dots,X_r$ les colonnes de coordonnées de $x_1,\dots,x_r$ dans $\mathcal B$. Montrer que la matrice de $p$ dans $\mathcal B$ est</p>$$A = \sum_{k=1}^rX_k\,{}^tX_k.$$`,
  decode: { donnees: [R`$p(x) = \sum_k(x_k|x)\,x_k$ et, en base orthonormée, $(x_k|x) = {}^tX_kX$.`], but: R`Traduire la formule de projection en coordonnées.`, cles: {} },
  steps: [
    { t: "Formule de projection", h: R`<p>$p(x) = \sum_{k=1}^r(x_k|x)x_k$.</p>`, b: R`<p>Comme $(x_1,\dots,x_r)$ est une base orthonormée de $F$, le projeté orthogonal de $x$ est $p(x) = \sum_{k=1}^r(x_k|x)\,x_k$ (on vérifie que $x-p(x)\perp x_j$ pour tout $j$).</p>`, rappels: ["eu-dist"] },
    { t: "En coordonnées", h: R`<p>$\mathcal B$ orthonormée : $(x_k|x) = {}^tX_kX$, un réel.</p>`, b: R`<p>Soit $X$ la colonne des coordonnées de $x$. Comme $\mathcal B$ est orthonormée, $(x_k|x) = {}^tX_kX$ (matrice $1\times1$, identifiée à un réel). La colonne des coordonnées de $p(x)$ est donc</p>$$\sum_{k=1}^r({}^tX_kX)\,X_k = \sum_{k=1}^rX_k\,({}^tX_kX) = \Big(\sum_{k=1}^rX_k\,{}^tX_k\Big)X$$<p>(un scalaire commute avec la colonne, puis associativité du produit matriciel). C'est vrai pour toute colonne $X$, donc $\mathrm{Mat}_{\mathcal B}(p) = \sum_kX_k\,{}^tX_k$.</p><p>Exemple : projection sur la droite dirigée par le vecteur unitaire $u$ de coordonnées $U$ : $A = U\,{}^tU$, matrice symétrique de rang $1$ et de trace $\|u\|^2 = 1$.</p>`, rappels: ["eu-bon"] }
  ],
  piege: R`$\,{}^tX_kX_k = 1$ (un réel) mais $X_k\,{}^tX_k$ est une matrice $n\times n$ : ne pas confondre l'ordre des facteurs.`,
  methode: R`Formule $p(x) = \sum(x_k|x)x_k$ + écriture matricielle du produit scalaire en base orthonormée.`
},
{ id: "pre-40", ...P, level: 2, time: "20 min",
  title: "Quand la somme de deux projections orthogonales en est-elle une ?",
  enonce: R`<p>Soient $p_1,p_2$ deux projections orthogonales d'un espace euclidien $E$. Donner une condition nécessaire et suffisante pour que $p_1+p_2$ soit une projection orthogonale.</p>`,
  decode: { donnees: [R`$p_i^2 = p_i$, $\ker p_i = (\mathrm{Im}\,p_i)^\perp$.`], but: R`Montrer que la condition est $\mathrm{Im}\,p_1\perp\mathrm{Im}\,p_2$.`, cles: {} },
  steps: [
    { t: "Analyse : p₁p₂ + p₂p₁ = 0", h: R`<p>Développer $(p_1+p_2)^2 = p_1+p_2$.</p>`, b: R`<p>Si $p_1+p_2$ est une projection, $(p_1+p_2)^2 = p_1^2+p_1p_2+p_2p_1+p_2^2 = p_1+p_2$, et comme $p_i^2 = p_i$ :</p>$$p_1p_2+p_2p_1 = 0.$$` },
    { t: "Analyse : p₁p₂ = p₂p₁ = 0", h: R`<p>Composer par $p_1$ à gauche, puis à droite.</p>`, b: R`<p>À gauche par $p_1$ : $p_1p_2+p_1p_2p_1 = 0$. À droite par $p_1$ : $p_1p_2p_1+p_2p_1 = 0$. Par différence, $p_1p_2 = p_2p_1$, puis avec $p_1p_2+p_2p_1 = 0$ : $p_1p_2 = p_2p_1 = 0$.</p><p>$p_1p_2 = 0$ signifie $\mathrm{Im}\,p_2\subset\ker p_1 = (\mathrm{Im}\,p_1)^\perp$. Donc $\mathrm{Im}\,p_1\perp\mathrm{Im}\,p_2$.</p>` },
    { t: "Synthèse", h: R`<p>Base orthonormée adaptée à $\mathrm{Im}\,p_1\oplus\mathrm{Im}\,p_2\oplus(\mathrm{Im}\,p_1+\mathrm{Im}\,p_2)^\perp$.</p>`, b: R`<p>Supposons $\mathrm{Im}\,p_1\perp\mathrm{Im}\,p_2$. Prenons une base orthonormée de $E$ formée d'une base orthonormée de $\mathrm{Im}\,p_1$ ($r_1$ vecteurs), d'une de $\mathrm{Im}\,p_2$ ($r_2$ vecteurs), complétée par une base orthonormée de $G = (\mathrm{Im}\,p_1+\mathrm{Im}\,p_2)^\perp$. Les vecteurs de $\mathrm{Im}\,p_2$ et de $G$ sont orthogonaux à $\mathrm{Im}\,p_1$, donc dans $\ker p_1$ ; de même pour $p_2$. Dans cette base :</p>$$\begin{aligned}\mathrm{Mat}(p_1) &= \begin{pmatrix}I_{r_1}&&\\&0_{r_2}&\\&&0\end{pmatrix},\quad\mathrm{Mat}(p_2)\\ &= \begin{pmatrix}0_{r_1}&&\\&I_{r_2}&\\&&0\end{pmatrix},\quad\mathrm{Mat}(p_1+p_2)\\ &= \begin{pmatrix}I_{r_1+r_2}&\\&0\end{pmatrix}.\end{aligned}$$<p>C'est la matrice, en base orthonormée, de la projection orthogonale sur $\mathrm{Im}\,p_1\oplus\mathrm{Im}\,p_2$.</p><div class="sbox"><p>$p_1+p_2$ est une projection orthogonale si et seulement si $\mathrm{Im}\,p_1\perp\mathrm{Im}\,p_2$ (soit $p_1p_2 = 0$).</p></div>`, rappels: ["eu-projo"] }
  ],
  piege: R`$p_1p_2+p_2p_1 = 0$ n'implique pas immédiatement $p_1p_2 = 0$ : il faut composer d'un côté puis de l'autre.`,
  methode: R`Somme de projecteurs : développer le carré, puis composer à gauche et à droite.`
},
{ id: "pre-41", ...P, level: 2, time: "20 min",
  title: "inf ∫₀^∞ e^{−t}(t² − (at + b))² dt",
  enonce: R`<p>Pour $P,Q\in\mathbb R[X]$, on pose $\varphi(P,Q) = \int_0^{+\infty}P(t)Q(t)e^{-t}dt$.</p><ol><li>Montrer que $\varphi$ est un produit scalaire sur $\mathbb R[X]$.</li><li>Calculer $\displaystyle\inf_{(a,b)\in\mathbb R^2}\int_0^{+\infty}e^{-t}\big(t^2-(at+b)\big)^2dt$.</li></ol>`,
  decode: { donnees: [R`$\int_0^{+\infty}t^ne^{-t}dt = n!$, donc $\varphi(X^p,X^q) = (p+q)!$.`], but: R`Distance de $X^2$ à $\mathbb R_1[X]$ : équations normales.`, cles: {} },
  steps: [
    { t: "1) Produit scalaire", h: R`<p>Convergence par croissances comparées ; « continue, positive, d'intégrale nulle ».</p>`, b: R`<p>$t^2P(t)Q(t)e^{-t}\to0$ en $+\infty$, donc l'intégrale converge absolument. Symétrie et bilinéarité : immédiates. $\varphi(P,P) = \int_0^{+\infty}P^2e^{-t}\geqslant0$ ; s'il est nul, $P^2e^{-t}$ continue positive d'intégrale nulle est nulle sur $[0,+\infty[$, donc $P$ a une infinité de racines, $P = 0$.</p>`, rappels: ["eu-ps"] },
    { t: "2) Interprétation", h: R`<p>L'intégrale vaut $\|X^2-(aX+b)\|^2$.</p>`, b: R`<p>L'intégrale est $\|X^2-(aX+b)\|^2$, et $aX+b$ parcourt $\mathbb R_1[X]$. Le minimum est $d(X^2,\mathbb R_1[X])^2 = \|X^2-P\|^2$, avec $P = aX+b$ projeté orthogonal de $X^2$.</p>`, rappels: ["eu-dist"] },
    { t: "2) Équations normales", h: R`<p>$(X^2-P|1) = 0$ et $(X^2-P|X) = 0$, avec $\varphi(X^p,X^q) = (p+q)!$.</p>`, b: R`<p>Avec $\varphi(X^p,X^q) = (p+q)!$ :</p><ul><li>$(P|1) = (X^2|1)$ : $a\cdot1!+b\cdot0! = 2!$, soit $a+b = 2$ ;</li><li>$(P|X) = (X^2|X)$ : $a\cdot2!+b\cdot1! = 3!$, soit $2a+b = 6$.</li></ul><p>Donc $a = 4$, $b = -2$ : $P = 4X-2$.</p>`, rappels: ["eu-normal"] },
    { t: "2) Valeur du minimum", h: R`<p>$\|X^2-P\|^2 = (X^2-P|X^2)$.</p>`, b: R`<p>Comme $X^2-P\perp P$ :</p>$$\begin{aligned}\|X^2-P\|^2 &= (X^2-P|X^2)\\ &= (X^2|X^2)-4(X|X^2)+2(1|X^2)\\ &= 4!-4\cdot3!+2\cdot2!\\ &= 24-24+4\\ &= 4.\end{aligned}$$<div class="sbox">$$\inf_{(a,b)}\int_0^{+\infty}e^{-t}\big(t^2-(at+b)\big)^2dt = 4,\ \text{atteint pour }a = 4,\ b = -2.$$</div><p>Cohérent avec la base orthonormée $e_0 = 1$, $e_1 = X-1$, $e_2 = \frac{X^2-4X+2}2$ : $X^2-P = X^2-4X+2 = 2e_2$, de norme au carré $4$.</p>` }
  ],
  piege: R`Écrire $\|X^2-P\|^2 = (X^2-P|X^2)$ n'est valable que parce que $X^2-P\perp P$ : ne l'utiliser qu'avec le vrai projeté.`,
  methode: R`$\inf\int w\,(f-\text{combinaison})^2$ : c'est une distance au carré ; projeté par équations normales, puis $d^2 = (x-p(x)|x)$.`
},
{ id: "pre-42", ...P, level: 2, time: "20 min",
  title: "Meilleure approximation affine de ln sur ]0, 1]",
  enonce: R`<p>Calculer $\displaystyle m = \inf_{(a,b)\in\mathbb R^2}\int_0^1\big(\ln t-(at+b)\big)^2dt$.</p>`,
  decode: { donnees: [R`$\int_0^1\ln t\,dt = -1$, $\int_0^1t\ln t\,dt = -\frac14$, $\int_0^1\ln^2t\,dt = 2$.`], but: R`Distance de $\ln$ à $\mathrm{Vect}(1,t)$ dans $L^2(]0,1])$.`, cles: {} },
  steps: [
    { t: "Le cadre", h: R`<p>Fonctions continues sur $]0,1]$ de carré intégrable.</p>`, b: R`<p>Soit $E$ l'espace des fonctions continues sur $]0,1]$ de carré intégrable, muni de $(f|g) = \int_0^1fg$ (bien défini car $|fg|\leqslant\frac12(f^2+g^2)$ ; c'est un produit scalaire par l'argument « continue positive d'intégrale nulle »). $\ln\in E$ car $\sqrt t\ln^2t\to0$ en $0$. On cherche $m = d(\ln,F)^2$ avec $F = \mathrm{Vect}(1,t)$.</p>` },
    { t: "Base orthonormée de F", h: R`<p>Gram-Schmidt sur $(1,t)$.</p>`, b: R`<p>$\|1\|^2 = 1$ : $e_1 = 1$. $u_2 = t-(1|t) = t-\frac12$, $\|u_2\|^2 = \int_0^1(t-\frac12)^2dt = \frac1{12}$, donc $e_2 = 2\sqrt3\,(t-\tfrac12)$.</p>`, rappels: ["eu-schmidt"] },
    { t: "Les intégrales", h: R`<p>Par parties : $\int_0^1\ln t = [t\ln t-t]_0^1$, $\int_0^1t\ln t = [\frac{t^2}2\ln t-\frac{t^2}4]_0^1$.</p>`, b: R`<ul><li>$\int_0^1\ln t\,dt = [t\ln t-t]_0^1 = -1$ (car $t\ln t\to0$).</li><li>$\int_0^1t\ln t\,dt = \big[\tfrac{t^2}2\ln t-\tfrac{t^2}4\big]_0^1 = -\frac14$.</li><li>$\int_0^1\ln^2t\,dt = [t\ln^2t]_0^1-\int_0^12\ln t\,dt = 0+2 = 2$.</li></ul><p>Donc $(\ln|e_1) = -1$ et $(\ln|e_2) = 2\sqrt3\big(-\frac14+\frac12\big) = \frac{\sqrt3}2$.</p>` },
    { t: "Pythagore", h: R`<p>$m = \|\ln\|^2-(\ln|e_1)^2-(\ln|e_2)^2$.</p>`, b: R`<p>$$m = \|\ln\|^2-\|p_F(\ln)\|^2 = 2-\Big(1+\frac34\Big) = \frac14.$$<p>Le projeté est $p_F(\ln) = -1+\frac{\sqrt3}2\cdot2\sqrt3(t-\frac12) = 3t-\frac52$ : le minimum est atteint en $a = 3$, $b = -\frac52$.</p><div class="sbox">$$m = \frac14.$$</div>${figLn}`, rappels: ["eu-dist"] }
  ],
  piege: R`L'intervalle est ouvert en $0$ et $\ln$ n'est pas bornée : il faut justifier que toutes les intégrales convergent avant de parler de distance.`,
  methode: R`Moindres carrés continus : orthonormaliser $(1,t)$ puis Pythagore.`
},
{ id: "pre-43", ...P, level: 3, time: "25 min",
  title: "inf ∫₀¹ t²(ln t − at − b)² dt (Mines)",
  enonce: R`<p>Calculer $\displaystyle\inf_{(a,b)\in\mathbb R^2}\int_0^1t^2\big(\ln t-at-b\big)^2dt$.</p>`,
  decode: { donnees: [R`$\int_0^1t^k\ln t\,dt = -\frac1{(k+1)^2}$, $\int_0^1t^2\ln^2t\,dt = \frac2{27}$.`], but: R`Produit scalaire à poids $t^2$ ; équations normales.`, cles: {} },
  steps: [
    { t: "Le cadre", h: R`<p>$(f|g) = \int_0^1t^2fg$ sur les fonctions continues sur $]0,1]$ telles que $(tf)^2$ soit intégrable.</p>`, b: R`<p>Soit $E$ l'espace des fonctions continues $f$ sur $]0,1]$ telles que $t\mapsto(tf(t))^2$ soit intégrable, muni de $(f|g) = \int_0^1t^2f(t)g(t)\,dt$. C'est un produit scalaire (défini : $t^2f^2$ continue positive d'intégrale nulle est nulle sur $]0,1]$, donc $f = 0$). La quantité cherchée est $m = d(f,F)^2$ avec $f = \ln$ et $F = \mathrm{Vect}(f_0,f_1)$, $f_0 = 1$, $f_1 = t$.</p>` },
    { t: "Les produits scalaires", h: R`<p>$\int_0^1t^k\ln t\,dt$ par parties.</p>`, b: R`<p>Par parties, $\int_0^1t^k\ln t\,dt = \big[\tfrac{t^{k+1}}{k+1}\ln t\big]_0^1-\int_0^1\tfrac{t^k}{k+1}dt = -\frac1{(k+1)^2}$. Et $\int_0^1t^2\ln^2t\,dt = \big[\tfrac{t^3}3\ln^2t\big]_0^1-\tfrac23\int_0^1t^2\ln t = \frac23\cdot\frac19 = \frac2{27}$. D'où :</p><ul><li>$(f_0|f_0) = \frac13$, $(f_0|f_1) = \frac14$, $(f_1|f_1) = \frac15$ ;</li><li>$(\ln|f_0) = \int t^2\ln t = -\frac19$, $(\ln|f_1) = \int t^3\ln t = -\frac1{16}$ ;</li><li>$\|\ln\|^2 = \frac2{27}$.</li></ul>` },
    { t: "Équations normales", h: R`<p>$p(f) = at+b$ avec $(p(f)|f_0) = (f|f_0)$ et $(p(f)|f_1) = (f|f_1)$.</p>`, b: R`<p>$$\begin{cases}\frac a4+\frac b3 = -\frac19\\[2pt]\frac a5+\frac b4 = -\frac1{16}\end{cases}\iff\begin{cases}3a+4b = -\frac43\\[2pt]4a+5b = -\frac54\end{cases}$$<p>Le déterminant vaut $15-16 = -1$. Par Cramer : $a = \frac{-\frac43\cdot5+4\cdot\frac54}{-1} = \frac53$ et $b = \frac{3\cdot(-\frac54)+4\cdot\frac43}{-1} = -\frac{19}{12}$.</p>`, rappels: ["eu-normal"] },
    { t: "Valeur du minimum", h: R`<p>$m = (f-p(f)|f) = \|f\|^2-a(f|f_1)-b(f|f_0)$.</p>`, b: R`<p>$$\begin{aligned}m &= \frac2{27}-\Big(\frac53\cdot\Big(-\frac1{16}\Big)+\Big(-\frac{19}{12}\Big)\Big(-\frac19\Big)\Big)\\ &= \frac{32}{432}-\Big(-\frac{45}{432}+\frac{76}{432}\Big)\\ &= \frac{32-31}{432}.\end{aligned}$$<div class="sbox">$$\inf = \frac1{432},\ \text{atteint pour }a = \frac53,\ b = -\frac{19}{12}.$$</div>` }
  ],
  piege: R`Le poids $t^2$ change tout : les produits scalaires ne sont plus ceux de l'exercice précédent, et la droite optimale non plus.`,
  methode: R`Intégrale à poids : l'intégrer au produit scalaire, puis équations normales (système de Gram $2\times2$).`
},
{ id: "pre-44", ...P, level: 4, time: "35 min",
  title: "Le produit scalaire ∫fg + ∫f'g' et un minimum avec conditions aux bords",
  enonce: R`<p>Soit $E = \mathcal C^1([0,1],\mathbb R)$ et, pour $f,g\in E$, $\langle f,g\rangle = \int_0^1f(t)g(t)\,dt+\int_0^1f'(t)g'(t)\,dt$.</p><ol><li>Montrer que $\langle\cdot,\cdot\rangle$ est un produit scalaire sur $E$.</li><li>Soient $V = \{f\in E : f(0) = f(1) = 0\}$ et $W = \{f\in E : f\in\mathcal C^2,\ f'' = f\}$. Montrer que $V$ et $W$ sont supplémentaires et orthogonaux, et expliciter la projection orthogonale sur $W$.</li><li>Pour $\alpha,\beta\in\mathbb R$, soit $E_{\alpha,\beta} = \{f\in E : f(0) = \alpha,\ f(1) = \beta\}$. Calculer $\displaystyle\inf_{f\in E_{\alpha,\beta}}\int_0^1\big(f(t)^2+f'(t)^2\big)dt$.</li></ol>`,
  decode: { donnees: [R`$W = \mathrm{Vect}(\mathrm{ch},\mathrm{sh})$ ; pour $g\in W$, $(gg')' = g'^2+g^2$.`], but: R`Intégrer par parties pour l'orthogonalité, décomposer $f = g+h$, puis Pythagore.`, cles: {} },
  steps: [
    { t: "1) Produit scalaire", h: R`<p>$\langle f,f\rangle\geqslant\int_0^1f^2$.</p>`, b: R`<p>Bilinéarité et symétrie : claires. $\langle f,f\rangle = \int_0^1(f^2+f'^2)\geqslant0$, et si $\langle f,f\rangle = 0$ alors $\int_0^1f^2 = 0$ (les deux intégrales sont positives), donc $f = 0$.</p>`, rappels: ["eu-ps"] },
    { t: "2) V ⊥ W", h: R`<p>Pour $g\in W$, remplacer $g$ par $g''$ dans $\int fg$, puis intégrer par parties.</p>`, b: R`<p>Soient $f\in V$ et $g\in W$. Comme $g = g''$ :</p>$$\langle f,g\rangle = \int_0^1(fg''+f'g') = \int_0^1(fg')' = \big[fg'\big]_0^1 = f(1)g'(1)-f(0)g'(0) = 0.$$<p>Donc $V\perp W$, et en particulier $V\cap W = \{0\}$.</p>` },
    { t: "2) V + W = E", h: R`<p>$W = \{\lambda\,\mathrm{ch}+\mu\,\mathrm{sh}\}$ ; choisir $h\in W$ avec $h(0) = f(0)$, $h(1) = f(1)$.</p>`, b: R`<p>L'équation $y'' = y$ a pour solutions $W = \{\lambda\,\mathrm{ch}+\mu\,\mathrm{sh}\}$. Soit $f\in E$. On cherche $h = \lambda\,\mathrm{ch}+\mu\,\mathrm{sh}\in W$ avec $h(0) = f(0)$ et $h(1) = f(1)$ : $\lambda = f(0)$ et $\lambda\,\mathrm{ch}1+\mu\,\mathrm{sh}1 = f(1)$, soit $\mu = \frac{f(1)-f(0)\mathrm{ch}1}{\mathrm{sh}1}$ ($\mathrm{sh}1\neq0$). Alors $f-h\in V$ et $f = (f-h)+h$. Donc $E = V\oplus W$ avec $V\perp W$ : $W^\perp = V$, et la projection orthogonale sur $W$ est</p><div class="sbox">$$p(f) = f(0)\,\mathrm{ch}+\frac{f(1)-f(0)\,\mathrm{ch}1}{\mathrm{sh}1}\,\mathrm{sh}.$$</div>`, rappels: ["eu-projo"] },
    { t: "3) Réduction à une norme", h: R`<p>Toutes les $f\in E_{\alpha,\beta}$ ont le même projeté $g$ sur $W$.</p>`, b: R`<p>La quantité à minimiser est $\|f\|^2$. Le projeté $p(f)$ ne dépend que de $f(0) = \alpha$ et $f(1) = \beta$ : c'est la même fonction</p>$$g = \alpha\,\mathrm{ch}+\frac{\beta-\alpha\,\mathrm{ch}1}{\mathrm{sh}1}\,\mathrm{sh}$$<p>pour toute $f\in E_{\alpha,\beta}$. Écrivons $f = g+h$ avec $h = f-g\in V$ ; quand $f$ décrit $E_{\alpha,\beta}$, $h$ décrit tout $V$. Par Pythagore, $\|f\|^2 = \|g\|^2+\|h\|^2\geqslant\|g\|^2$, avec égalité pour $h = 0$. Donc le minimum vaut $\|g\|^2$, atteint en $f = g$.</p>` },
    { t: "3) Calcul de ‖g‖²", h: R`<p>$(gg')' = g'^2+gg'' = g'^2+g^2$, donc $\|g\|^2 = [gg']_0^1$.</p>`, b: R`<p>Comme $g'' = g$ : $\|g\|^2 = \int_0^1(g^2+g'^2) = \int_0^1(gg')' = g(1)g'(1)-g(0)g'(0)$. Avec $\mu = \frac{\beta-\alpha\,\mathrm{ch}1}{\mathrm{sh}1}$ : $g' = \alpha\,\mathrm{sh}+\mu\,\mathrm{ch}$, $g(0) = \alpha$, $g'(0) = \mu$, $g(1) = \beta$, $g'(1) = \alpha\,\mathrm{sh}1+\mu\,\mathrm{ch}1$. Donc</p>$$\|g\|^2 = \alpha\beta\,\mathrm{sh}1+\mu(\beta\,\mathrm{ch}1-\alpha) = \frac{\alpha\beta\,\mathrm{sh}^21+(\beta-\alpha\,\mathrm{ch}1)(\beta\,\mathrm{ch}1-\alpha)}{\mathrm{sh}1}.$$<p>Le numérateur vaut $\alpha\beta\,\mathrm{sh}^21+\beta^2\mathrm{ch}1-\alpha\beta-\alpha\beta\,\mathrm{ch}^21+\alpha^2\mathrm{ch}1 = (\alpha^2+\beta^2)\mathrm{ch}1-\alpha\beta(1+\mathrm{ch}^21-\mathrm{sh}^21) = (\alpha^2+\beta^2)\mathrm{ch}1-2\alpha\beta$.</p><div class="sbox">$$\inf_{f\in E_{\alpha,\beta}}\int_0^1(f^2+f'^2) = \frac{(\alpha^2+\beta^2)\,\mathrm{ch}1-2\alpha\beta}{\mathrm{sh}1}.$$</div><p>Vérification : pour $\alpha = \beta = 1$, on trouve $\frac{2(\mathrm{ch}1-1)}{\mathrm{sh}1} = 2\,\mathrm{th}\frac12\approx0{,}92\lt1 = \|1\|^2$, cohérent.</p>` }
  ],
  piege: R`$E_{\alpha,\beta}$ n'est pas un sous-espace vectoriel (sauf $\alpha = \beta = 0$) : c'est un sous-espace affine $g+V$, d'où le minimum $d(0,g+V)^2 = \|p_W(g)\|^2$.`,
  methode: R`Minimiser une énergie sous contraintes au bord : identifier l'orthogonal des fonctions nulles au bord (ici les solutions de $y'' = y$), puis Pythagore.`
},
{ id: "pre-45", ...P, level: 3, time: "25 min",
  title: "Familles obtusangles : n − 1 vecteurs sont libres",
  enonce: R`<p>Soit $(x_1,\dots,x_n)$ une famille de $n\geqslant2$ vecteurs d'un espace préhilbertien réel telle que $(x_i|x_j)\lt0$ pour tous $i\neq j$. Montrer que toute sous-famille de $n-1$ de ces vecteurs est libre.</p>`,
  decode: { donnees: [R`Projection sur $\mathrm{Vect}(x_{n+1})$ : $x_i = y_i+\lambda_ix_{n+1}$, $y_i\perp x_{n+1}$.`], but: R`Récurrence sur $n$ en projetant sur l'orthogonal du dernier vecteur.`, cles: {} },
  steps: [
    { t: "Initialisation", h: R`<p>$n = 2$ : un seul vecteur, non nul.</p>`, b: R`<p>Pour $n = 2$ : $(x_1|x_2)\lt0$ impose $x_1\neq0$ et $x_2\neq0$, et une famille d'un seul vecteur non nul est libre.</p>` },
    { t: "Décomposer selon x_{n+1}", h: R`<p>$\lambda_i = \frac{(x_i|x_{n+1})}{\|x_{n+1}\|^2}\lt0$.</p>`, b: R`<p>Supposons le résultat vrai au rang $n\geqslant2$ et soit $(x_1,\dots,x_{n+1})$ obtusangle. $x_{n+1}\neq0$. Pour $i\leqslant n$, écrivons $x_i = y_i+\lambda_ix_{n+1}$ avec $y_i\perp x_{n+1}$ (projection orthogonale sur la droite $\mathrm{Vect}(x_{n+1})$) : $\lambda_i = \frac{(x_i|x_{n+1})}{\|x_{n+1}\|^2}\lt0$. Pour $i\neq j\leqslant n$ :</p>$$(x_i|x_j) = (y_i|y_j)+\lambda_i\lambda_j\|x_{n+1}\|^2,$$<p>et comme $\lambda_i\lambda_j>0$ : $(y_i|y_j)\lt(x_i|x_j)\lt0$. La famille $(y_1,\dots,y_n)$ est donc obtusangle.</p>` },
    { t: "Hérédité", h: R`<p>Ôter un $x_k$ avec $k\leqslant n$ ; les $y_i$ restants sont libres et orthogonaux à $x_{n+1}$.</p>`, b: R`<p>Montrons que la sous-famille privée de $x_1$ est libre (les autres cas sont identiques par symétrie, et celle privée de $x_{n+1}$ se traite en échangeant les rôles de $x_{n+1}$ et d'un autre vecteur). Par hypothèse de récurrence, $(y_2,\dots,y_n)$ est libre. Ces vecteurs sont orthogonaux à $x_{n+1}\neq0$, donc $(y_2,\dots,y_n,x_{n+1})$ est libre (si $\sum\mu_iy_i+\nu x_{n+1} = 0$, le produit scalaire par $x_{n+1}$ donne $\nu = 0$). Or $\mathrm{Vect}(y_2,\dots,y_n,x_{n+1}) = \mathrm{Vect}(x_2,\dots,x_n,x_{n+1})$ (car $x_i = y_i+\lambda_ix_{n+1}$). Ces deux familles de $n$ vecteurs engendrent le même espace, de dimension $n$ : $(x_2,\dots,x_{n+1})$ est libre.</p>` }
  ],
  piege: R`La famille entière n'est pas forcément libre : dans le plan, trois vecteurs à $120°$ deux à deux sont obtusangles mais liés.`,
  methode: R`Récurrence sur le nombre de vecteurs en projetant sur l'orthogonal de l'un d'eux : la propriété angulaire se transmet aux projetés.`
},
{ id: "pre-46", ...P, level: 3, time: "10 min",
  title: "Pas plus de n + 1 vecteurs obtusangles en dimension n (Mines)",
  enonce: R`<p>Soient $x_1,\dots,x_{n+2}$ des vecteurs d'un espace euclidien $E$ de dimension $n\geqslant1$. Montrer qu'il est impossible d'avoir $(x_i|x_j)\lt0$ pour tous $i\neq j$ dans $\{1,\dots,n+2\}$.</p>`,
  decode: { donnees: [R`Exercice précédent : dans une famille obtusangle de $N$ vecteurs, toute sous-famille de $N-1$ vecteurs est libre.`], but: R`Appliquer avec $N = n+2$.`, cles: {} },
  steps: [
    { t: "Raisonner par l'absurde", h: R`<p>$N = n+2\geqslant2$ vecteurs obtusangles : $n+1$ d'entre eux seraient libres.</p>`, b: R`<p>Supposons $(x_i|x_j)\lt0$ pour tous $i\neq j$. La famille $(x_1,\dots,x_{n+2})$ est obtusangle, à $n+2\geqslant2$ vecteurs. D'après l'exercice précédent, la sous-famille $(x_1,\dots,x_{n+1})$ est libre. C'est une famille libre de $n+1$ vecteurs dans un espace de dimension $n$ : absurde.</p><p>Le nombre $n+1$ est optimal : les sommets d'un simplexe régulier centré en $0$ fournissent $n+1$ vecteurs deux à deux d'angle obtus (par exemple, dans le plan, trois vecteurs à $120°$).</p>` }
  ],
  piege: R`Le résultat porte sur des inégalités <b>strictes</b> : avec $(x_i|x_j)\leqslant0$, on peut avoir $2n$ vecteurs ($\pm e_1,\dots,\pm e_n$).`,
  methode: R`Majorer un cardinal en dimension finie : exhiber une famille libre trop grande.`
}
]);
})();

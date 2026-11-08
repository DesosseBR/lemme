/* Commando X-ENS · Aller plus loin · Sujet « Intégrale de Gauss par les résidus ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 12, kind: "probleme", qnav: true, side: true, level: 5, plus: "gres",
  sujet: "Calcul de l'intégrale de Gauss par la méthode des résidus",
  sujetDesc: "La fonction e^{−z²} n'a pas de pôle : le théorème des résidus ne s'applique pas directement. L'astuce (Kneser, Mordell) : avec a = √π e^{iπ/4} (a² = iπ), la fonction f(z) = e^{−z²}/(1 + e^{−2az}) vérifie f(z) − f(z + a) = e^{−z²} et a un unique pôle a/2 dans le parallélogramme de sommets ±M, ±M + a. Le résidu donne exactement √π." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "gr-res": { t: "Théorème des résidus", b: R`$$\int_\gamma f = 2i\pi\sum_{k = 1}^m\operatorname{Res}_{z_k}(f).$$` },
  "gr-pole": { t: "Résidu d'un pôle simple", b: R`$$f = \frac hg,\ g(z_0) = 0,\ g'(z_0)\neq0\ \Longrightarrow\ \operatorname{Res}_{z_0}(f) = \frac{h(z_0)}{g'(z_0)}.$$` },
  "gr-exp": { t: "Zéros de l'exponentielle complexe", b: R`<p>$e^w = e^{w'}\iff w-w'\in2i\pi\mathbb Z$. En particulier $e^w = -1\iff w\in i\pi+2i\pi\mathbb Z$. Et $|e^w| = e^{\mathrm{Re}\,w}$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> On veut calculer $I = \int_{-\infty}^{+\infty}e^{-t^2}dt$ (intégrale convergente car $e^{-t^2} = o(\frac1{t^2})$). On pose $a = \sqrt\pi\,e^{i\pi/4} = \sqrt{\frac\pi2}(1+i)$, $g(z) = 1+e^{-2az}$ et $f(z) = \frac{e^{-z^2}}{g(z)}$. Pour $M>0$, $\gamma_M$ est le bord du parallélogramme $D_M = \{x+sa : x\in[-M,M],\ s\in[0,1]\}$, parcouru dans le sens direct ($-M\to M\to M+a\to-M+a\to-M$).</p>`;

const figPar = (() => { const X = x => 230 + 70 * x, Y = y => 220 - 70 * y, ar = Math.sqrt(Math.PI / 2); const M = 2.6; let b = `<line x1="${X(-3.2)}" y1="${Y(0)}" x2="${X(3.4)}" y2="${Y(0)}" class="ax"/><line x1="${X(0)}" y1="${Y(-0.3)}" x2="${X(0)}" y2="${Y(3)}" class="ax"/>`;
  const pts = [[-M, 0], [M, 0], [M + ar, ar], [-M + ar, ar]];
  b += `<path d="M${pts.map(([x, y]) => X(x).toFixed(1) + " " + Y(y).toFixed(1)).join(" L")} Z" class="hb" style="opacity:.15"/><path d="M${pts.map(([x, y]) => X(x).toFixed(1) + " " + Y(y).toFixed(1)).join(" L")} Z" class="vb" style="fill:none;stroke-width:2"/>`;
  [[0, 0.5, 1, 0.5], [M + ar / 2, ar / 2, 0.3, 1], [0, ar, -1, 0], [-M + ar / 2, ar / 2, -0.3, -1]].forEach(([x, y, dx, dy]) => { const n = Math.hypot(dx, dy); b += `<path d="M${(X(x) - 7 * dx / n).toFixed(1)} ${(Y(y) + 7 * dy / n).toFixed(1)} L${(X(x) + 7 * dx / n).toFixed(1)} ${(Y(y) - 7 * dy / n).toFixed(1)}" class="vb" style="stroke-width:2.5" marker-end=""/>`; });
  for (let k = -2; k <= 1; k++) { const s = (2 * k + 1) / 2, x = s * ar, y = s * ar; if (Y(y) > 0 && Y(y) < 260) b += `<g transform="translate(${X(x).toFixed(1)},${Y(y).toFixed(1)})"><line x1="-5" y1="-5" x2="5" y2="5" class="vr" style="stroke-width:2.2"/><line x1="-5" y1="5" x2="5" y2="-5" class="vr" style="stroke-width:2.2"/></g>`; }
  b += S(X(ar / 2) + 8, Y(ar / 2) + 4, "a/2", "start", "sm r") + S(X(3 * ar / 2) + 8, Y(3 * ar / 2) + 4, "3a/2", "start", "sm r") + S(X(ar) + 6, Y(ar) - 6, "a", "start", "sm b");
  b += S(X(-M), Y(0) + 16, "−M", "middle", "sm") + S(X(M), Y(0) + 16, "M", "middle", "sm") + S(X(-M + ar) - 6, Y(ar) - 8, "−M + a", "end", "sm") + S(X(M + ar) + 6, Y(ar) - 8, "M + a", "start", "sm");
  return FIG(480, 270, b, R`Le contour $\gamma_M$ (bord du parallélogramme bleu) et les pôles $\frac{2k+1}2a$ de $f$ (croix), alignés sur la droite $\mathbb Ra$. Seul $\frac a2$ est à l'intérieur. Le côté haut est le translaté du côté bas par $a$, et $f(z)-f(z+a) = e^{-z^2}$ : les deux côtés horizontaux donnent exactement $\int_{-M}^Me^{-t^2}dt$.`, "Contour d'intégration"); })();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "gres-1", ...P, part: "Partie I", time: "25 min",
  title: "Une fonction bien choisie",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Vérifier que $a^2 = i\pi$. Montrer que $f(z)-f(z+a) = e^{-z^2}$ pour tout $z$ où ces quantités sont définies.</li>
<li>Déterminer les zéros de $g$, et montrer que ce sont des pôles simples de $f$.</li>
<li>Montrer que $\frac a2$ est le seul pôle de $f$ dans $D_M$, et qu'aucun pôle n'est sur $\gamma_M$.</li></ol>`,
  decode: { donnees: [R`Exponentielle complexe.`], but: R`Comprendre l'astuce : une fonction méromorphe dont la « différence » est $e^{-z^2}$.`, cles: {} },
  steps: [
    Q(1, "L'identité clé", R`<p>$f(z+a) = \frac{e^{-z^2-2az-a^2}}{g(z+a)}$, $e^{-a^2} = -1$ et $g(z+a) = 1+e^{-2az}e^{-2a^2} = g(z)$.</p>`, R`<p>$a^2 = \pi e^{i\pi/2} = i\pi$. Donc $e^{-a^2} = e^{-i\pi} = -1$ et $e^{-2a^2} = 1$. D'où $g(z+a) = 1+e^{-2az}e^{-2a^2} = g(z)$ : $g$ est $a$-périodique. Et</p>$$f(z+a) = \frac{e^{-(z+a)^2}}{g(z)} = \frac{e^{-z^2}e^{-2az}e^{-a^2}}{g(z)} = -\frac{e^{-z^2}e^{-2az}}{g(z)}.$$<p>Ainsi $f(z)-f(z+a) = \frac{e^{-z^2}(1+e^{-2az})}{g(z)} = e^{-z^2}$.</p>`),
    Q(2, "Les pôles", R`<p>$g(z) = 0\iff e^{-2az} = -1\iff-2az\in i\pi(2\mathbb Z+1)$. Puis $g'(z) = -2ae^{-2az}$.</p>`, R`<p>$g(z) = 0\iff e^{2az} = -1\iff2az = (2k+1)i\pi$ ($k\in\mathbb Z$) $\iff z = \frac{(2k+1)i\pi}{2a} = \frac{(2k+1)a^2}{2a} = \frac{2k+1}2a$. En ces points, $g'(z) = -2ae^{-2az} = -2a\cdot(-1) = 2a\neq0$, et le numérateur $e^{-z^2}$ ne s'annule pas : ce sont des pôles simples de $f$, de résidu $\frac{e^{-z^2}}{2a}$.</p>`, ["gr-exp", "gr-pole"]),
    Q(3, "Pôles dans le contour", R`<p>$\frac{2k+1}2a = 0+\frac{2k+1}2a$ : dans $D_M$ si et seulement si $\frac{2k+1}2\in[0,1]$.</p>`, R`<p>Tout $z\in\mathbb C$ s'écrit de façon unique $z = x+sa$ avec $x,s\in\mathbb R$ ($1$ et $a$ forment une base de $\mathbb C$ sur $\mathbb R$). Le pôle $\frac{2k+1}2a$ correspond à $x = 0$, $s = \frac{2k+1}2$ : il est dans $D_M$ si et seulement si $0\leqslant\frac{2k+1}2\leqslant1$, soit $k = 0$, et il est alors intérieur ($s = \frac12$, $|x| = 0\lt M$). Aucun pôle n'est sur $\gamma_M$ (bord : $s\in\{0,1\}$ ou $|x| = M$, alors que les pôles ont $x = 0$ et $s\in\frac12+\mathbb Z$).</p>`)
  ],
  piege: R`On ne peut pas appliquer les résidus à $e^{-z^2}$ seule (pas de pôle : l'intégrale sur un contour fermé est nulle et ne dit rien). Tout l'intérêt est de fabriquer un pôle avec la bonne « différence ».`,
  methode: R`Pour $\int_{\mathbb R}h$ avec $h$ entière : chercher $f$ méromorphe avec $f(z)-f(z+\omega) = h(z)$, et intégrer sur le parallélogramme $[-M,M]+[0,1]\omega$.`
},

/* ===================== Partie II ===================== */
{ id: "gres-2", ...P, part: "Partie II", time: "25 min",
  title: "Le résidu et le contour",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="4">
<li>Montrer que $2i\pi\,\mathrm{Res}_{a/2}(f) = \sqrt\pi$.</li>
<li>Montrer que $\int_{\gamma_M}f = \int_{-M}^Me^{-t^2}dt+I_2(M)-I_4(M)$, où $I_2(M) = \int_0^1f(M+sa)\,a\,ds$ et $I_4(M) = \int_0^1f(-M+sa)\,a\,ds$.</li></ol>`,
  decode: { donnees: [R`Partie I.`], but: R`Calculer les deux membres du théorème des résidus.`, cles: {} },
  steps: [
    Q(4, "Le résidu", R`<p>$\mathrm{Res}_{a/2}(f) = \frac{e^{-a^2/4}}{2a}$, $e^{-a^2/4} = e^{-i\pi/4}$.</p>`, R`<p>Par Q2, $\mathrm{Res}_{a/2}(f) = \frac{e^{-a^2/4}}{2a} = \frac{e^{-i\pi/4}}{2\sqrt\pi e^{i\pi/4}} = \frac{e^{-i\pi/2}}{2\sqrt\pi} = \frac{-i}{2\sqrt\pi}$. Donc</p>$$2i\pi\,\mathrm{Res}_{a/2}(f) = 2i\pi\cdot\frac{-i}{2\sqrt\pi} = \frac{2\pi}{2\sqrt\pi} = \sqrt\pi.$$`, ["gr-pole"]),
    Q(5, "Les quatre côtés", R`<p>Côté haut parcouru de $M+a$ à $-M+a$ : $-\int_{-M}^Mf(t+a)\,dt$.</p>`, R`<p>Les quatre côtés : $[-M,M]$ donne $\int_{-M}^Mf(t)\,dt$ ; le côté droit $z = M+sa$, $s : 0\to1$, donne $I_2(M)$ ; le côté haut, parcouru de $M+a$ à $-M+a$, donne $-\int_{-M}^Mf(t+a)\,dt$ ; le côté gauche, de $-M+a$ à $-M$, donne $-I_4(M)$. Par Q1 :</p>$$\int_{\gamma_M}f = \int_{-M}^M\big(f(t)-f(t+a)\big)dt+I_2-I_4 = \int_{-M}^Me^{-t^2}dt+I_2(M)-I_4(M).$$<p>Par le théorème des résidus et Q3, Q4 : $\int_{-M}^Me^{-t^2}dt+I_2(M)-I_4(M) = \sqrt\pi$ pour tout $M>0$.</p>${figPar}`, ["gr-res"])
  ],
  piege: R`L'orientation compte : le côté haut est parcouru « à l'envers », ce qui produit la différence $f(t)-f(t+a)$ et non une somme.`,
  methode: R`Sur un parallélogramme de côté $\omega$, deux côtés opposés se comparent par translation : l'intégrale du contour fait apparaître $\int(f(t)-f(t+\omega))dt$.`
},

/* ===================== Partie III ===================== */
{ id: "gres-3", ...P, part: "Partie III", time: "30 min",
  title: "Les côtés obliques et la conclusion",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="6">
<li>Pour $z = M+sa$ ($s\in[0,1]$, $M\geqslant1$), montrer que $|e^{-z^2}|\leqslant e^{-M^2}$ et $|g(z)|\geqslant\frac12$. En déduire $I_2(M)\to0$.</li>
<li>Pour $z = -M+sa$, montrer que $|f(z)|\leqslant\frac{e^{-M^2+M\sqrt{2\pi}}}{e^{M\sqrt{2\pi}}-1}$, puis $I_4(M)\to0$.</li>
<li>Conclure : $\int_{-\infty}^{+\infty}e^{-t^2}dt = \sqrt\pi$. En déduire $\int_{\mathbb R}e^{-x^2/2}dx$, $\Gamma(\frac12)$ et $\int_{\mathbb R}x^2e^{-x^2}dx$.</li></ol>`,
  decode: { donnees: [R`$|e^w| = e^{\mathrm{Re}\,w}$.`], but: R`Montrer que les côtés obliques ne contribuent pas à la limite.`, cles: {} },
  steps: [
    Q(6, "Côté droit", R`<p>$z^2 = M^2+2Msa+s^2a^2 = M^2+2Msa+i\pi s^2$, donc $\mathrm{Re}(z^2) = M^2+2Ms\sqrt{\pi/2}$. Et $\mathrm{Re}(2az) = M\sqrt{2\pi}$.</p>`, R`<p>$z^2 = M^2+2Msa+s^2a^2$ avec $s^2a^2 = i\pi s^2$ imaginaire pur, donc $\mathrm{Re}(z^2) = M^2+2Ms\,\mathrm{Re}(a) = M^2+2Ms\sqrt{\frac\pi2}\geqslant M^2$ : $|e^{-z^2}|\leqslant e^{-M^2}$. Ensuite $2az = 2aM+2sa^2 = 2aM+2i\pi s$, de partie réelle $2M\sqrt{\frac\pi2} = M\sqrt{2\pi}$, donc $|e^{-2az}| = e^{-M\sqrt{2\pi}}\leqslant e^{-\sqrt{2\pi}}\lt\frac12$ pour $M\geqslant1$, et $|g(z)|\geqslant1-|e^{-2az}|\geqslant\frac12$. Ainsi $|I_2(M)|\leqslant|a|\cdot2e^{-M^2} = 2\sqrt\pi e^{-M^2}\to0$.</p>`, ["gr-exp"]),
    Q(7, "Côté gauche", R`<p>$\mathrm{Re}(z^2) = M^2-2Ms\sqrt{\pi/2}\geqslant M^2-M\sqrt{2\pi}$ ; $|e^{-2az}| = e^{M\sqrt{2\pi}}$.</p>`, R`<p>Pour $z = -M+sa$ : $\mathrm{Re}(z^2) = M^2-2Ms\sqrt{\frac\pi2}\geqslant M^2-M\sqrt{2\pi}$, donc $|e^{-z^2}|\leqslant e^{-M^2+M\sqrt{2\pi}}$. Et $\mathrm{Re}(-2az) = 2M\,\mathrm{Re}(a) = M\sqrt{2\pi}$, donc $|g(z)|\geqslant|e^{-2az}|-1 = e^{M\sqrt{2\pi}}-1$. D'où la majoration de $|f(z)|$, et pour $M\geqslant1$ : $|f(z)|\leqslant\frac{e^{-M^2+M\sqrt{2\pi}}}{\frac12e^{M\sqrt{2\pi}}} = 2e^{-M^2}$. Donc $|I_4(M)|\leqslant2\sqrt\pi e^{-M^2}\to0$.</p>`, ["gr-exp"]),
    Q(8, "Conclusion et conséquences", R`<p>$M\to\infty$ dans la relation de Q5. Changements de variable $x = \sqrt2t$, $x = t^2$ ; intégration par parties.</p>`, R`<p>En faisant $M\to\infty$ dans $\int_{-M}^Me^{-t^2}dt+I_2-I_4 = \sqrt\pi$ :</p><div class="sbox">$$\int_{-\infty}^{+\infty}e^{-t^2}dt = \sqrt\pi.$$</div><p>Avec $x = \sqrt2t$ : $\int_{\mathbb R}e^{-x^2/2}dx = \sqrt2\sqrt\pi = \sqrt{2\pi}$ (normalisation de la loi normale). Avec $x = t^2$ : $\Gamma(\frac12) = \int_0^\infty x^{-1/2}e^{-x}dx = 2\int_0^\infty e^{-t^2}dt = \sqrt\pi$. Par parties ($u = x$, $v' = xe^{-x^2}$, $v = -\frac12e^{-x^2}$) : $\int_{\mathbb R}x^2e^{-x^2}dx = \Big[-\frac x2e^{-x^2}\Big]_{-\infty}^{+\infty}+\frac12\int_{\mathbb R}e^{-x^2}dx = \frac{\sqrt\pi}2$ (variance $\frac12$ pour la densité $\frac{e^{-x^2}}{\sqrt\pi}$).</p>`)
  ],
  piege: R`Sur le côté gauche, $|e^{-z^2}|$ peut être grand ($\mathrm{Re}(z^2)$ diminue), mais $|g|$ est encore plus grand : c'est le rapport qui compte.`,
  methode: R`Pour faire disparaître un côté de contour : majorer $|f|$ sur ce côté par une quantité qui tend vers $0$ plus vite que la longueur du côté ne croît (ici la longueur est fixe, $|a| = \sqrt\pi$).`
}
]);
})();

/* Commando X-ENS · Aller plus loin · Sujet « Une fonction continue dont la série de Fourier diverge ». */
(() => {
const R = String.raw;
const { GRAPH, f1 } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 9, kind: "probleme", qnav: true, side: true, level: 5, plus: "four",
  sujet: "Une fonction continue dont la série de Fourier diverge",
  sujetDesc: "On étudie le noyau de Dirichlet, on montre que les constantes de Lebesgue tendent vers l'infini, puis, avec le théorème de Baire et celui de Banach-Steinhaus, on obtient une fonction continue dont la série de Fourier diverge en 0." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

/* ---------- Figures ---------- */
const D = n => t => Math.abs(Math.sin(t / 2)) < 1e-9 ? 2 * n + 1 : Math.sin((2 * n + 1) * t / 2) / Math.sin(t / 2);
const figD = GRAPH({ w: 520, h: 260, x: [-Math.PI, Math.PI], y: [-5, 18], xt: [-Math.PI, -Math.PI / 2, Math.PI / 2, Math.PI], xtl: ["−π", "−π/2", "π/2", "π"], yt: [5, 10, 15], xl: "t",
  curves: [{ f: D(3), c: "b", n: 600, lab: [0.35, 7.5, "D3"] }, { f: D(8), c: "r", n: 800, lab: [0.25, 16.3, "D8"] }] },
  R`Le noyau de Dirichlet $D_n(t) = \dfrac{\sin\big((2n+1)t/2\big)}{\sin(t/2)}$ pour $n = 3$ (bleu) et $n = 8$ (rouge). Le pic en $0$ vaut $2n+1$ ; l'aire algébrique sous la courbe reste égale à $2\pi$, mais l'aire de $|D_n|$ grandit.`, "Noyau de Dirichlet pour n = 3 et n = 8");
const lebesgue = n => { const N = 4000; let s = 0; for (let k = 0; k < N; k++) { const t = (k + 0.5) * Math.PI / N; s += Math.abs(D(n)(t)); } return s / N; };
const LN = Array.from({ length: 31 }, (_, n) => lebesgue(n));
const figI = GRAPH({ w: 520, h: 250, x: [0, 30], y: [0, 4], xt: [5, 10, 15, 20, 25, 30], yt: [1, 2, 3, 4], xl: "n",
  curves: [{ f: x => 4 / (Math.PI * Math.PI) * Math.log(x + 1), c: "r", dash: true, lab: [16, 0.85, "(4/π²) ln(n+1)"] }],
  extra: (X, Y) => LN.map((v, n) => `<circle cx="${f1(X(n))}" cy="${f1(Y(v))}" r="3.2" class="pt"/>`).join("") + `<text x="${f1(X(17))}" y="${f1(Y(3.3))}" class="sm b">I(n) : points</text>` },
  R`Les constantes de Lebesgue $I_n$ (points bleus, calculées numériquement) et la minoration $\frac4{\pi^2}\ln(n+1)$ (pointillés rouges). $I_n$ tend vers $+\infty$, mais très lentement : $I_{30}\approx${String(LN[30].toFixed(2)).replace(".", "{,}")}$.`, "Constantes de Lebesgue");

LEMME.rappels({
  "four-coef": { t: "Coefficients de Fourier", b: R`<p>Pour $f$ continue $2\pi$-périodique : $c_p(f) = \dfrac1{2\pi}\displaystyle\int_{-\pi}^{\pi}f(t)e^{-ipt}\,dt$, et $S_n(f)(x) = \displaystyle\sum_{p=-n}^nc_p(f)e^{ipx}$. Si $f$ est de classe $\mathcal C^1$, $S_n(f)$ converge uniformément vers $f$ (théorème de Dirichlet, admis).</p>` },
  "four-geo": { t: "Somme géométrique", b: R`<p>Pour $z\neq1$ : $\displaystyle\sum_{p=0}^{m}z^p = \frac{z^{m+1}-1}{z-1}$.</p>` },
  "four-arc": { t: "Méthode de l'angle moitié", b: R`<p>$e^{ia}-1 = e^{ia/2}\big(e^{ia/2}-e^{-ia/2}\big) = 2i\,e^{ia/2}\sin(a/2)$.</p>` },
  "four-sin": { t: "Inégalités sur le sinus", b: R`<p>Pour $x\geqslant0$ : $\sin x\leqslant x$. Pour $x\in[0,\pi]$ : $\sin x\geqslant0$. Et $\displaystyle\int_0^\pi|\sin u|\,du = 2$, ainsi que sur chaque intervalle $[(k-1)\pi,k\pi]$.</p>` },
  "four-harm": { t: "Série harmonique", b: R`<p>$\displaystyle\sum_{k=1}^n\frac1k\geqslant\int_1^{n+1}\frac{dt}t = \ln(n+1)\xrightarrow[n\to\infty]{}+\infty$ (comparaison série-intégrale : $\frac1k\geqslant\int_k^{k+1}\frac{dt}t$).</p>` },
  "four-baire": { t: "Théorème de Baire (admis)", b: R`<p>Dans un espace métrique <b>complet</b>, une intersection dénombrable d'ouverts denses est dense. De façon équivalente : si $E = \bigcup_kF_k$ avec des $F_k$ fermés, l'un des $F_k$ est d'intérieur non vide.</p>` },
  "four-normop": { t: "Norme d'opérateur", b: R`<p>Pour $u$ linéaire continue de $E$ dans $F$ : $|||u||| = \sup_{\|x\|\leqslant1}\|u(x)\|$, et $\|u(x)\|\leqslant|||u|||\,\|x\|$. Si $\|u(x)\|\leqslant M\|x\|$ pour tout $x$, alors $u$ est continue et $|||u|||\leqslant M$.</p>` },
  "four-cvu": { t: "Limite uniforme de fonctions continues", b: R`<p>Une limite uniforme de fonctions continues est continue.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Notations pour tout le sujet.</b> $\mathcal C$ désigne l'espace des fonctions continues et $2\pi$-périodiques de $\mathbb R$ dans $\mathbb C$, muni de $\|f\|_\infty = \sup_{\mathbb R}|f|$. Pour $f\in\mathcal C$ et $p\in\mathbb Z$, $c_p(f) = \dfrac1{2\pi}\displaystyle\int_{-\pi}^{\pi}f(t)e^{-ipt}\,dt$, et $S_n(f) = \displaystyle\sum_{p=-n}^{n}c_p(f)e_p$ où $e_p(x) = e^{ipx}$. On pose $$D_n(t) = \sum_{p=-n}^ne^{ipt},\qquad I_n = \frac1{2\pi}\int_{-\pi}^{\pi}|D_n(t)|\,dt,\qquad\ell_n(f) = S_n(f)(0).$$</p>`;

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "four-1", ...P, part: "Partie I", time: "50 min",
  title: "Le noyau de Dirichlet",
  enonce: PRE + R`<p><b>Partie I. Le noyau de Dirichlet.</b></p><ol start="1">
<li>Montrer que $D_n$ est réelle, paire, $2\pi$-périodique, que $\frac1{2\pi}\int_{-\pi}^{\pi}D_n = 1$ et que $\ell_n(f) = \dfrac1{2\pi}\displaystyle\int_{-\pi}^{\pi}f(t)D_n(t)\,dt$.</li>
<li>Montrer que pour $t\notin2\pi\mathbb Z$, $D_n(t) = \dfrac{\sin\big((2n+1)t/2\big)}{\sin(t/2)}$, et que $D_n(0) = 2n+1$.</li>
<li>Montrer que $I_n\geqslant\dfrac4{\pi^2}\displaystyle\sum_{k=1}^n\frac1k$.</li>
<li>En déduire que $I_n\to+\infty$.</li></ol>`,
  decode: { donnees: [R`$D_n$ est une somme de $2n+1$ exponentielles.`], but: R`Montrer que l'intégrale de $|D_n|$ n'est pas bornée : c'est la racine de la divergence.`, cles: {} },
  steps: [
    Q(1, "Premières propriétés du noyau", R`<p>Regroupe $e^{ipt}$ et $e^{-ipt}$. Pour $\ell_n$, intervertis somme finie et intégrale.</p>`, R`<p><b>Réelle et paire.</b> En regroupant $p$ et $-p$ : $$D_n(t) = 1+\sum_{p=1}^n\big(e^{ipt}+e^{-ipt}\big) = 1+2\sum_{p=1}^n\cos(pt),$$ qui est réelle, paire et $2\pi$-périodique.</p><p><b>Intégrale.</b> $\int_{-\pi}^\pi\cos(pt)\,dt = 0$ pour $p\geqslant1$, donc $\frac1{2\pi}\int_{-\pi}^{\pi}D_n = \frac1{2\pi}\cdot2\pi = 1$.</p><p><b>Expression de $\ell_n$.</b> Somme finie et intégrale s'échangent :</p>$$\ell_n(f) = \sum_{p=-n}^nc_p(f) = \frac1{2\pi}\int_{-\pi}^\pi f(t)\sum_{p=-n}^ne^{-ipt}\,dt = \frac1{2\pi}\int_{-\pi}^\pi f(t)D_n(-t)\,dt = \frac1{2\pi}\int_{-\pi}^\pi f(t)D_n(t)\,dt,$$<p>par parité de $D_n$.</p>`, ["four-coef"]),
    Q(2, "La forme close du noyau", R`<p>Factorise $e^{-int}$, somme géométrique, puis angle moitié en haut et en bas.</p>`, R`<p>Soit $t\notin2\pi\mathbb Z$, donc $e^{it}\neq1$. On factorise $e^{-int}$ et on reconnaît une somme géométrique de raison $e^{it}$ :</p>$$D_n(t) = e^{-int}\sum_{p=0}^{2n}e^{ipt} = e^{-int}\,\frac{e^{i(2n+1)t}-1}{e^{it}-1}.$$<p><b>Angle moitié</b> : $e^{ia}-1 = 2i\,e^{ia/2}\sin(a/2)$, appliqué avec $a = (2n+1)t$ en haut et $a = t$ en bas :</p>$$D_n(t) = e^{-int}\,\frac{2i\,e^{i(2n+1)t/2}\sin\big((2n+1)t/2\big)}{2i\,e^{it/2}\sin(t/2)} = \underbrace{e^{-int+i(2n+1)t/2-it/2}}_{=\,e^0\,=\,1}\ \frac{\sin\big((2n+1)t/2\big)}{\sin(t/2)}.$$<div class="sbox">$$D_n(t) = \frac{\sin\big((2n+1)t/2\big)}{\sin(t/2)}\quad(t\notin2\pi\mathbb Z),\qquad D_n(0) = 2n+1.$$</div><p>(En $0$, chaque terme de la somme vaut $1$.)</p>${figD}`, ["four-geo", "four-arc"]),
    Q(3, "a) Se ramener à [0, π] et majorer le sinus", R`<p>Parité, puis $\sin(t/2)\leqslant t/2$.</p>`, R`<p>$|D_n|$ est paire, donc</p>$$I_n = \frac1\pi\int_0^\pi\frac{\big|\sin\big((2n+1)t/2\big)\big|}{\sin(t/2)}\,dt.$$<p>(Sur $]0,\pi]$, $t/2\in\,]0,\pi/2]$ et $\sin(t/2)\gt 0$ ; en $t = 0$ l'intégrande se prolonge par continuité, il n'y a pas de problème.) Comme $0\lt\sin(t/2)\leqslant t/2$ :</p>$$I_n\geqslant\frac1\pi\int_0^\pi\frac{\big|\sin\big((2n+1)t/2\big)\big|}{t/2}\,dt = \frac2\pi\int_0^\pi\frac{\big|\sin\big((2n+1)t/2\big)\big|}{t}\,dt.$$`, ["four-sin"]),
    Q(3, "b) Changement de variable et découpage", R`<p>$u = (2n+1)t/2$, puis coupe en intervalles de longueur $\pi$ et minore $1/u$ par $1/(k\pi)$.</p>`, R`<p>On pose $u = \frac{(2n+1)t}2$, donc $\frac{dt}t = \frac{du}u$ et $u$ va de $0$ à $\frac{(2n+1)\pi}2\geqslant n\pi$ :</p>$$I_n\geqslant\frac2\pi\int_0^{(2n+1)\pi/2}\frac{|\sin u|}u\,du\geqslant\frac2\pi\int_0^{n\pi}\frac{|\sin u|}u\,du = \frac2\pi\sum_{k=1}^n\int_{(k-1)\pi}^{k\pi}\frac{|\sin u|}u\,du.$$<p>Sur $[(k-1)\pi,k\pi]$, $\frac1u\geqslant\frac1{k\pi}$, et $\int_{(k-1)\pi}^{k\pi}|\sin u|\,du = 2$. Donc</p>$$I_n\geqslant\frac2\pi\sum_{k=1}^n\frac1{k\pi}\cdot2 = \frac4{\pi^2}\sum_{k=1}^n\frac1k.$$<div class="sbox">$$I_n\geqslant\frac4{\pi^2}\sum_{k=1}^n\frac1k.$$</div>`, ["four-sin"]),
    Q(4, "Les constantes de Lebesgue explosent", R`<p>Série harmonique.</p>`, R`<p>Par comparaison série-intégrale, $\sum_{k=1}^n\frac1k\geqslant\ln(n+1)$, donc</p>$$I_n\geqslant\frac4{\pi^2}\ln(n+1)\xrightarrow[n\to+\infty]{}+\infty.$$<p>On peut montrer que $I_n\sim\frac4{\pi^2}\ln n$ : la croissance est très lente, mais elle est là.</p>${figI}`, ["four-harm"])
  ],
  piege: R`Confondre $\int D_n$ (qui vaut $2\pi$ pour tout $n$) et $\int|D_n|$ (qui tend vers l'infini) : les oscillations de $D_n$ se compensent dans la première, pas dans la seconde.`,
  methode: R`Pour minorer $\int_0^{A}\frac{|\sin u|}u\,du$ : découper en intervalles de longueur $\pi$, minorer $\frac1u$ par sa valeur en bout d'intervalle, et utiliser $\int_0^\pi|\sin| = 2$.`
},

/* ===================== Partie II ===================== */
{ id: "four-2", ...P, part: "Partie II", time: "40 min",
  title: "La norme de la forme linéaire « somme partielle en 0 »",
  enonce: PRE + R`<p><b>Partie II.</b></p><ol start="5">
<li>Montrer que $(\mathcal C,\|\cdot\|_\infty)$ est un espace de Banach.</li>
<li>Montrer que $\ell_n$ est une forme linéaire continue sur $\mathcal C$, avec $|||\ell_n|||\leqslant I_n$.</li>
<li>Pour $m\geqslant1$, on pose $f_m = \dfrac{D_n}{|D_n|+\frac1m}$. Montrer que $f_m\in\mathcal C$, $\|f_m\|_\infty\leqslant1$ et $\ell_n(f_m)\geqslant I_n-\frac1m$. En déduire $|||\ell_n||| = I_n$.</li></ol>`,
  decode: { donnees: [R`$\ell_n(f) = \frac1{2\pi}\int fD_n$ (question 1).`], but: R`Montrer que les formes linéaires $\ell_n$ ne sont pas uniformément bornées : $|||\ell_n||| = I_n\to+\infty$.`, cles: {} },
  steps: [
    Q(5, "C est complet", R`<p>Une suite de Cauchy pour $\|\cdot\|_\infty$ converge simplement, puis uniformément ; la limite est continue et périodique.</p>`, R`<p>$\|\cdot\|_\infty$ est bien une norme sur $\mathcal C$ (une fonction continue périodique est bornée : elle l'est sur le segment $[0,2\pi]$).</p><p>Soit $(g_k)$ de Cauchy dans $\mathcal C$ : pour $\varepsilon\gt 0$, il existe $N$ tel que $\|g_k-g_l\|_\infty\leqslant\varepsilon$ pour $k,l\geqslant N$.</p><ul><li><b>Limite simple.</b> Pour chaque $x$, $(g_k(x))$ est de Cauchy dans $\mathbb C$, qui est complet : elle converge vers un nombre $g(x)$.</li><li><b>Convergence uniforme.</b> Pour $k,l\geqslant N$ et tout $x$ : $|g_k(x)-g_l(x)|\leqslant\varepsilon$. On fait $l\to+\infty$ : $|g_k(x)-g(x)|\leqslant\varepsilon$ pour tout $x$, donc $\|g_k-g\|_\infty\leqslant\varepsilon$ pour $k\geqslant N$.</li><li><b>$g\in\mathcal C$.</b> $g$ est continue comme limite uniforme de fonctions continues, et $g(x+2\pi) = \lim g_k(x+2\pi) = \lim g_k(x) = g(x)$.</li></ul><div class="sbox"><p style="margin:0">$(\mathcal C,\|\cdot\|_\infty)$ est un espace de Banach.</p></div>`, ["four-cvu"]),
    Q(6, "La forme linéaire est continue", R`<p>Majore $|\ell_n(f)|$ avec la question 1.</p>`, R`<p>$\ell_n$ est linéaire (chaque $c_p$ l'est). Pour $f\in\mathcal C$ :</p>$$|\ell_n(f)| = \Big|\frac1{2\pi}\int_{-\pi}^\pi f(t)D_n(t)\,dt\Big|\leqslant\frac1{2\pi}\int_{-\pi}^\pi\|f\|_\infty|D_n(t)|\,dt = I_n\,\|f\|_\infty.$$<p>Donc $\ell_n$ est continue et $|||\ell_n|||\leqslant I_n$.</p>`, ["four-normop"]),
    Q(7, "a) La fonction test fₘ", R`<p>Le dénominateur ne s'annule pas. Pour $\ell_n(f_m)$, calcule $|D_n|-\frac{D_n^2}{|D_n|+1/m}$.</p>`, R`<p><b>$f_m\in\mathcal C$.</b> $D_n$ est continue, réelle, $2\pi$-périodique, et $|D_n|+\frac1m\geqslant\frac1m\gt 0$ : $f_m$ est continue et $2\pi$-périodique.</p><p><b>$\|f_m\|_\infty\leqslant1$</b> : $|f_m| = \dfrac{|D_n|}{|D_n|+\frac1m}\leqslant1$.</p><p><b>Minoration de $\ell_n(f_m)$.</b> Par la question 1 :</p>$$\ell_n(f_m) = \frac1{2\pi}\int_{-\pi}^\pi\frac{D_n(t)^2}{|D_n(t)|+\frac1m}\,dt.$$<p>Pour un réel $a = |D_n(t)|\geqslant0$ :</p>$$a-\frac{a^2}{a+\frac1m} = \frac{a^2+\frac am-a^2}{a+\frac1m} = \frac1m\cdot\frac a{a+\frac1m}\leqslant\frac1m.$$<p>Donc $\frac{D_n^2}{|D_n|+1/m}\geqslant|D_n|-\frac1m$, et en intégrant :</p>$$\ell_n(f_m)\geqslant\frac1{2\pi}\int_{-\pi}^\pi\Big(|D_n|-\frac1m\Big) = I_n-\frac1m.$$`),
    Q(7, "b) La norme exacte", R`<p>$|\ell_n(f_m)|\leqslant|||\ell_n|||\,\|f_m\|_\infty\leqslant|||\ell_n|||$.</p>`, R`<p>$I_n-\frac1m\leqslant\ell_n(f_m)\leqslant|||\ell_n|||\,\|f_m\|_\infty\leqslant|||\ell_n|||$. En faisant $m\to+\infty$ : $I_n\leqslant|||\ell_n|||$. Avec la question 6 :</p><div class="sbox">$$|||\ell_n||| = I_n\xrightarrow[n\to\infty]{}+\infty.$$</div><p>L'idée de $f_m$ : on voudrait prendre $f = \operatorname{signe}(D_n)$, qui réalise l'égalité, mais elle n'est pas continue. $f_m$ en est une approximation continue.</p>`)
  ],
  piege: R`Prendre directement $f = \operatorname{signe}(D_n)$ : elle n'appartient pas à $\mathcal C$ (discontinue aux zéros de $D_n$).`,
  methode: R`Pour calculer la norme d'une forme $f\mapsto\int fg$ sur les fonctions continues : la majoration donne $\int|g|$, et on l'atteint à $\varepsilon$ près avec $f = \frac{\bar g}{|g|+\varepsilon}$.`
},

/* ===================== Partie III ===================== */
{ id: "four-3", ...P, part: "Partie III", time: "40 min",
  title: "Le théorème de Banach-Steinhaus",
  enonce: PRE + R`<p><b>Partie III.</b> Soit $E$ un espace de Banach, $F$ un espace vectoriel normé et $\mathcal H$ un ensemble d'applications linéaires continues de $E$ dans $F$ tel que $\sup_{h\in\mathcal H}|||h||| = +\infty$. On admet le théorème de Baire. Pour $k\in\mathbb N$, on pose $\Omega_k = \{x\in E : \sup_{h\in\mathcal H}\|h(x)\|\gt k\}$.</p><ol start="8">
<li>Montrer que $\Omega_k = \bigcup_{h\in\mathcal H}\{x : \|h(x)\|\gt k\}$, puis que $\Omega_k$ est ouvert.</li>
<li>On suppose par l'absurde que $\sup_h\|h(x)\|\lt+\infty$ pour tout $x\in E$.<br>a) Montrer qu'il existe $k$, $x_0\in E$ et $\rho\gt 0$ tels que $B(x_0,\rho)\cap\Omega_k = \varnothing$.<br>b) En déduire que $|||h|||\leqslant\frac{4k}\rho$ pour tout $h\in\mathcal H$, et conclure.</li>
<li>Énoncer le résultat obtenu.</li></ol>`,
  decode: { donnees: [R`$E$ est complet : on peut utiliser Baire.`, R`Les normes $|||h|||$ ne sont pas bornées.`], but: R`Montrer qu'il existe un $x$ tel que les $\|h(x)\|$ ne sont pas bornés (« principe de la borne uniforme »).`, cles: {} },
  steps: [
    Q(8, "Les ensembles Omega sont ouverts", R`<p>Une borne supérieure dépasse $k$ si et seulement si l'un des termes dépasse $k$.</p>`, R`<p><b>Égalité.</b> $\sup_h\|h(x)\|\gt k$ si et seulement si il existe $h\in\mathcal H$ avec $\|h(x)\|\gt k$ (définition de la borne supérieure comme plus petit majorant : $k$ n'en est pas un). D'où $\Omega_k = \bigcup_h\{x : \|h(x)\|\gt k\}$.</p><p><b>Ouvert.</b> Pour chaque $h$, $x\mapsto\|h(x)\|$ est continue (composée de $h$ continue et de la norme), donc $\{x : \|h(x)\|\gt k\}$ est l'image réciproque de l'ouvert $]k,+\infty[$ : c'est un ouvert. Une réunion quelconque d'ouverts est ouverte.</p>`),
    Q(9, "a) Un des ouverts n'est pas dense", R`<p>Si tous les $\Omega_k$ étaient denses, Baire donnerait une intersection non vide.</p>`, R`<p>Sous l'hypothèse, pour tout $x$, $\sup_h\|h(x)\|$ est un réel, donc $x\notin\Omega_k$ dès que $k$ dépasse ce réel : $\bigcap_k\Omega_k = \varnothing$.</p><p>Si tous les $\Omega_k$ étaient denses, ce seraient des ouverts denses, et par le <b>théorème de Baire</b> ($E$ complet), leur intersection serait dense, donc non vide. Contradiction : il existe $k$ tel que $\Omega_k$ n'est pas dense.</p><p>« Non dense » signifie qu'il existe une boule ouverte $B(x_0,\rho)$, $\rho\gt 0$, qui ne rencontre pas $\Omega_k$.</p>`, ["four-baire"]),
    Q(9, "b) Une borne uniforme, contradiction", R`<p>Pour $\|x\|\lt\rho$, écris $h(x) = h(x_0+x)-h(x_0)$.</p>`, R`<p>Pour $\|x\|\lt\rho$, les points $x_0$ et $x_0+x$ sont dans $B(x_0,\rho)$, donc hors de $\Omega_k$ : $\|h(x_0)\|\leqslant k$ et $\|h(x_0+x)\|\leqslant k$ pour tout $h$. Par linéarité :</p>$$\|h(x)\| = \|h(x_0+x)-h(x_0)\|\leqslant2k.$$<p>Soit maintenant $\|y\| = 1$. Alors $\frac\rho2y$ est de norme $\frac\rho2\lt\rho$, donc</p>$$\|h(y)\| = \frac2\rho\Big\|h\Big(\frac\rho2y\Big)\Big\|\leqslant\frac2\rho\cdot2k = \frac{4k}\rho.$$<p>Donc $|||h|||\leqslant\frac{4k}\rho$ pour tout $h\in\mathcal H$, et $\sup_h|||h|||\leqslant\frac{4k}\rho\lt+\infty$ : cela contredit l'hypothèse. L'hypothèse de l'absurde est fausse.</p>`, ["four-normop"]),
    Q(10, "Le théorème de Banach-Steinhaus", R`<p>Contraposée de ce qui précède.</p>`, R`<div class="sbox"><p style="margin:0"><b>Banach-Steinhaus.</b> Si $E$ est un espace de Banach et si $\sup_{h\in\mathcal H}|||h||| = +\infty$, alors il existe $x\in E$ tel que $\sup_{h\in\mathcal H}\|h(x)\| = +\infty$.</p></div><p>Forme équivalente (« principe de la borne uniforme ») : si une famille d'applications linéaires continues est bornée en chaque point, elle est bornée en norme.</p><p>On peut même montrer que l'ensemble de ces $x$ est une intersection dénombrable d'ouverts denses, donc « très gros » : c'est $\bigcap_k\Omega_k$, et les $\Omega_k$ sont tous denses (sinon le raisonnement de 9b s'applique).</p>`)
  ],
  piege: R`Oublier la complétude : sur l'espace des polynômes trigonométriques muni de $\|\cdot\|_\infty$ (non complet), la conclusion est fausse, car $S_n(f)(0)$ y est constant à partir d'un certain rang.`,
  methode: R`Schéma de Baire : écrire la propriété « bornée partout » comme une réunion dénombrable de fermés (ou l'échec comme une intersection d'ouverts), trouver une boule, puis translater et dilater pour tout récupérer par linéarité.`
},

/* ===================== Partie IV ===================== */
{ id: "four-4", ...P, part: "Partie IV", time: "25 min",
  title: "La série de Fourier qui diverge",
  enonce: PRE + R`<p><b>Partie IV. Conclusion.</b></p><ol start="11">
<li>Montrer qu'il existe $f\in\mathcal C$ telle que la suite $\big(S_n(f)(0)\big)_n$ ne soit pas bornée. Que peut-on dire de la série de Fourier de $f$ en $0$ ?</li>
<li>On admet que les polynômes trigonométriques sont denses dans $\mathcal C$. Montrer que l'ensemble des $g\in\mathcal C$ dont la série de Fourier diverge en $0$ est dense dans $\mathcal C$.</li></ol>`,
  decode: { donnees: [R`$|||\ell_n||| = I_n\to+\infty$ (Partie II).`, R`Banach-Steinhaus (Partie III).`], but: R`Conclure, et voir que le phénomène n'est pas exceptionnel.`, cles: {} },
  steps: [
    Q(11, "L'existence de f", R`<p>Applique Banach-Steinhaus à $\mathcal H = \{\ell_n : n\in\mathbb N\}$, $E = \mathcal C$, $F = \mathbb C$.</p>`, R`<p>$E = \mathcal C$ est un espace de Banach (question 5), $F = \mathbb C$, et $\mathcal H = \{\ell_n\}$ est formé de formes linéaires continues avec $\sup_n|||\ell_n||| = \sup_nI_n = +\infty$ (questions 4 et 7). Par Banach-Steinhaus, il existe $f\in\mathcal C$ avec</p>$$\sup_n|\ell_n(f)| = \sup_n|S_n(f)(0)| = +\infty.$$<p>Une suite convergente est bornée ; la suite des sommes partielles $S_n(f)(0)$ ne l'est pas, donc elle diverge.</p><div class="sbox"><p style="margin:0">Il existe une fonction continue $2\pi$-périodique dont la série de Fourier diverge en $0$.</p></div><p>À comparer avec le théorème de Dirichlet : si $f$ est de classe $\mathcal C^1$, sa série de Fourier converge uniformément vers $f$. La continuité seule ne suffit pas.</p>`, ["four-coef"]),
    Q(12, "Ces fonctions sont partout", R`<p>Ajoute à un polynôme trigonométrique $Q$ proche de $g$ un petit multiple de $f$.</p>`, R`<p>Soit $g\in\mathcal C$ et $\varepsilon\gt 0$. Par densité, il existe un polynôme trigonométrique $T$ avec $\|g-T\|_\infty\leqslant\frac\varepsilon2$. Posons, avec $f$ de la question 11 (non nulle),</p>$$h = T+\frac{\varepsilon}{2\|f\|_\infty}\,f.$$<ul><li>$\|g-h\|_\infty\leqslant\|g-T\|_\infty+\frac\varepsilon2\leqslant\varepsilon$.</li><li>Si $T = \sum_{|p|\leqslant N}a_pe_p$, alors $S_n(T)(0) = T(0)$ pour $n\geqslant N$. Par linéarité, $S_n(h)(0) = T(0)+\frac{\varepsilon}{2\|f\|_\infty}S_n(f)(0)$, qui n'est pas bornée.</li></ul><p>Donc $h$ a une série de Fourier divergente en $0$, et $h$ est à distance au plus $\varepsilon$ de $g$.</p><div class="sbox"><p style="margin:0">Les fonctions continues dont la série de Fourier diverge en $0$ sont denses dans $\mathcal C$.</p></div><p>(Avec la version forte de Banach-Steinhaus, cet ensemble contient même une intersection dénombrable d'ouverts denses.)</p>`)
  ],
  piege: R`Croire qu'on a construit $f$ explicitement : la preuve par Baire est non constructive. Les exemples explicites (Fejér, du Bois-Reymond) sont nettement plus techniques.`,
  methode: R`Pour montrer qu'une propriété « mauvaise » est fréquente : trouver un seul exemple, puis le « perturber » à partir d'éléments d'un ensemble dense.`
}
]);
})();

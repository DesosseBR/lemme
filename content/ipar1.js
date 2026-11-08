/* Intégration sur un intervalle quelconque (Spé) : bloc « Convergence dominée ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 6 };
LEMME.rappels({
  "ip-cvd": { t: "Théorème de convergence dominée", b: R`$$\left\{\begin{aligned}&f_n\to f\text{ simplement sur }I\\&\forall n,\ |f_n|\leqslant\varphi,\ \varphi\text{ intégrable (indépendante de }n)\end{aligned}\right.\quad\Longrightarrow\quad\int_If_n\xrightarrow[n\to+\infty]{}\int_If.$$<p>($f_n$, $f$ continues par morceaux.)</p>` },
  "ip-ref": { t: "Fonctions intégrables de référence", b: R`$$\int_1^{+\infty}\frac{dt}{t^\alpha}\text{ CV}\iff\alpha>1,\qquad\int_0^1\frac{dt}{t^\alpha}\text{ CV}\iff\alpha\lt1.$$$$\int_0^{+\infty}e^{-at}\,dt = \frac1a\ (a>0),\qquad\int_{\mathbb R}\frac{dt}{1+t^2} = \pi,\qquad f = O\Big(\frac1{t^2}\Big)\Rightarrow f\text{ intégrable en }+\infty.$$` },
  "ip-decoupe": { t: "Découper pour dominer", b: R`$$\int_0^{+\infty} = \int_0^1+\int_1^{+\infty}\quad(\text{domination différente sur chaque morceau}).$$` },
  "ip-stirling": { t: "Formule de Stirling", b: R`<p>$n!\underset{n\to+\infty}{\sim}\sqrt{2\pi n}\,\Big(\dfrac ne\Big)^n$.</p>` }
});
LEMME.exercises([
{ id: "ipar-01", ...P, level: 1, time: "15 min",
  title: "Deux limites d'intégrales par convergence dominée",
  enonce: R`<p>Étudier les limites suivantes :</p><ol><li>$\displaystyle\lim_{n\to+\infty}\int_{-\infty}^{+\infty}\frac{1+2\sin(t/n)}{1+t^2}\,dt$ ;</li><li>$\displaystyle\lim_{n\to+\infty}\int_0^{\pi/2}\sin^n(t)\,dt$.</li></ol>`,
  decode: { donnees: [R`$|1+2\sin u|\leqslant3$ ; $0\leqslant\sin t\leqslant1$ sur $[0,\frac\pi2]$.`], but: R`Appliquer le théorème de convergence dominée, en trouvant une domination indépendante de $n$.`, cles: {} },
  steps: [
    { t: "1) Convergence simple", h: R`<p>$\sin(t/n)\to0$ pour $t$ fixé.</p>`, b: R`<p>Posons $f_n(t) = \dfrac{1+2\sin(t/n)}{1+t^2}$, continue sur $\mathbb R$. Pour $t$ fixé, $\frac tn\to0$, donc</p>$$f_n(t)\xrightarrow[n\to+\infty]{}f(t) = \frac1{1+t^2}.$$` },
    { t: "1) Domination et conclusion", h: R`<p>$|f_n(t)|\leqslant\frac3{1+t^2}$.</p>`, b: R`<p>Pour tout $n$ et tout $t$ :</p>$$|f_n(t)|\leqslant\frac{1+2|\sin(t/n)|}{1+t^2}\leqslant\frac3{1+t^2} = \varphi(t),$$<p>et $\varphi$ est intégrable sur $\mathbb R$. Par convergence dominée :</p><div class="sbox">$$\int_{-\infty}^{+\infty}\frac{1+2\sin(t/n)}{1+t^2}\,dt\xrightarrow[n\to+\infty]{}\int_{-\infty}^{+\infty}\frac{dt}{1+t^2} = \pi.$$</div>`, rappels: ["ip-cvd", "ip-ref"] },
    { t: "2) Intégrales de Wallis", h: R`<p>$\sin^nt\to0$ sauf en $t = \frac\pi2$ ; domination par $1$.</p>`, b: R`<p>Posons $g_n(t) = \sin^n(t)$ sur $[0,\frac\pi2]$.</p><ul><li><b>Convergence simple</b> : pour $t\in[0,\frac\pi2[$, $0\leqslant\sin t\lt1$ donc $g_n(t)\to0$ ; en $t = \frac\pi2$, $g_n(t) = 1$. La limite $g$ est nulle sauf en un point : elle est continue par morceaux, d'intégrale nulle.</li><li><b>Domination</b> : $|g_n(t)|\leqslant1$, intégrable sur le segment $[0,\frac\pi2]$.</li></ul><p>Par convergence dominée :</p><div class="sbox">$$\int_0^{\pi/2}\sin^n(t)\,dt\xrightarrow[n\to+\infty]{}0.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`La limite simple dans 2) n'est pas continue (elle vaut $1$ en $\frac\pi2$), mais elle est continue par morceaux : c'est tout ce que demande le théorème.`,
  methode: R`Convergence dominée : limite simple, puis majoration de $|f_n|$ par une fonction intégrable indépendante de $n$.`
},
{ id: "ipar-02", ...P, level: 1, time: "10 min",
  title: "Limite de ∫₀^{π/4} tanⁿ x dx",
  enonce: R`<p>Étudier la limite quand $n$ tend vers l'infini de $u_n = \displaystyle\int_0^{\pi/4}\tan^n(x)\,dx$.</p>`,
  decode: { donnees: [R`$0\leqslant\tan x\leqslant1$ sur $[0,\frac\pi4]$.`], but: R`Convergence dominée avec $\varphi = 1$.`, cles: {} },
  steps: [
    { t: "Limite simple", h: R`<p>$\tan x\lt1$ sauf en $\frac\pi4$.</p>`, b: R`<p>Pour $x\in[0,\frac\pi4]$ :</p>$$\tan^n(x)\xrightarrow[n\to+\infty]{}\ell(x) = \left\{\begin{aligned}0&\quad\text{si }x\in[0,\tfrac\pi4[,\\1&\quad\text{si }x = \tfrac\pi4.\end{aligned}\right.$$` },
    { t: "Domination et conclusion", h: R`<p>$|\tan^nx|\leqslant1$.</p>`, b: R`<p>$|\tan^n(x)|\leqslant1 = \varphi(x)$, intégrable sur le segment $[0,\frac\pi4]$. Par convergence dominée :</p><div class="sbox">$$u_n\xrightarrow[n\to+\infty]{}\int_0^{\pi/4}\ell(x)\,dx = 0.$$</div><p>Variante sans le théorème : $u_n+u_{n+2} = \int_0^{\pi/4}\tan^n(1+\tan^2) = \frac1{n+1}$ et $(u_n)$ décroît, d'où $u_n\sim\frac1{2n}$.</p>`, rappels: ["ip-cvd"] }
  ],
  piege: R`La valeur de la limite simple en un point isolé ne change pas l'intégrale.`,
  methode: R`Puissances $f^n$ avec $0\leqslant f\leqslant1$ : la limite simple est nulle là où $f\lt1$ ; dominer par $1$ sur un segment.`
},
{ id: "ipar-03", ...P, level: 1, time: "15 min",
  title: "Limite de ∫₀^∞ e^{−xⁿ} dx",
  enonce: R`<p>Étudier la limite quand $n$ tend vers l'infini de $u_n = \displaystyle\int_0^{+\infty}e^{-x^n}\,dx$.</p>`,
  decode: { donnees: [R`Pour $x\geqslant1$ et $n\geqslant1$ : $x^n\geqslant x$.`], but: R`Dominer par $1$ sur $[0,1]$ et par $e^{-x}$ sur $[1,+\infty[$.`, cles: {} },
  steps: [
    { t: "Limite simple", h: R`<p>Trois cas : $x\lt1$, $x = 1$, $x>1$.</p>`, b: R`<p>Pour $n\geqslant1$ :</p>$$e^{-x^n}\xrightarrow[n\to+\infty]{}f(x) = \left\{\begin{aligned}1&\quad\text{si }x\in[0,1[,\\e^{-1}&\quad\text{si }x = 1,\\0&\quad\text{si }x>1.\end{aligned}\right.$$` },
    { t: "Domination", h: R`<p>$x\geqslant1\Rightarrow x^n\geqslant x$.</p>`, b: R`<p>Pour $n\geqslant1$ :</p>$$0\leqslant e^{-x^n}\leqslant\varphi(x) = \left\{\begin{aligned}1&\quad\text{si }x\in[0,1[,\\e^{-x}&\quad\text{si }x\geqslant1,\end{aligned}\right.$$<p>car pour $x\geqslant1$, $x^n\geqslant x$. La fonction $\varphi$ est intégrable sur $[0,+\infty[$ (en particulier, $u_n$ existe).</p>`, rappels: ["ip-ref"] },
    { t: "Conclusion", h: R`<p>Convergence dominée.</p>`, b: R`<p>Par convergence dominée :</p><div class="sbox">$$u_n\xrightarrow[n\to+\infty]{}\int_0^1dx = 1.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`La domination doit être valable pour tout $n$ à partir d'un rang ; ici $n\geqslant1$ suffit.`,
  methode: R`Domination par morceaux : choisir une majoration différente selon la zone, puis vérifier l'intégrabilité de la fonction recollée.`
},
{ id: "ipar-04", ...P, level: 1, time: "10 min",
  title: "Limite de ∫₀^∞ dx/(xⁿ + eˣ)",
  enonce: R`<p>Étudier la limite quand $n$ tend vers l'infini de $u_n = \displaystyle\int_0^{+\infty}\frac{dx}{x^n+e^x}$.</p>`,
  decode: { donnees: [R`$x^n\geqslant0$.`], but: R`Dominer par $e^{-x}$.`, cles: {} },
  steps: [
    { t: "Limite simple", h: R`<p>$x^n\to0$, $1$ ou $+\infty$.</p>`, b: R`<p>$$\frac1{x^n+e^x}\xrightarrow[n\to+\infty]{}f(x) = \left\{\begin{aligned}e^{-x}&\quad\text{si }x\in[0,1[,\\\tfrac1{1+e}&\quad\text{si }x = 1,\\0&\quad\text{si }x>1.\end{aligned}\right.$$` },
    { t: "Domination et conclusion", h: R`<p>$\frac1{x^n+e^x}\leqslant e^{-x}$.</p>`, b: R`<p>$0\leqslant\frac1{x^n+e^x}\leqslant e^{-x} = \varphi(x)$, intégrable sur $[0,+\infty[$. Par convergence dominée :</p><div class="sbox">$$u_n\xrightarrow[n\to+\infty]{}\int_0^1e^{-x}\,dx = 1-\frac1e = \frac{e-1}e.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Ne pas oublier le morceau $[0,1[$ où la limite n'est pas nulle.`,
  methode: R`Minorer le dénominateur par un terme intégrable à l'inverse (ici $e^x$).`
},
{ id: "ipar-05", ...P, level: 2, time: "15 min",
  title: "Limite de ∫₀^∞ e^{−t} sinⁿ t dt (Centrale)",
  enonce: R`<p>Calculer $\displaystyle\lim_{n\to+\infty}\int_0^{+\infty}e^{-t}\sin^n(t)\,dt$.</p>`,
  decode: { donnees: [R`$\sin^nt$ ne converge pas en $t\equiv-\frac\pi2\ [2\pi]$ (vaut $(-1)^n$).`], but: R`Passer aux valeurs absolues pour avoir une limite simple.`, cles: {} },
  steps: [
    { t: "La difficulté", h: R`<p>En $t = \frac{3\pi}2$, $\sin^nt = (-1)^n$.</p>`, b: R`<p>La suite $(e^{-t}\sin^nt)$ ne converge pas simplement : en $t = \frac{3\pi}2+2k\pi$, $\sin^nt = (-1)^n$. On contourne en majorant :</p>$$\Big|\int_0^{+\infty}e^{-t}\sin^n(t)\,dt\Big|\leqslant\int_0^{+\infty}e^{-t}|\sin t|^n\,dt.$$` },
    { t: "Convergence dominée pour la valeur absolue", h: R`<p>$f_n(t) = e^{-t}|\sin t|^n$, domination $e^{-t}$.</p>`, b: R`<p>Posons $f_n(t) = e^{-t}|\sin t|^n$.</p><ul><li>$f_n(t)\to0$ pour $t\not\equiv\frac\pi2\ [\pi]$, et $f_n(t) = e^{-t}$ aux points $t\equiv\frac\pi2\ [\pi]$ (isolés) : la limite $f$ est continue par morceaux, d'intégrale nulle.</li><li>$|f_n(t)|\leqslant e^{-t}$, intégrable sur $[0,+\infty[$.</li></ul><p>Par convergence dominée, $\int_0^{+\infty}f_n\to0$, donc</p><div class="sbox">$$\int_0^{+\infty}e^{-t}\sin^n(t)\,dt\xrightarrow[n\to+\infty]{}0.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Le théorème exige une convergence simple : quand elle manque, majorer par une quantité positive qui, elle, converge.`,
  methode: R`Pour montrer qu'une intégrale tend vers $0$ : il suffit de le montrer pour l'intégrale de la valeur absolue.`
},
{ id: "ipar-06", ...P, level: 3, time: "40 min",
  title: "L'intégrale de Gauss par (1 + t²/n)⁻ⁿ et Stirling",
  enonce: R`<p>On admet que $\int_{-\infty}^{+\infty}e^{-t^2}dt$ converge.</p><ol><li>Établir que $\displaystyle\int_{-\infty}^{+\infty}\Big(1+\frac{t^2}n\Big)^{-n}dt\xrightarrow[n\to+\infty]{}\int_{-\infty}^{+\infty}e^{-t^2}dt$.</li><li>Soit $n\in\mathbb N^*$. Vérifier que $\displaystyle\int_{-\infty}^{+\infty}\Big(1+\frac{t^2}n\Big)^{-n}dt = \sqrt n\,I_n$ avec $\displaystyle I_n = \int_{-\infty}^{+\infty}\frac{dx}{(1+x^2)^n}$.</li><li>Pour $n\in\mathbb N^*$, établir $I_n-I_{n+1} = \frac1{2n}I_n$.</li><li>En déduire une expression de $I_n$ à l'aide de factorielles.</li><li>À l'aide de la formule de Stirling, donner la valeur de $\int_{-\infty}^{+\infty}e^{-t^2}dt$.</li></ol>`,
  decode: { donnees: [R`$\big(1+\frac{t^2}n\big)^n\geqslant1+t^2$ (binôme).`], but: R`Convergence dominée, changement de variable, intégration par parties, récurrence, Stirling.`, cles: {} },
  steps: [
    { t: "1) Limite simple", h: R`<p>$\big(1+\frac{t^2}n\big)^{-n} = \exp\big(-n\ln(1+\frac{t^2}n)\big)$.</p>`, b: R`<p>Posons $f_n(t) = \big(1+\frac{t^2}n\big)^{-n}$. Pour $t$ fixé, $n\ln\big(1+\frac{t^2}n\big)\sim n\cdot\frac{t^2}n = t^2$, donc</p>$$f_n(t)\xrightarrow[n\to+\infty]{}e^{-t^2}.$$` },
    { t: "1) Domination", h: R`<p>Binôme : $\big(1+\frac{t^2}n\big)^n = 1+n\frac{t^2}n+\dots\geqslant1+t^2$.</p>`, b: R`<p>Par la formule du binôme (tous les termes sont positifs) :</p>$$\Big(1+\frac{t^2}n\Big)^n = 1+\binom n1\frac{t^2}n+\dots\geqslant1+t^2,$$<p>donc</p>$$0\leqslant f_n(t)\leqslant\frac1{1+t^2}.$$<p>$\frac1{1+t^2}$ est intégrable sur $\mathbb R$ : par convergence dominée,</p>$$\int_{-\infty}^{+\infty}f_n\xrightarrow[n\to+\infty]{}\int_{-\infty}^{+\infty}e^{-t^2}dt.$$`, rappels: ["ip-cvd"] },
    { t: "2) Changement de variable", h: R`<p>$t = \sqrt n\,x$.</p>`, b: R`<p>Avec $t = \sqrt nx$ ($dt = \sqrt n\,dx$, bijection $\mathcal C^1$ croissante de $\mathbb R$ sur $\mathbb R$) :</p>$$\int_{-\infty}^{+\infty}\Big(1+\frac{t^2}n\Big)^{-n}dt = \int_{-\infty}^{+\infty}(1+x^2)^{-n}\sqrt n\,dx = \sqrt n\,I_n.$$` },
    { t: "3) Intégration par parties", h: R`<p>$I_n-I_{n+1} = \int\frac{x^2}{(1+x^2)^{n+1}} = \int x\cdot\frac{x}{(1+x^2)^{n+1}}$.</p>`, b: R`<p>$$I_n-I_{n+1} = \int_{-\infty}^{+\infty}\frac{(1+x^2)-1}{(1+x^2)^{n+1}}dx = \int_{-\infty}^{+\infty}x\cdot\frac{x}{(1+x^2)^{n+1}}\,dx.$$<p>Une primitive de $\frac x{(1+x^2)^{n+1}}$ est $-\frac1{2n(1+x^2)^n}$. Par parties (le crochet $\big[-\frac x{2n(1+x^2)^n}\big]$ tend vers $0$ en $\pm\infty$, ce qui justifie l'opération) :</p>$$I_n-I_{n+1} = \Big[-\frac x{2n(1+x^2)^n}\Big]_{-\infty}^{+\infty}+\frac1{2n}\int_{-\infty}^{+\infty}\frac{dx}{(1+x^2)^n} = \frac1{2n}I_n.$$` },
    { t: "4) Formule explicite", h: R`<p>$I_{n+1} = \frac{2n-1}{2n}I_n$, $I_1 = \pi$.</p>`, b: R`<p>On obtient $I_{n+1} = \frac{2n-1}{2n}I_n$ et $I_1 = [\arctan x]_{-\infty}^{+\infty} = \pi$. Donc</p>$$I_{n+1} = \pi\prod_{k = 1}^n\frac{2k-1}{2k} = \pi\frac{1\cdot3\cdots(2n-1)}{2\cdot4\cdots(2n)} = \pi\frac{(2n)!}{2^{2n}(n!)^2}\qquad(n\in\mathbb N),$$<p>en multipliant numérateur et dénominateur par $2\cdot4\cdots(2n) = 2^nn!$.</p>` },
    { t: "5) Stirling", h: R`<p>$\sqrt{n+1}\,I_{n+1}\to\int e^{-t^2}$.</p>`, b: R`<p>Par 1) et 2), $\int_{-\infty}^{+\infty}e^{-t^2}dt = \lim\sqrt{n+1}\,I_{n+1}$. Par Stirling :</p>$$\frac{(2n)!}{2^{2n}(n!)^2}\sim\frac{\sqrt{4\pi n}\,(2n/e)^{2n}}{2^{2n}\cdot2\pi n\,(n/e)^{2n}} = \frac{\sqrt{4\pi n}}{2\pi n} = \frac1{\sqrt{\pi n}}.$$<p>Donc $\sqrt{n+1}\,I_{n+1}\sim\sqrt n\cdot\pi\cdot\frac1{\sqrt{\pi n}} = \sqrt\pi$.</p><div class="sbox">$$\int_{-\infty}^{+\infty}e^{-t^2}\,dt = \sqrt\pi.$$</div>`, rappels: ["ip-stirling"] }
  ],
  piege: R`L'intégration par parties sur un intervalle non borné doit être justifiée : le crochet doit avoir une limite finie aux bornes.`,
  methode: R`Calculer une intégrale « impossible » : l'approcher par une suite d'intégrales calculables (convergence dominée), puis passer à la limite.`
},
{ id: "ipar-07", ...P, level: 2, time: "15 min",
  title: "La suite ∫₀^∞ sin(nt)/(nt + t²) dt (CCINP)",
  enonce: R`<p>Vérifier que la suite de terme général $u_n = \displaystyle\int_0^{+\infty}\frac{\sin(nt)}{nt+t^2}\,dt$ est bien définie et étudier sa convergence.</p>`,
  decode: { donnees: [R`$|\sin u|\leqslant|u|$ et $|\sin u|\leqslant1$.`], but: R`Dominer par $1$ près de $0$ et par $\frac1{t^2}$ à l'infini.`, cles: {} },
  steps: [
    { t: "Existence", h: R`<p>Équivalent en $0^+$, majoration en $+\infty$.</p>`, b: R`<p>$f_n(t) = \frac{\sin(nt)}{nt+t^2}$ est continue sur $]0,+\infty[$, et :</p><ul><li>en $0^+$ : $f_n(t)\sim\frac{nt}{nt} = 1$, prolongeable par continuité ;</li><li>en $+\infty$ : $|f_n(t)|\leqslant\frac1{t^2}$.</li></ul><p>Donc $f_n$ est intégrable sur $]0,+\infty[$ et $u_n$ existe.</p>` },
    { t: "Limite simple et domination", h: R`<p>$|f_n(t)|\leqslant\frac1{n+t}\cdot\frac1t\cdot|\sin nt|$.</p>`, b: R`<p>Pour $t>0$ fixé, $|f_n(t)|\leqslant\frac1{nt}\to0$. Pour la domination :</p>$$|f_n(t)|\leqslant\left\{\begin{aligned}\frac{nt}{nt+t^2}&\leqslant1&&\text{si }t\leqslant\tfrac\pi2,\\\frac1{nt+t^2}&\leqslant\frac1{t^2}&&\text{si }t>\tfrac\pi2,\end{aligned}\right.$$<p>(car $|\sin u|\leqslant|u|$ et $|\sin u|\leqslant1$). La fonction $\varphi$ égale à $1$ sur $]0,\frac\pi2]$ et à $\frac1{t^2}$ au-delà est intégrable.</p>` },
    { t: "Conclusion", h: R`<p>Convergence dominée.</p>`, b: R`<div class="sbox">$$u_n\xrightarrow[n\to+\infty]{}\int_0^{+\infty}0\,dt = 0.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Près de $0$, il faut utiliser $|\sin u|\leqslant|u|$ : la majoration $|\sin|\leqslant1$ donnerait $\frac1{nt}$, non intégrable en $0$.`,
  methode: R`Domination en deux morceaux : un comportement près de $0$, un autre à l'infini.`
},
{ id: "ipar-08", ...P, level: 2, time: "15 min",
  title: "Limite de ∫₀^∞ xⁿ/(1 + x^{n+2}) dx (CCINP)",
  enonce: R`<p>Étudier la limite éventuelle, quand $n$ tend vers $+\infty$, de $I_n = \displaystyle\int_0^{+\infty}\frac{x^n}{1+x^{n+2}}\,dx$.</p>`,
  decode: { donnees: [R`Sur $[1,+\infty[$ : $\frac{x^n}{1+x^{n+2}}\leqslant\frac1{x^2}$.`], but: R`Couper en $1$.`, cles: {} },
  steps: [
    { t: "Découpage", h: R`<p>$I_n = \int_0^1+\int_1^{+\infty}$.</p>`, b: R`<p>$$I_n = \int_0^1\frac{x^n}{1+x^{n+2}}\,dx+\int_1^{+\infty}\frac{x^n}{1+x^{n+2}}\,dx.$$`, rappels: ["ip-decoupe"] },
    { t: "Le morceau [0, 1]", h: R`<p>$\frac{x^n}{1+x^{n+2}}\leqslant x^n$.</p>`, b: R`<p>$$0\leqslant\int_0^1\frac{x^n}{1+x^{n+2}}\,dx\leqslant\int_0^1x^n\,dx = \frac1{n+1}\xrightarrow[n\to+\infty]{}0.$$` },
    { t: "Le morceau [1, +∞[", h: R`<p>Limite simple $\frac1{x^2}$ pour $x>1$ ; domination $\frac1{x^2}$.</p>`, b: R`<p>Pour $x>1$ : $\frac{x^n}{1+x^{n+2}} = \frac1{x^{-n}+x^2}\to\frac1{x^2}$, et $0\leqslant\frac{x^n}{1+x^{n+2}}\leqslant\frac{x^n}{x^{n+2}} = \frac1{x^2}$, intégrable sur $[1,+\infty[$. Par convergence dominée :</p>$$\int_1^{+\infty}\frac{x^n}{1+x^{n+2}}\,dx\xrightarrow[n\to+\infty]{}\int_1^{+\infty}\frac{dx}{x^2} = 1.$$<div class="sbox">$$I_n\xrightarrow[n\to+\infty]{}1.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Sur $[0,+\infty[$ entier, $\frac1{x^2}$ n'est pas intégrable en $0$ : d'où le découpage.`,
  methode: R`Couper là où le comportement change ($x = 1$ pour les puissances $x^n$).`
},
{ id: "ipar-09", ...P, level: 2, time: "20 min",
  title: "Limite de ∫₀^∞ sinⁿ(x)/x² dx",
  enonce: R`<p>Étudier la limite quand $n$ tend vers l'infini de $u_n = \displaystyle\int_0^{+\infty}\frac{\sin^n(x)}{x^2}\,dx$ (pour $n\geqslant2$).</p>`,
  decode: { donnees: [R`$|\sin x|\leqslant|x|$ ; $\sin^n$ ne converge pas en $\frac{3\pi}2$.`], but: R`Couper en $1$, et passer aux valeurs absolues.`, cles: {} },
  steps: [
    { t: "Existence et découpage", h: R`<p>Prolongeable en $0$ pour $n\geqslant2$ ; $O(\frac1{x^2})$ à l'infini.</p>`, b: R`<p>Pour $n\geqslant2$, $\frac{\sin^nx}{x^2}$ est prolongeable par continuité en $0$ (car $\frac{\sin^2x}{x^2}\to1$) et majorée par $\frac1{x^2}$ à l'infini : $u_n$ existe. On ne peut pas dominer par $\frac1{x^2}$ sur $]0,+\infty[$ (non intégrable en $0$), donc on coupe en $1$.</p>`, rappels: ["ip-decoupe"] },
    { t: "Le morceau ]0, 1]", h: R`<p>$\frac{|\sin x|^n}{x^2}\leqslant|\sin x|^{n-2}$.</p>`, b: R`<p>Comme $|\sin x|\leqslant x$ :</p>$$\Big|\int_0^1\frac{\sin^nx}{x^2}dx\Big|\leqslant\int_0^1|\sin x|^{n-2}dx.$$<p>Sur $[0,1]$, $0\leqslant\sin x\leqslant\sin1\lt1$, donc $|\sin x|^{n-2}\to0$ avec domination par $1$ : cette intégrale tend vers $0$.</p>`, rappels: ["ip-cvd"] },
    { t: "Le morceau [1, +∞[", h: R`<p>$\frac{|\sin x|^n}{x^2}\to0$ sauf aux $\frac\pi2+k\pi$ ; domination $\frac1{x^2}$.</p>`, b: R`<p>$$\Big|\int_1^{+\infty}\frac{\sin^nx}{x^2}dx\Big|\leqslant\int_1^{+\infty}\frac{|\sin x|^n}{x^2}dx.$$<p>La fonction intégrée tend vers $0$ sauf aux points isolés $\frac\pi2+k\pi$, et est majorée par $\frac1{x^2}$, intégrable sur $[1,+\infty[$. Par convergence dominée, cette intégrale tend vers $0$.</p><div class="sbox">$$u_n\xrightarrow[n\to+\infty]{}0.$$</div>` }
  ],
  piege: R`Deux obstacles : l'intégrabilité de la domination en $0$ (d'où la coupure) et l'absence de limite simple de $\sin^n$ (d'où les valeurs absolues).`,
  methode: R`Combiner découpage et passage aux valeurs absolues quand la convergence simple ou la domination globale font défaut.`
},
{ id: "ipar-10", ...P, level: 1, time: "10 min",
  title: "Limite de l’intégrale de x puissance n sur 1 + x puissance 2n",
  enonce: R`<p>Étudier la limite quand $n$ tend vers l'infini de $u_n = \displaystyle\int_0^{+\infty}\frac{x^n}{x^{2n}+1}\,dx$.</p>`,
  decode: { donnees: [R`$\frac{x^n}{x^{2n}+1}\leqslant x^n$ et $\leqslant\frac1{x^n}$.`], but: R`Couper en $1$ et majorer directement.`, cles: {} },
  steps: [
    { t: "Deux majorations directes", h: R`<p>$\int_0^1x^n$ et $\int_1^{+\infty}x^{-n}$.</p>`, b: R`<p>Pour $n\geqslant2$ :</p>$$\left\{\begin{aligned}0&\leqslant\int_0^1\frac{x^n}{x^{2n}+1}dx\leqslant\int_0^1x^ndx = \frac1{n+1},\\0&\leqslant\int_1^{+\infty}\frac{x^n}{x^{2n}+1}dx\leqslant\int_1^{+\infty}\frac{dx}{x^n} = \frac1{n-1}.\end{aligned}\right.$$<div class="sbox">$$u_n\xrightarrow[n\to+\infty]{}0.$$</div><p>On peut aussi appliquer la convergence dominée, mais la majoration directe est plus rapide et donne même $u_n = O\big(\frac1n\big)$.</p>`, rappels: ["ip-decoupe"] }
  ],
  piege: R`Avant de sortir le théorème, voir si une majoration explicite ne suffit pas.`,
  methode: R`Couper en $1$ pour des puissances $x^n$ : majorer par $x^n$ d'un côté, par $x^{-n}$ de l'autre.`
},
{ id: "ipar-11", ...P, level: 2, time: "15 min",
  title: "∫₁^∞ n e^{−xⁿ} dx → ∫₁^∞ e^{−x}/x dx (CCINP)",
  enonce: R`<p>Montrer que $\displaystyle\lim_{n\to+\infty}\int_1^{+\infty}ne^{-x^n}\,dx = \int_1^{+\infty}\frac{e^{-x}}x\,dx$.</p>`,
  decode: { donnees: [R`Changement de variable $u = x^n$.`], but: R`Se ramener à une intégrale où $n$ n'apparaît que dans un exposant $\frac1n$.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$u = x^n$, $x = u^{1/n}$, $dx = \frac1nu^{\frac1n-1}du$.</p>`, b: R`<p>L'application $x\mapsto x^n$ est une bijection $\mathcal C^1$ strictement croissante de $[1,+\infty[$ sur lui-même. Avec $u = x^n$, $dx = \frac1nu^{\frac1n-1}du$ :</p>$$\int_1^{+\infty}ne^{-x^n}dx = \int_1^{+\infty}e^{-u}u^{\frac1n-1}\,du.$$<p>(L'intégrabilité est assurée par la domination ci-dessous.)</p>` },
    { t: "Convergence dominée", h: R`<p>$u^{\frac1n-1}\to u^{-1}$ ; $u^{\frac1n-1}\leqslant1$ pour $u\geqslant1$.</p>`, b: R`<p>Pour $u\geqslant1$ :</p><ul><li>$e^{-u}u^{\frac1n-1}\to\frac{e^{-u}}u$ ;</li><li>$\frac1n-1\leqslant0$, donc $u^{\frac1n-1}\leqslant1$ et $0\leqslant e^{-u}u^{\frac1n-1}\leqslant e^{-u}$, intégrable.</li></ul><p>Par convergence dominée :</p><div class="sbox">$$\int_1^{+\infty}ne^{-x^n}dx\xrightarrow[n\to+\infty]{}\int_1^{+\infty}\frac{e^{-u}}u\,du.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Sans changement de variable, $ne^{-x^n}$ a pour limite simple $0$ sur $]1,+\infty[$ mais n'est pas dominée (le facteur $n$ explose près de $1$).`,
  methode: R`Quand $n$ apparaît en facteur et en exposant : un changement de variable qui « absorbe » $n$.`
},
{ id: "ipar-12", ...P, level: 2, time: "20 min",
  title: "Limite de ∫₀^∞ n!/∏(k + x) dx (Mines)",
  enonce: R`<p>Calculer $\displaystyle\lim_{n\to+\infty}\int_0^{+\infty}\frac{n!}{\prod_{k = 1}^n(k+x)}\,dx$.</p>`,
  decode: { donnees: [R`$\frac{n!}{\prod(k+x)} = \prod_{k = 1}^n\frac k{k+x} = \prod_{k = 1}^n\frac1{1+x/k}$.`], but: R`Domination par les deux premiers facteurs ; limite simple par passage au logarithme.`, cles: {} },
  steps: [
    { t: "Domination", h: R`<p>Chaque facteur $\frac k{k+x}\leqslant1$ ; garder les deux premiers.</p>`, b: R`<p>Pour $n\geqslant2$ et $x\geqslant0$, chaque facteur $\frac k{k+x}$ est dans $]0,1]$, donc</p>$$0\lt\frac{n!}{\prod_{k = 1}^n(k+x)} = \prod_{k = 1}^n\frac k{k+x}\leqslant\frac1{1+x}\cdot\frac2{2+x} = \varphi(x),$$<p>et $\varphi(x)\sim\frac2{x^2}$ en $+\infty$ : $\varphi$ est intégrable sur $[0,+\infty[$.</p>` },
    { t: "Limite simple", h: R`<p>$\ln\prod\frac k{k+x} = -\sum\ln(1+\frac xk)$.</p>`, b: R`<p>Pour $x>0$ :</p>$$\ln\prod_{k = 1}^n\frac k{k+x} = -\sum_{k = 1}^n\ln\Big(1+\frac xk\Big)\xrightarrow[n\to+\infty]{}-\infty,$$<p>car $\ln(1+\frac xk)\sim\frac xk$ est le terme général positif d'une série divergente. Donc l'intégrande tend vers $0$ pour $x>0$ (et vaut $1$ en $x = 0$).</p>` },
    { t: "Conclusion", h: R`<p>Convergence dominée.</p>`, b: R`<div class="sbox">$$\int_0^{+\infty}\frac{n!}{\prod_{k = 1}^n(k+x)}\,dx\xrightarrow[n\to+\infty]{}0.$$</div><p>Pour $n = 1$, l'intégrale diverge : on ne commence qu'à $n = 2$.</p>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Le premier facteur seul, $\frac1{1+x}$, n'est pas intégrable : il en faut deux.`,
  methode: R`Produits de facteurs dans $]0,1]$ : dominer par un produit partiel fixe ; limite simple par le logarithme et une série divergente.`
},
{ id: "ipar-13", ...P, level: 1, time: "10 min",
  title: "Limite de ∫₀¹ f(tⁿ) dt (ENSTIM)",
  enonce: R`<p>Soit $f : [0,1]\to\mathbb R$ continue. Étudier la limite quand $n$ tend vers $+\infty$ de $\displaystyle\int_0^1f(t^n)\,dt$.</p>`,
  decode: { donnees: [R`$t^n\to0$ pour $t\in[0,1[$ ; $f$ bornée sur $[0,1]$.`], but: R`Convergence dominée avec $\varphi = \|f\|_\infty$.`, cles: {} },
  steps: [
    { t: "Limite simple", h: R`<p>Continuité de $f$ en $0$.</p>`, b: R`<p>Pour $t\in[0,1[$, $t^n\to0$, donc par continuité de $f$ en $0$ : $f(t^n)\to f(0)$. En $t = 1$, $f(1^n) = f(1)$. La limite simple vaut $f(0)$ sauf en un point.</p>` },
    { t: "Domination et conclusion", h: R`<p>$|f(t^n)|\leqslant\|f\|_\infty$.</p>`, b: R`<p>$f$ est continue sur le segment $[0,1]$, donc bornée : $|f(t^n)|\leqslant\|f\|_\infty$, constante intégrable sur $[0,1]$. Par convergence dominée :</p><div class="sbox">$$\int_0^1f(t^n)\,dt\xrightarrow[n\to+\infty]{}f(0).$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`La valeur $f(1)$ n'intervient pas : un seul point ne compte pas.`,
  methode: R`Composer une fonction bornée avec une suite qui converge simplement : domination par la borne.`
},
{ id: "ipar-14", ...P, level: 2, time: "15 min",
  title: "Limite de ∫₀^∞ n f(t) e^{−nt} dt (Mines)",
  enonce: R`<p>Soit $f : \mathbb R_+\to\mathbb R_+$ continue et bornée. On pose $I_n = \displaystyle\int_0^{+\infty}nf(t)e^{-nt}\,dt$. Déterminer la limite de $I_n$.</p>`,
  decode: { donnees: [R`$\int_0^{+\infty}ne^{-nt}dt = 1$.`], but: R`Changement de variable $u = nt$ puis convergence dominée.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$u = nt$.</p>`, b: R`<p>Pour $n\geqslant1$, avec $u = nt$ :</p>$$I_n = \int_0^{+\infty}f\Big(\frac un\Big)e^{-u}\,du.$$` },
    { t: "Convergence dominée", h: R`<p>$f(u/n)\to f(0)$ ; $|f(u/n)e^{-u}|\leqslant\|f\|_\infty e^{-u}$.</p>`, b: R`<ul><li>Par continuité de $f$ en $0$ : $f\big(\frac un\big)e^{-u}\to f(0)e^{-u}$.</li><li>$\big|f\big(\frac un\big)e^{-u}\big|\leqslant\|f\|_\infty e^{-u}$, intégrable sur $[0,+\infty[$.</li></ul><div class="sbox">$$I_n\xrightarrow[n\to+\infty]{}\int_0^{+\infty}f(0)e^{-u}\,du = f(0).$$</div><p>Interprétation : $ne^{-nt}$ est une densité de probabilité qui se concentre en $0$.</p>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Sans changement de variable, le facteur $n$ empêche toute domination.`,
  methode: R`Noyau qui se concentre ($n\,K(nt)$) : changement de variable $u = nt$, puis convergence dominée avec la borne de $f$.`
},
{ id: "ipar-15", ...P, level: 2, time: "15 min",
  title: "Limite de l’intégrale de n f(x) sur 1 + (nx) au carré",
  enonce: R`<p>Soit $f : \mathbb R_+\to\mathbb R$ continue et bornée. Déterminer la limite quand $n\to+\infty$ de $\displaystyle\int_0^{+\infty}\frac{nf(x)}{1+n^2x^2}\,dx$.</p>`,
  decode: { donnees: [R`$\int_0^{+\infty}\frac{du}{1+u^2} = \frac\pi2$.`], but: R`Changement de variable $u = nx$ puis convergence dominée.`, cles: {} },
  steps: [
    { t: "Changement de variable", h: R`<p>$u = nx$.</p>`, b: R`<p>Pour $n\geqslant1$, avec $u = nx$ :</p>$$\int_0^{+\infty}\frac{nf(x)}{1+n^2x^2}\,dx = \int_0^{+\infty}\frac{f(u/n)}{1+u^2}\,du.$$` },
    { t: "Convergence dominée", h: R`<p>Domination $\frac{\|f\|_\infty}{1+u^2}$.</p>`, b: R`<p>$f_n(u) = \frac{f(u/n)}{1+u^2}\to\frac{f(0)}{1+u^2}$ (continuité de $f$ en $0$), et $|f_n(u)|\leqslant\frac{\|f\|_\infty}{1+u^2}$, intégrable sur $\mathbb R_+$.</p><div class="sbox">$$\int_0^{+\infty}\frac{nf(x)}{1+n^2x^2}\,dx\xrightarrow[n\to+\infty]{}\int_0^{+\infty}\frac{f(0)}{1+u^2}\,du = \frac{\pi f(0)}2.$$</div>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Le facteur $\frac\pi2$ vient de $\int_0^{+\infty}\frac{du}{1+u^2}$ : le noyau n'est pas normalisé à $1$.`,
  methode: R`Même méthode que pour $ne^{-nt}$ : le changement de variable $u = nx$ révèle un noyau fixe.`
},
{ id: "ipar-16", ...P, level: 3, time: "45 min",
  title: "Limite de ∫₀^∞ n cos t sinⁿ t f(xt) dt et uniformité (X)",
  enonce: R`<p>Soit $f : \mathbb R_+\to\mathbb R$ de classe $\mathcal C^1$, intégrable ainsi que sa dérivée.</p><ol><li>Déterminer, pour $x>0$, $\displaystyle\lim_{n\to+\infty}\int_0^{+\infty}n\cos(t)\sin^n(t)f(xt)\,dt$.</li><li>Préciser le mode de convergence (en tant que fonctions de $x$).</li></ol>`,
  decode: { donnees: [R`$f'$ intégrable $\Rightarrow f$ a une limite en $+\infty$, nulle car $f$ intégrable.`], but: R`Intégrer par parties pour faire disparaître le facteur $n$, puis convergence dominée ; pour l'uniformité, couper l'intégrale de $f'$.`, cles: {} },
  steps: [
    { t: "1) Intégration par parties", h: R`<p>$n\cos t\sin^nt = \frac n{n+1}(\sin^{n+1}t)'$.</p>`, b: R`<p>Notons $u_n(x)$ l'intégrale ; elle existe car $|n\cos t\sin^nt\,f(xt)|\leqslant n|f(xt)|$, intégrable. Comme $f(y) = f(0)+\int_0^yf'$ a une limite en $+\infty$, nulle puisque $f$ est intégrable, le crochet $\big[\sin^{n+1}t\,f(xt)\big]_0^{+\infty}$ est nul. Par parties :</p>$$u_n(x) = -\frac n{n+1}\int_0^{+\infty}\sin^{n+1}(t)\,xf'(xt)\,dt.$$` },
    { t: "1) Convergence dominée", h: R`<p>$|\sin^{n+1}t\,xf'(xt)|\leqslant x|f'(xt)|$.</p>`, b: R`<p>Posons $g_n(t) = |\sin t|^{n+1}x|f'(xt)|$ :</p><ul><li>$g_n(t)\to0$ sauf aux points isolés $\frac\pi2+k\pi$ ;</li><li>$g_n(t)\leqslant x|f'(xt)| = \varphi(t)$, intégrable sur $[0,+\infty[$ (changement de variable $y = xt$).</li></ul><p>Par convergence dominée $\int g_n\to0$, donc $|u_n(x)|\leqslant\int g_n\to0$.</p><div class="sbox"><p>Pour tout $x>0$ : $u_n(x)\to0$.</p></div>`, rappels: ["ip-cvd"] },
    { t: "2) Écriture adaptée", h: R`<p>Changement de variable $u = xt$.</p>`, b: R`<p>Avec $u = xt$ :</p>$$u_n(x) = -\frac n{n+1}\int_0^{+\infty}\sin^{n+1}\Big(\frac ux\Big)f'(u)\,du,$$<p>donc</p>$$|u_n(x)|\leqslant\int_0^{+\infty}\Big|\sin\frac ux\Big|^{n+1}|f'(u)|\,du.$$<p>Soit $\varepsilon>0$ et $A$ tel que $\int_A^{+\infty}|f'|\leqslant\varepsilon$ ; notons $M = \max_{[0,A]}|f'|$. Alors</p>$$|u_n(x)|\leqslant M\int_0^A\Big|\sin\frac ux\Big|^{n+1}du+\varepsilon.$$` },
    { t: "2) Majoration uniforme en x", h: R`<p>Deux cas : $x\geqslant\frac{4A}\pi$ et $x\leqslant\frac{4A}\pi$.</p>`, b: R`<ul><li><b>Si $x\geqslant\frac{4A}\pi$</b> : pour $u\in[0,A]$, $0\leqslant\frac ux\leqslant\frac\pi4$, donc $|\sin\frac ux|\leqslant\frac1{\sqrt2}$ et</li></ul>$$\int_0^A\Big|\sin\frac ux\Big|^{n+1}du\leqslant\frac A{\sqrt2^{\,n+1}}.$$<ul><li><b>Si $x\leqslant\frac{4A}\pi$</b> : avec $t = \frac ux$ et $k$ tel que $k\pi\lt\frac Ax\leqslant(k+1)\pi$, par $\pi$-périodicité de $|\sin|$ :</li></ul>$$\int_0^A\Big|\sin\frac ux\Big|^{n+1}du = x\int_0^{A/x}|\sin t|^{n+1}dt\leqslant x(k+1)W_{n+1}^\pi,$$<p>où</p>$$W_{n+1}^\pi = \int_0^\pi\sin^{n+1}t\,dt.$$<p>Or $x(k+1)\pi\leqslant A+x\pi\leqslant5A$, donc ce terme est $\leqslant\frac{5A}\pi W^\pi_{n+1}$.</p>` },
    { t: "2) Conclusion", h: R`<p>$W^\pi_{n+1}\to0$ et $\frac1{\sqrt2^{n+1}}\to0$, indépendamment de $x$.</p>`, b: R`<p>Pour tout $x>0$ :</p>$$|u_n(x)|\leqslant\frac{5AM}\pi W^\pi_{n+1}+\frac{AM}{\sqrt2^{\,n+1}}+\varepsilon.$$<p>Les deux premiers termes tendent vers $0$ (le premier par convergence dominée, cf. intégrales de Wallis) et ne dépendent pas de $x$ : pour $n$ assez grand, $|u_n(x)|\leqslant2\varepsilon$ pour tout $x>0$.</p><div class="sbox"><p>$(u_n)$ converge uniformément vers $0$ sur $]0,+\infty[$.</p></div>` }
  ],
  piege: R`Le facteur $n$ devant l'intégrale interdit toute domination directe : l'intégration par parties est indispensable.`,
  methode: R`Uniformité en un paramètre : isoler une queue d'intégrale petite ($\int_A^{+\infty}|f'|\leqslant\varepsilon$), puis majorer le reste indépendamment du paramètre.`
},
{ id: "ipar-17", ...P, level: 3, time: "30 min",
  title: "Intégrabilité de t f(t) et limite d'une intégrale oscillante (Mines)",
  enonce: R`<p>Soit $f : \mathbb R\to\mathbb R$ continue et intégrable. On suppose qu'il existe $M\geqslant0$ tel que</p>$$\forall x>0,\quad\int_{-\infty}^{+\infty}\Big|\frac{e^{itx}-1}x\Big|\,|f(t)|\,dt\leqslant M.$$<ol><li>Montrer que la fonction $t\mapsto tf(t)$ est intégrable sur $\mathbb R$.</li><li>Calculer $\displaystyle\lim_{x\to0^+}\int_{-\infty}^{+\infty}\frac{e^{itx}-1}tf(t)\,dt$.</li></ol>`,
  decode: { donnees: [R`$|e^{iu}-1| = 2|\sin\frac u2|\leqslant|u|$ ; $\frac{|e^{itx}-1|}x\to|t|$ quand $x\to0^+$.`], but: R`1) Passer à la limite sur des segments. 2) Convergence dominée.`, cles: {} },
  steps: [
    { t: "1) Sur un segment", h: R`<p>$\frac{|e^{itx}-1|}x = \frac{2|\sin(tx/2)|}x\to|t|$ uniformément sur $[-A,A]$.</p>`, b: R`<p>Soit $A>0$. Pour $t\in[-A,A]$ :</p>$$h_x(t) = \frac{|e^{itx}-1|}x = |t|\cdot\Big|\frac{\sin(tx/2)}{tx/2}\Big|\qquad(t\neq0),$$<p>et $\frac{\sin v}v\to1$ quand $v\to0$, uniformément pour $|v|\leqslant\frac{Ax}2$. Donc $h_x\to|t|$ uniformément sur $[-A,A]$ quand $x\to0^+$, et, $f$ étant bornée sur le segment,</p>$$\int_{-A}^A|t||f(t)|\,dt = \lim_{x\to0^+}\int_{-A}^Ah_x(t)|f(t)|\,dt\leqslant M.$$` },
    { t: "1) Conclusion", h: R`<p>Intégrales partielles majorées.</p>`, b: R`<p>Pour tout $A>0$, $\int_{-A}^A|tf(t)|\,dt\leqslant M$ : les intégrales partielles d'une fonction positive sont majorées.</p><div class="sbox"><p>$t\mapsto tf(t)$ est intégrable sur $\mathbb R$, et $\int_{\mathbb R}|tf(t)|\,dt\leqslant M$.</p></div>` },
    { t: "2) Limite de l'intégrale", h: R`<p>$\big|\frac{e^{itx}-1}t\big|\leqslant x\leqslant1$ pour $x\leqslant1$.</p>`, b: R`<p>Telle qu'elle est écrite (dénominateur $t$) : pour $t\neq0$, $\frac{e^{itx}-1}t\to0$ quand $x\to0^+$, et $\big|\frac{e^{itx}-1}tf(t)\big|\leqslant x|f(t)|\leqslant|f(t)|$ pour $x\leqslant1$, intégrable. Par convergence dominée (le long de toute suite $x_k\to0^+$) :</p>$$\int_{-\infty}^{+\infty}\frac{e^{itx}-1}tf(t)\,dt\xrightarrow[x\to0^+]{}0.$$` },
    { t: "2) La version attendue (dénominateur x)", h: R`<p>$\frac{e^{itx}-1}x\to it$, domination $|tf(t)|$.</p>`, b: R`<p>L'énoncé vise vraisemblablement $\frac{e^{itx}-1}x$ (c'est là que sert la question 1). Pour $t$ fixé, $\frac{e^{itx}-1}x\to it$, et $\big|\frac{e^{itx}-1}x\big|\leqslant|t|$, donc</p>$$\Big|\frac{e^{itx}-1}xf(t)\Big|\leqslant|tf(t)|,$$<p>intégrable par la question 1. Par convergence dominée :</p><div class="sbox">$$\int_{-\infty}^{+\infty}\frac{e^{itx}-1}xf(t)\,dt\xrightarrow[x\to0^+]{}i\int_{-\infty}^{+\infty}tf(t)\,dt.$$</div><p>C'est la dérivée en $0$ de la transformée de Fourier $x\mapsto\int e^{itx}f(t)\,dt$.</p>`, rappels: ["ip-cvd"] }
  ],
  piege: R`Le théorème de convergence dominée s'applique à des suites : pour une limite quand $x\to0^+$, on l'applique le long de toute suite $x_k\to0^+$ (caractérisation séquentielle).`,
  methode: R`Établir une intégrabilité : majorer uniformément les intégrales sur les segments, puis faire tendre le segment vers $\mathbb R$.`
}
]);
})();

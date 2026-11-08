/* Intégrales dépendant d'un paramètre (Spé) : bloc « Non-intégration terme à terme ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 6 };
LEMME.rappels({
  "ip-nonitt": { t: "Prouver qu'une série d'intégrales diverge", b: R`<p>Si $f_n\geqslant0$ et $\sum f_n = S$ avec $S$ <b>non intégrable</b>, l'intégration terme à terme positive donne $\sum\int f_n = \int S = +\infty$ : la série $\sum\int f_n$ diverge. C'est la contraposée utile du théorème.</p>` }
});
LEMME.exercises([
{ id: "ipar-66", ...P, level: 2, time: "20 min",
  title: "Somme et intégrale qui ne commutent pas",
  enonce: R`<p>Pour $n\in\mathbb N^*$ et $t\in\,]0,+\infty[$, on pose $u_n(t) = e^{-nt}-2e^{-2nt}$. Montrer que les deux expressions</p>$$\sum_{n = 1}^{+\infty}\Big(\int_0^{+\infty}u_n(t)\,dt\Big)\qquad\text{et}\qquad\int_0^{+\infty}\Big(\sum_{n = 1}^{+\infty}u_n(t)\Big)dt$$<p>existent, mais que leurs valeurs diffèrent.</p>`,
  decode: { donnees: [R`$\sum_{n\geqslant1}e^{-nt} = \frac1{e^t-1}$.`], but: R`Calculer les deux côtés ; expliquer pourquoi le théorème ne s'applique pas.`, cles: {} },
  steps: [
    { t: "Somme des intégrales", h: R`<p>$\int_0^{+\infty}e^{-\lambda t}dt = \frac1\lambda$.</p>`, b: R`$$\int_0^{+\infty}u_n(t)\,dt = \frac1n-\frac2{2n} = 0,\qquad\text{donc}\qquad\sum_{n = 1}^{+\infty}\int_0^{+\infty}u_n(t)\,dt = 0.$$` },
    { t: "Somme des fonctions", h: R`<p>Deux séries géométriques.</p>`, b: R`<p>Pour $t>0$ :</p>$$\sum_{n = 1}^{+\infty}u_n(t) = \frac1{e^t-1}-\frac2{e^{2t}-1} = \frac{(e^t+1)-2}{e^{2t}-1} = \frac1{e^t+1}.$$` },
    { t: "Intégrale de la somme", h: R`<p>$\frac1{e^t+1} = \frac{e^{-t}}{1+e^{-t}}$.</p>`, b: R`$$\int_0^{+\infty}\frac{dt}{e^t+1} = \int_0^{+\infty}\frac{e^{-t}}{1+e^{-t}}\,dt = \Big[-\ln(1+e^{-t})\Big]_0^{+\infty} = \ln2.$$<div class="sbox">$$\sum_{n = 1}^{+\infty}\int_0^{+\infty}u_n = 0\neq\ln2 = \int_0^{+\infty}\sum_{n = 1}^{+\infty}u_n.$$</div>` },
    { t: "Pourquoi le théorème échoue", h: R`<p>$\int|u_n| = \frac cn$.</p>`, b: R`<p>Avec $s = nt$ :</p>$$\int_0^{+\infty}|u_n(t)|\,dt = \frac1n\int_0^{+\infty}|e^{-s}-2e^{-2s}|\,ds = \frac cn,\qquad c>0.$$<p>La série $\sum\int|u_n|$ diverge : l'hypothèse du théorème d'intégration terme à terme n'est pas satisfaite, et les $u_n$ ne sont pas de signe constant.</p>`, rappels: ["ip-itt"] }
  ],
  piege: R`L'existence des deux expressions ne suffit pas à les égaler : il faut une hypothèse (signe ou convergence de $\sum\int|u_n|$).`,
  methode: R`Contre-exemple type : des intégrales nulles par compensation, dont les valeurs absolues décroissent comme $\frac1n$.`
},
{ id: "ipar-67", ...P, level: 2, time: "20 min",
  title: "Séries de ∫₀¹ et ∫₁^∞ de dt/(1 + t³)ⁿ (CCINP)",
  enonce: R`<ol><li>Donner les limites des suites de termes généraux $U_n = \displaystyle\int_0^1\frac{dt}{(1+t^3)^n}$ et $V_n = \displaystyle\int_1^{+\infty}\frac{dt}{(1+t^3)^n}$.</li><li>Quelles sont les natures des séries $\sum_{n\geqslant1}U_n$ et $\sum_{n\geqslant1}V_n$ ?</li></ol>`,
  decode: { donnees: [R`$\sum_{n\geqslant1}\frac1{(1+t^3)^n} = \frac1{t^3}$ pour $t>0$.`], but: R`Convergence dominée ; intégration terme à terme positive.`, cles: {} },
  steps: [
    { t: "1) Limites", h: R`<p>Domination par $\frac1{1+t^3}$.</p>`, b: R`<p>$u_n(t) = (1+t^3)^{-n}\to0$ pour $t>0$, et $0\leqslant u_n\leqslant\frac1{1+t^3}$, intégrable sur $]0,+\infty[$. Par convergence dominée sur $]0,1]$ et sur $[1,+\infty[$ :</p><div class="sbox">$$U_n\xrightarrow[n\to+\infty]{}0,\qquad V_n\xrightarrow[n\to+\infty]{}0.$$</div>`, rappels: ["ip-cvd"] },
    { t: "2) Somme des uₙ", h: R`<p>Série géométrique de raison $\frac1{1+t^3}$.</p>`, b: R`<p>Pour $t>0$ :</p>$$\sum_{n = 1}^{+\infty}\frac1{(1+t^3)^n} = \frac1{1+t^3}\cdot\frac1{1-\frac1{1+t^3}} = \frac1{t^3}.$$` },
    { t: "2) Natures", h: R`<p>Cas positif sur $]0,1]$ et sur $[1,+\infty[$.</p>`, b: R`<p>Les $u_n$ sont positives. Par intégration terme à terme positive, dans $[0,+\infty]$ :</p>$$\sum_{n = 1}^{+\infty}U_n = \int_0^1\frac{dt}{t^3} = +\infty,\qquad\sum_{n = 1}^{+\infty}V_n = \int_1^{+\infty}\frac{dt}{t^3} = \frac12.$$<div class="sbox"><p>$\sum U_n$ diverge ; $\sum V_n$ converge, de somme $\frac12$.</p></div>`, rappels: ["ip-ittpos", "ip-nonitt"] }
  ],
  piege: R`Les deux suites tendent vers $0$, mais à des vitesses très différentes : $U_n\sim\frac C{n^{1/3}}$, alors que $V_n\leqslant2^{1-n}V_1$ décroît géométriquement.`,
  methode: R`Pour la nature d'une série d'intégrales positives : sommer sous l'intégrale et regarder l'intégrabilité de la somme.`
},
{ id: "ipar-68", ...P, level: 2, time: "25 min",
  title: "Les intégrales ∫₀^∞ dt/(1 + tˣ)ⁿ (CCINP)",
  enonce: R`<p>Soit $n\in\mathbb N^*$.</p><ol><li>Déterminer l'ensemble de définition de $I_n(x) = \displaystyle\int_0^{+\infty}\frac{dt}{(1+t^x)^n}$.</li><li>Montrer que, si $x>1$, la série $\sum I_n(x)$ diverge.</li><li>Calculer $I_n(2)$ pour $n\geqslant1$.</li></ol>`,
  decode: { donnees: [R`$\sum_{n\geqslant1}\frac1{(1+t^x)^n} = \frac1{t^x}$.`], but: R`Discussion selon $x$ ; cas positif ; récurrence par parties.`, cles: {} },
  steps: [
    { t: "1) Ensemble de définition", h: R`<p>Limite en $+\infty$ selon le signe de $x$.</p>`, b: R`<p>$t\mapsto(1+t^x)^{-n}$ est continue sur $]0,+\infty[$.</p><ul><li><b>$x\lt0$</b> : l'intégrande tend vers $1$ en $+\infty$ : non intégrable.</li><li><b>$x = 0$</b> : l'intégrande vaut $2^{-n}$ : non intégrable.</li><li><b>$x>0$</b> : elle tend vers $1$ en $0$ et équivaut à $\frac1{t^{nx}}$ en $+\infty$ : intégrable si, et seulement si, $nx>1$.</li></ul><div class="sbox"><p>$I_n(x)$ est défini si, et seulement si, $x>\dfrac1n$.</p></div>` },
    { t: "2) Divergence pour x > 1", h: R`<p>Somme $\frac1{t^x}$, non intégrable en $0$.</p>`, b: R`<p>Pour $x>1$, tous les $I_n(x)$ existent. Les fonctions $(1+t^x)^{-n}$ sont positives et</p>$$\sum_{n = 1}^{+\infty}\frac1{(1+t^x)^n} = \frac1{t^x},$$<p>non intégrable en $0$ (car $x>1$). Par intégration terme à terme positive, $\sum I_n(x) = +\infty$ : la série diverge.</p>`, rappels: ["ip-ittpos", "ip-nonitt"] },
    { t: "3) Récurrence", h: R`<p>Parties avec $u(t) = t$.</p>`, b: R`<p>Par parties (crochet $\frac t{(1+t^2)^n}$ nul aux bornes) :</p>$$I_n(2) = 2n\int_0^{+\infty}\frac{t^2}{(1+t^2)^{n+1}}\,dt = 2n\big(I_n(2)-I_{n+1}(2)\big).$$<p>Donc $I_{n+1}(2) = \frac{2n-1}{2n}I_n(2)$, avec $I_1(2) = \int_0^{+\infty}\frac{dt}{1+t^2} = \frac\pi2$.</p>` },
    { t: "3) Formule close", h: R`<p>Produit télescopique.</p>`, b: R`$$I_{n+1}(2) = \frac{(2n-1)(2n-3)\cdots1}{(2n)(2n-2)\cdots2}\cdot\frac\pi2 = \frac{(2n)!}{(2^nn!)^2}\cdot\frac\pi2.$$<div class="sbox">$$I_n(2) = \frac{(2n-2)!}{\big(2^{n-1}(n-1)!\big)^2}\cdot\frac\pi2\qquad(n\geqslant1).$$</div><p>Variante : $t = \tan u$ donne $I_n(2) = \int_0^{\pi/2}\cos^{2n-2}u\,du$, une intégrale de Wallis.</p>` }
  ],
  piege: R`Le domaine dépend de $n$ : pour $\frac1n\lt x\leqslant1$, seuls certains $I_k(x)$ existent.`,
  methode: R`Intégrales $\int\frac{dt}{(1+t^2)^n}$ : intégration par parties sur $u(t) = t$, ou retour à Wallis.`
},
{ id: "ipar-69", ...P, level: 2, time: "20 min",
  title: "La suite ∫₀^{π/2} cosⁿ((π/2) sin x) dx (Mines)",
  enonce: R`<p>Pour $n\in\mathbb N$, on pose</p>$$u_n = \int_0^{\pi/2}\Big(\cos\Big(\frac\pi2\sin x\Big)\Big)^n\,dx.$$<ol><li>Étudier la convergence de la suite $(u_n)$.</li><li>Quelle est la nature de la série $\sum u_n$ ?</li></ol>`,
  decode: { donnees: [R`$1-\cos u\sim\frac{u^2}2$.`], but: R`Convergence dominée ; intégration terme à terme positive.`, cles: {} },
  steps: [
    { t: "1) Limite", h: R`<p>$0\leqslant\cos(\frac\pi2\sin x)\lt1$ sur $]0,\frac\pi2]$.</p>`, b: R`<p>Pour $x\in\,]0,\frac\pi2]$, $\frac\pi2\sin x\in\,]0,\frac\pi2]$, donc $0\leqslant\cos(\frac\pi2\sin x)\lt1$ et $f_n(x)\to0$. La domination par $1$ est intégrable sur $[0,\frac\pi2]$.</p><div class="sbox">$$u_n\xrightarrow[n\to+\infty]{}0.$$</div>`, rappels: ["ip-cvd"] },
    { t: "2) Somme des fₙ", h: R`<p>Série géométrique.</p>`, b: R`<p>Les $f_n$ sont positives et, pour $x\in\,]0,\frac\pi2]$ :</p>$$\sum_{n = 0}^{+\infty}f_n(x) = \frac1{1-\cos\big(\frac\pi2\sin x\big)}.$$` },
    { t: "2) Non-intégrabilité en 0", h: R`<p>Équivalent $\frac8{\pi^2x^2}$.</p>`, b: R`<p>Quand $x\to0^+$ : $\frac\pi2\sin x\sim\frac\pi2x$, donc</p>$$1-\cos\Big(\frac\pi2\sin x\Big)\sim\frac12\cdot\frac{\pi^2x^2}4,\qquad\frac1{1-\cos\big(\frac\pi2\sin x\big)}\sim\frac8{\pi^2x^2},$$<p>non intégrable en $0$. Par intégration terme à terme positive :</p><div class="sbox"><p>$\sum u_n = +\infty$ : la série diverge.</p></div>`, rappels: ["ip-ittpos", "ip-nonitt"] }
  ],
  piege: R`La convergence $u_n\to0$ ne dit rien de la série : la vitesse ici est en $\frac1{\sqrt n}$.`,
  methode: R`Nature de $\sum\int g^n$ avec $0\leqslant g\lt1$ : étudier l'intégrabilité de $\frac1{1-g}$ là où $g$ touche $1$.`
},
{ id: "ipar-70", ...P, level: 2, time: "15 min",
  title: "Nature de Σ ∫₀^∞ e^{−t} cos^{2n} t dt (Mines)",
  enonce: R`<p>Donner la nature de la série de terme général</p>$$u_n = \int_0^{+\infty}e^{-t}\cos^{2n}(t)\,dt.$$`,
  decode: { donnees: [R`$1-\cos^2 = \sin^2$.`], but: R`Intégration terme à terme positive sur $]0,\frac\pi2]$.`, cles: {} },
  steps: [
    { t: "Minoration", h: R`<p>Se restreindre à $[0,\frac\pi2]$.</p>`, b: R`<p>Les intégrandes sont positives, donc</p>$$u_n\geqslant v_n = \int_0^{\pi/2}e^{-t}\cos^{2n}(t)\,dt.$$` },
    { t: "Somme des intégrandes", h: R`<p>Série géométrique de raison $\cos^2t$.</p>`, b: R`<p>Pour $t\in\,]0,\frac\pi2]$ :</p>$$\sum_{n = 0}^{+\infty}e^{-t}\cos^{2n}t = \frac{e^{-t}}{1-\cos^2t} = \frac{e^{-t}}{\sin^2t}\underset{t\to0^+}{\sim}\frac1{t^2},$$<p>non intégrable en $0$.</p>` },
    { t: "Conclusion", h: R`<p>Cas positif, puis comparaison.</p>`, b: R`<p>Par intégration terme à terme positive, $\sum v_n = +\infty$. Par comparaison de séries positives :</p><div class="sbox"><p>$\sum u_n$ diverge.</p></div>`, rappels: ["ip-ittpos", "ip-nonitt"] }
  ],
  piege: R`Sur $[0,+\infty[$ entier, $\cos^2t = 1$ en chaque $k\pi$ : la somme n'est même pas définie partout ; se restreindre à $]0,\frac\pi2]$ simplifie.`,
  methode: R`Minorer par un morceau où l'étude est simple, puis conclure par comparaison.`
},
{ id: "ipar-71", ...P, level: 2, time: "25 min",
  title: "La suite ∫₀¹ (1 − x)ⁿ ln x dx (ENSTIM)",
  enonce: R`<p>Pour $n\in\mathbb N$, on pose $a_n = \displaystyle\int_0^1(1-x)^n\ln x\,dx$.</p><ol><li>Justifier l'existence de $a_n$ et déterminer la limite de $(a_n)$.</li><li>Étudier la nature de la série $\sum a_n$.</li><li>Calculer $(n+1)a_n-na_{n-1}$ pour tout $n\in\mathbb N^*$.</li><li>En déduire un équivalent de $(a_n)$.</li></ol>`,
  decode: { donnees: [R`$\ln$ est intégrable en $0$ ; $H_n\sim\ln n$.`], but: R`Convergence dominée ; cas positif ; parties ; télescopage.`, cles: {} },
  steps: [
    { t: "1) Existence et limite", h: R`<p>$|(1-x)^n\ln x|\leqslant|\ln x|$.</p>`, b: R`<p>Pour $x\in\,]0,1]$ : $|(1-x)^n\ln x|\leqslant|\ln x|$, intégrable : $a_n$ existe. De plus $(1-x)^n\ln x\to0$. Par convergence dominée :</p><div class="sbox">$$a_n\xrightarrow[n\to+\infty]{}0.$$</div>`, rappels: ["ip-cvd"] },
    { t: "2) Nature", h: R`<p>$\sum(1-x)^n(-\ln x) = \frac{-\ln x}x$.</p>`, b: R`<p>Les fonctions $-(1-x)^n\ln x$ sont positives sur $]0,1]$ et</p>$$\sum_{n = 0}^{+\infty}(1-x)^n(-\ln x) = \frac{-\ln x}x,$$<p>non intégrable en $0$ (elle domine $\frac1x$). Par intégration terme à terme positive, $\sum(-a_n) = +\infty$ :</p><div class="sbox"><p>$\sum a_n$ diverge.</p></div>`, rappels: ["ip-ittpos", "ip-nonitt"] },
    { t: "3) Une primitive", h: R`<p>$g(x) = -x(1-x)^n$ : $-g' = (n+1)(1-x)^n-n(1-x)^{n-1}$.</p>`, b: R`<p>Posons $g(x) = (1-x)^{n+1}-(1-x)^n = -x(1-x)^n$. Alors</p>$$g'(x) = -(n+1)(1-x)^n+n(1-x)^{n-1},$$<p>donc $(n+1)a_n-na_{n-1} = -\int_0^1g'(x)\ln x\,dx$.</p>` },
    { t: "3) Intégration par parties", h: R`<p>Le crochet $x(1-x)^n\ln x$ est nul aux bornes.</p>`, b: R`$$(n+1)a_n-na_{n-1} = \big[-g(x)\ln x\big]_0^1+\int_0^1\frac{g(x)}x\,dx = 0-\int_0^1(1-x)^n\,dx.$$<div class="sbox">$$(n+1)a_n-na_{n-1} = -\frac1{n+1}.$$</div>` },
    { t: "4) Équivalent", h: R`<p>Télescoper, $a_0 = -1$.</p>`, b: R`<p>Comme $a_0 = \int_0^1\ln x\,dx = -1$, par télescopage :</p>$$(N+1)a_N = a_0-\sum_{n = 1}^N\frac1{n+1} = -\sum_{k = 1}^{N+1}\frac1k = -H_{N+1}.$$<div class="sbox">$$a_n = -\frac{H_{n+1}}{n+1}\underset{n\to+\infty}{\sim}-\frac{\ln n}n.$$</div>` }
  ],
  piege: R`L'équivalent $-\frac{\ln n}n$ confirme la divergence de la question 2 : c'est le terme d'une série divergente.`,
  methode: R`Relation $(n+1)a_n-na_{n-1}$ : la suite $(n+1)a_n$ télescope.`
},
{ id: "ipar-72", ...P, level: 3, time: "35 min",
  title: "Un exemple où l'on ne peut pas permuter",
  enonce: R`<p>Soit $n\in\mathbb N^*$ et $f_n(x) = \dfrac{n^2-x^2}{(n^2+x^2)^2}$.</p><ol><li>Justifier que $\int_0^{+\infty}f_n(x)\,dx$ est définie.</li><li>Soit $a\geqslant0$. Calculer $\int_0^af_n(x)\,dx$. En déduire $\int_0^{+\infty}f_n$, puis $\sum_{n = 1}^{+\infty}\int_0^{+\infty}f_n$.</li><li>Soit $a\geqslant0$. Montrer que $\sum f_n$ converge uniformément sur $[0,a]$, puis que $\displaystyle\int_0^a\sum_{n = 1}^{+\infty}f_n(x)\,dx = \sum_{n = 1}^{+\infty}\frac a{n^2+a^2}$.</li><li>Par une comparaison série-intégrale, déterminer $\displaystyle\lim_{a\to+\infty}\sum_{n = 1}^{+\infty}\frac a{n^2+a^2}$.</li><li>En déduire que $\int_0^{+\infty}\sum_{n = 1}^{+\infty}f_n(x)\,dx$ converge et donner sa valeur. Qu'en conclure ?</li></ol>`,
  decode: { donnees: [R`$\frac d{dx}\frac x{n^2+x^2} = \frac{n^2-x^2}{(n^2+x^2)^2}$.`], but: R`Primitive explicite ; convergence normale sur un segment ; comparaison série-intégrale.`, cles: {} },
  steps: [
    { t: "1) Existence", h: R`<p>$f_n(x)\sim-\frac1{x^2}$.</p>`, b: R`<p>$f_n$ est continue sur $[0,+\infty[$ et $f_n(x)\sim-\frac1{x^2}$ en $+\infty$ : $\int_0^{+\infty}f_n$ converge.</p>` },
    { t: "2) Une primitive", h: R`<p>Dériver $\frac x{n^2+x^2}$.</p>`, b: R`<p>On remarque que</p>$$\frac d{dx}\Big(\frac x{n^2+x^2}\Big) = \frac{(n^2+x^2)-2x^2}{(n^2+x^2)^2} = f_n(x),$$<p>donc</p>$$\int_0^af_n(x)\,dx = \frac a{n^2+a^2}\xrightarrow[a\to+\infty]{}0.$$<div class="sbox">$$\int_0^{+\infty}f_n = 0,\qquad\sum_{n = 1}^{+\infty}\int_0^{+\infty}f_n = 0.$$</div>` },
    { t: "3) Convergence uniforme sur [0, a]", h: R`<p>$|f_n(x)|\leqslant\frac{n^2+a^2}{n^4}$.</p>`, b: R`<p>Pour $x\in[0,a]$ : $|n^2-x^2|\leqslant n^2+a^2$ et $(n^2+x^2)^2\geqslant n^4$, donc</p>$$|f_n(x)|\leqslant\frac{n^2+a^2}{n^4},\qquad\sum_{n = 1}^{+\infty}\frac{n^2+a^2}{n^4}\lt+\infty.$$<p>La série converge normalement, donc uniformément, sur le segment $[0,a]$. On peut intégrer terme à terme sur un segment :</p>$$\int_0^a\sum_{n = 1}^{+\infty}f_n(x)\,dx = \sum_{n = 1}^{+\infty}\int_0^af_n = \sum_{n = 1}^{+\infty}\frac a{n^2+a^2}.$$` },
    { t: "4) Comparaison série-intégrale", h: R`<p>$x\mapsto\frac a{x^2+a^2}$ décroît sur $[0,+\infty[$.</p>`, b: R`<p>$x\mapsto\frac a{x^2+a^2}$ est décroissante et intégrable sur $[0,+\infty[$, donc</p>$$\int_1^{+\infty}\frac{a\,dx}{x^2+a^2}\leqslant\sum_{n = 1}^{+\infty}\frac a{n^2+a^2}\leqslant\int_0^{+\infty}\frac{a\,dx}{x^2+a^2}.$$<p>Or $\int_0^{+\infty}\frac{a\,dx}{x^2+a^2} = \frac\pi2$ et $\int_1^{+\infty}\frac{a\,dx}{x^2+a^2} = \frac\pi2-\arctan\frac1a$. Par encadrement :</p><div class="sbox">$$\sum_{n = 1}^{+\infty}\frac a{n^2+a^2}\xrightarrow[a\to+\infty]{}\frac\pi2.$$</div>` },
    { t: "5) Conclusion", h: R`<p>Comparer avec 2).</p>`, b: R`<p>Par 3) et 4), $\int_0^a\sum f_n\to\frac\pi2$ quand $a\to+\infty$ : l'intégrale impropre converge et</p><div class="sbox">$$\int_0^{+\infty}\sum_{n = 1}^{+\infty}f_n(x)\,dx = \frac\pi2\neq0 = \sum_{n = 1}^{+\infty}\int_0^{+\infty}f_n(x)\,dx.$$</div><p>Il est donc faux ici de permuter somme et intégrale sur $[0,+\infty[$ : la convergence uniforme sur chaque segment ne suffit pas sur un intervalle non borné.</p>` }
  ],
  piege: R`La convergence uniforme sur tout segment $[0,a]$ ne permet pas de permuter sur $[0,+\infty[$ : c'est le passage $a\to+\infty$ qui pose problème.`,
  methode: R`Pour un contre-exemple : calculer explicitement les deux côtés grâce à une primitive simple.`
}
]);
})();

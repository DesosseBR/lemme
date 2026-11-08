/* Intégrales dépendant d'un paramètre (Spé) : bloc « Intégration terme à terme ». Exercices reformulés et entièrement corrigés. */
(() => {
const R = String.raw;
const P = { subj: "maths", year: "mp", chap: 6 };
LEMME.rappels({
  "ip-itt": { t: "Intégration terme à terme", b: R`<p>Soit $\sum f_n$ une série de fonctions continues par morceaux et intégrables sur un intervalle $I$, qui converge simplement sur $I$ vers une fonction $S$ continue par morceaux. Si la série $\sum\int_I|f_n|$ converge, alors $S$ est intégrable sur $I$ et</p>$$\int_IS = \sum_{n = 0}^{+\infty}\int_If_n.$$` },
  "ip-ittpos": { t: "Intégration terme à terme : cas positif", b: R`<p>Si les $f_n$ sont <b>positives</b>, continues par morceaux, et si $\sum f_n$ converge simplement vers $S$ continue par morceaux, alors l'égalité</p>$$\int_IS = \sum_{n = 0}^{+\infty}\int_If_n$$<p>a lieu dans $[0,+\infty]$, sans autre hypothèse. En particulier : $S$ est intégrable si, et seulement si, $\sum\int_If_n$ converge.</p>` },
  "ip-tlnk": { t: "Intégrales de la forme ∫₀¹ tⁿ (ln t)ᵖ dt", b: R`<p>Par $p$ intégrations par parties (ou $t = e^{-u}$) :</p>$$\int_0^1t^n(\ln t)^p\,dt = \frac{(-1)^pp!}{(n+1)^{p+1}}.$$<p>Cas utiles : $\int_0^1t^n\ln t\,dt = -\frac1{(n+1)^2}$ et $\int_0^1t^n(\ln t)^2dt = \frac2{(n+1)^3}$.</p>` },
  "ip-tpe": { t: "Intégrales de la forme ∫₀^∞ tᵖ e^{−λt} dt", b: R`<p>Pour $\lambda>0$ et $p\in\mathbb N$ :</p>$$\int_0^{+\infty}t^pe^{-\lambda t}\,dt = \frac{p!}{\lambda^{p+1}}.$$<p>Plus généralement, $\int_0^{+\infty}t^{x-1}e^{-\lambda t}\,dt = \frac{\Gamma(x)}{\lambda^x}$.</p>` }
});
LEMME.exercises([
{ id: "ipar-43", ...P, level: 1, time: "15 min",
  title: "∫₀^∞ t/(eᵗ − 1) dt = Σ 1/n²",
  enonce: R`<p>Montrer que</p>$$\int_0^{+\infty}\frac t{e^t-1}\,dt = \sum_{n = 1}^{+\infty}\frac1{n^2}.$$`,
  decode: { donnees: [R`$\frac1{e^t-1} = \frac{e^{-t}}{1-e^{-t}}$.`], but: R`Développer en série géométrique de raison $e^{-t}$, puis intégrer terme à terme (cas positif).`, cles: {} },
  steps: [
    { t: "Développement en série", h: R`<p>Raison $q = e^{-t}\in\,]0,1[$.</p>`, b: R`<p>Pour $t>0$, avec $q = e^{-t}\in\,]0,1[$ :</p>$$\frac t{e^t-1} = te^{-t}\cdot\frac1{1-e^{-t}} = \sum_{n = 0}^{+\infty}te^{-(n+1)t} = \sum_{n = 1}^{+\infty}te^{-nt}.$$` },
    { t: "Intégration terme à terme", h: R`<p>Fonctions positives ; $\int_0^{+\infty}te^{-nt}dt = \frac1{n^2}$.</p>`, b: R`<p>Les fonctions $f_n(t) = te^{-nt}$ sont positives, continues et intégrables sur $]0,+\infty[$, et la somme est continue. Par parties :</p>$$\int_0^{+\infty}te^{-nt}\,dt = \Big[-\frac{te^{-nt}}n\Big]_0^{+\infty}+\frac1n\int_0^{+\infty}e^{-nt}\,dt = \frac1{n^2}.$$<p>Par intégration terme à terme positive, dans $[0,+\infty]$ :</p><div class="sbox">$$\int_0^{+\infty}\frac t{e^t-1}\,dt = \sum_{n = 1}^{+\infty}\frac1{n^2} = \frac{\pi^2}6.$$</div><p>La finitude de la somme prouve au passage l'intégrabilité.</p>`, rappels: ["ip-ittpos", "ip-tpe"] }
  ],
  piege: R`Le développement n'est valable que pour $t>0$ (il faut $|q|\lt1$) ; le point $t = 0$ ne compte pas.`,
  methode: R`$\frac1{e^t-1}$ : développer en $\sum e^{-nt}$, puis intégrer terme à terme.`
},
{ id: "ipar-44", ...P, level: 1, time: "15 min",
  title: "∫₀^∞ tᵖ/(eᵗ − 1) dt = p! Σ 1/n^{p+1}",
  enonce: R`<p>Soit $p\in\mathbb N^*$. Établir l'identité</p>$$\int_0^{+\infty}\frac{t^p}{e^t-1}\,dt = p!\sum_{n = 1}^{+\infty}\frac1{n^{p+1}}.$$`,
  decode: { donnees: [R`$\int_0^{+\infty}t^pe^{-nt}dt = \frac{p!}{n^{p+1}}$.`], but: R`Même méthode que pour $p = 1$.`, cles: {} },
  steps: [
    { t: "Développement en série", h: R`<p>Série géométrique de raison $e^{-t}$.</p>`, b: R`<p>Pour $t>0$ :</p>$$\frac{t^p}{e^t-1} = \sum_{n = 1}^{+\infty}t^pe^{-nt}.$$` },
    { t: "Calcul des intégrales", h: R`<p>$u = nt$, puis $\int_0^{+\infty}u^pe^{-u}du = p!$.</p>`, b: R`<p>Avec $u = nt$ :</p>$$\int_0^{+\infty}t^pe^{-nt}\,dt = \frac1{n^{p+1}}\int_0^{+\infty}u^pe^{-u}\,du = \frac{p!}{n^{p+1}},$$<p>où $\int_0^{+\infty}u^pe^{-u}du = p!$ s'obtient par $p$ intégrations par parties.</p>`, rappels: ["ip-tpe"] },
    { t: "Intégration terme à terme", h: R`<p>Fonctions positives.</p>`, b: R`<p>Les fonctions $t\mapsto t^pe^{-nt}$ sont positives, continues, et leur somme est continue sur $]0,+\infty[$. Par intégration terme à terme positive :</p><div class="sbox">$$\int_0^{+\infty}\frac{t^p}{e^t-1}\,dt = \sum_{n = 1}^{+\infty}\frac{p!}{n^{p+1}} = p!\,\zeta(p+1).$$</div><p>La série converge car $p+1\geqslant2$ : l'intégrale converge aussi.</p>`, rappels: ["ip-ittpos"] }
  ],
  piege: R`Pour $p = 0$, l'intégrale diverge en $0$ ($\frac1{e^t-1}\sim\frac1t$), et la série harmonique aussi : l'identité reste vraie dans $[0,+\infty]$.`,
  methode: R`Le cas positif dispense de toute domination : il suffit de calculer les intégrales.`
},
{ id: "ipar-45", ...P, level: 2, time: "15 min",
  title: "∫₀^∞ t e^{−at}/(1 − e^{−bt}) dt = Σ 1/(a + bn)²",
  enonce: R`<p>Soient $a,b>0$. Établir</p>$$\int_0^{+\infty}\frac{te^{-at}}{1-e^{-bt}}\,dt = \sum_{n = 0}^{+\infty}\frac1{(a+bn)^2}.$$`,
  decode: { donnees: [R`$\int_0^{+\infty}te^{-\lambda t}dt = \frac1{\lambda^2}$.`], but: R`Série géométrique de raison $e^{-bt}$, puis intégration terme à terme.`, cles: {} },
  steps: [
    { t: "Développement", h: R`<p>Raison $e^{-bt}$.</p>`, b: R`<p>Pour $t>0$ :</p>$$\frac{te^{-at}}{1-e^{-bt}} = \sum_{n = 0}^{+\infty}te^{-(a+nb)t}.$$` },
    { t: "Intégration terme à terme", h: R`<p>$\int_0^{+\infty}te^{-(a+nb)t}dt = \frac1{(a+bn)^2}$.</p>`, b: R`<p>Les $f_n(t) = te^{-(a+nb)t}$ sont continues, positives et intégrables, avec</p>$$\int_0^{+\infty}|f_n| = \frac1{(a+bn)^2} = O\Big(\frac1{n^2}\Big).$$<p>La série $\sum\int|f_n|$ converge et la somme est continue sur $]0,+\infty[$. Par intégration terme à terme :</p><div class="sbox">$$\int_0^{+\infty}\frac{te^{-at}}{1-e^{-bt}}\,dt = \sum_{n = 0}^{+\infty}\frac1{(a+bn)^2}.$$</div>`, rappels: ["ip-itt", "ip-tpe"] }
  ],
  piege: R`Le terme $n = 0$ est présent : la somme commence à $\frac1{a^2}$.`,
  methode: R`Dénominateur $1-e^{-bt}$ : série géométrique de raison $e^{-bt}$.`
},
{ id: "ipar-46", ...P, level: 2, time: "15 min",
  title: "∫₀¹ t^{x−1} e^{−t} dt comme série",
  enonce: R`<p>Établir que, pour tout $x>0$ :</p>$$\int_0^1t^{x-1}e^{-t}\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{n!\,(x+n)}.$$`,
  decode: { donnees: [R`Série exponentielle.`], but: R`Développer $e^{-t}$, puis intégrer terme à terme sur $]0,1]$.`, cles: {} },
  steps: [
    { t: "Développement", h: R`<p>$e^{-t} = \sum\frac{(-t)^n}{n!}$.</p>`, b: R`<p>L'intégrale existe car $t^{x-1}e^{-t}\leqslant t^{x-1}$ avec $x-1>-1$. Pour $t\in\,]0,1]$ :</p>$$t^{x-1}e^{-t} = \sum_{n = 0}^{+\infty}\frac{(-1)^nt^{n+x-1}}{n!} = \sum_{n = 0}^{+\infty}f_n(t).$$` },
    { t: "Intégration terme à terme", h: R`<p>$\int_0^1|f_n| = \frac1{n!(x+n)}$.</p>`, b: R`<p>Les $f_n$ sont continues et intégrables sur $]0,1]$, la somme est continue, et</p>$$\int_0^1|f_n(t)|\,dt = \frac1{n!}\int_0^1t^{n+x-1}\,dt = \frac1{n!\,(x+n)}.$$<p>La série $\sum\frac1{n!(x+n)}$ converge (majorée par $\sum\frac1{x\,n!}$). Par intégration terme à terme :</p><div class="sbox">$$\int_0^1t^{x-1}e^{-t}\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{n!\,(x+n)}.$$</div>`, rappels: ["ip-itt"] }
  ],
  piege: R`L'exposant $n+x-1$ est $>-1$ pour tout $n$ : chaque $f_n$ est intégrable en $0$, même si $x\lt1$.`,
  methode: R`Développer en série entière la partie régulière de l'intégrande, puis intégrer terme à terme.`
},
{ id: "ipar-47", ...P, level: 1, time: "15 min",
  title: "∫₀¹ ln t/(t − 1) dt = Σ 1/n²",
  enonce: R`<p>Montrer que</p>$$\int_0^1\frac{\ln t}{t-1}\,dt = \sum_{n = 1}^{+\infty}\frac1{n^2}.$$`,
  decode: { donnees: [R`$\int_0^1t^n\ln t\,dt = -\frac1{(n+1)^2}$.`], but: R`Série géométrique de raison $t$, puis intégration terme à terme positive.`, cles: {} },
  steps: [
    { t: "Développement", h: R`<p>$\frac{\ln t}{t-1} = \frac{-\ln t}{1-t}$.</p>`, b: R`<p>Pour $t\in\,]0,1[$ :</p>$$\frac{\ln t}{t-1} = \sum_{n = 0}^{+\infty}(-t^n\ln t).$$<p>Chaque terme $f_n(t) = -t^n\ln t$ est <b>positif</b> sur $]0,1[$.</p>` },
    { t: "Intégrales des termes", h: R`<p>Parties avec $\frac{t^{n+1}}{n+1}$.</p>`, b: R`<p>Par parties (le crochet $\big[\frac{t^{n+1}}{n+1}\ln t\big]_0^1$ est nul) :</p>$$\int_0^1-t^n\ln t\,dt = \frac1{n+1}\int_0^1t^n\,dt = \frac1{(n+1)^2}.$$`, rappels: ["ip-tlnk"] },
    { t: "Conclusion", h: R`<p>Intégration terme à terme positive.</p>`, b: R`<p>Les $f_n$ sont positives, continues, de somme continue sur $]0,1[$ :</p><div class="sbox">$$\int_0^1\frac{\ln t}{t-1}\,dt = \sum_{n = 0}^{+\infty}\frac1{(n+1)^2} = \sum_{n = 1}^{+\infty}\frac1{n^2} = \frac{\pi^2}6.$$</div><p>L'intégrale converge, ce qui se voit aussi directement : l'intégrande tend vers $1$ en $1$ et est un $O(|\ln t|)$ en $0$.</p>`, rappels: ["ip-ittpos"] }
  ],
  piege: R`L'intégrande n'est pas définie en $1$, mais s'y prolonge par continuité ($\ln t\sim t-1$).`,
  methode: R`$\frac1{1-t}$ sur $]0,1[$ : série géométrique, puis les intégrales $\int t^n\ln t$.`
},
{ id: "ipar-48", ...P, level: 2, time: "15 min",
  title: "∫₀¹ ln t/(1 − t²) dt à l'aide de ζ(2) (Mines)",
  enonce: R`<p>Justifier l'existence et calculer, en fonction de $\zeta(2)$ :</p>$$\int_0^1\frac{\ln t}{1-t^2}\,dt.$$`,
  decode: { donnees: [R`$\sum_{n\geqslant0}\frac1{(2n+1)^2} = \frac34\zeta(2)$.`], but: R`Série géométrique de raison $t^2$, intégration terme à terme.`, cles: {} },
  steps: [
    { t: "Développement", h: R`<p>Raison $t^2$.</p>`, b: R`<p>Pour $t\in\,]0,1[$ :</p>$$\frac{\ln t}{1-t^2} = \sum_{n = 0}^{+\infty}t^{2n}\ln t,\qquad\int_0^1t^{2n}\ln t\,dt = -\frac1{(2n+1)^2}.$$`, rappels: ["ip-tlnk"] },
    { t: "Intégration terme à terme", h: R`<p>Termes de signe constant.</p>`, b: R`<p>Les $-t^{2n}\ln t$ sont positifs : l'intégration terme à terme positive donne l'existence et</p>$$\int_0^1\frac{\ln t}{1-t^2}\,dt = -\sum_{n = 0}^{+\infty}\frac1{(2n+1)^2}.$$`, rappels: ["ip-ittpos"] },
    { t: "Somme des impairs", h: R`<p>Séparer pairs et impairs.</p>`, b: R`<p>En séparant les entiers pairs et impairs (séries à termes positifs) :</p>$$\zeta(2) = \sum_{p = 0}^{+\infty}\frac1{(2p+1)^2}+\sum_{p = 1}^{+\infty}\frac1{4p^2} = \sum_{p = 0}^{+\infty}\frac1{(2p+1)^2}+\frac14\zeta(2).$$<div class="sbox">$$\int_0^1\frac{\ln t}{1-t^2}\,dt = -\frac34\zeta(2) = -\frac{\pi^2}8.$$</div>` }
  ],
  piege: R`Le signe : $\ln t\lt0$ et $1-t^2>0$, donc l'intégrale est négative.`,
  methode: R`Somme sur les impairs : $\sum\frac1{(2p+1)^2} = \big(1-\frac14\big)\zeta(2)$.`
},
{ id: "ipar-49", ...P, level: 2, time: "25 min",
  title: "∫₀^∞ dx/sh(√x) = π²/2 (Mines)",
  enonce: R`<p>Justifier l'existence et donner la valeur de</p>$$\int_0^{+\infty}\frac{dx}{\operatorname{sh}(\sqrt x)}.$$`,
  decode: { donnees: [R`$\int_0^1\frac{\ln t}{t^2-1}dt = \frac{\pi^2}8$.`], but: R`Changement de variable $t = e^{-\sqrt x}$, puis intégration terme à terme.`, cles: {} },
  steps: [
    { t: "Existence", h: R`<p>En $0$ : $\sim\frac1{\sqrt x}$ ; en $+\infty$ : $x^2f(x)\to0$.</p>`, b: R`<p>$f(x) = \frac1{\operatorname{sh}\sqrt x} = \frac2{e^{\sqrt x}-e^{-\sqrt x}}$ est continue sur $]0,+\infty[$.</p><ul><li><b>En $0$</b> : $f(x)\sim\frac1{\sqrt x}$, intégrable.</li><li><b>En $+\infty$</b> : avec $X = \sqrt x$, $x^2f(x)\sim2X^4e^{-X}\to0$, donc $f(x) = o\big(\frac1{x^2}\big)$.</li></ul><p>L'intégrale converge.</p>` },
    { t: "Changement de variable", h: R`<p>$t = e^{-\sqrt x}$ : $x = (\ln t)^2$, $dx = \frac{2\ln t}t\,dt$.</p>`, b: R`<p>$x\mapsto e^{-\sqrt x}$ est une bijection $\mathcal C^1$ décroissante de $]0,+\infty[$ sur $]0,1[$. Avec $t = e^{-\sqrt x}$ : $\operatorname{sh}\sqrt x = \frac12\big(\frac1t-t\big) = \frac{1-t^2}{2t}$ et $dx = \frac{2\ln t}t\,dt$. Donc</p>$$\int_0^{+\infty}\frac{dx}{\operatorname{sh}\sqrt x} = \int_1^0\frac{2t}{1-t^2}\cdot\frac{2\ln t}t\,dt = 4\int_0^1\frac{\ln t}{t^2-1}\,dt.$$` },
    { t: "Intégration terme à terme", h: R`<p>Exercice précédent.</p>`, b: R`<p>Pour $t\in\,]0,1[$ : $\frac{\ln t}{t^2-1} = \sum_{n\geqslant0}(-t^{2n}\ln t)$, termes positifs d'intégrales $\frac1{(2n+1)^2}$. Donc</p>$$\int_0^1\frac{\ln t}{t^2-1}\,dt = \sum_{n = 0}^{+\infty}\frac1{(2n+1)^2} = \frac34\cdot\frac{\pi^2}6 = \frac{\pi^2}8.$$<div class="sbox">$$\int_0^{+\infty}\frac{dx}{\operatorname{sh}(\sqrt x)} = 4\cdot\frac{\pi^2}8 = \frac{\pi^2}2.$$</div>`, rappels: ["ip-ittpos", "ip-tlnk"] }
  ],
  piege: R`Le changement de variable décroissant inverse les bornes : $x = 0$ donne $t = 1$, $x = +\infty$ donne $t = 0$.`,
  methode: R`Faire apparaître une série géométrique : $t = e^{-\sqrt x}$ transforme $\operatorname{sh}\sqrt x$ en une fraction rationnelle en $t$.`
},
{ id: "ipar-50", ...P, level: 2, time: "20 min",
  title: "∫₀¹ ln(1 + t)/t dt = π²/12",
  enonce: R`<ol><li>Établir $\displaystyle\int_0^1\frac{\ln(1+t)}t\,dt = -\int_0^1\frac{\ln t}{1+t}\,dt$.</li><li>En déduire $\displaystyle\int_0^1\frac{\ln(1+t)}t\,dt = \sum_{n = 1}^{+\infty}\frac{(-1)^{n-1}}{n^2}$.</li><li>Calculer cette somme sachant $\sum_{n = 1}^{+\infty}\frac1{n^2} = \frac{\pi^2}6$.</li></ol>`,
  decode: { donnees: [R`$\int_0^1t^n\ln t\,dt = -\frac1{(n+1)^2}$.`], but: R`Intégration par parties, puis série géométrique alternée et intégration terme à terme.`, cles: {} },
  steps: [
    { t: "1) Intégration par parties", h: R`<p>$\ln t$ primitive de $\frac1t$.</p>`, b: R`<p>Par parties :</p>$$\int_0^1\frac{\ln(1+t)}t\,dt = \big[\ln(1+t)\ln t\big]_0^1-\int_0^1\frac{\ln t}{1+t}\,dt.$$<p>Le crochet est nul : en $1$, $\ln1 = 0$ ; en $0$, $\ln(1+t)\ln t\sim t\ln t\to0$. Les deux intégrales convergent.</p>` },
    { t: "2) Développement", h: R`<p>$\frac1{1+t} = \sum(-t)^n$.</p>`, b: R`<p>Pour $t\in\,]0,1[$ :</p>$$-\frac{\ln t}{1+t} = \sum_{n = 0}^{+\infty}f_n(t),\qquad f_n(t) = (-1)^{n+1}t^n\ln t.$$<p>On a $\int_0^1|f_n| = \frac1{(n+1)^2}$, terme d'une série convergente.</p>`, rappels: ["ip-tlnk"] },
    { t: "2) Intégration terme à terme", h: R`<p>Théorème général.</p>`, b: R`<p>Les $f_n$ sont continues, intégrables, de somme continue : par intégration terme à terme,</p><div class="sbox">$$\int_0^1\frac{\ln(1+t)}t\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{(n+1)^2} = \sum_{n = 1}^{+\infty}\frac{(-1)^{n-1}}{n^2}.$$</div>`, rappels: ["ip-itt"] },
    { t: "3) Calcul de la somme", h: R`<p>Séparer pairs et impairs.</p>`, b: R`<p>Toutes les séries sont absolument convergentes, donc :</p>$$\sum_{n = 1}^{+\infty}\frac{(-1)^{n-1}}{n^2} = \sum_{n = 1}^{+\infty}\frac1{n^2}-2\sum_{p = 1}^{+\infty}\frac1{(2p)^2} = \Big(1-\frac12\Big)\frac{\pi^2}6.$$<div class="sbox">$$\int_0^1\frac{\ln(1+t)}t\,dt = \frac{\pi^2}{12}.$$</div>` }
  ],
  piege: R`Les termes $f_n$ changent de signe avec $n$ : on vérifie bien la convergence de $\sum\int|f_n|$.`,
  methode: R`Une intégration par parties transforme $\ln(1+t)$ en $\frac1{1+t}$, qui se développe en série géométrique.`
},
{ id: "ipar-51", ...P, level: 2, time: "20 min",
  title: "La constante de Catalan",
  enonce: R`<ol><li>Établir $\displaystyle\int_0^1\frac{\arctan t}t\,dt = -\int_0^1\frac{\ln t}{1+t^2}\,dt$.</li><li>En déduire $\displaystyle\int_0^1\frac{\arctan t}t\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{(2n+1)^2}$.</li></ol><p>Cette valeur est la constante de Catalan, environ $0{,}916$.</p>`,
  decode: { donnees: [R`$\int_0^1t^{2n}\ln t\,dt = -\frac1{(2n+1)^2}$.`], but: R`Même schéma que pour $\int\frac{\ln(1+t)}t$.`, cles: {} },
  steps: [
    { t: "1) Intégration par parties", h: R`<p>$\ln t$ primitive de $\frac1t$.</p>`, b: R`$$\int_0^1\frac{\arctan t}t\,dt = \big[\ln t\arctan t\big]_0^1-\int_0^1\frac{\ln t}{1+t^2}\,dt = -\int_0^1\frac{\ln t}{1+t^2}\,dt,$$<p>car $\ln t\arctan t\sim t\ln t\to0$ en $0$, et $\ln1 = 0$.</p>` },
    { t: "2) Développement et intégration", h: R`<p>$\frac1{1+t^2} = \sum(-1)^nt^{2n}$.</p>`, b: R`<p>Pour $t\in\,]0,1[$ :</p>$$-\frac{\ln t}{1+t^2} = \sum_{n = 0}^{+\infty}(-1)^{n+1}t^{2n}\ln t,\qquad\int_0^1\big|t^{2n}\ln t\big|\,dt = \frac1{(2n+1)^2}.$$<p>La série des intégrales des valeurs absolues converge : par intégration terme à terme,</p><div class="sbox">$$\int_0^1\frac{\arctan t}t\,dt = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{(2n+1)^2}.$$</div><p>Variante : intégrer directement $\frac{\arctan t}t = \sum\frac{(-1)^nt^{2n}}{2n+1}$.</p>`, rappels: ["ip-itt", "ip-tlnk"] }
  ],
  piege: R`On ne connaît pas de forme close pour la constante de Catalan : la série est la réponse.`,
  methode: R`Intégrale de $\frac{\text{fonction}}t$ : intégration par parties pour faire apparaître $\ln t$, puis développement.`
},
{ id: "ipar-52", ...P, level: 2, time: "15 min",
  title: "∫₀¹ (ln x)²/(1 + x²) dx = 2 Σ (−1)ⁿ/(2n + 1)³ (CCINP)",
  enonce: R`<p>Prouver l'égalité</p>$$\int_0^1\frac{(\ln x)^2}{1+x^2}\,dx = 2\sum_{n = 0}^{+\infty}\frac{(-1)^n}{(2n+1)^3}.$$`,
  decode: { donnees: [R`$\int_0^1x^{2n}(\ln x)^2dx = \frac2{(2n+1)^3}$.`], but: R`Série géométrique alternée, intégration terme à terme.`, cles: {} },
  steps: [
    { t: "Développement", h: R`<p>$\frac1{1+x^2} = \sum(-1)^nx^{2n}$ sur $[0,1[$.</p>`, b: R`<p>Pour $x\in\,]0,1[$ :</p>$$\frac{(\ln x)^2}{1+x^2} = \sum_{n = 0}^{+\infty}u_n(x),\qquad u_n(x) = (-1)^nx^{2n}(\ln x)^2.$$` },
    { t: "Intégrales", h: R`<p>Deux intégrations par parties.</p>`, b: R`<p>Par deux intégrations par parties (crochets nuls) :</p>$$\int_0^1x^{2n}(\ln x)^2dx = -\frac2{2n+1}\int_0^1x^{2n}\ln x\,dx = \frac2{(2n+1)^3}.$$`, rappels: ["ip-tlnk"] },
    { t: "Conclusion", h: R`<p>$\sum\int|u_n|$ converge.</p>`, b: R`<p>Les $u_n$ sont continues, intégrables, de somme continue, et $\sum\frac2{(2n+1)^3}$ converge. Par intégration terme à terme :</p><div class="sbox">$$\int_0^1\frac{(\ln x)^2}{1+x^2}\,dx = 2\sum_{n = 0}^{+\infty}\frac{(-1)^n}{(2n+1)^3}\;\Big(= \frac{\pi^3}{16}\Big).$$</div>`, rappels: ["ip-itt"] }
  ],
  piege: R`$(\ln x)^2$ est intégrable en $0$ : c'est un $o\big(\frac1{\sqrt x}\big)$.`,
  methode: R`Puissance de $\ln$ sur $]0,1[$ : les intégrales $\int x^m(\ln x)^p$ sont explicites.`
},
{ id: "ipar-53", ...P, level: 2, time: "15 min",
  title: "∫₀¹ (ln x)ᵖ/(1 − x) dx = (−1)ᵖ p! ζ(p + 1)",
  enonce: R`<p>Soit $p\in\mathbb N$ avec $p\geqslant2$. Établir</p>$$\int_0^1\frac{(\ln x)^p}{1-x}\,dx = (-1)^pp!\sum_{n = 1}^{+\infty}\frac1{n^{p+1}}.$$`,
  decode: { donnees: [R`$\int_0^1x^n(\ln x)^pdx = \frac{(-1)^pp!}{(n+1)^{p+1}}$.`], but: R`Série géométrique, intégration terme à terme.`, cles: {} },
  steps: [
    { t: "Développement", h: R`<p>$\frac1{1-x} = \sum x^n$.</p>`, b: R`<p>Pour $x\in\,]0,1[$ :</p>$$\frac{(\ln x)^p}{1-x} = \sum_{n = 0}^{+\infty}f_n(x),\qquad f_n(x) = x^n(\ln x)^p.$$` },
    { t: "Intégrales", h: R`<p>$p$ intégrations par parties.</p>`, b: R`<p>Par $p$ intégrations par parties successives (tous les crochets sont nuls) :</p>$$\int_0^1|f_n| = (-1)^p\int_0^1x^n(\ln x)^pdx = \frac{p!}{(n+1)^{p+1}}.$$`, rappels: ["ip-tlnk"] },
    { t: "Conclusion", h: R`<p>Intégration terme à terme.</p>`, b: R`<p>La série $\sum\frac{p!}{(n+1)^{p+1}}$ converge, la somme est continue : par intégration terme à terme,</p><div class="sbox">$$\int_0^1\frac{(\ln x)^p}{1-x}\,dx = \sum_{n = 0}^{+\infty}\frac{(-1)^pp!}{(n+1)^{p+1}} = (-1)^pp!\,\zeta(p+1).$$</div><p>L'identité vaut aussi pour $p = 1$ (on retrouve $-\zeta(2)$).</p>`, rappels: ["ip-itt"] }
  ],
  piege: R`Les $f_n$ sont de signe constant $(-1)^p$ : on aurait aussi pu utiliser le cas positif.`,
  methode: R`$\frac1{1-x}$ : série géométrique ; puissances de $\ln$ : formule $\int_0^1x^n(\ln x)^p$.`
},
{ id: "ipar-54", ...P, level: 2, time: "25 min",
  title: "∫₀¹ xˣ dx (CCINP)",
  enonce: R`<p>Soient $p,k\in\mathbb N^*$ et $f_{p,k} : x\mapsto x^p(\ln x)^k$ sur $]0,1]$.</p><ol><li>Montrer que $f_{p,k}$ est intégrable sur $]0,1]$. On pose $K_{p,k} = \int_0^1x^p(\ln x)^k\,dx$.</li><li>Exprimer $K_{p,k}$ en fonction de $K_{p,k-1}$.</li><li>Pour $n\in\mathbb N$, déterminer $J_n = \int_0^1(x\ln x)^n\,dx$.</li><li>Établir $\displaystyle\int_0^1x^x\,dx = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{(n+1)^{n+1}}$.</li></ol>`,
  decode: { donnees: [R`$x^x = e^{x\ln x}$.`], but: R`Récurrence par parties, puis série exponentielle et intégration terme à terme.`, cles: {} },
  steps: [
    { t: "1) Intégrabilité", h: R`<p>$\sqrt x\,f_{p,k}(x)\to0$.</p>`, b: R`<p>$f_{p,k}$ est continue sur $]0,1]$ et $\sqrt xf_{p,k}(x) = x^{p+1/2}(\ln x)^k\to0$ en $0$. Donc $f_{p,k} = o\big(\frac1{\sqrt x}\big)$ en $0$ : intégrable.</p>` },
    { t: "2) Récurrence", h: R`<p>Parties avec $\frac{x^{p+1}}{p+1}$.</p>`, b: R`<p>Par parties (crochet nul) :</p>$$K_{p,k} = \Big[\frac{x^{p+1}}{p+1}(\ln x)^k\Big]_0^1-\frac k{p+1}\int_0^1x^p(\ln x)^{k-1}\,dx = -\frac k{p+1}K_{p,k-1}.$$` },
    { t: "3) Calcul de Jₙ", h: R`<p>$K_{p,0} = \frac1{p+1}$.</p>`, b: R`<p>En itérant :</p>$$K_{p,k} = \frac{(-1)^kk!}{(p+1)^k}K_{p,0} = \frac{(-1)^kk!}{(p+1)^{k+1}}.$$<div class="sbox">$$J_n = K_{n,n} = \frac{(-1)^nn!}{(n+1)^{n+1}}.$$</div>`, rappels: ["ip-tlnk"] },
    { t: "4) Intégration terme à terme", h: R`<p>$x^x = \sum\frac{(x\ln x)^n}{n!}$.</p>`, b: R`<p>Pour $x\in\,]0,1]$ :</p>$$x^x = e^{x\ln x} = \sum_{n = 0}^{+\infty}f_n(x),\qquad f_n(x) = \frac{(x\ln x)^n}{n!}.$$<p>Les $f_n$ sont continues, intégrables, de somme continue, et</p>$$\int_0^1|f_n| = \frac{|J_n|}{n!} = \frac1{(n+1)^{n+1}} = o\Big(\frac1{n^2}\Big).$$<div class="sbox">$$\int_0^1x^x\,dx = \sum_{n = 0}^{+\infty}\frac{J_n}{n!} = \sum_{n = 0}^{+\infty}\frac{(-1)^n}{(n+1)^{n+1}}.$$</div><p>C'est le « rêve du deuxième année » : $\int_0^1x^x = 1-\frac1{2^2}+\frac1{3^3}-\cdots$</p>`, rappels: ["ip-itt"] }
  ],
  piege: R`$x\ln x$ est négatif sur $]0,1[$ : les $f_n$ alternent en signe, d'où la vérification de $\sum\int|f_n|$.`,
  methode: R`Exponentielle d'une fonction : développer la série exponentielle et intégrer terme à terme.`
},
{ id: "ipar-55", ...P, level: 2, time: "15 min",
  title: "∫₀¹ x^{−x} dx = Σ 1/nⁿ",
  enonce: R`<p>Établir l'identité</p>$$\int_0^1\frac{dx}{x^x} = \sum_{n = 1}^{+\infty}\frac1{n^n}.$$`,
  decode: { donnees: [R`$\int_0^1(x\ln x)^n\,dx = \frac{(-1)^nn!}{(n+1)^{n+1}}$ (exercice précédent).`], but: R`Série exponentielle de $-x\ln x\geqslant0$, puis cas positif.`, cles: {} },
  steps: [
    { t: "Développement", h: R`<p>$x^{-x} = e^{-x\ln x}$.</p>`, b: R`<p>Pour $x\in\,]0,1]$ :</p>$$\frac1{x^x} = e^{-x\ln x} = \sum_{n = 0}^{+\infty}\frac{(-x\ln x)^n}{n!}.$$<p>Sur $]0,1]$, $-x\ln x\geqslant0$ : les termes sont <b>positifs</b>.</p>` },
    { t: "Intégrales des termes", h: R`<p>Formule $K_{n,n}$.</p>`, b: R`$$\int_0^1\frac{(-x\ln x)^n}{n!}\,dx = \frac{(-1)^n}{n!}\cdot\frac{(-1)^nn!}{(n+1)^{n+1}} = \frac1{(n+1)^{n+1}}.$$`, rappels: ["ip-tlnk"] },
    { t: "Conclusion", h: R`<p>Intégration terme à terme positive.</p>`, b: R`<p>Fonctions positives, continues, de somme continue :</p><div class="sbox">$$\int_0^1\frac{dx}{x^x} = \sum_{n = 0}^{+\infty}\frac1{(n+1)^{n+1}} = \sum_{n = 1}^{+\infty}\frac1{n^n}.$$</div>`, rappels: ["ip-ittpos"] }
  ],
  piege: R`L'intégrande $x^{-x}$ tend vers $1$ en $0$ : l'intégrale est en fait celle d'une fonction continue sur $[0,1]$.`,
  methode: R`Signe constant des termes : le cas positif suffit.`
},
{ id: "ipar-56", ...P, level: 2, time: "25 min",
  title: "∫₀^∞ sin(ax)/(eˣ − 1) dx (ENSTIM)",
  enonce: R`<p>Soit $a>0$ et $f(x) = \dfrac{\sin(ax)}{e^x-1}$ sur $]0,+\infty[$.</p><ol><li>Étudier l'intégrabilité de $f$.</li><li>Montrer que $\displaystyle\int_0^{+\infty}f(x)\,dx = \sum_{n = 1}^{+\infty}\frac a{a^2+n^2}$.</li></ol>`,
  decode: { donnees: [R`$|\sin u|\leqslant|u|$.`], but: R`Série géométrique ; majorer $\int|f_n|$ sans la calculer.`, cles: {} },
  steps: [
    { t: "1) Intégrabilité", h: R`<p>En $0$ : $\to a$ ; en $+\infty$ : $o(\frac1{x^2})$.</p>`, b: R`<p>$f$ est continue sur $]0,+\infty[$, $f(x)\sim\frac{ax}x = a$ en $0$ et $|f(x)|\leqslant\frac1{e^x-1} = o\big(\frac1{x^2}\big)$ en $+\infty$ : $f$ est intégrable.</p>` },
    { t: "2) Développement", h: R`<p>$\frac1{e^x-1} = \sum_{n\geqslant1}e^{-nx}$.</p>`, b: R`<p>Pour $x>0$ :</p>$$f(x) = \sum_{n = 1}^{+\infty}f_n(x),\qquad f_n(x) = \sin(ax)e^{-nx}.$$` },
    { t: "2) Majoration de ∫|fₙ|", h: R`<p>$|\sin(ax)|\leqslant ax$.</p>`, b: R`<p>Le calcul exact de $\int|f_n|$ est pénible ; on majore par $|\sin u|\leqslant|u|$ :</p>$$\int_0^{+\infty}|f_n(x)|\,dx\leqslant a\int_0^{+\infty}xe^{-nx}\,dx = \frac a{n^2}.$$<p>La série $\sum\int|f_n|$ converge par comparaison.</p>`, rappels: ["ip-tpe"] },
    { t: "2) Calcul et conclusion", h: R`<p>$\sin(ax) = \operatorname{Im}e^{iax}$.</p>`, b: R`<p>Par intégration terme à terme, il reste à calculer, avec $n-ia$ de partie réelle $n>0$ :</p>$$\begin{aligned}\int_0^{+\infty}\sin(ax)e^{-nx}\,dx &= \operatorname{Im}\int_0^{+\infty}e^{-(n-ia)x}\,dx\\&= \operatorname{Im}\frac1{n-ia} = \operatorname{Im}\frac{n+ia}{n^2+a^2} = \frac a{n^2+a^2}.\end{aligned}$$<div class="sbox">$$\int_0^{+\infty}\frac{\sin(ax)}{e^x-1}\,dx = \sum_{n = 1}^{+\infty}\frac a{a^2+n^2}.$$</div><p><b>Coquille du livre</b> : une ligne y écrit $\sin(x)$ au lieu de $\sin(ax)$.</p>`, rappels: ["ip-itt"] }
  ],
  piege: R`On n'a pas besoin de calculer $\int|f_n|$ : une majoration par le terme d'une série convergente suffit.`,
  methode: R`Intégrales de $\sin$ ou $\cos$ contre une exponentielle : passer par les complexes.`
},
{ id: "ipar-57", ...P, level: 3, time: "20 min",
  title: "∫₀^∞ (e^{ixt} − 1)/(eᵗ − 1) dt",
  enonce: R`<p>Établir, pour $x\in\mathbb R$ :</p>$$\int_0^{+\infty}\frac{e^{ixt}-1}{e^t-1}\,dt = \sum_{n = 1}^{+\infty}\frac{ix}{n(n-ix)}.$$`,
  decode: { donnees: [R`$|e^{iu}-1|\leqslant|u|$.`], but: R`Série géométrique, majoration par l'inégalité des accroissements finis.`, cles: {} },
  steps: [
    { t: "Développement", h: R`<p>Raison $e^{-t}$.</p>`, b: R`<p>Pour $t>0$ :</p>$$\frac{e^{ixt}-1}{e^t-1} = \sum_{n = 1}^{+\infty}f_n(t),\qquad f_n(t) = (e^{ixt}-1)e^{-nt}.$$` },
    { t: "Majoration", h: R`<p>$u\mapsto e^{iu}$ est $1$-lipschitzienne.</p>`, b: R`<p>$u\mapsto e^{iu}$ a une dérivée de module $1$ : elle est $1$-lipschitzienne, donc $|e^{ixt}-1|\leqslant|x|t$. Ainsi</p>$$\int_0^{+\infty}|f_n(t)|\,dt\leqslant|x|\int_0^{+\infty}te^{-nt}\,dt = \frac{|x|}{n^2}.$$<p>La série $\sum\int|f_n|$ converge.</p>`, rappels: ["ip-tpe"] },
    { t: "Calcul et conclusion", h: R`<p>$\int_0^{+\infty}e^{(ix-n)t}dt = \frac1{n-ix}$.</p>`, b: R`$$\int_0^{+\infty}(e^{ixt}-1)e^{-nt}\,dt = \frac1{n-ix}-\frac1n = \frac{ix}{n(n-ix)}.$$<p>Par intégration terme à terme (avec existence de l'intégrale) :</p><div class="sbox">$$\int_0^{+\infty}\frac{e^{ixt}-1}{e^t-1}\,dt = \sum_{n = 1}^{+\infty}\frac{ix}{n(n-ix)}.$$</div>`, rappels: ["ip-itt"] }
  ],
  piege: R`L'intégrande est intégrable en $0$ seulement grâce au $-1$ : $\frac{e^{ixt}-1}{e^t-1}\to ix$.`,
  methode: R`Majorer $|e^{iu}-1|\leqslant|u|$ pour obtenir des $\int|f_n|$ en $\frac1{n^2}$.`
},
{ id: "ipar-58", ...P, level: 2, time: "15 min",
  title: "∫₂^∞ (ζ(x) − 1) dx (Mines)",
  enonce: R`<p>Pour $x>1$, on pose $\zeta(x) = \sum_{n = 1}^{+\infty}\frac1{n^x}$. Montrer que</p>$$\int_2^{+\infty}\big(\zeta(x)-1\big)\,dx = \sum_{n = 2}^{+\infty}\frac1{n^2\ln n}.$$`,
  decode: { donnees: [R`$\zeta$ est continue sur $]1,+\infty[$.`], but: R`Intégration terme à terme positive.`, cles: {} },
  steps: [
    { t: "Les termes", h: R`<p>$\int_2^{+\infty}n^{-x}dx = \int_2^{+\infty}e^{-x\ln n}dx$.</p>`, b: R`<p>Pour $x\geqslant2$ : $\zeta(x)-1 = \sum_{n\geqslant2}n^{-x}$, somme de fonctions positives et continues, de somme continue. Pour $n\geqslant2$ :</p>$$\int_2^{+\infty}\frac{dx}{n^x} = \Big[-\frac{n^{-x}}{\ln n}\Big]_2^{+\infty} = \frac1{n^2\ln n}.$$` },
    { t: "Conclusion", h: R`<p>Cas positif.</p>`, b: R`<p>Par intégration terme à terme positive, dans $[0,+\infty]$ :</p><div class="sbox">$$\int_2^{+\infty}\big(\zeta(x)-1\big)\,dx = \sum_{n = 2}^{+\infty}\frac1{n^2\ln n}.$$</div><p>La série converge (termes $\leqslant\frac1{n^2\ln2}$) : l'intégrale converge.</p>`, rappels: ["ip-ittpos"] }
  ],
  piege: R`Retrancher $1$ est indispensable : $\zeta(x)\to1$ en $+\infty$, donc $\int_2^{+\infty}\zeta$ diverge.`,
  methode: R`Fonction définie par une série de termes positifs : intégrer terme à terme dans $[0,+\infty]$.`
},
{ id: "ipar-59", ...P, level: 2, time: "25 min",
  title: "∫₀^∞ 2 sh x/(e^{nx} − 1) dx (CCINP)",
  enonce: R`<p>Pour $n\in\mathbb N^*$, soit $f_n(x) = \dfrac{2\operatorname{sh}x}{e^{nx}-1}$ si $x>0$ et $f_n(0) = \alpha$.</p><ol><li>Pour quelle valeur de $\alpha$ la fonction $f_n$ est-elle continue ? On prend désormais cette valeur.</li><li>Montrer que $f_n$ est bornée.</li><li>Montrer que $\int_0^{+\infty}f_n$ existe pour $n\geqslant2$.</li><li>Exprimer $\int_0^{+\infty}f_n(x)\,dx$ comme la somme d'une série.</li></ol>`,
  decode: { donnees: [R`$\frac1{e^{nx}-1} = \sum_{k\geqslant1}e^{-nkx}$.`], but: R`Équivalents, puis série géométrique et intégration terme à terme.`, cles: {} },
  steps: [
    { t: "1) Continuité en 0", h: R`<p>$f_n(x)\sim\frac{2x}{nx}$.</p>`, b: R`<p>En $0^+$ : $f_n(x)\sim\frac{2x}{nx} = \frac2n$.</p><div class="sbox"><p>$f_n$ est continue si, et seulement si, $\alpha = \dfrac2n$.</p></div>` },
    { t: "2) et 3) Bornée, intégrable", h: R`<p>Comportement en $+\infty$.</p>`, b: R`<p>$f_n$ est continue sur $[0,+\infty[$ et, en $+\infty$, $f_n(x)\sim\frac{e^x}{e^{nx}} = e^{-(n-1)x}$.</p><ul><li>Pour tout $n\geqslant1$, $f_n$ a une limite finie en $+\infty$ (égale à $1$ si $n = 1$, à $0$ sinon) : elle est bornée.</li><li>Pour $n\geqslant2$, $x^2f_n(x)\sim x^2e^{-(n-1)x}\to0$ : $f_n$ est intégrable.</li></ul>` },
    { t: "4) Développement", h: R`<p>$2\operatorname{sh}x = e^x-e^{-x}$.</p>`, b: R`<p>Pour $x>0$ :</p>$$f_n(x) = (e^x-e^{-x})\sum_{k = 1}^{+\infty}e^{-nkx} = \sum_{k = 1}^{+\infty}\big(e^{-(nk-1)x}-e^{-(nk+1)x}\big).$$<p>Les termes sont positifs (car $nk-1\lt nk+1$) et, pour $n\geqslant2$ :</p>$$\int_0^{+\infty}\big(e^{-(nk-1)x}-e^{-(nk+1)x}\big)\,dx = \frac1{nk-1}-\frac1{nk+1} = \frac2{n^2k^2-1}.$$` },
    { t: "4) Conclusion", h: R`<p>Cas positif.</p>`, b: R`<p>Par intégration terme à terme positive :</p><div class="sbox">$$\int_0^{+\infty}\frac{2\operatorname{sh}x}{e^{nx}-1}\,dx = \sum_{k = 1}^{+\infty}\Big(\frac1{nk-1}-\frac1{nk+1}\Big).$$</div><p>Pour $n = 2$, la somme télescope : $\sum\big(\frac1{2k-1}-\frac1{2k+1}\big) = 1$.</p>`, rappels: ["ip-ittpos"] }
  ],
  piege: R`Pour $n = 1$, $f_1\to1$ en $+\infty$ : l'intégrale diverge, et le premier terme $\frac1{nk-1}$ n'a pas de sens pour $k = 1$.`,
  methode: R`$\operatorname{sh}x$ au numérateur : l'écrire en exponentielles pour obtenir une série d'exponentielles.`
},
{ id: "ipar-60", ...P, level: 2, time: "25 min",
  title: "Σ n!/nⁿ comme intégrale (Centrale)",
  enonce: R`<ol><li>Démontrer la convergence de la série de terme général $a_n = \dfrac{n!}{n^n}$.</li><li>Comparer $a_n$ et $n\displaystyle\int_0^{+\infty}t^ne^{-nt}\,dt$.</li><li>En déduire $\displaystyle\sum_{n = 1}^{+\infty}a_n = \int_0^{+\infty}\frac{te^{-t}}{(1-te^{-t})^2}\,dt$.</li></ol>`,
  decode: { donnees: [R`$\sum_{n\geqslant1}nq^n = \frac q{(1-q)^2}$ pour $|q|\lt1$.`], but: R`D'Alembert ; formule $\int t^ne^{-\lambda t}$ ; intégration terme à terme positive.`, cles: {} },
  steps: [
    { t: "1) D'Alembert", h: R`<p>$\frac{a_{n+1}}{a_n} = \big(\frac n{n+1}\big)^n$.</p>`, b: R`$$\frac{a_{n+1}}{a_n} = \frac{(n+1)!\,n^n}{(n+1)^{n+1}\,n!} = \Big(1+\frac1n\Big)^{-n}\xrightarrow[n\to+\infty]{}\frac1e\lt1.$$<p>Par la règle de d'Alembert, $\sum a_n$ converge.</p>` },
    { t: "2) Comparaison", h: R`<p>$\int_0^{+\infty}t^ne^{-nt}dt = \frac{n!}{n^{n+1}}$.</p>`, b: R`<p>Par la formule $\int_0^{+\infty}t^ne^{-\lambda t}dt = \frac{n!}{\lambda^{n+1}}$ avec $\lambda = n$ :</p><div class="sbox">$$a_n = n\int_0^{+\infty}t^ne^{-nt}\,dt.$$</div>`, rappels: ["ip-tpe"] },
    { t: "3) Intégration terme à terme", h: R`<p>$q = te^{-t}\in\,[0,\frac1e]$.</p>`, b: R`<p>Les fonctions $t\mapsto nt^ne^{-nt} = n(te^{-t})^n$ sont positives et continues. Pour $t>0$, $q = te^{-t}\in\,]0,\frac1e]$, donc</p>$$\sum_{n = 1}^{+\infty}n(te^{-t})^n = \frac{te^{-t}}{(1-te^{-t})^2},$$<p>fonction continue. Par intégration terme à terme positive :</p><div class="sbox">$$\sum_{n = 1}^{+\infty}\frac{n!}{n^n} = \int_0^{+\infty}\frac{te^{-t}}{(1-te^{-t})^2}\,dt.$$</div>`, rappels: ["ip-ittpos"] }
  ],
  piege: R`La formule $\sum nq^n = \frac q{(1-q)^2}$ s'obtient en dérivant la série géométrique ; elle demande $|q|\lt1$, assuré par $te^{-t}\leqslant\frac1e$.`,
  methode: R`Écrire le terme général comme une intégrale, puis sommer sous l'intégrale.`
},
{ id: "ipar-61", ...P, level: 2, time: "25 min",
  title: "Série des ∫₀^{π/2} sin^α t cosⁿ t dt (Centrale)",
  enonce: R`<p>Soient $\alpha>0$ et $n\in\mathbb N$. On pose $u_n(\alpha) = \displaystyle\int_0^{\pi/2}\sin^\alpha(t)\cos^n(t)\,dt$.</p><ol><li>Donner la nature de la série $\sum u_n(1)$.</li><li>Plus généralement, donner la nature de $\sum u_n(\alpha)$ pour $\alpha>0$.</li><li>Calculer $\sum_{n = 1}^{+\infty}u_n(\alpha)$ pour $\alpha = 2$ et $\alpha = 3$.</li></ol>`,
  decode: { donnees: [R`$1-\cos t\sim\frac{t^2}2$ en $0$.`], but: R`Calcul direct ; comparaison ; somme géométrique sous l'intégrale.`, cles: {} },
  steps: [
    { t: "1) Cas α = 1", h: R`<p>Primitive de $\sin t\cos^nt$.</p>`, b: R`$$u_n(1) = \Big[-\frac{\cos^{n+1}t}{n+1}\Big]_0^{\pi/2} = \frac1{n+1}.$$<p>La série $\sum u_n(1)$ diverge (série harmonique).</p>` },
    { t: "2) Cas α ≤ 1", h: R`<p>$\sin^\alpha\geqslant\sin$ sur $[0,\frac\pi2]$.</p>`, b: R`<p>Pour $\alpha\leqslant1$ et $t\in[0,\frac\pi2]$, $0\leqslant\sin t\leqslant1$ donne $\sin^\alpha t\geqslant\sin t$, donc $u_n(\alpha)\geqslant u_n(1)$ : la série diverge.</p>` },
    { t: "2) Cas α > 1", h: R`<p>Sommes partielles majorées.</p>`, b: R`<p>La série est à termes positifs et</p>$$\sum_{k = 0}^nu_k(\alpha) = \int_0^{\pi/2}\sin^\alpha t\,\frac{1-\cos^{n+1}t}{1-\cos t}\,dt\leqslant\int_0^{\pi/2}\frac{\sin^\alpha t}{1-\cos t}\,dt.$$<p>Cette intégrale converge car, en $0$ :</p>$$\frac{\sin^\alpha t}{1-\cos t}\sim\frac{t^\alpha}{t^2/2} = \frac2{t^{2-\alpha}},\qquad2-\alpha\lt1.$$<div class="sbox"><p>$\sum u_n(\alpha)$ converge si, et seulement si, $\alpha>1$.</p></div>` },
    { t: "3) Intégration terme à terme", h: R`<p>Termes positifs.</p>`, b: R`<p>Pour $\alpha>1$, les fonctions $\sin^\alpha t\cos^nt$ sont positives : par intégration terme à terme positive,</p>$$\sum_{n = 0}^{+\infty}u_n(\alpha) = \int_0^{\pi/2}\frac{\sin^\alpha t}{1-\cos t}\,dt.$$<ul><li><b>$\alpha = 2$</b> : $\frac{\sin^2t}{1-\cos t} = 1+\cos t$, d'intégrale $\frac\pi2+1$.</li><li><b>$\alpha = 3$</b> : $\frac{\sin^3t}{1-\cos t} = \sin t(1+\cos t)$, d'intégrale $1+\frac12 = \frac32$.</li></ul>`, rappels: ["ip-ittpos"] },
    { t: "3) Somme à partir de n = 1", h: R`<p>Retrancher $u_0(\alpha)$.</p>`, b: R`<p>L'énoncé demande la somme à partir de $n = 1$ : on retire $u_0(2) = \int_0^{\pi/2}\sin^2 = \frac\pi4$ et $u_0(3) = \int_0^{\pi/2}\sin^3 = \frac23$.</p><div class="sbox">$$\sum_{n = 1}^{+\infty}u_n(2) = 1+\frac\pi4,\qquad\sum_{n = 1}^{+\infty}u_n(3) = \frac32-\frac23 = \frac56.$$</div><p><b>Remarque</b> : le livre donne $\frac\pi2+1$ et $\frac32$, qui sont les sommes à partir de $n = 0$.</p>` }
  ],
  piege: R`Bien lire l'indice de départ : $\sum_{n\geqslant0}$ et $\sum_{n\geqslant1}$ diffèrent de $u_0(\alpha)$.`,
  methode: R`Série de puissances de $\cos t$ : sommer la série géométrique sous l'intégrale.`
},
{ id: "ipar-62", ...P, level: 3, time: "35 min",
  title: "Série Σ Iₙ/n avec Iₙ = ∫₀^∞ dt/(1 + t³)ⁿ (ENSTIM)",
  enonce: R`<p>Pour $n\geqslant1$, on pose $I_n = \displaystyle\int_0^{+\infty}\frac{dt}{(1+t^3)^n}$.</p><ol><li>Déterminer la limite de $(I_n)$.</li><li>Établir que, pour tout $n\geqslant1$, $I_{n+1} = \dfrac{3n-1}{3n}I_n$.</li><li>Déterminer un réel $\alpha$ tel que la suite $u_n = \ln(n^\alpha I_n)$ converge.</li><li>En déduire la convergence de $\sum_{n\geqslant1}\frac1nI_n$ et exprimer sa somme à l'aide d'une intégrale.</li></ol>`,
  decode: { donnees: [R`$-\ln(1-x) = \sum_{n\geqslant1}\frac{x^n}n$ sur $]-1,1[$.`], but: R`Convergence dominée ; parties ; lien suite-série ; cas positif.`, cles: {} },
  steps: [
    { t: "1) Limite", h: R`<p>Domination par $\frac1{1+t^3}$.</p>`, b: R`<p>$\frac1{(1+t^3)^n}\to0$ pour $t>0$, et $0\leqslant\frac1{(1+t^3)^n}\leqslant\frac1{1+t^3}$, intégrable. Par convergence dominée : $I_n\to0$.</p>`, rappels: ["ip-cvd"] },
    { t: "2) Relation de récurrence", h: R`<p>Parties avec $u(t) = t$, $v(t) = (1+t^3)^{-n}$.</p>`, b: R`<p>Par parties (crochet $\frac t{(1+t^3)^n}$ nul en $0$ et en $+\infty$) :</p>$$\begin{aligned}I_n &= \Big[\frac t{(1+t^3)^n}\Big]_0^{+\infty}+3n\int_0^{+\infty}\frac{t^3}{(1+t^3)^{n+1}}\,dt\\&= 3n\int_0^{+\infty}\frac{(1+t^3)-1}{(1+t^3)^{n+1}}\,dt.\end{aligned}$$<p>Donc $I_n = 3n(I_n-I_{n+1})$ :</p><div class="sbox">$$I_{n+1} = \frac{3n-1}{3n}I_n.$$</div>` },
    { t: "3) Choix de α", h: R`<p>$u_{n+1}-u_n = \frac{\alpha-1/3}n+O(\frac1{n^2})$.</p>`, b: R`$$u_{n+1}-u_n = \alpha\ln\Big(1+\frac1n\Big)+\ln\Big(1-\frac1{3n}\Big) = \frac{\alpha-\frac13}n+O\Big(\frac1{n^2}\Big).$$<ul><li><b>Si $\alpha\neq\frac13$</b> : $u_{n+1}-u_n\sim\frac{\alpha-1/3}n$, la série diverge, et $(u_n)$ aussi.</li><li><b>Si $\alpha = \frac13$</b> : $u_{n+1}-u_n = O\big(\frac1{n^2}\big)$, la série converge absolument.</li></ul><div class="sbox"><p>$(u_n)$ converge si, et seulement si, $\alpha = \dfrac13$.</p></div>`, rappels: ["ip-telesc"] },
    { t: "4) Convergence de la série", h: R`<p>$I_n\sim\frac{e^\ell}{n^{1/3}}$.</p>`, b: R`<p>Si $u_n\to\ell$, alors $I_n\sim\frac{e^\ell}{\sqrt[3]n}$, donc $\frac1nI_n = O\big(\frac1{n^{4/3}}\big)$ : la série $\sum\frac1nI_n$ converge.</p>` },
    { t: "4) Somme", h: R`<p>Cas positif, série de $-\ln(1-x)$.</p>`, b: R`<p>Les fonctions $\frac1n(1+t^3)^{-n}$ sont positives : par intégration terme à terme positive, avec $x = \frac1{1+t^3}\in\,]0,1[$ pour $t>0$ :</p><div class="sbox">$$\sum_{n = 1}^{+\infty}\frac{I_n}n = \int_0^{+\infty}\sum_{n = 1}^{+\infty}\frac1n\Big(\frac1{1+t^3}\Big)^ndt = -\int_0^{+\infty}\ln\Big(1-\frac1{1+t^3}\Big)dt.$$</div>`, rappels: ["ip-ittpos"] },
    { t: "4) Pour aller plus loin : la valeur", h: R`<p>Parties : $\int_0^{+\infty}\ln(1+t^{-3})\,dt$.</p>`, b: R`<p>$-\ln\big(1-\frac1{1+t^3}\big) = \ln(1+t^{-3})$. Par parties (crochet $t\ln(1+t^{-3})$ nul en $0$ et en $+\infty$) :</p>$$\int_0^{+\infty}\ln(1+t^{-3})\,dt = \int_0^{+\infty}t\cdot\frac3{t(1+t^3)}\,dt = 3\cdot\frac{2\pi}{3\sqrt3} = \frac{2\pi}{\sqrt3}.$$` }
  ],
  piege: R`L'équivalent $I_n\sim\frac C{n^{1/3}}$ n'est pas sommable ($\sum I_n$ diverge) ; c'est le facteur $\frac1n$ qui rend la série convergente.`,
  methode: R`Équivalent issu d'une récurrence $\frac{I_{n+1}}{I_n} = 1-\frac\beta n$ : la vitesse est $n^{-\beta}$.`
},
{ id: "ipar-63", ...P, level: 3, time: "30 min",
  title: "Fonction définie par Σ λⁿ/(s(s + 1)…(s + n)) (Mines)",
  enonce: R`<ol><li>Soit $(s,\lambda)\in\mathbb R_+^*\times\mathbb C$. Quelle est la nature de la série $\sum_{n\geqslant0}\dfrac{\lambda^n}{s(s+1)\cdots(s+n)}$ ? À $\lambda$ fixé, on note $\Delta_\lambda$ l'ensemble des $s>0$ pour lesquels elle converge et $F_\lambda(s)$ sa somme.</li><li>Calculer $\lim F_\lambda(s)$ quand $s\to\sup\Delta_\lambda$.</li><li>Donner un équivalent de $F_\lambda(s)$ quand $s\to\inf\Delta_\lambda$.</li><li>Pour $n\geqslant1$, calculer $\int_0^1(1-y)^{s-1}y^n\,dy$.</li><li>En déduire une expression intégrale de $F_\lambda(s)$.</li></ol>`,
  decode: { donnees: [R`$(s+1)\cdots(s+n)\geqslant n!$ pour $s\geqslant0$.`], but: R`D'Alembert ; convergence normale ; parties itérées ; intégration terme à terme.`, cles: {} },
  steps: [
    { t: "1) Nature", h: R`<p>Rapport des termes $\frac{|\lambda|}{s+n+1}\to0$.</p>`, b: R`<p>Pour $\lambda\neq0$, le rapport des modules de deux termes consécutifs vaut $\frac{|\lambda|}{s+n+1}\to0$ : la série converge (d'Alembert). Pour $\lambda = 0$, c'est évident.</p><div class="sbox">$$\Delta_\lambda = \,]0,+\infty[.$$</div>` },
    { t: "2) Limite en +∞", h: R`<p>$|sF_\lambda(s)|\leqslant e^{|\lambda|}$.</p>`, b: R`$$sF_\lambda(s) = 1+\sum_{n = 1}^{+\infty}\frac{\lambda^n}{(s+1)\cdots(s+n)},\qquad|sF_\lambda(s)|\leqslant\sum_{n = 0}^{+\infty}\frac{|\lambda|^n}{n!} = e^{|\lambda|}.$$<div class="sbox">$$F_\lambda(s)\xrightarrow[s\to+\infty]{}0.$$</div>` },
    { t: "3) Équivalent en 0", h: R`<p>Convergence normale sur $\mathbb R_+$.</p>`, b: R`<p>Les fonctions $s\mapsto\frac{\lambda^n}{(s+1)\cdots(s+n)}$ sont continues sur $\mathbb R_+$ et majorées en module par $\frac{|\lambda|^n}{n!}$ : la série converge normalement, sa somme est continue en $0$ :</p>$$sF_\lambda(s)\xrightarrow[s\to0^+]{}\sum_{n = 0}^{+\infty}\frac{\lambda^n}{n!} = e^\lambda\neq0.$$<div class="sbox">$$F_\lambda(s)\underset{s\to0^+}{\sim}\frac{e^\lambda}s.$$</div>` },
    { t: "4) L'intégrale", h: R`<p>Parties : dériver $y^n$, intégrer $(1-y)^{s-1}$.</p>`, b: R`<p>Soit $B_n = \int_0^1(1-y)^{s-1}y^n\,dy$. Par parties, avec la primitive $-\frac{(1-y)^s}s$ (crochet nul) :</p>$$B_n = \frac ns\int_0^1(1-y)^sy^{n-1}\,dy.$$<p>En itérant ($n$ fois, l'exposant de $1-y$ augmentant de $1$ à chaque fois) :</p><div class="sbox">$$\int_0^1(1-y)^{s-1}y^n\,dy = \frac{n!}{s(s+1)\cdots(s+n)}.$$</div><p>La formule vaut aussi pour $n = 0$ ($\int_0^1(1-y)^{s-1}dy = \frac1s$).</p>` },
    { t: "5) Expression intégrale", h: R`<p>Intégration terme à terme de $\sum\frac{(\lambda y)^n}{n!}(1-y)^{s-1}$.</p>`, b: R`<p>Par 4) :</p>$$F_\lambda(s) = \sum_{n = 0}^{+\infty}\frac{\lambda^n}{n!}\int_0^1(1-y)^{s-1}y^n\,dy.$$<p>La série des intégrales des modules vaut $\sum\frac{|\lambda|^n}{s(s+1)\cdots(s+n)}\lt+\infty$ ; par intégration terme à terme :</p><div class="sbox">$$F_\lambda(s) = \int_0^1e^{\lambda y}(1-y)^{s-1}\,dy.$$</div>`, rappels: ["ip-itt"] }
  ],
  piege: R`L'énoncé laisse croire que $\Delta_\lambda$ pourrait être compliqué : il vaut $]0,+\infty[$ pour tout $\lambda$, et les « bornes » sont $0$ et $+\infty$.`,
  methode: R`Reconnaître une intégrale de type Bêta dans $\frac{n!}{s(s+1)\cdots(s+n)}$, puis intégrer terme à terme.`
},
{ id: "ipar-64", ...P, level: 3, time: "30 min",
  title: "Somme des restes de Σ (−1)^{k−1}/k²",
  enonce: R`<ol><li>Pour $k\in\mathbb N^*$, calculer $I_k = \displaystyle\int_0^1t^{k-1}\ln t\,dt$.</li><li>Pour $n\in\mathbb N$, on pose $R_n = \displaystyle\sum_{k = n+1}^{+\infty}\frac{(-1)^{k-1}}{k^2}$. Exprimer $R_n$ à l'aide d'une intégrale.</li><li>Calculer $\displaystyle\sum_{n = 0}^{+\infty}R_n$.</li></ol>`,
  decode: { donnees: [R`$\sum_{k\geqslant n+1}(-t)^{k-1} = \frac{(-t)^n}{1+t}$.`], but: R`Écrire chaque terme comme une intégrale, intégrer terme à terme deux fois.`, cles: {} },
  steps: [
    { t: "1) Calcul de Iₖ", h: R`<p>Parties.</p>`, b: R`<p>L'intégrande est intégrable ($\sqrt t\cdot t^{k-1}\ln t\to0$). Par parties (crochet nul) :</p>$$I_k = \Big[\frac{t^k\ln t}k\Big]_0^1-\int_0^1\frac{t^{k-1}}k\,dt = -\frac1{k^2}.$$`, rappels: ["ip-tlnk"] },
    { t: "2) Rₙ comme intégrale", h: R`<p>$\frac{(-1)^{k-1}}{k^2} = -\int_0^1(-t)^{k-1}\ln t\,dt$.</p>`, b: R`<p>Par 1) : $\frac{(-1)^{k-1}}{k^2} = -\int_0^1u_k$ avec $u_k(t) = (-t)^{k-1}\ln t$. Les $u_k$ sont continues, intégrables, $\sum\int|u_k| = \sum\frac1{k^2}$ converge, et la somme géométrique donne, pour $t\in\,]0,1]$ :</p>$$\sum_{k = n+1}^{+\infty}u_k(t) = \frac{(-t)^n\ln t}{1+t}.$$<p>Par intégration terme à terme :</p><div class="sbox">$$R_n = -\int_0^1\frac{(-1)^nt^n\ln t}{1+t}\,dt.$$</div>`, rappels: ["ip-itt"] },
    { t: "3) Somme des Rₙ", h: R`<p>$v_n(t) = \frac{(-1)^nt^n\ln t}{1+t}$, $\int|v_n|\leqslant\frac1{(n+1)^2}$.</p>`, b: R`<p>Posons $v_n(t) = \frac{(-1)^nt^n\ln t}{1+t}$. On a $\int_0^1|v_n|\leqslant\int_0^1t^n|\ln t|\,dt = \frac1{(n+1)^2}$, terme d'une série convergente, et $\sum_{n\geqslant0}v_n(t) = \frac{\ln t}{(1+t)^2}$. Par intégration terme à terme :</p>$$\sum_{n = 0}^{+\infty}R_n = -\int_0^1\frac{\ln t}{(1+t)^2}\,dt.$$`, rappels: ["ip-itt"] },
    { t: "3) Calcul final", h: R`<p>Primitive $\frac t{1+t} = 1-\frac1{1+t}$ de $\frac1{(1+t)^2}$, nulle en $0$.</p>`, b: R`<p>Par parties, avec la primitive $\frac t{1+t}$ (le crochet $\frac{t\ln t}{1+t}$ est nul en $0$ et en $1$) :</p>$$\int_0^1\frac{\ln t}{(1+t)^2}\,dt = \Big[\frac{t\ln t}{1+t}\Big]_0^1-\int_0^1\frac t{1+t}\cdot\frac1t\,dt = -\ln2.$$<div class="sbox">$$\sum_{n = 0}^{+\infty}R_n = \ln2.$$</div>` }
  ],
  piege: R`Le choix de la primitive $\frac t{1+t}$ (au lieu de $-\frac1{1+t}$) évite un crochet divergent en $0$.`,
  methode: R`Somme de restes : écrire chaque terme comme une intégrale, et la somme du reste devient une série géométrique.`
},
{ id: "ipar-65", ...P, level: 3, time: "30 min",
  title: "Constante d'Euler et série lacunaire",
  enonce: R`<p>Pour $n\in\mathbb N^*$, on pose $u_n = \sum_{k = 1}^n\frac1k-\ln n$.</p><ol><li>Montrer que $(u_n)_{n\geqslant1}$ converge. On note $\gamma$ sa limite.</li><li>Pour $n\in\mathbb N^*$, établir</li></ol>$$u_n-u_{2n} = 2\int_0^1\frac{t(1-t^{2n})}{1-t^2}\,dt-\int_0^1\frac{1-t^{2n}}{1-t}\,dt+\int_0^1\frac{dt}{1+t}.$$<ol start="3"><li>En déduire $\displaystyle\int_0^1\frac1{1+t}\sum_{n = 1}^{+\infty}t^{2^n}\,dt = 1-\gamma$.</li></ol>`,
  decode: { donnees: [R`$\frac1k = \int_0^1t^{k-1}dt$.`], but: R`Lien suite-série ; écrire les sommes harmoniques comme des intégrales ; télescoper le long de $n = 2^k$.`, cles: {} },
  steps: [
    { t: "1) Convergence", h: R`<p>$u_n-u_{n-1} = O(\frac1{n^2})$.</p>`, b: R`<p>Pour $n\geqslant2$ :</p>$$u_n-u_{n-1} = \frac1n+\ln\Big(1-\frac1n\Big) = O\Big(\frac1{n^2}\Big).$$<p>La série $\sum(u_n-u_{n-1})$ converge absolument : $(u_n)$ converge.</p>`, rappels: ["ip-telesc"] },
    { t: "2) Les sommes comme intégrales", h: R`<p>$\frac1k = \int_0^1t^{k-1}$ et $\frac1k = 2\cdot\frac1{2k}$.</p>`, b: R`<p>$u_n-u_{2n} = H_n-H_{2n}+\ln2$, où $H_m = \sum_{k = 1}^m\frac1k$. Avec $\frac1k = \int_0^1t^{k-1}dt$ :</p>$$\left\{\begin{aligned}H_{2n}&= \int_0^1\sum_{k = 1}^{2n}t^{k-1}\,dt = \int_0^1\frac{1-t^{2n}}{1-t}\,dt,\\H_n&= 2\sum_{k = 1}^n\frac1{2k} = 2\int_0^1\sum_{k = 1}^nt^{2k-1}\,dt = 2\int_0^1\frac{t(1-t^{2n})}{1-t^2}\,dt,\\\ln2&= \int_0^1\frac{dt}{1+t}.\end{aligned}\right.$$<p>D'où la formule demandée.</p>` },
    { t: "3) Regroupement", h: R`<p>Dénominateur commun $1-t^2$.</p>`, b: R`<p>Le numérateur commun sur $1-t^2$ vaut</p>$$2t(1-t^{2n})-(1-t^{2n})(1+t)+(1-t) = t^{2n}-t^{2n+1} = t^{2n}(1-t).$$<div class="sbox">$$u_n-u_{2n} = \int_0^1\frac{t^{2n}}{1+t}\,dt.$$</div>` },
    { t: "3) Télescopage", h: R`<p>Prendre $n = 2^k$.</p>`, b: R`<p>Avec $n = 2^k$ : $u_{2^k}-u_{2^{k+1}} = \int_0^1\frac{t^{2^{k+1}}}{1+t}\,dt$. En sommant pour $k\geqslant0$ (télescopage, $u_1 = 1$, $u_{2^k}\to\gamma$) :</p>$$1-\gamma = \sum_{k = 0}^{+\infty}\int_0^1\frac{t^{2^{k+1}}}{1+t}\,dt.$$` },
    { t: "3) Conclusion", h: R`<p>Termes positifs.</p>`, b: R`<p>Les fonctions $\frac{t^{2^{k+1}}}{1+t}$ sont positives : par intégration terme à terme positive,</p><div class="sbox">$$\int_0^1\frac1{1+t}\sum_{n = 1}^{+\infty}t^{2^n}\,dt = 1-\gamma.$$</div><p><b>Coquille du livre</b> : l'énoncé fait commencer la somme à $n = 0$ ; avec le terme $t^{2^0} = t$, on ajouterait $\int_0^1\frac t{1+t} = 1-\ln2$. La bonne somme commence à $n = 1$, comme dans la correction du livre.</p>`, rappels: ["ip-ittpos"] }
  ],
  piege: R`La suite extraite $(u_{2^k})$ converge vers $\gamma$ ; c'est elle qu'on télescope, pas $(u_n)$.`,
  methode: R`Une différence de sommes harmoniques s'écrit comme une intégrale de fraction rationnelle, via $\frac1k = \int_0^1t^{k-1}$.`
}
]);
})();

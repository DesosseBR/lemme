/* Annales de concours : sujets d'écrit donnés tels quels (PDF d'origine) et corrigés question par question.
   Sujet caché « annales » : un « chapitre » par sujet, un exercice par partie (champ part).
   Champs du sujet : bank (nom exact d'une banque de core.js), annee, epreuve, filiere, duree, titre, nq, pdf, intro.
   Champs d'une partie : qnav (navigation par question), side (énoncé à côté), q sur chaque étape. */
LEMME.subject({
  id: "annales", name: "Annales", short: "Annales", sym: "§", hidden: true, home: "#concours",
  intro: "Sujets d'écrit corrigés question par question.",
  years: {
    mpsi: [],
    mp: [
      { t: "Centrale-Supélec 2025 · Mathématiques 1 MP-MPI", n: "Nombres premiers, PPCM, irrationalité, intégrales doubles", bank: "Centrale-Supélec", annee: 2025, epreuve: "Mathématiques 1", filiere: "MP, MPI", duree: "4 heures", titre: "Irrationalité de ζ(2)", nq: 40, pdf: "sujet-centrale-2025-mp-m1",
        intro: "Le sujet complet, tel qu'il a été distribué : on encadre le nombre de nombres premiers, on majore le PPCM de 1, 2, …, n, puis une intégrale double bien choisie prouve que ζ(2) = π²/6 est irrationnel." }
    ]
  }
});

LEMME.rappels({
  "an-binome": { t: "Binôme de Newton et symétrie", b: R`<div class="sbox">$$\sum_{k=0}^{m}\binom mk = (1+1)^m = 2^m,\qquad\binom mk = \binom m{m-k}.$$</div><p>Tous les termes sont des entiers $\geqslant1$. Le coefficient central $\binom{2n}n$ est le plus grand de la ligne $2n$.</p>` },
  "an-euclide": { t: "Lemme d'Euclide", b: R`<p>Si un nombre premier $p$ divise un produit $ab$, alors $p$ divise $a$ ou $p$ divise $b$.</p><p>Conséquence : si des nombres premiers <b>distincts</b> $p_1,\dots,p_m$ divisent tous $N$, alors leur produit $p_1\cdots p_m$ divise $N$ (ils sont premiers entre eux deux à deux).</p>` },
  "an-rec-forte": { t: "Récurrence forte", b: R`<p>Si $P(1)$ est vraie et si, pour tout $n$, « $P(1),\dots,P(n)$ vraies » entraîne « $P(n+1)$ vraie », alors $P(n)$ est vraie pour tout $n\geqslant1$.</p><p>Utile quand $P(n+1)$ se déduit d'un rang bien plus petit, comme $P\big(\frac{n}2\big)$.</p>` },
  "an-pe": { t: "Partie entière", b: R`<div class="sbox">$$\lfloor x\rfloor\in\mathbb Z,\qquad x-1< \lfloor x\rfloor\leqslant x.$$</div><p>Pour $m\in\mathbb N^*$ et $n\in\mathbb N$, le nombre de multiples de $m$ dans $\{1,\dots,n\}$ vaut $\left\lfloor\frac nm\right\rfloor$.</p>` },
  "an-valuation": { t: "Valuation p-adique", b: R`<p>$v_p(n)$ est l'exposant de $p$ dans la décomposition de $n$ en facteurs premiers : $n = \prod_{p}p^{v_p(n)}$.</p><div class="sbox">$$v_p(ab) = v_p(a)+v_p(b),\qquad p^k\mid n\iff k\leqslant v_p(n).$$</div>` },
  "an-etude-fonction": { t: "Étude de fonction", b: R`<p>Pour comparer deux fonctions, on étudie leur différence $h$ : on calcule $h'$, on en déduit les variations de $h$, puis son minimum. Si ce minimum est $>0$, on a $h>0$ partout.</p>` },
  "an-sous-groupes": { t: "Sous-groupes (idéaux) de ℤ", b: R`<p>Tout sous-groupe de $(\mathbb Z,+)$ est de la forme $d\mathbb Z$ pour un unique $d\in\mathbb N$. Une intersection de sous-groupes est un sous-groupe.</p>` },
  "an-equiv": { t: "Équivalents", b: R`<p>$u_n\sim v_n$ (avec $v_n>0$) signifie $\frac{u_n}{v_n}\to1$. Donc, pour tout $\varepsilon>0$, à partir d'un certain rang :</p><div class="sbox">$$(1-\varepsilon)v_n\leqslant u_n\leqslant(1+\varepsilon)v_n.$$</div>` },
  "an-geo": { t: "Série géométrique", b: R`<p>Pour $|q|< 1$ :</p><div class="sbox">$$\sum_{k=0}^{+\infty}q^k = \frac1{1-q},\qquad\sum_{k=m}^{+\infty}q^k = \frac{q^m}{1-q}.$$</div>` },
  "an-comparaison": { t: "Comparaison de séries positives", b: R`<p>Si $0\leqslant u_n\leqslant v_n$ et si $\sum v_n$ converge, alors $\sum u_n$ converge. Séries de Riemann : $\sum\frac1{n^a}$ converge si et seulement si $a>1$.</p>` },
  "an-integrable": { t: "Intégrabilité", b: R`<p>Une fonction continue sur un <b>segment</b> y est intégrable. Sur un intervalle quelconque, si $0\leqslant f\leqslant g$ et $g$ est intégrable, alors $f$ est intégrable.</p>` },
  "an-terme-a-terme": { t: "Intégration terme à terme", b: R`<p><b>Sur un segment</b>, si $\sum g_k$ converge uniformément (par exemple normalement), on peut intervertir $\int$ et $\sum$.</p><p><b>Sur un intervalle quelconque</b>, si les $g_k$ sont continues, positives, intégrables, et si $\sum g_k$ converge simplement vers une fonction continue : $\displaystyle\int\sum g_k = \sum\int g_k$ (dans $[0,+\infty]$).</p>` },
  "an-telesc": { t: "Télescopage", b: R`<div class="sbox">$$\sum_{k=0}^{N}(a_k-a_{k+1}) = a_0-a_{N+1}.$$</div><p>Avec des sommes décalées, on réindexe pour voir quels termes se compensent.</p>` },
  "an-derivee-n": { t: "Dérivée k-ième d'une puissance", b: R`<div class="sbox">$$\big(x^m\big)^{(k)} = \frac{m!}{(m-k)!}x^{m-k}\ \ (k\leqslant m),\qquad\big(x^m\big)^{(k)} = 0\ \ (k>m).$$</div>` },
  "an-ipp": { t: "Intégration par parties", b: R`<div class="sbox">$$\int_0^1u'v = \big[uv\big]_0^1-\int_0^1uv'.$$</div><p>Si $u$ s'annule en $0$ et en $1$, le crochet disparaît.</p>` },
  "an-amgm": { t: "Inégalité arithmético-géométrique", b: R`<p>Pour $x,y\geqslant0$ : $(\sqrt x-\sqrt y)^2\geqslant0$ donne</p><div class="sbox">$$x+y\geqslant2\sqrt{xy}.$$</div>` },
  "an-int-pos": { t: "Intégrale d'une fonction positive", b: R`<p>Si $f$ est continue, positive, et non identiquement nulle sur $[a,b]$ ($a< b$), alors $\int_a^bf>0$.</p>` },
  "an-entier": { t: "Un entier non nul vaut au moins 1", b: R`<p>Si $m\in\mathbb Z$ et $m\neq0$, alors $|m|\geqslant1$. Une suite d'entiers qui tend vers $0$ est nulle à partir d'un certain rang.</p>` }
});
(() => {
const { GRAPH } = window.__LA;
LEMME.exercises([
{
  id: "cc25-m1-a", subj: "annales", year: "mp", chap: 0, part: "A", kind: "probleme", qnav: true, side: true, level: 4, time: "1 h 30",
  title: "Un encadrement de la fonction π",
  enonce: R`<p><b>Notations.</b> $\lfloor x\rfloor$ est la partie entière de $x$. Si $p$ est premier et $n\in\mathbb N^*$, $v_p(n)$ est la <span data-k="vp">valuation $p$-adique</span> de $n$ : le plus grand entier $k$ tel que $p^k$ divise $n$. Pour $x\geqslant1$, <span data-k="pi">$\pi(x)$ est le nombre de nombres premiers inférieurs ou égaux à $x$</span>.</p>
<p>Le but de cette partie est d'établir l'encadrement : $$\forall x\in[3,+\infty[,\qquad\frac{\ln(2)\,x}{6\ln(x)}\leqslant\pi(x)\leqslant4\,\frac{x}{\ln(x)}.$$</p>
<h4>I – Calculs préliminaires</h4>
<ol start="1">
<li>Soit $n\in\mathbb N^*$. Montrer que $\displaystyle\prod_{\substack{n+2\leqslant p\leqslant2n+1\\ p\ \text{premier}}}p\leqslant\binom{2n+1}{n}\leqslant4^n$.</li>
<li>Montrer que, pour tout $n\in\mathbb N^*$, $\displaystyle\prod_{\substack{p\leqslant n\\ p\ \text{premier}}}p< 4^n$. On pourra procéder par récurrence et discuter suivant la parité de $n$.</li>
<li>En déduire que, pour tout réel $x\geqslant1$, $\displaystyle\prod_{\substack{p\leqslant x\\ p\ \text{premier}}}p< 4^x$.</li>
<li>Montrer que, pour tout $n\in\mathbb N^*$, $\dfrac{4^n}{2n}\leqslant\binom{2n}{n}< 4^n$.</li>
<li>Soit $p$ premier. Montrer que, pour tout $n\in\mathbb N$, $v_p(n!) = \displaystyle\sum_{k=1}^{+\infty}\left\lfloor\frac n{p^k}\right\rfloor$.</li>
<li>En déduire que, pour tous $n\in\mathbb N^*$, $k\in\mathbb N$ et $p$ premier : si $p^k$ divise $\binom{2n}{n}$, alors $p^k\leqslant2n$.</li>
</ol>
<h4>II – Majoration de π(x)</h4>
<ol start="7">
<li>Soit $n\in\mathbb N^*$. Justifier que $\displaystyle\prod_{\substack{p\leqslant n\\ p\ \text{premier}}}p\geqslant\prod_{\substack{\sqrt n< p\leqslant n\\ p\ \text{premier}}}p$.</li>
<li>En déduire que, pour tout $n\in\mathbb N^*$, $n^{(\pi(n)-\pi(\sqrt n))/2}< 4^n$.</li>
<li>Soit $n\geqslant2$ entier. Justifier que $\pi(\sqrt n)\leqslant\sqrt n< \dfrac n{\ln(n)}$, puis en déduire que $\pi(n)\leqslant4\,\dfrac{\ln(n)}{n}$. On pourra remarquer que $2>\ln(4)$.</li>
<li>Soit $x\geqslant3$. En utilisant la croissance de $t\mapsto\dfrac t{\ln(t)}$ sur $[e,+\infty[$, montrer que $\pi(x)\leqslant4\,\dfrac x{\ln(x)}$.</li>
</ol>
<h4>III – Minoration de π(x)</h4>
<ol start="11">
<li>Soit $n\in\mathbb N^*$. Montrer que $\binom{2n}{n}\leqslant(2n)^{\pi(2n)}$.</li>
<li>Soit $n\in\mathbb N^*$. Vérifier que $\dfrac{2n\ln(2)}{\ln(2n)}-1\geqslant\dfrac{n\ln(2)}{\ln(2n)}$, puis en déduire que $\pi(2n)\geqslant n\,\dfrac{\ln(2)}{\ln(2n)}$.</li>
<li>Soit $x\geqslant3$. Montrer que $\pi(x)\geqslant\dfrac{\ln(2)\,x}{6\ln(x)}$. On pourra poser $n = \lfloor x/2\rfloor$ et utiliser Q12.</li>
</ol>
<p>On admet dans la suite le <span data-k="tnp">théorème des nombres premiers</span> : $\pi(x)\underset{x\to+\infty}{\sim}\dfrac x{\ln(x)}$.</p>`,
  decode: {
    donnees: [R`$\pi(x)$ compte les nombres premiers $\leqslant x$ : $\pi(10) = 4$ ($2,3,5,7$).`, R`La formule du binôme et les coefficients binomiaux.`, R`$v_p(n)$ : l'exposant de $p$ dans $n$. Exemple : $v_2(12) = 2$ car $12 = 2^2\times3$.`],
    but: R`Encadrer $\pi(x)$ entre deux multiples de $\frac x{\ln x}$, en contrôlant des produits de nombres premiers grâce aux coefficients binomiaux.`,
    cles: {
      vp: R`$v_p(n) = \max\{k\in\mathbb N : p^k\mid n\}$. Par exemple $v_3(54) = 3$ car $54 = 2\times3^3$.`,
      pi: R`$\pi(x) = \operatorname{card}\{p\ \text{premier} : p\leqslant x\}$. Exemples : $\pi(2) = 1$, $\pi(10) = 4$, $\pi(20) = 8$.`,
      tnp: R`Démontré en 1896 par Hadamard et de La Vallée Poussin : $\pi(x)\ln(x)/x\to1$. Ici il est admis.`,
      central: R`$\binom{2n+1}{n} = \binom{2n+1}{n+1}$ : ce sont les deux termes du milieu de la ligne $2n+1$ du triangle de Pascal.`,
      produit: R`$n!\binom{2n+1}{n} = \frac{(2n+1)!}{(n+1)!} = (n+2)(n+3)\cdots(2n+1)$.`,
      Pin: R`On note $\Pi_n = \prod_{p\leqslant n,\ p\ \text{premier}}p$ le produit des nombres premiers $\leqslant n$. Exemple : $\Pi_{10} = 2\cdot3\cdot5\cdot7 = 210$.`,
      coupe: R`Pour $n+1 = 2m+1$ : les premiers $\leqslant2m+1$ sont ceux $\leqslant m+1$ et ceux de $[\![m+2,2m+1]\!]$.`,
      compte: R`$v_p(i) = \sum_{k\geqslant1}\mathbf 1_{p^k\mid i}$ : on compte les puissances $p,p^2,p^3,\dots$ qui divisent $i$.`,
      pe2: R`Pour tout réel $y$ : $\lfloor2y\rfloor-2\lfloor y\rfloor\in\{0,1\}$.`,
      lnsqrt: R`$\ln t< \sqrt t$ pour tout $t>0$ : le minimum de $\sqrt t-\ln t$ est atteint en $t = 4$ et vaut $2-\ln4>0$.`,
      coquille: R`Le sujet écrit $\frac{\ln n}{n}$, qui tend vers $0$ : impossible pour l'entier $\pi(n)\geqslant1$. Il faut lire $\pi(n)\leqslant4\frac n{\ln n}$, cohérent avec Q10.`,
      tln: R`$g(t) = \frac t{\ln t}$ a pour dérivée $g'(t) = \frac{\ln t-1}{(\ln t)^2}\geqslant0$ dès que $t\geqslant e$.`,
      dec: R`$\binom{2n}{n} = \prod_{p\leqslant2n}p^{v_p}$ : seuls les premiers $\leqslant2n$ peuvent diviser $\frac{(2n)!}{n!\,n!}$.`
    }
  },
  steps: [
    { q: 1, t: "Majorer le coefficient central", h: R`<p>Les deux <span data-k="central">termes du milieu</span> de la ligne $2n+1$ sont égaux, et la somme de toute la ligne vaut $2^{2n+1}$.</p>`, b: R`<p>Par le binôme : $\sum_{k=0}^{2n+1}\binom{2n+1}k = 2^{2n+1} = 2\times4^n$. Tous les termes sont positifs, et <span data-k="central">deux d'entre eux valent $\binom{2n+1}{n}$</span>. Donc</p><div class="sbox">$$2\binom{2n+1}{n}\leqslant2\times4^n,\qquad\text{soit}\qquad\binom{2n+1}{n}\leqslant4^n.$$</div><p>Exemple $n = 2$ : $\binom52 = 10\leqslant16$.</p>`, rappels: ["an-binome"] },
    { q: 1, t: "Chaque premier de l'intervalle divise le coefficient", h: R`<p>Multiplier le coefficient par $n!$ fait apparaître <span data-k="produit">le produit des entiers de $n+2$ à $2n+1$</span>.</p>`, b: R`<p>Soit $p$ premier avec $n+2\leqslant p\leqslant2n+1$. On a <span data-k="produit">$n!\binom{2n+1}{n} = (n+2)(n+3)\cdots(2n+1)$</span>, et $p$ est l'un de ces facteurs : $p$ divise $n!\binom{2n+1}{n}$.</p><p>Mais $p$ ne divise pas $n!$ : tous les facteurs $1,2,\dots,n$ sont plus petits que $p$, et un premier qui divise un produit divise l'un des facteurs. Par le lemme d'Euclide, $p$ divise $\binom{2n+1}{n}$.</p>`, rappels: ["an-euclide"] },
    { q: 1, t: "Le produit divise, donc il est plus petit", h: R`<p>Des nombres premiers distincts qui divisent tous un entier : leur produit le divise aussi.</p>`, b: R`<p>Les premiers de $[\![n+2,2n+1]\!]$ sont distincts et divisent tous $\binom{2n+1}{n}$, donc leur produit le divise. Un diviseur d'un entier $\geqslant1$ est plus petit que lui :</p><div class="sbox">$$\prod_{\substack{n+2\leqslant p\leqslant2n+1\\ p\ \text{premier}}}p\leqslant\binom{2n+1}{n}\leqslant4^n.$$</div><p>S'il n'y a aucun premier dans l'intervalle, le produit vide vaut $1$ et l'inégalité reste vraie.</p>`, rappels: ["an-euclide"] },
    { q: 2, t: "Mettre en place une récurrence forte", h: R`<p>Pour passer au rang $n+1$, on va utiliser un rang proche de $\frac n2$ : c'est une récurrence <b>forte</b>. On note <span data-k="Pin">$\Pi_n$ le produit des premiers $\leqslant n$</span>.</p>`, b: R`<p>Montrons $\mathcal P(n)$ : « <span data-k="Pin">$\Pi_n$</span> $< 4^n$ » pour tout $n\geqslant1$.</p><p><b>Initialisation.</b> $\Pi_1 = 1< 4$ (produit vide) et $\Pi_2 = 2< 16$.</p><p><b>Hérédité.</b> Soit $n\geqslant2$ tel que $\mathcal P(1),\dots,\mathcal P(n)$ soient vraies. On montre $\mathcal P(n+1)$ en distinguant la parité de $n+1$.</p>`, rappels: ["an-rec-forte"] },
    { q: 2, t: "Cas n + 1 pair", h: R`<p>Un nombre pair $\geqslant4$ n'est pas premier.</p>`, b: R`<p>Si $n+1$ est pair, $n+1\geqslant4$ n'est pas premier, donc les premiers $\leqslant n+1$ sont ceux $\leqslant n$ :</p>$$\Pi_{n+1} = \Pi_n< 4^n< 4^{n+1}.$$` },
    { q: 2, t: "Cas n + 1 impair : couper le produit en deux", h: R`<p>Écrire $n+1 = 2m+1$ et <span data-k="coupe">séparer les premiers $\leqslant m+1$ de ceux entre $m+2$ et $2m+1$</span> : la première moitié relève de l'hypothèse de récurrence, la seconde de Q1.</p>`, b: R`<p>Si $n+1 = 2m+1$ avec $m\geqslant1$ : <span data-k="coupe">$\Pi_{2m+1} = \Pi_{m+1}\times\prod_{m+2\leqslant p\leqslant2m+1}p$</span>.</p><ul><li>$m+1\leqslant2m = n$, donc l'hypothèse de récurrence donne $\Pi_{m+1}< 4^{m+1}$.</li><li>Q1 (avec $m$ à la place de $n$) donne $\prod_{m+2\leqslant p\leqslant2m+1}p\leqslant4^m$.</li></ul><p>Donc $\Pi_{n+1}< 4^{m+1}\cdot4^m = 4^{2m+1} = 4^{n+1}$.</p><div class="sbox">$$\forall n\in\mathbb N^*,\qquad\prod_{\substack{p\leqslant n\\ p\ \text{premier}}}p< 4^n.$$</div><p>Exemple : $\Pi_{10} = 210< 4^{10}\approx10^6$. La borne est large mais suffira.</p>`, rappels: ["an-rec-forte"] },
    { q: 3, t: "Se ramener à un entier", h: R`<p>Les nombres premiers sont des entiers : $p\leqslant x\iff p\leqslant\lfloor x\rfloor$.</p>`, b: R`<p>Soit $x\geqslant1$ ; alors $\lfloor x\rfloor\geqslant1$. Comme un premier $p$ est entier, $p\leqslant x\iff p\leqslant\lfloor x\rfloor$. Avec Q2 et $\lfloor x\rfloor\leqslant x$ :</p><div class="sbox">$$\prod_{\substack{p\leqslant x\\ p\ \text{premier}}}p = \Pi_{\lfloor x\rfloor}< 4^{\lfloor x\rfloor}\leqslant4^x.$$</div>`, rappels: ["an-pe"] },
    { q: 4, t: "La majoration", h: R`<p>Le coefficient central est un terme de la somme $\sum_k\binom{2n}k = 4^n$, et il y en a d'autres, strictement positifs.</p>`, b: R`<p>$4^n = \sum_{k=0}^{2n}\binom{2n}k$. Comme $n\geqslant1$, la somme contient aussi $\binom{2n}0 = 1>0$, donc $\binom{2n}n< 4^n$.</p>`, rappels: ["an-binome"] },
    { q: 4, t: "La minoration : le plus grand terme", h: R`<p>Une somme de $N$ termes est au plus $N$ fois le plus grand terme. Ici le plus grand est $\binom{2n}n$ ; on regroupe les deux termes extrêmes ($1+1$) pour n'avoir que $2n$ termes.</p>`, b: R`<p>La ligne $2n$ a $2n+1$ termes. On regroupe $\binom{2n}0+\binom{2n}{2n} = 2\leqslant\binom{2n}n$ (car $n\geqslant1$). Il reste $2n$ « paquets », chacun $\leqslant\binom{2n}n$ :</p>$$4^n = 2+\sum_{k=1}^{2n-1}\binom{2n}k\leqslant2n\binom{2n}n.$$<div class="sbox">$$\frac{4^n}{2n}\leqslant\binom{2n}n< 4^n.$$</div><p>Exemple $n = 3$ : $\frac{64}6\approx10{,}7\leqslant20< 64$.</p>`, rappels: ["an-binome"] },
    { q: 5, t: "Écrire la valuation comme un comptage", h: R`<p>$v_p(n!) = \sum_{i=1}^nv_p(i)$, et <span data-k="compte">$v_p(i)$ est le nombre de puissances $p^k$ ($k\geqslant1$) qui divisent $i$</span>.</p>`, b: R`<p>Comme $v_p(ab) = v_p(a)+v_p(b)$ : $v_p(n!) = \sum_{i=1}^nv_p(i)$ (pour $n = 0$, les deux membres de Q5 sont nuls).</p><p>Pour $i\geqslant1$, $p^k$ divise $i$ si et seulement si $k\leqslant v_p(i)$. Donc <span data-k="compte">$v_p(i) = \operatorname{card}\{k\geqslant1 : p^k\mid i\} = \sum_{k\geqslant1}\mathbf 1_{p^k\mid i}$</span>.</p><p>Exemple : $v_2(12) = 2$ car $2\mid12$, $4\mid12$, $8\nmid12$.</p>`, rappels: ["an-valuation"] },
    { q: 5, t: "Échanger les sommes", h: R`<p>On intervertit : pour chaque $k$, on compte les $i\leqslant n$ multiples de $p^k$.</p>`, b: R`<p>Toutes les sommes sont finies ($\mathbf 1_{p^k\mid i} = 0$ dès que $p^k>n$), on peut les intervertir :</p>$$v_p(n!) = \sum_{i=1}^n\sum_{k\geqslant1}\mathbf 1_{p^k\mid i} = \sum_{k\geqslant1}\operatorname{card}\{i\leqslant n : p^k\mid i\} = \sum_{k\geqslant1}\left\lfloor\frac n{p^k}\right\rfloor.$$<div class="sbox">$$v_p(n!) = \sum_{k=1}^{+\infty}\left\lfloor\frac n{p^k}\right\rfloor\quad\text{(formule de Legendre).}$$</div><p>La somme est finie : ses termes sont nuls dès que $p^k>n$. Exemple : $v_2(10!) = 5+2+1 = 8$.</p>`, rappels: ["an-pe"] },
    { q: 6, t: "La valuation du coefficient central", h: R`<p>$\binom{2n}n = \frac{(2n)!}{n!\,n!}$ et la valuation transforme produits et quotients en sommes et différences.</p>`, b: R`<p>$v_p\big((2n)!\big) = v_p\big(\binom{2n}n\big)+2v_p(n!)$, donc avec Q5 :</p>$$v_p\binom{2n}n = \sum_{i\geqslant1}c_i,\qquad c_i = \left\lfloor\frac{2n}{p^i}\right\rfloor-2\left\lfloor\frac n{p^i}\right\rfloor.$$`, rappels: ["an-valuation"] },
    { q: 6, t: "Chaque terme vaut 0 ou 1", h: R`<p>Avec $y = \frac n{p^i}$, on a <span data-k="pe2">$c_i = \lfloor2y\rfloor-2\lfloor y\rfloor\in\{0,1\}$</span>.</p>`, b: R`<p>Posons $y = \frac n{p^i}$ et $m = \lfloor y\rfloor$ : $m\leqslant y< m+1$, donc $2m\leqslant2y< 2m+2$, donc $\lfloor2y\rfloor\in\{2m,2m+1\}$. Ainsi <span data-k="pe2">$c_i\in\{0,1\}$</span>.</p><p>De plus, si $p^i>2n$, les deux parties entières sont nulles : $c_i = 0$.</p>`, rappels: ["an-pe"] },
    { q: 6, t: "Compter les termes non nuls", h: R`<p>Seuls les $i$ tels que $p^i\leqslant2n$ comptent, et chacun apporte au plus $1$.</p>`, b: R`<p>Soit $j$ le plus grand entier tel que $p^j\leqslant2n$. D'après l'étape précédente, $v_p\binom{2n}n\leqslant\operatorname{card}\{1,\dots,j\} = j$, donc $p^{v_p\binom{2n}n}\leqslant p^j\leqslant2n$.</p><p>Si $p^k$ divise $\binom{2n}n$, alors $k\leqslant v_p\binom{2n}n$, donc</p><div class="sbox">$$p^k\leqslant p^{v_p\binom{2n}n}\leqslant2n.$$</div><p>Exemple : $\binom{10}5 = 252 = 2^2\cdot3^2\cdot7$, et $4,9,7\leqslant10$.</p>`, rappels: ["an-valuation"] },
    { q: 7, t: "Moins de facteurs, tous ≥ 1", h: R`<p>Le second produit porte sur une partie des premiers du premier produit, et les facteurs retirés valent au moins $2$.</p>`, b: R`<p>$\{p\ \text{premier} : \sqrt n< p\leqslant n\}\subset\{p\ \text{premier} : p\leqslant n\}$. Le produit de gauche est celui de droite multiplié par les premiers $\leqslant\sqrt n$, qui sont tous $\geqslant2>1$ :</p><div class="sbox">$$\prod_{p\leqslant n}p\geqslant\prod_{\sqrt n< p\leqslant n}p.$$</div>` },
    { q: 8, t: "Minorer le produit", h: R`<p>Combien de facteurs, et quelle taille minimale ? Il y a <span data-k="pi">$\pi(n)-\pi(\sqrt n)$</span> premiers dans $]\sqrt n,n]$, chacun plus grand que $\sqrt n$.</p>`, b: R`<p>Le nombre de premiers dans $]\sqrt n,n]$ est <span data-k="pi">$\pi(n)-\pi(\sqrt n)$</span>, et chacun est $>\sqrt n = n^{1/2}$ :</p>$$\prod_{\sqrt n< p\leqslant n}p\geqslant\big(n^{1/2}\big)^{\pi(n)-\pi(\sqrt n)} = n^{(\pi(n)-\pi(\sqrt n))/2}.$$` },
    { q: 8, t: "Majorer avec Q7 et Q2", h: R`<p>Enchaîner les inégalités.</p>`, b: R`<p>Avec Q7 puis Q2 :</p><div class="sbox">$$n^{(\pi(n)-\pi(\sqrt n))/2}\leqslant\prod_{\sqrt n< p\leqslant n}p\leqslant\prod_{p\leqslant n}p< 4^n.$$</div>` },
    { q: 9, t: "π(√n) ≤ √n", h: R`<p>Les premiers $\leqslant\sqrt n$ sont parmi les entiers $1,2,\dots,\lfloor\sqrt n\rfloor$.</p>`, b: R`<p>$\{p\ \text{premier} : p\leqslant\sqrt n\}\subset\{1,\dots,\lfloor\sqrt n\rfloor\}$, donc $\pi(\sqrt n)\leqslant\lfloor\sqrt n\rfloor\leqslant\sqrt n$.</p>`, rappels: ["an-pe"] },
    { q: 9, t: "√n < n / ln n", h: R`<p>En divisant par $\sqrt n$, cela revient à <span data-k="lnsqrt">$\ln n< \sqrt n$</span>. On étudie $h(t) = \sqrt t-\ln t$ : c'est là que sert $2>\ln4$.</p>`, b: R`<p>Pour $n\geqslant2$, $\ln n>0$ et $\sqrt n< \frac n{\ln n}\iff\ln n< \sqrt n$.</p><p>Soit $h(t) = \sqrt t-\ln t$ sur $]0,+\infty[$ : $h'(t) = \frac1{2\sqrt t}-\frac1t = \frac{\sqrt t-2}{2t}$, négatif sur $]0,4]$, positif ensuite. Le minimum vaut $h(4) = 2-\ln4>0$. Donc <span data-k="lnsqrt">$\ln t< \sqrt t$ pour tout $t>0$</span>.</p><div class="sbox">$$\pi(\sqrt n)\leqslant\sqrt n< \frac n{\ln n}.$$</div>`, rappels: ["an-etude-fonction"] },
    { q: 9, t: "Majorer π(n) (et une coquille du sujet)", h: R`<p><span data-k="coquille">L'inégalité demandée contient une coquille</span> : on montre $\pi(n)\leqslant4\frac n{\ln n}$. On prend le logarithme dans Q8.</p>`, b: R`<p><span data-k="coquille">$\frac{\ln n}n\to0$ alors que $\pi(n)\geqslant1$ : l'inégalité écrite est fausse pour $n$ grand.</span> On établit la version voulue (celle qu'utilise Q10).</p><p>Le logarithme de Q8 donne $\frac{\pi(n)-\pi(\sqrt n)}2\ln n< n\ln4$, donc</p>$$\pi(n)< 2\ln4\cdot\frac n{\ln n}+\pi(\sqrt n).$$<p>Avec la première partie, $\pi(\sqrt n)< \frac n{\ln n}$, donc</p>$$\pi(n)< (1+2\ln4)\,\frac n{\ln n}.$$<p>Or $\ln4\approx1{,}386$, donc $1+2\ln4\approx3{,}77< 4$ :</p><div class="sbox">$$\forall n\geqslant2,\qquad\pi(n)\leqslant4\,\frac n{\ln n}.$$</div>` },
    { q: 10, t: "La croissance de t / ln t", h: R`<p>Dériver <span data-k="tln">$g(t) = \frac t{\ln t}$</span>.</p>`, b: R`<p><span data-k="tln">$g'(t) = \frac{\ln t-1}{(\ln t)^2}\geqslant0$ pour $t\geqslant e$</span> : $g$ est croissante sur $[e,+\infty[$, donc sur $[3,+\infty[$.</p>` + GRAPH({ w: 420, h: 220, x: [1.2, 12], y: [0, 8], xt: [3, 6, 9, 12], yt: [2, 4, 6, 8], vl: [{ x: Math.E, t: "e" }], curves: [{ f: t => t / Math.log(t), c: "b", lab: [9.2, 5.6, "t / ln t"] }] }, R`$t\mapsto\frac t{\ln t}$ décroît jusqu'en $e$, puis croît : son minimum vaut $e$.`, "Courbe de t sur ln t"), rappels: ["an-etude-fonction"] },
    { q: 10, t: "Passer de x à sa partie entière", h: R`<p>$\pi(x) = \pi(\lfloor x\rfloor)$, et Q9 s'applique à l'entier $\lfloor x\rfloor$.</p>`, b: R`<p>Soit $x\geqslant3$ et $m = \lfloor x\rfloor\geqslant3$. Les premiers étant entiers, $\pi(x) = \pi(m)$. Avec Q9, puis la croissance de $g$ sur $[3,+\infty[$ et $m\leqslant x$ :</p><div class="sbox">$$\pi(x) = \pi(m)\leqslant4\,\frac m{\ln m}\leqslant4\,\frac x{\ln x}.$$</div>`, rappels: ["an-pe"] },
    { q: 11, t: "Décomposer le coefficient", h: R`<p><span data-k="dec">Seuls des premiers $\leqslant2n$ apparaissent</span> dans $\binom{2n}n$, il y en a au plus $\pi(2n)$.</p>`, b: R`<p>Un premier qui divise $\binom{2n}n$ divise $(2n)! = 1\cdot2\cdots(2n)$, donc l'un des facteurs : il est $\leqslant2n$. D'où <span data-k="dec">$\binom{2n}n = \prod_{p\leqslant2n}p^{v_p}$</span>, avec $v_p = v_p\binom{2n}n$, produit de $\pi(2n)$ facteurs.</p>`, rappels: ["an-valuation"] },
    { q: 11, t: "Chaque facteur est au plus 2n", h: R`<p>Q6 avec $k = v_p$.</p>`, b: R`<p>$p^{v_p}$ divise $\binom{2n}n$, donc par Q6, $p^{v_p}\leqslant2n$. Le produit de $\pi(2n)$ facteurs $\leqslant2n$ :</p><div class="sbox">$$\binom{2n}n\leqslant(2n)^{\pi(2n)}.$$</div><p>Exemple $n = 5$ : $252\leqslant10^4$ ($\pi(10) = 4$).</p>` },
    { q: 12, t: "Vérifier l'inégalité", h: R`<p>Multiplier par $\ln(2n)>0$ : on tombe sur $2^n\geqslant2n$.</p>`, b: R`<p>Comme $\ln(2n)>0$, l'inégalité équivaut à $2n\ln2-\ln(2n)\geqslant n\ln2$, soit $n\ln2\geqslant\ln(2n)$, soit $2^n\geqslant2n$.</p><p>Cela se montre par récurrence : vrai pour $n = 1$ ($2\geqslant2$), et si $2^n\geqslant2n$ alors $2^{n+1}\geqslant4n\geqslant2n+2$.</p>` },
    { q: 12, t: "Prendre le logarithme", h: R`<p>Combiner Q4 (minoration de $\binom{2n}n$) et Q11 (majoration), puis passer au logarithme.</p>`, b: R`<p>Q4 et Q11 : $\frac{4^n}{2n}\leqslant\binom{2n}n\leqslant(2n)^{\pi(2n)}$. Le logarithme donne $2n\ln2-\ln(2n)\leqslant\pi(2n)\ln(2n)$, puis</p>$$\pi(2n)\geqslant\frac{2n\ln2}{\ln(2n)}-1\geqslant\frac{n\ln2}{\ln(2n)}.$$<div class="sbox">$$\pi(2n)\geqslant n\,\frac{\ln2}{\ln(2n)}.$$</div>` },
    { q: 13, t: "Choisir n = ⌊x/2⌋", h: R`<p>Avec $n = \lfloor x/2\rfloor$ : $2n\leqslant x$ et $n>\frac x2-1$. Comme $\pi$ est croissante, $\pi(x)\geqslant\pi(2n)$.</p>`, b: R`<p>Soit $x\geqslant3$ et $n = \lfloor x/2\rfloor\geqslant1$. On a $\frac x2-1< n\leqslant\frac x2$, donc $2n\leqslant x$, $\pi(x)\geqslant\pi(2n)$ et $\ln(2n)\leqslant\ln x$. Avec Q12 :</p>$$\pi(x)\geqslant\frac{n\ln2}{\ln(2n)}\geqslant\frac{n\ln2}{\ln x}>\Big(\frac x2-1\Big)\frac{\ln2}{\ln x} = \frac{(x-2)\ln2}{2\ln x}.$$`, rappels: ["an-pe"] },
    { q: 13, t: "Conclure", h: R`<p>Il reste à comparer $\frac{x-2}2$ et $\frac x6$.</p>`, b: R`<p>$\frac{x-2}2\geqslant\frac x6\iff3x-6\geqslant x\iff x\geqslant3$ : vrai. Donc</p><div class="sbox">$$\forall x\geqslant3,\qquad\frac{\ln(2)\,x}{6\ln x}\leqslant\pi(x)\leqslant4\,\frac x{\ln x}.$$</div><p>Ordre de grandeur : pour $x = 1000$, l'encadrement donne $16\leqslant\pi(1000)\leqslant579$, et en vrai $\pi(1000) = 168$, proche de $\frac{1000}{\ln1000}\approx145$.</p>` }
  ],
  ctx: {
    "an-binome": R`<p>Lignes $2n+1$ (Q1) et $2n$ (Q4) du triangle de Pascal.</p>`,
    "an-euclide": R`<p>$p$ premier entre $n+2$ et $2n+1$ ne divise pas $n!$.</p>`,
    "an-rec-forte": R`<p>Au rang $2m+1$, on utilise le rang $m+1$.</p>`,
    "an-pe": R`<p>Multiples de $p^k$ dans $\{1,\dots,n\}$ ; passage de $x$ à $\lfloor x\rfloor$.</p>`,
    "an-valuation": R`<p>$v_p\binom{2n}n = v_p((2n)!)-2v_p(n!)$.</p>`,
    "an-etude-fonction": R`<p>$h(t) = \sqrt t-\ln t$ en Q9, $g(t) = \frac t{\ln t}$ en Q10.</p>`
  },
  piege: R`Oublier que les premiers sont des entiers : c'est ce qui permet de remplacer $x$ par $\lfloor x\rfloor$ partout. En Q9, ne pas chercher à prouver l'inégalité telle qu'elle est écrite : elle contient une coquille.`,
  methode: R`Pour contrôler des nombres premiers, on les fait diviser un coefficient binomial bien choisi, puis on encadre ce coefficient avec la formule du binôme.`
}
]);
})();
LEMME.exercises([
{
  id: "cc25-m1-b", subj: "annales", year: "mp", chap: 0, part: "B", kind: "probleme", qnav: true, side: true, level: 3, time: "45 min",
  title: "Une majoration d'un PPCM",
  enonce: R`<h4>I – Une première majoration</h4>
<ol start="14">
<li>Soit $r\in\mathbb N^*$ et $a_1,\dots,a_r$ des entiers naturels non nuls. Justifier qu'il existe un unique entier naturel $d(a_1,\dots,a_r)$ tel que $a_1\mathbb Z\cap a_2\mathbb Z\cap\dots\cap a_r\mathbb Z = d(a_1,\dots,a_r)\mathbb Z$.</li>
<li>Montrer que $d(a_1,\dots,a_r)$ est le plus petit entier naturel non nul divisible par $a_1,\dots,a_r$.</li>
</ol>
<p>$d(a_1,\dots,a_r)$ s'appelle le plus petit commun multiple, noté $\operatorname{PPCM}(a_1,\dots,a_r)$. Pour $n\in\mathbb N^*$, on note <span data-k="dn">$d_n = \operatorname{PPCM}(1,2,\dots,n)$</span>.</p>
<ol start="16">
<li>Calculer $d_2$, $d_3$ et $d_4$, puis montrer que $d_n\leqslant n!$ pour tout $n\in\mathbb N^*$.</li>
</ol>
<h4>II – Une majoration plus fine</h4>
<p>On fixe $n\in\mathbb N^*$ et, pour tout premier $p$, on note <span data-k="kp">$k_p$ le plus grand entier naturel tel que $p^{k_p}\leqslant n$</span>.</p>
<ol start="17">
<li>Montrer que $d_n = \displaystyle\prod_{\substack{p\leqslant n\\ p\ \text{premier}}}p^{k_p}$.</li>
<li>Pour tout premier $p$, montrer que $k_p = \left\lfloor\dfrac{\ln(n)}{\ln(p)}\right\rfloor$. En déduire que $d_n\leqslant n^{\pi(n)}$.</li>
<li>En déduire qu'il existe $N\in\mathbb N^*$ tel que, pour tout $n\geqslant N$, $d_n\leqslant3^n$. On pourra utiliser le théorème des nombres premiers.</li>
</ol>`,
  decode: {
    donnees: [R`Le théorème des nombres premiers (admis) : $\pi(n)\sim\frac n{\ln n}$.`, R`$\pi(n)$ : nombre de premiers $\leqslant n$.`],
    but: R`Montrer que $d_n = \operatorname{PPCM}(1,\dots,n)$ ne dépasse pas $3^n$ pour $n$ grand, alors que $n!$ grandit beaucoup plus vite.`,
    cles: {
      dn: R`$d_n$ est le plus petit entier divisible par $1,2,\dots,n$. Exemples : $d_5 = 60$, $d_6 = 60$, $d_7 = 420$.`,
      kp: R`$k_p$ est l'exposant de la plus grande puissance de $p$ qui reste $\leqslant n$. Pour $n = 10$ : $k_2 = 3$ ($8\leqslant10< 16$), $k_3 = 2$, $k_5 = k_7 = 1$.`,
      ideal: R`Une intersection de sous-groupes de $\mathbb Z$ est un sous-groupe, et les sous-groupes de $\mathbb Z$ sont les $d\mathbb Z$.`,
      appartient: R`$m\in a\mathbb Z\iff a\mid m$ : appartenir à $a\mathbb Z$, c'est être un multiple de $a$.`,
      expo: R`Dans $k\leqslant n$, chaque premier $p$ apparaît avec un exposant $v_p(k)$ tel que $p^{v_p(k)}\leqslant k\leqslant n$, donc $v_p(k)\leqslant k_p$.`,
      log: R`$p^k\leqslant n\iff k\ln p\leqslant\ln n\iff k\leqslant\frac{\ln n}{\ln p}$, car $\ln p>0$.`,
      eps: R`On choisit $1+\varepsilon = \ln3\approx1{,}0986$ : c'est bien un nombre $>1$.`
    }
  },
  steps: [
    { q: 14, t: "L'intersection est un sous-groupe", h: R`<p>Chaque $a_i\mathbb Z$ est un sous-groupe de $\mathbb Z$ : <span data-k="ideal">leur intersection aussi, donc elle s'écrit $d\mathbb Z$</span>.</p>`, b: R`<p>Chaque $a_i\mathbb Z$ est un sous-groupe de $(\mathbb Z,+)$. <span data-k="ideal">Une intersection de sous-groupes est un sous-groupe</span> (elle contient $0$ et est stable par différence). Donc il existe $d\in\mathbb N$ avec $\bigcap_ia_i\mathbb Z = d\mathbb Z$.</p>`, rappels: ["an-sous-groupes"] },
    { q: 14, t: "L'unicité", h: R`<p>Si $d\mathbb Z = d'\mathbb Z$ avec $d,d'\geqslant0$, alors $d$ et $d'$ se divisent l'un l'autre.</p>`, b: R`<p>Si $d\mathbb Z = d'\mathbb Z$ avec $d,d'\in\mathbb N$ : $d\in d'\mathbb Z$ et $d'\in d\mathbb Z$, donc $d'\mid d$ et $d\mid d'$, d'où $d = d'$ (ils sont positifs).</p><p>Remarque : $d\neq0$, car le produit $a_1\cdots a_r\neq0$ est dans l'intersection.</p><div class="sbox">$$\exists!\,d(a_1,\dots,a_r)\in\mathbb N,\qquad\bigcap_{i=1}^ra_i\mathbb Z = d(a_1,\dots,a_r)\,\mathbb Z.$$</div>` },
    { q: 15, t: "d est un multiple commun", h: R`<p><span data-k="appartient">Être dans $a\mathbb Z$, c'est être un multiple de $a$.</span></p>`, b: R`<p>Notons $d = d(a_1,\dots,a_r)\geqslant1$. Pour chaque $i$, $d\in d\mathbb Z = \bigcap_ja_j\mathbb Z\subset a_i\mathbb Z$, donc <span data-k="appartient">$a_i\mid d$</span>.</p>` },
    { q: 15, t: "d est le plus petit", h: R`<p>Un autre multiple commun $m$ est dans l'intersection, donc dans $d\mathbb Z$.</p>`, b: R`<p>Soit $m\geqslant1$ divisible par tous les $a_i$. Alors $m\in\bigcap_ia_i\mathbb Z = d\mathbb Z$, donc $d\mid m$, donc $d\leqslant m$.</p><div class="sbox">$$d(a_1,\dots,a_r) = \min\{m\geqslant1 : a_1\mid m,\dots,a_r\mid m\}.$$</div><p>On retient surtout : <b>tout multiple commun est un multiple du PPCM</b>.</p>` },
    { q: 16, t: "Premières valeurs", h: R`<p>Chercher le plus petit entier divisible par $1,\dots,n$.</p>`, b: R`<p>$d_2 = \operatorname{PPCM}(1,2) = 2$, $d_3 = \operatorname{PPCM}(1,2,3) = 6$, $d_4 = \operatorname{PPCM}(1,2,3,4) = 12$ ($6$ n'est pas divisible par $4$, $12$ l'est).</p>` },
    { q: 16, t: "d_n ≤ n!", h: R`<p>$n!$ est un multiple commun de $1,\dots,n$.</p>`, b: R`<p>$n! = 1\times2\times\dots\times n$ est divisible par chaque $k\leqslant n$. Par Q15, <span data-k="dn">$d_n$</span> est le plus petit tel entier :</p><div class="sbox">$$d_n\leqslant n!.$$</div><p>C'est très grossier : $d_{10} = 2520$ alors que $10! = 3\,628\,800$.</p>` },
    { q: 17, t: "Le produit est un multiple commun", h: R`<p>Notons $D = \prod_{p\leqslant n}p^{k_p}$. Il faut voir que chaque $k\leqslant n$ divise $D$ : <span data-k="expo">les exposants de $k$ sont au plus les $k_p$</span>.</p>`, b: R`<p>Soit $D = \prod_{p\leqslant n}p^{k_p}$ et $k\in\{1,\dots,n\}$. On décompose $k = \prod_pp^{v_p(k)}$ ; les premiers qui apparaissent sont $\leqslant k\leqslant n$. Pour chacun, <span data-k="expo">$p^{v_p(k)}\leqslant k\leqslant n$, donc $v_p(k)\leqslant k_p$</span> par définition de <span data-k="kp">$k_p$</span>. Donc $k\mid D$.</p><p>$D$ est un multiple commun de $1,\dots,n$, donc par Q15 : $d_n\mid D$.</p>`, rappels: ["an-valuation"] },
    { q: 17, t: "Le produit divise d_n", h: R`<p>Chaque $p^{k_p}$ est un entier entre $1$ et $n$, donc divise $d_n$ ; et ces puissances de premiers distincts sont premières entre elles.</p>`, b: R`<p>Pour $p\leqslant n$, $p^{k_p}\in\{1,\dots,n\}$, donc $p^{k_p}\mid d_n$. Ces nombres sont premiers entre eux deux à deux (premiers distincts), donc leur produit $D$ divise $d_n$.</p><p>$d_n\mid D$ et $D\mid d_n$, avec $d_n,D\geqslant1$ :</p><div class="sbox">$$d_n = \prod_{\substack{p\leqslant n\\ p\ \text{premier}}}p^{k_p}.$$</div><p>Exemple $n = 10$ : $2^3\cdot3^2\cdot5\cdot7 = 2520$.</p>`, rappels: ["an-euclide"] },
    { q: 18, t: "La formule de k_p", h: R`<p><span data-k="log">Passer au logarithme dans $p^k\leqslant n$.</span></p>`, b: R`<p><span data-k="log">$p^k\leqslant n\iff k\leqslant\frac{\ln n}{\ln p}$</span>. Le plus grand entier $k$ qui convient est la partie entière :</p><div class="sbox">$$k_p = \left\lfloor\frac{\ln n}{\ln p}\right\rfloor.$$</div>`, rappels: ["an-pe"] },
    { q: 18, t: "d_n ≤ n^π(n)", h: R`<p>Dans le produit de Q17, chaque facteur $p^{k_p}$ est $\leqslant n$, et il y a $\pi(n)$ facteurs.</p>`, b: R`<p>Par définition, $p^{k_p}\leqslant n$. Le produit de Q17 a $\pi(n)$ facteurs, tous $\leqslant n$ :</p><div class="sbox">$$d_n\leqslant n^{\pi(n)}.$$</div>` },
    { q: 19, t: "Traduire le théorème des nombres premiers", h: R`<p>Un équivalent se traduit avec un $\varepsilon$ : à partir d'un rang, $\pi(n)\leqslant(1+\varepsilon)\frac n{\ln n}$.</p>`, b: R`<p>Comme $\pi(n)\sim\frac n{\ln n}$, pour tout $\varepsilon>0$ il existe $N$ tel que, pour $n\geqslant N$ : $\pi(n)\leqslant(1+\varepsilon)\frac n{\ln n}$.</p>`, rappels: ["an-equiv"] },
    { q: 19, t: "Conclure avec ε bien choisi", h: R`<p>$n^{\pi(n)} = e^{\pi(n)\ln n}$ : le $\ln n$ se simplifie. <span data-k="eps">Il suffit de prendre $1+\varepsilon = \ln3$.</span></p>`, b: R`<p>Pour $n\geqslant N$, avec Q18 :</p>$$d_n\leqslant n^{\pi(n)} = e^{\pi(n)\ln n}\leqslant e^{(1+\varepsilon)n}.$$<p><span data-k="eps">On choisit $\varepsilon = \ln3-1>0$</span> (car $3>e$) : $e^{(1+\varepsilon)n} = e^{n\ln3} = 3^n$.</p><div class="sbox">$$\exists N\in\mathbb N^*,\ \forall n\geqslant N,\qquad d_n\leqslant3^n.$$</div><p>En réalité $d_n = e^{n+o(n)}$ : $d_{20} = 232\,792\,560\approx e^{19{,}3}$.</p>` }
  ],
  ctx: {
    "an-sous-groupes": R`<p>$\bigcap a_i\mathbb Z$ est un sous-groupe de $\mathbb Z$.</p>`,
    "an-valuation": R`<p>Décomposition de $k\leqslant n$ en facteurs premiers.</p>`,
    "an-euclide": R`<p>Les $p^{k_p}$ sont premiers entre eux deux à deux.</p>`,
    "an-pe": R`<p>$k_p$ est le plus grand entier $\leqslant\frac{\ln n}{\ln p}$.</p>`,
    "an-equiv": R`<p>$u_n = \pi(n)$ et $v_n = \frac n{\ln n}$.</p>`
  },
  piege: R`En Q17, montrer seulement que le produit est un multiple commun ne suffit pas : il faut aussi qu'il divise $d_n$ (ou qu'il soit le plus petit).`,
  methode: R`Pour identifier un PPCM, on montre deux divisibilités : le candidat est un multiple commun (donc multiple du PPCM) et il divise le PPCM.`
}
]);
LEMME.exercises([
{
  id: "cc25-m1-c", subj: "annales", year: "mp", chap: 0, part: "C", kind: "probleme", qnav: true, side: true, level: 3, time: "40 min",
  title: "Un critère d'irrationalité",
  enonce: R`<p>Soit $\alpha\in\mathbb R_+$. On suppose qu'il existe deux suites d'entiers naturels non nuls $(p_n)$ et $(q_n)$ telles que $$\lim_{n\to+\infty}\frac{p_n}{q_n} = \alpha\qquad\text{et}\qquad\alpha-\frac{p_n}{q_n}\underset{n\to+\infty}{=}o\Big(\frac1{q_n}\Big).$$ On suppose en outre que $\frac{p_n}{q_n}\neq\alpha$ pour tout $n$.</p>
<ol start="20"><li>Montrer que $\alpha$ est un nombre irrationnel.</li></ol>
<p>Soit $\beta = \displaystyle\sum_{n=1}^{+\infty}\frac1{10^{n!}}$.</p>
<ol start="21"><li>Justifier que $\beta$ est bien défini, puis montrer que $\beta$ est irrationnel.</li>
<li>Soit $n\in\mathbb N^*$. Justifier que <span data-k="zeta">$\zeta(2) = \displaystyle\sum_{k=1}^{+\infty}\frac1{k^2}$</span> est bien défini, puis montrer que l'on peut écrire $\displaystyle\sum_{k=1}^n\frac1{k^2} = \frac{p_n}{q_n}$ avec $p_n\in\mathbb N^*$ et $q_n = d_n^2$.</li>
<li>Peut-on appliquer le résultat de Q20 à ces suites pour conclure sur l'irrationalité de $\zeta(2)$ ?</li></ol>`,
  decode: {
    donnees: [R`$\alpha-\frac{p_n}{q_n} = o\big(\frac1{q_n}\big)$ : l'erreur est négligeable devant $\frac1{q_n}$.`, R`$d_n = \operatorname{PPCM}(1,\dots,n)$ (partie B).`],
    but: R`Un nombre rationnel ne peut pas être approché « trop bien » par des fractions : en déduire un critère d'irrationalité, l'appliquer à $\beta$, et voir pourquoi il ne s'applique pas directement à $\zeta(2)$.`,
    cles: {
      petito: R`$u_n = o\big(\frac1{q_n}\big)$ signifie $q_nu_n\to0$.`,
      zeta: R`$\zeta(2) = 1+\frac14+\frac19+\dots\approx1{,}6449$. On sait (Euler) que $\zeta(2) = \frac{\pi^2}6$.`,
      entier: R`$pq_n-qp_n$ est un entier : s'il tend vers $0$, il finit par valoir exactement $0$.`,
      reste: R`Le reste $\beta-S_n = \sum_{k>n}10^{-k!}$ est dominé par son premier terme $10^{-(n+1)!}$.`,
      kfact: R`Pour $k\geqslant n+1$ : $k!-(n+1)!\geqslant k-(n+1)$, car les factorielles augmentent d'au moins $1$ à chaque pas.`,
      denom: R`$k\mid d_n$ pour $k\leqslant n$, donc $k^2\mid d_n^2$ et $\frac{d_n^2}{k^2}$ est un entier.`,
      minore: R`Comparaison série-intégrale : $\frac1{k^2}\geqslant\int_k^{k+1}\frac{dx}{x^2}$, car $\frac1{x^2}$ décroît.`
    }
  },
  steps: [
    { q: 20, t: "Raisonner par l'absurde", h: R`<p>Si $\alpha = \frac pq$, l'écart $\alpha-\frac{p_n}{q_n}$ s'écrit avec le numérateur entier $pq_n-qp_n$.</p>`, b: R`<p>Supposons $\alpha = \frac pq$ avec $p\in\mathbb N$, $q\in\mathbb N^*$. Alors</p>$$\alpha-\frac{p_n}{q_n} = \frac{pq_n-qp_n}{qq_n},\qquad\text{donc}\qquad pq_n-qp_n = q\cdot q_n\Big(\alpha-\frac{p_n}{q_n}\Big).$$` },
    { q: 20, t: "Un entier qui tend vers 0", h: R`<p><span data-k="petito">$q_n\big(\alpha-\frac{p_n}{q_n}\big)\to0$</span>, et <span data-k="entier">un entier qui tend vers $0$ est nul à partir d'un rang</span>.</p>`, b: R`<p>Par hypothèse <span data-k="petito">$q_n\big(\alpha-\frac{p_n}{q_n}\big)\to0$</span>, donc $pq_n-qp_n\to0$. <span data-k="entier">C'est une suite d'entiers : elle est nulle à partir d'un rang $n_0$.</span> Pour $n\geqslant n_0$, $\frac{p_n}{q_n} = \frac pq = \alpha$ : contradiction avec $\frac{p_n}{q_n}\neq\alpha$.</p><div class="sbox">$$\alpha\notin\mathbb Q.$$</div><p>Idée à retenir : deux fractions distinctes de dénominateurs $q$ et $q_n$ sont écartées d'au moins $\frac1{qq_n}$.</p>`, rappels: ["an-entier"] },
    { q: 21, t: "β est bien défini", h: R`<p>Comparer $10^{-n!}$ à une suite géométrique : $n!\geqslant n$.</p>`, b: R`<p>Pour $n\geqslant1$, $n!\geqslant n$, donc $0< 10^{-n!}\leqslant\big(\frac1{10}\big)^n$, terme d'une série géométrique convergente. Par comparaison, la série converge : $\beta$ est bien défini ($\beta = 0{,}110001000\dots$).</p>`, rappels: ["an-comparaison"] },
    { q: 21, t: "Les fractions qui approchent β", h: R`<p>Prendre pour $\frac{p_n}{q_n}$ la somme partielle $S_n$, réduite au dénominateur $10^{n!}$.</p>`, b: R`<p>Soit $S_n = \sum_{k=1}^n10^{-k!}$. Pour $k\leqslant n$, $10^{k!}$ divise $10^{n!}$, donc</p>$$S_n = \frac{p_n}{q_n},\qquad q_n = 10^{n!},\qquad p_n = \sum_{k=1}^n10^{n!-k!}\in\mathbb N^*.$$<p>$S_n\to\beta$, et $S_n< \beta$ (on a retiré des termes $>0$) : $\frac{p_n}{q_n}\neq\beta$.</p>` },
    { q: 21, t: "Le reste est minuscule", h: R`<p><span data-k="reste">Majorer le reste par une série géométrique qui commence à $10^{-(n+1)!}$</span>, puis multiplier par $q_n = 10^{n!}$.</p>`, b: R`<p>Pour $k\geqslant n+1$, <span data-k="kfact">$k!\geqslant(n+1)!+(k-n-1)$</span>, donc</p>$$0< \beta-S_n = \sum_{k\geqslant n+1}10^{-k!}\leqslant10^{-(n+1)!}\sum_{j\geqslant0}10^{-j} = \frac{10}9\,10^{-(n+1)!}.$$<p>Donc <span data-k="reste">$q_n(\beta-S_n)\leqslant\frac{10}9\,10^{n!-(n+1)!} = \frac{10}9\,10^{-n\cdot n!}\to0$</span> : c'est un $o\big(\frac1{q_n}\big)$. Par Q20 :</p><div class="sbox">$$\beta\notin\mathbb Q.$$</div>`, rappels: ["an-geo"] },
    { q: 22, t: "ζ(2) est bien défini", h: R`<p>Série de Riemann d'exposant $2>1$.</p>`, b: R`<p>$\sum\frac1{k^2}$ est une série de Riemann d'exposant $2>1$ : elle converge et <span data-k="zeta">$\zeta(2)$</span> est bien défini.</p>`, rappels: ["an-comparaison"] },
    { q: 22, t: "Réduire au dénominateur d_n²", h: R`<p><span data-k="denom">Chaque $k\leqslant n$ divise $d_n$.</span></p>`, b: R`<p><span data-k="denom">Pour $k\leqslant n$, $k\mid d_n$, donc $k^2\mid d_n^2$</span>. Ainsi</p>$$\sum_{k=1}^n\frac1{k^2} = \frac1{d_n^2}\sum_{k=1}^n\frac{d_n^2}{k^2} = \frac{p_n}{q_n},\qquad p_n = \sum_{k=1}^n\frac{d_n^2}{k^2}\in\mathbb N^*,\quad q_n = d_n^2.$$<p>Exemple $n = 3$ : $d_3 = 6$, $1+\frac14+\frac19 = \frac{36+9+4}{36} = \frac{49}{36}$.</p>` },
    { q: 23, t: "Minorer l'erreur", h: R`<p>Pour appliquer Q20, il faudrait $d_n^2\big(\zeta(2)-\frac{p_n}{q_n}\big)\to0$. <span data-k="minore">Minorer le reste par une intégrale.</span></p>`, b: R`<p><span data-k="minore">Comme $x\mapsto\frac1{x^2}$ décroît, $\frac1{k^2}\geqslant\int_k^{k+1}\frac{dx}{x^2}$</span>, donc</p>$$\zeta(2)-\frac{p_n}{q_n} = \sum_{k\geqslant n+1}\frac1{k^2}\geqslant\int_{n+1}^{+\infty}\frac{dx}{x^2} = \frac1{n+1}.$$` },
    { q: 23, t: "Le critère ne s'applique pas", h: R`<p>$d_n\geqslant n$ : le produit $q_n\times$ erreur ne peut pas tendre vers $0$.</p>`, b: R`<p>$d_n$ est un multiple de $n$, donc $d_n\geqslant n$ et</p>$$q_n\Big(\zeta(2)-\frac{p_n}{q_n}\Big)\geqslant\frac{n^2}{n+1}\xrightarrow[n\to+\infty]{}+\infty.$$<div class="sbox"><p style="margin:0;text-align:center"><b>Non</b> : l'erreur n'est pas un $o\big(\frac1{q_n}\big)$, Q20 ne s'applique pas.</p></div><p>Les sommes partielles convergent trop lentement (erreur en $\frac1n$). Les parties D et E construisent de meilleures approximations, avec une erreur qui décroît géométriquement.</p>` }
  ],
  ctx: {
    "an-entier": R`<p>La suite d'entiers $pq_n-qp_n$ tend vers $0$.</p>`,
    "an-comparaison": R`<p>$10^{-n!}\leqslant10^{-n}$ (Q21) ; Riemann avec $a = 2$ (Q22).</p>`,
    "an-geo": R`<p>Raison $\frac1{10}$, à partir de $10^{-(n+1)!}$.</p>`
  },
  piege: R`Le critère de Q20 demande une erreur $o\big(\frac1{q_n}\big)$ : une bonne convergence de $\frac{p_n}{q_n}$ ne suffit pas, il faut qu'elle soit rapide <b>par rapport au dénominateur</b>.`,
  methode: R`Pour prouver $\alpha\notin\mathbb Q$ : trouver des fractions $\frac{p_n}{q_n}\neq\alpha$ avec $q_n\big|\alpha-\frac{p_n}{q_n}\big|\to0$. Si $\alpha = \frac pq$, l'entier $pq_n-qp_n$ serait à la fois non nul et de limite nulle.`
}
]);
LEMME.exercises([
{
  id: "cc25-m1-d", subj: "annales", year: "mp", chap: 0, part: "D", kind: "probleme", qnav: true, side: true, level: 4, time: "1 h",
  title: "Calcul d'une intégrale double",
  enonce: R`<h4>I – Une intégrale double</h4>
<p>Soient $r$ et $s$ deux entiers naturels strictement positifs tels que $r\geqslant s$.</p>
<ol start="24"><li>Soit $y\in\,]0,1[$. Justifier que la fonction $x\mapsto\dfrac{x^ry^s}{1-xy}$ est intégrable sur $[0,1]$.</li></ol>
<p>On pose, pour $y\in\,]0,1[$, <span data-k="frs">$f_{r,s}(y) = \displaystyle\int_0^1\frac{x^ry^s}{1-xy}\,dx$</span>.</p>
<ol start="25"><li>Montrer que $f_{r,s}$ est continue et intégrable sur $]0,1[$.</li></ol>
<p>On pose <span data-k="jrs">$J_{r,s} = \displaystyle\int_0^1f_{r,s}(y)\,dy = \int_0^1\!\!\int_0^1\frac{x^ry^s}{1-xy}\,dx\,dy$</span>.</p>
<ol start="26"><li>Montrer que $J_{r,s} = \displaystyle\sum_{k=0}^{+\infty}\frac1{(r+k+1)(s+k+1)}$.</li></ol>
<h4>II – Une écriture sous forme de quotients</h4>
<p>Dans cette sous-partie, on suppose $r>s$.</p>
<ol start="27"><li>Justifier que $$\frac1{(r+k+1)(s+k+1)} = \frac1{r-s}\left(\frac1{s+k+1}-\frac1{r+k+1}\right).$$</li>
<li>En déduire que $J_{r,s} = \dfrac1{r-s}\displaystyle\sum_{k=0}^{+\infty}\left(\frac1{s+k+1}-\frac1{r+k+1}\right)$.</li>
<li>En déduire que $J_{r,s} = \dfrac1{r-s}\displaystyle\sum_{k=s+1}^{r}\frac1k$.</li>
<li>En déduire que l'on peut écrire $J_{r,s} = \dfrac{p_{r,s}}{q_{r,s}}$ avec $p_{r,s}$ et $q_{r,s}$ des entiers naturels et $q_{r,s}$ divisant $d_r^2$.</li></ol>
<p>On admettra que $J_{r,r} = \zeta(2)-\displaystyle\sum_{k=1}^r\frac1{k^2}$.</p>`,
  decode: {
    donnees: [R`$r\geqslant s\geqslant1$ entiers ; pour $x\in[0,1]$ et $y\in\,]0,1[$, $0\leqslant xy< 1$.`, R`$d_r = \operatorname{PPCM}(1,\dots,r)$.`],
    but: R`Calculer l'intégrale double $J_{r,s}$ : c'est une série, et pour $r\neq s$ c'est même un nombre rationnel de dénominateur divisant $d_r^2$.`,
    cles: {
      frs: R`Intégrale « à $y$ fixé » : on intègre d'abord en $x$, $y$ joue le rôle d'un paramètre.`,
      jrs: R`On intègre ensuite le résultat en $y$ : c'est une intégrale double calculée « en deux temps ». Avec $r = s = 0$ on obtiendra $\zeta(2)$.`,
      denom: R`Pour $x\in[0,1]$ et $y\in\,]0,1[$ : $1-xy\geqslant1-y>0$, le dénominateur ne s'annule pas.`,
      borne: R`$x^r\leqslant1$ et $\int_0^1\frac{dx}{1-xy} = \Big[-\frac{\ln(1-xy)}y\Big]_0^1 = \frac{-\ln(1-y)}y$.`,
      lnint: R`$\int_0^1-\ln(1-y)\,dy = \int_0^1-\ln t\,dt = \big[t-t\ln t\big]_0^1 = 1$ (avec $u = 1-y$ puis $t\ln t\to0$ en $0$).`,
      geo: R`$\frac1{1-xy} = \sum_{k\geqslant0}(xy)^k$ car $0\leqslant xy< 1$.`,
      telesc: R`Les deux sommes sont décalées de $r-s$ : presque tous les termes se compensent.`,
      div: R`$k\leqslant r$ et $r-s\leqslant r$ divisent $d_r$, donc $k(r-s)$ divise $d_r\cdot d_r = d_r^2$.`
    }
  },
  steps: [
    { q: 24, t: "Continue sur un segment", h: R`<p>Une fonction continue sur un segment est intégrable : il suffit de voir que <span data-k="denom">le dénominateur ne s'annule pas</span>.</p>`, b: R`<p>Pour $x\in[0,1]$ : <span data-k="denom">$1-xy\geqslant1-y>0$</span>. La fonction $x\mapsto\frac{x^ry^s}{1-xy}$ est un quotient de fonctions continues à dénominateur non nul : elle est continue sur le segment $[0,1]$, donc intégrable.</p>`, rappels: ["an-integrable"] },
    { q: 25, t: "La continuité par changement de variable", h: R`<p>Poser $u = xy$ fait sortir $y$ de l'intégrande et le met dans la borne : on reconnaît une primitive.</p>`, b: R`<p>Avec $u = xy$ ($du = y\,dx$, et $u$ va de $0$ à $y$) :</p>$$f_{r,s}(y) = \int_0^y\frac{(u/y)^ry^s}{1-u}\,\frac{du}y = y^{s-r-1}\,F(y),\qquad F(y) = \int_0^y\frac{u^r}{1-u}\,du.$$<p>$u\mapsto\frac{u^r}{1-u}$ est continue sur $[0,1[$, donc $F$ (sa primitive nulle en $0$) est continue, et même $\mathcal C^1$, sur $[0,1[$. Donc <span data-k="frs">$f_{r,s}$</span> est continue sur $]0,1[$.</p>` },
    { q: 25, t: "Une majoration simple", h: R`<p>Majorer $x^r$ par $1$ : <span data-k="borne">l'intégrale de $\frac1{1-xy}$ se calcule</span>.</p>`, b: R`<p>Pour $y\in\,]0,1[$, $0\leqslant x^r\leqslant1$ et $y^s\leqslant y$ (car $s\geqslant1$), donc</p>$$0\leqslant f_{r,s}(y)\leqslant y\int_0^1\frac{dx}{1-xy} = y\cdot\frac{-\ln(1-y)}y = -\ln(1-y).$$` },
    { q: 25, t: "La majorante est intégrable", h: R`<p><span data-k="lnint">$-\ln(1-y)$ est intégrable sur $[0,1[$</span> : $\ln$ est intégrable près de $0$.</p>`, b: R`<p><span data-k="lnint">$\int_0^1-\ln(1-y)\,dy = 1$</span> : $y\mapsto-\ln(1-y)$ est positive et intégrable sur $[0,1[$. Par comparaison :</p><div class="sbox">$$f_{r,s}\ \text{est continue et intégrable sur}\ ]0,1[.$$</div><p>Remarque : le même raisonnement marche pour $s = 0$ (on garde $\frac{-\ln(1-y)}y$, qui tend vers $1$ en $0$) et pour tous $r,s\in\mathbb N$. On s'en servira dans la partie E.</p>`, rappels: ["an-integrable"] },
    { q: 26, t: "Développer en série géométrique", h: R`<p><span data-k="geo">$\frac1{1-xy} = \sum_k(xy)^k$</span> : l'intégrande devient une série de monômes.</p>`, b: R`<p>À $y\in\,]0,1[$ fixé, pour tout $x\in[0,1]$ :</p>$$\frac{x^ry^s}{1-xy} = x^ry^s\sum_{k\geqslant0}(xy)^k = \sum_{k\geqslant0}x^{r+k}y^{s+k}.$$<p>La convergence est normale sur $[0,1]$ (en $x$) : $\sup_{x\in[0,1]}|x^{r+k}y^{s+k}|\leqslant y^{s+k}$, et $\sum_ky^{s+k}$ converge car $y< 1$.</p>`, rappels: ["an-geo"] },
    { q: 26, t: "Intégrer en x", h: R`<p>Convergence normale sur un segment : on intègre terme à terme.</p>`, b: R`<p>Par intégration terme à terme sur le segment $[0,1]$, et $\int_0^1x^{r+k}\,dx = \frac1{r+k+1}$ :</p>$$f_{r,s}(y) = \sum_{k\geqslant0}\frac{y^{s+k}}{r+k+1}.$$`, rappels: ["an-terme-a-terme"] },
    { q: 26, t: "Intégrer en y", h: R`<p>Les termes $g_k(y) = \frac{y^{s+k}}{r+k+1}$ sont positifs : le théorème d'intégration terme à terme pour les séries positives s'applique sur $]0,1[$.</p>`, b: R`<p>Les $g_k(y) = \frac{y^{s+k}}{r+k+1}$ sont continues, positives, intégrables sur $]0,1[$, et leur somme $f_{r,s}$ est continue (Q25). Donc</p>$$J_{r,s} = \sum_{k\geqslant0}\int_0^1\frac{y^{s+k}}{r+k+1}\,dy = \sum_{k\geqslant0}\frac1{(r+k+1)(s+k+1)}.$$<p>Cette série converge : son terme est $\leqslant\frac1{(k+1)^2}$.</p><div class="sbox">$$J_{r,s} = \sum_{k=0}^{+\infty}\frac1{(r+k+1)(s+k+1)}.$$</div><p>Cette formule est symétrique en $r$ et $s$ et vaut pour tous $r,s\in\mathbb N$. Pour $r = s = 0$ : <span data-k="jrs">$J_{0,0} = \sum_{k\geqslant1}\frac1{k^2} = \zeta(2)$</span>.</p>`, rappels: ["an-terme-a-terme"] },
    { q: 27, t: "Réduire au même dénominateur", h: R`<p>Calculer le membre de droite.</p>`, b: R`<p>$\frac1{s+k+1}-\frac1{r+k+1} = \frac{(r+k+1)-(s+k+1)}{(s+k+1)(r+k+1)} = \frac{r-s}{(r+k+1)(s+k+1)}$. On divise par $r-s\neq0$ :</p><div class="sbox">$$\frac1{(r+k+1)(s+k+1)} = \frac1{r-s}\left(\frac1{s+k+1}-\frac1{r+k+1}\right).$$</div><p>C'est la décomposition en éléments simples de $\frac1{(X+r+1)(X+s+1)}$.</p>` },
    { q: 28, t: "Injecter dans la série", h: R`<p>Q26 et Q27, puis sortir la constante $\frac1{r-s}$.</p>`, b: R`<p>On remplace chaque terme de la série de Q26 par l'expression de Q27. La série $\sum\big(\frac1{s+k+1}-\frac1{r+k+1}\big)$ converge (c'est $(r-s)$ fois une série convergente), et :</p><div class="sbox">$$J_{r,s} = \frac1{r-s}\sum_{k=0}^{+\infty}\left(\frac1{s+k+1}-\frac1{r+k+1}\right).$$</div><p>Attention : on ne peut pas écrire $\sum\frac1{s+k+1}-\sum\frac1{r+k+1}$, ces deux séries divergent.</p>` },
    { q: 29, t: "Les sommes partielles télescopent", h: R`<p>Travailler sur une somme <b>finie</b> jusqu'à $N$, où l'on peut séparer. <span data-k="telesc">Réindexer pour voir les termes qui se compensent.</span></p>`, b: R`<p>Pour $N\in\mathbb N$, en posant $j = k+s+1$ puis $j = k+r+1$ :</p>$$\sum_{k=0}^N\Big(\frac1{s+k+1}-\frac1{r+k+1}\Big) = \sum_{j=s+1}^{N+s+1}\frac1j-\sum_{j=r+1}^{N+r+1}\frac1j = \sum_{j=s+1}^{r}\frac1j-\sum_{j=N+s+2}^{N+r+1}\frac1j.$$<p><span data-k="telesc">Les termes de $r+1$ à $N+s+1$ sont dans les deux sommes et disparaissent.</span></p>`, rappels: ["an-telesc"] },
    { q: 29, t: "Faire tendre N vers l'infini", h: R`<p>Le dernier morceau a $r-s$ termes, tous petits.</p>`, b: R`<p>$0\leqslant\sum_{j=N+s+2}^{N+r+1}\frac1j\leqslant\frac{r-s}{N+s+2}\to0$. Donc, avec Q28 :</p><div class="sbox">$$J_{r,s} = \frac1{r-s}\sum_{k=s+1}^{r}\frac1k.$$</div><p>Exemple : $J_{2,1} = \frac12$ et $J_{3,1} = \frac12\big(\frac12+\frac13\big) = \frac5{12}$.</p>` },
    { q: 30, t: "Multiplier par d_r²", h: R`<p><span data-k="div">$k(r-s)$ divise $d_r^2$</span> pour chaque terme de la somme.</p>`, b: R`<p>Pour $s+1\leqslant k\leqslant r$ : $k\mid d_r$, et $1\leqslant r-s\leqslant r$ donc $(r-s)\mid d_r$. <span data-k="div">Donc $k(r-s)\mid d_r^2$</span> et</p>$$J_{r,s} = \frac1{d_r^2}\sum_{k=s+1}^r\frac{d_r^2}{k(r-s)}.$$<div class="sbox">$$J_{r,s} = \frac{p_{r,s}}{q_{r,s}},\qquad p_{r,s} = \sum_{k=s+1}^r\frac{d_r^2}{k(r-s)}\in\mathbb N,\qquad q_{r,s} = d_r^2.$$</div><p>Exemple : $J_{3,1} = \frac5{12} = \frac{15}{36}$ et $d_3^2 = 36$.</p>` }
  ],
  ctx: {
    "an-integrable": R`<p>Continuité sur $[0,1]$ (Q24), domination par $-\ln(1-y)$ (Q25).</p>`,
    "an-geo": R`<p>Raison $q = xy\in[0,1[$.</p>`,
    "an-terme-a-terme": R`<p>En $x$ : convergence normale sur $[0,1]$. En $y$ : série de fonctions positives sur $]0,1[$.</p>`,
    "an-telesc": R`<p>Deux sommes harmoniques décalées de $r-s$.</p>`
  },
  piege: R`En Q28-Q29, séparer la série en deux séries harmoniques, qui divergent toutes les deux : il faut passer par les sommes partielles.`,
  methode: R`Une intégrale double de $\frac{x^ry^s}{1-xy}$ se calcule en développant $\frac1{1-xy}$ en série géométrique, puis en intégrant terme à terme : en $x$ sur un segment, puis en $y$ avec des termes positifs.`
}
]);
(() => {
const { GRAPH } = window.__LA;
const phi = (Math.sqrt(5) - 1) / 2;
LEMME.exercises([
{
  id: "cc25-m1-e", subj: "annales", year: "mp", chap: 0, part: "E", kind: "probleme", qnav: true, side: true, level: 5, time: "1 h 30",
  title: "Une démonstration de l'irrationalité de ζ(2)",
  enonce: R`<p>On définit sur $[0,1]$ la fonction <span data-k="pn">$P_n(x) = \dfrac1{n!}\,\dfrac{d^n}{dx^n}\big(x^n(1-x)^n\big)$</span>.</p>
<ol start="31"><li>Soit $n\in\mathbb N^*$. Justifier que $P_n$ est une fonction polynomiale de degré $n$ à coefficients dans $\mathbb Z$.</li></ol>
<p>On pose dans la suite $P_n(x) = \sum_{k=0}^na_kx^k$ et $(1-y)^n = \sum_{k=0}^nb_ky^k$, avec $a_k,b_k\in\mathbb Z$.</p>
<ol start="32"><li>Soit $n\in\mathbb N^*$. Justifier l'existence de <span data-k="in">$I_n = \displaystyle\int_0^1\!\!\int_0^1\frac{(1-y)^nP_n(x)}{1-xy}\,dx\,dy$</span> et montrer que $I_n = \displaystyle\sum_{\substack{r,s=0\\ r\neq s}}^na_rb_sJ_{r,s}+\sum_{r=0}^na_rb_rJ_{r,r}$.</li>
<li>Soit $n\in\mathbb N^*$. En déduire qu'il existe deux entiers relatifs $p_n$ et $q_n$ tels que $I_n = \dfrac{p_n+\zeta(2)q_n}{d_n^2}$.</li></ol>
<p>On admettra dans toute la suite que $p_n$ et $q_n$ sont non nuls pour tout $n\in\mathbb N^*$.</p>
<ol start="34"><li>Soit $n\in\mathbb N^*$. Montrer que pour tout $y\in\,]0,1[$, $\displaystyle\int_0^1\frac{P_n(x)}{1-xy}\,dx = (-y)^n\int_0^1\frac{x^n(1-x)^n}{(1-xy)^{n+1}}\,dx$.</li>
<li>En déduire que $I_n = (-1)^n\displaystyle\int_0^1\!\!\int_0^1\frac{x^n(1-x)^ny^n(1-y)^n}{(1-xy)^{n+1}}\,dx\,dy$.</li>
<li>Montrer que $\forall(x,y)\in\,]0,1[^2$, $\dfrac{x(1-x)y(1-y)}{1-xy}\leqslant\dfrac{5\sqrt5-11}2$.</li>
<li>Soit $n\in\mathbb N^*$. En déduire que $|I_n|\leqslant\zeta(2)\left(\dfrac{5\sqrt5-11}2\right)^n$.</li>
<li>Montrer qu'il existe $N\in\mathbb N^*$ tel que pour tout $n\geqslant N$, $0< |p_n+\zeta(2)q_n|\leqslant\zeta(2)\left(\dfrac56\right)^n$. On pourra utiliser, sans la prouver, l'inégalité $9\cdot\dfrac{5\sqrt5-11}2\leqslant\dfrac56$.</li>
<li>Montrer que $\zeta(2)$ est un nombre irrationnel.</li>
<li>On admet, uniquement dans cette question, que $\zeta(2) = \dfrac{\pi^2}6$. Montrer que $\pi$ est un nombre irrationnel.</li></ol>`,
  decode: {
    donnees: [R`Partie B : $d_n\leqslant3^n$ pour $n\geqslant N$.`, R`Partie D : $J_{r,s} = \frac{p_{r,s}}{q_{r,s}}$ avec $q_{r,s}\mid d_r^2$ si $r\neq s$, $J_{r,r} = \zeta(2)-\sum_{k\leqslant r}\frac1{k^2}$ et $J_{0,0} = \zeta(2)$.`],
    but: R`Fabriquer des nombres $p_n+\zeta(2)q_n$ entiers « à $\zeta(2)$ près », non nuls, mais qui tendent vers $0$ : c'est incompatible avec $\zeta(2)$ rationnel. C'est la preuve de Beukers (1979).`,
    cles: {
      pn: R`Polynôme de Legendre (décalé sur $[0,1]$). Exemples : $P_1(x) = 1-2x$, $P_2(x) = 1-6x+6x^2$.`,
      in: R`Une intégrale double qui a deux visages : une combinaison de $J_{r,s}$ (Q33, côté arithmétique) et une intégrale minuscule (Q37, côté analyse).`,
      dev: R`Binôme : $x^n(1-x)^n = \sum_{j=0}^n\binom nj(-1)^jx^{n+j}$.`,
      deriv: R`$\frac1{n!}\big(x^{n+j}\big)^{(n)} = \frac{(n+j)!}{n!\,j!}x^j = \binom{n+j}{n}x^j$ : un entier fois $x^j$.`,
      sym: R`$J_{r,s} = J_{s,r}$ : la formule de Q26 est symétrique. Pour $r< s$, on applique Q30 à $J_{s,r}$.`,
      racines: R`$0$ et $1$ sont racines d'ordre $n$ de $x^n(1-x)^n$, donc racines de ses dérivées jusqu'à l'ordre $n-1$.`,
      hj: R`$\frac{d}{dx}\Big(\frac{j!\,y^j}{(1-xy)^{j+1}}\Big) = \frac{(j+1)!\,y^{j+1}}{(1-xy)^{j+2}}$.`,
      amgm: R`$x+y\geqslant2\sqrt{xy}$, donc $(1-x)(1-y) = 1-(x+y)+xy\leqslant1-2t+t^2 = (1-t)^2$ avec $t = \sqrt{xy}$.`,
      phi: R`$\varphi = \frac{\sqrt5-1}2\approx0{,}618$ vérifie $\varphi^2+\varphi-1 = 0$, soit $\varphi^2 = 1-\varphi$ et $1+\varphi = \frac1\varphi$.`,
      lien: R`Q33 : $p_n+\zeta(2)q_n = d_n^2\,I_n$.`,
      contra: R`Si $\zeta(2) = \frac ab$, alors $b(p_n+\zeta(2)q_n) = bp_n+aq_n$ est un entier.`
    }
  },
  steps: [
    { q: 31, t: "Développer avant de dériver", h: R`<p><span data-k="dev">Développer $x^n(1-x)^n$ par le binôme</span> : dériver $n$ fois un monôme est facile.</p>`, b: R`<p><span data-k="dev">$x^n(1-x)^n = \sum_{j=0}^n\binom nj(-1)^jx^{n+j}$</span>, un polynôme de degré $2n$.</p>`, rappels: ["an-binome"] },
    { q: 31, t: "Dériver n fois", h: R`<p><span data-k="deriv">La dérivée $n$-ième de $x^{n+j}$, divisée par $n!$, est $\binom{n+j}{n}x^j$.</span></p>`, b: R`<p><span data-k="deriv">$\frac1{n!}\big(x^{n+j}\big)^{(n)} = \frac{(n+j)!}{n!\,j!}x^j = \binom{n+j}{j}x^j$</span>, donc</p>$$P_n(x) = \sum_{j=0}^n(-1)^j\binom nj\binom{n+j}{j}x^j.$$<p>Les coefficients sont des produits de coefficients binomiaux : des entiers. Le coefficient de $x^n$ vaut $(-1)^n\binom{2n}n\neq0$.</p><div class="sbox">$$P_n\ \text{est polynomiale, de degré}\ n,\ \text{à coefficients dans}\ \mathbb Z.$$</div><p>Exemple : $P_2(x) = 1-6x+6x^2$.</p>`, rappels: ["an-derivee-n"] },
    { q: 32, t: "Développer l'intégrande", h: R`<p>$(1-y)^nP_n(x)$ est un produit de deux sommes : c'est une combinaison des monômes $x^ry^s$.</p>`, b: R`$$(1-y)^nP_n(x) = \Big(\sum_{s=0}^nb_sy^s\Big)\Big(\sum_{r=0}^na_rx^r\Big) = \sum_{0\leqslant r,s\leqslant n}a_rb_s\,x^ry^s,$$<p>donc</p>$$\frac{(1-y)^nP_n(x)}{1-xy} = \sum_{0\leqslant r,s\leqslant n}a_rb_s\,\frac{x^ry^s}{1-xy}.$$` },
    { q: 32, t: "Existence et linéarité", h: R`<p>Chaque morceau donne une intégrale double $J_{r,s}$ qui existe (partie D, valable pour tous $r,s\in\mathbb N$).</p>`, b: R`<p>Pour chaque $(r,s)$, l'intégrale $J_{r,s}$ existe (Q24, Q25 et la remarque qui suit : le raisonnement vaut pour tous $r,s\in\mathbb N$). Une combinaison linéaire finie d'intégrales convergentes converge, donc <span data-k="in">$I_n$</span> existe et</p>$$I_n = \sum_{0\leqslant r,s\leqslant n}a_rb_sJ_{r,s}.$$<p>On sépare les couples $r\neq s$ et $r = s$ :</p><div class="sbox">$$I_n = \sum_{\substack{r,s=0\\ r\neq s}}^na_rb_sJ_{r,s}+\sum_{r=0}^na_rb_rJ_{r,r}.$$</div>` },
    { q: 33, t: "Les termes r ≠ s sont rationnels", h: R`<p>Q30, et <span data-k="sym">la symétrie $J_{r,s} = J_{s,r}$</span> pour le cas $r< s$.</p>`, b: R`<p>Si $r>s$, Q30 (dont la preuve marche aussi pour $s = 0$) donne $J_{r,s} = \frac{p_{r,s}}{d_r^2}$. Si $r< s$, <span data-k="sym">$J_{r,s} = J_{s,r} = \frac{p_{s,r}}{d_s^2}$</span>.</p><p>Comme $r,s\leqslant n$, $d_r$ et $d_s$ divisent $d_n$ (tout multiple commun de $1,\dots,n$ l'est de $1,\dots,r$). Donc $d_n^2J_{r,s}\in\mathbb N$ pour $r\neq s$.</p>`, rappels: ["an-sous-groupes"] },
    { q: 33, t: "Les termes r = s font apparaître ζ(2)", h: R`<p>Utiliser le résultat admis et Q22 pour la somme partielle.</p>`, b: R`<p>$J_{0,0} = \zeta(2)$ (Q26 avec $r = s = 0$). Pour $r\geqslant1$, $J_{r,r} = \zeta(2)-\sum_{k=1}^r\frac1{k^2}$, et par Q22 $d_r^2\sum_{k\leqslant r}\frac1{k^2}$ est un entier, donc $d_n^2\sum_{k\leqslant r}\frac1{k^2}$ aussi. Ainsi</p>$$d_n^2J_{r,r} = d_n^2\,\zeta(2)-m_r,\qquad m_r\in\mathbb Z.$$` },
    { q: 33, t: "Tout rassembler", h: R`<p>Multiplier $I_n$ par $d_n^2$ et regrouper ce qui multiplie $\zeta(2)$.</p>`, b: R`<p>Les $a_r,b_s$ sont entiers, donc</p>$$d_n^2I_n = \underbrace{\sum_{r\neq s}a_rb_s\,d_n^2J_{r,s}-\sum_ra_rb_rm_r}_{p_n\in\mathbb Z}+\zeta(2)\underbrace{d_n^2\sum_ra_rb_r}_{q_n\in\mathbb Z}.$$<div class="sbox">$$I_n = \frac{p_n+\zeta(2)\,q_n}{d_n^2},\qquad p_n,q_n\in\mathbb Z.$$</div>` },
    { q: 34, t: "Une première intégration par parties", h: R`<p>$P_n$ est une dérivée $n$-ième : on la « fait passer » sur $\frac1{1-xy}$. <span data-k="racines">Les crochets s'annulent car $0$ et $1$ sont racines d'ordre $n$.</span></p>`, b: R`<p>Notons $u(x) = x^n(1-x)^n$, de sorte que $P_n = \frac1{n!}u^{(n)}$. Par parties :</p>$$\int_0^1\frac{u^{(n)}(x)}{1-xy}\,dx = \Big[\frac{u^{(n-1)}(x)}{1-xy}\Big]_0^1-\int_0^1u^{(n-1)}(x)\,\frac{y}{(1-xy)^2}\,dx.$$<p><span data-k="racines">$u^{(n-1)}(0) = u^{(n-1)}(1) = 0$</span>, donc le crochet est nul.</p>`, rappels: ["an-ipp"] },
    { q: 34, t: "Recommencer n fois", h: R`<p>À chaque étape, la dérivée de $u$ perd un ordre et <span data-k="hj">la fraction gagne un facteur $y$ et une puissance au dénominateur</span>.</p>`, b: R`<p>Montrons par récurrence sur $k\in\{0,\dots,n\}$ :</p>$$\int_0^1\frac{u^{(n)}(x)}{1-xy}\,dx = (-1)^k\int_0^1u^{(n-k)}(x)\,\frac{k!\,y^k}{(1-xy)^{k+1}}\,dx.$$<p>C'est vrai pour $k = 0$. Si c'est vrai pour $k< n$, une intégration par parties, avec <span data-k="hj">$\frac{d}{dx}\frac{k!\,y^k}{(1-xy)^{k+1}} = \frac{(k+1)!\,y^{k+1}}{(1-xy)^{k+2}}$</span> et un crochet nul ($u^{(n-k-1)}$ s'annule en $0$ et $1$), donne le rang $k+1$.</p>`, rappels: ["an-ipp"] },
    { q: 34, t: "Conclure avec k = n", h: R`<p>Pour $k = n$, $u^{(0)} = u$ ; diviser par $n!$.</p>`, b: R`<p>Avec $k = n$ et en divisant par $n!$ :</p><div class="sbox">$$\int_0^1\frac{P_n(x)}{1-xy}\,dx = (-1)^ny^n\int_0^1\frac{x^n(1-x)^n}{(1-xy)^{n+1}}\,dx = (-y)^n\int_0^1\frac{x^n(1-x)^n}{(1-xy)^{n+1}}\,dx.$$</div>` },
    { q: 35, t: "Injecter dans I_n", h: R`<p>Dans <span data-k="in">$I_n$</span>, l'intégrale intérieure en $x$ est exactement celle de Q34.</p>`, b: R`<p>$I_n = \int_0^1(1-y)^n\Big(\int_0^1\frac{P_n(x)}{1-xy}\,dx\Big)dy$ et Q34 donne</p><div class="sbox">$$I_n = (-1)^n\int_0^1\!\!\int_0^1\frac{x^n(1-x)^ny^n(1-y)^n}{(1-xy)^{n+1}}\,dx\,dy.$$</div><p>C'est le cœur de la preuve : l'intégrande est $\Big(\frac{x(1-x)y(1-y)}{1-xy}\Big)^n\cdot\frac1{1-xy}$, une puissance $n$-ième d'une quantité petite.</p>` },
    { q: 36, t: "Se ramener à une variable", h: R`<p>À produit $xy = t^2$ fixé, <span data-k="amgm">l'inégalité arithmético-géométrique majore $(1-x)(1-y)$ par $(1-t)^2$</span>.</p>`, b: R`<p>Soit $(x,y)\in\,]0,1[^2$ et $t = \sqrt{xy}\in\,]0,1[$. <span data-k="amgm">Comme $x+y\geqslant2t$ : $(1-x)(1-y) = 1-(x+y)+t^2\leqslant(1-t)^2$.</span> Donc</p>$$\frac{x(1-x)y(1-y)}{1-xy}\leqslant\frac{t^2(1-t)^2}{1-t^2} = \frac{t^2(1-t)}{1+t} = g(t).$$`, rappels: ["an-amgm"] },
    { q: 36, t: "Étudier g", h: R`<p>Dériver $g$ : sa dérivée s'annule là où <span data-k="phi">$1-t-t^2 = 0$, en $\varphi = \frac{\sqrt5-1}2$</span>.</p>`, b: R`<p>$g(t) = \frac{t^2-t^3}{1+t}$, donc</p>$$g'(t) = \frac{(2t-3t^2)(1+t)-(t^2-t^3)}{(1+t)^2} = \frac{2t(1-t-t^2)}{(1+t)^2}.$$<p>$1-t-t^2>0$ avant <span data-k="phi">$\varphi = \frac{\sqrt5-1}2$</span> et $< 0$ après : $g$ croît puis décroît, son maximum sur $]0,1[$ est $g(\varphi)$.</p>` + GRAPH({ w: 420, h: 220, x: [0, 1], y: [0, 0.1], xt: [0.25, 0.5, 0.75, 1], xtl: ["0,25", "0,5", "0,75", "1"], yt: [0.05, 0.1], ytl: ["0,05", "0,1"], vl: [{ x: phi, t: "φ" }], hl: [{ y: Math.pow(phi, 5), t: "φ⁵ ≈ 0,090" }], curves: [{ f: t => t * t * (1 - t) / (1 + t), c: "b" }] }, R`$g(t) = \frac{t^2(1-t)}{1+t}$ atteint son maximum en $\varphi\approx0{,}618$.`, "Courbe de g sur [0,1]"), rappels: ["an-etude-fonction"] },
    { q: 36, t: "Calculer le maximum", h: R`<p>Utiliser <span data-k="phi">$\varphi^2 = 1-\varphi$ et $1+\varphi = \frac1\varphi$</span> pour simplifier.</p>`, b: R`<p><span data-k="phi">$1-\varphi = \varphi^2$ et $1+\varphi = \frac1\varphi$</span>, donc $g(\varphi) = \varphi^2\cdot\varphi^2\cdot\varphi = \varphi^5$. En réduisant avec $\varphi^2 = 1-\varphi$ : $\varphi^3 = 2\varphi-1$, $\varphi^4 = 2-3\varphi$, $\varphi^5 = 5\varphi-3 = \frac{5\sqrt5-11}2$.</p><div class="sbox">$$\forall(x,y)\in\,]0,1[^2,\qquad\frac{x(1-x)y(1-y)}{1-xy}\leqslant\frac{5\sqrt5-11}2\approx0{,}090.$$</div><p>Il y a égalité pour $x = y = \varphi$.</p>` },
    { q: 37, t: "Majorer l'intégrande", h: R`<p>Écrire l'intégrande de Q35 comme $M(x,y)^n\cdot\frac1{1-xy}$ et utiliser Q36. Il reste $\iint\frac1{1-xy} = J_{0,0}$.</p>`, b: R`<p>Notons $c = \frac{5\sqrt5-11}2$. Avec Q35 et Q36 :</p>$$|I_n| = \int_0^1\!\!\int_0^1\Big(\frac{x(1-x)y(1-y)}{1-xy}\Big)^n\frac{dx\,dy}{1-xy}\leqslant c^n\int_0^1\!\!\int_0^1\frac{dx\,dy}{1-xy} = c^nJ_{0,0}.$$<p>Et $J_{0,0} = \zeta(2)$ (Q26 avec $r = s = 0$) :</p><div class="sbox">$$|I_n|\leqslant\zeta(2)\left(\frac{5\sqrt5-11}2\right)^n.$$</div>` },
    { q: 38, t: "Relier à I_n", h: R`<p><span data-k="lien">D'après Q33, $p_n+\zeta(2)q_n = d_n^2I_n$.</span></p>`, b: R`<p><span data-k="lien">$p_n+\zeta(2)q_n = d_n^2\,I_n$</span>. Il faut donc montrer que $I_n\neq0$ et majorer $d_n^2|I_n|$.</p>` },
    { q: 38, t: "Ce nombre n'est pas nul", h: R`<p>Dans Q35, l'intégrande est continue et strictement positive sur $]0,1[^2$.</p>`, b: R`<p>Pour $y\in\,]0,1[$, $x\mapsto\frac{x^n(1-x)^ny^n(1-y)^n}{(1-xy)^{n+1}}$ est continue, positive, non nulle sur $[0,1]$ : son intégrale est $>0$. On intègre ensuite en $y$ une fonction $>0$ : le résultat est $>0$. Donc $(-1)^nI_n>0$, $I_n\neq0$ et $p_n+\zeta(2)q_n\neq0$.</p>`, rappels: ["an-int-pos"] },
    { q: 38, t: "Majorer avec d_n ≤ 3ⁿ", h: R`<p>Q19 donne $d_n^2\leqslant9^n$ pour $n\geqslant N$ ; on combine avec Q37 et l'inégalité admise.</p>`, b: R`<p>Pour $n\geqslant N$ (Q19), $d_n^2\leqslant9^n$, donc avec Q37 :</p>$$|p_n+\zeta(2)q_n| = d_n^2|I_n|\leqslant9^n\zeta(2)c^n = \zeta(2)(9c)^n\leqslant\zeta(2)\Big(\frac56\Big)^n.$$<div class="sbox">$$\forall n\geqslant N,\qquad0< |p_n+\zeta(2)q_n|\leqslant\zeta(2)\Big(\frac56\Big)^n.$$</div><p>Numériquement $9c\approx0{,}81\leqslant\frac56\approx0{,}83$ : c'est juste, d'où l'importance de la majoration fine $d_n\leqslant3^n$ (avec $d_n\leqslant n!$, on n'aurait rien).</p>` },
    { q: 39, t: "Supposer ζ(2) rationnel", h: R`<p><span data-k="contra">Si $\zeta(2) = \frac ab$, multiplier par $b$ rend le nombre entier.</span></p>`, b: R`<p>Par l'absurde, $\zeta(2) = \frac ab$ avec $a,b\in\mathbb N^*$. Alors <span data-k="contra">$b(p_n+\zeta(2)q_n) = bp_n+aq_n\in\mathbb Z$</span>, et il est non nul par Q38.</p>` },
    { q: 39, t: "Un entier non nul ne tend pas vers 0", h: R`<p>Un entier non nul vaut au moins $1$ en valeur absolue, mais Q38 le rend aussi petit qu'on veut.</p>`, b: R`<p>Pour $n\geqslant N$ : $1\leqslant|bp_n+aq_n|\leqslant b\,\zeta(2)\big(\frac56\big)^n$. Le membre de droite tend vers $0$ : contradiction pour $n$ grand.</p><div class="sbox">$$\zeta(2)\notin\mathbb Q.$$</div><p>C'est exactement l'idée de Q20 : $-\frac{p_n}{q_n}$ approche $\zeta(2)$ avec une erreur $o\big(\frac1{|q_n|}\big)$.</p>`, rappels: ["an-entier"] },
    { q: 40, t: "En déduire que π est irrationnel", h: R`<p>Si $\pi$ était rationnel, $\frac{\pi^2}6$ le serait aussi.</p>`, b: R`<p>Si $\pi = \frac ab$, alors $\zeta(2) = \frac{\pi^2}6 = \frac{a^2}{6b^2}\in\mathbb Q$ ($\mathbb Q$ est stable par produit et quotient) : contradiction avec Q39.</p><div class="sbox">$$\pi\notin\mathbb Q.$$</div><p>On a même montré plus fort : $\pi^2$ est irrationnel.</p>` }
  ],
  ctx: {
    "an-binome": R`<p>Développement de $(1-x)^n$, multiplié par $x^n$.</p>`,
    "an-derivee-n": R`<p>Dérivée $n$-ième de $x^{n+j}$, avec $n+j\geqslant n$.</p>`,
    "an-sous-groupes": R`<p>$d_n$ est un multiple commun de $1,\dots,r$, donc un multiple de $d_r$.</p>`,
    "an-ipp": R`<p>$u'$ remplacé par $u^{(n-k)}$, et $v = \frac{k!\,y^k}{(1-xy)^{k+1}}$.</p>`,
    "an-amgm": R`<p>Avec $x$ et $y$ dans $]0,1[$.</p>`,
    "an-etude-fonction": R`<p>$g(t) = \frac{t^2(1-t)}{1+t}$ sur $]0,1[$.</p>`,
    "an-int-pos": R`<p>Intégrande de Q35, strictement positive sur $]0,1[^2$.</p>`,
    "an-entier": R`<p>L'entier $bp_n+aq_n$ est non nul.</p>`
  },
  piege: R`En Q38, ne pas oublier la non-nullité : c'est elle qui transforme « petit » en contradiction. Et sans la majoration fine $d_n\leqslant3^n$ de la partie B, le facteur $d_n^2$ écraserait la décroissance de $I_n$.`,
  methode: R`Pour prouver qu'un nombre $\alpha$ est irrationnel : construire des entiers $p_n,q_n$ avec $0< |p_n+\alpha q_n|\to0$. Si $\alpha = \frac ab$, l'entier $bp_n+aq_n$ serait non nul et tendrait vers $0$.`
}
]);
})();

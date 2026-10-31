/* Maths MPSI · chapitre 02 : Applications (injectivité, surjectivité, bijectivité). */
(() => {
const R = String.raw;
const C1 = { subj: "maths", year: "mpsi", chap: 1 };

LEMME.rappels({
  "ap-inj": { t: "Injective, surjective, bijective", b: R`<ul><li>$f : E\to F$ est <b>injective</b> si $\forall x,x'\in E,\ f(x) = f(x')\Rightarrow x = x'$ (tout élément de $F$ a <b>au plus</b> un antécédent).</li><li><b>Surjective</b> si $\forall y\in F,\ \exists x\in E,\ y = f(x)$ (tout élément a <b>au moins</b> un antécédent).</li><li><b>Bijective</b> si elle est injective et surjective (tout élément a <b>exactement</b> un antécédent).</li></ul>` },
  "ap-reciproque": { t: "Bijection réciproque", b: R`<p>S'il existe $g : F\to E$ avec $g\circ f = \mathrm{Id}_E$ et $f\circ g = \mathrm{Id}_F$, alors $f$ est bijective et $f^{-1} = g$. En particulier, si $f\circ f = \mathrm{Id}_E$, $f$ est bijective et $f^{-1} = f$.</p>` },
  "ap-composee": { t: "Composées", b: R`<ul><li>$g\circ f$ injective $\Rightarrow f$ injective ;</li><li>$g\circ f$ surjective $\Rightarrow g$ surjective ;</li><li>une composée de bijections est une bijection.</li></ul>` }
});

LEMME.exercises([
{ id: "ap-successeur", ...C1, level: 1, time: "12 min",
  title: "L'application n ↦ n + 1 de ℕ dans ℕ*",
  tt: R`L'application $n\mapsto n+1$ de $\mathbb N$ dans $\mathbb N^\ast$`,
  enonce: R`<p>Soit $s : \mathbb N\to\mathbb N^\ast$, $s(n) = n+1$. Montrer que $s$ est bijective de trois façons :</p><ol style="list-style:lower-alpha"><li>avec la définition (tout élément a exactement un antécédent) ;</li><li>en vérifiant l'injectivité et la surjectivité ;</li><li>en trouvant une application réciproque.</li></ol>`,
  decode: { donnees: [R`$s$ va bien dans $\mathbb N^\ast$ : $n+1\geqslant1$.`], but: R`Trois rédactions de la bijectivité.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Exactement un antécédent", h: R`<p>Résous $n+1 = m$ dans $\mathbb N$.</p>`, b: R`<p>Soit $m\in\mathbb N^\ast$. On cherche les $n\in\mathbb N$ tels que $s(n) = m$ :</p>$$n+1 = m\iff n = m-1.$$<p>Comme $m\geqslant1$, $m-1\geqslant0$ : $m-1\in\mathbb N$. L'équation a donc <b>exactement une</b> solution dans $\mathbb N$. Tout élément de $\mathbb N^\ast$ a exactement un antécédent : $s$ est bijective.</p>`, rappels: ["ap-inj"] },
    { q: 2, t: "(b) Injective et surjective", h: R`<p>Deux vérifications séparées.</p>`, b: R`<ul><li><b>Injective</b> : si $s(n) = s(n')$, alors $n+1 = n'+1$, et en retranchant $1$, $n = n'$.</li><li><b>Surjective</b> : soit $m\in\mathbb N^\ast$ ; alors $m-1\in\mathbb N$ et $s(m-1) = m$.</li></ul><p>Donc $s$ est bijective.</p>` },
    { q: 3, t: "(c) La réciproque", h: R`<p>$t(m) = m-1$.</p>`, b: R`<p>On pose $t : \mathbb N^\ast\to\mathbb N$, $t(m) = m-1$ (bien à valeurs dans $\mathbb N$ car $m\geqslant1$). Alors :</p><ul><li>pour $n\in\mathbb N$ : $t(s(n)) = (n+1)-1 = n$, donc $t\circ s = \mathrm{Id}_{\mathbb N}$ ;</li><li>pour $m\in\mathbb N^\ast$ : $s(t(m)) = (m-1)+1 = m$, donc $s\circ t = \mathrm{Id}_{\mathbb N^\ast}$.</li></ul><div class="sbox">$$s\ \text{est bijective, et}\ s^{-1}(m) = m-1.$$</div>`, rappels: ["ap-reciproque"] }
  ],
  piege: R`Oublier de vérifier que $m-1$ est dans l'ensemble de départ $\mathbb N$ : c'est là que sert $m\geqslant1$.`,
  methode: R`Trois méthodes équivalentes : résoudre $f(x) = y$ ; injectivité + surjectivité ; exhiber $g$ avec $g\circ f = \mathrm{Id}$ et $f\circ g = \mathrm{Id}$.`
},
{ id: "ap-homographie", ...C1, level: 1, time: "15 min",
  title: "Une homographie qui est sa propre réciproque",
  enonce: R`<p>Soient $a,b,c$ réels avec $c\neq0$ et $a^2+bc\neq0$. On pose $E = \mathbb R\setminus\{\frac ac\}$ et $f : E\to E$, $f(x) = \dfrac{ax+b}{cx-a}$.</p><ol style="list-style:lower-alpha"><li>Justifier que $f$ est bien définie.</li><li>Calculer $f\circ f$. En déduire que $f$ est une bijection et donner sa réciproque.</li></ol>`,
  decode: { donnees: [R`$cx-a = 0\iff x = \frac ac$.`, R`$a^2+bc\neq0$.`], but: R`Vérifier que $f(x)$ existe et reste dans $E$, puis calculer $f(f(x))$.`, cles: {} },
  steps: [
    { q: 1, t: "(a) f(x) existe et reste dans E", h: R`<p>Deux choses : le dénominateur ne s'annule pas, et $f(x)\neq\frac ac$.</p>`, b: R`<p><b>$f(x)$ existe</b> : pour $x\in E$, $x\neq\frac ac$, donc $cx\neq a$ et $cx-a\neq0$.</p><p><b>$f(x)\in E$</b> : il faut $f(x)\neq\frac ac$. Raisonnons par l'absurde : si $f(x) = \frac ac$, on multiplie par $c(cx-a)\neq0$ :</p>$$c(ax+b) = a(cx-a)\iff acx+bc = acx-a^2\iff a^2+bc = 0,$$<p>ce qui est exclu. Donc $f(x)\in E$, et $f$ est bien une application de $E$ dans $E$.</p>` },
    { q: 2, t: "(b) Calcul de f ∘ f", h: R`<p>Calcule séparément $a\,f(x)+b$ et $c\,f(x)-a$.</p>`, b: R`<p>Soit $x\in E$ et $y = f(x)$. Alors $f(f(x)) = \frac{ay+b}{cy-a}$. On calcule numérateur et dénominateur en réduisant au dénominateur $cx-a$ :</p>$$ay+b = \frac{a(ax+b)+b(cx-a)}{cx-a} = \frac{a^2x+ab+bcx-ab}{cx-a} = \frac{(a^2+bc)\,x}{cx-a},$$$$cy-a = \frac{c(ax+b)-a(cx-a)}{cx-a} = \frac{acx+bc-acx+a^2}{cx-a} = \frac{a^2+bc}{cx-a}.$$<p>On fait le quotient ; les $cx-a$ se simplifient, puis $a^2+bc\neq0$ aussi :</p>$$f(f(x)) = \frac{(a^2+bc)\,x}{a^2+bc} = x.$$<div class="sbox">$$f\circ f = \mathrm{Id}_E,\qquad f\ \text{est bijective et}\ f^{-1} = f.$$</div><p>En effet, $g = f$ vérifie $g\circ f = f\circ g = \mathrm{Id}_E$ : c'est la réciproque de $f$.</p>`, rappels: ["ap-reciproque"] }
  ],
  piege: R`En (a), oublier de vérifier que $f(x)$ appartient à $E$ : sinon on ne pourrait pas composer $f$ avec elle-même.`,
  methode: R`Pour une involution ($f\circ f = \mathrm{Id}$), la bijectivité et la réciproque viennent ensemble.`
},
{ id: "ap-N-Z", ...C1, level: 2, time: "15 min",
  title: "Une bijection de ℕ sur ℤ",
  tt: R`Une bijection de $\mathbb N$ sur $\mathbb Z$`,
  enonce: R`<p>On considère $f : \mathbb N\to\mathbb Z$ définie par $f(n) = \dfrac n2$ si $n$ est pair et $f(n) = -\dfrac{n+1}2$ si $n$ est impair. Montrer que $f$ est bijective et donner sa réciproque.</p>`,
  decode: { donnees: [R`Premières valeurs : $f(0) = 0$, $f(1) = -1$, $f(2) = 1$, $f(3) = -2$, $f(4) = 2$.`], but: R`Montrer que tout entier relatif a exactement un antécédent.`, cles: {} },
  steps: [
    { q: 1, t: "f est bien à valeurs dans ℤ", h: R`<p>Signe des valeurs selon la parité.</p>`, b: R`<ul><li>Si $n = 2k$ est pair : $f(n) = k\in\mathbb N$, donc $f(n)\geqslant0$.</li><li>Si $n = 2k+1$ est impair : $f(n) = -\frac{2k+2}2 = -(k+1)$, donc $f(n)\leqslant-1$.</li></ul><p>Les pairs donnent les entiers $\geqslant0$, les impairs les entiers $\leqslant-1$.</p>` },
    { q: 2, t: "Résoudre f(n) = m", h: R`<p>Le signe de $m$ dit la parité de $n$.</p>`, b: R`<p>Soit $m\in\mathbb Z$. On cherche les $n\in\mathbb N$ avec $f(n) = m$.</p><ul><li><b>Si $m\geqslant0$</b> : $n$ ne peut pas être impair (sinon $f(n)\leqslant-1$). Donc $n$ est pair et $\frac n2 = m$, soit $n = 2m$, qui est bien un entier naturel pair. Une seule solution.</li><li><b>Si $m\leqslant-1$</b> : $n$ ne peut pas être pair (sinon $f(n)\geqslant0$). Donc $n$ est impair et $-\frac{n+1}2 = m$, soit $n = -2m-1$. Comme $m\leqslant-1$, $n\geqslant1$, et $n$ est bien impair. Une seule solution.</li></ul><p>Tout $m\in\mathbb Z$ a exactement un antécédent : $f$ est bijective.</p><div class="sbox">$$f^{-1}(m) = \begin{cases}2m&\text{si }m\geqslant0,\\-2m-1&\text{si }m< 0.\end{cases}$$</div>`, rappels: ["ap-inj"] }
  ],
  piege: R`Oublier de vérifier que la solution trouvée a la bonne parité : sinon elle ne vérifie pas la bonne formule.`,
  methode: R`Pour une fonction définie par cas, résoudre $f(n) = m$ en commençant par déterminer dans quel cas se trouve $n$.`
},
{ id: "ap-2p", ...C1, level: 2, time: "15 min",
  title: "Une bijection de ℕ² sur ℕ*",
  tt: R`$(p,q)\mapsto2^p(2q+1)$, une bijection de $\mathbb N^2$ sur $\mathbb N^\ast$`,
  enonce: R`<p>Soit $f : \mathbb N^2\to\mathbb N^\ast$, $f(p,q) = 2^p(2q+1)$.</p><ol style="list-style:lower-alpha"><li>Montrer que $f$ est injective.</li><li>Trouver un antécédent de $4$, de $7$ et de $20$.</li><li>Montrer que $f$ est surjective. Qu'en déduit-on ?</li></ol>`,
  decode: { donnees: [R`$2^p$ est la partie paire, $2q+1$ la partie impaire.`], but: R`Montrer que tout $n\geqslant1$ s'écrit de façon unique $2^p(2q+1)$.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Injectivité", h: R`<p>Si $p< p'$, simplifie par $2^p$ : un impair égale un pair.</p>`, b: R`<p>Supposons $2^p(2q+1) = 2^{p'}(2q'+1)$. Quitte à échanger les deux couples, on peut supposer $p\leqslant p'$. On divise par $2^p$ :</p>$$2q+1 = 2^{p'-p}(2q'+1).$$<p>Si $p'>p$, le membre de droite est pair (il contient le facteur $2$), alors que $2q+1$ est impair : impossible. Donc $p' = p$, et l'égalité devient $2q+1 = 2q'+1$, d'où $q = q'$. Ainsi $(p,q) = (p',q')$ : $f$ est injective.</p>` },
    { q: 2, t: "(b) Trois antécédents", h: R`<p>Sors la plus grande puissance de $2$.</p>`, b: R`<ul><li>$4 = 2^2\times1 = 2^2(2\cdot0+1)$ : antécédent $(2,0)$.</li><li>$7 = 2^0\times7 = 2^0(2\cdot3+1)$ : antécédent $(0,3)$.</li><li>$20 = 2^2\times5 = 2^2(2\cdot2+1)$ : antécédent $(2,2)$.</li></ul>` },
    { q: 3, t: "(c) Surjectivité", h: R`<p>Prends le plus grand $p$ tel que $2^p$ divise $n$.</p>`, b: R`<p>Soit $n\in\mathbb N^\ast$. L'ensemble des $k\in\mathbb N$ tels que $2^k$ divise $n$ contient $0$, et il est majoré par $n$ (car $2^k\leqslant n$ et $k< 2^k$). Il a donc un plus grand élément $p$. On écrit $n = 2^pm$ avec $m\in\mathbb N^\ast$.</p><p>$m$ est impair : sinon $m = 2m'$ et $2^{p+1}$ diviserait $n$, contre la maximalité de $p$. Donc $m = 2q+1$ avec $q\in\mathbb N$, et $f(p,q) = n$.</p><div class="sbox"><p style="margin:0">$f$ est bijective : $\mathbb N^2$ et $\mathbb N^\ast$ (donc aussi $\mathbb N$) sont en bijection, $\mathbb N^2$ est dénombrable.</p></div>` }
  ],
  piege: R`En (a), oublier de se ramener à $p\leqslant p'$ : on ne peut diviser par $2^p$ que si c'est la plus petite des deux puissances.`,
  methode: R`Unicité d'une décomposition : supposer deux écritures et comparer les parités.`
},
{ id: "ap-exp", ...C1, level: 1, time: "12 min",
  title: "L'exponentielle complexe",
  enonce: R`<p>On considère $f : \mathbb C\to\mathbb C^\ast$, $f(z) = e^z$.</p><ol style="list-style:lower-alpha"><li>Justifier que $f$ est bien définie.</li><li>$f$ est-elle injective ?</li><li>$f$ est-elle surjective ?</li></ol>`,
  decode: { donnees: [R`Pour $z = x+iy$ : $e^z = e^x e^{iy}$, de module $e^x$ et d'argument $y$.`], but: R`Étudier l'injectivité et la surjectivité.`, cles: {} },
  steps: [
    { q: 1, t: "(a) e^z n'est jamais nul", h: R`<p>Calcule le module de $e^z$.</p>`, b: R`<p>Pour $z = x+iy$ ($x,y$ réels), $e^z = e^xe^{iy}$. Son module est $|e^z| = e^x|e^{iy}| = e^x\cdot1 = e^x>0$. Un complexe de module non nul n'est pas nul : $e^z\in\mathbb C^\ast$. Donc $f$ va bien de $\mathbb C$ dans $\mathbb C^\ast$.</p>` },
    { q: 2, t: "(b) Pas injective", h: R`<p>Compare $f(0)$ et $f(2i\pi)$.</p>`, b: R`<p>$f(0) = e^0 = 1$ et $f(2i\pi) = e^{2i\pi} = \cos(2\pi)+i\sin(2\pi) = 1$. Deux points différents ont la même image : <b>$f$ n'est pas injective</b>. Plus généralement $e^{z+2ik\pi} = e^z$ pour tout $k\in\mathbb Z$.</p>` },
    { q: 3, t: "(c) Surjective", h: R`<p>Écris $Z = |Z|e^{i\varphi}$.</p>`, b: R`<p>Soit $Z\in\mathbb C^\ast$. On l'écrit sous forme exponentielle $Z = |Z|e^{i\varphi}$, avec $|Z|>0$ et $\varphi\in\mathbb R$ un argument. On pose $z = \ln|Z|+i\varphi$ (le logarithme existe car $|Z|>0$). Alors</p>$$e^z = e^{\ln|Z|}e^{i\varphi} = |Z|e^{i\varphi} = Z.$$<p>Tout $Z\in\mathbb C^\ast$ a un antécédent : <b>$f$ est surjective</b>.</p>`, rappels: ["ap-inj"] }
  ],
  piege: R`Croire que l'exponentielle complexe est bijective comme l'exponentielle réelle : elle est $2i\pi$-périodique.`,
  methode: R`Pour l'exponentielle complexe : séparer module ($e^x$) et argument ($y$).`
},
{ id: "ap-double-moitie", ...C1, level: 2, time: "15 min",
  title: "Doubler, puis prendre la moitié",
  enonce: R`<p>Soient $f,g : \mathbb N\to\mathbb N$ définies par $f(k) = 2k$ et $g(k) = \frac k2$ si $k$ est pair, $g(k) = \frac{k-1}2$ si $k$ est impair.</p><ol style="list-style:lower-alpha"><li>Vérifier que $f$ et $g$ sont bien définies.</li><li>Étudier leur injectivité.</li><li>Étudier leur surjectivité.</li><li>Calculer $g\circ f$ et $f\circ g$. Sont-elles bijectives ?</li></ol>`,
  decode: { donnees: [R`$g(0) = 0$, $g(1) = 0$, $g(2) = 1$, $g(3) = 1$…`], but: R`Comparer $f$, $g$ et leurs composées.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Bonne définition", h: R`<p>Les valeurs sont-elles des entiers naturels ?</p>`, b: R`<p>$f(k) = 2k\in\mathbb N$. Si $k = 2m$ est pair, $g(k) = m\in\mathbb N$ ; si $k = 2m+1$ est impair, $g(k) = \frac{2m}2 = m\in\mathbb N$. Les deux applications vont bien de $\mathbb N$ dans $\mathbb N$.</p>` },
    { q: 2, t: "(b) Injectivité", h: R`<p>Regarde $g(0)$ et $g(1)$.</p>`, b: R`<ul><li>$f$ <b>est injective</b> : $2k = 2k'\Rightarrow k = k'$.</li><li>$g$ <b>n'est pas injective</b> : $g(0) = 0 = g(1)$ avec $0\neq1$.</li></ul>` },
    { q: 3, t: "(c) Surjectivité", h: R`<p>$1$ est-il un double ?</p>`, b: R`<ul><li>$f$ <b>n'est pas surjective</b> : ses valeurs sont paires, donc $1$ n'a pas d'antécédent.</li><li>$g$ <b>est surjective</b> : pour $m\in\mathbb N$, $g(2m) = m$.</li></ul>` },
    { q: 4, t: "(d) Les deux composées", h: R`<p>$f(k)$ est toujours pair.</p>`, b: R`<p><b>$g\circ f$</b> : $f(k) = 2k$ est pair, donc $g(2k) = \frac{2k}2 = k$. Ainsi $g\circ f = \mathrm{Id}_{\mathbb N}$, <b>bijective</b>.</p><p><b>$f\circ g$</b> : si $k$ est pair, $f(g(k)) = 2\cdot\frac k2 = k$ ; si $k$ est impair, $f(g(k)) = 2\cdot\frac{k-1}2 = k-1$. Donc $f\circ g$ envoie $2m$ et $2m+1$ sur $2m$. Elle n'est <b>ni injective</b> ($f\circ g(0) = f\circ g(1) = 0$) <b>ni surjective</b> (les impairs ne sont pas atteints).</p><div class="sbox"><p style="margin:0">$g\circ f = \mathrm{Id}_{\mathbb N}$ mais $f\circ g\neq\mathrm{Id}_{\mathbb N}$ : $g$ est un « inverse à gauche » de $f$, pas une réciproque.</p></div>` }
  ],
  piege: R`Conclure que $f$ et $g$ sont réciproques parce que $g\circ f = \mathrm{Id}$ : il faut aussi $f\circ g = \mathrm{Id}$.`,
  methode: R`$g\circ f = \mathrm{Id}$ force $f$ injective et $g$ surjective, mais rien de plus.`
},
{ id: "ap-carre-complexe", ...C1, level: 2, time: "20 min",
  title: "Le carré complexe et ses restrictions",
  tt: R`$z\mapsto z^2$ et ses restrictions`,
  enonce: R`<p>Soit $f : \mathbb C\to\mathbb C$, $f(z) = z^2$.</p><ol style="list-style:lower-alpha"><li>Montrer que $f$ est surjective mais pas injective.</li><li>Soit $\Omega = \{z\in\mathbb C : \operatorname{Re}(z)>0\}$ et $f_{|\Omega} : \Omega\to\mathbb C$ la restriction de $f$. Montrer que $f_{|\Omega}$ est injective. Est-elle surjective ?</li><li>Montrer que $f' : \Omega\to\mathbb C\setminus\mathbb R_-$, $f'(z) = z^2$, est bien définie et bijective ($\mathbb R_- = \,]-\infty,0]$).</li></ol>`,
  decode: { donnees: [R`$z = re^{i\theta}\Rightarrow z^2 = r^2e^{2i\theta}$ : on élève le module au carré et on double l'argument.`], but: R`Rendre $z\mapsto z^2$ bijective en restreignant départ et arrivée.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Surjective, pas injective", h: R`<p>Racine carrée d'un complexe sous forme exponentielle.</p>`, b: R`<p><b>Surjective</b> : soit $Z\in\mathbb C$. Si $Z = 0$, $f(0) = 0$. Sinon $Z = \rho e^{i\varphi}$ avec $\rho>0$, et $z = \sqrt\rho\,e^{i\varphi/2}$ vérifie $z^2 = \rho e^{i\varphi} = Z$.</p><p><b>Pas injective</b> : $f(1) = 1 = f(-1)$ avec $1\neq-1$.</p>` },
    { q: 2, t: "(b) Injective sur Ω", h: R`<p>$z^2 = w^2\iff(z-w)(z+w) = 0$.</p>`, b: R`<p>Soient $z,w\in\Omega$ avec $z^2 = w^2$. Alors $z^2-w^2 = (z-w)(z+w) = 0$ ; un produit nul a un facteur nul, donc $z = w$ ou $z = -w$.</p><p>Si $z = -w$, alors $\operatorname{Re}(z) = -\operatorname{Re}(w)< 0$, alors que $z\in\Omega$ : impossible. Donc $z = w$ : <b>$f_{|\Omega}$ est injective</b>.</p><p><b>Pas surjective</b> : $z^2 = -1$ donne $z = i$ ou $z = -i$, de partie réelle $0$, hors de $\Omega$. Donc $-1$ n'a pas d'antécédent dans $\Omega$.</p>` },
    { q: 3, t: "(c) Bien définie", h: R`<p>Dans $\Omega$, l'argument est dans $]-\frac\pi2,\frac\pi2[$.</p>`, b: R`<p>Soit $z\in\Omega$. Il est non nul, et on l'écrit $z = re^{i\theta}$ avec $r>0$ et $\theta\in\,]-\frac\pi2,\frac\pi2[$ (car $\operatorname{Re}z = r\cos\theta>0$ impose $\cos\theta>0$). Alors $z^2 = r^2e^{2i\theta}$ avec $2\theta\in\,]-\pi,\pi[$.</p><p>Un complexe non nul est dans $\mathbb R_-$ seulement si son argument vaut $\pi$ modulo $2\pi$. Ici $2\theta\in\,]-\pi,\pi[$ n'est pas congru à $\pi$, et $z^2\neq0$. Donc $z^2\in\mathbb C\setminus\mathbb R_-$.</p>` },
    { q: 4, t: "(c) Bijective", h: R`<p>Injectivité : (b). Surjectivité : prendre la moitié de l'argument.</p>`, b: R`<p><b>Injective</b> : c'est (b).</p><p><b>Surjective</b> : soit $Z\in\mathbb C\setminus\mathbb R_-$. Il est non nul, et comme il n'est pas sur la demi-droite des réels négatifs, on peut l'écrire $Z = \rho e^{i\varphi}$ avec $\rho>0$ et $\varphi\in\,]-\pi,\pi[$. On pose $z = \sqrt\rho\,e^{i\varphi/2}$ : $\frac\varphi2\in\,]-\frac\pi2,\frac\pi2[$, donc $\operatorname{Re}z = \sqrt\rho\cos\frac\varphi2>0$, $z\in\Omega$, et $z^2 = Z$.</p><div class="sbox">$$f' : \Omega\to\mathbb C\setminus\mathbb R_-,\ z\mapsto z^2\ \text{est bijective.}$$</div>` }
  ],
  piege: R`Oublier de vérifier que $f'$ arrive bien dans $\mathbb C\setminus\mathbb R_-$ avant de parler de bijection.`,
  methode: R`Restreindre le départ rend injective ; restreindre l'arrivée à l'image rend surjective.`
},
{ id: "ap-ajout-retrait", ...C1, level: 1, time: "10 min",
  title: "Ajouter ou retirer un élément",
  enonce: R`<p>Soit $E$ un ensemble et $a\in E$ fixé. On définit $f : \mathcal P(E)\to\mathcal P(E)$ par $f(A) = A\cup\{a\}$ si $a\notin A$, et $f(A) = A\setminus\{a\}$ si $a\in A$. Montrer que $f$ est bijective.</p>`,
  decode: { donnees: [R`$f$ « bascule » l'appartenance de $a$.`], but: R`Calculer $f\circ f$.`, cles: {} },
  steps: [
    { q: 1, t: "Calcul de f ∘ f", h: R`<p>Deux cas : $a\in A$ ou non.</p>`, b: R`<p>Soit $A\in\mathcal P(E)$.</p><ul><li><b>$a\notin A$</b> : $f(A) = A\cup\{a\}$, qui contient $a$. On applique donc la seconde formule : $f(f(A)) = (A\cup\{a\})\setminus\{a\} = A$ (on retire $a$, qui n'était pas dans $A$).</li><li><b>$a\in A$</b> : $f(A) = A\setminus\{a\}$, qui ne contient pas $a$. Première formule : $f(f(A)) = (A\setminus\{a\})\cup\{a\} = A$ (on remet $a$, qui était dans $A$).</li></ul><div class="sbox">$$f\circ f = \mathrm{Id}_{\mathcal P(E)},\qquad f\ \text{est bijective et}\ f^{-1} = f.$$</div><p>Remarque : $f(A) = A\,\Delta\,\{a\}$.</p>`, rappels: ["ap-reciproque"] }
  ],
  piege: R`Appliquer deux fois la même formule : après un passage par $f$, on change de cas.`,
  methode: R`Une application qui « bascule » quelque chose est une involution : $f\circ f = \mathrm{Id}$.`
},
{ id: "ap-trace", ...C1, level: 3, time: "25 min",
  title: "Traces d'une partie sur A et sur B",
  enonce: R`<p>Soient $A$ et $B$ deux parties d'un ensemble $E$, et $f : \mathcal P(E)\to\mathcal P(A)\times\mathcal P(B)$, $f(X) = (X\cap A,\ X\cap B)$.</p><ol style="list-style:lower-alpha"><li>Montrer que $f$ est injective si et seulement si $A\cup B = E$.</li><li>À quelle condition $f$ est-elle surjective ?</li></ol>`,
  decode: { donnees: [R`$f(X)$ ne voit de $X$ que sa partie dans $A$ et sa partie dans $B$.`], but: R`Caractériser injectivité et surjectivité.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Si A ∪ B = E, f est injective", h: R`<p>Reconstruis $X$ à partir de $X\cap A$ et $X\cap B$.</p>`, b: R`<p>Supposons $A\cup B = E$. Pour toute partie $X$, par distributivité :</p>$$X = X\cap E = X\cap(A\cup B) = (X\cap A)\cup(X\cap B).$$<p>Si $f(X) = f(Y)$, alors $X\cap A = Y\cap A$ et $X\cap B = Y\cap B$, donc $X = (X\cap A)\cup(X\cap B) = (Y\cap A)\cup(Y\cap B) = Y$. $f$ est injective.</p>` },
    { q: 2, t: "(a) Si A ∪ B ≠ E, f n'est pas injective", h: R`<p>Un point hors de $A\cup B$ est invisible.</p>`, b: R`<p>Par contraposée, supposons $A\cup B\neq E$ : il existe $x\in E$ avec $x\notin A$ et $x\notin B$. Alors</p>$$f(\{x\}) = (\{x\}\cap A,\ \{x\}\cap B) = (\emptyset,\emptyset) = f(\emptyset),$$<p>alors que $\{x\}\neq\emptyset$. $f$ n'est pas injective.</p><div class="sbox">$$f\ \text{injective}\iff A\cup B = E.$$</div>`, rappels: ["lg-contraposee"] },
    { q: 3, t: "(b) Si A ∩ B ≠ ∅, f n'est pas surjective", h: R`<p>Le couple $(\{x\},\emptyset)$ avec $x\in A\cap B$.</p>`, b: R`<p>Supposons qu'il existe $x\in A\cap B$. Le couple $(\{x\},\emptyset)$ est dans $\mathcal P(A)\times\mathcal P(B)$. S'il avait un antécédent $X$, on aurait $X\cap A = \{x\}$, donc $x\in X$, et $X\cap B = \emptyset$ ; mais $x\in X$ et $x\in B$ donnent $x\in X\cap B$ : contradiction. $f$ n'est pas surjective.</p>` },
    { q: 4, t: "(b) Si A ∩ B = ∅, f est surjective", h: R`<p>Prends $X = A'\cup B'$.</p>`, b: R`<p>Supposons $A\cap B = \emptyset$ et soit $(A',B')$ avec $A'\subset A$ et $B'\subset B$. On pose $X = A'\cup B'$. Par distributivité :</p>$$X\cap A = (A'\cap A)\cup(B'\cap A) = A'\cup\emptyset = A',$$<p>car $A'\subset A$ et $B'\cap A\subset B\cap A = \emptyset$. De même $X\cap B = B'$. Donc $f(X) = (A',B')$.</p><div class="sbox">$$f\ \text{surjective}\iff A\cap B = \emptyset.$$</div><p>Ainsi $f$ est bijective si et seulement si $A$ et $B$ forment une partition de $E$ ($A\cup B = E$ et $A\cap B = \emptyset$).</p>` }
  ],
  piege: R`Confondre les deux conditions : l'injectivité demande que $A$ et $B$ recouvrent $E$, la surjectivité qu'ils soient disjoints.`,
  methode: R`Pour une condition nécessaire et suffisante : un sens direct, et l'autre par un contre-exemple bien choisi (un singleton).`
},
{ id: "ap-monotone", ...C1, level: 1, time: "5 min",
  title: "Strictement monotone implique injective",
  enonce: R`<p>Soit $f$ une fonction réelle définie sur un intervalle $I$. Montrer que si $f$ est strictement monotone, alors $f$ est injective. La réciproque est-elle vraie ?</p>`,
  decode: { donnees: [R`Strictement croissante : $x< y\Rightarrow f(x)< f(y)$.`], but: R`Montrer que deux points distincts ont des images distinctes.`, cles: {} },
  steps: [
    { q: 1, t: "La preuve", h: R`<p>Deux points distincts sont rangés : $x< y$ ou $y< x$.</p>`, b: R`<p>Supposons $f$ strictement croissante (le cas décroissant est identique en renversant les inégalités). Soient $x\neq y$ dans $I$ ; quitte à les échanger, $x< y$. Alors $f(x)< f(y)$, donc $f(x)\neq f(y)$.</p><p>On a montré $x\neq y\Rightarrow f(x)\neq f(y)$, qui est la contraposée de la définition de l'injectivité : <b>$f$ est injective</b>.</p><p><b>Réciproque fausse</b> sans continuité : sur $[0,2]$, $f(x) = x$ pour $x< 1$ et $f(x) = 3-x$ pour $x\geqslant1$ est injective (valeurs $[0,1[$ puis $[1,2]$, sans doublon) mais n'est pas monotone.</p>`, rappels: ["ap-inj", "lg-contraposee"] }
  ],
  piege: R`Oublier « strictement » : une fonction constante est monotone mais pas injective.`,
  methode: R`Injectivité par la contraposée : $x\neq y\Rightarrow f(x)\neq f(y)$.`
},
{ id: "ap-simplifier", ...C1, level: 1, time: "10 min",
  title: "Simplifier une composition",
  enonce: R`<ol style="list-style:lower-alpha"><li>Soient $f_1,f_2 : E\to F$ et $g : F\to G$ avec $g$ injective et $g\circ f_1 = g\circ f_2$. Montrer que $f_1 = f_2$.</li><li>Soient $f : E\to F$ et $g_1,g_2 : F\to G$ avec $f$ surjective et $g_1\circ f = g_2\circ f$. Montrer que $g_1 = g_2$.</li></ol>`,
  decode: { donnees: [R`Deux applications sont égales si elles ont mêmes valeurs en tout point de leur ensemble de départ.`], but: R`Simplifier à gauche par une injection, à droite par une surjection.`, cles: {} },
  steps: [
    { q: 1, t: "(a) Simplifier à gauche", h: R`<p>Évalue en $x$, puis utilise l'injectivité.</p>`, b: R`<p>Soit $x\in E$. L'égalité $g\circ f_1 = g\circ f_2$ en $x$ donne $g(f_1(x)) = g(f_2(x))$. Les éléments $f_1(x)$ et $f_2(x)$ de $F$ ont la même image par $g$, qui est injective : $f_1(x) = f_2(x)$. Comme c'est vrai pour tout $x\in E$, $f_1 = f_2$.</p>` },
    { q: 2, t: "(b) Simplifier à droite", h: R`<p>Tout $y\in F$ s'écrit $f(x)$.</p>`, b: R`<p>Soit $y\in F$. Comme $f$ est surjective, il existe $x\in E$ avec $y = f(x)$. Alors</p>$$g_1(y) = g_1(f(x)) = (g_1\circ f)(x) = (g_2\circ f)(x) = g_2(f(x)) = g_2(y).$$<p>Comme c'est vrai pour tout $y\in F$, $g_1 = g_2$.</p>` }
  ],
  piege: R`En (b), oublier la surjectivité : sans elle, on ne sait rien de $g_1$ et $g_2$ hors de $f(E)$.`,
  methode: R`Égalité de fonctions : on prend un point quelconque de l'ensemble de départ et on compare les valeurs.`
},
{ id: "ap-corestriction", ...C1, level: 1, time: "8 min",
  title: "Restreindre l'arrivée à l'image",
  enonce: R`<p>Soit $f : E\to F$. Que dire de l'application $\tilde f : E\to f(E)$, $x\mapsto f(x)$ ? Que dire de plus si $f$ est injective ?</p>`,
  decode: { donnees: [R`$f(E) = \{f(x) : x\in E\}$.`], but: R`Étudier $\tilde f$.`, cles: {} },
  steps: [
    { q: 1, t: "Surjective, puis bijective si f est injective", h: R`<p>Tout élément de $f(E)$ est de la forme $f(x)$.</p>`, b: R`<p>$\tilde f$ est bien définie : $f(x)\in f(E)$ pour tout $x$.</p><p><b>Surjective</b> : un élément $y$ de $f(E)$ s'écrit, par définition de $f(E)$, $y = f(x)$ avec $x\in E$ ; alors $\tilde f(x) = y$.</p><p><b>Si $f$ est injective</b> : $\tilde f$ prend les mêmes valeurs que $f$, donc $\tilde f(x) = \tilde f(x')\Rightarrow f(x) = f(x')\Rightarrow x = x'$. $\tilde f$ est injective et surjective :</p><div class="sbox"><p style="margin:0">Une injection $f : E\to F$ induit une bijection de $E$ sur son image $f(E)$.</p></div>`, rappels: ["ap-inj"] }
  ],
  piege: R`Croire que $f$ elle-même devient surjective : c'est $\tilde f$, dont l'ensemble d'arrivée a changé.`,
  methode: R`Changer l'ensemble d'arrivée en $f(E)$ rend toujours surjectif.`
},
{ id: "ap-composees", ...C1, level: 2, time: "15 min",
  title: "Composées, injectivité, surjectivité",
  enonce: R`<p>Soient $f : E\to F$ et $g : F\to G$. Établir :</p><ol style="list-style:lower-alpha"><li>$g\circ f$ injective $\Rightarrow f$ injective ;</li><li>$g\circ f$ surjective $\Rightarrow g$ surjective ;</li><li>$g\circ f$ injective et $f$ surjective $\Rightarrow g$ injective ;</li><li>$g\circ f$ surjective et $g$ injective $\Rightarrow f$ surjective.</li></ol>`,
  decode: { donnees: [R`$(g\circ f)(x) = g(f(x))$.`], but: R`Quatre implications à partir des définitions.`, cles: {} },
  steps: [
    { q: 1, t: "(a) et (b)", h: R`<p>(a) : applique $g$. (b) : $y = f(x)$ est un antécédent.</p>`, b: R`<p><b>(a)</b> Soient $x,x'\in E$ avec $f(x) = f(x')$. On applique $g$ : $g(f(x)) = g(f(x'))$, soit $(g\circ f)(x) = (g\circ f)(x')$. Comme $g\circ f$ est injective, $x = x'$ : $f$ est injective.</p><p><b>(b)</b> Soit $z\in G$. Comme $g\circ f$ est surjective, il existe $x\in E$ avec $g(f(x)) = z$. L'élément $y = f(x)\in F$ vérifie $g(y) = z$ : $g$ est surjective.</p>`, rappels: ["ap-inj"] },
    { q: 2, t: "(c)", h: R`<p>Remonte $y$ et $y'$ dans $E$ par la surjectivité de $f$.</p>`, b: R`<p>Soient $y,y'\in F$ avec $g(y) = g(y')$. Comme $f$ est surjective, $y = f(x)$ et $y' = f(x')$ avec $x,x'\in E$. Alors $(g\circ f)(x) = g(y) = g(y') = (g\circ f)(x')$ ; par injectivité de $g\circ f$, $x = x'$, donc $y = f(x) = f(x') = y'$. $g$ est injective.</p>` },
    { q: 3, t: "(d)", h: R`<p>Pose $z = g(y)$ et utilise la surjectivité de $g\circ f$.</p>`, b: R`<p>Soit $y\in F$ et $z = g(y)$. Comme $g\circ f$ est surjective, il existe $x$ avec $g(f(x)) = z = g(y)$. Comme $g$ est injective, $f(x) = y$ : $y$ a un antécédent par $f$. $f$ est surjective.</p>` }
  ],
  piege: R`Croire que $g\circ f$ injective donne $g$ injective : avec $f : \{0\}\to\{0,1\}$ et $g$ constante, $g\circ f$ est injective mais pas $g$.`,
  methode: R`Retenir : l'injectivité de $g\circ f$ passe à l'application de <b>droite</b> ($f$), la surjectivité à celle de <b>gauche</b> ($g$).`
},
{ id: "ap-trois", ...C1, level: 2, time: "15 min",
  title: "Trois applications en cycle",
  enonce: R`<p>Soient $f : E\to F$, $g : F\to G$ et $h : G\to E$. On suppose que $h\circ g\circ f$ est injective et que $g\circ f\circ h$ et $f\circ h\circ g$ sont surjectives. Montrer que $f$, $g$ et $h$ sont bijectives.</p>`,
  decode: { donnees: [R`$g\circ f$ injective $\Rightarrow f$ injective ; $g\circ f$ surjective $\Rightarrow g$ surjective.`], but: R`Obtenir d'abord $f$ bijective, puis $g$, puis $h$.`, cles: {} },
  steps: [
    { q: 1, t: "f est bijective", h: R`<p>Regroupe $(h\circ g)\circ f$ et $f\circ(h\circ g)$.</p>`, b: R`<ul><li>$h\circ g\circ f = (h\circ g)\circ f$ est injective, et $f$ est appliquée en premier : <b>$f$ est injective</b>.</li><li>$f\circ h\circ g = f\circ(h\circ g)$ est surjective, et $f$ est appliquée en dernier : <b>$f$ est surjective</b>.</li></ul><p>Donc $f$ est bijective, et $f^{-1} : F\to E$ existe.</p>`, rappels: ["ap-composee"] },
    { q: 2, t: "g est bijective", h: R`<p>$h\circ g = (h\circ g\circ f)\circ f^{-1}$.</p>`, b: R`<p><b>$g$ injective</b> : $h\circ g = (h\circ g\circ f)\circ f^{-1}$ est la composée de deux injections, donc injective ; écrite $h\circ g$, $g$ est appliquée en premier : $g$ est injective.</p><p><b>$g$ surjective</b> : $g\circ f\circ h = g\circ(f\circ h)$ est surjective et $g$ est appliquée en dernier : $g$ est surjective.</p><p>Donc $g$ est bijective.</p>` },
    { q: 3, t: "h est bijective", h: R`<p>Isole $h$ avec $f^{-1}$ et $g^{-1}$.</p>`, b: R`<p>On isole $h$ de deux façons :</p><ul><li>$h = (h\circ g)\circ g^{-1}$ : composée de l'injection $h\circ g$ et de la bijection $g^{-1}$, donc <b>injective</b>.</li><li>$h = f^{-1}\circ(f\circ h\circ g)\circ g^{-1}$ : composée de bijections et d'une surjection, donc <b>surjective</b>.</li></ul><div class="sbox"><p style="margin:0">$f$, $g$ et $h$ sont bijectives.</p></div>` }
  ],
  piege: R`Vouloir tout obtenir d'un coup : il faut d'abord $f$ bijective pour pouvoir utiliser $f^{-1}$.`,
  methode: R`Regrouper les composées de façon à placer l'application étudiée en premier (injectivité) ou en dernier (surjectivité).`
},
{ id: "ap-fgf", ...C1, level: 2, time: "10 min",
  title: "Quand f ∘ g ∘ f est bijective",
  tt: R`Quand $f\circ g\circ f$ est bijective`,
  enonce: R`<p>Soient $f : E\to F$ et $g : F\to E$ telles que $f\circ g\circ f$ soit bijective. Montrer que $f$ et $g$ sont bijectives.</p>`,
  decode: { donnees: [R`$f\circ g\circ f$ est injective et surjective.`], but: R`Même méthode que l'exercice précédent.`, cles: {} },
  steps: [
    { q: 1, t: "f, puis g", h: R`<p>Regroupe $(f\circ g)\circ f$ et $f\circ(g\circ f)$, puis isole $g$.</p>`, b: R`<ul><li>$(f\circ g)\circ f$ est injective : <b>$f$ est injective</b> (appliquée en premier).</li><li>$f\circ(g\circ f)$ est surjective : <b>$f$ est surjective</b> (appliquée en dernier).</li></ul><p>Donc $f$ est bijective. On isole $g$ en composant par $f^{-1}$ à gauche et à droite (avec $f^{-1}\circ f = \mathrm{Id}_E$ et $f\circ f^{-1} = \mathrm{Id}_F$) :</p>$$f^{-1}\circ(f\circ g\circ f)\circ f^{-1} = g.$$<p>$g$ est une composée de trois bijections : <b>$g$ est bijective</b>.</p>`, rappels: ["ap-composee"] }
  ],
  piege: R`Si seulement $g\circ f$ est bijective, on ne peut rien dire de plus que $f$ injective et $g$ surjective.`,
  methode: R`Une bijection au milieu d'une composée s'isole en composant par les réciproques des deux côtés.`
},
{ id: "ap-fff", ...C1, level: 3, time: "15 min",
  title: "Si f ∘ f ∘ f = f",
  tt: R`Si $f\circ f\circ f = f$`,
  enonce: R`<p>Soit $f : E\to E$ telle que $f\circ f\circ f = f$. Montrer que $f$ est injective si et seulement si $f$ est surjective.</p>`,
  decode: { donnees: [R`$f(f(f(x))) = f(x)$ pour tout $x\in E$.`], but: R`Deux implications.`, cles: {} },
  steps: [
    { q: 1, t: "Injective ⇒ surjective", h: R`<p>Simplifie $f(f(f(y))) = f(y)$ par $f$.</p>`, b: R`<p>Supposons $f$ injective et soit $y\in E$. L'hypothèse donne $f\big(f(f(y))\big) = f(y)$. Les éléments $f(f(y))$ et $y$ ont la même image par $f$, qui est injective : $f(f(y)) = y$.</p><p>Donc $y = f\big(f(y)\big)$ : $y$ a pour antécédent $f(y)$. <b>$f$ est surjective</b>.</p>` },
    { q: 2, t: "Surjective ⇒ injective", h: R`<p>Montre que $f\circ f$ vaut l'identité sur les valeurs de $f$.</p>`, b: R`<p>Supposons $f$ surjective. Soit $x\in E$ ; il existe $u$ avec $x = f(u)$. Alors</p>$$f(f(x)) = f(f(f(u))) = f(u) = x.$$<p>Donc $f\circ f = \mathrm{Id}_E$. Soient $x,x'$ avec $f(x) = f(x')$ ; on applique $f$ : $f(f(x)) = f(f(x'))$, c'est-à-dire $x = x'$. <b>$f$ est injective</b>.</p><div class="sbox"><p style="margin:0">Si $f\circ f\circ f = f$ : $f$ injective $\iff f$ surjective (et alors $f\circ f = \mathrm{Id}_E$).</p></div>` }
  ],
  piege: R`En (2), vouloir simplifier par $f$ à gauche : on n'a pas l'injectivité, il faut passer par un antécédent $u$.`,
  methode: R`Simplifier à gauche avec l'injectivité ; avec la surjectivité, écrire chaque point comme une image.`
},
{ id: "ap-injection-surjection", ...C1, level: 3, time: "20 min",
  title: "Injection d'un côté, surjection de l'autre",
  enonce: R`<p>Soient $E$ et $F$ deux ensembles non vides. Montrer qu'il existe une injection de $E$ dans $F$ si et seulement s'il existe une surjection de $F$ sur $E$.</p>`,
  decode: { donnees: [R`$E\neq\emptyset$ : on peut fixer un élément $e_0\in E$.`], but: R`Construire une surjection à partir d'une injection, et inversement.`, cles: {} },
  steps: [
    { q: 1, t: "Une injection donne une surjection", h: R`<p>Envoie chaque $y$ de l'image sur son unique antécédent, et le reste sur $e_0$.</p>`, b: R`<p>Soit $i : E\to F$ injective, et $e_0\in E$ fixé. On définit $s : F\to E$ :</p><ul><li>si $y\in i(E)$, $y$ a un antécédent par $i$, et un seul (injectivité) : on pose $s(y)$ = cet antécédent ;</li><li>si $y\notin i(E)$, on pose $s(y) = e_0$.</li></ul><p><b>$s$ est surjective</b> : pour $x\in E$, $y = i(x)$ est dans $i(E)$ et son unique antécédent est $x$, donc $s(i(x)) = x$.</p>` },
    { q: 2, t: "Une surjection donne une injection", h: R`<p>Choisis pour chaque $x$ un antécédent.</p>`, b: R`<p>Soit $s : F\to E$ surjective. Pour chaque $x\in E$, l'ensemble de ses antécédents $s^{-1}(\{x\})$ est non vide ; on y <b>choisit</b> un élément, noté $j(x)$. (Pour un ensemble infini quelconque, la possibilité de faire tous ces choix à la fois s'appelle l'axiome du choix.)</p><p>On a ainsi $j : E\to F$ avec $s(j(x)) = x$ pour tout $x$, c'est-à-dire $s\circ j = \mathrm{Id}_E$.</p><p><b>$j$ est injective</b> : si $j(x) = j(x')$, on applique $s$ : $x = s(j(x)) = s(j(x')) = x'$.</p><div class="sbox"><p style="margin:0">Il existe une injection $E\to F$ $\iff$ il existe une surjection $F\to E$ ($E$, $F$ non vides).</p></div>` }
  ],
  piege: R`Oublier l'hypothèse $E\neq\emptyset$ : elle sert à définir $s$ hors de l'image de $i$.`,
  methode: R`$s\circ j = \mathrm{Id}$ entraîne $j$ injective et $s$ surjective.`
},
{ id: "ap-cantor", ...C1, level: 3, time: "15 min",
  title: "Il n'y a pas de surjection de E sur 𝒫(E)",
  tt: R`Il n'y a pas de surjection de $E$ sur $\mathcal P(E)$`,
  enonce: R`<p>Soit $E$ un ensemble. Montrer qu'il n'existe aucune application surjective de $E$ sur $\mathcal P(E)$.</p>`,
  decode: { donnees: [R`Un élément de $\mathcal P(E)$ est une partie de $E$.`], but: R`Pour toute $f : E\to\mathcal P(E)$, trouver une partie sans antécédent.`, cles: {} },
  steps: [
    { q: 1, t: "La partie diagonale", h: R`<p>$D = \{x\in E : x\notin f(x)\}$.</p>`, b: R`<p>Soit $f : E\to\mathcal P(E)$ quelconque. Pour chaque $x$, $f(x)$ est une partie de $E$, qui contient $x$ ou non. On pose</p>$$D = \{x\in E : x\notin f(x)\}\in\mathcal P(E),$$<p>l'ensemble des points qui n'appartiennent pas à leur image.</p>` },
    { q: 2, t: "D n'a pas d'antécédent", h: R`<p>Si $D = f(a)$, demande-toi si $a\in D$.</p>`, b: R`<p>Par l'absurde, supposons $D = f(a)$ pour un $a\in E$. Par définition de $D$ :</p>$$a\in D\iff a\notin f(a)\iff a\notin D,$$<p>la dernière équivalence car $f(a) = D$. Une phrase équivalente à sa négation : c'est absurde. Donc $D$ n'est l'image d'aucun élément, et $f$ n'est pas surjective.</p><div class="sbox"><p style="margin:0">Aucune application $E\to\mathcal P(E)$ n'est surjective (théorème de Cantor).</p></div><p>Pour $E$ fini à $n$ éléments, c'est cohérent avec $2^n>n$. Pour $E = \mathbb N$ : $\mathcal P(\mathbb N)$ n'est pas dénombrable.</p>`, rappels: ["absurde"] }
  ],
  piege: R`Chercher une surjection « au hasard » : l'argument doit marcher pour <b>toute</b> application $f$.`,
  methode: R`Argument diagonal : construire un objet qui diffère de chaque $f(x)$ « au point $x$ ».`
}
]);
})();

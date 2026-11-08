/* Annales · CCINP 2025 MP, Mathématiques 2. Énoncé transcrit, corrigé rédigé pour Lemme. */
(() => {
const R = String.raw;
const P = { subj: "annales", year: "mp", chap: 8, kind: "probleme", qnav: true, side: true };

LEMME.rappels({
  "c25-diag": { t: "Diagonalisabilité et polynôme minimal", b: R`$$A\text{ diagonalisable}\iff\pi_A\text{ scindé à racines simples};\qquad P(A) = 0\Rightarrow\pi_A\mid P.$$` },
  "c25-rang": { t: "Théorème du rang", b: R`<p>Pour $u\in\mathcal L(\mathbb R^n)$ : $\dim\ker u+\operatorname{rg}u = n$.</p>` },
  "c25-indep": { t: "Variables indépendantes", b: R`$$P(X_1\in A_1,\dots,X_n\in A_n) = \prod_iP(X_i\in A_i);\qquad X_i\sim\mathcal B(p)\text{ indép.}\Rightarrow\sum_{i = 1}^nX_i\sim\mathcal B(n,p).$$` }
});

const EX1 = R`<p>Les graphes sont orientés, de sommets numérotés à partir de $0$, et représentés par un dictionnaire d'adjacence. Exemple : <span data-def="d">$d = \{0:[1,3],\ 1:[2],\ 2:[4,5],\ 3:[4],\ 4:[1],\ 5:[\,],\ 6:[2]\}$</span>.</p>
<ol start="1"><li>Écrire <code>degreMax(d)</code> qui renvoie le degré sortant maximal.</li><li>Le graphe inverse a les mêmes sommets et les arêtes en sens inverse. Représenter le graphe inverse de l'exemple, puis écrire <code>grapheInv(d)</code>.</li><li>Une coloration $L$ est valide si deux sommets reliés par une arête n'ont pas la même couleur $L[s]$. Écrire <code>colorationValide(d, L)</code>.</li><li>Donner sa complexité dans le pire des cas en fonction du nombre $N$ de sommets et $M$ d'arêtes.</li></ol>
<p>Tables <code>FILMS(codefilm, nomfilm)</code> et <code>LOCATIONS(codecli, codefilm, datedebut, duree)</code>.</p><ol start="5"><li>Écrire une requête donnant la plus grande durée de location.</li><li>Écrire une requête donnant le code, le nom et la durée moyenne de location des films loués en moyenne moins de 2 jours, par durée moyenne décroissante.</li></ol>`;

const EX2 = R`<p>On pose <span data-def="Pn">$P_0 = 1$, $P_1 = X$ et $P_{n+2} = 2XP_{n+1}-P_n$</span>.</p>
<ol start="7"><li>Donner le degré et le terme dominant de $P_n$.</li><li>Justifier que $P_n(\cos\theta) = \cos(n\theta)$ pour tout réel $\theta$.</li></ol><p>Pour $P,Q\in\mathbb R[X]$, <span data-def="ps">$\langle P,Q\rangle = \int_{-1}^1\frac{P(t)Q(t)}{\sqrt{1-t^2}}dt$</span>.</p><ol start="9"><li>Justifier la convergence de cette intégrale.</li><li>Démontrer que c'est un produit scalaire sur $\mathbb R_k[X]$.</li><li>Calculer $\int_0^\pi\cos(n\theta)\cos(m\theta)\,d\theta$.</li><li>Donner une base orthonormale de $\mathbb R_k[X]$ pour ce produit scalaire.</li></ol>`;

const PB1 = R`<p>$X_1,\dots,X_n$ sont indépendantes, de loi de Bernoulli $\mathcal B(p)$, $p\in\,]0,1[$. <span data-def="UM">$U = (X_1,\dots,X_n)^\top$ et $M = UU^\top = (X_iX_j)_{i,j}$</span>.</p>
<ol start="13"><li>Montrer que $Y = \operatorname{rg}(M)$ suit une loi de Bernoulli de paramètre $1-(1-p)^n$.</li><li>Reconnaître la loi de $\operatorname{Tr}(M)$.</li><li>Vérifier que $M^2 = \operatorname{Tr}(M)M$ et en déduire la probabilité que $M$ soit une matrice de projection.</li><li>Même question si les $X_i$ suivent la loi de Poisson $\mathcal P(\lambda)$.</li><li>Soit $J$ la matrice dont tous les coefficients valent $1$. Donner son rang, sa trace, et la diagonaliser.</li><li>Donner une matrice d'ordre $3$ de rang $1$ non diagonalisable, et sa trace.</li></ol>`;

const PB2 = R`<p>$A\in\mathcal M_n(\mathbb R)$ ($n\geqslant2$) est de rang $1$, et $u$ est l'endomorphisme associé.</p>
<ol start="19"><li>Soit $C$ la première colonne non nulle de $A$. Montrer qu'il existe une ligne $L\neq0$ telle que $A = CL$.</li><li>Calculer le réel $LC$ et en déduire $A^2 = \operatorname{Tr}(A)A$.</li><li>Déterminer le polynôme caractéristique et le polynôme minimal de $A$.</li><li>Établir que $A$ est diagonalisable si et seulement si $\operatorname{Tr}(A)\neq0$.</li><li>On suppose $\operatorname{Im}u\cap\ker u\neq\{0\}$. Justifier que $\operatorname{Im}u\subset\ker u$, puis trouver une base où la matrice de $u$ a un seul coefficient non nul, un $1$ en position $(2,1)$.</li><li>On suppose $\operatorname{Im}u\cap\ker u = \{0\}$. Trouver une base où la matrice de $u$ est $\operatorname{Diag}(a,0,\dots,0)$ avec $a\neq0$.</li><li>Conclure que deux matrices de rang $1$ sont semblables si et seulement si elles ont la même trace.</li></ol>`;

LEMME.exercises([
{ id: "ccinp25-2-ex1", ...P, part: "Exercice 1", level: 1, time: "35 min",
  title: "Graphes en Python et requêtes SQL",
  enonce: EX1,
  decode: { donnees: [R`<code>d[s]</code> est la liste des successeurs de <code>s</code>.`], but: R`Parcourir un dictionnaire d'adjacence ; écrire deux requêtes.`, cles: {} },
  steps: [
    { q: 1, t: "Q1. Le degré sortant maximal", h: R`<p>Le degré sortant de <code>s</code> est <code>len(d[s])</code>.</p>`, b: R`<p>Le degré sortant d'un sommet <code>s</code> est le nombre de ses successeurs, <code>len(d[s])</code>. On parcourt tous les sommets en gardant le plus grand :</p><pre><code>def degreMax(d):
    m = 0
    for s in d:              # s parcourt les clés (les sommets)
        if len(d[s]) > m:
            m = len(d[s])
    return m</code></pre><p>Sur l'exemple : les degrés sont $2,1,2,1,1,0,1$, la fonction renvoie $2$.</p>` },
    { q: 2, t: "Q2. Le graphe inverse", h: R`<p>Chaque arête $s\to t$ devient $t\to s$.</p>`, b: R`<p>Arêtes de l'exemple : $0\to1$, $0\to3$, $1\to2$, $2\to4$, $2\to5$, $3\to4$, $4\to1$, $6\to2$. On les retourne : $1\to0$, $3\to0$, $2\to1$, $4\to2$, $5\to2$, $4\to3$, $1\to4$, $2\to6$. Dictionnaire du graphe inverse :</p>$$\{0:[\,],\ 1:[0,4],\ 2:[1,6],\ 3:[0],\ 4:[2,3],\ 5:[2],\ 6:[\,]\}.$$<pre><code>def grapheInv(d):
    inv = {s: [] for s in d}   # mêmes sommets, aucune arête au départ
    for s in d:
        for t in d[s]:          # arête s -> t
            inv[t].append(s)    # devient t -> s
    return inv</code></pre>` },
    { q: 3, t: "Q3. Vérifier une coloration", h: R`<p>Teste chaque arête.</p>`, b: R`<p>Une coloration est invalide dès qu'une arête relie deux sommets de même couleur. On teste toutes les arêtes :</p><pre><code>def colorationValide(d, L):
    for s in d:
        for t in d[s]:
            if L[s] == L[t]:
                return False   # une arête monochrome suffit
    return True</code></pre>` },
    { q: 4, t: "Q4. Complexité", h: R`<p>Combien de fois exécute-t-on le test ?</p>`, b: R`<p>La boucle extérieure fait $N$ tours. La boucle intérieure, au total sur tous les sommets, parcourt chaque arête une fois : $M$ tours au total. Chaque tour coûte un temps constant (accès à une liste, comparaison). Dans le pire des cas (coloration valide, on va jusqu'au bout) :</p><div class="sbox">$$\text{complexité}\ O(N+M).$$</div>` },
    { q: 5, t: "Q5. La plus grande durée", h: R`<p>Fonction d'agrégation <code>MAX</code>.</p>`, b: R`<pre><code>SELECT MAX(duree) FROM LOCATIONS;</code></pre>` },
    { q: 6, t: "Q6. Durées moyennes, avec jointure", h: R`<p><code>JOIN</code>, <code>GROUP BY</code>, <code>HAVING</code>, <code>ORDER BY</code>.</p>`, b: R`<p>Il faut le nom du film (table <code>FILMS</code>) et les durées (table <code>LOCATIONS</code>) : on fait une <b>jointure</b> sur <code>codefilm</code>. On regroupe par film, on calcule la moyenne, on filtre les groupes avec <code>HAVING</code> (une condition sur un agrégat ne peut pas être dans <code>WHERE</code>), puis on trie :</p><pre><code>SELECT F.codefilm, F.nomfilm, AVG(L.duree) AS moy
FROM FILMS F JOIN LOCATIONS L ON F.codefilm = L.codefilm
GROUP BY F.codefilm, F.nomfilm
HAVING AVG(L.duree) &lt; 2
ORDER BY moy DESC;</code></pre>` }
  ],
  piege: R`En Q6, mettre la condition sur <code>AVG</code> dans <code>WHERE</code> : <code>WHERE</code> filtre les lignes avant le regroupement.`,
  methode: R`Parcourir un graphe par dictionnaire : une double boucle « sommet, puis successeurs » visite chaque arête une fois.`
},
{ id: "ccinp25-2-ex2", ...P, part: "Exercice 2", level: 2, time: "45 min",
  title: "Les polynômes de Tchebychev",
  enonce: EX2,
  decode: { donnees: [R`$\cos((n+2)\theta)+\cos(n\theta) = 2\cos\theta\cos((n+1)\theta)$.`], but: R`Montrer que $(P_n)$ est orthogonale pour $\langle\cdot,\cdot\rangle$.`, cles: {} },
  steps: [
    { q: 7, t: "Q7. Degré et terme dominant", h: R`<p>Récurrence double : $\deg(2XP_{n+1}) = n+2>\deg P_n$.</p>`, b: R`<p>On montre par <b>récurrence double</b> : pour $n\geqslant1$, $P_n$ est de degré $n$ et de terme dominant $2^{n-1}X^n$.</p><ul><li>$P_1 = X = 2^0X^1$ ; $P_2 = 2X\cdot X-1 = 2X^2-1$, terme dominant $2^1X^2$.</li><li>Si c'est vrai pour $P_n$ et $P_{n+1}$ ($n\geqslant1$) : $2XP_{n+1}$ est de degré $n+2$, de terme dominant $2X\cdot2^nX^{n+1} = 2^{n+1}X^{n+2}$, et $P_n$ est de degré $n< n+2$ : il ne modifie pas ce terme. Donc $P_{n+2}$ a pour terme dominant $2^{n+1}X^{n+2}$.</li></ul><div class="sbox">$$P_0 = 1,\qquad\deg P_n = n\ \text{et terme dominant}\ 2^{n-1}X^n\ (n\geqslant1).$$</div>` },
    { q: 8, t: "Q8. P_n(cos θ) = cos(nθ)", h: R`<p>Formule $\cos a+\cos b = 2\cos\frac{a+b}2\cos\frac{a-b}2$.</p>`, b: R`<p>Récurrence double. $P_0(\cos\theta) = 1 = \cos0$ et $P_1(\cos\theta) = \cos\theta$. Supposons la formule vraie aux rangs $n$ et $n+1$. Par la formule $\cos a+\cos b = 2\cos\frac{a+b}2\cos\frac{a-b}2$ avec $a = (n+2)\theta$, $b = n\theta$ : $\cos((n+2)\theta)+\cos(n\theta) = 2\cos((n+1)\theta)\cos\theta$. Donc</p>$$P_{n+2}(\cos\theta) = 2\cos\theta\,P_{n+1}(\cos\theta)-P_n(\cos\theta) = 2\cos\theta\cos((n+1)\theta)-\cos(n\theta) = \cos((n+2)\theta).$$` },
    { q: 9, t: "Q9. Convergence de l'intégrale", h: R`<p>$\frac1{\sqrt{1-t^2}}\leqslant\frac1{\sqrt{1-t}}$ pour $t\in[0,1[$.</p>`, b: R`<p>$t\mapsto\frac{P(t)Q(t)}{\sqrt{1-t^2}}$ est continue sur $]-1,1[$ ; les problèmes sont en $\pm1$. $PQ$ est continue sur $[-1,1]$, donc bornée par un $K$. Pour $t\in[0,1[$, $1+t\geqslant1$, donc $\sqrt{1-t^2} = \sqrt{(1-t)(1+t)}\geqslant\sqrt{1-t}$, et</p>$$\Big|\frac{P(t)Q(t)}{\sqrt{1-t^2}}\Big|\leqslant\frac K{\sqrt{1-t}}.$$<p>$\int_0^1\frac{dt}{\sqrt{1-t}}$ converge (intégrale de Riemann, exposant $\frac12< 1$, en posant $s = 1-t$). Même chose en $-1$ par symétrie. L'intégrale converge absolument.</p>` },
    { q: 10, t: "Q10. Un produit scalaire", h: R`<p>Le point délicat : défini.</p>`, b: R`<ul><li><b>Symétrique</b> : $PQ = QP$.</li><li><b>Bilinéaire</b> : par linéarité de l'intégrale (et symétrie).</li><li><b>Positif</b> : $\langle P,P\rangle = \int\frac{P^2}{\sqrt{1-t^2}}\geqslant0$.</li><li><b>Défini</b> : si $\langle P,P\rangle = 0$, la fonction $\frac{P^2}{\sqrt{1-t^2}}$, continue et positive sur $]-1,1[$, est d'intégrale nulle, donc nulle sur $]-1,1[$ : $P$ a une infinité de racines, donc $P = 0$.</li></ul>` },
    { q: 11, t: "Q11. Intégrale de cos(nθ)cos(mθ)", h: R`<p>$\cos a\cos b = \frac12(\cos(a+b)+\cos(a-b))$.</p>`, b: R`<p>On linéarise : $\cos(n\theta)\cos(m\theta) = \frac12\big(\cos((n+m)\theta)+\cos((n-m)\theta)\big)$. Pour un entier $p\neq0$, $\int_0^\pi\cos(p\theta)\,d\theta = \big[\frac{\sin(p\theta)}p\big]_0^\pi = 0$ ; pour $p = 0$, elle vaut $\pi$.</p><div class="sbox">$$\int_0^\pi\cos(n\theta)\cos(m\theta)\,d\theta = \begin{cases}0&n\neq m\\\frac\pi2&n = m\neq0\\\pi&n = m = 0\end{cases}$$</div>` },
    { q: 12, t: "Q12. Une base orthonormale", h: R`<p>Change de variable $t = \cos\theta$.</p>`, b: R`<p>Dans $\langle P_n,P_m\rangle$, on pose $t = \cos\theta$, $\theta\in\,]0,\pi[$ : $dt = -\sin\theta\,d\theta$ et $\sqrt{1-t^2} = \sin\theta$ ($\sin\theta>0$). Avec Q8 :</p>$$\langle P_n,P_m\rangle = \int_0^\pi\frac{\cos(n\theta)\cos(m\theta)}{\sin\theta}\sin\theta\,d\theta = \int_0^\pi\cos(n\theta)\cos(m\theta)\,d\theta.$$<p>Par Q11 : $(P_0,\dots,P_k)$ est orthogonale, $\|P_0\|^2 = \pi$ et $\|P_n\|^2 = \frac\pi2$ pour $n\geqslant1$. C'est une base de $\mathbb R_k[X]$ (degrés $0,1,\dots,k$ : famille échelonnée). En normalisant :</p><div class="sbox">$$\Big(\tfrac1{\sqrt\pi}P_0,\ \sqrt{\tfrac2\pi}P_1,\ \dots,\ \sqrt{\tfrac2\pi}P_k\Big).$$</div>` }
  ],
  piege: R`Oublier que $P_0$ a une norme différente des autres ($\pi$ au lieu de $\frac\pi2$).`,
  methode: R`Polynômes de Tchebychev : tout se ramène à des cosinus par $t = \cos\theta$.`
},
{ id: "ccinp25-2-p1", ...P, part: "Partie I", level: 2, time: "45 min",
  title: "Matrices de rang 1 : exemples aléatoires et matrice J",
  tt: R`Matrices de rang $1$ : exemples aléatoires et matrice $J$`,
  enonce: PB1,
  decode: { donnees: [R`$X_i\in\{0,1\}$ donc $X_i^2 = X_i$.`], but: R`Étudier rang, trace et projections de $M = UU^\top$.`, cles: {} },
  steps: [
    { q: 13, t: "Q13. Le rang de M", h: R`<p>Les colonnes de $M$ sont $X_jU$.</p>`, b: R`<p>La colonne $j$ de $M = UU^\top$ est $X_jU$ : toutes les colonnes sont proportionnelles à $U$, donc $\operatorname{rg}M\leqslant1$.</p><ul><li>Si $U = 0$ (tous les $X_i$ nuls), $M = 0$ et $Y = 0$.</li><li>Sinon un $X_i$ vaut $1$, et le coefficient diagonal $X_i^2 = 1$ : $M\neq0$, $Y = 1$.</li></ul><p>Donc $Y\in\{0,1\}$ et, par indépendance, $P(Y = 0) = P(X_1 = 0,\dots,X_n = 0) = (1-p)^n$. $Y$ suit la loi de Bernoulli de paramètre $1-(1-p)^n$.</p>`, rappels: ["c25-indep"] },
    { q: 14, t: "Q14. La loi de la trace", h: R`<p>$X_i^2 = X_i$.</p>`, b: R`<p>$\operatorname{Tr}M = \sum_iX_i^2 = \sum_iX_i$ (car $X_i\in\{0,1\}$). Somme de $n$ Bernoulli indépendantes de paramètre $p$ : $\operatorname{Tr}M\sim\mathcal B(n,p)$ (loi binomiale).</p>` },
    { q: 15, t: "Q15. M² = Tr(M) M ; probabilité d'être un projecteur", h: R`<p>$U^\top U$ est un réel.</p>`, b: R`<p>$M^2 = UU^\top UU^\top = U(U^\top U)U^\top$, et $U^\top U = \sum X_i^2 = \operatorname{Tr}M$ est un réel, qu'on sort : $M^2 = \operatorname{Tr}(M)M$.</p><p>$M$ est une matrice de projection si $M^2 = M$, c'est-à-dire $(\operatorname{Tr}M-1)M = 0$ : soit $M = 0$, soit $\operatorname{Tr}M = 1$. Et $M = 0\iff\operatorname{Tr}M = 0$. Avec $S = \operatorname{Tr}M\sim\mathcal B(n,p)$ :</p><div class="sbox">$$P(M\ \text{projecteur}) = P(S = 0)+P(S = 1) = (1-p)^n+np(1-p)^{n-1}.$$</div><p>(On compte la matrice nulle, qui est le projecteur sur $\{0\}$.)</p>` },
    { q: 16, t: "Q16. Le cas Poisson", h: R`<p>$\operatorname{Tr}M = \sum X_i^2 = 1$ : un seul $X_i$ vaut $1$.</p>`, b: R`<p>Le calcul $M^2 = \operatorname{Tr}(M)M$ reste vrai, avec $\operatorname{Tr}M = \sum X_i^2$. $M$ est un projecteur si et seulement si $\operatorname{Tr}M\in\{0,1\}$.</p><ul><li>$\operatorname{Tr}M = 0$ : tous les $X_i$ nuls, probabilité $(e^{-\lambda})^n = e^{-n\lambda}$.</li><li>$\operatorname{Tr}M = 1$ : les $X_i$ sont des entiers, donc un seul vaut $1$ et les autres $0$. $n$ choix pour l'indice, chacun de probabilité $\lambda e^{-\lambda}\cdot(e^{-\lambda})^{n-1}$.</li></ul><div class="sbox">$$P(M\ \text{projecteur}) = e^{-n\lambda}+n\lambda e^{-n\lambda} = (1+n\lambda)e^{-n\lambda}.$$</div>` },
    { q: 17, t: "Q17. Diagonaliser J", h: R`<p>$J^2 = nJ$ ; $\ker J$ : $x_1+\dots+x_n = 0$.</p>`, b: R`<p>Toutes les colonnes sont égales à $(1,\dots,1)^\top\neq0$ : $\operatorname{rg}J = 1$, et $\operatorname{Tr}J = n$.</p><ul><li>$\ker J = \{x : x_1+\dots+x_n = 0\}$, de dimension $n-1$, de base $e_1-e_k$, $k = 2,\dots,n$ (valeur propre $0$).</li><li>$J(1,\dots,1)^\top = n(1,\dots,1)^\top$ (valeur propre $n$).</li></ul><p>On a $n$ vecteurs propres libres :</p><div class="sbox">$$J = PDP^{-1},\quad D = \operatorname{Diag}(n,0,\dots,0),\quad P = \begin{pmatrix}1&1&1&\cdots&1\\1&-1&0&\cdots&0\\1&0&-1&&\vdots\\\vdots&&&\ddots&0\\1&0&\cdots&0&-1\end{pmatrix}.$$</div>` },
    { q: 18, t: "Q18. Rang 1 sans être diagonalisable", h: R`<p>Une matrice nilpotente non nulle.</p>`, b: R`<p>$N = \begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix}$ est de rang $1$ et $N^2 = 0$. Sa seule valeur propre est $0$. Si elle était diagonalisable, elle serait semblable à la matrice nulle, donc nulle : contradiction. $\operatorname{Tr}N = 0$.</p>` }
  ],
  piege: R`En Q15, oublier la matrice nulle, qui est aussi une matrice de projection.`,
  methode: R`Pour $M = UU^\top$ : $M^2 = (U^\top U)M$, avec $U^\top U$ un scalaire.`
},
{ id: "ccinp25-2-p2", ...P, part: "Partie II", level: 3, time: "1 h",
  title: "Matrices de rang 1 : réduction et classification",
  tt: R`Matrices de rang $1$ : réduction et classification`,
  enonce: PB2,
  decode: { donnees: [R`$\operatorname{rg}A = 1$ : $\dim\operatorname{Im}u = 1$ et $\dim\ker u = n-1$.`], but: R`Montrer que la trace classe les matrices de rang $1$ à similitude près.`, cles: {} },
  steps: [
    { q: 19, t: "Q19. A = C L", h: R`<p>Toutes les colonnes sont dans la droite $\operatorname{Im}A = \operatorname{Vect}(C)$.</p>`, b: R`<p>$\operatorname{Im}A$ est engendré par les colonnes de $A$ et est de dimension $1$. $C\neq0$ est dans $\operatorname{Im}A$, donc $\operatorname{Im}A = \operatorname{Vect}(C)$. Chaque colonne $A_j$ est un multiple de $C$ : $A_j = \ell_jC$. Avec $L = (\ell_1,\dots,\ell_n)$, la colonne $j$ de $CL$ est $\ell_jC$ : $A = CL$. $L\neq0$ car $A\neq0$.</p>` },
    { q: 20, t: "Q20. LC = Tr(A), puis A²", h: R`<p>$a_{i,i} = c_i\ell_i$.</p>`, b: R`<p>$LC = \sum_j\ell_jc_j$ est un réel. Le coefficient $(i,i)$ de $A = CL$ est $c_i\ell_i$, donc $\operatorname{Tr}A = \sum_ic_i\ell_i = LC$. Alors</p>$$A^2 = CLCL = C(LC)L = \operatorname{Tr}(A)\,CL = \operatorname{Tr}(A)A.$$` },
    { q: 21, t: "Q21. Polynômes caractéristique et minimal", h: R`<p>$X^2-\operatorname{Tr}(A)X$ annule $A$ ; $\dim\ker A = n-1$.</p>`, b: R`<p>Notons $t = \operatorname{Tr}A$.</p><p><b>Minimal</b> : $X(X-t)$ annule $A$ (Q20), donc $\mu_A$ le divise. $\mu_A\neq X$ (car $A\neq0$), et $\mu_A\neq X-t$ (sinon $A = tI_n$, de rang $0$ ou $n\geqslant2$). Donc $\mu_A = X(X-t)$ (qui vaut $X^2$ si $t = 0$).</p><p><b>Caractéristique</b> : par le théorème du rang, $\dim\ker A = n-1$ : $0$ est valeur propre de multiplicité géométrique $n-1$, donc de multiplicité algébrique au moins $n-1$. Sur $\mathbb C$, $\chi_A$ est scindé et la somme des valeurs propres vaut la trace : la dernière valeur propre est $t$.</p><div class="sbox">$$\chi_A = X^{n-1}(X-\operatorname{Tr}A),\qquad\mu_A = X(X-\operatorname{Tr}A).$$</div>`, rappels: ["c25-rang"] },
    { q: 22, t: "Q22. Diagonalisable ⇔ Tr(A) ≠ 0", h: R`<p>Racines simples de $\mu_A$.</p>`, b: R`<p>$A$ est diagonalisable si et seulement si $\mu_A$ est scindé à racines simples. $\mu_A = X(X-t)$ a deux racines simples si $t\neq0$, et une racine double si $t = 0$ ($\mu_A = X^2$).</p><div class="sbox">$$A\ \text{diagonalisable}\iff\operatorname{Tr}A\neq0.$$</div>`, rappels: ["c25-diag"] },
    { q: 23, t: "Q23. Le cas Im u ∩ ker u ≠ {0}", h: R`<p>Un sous-espace non nul d'une droite est la droite.</p>`, b: R`<p>$\operatorname{Im}u\cap\ker u$ est un sous-espace non nul de la droite $\operatorname{Im}u$ : il est donc égal à $\operatorname{Im}u$, et $\operatorname{Im}u\subset\ker u$.</p><p><b>Base</b> : on prend $e_1$ avec $u(e_1)\neq0$ (il en existe, $u\neq0$) et $e_2 = u(e_1)$, qui est dans $\operatorname{Im}u\subset\ker u$. On complète $e_2$ en une base $(e_2,e_3,\dots,e_n)$ de $\ker u$ (dimension $n-1$). La famille $(e_1,\dots,e_n)$ est libre : si $\lambda_1e_1+\dots = 0$, on applique $u$ : $\lambda_1e_2 = 0$, donc $\lambda_1 = 0$, puis les autres coefficients sont nuls (base de $\ker u$). Dans cette base : $u(e_1) = e_2$ et $u(e_k) = 0$ pour $k\geqslant2$ : la matrice a un seul coefficient non nul, un $1$ en position $(2,1)$.</p>` },
    { q: 24, t: "Q24. Le cas Im u ∩ ker u = {0}", h: R`<p>$\mathbb R^n = \operatorname{Im}u\oplus\ker u$.</p>`, b: R`<p>Les dimensions $1$ et $n-1$ ont pour somme $n$ et l'intersection est nulle : $\mathbb R^n = \operatorname{Im}u\oplus\ker u$. Soit $e_1$ une base de $\operatorname{Im}u$ : $u(e_1)\in\operatorname{Im}u$, donc $u(e_1) = ae_1$, avec $a\neq0$ car $e_1\notin\ker u$. On complète par une base $(e_2,\dots,e_n)$ de $\ker u$ : dans la base $(e_1,\dots,e_n)$, la matrice de $u$ est $\operatorname{Diag}(a,0,\dots,0)$. Par invariance de la trace, $a = \operatorname{Tr}A$.</p>` },
    { q: 25, t: "Q25. La trace classe les matrices de rang 1", h: R`<p>Le cas Q23 correspond à $\operatorname{Tr} = 0$.</p>`, b: R`<p><b>⇒</b> Deux matrices semblables ont la même trace.</p><p><b>⇐</b> Soient $A,B$ de rang $1$ et de même trace $t$.</p><ul><li>Si $t = 0$ : $A^2 = 0$ (Q20), donc $\operatorname{Im}u\subset\ker u$, et l'intersection est non nulle : on est dans le cas Q23. $A$ et $B$ sont semblables à la même matrice (un $1$ en $(2,1)$, des $0$ ailleurs).</li><li>Si $t\neq0$ : on n'est pas dans le cas Q23 (qui donne trace $0$), donc dans le cas Q24 : $A$ et $B$ sont semblables à $\operatorname{Diag}(t,0,\dots,0)$.</li></ul><p>Dans les deux cas, $A$ et $B$ sont semblables à une même matrice, donc semblables entre elles (transitivité).</p><div class="sbox"><p style="margin:0">Deux matrices de rang $1$ sont semblables $\iff$ elles ont la même trace.</p></div>` }
  ],
  piege: R`En Q21, oublier que $\mu_A\neq X-\operatorname{Tr}A$ demande $n\geqslant2$ : sinon $A = tI_n$ serait de rang $n$.`,
  methode: R`Une matrice de rang $1$ s'écrit $CL$ : tout se calcule avec le réel $LC = \operatorname{Tr}A$.`
}
]);
})();

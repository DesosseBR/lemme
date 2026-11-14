/* Méthode : un chapitre, la façon de faire. Clé = titre du chapitre.
   Blocs : Réflexe (quand on voit quoi), Méthode (étapes), Exemple, Piège. Les data-mlab sont les labos interactifs. */
LEMME.METHODES = {
"Matrices et systèmes linéaires": R`
<nav class="msum"><a href="#m-taille">Taille</a><a href="#m-somme">Somme</a><a href="#m-produit">Produit</a><a href="#m-regles">Règles de calcul</a><a href="#m-puiss">Puissances</a><a href="#m-nilp">Nilpotentes</a><a href="#m-transp">Transposée</a><a href="#m-inv">Inverse</a><a href="#m-sys">Systèmes</a><a href="#m-trace">Trace</a><a href="#m-reflexes">Réflexes</a><a href="#m-erreurs">Erreurs</a><a href="#m-entrainement">S'entraîner</a></nav>

<h2 id="m-taille">1. Taille et notations</h2>
<div class="sbox">$$A = (a_{i,j})_{\substack{1\leqslant i\leqslant n\\1\leqslant j\leqslant p}}\in\mathcal M_{n,p}(\mathbb K)\iff A\ \text{a}\ n\ \text{lignes et}\ p\ \text{colonnes}.$$</div>
<ul>
<li>$a_{i,j}$ : <b>ligne $i$ d'abord, colonne $j$ ensuite</b>.</li>
<li>$\mathcal M_n(\mathbb K) = \mathcal M_{n,n}(\mathbb K)$ : matrices <b>carrées</b>.</li>
<li>Matrice ligne : $n = 1$. Matrice colonne : $p = 1$.</li>
</ul>
<p class="ml">Exemple</p>
$$A = \begin{pmatrix}2&5&4\\7&-6&0\end{pmatrix}\in\mathcal M_{2,3}(\mathbb R),\qquad a_{1,3} = 4,\quad a_{2,1} = 7,\quad a_{2,2} = -6.$$
<p class="ml">Matrices à connaître</p>
$$0_{n,p} = \begin{pmatrix}0&\cdots&0\\\vdots&&\vdots\\0&\cdots&0\end{pmatrix},\qquad I_n = \begin{pmatrix}1&&0\\&\ddots&\\0&&1\end{pmatrix},\qquad D = \begin{pmatrix}d_1&&0\\&\ddots&\\0&&d_n\end{pmatrix}.$$
<ul>
<li>La diagonale va <b>du haut à gauche vers le bas à droite</b>, et seulement dans une matrice carrée.</li>
<li>$0_n$ et $I_n$ sont diagonales. Une diagonale peut contenir des $0$.</li>
</ul>

<h2 id="m-somme">2. Somme et produit par un scalaire</h2>
<p class="ml">Réflexe</p>
<div class="sbox">$$A + B\ \text{existe}\iff A\ \text{et}\ B\ \text{ont la même taille}.$$</div>
<p class="ml">Méthode</p>
$$A + B = (a_{i,j} + b_{i,j}),\qquad \lambda A = (\lambda a_{i,j}),\qquad A + 0 = A.$$
<p class="ml">Exemple</p>
$$\begin{pmatrix}1&2&0\\3&-1&4\end{pmatrix}+\begin{pmatrix}5&0&2\\1&1&-4\end{pmatrix} = \begin{pmatrix}6&2&2\\4&0&0\end{pmatrix},\qquad -2\begin{pmatrix}1&3\\0&-1\end{pmatrix} = \begin{pmatrix}-2&-6\\0&2\end{pmatrix}.$$
<p class="ml piege">Piège</p>
<ul>
<li>$A + 3$ n'a <b>aucun sens</b> : on écrit $A + 3I_n$.</li>
<li>$\dfrac AB$ n'existe <b>jamais</b> : on ne divise pas par une matrice, on multiplie par son inverse.</li>
</ul>

<h2 id="m-produit">3. Le produit matriciel</h2>
<p class="ml">Réflexe : vérifier les tailles avant de calculer</p>
<div class="sbox">$$\underbrace{A}_{n\times p}\ \underbrace{B}_{p\times r} = \underbrace{AB}_{n\times r}\qquad\text{(les deux}\ p\ \text{du milieu doivent être égaux, puis ils disparaissent)}.$$</div>
<p class="ml">Méthode : ligne × colonne</p>
<div class="sbox">$$(AB)_{i,j} = \sum_{k=1}^pa_{i,k}\,b_{k,j}\qquad\text{(ligne}\ i\ \text{de}\ A\ \text{contre colonne}\ j\ \text{de}\ B).$$</div>
<p>Moyen de retenir : $(i,j)$ se découpe en $(i,k)(k,j)$, comme une relation de Chasles.</p>
<p class="ml">Disposition en croix</p>
<p>On écrit $B$ <b>au-dessus</b> du résultat et $A$ <b>à gauche</b> : chaque case se calcule avec la ligne à sa gauche et la colonne au-dessus.</p>
$$\begin{array}{cc}&\begin{pmatrix}1&5\\7&8\end{pmatrix}\\\begin{pmatrix}3&1\\2&4\end{pmatrix}&\begin{pmatrix}3\cdot1+1\cdot7&3\cdot5+1\cdot8\\2\cdot1+4\cdot7&2\cdot5+4\cdot8\end{pmatrix} = \begin{pmatrix}10&23\\30&42\end{pmatrix}\end{array}$$
<div data-mlab="prod"></div>
<p class="ml">À savoir</p>
$$AI_p = A,\qquad I_nA = A,\qquad A\in\mathcal M_n\ \Longrightarrow\ AI_n = I_nA = A.$$
<p class="ml piege">Piège</p>
<ul>
<li>$AB$ peut exister sans que $BA$ existe : $A\in\mathcal M_{2,4}$, $B\in\mathcal M_{4,7}$.</li>
<li>Même carrées, en général $AB\neq BA$. Si $AB = BA$, on dit que $A$ et $B$ <b>commutent</b>.</li>
<li>$AB = 0\ \not\Longrightarrow\ A = 0\ \text{ou}\ B = 0$ :</li>
</ul>
$$\begin{pmatrix}1&1\\1&1\end{pmatrix}\begin{pmatrix}1&-1\\-1&1\end{pmatrix} = \begin{pmatrix}0&0\\0&0\end{pmatrix}.$$

<h2 id="m-regles">4. Règles de calcul</h2>
<div class="sbox">$$\left\{\begin{aligned}&(AB)C = A(BC)\quad\text{(associativité)}\\&A(\lambda B + \mu C) = \lambda AB + \mu AC\\&(\lambda A + \mu B)C = \lambda AC + \mu BC\end{aligned}\right.$$</div>
<p class="ml">Méthode : factoriser</p>
<ul>
<li>À gauche : $AB + AC = A(B + C)$.</li>
<li>À droite : $BA + CA = (B + C)A$.</li>
<li>Mais $AB + AC\neq(B + C)A$ en général.</li>
</ul>
<p class="ml piege">Piège : le $I_n$ oublié</p>
$$3A^6 - 6A^3 + 7A = A\,(3A^5 - 6A^2 + 7I_n)\qquad\text{et non}\qquad A\,(3A^5 - 6A^2 + 7).$$
<div class="sbox">$$\cdots + kA = A\,(\cdots + kI_n):\ \text{un nombre seul devient}\ kI_n.$$</div>

<h2 id="m-puiss">5. Puissances</h2>
<p class="ml">Définitions</p>
$$A^0 = I_n,\qquad A^1 = A,\qquad A^{k+1} = A\,A^k = A^k\,A.$$
<p class="ml">Réflexe : quelle méthode pour $A^n$ ?</p>
<ol>
<li><b>$A$ diagonale</b> : on élève chaque coefficient diagonal.</li>
<li><b>$A = \lambda I_n + N$ avec $N$ nilpotente</b> : binôme de Newton, la somme s'arrête vite.</li>
<li><b>Calcul de $A^2, A^3$ qui fait apparaître un motif</b> : on conjecture, puis récurrence.</li>
<li><b>Polynôme annulateur</b> $A^2 = aA + bI_n$ : $A^n = a_nA + b_nI_n$, suites récurrentes.</li>
</ol>
<div class="sbox">$$D = \operatorname{diag}(d_1,\dots,d_n)\ \Longrightarrow\ D^k = \operatorname{diag}(d_1^k,\dots,d_n^k),\qquad I_n^k = I_n.$$</div>
<p class="ml">Le binôme de Newton</p>
<div class="sbox">$$AB = BA\ \Longrightarrow\ (A + B)^n = \sum_{k=0}^n\binom nkA^kB^{n-k}.$$</div>
<p class="ml">Méthode</p>
<ol>
<li>Écrire $A = \lambda I_n + N$.</li>
<li><b>Justifier</b> : $I_n$ commute avec toute matrice, donc $\lambda I_n$ et $N$ commutent.</li>
<li>Calculer $N^2, N^3,\dots$ jusqu'à trouver $N^p = 0$.</li>
<li>Appliquer la formule : seuls les termes $k\lt p$ restent.</li>
</ol>
<p class="ml">Exemple</p>
$$A = \begin{pmatrix}2&1&0\\0&2&1\\0&0&2\end{pmatrix} = 2I_3 + N,\qquad N = \begin{pmatrix}0&1&0\\0&0&1\\0&0&0\end{pmatrix},\qquad N^2 = \begin{pmatrix}0&0&1\\0&0&0\\0&0&0\end{pmatrix},\qquad N^3 = 0.$$
$$A^n = 2^nI_3 + n\,2^{n-1}N + \binom n2\,2^{n-2}N^2 = \begin{pmatrix}2^n&n2^{n-1}&\binom n22^{n-2}\\0&2^n&n2^{n-1}\\0&0&2^n\end{pmatrix}\qquad(n\geqslant2).$$
<div data-mlab="puiss"></div>
<p class="ml piege">Piège</p>
<ul>
<li>Sans $AB = BA$, la formule est <b>fausse</b> : $(A + B)^2 = A^2 + AB + BA + B^2$.</li>
<li>Le correcteur enlève des points si la commutation n'est pas écrite.</li>
</ul>

<h2 id="m-nilp">6. Matrices nilpotentes</h2>
<div class="sbox">$$N\ \text{nilpotente}\iff\exists p\in\mathbb N,\ N^p = 0,\qquad\text{indice} = \min\{p : N^p = 0\}.$$</div>
$$N^p = 0\ \Longrightarrow\ \forall k\geqslant p,\ N^k = N^pN^{k-p} = 0.$$
<p class="ml">Réflexe</p>
<p>Une matrice <b>triangulaire stricte</b> (zéros sur la diagonale et en dessous) est nilpotente : chaque puissance pousse les coefficients d'un cran vers le coin en haut à droite.</p>

<h2 id="m-transp">7. Transposée</h2>
<div class="sbox">$$({}^tA)_{i,j} = a_{j,i},\qquad A\in\mathcal M_{n,p}\ \Longrightarrow\ {}^tA\in\mathcal M_{p,n}.$$</div>
<p>La ligne $i$ de $A$ devient la colonne $i$ de $\,{}^tA$.</p>
$$\,{}^t\!\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix} = \begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix}.$$
<p class="ml">Règles</p>
<div class="sbox">$$\,{}^t({}^tA) = A,\qquad {}^t(\lambda A + B) = \lambda\,{}^tA + {}^tB,\qquad {}^t(AB) = {}^tB\,{}^tA.$$</div>
<p class="ml piege">Piège</p>
<p>$\,{}^t(AB) = {}^tA\,{}^tB$ est faux : vérifie les tailles, $\,{}^tA\,{}^tB$ n'existe même pas en général.</p>
<p class="ml">Symétrique, antisymétrique (matrices carrées)</p>
$$\mathcal S_n:\ {}^tA = A,\qquad\mathcal A_n:\ {}^tA = -A\ \Longrightarrow\ a_{i,i} = 0.$$
$$\begin{pmatrix}1&2&3\\2&0&5\\3&5&4\end{pmatrix}\in\mathcal S_3,\qquad\begin{pmatrix}0&2&-1\\-2&0&3\\1&-3&0\end{pmatrix}\in\mathcal A_3.$$

<h2 id="m-inv">8. Matrice inverse</h2>
<div class="sbox">$$A\in GL_n(\mathbb K)\iff\exists B\in\mathcal M_n(\mathbb K),\ AB = BA = I_n,\qquad B = A^{-1}\ \text{est unique}.$$</div>
<p class="ml">À savoir</p>
<ul>
<li>Pour une matrice carrée, <b>un seul côté suffit</b> : $AB = I_n\Longrightarrow BA = I_n$.</li>
<li>$A$ inversible $\iff\det A\neq0\iff$ le pivot de Gauss donne $n$ pivots non nuls.</li>
<li>$(AB)^{-1} = B^{-1}A^{-1}$ et $({}^tA)^{-1} = {}^t(A^{-1})$.</li>
</ul>
<p class="ml">Réflexe : quelle méthode ?</p>
<ol>
<li><b>Taille 2</b> : la formule.</li>
<li><b>Relation polynomiale donnée</b> : on factorise par $A$.</li>
<li><b>Sinon</b> : pivot de Gauss sur $(A\,|\,I_n)$.</li>
</ol>
<p class="ml">Méthode 1 : taille 2</p>
<div class="sbox">$$ad - bc\neq0\ \Longrightarrow\ \begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1} = \frac1{ad - bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}.$$</div>
<p class="ml">Méthode 2 : polynôme annulateur</p>
$$3A^5 - 6A^3 + 7A = I_n\iff A\,(3A^4 - 6A^2 + 7I_n) = I_n\ \Longrightarrow\ A^{-1} = 3A^4 - 6A^2 + 7I_n.$$
$$A^2 - 3A + 2I_n = 0\iff A\cdot\tfrac12(3I_n - A) = I_n\ \Longrightarrow\ A^{-1} = \tfrac12(3I_n - A).$$
<p class="ml">Méthode 3 : pivot de Gauss sur $(A\,|\,I_n)$</p>
<ol>
<li>On écrit $A$ et $I_n$ côte à côte.</li>
<li>On fait <b>les mêmes</b> opérations sur les lignes des deux côtés : $L_i\leftarrow L_i - \lambda L_j$, $L_i\leftarrow\frac1\mu L_i$, $L_i\leftrightarrow L_j$.</li>
<li>Quand la partie gauche vaut $I_n$, la partie droite vaut $A^{-1}$.</li>
</ol>
<div data-mlab="gauss"></div>
<p class="ml">Isoler une matrice</p>
<div class="sbox">$$AB = C\ \Longrightarrow\ A^{-1}AB = A^{-1}C\ \Longrightarrow\ B = A^{-1}C.$$</div>
<p class="ml piege">Piège</p>
<ul>
<li>On multiplie <b>du même côté</b> des deux membres : $A^{-1}AB = CA^{-1}$ est faux.</li>
<li>$A^{-1}$ n'est pas $\dfrac1A$ : la fraction de matrices n'existe pas.</li>
</ul>

<h2 id="m-sys">9. Systèmes linéaires</h2>
<p class="ml">Réflexe : écrire $AX = B$</p>
$$\left\{\begin{aligned}2x + 3y - z&= 1\\x\phantom{{}+3y} + 4z&= -6\\-x + y + z&= 0\end{aligned}\right.\iff\underbrace{\begin{pmatrix}2&3&-1\\1&0&4\\-1&1&1\end{pmatrix}}_{A}\underbrace{\begin{pmatrix}x\\y\\z\end{pmatrix}}_{X} = \underbrace{\begin{pmatrix}1\\-6\\0\end{pmatrix}}_{B}.$$
<p class="ml">Méthode : bien poser le système</p>
<ol>
<li>Inconnues <b>à gauche</b>, constantes <b>à droite</b>.</li>
<li>Même ordre $x, y, z$ sur chaque ligne.</li>
<li>Une inconnue absente : on écrit $0$ (ici $0y$ dans la ligne 2).</li>
</ol>
<div class="sbox">$$\left\{\begin{aligned}A\ \text{inversible}&\Longrightarrow\ X = A^{-1}B\ \text{(une seule solution)}\\A\ \text{non inversible}&\Longrightarrow\ \text{aucune solution ou une infinité}\end{aligned}\right.$$</div>
<p class="ml">En pratique</p>
<p>On ne calcule pas $A^{-1}$ pour résoudre un seul système : on applique le pivot de Gauss directement sur $(A\,|\,B)$, ce qui coûte moins de calculs.</p>
<p class="ml">Matrices élémentaires</p>
<p>Chaque opération sur les lignes revient à multiplier <b>à gauche</b> par une matrice inversible :</p>
$$L_i\leftarrow L_i + \lambda L_j\iff A\mapsto(I_n + \lambda E_{i,j})A,\qquad L_i\leftrightarrow L_j\iff A\mapsto P_{i,j}A.$$
<p>Le pivot de Gauss ne change donc pas l'ensemble des solutions.</p>

<h2 id="m-trace">10. Trace</h2>
<div class="sbox">$$A\in\mathcal M_n(\mathbb K):\quad\operatorname{tr}A = \sum_{i=1}^na_{i,i}.$$</div>
$$\operatorname{tr}\begin{pmatrix}3&1&0\\2&-1&4\\5&0&-8\end{pmatrix} = 3 + (-1) + (-8) = -6,\qquad\operatorname{tr}I_n = n.$$
<div class="sbox">$$\operatorname{tr}(A + B) = \operatorname{tr}A + \operatorname{tr}B,\quad\operatorname{tr}(\lambda A) = \lambda\operatorname{tr}A,\quad\operatorname{tr}({}^tA) = \operatorname{tr}A,\quad\operatorname{tr}(AB) = \operatorname{tr}(BA).$$</div>
<p class="ml">Exemple d'usage</p>
$$AB - BA = I_n\ \Longrightarrow\ 0 = \operatorname{tr}(AB) - \operatorname{tr}(BA) = \operatorname{tr}I_n = n:\ \text{impossible}.$$
<p class="ml piege">Piège</p>
<p>$\operatorname{tr}(AB)\neq\operatorname{tr}A\cdot\operatorname{tr}B$ en général, et $\operatorname{tr}(ABC)\neq\operatorname{tr}(BAC)$ : seules les permutations circulaires sont permises.</p>

<h2 id="m-reflexes">Si tu vois… alors pense à…</h2>
<div class="mrefl">
<div><b>$A^n$ à calculer</b><span>$A = \lambda I + N$, $N$ nilpotente, binôme.</span></div>
<div><b>$A^2 = aA + bI$</b><span>Inverse en factorisant, ou $A^n = a_nA + b_nI$.</span></div>
<div><b>$(A + B)^n$</b><span>Vérifier d'abord $AB = BA$.</span></div>
<div><b>« Montrer que $A$ est inversible »</b><span>Trouver $B$ avec $AB = I_n$.</span></div>
<div><b>Système à 3 inconnues</b><span>$AX = B$, puis pivot sur $(A\,|\,B)$.</span></div>
<div><b>$AB - BA = \dots$</b><span>Prendre la trace.</span></div>
<div><b>$\,{}^t(\cdots)$ d'un produit</b><span>L'ordre s'inverse.</span></div>
<div><b>Triangulaire, zéros sur la diagonale</b><span>Nilpotente.</span></div>
<div><b>$AB = C$, isoler $B$</b><span>Multiplier par $A^{-1}$ à gauche.</span></div>
<div><b>Produit à poser</b><span>Tailles d'abord : $(n,p)(p,r)$.</span></div>
</div>

<h2 id="m-erreurs">Les 8 erreurs qui coûtent des points</h2>
<ol class="merr">
<li>Écrire $A + 3$ au lieu de $A + 3I_n$.</li>
<li>Diviser par une matrice.</li>
<li>Appliquer le binôme sans prouver $AB = BA$.</li>
<li>Écrire $\,{}^t(AB) = {}^tA\,{}^tB$ ou $(AB)^{-1} = A^{-1}B^{-1}$.</li>
<li>Déduire $A = 0$ ou $B = 0$ de $AB = 0$.</li>
<li>Multiplier par $A^{-1}$ à gauche d'un côté et à droite de l'autre.</li>
<li>Oublier $A^0 = I_n$ dans le binôme ($k = 0$).</li>
<li>Calculer un produit sans vérifier les tailles.</li>
</ol>

<h2 id="m-entrainement">S'entraîner</h2>
<div data-mlab="exos"></div>
<h2>Vrai ou faux ?</h2>
<div data-mlab="quiz"></div>
`
};

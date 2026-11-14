/* Méthode : un chapitre, la façon de faire. Clé = titre du chapitre.
   Blocs : Réflexe (quand on voit quoi), Méthode (étapes), Exemple, Piège. Les data-mlab sont les labos interactifs. */
LEMME.METHODES = {
"Matrices et systèmes linéaires": R`
<nav class="msum"><a href="#m-taille">Taille</a><a href="#m-somme">Somme</a><a href="#m-produit">Produit</a><a href="#m-regles">Règles de calcul</a><a href="#m-puiss">Puissances</a><a href="#m-nilp">Nilpotentes</a><a href="#m-transp">Transposée</a><a href="#m-inv">Inverse</a><a href="#m-sys">Systèmes</a><a href="#m-trace">Trace</a><a href="#m-al">Applications linéaires</a><a href="#m-compo">Composer</a><a href="#m-passage">Passage</a><a href="#m-chgt">Changement de base</a><a href="#m-an">Calculer $A^n$</a><a href="#m-blocs">Blocs</a><a href="#m-arbre">L'arbre</a><a href="#m-reflexes">Réflexes</a><a href="#m-erreurs">Erreurs</a><a href="#m-entrainement">S'entraîner</a></nav>

<h2 id="m-taille">1. Taille et notations</h2>
<div class="sbox">$$A = (a_{i,j})_{\substack{1\leqslant i\leqslant n\\1\leqslant j\leqslant p}}\in\mathcal M_{n,p}(\mathbb K)\iff A\ \text{a}\ n\ \text{lignes et}\ p\ \text{colonnes}.$$</div>
<ul>
<li>$a_{i,j}$ : <b>ligne $i$ d'abord, colonne $j$ ensuite</b>.</li>
<li>$\mathcal M_n(\mathbb K) = \mathcal M_{n,n}(\mathbb K)$ : matrices <b>carrées</b>.</li>
<li>Matrice ligne : $n = 1$. Matrice colonne : $p = 1$.</li>
</ul>
<p class="ml">Exemple</p>
<p>On repère un coefficient par <b>sa ligne puis sa colonne</b>. Chaque coefficient coloré est relié à son nom :</p>
$$A = \begin{pmatrix}2&5&\cB4\\\cR7&\cG{-6}&0\end{pmatrix}\in\mathcal M_{2,3}(\mathbb R)$$
$$\cB{a_{1,3} = 4}\ \ (\text{ligne}\ 1,\ \text{colonne}\ 3),\qquad\cR{a_{2,1} = 7}\ \ (\text{ligne}\ 2,\ \text{colonne}\ 1),\qquad\cG{a_{2,2} = -6}\ \ (\text{ligne}\ 2,\ \text{colonne}\ 2).$$
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
<p>Case par case : chaque couleur additionne les deux coefficients <b>à la même place</b>.</p>
$$\begin{pmatrix}\cB1&\cR2&\cG0\\\cV3&\cO{-1}&\cP4\end{pmatrix}+\begin{pmatrix}\cB5&\cR0&\cG2\\\cV1&\cO1&\cP{-4}\end{pmatrix} = \begin{pmatrix}\cB{1+5}&\cR{2+0}&\cG{0+2}\\\cV{3+1}&\cO{-1+1}&\cP{4-4}\end{pmatrix} = \begin{pmatrix}\cB6&\cR2&\cG2\\\cV4&\cO0&\cP0\end{pmatrix}$$
<p>Le scalaire multiplie <b>chaque</b> coefficient :</p>
$$\cR{-2}\begin{pmatrix}1&3\\0&-1\end{pmatrix} = \begin{pmatrix}\cR{-2}\times1&\cR{-2}\times3\\\cR{-2}\times0&\cR{-2}\times(-1)\end{pmatrix} = \begin{pmatrix}-2&-6\\0&2\end{pmatrix}$$
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
<p><span class="kB">Ligne 1</span> et <span class="kR">ligne 2</span> de $A$, <span class="kG">colonne 1</span> et <span class="kV">colonne 2</span> de $B$ : chaque case du résultat mélange la couleur de sa ligne et celle de sa colonne.</p>
$$\begin{array}{cc}&\begin{pmatrix}\cG1&\cV5\\\cG7&\cV8\end{pmatrix}\\[6pt]\begin{pmatrix}\cB3&\cB1\\\cR2&\cR4\end{pmatrix}&\begin{pmatrix}\cB3\cdot\cG1+\cB1\cdot\cG7&\cB3\cdot\cV5+\cB1\cdot\cV8\\[4pt]\cR2\cdot\cG1+\cR4\cdot\cG7&\cR2\cdot\cV5+\cR4\cdot\cV8\end{pmatrix} = \begin{pmatrix}10&23\\30&42\end{pmatrix}\end{array}$$
<p>Exemple : la case en haut à droite utilise la <span class="kB">ligne 1</span> et la <span class="kV">colonne 2</span> : $\cB3\cdot\cV5 + \cB1\cdot\cV8 = 23$.</p>
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
$$3A^6 - 6A^3 + 7\cB A = \cB A\,(3A^5 - 6A^2 + 7\cG{I_n})\qquad\text{et non}\qquad\cB A\,(3A^5 - 6A^2 + \cR7).$$
<p>Le $\cR7$ seul serait un nombre ajouté à une matrice : il faut $\cG{7I_n}$.</p>
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
<p><b>1.</b> On sépare la diagonale (en <span class="kB">bleu</span>) du reste (en <span class="kR">rouge</span>) :</p>
$$A = \begin{pmatrix}\cB2&\cR1&0\\0&\cB2&\cR1\\0&0&\cB2\end{pmatrix} = \cB{2I_3} + \cR N,\qquad\cR N = \begin{pmatrix}0&\cR1&0\\0&0&\cR1\\0&0&0\end{pmatrix}.$$
<p><b>2.</b> $\cB{2I_3}$ et $\cR N$ commutent, car $I_3$ commute avec tout.</p>
<p><b>3.</b> On calcule les puissances de $\cR N$ : les $1$ montent d'un cran à chaque fois, puis disparaissent.</p>
$$\cR N = \begin{pmatrix}0&\cR1&0\\0&0&\cR1\\0&0&0\end{pmatrix},\qquad\cG{N^2} = \begin{pmatrix}0&0&\cG1\\0&0&0\\0&0&0\end{pmatrix},\qquad N^3 = 0.$$
<p><b>4.</b> On écrit la formule du binôme <b>en entier</b>, terme par terme, avec $\cB{2I_3}$ à la place de « $a$ » et $\cR N$ à la place de « $b$ » :</p>
$$(\cB{2I_3} + \cR N)^n = \sum_{k=0}^n\binom nk\cB{(2I_3)}^{n-k}\cR N^k$$
$$= \underbrace{\binom n0\cB{(2I_3)}^n\cR{N^0}}_{k = 0} + \underbrace{\binom n1\cB{(2I_3)}^{n-1}\cR{N^1}}_{k = 1} + \underbrace{\binom n2\cB{(2I_3)}^{n-2}\cR{N^2}}_{k = 2} + \underbrace{\cancel{\binom n3\cB{(2I_3)}^{n-3}\cR{N^3}}}_{N^3 = 0} + \cdots + \underbrace{\cancel{\cR{N^n}}}_{= 0}$$
<p><b>5.</b> On simplifie chaque morceau :</p>
<ul>
<li>$\cB{(2I_3)}^{m} = 2^m\,I_3^m = \cB{2^mI_3}$, et $\cR{N^0} = I_3$ ;</li>
<li>$\binom n0 = 1$, $\binom n1 = n$, $\binom n2 = \dfrac{n(n-1)}2$ ;</li>
<li>tous les termes à partir de $k = 3$ contiennent $N^3 = 0$ : ils sont nuls.</li>
</ul>
$$A^n = \cB{2^n}\,I_3 + n\,\cB{2^{n-1}}\,\cR N + \frac{n(n-1)}2\,\cB{2^{n-2}}\,\cG{N^2}.$$
<p><b>6.</b> On remplace par les matrices et on additionne case par case :</p>
$$A^n = \cB{2^n}\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix} + n\cB{2^{n-1}}\begin{pmatrix}0&\cR1&0\\0&0&\cR1\\0&0&0\end{pmatrix} + \frac{n(n-1)}2\cB{2^{n-2}}\begin{pmatrix}0&0&\cG1\\0&0&0\\0&0&0\end{pmatrix}$$
$$A^n = \begin{pmatrix}\cB{2^n}&\cR{n2^{n-1}}&\cG{\frac{n(n-1)}2\,2^{n-2}}\\0&\cB{2^n}&\cR{n2^{n-1}}\\0&0&\cB{2^n}\end{pmatrix}\qquad(n\geqslant2).$$
<p><b>Vérification</b> avec $n = 2$ : $\cB4$, $\cR{2\cdot2 = 4}$, $\cG{1\cdot1 = 1}$, et le calcul direct de $A^2$ donne bien $\begin{pmatrix}4&4&1\\0&4&4\\0&0&4\end{pmatrix}$.</p>
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
$$\,{}^t\!\begin{pmatrix}\cB1&\cB2&\cB3\\\cR4&\cR5&\cR6\end{pmatrix} = \begin{pmatrix}\cB1&\cR4\\\cB2&\cR5\\\cB3&\cR6\end{pmatrix}$$
<p>La <span class="kB">ligne 1</span> devient la <span class="kB">colonne 1</span>, la <span class="kR">ligne 2</span> devient la <span class="kR">colonne 2</span>.</p>
<p class="ml">Règles</p>
<div class="sbox">$$\,{}^t({}^tA) = A,\qquad {}^t(\lambda A + B) = \lambda\,{}^tA + {}^tB,\qquad {}^t(AB) = {}^tB\,{}^tA.$$</div>
<p class="ml piege">Piège</p>
<p>$\,{}^t(AB) = {}^tA\,{}^tB$ est faux : vérifie les tailles, $\,{}^tA\,{}^tB$ n'existe même pas en général.</p>
<p class="ml">Symétrique, antisymétrique (matrices carrées)</p>
$$\mathcal S_n:\ {}^tA = A,\qquad\mathcal A_n:\ {}^tA = -A\ \Longrightarrow\ a_{i,i} = 0.$$
<p>Les coefficients de même couleur sont symétriques par rapport à la diagonale :</p>
$$\begin{pmatrix}1&\cB2&\cR3\\\cB2&0&\cG5\\\cR3&\cG5&4\end{pmatrix}\in\mathcal S_3\ \ (\text{égaux}),\qquad\begin{pmatrix}0&\cB2&\cR{-1}\\\cB{-2}&0&\cG3\\\cR1&\cG{-3}&0\end{pmatrix}\in\mathcal A_3\ \ (\text{opposés, diagonale nulle}).$$

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
<div class="sbox">$$ad - bc\neq0\ \Longrightarrow\ \begin{pmatrix}\cB a&\cR b\\\cR c&\cB d\end{pmatrix}^{-1} = \frac1{ad - bc}\begin{pmatrix}\cB d&\cR{-b}\\\cR{-c}&\cB a\end{pmatrix}.$$</div>
<p><b>Astuce</b> : on <span class="kB">échange</span> les deux coefficients de la diagonale, on <span class="kR">change le signe</span> des deux autres, puis on divise par le déterminant.</p>
$$\begin{pmatrix}\cB2&\cR1\\\cR5&\cB3\end{pmatrix}^{-1} = \frac1{2\times3 - 1\times5}\begin{pmatrix}\cB3&\cR{-1}\\\cR{-5}&\cB2\end{pmatrix} = \begin{pmatrix}3&-1\\-5&2\end{pmatrix}.$$
<p class="ml">Méthode 2 : polynôme annulateur</p>
$$3A^5 - 6A^3 + 7A = I_n\iff\cB A\,\cG{(3A^4 - 6A^2 + 7I_n)} = I_n\ \Longrightarrow\ A^{-1} = \cG{3A^4 - 6A^2 + 7I_n}.$$
<p>On factorise par $\cB A$ : ce qui reste dans la parenthèse <span class="kG">verte</span> est l'inverse.</p>
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
<p>Chaque inconnue a sa couleur : ses coefficients vont dans <b>sa colonne</b> de $A$. Les constantes vont dans $B$.</p>
$$\left\{\begin{aligned}\cB2x + \cR3y - \cG1z&= \cO1\\\cB1x + \cR0y + \cG4z&= \cO{-6}\\\cB{-1}x + \cR1y + \cG1z&= \cO0\end{aligned}\right.\iff\underbrace{\begin{pmatrix}\cB2&\cR3&\cG{-1}\\\cB1&\cR0&\cG4\\\cB{-1}&\cR1&\cG1\end{pmatrix}}_{A}\underbrace{\begin{pmatrix}\cB x\\\cR y\\\cG z\end{pmatrix}}_{X} = \underbrace{\begin{pmatrix}\cO1\\\cO{-6}\\\cO0\end{pmatrix}}_{B}.$$
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
$$\operatorname{tr}\begin{pmatrix}\cB3&1&0\\2&\cB{-1}&4\\5&0&\cB{-8}\end{pmatrix} = \cB3 + \cB{(-1)} + \cB{(-8)} = -6,\qquad\operatorname{tr}I_n = n.$$
<p>On ne garde que la <span class="kB">diagonale</span>.</p>
<div class="sbox">$$\operatorname{tr}(A + B) = \operatorname{tr}A + \operatorname{tr}B,\quad\operatorname{tr}(\lambda A) = \lambda\operatorname{tr}A,\quad\operatorname{tr}({}^tA) = \operatorname{tr}A,\quad\operatorname{tr}(AB) = \operatorname{tr}(BA).$$</div>
<p class="ml">Exemple d'usage</p>
$$AB - BA = I_n\ \Longrightarrow\ 0 = \operatorname{tr}(AB) - \operatorname{tr}(BA) = \operatorname{tr}I_n = n:\ \text{impossible}.$$
<p class="ml piege">Piège</p>
<p>$\operatorname{tr}(AB)\neq\operatorname{tr}A\cdot\operatorname{tr}B$ en général, et $\operatorname{tr}(ABC)\neq\operatorname{tr}(BAC)$ : seules les permutations circulaires sont permises.</p>

<h2 id="m-al">11. Matrice d'une application linéaire</h2>
<p class="mcode"><span class="kB">bleu</span> : tout ce qui vient de l'espace de <b>départ</b> $E$ &nbsp;·&nbsp; <span class="kR">rouge</span> : tout ce qui vit dans l'espace d'<b>arrivée</b> $F$.</p>
<p class="ml">L'idée en une phrase</p>
<div class="sbox">$$\text{La colonne}\ j\ \text{de}\ \operatorname{Mat}_{\cB{\mathcal B},\cR{\mathcal C}}(f)\ \text{contient les coordonnées de}\ f(\cB{e_j})\ \text{dans la base}\ \cR{\mathcal C}.$$</div>
<p><b>Astuce</b> : <i>on range les images en colonnes, écrites avec les vecteurs d'arrivée.</i> Les colonnes sont étiquetées par le départ, les lignes par l'arrivée.</p>
<p class="ml">Exemple : $f : E\to F$, $\cB{\mathcal B = (e_1,e_2,e_3)}$ base de $E$, $\cR{\mathcal C = (e'_1,e'_2)}$ base de $F$</p>
$$f(\cB{e_1}) = 3\cR{e'_1} + 4\cR{e'_2},\qquad f(\cB{e_2}) = -8\cR{e'_1} + 5\cR{e'_2},\qquad f(\cB{e_3}) = 7\cR{e'_1} - 2\cR{e'_2}.$$
<div class="labm"><table><tr><td></td><td class="kB">$f(e_1)$</td><td class="kB">$f(e_2)$</td><td class="kB">$f(e_3)$</td><td></td></tr><tr><td class="kR">$e'_1$</td><td class="c1">3</td><td class="c2">−8</td><td class="c3">7</td><td rowspan="2" class="lr"></td></tr><tr><td class="kR">$e'_2$</td><td class="c1">4</td><td class="c2">5</td><td class="c3">−2</td></tr></table><span class="lab-cap">$A = \operatorname{Mat}_{\cB{\mathcal B},\cR{\mathcal C}}(f)\in\mathcal M_{\cR2,\cB3}(\mathbb K)$</span></div>
<ul>
<li>La première colonne est $f(\cB{e_1})$ : on lit $3\cR{e'_1} + 4\cR{e'_2}$ de haut en bas.</li>
<li>Taille : <b>autant de lignes que $\dim\cR F$</b>, <b>autant de colonnes que $\dim\cB E$</b>.</li>
</ul>
<div data-mlab="colf"></div>
<p class="ml">Pourquoi la matrice suffit</p>
$$x = a_1\cB{e_1} + a_2\cB{e_2} + a_3\cB{e_3}\ \Longrightarrow\ f(x) = a_1f(\cB{e_1}) + a_2f(\cB{e_2}) + a_3f(\cB{e_3})\quad\text{(linéarité)}.$$
<p>Connaître les images des vecteurs de base, c'est connaître $f$ partout.</p>
<p class="ml">Calculer une image : $Y = AX$</p>
<div class="sbox">$$y = f(x)\iff\underbrace{Y}_{\text{coord. de}\ y\ \text{dans}\ \cR{\mathcal C}} = A\,\underbrace{X}_{\text{coord. de}\ x\ \text{dans}\ \cB{\mathcal B}}.$$</div>
$$x = \cB{2e_1 - e_2 + e_3}:\qquad\begin{pmatrix}3&-8&7\\4&5&-2\end{pmatrix}\begin{pmatrix}\cB2\\\cB{-1}\\\cB1\end{pmatrix} = \begin{pmatrix}6 + 8 + 7\\8 - 5 - 2\end{pmatrix} = \begin{pmatrix}\cR{21}\\\cR1\end{pmatrix}\ \Longrightarrow\ f(x) = \cR{21e'_1 + e'_2}.$$

<p class="ml">Méthode en 3 étapes (le cas qui tombe tout le temps)</p>
<ol>
<li>Écrire la base de départ $\cB{\mathcal B}$ et calculer l'image de <b>chaque</b> vecteur.</li>
<li>Décomposer chaque image dans la base d'arrivée $\cR{\mathcal C}$.</li>
<li>Ranger les coordonnées <b>en colonne</b>, dans l'ordre des vecteurs de départ.</li>
</ol>
<p class="ml">Exemple : $f(P) = 2P' - P$ sur $\mathbb K_3[X]$, base $\mathcal B = (1, X, X^2, X^3)$</p>
$$f(\cB1) = -1,\qquad f(\cB X) = 2 - X,\qquad f(\cB{X^2}) = 4X - X^2,\qquad f(\cB{X^3}) = 6X^2 - X^3.$$
<div class="labm"><table><tr><td></td><td class="kB">$f(1)$</td><td class="kB">$f(X)$</td><td class="kB">$f(X^2)$</td><td class="kB">$f(X^3)$</td></tr><tr><td class="kR">$1$</td><td class="c1">−1</td><td class="c2">2</td><td class="c3">0</td><td class="c4">0</td></tr><tr><td class="kR">$X$</td><td class="c1">0</td><td class="c2">−1</td><td class="c3">4</td><td class="c4">0</td></tr><tr><td class="kR">$X^2$</td><td class="c1">0</td><td class="c2">0</td><td class="c3">−1</td><td class="c4">6</td></tr><tr><td class="kR">$X^3$</td><td class="c1">0</td><td class="c2">0</td><td class="c3">0</td><td class="c4">−1</td></tr></table><span class="lab-cap">$\operatorname{Mat}_{\mathcal B}(f)$ : triangulaire, donc $\det = 1$ et $f$ bijective</span></div>
<p><b>Astuce</b> : une application qui ne fait pas monter le degré donne une matrice <b>triangulaire supérieure</b> dans $(1, X, \dots, X^n)$.</p>
<p class="ml piege">Piège</p>
<ul>
<li>Mettre les coordonnées <b>en ligne</b> : on obtient $\,{}^tA$, pas $A$.</li>
<li>Oublier un coefficient nul : chaque colonne doit avoir $\dim F$ coefficients.</li>
<li>Changer l'ordre des vecteurs de base change la matrice.</li>
</ul>

<h2 id="m-compo">12. Composer, c'est multiplier</h2>
<div class="sbox">$$\operatorname{Mat}_{\cG{\mathcal C},\cR{\mathcal D}}(g)\times\operatorname{Mat}_{\cB{\mathcal B},\cG{\mathcal C}}(f) = \operatorname{Mat}_{\cB{\mathcal B},\cR{\mathcal D}}(g\circ f).$$</div>
<p><b>Astuce « dominos »</b> : les bases du milieu doivent être <b>les mêmes</b> ($\cG{\mathcal C}$ et $\cG{\mathcal C}$), elles se touchent et disparaissent. On lit de droite à gauche, comme $g\circ f$ : d'abord $f$, puis $g$.</p>
$$\cB E\ \xrightarrow{\ \ f\ \ }\ \cG F\ \xrightarrow{\ \ g\ \ }\ \cR G\qquad\Longrightarrow\qquad\operatorname{Mat}(g\circ f) = \operatorname{Mat}(g)\times\operatorname{Mat}(f).$$
<p class="ml">Conséquences</p>
<ul>
<li>$f$ bijective $\iff\operatorname{Mat}(f)$ inversible, et $\operatorname{Mat}(f^{-1}) = \operatorname{Mat}(f)^{-1}$.</li>
<li>$\operatorname{Mat}(f^k) = \operatorname{Mat}(f)^k$ : les puissances de matrices calculent les itérées.</li>
<li>$\operatorname{rg}f = \operatorname{rg}A$, $\ker f\leftrightarrow\{X : AX = 0\}$, $\operatorname{Im}f = \operatorname{Vect}(\text{colonnes de}\ A)$.</li>
</ul>

<h2 id="m-passage">13. Matrice de passage</h2>
<p class="mcode"><span class="kO">orange</span> : l'<b>ancienne</b> base $\mathcal B$ &nbsp;·&nbsp; <span class="kG">vert</span> : la <b>nouvelle</b> base $\mathcal B'$.</p>
<div class="sbox">$$P_{\cO{\mathcal B}\to\cG{\mathcal B'}}:\ \text{la colonne}\ j\ \text{contient les coordonnées du}\ \textbf{nouveau}\ \text{vecteur}\ \cG{e'_j}\ \text{dans l'}\textbf{ancienne}\ \text{base}\ \cO{\mathcal B}.$$</div>
<p><b>Astuce</b> : <i>les nouveaux en colonnes, écrits dans l'ancienne base</i>. C'est exactement la règle du §11 appliquée à l'identité.</p>
<p class="ml">Exemple</p>
$$\cG{e'_1} = 7\cO{e_1} + \cO{e_2} - 4\cO{e_3},\qquad\cG{e'_2} = 8\cO{e_1} - 2\cO{e_2} + 9\cO{e_3},\qquad\cG{e'_3} = -3\cO{e_1} + 6\cO{e_2} + 5\cO{e_3}.$$
<div class="labm og"><table><tr><td></td><td class="kG">$e'_1$</td><td class="kG">$e'_2$</td><td class="kG">$e'_3$</td></tr><tr><td class="kO">$e_1$</td><td class="c1">7</td><td class="c2">8</td><td class="c3">−3</td></tr><tr><td class="kO">$e_2$</td><td class="c1">1</td><td class="c2">−2</td><td class="c3">6</td></tr><tr><td class="kO">$e_3$</td><td class="c1">−4</td><td class="c2">9</td><td class="c3">5</td></tr></table><span class="lab-cap">$P = P_{\cO{\mathcal B}\to\cG{\mathcal B'}} = \operatorname{Mat}_{\cG{\mathcal B'},\cO{\mathcal B}}(\mathrm{id})$</span></div>
<p class="ml">Ce qu'il faut savoir</p>
<div class="sbox">$$\left\{\begin{aligned}&P_{\cO{\mathcal B}\to\cG{\mathcal B'}} = \operatorname{Mat}_{\cG{\mathcal B'},\cO{\mathcal B}}(\mathrm{id})\quad\text{(l'ordre des bases s'inverse dans la notation)}\\&P\ \text{est carrée et toujours inversible},\qquad P_{\cG{\mathcal B'}\to\cO{\mathcal B}} = P^{-1}\\&P_{\mathcal B\to\mathcal B'}\,P_{\mathcal B'\to\mathcal B''} = P_{\mathcal B\to\mathcal B''}\quad\text{(Chasles, dans le bon ordre)}\end{aligned}\right.$$</div>
<p class="ml">Changer les coordonnées d'un vecteur</p>
<div class="sbox">$$\cO X = P\,\cG{X'}\qquad\text{(anciennes} = P\times\text{nouvelles)},\qquad\cG{X'} = P^{-1}\cO X.$$</div>
<p><b>Astuce</b> : $P$ « parle » l'ancienne langue. Elle prend des coordonnées dans la nouvelle base et les traduit dans l'ancienne. C'est l'inverse de ce qu'on croit spontanément : pour obtenir les <b>nouvelles</b> coordonnées, il faut $P^{-1}$.</p>
<p>Vérification sur $\cG{e'_1}$ : ses coordonnées nouvelles sont $\cG{X' = (1,0,0)}$, et $P\cG{X'}$ est la première colonne de $P$, soit $\cO{(7,1,-4)}$. Ce sont bien ses coordonnées anciennes.</p>
<p class="ml piege">Piège</p>
<ul>
<li>Écrire les anciens vecteurs dans la nouvelle base : on obtient $P^{-1}$.</li>
<li>$X' = PX$ est faux : c'est $X = PX'$.</li>
</ul>

<h2 id="m-chgt">14. Formule de changement de base</h2>
<div class="chgfig"><svg viewBox="0 0 420 210" width="420" height="210" role="img" aria-label="Diagramme de changement de base">
<defs><marker id="arB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#2B5BD7"/></marker><marker id="arO" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#C27C00"/></marker><marker id="arG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1F8A5B"/></marker></defs>
<text x="60" y="44" text-anchor="middle" font-size="17" fill="#C27C00">E, ℬ</text><text x="360" y="44" text-anchor="middle" font-size="17" fill="#C27C00">E, ℬ</text>
<text x="60" y="180" text-anchor="middle" font-size="17" fill="#1F8A5B">E, ℬ′</text><text x="360" y="180" text-anchor="middle" font-size="17" fill="#1F8A5B">E, ℬ′</text>
<line x1="100" y1="38" x2="318" y2="38" stroke="#C27C00" stroke-width="2.5" marker-end="url(#arO)"/><text x="210" y="28" text-anchor="middle" font-size="16" fill="#C27C00">A (ancienne)</text>
<line x1="100" y1="174" x2="318" y2="174" stroke="#1F8A5B" stroke-width="2.5" marker-end="url(#arG)"/><text x="210" y="198" text-anchor="middle" font-size="16" fill="#1F8A5B">A′ (nouvelle)</text>
<line x1="60" y1="160" x2="60" y2="58" stroke="#2B5BD7" stroke-width="2.5" marker-end="url(#arB)"/><text x="72" y="114" font-size="16" fill="#2B5BD7">P</text>
<line x1="360" y1="58" x2="360" y2="160" stroke="#2B5BD7" stroke-width="2.5" marker-end="url(#arB)"/><text x="372" y="114" font-size="16" fill="#2B5BD7">P⁻¹</text>
</svg></div>
<p>Pour aller en bas à gauche jusqu'en bas à droite, il y a deux chemins : tout droit ($\cG{A'}$), ou par le haut : monter avec $\cB P$, traverser avec $\cO A$, redescendre avec $\cB{P^{-1}}$. On écrit les étapes <b>de droite à gauche</b> :</p>
<div class="sbox">$$\cG{A'} = \cB{P^{-1}}\,\cO A\,\cB P\qquad\Longleftrightarrow\qquad\cO A = \cB P\,\cG{A'}\,\cB{P^{-1}}.$$</div>
<p>Cas général $f : E\to F$, avec $P$ changement de base dans $E$ et $Q$ dans $F$ :</p>
$$\operatorname{Mat}_{\mathcal B',\mathcal C'}(f) = Q^{-1}\operatorname{Mat}_{\mathcal B,\mathcal C}(f)\,P.$$
<ul>
<li>Deux matrices $A' = Q^{-1}AP$ sont <b>équivalentes</b> : même rang.</li>
<li>Deux matrices $A' = P^{-1}AP$ sont <b>semblables</b> : même rang, même trace, même déterminant.</li>
</ul>

<p class="ml">Exemple complet : rendre une matrice diagonale</p>
<p>$f$ a pour matrice $\cO{A = \begin{pmatrix}3&1\\1&3\end{pmatrix}}$ dans la base canonique. On prend la nouvelle base $\cG{e'_1 = (1,1)}$, $\cG{e'_2 = (1,-1)}$.</p>
<p><b>Étape 1 : $P$</b>, les nouveaux vecteurs en colonnes.</p>
$$P = \begin{pmatrix}\cG1&\cG1\\\cG1&\cG{-1}\end{pmatrix},\qquad\det P = -2\neq0.$$
<p><b>Étape 2 : $P^{-1}$</b>, avec la formule de taille 2.</p>
$$P^{-1} = \frac1{-2}\begin{pmatrix}-1&-1\\-1&1\end{pmatrix} = \frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}.$$
<p><b>Étape 3 : $AP$</b>, c'est-à-dire les images des nouveaux vecteurs.</p>
$$AP = \begin{pmatrix}3&1\\1&3\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix} = \begin{pmatrix}4&2\\4&-2\end{pmatrix}:\qquad f(\cG{e'_1}) = \cG{4e'_1},\quad f(\cG{e'_2}) = \cG{2e'_2}.$$
<p><b>Étape 4 : $A' = P^{-1}(AP)$</b>.</p>
$$\cG{A'} = \frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}4&2\\4&-2\end{pmatrix} = \begin{pmatrix}\cG4&0\\0&\cG2\end{pmatrix}.$$
<p><b>Astuce</b> : à l'étape 3 on lit déjà la réponse. Si $f(\cG{e'_j}) = \lambda_j\cG{e'_j}$, la nouvelle matrice est diagonale, avec les $\lambda_j$ sur la diagonale.</p>
<p><b>Bonus : les puissances.</b></p>
$$A = PA'P^{-1}\ \Longrightarrow\ A^n = P\,A'^n\,P^{-1} = \frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}4^n&0\\0&2^n\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix} = \frac12\begin{pmatrix}4^n + 2^n&4^n - 2^n\\4^n - 2^n&4^n + 2^n\end{pmatrix}.$$
<div data-mlab="chgbase"></div>
<p class="ml piege">Piège</p>
<ul>
<li>$A' = PAP^{-1}$ est faux : vérifie avec le diagramme, on monte d'abord avec $P$.</li>
<li>Pour un endomorphisme, on garde la <b>même</b> base au départ et à l'arrivée : un seul $P$.</li>
</ul>
<p class="ml">Le tableau qui résume tout</p>
<table class="mtab">
<tr><th>Ce que tu veux</th><th>Ce que tu écris</th><th>En colonne</th></tr>
<tr><td>Matrice de $f$</td><td>$\operatorname{Mat}_{\cB{\mathcal B},\cR{\mathcal C}}(f)$</td><td>$f(\cB{e_j})$ dans $\cR{\mathcal C}$</td></tr>
<tr><td>Matrice de passage</td><td>$P_{\cO{\mathcal B}\to\cG{\mathcal B'}}$</td><td>$\cG{e'_j}$ dans $\cO{\mathcal B}$</td></tr>
<tr><td>Image d'un vecteur</td><td>$Y = AX$</td><td>$X$ : coordonnées de $x$</td></tr>
<tr><td>Changer les coordonnées</td><td>$\cO X = P\cG{X'}$</td><td></td></tr>
<tr><td>Changer la matrice</td><td>$\cG{A'} = P^{-1}\cO AP$</td><td></td></tr>
</table>

<h2 id="m-an">15. Calculer $A^n$ : toutes les méthodes</h2>
<p class="ml">Méthode A : calcul direct</p>
<p>Seulement pour une petite taille et une puissance précise ($A^2$, $A^3$). Ce n'est jamais la méthode pour « tout $n$ ».</p>
<p class="ml">Méthode B : $A = \alpha I_n + \beta\cR J$ avec $\cR J$ une matrice connue</p>
<p>$\alpha I_n$ commute avec tout, donc le binôme s'applique dès qu'on connaît les puissances de $\cR J$. Les trois matrices $\cR J$ à connaître :</p>
<div class="mrefl">
<div><b>Nilpotente (Jordan)</b><span>$\cR J = \begin{pmatrix}0&1&&\\&\ddots&\ddots&\\&&\ddots&1\\&&&0\end{pmatrix}$ : $\cR{J^n} = 0$, le binôme s'arrête.</span></div>
<div><b>Permutation circulaire</b><span>$\cR J = \begin{pmatrix}0&1&&\\&\ddots&\ddots&\\&&\ddots&1\\1&&&0\end{pmatrix}$ : $\cR{J^n} = I_n$, les puissances tournent.</span></div>
<div><b>Que des $1$</b><span>$\cR J = \begin{pmatrix}1&\cdots&1\\\vdots&&\vdots\\1&\cdots&1\end{pmatrix}$ : $\cR{J^2} = n\cR J$, donc $\cR{J^k} = n^{k-1}\cR J$ pour $k\geqslant1$.</span></div>
</div>
<p class="ml">Exemple avec la matrice « que des $1$ »</p>
$$A = \begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix} = \cR J - \cB{I_3},\qquad\cR{J^2} = 3\cR J\ \Longrightarrow\ \cR{J^k} = 3^{k-1}\cR J\ (k\geqslant1).$$
$$A^n = \sum_{k=0}^n\binom nk\cR{J^k}\cB{(-I_3)}^{n-k} = (-1)^nI_3 + \Big(\sum_{k=1}^n\binom nk3^{k-1}(-1)^{n-k}\Big)\cR J = (-1)^nI_3 + \frac{2^n - (-1)^n}3\,\cR J.$$
<p>Astuce : $\sum_{k=1}^n\binom nk3^k(-1)^{n-k} = (3 - 1)^n - (-1)^n$ par le binôme <b>dans l'autre sens</b>, puis on divise par $3$.</p>
<p class="ml">Méthode C : $A^2$ a une forme simple, puis récurrence</p>
$$A^2 = A\ \Rightarrow\ A^n = A\ (n\geqslant1),\qquad A^2 = kA\ \Rightarrow\ A^n = k^{n-1}A,\qquad A^p = 0\ \Rightarrow\ A^n = 0\ (n\geqslant p).$$
<p>On calcule $A^2$, $A^3$, on devine la forme, puis on la prouve par récurrence avec $A^{n+1} = A\cdot A^n$.</p>
<p class="ml">Méthode D : polynôme annulateur $A^2 = \alpha A + \beta I_n$</p>
<ol>
<li>On cherche $A^n = \cB{a_n}A + \cR{b_n}I_n$.</li>
<li>$A^{n+1} = A\,A^n = \cB{a_n}A^2 + \cR{b_n}A = \cB{a_n}(\alpha A + \beta I_n) + \cR{b_n}A$.</li>
<li>On identifie (si $(A, I_n)$ est libre) :</li>
</ol>
$$\left\{\begin{aligned}\cB{a_{n+1}}&= \alpha\cB{a_n} + \cR{b_n}\\\cR{b_{n+1}}&= \beta\cB{a_n}\end{aligned}\right.\ \Longrightarrow\ \cB{a_{n+2}} = \alpha\cB{a_{n+1}} + \beta\cB{a_n}\quad\text{(suite récurrente linéaire d'ordre 2)}.$$
<p>Son équation caractéristique est $r^2 = \alpha r + \beta$ : la même que le polynôme annulateur, ce n'est pas un hasard.</p>
<p class="ml">Méthode E : diagonaliser</p>
$$A = PDP^{-1},\ D = \operatorname{diag}(\lambda_1,\dots,\lambda_n)\ \Longrightarrow\ A^n = P\,\operatorname{diag}(\lambda_1^n,\dots,\lambda_n^n)\,P^{-1}.$$
<p>C'est la méthode qui marche le plus souvent, mais elle demande le plus de calculs : voir l'exemple du §14.</p>

<h2 id="m-blocs">16. Produits par blocs et matrices élémentaires</h2>
<p class="ml">Produit par blocs</p>
<div class="sbox">$$\begin{pmatrix}\cB A&\cR B\\\cG C&\cV D\end{pmatrix}\begin{pmatrix}A'&B'\\C'&D'\end{pmatrix} = \begin{pmatrix}\cB AA' + \cR BC'&\cB AB' + \cR BD'\\\cG CA' + \cV DC'&\cG CB' + \cV DD'\end{pmatrix}$$</div>
<p>Comme en taille 2, à condition que les tailles des blocs soient compatibles. <b>Garder l'ordre</b> dans chaque produit : $AA'$, pas $A'A$.</p>
<p class="ml">Matrices élémentaires $E_{i,j}$</p>
<p>$E_{i,j}$ a un seul $1$, à la ligne $i$ et à la colonne $j$, et des $0$ partout ailleurs.</p>
<div class="sbox">$$A = \sum_{i,j}a_{i,j}E_{i,j},\qquad E_{i,\cB j}\,E_{\cB k,l} = \delta_{\cB j\cB k}\,E_{i,l}\quad(\text{nul si}\ \cB j\neq\cB k).$$</div>
<p><b>Astuce</b> : pour retenir le produit, ce sont les indices du milieu qui doivent être égaux, puis ils disparaissent (encore les dominos).</p>
$$AE_{i,j}\ \text{a pour seule colonne non nulle la colonne}\ j,\ \text{égale à la colonne}\ i\ \text{de}\ A\ \Longrightarrow\ \operatorname{tr}(AE_{i,j}) = a_{j,i}.$$
<p class="ml">Une preuve classique</p>
$$\operatorname{tr}({}^tAA) = \sum_{i,j}a_{i,j}^2\ \Longrightarrow\ \big(\operatorname{tr}({}^tAA) = 0\iff A = 0\big)\quad(A\ \text{réelle}).$$
<p>Réflexe : quand un énoncé dit « pour toute matrice $M$ », on teste la relation sur toutes les $E_{i,j}$.</p>

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
<div><b>« Matrice de $f$ dans la base… »</b><span>Images des vecteurs de départ, en colonnes.</span></div>
<div><b>« Matrice de passage »</b><span>Nouveaux vecteurs en colonnes, dans l'ancienne base.</span></div>
<div><b>« Matrice dans la nouvelle base »</b><span>$A' = P^{-1}AP$, ou lire directement $f(e'_j)$.</span></div>
<div><b>$A = PDP^{-1}$, $D$ diagonale</b><span>$A^n = PD^nP^{-1}$.</span></div>
</div>

<h2 id="m-erreurs">Les 10 erreurs qui coûtent des points</h2>
<ol class="merr">
<li>Écrire $A + 3$ au lieu de $A + 3I_n$.</li>
<li>Diviser par une matrice.</li>
<li>Appliquer le binôme sans prouver $AB = BA$.</li>
<li>Écrire $\,{}^t(AB) = {}^tA\,{}^tB$ ou $(AB)^{-1} = A^{-1}B^{-1}$.</li>
<li>Déduire $A = 0$ ou $B = 0$ de $AB = 0$.</li>
<li>Multiplier par $A^{-1}$ à gauche d'un côté et à droite de l'autre.</li>
<li>Oublier $A^0 = I_n$ dans le binôme ($k = 0$).</li>
<li>Calculer un produit sans vérifier les tailles.</li>
<li>Ranger les images en lignes au lieu de colonnes.</li>
<li>Écrire $X' = PX$ ou $A' = PAP^{-1}$.</li>
</ol>

<h2 id="m-entrainement">S'entraîner</h2>
<div data-mlab="exos"></div>
<h2>Vrai ou faux ?</h2>
<div data-mlab="quiz"></div>
<h2 id="m-arbre">L'arbre des méthodes</h2>
<p>Pars du haut, réponds aux questions, et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Calculer $A^n$</div>
<div class="tq">$A = \alpha I + \beta J$, avec $J$ connue ?</div><a class="tl" href="#m-an">oui : binôme</a><div class="tno">non</div>
<div class="tq">$A^2$ simple ($A$, $kA$, $0$) ?</div><a class="tl" href="#m-an">oui : récurrence</a><div class="tno">non</div>
<div class="tq">$A^2 = \alpha A + \beta I$ ?</div><a class="tl" href="#m-an">oui : suites $a_n$, $b_n$</a><div class="tno">non</div>
<a class="tl tend" href="#m-chgt">diagonaliser : $A = PDP^{-1}$</a></div>
<div class="tb tR"><div class="tt">Inverser $A$</div>
<div class="tq">Taille $2$ ?</div><a class="tl" href="#m-inv">oui : $\frac1{ad - bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$</a><div class="tno">non</div>
<div class="tq">Relation $P(A) = 0$ donnée ?</div><a class="tl" href="#m-inv">oui : factoriser par $A$</a><div class="tno">non</div>
<a class="tl tend" href="#m-inv">pivot de Gauss sur $(A\,|\,I_n)$</a></div>
<div class="tb tG"><div class="tt">Résoudre $AX = B$</div>
<div class="tq">$A^{-1}$ déjà connue ?</div><a class="tl" href="#m-sys">oui : $X = A^{-1}B$</a><div class="tno">non</div>
<div class="tq">$\det A\neq0$ ?</div><a class="tl" href="#m-sys">oui : pivot sur $(A\,|\,B)$, solution unique</a><div class="tno">non</div>
<a class="tl tend" href="#m-sys">aucune solution ou une infinité</a></div>
<div class="tb tO"><div class="tt">Matrice de $f$</div>
<div class="tq">Dans une base donnée ?</div><a class="tl" href="#m-al">images des vecteurs en colonnes</a><div class="tno">changer de base</div>
<div class="tq">Endomorphisme ?</div><a class="tl" href="#m-chgt">oui : $A' = P^{-1}AP$</a><div class="tno">non</div>
<a class="tl tend" href="#m-chgt">$A' = Q^{-1}AP$</a></div>
<div class="tb tV"><div class="tt">Calculer un produit</div>
<div class="tq">Tailles compatibles ?</div><a class="tl" href="#m-produit">ligne × colonne</a><div class="tno">matrice découpée</div>
<div class="tq">Blocs visibles ?</div><a class="tl" href="#m-blocs">oui : produit par blocs</a><div class="tno">« pour toute $M$ »</div>
<a class="tl tend" href="#m-blocs">tester sur les $E_{i,j}$</a></div>
</div>
</div>

`,
"Groupe symétrique et déterminants": R`
<nav class="msum"><a href="#d-sn">Permutations</a><a href="#d-cycles">Cycles</a><a href="#d-sign">Signature</a><a href="#d-def">Définition du déterminant</a><a href="#d-2">Taille 2</a><a href="#d-tri">Triangulaire</a><a href="#d-sarrus">Sarrus</a><a href="#d-ops">Opérations</a><a href="#d-dev">Développer</a><a href="#d-form">Formules</a><a href="#d-vdm">Vandermonde</a><a href="#d-plus">Pour aller plus loin</a><a href="#d-reflexes">Réflexes</a><a href="#d-erreurs">Erreurs</a><a href="#d-entrainement">S'entraîner</a><a href="#d-arbre">L'arbre</a></nav>

<h2 id="d-sn">1. Le groupe symétrique</h2>
<div class="sbox">$$\mathfrak S_n = \{\sigma : [\![1,n]\!]\to[\![1,n]\!]\ \text{bijective}\},\qquad\operatorname{Card}\mathfrak S_n = n!$$</div>
<ul>
<li>La loi est la composition $\circ$ : $\sigma\tau = \sigma\circ\tau$, on applique <b>$\tau$ d'abord</b>.</li>
<li>Neutre : $\mathrm{id}$. Inverse : $\sigma^{-1}$, on lit le tableau de bas en haut.</li>
<li>Pour $n\geqslant3$, $\mathfrak S_n$ n'est pas commutatif.</li>
</ul>
<p class="ml">Notation en deux lignes</p>
<p>On lit <b>colonne par colonne</b> : en haut le nombre de départ, en bas son image.</p>
$$\sigma = \left(\begin{array}{ccccc}\cB1&\cR2&\cG3&\cV4&\cO5\\\cB\downarrow&\cR\downarrow&\cG\downarrow&\cV\downarrow&\cO\downarrow\\\cB3&\cR5&\cG1&\cV2&\cO4\end{array}\right)$$
$$\cB{\sigma(1) = 3},\qquad\cR{\sigma(2) = 5},\qquad\cG{\sigma(3) = 1},\qquad\cV{\sigma(4) = 2},\qquad\cO{\sigma(5) = 4}.$$
<p class="ml piege">Piège</p>
<p>$\sigma\tau\neq\tau\sigma$ en général : calcule toujours de droite à gauche, $\sigma\tau(k) = \sigma(\tau(k))$.</p>

<h2 id="d-cycles">2. Cycles et transpositions</h2>
<div class="sbox">$$(a_1\ a_2\ \cdots\ a_p):\quad a_1\mapsto a_2\mapsto\cdots\mapsto a_p\mapsto a_1,\ \text{les autres fixes}.$$</div>
<ul>
<li>Un cycle de longueur $2$ est une <b>transposition</b> $(i\ j)$.</li>
<li>Deux cycles à supports disjoints commutent.</li>
</ul>
<p class="ml">Méthode : décomposer en cycles disjoints</p>
<ol>
<li>Partir du plus petit élément non encore vu et suivre ses images jusqu'à revenir au départ.</li>
<li>Recommencer avec le plus petit élément restant.</li>
<li>On n'écrit pas les points fixes.</li>
</ol>
<p>Même $\sigma$, on colorie maintenant par cycle :</p>
$$\sigma = \left(\begin{array}{ccccc}\cB1&\cR2&\cB3&\cR4&\cR5\\\cB3&\cR5&\cB1&\cR2&\cR4\end{array}\right)$$
<ol>
<li>On part de $\cB1$ : $\sigma(1) = 3$, puis $\sigma(3) = 1$, on est revenu au départ.</li>
</ol>
$$\cB{1\ \xrightarrow{\ \sigma\ }\ 3\ \xrightarrow{\ \sigma\ }\ 1}\qquad\Longrightarrow\qquad\text{premier cycle}\ \cB{(1\ 3)}.$$
<ol start="2">
<li>Le plus petit nombre pas encore vu est $\cR2$ : $\sigma(2) = 5$, $\sigma(5) = 4$, $\sigma(4) = 2$.</li>
</ol>
$$\cR{2\ \xrightarrow{\ \sigma\ }\ 5\ \xrightarrow{\ \sigma\ }\ 4\ \xrightarrow{\ \sigma\ }\ 2}\qquad\Longrightarrow\qquad\text{deuxième cycle}\ \cR{(2\ 5\ 4)}.$$
<ol start="3">
<li>Tous les nombres sont vus : c'est fini.</li>
</ol>
<div class="sbox">$$\sigma = \cB{(1\ 3)}\,\cR{(2\ 5\ 4)}.$$</div>
<p class="ml">Transpositions</p>
<div class="sbox">$$(a_1\ a_2\ \cdots\ a_p) = (a_1\ a_2)(a_2\ a_3)\cdots(a_{p-1}\ a_p)\qquad\text{(}p - 1\ \text{transpositions)}.$$</div>
<p>Toute permutation est un produit de transpositions : $\mathfrak S_n$ est <b>engendré</b> par les transpositions.</p>
<div data-mlab="perm"></div>

<h2 id="d-sign">3. Signature</h2>
<div class="sbox">$$\varepsilon(\sigma) = (-1)^{N(\sigma)},\qquad N(\sigma) = \operatorname{Card}\{(i,j) : i\lt j,\ \sigma(i)\gt\sigma(j)\}\ \text{(nombre d'inversions)}.$$</div>
<p class="ml">À retenir</p>
<div class="sbox">$$\varepsilon(\sigma\tau) = \varepsilon(\sigma)\,\varepsilon(\tau),\qquad\varepsilon(\text{transposition}) = -1,\qquad\varepsilon(\text{cycle de longueur}\ p) = (-1)^{p-1}.$$</div>
<p class="ml">Réflexe : la méthode la plus rapide</p>
<ol>
<li>Décomposer $\sigma$ en cycles disjoints de longueurs $p_1,\dots,p_r$.</li>
<li>$\varepsilon(\sigma) = (-1)^{(p_1 - 1) + \cdots + (p_r - 1)}$.</li>
</ol>
$$\sigma = \cB{(1\ 3)}\,\cR{(2\ 5\ 4)}:\qquad\varepsilon(\sigma) = \cB{(-1)^{2-1}}\times\cR{(-1)^{3-1}} = \cB{(-1)}\times\cR{1} = -1.$$
<p>$\varepsilon = 1$ : permutation <b>paire</b>. $\varepsilon = -1$ : <b>impaire</b>. Les paires forment $\mathfrak A_n$, avec $\operatorname{Card}\mathfrak A_n = \frac{n!}2$ pour $n\geqslant2$.</p>
<p class="ml piege">Piège</p>
<p>Un cycle de longueur $3$ est <b>pair</b> : la signature dépend de la longueur moins un, pas de la longueur.</p>

<h2 id="d-def">4. Définition du déterminant</h2>
<div class="sbox">$$\det A = \sum_{\sigma\in\mathfrak S_n}\varepsilon(\sigma)\,a_{\sigma(1),1}\,a_{\sigma(2),2}\cdots a_{\sigma(n),n}.$$</div>
<ul>
<li>Un produit par permutation : on prend <b>un coefficient par ligne et par colonne</b>.</li>
<li>$n!$ termes : $2$ pour $n = 2$, $6$ pour $n = 3$ (Sarrus), $24$ pour $n = 4$.</li>
<li>Le signe de chaque produit est la signature de la permutation.</li>
</ul>
<p>C'est ce lien qui explique tout le reste : les formules de taille 2 et 3 sont cette somme écrite en entier.</p>
<p class="ml">Notation</p>
$$\det\begin{pmatrix}1&3\\7&4\end{pmatrix} = \begin{vmatrix}1&3\\7&4\end{vmatrix}\qquad\text{(barres verticales, pas de parenthèses)}.$$

<h2 id="d-2">5. Taille 2</h2>
<div class="sbox">$$\begin{vmatrix}a&b\\c&d\end{vmatrix} = ad - bc.$$</div>
<p>Diagonale principale moins l'autre diagonale.</p>
$$\begin{vmatrix}1&3\\7&4\end{vmatrix} = 1\times4 - 3\times7 = -17.$$
<p>Ce sont les deux permutations de $\mathfrak S_2$ : $\mathrm{id}$ (signe $+$) et $(1\ 2)$ (signe $-$).</p>

<h2 id="d-tri">6. Matrices diagonales et triangulaires</h2>
<div class="sbox">$$A\ \text{triangulaire (ou diagonale)}\ \Longrightarrow\ \det A = \prod_{i=1}^na_{i,i}.$$</div>
$$\begin{vmatrix}2&7&-1\\0&-3&5\\0&0&4\end{vmatrix} = 2\times(-3)\times4 = -24,\qquad\det I_n = 1.$$
<p class="ml">Réflexe</p>
<p>Avant tout calcul, regarde si la matrice est triangulaire ou si quelques opérations la rendent triangulaire.</p>

<h2 id="d-sarrus">7. Taille 3 : la règle de Sarrus</h2>
<div class="sbox">$$\begin{vmatrix}a&b&c\\d&e&f\\g&h&i\end{vmatrix} = aei + bfg + cdh - (ceg + afh + bdi).$$</div>
<p class="ml">Méthode : suivre les traits</p>
<ol>
<li>Les <b>trois traits descendants</b> (vers la droite) donnent les produits <b>avec $+$</b>.</li>
<li>Les <b>trois traits montants</b> (vers la gauche) donnent les produits <b>avec $-$</b>.</li>
<li>On additionne chaque groupe, puis on soustrait, avec la parenthèse.</li>
</ol>
<div data-mlab="sarrus"></div>
<p class="ml">Exemple</p>
<p>Chaque produit a sa couleur : la case de la matrice et le facteur du calcul ont la même. Les trois premiers suivent un trait <b>descendant</b> ($+$), les trois suivants un trait <b>montant</b> ($-$).</p>
<div class="sarx">
<div>$$\begin{vmatrix}\cB1&2&3\\0&\cB4&5\\1&0&\cB6\end{vmatrix}$$<p>$+\ \cB{1\times4\times6} = \cB{24}$</p></div>
<div>$$\begin{vmatrix}1&\cG2&3\\0&4&\cG5\\\cG1&0&6\end{vmatrix}$$<p>$+\ \cG{2\times5\times1} = \cG{10}$</p></div>
<div>$$\begin{vmatrix}1&2&\cV3\\\cV0&4&5\\1&\cV0&6\end{vmatrix}$$<p>$+\ \cV{3\times0\times0} = \cV{0}$</p></div>
<div>$$\begin{vmatrix}1&2&\cR3\\0&\cR4&5\\\cR1&0&6\end{vmatrix}$$<p>$-\ \cR{3\times4\times1} = -\cR{12}$</p></div>
<div>$$\begin{vmatrix}\cO1&2&3\\0&4&\cO5\\1&\cO0&6\end{vmatrix}$$<p>$-\ \cO{1\times5\times0} = -\cO{0}$</p></div>
<div>$$\begin{vmatrix}1&\cP2&3\\\cP0&4&5\\1&0&\cP6\end{vmatrix}$$<p>$-\ \cP{2\times0\times6} = -\cP{0}$</p></div>
</div>
$$\det A = (\cB{24} + \cG{10} + \cV{0}) - (\cR{12} + \cO{0} + \cP{0}) = 34 - 12 = 22.$$
<p class="ml piege">Piège</p>
<ul>
<li>Sarrus ne marche <b>qu'en taille 3</b>. En taille 4, il y a 24 produits, pas 8.</li>
<li>Oublier la parenthèse après le $-$ change trois signes d'un coup.</li>
</ul>

<h2 id="d-ops">8. Opérations sur les lignes et les colonnes</h2>
<p>Le déterminant est <b>multilinéaire et alterné</b> par rapport aux colonnes (et aux lignes). En pratique :</p>
<div class="sbox">$$\left\{\begin{aligned}&C_i\leftarrow C_i + \lambda C_j\ (j\neq i)&&\Longrightarrow\ \det\ \text{inchangé}\\&C_i\leftrightarrow C_j&&\Longrightarrow\ \det\ \text{change de signe}\\&C_i\leftarrow\lambda C_i&&\Longrightarrow\ \det\ \text{multiplié par}\ \lambda\end{aligned}\right.$$</div>
<p>Pareil pour les lignes. Deux colonnes égales ou proportionnelles : $\det = 0$.</p>
<p class="ml">Méthode : faire des zéros puis développer</p>
<ol>
<li>Choisir une ligne ou une colonne et faire apparaître des $0$ avec $L_i\leftarrow L_i - \lambda L_j$.</li>
<li>Factoriser une ligne commune : $\det(\dots,\lambda C,\dots) = \lambda\det(\dots,C,\dots)$.</li>
<li>Développer selon la ligne ou la colonne pleine de zéros.</li>
</ol>
<p class="ml">Exemple : la somme des colonnes</p>
$$\begin{vmatrix}a&b&b\\b&a&b\\b&b&a\end{vmatrix}\underset{C_1\leftarrow C_1 + C_2 + C_3}{=}(a + 2b)\begin{vmatrix}1&b&b\\1&a&b\\1&b&a\end{vmatrix}\underset{\substack{L_2\leftarrow L_2 - L_1\\L_3\leftarrow L_3 - L_1}}{=}(a + 2b)\begin{vmatrix}1&b&b\\0&a - b&0\\0&0&a - b\end{vmatrix} = (a + 2b)(a - b)^2.$$
<p class="ml piege">Piège</p>
<p>$L_i\leftarrow\lambda L_i + L_j$ multiplie le déterminant par $\lambda$ : on ne touche à la ligne modifiée qu'en lui ajoutant les autres.</p>

<h2 id="d-dev">9. Développer selon une ligne ou une colonne</h2>
<p class="ml">Les signes</p>
$$\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix},\qquad\begin{pmatrix}+&-&+&-\\-&+&-&+\\+&-&+&-\\-&+&-&+\end{pmatrix}\qquad\text{signe de la case}\ (i,j) = (-1)^{i+j}.$$
<div class="sbox">$$\det A = \sum_{j=1}^n(-1)^{i+j}a_{i,j}\det A_{i,j}\ \ \text{(ligne}\ i\text{)},\qquad\det A = \sum_{i=1}^n(-1)^{i+j}a_{i,j}\det A_{i,j}\ \ \text{(colonne}\ j\text{)}.$$</div>
<ul>
<li>$A_{i,j}$ : la matrice $A$ sans sa ligne $i$ et sa colonne $j$.</li>
<li>$\det A_{i,j}$ est le <b>mineur</b>, $(-1)^{i+j}\det A_{i,j}$ le <b>cofacteur</b>.</li>
</ul>
<p class="ml">Réflexe</p>
<p>Développer selon la ligne ou la colonne qui contient <b>le plus de zéros</b> : chaque zéro supprime un déterminant à calculer.</p>
<div data-mlab="dev"></div>
<p class="ml">Exemple</p>
<p>On développe selon la <b>ligne 1</b>. Ses trois coefficients ont chacun une couleur, et leurs signes viennent du damier $\begin{pmatrix}\cB+&\cR-&\cG+\end{pmatrix}$.</p>
$$A = \begin{pmatrix}\cB1&\cR4&\cG5\\2&0&3\\0&1&2\end{pmatrix}$$
<p>Pour chaque coefficient, on <b>barre sa ligne et sa colonne</b> (en gris) : ce qui reste est son mineur.</p>
<div class="sarx">
<div>$$\begin{pmatrix}\cB1&\cX4&\cX5\\\cX2&0&3\\\cX0&1&2\end{pmatrix}\ \leadsto\ \cB{\begin{vmatrix}0&3\\1&2\end{vmatrix}}$$<p>$\cB{+1}\times\cB{(0\times2 - 3\times1)} = \cB{-3}$</p></div>
<div>$$\begin{pmatrix}\cX1&\cR4&\cX5\\2&\cX0&3\\0&\cX1&2\end{pmatrix}\ \leadsto\ \cR{\begin{vmatrix}2&3\\0&2\end{vmatrix}}$$<p>$\cR{-4}\times\cR{(2\times2 - 3\times0)} = \cR{-16}$</p></div>
<div>$$\begin{pmatrix}\cX1&\cX4&\cG5\\2&0&\cX3\\0&1&\cX2\end{pmatrix}\ \leadsto\ \cG{\begin{vmatrix}2&0\\0&1\end{vmatrix}}$$<p>$\cG{+5}\times\cG{(2\times1 - 0\times0)} = \cG{10}$</p></div>
</div>
$$\det A = \cB{1\begin{vmatrix}0&3\\1&2\end{vmatrix}} - \cR{4\begin{vmatrix}2&3\\0&2\end{vmatrix}} + \cG{5\begin{vmatrix}2&0\\0&1\end{vmatrix}} = \cB{-3}\cR{-16}\cG{+10} = -9.$$

<h2 id="d-form">10. Les formules</h2>
<div class="sbox">$$\left\{\begin{aligned}&\det(AB) = \det A\,\det B,\qquad\det(A^n) = (\det A)^n\\&\det(\lambda A) = \lambda^n\det A\quad(A\in\mathcal M_n)\\&\det({}^tA) = \det A\\&A\ \text{inversible}\iff\det A\neq0,\qquad\det(A^{-1}) = \frac1{\det A}\end{aligned}\right.$$</div>
<p class="ml">Pourquoi $\lambda^n$</p>
$$\det(\lambda A) = \det\big((\lambda I_n)A\big) = \det(\lambda I_n)\det A = \lambda^n\det A.$$
<p class="ml">Pourquoi $\frac1{\det A}$</p>
$$AA^{-1} = I_n\ \Longrightarrow\ \det A\,\det(A^{-1}) = \det I_n = 1.$$
<p class="ml piege">Piège</p>
<ul>
<li>$\det(A + B)\neq\det A + \det B$.</li>
<li>$\det(\lambda A)\neq\lambda\det A$ dès que $n\geqslant2$.</li>
</ul>

<h2 id="d-vdm">11. Vandermonde</h2>
<div class="sbox">$$V(\alpha_1,\dots,\alpha_n) = \begin{vmatrix}1&\alpha_1&\alpha_1^2&\cdots&\alpha_1^{n-1}\\1&\alpha_2&\alpha_2^2&\cdots&\alpha_2^{n-1}\\\vdots&\vdots&\vdots&&\vdots\\1&\alpha_n&\alpha_n^2&\cdots&\alpha_n^{n-1}\end{vmatrix} = \prod_{1\leqslant i\lt j\leqslant n}(\alpha_j - \alpha_i).$$</div>
<ul>
<li>$\binom n2$ facteurs, avec $i\lt j$ strictement.</li>
<li>$V\neq0\iff$ les $\alpha_i$ sont deux à deux distincts.</li>
</ul>
$$V(\alpha_1,\alpha_2,\alpha_3) = (\alpha_2 - \alpha_1)(\alpha_3 - \alpha_1)(\alpha_3 - \alpha_2).$$
<p class="ml">La démonstration à savoir refaire</p>
<ol>
<li>$C_k\leftarrow C_k - \alpha_1C_{k-1}$, en partant de la dernière colonne : la première ligne devient $(1,0,\dots,0)$.</li>
<li>La ligne $i$ devient $\big(1,\ \alpha_i - \alpha_1,\ \alpha_i(\alpha_i - \alpha_1),\dots\big)$ : on factorise $(\alpha_i - \alpha_1)$ dans chaque ligne $i\geqslant2$.</li>
<li>On développe selon la première ligne : il reste $V(\alpha_2,\dots,\alpha_n)$, puis récurrence.</li>
</ol>
$$V(\alpha_1,\dots,\alpha_n) = \prod_{i=2}^n(\alpha_i - \alpha_1)\cdot V(\alpha_2,\dots,\alpha_n).$$
<p class="ml">Utilisation classique</p>
<p>Un polynôme de degré $\leqslant n - 1$ qui s'annule en $n$ points distincts est nul : le système des coefficients a pour matrice une Vandermonde inversible.</p>

<h2 id="d-plus">12. Pour aller plus loin</h2>
<p class="ml">Déterminant par blocs</p>
<div class="sbox">$$\det\begin{pmatrix}A&B\\0&D\end{pmatrix} = \det A\,\det D\qquad(A, D\ \text{carrées}).$$</div>
<p class="ml">Comatrice</p>
<div class="sbox">$$A\,{}^t\operatorname{Com}(A) = {}^t\operatorname{Com}(A)\,A = \det(A)\,I_n\ \Longrightarrow\ A^{-1} = \frac1{\det A}\,{}^t\operatorname{Com}(A).$$</div>
<p>En taille 2, on retrouve $\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1} = \frac1{ad - bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.</p>
<p class="ml">Formules de Cramer</p>
$$AX = B,\ \det A\neq0\ \Longrightarrow\ x_k = \frac{\det A_k}{\det A},\qquad A_k = A\ \text{avec sa colonne}\ k\ \text{remplacée par}\ B.$$
<p class="ml">Déterminant d'une famille et d'un endomorphisme</p>
$$(v_1,\dots,v_n)\ \text{base de}\ E\iff\det_{\mathcal B}(v_1,\dots,v_n)\neq0,\qquad\det u = \det\operatorname{Mat}_{\mathcal B}(u)\ \text{(indépendant de}\ \mathcal B\text{)}.$$
<p class="ml">Déterminant tridiagonal : récurrence</p>
<p>$D_n$ est le déterminant de taille $n$ avec des $2$ sur la diagonale et des $1$ juste au-dessus et juste en dessous. Exemple pour $n = 4$ :</p>
$$D_4 = \begin{vmatrix}\cB2&1&0&0\\\cR1&2&1&0\\0&1&2&1\\0&0&1&2\end{vmatrix}.$$
<p><b>Étape 1.</b> On développe selon la <b>colonne 1</b> : seuls $\cB2$ (signe $+$) et $\cR1$ (signe $-$) ne sont pas nuls.</p>
$$D_4 = \cB{2}\begin{vmatrix}2&1&0\\1&2&1\\0&1&2\end{vmatrix} - \cR{1}\begin{vmatrix}\cG1&0&0\\1&2&1\\0&1&2\end{vmatrix}.$$
<ul>
<li>Le premier mineur est exactement $\cB{D_3}$.</li>
<li>Le second commence par la ligne $(\cG1, 0, 0)$.</li>
</ul>
<p><b>Étape 2.</b> On développe ce second déterminant selon sa <b>ligne 1</b> : il ne reste que $\cG1$ (signe $+$).</p>
$$\begin{vmatrix}\cG1&0&0\\1&2&1\\0&1&2\end{vmatrix} = \cG1\times\begin{vmatrix}2&1\\1&2\end{vmatrix} = \cG{D_2}.$$
<p><b>Étape 3.</b> On assemble. Le même calcul marche pour tout $n\geqslant3$ :</p>
<div class="sbox">$$D_n = \cB2D_{n-1} - \cR1\cdot\cG{D_{n-2}}.$$</div>
<p><b>Étape 4.</b> On résout la récurrence, avec $D_1 = 2$ et $D_2 = \begin{vmatrix}2&1\\1&2\end{vmatrix} = 3$ :</p>
$$D_n - D_{n-1} = D_{n-1} - D_{n-2} = \cdots = D_2 - D_1 = 1\qquad\Longrightarrow\qquad D_n = D_1 + (n - 1) = n + 1.$$
<p>Vérification : $D_4 = 5$. C'est la méthode pour toutes les matrices « en bande ».</p>

<h2 id="d-reflexes">Si tu vois… alors pense à…</h2>
<div class="mrefl">
<div><b>Taille 2</b><span>$ad - bc$.</span></div>
<div><b>Taille 3 quelconque</b><span>Sarrus, ou une ligne pleine de zéros.</span></div>
<div><b>Triangulaire</b><span>Produit de la diagonale.</span></div>
<div><b>Lignes de même somme</b><span>$C_1\leftarrow C_1 + \cdots + C_n$, puis factoriser.</span></div>
<div><b>Puissances $\alpha_i^k$</b><span>Vandermonde.</span></div>
<div><b>Matrice en bande</b><span>Développer, puis récurrence sur $D_n$.</span></div>
<div><b>« $A$ inversible ? »</b><span>$\det A\neq0$.</span></div>
<div><b>$\det(\lambda A)$, $\det(A^{-1})$</b><span>$\lambda^n\det A$, $\frac1{\det A}$.</span></div>
<div><b>Signature d'une permutation</b><span>Cycles disjoints, $(-1)^{\sum(p_k - 1)}$.</span></div>
<div><b>$A$ antisymétrique, $n$ impair</b><span>$\det A = \det({}^tA) = (-1)^n\det A$, donc $0$.</span></div>
</div>

<h2 id="d-erreurs">Les 8 erreurs qui coûtent des points</h2>
<ol class="merr">
<li>Écrire $\det(\lambda A) = \lambda\det A$.</li>
<li>Écrire $\det(A + B) = \det A + \det B$.</li>
<li>Appliquer Sarrus à une matrice $4\times4$.</li>
<li>Oublier la parenthèse après le $-$ de Sarrus.</li>
<li>Se tromper dans les signes $(-1)^{i+j}$ du développement.</li>
<li>Faire $L_i\leftarrow\lambda L_i + L_j$ sans multiplier le résultat par $\frac1\lambda$.</li>
<li>Croire qu'un $3$-cycle est impair.</li>
<li>Calculer $\sigma\tau$ en appliquant $\sigma$ d'abord.</li>
</ol>

<h2 id="d-entrainement">S'entraîner</h2>
<div data-mlab="exdet"></div>
<h2>Vrai ou faux ?</h2>
<div data-mlab="quizdet"></div>
<h2 id="d-arbre">L'arbre des méthodes</h2>
<p>Pars du haut, réponds aux questions, et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Calculer $\det A$</div>
<div class="tq">Taille $2$ ?</div><a class="tl" href="#d-2">oui : $ad - bc$</a><div class="tno">non</div>
<div class="tq">Triangulaire ?</div><a class="tl" href="#d-tri">oui : produit de la diagonale</a><div class="tno">non</div>
<div class="tq">Taille $3$ ?</div><a class="tl" href="#d-sarrus">oui : Sarrus, ou développer</a><div class="tno">non</div>
<div class="tq">Puissances $\alpha_i^k$ ?</div><a class="tl" href="#d-vdm">oui : Vandermonde</a><div class="tno">non</div>
<div class="tq">Matrice en bande ?</div><a class="tl" href="#d-plus">oui : développer, récurrence sur $D_n$</a><div class="tno">non</div>
<a class="tl tend" href="#d-ops">faire des zéros, puis développer</a></div>
<div class="tb tR"><div class="tt">Signature de $\sigma$</div>
<div class="tq">$\sigma$ en deux lignes ?</div><a class="tl" href="#d-cycles">oui : cycles disjoints d'abord</a><div class="tno">déjà en cycles</div>
<div class="tq">Un seul cycle de longueur $p$ ?</div><a class="tl" href="#d-sign">oui : $(-1)^{p-1}$</a><div class="tno">non</div>
<div class="tq">$\sigma = \tau_1\cdots\tau_r$ connue ?</div><a class="tl" href="#d-sign">oui : $\varepsilon(\sigma) = \prod\varepsilon(\tau_i)$</a><div class="tno">non</div>
<a class="tl tend" href="#d-sign">$(-1)^{\sum(p_k - 1)}$ ou compter les inversions</a></div>
<div class="tb tG"><div class="tt">$A$ inversible ?</div>
<div class="tq">Deux colonnes liées ?</div><a class="tl" href="#d-ops">oui : $\det A = 0$, non inversible</a><div class="tno">non</div>
<div class="tq">$A$ antisymétrique, $n$ impair ?</div><a class="tl" href="#d-reflexes">oui : $\det A = 0$</a><div class="tno">non</div>
<a class="tl tend" href="#d-form">calculer $\det A$ : inversible $\iff\det A\neq0$</a></div>
<div class="tb tO"><div class="tt">Une formule</div>
<div class="tq">Un produit ?</div><a class="tl" href="#d-form">$\det(AB) = \det A\det B$</a><div class="tno">un scalaire</div>
<div class="tq">$\det(\lambda A)$ ?</div><a class="tl" href="#d-form">$\lambda^n\det A$, pas $\lambda\det A$</a><div class="tno">un inverse, une transposée</div>
<a class="tl tend" href="#d-form">$\det(A^{-1}) = \frac1{\det A}$, $\det({}^tA) = \det A$</a></div>
<div class="tb tV"><div class="tt">Résoudre ou inverser</div>
<div class="tq">Système $AX = B$, $\det A\neq0$ ?</div><a class="tl" href="#d-plus">oui : Cramer, $x_k = \frac{\det A_k}{\det A}$</a><div class="tno">inverser $A$</div>
<div class="tq">Taille $2$ ou $3$ ?</div><a class="tl" href="#d-plus">oui : comatrice</a><div class="tno">non</div>
<a class="tl tend" href="#c-maths-mpsi-13">pivot de Gauss (chapitre Matrices)</a></div>
</div>
</div>

`,
"Réduction des endomorphismes": R`
<nav class="msum"><a href="#r-not">Notations</a><a href="#r-elts">Éléments propres</a><a href="#r-chi">Polynôme caractéristique</a><a href="#r-zeros">Faire des zéros</a><a href="#r-sanschi">Sans $\chi_A$</a><a href="#r-esp">Sous-espaces propres</a><a href="#r-crit">Critères</a><a href="#r-diag">Diagonaliser</a><a href="#r-trig">Trigonaliser</a><a href="#r-annul">Polynômes annulateurs</a><a href="#r-enonce">Ce que l'énoncé te donne</a><a href="#r-appli">Applications</a><a href="#r-erreurs">Erreurs</a><a href="#r-entrainement">S'entraîner</a><a href="#r-arbre">L'arbre</a></nav>

<h2 id="r-not">1. Les notations du programme</h2>
<p class="mcode"><span class="kB">bleu</span> : valeurs propres &nbsp;·&nbsp; <span class="kR">rouge</span> : vecteurs propres &nbsp;·&nbsp; <span class="kG">vert</span> : sous-espaces propres &nbsp;·&nbsp; <span class="kO">orange</span> : multiplicités</p>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>Définition</th></tr>
<tr><td>Spectre</td><td>$\operatorname{Sp}(u)$, $\operatorname{Sp}(A)$</td><td>ensemble des <span class="kB">valeurs propres</span></td></tr>
<tr><td>Sous-espace propre</td><td>$\cG{E_\lambda(u)} = \operatorname{Ker}(u - \lambda\,\mathrm{id}_E)$</td><td>les <span class="kR">vecteurs propres</span> et $0$</td></tr>
<tr><td>Polynôme caractéristique</td><td>$\chi_A = \det(XI_n - A)$</td><td>unitaire, de degré $n$</td></tr>
<tr><td>Multiplicité</td><td>$\cO{m_\lambda}$</td><td>multiplicité de $\lambda$ comme racine de $\chi_A$</td></tr>
<tr><td>Polynôme minimal</td><td>$\pi_u$, $\pi_A$</td><td>polynôme unitaire annulateur de plus petit degré</td></tr>
</table>
<p class="ml piege">Piège</p>
<p>Le programme définit $\chi_A = \det(XI_n - A)$, et non $\det(A - XI_n)$ : les deux diffèrent de $(-1)^n$. Avec la bonne définition, $\chi_A$ est <b>unitaire</b>.</p>

<h2 id="r-elts">2. Éléments propres</h2>
<div class="sbox">$$\cB\lambda\in\operatorname{Sp}(A)\iff\exists\cR X\neq0,\ A\cR X = \cB\lambda\cR X\iff\operatorname{Ker}(A - \cB\lambda I_n)\neq\{0\}\iff\det(\cB\lambda I_n - A) = 0\iff\chi_A(\cB\lambda) = 0.$$</div>
<ul>
<li>Un <span class="kR">vecteur propre</span> est <b>non nul</b>. $0$ est dans $\cG{E_\lambda}$, mais ce n'est pas un vecteur propre.</li>
<li>Un vecteur propre a <b>une seule</b> valeur propre. Une valeur propre a une infinité de vecteurs propres : tout $k\cR X$, $k\neq0$.</li>
<li>$\cB\lambda\in\operatorname{Sp}(A)\iff A - \cB\lambda I_n$ n'est pas inversible. En particulier : $0\in\operatorname{Sp}(A)\iff A$ n'est pas inversible.</li>
</ul>
<div class="sbox">$$\text{Des vecteurs propres associés à des valeurs propres distinctes forment une famille libre, et}\ \sum_\lambda\cG{E_\lambda}\ \text{est directe}.$$</div>
<p class="ml">Lien avec la trace et le déterminant (quand $\chi_A$ est scindé)</p>
<div class="sbox">$$\chi_A = \prod_{\lambda}(X - \cB\lambda)^{\cO{m_\lambda}},\qquad\operatorname{tr}A = \sum_\lambda\cO{m_\lambda}\cB\lambda,\qquad\det A = \prod_\lambda\cB\lambda^{\cO{m_\lambda}}.$$</div>

<h2 id="r-chi">3. Le polynôme caractéristique</h2>
<div class="sbox">$$\chi_A = \det(XI_n - A) = X^n - \operatorname{tr}(A)\,X^{n-1} + \cdots + (-1)^n\det A.$$</div>
<p class="ml">Taille 2 : la formule à connaître</p>
<div class="sbox">$$\chi_A = X^2 - \operatorname{tr}(A)\,X + \det A.$$</div>
<p class="ml">Exemple</p>
$$A = \begin{pmatrix}1&2\\2&1\end{pmatrix}.$$
<p><b>Avec la formule.</b></p>
$$\left\{\begin{aligned}\operatorname{tr}A &= 1 + 1 = \cO2\\\det A &= 1\times1 - 2\times2 = \cO{-3}\end{aligned}\right.\qquad\Longrightarrow\qquad\chi_A = X^2 - \cO2X + (\cO{-3}) = X^2 - 2X - 3.$$
$$\Delta = (-2)^2 - 4\times(-3) = 4 + 12 = 16 = 4^2,\qquad\lambda = \frac{2\pm4}{2}\ \Longrightarrow\ \lambda = \cB3\ \text{ou}\ \lambda = \cB{-1}.$$
<p><b>Ou directement avec le déterminant</b> (et on évite le discriminant) :</p>
$$\chi_A = \begin{vmatrix}X-1&-2\\-2&X-1\end{vmatrix} = (X-1)^2 - (-2)(-2) = (X-1)^2 - 2^2 = (X - 1 - 2)(X - 1 + 2) = (X - \cB3)(X + \cB1).$$
$$\operatorname{Sp}(A) = \{\cB{-1},\cB3\}.$$
<p class="ml">Les cas immédiats</p>
<ul>
<li>$A$ triangulaire : $\chi_A = \prod_i(X - a_{i,i})$, les valeurs propres sont sur la diagonale.</li>
<li>$A$ triangulaire par blocs $\begin{pmatrix}B&C\\0&D\end{pmatrix}$ : $\chi_A = \chi_B\,\chi_D$.</li>
<li>Taille 3 : développer, mais <b>jamais tout de suite</b>. D'abord faire des zéros (§4).</li>
</ul>

<h2 id="r-zeros">4. Faire apparaître des zéros (la méthode qui change tout)</h2>
<p>Développer $\det(XI_3 - A)$ tel quel donne un polynôme de degré 3 qu'il faut ensuite factoriser, et c'est là qu'on se trompe. On fait plutôt des opérations sur les lignes ou les colonnes pour <b>sortir un facteur</b> $(X - \lambda)$ avant de développer.</p>
<p class="ml">Les trois astuces</p>
<ol>
<li><b>Toutes les lignes ont la même somme $s$</b> : $C_1\leftarrow C_1 + C_2 + \cdots + C_n$. La première colonne devient $X - s$ partout, on factorise $(X - \cB s)$.</li>
<li><b>Deux lignes presque égales</b> : $L_1\leftarrow L_1 - L_2$ fait apparaître $X - \lambda$ et $-(X - \lambda)$, on factorise.</li>
<li><b>Une ligne ou une colonne avec un seul coefficient non nul</b> : développer directement selon elle.</li>
</ol>
<p class="ml">Exemple 1 : lignes de même somme</p>
$$A = \begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\qquad(\text{chaque ligne a pour somme}\ \cB4).$$
<p><b>Étape 1.</b> On écrit $XI_3 - A$ (on met $X - a_{i,i}$ sur la diagonale et $-a_{i,j}$ ailleurs) et on fait $\cO{C_1\leftarrow C_1 + C_2 + C_3}$. Sur chaque ligne, la nouvelle première case vaut :</p>
$$(X - 2) + (-1) + (-1) = \cB{X - 4}.$$
$$\chi_A = \begin{vmatrix}X-2&-1&-1\\-1&X-2&-1\\-1&-1&X-2\end{vmatrix} = \begin{vmatrix}\cB{X-4}&-1&-1\\\cB{X-4}&X-2&-1\\\cB{X-4}&-1&X-2\end{vmatrix} = \cB{(X-4)}\begin{vmatrix}1&-1&-1\\1&X-2&-1\\1&-1&X-2\end{vmatrix}.$$
<p><b>Étape 2.</b> On fait $\cO{L_2\leftarrow L_2 - L_1}$ et $\cO{L_3\leftarrow L_3 - L_1}$ :</p>
$$\left\{\begin{aligned}L_2 - L_1 &= \big(1 - 1,\ (X-2) - (-1),\ -1 - (-1)\big) = (0,\ \cR{X - 1},\ 0)\\L_3 - L_1 &= \big(1 - 1,\ -1 - (-1),\ (X-2) - (-1)\big) = (0,\ 0,\ \cR{X - 1})\end{aligned}\right.$$
<p>La matrice est triangulaire : son déterminant est le produit de la diagonale.</p>
$$\chi_A = \cB{(X-4)}\begin{vmatrix}1&-1&-1\\0&\cR{X-1}&0\\0&0&\cR{X-1}\end{vmatrix} = \cB{(X-4)}\times1\times\cR{(X-1)}\times\cR{(X-1)} = \cB{(X-4)}\,\cR{(X-1)^2}.$$
<p>Sans aucune factorisation de degré 3 : $\operatorname{Sp}(A) = \{\cB4, \cR1\}$, avec $\cO{m_4 = 1}$ et $\cO{m_1 = 2}$.</p>
<p class="ml">Exemple 2 : deux lignes presque égales</p>
$$B = \begin{pmatrix}3&1&-1\\1&3&-1\\0&0&2\end{pmatrix}:\qquad\text{les deux premières lignes de}\ XI_3 - B\ \text{se ressemblent}.$$
<p>On calcule la nouvelle première ligne :</p>
$$L_1 - L_2 = \big((X-3) - (-1),\ -1 - (X-3),\ 1 - 1\big) = \big(\cB{X - 2},\ \cB{-(X - 2)},\ 0\big).$$
$$\chi_B = \begin{vmatrix}X-3&-1&1\\-1&X-3&1\\0&0&X-2\end{vmatrix}\underset{\cO{L_1\leftarrow L_1 - L_2}}{=}\begin{vmatrix}\cB{X-2}&\cB{-(X-2)}&0\\-1&X-3&1\\0&0&X-2\end{vmatrix} = \cB{(X-2)}\begin{vmatrix}1&-1&0\\-1&X-3&1\\0&0&X-2\end{vmatrix}.$$
<p>On développe selon la dernière ligne (un seul coefficient non nul) :</p>
$$\chi_B = \cB{(X-2)}\times(X-2)\times(-1)^{3+3}\begin{vmatrix}1&-1\\-1&X-3\end{vmatrix}.$$
$$\begin{vmatrix}1&-1\\-1&X-3\end{vmatrix} = 1\times(X-3) - (-1)\times(-1) = X - 3 - 1 = X - 4.$$
$$\chi_B = (X-2)^2(X - 4),\qquad\operatorname{tr}B = 3 + 3 + 2 = 8 = 2 + 2 + 4.\ \checkmark$$
<p class="ml">Vérifier son $\chi_A$ en 10 secondes</p>
<ul>
<li>Le coefficient de $X^{n-1}$ doit être $-\operatorname{tr}A$ : ici $-(4 + 1 + 1) = -6 = -\operatorname{tr}A$.</li>
<li>$\chi_A(0) = (-1)^n\det A$ : ici $\chi_A(0) = (0-4)(0-1)^2 = -4$ et $\det A = 4$, donc $(-1)^3\times4 = -4\ \checkmark$.</li>
</ul>

<h2 id="r-sanschi">5. Trouver des valeurs propres sans calculer $\chi_A$</h2>
<div class="mrefl">
<div><b>Lignes de même somme $s$</b><span>$A\begin{pmatrix}1\\\vdots\\1\end{pmatrix} = s\begin{pmatrix}1\\\vdots\\1\end{pmatrix}$ : $\cB s\in\operatorname{Sp}(A)$.</span></div>
<div><b>$\operatorname{rg}A = 1$</b><span>$0$ de multiplicité $\geqslant n-1$, et l'autre valeur propre est $\operatorname{tr}A$.</span></div>
<div><b>$\operatorname{rg}(A - \lambda I_n) = r\lt n$</b><span>$\cB\lambda\in\operatorname{Sp}(A)$ et $\dim\cG{E_\lambda} = n - r$.</span></div>
<div><b>$P(A) = 0$</b><span>$\operatorname{Sp}(A)\subset\{\text{racines de}\ P\}$.</span></div>
<div><b>$A$ triangulaire</b><span>La diagonale.</span></div>
<div><b>Il reste une valeur à trouver</b><span>Utiliser $\operatorname{tr}A = \sum m_\lambda\lambda$.</span></div>
</div>
<p class="ml">Exemple</p>
$$A = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.$$
$$\left\{\begin{aligned}&\text{les 3 lignes sont égales}\ \Longrightarrow\ \operatorname{rg}A = 1\\&\dim\cG{E_0} = \dim\operatorname{Ker}A = 3 - 1 = 2\ \Longrightarrow\ \cO{m_0}\geqslant2\\&\operatorname{tr}A = 1 + 1 + 1 = 3 = 0 + 0 + \lambda\ \Longrightarrow\ \lambda = \cB3\end{aligned}\right.\qquad\Longrightarrow\qquad\chi_A = X^2(X - \cB3).$$
<p>Contrôle : chaque ligne a pour somme $3$, donc $A(1,1,1) = 3(1,1,1)$, ce qui confirme $\cB3\in\operatorname{Sp}(A)$.</p>

<h2 id="r-esp">6. Calculer un sous-espace propre</h2>
<p class="ml">Méthode</p>
<ol>
<li>Écrire $A - \cB\lambda I_n$.</li>
<li>Résoudre $(A - \cB\lambda I_n)\cR X = 0$ par le pivot de Gauss.</li>
<li>Écrire $\cG{E_\lambda}$ comme un $\operatorname{Vect}$ et vérifier la dimension : $\dim\cG{E_\lambda} = n - \operatorname{rg}(A - \cB\lambda I_n)$.</li>
</ol>
<p class="ml">Exemple : la matrice de l'exemple 1, avec $\cB\lambda = 1$</p>
<p>On cherche $X = (x, y, z)$ tel que $(A - \cB1\,I_3)X = 0$ :</p>
$$A - \cB1\,I_3 = \begin{pmatrix}2-1&1&1\\1&2-1&1\\1&1&2-1\end{pmatrix} = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}x + y + z &= 0\\x + y + z &= 0\\x + y + z &= 0\end{aligned}\right.$$
$$\underset{\cO{L_2\leftarrow L_2 - L_1,\ L_3\leftarrow L_3 - L_1}}{\Longleftrightarrow}\qquad x + y + z = 0\qquad\Longleftrightarrow\qquad z = -x - y.$$
<p>Les inconnues libres sont $x$ et $y$. On remplace $z$ dans $X$ et on sépare selon $x$ et $y$ :</p>
$$X = \begin{pmatrix}x\\y\\-x-y\end{pmatrix} = x\cR{\begin{pmatrix}1\\0\\-1\end{pmatrix}} + y\cR{\begin{pmatrix}0\\1\\-1\end{pmatrix}}\qquad\Longrightarrow\qquad\cG{E_1} = \operatorname{Vect}\Big(\cR{\begin{pmatrix}1\\0\\-1\end{pmatrix}},\ \cR{\begin{pmatrix}0\\1\\-1\end{pmatrix}}\Big),\qquad\dim\cG{E_1} = 2.$$
<p class="ml">Et pour $\cB\lambda = 4$</p>
$$A - \cB4\,I_3 = \begin{pmatrix}-2&1&1\\1&-2&1\\1&1&-2\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}-2x + y + z &= 0\quad(L_1)\\x - 2y + z &= 0\quad(L_2)\\x + y - 2z &= 0\quad(L_3)\end{aligned}\right.$$
$$\left\{\begin{aligned}\cO{L_1 - L_2}&:\ -3x + 3y = 0\ \Longrightarrow\ y = x\\\cO{L_2 - L_3}&:\ -3y + 3z = 0\ \Longrightarrow\ z = y\end{aligned}\right.\qquad\Longrightarrow\qquad X = \begin{pmatrix}x\\x\\x\end{pmatrix} = x\cR{\begin{pmatrix}1\\1\\1\end{pmatrix}}.$$
$$\cG{E_4} = \operatorname{Vect}\cR{\begin{pmatrix}1\\1\\1\end{pmatrix}},\qquad\dim\cG{E_4} = 1.$$
<p>On contrôle avec $L_1$ : $-2x + x + x = 0\ \checkmark$.</p>
<p class="ml piege">Piège</p>
<p>Si tu trouves $\cG{E_\lambda} = \{0\}$, ton $\lambda$ n'est pas une valeur propre : erreur dans $\chi_A$ ou dans le pivot.</p>

<h2 id="r-crit">7. Les critères de diagonalisabilité</h2>
<div class="sbox">$$1\leqslant\dim\cG{E_\lambda}\leqslant\cO{m_\lambda}\qquad\text{pour tout}\ \lambda\in\operatorname{Sp}(A).$$</div>
<div class="sbox">$$A\ \text{diagonalisable}\iff\chi_A\ \text{scindé et}\ \forall\lambda,\ \dim\cG{E_\lambda} = \cO{m_\lambda}\iff\sum_\lambda\dim\cG{E_\lambda} = n\iff\pi_A\ \text{scindé à racines simples}.$$</div>
<p class="ml">Les conditions suffisantes (on conclut tout de suite)</p>
<ul>
<li>$\chi_A$ scindé à racines <b>simples</b> ($n$ valeurs propres distinctes) $\Longrightarrow$ diagonalisable, et chaque $\cG{E_\lambda}$ est une droite.</li>
<li>Un polynôme annulateur scindé à racines simples $\Longrightarrow$ diagonalisable.</li>
<li>$A$ symétrique réelle $\Longrightarrow$ diagonalisable dans une base orthonormée (théorème spectral).</li>
</ul>
<p class="ml">Les conditions pour dire non</p>
<ul>
<li>$\chi_A$ non scindé sur $\mathbb R$ : pas diagonalisable sur $\mathbb R$ (essayer sur $\mathbb C$).</li>
<li>$\operatorname{Sp}(A) = \{\lambda\}$ et $A\neq\lambda I_n$ : <b>pas diagonalisable</b>, sinon $A = P(\lambda I_n)P^{-1} = \lambda I_n$.</li>
<li>$A$ nilpotente et $A\neq0$ : pas diagonalisable (cas $\lambda = 0$ du point précédent).</li>
<li>Un $\lambda$ avec $\dim\cG{E_\lambda}\lt\cO{m_\lambda}$.</li>
</ul>
<p><b>Astuce</b> : seules les valeurs propres <b>multiples</b> sont à vérifier. Si $\cO{m_\lambda} = 1$, alors $\dim\cG{E_\lambda} = 1$ automatiquement.</p>

<h2 id="r-diag">8. Diagonaliser : la méthode complète</h2>
<ol>
<li>Calculer $\chi_A$ en faisant des zéros, et le factoriser.</li>
<li>Lister $\operatorname{Sp}(A)$ avec les multiplicités $\cO{m_\lambda}$.</li>
<li>Pour chaque $\cB\lambda$ <b>multiple</b>, calculer $\dim\cG{E_\lambda}$ et conclure.</li>
<li>Donner une base de chaque $\cG{E_\lambda}$.</li>
<li>Construire $P$ : les <span class="kR">vecteurs propres en colonnes</span>, et $D$ : les <span class="kB">valeurs propres</span> <b>dans le même ordre</b>.</li>
<li>Vérifier $AP = PD$ (plus rapide que $P^{-1}AP = D$, et on n'a pas besoin de $P^{-1}$).</li>
</ol>
<p class="ml">Exemple complet : $A = \begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}$</p>
<p><b>1–2.</b> Calcul détaillé au §4 (on fait $C_1\leftarrow C_1 + C_2 + C_3$, puis $L_2\leftarrow L_2 - L_1$, $L_3\leftarrow L_3 - L_1$) :</p>
$$\chi_A = (X - \cB4)(X - \cB1)^2,\qquad\cO{m_4 = 1},\qquad\cO{m_1 = 2}.$$
<p><b>3.</b> Seule $\cB1$ est multiple, c'est la seule à vérifier :</p>
$$A - I_3 = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}\ \text{(3 lignes égales)}\ \Longrightarrow\ \operatorname{rg}(A - I_3) = 1\ \Longrightarrow\ \dim\cG{E_1} = 3 - 1 = 2 = \cO{m_1}.$$
<p>Donc $A$ est diagonalisable.</p>
<p><b>4.</b> Les systèmes sont résolus en entier au §6 :</p>
$$\cG{E_4}:\ \left\{\begin{aligned}-2x + y + z &= 0\\x - 2y + z &= 0\\x + y - 2z &= 0\end{aligned}\right.\ \Longleftrightarrow\ x = y = z,\qquad\cG{E_1}:\ x + y + z = 0\ \Longleftrightarrow\ z = -x - y.$$
$$\cG{E_4} = \operatorname{Vect}\cR{(1,1,1)},\qquad\cG{E_1} = \operatorname{Vect}\big(\cR{(1,0,-1)},\ \cR{(0,1,-1)}\big).$$
<p><b>5.</b> On range les vecteurs propres en colonnes, et les valeurs propres dans le même ordre :</p>
<div class="labm"><table><tr><td></td><td class="kB">$\lambda = 4$</td><td class="kB">$\lambda = 1$</td><td class="kB">$\lambda = 1$</td></tr><tr><td></td><td class="c1">1</td><td class="c2">1</td><td class="c3">0</td></tr><tr><td></td><td class="c1">1</td><td class="c2">0</td><td class="c3">1</td></tr><tr><td></td><td class="c1">1</td><td class="c2">−1</td><td class="c3">−1</td></tr></table><span class="lab-cap">$P$ : chaque colonne est un vecteur propre</span></div>
$$D = \begin{pmatrix}\cB4&0&0\\0&\cB1&0\\0&0&\cB1\end{pmatrix},\qquad A = PDP^{-1}.$$
<p><b>6.</b> On vérifie chaque colonne, c'est-à-dire $AP = PD$ :</p>
$$\left\{\begin{aligned}A\cR{(1,1,1)} &= (2+1+1,\ 1+2+1,\ 1+1+2) = (4,4,4) = \cB4\cR{(1,1,1)}\\A\cR{(1,0,-1)} &= (2+0-1,\ 1+0-1,\ 1+0-2) = (1,0,-1) = \cB1\cR{(1,0,-1)}\\A\cR{(0,1,-1)} &= (0+1-1,\ 0+2-1,\ 0+1-2) = (0,1,-1) = \cB1\cR{(0,1,-1)}\end{aligned}\right.$$
$$AP = \begin{pmatrix}4&1&0\\4&0&1\\4&-1&-1\end{pmatrix} = PD.\ \checkmark$$
<div data-mlab="diag"></div>

<h2 id="r-trig">9. Trigonaliser</h2>
<div class="sbox">$$A\ \text{trigonalisable}\iff\chi_A\ \text{scindé}.\qquad\text{Sur}\ \mathbb C,\ \text{toute matrice est trigonalisable}.$$</div>
<p>On cherche $P$ inversible et $T$ triangulaire supérieure avec $A = PTP^{-1}$. La diagonale de $T$ contient les valeurs propres, répétées selon leur multiplicité.</p>
<p class="ml">L'idée</p>
<p>On garde le plus possible de <span class="kR">vecteurs propres</span>, puis on complète avec des vecteurs bien choisis : leur image n'est plus un multiple d'eux-mêmes, mais ce multiple <b>plus</b> une combinaison des vecteurs précédents.</p>
<p class="ml">Taille 2 : $\chi_A = (X - \lambda)^2$, $\dim\cG{E_\lambda} = 1$</p>
<ol>
<li>Prendre $\cR{e_1}$ un vecteur propre.</li>
<li>Résoudre $(A - \lambda I_2)\cG{e_2} = \cR{e_1}$.</li>
<li>Alors $A\cG{e_2} = \cR{e_1} + \lambda\cG{e_2}$, d'où $T = \begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}$.</li>
</ol>
<p class="ml">Exemple</p>
$$A = \begin{pmatrix}1&1\\-1&3\end{pmatrix}.$$
<p><b>1. $\chi_A$.</b></p>
$$\operatorname{tr}A = 1 + 3 = 4,\qquad\det A = 1\times3 - 1\times(-1) = 4,\qquad\chi_A = X^2 - 4X + 4 = (X - \cB2)^2.$$
<p><b>2. Le sous-espace propre.</b> On résout $(A - 2I_2)X = 0$ avec $X = (x, y)$ :</p>
$$A - 2I_2 = \begin{pmatrix}-1&1\\-1&1\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}-x + y &= 0\\-x + y &= 0\end{aligned}\right.\qquad\Longleftrightarrow\qquad y = x.$$
$$\cG{E_2} = \operatorname{Vect}\cR{\begin{pmatrix}1\\1\end{pmatrix}},\qquad\dim\cG{E_2} = 1\lt2 = \cO{m_2}\ \Longrightarrow\ \text{pas diagonalisable}.$$
<p><b>3. Le premier vecteur</b> : $\cR{e_1} = (1,1)$, et on contrôle $A\cR{e_1} = (1 + 1,\ -1 + 3) = (2,2) = 2\cR{e_1}$.</p>
<p><b>4. Le deuxième vecteur</b> : on résout $(A - 2I_2)\cG{e_2} = \cR{e_1}$ avec $\cG{e_2} = (x, y)$ :</p>
$$\begin{pmatrix}-1&1\\-1&1\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}1\\1\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}-x + y &= 1\\-x + y &= 1\end{aligned}\right.\qquad\Longleftrightarrow\qquad y = 1 + x.$$
<p>N'importe quelle solution convient : avec $x = 0$, on prend $\cG{e_2} = (0, 1)$.</p>
<p><b>5. Vérification et conclusion.</b></p>
$$A\cG{e_2} = \begin{pmatrix}1\times0 + 1\times1\\-1\times0 + 3\times1\end{pmatrix} = \begin{pmatrix}1\\3\end{pmatrix} = \begin{pmatrix}1\\1\end{pmatrix} + 2\begin{pmatrix}0\\1\end{pmatrix} = \cR{e_1} + \cB2\cG{e_2}.$$
$$P = \begin{pmatrix}\cR1&\cG0\\\cR1&\cG1\end{pmatrix},\qquad T = \begin{pmatrix}\cB2&1\\0&\cB2\end{pmatrix},\qquad A = PTP^{-1}.$$
<p class="ml">Taille 3 : les cas possibles</p>
<table class="mtab">
<tr><th>$\chi_A$</th><th>Dimensions</th><th>Ce qu'on fait</th><th>Forme de $T$</th></tr>
<tr><td>$(X-\lambda)(X-\mu)^2$</td><td>$\dim E_\mu = 1$</td><td>$e_1\in E_\lambda$, $e_2\in E_\mu$, $(A - \mu I)e_3 = e_2$</td><td>$\begin{pmatrix}\lambda&0&0\\0&\mu&1\\0&0&\mu\end{pmatrix}$</td></tr>
<tr><td>$(X-\lambda)^3$</td><td>$\dim E_\lambda = 2$</td><td>$e_1, e_2\in E_\lambda$, $e_3$ avec $(A - \lambda I)e_3\in E_\lambda$ non nul</td><td>$\begin{pmatrix}\lambda&0&a\\0&\lambda&b\\0&0&\lambda\end{pmatrix}$</td></tr>
<tr><td>$(X-\lambda)^3$</td><td>$\dim E_\lambda = 1$</td><td>$e_1\in E_\lambda$, $(A - \lambda I)e_2 = e_1$, $(A - \lambda I)e_3 = e_2$</td><td>$\begin{pmatrix}\lambda&1&0\\0&\lambda&1\\0&0&\lambda\end{pmatrix}$</td></tr>
</table>
<p class="ml">Exemple : $\chi_A = (X - 1)^3$, $\dim E_1 = 2$</p>
$$A = \begin{pmatrix}0&1&1\\-1&2&1\\0&0&1\end{pmatrix}.$$
<p><b>1. $\chi_A$.</b> La dernière ligne de $XI_3 - A$ n'a qu'un coefficient non nul : on développe selon elle.</p>
$$\chi_A = \begin{vmatrix}X&-1&-1\\1&X-2&-1\\0&0&X-1\end{vmatrix} = (X-1)\times(-1)^{3+3}\begin{vmatrix}X&-1\\1&X-2\end{vmatrix}.$$
$$\begin{vmatrix}X&-1\\1&X-2\end{vmatrix} = X(X-2) - (-1)\times1 = X^2 - 2X + 1 = (X-1)^2\qquad\Longrightarrow\qquad\chi_A = (X - \cB1)^3.$$
<p><b>2. Le sous-espace propre.</b> On résout $(A - I_3)X = 0$ :</p>
$$A - I_3 = \begin{pmatrix}-1&1&1\\-1&1&1\\0&0&0\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}-x + y + z &= 0\\-x + y + z &= 0\\0 &= 0\end{aligned}\right.\qquad\Longleftrightarrow\qquad x = y + z.$$
$$X = \begin{pmatrix}y+z\\y\\z\end{pmatrix} = y\cR{\begin{pmatrix}1\\1\\0\end{pmatrix}} + z\cR{\begin{pmatrix}1\\0\\1\end{pmatrix}},\qquad\cG{E_1} = \operatorname{Vect}(\cR{e_1}, \cR{e_2}),\qquad\dim\cG{E_1} = 2\lt3 = \cO{m_1}.$$
<p>Donc $A$ n'est pas diagonalisable : on trigonalise (cas 2 du tableau).</p>
<p><b>3. Le troisième vecteur.</b> On calcule $(A - I_3)X$ pour un $X = (x,y,z)$ quelconque :</p>
$$(A - I_3)\begin{pmatrix}x\\y\\z\end{pmatrix} = \begin{pmatrix}-x + y + z\\-x + y + z\\0\end{pmatrix} = (-x + y + z)\cR{\begin{pmatrix}1\\1\\0\end{pmatrix}}.$$
<p>Il suffit que $-x + y + z\neq0$ pour sortir de $\cG{E_1}$. Avec $\cG{e_3} = (0,1,0)$ : $-0 + 1 + 0 = 1$, donc $(A - I_3)\cG{e_3} = \cR{e_1}$.</p>
$$A\cG{e_3} = \begin{pmatrix}0\times0 + 1\times1 + 1\times0\\-1\times0 + 2\times1 + 1\times0\\0\end{pmatrix} = \begin{pmatrix}1\\2\\0\end{pmatrix} = \begin{pmatrix}1\\1\\0\end{pmatrix} + \begin{pmatrix}0\\1\\0\end{pmatrix} = \cR{e_1} + \cB1\cG{e_3}.\ \checkmark$$
<p><b>4. $P$ est inversible</b> (développement selon la première ligne) :</p>
$$\det P = \begin{vmatrix}1&1&0\\1&0&1\\0&1&0\end{vmatrix} = 1\times\begin{vmatrix}0&1\\1&0\end{vmatrix} - 1\times\begin{vmatrix}1&1\\0&0\end{vmatrix} = 1\times(0 - 1) - 1\times(0 - 0) = -1\neq0.$$
$$P = \begin{pmatrix}\cR1&\cR1&\cG0\\\cR1&\cR0&\cG1\\\cR0&\cR1&\cG0\end{pmatrix},\qquad T = \begin{pmatrix}\cB1&0&1\\0&\cB1&0\\0&0&\cB1\end{pmatrix},\qquad A = PTP^{-1}.$$
<p><b>Astuce</b> : $T$ se lit colonne par colonne. La colonne $j$ de $T$ contient les coordonnées de $Ae_j$ dans la nouvelle base : ici $Ae_3 = 1\cdot e_1 + 0\cdot e_2 + 1\cdot e_3$.</p>

<h2 id="r-annul">10. Polynômes annulateurs</h2>
<div class="sbox">$$\chi_A(A) = 0\quad\text{(Cayley-Hamilton)},\qquad\pi_A\ \text{divise tout polynôme annulateur, en particulier}\ \chi_A.$$</div>
<ul>
<li>Les racines de $\pi_A$ sont exactement les valeurs propres.</li>
<li>$P(A) = 0\ \Longrightarrow\ \operatorname{Sp}(A)\subset\{\text{racines de}\ P\}$ : inclusion seulement.</li>
<li>Lemme des noyaux : $P\wedge Q = 1\ \Longrightarrow\ \operatorname{Ker}(PQ)(u) = \operatorname{Ker}P(u)\oplus\operatorname{Ker}Q(u)$.</li>
</ul>
<p class="ml">Exemple : inverser avec Cayley-Hamilton</p>
$$\chi_A = X^2 - 4X + 4\ \Longrightarrow\ A^2 - 4A + 4I_2 = 0\ \Longrightarrow\ A\cdot\tfrac14(4I_2 - A) = I_2\ \Longrightarrow\ A^{-1} = I_2 - \tfrac14A.$$

<h2 id="r-enonce">11. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>Les valeurs propres $\lambda_1,\dots,\lambda_n$</b><span>$\operatorname{tr}A = \sum\lambda_i$, $\det A = \prod\lambda_i$ ; $A$ inversible $\iff0\notin\operatorname{Sp}(A)$ ; $\chi_A = \prod(X - \lambda_i)$. Si elles sont distinctes : diagonalisable.</span></div>
<div><b>Un vecteur $X$ « propre »</b><span>Calculer $AX$ : on lit $\lambda$ avec $AX = \lambda X$.</span></div>
<div><b>$\lambda$ valeur propre de $A$</b><span>$\lambda^k$ est valeur propre de $A^k$, $P(\lambda)$ de $P(A)$, $\frac1\lambda$ de $A^{-1}$, avec les mêmes vecteurs propres.</span></div>
<div><b>$P(A) = 0$, $P$ scindé à racines simples</b><span>Diagonalisable, et $\operatorname{Sp}(A)\subset$ racines de $P$.</span></div>
<div><b>$A^2 = A$ (projecteur)</b><span>$\operatorname{Sp}\subset\{0,1\}$, diagonalisable, $\operatorname{rg}A = \operatorname{tr}A$.</span></div>
<div><b>$A^2 = I_n$ (symétrie)</b><span>$\operatorname{Sp}\subset\{-1,1\}$, diagonalisable.</span></div>
<div><b>$A$ nilpotente</b><span>$\operatorname{Sp}(A) = \{0\}$, $\chi_A = X^n$, $\operatorname{tr}A = 0$ ; diagonalisable $\iff A = 0$.</span></div>
<div><b>$A$ symétrique réelle</b><span>Diagonalisable en base orthonormée : $A = PDP^{\top}$ avec $P$ orthogonale.</span></div>
<div><b>$\operatorname{rg}A = 1$</b><span>$\chi_A = X^{n-1}(X - \operatorname{tr}A)$ ; diagonalisable $\iff\operatorname{tr}A\neq0$.</span></div>
<div><b>$\operatorname{Sp}(A) = \{\lambda\}$ seul</b><span>Diagonalisable $\iff A = \lambda I_n$.</span></div>
<div><b>$AB = BA$</b><span>Les $E_\lambda(A)$ sont stables par $B$ ; si $A$ a $n$ valeurs propres distinctes, $B$ est diagonalisable dans la même base.</span></div>
<div><b>$u$ diagonalisable, $F$ stable par $u$</b><span>L'endomorphisme induit $u_F$ est diagonalisable.</span></div>
<div><b>$A$ et $\,{}^tA$</b><span>Même $\chi$, même spectre, mêmes dimensions de sous-espaces propres.</span></div>
<div><b>$A$ semblable à $B$</b><span>Même $\chi$, trace, déterminant, rang ; diagonalisables en même temps.</span></div>
</div>

<h2 id="r-appli">12. À quoi ça sert</h2>
<ul>
<li><b>Puissances</b> : $A = PDP^{-1}\Rightarrow A^n = PD^nP^{-1}$.</li>
<li><b>Suites couplées</b> : $X_{n+1} = AX_n\Rightarrow X_n = A^nX_0$. Avec $Y_n = P^{-1}X_n$, on a $Y_{n+1} = DY_n$ : les suites se découplent.</li>
<li><b>Systèmes différentiels</b> : $X' = AX$. Avec $Y = P^{-1}X$, on a $Y' = DY$, donc $y_i(t) = c_ie^{\lambda_it}$.</li>
<li><b>Racine carrée</b> : si $\operatorname{Sp}(A)\subset\mathbb R_+$ et $A$ diagonalisable, $B = P\sqrt DP^{-1}$ vérifie $B^2 = A$.</li>
<li><b>Commutant</b> : si $A$ a $n$ valeurs propres distinctes, les matrices qui commutent avec $A$ sont les $PD'P^{-1}$, $D'$ diagonale.</li>
</ul>

<h2 id="r-erreurs">Les erreurs qui coûtent des points</h2>
<ol class="merr">
<li>Prendre $\det(A - XI_n)$ et l'appeler $\chi_A$ en taille impaire : le signe est faux.</li>
<li>Développer $\chi_A$ en taille 3 sans faire de zéros, puis ne pas savoir factoriser.</li>
<li>Oublier qu'un vecteur propre est non nul.</li>
<li>Conclure « diagonalisable » sans vérifier $\dim E_\lambda = m_\lambda$ pour les valeurs propres multiples.</li>
<li>Ranger dans $P$ les vecteurs propres dans un autre ordre que les valeurs propres dans $D$.</li>
<li>Écrire $\operatorname{Sp}(A) = $ racines de $P$ quand $P(A) = 0$ : ce n'est qu'une inclusion.</li>
<li>Dire « non diagonalisable sur $\mathbb R$ donc non diagonalisable » sans regarder $\mathbb C$.</li>
<li>Calculer $P^{-1}$ alors que l'énoncé ne le demande pas.</li>
</ol>

<h2 id="r-entrainement">S'entraîner</h2>
<div data-mlab="exred"></div>
<h2>Vrai ou faux ?</h2>
<div data-mlab="quizred"></div>

<h2 id="r-arbre">L'arbre de la réduction</h2>
<p>Le logigramme se lit de haut en bas. Un losange pose une question, un rectangle donne la conclusion. Clique un rectangle pour aller à la partie.</p>
<div class="lg">
<div class="lg-r"><div class="lg-c1"><div class="lg-start">J'ai une matrice $A$ (ou un endomorphisme $u$) à étudier</div></div></div>
<div class="lg-v"></div>
<div class="lg-r"><div class="lg-c1"><div class="lg-d"><span>L'énoncé donne-t-il une information spéciale ?</span></div></div><div class="lg-h"><span>oui</span></div><div class="lg-c3"><div class="lg-box lg-list">
<a href="#r-annul"><b>$P(A) = 0$</b> : $\operatorname{Sp}(A)\subset\{\text{racines de}\ P\}$ ; $P$ scindé à racines simples $\Rightarrow$ <em class="ok">diagonalisable</em></a>
<a href="#r-crit"><b>$A$ symétrique réelle</b> : <em class="ok">diagonalisable en base orthonormée</em></a>
<a href="#r-enonce"><b>Les valeurs propres</b> : trace, déterminant, inversibilité ; $n$ valeurs propres distinctes $\Rightarrow$ <em class="ok">diagonalisable</em></a>
<a href="#r-crit"><b>$A$ nilpotente</b> : $\operatorname{Sp}(A) = \{0\}$ ; <em class="no">diagonalisable seulement si $A = 0$</em>, sinon trigonaliser</a>
<a href="#r-sanschi"><b>$\operatorname{rg}A = 1$</b> : $\chi_A = X^{n-1}(X - \operatorname{tr}A)$ ; <em class="ok">diagonalisable</em> $\iff\operatorname{tr}A\neq0$</a>
</div></div></div>
<div class="lg-v"><span>non</span></div>
<div class="lg-r"><div class="lg-c1"><div class="lg-p">Calculer $\chi_A = \det(XI_n - A)$</div></div><div class="lg-h lg-dash"><span>comment ?</span></div><div class="lg-c3"><div class="lg-box lg-list">
<a href="#r-chi">taille 2 : $X^2 - \operatorname{tr}(A)X + \det A$</a>
<a href="#r-chi">triangulaire : produit des $(X - a_{i,i})$</a>
<a href="#r-zeros">lignes de même somme : $C_1\leftarrow C_1 + \cdots + C_n$</a>
<a href="#r-zeros">lignes presque égales : $L_i\leftarrow L_i - L_j$</a>
<a href="#r-sanschi">deviner une valeur propre, finir avec la trace</a>
</div></div></div>
<div class="lg-v"></div>
<div class="lg-r"><div class="lg-c1"><div class="lg-d"><span>$\chi_A$ est-il scindé ?</span></div></div><div class="lg-h"><span>non</span></div><div class="lg-c3"><a class="lg-box no" href="#r-crit">Ni diagonalisable ni trigonalisable sur $\mathbb R$ : travailler sur $\mathbb C$</a></div></div>
<div class="lg-v"><span>oui</span></div>
<div class="lg-r"><div class="lg-c1"><div class="lg-d"><span>Racines simples ?<br><small>$n$ valeurs propres distinctes</small></span></div></div><div class="lg-h"><span>oui</span></div><div class="lg-c3"><a class="lg-box ok" href="#r-diag">Diagonalisable, chaque $E_\lambda$ est une droite</a></div></div>
<div class="lg-v"><span>non</span></div>
<div class="lg-r"><div class="lg-c1"><div class="lg-d"><span>$\dim E_\lambda = m_\lambda$ pour chaque $\lambda$ multiple ?</span></div></div><div class="lg-h"><span>oui</span></div><div class="lg-c3"><a class="lg-box ok" href="#r-diag">Diagonalisable : $P$ = vecteurs propres en colonnes, $D$ = valeurs propres</a></div></div>
<div class="lg-v"><span>non</span></div>
<div class="lg-r"><div class="lg-c1"><a class="lg-box tr" href="#r-trig">Pas diagonalisable : trigonaliser.<br>Vecteurs propres, puis $(A - \lambda I_n)e_{k+1} = e_k$</a></div></div>
<div class="lg-v"></div>
<div class="lg-r"><div class="lg-c1"><a class="lg-start" href="#r-appli">Et après : $A^n = PD^nP^{-1}$, suites $X_{k+1} = AX_k$, systèmes $X' = AX$, inverse par Cayley-Hamilton</a></div></div>
</div>
`,
"Équations différentielles linéaires": R`
<nav class="msum"><a href="#e-not">Notations</a><a href="#e-forme">Mettre en forme</a><a href="#e-plan">Le plan</a><a href="#e-o1">Ordre 1 : homogène</a><a href="#e-yp1">Ordre 1 : particulière</a><a href="#e-varc">Variation de la constante</a><a href="#e-raccord">Raccordement</a><a href="#e-o2">Ordre 2 : homogène</a><a href="#e-yp2">Ordre 2 : particulière</a><a href="#e-superpo">Superposition</a><a href="#e-cauchy">Conditions initiales</a><a href="#e-var">Coefficients variables</a><a href="#e-sys">Systèmes $X' = AX$</a><a href="#e-nonlin">Non linéaires</a><a href="#e-enonce">Ce que l'énoncé te donne</a><a href="#e-erreurs">Erreurs</a><a href="#e-entrainement">S'entraîner</a><a href="#e-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la solution de l'équation homogène $\cB{y_H}$. <span class="kR">rouge</span> : la solution particulière $\cR{y_p}$. <span class="kO">orange</span> : le second membre. <span class="kG">vert</span> : les constantes $\cG\lambda, \cG\mu$ et les conditions initiales. <span class="kV">violet</span> : les racines de l'équation caractéristique.</p>

<h2 id="e-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Intervalle, corps</td><td>$I$ intervalle de $\mathbb R$, $\mathbb K = \mathbb R$ ou $\mathbb C$</td><td>On résout toujours <b>sur un intervalle</b>.</td></tr>
<tr><td>Ordre 1</td><td>$(E):\ y' + a(t)\,y = \cO{b(t)}$</td><td>$a, b$ continues sur $I$.</td></tr>
<tr><td>Équation homogène</td><td>$(H):\ y' + a(t)\,y = 0$</td><td>On remplace le second membre par $0$.</td></tr>
<tr><td>Ordre 2</td><td>$(E):\ y'' + a(t)\,y' + b(t)\,y = \cO{c(t)}$</td><td>Coefficient de $y''$ égal à $1$.</td></tr>
<tr><td>Système</td><td>$X' = A(t)\,X + B(t)$</td><td>$X(t)\in\mathcal M_{n,1}(\mathbb K)$.</td></tr>
<tr><td>Ensemble des solutions</td><td>$\mathcal S_E = \cR{y_p} + \mathcal S_H$</td><td>$\dim\mathcal S_H = 1$ (ordre 1), $2$ (ordre 2), $n$ (système).</td></tr>
<tr><td>Wronskien</td><td>$W(t) = \begin{vmatrix}\varphi_1(t)&\varphi_2(t)\\\varphi_1'(t)&\varphi_2'(t)\end{vmatrix}$</td><td>$(\varphi_1, \varphi_2)$ base de $\mathcal S_H\iff W(t_0)\neq0$.</td></tr>
</table>
<div class="sbox">$$\textbf{Cauchy-Lipschitz linéaire}:\ \text{pour tout}\ t_0\in I\ \text{et toute condition}\ \cG{y(t_0) = y_0}\ \big(\text{ordre 2 : et}\ \cG{y'(t_0) = y_1}\big),\ \text{il existe une unique solution sur}\ I.$$</div>
<p><b>Conséquence utile</b> : une solution de $(H)$ qui s'annule en un point (ordre 1), ou qui vérifie $y(t_0) = y'(t_0) = 0$ (ordre 2), est la fonction nulle.</p>

<h2 id="e-forme">2. Mettre l'équation sous la bonne forme</h2>
<ol>
<li>Passer <b>tout ce qui contient $y$</b> à gauche, le reste à droite.</li>
<li>Ranger : $y''$, puis $y'$, puis $y$.</li>
<li>Diviser par le coefficient de la dérivée la plus haute, <b>sur un intervalle où il ne s'annule pas</b>.</li>
</ol>
<p class="ml">Exemple</p>
$$7t^3y - 5y' = 0.$$
<p><b>Étape 1–2.</b> On range : $-5y' + 7t^3y = 0$.</p>
<p><b>Étape 3.</b> On divise par $-5$ (jamais nul) :</p>
$$y' - \frac75t^3\,y = 0,\qquad\text{donc}\qquad a(t) = -\frac75t^3.$$
<p class="ml piege">Piège</p>
<p>Si le coefficient de $y'$ est $t$, $1 + t$, $\sin t$… il s'annule : on résout sur chaque intervalle où il ne s'annule pas, puis on <a href="#e-raccord">raccorde</a>.</p>

<h2 id="e-plan">3. Le plan de résolution (équations linéaires)</h2>
<div class="sbox">$$y = \cB{y_H} + \cR{y_p}$$</div>
<ol>
<li>Résoudre l'équation homogène : $\cB{y_H}$, avec des constantes $\cG\lambda$ (et $\cG\mu$).</li>
<li>Trouver <b>une</b> solution particulière $\cR{y_p}$ de l'équation complète.</li>
<li>Écrire $y = \cB{y_H} + \cR{y_p}$.</li>
<li>Seulement maintenant, utiliser les conditions initiales pour trouver $\cG\lambda, \cG\mu$.</li>
</ol>
<p class="ml piege">Piège</p>
<p>Trouver les constantes à l'étape 1, avant d'ajouter $\cR{y_p}$, donne une solution fausse. Si le second membre est nul, $\cR{y_p} = 0$.</p>

<h2 id="e-o1">4. Ordre 1 : l'équation homogène</h2>
<div class="sbox">$$y' + a(t)\,y = 0\iff y(t) = \cG\lambda\,e^{-A(t)},\qquad A\ \text{une primitive de}\ a\ (\text{sans constante}),\qquad\cG\lambda\in\mathbb K.$$</div>
<p class="ml">Pourquoi (à savoir refaire)</p>
<p>On multiplie par $e^{A(t)}$, qui ne s'annule pas, et on reconnaît une dérivée de produit :</p>
$$y' + a\,y = 0\iff y'e^{A} + a\,e^{A}y = 0\iff\big(y\,e^{A}\big)' = 0\iff y\,e^{A} = \cG\lambda\iff y = \cG\lambda\,e^{-A}.$$
<p class="ml">Exemple 1 : $a$ constant</p>
$$y' + 3y = 0:\qquad a(t) = 3,\qquad A(t) = 3t,\qquad\cB{y_H(t) = \cG\lambda\,e^{-3t}}.$$
<p class="ml">Exemple 2 : $a$ variable (l'équation du §2)</p>
$$a(t) = -\frac75t^3\ \Longrightarrow\ A(t) = -\frac75\cdot\frac{t^4}{4} = -\frac{7}{20}t^4\ \Longrightarrow\ \cB{y_H(t) = \cG\lambda\,e^{\frac{7}{20}t^4}}.$$
<p>Contrôle : $y_H' = \cG\lambda\cdot\frac{7}{20}\cdot4t^3e^{\frac7{20}t^4} = \frac75t^3\,y_H$, donc $y_H' - \frac75t^3y_H = 0\ \checkmark$.</p>

<h2 id="e-yp1">5. Ordre 1 : trouver une solution particulière</h2>
<p class="ml">On regarde le second membre</p>
<table class="mtab">
<tr><th>Second membre $\cO{b(t)}$</th><th>On cherche $\cR{y_p}$ sous la forme</th></tr>
<tr><td>une constante $m$, avec $a\neq0$ constant</td><td>la constante $\dfrac ma$</td></tr>
<tr><td>un polynôme $P$ de degré $d$, $a\neq0$ constant</td><td>un polynôme de degré $d$</td></tr>
<tr><td>$k\,e^{mt}$, avec $m\neq-a$</td><td>$C\,e^{mt}$</td></tr>
<tr><td>$k\,e^{mt}$, avec $m = -a$ (résonance)</td><td>$C\,t\,e^{mt}$</td></tr>
<tr><td>$\cos(\omega t)$ ou $\sin(\omega t)$</td><td>passer en complexe : $e^{i\omega t}$, puis partie réelle ou imaginaire</td></tr>
<tr><td>une solution donnée par l'énoncé</td><td>la <b>vérifier</b> : calculer $y_p' + a\,y_p$</td></tr>
<tr><td>rien de tout ça</td><td><a href="#e-varc">variation de la constante</a></td></tr>
</table>
<p class="ml">Exemple 1 : un polynôme</p>
$$y' + 3y = \cO{4t - 7}.$$
<p><b>Forme.</b> Le second membre est de degré 1 : on cherche $\cR{y_p(t) = \alpha t + \beta}$, donc $y_p'(t) = \alpha$.</p>
<p><b>On remplace dans l'équation.</b></p>
$$y_p' + 3y_p = \alpha + 3(\alpha t + \beta) = 3\alpha\,t + (\alpha + 3\beta).$$
<p><b>On identifie</b> avec $\cO{4t - 7}$ :</p>
$$\left\{\begin{aligned}3\alpha &= 4\\\alpha + 3\beta &= -7\end{aligned}\right.\iff\left\{\begin{aligned}\alpha &= \tfrac43\\3\beta &= -7 - \tfrac43 = -\tfrac{25}3\end{aligned}\right.\iff\left\{\begin{aligned}\alpha &= \tfrac43\\\beta &= -\tfrac{25}9\end{aligned}\right.$$
$$\cR{y_p(t) = \frac43t - \frac{25}9},\qquad y(t) = \cG\lambda\,e^{-3t} + \frac43t - \frac{25}9.$$
<p class="ml">Exemple 2 : une exponentielle en résonance</p>
$$(E):\ y' + y = \cO{e^{-t}}.$$
<p>Ici $a = 1$ et $m = -1 = -a$ : $e^{-t}$ est déjà solution de $(H)$. On cherche donc $\cR{y_p(t) = C\,t\,e^{-t}}$.</p>
$$y_p'(t) = C\,e^{-t} + C\,t\cdot(-e^{-t}) = C\,e^{-t} - C\,t\,e^{-t}.$$
$$y_p' + y_p = C\,e^{-t} - \cancel{C\,t\,e^{-t}} + \cancel{C\,t\,e^{-t}} = C\,e^{-t} = \cO{e^{-t}}\iff C = 1.$$
$$\cR{y_p(t) = t\,e^{-t}},\qquad y(t) = \cG\lambda\,e^{-t} + t\,e^{-t} = (\cG\lambda + t)\,e^{-t}.$$
<p class="ml">Exemple 3 : l'énoncé donne la solution</p>
<p>« Montrer que $u(t) = t\,e^{-t}$ est solution de $(E)$. » On ne pose <b>pas</b> $u' + u = e^{-t}$ : on le calcule.</p>
$$u'(t) = e^{-t} - t\,e^{-t},\qquad u'(t) + u(t) = e^{-t} - t\,e^{-t} + t\,e^{-t} = e^{-t}.\ \checkmark$$
<p class="ml">Exemple 4 : un cosinus</p>
$$y' + y = \cO{2\cos t}.$$
<p>On résout $z' + z = 2e^{it}$, puis $\cR{y_p} = \operatorname{Re}(z_p)$. Comme $i\neq-1$, on cherche $z_p = C\,e^{it}$ :</p>
$$z_p' + z_p = (i + 1)C\,e^{it} = 2e^{it}\iff C = \frac{2}{1 + i} = \frac{2(1 - i)}{(1 + i)(1 - i)} = \frac{2(1 - i)}{2} = 1 - i.$$
$$z_p = (1 - i)(\cos t + i\sin t) = (\cos t + \sin t) + i(\sin t - \cos t)\ \Longrightarrow\ \cR{y_p(t) = \cos t + \sin t}.$$
<p>Contrôle : $y_p' + y_p = (-\sin t + \cos t) + (\cos t + \sin t) = 2\cos t\ \checkmark$.</p>

<h2 id="e-varc">6. La variation de la constante (ordre 1)</h2>
<p>On l'utilise quand le second membre n'est dans aucune case du tableau. Elle marche toujours, mais il faut ensuite calculer une primitive.</p>
<ol>
<li>Résoudre $(H)$ : $\cB{y_H = \cG\lambda\,e^{-A(t)}}$.</li>
<li>Chercher $\cR{y_p(t) = \cG{\lambda(t)}\,e^{-A(t)}}$ : la constante devient une fonction.</li>
<li>Remplacer : les termes en $\lambda(t)$ <b>s'annulent toujours</b>, il reste $\lambda'(t)$.</li>
<li>Prendre une primitive de $\lambda'$ (sans constante : on veut <b>une</b> solution).</li>
</ol>
<p class="ml">Pourquoi il ne reste que $\lambda'$</p>
$$y_p = \lambda e^{-A}\ \Longrightarrow\ y_p' = \lambda'e^{-A} - \lambda\,a\,e^{-A}\ \Longrightarrow\ y_p' + a\,y_p = \lambda'e^{-A} - \cancel{\lambda a e^{-A}} + \cancel{a\lambda e^{-A}} = \lambda'e^{-A}.$$
<div class="sbox">$$y_p' + a\,y_p = \cO b\iff\lambda'(t) = \cO{b(t)}\,e^{A(t)}.$$</div>
<p class="ml">Exemple 1</p>
$$y' - \frac1t\,y = \cO{t^2}\quad\text{sur}\ I = \left]0, +\infty\right[.$$
<p><b>1.</b> $a(t) = -\frac1t$, $A(t) = -\ln t$, donc $e^{-A(t)} = e^{\ln t} = t$ et $\cB{y_H(t) = \cG\lambda\,t}$.</p>
<p><b>2–3.</b> On pose $y_p = \lambda(t)\,t$ : $y_p' = \lambda'(t)\,t + \lambda(t)$.</p>
$$y_p' - \frac1ty_p = \lambda'(t)\,t + \cancel{\lambda(t)} - \cancel{\lambda(t)} = \lambda'(t)\,t = t^2\iff\lambda'(t) = t.$$
<p><b>4.</b> $\lambda(t) = \frac{t^2}2$, d'où $\cR{y_p(t) = \frac{t^3}2}$ et $y(t) = \cG\lambda\,t + \frac{t^3}{2}$.</p>
<p>Contrôle : $y_p' - \frac1ty_p = \frac{3t^2}2 - \frac{t^2}2 = t^2\ \checkmark$.</p>
<p class="ml">Exemple 2 : le second membre n'est pas « classique »</p>
$$y' + y = \cO{\frac{1}{1 + e^t}}\quad\text{sur}\ \mathbb R.$$
<p><b>1.</b> $\cB{y_H(t) = \cG\lambda\,e^{-t}}$.</p>
<p><b>2–3.</b> $y_p = \lambda(t)\,e^{-t}$, donc $\lambda'(t) = \cO b(t)\,e^{A(t)} = \dfrac{e^t}{1 + e^t}$.</p>
<p><b>4.</b> On reconnaît $\frac{u'}{u}$ avec $u = 1 + e^t > 0$ : $\lambda(t) = \ln(1 + e^t)$.</p>
$$\cR{y_p(t) = e^{-t}\ln(1 + e^t)},\qquad y(t) = \big(\cG\lambda + \ln(1 + e^t)\big)\,e^{-t}.$$
<p>Contrôle : $y_p' = -e^{-t}\ln(1 + e^t) + e^{-t}\dfrac{e^t}{1 + e^t}$, donc $y_p' + y_p = \dfrac{1}{1 + e^t}\ \checkmark$.</p>

<h2 id="e-raccord">7. Le raccordement (coefficient de $y'$ qui s'annule)</h2>
<ol>
<li>Résoudre sur chaque intervalle où le coefficient de $y'$ ne s'annule pas : <b>une constante par intervalle</b>.</li>
<li>Au point de jonction $t_0$, imposer : $y$ continue (limites à gauche et à droite égales), $y$ dérivable (taux d'accroissement), et l'équation vraie en $t_0$.</li>
<li>Conclure : la dimension de l'ensemble des solutions sur $\mathbb R$ peut être $0$, $1$ ou $2$.</li>
</ol>
<p class="ml">Exemple : $t\,y' - 2y = 0$ sur $\mathbb R$</p>
<p><b>1. Sur $\left]0, +\infty\right[$</b> : on divise par $t$, $y' - \frac2t\,y = 0$, $a(t) = -\frac2t$, $A(t) = -2\ln t$ :</p>
$$y(t) = \cG{\lambda_1}\,e^{2\ln t} = \cG{\lambda_1}\,t^2.$$
<p><b>Sur $\left]-\infty, 0\right[$</b> : $A(t) = -2\ln|t|$, donc $y(t) = \cG{\lambda_2}\,e^{2\ln|t|} = \cG{\lambda_2}\,t^2$.</p>
<p><b>2. En $0$.</b> L'équation en $t = 0$ donne $0\cdot y'(0) - 2y(0) = 0$, donc $y(0) = 0$.</p>
$$\left\{\begin{aligned}\text{continuité}&:\ \lim_{t\to0^+}\cG{\lambda_1}t^2 = 0 = \lim_{t\to0^-}\cG{\lambda_2}t^2 = y(0)\ \checkmark\\\text{dérivabilité}&:\ \frac{y(t) - y(0)}{t - 0} = \left\{\begin{aligned}&\cG{\lambda_1}t\ (t > 0)\\&\cG{\lambda_2}t\ (t\lt0)\end{aligned}\right.\ \xrightarrow[t\to0]{}\ 0\ \checkmark\end{aligned}\right.$$
<p><b>3.</b> Les solutions sur $\mathbb R$ sont toutes les fonctions $t\mapsto\cG{\lambda_1}t^2$ pour $t\geqslant0$ et $\cG{\lambda_2}t^2$ pour $t\lt0$, avec $\cG{\lambda_1}, \cG{\lambda_2}$ <b>indépendants</b> : un espace de dimension $2$, alors que l'ordre est 1.</p>
<p class="ml">Contre-exemple : $t\,y' + y = 0$</p>
<p>Sur chaque demi-droite, $y = \frac{\cG\lambda}{t}$. Cette fonction n'a une limite finie en $0$ que si $\cG\lambda = 0$ : la seule solution sur $\mathbb R$ est la fonction nulle.</p>

<h2 id="e-o2">8. Ordre 2 à coefficients constants : l'équation homogène</h2>
<p>$(H):\ y'' + a\,y' + b\,y = 0$ avec $a, b$ <b>constants</b>. On remplace $y''$ par $r^2$, $y'$ par $r$, $y$ par $1$ :</p>
<div class="sbox">$$\text{équation caractéristique}:\quad r^2 + a\,r + b = 0,\qquad\Delta = a^2 - 4b.$$</div>
<table class="mtab">
<tr><th>Cas</th><th>Racines</th><th>Solutions réelles $\cB{y_H}$</th></tr>
<tr><td>$\Delta > 0$</td><td>$\cV{r_1}\neq\cV{r_2}$ réelles</td><td>$\cG\lambda\,e^{\cV{r_1}t} + \cG\mu\,e^{\cV{r_2}t}$</td></tr>
<tr><td>$\Delta = 0$</td><td>$\cV{r_0}$ double</td><td>$(\cG\lambda + \cG\mu\,t)\,e^{\cV{r_0}t}$</td></tr>
<tr><td>$\Delta\lt0$</td><td>$\cV{\alpha\pm i\beta}$</td><td>$e^{\cV\alpha t}\big(\cG\lambda\cos(\cV\beta t) + \cG\mu\sin(\cV\beta t)\big)$</td></tr>
</table>
<p>Sur $\mathbb C$, si $\Delta\neq0$ : $\cB{y_H} = \cG\lambda\,e^{\cV{r_1}t} + \cG\mu\,e^{\cV{r_2}t}$ avec $\cG\lambda, \cG\mu\in\mathbb C$, même quand les racines sont complexes.</p>
<p class="ml">Exemple 1 : $\Delta > 0$</p>
$$y'' - 10y' + 21y = 0:\qquad r^2 - 10r + 21 = 0,\qquad\Delta = (-10)^2 - 4\times21 = 100 - 84 = 16 = 4^2.$$
$$r = \frac{10\pm4}{2}\ \Longrightarrow\ \cV{r_1 = 3},\quad\cV{r_2 = 7},\qquad\cB{y_H(t) = \cG\lambda\,e^{3t} + \cG\mu\,e^{7t}}.$$
<p class="ml">Exemple 2 : $\Delta = 0$</p>
$$y'' - 10y' + 25y = 0:\qquad\Delta = 100 - 100 = 0,\qquad\cV{r_0} = \frac{10}{2} = \cV5,\qquad\cB{y_H(t) = (\cG\lambda + \cG\mu\,t)\,e^{5t}}.$$
<p>On reconnaît aussi $r^2 - 10r + 25 = (r - 5)^2$.</p>
<p class="ml">Exemple 3 : $\Delta\lt0$</p>
$$y'' - 6y' + 73y = 0:\qquad\Delta = 36 - 292 = -256 = (16i)^2.$$
$$r = \frac{6\pm16i}{2} = \cV{3\pm8i}\ \Longrightarrow\ \cV{\alpha = 3},\ \cV{\beta = 8},\qquad\cB{y_H(t) = e^{3t}\big(\cG\lambda\cos(8t) + \cG\mu\sin(8t)\big)}.$$
<p class="ml piege">Piège</p>
<p>La partie réelle $\cV\alpha$ va dans l'exponentielle, la partie imaginaire $\cV\beta$ dans le cosinus et le sinus. Pour $y'' + \omega^2y = 0$ : $r = \pm i\omega$, donc $\cB{y_H} = \cG\lambda\cos(\omega t) + \cG\mu\sin(\omega t)$.</p>

<h2 id="e-yp2">9. Ordre 2 : trouver une solution particulière</h2>
<div class="sbox">$$\cO{c(t) = P(t)\,e^{mt}}\ \Longrightarrow\ \cR{y_p(t) = t^{s}\,Q(t)\,e^{mt}},\quad\deg Q = \deg P,\quad s = \left\{\begin{aligned}0&\ \text{si}\ m\ \text{n'est pas racine}\\1&\ \text{si}\ m\ \text{est racine simple}\\2&\ \text{si}\ m\ \text{est racine double}\end{aligned}\right.$$</div>
<ul>
<li>Un polynôme seul : c'est le cas $m = 0$ ($e^{0t} = 1$).</li>
<li>$\cos(\omega t)$ ou $\sin(\omega t)$ : on résout avec $e^{i\omega t}$ (cas $m = i\omega$), puis on prend la partie réelle ou imaginaire.</li>
<li>Une somme : on traite chaque morceau séparément (<a href="#e-superpo">superposition</a>).</li>
</ul>
<p class="ml">Exemple 1 : un polynôme (le calcul complet)</p>
$$y'' - 5y' + 6y = \cO{t^2 - 3t + 2}.$$
<p><b>Racines.</b> $r^2 - 5r + 6 = (r - 2)(r - 3)$ : $\cV2$ et $\cV3$. Ici $m = 0$ n'est pas racine, donc $s = 0$ et $Q$ de degré 2 :</p>
$$\cR{y_p = \alpha t^2 + \beta t + \gamma},\qquad y_p' = 2\alpha t + \beta,\qquad y_p'' = 2\alpha.$$
<p><b>On remplace</b> et on range par puissances de $t$ :</p>
$$y_p'' - 5y_p' + 6y_p = 2\alpha - 5(2\alpha t + \beta) + 6(\alpha t^2 + \beta t + \gamma) = 6\alpha\,t^2 + (-10\alpha + 6\beta)\,t + (2\alpha - 5\beta + 6\gamma).$$
<p><b>On identifie</b> avec $t^2 - 3t + 2$ et on résout de haut en bas :</p>
$$\left\{\begin{aligned}6\alpha &= 1\\-10\alpha + 6\beta &= -3\\2\alpha - 5\beta + 6\gamma &= 2\end{aligned}\right.\iff\left\{\begin{aligned}\alpha &= \tfrac16\\6\beta &= -3 + \tfrac{10}6 = -\tfrac43\\6\gamma &= 2 - \tfrac13 - \tfrac{10}9 = \tfrac59\end{aligned}\right.\iff\left\{\begin{aligned}\alpha &= \tfrac16\\\beta &= -\tfrac29\\\gamma &= \tfrac5{54}\end{aligned}\right.$$
$$\cR{y_p(t) = \frac16t^2 - \frac29t + \frac5{54}},\qquad y(t) = \cG\lambda\,e^{2t} + \cG\mu\,e^{3t} + \frac16t^2 - \frac29t + \frac5{54}.$$
<p class="ml">Exemple 2 : une exponentielle en résonance</p>
$$y'' - 3y' + 2y = \cO{e^t}.$$
<p><b>Racines.</b> $r^2 - 3r + 2 = (r - 1)(r - 2)$ : $\cV1$ et $\cV2$. Ici $m = 1$ est racine <b>simple</b> : $s = 1$.</p>
$$\cR{y_p = C\,t\,e^t},\qquad y_p' = C(1 + t)\,e^t,\qquad y_p'' = C(2 + t)\,e^t.$$
$$y_p'' - 3y_p' + 2y_p = C\big[(2 + t) - 3(1 + t) + 2t\big]e^t = C\big[2 - 3 + (1 - 3 + 2)\,t\big]e^t = -C\,e^t.$$
$$-C\,e^t = \cO{e^t}\iff C = -1,\qquad\cR{y_p(t) = -t\,e^t}.$$
<p class="ml">Exemple 3 : un cosinus sans résonance</p>
$$y'' + 3y' + 2y = \cO{10\cos t}.$$
<p>On résout $z'' + 3z' + 2z = 10e^{it}$. Les racines sont $\cV{-1}$ et $\cV{-2}$, et $i$ n'en est pas une : $z_p = C\,e^{it}$, $z_p' = iC\,e^{it}$, $z_p'' = -C\,e^{it}$.</p>
$$z_p'' + 3z_p' + 2z_p = (-1 + 3i + 2)\,C\,e^{it} = (1 + 3i)\,C\,e^{it} = 10e^{it}\iff C = \frac{10}{1 + 3i} = \frac{10(1 - 3i)}{1 + 9} = 1 - 3i.$$
$$z_p = (1 - 3i)(\cos t + i\sin t) = (\cos t + 3\sin t) + i(\sin t - 3\cos t)\ \Longrightarrow\ \cR{y_p(t) = \operatorname{Re}(z_p) = \cos t + 3\sin t}.$$
<p>Contrôle : $y_p' = -\sin t + 3\cos t$ et $y_p'' = -\cos t - 3\sin t$, donc :</p>
$$y_p'' + 3y_p' + 2y_p = (-1 + 9 + 2)\cos t + (-3 - 3 + 6)\sin t = 10\cos t.\ \checkmark$$
<p class="ml">Exemple 4 : un cosinus en résonance</p>
$$y'' + y = \cO{\cos t}.$$
<p>Les racines sont $\cV{\pm i}$, et $i$ est racine <b>simple</b> : on cherche $z_p = C\,t\,e^{it}$ pour $z'' + z = e^{it}$.</p>
$$z_p' = C(1 + it)\,e^{it},\qquad z_p'' = C\big(i + i(1 + it)\big)e^{it} = C(2i - t)\,e^{it}.$$
$$z_p'' + z_p = C(2i - t + t)\,e^{it} = 2iC\,e^{it} = e^{it}\iff C = \frac1{2i} = -\frac i2.$$
$$z_p = -\frac i2\,t(\cos t + i\sin t) = \frac t2\sin t - i\,\frac t2\cos t\ \Longrightarrow\ \cR{y_p(t) = \frac t2\sin t}.$$

<h2 id="e-superpo">10. Le principe de superposition</h2>
<div class="sbox">$$\left.\begin{aligned}\cR{y_1}\ \text{solution avec}\ \cO{b_1}\\\cR{y_2}\ \text{solution avec}\ \cO{b_2}\end{aligned}\right\}\ \Longrightarrow\ \cR{y_1 + y_2}\ \text{solution avec}\ \cO{b_1 + b_2}.$$</div>
<p class="ml">Exemple</p>
$$y' + y = \cO{t} + \cO{e^{2t}}.$$
<p><b>Morceau 1</b> : $y' + y = t$. On cherche $y_1 = \alpha t + \beta$ : $\alpha + \alpha t + \beta = t$, donc $\alpha = 1$ et $\alpha + \beta = 0$, soit $\cR{y_1 = t - 1}$.</p>
<p><b>Morceau 2</b> : $y' + y = e^{2t}$. Comme $2\neq-1$, on cherche $y_2 = C\,e^{2t}$ : $2C + C = 1$, donc $\cR{y_2 = \frac13e^{2t}}$.</p>
$$\cR{y_p(t) = t - 1 + \frac13e^{2t}},\qquad y(t) = \cG\lambda\,e^{-t} + t - 1 + \frac13e^{2t}.$$

<h2 id="e-cauchy">11. Les conditions initiales (problème de Cauchy)</h2>
<p class="ml">Ordre 1 : une condition, une constante</p>
<p>$(E):\ y' + y = e^{-t}$ avec $\cG{y(0) = 2}$. D'après le §5, $y(t) = (\cG\lambda + t)\,e^{-t}$. En $t = 0$ :</p>
$$y(0) = (\cG\lambda + 0)\,e^0 = \cG\lambda = \cG2\qquad\Longrightarrow\qquad y(t) = (2 + t)\,e^{-t}.$$
<p class="ml">Ordre 2 : deux conditions, un système</p>
$$y'' - 3y' + 2y = e^t,\qquad\cG{y(0) = 0},\qquad\cG{y'(0) = 0}.$$
<p><b>1.</b> D'après le §9 : $y(t) = \cG\lambda\,e^t + \cG\mu\,e^{2t} - t\,e^t$.</p>
<p><b>2.</b> On dérive : $y'(t) = \cG\lambda\,e^t + 2\cG\mu\,e^{2t} - (1 + t)\,e^t$.</p>
<p><b>3.</b> On écrit les conditions en $t = 0$ :</p>
$$\left\{\begin{aligned}y(0) &= \cG\lambda + \cG\mu - 0 = 0\\y'(0) &= \cG\lambda + 2\cG\mu - 1 = 0\end{aligned}\right.\ \underset{\cO{L_2\leftarrow L_2 - L_1}}{\iff}\ \left\{\begin{aligned}\cG\lambda + \cG\mu &= 0\\\cG\mu &= 1\end{aligned}\right.\iff\left\{\begin{aligned}\cG\lambda &= -1\\\cG\mu &= 1\end{aligned}\right.$$
$$y(t) = -e^t + e^{2t} - t\,e^t.$$
<p>Contrôle : $y(0) = -1 + 1 - 0 = 0$ et $y'(0) = -1 + 2 - 1 = 0\ \checkmark$.</p>

<h2 id="e-var">12. Ordre 2 à coefficients variables</h2>
<p>$(H):\ y'' + a(t)\,y' + b(t)\,y = 0$. Plus de formule toute faite : $\mathcal S_H$ est de dimension $2$, il faut <b>trouver deux solutions indépendantes</b>.</p>
<p class="ml">Le wronskien</p>
<div class="sbox">$$W(t) = \varphi_1(t)\,\varphi_2'(t) - \varphi_1'(t)\,\varphi_2(t),\qquad(\varphi_1, \varphi_2)\ \text{base de}\ \mathcal S_H\iff W(t_0)\neq0\ \text{pour un}\ t_0\iff W\ \text{ne s'annule pas}.$$</div>
<p>À savoir redémontrer : $W' = \varphi_1\varphi_2'' - \varphi_1''\varphi_2 = \varphi_1(-a\varphi_2' - b\varphi_2) - (-a\varphi_1' - b\varphi_1)\varphi_2 = -a\,W$, donc $W(t) = W(t_0)\,e^{-\int_{t_0}^ta}$.</p>
<p class="ml">Méthode 1 : chercher une solution évidente</p>
<p>Essayer $t^k$ (polynômes), $e^{rt}$, ou une série entière $\sum a_nt^n$.</p>
$$(H):\ t^2y'' - 2t\,y' + 2y = 0\ \text{sur}\ \left]0, +\infty\right[.\qquad\text{Avec}\ y = t^k:\ t^2k(k - 1)t^{k-2} - 2t\,k\,t^{k-1} + 2t^k = (k^2 - 3k + 2)\,t^k.$$
$$k^2 - 3k + 2 = (k - 1)(k - 2) = 0\iff k = 1\ \text{ou}\ k = 2:\qquad\varphi_1(t) = t,\qquad\varphi_2(t) = t^2.$$
$$W(t) = \begin{vmatrix}t&t^2\\1&2t\end{vmatrix} = 2t^2 - t^2 = t^2\neq0\ \Longrightarrow\ \cB{y_H(t) = \cG\lambda\,t + \cG\mu\,t^2}.$$
<p class="ml">Méthode 2 : on connaît une solution $\varphi_1$ qui ne s'annule pas, on pose $y = \varphi_1z$</p>
<p>Même équation, avec $\varphi_1 = t$ seulement. On pose $y = t\,z$ : $y' = z + t\,z'$ et $y'' = 2z' + t\,z''$.</p>
$$t^2(2z' + t\,z'') - 2t(z + t\,z') + 2t\,z = t^3z'' + \cancel{2t^2z'} - \cancel{2tz} - \cancel{2t^2z'} + \cancel{2tz} = t^3z''.$$
<p>Donc $z'' = 0$, $z = \cG\lambda + \cG\mu\,t$ et $y = t\,z = \cG\lambda\,t + \cG\mu\,t^2$ : on retrouve le résultat. En général, on obtient une équation d'ordre 1 en $z'$.</p>
<p class="ml">Méthode 3 : une série entière</p>
<p>$(H):\ t\,y'' + 2y' + t\,y = 0$. On cherche $y = \sum_{n\geqslant0}a_nt^n$ et on écrit chaque terme avec $t^{n-1}$ :</p>
$$t\,y'' = \sum_{n\geqslant2}n(n - 1)\,a_nt^{n-1},\qquad2y' = \sum_{n\geqslant1}2n\,a_nt^{n-1},\qquad t\,y = \sum_{n\geqslant0}a_nt^{n+1} = \sum_{n\geqslant2}a_{n-2}\,t^{n-1}.$$
$$t\,y'' + 2y' + t\,y = 2a_1 + \sum_{n\geqslant2}\big(n(n + 1)\,a_n + a_{n-2}\big)\,t^{n-1} = 0.$$
<p>Par unicité des coefficients : $a_1 = 0$ et $a_n = -\dfrac{a_{n-2}}{n(n + 1)}$. Les impairs sont nuls, et pour les pairs :</p>
$$a_2 = -\frac{a_0}{3!},\quad a_4 = -\frac{a_2}{4\times5} = \frac{a_0}{5!},\quad\dots,\quad a_{2p} = \frac{(-1)^p}{(2p + 1)!}a_0\ \Longrightarrow\ y(t) = a_0\sum_{p\geqslant0}\frac{(-1)^pt^{2p}}{(2p + 1)!} = a_0\,\frac{\sin t}{t}.$$
<p>Le rayon est $+\infty$ (règle de d'Alembert : $\left|\frac{a_{2p+2}}{a_{2p}}\right| = \frac1{(2p + 2)(2p + 3)}\to0$). On trouve ensuite une deuxième solution avec la méthode 2.</p>
<p class="ml">Méthode 4 : la variation des constantes (second membre)</p>
<p>$(\varphi_1, \varphi_2)$ base de $\mathcal S_H$. On cherche $y = \lambda(t)\varphi_1 + \mu(t)\varphi_2$ avec :</p>
<div class="sbox">$$\left\{\begin{aligned}\lambda'\varphi_1 + \mu'\varphi_2 &= 0\\\lambda'\varphi_1' + \mu'\varphi_2' &= \cO{c(t)}\end{aligned}\right.\iff\lambda' = -\frac{\varphi_2\,\cO c}{W},\qquad\mu' = \frac{\varphi_1\,\cO c}{W}\quad(\text{Cramer}).$$</div>
$$y'' + y = \cO{\frac1{\cos t}}\ \text{sur}\ \left]-\tfrac\pi2, \tfrac\pi2\right[:\qquad\varphi_1 = \cos,\quad\varphi_2 = \sin,\quad W = \cos^2t + \sin^2t = 1.$$
$$\lambda'(t) = -\sin t\cdot\frac1{\cos t} = -\tan t\ \Longrightarrow\ \lambda(t) = \ln(\cos t),\qquad\mu'(t) = \cos t\cdot\frac1{\cos t} = 1\ \Longrightarrow\ \mu(t) = t.$$
$$\cR{y_p(t) = \cos t\,\ln(\cos t) + t\sin t}.$$

<h2 id="e-sys">13. Les systèmes $X' = AX$ ($A$ constante)</h2>
<div class="sbox">$$X' = AX,\ X(0) = X_0\iff X(t) = e^{tA}X_0.\qquad A = PDP^{-1}\ \Longrightarrow\ \text{on pose}\ Y = P^{-1}X:\ Y' = DY.$$</div>
<ol>
<li><a href="#c-maths-mp-1">Diagonaliser</a> $A$ : valeurs propres $\cV{\lambda_i}$, vecteurs propres $V_i$.</li>
<li>$Y' = DY$ se découple : $y_i' = \cV{\lambda_i}y_i$, donc $y_i = \cG{c_i}\,e^{\cV{\lambda_i}t}$.</li>
<li>$X = PY = \sum_i\cG{c_i}\,e^{\cV{\lambda_i}t}\,V_i$.</li>
</ol>
<p class="ml">Exemple : $A = \begin{pmatrix}1&2\\2&1\end{pmatrix}$, $X(0) = \begin{pmatrix}2\\0\end{pmatrix}$</p>
<p><b>1.</b> $\chi_A = X^2 - 2X - 3 = (X - 3)(X + 1)$ : $\operatorname{Sp}(A) = \{\cV3, \cV{-1}\}$. On résout les deux systèmes :</p>
$$A - 3I_2 = \begin{pmatrix}-2&2\\2&-2\end{pmatrix}\iff\left\{\begin{aligned}-2x + 2y &= 0\\2x - 2y &= 0\end{aligned}\right.\iff y = x:\ V_1 = \begin{pmatrix}1\\1\end{pmatrix}.$$
$$A + I_2 = \begin{pmatrix}2&2\\2&2\end{pmatrix}\iff\left\{\begin{aligned}2x + 2y &= 0\\2x + 2y &= 0\end{aligned}\right.\iff y = -x:\ V_2 = \begin{pmatrix}1\\-1\end{pmatrix}.$$
<p><b>2–3.</b></p>
$$X(t) = \cG{c_1}\,e^{3t}\begin{pmatrix}1\\1\end{pmatrix} + \cG{c_2}\,e^{-t}\begin{pmatrix}1\\-1\end{pmatrix}.$$
<p><b>Condition initiale.</b></p>
$$X(0) = \begin{pmatrix}\cG{c_1} + \cG{c_2}\\\cG{c_1} - \cG{c_2}\end{pmatrix} = \begin{pmatrix}2\\0\end{pmatrix}\iff\left\{\begin{aligned}\cG{c_1} + \cG{c_2} &= 2\\\cG{c_1} - \cG{c_2} &= 0\end{aligned}\right.\iff\cG{c_1} = \cG{c_2} = 1,\qquad X(t) = \begin{pmatrix}e^{3t} + e^{-t}\\e^{3t} - e^{-t}\end{pmatrix}.$$
<p>Contrôle : $x' = 3e^{3t} - e^{-t}$ et $x + 2y = e^{3t} + e^{-t} + 2e^{3t} - 2e^{-t} = 3e^{3t} - e^{-t}\ \checkmark$.</p>
<p class="ml">$A$ triangulaire (non diagonalisable) : on résout de bas en haut</p>
$$\left\{\begin{aligned}x' &= 2x + y\\y' &= 2y\end{aligned}\right.\qquad\Longrightarrow\qquad y = \cG{c_2}\,e^{2t},\qquad x' - 2x = \cG{c_2}\,e^{2t}.$$
<p>Ordre 1 en résonance ($m = 2 = -a$) : $x_p = C\,t\,e^{2t}$, $x_p' - 2x_p = C\,e^{2t}$, donc $C = \cG{c_2}$ et $x = (\cG{c_1} + \cG{c_2}\,t)\,e^{2t}$.</p>
<p class="ml">Une équation d'ordre 2 est un système</p>
$$y'' + a\,y' + b\,y = 0\iff X' = \begin{pmatrix}0&1\\-b&-a\end{pmatrix}X\quad\text{avec}\quad X = \begin{pmatrix}y\\y'\end{pmatrix}.$$

<h2 id="e-nonlin">14. Les équations non linéaires</h2>
<p class="ml">Changement de fonction inconnue</p>
<p>Le terme gênant ($\sqrt y$, $y^2$, $\frac1y$…) indique souvent quoi poser. On cherche l'équation <b>linéaire</b> vérifiée par la nouvelle fonction, en raisonnant par équivalence.</p>
$$(E):\ y' + 2y - (t + 1)\sqrt y = 0,\qquad y > 0\ \text{sur}\ I.\qquad\text{On pose}\ z = \sqrt y,\ \text{donc}\ y = z^2,\ y' = 2z\,z'.$$
<p>On divise $(E)$ par $\sqrt y = z > 0$ :</p>
$$\frac{2z\,z'}{z} + \frac{2z^2}{z} - (t + 1) = 0\iff2z' + 2z = t + 1\iff z' + z = \cO{\frac{t + 1}2}.$$
<p><b>Homogène</b> : $\cB{z_H} = \cG\lambda\,e^{-t}$. <b>Particulière</b> : $z_p = \alpha t + \beta$ donne $\alpha + \alpha t + \beta = \frac t2 + \frac12$, donc $\alpha = \frac12$ et $\beta = 0$.</p>
$$z(t) = \cG\lambda\,e^{-t} + \frac t2\qquad\Longrightarrow\qquad y(t) = \Big(\cG\lambda\,e^{-t} + \frac t2\Big)^2\quad\text{sur un intervalle où}\ z > 0.$$
<p class="ml">Variables séparées</p>
<p>Quand l'équation s'écrit $f(y)\,y' = g(t)$, on intègre de chaque côté. On met <b>une seule</b> constante, et on ne passe pas par homogène plus particulière.</p>
$$y' = 1 + y^2\iff\frac{y'}{1 + y^2} = 1\iff\big(\arctan y\big)' = 1\iff\arctan y = t + \cG C\iff y(t) = \tan(t + \cG C),$$
<p>sur un intervalle où $t + \cG C\in\left]-\frac\pi2, \frac\pi2\right[$.</p>

<h2 id="e-enonce">15. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Montrer que $u$ est solution »</b><span>Calculer $u'$ (et $u''$), remplacer, et retrouver le second membre. Ne jamais partir de l'égalité.</span></div>
<div><b>Une solution particulière $u$ donnée</b><span>$y$ solution de $(E)\iff y - u$ solution de $(H)$, donc $\mathcal S_E = u + \mathcal S_H$.</span></div>
<div><b>« LA solution telle que $y(t_0) = \dots$ »</b><span>Cauchy-Lipschitz : une seule. Constantes en dernier, après $y_H + y_p$.</span></div>
<div><b>« Résoudre sur $\mathbb R$ », coefficient de $y'$ en $t$</b><span>Résoudre sur $\left]-\infty, 0\right[$ et $\left]0, +\infty\right[$, puis raccorder en $0$.</span></div>
<div><b>Second membre en $\cos$, $\sin$</b><span>Passer en complexe avec $e^{i\omega t}$, puis $\operatorname{Re}$ ou $\operatorname{Im}$.</span></div>
<div><b>Second membre somme</b><span>Superposition : une solution particulière par morceau.</span></div>
<div><b>$m$ racine de l'équation caractéristique</b><span>Résonance : multiplier par $t$ (simple) ou $t^2$ (double).</span></div>
<div><b>« On pose $z = \dots$ »</b><span>Exprimer $y, y'$ avec $z, z'$, obtenir une équation linéaire en $z$, la résoudre, revenir à $y$.</span></div>
<div><b>« Chercher les solutions polynomiales »</b><span>Degré $d$ : regarder le terme de plus haut degré pour trouver $d$, puis identifier.</span></div>
<div><b>« Solutions développables en série entière »</b><span>Remplacer $\sum a_nt^n$, réindexer, récurrence sur $a_n$, puis le rayon.</span></div>
<div><b>Une solution $\varphi_1$ connue (ordre 2)</b><span>Poser $y = \varphi_1z$ : équation d'ordre 1 en $z'$.</span></div>
<div><b>Deux solutions $\varphi_1, \varphi_2$</b><span>Base de $\mathcal S_H$ si $W(t_0)\neq0$. Second membre : variation des constantes.</span></div>
<div><b>$X' = AX$, $A$ diagonalisable</b><span>$X = \sum c_i\,e^{\lambda_it}V_i$. Valeurs propres négatives : $X(t)\to0$.</span></div>
<div><b>« Solutions bornées », « limite en $+\infty$ »</b><span>Écrire la solution générale, puis annuler les constantes devant les termes qui explosent.</span></div>
</div>

<h2 id="e-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Déterminer $\lambda$ avec $y(0)$ sur $y_H$ seule, avant d'ajouter $y_p$.</p>
<p><b>2.</b> Oublier de diviser par le coefficient de $y'$ avant de lire $a(t)$.</p>
<p><b>3.</b> $y = \lambda e^{A}$ au lieu de $\lambda e^{-A}$ pour $y' + ay = 0$.</p>
<p><b>4.</b> Inverser $\alpha$ et $\beta$ : $e^{\beta t}\cos(\alpha t)$ au lieu de $e^{\alpha t}\cos(\beta t)$.</p>
<p><b>5.</b> Chercher $C\,e^{mt}$ alors que $m$ est racine : on trouve $0 = e^{mt}$, il fallait multiplier par $t$.</p>
<p><b>6.</b> Pour $\cos t$ au second membre, chercher $C\cos t$ seulement : il faut $\alpha\cos t + \beta\sin t$.</p>
<p><b>7.</b> Diviser par $t$ sur $\mathbb R$ tout entier sans découper en intervalles.</p>
<p><b>8.</b> Mettre une constante de chaque côté dans les variables séparées.</p>
<p><b>9.</b> Une seule constante pour une équation d'ordre 2 : il en faut deux, donc deux conditions.</p>
<p><b>10.</b> Écrire $u' + u = e^{-t}$ dès la première ligne quand on doit le <b>montrer</b>.</p>
</div>

<h2 id="e-entrainement">S'entraîner</h2>
<div data-mlab="edo1"></div>
<div data-mlab="edo2"></div>
<div data-mlab="quizedo"></div>

<h2 id="e-arbre">L'arbre des équations différentielles</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une équation différentielle</span><ul>
<li><div class="hr"><em>linéaire, ordre 1</em><span class="hq">Coefficient de $y'$ qui s'annule sur $I$ ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl" href="#e-raccord">résoudre par morceaux, puis raccorder</a></div></li>
<li><div class="hr"><em>non</em><span class="hq">Second membre ?</span><ul>
<li><div class="hr"><em>nul</em><a class="hl ok" href="#e-o1">$y = \lambda e^{-A(t)}$</a></div></li>
<li><div class="hr"><em>constante, polynôme, $e^{mt}$, $\cos$</em><a class="hl" href="#e-yp1">tableau, résonance si $m = -a$</a></div></li>
<li><div class="hr"><em>autre</em><a class="hl" href="#e-varc">variation de la constante</a></div></li>
</ul></div></li>
</ul></div></li>
<li><div class="hr"><em>linéaire, ordre 2</em><span class="hq">Coefficients constants ?</span><ul>
<li><div class="hr"><em>oui</em><span class="hq">Signe de $\Delta$</span><ul>
<li><div class="hr"><em>$\Delta > 0$</em><a class="hl ok" href="#e-o2">$\lambda e^{r_1t} + \mu e^{r_2t}$</a></div></li>
<li><div class="hr"><em>$\Delta = 0$</em><a class="hl ok" href="#e-o2">$(\lambda + \mu t)e^{r_0t}$</a></div></li>
<li><div class="hr"><em>$\Delta\lt0$</em><a class="hl ok" href="#e-o2">$e^{\alpha t}(\lambda\cos\beta t + \mu\sin\beta t)$</a></div></li>
<li><div class="hr"><em>second membre</em><a class="hl" href="#e-yp2">$t^sQ(t)e^{mt}$, $s$ = multiplicité de $m$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>non</em><span class="hq">Une solution connue ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl" href="#e-var">poser $y = \varphi_1z$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#e-var">chercher $t^k$, $e^{rt}$, série entière</a></div></li>
<li><div class="hr"><em>second membre</em><a class="hl" href="#e-var">variation des constantes, wronskien</a></div></li>
</ul></div></li>
</ul></div></li>
<li><div class="hr"><em>système</em><span class="hq">$A$ diagonalisable ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#e-sys">$X = \sum c_ie^{\lambda_it}V_i$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#e-sys">trigonaliser, résoudre de bas en haut</a></div></li>
</ul></div></li>
<li><div class="hr"><em>non linéaire</em><span class="hq">Forme $f(y)\,y' = g(t)$ ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl" href="#e-nonlin">séparer les variables, une constante</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#e-nonlin">poser $z = \sqrt y$, $y^2$, $\frac1y$… pour linéariser</a></div></li>
</ul></div></li>
<li><div class="hr"><em>conditions données</em><a class="hl end" href="#e-cauchy">à la fin : $y_H + y_p$, puis les constantes</a></div></li>
</ul></div></div>
`,
"Calcul algébrique": R`
<nav class="msum"><a href="#a-not">Notations</a><a href="#a-lin">Règles de calcul</a><a href="#a-chg">Changer d'indice</a><a href="#a-usu">Sommes usuelles</a><a href="#a-geo">Géométrique</a><a href="#a-tele">Télescopage</a><a href="#a-prod">Produits</a><a href="#a-binom">Coefficients binomiaux</a><a href="#a-newton">Binôme de Newton</a><a href="#a-bern">$a^n - b^n$</a><a href="#a-doubles">Sommes doubles</a><a href="#a-ineg">Inégalités</a><a href="#a-enonce">Ce que l'énoncé te donne</a><a href="#a-erreurs">Erreurs</a><a href="#a-entrainement">S'entraîner</a><a href="#a-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : l'indice et les bornes. <span class="kO">orange</span> : l'opération qu'on fait (changement d'indice, factorisation). <span class="kR">rouge</span> : les termes qui s'annulent. <span class="kV">violet</span> : les coefficients binomiaux. <span class="kG">vert</span> : le résultat.</p>

<h2 id="a-not">1. Les notations du programme</h2>
<div class="sbox">$$\sum_{\cB{k = p}}^{\cB n}x_k = x_p + x_{p+1} + \cdots + x_n,\qquad\prod_{\cB{k = p}}^{\cB n}x_k = x_p\times x_{p+1}\times\cdots\times x_n\qquad(p\leqslant n).$$</div>
<ul>
<li><b>Nombre de termes</b> : de $\cB p$ à $\cB n$, il y a $\cB{n - p + 1}$ termes (et pas $n - p$).</li>
<li><b>L'indice est muet</b> : $\sum_{k=1}^nk^2 = \sum_{j=1}^nj^2$. Il n'existe pas hors de la somme : on n'écrit jamais $k$ dans le résultat.</li>
<li><b>Conventions</b> : si $p > n$, la somme est vide et vaut $0$, le produit est vide et vaut $1$.</li>
<li>Somme sur un ensemble : $\sum_{k\in I}x_k$, et $\sum_{1\leqslant i\leqslant j\leqslant n}a_{i,j}$ pour une somme double.</li>
</ul>
<p class="ml">Exemple : compter les termes</p>
$$\sum_{\cB{k = 3}}^{\cB{10}}1 = \underbrace{1 + 1 + \cdots + 1}_{\cB{10 - 3 + 1 = 8}\ \text{termes}} = \cG8,\qquad\sum_{\cB{k = 0}}^{\cB n}5 = 5(\cB{n + 1}) = \cG{5n + 5}.$$
<p class="ml piege">Piège</p>
<p>$\sum_{k=1}^n\lambda = n\lambda$, mais $\sum_{k=0}^n\lambda = (n + 1)\lambda$ : le terme $k = 0$ compte.</p>

<h2 id="a-lin">2. Les règles de calcul</h2>
<div class="sbox">$$\sum_{k=p}^n(\lambda x_k + \mu y_k) = \lambda\sum_{k=p}^nx_k + \mu\sum_{k=p}^ny_k\quad\text{(linéarité)},\qquad\sum_{k=p}^nx_k = \sum_{k=p}^mx_k + \sum_{k=m+1}^nx_k\quad\text{(Chasles)}.$$</div>
<ul>
<li>Ce qui ne dépend pas de $k$ sort de la somme : $\sum_{k=1}^nn\,k = n\sum_{k=1}^nk$.</li>
<li>On peut isoler un terme : $\sum_{k=0}^nx_k = x_0 + \sum_{k=1}^nx_k$.</li>
<li>Termes pairs et impairs : $\sum_{k=0}^{2n}x_k = \sum_{p=0}^nx_{2p} + \sum_{p=0}^{n-1}x_{2p+1}$.</li>
</ul>
<p class="ml">Exemple</p>
$$\sum_{k=1}^n(3k + 2) = 3\sum_{k=1}^nk + \sum_{k=1}^n2 = 3\cdot\frac{n(n + 1)}{2} + 2n = \frac{3n^2 + 3n + 4n}{2} = \cG{\frac{n(3n + 7)}{2}}.$$
<p>Contrôle avec $n = 1$ : la somme vaut $3 + 2 = 5$, et $\frac{1\times10}{2} = 5$. $\checkmark$</p>
<p class="ml piege">Piège</p>
<p>$\sum x_ky_k\neq\big(\sum x_k\big)\big(\sum y_k\big)$ et $\sum\frac1{x_k}\neq\frac1{\sum x_k}$. La somme ne passe pas dans un produit ni dans un quotient.</p>

<h2 id="a-chg">3. Changer d'indice</h2>
<p>On pose une nouvelle variable, et on change <b>trois choses</b> : le terme général, la borne du bas et la borne du haut.</p>
<table class="mtab">
<tr><th>Changement</th><th>Nouvelles bornes</th><th>Effet</th></tr>
<tr><td>$\cO{j = k + 1}$ (décalage)</td><td>$k = p\mapsto j = p + 1$, $k = n\mapsto j = n + 1$</td><td>$\sum_{k=p}^nx_{k+1} = \sum_{j=p+1}^{n+1}x_j$</td></tr>
<tr><td>$\cO{j = k - 1}$</td><td>$k = p\mapsto j = p - 1$, $k = n\mapsto j = n - 1$</td><td>$\sum_{k=p}^nx_{k-1} = \sum_{j=p-1}^{n-1}x_j$</td></tr>
<tr><td>$\cO{j = n - k}$ (retournement)</td><td>$k = 0\mapsto j = n$, $k = n\mapsto j = 0$</td><td>$\sum_{k=0}^nx_{n-k} = \sum_{j=0}^nx_j$</td></tr>
</table>
<p class="ml">Exemple 1 : un décalage</p>
$$S = \sum_{\cB{k = 0}}^{\cB{n-1}}(k + 1)^2.\qquad\cO{j = k + 1}:\quad k = 0\mapsto j = \cB1,\quad k = n - 1\mapsto j = \cB n.$$
$$S = \sum_{\cB{j = 1}}^{\cB n}j^2 = \cG{\frac{n(n + 1)(2n + 1)}{6}}.$$
<p class="ml">Exemple 2 : un retournement</p>
$$T = \sum_{\cB{k = 0}}^{\cB n}(n - k)\,2^{n-k}.\qquad\cO{j = n - k}:\quad k = 0\mapsto j = \cB n,\quad k = n\mapsto j = \cB0.$$
$$T = \sum_{\cB{j = 0}}^{\cB n}j\,2^j\qquad(\text{on a remis les bornes dans l'ordre croissant}).$$
<p class="ml piege">Piège</p>
<p>Dans le terme général, <b>tous</b> les $k$ doivent être remplacés : avec $j = n - k$, $k = n - j$ et $x_k = x_{n-j}$.</p>

<h2 id="a-usu">4. Les sommes usuelles</h2>
<div class="sbox">$$\sum_{k=1}^nk = \frac{n(n + 1)}{2},\qquad\sum_{k=1}^nk^2 = \frac{n(n + 1)(2n + 1)}{6},\qquad\sum_{k=1}^nk^3 = \left(\frac{n(n + 1)}{2}\right)^2.$$</div>
<p class="ml">La première, par retournement (Gauss)</p>
<p>On écrit $S$ deux fois, la seconde à l'envers ($\cO{j = n + 1 - k}$), et on ajoute colonne par colonne :</p>
$$\begin{aligned}S &= \cB1 + \cB2 + \cdots + \cB n\\S &= \cR n + \cR{(n - 1)} + \cdots + \cR1\\\hline2S &= (n + 1) + (n + 1) + \cdots + (n + 1) = n(n + 1)\end{aligned}\qquad\Longrightarrow\qquad\cG{S = \frac{n(n + 1)}{2}}.$$
<p class="ml">La deuxième, par télescopage</p>
<p>On développe $(k + 1)^3 - k^3 = 3k^2 + 3k + 1$ et on somme de $k = 1$ à $n$. À gauche, tout se simplifie (§6) :</p>
$$\sum_{k=1}^n\big((k + 1)^3 - k^3\big) = (n + 1)^3 - 1 = 3\sum_{k=1}^nk^2 + 3\cdot\frac{n(n + 1)}2 + n.$$
$$3\sum_{k=1}^nk^2 = (n + 1)^3 - 1 - n - \frac{3n(n + 1)}2 = (n + 1)\Big[(n + 1)^2 - 1 - \frac{3n}2\Big] = (n + 1)\cdot\frac{2n^2 + n}{2} = \frac{n(n + 1)(2n + 1)}2.$$
<p>On divise par $3$ : $\cG{\sum_{k=1}^nk^2 = \frac{n(n + 1)(2n + 1)}6}$.</p>
<p class="ml">Exemple : $\sum_{k=1}^nk(k + 1)$</p>
<p>On développe puis on utilise la linéarité :</p>
$$\sum_{k=1}^nk(k + 1) = \sum_{k=1}^nk^2 + \sum_{k=1}^nk = \frac{n(n + 1)(2n + 1)}6 + \frac{n(n + 1)}2.$$
<p>On factorise par $\cO{\frac{n(n + 1)}6}$ avant de développer (moins de calculs) :</p>
$$= \cO{\frac{n(n + 1)}6}\big[(2n + 1) + 3\big] = \frac{n(n + 1)(2n + 4)}6 = \cG{\frac{n(n + 1)(n + 2)}3}.$$
<p>Contrôle avec $n = 2$ : $1\times2 + 2\times3 = 8$, et $\frac{2\times3\times4}{3} = 8$. $\checkmark$</p>

<h2 id="a-geo">5. La somme géométrique</h2>
<div class="sbox">$$\sum_{k=0}^nq^k = \left\{\begin{aligned}&\frac{1 - q^{n+1}}{1 - q}&&\text{si}\ q\neq1\\&n + 1&&\text{si}\ q = 1\end{aligned}\right.\qquad\text{En général}:\ \text{premier terme}\times\frac{1 - q^{\text{nombre de termes}}}{1 - q}.$$</div>
<p class="ml">Pourquoi (à savoir refaire)</p>
$$(1 - q)\sum_{k=0}^nq^k = \sum_{k=0}^nq^k - \sum_{k=0}^nq^{k+1} = (1 + \cR{q + \cdots + q^n}) - (\cR{q + \cdots + q^n} + q^{n+1}) = 1 - q^{n+1}.$$
<p class="ml">Exemple 1 : la somme ne commence pas à 0</p>
$$\sum_{k=\cB2}^{\cB n}3^k:\qquad\text{premier terme}\ 3^2 = 9,\qquad\text{nombre de termes}\ \cB{n - 1},\qquad q = 3\neq1.$$
$$\sum_{k=2}^n3^k = 9\cdot\frac{1 - 3^{n-1}}{1 - 3} = \frac92\big(3^{n-1} - 1\big) = \cG{\frac{3^{n+1} - 9}{2}}.$$
<p>Contrôle avec $n = 2$ : $3^2 = 9$, et $\frac{27 - 9}2 = 9$. $\checkmark$</p>
<p class="ml">Exemple 2 : la raison est cachée</p>
$$\sum_{k=0}^n\frac{2^k}{5^{k+1}} = \frac15\sum_{k=0}^n\Big(\frac25\Big)^k = \frac15\cdot\frac{1 - (2/5)^{n+1}}{1 - 2/5} = \frac15\cdot\frac53\Big(1 - \Big(\frac25\Big)^{n+1}\Big) = \cG{\frac13\Big(1 - \Big(\frac25\Big)^{n+1}\Big)}.$$
<p class="ml piege">Piège</p>
<p>Toujours vérifier $q\neq1$. Avec un paramètre ($q = x$, $q = e^{i\theta}$), on traite le cas $q = 1$ à part.</p>

<h2 id="a-tele">6. Le télescopage</h2>
<div class="sbox">$$\sum_{k=p}^n(x_{k+1} - x_k) = x_{n+1} - x_p,\qquad\prod_{k=p}^n\frac{x_{k+1}}{x_k} = \frac{x_{n+1}}{x_p}\quad(x_k\neq0).$$</div>
<p>On repère une différence de deux termes <b>consécutifs</b> de la même suite. On écrit les termes, ils s'annulent deux à deux, il reste le dernier et le premier.</p>
<p class="ml">Exemple 1 : $\sum_{k=1}^n\frac1{k(k + 1)}$</p>
<p><b>Étape 1 : décomposer.</b> On cherche $a, b$ avec $\frac1{k(k + 1)} = \frac ak + \frac b{k + 1}$ :</p>
$$\frac ak + \frac b{k + 1} = \frac{a(k + 1) + bk}{k(k + 1)} = \frac{(a + b)k + a}{k(k + 1)}\qquad\Longrightarrow\qquad\left\{\begin{aligned}a + b &= 0\\a &= 1\end{aligned}\right.\iff\left\{\begin{aligned}a &= 1\\b &= -1\end{aligned}\right.$$
<p><b>Étape 2 : écrire les termes.</b></p>
$$\sum_{k=1}^n\Big(\frac1k - \frac1{k + 1}\Big) = \Big(1 - \cR{\frac12}\Big) + \Big(\cR{\frac12} - \cR{\frac13}\Big) + \cdots + \Big(\cR{\frac1n} - \frac1{n + 1}\Big) = \cG{1 - \frac1{n + 1} = \frac{n}{n + 1}}.$$
<p class="ml">Exemple 2 : un écart de 2</p>
$$\frac1{k(k + 2)} = \frac12\Big(\frac1k - \frac1{k + 2}\Big):\quad\sum_{k=1}^n\frac1{k(k + 2)} = \frac12\Big(1 + \frac12 - \frac1{n + 1} - \frac1{n + 2}\Big).$$
<p>Ici il reste <b>deux</b> termes au début ($k = 1, 2$) et deux à la fin : les $\frac1j$ pour $3\leqslant j\leqslant n$ apparaissent une fois avec $+$ et une fois avec $-$.</p>
<p class="ml">Exemple 3 : un produit télescopique</p>
$$\prod_{k=2}^n\Big(1 - \frac1{k^2}\Big) = \prod_{k=2}^n\frac{(k - 1)(k + 1)}{k\cdot k} = \Big(\prod_{k=2}^n\frac{k - 1}{k}\Big)\Big(\prod_{k=2}^n\frac{k + 1}{k}\Big).$$
$$\prod_{k=2}^n\frac{k - 1}{k} = \frac12\cdot\frac{\cR2}{\cR3}\cdots\frac{\cR{n - 1}}n = \frac1n,\qquad\prod_{k=2}^n\frac{k + 1}k = \frac{\cR3}2\cdot\frac{\cR4}{\cR3}\cdots\frac{n + 1}{\cR n} = \frac{n + 1}2.$$
$$\prod_{k=2}^n\Big(1 - \frac1{k^2}\Big) = \frac1n\cdot\frac{n + 1}2 = \cG{\frac{n + 1}{2n}}.$$
<p class="ml">Exemple 4 : avec un logarithme</p>
$$\sum_{k=1}^n\ln\Big(1 + \frac1k\Big) = \sum_{k=1}^n\big(\ln(k + 1) - \ln k\big) = \ln(n + 1) - \ln1 = \cG{\ln(n + 1)}.$$

<h2 id="a-prod">7. Les produits</h2>
<div class="sbox">$$\prod_{k=p}^n\lambda = \lambda^{n-p+1},\qquad\prod_{k=p}^n(\lambda x_k) = \lambda^{n-p+1}\prod_{k=p}^nx_k,\qquad\ln\Big(\prod x_k\Big) = \sum\ln x_k\ (x_k > 0),\qquad e^{\sum x_k} = \prod e^{x_k}.$$</div>
<ul>
<li>$\prod_{k=1}^nk = n!$, et un produit est nul si et seulement si un de ses facteurs est nul.</li>
<li>Le $\lambda$ sort avec la <b>puissance</b> $n - p + 1$, pas multiplié une fois.</li>
</ul>
<p class="ml">Exemple 1 : les nombres pairs</p>
$$\prod_{k=1}^n(2k) = \cO{2^n}\prod_{k=1}^nk = \cG{2^n\,n!}.$$
<p class="ml">Exemple 2 : les nombres impairs, on complète avec les pairs</p>
$$\prod_{k=1}^n(2k - 1) = 1\times3\times\cdots\times(2n - 1) = \frac{1\times\cO2\times3\times\cO4\times\cdots\times(2n - 1)\times\cO{2n}}{\cO2\times\cO4\times\cdots\times\cO{2n}} = \frac{(2n)!}{2^n\,n!}.$$
<p class="ml">Exemple 3 : une somme dans l'exponentielle</p>
$$\prod_{k=1}^ne^{k/n} = e^{\frac1n\sum_{k=1}^nk} = e^{\frac1n\cdot\frac{n(n + 1)}2} = \cG{e^{\frac{n + 1}2}}.$$

<h2 id="a-binom">8. Factorielles et coefficients binomiaux</h2>
<div class="sbox">$$n! = \prod_{k=1}^nk,\quad0! = 1,\qquad\cV{\binom nk} = \left\{\begin{aligned}&\frac{n!}{k!\,(n - k)!}&&\text{si}\ 0\leqslant k\leqslant n\\&0&&\text{sinon}\end{aligned}\right.$$</div>
<p>Notation du programme : $\binom nk$, qui se lit « $k$ parmi $n$ ». L'ancienne notation est $C_n^k$. C'est le nombre de façons de choisir $k$ éléments parmi $n$.</p>
<p class="ml">Les formules</p>
<div class="mrefl">
<div><b>Valeurs</b><span>$\binom n0 = \binom nn = 1$, $\binom n1 = n$, $\binom n2 = \frac{n(n - 1)}2$.</span></div>
<div><b>Symétrie</b><span>$\binom nk = \binom n{n - k}$.</span></div>
<div><b>Pascal</b><span>$\binom nk + \binom n{k + 1} = \binom{n + 1}{k + 1}$.</span></div>
<div><b>Sans factorielle</b><span>$\binom nk = \frac{n(n - 1)\cdots(n - k + 1)}{k!}$ ($k$ facteurs en haut).</span></div>
<div><b>Formule du capitaine</b><span>$k\binom nk = n\binom{n - 1}{k - 1}$.</span></div>
</div>
<p class="ml">Démontrer la formule de Pascal</p>
<p>On met au même dénominateur $\cO{(k + 1)!\,(n - k)!}$ :</p>
$$\binom nk + \binom n{k + 1} = \frac{n!}{k!\,(n - k)!} + \frac{n!}{(k + 1)!\,(n - k - 1)!} = \frac{n!\,\cO{(k + 1)}}{\cO{(k + 1)!\,(n - k)!}} + \frac{n!\,\cO{(n - k)}}{\cO{(k + 1)!\,(n - k)!}}.$$
$$= \frac{n!\,(k + 1 + n - k)}{(k + 1)!\,(n - k)!} = \frac{(n + 1)!}{(k + 1)!\,(n - k)!} = \cG{\binom{n + 1}{k + 1}}.$$
<p class="ml">Calculer vite : $\binom{10}3$</p>
$$\binom{10}3 = \frac{10\times9\times8}{3\times2\times1} = \frac{720}6 = \cG{120}.$$
<p>On écrit $k = 3$ facteurs en haut, en partant de $10$ et en descendant. Si $k > \frac n2$, on utilise d'abord la symétrie : $\binom{10}8 = \binom{10}2 = 45$.</p>
<p class="ml">Le triangle de Pascal</p>
<p>Chaque nombre est la somme des deux nombres au-dessus de lui (le labo ci-dessous le montre) :</p>
<table class="mtab pascal">
<tr><th>$n$</th><th>$k = 0$</th><th>$1$</th><th>$2$</th><th>$3$</th><th>$4$</th><th>$5$</th></tr>
<tr><td>$0$</td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>$1$</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr>
<tr><td>$2$</td><td>1</td><td>2</td><td>1</td><td></td><td></td><td></td></tr>
<tr><td>$3$</td><td>1</td><td><span class="kB">3</span></td><td><span class="kB">3</span></td><td>1</td><td></td><td></td></tr>
<tr><td>$4$</td><td>1</td><td>4</td><td><span class="kG">6</span></td><td>4</td><td>1</td><td></td></tr>
<tr><td>$5$</td><td>1</td><td>5</td><td>10</td><td>10</td><td>5</td><td>1</td></tr>
</table>
<p>En couleur : $\binom31 + \binom32 = 3 + 3 = 6 = \binom42$.</p>
<div data-mlab="pascal"></div>

<h2 id="a-newton">9. La formule du binôme de Newton</h2>
<div class="sbox">$$(a + b)^n = \sum_{k=0}^n\cV{\binom nk}a^kb^{n-k}\qquad(a, b\in\mathbb C,\ n\in\mathbb N).$$</div>
<p>$n + 1$ termes. Les puissances de $a$ montent de $0$ à $n$, celles de $b$ descendent de $n$ à $0$, et leur somme vaut toujours $n$. Pour des matrices, il faut $AB = BA$.</p>
<p class="ml">Exemple 1 : $(x + 1)^5$</p>
<p>La ligne $n = 5$ du triangle donne les coefficients : $\cV1, \cV5, \cV{10}, \cV{10}, \cV5, \cV1$.</p>
$$(x + 1)^5 = \cV1\,x^5 + \cV5\,x^4 + \cV{10}\,x^3 + \cV{10}\,x^2 + \cV5\,x + \cV1.$$
<p class="ml">Exemple 2 : $(2x - 3)^4$, avec un signe</p>
<p>On pose $a = 2x$ et $b = -3$, et on fait un tableau terme par terme :</p>
<table class="mtab">
<tr><th>$k$</th><th>$\cV{\binom4k}$</th><th>$(2x)^k$</th><th>$(-3)^{4-k}$</th><th>Terme</th></tr>
<tr><td>$0$</td><td>$\cV1$</td><td>$1$</td><td>$81$</td><td>$81$</td></tr>
<tr><td>$1$</td><td>$\cV4$</td><td>$2x$</td><td>$-27$</td><td>$-216x$</td></tr>
<tr><td>$2$</td><td>$\cV6$</td><td>$4x^2$</td><td>$9$</td><td>$216x^2$</td></tr>
<tr><td>$3$</td><td>$\cV4$</td><td>$8x^3$</td><td>$-3$</td><td>$-96x^3$</td></tr>
<tr><td>$4$</td><td>$\cV1$</td><td>$16x^4$</td><td>$1$</td><td>$16x^4$</td></tr>
</table>
$$(2x - 3)^4 = \cG{16x^4 - 96x^3 + 216x^2 - 216x + 81}.$$
<p>Contrôle avec $x = 1$ : $(2 - 3)^4 = 1$, et $16 - 96 + 216 - 216 + 81 = 1$. $\checkmark$</p>
<p class="ml">Exemple 3 : les sommes de coefficients</p>
$$a = b = 1:\ \sum_{k=0}^n\binom nk = (1 + 1)^n = \cG{2^n},\qquad a = -1,\ b = 1:\ \sum_{k=0}^n(-1)^k\binom nk = (1 - 1)^n = \cG0\ (n\geqslant1).$$
<p class="ml">Exemple 4 : $\sum_{k=0}^nk\binom nk$ avec la formule du capitaine</p>
<p>Le terme $k = 0$ est nul. Pour $k\geqslant1$, $k\binom nk = n\binom{n - 1}{k - 1}$, puis on décale avec $\cO{j = k - 1}$ :</p>
$$\sum_{k=1}^nk\binom nk = n\sum_{k=1}^n\binom{n - 1}{k - 1} = n\sum_{j=0}^{n-1}\binom{n - 1}{j} = n\cdot2^{n-1}.$$
<div data-mlab="binome"></div>

<h2 id="a-bern">10. Factoriser $a^n - b^n$</h2>
<div class="sbox">$$a^n - b^n = (a - b)\sum_{k=0}^{n-1}a^kb^{n-1-k} = (a - b)\big(a^{n-1} + a^{n-2}b + \cdots + ab^{n-2} + b^{n-1}\big).$$</div>
<p class="ml">Pourquoi : on développe et ça télescope</p>
$$(a - b)\sum_{k=0}^{n-1}a^kb^{n-1-k} = \sum_{k=0}^{n-1}a^{k+1}b^{n-1-k} - \sum_{k=0}^{n-1}a^kb^{n-k} = a^n - b^n.$$
<p class="ml">Les cas à connaître</p>
$$a^2 - b^2 = (a - b)(a + b),\qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2),\qquad x^n - 1 = (x - 1)(1 + x + \cdots + x^{n-1}).$$
<p>Pour $n$ impair, on remplace $b$ par $-b$ : $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.</p>
<p class="ml">Exemple : $x^5 - 32$</p>
$$x^5 - 2^5 = (x - 2)\big(x^4 + 2x^3 + 4x^2 + 8x + 16\big).$$

<h2 id="a-doubles">11. Les sommes doubles</h2>
<p class="ml">Sur un rectangle : on intervertit librement</p>
<div class="sbox">$$\sum_{\substack{1\leqslant i\leqslant n\\1\leqslant j\leqslant m}}a_{i,j} = \sum_{i=1}^n\Big(\sum_{j=1}^ma_{i,j}\Big) = \sum_{j=1}^m\Big(\sum_{i=1}^na_{i,j}\Big),\qquad\Big(\sum_{i=1}^nx_i\Big)\Big(\sum_{j=1}^my_j\Big) = \sum_{i,j}x_iy_j.$$</div>
<p class="ml">Sur un triangle : on dessine pour changer l'ordre</p>
<div class="sbox">$$\sum_{1\leqslant i\leqslant j\leqslant n}a_{i,j} = \sum_{j=1}^n\sum_{\cB{i = 1}}^{\cB j}a_{i,j} = \sum_{i=1}^n\sum_{\cB{j = i}}^{\cB n}a_{i,j}.$$</div>
<p>Méthode : on fixe la variable de l'extérieur, puis on lit dans la condition $1\leqslant i\leqslant j\leqslant n$ les bornes de celle de l'intérieur.</p>
<p class="ml">Exemple : $S = \sum_{1\leqslant i\leqslant j\leqslant n}i$</p>
<p>On somme d'abord sur $i$ (à $j$ fixé, $i$ va de $\cB1$ à $\cB j$) :</p>
$$S = \sum_{j=1}^n\Big(\sum_{i=1}^ji\Big) = \sum_{j=1}^n\frac{j(j + 1)}2 = \frac12\sum_{j=1}^nj(j + 1) = \frac12\cdot\frac{n(n + 1)(n + 2)}3 = \cG{\frac{n(n + 1)(n + 2)}6}$$
<p>(la dernière somme a été calculée au §4). Contrôle avec $n = 2$ : les couples sont $(1,1), (1,2), (2,2)$, donc $S = 1 + 1 + 2 = 4$ et $\frac{2\times3\times4}6 = 4$. $\checkmark$</p>
<p class="ml">Le carré d'une somme</p>
$$\Big(\sum_{i=1}^nx_i\Big)^2 = \sum_{i=1}^nx_i^2 + 2\sum_{1\leqslant i\lt j\leqslant n}x_ix_j.$$
<p class="ml piege">Piège</p>
<p>$\big(\sum_ix_i\big)\big(\sum_iy_i\big)\neq\sum_ix_iy_i$. Contre-exemple avec $n = 2$ et tous les termes égaux à $1$ : à gauche $2\times2 = 4$, à droite $2$. Il faut deux indices <b>différents</b>.</p>

<h2 id="a-ineg">12. Inégalités avec des sommes et des produits</h2>
<ul>
<li>Si $x_k\leqslant y_k$ pour tout $k$, alors $\sum x_k\leqslant\sum y_k$.</li>
<li>Si $0\leqslant x_k\leqslant y_k$ pour tout $k$, alors $\prod x_k\leqslant\prod y_k$. Sans la positivité, c'est faux.</li>
<li>Inégalité triangulaire : $\big|\sum x_k\big|\leqslant\sum|x_k|$.</li>
</ul>
<p class="ml">Exemple : encadrer $\sum_{k=1}^n\frac1{n + k}$</p>
<p>Pour $1\leqslant k\leqslant n$, on a $n + 1\leqslant n + k\leqslant2n$, donc $\frac1{2n}\leqslant\frac1{n + k}\leqslant\frac1{n + 1}$. On somme les $n$ termes :</p>
$$\frac n{2n} = \frac12\leqslant\sum_{k=1}^n\frac1{n + k}\leqslant\frac n{n + 1}\lt1.$$

<h2 id="a-enonce">13. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>Un polynôme en $k$ de degré $\leqslant3$</b><span>Développer, linéarité, sommes usuelles. Factoriser avant de développer.</span></div>
<div><b>$q^k$, $a^k$, $e^{ik\theta}$</b><span>Somme géométrique. Cas $q = 1$ à part.</span></div>
<div><b>Une fraction $\frac1{k(k + 1)}$, $\frac1{k^2 - 1}$</b><span>Décomposer, puis télescopage.</span></div>
<div><b>$\ln\frac{k + 1}k$, $\sqrt{k + 1} - \sqrt k$</b><span>Télescopage direct.</span></div>
<div><b>« À l'aide d'un changement d'indice »</b><span>Écrire $j = \dots$, changer les deux bornes et tous les $k$.</span></div>
<div><b>$\binom nk$ dans la somme</b><span>Binôme de Newton avec $a, b$ bien choisis, ou formule du capitaine.</span></div>
<div><b>$\binom nk\,x^k$ avec $k$ en facteur</b><span>Dériver $(1 + x)^n$, ou $k\binom nk = n\binom{n - 1}{k - 1}$.</span></div>
<div><b>$a^n - b^n$, $x^n - 1$</b><span>Factoriser par $a - b$ (formule de Bernoulli).</span></div>
<div><b>$\sum_{i\leqslant j}$</b><span>Dessiner le triangle, sommer d'abord sur la variable la plus simple.</span></div>
<div><b>Un produit $\prod$</b><span>Passer au $\ln$ si les termes sont positifs, ou télescopage de quotients.</span></div>
<div><b>Termes pairs ou impairs</b><span>Séparer $k = 2p$ et $k = 2p + 1$, ou compléter le produit ($\prod(2k - 1)$).</span></div>
<div><b>« Montrer pour tout $n$ »</b><span>Une récurrence marche toujours, mais un calcul direct est plus rapide.</span></div>
</div>

<h2 id="a-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Compter $n - p$ termes au lieu de $n - p + 1$.</p>
<p><b>2.</b> $\sum_{k=0}^n\lambda = n\lambda$ : faux, c'est $(n + 1)\lambda$.</p>
<p><b>3.</b> Changer l'indice sans changer les bornes.</p>
<p><b>4.</b> Laisser un $k$ dans le résultat final.</p>
<p><b>5.</b> Appliquer $\frac{1 - q^{n+1}}{1 - q}$ à une somme qui commence à $k = 1$ ou $k = 2$.</p>
<p><b>6.</b> Oublier le cas $q = 1$.</p>
<p><b>7.</b> $\prod(\lambda x_k) = \lambda\prod x_k$ : il manque la puissance.</p>
<p><b>8.</b> $\big(\sum x_k\big)^2 = \sum x_k^2$ : il manque les doubles produits.</p>
<p><b>9.</b> Dans le binôme, oublier les signes quand $b$ est négatif.</p>
<p><b>10.</b> Mal compter ce qui reste dans un télescopage : écrire les deux premiers et les deux derniers termes.</p>
</div>

<h2 id="a-entrainement">S'entraîner</h2>
<div data-mlab="sommes"></div>
<div data-mlab="quizalg"></div>

<h2 id="a-arbre">L'arbre des méthodes</h2>
<p>Choisis ce que tu veux faire, réponds aux questions et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Calculer une somme $\sum$</div>
<div class="tq">Terme en $q^k$ ?</div><a class="tl" href="#a-geo">oui : somme géométrique</a><div class="tno">non</div>
<div class="tq">Différence $x_{k+1} - x_k$ (ou fraction) ?</div><a class="tl" href="#a-tele">oui : télescopage</a><div class="tno">non</div>
<div class="tq">$\binom nk$ dans le terme ?</div><a class="tl" href="#a-newton">oui : binôme de Newton</a><div class="tno">non</div>
<div class="tq">Indice décalé ou retourné ?</div><a class="tl" href="#a-chg">oui : changer d'indice</a><div class="tno">non</div>
<a class="tl tend" href="#a-usu">polynôme en $k$ : sommes usuelles</a></div>
<div class="tb tR"><div class="tt">Calculer un produit $\prod$</div>
<div class="tq">Facteur constant ?</div><a class="tl" href="#a-prod">oui : $\lambda^{n-p+1}$</a><div class="tno">non</div>
<div class="tq">Quotient $\frac{x_{k+1}}{x_k}$ ?</div><a class="tl" href="#a-tele">oui : télescopage</a><div class="tno">non</div>
<div class="tq">Termes positifs ?</div><a class="tl" href="#a-prod">oui : passer au $\ln$</a><div class="tno">non</div>
<a class="tl tend" href="#a-prod">factorielles, compléter les termes</a></div>
<div class="tb tG"><div class="tt">Développer $(a + b)^n$</div>
<div class="tq">$n\leqslant5$ ?</div><a class="tl" href="#a-binom">oui : ligne du triangle de Pascal</a><div class="tno">non</div>
<div class="tq">Un seul coefficient demandé ?</div><a class="tl" href="#a-newton">oui : terme $\binom nka^kb^{n-k}$</a><div class="tno">non</div>
<a class="tl tend" href="#a-newton">$\sum_k\binom nka^kb^{n-k}$</a></div>
<div class="tb tO"><div class="tt">Factoriser</div>
<div class="tq">$a^n - b^n$ ?</div><a class="tl" href="#a-bern">oui : $(a - b)\sum a^kb^{n-1-k}$</a><div class="tno">non</div>
<div class="tq">$a^n + b^n$, $n$ impair ?</div><a class="tl" href="#a-bern">oui : remplacer $b$ par $-b$</a><div class="tno">non</div>
<a class="tl tend" href="#a-usu">factoriser avant de développer</a></div>
<div class="tb tV"><div class="tt">Somme double</div>
<div class="tq">Indices indépendants ?</div><a class="tl" href="#a-doubles">oui : intervertir, produit de sommes</a><div class="tno">non</div>
<div class="tq">Condition $i\leqslant j$ ?</div><a class="tl" href="#a-doubles">oui : dessiner le triangle</a><div class="tno">non</div>
<a class="tl tend" href="#a-doubles">$(\sum x_i)^2 = \sum x_i^2 + 2\sum_{i\lt j}x_ix_j$</a></div>
</div>
</div>
`,
"Nombres complexes": R`
<nav class="msum"><a href="#z-not">Notations</a><a href="#z-alg">Forme algébrique</a><a href="#z-conj">Conjugué</a><a href="#z-mod">Module</a><a href="#z-u">Le cercle $\mathbb U$</a><a href="#z-exp">Forme exponentielle</a><a href="#z-moitie">Angle moitié</a><a href="#z-trigo">Trigonométrie</a><a href="#z-moivre">Moivre</a><a href="#z-lin">Linéariser</a><a href="#z-rac2">Racines carrées</a><a href="#z-eq2">Degré 2</a><a href="#z-racn">Racines $n$-ièmes</a><a href="#z-geo">Géométrie</a><a href="#z-enonce">Ce que l'énoncé te donne</a><a href="#z-erreurs">Erreurs</a><a href="#z-entrainement">S'entraîner</a><a href="#z-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la partie réelle, ou le module $r$. <span class="kR">rouge</span> : la partie imaginaire, ou l'argument $\theta$. <span class="kO">orange</span> : l'opération qu'on fait. <span class="kV">violet</span> : les racines. <span class="kG">vert</span> : le résultat.</p>

<h2 id="z-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Forme algébrique</td><td>$z = \cB a + i\cR b$, $a, b\in\mathbb R$</td><td>$\cB a = \operatorname{Re}(z)$, $\cR b = \operatorname{Im}(z)$, tous deux <b>réels</b>.</td></tr>
<tr><td>Conjugué</td><td>$\overline z = a - ib$</td><td>Symétrique par rapport à l'axe réel.</td></tr>
<tr><td>Module</td><td>$|z| = \sqrt{a^2 + b^2}$</td><td>$|z|^2 = z\,\overline z$.</td></tr>
<tr><td>Argument</td><td>$\arg z\equiv\theta\ [2\pi]$, si $z\neq0$</td><td>Défini à $2\pi$ près.</td></tr>
<tr><td>Forme exponentielle</td><td>$z = \cB re^{i\cR\theta}$, $r = |z| > 0$</td><td>$e^{i\theta} = \cos\theta + i\sin\theta$.</td></tr>
<tr><td>Cercle unité</td><td>$\mathbb U = \{z\in\mathbb C : |z| = 1\}$</td><td>$z\in\mathbb U\iff\overline z = \frac1z\iff z = e^{i\theta}$.</td></tr>
<tr><td>Racines $n$-ièmes de l'unité</td><td>$\mathbb U_n = \{e^{\frac{2ik\pi}n} : 0\leqslant k\leqslant n - 1\}$</td><td>$j = e^{\frac{2i\pi}3}$.</td></tr>
</table>

<h2 id="z-alg">2. Calculer en forme algébrique</h2>
<ul>
<li>On développe comme avec des réels, en remplaçant $i^2$ par $-1$.</li>
<li>Puissances de $i$ : $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, puis ça recommence.</li>
<li><b>Diviser</b> : on multiplie en haut et en bas par le <b>conjugué du dénominateur</b>.</li>
</ul>
<div class="sbox">$$\frac1{a + ib} = \frac{a - ib}{(a + ib)(a - ib)} = \frac{a - ib}{a^2 + b^2}.$$</div>
<p class="ml">Exemple 1 : un produit</p>
$$(2 + 3i)(1 - 4i) = 2 - 8i + 3i - 12\cO{i^2} = 2 - 5i + 12 = \cG{14 - 5i}.$$
<p class="ml">Exemple 2 : un quotient</p>
$$\frac{2 + 3i}{1 - 2i} = \frac{(2 + 3i)\cO{(1 + 2i)}}{(1 - 2i)\cO{(1 + 2i)}} = \frac{2 + 4i + 3i + 6i^2}{1^2 + 2^2} = \frac{-4 + 7i}{5} = \cG{-\frac45 + \frac75i}.$$
<p>Partie réelle $\cB{-\frac45}$, partie imaginaire $\cR{\frac75}$ (sans le $i$).</p>
<p class="ml piege">Piège</p>
<p>$\operatorname{Im}(3 - 2i) = -2$, pas $-2i$. Et on ne compare pas des complexes avec $\leqslant$.</p>

<h2 id="z-conj">3. Le conjugué</h2>
<div class="sbox">$$\overline{z + z'} = \overline z + \overline{z'},\quad\overline{zz'} = \overline z\,\overline{z'},\quad\overline{\Big(\frac z{z'}\Big)} = \frac{\overline z}{\overline{z'}},\quad\operatorname{Re}z = \frac{z + \overline z}2,\quad\operatorname{Im}z = \frac{z - \overline z}{2i}.$$</div>
<div class="sbox">$$z\in\mathbb R\iff\overline z = z,\qquad z\in i\mathbb R\iff\overline z = -z.$$</div>
<p class="ml">Exemple : montrer qu'un nombre est réel sans le calculer</p>
<p>Soit $z\in\mathbb U$, $z\neq-1$. Montrer que $w = \frac{1 - z}{1 + z}$ est imaginaire pur. On utilise $\overline z = \frac1z$ :</p>
$$\overline w = \frac{1 - \overline z}{1 + \overline z} = \frac{1 - \frac1z}{1 + \frac1z}\ \underset{\cO{\times\frac zz}}{=}\ \frac{z - 1}{z + 1} = -\frac{1 - z}{1 + z} = -w\qquad\Longrightarrow\qquad\cG{w\in i\mathbb R}.$$

<h2 id="z-mod">4. Le module</h2>
<div class="sbox">$$|zz'| = |z|\,|z'|,\quad\Big|\frac z{z'}\Big| = \frac{|z|}{|z'|},\quad|z^n| = |z|^n,\quad\big||z| - |z'|\big|\leqslant|z + z'|\leqslant|z| + |z'|.$$</div>
<ul>
<li>$|z| = 0\iff z = 0$, et $|z - z'|$ est la distance entre les points d'affixes $z$ et $z'$.</li>
<li>Égalité dans l'inégalité triangulaire ($z'\neq0$) : $|z + z'| = |z| + |z'|\iff z = \lambda z'$ avec $\lambda\geqslant0$.</li>
<li>Avec des sommes : $\big|\sum z_k\big|\leqslant\sum|z_k|$.</li>
</ul>
<p class="ml">Exemple : le module d'une puissance, sans développer</p>
$$|1 + i| = \sqrt{1^2 + 1^2} = \sqrt2\qquad\Longrightarrow\qquad|(1 + i)^8| = (\sqrt2)^8 = \cG{16}.$$
<p class="ml">Exemple : le module d'un quotient</p>
$$\Big|\frac{3 + 4i}{1 - i}\Big| = \frac{|3 + 4i|}{|1 - i|} = \frac{\sqrt{9 + 16}}{\sqrt{1 + 1}} = \frac5{\sqrt2} = \cG{\frac{5\sqrt2}2}.$$

<h2 id="z-u">5. Le cercle $\mathbb U$, Euler et Moivre</h2>
<div class="sbox">$$e^{i\theta} = \cos\theta + i\sin\theta,\qquad e^{i\theta}e^{i\theta'} = e^{i(\theta + \theta')},\qquad\overline{e^{i\theta}} = e^{-i\theta} = \frac1{e^{i\theta}}.$$</div>
<div class="sbox">$$\textbf{Euler}:\ \cos\theta = \frac{e^{i\theta} + e^{-i\theta}}2,\quad\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}.\qquad\textbf{Moivre}:\ (\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta).$$</div>
<ul>
<li>$e^{i\theta} = 1\iff\theta\equiv0\ [2\pi]$. Valeurs : $e^{i\pi} = -1$, $e^{i\pi/2} = i$, $e^{2ik\pi} = 1$, $e^{ik\pi} = (-1)^k$.</li>
<li>$\cos\theta = \operatorname{Re}(e^{i\theta})$, $\sin\theta = \operatorname{Im}(e^{i\theta})$.</li>
<li>Exponentielle complexe : $e^{a + ib} = e^ae^{ib}$, donc $|e^z| = e^{\operatorname{Re}z}$ et $e^z\neq0$.</li>
</ul>

<h2 id="z-exp">6. Passer en forme exponentielle</h2>
<ol>
<li>Calculer $\cB r = |z| = \sqrt{a^2 + b^2}$.</li>
<li>Factoriser par $\cB r$ : $z = \cB r\Big(\frac ar + i\frac br\Big)$.</li>
<li>Reconnaître $\cos\cR\theta = \frac ar$ et $\sin\cR\theta = \frac br$ dans le tableau des valeurs remarquables. Le signe de $\sin\theta$ dit si on est en haut ou en bas.</li>
<li>Conclure : $z = \cB re^{i\cR\theta}$.</li>
</ol>
<table class="mtab">
<tr><th>$\theta$</th><th>$0$</th><th>$\frac\pi6$</th><th>$\frac\pi4$</th><th>$\frac\pi3$</th><th>$\frac\pi2$</th><th>$\frac{2\pi}3$</th><th>$\frac{3\pi}4$</th><th>$\frac{5\pi}6$</th><th>$\pi$</th></tr>
<tr><td>$\cos\theta$</td><td>$1$</td><td>$\frac{\sqrt3}2$</td><td>$\frac{\sqrt2}2$</td><td>$\frac12$</td><td>$0$</td><td>$-\frac12$</td><td>$-\frac{\sqrt2}2$</td><td>$-\frac{\sqrt3}2$</td><td>$-1$</td></tr>
<tr><td>$\sin\theta$</td><td>$0$</td><td>$\frac12$</td><td>$\frac{\sqrt2}2$</td><td>$\frac{\sqrt3}2$</td><td>$1$</td><td>$\frac{\sqrt3}2$</td><td>$\frac{\sqrt2}2$</td><td>$\frac12$</td><td>$0$</td></tr>
</table>
<p class="ml">Exemple 1 : $z = 1 + i\sqrt3$</p>
$$\cB r = \sqrt{1^2 + (\sqrt3)^2} = \sqrt{1 + 3} = \cB2,\qquad z = \cB2\Big(\frac12 + i\frac{\sqrt3}2\Big).$$
$$\cos\cR\theta = \frac12,\ \sin\cR\theta = \frac{\sqrt3}2 > 0\ \Longrightarrow\ \cR{\theta = \frac\pi3},\qquad\cG{z = 2e^{i\pi/3}}.$$
<p class="ml">Exemple 2 : $z = -1 + i$</p>
$$\cB r = \sqrt{(-1)^2 + 1^2} = \cB{\sqrt2},\qquad z = \cB{\sqrt2}\Big(-\frac1{\sqrt2} + i\frac1{\sqrt2}\Big) = \sqrt2\Big(-\frac{\sqrt2}2 + i\frac{\sqrt2}2\Big).$$
$$\cos\cR\theta = -\frac{\sqrt2}2,\ \sin\cR\theta = \frac{\sqrt2}2 > 0\ \Longrightarrow\ \cR{\theta = \frac{3\pi}4},\qquad\cG{z = \sqrt2\,e^{3i\pi/4}}.$$
<p class="ml">Exemple 3 : $z = \sqrt3 - i$</p>
$$\cB r = \sqrt{3 + 1} = \cB2,\qquad\cos\cR\theta = \frac{\sqrt3}2,\ \sin\cR\theta = -\frac12\lt0\ \Longrightarrow\ \cR{\theta = -\frac\pi6},\qquad\cG{z = 2e^{-i\pi/6}}.$$
<p class="ml">Exemple 4 : une puissance, grâce à la forme exponentielle</p>
$$(1 + i\sqrt3)^{6} = \big(2e^{i\pi/3}\big)^6 = 2^6e^{6i\pi/3} = 64\,e^{2i\pi} = \cG{64}.$$
<p class="ml">Les règles sur l'argument ($z, z'\neq0$)</p>
$$\arg(zz')\equiv\arg z + \arg z',\qquad\arg\Big(\frac z{z'}\Big)\equiv\arg z - \arg z',\qquad\arg(z^n)\equiv n\arg z,\qquad\arg\overline z\equiv-\arg z\quad[2\pi].$$
<p class="ml piege">Piège</p>
<p>$-2e^{i\pi/5}$ n'est pas une forme exponentielle : le module doit être positif. On écrit $-1 = e^{i\pi}$, donc $-2e^{i\pi/5} = 2e^{i(\pi + \pi/5)} = 2e^{6i\pi/5}$.</p>
<div data-mlab="expform"></div>

<h2 id="z-moitie">7. La technique de l'angle moitié</h2>
<p>Pour une somme ou une différence de deux exponentielles, on factorise par l'exponentielle de la <b>moyenne</b> des angles :</p>
<div class="sbox">$$e^{ip} + e^{iq} = e^{i\frac{p + q}2}\Big(e^{i\frac{p - q}2} + e^{-i\frac{p - q}2}\Big) = 2\cos\Big(\frac{p - q}2\Big)\,e^{i\frac{p + q}2},\qquad e^{ip} - e^{iq} = 2i\sin\Big(\frac{p - q}2\Big)\,e^{i\frac{p + q}2}.$$</div>
<p>Cas fréquents : $1 + e^{i\theta} = 2\cos\frac\theta2\,e^{i\theta/2}$ et $1 - e^{i\theta} = -2i\sin\frac\theta2\,e^{i\theta/2}$.</p>
<p class="ml">Exemple 1 : module et argument de $1 + e^{i\theta}$, $\theta\in\left]-\pi, \pi\right[$</p>
$$1 + e^{i\theta} = \cO{e^{i\theta/2}}\big(e^{-i\theta/2} + e^{i\theta/2}\big) = 2\cos\Big(\frac\theta2\Big)\,e^{i\theta/2}.$$
<p>Comme $\frac\theta2\in\left]-\frac\pi2, \frac\pi2\right[$, $\cos\frac\theta2 > 0$ : c'est bien une forme exponentielle.</p>
$$\cG{|1 + e^{i\theta}| = 2\cos\frac\theta2},\qquad\cG{\arg(1 + e^{i\theta})\equiv\frac\theta2\ [2\pi]}.$$
<p>Si $\theta\in\left]\pi, 3\pi\right[$, alors $\cos\frac\theta2\lt0$ : le module est $-2\cos\frac\theta2$ et l'argument $\frac\theta2 + \pi$.</p>
<p class="ml">Exemple 2 : $\sum_{k=0}^n\cos(k\theta)$, avec $\theta\not\equiv0\ [2\pi]$</p>
<p><b>Étape 1.</b> C'est la partie réelle d'une somme géométrique de raison $e^{i\theta}\neq1$ :</p>
$$\sum_{k=0}^n\cos(k\theta) = \operatorname{Re}\Big(\sum_{k=0}^n(e^{i\theta})^k\Big) = \operatorname{Re}\Big(\frac{1 - e^{i(n+1)\theta}}{1 - e^{i\theta}}\Big).$$
<p><b>Étape 2.</b> Angle moitié en haut et en bas :</p>
$$\frac{1 - e^{i(n+1)\theta}}{1 - e^{i\theta}} = \frac{\cancel{-2i}\,\sin\frac{(n+1)\theta}2\,e^{i\frac{(n+1)\theta}2}}{\cancel{-2i}\,\sin\frac\theta2\,e^{i\frac\theta2}} = \frac{\sin\frac{(n+1)\theta}2}{\sin\frac\theta2}\,e^{i\frac{n\theta}2}.$$
<p><b>Étape 3.</b> On prend la partie réelle :</p>
$$\cG{\sum_{k=0}^n\cos(k\theta) = \frac{\sin\frac{(n+1)\theta}2}{\sin\frac\theta2}\cos\Big(\frac{n\theta}2\Big)},\qquad\text{et avec}\ \operatorname{Im}:\ \sum_{k=0}^n\sin(k\theta) = \frac{\sin\frac{(n+1)\theta}2}{\sin\frac\theta2}\sin\Big(\frac{n\theta}2\Big).$$

<h2 id="z-trigo">8. Retrouver les formules de trigonométrie</h2>
<p class="ml">Formules d'addition</p>
<p>On développe $e^{i(a+b)} = e^{ia}e^{ib}$ et on identifie parties réelles et imaginaires :</p>
$$\cos(a + b) + i\sin(a + b) = (\cos a + i\sin a)(\cos b + i\sin b) = \cB{(\cos a\cos b - \sin a\sin b)} + i\cR{(\sin a\cos b + \cos a\sin b)}.$$
<p class="ml">Transformer une somme en produit</p>
<div class="sbox">$$\cos p + \cos q = 2\cos\frac{p + q}2\cos\frac{p - q}2,\qquad\sin p + \sin q = 2\sin\frac{p + q}2\cos\frac{p - q}2,$$$$\cos p - \cos q = -2\sin\frac{p + q}2\sin\frac{p - q}2,\qquad\sin p - \sin q = 2\cos\frac{p + q}2\sin\frac{p - q}2.$$</div>
<p>On les retrouve avec l'angle moitié : $\cos p + \cos q = \operatorname{Re}(e^{ip} + e^{iq}) = \operatorname{Re}\Big(2\cos\frac{p - q}2e^{i\frac{p + q}2}\Big)$.</p>
<p class="ml">Transformer un produit en somme</p>
$$\cos a\cos b = \frac12\big(\cos(a + b) + \cos(a - b)\big),\qquad\sin a\sin b = \frac12\big(\cos(a - b) - \cos(a + b)\big),\qquad\sin a\cos b = \frac12\big(\sin(a + b) + \sin(a - b)\big).$$

<h2 id="z-moivre">9. Exprimer $\cos(n\theta)$ en fonction de $\cos\theta$ (Moivre)</h2>
<ol>
<li>Écrire $\cos(n\theta) = \operatorname{Re}\big((\cos\theta + i\sin\theta)^n\big)$.</li>
<li>Développer avec le binôme de Newton, et calculer les puissances de $i$.</li>
<li>Garder la partie réelle (ou imaginaire), et remplacer $\sin^2\theta$ par $1 - \cos^2\theta$.</li>
</ol>
<p class="ml">Exemple : $\cos(3\theta)$ et $\sin(3\theta)$</p>
<p>On note $c = \cos\theta$ et $s = \sin\theta$. Ligne $n = 3$ du triangle : $1, 3, 3, 1$.</p>
$$(c + is)^3 = c^3 + 3c^2(is) + 3c(is)^2 + (is)^3 = c^3 + 3ic^2s - 3cs^2 - is^3 = \cB{(c^3 - 3cs^2)} + i\cR{(3c^2s - s^3)}.$$
$$\cos(3\theta) = c^3 - 3c(1 - c^2) = \cG{4\cos^3\theta - 3\cos\theta},\qquad\sin(3\theta) = 3(1 - s^2)s - s^3 = \cG{3\sin\theta - 4\sin^3\theta}.$$

<h2 id="z-lin">10. Linéariser</h2>
<p>Linéariser $\cos^n x\sin^m x$, c'est l'écrire comme une somme de $\cos(kx)$ et de $\sin(kx)$, sans puissance. C'est indispensable pour en trouver une primitive.</p>
<ol>
<li>Remplacer avec Euler : $\cos x = \frac{e^{ix} + e^{-ix}}2$ et $\sin x = \frac{e^{ix} - e^{-ix}}{2i}$.</li>
<li>Développer avec le binôme de Newton. S'il y a un produit, développer complètement les exponentielles.</li>
<li>Regrouper $e^{ikx}$ avec $e^{-ikx}$, en mettant toujours $e^{ikx}$ en premier.</li>
<li>Réutiliser Euler dans l'autre sens : $e^{ikx} + e^{-ikx} = 2\cos(kx)$ et $e^{ikx} - e^{-ikx} = 2i\sin(kx)$.</li>
</ol>
<p><b>Contrôle de parité</b> : si la fonction est paire, il ne reste que des cosinus ; si elle est impaire, que des sinus.</p>
<p class="ml">Exemple 1 : $\cos^3x$</p>
$$\cos^3x = \Big(\frac{e^{ix} + e^{-ix}}2\Big)^3 = \frac18\Big(e^{3ix} + 3e^{2ix}e^{-ix} + 3e^{ix}e^{-2ix} + e^{-3ix}\Big) = \frac18\Big(e^{3ix} + 3e^{ix} + 3e^{-ix} + e^{-3ix}\Big).$$
<p>On regroupe les exponentielles opposées :</p>
$$\cos^3x = \frac18\Big(\cB{\big(e^{3ix} + e^{-3ix}\big)} + 3\cR{\big(e^{ix} + e^{-ix}\big)}\Big) = \frac18\big(\cB{2\cos3x} + 3\cdot\cR{2\cos x}\big) = \cG{\frac14\cos3x + \frac34\cos x}.$$
<p>Application : $\int\cos^3x\,dx = \frac1{12}\sin3x + \frac34\sin x + C$.</p>
<p class="ml">Exemple 2 : $\sin^3x$</p>
<p>On note que $(2i)^3 = 8i^3 = -8i$.</p>
$$\sin^3x = \frac{\big(e^{ix} - e^{-ix}\big)^3}{(2i)^3} = \frac{e^{3ix} - 3e^{ix} + 3e^{-ix} - e^{-3ix}}{-8i}.$$
<p>On regroupe, avec $\cO{-3}$ en facteur pour garder $e^{ix}$ en premier :</p>
$$\sin^3x = \frac{\cB{\big(e^{3ix} - e^{-3ix}\big)}\cO{-3}\cR{\big(e^{ix} - e^{-ix}\big)}}{-8i} = \frac{\cB{2i\sin3x} - 3\cdot\cR{2i\sin x}}{-8i} = \cG{\frac34\sin x - \frac14\sin3x}.$$
<p class="ml">Exemple 3 : $\cos^2x\sin^2x$, un produit</p>
<p>On développe complètement avant de regrouper :</p>
$$\cos^2x\sin^2x = \frac{(e^{ix} + e^{-ix})^2(e^{ix} - e^{-ix})^2}{4\cdot(2i)^2} = \frac{\big((e^{ix} + e^{-ix})(e^{ix} - e^{-ix})\big)^2}{-16} = \frac{\big(e^{2ix} - e^{-2ix}\big)^2}{-16}.$$
$$= \frac{e^{4ix} - 2 + e^{-4ix}}{-16} = \frac{2\cos4x - 2}{-16} = \cG{\frac18 - \frac18\cos4x}.$$
<p>Plus rapide : $\cos x\sin x = \frac12\sin2x$, donc $\cos^2x\sin^2x = \frac14\sin^22x = \frac14\cdot\frac{1 - \cos4x}2$. On retrouve le même résultat.</p>
<p class="ml">Exemple 4 : $\cos^3x\sin^3x$</p>
$$\cos^3x\sin^3x = (\cos x\sin x)^3 = \frac18\sin^3(2x) = \frac18\Big(\frac34\sin2x - \frac14\sin6x\Big) = \cG{\frac3{32}\sin2x - \frac1{32}\sin6x}.$$
<p>On a réutilisé l'exemple 2 avec $2x$ à la place de $x$.</p>
<p class="ml">Les formules à connaître par cœur</p>
$$\cos^2x = \frac{1 + \cos2x}2,\qquad\sin^2x = \frac{1 - \cos2x}2,\qquad\cos x\sin x = \frac12\sin2x.$$
<div data-mlab="lin"></div>

<h2 id="z-rac2">11. Les racines carrées d'un complexe</h2>
<p>Un complexe $\Delta\neq0$ a exactement <b>deux</b> racines carrées, opposées : $\pm\delta$. La notation $\sqrt\Delta$ est <b>interdite</b> pour un complexe non réel positif.</p>
<p class="ml">Méthode 1 : par la forme exponentielle</p>
<p>Si $\Delta = re^{i\theta}$, les racines carrées sont $\pm\sqrt r\,e^{i\theta/2}$. Par exemple $\Delta = 4i = 4e^{i\pi/2}$ a pour racines $\pm2e^{i\pi/4} = \pm(\sqrt2 + i\sqrt2)$.</p>
<p class="ml">Méthode 2 : par la forme algébrique (quand l'angle n'est pas remarquable)</p>
<p>On cherche $\delta = x + iy$ avec $\delta^2 = \Delta = a + ib$. On a $\delta^2 = (x^2 - y^2) + 2ixy$, et $|\delta|^2 = |\Delta|$ donne une troisième équation :</p>
<div class="sbox">$$\left\{\begin{aligned}x^2 - y^2 &= a\quad(\text{parties réelles})\\x^2 + y^2 &= |\Delta|\quad(\text{modules})\\2xy &= b\quad(\text{parties imaginaires, pour le signe})\end{aligned}\right.$$</div>
<p class="ml">Exemple : les racines carrées de $\Delta = 3 + 4i$</p>
$$|\Delta| = \sqrt{3^2 + 4^2} = 5.\qquad\left\{\begin{aligned}x^2 - y^2 &= 3\\x^2 + y^2 &= 5\\2xy &= 4\end{aligned}\right.$$
<p>On ajoute puis on soustrait les deux premières lignes :</p>
$$2x^2 = 8\ \Longrightarrow\ x^2 = 4,\qquad2y^2 = 2\ \Longrightarrow\ y^2 = 1.$$
<p>Donc $x = \pm2$ et $y = \pm1$. La troisième ligne donne $xy = 2 > 0$ : $x$ et $y$ ont le <b>même signe</b>.</p>
$$\cG{\delta = 2 + i\ \text{ou}\ \delta = -2 - i}.\qquad\text{Contrôle}:\ (2 + i)^2 = 4 + 4i + i^2 = 3 + 4i.\ \checkmark$$
<div data-mlab="rac2"></div>

<h2 id="z-eq2">12. Les équations du second degré</h2>
<div class="sbox">$$az^2 + bz + c = 0\ (a\neq0),\quad\Delta = b^2 - 4ac,\quad\delta^2 = \Delta:\qquad z = \frac{-b\pm\delta}{2a}\quad\Big(\text{racine double}\ -\frac b{2a}\ \text{si}\ \Delta = 0\Big).$$</div>
<div class="sbox">$$\text{Somme et produit}:\ z_1 + z_2 = -\frac ba,\qquad z_1z_2 = \frac ca.$$</div>
<p class="ml">Exemple 1 : coefficients réels, $\Delta\lt0$</p>
$$z^2 - 2z + 5 = 0:\quad\Delta = 4 - 20 = -16 = (4i)^2,\quad z = \frac{2\pm4i}2 = \cV{1\pm2i}.$$
<p class="ml">Exemple 2 : coefficients complexes</p>
$$z^2 - 3z + 3 + i = 0.$$
<p><b>1. Le discriminant.</b></p>
$$\Delta = (-3)^2 - 4(3 + i) = 9 - 12 - 4i = -3 - 4i.$$
<p><b>2. Une racine carrée de $\Delta$</b> (méthode 2, avec $|\Delta| = \sqrt{9 + 16} = 5$) :</p>
$$\left\{\begin{aligned}x^2 - y^2 &= -3\\x^2 + y^2 &= 5\\2xy &= -4\end{aligned}\right.\ \Longrightarrow\ x^2 = 1,\ y^2 = 4,\ xy\lt0\ \Longrightarrow\ \delta = 1 - 2i.$$
<p><b>3. Les racines.</b></p>
$$z_1 = \frac{3 + (1 - 2i)}2 = \frac{4 - 2i}2 = \cV{2 - i},\qquad z_2 = \frac{3 - (1 - 2i)}2 = \frac{2 + 2i}2 = \cV{1 + i}.$$
<p><b>4. Contrôle</b> : $z_1 + z_2 = 3 = -\frac ba$ et $z_1z_2 = (2 - i)(1 + i) = 2 + 2i - i - i^2 = 3 + i = \frac ca$. $\checkmark$</p>
<p class="ml">Exemple 3 : avec la somme et le produit</p>
<p>Trouver deux complexes de somme $s$ et de produit $p$ revient à résoudre $z^2 - sz + p = 0$.</p>

<h2 id="z-racn">13. Les racines $n$-ièmes</h2>
<p class="ml">Les racines $n$-ièmes de l'unité</p>
<div class="sbox">$$z^n = 1\iff z\in\mathbb U_n = \Big\{\cV{e^{\frac{2ik\pi}n}} : k\in[\![0, n - 1]\!]\Big\},\qquad\sum_{k=0}^{n-1}e^{\frac{2ik\pi}n} = 0\ (n\geqslant2).$$</div>
<p>Il y en a exactement $n$. Ce sont les sommets d'un polygone régulier inscrit dans le cercle unité, avec un sommet en $1$.</p>
<p><b>Pourquoi la somme est nulle</b> : c'est une somme géométrique de raison $\omega = e^{2i\pi/n}\neq1$, et $\sum_{k=0}^{n-1}\omega^k = \frac{1 - \omega^n}{1 - \omega} = \frac{1 - 1}{1 - \omega} = 0$.</p>
<p class="ml">Le cas $n = 3$ : $j$</p>
$$j = e^{\frac{2i\pi}3} = -\frac12 + i\frac{\sqrt3}2,\qquad j^3 = 1,\qquad1 + j + j^2 = 0,\qquad\overline j = j^2 = \frac1j,\qquad\mathbb U_3 = \{1, j, j^2\}.$$
<p class="ml">Les racines $n$-ièmes d'un complexe $a = \cB re^{i\cR\theta}\neq0$</p>
<div class="sbox">$$z^n = a\iff z = \cB{r^{1/n}}\,e^{i\frac{\cR\theta + 2k\pi}n},\quad k\in[\![0, n - 1]\!].$$</div>
<p>On pose $z = \rho e^{i\varphi}$ et on identifie modules et arguments : $\rho^n = r$ et $n\varphi\equiv\theta\ [2\pi]$.</p>
<p class="ml">Exemple : $z^3 = 8i$</p>
<p><b>1.</b> $8i = 8e^{i\pi/2}$. On pose $z = \rho e^{i\varphi}$, donc $z^3 = \rho^3e^{3i\varphi}$.</p>
$$\left\{\begin{aligned}\rho^3 &= 8\\3\varphi &= \frac\pi2 + 2k\pi\end{aligned}\right.\iff\left\{\begin{aligned}\rho &= 2\\\varphi &= \frac\pi6 + \frac{2k\pi}3,\quad k\in\{0, 1, 2\}\end{aligned}\right.$$
<p><b>2.</b> Les trois racines :</p>
$$\begin{aligned}k = 0&:\ 2e^{i\pi/6} = 2\Big(\frac{\sqrt3}2 + \frac i2\Big) = \cV{\sqrt3 + i}\\k = 1&:\ 2e^{5i\pi/6} = 2\Big(-\frac{\sqrt3}2 + \frac i2\Big) = \cV{-\sqrt3 + i}\\k = 2&:\ 2e^{3i\pi/2} = \cV{-2i}\end{aligned}$$
<p><b>Contrôle</b> : la somme des trois racines vaut $\sqrt3 + i - \sqrt3 + i - 2i = 0$, comme pour tout triangle équilatéral centré en $0$. $\checkmark$</p>
<p><b>Astuce</b> : si $z_0$ est une racine, les autres sont $z_0\,\omega$ avec $\omega\in\mathbb U_n$.</p>
<div data-mlab="racn"></div>

<h2 id="z-geo">14. Un peu de géométrie</h2>
<p>Pour des points $A, B, C$ d'affixes $a, b, c$, avec $A\neq B$ et $A\neq C$ :</p>
<ul>
<li>$AB = |b - a|$ ;</li>
<li>l'angle orienté $(\overrightarrow{AB}, \overrightarrow{AC})\equiv\arg\frac{c - a}{b - a}\ [2\pi]$ ;</li>
<li>$A, B, C$ alignés $\iff\frac{c - a}{b - a}\in\mathbb R$ ;</li>
<li>$(AB)\perp(AC)\iff\frac{c - a}{b - a}\in i\mathbb R$ ;</li>
<li>$ABC$ équilatéral direct $\iff\frac{c - a}{b - a} = e^{i\pi/3}$.</li>
</ul>
<p class="ml">Exemple</p>
<p>Avec $a = 1$, $b = 2 + i$, $c = 2i$ : $\dfrac{c - a}{b - a} = \dfrac{-1 + 2i}{1 + i} = \dfrac{(-1 + 2i)(1 - i)}{2} = \dfrac{1 + 3i}2$. Ce nombre n'est ni réel ni imaginaire pur : les points ne sont ni alignés, ni en angle droit en $A$.</p>

<h2 id="z-enonce">15. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>Un quotient de complexes</b><span>Multiplier par le conjugué du dénominateur.</span></div>
<div><b>Une puissance $z^n$</b><span>Passer en forme exponentielle, puis $r^ne^{in\theta}$.</span></div>
<div><b>$z\in\mathbb U$</b><span>$|z| = 1$, $\overline z = \frac1z$, $z = e^{i\theta}$.</span></div>
<div><b>« Montrer que $w$ est réel / imaginaire pur »</b><span>Calculer $\overline w$ et comparer à $w$ ou à $-w$.</span></div>
<div><b>$1\pm e^{i\theta}$, $e^{ip}\pm e^{iq}$</b><span>Angle moitié. Attention au signe du cosinus pour le module.</span></div>
<div><b>$\sum\cos(k\theta)$, $\sum\sin(k\theta)$</b><span>Partie réelle ou imaginaire d'une somme géométrique, puis angle moitié.</span></div>
<div><b>$\cos^nx$, $\sin^nx$, et « primitive »</b><span>Linéariser avec Euler et le binôme.</span></div>
<div><b>$\cos(n\theta)$ « en fonction de $\cos\theta$ »</b><span>Moivre, binôme, partie réelle, $\sin^2 = 1 - \cos^2$.</span></div>
<div><b>« Racines carrées de $a + ib$ »</b><span>Système à trois équations avec $|\Delta|$, ou forme exponentielle.</span></div>
<div><b>$az^2 + bz + c = 0$ complexe</b><span>$\Delta$, puis une racine carrée $\delta$, jamais $\sqrt\Delta$. Contrôler avec somme et produit.</span></div>
<div><b>$z^n = a$</b><span>Forme exponentielle de $a$, $n$ racines de même module, angles espacés de $\frac{2\pi}n$.</span></div>
<div><b>$j$, $1 + j + j^2$</b><span>$j^3 = 1$, $1 + j + j^2 = 0$, $\overline j = j^2$.</span></div>
<div><b>Alignement, orthogonalité</b><span>Étudier $\frac{c - a}{b - a}$ : réel ou imaginaire pur.</span></div>
<div><b>Une inégalité sur des modules</b><span>Inégalité triangulaire, cas d'égalité $z = \lambda z'$ avec $\lambda\geqslant0$.</span></div>
</div>

<h2 id="z-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> $\operatorname{Im}(a + ib) = ib$ : faux, c'est $b$.</p>
<p><b>2.</b> Écrire $\sqrt{-3 - 4i}$ ou $\sqrt{-4} = 2i$ : la racine carrée ne s'applique qu'aux réels positifs.</p>
<p><b>3.</b> Prendre $\theta = \arctan\frac ba$ sans regarder le signe de $a$ : on se trompe de demi-plan.</p>
<p><b>4.</b> Une « forme exponentielle » avec un module négatif.</p>
<p><b>5.</b> $|z + z'| = |z| + |z'|$ en général : faux, c'est seulement une inégalité.</p>
<p><b>6.</b> Oublier le $i$ au dénominateur de $\sin x = \frac{e^{ix} - e^{-ix}}{2i}$, ou le signe de $(2i)^3 = -8i$.</p>
<p><b>7.</b> En linéarisant un produit, regrouper avant d'avoir développé les exponentielles.</p>
<p><b>8.</b> Ne donner qu'une racine carrée, ou que $n - 1$ racines $n$-ièmes.</p>
<p><b>9.</b> $\arg(z + z') = \arg z + \arg z'$ : faux, ça ne marche que pour le produit.</p>
<p><b>10.</b> Dans l'angle moitié, oublier que $\cos\frac\theta2$ peut être négatif.</p>
</div>

<h2 id="z-entrainement">S'entraîner</h2>
<div data-mlab="quizcpx"></div>

<h2 id="z-arbre">L'arbre des méthodes</h2>
<p>Choisis ce que tu veux faire, réponds aux questions et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Mettre $z$ sous une forme</div>
<div class="tq">Un quotient ?</div><a class="tl" href="#z-alg">oui : × conjugué du dénominateur</a><div class="tno">non</div>
<div class="tq">Une puissance $z^n$ ?</div><a class="tl" href="#z-exp">oui : forme exponentielle</a><div class="tno">non</div>
<div class="tq">$1\pm e^{i\theta}$, $e^{ip}\pm e^{iq}$ ?</div><a class="tl" href="#z-moitie">oui : angle moitié</a><div class="tno">non</div>
<a class="tl tend" href="#z-exp">$r = |z|$, puis $\cos\theta$, $\sin\theta$</a></div>
<div class="tb tR"><div class="tt">Trigonométrie</div>
<div class="tq">$\cos^nx$, $\sin^mx$ ?</div><a class="tl" href="#z-lin">oui : linéariser (Euler, binôme)</a><div class="tno">non</div>
<div class="tq">$\cos(n\theta)$ en puissances ?</div><a class="tl" href="#z-moivre">oui : Moivre</a><div class="tno">non</div>
<div class="tq">$\sum\cos(k\theta)$ ?</div><a class="tl" href="#z-moitie">oui : géométrique + angle moitié</a><div class="tno">non</div>
<a class="tl tend" href="#z-trigo">addition, somme ↔ produit</a></div>
<div class="tb tG"><div class="tt">Résoudre une équation</div>
<div class="tq">$z^2 = \Delta$ ?</div><a class="tl" href="#z-rac2">oui : système avec $|\Delta|$</a><div class="tno">non</div>
<div class="tq">$az^2 + bz + c = 0$ ?</div><a class="tl" href="#z-eq2">oui : $\Delta$, $\delta$, $\frac{-b\pm\delta}{2a}$</a><div class="tno">non</div>
<a class="tl tend" href="#z-racn">$z^n = a$ : $r^{1/n}e^{i\frac{\theta + 2k\pi}n}$</a></div>
<div class="tb tO"><div class="tt">Montrer une propriété</div>
<div class="tq">$w$ réel ou imaginaire pur ?</div><a class="tl" href="#z-conj">oui : comparer $\overline w$ et $\pm w$</a><div class="tno">non</div>
<div class="tq">$z\in\mathbb U$ ?</div><a class="tl" href="#z-u">oui : $\overline z = \frac1z$</a><div class="tno">non</div>
<a class="tl tend" href="#z-mod">inégalité : module, inégalité triangulaire</a></div>
<div class="tb tV"><div class="tt">Géométrie</div>
<div class="tq">Distance ?</div><a class="tl" href="#z-geo">oui : $|b - a|$</a><div class="tno">angle</div>
<div class="tq">Alignés ou perpendiculaires ?</div><a class="tl" href="#z-geo">$\frac{c - a}{b - a}$ réel ou imaginaire pur</a><div class="tno">non</div>
<a class="tl tend" href="#z-racn">polygone régulier : $\mathbb U_n$</a></div>
</div>
</div>
`,
"Intégration": R`
<nav class="msum"><a href="#i-not">Notations</a><a href="#i-escalier">Escalier et CPM</a><a href="#i-prop">Propriétés</a><a href="#i-fond">Théorème fondamental</a><a href="#i-prim">Primitives</a><a href="#i-ipp">Intégration par parties</a><a href="#i-chgt">Changement de variable</a><a href="#i-bioche">Règles de Bioche</a><a href="#i-riemann">Sommes de Riemann</a><a href="#i-taylor">Taylor</a><a href="#i-cplx">Fonctions complexes</a><a href="#i-enonce">Ce que l'énoncé te donne</a><a href="#i-erreurs">Erreurs</a><a href="#i-entrainement">S'entraîner</a><a href="#i-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la fonction qu'on dérive ($u$). <span class="kR">rouge</span> : la fonction qu'on intègre ($v'$). <span class="kO">orange</span> : le changement de variable et les nouvelles bornes. <span class="kV">violet</span> : les majorations. <span class="kG">vert</span> : le résultat.</p>
<p>Ce qui n'est pas au programme de Sup est signalé par <span class="hp">hors programme</span>. Ces parties sont traitées quand même, car on les retrouve dans des sujets où l'énoncé guide le calcul.</p>

<h2 id="i-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Segment</td><td>$[a, b]$, $a\lt b$</td><td>On intègre sur un segment : fermé et borné.</td></tr>
<tr><td>Continues par morceaux</td><td>$\mathcal C_{pm}([a, b], \mathbb K)$</td><td>Un nombre fini de points de discontinuité, avec des limites finies à gauche et à droite.</td></tr>
<tr><td>Intégrale</td><td>$\displaystyle\int_a^bf = \int_a^bf(t)\,dt$</td><td>$t$ est une variable muette.</td></tr>
<tr><td>Bornes renversées</td><td>$\displaystyle\int_b^af = -\int_a^bf$</td><td>Et $\int_a^af = 0$.</td></tr>
<tr><td>Crochet</td><td>$[F(t)]_a^b = F(b) - F(a)$</td><td>$F$ primitive de $f$.</td></tr>
</table>

<h2 id="i-escalier">2. Fonctions en escalier et continues par morceaux</h2>
<ul>
<li>Une <b>subdivision</b> de $[a, b]$ : $a = x_0\lt x_1\lt\cdots\lt x_n = b$. Son <b>pas</b> est $\max_k(x_{k+1} - x_k)$.</li>
<li>$\varphi$ est <b>en escalier</b> s'il existe une subdivision telle que $\varphi$ soit constante, égale à $c_k$, sur chaque $]x_k, x_{k+1}[$. Alors $\displaystyle\int_a^b\varphi = \sum_{k=0}^{n-1}c_k(x_{k+1} - x_k)$ : la somme des aires des rectangles.</li>
<li>Toute fonction continue par morceaux est approchée par des fonctions en escalier : pour tout $\varepsilon > 0$, il existe $\varphi, \psi$ en escalier avec $\varphi\leqslant f\leqslant\psi$ et $\psi - \varphi\leqslant\varepsilon$. C'est ce qui définit $\int f$.</li>
</ul>
<p class="ml">Exemple : la partie entière</p>
$$\int_0^3\lfloor t\rfloor\,dt = 0\times(1 - 0) + 1\times(2 - 1) + 2\times(3 - 2) = \cG3.$$

<h2 id="i-prop">3. Les propriétés de l'intégrale</h2>
<div class="sbox">$$\int_a^b(\lambda f + \mu g) = \lambda\int_a^bf + \mu\int_a^bg,\qquad\int_a^bf = \int_a^cf + \int_c^bf,\qquad f\leqslant g\ \Longrightarrow\ \int_a^bf\leqslant\int_a^bg\quad(a\leqslant b).$$</div>
<div class="sbox">$$\Big|\int_a^bf\Big|\leqslant\int_a^b|f|\leqslant(b - a)\sup_{[a, b]}|f|,\qquad\Big|\int_a^bfg\Big|\leqslant\sup_{[a, b]}|f|\int_a^b|g|.$$</div>
<div class="sbox">$$f\ \textbf{continue},\ f\geqslant0\ \text{et}\ \int_a^bf = 0\ \Longrightarrow\ f = 0\ \text{sur}\ [a, b].$$</div>
<p class="ml piege">Piège</p>
<p>La croissance demande $a\leqslant b$, et le dernier résultat demande que $f$ soit <b>continue</b> : une fonction nulle sauf en un point a une intégrale nulle.</p>
<p class="ml">Exemple : la limite de $I_n = \int_0^1\frac{x^n}{1 + x}\,dx$</p>
<p><b>Étape 1 : encadrer la fonction.</b> Pour $x\in[0, 1]$, $1 + x\geqslant1$, donc :</p>
$$0\leqslant\frac{x^n}{1 + x}\leqslant\cV{x^n}.$$
<p><b>Étape 2 : intégrer l'encadrement</b> (les bornes sont dans l'ordre, $0\leqslant1$) :</p>
$$0\leqslant I_n\leqslant\int_0^1\cV{x^n}\,dx = \Big[\frac{x^{n+1}}{n + 1}\Big]_0^1 = \frac1{n + 1}.$$
<p><b>Étape 3 : conclure</b> par encadrement : $\cG{I_n\xrightarrow[n\to+\infty]{}0}$.</p>
<p class="ml">Exemple : l'inégalité de Cauchy-Schwarz</p>
$$\Big(\int_a^bfg\Big)^2\leqslant\Big(\int_a^bf^2\Big)\Big(\int_a^bg^2\Big).$$
<p>Preuve : $P(\lambda) = \int_a^b(f + \lambda g)^2\geqslant0$ pour tout $\lambda$. C'est un polynôme de degré 2 en $\lambda$, toujours positif, donc son discriminant est négatif ou nul.</p>

<h2 id="i-fond">4. Le théorème fondamental</h2>
<div class="sbox">$$f\ \text{continue sur}\ I,\ a\in I:\qquad F(x) = \int_a^xf(t)\,dt\ \text{est l'unique primitive de}\ f\ \text{qui s'annule en}\ a,\qquad F' = f.$$</div>
<div class="sbox">$$\int_a^bf(t)\,dt = F(b) - F(a)\quad\text{pour toute primitive}\ F\ \text{de}\ f,\qquad\int_a^bf'(t)\,dt = f(b) - f(a)\quad(f\ \text{de classe}\ \mathcal C^1).$$</div>
<p class="ml">Dériver une intégrale dont les bornes bougent</p>
<p>On introduit une primitive $F$ de $f$, on écrit l'intégrale avec $F$, puis on dérive des fonctions composées :</p>
$$G(x) = \int_{u(x)}^{v(x)}f(t)\,dt = F(v(x)) - F(u(x))\ \Longrightarrow\ G'(x) = f(v(x))\,v'(x) - f(u(x))\,u'(x).$$
<p class="ml">Exemple : $G(x) = \int_x^{2x}e^{-t^2}\,dt$</p>
<p>$t\mapsto e^{-t^2}$ est continue sur $\mathbb R$ : soit $F$ une primitive. Alors $G(x) = F(2x) - F(x)$ et :</p>
$$G'(x) = \cO2\,F'(2x) - F'(x) = 2e^{-(2x)^2} - e^{-x^2} = \cG{2e^{-4x^2} - e^{-x^2}}.$$
<p class="ml piege">Piège</p>
<p>On ne dérive pas sous le signe intégrale : $\frac{d}{dx}\int_0^xf(t)\,dt = f(x)$, et non $\int_0^xf'(t)\,dt$. Si la variable $x$ est aussi dans la fonction ($\int_0^xx\,f(t)\,dt$), on la sort d'abord : $x\int_0^xf(t)\,dt$.</p>

<h2 id="i-prim">5. Les primitives à reconnaître</h2>
<table class="mtab">
<tr><th>Forme</th><th>Primitive</th><th>Forme</th><th>Primitive</th></tr>
<tr><td>$u'u^\alpha$, $\alpha\neq-1$</td><td>$\frac{u^{\alpha+1}}{\alpha + 1}$</td><td>$\frac{u'}u$</td><td>$\ln|u|$</td></tr>
<tr><td>$u'e^u$</td><td>$e^u$</td><td>$\frac{u'}{\sqrt u}$</td><td>$2\sqrt u$</td></tr>
<tr><td>$u'\cos u$</td><td>$\sin u$</td><td>$u'\sin u$</td><td>$-\cos u$</td></tr>
<tr><td>$\frac1{1 + x^2}$</td><td>$\arctan x$</td><td>$\frac1{x^2 + a^2}$</td><td>$\frac1a\arctan\frac xa$</td></tr>
<tr><td>$\frac1{\sqrt{1 - x^2}}$</td><td>$\arcsin x$</td><td>$1 + \tan^2x = \frac1{\cos^2x}$</td><td>$\tan x$</td></tr>
</table>
<p class="ml">Exemple 1 : reconnaître $u'u^\alpha$</p>
$$\int_0^1x\sqrt{1 + x^2}\,dx = \frac12\int_0^1\cB{2x}(1 + x^2)^{1/2}\,dx = \frac12\Big[\frac{(1 + x^2)^{3/2}}{3/2}\Big]_0^1 = \frac13\big(2\sqrt2 - 1\big).$$
<p class="ml">Exemple 2 : un trinôme sans racine réelle, on passe à la forme canonique</p>
$$x^2 + 2x + 5 = (x + 1)^2 + 4 = (x + 1)^2 + 2^2.$$
$$\int_{-1}^1\frac{dx}{x^2 + 2x + 5} = \int_{-1}^1\frac{dx}{(x + 1)^2 + 2^2} = \Big[\frac12\arctan\frac{x + 1}2\Big]_{-1}^1 = \frac12\big(\arctan1 - \arctan0\big) = \cG{\frac\pi8}.$$
<p class="ml">Exemple 3 : un trinôme avec deux racines, on décompose</p>
$$\frac1{x^2 - 1} = \frac1{(x - 1)(x + 1)} = \frac12\Big(\frac1{x - 1} - \frac1{x + 1}\Big),\qquad\int_2^3\frac{dx}{x^2 - 1} = \frac12\Big[\ln\Big|\frac{x - 1}{x + 1}\Big|\Big]_2^3 = \frac12\Big(\ln\frac12 - \ln\frac13\Big) = \cG{\frac12\ln\frac32}.$$

<h2 id="i-ipp">6. L'intégration par parties</h2>
<div class="sbox">$$\int_a^b\cB{u(t)}\,\cR{v'(t)}\,dt = \Big[\cB u\,\cR v\Big]_a^b - \int_a^b\cB{u'(t)}\,\cR{v(t)}\,dt\qquad(u, v\ \text{de classe}\ \mathcal C^1\ \text{sur}\ [a, b]).$$</div>
<p class="ml">Quoi dériver, quoi intégrer</p>
<ul>
<li><b>On dérive</b> ce qui se simplifie en dérivant : $\cB{\ln}$, $\cB{\arctan}$, $\cB{\arcsin}$, un $\cB{\text{polynôme}}$.</li>
<li><b>On intègre</b> ce qui ne se complique pas : $\cR{e^{at}}$, $\cR{\cos}$, $\cR{\sin}$, $\cR{t^n}$ (quand il y a un $\ln$).</li>
<li>Toujours écrire les quatre fonctions avant de calculer : $u, u', v', v$.</li>
</ul>
<p class="ml">Exemple 1 : $\int_0^1t\,e^t\,dt$</p>
$$\left\{\begin{aligned}\cB{u(t)} &= \cB t & \cB{u'(t)} &= \cB1\\\cR{v'(t)} &= \cR{e^t} & \cR{v(t)} &= \cR{e^t}\end{aligned}\right.\qquad\int_0^1t\,e^t\,dt = \Big[\cB t\,\cR{e^t}\Big]_0^1 - \int_0^1\cB1\cdot\cR{e^t}\,dt = e - \big[e^t\big]_0^1 = e - (e - 1) = \cG1.$$
<p class="ml">Exemple 2 : $\int_1^e\ln t\,dt$, avec un « 1 » caché</p>
$$\left\{\begin{aligned}\cB{u(t)} &= \cB{\ln t} & \cB{u'(t)} &= \cB{\tfrac1t}\\\cR{v'(t)} &= \cR1 & \cR{v(t)} &= \cR t\end{aligned}\right.\qquad\int_1^e\ln t\,dt = \Big[\cR t\,\cB{\ln t}\Big]_1^e - \int_1^e\cB{\frac1t}\cdot\cR t\,dt = e - (e - 1) = \cG1.$$
<p>Plus généralement, une primitive de $\ln$ est $t\ln t - t$.</p>
<p class="ml">Exemple 3 : $\int_0^1\arctan t\,dt$</p>
$$\left\{\begin{aligned}\cB u &= \cB{\arctan t} & \cB{u'} &= \cB{\tfrac1{1 + t^2}}\\\cR{v'} &= \cR1 & \cR v &= \cR t\end{aligned}\right.\qquad\int_0^1\arctan t\,dt = \big[t\arctan t\big]_0^1 - \int_0^1\frac{t}{1 + t^2}\,dt.$$
$$= \frac\pi4 - \frac12\big[\ln(1 + t^2)\big]_0^1 = \cG{\frac\pi4 - \frac{\ln2}2}.$$
<p class="ml">Exemple 4 : deux IPP qui reviennent au départ</p>
<p>$I = \int_0^\pi e^t\cos t\,dt$. On dérive $\cos$ deux fois, en intégrant $e^t$ :</p>
$$I = \big[e^t\cos t\big]_0^\pi + \int_0^\pi e^t\sin t\,dt = (-e^\pi - 1) + \Big(\big[e^t\sin t\big]_0^\pi - \int_0^\pi e^t\cos t\,dt\Big) = -e^\pi - 1 + 0 - I.$$
$$2I = -e^\pi - 1\qquad\Longrightarrow\qquad\cG{I = -\frac{e^\pi + 1}2}.$$
<p>On peut aussi passer en complexe (§11).</p>
<p class="ml">Exemple 5 : une relation de récurrence (intégrales de Wallis)</p>
<p>$W_n = \int_0^{\pi/2}\sin^nt\,dt$. On écrit $\sin^{n+2} = \sin^{n+1}\cdot\sin$ :</p>
$$\left\{\begin{aligned}\cB u &= \cB{\sin^{n+1}t} & \cB{u'} &= \cB{(n + 1)\cos t\sin^nt}\\\cR{v'} &= \cR{\sin t} & \cR v &= \cR{-\cos t}\end{aligned}\right.$$
$$W_{n+2} = \underbrace{\big[-\cos t\sin^{n+1}t\big]_0^{\pi/2}}_{= 0} + (n + 1)\int_0^{\pi/2}\cos^2t\,\sin^nt\,dt = (n + 1)\int_0^{\pi/2}(1 - \sin^2t)\sin^nt\,dt = (n + 1)(W_n - W_{n+2}).$$
$$(n + 2)W_{n+2} = (n + 1)W_n\qquad\Longrightarrow\qquad\cG{W_{n+2} = \frac{n + 1}{n + 2}W_n}.$$
<div data-mlab="ipp"></div>

<h2 id="i-chgt">7. Le changement de variable</h2>
<div class="sbox">$$\int_{\varphi(\alpha)}^{\varphi(\beta)}f(x)\,dx = \int_\alpha^\beta f(\varphi(t))\,\varphi'(t)\,dt\qquad(\varphi\ \text{de classe}\ \mathcal C^1,\ f\ \text{continue}).$$</div>
<p class="ml">La méthode en 4 étapes</p>
<ol>
<li>Poser $\cO{x = \varphi(t)}$ (ou $\cO{t = \psi(x)}$) et vérifier que c'est $\mathcal C^1$.</li>
<li>Calculer $\cO{dx = \varphi'(t)\,dt}$.</li>
<li>Changer les <b>bornes</b>.</li>
<li>Remplacer <b>tous</b> les $x$ : il ne doit plus en rester un seul.</li>
</ol>
<p class="ml">Exemple 1 : $\int_0^1\sqrt{1 - x^2}\,dx$ avec $x = \sin t$</p>
<p><b>1–2.</b> $\cO{x = \sin t}$, $t\in\big[0, \frac\pi2\big]$, $\mathcal C^1$. Donc $\cO{dx = \cos t\,dt}$.</p>
<p><b>3.</b> $x = 0\iff t = \cO0$ et $x = 1\iff t = \cO{\frac\pi2}$.</p>
<p><b>4.</b> Sur $\big[0, \frac\pi2\big]$, $\cos t\geqslant0$, donc $\sqrt{1 - \sin^2t} = |\cos t| = \cos t$ :</p>
$$\int_0^1\sqrt{1 - x^2}\,dx = \int_{\cO0}^{\cO{\pi/2}}\cos t\cdot\cos t\,dt = \int_0^{\pi/2}\frac{1 + \cos2t}2\,dt = \Big[\frac t2 + \frac{\sin2t}4\Big]_0^{\pi/2} = \cG{\frac\pi4}.$$
<p>C'est l'aire d'un quart de disque de rayon $1$. $\checkmark$</p>
<p class="ml">Exemple 2 : $\int_0^1\frac{dx}{1 + e^x}$ avec $t = e^x$</p>
<p><b>1–2.</b> $\cO{t = e^x}$, donc $x = \ln t$ et $\cO{dx = \frac{dt}t}$. <b>3.</b> $x = 0\mapsto t = \cO1$ et $x = 1\mapsto t = \cO e$.</p>
$$\int_0^1\frac{dx}{1 + e^x} = \int_{\cO1}^{\cO e}\frac{1}{(1 + t)}\cdot\frac{dt}t = \int_1^e\Big(\frac1t - \frac1{1 + t}\Big)dt = \big[\ln t - \ln(1 + t)\big]_1^e = \cG{1 - \ln(1 + e) + \ln2}.$$
<p>On a décomposé : $\frac1{t(1 + t)} = \frac1t - \frac1{1 + t}$.</p>
<p class="ml">Exemple 3 : symétries (sans calcul)</p>
<ul>
<li>$f$ impaire : $\int_{-a}^af = 0$ (poser $x = -t$). $f$ paire : $\int_{-a}^af = 2\int_0^af$.</li>
<li>$f$ périodique de période $T$ : $\int_a^{a+T}f = \int_0^Tf$.</li>
<li>$\int_0^{\pi/2}f(\sin t)\,dt = \int_0^{\pi/2}f(\cos t)\,dt$ (poser $t = \frac\pi2 - u$).</li>
</ul>

<h2 id="i-bioche">8. Les règles de Bioche <span class="hp">hors programme</span></h2>
<p>Pour une fraction en $\sin$ et $\cos$, elles disent quel changement de variable donne une fraction rationnelle. On regarde $g(x) = f(x)\,dx$, <b>avec le $dx$</b>, et on teste trois transformations :</p>
<table class="mtab">
<tr><th>Si $g$ est invariant par</th><th>on pose</th><th>car</th></tr>
<tr><td>$x\mapsto-x$</td><td>$\cO{t = \cos x}$</td><td>$\cos(-x) = \cos x$</td></tr>
<tr><td>$x\mapsto\pi - x$</td><td>$\cO{t = \sin x}$</td><td>$\sin(\pi - x) = \sin x$</td></tr>
<tr><td>$x\mapsto\pi + x$</td><td>$\cO{t = \tan x}$</td><td>$\tan(\pi + x) = \tan x$</td></tr>
<tr><td>aucune des trois</td><td>$\cO{t = \tan\frac x2}$</td><td>$\sin x = \frac{2t}{1 + t^2}$, $\cos x = \frac{1 - t^2}{1 + t^2}$, $dx = \frac{2\,dt}{1 + t^2}$</td></tr>
</table>
<p>Moyen mnémotechnique : on pose la fonction qui est elle-même invariante par la transformation.</p>
<p class="ml">Exemple 1 : $\int\frac{dx}{\sin x}$</p>
<p><b>Test.</b> $g(-x) = \frac{d(-x)}{\sin(-x)} = \frac{-dx}{-\sin x} = g(x)$ : on pose $\cO{t = \cos x}$, $dt = -\sin x\,dx$.</p>
<p><b>On fait apparaître $\sin x\,dx$</b> en multipliant en haut et en bas par $\sin x$ :</p>
$$\int\frac{dx}{\sin x} = \int\frac{\sin x\,dx}{\sin^2x} = \int\frac{\sin x\,dx}{1 - \cos^2x} = \int\frac{-dt}{1 - t^2} = -\frac12\int\Big(\frac1{1 - t} + \frac1{1 + t}\Big)dt.$$
$$= -\frac12\ln\Big|\frac{1 + t}{1 - t}\Big| = \frac12\ln\Big(\frac{1 - \cos x}{1 + \cos x}\Big) = \cG{\ln\Big|\tan\frac x2\Big|}.$$
<p class="ml">Exemple 2 : $\int_0^{\pi/2}\frac{\cos x}{1 + \sin^2x}\,dx$</p>
<p><b>Test.</b> $g(\pi - x) = \frac{\cos(\pi - x)\,d(\pi - x)}{1 + \sin^2(\pi - x)} = \frac{(-\cos x)(-dx)}{1 + \sin^2x} = g(x)$ : on pose $\cO{t = \sin x}$, $dt = \cos x\,dx$, bornes $\cO0$ et $\cO1$.</p>
$$\int_0^{\pi/2}\frac{\cos x\,dx}{1 + \sin^2x} = \int_{\cO0}^{\cO1}\frac{dt}{1 + t^2} = \big[\arctan t\big]_0^1 = \cG{\frac\pi4}.$$
<p class="ml">Exemple 3 : $\int_0^{\pi/4}\frac{dx}{1 + \cos^2x}$</p>
<p><b>Test.</b> $g(-x) = \frac{-dx}{1 + \cos^2x}\neq g$, mais $g(\pi + x) = \frac{dx}{1 + \cos^2x} = g(x)$ : on pose $\cO{t = \tan x}$.</p>
$$dt = (1 + \tan^2x)\,dx = (1 + t^2)\,dx,\qquad\cos^2x = \frac1{1 + \tan^2x} = \frac1{1 + t^2},\qquad1 + \cos^2x = \frac{2 + t^2}{1 + t^2}.$$
$$\int_0^{\pi/4}\frac{dx}{1 + \cos^2x} = \int_{\cO0}^{\cO1}\frac{1 + t^2}{2 + t^2}\cdot\frac{dt}{1 + t^2} = \int_0^1\frac{dt}{t^2 + (\sqrt2)^2} = \Big[\frac1{\sqrt2}\arctan\frac t{\sqrt2}\Big]_0^1 = \cG{\frac1{\sqrt2}\arctan\frac1{\sqrt2}}.$$
<p class="ml">Exemple 4 : aucune règle, $t = \tan\frac x2$</p>
<p>$\int_0^{\pi/2}\frac{dx}{2 + \cos x}$ : aucune des trois transformations ne laisse $g$ invariant. On pose $\cO{t = \tan\frac x2}$, bornes $\cO0$ et $\cO1$ :</p>
$$2 + \cos x = 2 + \frac{1 - t^2}{1 + t^2} = \frac{2 + 2t^2 + 1 - t^2}{1 + t^2} = \frac{3 + t^2}{1 + t^2},\qquad dx = \frac{2\,dt}{1 + t^2}.$$
$$\int_0^{\pi/2}\frac{dx}{2 + \cos x} = \int_0^1\frac{1 + t^2}{3 + t^2}\cdot\frac{2\,dt}{1 + t^2} = \Big[\frac2{\sqrt3}\arctan\frac t{\sqrt3}\Big]_0^1 = \frac2{\sqrt3}\cdot\frac\pi6 = \cG{\frac\pi{3\sqrt3}}.$$

<h2 id="i-riemann">9. Les sommes de Riemann</h2>
<div class="sbox">$$f\in\mathcal C_{pm}([a, b]):\qquad\frac{b - a}n\sum_{k=0}^{n-1}f\Big(a + k\,\frac{b - a}n\Big)\xrightarrow[n\to+\infty]{}\int_a^bf.\qquad\text{Sur}\ [0, 1]:\ \frac1n\sum_{k=1}^nf\Big(\frac kn\Big)\to\int_0^1f.$$</div>
<p class="ml">Reconnaître une somme de Riemann</p>
<ol>
<li>Sortir un facteur $\frac1n$.</li>
<li>Écrire le reste <b>uniquement avec $\frac kn$</b> : c'est $f\big(\frac kn\big)$.</li>
<li>Vérifier les bornes de $k$ ($0$ à $n - 1$, ou $1$ à $n$ : même limite).</li>
</ol>
<p class="ml">Exemple 1 : $S_n = \sum_{k=1}^n\frac n{n^2 + k^2}$</p>
<p>On factorise le dénominateur par $n^2$ :</p>
$$\frac n{n^2 + k^2} = \frac n{n^2\big(1 + (k/n)^2\big)} = \cO{\frac1n}\cdot\frac1{1 + (k/n)^2}\qquad\Longrightarrow\qquad S_n = \frac1n\sum_{k=1}^nf\Big(\frac kn\Big),\quad f(x) = \frac1{1 + x^2}.$$
$$S_n\xrightarrow[n\to+\infty]{}\int_0^1\frac{dx}{1 + x^2} = \big[\arctan x\big]_0^1 = \cG{\frac\pi4}.$$
<p class="ml">Exemple 2 : $T_n = \sum_{k=1}^n\frac1{n + k}$</p>
$$\frac1{n + k} = \frac1n\cdot\frac1{1 + k/n}\qquad\Longrightarrow\qquad T_n\to\int_0^1\frac{dx}{1 + x} = \cG{\ln2}.$$
<p class="ml">Exemple 3 : un produit, on passe au $\ln$</p>
$$P_n = \Big(\prod_{k=1}^n\Big(1 + \frac kn\Big)\Big)^{1/n}:\qquad\ln P_n = \frac1n\sum_{k=1}^n\ln\Big(1 + \frac kn\Big)\to\int_0^1\ln(1 + x)\,dx = 2\ln2 - 1.$$
<p>Donc $P_n\to e^{2\ln2 - 1} = \cG{\frac4e}$ (l'intégrale se calcule par parties, avec la primitive $(1 + x)\ln(1 + x) - x$).</p>
<p><b>Vitesse</b> : si $f$ est lipschitzienne de constante $K$, l'erreur est majorée par $\frac{K(b - a)^2}{2n}$.</p>
<p class="ml">La méthode des trapèzes <span class="hp">hors programme</span></p>
$$T_n = \frac{b - a}n\Big[\frac{f(a) + f(b)}2 + \sum_{k=1}^{n-1}f(x_k)\Big],\qquad\Big|T_n - \int_a^bf\Big|\leqslant\frac{(b - a)^3}{12n^2}\sup|f''|\quad(f\ \text{de classe}\ \mathcal C^2).$$
<p>Elle remplace les rectangles par des trapèzes : l'erreur est en $\frac1{n^2}$ au lieu de $\frac1n$.</p>
<div data-mlab="riemann"></div>

<h2 id="i-taylor">10. Les formules de Taylor</h2>
<div class="sbox">$$\textbf{Reste intégral}\ (f\ \text{de classe}\ \mathcal C^{n+1}):\quad f(b) = \sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(b - a)^k + \int_a^b\frac{(b - t)^n}{n!}f^{(n+1)}(t)\,dt.$$</div>
<div class="sbox">$$\textbf{Taylor-Lagrange}:\ \Big|f(b) - \sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(b - a)^k\Big|\leqslant\cV{\frac{|b - a|^{n+1}}{(n + 1)!}\sup|f^{(n+1)}|}.\qquad\textbf{Young}:\ f(x) = \sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x - a)^k + o\big((x - a)^n\big).$$</div>
<ul>
<li><b>Reste intégral</b> : pour une égalité exacte, ou pour le <b>signe</b> du reste.</li>
<li><b>Taylor-Lagrange</b> : pour une <b>majoration</b> valable partout (inégalité globale).</li>
<li><b>Young</b> : pour une <b>limite</b> ou un équivalent (information seulement au voisinage de $a$).</li>
</ul>
<p class="ml">Exemple 1 : le signe du reste ($e^x\geqslant1 + x + \frac{x^2}2$ pour $x\geqslant0$)</p>
<p>Reste intégral pour $\exp$ à l'ordre $2$ entre $0$ et $x$ :</p>
$$e^x = 1 + x + \frac{x^2}2 + \int_0^x\frac{(x - t)^2}{2}\,e^t\,dt.$$
<p>Pour $0\leqslant t\leqslant x$, la fonction intégrée est positive et les bornes sont dans l'ordre : l'intégrale est positive, d'où $\cG{e^x\geqslant1 + x + \frac{x^2}2}$.</p>
<p class="ml">Exemple 2 : une majoration ($|\sin x - x|\leqslant\frac{|x|^3}6$)</p>
<p>Taylor-Lagrange pour $\sin$ entre $0$ et $x$, à l'ordre $2$. On a $\sin(0) = 0$, $\sin'(0) = 1$, $\sin''(0) = 0$, et $|\sin'''| = |{-\cos}|\leqslant\cV1$ :</p>
$$\Big|\sin x - \Big(0 + x + 0\cdot\frac{x^2}2\Big)\Big|\leqslant\frac{|x|^3}{3!}\times\cV1 = \cG{\frac{|x|^3}6}.$$
<p class="ml">Exemple 3 : $e = \sum_{k=0}^{+\infty}\frac1{k!}$</p>
<p>Taylor-Lagrange pour $\exp$ entre $0$ et $1$ : toutes les dérivées valent $\exp$, et $\sup_{[0, 1]}e^t = e$.</p>
$$\Big|e - \sum_{k=0}^n\frac1{k!}\Big|\leqslant\frac{1^{n+1}}{(n + 1)!}\cdot\cV e\xrightarrow[n\to+\infty]{}0\qquad\Longrightarrow\qquad\cG{\sum_{k=0}^n\frac1{k!}\to e}.$$

<h2 id="i-cplx">11. Intégrer une fonction à valeurs complexes</h2>
<div class="sbox">$$\int_a^bf = \int_a^b\operatorname{Re}f + i\int_a^b\operatorname{Im}f,\qquad\int_a^be^{\lambda t}\,dt = \Big[\frac{e^{\lambda t}}\lambda\Big]_a^b\quad(\lambda\in\mathbb C^*).$$</div>
<p>Linéarité, Chasles, IPP, changement de variable et $\big|\int f\big|\leqslant\int|f|$ restent vrais. La positivité et la croissance n'ont pas de sens.</p>
<p class="ml">Exemple : $\int_0^\pi e^t\cos t\,dt$ en une ligne</p>
$$\int_0^\pi e^t\cos t\,dt = \operatorname{Re}\int_0^\pi e^{(1 + i)t}\,dt = \operatorname{Re}\Big[\frac{e^{(1 + i)t}}{1 + i}\Big]_0^\pi = \operatorname{Re}\Big(\frac{e^\pi e^{i\pi} - 1}{1 + i}\Big) = \operatorname{Re}\Big(\frac{-(e^\pi + 1)(1 - i)}{2}\Big) = \cG{-\frac{e^\pi + 1}2}.$$
<p>On retrouve le résultat des deux IPP du §6.</p>

<h2 id="i-enonce">12. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>$\int P(t)e^{at}$, $\int P(t)\cos t$, $\int t^n\ln t$</b><span>IPP : dériver le polynôme (ou le $\ln$).</span></div>
<div><b>$\int\ln$, $\int\arctan$, $\int\arcsin$</b><span>IPP avec $v' = 1$.</span></div>
<div><b>« Relation entre $I_n$ et $I_{n+1}$ »</b><span>IPP qui fait passer de $n$ à $n + 1$ (ou $n + 2$).</span></div>
<div><b>« Limite de $I_n$ »</b><span>Encadrer la fonction intégrée, puis intégrer l'encadrement.</span></div>
<div><b>$\sqrt{1 - x^2}$, $\sqrt{a^2 - x^2}$</b><span>Changement $x = \sin t$ (ou $a\sin t$).</span></div>
<div><b>$e^x$ partout dans une fraction</b><span>Changement $t = e^x$, puis décomposer.</span></div>
<div><b>Fraction en $\sin$, $\cos$</b><span>Règles de Bioche (hors programme, souvent guidées par l'énoncé).</span></div>
<div><b>$\frac1{ax^2 + bx + c}$</b><span>Racines : décomposer. Pas de racine : forme canonique et $\arctan$.</span></div>
<div><b>« Limite de $\sum_kf(k, n)$ »</b><span>Sortir $\frac1n$, faire apparaître $\frac kn$ : somme de Riemann.</span></div>
<div><b>« Limite de $\prod_k\dots$ »</b><span>Passer au $\ln$, puis somme de Riemann.</span></div>
<div><b>$\int_{u(x)}^{v(x)}f(t)\,dt$ à étudier</b><span>Introduire une primitive $F$, puis dériver.</span></div>
<div><b>Une inégalité avec $e^x$, $\sin x$…</b><span>Taylor : reste intégral (signe) ou Lagrange (majoration).</span></div>
<div><b>$\int e^{at}\cos(bt)$</b><span>Passer en complexe avec $e^{(a + ib)t}$.</span></div>
<div><b>$f$ continue, $f\geqslant0$, $\int f = 0$</b><span>Alors $f = 0$.</span></div>
</div>

<h2 id="i-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Oublier de changer les bornes dans un changement de variable.</p>
<p><b>2.</b> Laisser des $x$ après le changement de variable, ou oublier le $dx = \varphi'(t)\,dt$.</p>
<p><b>3.</b> $\sqrt{\cos^2t} = \cos t$ sans vérifier le signe.</p>
<p><b>4.</b> Intégrer une inégalité avec des bornes dans le mauvais ordre.</p>
<p><b>5.</b> Dans l'IPP, se tromper de signe devant la deuxième intégrale.</p>
<p><b>6.</b> Dériver $\int_0^{x^2}f(t)\,dt$ en $f(x^2)$ : il manque le facteur $2x$.</p>
<p><b>7.</b> Conclure $f = 0$ de $\int f = 0$ sans continuité ni positivité.</p>
<p><b>8.</b> Dans une somme de Riemann, oublier le facteur $\frac1n$ ou se tromper d'intervalle.</p>
<p><b>9.</b> Utiliser Taylor-Young pour une inégalité valable sur tout un intervalle.</p>
<p><b>10.</b> $\int\frac{dx}{x^2 + 4} = \arctan\frac x2$ : il manque le facteur $\frac12$.</p>
</div>

<h2 id="i-entrainement">S'entraîner</h2>
<div data-mlab="quizint"></div>

<h2 id="i-arbre">L'arbre des méthodes</h2>
<p>Choisis ce que tu veux faire, réponds aux questions et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Calculer $\int_a^bf$</div>
<div class="tq">Primitive usuelle ($u'u^\alpha$, $\frac{u'}u$…) ?</div><a class="tl" href="#i-prim">oui : $[F]_a^b$</a><div class="tno">non</div>
<div class="tq">Produit polynôme × ($\exp$, $\cos$) ou $\ln$, $\arctan$ ?</div><a class="tl" href="#i-ipp">oui : intégration par parties</a><div class="tno">non</div>
<div class="tq">$\sqrt{1 - x^2}$, $e^x$, une composée ?</div><a class="tl" href="#i-chgt">oui : changement de variable</a><div class="tno">non</div>
<div class="tq">Fraction en $\sin$, $\cos$ ?</div><a class="tl" href="#i-bioche">oui : Bioche (hors programme)</a><div class="tno">non</div>
<a class="tl tend" href="#i-cplx">$e^{at}\cos bt$ : passer en complexe</a></div>
<div class="tb tR"><div class="tt">Étudier une suite $I_n$</div>
<div class="tq">Limite demandée ?</div><a class="tl" href="#i-prop">oui : encadrer, puis intégrer</a><div class="tno">non</div>
<div class="tq">Lien entre $I_n$ et $I_{n+1}$ ?</div><a class="tl" href="#i-ipp">oui : IPP (Wallis)</a><div class="tno">non</div>
<a class="tl tend" href="#i-prop">monotonie : signe de $I_{n+1} - I_n$</a></div>
<div class="tb tG"><div class="tt">Limite d'une somme</div>
<div class="tq">Facteur $\frac1n$ et $\frac kn$ ?</div><a class="tl" href="#i-riemann">oui : somme de Riemann</a><div class="tno">non</div>
<div class="tq">Un produit ?</div><a class="tl" href="#i-riemann">oui : passer au $\ln$</a><div class="tno">non</div>
<a class="tl tend" href="#i-riemann">factoriser par $n$ pour faire apparaître $\frac kn$</a></div>
<div class="tb tO"><div class="tt">Dériver une intégrale</div>
<div class="tq">Bornes qui dépendent de $x$ ?</div><a class="tl" href="#i-fond">oui : $F(v(x)) - F(u(x))$</a><div class="tno">non</div>
<a class="tl tend" href="#i-fond">$\frac{d}{dx}\int_a^xf = f(x)$</a></div>
<div class="tb tV"><div class="tt">Une inégalité</div>
<div class="tq">Égalité exacte ou signe du reste ?</div><a class="tl" href="#i-taylor">oui : reste intégral</a><div class="tno">non</div>
<div class="tq">Majoration sur un intervalle ?</div><a class="tl" href="#i-taylor">oui : Taylor-Lagrange</a><div class="tno">non</div>
<a class="tl tend" href="#i-prop">$|\int f|\leqslant\int|f|$, Cauchy-Schwarz</a></div>
</div>
</div>
`,
"Séries numériques": R`
<nav class="msum"><a href="#s-not">Notations</a><a href="#s-gross">Divergence grossière</a><a href="#s-ref">Séries de référence</a><a href="#s-pos">Termes positifs</a><a href="#s-int">Série-intégrale</a><a href="#s-abs">Absolue convergence</a><a href="#s-alt">Séries alternées</a><a href="#s-dal">D'Alembert</a><a href="#s-somm">Sommation des comparaisons</a><a href="#s-calc">Calculer la somme</a><a href="#s-plan">Le plan d'attaque</a><a href="#s-enonce">Ce que l'énoncé te donne</a><a href="#s-erreurs">Erreurs</a><a href="#s-entrainement">S'entraîner</a><a href="#s-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : le terme général $u_n$. <span class="kO">orange</span> : la série de référence à laquelle on compare. <span class="kR">rouge</span> : les termes qui s'annulent. <span class="kG">vert</span> : la conclusion (CV ou DV). <span class="kV">violet</span> : la somme.</p>
<p>Le programme de Sup s'arrête à la comparaison et à l'absolue convergence. Les parties marquées <span class="hp">programme de Spé</span> ou <span class="hp">hors programme</span> sont traitées quand même : on les rencontre dès la Sup dans les sujets guidés.</p>

<h2 id="s-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Série de terme général $u_n$</td><td>$\sum u_n$ ou $\sum_{n\geqslant n_0}u_n$</td><td>C'est la suite des sommes partielles.</td></tr>
<tr><td>Somme partielle</td><td>$S_n = \sum_{k=n_0}^nu_k$</td><td>Étudier la série, c'est étudier $(S_n)$.</td></tr>
<tr><td>Somme (si CV)</td><td>$S = \sum_{n=n_0}^{+\infty}u_n = \lim S_n$</td><td>On ne l'écrit <b>qu'après</b> avoir prouvé la convergence.</td></tr>
<tr><td>Reste (si CV)</td><td>$R_n = \sum_{k=n+1}^{+\infty}u_k = S - S_n$</td><td>$R_n\to0$.</td></tr>
<tr><td>Nature</td><td>convergente (CV) ou divergente (DV)</td><td>Elle ne dépend pas des premiers termes.</td></tr>
</table>
<ul>
<li>$\sum u_n$ et $\sum v_n$ convergent $\Rightarrow\sum(\lambda u_n + \mu v_n)$ converge.</li>
<li>Convergente + divergente = divergente. Mais divergente + divergente peut converger.</li>
</ul>

<h2 id="s-gross">2. La divergence grossière</h2>
<div class="sbox">$$\sum u_n\ \text{converge}\ \Longrightarrow\ u_n\xrightarrow[n\to+\infty]{}0.\qquad\text{Donc}:\ u_n\not\to0\ \Longrightarrow\ \sum u_n\ \cG{\text{diverge grossièrement}}.$$</div>
<p class="ml piege">Piège</p>
<p>La réciproque est fausse : $\frac1n\to0$ et pourtant $\sum\frac1n$ diverge. Le test $u_n\to0$ ne sert qu'à prouver une <b>divergence</b>.</p>
<p class="ml">Exemple : la série harmonique diverge</p>
<p><b>Étape 1.</b> Pour $k\geqslant1$, $\ln(1 + x)\leqslant x$ donne $\ln\big(1 + \frac1k\big)\leqslant\frac1k$, soit $\frac1k\geqslant\ln(k + 1) - \ln k$.</p>
<p><b>Étape 2.</b> On somme de $k = 1$ à $n$, et ça télescope :</p>
$$H_n = \sum_{k=1}^n\frac1k\geqslant\sum_{k=1}^n\big(\ln(k + 1) - \ln k\big) = \ln(n + 1) - \ln1 = \ln(n + 1)\xrightarrow[n\to+\infty]{}+\infty.$$
<p><b>Étape 3.</b> $H_n\to+\infty$ : $\sum\frac1n$ $\cG{\text{diverge}}$ (sans diverger grossièrement).</p>
<p class="ml">Exemple : $u_n = \cos\frac1n$</p>
<p>$u_n\to\cos0 = 1\neq0$ : $\sum u_n$ $\cG{\text{diverge grossièrement}}$.</p>

<h2 id="s-ref">3. Les séries de référence</h2>
<div class="sbox">$$\textbf{Géométrique}:\ \sum q^n\ \text{CV}\iff|q|\lt1,\qquad\sum_{n=0}^{+\infty}q^n = \frac1{1 - q},\qquad\sum_{n=n_0}^{+\infty}q^n = \frac{q^{n_0}}{1 - q}.$$</div>
<div class="sbox">$$\textbf{Riemann}:\ \sum_{n\geqslant1}\frac1{n^\alpha}\ \text{CV}\iff\alpha > 1.\qquad\textbf{Exponentielle}:\ \sum_{n=0}^{+\infty}\frac{x^n}{n!} = e^x\ \text{pour tout}\ x\in\mathbb R.$$</div>
<div class="sbox">$$\textbf{Télescopique}:\ \sum(u_{n+1} - u_n)\ \text{CV}\iff(u_n)\ \text{converge, et alors}\ \sum_{n=0}^{+\infty}(u_{n+1} - u_n) = \lim u_n - u_0.$$</div>
<p class="ml">Exemple 1 : une géométrique qui ne commence pas à 0</p>
$$\sum_{n=2}^{+\infty}\frac1{3^n} = \frac{(1/3)^2}{1 - 1/3} = \frac{1/9}{2/3} = \cV{\frac16}.$$
<p class="ml">Exemple 2 : une télescopique</p>
$$u_n = \frac1{n(n - 1)} = \frac1{n - 1} - \frac1n\ (n\geqslant2):\quad S_N = \sum_{n=2}^N\Big(\frac1{n - 1} - \frac1n\Big) = 1 - \cR{\frac12} + \cR{\frac12} - \cdots - \frac1N = 1 - \frac1N\to\cV1.$$
<p class="ml">Exemple 3 : une télescopique qui diverge</p>
$$\sum_{n\geqslant1}\ln\Big(1 + \frac1n\Big) = \sum_{n\geqslant1}\big(\ln(n + 1) - \ln n\big):\quad S_N = \ln(N + 1)\to+\infty,\quad\cG{\text{DV}}.$$

<h2 id="s-pos">4. Les séries à termes positifs : comparer</h2>
<div class="sbox">$$u_n\geqslant0:\quad(S_n)\ \text{est croissante, donc}\ \sum u_n\ \text{CV}\iff(S_n)\ \text{est majorée}.$$</div>
<p class="ml">Les quatre critères (pour $u_n, v_n\geqslant0$ à partir d'un rang)</p>
<table class="mtab">
<tr><th>Hypothèse</th><th>Si $\sum\cO{v_n}$ converge</th><th>Si $\sum\cB{u_n}$ diverge</th></tr>
<tr><td>$u_n\leqslant v_n$</td><td>$\sum u_n$ converge</td><td>$\sum v_n$ diverge</td></tr>
<tr><td>$u_n = O(v_n)$</td><td>$\sum u_n$ converge</td><td>$\sum v_n$ diverge</td></tr>
<tr><td>$u_n = o(v_n)$</td><td>$\sum u_n$ converge</td><td>$\sum v_n$ diverge</td></tr>
<tr><td>$u_n\sim v_n$</td><td colspan="2">$\sum u_n$ et $\sum v_n$ ont <b>la même nature</b></td></tr>
</table>
<p class="ml piege">Piège</p>
<p>Ces critères demandent des termes <b>positifs</b> (au moins à partir d'un rang). Avec un équivalent, c'est le signe de $v_n$ qui le garantit.</p>
<p class="ml">La méthode</p>
<ol>
<li>Vérifier que $u_n\geqslant0$ (à partir d'un rang).</li>
<li>Trouver un <b>équivalent simple</b> de $u_n$ : terme dominant, développement limité.</li>
<li>Comparer à une série de référence, le plus souvent Riemann.</li>
</ol>
<p class="ml">Exemple 1 : une fraction</p>
$$\cB{u_n = \frac{n + 3}{n^3 + 1}}\geqslant0,\qquad u_n\sim\frac{n}{n^3} = \cO{\frac1{n^2}}:\quad\text{Riemann}\ \alpha = 2 > 1,\quad\cG{\text{CV}}.$$
<p class="ml">Exemple 2 : un développement limité</p>
$$\cB{u_n = 1 - \cos\frac1n}\geqslant0.\qquad\cos x = 1 - \frac{x^2}2 + o(x^2)\ \Longrightarrow\ u_n = \frac1{2n^2} + o\Big(\frac1{n^2}\Big)\sim\cO{\frac1{2n^2}}:\quad\cG{\text{CV}}.$$
<p class="ml">Exemple 3 : un équivalent qui donne la divergence</p>
$$\cB{u_n = \sin\frac1n}\geqslant0\ (\text{car}\ \tfrac1n\in]0, \pi]),\qquad u_n\sim\cO{\frac1n}:\quad\text{Riemann}\ \alpha = 1,\quad\cG{\text{DV}}.$$
<p class="ml">Exemple 4 : la règle « $n^\alpha u_n$ »</p>
<p>Quand il n'y a pas d'équivalent simple, on montre que $n^\alpha u_n\to0$ avec $\alpha > 1$ : alors $u_n = o\big(\frac1{n^\alpha}\big)$ et la série converge.</p>
$$\cB{u_n = \frac{\ln n}{n^2}}:\qquad n^{3/2}u_n = \frac{\ln n}{\sqrt n}\to0\ (\text{croissances comparées})\ \Longrightarrow\ u_n = o\Big(\cO{\frac1{n^{3/2}}}\Big),\ \frac32 > 1:\ \cG{\text{CV}}.$$
$$\cB{u_n = e^{-\sqrt n}}:\qquad n^2u_n = n^2e^{-\sqrt n} = m^4e^{-m}\ (m = \sqrt n\to+\infty)\to0\ \Longrightarrow\ u_n = o\Big(\cO{\frac1{n^2}}\Big):\ \cG{\text{CV}}.$$
<p>Pour montrer une divergence, on montre que $n\,u_n\to+\infty$ : alors $u_n\geqslant\frac1n$ à partir d'un rang.</p>

<h2 id="s-int">5. La comparaison série-intégrale</h2>
<p>$f$ continue, <b>positive et décroissante</b> sur $[n_0, +\infty[$. Pour $k\geqslant n_0 + 1$ :</p>
<div class="sbox">$$\int_k^{k+1}f(t)\,dt\leqslant f(k)\leqslant\int_{k-1}^kf(t)\,dt.$$</div>
<p>La première inégalité vient de $f(t)\leqslant f(k)$ pour $t\in[k, k + 1]$, et la seconde de $f(k)\leqslant f(t)$ pour $t\in[k - 1, k]$. Sur un dessin, ce sont des rectangles de largeur $1$ sous la courbe et au-dessus.</p>
<p class="ml">Exemple 1 : un équivalent de $H_n = \sum_{k=1}^n\frac1k$</p>
<p>Avec $f(t) = \frac1t$, on somme l'encadrement :</p>
$$\sum_{k=1}^n\int_k^{k+1}\frac{dt}t\leqslant H_n\leqslant1 + \sum_{k=2}^n\int_{k-1}^k\frac{dt}t\iff\ln(n + 1)\leqslant H_n\leqslant1 + \ln n.$$
<p>On divise par $\ln n$ : les deux bornes tendent vers $1$, donc $\cG{H_n\sim\ln n}$.</p>
<p class="ml">Exemple 2 : $\sum\frac1{n\ln n}$ (série de Bertrand, <span class="hp">hors programme</span> comme résultat)</p>
<p>$f(t) = \frac1{t\ln t}$ est positive et décroissante sur $[2, +\infty[$. Par le même encadrement :</p>
$$\sum_{k=2}^n\frac1{k\ln k}\geqslant\int_2^{n+1}\frac{dt}{t\ln t} = \big[\ln(\ln t)\big]_2^{n+1} = \ln\ln(n + 1) - \ln\ln2\to+\infty:\quad\cG{\text{DV}}.$$
<p>Résultat général (Bertrand) : $\sum\frac1{n^\alpha(\ln n)^\beta}$ converge si et seulement si $\alpha > 1$, ou $\alpha = 1$ et $\beta > 1$. À redémontrer avec série-intégrale.</p>

<h2 id="s-abs">6. L'absolue convergence (termes de signe quelconque)</h2>
<div class="sbox">$$\sum|u_n|\ \text{converge}\ \Longrightarrow\ \sum u_n\ \text{converge, et}\ \Big|\sum_{n=0}^{+\infty}u_n\Big|\leqslant\sum_{n=0}^{+\infty}|u_n|.$$</div>
<p>Valable aussi pour des complexes. On étudie $\sum|u_n|$ avec les outils des termes positifs.</p>
<p class="ml">Exemple 1</p>
$$\cB{u_n = \frac{\sin n}{n^2}}:\qquad|u_n|\leqslant\cO{\frac1{n^2}},\ \text{Riemann}\ \alpha = 2\ \Longrightarrow\ \sum|u_n|\ \text{CV}\ \Longrightarrow\ \cG{\sum u_n\ \text{CV}}.$$
<p class="ml">Exemple 2 : une série complexe</p>
$$\cB{u_n = \frac{(1 + i)^n}{3^n}}:\qquad|u_n| = \Big(\frac{\sqrt2}3\Big)^n,\ \frac{\sqrt2}3\lt1\ \Longrightarrow\ \cG{\text{CV absolument}},\qquad\sum_{n=0}^{+\infty}u_n = \frac1{1 - \frac{1 + i}3} = \cV{\frac3{2 - i}}.$$
<p class="ml piege">Piège</p>
<p>La réciproque est fausse : $\sum\frac{(-1)^n}n$ converge (§7) mais $\sum\frac1n$ diverge. On dit qu'elle est <b>semi-convergente</b>.</p>

<h2 id="s-alt">7. Les séries alternées <span class="hp">programme de Spé</span></h2>
<div class="sbox">$$\textbf{Critère spécial}:\ (a_n)\ \text{décroissante et}\ a_n\to0\ \Longrightarrow\ \sum(-1)^na_n\ \text{converge},\quad|R_n|\leqslant a_{n+1},\quad R_n\ \text{a le signe de}\ (-1)^{n+1}.$$</div>
<p class="ml">Exemple 1 : $\sum\frac{(-1)^n}n$</p>
<p>$a_n = \frac1n$ est décroissante et tend vers $0$ : $\cG{\text{CV}}$. Mais $\sum\frac1n$ diverge : la convergence n'est pas absolue.</p>
<p class="ml">Exemple 2 : le piège du développement limité</p>
$$\cB{u_n = \ln\Big(1 + \frac{(-1)^n}{\sqrt n}\Big)}\quad(n\geqslant2).$$
<p>$u_n$ n'est pas de signe constant et $|u_n|\sim\frac1{\sqrt n}$ : pas d'absolue convergence. On développe avec $\ln(1 + x) = x - \frac{x^2}2 + O(x^3)$ et $x = \frac{(-1)^n}{\sqrt n}$ :</p>
$$u_n = \underbrace{\frac{(-1)^n}{\sqrt n}}_{\text{CV (critère spécial)}} - \underbrace{\frac1{2n}}_{\text{DV}} + \underbrace{O\Big(\frac1{n^{3/2}}\Big)}_{\text{CV absolument}}.$$
<p>Somme de deux séries convergentes et d'une divergente : $\sum u_n$ $\cG{\text{diverge}}$, alors que $u_n\sim\frac{(-1)^n}{\sqrt n}$. Avec des termes de signe variable, <b>un équivalent ne suffit pas</b>.</p>

<h2 id="s-dal">8. La règle de d'Alembert <span class="hp">programme de Spé</span></h2>
<div class="sbox">$$u_n > 0,\quad\frac{u_{n+1}}{u_n}\to\ell:\qquad\ell\lt1\Rightarrow\cG{\text{CV}},\qquad\ell > 1\Rightarrow\cG{\text{DV grossièrement}},\qquad\ell = 1\Rightarrow\text{on ne peut rien dire}.$$</div>
<p>Elle est faite pour les <b>factorielles et les puissances $n$-ièmes</b>. Pour les fractions et les puissances de $n$, on trouve $\ell = 1$ : utiliser Riemann.</p>
<p class="ml">Exemple 1 : $u_n = \frac{n^2}{2^n}$</p>
$$\frac{u_{n+1}}{u_n} = \frac{(n + 1)^2}{2^{n+1}}\cdot\frac{2^n}{n^2} = \frac12\Big(\frac{n + 1}n\Big)^2\to\frac12\lt1:\quad\cG{\text{CV}}.$$
<p class="ml">Exemple 2 : $u_n = \frac{n!}{n^n}$</p>
$$\frac{u_{n+1}}{u_n} = \frac{(n + 1)!}{(n + 1)^{n+1}}\cdot\frac{n^n}{n!} = \frac{(n + 1)\,n^n}{(n + 1)^{n+1}} = \Big(\frac n{n + 1}\Big)^n = \Big(1 + \frac1n\Big)^{-n}.$$
$$\Big(1 + \frac1n\Big)^{-n} = e^{-n\ln(1 + 1/n)} = e^{-n(\frac1n + o(\frac1n))} = e^{-1 + o(1)}\to\frac1e\lt1:\quad\cG{\text{CV}}.$$
<p class="ml">La règle de Cauchy <span class="hp">hors programme</span></p>
<p>Si $\sqrt[n]{u_n}\to\ell$ : $\ell\lt1$ donne CV, $\ell > 1$ donne DV, $\ell = 1$ ne permet pas de conclure. Utile quand tout est à la puissance $n$ :</p>
$$u_n = \Big(\frac n{2n + 1}\Big)^n:\qquad\sqrt[n]{u_n} = \frac n{2n + 1}\to\frac12\lt1:\quad\cG{\text{CV}}.$$

<h2 id="s-somm">9. Sommation des relations de comparaison <span class="hp">programme de Spé</span></h2>
<p>Pour $v_n\geqslant0$ :</p>
<div class="sbox">$$\sum v_n\ \text{DV et}\ u_n\sim v_n\ \Longrightarrow\ \sum_{k=0}^nu_k\sim\sum_{k=0}^nv_k,\qquad\sum v_n\ \text{CV et}\ u_n\sim v_n\ \Longrightarrow\ \sum_{k=n+1}^{+\infty}u_k\sim\sum_{k=n+1}^{+\infty}v_k.$$</div>
<p>Même chose avec $o$ et $O$. Divergence : on compare les <b>sommes partielles</b> ; convergence : on compare les <b>restes</b>.</p>
<p class="ml">Exemple : le reste de $\sum\frac1{k^2}$</p>
<p>$\frac1{k^2}\sim\frac1{k(k - 1)} = \frac1{k - 1} - \frac1k$, termes positifs, série convergente. On compare les restes, et celui de droite télescope :</p>
$$R_n = \sum_{k=n+1}^{+\infty}\frac1{k^2}\sim\sum_{k=n+1}^{+\infty}\Big(\frac1{k - 1} - \frac1k\Big) = \frac1n:\qquad\cG{R_n\sim\frac1n}.$$

<h2 id="s-calc">10. Calculer la somme</h2>
<p>On ne connaît la somme que pour quelques familles : télescopique, géométrique, exponentielle (et leurs dérivées). On ramène $u_n$ à l'une d'elles.</p>
<p class="ml">Exemple 1 : décomposer pour télescoper</p>
$$\cB{u_n = \frac1{n(n + 1)(n + 2)}} = \frac12\Big(\frac1{n(n + 1)} - \frac1{(n + 1)(n + 2)}\Big).$$
<p>On le vérifie en réduisant au même dénominateur : $\frac{(n + 2) - n}{n(n + 1)(n + 2)} = \frac2{n(n + 1)(n + 2)}$. C'est une télescopique avec $w_n = \frac1{n(n + 1)}\to0$ :</p>
$$\sum_{n=1}^{+\infty}u_n = \frac12\big(w_1 - \lim w_n\big) = \frac12\cdot\frac1{1\times2} = \cV{\frac14}.$$
<p class="ml">Exemple 2 : se ramener à l'exponentielle</p>
$$\sum_{n=0}^{+\infty}\frac{n + 1}{n!} = \sum_{n=1}^{+\infty}\frac{n}{n!} + \sum_{n=0}^{+\infty}\frac1{n!} = \sum_{n=1}^{+\infty}\frac1{(n - 1)!} + e\ \underset{\cO{m = n - 1}}{=}\ \sum_{m=0}^{+\infty}\frac1{m!} + e = \cV{2e}.$$
<p>On a utilisé $\frac n{n!} = \frac1{(n - 1)!}$ pour $n\geqslant1$ (le terme $n = 0$ est nul), puis un décalage d'indice.</p>
<p class="ml">Exemple 3 : dériver la série géométrique</p>
<p>Pour $|x|\lt1$, $\sum_{n=1}^{+\infty}nx^{n-1} = \frac1{(1 - x)^2}$ (on l'admet ici, c'est le cours de Spé sur les séries entières). Avec $x = \frac12$ :</p>
$$\sum_{n=1}^{+\infty}\frac n{2^n} = \frac12\sum_{n=1}^{+\infty}n\Big(\frac12\Big)^{n-1} = \frac12\cdot\frac1{(1/2)^2} = \cV2.$$

<h2 id="s-plan">11. Le plan d'attaque, dans l'ordre</h2>
<ol>
<li><b>$u_n\to0$ ?</b> Sinon : divergence grossière, c'est fini.</li>
<li><b>Une série de référence</b> déguisée : géométrique, télescopique, Riemann, exponentielle ?</li>
<li><b>Signe constant</b> (à partir d'un rang) : un équivalent, puis Riemann. Sinon, $n^\alpha u_n\to0$.</li>
<li><b>Factorielles, puissances $n$-ièmes</b> : d'Alembert.</li>
<li><b>$f(n)$ avec $f$ décroissante</b> et une primitive connue : série-intégrale.</li>
<li><b>Signe variable</b> : absolue convergence d'abord ; sinon critère spécial ou développement limité.</li>
</ol>

<h2 id="s-enonce">12. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Nature de $\sum u_n$ »</b><span>Suivre le plan du §11 dans l'ordre.</span></div>
<div><b>« Montrer que la série converge et calculer sa somme »</b><span>Télescopage, géométrique ou exponentielle. Travailler sur $S_N$, puis $N\to+\infty$.</span></div>
<div><b>Une fraction rationnelle en $n$</b><span>Équivalent : quotient des termes de plus haut degré, puis Riemann.</span></div>
<div><b>$\sin$, $\cos$, $\ln$, $e$ de $\frac1n$</b><span>Développement limité pour trouver l'équivalent.</span></div>
<div><b>$\ln n$, $e^{-\sqrt n}$ (pas d'équivalent simple)</b><span>Règle $n^\alpha u_n\to0$ avec $\alpha > 1$.</span></div>
<div><b>$n!$, $a^n$, $n^n$</b><span>D'Alembert.</span></div>
<div><b>$(-1)^n$</b><span>Absolue convergence, puis critère spécial, puis développement limité.</span></div>
<div><b>« Équivalent de $\sum_{k=1}^n\dots$ »</b><span>Série-intégrale, ou sommation des équivalents.</span></div>
<div><b>« Encadrer $\sum f(k)$ »</b><span>$f$ monotone : $\int_k^{k+1}f\leqslant f(k)\leqslant\int_{k-1}^kf$.</span></div>
<div><b>« Montrer que $u_n - \ln n$ converge »</b><span>Étudier la série télescopique $\sum(u_{n+1} - u_n)$.</span></div>
<div><b>Termes complexes</b><span>Étudier $\sum|u_n|$.</span></div>
<div><b>« Majorer le reste »</b><span>Séries alternées : $|R_n|\leqslant a_{n+1}$. Positives : série-intégrale.</span></div>
</div>

<h2 id="s-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Conclure à la convergence parce que $u_n\to0$.</p>
<p><b>2.</b> Écrire $\sum_{n=0}^{+\infty}u_n$ avant d'avoir prouvé la convergence.</p>
<p><b>3.</b> Utiliser un équivalent avec des termes de signe variable.</p>
<p><b>4.</b> Oublier de vérifier la positivité avant de comparer.</p>
<p><b>5.</b> Appliquer d'Alembert à $\frac1{n^2}$ : on trouve $1$ et on ne peut rien conclure.</p>
<p><b>6.</b> Confondre $\sum\frac1{n^\alpha}$ (Riemann, $\alpha > 1$) et $\sum q^n$ (géométrique, $|q|\lt1$).</p>
<p><b>7.</b> Mal calculer la somme d'une géométrique qui ne commence pas à $n = 0$.</p>
<p><b>8.</b> Dans un télescopage, oublier la limite du dernier terme.</p>
<p><b>9.</b> Utiliser la série-intégrale sans vérifier que $f$ est décroissante.</p>
<p><b>10.</b> Croire que divergente + divergente diverge toujours.</p>
</div>

<h2 id="s-entrainement">S'entraîner</h2>
<div data-mlab="nature"></div>
<div data-mlab="partielles"></div>
<div data-mlab="quizser"></div>

<h2 id="s-arbre">L'arbre des méthodes</h2>
<p>Choisis ce que tu veux faire, réponds aux questions et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Nature de $\sum u_n$</div>
<div class="tq">$u_n\not\to0$ ?</div><a class="tl" href="#s-gross">oui : divergence grossière</a><div class="tno">non</div>
<div class="tq">Signe constant ?</div><a class="tl" href="#s-pos">oui : équivalent, puis Riemann</a><div class="tno">non</div>
<div class="tq">$\sum|u_n|$ converge ?</div><a class="tl" href="#s-abs">oui : CV absolument</a><div class="tno">non</div>
<div class="tq">$(-1)^na_n$, $a_n\searrow0$ ?</div><a class="tl" href="#s-alt">oui : critère spécial (Spé)</a><div class="tno">non</div>
<a class="tl tend" href="#s-alt">développement limité : CV + DV + CV abs</a></div>
<div class="tb tR"><div class="tt">Pas d'équivalent simple</div>
<div class="tq">$n!$, $a^n$, $n^n$ ?</div><a class="tl" href="#s-dal">oui : d'Alembert (Spé)</a><div class="tno">non</div>
<div class="tq">$f(n)$, $f$ décroissante ?</div><a class="tl" href="#s-int">oui : série-intégrale</a><div class="tno">non</div>
<a class="tl tend" href="#s-pos">$n^\alpha u_n\to0$ avec $\alpha > 1$</a></div>
<div class="tb tG"><div class="tt">Calculer la somme</div>
<div class="tq">Fraction en $n$ ?</div><a class="tl" href="#s-calc">oui : décomposer, télescoper</a><div class="tno">non</div>
<div class="tq">$q^n$ ?</div><a class="tl" href="#s-ref">oui : $\frac{q^{n_0}}{1 - q}$</a><div class="tno">non</div>
<a class="tl tend" href="#s-calc">$\frac{x^n}{n!}$ : exponentielle</a></div>
<div class="tb tO"><div class="tt">Équivalent de $S_n$ ou $R_n$</div>
<div class="tq">$u_n = f(n)$, $f$ monotone ?</div><a class="tl" href="#s-int">oui : encadrer par des intégrales</a><div class="tno">non</div>
<a class="tl tend" href="#s-somm">sommer les équivalents (Spé)</a></div>
<div class="tb tV"><div class="tt">Majorer une somme</div>
<div class="tq">Série alternée ?</div><a class="tl" href="#s-alt">oui : $|R_n|\leqslant a_{n+1}$</a><div class="tno">non</div>
<a class="tl tend" href="#s-abs">$|\sum u_n|\leqslant\sum|u_n|$</a></div>
</div>
</div>
`,
"Analyse asymptotique": R`
<nav class="msum"><a href="#l-not">Notations</a><a href="#l-equiv">Équivalents</a><a href="#l-croiss">Croissances comparées</a><a href="#l-dl">Développements limités</a><a href="#l-usuels">DL usuels</a><a href="#l-ops">Opérations</a><a href="#l-ordre">Choisir l'ordre</a><a href="#l-lim">Limites</a><a href="#l-geo">Tangente, asymptote</a><a href="#l-suites">Suites</a><a href="#l-enonce">Ce que l'énoncé te donne</a><a href="#l-erreurs">Erreurs</a><a href="#l-entrainement">S'entraîner</a><a href="#l-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : le terme principal (celui qui compte). <span class="kR">rouge</span> : ce qu'on jette, les termes au-delà de l'ordre et les $o(\cdot)$. <span class="kO">orange</span> : la substitution qu'on fait ($u = \dots$, $x = a + h$). <span class="kV">violet</span> : les coefficients des DL usuels. <span class="kG">vert</span> : le résultat.</p>

<h2 id="l-not">1. Les notations du programme</h2>
<p>Au voisinage de $a$ (réel ou $\pm\infty$), avec $g$ qui ne s'annule pas près de $a$ (sauf peut-être en $a$) :</p>
<table class="mtab">
<tr><th>Notation</th><th>Se lit</th><th>Définition pratique</th></tr>
<tr><td>$f = o(g)$</td><td>$f$ est négligeable devant $g$</td><td>$\dfrac fg\to0$</td></tr>
<tr><td>$f = O(g)$</td><td>$f$ est dominée par $g$</td><td>$\dfrac fg$ est bornée</td></tr>
<tr><td>$f\sim g$</td><td>$f$ est équivalente à $g$</td><td>$\dfrac fg\to1$, ou $f = g + o(g)$</td></tr>
</table>
<ul>
<li>$o(1)$ veut dire « tend vers $0$ », et $O(1)$ « bornée ».</li>
<li>$x^3 = o(x^2)$ en $0$, mais $x^2 = o(x^3)$ en $+\infty$ : <b>on précise toujours le point</b>.</li>
<li>Règles : $o(g) + o(g) = o(g)$, $\lambda\,o(g) = o(g)$, $f\cdot o(g) = o(fg)$, $o(o(g)) = o(g)$. Mais $o(g) - o(g) = o(g)$, pas $0$.</li>
</ul>

<h2 id="l-equiv">2. Les équivalents</h2>
<p class="ml">Équivalents usuels en $0$ (avec $u(x)\to0$, on remplace $x$ par $u$)</p>
<div class="mrefl">
<div><b>$\sin u\sim u$</b><span>$\tan u\sim u$, $\arcsin u\sim u$, $\arctan u\sim u$, $\operatorname{sh}u\sim u$.</span></div>
<div><b>$e^u - 1\sim u$</b><span>$\ln(1 + u)\sim u$.</span></div>
<div><b>$1 - \cos u\sim\frac{u^2}2$</b><span>$\operatorname{ch}u - 1\sim\frac{u^2}2$.</span></div>
<div><b>$(1 + u)^\alpha - 1\sim\alpha u$</b><span>En particulier $\sqrt{1 + u} - 1\sim\frac u2$.</span></div>
<div><b>Un polynôme en $0$</b><span>son terme de plus <b>bas</b> degré.</span></div>
<div><b>Un polynôme en $\pm\infty$</b><span>son terme de plus <b>haut</b> degré.</span></div>
</div>
<p class="ml">Ce qui marche, ce qui ne marche pas</p>
<table class="mtab">
<tr><th>Opération</th><th>Avec des équivalents</th></tr>
<tr><td>Produit, quotient, puissance fixe</td><td>oui : $f_1\sim g_1$, $f_2\sim g_2\Rightarrow f_1f_2\sim g_1g_2$</td></tr>
<tr><td>Somme</td><td><b>non</b> : $x + x^2\sim x$ et $-x\sim-x$, mais la somme $x^2\not\sim0$</td></tr>
<tr><td>Composition à gauche par $\exp$, $\ln$</td><td><b>non</b> : $x + 1\sim x$ en $+\infty$, mais $e^{x+1}\not\sim e^x$</td></tr>
<tr><td>Limite</td><td>oui : deux fonctions équivalentes ont la même limite</td></tr>
</table>
<p class="ml">Exemple 1 : un quotient</p>
$$\frac{\sin(3x)\,(e^{2x} - 1)}{x\,\ln(1 + x)}\underset{0}{\sim}\frac{3x\cdot2x}{x\cdot x} = 6\qquad\Longrightarrow\qquad\cG{\text{la limite en}\ 0\ \text{vaut}\ 6}.$$
<p class="ml">Exemple 2 : une somme, on factorise par le terme dominant</p>
$$f(x) = x^3 + 2x - \sqrt x\ \text{en}\ +\infty:\qquad f(x) = \cB{x^3}\Big(1 + \frac2{x^2} - \frac1{x^{5/2}}\Big),\quad\text{et la parenthèse}\to1,\ \text{donc}\ \cG{f(x)\sim x^3}.$$
<p class="ml">Exemple 3 : un $\ln$ (on ne compose pas, on factorise)</p>
$$\ln(x^2 + x) = \ln\Big(x^2\Big(1 + \frac1x\Big)\Big) = 2\ln x + \cR{\ln\Big(1 + \frac1x\Big)} = 2\ln x + o(1)\underset{+\infty}{\sim}\cG{2\ln x}.$$

<h2 id="l-croiss">3. Les croissances comparées</h2>
<div class="sbox">$$\alpha, \beta, \gamma > 0:\qquad(\ln x)^\gamma = o(x^\alpha)\ \text{et}\ x^\alpha = o(e^{\beta x})\ \text{en}\ +\infty,\qquad x^\alpha|\ln x|^\gamma\xrightarrow[x\to0^+]{}0.$$</div>
<div class="sbox">$$\text{Suites}:\quad(\ln n)^\gamma\ll n^\alpha\ll a^n\ (a > 1)\ll n!\ll n^n.$$</div>
<p class="ml">Exemple</p>
$$\frac{n^{10} + 2^n}{3^n - n!}\underset{+\infty}{\sim}\frac{\cB{2^n}}{\cB{-n!}} = -\frac{2^n}{n!}\to\cG0.$$

<h2 id="l-dl">4. Les développements limités</h2>
<div class="sbox">$$f\ \text{admet un}\ DL_n(a)\iff f(x) = \underbrace{c_0 + c_1(x - a) + \cdots + c_n(x - a)^n}_{\text{partie régulière}} + o\big((x - a)^n\big).$$</div>
<ul>
<li><b>Unicité</b> : la partie régulière est unique. On peut donc identifier des coefficients.</li>
<li><b>Troncature</b> : un $DL_n$ donne tous les $DL_p$ pour $p\leqslant n$.</li>
<li><b>Taylor-Young</b> : si $f$ est de classe $\mathcal C^n$, alors $c_k = \frac{f^{(k)}(a)}{k!}$.</li>
<li><b>Parité</b> : $f$ paire n'a que des puissances paires dans son $DL(0)$, $f$ impaire que des puissances impaires.</li>
<li>$f$ a un $DL_0(a)$ $\iff$ elle est continue (ou prolongeable) en $a$ ; un $DL_1(a)$ $\iff$ dérivable en $a$. Pas plus.</li>
</ul>
<p class="ml">Équivalent à partir d'un DL</p>
<p>Le premier terme <b>non nul</b> de la partie régulière donne l'équivalent : $\cos x - 1 = -\frac{x^2}2 + o(x^2)$, donc $\cos x - 1\sim-\frac{x^2}2$.</p>

<h2 id="l-usuels">5. Les DL usuels en $0$</h2>
<table class="mtab">
<tr><th>Fonction</th><th>Développement limité</th></tr>
<tr><td>$e^x$</td><td>$1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + o(x^n)$</td></tr>
<tr><td>$\cos x$</td><td>$1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots + (-1)^p\frac{x^{2p}}{(2p)!} + o(x^{2p+1})$</td></tr>
<tr><td>$\sin x$</td><td>$x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots + (-1)^p\frac{x^{2p+1}}{(2p + 1)!} + o(x^{2p+2})$</td></tr>
<tr><td>$\operatorname{ch}x$, $\operatorname{sh}x$</td><td>mêmes que $\cos$, $\sin$, <b>sans les signes</b> $-$</td></tr>
<tr><td>$\frac1{1 - x}$</td><td>$1 + x + x^2 + \cdots + x^n + o(x^n)$</td></tr>
<tr><td>$\frac1{1 + x}$</td><td>$1 - x + x^2 - \cdots + (-1)^nx^n + o(x^n)$</td></tr>
<tr><td>$\ln(1 + x)$</td><td>$x - \frac{x^2}2 + \frac{x^3}3 - \cdots + (-1)^{n-1}\frac{x^n}n + o(x^n)$</td></tr>
<tr><td>$(1 + x)^\alpha$</td><td>$1 + \alpha x + \frac{\alpha(\alpha - 1)}{2!}x^2 + \cdots + \frac{\alpha(\alpha - 1)\cdots(\alpha - n + 1)}{n!}x^n + o(x^n)$</td></tr>
<tr><td>$\sqrt{1 + x}$</td><td>$1 + \frac x2 - \frac{x^2}8 + \frac{x^3}{16} + o(x^3)$</td></tr>
<tr><td>$\arctan x$</td><td>$x - \frac{x^3}3 + \frac{x^5}5 - \cdots + (-1)^p\frac{x^{2p+1}}{2p + 1} + o(x^{2p+2})$</td></tr>
<tr><td>$\tan x$</td><td>$x + \frac{x^3}3 + \frac{2x^5}{15} + o(x^6)$</td></tr>
</table>
<p><b>Astuce</b> : pour $\cos$ et $\sin$, le reste gagne un ordre gratuitement grâce à la parité ($\cos x = 1 - \frac{x^2}2 + o(x^3)$).</p>
<div data-mlab="taylor"></div>

<h2 id="l-ops">6. Les opérations sur les DL</h2>
<p class="ml">Somme et produit : on tronque au fur et à mesure</p>
<p>Exemple : $DL_3(0)$ de $e^x\sin x$. On écrit les deux DL à l'ordre $3$ et on ne garde, dans le produit, que les termes de degré $\leqslant3$ :</p>
$$e^x\sin x = \Big(1 + x + \frac{x^2}2 + \frac{x^3}6\Big)\Big(x - \frac{x^3}6\Big) + o(x^3).$$
<table class="mtab">
<tr><th>Degré</th><th>Produits qui donnent ce degré</th><th>Total</th></tr>
<tr><td>$x$</td><td>$1\times x$</td><td>$x$</td></tr>
<tr><td>$x^2$</td><td>$x\times x$</td><td>$x^2$</td></tr>
<tr><td>$x^3$</td><td>$\frac{x^2}2\times x$ et $1\times\big(-\frac{x^3}6\big)$</td><td>$\frac12 - \frac16 = \frac13$, soit $\frac{x^3}3$</td></tr>
</table>
$$\cG{e^x\sin x = x + x^2 + \frac{x^3}3 + o(x^3)}.$$
<p class="ml">Composition : la fonction intérieure doit tendre vers $0$</p>
<p>Exemple : $DL_3(0)$ de $e^{\sin x}$. On pose $\cO{u = \sin x = x - \frac{x^3}6 + o(x^3)}$, qui tend vers $0$, et $e^u = 1 + u + \frac{u^2}2 + \frac{u^3}6 + o(u^3)$. On calcule les puissances de $u$ <b>à l'ordre 3</b> :</p>
$$u^2 = x^2 + \cR{o(x^3)},\qquad u^3 = x^3 + \cR{o(x^3)}.$$
$$e^{\sin x} = 1 + \Big(x - \frac{x^3}6\Big) + \frac{x^2}2 + \frac{x^3}6 + o(x^3) = \cG{1 + x + \frac{x^2}2 + o(x^3)}.$$
<p class="ml">Composition avec $\ln$ : on fait apparaître $\ln(1 + u)$</p>
<p>$DL_4(0)$ de $\ln(\cos x)$. On écrit $\cos x = 1 + \cO u$ avec $\cO{u = -\frac{x^2}2 + \frac{x^4}{24} + o(x^4)}\to0$ :</p>
$$u^2 = \frac{x^4}4 + o(x^4),\qquad u^3 = o(x^4)\ (\text{il commence en}\ x^6).$$
$$\ln(\cos x) = u - \frac{u^2}2 + o(u^2) = -\frac{x^2}2 + \frac{x^4}{24} - \frac{x^4}8 + o(x^4) = \cG{-\frac{x^2}2 - \frac{x^4}{12} + o(x^4)}.$$
<p class="ml">Quotient : $\frac1{1 - u}$</p>
<p>$DL_3(0)$ de $\tan x = \frac{\sin x}{\cos x}$. On écrit $\cos x = 1 - \cO v$ avec $\cO{v = \frac{x^2}2 + o(x^3)}$ :</p>
$$\frac1{\cos x} = \frac1{1 - v} = 1 + v + \cR{v^2 + \cdots} = 1 + \frac{x^2}2 + o(x^3)\qquad(v^2\ \text{commence en}\ x^4).$$
$$\tan x = \Big(x - \frac{x^3}6\Big)\Big(1 + \frac{x^2}2\Big) + o(x^3) = x + \frac{x^3}2 - \frac{x^3}6 + o(x^3) = \cG{x + \frac{x^3}3 + o(x^3)}.$$
<p class="ml">Primitiver un DL</p>
<p>Si $f'$ a un $DL_n(0)$, on intègre terme à terme et on ajoute $f(0)$ : on obtient un $DL_{n+1}(0)$ de $f$.</p>
$$\arctan'(x) = \frac1{1 + x^2} = 1 - x^2 + x^4 + o(x^4)\ \Longrightarrow\ \arctan x = \underbrace{\arctan0}_{= 0} + x - \frac{x^3}3 + \frac{x^5}5 + o(x^5).$$
<p class="ml piege">Piège</p>
<p>On ne dérive pas un DL en général. On a le droit si on sait déjà que $f'$ admet un DL.</p>
<p class="ml">En un point $a\neq0$ : on se ramène en $0$</p>
<p>On pose $\cO{x = a + h}$ avec $h\to0$. Exemple : $DL_2(2)$ de $\ln x$ :</p>
$$\ln(2 + h) = \ln\Big(2\Big(1 + \frac h2\Big)\Big) = \ln2 + \ln\Big(1 + \frac h2\Big) = \ln2 + \frac h2 - \frac{h^2}8 + o(h^2).$$
$$\cG{\ln x = \ln2 + \frac{x - 2}2 - \frac{(x - 2)^2}8 + o\big((x - 2)^2\big)}.$$
<p class="ml">En $+\infty$ : on pose $\cO{x = \frac1h}$, ou on factorise pour faire apparaître $\frac1x\to0$</p>
$$\sqrt{x^2 + x + 1} = x\sqrt{1 + \cO{\frac1x + \frac1{x^2}}}\quad(x > 0)\qquad\text{(calcul complet au §9)}.$$

<h2 id="l-ordre">7. À quel ordre développer ?</h2>
<ul>
<li>Pour une limite d'un quotient : développer le dénominateur jusqu'à son <b>premier terme non nul</b> (son équivalent), puis le numérateur au <b>même ordre</b>.</li>
<li>Si on divise par $x^k$, il faut un $DL_{n+k}$ pour obtenir un $DL_n$ du quotient.</li>
<li>Dans un produit $f\cdot g$ où $g$ commence en $x^p$, il suffit de développer $f$ à l'ordre $n - p$.</li>
<li>Si à la fin tout s'annule, on n'est pas allé assez loin : on recommence à l'ordre suivant.</li>
</ul>
<p class="ml">Exemple : $\frac{\sin x - x}{x^3}$</p>
<p>Le dénominateur est déjà $x^3$ : on développe $\sin$ à l'ordre $3$. À l'ordre $1$, on aurait $\sin x - x = o(x)$, qui ne dit rien.</p>
$$\frac{\sin x - x}{x^3} = \frac{x - \frac{x^3}6 + o(x^3) - x}{x^3} = -\frac16 + o(1)\ \longrightarrow\ \cG{-\frac16}.$$

<h2 id="l-lim">8. Calculer une limite</h2>
<ol>
<li>Essayer d'abord les <b>équivalents</b> (produit, quotient).</li>
<li>S'il y a une somme ou une différence qui se compense : <b>DL</b> de chaque morceau, au bon ordre.</li>
<li>Pour $u^v$ : écrire $e^{v\ln u}$.</li>
</ol>
<p class="ml">Exemple 1 : $\lim_{x\to0}\frac{e^x - 1 - x}{x^2}$</p>
$$e^x - 1 - x = \cR{1 + x} + \cB{\frac{x^2}2} + o(x^2)\cR{{} - 1 - x} = \frac{x^2}2 + o(x^2)\qquad\Longrightarrow\qquad\frac{e^x - 1 - x}{x^2}\to\cG{\frac12}.$$
<p class="ml">Exemple 2 : $\lim_{x\to0}\Big(\frac1{\sin^2x} - \frac1{x^2}\Big)$</p>
<p><b>Étape 1 : même dénominateur.</b></p>
$$\frac1{\sin^2x} - \frac1{x^2} = \frac{x^2 - \sin^2x}{x^2\sin^2x}.$$
<p><b>Étape 2 : le dénominateur.</b> $x^2\sin^2x\sim x^2\cdot x^2 = x^4$ : il faut le numérateur à l'ordre $4$.</p>
<p><b>Étape 3 : le numérateur.</b></p>
$$\sin^2x = \Big(x - \frac{x^3}6 + o(x^3)\Big)^2 = x^2 - 2\cdot x\cdot\frac{x^3}6 + o(x^4) = x^2 - \frac{x^4}3 + o(x^4),\qquad x^2 - \sin^2x = \frac{x^4}3 + o(x^4).$$
<p><b>Étape 4.</b></p>
$$\frac{x^2 - \sin^2x}{x^2\sin^2x}\sim\frac{x^4/3}{x^4} = \frac13\qquad\Longrightarrow\qquad\text{la limite vaut}\ \cG{\frac13}.$$
<p class="ml">Exemple 3 : une forme $1^\infty$</p>
$$\Big(1 + \frac ax\Big)^x = e^{x\ln(1 + a/x)} = e^{x\left(\frac ax + o\left(\frac1x\right)\right)} = e^{a + o(1)}\xrightarrow[x\to+\infty]{}\cG{e^a}.$$
<p class="ml">Exemple 4 : un équivalent par DL</p>
$$\operatorname{ch}x - \cos x = \Big(1 + \frac{x^2}2\Big) - \Big(1 - \frac{x^2}2\Big) + o(x^2) = x^2 + o(x^2)\qquad\Longrightarrow\qquad\cG{\operatorname{ch}x - \cos x\underset0\sim x^2}.$$

<h2 id="l-geo">9. Tangente, extremum, asymptote</h2>
<p class="ml">Tangente et position</p>
<p>Si $f(x) = \cB{c_0 + c_1(x - a)} + c_p(x - a)^p + o\big((x - a)^p\big)$ avec $c_p\neq0$ le premier terme non nul après :</p>
<ul>
<li>la tangente en $a$ est $y = c_0 + c_1(x - a)$ ;</li>
<li>la position de la courbe est donnée par le <b>signe</b> de $c_p(x - a)^p$ près de $a$. Si $p$ est impair, la courbe traverse sa tangente : c'est un point d'inflexion.</li>
</ul>
$$f(x) = \sqrt{1 + 2x}:\quad(1 + u)^{1/2} = 1 + \frac u2 - \frac{u^2}8 + o(u^2),\ \cO{u = 2x}:\quad f(x) = \cB{1 + x} - \frac{x^2}2 + o(x^2).$$
<p>Tangente $y = 1 + x$, et $-\frac{x^2}2\lt0$ : la courbe est <b>sous</b> sa tangente près de $0$.</p>
<p class="ml">Extremum</p>
<p>Si $f'(a) = 0$ et $f(x) = f(a) + c_2(x - a)^2 + o\big((x - a)^2\big)$ avec $c_2 > 0$ : minimum local. Avec $c_2\lt0$ : maximum local.</p>
<p class="ml">Asymptote en $+\infty$ : $f(x) = \sqrt{x^2 + x + 1}$</p>
<p><b>Étape 1.</b> On factorise pour faire apparaître $\cO{u = \frac1x + \frac1{x^2}}\to0$ (et $x > 0$) :</p>
$$f(x) = x\sqrt{1 + u},\qquad\sqrt{1 + u} = 1 + \frac u2 - \frac{u^2}8 + o(u^2),\qquad u^2 = \frac1{x^2} + o\Big(\frac1{x^2}\Big).$$
<p><b>Étape 2.</b></p>
$$\sqrt{1 + u} = 1 + \frac1{2x} + \frac1{2x^2} - \frac1{8x^2} + o\Big(\frac1{x^2}\Big) = 1 + \frac1{2x} + \frac3{8x^2} + o\Big(\frac1{x^2}\Big).$$
<p><b>Étape 3.</b> On multiplie par $x$ :</p>
$$f(x) = \cB{x + \frac12} + \frac3{8x} + o\Big(\frac1x\Big).$$
<p><b>Conclusion</b> : la droite $\cG{y = x + \frac12}$ est asymptote en $+\infty$, et $\frac3{8x} > 0$ : la courbe est <b>au-dessus</b>.</p>

<h2 id="l-suites">10. Développement asymptotique d'une suite</h2>
<p class="ml">Exemple : $u_n = \big(1 + \frac1n\big)^n$, à deux termes</p>
$$\ln u_n = n\ln\Big(1 + \frac1n\Big) = n\Big(\frac1n - \frac1{2n^2} + o\Big(\frac1{n^2}\Big)\Big) = 1 - \frac1{2n} + o\Big(\frac1n\Big).$$
$$u_n = e\cdot e^{-\frac1{2n} + o(\frac1n)} = e\Big(1 - \frac1{2n} + o\Big(\frac1n\Big)\Big) = \cG{e - \frac e{2n} + o\Big(\frac1n\Big)}.$$
<p>On en déduit $e - u_n\sim\frac e{2n}$ : la convergence vers $e$ est lente.</p>
<p class="ml">Les grandes étapes, en général</p>
<ol>
<li>Trouver la limite (ou un équivalent) de $u_n$.</li>
<li>Poser $u_n = \ell + v_n$ avec $v_n\to0$, réinjecter dans la relation qui définit $u_n$.</li>
<li>Recommencer pour obtenir le terme suivant.</li>
</ol>

<h2 id="l-enonce">11. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>Un quotient ou un produit</b><span>Équivalents usuels, sans DL.</span></div>
<div><b>Une différence qui se compense ($e^x - 1 - x$)</b><span>DL, jusqu'au premier terme qui survit.</span></div>
<div><b>$u(x)^{v(x)}$</b><span>$e^{v\ln u}$, puis DL ou équivalent de l'exposant.</span></div>
<div><b>« DL en $a\neq0$ »</b><span>$x = a + h$, puis DL en $h\to0$.</span></div>
<div><b>« Comportement en $+\infty$ »</b><span>Factoriser par le terme dominant pour faire apparaître $\frac1x$.</span></div>
<div><b>« Asymptote, position »</b><span>$f(x) = ax + b + \frac cx + o(\frac1x)$ : $y = ax + b$, signe de $\frac cx$.</span></div>
<div><b>« Tangente, position »</b><span>$DL_2$ (ou plus) : tangente, puis signe du premier terme suivant.</span></div>
<div><b>« $f$ est-elle prolongeable, dérivable en $0$ ? »</b><span>$DL_0$ : prolongement ; $DL_1$ : dérivabilité, $f'(0) = c_1$.</span></div>
<div><b>« Nature de $\sum u_n$ »</b><span>Équivalent de $u_n$ par DL, puis Riemann.</span></div>
<div><b>$f'$ connue (fraction, racine)</b><span>Primitiver le DL de $f'$ (comme pour $\arctan$, $\arcsin$).</span></div>
<div><b>$f$ paire ou impaire</b><span>DL avec seulement des puissances paires ou impaires.</span></div>
<div><b>Croissances comparées</b><span>$\ln\ll$ puissances $\ll$ exponentielles $\ll$ factorielle.</span></div>
</div>

<h2 id="l-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Additionner des équivalents : $\sin x - x\sim x - x = 0$ est faux et n'a pas de sens.</p>
<p><b>2.</b> Composer un équivalent par $\exp$ : $f\sim g\not\Rightarrow e^f\sim e^g$.</p>
<p><b>3.</b> Dire $f\sim0$ : seule la fonction nulle près de $a$ est équivalente à $0$.</p>
<p><b>4.</b> Composer des DL alors que la fonction intérieure ne tend pas vers $0$ ($e^{\cos x}$ : écrire $e\cdot e^{\cos x - 1}$).</p>
<p><b>5.</b> Garder des termes au-delà de l'ordre, ou oublier le $o(\cdot)$.</p>
<p><b>6.</b> Développer à un ordre trop faible : tout s'annule et il ne reste qu'un $o$.</p>
<p><b>7.</b> Écrire $o(x^2) - o(x^2) = 0$.</p>
<p><b>8.</b> Oublier les factorielles : $e^x = 1 + x + x^2 + \cdots$ est faux.</p>
<p><b>9.</b> Ne pas préciser en quel point on travaille.</p>
<p><b>10.</b> Dériver un DL sans savoir que $f'$ en admet un.</p>
</div>

<h2 id="l-entrainement">S'entraîner</h2>
<div data-mlab="dlex"></div>
<div data-mlab="quizdl"></div>

<h2 id="l-arbre">L'arbre des méthodes</h2>
<p>Choisis ce que tu veux faire, réponds aux questions et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Une limite</div>
<div class="tq">Produit ou quotient ?</div><a class="tl" href="#l-equiv">oui : équivalents usuels</a><div class="tno">non</div>
<div class="tq">Forme $u^v$ ?</div><a class="tl" href="#l-lim">oui : $e^{v\ln u}$</a><div class="tno">non</div>
<div class="tq">Puissances, $\ln$, $\exp$ en $\infty$ ?</div><a class="tl" href="#l-croiss">oui : croissances comparées</a><div class="tno">non</div>
<a class="tl tend" href="#l-lim">différence qui se compense : DL</a></div>
<div class="tb tR"><div class="tt">Un DL</div>
<div class="tq">Fonction usuelle ?</div><a class="tl" href="#l-usuels">oui : le tableau</a><div class="tno">non</div>
<div class="tq">En $a\neq0$ ou en $\infty$ ?</div><a class="tl" href="#l-ops">oui : $x = a + h$, ou $\frac1x$</a><div class="tno">non</div>
<div class="tq">Une composée $g(u(x))$ ?</div><a class="tl" href="#l-ops">oui : $u\to0$, puissances de $u$</a><div class="tno">non</div>
<div class="tq">Un quotient ?</div><a class="tl" href="#l-ops">oui : $\frac1{1 - u}$</a><div class="tno">non</div>
<a class="tl tend" href="#l-ops">produit tronqué, ou primitive</a></div>
<div class="tb tG"><div class="tt">Un équivalent</div>
<div class="tq">Somme ?</div><a class="tl" href="#l-equiv">oui : factoriser le dominant</a><div class="tno">non</div>
<div class="tq">Différence qui se compense ?</div><a class="tl" href="#l-lim">oui : premier terme non nul du DL</a><div class="tno">non</div>
<a class="tl tend" href="#l-equiv">produit, quotient d'équivalents</a></div>
<div class="tb tO"><div class="tt">Étudier une courbe</div>
<div class="tq">En un point ?</div><a class="tl" href="#l-geo">oui : $DL_2$, tangente, position</a><div class="tno">non</div>
<a class="tl tend" href="#l-geo">en $\infty$ : $ax + b + \frac cx$, asymptote</a></div>
<div class="tb tV"><div class="tt">Une suite</div>
<div class="tq">Vitesse de convergence ?</div><a class="tl" href="#l-suites">oui : développement asymptotique</a><div class="tno">non</div>
<a class="tl tend" href="#l-croiss">comparer : croissances comparées</a></div>
</div>
</div>
`,
"Intégration sur un intervalle quelconque": R`
<nav class="msum"><a href="#p-not">Notations</a><a href="#p-ref">Intégrales de référence</a><a href="#p-integ">Montrer l'intégrabilité</a><a href="#p-calc">Calculer</a><a href="#p-cvd">Convergence dominée</a><a href="#p-tat">Terme à terme</a><a href="#p-plan">Le plan pour un paramètre</a><a href="#p-cont">Continuité</a><a href="#p-lim">Limite</a><a href="#p-der">Dérivation</a><a href="#p-gamma">La fonction $\Gamma$</a><a href="#p-enonce">Ce que l'énoncé te donne</a><a href="#p-erreurs">Erreurs</a><a href="#p-entrainement">S'entraîner</a><a href="#p-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la fonction intégrée $f(x, t)$. <span class="kO">orange</span> : la fonction qui domine, $\varphi(t)$, indépendante de $x$. <span class="kR">rouge</span> : les points à problème (bornes infinies, singularités). <span class="kV">violet</span> : les fonctions de référence. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="p-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Définition</th><th>À retenir</th></tr>
<tr><td>Intégrale convergente</td><td>$\int_a^{+\infty}f$ converge si $\int_a^xf$ a une limite finie quand $x\to+\infty$</td><td>Même chose en une borne ouverte.</td></tr>
<tr><td>Fonction intégrable</td><td>$f$ intégrable sur $I$ si $\int_I|f|$ converge</td><td>Intégrable $\Rightarrow$ convergente. Pas l'inverse.</td></tr>
<tr><td>Ensemble</td><td>$L^1(I, \mathbb K)$, ou $\mathcal L^1$</td><td>Espace vectoriel.</td></tr>
<tr><td>Intégrale à paramètre</td><td>$g(x) = \int_If(x, t)\,dt$, $x\in A$, $t\in I$</td><td>On étudie $g$ comme une fonction de $x$.</td></tr>
</table>

<h2 id="p-ref">2. Les intégrales de référence</h2>
<div class="sbox">$$\int_1^{+\infty}\frac{dt}{t^\alpha}\ \text{CV}\iff\alpha > 1,\qquad\int_0^1\frac{dt}{t^\alpha}\ \text{CV}\iff\alpha\lt1,\qquad\int_0^{+\infty}e^{-\lambda t}\,dt\ \text{CV}\iff\lambda > 0,\qquad\int_0^1\ln t\,dt = -1.$$</div>
<p>Moyen mnémotechnique : en $+\infty$, il faut décroître <b>vite</b> ($\alpha > 1$) ; en $0$, il ne faut pas exploser trop vite ($\alpha\lt1$). Pour $\alpha = 1$, ça diverge des deux côtés.</p>
<p>Même chose en un point $a$ : $\int_a^b\frac{dt}{(t - a)^\alpha}$ converge si et seulement si $\alpha\lt1$.</p>

<h2 id="p-integ">3. Montrer qu'une fonction est intégrable</h2>
<ol>
<li>Vérifier que $f$ est continue (par morceaux) sur l'intervalle <b>ouvert</b>.</li>
<li>Repérer les <span class="kR">points à problème</span> : bornes infinies et points où $f$ n'est pas définie. Les traiter <b>un par un</b>, en coupant l'intervalle.</li>
<li>En chaque point : prolongement par continuité (faux problème), ou comparaison à une référence avec $|f|$ ($\leqslant$, $O$, $o$, $\sim$).</li>
<li>Règle pratique en $+\infty$ : si $t^\alpha|f(t)|\to0$ avec $\alpha > 1$, alors $f$ est intégrable en $+\infty$.</li>
</ol>
<p class="ml">Exemple 1 : $f(t) = \frac{\sin t}t$ sur $\left]0, 1\right]$</p>
<p>$f(t)\to1$ quand $t\to0$ : $f$ se prolonge par continuité, c'est un <b>faux problème</b>. Intégrable sur $\left]0, 1\right]$.</p>
<p class="ml">Exemple 2 : $f(t) = \frac{\ln t}{\sqrt t}e^{-t}$ sur $\left]0, +\infty\right[$</p>
<p>$f$ est continue sur $\left]0, +\infty\right[$. Deux points à problème : $\cR0$ et $\cR{+\infty}$.</p>
<p><b>En $0$</b> : on cherche $\alpha\lt1$ avec $t^\alpha|f(t)|\to0$. Avec $\alpha = \frac34$ :</p>
$$t^{3/4}|f(t)| = t^{1/4}|\ln t|\,e^{-t}\xrightarrow[t\to0]{}0\ (\text{croissances comparées})\ \Longrightarrow\ |f(t)| = o\Big(\cV{\frac1{t^{3/4}}}\Big),\ \frac34\lt1:\ \text{intégrable en}\ 0.$$
<p><b>En $+\infty$</b> :</p>
$$t^2|f(t)| = t^{3/2}\ln t\,e^{-t}\xrightarrow[t\to+\infty]{}0\ \Longrightarrow\ |f(t)| = o\Big(\cV{\frac1{t^2}}\Big):\ \text{intégrable en}\ +\infty.$$
<p>Donc $\cG{f\ \text{est intégrable sur}\ \left]0, +\infty\right[}$.</p>
<p class="ml">Exemple 3 : convergente mais pas intégrable</p>
<p>$\int_1^{+\infty}\frac{\sin t}t\,dt$ converge (IPP : $\big[-\frac{\cos t}t\big] - \int\frac{\cos t}{t^2}$, et le second terme est intégrable), mais $\frac{|\sin t|}t\geqslant\frac{\sin^2t}t = \frac1{2t} - \frac{\cos2t}{2t}$ n'est pas intégrable. Les théorèmes de ce chapitre demandent l'<b>intégrabilité</b>.</p>

<h2 id="p-calc">4. Calculer une intégrale sur un intervalle</h2>
<p>On calcule sur un segment $[a, x]$, puis on fait tendre $x$ vers la borne. On peut aussi faire une IPP ou un changement de variable directement, à condition que <b>les crochets aient une limite finie</b>.</p>
<p class="ml">Exemple : $\int_0^{+\infty}t\,e^{-t}\,dt$</p>
$$\int_0^xt\,e^{-t}\,dt = \big[-t\,e^{-t}\big]_0^x + \int_0^xe^{-t}\,dt = -x\,e^{-x} + 1 - e^{-x}\xrightarrow[x\to+\infty]{}\cG1.$$
<p class="ml">Changement de variable</p>
<p>Il doit être une bijection $\mathcal C^1$ strictement monotone. Il conserve alors la nature et la valeur : $\int_0^{+\infty}e^{-\sqrt t}\,dt\ \underset{\cO{t = u^2}}{=}\ \int_0^{+\infty}2u\,e^{-u}\,du = 2$.</p>

<h2 id="p-cvd">5. Le théorème de convergence dominée</h2>
<div class="sbox">$$\left.\begin{aligned}&f_n\ \text{continues par morceaux sur}\ I\\&f_n\to f\ \text{simplement, avec}\ f\ \text{continue par morceaux}\\&|f_n(t)|\leqslant\cO{\varphi(t)}\ \text{pour tout}\ n,\ \text{avec}\ \cO\varphi\ \textbf{intégrable}\end{aligned}\right\}\ \Longrightarrow\ \int_If_n\xrightarrow[n\to+\infty]{}\int_If.$$</div>
<p>La clé est la <b>domination</b> : une fonction $\cO\varphi$ qui ne dépend pas de $n$.</p>
<p class="ml">Exemple 1 : $\lim\int_0^{\pi/2}\sin^nt\,dt$</p>
<p><b>Limite simple.</b> Pour $t\in\big[0, \frac\pi2\big[$, $0\leqslant\sin t\lt1$, donc $\sin^nt\to0$. En $\frac\pi2$, $\sin^n\frac\pi2 = 1$. La limite simple vaut $0$ sauf en un point : elle est continue par morceaux.</p>
<p><b>Domination.</b> $|\sin^nt|\leqslant\cO1$, intégrable sur le segment $\big[0, \frac\pi2\big]$.</p>
<p><b>Conclusion.</b> $\int_0^{\pi/2}\sin^nt\,dt\to\int_0^{\pi/2}0\,dt = \cG0$.</p>
<p class="ml">Exemple 2 : $\lim\int_0^n\big(1 - \frac tn\big)^n\,dt$</p>
<p><b>Mise en forme.</b> La borne dépend de $n$ : on écrit $f_n(t) = \big(1 - \frac tn\big)^n\mathbf 1_{[0, n]}(t)$ sur $I = [0, +\infty[$.</p>
<p><b>Limite simple.</b> Pour $t$ fixé et $n > t$ :</p>
$$f_n(t) = e^{n\ln(1 - t/n)} = e^{n(-\frac tn + o(\frac1n))}\to\cB{e^{-t}}.$$
<p><b>Domination.</b> On utilise $\ln(1 - u)\leqslant-u$ pour $u\in[0, 1[$ :</p>
$$0\leqslant f_n(t) = e^{n\ln(1 - t/n)}\leqslant e^{n\cdot(-t/n)} = \cO{e^{-t}},\ \text{intégrable sur}\ [0, +\infty[.$$
<p><b>Conclusion.</b> $\int_0^n\big(1 - \frac tn\big)^n\,dt\to\int_0^{+\infty}e^{-t}\,dt = \cG1$.</p>
<p class="ml piege">Piège</p>
<p>Sans domination, c'est faux. $f_n(t) = n\,\mathbf 1_{]0, 1/n]}(t)$ tend simplement vers $0$, mais $\int_0^1f_n = 1$ pour tout $n$. Il n'existe pas de $\varphi$ intégrable au-dessus de toutes les $f_n$.</p>

<h2 id="p-tat">6. Intégrer une série terme à terme</h2>
<div class="sbox">$$\left.\begin{aligned}&f_n\ \text{continues par morceaux et intégrables sur}\ I\\&\sum f_n\ \text{converge simplement vers}\ S\ \text{continue par morceaux}\\&\sum_n\int_I|f_n|\ \textbf{converge}\end{aligned}\right\}\ \Longrightarrow\ S\ \text{intégrable et}\ \int_I\sum_{n=0}^{+\infty}f_n = \sum_{n=0}^{+\infty}\int_If_n.$$</div>
<p><b>Méthode pratique</b> : on fait d'abord le calcul formel en échangeant $\int$ et $\sum$, puis on vérifie les hypothèses.</p>
<p class="ml">Exemple : $\int_0^1\frac{-\ln t}{1 - t}\,dt = \frac{\pi^2}6$</p>
<p><b>Étape 1 : développer.</b> Pour $t\in\left]0, 1\right[$, $\frac1{1 - t} = \sum_{n\geqslant0}t^n$, donc $\frac{-\ln t}{1 - t} = \sum_{n\geqslant0}f_n(t)$ avec $f_n(t) = -t^n\ln t\geqslant0$.</p>
<p><b>Étape 2 : intégrer un terme</b> (IPP sur $[\varepsilon, 1]$, puis $\varepsilon\to0$) :</p>
$$\int_0^1-t^n\ln t\,dt = \Big[-\frac{t^{n+1}}{n + 1}\ln t\Big]_0^1 + \int_0^1\frac{t^{n+1}}{n + 1}\cdot\frac1t\,dt = 0 + \frac1{n + 1}\int_0^1t^n\,dt = \frac1{(n + 1)^2}.$$
<p><b>Étape 3 : l'hypothèse.</b> $f_n\geqslant0$, donc $\sum\int|f_n| = \sum\frac1{(n + 1)^2}$ converge (Riemann).</p>
<p><b>Conclusion.</b></p>
$$\int_0^1\frac{-\ln t}{1 - t}\,dt = \sum_{n=0}^{+\infty}\frac1{(n + 1)^2} = \cG{\frac{\pi^2}6}.$$

<h2 id="p-plan">7. Le plan pour une intégrale à paramètre</h2>
<p>Pour $g(x) = \int_I\cB{f(x, t)}\,dt$, on vérifie toujours dans cet ordre :</p>
<ol>
<li><b>Régularité en $x$</b> : pour tout $t\in I$, $x\mapsto f(x, t)$ est continue (ou $\mathcal C^1$, ou a une limite).</li>
<li><b>Régularité en $t$</b> : pour tout $x$, $t\mapsto f(x, t)$ (et $\frac{\partial f}{\partial x}$) est continue par morceaux sur $I$.</li>
<li><b>Domination</b> : $|f(x, t)|\leqslant\cO{\varphi(t)}$ pour tout $x$, avec $\cO\varphi$ intégrable et <b>indépendante de $x$</b>.</li>
<li>Si la domination n'est possible que sur des segments $[a, b]\subset A$, on la fait sur chaque segment : la continuité et la dérivabilité sont des propriétés locales.</li>
</ol>

<h2 id="p-cont">8. Continuité</h2>
<div class="sbox">$$\left.\begin{aligned}&x\mapsto f(x, t)\ \text{continue sur}\ A\ \text{pour tout}\ t\\&t\mapsto f(x, t)\ \text{continue par morceaux sur}\ I\ \text{pour tout}\ x\\&|f(x, t)|\leqslant\cO{\varphi(t)},\ \cO\varphi\ \text{intégrable}\end{aligned}\right\}\ \Longrightarrow\ g\ \text{est continue sur}\ A.$$</div>
<p class="ml">Exemple : $g(x) = \int_0^{+\infty}\frac{e^{-xt}}{1 + t^2}\,dt$ sur $[0, +\infty[$</p>
<p><b>1.</b> Pour $t$ fixé, $x\mapsto\frac{e^{-xt}}{1 + t^2}$ est continue. <b>2.</b> Pour $x$ fixé, $t\mapsto\frac{e^{-xt}}{1 + t^2}$ est continue sur $[0, +\infty[$.</p>
<p><b>3.</b> Pour $x\geqslant0$ et $t\geqslant0$, $e^{-xt}\leqslant1$, donc :</p>
$$\Big|\frac{e^{-xt}}{1 + t^2}\Big|\leqslant\cO{\frac1{1 + t^2}},\ \text{intégrable sur}\ [0, +\infty[\ (\text{d'intégrale}\ \tfrac\pi2).$$
<p>Donc $\cG{g\ \text{est continue sur}\ [0, +\infty[}$, et $g(0) = \frac\pi2$.</p>

<h2 id="p-lim">9. Limite en une borne</h2>
<div class="sbox">$$f(x, t)\xrightarrow[x\to a]{}\ell(t)\ \text{pour tout}\ t,\quad|f(x, t)|\leqslant\cO{\varphi(t)}\ \text{intégrable}\ \Longrightarrow\ \lim_{x\to a}\int_If(x, t)\,dt = \int_I\ell(t)\,dt.$$</div>
<p class="ml">Exemple : la même $g$ en $+\infty$</p>
<p>Pour $t > 0$, $\frac{e^{-xt}}{1 + t^2}\to0$ quand $x\to+\infty$ (en $t = 0$, ça vaut $1$, un seul point). Avec la même domination $\frac1{1 + t^2}$ :</p>
$$\lim_{x\to+\infty}g(x) = \int_0^{+\infty}0\,dt = \cG0.$$
<p>Variante : on peut aussi passer par des suites $x_n\to+\infty$ et la convergence dominée.</p>

<h2 id="p-der">10. Dérivation</h2>
<div class="sbox">$$\left.\begin{aligned}&x\mapsto f(x, t)\ \text{de classe}\ \mathcal C^1\ \text{sur}\ J\\&t\mapsto f(x, t)\ \text{intégrable},\ t\mapsto\tfrac{\partial f}{\partial x}(x, t)\ \text{continue par morceaux}\\&\Big|\tfrac{\partial f}{\partial x}(x, t)\Big|\leqslant\cO{\varphi(t)},\ \cO\varphi\ \text{intégrable}\end{aligned}\right\}\ \Longrightarrow\ g\in\mathcal C^1(J),\quad g'(x) = \int_I\frac{\partial f}{\partial x}(x, t)\,dt.$$</div>
<p>C'est la formule de Leibniz : on dérive sous le signe intégrale. Pour $\mathcal C^k$, on domine chaque dérivée partielle jusqu'à l'ordre $k$.</p>
<p class="ml">Exemple : $F(x) = \int_0^{+\infty}e^{-t^2}\cos(xt)\,dt$</p>
<p><b>Étape 1 : les hypothèses.</b> Avec $f(x, t) = e^{-t^2}\cos(xt)$ :</p>
$$\frac{\partial f}{\partial x}(x, t) = -t\,e^{-t^2}\sin(xt),\qquad\Big|\frac{\partial f}{\partial x}(x, t)\Big|\leqslant\cO{t\,e^{-t^2}},$$
<p>qui est intégrable sur $[0, +\infty[$ (sa primitive est $-\frac12e^{-t^2}$). Et $|f(x, t)|\leqslant e^{-t^2}$, intégrable. Donc $F$ est de classe $\mathcal C^1$ sur $\mathbb R$.</p>
<p><b>Étape 2 : la dérivée</b>, avec une IPP ($u = \sin(xt)$, $v' = -t\,e^{-t^2}$, $v = \frac12e^{-t^2}$) :</p>
$$F'(x) = \int_0^{+\infty}-t\,e^{-t^2}\sin(xt)\,dt = \underbrace{\Big[\frac12e^{-t^2}\sin(xt)\Big]_0^{+\infty}}_{= 0} - \frac x2\int_0^{+\infty}e^{-t^2}\cos(xt)\,dt = -\frac x2F(x).$$
<p><b>Étape 3 : l'équation différentielle.</b> $F' + \frac x2F = 0$, donc $F(x) = F(0)\,e^{-x^2/4}$, et avec l'intégrale de Gauss $F(0) = \int_0^{+\infty}e^{-t^2}\,dt = \frac{\sqrt\pi}2$ :</p>
$$\cG{F(x) = \frac{\sqrt\pi}2\,e^{-x^2/4}}.$$

<h2 id="p-gamma">11. L'exemple central : la fonction $\Gamma$</h2>
$$\Gamma(x) = \int_0^{+\infty}t^{x-1}e^{-t}\,dt.$$
<p class="ml">Domaine de définition</p>
<p>La fonction $t\mapsto t^{x-1}e^{-t}$ est continue et positive sur $\left]0, +\infty\right[$.</p>
<ul>
<li><b>En $0$</b> : $t^{x-1}e^{-t}\sim\frac1{t^{1-x}}$, intégrable si et seulement si $1 - x\lt1$, soit $x > 0$.</li>
<li><b>En $+\infty$</b> : $t^2\cdot t^{x-1}e^{-t} = t^{x+1}e^{-t}\to0$, donc c'est $o\big(\frac1{t^2}\big)$, intégrable pour tout $x$.</li>
</ul>
<p>$\Gamma$ est définie sur $\cG{\left]0, +\infty\right[}$.</p>
<p class="ml">Continuité : domination sur un segment $[a, b]\subset\left]0, +\infty\right[$</p>
<p>Pour $x\in[a, b]$ : si $t\leqslant1$, $t^{x-1}\leqslant t^{a-1}$ ; si $t\geqslant1$, $t^{x-1}\leqslant t^{b-1}$. Donc :</p>
$$|t^{x-1}e^{-t}|\leqslant\cO{\varphi(t) = (t^{a-1} + t^{b-1})\,e^{-t}},$$
<p>intégrable sur $\left]0, +\infty\right[$ par l'étude du domaine ($a, b > 0$). $\Gamma$ est continue sur chaque $[a, b]$, donc sur $\left]0, +\infty\right[$. Même méthode pour $\mathcal C^\infty$, avec $|\ln t|^k$ en plus dans $\varphi$.</p>
<p class="ml">La relation fonctionnelle</p>
<p>IPP sur $[\varepsilon, A]$, puis $\varepsilon\to0$ et $A\to+\infty$ :</p>
$$\Gamma(x + 1) = \int_0^{+\infty}t^xe^{-t}\,dt = \underbrace{\big[-t^xe^{-t}\big]_0^{+\infty}}_{= 0\ (x > 0)} + x\int_0^{+\infty}t^{x-1}e^{-t}\,dt = x\,\Gamma(x).$$
<p>Avec $\Gamma(1) = \int_0^{+\infty}e^{-t}\,dt = 1$, une récurrence donne $\cG{\Gamma(n + 1) = n!}$.</p>
<div data-mlab="domin"></div>

<h2 id="p-enonce">12. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Montrer que $f$ est intégrable sur $I$ »</b><span>Points à problème un par un, comparaison à $\frac1{t^\alpha}$, règle $t^\alpha|f|\to0$.</span></div>
<div><b>« Domaine de définition de $g(x) = \int\dots$ »</b><span>Pour chaque $x$ fixé, étudier l'intégrabilité en $t$.</span></div>
<div><b>« Limite de $\int_If_n$ »</b><span>Convergence dominée : limite simple, puis domination par $\varphi$.</span></div>
<div><b>« $\int\sum = \sum\int$ »</b><span>Terme à terme : vérifier $\sum\int|f_n|$ convergente.</span></div>
<div><b>« $g$ est continue »</b><span>Plan du §7, domination (sur des segments si besoin).</span></div>
<div><b>« $g$ est $\mathcal C^1$, calculer $g'$ »</b><span>Dominer $\frac{\partial f}{\partial x}$, puis dériver sous l'intégrale.</span></div>
<div><b>« Trouver une équation différentielle vérifiée par $g$ »</b><span>Dériver sous l'intégrale, puis IPP pour faire réapparaître $g$.</span></div>
<div><b>« Limite de $g$ en $+\infty$ »</b><span>Limite simple de $f(x, t)$ et domination, ou encadrement direct.</span></div>
<div><b>« Équivalent de $g$ en $0$ »</b><span>Changement de variable $t = u/x$ pour sortir le $x$.</span></div>
<div><b>$\Gamma$, $\int e^{-t^2}$</b><span>$\Gamma(x + 1) = x\Gamma(x)$, $\Gamma(n + 1) = n!$, $\int_0^{+\infty}e^{-t^2} = \frac{\sqrt\pi}2$.</span></div>
<div><b>Une borne qui dépend de $n$ ($\int_0^n$)</b><span>Écrire avec une indicatrice $\mathbf 1_{[0, n]}$.</span></div>
<div><b>Domination impossible sur tout $A$</b><span>La faire sur chaque segment $[a, b]\subset A$.</span></div>
</div>

<h2 id="p-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Une domination $\varphi$ qui dépend de $x$ ou de $n$.</p>
<p><b>2.</b> Dominer $f$ au lieu de $\frac{\partial f}{\partial x}$ pour la dérivation.</p>
<p><b>3.</b> Traiter $0$ et $+\infty$ ensemble : on coupe l'intervalle.</p>
<p><b>4.</b> Confondre convergente et intégrable.</p>
<p><b>5.</b> Utiliser un équivalent pour l'intégrabilité sans regarder $|f|$ ou le signe.</p>
<p><b>6.</b> Oublier la vérification « continue par morceaux en $t$ ».</p>
<p><b>7.</b> Une IPP sur un intervalle ouvert sans vérifier que le crochet a une limite finie.</p>
<p><b>8.</b> Intégrer terme à terme sans vérifier $\sum\int|f_n|\lt+\infty$.</p>
<p><b>9.</b> Pour $\int_0^1\frac{dt}{t^\alpha}$, se tromper de sens : il faut $\alpha\lt1$.</p>
<p><b>10.</b> Dans $\Gamma$, dominer sur $\left]0, +\infty\right[$ entier : impossible, on prend $[a, b]$.</p>
</div>

<h2 id="p-entrainement">S'entraîner</h2>
<div data-mlab="quizipar"></div>

<h2 id="p-arbre">L'arbre des méthodes</h2>
<p>Choisis ce que tu veux faire, réponds aux questions et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Intégrabilité de $f$</div>
<div class="tq">Faux problème (prolongeable) ?</div><a class="tl" href="#p-integ">oui : rien à faire en ce point</a><div class="tno">non</div>
<div class="tq">Équivalent simple de $|f|$ ?</div><a class="tl" href="#p-ref">oui : comparer à $\frac1{t^\alpha}$</a><div class="tno">non</div>
<a class="tl tend" href="#p-integ">$t^\alpha|f(t)|\to0$</a></div>
<div class="tb tR"><div class="tt">Limite de $\int f_n$</div>
<div class="tq">Une suite de fonctions ?</div><a class="tl" href="#p-cvd">oui : convergence dominée</a><div class="tno">une série</div>
<div class="tq">$\sum\int|f_n|$ converge ?</div><a class="tl" href="#p-tat">oui : terme à terme</a><div class="tno">non</div>
<a class="tl tend" href="#p-cvd">sommes partielles + convergence dominée</a></div>
<div class="tb tG"><div class="tt">Étudier $g(x) = \int f(x, t)\,dt$</div>
<div class="tq">Continuité ?</div><a class="tl" href="#p-cont">oui : dominer $|f|$</a><div class="tno">non</div>
<div class="tq">Dérivabilité ?</div><a class="tl" href="#p-der">oui : dominer $|\partial_xf|$</a><div class="tno">non</div>
<div class="tq">Limite en une borne ?</div><a class="tl" href="#p-lim">oui : limite simple + domination</a><div class="tno">non</div>
<a class="tl tend" href="#p-integ">domaine : intégrabilité à $x$ fixé</a></div>
<div class="tb tO"><div class="tt">Domination difficile</div>
<div class="tq">Valable sur des segments ?</div><a class="tl" href="#p-gamma">oui : $[a, b]$ (comme $\Gamma$)</a><div class="tno">non</div>
<a class="tl tend" href="#p-cvd">indicatrice, $\ln(1 - u)\leqslant-u$, $e^{-xt}\leqslant1$</a></div>
<div class="tb tV"><div class="tt">Calculer $g(x)$</div>
<div class="tq">$g'$ fait réapparaître $g$ ?</div><a class="tl" href="#p-der">oui : équation différentielle</a><div class="tno">non</div>
<a class="tl tend" href="#p-tat">développer en série, terme à terme</a></div>
</div>
</div>
`,
"Suites et séries de fonctions": R`
<nav class="msum"><a href="#f-not">Notations</a><a href="#f-cs">Convergence simple</a><a href="#f-cu">Convergence uniforme</a><a href="#f-neg">Prouver qu'il n'y a pas CU</a><a href="#f-reg">Ce que la CU conserve</a><a href="#f-series">Séries de fonctions</a><a href="#f-cn">Convergence normale</a><a href="#f-alt">CU sans CN</a><a href="#f-sreg">Régularité de la somme</a><a href="#f-zeta">L'exemple de $\zeta$</a><a href="#f-weier">Approximation</a><a href="#f-enonce">Ce que l'énoncé te donne</a><a href="#f-erreurs">Erreurs</a><a href="#f-entrainement">S'entraîner</a><a href="#f-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la limite simple $f$ (ou la somme $S$). <span class="kR">rouge</span> : l'écart $|f_n - f|$ et son maximum. <span class="kO">orange</span> : le majorant $\alpha_n$, indépendant de $x$. <span class="kV">violet</span> : le point où l'écart est maximal. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="f-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Mode</th><th>Définition</th><th>En pratique</th></tr>
<tr><td>Convergence simple (CS)</td><td>$\forall x\in X$, $f_n(x)\to f(x)$</td><td>$x$ fixé, limite d'une suite de nombres.</td></tr>
<tr><td>Convergence uniforme (CU)</td><td>$\|f_n - f\|_\infty = \sup_{x\in X}|f_n(x) - f(x)|\to0$</td><td>Le même $N$ marche pour tous les $x$.</td></tr>
<tr><td>Série : CS</td><td>$\sum f_n(x)$ converge pour tout $x$</td><td>Somme $S(x) = \sum_{n=0}^{+\infty}f_n(x)$.</td></tr>
<tr><td>Série : CU</td><td>$(S_n)$ CU, ou $\|R_n\|_\infty\to0$</td><td>Le reste tend uniformément vers $0$.</td></tr>
<tr><td>Série : convergence normale (CN)</td><td>$\sum\|f_n\|_\infty$ converge</td><td>La plus facile à vérifier.</td></tr>
</table>
<div class="sbox">$$\textbf{Suites}:\ \text{CU}\Rightarrow\text{CS}.\qquad\textbf{Séries}:\ \text{CN}\Rightarrow\text{CU}\Rightarrow\text{CS},\qquad\text{CN}\Rightarrow\text{convergence absolue}\Rightarrow\text{CS}.$$</div>
<p>Aucune réciproque n'est vraie en général.</p>

<h2 id="f-cs">2. Trouver la limite simple</h2>
<p>On fixe $x$, et on cherche la limite de la suite numérique $(f_n(x))_n$. Souvent, il faut <b>distinguer des cas</b> selon $x$.</p>
<p class="ml">Exemple : $f_n(x) = x^n$ sur $[0, 1]$</p>
$$\left\{\begin{aligned}0\leqslant x\lt1&:\ x^n\to0\\x = 1&:\ 1^n = 1\end{aligned}\right.\qquad\Longrightarrow\qquad\cB{f(x) = \left\{\begin{aligned}&0\ \text{si}\ x\in[0, 1[\\&1\ \text{si}\ x = 1\end{aligned}\right.}$$
<p>Les $f_n$ sont continues, mais $f$ ne l'est pas : la convergence simple ne conserve pas la continuité.</p>

<h2 id="f-cu">3. Montrer la convergence uniforme</h2>
<p class="ml">Méthode 1 : majorer l'écart par une suite qui ne dépend pas de $x$</p>
<div class="sbox">$$|f_n(x) - f(x)|\leqslant\cO{\alpha_n}\ \text{pour tout}\ x\in X,\ \text{avec}\ \cO{\alpha_n}\to0\ \Longrightarrow\ \text{CU sur}\ X.$$</div>
<p>Exemple : $f_n(x) = \frac{\sin(nx)}n$ sur $\mathbb R$. Ici $f = 0$ et $|f_n(x)|\leqslant\cO{\frac1n}\to0$ : $\cG{\text{CU sur}\ \mathbb R}$.</p>
<p class="ml">Méthode 2 : calculer $\|f_n - f\|_\infty$ avec une étude de fonction</p>
<p>Exemple : $f_n(x) = n\,x\,e^{-nx}$ sur $[0, +\infty[$.</p>
<p><b>Étape 1 : limite simple.</b> Pour $x > 0$, $n\,x\,e^{-nx}\to0$ (croissances comparées). Pour $x = 0$, $f_n(0) = 0$. Donc $\cB{f = 0}$.</p>
<p><b>Étape 2 : étudier $f_n$.</b></p>
$$f_n'(x) = n\,e^{-nx} - n^2x\,e^{-nx} = n\,e^{-nx}(1 - nx),\qquad f_n'(x) = 0\iff x = \cV{\frac1n}.$$
<p>$f_n$ croît sur $\big[0, \frac1n\big]$ et décroît ensuite, donc le maximum est atteint en $\cV{\frac1n}$ :</p>
$$\cR{\|f_n - 0\|_\infty} = f_n\Big(\frac1n\Big) = n\cdot\frac1n\cdot e^{-1} = \cR{\frac1e}\not\to0\ \Longrightarrow\ \cG{\text{pas de CU sur}\ [0, +\infty[}.$$
<p><b>Étape 3 : sur $[a, +\infty[$ avec $a > 0$.</b> Dès que $\frac1n\leqslant a$, $f_n$ est décroissante sur $[a, +\infty[$ :</p>
$$\sup_{x\geqslant a}|f_n(x)| = f_n(a) = n\,a\,e^{-na}\to0\ \Longrightarrow\ \cG{\text{CU sur}\ [a, +\infty[}.$$
<p>C'est le cas typique : <b>pas de CU sur tout l'intervalle, mais CU sur chaque intervalle qui évite le point gênant</b>.</p>
<div data-mlab="fn"></div>

<h2 id="f-neg">4. Prouver qu'il n'y a pas convergence uniforme</h2>
<ul>
<li><b>Par la continuité</b> : les $f_n$ sont continues et la limite simple ne l'est pas. C'est le cas de $x^n$ sur $[0, 1]$.</li>
<li><b>Par une suite de points</b> : trouver $x_n\in X$ avec $|f_n(x_n) - f(x_n)|\not\to0$. Souvent, $x_n$ est le point du maximum.</li>
<li><b>Par une limite au bord</b> : $\sup_{x\in X}|f_n(x) - f(x)|\geqslant\lim_{x\to b}|f_n(x) - f(x)|$.</li>
</ul>
<p class="ml">Exemple : $x^n$ sur $[0, 1[$</p>
<p>Ici $f = 0$, continue : l'argument de continuité ne marche pas. On prend $\cV{x_n = 1 - \frac1n}\in[0, 1[$ :</p>
$$f_n(x_n) = \Big(1 - \frac1n\Big)^n = e^{n\ln(1 - 1/n)}\to e^{-1}\neq0\ \Longrightarrow\ \|f_n\|_\infty\geqslant f_n(x_n)\not\to0:\ \cG{\text{pas de CU}}.$$
<p>Par contre, sur $[0, a]$ avec $a\lt1$ : $\sup_{[0, a]}x^n = a^n\to0$, donc CU.</p>

<h2 id="f-reg">5. Ce que la convergence uniforme conserve</h2>
<div class="sbox">$$\textbf{Continuité}:\ f_n\ \text{continues et CU vers}\ f\ \text{sur}\ X\ (\text{ou sur tout segment de}\ X)\ \Longrightarrow\ f\ \text{continue}.$$</div>
<div class="sbox">$$\textbf{Double limite}:\ f_n(x)\xrightarrow[x\to a]{}\ell_n\ \text{et CU}\ \Longrightarrow\ (\ell_n)\ \text{converge et}\ \lim_{n}\lim_{x\to a}f_n(x) = \lim_{x\to a}\lim_nf_n(x).$$</div>
<div class="sbox">$$\textbf{Intégration sur un segment}:\ f_n\ \text{continues, CU sur}\ [a, b]\ \Longrightarrow\ \int_a^bf_n\to\int_a^bf.$$</div>
<div class="sbox">$$\textbf{Dérivation}:\ f_n\ \mathcal C^1,\ (f_n)\ \text{CS vers}\ f,\ (f_n')\ \textbf{CU}\ \text{vers}\ g\ \Longrightarrow\ f\ \text{est}\ \mathcal C^1\ \text{et}\ f' = g.$$</div>
<p class="ml">Contre-exemple pour l'intégrale</p>
<p>$f_n(x) = n^2x\,e^{-nx}$ sur $[0, 1]$ tend simplement vers $0$. Avec $\cO{u = nx}$ :</p>
$$\int_0^1n^2x\,e^{-nx}\,dx = \int_0^nu\,e^{-u}\,du = 1 - (n + 1)e^{-n}\to1\neq\int_0^10 = 0.$$
<p>Il n'y a pas CU : $\|f_n\|_\infty = f_n\big(\frac1n\big) = \frac ne\to+\infty$.</p>
<p class="ml piege">Piège</p>
<p>Pour la dérivation, c'est la CU des <b>dérivées</b> $f_n'$ qu'il faut, pas celle des $f_n$. $f_n(x) = \frac{\sin(nx)}n$ converge uniformément vers $0$, mais $f_n'(x) = \cos(nx)$ ne converge même pas simplement.</p>

<h2 id="f-series">6. Les séries de fonctions</h2>
<ul>
<li><b>CS</b> : pour chaque $x$, on étudie la série numérique $\sum f_n(x)$ (chapitre Séries).</li>
<li><b>CU</b> : $\sum f_n$ CS et $\sup_x|R_n(x)|\to0$, avec $R_n(x) = \sum_{k=n+1}^{+\infty}f_k(x)$.</li>
<li>Condition nécessaire : si $\sum f_n$ CU, alors $f_n\to0$ <b>uniformément</b>.</li>
</ul>

<h2 id="f-cn">7. La convergence normale</h2>
<div class="sbox">$$|f_n(x)|\leqslant\cO{\alpha_n}\ \text{pour tout}\ x\in X,\ \text{et}\ \sum\cO{\alpha_n}\ \text{converge}\ \Longrightarrow\ \sum f_n\ \text{converge normalement, donc uniformément, sur}\ X.$$</div>
<p>On cherche le plus petit majorant possible : $\alpha_n = \|f_n\|_\infty$ (étude de fonction si besoin).</p>
<p class="ml">Exemple 1 : $\sum\frac{x^n}{n^2}$ sur $[-1, 1]$</p>
$$\Big|\frac{x^n}{n^2}\Big|\leqslant\cO{\frac1{n^2}}\ \text{pour}\ |x|\leqslant1,\qquad\sum\frac1{n^2}\ \text{converge}\ \Longrightarrow\ \cG{\text{CN sur}\ [-1, 1]}.$$
<p class="ml">Exemple 2 : $\sum e^{-nx}$ sur $\left]0, +\infty\right[$, puis sur $[a, +\infty[$</p>
<p><b>Sur $\left]0, +\infty\right[$</b> : $\|f_n\|_\infty = \sup_{x > 0}e^{-nx} = 1$, et $\sum1$ diverge : pas de CN. Il n'y a même pas CU : $f_n\to0$ uniformément est faux, puisque $\|f_n\|_\infty = 1$.</p>
<p><b>Sur $[a, +\infty[$</b> ($a > 0$) : $\sup_{x\geqslant a}e^{-nx} = e^{-na} = (e^{-a})^n$, série géométrique de raison $e^{-a}\lt1$ : $\cG{\text{CN sur}\ [a, +\infty[}$.</p>
<p class="ml">Exemple 3 : avec une étude de fonction</p>
<p>$f_n(x) = \frac{x}{n(1 + nx^2)}$ sur $[0, +\infty[$. On étudie $h(x) = \frac x{1 + nx^2}$ :</p>
$$h'(x) = \frac{1 - nx^2}{(1 + nx^2)^2} = 0\iff x = \cV{\frac1{\sqrt n}},\qquad h\Big(\frac1{\sqrt n}\Big) = \frac{1/\sqrt n}{2} = \frac1{2\sqrt n}.$$
$$\|f_n\|_\infty = \frac1n\cdot\frac1{2\sqrt n} = \cO{\frac1{2n^{3/2}}},\quad\text{Riemann}\ \frac32 > 1\ \Longrightarrow\ \cG{\text{CN sur}\ [0, +\infty[}.$$

<h2 id="f-alt">8. Convergence uniforme sans convergence normale</h2>
<p>Quand la CN échoue, on revient à la définition : on <b>majore le reste</b> uniformément. L'outil le plus fréquent est le critère des séries alternées, avec $|R_n(x)|\leqslant|f_{n+1}(x)|$.</p>
<p class="ml">Exemple : $\sum\frac{(-1)^n}{n + x}$ sur $[0, +\infty[$ ($n\geqslant1$)</p>
<p><b>Pas de CN</b> : $\big\|\frac{(-1)^n}{n + x}\big\|_\infty = \frac1n$, et $\sum\frac1n$ diverge.</p>
<p><b>CS</b> : pour $x$ fixé, $\frac1{n + x}$ décroît vers $0$ : critère spécial.</p>
<p><b>CU</b> : la majoration du reste donne, pour tout $x\geqslant0$ :</p>
$$|R_n(x)|\leqslant\frac1{n + 1 + x}\leqslant\cO{\frac1{n + 1}}\ \Longrightarrow\ \|R_n\|_\infty\leqslant\frac1{n + 1}\to0:\ \cG{\text{CU sur}\ [0, +\infty[}.$$

<h2 id="f-sreg">9. La régularité de la somme</h2>
<div class="sbox">$$\textbf{Continuité}:\ f_n\ \text{continues},\ \sum f_n\ \text{CU sur}\ X\ (\text{ou sur tout segment})\ \Longrightarrow\ S = \sum_{n=0}^{+\infty}f_n\ \text{continue}.$$</div>
<div class="sbox">$$\textbf{Dérivation terme à terme}:\ f_n\ \mathcal C^1,\ \sum f_n\ \text{CS},\ \sum f_n'\ \textbf{CU}\ \Longrightarrow\ S\ \text{est}\ \mathcal C^1\ \text{et}\ S' = \sum_{n=0}^{+\infty}f_n'.$$</div>
<div class="sbox">$$\textbf{Intégration sur un segment}:\ \sum f_n\ \text{CU sur}\ [a, b]\ \Longrightarrow\ \int_a^b\sum_{n=0}^{+\infty}f_n = \sum_{n=0}^{+\infty}\int_a^bf_n.$$</div>
<div class="sbox">$$\textbf{Limite terme à terme}:\ f_n(x)\xrightarrow[x\to a]{}\ell_n,\ \sum f_n\ \text{CU}\ \Longrightarrow\ \sum\ell_n\ \text{converge et}\ \lim_{x\to a}S(x) = \sum_{n=0}^{+\infty}\ell_n.$$</div>
<p>Sur un intervalle non borné, l'intégration terme à terme relève du chapitre <a href="#c-maths-mp-6">Intégration sur un intervalle quelconque</a> (hypothèse $\sum\int|f_n|\lt+\infty$).</p>

<h2 id="f-zeta">10. L'exemple central : $\zeta(x) = \sum_{n\geqslant1}\frac1{n^x}$</h2>
<p><b>Domaine.</b> Série de Riemann : $\zeta$ est définie sur $\left]1, +\infty\right[$.</p>
<p><b>Continuité.</b> Sur $[a, +\infty[$ avec $a > 1$ :</p>
$$\Big|\frac1{n^x}\Big| = e^{-x\ln n}\leqslant\cO{\frac1{n^a}},\quad\sum\frac1{n^a}\ \text{CV}\ \Longrightarrow\ \text{CN sur}\ [a, +\infty[.$$
<p>Tout $x > 1$ est dans un tel $[a, +\infty[$ : $\cG{\zeta\ \text{est continue sur}\ \left]1, +\infty\right[}$.</p>
<p><b>Dérivabilité.</b> $f_n(x) = e^{-x\ln n}$, donc $f_n'(x) = -\frac{\ln n}{n^x}$. Sur $[a, +\infty[$ :</p>
$$|f_n'(x)|\leqslant\cO{\frac{\ln n}{n^a}},\qquad n^{\frac{1 + a}2}\cdot\frac{\ln n}{n^a} = \frac{\ln n}{n^{\frac{a - 1}2}}\to0,\ \text{avec}\ \frac{1 + a}2 > 1.$$
<p>Donc $\sum f_n'$ converge normalement sur $[a, +\infty[$, et $\cG{\zeta\ \text{est}\ \mathcal C^1}$ avec $\zeta'(x) = -\sum_{n\geqslant1}\frac{\ln n}{n^x}\lt0$ : $\zeta$ est strictement décroissante.</p>
<p><b>Limite en $+\infty$.</b> CN sur $[2, +\infty[$, et chaque terme a une limite : $\frac1{1^x} = 1$, et $\frac1{n^x}\to0$ pour $n\geqslant2$. Par le théorème de la limite terme à terme :</p>
$$\lim_{x\to+\infty}\zeta(x) = 1 + 0 + 0 + \cdots = \cG1.$$
<p><b>En $1^+$</b> : comparaison série-intégrale, $\zeta(x)\geqslant\int_1^{+\infty}\frac{dt}{t^x} = \frac1{x - 1}\to+\infty$.</p>

<h2 id="f-weier">11. Le théorème d'approximation de Weierstrass</h2>
<div class="sbox">$$f\ \text{continue sur le segment}\ [a, b]\ \Longrightarrow\ \text{il existe des polynômes}\ P_n\ \text{avec}\ \|f - P_n\|_\infty\to0.$$</div>
<p>Utilisation typique : si $\int_a^bf(t)\,t^k\,dt = 0$ pour tout $k$, alors $f = 0$. On approche $f$ par $P_n$, on obtient $\int f^2 = \lim\int fP_n = 0$, et $f^2$ est continue et positive.</p>
<p>Version pour les fonctions continues par morceaux : elles sont limites uniformes de fonctions en escalier.</p>

<h2 id="f-enonce">12. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Étudier la convergence de $(f_n)$ »</b><span>CS ($x$ fixé, cas selon $x$), puis CU ($\sup|f_n - f|$).</span></div>
<div><b>$f_n$ continues, limite discontinue</b><span>Pas de CU, sans calcul.</span></div>
<div><b>$f_n(x) = n^\alpha x\,e^{-nx}$, $\frac{nx}{1 + n^2x^2}$…</b><span>Étude de fonction : le maximum est en $x = \frac1n$ ou $\frac1{\sqrt n}$.</span></div>
<div><b>Pas de CU sur $X$ entier</b><span>Chercher la CU sur $[a, +\infty[$ ou sur $[0, a]$ : souvent suffisant pour la continuité.</span></div>
<div><b>« Montrer que $S$ est continue »</b><span>CN (ou CU) sur tout segment, ou sur tout $[a, +\infty[$.</span></div>
<div><b>« Montrer que $S$ est $\mathcal C^1$ »</b><span>CS de $\sum f_n$ et CU (souvent CN) de $\sum f_n'$.</span></div>
<div><b>Série alternée de fonctions</b><span>Pas de CN en général ; CU par $|R_n(x)|\leqslant|f_{n+1}(x)|$.</span></div>
<div><b>« Limite de $S$ en $+\infty$ »</b><span>Limite terme à terme, avec CU au voisinage de $+\infty$.</span></div>
<div><b>« Équivalent de $S$ en un bord »</b><span>Comparaison série-intégrale à $x$ fixé.</span></div>
<div><b>« $\int\sum = \sum\int$ sur un segment »</b><span>CU sur le segment suffit.</span></div>
<div><b>« Montrer que $\sum f_n$ ne converge pas uniformément »</b><span>$\|f_n\|_\infty\not\to0$, ou le reste en un point bien choisi.</span></div>
<div><b>$\int fP = 0$ pour tout polynôme $P$</b><span>Weierstrass, puis $\int f^2 = 0$.</span></div>
</div>

<h2 id="f-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Un majorant $\alpha_n$ qui dépend encore de $x$.</p>
<p><b>2.</b> Conclure à la CU à partir de la CS.</p>
<p><b>3.</b> Pour la dérivation, vérifier la CU des $f_n$ au lieu de celle des $f_n'$.</p>
<p><b>4.</b> Chercher la CN d'une série alternée et conclure qu'il n'y a pas CU.</p>
<p><b>5.</b> Calculer $\sup|f_n|$ sans étude de fonction, « au feeling ».</p>
<p><b>6.</b> Oublier les cas particuliers de $x$ dans la limite simple ($x = 0$, $x = 1$).</p>
<p><b>7.</b> Vouloir la CU sur $\left]0, +\infty\right[$ alors qu'elle n'a lieu que sur $[a, +\infty[$.</p>
<p><b>8.</b> Intervertir $\int$ et $\lim$ sur un intervalle non borné avec la seule CU.</p>
<p><b>9.</b> Croire que la CS conserve la continuité.</p>
<p><b>10.</b> Oublier que la CN demande des fonctions <b>bornées</b>.</p>
</div>

<h2 id="f-entrainement">S'entraîner</h2>
<div data-mlab="quizsf"></div>

<h2 id="f-arbre">L'arbre des méthodes</h2>
<p>Choisis ce que tu veux faire, réponds aux questions et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">CU d'une suite $(f_n)$</div>
<div class="tq">Limite simple discontinue ?</div><a class="tl" href="#f-neg">oui : pas de CU</a><div class="tno">non</div>
<div class="tq">Majorant $\alpha_n\to0$ évident ?</div><a class="tl" href="#f-cu">oui : CU</a><div class="tno">non</div>
<a class="tl tend" href="#f-cu">étude de $f_n - f$ : calculer le sup</a></div>
<div class="tb tR"><div class="tt">CU d'une série $\sum f_n$</div>
<div class="tq">$\sum\|f_n\|_\infty$ converge ?</div><a class="tl" href="#f-cn">oui : CN, donc CU</a><div class="tno">non</div>
<div class="tq">Série alternée ?</div><a class="tl" href="#f-alt">oui : $|R_n|\leqslant|f_{n+1}|$</a><div class="tno">non</div>
<div class="tq">$\|f_n\|_\infty\not\to0$ ?</div><a class="tl" href="#f-cn">oui : pas de CU</a><div class="tno">non</div>
<a class="tl tend" href="#f-cn">se restreindre à $[a, +\infty[$</a></div>
<div class="tb tG"><div class="tt">Régularité de la limite</div>
<div class="tq">Continuité ?</div><a class="tl" href="#f-reg">oui : CU sur les segments</a><div class="tno">non</div>
<div class="tq">Dérivabilité ?</div><a class="tl" href="#f-sreg">oui : CU des dérivées</a><div class="tno">non</div>
<a class="tl tend" href="#f-reg">intégrale : CU sur un segment</a></div>
<div class="tb tO"><div class="tt">Limite de $S$ en un bord</div>
<div class="tq">CU au voisinage ?</div><a class="tl" href="#f-zeta">oui : limite terme à terme</a><div class="tno">non</div>
<a class="tl tend" href="#f-zeta">minorer, série-intégrale</a></div>
<div class="tb tV"><div class="tt">Approcher $f$</div>
<div class="tq">$f$ continue sur un segment ?</div><a class="tl" href="#f-weier">oui : polynômes (Weierstrass)</a><div class="tno">non</div>
<a class="tl tend" href="#f-weier">continue par morceaux : escalier</a></div>
</div>
</div>
`,
"Polynômes": R`
<nav class="msum"><a href="#q-not">Notations</a><a href="#q-deriv">Dérivation, Taylor</a><a href="#q-div">Division euclidienne</a><a href="#q-reste">Trouver un reste</a><a href="#q-rac">Racines, multiplicité</a><a href="#q-fact">Factoriser</a><a href="#q-viete">Coefficients et racines</a><a href="#q-lag">Lagrange</a><a href="#q-pgcd">PGCD, Bézout</a><a href="#q-des">Éléments simples</a><a href="#q-coef">Calculer les coefficients</a><a href="#q-reel">Facteurs de degré 2</a><a href="#q-appli">Applications</a><a href="#q-exos">Exercices corrigés</a><a href="#q-enonce">Ce que l'énoncé te donne</a><a href="#q-erreurs">Erreurs</a><a href="#q-entrainement">S'entraîner</a><a href="#q-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les pôles et les facteurs du dénominateur. <span class="kV">violet</span> : les racines. <span class="kO">orange</span> : l'opération qu'on fait (multiplier, évaluer, poser $X = a + h$). <span class="kR">rouge</span> : les coefficients qu'on trouve. <span class="kG">vert</span> : le résultat.</p>

<h2 id="q-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Polynômes</td><td>$\mathbb K[X]$, $P = \sum_{k=0}^na_kX^k$</td><td>$\mathbb K = \mathbb R$ ou $\mathbb C$.</td></tr>
<tr><td>Degré</td><td>$\deg P$, et $\deg0 = -\infty$</td><td>$\deg(PQ) = \deg P + \deg Q$, $\deg(P + Q)\leqslant\max$.</td></tr>
<tr><td>Coefficient dominant</td><td>$a_n$ si $\deg P = n$</td><td>$P$ unitaire si $a_n = 1$.</td></tr>
<tr><td>Polynômes de degré $\leqslant n$</td><td>$\mathbb K_n[X]$</td><td>Espace vectoriel de dimension $n + 1$.</td></tr>
<tr><td>Divisibilité</td><td>$A\mid B$</td><td>$B = AC$ avec $C\in\mathbb K[X]$.</td></tr>
<tr><td>Fractions rationnelles</td><td>$\mathbb K(X)$, $F = \frac PQ$</td><td>Forme irréductible : $P\wedge Q = 1$.</td></tr>
</table>
<p class="ml piege">Piège</p>
<p>$\deg(P + Q)$ peut être <b>strictement</b> plus petit que $\max(\deg P, \deg Q)$ : $(X^2 + 1) + (-X^2) = 1$.</p>

<h2 id="q-deriv">2. Dérivation et formule de Taylor</h2>
<div class="sbox">$$(X^k)^{(j)} = \frac{k!}{(k - j)!}X^{k-j}\ (j\leqslant k),\qquad(PQ)^{(n)} = \sum_{k=0}^n\binom nkP^{(k)}Q^{(n-k)}\quad\text{(Leibniz)}.$$</div>
<div class="sbox">$$\textbf{Taylor}:\quad P = \sum_{k=0}^{\deg P}\frac{P^{(k)}(a)}{k!}(X - a)^k\qquad(\text{égalité exacte, pas de reste}).$$</div>
<p class="ml">Exemple : écrire $P = X^3 - 2X + 1$ en puissances de $(X - 1)$</p>
$$P(1) = 0,\qquad P' = 3X^2 - 2,\ P'(1) = 1,\qquad P'' = 6X,\ P''(1) = 6,\qquad P''' = 6.$$
$$P = 0 + 1\cdot(X - 1) + \frac62(X - 1)^2 + \frac66(X - 1)^3 = \cG{(X - 1) + 3(X - 1)^2 + (X - 1)^3}.$$
<p>Contrôle en $X = 0$ : $-1 + 3 - 1 = 1 = P(0)$. $\checkmark$</p>

<h2 id="q-div">3. La division euclidienne</h2>
<div class="sbox">$$B\neq0:\quad\exists!\,(Q, R),\quad A = BQ + R\quad\text{et}\quad\deg R\lt\deg B.$$</div>
<p class="ml">Exemple : $A = X^4 + 2X^3 - X + 1$ par $B = X^2 + X + 1$</p>
<p>À chaque étape, on divise le terme de plus haut degré du reste par $X^2$, et on soustrait :</p>
<table class="mtab">
<tr><th>Reste courant</th><th>Terme du quotient</th><th>On soustrait</th></tr>
<tr><td>$X^4 + 2X^3 + 0X^2 - X + 1$</td><td>$\cR{X^2}$</td><td>$X^2B = X^4 + X^3 + X^2$</td></tr>
<tr><td>$X^3 - X^2 - X + 1$</td><td>$\cR{X}$</td><td>$XB = X^3 + X^2 + X$</td></tr>
<tr><td>$-2X^2 - 2X + 1$</td><td>$\cR{-2}$</td><td>$-2B = -2X^2 - 2X - 2$</td></tr>
<tr><td>$3$</td><td colspan="2">degré $0\lt2$ : on s'arrête</td></tr>
</table>
$$\cG{X^4 + 2X^3 - X + 1 = (X^2 + X + 1)(X^2 + X - 2) + 3}.$$
<p>Contrôle en $X = 1$ : à gauche $1 + 2 - 1 + 1 = 3$, à droite $3\times0 + 3 = 3$. $\checkmark$</p>
<div data-mlab="diveucl"></div>

<h2 id="q-reste">4. Trouver un reste sans poser la division</h2>
<p>Le reste a un degré $\lt\deg B$ : on l'écrit avec des inconnues, puis on <b>évalue aux racines de $B$</b>.</p>
<p class="ml">Exemple 1 : reste de $X^n$ par $(X - 1)(X - 2)$</p>
<p>$X^n = (X - 1)(X - 2)Q + aX + b$. On évalue en $\cO{X = 1}$ et en $\cO{X = 2}$ :</p>
$$\left\{\begin{aligned}a + b &= 1\\2a + b &= 2^n\end{aligned}\right.\iff\left\{\begin{aligned}a &= 2^n - 1\\b &= 2 - 2^n\end{aligned}\right.\qquad\cG{R = (2^n - 1)X + 2 - 2^n}.$$
<p class="ml">Exemple 2 : reste de $X^n$ par $(X - 1)^2$ (racine double)</p>
<p>$X^n = (X - 1)^2Q + aX + b$. On évalue en $1$, puis on <b>dérive</b> et on évalue en $1$ (le terme $(X - 1)^2Q$ a une dérivée nulle en $1$) :</p>
$$\left\{\begin{aligned}1 &= a + b\\n &= a\end{aligned}\right.\qquad\Longrightarrow\qquad\cG{R = nX + 1 - n}.$$

<h2 id="q-rac">5. Racines et multiplicité</h2>
<div class="sbox">$$P(a) = 0\iff(X - a)\mid P.\qquad a\ \text{racine d'ordre}\ m\iff P(a) = P'(a) = \cdots = P^{(m-1)}(a) = 0\ \text{et}\ P^{(m)}(a)\neq0.$$</div>
<ul>
<li>Un polynôme non nul de degré $n$ a <b>au plus $n$ racines</b> (comptées avec multiplicité).</li>
<li>Conséquence : un polynôme qui a une infinité de racines est nul. C'est ainsi qu'on prouve que deux polynômes sont égaux.</li>
<li>$P$ réel : si $z$ est racine, $\overline z$ aussi, avec la même multiplicité.</li>
</ul>
<p class="ml">Exemple : la multiplicité de $1$ dans $P = X^4 - 2X^3 + 2X - 1$</p>
$$\begin{aligned}P(1) &= 1 - 2 + 2 - 1 = 0\\P' = 4X^3 - 6X^2 + 2,\quad P'(1) &= 4 - 6 + 2 = 0\\P'' = 12X^2 - 12X,\quad P''(1) &= 0\\P''' = 24X - 12,\quad P'''(1) &= 12\neq0\end{aligned}$$
<p>$1$ est racine d'ordre $\cG3$ : $P = (X - 1)^3(X + 1)$ (le dernier facteur s'obtient avec le coefficient dominant et $P(0) = -1$).</p>

<h2 id="q-fact">6. Factoriser</h2>
<div class="sbox">$$\textbf{D'Alembert-Gauss}:\ \text{tout polynôme non constant de}\ \mathbb C[X]\ \text{a une racine, donc est scindé}.$$</div>
<ul>
<li><b>Irréductibles de $\mathbb C[X]$</b> : les polynômes de degré $1$.</li>
<li><b>Irréductibles de $\mathbb R[X]$</b> : les degrés $1$, et les degrés $2$ de discriminant $\Delta\lt0$.</li>
<li>Pour factoriser dans $\mathbb R$ : factoriser dans $\mathbb C$, puis <b>regrouper chaque racine avec sa conjuguée</b> :</li>
</ul>
$$(X - z)(X - \overline z) = X^2 - 2\operatorname{Re}(z)\,X + |z|^2.$$
<p class="ml">Exemple 1 : $X^4 + 1$</p>
<p><b>Dans $\mathbb C$.</b> $z^4 = -1 = e^{i\pi}$ donne $z = e^{i\frac{\pi + 2k\pi}4}$ : $\cV{e^{\pm i\pi/4}}$ et $\cV{e^{\pm3i\pi/4}}$.</p>
<p><b>Dans $\mathbb R$.</b> On regroupe les conjuguées, avec $|z| = 1$ :</p>
$$\big(X - e^{i\pi/4}\big)\big(X - e^{-i\pi/4}\big) = X^2 - 2\cos\frac\pi4\,X + 1 = X^2 - \sqrt2X + 1,\qquad\big(X - e^{3i\pi/4}\big)\big(X - e^{-3i\pi/4}\big) = X^2 + \sqrt2X + 1.$$
$$\cG{X^4 + 1 = (X^2 - \sqrt2X + 1)(X^2 + \sqrt2X + 1)}.$$
<p>Astuce plus rapide : $X^4 + 1 = (X^2 + 1)^2 - 2X^2 = (X^2 + 1 - \sqrt2X)(X^2 + 1 + \sqrt2X)$.</p>
<p class="ml">Exemple 2 : $X^6 - 1$</p>
<p>Les racines sont les $\cV{e^{ik\pi/3}}$, $k = 0, \dots, 5$ : $\pm1$, $e^{\pm i\pi/3}$, $e^{\pm2i\pi/3}$. On regroupe ($2\cos\frac\pi3 = 1$, $2\cos\frac{2\pi}3 = -1$) :</p>
$$\cG{X^6 - 1 = (X - 1)(X + 1)(X^2 - X + 1)(X^2 + X + 1)}.$$

<h2 id="q-viete">7. Relations coefficients-racines</h2>
<p>Si $P = a_nX^n + \cdots + a_0$ est scindé, de racines $x_1, \dots, x_n$ :</p>
<div class="sbox">$$\sigma_1 = \sum_ix_i = -\frac{a_{n-1}}{a_n},\qquad\sigma_2 = \sum_{i\lt j}x_ix_j = \frac{a_{n-2}}{a_n},\qquad\dots,\qquad\sigma_n = \prod_ix_i = (-1)^n\frac{a_0}{a_n}.$$</div>
<p>Degré 2 : $x_1 + x_2 = -\frac ba$ et $x_1x_2 = \frac ca$. Degré 3 : $\sigma_1 = -\frac ba$, $\sigma_2 = \frac ca$, $\sigma_3 = -\frac da$.</p>
<p class="ml">Exemple : $x_1, x_2, x_3$ racines de $X^3 - 2X + 5$</p>
$$\sigma_1 = 0,\qquad\sigma_2 = -2,\qquad\sigma_3 = -5.$$
$$x_1^2 + x_2^2 + x_3^2 = \sigma_1^2 - 2\sigma_2 = 0 + 4 = \cG4,\qquad\frac1{x_1} + \frac1{x_2} + \frac1{x_3} = \frac{x_2x_3 + x_1x_3 + x_1x_2}{x_1x_2x_3} = \frac{\sigma_2}{\sigma_3} = \cG{\frac25}.$$

<h2 id="q-lag">8. L'interpolation de Lagrange</h2>
<div class="sbox">$$x_0, \dots, x_n\ \text{distincts}:\quad L_i = \prod_{j\neq i}\frac{X - x_j}{x_i - x_j},\quad L_i(x_j) = \delta_{i,j},\qquad P = \sum_{i=0}^ny_iL_i\ \text{est l'unique}\ P\in\mathbb K_n[X]\ \text{avec}\ P(x_i) = y_i.$$</div>
<p class="ml">Exemple : $P(0) = 1$, $P(1) = 3$, $P(2) = 7$</p>
$$L_0 = \frac{(X - 1)(X - 2)}{(0 - 1)(0 - 2)} = \frac{(X - 1)(X - 2)}2,\qquad L_1 = \frac{X(X - 2)}{1\cdot(-1)} = -X(X - 2),\qquad L_2 = \frac{X(X - 1)}{2\cdot1}.$$
$$P = 1\cdot\frac{X^2 - 3X + 2}2 - 3(X^2 - 2X) + 7\cdot\frac{X^2 - X}2 = \frac{8X^2 - 10X + 2}2 - 3X^2 + 6X = \cG{X^2 + X + 1}.$$
<p>Contrôle : $P(0) = 1$, $P(1) = 3$, $P(2) = 7$. $\checkmark$</p>

<h2 id="q-pgcd">9. PGCD, Bézout, Gauss</h2>
<div class="sbox">$$\textbf{Bézout}:\ A\wedge B = 1\iff\exists\,U, V,\ AU + BV = 1.\qquad\textbf{Gauss}:\ A\mid BC\ \text{et}\ A\wedge B = 1\ \Longrightarrow\ A\mid C.$$</div>
<ul>
<li>Le PGCD (unitaire) s'obtient par l'algorithme d'Euclide : c'est le dernier reste non nul.</li>
<li>Dans $\mathbb C[X]$ : $A\wedge B = 1\iff A$ et $B$ n'ont <b>aucune racine commune</b>.</li>
<li>$a_1, \dots, a_n$ distincts : si chaque $(X - a_i)$ divise $P$, alors $\prod(X - a_i)$ divise $P$.</li>
</ul>
<p class="ml">Exemple : PGCD de $X^4 - 1$ et $X^3 - 1$, avec une relation de Bézout</p>
$$\begin{aligned}X^4 - 1 &= X\cdot(X^3 - 1) + \cR{(X - 1)}\\X^3 - 1 &= (X - 1)(X^2 + X + 1) + 0\end{aligned}\qquad\Longrightarrow\qquad\cG{(X^4 - 1)\wedge(X^3 - 1) = X - 1}.$$
<p>On remonte la première ligne : $X - 1 = (X^4 - 1)\cdot1 + (X^3 - 1)\cdot(-X)$.</p>

<h2 id="q-des">10. La décomposition en éléments simples</h2>
<p>Elle découpe une fraction en somme de fractions simples. Elle sert à <b>primitiver</b>, à <b>télescoper</b> une somme et à calculer des dérivées $n$-ièmes.</p>
<p class="ml">Les 4 étapes</p>
<ol>
<li><b>Forme irréductible</b> : simplifier $\frac PQ$ s'il y a une racine commune.</li>
<li><b>Partie entière</b> : si $\deg P\geqslant\deg Q$, division euclidienne $P = QE + R$, et $\frac PQ = E + \frac RQ$ avec $\deg R\lt\deg Q$.</li>
<li><b>Factoriser $Q$</b> en irréductibles, et écrire la <b>forme</b> de la décomposition.</li>
<li><b>Calculer les coefficients</b> (§11), puis contrôler en une valeur.</li>
</ol>
<p class="ml">La forme de la décomposition</p>
<table class="mtab">
<tr><th>Facteur de $Q$</th><th>Il apporte</th></tr>
<tr><td>$\cB{(X - a)}$, pôle simple</td><td>$\dfrac{\cR{c}}{X - a}$</td></tr>
<tr><td>$\cB{(X - a)^m}$, pôle d'ordre $m$</td><td>$\dfrac{\cR{c_1}}{X - a} + \dfrac{\cR{c_2}}{(X - a)^2} + \cdots + \dfrac{\cR{c_m}}{(X - a)^m}$ : <b>toutes</b> les puissances</td></tr>
<tr><td>$\cB{(X^2 + pX + q)}$, $\Delta\lt0$ (dans $\mathbb R$)</td><td>$\dfrac{\cR{\alpha X + \beta}}{X^2 + pX + q}$</td></tr>
<tr><td>$\cB{(X^2 + pX + q)^m}$</td><td>$\sum_{k=1}^m\dfrac{\cR{\alpha_kX + \beta_k}}{(X^2 + pX + q)^k}$</td></tr>
</table>
<p>Exemple de forme : $\frac{3X + 1}{X^2(X + 1)(X^2 + 1)} = \frac aX + \frac b{X^2} + \frac c{X + 1} + \frac{dX + e}{X^2 + 1}$, avec $5$ inconnues pour un dénominateur de degré $5$.</p>
<p class="ml piege">Piège</p>
<p>Le nombre d'inconnues est toujours égal au degré du dénominateur. Si on en a moins, on a oublié une puissance.</p>

<h2 id="q-coef">11. Calculer les coefficients</h2>
<p class="ml">Méthode 1 : pôle simple, on multiplie et on évalue</p>
<p>Pour trouver le coefficient de $\frac1{X - a}$ : multiplier toute l'égalité par $\cO{(X - a)}$, puis évaluer en $\cO{X = a}$. Tous les autres termes s'annulent. En pratique, on « cache » le facteur $(X - a)$ dans la fraction et on remplace $X$ par $a$.</p>
<div class="sbox">$$\text{Pôle simple}\ a:\qquad c = \Big[(X - a)F(X)\Big]_{X = a} = \frac{P(a)}{Q'(a)}.$$</div>
<p>Exemple : $F = \frac{X + 3}{(X - 1)(X + 2)(X - 3)} = \frac a{X - 1} + \frac b{X + 2} + \frac c{X - 3}$.</p>
$$\cR a = \frac{1 + 3}{(1 + 2)(1 - 3)} = \frac4{-6} = -\frac23,\qquad\cR b = \frac{-2 + 3}{(-2 - 1)(-2 - 3)} = \frac1{15},\qquad\cR c = \frac{3 + 3}{(3 - 1)(3 + 2)} = \frac35.$$
<p>Contrôle en $X = 0$ : $F(0) = \frac3{6} = \frac12$ et $\frac23 + \frac1{30} - \frac15 = \frac{20 + 1 - 6}{30} = \frac12$. $\checkmark$</p>
<p>La formule $\frac{P(a)}{Q'(a)}$ est la meilleure quand $Q$ n'est pas factorisé, comme $X^n - 1$ (voir les exercices F, G, I).</p>
<p class="ml">Méthode 2 : pôle multiple, la plus haute puissance d'abord</p>
<p>Pour un pôle $a$ d'ordre $m$, multiplier par $\cO{(X - a)^m}$ et évaluer en $a$ donne le coefficient de $\frac1{(X - a)^m}$ (le plus haut). Les autres s'obtiennent par :</p>
<ul>
<li><b>la limite en $+\infty$ après multiplication par $X$</b> : $\lim XF(X)$ = somme des coefficients des $\frac1{X - a}$ (degré 1 en bas) ;</li>
<li><b>une valeur particulière</b> de $X$ (souvent $X = 0$) ;</li>
<li><b>un DL au voisinage du pôle</b> : poser $\cO{X = a + h}$, développer $(X - a)^mF$ en puissances de $h$, et lire tous les coefficients d'un coup.</li>
</ul>
<p>Exemple : $F = \frac{X + 1}{(X + 2)(X - 1)^2} = \frac a{X + 2} + \frac b{X - 1} + \frac c{(X - 1)^2}$.</p>
$$\cR a = \Big[\frac{X + 1}{(X - 1)^2}\Big]_{X = -2} = \frac{-1}{9},\qquad\cR c = \Big[\frac{X + 1}{X + 2}\Big]_{X = 1} = \frac23.$$
<p>Pour $b$, on multiplie par $\cO X$ et on fait tendre $X$ vers $+\infty$ : $XF(X)\to0$ (degré $1$ en haut, $3$ en bas), et à droite on obtient $a + b + 0$.</p>
$$0 = a + b\ \Longrightarrow\ \cR{b = \frac19}.\qquad\text{Contrôle en}\ X = 0:\ \frac1{2} = -\frac1{18} - \frac19 + \frac23 = \frac{-1 - 2 + 12}{18} = \frac12.\ \checkmark$$
<p>C'est l'exercice B ci-dessous.</p>
<p class="ml">Méthode 3 : la parité</p>
<p>Si $F(-X) = F(X)$ ou $F(-X) = -F(X)$, on écrit la décomposition de $F(-X)$ et on identifie par unicité : cela relie les coefficients deux à deux.</p>
<p>Exemple : $F = \frac1{X^2(X^2 - 1)}$ est paire. $F = \frac aX + \frac b{X^2} + \frac c{X - 1} + \frac d{X + 1}$, et $F(-X) = -\frac aX + \frac b{X^2} - \frac c{X + 1} - \frac d{X - 1}$. Par unicité, $a = -a$, donc $a = 0$, et $d = -c$. Ensuite $b = \big[\frac1{X^2 - 1}\big]_0 = -1$ et $c = \big[\frac1{X^2(X + 1)}\big]_1 = \frac12$ :</p>
$$\cG{F = -\frac1{X^2} + \frac{1/2}{X - 1} - \frac{1/2}{X + 1}}.$$
<p class="ml">Méthode 4 : l'identification (en dernier recours)</p>
<p>On remet tout au même dénominateur et on identifie les coefficients des numérateurs. C'est sûr mais long : un système de $n$ équations à $n$ inconnues.</p>
$$\frac{1}{X^2 - 1} = \frac a{X - 1} + \frac b{X + 1} = \frac{(a + b)X + (a - b)}{X^2 - 1}\iff\left\{\begin{aligned}a + b &= 0\\a - b &= 1\end{aligned}\right.\iff a = \frac12,\ b = -\frac12.$$
<div data-mlab="des"></div>

<h2 id="q-reel">12. Les facteurs de degré 2 (dans $\mathbb R(X)$)</h2>
<p class="ml">Méthode A : multiplier et évaluer en une racine complexe</p>
<p>Pour $\frac{\alpha X + \beta}{X^2 + pX + q}$ avec un facteur simple : multiplier par $\cO{X^2 + pX + q}$ et évaluer en une racine complexe $z$. On obtient $\alpha z + \beta$, puis on sépare parties réelle et imaginaire.</p>
<p>Exemple : $F = \frac{X + 2}{X(X^2 + 1)} = \frac aX + \frac{\alpha X + \beta}{X^2 + 1}$.</p>
$$\cR a = \Big[\frac{X + 2}{X^2 + 1}\Big]_{X = 0} = 2.\qquad\text{En}\ \cO{X = i}:\ \alpha i + \beta = \Big[\frac{X + 2}X\Big]_{X = i} = \frac{i + 2}i = 1 - 2i.$$
$$\beta = 1,\ \alpha = -2\qquad\Longrightarrow\qquad\cG{F = \frac2X + \frac{-2X + 1}{X^2 + 1}}.$$
<p>Contrôle en $X = 1$ : $\frac32 = 2 + \frac{-1}2$. $\checkmark$</p>
<p class="ml">Méthode B : passer par $\mathbb C$, puis regrouper les conjugués</p>
<p>Si $\frac c{X - z}$ apparaît dans $\mathbb C$, alors $\frac{\overline c}{X - \overline z}$ aussi (fraction réelle), et :</p>
<div class="sbox">$$\frac c{X - z} + \frac{\overline c}{X - \overline z} = \frac{2\operatorname{Re}(c)\,X - 2\operatorname{Re}(c\,\overline z)}{X^2 - 2\operatorname{Re}(z)\,X + |z|^2}.$$</div>
<p class="ml">Méthode C : facteur de degré 2 élevé à une puissance</p>
<p>On développe le numérateur en puissances de $Y = X^2 + pX + q$ (divisions euclidiennes successives par $Y$), comme dans l'exercice E.</p>

<h2 id="q-appli">13. À quoi ça sert</h2>
<p class="ml">Primitiver une fraction rationnelle</p>
$$\int\frac{dx}{x^2 - 1} = \frac12\int\Big(\frac1{x - 1} - \frac1{x + 1}\Big)dx = \frac12\ln\Big|\frac{x - 1}{x + 1}\Big| + C.$$
<p>Les morceaux s'intègrent avec $\ln|x - a|$, $-\frac1{(k - 1)(x - a)^{k-1}}$, et pour $\frac{\alpha x + \beta}{x^2 + px + q}$ : un $\ln$ (partie en $\frac{u'}u$) plus un $\arctan$ (forme canonique).</p>
<p class="ml">Télescoper une somme</p>
$$\sum_{k=1}^n\frac1{k(k + 1)} = \sum_{k=1}^n\Big(\frac1k - \frac1{k + 1}\Big) = 1 - \frac1{n + 1}.$$
<p class="ml">La dérivée logarithmique</p>
<div class="sbox">$$P = \lambda\prod_{i=1}^n(X - x_i)\ \Longrightarrow\ \frac{P'}P = \sum_{i=1}^n\frac1{X - x_i}\qquad(\text{racines comptées avec multiplicité}).$$</div>
<p class="ml">Dérivée $n$-ième</p>
$$\frac1{x^2 - 1} = \frac12\Big(\frac1{x - 1} - \frac1{x + 1}\Big)\ \Longrightarrow\ \Big(\frac1{x^2 - 1}\Big)^{(n)} = \frac{(-1)^nn!}2\Big(\frac1{(x - 1)^{n+1}} - \frac1{(x + 1)^{n+1}}\Big).$$

<h2 id="q-exos">14. Exercices corrigés (feuille d'exercices 15 à 17)</h2>
<p class="ml">Exercice 15 A : $\dfrac{X^3}{X^2 - 3X + 2}$</p>
<p><b>Partie entière</b> ($3\geqslant2$) : $X^3 = (X^2 - 3X + 2)(X + 3) + 7X - 6$. Contrôle : $(X^2 - 3X + 2)(X + 3) = X^3 - 7X + 6$.</p>
<p><b>Dénominateur</b> : $X^2 - 3X + 2 = \cB{(X - 1)(X - 2)}$. <b>Pôles simples</b> :</p>
$$\frac{7X - 6}{(X - 1)(X - 2)} = \frac a{X - 1} + \frac b{X - 2},\qquad\cR a = \frac{7 - 6}{1 - 2} = -1,\qquad\cR b = \frac{14 - 6}{2 - 1} = 8.$$
$$\cG{\frac{X^3}{X^2 - 3X + 2} = X + 3 - \frac1{X - 1} + \frac8{X - 2}}.\qquad\text{Contrôle en}\ 0:\ 0 = 3 + 1 - 4.\ \checkmark$$
<p class="ml">Exercice 15 B : $\dfrac{X + 1}{(X + 2)(X - 1)^2}$</p>
<p>Calculée au §11 (méthode 2) : $\cG{-\frac{1/9}{X + 2} + \frac{1/9}{X - 1} + \frac{2/3}{(X - 1)^2}}$.</p>
<p class="ml">Exercice 15 C : $\dfrac{X^5 + 1}{(X^2 - X)^2}$</p>
<p><b>Dénominateur</b> : $(X^2 - X)^2 = \cB{X^2(X - 1)^2} = X^4 - 2X^3 + X^2$. <b>Partie entière</b> ($5\geqslant4$) :</p>
$$(X + 2)(X^4 - 2X^3 + X^2) = X^5 - 3X^3 + 2X^2,\qquad X^5 + 1 = (X + 2)(X^4 - 2X^3 + X^2) + 3X^3 - 2X^2 + 1.$$
<p><b>Forme</b> : $F = X + 2 + \frac aX + \frac b{X^2} + \frac c{X - 1} + \frac d{(X - 1)^2}$.</p>
<p><b>Plus hautes puissances</b> :</p>
$$\cR b = \Big[\frac{X^5 + 1}{(X - 1)^2}\Big]_{X = 0} = 1,\qquad\cR d = \Big[\frac{X^5 + 1}{X^2}\Big]_{X = 1} = 2.$$
<p><b>Coefficient $a$, par un DL en $0$</b> : $X^2F = \frac{X^5 + 1}{(X - 1)^2} = (1 + X^5)(1 - X)^{-2} = 1 + 2X + o(X)$. Le coefficient de $X$ donne $\cR{a = 2}$.</p>
<p><b>Coefficient $c$, par un DL en $1$</b> : avec $\cO{X = 1 + h}$, $(X - 1)^2F = \frac{(1 + h)^5 + 1}{(1 + h)^2} = (2 + 5h)(1 - 2h) + o(h) = 2 + h + o(h)$. Donc $\cR{c = 1}$.</p>
<p><b>Contrôle</b> : $XF - X(X + 2)\to a + c = 3$, et le reste vaut $\frac{3X^3 + \dots}{X^4}$, donc $X\cdot\frac{3X^3}{X^4}\to3$. $\checkmark$</p>
$$\cG{\frac{X^5 + 1}{(X^2 - X)^2} = X + 2 + \frac2X + \frac1{X^2} + \frac1{X - 1} + \frac2{(X - 1)^2}}.$$
<p class="ml">Exercice 15 D : $\dfrac{X^3 + 1}{X^3 - 1}$ dans $\mathbb C(X)$ et $\mathbb R(X)$</p>
<p><b>Partie entière</b> : $\frac{X^3 + 1}{X^3 - 1} = 1 + \frac2{X^3 - 1}$. <b>Pôles</b> : $\cB{1, j, j^2}$, simples.</p>
<p><b>Dans $\mathbb C(X)$</b>, avec $c = \frac{P(\omega)}{Q'(\omega)} = \frac2{3\omega^2} = \frac{2\omega}3$ (car $\omega^3 = 1$) :</p>
$$\cG{1 + \frac23\Big(\frac1{X - 1} + \frac j{X - j} + \frac{j^2}{X - j^2}\Big)}.$$
<p><b>Dans $\mathbb R(X)$</b> : on regroupe $j$ et $j^2 = \overline j$ ($j + \overline j = -1$, $j\overline j = 1$) :</p>
$$\frac j{X - j} + \frac{\overline j}{X - \overline j} = \frac{(j + \overline j)X - 2j\overline j}{X^2 + X + 1} = \frac{-X - 2}{X^2 + X + 1}.$$
$$\cG{\frac{X^3 + 1}{X^3 - 1} = 1 + \frac{2/3}{X - 1} - \frac23\cdot\frac{X + 2}{X^2 + X + 1}}.\qquad\text{Contrôle en}\ 0:\ -1 = 1 - \frac23 - \frac43.\ \checkmark$$
<p class="ml">Exercice 15 E : $\dfrac{X^4 + X + 1}{X(X^2 + 1)^3}$</p>
<p><b>Forme</b> : $\frac aX + \frac{\alpha_1X + \beta_1}{X^2 + 1} + \frac{\alpha_2X + \beta_2}{(X^2 + 1)^2} + \frac{\alpha_3X + \beta_3}{(X^2 + 1)^3}$ (7 inconnues, degré 7).</p>
<p><b>Pôle $0$</b> : $\cR a = \Big[\frac{X^4 + X + 1}{(X^2 + 1)^3}\Big]_0 = 1$. On retire ce terme :</p>
$$F - \frac1X = \frac{X^4 + X + 1 - (X^2 + 1)^3}{X(X^2 + 1)^3} = \frac{-X^6 - 2X^4 - 3X^2 + X}{X(X^2 + 1)^3} = \frac{-X^5 - 2X^3 - 3X + 1}{(X^2 + 1)^3}.$$
<p><b>Puissances de $Y = X^2 + 1$</b> : on remplace $X^2 = Y - 1$, donc $X^3 = X(Y - 1)$ et $X^5 = X(Y - 1)^2$ :</p>
$$-X(Y^2 - 2Y + 1) - 2X(Y - 1) - 3X + 1 = -XY^2 + \cancel{2XY} - X - \cancel{2XY} + 2X - 3X + 1 = -XY^2 - 2X + 1.$$
$$\cG{\frac{X^4 + X + 1}{X(X^2 + 1)^3} = \frac1X - \frac X{X^2 + 1} + \frac{1 - 2X}{(X^2 + 1)^3}}.\qquad\text{Contrôle en}\ 1:\ \frac38 = 1 - \frac12 - \frac18.\ \checkmark$$
<p class="ml">Exercice 15 F : $\dfrac{X^{n-1}}{X^n - 1}$ dans $\mathbb C(X)$</p>
<p>Pôles simples : les $\cB{\omega_k = e^{2ik\pi/n}}$, $0\leqslant k\leqslant n - 1$. Avec $Q' = nX^{n-1}$ :</p>
$$c_k = \frac{\omega_k^{n-1}}{n\,\omega_k^{n-1}} = \frac1n\qquad\Longrightarrow\qquad\cG{\frac{X^{n-1}}{X^n - 1} = \frac1n\sum_{k=0}^{n-1}\frac1{X - \omega_k}}.$$
<p>C'est aussi $\frac1n\cdot\frac{Q'}Q$ : la dérivée logarithmique.</p>
<p class="ml">Exercice 15 G : $\dfrac1{X^n - 1}$ dans $\mathbb C(X)$</p>
$$c_k = \frac1{n\,\omega_k^{n-1}} = \frac{\omega_k}{n\,\omega_k^n} = \frac{\omega_k}n\qquad\Longrightarrow\qquad\cG{\frac1{X^n - 1} = \frac1n\sum_{k=0}^{n-1}\frac{\omega_k}{X - \omega_k}}.$$
<p class="ml">Exercice 15 H : $\dfrac1{(X - 1)(X^n - 1)}$ dans $\mathbb C(X)$</p>
<p>$1$ est racine de $X^n - 1$ : c'est un <b>pôle double</b>. On écrit $X^n - 1 = (X - 1)\Phi$ avec $\Phi = 1 + X + \cdots + X^{n-1}$, donc le dénominateur vaut $(X - 1)^2\Phi$.</p>
<p><b>Pôles $\omega_k$, $k\neq0$, simples</b> :</p>
$$c_k = \frac1{(\omega_k - 1)\,n\,\omega_k^{n-1}} = \frac{\omega_k}{n(\omega_k - 1)}.$$
<p><b>Pôle double $1$</b> : $(X - 1)^2F = \frac1\Phi$. Le coefficient de $\frac1{(X - 1)^2}$ est $\frac1{\Phi(1)} = \frac1n$, et celui de $\frac1{X - 1}$ est la dérivée de $\frac1\Phi$ en $1$ :</p>
$$\Big(\frac1\Phi\Big)'(1) = -\frac{\Phi'(1)}{\Phi(1)^2} = -\frac{1 + 2 + \cdots + (n - 1)}{n^2} = -\frac{n(n - 1)/2}{n^2} = -\frac{n - 1}{2n}.$$
$$\cG{\frac1{(X - 1)(X^n - 1)} = \frac1{n(X - 1)^2} - \frac{n - 1}{2n(X - 1)} + \sum_{k=1}^{n-1}\frac{\omega_k}{n(\omega_k - 1)(X - \omega_k)}}.$$
<p>Contrôle avec $n = 2$ : $\frac1{(X - 1)^2(X + 1)} = \frac{1/2}{(X - 1)^2} - \frac{1/4}{X - 1} + \frac{1/4}{X + 1}$, ce qu'on retrouve directement. $\checkmark$</p>
<p class="ml">Exercice 15 I : $\dfrac1{X^{2n} - 1}$ dans $\mathbb C(X)$ et $\mathbb R(X)$</p>
<p><b>Dans $\mathbb C(X)$</b> : pôles $\cB{\omega_k = e^{ik\pi/n}}$, $0\leqslant k\leqslant2n - 1$, coefficients $\frac{\omega_k}{2n}$ (comme en G) :</p>
$$\frac1{X^{2n} - 1} = \frac1{2n}\sum_{k=0}^{2n-1}\frac{\omega_k}{X - \omega_k}.$$
<p><b>Dans $\mathbb R(X)$</b> : les pôles réels sont $\omega_0 = 1$ et $\omega_n = -1$. Les autres vont par paires conjuguées $\omega_k$, $\omega_{2n-k} = \overline{\omega_k}$ pour $1\leqslant k\leqslant n - 1$. Avec la formule du §12 ($c = \frac{\omega}{2n}$, $c\,\overline\omega = \frac1{2n}$) :</p>
$$\frac{\omega_k/2n}{X - \omega_k} + \frac{\overline{\omega_k}/2n}{X - \overline{\omega_k}} = \frac1n\cdot\frac{\cos\frac{k\pi}n\,X - 1}{X^2 - 2\cos\frac{k\pi}n\,X + 1}.$$
$$\cG{\frac1{X^{2n} - 1} = \frac1{2n}\Big(\frac1{X - 1} - \frac1{X + 1}\Big) + \frac1n\sum_{k=1}^{n-1}\frac{\cos\frac{k\pi}n\,X - 1}{X^2 - 2\cos\frac{k\pi}n\,X + 1}}.$$
<p class="ml">Exercice 15 J : $\dfrac1{(X - 1)(X - 2)\cdots(X - n)}$</p>
<p>Pôles simples $1, \dots, n$. Pour le pôle $k$, on cache $(X - k)$ et on évalue en $k$ :</p>
$$c_k = \prod_{j\neq k}\frac1{k - j} = \frac1{\underbrace{(k - 1)(k - 2)\cdots1}_{(k-1)!}\cdot\underbrace{(-1)(-2)\cdots(k - n)}_{(-1)^{n-k}(n - k)!}} = \frac{(-1)^{n-k}}{(k - 1)!\,(n - k)!}.$$
$$\cG{\frac1{\prod_{j=1}^n(X - j)} = \sum_{k=1}^n\frac{(-1)^{n-k}}{(k - 1)!\,(n - k)!}\cdot\frac1{X - k} = \frac1{(n - 1)!}\sum_{k=1}^n\frac{(-1)^{n-k}\binom{n - 1}{k - 1}}{X - k}}.$$
<p class="ml">Exercice 16 : $P$ scindé sur $\mathbb R$, montrer $P'(x)^2 - P(x)P''(x)\geqslant0$</p>
<p><b>Cas $P$ constant</b> : $0\geqslant0$. Sinon, $P = \lambda\prod_{i=1}^n(X - a_i)$ avec les $a_i$ réels.</p>
<p><b>Si $P(x)\neq0$</b> : la dérivée logarithmique donne $\frac{P'}P(x) = \sum_i\frac1{x - a_i}$. On dérive :</p>
$$\Big(\frac{P'}P\Big)' = \frac{P''P - P'^2}{P^2} = -\sum_{i=1}^n\frac1{(x - a_i)^2}\lt0\qquad\Longrightarrow\qquad P'(x)^2 - P(x)P''(x) = P(x)^2\sum_i\frac1{(x - a_i)^2} > 0.$$
<p><b>Si $P(x) = 0$</b> : l'expression vaut $P'(x)^2\geqslant0$. $\cG{\text{Dans tous les cas, elle est}\geqslant0}$.</p>
<p class="ml">Exercice 17 : $\sum_{k=1}^n\frac{x_k^j}{P'(x_k)}$ pour $0\leqslant j\leqslant n - 1$</p>
<p><b>Étape 1 : la décomposition.</b> $\deg X^j\lt n = \deg P$, pôles simples $x_k$ : avec $c_k = \frac{x_k^j}{P'(x_k)}$,</p>
$$\frac{X^j}{P} = \sum_{k=1}^n\frac{x_k^j}{P'(x_k)}\cdot\frac1{X - x_k}.$$
<p><b>Étape 2 : multiplier par $\cO X$ et faire tendre $X$ vers $+\infty$.</b> À droite, chaque $\frac X{X - x_k}\to1$ : on obtient exactement la somme cherchée. À gauche, $P$ est unitaire de degré $n$ :</p>
$$\frac{X^{j+1}}{P}\xrightarrow[X\to+\infty]{}\left\{\begin{aligned}&0&&\text{si}\ j + 1\lt n\\&1&&\text{si}\ j + 1 = n\end{aligned}\right.$$
$$\cG{\sum_{k=1}^n\frac{x_k^j}{P'(x_k)} = 0\ \text{pour}\ 0\leqslant j\leqslant n - 2,\qquad\sum_{k=1}^n\frac{x_k^{n-1}}{P'(x_k)} = 1}.$$

<h2 id="q-enonce">15. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Reste de $A$ par $B$ » avec $B$ factorisé</b><span>Écrire $R$ avec des inconnues, évaluer aux racines de $B$ (dériver si racine multiple).</span></div>
<div><b>« Montrer que $(X - a)^m\mid P$ »</b><span>$P(a) = \cdots = P^{(m-1)}(a) = 0$.</span></div>
<div><b>« Montrer que $P = Q$ »</b><span>$P - Q$ a une infinité de racines, ou plus de racines que son degré.</span></div>
<div><b>Racines complexes et $P$ réel</b><span>Conjuguées deux à deux : regrouper pour factoriser dans $\mathbb R$.</span></div>
<div><b>$\sum x_i^2$, $\sum\frac1{x_i}$ pour les racines</b><span>Relations coefficients-racines ($\sigma_1, \sigma_2, \dots$).</span></div>
<div><b>« Polynôme qui prend des valeurs données »</b><span>Lagrange.</span></div>
<div><b>« $A$ et $B$ premiers entre eux »</b><span>Pas de racine commune dans $\mathbb C$, ou Bézout.</span></div>
<div><b>Une fraction à intégrer, une somme à calculer</b><span>Décomposition en éléments simples.</span></div>
<div><b>$\deg P\geqslant\deg Q$</b><span>Partie entière d'abord (division euclidienne).</span></div>
<div><b>Dénominateur $X^n - 1$, $X^{2n} - 1$</b><span>Pôles $e^{2ik\pi/n}$, coefficients $\frac{P(\omega)}{Q'(\omega)}$.</span></div>
<div><b>$\frac{P'}P$ ou $P'^2 - PP''$</b><span>Dérivée logarithmique : $\sum\frac1{X - x_i}$.</span></div>
<div><b>$\sum\frac{x_k^j}{P'(x_k)}$</b><span>Décomposer $\frac{X^j}P$, puis multiplier par $X$ et $X\to+\infty$.</span></div>
<div><b>Fraction paire ou impaire</b><span>Comparer $F(-X)$ et $\pm F(X)$ par unicité.</span></div>
<div><b>Facteur $X^2 + pX + q$, $\Delta\lt0$</b><span>Évaluer en une racine complexe, ou passer par $\mathbb C$.</span></div>
</div>

<h2 id="q-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Oublier la partie entière quand $\deg P\geqslant\deg Q$.</p>
<p><b>2.</b> Pour un pôle double, n'écrire que $\frac c{(X - a)^2}$ et oublier $\frac{c'}{X - a}$.</p>
<p><b>3.</b> Mettre une constante au-dessus d'un facteur de degré $2$ au lieu de $\alpha X + \beta$.</p>
<p><b>4.</b> Appliquer « cacher et évaluer » à un coefficient qui n'est pas le plus haut d'un pôle multiple.</p>
<p><b>5.</b> Ne pas simplifier la fraction d'abord (racine commune en haut et en bas).</p>
<p><b>6.</b> Factoriser $X^2 + 1$ dans $\mathbb R$.</p>
<p><b>7.</b> Dans Viète, oublier les signes alternés : $\sigma_n = (-1)^n\frac{a_0}{a_n}$.</p>
<p><b>8.</b> Croire que $\deg(P + Q) = \max(\deg P, \deg Q)$ toujours.</p>
<p><b>9.</b> Pour la multiplicité, s'arrêter à $P'(a) = 0$ sans regarder $P''(a)$.</p>
<p><b>10.</b> Ne jamais contrôler : une valeur de $X$ (souvent $0$ ou $1$) suffit pour détecter une erreur.</p>
</div>

<h2 id="q-entrainement">S'entraîner</h2>
<div data-mlab="quizpoly"></div>

<h2 id="q-arbre">L'arbre des méthodes</h2>
<p>Choisis ce que tu veux faire, réponds aux questions et clique la méthode pour y aller.</p>
<div class="tree">
<div class="troot">Que veux-tu faire ?</div>
<div class="tbranches">
<div class="tb tB"><div class="tt">Décomposer $\frac PQ$</div>
<div class="tq">$\deg P\geqslant\deg Q$ ?</div><a class="tl" href="#q-div">oui : partie entière d'abord</a><div class="tno">non</div>
<div class="tq">Pôle simple ?</div><a class="tl" href="#q-coef">oui : cacher et évaluer, $\frac{P(a)}{Q'(a)}$</a><div class="tno">non</div>
<div class="tq">Pôle multiple ?</div><a class="tl" href="#q-coef">oui : plus haute puissance, puis $\lim XF$ ou DL</a><div class="tno">non</div>
<div class="tq">Facteur $X^2 + pX + q$ ?</div><a class="tl" href="#q-reel">oui : évaluer en une racine complexe</a><div class="tno">non</div>
<a class="tl tend" href="#q-coef">identification (en dernier recours)</a></div>
<div class="tb tR"><div class="tt">Factoriser $P$</div>
<div class="tq">Racine évidente ?</div><a class="tl" href="#q-rac">oui : $(X - a)\mid P$, multiplicité</a><div class="tno">non</div>
<div class="tq">$X^n\pm a$ ?</div><a class="tl" href="#q-fact">oui : racines $n$-ièmes</a><div class="tno">non</div>
<a class="tl tend" href="#q-fact">dans $\mathbb R$ : regrouper les conjuguées</a></div>
<div class="tb tG"><div class="tt">Trouver un reste</div>
<div class="tq">Diviseur factorisé ?</div><a class="tl" href="#q-reste">oui : évaluer aux racines</a><div class="tno">non</div>
<div class="tq">Racine multiple ?</div><a class="tl" href="#q-reste">oui : dériver puis évaluer</a><div class="tno">non</div>
<a class="tl tend" href="#q-div">poser la division</a></div>
<div class="tb tO"><div class="tt">Racines sans les calculer</div>
<div class="tq">Somme, produit, $\sum x_i^2$ ?</div><a class="tl" href="#q-viete">oui : relations de Viète</a><div class="tno">non</div>
<a class="tl tend" href="#q-appli">$\frac{P'}P = \sum\frac1{X - x_i}$</a></div>
<div class="tb tV"><div class="tt">Construire un polynôme</div>
<div class="tq">Valeurs imposées ?</div><a class="tl" href="#q-lag">oui : Lagrange</a><div class="tno">non</div>
<a class="tl tend" href="#q-pgcd">PGCD, Bézout : Euclide</a></div>
</div>
</div>
`
};

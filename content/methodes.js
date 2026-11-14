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
<li>$\chi_A(0) = (-1)^n\det A$ : ici $\chi_A(0) = (0-4)(0-1)^2 = -4$ et $\det A = 4$, donc $(-1)^3\times4 = -4$. $\checkmark$</li>
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
<p>On contrôle avec $L_1$ : $-2x + x + x = 0$. $\checkmark$</p>
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
`
};

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
`
};

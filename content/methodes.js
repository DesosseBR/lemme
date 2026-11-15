/* Méthode : un chapitre, la façon de faire. Clé = titre du chapitre.
   Blocs : Réflexe (quand on voit quoi), Méthode (étapes), Exemple, Piège. Les data-mlab sont les labos interactifs. */
LEMME.METHODES = {
"Matrices et systèmes linéaires": R`
<nav class="msum"><a href="#m-taille">Taille</a><a href="#m-somme">Somme</a><a href="#m-produit">Produit</a><a href="#m-regles">Règles de calcul</a><a href="#m-puiss">Puissances</a><a href="#m-nilp">Nilpotentes</a><a href="#m-transp">Transposée</a><a href="#m-inv">Inverse</a><a href="#m-sys">Systèmes</a><a href="#m-gauss">Pivot de Gauss</a><a href="#m-trace">Trace</a><a href="#m-al">Applications linéaires</a><a href="#m-compo">Composer</a><a href="#m-passage">Passage</a><a href="#m-chgt">Changement de base</a><a href="#m-an">Calculer $A^n$</a><a href="#m-blocs">Blocs</a><a href="#m-arbre">L'arbre</a><a href="#m-reflexes">Réflexes</a><a href="#m-erreurs">Erreurs</a><a href="#m-entrainement">S'entraîner</a></nav>

<h2 id="m-taille">1. Taille et notations</h2>
<div class="sbox">$$A = (a_{i,j})_{\substack{1\leqslant i\leqslant n\\1\leqslant j\leqslant p}}\in\mathcal M_{n,p}(\mathbb K)\iff A\ \text{a}\ n\ \text{lignes et}\ p\ \text{colonnes}.$$</div>
<ul>
<li>$a_{i,j}$ : <b>ligne $i$ d'abord, colonne $j$ ensuite</b>.</li>
<li>$\mathcal M_n(\mathbb K) = \mathcal M_{n,n}(\mathbb K)$ : matrices <b>carrées</b>.</li>
<li>Matrice ligne : $n = 1$. Matrice colonne : $p = 1$.</li>
</ul>
<p class="ml">Exemple</p>
<p><b>Étape 1 : Rappel.</b> Dans $a_{i,j}$, le premier indice $i$ est la <b>ligne</b>, le second $j$ la <b>colonne</b>. Une matrice à $n$ lignes et $p$ colonnes est dans $\mathcal M_{n,p}(\mathbb K)$.</p>
<p><b>Étape 2 : La taille.</b> On compte $2$ lignes et $3$ colonnes :</p>
$$A = \begin{pmatrix}2&5&\cB4\\\cR7&\cG{-6}&0\end{pmatrix}\in\mathcal M_{2,3}(\mathbb R).$$
<p><b>Étape 3 : Lire un coefficient.</b> On descend jusqu'à la ligne, puis on avance jusqu'à la colonne :</p>
$$\cB{a_{1,3} = 4}\ (\text{ligne}\ 1,\ \text{colonne}\ 3),\qquad\cR{a_{2,1} = 7}\ (\text{ligne}\ 2,\ \text{colonne}\ 1),\qquad\cG{a_{2,2} = -6}\ (\text{ligne}\ 2,\ \text{colonne}\ 2).$$

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
<p><b>Étape 1 : Rappel.</b> On additionne deux matrices <b>de même taille</b> case par case : $(A + B)_{i,j} = a_{i,j} + b_{i,j}$. Et $(\lambda A)_{i,j} = \lambda\,a_{i,j}$.</p>
<p><b>Étape 2 : Vérifier les tailles.</b> Les deux matrices sont dans $\mathcal M_{2,3}$ : la somme existe.</p>
<p><b>Étape 3 : Additionner case par case</b> (chaque couleur va avec la case à la même place) :</p>
$$\begin{pmatrix}\cB1&\cR2&\cG0\\\cV3&\cO{-1}&\cP4\end{pmatrix}+\begin{pmatrix}\cB5&\cR0&\cG2\\\cV1&\cO1&\cP{-4}\end{pmatrix} = \begin{pmatrix}\cB{1+5}&\cR{2+0}&\cG{0+2}\\\cV{3+1}&\cO{-1+1}&\cP{4-4}\end{pmatrix} = \begin{pmatrix}\cB6&\cR2&\cG2\\\cV4&\cO0&\cP0\end{pmatrix}.$$
<p><b>Étape 4 : Multiplier par un scalaire.</b> Le $-2$ multiplie <b>chaque</b> coefficient :</p>
$$\cR{-2}\begin{pmatrix}1&3\\0&-1\end{pmatrix} = \begin{pmatrix}\cR{-2}\times1&\cR{-2}\times3\\\cR{-2}\times0&\cR{-2}\times(-1)\end{pmatrix} = \begin{pmatrix}-2&-6\\0&2\end{pmatrix}.$$

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

<h2 id="m-gauss">9 bis. Résoudre un système : la méthode complète</h2>
<div class="sbox">$$(S):\ AX = B,\ A\in\mathcal M_{n,p}.\qquad\text{Système homogène}\ (H):\ AX = 0.\qquad\text{Si}\ X_0\ \text{est une solution}:\ \mathcal S = X_0 + \mathcal S_H,\quad\dim\mathcal S_H = p - \operatorname{rg}A.$$
$$\textbf{Cramer}\ (n = p,\ A\ \text{inversible}):\ \text{une seule solution}.\qquad\textbf{Compatible}\iff\operatorname{rg}A = \operatorname{rg}(A\mid B).$$</div>
<p class="ml">Le pivot de Gauss en quatre temps</p>
<p><b>1.</b> Choisir un pivot non nul (de préférence $1$) dans la première colonne, le mettre en ligne $1$. <b>2.</b> Éliminer l'inconnue dans les lignes suivantes : $L_i\leftarrow L_i - \frac{a_{i1}}{a_{11}}L_1$. <b>3.</b> Recommencer sur le sous-système, jusqu'à une forme <b>échelonnée</b>. <b>4.</b> Lire : une ligne « $0 = c$ » avec $c\neq0$ : pas de solution ; sinon on remonte, les inconnues non principales servent de <b>paramètres</b>.</p>
<p class="ml piege">Piège</p>
<p>Ne jamais faire deux opérations « en même temps » qui utilisent chacune la ligne modifiée par l'autre ($L_1\leftarrow L_1 - L_2$ et $L_2\leftarrow L_2 - L_1$) : on perd de l'information.</p>

<p class="ml">Exemple : un système de Cramer</p>
$$\left\{\begin{aligned}x + y + z &= 6\\x - y + 2z &= 5\\2x + y - z &= 1\end{aligned}\right.$$
<p><b>Étape 1 : Rappel.</b> Pivot de Gauss, puis remontée.</p>
<p><b>Étape 2 : On élimine $x$.</b> $L_2\leftarrow L_2 - L_1$ : $(1 - 1)x + (-1 - 1)y + (2 - 1)z = 5 - 6$. $L_3\leftarrow L_3 - 2L_1$ : $(2 - 2)x + (1 - 2)y + (-1 - 2)z = 1 - 12$. On obtient :</p>
$$\left\{\begin{aligned}x + y + z &= 6\\-2y + z &= -1\\-y - 3z &= -11\end{aligned}\right.$$
<p><b>Étape 3 : On élimine $y$</b> avec $L_3\leftarrow2L_3 - L_2$ : à gauche $2(-y - 3z) - (-2y + z) = -2y - 6z + 2y - z = -7z$ ; à droite $2\times(-11) - (-1) = -22 + 1 = -21$. Donc $-7z = -21$.</p>
<p><b>Étape 4 : On remonte.</b> $z = \frac{-21}{-7} = 3$. Puis $L_2$ : $-2y + 3 = -1\iff-2y = -4\iff y = 2$. Puis $L_1$ : $x = 6 - y - z = 6 - 2 - 3 = 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathcal S = \{(1, 2, 3)\}}$. Contrôle dans $L_2$ : $1 - 2 + 6 = 5$.</p>

<p class="ml">Exemple : un système homogène</p>
$$\left\{\begin{aligned}x + 2y - z &= 0\\2x + 4y + z &= 0\end{aligned}\right.$$
<p><b>Étape 1 : Rappel.</b> $\mathcal S_H$ est un sev de dimension $p - \operatorname{rg}A$.</p>
<p><b>Étape 2 : Pivot.</b> $L_2\leftarrow L_2 - 2L_1$ : $(2 - 2)x + (4 - 4)y + (1 + 2)z = 0$, soit $3z = 0$, donc $z = 0$.</p>
<p><b>Étape 3 : Le paramètre.</b> $L_1$ : $x = -2y$, avec $y$ libre.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\mathcal S_H = \operatorname{Vect}\big((-2, 1, 0)\big)}$ : une droite, $3 - 2 = 1$.</p>

<p class="ml">Exemple : un système incompatible</p>
$$\left\{\begin{aligned}x + y &= 1\\2x + 2y &= 3\end{aligned}\right.$$
<p><b>Étape 1 : Rappel.</b> Une ligne « $0 = c$ » avec $c\neq0$ : aucune solution.</p>
<p><b>Étape 2 : Pivot.</b> $L_2\leftarrow L_2 - 2L_1$ : $0 = 1$.</p>
<p><b>Étape 3 : Conclusion.</b> $\cG{\mathcal S = \varnothing}$ ($\operatorname{rg}A = 1\neq\operatorname{rg}(A\mid B) = 2$).</p>

<p class="ml">Exemple : un système à paramètre</p>
$$\left\{\begin{aligned}x + y + mz &= 1\\x + my + z &= 1\\mx + y + z &= 1\end{aligned}\right.\qquad m\in\mathbb R.$$
<p><b>Étape 1 : Rappel.</b> Avec un paramètre, on cherche les valeurs qui rendent le pivot nul, et on les traite à part.</p>
<p><b>Étape 2 : On additionne les trois lignes.</b> Chaque inconnue apparaît avec les coefficients $1$, $1$ et $m$ : $(m + 2)x + (m + 2)y + (m + 2)z = 3$, soit $(m + 2)(x + y + z) = 3$.</p>
<p><b>Étape 3 : On soustrait deux lignes.</b> $L_1 - L_2$ : $(1 - m)y + (m - 1)z = 0$, soit $(1 - m)(y - z) = 0$. $L_2 - L_3$ : $(1 - m)x + (m - 1)y = 0$, soit $(1 - m)(x - y) = 0$.</p>
<p><b>Étape 4 : Cas $m\neq1$, $m\neq-2$.</b> $x = y = z$ et $3(m + 2)x = 3$ : une seule solution $x = y = z = \frac1{m + 2}$.</p>
<p><b>Étape 5 : Cas $m = 1$.</b> Les trois lignes sont $x + y + z = 1$ : un plan de solutions. <b>Cas $m = -2$</b> : la somme donne $0 = 3$, aucune solution.</p>
<p><b>Étape 6 : Conclusion.</b> $\cG{m\notin\{1, -2\}:\ \big(\tfrac1{m + 2}, \tfrac1{m + 2}, \tfrac1{m + 2}\big);\ m = 1:\ \text{un plan};\ m = -2:\ \varnothing}$.</p>

<h2 id="m-trace">10. Trace</h2>
<div class="sbox">$$A\in\mathcal M_n(\mathbb K):\quad\operatorname{tr}A = \sum_{i=1}^na_{i,i}.$$</div>
$$\operatorname{tr}\begin{pmatrix}\cB3&1&0\\2&\cB{-1}&4\\5&0&\cB{-8}\end{pmatrix} = \cB3 + \cB{(-1)} + \cB{(-8)} = -6,\qquad\operatorname{tr}I_n = n.$$
<p>On ne garde que la <span class="kB">diagonale</span>.</p>
<div class="sbox">$$\operatorname{tr}(A + B) = \operatorname{tr}A + \operatorname{tr}B,\quad\operatorname{tr}(\lambda A) = \lambda\operatorname{tr}A,\quad\operatorname{tr}({}^tA) = \operatorname{tr}A,\quad\operatorname{tr}(AB) = \operatorname{tr}(BA).$$</div>
<p class="ml">Exemple d'usage</p>
<p><b>Étape 1 : Rappel.</b> Pour toutes matrices carrées $A, B$ de taille $n$ : $\operatorname{tr}(AB) = \operatorname{tr}(BA)$, et $\operatorname{tr}(I_n) = n$.</p>
<p><b>Étape 2 : On suppose</b> qu'il existe $A, B$ avec $AB - BA = I_n$, et on prend la trace des deux côtés (la trace est linéaire) :</p>
$$\operatorname{tr}(AB - BA) = \operatorname{tr}(AB) - \operatorname{tr}(BA) = \operatorname{tr}(I_n).$$
<p><b>Étape 3 : On calcule chaque côté.</b> À gauche, $\operatorname{tr}(AB) = \operatorname{tr}(BA)$ donne $0$. À droite, $n$ :</p>
$$0 = n.$$
<p><b>Étape 4 : Conclusion.</b> C'est impossible car $n\geqslant1$ : $\cG{AB - BA = I_n}$ n'a pas de solution.</p>

<p class="ml piege">Piège</p>
<p>$\operatorname{tr}(AB)\neq\operatorname{tr}A\cdot\operatorname{tr}B$ en général, et $\operatorname{tr}(ABC)\neq\operatorname{tr}(BAC)$ : seules les permutations circulaires sont permises.</p>

<h2 id="m-al">11. Matrice d'une application linéaire</h2>
<p class="mcode"><span class="kB">bleu</span> : tout ce qui vient de l'espace de <b>départ</b> $E$ &nbsp;·&nbsp; <span class="kR">rouge</span> : tout ce qui vit dans l'espace d'<b>arrivée</b> $F$.</p>
<p class="ml">L'idée en une phrase</p>
<div class="sbox">$$\text{La colonne}\ j\ \text{de}\ \operatorname{Mat}_{\cB{\mathcal B},\cR{\mathcal C}}(f)\ \text{contient les coordonnées de}\ f(\cB{e_j})\ \text{dans la base}\ \cR{\mathcal C}.$$</div>
<p><b>Astuce</b> : <i>on range les images en colonnes, écrites avec les vecteurs d'arrivée.</i> Les colonnes sont étiquetées par le départ, les lignes par l'arrivée.</p>
<p class="ml">Exemple : $f : E\to F$, $\cB{\mathcal B = (e_1,e_2,e_3)}$ base de $E$, $\cR{\mathcal C = (e'_1,e'_2)}$ base de $F$</p>
<p><b>Étape 1 : Rappel.</b> La colonne $j$ de $\operatorname{Mat}_{\mathcal B,\mathcal C}(f)$ contient les coordonnées de $f(e_j)$ dans la base d'arrivée $\mathcal C$.</p>
<p><b>Étape 2 : Les images des vecteurs de $\mathcal B$</b>, écrites dans $\mathcal C$ :</p>
$$f(\cB{e_1}) = 3\cR{e'_1} + 4\cR{e'_2},\qquad f(\cB{e_2}) = -8\cR{e'_1} + 5\cR{e'_2},\qquad f(\cB{e_3}) = 7\cR{e'_1} - 2\cR{e'_2}.$$
<p><b>Étape 3 : On range chaque image en colonne</b>, les coordonnées sur $e'_1$ en haut et sur $e'_2$ en bas :</p>
<div class="labm"><table><tr><td></td><td class="kB">$f(e_1)$</td><td class="kB">$f(e_2)$</td><td class="kB">$f(e_3)$</td><td></td></tr><tr><td class="kR">$e'_1$</td><td class="c1">3</td><td class="c2">−8</td><td class="c3">7</td><td rowspan="2" class="lr"></td></tr><tr><td class="kR">$e'_2$</td><td class="c1">4</td><td class="c2">5</td><td class="c3">−2</td></tr></table><span class="lab-cap">$A = \operatorname{Mat}_{\cB{\mathcal B},\cR{\mathcal C}}(f)\in\mathcal M_{\cR2,\cB3}(\mathbb K)$</span></div>
<p><b>Étape 4 : Vérifier la taille.</b> Autant de lignes que $\dim\cR F = 2$, autant de colonnes que $\dim\cB E = 3$.</p>

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
<p><b>Étape 1 : Rappel.</b> La colonne $j$ de $\operatorname{Mat}_{\mathcal B}(f)$ contient les coordonnées de $f(e_j)$ dans $\mathcal B$.</p>
<p><b>Étape 2 : Les images</b> par $f(P) = 2P' - P$ :</p>
$$f(\cB1) = 2\cdot0 - 1 = -1,\qquad f(\cB X) = 2\cdot1 - X = 2 - X,\qquad f(\cB{X^2}) = 2\cdot2X - X^2 = 4X - X^2,\qquad f(\cB{X^3}) = 6X^2 - X^3.$$
<p><b>Étape 3 : Les coordonnées</b> sur $(1, X, X^2, X^3)$, rangées en colonnes :</p>
<div class="labm"><table><tr><td></td><td class="kB">$f(1)$</td><td class="kB">$f(X)$</td><td class="kB">$f(X^2)$</td><td class="kB">$f(X^3)$</td></tr><tr><td class="kR">$1$</td><td class="c1">−1</td><td class="c2">2</td><td class="c3">0</td><td class="c4">0</td></tr><tr><td class="kR">$X$</td><td class="c1">0</td><td class="c2">−1</td><td class="c3">4</td><td class="c4">0</td></tr><tr><td class="kR">$X^2$</td><td class="c1">0</td><td class="c2">0</td><td class="c3">−1</td><td class="c4">6</td></tr><tr><td class="kR">$X^3$</td><td class="c1">0</td><td class="c2">0</td><td class="c3">0</td><td class="c4">−1</td></tr></table><span class="lab-cap">$\operatorname{Mat}_{\mathcal B}(f)$</span></div>
<p><b>Étape 4 : Ce qu'on en déduit.</b> La matrice est triangulaire, de diagonale $-1, -1, -1, -1$ : $\det = (-1)^4 = 1\neq0$, donc $\cG{f\ \text{est bijective}}$.</p>
<p>Astuce : une application qui ne fait pas monter le degré donne une matrice triangulaire supérieure dans $(1, X, \dots, X^n)$.</p>

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
<p><b>Étape 1 : Rappel.</b> La matrice de passage de $\mathcal B$ à $\mathcal B'$ a pour colonnes les <b>nouveaux</b> vecteurs, écrits dans l'<b>ancienne</b> base.</p>
<p><b>Étape 2 : Les nouveaux vecteurs</b> dans l'ancienne base :</p>
$$\cG{e'_1} = 7\cO{e_1} + \cO{e_2} - 4\cO{e_3},\qquad\cG{e'_2} = 8\cO{e_1} - 2\cO{e_2} + 9\cO{e_3},\qquad\cG{e'_3} = -3\cO{e_1} + 6\cO{e_2} + 5\cO{e_3}.$$
<p><b>Étape 3 : On les range en colonnes.</b></p>
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
<p><b>Étape 1 : Rappel.</b> Binôme de Newton pour deux matrices qui commutent : $(M + N)^n = \sum_{k=0}^n\binom nkM^kN^{n-k}$.</p>
<p><b>Étape 2 : On écrit $A$ avec $J$</b>, la matrice remplie de $1$ :</p>
$$A = \begin{pmatrix}0&1&1\\1&0&1\\1&1&0\end{pmatrix} = \cR J - \cB{I_3}.$$
<p><b>Étape 3 : Les hypothèses.</b> $\cR J$ et $\cB{-I_3}$ commutent ($I_3$ commute avec tout).</p>
<p><b>Étape 4 : Les puissances de $J$.</b> Chaque case de $J^2$ vaut $1 + 1 + 1 = 3$ :</p>
$$\cR{J^2} = 3\cR J\ \Longrightarrow\ \cR{J^k} = 3^{k-1}\cR J\quad(k\geqslant1).$$
<p><b>Étape 5 : Le binôme.</b> On sépare le terme $k = 0$ (qui vaut $(-1)^nI_3$) des autres :</p>
$$A^n = \sum_{k=0}^n\binom nk\cR{J^k}\cB{(-I_3)}^{n-k} = (-1)^nI_3 + \Big(\sum_{k=1}^n\binom nk3^{k-1}(-1)^{n-k}\Big)\cR J.$$
<p><b>Étape 6 : La somme.</b> On reconnaît un binôme : $\sum_{k=0}^n\binom nk3^k(-1)^{n-k} = (3 - 1)^n = 2^n$. On enlève le terme $k = 0$, qui vaut $(-1)^n$, et on divise par $3$ :</p>
$$\sum_{k=1}^n\binom nk3^{k-1}(-1)^{n-k} = \frac{2^n - (-1)^n}3.$$
<p><b>Étape 7 : Conclusion.</b></p>
$$\cG{A^n = (-1)^nI_3 + \frac{2^n - (-1)^n}3\,J}.$$
<p>Contrôle avec $n = 1$ : $-I_3 + \frac{2 + 1}3J = J - I_3 = A$.</p>

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
<p><b>Étape 1 : Rappel.</b> Règle de Sarrus (taille 3 seulement) : les trois diagonales descendantes comptent avec $+$, les trois montantes avec $-$.</p>
$$A = \begin{pmatrix}1&2&3\\0&4&5\\1&0&6\end{pmatrix}.$$
<p><b>Étape 2 : Les trois produits descendants</b> ($+$). Chaque couleur montre les trois cases du produit :</p>
<div class="sarx">
<div>$$\begin{vmatrix}\cB1&2&3\\0&\cB4&5\\1&0&\cB6\end{vmatrix}$$<p>$+\ \cB{1\times4\times6} = \cB{24}$</p></div>
<div>$$\begin{vmatrix}1&\cG2&3\\0&4&\cG5\\\cG1&0&6\end{vmatrix}$$<p>$+\ \cG{2\times5\times1} = \cG{10}$</p></div>
<div>$$\begin{vmatrix}1&2&\cV3\\\cV0&4&5\\1&\cV0&6\end{vmatrix}$$<p>$+\ \cV{3\times0\times0} = \cV{0}$</p></div>
</div>
<p><b>Étape 3 : Les trois produits montants</b> ($-$) :</p>
<div class="sarx">
<div>$$\begin{vmatrix}1&2&\cR3\\0&\cR4&5\\\cR1&0&6\end{vmatrix}$$<p>$-\ \cR{3\times4\times1} = -\cR{12}$</p></div>
<div>$$\begin{vmatrix}\cO1&2&3\\0&4&\cO5\\1&\cO0&6\end{vmatrix}$$<p>$-\ \cO{1\times5\times0} = -\cO{0}$</p></div>
<div>$$\begin{vmatrix}1&\cP2&3\\\cP0&4&5\\1&0&\cP6\end{vmatrix}$$<p>$-\ \cP{2\times0\times6} = -\cP{0}$</p></div>
</div>
<p><b>Étape 4 : On additionne.</b></p>
$$\det A = (\cB{24} + \cG{10} + \cV{0}) - (\cR{12} + \cO{0} + \cP{0}) = 34 - 12 = \cG{22}.$$

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
<p><b>Étape 1 : Rappel.</b> Ajouter à une colonne une combinaison des autres ne change pas le déterminant. On peut sortir un facteur commun d'une colonne. Une matrice triangulaire a pour déterminant le produit de sa diagonale.</p>
<p><b>Étape 2 : $\cO{C_1\leftarrow C_1 + C_2 + C_3}$.</b> Chaque ligne a pour somme $a + 2b$ :</p>
$$\begin{vmatrix}a&b&b\\b&a&b\\b&b&a\end{vmatrix} = \begin{vmatrix}a + 2b&b&b\\a + 2b&a&b\\a + 2b&b&a\end{vmatrix}.$$
<p><b>Étape 3 : On sort $(a + 2b)$ de la première colonne.</b></p>
$$= (a + 2b)\begin{vmatrix}1&b&b\\1&a&b\\1&b&a\end{vmatrix}.$$
<p><b>Étape 4 : $\cO{L_2\leftarrow L_2 - L_1}$ et $\cO{L_3\leftarrow L_3 - L_1}$.</b> Ligne 2 : $(1 - 1, a - b, b - b) = (0, a - b, 0)$. Ligne 3 : $(0, 0, a - b)$.</p>
$$= (a + 2b)\begin{vmatrix}1&b&b\\0&a - b&0\\0&0&a - b\end{vmatrix}.$$
<p><b>Étape 5 : Triangulaire.</b> Produit de la diagonale :</p>
$$\cG{\det = (a + 2b)(a - b)^2}.$$

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
<p><b>Étape 1 : Rappel.</b> Développer selon la ligne $i$ : $\det A = \sum_j(-1)^{i+j}a_{i,j}\Delta_{i,j}$, où le mineur $\Delta_{i,j}$ est le déterminant obtenu en barrant la ligne $i$ et la colonne $j$. Les signes suivent le damier $\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}$.</p>
$$A = \begin{pmatrix}\cB1&\cR4&\cG5\\2&0&3\\0&1&2\end{pmatrix}.$$
<p><b>Étape 2 : Choisir la ligne.</b> On développe selon la ligne 1 : signes $\cB+$, $\cR-$, $\cG+$.</p>
<p><b>Étape 3 : Les trois mineurs.</b> Pour chaque coefficient, on barre sa ligne et sa colonne (en gris) :</p>
<div class="sarx">
<div>$$\begin{pmatrix}\cB1&\cX4&\cX5\\\cX2&0&3\\\cX0&1&2\end{pmatrix}\ \leadsto\ \cB{\begin{vmatrix}0&3\\1&2\end{vmatrix} = 0\times2 - 3\times1 = -3}$$</div>
<div>$$\begin{pmatrix}\cX1&\cR4&\cX5\\2&\cX0&3\\0&\cX1&2\end{pmatrix}\ \leadsto\ \cR{\begin{vmatrix}2&3\\0&2\end{vmatrix} = 2\times2 - 3\times0 = 4}$$</div>
<div>$$\begin{pmatrix}\cX1&\cX4&\cG5\\2&0&\cX3\\0&1&\cX2\end{pmatrix}\ \leadsto\ \cG{\begin{vmatrix}2&0\\0&1\end{vmatrix} = 2\times1 - 0\times0 = 2}$$</div>
</div>
<p><b>Étape 4 : Coefficient × signe × mineur.</b></p>
$$\det A = \cB{+1\times(-3)}\ \cR{-\ 4\times4}\ \cG{+\ 5\times2} = -3 - 16 + 10 = \cG{-9}.$$

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
<p><b>Étape 1 : Rappel.</b> En taille 2 : $\chi_A = X^2 - \operatorname{tr}(A)\,X + \det A$.</p>
$$A = \begin{pmatrix}1&2\\2&1\end{pmatrix}.$$
<p><b>Étape 2 : La trace et le déterminant.</b></p>
$$\operatorname{tr}A = 1 + 1 = \cO2,\qquad\det A = 1\times1 - 2\times2 = \cO{-3}.$$
<p><b>Étape 3 : On remplace dans la formule.</b></p>
$$\chi_A = X^2 - \cO2X + (\cO{-3}) = X^2 - 2X - 3.$$
<p><b>Étape 4 : Les racines.</b></p>
$$\Delta = (-2)^2 - 4\times(-3) = 4 + 12 = 16 = 4^2,\qquad\lambda = \frac{2\pm4}{2}\ \Longrightarrow\ \lambda = \cB3\ \text{ou}\ \lambda = \cB{-1}.$$
<p><b>Étape 5 : Autre façon, sans discriminant.</b> On calcule le déterminant et on reconnaît $a^2 - b^2$ :</p>
$$\chi_A = \begin{vmatrix}X-1&-2\\-2&X-1\end{vmatrix} = (X-1)^2 - (-2)(-2) = (X-1)^2 - 2^2 = (X - 1 - 2)(X - 1 + 2) = (X - \cB3)(X + \cB1).$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\operatorname{Sp}(A) = \{-1, 3\}}.$$

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
<p><b>1. Rappel.</b> $\chi_A = \det(XI_n - A)$. Ajouter à une colonne les autres colonnes ne change pas le déterminant. Une matrice triangulaire a pour déterminant le produit de sa diagonale.</p>
$$A = \begin{pmatrix}2&1&1\\1&2&1\\1&1&2\end{pmatrix}\qquad(\text{chaque ligne a pour somme}\ \cB4).$$
<p><b>2.</b> On écrit $XI_3 - A$ (on met $X - a_{i,i}$ sur la diagonale et $-a_{i,j}$ ailleurs) et on fait $\cO{C_1\leftarrow C_1 + C_2 + C_3}$. Sur chaque ligne, la nouvelle première case vaut :</p>
$$(X - 2) + (-1) + (-1) = \cB{X - 4}.$$
$$\chi_A = \begin{vmatrix}X-2&-1&-1\\-1&X-2&-1\\-1&-1&X-2\end{vmatrix} = \begin{vmatrix}\cB{X-4}&-1&-1\\\cB{X-4}&X-2&-1\\\cB{X-4}&-1&X-2\end{vmatrix} = \cB{(X-4)}\begin{vmatrix}1&-1&-1\\1&X-2&-1\\1&-1&X-2\end{vmatrix}.$$
<p><b>3.</b> On fait $\cO{L_2\leftarrow L_2 - L_1}$ et $\cO{L_3\leftarrow L_3 - L_1}$ :</p>
$$\left\{\begin{aligned}L_2 - L_1 &= \big(1 - 1,\ (X-2) - (-1),\ -1 - (-1)\big) = (0,\ \cR{X - 1},\ 0)\\L_3 - L_1 &= \big(1 - 1,\ -1 - (-1),\ (X-2) - (-1)\big) = (0,\ 0,\ \cR{X - 1})\end{aligned}\right.$$
<p>La matrice est triangulaire : son déterminant est le produit de la diagonale.</p>
$$\chi_A = \cB{(X-4)}\begin{vmatrix}1&-1&-1\\0&\cR{X-1}&0\\0&0&\cR{X-1}\end{vmatrix} = \cB{(X-4)}\times1\times\cR{(X-1)}\times\cR{(X-1)} = \cB{(X-4)}\,\cR{(X-1)^2}.$$
<p>Sans aucune factorisation de degré 3 : $\operatorname{Sp}(A) = \{\cB4, \cR1\}$, avec $\cO{m_4 = 1}$ et $\cO{m_1 = 2}$.</p>

<p class="ml">Exemple 2 : deux lignes presque égales</p>
<p><b>Étape 1 : Rappel.</b> $\chi_B = \det(XI_3 - B)$, et $L_1\leftarrow L_1 - L_2$ ne change pas le déterminant.</p>
$$B = \begin{pmatrix}3&1&-1\\1&3&-1\\0&0&2\end{pmatrix},\qquad XI_3 - B = \begin{pmatrix}X-3&-1&1\\-1&X-3&1\\0&0&X-2\end{pmatrix}.$$
<p><b>Étape 2 : $\cO{L_1\leftarrow L_1 - L_2}$.</b> Les deux premières lignes se ressemblent :</p>
$$L_1 - L_2 = \big((X-3) - (-1),\ -1 - (X-3),\ 1 - 1\big) = \big(\cB{X - 2},\ \cB{-(X - 2)},\ 0\big).$$
<p><b>Étape 3 : On sort $(X - 2)$ de la première ligne.</b></p>
$$\chi_B = \begin{vmatrix}\cB{X-2}&\cB{-(X-2)}&0\\-1&X-3&1\\0&0&X-2\end{vmatrix} = \cB{(X-2)}\begin{vmatrix}1&-1&0\\-1&X-3&1\\0&0&X-2\end{vmatrix}.$$
<p><b>Étape 4 : On développe selon la dernière ligne</b>, qui n'a qu'un coefficient non nul :</p>
$$\chi_B = \cB{(X-2)}\times(X-2)\times(-1)^{3+3}\begin{vmatrix}1&-1\\-1&X-3\end{vmatrix}.$$
<p><b>Étape 5 : Le déterminant de taille 2.</b></p>
$$\begin{vmatrix}1&-1\\-1&X-3\end{vmatrix} = 1\times(X-3) - (-1)\times(-1) = X - 4.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\chi_B = (X-2)^2(X - 4)}.$$
<p>Contrôle : $\operatorname{tr}B = 3 + 3 + 2 = 8 = 2 + 2 + 4$.</p>

<p class="ml">Vérifier son $\chi_A$ en 10 secondes</p>
<ul>
<li>Le coefficient de $X^{n-1}$ doit être $-\operatorname{tr}A$ : ici $-(4 + 1 + 1) = -6 = -\operatorname{tr}A$.</li>
<li>$\chi_A(0) = (-1)^n\det A$ : ici $\chi_A(0) = (0-4)(0-1)^2 = -4$ et $\det A = 4$, donc $(-1)^3\times4 = -4$.</li>
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
<p><b>Étape 1 : Rappel.</b> $\dim E_0 = \dim\operatorname{Ker}A = n - \operatorname{rg}A$ (théorème du rang), $\dim E_\lambda\leqslant m_\lambda$, et $\operatorname{tr}A$ est la somme des valeurs propres comptées avec multiplicité.</p>
$$A = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.$$
<p><b>Étape 2 : Le rang.</b> Les 3 lignes sont égales et non nulles : $\operatorname{rg}A = 1$.</p>
<p><b>Étape 3 : La valeur propre $0$.</b></p>
$$\dim\cG{E_0} = 3 - 1 = 2\ \Longrightarrow\ \cO{m_0}\geqslant2.$$
<p><b>Étape 4 : La dernière valeur propre, avec la trace.</b></p>
$$\operatorname{tr}A = 1 + 1 + 1 = 3 = 0 + 0 + \lambda\ \Longrightarrow\ \lambda = \cB3.$$
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{\chi_A = X^2(X - 3)}.$$
<p>Contrôle : chaque ligne a pour somme $3$, donc $A(1,1,1) = 3(1,1,1)$.</p>

<h2 id="r-esp">6. Calculer un sous-espace propre</h2>
<p class="ml">Méthode</p>
<ol>
<li>Écrire $A - \cB\lambda I_n$.</li>
<li>Résoudre $(A - \cB\lambda I_n)\cR X = 0$ par le pivot de Gauss.</li>
<li>Écrire $\cG{E_\lambda}$ comme un $\operatorname{Vect}$ et vérifier la dimension : $\dim\cG{E_\lambda} = n - \operatorname{rg}(A - \cB\lambda I_n)$.</li>
</ol>
<p class="ml">Exemple : la matrice de l'exemple 1, avec $\cB\lambda = 1$</p>
<p><b>Étape 1 : Rappel.</b> $E_\lambda = \operatorname{Ker}(A - \lambda I_n)$ : on résout le système $(A - \lambda I_n)X = 0$.</p>
<p><b>Étape 2 : La matrice $A - \cB1\,I_3$.</b> On enlève $1$ sur la diagonale :</p>
$$A - \cB1\,I_3 = \begin{pmatrix}2-1&1&1\\1&2-1&1\\1&1&2-1\end{pmatrix} = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.$$
<p><b>Étape 3 : Le système</b>, avec $X = (x, y, z)$ :</p>
$$\left\{\begin{aligned}x + y + z &= 0\\x + y + z &= 0\\x + y + z &= 0\end{aligned}\right.\ \underset{\cO{L_2\leftarrow L_2 - L_1,\ L_3\leftarrow L_3 - L_1}}{\Longleftrightarrow}\ x + y + z = 0\ \Longleftrightarrow\ z = -x - y.$$
<p><b>Étape 4 : Les inconnues libres</b> $x$ et $y$. On remplace $z$ et on sépare :</p>
$$X = \begin{pmatrix}x\\y\\-x-y\end{pmatrix} = x\cR{\begin{pmatrix}1\\0\\-1\end{pmatrix}} + y\cR{\begin{pmatrix}0\\1\\-1\end{pmatrix}}.$$
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{E_1 = \operatorname{Vect}\Big(\begin{pmatrix}1\\0\\-1\end{pmatrix},\ \begin{pmatrix}0\\1\\-1\end{pmatrix}\Big)},\qquad\dim E_1 = 2.$$

<p class="ml">Et pour $\cB\lambda = 4$</p>
$$A - \cB4\,I_3 = \begin{pmatrix}-2&1&1\\1&-2&1\\1&1&-2\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}-2x + y + z &= 0\quad(L_1)\\x - 2y + z &= 0\quad(L_2)\\x + y - 2z &= 0\quad(L_3)\end{aligned}\right.$$
$$\left\{\begin{aligned}\cO{L_1 - L_2}&:\ -3x + 3y = 0\ \Longrightarrow\ y = x\\\cO{L_2 - L_3}&:\ -3y + 3z = 0\ \Longrightarrow\ z = y\end{aligned}\right.\qquad\Longrightarrow\qquad X = \begin{pmatrix}x\\x\\x\end{pmatrix} = x\cR{\begin{pmatrix}1\\1\\1\end{pmatrix}}.$$
$$\cG{E_4} = \operatorname{Vect}\cR{\begin{pmatrix}1\\1\\1\end{pmatrix}},\qquad\dim\cG{E_4} = 1.$$
<p>On contrôle avec $L_1$ : $-2x + x + x = 0$.</p>
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
<p><b>1. Rappel.</b> $A$ est diagonalisable si et seulement si $\chi_A$ est scindé et $\dim E_\lambda = m_\lambda$ pour chaque valeur propre. Alors $A = PDP^{-1}$ avec les vecteurs propres en colonnes dans $P$.</p>
<p><b>2–3.</b> Calcul détaillé au §4 (on fait $C_1\leftarrow C_1 + C_2 + C_3$, puis $L_2\leftarrow L_2 - L_1$, $L_3\leftarrow L_3 - L_1$) :</p>
$$\chi_A = (X - \cB4)(X - \cB1)^2,\qquad\cO{m_4 = 1},\qquad\cO{m_1 = 2}.$$
<p><b>4.</b> Seule $\cB1$ est multiple, c'est la seule à vérifier :</p>
$$A - I_3 = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}\ \text{(3 lignes égales)}\ \Longrightarrow\ \operatorname{rg}(A - I_3) = 1\ \Longrightarrow\ \dim\cG{E_1} = 3 - 1 = 2 = \cO{m_1}.$$
<p>Donc $A$ est diagonalisable.</p>
<p><b>5.</b> Les systèmes sont résolus en entier au §6 :</p>
$$\cG{E_4}:\ \left\{\begin{aligned}-2x + y + z &= 0\\x - 2y + z &= 0\\x + y - 2z &= 0\end{aligned}\right.\ \Longleftrightarrow\ x = y = z,\qquad\cG{E_1}:\ x + y + z = 0\ \Longleftrightarrow\ z = -x - y.$$
$$\cG{E_4} = \operatorname{Vect}\cR{(1,1,1)},\qquad\cG{E_1} = \operatorname{Vect}\big(\cR{(1,0,-1)},\ \cR{(0,1,-1)}\big).$$
<p><b>6.</b> On range les vecteurs propres en colonnes, et les valeurs propres dans le même ordre :</p>
<div class="labm"><table><tr><td></td><td class="kB">$\lambda = 4$</td><td class="kB">$\lambda = 1$</td><td class="kB">$\lambda = 1$</td></tr><tr><td></td><td class="c1">1</td><td class="c2">1</td><td class="c3">0</td></tr><tr><td></td><td class="c1">1</td><td class="c2">0</td><td class="c3">1</td></tr><tr><td></td><td class="c1">1</td><td class="c2">−1</td><td class="c3">−1</td></tr></table><span class="lab-cap">$P$ : chaque colonne est un vecteur propre</span></div>
$$D = \begin{pmatrix}\cB4&0&0\\0&\cB1&0\\0&0&\cB1\end{pmatrix},\qquad A = PDP^{-1}.$$
<p><b>7.</b> On vérifie chaque colonne, c'est-à-dire $AP = PD$ :</p>
$$\left\{\begin{aligned}A\cR{(1,1,1)} &= (2+1+1,\ 1+2+1,\ 1+1+2) = (4,4,4) = \cB4\cR{(1,1,1)}\\A\cR{(1,0,-1)} &= (2+0-1,\ 1+0-1,\ 1+0-2) = (1,0,-1) = \cB1\cR{(1,0,-1)}\\A\cR{(0,1,-1)} &= (0+1-1,\ 0+2-1,\ 0+1-2) = (0,1,-1) = \cB1\cR{(0,1,-1)}\end{aligned}\right.$$
$$AP = \begin{pmatrix}4&1&0\\4&0&1\\4&-1&-1\end{pmatrix} = PD.$$

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
<p><b>1. Rappel.</b> Si $\chi_A = (X - \lambda)^2$ et $\dim E_\lambda = 1$ : on prend $e_1$ vecteur propre, puis $e_2$ tel que $(A - \lambda I_2)e_2 = e_1$. Alors $T = \begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}$.</p>
$$A = \begin{pmatrix}1&1\\-1&3\end{pmatrix}.$$
<p><b>2. $\chi_A$.</b></p>
$$\operatorname{tr}A = 1 + 3 = 4,\qquad\det A = 1\times3 - 1\times(-1) = 4,\qquad\chi_A = X^2 - 4X + 4 = (X - \cB2)^2.$$
<p><b>3. Le sous-espace propre.</b> On résout $(A - 2I_2)X = 0$ avec $X = (x, y)$ :</p>
$$A - 2I_2 = \begin{pmatrix}-1&1\\-1&1\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}-x + y &= 0\\-x + y &= 0\end{aligned}\right.\qquad\Longleftrightarrow\qquad y = x.$$
$$\cG{E_2} = \operatorname{Vect}\cR{\begin{pmatrix}1\\1\end{pmatrix}},\qquad\dim\cG{E_2} = 1\lt2 = \cO{m_2}\ \Longrightarrow\ \text{pas diagonalisable}.$$
<p><b>4. Le premier vecteur</b> : $\cR{e_1} = (1,1)$, et on contrôle $A\cR{e_1} = (1 + 1,\ -1 + 3) = (2,2) = 2\cR{e_1}$.</p>
<p><b>5. Le deuxième vecteur</b> : on résout $(A - 2I_2)\cG{e_2} = \cR{e_1}$ avec $\cG{e_2} = (x, y)$ :</p>
$$\begin{pmatrix}-1&1\\-1&1\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}1\\1\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}-x + y &= 1\\-x + y &= 1\end{aligned}\right.\qquad\Longleftrightarrow\qquad y = 1 + x.$$
<p>N'importe quelle solution convient : avec $x = 0$, on prend $\cG{e_2} = (0, 1)$.</p>
<p><b>6. Vérification et conclusion.</b></p>
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
<p><b>1. Rappel.</b> $A$ est trigonalisable si $\chi_A$ est scindé. On garde une base de $E_\lambda$, puis on complète par un vecteur $e_3$ tel que $(A - \lambda I)e_3$ soit dans $E_\lambda$ et non nul.</p>
$$A = \begin{pmatrix}0&1&1\\-1&2&1\\0&0&1\end{pmatrix}.$$
<p><b>2. $\chi_A$.</b> La dernière ligne de $XI_3 - A$ n'a qu'un coefficient non nul : on développe selon elle.</p>
$$\chi_A = \begin{vmatrix}X&-1&-1\\1&X-2&-1\\0&0&X-1\end{vmatrix} = (X-1)\times(-1)^{3+3}\begin{vmatrix}X&-1\\1&X-2\end{vmatrix}.$$
$$\begin{vmatrix}X&-1\\1&X-2\end{vmatrix} = X(X-2) - (-1)\times1 = X^2 - 2X + 1 = (X-1)^2\qquad\Longrightarrow\qquad\chi_A = (X - \cB1)^3.$$
<p><b>3. Le sous-espace propre.</b> On résout $(A - I_3)X = 0$ :</p>
$$A - I_3 = \begin{pmatrix}-1&1&1\\-1&1&1\\0&0&0\end{pmatrix}\qquad\Longleftrightarrow\qquad\left\{\begin{aligned}-x + y + z &= 0\\-x + y + z &= 0\\0 &= 0\end{aligned}\right.\qquad\Longleftrightarrow\qquad x = y + z.$$
$$X = \begin{pmatrix}y+z\\y\\z\end{pmatrix} = y\cR{\begin{pmatrix}1\\1\\0\end{pmatrix}} + z\cR{\begin{pmatrix}1\\0\\1\end{pmatrix}},\qquad\cG{E_1} = \operatorname{Vect}(\cR{e_1}, \cR{e_2}),\qquad\dim\cG{E_1} = 2\lt3 = \cO{m_1}.$$
<p>Donc $A$ n'est pas diagonalisable : on trigonalise (cas 2 du tableau).</p>
<p><b>4. Le troisième vecteur.</b> On calcule $(A - I_3)X$ pour un $X = (x,y,z)$ quelconque :</p>
$$(A - I_3)\begin{pmatrix}x\\y\\z\end{pmatrix} = \begin{pmatrix}-x + y + z\\-x + y + z\\0\end{pmatrix} = (-x + y + z)\cR{\begin{pmatrix}1\\1\\0\end{pmatrix}}.$$
<p>Il suffit que $-x + y + z\neq0$ pour sortir de $\cG{E_1}$. Avec $\cG{e_3} = (0,1,0)$ : $-0 + 1 + 0 = 1$, donc $(A - I_3)\cG{e_3} = \cR{e_1}$.</p>
$$A\cG{e_3} = \begin{pmatrix}0\times0 + 1\times1 + 1\times0\\-1\times0 + 2\times1 + 1\times0\\0\end{pmatrix} = \begin{pmatrix}1\\2\\0\end{pmatrix} = \begin{pmatrix}1\\1\\0\end{pmatrix} + \begin{pmatrix}0\\1\\0\end{pmatrix} = \cR{e_1} + \cB1\cG{e_3}.$$
<p><b>5. $P$ est inversible</b> (développement selon la première ligne) :</p>
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
<p><b>Étape 1 : Rappel.</b> Cayley-Hamilton : $\chi_A(A) = 0$.</p>
<p><b>Étape 2 : On l'applique.</b> Avec $\chi_A = X^2 - 4X + 4$ (§9, $A = \begin{pmatrix}1&1\\-1&3\end{pmatrix}$) :</p>
$$A^2 - 4A + 4I_2 = 0.$$
<p><b>Étape 3 : On isole $I_2$.</b></p>
$$4I_2 = 4A - A^2 = A(4I_2 - A).$$
<p><b>Étape 4 : On divise par $4$.</b></p>
$$A\cdot\frac14(4I_2 - A) = I_2.$$
<p><b>Étape 5 : Conclusion.</b> $A$ est inversible et :</p>
$$\cG{A^{-1} = I_2 - \frac14A = \frac14\begin{pmatrix}3&-1\\1&1\end{pmatrix}}.$$
<p>Contrôle : $\begin{pmatrix}1&1\\-1&3\end{pmatrix}\cdot\frac14\begin{pmatrix}3&-1\\1&1\end{pmatrix} = \frac14\begin{pmatrix}4&0\\0&4\end{pmatrix} = I_2$.</p>

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
<p><b>Étape 1 : Rappel.</b> La forme normalisée d'ordre 1 est $y' + a(t)\,y = b(t)$ : coefficient $1$ devant $y'$.</p>
$$7t^3y - 5y' = 0.$$
<p><b>Étape 2 : On range</b> ($y'$ d'abord, puis $y$) :</p>
$$-5y' + 7t^3y = 0.$$
<p><b>Étape 3 : On divise par le coefficient de $y'$</b>, ici $-5$, qui ne s'annule jamais :</p>
$$y' - \frac75t^3\,y = 0.$$
<p><b>Étape 4 : On lit $a(t)$.</b></p>
$$\cG{a(t) = -\frac75t^3}.$$

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
<p><b>Étape 1 : Rappel.</b> $y' + a(t)y = 0\iff y = \lambda e^{-A(t)}$, avec $A$ une primitive de $a$.</p>
<p><b>Étape 2 : On lit $a$.</b> $y' + 3y = 0$ : $a(t) = 3$.</p>
<p><b>Étape 3 : Une primitive.</b> $A(t) = 3t$.</p>
<p><b>Étape 4 : Conclusion.</b></p>
$$\cB{y_H(t) = \cG\lambda\,e^{-3t}},\qquad\cG\lambda\in\mathbb R.$$

<p class="ml">Exemple 2 : $a$ variable (l'équation du §2)</p>
<p><b>Étape 1 : Rappel.</b> $y' + a(t)y = 0\iff y = \lambda e^{-A(t)}$.</p>
<p><b>Étape 2 : On lit $a$</b> (équation du §2) : $a(t) = -\frac75t^3$.</p>
<p><b>Étape 3 : Une primitive.</b> $\int t^3 = \frac{t^4}4$, donc :</p>
$$A(t) = -\frac75\cdot\frac{t^4}4 = -\frac7{20}t^4,\qquad-A(t) = \frac7{20}t^4.$$
<p><b>Étape 4 : Conclusion.</b></p>
$$\cB{y_H(t) = \cG\lambda\,e^{\frac7{20}t^4}}.$$
<p>Contrôle : $y_H' = \lambda\cdot\frac7{20}\cdot4t^3e^{\frac7{20}t^4} = \frac75t^3\,y_H$.</p>

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
<p><b>Étape 1 : Rappel.</b> Si le second membre est un polynôme de degré $d$ et $a\neq0$ constant, on cherche $y_p$ polynôme de degré $d$, puis $y = y_H + y_p$.</p>
$$y' + 3y = \cO{4t - 7}.$$
<p><b>Étape 2 : L'homogène.</b> $a = 3$ : $\cB{y_H = \lambda e^{-3t}}$.</p>
<p><b>Étape 3 : La forme de $y_p$.</b> Degré $1$ : $\cR{y_p = \alpha t + \beta}$, donc $y_p' = \alpha$.</p>
<p><b>Étape 4 : On remplace</b> et on range par puissances de $t$ :</p>
$$y_p' + 3y_p = \alpha + 3(\alpha t + \beta) = 3\alpha\,t + (\alpha + 3\beta).$$
<p><b>Étape 5 : On identifie</b> avec $4t - 7$ :</p>
$$\left\{\begin{aligned}3\alpha &= 4\\\alpha + 3\beta &= -7\end{aligned}\right.\iff\left\{\begin{aligned}\alpha &= \tfrac43\\3\beta &= -7 - \tfrac43 = -\tfrac{25}3\end{aligned}\right.\iff\left\{\begin{aligned}\alpha &= \tfrac43\\\beta &= -\tfrac{25}9\end{aligned}\right.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cR{y_p = \frac43t - \frac{25}9},\qquad\cG{y(t) = \lambda e^{-3t} + \frac43t - \frac{25}9}.$$

<p class="ml">Exemple 2 : une exponentielle en résonance</p>
<p><b>Étape 1 : Rappel.</b> Second membre $ke^{mt}$ : on cherche $Ce^{mt}$, sauf si $m = -a$ (résonance) où l'on cherche $Ct\,e^{mt}$.</p>
$$(E):\ y' + y = \cO{e^{-t}}.$$
<p><b>Étape 2 : L'homogène.</b> $a = 1$ : $\cB{y_H = \lambda e^{-t}}$.</p>
<p><b>Étape 3 : Résonance ?</b> $m = -1 = -a$ : oui, $e^{-t}$ est déjà solution de $(H)$. On cherche $\cR{y_p = Ct\,e^{-t}}$.</p>
<p><b>Étape 4 : La dérivée</b> (produit $t\times e^{-t}$) :</p>
$$y_p' = Ce^{-t} - Ct\,e^{-t}.$$
<p><b>Étape 5 : On remplace.</b> Les termes en $t$ s'annulent :</p>
$$y_p' + y_p = Ce^{-t} - \cancel{Ct\,e^{-t}} + \cancel{Ct\,e^{-t}} = Ce^{-t} = e^{-t}\iff C = 1.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cR{y_p = t\,e^{-t}},\qquad\cG{y(t) = (\lambda + t)\,e^{-t}}.$$

<p class="ml">Exemple 3 : l'énoncé donne la solution</p>
<p><b>Étape 1 : Rappel.</b> « $u$ est solution » veut dire : $u' + u = e^{-t}$ pour tout $t$. On ne part pas de cette égalité, on la <b>calcule</b>.</p>
<p><b>Étape 2 : On dérive $u(t) = t\,e^{-t}$.</b></p>
$$u'(t) = e^{-t} - t\,e^{-t}.$$
<p><b>Étape 3 : On calcule $u' + u$.</b></p>
$$u'(t) + u(t) = e^{-t} - t\,e^{-t} + t\,e^{-t} = e^{-t}.$$
<p><b>Étape 4 : Conclusion.</b> On retrouve le second membre : $\cG{u\ \text{est solution de}\ (E)}$.</p>

<p class="ml">Exemple 4 : un cosinus</p>
<p><b>Étape 1 : Rappel.</b> $\cos t = \operatorname{Re}(e^{it})$ : on résout avec $e^{it}$, puis on prend la partie réelle.</p>
$$y' + y = \cO{2\cos t}.$$
<p><b>Étape 2 : L'équation complexe.</b> $z' + z = 2e^{it}$. Comme $i\neq-1$, pas de résonance : $z_p = Ce^{it}$, $z_p' = iCe^{it}$.</p>
<p><b>Étape 3 : On remplace.</b></p>
$$z_p' + z_p = (i + 1)Ce^{it} = 2e^{it}\iff C = \frac2{1 + i}.$$
<p><b>Étape 4 : On simplifie $C$</b> avec le conjugué :</p>
$$C = \frac{2(1 - i)}{(1 + i)(1 - i)} = \frac{2(1 - i)}2 = 1 - i.$$
<p><b>Étape 5 : On développe $z_p$.</b></p>
$$z_p = (1 - i)(\cos t + i\sin t) = (\cos t + \sin t) + i(\sin t - \cos t).$$
<p><b>Étape 6 : La partie réelle.</b></p>
$$\cR{y_p = \cos t + \sin t},\qquad\cG{y(t) = \lambda e^{-t} + \cos t + \sin t}.$$
<p>Contrôle : $y_p' + y_p = (-\sin t + \cos t) + (\cos t + \sin t) = 2\cos t$.</p>

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
<p><b>Étape 1 : Rappel.</b> Variation de la constante : $y_p = \lambda(t)e^{-A(t)}$, et il reste $\lambda'(t) = b(t)e^{A(t)}$.</p>
$$y' - \frac1t\,y = \cO{t^2}\quad\text{sur}\ \left]0, +\infty\right[.$$
<p><b>Étape 2 : L'homogène.</b> $a(t) = -\frac1t$, $A(t) = -\ln t$, $e^{-A(t)} = e^{\ln t} = t$ :</p>
$$\cB{y_H(t) = \lambda\,t}.$$
<p><b>Étape 3 : On pose $y_p = \lambda(t)\,t$</b>, donc $y_p' = \lambda'(t)\,t + \lambda(t)$.</p>
<p><b>Étape 4 : On remplace.</b> Les $\lambda(t)$ s'annulent :</p>
$$\lambda'(t)\,t + \cancel{\lambda(t)} - \cancel{\lambda(t)} = t^2\iff\lambda'(t) = t.$$
<p><b>Étape 5 : Une primitive.</b> $\lambda(t) = \frac{t^2}2$, donc $\cR{y_p = \frac{t^3}2}$.</p>
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{y(t) = \lambda\,t + \frac{t^3}2}.$$
<p>Contrôle : $y_p' - \frac1ty_p = \frac{3t^2}2 - \frac{t^2}2 = t^2$.</p>

<p class="ml">Exemple 2 : le second membre n'est pas « classique »</p>
<p><b>Étape 1 : Rappel.</b> Variation de la constante : $\lambda'(t) = b(t)\,e^{A(t)}$.</p>
$$y' + y = \cO{\frac1{1 + e^t}}\quad\text{sur}\ \mathbb R.$$
<p><b>Étape 2 : L'homogène.</b> $a = 1$, $A(t) = t$ : $\cB{y_H = \lambda e^{-t}}$.</p>
<p><b>Étape 3 : La formule.</b></p>
$$\lambda'(t) = \frac1{1 + e^t}\cdot e^t = \frac{e^t}{1 + e^t}.$$
<p><b>Étape 4 : Une primitive.</b> On reconnaît $\frac{u'}u$ avec $u = 1 + e^t > 0$ :</p>
$$\lambda(t) = \ln(1 + e^t).$$
<p><b>Étape 5 : Conclusion.</b></p>
$$\cR{y_p = e^{-t}\ln(1 + e^t)},\qquad\cG{y(t) = \big(\lambda + \ln(1 + e^t)\big)e^{-t}}.$$

<h2 id="e-raccord">7. Le raccordement (coefficient de $y'$ qui s'annule)</h2>
<ol>
<li>Résoudre sur chaque intervalle où le coefficient de $y'$ ne s'annule pas : <b>une constante par intervalle</b>.</li>
<li>Au point de jonction $t_0$, imposer : $y$ continue (limites à gauche et à droite égales), $y$ dérivable (taux d'accroissement), et l'équation vraie en $t_0$.</li>
<li>Conclure : la dimension de l'ensemble des solutions sur $\mathbb R$ peut être $0$, $1$ ou $2$.</li>
</ol>
<p class="ml">Exemple : $t\,y' - 2y = 0$ sur $\mathbb R$</p>
<p><b>Étape 1 : Rappel.</b> Si le coefficient de $y'$ s'annule, on résout sur chaque intervalle, puis on impose en ce point : continuité, dérivabilité, et l'équation.</p>
<p><b>Étape 2 : Sur $\left]0, +\infty\right[$.</b> On divise par $t$ : $y' - \frac2ty = 0$, $A(t) = -2\ln t$ :</p>
$$y(t) = \cG{\lambda_1}\,e^{2\ln t} = \cG{\lambda_1}\,t^2.$$
<p><b>Étape 3 : Sur $\left]-\infty, 0\right[$.</b> $A(t) = -2\ln|t|$ :</p>
$$y(t) = \cG{\lambda_2}\,t^2.$$
<p><b>Étape 4 : L'équation en $0$.</b> $0\cdot y'(0) - 2y(0) = 0$, donc $y(0) = 0$.</p>
<p><b>Étape 5 : La continuité en $0$.</b></p>
$$\lim_{t\to0^+}\lambda_1t^2 = 0 = \lim_{t\to0^-}\lambda_2t^2 = y(0).$$
<p><b>Étape 6 : La dérivabilité en $0$.</b> Le taux d'accroissement vaut $\lambda_1t$ à droite et $\lambda_2t$ à gauche : les deux tendent vers $0$.</p>
<p><b>Étape 7 : Conclusion.</b> Toute fonction $t\mapsto\lambda_1t^2$ ($t\geqslant0$), $\lambda_2t^2$ ($t\lt0$) convient, avec $\lambda_1, \lambda_2$ indépendants : $\cG{\text{un espace de dimension}\ 2}$.</p>

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
<p><b>Étape 1 : Rappel.</b> $y'' + ay' + by = 0$ : équation caractéristique $r^2 + ar + b = 0$. Si $\Delta > 0$, $y = \lambda e^{r_1t} + \mu e^{r_2t}$.</p>
$$y'' - 10y' + 21y = 0.$$
<p><b>Étape 2 : L'équation caractéristique.</b></p>
$$r^2 - 10r + 21 = 0.$$
<p><b>Étape 3 : Le discriminant.</b></p>
$$\Delta = (-10)^2 - 4\times21 = 100 - 84 = 16 = 4^2 > 0.$$
<p><b>Étape 4 : Les racines.</b></p>
$$r = \frac{10\pm4}2\ \Longrightarrow\ \cV{r_1 = 3},\quad\cV{r_2 = 7}.$$
<p><b>Étape 5 : Conclusion.</b></p>
$$\cB{y_H(t) = \cG\lambda\,e^{3t} + \cG\mu\,e^{7t}}.$$

<p class="ml">Exemple 2 : $\Delta = 0$</p>
<p><b>Étape 1 : Rappel.</b> Si $\Delta = 0$, racine double $r_0$ : $y = (\lambda + \mu t)e^{r_0t}$.</p>
$$y'' - 10y' + 25y = 0.$$
<p><b>Étape 2 : Équation caractéristique et discriminant.</b></p>
$$r^2 - 10r + 25 = 0,\qquad\Delta = 100 - 100 = 0.$$
<p><b>Étape 3 : La racine double.</b> $\cV{r_0} = \frac{10}2 = \cV5$ (on reconnaît aussi $(r - 5)^2$).</p>
<p><b>Étape 4 : Conclusion.</b></p>
$$\cB{y_H(t) = (\cG\lambda + \cG\mu\,t)\,e^{5t}}.$$

<p class="ml">Exemple 3 : $\Delta\lt0$</p>
<p><b>Étape 1 : Rappel.</b> Si $\Delta\lt0$, racines $\alpha\pm i\beta$ : $y = e^{\alpha t}\big(\lambda\cos(\beta t) + \mu\sin(\beta t)\big)$.</p>
$$y'' - 6y' + 73y = 0.$$
<p><b>Étape 2 : Équation caractéristique et discriminant.</b></p>
$$r^2 - 6r + 73 = 0,\qquad\Delta = 36 - 292 = -256 = (16i)^2.$$
<p><b>Étape 3 : Les racines.</b></p>
$$r = \frac{6\pm16i}2 = \cV{3\pm8i}\ \Longrightarrow\ \cV{\alpha = 3},\ \cV{\beta = 8}.$$
<p><b>Étape 4 : Conclusion.</b> $\alpha$ dans l'exponentielle, $\beta$ dans $\cos$ et $\sin$ :</p>
$$\cB{y_H(t) = e^{3t}\big(\cG\lambda\cos(8t) + \cG\mu\sin(8t)\big)}.$$

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
<p><b>Étape 1 : Rappel.</b> Second membre $P(t)e^{mt}$ : $y_p = t^sQ(t)e^{mt}$ avec $\deg Q = \deg P$ et $s$ la multiplicité de $m$ comme racine.</p>
$$y'' - 5y' + 6y = \cO{t^2 - 3t + 2}.$$
<p><b>Étape 2 : Les racines.</b> $r^2 - 5r + 6 = (r - 2)(r - 3)$ : $\cV2$ et $\cV3$.</p>
<p><b>Étape 3 : La forme de $y_p$.</b> Ici $m = 0$, qui n'est pas racine ($s = 0$), et $\deg P = 2$ :</p>
$$\cR{y_p = \alpha t^2 + \beta t + \gamma},\qquad y_p' = 2\alpha t + \beta,\qquad y_p'' = 2\alpha.$$
<p><b>Étape 4 : On remplace</b> et on range par puissances de $t$ :</p>
$$2\alpha - 5(2\alpha t + \beta) + 6(\alpha t^2 + \beta t + \gamma) = 6\alpha\,t^2 + (-10\alpha + 6\beta)\,t + (2\alpha - 5\beta + 6\gamma).$$
<p><b>Étape 5 : On identifie</b> avec $t^2 - 3t + 2$, de haut en bas :</p>
$$\left\{\begin{aligned}6\alpha &= 1\\-10\alpha + 6\beta &= -3\\2\alpha - 5\beta + 6\gamma &= 2\end{aligned}\right.\iff\left\{\begin{aligned}\alpha &= \tfrac16\\6\beta &= -3 + \tfrac{10}6 = -\tfrac43\\6\gamma &= 2 - \tfrac13 - \tfrac{10}9 = \tfrac59\end{aligned}\right.\iff\left\{\begin{aligned}\alpha &= \tfrac16\\\beta &= -\tfrac29\\\gamma &= \tfrac5{54}\end{aligned}\right.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{y(t) = \lambda e^{2t} + \mu e^{3t} + \frac16t^2 - \frac29t + \frac5{54}}.$$

<p class="ml">Exemple 2 : une exponentielle en résonance</p>
<p><b>Étape 1 : Rappel.</b> $m$ racine simple de l'équation caractéristique : $y_p = Ct\,e^{mt}$.</p>
$$y'' - 3y' + 2y = \cO{e^t}.$$
<p><b>Étape 2 : Les racines.</b> $r^2 - 3r + 2 = (r - 1)(r - 2)$ : $\cV1$ et $\cV2$. Ici $m = 1$ est racine <b>simple</b>.</p>
<p><b>Étape 3 : La forme et les dérivées.</b></p>
$$\cR{y_p = Ct\,e^t},\qquad y_p' = C(1 + t)e^t,\qquad y_p'' = C(2 + t)e^t.$$
<p><b>Étape 4 : On remplace.</b> Les termes en $t$ s'annulent :</p>
$$C\big[(2 + t) - 3(1 + t) + 2t\big]e^t = C\big[-1 + 0\cdot t\big]e^t = -Ce^t.$$
<p><b>Étape 5 : On identifie.</b> $-Ce^t = e^t\iff C = -1$ :</p>
$$\cR{y_p = -t\,e^t},\qquad\cG{y(t) = \lambda e^t + \mu e^{2t} - t\,e^t}.$$

<p class="ml">Exemple 3 : un cosinus sans résonance</p>
<p><b>Étape 1 : Rappel.</b> $\cos t = \operatorname{Re}(e^{it})$ : on cherche $z_p = Ce^{it}$ si $i$ n'est pas racine, puis $y_p = \operatorname{Re}(z_p)$.</p>
$$y'' + 3y' + 2y = \cO{10\cos t}.$$
<p><b>Étape 2 : Les racines.</b> $r^2 + 3r + 2 = (r + 1)(r + 2)$ : $\cV{-1}$ et $\cV{-2}$. $i$ n'est pas racine.</p>
<p><b>Étape 3 : L'équation complexe.</b> $z_p = Ce^{it}$, $z_p' = iCe^{it}$, $z_p'' = -Ce^{it}$ :</p>
$$(-1 + 3i + 2)\,Ce^{it} = (1 + 3i)\,Ce^{it} = 10e^{it}\iff C = \frac{10}{1 + 3i}.$$
<p><b>Étape 4 : On simplifie $C$.</b></p>
$$C = \frac{10(1 - 3i)}{1 + 9} = 1 - 3i.$$
<p><b>Étape 5 : On développe et on prend la partie réelle.</b></p>
$$z_p = (1 - 3i)(\cos t + i\sin t) = (\cos t + 3\sin t) + i(\sin t - 3\cos t)\ \Longrightarrow\ \cR{y_p = \cos t + 3\sin t}.$$
<p>Contrôle : $y_p'' + 3y_p' + 2y_p = (-1 + 9 + 2)\cos t + (-3 - 3 + 6)\sin t = 10\cos t$.</p>

<p class="ml">Exemple 4 : un cosinus en résonance</p>
<p><b>Étape 1 : Rappel.</b> Si $i\omega$ est racine simple, on cherche $z_p = Ct\,e^{i\omega t}$, puis la partie réelle.</p>
$$y'' + y = \cO{\cos t}.$$
<p><b>Étape 2 : Les racines.</b> $r^2 + 1 = 0$ : $\cV{\pm i}$. $i$ est racine simple : résonance.</p>
<p><b>Étape 3 : Les dérivées</b> de $z_p = Ct\,e^{it}$ :</p>
$$z_p' = C(1 + it)\,e^{it},\qquad z_p'' = C(2i - t)\,e^{it}.$$
<p><b>Étape 4 : On remplace.</b></p>
$$z_p'' + z_p = C(2i - t + t)\,e^{it} = 2iCe^{it} = e^{it}\iff C = \frac1{2i} = -\frac i2.$$
<p><b>Étape 5 : La partie réelle.</b></p>
$$z_p = -\frac i2t(\cos t + i\sin t) = \frac t2\sin t - i\frac t2\cos t\ \Longrightarrow\ \cR{y_p = \frac t2\sin t}.$$

<h2 id="e-superpo">10. Le principe de superposition</h2>
<div class="sbox">$$\left.\begin{aligned}\cR{y_1}\ \text{solution avec}\ \cO{b_1}\\\cR{y_2}\ \text{solution avec}\ \cO{b_2}\end{aligned}\right\}\ \Longrightarrow\ \cR{y_1 + y_2}\ \text{solution avec}\ \cO{b_1 + b_2}.$$</div>
<p class="ml">Exemple</p>
<p><b>Étape 1 : Rappel.</b> Si $y_1$ est solution avec $b_1$ et $y_2$ avec $b_2$, alors $y_1 + y_2$ est solution avec $b_1 + b_2$.</p>
$$y' + y = \cO t + \cO{e^{2t}}.$$
<p><b>Étape 2 : Morceau 1, $y' + y = t$.</b> On cherche $y_1 = \alpha t + \beta$ :</p>
$$\alpha + \alpha t + \beta = t\iff\alpha = 1,\ \alpha + \beta = 0\iff\cR{y_1 = t - 1}.$$
<p><b>Étape 3 : Morceau 2, $y' + y = e^{2t}$.</b> $2\neq-1$ : $y_2 = Ce^{2t}$ :</p>
$$2C + C = 1\iff C = \frac13,\qquad\cR{y_2 = \frac13e^{2t}}.$$
<p><b>Étape 4 : On additionne</b> et on ajoute l'homogène $\lambda e^{-t}$ :</p>
$$\cG{y(t) = \lambda e^{-t} + t - 1 + \frac13e^{2t}}.$$

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
<p>Contrôle : $y(0) = -1 + 1 - 0 = 0$ et $y'(0) = -1 + 2 - 1 = 0$.</p>

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
<p><b>Étape 1 : Rappel.</b> Si $A$ est diagonalisable de valeurs propres $\lambda_i$ et vecteurs propres $V_i$ : $X(t) = \sum c_ie^{\lambda_it}V_i$.</p>
<p><b>Étape 2 : Les valeurs propres.</b> $\chi_A = X^2 - 2X - 3 = (X - 3)(X + 1)$ : $\cV3$ et $\cV{-1}$.</p>
<p><b>Étape 3 : Le vecteur propre pour $3$.</b></p>
$$A - 3I_2 = \begin{pmatrix}-2&2\\2&-2\end{pmatrix}\iff\left\{\begin{aligned}-2x + 2y &= 0\\2x - 2y &= 0\end{aligned}\right.\iff y = x:\quad V_1 = \begin{pmatrix}1\\1\end{pmatrix}.$$
<p><b>Étape 4 : Le vecteur propre pour $-1$.</b></p>
$$A + I_2 = \begin{pmatrix}2&2\\2&2\end{pmatrix}\iff2x + 2y = 0\iff y = -x:\quad V_2 = \begin{pmatrix}1\\-1\end{pmatrix}.$$
<p><b>Étape 5 : La solution générale.</b></p>
$$X(t) = \cG{c_1}\,e^{3t}\begin{pmatrix}1\\1\end{pmatrix} + \cG{c_2}\,e^{-t}\begin{pmatrix}1\\-1\end{pmatrix}.$$
<p><b>Étape 6 : La condition initiale.</b></p>
$$X(0) = \begin{pmatrix}c_1 + c_2\\c_1 - c_2\end{pmatrix} = \begin{pmatrix}2\\0\end{pmatrix}\iff\left\{\begin{aligned}c_1 + c_2 &= 2\\c_1 - c_2 &= 0\end{aligned}\right.\iff c_1 = c_2 = 1.$$
<p><b>Étape 7 : Conclusion.</b></p>
$$\cG{X(t) = \begin{pmatrix}e^{3t} + e^{-t}\\e^{3t} - e^{-t}\end{pmatrix}}.$$
<p>Contrôle : $x' = 3e^{3t} - e^{-t}$ et $x + 2y = 3e^{3t} - e^{-t}$.</p>

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
<p><b>Étape 1 : Rappel.</b> De $k = p$ à $k = n$, il y a $n - p + 1$ termes.</p>
<p><b>Étape 2 : Première somme.</b> De $\cB3$ à $\cB{10}$ : $10 - 3 + 1 = 8$ termes, tous égaux à $1$ :</p>
$$\sum_{k=3}^{10}1 = \underbrace{1 + 1 + \cdots + 1}_{8\ \text{termes}} = \cG8.$$
<p><b>Étape 3 : Deuxième somme.</b> De $\cB0$ à $\cB n$ : $n - 0 + 1 = n + 1$ termes, tous égaux à $5$ :</p>
$$\sum_{k=0}^n5 = 5(n + 1) = \cG{5n + 5}.$$

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
<p><b>Étape 1 : Rappel.</b> Linéarité : $\sum(\lambda x_k + \mu y_k) = \lambda\sum x_k + \mu\sum y_k$, et $\sum_{k=1}^nk = \frac{n(n + 1)}2$.</p>
<p><b>Étape 2 : On coupe la somme.</b></p>
$$\sum_{k=1}^n(3k + 2) = 3\sum_{k=1}^nk + \sum_{k=1}^n2.$$
<p><b>Étape 3 : Chaque morceau.</b> $\sum_{k=1}^nk = \frac{n(n + 1)}2$ et $\sum_{k=1}^n2 = 2n$ ($n$ termes) :</p>
$$= 3\cdot\frac{n(n + 1)}2 + 2n.$$
<p><b>Étape 4 : Même dénominateur.</b></p>
$$= \frac{3n^2 + 3n + 4n}2 = \cG{\frac{n(3n + 7)}2}.$$
<p>Contrôle avec $n = 1$ : $3 + 2 = 5$ et $\frac{1\times10}2 = 5$.</p>

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
<p><b>Étape 1 : Rappel.</b> Changer d'indice, c'est changer trois choses : le terme général, la borne du bas et la borne du haut.</p>
$$S = \sum_{k=0}^{n-1}(k + 1)^2.$$
<p><b>Étape 2 : On pose $\cO{j = k + 1}$.</b> Le terme devient $j^2$.</p>
<p><b>Étape 3 : Les bornes.</b> $k = 0\mapsto j = \cB1$ et $k = n - 1\mapsto j = \cB n$.</p>
<p><b>Étape 4 : On réécrit et on conclut</b> avec la somme usuelle :</p>
$$S = \sum_{j=1}^nj^2 = \cG{\frac{n(n + 1)(2n + 1)}6}.$$

<p class="ml">Exemple 2 : un retournement</p>
<p><b>Étape 1 : Rappel.</b> Avec $j = n - k$, on a $k = n - j$ : <b>tous</b> les $k$ sont remplacés, et les bornes sont échangées.</p>
$$T = \sum_{k=0}^n(n - k)\,2^{n-k}.$$
<p><b>Étape 2 : On pose $\cO{j = n - k}$.</b> Le terme $(n - k)2^{n-k}$ devient $j\,2^j$.</p>
<p><b>Étape 3 : Les bornes.</b> $k = 0\mapsto j = \cB n$ et $k = n\mapsto j = \cB0$.</p>
<p><b>Étape 4 : On remet dans l'ordre croissant</b> (l'ordre des termes ne change pas une somme) :</p>
$$\cG{T = \sum_{j=0}^nj\,2^j}.$$

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
<p><b>Étape 1 : Rappel.</b> $\sum_{k=1}^nk = \frac{n(n + 1)}2$ et $\sum_{k=1}^nk^2 = \frac{n(n + 1)(2n + 1)}6$.</p>
<p><b>Étape 2 : On développe le terme.</b> $k(k + 1) = k^2 + k$.</p>
<p><b>Étape 3 : Linéarité.</b></p>
$$\sum_{k=1}^nk(k + 1) = \sum_{k=1}^nk^2 + \sum_{k=1}^nk = \frac{n(n + 1)(2n + 1)}6 + \frac{n(n + 1)}2.$$
<p><b>Étape 4 : On factorise par $\cO{\frac{n(n + 1)}6}$</b> avant de développer ($\frac{n(n+1)}2 = \frac{n(n+1)}6\times3$) :</p>
$$= \cO{\frac{n(n + 1)}6}\big[(2n + 1) + 3\big] = \frac{n(n + 1)(2n + 4)}6 = \cG{\frac{n(n + 1)(n + 2)}3}.$$
<p>Contrôle avec $n = 2$ : $1\times2 + 2\times3 = 8$ et $\frac{2\times3\times4}3 = 8$.</p>

<h2 id="a-geo">5. La somme géométrique</h2>
<div class="sbox">$$\sum_{k=0}^nq^k = \left\{\begin{aligned}&\frac{1 - q^{n+1}}{1 - q}&&\text{si}\ q\neq1\\&n + 1&&\text{si}\ q = 1\end{aligned}\right.\qquad\text{En général}:\ \text{premier terme}\times\frac{1 - q^{\text{nombre de termes}}}{1 - q}.$$</div>
<p class="ml">Pourquoi (à savoir refaire)</p>
$$(1 - q)\sum_{k=0}^nq^k = \sum_{k=0}^nq^k - \sum_{k=0}^nq^{k+1} = (1 + \cR{q + \cdots + q^n}) - (\cR{q + \cdots + q^n} + q^{n+1}) = 1 - q^{n+1}.$$
<p class="ml">Exemple 1 : la somme ne commence pas à 0</p>
<p><b>Étape 1 : Rappel.</b> Somme géométrique de raison $q\neq1$ : premier terme $\times\dfrac{1 - q^{\text{nombre de termes}}}{1 - q}$.</p>
$$\sum_{k=2}^n3^k.$$
<p><b>Étape 2 : Les ingrédients.</b> Raison $q = 3\neq1$. Premier terme $3^2 = 9$. Nombre de termes : $n - 2 + 1 = n - 1$.</p>
<p><b>Étape 3 : La formule.</b></p>
$$\sum_{k=2}^n3^k = 9\cdot\frac{1 - 3^{n-1}}{1 - 3} = 9\cdot\frac{3^{n-1} - 1}{2}.$$
<p><b>Étape 4 : On simplifie</b> avec $9\times3^{n-1} = 3^{n+1}$ :</p>
$$= \cG{\frac{3^{n+1} - 9}2}.$$
<p>Contrôle avec $n = 2$ : $3^2 = 9$ et $\frac{27 - 9}2 = 9$.</p>

<p class="ml">Exemple 2 : la raison est cachée</p>
<p><b>Étape 1 : Rappel.</b> $\sum_{k=0}^nq^k = \frac{1 - q^{n+1}}{1 - q}$ pour $q\neq1$.</p>
$$\sum_{k=0}^n\frac{2^k}{5^{k+1}}.$$
<p><b>Étape 2 : Faire apparaître $q^k$.</b> $5^{k+1} = 5\times5^k$, donc $\frac{2^k}{5^{k+1}} = \frac15\Big(\frac25\Big)^k$.</p>
<p><b>Étape 3 : On sort la constante</b> et on applique la formule avec $q = \frac25\neq1$ :</p>
$$\frac15\sum_{k=0}^n\Big(\frac25\Big)^k = \frac15\cdot\frac{1 - (2/5)^{n+1}}{1 - 2/5}.$$
<p><b>Étape 4 : On simplifie</b> $\frac{1}{1 - 2/5} = \frac53$ :</p>
$$= \frac15\cdot\frac53\Big(1 - \Big(\frac25\Big)^{n+1}\Big) = \cG{\frac13\Big(1 - \Big(\frac25\Big)^{n+1}\Big)}.$$

<p class="ml piege">Piège</p>
<p>Toujours vérifier $q\neq1$. Avec un paramètre ($q = x$, $q = e^{i\theta}$), on traite le cas $q = 1$ à part.</p>

<h2 id="a-tele">6. Le télescopage</h2>
<div class="sbox">$$\sum_{k=p}^n(x_{k+1} - x_k) = x_{n+1} - x_p,\qquad\prod_{k=p}^n\frac{x_{k+1}}{x_k} = \frac{x_{n+1}}{x_p}\quad(x_k\neq0).$$</div>
<p>On repère une différence de deux termes <b>consécutifs</b> de la même suite. On écrit les termes, ils s'annulent deux à deux, il reste le dernier et le premier.</p>
<p class="ml">Exemple 1 : $\sum_{k=1}^n\frac1{k(k + 1)}$</p>
<p><b>Étape 1 : Rappel.</b> Télescopage : $\sum_{k=p}^n(x_k - x_{k+1}) = x_p - x_{n+1}$.</p>
<p><b>Étape 2 : Décomposer.</b> On cherche $a, b$ avec $\frac1{k(k + 1)} = \frac ak + \frac b{k + 1}$ :</p>
$$\frac ak + \frac b{k + 1} = \frac{a(k + 1) + bk}{k(k + 1)} = \frac{(a + b)k + a}{k(k + 1)}.$$
<p><b>Étape 3 : Identifier.</b></p>
$$\left\{\begin{aligned}a + b &= 0\\a &= 1\end{aligned}\right.\iff a = 1,\ b = -1:\qquad\frac1{k(k + 1)} = \frac1k - \frac1{k + 1}.$$
<p><b>Étape 4 : Écrire les termes.</b> Ils s'annulent deux à deux :</p>
$$\sum_{k=1}^n\Big(\frac1k - \frac1{k + 1}\Big) = \Big(1 - \cR{\frac12}\Big) + \Big(\cR{\frac12} - \cR{\frac13}\Big) + \cdots + \Big(\cR{\frac1n} - \frac1{n + 1}\Big).$$
<p><b>Étape 5 : Il reste le premier et le dernier.</b></p>
$$\cG{\sum_{k=1}^n\frac1{k(k + 1)} = 1 - \frac1{n + 1} = \frac n{n + 1}}.$$

<p class="ml">Exemple 2 : un écart de 2</p>
<p><b>Étape 1 : Rappel.</b> Télescopage avec un écart de $2$ : $\sum_{k=1}^n(x_k - x_{k+2}) = x_1 + x_2 - x_{n+1} - x_{n+2}$.</p>
<p><b>Étape 2 : Décomposer.</b> Comme à l'exemple 1 :</p>
$$\frac1{k(k + 2)} = \frac12\Big(\frac1k - \frac1{k + 2}\Big).$$
<p><b>Étape 3 : Ce qui s'annule.</b> Chaque $\frac1j$ avec $3\leqslant j\leqslant n$ apparaît une fois avec $+$ et une fois avec $-$.</p>
<p><b>Étape 4 : Ce qui reste.</b> Les deux premiers $+$ ($k = 1, 2$) et les deux derniers $-$ ($k = n - 1, n$) :</p>
$$\cG{\sum_{k=1}^n\frac1{k(k + 2)} = \frac12\Big(1 + \frac12 - \frac1{n + 1} - \frac1{n + 2}\Big)}.$$

<p class="ml">Exemple 3 : un produit télescopique</p>
<p><b>Étape 1 : Rappel.</b> Produit télescopique : $\prod_{k=p}^n\frac{x_{k+1}}{x_k} = \frac{x_{n+1}}{x_p}$.</p>
<p><b>Étape 2 : Factoriser le terme.</b></p>
$$1 - \frac1{k^2} = \frac{k^2 - 1}{k^2} = \frac{(k - 1)(k + 1)}{k\cdot k}.$$
<p><b>Étape 3 : Séparer en deux produits.</b></p>
$$\prod_{k=2}^n\Big(1 - \frac1{k^2}\Big) = \Big(\prod_{k=2}^n\frac{k - 1}k\Big)\Big(\prod_{k=2}^n\frac{k + 1}k\Big).$$
<p><b>Étape 4 : Premier produit.</b></p>
$$\frac12\cdot\frac{\cR2}{\cR3}\cdots\frac{\cR{n - 1}}n = \frac1n.$$
<p><b>Étape 5 : Second produit.</b></p>
$$\frac{\cR3}2\cdot\frac{\cR4}{\cR3}\cdots\frac{n + 1}{\cR n} = \frac{n + 1}2.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\prod_{k=2}^n\Big(1 - \frac1{k^2}\Big) = \frac1n\cdot\frac{n + 1}2 = \frac{n + 1}{2n}}.$$

<p class="ml">Exemple 4 : avec un logarithme</p>
<p><b>Étape 1 : Rappel.</b> $\ln\frac ab = \ln a - \ln b$, et $\sum(x_{k+1} - x_k) = x_{n+1} - x_1$.</p>
<p><b>Étape 2 : Transformer le terme.</b> $\ln\Big(1 + \frac1k\Big) = \ln\frac{k + 1}k = \ln(k + 1) - \ln k$.</p>
<p><b>Étape 3 : Télescoper.</b></p>
$$\sum_{k=1}^n\big(\ln(k + 1) - \ln k\big) = \ln(n + 1) - \ln1.$$
<p><b>Étape 4 : Conclusion.</b> $\ln1 = 0$ : $\cG{\sum_{k=1}^n\ln\big(1 + \frac1k\big) = \ln(n + 1)}$.</p>

<h2 id="a-prod">7. Les produits</h2>
<div class="sbox">$$\prod_{k=p}^n\lambda = \lambda^{n-p+1},\qquad\prod_{k=p}^n(\lambda x_k) = \lambda^{n-p+1}\prod_{k=p}^nx_k,\qquad\ln\Big(\prod x_k\Big) = \sum\ln x_k\ (x_k > 0),\qquad e^{\sum x_k} = \prod e^{x_k}.$$</div>
<ul>
<li>$\prod_{k=1}^nk = n!$, et un produit est nul si et seulement si un de ses facteurs est nul.</li>
<li>Le $\lambda$ sort avec la <b>puissance</b> $n - p + 1$, pas multiplié une fois.</li>
</ul>
<p class="ml">Exemple 1 : les nombres pairs</p>
<p><b>Étape 1 : Rappel.</b> $\prod_{k=1}^n(\lambda x_k) = \lambda^n\prod_{k=1}^nx_k$ (le $\lambda$ sort $n$ fois), et $\prod_{k=1}^nk = n!$.</p>
<p><b>Étape 2 : On sort le $2$</b> de chacun des $n$ facteurs :</p>
$$\prod_{k=1}^n(2k) = \cO{2^n}\prod_{k=1}^nk.$$
<p><b>Étape 3 : Conclusion.</b></p>
$$\cG{\prod_{k=1}^n(2k) = 2^n\,n!}.$$

<p class="ml">Exemple 2 : les nombres impairs, on complète avec les pairs</p>
<p><b>Étape 1 : Rappel.</b> $(2n)! = 1\times2\times3\times\cdots\times(2n)$ contient les pairs et les impairs, et $\prod_{k=1}^n(2k) = 2^nn!$.</p>
<p><b>Étape 2 : On complète</b> le produit des impairs en multipliant et divisant par les pairs :</p>
$$\prod_{k=1}^n(2k - 1) = \frac{1\times\cO2\times3\times\cO4\times\cdots\times(2n - 1)\times\cO{2n}}{\cO2\times\cO4\times\cdots\times\cO{2n}}.$$
<p><b>Étape 3 : Le numérateur</b> est $(2n)!$, le dénominateur est le produit des pairs, $2^nn!$.</p>
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{\prod_{k=1}^n(2k - 1) = \frac{(2n)!}{2^n\,n!}}.$$

<p class="ml">Exemple 3 : une somme dans l'exponentielle</p>
<p><b>Étape 1 : Rappel.</b> $\prod e^{x_k} = e^{\sum x_k}$, et $\sum_{k=1}^nk = \frac{n(n + 1)}2$.</p>
<p><b>Étape 2 : On passe à l'exponentielle d'une somme.</b></p>
$$\prod_{k=1}^ne^{k/n} = e^{\sum_{k=1}^n\frac kn} = e^{\frac1n\sum_{k=1}^nk}.$$
<p><b>Étape 3 : La somme.</b></p>
$$\frac1n\cdot\frac{n(n + 1)}2 = \frac{n + 1}2.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{\prod_{k=1}^ne^{k/n} = e^{\frac{n + 1}2}}$.</p>

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
<p><b>Étape 1 : Rappel.</b> $(a + b)^n = \sum_{k=0}^n\binom nka^kb^{n-k}$, et les $\binom nk$ se lisent sur la ligne $n$ du triangle de Pascal.</p>
<p><b>Étape 2 : La ligne $n = 5$.</b> $\cV1, \cV5, \cV{10}, \cV{10}, \cV5, \cV1$.</p>
<p><b>Étape 3 : Les puissances.</b> Avec $a = x$ et $b = 1$, les puissances de $x$ descendent de $5$ à $0$, celles de $1$ valent toujours $1$.</p>
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{(x + 1)^5 = x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1}.$$
<p>Contrôle avec $x = 1$ : $2^5 = 32 = 1 + 5 + 10 + 10 + 5 + 1$.</p>

<p class="ml">Exemple 2 : $(2x - 3)^4$, avec un signe</p>
<p><b>Étape 1 : Rappel.</b> $(a + b)^n = \sum_{k=0}^n\binom nka^kb^{n-k}$.</p>
<p><b>Étape 2 : On identifie $a$ et $b$</b>, en gardant le signe : $a = 2x$, $b = -3$, $n = 4$. Ligne $4$ du triangle : $1, 4, 6, 4, 1$.</p>
<p><b>Étape 3 : Le tableau terme par terme.</b></p>
<table class="mtab">
<tr><th>$k$</th><th>$\cV{\binom4k}$</th><th>$(2x)^k$</th><th>$(-3)^{4-k}$</th><th>Terme</th></tr>
<tr><td>$0$</td><td>$\cV1$</td><td>$1$</td><td>$81$</td><td>$81$</td></tr>
<tr><td>$1$</td><td>$\cV4$</td><td>$2x$</td><td>$-27$</td><td>$-216x$</td></tr>
<tr><td>$2$</td><td>$\cV6$</td><td>$4x^2$</td><td>$9$</td><td>$216x^2$</td></tr>
<tr><td>$3$</td><td>$\cV4$</td><td>$8x^3$</td><td>$-3$</td><td>$-96x^3$</td></tr>
<tr><td>$4$</td><td>$\cV1$</td><td>$16x^4$</td><td>$1$</td><td>$16x^4$</td></tr>
</table>
<p><b>Étape 4 : On additionne</b>, par puissances décroissantes :</p>
$$\cG{(2x - 3)^4 = 16x^4 - 96x^3 + 216x^2 - 216x + 81}.$$
<p>Contrôle avec $x = 1$ : $(2 - 3)^4 = 1$ et $16 - 96 + 216 - 216 + 81 = 1$.</p>

<p class="ml">Exemple 3 : les sommes de coefficients</p>
<p><b>Étape 1 : Rappel.</b> $(a + b)^n = \sum_{k=0}^n\binom nka^kb^{n-k}$ : on choisit $a$ et $b$ pour retrouver la somme voulue.</p>
<p><b>Étape 2 : $a = b = 1$.</b> Toutes les puissances valent $1$ :</p>
$$\sum_{k=0}^n\binom nk = (1 + 1)^n = \cG{2^n}.$$
<p><b>Étape 3 : $a = -1$, $b = 1$.</b> Il reste $(-1)^k$ :</p>
$$\sum_{k=0}^n(-1)^k\binom nk = (-1 + 1)^n = \cG0\quad(n\geqslant1).$$

<p class="ml">Exemple 4 : $\sum_{k=0}^nk\binom nk$ avec la formule du capitaine</p>
<p><b>Étape 1 : Rappel.</b> Formule du capitaine : $k\binom nk = n\binom{n - 1}{k - 1}$ pour $k\geqslant1$, et $\sum_{j=0}^{m}\binom mj = 2^m$.</p>
<p><b>Étape 2 : Le terme $k = 0$</b> vaut $0\times\binom n0 = 0$ : on commence à $k = 1$.</p>
<p><b>Étape 3 : La formule du capitaine.</b></p>
$$\sum_{k=1}^nk\binom nk = n\sum_{k=1}^n\binom{n - 1}{k - 1}.$$
<p><b>Étape 4 : On décale avec $\cO{j = k - 1}$</b> : $k = 1\mapsto j = 0$, $k = n\mapsto j = n - 1$.</p>
$$= n\sum_{j=0}^{n-1}\binom{n - 1}j.$$
<p><b>Étape 5 : Conclusion</b> par l'étape 2 de l'exemple 3 avec $n - 1$ :</p>
$$\cG{\sum_{k=0}^nk\binom nk = n\,2^{n-1}}.$$

<div data-mlab="binome"></div>

<h2 id="a-bern">10. Factoriser $a^n - b^n$</h2>
<div class="sbox">$$a^n - b^n = (a - b)\sum_{k=0}^{n-1}a^kb^{n-1-k} = (a - b)\big(a^{n-1} + a^{n-2}b + \cdots + ab^{n-2} + b^{n-1}\big).$$</div>
<p class="ml">Pourquoi : on développe et ça télescope</p>
$$(a - b)\sum_{k=0}^{n-1}a^kb^{n-1-k} = \sum_{k=0}^{n-1}a^{k+1}b^{n-1-k} - \sum_{k=0}^{n-1}a^kb^{n-k} = a^n - b^n.$$
<p class="ml">Les cas à connaître</p>
$$a^2 - b^2 = (a - b)(a + b),\qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2),\qquad x^n - 1 = (x - 1)(1 + x + \cdots + x^{n-1}).$$
<p>Pour $n$ impair, on remplace $b$ par $-b$ : $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.</p>
<p class="ml">Exemple : $x^5 - 32$</p>
<p><b>Étape 1 : Rappel.</b> $a^n - b^n = (a - b)\big(a^{n-1} + a^{n-2}b + \cdots + ab^{n-2} + b^{n-1}\big)$.</p>
<p><b>Étape 2 : Écrire $32$ comme une puissance $5$-ième.</b> $32 = 2^5$, donc $a = x$, $b = 2$, $n = 5$.</p>
<p><b>Étape 3 : Les termes de la parenthèse.</b> Les puissances de $x$ descendent de $4$ à $0$, celles de $2$ montent de $0$ à $4$ : $x^4$, $2x^3$, $4x^2$, $8x$, $16$.</p>
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{x^5 - 32 = (x - 2)(x^4 + 2x^3 + 4x^2 + 8x + 16)}.$$

<h2 id="a-doubles">11. Les sommes doubles</h2>
<p class="ml">Sur un rectangle : on intervertit librement</p>
<div class="sbox">$$\sum_{\substack{1\leqslant i\leqslant n\\1\leqslant j\leqslant m}}a_{i,j} = \sum_{i=1}^n\Big(\sum_{j=1}^ma_{i,j}\Big) = \sum_{j=1}^m\Big(\sum_{i=1}^na_{i,j}\Big),\qquad\Big(\sum_{i=1}^nx_i\Big)\Big(\sum_{j=1}^my_j\Big) = \sum_{i,j}x_iy_j.$$</div>
<p class="ml">Sur un triangle : on dessine pour changer l'ordre</p>
<div class="sbox">$$\sum_{1\leqslant i\leqslant j\leqslant n}a_{i,j} = \sum_{j=1}^n\sum_{\cB{i = 1}}^{\cB j}a_{i,j} = \sum_{i=1}^n\sum_{\cB{j = i}}^{\cB n}a_{i,j}.$$</div>
<p>Méthode : on fixe la variable de l'extérieur, puis on lit dans la condition $1\leqslant i\leqslant j\leqslant n$ les bornes de celle de l'intérieur.</p>
<p class="ml">Exemple : $S = \sum_{1\leqslant i\leqslant j\leqslant n}i$</p>
<p><b>Étape 1 : Rappel.</b> Sur un triangle : $\sum_{1\leqslant i\leqslant j\leqslant n}a_{i,j} = \sum_{j=1}^n\sum_{i=1}^ja_{i,j}$.</p>
<p><b>Étape 2 : Les bornes.</b> On fixe $j$ ; la condition $1\leqslant i\leqslant j$ donne $i$ de $\cB1$ à $\cB j$.</p>
<p><b>Étape 3 : La somme intérieure.</b></p>
$$\sum_{i=1}^ji = \frac{j(j + 1)}2.$$
<p><b>Étape 4 : La somme extérieure</b>, avec $\sum_{j=1}^nj(j + 1) = \frac{n(n + 1)(n + 2)}3$ (§4) :</p>
$$S = \frac12\sum_{j=1}^nj(j + 1) = \frac12\cdot\frac{n(n + 1)(n + 2)}3 = \cG{\frac{n(n + 1)(n + 2)}6}.$$
<p>Contrôle avec $n = 2$ : les couples sont $(1,1), (1,2), (2,2)$, donc $S = 1 + 1 + 2 = 4$, et $\frac{2\times3\times4}6 = 4$.</p>

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
<p><b>Étape 1 : Rappel.</b> Si $a\leqslant x_k\leqslant b$ pour chacun des $n$ termes, alors $na\leqslant\sum x_k\leqslant nb$.</p>
<p><b>Étape 2 : Encadrer le dénominateur.</b> Pour $1\leqslant k\leqslant n$ : $n + 1\leqslant n + k\leqslant2n$.</p>
<p><b>Étape 3 : Encadrer le terme</b> (la fonction inverse est décroissante) :</p>
$$\frac1{2n}\leqslant\frac1{n + k}\leqslant\frac1{n + 1}.$$
<p><b>Étape 4 : Sommer les $n$ encadrements.</b></p>
$$\cG{\frac12 = \frac n{2n}\leqslant\sum_{k=1}^n\frac1{n + k}\leqslant\frac n{n + 1}\lt1}.$$

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
<p><b>Étape 1 : Rappel.</b> On développe comme avec des réels, puis $i^2 = -1$.</p>
<p><b>Étape 2 : On développe</b> les quatre produits :</p>
$$(2 + 3i)(1 - 4i) = 2\times1 + 2\times(-4i) + 3i\times1 + 3i\times(-4i) = 2 - 8i + 3i - 12\cO{i^2}.$$
<p><b>Étape 3 : On remplace $i^2$ par $-1$</b> et on regroupe :</p>
$$= 2 - 5i + 12 = \cG{14 - 5i}.$$

<p class="ml">Exemple 2 : un quotient</p>
<p><b>Étape 1 : Rappel.</b> Pour diviser, on multiplie en haut et en bas par le conjugué du dénominateur : $(a + ib)(a - ib) = a^2 + b^2$.</p>
<p><b>Étape 2 : Le conjugué du dénominateur.</b> $\overline{1 - 2i} = 1 + 2i$.</p>
<p><b>Étape 3 : On multiplie.</b></p>
$$\frac{2 + 3i}{1 - 2i} = \frac{(2 + 3i)\cO{(1 + 2i)}}{(1 - 2i)\cO{(1 + 2i)}}.$$
<p><b>Étape 4 : Le numérateur.</b></p>
$$(2 + 3i)(1 + 2i) = 2 + 4i + 3i + 6i^2 = -4 + 7i.$$
<p><b>Étape 5 : Le dénominateur.</b> $1^2 + 2^2 = 5$.</p>
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\frac{2 + 3i}{1 - 2i} = -\frac45 + \frac75i},\qquad\operatorname{Re} = \cB{-\frac45},\quad\operatorname{Im} = \cR{\frac75}.$$

<p class="ml piege">Piège</p>
<p>$\operatorname{Im}(3 - 2i) = -2$, pas $-2i$. Et on ne compare pas des complexes avec $\leqslant$.</p>

<h2 id="z-conj">3. Le conjugué</h2>
<div class="sbox">$$\overline{z + z'} = \overline z + \overline{z'},\quad\overline{zz'} = \overline z\,\overline{z'},\quad\overline{\Big(\frac z{z'}\Big)} = \frac{\overline z}{\overline{z'}},\quad\operatorname{Re}z = \frac{z + \overline z}2,\quad\operatorname{Im}z = \frac{z - \overline z}{2i}.$$</div>
<div class="sbox">$$z\in\mathbb R\iff\overline z = z,\qquad z\in i\mathbb R\iff\overline z = -z.$$</div>
<p class="ml">Exemple : montrer qu'un nombre est réel sans le calculer</p>
<p><b>Étape 1 : Rappel.</b> $w\in i\mathbb R\iff\overline w = -w$. Et $z\in\mathbb U\iff\overline z = \frac1z$.</p>
<p><b>Étape 2 : On conjugue $w$.</b> Le conjugué passe sur chaque morceau :</p>
$$\overline w = \frac{1 - \overline z}{1 + \overline z} = \frac{1 - \frac1z}{1 + \frac1z}.$$
<p><b>Étape 3 : On multiplie en haut et en bas par $\cO z$.</b></p>
$$\overline w = \frac{z - 1}{z + 1}.$$
<p><b>Étape 4 : On compare à $w$.</b></p>
$$\frac{z - 1}{z + 1} = -\frac{1 - z}{1 + z} = -w.$$
<p><b>Étape 5 : Conclusion.</b> $\overline w = -w$ : $\cG{w\ \text{est imaginaire pur}}$.</p>

<h2 id="z-mod">4. Le module</h2>
<div class="sbox">$$|zz'| = |z|\,|z'|,\quad\Big|\frac z{z'}\Big| = \frac{|z|}{|z'|},\quad|z^n| = |z|^n,\quad\big||z| - |z'|\big|\leqslant|z + z'|\leqslant|z| + |z'|.$$</div>
<ul>
<li>$|z| = 0\iff z = 0$, et $|z - z'|$ est la distance entre les points d'affixes $z$ et $z'$.</li>
<li>Égalité dans l'inégalité triangulaire ($z'\neq0$) : $|z + z'| = |z| + |z'|\iff z = \lambda z'$ avec $\lambda\geqslant0$.</li>
<li>Avec des sommes : $\big|\sum z_k\big|\leqslant\sum|z_k|$.</li>
</ul>
<p class="ml">Exemple : le module d'une puissance, sans développer</p>
<p><b>Étape 1 : Rappel.</b> $|z^n| = |z|^n$ et $|a + ib| = \sqrt{a^2 + b^2}$.</p>
<p><b>Étape 2 : Le module de $1 + i$.</b></p>
$$|1 + i| = \sqrt{1^2 + 1^2} = \sqrt2.$$
<p><b>Étape 3 : La puissance.</b></p>
$$|(1 + i)^8| = (\sqrt2)^8 = 2^4 = \cG{16}.$$

<p class="ml">Exemple : le module d'un quotient</p>
<p><b>Étape 1 : Rappel.</b> $\Big|\frac z{z'}\Big| = \frac{|z|}{|z'|}$.</p>
<p><b>Étape 2 : Les deux modules.</b></p>
$$|3 + 4i| = \sqrt{9 + 16} = 5,\qquad|1 - i| = \sqrt{1 + 1} = \sqrt2.$$
<p><b>Étape 3 : Le quotient</b>, en rendant le dénominateur rationnel :</p>
$$\Big|\frac{3 + 4i}{1 - i}\Big| = \frac5{\sqrt2} = \cG{\frac{5\sqrt2}2}.$$

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
<p><b>Étape 1 : Rappel.</b> $z = r(\cos\theta + i\sin\theta) = re^{i\theta}$ avec $r = |z|$.</p>
<p><b>Étape 2 : Le module.</b></p>
$$\cB r = \sqrt{1^2 + (\sqrt3)^2} = \sqrt{1 + 3} = \cB2.$$
<p><b>Étape 3 : On factorise par $r$.</b></p>
$$z = \cB2\Big(\frac12 + i\frac{\sqrt3}2\Big).$$
<p><b>Étape 4 : On reconnaît l'angle.</b> $\cos\theta = \frac12$ et $\sin\theta = \frac{\sqrt3}2 > 0$ : $\cR{\theta = \frac\pi3}$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{z = 2e^{i\pi/3}}$.</p>

<p class="ml">Exemple 2 : $z = -1 + i$</p>
<p><b>Étape 1 : Rappel.</b> $z = re^{i\theta}$ avec $r = |z|$, $\cos\theta = \frac ar$, $\sin\theta = \frac br$.</p>
<p><b>Étape 2 : Le module.</b></p>
$$\cB r = \sqrt{(-1)^2 + 1^2} = \cB{\sqrt2}.$$
<p><b>Étape 3 : On factorise.</b></p>
$$z = \sqrt2\Big(-\frac1{\sqrt2} + i\frac1{\sqrt2}\Big) = \sqrt2\Big(-\frac{\sqrt2}2 + i\frac{\sqrt2}2\Big).$$
<p><b>Étape 4 : L'angle.</b> $\cos\theta = -\frac{\sqrt2}2$ et $\sin\theta = \frac{\sqrt2}2 > 0$ (demi-plan du haut) : $\cR{\theta = \frac{3\pi}4}$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{z = \sqrt2\,e^{3i\pi/4}}$.</p>

<p class="ml">Exemple 3 : $z = \sqrt3 - i$</p>
<p><b>Étape 1 : Rappel.</b> Le signe de $\sin\theta$ donne le demi-plan : négatif, l'angle est dans $\left]-\pi, 0\right[$.</p>
<p><b>Étape 2 : Le module.</b> $\cB r = \sqrt{3 + 1} = \cB2$.</p>
<p><b>Étape 3 : On factorise.</b> $z = 2\Big(\frac{\sqrt3}2 - \frac12i\Big)$.</p>
<p><b>Étape 4 : L'angle.</b> $\cos\theta = \frac{\sqrt3}2$, $\sin\theta = -\frac12\lt0$ : $\cR{\theta = -\frac\pi6}$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{z = 2e^{-i\pi/6}}$.</p>

<p class="ml">Exemple 4 : une puissance, grâce à la forme exponentielle</p>
<p><b>Étape 1 : Rappel.</b> $(re^{i\theta})^n = r^ne^{in\theta}$, et $e^{2ik\pi} = 1$.</p>
<p><b>Étape 2 : Forme exponentielle.</b> Exemple 1 : $1 + i\sqrt3 = 2e^{i\pi/3}$.</p>
<p><b>Étape 3 : La puissance.</b></p>
$$(1 + i\sqrt3)^6 = 2^6e^{6i\pi/3} = 64\,e^{2i\pi}.$$
<p><b>Étape 4 : Conclusion.</b> $e^{2i\pi} = 1$ : $\cG{(1 + i\sqrt3)^6 = 64}$.</p>

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
<p><b>Étape 1 : Rappel.</b> Angle moitié : $1 + e^{i\theta} = e^{i\theta/2}\big(e^{-i\theta/2} + e^{i\theta/2}\big)$ et $e^{ix} + e^{-ix} = 2\cos x$.</p>
<p><b>Étape 2 : On factorise par $\cO{e^{i\theta/2}}$.</b></p>
$$1 + e^{i\theta} = e^{i\theta/2}\big(e^{-i\theta/2} + e^{i\theta/2}\big).$$
<p><b>Étape 3 : Euler.</b></p>
$$1 + e^{i\theta} = 2\cos\Big(\frac\theta2\Big)\,e^{i\theta/2}.$$
<p><b>Étape 4 : Le signe du cosinus.</b> $\theta\in\left]-\pi, \pi\right[$, donc $\frac\theta2\in\left]-\frac\pi2, \frac\pi2\right[$ et $\cos\frac\theta2 > 0$ : c'est une vraie forme exponentielle.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{|1 + e^{i\theta}| = 2\cos\frac\theta2},\qquad\cG{\arg(1 + e^{i\theta})\equiv\frac\theta2\ [2\pi]}.$$
<p>Remarque : si $\theta\in\left]\pi, 3\pi\right[$, le cosinus est négatif : le module vaut $-2\cos\frac\theta2$ et l'argument $\frac\theta2 + \pi$.</p>

<p class="ml">Exemple 2 : $\sum_{k=0}^n\cos(k\theta)$, avec $\theta\not\equiv0\ [2\pi]$</p>
<p><b>Étape 1 : Rappel.</b> $\cos(k\theta) = \operatorname{Re}(e^{ik\theta})$, somme géométrique $\sum_{k=0}^nq^k = \frac{1 - q^{n+1}}{1 - q}$, et $1 - e^{ix} = -2i\sin\frac x2\,e^{ix/2}$.</p>
<p><b>Étape 2 : Somme géométrique</b> de raison $e^{i\theta}\neq1$ :</p>
$$\sum_{k=0}^n\cos(k\theta) = \operatorname{Re}\Big(\sum_{k=0}^n(e^{i\theta})^k\Big) = \operatorname{Re}\Big(\frac{1 - e^{i(n+1)\theta}}{1 - e^{i\theta}}\Big).$$
<p><b>Étape 3 : Angle moitié en haut et en bas.</b></p>
$$\frac{1 - e^{i(n+1)\theta}}{1 - e^{i\theta}} = \frac{\cancel{-2i}\,\sin\frac{(n+1)\theta}2\,e^{i\frac{(n+1)\theta}2}}{\cancel{-2i}\,\sin\frac\theta2\,e^{i\frac\theta2}}.$$
<p><b>Étape 4 : On simplifie les exponentielles.</b> $\frac{(n + 1)\theta}2 - \frac\theta2 = \frac{n\theta}2$ :</p>
$$= \frac{\sin\frac{(n+1)\theta}2}{\sin\frac\theta2}\,e^{i\frac{n\theta}2}.$$
<p><b>Étape 5 : La partie réelle.</b></p>
$$\cG{\sum_{k=0}^n\cos(k\theta) = \frac{\sin\frac{(n+1)\theta}2}{\sin\frac\theta2}\cos\Big(\frac{n\theta}2\Big)}.$$

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
<p><b>Étape 1 : Rappel.</b> Moivre : $\cos(3\theta) + i\sin(3\theta) = (\cos\theta + i\sin\theta)^3$. On note $c = \cos\theta$, $s = \sin\theta$.</p>
<p><b>Étape 2 : Binôme</b>, ligne $1, 3, 3, 1$ :</p>
$$(c + is)^3 = c^3 + 3c^2(is) + 3c(is)^2 + (is)^3.$$
<p><b>Étape 3 : Les puissances de $i$.</b> $i^2 = -1$, $i^3 = -i$ :</p>
$$= c^3 + 3ic^2s - 3cs^2 - is^3 = \cB{(c^3 - 3cs^2)} + i\cR{(3c^2s - s^3)}.$$
<p><b>Étape 4 : $\cos(3\theta)$</b>, partie réelle, avec $s^2 = 1 - c^2$ :</p>
$$\cos(3\theta) = c^3 - 3c(1 - c^2) = \cG{4\cos^3\theta - 3\cos\theta}.$$
<p><b>Étape 5 : $\sin(3\theta)$</b>, partie imaginaire, avec $c^2 = 1 - s^2$ :</p>
$$\sin(3\theta) = 3(1 - s^2)s - s^3 = \cG{3\sin\theta - 4\sin^3\theta}.$$

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
<p><b>Étape 1 : Rappel.</b> Euler : $\cos x = \frac{e^{ix} + e^{-ix}}2$, et $e^{ikx} + e^{-ikx} = 2\cos(kx)$.</p>
<p><b>Étape 2 : On remplace.</b></p>
$$\cos^3x = \Big(\frac{e^{ix} + e^{-ix}}2\Big)^3 = \frac18\big(e^{ix} + e^{-ix}\big)^3.$$
<p><b>Étape 3 : Binôme</b> (ligne $1, 3, 3, 1$), en ajoutant les exposants :</p>
$$\big(e^{ix} + e^{-ix}\big)^3 = e^{3ix} + 3e^{2ix}e^{-ix} + 3e^{ix}e^{-2ix} + e^{-3ix} = e^{3ix} + 3e^{ix} + 3e^{-ix} + e^{-3ix}.$$
<p><b>Étape 4 : On regroupe</b> les exponentielles opposées :</p>
$$= \cB{\big(e^{3ix} + e^{-3ix}\big)} + 3\cR{\big(e^{ix} + e^{-ix}\big)} = \cB{2\cos3x} + 3\cdot\cR{2\cos x}.$$
<p><b>Étape 5 : On divise par $8$.</b></p>
$$\cG{\cos^3x = \frac14\cos3x + \frac34\cos x}.$$
<p>Application : $\int\cos^3x\,dx = \frac1{12}\sin3x + \frac34\sin x + C$.</p>

<p class="ml">Exemple 2 : $\sin^3x$</p>
<p><b>Étape 1 : Rappel.</b> $\sin x = \frac{e^{ix} - e^{-ix}}{2i}$, et $e^{ikx} - e^{-ikx} = 2i\sin(kx)$.</p>
<p><b>Étape 2 : On remplace</b>, avec $(2i)^3 = 8i^3 = -8i$ :</p>
$$\sin^3x = \frac{\big(e^{ix} - e^{-ix}\big)^3}{-8i}.$$
<p><b>Étape 3 : Binôme</b> avec des signes alternés :</p>
$$\big(e^{ix} - e^{-ix}\big)^3 = e^{3ix} - 3e^{ix} + 3e^{-ix} - e^{-3ix}.$$
<p><b>Étape 4 : On regroupe</b>, en mettant $\cO{-3}$ en facteur pour garder $e^{ix}$ en premier :</p>
$$= \cB{\big(e^{3ix} - e^{-3ix}\big)}\cO{-3}\cR{\big(e^{ix} - e^{-ix}\big)} = \cB{2i\sin3x} - 3\cdot\cR{2i\sin x}.$$
<p><b>Étape 5 : On divise par $-8i$.</b></p>
$$\cG{\sin^3x = \frac34\sin x - \frac14\sin3x}.$$

<p class="ml">Exemple 3 : $\cos^2x\sin^2x$, un produit</p>
<p><b>Étape 1 : Rappel.</b> Pour un produit, on développe <b>complètement</b> les exponentielles avant de regrouper.</p>
<p><b>Étape 2 : On remplace</b>, avec $2^2\cdot(2i)^2 = 4\times(-4) = -16$ :</p>
$$\cos^2x\sin^2x = \frac{(e^{ix} + e^{-ix})^2(e^{ix} - e^{-ix})^2}{-16} = \frac{\big((e^{ix} + e^{-ix})(e^{ix} - e^{-ix})\big)^2}{-16}.$$
<p><b>Étape 3 : Le produit intérieur</b>, identité $(a + b)(a - b) = a^2 - b^2$ :</p>
$$(e^{ix} + e^{-ix})(e^{ix} - e^{-ix}) = e^{2ix} - e^{-2ix}.$$
<p><b>Étape 4 : Le carré.</b></p>
$$\big(e^{2ix} - e^{-2ix}\big)^2 = e^{4ix} - 2 + e^{-4ix} = 2\cos4x - 2.$$
<p><b>Étape 5 : On divise par $-16$.</b></p>
$$\cG{\cos^2x\sin^2x = \frac18 - \frac18\cos4x}.$$
<p>Remarque : plus rapide avec $\cos x\sin x = \frac12\sin2x$, donc $\frac14\sin^22x = \frac14\cdot\frac{1 - \cos4x}2$.</p>

<p class="ml">Exemple 4 : $\cos^3x\sin^3x$</p>
<p><b>Étape 1 : Rappel.</b> $\cos x\sin x = \frac12\sin2x$, et (exemple 2) $\sin^3u = \frac34\sin u - \frac14\sin3u$.</p>
<p><b>Étape 2 : On regroupe en un seul cube.</b></p>
$$\cos^3x\sin^3x = (\cos x\sin x)^3 = \Big(\frac12\sin2x\Big)^3 = \frac18\sin^3(2x).$$
<p><b>Étape 3 : On applique l'exemple 2 avec $u = 2x$.</b></p>
$$\frac18\Big(\frac34\sin2x - \frac14\sin6x\Big).$$
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{\cos^3x\sin^3x = \frac3{32}\sin2x - \frac1{32}\sin6x}.$$

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
<p><b>Étape 1 : Rappel.</b> On cherche $\delta = x + iy$ avec $\delta^2 = \Delta$ : parties réelles, modules ($|\delta|^2 = |\Delta|$), et parties imaginaires pour le signe.</p>
<p><b>Étape 2 : Le module de $\Delta$.</b> $|3 + 4i| = \sqrt{9 + 16} = 5$.</p>
<p><b>Étape 3 : Le système.</b></p>
$$\left\{\begin{aligned}x^2 - y^2 &= 3\\x^2 + y^2 &= 5\\2xy &= 4\end{aligned}\right.$$
<p><b>Étape 4 : On ajoute, puis on soustrait</b> les deux premières lignes :</p>
$$2x^2 = 8\ \Longrightarrow\ x^2 = 4,\qquad2y^2 = 2\ \Longrightarrow\ y^2 = 1.$$
<p><b>Étape 5 : Le signe.</b> $x = \pm2$, $y = \pm1$, et $xy = 2 > 0$ : même signe.</p>
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\delta = 2 + i\ \text{ou}\ \delta = -2 - i}.$$
<p>Contrôle : $(2 + i)^2 = 4 + 4i + i^2 = 3 + 4i$.</p>

<div data-mlab="rac2"></div>

<h2 id="z-eq2">12. Les équations du second degré</h2>
<div class="sbox">$$az^2 + bz + c = 0\ (a\neq0),\quad\Delta = b^2 - 4ac,\quad\delta^2 = \Delta:\qquad z = \frac{-b\pm\delta}{2a}\quad\Big(\text{racine double}\ -\frac b{2a}\ \text{si}\ \Delta = 0\Big).$$</div>
<div class="sbox">$$\text{Somme et produit}:\ z_1 + z_2 = -\frac ba,\qquad z_1z_2 = \frac ca.$$</div>
<p class="ml">Exemple 1 : coefficients réels, $\Delta\lt0$</p>
<p><b>Étape 1 : Rappel.</b> $az^2 + bz + c = 0$ : $\Delta = b^2 - 4ac$, puis $z = \frac{-b\pm\delta}{2a}$ avec $\delta^2 = \Delta$.</p>
$$z^2 - 2z + 5 = 0.$$
<p><b>Étape 2 : Le discriminant.</b> $\Delta = 4 - 20 = -16$.</p>
<p><b>Étape 3 : Une racine carrée.</b> $-16 = (4i)^2$, donc $\delta = 4i$.</p>
<p><b>Étape 4 : Les racines.</b></p>
$$z = \frac{2\pm4i}2 = \cV{1\pm2i}.$$

<p class="ml">Exemple 2 : coefficients complexes</p>
<p><b>Étape 1 : Rappel.</b> $\Delta = b^2 - 4ac$, $\delta^2 = \Delta$, $z = \frac{-b\pm\delta}{2a}$. Contrôle : $z_1 + z_2 = -\frac ba$ et $z_1z_2 = \frac ca$.</p>
$$z^2 - 3z + 3 + i = 0.$$
<p><b>Étape 2 : Le discriminant.</b></p>
$$\Delta = (-3)^2 - 4(3 + i) = 9 - 12 - 4i = -3 - 4i.$$
<p><b>Étape 3 : Une racine carrée de $\Delta$.</b> $|\Delta| = \sqrt{9 + 16} = 5$ :</p>
$$\left\{\begin{aligned}x^2 - y^2 &= -3\\x^2 + y^2 &= 5\\2xy &= -4\end{aligned}\right.\ \Longrightarrow\ x^2 = 1,\ y^2 = 4,\ xy\lt0\ \Longrightarrow\ \delta = 1 - 2i.$$
<p><b>Étape 4 : Les racines.</b></p>
$$z_1 = \frac{3 + (1 - 2i)}2 = \frac{4 - 2i}2 = \cV{2 - i},\qquad z_2 = \frac{3 - (1 - 2i)}2 = \frac{2 + 2i}2 = \cV{1 + i}.$$
<p><b>Étape 5 : Contrôle.</b> $z_1 + z_2 = 3 = -\frac ba$ et $z_1z_2 = (2 - i)(1 + i) = 2 + 2i - i - i^2 = 3 + i = \frac ca$.</p>

<p class="ml">Exemple 3 : avec la somme et le produit</p>
<p><b>Étape 1 : Rappel.</b> $z_1, z_2$ sont les racines de $z^2 - (z_1 + z_2)z + z_1z_2$.</p>
<p><b>Étape 2 : On forme l'équation.</b> Somme $s$ et produit $p$ donnés : $z^2 - sz + p = 0$.</p>
<p><b>Étape 3 : On la résout</b> avec $\Delta = s^2 - 4p$, comme dans les exemples précédents.</p>
<p>Exemple : somme $2$ et produit $5$ donnent $z^2 - 2z + 5 = 0$, donc $\cG{1 + 2i}$ et $\cG{1 - 2i}$.</p>

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
<p><b>Étape 1 : Rappel.</b> On pose $z = \rho e^{i\varphi}$, puis on identifie modules et arguments : $\rho^n = r$, $n\varphi = \theta + 2k\pi$.</p>
<p><b>Étape 2 : Forme exponentielle de $8i$.</b> $8i = 8e^{i\pi/2}$.</p>
<p><b>Étape 3 : On identifie.</b> $z^3 = \rho^3e^{3i\varphi}$ :</p>
$$\left\{\begin{aligned}\rho^3 &= 8\\3\varphi &= \frac\pi2 + 2k\pi\end{aligned}\right.\iff\left\{\begin{aligned}\rho &= 2\\\varphi &= \frac\pi6 + \frac{2k\pi}3,\quad k\in\{0, 1, 2\}\end{aligned}\right.$$
<p><b>Étape 4 : Les trois racines.</b></p>
$$\begin{aligned}k = 0&:\ 2e^{i\pi/6} = 2\Big(\frac{\sqrt3}2 + \frac i2\Big) = \cV{\sqrt3 + i}\\k = 1&:\ 2e^{5i\pi/6} = 2\Big(-\frac{\sqrt3}2 + \frac i2\Big) = \cV{-\sqrt3 + i}\\k = 2&:\ 2e^{3i\pi/2} = \cV{-2i}\end{aligned}$$
<p><b>Étape 5 : Contrôle.</b> La somme vaut $\sqrt3 + i - \sqrt3 + i - 2i = 0$ (triangle équilatéral centré en $0$).</p>

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
<p><b>Étape 1 : Rappel.</b> $A, B, C$ alignés $\iff\frac{c - a}{b - a}\in\mathbb R$, et $(AB)\perp(AC)\iff\frac{c - a}{b - a}\in i\mathbb R$.</p>
<p><b>Étape 2 : Le quotient.</b> Avec $a = 1$, $b = 2 + i$, $c = 2i$ :</p>
$$\frac{c - a}{b - a} = \frac{-1 + 2i}{1 + i}.$$
<p><b>Étape 3 : On multiplie par le conjugué.</b></p>
$$\frac{(-1 + 2i)(1 - i)}{(1 + i)(1 - i)} = \frac{-1 + i + 2i - 2i^2}2 = \frac{1 + 3i}2.$$
<p><b>Étape 4 : Conclusion.</b> Ni réel, ni imaginaire pur : $\cG{\text{ni alignés, ni angle droit en}\ A}$.</p>

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
<p><b>Étape 1 : Rappel.</b> Pour une fonction en escalier, $\int_a^b\varphi = \sum_kc_k(x_{k+1} - x_k)$ : la somme des aires des rectangles.</p>
<p><b>Étape 2 : Les paliers.</b> Sur $[0, 1[$, $\lfloor t\rfloor = 0$ ; sur $[1, 2[$, il vaut $1$ ; sur $[2, 3[$, il vaut $2$.</p>
<p><b>Étape 3 : Les aires.</b> Chaque palier a une largeur $1$ :</p>
$$\int_0^3\lfloor t\rfloor\,dt = 0\times1 + 1\times1 + 2\times1 = \cG3.$$

<h2 id="i-prop">3. Les propriétés de l'intégrale</h2>
<div class="sbox">$$\int_a^b(\lambda f + \mu g) = \lambda\int_a^bf + \mu\int_a^bg,\qquad\int_a^bf = \int_a^cf + \int_c^bf,\qquad f\leqslant g\ \Longrightarrow\ \int_a^bf\leqslant\int_a^bg\quad(a\leqslant b).$$</div>
<div class="sbox">$$\Big|\int_a^bf\Big|\leqslant\int_a^b|f|\leqslant(b - a)\sup_{[a, b]}|f|,\qquad\Big|\int_a^bfg\Big|\leqslant\sup_{[a, b]}|f|\int_a^b|g|.$$</div>
<div class="sbox">$$f\ \textbf{continue},\ f\geqslant0\ \text{et}\ \int_a^bf = 0\ \Longrightarrow\ f = 0\ \text{sur}\ [a, b].$$</div>
<p class="ml piege">Piège</p>
<p>La croissance demande $a\leqslant b$, et le dernier résultat demande que $f$ soit <b>continue</b> : une fonction nulle sauf en un point a une intégrale nulle.</p>
<p class="ml">Exemple : la limite de $I_n = \int_0^1\frac{x^n}{1 + x}\,dx$</p>
<p><b>Étape 1 : Rappel.</b> Si $f\leqslant g$ sur $[a, b]$ avec $a\leqslant b$, alors $\int_a^bf\leqslant\int_a^bg$.</p>
<p><b>Étape 2 : Encadrer la fonction.</b> Pour $x\in[0, 1]$, $1 + x\geqslant1$ et $x^n\geqslant0$ :</p>
$$0\leqslant\frac{x^n}{1 + x}\leqslant\cV{x^n}.$$
<p><b>Étape 3 : Intégrer l'encadrement</b> ($0\leqslant1$) :</p>
$$0\leqslant I_n\leqslant\int_0^1x^n\,dx = \Big[\frac{x^{n+1}}{n + 1}\Big]_0^1 = \frac1{n + 1}.$$
<p><b>Étape 4 : Conclusion</b> par encadrement : $\frac1{n + 1}\to0$, donc $\cG{I_n\to0}$.</p>

<p class="ml">Exemple : l'inégalité de Cauchy-Schwarz</p>
<p><b>Étape 1 : Rappel.</b> Un trinôme $a\lambda^2 + b\lambda + c$ avec $a > 0$, positif pour tout $\lambda$, a un discriminant $\Delta\leqslant0$.</p>
<p><b>Étape 2 : Le polynôme positif.</b> Pour tout réel $\lambda$, $(f + \lambda g)^2\geqslant0$, donc :</p>
$$P(\lambda) = \int_a^b(f + \lambda g)^2 = \lambda^2\int_a^bg^2 + 2\lambda\int_a^bfg + \int_a^bf^2\geqslant0.$$
<p><b>Étape 3 : Le discriminant</b> (si $\int g^2 > 0$) :</p>
$$\Delta = 4\Big(\int_a^bfg\Big)^2 - 4\int_a^bf^2\int_a^bg^2\leqslant0.$$
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{\Big(\int_a^bfg\Big)^2\leqslant\Big(\int_a^bf^2\Big)\Big(\int_a^bg^2\Big)}.$$

<h2 id="i-fond">4. Le théorème fondamental</h2>
<div class="sbox">$$f\ \text{continue sur}\ I,\ a\in I:\qquad F(x) = \int_a^xf(t)\,dt\ \text{est l'unique primitive de}\ f\ \text{qui s'annule en}\ a,\qquad F' = f.$$</div>
<div class="sbox">$$\int_a^bf(t)\,dt = F(b) - F(a)\quad\text{pour toute primitive}\ F\ \text{de}\ f,\qquad\int_a^bf'(t)\,dt = f(b) - f(a)\quad(f\ \text{de classe}\ \mathcal C^1).$$</div>
<p class="ml">Dériver une intégrale dont les bornes bougent</p>
<p>On introduit une primitive $F$ de $f$, on écrit l'intégrale avec $F$, puis on dérive des fonctions composées :</p>
$$G(x) = \int_{u(x)}^{v(x)}f(t)\,dt = F(v(x)) - F(u(x))\ \Longrightarrow\ G'(x) = f(v(x))\,v'(x) - f(u(x))\,u'(x).$$
<p class="ml">Exemple : $G(x) = \int_x^{2x}e^{-t^2}\,dt$</p>
<p><b>Étape 1 : Rappel.</b> Si $F$ est une primitive de $f$ : $\int_{u(x)}^{v(x)}f = F(v(x)) - F(u(x))$, puis on dérive des composées.</p>
<p><b>Étape 2 : Une primitive.</b> $t\mapsto e^{-t^2}$ est continue : elle a une primitive $F$, avec $F' = e^{-t^2}$.</p>
<p><b>Étape 3 : Écrire $G$ avec $F$.</b></p>
$$G(x) = F(2x) - F(x).$$
<p><b>Étape 4 : Dériver.</b> La dérivée de $F(2x)$ est $2F'(2x)$ :</p>
$$G'(x) = \cO2F'(2x) - F'(x) = 2e^{-(2x)^2} - e^{-x^2} = \cG{2e^{-4x^2} - e^{-x^2}}.$$

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
<p><b>Étape 1 : Rappel.</b> Une primitive de $u'u^\alpha$ ($\alpha\neq-1$) est $\frac{u^{\alpha+1}}{\alpha + 1}$.</p>
<p><b>Étape 2 : Repérer $u$.</b> $u = 1 + x^2$, $u' = 2x$, $\alpha = \frac12$. Il manque un facteur $2$ : on l'ajoute.</p>
$$\int_0^1x\sqrt{1 + x^2}\,dx = \frac12\int_0^1\cB{2x}(1 + x^2)^{1/2}\,dx.$$
<p><b>Étape 3 : La primitive.</b></p>
$$= \frac12\Big[\frac{(1 + x^2)^{3/2}}{3/2}\Big]_0^1 = \frac13\Big[(1 + x^2)^{3/2}\Big]_0^1.$$
<p><b>Étape 4 : Les bornes.</b> $(1 + 1)^{3/2} = 2\sqrt2$ et $1^{3/2} = 1$ :</p>
$$= \cG{\frac13\big(2\sqrt2 - 1\big)}.$$

<p class="ml">Exemple 2 : un trinôme sans racine réelle, on passe à la forme canonique</p>
<p><b>Étape 1 : Rappel.</b> $\int\frac{dx}{(x - x_0)^2 + a^2} = \frac1a\arctan\frac{x - x_0}a$.</p>
<p><b>Étape 2 : Pas de racine réelle.</b> $\Delta = 4 - 20\lt0$ : on passe à la forme canonique.</p>
$$x^2 + 2x + 5 = (x + 1)^2 - 1 + 5 = (x + 1)^2 + 2^2.$$
<p><b>Étape 3 : La primitive</b> avec $x_0 = -1$, $a = 2$ :</p>
$$\int_{-1}^1\frac{dx}{(x + 1)^2 + 2^2} = \Big[\frac12\arctan\frac{x + 1}2\Big]_{-1}^1.$$
<p><b>Étape 4 : Les bornes.</b></p>
$$= \frac12\big(\arctan1 - \arctan0\big) = \frac12\cdot\frac\pi4 = \cG{\frac\pi8}.$$

<p class="ml">Exemple 3 : un trinôme avec deux racines, on décompose</p>
<p><b>Étape 1 : Rappel.</b> Avec deux racines, on décompose en éléments simples, puis $\int\frac{dx}{x - a} = \ln|x - a|$.</p>
<p><b>Étape 2 : Factoriser.</b> $x^2 - 1 = (x - 1)(x + 1)$.</p>
<p><b>Étape 3 : Décomposer</b> (cacher et évaluer) :</p>
$$\frac1{(x - 1)(x + 1)} = \frac{1/2}{x - 1} - \frac{1/2}{x + 1}.$$
<p><b>Étape 4 : Intégrer.</b></p>
$$\int_2^3\frac{dx}{x^2 - 1} = \frac12\Big[\ln|x - 1| - \ln|x + 1|\Big]_2^3 = \frac12\Big[\ln\Big|\frac{x - 1}{x + 1}\Big|\Big]_2^3.$$
<p><b>Étape 5 : Les bornes.</b></p>
$$= \frac12\Big(\ln\frac12 - \ln\frac13\Big) = \cG{\frac12\ln\frac32}.$$

<h2 id="i-ipp">6. L'intégration par parties</h2>
<div class="sbox">$$\int_a^b\cB{u(t)}\,\cR{v'(t)}\,dt = \Big[\cB u\,\cR v\Big]_a^b - \int_a^b\cB{u'(t)}\,\cR{v(t)}\,dt\qquad(u, v\ \text{de classe}\ \mathcal C^1\ \text{sur}\ [a, b]).$$</div>
<p class="ml">Quoi dériver, quoi intégrer</p>
<ul>
<li><b>On dérive</b> ce qui se simplifie en dérivant : $\cB{\ln}$, $\cB{\arctan}$, $\cB{\arcsin}$, un $\cB{\text{polynôme}}$.</li>
<li><b>On intègre</b> ce qui ne se complique pas : $\cR{e^{at}}$, $\cR{\cos}$, $\cR{\sin}$, $\cR{t^n}$ (quand il y a un $\ln$).</li>
<li>Toujours écrire les quatre fonctions avant de calculer : $u, u', v', v$.</li>
</ul>
<p class="ml">Exemple 1 : $\int_0^1t\,e^t\,dt$</p>
<p><b>Étape 1 : Rappel.</b> $\int_a^buv' = [uv]_a^b - \int_a^bu'v$. On dérive le polynôme, on intègre l'exponentielle.</p>
<p><b>Étape 2 : Les quatre fonctions.</b></p>
$$\left\{\begin{aligned}\cB{u(t)} &= \cB t & \cB{u'(t)} &= \cB1\\\cR{v'(t)} &= \cR{e^t} & \cR{v(t)} &= \cR{e^t}\end{aligned}\right.$$
<p><b>Étape 3 : La formule.</b></p>
$$\int_0^1t\,e^t\,dt = \Big[\cB t\,\cR{e^t}\Big]_0^1 - \int_0^1\cB1\cdot\cR{e^t}\,dt.$$
<p><b>Étape 4 : Le crochet</b> : $1\cdot e - 0 = e$. <b>L'intégrale restante</b> : $[e^t]_0^1 = e - 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $e - (e - 1) = \cG1$.</p>

<p class="ml">Exemple 2 : $\int_1^e\ln t\,dt$, avec un « 1 » caché</p>
<p><b>Étape 1 : Rappel.</b> $\int_a^buv' = [uv]_a^b - \int_a^bu'v$. Pour $\int\ln$, on écrit $\ln t = 1\times\ln t$.</p>
<p><b>Étape 2 : Les quatre fonctions.</b></p>
$$\left\{\begin{aligned}\cB{u(t)} &= \cB{\ln t} & \cB{u'(t)} &= \cB{\tfrac1t}\\\cR{v'(t)} &= \cR1 & \cR{v(t)} &= \cR t\end{aligned}\right.$$
<p><b>Étape 3 : La formule.</b></p>
$$\int_1^e\ln t\,dt = \Big[\cR t\,\cB{\ln t}\Big]_1^e - \int_1^e\cB{\frac1t}\cdot\cR t\,dt.$$
<p><b>Étape 4 : Les calculs.</b> Crochet : $e\ln e - 1\ln1 = e$. Intégrale restante : $\int_1^e1\,dt = e - 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $e - (e - 1) = \cG1$. Une primitive de $\ln$ est $t\ln t - t$.</p>

<p class="ml">Exemple 3 : $\int_0^1\arctan t\,dt$</p>
<p><b>Étape 1 : Rappel.</b> IPP avec $v' = 1$ : on dérive $\arctan$, qui devient une fraction.</p>
<p><b>Étape 2 : Les quatre fonctions.</b></p>
$$\left\{\begin{aligned}\cB u &= \cB{\arctan t} & \cB{u'} &= \cB{\tfrac1{1 + t^2}}\\\cR{v'} &= \cR1 & \cR v &= \cR t\end{aligned}\right.$$
<p><b>Étape 3 : La formule.</b></p>
$$\int_0^1\arctan t\,dt = \big[t\arctan t\big]_0^1 - \int_0^1\frac t{1 + t^2}\,dt.$$
<p><b>Étape 4 : Le crochet.</b> $1\times\arctan1 - 0 = \frac\pi4$.</p>
<p><b>Étape 5 : L'intégrale restante</b> : forme $\frac12\cdot\frac{u'}u$ avec $u = 1 + t^2$ :</p>
$$\int_0^1\frac t{1 + t^2}\,dt = \frac12\big[\ln(1 + t^2)\big]_0^1 = \frac{\ln2}2.$$
<p><b>Étape 6 : Conclusion.</b> $\cG{\int_0^1\arctan t\,dt = \frac\pi4 - \frac{\ln2}2}$.</p>

<p class="ml">Exemple 4 : deux IPP qui reviennent au départ</p>
<p><b>Étape 1 : Rappel.</b> Avec $e^t$ et $\cos$, deux IPP dans le même sens font réapparaître l'intégrale de départ : on obtient une équation en $I$.</p>
$$I = \int_0^\pi e^t\cos t\,dt.$$
<p><b>Étape 2 : Première IPP</b> ($u = \cos t$, $v' = e^t$) :</p>
$$I = \big[e^t\cos t\big]_0^\pi + \int_0^\pi e^t\sin t\,dt = (-e^\pi - 1) + \int_0^\pi e^t\sin t\,dt.$$
<p><b>Étape 3 : Deuxième IPP</b> ($u = \sin t$, $v' = e^t$) :</p>
$$\int_0^\pi e^t\sin t\,dt = \big[e^t\sin t\big]_0^\pi - \int_0^\pi e^t\cos t\,dt = 0 - I.$$
<p><b>Étape 4 : L'équation.</b></p>
$$I = -e^\pi - 1 - I\iff2I = -e^\pi - 1.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{I = -\frac{e^\pi + 1}2}$.</p>

<p class="ml">Exemple 5 : une relation de récurrence (intégrales de Wallis)</p>
<p><b>Étape 1 : Rappel.</b> $W_n = \int_0^{\pi/2}\sin^nt\,dt$. On fait une IPP qui garde un $\sin t$ à intégrer, puis $\cos^2 = 1 - \sin^2$.</p>
<p><b>Étape 2 : On écrit $\sin^{n+2} = \sin^{n+1}\cdot\sin$</b> :</p>
$$\left\{\begin{aligned}\cB u &= \cB{\sin^{n+1}t} & \cB{u'} &= \cB{(n + 1)\cos t\sin^nt}\\\cR{v'} &= \cR{\sin t} & \cR v &= \cR{-\cos t}\end{aligned}\right.$$
<p><b>Étape 3 : L'IPP.</b> Le crochet est nul ($\cos\frac\pi2 = 0$ et $\sin0 = 0$) :</p>
$$W_{n+2} = \big[-\cos t\sin^{n+1}t\big]_0^{\pi/2} + (n + 1)\int_0^{\pi/2}\cos^2t\,\sin^nt\,dt.$$
<p><b>Étape 4 : $\cos^2 = 1 - \sin^2$.</b></p>
$$W_{n+2} = (n + 1)\int_0^{\pi/2}(1 - \sin^2t)\sin^nt\,dt = (n + 1)(W_n - W_{n+2}).$$
<p><b>Étape 5 : On isole $W_{n+2}$.</b></p>
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
<p><b>Étape 1 : Rappel.</b> Changement de variable : poser $x = \varphi(t)$, calculer $dx$, changer les bornes, remplacer tous les $x$.</p>
<p><b>Étape 2 : On pose $\cO{x = \sin t}$</b>, $t\in\big[0, \frac\pi2\big]$ : $\cO{dx = \cos t\,dt}$.</p>
<p><b>Étape 3 : Les bornes.</b> $x = 0\iff t = \cO0$ ; $x = 1\iff t = \cO{\frac\pi2}$.</p>
<p><b>Étape 4 : La racine.</b> $\sqrt{1 - \sin^2t} = |\cos t| = \cos t$ car $\cos t\geqslant0$ sur $\big[0, \frac\pi2\big]$.</p>
<p><b>Étape 5 : On remplace.</b></p>
$$\int_0^1\sqrt{1 - x^2}\,dx = \int_0^{\pi/2}\cos t\cdot\cos t\,dt = \int_0^{\pi/2}\cos^2t\,dt.$$
<p><b>Étape 6 : Linéariser et intégrer.</b> $\cos^2t = \frac{1 + \cos2t}2$ :</p>
$$= \Big[\frac t2 + \frac{\sin2t}4\Big]_0^{\pi/2} = \frac\pi4 + 0 = \cG{\frac\pi4}.$$
<p>C'est l'aire d'un quart de disque de rayon $1$.</p>

<p class="ml">Exemple 2 : $\int_0^1\frac{dx}{1 + e^x}$ avec $t = e^x$</p>
<p><b>Étape 1 : Rappel.</b> Poser $t = \psi(x)$, exprimer $x$ et $dx$, changer les bornes, remplacer tous les $x$.</p>
<p><b>Étape 2 : On pose $\cO{t = e^x}$</b> : $x = \ln t$ et $\cO{dx = \frac{dt}t}$.</p>
<p><b>Étape 3 : Les bornes.</b> $x = 0\mapsto t = \cO1$ et $x = 1\mapsto t = \cO e$.</p>
<p><b>Étape 4 : On remplace.</b></p>
$$\int_0^1\frac{dx}{1 + e^x} = \int_1^e\frac1{1 + t}\cdot\frac{dt}t = \int_1^e\frac{dt}{t(1 + t)}.$$
<p><b>Étape 5 : Décomposer.</b> $\frac1{t(1 + t)} = \frac1t - \frac1{1 + t}$.</p>
<p><b>Étape 6 : Intégrer.</b></p>
$$\big[\ln t - \ln(1 + t)\big]_1^e = (1 - \ln(1 + e)) - (0 - \ln2) = \cG{1 - \ln(1 + e) + \ln2}.$$

<p class="ml">Exemple 3 : symétries (sans calcul)</p>
<p><b>Étape 1 : Rappel.</b> Un changement de variable simple ($x = -t$, $x = t + T$, $t = \frac\pi2 - u$) montre ces égalités sans rien calculer.</p>
<p><b>Étape 2 : Fonction impaire.</b> Avec $x = -t$ : $\int_{-a}^0f = -\int_0^af$, donc $\int_{-a}^af = 0$. Paire : $\int_{-a}^af = 2\int_0^af$.</p>
<p><b>Étape 3 : Fonction $T$-périodique.</b> $\int_a^{a+T}f = \int_0^Tf$ pour tout $a$.</p>
<p><b>Étape 4 : $\sin$ et $\cos$.</b> Avec $t = \frac\pi2 - u$ : $\int_0^{\pi/2}f(\sin t)\,dt = \int_0^{\pi/2}f(\cos u)\,du$.</p>

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
<p><b>Étape 1 : Rappel.</b> Bioche : si $g(x) = f(x)\,dx$ est invariant par $x\mapsto-x$, on pose $t = \cos x$.</p>
<p><b>Étape 2 : Le test.</b> $g(-x) = \frac{d(-x)}{\sin(-x)} = \frac{-dx}{-\sin x} = g(x)$ : on pose $\cO{t = \cos x}$, $dt = -\sin x\,dx$.</p>
<p><b>Étape 3 : Faire apparaître $\sin x\,dx$</b> (on multiplie en haut et en bas par $\sin x$) :</p>
$$\int\frac{dx}{\sin x} = \int\frac{\sin x\,dx}{\sin^2x} = \int\frac{\sin x\,dx}{1 - \cos^2x} = \int\frac{-dt}{1 - t^2}.$$
<p><b>Étape 4 : Décomposer.</b> $\frac1{1 - t^2} = \frac12\Big(\frac1{1 - t} + \frac1{1 + t}\Big)$ :</p>
$$-\frac12\int\Big(\frac1{1 - t} + \frac1{1 + t}\Big)dt = -\frac12\ln\Big|\frac{1 + t}{1 - t}\Big|.$$
<p><b>Étape 5 : On revient à $x$.</b></p>
$$= \frac12\ln\Big(\frac{1 - \cos x}{1 + \cos x}\Big) = \cG{\ln\Big|\tan\frac x2\Big|}.$$

<p class="ml">Exemple 2 : $\int_0^{\pi/2}\frac{\cos x}{1 + \sin^2x}\,dx$</p>
<p><b>Étape 1 : Rappel.</b> Bioche : invariant par $x\mapsto\pi - x$, on pose $t = \sin x$.</p>
<p><b>Étape 2 : Le test.</b> $\cos(\pi - x) = -\cos x$ et $d(\pi - x) = -dx$ : les deux signes s'annulent, $g(\pi - x) = g(x)$.</p>
<p><b>Étape 3 : On pose $\cO{t = \sin x}$</b> : $dt = \cos x\,dx$, bornes $\cO0$ et $\cO1$.</p>
<p><b>Étape 4 : On remplace et on intègre.</b></p>
$$\int_0^{\pi/2}\frac{\cos x\,dx}{1 + \sin^2x} = \int_0^1\frac{dt}{1 + t^2} = \big[\arctan t\big]_0^1 = \cG{\frac\pi4}.$$

<p class="ml">Exemple 3 : $\int_0^{\pi/4}\frac{dx}{1 + \cos^2x}$</p>
<p><b>Étape 1 : Rappel.</b> Bioche : invariant par $x\mapsto\pi + x$, on pose $t = \tan x$, avec $dt = (1 + t^2)\,dx$ et $\cos^2x = \frac1{1 + t^2}$.</p>
<p><b>Étape 2 : Le test.</b> $g(-x)\neq g(x)$ (le $dx$ change de signe), mais $\cos^2(\pi + x) = \cos^2x$ : $g(\pi + x) = g(x)$.</p>
<p><b>Étape 3 : On pose $\cO{t = \tan x}$</b>, bornes $\cO0$ et $\cO1$.</p>
$$1 + \cos^2x = 1 + \frac1{1 + t^2} = \frac{2 + t^2}{1 + t^2},\qquad dx = \frac{dt}{1 + t^2}.$$
<p><b>Étape 4 : On remplace.</b></p>
$$\int_0^{\pi/4}\frac{dx}{1 + \cos^2x} = \int_0^1\frac{1 + t^2}{2 + t^2}\cdot\frac{dt}{1 + t^2} = \int_0^1\frac{dt}{t^2 + (\sqrt2)^2}.$$
<p><b>Étape 5 : La primitive en $\arctan$.</b></p>
$$= \Big[\frac1{\sqrt2}\arctan\frac t{\sqrt2}\Big]_0^1 = \cG{\frac1{\sqrt2}\arctan\frac1{\sqrt2}}.$$

<p class="ml">Exemple 4 : aucune règle, $t = \tan\frac x2$</p>
<p><b>Étape 1 : Rappel.</b> Si aucune règle de Bioche ne marche : $t = \tan\frac x2$, $\cos x = \frac{1 - t^2}{1 + t^2}$, $dx = \frac{2\,dt}{1 + t^2}$.</p>
<p><b>Étape 2 : Les tests échouent.</b> $x\mapsto-x$, $\pi - x$ et $\pi + x$ changent tous $2 + \cos x$ ou le $dx$.</p>
<p><b>Étape 3 : On pose $\cO{t = \tan\frac x2}$</b> : bornes $\cO0$ et $\cO{\tan\frac\pi4 = 1}$.</p>
<p><b>Étape 4 : Le dénominateur.</b></p>
$$2 + \cos x = \frac{2(1 + t^2) + 1 - t^2}{1 + t^2} = \frac{3 + t^2}{1 + t^2}.$$
<p><b>Étape 5 : On remplace.</b></p>
$$\int_0^{\pi/2}\frac{dx}{2 + \cos x} = \int_0^1\frac{1 + t^2}{3 + t^2}\cdot\frac{2\,dt}{1 + t^2} = \int_0^1\frac{2\,dt}{t^2 + (\sqrt3)^2}.$$
<p><b>Étape 6 : La primitive.</b></p>
$$= \Big[\frac2{\sqrt3}\arctan\frac t{\sqrt3}\Big]_0^1 = \frac2{\sqrt3}\cdot\frac\pi6 = \cG{\frac\pi{3\sqrt3}}.$$

<h2 id="i-riemann">9. Les sommes de Riemann</h2>
<div class="sbox">$$f\in\mathcal C_{pm}([a, b]):\qquad\frac{b - a}n\sum_{k=0}^{n-1}f\Big(a + k\,\frac{b - a}n\Big)\xrightarrow[n\to+\infty]{}\int_a^bf.\qquad\text{Sur}\ [0, 1]:\ \frac1n\sum_{k=1}^nf\Big(\frac kn\Big)\to\int_0^1f.$$</div>
<p class="ml">Reconnaître une somme de Riemann</p>
<ol>
<li>Sortir un facteur $\frac1n$.</li>
<li>Écrire le reste <b>uniquement avec $\frac kn$</b> : c'est $f\big(\frac kn\big)$.</li>
<li>Vérifier les bornes de $k$ ($0$ à $n - 1$, ou $1$ à $n$ : même limite).</li>
</ol>
<p class="ml">Exemple 1 : $S_n = \sum_{k=1}^n\frac n{n^2 + k^2}$</p>
<p><b>Étape 1 : Rappel.</b> $\frac1n\sum_{k=1}^nf\big(\frac kn\big)\to\int_0^1f$ (somme de Riemann).</p>
<p><b>Étape 2 : Factoriser le dénominateur par $n^2$.</b></p>
$$\frac n{n^2 + k^2} = \frac n{n^2\big(1 + (k/n)^2\big)} = \cO{\frac1n}\cdot\frac1{1 + (k/n)^2}.$$
<p><b>Étape 3 : Reconnaître $f$.</b> $S_n = \frac1n\sum_{k=1}^nf\big(\frac kn\big)$ avec $f(x) = \frac1{1 + x^2}$, continue sur $[0, 1]$.</p>
<p><b>Étape 4 : La limite.</b></p>
$$S_n\to\int_0^1\frac{dx}{1 + x^2} = \big[\arctan x\big]_0^1 = \cG{\frac\pi4}.$$

<p class="ml">Exemple 2 : $T_n = \sum_{k=1}^n\frac1{n + k}$</p>
<p><b>Étape 1 : Rappel.</b> $\frac1n\sum_{k=1}^nf\big(\frac kn\big)\to\int_0^1f$.</p>
<p><b>Étape 2 : Factoriser par $n$.</b></p>
$$\frac1{n + k} = \frac1n\cdot\frac1{1 + k/n}.$$
<p><b>Étape 3 : Reconnaître $f$.</b> $f(x) = \frac1{1 + x}$, continue sur $[0, 1]$.</p>
<p><b>Étape 4 : La limite.</b></p>
$$T_n\to\int_0^1\frac{dx}{1 + x} = \big[\ln(1 + x)\big]_0^1 = \cG{\ln2}.$$

<p class="ml">Exemple 3 : un produit, on passe au $\ln$</p>
<p><b>Étape 1 : Rappel.</b> Pour un produit, on passe au $\ln$ pour obtenir une somme : $\ln\prod = \sum\ln$.</p>
<p><b>Étape 2 : Le logarithme.</b></p>
$$\ln P_n = \frac1n\sum_{k=1}^n\ln\Big(1 + \frac kn\Big).$$
<p><b>Étape 3 : Somme de Riemann</b> de $f(x) = \ln(1 + x)$ :</p>
$$\ln P_n\to\int_0^1\ln(1 + x)\,dx.$$
<p><b>Étape 4 : L'intégrale</b>, avec la primitive $(1 + x)\ln(1 + x) - x$ (IPP) :</p>
$$\big[(1 + x)\ln(1 + x) - x\big]_0^1 = 2\ln2 - 1.$$
<p><b>Étape 5 : On revient avec l'exponentielle.</b></p>
$$P_n\to e^{2\ln2 - 1} = \cG{\frac4e}.$$

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
<p><b>Étape 1 : Rappel.</b> Reste intégral : $f(x) = \sum_{k=0}^n\frac{f^{(k)}(0)}{k!}x^k + \int_0^x\frac{(x - t)^n}{n!}f^{(n+1)}(t)\,dt$.</p>
<p><b>Étape 2 : On applique à $\exp$, ordre $2$.</b> Toutes les dérivées valent $\exp$, et $e^0 = 1$ :</p>
$$e^x = 1 + x + \frac{x^2}2 + \int_0^x\frac{(x - t)^2}2\,e^t\,dt.$$
<p><b>Étape 3 : Le signe du reste.</b> Pour $0\leqslant t\leqslant x$ : $(x - t)^2\geqslant0$ et $e^t > 0$, et les bornes sont dans l'ordre. L'intégrale est positive.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{e^x\geqslant1 + x + \frac{x^2}2}$ pour $x\geqslant0$.</p>

<p class="ml">Exemple 2 : une majoration ($|\sin x - x|\leqslant\frac{|x|^3}6$)</p>
<p><b>Étape 1 : Rappel.</b> Taylor-Lagrange : $\big|f(x) - T_n(x)\big|\leqslant\frac{|x|^{n+1}}{(n + 1)!}\sup|f^{(n+1)}|$.</p>
<p><b>Étape 2 : Le polynôme de Taylor de $\sin$ à l'ordre $2$.</b> $\sin0 = 0$, $\sin'0 = 1$, $\sin''0 = 0$ : $T_2(x) = x$.</p>
<p><b>Étape 3 : La dérivée troisième.</b> $\sin''' = -\cos$, donc $|\sin'''|\leqslant\cV1$.</p>
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{|\sin x - x|\leqslant\frac{|x|^3}{3!} = \frac{|x|^3}6}.$$

<p class="ml">Exemple 3 : $e = \sum_{k=0}^{+\infty}\frac1{k!}$</p>
<p><b>Étape 1 : Rappel.</b> Taylor-Lagrange entre $0$ et $1$ : $\big|f(1) - \sum_{k=0}^n\frac{f^{(k)}(0)}{k!}\big|\leqslant\frac{1}{(n + 1)!}\sup_{[0, 1]}|f^{(n+1)}|$.</p>
<p><b>Étape 2 : Avec $f = \exp$.</b> $f^{(k)}(0) = 1$ et $\sup_{[0, 1]}e^t = e$ :</p>
$$\Big|e - \sum_{k=0}^n\frac1{k!}\Big|\leqslant\frac{\cV e}{(n + 1)!}.$$
<p><b>Étape 3 : La limite.</b> $\frac e{(n + 1)!}\to0$, donc $\cG{\sum_{k=0}^n\frac1{k!}\to e}$.</p>

<h2 id="i-cplx">11. Intégrer une fonction à valeurs complexes</h2>
<div class="sbox">$$\int_a^bf = \int_a^b\operatorname{Re}f + i\int_a^b\operatorname{Im}f,\qquad\int_a^be^{\lambda t}\,dt = \Big[\frac{e^{\lambda t}}\lambda\Big]_a^b\quad(\lambda\in\mathbb C^*).$$</div>
<p>Linéarité, Chasles, IPP, changement de variable et $\big|\int f\big|\leqslant\int|f|$ restent vrais. La positivité et la croissance n'ont pas de sens.</p>
<p class="ml">Exemple : $\int_0^\pi e^t\cos t\,dt$ en une ligne</p>
<p><b>Étape 1 : Rappel.</b> $e^t\cos t = \operatorname{Re}\big(e^{(1 + i)t}\big)$, et $\int e^{\lambda t}\,dt = \frac{e^{\lambda t}}\lambda$ pour $\lambda\in\mathbb C^*$.</p>
<p><b>Étape 2 : On passe en complexe.</b></p>
$$\int_0^\pi e^t\cos t\,dt = \operatorname{Re}\int_0^\pi e^{(1 + i)t}\,dt = \operatorname{Re}\Big[\frac{e^{(1 + i)t}}{1 + i}\Big]_0^\pi.$$
<p><b>Étape 3 : Les bornes.</b> $e^{(1 + i)\pi} = e^\pi e^{i\pi} = -e^\pi$ :</p>
$$\frac{-e^\pi - 1}{1 + i} = \frac{-(e^\pi + 1)(1 - i)}2.$$
<p><b>Étape 4 : La partie réelle.</b> $\cG{-\frac{e^\pi + 1}2}$, comme avec les deux IPP.</p>

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
<p><b>Étape 1 : Rappel.</b> $\ln(1 + x)\leqslant x$ pour $x > -1$, et une somme télescopique se simplifie : $\sum_{k=1}^n(x_{k+1} - x_k) = x_{n+1} - x_1$.</p>
<p><b>Étape 2 : Minorer le terme.</b> Avec $x = \frac1k$ :</p>
$$\frac1k\geqslant\ln\Big(1 + \frac1k\Big) = \ln(k + 1) - \ln k.$$
<p><b>Étape 3 : Sommer de $k = 1$ à $n$.</b> Ça télescope :</p>
$$H_n = \sum_{k=1}^n\frac1k\geqslant\ln(n + 1) - \ln1 = \ln(n + 1).$$
<p><b>Étape 4 : Conclusion.</b> $\ln(n + 1)\to+\infty$, donc $H_n\to+\infty$ : $\cG{\sum\frac1n\ \text{diverge}}$.</p>

<p class="ml">Exemple : $u_n = \cos\frac1n$</p>
<p><b>Étape 1 : Rappel.</b> Si $u_n\not\to0$, la série diverge grossièrement.</p>
<p><b>Étape 2 : La limite du terme.</b> $\frac1n\to0$ et $\cos$ est continue en $0$ : $\cos\frac1n\to\cos0 = 1$.</p>
<p><b>Étape 3 : Conclusion.</b> $1\neq0$ : $\cG{\sum u_n\ \text{diverge grossièrement}}$.</p>

<h2 id="s-ref">3. Les séries de référence</h2>
<div class="sbox">$$\textbf{Géométrique}:\ \sum q^n\ \text{CV}\iff|q|\lt1,\qquad\sum_{n=0}^{+\infty}q^n = \frac1{1 - q},\qquad\sum_{n=n_0}^{+\infty}q^n = \frac{q^{n_0}}{1 - q}.$$</div>
<div class="sbox">$$\textbf{Riemann}:\ \sum_{n\geqslant1}\frac1{n^\alpha}\ \text{CV}\iff\alpha > 1.\qquad\textbf{Exponentielle}:\ \sum_{n=0}^{+\infty}\frac{x^n}{n!} = e^x\ \text{pour tout}\ x\in\mathbb R.$$</div>
<div class="sbox">$$\textbf{Télescopique}:\ \sum(u_{n+1} - u_n)\ \text{CV}\iff(u_n)\ \text{converge, et alors}\ \sum_{n=0}^{+\infty}(u_{n+1} - u_n) = \lim u_n - u_0.$$</div>
<p class="ml">Exemple 1 : une géométrique qui ne commence pas à 0</p>
<p><b>Étape 1 : Rappel.</b> Pour $|q|\lt1$ : $\sum_{n=n_0}^{+\infty}q^n = \frac{q^{n_0}}{1 - q}$ (premier terme sur $1 - q$).</p>
<p><b>Étape 2 : Les ingrédients.</b> $q = \frac13$, $|q|\lt1$ : la série converge. Premier terme : $\big(\frac13\big)^2 = \frac19$.</p>
<p><b>Étape 3 : La somme.</b></p>
$$\sum_{n=2}^{+\infty}\frac1{3^n} = \frac{1/9}{1 - 1/3} = \frac{1/9}{2/3} = \cV{\frac16}.$$

<p class="ml">Exemple 2 : une télescopique</p>
<p><b>Étape 1 : Rappel.</b> $\sum(x_{n-1} - x_n)$ converge si et seulement si $(x_n)$ converge, et la somme est $x_{n_0-1} - \lim x_n$.</p>
<p><b>Étape 2 : Décomposer.</b> $\frac1{n(n - 1)} = \frac1{n - 1} - \frac1n$ pour $n\geqslant2$.</p>
<p><b>Étape 3 : La somme partielle.</b></p>
$$S_N = \sum_{n=2}^N\Big(\frac1{n - 1} - \frac1n\Big) = 1 - \cR{\frac12} + \cR{\frac12} - \cdots - \frac1N = 1 - \frac1N.$$
<p><b>Étape 4 : La limite.</b> $S_N\to\cV1$ : la série converge et sa somme vaut $1$.</p>

<p class="ml">Exemple 3 : une télescopique qui diverge</p>
<p><b>Étape 1 : Rappel.</b> Une série télescopique a la nature de la suite qui télescope.</p>
<p><b>Étape 2 : Transformer le terme.</b> $\ln\big(1 + \frac1n\big) = \ln(n + 1) - \ln n$.</p>
<p><b>Étape 3 : La somme partielle.</b> $S_N = \ln(N + 1) - \ln1 = \ln(N + 1)$.</p>
<p><b>Étape 4 : Conclusion.</b> $S_N\to+\infty$ : $\cG{\text{DV}}$.</p>

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
<p><b>Étape 1 : Rappel.</b> Termes positifs : $u_n\sim v_n$ donne la même nature. Riemann : $\sum\frac1{n^\alpha}$ CV $\iff\alpha > 1$.</p>
<p><b>Étape 2 : Signe.</b> $\cB{u_n = \frac{n + 3}{n^3 + 1}}\geqslant0$.</p>
<p><b>Étape 3 : Équivalent.</b> On garde les termes dominants en haut et en bas :</p>
$$u_n\sim\frac n{n^3} = \cO{\frac1{n^2}}.$$
<p><b>Étape 4 : Conclusion.</b> Riemann avec $\alpha = 2 > 1$ : $\cG{\text{CV}}$.</p>

<p class="ml">Exemple 2 : un développement limité</p>
<p><b>Étape 1 : Rappel.</b> $\cos x = 1 - \frac{x^2}2 + o(x^2)$ en $0$, puis comparaison à Riemann.</p>
<p><b>Étape 2 : Signe.</b> $\cB{u_n = 1 - \cos\frac1n}\geqslant0$ car $\cos\leqslant1$.</p>
<p><b>Étape 3 : DL avec $x = \frac1n\to0$.</b></p>
$$u_n = 1 - \Big(1 - \frac1{2n^2} + o\Big(\frac1{n^2}\Big)\Big) = \frac1{2n^2} + o\Big(\frac1{n^2}\Big)\sim\cO{\frac1{2n^2}}.$$
<p><b>Étape 4 : Conclusion.</b> Riemann $\alpha = 2$ : $\cG{\text{CV}}$.</p>

<p class="ml">Exemple 3 : un équivalent qui donne la divergence</p>
<p><b>Étape 1 : Rappel.</b> $\sin x\sim x$ en $0$, et $\sum\frac1n$ diverge.</p>
<p><b>Étape 2 : Signe.</b> $\frac1n\in\left]0, \pi\right]$, donc $\cB{u_n = \sin\frac1n}\geqslant0$.</p>
<p><b>Étape 3 : Équivalent.</b> $u_n\sim\cO{\frac1n}$.</p>
<p><b>Étape 4 : Conclusion.</b> Riemann $\alpha = 1$ : $\cG{\text{DV}}$.</p>

<p class="ml">Exemple 4 : la règle « $n^\alpha u_n$ »</p>
<p><b>Étape 1 : Rappel.</b> Si $n^\alpha u_n\to0$ avec $\alpha > 1$, alors $u_n = o\big(\frac1{n^\alpha}\big)$ et $\sum u_n$ converge (termes positifs).</p>
<p><b>Étape 2 : Premier exemple, $\cB{u_n = \frac{\ln n}{n^2}}$.</b> On choisit $\alpha = \frac32$, entre $1$ et $2$ :</p>
$$n^{3/2}u_n = \frac{\ln n}{\sqrt n}\to0\ \Longrightarrow\ u_n = o\Big(\cO{\frac1{n^{3/2}}}\Big):\ \cG{\text{CV}}.$$
<p><b>Étape 3 : Second exemple, $\cB{u_n = e^{-\sqrt n}}$.</b> On choisit $\alpha = 2$ et on pose $m = \sqrt n$ :</p>
$$n^2u_n = m^4e^{-m}\xrightarrow[m\to+\infty]{}0\ \Longrightarrow\ u_n = o\Big(\cO{\frac1{n^2}}\Big):\ \cG{\text{CV}}.$$

<h2 id="s-int">5. La comparaison série-intégrale</h2>
<p>$f$ continue, <b>positive et décroissante</b> sur $[n_0, +\infty[$. Pour $k\geqslant n_0 + 1$ :</p>
<div class="sbox">$$\int_k^{k+1}f(t)\,dt\leqslant f(k)\leqslant\int_{k-1}^kf(t)\,dt.$$</div>
<p>La première inégalité vient de $f(t)\leqslant f(k)$ pour $t\in[k, k + 1]$, et la seconde de $f(k)\leqslant f(t)$ pour $t\in[k - 1, k]$. Sur un dessin, ce sont des rectangles de largeur $1$ sous la courbe et au-dessus.</p>
<p class="ml">Exemple 1 : un équivalent de $H_n = \sum_{k=1}^n\frac1k$</p>
<p><b>Étape 1 : Rappel.</b> $f$ décroissante : $\int_k^{k+1}f\leqslant f(k)\leqslant\int_{k-1}^kf$.</p>
<p><b>Étape 2 : Minorer $H_n$</b> avec $f(t) = \frac1t$ :</p>
$$H_n\geqslant\sum_{k=1}^n\int_k^{k+1}\frac{dt}t = \int_1^{n+1}\frac{dt}t = \ln(n + 1).$$
<p><b>Étape 3 : Majorer $H_n$</b> (on garde le terme $k = 1$ à part) :</p>
$$H_n\leqslant1 + \sum_{k=2}^n\int_{k-1}^k\frac{dt}t = 1 + \ln n.$$
<p><b>Étape 4 : Diviser par $\ln n$.</b></p>
$$\frac{\ln(n + 1)}{\ln n}\leqslant\frac{H_n}{\ln n}\leqslant\frac1{\ln n} + 1,$$
<p>et les deux bornes tendent vers $1$ : $\cG{H_n\sim\ln n}$.</p>

<p class="ml">Exemple 2 : $\sum\frac1{n\ln n}$ (série de Bertrand, <span class="hp">hors programme</span> comme résultat)</p>
<p><b>Étape 1 : Rappel.</b> $f$ décroissante et positive : $f(k)\geqslant\int_k^{k+1}f$.</p>
<p><b>Étape 2 : La fonction.</b> $f(t) = \frac1{t\ln t}$ est positive et décroissante sur $[2, +\infty[$ (le dénominateur croît).</p>
<p><b>Étape 3 : Minorer.</b> Une primitive est $\ln(\ln t)$ (forme $\frac{u'}u$ avec $u = \ln t$) :</p>
$$\sum_{k=2}^n\frac1{k\ln k}\geqslant\int_2^{n+1}\frac{dt}{t\ln t} = \ln\ln(n + 1) - \ln\ln2.$$
<p><b>Étape 4 : Conclusion.</b> Le minorant tend vers $+\infty$ : $\cG{\text{DV}}$.</p>

<h2 id="s-abs">6. L'absolue convergence (termes de signe quelconque)</h2>
<div class="sbox">$$\sum|u_n|\ \text{converge}\ \Longrightarrow\ \sum u_n\ \text{converge, et}\ \Big|\sum_{n=0}^{+\infty}u_n\Big|\leqslant\sum_{n=0}^{+\infty}|u_n|.$$</div>
<p>Valable aussi pour des complexes. On étudie $\sum|u_n|$ avec les outils des termes positifs.</p>
<p class="ml">Exemple 1</p>
<p><b>Étape 1 : Rappel.</b> $\sum|u_n|$ converge $\Rightarrow\sum u_n$ converge.</p>
<p><b>Étape 2 : Majorer $|u_n|$.</b> $|\sin n|\leqslant1$ :</p>
$$|u_n| = \frac{|\sin n|}{n^2}\leqslant\cO{\frac1{n^2}}.$$
<p><b>Étape 3 : Conclusion.</b> Riemann $\alpha = 2$ : $\sum|u_n|$ converge, donc $\cG{\sum\frac{\sin n}{n^2}\ \text{CV}}$.</p>

<p class="ml">Exemple 2 : une série complexe</p>
<p><b>Étape 1 : Rappel.</b> Série géométrique complexe : converge si $|q|\lt1$, de somme $\frac1{1 - q}$.</p>
<p><b>Étape 2 : Le module de la raison.</b> $q = \frac{1 + i}3$, $|q| = \frac{\sqrt2}3\lt1$ : convergence absolue.</p>
<p><b>Étape 3 : La somme.</b></p>
$$\sum_{n=0}^{+\infty}\Big(\frac{1 + i}3\Big)^n = \frac1{1 - \frac{1 + i}3} = \frac3{3 - 1 - i} = \cV{\frac3{2 - i}}.$$

<p class="ml piege">Piège</p>
<p>La réciproque est fausse : $\sum\frac{(-1)^n}n$ converge (§7) mais $\sum\frac1n$ diverge. On dit qu'elle est <b>semi-convergente</b>.</p>

<h2 id="s-alt">7. Les séries alternées <span class="hp">programme de Spé</span></h2>
<div class="sbox">$$\textbf{Critère spécial}:\ (a_n)\ \text{décroissante et}\ a_n\to0\ \Longrightarrow\ \sum(-1)^na_n\ \text{converge},\quad|R_n|\leqslant a_{n+1},\quad R_n\ \text{a le signe de}\ (-1)^{n+1}.$$</div>
<p class="ml">Exemple 1 : $\sum\frac{(-1)^n}n$</p>
<p><b>Étape 1 : Rappel.</b> Critère spécial : $(a_n)$ décroissante de limite $0$ $\Rightarrow\sum(-1)^na_n$ converge.</p>
<p><b>Étape 2 : Les hypothèses.</b> $a_n = \frac1n$ est positive, décroissante, de limite $0$.</p>
<p><b>Étape 3 : Conclusion.</b> $\cG{\sum\frac{(-1)^n}n\ \text{CV}}$.</p>
<p><b>Étape 4 : Pas absolument.</b> $\sum\big|\frac{(-1)^n}n\big| = \sum\frac1n$ diverge : la série est semi-convergente.</p>

<p class="ml">Exemple 2 : le piège du développement limité</p>
<p><b>Étape 1 : Rappel.</b> Avec un signe variable, un équivalent ne suffit pas : on fait un DL jusqu'à un reste absolument convergent.</p>
<p><b>Étape 2 : Le DL</b> de $\ln(1 + x) = x - \frac{x^2}2 + O(x^3)$ avec $x = \frac{(-1)^n}{\sqrt n}\to0$ (et $x^2 = \frac1n$) :</p>
$$u_n = \frac{(-1)^n}{\sqrt n} - \frac1{2n} + O\Big(\frac1{n^{3/2}}\Big).$$
<p><b>Étape 3 : Chaque morceau.</b></p>
<ul><li>$\sum\frac{(-1)^n}{\sqrt n}$ : CV (critère spécial).</li><li>$\sum\frac1{2n}$ : DV.</li><li>$\sum O\big(\frac1{n^{3/2}}\big)$ : CV absolument (Riemann $\frac32 > 1$).</li></ul>
<p><b>Étape 4 : Conclusion.</b> CV $-$ DV $+$ CV $=$ DV : $\cG{\sum u_n\ \text{diverge}}$, alors que $u_n\sim\frac{(-1)^n}{\sqrt n}$.</p>

<h2 id="s-dal">8. La règle de d'Alembert <span class="hp">programme de Spé</span></h2>
<div class="sbox">$$u_n > 0,\quad\frac{u_{n+1}}{u_n}\to\ell:\qquad\ell\lt1\Rightarrow\cG{\text{CV}},\qquad\ell > 1\Rightarrow\cG{\text{DV grossièrement}},\qquad\ell = 1\Rightarrow\text{on ne peut rien dire}.$$</div>
<p>Elle est faite pour les <b>factorielles et les puissances $n$-ièmes</b>. Pour les fractions et les puissances de $n$, on trouve $\ell = 1$ : utiliser Riemann.</p>
<p class="ml">Exemple 1 : $u_n = \frac{n^2}{2^n}$</p>
<p><b>Étape 1 : Rappel.</b> D'Alembert : $\frac{u_{n+1}}{u_n}\to\ell\lt1\Rightarrow$ CV.</p>
<p><b>Étape 2 : Le rapport.</b></p>
$$\frac{u_{n+1}}{u_n} = \frac{(n + 1)^2}{2^{n+1}}\cdot\frac{2^n}{n^2} = \frac12\Big(\frac{n + 1}n\Big)^2.$$
<p><b>Étape 3 : La limite.</b> $\frac{n + 1}n\to1$, donc le rapport tend vers $\frac12\lt1$ : $\cG{\text{CV}}$.</p>

<p class="ml">Exemple 2 : $u_n = \frac{n!}{n^n}$</p>
<p><b>Étape 1 : Rappel.</b> D'Alembert, et $(n + 1)! = (n + 1)\,n!$.</p>
<p><b>Étape 2 : Le rapport.</b></p>
$$\frac{u_{n+1}}{u_n} = \frac{(n + 1)!}{(n + 1)^{n+1}}\cdot\frac{n^n}{n!} = \frac{(n + 1)\,n^n}{(n + 1)^{n+1}} = \Big(\frac n{n + 1}\Big)^n = \Big(1 + \frac1n\Big)^{-n}.$$
<p><b>Étape 3 : La limite</b>, avec $\ln(1 + x) = x + o(x)$ :</p>
$$\Big(1 + \frac1n\Big)^{-n} = e^{-n\ln(1 + 1/n)} = e^{-1 + o(1)}\to\frac1e.$$
<p><b>Étape 4 : Conclusion.</b> $\frac1e\lt1$ : $\cG{\text{CV}}$.</p>

<p class="ml">La règle de Cauchy <span class="hp">hors programme</span></p>
<p>Si $\sqrt[n]{u_n}\to\ell$ : $\ell\lt1$ donne CV, $\ell > 1$ donne DV, $\ell = 1$ ne permet pas de conclure. Utile quand tout est à la puissance $n$ :</p>
$$u_n = \Big(\frac n{2n + 1}\Big)^n:\qquad\sqrt[n]{u_n} = \frac n{2n + 1}\to\frac12\lt1:\quad\cG{\text{CV}}.$$

<h2 id="s-somm">9. Sommation des relations de comparaison <span class="hp">programme de Spé</span></h2>
<p>Pour $v_n\geqslant0$ :</p>
<div class="sbox">$$\sum v_n\ \text{DV et}\ u_n\sim v_n\ \Longrightarrow\ \sum_{k=0}^nu_k\sim\sum_{k=0}^nv_k,\qquad\sum v_n\ \text{CV et}\ u_n\sim v_n\ \Longrightarrow\ \sum_{k=n+1}^{+\infty}u_k\sim\sum_{k=n+1}^{+\infty}v_k.$$</div>
<p>Même chose avec $o$ et $O$. Divergence : on compare les <b>sommes partielles</b> ; convergence : on compare les <b>restes</b>.</p>
<p class="ml">Exemple : le reste de $\sum\frac1{k^2}$</p>
<p><b>Étape 1 : Rappel.</b> Termes positifs, série convergente : $u_n\sim v_n\Rightarrow\sum_{k > n}u_k\sim\sum_{k > n}v_k$.</p>
<p><b>Étape 2 : Un équivalent télescopique.</b> $\frac1{k^2}\sim\frac1{k(k - 1)} = \frac1{k - 1} - \frac1k$.</p>
<p><b>Étape 3 : Le reste de la série télescopique.</b></p>
$$\sum_{k=n+1}^{+\infty}\Big(\frac1{k - 1} - \frac1k\Big) = \frac1n.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{R_n = \sum_{k=n+1}^{+\infty}\frac1{k^2}\sim\frac1n}$.</p>

<h2 id="s-calc">10. Calculer la somme</h2>
<p>On ne connaît la somme que pour quelques familles : télescopique, géométrique, exponentielle (et leurs dérivées). On ramène $u_n$ à l'une d'elles.</p>
<p class="ml">Exemple 1 : décomposer pour télescoper</p>
<p><b>Étape 1 : Rappel.</b> On décompose pour obtenir une différence de termes consécutifs $w_n - w_{n+1}$, puis $\sum_{n\geqslant1}(w_n - w_{n+1}) = w_1 - \lim w_n$.</p>
<p><b>Étape 2 : La décomposition.</b></p>
$$\frac1{n(n + 1)(n + 2)} = \frac12\Big(\frac1{n(n + 1)} - \frac1{(n + 1)(n + 2)}\Big).$$
<p><b>Étape 3 : Vérification.</b> Même dénominateur : $\frac{(n + 2) - n}{n(n + 1)(n + 2)} = \frac2{n(n + 1)(n + 2)}$.</p>
<p><b>Étape 4 : Télescoper</b> avec $w_n = \frac1{n(n + 1)}\to0$ :</p>
$$\sum_{n=1}^{+\infty}u_n = \frac12\big(w_1 - 0\big) = \frac12\cdot\frac1{1\times2} = \cV{\frac14}.$$

<p class="ml">Exemple 2 : se ramener à l'exponentielle</p>
<p><b>Étape 1 : Rappel.</b> $\sum_{n=0}^{+\infty}\frac1{n!} = e$, et $\frac n{n!} = \frac1{(n - 1)!}$ pour $n\geqslant1$.</p>
<p><b>Étape 2 : On coupe la somme.</b></p>
$$\sum_{n=0}^{+\infty}\frac{n + 1}{n!} = \sum_{n=0}^{+\infty}\frac n{n!} + \sum_{n=0}^{+\infty}\frac1{n!}.$$
<p><b>Étape 3 : La première somme.</b> Le terme $n = 0$ est nul, puis $\frac n{n!} = \frac1{(n - 1)!}$ et $\cO{m = n - 1}$ :</p>
$$\sum_{n=1}^{+\infty}\frac1{(n - 1)!} = \sum_{m=0}^{+\infty}\frac1{m!} = e.$$
<p><b>Étape 4 : Conclusion.</b> $e + e = \cV{2e}$.</p>

<p class="ml">Exemple 3 : dériver la série géométrique</p>
<p><b>Étape 1 : Rappel.</b> Pour $|x|\lt1$ : $\sum_{n=1}^{+\infty}nx^{n-1} = \frac1{(1 - x)^2}$ (dérivée de $\frac1{1 - x}$, admise ici, cours de Spé).</p>
<p><b>Étape 2 : Faire apparaître $nx^{n-1}$.</b> $\frac n{2^n} = \frac12\cdot n\Big(\frac12\Big)^{n-1}$.</p>
<p><b>Étape 3 : On applique avec $x = \frac12$.</b></p>
$$\sum_{n=1}^{+\infty}\frac n{2^n} = \frac12\cdot\frac1{(1 - 1/2)^2} = \frac12\cdot4 = \cV2.$$

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
<p><b>Étape 1 : Rappel.</b> Les équivalents passent aux produits et aux quotients. En $0$ : $\sin u\sim u$, $e^u - 1\sim u$, $\ln(1 + u)\sim u$.</p>
<p><b>Étape 2 : Chaque facteur.</b></p>
$$\sin(3x)\sim3x,\qquad e^{2x} - 1\sim2x,\qquad\ln(1 + x)\sim x.$$
<p><b>Étape 3 : On remplace</b> dans le quotient :</p>
$$\frac{\sin(3x)\,(e^{2x} - 1)}{x\,\ln(1 + x)}\sim\frac{3x\cdot2x}{x\cdot x} = 6.$$
<p><b>Étape 4 : Conclusion.</b> Deux fonctions équivalentes ont la même limite : $\cG{\text{la limite vaut}\ 6}$.</p>

<p class="ml">Exemple 2 : une somme, on factorise par le terme dominant</p>
<p><b>Étape 1 : Rappel.</b> On n'additionne pas des équivalents : on factorise par le terme dominant.</p>
<p><b>Étape 2 : Le terme dominant en $+\infty$.</b> $x^3$ domine $2x$ et $\sqrt x$.</p>
<p><b>Étape 3 : On factorise.</b></p>
$$f(x) = \cB{x^3}\Big(1 + \frac2{x^2} - \frac1{x^{5/2}}\Big).$$
<p><b>Étape 4 : La parenthèse tend vers $1$</b>, donc $\cG{f(x)\sim x^3}$.</p>

<p class="ml">Exemple 3 : un $\ln$ (on ne compose pas, on factorise)</p>
<p><b>Étape 1 : Rappel.</b> On ne compose pas un équivalent par $\ln$ : on factorise dans le $\ln$, puis $\ln(ab) = \ln a + \ln b$.</p>
<p><b>Étape 2 : Factoriser.</b></p>
$$\ln(x^2 + x) = \ln\Big(x^2\Big(1 + \frac1x\Big)\Big) = 2\ln x + \ln\Big(1 + \frac1x\Big).$$
<p><b>Étape 3 : Le second morceau</b> tend vers $\ln1 = 0$ : c'est $\cR{o(1)}$, négligeable devant $2\ln x\to+\infty$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\ln(x^2 + x)\sim2\ln x}$.</p>

<h2 id="l-croiss">3. Les croissances comparées</h2>
<div class="sbox">$$\alpha, \beta, \gamma > 0:\qquad(\ln x)^\gamma = o(x^\alpha)\ \text{et}\ x^\alpha = o(e^{\beta x})\ \text{en}\ +\infty,\qquad x^\alpha|\ln x|^\gamma\xrightarrow[x\to0^+]{}0.$$</div>
<div class="sbox">$$\text{Suites}:\quad(\ln n)^\gamma\ll n^\alpha\ll a^n\ (a > 1)\ll n!\ll n^n.$$</div>
<p class="ml">Exemple</p>
<p><b>Étape 1 : Rappel.</b> Croissances comparées : $n^\alpha\ll a^n\ll n!$.</p>
<p><b>Étape 2 : Le numérateur.</b> $2^n$ domine $n^{10}$ : $n^{10} + 2^n\sim\cB{2^n}$.</p>
<p><b>Étape 3 : Le dénominateur.</b> $n!$ domine $3^n$ : $3^n - n!\sim\cB{-n!}$.</p>
<p><b>Étape 4 : Le quotient.</b></p>
$$\frac{n^{10} + 2^n}{3^n - n!}\sim-\frac{2^n}{n!}\to\cG0.$$

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
<p><b>Étape 1 : Rappel.</b> $\sin x = x - \frac{x^3}6 + o(x^3)$. On développe au même ordre que la puissance du dénominateur.</p>
<p><b>Étape 2 : L'ordre.</b> Le dénominateur est $x^3$ : ordre $3$. À l'ordre $1$, on n'aurait que $\sin x - x = o(x)$, inutile.</p>
<p><b>Étape 3 : Le numérateur.</b></p>
$$\sin x - x = x - \frac{x^3}6 + o(x^3) - x = -\frac{x^3}6 + o(x^3).$$
<p><b>Étape 4 : On divise par $x^3$.</b></p>
$$\frac{\sin x - x}{x^3} = -\frac16 + o(1)\ \longrightarrow\ \cG{-\frac16}.$$

<h2 id="l-lim">8. Calculer une limite</h2>
<ol>
<li>Essayer d'abord les <b>équivalents</b> (produit, quotient).</li>
<li>S'il y a une somme ou une différence qui se compense : <b>DL</b> de chaque morceau, au bon ordre.</li>
<li>Pour $u^v$ : écrire $e^{v\ln u}$.</li>
</ol>
<p class="ml">Exemple 1 : $\lim_{x\to0}\frac{e^x - 1 - x}{x^2}$</p>
<p><b>Étape 1 : Rappel.</b> $e^x = 1 + x + \frac{x^2}2 + o(x^2)$.</p>
<p><b>Étape 2 : L'ordre.</b> Dénominateur $x^2$ : ordre $2$.</p>
<p><b>Étape 3 : Le numérateur.</b> Les termes $1$ et $x$ se compensent :</p>
$$e^x - 1 - x = \cR{1 + x} + \cB{\frac{x^2}2} + o(x^2)\cR{{} - 1 - x} = \frac{x^2}2 + o(x^2).$$
<p><b>Étape 4 : On divise par $x^2$.</b> $\frac{e^x - 1 - x}{x^2} = \frac12 + o(1)\to\cG{\frac12}$.</p>

<p class="ml">Exemple 2 : $\lim_{x\to0}\Big(\frac1{\sin^2x} - \frac1{x^2}\Big)$</p>
<p><b>Étape 1 : Rappel.</b> $\sin x = x - \frac{x^3}6 + o(x^3)$. Pour un quotient : équivalent du dénominateur, puis numérateur au même ordre.</p>
<p><b>Étape 2 : Même dénominateur.</b></p>
$$\frac1{\sin^2x} - \frac1{x^2} = \frac{x^2 - \sin^2x}{x^2\sin^2x}.$$
<p><b>Étape 3 : Le dénominateur.</b> $x^2\sin^2x\sim x^2\cdot x^2 = x^4$ : il faut le numérateur à l'ordre $4$.</p>
<p><b>Étape 4 : $\sin^2x$ à l'ordre $4$.</b> On garde les termes de degré $\leqslant4$ :</p>
$$\sin^2x = \Big(x - \frac{x^3}6\Big)^2 + o(x^4) = x^2 - 2\cdot x\cdot\frac{x^3}6 + o(x^4) = x^2 - \frac{x^4}3 + o(x^4).$$
<p><b>Étape 5 : Le numérateur.</b> $x^2 - \sin^2x = \frac{x^4}3 + o(x^4)$.</p>
<p><b>Étape 6 : Conclusion.</b></p>
$$\frac{x^2 - \sin^2x}{x^2\sin^2x}\sim\frac{x^4/3}{x^4} = \frac13\qquad\Longrightarrow\qquad\cG{\text{la limite vaut}\ \frac13}.$$

<p class="ml">Exemple 3 : une forme $1^\infty$</p>
<p><b>Étape 1 : Rappel.</b> Pour $u^v$ : $u^v = e^{v\ln u}$, puis $\ln(1 + h) = h + o(h)$.</p>
<p><b>Étape 2 : On écrit avec l'exponentielle.</b></p>
$$\Big(1 + \frac ax\Big)^x = e^{x\ln(1 + a/x)}.$$
<p><b>Étape 3 : L'exposant</b>, avec $h = \frac ax\to0$ :</p>
$$x\ln\Big(1 + \frac ax\Big) = x\Big(\frac ax + o\Big(\frac1x\Big)\Big) = a + o(1).$$
<p><b>Étape 4 : Conclusion</b> ($\exp$ est continue) : $\cG{\Big(1 + \frac ax\Big)^x\to e^a}$.</p>

<p class="ml">Exemple 4 : un équivalent par DL</p>
<p><b>Étape 1 : Rappel.</b> $\operatorname{ch}x = 1 + \frac{x^2}2 + o(x^2)$, $\cos x = 1 - \frac{x^2}2 + o(x^2)$. Le premier terme non nul du DL donne l'équivalent.</p>
<p><b>Étape 2 : La différence.</b></p>
$$\operatorname{ch}x - \cos x = \Big(1 + \frac{x^2}2\Big) - \Big(1 - \frac{x^2}2\Big) + o(x^2) = x^2 + o(x^2).$$
<p><b>Étape 3 : Conclusion.</b> $\cG{\operatorname{ch}x - \cos x\sim x^2}$ en $0$.</p>

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
<p><b>Étape 1 : Rappel.</b> $\ln(1 + h) = h - \frac{h^2}2 + o(h^2)$ et $e^h = 1 + h + o(h)$.</p>
<p><b>Étape 2 : Le logarithme</b>, avec $h = \frac1n$ :</p>
$$\ln u_n = n\ln\Big(1 + \frac1n\Big) = n\Big(\frac1n - \frac1{2n^2} + o\Big(\frac1{n^2}\Big)\Big) = 1 - \frac1{2n} + o\Big(\frac1n\Big).$$
<p><b>Étape 3 : On repasse à l'exponentielle.</b></p>
$$u_n = e\cdot e^{-\frac1{2n} + o(\frac1n)} = e\Big(1 - \frac1{2n} + o\Big(\frac1n\Big)\Big).$$
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{u_n = e - \frac e{2n} + o\Big(\frac1n\Big)},\qquad\text{donc}\ e - u_n\sim\frac e{2n}.$$

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
<nav class="msum"><a href="#p-not">Notations</a><a href="#p-ref">Intégrales de référence</a><a href="#p-integ">Montrer l'intégrabilité</a><a href="#p-calc">Calculer</a><a href="#p-def">Définition</a><a href="#p-pos">Comparaison</a><a href="#p-abs">Absolue, complexe</a><a href="#p-ippcv">IPP, changement de variable</a><a href="#p-serint">Série-intégrale</a><a href="#p-relc">Relations de comparaison</a><a href="#p-l2">Carré intégrable</a><a href="#p-cvd">Convergence dominée</a><a href="#p-tat">Terme à terme</a><a href="#p-plan">Le plan pour un paramètre</a><a href="#p-cont">Continuité</a><a href="#p-lim">Limite</a><a href="#p-der">Dérivation</a><a href="#p-gamma">La fonction $\Gamma$</a><a href="#p-enonce">Ce que l'énoncé te donne</a><a href="#p-erreurs">Erreurs</a><a href="#p-entrainement">S'entraîner</a><a href="#p-arbre">L'arbre</a><a href="#p-exos">Exercices</a></nav>

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
<p><b>Étape 1 : Rappel.</b> Si $f$ a une limite finie en une borne ouverte, c'est un faux problème : $f$ se prolonge par continuité.</p>
<p><b>Étape 2 : La limite en $0$.</b> $\sin t\sim t$, donc $\frac{\sin t}t\to1$.</p>
<p><b>Étape 3 : Conclusion.</b> $f$ se prolonge par continuité sur $[0, 1]$ : $\cG{\text{intégrable sur}\ \left]0, 1\right]}$.</p>

<p class="ml">Exemple 2 : $f(t) = \frac{\ln t}{\sqrt t}e^{-t}$ sur $\left]0, +\infty\right[$</p>
<p><b>Étape 1 : Rappel.</b> On traite chaque point à problème séparément. En $0$ : si $t^\alpha|f|\to0$ avec $\alpha\lt1$, intégrable. En $+\infty$ : avec $\alpha > 1$.</p>
<p><b>Étape 2 : Les points à problème.</b> $f$ est continue sur $\left]0, +\infty\right[$ : on regarde $\cR0$ et $\cR{+\infty}$.</p>
<p><b>Étape 3 : En $0$</b>, avec $\alpha = \frac34\lt1$ :</p>
$$t^{3/4}|f(t)| = t^{1/4}|\ln t|\,e^{-t}\to0\ \Longrightarrow\ |f(t)| = o\Big(\cV{\frac1{t^{3/4}}}\Big):\ \text{intégrable en}\ 0.$$
<p><b>Étape 4 : En $+\infty$</b>, avec $\alpha = 2 > 1$ :</p>
$$t^2|f(t)| = t^{3/2}\ln t\,e^{-t}\to0\ \Longrightarrow\ |f(t)| = o\Big(\cV{\frac1{t^2}}\Big):\ \text{intégrable en}\ +\infty.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{f\ \text{est intégrable sur}\ \left]0, +\infty\right[}$.</p>

<p class="ml">Exemple 3 : convergente mais pas intégrable</p>
<p><b>Étape 1 : Rappel.</b> Intégrable $\Rightarrow$ convergente, mais pas l'inverse.</p>
<p><b>Étape 2 : La convergence</b>, par IPP sur $[1, x]$ :</p>
$$\int_1^x\frac{\sin t}t\,dt = \Big[-\frac{\cos t}t\Big]_1^x - \int_1^x\frac{\cos t}{t^2}\,dt.$$
<p>Le crochet a une limite et $\frac{|\cos t|}{t^2}\leqslant\frac1{t^2}$ est intégrable : l'intégrale converge.</p>
<p><b>Étape 3 : La non-intégrabilité.</b> $|\sin t|\geqslant\sin^2t = \frac{1 - \cos2t}2$ :</p>
$$\frac{|\sin t|}t\geqslant\frac1{2t} - \frac{\cos2t}{2t}.$$
<p>Le premier morceau n'est pas intégrable en $+\infty$, le second a une intégrale convergente (même IPP) : $\cG{\frac{\sin t}t\ \text{n'est pas intégrable}}$.</p>

<h2 id="p-calc">4. Calculer une intégrale sur un intervalle</h2>
<p>On calcule sur un segment $[a, x]$, puis on fait tendre $x$ vers la borne. On peut aussi faire une IPP ou un changement de variable directement, à condition que <b>les crochets aient une limite finie</b>.</p>
<p class="ml">Exemple 4 : $\int_0^{+\infty}t\,e^{-t}\,dt$</p>
<p><b>Étape 1 : Rappel.</b> On calcule sur $[0, x]$, puis on fait tendre $x$ vers $+\infty$.</p>
<p><b>Étape 2 : IPP sur $[0, x]$</b> ($u = t$, $v' = e^{-t}$, $v = -e^{-t}$) :</p>
$$\int_0^xt\,e^{-t}\,dt = \big[-t\,e^{-t}\big]_0^x + \int_0^xe^{-t}\,dt = -x\,e^{-x} + 1 - e^{-x}.$$
<p><b>Étape 3 : La limite.</b> $x\,e^{-x}\to0$ et $e^{-x}\to0$ : $\cG{\int_0^{+\infty}t\,e^{-t}\,dt = 1}$.</p>

<p class="ml">Changement de variable</p>
<p>Il doit être une bijection $\mathcal C^1$ strictement monotone. Il conserve alors la nature et la valeur : $\int_0^{+\infty}e^{-\sqrt t}\,dt\ \underset{\cO{t = u^2}}{=}\ \int_0^{+\infty}2u\,e^{-u}\,du = 2$.</p>

<h2 id="p-def">5. Intégrale convergente : la définition, les calculs de référence</h2>
<p class="ml">Le code couleur de cette partie</p>
<p><span class="kB">bleu</span> : la fonction étudiée $\cB f$. <span class="kO">orange</span> : la fonction de comparaison $\cO g$. <span class="kR">rouge</span> : les points à problème. <span class="kV">violet</span> : l'exposant $\cV\alpha$. <span class="kG">vert</span> : la conclusion.</p>
<div class="sbox">$$f\ \text{continue par morceaux sur}\ [a, b[:\quad\int_a^bf\ \text{converge}\iff x\mapsto\int_a^xf(t)\,dt\ \text{a une limite finie quand}\ x\to b^-.$$
$$\text{Sur}\ ]a, b[:\ \text{on coupe en un}\ c\in\,]a, b[\ \text{et on demande que}\ \int_a^cf\ \text{et}\ \int_c^bf\ \text{convergent}\ \text{(les deux !)}.$$
$$\text{Avec une primitive}\ F:\qquad\int_a^bf = \lim_{b^-}F - \lim_{a^+}F = \big[F\big]_a^b,\quad\text{si les deux limites sont finies}.$$</div>
<p class="ml piege">Piège</p>
<p>$\int_{-x}^xt\,dt = 0\to0$, et pourtant $\int_{-\infty}^{+\infty}t\,dt$ <b>diverge</b> : les deux bornes doivent partir <b>indépendamment</b>.</p>
<table class="mtab">
<tr><th>Intégrale de référence</th><th>Converge si et seulement si</th><th>Valeur</th></tr>
<tr><td>$\int_1^{+\infty}\frac{dt}{t^{\cV\alpha}}$</td><td>$\cV\alpha > 1$</td><td>$\frac1{\alpha - 1}$</td></tr>
<tr><td>$\int_0^1\frac{dt}{t^{\cV\alpha}}$</td><td>$\cV\alpha \lt 1$</td><td>$\frac1{1 - \alpha}$</td></tr>
<tr><td>$\int_a^b\frac{dt}{(t - a)^{\cV\alpha}}$, $\int_a^b\frac{dt}{(b - t)^{\cV\alpha}}$</td><td>$\cV\alpha \lt 1$</td><td>$\frac{(b - a)^{1-\alpha}}{1 - \alpha}$</td></tr>
<tr><td>$\int_0^{+\infty}e^{-\lambda t}\,dt$</td><td>$\lambda > 0$</td><td>$\frac1\lambda$</td></tr>
<tr><td>$\int_0^1\ln t\,dt$</td><td>toujours</td><td>$-1$</td></tr>
</table>

<p class="ml">Exemple 5 : les intégrales de Riemann, à savoir refaire</p>
<p><b>Étape 1 : Rappel.</b> On calcule sur un segment avec une primitive, puis on passe à la limite. Pour $\alpha\neq1$, une primitive de $t^{-\alpha}$ est $\frac{t^{1-\alpha}}{1 - \alpha}$ ; pour $\alpha = 1$, c'est $\ln t$.</p>
<p><b>Étape 2 : Cas $\alpha = 1$.</b> $\int_1^x\frac{dt}t = \ln x\to+\infty$ et $\int_x^1\frac{dt}t = -\ln x\to+\infty$ quand $x\to0^+$ : divergence des deux côtés.</p>
<p><b>Étape 3 : Cas $\alpha\neq1$, en $+\infty$.</b></p>
$$\int_1^x\frac{dt}{t^\alpha} = \frac{x^{1-\alpha} - 1}{1 - \alpha}\longrightarrow\begin{cases}\frac1{\alpha - 1}&\text{si}\ \alpha > 1\ (x^{1-\alpha}\to0)\\+\infty&\text{si}\ \alpha \lt 1\ (x^{1-\alpha}\to+\infty)\end{cases}$$
<p><b>Étape 4 : Cas $\alpha\neq1$, en $0$.</b></p>
$$\int_x^1\frac{dt}{t^\alpha} = \frac{1 - x^{1-\alpha}}{1 - \alpha}\longrightarrow\begin{cases}\frac1{1 - \alpha}&\text{si}\ \alpha \lt 1\ (x^{1-\alpha}\to0)\\+\infty&\text{si}\ \alpha > 1\ (x^{1-\alpha}\to+\infty)\end{cases}$$
<p><b>Étape 5 : Conclusion.</b> $\cG{\int_1^{+\infty}\frac{dt}{t^\alpha}\ \text{CV}\iff\alpha > 1}$ et $\cG{\int_0^1\frac{dt}{t^\alpha}\ \text{CV}\iff\alpha \lt 1}$. Donc $\int_0^{+\infty}\frac{dt}{t^\alpha}$ diverge pour <b>tout</b> $\alpha$.</p>

<p class="ml">Exemple 6 : $\int_0^1\ln t\,dt$</p>
<p><b>Étape 1 : Rappel.</b> $\int_0^1f = \lim\limits_{x\to0^+}\int_x^1f$. Une primitive de $\ln$ est $t\ln t - t$.</p>
<p><b>Étape 2 : Sur $[x, 1]$.</b></p>
$$\int_x^1\ln t\,dt = \big[t\ln t - t\big]_x^1 = (0 - 1) - (x\ln x - x) = -1 - x\ln x + x.$$
<p><b>Étape 3 : La limite.</b> $x\ln x\to0$ (croissances comparées) et $x\to0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\int_0^1\ln t\,dt = -1}$ (convergente).</p>

<p class="ml">Exemple 7 : deux bornes infinies</p>
<p>Calculer $\displaystyle\int_{-\infty}^{+\infty}\frac{dt}{1 + t^2}$.</p>
<p><b>Étape 1 : Rappel.</b> Avec deux bornes à problème, on coupe en $0$ et chaque morceau doit converger. Une primitive de $\frac1{1 + t^2}$ est $\arctan$.</p>
<p><b>Étape 2 : Sur $[0, +\infty[$.</b> $\int_0^x\frac{dt}{1 + t^2} = \arctan x\to\frac\pi2$.</p>
<p><b>Étape 3 : Sur $]-\infty, 0]$.</b> $\int_x^0\frac{dt}{1 + t^2} = -\arctan x\to\frac\pi2$ quand $x\to-\infty$.</p>
<p><b>Étape 4 : Conclusion.</b> Les deux convergent : $\cG{\int_{-\infty}^{+\infty}\frac{dt}{1 + t^2} = \frac\pi2 + \frac\pi2 = \pi}$.</p>

<h2 id="p-pos">6. Fonctions positives : les théorèmes de comparaison</h2>
<div class="sbox">$$f\geq0:\quad\int_a^bf\ \text{converge}\iff x\mapsto\int_a^xf\ \text{est majorée}.$$
$$0\leq\cB f\leq\cO g:\quad\int\cO g\ \text{CV}\Rightarrow\int\cB f\ \text{CV}\qquad\text{et}\qquad\int\cB f\ \text{DV}\Rightarrow\int\cO g\ \text{DV}.$$
$$\cO g\geq0,\ \ \cB f = O(\cO g)\ \text{ou}\ \cB f = o(\cO g):\ \int\cO g\ \text{CV}\Rightarrow\int\cB f\ \text{CV (absolument)}.\qquad\cB f\sim\cO g,\ \text{signe constant}:\ \text{même nature}.$$</div>
<p class="ml">La méthode</p>
<p><b>1.</b> Repérer les points à problème $\cR{a}$, $\cR{b}$. <b>2.</b> En chacun, chercher un équivalent simple de $\cB f$ (ou une majoration). <b>3.</b> Comparer à une intégrale de référence $\cO{\frac1{t^\alpha}}$, $\cO{e^{-\lambda t}}$. <b>4.</b> Conclure pour chaque point, puis pour l'intégrale entière.</p>
<p class="ml piege">Piège</p>
<p>L'équivalent ne marche que si $f$ est de <b>signe constant</b> près du point. Pour un signe variable, on passe à $|f|$ (convergence absolue, §7).</p>

<p class="ml">Exemple 8 : par majoration</p>
<p>Nature de $\displaystyle\int_1^{+\infty}\frac{1 + \sin t}{t^2}\,dt$.</p>
<p><b>Étape 1 : Rappel.</b> $0\leq\cB f\leq\cO g$ et $\int\cO g$ CV $\Rightarrow\int\cB f$ CV.</p>
<p><b>Étape 2 : Le signe.</b> $-1\leq\sin t\leq1$, donc $0\leq1 + \sin t\leq2$ : $\cB f\geq0$.</p>
<p><b>Étape 3 : La majoration.</b> $0\leq\frac{1 + \sin t}{t^2}\leq\cO{\frac2{t^2}}$, et $\int_1^{+\infty}\frac{dt}{t^2}$ converge (Riemann, $\cV\alpha = 2 > 1$).</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\text{l'intégrale converge}}$.</p>

<p class="ml">Exemple 9 : par équivalent, deux points à problème</p>
<p>Nature de $\displaystyle\int_0^{+\infty}\frac{\sqrt t}{1 + t^2}\,dt$.</p>
<p><b>Étape 1 : Rappel.</b> $\cB f\sim\cO g$ avec $\cO g\geq0$ : même nature. On traite chaque point séparément.</p>
<p><b>Étape 2 : Les points à problème.</b> $f$ est continue et positive sur $[0, +\infty[$ : seul $\cR{+\infty}$ pose problème ($f(0) = 0$ est défini).</p>
<p><b>Étape 3 : Un équivalent en $+\infty$.</b> $1 + t^2\sim t^2$, donc :</p>
$$\frac{\sqrt t}{1 + t^2}\sim\frac{t^{1/2}}{t^2} = \cO{\frac1{t^{3/2}}}.$$
<p><b>Étape 4 : La référence.</b> $\cV\alpha = \frac32 > 1$ : $\int_1^{+\infty}\frac{dt}{t^{3/2}}$ converge.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\text{l'intégrale converge}}$.</p>

<p class="ml">Exemple 10 : montrer une divergence</p>
<p>Nature de $\displaystyle\int_2^{+\infty}\frac{dt}{\ln t}$ et de $\displaystyle\int_0^1\frac{dt}{e^t - 1}$.</p>
<p><b>Étape 1 : Rappel.</b> $0\leq\cO g\leq\cB f$ et $\int\cO g$ DV $\Rightarrow\int\cB f$ DV. Et $\cB f\sim\cO g\geq0$ : même nature.</p>
<p><b>Étape 2 : La première.</b> Pour $t\geq2$ : $0 \lt \ln t\leq t$, donc $\frac1{\ln t}\geq\cO{\frac1t}$, et $\int_2^{+\infty}\frac{dt}t$ diverge ($\cV\alpha = 1$).</p>
<p><b>Étape 3 : La seconde.</b> Seul $\cR0$ pose problème. $e^t - 1\sim t$ en $0$, donc $\frac1{e^t - 1}\sim\cO{\frac1t} > 0$, et $\int_0^1\frac{dt}t$ diverge.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\text{les deux intégrales divergent}}$.</p>

<h2 id="p-abs">7. Convergence absolue, fonctions à valeurs complexes</h2>
<div class="sbox">$$\int_a^b|f|\ \text{converge}\ \Longrightarrow\ \int_a^bf\ \text{converge, et}\ \Big|\int_a^bf\Big|\leq\int_a^b|f|.$$
$$f\ \text{à valeurs complexes}:\quad\int f\ \text{CV}\iff\int\operatorname{Re}f\ \text{et}\ \int\operatorname{Im}f\ \text{CV},\qquad\int f = \int\operatorname{Re}f + i\int\operatorname{Im}f.$$</div>
<p>Une intégrale <b>convergente mais pas absolument convergente</b> est dite semi-convergente : $\int_1^{+\infty}\frac{\sin t}t\,dt$ (exemple 3). Pour la nature, on fait alors une <b>IPP</b> qui gagne une puissance de $t$.</p>

<p class="ml">Exemple 11 : $\int_0^{+\infty}e^{-t}\cos t\,dt$ en passant par $\mathbb C$</p>
<p><b>Étape 1 : Rappel.</b> $|f|$ intégrable $\Rightarrow\int f$ converge. Et $\cos t = \operatorname{Re}(e^{it})$, $\int\operatorname{Re} = \operatorname{Re}\int$.</p>
<p><b>Étape 2 : La convergence.</b> $|e^{-t}\cos t|\leq\cO{e^{-t}}$, intégrable sur $[0, +\infty[$ : convergence absolue.</p>
<p><b>Étape 3 : On passe en complexe.</b> $e^{-t}\cos t = \operatorname{Re}\big(e^{(-1 + i)t}\big)$. Sur $[0, x]$ :</p>
$$\int_0^xe^{(-1 + i)t}\,dt = \Big[\frac{e^{(-1 + i)t}}{-1 + i}\Big]_0^x = \frac{e^{(-1 + i)x} - 1}{-1 + i}.$$
<p><b>Étape 4 : La limite.</b> $|e^{(-1 + i)x}| = |e^{-x}|\,|e^{ix}| = e^{-x}\to0$, donc l'intégrale vaut $\frac{0 - 1}{-1 + i} = \frac1{1 - i}$. On multiplie par le conjugué : $\frac1{1 - i} = \frac{1 + i}{(1 - i)(1 + i)} = \frac{1 + i}{1 + 1} = \frac{1 + i}2$.</p>
<p><b>Étape 5 : Conclusion.</b> On prend la partie réelle : $\cG{\int_0^{+\infty}e^{-t}\cos t\,dt = \frac12}$ (et $\int_0^{+\infty}e^{-t}\sin t\,dt = \frac12$ avec la partie imaginaire).</p>

<h2 id="p-prop">8. Propriétés des intégrales convergentes</h2>
<div class="sbox">$$\textbf{Linéarité}:\ \int f,\ \int g\ \text{CV}\Rightarrow\int(\lambda f + \mu g) = \lambda\int f + \mu\int g.\qquad\textbf{Chasles}\ \text{reste vrai}.$$
$$\textbf{Positivité}:\ a\leq b,\ f\geq0\Rightarrow\int_a^bf\geq0.\qquad\textbf{Croissance}:\ f\leq g\Rightarrow\int_a^bf\leq\int_a^bg.$$
$$f\ \textbf{continue},\ f\geq0\ \text{et}\ \int_a^bf = 0\ \Longrightarrow\ f = 0\ \text{sur}\ ]a, b[.$$</div>
<p class="ml piege">Piège</p>
<p>$\int(f + g)$ peut converger sans que $\int f$ et $\int g$ convergent : $\int_1^{+\infty}\big(\frac1t - \frac1t\big)$. On ne <b>sépare</b> une intégrale en deux que si les deux morceaux convergent.</p>

<h2 id="p-ippcv">9. IPP et changement de variable sur un intervalle quelconque</h2>
<div class="sbox">$$\textbf{IPP}:\ u, v\ \mathcal C^1\ \text{sur}\ ]a, b[,\ uv\ \text{a des limites finies en}\ a\ \text{et}\ b\ \Longrightarrow\ \int_a^bu'v\ \text{et}\ \int_a^buv'\ \text{de même nature, et}\ \int_a^bu'v = \big[uv\big]_a^b - \int_a^buv'.$$
$$\textbf{Changement de variable}:\ \varphi:\,]\alpha, \beta[\to]a, b[\ \text{bijective},\ \mathcal C^1,\ \text{strictement croissante}:\ \int_a^bf(t)\,dt\ \text{et}\ \int_\alpha^\beta f(\varphi(u))\,\varphi'(u)\,du\ \text{de même nature et égales}.$$</div>
<p>Si $\varphi$ est strictement décroissante, les bornes s'échangent. En pratique, on vérifie d'abord le <b>crochet</b>, puis on écrit l'égalité.</p>

<p class="ml">Exemple 12 : $\int_0^{+\infty}t^ne^{-t}\,dt = n!$ par IPP</p>
<p><b>Étape 1 : Rappel.</b> IPP sur un intervalle : si $uv$ a des limites finies aux bornes, $\int u'v = [uv] - \int uv'$, même nature.</p>
<p><b>Étape 2 : On pose</b> $I_n = \int_0^{+\infty}t^ne^{-t}\,dt$. Elle converge : $t^2\cdot t^ne^{-t}\to0$, donc $t^ne^{-t} = o\big(\frac1{t^2}\big)$ en $+\infty$.</p>
<p><b>Étape 3 : L'IPP</b> pour $n\geq1$, avec $u = t^n$, $v' = e^{-t}$, $v = -e^{-t}$ :</p>
$$I_n = \big[-t^ne^{-t}\big]_0^{+\infty} + n\int_0^{+\infty}t^{n-1}e^{-t}\,dt.$$
<p><b>Étape 4 : Le crochet.</b> $t^ne^{-t}\to0$ en $+\infty$ et vaut $0$ en $0$ : le crochet est nul. Donc $I_n = nI_{n-1}$.</p>
<p><b>Étape 5 : Conclusion.</b> $I_0 = \int_0^{+\infty}e^{-t}\,dt = 1$, et par récurrence $\cG{I_n = n\,(n - 1)\cdots1\times I_0 = n!}$.</p>

<p class="ml">Exemple 13 : un changement de variable</p>
<p>Calculer $\displaystyle\int_0^{+\infty}\frac{dt}{e^t + e^{-t}}$.</p>
<p><b>Étape 1 : Rappel.</b> $\varphi$ bijective, $\mathcal C^1$, strictement monotone : même nature et même valeur.</p>
<p><b>Étape 2 : Le changement.</b> $u = e^t$, soit $t = \ln u$ : $u\mapsto\ln u$ est une bijection $\mathcal C^1$ strictement croissante de $]1, +\infty[$ sur $]0, +\infty[$, et $dt = \frac{du}u$.</p>
<p><b>Étape 3 : On remplace.</b></p>
<p>Avec $e^t = u$, $e^{-t} = \frac1u$, $dt = \frac{du}u$, et $\big(u + \frac1u\big)\times u = u^2 + 1$ :</p>
$$\int_0^{+\infty}\frac{dt}{e^t + e^{-t}} = \int_1^{+\infty}\frac1{u + \frac1u}\cdot\frac{du}u = \int_1^{+\infty}\frac{du}{u^2 + 1}.$$
<p><b>Étape 4 : On calcule.</b> $\int_1^x\frac{du}{1 + u^2} = \arctan x - \frac\pi4\to\frac\pi2 - \frac\pi4$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\int_0^{+\infty}\frac{dt}{e^t + e^{-t}} = \frac\pi4}$.</p>

<h2 id="p-serint">10. Comparaison série-intégrale</h2>
<div class="sbox">$$f\ \text{continue, positive, décroissante sur}\ [n_0, +\infty[:\qquad\sum f(n)\ \text{et}\ \int_{n_0}^{+\infty}f\ \text{sont de même nature}.$$
$$\text{L'encadrement à refaire}:\quad\int_n^{n+1}f(t)\,dt\ \leq\ f(n)\ \leq\ \int_{n-1}^nf(t)\,dt\qquad(n - 1\geq n_0).$$</div>
<p>On le redémontre à chaque fois : sur $[n, n + 1]$, $f(n + 1)\leq f(t)\leq f(n)$, puis on intègre (longueur $1$). Ensuite on <b>somme</b> les encadrements.</p>

<p class="ml">Exemple 14 : la série $\sum\frac1{n\ln n}$</p>
<p><b>Étape 1 : Rappel.</b> $f$ positive, continue, décroissante : $\sum f(n)$ et $\int f$ ont même nature.</p>
<p><b>Étape 2 : La fonction.</b> $f(t) = \frac1{t\ln t}$ sur $[2, +\infty[$ : positive, continue, et décroissante car $t\ln t$ est croissante et positive.</p>
<p><b>Étape 3 : L'intégrale.</b> Une primitive est $\ln(\ln t)$ (dérivée $\frac{1/t}{\ln t}$) :</p>
$$\int_2^x\frac{dt}{t\ln t} = \ln(\ln x) - \ln(\ln2)\longrightarrow+\infty.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{\sum_{n\geq2}\frac1{n\ln n}\ \text{diverge}}$, alors que $\frac1{n\ln n} = o\big(\frac1n\big)$… la comparaison avec $\frac1n$ ne suffisait pas.</p>

<p class="ml">Exemple 15 : un équivalent de $H_n = \sum_{k=1}^n\frac1k$</p>
<p><b>Étape 1 : Rappel.</b> $\int_k^{k+1}\frac{dt}t\leq\frac1k\leq\int_{k-1}^k\frac{dt}t$, puis on somme.</p>
<p><b>Étape 2 : Minoration.</b> On somme $\frac1k\geq\int_k^{k+1}\frac{dt}t$ pour $k = 1$ à $n$ :</p>
$$H_n\geq\int_1^{n+1}\frac{dt}t = \ln(n + 1).$$
<p><b>Étape 3 : Majoration.</b> On garde $\frac11 = 1$ et on somme $\frac1k\leq\int_{k-1}^k\frac{dt}t$ pour $k = 2$ à $n$ :</p>
$$H_n\leq1 + \int_1^n\frac{dt}t = 1 + \ln n.$$
<p><b>Étape 4 : On divise par $\ln n$</b> ($n\geq2$) : $\frac{\ln(n + 1)}{\ln n}\leq\frac{H_n}{\ln n}\leq\frac1{\ln n} + 1$, et les deux bornes tendent vers $1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{H_n\sim\ln n}$.</p>

<h2 id="p-relc">11. Intégrer une relation de comparaison <span class="hp">programme de Spé</span></h2>
<div class="sbox">$$g\geq0.\ \textbf{Si}\ \int_a^{+\infty}g\ \textbf{converge (les restes)}:\quad f = o(g)\Rightarrow\int_x^{+\infty}f = o\Big(\int_x^{+\infty}g\Big),\qquad f\sim g\Rightarrow\int_x^{+\infty}f\sim\int_x^{+\infty}g.$$
$$\textbf{Si}\ \int_a^{+\infty}g\ \textbf{diverge (les intégrales partielles)}:\quad f = o(g)\Rightarrow\int_a^xf = o\Big(\int_a^xg\Big),\qquad f\sim g\Rightarrow\int_a^xf\sim\int_a^xg.$$</div>
<p>Même chose avec $O$. C'est le parallèle exact des sommes partielles et des restes de séries.</p>

<p class="ml">Exemple 16 : un équivalent d'intégrale partielle</p>
<p>Équivalent de $F(x) = \displaystyle\int_1^x\frac{dt}{\sqrt t + 1}$ quand $x\to+\infty$.</p>
<p><b>Étape 1 : Rappel.</b> $f\sim g\geq0$ et $\int g$ diverge $\Rightarrow\int_a^xf\sim\int_a^xg$.</p>
<p><b>Étape 2 : L'équivalent.</b> $\sqrt t + 1\sim\sqrt t$, donc $\frac1{\sqrt t + 1}\sim\cO{\frac1{\sqrt t}}\geq0$.</p>
<p><b>Étape 3 : La référence diverge.</b> Une primitive de $t^{-1/2}$ est $\frac{t^{1/2}}{1/2} = 2\sqrt t$, donc $\int_1^x\frac{dt}{\sqrt t} = \big[2\sqrt t\big]_1^x = 2\sqrt x - 2\to+\infty$ ($\cV\alpha = \frac12\leq1$).</p>
<p><b>Étape 4 : Conclusion.</b> $F(x)\sim2\sqrt x - 2\sim\cG{2\sqrt x}$.</p>

<p class="ml">Exemple 17 : un équivalent de reste</p>
<p>Équivalent de $R(x) = \displaystyle\int_x^{+\infty}\frac{dt}{t^2 + t + 1}$ quand $x\to+\infty$.</p>
<p><b>Étape 1 : Rappel.</b> $f\sim g\geq0$ et $\int g$ converge $\Rightarrow\int_x^{+\infty}f\sim\int_x^{+\infty}g$.</p>
<p><b>Étape 2 : L'équivalent.</b> $t^2 + t + 1\sim t^2$, donc $f(t)\sim\cO{\frac1{t^2}}$, dont l'intégrale converge en $+\infty$.</p>
<p><b>Étape 3 : Le reste de référence.</b> $\int_x^{+\infty}\frac{dt}{t^2} = \Big[-\frac1t\Big]_x^{+\infty} = \frac1x$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{R(x)\sim\frac1x}$.</p>

<h2 id="p-l2">12. Fonctions de carré intégrable</h2>
<div class="sbox">$$f\in L^2(I)\iff f^2\ \text{intégrable sur}\ I.\qquad|fg|\leq\frac{f^2 + g^2}2:\ f, g\in L^2\Rightarrow fg\in L^1.$$
$$\textbf{Cauchy-Schwarz}:\quad\Big|\int_Ifg\Big|\leq\sqrt{\int_If^2}\,\sqrt{\int_Ig^2}.$$</div>
<p class="ml">Exemple 18 : $f\in L^2$ donne $\frac f t$ intégrable</p>
<p>Si $f^2$ est intégrable sur $[1, +\infty[$, montrer que $t\mapsto\frac{f(t)}t$ l'est aussi.</p>
<p><b>Étape 1 : Rappel.</b> $|ab|\leq\frac{a^2 + b^2}2$, car $(|a| - |b|)^2\geq0$.</p>
<p><b>Étape 2 : On l'applique</b> avec $a = f(t)$ et $b = \frac1t$ :</p>
$$\Big|\frac{f(t)}t\Big|\leq\frac12f(t)^2 + \frac12\cdot\cO{\frac1{t^2}}.$$
<p><b>Étape 3 : Les deux morceaux.</b> $f^2$ est intégrable par hypothèse, $\frac1{t^2}$ aussi ($\cV\alpha = 2 > 1$).</p>
<p><b>Étape 4 : Conclusion.</b> Par comparaison, $\cG{\frac ft\ \text{est intégrable sur}\ [1, +\infty[}$, et Cauchy-Schwarz donne $\int_1^{+\infty}\big|\frac ft\big|\leq\sqrt{\int f^2}$.</p>

<h2 id="p-bert">13. Les intégrales de Bertrand <span class="hp">hors programme</span></h2>
<div class="sbox">$$\int_e^{+\infty}\frac{dt}{t^\alpha(\ln t)^\beta}\ \text{converge}\iff\alpha > 1\ \text{ou}\ (\alpha = 1\ \text{et}\ \beta > 1).$$</div>
<p>À <b>redémontrer</b> si on l'utilise : pour $\alpha > 1$, comparer à $\frac1{t^{\gamma}}$ avec $1 \lt \gamma \lt \alpha$ ; pour $\alpha \lt 1$, minorer par $\frac1t$ ; pour $\alpha = 1$, la primitive de $\frac1{t(\ln t)^\beta}$ est $\frac{(\ln t)^{1-\beta}}{1 - \beta}$ (ou $\ln\ln t$ si $\beta = 1$, exemple 14).</p>

<h2 id="p-cvd">14. Le théorème de convergence dominée</h2>
<div class="sbox">$$\left.\begin{aligned}&f_n\ \text{continues par morceaux sur}\ I\\&f_n\to f\ \text{simplement, avec}\ f\ \text{continue par morceaux}\\&|f_n(t)|\leqslant\cO{\varphi(t)}\ \text{pour tout}\ n,\ \text{avec}\ \cO\varphi\ \textbf{intégrable}\end{aligned}\right\}\ \Longrightarrow\ \int_If_n\xrightarrow[n\to+\infty]{}\int_If.$$</div>
<p>La clé est la <b>domination</b> : une fonction $\cO\varphi$ qui ne dépend pas de $n$.</p>
<p class="ml">Exemple 19 : $\lim\int_0^{\pi/2}\sin^nt\,dt$</p>
<p><b>Étape 1 : Rappel.</b> Convergence dominée : limite simple + domination $|f_n|\leqslant\varphi$ intégrable, indépendante de $n$.</p>
<p><b>Étape 2 : La limite simple.</b> Pour $t\in\big[0, \frac\pi2\big[$, $0\leqslant\sin t\lt1$, donc $\sin^nt\to0$. En $\frac\pi2$, $\sin^n\frac\pi2 = 1$. La limite vaut $0$ sauf en un point.</p>
<p><b>Étape 3 : La domination.</b> $|\sin^nt|\leqslant\cO1$, intégrable sur le segment.</p>
<p><b>Étape 4 : Conclusion.</b> $\int_0^{\pi/2}\sin^nt\,dt\to\int_0^{\pi/2}0\,dt = \cG0$.</p>

<p class="ml">Exemple 20 : $\lim\int_0^n\big(1 - \frac tn\big)^n\,dt$</p>
<p><b>Étape 1 : Rappel.</b> Convergence dominée. Une borne qui dépend de $n$ se met dans une indicatrice.</p>
<p><b>Étape 2 : La mise en forme.</b> $f_n(t) = \big(1 - \frac tn\big)^n\mathbf 1_{[0, n]}(t)$ sur $[0, +\infty[$.</p>
<p><b>Étape 3 : La limite simple.</b> Pour $t$ fixé et $n > t$ :</p>
$$f_n(t) = e^{n\ln(1 - t/n)} = e^{n(-\frac tn + o(\frac1n))}\to\cB{e^{-t}}.$$
<p><b>Étape 4 : La domination.</b> $\ln(1 - u)\leqslant-u$ pour $u\in[0, 1[$ :</p>
$$0\leqslant f_n(t)\leqslant e^{n\cdot(-t/n)} = \cO{e^{-t}},\ \text{intégrable sur}\ [0, +\infty[.$$
<p><b>Étape 5 : Conclusion.</b> $\int_0^n\big(1 - \frac tn\big)^n\,dt\to\int_0^{+\infty}e^{-t}\,dt = \cG1$.</p>

<p class="ml piege">Piège</p>
<p>Sans domination, c'est faux. $f_n(t) = n\,\mathbf 1_{]0, 1/n]}(t)$ tend simplement vers $0$, mais $\int_0^1f_n = 1$ pour tout $n$. Il n'existe pas de $\varphi$ intégrable au-dessus de toutes les $f_n$.</p>

<h2 id="p-tat">15. Intégrer une série terme à terme</h2>
<div class="sbox">$$\left.\begin{aligned}&f_n\ \text{continues par morceaux et intégrables sur}\ I\\&\sum f_n\ \text{converge simplement vers}\ S\ \text{continue par morceaux}\\&\sum_n\int_I|f_n|\ \textbf{converge}\end{aligned}\right\}\ \Longrightarrow\ S\ \text{intégrable et}\ \int_I\sum_{n=0}^{+\infty}f_n = \sum_{n=0}^{+\infty}\int_If_n.$$</div>
<p><b>Méthode pratique</b> : on fait d'abord le calcul formel en échangeant $\int$ et $\sum$, puis on vérifie les hypothèses.</p>
<p class="ml">Exemple 21 : $\int_0^1\frac{-\ln t}{1 - t}\,dt = \frac{\pi^2}6$</p>
<p><b>Étape 1 : Rappel.</b> $\int\sum f_n = \sum\int f_n$ si les $f_n$ sont intégrables et $\sum\int|f_n|$ converge.</p>
<p><b>Étape 2 : Développer.</b> Pour $t\in\left]0, 1\right[$, $\frac1{1 - t} = \sum_{n\geqslant0}t^n$, donc $\frac{-\ln t}{1 - t} = \sum_{n\geqslant0}f_n(t)$ avec $f_n(t) = -t^n\ln t\geqslant0$.</p>
<p><b>Étape 3 : Intégrer un terme</b> (IPP, $u = -\ln t$, $v' = t^n$) :</p>
$$\int_0^1-t^n\ln t\,dt = \Big[-\frac{t^{n+1}}{n + 1}\ln t\Big]_0^1 + \frac1{n + 1}\int_0^1t^n\,dt = 0 + \frac1{(n + 1)^2}.$$
<p><b>Étape 4 : L'hypothèse.</b> $f_n\geqslant0$, donc $\sum\int|f_n| = \sum\frac1{(n + 1)^2}$ converge (Riemann).</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\int_0^1\frac{-\ln t}{1 - t}\,dt = \sum_{n=0}^{+\infty}\frac1{(n + 1)^2} = \cG{\frac{\pi^2}6}.$$

<h2 id="p-plan">16. Le plan pour une intégrale à paramètre</h2>
<p>Pour $g(x) = \int_I\cB{f(x, t)}\,dt$, on vérifie toujours dans cet ordre :</p>
<ol>
<li><b>Régularité en $x$</b> : pour tout $t\in I$, $x\mapsto f(x, t)$ est continue (ou $\mathcal C^1$, ou a une limite).</li>
<li><b>Régularité en $t$</b> : pour tout $x$, $t\mapsto f(x, t)$ (et $\frac{\partial f}{\partial x}$) est continue par morceaux sur $I$.</li>
<li><b>Domination</b> : $|f(x, t)|\leqslant\cO{\varphi(t)}$ pour tout $x$, avec $\cO\varphi$ intégrable et <b>indépendante de $x$</b>.</li>
<li>Si la domination n'est possible que sur des segments $[a, b]\subset A$, on la fait sur chaque segment : la continuité et la dérivabilité sont des propriétés locales.</li>
</ol>

<h2 id="p-cont">17. Continuité</h2>
<div class="sbox">$$\left.\begin{aligned}&x\mapsto f(x, t)\ \text{continue sur}\ A\ \text{pour tout}\ t\\&t\mapsto f(x, t)\ \text{continue par morceaux sur}\ I\ \text{pour tout}\ x\\&|f(x, t)|\leqslant\cO{\varphi(t)},\ \cO\varphi\ \text{intégrable}\end{aligned}\right\}\ \Longrightarrow\ g\ \text{est continue sur}\ A.$$</div>
<p class="ml">Exemple 22 : $g(x) = \int_0^{+\infty}\frac{e^{-xt}}{1 + t^2}\,dt$ sur $[0, +\infty[$</p>
<p><b>Étape 1 : Rappel.</b> Continuité sous l'intégrale : continuité en $x$, continuité par morceaux en $t$, et $|f(x, t)|\leqslant\varphi(t)$ intégrable, indépendante de $x$.</p>
<p><b>Étape 2 : En $x$.</b> Pour $t$ fixé, $x\mapsto\frac{e^{-xt}}{1 + t^2}$ est continue.</p>
<p><b>Étape 3 : En $t$.</b> Pour $x$ fixé, $t\mapsto\frac{e^{-xt}}{1 + t^2}$ est continue sur $[0, +\infty[$.</p>
<p><b>Étape 4 : La domination.</b> Pour $x\geqslant0$ et $t\geqslant0$, $e^{-xt}\leqslant1$ :</p>
$$\Big|\frac{e^{-xt}}{1 + t^2}\Big|\leqslant\cO{\frac1{1 + t^2}},\ \text{intégrable sur}\ [0, +\infty[.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{g\ \text{est continue sur}\ [0, +\infty[}$, et $g(0) = \int_0^{+\infty}\frac{dt}{1 + t^2} = \frac\pi2$.</p>

<h2 id="p-lim">18. Limite en une borne</h2>
<div class="sbox">$$f(x, t)\xrightarrow[x\to a]{}\ell(t)\ \text{pour tout}\ t,\quad|f(x, t)|\leqslant\cO{\varphi(t)}\ \text{intégrable}\ \Longrightarrow\ \lim_{x\to a}\int_If(x, t)\,dt = \int_I\ell(t)\,dt.$$</div>
<p class="ml">Exemple 23 : la même $g$ en $+\infty$</p>
<p><b>Étape 1 : Rappel.</b> Limite sous l'intégrale : limite simple en $t$, et la même domination.</p>
<p><b>Étape 2 : La limite simple.</b> Pour $t > 0$, $\frac{e^{-xt}}{1 + t^2}\to0$ quand $x\to+\infty$ (en $t = 0$ elle vaut $1$, un seul point).</p>
<p><b>Étape 3 : La domination.</b> $\frac1{1 + t^2}$, comme pour la continuité.</p>
<p><b>Étape 4 : Conclusion.</b> $\lim_{x\to+\infty}g(x) = \int_0^{+\infty}0\,dt = \cG0$.</p>

<h2 id="p-der">19. Dérivation</h2>
<div class="sbox">$$\left.\begin{aligned}&x\mapsto f(x, t)\ \text{de classe}\ \mathcal C^1\ \text{sur}\ J\\&t\mapsto f(x, t)\ \text{intégrable},\ t\mapsto\tfrac{\partial f}{\partial x}(x, t)\ \text{continue par morceaux}\\&\Big|\tfrac{\partial f}{\partial x}(x, t)\Big|\leqslant\cO{\varphi(t)},\ \cO\varphi\ \text{intégrable}\end{aligned}\right\}\ \Longrightarrow\ g\in\mathcal C^1(J),\quad g'(x) = \int_I\frac{\partial f}{\partial x}(x, t)\,dt.$$</div>
<p>C'est la formule de Leibniz : on dérive sous le signe intégrale. Pour $\mathcal C^k$, on domine chaque dérivée partielle jusqu'à l'ordre $k$.</p>
<p class="ml">Exemple 24 : $F(x) = \int_0^{+\infty}e^{-t^2}\cos(xt)\,dt$</p>
<p><b>Étape 1 : Rappel.</b> Dérivation sous l'intégrale : dominer $\big|\frac{\partial f}{\partial x}\big|$ par $\varphi$ intégrable, puis $F'(x) = \int\frac{\partial f}{\partial x}$.</p>
<p><b>Étape 2 : La dérivée partielle.</b> $f(x, t) = e^{-t^2}\cos(xt)$ :</p>
$$\frac{\partial f}{\partial x}(x, t) = -t\,e^{-t^2}\sin(xt).$$
<p><b>Étape 3 : La domination.</b></p>
$$\Big|\frac{\partial f}{\partial x}\Big|\leqslant\cO{t\,e^{-t^2}},$$
<p>intégrable sur $[0, +\infty[$ (primitive $-\frac12e^{-t^2}$). Et $|f|\leqslant e^{-t^2}$ est intégrable : $F$ est $\mathcal C^1$.</p>
<p><b>Étape 4 : $F'$ par IPP</b> ($u = \sin(xt)$, $v' = -t\,e^{-t^2}$, $v = \frac12e^{-t^2}$) :</p>
$$F'(x) = \underbrace{\Big[\frac12e^{-t^2}\sin(xt)\Big]_0^{+\infty}}_{= 0} - \frac x2\int_0^{+\infty}e^{-t^2}\cos(xt)\,dt = -\frac x2F(x).$$
<p><b>Étape 5 : L'équation différentielle.</b> $F' + \frac x2F = 0$, donc $F(x) = F(0)\,e^{-x^2/4}$.</p>
<p><b>Étape 6 : La constante.</b> $F(0) = \int_0^{+\infty}e^{-t^2}\,dt = \frac{\sqrt\pi}2$ (intégrale de Gauss) :</p>
$$\cG{F(x) = \frac{\sqrt\pi}2\,e^{-x^2/4}}.$$

<h2 id="p-gamma">20. L'exemple central : la fonction $\Gamma$</h2>
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

<h2 id="p-enonce">21. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
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
<div><b>« Nature de $\int_a^bf$ », $f\geq0$</b><span>Points à problème, équivalent ou majoration, référence de Riemann ou $e^{-\lambda t}$.</span></div>
<div><b>$f$ de signe variable</b><span>Étudier $|f|$ (convergence absolue). Si ça échoue : IPP (semi-convergence).</span></div>
<div><b>« Calculer $\int_a^{+\infty}f$ »</b><span>Sur $[a, x]$ avec une primitive, IPP ou changement de variable, puis $x\to+\infty$.</span></div>
<div><b>Deux bornes à problème</b><span>Couper en un point $c$, chaque morceau doit converger.</span></div>
<div><b>$\cos$, $\sin$ fois exponentielle</b><span>Passer par $e^{(a + i\omega)t}$ et prendre $\operatorname{Re}$ ou $\operatorname{Im}$.</span></div>
<div><b>$I_n$ avec un $n$</b><span>IPP pour une relation de récurrence entre $I_n$ et $I_{n-1}$.</span></div>
<div><b>Une série $\sum f(n)$, $f$ décroissante</b><span>Comparaison série-intégrale, encadrement par $\int_n^{n+1}f$ et $\int_{n-1}^nf$.</span></div>
<div><b>« Équivalent de $\int_x^{+\infty}f$ » ou « de $\int_a^xf$ »</b><span>Intégrer la relation de comparaison $f\sim g$.</span></div>
<div><b>$f^2$ intégrable</b><span>$|fg|\leq\frac{f^2 + g^2}2$, Cauchy-Schwarz.</span></div>
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
<p><b>11.</b> Calculer $\lim\int_{-x}^xf$ pour $\int_{-\infty}^{+\infty}f$ : les deux bornes doivent être indépendantes.</p>
<p><b>12.</b> Séparer $\int(f + g) = \int f + \int g$ sans savoir si les deux convergent.</p>
<p><b>13.</b> Conclure « $f\to0$ en $+\infty$, donc $\int f$ converge » : $\frac1t\to0$ et diverge.</p>
<p><b>14.</b> Un changement de variable non bijectif, ou non $\mathcal C^1$ sur l'intervalle ouvert.</p>
<p><b>15.</b> Comparaison série-intégrale avec une $f$ non décroissante.</p>
</div>

<h2 id="p-entrainement">S'entraîner</h2>
<div data-mlab="riemref"></div>
<div data-mlab="quizimp"></div>
<div data-mlab="quizipar"></div>

<h2 id="p-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : nature selon $\alpha$</p>
<p>Pour quels $\alpha$ l'intégrale $\displaystyle\int_0^{+\infty}\frac{dt}{t^\alpha(1 + t)}$ converge-t-elle ?</p>
<p><b>Étape 1 : Rappel.</b> On coupe en $1$, on cherche un équivalent en chaque borne, et on compare à $\frac1{t^\alpha}$.</p>
<p><b>Étape 2 : En $0$.</b> $1 + t\to1$, donc $f(t)\sim\frac1{t^\alpha} > 0$ : converge en $0$ $\iff\alpha \lt 1$.</p>
<p><b>Étape 3 : En $+\infty$.</b> $1 + t\sim t$, donc $f(t)\sim\frac1{t^{\alpha + 1}}$ : converge en $+\infty$ $\iff\alpha + 1 > 1\iff\alpha > 0$.</p>
<p><b>Étape 4 : Conclusion.</b> Il faut les deux : $\cG{\text{convergente}\iff0 \lt \alpha \lt 1}$.</p>

<p class="ml">Exercice 2 : $\int_0^{\pi/2}\ln(\sin t)\,dt$ converge</p>
<p><b>Étape 1 : Rappel.</b> $f\sim g$ de signe constant : même nature. Et $\int_0^1\ln t\,dt$ converge.</p>
<p><b>Étape 2 : Le point à problème.</b> Seul $0$ : $\sin t\to0$ et $\ln(\sin t)\to-\infty$. Sur $]0, \frac\pi2]$, $\ln(\sin t)\leq0$ : signe constant.</p>
<p><b>Étape 3 : Un équivalent.</b> $\ln(\sin t) = \ln t + \ln\big(\frac{\sin t}t\big)$, et $\ln\big(\frac{\sin t}t\big)\to\ln1 = 0$ tandis que $\ln t\to-\infty$. Donc $\ln(\sin t)\sim\ln t$.</p>
<p><b>Étape 4 : Conclusion.</b> $\int_0^1\ln t\,dt$ converge, donc $\cG{\int_0^{\pi/2}\ln(\sin t)\,dt\ \text{converge}}$ (elle vaut $-\frac\pi2\ln2$).</p>

<p class="ml">Exercice 3 : les intégrales $I_n = \int_0^{+\infty}\frac{dt}{(1 + t^2)^n}$</p>
<p><b>Étape 1 : Rappel.</b> IPP sur un intervalle : vérifier que le crochet a des limites finies.</p>
<p><b>Étape 2 : Convergence.</b> Pour $n\geq1$, $\frac1{(1 + t^2)^n}\sim\frac1{t^{2n}}$ en $+\infty$, avec $2n\geq2 > 1$ : converge.</p>
<p><b>Étape 3 : IPP</b> avec $u = \frac1{(1 + t^2)^n}$, $v' = 1$, $v = t$, $u' = \frac{-2nt}{(1 + t^2)^{n+1}}$ :</p>
$$I_n = \Big[\frac t{(1 + t^2)^n}\Big]_0^{+\infty} + 2n\int_0^{+\infty}\frac{t^2}{(1 + t^2)^{n+1}}\,dt.$$
<p><b>Étape 4 : Le crochet</b> vaut $0$ ($\frac t{(1 + t^2)^n}\to0$). On écrit $t^2 = (1 + t^2) - 1$ :</p>
$$I_n = 2n\int_0^{+\infty}\Big(\frac1{(1 + t^2)^n} - \frac1{(1 + t^2)^{n+1}}\Big)dt = 2n\,(I_n - I_{n+1}).$$
<p><b>Étape 5 : Conclusion.</b> $\cG{I_{n+1} = \frac{2n - 1}{2n}I_n}$, avec $I_1 = \frac\pi2$. Par exemple $I_2 = \frac12\cdot\frac\pi2 = \frac\pi4$.</p>

<h2 id="p-arbre">L'arbre des méthodes</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une intégrale sur un intervalle</span><ul>
<li><div class="hr"><em>nature</em><span class="hq">Faux problème (limite finie) ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#p-integ">prolonger par continuité</a></div></li>
<li><div class="hr"><em>non, $f\geq0$</em><span class="hq">Équivalent simple ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl" href="#p-pos">comparer à $\frac1{t^\alpha}$, $e^{-\lambda t}$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#p-integ">majorer, ou $t^\alpha f(t)\to0$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>signe variable</em><span class="hq">$|f|$ intégrable ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#p-abs">convergence absolue</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#p-integ">IPP : semi-convergence</a></div></li>
</ul></div></li>
<li><div class="hr"><em>deux bornes</em><a class="hl end" href="#p-def">couper, chaque morceau doit converger</a></div></li>
</ul></div></li>
<li><div class="hr"><em>valeur</em><span class="hq">Quel outil ?</span><ul>
<li><div class="hr"><em>primitive connue</em><a class="hl ok" href="#p-def">$[F]_a^b$ avec des limites</a></div></li>
<li><div class="hr"><em>produit</em><a class="hl" href="#p-ippcv">IPP, crochet fini</a></div></li>
<li><div class="hr"><em>$e^t$, $\sqrt t$…</em><a class="hl" href="#p-ippcv">changement de variable bijectif</a></div></li>
<li><div class="hr"><em>$\cos$, $\sin$</em><a class="hl" href="#p-abs">passer en complexe</a></div></li>
<li><div class="hr"><em>une suite $I_n$</em><a class="hl" href="#p-ippcv">IPP : récurrence</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une série $\sum f(n)$</em><a class="hl" href="#p-serint">série-intégrale ($f\searrow$)</a></div></li>
<li><div class="hr"><em>un équivalent</em><span class="hq">$\int g$ converge ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl" href="#p-relc">équivalent des restes</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#p-relc">équivalent des intégrales partielles</a></div></li>
</ul></div></li>
<li><div class="hr"><em>limite de $\int f_n$</em><span class="hq">Suite ou série ?</span><ul>
<li><div class="hr"><em>suite</em><a class="hl" href="#p-cvd">convergence dominée</a></div></li>
<li><div class="hr"><em>série</em><a class="hl" href="#p-tat">terme à terme si $\sum\int|f_n|$ CV</a></div></li>
</ul></div></li>
<li><div class="hr"><em>$g(x) = \int f(x, t)\,dt$</em><span class="hq">Quoi ?</span><ul>
<li><div class="hr"><em>continuité</em><a class="hl" href="#p-cont">dominer $|f|$</a></div></li>
<li><div class="hr"><em>dérivée</em><a class="hl" href="#p-der">dominer $|\partial_xf|$</a></div></li>
<li><div class="hr"><em>limite</em><a class="hl" href="#p-lim">limite simple, domination</a></div></li>
<li><div class="hr"><em>difficile</em><a class="hl end" href="#p-gamma">dominer sur des segments</a></div></li>
</ul></div></li>
</ul></div></div>
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
<p><b>Étape 1 : Rappel.</b> Convergence simple : on fixe $x$ et on cherche la limite de la suite numérique $(f_n(x))$.</p>
<p><b>Étape 2 : Cas $0\leqslant x\lt1$.</b> $x^n\to0$.</p>
<p><b>Étape 3 : Cas $x = 1$.</b> $1^n = 1\to1$.</p>
<p><b>Étape 4 : La limite simple.</b></p>
$$\cB{f(x) = \left\{\begin{aligned}&0\ \text{si}\ x\in[0, 1[\\&1\ \text{si}\ x = 1\end{aligned}\right.}$$
<p><b>Étape 5 : Ce qu'on remarque.</b> Les $f_n$ sont continues, mais $f$ ne l'est pas en $1$ : la convergence n'est donc pas uniforme.</p>

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
<p><b>Étape 1 : Rappel.</b> S'il existe $x_n\in X$ avec $|f_n(x_n) - f(x_n)|\not\to0$, alors $\|f_n - f\|_\infty\not\to0$ : pas de convergence uniforme.</p>
<p><b>Étape 2 : La limite simple</b> sur $[0, 1[$ : $f = 0$ (continue, l'argument de continuité ne marche pas).</p>
<p><b>Étape 3 : Un point bien choisi.</b> $\cV{x_n = 1 - \frac1n}\in[0, 1[$ :</p>
$$f_n(x_n) = \Big(1 - \frac1n\Big)^n = e^{n\ln(1 - 1/n)}\to e^{-1}\neq0.$$
<p><b>Étape 4 : Conclusion.</b> $\|f_n\|_\infty\geqslant f_n(x_n)\not\to0$ : $\cG{\text{pas de CU sur}\ [0, 1[}$. Sur $[0, a]$ avec $a\lt1$, $\sup x^n = a^n\to0$ : CU.</p>

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
<p><b>Étape 1 : Rappel.</b> Si $|f_n(x)|\leqslant\alpha_n$ pour tout $x$ et $\sum\alpha_n$ converge : convergence normale.</p>
<p><b>Étape 2 : Majorer.</b> Pour $|x|\leqslant1$, $|x^n|\leqslant1$ :</p>
$$\Big|\frac{x^n}{n^2}\Big|\leqslant\cO{\frac1{n^2}}.$$
<p><b>Étape 3 : Conclusion.</b> $\sum\frac1{n^2}$ converge : $\cG{\text{CN sur}\ [-1, 1]}$, donc CU.</p>

<p class="ml">Exemple 2 : $\sum e^{-nx}$ sur $\left]0, +\infty\right[$, puis sur $[a, +\infty[$</p>
<p><b>Étape 1 : Rappel.</b> CN $\iff\sum\|f_n\|_\infty$ converge. Si $\|f_n\|_\infty\not\to0$, il n'y a même pas CU.</p>
<p><b>Étape 2 : Sur $\left]0, +\infty\right[$.</b> $\sup_{x > 0}e^{-nx} = 1$ (quand $x\to0$) :</p>
$$\|f_n\|_\infty = 1\not\to0\ \Longrightarrow\ \text{ni CN, ni CU}.$$
<p><b>Étape 3 : Sur $[a, +\infty[$</b> ($a > 0$). $e^{-nx}$ décroît, donc le sup est en $a$ :</p>
$$\|f_n\|_\infty = e^{-na} = (e^{-a})^n.$$
<p><b>Étape 4 : Conclusion.</b> Géométrique de raison $e^{-a}\lt1$ : $\cG{\text{CN sur}\ [a, +\infty[}$.</p>

<p class="ml">Exemple 3 : avec une étude de fonction</p>
<p><b>Étape 1 : Rappel.</b> Pour la CN, on calcule $\|f_n\|_\infty$ par une étude de fonction.</p>
<p><b>Étape 2 : La fonction à étudier.</b> $f_n(x) = \frac1n\cdot h(x)$ avec $h(x) = \frac x{1 + nx^2}$ sur $[0, +\infty[$.</p>
<p><b>Étape 3 : La dérivée.</b></p>
$$h'(x) = \frac{(1 + nx^2) - x\cdot2nx}{(1 + nx^2)^2} = \frac{1 - nx^2}{(1 + nx^2)^2} = 0\iff x = \cV{\frac1{\sqrt n}}.$$
<p><b>Étape 4 : Le maximum.</b> $h$ croît puis décroît :</p>
$$h\Big(\frac1{\sqrt n}\Big) = \frac{1/\sqrt n}{1 + 1} = \frac1{2\sqrt n},\qquad\|f_n\|_\infty = \frac1n\cdot\frac1{2\sqrt n} = \cO{\frac1{2n^{3/2}}}.$$
<p><b>Étape 5 : Conclusion.</b> Riemann $\frac32 > 1$ : $\cG{\text{CN sur}\ [0, +\infty[}$.</p>

<h2 id="f-alt">8. Convergence uniforme sans convergence normale</h2>
<p>Quand la CN échoue, on revient à la définition : on <b>majore le reste</b> uniformément. L'outil le plus fréquent est le critère des séries alternées, avec $|R_n(x)|\leqslant|f_{n+1}(x)|$.</p>
<p class="ml">Exemple : $\sum\frac{(-1)^n}{n + x}$ sur $[0, +\infty[$ ($n\geqslant1$)</p>
<p><b>Étape 1 : Rappel.</b> Série alternée : $|R_n(x)|\leqslant|f_{n+1}(x)|$. Si ce majorant tend vers $0$ uniformément, on a la CU.</p>
<p><b>Étape 2 : Pas de CN.</b> $\big\|\frac{(-1)^n}{n + x}\big\|_\infty = \frac1n$ (en $x = 0$), et $\sum\frac1n$ diverge.</p>
<p><b>Étape 3 : La CS.</b> Pour $x\geqslant0$ fixé, $\frac1{n + x}$ décroît vers $0$ : critère spécial.</p>
<p><b>Étape 4 : Majorer le reste</b>, pour tout $x\geqslant0$ :</p>
$$|R_n(x)|\leqslant\frac1{n + 1 + x}\leqslant\cO{\frac1{n + 1}}.$$
<p><b>Étape 5 : Conclusion.</b> $\|R_n\|_\infty\leqslant\frac1{n + 1}\to0$ : $\cG{\text{CU sur}\ [0, +\infty[}$.</p>

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
<p><b>Étape 1 : Rappel de la formule.</b> Pour un polynôme, la formule de Taylor en $a$ est exacte :</p>
$$P = \sum_{k=0}^{\deg P}\frac{P^{(k)}(a)}{k!}(X - a)^k.$$
<p><b>Étape 2 : Les dérivées.</b> On dérive $P = X^3 - 2X + 1$ jusqu'à ce que ce soit constant :</p>
$$P' = 3X^2 - 2,\qquad P'' = 6X,\qquad P''' = 6,\qquad P^{(4)} = 0.$$
<p><b>Étape 3 : Les valeurs en $a = 1$.</b></p>
$$P(1) = 1 - 2 + 1 = 0,\qquad P'(1) = 3 - 2 = 1,\qquad P''(1) = 6,\qquad P'''(1) = 6.$$
<p><b>Étape 4 : On remplace dans la formule.</b> On divise la dérivée d'ordre $k$ par $k!$, avec $0! = 1$, $1! = 1$, $2! = 2$ et $3! = 6$ :</p>
$$P = \frac01 + \frac11(X - 1) + \frac62(X - 1)^2 + \frac66(X - 1)^3 = \cG{(X - 1) + 3(X - 1)^2 + (X - 1)^3}.$$
<p>Contrôle en $X = 0$ : $-1 + 3 - 1 = 1 = P(0)$.</p>

<h2 id="q-div">3. La division euclidienne</h2>
<div class="sbox">$$B\neq0:\quad\exists!\,(Q, R),\quad A = BQ + R\quad\text{et}\quad\deg R\lt\deg B.$$</div>
<p class="ml">Exemple : $A = X^4 + 2X^3 - X + 1$ par $B = X^2 + X + 1$</p>
<p><b>Étape 1 : Rappel.</b> On cherche $Q$ et $R$ avec $A = BQ + R$ et $\deg R\lt\deg B = 2$. On pose la division comme pour les entiers : $A$ à gauche, $B$ en haut à droite, le quotient en dessous. Les lignes rouges sont celles qu'on soustrait.</p>
<div class="potence potw" data-a="1,2,0,-1,1" data-b="1,1,1"></div>
<p><b>Étape 2 : Premier terme du quotient.</b> $\cO{X^4\div X^2 = X^2}$. On écrit $X^2$ au quotient, on calcule $X^2B = X^4 + X^3 + X^2$ et on le soustrait :</p>
$$(X^4 + 2X^3 + 0X^2 - X + 1) - (X^4 + X^3 + X^2) = X^3 - X^2 - X + 1.$$
<p><b>Étape 3 : Deuxième terme.</b> $\cO{X^3\div X^2 = X}$. On écrit $+X$ au quotient et on soustrait $XB = X^3 + X^2 + X$ :</p>
$$(X^3 - X^2 - X + 1) - (X^3 + X^2 + X) = -2X^2 - 2X + 1.$$
<p><b>Étape 4 : Troisième terme.</b> $\cO{-2X^2\div X^2 = -2}$. On écrit $-2$ au quotient et on soustrait $-2B = -2X^2 - 2X - 2$ :</p>
$$(-2X^2 - 2X + 1) - (-2X^2 - 2X - 2) = 3.$$
<p><b>Étape 5 : On s'arrête.</b> Le reste $3$ est de degré $0\lt2$ :</p>
$$\cG{X^4 + 2X^3 - X + 1 = (X^2 + X + 1)(X^2 + X - 2) + 3}.$$
<p>Astuce : on laisse une place vide pour chaque puissance absente (ici $X^2$ dans $A$), pour que les colonnes restent alignées.</p>
<p>Contrôle en $X = 1$ : à gauche $1 + 2 - 1 + 1 = 3$, à droite $3\times0 + 3 = 3$.</p>

<div data-mlab="diveucl"></div>

<h2 id="q-reste">4. Trouver un reste sans poser la division</h2>
<p>Le reste a un degré $\lt\deg B$ : on l'écrit avec des inconnues, puis on <b>évalue aux racines de $B$</b>.</p>
<p class="ml">Exemple 1 : reste de $X^n$ par $(X - 1)(X - 2)$</p>
<p><b>Étape 1 : Rappel.</b> Le reste a un degré strictement plus petit que celui du diviseur. Ici $\deg\big((X - 1)(X - 2)\big) = 2$, donc $R = aX + b$ :</p>
$$X^n = (X - 1)(X - 2)\,Q + aX + b.$$
<p><b>Étape 2 : On évalue en $\cO{X = 1}$.</b> Le produit $(X - 1)(X - 2)Q$ s'annule :</p>
$$1^n = a\cdot1 + b\qquad\Longrightarrow\qquad a + b = 1.$$
<p><b>Étape 3 : On évalue en $\cO{X = 2}$.</b></p>
$$2^n = 2a + b.$$
<p><b>Étape 4 : On résout le système.</b> On soustrait la première équation à la seconde :</p>
$$\left\{\begin{aligned}a + b &= 1\\2a + b &= 2^n\end{aligned}\right.\ \underset{\cO{L_2 - L_1}}{\iff}\ \left\{\begin{aligned}a &= 2^n - 1\\b &= 1 - a = 2 - 2^n\end{aligned}\right.$$
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{R = (2^n - 1)X + 2 - 2^n}.$$
<p>Contrôle avec $n = 2$ : $X^2 = (X - 1)(X - 2) + 3X - 2$, et la formule donne $3X - 2$.</p>

<p class="ml">Exemple 2 : reste de $X^n$ par $(X - 1)^2$ (racine double)</p>
<p><b>Étape 1 : Rappel.</b> Le diviseur $(X - 1)^2$ est de degré $2$, donc $R = aX + b$ :</p>
$$X^n = (X - 1)^2Q + aX + b.$$
<p><b>Étape 2 : On évalue en $\cO{X = 1}$.</b></p>
$$1 = a + b.$$
<p><b>Étape 3 : On dérive, puis on évalue en $\cO{X = 1}$.</b> La dérivée de $(X - 1)^2Q$ est $2(X - 1)Q + (X - 1)^2Q'$, qui s'annule encore en $1$ :</p>
$$nX^{n-1} = 2(X - 1)Q + (X - 1)^2Q' + a\qquad\Longrightarrow\qquad n = a.$$
<p><b>Étape 4 : On résout.</b> $a = n$ et $b = 1 - a = 1 - n$ :</p>
$$\cG{R = nX + 1 - n}.$$
<p>Contrôle avec $n = 2$ : $X^2 = (X - 1)^2 + 2X - 1$, et la formule donne $2X - 1$.</p>

<h2 id="q-rac">5. Racines et multiplicité</h2>
<div class="sbox">$$P(a) = 0\iff(X - a)\mid P.\qquad a\ \text{racine d'ordre}\ m\iff P(a) = P'(a) = \cdots = P^{(m-1)}(a) = 0\ \text{et}\ P^{(m)}(a)\neq0.$$</div>
<ul>
<li>Un polynôme non nul de degré $n$ a <b>au plus $n$ racines</b> (comptées avec multiplicité).</li>
<li>Conséquence : un polynôme qui a une infinité de racines est nul. C'est ainsi qu'on prouve que deux polynômes sont égaux.</li>
<li>$P$ réel : si $z$ est racine, $\overline z$ aussi, avec la même multiplicité.</li>
</ul>
<p class="ml">Exemple : la multiplicité de $1$ dans $P = X^4 - 2X^3 + 2X - 1$</p>
<p><b>Étape 1 : Rappel.</b> $a$ est racine d'ordre $m$ si $P(a) = P'(a) = \cdots = P^{(m-1)}(a) = 0$ et $P^{(m)}(a)\neq0$.</p>
<p><b>Étape 2 : $P(1)$.</b></p>
$$P(1) = 1 - 2 + 2 - 1 = 0.$$
<p><b>Étape 3 : $P'(1)$.</b></p>
$$P' = 4X^3 - 6X^2 + 2,\qquad P'(1) = 4 - 6 + 2 = 0.$$
<p><b>Étape 4 : $P''(1)$.</b></p>
$$P'' = 12X^2 - 12X,\qquad P''(1) = 12 - 12 = 0.$$
<p><b>Étape 5 : $P'''(1)$.</b></p>
$$P''' = 24X - 12,\qquad P'''(1) = 12\neq0.$$
<p><b>Étape 6 : Conclusion.</b> La première dérivée non nulle est la troisième : $1$ est racine d'ordre $\cG3$, donc $(X - 1)^3\mid P$. Le quotient est de degré $1$, unitaire : $P = (X - 1)^3(X + c)$. En $X = 0$ : $-1 = (-1)^3c$, donc $c = 1$ :</p>
$$\cG{P = (X - 1)^3(X + 1)}.$$

<h2 id="q-fact">6. Factoriser</h2>
<div class="sbox">$$\textbf{D'Alembert-Gauss}:\ \text{tout polynôme non constant de}\ \mathbb C[X]\ \text{a une racine, donc est scindé}.$$</div>
<ul>
<li><b>Irréductibles de $\mathbb C[X]$</b> : les polynômes de degré $1$.</li>
<li><b>Irréductibles de $\mathbb R[X]$</b> : les degrés $1$, et les degrés $2$ de discriminant $\Delta\lt0$.</li>
<li>Pour factoriser dans $\mathbb R$ : factoriser dans $\mathbb C$, puis <b>regrouper chaque racine avec sa conjuguée</b> :</li>
</ul>
$$(X - z)(X - \overline z) = X^2 - 2\operatorname{Re}(z)\,X + |z|^2.$$
<p class="ml">Exemple 1 : $X^4 + 1$</p>
<p><b>Étape 1 : Rappel.</b> Dans $\mathbb R[X]$, on regroupe chaque racine complexe avec sa conjuguée :</p>
$$(X - z)(X - \overline z) = X^2 - 2\operatorname{Re}(z)\,X + |z|^2.$$
<p><b>Étape 2 : Les racines dans $\mathbb C$.</b> $z^4 = -1 = e^{i\pi}$. On pose $z = e^{i\varphi}$ : $4\varphi = \pi + 2k\pi$, donc $\varphi = \frac\pi4 + \frac{k\pi}2$, $k = 0, 1, 2, 3$ :</p>
$$\cV{e^{i\pi/4}},\qquad\cV{e^{3i\pi/4}},\qquad\cV{e^{5i\pi/4} = e^{-3i\pi/4}},\qquad\cV{e^{7i\pi/4} = e^{-i\pi/4}}.$$
<p><b>Étape 3 : Premier couple de conjuguées.</b> $\operatorname{Re}(e^{i\pi/4}) = \cos\frac\pi4 = \frac{\sqrt2}2$ et $|z| = 1$ :</p>
$$\big(X - e^{i\pi/4}\big)\big(X - e^{-i\pi/4}\big) = X^2 - 2\cdot\frac{\sqrt2}2X + 1 = X^2 - \sqrt2X + 1.$$
<p><b>Étape 4 : Second couple.</b> $\cos\frac{3\pi}4 = -\frac{\sqrt2}2$ :</p>
$$\big(X - e^{3i\pi/4}\big)\big(X - e^{-3i\pi/4}\big) = X^2 + \sqrt2X + 1.$$
<p><b>Étape 5 : Conclusion.</b> Ces deux trinômes ont $\Delta = 2 - 4\lt0$ : ils sont irréductibles.</p>
$$\cG{X^4 + 1 = (X^2 - \sqrt2X + 1)(X^2 + \sqrt2X + 1)}.$$
<p>Astuce plus rapide : $X^4 + 1 = (X^2 + 1)^2 - 2X^2 = (X^2 + 1 - \sqrt2X)(X^2 + 1 + \sqrt2X)$.</p>

<p class="ml">Exemple 2 : $X^6 - 1$</p>
<p><b>Étape 1 : Rappel.</b> Les racines de $X^n - 1$ sont les $e^{2ik\pi/n}$, $0\leqslant k\leqslant n - 1$. On regroupe les conjuguées avec $(X - z)(X - \overline z) = X^2 - 2\operatorname{Re}(z)X + 1$ (car $|z| = 1$).</p>
<p><b>Étape 2 : Les six racines.</b> Avec $n = 6$, $\frac{2k\pi}6 = \frac{k\pi}3$ :</p>
$$\cV1,\qquad\cV{e^{\pm i\pi/3}},\qquad\cV{e^{\pm2i\pi/3}},\qquad\cV{e^{i\pi} = -1}.$$
<p><b>Étape 3 : Les racines réelles</b> donnent $(X - 1)(X + 1)$.</p>
<p><b>Étape 4 : Le couple $e^{\pm i\pi/3}$.</b> $2\cos\frac\pi3 = 1$ :</p>
$$X^2 - X + 1.$$
<p><b>Étape 5 : Le couple $e^{\pm2i\pi/3}$.</b> $2\cos\frac{2\pi}3 = -1$ :</p>
$$X^2 + X + 1.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{X^6 - 1 = (X - 1)(X + 1)(X^2 - X + 1)(X^2 + X + 1)}.$$

<h2 id="q-viete">7. Relations coefficients-racines</h2>
<p>Si $P = a_nX^n + \cdots + a_0$ est scindé, de racines $x_1, \dots, x_n$ :</p>
<div class="sbox">$$\sigma_1 = \sum_ix_i = -\frac{a_{n-1}}{a_n},\qquad\sigma_2 = \sum_{i\lt j}x_ix_j = \frac{a_{n-2}}{a_n},\qquad\dots,\qquad\sigma_n = \prod_ix_i = (-1)^n\frac{a_0}{a_n}.$$</div>
<p>Degré 2 : $x_1 + x_2 = -\frac ba$ et $x_1x_2 = \frac ca$. Degré 3 : $\sigma_1 = -\frac ba$, $\sigma_2 = \frac ca$, $\sigma_3 = -\frac da$.</p>
<p class="ml">Exemple : $x_1, x_2, x_3$ racines de $X^3 - 2X + 5$</p>
<p><b>Étape 1 : Rappel.</b> Pour $X^3 + a_2X^2 + a_1X + a_0$ unitaire : $\sigma_1 = -a_2$, $\sigma_2 = a_1$, $\sigma_3 = -a_0$.</p>
<p><b>Étape 2 : On lit les coefficients.</b> $X^3 + 0X^2 - 2X + 5$ :</p>
$$\sigma_1 = x_1 + x_2 + x_3 = 0,\qquad\sigma_2 = x_1x_2 + x_1x_3 + x_2x_3 = -2,\qquad\sigma_3 = x_1x_2x_3 = -5.$$
<p><b>Étape 3 : La somme des carrés.</b> On développe $\sigma_1^2 = (x_1 + x_2 + x_3)^2 = \sum x_i^2 + 2\sigma_2$, donc :</p>
$$x_1^2 + x_2^2 + x_3^2 = \sigma_1^2 - 2\sigma_2 = 0 - 2\times(-2) = \cG4.$$
<p><b>Étape 4 : La somme des inverses.</b> Même dénominateur $x_1x_2x_3$ :</p>
$$\frac1{x_1} + \frac1{x_2} + \frac1{x_3} = \frac{x_2x_3 + x_1x_3 + x_1x_2}{x_1x_2x_3} = \frac{\sigma_2}{\sigma_3} = \frac{-2}{-5} = \cG{\frac25}.$$

<h2 id="q-lag">8. L'interpolation de Lagrange</h2>
<div class="sbox">$$x_0, \dots, x_n\ \text{distincts}:\quad L_i = \prod_{j\neq i}\frac{X - x_j}{x_i - x_j},\quad L_i(x_j) = \delta_{i,j},\qquad P = \sum_{i=0}^ny_iL_i\ \text{est l'unique}\ P\in\mathbb K_n[X]\ \text{avec}\ P(x_i) = y_i.$$</div>
<p class="ml">Exemple : $P(0) = 1$, $P(1) = 3$, $P(2) = 7$</p>
<p><b>Étape 1 : Rappel.</b> Avec $x_0 = 0$, $x_1 = 1$, $x_2 = 2$ :</p>
$$L_i = \prod_{j\neq i}\frac{X - x_j}{x_i - x_j},\qquad P = y_0L_0 + y_1L_1 + y_2L_2.$$
<p><b>Étape 2 : $L_0$</b> (on enlève le facteur de $x_0$) :</p>
$$L_0 = \frac{(X - 1)(X - 2)}{(0 - 1)(0 - 2)} = \frac{X^2 - 3X + 2}2.$$
<p><b>Étape 3 : $L_1$.</b></p>
$$L_1 = \frac{(X - 0)(X - 2)}{(1 - 0)(1 - 2)} = -(X^2 - 2X).$$
<p><b>Étape 4 : $L_2$.</b></p>
$$L_2 = \frac{(X - 0)(X - 1)}{(2 - 0)(2 - 1)} = \frac{X^2 - X}2.$$
<p><b>Étape 5 : On assemble</b> avec $y_0 = 1$, $y_1 = 3$, $y_2 = 7$ :</p>
$$P = \frac{X^2 - 3X + 2}2 - 3(X^2 - 2X) + 7\cdot\frac{X^2 - X}2 = \frac{8X^2 - 10X + 2}2 - 3X^2 + 6X = 4X^2 - 5X + 1 - 3X^2 + 6X.$$
$$\cG{P = X^2 + X + 1}.$$
<p>Contrôle : $P(0) = 1$, $P(1) = 3$, $P(2) = 7$.</p>

<h2 id="q-pgcd">9. PGCD, Bézout, Gauss</h2>
<div class="sbox">$$\textbf{Bézout}:\ A\wedge B = 1\iff\exists\,U, V,\ AU + BV = 1.\qquad\textbf{Gauss}:\ A\mid BC\ \text{et}\ A\wedge B = 1\ \Longrightarrow\ A\mid C.$$</div>
<ul>
<li>Le PGCD (unitaire) s'obtient par l'algorithme d'Euclide : c'est le dernier reste non nul.</li>
<li>Dans $\mathbb C[X]$ : $A\wedge B = 1\iff A$ et $B$ n'ont <b>aucune racine commune</b>.</li>
<li>$a_1, \dots, a_n$ distincts : si chaque $(X - a_i)$ divise $P$, alors $\prod(X - a_i)$ divise $P$.</li>
</ul>
<p class="ml">Exemple : PGCD de $X^4 - 1$ et $X^3 - 1$, avec une relation de Bézout</p>
<p><b>Étape 1 : Rappel.</b> Algorithme d'Euclide : on divise, puis on remplace le couple $(A, B)$ par $(B, R)$. Le PGCD est le dernier reste non nul.</p>
<p><b>Étape 2 : Première division.</b> $X^4 - 1$ par $X^3 - 1$ :</p>
$$X^4 - 1 = X\cdot(X^3 - 1) + \cR{(X - 1)}.$$
<p><b>Étape 3 : Deuxième division.</b> $X^3 - 1$ par le reste $X - 1$ :</p>
$$X^3 - 1 = (X - 1)(X^2 + X + 1) + 0.$$
<p><b>Étape 4 : Le PGCD.</b> Le dernier reste non nul est $X - 1$ (déjà unitaire) :</p>
$$\cG{(X^4 - 1)\wedge(X^3 - 1) = X - 1}.$$
<p><b>Étape 5 : Bézout.</b> On isole le reste dans l'étape 2 :</p>
$$X - 1 = (X^4 - 1)\cdot\cG1 + (X^3 - 1)\cdot\cG{(-X)}.$$

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
<p>Contrôle en $X = 0$ : $F(0) = \frac3{6} = \frac12$ et $\frac23 + \frac1{30} - \frac15 = \frac{20 + 1 - 6}{30} = \frac12$.</p>
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
$$0 = a + b\ \Longrightarrow\ \cR{b = \frac19}.\qquad\text{Contrôle en}\ X = 0:\ \frac1{2} = -\frac1{18} - \frac19 + \frac23 = \frac{-1 - 2 + 12}{18} = \frac12.$$
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
<p>Contrôle en $X = 1$ : $\frac32 = 2 + \frac{-1}2$.</p>
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
<p><b>Étape 1 : Rappel.</b> Si $\deg P\geqslant\deg Q$, on commence par la partie entière. Pour un pôle simple $a$ : $c = \big[(X - a)F\big]_{X = a}$.</p>
<p><b>Étape 2 : Partie entière ($3\geqslant2$).</b> On divise $X^3$ par $X^2 - 3X + 2$ :</p>
$$X^3 = (X^2 - 3X + 2)(X + 3) + 7X - 6.$$
<p>Contrôle : $(X^2 - 3X + 2)(X + 3) = X^3 + 3X^2 - 3X^2 - 9X + 2X + 6 = X^3 - 7X + 6$.</p>
<p><b>Étape 3 : Factoriser le dénominateur.</b> Racine évidente $1$, produit des racines $2$ :</p>
$$X^2 - 3X + 2 = \cB{(X - 1)(X - 2)}.$$
<p><b>Étape 4 : La forme.</b></p>
$$\frac{7X - 6}{(X - 1)(X - 2)} = \frac a{X - 1} + \frac b{X - 2}.$$
<p><b>Étape 5 : Le coefficient $a$.</b> On cache $(X - 1)$ et on remplace $X$ par $1$ :</p>
$$\cR a = \frac{7\times1 - 6}{1 - 2} = -1.$$
<p><b>Étape 6 : Le coefficient $b$.</b> On cache $(X - 2)$ et on remplace $X$ par $2$ :</p>
$$\cR b = \frac{7\times2 - 6}{2 - 1} = 8.$$
<p><b>Étape 7 : Conclusion.</b></p>
$$\cG{\frac{X^3}{X^2 - 3X + 2} = X + 3 - \frac1{X - 1} + \frac8{X - 2}}.$$
<p>Contrôle en $X = 0$ : à gauche $0$, à droite $3 + 1 - 4 = 0$.</p>

<p class="ml">Exercice 15 B : $\dfrac{X + 1}{(X + 2)(X - 1)^2}$</p>
<p><b>Étape 1 : Rappel.</b> Pôle double : on obtient le coefficient de la plus haute puissance en cachant $(X - 1)^2$. L'autre se trouve avec $\lim_{X\to+\infty}XF(X)$.</p>
<p><b>Étape 2 : La forme.</b> Degré $1\lt3$, pas de partie entière :</p>
$$F = \frac a{X + 2} + \frac b{X - 1} + \frac c{(X - 1)^2}.$$
<p><b>Étape 3 : Le coefficient $a$.</b> On cache $(X + 2)$, $X = -2$ :</p>
$$\cR a = \frac{-2 + 1}{(-2 - 1)^2} = -\frac19.$$
<p><b>Étape 4 : Le coefficient $c$.</b> On cache $(X - 1)^2$, $X = 1$ :</p>
$$\cR c = \frac{1 + 1}{1 + 2} = \frac23.$$
<p><b>Étape 5 : Le coefficient $b$.</b> On multiplie par $X$ et $X\to+\infty$. À gauche, $XF(X)\sim\frac{X^2}{X^3}\to0$ ; à droite, il reste $a + b$ :</p>
$$0 = a + b\qquad\Longrightarrow\qquad\cR{b = \frac19}.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{F = -\frac{1/9}{X + 2} + \frac{1/9}{X - 1} + \frac{2/3}{(X - 1)^2}}.$$
<p>Contrôle en $X = 0$ : $F(0) = \frac12$ et $-\frac1{18} - \frac19 + \frac23 = \frac{-1 - 2 + 12}{18} = \frac12$.</p>

<p class="ml">Exercice 15 C : $\dfrac{X^5 + 1}{(X^2 - X)^2}$</p>
<p><b>Étape 1 : Rappel.</b> Partie entière si $\deg P\geqslant\deg Q$. Pour un pôle double $a$, le coefficient de $\frac1{(X - a)^2}$ s'obtient en cachant, celui de $\frac1{X - a}$ par un DL de $(X - a)^2F$ au voisinage de $a$.</p>
<p><b>Étape 2 : Le dénominateur.</b></p>
$$(X^2 - X)^2 = \big(X(X - 1)\big)^2 = \cB{X^2(X - 1)^2} = X^4 - 2X^3 + X^2.$$
<p><b>Étape 3 : La partie entière ($5\geqslant4$).</b> Le quotient commence par $X$, puis $+2$ :</p>
$$(X + 2)(X^4 - 2X^3 + X^2) = X^5 - 3X^3 + 2X^2,\qquad X^5 + 1 = (X + 2)(X^4 - 2X^3 + X^2) + 3X^3 - 2X^2 + 1.$$
<p><b>Étape 4 : La forme.</b></p>
$$F = X + 2 + \frac aX + \frac b{X^2} + \frac c{X - 1} + \frac d{(X - 1)^2}.$$
<p><b>Étape 5 : Les plus hautes puissances.</b> On cache $X^2$ puis $(X - 1)^2$ :</p>
$$\cR b = \Big[\frac{X^5 + 1}{(X - 1)^2}\Big]_{X = 0} = \frac11 = 1,\qquad\cR d = \Big[\frac{X^5 + 1}{X^2}\Big]_{X = 1} = \frac21 = 2.$$
<p><b>Étape 6 : Le coefficient $a$, par un DL en $0$.</b> $X^2F = \frac{X^5 + 1}{(X - 1)^2} = b + aX + o(X)$. Avec $(1 - X)^{-2} = 1 + 2X + o(X)$ :</p>
$$\frac{X^5 + 1}{(1 - X)^2} = (1 + X^5)(1 + 2X + o(X)) = 1 + 2X + o(X)\qquad\Longrightarrow\qquad\cR{a = 2}.$$
<p><b>Étape 7 : Le coefficient $c$, par un DL en $1$.</b> On pose $\cO{X = 1 + h}$ : $(X - 1)^2F = \frac{X^5 + 1}{X^2} = d + ch + o(h)$.</p>
$$(1 + h)^5 + 1 = 2 + 5h + o(h),\qquad\frac1{(1 + h)^2} = 1 - 2h + o(h),\qquad(2 + 5h)(1 - 2h) = 2 + h + o(h)\qquad\Longrightarrow\qquad\cR{c = 1}.$$
<p><b>Étape 8 : Conclusion.</b></p>
$$\cG{\frac{X^5 + 1}{(X^2 - X)^2} = X + 2 + \frac2X + \frac1{X^2} + \frac1{X - 1} + \frac2{(X - 1)^2}}.$$
<p>Contrôle en $X = -1$ : à gauche $0$, à droite $1 - 2 + 1 - \frac12 + \frac12 = 0$.</p>

<p class="ml">Exercice 15 D : $\dfrac{X^3 + 1}{X^3 - 1}$ dans $\mathbb C(X)$ et $\mathbb R(X)$</p>
<p><b>Étape 1 : Rappel.</b> Pour un pôle simple $\omega$ de $\frac PQ$ : $c = \frac{P(\omega)}{Q'(\omega)}$. Dans $\mathbb R(X)$, on regroupe deux pôles conjugués.</p>
<p><b>Étape 2 : Partie entière.</b> Même degré en haut et en bas :</p>
$$\frac{X^3 + 1}{X^3 - 1} = \frac{(X^3 - 1) + 2}{X^3 - 1} = 1 + \frac2{X^3 - 1}.$$
<p><b>Étape 3 : Les pôles.</b> $X^3 - 1 = (X - 1)(X - j)(X - j^2)$, trois pôles simples $\cB{1, j, j^2}$.</p>
<p><b>Étape 4 : Les coefficients</b> de $\frac2{X^3 - 1}$, avec $Q' = 3X^2$ et $\omega^3 = 1$ (donc $\frac1{\omega^2} = \omega$) :</p>
$$c_\omega = \frac2{3\omega^2} = \frac{2\omega}3:\qquad c_1 = \frac23,\qquad c_j = \frac{2j}3,\qquad c_{j^2} = \frac{2j^2}3.$$
<p><b>Étape 5 : Dans $\mathbb C(X)$.</b></p>
$$\cG{\frac{X^3 + 1}{X^3 - 1} = 1 + \frac23\Big(\frac1{X - 1} + \frac j{X - j} + \frac{j^2}{X - j^2}\Big)}.$$
<p><b>Étape 6 : On regroupe $j$ et $j^2 = \overline j$.</b> Avec $j + \overline j = -1$ et $j\overline j = 1$ :</p>
$$\frac j{X - j} + \frac{\overline j}{X - \overline j} = \frac{j(X - \overline j) + \overline j(X - j)}{(X - j)(X - \overline j)} = \frac{(j + \overline j)X - 2j\overline j}{X^2 + X + 1} = \frac{-X - 2}{X^2 + X + 1}.$$
<p><b>Étape 7 : Dans $\mathbb R(X)$.</b></p>
$$\cG{\frac{X^3 + 1}{X^3 - 1} = 1 + \frac{2/3}{X - 1} - \frac23\cdot\frac{X + 2}{X^2 + X + 1}}.$$
<p>Contrôle en $X = 0$ : $-1 = 1 - \frac23 - \frac43$.</p>

<p class="ml">Exercice 15 E : $\dfrac{X^4 + X + 1}{X(X^2 + 1)^3}$</p>
<p><b>Étape 1 : Rappel.</b> $X^2 + 1$ est irréductible dans $\mathbb R$ ; à la puissance $3$, il apporte trois termes $\frac{\alpha_kX + \beta_k}{(X^2 + 1)^k}$.</p>
<p><b>Étape 2 : La forme</b> (7 inconnues pour un dénominateur de degré 7) :</p>
$$F = \frac aX + \frac{\alpha_1X + \beta_1}{X^2 + 1} + \frac{\alpha_2X + \beta_2}{(X^2 + 1)^2} + \frac{\alpha_3X + \beta_3}{(X^2 + 1)^3}.$$
<p><b>Étape 3 : Le pôle $0$.</b> On cache $X$ et on remplace $X$ par $0$ :</p>
$$\cR a = \frac{0 + 0 + 1}{(0 + 1)^3} = 1.$$
<p><b>Étape 4 : On retire $\frac1X$.</b> Avec $(X^2 + 1)^3 = X^6 + 3X^4 + 3X^2 + 1$ :</p>
$$F - \frac1X = \frac{X^4 + X + 1 - (X^2 + 1)^3}{X(X^2 + 1)^3} = \frac{-X^6 - 2X^4 - 3X^2 + X}{X(X^2 + 1)^3} = \frac{-X^5 - 2X^3 - 3X + 1}{(X^2 + 1)^3}.$$
<p><b>Étape 5 : On écrit le numérateur en puissances de $Y = X^2 + 1$.</b> On remplace $X^2 = Y - 1$, donc $X^3 = X(Y - 1)$ et $X^5 = X(Y - 1)^2$ :</p>
$$-X(Y^2 - 2Y + 1) - 2X(Y - 1) - 3X + 1 = -XY^2 + \cancel{2XY} - X - \cancel{2XY} + 2X - 3X + 1 = -XY^2 - 2X + 1.$$
<p><b>Étape 6 : On divise par $Y^3$.</b></p>
$$\frac{-XY^2 - 2X + 1}{Y^3} = -\frac X{Y} + \frac{1 - 2X}{Y^3}.$$
<p><b>Étape 7 : Conclusion.</b></p>
$$\cG{\frac{X^4 + X + 1}{X(X^2 + 1)^3} = \frac1X - \frac X{X^2 + 1} + \frac{1 - 2X}{(X^2 + 1)^3}}.$$
<p>Contrôle en $X = 1$ : $\frac38 = 1 - \frac12 - \frac18$.</p>

<p class="ml">Exercice 15 F : $\dfrac{X^{n-1}}{X^n - 1}$ dans $\mathbb C(X)$</p>
<p><b>Étape 1 : Rappel.</b> Pôle simple $\omega$ de $\frac PQ$ : $c = \frac{P(\omega)}{Q'(\omega)}$.</p>
<p><b>Étape 2 : Les pôles.</b> $X^n - 1$ a $n$ racines simples, les $\cB{\omega_k = e^{2ik\pi/n}}$, $0\leqslant k\leqslant n - 1$. Le degré du numérateur ($n - 1$) est plus petit : pas de partie entière.</p>
<p><b>Étape 3 : Les coefficients.</b> $P = X^{n-1}$ et $Q' = nX^{n-1}$ :</p>
$$c_k = \frac{\omega_k^{n-1}}{n\,\omega_k^{n-1}} = \frac1n.$$
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{\frac{X^{n-1}}{X^n - 1} = \frac1n\sum_{k=0}^{n-1}\frac1{X - \omega_k}}.$$
<p>Remarque : c'est $\frac1n\cdot\frac{Q'}Q$, la dérivée logarithmique de $Q$ divisée par $n$.</p>

<p class="ml">Exercice 15 G : $\dfrac1{X^n - 1}$ dans $\mathbb C(X)$</p>
<p><b>Étape 1 : Rappel.</b> Pôle simple : $c = \frac{P(\omega)}{Q'(\omega)}$.</p>
<p><b>Étape 2 : Les pôles.</b> Les $\cB{\omega_k = e^{2ik\pi/n}}$, simples.</p>
<p><b>Étape 3 : Les coefficients.</b> $P = 1$, $Q' = nX^{n-1}$, et on multiplie en haut et en bas par $\omega_k$ en utilisant $\omega_k^n = 1$ :</p>
$$c_k = \frac1{n\,\omega_k^{n-1}} = \frac{\omega_k}{n\,\omega_k^n} = \frac{\omega_k}n.$$
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{\frac1{X^n - 1} = \frac1n\sum_{k=0}^{n-1}\frac{\omega_k}{X - \omega_k}}.$$

<p class="ml">Exercice 15 H : $\dfrac1{(X - 1)(X^n - 1)}$ dans $\mathbb C(X)$</p>
<p><b>Étape 1 : Rappel.</b> Pôle simple : $\frac{P(\omega)}{Q'(\omega)}$. Pôle double $a$ : on écrit $(X - a)^2F = g$, alors le coefficient de $\frac1{(X - a)^2}$ est $g(a)$ et celui de $\frac1{X - a}$ est $g'(a)$.</p>
<p><b>Étape 2 : Repérer le pôle double.</b> $1$ est racine de $X^n - 1$, donc $1$ est racine double du dénominateur. On écrit $X^n - 1 = (X - 1)\Phi$, avec $\Phi = 1 + X + \cdots + X^{n-1}$ :</p>
$$(X - 1)(X^n - 1) = (X - 1)^2\,\Phi.$$
<p><b>Étape 3 : Les pôles simples</b> $\omega_k$, $1\leqslant k\leqslant n - 1$. On cache $(X - \omega_k)$ dans $X^n - 1$ grâce à la dérivée $n\omega_k^{n-1} = \frac n{\omega_k}$ :</p>
$$c_k = \frac1{(\omega_k - 1)\cdot n\,\omega_k^{n-1}} = \frac{\omega_k}{n(\omega_k - 1)}.$$
<p><b>Étape 4 : Le coefficient de $\frac1{(X - 1)^2}$.</b> $g = \frac1\Phi$ et $\Phi(1) = n$ :</p>
$$g(1) = \frac1n.$$
<p><b>Étape 5 : Le coefficient de $\frac1{X - 1}$.</b> $g' = -\frac{\Phi'}{\Phi^2}$ et $\Phi'(1) = 1 + 2 + \cdots + (n - 1) = \frac{n(n - 1)}2$ :</p>
$$g'(1) = -\frac{n(n - 1)/2}{n^2} = -\frac{n - 1}{2n}.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\frac1{(X - 1)(X^n - 1)} = \frac1{n(X - 1)^2} - \frac{n - 1}{2n(X - 1)} + \sum_{k=1}^{n-1}\frac{\omega_k}{n(\omega_k - 1)(X - \omega_k)}}.$$
<p>Contrôle avec $n = 2$ : $\frac1{(X - 1)^2(X + 1)} = \frac{1/2}{(X - 1)^2} - \frac{1/4}{X - 1} + \frac{1/4}{X + 1}$.</p>

<p class="ml">Exercice 15 I : $\dfrac1{X^{2n} - 1}$ dans $\mathbb C(X)$ et $\mathbb R(X)$</p>
<p><b>Étape 1 : Rappel.</b> Pôle simple : $\frac{P(\omega)}{Q'(\omega)}$. Deux pôles conjugués $\omega$, $\overline\omega$ de coefficients $c$, $\overline c$ se regroupent en :</p>
$$\frac c{X - \omega} + \frac{\overline c}{X - \overline\omega} = \frac{2\operatorname{Re}(c)X - 2\operatorname{Re}(c\overline\omega)}{X^2 - 2\operatorname{Re}(\omega)X + |\omega|^2}.$$
<p><b>Étape 2 : Les pôles.</b> $X^{2n} - 1$ a $2n$ racines simples $\cB{\omega_k = e^{ik\pi/n}}$, $0\leqslant k\leqslant2n - 1$.</p>
<p><b>Étape 3 : Les coefficients</b> (comme en G, avec $2n$ à la place de $n$) :</p>
$$c_k = \frac{\omega_k}{2n}.$$
<p><b>Étape 4 : Dans $\mathbb C(X)$.</b></p>
$$\cG{\frac1{X^{2n} - 1} = \frac1{2n}\sum_{k=0}^{2n-1}\frac{\omega_k}{X - \omega_k}}.$$
<p><b>Étape 5 : Les pôles réels.</b> $\omega_0 = 1$ (coefficient $\frac1{2n}$) et $\omega_n = -1$ (coefficient $-\frac1{2n}$).</p>
<p><b>Étape 6 : Les couples conjugués</b> $\omega_k$ et $\omega_{2n-k} = \overline{\omega_k}$, $1\leqslant k\leqslant n - 1$. Ici $2\operatorname{Re}(c) = \frac1n\cos\frac{k\pi}n$, $c\,\overline{\omega_k} = \frac{|\omega_k|^2}{2n} = \frac1{2n}$, et $|\omega_k| = 1$ :</p>
$$\frac{\omega_k/2n}{X - \omega_k} + \frac{\overline{\omega_k}/2n}{X - \overline{\omega_k}} = \frac1n\cdot\frac{\cos\frac{k\pi}n\,X - 1}{X^2 - 2\cos\frac{k\pi}n\,X + 1}.$$
<p><b>Étape 7 : Dans $\mathbb R(X)$.</b></p>
$$\cG{\frac1{X^{2n} - 1} = \frac1{2n}\Big(\frac1{X - 1} - \frac1{X + 1}\Big) + \frac1n\sum_{k=1}^{n-1}\frac{\cos\frac{k\pi}n\,X - 1}{X^2 - 2\cos\frac{k\pi}n\,X + 1}}.$$
<p>Contrôle avec $n = 1$ : $\frac1{X^2 - 1} = \frac12\Big(\frac1{X - 1} - \frac1{X + 1}\Big)$.</p>

<p class="ml">Exercice 15 J : $\dfrac1{(X - 1)(X - 2)\cdots(X - n)}$</p>
<p><b>Étape 1 : Rappel.</b> Pôles simples : on cache le facteur et on évalue au pôle.</p>
<p><b>Étape 2 : La forme.</b> Les pôles $1, 2, \dots, n$ sont simples :</p>
$$\frac1{(X - 1)(X - 2)\cdots(X - n)} = \sum_{k=1}^n\frac{c_k}{X - k}.$$
<p><b>Étape 3 : On cache $(X - k)$ et on remplace $X$ par $k$.</b></p>
$$c_k = \prod_{j\neq k}\frac1{k - j} = \frac1{\underbrace{(k - 1)(k - 2)\cdots1}_{j\lt k}\times\underbrace{(-1)(-2)\cdots(k - n)}_{j > k}}.$$
<p><b>Étape 4 : On compte.</b> Le premier produit vaut $(k - 1)!$. Le second a $n - k$ facteurs négatifs : il vaut $(-1)^{n-k}(n - k)!$.</p>
$$c_k = \frac{(-1)^{n-k}}{(k - 1)!\,(n - k)!}.$$
<p><b>Étape 5 : Conclusion</b>, en faisant apparaître $\binom{n - 1}{k - 1} = \frac{(n - 1)!}{(k - 1)!(n - k)!}$ :</p>
$$\cG{\frac1{\prod_{j=1}^n(X - j)} = \frac1{(n - 1)!}\sum_{k=1}^n\frac{(-1)^{n-k}\binom{n - 1}{k - 1}}{X - k}}.$$

<p class="ml">Exercice 16 : $P$ scindé sur $\mathbb R$, montrer $P'(x)^2 - P(x)P''(x)\geqslant0$</p>
<p><b>Étape 1 : Rappel.</b> Si $P = \lambda\prod_{i=1}^n(X - a_i)$, alors $\frac{P'}P = \sum_{i=1}^n\frac1{X - a_i}$ (dérivée logarithmique).</p>
<p><b>Étape 2 : Le cas $P$ constant.</b> $P' = P'' = 0$, l'expression vaut $0\geqslant0$.</p>
<p><b>Étape 3 : $P$ scindé.</b> $P = \lambda\prod_{i=1}^n(X - a_i)$ avec les $a_i$ réels (comptés avec multiplicité).</p>
<p><b>Étape 4 : En un $x$ où $P(x)\neq0$.</b></p>
$$\frac{P'(x)}{P(x)} = \sum_{i=1}^n\frac1{x - a_i}.$$
<p><b>Étape 5 : On dérive cette égalité.</b> À gauche, la dérivée d'un quotient ; à droite, $\big(\frac1{x - a_i}\big)' = -\frac1{(x - a_i)^2}$ :</p>
$$\frac{P''(x)P(x) - P'(x)^2}{P(x)^2} = -\sum_{i=1}^n\frac1{(x - a_i)^2}.$$
<p><b>Étape 6 : On multiplie par $-P(x)^2$.</b></p>
$$P'(x)^2 - P(x)P''(x) = P(x)^2\sum_{i=1}^n\frac1{(x - a_i)^2} > 0.$$
<p><b>Étape 7 : En une racine $x = a_i$.</b> $P(x) = 0$, donc l'expression vaut $P'(x)^2\geqslant0$.</p>
<p><b>Étape 8 : Conclusion.</b> $\cG{P'(x)^2 - P(x)P''(x)\geqslant0}$ pour tout réel $x$.</p>

<p class="ml">Exercice 17 : $\sum_{k=1}^n\frac{x_k^j}{P'(x_k)}$ pour $0\leqslant j\leqslant n - 1$</p>
<p><b>Étape 1 : Rappel.</b> Pour un pôle simple $x_k$ de $\frac AP$ : $c_k = \frac{A(x_k)}{P'(x_k)}$.</p>
<p><b>Étape 2 : La décomposition.</b> $\deg X^j = j\lt n = \deg P$ et les $x_k$ sont distincts, donc simples :</p>
$$\frac{X^j}{P} = \sum_{k=1}^n\frac{x_k^j}{P'(x_k)}\cdot\frac1{X - x_k}.$$
<p><b>Étape 3 : On multiplie par $\cO X$.</b></p>
$$\frac{X^{j+1}}{P} = \sum_{k=1}^n\frac{x_k^j}{P'(x_k)}\cdot\frac X{X - x_k}.$$
<p><b>Étape 4 : On fait tendre $X$ vers $+\infty$ à droite.</b> Chaque $\frac X{X - x_k}\to1$ : on obtient la somme cherchée, $S_j = \sum_k\frac{x_k^j}{P'(x_k)}$.</p>
<p><b>Étape 5 : À gauche.</b> $P$ est unitaire de degré $n$, donc $\frac{X^{j+1}}P\sim X^{j+1-n}$ :</p>
$$\frac{X^{j+1}}{P}\xrightarrow[X\to+\infty]{}\left\{\begin{aligned}&0&&\text{si}\ j\leqslant n - 2\\&1&&\text{si}\ j = n - 1\end{aligned}\right.$$
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\sum_{k=1}^n\frac{x_k^j}{P'(x_k)} = 0\ (0\leqslant j\leqslant n - 2),\qquad\sum_{k=1}^n\frac{x_k^{n-1}}{P'(x_k)} = 1}.$$

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
`,
"Nombres réels et suites numériques": R`
<nav class="msum"><a href="#r-not">Notations</a><a href="#r-abs">Valeur absolue</a><a href="#r-tri">Inégalité triangulaire</a><a href="#r-ent">Partie entière</a><a href="#r-dec">Approximation décimale</a><a href="#r-sup">Borne supérieure</a><a href="#r-seq">Caractérisation séquentielle</a><a href="#r-int">Intervalles</a><a href="#r-dens">Densité</a><a href="#r-ach">Droite achevée</a><a href="#s-vocab">Suites</a><a href="#s-lim">Limite</a><a href="#s-op">Formes indéterminées</a><a href="#s-comp">Comparaison</a><a href="#s-mono">Monotone, adjacentes</a><a href="#s-part">Récurrences linéaires</a><a href="#s-rec">$u_{n+1} = f(u_n)$</a><a href="#s-cpx">Complexes</a><a href="#r-enonce">L'énoncé</a><a href="#r-erreurs">Erreurs</a><a href="#r-entrainement">S'entraîner</a><a href="#r-exos">Exercices</a><a href="#r-arbre">Arbre des réels</a><a href="#s-arbre">Arbre des suites</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la partie $\cB A$ et ses éléments $\cB a$. <span class="kR">rouge</span> : les majorants, minorants et bornes $\cR M$, $\cR{\sup A}$, $\cR{\inf A}$. <span class="kO">orange</span> : la marge $\cO\varepsilon$. <span class="kV">violet</span> : les entiers ($\cV n$, $\cV p$, $\cV{\lfloor x\rfloor}$). <span class="kG">vert</span> : les conclusions.</p>

<h2 id="r-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Valeur absolue</td><td>$|x| = \max(x, -x)$</td><td>$|x| = x$ si $x\geq0$, $|x| = -x$ si $x\leq0$.</td></tr>
<tr><td>Distance</td><td>$|x - y|$</td><td>La distance entre $x$ et $y$ sur la droite.</td></tr>
<tr><td>Partie entière</td><td>$\cV{\lfloor x\rfloor}$</td><td>Le plus grand entier $\leq x$. Ancienne notation : $E(x)$ ou $[x]$.</td></tr>
<tr><td>Partie fractionnaire</td><td>$x - \lfloor x\rfloor$</td><td>Toujours dans $[0, 1[$.</td></tr>
<tr><td>Décimaux</td><td>$\mathbb D = \{\frac{\cV p}{10^{\cV n}},\ p\in\mathbb Z,\ n\in\mathbb N\}$</td><td>$\mathbb Z\subset\mathbb D\subset\mathbb Q\subset\mathbb R$.</td></tr>
<tr><td>Bornes</td><td>$\cR{\sup A}$, $\cR{\inf A}$</td><td>Le plus petit majorant, le plus grand minorant.</td></tr>
<tr><td>Extremums</td><td>$\max A$, $\min A$</td><td>Une borne qui <b>appartient</b> à $A$.</td></tr>
<tr><td>Droite achevée</td><td>$\overline{\mathbb R} = \mathbb R\cup\{-\infty, +\infty\}$</td><td>$-\infty \lt x \lt +\infty$ pour tout réel $x$.</td></tr>
</table>

<h2 id="r-abs">2. Valeur absolue : les règles de calcul</h2>
<div class="sbox">$$|x|\geq0,\qquad|x| = 0\iff x = 0,\qquad|xy| = |x|\,|y|,\qquad\Big|\frac xy\Big| = \frac{|x|}{|y|}\ (y\neq0),\qquad|x|^2 = x^2,\qquad\sqrt{x^2} = |x|.$$</div>
<p>Pour $\cR a\geq0$ (la marge autorisée), on traduit une valeur absolue en encadrement :</p>
<div class="sbox">$$|X|\leq\cR a\iff-\cR a\leq X\leq\cR a\qquad\qquad|X|\geq\cR a\iff\big(X\leq-\cR a\ \text{ou}\ X\geq\cR a\big)$$
$$|x - c|\leq\cR r\iff x\in[c - \cR r,\ c + \cR r]\qquad\text{(boule de centre } c\text{, de rayon } r\text{)}$$</div>
<p>Et aussi : $-|x|\leq x\leq|x|$, $|x| = |y|\iff x = \pm y$, $|x|\leq|y|\iff x^2\leq y^2$.</p>
<p class="ml piege">Piège</p>
<p>$|x|\geq a$ donne une <b>réunion</b> de deux morceaux, pas un encadrement. Et $\sqrt{x^2} = |x|$, pas $x$.</p>

<p class="ml">Exemple 1 : une seule valeur absolue</p>
<p>Résoudre $|2x - 1|\leq3$.</p>
<p><b>Étape 1 : Rappel.</b> $|X|\leq\cR a\iff-\cR a\leq X\leq\cR a$, valable pour $\cR a\geq0$.</p>
<p><b>Étape 2 : On l'applique</b> avec $X = 2x - 1$ et $\cR a = 3\geq0$ :</p>
$$|2x - 1|\leq3\iff-3\leq2x - 1\leq3.$$
<p><b>Étape 3 : On ajoute $1$</b> aux trois membres :</p>
$$-3 + 1\leq2x\leq3 + 1\iff-2\leq2x\leq4.$$
<p><b>Étape 4 : On divise par $2 > 0$</b> (le sens ne change pas) :</p>
$$-1\leq x\leq2.$$
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{\mathcal S = [-1,\ 2]}.$$
<p>Contrôle : le centre est $\frac12$, le rayon $\frac32$, et $|2x - 1|\leq3\iff|x - \frac12|\leq\frac32$.</p>

<p class="ml">Exemple 2 : plusieurs valeurs absolues</p>
<p>Résoudre $|x - 1| + |x + 2| = 5$.</p>
<p><b>Étape 1 : Rappel.</b> $|X| = X$ si $X\geq0$, et $|X| = -X$ si $X\leq0$. Avec plusieurs valeurs absolues, on découpe $\mathbb R$ aux points où chacune change de signe.</p>
<p><b>Étape 2 : Les points de coupure.</b> $x - 1 = 0$ pour $x = 1$, et $x + 2 = 0$ pour $x = -2$.</p>
<table class="mtab">
<tr><th>$x$</th><th>$x \lt -2$</th><th>$-2\leq x\leq1$</th><th>$x > 1$</th></tr>
<tr><td>$|x - 1|$</td><td>$-x + 1$</td><td>$-x + 1$</td><td>$x - 1$</td></tr>
<tr><td>$|x + 2|$</td><td>$-x - 2$</td><td>$x + 2$</td><td>$x + 2$</td></tr>
<tr><td>somme</td><td>$(-x + 1) + (-x - 2) = -2x - 1$</td><td>$(-x + 1) + (x + 2) = 3$</td><td>$(x - 1) + (x + 2) = 2x + 1$</td></tr>
</table>
<p><b>Étape 3 : Sur $]-\infty, -2[$.</b> On résout :</p>
$$-2x - 1 = 5\iff-2x = 5 + 1 = 6\iff x = \frac6{-2} = -3.$$
<p>Et $-3 \lt -2$ : $-3$ est bien dans le morceau, on le garde.</p>
<p><b>Étape 4 : Sur $[-2, 1]$.</b> L'équation devient $3 = 5$ : impossible, aucune solution.</p>
<p><b>Étape 5 : Sur $]1, +\infty[$.</b> On résout :</p>
$$2x + 1 = 5\iff2x = 5 - 1 = 4\iff x = \frac42 = 2.$$
<p>Et $2 > 1$ : on garde $x = 2$.</p>
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\mathcal S = \{-3,\ 2\}}.$$
<p>Vérification : pour $x = -3$, $|-3 - 1| + |-3 + 2| = |-4| + |-1| = 4 + 1 = 5$ ; pour $x = 2$, $|2 - 1| + |2 + 2| = 1 + 4 = 5$.</p>

<h2 id="r-tri">3. L'inégalité triangulaire</h2>
<div class="sbox">$$\big||x| - |y|\big|\ \leq\ |x + y|\ \leq\ |x| + |y|$$
$$\text{Égalité à droite}\iff x\ \text{et}\ y\ \text{de même signe}\ (xy\geq0).\qquad\Big|\sum_{k=1}^{\cV n}x_k\Big|\leq\sum_{k=1}^{\cV n}|x_k|.$$</div>
<p class="ml">Pourquoi (à savoir refaire)</p>
<p>Les deux membres sont positifs, on compare les carrés : $|x + y|^2 = x^2 + 2xy + y^2\leq x^2 + 2|xy| + y^2 = (|x| + |y|)^2$, car $xy\leq|xy|$. L'égalité a lieu si et seulement si $xy = |xy|$, c'est-à-dire $xy\geq0$.</p>

<p class="ml">Exemple 3 : la seconde inégalité triangulaire</p>
<p>Montrer que $\big||x| - |y|\big|\leq|x - y|$ pour tous réels $x, y$.</p>
<p><b>Étape 1 : Rappel.</b> $|a + b|\leq|a| + |b|$, et $|X|\leq\cR a\iff-\cR a\leq X\leq\cR a$.</p>
<p><b>Étape 2 : On écrit $x = (x - y) + y$</b> et on applique l'inégalité triangulaire :</p>
$$|x| = |(x - y) + y|\leq|x - y| + |y|\quad\text{donc}\quad|x| - |y|\leq|x - y|.$$
<p><b>Étape 3 : On échange les rôles</b> : $y = (y - x) + x$ donne $|y| - |x|\leq|y - x| = |x - y|$, donc :</p>
$$-|x - y|\leq|x| - |y|.$$
<p><b>Étape 4 : On regroupe</b> les deux inégalités :</p>
$$-|x - y|\leq|x| - |y|\leq|x - y|.$$
<p><b>Étape 5 : Conclusion</b> avec le rappel de l'étape 1, pour $\cR a = |x - y|$ :</p>
$$\cG{\big||x| - |y|\big|\leq|x - y|}.$$

<p class="ml">Exemple 4 : majorer une expression</p>
<p>Montrer que $|x^2\sin x - 3\cos(2x)|\leq7$ pour tout $x\in[-2, 2]$.</p>
<p><b>Étape 1 : Rappel.</b> $|a - b|\leq|a| + |b|$ (inégalité triangulaire avec $-b$), et $|ab| = |a|\,|b|$.</p>
<p><b>Étape 2 : On sépare</b> les deux termes :</p>
$$|x^2\sin x - 3\cos(2x)|\leq|x^2\sin x| + |3\cos(2x)| = x^2\,|\sin x| + 3\,|\cos(2x)|.$$
<p><b>Étape 3 : On majore chaque morceau.</b> Sur $[-2, 2]$, $x^2\leq4$. Toujours, $|\sin x|\leq1$ et $|\cos(2x)|\leq1$.</p>
$$x^2\,|\sin x|\leq4\times1 = 4,\qquad3\,|\cos(2x)|\leq3.$$
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{|x^2\sin x - 3\cos(2x)|\leq4 + 3 = 7.}$$
<p class="ml piege">Piège</p>
<p>On ne majore jamais une différence $|a - b|$ par $|a| - |b|$ : le signe moins devient un plus.</p>

<h2 id="r-ent">4. La partie entière</h2>
<div class="sbox">$$\cV{\lfloor x\rfloor} = \cV n\iff\Big(\cV n\in\mathbb Z\ \ \text{et}\ \ \cV n\leq x \lt \cV n + 1\Big)$$
$$x - 1 \lt \lfloor x\rfloor\leq x,\qquad\lfloor x + \cV m\rfloor = \lfloor x\rfloor + \cV m\ \ (\cV m\in\mathbb Z),\qquad x\leq y\Rightarrow\lfloor x\rfloor\leq\lfloor y\rfloor.$$</div>
<p>Exemples : $\lfloor 2{,}7\rfloor = 2$, $\lfloor-2{,}5\rfloor = -3$ (et non $-2$), $\lfloor\pi\rfloor = 3$, $\lfloor-1\rfloor = -1$.</p>
<p class="ml piege">Attention</p>
<p>En général $\lfloor x + y\rfloor\neq\lfloor x\rfloor + \lfloor y\rfloor$ : $\lfloor0{,}5 + 0{,}5\rfloor = 1$ mais $\lfloor0{,}5\rfloor + \lfloor0{,}5\rfloor = 0$. De même, $x \lt y$ ne donne pas $\lfloor x\rfloor \lt \lfloor y\rfloor$ ($\lfloor0{,}2\rfloor = \lfloor0{,}7\rfloor$). L'égalité $\lfloor x + m\rfloor = \lfloor x\rfloor + m$ n'est vraie que pour $m$ <b>entier</b>.</p>
<p class="ml">La méthode</p>
<p><b>1.</b> Une équation $\lfloor X\rfloor = n$ se traduit en encadrement $n\leq X \lt n + 1$. <b>2.</b> Pour une identité, on pose $x = \lfloor x\rfloor + \theta$ avec $\theta\in[0, 1[$ et on découpe selon $\theta$. <b>3.</b> Pour montrer $\lfloor y\rfloor = n$, on montre $n\in\mathbb Z$ et $n\leq y \lt n + 1$.</p>

<p class="ml">Exemple 5 : une équation</p>
<p>Résoudre $\lfloor2x - 1\rfloor = 3$.</p>
<p><b>Étape 1 : Rappel.</b> $\lfloor X\rfloor = \cV n\iff\cV n\leq X \lt \cV n + 1$, pour $\cV n\in\mathbb Z$.</p>
<p><b>Étape 2 : On l'applique</b> avec $X = 2x - 1$ et $\cV n = 3$ :</p>
$$\lfloor2x - 1\rfloor = 3\iff3\leq2x - 1 \lt 4.$$
<p><b>Étape 3 : On ajoute $1$</b> :</p>
$$4\leq2x \lt 5.$$
<p><b>Étape 4 : On divise par $2 > 0$</b> :</p>
$$2\leq x \lt \frac52.$$
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{\mathcal S = \Big[2,\ \frac52\Big[}.$$
<p>Contrôle : $x = 2$ donne $\lfloor3\rfloor = 3$, et $x = 2{,}49$ donne $\lfloor3{,}98\rfloor = 3$.</p>

<p class="ml">Exemple 6 : une inégalité sur une somme</p>
<p>Montrer que $\lfloor x\rfloor + \lfloor y\rfloor\leq\lfloor x + y\rfloor\leq\lfloor x\rfloor + \lfloor y\rfloor + 1$.</p>
<p><b>Étape 1 : Rappel.</b> $\lfloor x\rfloor\leq x \lt \lfloor x\rfloor + 1$, et $\lfloor X\rfloor = \cV n\iff\cV n\leq X \lt \cV n + 1$.</p>
<p><b>Étape 2 : On écrit les deux encadrements</b> et on les additionne :</p>
$$\lfloor x\rfloor\leq x \lt \lfloor x\rfloor + 1,\quad\lfloor y\rfloor\leq y \lt \lfloor y\rfloor + 1\quad\Longrightarrow\quad\cV p\leq x + y \lt \cV p + 2,\qquad\cV p = \lfloor x\rfloor + \lfloor y\rfloor\in\mathbb Z.$$
<p><b>Étape 3 : Inégalité de gauche.</b> $\cV p$ est un entier $\leq x + y$, et $\lfloor x + y\rfloor$ est le <b>plus grand</b> entier $\leq x + y$, donc $\cV p\leq\lfloor x + y\rfloor$.</p>
<p><b>Étape 4 : Inégalité de droite.</b> $\lfloor x + y\rfloor\leq x + y \lt \cV p + 2$. Un entier strictement plus petit que l'entier $\cV p + 2$ est $\leq\cV p + 1$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{\lfloor x\rfloor + \lfloor y\rfloor\leq\lfloor x + y\rfloor\leq\lfloor x\rfloor + \lfloor y\rfloor + 1}.$$

<p class="ml">Exemple 7 : une identité classique</p>
<p>Pour $n\in\mathbb N^*$ et $x\in\mathbb R$, montrer que $\Big\lfloor\dfrac{\lfloor nx\rfloor}n\Big\rfloor = \lfloor x\rfloor$.</p>
<p><b>Étape 1 : Rappel.</b> Pour montrer $\lfloor Y\rfloor = \cV k$, on montre $\cV k\in\mathbb Z$ et $\cV k\leq Y \lt \cV k + 1$.</p>
<p><b>Étape 2 : On pose $\cV k = \lfloor x\rfloor$</b> et on part de sa définition, multipliée par $n > 0$ :</p>
$$\cV k\leq x \lt \cV k + 1\quad\Longrightarrow\quad n\cV k\leq nx \lt n\cV k + n.$$
<p><b>Étape 3 : On passe à la partie entière.</b> $n\cV k$ est un entier $\leq nx$, donc $n\cV k\leq\lfloor nx\rfloor$. Et $\lfloor nx\rfloor\leq nx \lt n\cV k + n$.</p>
$$n\cV k\leq\lfloor nx\rfloor \lt n\cV k + n.$$
<p><b>Étape 4 : On divise par $n > 0$</b> :</p>
$$\cV k\leq\frac{\lfloor nx\rfloor}n \lt \cV k + 1.$$
<p><b>Étape 5 : Conclusion</b> par le rappel, avec $Y = \frac{\lfloor nx\rfloor}n$ :</p>
$$\cG{\Big\lfloor\frac{\lfloor nx\rfloor}n\Big\rfloor = \lfloor x\rfloor}.$$

<h2 id="r-dec">5. Les approximations décimales</h2>
<div class="sbox">$$\text{Pour}\ \cV n\in\mathbb N:\qquad d_n = \frac{\lfloor10^{\cV n}x\rfloor}{10^{\cV n}}\ \leq\ x\ \lt\ d_n + \frac1{10^{\cV n}} = \frac{\lfloor10^{\cV n}x\rfloor + 1}{10^{\cV n}}.$$</div>
<p>$d_n$ est l'approximation décimale <b>par défaut</b> à $10^{-n}$ près, $d_n + 10^{-n}$ celle <b>par excès</b>. Ce sont des décimaux, donc des rationnels, et $0\leq x - d_n \lt 10^{-n}$, donc $d_n\to x$ : <b>tout réel est limite d'une suite de rationnels</b>.</p>

<p class="ml">Exemple 8 : $\sqrt2$ à $10^{-2}$ près</p>
<p><b>Étape 1 : Rappel.</b> $d_2 = \frac{\lfloor10^2x\rfloor}{10^2}$, avec $x = \sqrt2$. Il faut donc $\lfloor100\sqrt2\rfloor$.</p>
<p><b>Étape 2 : On écrit $100\sqrt2 = \sqrt{20000}$</b> et on cherche l'entier $\cV n$ tel que $\cV n\leq\sqrt{20000} \lt \cV n + 1$, c'est-à-dire $\cV n^2\leq20000 \lt (\cV n + 1)^2$ (tout est positif).</p>
<p><b>Étape 3 : On calcule deux carrés.</b></p>
<p>Le calcul, avec $(a + 1)^2 = a^2 + 2a + 1$ :</p>
$$141^2 = (140 + 1)^2 = 140^2 + 2\times140 + 1 = 19600 + 280 + 1 = 19881\leq20000,$$
$$142^2 = (141 + 1)^2 = 19881 + 2\times141 + 1 = 19881 + 282 + 1 = 20164 > 20000.$$
<p><b>Étape 4 : On lit la partie entière.</b> $141\leq100\sqrt2 \lt 142$, donc $\lfloor100\sqrt2\rfloor = \cV{141}$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{1{,}41\leq\sqrt2 \lt 1{,}42}:\quad1{,}41\ \text{par défaut},\ 1{,}42\ \text{par excès}.$$

<h2 id="r-sup">6. Borne supérieure, borne inférieure</h2>
<p class="ml">Les définitions</p>
<p>Soit $\cB A$ une partie de $\mathbb R$. $\cR M$ est un <b>majorant</b> de $\cB A$ si $\forall\cB a\in\cB A,\ \cB a\leq\cR M$. La <b>borne supérieure</b> $\cR{\sup A}$ est le plus petit des majorants. Si elle appartient à $\cB A$, c'est le <b>maximum</b> $\max A$.</p>
<div class="sbox">$$\textbf{Propriété de la borne supérieure : toute partie de}\ \mathbb R\ \textbf{non vide et majorée admet une borne supérieure.}$$</div>
<p>De même, toute partie non vide et minorée admet une borne inférieure. C'est ce qui distingue $\mathbb R$ de $\mathbb Q$ : $\{x\in\mathbb Q,\ x^2 \lt 2\}$ n'a pas de borne supérieure <b>dans $\mathbb Q$</b>.</p>
<p class="ml">La caractérisation avec $\varepsilon$</p>
<div class="sbox">$$\cR M = \sup\cB A\iff\begin{cases}\forall\cB a\in\cB A,\ \cB a\leq\cR M&(\cR M\ \text{est un majorant})\\\forall\cO\varepsilon > 0,\ \exists\cB a\in\cB A,\ \cR M - \cO\varepsilon \lt \cB a&(\text{on ne peut pas descendre})\end{cases}$$
$$\cR m = \inf\cB A\iff\begin{cases}\forall\cB a\in\cB A,\ \cR m\leq\cB a\\\forall\cO\varepsilon > 0,\ \exists\cB a\in\cB A,\ \cB a \lt \cR m + \cO\varepsilon\end{cases}$$</div>
<p class="ml">La méthode en trois temps</p>
<p><b>1.</b> Deviner le candidat $\cR M$ (calculer quelques éléments, étudier les variations). <b>2.</b> Montrer que $\cR M$ majore $\cB A$. <b>3.</b> Montrer qu'aucun nombre plus petit ne majore : avec $\cO\varepsilon$, ou avec une suite d'éléments de $\cB A$ qui tend vers $\cR M$ (§7). Enfin, regarder si $\cR M\in\cB A$ pour savoir si c'est un max.</p>

<p class="ml">Exemple 9 : $A = \{1 - \frac1n,\ n\in\mathbb N^*\}$</p>
<p><b>Étape 1 : Rappel.</b> $\cR M = \sup\cB A\iff$ $\cR M$ majore $\cB A$ et $\forall\cO\varepsilon > 0,\ \exists\cB a\in\cB A,\ \cB a > \cR M - \cO\varepsilon$.</p>
<p><b>Étape 2 : Le candidat.</b> Les éléments sont $0, \frac12, \frac23, \frac34,\dots$ : ils croissent vers $1$. Candidat : $\cR M = 1$.</p>
<p><b>Étape 3 : $1$ est un majorant.</b> Pour tout $n\geq1$, $\frac1n > 0$, donc $1 - \frac1n \lt 1$.</p>
<p><b>Étape 4 : On ne peut pas descendre.</b> Soit $\cO\varepsilon > 0$. On cherche $n$ tel que $1 - \frac1n > 1 - \cO\varepsilon$. On transforme :</p>
$$1 - \frac1n > 1 - \cO\varepsilon\iff-\frac1n > -\cO\varepsilon\iff\frac1n \lt \cO\varepsilon\iff n > \frac1{\cO\varepsilon}.$$
<p>(On a retranché $1$, multiplié par $-1$ en retournant l'inégalité, puis inversé deux nombres positifs, ce qui retourne encore.) L'entier $\cV n = \lfloor\frac1{\cO\varepsilon}\rfloor + 1$ convient. Exemple : $\cO\varepsilon = 0{,}1$ donne $\cV n = 11$ et $1 - \frac1{11}\approx0{,}909 > 0{,}9$.</p>
<p><b>Étape 5 : Pas de maximum.</b> Par l'étape 3, aucun élément n'est égal à $1$, donc $1\notin\cB A$.</p>
<p><b>Étape 6 : La borne inférieure.</b> $n\mapsto1 - \frac1n$ croît, donc $1 - \frac1n\geq1 - 1 = 0$, valeur atteinte en $n = 1$.</p>
<p><b>Étape 7 : Conclusion.</b></p>
$$\cG{\sup A = 1\ \text{(pas de max)},\qquad\inf A = \min A = 0}.$$

<p class="ml">Exemple 10 : $A = \{(-1)^n + \frac1n,\ n\in\mathbb N^*\}$</p>
<p><b>Étape 1 : Rappel.</b> Si $\cR M\in\cB A$ et $\cR M$ majore $\cB A$, alors $\cR M = \max A = \sup A$. Pour l'inf, on utilise : $\cR m$ minore $\cB A$ et $\forall\cO\varepsilon > 0,\ \exists\cB a\in\cB A,\ \cB a \lt \cR m + \cO\varepsilon$.</p>
<p><b>Étape 2 : On calcule quelques termes</b> : $n = 1$ : $-1 + 1 = 0$ ; $n = 2$ : $1 + \frac12 = \frac32$ ; $n = 3$ : $-1 + \frac13 = -\frac23$ ; $n = 4$ : $1 + \frac14 = \frac54$. On sépare donc pairs et impairs.</p>
$$n = 2k:\ \ \cB a = 1 + \frac1{2k}\in\Big]1,\ \frac32\Big],\qquad n = 2k + 1:\ \ \cB a = -1 + \frac1{2k + 1}\in\Big]-1,\ 0\Big].$$
<p><b>Étape 3 : Le sup.</b> Le plus grand terme pair est en $k = 1$ : $\frac32$. Tous les termes impairs sont $\leq0 \lt \frac32$. Donc $\frac32$ majore $\cB A$, et $\frac32\in\cB A$ ($n = 2$).</p>
<p><b>Étape 4 : L'inf.</b> Tous les éléments sont $> -1$, donc $-1$ minore $\cB A$. Soit $\cO\varepsilon > 0$ : on prend $n$ impair avec $\frac1n \lt \cO\varepsilon$, alors $\cB a = -1 + \frac1n \lt -1 + \cO\varepsilon$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{\sup A = \max A = \frac32,\qquad\inf A = -1\ \text{(pas de min)}}.$$

<h2 id="r-seq">7. La caractérisation séquentielle</h2>
<div class="sbox">$$\text{Si}\ \cR M\ \text{majore}\ \cB A:\qquad\cR M = \sup\cB A\iff\text{il existe une suite}\ (\cB{a_n})\ \text{d'éléments de}\ \cB A\ \text{telle que}\ \cB{a_n}\to\cR M.$$</div>
<p>C'est souvent plus rapide que $\varepsilon$ : on exhibe une suite. Dans l'exemple 9, $\cB{a_n} = 1 - \frac1n\to1$ suffit.</p>
<p class="ml">Passer au sup</p>
<p>Si $\forall\cB a\in\cB A,\ \cB a\leq\cR K$, alors $\sup A\leq\cR K$ (car $\sup$ est le <b>plus petit</b> majorant). Et $A\subset B$ donne $\sup A\leq\sup B$.</p>

<p class="ml">Exemple 11 : $A = \{x\in\mathbb Q,\ x^2 \lt 2\}$</p>
<p><b>Étape 1 : Rappel.</b> Si $\cR M$ majore $\cB A$ et si une suite d'éléments de $\cB A$ tend vers $\cR M$, alors $\cR M = \sup\cB A$.</p>
<p><b>Étape 2 : $\sqrt2$ est un majorant.</b> Si $x\in\cB A$, $x^2 \lt 2$ donne $|x| \lt \sqrt2$ (la racine croît), donc $x \lt \sqrt2$.</p>
<p><b>Étape 3 : Une suite d'éléments de $\cB A$.</b> On prend les approximations décimales par défaut $\cB{d_n} = \frac{\lfloor10^n\sqrt2\rfloor}{10^n}$ du §5 : ce sont des rationnels, et $0\leq\cB{d_n}\leq\sqrt2$.</p>
<p><b>Étape 4 : Elles sont dans $\cB A$.</b> $\sqrt2$ est irrationnel et $\cB{d_n}$ rationnel, donc $\cB{d_n}\neq\sqrt2$ : $0\leq\cB{d_n} \lt \sqrt2$, donc $\cB{d_n}^2 \lt 2$.</p>
<p><b>Étape 5 : Elles tendent vers $\sqrt2$.</b> $0\leq\sqrt2 - \cB{d_n} \lt 10^{-n}\to0$ (théorème d'encadrement).</p>
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\sup A = \sqrt2},\ \text{et}\ \sqrt2\notin A\ \text{(irrationnel) : pas de maximum}.$$

<p class="ml">Exemple 12 : $\sup(A + B) = \sup A + \sup B$</p>
<p>$A, B$ non vides et majorées, $A + B = \{a + b,\ a\in A,\ b\in B\}$.</p>
<p><b>Étape 1 : Rappel.</b> Caractérisation séquentielle, et « passer au sup » : un majorant de tous les éléments majore le sup.</p>
<p><b>Étape 2 : $A + B$ a un sup.</b> Elle est non vide. Pour $a\in A$, $b\in B$ : $a\leq\sup A$ et $b\leq\sup B$, donc $a + b\leq\cR{\sup A + \sup B}$. Elle est majorée, donc $\sup(A + B)$ existe.</p>
<p><b>Étape 3 : Une suite qui tend vers $\cR{\sup A + \sup B}$.</b> Par la caractérisation séquentielle, il existe $a_n\in A$ avec $a_n\to\sup A$ et $b_n\in B$ avec $b_n\to\sup B$. Alors $a_n + b_n\in A + B$ et :</p>
$$a_n + b_n\longrightarrow\sup A + \sup B.$$
<p><b>Étape 4 : Conclusion</b> (majorant de l'étape 2 et suite de l'étape 3) :</p>
$$\cG{\sup(A + B) = \sup A + \sup B}.$$

<h2 id="r-int">8. Les intervalles</h2>
<div class="sbox">$$I\ \text{est un intervalle}\iff\forall x, y\in I,\ \forall z\in\mathbb R,\ \big(x\leq z\leq y\Rightarrow z\in I\big).$$</div>
<p>Les intervalles de $\mathbb R$ sont exactement : $[a, b]$ (segment), $[a, b[$, $]a, b]$, $]a, b[$, $[a, +\infty[$, $]a, +\infty[$, $]-\infty, b]$, $]-\infty, b[$, $\mathbb R$ et $\varnothing$. Un singleton $\{a\} = [a, a]$ en est un.</p>
<p class="ml">Exemple 13 : l'intersection de deux intervalles</p>
<p>Montrer que si $I$ et $J$ sont des intervalles, $I\cap J$ en est un.</p>
<p><b>Étape 1 : Rappel.</b> $K$ est un intervalle $\iff$ pour tous $x, y\in K$ et $x\leq z\leq y$, on a $z\in K$.</p>
<p><b>Étape 2 : On fixe</b> $x, y\in I\cap J$ et $z$ avec $x\leq z\leq y$.</p>
<p><b>Étape 3 : Dans $I$.</b> $x, y\in I$ et $I$ est un intervalle, donc $z\in I$.</p>
<p><b>Étape 4 : Dans $J$.</b> De même $x, y\in J$, donc $z\in J$.</p>
<p><b>Étape 5 : Conclusion.</b> $z\in I\cap J$, donc $\cG{I\cap J\ \text{est un intervalle}}$.</p>
<p>La réunion ne marche pas : $[0, 1]\cup[2, 3]$ contient $1$ et $2$, mais pas $\frac32$.</p>

<h2 id="r-dens">9. La densité</h2>
<div class="sbox">$$\mathbb Q\ \text{et}\ \mathbb R\setminus\mathbb Q\ \text{sont denses dans}\ \mathbb R:\qquad\forall x \lt y,\ \ \exists r\in\mathbb Q\cap\,]x, y[\quad\text{et}\quad\exists s\in(\mathbb R\setminus\mathbb Q)\cap\,]x, y[.$$
$$\text{Version suites : tout réel est limite d'une suite de rationnels, et d'une suite d'irrationnels.}$$</div>
<p class="ml">La construction (à savoir refaire)</p>
<p><b>1.</b> On prend un entier $\cV n > \frac1{y - x}$ : les pas de longueur $\frac1n$ sont plus petits que l'intervalle. <b>2.</b> On pose $\cV p = \lfloor nx\rfloor + 1$. <b>3.</b> Alors $nx \lt \cV p\leq nx + 1 \lt ny$, donc $x \lt \frac{\cV p}{\cV n} \lt y$.</p>

<p class="ml">Exemple 14 : un rationnel entre $\sqrt2$ et $\sqrt2 + \frac1{100}$</p>
<p><b>Étape 1 : Rappel.</b> Avec $\cV n > \frac1{y - x}$ et $\cV p = \lfloor nx\rfloor + 1$, le rationnel $\frac{\cV p}{\cV n}$ est dans $]x, y[$.</p>
<p><b>Étape 2 : Le choix de $\cV n$.</b> $y - x = \frac1{100}$, donc $\frac1{y - x} = 100$. On prend $\cV n = 101$.</p>
<p><b>Étape 3 : Le calcul de $\cV p$.</b> On fait rentrer $101$ dans la racine :</p>
$$101\sqrt2 = \sqrt{101^2\times2} = \sqrt{10201\times2} = \sqrt{20402}.$$
<p>On encadre entre deux carrés : $142^2 = 20164\leq20402$ et $143^2 = 20164 + 2\times142 + 1 = 20449 > 20402$. Donc $142\leq101\sqrt2 \lt 143$, $\lfloor101\sqrt2\rfloor = 142$ et $\cV p = 142 + 1 = 143$.</p>
<p><b>Étape 4 : Vérification.</b> $\frac{143}{101}\approx1{,}41584$, $\sqrt2\approx1{,}41421$, $\sqrt2 + 0{,}01\approx1{,}42421$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{\sqrt2 \lt \frac{143}{101} \lt \sqrt2 + \frac1{100}}.$$

<p class="ml">Exemple 15 : la densité des irrationnels</p>
<p>Soient $x \lt y$. Montrer qu'il existe un irrationnel dans $]x, y[$.</p>
<p><b>Étape 1 : Rappel.</b> $\mathbb Q$ est dense : entre deux réels distincts, il y a un rationnel. Et si $r\in\mathbb Q$, $r + \sqrt2\notin\mathbb Q$.</p>
<p><b>Étape 2 : On décale de $\sqrt2$.</b> $x - \sqrt2 \lt y - \sqrt2$, donc il existe $r\in\mathbb Q$ avec :</p>
$$x - \sqrt2 \lt r \lt y - \sqrt2.$$
<p><b>Étape 3 : On ajoute $\sqrt2$</b> :</p>
$$x \lt r + \sqrt2 \lt y.$$
<p><b>Étape 4 : $r + \sqrt2$ est irrationnel.</b> Sinon $\sqrt2 = (r + \sqrt2) - r$ serait une différence de rationnels, donc rationnel : absurde.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{r + \sqrt2\in(\mathbb R\setminus\mathbb Q)\cap\,]x, y[}$.</p>

<h2 id="r-ach">10. La droite achevée $\overline{\mathbb R}$</h2>
<p>On ajoute $-\infty$ et $+\infty$ à $\mathbb R$, avec $-\infty \lt x \lt +\infty$ pour tout réel $x$. Conventions utiles :</p>
<div class="sbox">$$A\ \text{non vide, non majorée}:\ \sup A = +\infty.\qquad A\ \text{non vide, non minorée}:\ \inf A = -\infty.$$</div>
<p>Dans $\overline{\mathbb R}$, toute partie non vide a une borne supérieure. Exemple : $\sup\mathbb N = +\infty$, $\inf\{\frac1n,\ n\in\mathbb N^*\} = 0$. Les formes $+\infty - \infty$ et $0\times\infty$ restent indéterminées.</p>
<p class="ml">Bonus : l'intervalle ouvert est ouvert <span class="hp">hors programme</span></p>
<p>Un réel $x$ d'un intervalle $]a, b[$ y est « à l'aise » : avec $\cO\varepsilon = \min(x - a, b - x) > 0$, on a $]x - \cO\varepsilon, x + \cO\varepsilon[\subset]a, b[$. La notion d'ouvert et de fermé est traitée en Spé (topologie des espaces vectoriels normés).</p>

<h2 id="s-vocab">11. Suites : bornée, monotone, stationnaire</h2>
<p class="ml">Le code couleur des suites</p>
<p><span class="kB">bleu</span> : la suite $\cB{(u_n)}$. <span class="kR">rouge</span> : la limite $\cR\ell$, ou un majorant. <span class="kO">orange</span> : la marge $\cO\varepsilon$ et la suite qui encadre. <span class="kV">violet</span> : les rangs $\cV N$, $\cV n$. <span class="kG">vert</span> : la conclusion.</p>
<table class="mtab">
<tr><th>Propriété</th><th>Définition</th><th>Comment le montrer</th></tr>
<tr><td>majorée</td><td>$\exists M\in\mathbb R,\ \forall n,\ u_n\leq M$</td><td>Exhiber un $M$ qui ne dépend pas de $n$.</td></tr>
<tr><td>bornée</td><td>$\exists C\geq0,\ \forall n,\ |u_n|\leq C$</td><td>Majorée et minorée, ou majorer $|u_n|$.</td></tr>
<tr><td>croissante</td><td>$\forall n,\ u_n\leq u_{n+1}$</td><td>Signe de $u_{n+1} - u_n$.</td></tr>
<tr><td>croissante, $u_n > 0$</td><td>$\forall n,\ \frac{u_{n+1}}{u_n}\geq1$</td><td>Quotient, utile avec des puissances et des factorielles.</td></tr>
<tr><td>$u_n = f(n)$</td><td>$f$ croissante sur $[0, +\infty[$</td><td>$(u_n)$ croissante (étudier $f'$).</td></tr>
<tr><td>stationnaire</td><td>$\exists N,\ \exists c,\ \forall n\geq N,\ u_n = c$</td><td>Constante à partir d'un rang.</td></tr>
</table>
<p class="ml piege">Piège</p>
<p>Le quotient $\frac{u_{n+1}}{u_n}$ ne marche que si $u_n > 0$. Et « $u_n = f(n)$ avec $f$ croissante » ne s'applique pas aux suites récurrentes $u_{n+1} = f(u_n)$ (§18).</p>

<p class="ml">Exemple 16 : monotonie par le quotient</p>
<p>Étudier la monotonie de $u_n = \dfrac n{2^n}$, $n\geq1$.</p>
<p><b>Étape 1 : Rappel.</b> Si $\cB{u_n} > 0$ : $\frac{\cB{u_{n+1}}}{\cB{u_n}}\leq1$ pour tout $n\geq\cV N$ $\iff$ $(\cB{u_n})$ décroissante à partir du rang $\cV N$.</p>
<p><b>Étape 2 : Le signe.</b> Pour $n\geq1$, $n > 0$ et $2^n > 0$, donc $u_n > 0$.</p>
<p><b>Étape 3 : Le quotient.</b></p>
$$\frac{u_{n+1}}{u_n} = \frac{\frac{n + 1}{2^{n+1}}}{\frac n{2^n}} = \frac{n + 1}{2^{n+1}}\times\frac{2^n}n = \frac{n + 1}n\times\underbrace{\frac{2^n}{2^{n+1}}}_{=\frac12} = \frac{n + 1}{2n}.$$
<p><b>Étape 4 : On compare à $1$.</b> $\frac{n + 1}{2n}\leq1\iff n + 1\leq2n\iff n\geq1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{(u_n)\ \text{est décroissante}}$ (dès $n = 1$, avec $u_1 = u_2 = \frac12$).</p>

<p class="ml">Exemple 17 : monotonie par la différence, et encadrement</p>
<p>$u_n = \displaystyle\sum_{k=1}^n\frac1{n + k} = \frac1{n + 1} + \dots + \frac1{2n}$. Montrer que $(u_n)$ est croissante et que $\frac12\leq u_n\leq1$.</p>
<p><b>Étape 1 : Rappel.</b> $(\cB{u_n})$ croissante $\iff\cB{u_{n+1}} - \cB{u_n}\geq0$ pour tout $n$.</p>
<p><b>Étape 2 : On écrit les deux sommes</b> : $u_{n+1}$ va de $\frac1{n + 2}$ à $\frac1{2n + 2}$, $u_n$ de $\frac1{n + 1}$ à $\frac1{2n}$. Les termes $\frac1{n + 2},\dots,\frac1{2n}$ se simplifient :</p>
$$u_{n+1} = \underbrace{\frac1{n + 2} + \dots + \frac1{2n}}_{\text{communs}} + \frac1{2n + 1} + \frac1{2n + 2},\qquad u_n = \frac1{n + 1} + \underbrace{\frac1{n + 2} + \dots + \frac1{2n}}_{\text{communs}},$$
$$u_{n+1} - u_n = \frac1{2n + 1} + \frac1{2n + 2} - \frac1{n + 1}.$$
<p><b>Étape 3 : On simplifie.</b> $\frac1{n + 1} = \frac2{2n + 2}$, donc :</p>
$$u_{n+1} - u_n = \frac1{2n + 1} + \frac1{2n + 2} - \frac2{2n + 2} = \frac1{2n + 1} - \frac1{2n + 2} = \frac{(2n + 2) - (2n + 1)}{(2n + 1)(2n + 2)} = \frac1{(2n + 1)(2n + 2)} > 0.$$
<p><b>Étape 4 : L'encadrement.</b> Pour $1\leq k\leq n$ : $n + 1\leq n + k\leq2n$, donc $\frac1{2n}\leq\frac1{n + k}\leq\frac1{n + 1}$. On somme ces $n$ inégalités :</p>
$$\frac n{2n}\leq u_n\leq\frac n{n + 1}\quad\Longrightarrow\quad\frac12\leq u_n \lt 1.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{(u_n)\ \text{croissante, et}\ \frac12\leq u_n\leq1}$. Par le §15, elle converge (sa limite est $\ln2$, voir Intégration, sommes de Riemann).</p>

<h2 id="s-lim">12. Limite d'une suite</h2>
<div class="sbox">$$\cB{u_n}\to\cR\ell\iff\forall\cO\varepsilon > 0,\ \exists\cV N\in\mathbb N,\ \forall n\geq\cV N,\ |\cB{u_n} - \cR\ell|\leq\cO\varepsilon$$
$$\cB{u_n}\to+\infty\iff\forall A\in\mathbb R,\ \exists\cV N\in\mathbb N,\ \forall n\geq\cV N,\ \cB{u_n}\geq A$$</div>
<p><b>Unicité</b> : si la limite existe, elle est unique. Une suite <b>convergente</b> a une limite finie, sinon elle est <b>divergente</b> (limite infinie ou pas de limite).</p>
<p><b>Convergente $\Rightarrow$ bornée.</b> La réciproque est fausse : $(-1)^n$ est bornée et diverge.</p>
<p><b>Limite et signe</b> : si $u_n\to\ell > 0$, alors $u_n > 0$ à partir d'un rang (même $u_n > \frac\ell2$). Si $\ell\neq0$, $u_n\neq0$ à partir d'un rang.</p>
<p><b>Traductions utiles</b> :</p>
$$u_n\to\ell\iff u_n - \ell\to0\iff|u_n - \ell|\to0,\qquad u_n\to0\iff|u_n|\to0.$$
<p class="ml">Suites extraites</p>
<div class="sbox">$$\varphi:\mathbb N\to\mathbb N\ \text{strictement croissante}\ (\varphi(n)\geq n).\qquad u_n\to\cR\ell\ \Longrightarrow\ u_{\varphi(n)}\to\cR\ell.$$
$$u_{2n}\to\cR\ell\ \text{et}\ u_{2n+1}\to\cR\ell\iff u_n\to\cR\ell.$$</div>
<p><b>Pour montrer qu'une suite diverge</b> : trouver deux suites extraites de limites différentes (ou une extraite qui diverge).</p>

<p class="ml">Exemple 18 : une limite avec $\varepsilon$</p>
<p>Montrer avec la définition que $u_n = \dfrac{2n + 1}{n + 3}\to2$.</p>
<p><b>Étape 1 : Rappel.</b> $\cB{u_n}\to\cR\ell\iff\forall\cO\varepsilon > 0,\ \exists\cV N,\ \forall n\geq\cV N,\ |\cB{u_n} - \cR\ell|\leq\cO\varepsilon$.</p>
<p><b>Étape 2 : On calcule l'écart</b> à $\cR\ell = 2$ :</p>
$$u_n - 2 = \frac{2n + 1}{n + 3} - \frac{2(n + 3)}{n + 3} = \frac{2n + 1 - 2n - 6}{n + 3} = \frac{-5}{n + 3},\qquad|u_n - 2| = \frac5{n + 3}.$$
<p><b>Étape 3 : On résout</b> $|u_n - 2|\leq\cO\varepsilon$ :</p>
$$\frac5{n + 3}\leq\cO\varepsilon\iff n + 3\geq\frac5{\cO\varepsilon}\iff n\geq\frac5{\cO\varepsilon} - 3.$$
<p><b>Étape 4 : On choisit le rang.</b> $\cV N = \lfloor\frac5{\cO\varepsilon}\rfloor + 1$ convient : pour $n\geq\cV N$, $n > \frac5{\cO\varepsilon} > \frac5{\cO\varepsilon} - 3$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{u_n\to2}$.</p>

<p class="ml">Exemple 19 : montrer qu'une suite diverge</p>
<p>Montrer que $u_n = (-1)^n\dfrac{n}{n + 1}$ n'a pas de limite.</p>
<p><b>Étape 1 : Rappel.</b> Si $\cB{u_n}\to\cR\ell$, toute suite extraite tend vers $\cR\ell$. Deux extraites de limites différentes $\Rightarrow$ pas de limite.</p>
<p><b>Étape 2 : Les termes pairs.</b> $u_{2n} = \frac{2n}{2n + 1}\to1$.</p>
<p><b>Étape 3 : Les termes impairs.</b> $u_{2n+1} = -\frac{2n + 1}{2n + 2}\to-1$.</p>
<p><b>Étape 4 : Conclusion.</b> $1\neq-1$ : $\cG{(u_n)\ \text{diverge}}$ (elle est pourtant bornée par $1$).</p>

<h2 id="s-op">13. Opérations, formes indéterminées</h2>
<table class="mtab">
<tr><th>$u_n\to$</th><th>$v_n\to$</th><th>$u_n + v_n$</th><th>$u_nv_n$</th><th>$\frac{u_n}{v_n}$</th></tr>
<tr><td>$\ell$</td><td>$\ell'$</td><td>$\ell + \ell'$</td><td>$\ell\ell'$</td><td>$\frac\ell{\ell'}$ si $\ell'\neq0$</td></tr>
<tr><td>$\ell$</td><td>$\pm\infty$</td><td>$\pm\infty$</td><td>$\pm\infty$ si $\ell\neq0$ (règle des signes)</td><td>$0$</td></tr>
<tr><td>$+\infty$</td><td>$+\infty$</td><td>$+\infty$</td><td>$+\infty$</td><td>FI</td></tr>
<tr><td>$+\infty$</td><td>$-\infty$</td><td><b>FI</b></td><td>$-\infty$</td><td>FI</td></tr>
<tr><td>$0$</td><td>$\pm\infty$</td><td>$\pm\infty$</td><td><b>FI</b></td><td>$0$</td></tr>
<tr><td>$\ell\neq0$</td><td>$0$</td><td>$\ell$</td><td>$0$</td><td>$\pm\infty$ si $v_n$ de signe constant</td></tr>
</table>
<p>Les quatre formes indéterminées : $\infty - \infty$, $0\times\infty$, $\frac00$, $\frac\infty\infty$. Avec les puissances : $1^\infty$, $0^0$, $\infty^0$ (on passe par $e^{v_n\ln u_n}$).</p>
<div class="sbox">$$\textbf{Croissances comparées}\ (\alpha, \beta > 0,\ q > 1):\qquad(\ln n)^\alpha\ \ll\ n^\beta\ \ll\ q^n\ \ll\ n!\ \ll\ n^n.$$</div>
<p class="ml">La méthode pour lever une forme indéterminée</p>
<p><b>1.</b> Quotient de sommes : on factorise en haut et en bas par le <b>terme prépondérant</b>. <b>2.</b> Différence de racines : <b>quantité conjuguée</b>. <b>3.</b> Puissance $u_n^{v_n}$ : écrire $e^{v_n\ln u_n}$. <b>4.</b> Sinon : équivalents et DL (voir Analyse asymptotique).</p>

<p class="ml">Exemple 20 : factoriser par le terme prépondérant</p>
<p>Calculer $\lim\dfrac{3n^2 - n + 1}{2n^2 + 5}$.</p>
<p><b>Étape 1 : Rappel.</b> Pour $\frac\infty\infty$, on factorise en haut et en bas par le terme prépondérant, puis $\frac1n\to0$.</p>
<p><b>Étape 2 : On factorise par $n^2$</b> :</p>
$$\frac{3n^2 - n + 1}{2n^2 + 5} = \frac{n^2\big(3 - \frac1n + \frac1{n^2}\big)}{n^2\big(2 + \frac5{n^2}\big)} = \frac{3 - \frac1n + \frac1{n^2}}{2 + \frac5{n^2}}.$$
<p><b>Étape 3 : Les limites des morceaux.</b> $\frac1n\to0$, $\frac1{n^2}\to0$ : le numérateur tend vers $3$, le dénominateur vers $2\neq0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\lim\frac{3n^2 - n + 1}{2n^2 + 5} = \frac32}$.</p>

<p class="ml">Exemple 21 : la quantité conjuguée</p>
<p>Calculer $\lim\big(\sqrt{n^2 + n} - n\big)$.</p>
<p><b>Étape 1 : Rappel.</b> $(a - b)(a + b) = a^2 - b^2$ : on multiplie et divise par $a + b$ pour supprimer la racine.</p>
<p><b>Étape 2 : Forme indéterminée.</b> $\sqrt{n^2 + n}\to+\infty$ et $n\to+\infty$ : c'est $\infty - \infty$.</p>
<p><b>Étape 3 : On multiplie par le conjugué</b> :</p>
$$\sqrt{n^2 + n} - n = \frac{(\sqrt{n^2 + n} - n)(\sqrt{n^2 + n} + n)}{\sqrt{n^2 + n} + n} = \frac{n^2 + n - n^2}{\sqrt{n^2 + n} + n} = \frac n{\sqrt{n^2 + n} + n}.$$
<p><b>Étape 4 : On factorise par $n$</b> (avec $\sqrt{n^2 + n} = n\sqrt{1 + \frac1n}$ pour $n > 0$) :</p>
$$\frac n{n\sqrt{1 + \frac1n} + n} = \frac1{\sqrt{1 + \frac1n} + 1}\longrightarrow\frac1{1 + 1}.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{\lim\big(\sqrt{n^2 + n} - n\big) = \frac12}$.</p>

<p class="ml">Exemple 22 : croissances comparées</p>
<p>Calculer $\lim\dfrac{n^3 + 2^n}{3^n + n^2}$.</p>
<p><b>Étape 1 : Rappel.</b> $n^\beta\ll q^n$ pour $q > 1$ : $\frac{n^\beta}{q^n}\to0$. Et $q^n\to0$ si $|q| \lt 1$.</p>
<p><b>Étape 2 : Le terme prépondérant</b> est $3^n$ (en haut et en bas). On factorise par $3^n$ :</p>
$$\frac{n^3 + 2^n}{3^n + n^2} = \frac{\frac{n^3}{3^n} + \big(\frac23\big)^n}{1 + \frac{n^2}{3^n}}.$$
<p><b>Étape 3 : Les morceaux.</b> $\frac{n^3}{3^n}\to0$ et $\frac{n^2}{3^n}\to0$ (croissances comparées), $\big(\frac23\big)^n\to0$ car $\frac23 \lt 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\lim\frac{n^3 + 2^n}{3^n + n^2} = \frac{0 + 0}{1 + 0} = 0}$.</p>

<h2 id="s-comp">14. Théorèmes de comparaison</h2>
<div class="sbox">$$\textbf{Passage à la limite}:\ u_n\leq v_n\ \text{et}\ u_n\to\ell,\ v_n\to\ell'\ \Longrightarrow\ \ell\leq\ell'.\qquad\textbf{Encadrement}:\ \cO{a_n}\leq u_n\leq\cO{b_n},\ \cO{a_n}\to\cR\ell,\ \cO{b_n}\to\cR\ell\ \Longrightarrow\ u_n\to\cR\ell.$$
$$u_n\geq\cO{a_n}\to+\infty\Rightarrow u_n\to+\infty.\qquad|u_n - \cR\ell|\leq\cO{a_n}\to0\Rightarrow u_n\to\cR\ell.\qquad(u_n)\ \text{bornée},\ v_n\to0\Rightarrow u_nv_n\to0.$$</div>
<p class="ml piege">Piège</p>
<p>Le passage à la limite <b>transforme les inégalités strictes en larges</b> : $\frac1n > 0$ mais $\lim\frac1n = 0$. Et on ne passe à la limite qu'après avoir montré que les limites <b>existent</b>.</p>

<p class="ml">Exemple 23 : le théorème des gendarmes sur une somme</p>
<p>Calculer la limite de $u_n = \displaystyle\sum_{k=1}^n\frac n{n^2 + k}$.</p>
<p><b>Étape 1 : Rappel.</b> $\cO{a_n}\leq u_n\leq\cO{b_n}$ avec $\cO{a_n}$ et $\cO{b_n}$ de même limite $\cR\ell$ $\Rightarrow u_n\to\cR\ell$.</p>
<p><b>Étape 2 : On encadre le terme général.</b> Pour $1\leq k\leq n$ : $n^2 + 1\leq n^2 + k\leq n^2 + n$, donc :</p>
$$\frac n{n^2 + n}\leq\frac n{n^2 + k}\leq\frac n{n^2 + 1}.$$
<p><b>Étape 3 : On somme les $n$ inégalités</b> (les bornes ne dépendent pas de $k$) :</p>
$$\cO{a_n} = \frac{n^2}{n^2 + n}\leq u_n\leq\frac{n^2}{n^2 + 1} = \cO{b_n}.$$
<p><b>Étape 4 : Les limites des bornes.</b> $\cO{a_n} = \frac1{1 + \frac1n}\to1$ et $\cO{b_n} = \frac1{1 + \frac1{n^2}}\to1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{u_n\to1}$.</p>

<p class="ml">Exemple 24 : minorer pour obtenir $+\infty$</p>
<p>Montrer que $u_n = \displaystyle\sum_{k=1}^n\frac1{\sqrt k}\to+\infty$.</p>
<p><b>Étape 1 : Rappel.</b> $u_n\geq\cO{a_n}$ et $\cO{a_n}\to+\infty$ $\Rightarrow u_n\to+\infty$.</p>
<p><b>Étape 2 : On minore chaque terme.</b> Pour $1\leq k\leq n$ : $\sqrt k\leq\sqrt n$, donc $\frac1{\sqrt k}\geq\frac1{\sqrt n}$.</p>
<p><b>Étape 3 : On somme</b> les $n$ inégalités :</p>
$$u_n\geq n\times\frac1{\sqrt n} = \sqrt n = \cO{a_n}.$$
<p><b>Étape 4 : Conclusion.</b> $\sqrt n\to+\infty$, donc $\cG{u_n\to+\infty}$.</p>

<h2 id="s-mono">15. Limite monotone, suites adjacentes</h2>
<div class="sbox">$$\textbf{Limite monotone}:\ (u_n)\ \text{croissante et majorée}\ \Rightarrow\ u_n\to\cR{\sup_{n\in\mathbb N}u_n}.\qquad\text{Croissante non majorée}\ \Rightarrow\ u_n\to+\infty.$$
$$(u_n)\ \text{croissante},\ u_n\to\ell\ \Longrightarrow\ \forall n,\ u_n\leq\ell.$$</div>
<p>Et symétriquement : décroissante minorée $\Rightarrow$ converge vers $\inf u_n$, décroissante non minorée $\Rightarrow-\infty$. Une suite monotone a <b>toujours</b> une limite (finie ou infinie).</p>
<div class="sbox">$$\textbf{Adjacentes}:\ (u_n)\nearrow,\ (v_n)\searrow,\ v_n - u_n\to0\ \Longrightarrow\ \text{même limite}\ \cR\ell,\ \text{et}\ \forall n,\ u_n\leq\cR\ell\leq v_n.$$</div>

<p class="ml">Exemple 25 : croissante et majorée</p>
<p>Montrer que $u_n = \displaystyle\sum_{k=1}^n\frac1{k^2}$ converge.</p>
<p><b>Étape 1 : Rappel.</b> Croissante et majorée $\Rightarrow$ convergente.</p>
<p><b>Étape 2 : Croissante.</b> $u_{n+1} - u_n = \frac1{(n + 1)^2} > 0$.</p>
<p><b>Étape 3 : Une majoration télescopique.</b> Pour $k\geq2$ : $k^2\geq k(k - 1)$, donc</p>
$$\frac1{k^2}\leq\frac1{k(k - 1)} = \frac1{k - 1} - \frac1k.$$
<p><b>Étape 4 : On somme de $k = 2$ à $n$</b>, les termes se télescopent :</p>
$$\sum_{k=2}^n\Big(\frac1{k - 1} - \frac1k\Big) = \Big(1 - \frac12\Big) + \Big(\frac12 - \frac13\Big) + \dots + \Big(\frac1{n - 1} - \frac1n\Big) = 1 - \frac1n,$$
$$u_n = 1 + \sum_{k=2}^n\frac1{k^2}\leq1 + \Big(1 - \frac1n\Big) = 2 - \frac1n\leq\cR2.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{(u_n)\ \text{converge}}$, vers une limite $\leq2$ (c'est $\frac{\pi^2}6$, voir Séries).</p>

<p class="ml">Exemple 26 : deux suites adjacentes</p>
<p>$u_n = \displaystyle\sum_{k=0}^n\frac1{k!}$ et $v_n = u_n + \dfrac1{n\cdot n!}$, $n\geq1$. Montrer qu'elles convergent vers la même limite.</p>
<p><b>Étape 1 : Rappel.</b> $(u_n)\nearrow$, $(v_n)\searrow$, $v_n - u_n\to0$ $\Rightarrow$ même limite.</p>
<p><b>Étape 2 : $(u_n)$ croissante.</b> $u_{n+1} - u_n = \frac1{(n + 1)!} > 0$.</p>
<p><b>Étape 3 : $(v_n)$ décroissante.</b> On met tout sur le dénominateur commun $n(n + 1)\,(n + 1)!$. Comme $n! = \frac{(n + 1)!}{n + 1}$, on a $n\cdot n! = \frac{n\,(n + 1)!}{n + 1}$, donc $\frac1{n\cdot n!} = \frac{n + 1}{n\,(n + 1)!} = \frac{(n + 1)^2}{n(n + 1)\,(n + 1)!}$. De même $\frac1{(n + 1)!} = \frac{n(n + 1)}{n(n + 1)(n + 1)!}$ et $\frac1{(n + 1)(n + 1)!} = \frac n{n(n + 1)(n + 1)!}$. Le numérateur vaut $n(n + 1) + n - (n + 1)^2 = n^2 + n + n - n^2 - 2n - 1 = -1$ :</p>
$$v_{n+1} - v_n = \frac1{(n + 1)!} + \frac1{(n + 1)(n + 1)!} - \frac1{n\cdot n!} = \frac{n(n + 1) + n - (n + 1)^2}{n(n + 1)\,(n + 1)!} = \frac{-1}{n(n + 1)\,(n + 1)!} \lt 0.$$
<p><b>Étape 4 : La différence.</b> $v_n - u_n = \frac1{n\cdot n!}\to0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{(u_n)\ \text{et}\ (v_n)\ \text{sont adjacentes}}$ : même limite $\ell$ (c'est $e$), et $u_n\leq\ell\leq v_n$, ce qui donne $e$ à $\frac1{n\cdot n!}$ près.</p>

<h2 id="s-bw">16. Bolzano-Weierstrass, caractérisations séquentielles</h2>
<div class="sbox">$$\textbf{Bolzano-Weierstrass}:\ \text{de toute suite réelle (ou complexe) bornée, on peut extraire une suite convergente.}$$</div>
<p>On s'en sert quand on n'a aucune formule : la suite est bornée, on extrait $u_{\varphi(n)}\to\ell$, puis on montre que toutes les valeurs d'adhérence sont égales.</p>
<p><b>Caractérisations séquentielles</b> (voir §7 et §9) : $M = \sup A$ s'il majore $A$ et est limite d'une suite de $A$. $A$ est dense dans $\mathbb R$ si tout réel est limite d'une suite de $A$.</p>
<p class="ml">Bonus : le lemme de Cesàro <span class="hp">hors programme</span></p>
<p>Si $u_n\to\ell$, alors la moyenne $\frac{u_1 + \dots + u_n}n\to\ell$. On coupe la somme en deux : les termes d'indice $\geq N$ sont à $\varepsilon$ de $\ell$, les premiers sont en nombre fixe et divisés par $n\to+\infty$. À redémontrer si on l'utilise.</p>

<h2 id="s-part">17. Suites usuelles et récurrences linéaires</h2>
<table class="mtab">
<tr><th>Suite</th><th>Relation</th><th>Terme général</th><th>Somme</th></tr>
<tr><td>arithmétique</td><td>$u_{n+1} = u_n + r$</td><td>$u_n = u_0 + nr$</td><td>$\sum_{k=0}^nu_k = (n + 1)\frac{u_0 + u_n}2$</td></tr>
<tr><td>géométrique</td><td>$u_{n+1} = qu_n$</td><td>$u_n = u_0q^n$</td><td>$\sum_{k=0}^nq^k = \frac{1 - q^{n+1}}{1 - q}$ ($q\neq1$)</td></tr>
<tr><td>arithmético-géométrique</td><td>$u_{n+1} = au_n + b$, $a\neq1$</td><td>$u_n = \cR\ell + a^n(u_0 - \cR\ell)$, $\cR\ell = \frac b{1 - a}$</td><td>—</td></tr>
</table>
<p>$q^n\to0$ si $|q| \lt 1$, $q^n\to+\infty$ si $q > 1$, pas de limite si $q\leq-1$, constante si $q = 1$.</p>
<p class="ml">Récurrence linéaire d'ordre 2 : $u_{n+2} = au_{n+1} + bu_n$ ($b\neq0$)</p>
<p>Équation caractéristique $(E_c):\ \cV{r^2 = ar + b}$, discriminant $\Delta = a^2 + 4b$.</p>
<div class="sbox">$$\Delta > 0:\ u_n = A\,\cV{r_1}^n + B\,\cV{r_2}^n\qquad\Delta = 0:\ u_n = (A + Bn)\,\cV{r_0}^n\qquad\Delta \lt 0:\ \cV{r = \rho e^{\pm i\theta}},\ u_n = \rho^n\big(A\cos(n\theta) + B\sin(n\theta)\big)$$</div>
<p>$A, B$ réels, fixés par $u_0$ et $u_1$ (un système $2\times2$). Sur $\mathbb C$ avec $\Delta\neq0$ : $u_n = A\,r_1^n + B\,r_2^n$, $A, B\in\mathbb C$.</p>

<p class="ml">Exemple 27 : arithmético-géométrique</p>
<p>$u_0 = 5$, $u_{n+1} = 3u_n - 4$. Exprimer $u_n$.</p>
<p><b>Étape 1 : Rappel.</b> $u_{n+1} = au_n + b$ : on cherche le point fixe $\cR\ell = a\cR\ell + b$, puis $v_n = u_n - \cR\ell$ est géométrique de raison $a$.</p>
<p><b>Étape 2 : Le point fixe.</b> $\cR\ell = 3\cR\ell - 4\iff\cR{\ell = 2}$.</p>
<p><b>Étape 3 : La suite auxiliaire.</b> On soustrait $2 = 3\times2 - 4$ à la relation :</p>
$$u_{n+1} - 2 = 3u_n - 4 - (3\times2 - 4) = 3(u_n - 2),\quad\text{donc}\ v_{n+1} = 3v_n.$$
<p><b>Étape 4 : Terme général de $v$.</b> $v_0 = u_0 - 2 = 3$, donc $v_n = 3\times3^n = 3^{n+1}$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{u_n = 2 + 3^{n+1}}$, et $u_n\to+\infty$. Contrôle : $u_1 = 3\times5 - 4 = 11 = 2 + 9$.</p>

<p class="ml">Exemple 28 : ordre 2, deux racines réelles</p>
<p>$u_0 = 0$, $u_1 = 3$, $u_{n+2} = u_{n+1} + 2u_n$.</p>
<p><b>Étape 1 : Rappel.</b> $\Delta > 0$ : $u_n = A\,r_1^n + B\,r_2^n$, avec $r_1, r_2$ les racines de $r^2 = ar + b$.</p>
<p><b>Étape 2 : Équation caractéristique.</b> $r^2 = r + 2\iff r^2 - r - 2 = 0$, $\Delta = 1 + 8 = 9$, $\cV{r_1 = 2}$, $\cV{r_2 = -1}$.</p>
<p><b>Étape 3 : Forme générale.</b> $u_n = A\,2^n + B\,(-1)^n$.</p>
<p><b>Étape 4 : Les conditions initiales.</b></p>
$$\left\{\begin{aligned}u_0 &= A\cdot2^0 + B\cdot(-1)^0 = A + B = 0\\u_1 &= A\cdot2^1 + B\cdot(-1)^1 = 2A - B = 3\end{aligned}\right.$$
<p>On additionne les deux lignes : $(A + B) + (2A - B) = 0 + 3$, soit $3A = 3$, donc $A = 1$. Puis $B = -A = -1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{u_n = 2^n - (-1)^n}$. Contrôle : la relation donne $u_2 = u_1 + 2u_0 = 3 + 2\times0 = 3$, la formule donne $2^2 - (-1)^2 = 4 - 1 = 3$.</p>

<p class="ml">Exemple 29 : ordre 2, racine double</p>
<p>$u_0 = 1$, $u_1 = 4$, $u_{n+2} = 4u_{n+1} - 4u_n$.</p>
<p><b>Étape 1 : Rappel.</b> $\Delta = 0$ : $u_n = (A + Bn)\,r_0^n$.</p>
<p><b>Étape 2 : Équation caractéristique.</b> $r^2 - 4r + 4 = (r - 2)^2 = 0$ : $\cV{r_0 = 2}$ double.</p>
<p><b>Étape 3 : Les conditions initiales.</b> $n = 0$ : $u_0 = (A + B\times0)\times2^0 = A = 1$. $n = 1$ : $u_1 = (A + B\times1)\times2^1 = 2(A + B) = 4$, donc $A + B = 2$ et $B = 2 - 1 = 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{u_n = (n + 1)\,2^n}$. Contrôle : la relation donne $u_2 = 4u_1 - 4u_0 = 4\times4 - 4\times1 = 12$, la formule $(2 + 1)\times2^2 = 3\times4 = 12$.</p>

<p class="ml">Exemple 30 : ordre 2, racines complexes</p>
<p>$u_0 = 1$, $u_1 = 2$, $u_{n+2} = 2u_{n+1} - 2u_n$.</p>
<p><b>Étape 1 : Rappel.</b> $\Delta \lt 0$, racines $\rho e^{\pm i\theta}$ : $u_n = \rho^n\big(A\cos(n\theta) + B\sin(n\theta)\big)$.</p>
<p><b>Étape 2 : Équation caractéristique.</b> $r^2 - 2r + 2 = 0$, $\Delta = 4 - 8 = -4 = (2i)^2$, $r = \frac{2\pm2i}2 = 1\pm i$.</p>
<p><b>Étape 3 : Forme exponentielle.</b> $|1 + i| = \sqrt2$, $\arg(1 + i) = \frac\pi4$ : $\cV{\rho = \sqrt2}$, $\cV{\theta = \frac\pi4}$.</p>
<p><b>Étape 4 : Les conditions initiales.</b> $u_0 = A = 1$. $u_1 = \sqrt2\big(\cos\frac\pi4 + B\sin\frac\pi4\big) = \sqrt2\cdot\frac{\sqrt2}2(1 + B) = 1 + B = 2$, donc $B = 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{u_n = (\sqrt2)^n\Big(\cos\frac{n\pi}4 + \sin\frac{n\pi}4\Big)}$. Contrôle : $u_2 = 4 - 2 = 2 = 2(0 + 1)$.</p>

<h2 id="s-rec">18. Suites récurrentes $u_{n+1} = f(u_n)$</h2>
<p>Ce n'est pas dans ton résumé, mais c'est dans presque tous les sujets. La méthode tient en quatre temps.</p>
<div class="sbox">$$\textbf{1. Intervalle stable}\ I:\ f(I)\subset I\ \text{et}\ u_0\in I\ \Rightarrow\ \forall n,\ u_n\in I\ \text{(récurrence)}.$$
$$\textbf{2. Points fixes}:\ \text{si}\ u_n\to\cR\ell\in I\ \text{et}\ f\ \text{continue en}\ \cR\ell,\ \text{alors}\ f(\cR\ell) = \cR\ell.$$
$$\textbf{3. Monotonie}:\ \text{signe de}\ g(x) = f(x) - x\ \text{sur}\ I,\ \text{ou}\ f\ \text{croissante sur}\ I\Rightarrow(u_n)\ \text{monotone (sens donné par}\ u_1 - u_0).$$
$$\textbf{4. Conclure}:\ \text{limite monotone, puis}\ \cR\ell\ \text{est un point fixe}.$$</div>
<p class="ml piege">Piège</p>
<p>« $f$ croissante » ne donne <b>pas</b> « $(u_n)$ croissante » : le sens dépend de $u_1 - u_0$. Si $f$ est <b>décroissante</b>, $(u_n)$ n'est pas monotone : on étudie $(u_{2n})$ et $(u_{2n+1})$, récurrentes pour $f\circ f$ qui est croissante.</p>

<p class="ml">Exemple 31 : $u_{n+1} = \sqrt{2 + u_n}$, $u_0 = 1$</p>
<p><b>Étape 1 : Rappel.</b> Intervalle stable, $f$ croissante et sens par $u_1 - u_0$, limite monotone, puis $\ell = f(\ell)$.</p>
<p><b>Étape 2 : Intervalle stable.</b> $f(x) = \sqrt{2 + x}$. Si $x\in[0, 2]$, $2 + x\in[2, 4]$, donc $f(x)\in[\sqrt2, 2]\subset[0, 2]$. Comme $u_0 = 1\in[0, 2]$, par récurrence $u_n\in[0, 2]$ pour tout $n$.</p>
<p><b>Étape 3 : Monotonie.</b> $u_1 = \sqrt3 > 1 = u_0$. Si $u_n\leq u_{n+1}$, alors, $f$ étant croissante, $f(u_n)\leq f(u_{n+1})$, soit $u_{n+1}\leq u_{n+2}$. Par récurrence, $(u_n)$ est <b>croissante</b>.</p>
<p><b>Étape 4 : Convergence.</b> Croissante et majorée par $2$ : elle converge vers $\cR\ell\in[0, 2]$.</p>
<p><b>Étape 5 : Le point fixe.</b> On passe à la limite dans $u_{n+1} = \sqrt{2 + u_n}$ ($f$ est continue) : $\cR\ell = \sqrt{2 + \cR\ell}$. On élève au carré : $\cR\ell^2 = 2 + \cR\ell$, soit $\cR\ell^2 - \cR\ell - 2 = 0$. $\Delta = 1 + 8 = 9$, racines $\frac{1\pm3}2$, soit $2$ et $-1$ : $(\cR\ell - 2)(\cR\ell + 1) = 0$. Comme $\cR\ell\geq0$ :</p>
$$\cG{u_n\to2}.$$

<p class="ml">Exemple 32 : $u_{n+1} = u_n - u_n^2$, $u_0\in\,]0, 1[$</p>
<p><b>Étape 1 : Rappel.</b> Signe de $g(x) = f(x) - x$ sur l'intervalle stable : $g\leq0$ donne $(u_n)$ décroissante.</p>
<p><b>Étape 2 : Intervalle stable.</b> $f(x) = x - x^2 = x(1 - x)$. Pour $x\in[0, 1]$ : $x\geq0$ et $1 - x\geq0$, donc $f(x)\geq0$, et $f(x)\leq x\leq1$. Donc $[0, 1]$ est stable et $u_n\in[0, 1]$.</p>
<p><b>Étape 3 : Monotonie.</b> $u_{n+1} - u_n = -u_n^2\leq0$ : $(u_n)$ est décroissante.</p>
<p><b>Étape 4 : Convergence.</b> Décroissante et minorée par $0$ : elle converge vers $\cR\ell\in[0, 1]$.</p>
<p><b>Étape 5 : Le point fixe.</b> $\cR\ell = \cR\ell - \cR\ell^2\iff\cR\ell^2 = 0$, donc $\cG{u_n\to0}$.</p>

<h2 id="s-cpx">19. Suites complexes</h2>
<div class="sbox">$$z_n\to\cR\ell\iff\operatorname{Re}(z_n)\to\operatorname{Re}(\cR\ell)\ \text{et}\ \operatorname{Im}(z_n)\to\operatorname{Im}(\cR\ell)\iff|z_n - \cR\ell|\to0.$$</div>
<p>Une suite complexe est <b>bornée</b> si $|z_n|\leq C$, c'est-à-dire si ses parties réelle et imaginaire sont bornées. Tout ce qui n'utilise pas l'ordre reste vrai : opérations, suites extraites, Bolzano-Weierstrass. Il n'y a ni monotonie, ni encadrement, ni $\sup$ dans $\mathbb C$.</p>
<p class="ml">Exemple 33 : une suite géométrique complexe</p>
<p>Limite de $z_n = \Big(\dfrac{1 + i}2\Big)^n$.</p>
<p><b>Étape 1 : Rappel.</b> $z_n\to0\iff|z_n|\to0$, et $|q^n| = |q|^n$.</p>
<p><b>Étape 2 : Le module.</b> $\big|\frac{1 + i}2\big| = \frac{\sqrt2}2 \lt 1$.</p>
<p><b>Étape 3 : On passe au module.</b> $|z_n| = \big(\frac{\sqrt2}2\big)^n\to0$ (géométrique réelle de raison dans $]-1, 1[$).</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{z_n\to0}$.</p>

<h2 id="r-enonce">20. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Résoudre $|X|\leq a$ »</b><span>Encadrer $-a\leq X\leq a$. Si $a \lt 0$ : aucune solution.</span></div>
<div><b>« Résoudre $|X|\geq a$ »</b><span>$X\leq-a$ ou $X\geq a$ : une réunion.</span></div>
<div><b>Plusieurs valeurs absolues</b><span>Tableau de signes, une équation par morceau, garder les solutions du morceau.</span></div>
<div><b>« Majorer $|f(x)|$ »</b><span>Inégalité triangulaire terme par terme, puis majorer chaque module.</span></div>
<div><b>« $\lfloor X\rfloor = n$ »</b><span>Encadrement $n\leq X \lt n + 1$, puis isoler $x$.</span></div>
<div><b>Identité avec $\lfloor\ \rfloor$</b><span>$x = \lfloor x\rfloor + \theta$, $\theta\in[0, 1[$, découper selon $\theta$.</span></div>
<div><b>« Montrer $\lfloor Y\rfloor = k$ »</b><span>Montrer $k\in\mathbb Z$ et $k\leq Y \lt k + 1$.</span></div>
<div><b>« Déterminer $\sup A$ »</b><span>Candidat, majorant, puis $\varepsilon$ ou une suite de $A$ qui tend vers le candidat.</span></div>
<div><b>« $\sup A$ existe »</b><span>Partie non vide et majorée : propriété de la borne supérieure.</span></div>
<div><b>« A-t-elle un max ? »</b><span>Le sup appartient-il à $A$ ?</span></div>
<div><b>« Pour tout $a\in A$, $a\leq K$ »</b><span>Passer au sup : $\sup A\leq K$.</span></div>
<div><b>« Trouver un rationnel entre $x$ et $y$ »</b><span>$n > \frac1{y - x}$, $p = \lfloor nx\rfloor + 1$.</span></div>
<div><b>« Montrer que $I$ est un intervalle »</b><span>Pour $x\leq z\leq y$ avec $x, y\in I$, montrer $z\in I$.</span></div>
<div><b>« $(u_n)$ est monotone »</b><span>Signe de $u_{n+1} - u_n$, ou $\frac{u_{n+1}}{u_n}$ comparé à $1$ si $u_n > 0$.</span></div>
<div><b>« Montrer que $u_n\to\ell$ » avec la définition</b><span>Calculer $|u_n - \ell|$, résoudre $\leq\varepsilon$, choisir $N$.</span></div>
<div><b>« Montrer que $(u_n)$ diverge »</b><span>Deux suites extraites de limites différentes ($u_{2n}$, $u_{2n+1}$).</span></div>
<div><b>Forme $\frac\infty\infty$</b><span>Factoriser par le terme prépondérant (croissances comparées).</span></div>
<div><b>Différence de racines</b><span>Quantité conjuguée.</span></div>
<div><b>Une somme $\sum_{k=1}^n$ dont on veut la limite</b><span>Encadrer le terme général par le plus petit et le plus grand, sommer, gendarmes.</span></div>
<div><b>« Montrer que $(u_n)$ converge » sans limite donnée</b><span>Monotone et bornée, ou adjacente à une autre suite.</span></div>
<div><b>Deux suites, l'une $\nearrow$, l'autre $\searrow$</b><span>Adjacentes : vérifier $v_n - u_n\to0$.</span></div>
<div><b>$u_{n+1} = au_n + b$</b><span>Point fixe $\ell$, puis $u_n - \ell$ géométrique.</span></div>
<div><b>$u_{n+2} = au_{n+1} + bu_n$</b><span>Équation caractéristique, puis $A, B$ par $u_0, u_1$.</span></div>
<div><b>$u_{n+1} = f(u_n)$</b><span>Intervalle stable, signe de $f(x) - x$, limite monotone, point fixe.</span></div>
<div><b>Une suite bornée, rien d'autre</b><span>Bolzano-Weierstrass : extraire une sous-suite convergente.</span></div>
<div><b>$u_n^{v_n}$</b><span>Écrire $e^{v_n\ln u_n}$ et chercher la limite de l'exposant.</span></div>
</div>

<h2 id="r-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Écrire $\sqrt{x^2} = x$ : c'est $|x|$.</p>
<p><b>2.</b> Traduire $|X|\geq a$ par $-a\geq X\geq a$ : c'est « $X\leq-a$ <b>ou</b> $X\geq a$ ».</p>
<p><b>3.</b> Majorer $|a - b|$ par $|a| - |b|$.</p>
<p><b>4.</b> Écrire $\lfloor-2{,}5\rfloor = -2$ : c'est $-3$.</p>
<p><b>5.</b> Écrire $\lfloor x + y\rfloor = \lfloor x\rfloor + \lfloor y\rfloor$, ou $\lfloor2x\rfloor = 2\lfloor x\rfloor$.</p>
<p><b>6.</b> Diviser un encadrement par un nombre négatif sans retourner les inégalités.</p>
<p><b>7.</b> Confondre $\sup$ et $\max$ : le sup n'est pas forcément dans $A$.</p>
<p><b>8.</b> Montrer seulement que $M$ est un majorant, et oublier que c'est le <b>plus petit</b>.</p>
<p><b>9.</b> Croire que $a \lt M$ pour tout $a$ donne $\sup A \lt M$ : on obtient seulement $\sup A\leq M$.</p>
<p><b>10.</b> Parler de $\sup A$ sans avoir vérifié que $A$ est non vide et majorée.</p>
<p><b>11.</b> Passer à la limite dans $u_n \lt v_n$ et écrire $\ell \lt \ell'$ : c'est $\ell\leq\ell'$.</p>
<p><b>12.</b> Écrire « $u_n\leq2$ donc $u_n$ converge » : il faut aussi la monotonie.</p>
<p><b>13.</b> Dire « $f$ croissante donc $(u_n)$ croissante » pour $u_{n+1} = f(u_n)$.</p>
<p><b>14.</b> Écrire $\ell = f(\ell)$ avant d'avoir montré que $(u_n)$ converge.</p>
<p><b>15.</b> Croire que $1^\infty = 1$ : $(1 + \frac1n)^n\to e$.</p>
<p><b>16.</b> Utiliser un $N$ qui dépend de $n$ dans la définition de la limite.</p>
<p><b>17.</b> Croire qu'une suite bornée converge : $(-1)^n$.</p>
</div>

<h2 id="r-entrainement">S'entraîner</h2>
<div data-mlab="absval"></div>
<div data-mlab="entx"></div>
<div data-mlab="supeps"></div>
<div data-mlab="quizreel"></div>
<div data-mlab="cobweb"></div>
<div data-mlab="arigeo"></div>
<div data-mlab="recur2"></div>
<div data-mlab="quizsuite"></div>

<h2 id="r-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : bornes de $A = \{\frac{2n + 1}{n + 2},\ n\in\mathbb N\}$</p>
<p><b>Étape 1 : Rappel.</b> $\cR M = \sup\cB A\iff\cR M$ majore $\cB A$ et une suite d'éléments de $\cB A$ tend vers $\cR M$. Un minorant qui appartient à $\cB A$ est le min.</p>
<p><b>Étape 2 : On simplifie</b> en faisant apparaître le dénominateur au numérateur :</p>
$$\frac{2n + 1}{n + 2} = \frac{2(n + 2) - 3}{n + 2} = 2 - \frac3{n + 2}.$$
<p><b>Étape 3 : Les variations.</b> $n\mapsto\frac3{n + 2}$ décroît, donc $\cB{a_n} = 2 - \frac3{n + 2}$ croît.</p>
<p><b>Étape 4 : Le min.</b> Le plus petit élément est en $n = 0$ : $\cB{a_0} = 2 - \frac32 = \frac12$.</p>
<p><b>Étape 5 : Le sup.</b> $\frac3{n + 2} > 0$ donne $\cB{a_n} \lt 2$ : $2$ est un majorant. Et $\cB{a_n}\to2$, donc $2 = \sup A$. Aucun $\cB{a_n}$ ne vaut $2$.</p>
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\inf A = \min A = \frac12,\qquad\sup A = 2\ \text{(pas de max)}}.$$

<p class="ml">Exercice 2 : résoudre $\lfloor x^2\rfloor = 2$</p>
<p><b>Étape 1 : Rappel.</b> $\lfloor X\rfloor = \cV n\iff\cV n\leq X \lt \cV n + 1$.</p>
<p><b>Étape 2 : On l'applique</b> avec $X = x^2$ et $\cV n = 2$ : $2\leq x^2 \lt 3$.</p>
<p><b>Étape 3 : On passe à la racine</b> (croissante sur $\mathbb R_+$), avec $\sqrt{x^2} = |x|$ :</p>
$$\sqrt2\leq|x| \lt \sqrt3.$$
<p><b>Étape 4 : On enlève la valeur absolue.</b> $x\geq0$ donne $\sqrt2\leq x \lt \sqrt3$. $x \lt 0$ donne $\sqrt2\leq-x \lt \sqrt3$, soit $-\sqrt3 \lt x\leq-\sqrt2$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{\mathcal S = \big]-\sqrt3,\ -\sqrt2\big]\cup\big[\sqrt2,\ \sqrt3\big[}.$$

<p class="ml">Exercice 3 : $\lfloor x\rfloor + \lfloor x + \frac12\rfloor = \lfloor2x\rfloor$</p>
<p><b>Étape 1 : Rappel.</b> $\lfloor y + \cV m\rfloor = \lfloor y\rfloor + \cV m$ pour $\cV m\in\mathbb Z$, et $\lfloor\theta\rfloor = 0$ pour $\theta\in[0, 1[$.</p>
<p><b>Étape 2 : On pose</b> $\cV k = \lfloor x\rfloor$ et $\theta = x - \cV k\in[0, 1[$, donc $x = \cV k + \theta$.</p>
<p><b>Étape 3 : On sort les entiers.</b></p>
$$\lfloor x\rfloor + \Big\lfloor x + \frac12\Big\rfloor = 2\cV k + \Big\lfloor\theta + \frac12\Big\rfloor,\qquad\lfloor2x\rfloor = 2\cV k + \lfloor2\theta\rfloor.$$
<p>Il reste à montrer $\lfloor\theta + \frac12\rfloor = \lfloor2\theta\rfloor$.</p>
<p><b>Étape 4 : Cas $\theta\in[0, \frac12[$.</b> $\theta + \frac12\in[\frac12, 1[$ et $2\theta\in[0, 1[$ : les deux valent $0$.</p>
<p><b>Étape 5 : Cas $\theta\in[\frac12, 1[$.</b> $\theta + \frac12\in[1, \frac32[$ et $2\theta\in[1, 2[$ : les deux valent $1$.</p>
<p><b>Étape 6 : Conclusion.</b></p>
$$\cG{\lfloor x\rfloor + \Big\lfloor x + \frac12\Big\rfloor = \lfloor2x\rfloor\ \ \text{pour tout}\ x\in\mathbb R}.$$

<p class="ml">Exercice 4 : passer au sup et à l'inf</p>
<p>$A, B$ non vides avec $a\leq b$ pour tous $a\in A$, $b\in B$. Montrer que $\sup A\leq\inf B$.</p>
<p><b>Étape 1 : Rappel.</b> $\sup A$ est le <b>plus petit</b> majorant de $A$, $\inf B$ le <b>plus grand</b> minorant de $B$.</p>
<p><b>Étape 2 : Les bornes existent.</b> $B\neq\varnothing$ : tout $b\in B$ majore $A$, donc $A$ (non vide) est majorée et $\sup A$ existe. De même, tout $a\in A$ minore $B$, donc $\inf B$ existe.</p>
<p><b>Étape 3 : On fixe $b\in B$.</b> $b$ majore $A$, et $\sup A$ est le plus petit majorant : $\sup A\leq b$.</p>
<p><b>Étape 4 : On fait varier $b$.</b> L'étape 3 vaut pour tout $b\in B$ : $\sup A$ minore $B$. Or $\inf B$ est le plus grand minorant : $\sup A\leq\inf B$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{\sup A\leq\inf B}.$$

<p class="ml">Exercice 5 : la limite de $\big(1 + \frac1n\big)^n$</p>
<p><b>Étape 1 : Rappel.</b> $u_n^{v_n} = e^{v_n\ln u_n}$, et $\lim\limits_{x\to0}\frac{\ln(1 + x)}x = 1$ (dérivée de $\ln$ en $1$).</p>
<p><b>Étape 2 : On passe à l'exponentielle.</b> $\big(1 + \frac1n\big)^n = e^{n\ln(1 + \frac1n)}$. C'est une forme $1^\infty$.</p>
<p><b>Étape 3 : L'exposant.</b> On pose $x = \frac1n\to0$ :</p>
$$n\ln\Big(1 + \frac1n\Big) = \frac{\ln(1 + x)}x\longrightarrow1.$$
<p><b>Étape 4 : Conclusion</b> par continuité de $\exp$ en $1$ : $\cG{\big(1 + \frac1n\big)^n\to e}$.</p>

<p class="ml">Exercice 6 : la constante d'Euler</p>
<p>$H_n = \sum_{k=1}^n\frac1k$, $u_n = H_n - \ln n$, $v_n = H_n - \ln(n + 1)$. Montrer qu'elles sont adjacentes.</p>
<p><b>Étape 1 : Rappel.</b> Adjacentes : une croissante, une décroissante, différence $\to0$. Et pour $t\in[n, n + 1]$ : $\frac1{n + 1}\leq\frac1t\leq\frac1n$.</p>
<p><b>Étape 2 : L'encadrement du logarithme.</b> On intègre sur $[n, n + 1]$ (longueur $1$) :</p>
$$\frac1{n + 1}\leq\ln(n + 1) - \ln n = \int_n^{n+1}\frac{dt}t\leq\frac1n.$$
<p><b>Étape 3 : $(u_n)$ décroît.</b> $u_{n+1} - u_n = \frac1{n + 1} - \big(\ln(n + 1) - \ln n\big)\leq0$ par l'inégalité de gauche.</p>
<p><b>Étape 4 : $(v_n)$ croît.</b> $v_{n+1} - v_n = \frac1{n + 1} - \big(\ln(n + 2) - \ln(n + 1)\big)\geq\frac1{n + 1} - \frac1{n + 1} = 0$ par l'inégalité de droite au rang $n + 1$.</p>
<p><b>Étape 5 : La différence.</b> $u_n - v_n = \ln(n + 1) - \ln n = \ln\big(1 + \frac1n\big)\to0$.</p>
<p><b>Étape 6 : Conclusion.</b> $\cG{\text{adjacentes}}$ : elles ont une limite commune $\gamma\approx0{,}577$, et $H_n = \ln n + \gamma + o(1)$.</p>

<p class="ml">Exercice 7 : $u_{n+1} = \frac{u_n^2 + 2}3$, $u_0 = 0$</p>
<p><b>Étape 1 : Rappel.</b> Intervalle stable, $f$ croissante et sens par $u_1 - u_0$, limite monotone, puis point fixe.</p>
<p><b>Étape 2 : Les points fixes.</b> $\ell = \frac{\ell^2 + 2}3\iff\ell^2 - 3\ell + 2 = 0\iff\ell\in\{1, 2\}$.</p>
<p><b>Étape 3 : Intervalle stable.</b> Pour $x\in[0, 1]$ : $x^2\in[0, 1]$, donc $f(x)\in\big[\frac23, 1\big]\subset[0, 1]$. Donc $u_n\in[0, 1]$.</p>
<p><b>Étape 4 : Monotonie.</b> $f$ est croissante sur $[0, 1]$ et $u_1 = \frac23 > 0 = u_0$ : par récurrence, $(u_n)$ est croissante.</p>
<p><b>Étape 5 : Conclusion.</b> Croissante, majorée par $1$ : elle converge vers un point fixe de $[0, 1]$, donc $\cG{u_n\to1}$.</p>

<h2 id="r-arbre">L'arbre des nombres réels</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question sur les réels</span><ul>
<li><div class="hr"><em>valeur absolue</em><span class="hq">Combien de $|\ |$ ?</span><ul>
<li><div class="hr"><em>une, $|X|\leq a$</em><a class="hl ok" href="#r-abs">$-a\leq X\leq a$</a></div></li>
<li><div class="hr"><em>une, $|X|\geq a$</em><a class="hl ok" href="#r-abs">$X\leq-a$ ou $X\geq a$</a></div></li>
<li><div class="hr"><em>plusieurs</em><a class="hl" href="#r-abs">tableau de signes, un calcul par morceau</a></div></li>
<li><div class="hr"><em>majorer</em><a class="hl" href="#r-tri">inégalité triangulaire terme par terme</a></div></li>
</ul></div></li>
<li><div class="hr"><em>partie entière</em><span class="hq">Quelle forme ?</span><ul>
<li><div class="hr"><em>$\lfloor X\rfloor = n$</em><a class="hl ok" href="#r-ent">$n\leq X \lt n + 1$</a></div></li>
<li><div class="hr"><em>montrer $\lfloor Y\rfloor = k$</em><a class="hl" href="#r-ent">$k\in\mathbb Z$ et $k\leq Y \lt k + 1$</a></div></li>
<li><div class="hr"><em>identité</em><a class="hl" href="#r-ent">$x = \lfloor x\rfloor + \theta$, découper $\theta$</a></div></li>
<li><div class="hr"><em>approcher $x$</em><a class="hl" href="#r-dec">$\frac{\lfloor10^nx\rfloor}{10^n}\leq x \lt \frac{\lfloor10^nx\rfloor + 1}{10^n}$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>borne sup, inf</em><span class="hq">$A$ non vide et majorée ?</span><ul>
<li><div class="hr"><em>non majorée</em><a class="hl" href="#r-ach">$\sup A = +\infty$ dans $\overline{\mathbb R}$</a></div></li>
<li><div class="hr"><em>oui</em><span class="hq">Candidat $M$ trouvé ?</span><ul>
<li><div class="hr"><em>majorant</em><a class="hl" href="#r-sup">$\forall a\in A,\ a\leq M$</a></div></li>
<li><div class="hr"><em>le plus petit</em><a class="hl" href="#r-sup">$\forall\varepsilon,\ \exists a > M - \varepsilon$</a></div></li>
<li><div class="hr"><em>ou bien</em><a class="hl" href="#r-seq">une suite $a_n\in A$, $a_n\to M$</a></div></li>
<li><div class="hr"><em>$M\in A$ ?</em><a class="hl end" href="#r-sup">oui : max ; non : pas de max</a></div></li>
</ul></div></li>
<li><div class="hr"><em>inégalité sur $\sup$</em><a class="hl" href="#r-seq">passer au sup : plus petit majorant</a></div></li>
</ul></div></li>
<li><div class="hr"><em>densité</em><span class="hq">On cherche dans $]x, y[$…</span><ul>
<li><div class="hr"><em>un rationnel</em><a class="hl ok" href="#r-dens">$n > \frac1{y - x}$, $p = \lfloor nx\rfloor + 1$</a></div></li>
<li><div class="hr"><em>un irrationnel</em><a class="hl ok" href="#r-dens">$r + \sqrt2$, $r\in\,]x - \sqrt2, y - \sqrt2[$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>intervalle</em><a class="hl" href="#r-int">$x, y\in I$, $x\leq z\leq y\Rightarrow z\in I$</a></div></li>
</ul></div></div>

<h2 id="s-arbre">L'arbre des suites</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une suite $(u_n)$</span><ul>
<li><div class="hr"><em>définie par récurrence</em><span class="hq">Quelle relation ?</span><ul>
<li><div class="hr"><em>$u_{n+1} = au_n + b$</em><a class="hl ok" href="#s-part">point fixe, $u_n - \ell$ géométrique</a></div></li>
<li><div class="hr"><em>$u_{n+2} = au_{n+1} + bu_n$</em><a class="hl ok" href="#s-part">équation caractéristique, signe de $\Delta$</a></div></li>
<li><div class="hr"><em>$u_{n+1} = f(u_n)$</em><span class="hq">$f$ croissante sur $I$ stable ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl" href="#s-rec">monotone, sens de $u_1 - u_0$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#s-rec">signe de $f(x) - x$, ou $u_{2n}$ et $u_{2n+1}$</a></div></li>
<li><div class="hr"><em>limite</em><a class="hl end" href="#s-rec">un point fixe $f(\ell) = \ell$</a></div></li>
</ul></div></li>
</ul></div></li>
<li><div class="hr"><em>formule explicite</em><span class="hq">Forme indéterminée ?</span><ul>
<li><div class="hr"><em>non</em><a class="hl ok" href="#s-op">opérations sur les limites</a></div></li>
<li><div class="hr"><em>$\frac\infty\infty$</em><a class="hl" href="#s-op">terme prépondérant</a></div></li>
<li><div class="hr"><em>racines</em><a class="hl" href="#s-op">quantité conjuguée</a></div></li>
<li><div class="hr"><em>$u_n^{v_n}$</em><a class="hl" href="#s-op">$e^{v_n\ln u_n}$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une somme $\sum_{k=1}^n$</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>la limite</em><a class="hl" href="#s-comp">encadrer le terme, sommer, gendarmes</a></div></li>
<li><div class="hr"><em>$+\infty$</em><a class="hl" href="#s-comp">minorer par une suite qui tend vers $+\infty$</a></div></li>
<li><div class="hr"><em>la convergence</em><a class="hl" href="#s-mono">croissante, majorée (télescopage)</a></div></li>
</ul></div></li>
<li><div class="hr"><em>pas de limite ?</em><a class="hl" href="#s-lim">deux extraites, deux limites</a></div></li>
<li><div class="hr"><em>deux suites</em><a class="hl ok" href="#s-mono">adjacentes : $\nearrow$, $\searrow$, $v_n - u_n\to0$</a></div></li>
<li><div class="hr"><em>bornée, sans formule</em><a class="hl" href="#s-bw">Bolzano-Weierstrass</a></div></li>
<li><div class="hr"><em>complexe</em><a class="hl" href="#s-cpx">$\operatorname{Re}$, $\operatorname{Im}$, ou $|z_n - \ell|\to0$</a></div></li>
</ul></div></div>
`,
"Dénombrement": R`
<nav class="msum"><a href="#d-not">Notations</a><a href="#d-card">Cardinal</a><a href="#d-union">Réunion</a><a href="#d-prod">Produit</a><a href="#d-modele">Le bon modèle</a><a href="#d-list">p-listes</a><a href="#d-arr">Arrangements</a><a href="#d-perm">Permutations</a><a href="#d-comb">Combinaisons</a><a href="#d-parties">Parties</a><a href="#d-double">Double comptage</a><a href="#d-tiroirs">Tiroirs</a><a href="#d-denom">Dénombrable</a><a href="#d-enonce">L'énoncé</a><a href="#d-erreurs">Erreurs</a><a href="#d-entrainement">S'entraîner</a><a href="#d-exos">Exercices</a><a href="#d-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : l'ensemble qu'on compte $\cB E$. <span class="kO">orange</span> : chaque étape de choix et son nombre de possibilités. <span class="kR">rouge</span> : ce qu'on retire (complémentaire, doublons). <span class="kV">violet</span> : les entiers $\cV n$, $\cV p$, $\cV k$. <span class="kG">vert</span> : le résultat.</p>

<h2 id="d-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>Nombre</th></tr>
<tr><td>Cardinal</td><td>$\operatorname{Card}(E)$, $|E|$, $\#E$</td><td>Le nombre d'éléments, $\operatorname{Card}(\varnothing) = 0$.</td></tr>
<tr><td>Entiers de $1$ à $n$</td><td>$[\![1, \cV n]\!]$</td><td>$\cV n$ éléments ; $[\![a, b]\!]$ en a $b - a + 1$.</td></tr>
<tr><td>Applications de $E$ dans $F$</td><td>$F^E$</td><td>$\operatorname{Card}(F)^{\operatorname{Card}(E)}$</td></tr>
<tr><td>Parties de $E$</td><td>$\mathcal P(E)$</td><td>$2^{\operatorname{Card}(E)}$</td></tr>
<tr><td>Permutations de $E$</td><td>$S(E)$, $S_n$</td><td>$\cV n!$</td></tr>
<tr><td>Parties à $p$ éléments</td><td>$\binom{\cV n}{\cV p}$</td><td>$\frac{n!}{p!\,(n - p)!}$ si $0\leq p\leq n$, $0$ sinon.</td></tr>
<tr><td>$p$-listes d'éléments distincts</td><td>$A_n^p$ <span class="hp">hors programme</span></td><td>$\frac{n!}{(n - p)!} = n(n - 1)\cdots(n - p + 1)$</td></tr>
</table>

<h2 id="d-card">2. Cardinal d'un ensemble fini</h2>
<div class="sbox">$$\textbf{Équipotence}:\ \text{s'il existe une bijection}\ E\to F,\ \text{alors}\ \operatorname{Card}(E) = \operatorname{Card}(F).$$
$$A\subset E\Rightarrow\operatorname{Card}(A)\leq\operatorname{Card}(E),\ \text{avec égalité}\iff A = E.$$</div>
<p>C'est l'idée la plus puissante du chapitre : <b>pour compter un ensemble difficile, on le met en bijection avec un ensemble facile</b> (exemples 10 et exercice 4).</p>
<p class="ml">Applications entre ensembles de même cardinal</p>
<div class="sbox">$$\operatorname{Card}(E) = \operatorname{Card}(F)\ \text{finis},\ f:E\to F:\qquad f\ \text{injective}\iff f\ \text{surjective}\iff f\ \text{bijective}.$$</div>
<p>Il suffit donc de vérifier <b>une seule</b> des deux propriétés.</p>

<h2 id="d-union">3. Réunion, complémentaire, différence</h2>
<div class="sbox">$$A\cap B = \varnothing:\ \operatorname{Card}(A\cup B) = \operatorname{Card}(A) + \operatorname{Card}(B).\qquad\operatorname{Card}(A\cup B) = \operatorname{Card}(A) + \operatorname{Card}(B) - \cR{\operatorname{Card}(A\cap B)}.$$
$$\operatorname{Card}(\overline A) = \operatorname{Card}(E) - \operatorname{Card}(A).\qquad B\subset A:\ \operatorname{Card}(A\setminus B) = \operatorname{Card}(A) - \operatorname{Card}(B).$$</div>
<p class="ml">La méthode</p>
<p><b>1.</b> Si l'ensemble se coupe en <b>cas qui ne se chevauchent pas</b>, on additionne (principe additif). <b>2.</b> Si les cas se chevauchent, on retire l'intersection, comptée deux fois. <b>3.</b> « <b>Au moins un</b> » : on compte presque toujours le <b>complémentaire</b> (« aucun »).</p>

<p class="ml">Exemple 1 : divisibles par $2$ ou par $3$</p>
<p>Combien d'entiers de $[\![1, 100]\!]$ sont divisibles par $2$ ou par $3$ ?</p>
<p><b>Étape 1 : Rappel.</b> $\operatorname{Card}(A\cup B) = \operatorname{Card}(A) + \operatorname{Card}(B) - \operatorname{Card}(A\cap B)$. Et les multiples de $d$ dans $[\![1, n]\!]$ sont au nombre de $\lfloor\frac nd\rfloor$.</p>
<p><b>Étape 2 : Les deux ensembles.</b> $A$ : multiples de $2$, $\frac{100}2 = 50$, donc $\operatorname{Card}(A) = 50$ ($2, 4, \dots, 100$). $B$ : multiples de $3$, $\frac{100}3 = 33{,}33\ldots$, donc $\operatorname{Card}(B) = \lfloor33{,}33\rfloor = 33$ ($3, 6, \dots, 99 = 3\times33$).</p>
<p><b>Étape 3 : L'intersection.</b> Divisible par $2$ et par $3$ $\iff$ divisible par $6$ ($2$ et $3$ premiers entre eux) : $\frac{100}6 = 16{,}66\ldots$, donc $\cR{\operatorname{Card}(A\cap B) = 16}$ ($6\times16 = 96\leq100 \lt 102$).</p>
<p><b>Étape 4 : Conclusion.</b></p>
$$\cG{\operatorname{Card}(A\cup B) = 50 + 33 - 16 = 67}.$$

<p class="ml">Exemple 2 : la formule du crible pour trois ensembles <span class="hp">hors programme</span></p>
<p>Combien d'entiers de $[\![1, 100]\!]$ sont divisibles par $2$, $3$ ou $5$ ?</p>
<p><b>Étape 1 : Rappel.</b> Pour trois ensembles (à redémontrer en appliquant deux fois la formule à deux ensembles) :</p>
$$|A\cup B\cup C| = |A| + |B| + |C| - |A\cap B| - |A\cap C| - |B\cap C| + |A\cap B\cap C|.$$
<p><b>Étape 2 : Les simples.</b> $|A| = 50$ (par $2$), $|B| = 33$ (par $3$), $|C| = 20$ (par $5$).</p>
<p><b>Étape 3 : Les doubles.</b> Par $6$ : $16$. Par $10$ : $10$. Par $15$ : $6$.</p>
<p><b>Étape 4 : La triple.</b> Par $30$ : $3$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
<p>Simples : $50 + 33 + 20 = 103$. Doubles : $16 + 10 + 6 = 32$. Triple : $3$.</p>
$$\cG{103 - 32 + 3 = 74}.$$

<h2 id="d-prod">4. Produit cartésien, principe multiplicatif</h2>
<div class="sbox">$$\operatorname{Card}(E\times F) = \operatorname{Card}(E)\times\operatorname{Card}(F),\qquad\operatorname{Card}(E^{\cV p}) = \operatorname{Card}(E)^{\cV p}.$$</div>
<p><b>Principe multiplicatif</b> : si on construit un objet en $k$ étapes, avec $\cO{n_1}$ choix à la 1<sup>re</sup> étape, puis $\cO{n_2}$ choix à la 2<sup>e</sup> <b>quelle que soit</b> la 1<sup>re</sup>, etc., et si chaque objet est obtenu <b>une seule fois</b>, il y a $\cO{n_1}\times\cO{n_2}\times\dots\times\cO{n_k}$ objets.</p>
<p class="ml piege">Piège</p>
<p>Si un même objet peut être construit de plusieurs façons, on le compte plusieurs fois. Exemple : choisir « un premier élève, puis un deuxième » donne $n(n - 1)$ <b>couples</b>, mais chaque <b>paire</b> est comptée $2$ fois : il y a $\frac{n(n - 1)}2$ paires.</p>

<p class="ml">Exemple 3 : des plaques</p>
<p>Une plaque comporte $2$ lettres puis $3$ chiffres. Combien de plaques ? Combien avec deux lettres différentes ?</p>
<p><b>Étape 1 : Rappel.</b> Principe multiplicatif : on multiplie les nombres de choix de chaque étape.</p>
<p><b>Étape 2 : Les étapes.</b> 1<sup>re</sup> lettre : $\cO{26}$. 2<sup>e</sup> lettre : $\cO{26}$. Chaque chiffre : $\cO{10}$.</p>
<p><b>Étape 3 : Le total.</b> $26\times26 = 676$ pour les lettres, $10\times10\times10 = 1000$ pour les chiffres, donc $26^2\times10^3 = 676\times1000 = 676\,000$.</p>
<p><b>Étape 4 : Lettres différentes.</b> La 2<sup>e</sup> lettre n'a plus que $\cO{25}$ choix : $26\times25\times10^3 = 650\,000$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{676\,000}$ plaques, dont $\cG{650\,000}$ avec deux lettres différentes.</p>

<h2 id="d-modele">5. Choisir le bon modèle</h2>
<p>Avant tout calcul, on se pose <b>deux questions</b> : l'<b>ordre</b> compte-t-il ? Les <b>répétitions</b> sont-elles permises ?</p>
<table class="mtab">
<tr><th></th><th>Répétitions permises</th><th>Éléments distincts</th></tr>
<tr><td><b>Ordre compte</b></td><td>$p$-listes : $\cV n^{\cV p}$<br>tirages successifs <b>avec</b> remise</td><td>arrangements : $\frac{n!}{(n - p)!}$<br>tirages successifs <b>sans</b> remise</td></tr>
<tr><td><b>Ordre ne compte pas</b></td><td>$\binom{n + p - 1}p$ <span class="hp">hors programme</span><br>poignées avec répétition</td><td>combinaisons : $\binom{\cV n}{\cV p}$<br>tirages <b>simultanés</b></td></tr>
</table>
<p>Cas particulier : ranger <b>tous</b> les $n$ éléments dans un ordre : $n!$ permutations.</p>

<h2 id="d-list">6. Les $p$-listes (applications)</h2>
<div class="sbox">$$\operatorname{Card}(F^E) = \operatorname{Card}(F)^{\operatorname{Card}(E)}:\ \text{il y a}\ \cV n^{\cV p}\ \text{applications d'un ensemble à}\ \cV p\ \text{éléments dans un ensemble à}\ \cV n\ \text{éléments}.$$</div>
<p>Une application $f:[\![1, p]\!]\to F$, c'est la liste $(f(1), \dots, f(p))$ : chaque image a $n$ choix.</p>
<p class="ml">Exemple 4 : des mots, et « au moins un »</p>
<p>Combien de mots de $5$ lettres (sans sens) ? Combien contiennent au moins une fois la lettre A ?</p>
<p><b>Étape 1 : Rappel.</b> $p$-listes d'un ensemble à $n$ éléments : $n^p$. Et $\operatorname{Card}(\overline A) = \operatorname{Card}(E) - \operatorname{Card}(A)$.</p>
<p><b>Étape 2 : Tous les mots.</b> $5$ positions, $26$ choix chacune : $26^5$.</p>
<p><b>Étape 3 : Le complémentaire.</b> « Au moins un A » a pour contraire « aucun A » : $5$ lettres parmi $25$, soit $\cR{25^5}$ mots.</p>
<p><b>Étape 4 : Les puissances.</b> $26^2 = 676$, $26^3 = 676\times26 = 17\,576$, $26^4 = 17\,576\times26 = 456\,976$, $26^5 = 456\,976\times26 = 11\,881\,376$. Et $25^2 = 625$, $25^3 = 15\,625$, $25^4 = 390\,625$, $25^5 = 9\,765\,625$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{26^5 - 25^5 = 11\,881\,376 - 9\,765\,625 = 2\,115\,751}$.</p>
<p class="ml piege">Piège</p>
<p>Compter « on place un A ($5$ places), puis le reste librement ($26^4$) » donne $5\times26^4$ : les mots avec plusieurs A sont comptés <b>plusieurs fois</b>. Le complémentaire évite ce piège.</p>

<h2 id="d-arr">7. Les arrangements (injections)</h2>
<div class="sbox">$$\text{Nombre d'injections de}\ E\ (\cV p\ \text{éléments})\ \text{dans}\ F\ (\cV n\ \text{éléments}):\quad n(n - 1)\cdots(n - p + 1) = \frac{n!}{(n - p)!}\ \ (p\leq n),\qquad0\ \text{si}\ p > n.$$</div>
<p class="ml">Exemple 5 : un podium</p>
<p>$10$ coureurs. Combien de podiums (or, argent, bronze) possibles ?</p>
<p><b>Étape 1 : Rappel.</b> Ordre important, pas de répétition : $\frac{n!}{(n - p)!} = n(n - 1)\cdots(n - p + 1)$.</p>
<p><b>Étape 2 : Les étapes.</b> Or : $\cO{10}$ choix. Argent : $\cO9$ (pas le médaillé d'or). Bronze : $\cO8$.</p>
<p><b>Étape 3 : Conclusion.</b> $\cG{10\times9\times8 = 720}$ podiums $= \frac{10!}{7!}$.</p>

<h2 id="d-perm">8. Les permutations, les anagrammes</h2>
<div class="sbox">$$\text{Bijections de}\ E\ \text{dans}\ F,\ \operatorname{Card} = \cV n:\ \ \cV n!\qquad\operatorname{Card}(S_n) = n!\qquad\text{Anagrammes}:\ \frac{n!}{\cR{k_1!\,k_2!\cdots k_r!}}\ \ (\text{lettre}\ i\ \text{répétée}\ k_i\ \text{fois}).$$</div>
<p>Pourquoi on divise : si on numérote les lettres répétées, on a $n!$ mots ; en effaçant les numéros, chaque mot a été compté $k_1!\cdots k_r!$ fois (les permutations des lettres identiques entre elles).</p>
<p class="ml">Exemple 6 : anagrammes de BANANE</p>
<p><b>Étape 1 : Rappel.</b> $\frac{n!}{k_1!\cdots k_r!}$ avec $k_i$ le nombre de répétitions de chaque lettre.</p>
<p><b>Étape 2 : On compte les lettres.</b> $n = 6$ : B ($1$), A ($2$), N ($2$), E ($1$).</p>
<p><b>Étape 3 : On divise par les doublons.</b></p>
$$\frac{6!}{\cR{1!\,2!\,2!\,1!}} = \frac{6\times5\times4\times3\times2\times1}{1\times2\times2\times1} = \frac{720}4 = 180.$$
<p><b>Étape 4 : Autre méthode (combinaisons).</b> On place les A : $\binom62 = 15$. Puis les N parmi les $4$ places restantes : $\binom42 = 6$. Puis B et E : $2! = 2$. Total $15\times6\times2 = 180$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{180}$ anagrammes.</p>

<h2 id="d-comb">9. Les combinaisons</h2>
<div class="sbox">$$\binom{\cV n}{\cV p} = \frac{n!}{p!\,(n - p)!} = \frac{n(n - 1)\cdots(n - p + 1)}{p!}\qquad\binom np = \binom n{n - p}\qquad\binom np + \binom n{p + 1} = \binom{n + 1}{p + 1}\qquad p\binom np = n\binom{n - 1}{p - 1}$$</div>
<p>$\binom np$ compte les <b>parties à $p$ éléments</b> d'un ensemble à $n$ éléments : les tirages simultanés, les comités, les mains de cartes, les chemins…</p>
<p class="ml">Exemple 7 : une main de cartes</p>
<p>On tire $5$ cartes dans un jeu de $32$ (dont $4$ as). Combien de mains ? Combien avec exactement $2$ as ?</p>
<p><b>Étape 1 : Rappel.</b> Une main est une partie (pas d'ordre, pas de répétition) : $\binom np$. Plusieurs choix successifs : on multiplie.</p>
<p><b>Étape 2 : Toutes les mains.</b></p>
$$\binom{32}5 = \frac{32\times31\times30\times29\times28}{5\times4\times3\times2\times1}.$$
<p>On simplifie avant de multiplier : $\frac{30}{5\times3\times2} = 1$ et $\frac{32}4 = 8$, donc $\binom{32}5 = 8\times31\times29\times28$. Puis $8\times31 = 248$, $248\times29 = 7192$, $7192\times28 = 201\,376$.</p>
<p><b>Étape 3 : Les $2$ as.</b> On choisit $2$ as parmi $4$ : $\cO{\binom42 = 6}$.</p>
<p><b>Étape 4 : Les $3$ autres cartes</b> parmi les $28$ qui ne sont pas des as :</p>
$$\cO{\binom{28}3 = \frac{28\times27\times26}{3\times2\times1} = 28\times\frac{27}3\times\frac{26}2 = 28\times9\times13 = 252\times13 = 3276}.$$
<p><b>Étape 5 : Conclusion</b> (principe multiplicatif) : $6\times3276 = 6\times3000 + 6\times276 = 18\,000 + 1656$, soit $\cG{19\,656}$ mains avec exactement $2$ as.</p>

<p class="ml">Exemple 8 : au moins un as</p>
<p><b>Étape 1 : Rappel.</b> « Au moins un » : on retire le complémentaire « aucun ».</p>
<p><b>Étape 2 : Aucun as.</b> Les $5$ cartes parmi les $28$ autres :</p>
$$\cR{\binom{28}5 = \frac{28\times27\times26\times25\times24}{5\times4\times3\times2\times1}}:\quad\frac{25\times24}{5\times4\times3\times2} = \frac{600}{120} = 5,\ \text{donc}\ \binom{28}5 = 28\times27\times26\times5 = 756\times26\times5 = 19\,656\times5 = 98\,280.$$
<p><b>Étape 3 : Conclusion.</b> $201\,376 - 98\,280 = 103\,096$ : $\cG{103\,096}$ mains avec au moins un as (un peu plus de la moitié des mains).</p>

<p class="ml">Exemple 9 : des chemins dans une grille</p>
<p>Combien de chemins vont de $(0, 0)$ à $(5, 3)$ avec des pas « droite » ou « haut » ?</p>
<p><b>Étape 1 : Rappel.</b> $\binom np$ = nombre de façons de choisir $p$ positions parmi $n$.</p>
<p><b>Étape 2 : On code le chemin.</b> Il faut $5$ pas D et $3$ pas H, soit $8$ pas. Un chemin = un mot de $8$ lettres avec $3$ H.</p>
<p><b>Étape 3 : La bijection.</b> Le mot est déterminé par les <b>positions</b> des $3$ H parmi les $8$ : c'est une partie à $3$ éléments de $[\![1, 8]\!]$.</p>
<p><b>Étape 4 : Conclusion.</b> $\binom83 = \frac{8\times7\times6}{3\times2\times1} = \frac{336}6 = 56$ : $\cG{56}$ chemins.</p>

<h2 id="d-parties">10. Le nombre de parties</h2>
<div class="sbox">$$\operatorname{Card}\big(\mathcal P(E)\big) = 2^{\operatorname{Card}(E)}\qquad\qquad\sum_{p=0}^n\binom np = 2^n.$$</div>
<p class="ml">Exemple 10 : $\operatorname{Card}(\mathcal P(E)) = 2^n$ par une bijection</p>
<p><b>Étape 1 : Rappel.</b> Une bijection conserve le cardinal, et $\operatorname{Card}(F^E) = \operatorname{Card}(F)^{\operatorname{Card}(E)}$.</p>
<p><b>Étape 2 : La bijection.</b> À une partie $A$ de $E$, on associe sa fonction indicatrice $\mathbb 1_A:E\to\{0, 1\}$ ($1$ sur $A$, $0$ ailleurs). Réciproquement, $f:E\to\{0, 1\}$ donne $A = f^{-1}(\{1\})$.</p>
<p><b>Étape 3 : On compte les applications.</b> $\operatorname{Card}\big(\{0, 1\}^E\big) = 2^n$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\operatorname{Card}(\mathcal P(E)) = 2^n}$. Concrètement : chaque élément est « dedans » ou « dehors », $2$ choix, $n$ fois.</p>

<h2 id="d-double">11. Démontrer une formule en comptant deux fois</h2>
<p>Pour montrer $a = b$ entre entiers : on trouve un ensemble qu'on compte d'une façon (on trouve $a$), puis d'une autre (on trouve $b$).</p>

<p class="ml">Exemple 11 : $\sum_{k=0}^n\binom nk = 2^n$</p>
<p><b>Étape 1 : Rappel.</b> $\operatorname{Card}(\mathcal P(E)) = 2^n$, et une réunion disjointe se compte en additionnant.</p>
<p><b>Étape 2 : On découpe $\mathcal P(E)$ selon la taille.</b> $\mathcal P(E) = \bigsqcup_{k=0}^n\mathcal P_k(E)$, où $\mathcal P_k(E)$ = parties à $k$ éléments. Les morceaux sont disjoints.</p>
<p><b>Étape 3 : On compte.</b> $\operatorname{Card}(\mathcal P_k(E)) = \binom nk$, donc $\operatorname{Card}(\mathcal P(E)) = \sum_{k=0}^n\binom nk$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\sum_{k=0}^n\binom nk = 2^n}$ (on le retrouve aussi avec le binôme, $(1 + 1)^n$).</p>

<p class="ml">Exemple 12 : $k\binom nk = n\binom{n - 1}{k - 1}$ (le comité et son président)</p>
<p><b>Étape 1 : Rappel.</b> Principe multiplicatif, appliqué dans deux ordres différents.</p>
<p><b>Étape 2 : L'ensemble.</b> Dans un groupe de $n$ personnes, on compte les comités de $k$ personnes <b>avec un président</b> choisi dans le comité.</p>
<p><b>Étape 3 : Comité d'abord.</b> Le comité : $\cO{\binom nk}$ choix. Le président parmi ses membres : $\cO k$ choix. Total $k\binom nk$.</p>
<p><b>Étape 4 : Président d'abord.</b> Le président : $\cO n$ choix. Les $k - 1$ autres membres parmi les $n - 1$ restants : $\cO{\binom{n - 1}{k - 1}}$. Total $n\binom{n - 1}{k - 1}$.</p>
<p><b>Étape 5 : Conclusion.</b> Même ensemble, donc $\cG{k\binom nk = n\binom{n - 1}{k - 1}}$.</p>

<p class="ml">Exemple 13 : la formule de Vandermonde</p>
<p>Montrer que $\displaystyle\sum_{k=0}^p\binom ak\binom b{p - k} = \binom{a + b}p$.</p>
<p><b>Étape 1 : Rappel.</b> Réunion disjointe (on additionne) et principe multiplicatif.</p>
<p><b>Étape 2 : L'ensemble.</b> Une classe de $a$ filles et $b$ garçons. On compte les groupes de $p$ élèves : $\binom{a + b}p$.</p>
<p><b>Étape 3 : On découpe selon le nombre $\cV k$ de filles.</b> Les cas $k = 0, 1, \dots, p$ sont disjoints.</p>
<p><b>Étape 4 : Un cas.</b> $\cV k$ filles parmi $a$ : $\cO{\binom ak}$. Puis $p - k$ garçons parmi $b$ : $\cO{\binom b{p - k}}$. Soit $\binom ak\binom b{p - k}$ groupes.</p>
<p><b>Étape 5 : Conclusion.</b> On additionne les cas : $\cG{\sum_{k=0}^p\binom ak\binom b{p - k} = \binom{a + b}p}$.</p>

<h2 id="d-tiroirs">12. Le principe des tiroirs</h2>
<div class="sbox">$$\text{S'il existe une injection}\ E\to F,\ \text{alors}\ \operatorname{Card}(E)\leq\operatorname{Card}(F).\quad\text{Donc si}\ \operatorname{Card}(E) > \operatorname{Card}(F),\ \text{toute}\ f:E\to F\ \text{prend deux fois la même valeur}.$$</div>
<p class="ml">Exemple 14 : deux personnes nées le même mois</p>
<p>Parmi $13$ personnes, montrer que deux sont nées le même mois.</p>
<p><b>Étape 1 : Rappel.</b> Si $\operatorname{Card}(E) > \operatorname{Card}(F)$, aucune application $E\to F$ n'est injective.</p>
<p><b>Étape 2 : L'application.</b> $f$ associe à chaque personne son mois de naissance : $E$ a $13$ éléments, $F$ = les mois en a $12$.</p>
<p><b>Étape 3 : Conclusion.</b> $13 > 12$ : $f$ n'est pas injective, donc $\cG{\text{deux personnes ont le même mois}}$.</p>

<h2 id="d-denom">13. Ensembles dénombrables <span class="hp">programme de Spé</span></h2>
<p>$E$ est <b>dénombrable</b> s'il est en bijection avec $\mathbb N$, et <b>au plus dénombrable</b> s'il est fini ou dénombrable (en bijection avec une partie de $\mathbb N$).</p>
<div class="sbox">$$\mathbb N,\ \mathbb N^*,\ \mathbb Z,\ \mathbb N^2,\ \mathbb Q\ \text{sont dénombrables}.\qquad\text{Un produit fini d'ensembles dénombrables est dénombrable}.$$</div>
<p>Pour $\mathbb Z$ : $0, 1, -1, 2, -2, \dots$ ($n\mapsto2n$ pour $n > 0$, $n\mapsto-2n + 1$ pour $n\leq0$). Pour $\mathbb N^2$ : on parcourt les diagonales $x + y = 0, 1, 2, \dots$. $\mathbb R$ n'est <b>pas</b> dénombrable (argument diagonal de Cantor, <span class="hp">hors programme</span>).</p>

<h2 id="d-enonce">14. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Tirages successifs avec remise »</b><span>Ordre, répétitions : $n^p$.</span></div>
<div><b>« Tirages successifs sans remise »</b><span>Ordre, distincts : $\frac{n!}{(n - p)!}$.</span></div>
<div><b>« Tirage simultané », « main », « comité »</b><span>Pas d'ordre, distincts : $\binom np$.</span></div>
<div><b>« Au moins un »</b><span>Complémentaire : total moins « aucun ».</span></div>
<div><b>« Exactement $k$ »</b><span>Choisir les $k$ éléments voulus, puis le reste parmi les autres, et multiplier.</span></div>
<div><b>« A ou B »</b><span>$|A| + |B| - |A\cap B|$.</span></div>
<div><b>Lettres répétées, objets identiques</b><span>$\frac{n!}{k_1!\cdots k_r!}$, ou placer chaque lettre avec des $\binom{}{}$.</span></div>
<div><b>Chemins, mots binaires</b><span>Choisir les positions d'une lettre : $\binom np$.</span></div>
<div><b>« Montrer une égalité de coefficients binomiaux »</b><span>Double comptage, ou formule de Pascal, ou binôme.</span></div>
<div><b>« Montrer que deux … ont le même … »</b><span>Principe des tiroirs.</span></div>
<div><b>« Combien de parties de $E$ »</b><span>$2^n$ : dedans ou dehors.</span></div>
<div><b>« Applications strictement croissantes »</b><span>Bijection avec les parties de l'image : $\binom np$.</span></div>
<div><b>Un ensemble compliqué</b><span>Le mettre en bijection avec un ensemble qu'on sait compter.</span></div>
</div>

<h2 id="d-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Utiliser $\frac{n!}{(n - p)!}$ quand l'ordre ne compte pas : on compte chaque groupe $p!$ fois.</p>
<p><b>2.</b> Compter « au moins un » en fixant un élément puis le reste librement : doublons.</p>
<p><b>3.</b> Oublier de retirer $|A\cap B|$ dans une réunion.</p>
<p><b>4.</b> Additionner au lieu de multiplier : « et puis » = produit, « ou bien » (cas disjoints) = somme.</p>
<p><b>5.</b> Oublier de diviser par $k!$ pour les lettres identiques.</p>
<p><b>6.</b> Écrire $\binom np$ avec $p > n$ non nul : il vaut $0$.</p>
<p><b>7.</b> Compter des cas qui se chevauchent comme s'ils étaient disjoints.</p>
<p><b>8.</b> Confondre $n^p$ (applications) et $p^n$ : c'est (nombre d'images possibles)$^{\text{nombre d'éléments de départ}}$.</p>
<p><b>9.</b> Donner un résultat sans phrase : toujours dire ce qu'on choisit à chaque étape.</p>
</div>

<h2 id="d-entrainement">S'entraîner</h2>
<div data-mlab="modele"></div>
<div data-mlab="denex"></div>
<div data-mlab="pascal"></div>
<div data-mlab="quizden"></div>

<h2 id="d-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : les surjections sur $2$ et $3$ éléments</p>
<p>Combien de surjections de $[\![1, n]\!]$ ($n\geq1$) sur $\{a, b\}$ ? Sur $\{a, b, c\}$ ?</p>
<p><b>Étape 1 : Rappel.</b> $n^p$ applications, complémentaire, et $|A\cup B\cup C|$ par le crible (exemple 2).</p>
<p><b>Étape 2 : Sur $\{a, b\}$.</b> Il y a $2^n$ applications. Les non surjectives n'atteignent qu'une valeur : ce sont les $\cR2$ applications constantes. Donc $2^n - 2$ surjections.</p>
<p><b>Étape 3 : Sur $\{a, b, c\}$, ce qu'on retire.</b> $A_a$ = applications qui évitent $a$ : $|A_a| = 2^n$, de même pour $b$ et $c$. $A_a\cap A_b$ = constantes égales à $c$ : $1$. $A_a\cap A_b\cap A_c = \varnothing$.</p>
<p><b>Étape 4 : Le crible.</b> $|A_a\cup A_b\cup A_c| = 3\times2^n - 3\times1 + 0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{2^n - 2}$ et $\cG{3^n - 3\times2^n + 3}$ surjections. Contrôle $n = 3$ : $27 - 24 + 3 = 6 = 3!$.</p>

<p class="ml">Exercice 2 : MISSISSIPPI</p>
<p><b>Étape 1 : Rappel.</b> $\frac{n!}{k_1!\cdots k_r!}$.</p>
<p><b>Étape 2 : Les lettres.</b> $n = 11$ : M ($1$), I ($4$), S ($4$), P ($2$).</p>
<p><b>Étape 3 : Le calcul.</b></p>
$$\frac{11!}{1!\,4!\,4!\,2!} = \frac{39\,916\,800}{24\times24\times2} = \frac{39\,916\,800}{1152} = 34\,650.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{34\,650}$ anagrammes. Contrôle : $\binom{11}4\binom74\binom32 = 330\times35\times3 = 34\,650$.</p>

<p class="ml">Exercice 3 : les diagonales d'un polygone</p>
<p>Combien de diagonales a un polygone convexe à $n$ sommets ?</p>
<p><b>Étape 1 : Rappel.</b> Un segment entre deux sommets = une paire de sommets : $\binom n2$.</p>
<p><b>Étape 2 : Tous les segments.</b> $\binom n2 = \frac{n(n - 1)}2$.</p>
<p><b>Étape 3 : On retire les côtés.</b> Il y a $\cR n$ côtés.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\frac{n(n - 1)}2 - n = \frac{n(n - 3)}2}$. Contrôle : un carré a $\frac{4\times1}2 = 2$ diagonales.</p>

<p class="ml">Exercice 4 : les applications strictement croissantes</p>
<p>Combien d'applications strictement croissantes de $[\![1, p]\!]$ dans $[\![1, n]\!]$ ?</p>
<p><b>Étape 1 : Rappel.</b> Une bijection conserve le cardinal.</p>
<p><b>Étape 2 : La bijection.</b> À $f$ strictement croissante, on associe son image $\{f(1), \dots, f(p)\}$ : une partie à $p$ éléments (les $f(i)$ sont distincts).</p>
<p><b>Étape 3 : Bijective.</b> Une partie à $p$ éléments, rangée dans l'ordre croissant $a_1 \lt \dots \lt a_p$, donne une seule $f$ : $f(i) = a_i$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\binom np}$ applications.</p>

<h2 id="d-arbre">L'arbre du dénombrement</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Compter des objets</span><ul>
<li><div class="hr"><em>des cas séparés</em><span class="hq">Ils se chevauchent ?</span><ul>
<li><div class="hr"><em>non</em><a class="hl ok" href="#d-union">on additionne</a></div></li>
<li><div class="hr"><em>oui</em><a class="hl" href="#d-union">$|A| + |B| - |A\cap B|$</a></div></li>
<li><div class="hr"><em>« au moins un »</em><a class="hl" href="#d-list">total moins « aucun »</a></div></li>
</ul></div></li>
<li><div class="hr"><em>des choix successifs</em><span class="hq">L'ordre compte ?</span><ul>
<li><div class="hr"><em>oui</em><span class="hq">Répétitions ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#d-list">$n^p$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl ok" href="#d-arr">$\frac{n!}{(n - p)!}$</a></div></li>
<li><div class="hr"><em>tous rangés</em><a class="hl ok" href="#d-perm">$n!$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>non</em><span class="hq">Répétitions ?</span><ul>
<li><div class="hr"><em>non</em><a class="hl ok" href="#d-comb">$\binom np$</a></div></li>
<li><div class="hr"><em>oui</em><a class="hl" href="#d-modele">$\binom{n + p - 1}p$ (hors programme)</a></div></li>
</ul></div></li>
</ul></div></li>
<li><div class="hr"><em>des mots</em><span class="hq">Lettres répétées ?</span><ul>
<li><div class="hr"><em>non</em><a class="hl" href="#d-perm">$n!$</a></div></li>
<li><div class="hr"><em>oui</em><a class="hl" href="#d-perm">$\frac{n!}{k_1!\cdots k_r!}$</a></div></li>
<li><div class="hr"><em>deux lettres</em><a class="hl" href="#d-comb">positions d'une lettre : $\binom np$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>des parties</em><a class="hl" href="#d-parties">$2^n$ en tout, $\binom np$ de taille $p$</a></div></li>
<li><div class="hr"><em>une égalité</em><a class="hl" href="#d-double">compter deux fois le même ensemble</a></div></li>
<li><div class="hr"><em>une existence</em><a class="hl" href="#d-tiroirs">principe des tiroirs</a></div></li>
<li><div class="hr"><em>rien ne marche</em><a class="hl end" href="#d-card">bijection vers un ensemble connu</a></div></li>
</ul></div></div>
`,
"Arithmétique dans ℤ": R`
<nav class="msum"><a href="#z-not">Notations</a><a href="#z-div">Divisibilité</a><a href="#z-eucl">Division euclidienne</a><a href="#z-pgcd">PGCD, Euclide</a><a href="#z-bez">Bézout</a><a href="#z-gauss">Gauss</a><a href="#z-dioph">$ax + by = c$</a><a href="#z-ppcm">PPCM</a><a href="#z-prem">Nombres premiers</a><a href="#z-cong">Congruences</a><a href="#z-inv">Inverse modulo $n$</a><a href="#z-fermat">Fermat</a><a href="#z-chin">Lemme chinois</a><a href="#z-enonce">L'énoncé</a><a href="#z-erreurs">Erreurs</a><a href="#z-entrainement">S'entraîner</a><a href="#z-exos">Exercices</a><a href="#z-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les entiers étudiés $\cB a$, $\cB b$. <span class="kR">rouge</span> : les diviseurs et le PGCD $\cR d$. <span class="kO">orange</span> : les coefficients de Bézout $\cO u$, $\cO v$. <span class="kV">violet</span> : les nombres premiers $\cV p$ et le module $\cV n$. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="z-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>Définition</th></tr>
<tr><td>Divise</td><td>$a\mid b$</td><td>$\exists k\in\mathbb Z,\ b = ka$.</td></tr>
<tr><td>Multiples</td><td>$a\mathbb Z$</td><td>$a\mid b\iff b\mathbb Z\subset a\mathbb Z$.</td></tr>
<tr><td>Diviseurs</td><td>$\mathcal D(a)$</td><td>Ensemble des diviseurs de $a$ dans $\mathbb Z$.</td></tr>
<tr><td>PGCD, PPCM</td><td>$a\wedge b$, $a\vee b$</td><td>Toujours $\geq0$.</td></tr>
<tr><td>Premiers entre eux</td><td>$a\wedge b = 1$</td><td>Seuls diviseurs communs : $\pm1$.</td></tr>
<tr><td>Nombres premiers</td><td>$\mathcal P$</td><td>$p\geq2$, seuls diviseurs positifs $1$ et $p$.</td></tr>
<tr><td>Valuation</td><td>$v_p(a)$</td><td>Exposant de $p$ dans $a$.</td></tr>
<tr><td>Congruence</td><td>$a\equiv b\ [n]$</td><td>$n\mid a - b$.</td></tr>
<tr><td>Inversibles de $\mathbb Z$</td><td>$U(\mathbb Z) = \{-1, 1\}$</td><td>Associés : $a\mid b$ et $b\mid a\iff|a| = |b|$.</td></tr>
</table>

<h2 id="z-div">2. Divisibilité</h2>
<div class="sbox">$$a\mid b\ \text{et}\ b\mid c\Rightarrow a\mid c.\qquad\cR d\mid\cB a\ \text{et}\ \cR d\mid\cB b\ \Longrightarrow\ \cR d\mid\cB au + \cB bv\quad\text{pour tous}\ u, v\in\mathbb Z.$$
$$a\mid b,\ b\neq0\Rightarrow|a|\leq|b|.\qquad a\mid b\ \text{et}\ b\mid a\iff a = \pm b.\qquad a\mid b\Rightarrow ac\mid bc.$$</div>
<p class="ml">La méthode</p>
<p>Pour trouver ce que divise un $\cR d$ qui divise deux expressions, on fait une <b>combinaison</b> qui élimine $n$. Pour « $n + a$ divise $P(n)$ », on fait la division euclidienne de $P(n)$ par $n + a$.</p>

<p class="ml">Exemple 1 : éliminer $n$</p>
<p>Si $d$ divise $n + 3$ et $2n + 1$, montrer que $d\mid5$.</p>
<p><b>Étape 1 : Rappel.</b> $\cR d\mid\cB a$ et $\cR d\mid\cB b$ $\Rightarrow\cR d\mid\cB au + \cB bv$.</p>
<p><b>Étape 2 : La combinaison.</b> On veut faire disparaître $n$ : $2\times(n + 3) - 1\times(2n + 1) = 2n + 6 - 2n - 1 = 5$.</p>
<p><b>Étape 3 : Conclusion.</b> $\cG{d\mid5}$ : donc $(n + 3)\wedge(2n + 1)\in\{1, 5\}$.</p>

<p class="ml">Exemple 2 : $n + 1$ divise $n^2 + 3$</p>
<p>Trouver les $n\in\mathbb Z$ tels que $n + 1\mid n^2 + 3$.</p>
<p><b>Étape 1 : Rappel.</b> Si $d\mid a$ et $d\mid b$, alors $d$ divise toute combinaison $au + bv$.</p>
<p><b>Étape 2 : On fait apparaître $n + 1$.</b> $n^2 + 3 = (n + 1)(n - 1) + 4$.</p>
<p><b>Étape 3 : On élimine.</b> $n + 1\mid(n + 1)(n - 1)$, donc : $n + 1\mid n^2 + 3\iff n + 1\mid4$.</p>
<p><b>Étape 4 : Les diviseurs de $4$.</b> $n + 1\in\{-4, -2, -1, 1, 2, 4\}$, soit $n\in\{-5, -3, -2, 0, 1, 3\}$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{n\in\{-5, -3, -2, 0, 1, 3\}}$. Contrôle : $n = 3$, $4\mid12$.</p>

<h2 id="z-eucl">3. Division euclidienne</h2>
<div class="sbox">$$\cB a\in\mathbb Z,\ \cB b\in\mathbb N^*:\quad\exists!\,(q, r)\in\mathbb Z^2,\quad\cB a = \cB bq + r\quad\text{et}\quad0\leq r \lt \cB b.\qquad b\mid a\iff r = 0.$$</div>
<p>Pour $b > 0$ : $q = \lfloor\frac ab\rfloor$. Le reste est <b>toujours positif</b>, même si $a \lt 0$.</p>
<p class="ml">Exemple 3 : diviser un négatif</p>
<p>Division euclidienne de $-17$ par $5$.</p>
<p><b>Étape 1 : Rappel.</b> $a = bq + r$ avec $0\leq r \lt b$, et $q = \lfloor\frac ab\rfloor$.</p>
<p><b>Étape 2 : Le quotient.</b> $\frac{-17}5 = -3{,}4$, donc $q = \lfloor-3{,}4\rfloor = -4$ (et non $-3$).</p>
<p><b>Étape 3 : Le reste.</b> $r = a - bq = -17 - 5\times(-4) = -17 + 20 = 3\in[\![0, 4]\!]$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{-17 = 5\times(-4) + 3}$. (Écrire $-17 = 5\times(-3) - 2$ est faux : reste négatif.)</p>

<h2 id="z-pgcd">4. PGCD et algorithme d'Euclide</h2>
<div class="sbox">$$\cB a = \cB bq + r\ \Longrightarrow\ \cB a\wedge\cB b = \cB b\wedge r.\qquad a\wedge0 = |a|,\qquad a\wedge b = |a|\wedge|b|.$$
$$\mathcal D(a)\cap\mathcal D(b) = \mathcal D(a\wedge b):\ \text{les diviseurs communs sont les diviseurs du PGCD}.\qquad(ka)\wedge(kb) = |k|\,(a\wedge b).$$</div>
<p><b>Algorithme d'Euclide</b> : on remplace $(a, b)$ par $(b, r)$ jusqu'à un reste nul. Le PGCD est le <b>dernier reste non nul</b>.</p>

<p class="ml">Exemple 4 : $1071\wedge462$</p>
<p><b>Étape 1 : Rappel.</b> $a = bq + r\Rightarrow a\wedge b = b\wedge r$. On s'arrête au reste nul.</p>
<p><b>Étape 2 : Les divisions.</b></p>
$$\begin{aligned}1071 &= 2\times462 + \cR{147}\\462 &= 3\times147 + \cR{21}\\147 &= 7\times21 + 0\end{aligned}$$
<p><b>Étape 3 : On lit.</b> $1071\wedge462 = 462\wedge147 = 147\wedge21 = 21\wedge0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{1071\wedge462 = 21}$.</p>

<h2 id="z-bez">5. Bézout</h2>
<div class="sbox">$$\textbf{Relation de Bézout}:\ \exists\cO u, \cO v\in\mathbb Z,\ \ \cB a\cO u + \cB b\cO v = \cB a\wedge\cB b.$$
$$\textbf{Théorème de Bézout}:\ \cB a\wedge\cB b = 1\iff\exists\cO u, \cO v\in\mathbb Z,\ \cB a\cO u + \cB b\cO v = 1.$$</div>
<p>Pour trouver $u, v$ : on <b>remonte</b> l'algorithme d'Euclide (ou on tient le tableau $r_k = au_k + bv_k$, voir le corrigé interactif). Pour montrer $a\wedge b = 1$ sans calcul : trouver <b>une</b> combinaison égale à $1$.</p>
<p class="ml piege">Piège</p>
<p>$au + bv = d$ ne prouve <b>pas</b> que $d = a\wedge b$ (sauf si $d = 1$) : $2\times2 + 4\times1 = 8$, mais $2\wedge4 = 2$. Ça prouve seulement $a\wedge b\mid d$.</p>

<p class="ml">Exemple 5 : remonter Euclide</p>
<p>Trouver $u, v$ tels que $1071u + 462v = 21$.</p>
<p><b>Étape 1 : Rappel.</b> On part de l'avant-dernière division et on remplace les restes un par un.</p>
<p><b>Étape 2 : On isole $21$.</b> D'après $462 = 3\times147 + 21$ : $21 = 462 - 3\times\cR{147}$.</p>
<p><b>Étape 3 : On isole $147$.</b> D'après $1071 = 2\times462 + 147$ : $\cR{147} = 1071 - 2\times462$.</p>
<p><b>Étape 4 : On remplace et on regroupe.</b></p>
$$21 = 462 - 3\,(1071 - 2\times462) = 462 - 3\times1071 + 6\times462 = 7\times462 - 3\times1071.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{\cO u = -3,\ \cO v = 7}$. Contrôle : $-3213 + 3234 = 21$.</p>

<p class="ml">Exemple 6 : prouver $a\wedge b = 1$ par Bézout</p>
<p>Montrer que $(2n + 1)\wedge(3n + 2) = 1$ pour tout $n\in\mathbb Z$.</p>
<p><b>Étape 1 : Rappel.</b> $a\wedge b = 1\iff\exists u, v,\ au + bv = 1$.</p>
<p><b>Étape 2 : On élimine $n$.</b> $3(2n + 1) - 2(3n + 2) = 6n + 3 - 6n - 4 = -1$.</p>
<p><b>Étape 3 : On ajuste le signe.</b> $(-3)(2n + 1) + 2(3n + 2) = 1$ : $\cO u = -3$, $\cO v = 2$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(2n + 1)\wedge(3n + 2) = 1}$.</p>

<h2 id="z-gauss">6. Le lemme de Gauss et ses conséquences</h2>
<div class="sbox">$$\textbf{Gauss}:\ \cB a\mid bc\ \text{et}\ \cB a\wedge b = 1\ \Longrightarrow\ \cB a\mid c.$$
$$a\mid n,\ b\mid n,\ a\wedge b = 1\Rightarrow ab\mid n.\qquad a\wedge b = 1\ \text{et}\ a\wedge c = 1\Rightarrow a\wedge bc = 1.\qquad\text{Si}\ d = a\wedge b,\ a = da',\ b = db',\ a'\wedge b' = 1.$$</div>
<p class="ml piege">Piège</p>
<p>Sans « premiers entre eux », c'est faux : $6\mid4\times3$ mais $6\nmid4$ et $6\nmid3$. Et $2\mid12$, $4\mid12$ ne donne pas $8\mid12$.</p>

<p class="ml">Exemple 7 : $6$ divise $n^3 - n$</p>
<p><b>Étape 1 : Rappel.</b> $a\mid N$, $b\mid N$ et $a\wedge b = 1$ $\Rightarrow ab\mid N$.</p>
<p><b>Étape 2 : On factorise.</b> $n^3 - n = n(n^2 - 1) = (n - 1)\,n\,(n + 1)$ : trois entiers consécutifs.</p>
<p><b>Étape 3 : Par $2$.</b> Parmi deux entiers consécutifs, l'un est pair : $2\mid n^3 - n$.</p>
<p><b>Étape 4 : Par $3$.</b> Parmi trois entiers consécutifs, l'un est multiple de $3$ (les restes $0, 1, 2$ apparaissent tous) : $3\mid n^3 - n$.</p>
<p><b>Étape 5 : Conclusion.</b> $2\wedge3 = 1$, donc $\cG{6\mid n^3 - n}$.</p>

<h2 id="z-dioph">7. Les équations $ax + by = c$</h2>
<div class="sbox">$$ax + by = c\ \text{a des solutions entières}\iff d = a\wedge b\ \text{divise}\ c.$$
$$\text{Si}\ (x_0, y_0)\ \text{est solution}:\quad x = x_0 + k\frac bd,\quad y = y_0 - k\frac ad,\quad k\in\mathbb Z.$$</div>
<p class="ml">La méthode</p>
<p><b>1.</b> Calculer $d = a\wedge b$ ; si $d\nmid c$, pas de solution. <b>2.</b> Diviser par $d$. <b>3.</b> Bézout pour une solution particulière, multipliée par $\frac cd$. <b>4.</b> Soustraire, puis <b>Gauss</b> pour toutes les solutions.</p>

<p class="ml">Exemple 8 : $15x + 21y = 9$</p>
<p><b>Étape 1 : Rappel.</b> Solutions $\iff a\wedge b\mid c$. Puis Bézout et Gauss.</p>
<p><b>Étape 2 : Le PGCD.</b> $15\wedge21 = 3$ et $3\mid9$ : il y a des solutions. On divise par $3$ : $5x + 7y = 3$.</p>
<p><b>Étape 3 : Une solution de $5u + 7v = 1$.</b> Euclide remonté : $7 = 1\times5 + 2$ et $5 = 2\times2 + 1$, donc $1 = 5 - 2\times2 = 5 - 2(7 - 5) = 3\times5 - 2\times7$. Une autre solution, plus pratique ici : $5\times(-4) + 7\times3 = -20 + 21 = 1$ (on obtient la seconde depuis la première en ajoutant $7$ à $u$ et en retirant $5$ à $v$ : $3 - 7 = -4$, $-2 + 5 = 3$). On multiplie par $3$ : $5\times(-12) + 7\times9 = -60 + 63 = 3$, donc $(x_0, y_0) = (-12, 9)$.</p>
<p><b>Étape 4 : On soustrait.</b> $5x + 7y = 3 = 5x_0 + 7y_0$ donne :</p>
$$5(x + 12) = -7(y - 9).$$
<p><b>Étape 5 : Gauss.</b> $7\mid5(x + 12)$ et $7\wedge5 = 1$, donc $7\mid x + 12$ : $x = -12 + 7k$. On remplace : $5\times7k = -7(y - 9)$, donc $y = 9 - 5k$.</p>
<p><b>Étape 6 : Conclusion.</b> $\cG{\mathcal S = \{(-12 + 7k,\ 9 - 5k),\ k\in\mathbb Z\}}$. Contrôle $k = 2$ : $(2, -1)$, $30 - 21 = 9$.</p>

<h2 id="z-ppcm">8. PPCM</h2>
<div class="sbox">$$a\vee b = \text{le plus petit multiple commun}\ \geq0.\qquad a\mid m\ \text{et}\ b\mid m\iff a\vee b\mid m.\qquad(a\wedge b)\times(a\vee b) = |ab|.$$</div>
<p class="ml">Exemple 9 : $1071\vee462$</p>
<p><b>Étape 1 : Rappel.</b> $(a\wedge b)(a\vee b) = |ab|$.</p>
<p><b>Étape 2 : On utilise l'exemple 4.</b> $1071\wedge462 = 21$.</p>
<p><b>Étape 3 : Le calcul.</b> $1071 = 21\times51$ (car $21\times50 = 1050$ et $1050 + 21 = 1071$), donc $1071\vee462 = \frac{1071\times462}{21} = 51\times462 = 50\times462 + 462 = 23\,100 + 462$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{1071\vee462 = 23\,562}$.</p>

<h2 id="z-prem">9. Nombres premiers</h2>
<div class="sbox">$$\text{Tout}\ n\geq2\ \text{a un diviseur premier}.\qquad n\ \text{non premier}\Rightarrow n\ \text{a un diviseur premier}\ \cV p\leq\sqrt n.\qquad\mathcal P\ \text{est infini}.$$
$$\textbf{Lemme d'Euclide}:\ \cV p\mid ab\Rightarrow\cV p\mid a\ \text{ou}\ \cV p\mid b.\qquad\cV p\nmid a\Rightarrow\cV p\wedge a = 1.$$
$$\textbf{Décomposition}:\ n = \prod_{p\in\mathcal P}p^{v_p(n)}\ \text{(unique)}.\qquad a\mid b\iff\forall p,\ v_p(a)\leq v_p(b).$$
$$a\wedge b = \prod p^{\min(v_p(a), v_p(b))},\qquad a\vee b = \prod p^{\max(v_p(a), v_p(b))}.$$</div>

<p class="ml">Exemple 10 : $221$ est-il premier ?</p>
<p><b>Étape 1 : Rappel.</b> Si $n$ n'est pas premier, il a un diviseur premier $\cV p\leq\sqrt n$.</p>
<p><b>Étape 2 : La borne.</b> $14^2 = 196\leq221 \lt 225 = 15^2$ : on teste les premiers $\cV p\leq14$, soit $2, 3, 5, 7, 11, 13$.</p>
<p><b>Étape 3 : Les tests, un par un.</b></p>
<ul><li>$2$ : $221$ est impair, non.</li><li>$3$ : $2 + 2 + 1 = 5$ n'est pas multiple de $3$, non.</li><li>$5$ : il ne finit pas par $0$ ou $5$, non.</li><li>$7$ : $7\times31 = 217$, reste $221 - 217 = 4$, non.</li><li>$11$ : $11\times20 = 220$, reste $1$, non.</li><li>$13$ : $13\times17 = 13\times10 + 13\times7 = 130 + 91 = 221$, oui.</li></ul>
<p><b>Étape 4 : Conclusion.</b> $\cG{221 = 13\times17\ \text{n'est pas premier}}$.</p>

<p class="ml">Exemple 11 : PGCD, PPCM et diviseurs par décomposition</p>
<p>$a = 360$, $b = 84$.</p>
<p><b>Étape 1 : Rappel.</b> $\wedge$ : exposants minimum. $\vee$ : exposants maximum.</p>
<p><b>Étape 2 : Les décompositions</b>, en divisant par les premiers dans l'ordre : $360 = 2\times180 = 2\times2\times90 = 2\times2\times2\times45 = 2^3\times3\times15 = 2^3\times3^2\times5$. Et $84 = 2\times42 = 2\times2\times21 = 2^2\times3\times7$.</p>
<p><b>Étape 3 : Le PGCD.</b> $2^{\min(3, 2)}\times3^{\min(2, 1)}\times5^0\times7^0 = 2^2\times3 = 12$.</p>
<p><b>Étape 4 : Le PPCM.</b> $2^{\max(3, 2)}\times3^{\max(2, 1)}\times5\times7 = 8\times9\times5\times7 = 72\times35 = 2520$. Contrôle : $12\times2520 = 30\,240$ et $360\times84 = 30\,240$.</p>
<p><b>Étape 5 : Les diviseurs de $360$.</b> Un diviseur positif est $2^i3^j5^k$ avec $0\leq i\leq3$, $0\leq j\leq2$, $0\leq k\leq1$ : $4\times3\times2 = 24$ diviseurs.</p>
<p><b>Étape 6 : Conclusion.</b> $\cG{360\wedge84 = 12,\ 360\vee84 = 2520}$, et $360$ a $24$ diviseurs positifs.</p>

<p class="ml">Exemple 12 : il y a une infinité de nombres premiers</p>
<p><b>Étape 1 : Rappel.</b> Tout entier $\geq2$ a un diviseur premier.</p>
<p><b>Étape 2 : Par l'absurde.</b> Supposons $\mathcal P = \{p_1, \dots, p_k\}$ fini. On pose $N = p_1p_2\cdots p_k + 1\geq2$.</p>
<p><b>Étape 3 : Un diviseur premier.</b> $N$ a un diviseur premier, donc un certain $p_i\mid N$.</p>
<p><b>Étape 4 : La contradiction.</b> $p_i\mid p_1\cdots p_k$ et $p_i\mid N$, donc $p_i\mid N - p_1\cdots p_k = 1$ : impossible.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathcal P\ \text{est infini}}$.</p>

<h2 id="z-cong">10. Congruences</h2>
<div class="sbox">$$a\equiv b\ [\cV n]\iff\cV n\mid a - b\iff a\ \text{et}\ b\ \text{ont le même reste dans la division par}\ \cV n.$$
$$a\equiv b,\ c\equiv d\ [n]\ \Longrightarrow\ a + c\equiv b + d,\quad ac\equiv bd,\quad a^k\equiv b^k\ [n]\ (k\in\mathbb N).$$</div>
<p class="ml piege">Piège</p>
<p>On ne <b>divise</b> pas une congruence : $2\times3\equiv2\times0\ [6]$ mais $3\not\equiv0\ [6]$. On simplifie par $k$ seulement si $k\wedge n = 1$ (on multiplie alors par l'inverse de $k$, §11).</p>
<p class="ml">La méthode pour $a^k\ [n]$</p>
<p><b>1.</b> Calculer les puissances successives jusqu'à trouver $a^m\equiv1$ (ou $\pm1$). <b>2.</b> Division euclidienne $k = mq + r$. <b>3.</b> $a^k = (a^m)^q\,a^r\equiv a^r$.</p>
<p><b>Critères de divisibilité</b> : $10\equiv1\ [9]$ donne $n\equiv$ (somme des chiffres) $[9]$, et de même $[3]$. $10\equiv-1\ [11]$ donne $n\equiv$ (somme alternée des chiffres) $[11]$.</p>

<p class="ml">Exemple 13 : le dernier chiffre de $7^{2026}$</p>
<p><b>Étape 1 : Rappel.</b> Le dernier chiffre est le reste modulo $10$. On cherche $m$ avec $7^m\equiv1\ [10]$.</p>
<p><b>Étape 2 : Les puissances.</b> $7^1\equiv7$, $7^2 = 49\equiv9$, $7^3\equiv9\times7 = 63\equiv3$, $7^4\equiv3\times7 = 21\equiv\cG1\ [10]$.</p>
<p><b>Étape 3 : La division de l'exposant.</b> $2026 = 4\times506 + 2$.</p>
<p><b>Étape 4 : On réduit.</b> $7^{2026} = (7^4)^{506}\times7^2\equiv1^{506}\times49\equiv9\ [10]$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{7^{2026}\ \text{se termine par}\ 9}$.</p>

<p class="ml">Exemple 14 : une divisibilité pour tout $n$</p>
<p>Montrer que $7\mid3^{2n+1} + 2^{n+2}$ pour tout $n\in\mathbb N$.</p>
<p><b>Étape 1 : Rappel.</b> Les congruences passent aux produits et aux puissances.</p>
<p><b>Étape 2 : On réduit $9$.</b> $3^{2n+1} = 3^{2n}\times3 = (3^2)^n\times3 = 3\times9^n$. Et $9 = 7 + 2\equiv2\ [7]$, donc $9^n\equiv2^n$ et $3^{2n+1}\equiv3\times2^n\ [7]$.</p>
<p><b>Étape 3 : L'autre terme.</b> $2^{n+2} = 4\times2^n$.</p>
<p><b>Étape 4 : On additionne.</b> $3^{2n+1} + 2^{n+2}\equiv3\times2^n + 4\times2^n = 7\times2^n\equiv0\ [7]$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{7\mid3^{2n+1} + 2^{n+2}}$.</p>

<h2 id="z-inv">11. Inverse modulo $n$, équations $ax\equiv b\ [n]$</h2>
<div class="sbox">$$a\ \text{est inversible modulo}\ \cV n\ (\exists u,\ au\equiv1\ [n])\iff a\wedge\cV n = 1.\qquad au + nv = 1\Rightarrow au\equiv1\ [n].$$</div>
<p>Pour résoudre $ax\equiv b\ [n]$ avec $a\wedge n = 1$ : on multiplie par l'inverse $u$ : $x\equiv ub\ [n]$.</p>

<p class="ml">Exemple 15 : l'inverse de $7$ modulo $26$</p>
<p><b>Étape 1 : Rappel.</b> $7u + 26v = 1\Rightarrow7u\equiv1\ [26]$. On trouve $u$ par Euclide remonté.</p>
<p><b>Étape 2 : Euclide.</b></p>
$$\begin{aligned}26 &= 3\times7 + 5\\7 &= 1\times5 + 2\\5 &= 2\times2 + 1\end{aligned}$$
<p><b>Étape 3 : On remonte.</b></p>
$$1 = 5 - 2\times2 = 5 - 2\,(7 - 5) = 3\times5 - 2\times7 = 3\,(26 - 3\times7) - 2\times7 = 3\times26 - 11\times7.$$
<p><b>Étape 4 : On lit l'inverse.</b> $7\times(-11)\equiv1\ [26]$, et $-11\equiv15\ [26]$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{7^{-1}\equiv15\ [26]}$. Contrôle : $7\times15 = 105 = 4\times26 + 1$.</p>

<p class="ml">Exemple 16 : résoudre $7x\equiv3\ [26]$</p>
<p><b>Étape 1 : Rappel.</b> On multiplie les deux membres par l'inverse de $7$ (exemple 15).</p>
<p><b>Étape 2 : On multiplie par $15$.</b> $15\times7x\equiv15\times3$, soit $x\equiv45\ [26]$.</p>
<p><b>Étape 3 : On réduit.</b> $45 = 26 + 19$, donc $x\equiv19\ [26]$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{x\in19 + 26\mathbb Z}$. Contrôle : $7\times19 = 133 = 5\times26 + 3$.</p>

<h2 id="z-fermat">12. Le petit théorème de Fermat</h2>
<div class="sbox">$$\cV p\ \text{premier}:\quad\forall a\in\mathbb Z,\ a^{\cV p}\equiv a\ [\cV p].\qquad\cV p\nmid a\ \Longrightarrow\ a^{\cV p - 1}\equiv1\ [\cV p].$$
$$\text{Lemme}:\ 1\leq k\leq p - 1\Rightarrow p\mid\binom pk.$$</div>
<p>Il donne directement l'exposant $m = p - 1$ de la méthode du §10 quand le module est premier.</p>

<p class="ml">Exemple 17 : $2^{100}$ modulo $13$</p>
<p><b>Étape 1 : Rappel.</b> $13$ est premier et $13\nmid2$, donc $2^{12}\equiv1\ [13]$.</p>
<p><b>Étape 2 : On divise l'exposant.</b> $100 = 8\times12 + 4$.</p>
<p><b>Étape 3 : On réduit.</b> $2^{100} = 2^{96}\times2^4 = (2^{12})^8\times2^4\equiv1^8\times16\ [13]$, et $16 = 13 + 3\equiv3\ [13]$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{2^{100}\equiv3\ [13]}$.</p>

<p class="ml">Exemple 18 : $42$ divise $n^7 - n$</p>
<p><b>Étape 1 : Rappel.</b> Fermat : $n^p\equiv n\ [p]$. Et si des entiers premiers entre eux deux à deux divisent $N$, leur produit aussi.</p>
<p><b>Étape 2 : Modulo $7$.</b> Fermat avec $p = 7$ : $n^7\equiv n\ [7]$.</p>
<p><b>Étape 3 : Modulo $3$.</b> $n^3\equiv n$, donc $n^7 = n^3\cdot n^3\cdot n\equiv n\cdot n\cdot n = n^3\equiv n\ [3]$.</p>
<p><b>Étape 4 : Modulo $2$.</b> $n^2\equiv n$, donc $n^7\equiv n\ [2]$ (de même, on réduit les exposants).</p>
<p><b>Étape 5 : Conclusion.</b> $2$, $3$, $7$ divisent $n^7 - n$ et sont premiers entre eux deux à deux : $\cG{42\mid n^7 - n}$.</p>

<h2 id="z-chin">13. Systèmes de congruences <span class="hp">programme de Spé</span></h2>
<div class="sbox">$$m\wedge n = 1:\quad\begin{cases}x\equiv a\ [m]\\x\equiv b\ [n]\end{cases}\ \text{a une unique solution modulo}\ mn\ \text{(lemme chinois)}.$$</div>
<p class="ml">Exemple 19 : $x\equiv2\ [3]$ et $x\equiv3\ [5]$</p>
<p><b>Étape 1 : Rappel.</b> On exprime la première congruence, on remplace dans la seconde, on résout avec un inverse.</p>
<p><b>Étape 2 : La première.</b> $x = 2 + 3k$, $k\in\mathbb Z$.</p>
<p><b>Étape 3 : Dans la seconde.</b> $2 + 3k\equiv3\ [5]\iff3k\equiv1\ [5]$. L'inverse de $3$ modulo $5$ est $2$ ($3\times2 = 6\equiv1$), donc $k\equiv2\ [5]$ : $k = 2 + 5j$.</p>
<p><b>Étape 4 : On remplace.</b> $x = 2 + 3(2 + 5j) = 8 + 15j$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{x\equiv8\ [15]}$. Contrôle : $8 = 2\times3 + 2$ et $8 = 5 + 3$.</p>

<h2 id="z-enonce">14. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« $d$ divise $A(n)$ et $B(n)$ »</b><span>Combinaison qui élimine $n$ : $d$ divise une constante.</span></div>
<div><b>« $n + a\mid P(n)$ »</b><span>Écrire $P(n) = (n + a)Q(n) + R$, donc $n + a\mid R$.</span></div>
<div><b>« Calculer $a\wedge b$ »</b><span>Algorithme d'Euclide, ou décompositions (exposants min).</span></div>
<div><b>« Trouver $u, v$ »</b><span>Remonter Euclide, ou le tableau $r_k = au_k + bv_k$.</span></div>
<div><b>« Montrer $a\wedge b = 1$ »</b><span>Trouver $au + bv = 1$, ou montrer qu'aucun premier ne divise les deux.</span></div>
<div><b>$a\mid bc$</b><span>Gauss si $a\wedge b = 1$, lemme d'Euclide si $a$ premier.</span></div>
<div><b>« Résoudre $ax + by = c$ »</b><span>$d\mid c$, solution particulière, soustraire, Gauss.</span></div>
<div><b>« Reste de $a^k$ par $n$ »</b><span>Puissances jusqu'à $1$ (ou Fermat si $n$ premier), division de l'exposant.</span></div>
<div><b>« Pour tout $n$, $m$ divise … »</b><span>Congruences modulo $m$, ou récurrence, ou tableau des restes de $n$.</span></div>
<div><b>« $ax\equiv b\ [n]$ »</b><span>Inverse de $a$ par Bézout si $a\wedge n = 1$.</span></div>
<div><b>« $p$ premier, montrer… »</b><span>Fermat, lemme d'Euclide, $p\mid\binom pk$.</span></div>
<div><b>« Est-il premier ? »</b><span>Tester les premiers $\leq\sqrt n$.</span></div>
<div><b>Un nombre irrationnel ($\sqrt2$, $\sqrt p$)</b><span>Fraction irréductible $\frac ab$, puis lemme d'Euclide.</span></div>
</div>

<h2 id="z-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Un reste négatif dans la division euclidienne.</p>
<p><b>2.</b> Utiliser Gauss sans vérifier $a\wedge b = 1$.</p>
<p><b>3.</b> Croire que $au + bv = d$ donne $d = a\wedge b$.</p>
<p><b>4.</b> Diviser une congruence par un nombre non premier avec le module.</p>
<p><b>5.</b> Oublier les diviseurs négatifs : $n + 1\mid4$ donne aussi $n + 1 = -1, -2, -4$.</p>
<p><b>6.</b> Appliquer Fermat avec $n$ non premier.</p>
<p><b>7.</b> Écrire $a\mid n,\ b\mid n\Rightarrow ab\mid n$ sans $a\wedge b = 1$.</p>
<p><b>8.</b> Oublier le $k\in\mathbb Z$ dans les solutions de $ax + by = c$.</p>
<p><b>9.</b> Confondre « $1$ est premier » : il ne l'est pas ($p\geq2$).</p>
</div>

<h2 id="z-entrainement">S'entraîner</h2>
<div data-mlab="euclz"></div>
<div data-mlab="dioph"></div>
<div data-mlab="powmod"></div>
<div data-mlab="quizarith"></div>

<h2 id="z-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : $\sqrt2$ est irrationnel</p>
<p><b>Étape 1 : Rappel.</b> Toute fraction s'écrit $\frac pq$ avec $p\wedge q = 1$. Lemme d'Euclide : $2\mid ab\Rightarrow2\mid a$ ou $2\mid b$.</p>
<p><b>Étape 2 : Par l'absurde.</b> $\sqrt2 = \frac pq$ avec $p\wedge q = 1$, donc $p^2 = 2q^2$.</p>
<p><b>Étape 3 : $p$ est pair.</b> $2\mid p^2 = p\times p$, donc $2\mid p$ : $p = 2p'$.</p>
<p><b>Étape 4 : $q$ est pair.</b> $4p'^2 = 2q^2$, donc $q^2 = 2p'^2$ et de même $2\mid q$.</p>
<p><b>Étape 5 : Conclusion.</b> $2\mid p\wedge q = 1$ : absurde. $\cG{\sqrt2\notin\mathbb Q}$.</p>

<p class="ml">Exercice 2 : $(n^2 + n)\wedge(2n + 1)$</p>
<p><b>Étape 1 : Rappel.</b> Bézout : $au + bv = 1\Rightarrow a\wedge b = 1$.</p>
<p><b>Étape 2 : On élimine.</b> $(2n + 1)^2 = 4n^2 + 4n + 1 = 4(n^2 + n) + 1$.</p>
<p><b>Étape 3 : La combinaison.</b> $(2n + 1)\times(2n + 1) + (n^2 + n)\times(-4) = 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(n^2 + n)\wedge(2n + 1) = 1}$ pour tout $n$.</p>

<p class="ml">Exercice 3 : $p$ premier, $p\geq5$ : $24\mid p^2 - 1$</p>
<p><b>Étape 1 : Rappel.</b> $8\mid N$, $3\mid N$, $8\wedge3 = 1\Rightarrow24\mid N$.</p>
<p><b>Étape 2 : On factorise.</b> $p^2 - 1 = (p - 1)(p + 1)$.</p>
<p><b>Étape 3 : Par $8$.</b> $p$ est impair, donc $p - 1$ et $p + 1$ sont deux pairs consécutifs : l'un est multiple de $4$, l'autre de $2$. Donc $8\mid p^2 - 1$.</p>
<p><b>Étape 4 : Par $3$.</b> Parmi $p - 1, p, p + 1$, un est multiple de $3$, et ce n'est pas $p$ (premier $\neq3$). Donc $3\mid p^2 - 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{24\mid p^2 - 1}$.</p>

<p class="ml">Exercice 4 : le critère de divisibilité par $9$</p>
<p><b>Étape 1 : Rappel.</b> Les congruences passent aux puissances et aux sommes.</p>
<p><b>Étape 2 : L'écriture décimale.</b> $n = \sum_{k=0}^ma_k10^k$ avec $a_k\in[\![0, 9]\!]$ les chiffres.</p>
<p><b>Étape 3 : On réduit.</b> $10\equiv1\ [9]$, donc $10^k\equiv1$ et $n\equiv\sum_{k=0}^ma_k\ [9]$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{9\mid n\iff9\ \text{divise la somme de ses chiffres}}$. Exemple : $4\,725$, $4 + 7 + 2 + 5 = 18$, donc $9\mid4725$.</p>

<h2 id="z-arbre">L'arbre de l'arithmétique</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question d'arithmétique</span><ul>
<li><div class="hr"><em>divisibilité</em><span class="hq">Quelle forme ?</span><ul>
<li><div class="hr"><em>$d$ divise deux expressions</em><a class="hl" href="#z-div">combinaison qui élimine $n$</a></div></li>
<li><div class="hr"><em>$a\mid bc$</em><a class="hl" href="#z-gauss">Gauss si $a\wedge b = 1$</a></div></li>
<li><div class="hr"><em>pour tout $n$</em><a class="hl" href="#z-cong">congruences, ou factoriser</a></div></li>
<li><div class="hr"><em>$ab\mid N$</em><a class="hl" href="#z-gauss">$a\mid N$, $b\mid N$, $a\wedge b = 1$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>PGCD</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>sa valeur</em><a class="hl ok" href="#z-pgcd">Euclide : dernier reste non nul</a></div></li>
<li><div class="hr"><em>$u, v$</em><a class="hl ok" href="#z-bez">remonter Euclide</a></div></li>
<li><div class="hr"><em>$= 1$</em><a class="hl" href="#z-bez">une combinaison égale à $1$</a></div></li>
<li><div class="hr"><em>avec décompositions</em><a class="hl" href="#z-prem">exposants min, max</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une équation</em><span class="hq">Laquelle ?</span><ul>
<li><div class="hr"><em>$ax + by = c$</em><a class="hl" href="#z-dioph">$d\mid c$, Bézout, Gauss</a></div></li>
<li><div class="hr"><em>$ax\equiv b\ [n]$</em><a class="hl" href="#z-inv">inverse de $a$ si $a\wedge n = 1$</a></div></li>
<li><div class="hr"><em>deux congruences</em><a class="hl" href="#z-chin">lemme chinois (Spé)</a></div></li>
</ul></div></li>
<li><div class="hr"><em>un reste</em><span class="hq">Module premier ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#z-fermat">Fermat : $a^{p-1}\equiv1$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#z-cong">puissances jusqu'à $1$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>premier ?</em><a class="hl" href="#z-prem">tester $p\leq\sqrt n$</a></div></li>
<li><div class="hr"><em>irrationalité</em><a class="hl end" href="#z-exos">$\frac pq$ irréductible, lemme d'Euclide</a></div></li>
</ul></div></div>
`,
"Fonctions usuelles": R`
<nav class="msum"><a href="#u-not">Notations, dérivées</a><a href="#u-exp">Exp, ln, puissances</a><a href="#u-trig">Trigonométrie</a><a href="#u-arc">arcsin, arccos, arctan</a><a href="#u-comp">$\arcsin(\sin x)$…</a><a href="#u-id">Identités</a><a href="#u-eq">Équations</a><a href="#u-hyp">ch, sh, th</a><a href="#u-arg">argsh, argch, argth</a><a href="#u-etude">Étudier une fonction</a><a href="#u-enonce">L'énoncé</a><a href="#u-erreurs">Erreurs</a><a href="#u-entrainement">S'entraîner</a><a href="#u-exos">Exercices</a><a href="#u-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la fonction étudiée et son argument. <span class="kR">rouge</span> : l'intervalle où vit l'angle ($[-\frac\pi2, \frac\pi2]$, $[0, \pi]$…). <span class="kO">orange</span> : le signe qu'on déduit de cet intervalle. <span class="kV">violet</span> : les entiers ($k$, $2k\pi$). <span class="kG">vert</span> : la conclusion.</p>

<h2 id="u-not">1. Le tableau à connaître par cœur</h2>
<table class="mtab">
<tr><th>Fonction</th><th>Définie sur</th><th>Dérivée</th><th>Dérivable sur</th></tr>
<tr><td>$\ln x$</td><td>$]0, +\infty[$</td><td>$\frac1x$</td><td>$]0, +\infty[$</td></tr>
<tr><td>$e^x$</td><td>$\mathbb R$</td><td>$e^x$</td><td>$\mathbb R$</td></tr>
<tr><td>$x^\alpha = e^{\alpha\ln x}$</td><td>$]0, +\infty[$</td><td>$\alpha x^{\alpha - 1}$</td><td>$]0, +\infty[$</td></tr>
<tr><td>$a^x = e^{x\ln a}$ ($a > 0$)</td><td>$\mathbb R$</td><td>$\ln(a)\,a^x$</td><td>$\mathbb R$</td></tr>
<tr><td>$\tan x$</td><td>$x\neq\frac\pi2 + k\pi$</td><td>$1 + \tan^2x = \frac1{\cos^2x}$</td><td>idem</td></tr>
<tr><td>$\arcsin x$</td><td>$[-1, 1]$</td><td>$\frac1{\sqrt{1 - x^2}}$</td><td>$]-1, 1[$ seulement</td></tr>
<tr><td>$\arccos x$</td><td>$[-1, 1]$</td><td>$\frac{-1}{\sqrt{1 - x^2}}$</td><td>$]-1, 1[$ seulement</td></tr>
<tr><td>$\arctan x$</td><td>$\mathbb R$</td><td>$\frac1{1 + x^2}$</td><td>$\mathbb R$</td></tr>
<tr><td>$\operatorname{ch}x$, $\operatorname{sh}x$</td><td>$\mathbb R$</td><td>$\operatorname{sh}x$, $\operatorname{ch}x$</td><td>$\mathbb R$</td></tr>
<tr><td>$\operatorname{th}x$</td><td>$\mathbb R$</td><td>$1 - \operatorname{th}^2x = \frac1{\operatorname{ch}^2x}$</td><td>$\mathbb R$</td></tr>
</table>
<p class="ml">Dérivée d'une réciproque</p>
<div class="sbox">$$f\ \text{bijective, dérivable en}\ f^{-1}(y),\ f'(f^{-1}(y))\neq0\ \Longrightarrow\ (f^{-1})'(y) = \frac1{f'\big(f^{-1}(y)\big)}.$$</div>

<p class="ml">Exemple 1 : retrouver $\arctan'$</p>
<p><b>Étape 1 : Rappel.</b> $(f^{-1})'(y) = \frac1{f'(f^{-1}(y))}$. Ici $f = \tan$ sur $\cR{]-\frac\pi2, \frac\pi2[}$, $f' = 1 + \tan^2$.</p>
<p><b>Étape 2 : On applique</b> en $y\in\mathbb R$, avec $\theta = \arctan y$ :</p>
$$\arctan'(y) = \frac1{1 + \tan^2(\arctan y)}.$$
<p><b>Étape 3 : On simplifie.</b> $\arctan y$ est l'angle dont la tangente vaut $y$, donc $\tan(\arctan y) = y$ et $\tan^2(\arctan y) = y^2$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\arctan'(y) = \frac1{1 + y^2}}$. Même méthode : $\arcsin'(y) = \frac1{\cos(\arcsin y)} = \frac1{\sqrt{1 - y^2}}$ (§5).</p>

<h2 id="u-exp">2. Exponentielle, logarithme, puissances</h2>
<div class="sbox">$$\ln(ab) = \ln a + \ln b,\quad\ln\frac ab = \ln a - \ln b,\quad\ln(a^\alpha) = \alpha\ln a,\qquad a^b = e^{b\ln a}\ (a > 0),\quad(a^b)^c = a^{bc},\quad a^ba^c = a^{b+c}.$$
$$\lim_{x\to0}\frac{\ln(1 + x)}x = 1,\qquad\lim_{x\to0}\frac{e^x - 1}x = 1,\qquad\ln(1 + x)\leq x,\qquad e^x\geq1 + x.$$
$$\textbf{Croissances comparées}:\ \frac{(\ln x)^\alpha}{x^\beta}\xrightarrow[x\to+\infty]{}0,\quad\frac{x^\beta}{e^{\gamma x}}\xrightarrow[x\to+\infty]{}0,\quad x^\beta|\ln x|^\alpha\xrightarrow[x\to0^+]{}0\qquad(\alpha, \beta, \gamma > 0).$$</div>
<p class="ml">La méthode pour $u(x)^{v(x)}$</p>
<p>On écrit <b>toujours</b> $u^v = e^{v\ln u}$ (avec $u > 0$), on étudie l'exposant $v\ln u$, puis on repasse à l'exponentielle.</p>

<p class="ml">Exemple 2 : une équation exponentielle</p>
<p>Résoudre $2^x = 3^{x - 1}$.</p>
<p><b>Étape 1 : Rappel.</b> $a^b = e^{b\ln a}$, et $\ln$ est injective sur $]0, +\infty[$.</p>
<p><b>Étape 2 : On prend le logarithme</b> (les deux membres sont $> 0$) :</p>
$$x\ln2 = (x - 1)\ln3.$$
<p><b>Étape 3 : On isole $x$.</b> On développe $(x - 1)\ln3 = x\ln3 - \ln3$, donc $x\ln2 = x\ln3 - \ln3$. On regroupe les $x$ à gauche : $x\ln3 - x\ln2 = \ln3$, soit $x(\ln3 - \ln2) = \ln3$.</p>
<p><b>Étape 4 : Conclusion.</b> $\ln3\neq\ln2$, on peut diviser : $\cG{x = \frac{\ln3}{\ln3 - \ln2} = \frac{\ln3}{\ln\frac32}}$ (car $\ln3 - \ln2 = \ln\frac32$). Valeur : $\approx\frac{1{,}099}{0{,}405}\approx2{,}71$.</p>

<p class="ml">Exemple 3 : la fonction $x\mapsto x^x$</p>
<p><b>Étape 1 : Rappel.</b> $x^x = e^{x\ln x}$ pour $x > 0$, et $x\ln x\to0$ en $0^+$.</p>
<p><b>Étape 2 : La dérivée.</b> $(x\ln x)' = 1\times\ln x + x\times\frac1x = \ln x + 1$ (produit). Et $(e^u)' = u'e^u$, donc $f'(x) = (\ln x + 1)\,e^{x\ln x} = (\ln x + 1)\,x^x$.</p>
<p><b>Étape 3 : Le signe.</b> $x^x = e^{x\ln x} > 0$, donc $f'$ a le signe de $\ln x + 1$. Et $\ln x + 1\geq0\iff\ln x\geq-1\iff x\geq e^{-1} = \frac1e$ ($\exp$ croissante) : $f$ décroît sur $]0, \frac1e]$, croît sur $[\frac1e, +\infty[$.</p>
<p><b>Étape 4 : Les valeurs.</b> $f(\frac1e) = e^{\frac1e\ln\frac1e} = e^{\frac1e\times(-1)} = e^{-1/e}\approx0{,}69$ (minimum). En $0^+$ : $x\ln x\to0$ donc $f(x)\to e^0 = 1$. En $+\infty$ : $x\ln x\to+\infty$ donc $f\to+\infty$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\min_{]0, +\infty[}x^x = e^{-1/e}}$, atteint en $\frac1e$, et $f$ se prolonge par continuité en $0$ par $1$.</p>

<h2 id="u-trig">3. Trigonométrie : les formules qui servent</h2>
<div class="sbox">$$\cos(a\pm b) = \cos a\cos b\mp\sin a\sin b,\qquad\sin(a\pm b) = \sin a\cos b\pm\cos a\sin b,\qquad\tan(a + b) = \frac{\tan a + \tan b}{1 - \tan a\tan b}.$$
$$\cos2a = 2\cos^2a - 1 = 1 - 2\sin^2a,\quad\sin2a = 2\sin a\cos a,\quad\cos^2a = \frac{1 + \cos2a}2.$$
$$\cos a = \cos b\iff a = \pm b + 2\cV k\pi,\qquad\sin a = \sin b\iff a = b + 2\cV k\pi\ \text{ou}\ a = \pi - b + 2\cV k\pi,\qquad\tan a = \tan b\iff a = b + \cV k\pi.$$</div>

<p class="ml">Exemple 4 : une équation trigonométrique</p>
<p>Résoudre $\cos(2x) = \cos x$ sur $\mathbb R$.</p>
<p><b>Étape 1 : Rappel.</b> $\cos a = \cos b\iff a = b + 2k\pi$ ou $a = -b + 2k\pi$, $k\in\mathbb Z$.</p>
<p><b>Étape 2 : Premier cas</b> ($a = 2x$, $b = x$, signe $+$) : $2x = x + 2\cV k\pi\iff2x - x = 2\cV k\pi\iff x = 2\cV k\pi$.</p>
<p><b>Étape 3 : Second cas</b> (signe $-$) : $2x = -x + 2\cV k\pi\iff2x + x = 2\cV k\pi\iff3x = 2\cV k\pi\iff x = \frac{2\cV k\pi}3$.</p>
<p><b>Étape 4 : On regroupe.</b> Les solutions du 1<sup>er</sup> cas sont déjà dans le 2<sup>e</sup> : $2k\pi = \frac{2(3k)\pi}3$, c'est $\frac{2k'\pi}3$ avec $k' = 3k$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathcal S = \Big\{\frac{2k\pi}3,\ k\in\mathbb Z\Big\}}$.</p>

<h2 id="u-arc">4. Les fonctions circulaires réciproques</h2>
<table class="mtab">
<tr><th></th><th>$\arcsin$</th><th>$\arccos$</th><th>$\arctan$</th></tr>
<tr><td>Bijection réciproque de</td><td>$\sin:\cR{[-\frac\pi2, \frac\pi2]}\to[-1, 1]$</td><td>$\cos:\cR{[0, \pi]}\to[-1, 1]$</td><td>$\tan:\cR{]-\frac\pi2, \frac\pi2[}\to\mathbb R$</td></tr>
<tr><td>Valeurs</td><td>$\arcsin x\in[-\frac\pi2, \frac\pi2]$</td><td>$\arccos x\in[0, \pi]$</td><td>$\arctan x\in\,]-\frac\pi2, \frac\pi2[$</td></tr>
<tr><td>Sens, parité</td><td>croissante, impaire</td><td>décroissante, $\arccos(-x) = \pi - \arccos x$</td><td>croissante, impaire, $\to\pm\frac\pi2$</td></tr>
</table>
<div class="sbox">$$\theta = \arcsin x\iff\Big(\sin\theta = x\ \ \text{et}\ \ \theta\in\cR{\Big[-\frac\pi2, \frac\pi2\Big]}\Big).\qquad\sin(\arcsin x) = x\ \text{pour}\ x\in[-1, 1].$$</div>
<table class="mtab">
<tr><th>$x$</th><td>$0$</td><td>$\frac12$</td><td>$\frac{\sqrt2}2$</td><td>$\frac{\sqrt3}2$</td><td>$1$</td></tr>
<tr><th>$\arcsin x$</th><td>$0$</td><td>$\frac\pi6$</td><td>$\frac\pi4$</td><td>$\frac\pi3$</td><td>$\frac\pi2$</td></tr>
<tr><th>$\arccos x$</th><td>$\frac\pi2$</td><td>$\frac\pi3$</td><td>$\frac\pi4$</td><td>$\frac\pi6$</td><td>$0$</td></tr>
</table>
<p>$\arctan1 = \frac\pi4$, $\arctan\sqrt3 = \frac\pi3$, $\arctan\frac1{\sqrt3} = \frac\pi6$.</p>
<p class="ml">La méthode pour $\cos(\arcsin x)$, $\tan(\arccos x)$…</p>
<p><b>1.</b> Poser $\theta = \arcsin x$ et écrire ce qu'on sait : $\sin\theta = x$ et $\theta\in\cR{[-\frac\pi2, \frac\pi2]}$. <b>2.</b> Utiliser $\cos^2 + \sin^2 = 1$. <b>3.</b> Choisir le <b>signe</b> grâce à l'intervalle de $\theta$.</p>

<p class="ml">Exemple 5 : $\cos\big(\arcsin\frac13\big)$</p>
<p><b>Étape 1 : Rappel.</b> $\theta = \arcsin x\iff\sin\theta = x$ et $\theta\in\cR{[-\frac\pi2, \frac\pi2]}$. Et $\cos^2\theta = 1 - \sin^2\theta$.</p>
<p><b>Étape 2 : On pose</b> $\theta = \arcsin\frac13$ : $\sin\theta = \frac13$ et $\theta\in\cR{[-\frac\pi2, \frac\pi2]}$.</p>
<p><b>Étape 3 : Le carré.</b> $\cos^2\theta = 1 - \sin^2\theta = 1 - \big(\frac13\big)^2 = 1 - \frac19 = \frac99 - \frac19 = \frac89$.</p>
<p><b>Étape 4 : Le signe.</b> Sur $\cR{[-\frac\pi2, \frac\pi2]}$, $\cO{\cos\theta\geq0}$, donc $\cos\theta = +\sqrt{\frac89} = \frac{\sqrt8}{\sqrt9} = \frac{\sqrt{4\times2}}3 = \frac{2\sqrt2}3$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\cos\big(\arcsin\frac13\big) = \frac{2\sqrt2}3}$. En général : $\cos(\arcsin x) = \sqrt{1 - x^2}$.</p>
<table class="mtab">
<tr><th></th><th>$\theta = \arcsin x$</th><th>$\theta = \arccos x$</th><th>$\theta = \arctan x$</th></tr>
<tr><td>$\sin\theta$</td><td>$x$</td><td>$\sqrt{1 - x^2}$</td><td>$\frac x{\sqrt{1 + x^2}}$</td></tr>
<tr><td>$\cos\theta$</td><td>$\sqrt{1 - x^2}$</td><td>$x$</td><td>$\frac1{\sqrt{1 + x^2}}$</td></tr>
<tr><td>$\tan\theta$</td><td>$\frac x{\sqrt{1 - x^2}}$</td><td>$\frac{\sqrt{1 - x^2}}x$</td><td>$x$</td></tr>
</table>

<h2 id="u-comp">5. $\arcsin(\sin x)$, $\arccos(\cos x)$, $\arctan(\tan x)$</h2>
<div class="sbox">$$\arcsin(\sin x) = x\ \textbf{seulement si}\ x\in\cR{\Big[-\frac\pi2, \frac\pi2\Big]},\qquad\arccos(\cos x) = x\ \textbf{seulement si}\ x\in\cR{[0, \pi]}.$$</div>
<p class="ml">La méthode</p>
<p>On cherche <b>l'angle $\theta$ de l'intervalle autorisé</b> qui a le même sinus (ou cosinus) que $x$, avec $\sin(\pi - x) = \sin x$, $\cos(-x) = \cos x$ et la périodicité $2\pi$.</p>

<p class="ml">Exemple 6 : deux valeurs</p>
<p>Calculer $\arccos\big(\cos\frac{5\pi}3\big)$ et $\arcsin\big(\sin\frac{3\pi}4\big)$.</p>
<p><b>Étape 1 : Rappel.</b> $\arccos(\cos x) = x$ si $x\in\cR{[0, \pi]}$, et $\arcsin(\sin x) = x$ si $x\in\cR{[-\frac\pi2, \frac\pi2]}$.</p>
<p><b>Étape 2 : Le premier.</b> $\frac{5\pi}3\approx5{,}24 > \pi$ : il n'est pas dans $[0, \pi]$. On enlève un tour : $\frac{5\pi}3 - 2\pi = \frac{5\pi}3 - \frac{6\pi}3 = -\frac\pi3$, et $\cos$ est paire : $\cos\big(-\frac\pi3\big) = \cos\frac\pi3$. Et $\frac\pi3\in\cR{[0, \pi]}$.</p>
<p><b>Étape 3 : Le second.</b> $\frac{3\pi}4 > \frac\pi2 = \frac{2\pi}4$ : il n'est pas dans $[-\frac\pi2, \frac\pi2]$. On utilise $\sin(\pi - a) = \sin a$ : $\pi - \frac{3\pi}4 = \frac{4\pi}4 - \frac{3\pi}4 = \frac\pi4$, donc $\sin\frac{3\pi}4 = \sin\frac\pi4$. Et $\frac\pi4\in\cR{[-\frac\pi2, \frac\pi2]}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\arccos\big(\cos\frac{5\pi}3\big) = \frac\pi3}$ et $\cG{\arcsin\big(\sin\frac{3\pi}4\big) = \frac\pi4}$.</p>

<p class="ml">Exemple 7 : la courbe de $x\mapsto\arcsin(\sin x)$</p>
<p><b>Étape 1 : Rappel.</b> $\arcsin(\sin x) = x$ sur $[-\frac\pi2, \frac\pi2]$, et $\sin(\pi - x) = \sin x$.</p>
<p><b>Étape 2 : Période et parité.</b> $f(x) = \arcsin(\sin x)$ est $2\pi$-périodique et impaire : on l'étudie sur $[-\frac\pi2, \frac{3\pi}2]$.</p>
<p><b>Étape 3 : Sur $[-\frac\pi2, \frac\pi2]$.</b> $f(x) = x$.</p>
<p><b>Étape 4 : Sur $[\frac\pi2, \frac{3\pi}2]$.</b> Si $\frac\pi2\leq x\leq\frac{3\pi}2$, alors $-\frac{3\pi}2\leq-x\leq-\frac\pi2$, et en ajoutant $\pi$ : $-\frac\pi2\leq\pi - x\leq\frac\pi2$. Comme $\sin x = \sin(\pi - x)$, $f(x) = \arcsin(\sin(\pi - x)) = \pi - x$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{f\ \text{est une courbe en dents de scie}}$, de pente $+1$ puis $-1$, entre $-\frac\pi2$ et $\frac\pi2$ (voir le traceur plus bas).</p>

<h2 id="u-id">6. Les identités classiques</h2>
<div class="sbox">$$\arcsin x + \arccos x = \frac\pi2\ \ (x\in[-1, 1]),\qquad\arctan x + \arctan\frac1x = \begin{cases}\frac\pi2&x > 0\\-\frac\pi2&x \lt 0\end{cases}$$</div>
<p class="ml">La méthode pour une identité $f(x) = $ constante</p>
<p><b>1.</b> Dériver sur un <b>intervalle</b> et trouver $f' = 0$. <b>2.</b> Conclure que $f$ est constante <b>sur chaque intervalle</b>. <b>3.</b> Calculer la constante en un point simple.</p>

<p class="ml">Exemple 8 : $\arcsin x + \arccos x = \frac\pi2$</p>
<p><b>Étape 1 : Rappel.</b> Dérivée nulle sur un intervalle $\Rightarrow$ fonction constante.</p>
<p><b>Étape 2 : La dérivée.</b> Sur $]-1, 1[$ : $\arcsin'(x) = \frac1{\sqrt{1 - x^2}}$ et $\arccos'(x) = -\frac1{\sqrt{1 - x^2}}$, donc $f'(x) = \frac1{\sqrt{1 - x^2}} - \frac1{\sqrt{1 - x^2}} = 0$.</p>
<p><b>Étape 3 : La constante.</b> $f$ est constante sur l'intervalle $]-1, 1[$, égale à $f(0) = \arcsin0 + \arccos0 = 0 + \frac\pi2 = \frac\pi2$ ($\sin0 = 0$ et $\cos\frac\pi2 = 0$).</p>
<p><b>Étape 4 : Les bords.</b> $f$ est continue sur $[-1, 1]$, donc l'égalité passe à $\pm1$ (ou : $f(1) = \frac\pi2 + 0$).</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\arcsin x + \arccos x = \frac\pi2}$ sur $[-1, 1]$.</p>

<p class="ml">Exemple 9 : $\arctan x + \arctan\frac1x$</p>
<p><b>Étape 1 : Rappel.</b> Dérivée nulle sur un intervalle $\Rightarrow$ constante <b>sur cet intervalle</b> ; $\mathbb R^*$ n'est pas un intervalle.</p>
<p><b>Étape 2 : La dérivée.</b> Pour $x\neq0$, avec $\big(\frac1x\big)' = -\frac1{x^2}$ :</p>
$$f'(x) = \frac1{1 + x^2} + \Big(-\frac1{x^2}\Big)\cdot\frac1{1 + \frac1{x^2}} = \frac1{1 + x^2} - \frac1{x^2\big(1 + \frac1{x^2}\big)} = \frac1{1 + x^2} - \frac1{x^2 + 1} = 0.$$
<p><b>Étape 3 : Sur $]0, +\infty[$.</b> $f$ est constante sur cet intervalle, égale à $f(1) = \arctan1 + \arctan\frac11 = \frac\pi4 + \frac\pi4 = \frac\pi2$ (car $\tan\frac\pi4 = 1$).</p>
<p><b>Étape 4 : Sur $]-\infty, 0[$.</b> $f$ y est aussi constante, égale à $f(-1) = \arctan(-1) + \arctan(-1) = -\frac\pi4 - \frac\pi4 = -\frac\pi2$ ($\arctan$ est impaire).</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\arctan x + \arctan\frac1x = \operatorname{signe}(x)\,\frac\pi2}$.</p>

<h2 id="u-eq">7. Équations avec des $\arctan$, $\arcsin$</h2>
<p class="ml">La méthode</p>
<p><b>1.</b> On applique $\tan$ (ou $\sin$, $\cos$) aux deux membres : c'est une <b>implication</b>, pas une équivalence. <b>2.</b> On résout l'équation algébrique. <b>3.</b> On <b>vérifie</b> chaque candidat (signe, intervalle), car on a pu en ajouter.</p>

<p class="ml">Exemple 10 : $\arctan x + \arctan2x = \frac\pi4$</p>
<p><b>Étape 1 : Rappel.</b> $\tan(a + b) = \frac{\tan a + \tan b}{1 - \tan a\tan b}$, et appliquer $\tan$ donne seulement une implication.</p>
<p><b>Étape 2 : On applique $\tan$.</b> Avec $a = \arctan x$, $b = \arctan2x$ : $\tan a = x$, $\tan b = 2x$, donc si $x$ est solution :</p>
$$\tan(a + b) = \frac{x + 2x}{1 - x\cdot2x} = \frac{3x}{1 - 2x^2} = \tan\frac\pi4 = 1\qquad(2x^2\neq1).$$
<p><b>Étape 3 : L'équation.</b> $3x = 1 - 2x^2\iff2x^2 + 3x - 1 = 0$. $\Delta = 3^2 - 4\times2\times(-1) = 9 + 8 = 17$, et $x = \frac{-3\pm\sqrt{17}}{2\times2} = \frac{-3\pm\sqrt{17}}4$.</p>
<p><b>Étape 4 : La vérification.</b> $f(x) = \arctan x + \arctan2x$ est impaire et croissante. Pour $x \lt 0$, $f(x) \lt 0 \lt \frac\pi4$ : on rejette $\frac{-3 - \sqrt{17}}4 \lt 0$. Pour $x_0 = \frac{-3 + \sqrt{17}}4 > 0$ : $f(x_0)\in\,]0, \pi[$ et $\tan f(x_0) = 1$, donc $f(x_0) = \frac\pi4$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathcal S = \Big\{\frac{\sqrt{17} - 3}4\Big\}}$.</p>

<h2 id="u-hyp">8. Fonctions hyperboliques</h2>
<div class="sbox">$$\operatorname{ch}x = \frac{e^x + e^{-x}}2,\quad\operatorname{sh}x = \frac{e^x - e^{-x}}2,\quad\operatorname{th}x = \frac{\operatorname{sh}x}{\operatorname{ch}x},\qquad\operatorname{ch}x + \operatorname{sh}x = e^x,\qquad\operatorname{ch}^2x - \operatorname{sh}^2x = 1.$$
$$\operatorname{ch}(a + b) = \operatorname{ch}a\operatorname{ch}b + \operatorname{sh}a\operatorname{sh}b,\quad\operatorname{sh}(a + b) = \operatorname{sh}a\operatorname{ch}b + \operatorname{ch}a\operatorname{sh}b,\quad\operatorname{ch}2a = 2\operatorname{ch}^2a - 1.$$</div>
<p>$\operatorname{ch}$ est paire, $\geq1$ ; $\operatorname{sh}$ et $\operatorname{th}$ sont impaires et croissantes ; $\operatorname{th}\to\pm1$. Les formules ressemblent à la trigo, avec un changement de signe devant les produits de deux $\operatorname{sh}$.</p>
<p class="ml">La méthode</p>
<p>Pour une équation ou une identité : tout réécrire avec $X = e^x$ ($> 0$), puis résoudre en $X$.</p>

<p class="ml">Exemple 11 : résoudre $\operatorname{ch}x = 2$</p>
<p><b>Étape 1 : Rappel.</b> $\operatorname{ch}x = \frac{e^x + e^{-x}}2$. On pose $X = e^x > 0$.</p>
<p><b>Étape 2 : En $X$.</b> $e^{-x} = \frac1X$, donc $\frac{X + \frac1X}2 = 2\iff X + \frac1X = 4\iff X^2 + 1 = 4X$ (on multiplie par $X > 0$) $\iff X^2 - 4X + 1 = 0$.</p>
<p><b>Étape 3 : Les racines.</b> $\Delta = (-4)^2 - 4\times1\times1 = 16 - 4 = 12$, $\sqrt{12} = \sqrt{4\times3} = 2\sqrt3$, donc $X = \frac{4\pm2\sqrt3}2 = 2\pm\sqrt3$. Les deux sont $> 0$ ($\sqrt3\approx1{,}73 \lt 2$).</p>
<p><b>Étape 4 : On revient à $x$.</b> $e^x = X\iff x = \ln X$. Et $(2 - \sqrt3)(2 + \sqrt3) = 4 - 3 = 1$, donc $2 - \sqrt3 = \frac1{2 + \sqrt3}$ et $\ln(2 - \sqrt3) = -\ln(2 + \sqrt3)$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathcal S = \{\pm\ln(2 + \sqrt3)\}}$ (symétrique : $\operatorname{ch}$ est paire).</p>

<p class="ml">Exemple 12 : $\operatorname{ch}(a + b)$</p>
<p><b>Étape 1 : Rappel.</b> $\operatorname{ch}a = \frac{e^a + e^{-a}}2$, $\operatorname{sh}a = \frac{e^a - e^{-a}}2$.</p>
<p><b>Étape 2 : On développe les produits.</b></p>
$$4\operatorname{ch}a\operatorname{ch}b = e^{a+b} + e^{a-b} + e^{-a+b} + e^{-a-b},\qquad4\operatorname{sh}a\operatorname{sh}b = e^{a+b} - e^{a-b} - e^{-a+b} + e^{-a-b}.$$
<p><b>Étape 3 : On additionne.</b> Les termes croisés disparaissent : $4(\operatorname{ch}a\operatorname{ch}b + \operatorname{sh}a\operatorname{sh}b) = 2e^{a+b} + 2e^{-(a+b)}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\operatorname{ch}a\operatorname{ch}b + \operatorname{sh}a\operatorname{sh}b = \operatorname{ch}(a + b)}$.</p>

<h2 id="u-arg">9. Les réciproques hyperboliques <span class="hp">hors programme</span></h2>
<div class="sbox">$$\operatorname{argsh}x = \ln\big(x + \sqrt{x^2 + 1}\big)\ (\mathbb R),\quad\operatorname{argch}x = \ln\big(x + \sqrt{x^2 - 1}\big)\ ([1, +\infty[),\quad\operatorname{argth}x = \frac12\ln\frac{1 + x}{1 - x}\ (]-1, 1[).$$
$$\operatorname{argsh}'x = \frac1{\sqrt{x^2 + 1}},\qquad\operatorname{argch}'x = \frac1{\sqrt{x^2 - 1}},\qquad\operatorname{argth}'x = \frac1{1 - x^2}.$$</div>
<p>Elles ne sont plus au programme : dans une copie, on redémontre la formule logarithmique (exemple 13) ou on écrit directement le $\ln$. Elles servent surtout pour les primitives : $\int\frac{dx}{\sqrt{x^2 + 1}} = \ln(x + \sqrt{x^2 + 1})$.</p>
<p class="ml">Exemple 13 : retrouver $\operatorname{argsh}$</p>
<p><b>Étape 1 : Rappel.</b> On résout $\operatorname{sh}y = x$ en posant $Y = e^y > 0$.</p>
<p><b>Étape 2 : En $Y$.</b> $\operatorname{sh}y = \frac{e^y - e^{-y}}2 = \frac{Y - \frac1Y}2$. Donc $\frac{Y - \frac1Y}2 = x\iff Y - \frac1Y = 2x\iff Y^2 - 1 = 2xY$ (on multiplie par $Y > 0$) $\iff Y^2 - 2xY - 1 = 0$.</p>
<p><b>Étape 3 : Les racines.</b> $\Delta = (-2x)^2 - 4\times1\times(-1) = 4x^2 + 4 = 4(x^2 + 1)$, $\sqrt\Delta = 2\sqrt{x^2 + 1}$, donc $Y = \frac{2x\pm2\sqrt{x^2 + 1}}2 = x\pm\sqrt{x^2 + 1}$. Comme $\sqrt{x^2 + 1} > \sqrt{x^2} = |x|$, $x - \sqrt{x^2 + 1} \lt 0$ : seule $x + \sqrt{x^2 + 1}$ est $> 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{y = \ln\big(x + \sqrt{x^2 + 1}\big)}$.</p>

<h2 id="u-etude">10. Le plan d'étude d'une fonction</h2>
<p><b>1. Domaine</b> : $\ln$ ($> 0$), racine ($\geq0$), dénominateur ($\neq0$), $\arcsin$, $\arccos$ ($[-1, 1]$). <b>2. Réduction</b> : parité, périodicité. <b>3. Dérivabilité</b> : attention aux bords de $\arcsin$, $\arccos$, $\sqrt{\ }$ (on passe par le taux d'accroissement ou le théorème de la limite de la dérivée). <b>4. Signe de $f'$</b>, tableau de variations. <b>5. Limites</b> aux bornes, asymptotes ($f(x) - (ax + b)\to0$). <b>6. Courbe</b>.</p>

<h2 id="u-enonce">11. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>$u(x)^{v(x)}$</b><span>Écrire $e^{v\ln u}$.</span></div>
<div><b>$\cos(\arcsin x)$, $\tan(\arccos x)$…</b><span>Poser $\theta$, $\cos^2 + \sin^2 = 1$, signe par l'intervalle de $\theta$.</span></div>
<div><b>$\arcsin(\sin a)$, $\arccos(\cos a)$</b><span>Ramener $a$ dans l'intervalle autorisé avec $\pi - a$, $-a$, $2k\pi$.</span></div>
<div><b>« Montrer que $f$ est constante »</b><span>$f' = 0$ sur chaque intervalle, puis une valeur.</span></div>
<div><b>Équation en $\arctan$</b><span>Appliquer $\tan$, résoudre, <b>vérifier</b> les candidats.</span></div>
<div><b>$\arctan a + \arctan b$</b><span>Formule de $\tan(a + b)$, puis savoir dans quel intervalle est la somme.</span></div>
<div><b>Équation en $\operatorname{ch}$, $\operatorname{sh}$</b><span>$X = e^x > 0$, équation du second degré.</span></div>
<div><b>« Dérivée de $f^{-1}$ »</b><span>$\frac1{f'(f^{-1}(y))}$, puis simplifier $f'\circ f^{-1}$.</span></div>
<div><b>Primitive de $\frac1{1 + x^2}$, $\frac1{\sqrt{1 - x^2}}$</b><span>$\arctan$, $\arcsin$ ; et $\frac1{a^2 + x^2}$ : $\frac1a\arctan\frac xa$.</span></div>
<div><b>« Étudier $f$ »</b><span>Le plan du §10, sans oublier les bords du domaine de dérivabilité.</span></div>
</div>

<h2 id="u-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Écrire $\arcsin(\sin x) = x$ pour tout $x$.</p>
<p><b>2.</b> Oublier le signe : $\cos(\arcsin x) = \pm\sqrt{1 - x^2}$, alors que c'est $+$.</p>
<p><b>3.</b> Dire $\arcsin$ dérivable sur $[-1, 1]$ : seulement sur $]-1, 1[$.</p>
<p><b>4.</b> Appliquer $\tan$ à une équation et garder tous les candidats sans vérifier.</p>
<p><b>5.</b> Conclure « $f' = 0$ donc $f$ constante » sur $\mathbb R^*$ : il y a deux constantes.</p>
<p><b>6.</b> Confondre $\arcsin x$ et $\frac1{\sin x}$.</p>
<p><b>7.</b> Écrire $\operatorname{ch}^2 + \operatorname{sh}^2 = 1$ : c'est $\operatorname{ch}^2 - \operatorname{sh}^2 = 1$.</p>
<p><b>8.</b> Écrire $x^\alpha$ pour $x \lt 0$ et $\alpha$ non entier.</p>
</div>

<h2 id="u-entrainement">S'entraîner</h2>
<div data-mlab="arcval"></div>
<div data-mlab="arcfx"></div>
<div data-mlab="quizfu"></div>

<h2 id="u-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : $\arctan\frac12 + \arctan\frac13 = \frac\pi4$</p>
<p><b>Étape 1 : Rappel.</b> $\tan(a + b) = \frac{\tan a + \tan b}{1 - \tan a\tan b}$, et $\tan$ est injective sur $]-\frac\pi2, \frac\pi2[$.</p>
<p><b>Étape 2 : Le $\tan$ de la somme.</b> Avec $a = \arctan\frac12$, $b = \arctan\frac13$ :</p>
$$\tan(a + b) = \frac{\frac12 + \frac13}{1 - \frac16} = \frac{\frac56}{\frac56} = 1.$$
<p><b>Étape 3 : L'intervalle.</b> $\arctan$ est croissante et $\arctan0 = 0$, $\arctan1 = \frac\pi4$. Comme $0 \lt \frac13 \lt \frac12 \lt 1$ : $a, b\in\,]0, \frac\pi4[$. On additionne : $a + b\in\,]0, \frac\pi2[$.</p>
<p><b>Étape 4 : Conclusion.</b> Sur $]0, \frac\pi2[$, le seul angle de tangente $1$ est $\frac\pi4$ : $\cG{\arctan\frac12 + \arctan\frac13 = \frac\pi4}$.</p>

<p class="ml">Exercice 2 : $\lim\limits_{x\to+\infty}\big(1 + \frac ax\big)^x$</p>
<p><b>Étape 1 : Rappel.</b> $u^v = e^{v\ln u}$, et $\frac{\ln(1 + h)}h\to1$ quand $h\to0$.</p>
<p><b>Étape 2 : L'exposant.</b> On pose $h = \frac ax\to0$ (si $a\neq0$), donc $x = \frac ah$ et $x\ln\big(1 + \frac ax\big) = \frac ah\ln(1 + h) = a\cdot\frac{\ln(1 + h)}h$.</p>
<p><b>Étape 3 : Sa limite.</b> $a\cdot1 = a$.</p>
<p><b>Étape 4 : Conclusion.</b> Par continuité de $\exp$ : $\cG{\big(1 + \frac ax\big)^x\to e^a}$ (et c'est $1$ si $a = 0$).</p>

<p class="ml">Exercice 3 : $f(x) = \arcsin\frac{2x}{1 + x^2}$ pour $|x|\leq1$</p>
<p><b>Étape 1 : Rappel.</b> $\sin(2\theta) = \frac{2\tan\theta}{1 + \tan^2\theta}$, et $\arcsin(\sin y) = y$ si $y\in[-\frac\pi2, \frac\pi2]$.</p>
<p><b>Étape 2 : On pose</b> $\theta = \arctan x$. Pour $|x|\leq1$, $\theta\in[-\frac\pi4, \frac\pi4]$.</p>
<p><b>Étape 3 : On reconnaît un sinus.</b> $\sin(2\theta) = 2\sin\theta\cos\theta = 2\frac{\sin\theta}{\cos\theta}\cos^2\theta = 2\tan\theta\cdot\frac1{1 + \tan^2\theta}$ (car $\cos^2\theta = \frac1{1 + \tan^2\theta}$). Avec $\tan\theta = x$ : $\sin(2\theta) = \frac{2x}{1 + x^2}$.</p>
<p><b>Étape 4 : L'intervalle.</b> $-\frac\pi4\leq\theta\leq\frac\pi4$, on multiplie par $2$ : $-\frac\pi2\leq2\theta\leq\frac\pi2$, donc $\arcsin(\sin2\theta) = 2\theta$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\arcsin\frac{2x}{1 + x^2} = 2\arctan x}$ sur $[-1, 1]$ (pour $x > 1$, on trouve $\pi - 2\arctan x$).</p>

<h2 id="u-arbre">L'arbre des fonctions usuelles</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question sur une fonction usuelle</span><ul>
<li><div class="hr"><em>puissance $u^v$</em><a class="hl ok" href="#u-exp">$e^{v\ln u}$, puis l'exposant</a></div></li>
<li><div class="hr"><em>trigo d'un $\arcsin$, $\arccos$, $\arctan$</em><a class="hl" href="#u-arc">poser $\theta$, $\cos^2 + \sin^2 = 1$, signe</a></div></li>
<li><div class="hr"><em>$\arcsin(\sin a)$…</em><span class="hq">$a$ dans l'intervalle ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#u-comp">c'est $a$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#u-comp">$\pi - a$, $-a$, $a - 2k\pi$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une identité</em><span class="hq">Quel type ?</span><ul>
<li><div class="hr"><em>somme constante</em><a class="hl" href="#u-id">$f' = 0$ par intervalle, une valeur</a></div></li>
<li><div class="hr"><em>avec des valeurs</em><a class="hl" href="#u-exos">$\tan(a + b)$, puis l'intervalle</a></div></li>
<li><div class="hr"><em>hyperbolique</em><a class="hl" href="#u-hyp">tout en $e^x$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une équation</em><span class="hq">Avec quoi ?</span><ul>
<li><div class="hr"><em>$\cos$, $\sin$, $\tan$</em><a class="hl" href="#u-trig">$a = \pm b + 2k\pi$…</a></div></li>
<li><div class="hr"><em>$\arctan$, $\arcsin$</em><a class="hl" href="#u-eq">appliquer $\tan$, vérifier</a></div></li>
<li><div class="hr"><em>$\operatorname{ch}$, $\operatorname{sh}$, exp</em><a class="hl" href="#u-hyp">$X = e^x > 0$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une dérivée</em><a class="hl" href="#u-not">tableau, ou $\frac1{f'\circ f^{-1}}$</a></div></li>
<li><div class="hr"><em>étudier $f$</em><a class="hl end" href="#u-etude">domaine, parité, $f'$, limites</a></div></li>
</ul></div></div>
`,
"Espaces préhilbertiens réels": R`
<nav class="msum"><a href="#h-not">Notations</a><a href="#h-ps">Produit scalaire</a><a href="#h-cs">Cauchy-Schwarz</a><a href="#h-orth">Orthogonalité</a><a href="#h-bon">Bases orthonormées</a><a href="#h-gs">Gram-Schmidt</a><a href="#h-proj">Projection</a><a href="#h-dist">Distance</a><a href="#h-enonce">L'énoncé</a><a href="#h-erreurs">Erreurs</a><a href="#h-entrainement">S'entraîner</a><a href="#h-exos">Exercices</a><a href="#h-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les vecteurs $\cB x$, $\cB y$. <span class="kR">rouge</span> : le sous-espace $\cR F$ et son orthogonal. <span class="kO">orange</span> : les produits scalaires calculés $\cO{\langle x, e_i\rangle}$. <span class="kV">violet</span> : la base orthonormée $\cV{(e_1, \dots, e_n)}$. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="h-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Produit scalaire</td><td>$\langle x, y\rangle$, $(x\mid y)$, $x\cdot y$</td><td>Bilinéaire, symétrique, défini positif.</td></tr>
<tr><td>Norme associée</td><td>$\|x\| = \sqrt{\langle x, x\rangle}$</td><td>$\|\lambda x\| = |\lambda|\,\|x\|$.</td></tr>
<tr><td>Orthogonal</td><td>$x\perp y$, $A^\perp$</td><td>$A^\perp = \{x,\ \forall a\in A,\ \langle x, a\rangle = 0\}$ est un sev.</td></tr>
<tr><td>Projeté orthogonal</td><td>$p_F(x)$</td><td>$F$ de dimension finie.</td></tr>
<tr><td>Distance</td><td>$d(x, F) = \inf_{y\in F}\|x - y\|$</td><td>$= \|x - p_F(x)\|$.</td></tr>
<tr><td>Euclidien</td><td>préhilbertien de dimension finie</td><td>Toujours une BON.</td></tr>
</table>
<table class="mtab">
<tr><th>Espace</th><th>Produit scalaire usuel</th></tr>
<tr><td>$\mathbb R^n$, $\mathcal M_{n,1}(\mathbb R)$</td><td>$\langle x, y\rangle = \sum_{i=1}^nx_iy_i = X^\top Y$</td></tr>
<tr><td>$\mathcal M_n(\mathbb R)$</td><td>$\langle A, B\rangle = \operatorname{tr}(A^\top B) = \sum_{i,j}a_{ij}b_{ij}$</td></tr>
<tr><td>$\mathcal C([a, b], \mathbb R)$</td><td>$\langle f, g\rangle = \int_a^bf(t)g(t)\,dt$</td></tr>
<tr><td>$\mathcal C_{2\pi}(\mathbb R)$</td><td>$\langle f, g\rangle = \frac1{2\pi}\int_0^{2\pi}fg$</td></tr>
</table>

<h2 id="h-ps">2. Montrer qu'on a un produit scalaire</h2>
<p class="ml">La méthode en quatre points</p>
<p><b>1. Symétrie</b> : $\varphi(x, y) = \varphi(y, x)$. <b>2. Linéarité à gauche</b> : $\varphi(\lambda x + x', y) = \lambda\varphi(x, y) + \varphi(x', y)$ (la symétrie donne la droite). <b>3. Positivité</b> : $\varphi(x, x)\geq0$. <b>4. Définie</b> : $\varphi(x, x) = 0\Rightarrow x = 0$. C'est toujours le point 4 qui demande un argument.</p>

<p class="ml">Exemple 1 : sur les polynômes</p>
<p>Montrer que $\langle P, Q\rangle = \int_0^1P(t)Q(t)\,dt$ est un produit scalaire sur $\mathbb R[X]$.</p>
<p><b>Étape 1 : Rappel.</b> Symétrique, linéaire à gauche, positive, définie.</p>
<p><b>Étape 2 : Symétrie et linéarité.</b> $PQ = QP$, et l'intégrale est linéaire : $\int(\lambda P + P')Q = \lambda\int PQ + \int P'Q$.</p>
<p><b>Étape 3 : Positivité.</b> $\langle P, P\rangle = \int_0^1P(t)^2\,dt\geq0$ (intégrale d'une fonction positive, bornes dans l'ordre).</p>
<p><b>Étape 4 : Définie.</b> Si $\int_0^1P^2 = 0$, comme $t\mapsto P(t)^2$ est <b>continue et positive</b>, elle est nulle sur $[0, 1]$. $P$ a alors une infinité de racines, donc $P = 0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\langle\cdot, \cdot\rangle\ \text{est un produit scalaire sur}\ \mathbb R[X]}$.</p>

<p class="ml">Exemple 2 : une forme sur $\mathbb R^2$</p>
<p>$\varphi(x, y) = x_1y_1 + x_1y_2 + x_2y_1 + 2x_2y_2$ est-elle un produit scalaire ?</p>
<p><b>Étape 1 : Rappel.</b> Les quatre points ; pour la positivité, on met $\varphi(x, x)$ sous <b>forme canonique</b>.</p>
<p><b>Étape 2 : Symétrie et bilinéarité.</b> Échanger $x$ et $y$ donne la même expression ; chaque terme est linéaire en $x$.</p>
<p><b>Étape 3 : La forme canonique.</b></p>
$$\varphi(x, x) = x_1^2 + 2x_1x_2 + 2x_2^2 = \underbrace{x_1^2 + 2x_1x_2 + x_2^2}_{(x_1 + x_2)^2} + x_2^2 = (x_1 + x_2)^2 + x_2^2\geq0.$$
<p><b>Étape 4 : Définie.</b> $\varphi(x, x) = 0\Rightarrow x_1 + x_2 = 0$ et $x_2 = 0$, donc $x = 0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\varphi\ \text{est un produit scalaire}}$. (Avec $x_2y_2$ au lieu de $2x_2y_2$, on aurait $(x_1 + x_2)^2$, nulle pour $x = (1, -1)$ : pas défini.)</p>

<h2 id="h-cs">3. Normes, Cauchy-Schwarz</h2>
<div class="sbox">$$\textbf{Cauchy-Schwarz}:\ |\langle x, y\rangle|\leq\|x\|\,\|y\|,\ \text{égalité}\iff x, y\ \text{colinéaires}.\qquad\|x + y\|\leq\|x\| + \|y\|.$$
$$\|x + y\|^2 = \|x\|^2 + 2\langle x, y\rangle + \|y\|^2,\qquad\langle x, y\rangle = \frac14\big(\|x + y\|^2 - \|x - y\|^2\big),\qquad\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2.$$</div>
<p class="ml">La méthode Cauchy-Schwarz</p>
<p>Pour majorer une somme ou une intégrale de produits : <b>choisir l'espace et les deux vecteurs</b> $x$, $y$ pour que $\langle x, y\rangle$ soit ce qu'on veut majorer. Le vecteur constant $(1, \dots, 1)$ ou la fonction $1$ sont souvent le bon choix.</p>

<p class="ml">Exemple 3 : $\big(\sum x_k\big)^2\leq n\sum x_k^2$</p>
<p><b>Étape 1 : Rappel.</b> $\langle x, y\rangle^2\leq\|x\|^2\|y\|^2$ dans $\mathbb R^n$.</p>
<p><b>Étape 2 : Le choix.</b> $x = (x_1, \dots, x_n)$ et $y = (1, \dots, 1)$. On calcule les deux morceaux de Cauchy-Schwarz :</p>
$$\cO{\langle x, y\rangle} = x_1\times1 + x_2\times1 + \dots + x_n\times1 = \cO{\sum_{k=1}^nx_k},\qquad\|y\|^2 = \underbrace{1^2 + 1^2 + \dots + 1^2}_{n\ \text{termes}} = n,\qquad\|x\|^2 = \sum_{k=1}^nx_k^2.$$
<p><b>Étape 3 : On applique.</b> On remplace dans $\langle x, y\rangle^2\leq\|x\|^2\|y\|^2$ :</p>
$$\Big(\sum_{k=1}^nx_k\Big)^2\leq\Big(\sum_{k=1}^nx_k^2\Big)\times n.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{\big(\sum x_k\big)^2\leq n\sum x_k^2}$, avec égalité si et seulement si tous les $x_k$ sont égaux.</p>

<p class="ml">Exemple 4 : $\int f\cdot\int\frac1f\geq(b - a)^2$</p>
<p>$f$ continue et $> 0$ sur $[a, b]$.</p>
<p><b>Étape 1 : Rappel.</b> Cauchy-Schwarz dans $\mathcal C([a, b])$ : $\big(\int gh\big)^2\leq\int g^2\int h^2$.</p>
<p><b>Étape 2 : Le choix.</b> $g = \sqrt f$ et $h = \frac1{\sqrt f}$ (continues car $f > 0$). On calcule ce qui apparaît dans Cauchy-Schwarz : $gh = \sqrt f\times\frac1{\sqrt f} = 1$, $g^2 = (\sqrt f)^2 = f$, $h^2 = \big(\frac1{\sqrt f}\big)^2 = \frac1f$.</p>
<p><b>Étape 3 : On applique.</b> On remplace : $\big(\int_a^bgh\big)^2 = \big(\int_a^b1\,dt\big)^2 = (b - a)^2$, $\int g^2 = \int_a^bf$, $\int h^2 = \int_a^b\frac1f$, donc $(b - a)^2\leq\int_a^bf\cdot\int_a^b\frac1f$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(b - a)^2\leq\int_a^bf\int_a^b\frac1f}$, égalité si $\sqrt f$ et $\frac1{\sqrt f}$ sont colinéaires, c'est-à-dire $f$ constante.</p>

<h2 id="h-orth">4. Orthogonalité, Pythagore</h2>
<div class="sbox">$$x\perp y\iff\|x + y\|^2 = \|x\|^2 + \|y\|^2\ \ (\textbf{Pythagore}).\qquad(e_1, \dots, e_p)\ \text{orthogonale}\Rightarrow\Big\|\sum e_i\Big\|^2 = \sum\|e_i\|^2.$$
$$\text{Une famille orthogonale de vecteurs non nuls est libre}.\qquad F\subset G\Rightarrow G^\perp\subset F^\perp,\qquad F\cap F^\perp = \{0\}.$$</div>

<p class="ml">Exemple 5 : les cosinus sont orthogonaux</p>
<p>Dans $\mathcal C([0, 2\pi])$ avec $\langle f, g\rangle = \int_0^{2\pi}fg$, montrer que $c_p(t) = \cos(pt)$, $p\in\mathbb N$, sont deux à deux orthogonaux.</p>
<p><b>Étape 1 : Rappel.</b> $\cos a\cos b = \frac12\big(\cos(a + b) + \cos(a - b)\big)$, et $\int_0^{2\pi}\cos(mt)\,dt = 0$ pour $m\neq0$ entier.</p>
<p><b>Étape 2 : On linéarise</b> pour $p\neq q$ :</p>
$$\langle c_p, c_q\rangle = \frac12\int_0^{2\pi}\cos((p + q)t)\,dt + \frac12\int_0^{2\pi}\cos((p - q)t)\,dt.$$
<p><b>Étape 3 : Les intégrales.</b> Pour un entier $m\neq0$, une primitive de $\cos(mt)$ est $\frac{\sin(mt)}m$, donc $\int_0^{2\pi}\cos(mt)\,dt = \frac{\sin(2\pi m) - \sin0}m = \frac{0 - 0}m = 0$ (car $\sin(2\pi m) = 0$ pour $m$ entier). Ici $m = p + q\neq0$ et $m = p - q\neq0$ : les deux intégrales sont nulles.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\langle c_p, c_q\rangle = 0}$ pour $p\neq q$ : la famille est orthogonale, donc libre (base des séries de Fourier).</p>

<h2 id="h-bon">5. Bases orthonormées</h2>
<div class="sbox">$$\cV{(e_1, \dots, e_n)}\ \text{BON}:\quad\cB x = \sum_{i=1}^n\cO{\langle x, e_i\rangle}\,\cV{e_i},\qquad\langle x, y\rangle = \sum x_iy_i,\qquad\|x\|^2 = \sum x_i^2.$$</div>
<p>Dans une BON, <b>tout se calcule comme dans $\mathbb R^n$</b>. Une famille orthonormée a l'inégalité de Bessel : $\sum_{i=1}^p\langle x, e_i\rangle^2\leq\|x\|^2$.</p>
<p class="ml piege">Piège</p>
<p>$\langle x, y\rangle = \sum x_iy_i$ est <b>faux</b> si la base n'est pas orthonormée.</p>

<p class="ml">Exemple 6 : coordonnées dans une BON</p>
<p>Dans $\mathbb R^2$, $e_1 = \frac1{\sqrt2}(1, 1)$, $e_2 = \frac1{\sqrt2}(1, -1)$. Coordonnées de $x = (3, 1)$ ?</p>
<p><b>Étape 1 : Rappel.</b> Dans une BON, la coordonnée sur $e_i$ est $\langle x, e_i\rangle$.</p>
<p><b>Étape 2 : C'est une BON.</b> On calcule les normes et le produit scalaire, coordonnée par coordonnée :</p>
$$\|e_1\|^2 = \Big(\frac1{\sqrt2}\Big)^2 + \Big(\frac1{\sqrt2}\Big)^2 = \frac12 + \frac12 = 1,\quad\|e_2\|^2 = \Big(\frac1{\sqrt2}\Big)^2 + \Big(-\frac1{\sqrt2}\Big)^2 = 1,\quad\langle e_1, e_2\rangle = \frac1{\sqrt2}\cdot\frac1{\sqrt2} + \frac1{\sqrt2}\cdot\Big(-\frac1{\sqrt2}\Big) = \frac12 - \frac12 = 0.$$
<p><b>Étape 3 : Les produits scalaires.</b> $x = (3, 1)$ :</p>
$$\cO{\langle x, e_1\rangle} = 3\times\frac1{\sqrt2} + 1\times\frac1{\sqrt2} = \frac4{\sqrt2} = \frac{4\sqrt2}2 = \cO{2\sqrt2},\qquad\cO{\langle x, e_2\rangle} = 3\times\frac1{\sqrt2} + 1\times\Big(-\frac1{\sqrt2}\Big) = \frac2{\sqrt2} = \cO{\sqrt2}.$$
<p>(Pour simplifier $\frac4{\sqrt2}$, on multiplie en haut et en bas par $\sqrt2$ : $\frac{4\sqrt2}{\sqrt2\sqrt2} = \frac{4\sqrt2}2$.)</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{x = 2\sqrt2\,e_1 + \sqrt2\,e_2}$. Contrôle : en BON, $\|x\|^2 = (2\sqrt2)^2 + (\sqrt2)^2 = 8 + 2 = 10$, et directement $\|x\|^2 = 3^2 + 1^2 = 9 + 1 = 10$.</p>

<h2 id="h-gs">6. Le procédé de Gram-Schmidt</h2>
<div class="sbox">$$e_1 = \frac{v_1}{\|v_1\|},\qquad w_k = v_k - \sum_{j=1}^{k-1}\cO{\langle v_k, e_j\rangle}\,e_j,\qquad e_k = \frac{w_k}{\|w_k\|}.$$
$$\operatorname{Vect}(e_1, \dots, e_k) = \operatorname{Vect}(v_1, \dots, v_k)\ \text{pour tout}\ k,\qquad\langle e_k, v_k\rangle > 0.$$</div>
<p>Conseil de calcul : on peut orthogonaliser sans normaliser ($w_k = v_k - \sum\frac{\langle v_k, w_j\rangle}{\|w_j\|^2}w_j$), multiplier les $w_k$ par un nombre pour enlever les fractions, et normaliser <b>à la fin</b>.</p>

<p class="ml">Exemple 7 : dans $\mathbb R^3$</p>
<p>Orthonormaliser $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$, $v_3 = (0, 1, 1)$.</p>
<p><b>Étape 1 : Rappel.</b> $e_1 = \frac{v_1}{\|v_1\|}$, $w_k = v_k - \sum_{j \lt k}\langle v_k, e_j\rangle e_j$, $e_k = \frac{w_k}{\|w_k\|}$.</p>
<p><b>Étape 2 : $e_1$.</b> $\|v_1\| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt2$, donc $\cV{e_1 = \frac{v_1}{\|v_1\|} = \frac1{\sqrt2}(1, 1, 0)}$.</p>
<p><b>Étape 3 : $e_2$.</b> Le produit scalaire : $\cO{\langle v_2, e_1\rangle} = \frac1{\sqrt2}(1\times1 + 0\times1 + 1\times0) = \cO{\frac1{\sqrt2}}$. Le vecteur à retirer : $\langle v_2, e_1\rangle e_1 = \frac1{\sqrt2}\times\frac1{\sqrt2}(1, 1, 0) = \frac12(1, 1, 0) = \big(\frac12, \frac12, 0\big)$. On soustrait coordonnée par coordonnée :</p>
$$w_2 = \Big(1 - \frac12,\ 0 - \frac12,\ 1 - 0\Big) = \Big(\frac12, -\frac12, 1\Big),\qquad\|w_2\|^2 = \frac14 + \frac14 + 1 = \frac32.$$
<p>On normalise : $\frac1{\|w_2\|} = \sqrt{\frac23}$, et $\big(\frac12, -\frac12, 1\big) = \frac12(1, -1, 2)$, donc $e_2 = \frac12\sqrt{\frac23}(1, -1, 2)$ avec $\frac12\sqrt{\frac23} = \frac{\sqrt2}{2\sqrt3} = \frac1{\sqrt2\sqrt3} = \frac1{\sqrt6}$ :</p>
$$\cV{e_2 = \frac{w_2}{\sqrt{3/2}} = \frac1{\sqrt6}(1, -1, 2)}.$$
<p><b>Étape 4 : $e_3$.</b> Les produits scalaires : $\cO{\langle v_3, e_1\rangle} = \frac1{\sqrt2}(0\times1 + 1\times1 + 1\times0) = \cO{\frac1{\sqrt2}}$ et $\cO{\langle v_3, e_2\rangle} = \frac1{\sqrt6}(0\times1 + 1\times(-1) + 1\times2) = \cO{\frac1{\sqrt6}}$. Les vecteurs à retirer : $\frac1{\sqrt2}e_1 = \frac12(1, 1, 0)$ et $\frac1{\sqrt6}e_2 = \frac16(1, -1, 2)$. Coordonnée par coordonnée : $x$ : $0 - \frac12 - \frac16 = -\frac23$ ; $y$ : $1 - \frac12 + \frac16 = \frac23$ ; $z$ : $1 - 0 - \frac26 = \frac23$.</p>
$$w_3 = \Big(-\frac23, \frac23, \frac23\Big) = \frac23(-1, 1, 1),\quad\|w_3\| = \frac23\sqrt{1 + 1 + 1} = \frac23\sqrt3,\quad\cV{e_3 = \frac{w_3}{\|w_3\|} = \frac{\frac23(-1, 1, 1)}{\frac23\sqrt3} = \frac1{\sqrt3}(-1, 1, 1)}.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{(e_1, e_2, e_3)\ \text{est une BON}}$. Contrôle : $\langle(1, 1, 0), (-1, 1, 1)\rangle = -1 + 1 + 0 = 0$ et $\langle(1, -1, 2), (-1, 1, 1)\rangle = -1 - 1 + 2 = 0$.</p>

<p class="ml">Exemple 8 : sur les polynômes (Legendre)</p>
<p>Orthonormaliser $(1, X, X^2)$ pour $\langle P, Q\rangle = \int_{-1}^1PQ$.</p>
<p><b>Étape 1 : Rappel.</b> Gram-Schmidt, et $\int_{-1}^1t^k\,dt = \frac2{k + 1}$ si $k$ est pair, $0$ si $k$ est impair.</p>
<p><b>Étape 2 : $e_0$.</b> $\|1\|^2 = \int_{-1}^11\,dt = 1 - (-1) = 2$, donc $\cV{e_0 = \frac1{\sqrt2}}$.</p>
<p><b>Étape 3 : $e_1$.</b> $\langle X, 1\rangle = \int_{-1}^1t\,dt = \Big[\frac{t^2}2\Big]_{-1}^1 = \frac12 - \frac12 = 0$ : $X$ est déjà orthogonal à $1$. $\|X\|^2 = \int_{-1}^1t^2\,dt = \Big[\frac{t^3}3\Big]_{-1}^1 = \frac13 - \big(-\frac13\big) = \frac23$, donc $\cV{e_1 = \frac X{\sqrt{2/3}} = \sqrt{\frac32}\,X}$.</p>
<p><b>Étape 4 : $e_2$.</b> $\langle X^2, X\rangle = \int_{-1}^1t^3\,dt = 0$ et $\langle X^2, 1\rangle = \int_{-1}^1t^2\,dt = \frac23$. On retire la projection sur $1$ : coefficient $\frac{\langle X^2, 1\rangle}{\|1\|^2} = \frac{2/3}2 = \frac13$, donc $w_2 = X^2 - \frac13$. On développe $(t^2 - \frac13)^2 = t^4 - \frac23t^2 + \frac19$ et on intègre terme à terme :</p>
$$\|w_2\|^2 = \underbrace{\int_{-1}^1t^4}_{\frac25} - \frac23\underbrace{\int_{-1}^1t^2}_{\frac23} + \frac19\underbrace{\int_{-1}^11}_{2} = \frac25 - \frac49 + \frac29 = \frac25 - \frac29 = \frac{18 - 10}{45} = \frac8{45}.$$
<p><b>Étape 5 : Conclusion.</b> $\cG{e_2 = \sqrt{\frac{45}8}\Big(X^2 - \frac13\Big)}$ : ce sont les polynômes de Legendre normalisés.</p>

<h2 id="h-proj">7. Supplémentaire orthogonal, projection orthogonale</h2>
<div class="sbox">$$\cR F\ \text{de dimension finie}:\ E = \cR F\oplus\cR{F^\perp},\qquad(F^\perp)^\perp = F\ (\text{si}\ E\ \text{euclidien}),\qquad\dim F^\perp = n - \dim F.$$
$$p_F(x) = \sum_{i=1}^p\cO{\langle x, e_i\rangle}\,\cV{e_i}\ \ ((e_i)\ \text{BON de}\ F).\qquad\textbf{Caractérisation}:\ y = p_F(x)\iff y\in F\ \text{et}\ x - y\in F^\perp.$$
$$\text{Droite}\ D = \operatorname{Vect}(u):\ p_D(x) = \frac{\langle x, u\rangle}{\|u\|^2}u.\qquad\text{Hyperplan}\ H = n^\perp:\ p_H(x) = x - \frac{\langle x, n\rangle}{\|n\|^2}n.$$</div>
<p class="ml">Deux méthodes pour calculer $p_F(x)$</p>
<p><b>1.</b> Avec une BON de $F$ (Gram-Schmidt d'abord). <b>2.</b> Sans BON : écrire $p_F(x) = \sum\lambda_iv_i$ dans une base quelconque de $F$, et écrire $\langle x - p_F(x), v_j\rangle = 0$ pour tout $j$ : un <b>système</b> en $\lambda_i$.</p>

<p class="ml">Exemple 9 : projeter sur un plan de $\mathbb R^3$</p>
<p>Projeté de $x = (1, 2, 3)$ sur $P:\ x + y + z = 0$.</p>
<p><b>Étape 1 : Rappel.</b> $H = n^\perp$ : $p_H(x) = x - \frac{\langle x, n\rangle}{\|n\|^2}n$.</p>
<p><b>Étape 2 : Le vecteur normal.</b> On lit les coefficients de l'équation $\mathbf1\cdot x + \mathbf1\cdot y + \mathbf1\cdot z = 0$ : avec $n = (1, 1, 1)$, on a $\langle(x, y, z), n\rangle = x\times1 + y\times1 + z\times1 = x + y + z$. L'équation de $P$ dit donc exactement $\langle(x, y, z), n\rangle = 0$, c'est-à-dire $P = n^\perp$. Et :</p>
$$\|n\|^2 = 1^2 + 1^2 + 1^2 = 1 + 1 + 1 = 3.$$
<p><b>Étape 3 : Le produit scalaire</b>, coordonnée par coordonnée, avec $x = (1, 2, 3)$ et $n = (1, 1, 1)$ :</p>
$$\cO{\langle x, n\rangle} = 1\times1 + 2\times1 + 3\times1 = 1 + 2 + 3 = \cO6,\qquad\text{donc}\qquad\frac{\langle x, n\rangle}{\|n\|^2} = \frac63 = 2.$$
<p><b>Étape 4 : Le projeté.</b> $2n = 2(1, 1, 1) = (2, 2, 2)$, puis on soustrait coordonnée par coordonnée :</p>
$$p_P(x) = (1, 2, 3) - (2, 2, 2) = (1 - 2,\ 2 - 2,\ 3 - 2) = (-1, 0, 1).$$
<p>Contrôle : $(-1, 0, 1)$ est bien dans $P$, car $-1 + 0 + 1 = 0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{p_P(x) = (-1, 0, 1)}$. La distance : $\|n\| = \sqrt3$ et $d(x, P) = \frac{|\langle x, n\rangle|}{\|n\|} = \frac6{\sqrt3} = \frac{6\sqrt3}{\sqrt3\sqrt3} = \frac{6\sqrt3}3 = 2\sqrt3$.</p>

<h2 id="h-dist">8. Distance à un sous-espace : les problèmes de minimisation</h2>
<div class="sbox">$$d(x, F) = \|x - p_F(x)\|,\qquad d(x, F)^2 = \|x\|^2 - \|p_F(x)\|^2,\qquad p_F(x)\ \text{est l'unique point de}\ F\ \text{où le minimum est atteint}.$$</div>
<p class="ml">La méthode</p>
<p>Un « $\inf_{a, b}\int(\dots - a\dots - b\dots)^2$ » ou « $\min\sum(\dots)^2$ » est <b>une distance au carré</b>. <b>1.</b> Trouver l'espace, le produit scalaire, le vecteur $x$ et le sous-espace $F$. <b>2.</b> Calculer $p_F(x)$ avec les conditions d'orthogonalité. <b>3.</b> $d^2 = \langle x - p_F(x), x\rangle$ (car $x - p_F(x)\perp p_F(x)$).</p>

<p class="ml">Exemple 10 : $\inf_{a, b}\int_0^1(t^2 - at - b)^2\,dt$</p>
<p><b>Étape 1 : Rappel.</b> C'est $d(x, F)^2$ avec $x = t^2$, $F = \mathbb R_1[t] = \operatorname{Vect}(1, t)$, $\langle f, g\rangle = \int_0^1fg$. Le projeté $at + b$ vérifie $x - p\perp1$ et $x - p\perp t$.</p>
<p><b>Étape 2 : Les intégrales utiles.</b> $\int_0^1t^k\,dt = \Big[\frac{t^{k+1}}{k + 1}\Big]_0^1 = \frac1{k + 1}$, donc $\int_0^11 = 1$, $\int_0^1t = \frac12$, $\int_0^1t^2 = \frac13$, $\int_0^1t^3 = \frac14$, $\int_0^1t^4 = \frac15$.</p>
<p><b>Étape 3 : Les deux conditions.</b> Par linéarité, $\langle t^2 - at - b, 1\rangle = \langle t^2, 1\rangle - a\langle t, 1\rangle - b\langle1, 1\rangle = \int t^2 - a\int t - b\int1$, et de même avec $t$ (on intègre $t^3$, $t^2$, $t$) :</p>
$$\langle t^2 - at - b, 1\rangle = \frac13 - \frac a2 - b = 0,\qquad\langle t^2 - at - b, t\rangle = \frac14 - \frac a3 - \frac b2 = 0.$$
<p><b>Étape 4 : On résout.</b> La 1<sup>re</sup> équation donne $b = \frac13 - \frac a2$. On remplace dans la 2<sup>e</sup> : $\frac b2 = \frac16 - \frac a4$, donc</p>
$$\frac14 - \frac a3 - \Big(\frac16 - \frac a4\Big) = \Big(\frac14 - \frac16\Big) + \Big(-\frac a3 + \frac a4\Big) = \frac{3 - 2}{12} - \frac{4a - 3a}{12} = \frac1{12} - \frac a{12} = 0,$$
<p>donc $a = 1$, puis $b = \frac13 - \frac12 = \frac{2 - 3}6 = -\frac16$.</p>
<p><b>Étape 5 : La distance.</b> Le projeté est $p = t - \frac16$, et $x - p = t^2 - t + \frac16$. Comme $x - p\perp p$, $d^2 = \langle x - p, x - p\rangle = \langle x - p, x\rangle$ :</p>
$$d^2 = \int_0^1\Big(t^2 - t + \frac16\Big)t^2\,dt = \int_0^1t^4 - \int_0^1t^3 + \frac16\int_0^1t^2 = \frac15 - \frac14 + \frac16\times\frac13 = \frac15 - \frac14 + \frac1{18}.$$
<p>Dénominateur commun $180$ : $\frac{36}{180} - \frac{45}{180} + \frac{10}{180} = \frac{36 - 45 + 10}{180} = \frac1{180}$.</p>
<p><b>Étape 6 : Conclusion.</b> $\cG{\inf = \frac1{180}}$, atteint pour $a = 1$, $b = -\frac16$.</p>

<h2 id="h-enonce">9. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Montrer que c'est un produit scalaire »</b><span>Symétrie, linéarité à gauche, positivité, définie (le point clé).</span></div>
<div><b>« Montrer une inégalité » avec des sommes ou des intégrales de produits</b><span>Cauchy-Schwarz, en choisissant les deux vecteurs.</span></div>
<div><b>« Cas d'égalité »</b><span>Colinéarité des deux vecteurs de Cauchy-Schwarz.</span></div>
<div><b>« Montrer que la famille est libre »</b><span>Orthogonale et sans vecteur nul.</span></div>
<div><b>« Trouver une BON de $F$ »</b><span>Une base de $F$, puis Gram-Schmidt.</span></div>
<div><b>Plan $ax + by + cz = 0$</b><span>Vecteur normal $n = (a, b, c)$, projection $x - \frac{\langle x, n\rangle}{\|n\|^2}n$.</span></div>
<div><b>« Calculer $p_F(x)$ »</b><span>Avec une BON, ou système $\langle x - p, v_j\rangle = 0$.</span></div>
<div><b>« $\inf\int(\dots)^2$ », « $\min\sum(\dots)^2$ »</b><span>C'est $d(x, F)^2$ : projeter.</span></div>
<div><b>« Montrer $F^\perp = G$ »</b><span>$G\subset F^\perp$ et égalité des dimensions.</span></div>
<div><b>$\mathcal S_n$ et $\mathcal A_n$</b><span>Supplémentaires orthogonaux pour $\operatorname{tr}(A^\top B)$.</span></div>
</div>

<h2 id="h-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Oublier « définie » ou le justifier sans la continuité (intégrales).</p>
<p><b>2.</b> Normaliser trop tôt dans Gram-Schmidt et se noyer dans les racines.</p>
<p><b>3.</b> Utiliser $p_F(x) = \sum\langle x, v_i\rangle v_i$ avec une base qui n'est pas orthonormée.</p>
<p><b>4.</b> Écrire $\|x + y\|^2 = \|x\|^2 + \|y\|^2$ sans orthogonalité.</p>
<p><b>5.</b> Écrire $\big|\int fg\big|\leq\int|f|\int|g|$ : c'est $\sqrt{\int f^2}\sqrt{\int g^2}$.</p>
<p><b>6.</b> Croire $E = F\oplus F^\perp$ quand $F$ est de dimension infinie.</p>
<p><b>7.</b> Diviser par $\|n\|$ au lieu de $\|n\|^2$ dans la projection sur un hyperplan.</p>
</div>

<h2 id="h-entrainement">S'entraîner</h2>
<div data-mlab="gram"></div>
<div data-mlab="projpl"></div>
<div data-mlab="quizph"></div>

<h2 id="h-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : un produit scalaire par évaluations</p>
<p>Montrer que $\langle P, Q\rangle = \sum_{k=0}^nP(k)Q(k)$ est un produit scalaire sur $\mathbb R_n[X]$.</p>
<p><b>Étape 1 : Rappel.</b> Symétrique, linéaire à gauche, positif, défini. Un polynôme de degré $\leq n$ avec $n + 1$ racines est nul.</p>
<p><b>Étape 2 : Les trois premiers points.</b> $P(k)Q(k) = Q(k)P(k)$ ; $(\lambda P + R)(k) = \lambda P(k) + R(k)$ ; $\langle P, P\rangle = \sum P(k)^2\geq0$.</p>
<p><b>Étape 3 : Défini.</b> $\sum_{k=0}^nP(k)^2 = 0$ : une somme de carrés nulle, donc $P(0) = \dots = P(n) = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $P\in\mathbb R_n[X]$ a $n + 1$ racines distinctes : $P = 0$. $\cG{\text{C'est un produit scalaire}}$ (sur $\mathbb R_{n+1}[X]$, ce ne serait plus vrai).</p>

<p class="ml">Exercice 2 : $\mathcal S_n$ et $\mathcal A_n$ sont orthogonaux</p>
<p><b>Étape 1 : Rappel.</b> $\langle A, B\rangle = \operatorname{tr}(A^\top B)$, $\operatorname{tr}(M^\top) = \operatorname{tr}(M)$, $\operatorname{tr}(MN) = \operatorname{tr}(NM)$.</p>
<p><b>Étape 2 : Pour $S$ symétrique et $A$ antisymétrique</b> : $\langle S, A\rangle = \operatorname{tr}(S^\top A) = \operatorname{tr}(SA)$.</p>
<p><b>Étape 3 : On transpose.</b> $\operatorname{tr}(SA) = \operatorname{tr}\big((SA)^\top\big) = \operatorname{tr}(A^\top S^\top) = \operatorname{tr}(-AS) = -\operatorname{tr}(SA)$.</p>
<p><b>Étape 4 : Donc</b> $\operatorname{tr}(SA) = 0$ : $\mathcal S_n\perp\mathcal A_n$.</p>
<p><b>Étape 5 : Conclusion.</b> Avec $M = \frac{M + M^\top}2 + \frac{M - M^\top}2$ : $\cG{\mathcal M_n = \mathcal S_n\overset\perp\oplus\mathcal A_n}$, et $p_{\mathcal S_n}(M) = \frac{M + M^\top}2$.</p>

<h2 id="h-arbre">L'arbre des espaces préhilbertiens</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question dans un préhilbertien</span><ul>
<li><div class="hr"><em>produit scalaire ?</em><a class="hl" href="#h-ps">4 points, « définie » en dernier</a></div></li>
<li><div class="hr"><em>une inégalité</em><span class="hq">Un produit dedans ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#h-cs">Cauchy-Schwarz, choisir $x$ et $y$</a></div></li>
<li><div class="hr"><em>une somme de vecteurs</em><a class="hl" href="#h-cs">inégalité triangulaire</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une base</em><span class="hq">Orthonormée ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#h-bon">coordonnées $\langle x, e_i\rangle$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#h-gs">Gram-Schmidt</a></div></li>
</ul></div></li>
<li><div class="hr"><em>projeter sur $F$</em><span class="hq">Quel $F$ ?</span><ul>
<li><div class="hr"><em>droite</em><a class="hl ok" href="#h-proj">$\frac{\langle x, u\rangle}{\|u\|^2}u$</a></div></li>
<li><div class="hr"><em>hyperplan</em><a class="hl ok" href="#h-proj">$x - \frac{\langle x, n\rangle}{\|n\|^2}n$</a></div></li>
<li><div class="hr"><em>BON connue</em><a class="hl" href="#h-proj">$\sum\langle x, e_i\rangle e_i$</a></div></li>
<li><div class="hr"><em>base quelconque</em><a class="hl" href="#h-proj">système $\langle x - p, v_j\rangle = 0$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>un minimum de carrés</em><a class="hl end" href="#h-dist">c'est $d(x, F)^2$</a></div></li>
<li><div class="hr"><em>libre ?</em><a class="hl" href="#h-orth">orthogonale sans vecteur nul</a></div></li>
</ul></div></div>
`,
"Espaces préhilbertiens et euclidiens": R`
<nav class="msum"><a href="#e-rap">Rappels de Sup</a><a href="#e-hyp">Hyperplans</a><a href="#e-sym">Symétries, réflexions</a><a href="#e-iso">Isométries</a><a href="#e-on">$O(n)$</a><a href="#e-o2">$O(2)$</a><a href="#e-o3">$SO(3)$</a><a href="#e-adj">Adjoint</a><a href="#e-auto">Autoadjoints</a><a href="#e-spec">Théorème spectral</a><a href="#e-pos">Positifs</a><a href="#e-enonce">L'énoncé</a><a href="#e-erreurs">Erreurs</a><a href="#e-entrainement">S'entraîner</a><a href="#e-exos">Exercices</a><a href="#e-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les vecteurs $\cB x$, $\cB y$. <span class="kR">rouge</span> : l'axe, l'hyperplan ou le sous-espace invariant. <span class="kO">orange</span> : l'angle $\cO\theta$ et les valeurs propres. <span class="kV">violet</span> : la base orthonormée et la matrice de passage $\cV P$. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="e-rap">1. Ce qui vient de Sup</h2>
<p>Produit scalaire, Cauchy-Schwarz, bases orthonormées, Gram-Schmidt, projection orthogonale et distance sont traités en détail dans la fiche Sup « Espaces préhilbertiens réels ». À avoir en tête :</p>
<div class="sbox">$$x = \sum\langle x, e_i\rangle e_i,\qquad p_F(x) = \sum_{i\leq p}\langle x, e_i\rangle e_i,\qquad d(x, F)^2 = \|x\|^2 - \|p_F(x)\|^2,\qquad y = p_F(x)\iff y\in F,\ x - y\in F^\perp.$$</div>
<p>Dans une BON $\mathcal B$, si $X = \operatorname{Mat}_{\mathcal B}(x)$ et $Y = \operatorname{Mat}_{\mathcal B}(y)$, alors $\langle x, y\rangle = X^\top Y$.</p>

<h2 id="e-hyp">2. Hyperplans, vecteur normal</h2>
<div class="sbox">$$H = n^\perp = \{x,\ \langle x, n\rangle = 0\}.\qquad d(x, H) = \frac{|\langle x, n\rangle|}{\|n\|},\qquad p_H(x) = x - \frac{\langle x, n\rangle}{\|n\|^2}n.$$</div>
<p>Dans $\mathbb R^n$, l'hyperplan $a_1x_1 + \dots + a_nx_n = 0$ a pour vecteur normal $\cR{n = (a_1, \dots, a_n)}$ : on le <b>lit</b> sur l'équation.</p>
<p class="ml">Exemple 1 : distance à un hyperplan de $\mathbb R^4$</p>
<p>Distance de $x = (1, 2, 0, 1)$ à $H:\ x_1 + x_2 - x_3 + x_4 = 0$.</p>
<p><b>Étape 1 : Rappel.</b> $d(x, H) = \frac{|\langle x, n\rangle|}{\|n\|}$, $n$ lu sur l'équation.</p>
<p><b>Étape 2 : Le vecteur normal.</b> On lit les coefficients de $1\cdot x_1 + 1\cdot x_2 + (-1)\cdot x_3 + 1\cdot x_4 = 0$ : $\cR{n = (1, 1, -1, 1)}$. Sa norme : $\|n\| = \sqrt{1^2 + 1^2 + (-1)^2 + 1^2} = \sqrt{1 + 1 + 1 + 1} = \sqrt4 = 2$.</p>
<p><b>Étape 3 : Le produit scalaire</b>, avec $x = (1, 2, 0, 1)$ : $\langle x, n\rangle = 1\times1 + 2\times1 + 0\times(-1) + 1\times1 = 1 + 2 + 0 + 1 = 4$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{d(x, H) = \frac{|4|}2 = 2}$. Et le projeté : $\frac{\langle x, n\rangle}{\|n\|^2} = \frac44 = 1$, donc $p_H(x) = x - 1\cdot n = (1 - 1,\ 2 - 1,\ 0 - (-1),\ 1 - 1) = (0, 1, 1, 0)$ ; contrôle : $0 + 1 - 1 + 0 = 0$.</p>

<h2 id="e-sym">3. Symétries orthogonales, réflexions</h2>
<div class="sbox">$$s_F = 2p_F - \operatorname{id}:\ \text{symétrie par rapport à}\ F\ \text{parallèlement à}\ F^\perp.\qquad\textbf{Réflexion}\ (F = H = n^\perp):\ s(x) = x - 2\frac{\langle x, n\rangle}{\|n\|^2}n.$$
$$\text{En matrice, dans une BON}:\quad S = I_n - \frac2{n^\top n}\,nn^\top\qquad(\text{symétrique et orthogonale}).$$</div>
<p>Une symétrie $s$ ($s^2 = \operatorname{id}$) est <b>orthogonale</b> si et seulement si $s$ conserve la norme, si et seulement si sa matrice en BON est <b>symétrique</b>.</p>
<p class="ml">Exemple 2 : matrice d'une réflexion</p>
<p>Matrice dans la base canonique de la réflexion par rapport au plan $P:\ x + y + z = 0$.</p>
<p><b>Étape 1 : Rappel.</b> $S = I - \frac2{n^\top n}nn^\top$.</p>
<p><b>Étape 2 : Le normal.</b> On lit $\cR{n = (1, 1, 1)^\top}$ sur l'équation. $n^\top n = 1\times1 + 1\times1 + 1\times1 = 3$. Et $nn^\top$ (colonne fois ligne) a pour coefficient $(i, j)$ le produit $n_in_j = 1\times1 = 1$ : c'est $J$, la matrice remplie de $1$.</p>
<p><b>Étape 3 : Le calcul.</b> $S = I_3 - \frac23J$ : sur la diagonale $1 - \frac23 = \frac13$, ailleurs $0 - \frac23 = -\frac23$. On factorise $\frac13$ :</p>
$$S = I_3 - \frac23J = \frac13\begin{pmatrix}1&-2&-2\\-2&1&-2\\-2&-2&1\end{pmatrix}.$$
<p><b>Étape 4 : Contrôle.</b> $Sn$ : chaque ligne de $3S$ fois $(1, 1, 1)$ donne $1 - 2 - 2 = -3$, donc $Sn = \frac13(-3, -3, -3) = -n$ (le normal est retourné). Et $3S(1, -1, 0)^\top = (1 + 2,\ -2 - 1,\ -2 + 2) = (3, -3, 0)$, donc $S(1, -1, 0)^\top = (1, -1, 0)^\top$ (un vecteur du plan est fixe).</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{S = \frac13\begin{pmatrix}1&-2&-2\\-2&1&-2\\-2&-2&1\end{pmatrix}}$, symétrique, orthogonale, de déterminant $-1$.</p>

<h2 id="e-iso">4. Isométries (automorphismes orthogonaux)</h2>
<div class="sbox">$$u\in O(E)\iff\forall x,\ \|u(x)\| = \|x\|\iff\forall x, y,\ \langle u(x), u(y)\rangle = \langle x, y\rangle\iff u\ \text{envoie une BON sur une BON}\iff\operatorname{Mat}_{\text{BON}}(u)\in O(n).$$</div>
<p>Si $F$ est stable par $u\in O(E)$, alors $F^\perp$ aussi. Les valeurs propres <b>réelles</b> de $u$ sont $\pm1$. $\det u = \pm1$ ; $SO(E)$ : les isométries de déterminant $1$ (rotations).</p>

<h2 id="e-on">5. Matrices orthogonales</h2>
<div class="sbox">$$A\in O(n)\iff A^\top A = I_n\iff A^{-1} = A^\top\iff\text{les colonnes forment une BON de}\ \mathbb R^n\iff\text{les lignes aussi}.$$
$$\text{La matrice de passage entre deux BON est orthogonale}.\qquad SO(n) = \{A\in O(n),\ \det A = 1\}.$$</div>
<p class="ml">Exemple 3 : vérifier qu'une matrice est orthogonale</p>
<p>$A = \frac13\begin{pmatrix}2&-1&2\\2&2&-1\\-1&2&2\end{pmatrix}$.</p>
<p><b>Étape 1 : Rappel.</b> $A\in O(n)\iff$ les colonnes forment une BON : normes $1$ et produits scalaires $0$.</p>
<p><b>Étape 2 : Les normes.</b> On calcule avec $3A$ (il faudra diviser par $3^2 = 9$). Colonne $1$ : $(2, 2, -1)$, $2^2 + 2^2 + (-1)^2 = 4 + 4 + 1 = 9$. Colonne $2$ : $(-1, 2, 2)$, $1 + 4 + 4 = 9$. Colonne $3$ : $(2, -1, 2)$, $4 + 1 + 4 = 9$. Donc chaque colonne de $A$ a pour norme au carré $\frac99 = 1$.</p>
<p><b>Étape 3 : Les produits scalaires.</b> $C_1\cdot C_2\propto2\times(-1) + 2\times2 + (-1)\times2 = -2 + 4 - 2 = 0$ ; $C_1\cdot C_3\propto2\times2 + 2\times(-1) + (-1)\times2 = 4 - 2 - 2 = 0$ ; $C_2\cdot C_3\propto(-1)\times2 + 2\times(-1) + 2\times2 = -2 - 2 + 4 = 0$.</p>
<p><b>Étape 4 : Le déterminant</b>, en développant $3A$ selon la première ligne $(2, -1, 2)$ :</p>
$$\det(3A) = 2\begin{vmatrix}2&-1\\2&2\end{vmatrix} - (-1)\begin{vmatrix}2&-1\\-1&2\end{vmatrix} + 2\begin{vmatrix}2&2\\-1&2\end{vmatrix} = 2(4 + 2) + (4 - 1) + 2(4 + 2) = 12 + 3 + 12 = 27.$$
<p>Et $\det(3A) = 3^3\det A = 27\det A$, donc $\det A = \frac{27}{27} = 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{A\in SO(3)}$ : c'est une rotation (étudiée à l'exemple 5).</p>

<h2 id="e-o2">6. Le plan : $O(2)$</h2>
<div class="sbox">$$SO(2):\ R_\theta = \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}\ (\text{rotation d'angle}\ \theta),\qquad O(2)\setminus SO(2):\ \begin{pmatrix}\cos\theta&\sin\theta\\\sin\theta&-\cos\theta\end{pmatrix}\ (\text{réflexion}).$$
$$R_\theta R_\varphi = R_{\theta + \varphi}:\ SO(2)\ \text{est commutatif.}\qquad\text{La réflexion a pour axe la droite d'angle}\ \frac\theta2.$$</div>
<p class="ml">Exemple 4 : reconnaître</p>
<p>Nature de $A = \frac15\begin{pmatrix}3&-4\\4&3\end{pmatrix}$ et $B = \frac15\begin{pmatrix}3&4\\4&-3\end{pmatrix}$.</p>
<p><b>Étape 1 : Rappel.</b> Dans $O(2)$ : $\det = 1$ rotation, $\det = -1$ réflexion.</p>
<p><b>Étape 2 : Orthogonales.</b> Colonnes de $A$ : $\frac15(3, 4)$ et $\frac15(-4, 3)$, normes au carré $\frac{3^2 + 4^2}{25} = \frac{9 + 16}{25} = 1$ et $\frac{16 + 9}{25} = 1$ ; produit scalaire $\frac{3\times(-4) + 4\times3}{25} = \frac{-12 + 12}{25} = 0$. Même calcul pour $B$ : colonnes $\frac15(3, 4)$ et $\frac15(4, -3)$, produit $\frac{12 - 12}{25} = 0$.</p>
<p><b>Étape 3 : $A$.</b> $\det A = \frac{3\times3 - (-4)\times4}{25} = \frac{9 + 16}{25} = 1$ : rotation $R_\theta$, et on lit la 1<sup>re</sup> colonne $(\cos\theta, \sin\theta) = \big(\frac35, \frac45\big)$. Comme $\cos\theta > 0$, $\theta\in\,]-\frac\pi2, \frac\pi2[$ et $\tan\theta = \frac{4/5}{3/5} = \frac43$, donc $\cO{\theta = \arctan\frac43}$.</p>
<p><b>Étape 4 : $B$.</b> $\det B = \frac{3\times(-3) - 4\times4}{25} = \frac{-9 - 16}{25} = -1$ : réflexion. Son axe est $\ker(B - I)$, avec $B - I = \frac15\begin{pmatrix}3 - 5&4\\4&-3 - 5\end{pmatrix} = \frac15\begin{pmatrix}-2&4\\4&-8\end{pmatrix}$. La 1<sup>re</sup> ligne donne $-2x + 4y = 0$, soit $x = 2y$ (la 2<sup>e</sup> est $-2$ fois la 1<sup>re</sup>) : l'axe est $\cR{\operatorname{Vect}(2, 1)}$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{A\ \text{rotation d'angle}\ \arctan\frac43,\ B\ \text{réflexion d'axe}\ \operatorname{Vect}(2, 1)}$.</p>

<h2 id="e-o3">7. L'espace : les rotations de $SO(3)$</h2>
<div class="sbox">$$A\in SO(3):\ \text{il existe une BON directe}\ (u, v, w)\ \text{où}\ A\ \text{s'écrit}\ \begin{pmatrix}1&0&0\\0&\cos\theta&-\sin\theta\\0&\sin\theta&\cos\theta\end{pmatrix}:\ \text{rotation d'axe}\ \cR{\mathbb Ru}\ \text{et d'angle}\ \cO\theta.$$
$$\operatorname{tr}A = 1 + 2\cos\theta,\qquad\text{signe de}\ \sin\theta = \text{signe de}\ \det(u, x, Ax)\ \ (x\notin\mathbb Ru).$$</div>
<p class="ml">La méthode en cinq temps</p>
<p><b>1.</b> $A^\top A = I$. <b>2.</b> $\det A = 1$ (sinon $-A$ est une rotation : $A$ est une « antirotation »). <b>3.</b> L'axe : résoudre $AX = X$, normaliser $\cR u$ (il <b>oriente</b> l'axe). <b>4.</b> $\cos\cO\theta = \frac{\operatorname{tr}A - 1}2$. <b>5.</b> Le signe de $\sin\theta$ : celui de $\det(u, x, Ax)$ pour un $x$ simple non colinéaire à $u$.</p>

<p class="ml">Exemple 5 : axe et angle</p>
<p>$A = \frac13\begin{pmatrix}2&-1&2\\2&2&-1\\-1&2&2\end{pmatrix}$ (exemple 3 : $A\in SO(3)$).</p>
<p><b>Étape 1 : Rappel.</b> Axe $= \ker(A - I)$, $\cos\theta = \frac{\operatorname{tr}A - 1}2$, signe de $\sin\theta$ par $\det(u, x, Ax)$.</p>
<p><b>Étape 2 : L'axe.</b> $(3A - 3I)X = 0$ :</p>
$$\left\{\begin{aligned}-x - y + 2z &= 0\\2x - y - z &= 0\end{aligned}\right.\ \Longrightarrow\ x = 2z - y,\ \ 4z - 3y - z = 0\ \Longrightarrow\ y = z = x.$$
<p>L'axe est dirigé par $\cR{u = \frac1{\sqrt3}(1, 1, 1)}$.</p>
<p><b>Étape 3 : Le cosinus.</b> $\operatorname{tr}A = \frac{2 + 2 + 2}3 = \frac63 = 2$ (somme de la diagonale), donc $\cos\cO\theta = \frac{\operatorname{tr}A - 1}2 = \frac{2 - 1}2 = \frac12$ et $\theta = \pm\frac\pi3$.</p>
<p><b>Étape 4 : Le signe.</b> On prend $x = (1, -1, 0)$, non colinéaire à $u$. $3Ax$ ligne par ligne : $2\times1 + (-1)\times(-1) + 2\times0 = 3$ ; $2\times1 + 2\times(-1) + (-1)\times0 = 0$ ; $(-1)\times1 + 2\times(-1) + 2\times0 = -3$. Donc $Ax = \frac13(3, 0, -3) = (1, 0, -1)$. On calcule $\det(u, x, Ax)$ avec $u = (1, 1, 1)$ (le facteur positif $\frac1{\sqrt3}$ ne change pas le signe), en développant selon la première ligne :</p>
$$\det\begin{pmatrix}1&1&1\\1&-1&0\\1&0&-1\end{pmatrix} = 1\cdot(1 - 0) - 1\cdot(-1 - 0) + 1\cdot(0 + 1) = 3 > 0.$$
<p><b>Étape 5 : Conclusion.</b> $\sin\theta > 0$ : $\cG{A\ \text{est la rotation d'axe}\ \mathbb R(1, 1, 1)\ \text{(orienté par ce vecteur) et d'angle}\ \frac\pi3}$.</p>

<h2 id="e-adj">8. L'adjoint</h2>
<div class="sbox">$$E\ \text{euclidien},\ u\in\mathcal L(E):\ \exists!\,u^*,\ \forall x, y,\ \langle u(x), y\rangle = \langle x, u^*(y)\rangle.\qquad\operatorname{Mat}_{\text{BON}}(u^*) = \operatorname{Mat}_{\text{BON}}(u)^\top.$$
$$(u\circ v)^* = v^*\circ u^*,\quad(u^*)^* = u,\quad\ker u^* = (\operatorname{Im}u)^\perp,\quad\operatorname{Im}u^* = (\ker u)^\perp,\quad F\ \text{stable par}\ u\Rightarrow F^\perp\ \text{stable par}\ u^*.$$
$$u\in O(E)\iff u^*u = \operatorname{id}.$$</div>

<h2 id="e-auto">9. Endomorphismes autoadjoints (symétriques)</h2>
<div class="sbox">$$u\in\mathcal S(E)\iff\forall x, y,\ \langle u(x), y\rangle = \langle x, u(y)\rangle\iff\operatorname{Mat}_{\text{BON}}(u)\ \text{symétrique}.$$
$$p\ \text{projecteur}:\ p\ \text{orthogonal}\iff p\ \text{autoadjoint}.\qquad s\ \text{symétrie}:\ s\ \text{orthogonale}\iff s\ \text{autoadjointe}.$$</div>
<p class="ml piege">Piège</p>
<p>« Matrice symétrique $\Rightarrow$ autoadjoint » n'est vrai que si la base est <b>orthonormée</b>.</p>

<h2 id="e-spec">10. Le théorème spectral</h2>
<div class="sbox">$$u\in\mathcal S(E)\ \Longrightarrow\ E = \overset\perp{\bigoplus}E_\lambda(u):\ u\ \text{est diagonalisable dans une BON}.$$
$$S\in\mathcal S_n(\mathbb R)\ \Longrightarrow\ \exists\cV P\in O(n),\ \exists D\ \text{diagonale réelle},\ S = \cV PD\cV P^\top.$$</div>
<p>Les sous-espaces propres sont <b>automatiquement orthogonaux</b> entre eux. Il suffit donc de trouver une BON <b>dans chaque</b> sous-espace propre (Gram-Schmidt si sa dimension est $\geq2$).</p>
<p class="ml">La méthode</p>
<p><b>1.</b> Valeurs propres (polynôme caractéristique, ou trace et rang). <b>2.</b> Base de chaque sous-espace propre. <b>3.</b> Orthonormaliser dans chaque sous-espace propre. <b>4.</b> $P$ = les vecteurs en colonnes, $P^{-1} = P^\top$.</p>

<p class="ml">Exemple 6 : une matrice $2\times2$</p>
<p>Diagonaliser $S = \begin{pmatrix}2&1\\1&2\end{pmatrix}$ dans une BON.</p>
<p><b>Étape 1 : Rappel.</b> $S$ symétrique réelle : $S = PDP^\top$ avec $P\in O(2)$.</p>
<p><b>Étape 2 : Valeurs propres.</b> $\chi_S = \det\begin{pmatrix}X - 2&-1\\-1&X - 2\end{pmatrix} = (X - 2)^2 - 1 = (X - 2 - 1)(X - 2 + 1) = (X - 3)(X - 1)$ : $\cO{\lambda = 1}$ et $\cO{\lambda = 3}$.</p>
<p><b>Étape 3 : Vecteurs propres.</b> $\lambda = 3$ : $S - 3I = \begin{pmatrix}-1&1\\1&-1\end{pmatrix}$, la 1<sup>re</sup> ligne donne $-x + y = 0$, soit $y = x$ : vecteur $(1, 1)$. $\lambda = 1$ : $S - I = \begin{pmatrix}1&1\\1&1\end{pmatrix}$, $x + y = 0$ : vecteur $(1, -1)$. Ils sont orthogonaux : $1\times1 + 1\times(-1) = 0$.</p>
<p><b>Étape 4 : On normalise.</b> $\|(1, 1)\| = \sqrt{1 + 1} = \sqrt2$ et $\|(1, -1)\| = \sqrt2$ : $\frac1{\sqrt2}(1, 1)$ et $\frac1{\sqrt2}(1, -1)$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{S = \cV P\begin{pmatrix}3&0\\0&1\end{pmatrix}\cV P^\top,\qquad\cV P = \frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}}.$$

<p class="ml">Exemple 7 : une valeur propre double</p>
<p>Diagonaliser $J = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$ dans une BON.</p>
<p><b>Étape 1 : Rappel.</b> Sous-espaces propres orthogonaux ; Gram-Schmidt dans chacun.</p>
<p><b>Étape 2 : Valeurs propres sans calcul.</b> Les trois colonnes de $J$ sont égales : $\operatorname{rg}J = 1$, donc $\dim\ker J = 3 - 1 = 2$ et $\cO0$ est valeur propre d'ordre $2$ ($J$ est diagonalisable). La somme des valeurs propres est la trace $1 + 1 + 1 = 3$ : la dernière vaut $3 - 0 - 0 = \cO3$.</p>
<p><b>Étape 3 : $E_3$.</b> Chaque ligne de $J$ fois $(1, 1, 1)$ donne $1 + 1 + 1 = 3$ : $J(1, 1, 1)^\top = 3(1, 1, 1)^\top$, donc $E_3 = \operatorname{Vect}(1, 1, 1)$. Norme $\sqrt{1 + 1 + 1} = \sqrt3$ : vecteur $\frac1{\sqrt3}(1, 1, 1)$.</p>
<p><b>Étape 4 : $E_0$.</b> $JX = 0\iff x + y + z = 0$ (les trois lignes sont pareilles) : base $v_1 = (1, -1, 0)$, $v_2 = (1, 0, -1)$. Gram-Schmidt : $\|v_1\| = \sqrt2$, $e_1 = \frac1{\sqrt2}(1, -1, 0)$. $\langle v_2, v_1\rangle = 1\times1 + 0\times(-1) + (-1)\times0 = 1$, $\|v_1\|^2 = 2$, donc $w_2 = v_2 - \frac12v_1 = \big(1 - \frac12,\ 0 + \frac12,\ -1 - 0\big) = \big(\frac12, \frac12, -1\big) = \frac12(1, 1, -2)$, de norme $\frac12\sqrt{1 + 1 + 4} = \frac{\sqrt6}2$ : $e_2 = \frac1{\sqrt6}(1, 1, -2)$.</p>
<p><b>Étape 5 : Conclusion.</b></p>
$$\cG{J = \cV PDP^\top,\quad\cV P = \begin{pmatrix}\frac1{\sqrt3}&\frac1{\sqrt2}&\frac1{\sqrt6}\\\frac1{\sqrt3}&-\frac1{\sqrt2}&\frac1{\sqrt6}\\\frac1{\sqrt3}&0&-\frac2{\sqrt6}\end{pmatrix},\quad D = \operatorname{diag}(3, 0, 0)}.$$

<h2 id="e-pos">11. Autoadjoints positifs, quotient de Rayleigh</h2>
<div class="sbox">$$u\in\mathcal S^+(E)\iff\forall x,\ \langle u(x), x\rangle\geq0\iff\operatorname{Sp}(u)\subset\mathbb R_+.\qquad u\in\mathcal S^{++}(E)\iff\forall x\neq0,\ \langle u(x), x\rangle > 0\iff\operatorname{Sp}(u)\subset\mathbb R_+^*.$$
$$\text{En matrice}:\ S\in\mathcal S_n^+\iff\forall X,\ X^\top SX\geq0.\qquad\lambda_{\min}\|x\|^2\leq\langle u(x), x\rangle\leq\lambda_{\max}\|x\|^2.$$</div>

<p class="ml">Exemple 8 : $A^\top A$ est positive</p>
<p>Pour $A\in\mathcal M_n(\mathbb R)$, montrer que $A^\top A\in\mathcal S_n^+$, et $\in\mathcal S_n^{++}\iff A$ inversible.</p>
<p><b>Étape 1 : Rappel.</b> $S\in\mathcal S_n^+\iff S$ symétrique et $X^\top SX\geq0$ pour tout $X$.</p>
<p><b>Étape 2 : Symétrique.</b> $(A^\top A)^\top = A^\top(A^\top)^\top = A^\top A$.</p>
<p><b>Étape 3 : Positive.</b> On regroupe : $X^\top A^\top AX = (X^\top A^\top)(AX) = (AX)^\top(AX)$, car $(AX)^\top = X^\top A^\top$. Et $Y^\top Y = \sum y_i^2 = \|Y\|^2$ pour une colonne $Y$, donc $X^\top A^\top AX = \|AX\|^2\geq0$.</p>
<p><b>Étape 4 : Définie positive.</b> $\|AX\|^2 = 0\iff AX = 0$. Donc $X^\top A^\top AX > 0$ pour tout $X\neq0\iff\ker A = \{0\}\iff A$ inversible.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{A^\top A\in\mathcal S_n^+,\ \text{et}\ A^\top A\in\mathcal S_n^{++}\iff A\in GL_n(\mathbb R)}$.</p>

<p class="ml">Exemple 9 : l'encadrement de Rayleigh</p>
<p><b>Étape 1 : Rappel.</b> Théorème spectral : une BON $(e_i)$ de vecteurs propres, $u(e_i) = \lambda_ie_i$.</p>
<p><b>Étape 2 : On décompose</b> $x = \sum x_ie_i$, donc $u(x) = \sum\lambda_ix_ie_i$.</p>
<p><b>Étape 3 : Le produit scalaire.</b> En BON, $\langle\sum a_ie_i, \sum b_ie_i\rangle = \sum a_ib_i$. Avec $a_i = \lambda_ix_i$ et $b_i = x_i$ : $\langle u(x), x\rangle = \sum\lambda_ix_i\cdot x_i = \sum\lambda_ix_i^2$.</p>
<p><b>Étape 4 : On encadre.</b> Pour chaque $i$, $\lambda_{\min}\leq\lambda_i\leq\lambda_{\max}$ et $x_i^2\geq0$, donc $\lambda_{\min}x_i^2\leq\lambda_ix_i^2\leq\lambda_{\max}x_i^2$. On somme : $\lambda_{\min}\sum x_i^2\leq\sum\lambda_ix_i^2\leq\lambda_{\max}\sum x_i^2$, et $\sum x_i^2 = \|x\|^2$ (BON).</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\lambda_{\min}\|x\|^2\leq\langle u(x), x\rangle\leq\lambda_{\max}\|x\|^2}$, avec égalité pour un vecteur propre associé.</p>
<p class="ml">Bonus : racine carrée d'une matrice positive <span class="hp">hors programme</span></p>
<p>Si $S = PDP^\top\in\mathcal S_n^+$, alors $R = P\sqrt DP^\top$ est dans $\mathcal S_n^+$ et vérifie $R^2 = S$ (et c'est la seule). Classique en exercice, à redémontrer.</p>

<h2 id="e-enonce">12. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« $A$ est orthogonale »</b><span>Colonnes de norme $1$, deux à deux orthogonales ; ou $A^\top A = I$.</span></div>
<div><b>« Nature de $A\in O(3)$ »</b><span>$\det$, axe $\ker(A - I)$, $\cos\theta = \frac{\operatorname{tr}A - 1}2$, signe par $\det(u, x, Ax)$.</span></div>
<div><b>« Matrice de la réflexion par rapport à $H$ »</b><span>$I - \frac2{n^\top n}nn^\top$.</span></div>
<div><b>« Matrice de la projection sur $D = \mathbb Ru$ »</b><span>$\frac{uu^\top}{u^\top u}$.</span></div>
<div><b>$S$ symétrique réelle</b><span>Théorème spectral : $S = PDP^\top$, valeurs propres réelles.</span></div>
<div><b>« Diagonaliser en BON »</b><span>Vecteurs propres, Gram-Schmidt dans chaque sous-espace propre.</span></div>
<div><b>$\langle u(x), y\rangle = \langle x, u(y)\rangle$</b><span>$u$ autoadjoint : matrice symétrique en BON.</span></div>
<div><b>« $\langle u(x), x\rangle\geq0$ »</b><span>$u\in\mathcal S^+$, valeurs propres $\geq0$.</span></div>
<div><b>« $\|u(x)\| = \|x\|$ »</b><span>Isométrie : $u^*u = \operatorname{id}$, valeurs propres réelles $\pm1$.</span></div>
<div><b>« $F$ stable par $u$ »</b><span>$F^\perp$ stable par $u^*$ (donc par $u$ si $u$ autoadjoint ou orthogonal).</span></div>
<div><b>« Max de $\langle u(x), x\rangle$ sur la sphère »</b><span>Rayleigh : c'est $\lambda_{\max}$.</span></div>
</div>

<h2 id="e-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Dire « matrice symétrique donc autoadjoint » dans une base non orthonormée.</p>
<p><b>2.</b> Prendre $P^{-1}$ au lieu de $P^\top$, ou oublier de normaliser les colonnes de $P$.</p>
<p><b>3.</b> Oublier Gram-Schmidt dans un sous-espace propre de dimension $\geq2$.</p>
<p><b>4.</b> Donner l'angle d'une rotation de $SO(3)$ par la trace seule : il manque le signe.</p>
<p><b>5.</b> Croire qu'une matrice orthogonale est symétrique (vrai seulement pour les symétries).</p>
<p><b>6.</b> Confondre $\det = -1$ (réflexion dans le plan) et rotation.</p>
<p><b>7.</b> Diviser par $\|n\|$ au lieu de $\|n\|^2$ dans $p_H$ ou dans une réflexion.</p>
</div>

<h2 id="e-entrainement">S'entraîner</h2>
<div data-mlab="spec2"></div>
<div data-mlab="rot3"></div>
<div data-mlab="quizeu"></div>

<h2 id="e-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : valeurs propres réelles d'une isométrie</p>
<p><b>Étape 1 : Rappel.</b> $u\in O(E)\iff\|u(x)\| = \|x\|$ pour tout $x$.</p>
<p><b>Étape 2 : Un vecteur propre.</b> Soit $\lambda\in\mathbb R$ valeur propre, $x\neq0$ avec $u(x) = \lambda x$.</p>
<p><b>Étape 3 : Les normes.</b> $\|u(x)\| = \|\lambda x\| = |\lambda|\,\|x\|$ (homogénéité), et $\|u(x)\| = \|x\|$ (isométrie). Donc $|\lambda|\,\|x\| = \|x\|$, et on divise par $\|x\|\neq0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{|\lambda| = 1,\ \text{donc}\ \lambda = \pm1}$.</p>

<p class="ml">Exercice 2 : projecteur orthogonal $\iff$ autoadjoint</p>
<p><b>Étape 1 : Rappel.</b> $p$ orthogonal $\iff\ker p\perp\operatorname{Im}p$. Pour un projecteur, $x = p(x) + (x - p(x))$ avec $p(x)\in\operatorname{Im}p$ et $x - p(x)\in\ker p$.</p>
<p><b>Étape 2 : $\Rightarrow$.</b> Si $\ker p\perp\operatorname{Im}p$ : $\langle p(x), y\rangle = \langle p(x), p(y) + (y - p(y))\rangle = \langle p(x), p(y)\rangle$, et de même $\langle x, p(y)\rangle = \langle p(x), p(y)\rangle$.</p>
<p><b>Étape 3 : $\Leftarrow$.</b> Si $p^* = p$ : pour $x\in\ker p$ et $y = p(z)\in\operatorname{Im}p$, $\langle x, y\rangle = \langle x, p(z)\rangle = \langle p(x), z\rangle = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{p\ \text{orthogonal}\iff p^* = p}$.</p>

<p class="ml">Exercice 3 : $\sum|a_{ij}|\leq n\sqrt n$ pour $A\in O(n)$</p>
<p><b>Étape 1 : Rappel.</b> Cauchy-Schwarz dans $\mathbb R^{n^2}$, et $\operatorname{tr}(A^\top A) = \sum a_{ij}^2$.</p>
<p><b>Étape 2 : La somme des carrés.</b> Le coefficient $(j, j)$ de $A^\top A$ est $\sum_ia_{ij}^2$ (colonne $j$ fois colonne $j$), donc $\operatorname{tr}(A^\top A) = \sum_j\sum_ia_{ij}^2$. Comme $A^\top A = I_n$, cette somme vaut $\operatorname{tr}I_n = n$.</p>
<p><b>Étape 3 : Cauchy-Schwarz</b> avec les $n^2$ nombres $|a_{ij}|$ et $n^2$ fois $1$ :</p>
$$\sum_{i,j}|a_{ij}|\leq\sqrt{n^2}\,\sqrt{\sum a_{ij}^2} = n\sqrt n.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{\sum_{i,j}|a_{ij}|\leq n\sqrt n}$.</p>

<h2 id="e-arbre">L'arbre des espaces euclidiens</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Un endomorphisme ou une matrice</span><ul>
<li><div class="hr"><em>$A^\top A = I$ ?</em><span class="hq">Dimension, déterminant</span><ul>
<li><div class="hr"><em>$n = 2$, $\det = 1$</em><a class="hl ok" href="#e-o2">rotation $R_\theta$</a></div></li>
<li><div class="hr"><em>$n = 2$, $\det = -1$</em><a class="hl ok" href="#e-o2">réflexion, axe $\ker(A - I)$</a></div></li>
<li><div class="hr"><em>$n = 3$, $\det = 1$</em><a class="hl" href="#e-o3">axe, $\cos\theta$ par la trace, signe</a></div></li>
<li><div class="hr"><em>$n = 3$, $\det = -1$</em><a class="hl" href="#e-o3">étudier la rotation $-A$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>$S^\top = S$ ?</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>diagonaliser</em><a class="hl ok" href="#e-spec">$S = PDP^\top$, $P\in O(n)$</a></div></li>
<li><div class="hr"><em>le signe de $X^\top SX$</em><a class="hl" href="#e-pos">valeurs propres $\geq0$ ?</a></div></li>
<li><div class="hr"><em>encadrer $\langle u(x), x\rangle$</em><a class="hl" href="#e-pos">Rayleigh</a></div></li>
</ul></div></li>
<li><div class="hr"><em>projection, symétrie</em><span class="hq">Sur quoi ?</span><ul>
<li><div class="hr"><em>hyperplan</em><a class="hl" href="#e-hyp">$x - \frac{\langle x, n\rangle}{\|n\|^2}n$</a></div></li>
<li><div class="hr"><em>réflexion</em><a class="hl" href="#e-sym">$I - \frac2{n^\top n}nn^\top$</a></div></li>
<li><div class="hr"><em>orthogonal ?</em><a class="hl" href="#e-auto">autoadjoint $\iff$ orthogonal</a></div></li>
</ul></div></li>
<li><div class="hr"><em>$\langle u(x), y\rangle$ à déplacer</em><a class="hl" href="#e-adj">adjoint : matrice transposée</a></div></li>
<li><div class="hr"><em>conserve la norme</em><a class="hl end" href="#e-iso">isométrie : $u^*u = \operatorname{id}$</a></div></li>
</ul></div></div>
`,
"Topologie des espaces vectoriels normés": R`
<nav class="msum"><a href="#t-not">Notations</a><a href="#t-norme">Normes</a><a href="#t-equiv">Normes équivalentes</a><a href="#t-suites">Suites</a><a href="#t-ouv">Ouverts, fermés</a><a href="#t-adh">Intérieur, adhérence, densité</a><a href="#t-lim">Limites, continuité</a><a href="#t-lin">Applications linéaires continues</a><a href="#t-comp">Compacts</a><a href="#t-dimf">Dimension finie</a><a href="#t-cpa">Connexité par arcs</a><a href="#t-enonce">L'énoncé</a><a href="#t-erreurs">Erreurs</a><a href="#t-entrainement">S'entraîner</a><a href="#t-exos">Exercices</a><a href="#t-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les vecteurs et les suites $\cB x$, $\cB{(x_n)}$. <span class="kR">rouge</span> : la partie étudiée $\cR A$ (ouverte, fermée, compacte…). <span class="kO">orange</span> : les constantes d'inégalité $\cO\alpha$, $\cO\beta$, $\cO C$. <span class="kV">violet</span> : la norme utilisée $\cV{N}$, $\cV{\|\cdot\|_\infty}$. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="t-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>Définition</th></tr>
<tr><td>Normes sur $\mathbb K^n$</td><td>$\|x\|_1$, $\|x\|_2$, $\|x\|_\infty$</td><td>$\sum|x_i|$, $\sqrt{\sum|x_i|^2}$, $\max|x_i|$.</td></tr>
<tr><td>Normes sur $\mathcal C([a, b])$</td><td>$\|f\|_1$, $\|f\|_2$, $\|f\|_\infty$</td><td>$\int_a^b|f|$, $\sqrt{\int_a^b|f|^2}$, $\sup_{[a,b]}|f|$.</td></tr>
<tr><td>Boules</td><td>$B(a, r)$, $B_f(a, r)$, $S(a, r)$</td><td>$\|x - a\| \lt r$, $\leq r$, $= r$.</td></tr>
<tr><td>Distance à une partie</td><td>$d(x, A)$</td><td>$\inf_{a\in A}\|x - a\|$.</td></tr>
<tr><td>Intérieur, adhérence</td><td>$\mathring A$, $\overline A$</td><td>Plus grand ouvert inclus, plus petit fermé contenant.</td></tr>
<tr><td>Frontière</td><td>$\operatorname{Fr}(A)$</td><td>$\overline A\setminus\mathring A$.</td></tr>
<tr><td>Applications linéaires continues</td><td>$\mathcal L_c(E, F)$, $|||u|||$</td><td>$|||u||| = \sup_{x\neq0}\frac{\|u(x)\|}{\|x\|}$.</td></tr>
</table>

<h2 id="t-norme">2. Normes</h2>
<div class="sbox">$$N:E\to\mathbb R_+\ \text{est une norme si}:\quad\textbf{séparation}\ N(x) = 0\Rightarrow x = 0,\quad\textbf{homogénéité}\ N(\lambda x) = |\lambda|N(x),\quad\textbf{triangulaire}\ N(x + y)\leq N(x) + N(y).$$
$$\big|\|x\| - \|y\|\big|\leq\|x - y\|.\qquad\text{Les boules sont convexes}.\qquad d(x, y) = \|x - y\|.$$</div>
<p class="ml">Exemple 1 : montrer qu'on a une norme</p>
<p>$N(x) = |x_1| + 2|x_2|$ sur $\mathbb R^2$.</p>
<p><b>Étape 1 : Rappel.</b> Positivité, séparation, homogénéité, inégalité triangulaire.</p>
<p><b>Étape 2 : Positivité et séparation.</b> $N(x)\geq0$. Si $N(x) = 0$, une somme de deux termes positifs est nulle : $|x_1| = |x_2| = 0$, donc $x = 0$.</p>
<p><b>Étape 3 : Homogénéité.</b> $\lambda x = (\lambda x_1, \lambda x_2)$ et $|\lambda x_i| = |\lambda|\,|x_i|$, donc $N(\lambda x) = |\lambda|\,|x_1| + 2|\lambda|\,|x_2| = |\lambda|\,(|x_1| + 2|x_2|) = |\lambda|N(x)$ (on factorise $|\lambda|$).</p>
<p><b>Étape 4 : Triangulaire</b>, avec $|a + b|\leq|a| + |b|$ sur chaque coordonnée :</p>
$$N(x + y) = |x_1 + y_1| + 2|x_2 + y_2|\leq|x_1| + |y_1| + 2|x_2| + 2|y_2| = N(x) + N(y).$$
<p><b>Étape 5 : Conclusion.</b> $\cG{N\ \text{est une norme sur}\ \mathbb R^2}$.</p>

<h2 id="t-equiv">3. Normes équivalentes</h2>
<div class="sbox">$$N\ \text{et}\ N'\ \text{équivalentes}\iff\exists\cO\alpha, \cO\beta > 0,\ \forall x,\ \cO\alpha N(x)\leq N'(x)\leq\cO\beta N(x).$$
$$\textbf{En dimension finie, toutes les normes sont équivalentes.}\qquad\text{Sur}\ \mathbb K^n:\ \|x\|_\infty\leq\|x\|_2\leq\|x\|_1\leq n\|x\|_\infty.$$</div>
<p>Des normes équivalentes ont les <b>mêmes</b> suites convergentes, parties bornées, ouverts, fermés, compacts, fonctions continues.</p>
<p class="ml">La méthode pour montrer que deux normes ne sont pas équivalentes</p>
<p>Trouver une suite $(x_n)$ avec $\frac{N'(x_n)}{N(x_n)}\to+\infty$ (ou $\to0$). Cela n'arrive qu'en <b>dimension infinie</b>.</p>

<p class="ml">Exemple 2 : les normes usuelles de $\mathbb K^n$</p>
<p><b>Étape 1 : Rappel.</b> Il faut des constantes qui ne dépendent pas de $x$.</p>
<p><b>Étape 2 : $\|x\|_\infty\leq\|x\|_2$.</b> Soit $k$ l'indice où $|x_k| = \max_i|x_i| = \|x\|_\infty$. La somme $\sum_i|x_i|^2$ contient le terme $|x_k|^2$ et d'autres termes $\geq0$, donc $\|x\|_\infty^2 = |x_k|^2\leq\sum|x_i|^2 = \|x\|_2^2$. On prend la racine (croissante).</p>
<p><b>Étape 3 : $\|x\|_2\leq\|x\|_1$.</b> On développe le carré d'une somme : $\big(\sum|x_i|\big)^2 = \sum|x_i|^2 + 2\sum_{i \lt j}|x_i|\,|x_j|$. Les termes croisés sont $\geq0$, donc $\|x\|_1^2\geq\sum|x_i|^2 = \|x\|_2^2$, et on prend la racine.</p>
<p><b>Étape 4 : $\|x\|_1\leq n\|x\|_\infty$.</b> Chaque $|x_i|\leq\|x\|_\infty$ ; on additionne ces $n$ inégalités : $\sum_{i=1}^n|x_i|\leq\underbrace{\|x\|_\infty + \dots + \|x\|_\infty}_{n\ \text{fois}} = n\|x\|_\infty$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\|x\|_\infty\leq\|x\|_2\leq\|x\|_1\leq n\|x\|_\infty}$ : les trois sont équivalentes (constantes $\cO1$ et $\cO n$).</p>

<p class="ml">Exemple 3 : deux normes non équivalentes</p>
<p>Sur $\mathcal C([0, 1])$, comparer $\|f\|_1$ et $\|f\|_\infty$.</p>
<p><b>Étape 1 : Rappel.</b> Non équivalentes si le quotient n'est pas borné le long d'une suite.</p>
<p><b>Étape 2 : Un sens.</b> Pour tout $t\in[0, 1]$, $|f(t)|\leq\|f\|_\infty$ (c'est la définition du sup). On intègre sur $[0, 1]$ (longueur $1$) : $\|f\|_1 = \int_0^1|f(t)|\,dt\leq\int_0^1\|f\|_\infty\,dt = \|f\|_\infty$.</p>
<p><b>Étape 3 : La suite.</b> $f_n(t) = t^n$ sur $[0, 1]$ : son max est atteint en $t = 1$, donc $\|f_n\|_\infty = 1^n = 1$. Et $\|f_n\|_1 = \int_0^1t^n\,dt = \Big[\frac{t^{n+1}}{n + 1}\Big]_0^1 = \frac1{n + 1}$.</p>
<p><b>Étape 4 : Le quotient.</b> $\frac{\|f_n\|_\infty}{\|f_n\|_1} = \frac1{1/(n + 1)} = n + 1\to+\infty$. Si on avait $\|f\|_\infty\leq\cO\beta\|f\|_1$ pour tout $f$, on aurait $n + 1\leq\cO\beta$ pour tout $n$ : impossible.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\|\cdot\|_1\ \text{et}\ \|\cdot\|_\infty\ \text{ne sont pas équivalentes}}$, et $f_n\to0$ pour $\|\cdot\|_1$ mais pas pour $\|\cdot\|_\infty$.</p>

<h2 id="t-suites">4. Suites dans un espace normé</h2>
<div class="sbox">$$\cB{x_n}\to\ell\iff\|\cB{x_n} - \ell\|\to0.\qquad\textbf{En dimension finie}:\ \cB{x_n}\to\ell\iff\text{chaque coordonnée converge (dans n'importe quelle base)}.$$</div>
<p>Valeur d'adhérence : limite d'une suite extraite. Une suite qui a deux valeurs d'adhérence diverge. En dimension finie, une suite bornée converge si et seulement si elle a une <b>seule</b> valeur d'adhérence.</p>
<p class="ml">Exemple 4 : une suite de matrices</p>
<p>$A = \begin{pmatrix}\frac12&1\\0&\frac12\end{pmatrix}$. Montrer que $A^n\to0$.</p>
<p><b>Étape 1 : Rappel.</b> En dimension finie, on regarde chaque coefficient.</p>
<p><b>Étape 2 : On écrit</b> $A = \frac12I + N$, $N = \begin{pmatrix}0&1\\0&0\end{pmatrix}$, $N^2 = 0$, $IN = NI$. Binôme : $A^n = \sum_k\binom nk\big(\frac12\big)^{n-k}N^k$, et seuls $k = 0$ et $k = 1$ restent car $N^k = 0$ pour $k\geq2$ :</p>
$$A^n = \Big(\frac12\Big)^nI + n\Big(\frac12\Big)^{n-1}N = \begin{pmatrix}2^{-n}&n\,2^{1-n}\\0&2^{-n}\end{pmatrix}.$$
<p><b>Étape 3 : Les coefficients.</b> $2^{-n} = \frac1{2^n}\to0$. Et $n\,2^{1-n} = \frac{2n}{2^n}\to0$ car $2^n$ l'emporte sur $n$ (croissances comparées). Les quatre coefficients tendent vers $0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{A^n\to0}$ (pour n'importe quelle norme de $\mathcal M_2$).</p>

<h2 id="t-ouv">5. Ouverts, fermés</h2>
<div class="sbox">$$\cR U\ \text{ouvert}\iff\forall a\in U,\ \exists r > 0,\ B(a, r)\subset U.\qquad\cR F\ \text{fermé}\iff E\setminus F\ \text{ouvert}.$$
$$\textbf{Caractérisation séquentielle}:\ F\ \text{fermé}\iff\big(\forall(x_n)\in F^{\mathbb N},\ x_n\to\ell\Rightarrow\ell\in F\big).$$
$$f\ \textbf{continue}:\ f^{-1}(\text{ouvert})\ \text{est ouvert},\ f^{-1}(\text{fermé})\ \text{est fermé}.$$</div>
<p class="ml">Les deux méthodes</p>
<p><b>1. Image réciproque</b> (la plus rapide) : écrire $A = \{x,\ f(x)\in\dots\}$ avec $f$ continue. Inégalités larges, égalités $\to$ fermé ; inégalités strictes $\to$ ouvert. <b>2. Suites</b> : pour un fermé, prendre $x_n\in A$, $x_n\to\ell$, et montrer $\ell\in A$.</p>
<p>Une intersection <b>quelconque</b> de fermés est fermée, une réunion <b>finie</b> aussi. Pour les ouverts, c'est l'inverse.</p>

<p class="ml">Exemple 5 : par image réciproque</p>
<p>$A = \{(x, y),\ x^2 + y^2\leq1,\ x\geq y\}$ et $U = \{(x, y),\ xy > 1\}$ dans $\mathbb R^2$.</p>
<p><b>Étape 1 : Rappel.</b> $f$ continue : $f^{-1}(\text{fermé})$ fermé, $f^{-1}(\text{ouvert})$ ouvert.</p>
<p><b>Étape 2 : $A$.</b> $f_1(x, y) = x^2 + y^2$ et $f_2(x, y) = x - y$ sont continues (polynomiales). $x^2 + y^2\leq1\iff f_1(x, y)\in\,]-\infty, 1]$ et $x\geq y\iff f_2(x, y)\in[0, +\infty[$. Donc $A = f_1^{-1}(]-\infty, 1])\cap f_2^{-1}([0, +\infty[)$ : intersection de deux fermés (images réciproques d'intervalles fermés).</p>
<p><b>Étape 3 : $U$.</b> $g(x, y) = xy$ est continue et $U = g^{-1}(]1, +\infty[)$, image réciproque d'un ouvert.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{A\ \text{est fermé},\ U\ \text{est ouvert}}$.</p>

<p class="ml">Exemple 6 : $GL_n(\mathbb R)$ est ouvert, $O(n)$ est compact</p>
<p><b>Étape 1 : Rappel.</b> Image réciproque par une application continue. En dimension finie, compact $\iff$ fermé et borné.</p>
<p><b>Étape 2 : $GL_n$.</b> $\det$ est continue (polynomiale en les coefficients) et $GL_n(\mathbb R) = \det^{-1}(\mathbb R^*)$, avec $\mathbb R^*$ ouvert.</p>
<p><b>Étape 3 : $O(n)$ fermé.</b> $\varphi(A) = A^\top A$ est continue et $O(n) = \varphi^{-1}(\{I_n\})$, image réciproque d'un fermé.</p>
<p><b>Étape 4 : $O(n)$ borné.</b> Pour la norme $\|A\|_2 = \sqrt{\operatorname{tr}(A^\top A)} = \sqrt{\sum a_{ij}^2}$ : si $A\in O(n)$, $A^\top A = I_n$, donc $\|A\|_2 = \sqrt{\operatorname{tr}I_n} = \sqrt{1 + \dots + 1} = \sqrt n$. Toutes les matrices de $O(n)$ sont sur la sphère de rayon $\sqrt n$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{GL_n(\mathbb R)\ \text{ouvert},\ O(n)\ \text{compact}}$.</p>

<p class="ml">Exemple 7 : fermé ou pas, selon la norme</p>
<p>$F = \{f\in\mathcal C([0, 1]),\ f(0) = 0\}$.</p>
<p><b>Étape 1 : Rappel.</b> Caractérisation séquentielle des fermés. En dimension infinie, le résultat dépend de la norme.</p>
<p><b>Étape 2 : Pour $\|\cdot\|_\infty$.</b> Si $f_n\in F$ et $\|f_n - f\|_\infty\to0$, alors $|f(0)| = |f(0) - f_n(0)|\leq\|f - f_n\|_\infty\to0$, donc $f(0) = 0$ : $F$ est fermé.</p>
<p><b>Étape 3 : Pour $\|\cdot\|_1$.</b> $f_n(t) = \min(nt, 1)$ vaut $nt$ sur $[0, \frac1n]$ et $1$ ensuite : $f_n(0) = 0$, donc $f_n\in F$. L'écart avec la fonction $1$ n'est non nul que sur $[0, \frac1n]$ :</p>
$$\|f_n - 1\|_1 = \int_0^{1/n}(1 - nt)\,dt = \Big[t - \frac{nt^2}2\Big]_0^{1/n} = \frac1n - \frac n2\cdot\frac1{n^2} = \frac1n - \frac1{2n} = \frac1{2n}\to0.$$
<p>La limite $1$ vaut $1$ en $0$ : $1\notin F$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{F\ \text{fermé pour}\ \|\cdot\|_\infty,\ \text{pas fermé pour}\ \|\cdot\|_1}$ (il y est même dense).</p>

<h2 id="t-adh">6. Intérieur, adhérence, frontière, densité</h2>
<div class="sbox">$$a\in\overline A\iff\forall r > 0,\ B(a, r)\cap A\neq\varnothing\iff\exists(a_n)\in A^{\mathbb N},\ a_n\to a\iff d(a, A) = 0.$$
$$a\in\mathring A\iff\exists r > 0,\ B(a, r)\subset A.\qquad A\ \textbf{dense}\iff\overline A = E\iff\text{tout}\ x\ \text{est limite d'une suite de}\ A.$$</div>
<p class="ml">Exemple 8 : dans $\mathbb R$</p>
<p>$A = [0, 1[\,\cup\{2\}$. Intérieur, adhérence, frontière ?</p>
<p><b>Étape 1 : Rappel.</b> Adhérence : limites de suites de $A$. Intérieur : points avec une petite boule incluse.</p>
<p><b>Étape 2 : L'adhérence.</b> $1 - \frac1n\in[0, 1[\subset A$ pour $n\geq1$, et $1 - \frac1n\to1$ : donc $1\in\overline A$. Ensuite $[0, 1]\cup\{2\}$ est fermé (réunion de deux fermés) et contient $A$ : $\overline A\subset[0, 1]\cup\{2\}$. D'où $\overline A = [0, 1]\cup\{2\}$.</p>
<p><b>Étape 3 : L'intérieur.</b> Si $0 \lt a \lt 1$, avec $r = \min(a, 1 - a) > 0$, on a $]a - r, a + r[\subset]0, 1[\subset A$. En $0$ : $]-r, r[$ contient $-\frac r2\notin A$. En $2$ : $]2 - r, 2 + r[$ contient $2 + \frac r2\notin A$. Donc $0$ et $2$ ne sont pas intérieurs.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\mathring A = \,]0, 1[,\ \overline A = [0, 1]\cup\{2\},\ \operatorname{Fr}A = \{0, 1, 2\}}$.</p>

<p class="ml">Exemple 9 : $GL_n(\mathbb K)$ est dense dans $\mathcal M_n(\mathbb K)$</p>
<p><b>Étape 1 : Rappel.</b> Dense $\iff$ toute matrice est limite d'une suite de matrices inversibles.</p>
<p><b>Étape 2 : On perturbe.</b> Soit $A\in\mathcal M_n$. On pose $A_k = A - \frac1kI_n$.</p>
<p><b>Étape 3 : Inversible pour $k$ grand.</b> $A_k = A - \frac1kI_n$ n'est pas inversible $\iff\det\big(A - \frac1kI_n\big) = 0\iff\frac1k$ est valeur propre de $A$. $A$ a au plus $n$ valeurs propres ; si $\rho$ est le plus petit module non nul d'entre elles (ou $\rho = 1$ s'il n'y en a pas), alors pour $k > \frac1\rho$, $0 \lt \frac1k \lt \rho$ et $\frac1k$ n'en est pas une.</p>
<p><b>Étape 4 : La limite.</b> $A_k - A = -\frac1kI_n$, dont tous les coefficients sont $0$ ou $-\frac1k\to0$ : $A_k\to A$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\overline{GL_n(\mathbb K)} = \mathcal M_n(\mathbb K)}$. Usage : prouver une formule pour $A$ inversible, puis passer à la limite par continuité (ex. : $\chi_{AB} = \chi_{BA}$).</p>

<h2 id="t-lim">7. Limites, continuité</h2>
<div class="sbox">$$f\ \text{continue en}\ a\iff\big(\forall(x_n),\ x_n\to a\Rightarrow f(x_n)\to f(a)\big).\qquad f\ \cO k\text{-lipschitzienne}:\ \|f(x) - f(y)\|\leq\cO k\|x - y\|\Rightarrow\text{continue}.$$
$$\text{Sommes, produits, composées de fonctions continues sont continues. Les fonctions polynomiales en les coordonnées sont continues.}$$</div>
<p><b>Uniformément continue</b> : $\forall\varepsilon,\ \exists\eta$ (indépendant de $x$), $\|x - y\|\leq\eta\Rightarrow\|f(x) - f(y)\|\leq\varepsilon$. Lipschitzienne $\Rightarrow$ uniformément continue $\Rightarrow$ continue.</p>
<p class="ml">Exemple 10 : la distance à une partie est $1$-lipschitzienne</p>
<p><b>Étape 1 : Rappel.</b> $d(x, A) = \inf_{a\in A}\|x - a\|$, et l'inf est le plus grand minorant.</p>
<p><b>Étape 2 : Pour $a\in A$.</b> $d(x, A)\leq\|x - a\|\leq\|x - y\| + \|y - a\|$.</p>
<p><b>Étape 3 : On passe à l'inf en $a$.</b> On réécrit l'étape 2 : $d(x, A) - \|x - y\|\leq\|y - a\|$ pour <b>tout</b> $a\in A$. Le nombre $d(x, A) - \|x - y\|$ est donc un minorant de $\{\|y - a\|,\ a\in A\}$, et l'inf est le plus grand minorant : $d(x, A) - \|x - y\|\leq d(y, A)$.</p>
<p><b>Étape 4 : On échange $x$ et $y$.</b> On obtient aussi $d(y, A) - d(x, A)\leq\|y - x\| = \|x - y\|$. Les deux inégalités donnent $-\|x - y\|\leq d(x, A) - d(y, A)\leq\|x - y\|$, soit $|d(x, A) - d(y, A)|\leq\|x - y\|$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{x\mapsto d(x, A)\ \text{est}\ 1\text{-lipschitzienne}}$ (donc continue). Même idée : $x\mapsto\|x\|$.</p>

<h2 id="t-lin">8. Applications linéaires continues</h2>
<div class="sbox">$$u\ \text{linéaire continue}\iff\exists\cO C\geq0,\ \forall x,\ \|u(x)\|\leq\cO C\|x\|.\qquad|||u||| = \sup_{\|x\| = 1}\|u(x)\|,\qquad\|u(x)\|\leq|||u|||\,\|x\|,\qquad|||u\circ v|||\leq|||u|||\,|||v|||.$$
$$\textbf{En dimension finie (au départ), toute application linéaire est continue.}\quad\text{De même pour les applications multilinéaires (}\det\text{, produit matriciel).}$$</div>
<p class="ml">La méthode</p>
<p><b>Continuité</b> : majorer $\|u(x)\|$ par $C\|x\|$. <b>Norme subordonnée</b> : la majoration donne $|||u|||\leq C$ ; un $x_0\neq0$ avec égalité donne $|||u||| = C$. <b>Non-continuité</b> : une suite $x_n$ avec $\frac{\|u(x_n)\|}{\|x_n\|}\to+\infty$.</p>

<p class="ml">Exemple 11 : une forme linéaire continue et sa norme</p>
<p>$\varphi(f) = \int_0^1f(t)\,dt$ sur $(\mathcal C([0, 1]), \|\cdot\|_\infty)$.</p>
<p><b>Étape 1 : Rappel.</b> $|\varphi(f)|\leq C\|f\|$ donne la continuité et $|||\varphi|||\leq C$ ; un cas d'égalité donne $|||\varphi||| = C$.</p>
<p><b>Étape 2 : La majoration.</b> Inégalité triangulaire intégrale, puis $|f(t)|\leq\|f\|_\infty$ pour tout $t$ : $|\varphi(f)| = \big|\int_0^1f\big|\leq\int_0^1|f|\leq\int_0^1\|f\|_\infty\,dt = \|f\|_\infty\times(1 - 0) = \cO1\times\|f\|_\infty$.</p>
<p><b>Étape 3 : Le cas d'égalité.</b> Pour $f = 1$ (fonction constante) : $\|f\|_\infty = 1$ et $\varphi(f) = \int_0^11\,dt = 1$, donc $\frac{|\varphi(f)|}{\|f\|_\infty} = 1$ : la constante $1$ ne peut pas être améliorée.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\varphi\ \text{est continue et}\ |||\varphi||| = 1}$.</p>

<p class="ml">Exemple 12 : la dérivation n'est pas continue</p>
<p>$D:P\mapsto P'$ sur $\mathbb R[X]$, avec $\|P\| = \max|a_k|$ (coefficients).</p>
<p><b>Étape 1 : Rappel.</b> Si $\frac{\|D(P_n)\|}{\|P_n\|}\to+\infty$, aucune constante $C$ ne convient.</p>
<p><b>Étape 2 : La suite.</b> $P_n = X^n$ a un seul coefficient non nul, égal à $1$ : $\|P_n\| = \max|a_k| = 1$.</p>
<p><b>Étape 3 : L'image.</b> $D(P_n) = (X^n)' = nX^{n-1}$, un seul coefficient non nul, égal à $n$ : $\|D(P_n)\| = n$.</p>
<p><b>Étape 4 : Conclusion.</b> $\frac{\|D(P_n)\|}{\|P_n\|} = n\to+\infty$ : $\cG{D\ \text{n'est pas continue}}$ (c'est possible car $\mathbb R[X]$ est de dimension infinie).</p>

<h2 id="t-comp">9. Compacts</h2>
<div class="sbox">$$\cR K\ \text{compact}\iff\text{toute suite de}\ K\ \text{a une sous-suite qui converge dans}\ K.$$
$$\text{Compact}\Rightarrow\text{fermé et borné}.\qquad\text{Fermé inclus dans un compact}\Rightarrow\text{compact}.\qquad K_1\times K_2\ \text{compact}.$$
$$f\ \text{continue},\ K\ \text{compact}\ \Longrightarrow\ f(K)\ \text{compact};\ \text{si}\ f\ \text{réelle},\ \textbf{elle est bornée et atteint ses bornes}.\qquad\textbf{Heine}:\ f\ \text{continue sur}\ K\Rightarrow\text{uniformément continue}.$$</div>
<p class="ml">Exemple 13 : la distance à un fermé est atteinte</p>
<p>$E$ de dimension finie, $F$ fermé non vide, $a\in E$. Montrer qu'il existe $b\in F$ avec $\|a - b\| = d(a, F)$.</p>
<p><b>Étape 1 : Rappel.</b> En dimension finie, fermé borné = compact ; une fonction continue réelle sur un compact atteint son min.</p>
<p><b>Étape 2 : On se ramène à une partie bornée.</b> Soit $x_0\in F$ et $R = \|a - x_0\|$. On pose $K = F\cap B_f(a, R)$ : non vide ($x_0\in K$), fermé, borné, donc compact.</p>
<p><b>Étape 3 : Le min sur $K$.</b> $x\mapsto\|a - x\|$ est continue : elle atteint son min sur $K$ en un $b$.</p>
<p><b>Étape 4 : C'est le min sur $F$.</b> Si $x\in F$ n'est pas dans $K$, c'est qu'il n'est pas dans la boule : $\|a - x\| > R$. Et $\|a - b\|\leq\|a - x_0\| = R$ (car $b$ réalise le min sur $K\ni x_0$). Donc $\|a - x\| > \|a - b\|$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{d(a, F) = \|a - b\|\ \text{avec}\ b\in F}$.</p>

<h2 id="t-dimf">10. Ce que change la dimension finie</h2>
<div class="sbox">$$\dim E \lt +\infty:\quad\text{normes équivalentes},\quad\textbf{compact}\iff\textbf{fermé et borné},\quad\text{Bolzano-Weierstrass},\quad\text{linéaire}\Rightarrow\text{continue},\quad\text{tout sev est fermé}.$$</div>
<p>En dimension infinie, <b>aucun</b> de ces résultats n'est garanti : la boule unité fermée n'est jamais compacte, les normes peuvent ne pas être équivalentes, une application linéaire peut ne pas être continue.</p>

<h2 id="t-cpa">11. Connexité par arcs</h2>
<div class="sbox">$$A\ \text{connexe par arcs}:\ \forall a, b\in A,\ \exists\gamma:[0, 1]\to A\ \text{continue},\ \gamma(0) = a,\ \gamma(1) = b.$$
$$\text{Convexe}\Rightarrow\text{étoilé}\Rightarrow\text{connexe par arcs}.\qquad\text{Dans}\ \mathbb R:\ \text{connexes par arcs} = \text{intervalles}.\qquad f\ \text{continue}:\ f(A)\ \text{connexe par arcs}.$$</div>
<p>Conséquence : <b>TVI généralisé</b>. Une fonction continue réelle sur un connexe par arcs qui prend deux valeurs prend toutes les valeurs intermédiaires.</p>
<p class="ml">Exemple 14 : $GL_n(\mathbb R)$ n'est pas connexe par arcs</p>
<p><b>Étape 1 : Rappel.</b> L'image continue d'un connexe par arcs de $\mathbb R$ est un intervalle.</p>
<p><b>Étape 2 : Par l'absurde.</b> Si $GL_n(\mathbb R)$ était connexe par arcs, $\det(GL_n(\mathbb R))$ serait un intervalle.</p>
<p><b>Étape 3 : Les valeurs.</b> $\det I_n = 1\times\dots\times1 = 1$ et $\det\operatorname{diag}(-1, 1, \dots, 1) = (-1)\times1\times\dots\times1 = -1$ (produit de la diagonale). Un intervalle qui contient $-1$ et $1$ contient tout $[-1, 1]$, donc $0$.</p>
<p><b>Étape 4 : Conclusion.</b> Or $\det A\neq0$ sur $GL_n$ : $\cG{GL_n(\mathbb R)\ \text{n'est pas connexe par arcs}}$.</p>

<p class="ml">Bonus : suites de Cauchy, espaces complets <span class="hp">hors programme</span></p>
<p>$(x_n)$ est de Cauchy si $\|x_p - x_q\|\to0$ quand $p, q\to+\infty$. Toute suite convergente est de Cauchy ; un espace où la réciproque est vraie est dit complet (Banach). Les espaces de dimension finie sont complets ; $(\mathcal C([0, 1]), \|\cdot\|_1)$ ne l'est pas.</p>

<h2 id="t-enonce">12. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Montrer que $N$ est une norme »</b><span>Séparation, homogénéité, triangulaire.</span></div>
<div><b>« Les normes sont-elles équivalentes ? »</b><span>Dimension finie : oui. Sinon : une suite avec un quotient non borné.</span></div>
<div><b>« $A$ est fermé » / « ouvert »</b><span>Image réciproque par une fonction continue, ou suites.</span></div>
<div><b>« Déterminer $\overline A$ »</b><span>Limites de suites de $A$, puis un fermé qui contient $A$.</span></div>
<div><b>« $A$ est dense »</b><span>Approcher tout $x$ par une suite de $A$ (perturbation $A - \frac1kI$…).</span></div>
<div><b>« $u$ linéaire est continue »</b><span>$\|u(x)\|\leq C\|x\|$ ; en dimension finie, automatique.</span></div>
<div><b>« Calculer $|||u|||$ »</b><span>Majoration, puis un vecteur qui réalise l'égalité (ou une suite).</span></div>
<div><b>« Le min / max est atteint »</b><span>Fonction continue sur un compact (fermé borné en dimension finie).</span></div>
<div><b>« $f$ est continue » avec $x, y$</b><span>Opérations, ou lipschitzienne, ou suites.</span></div>
<div><b>« Pas connexe par arcs »</b><span>Une fonction continue qui ne prend pas une valeur intermédiaire.</span></div>
<div><b>Une égalité à prouver sur $\mathcal M_n$</b><span>La prouver sur $GL_n$, puis densité et continuité.</span></div>
</div>

<h2 id="t-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Croire qu'une partie non ouverte est fermée ($[0, 1[$ n'est ni l'un ni l'autre).</p>
<p><b>2.</b> Utiliser « fermé borné $\Rightarrow$ compact » en dimension infinie.</p>
<p><b>3.</b> Oublier de préciser la norme quand la dimension est infinie.</p>
<p><b>4.</b> Inégalité stricte $\Rightarrow$ fermé : c'est un ouvert.</p>
<p><b>5.</b> Pour $|||u|||$, ne donner que la majoration sans montrer qu'elle est atteinte.</p>
<p><b>6.</b> Écrire $f^{-1}(F)$ fermé sans avoir justifié que $f$ est continue.</p>
<p><b>7.</b> Confondre « borné » et « compact » dans $\mathbb R^n$ : il faut aussi fermé.</p>
</div>

<h2 id="t-entrainement">S'entraîner</h2>
<div data-mlab="boules"></div>
<div data-mlab="quizevn"></div>

<h2 id="t-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : $\mathcal S_n(\mathbb R)$ est fermé</p>
<p><b>Étape 1 : Rappel.</b> Image réciproque d'un fermé par une application continue ; en dimension finie, toute application linéaire est continue.</p>
<p><b>Étape 2 : L'application.</b> $\varphi(M) = M - M^\top$ est linéaire sur $\mathcal M_n(\mathbb R)$ (dimension finie), donc continue.</p>
<p><b>Étape 3 : L'image réciproque.</b> $\mathcal S_n = \varphi^{-1}(\{0\})$, et $\{0\}$ est fermé.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\mathcal S_n(\mathbb R)\ \text{est fermé}}$ (plus généralement, tout sev d'un espace de dimension finie).</p>

<p class="ml">Exercice 2 : une fonction coercive atteint son minimum</p>
<p>$f:\mathbb R^n\to\mathbb R$ continue avec $f(x)\to+\infty$ quand $\|x\|\to+\infty$.</p>
<p><b>Étape 1 : Rappel.</b> Continue sur un compact $\Rightarrow$ min atteint ; fermé borné = compact en dimension finie.</p>
<p><b>Étape 2 : On borne.</b> On pose $A = f(0)$. Comme $f(x)\to+\infty$ quand $\|x\|\to+\infty$, la définition de la limite donne un $R$ tel que $\|x\| > R\Rightarrow f(x) > A$.</p>
<p><b>Étape 3 : Sur la boule.</b> $B_f(0, R)$ est compacte : $f$ y atteint son min en $x_0$, et $f(x_0)\leq f(0) = A$.</p>
<p><b>Étape 4 : Ailleurs.</b> Hors de la boule, $f(x) > A\geq f(x_0)$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{f(x_0) = \min_{\mathbb R^n}f}$.</p>

<p class="ml">Exercice 3 : les matrices nilpotentes forment un fermé</p>
<p><b>Étape 1 : Rappel.</b> $N$ nilpotente $\iff N^n = 0$ (Cayley-Hamilton). Image réciproque d'un fermé.</p>
<p><b>Étape 2 : L'application.</b> $\psi(M) = M^n$ est continue (coefficients polynomiaux).</p>
<p><b>Étape 3 : L'image réciproque.</b> L'ensemble des nilpotentes est $\psi^{-1}(\{0\})$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\text{c'est un fermé de}\ \mathcal M_n(\mathbb K)}$.</p>

<h2 id="t-arbre">L'arbre de la topologie</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question dans un espace normé</span><ul>
<li><div class="hr"><em>des normes</em><span class="hq">Laquelle ?</span><ul>
<li><div class="hr"><em>est-ce une norme</em><a class="hl" href="#t-norme">séparation, homogénéité, triangulaire</a></div></li>
<li><div class="hr"><em>dimension finie</em><a class="hl ok" href="#t-equiv">toutes équivalentes</a></div></li>
<li><div class="hr"><em>dimension infinie</em><a class="hl" href="#t-equiv">suite $\frac{N'(x_n)}{N(x_n)}\to\infty$ ?</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une partie $A$</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>fermé, ouvert</em><a class="hl ok" href="#t-ouv">image réciproque, ou suites</a></div></li>
<li><div class="hr"><em>$\overline A$, $\mathring A$</em><a class="hl" href="#t-adh">suites de $A$, boules incluses</a></div></li>
<li><div class="hr"><em>dense</em><a class="hl" href="#t-adh">approcher tout point</a></div></li>
<li><div class="hr"><em>compact</em><a class="hl" href="#t-comp">fermé borné (dimension finie)</a></div></li>
<li><div class="hr"><em>connexe par arcs</em><a class="hl" href="#t-cpa">chemins, ou image par $f$ continue</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une fonction</em><span class="hq">Linéaire ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#t-lin">$\|u(x)\|\leq C\|x\|$, puis $|||u|||$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#t-lim">opérations, lipschitz, suites</a></div></li>
<li><div class="hr"><em>un min, un max</em><a class="hl end" href="#t-comp">continue sur un compact</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une suite</em><a class="hl" href="#t-suites">coordonnées (dimension finie)</a></div></li>
</ul></div></div>
`,
"Calcul différentiel": R`
<nav class="msum"><a href="#c-not">Notations</a><a href="#c-lim">Limite en un point</a><a href="#c-part">Dérivées partielles</a><a href="#c-diff">Différentiabilité</a><a href="#c-exdiff">Différentielles usuelles</a><a href="#c-chain">Règle de la chaîne</a><a href="#c-grad">Gradient</a><a href="#c-edp">EDP</a><a href="#c-c2">$\mathcal C^2$, Schwarz</a><a href="#c-ext">Extrema</a><a href="#c-glob">Extrema globaux</a><a href="#c-contr">Sous contrainte</a><a href="#c-tang">Plan tangent</a><a href="#c-enonce">L'énoncé</a><a href="#c-erreurs">Erreurs</a><a href="#c-entrainement">S'entraîner</a><a href="#c-exos">Exercices</a><a href="#c-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la fonction $\cB f$ et ses dérivées partielles. <span class="kR">rouge</span> : le point étudié $\cR a$ (souvent $(0, 0)$). <span class="kO">orange</span> : l'accroissement $\cO h$ et les majorations. <span class="kV">violet</span> : les nouvelles variables ($r$, $\theta$, $u$, $v$). <span class="kG">vert</span> : la conclusion.</p>

<h2 id="c-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>Définition</th></tr>
<tr><td>Dérivée selon $v$</td><td>$D_vf(a)$</td><td>$\lim\limits_{t\to0}\frac{f(a + tv) - f(a)}t$</td></tr>
<tr><td>Dérivées partielles</td><td>$\partial_if(a) = \frac{\partial f}{\partial x_i}(a)$</td><td>$D_{e_i}f(a)$</td></tr>
<tr><td>Différentielle</td><td>$df(a)\in\mathcal L(E, F)$</td><td>$f(a + h) = f(a) + df(a)(h) + o(\|h\|)$</td></tr>
<tr><td>Jacobienne</td><td>$J_f(a)$</td><td>$\big(\partial_jf_i(a)\big)_{i,j}$, matrice de $df(a)$</td></tr>
<tr><td>Gradient</td><td>$\nabla f(a)$</td><td>$df(a)(h) = \langle\nabla f(a), h\rangle$</td></tr>
<tr><td>Hessienne</td><td>$H_f(a)$</td><td>$\big(\partial_i\partial_jf(a)\big)_{i,j}$, symétrique si $\mathcal C^2$</td></tr>
<tr><td>Monge</td><td>$r, s, t$</td><td>$\partial^2_{xx}f$, $\partial^2_{xy}f$, $\partial^2_{yy}f$ au point</td></tr>
</table>

<h2 id="c-lim">2. Limite et continuité en un point de $\mathbb R^2$</h2>
<p class="ml">Les deux méthodes</p>
<p><b>Pour montrer que $f\to\ell$</b> : majorer $|f(x, y) - \ell|$ par une quantité qui ne dépend que de $r = \sqrt{x^2 + y^2}$ et tend vers $0$. Outils : $|x|\leq r$, $|y|\leq r$, $|xy|\leq\frac{x^2 + y^2}2$, ou les coordonnées polaires $x = r\cos\theta$, $y = r\sin\theta$ avec une majoration <b>uniforme en $\theta$</b>.</p>
<p><b>Pour montrer qu'il n'y a pas de limite</b> : deux chemins vers $\cR{(0, 0)}$ qui donnent deux limites différentes (droites $y = mx$, paraboles $y = x^2$…).</p>

<p class="ml">Exemple 1 : une limite nulle</p>
<p>$f(x, y) = \dfrac{x^2y}{x^2 + y^2}$, $f(0, 0) = 0$. Continue en $(0, 0)$ ?</p>
<p><b>Étape 1 : Rappel.</b> Majorer $|f - \ell|$ par une fonction de $r$ seulement, qui tend vers $0$.</p>
<p><b>Étape 2 : On majore</b> avec $x^2\leq x^2 + y^2$ :</p>
$$|f(x, y)| = \frac{x^2}{x^2 + y^2}\,|y|\leq1\times|y|\leq\cO r.$$
<p><b>Étape 3 : La limite.</b> $r = \sqrt{x^2 + y^2}$ et $|y| = \sqrt{y^2}\leq\sqrt{x^2 + y^2} = r$. Quand $(x, y)\to(0, 0)$, $r\to0$, donc $|f(x, y) - 0|\leq\cO r\to0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{f\ \text{est continue en}\ (0, 0)}$.</p>

<p class="ml">Exemple 2 : pas de limite, par les droites</p>
<p>$f(x, y) = \dfrac{xy}{x^2 + y^2}$ sur $\mathbb R^2\setminus\{(0, 0)\}$.</p>
<p><b>Étape 1 : Rappel.</b> Deux chemins, deux limites différentes $\Rightarrow$ pas de limite.</p>
<p><b>Étape 2 : Sur la droite $y = mx$</b> ($x\neq0$) : on remplace $y$ par $mx$ : numérateur $x\cdot mx = mx^2$, dénominateur $x^2 + m^2x^2 = x^2(1 + m^2)$, donc $f(x, mx) = \frac{mx^2}{x^2(1 + m^2)} = \frac m{1 + m^2}$ (on simplifie par $x^2\neq0$).</p>
<p><b>Étape 3 : Deux droites.</b> $m = 0$ : $\frac0{1 + 0} = 0$. $m = 1$ : $\frac1{1 + 1} = \frac12$. La valeur dépend de la droite.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{f\ \text{n'a pas de limite en}\ (0, 0)}$ (en polaires, $f = \cos\theta\sin\theta$ dépend de $\theta$).</p>

<p class="ml">Exemple 3 : les droites ne suffisent pas</p>
<p>$f(x, y) = \dfrac{x^2y}{x^4 + y^2}$.</p>
<p><b>Étape 1 : Rappel.</b> Avoir la même limite sur toutes les droites ne prouve <b>pas</b> la continuité.</p>
<p><b>Étape 2 : Sur $y = mx$</b> ($m\neq0$) : $f(x, mx) = \frac{x^2\cdot mx}{x^4 + m^2x^2} = \frac{mx^3}{x^2(x^2 + m^2)} = \frac{mx}{x^2 + m^2}\to\frac{0}{0 + m^2} = 0$. Sur l'axe $x = 0$ : $f(0, y) = \frac0{y^2} = 0$.</p>
<p><b>Étape 3 : Sur la parabole $y = x^2$.</b> Numérateur $x^2\cdot x^2 = x^4$, dénominateur $x^4 + (x^2)^2 = 2x^4$, donc $f(x, x^2) = \frac{x^4}{2x^4} = \frac12$ pour tout $x\neq0$.</p>
<p><b>Étape 4 : Conclusion.</b> $0\neq\frac12$ : $\cG{f\ \text{n'a pas de limite en}\ (0, 0)}$. Le chemin se choisit pour <b>équilibrer</b> les degrés ($x^4$ et $y^2$ du même ordre).</p>

<h2 id="c-part">3. Dérivées partielles, dérivées directionnelles</h2>
<div class="sbox">$$\frac{\partial f}{\partial x}(a, b) = \lim_{t\to0}\frac{f(a + t, b) - f(a, b)}t:\ \text{on dérive en}\ x,\ y\ \text{fixé}.$$</div>
<p>Hors des points problématiques, on dérive avec les règles usuelles. <b>Au point problématique</b> (une formule différente en $(0, 0)$), on revient au taux d'accroissement.</p>
<p class="ml piege">Piège</p>
<p>L'existence des dérivées partielles (et même de toutes les dérivées directionnelles) ne donne <b>pas</b> la continuité : voir l'exemple 4.</p>

<p class="ml">Exemple 4 : des dérivées partielles en un point problématique</p>
<p>$f(x, y) = \dfrac{xy}{x^2 + y^2}$, $f(0, 0) = 0$.</p>
<p><b>Étape 1 : Rappel.</b> En $(0, 0)$, on utilise le taux d'accroissement.</p>
<p><b>Étape 2 : Selon $x$.</b> Sur l'axe : $f(t, 0) = \frac{t\times0}{t^2 + 0} = 0$, donc $\frac{f(t, 0) - f(0, 0)}t = \frac{0 - 0}t = 0\to0$ : $\frac{\partial f}{\partial x}(0, 0) = 0$.</p>
<p><b>Étape 3 : Selon $y$.</b> De même $f(0, t) = 0$ : $\frac{\partial f}{\partial y}(0, 0) = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\text{les dérivées partielles existent en}\ (0, 0)}$, et pourtant $f$ n'y est pas continue (exemple 2).</p>

<h2 id="c-diff">4. Différentiabilité</h2>
<div class="sbox">$$f\ \text{différentiable en}\ \cR a\iff\exists L\in\mathcal L(E, F),\ f(\cR a + \cO h) = f(\cR a) + L(\cO h) + o(\|\cO h\|).\qquad df(a) = L.$$
$$\text{Différentiable}\Rightarrow\text{continue}\ \text{et}\ D_vf(a) = df(a)(v).\qquad df(a)(h) = \sum_i\frac{\partial f}{\partial x_i}(a)\,h_i.$$
$$\textbf{Si les dérivées partielles existent et sont continues sur}\ U\ \textbf{ouvert, alors}\ f\ \textbf{est}\ \mathcal C^1,\ \textbf{donc différentiable}.$$</div>
<p class="ml">La méthode en un point problématique</p>
<p><b>1.</b> Continuité (sinon, pas différentiable). <b>2.</b> Dérivées partielles par taux d'accroissement : elles donnent le <b>seul candidat</b> $L(h) = \partial_xf\,h_1 + \partial_yf\,h_2$. <b>3.</b> Étudier $\frac{f(a + h) - f(a) - L(h)}{\|h\|}$ : différentiable si et seulement si ça tend vers $0$.</p>

<p class="ml">Exemple 5 : différentiable en $(0, 0)$</p>
<p>$f(x, y) = \dfrac{x^2y^2}{x^2 + y^2}$, $f(0, 0) = 0$.</p>
<p><b>Étape 1 : Rappel.</b> Candidat $L$ par les dérivées partielles, puis $\frac{f(h) - f(0) - L(h)}{\|h\|}\to0$.</p>
<p><b>Étape 2 : Les dérivées partielles.</b> $f(t, 0) = \frac{t^2\times0}{t^2} = 0$ et de même $f(0, t) = 0$, donc les taux $\frac{f(t, 0) - 0}t$ et $\frac{f(0, t) - 0}t$ sont nuls : $\partial_xf(0, 0) = \partial_yf(0, 0) = 0$, le candidat est $L(h) = 0\cdot h_1 + 0\cdot h_2 = 0$.</p>
<p><b>Étape 3 : On majore.</b> $(x^2 - y^2)^2\geq0$ donne $x^4 + y^4\geq2x^2y^2$, donc $(x^2 + y^2)^2 = x^4 + 2x^2y^2 + y^4\geq4x^2y^2$, soit $x^2y^2\leq\frac{(x^2 + y^2)^2}4 = \frac{r^4}4$ :</p>
$$\frac{|f(x, y) - 0 - 0|}{\|(x, y)\|_2} = \frac{x^2y^2}{(x^2 + y^2)\,r}\leq\frac{r^4}{4r^3} = \cO{\frac r4}\to0.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{f\ \text{est différentiable en}\ (0, 0)\ \text{et}\ df(0, 0) = 0}$.</p>

<p class="ml">Exemple 6 : continue, des dérivées partielles, mais pas différentiable</p>
<p>$f(x, y) = \dfrac{x^3 + y^3}{x^2 + y^2}$, $f(0, 0) = 0$.</p>
<p><b>Étape 1 : Rappel.</b> Même méthode : candidat, puis quotient.</p>
<p><b>Étape 2 : Les dérivées partielles.</b> $f(t, 0) = \frac{t^3 + 0}{t^2 + 0} = t$, donc $\frac{f(t, 0) - 0}t = 1$ et $\partial_xf(0, 0) = 1$. De même $f(0, t) = t$ et $\partial_yf(0, 0) = 1$. Candidat : $L(x, y) = 1\cdot x + 1\cdot y = x + y$.</p>
<p><b>Étape 3 : Le quotient en polaires.</b></p>
<p>On développe $(x + y)(x^2 + y^2) = x^3 + xy^2 + x^2y + y^3$, donc $x^3 + y^3 - (x + y)(x^2 + y^2) = -xy^2 - x^2y = -xy(x + y)$ :</p>
$$\frac{f(x, y) - (x + y)}r = \frac{x^3 + y^3 - (x + y)(x^2 + y^2)}{r^3} = \frac{-xy(x + y)}{r^3} = \frac{-r^3\cos\theta\sin\theta(\cos\theta + \sin\theta)}{r^3} = -\cos\theta\sin\theta(\cos\theta + \sin\theta).$$
<p><b>Étape 4 : Il dépend de $\theta$.</b> En $\theta = \frac\pi4$ : $\cos\theta = \sin\theta = \frac{\sqrt2}2$, donc $-\frac{\sqrt2}2\cdot\frac{\sqrt2}2\cdot\Big(\frac{\sqrt2}2 + \frac{\sqrt2}2\Big) = -\frac12\cdot\sqrt2\neq0$, pour tout $r$ : le quotient ne tend pas vers $0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{f\ \text{n'est pas différentiable en}\ (0, 0)}$, bien que continue ($|f|\leq\frac{2r^3}{r^2} = 2r$) avec des dérivées partielles.</p>

<h2 id="c-exdiff">5. Différentielles à connaître</h2>
<div class="sbox">$$u\ \text{linéaire}:\ du(a) = u.\qquad B\ \text{bilinéaire}:\ dB(a, b)(h, k) = B(h, b) + B(a, k).\qquad d(\|x\|^2)(h) = 2\langle x, h\rangle.$$
$$d(M\mapsto M^2)(M)(H) = MH + HM.\qquad d(\det)(I_n)(H) = \operatorname{tr}H.\qquad d(M\mapsto M^{-1})(M)(H) = -M^{-1}HM^{-1}.$$</div>
<p class="ml">La méthode</p>
<p>On développe $f(a + h)$, on sépare le terme <b>linéaire en $h$</b> et le reste, et on montre que le reste est un $o(\|h\|)$ (souvent un $O(\|h\|^2)$).</p>
<p class="ml">Exemple 7 : $f(M) = M^2$</p>
<p><b>Étape 1 : Rappel.</b> $f(M + H) = f(M) + L(H) + o(\|H\|)$ avec $L$ linéaire.</p>
<p><b>Étape 2 : On développe</b> (sans commuter !) : $(M + H)^2 = (M + H)(M + H) = M\cdot M + M\cdot H + H\cdot M + H\cdot H = M^2 + MH + HM + H^2$. On ne regroupe pas $MH + HM$ en $2MH$ : en général $MH\neq HM$.</p>
<p><b>Étape 3 : La partie linéaire.</b> $L(H) = MH + HM$ est linéaire en $H$.</p>
<p><b>Étape 4 : Le reste.</b> Avec une norme sous-multiplicative, $\|H^2\| = \|H\cdot H\|\leq\|H\|\,\|H\| = \|H\|^2$, donc $\frac{\|H^2\|}{\|H\|}\leq\|H\|\to0$ : $H^2 = o(\|H\|)$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{df(M)(H) = MH + HM}$ (et $2MH$ seulement si $M$ et $H$ commutent).</p>

<p class="ml">Exemple 8 : $f(x) = \|x\|^2$ dans un espace euclidien</p>
<p><b>Étape 1 : Rappel.</b> On isole la partie linéaire de $f(x + h) - f(x)$.</p>
<p><b>Étape 2 : On développe.</b> $\|x + h\|^2 = \langle x + h, x + h\rangle = \langle x, x\rangle + \langle x, h\rangle + \langle h, x\rangle + \langle h, h\rangle = \|x\|^2 + 2\langle x, h\rangle + \|h\|^2$ (symétrie).</p>
<p><b>Étape 3 : Les morceaux.</b> $h\mapsto2\langle x, h\rangle$ est linéaire, et $\frac{\|h\|^2}{\|h\|} = \|h\|\to0$, donc $\|h\|^2 = o(\|h\|)$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{df(x)(h) = 2\langle x, h\rangle,\quad\nabla f(x) = 2x}$.</p>

<h2 id="c-chain">6. La règle de la chaîne</h2>
<div class="sbox">$$d(g\circ f)(a) = dg(f(a))\circ df(a),\qquad J_{g\circ f}(a) = J_g(f(a))\,J_f(a).$$
$$\text{Le long d'une courbe}:\ \frac d{dt}f\big(x(t), y(t)\big) = x'(t)\,\frac{\partial f}{\partial x} + y'(t)\,\frac{\partial f}{\partial y}.$$
$$g(\cV u, \cV v) = f\big(x(u, v), y(u, v)\big):\quad\frac{\partial g}{\partial u} = \frac{\partial x}{\partial u}\frac{\partial f}{\partial x} + \frac{\partial y}{\partial u}\frac{\partial f}{\partial y}\quad(\text{dérivées de}\ f\ \text{prises en}\ (x(u, v), y(u, v))).$$</div>
<p class="ml">Exemple 9 : les coordonnées polaires</p>
<p>$g(\cV r, \cV\theta) = f(r\cos\theta, r\sin\theta)$, $f$ de classe $\mathcal C^1$. Exprimer $\partial_rg$ et $\partial_\theta g$.</p>
<p><b>Étape 1 : Rappel.</b> $\partial_ug = \partial_ux\,\partial_xf + \partial_uy\,\partial_yf$.</p>
<p><b>Étape 2 : Les dérivées de $x = r\cos\theta$, $y = r\sin\theta$.</b> En $r$ ($\theta$ fixé) : $\partial_rx = \cos\theta$, $\partial_ry = \sin\theta$. En $\theta$ ($r$ fixé) : $\partial_\theta x = r\times(-\sin\theta) = -r\sin\theta$, $\partial_\theta y = r\cos\theta$.</p>
<p><b>Étape 3 : On assemble.</b></p>
$$\frac{\partial g}{\partial r} = \cos\theta\,\frac{\partial f}{\partial x} + \sin\theta\,\frac{\partial f}{\partial y},\qquad\frac{\partial g}{\partial\theta} = -r\sin\theta\,\frac{\partial f}{\partial x} + r\cos\theta\,\frac{\partial f}{\partial y}.$$
<p><b>Étape 4 : Conclusion.</b> On multiplie la 1<sup>re</sup> formule par $r$ : $r\cos\theta = x$ et $r\sin\theta = y$. Dans la 2<sup>e</sup>, $-r\sin\theta = -y$ et $r\cos\theta = x$. D'où $\cG{r\,\partial_rg = x\,\partial_xf + y\,\partial_yf\ \ \text{et}\ \ \partial_\theta g = x\,\partial_yf - y\,\partial_xf}$, à reconnaître dans les EDP.</p>

<h2 id="c-grad">7. Le gradient</h2>
<div class="sbox">$$df(a)(h) = \langle\nabla f(a), h\rangle,\qquad\nabla f(a) = \Big(\frac{\partial f}{\partial x_1}(a), \dots, \frac{\partial f}{\partial x_n}(a)\Big)\ \text{(en BON)}.$$</div>
<p>$\nabla f(a)$ indique la direction où $f$ <b>croît le plus vite</b> ; il est <b>orthogonal</b> aux lignes de niveau $\{f = c\}$.</p>

<h2 id="c-edp">8. Équations aux dérivées partielles</h2>
<div class="sbox">$$\text{Sur un ouvert convexe (ou un produit d'intervalles)}:\quad\frac{\partial f}{\partial x} = 0\iff f(x, y) = C(y),\qquad\frac{\partial^2f}{\partial x\partial y} = 0\iff f(x, y) = A(x) + B(y).$$</div>
<p class="ml">La méthode du changement de variables</p>
<p><b>1.</b> Poser $f(x, y) = g(\cV u, \cV v)$ avec le changement donné (bijectif, $\mathcal C^1$ dans les deux sens). <b>2.</b> Calculer $\partial_xf$, $\partial_yf$ (et les dérivées secondes) en fonction de celles de $g$ par la règle de la chaîne. <b>3.</b> Remplacer : on obtient une EDP simple en $g$. <b>4.</b> La résoudre, puis revenir à $x, y$.</p>

<p class="ml">Exemple 10 : un transport</p>
<p>Résoudre $\frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} = 0$ sur $\mathbb R^2$ ($f$ de classe $\mathcal C^1$), avec $\cV u = x + y$, $\cV v = x - y$.</p>
<p><b>Étape 1 : Rappel.</b> Règle de la chaîne, puis $\partial_ug = 0\iff g = C(v)$.</p>
<p><b>Étape 2 : Le changement.</b> $(x, y)\mapsto(x + y, x - y)$ est une bijection linéaire de $\mathbb R^2$. On pose $f(x, y) = g(x + y, x - y)$.</p>
<p><b>Étape 3 : Les dérivées.</b> $u = x + y$ et $v = x - y$, donc $\partial_xu = 1$, $\partial_xv = 1$, $\partial_yu = 1$, $\partial_yv = -1$. Règle de la chaîne : $\partial_xf = \partial_xu\,\partial_ug + \partial_xv\,\partial_vg = \partial_ug + \partial_vg$ et $\partial_yf = 1\cdot\partial_ug + (-1)\cdot\partial_vg = \partial_ug - \partial_vg$.</p>
<p><b>Étape 4 : On remplace.</b> $\partial_xf + \partial_yf = (\partial_ug + \partial_vg) + (\partial_ug - \partial_vg) = 2\,\partial_ug$. L'équation devient $2\,\partial_ug = 0$, donc $\partial_ug = 0$ sur $\mathbb R^2$ : $g$ ne dépend que de $v$, $g(u, v) = C(v)$ avec $C$ de classe $\mathcal C^1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{f(x, y) = C(x - y)}$, $C\in\mathcal C^1(\mathbb R)$. Contrôle : $\partial_xf + \partial_yf = C' - C' = 0$.</p>

<p class="ml">Exemple 11 : l'équation des ondes</p>
<p>Résoudre $\frac{\partial^2f}{\partial x^2} = \frac{\partial^2f}{\partial y^2}$ ($f$ de classe $\mathcal C^2$), avec $u = x + y$, $v = x - y$.</p>
<p><b>Étape 1 : Rappel.</b> On dérive deux fois avec la règle de la chaîne, puis $\partial_u\partial_vg = 0\iff g = A(u) + B(v)$.</p>
<p><b>Étape 2 : Les dérivées secondes.</b> En dérivant $\partial_xf = \partial_ug + \partial_vg$ et $\partial_yf = \partial_ug - \partial_vg$ (Schwarz pour $g$) :</p>
$$\partial^2_{xx}f = \partial^2_{uu}g + 2\partial^2_{uv}g + \partial^2_{vv}g,\qquad\partial^2_{yy}f = \partial^2_{uu}g - 2\partial^2_{uv}g + \partial^2_{vv}g.$$
<p><b>Étape 3 : On remplace.</b> On soustrait terme à terme : $(\partial^2_{uu}g - \partial^2_{uu}g) + (2\partial^2_{uv}g + 2\partial^2_{uv}g) + (\partial^2_{vv}g - \partial^2_{vv}g) = 4\,\partial^2_{uv}g$. L'équation devient $4\,\partial^2_{uv}g = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $g = A(u) + B(v)$, donc $\cG{f(x, y) = A(x + y) + B(x - y)}$, $A, B\in\mathcal C^2(\mathbb R)$.</p>

<p class="ml">Exemple 12 : en polaires</p>
<p>Résoudre $x\frac{\partial f}{\partial y} - y\frac{\partial f}{\partial x} = 0$ sur $U = \mathbb R^2\setminus(\mathbb R_-\times\{0\})$.</p>
<p><b>Étape 1 : Rappel.</b> Exemple 9 : $\partial_\theta g = x\,\partial_yf - y\,\partial_xf$.</p>
<p><b>Étape 2 : Le changement.</b> $(r, \theta)\mapsto(r\cos\theta, r\sin\theta)$ est une bijection $\mathcal C^1$ de $]0, +\infty[\times]-\pi, \pi[$ sur $U$ ; on pose $g(r, \theta) = f(r\cos\theta, r\sin\theta)$.</p>
<p><b>Étape 3 : L'équation devient</b> $\partial_\theta g = 0$ sur un produit d'intervalles, donc $g(r, \theta) = C(r)$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{f(x, y) = C\big(\sqrt{x^2 + y^2}\big)}$ : les solutions sont les fonctions radiales.</p>

<h2 id="c-c2">9. Fonctions de classe $\mathcal C^2$</h2>
<div class="sbox">$$\textbf{Schwarz}:\ f\ \text{de classe}\ \mathcal C^2\Rightarrow\frac{\partial^2f}{\partial x\partial y} = \frac{\partial^2f}{\partial y\partial x}.\qquad\textbf{Taylor-Young}:\ f(a + h) = f(a) + \langle\nabla f(a), h\rangle + \frac12h^\top H_f(a)h + o(\|h\|^2).$$</div>

<h2 id="c-ext">10. Extrema locaux</h2>
<div class="sbox">$$U\ \text{ouvert},\ f\ \text{différentiable},\ f\ \text{a un extremum local en}\ a\ \Longrightarrow\ \nabla f(a) = 0\ (a\ \textbf{point critique}).$$
$$a\ \text{critique},\ f\ \mathcal C^2:\quad H_f(a)\in\mathcal S_n^{++}\Rightarrow\text{min local strict},\quad-H_f(a)\in\mathcal S_n^{++}\Rightarrow\text{max local strict},\quad\text{valeurs propres de signes opposés}\Rightarrow\text{col}.$$
$$\text{Deux variables (Monge)}:\quad rt - s^2 > 0,\ r > 0:\ \text{min}\quad rt - s^2 > 0,\ r \lt 0:\ \text{max}\quad rt - s^2 \lt 0:\ \text{col}\quad rt - s^2 = 0:\ \text{on ne sait pas}.$$</div>
<p class="ml piege">Piège</p>
<p>Un point critique n'est pas forcément un extremum, et la condition $\nabla f(a) = 0$ ne vaut que sur un <b>ouvert</b> : au bord d'un domaine fermé, un extremum peut avoir un gradient non nul.</p>

<p class="ml">Exemple 13 : $f(x, y) = x^3 + y^3 - 3xy$</p>
<p><b>Étape 1 : Rappel.</b> Points critiques par $\nabla f = 0$, puis $rt - s^2$ en chacun.</p>
<p><b>Étape 2 : Les points critiques.</b> $\partial_xf = 3x^2 - 3y = 0$ donne $y = x^2$. On remplace dans $\partial_yf = 3y^2 - 3x = 0$ : $3x^4 - 3x = 0$, soit $3x(x^3 - 1) = 0$, donc $x = 0$ ou $x^3 = 1$, c'est-à-dire $x = 1$. Puis $y = x^2$ : points $\cR{(0, 0)}$ et $\cR{(1, 1)}$.</p>
<p><b>Étape 3 : Les dérivées secondes.</b> On dérive $\partial_xf = 3x^2 - 3y$ : en $x$, $r = 6x$ ; en $y$, $s = -3$. On dérive $\partial_yf = 3y^2 - 3x$ en $y$ : $t = 6y$.</p>
<p><b>Étape 4 : En $(0, 0)$.</b> $r = 6\times0 = 0$, $t = 0$, $s = -3$ : $rt - s^2 = 0\times0 - (-3)^2 = -9 \lt 0$ : point col.</p>
<p><b>Étape 5 : En $(1, 1)$.</b> $r = 6$, $t = 6$, $s = -3$ : $rt - s^2 = 36 - 9 = 27 > 0$ et $r = 6 > 0$ : minimum local, de valeur $f(1, 1) = 1 + 1 - 3 = -1$.</p>
<p><b>Étape 6 : Conclusion.</b> $\cG{\text{col en}\ (0, 0),\ \text{min local en}\ (1, 1)}$, pas global : $f(x, 0) = x^3\to-\infty$.</p>

<h2 id="c-glob">11. Extrema globaux</h2>
<p class="ml">Les deux méthodes</p>
<p><b>1. Sur un compact</b> : $f$ continue atteint son min et son max. On compare les valeurs aux <b>points critiques intérieurs</b> et le min/max <b>sur le bord</b> (qu'on paramètre). <b>2. Sur un ouvert</b> : au point critique $a$, on étudie le signe de $f(a + h) - f(a)$ <b>exactement</b>, pour tout $h$.</p>

<p class="ml">Exemple 14 : un minimum global sur $\mathbb R^2$</p>
<p>$f(x, y) = x^2 + xy + y^2 - 3x$.</p>
<p><b>Étape 1 : Rappel.</b> Point critique, puis signe de $f(a + h) - f(a)$ pour tout $h$.</p>
<p><b>Étape 2 : Le point critique.</b> $\partial_xf = 2x + y - 3$ et $\partial_yf = x + 2y$. La 2<sup>e</sup> équation donne $x = -2y$ ; dans la 1<sup>re</sup> : $-4y + y - 3 = 0$, soit $-3y = 3$, $y = -1$, puis $x = 2$ : $\cR{a = (2, -1)}$. Valeur : $f(2, -1) = 2^2 + 2\times(-1) + (-1)^2 - 3\times2 = 4 - 2 + 1 - 6 = -3$.</p>
<p><b>Étape 3 : L'écart exact.</b> On développe chaque morceau :</p>
$$(2 + h)^2 = 4 + 4h + h^2,\quad(2 + h)(-1 + k) = -2 + 2k - h + hk,\quad(-1 + k)^2 = 1 - 2k + k^2,\quad-3(2 + h) = -6 - 3h.$$
<p>On additionne : constantes $4 - 2 + 1 - 6 = -3$ ; termes en $h$ : $4h - h - 3h = 0$ ; en $k$ : $2k - 2k = 0$ (c'est le point critique) ; il reste :</p>
$$f(2 + h, -1 + k) - f(2, -1) = h^2 + hk + k^2 = \Big(h + \frac k2\Big)^2 + \frac34k^2\geq0.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{\min_{\mathbb R^2}f = -3}$, atteint seulement en $(2, -1)$.</p>

<p class="ml">Exemple 15 : sur un disque fermé</p>
<p>Extrema de $f(x, y) = x^2 + y^2 - x$ sur $D = \{x^2 + y^2\leq1\}$.</p>
<p><b>Étape 1 : Rappel.</b> $D$ compact, $f$ continue : min et max atteints. Candidats : points critiques intérieurs et bord.</p>
<p><b>Étape 2 : L'intérieur.</b> $\partial_xf = 2x - 1$ et $\partial_yf = 2y$ : $\nabla f = 0\iff x = \frac12,\ y = 0$. Ce point est intérieur ($\frac14 + 0 \lt 1$), et $f\big(\frac12, 0\big) = \frac14 + 0 - \frac12 = -\frac14$.</p>
<p><b>Étape 3 : Le bord.</b> Sur $x^2 + y^2 = 1$, on remplace $x^2 + y^2$ par $1$ : $f = 1 - x$, avec $x\in[-1, 1]$. Cette fonction de $x$ décroît : max en $x = -1$, $1 - (-1) = 2$, au point $(-1, 0)$ ; min en $x = 1$, $1 - 1 = 0$, au point $(1, 0)$.</p>
<p><b>Étape 4 : On compare</b> $-\frac14$, $0$, $2$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\min_Df = -\frac14\ \text{en}\ (\tfrac12, 0),\quad\max_Df = 2\ \text{en}\ (-1, 0)}$.</p>

<h2 id="c-contr">12. Extrema sous contrainte</h2>
<div class="sbox">$$X = \{g = 0\},\ f, g\ \mathcal C^1,\ \nabla g(a)\neq0:\quad f_{|X}\ \text{a un extremum en}\ a\ \Longrightarrow\ \exists\lambda\in\mathbb R,\ \nabla f(a) = \lambda\nabla g(a).$$</div>
<p>On résout le système $\nabla f = \lambda\nabla g$, $g = 0$ ; si $X$ est compact, le max et le min sont parmi les solutions.</p>
<p class="ml">Exemple 16 : max de $xy$ sur le cercle $x^2 + y^2 = 2$</p>
<p><b>Étape 1 : Rappel.</b> $\nabla f(a) = \lambda\nabla g(a)$ aux extrema, si $\nabla g(a)\neq0$.</p>
<p><b>Étape 2 : Existence.</b> Le cercle est compact et $f(x, y) = xy$ continue : min et max existent. $\nabla g = (2x, 2y)\neq0$ sur le cercle.</p>
<p><b>Étape 3 : Le système.</b> $\nabla f = (\partial_x(xy), \partial_y(xy)) = (y, x)$. L'équation $(y, x) = \lambda(2x, 2y)$ donne $y = 2\lambda x$ et $x = 2\lambda y$. On remplace $y$ dans la 2<sup>e</sup> : $x = 2\lambda\cdot2\lambda x = 4\lambda^2x$, et de même $y = 4\lambda^2y$. Comme $(x, y)\neq(0, 0)$ (on est sur le cercle), $4\lambda^2 = 1$, $\lambda = \pm\frac12$, et $y = 2\lambda x = \pm x$.</p>
<p><b>Étape 4 : Les candidats.</b> Avec $y = \pm x$, la contrainte $x^2 + y^2 = 2$ devient $x^2 + x^2 = 2$, soit $x^2 = 1$, $x = \pm1$. Points $(1, 1)$, $(-1, -1)$ : $xy = 1$ ; points $(1, -1)$, $(-1, 1)$ : $xy = -1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\max = 1,\ \min = -1}$ (on retrouve $|xy|\leq\frac{x^2 + y^2}2$).</p>

<h2 id="c-tang">13. Vecteurs tangents, plan tangent</h2>
<div class="sbox">$$\text{Surface}\ z = f(x, y):\quad z = f(a, b) + \partial_xf(a, b)(x - a) + \partial_yf(a, b)(y - b).$$
$$\text{Surface}\ \{g = 0\},\ \nabla g(M_0)\neq0:\quad\text{plan tangent}\ \langle\nabla g(M_0), M - M_0\rangle = 0\ (\nabla g\ \text{normal}).$$</div>
<p class="ml">Exemple 17 : plan tangent à une sphère</p>
<p>Plan tangent à $x^2 + y^2 + z^2 = 3$ en $M_0 = (1, 1, 1)$.</p>
<p><b>Étape 1 : Rappel.</b> $\nabla g(M_0)$ est normal au plan tangent.</p>
<p><b>Étape 2 : Le gradient.</b> $g(x, y, z) = x^2 + y^2 + z^2 - 3$, $\nabla g = (2x, 2y, 2z)$, donc $\nabla g(M_0) = (2, 2, 2)\neq0$.</p>
<p><b>Étape 3 : L'équation.</b> $\langle\nabla g(M_0), M - M_0\rangle = 0$ avec $M - M_0 = (x - 1, y - 1, z - 1)$ : $2(x - 1) + 2(y - 1) + 2(z - 1) = 0$. On divise par $2$ : $x + y + z - 3 = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{x + y + z = 3}$.</p>

<h2 id="c-enonce">14. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« $f$ continue en $(0, 0)$ ? »</b><span>Majorer par une fonction de $r$, ou deux chemins différents.</span></div>
<div><b>« Dérivées partielles en $(0, 0)$ »</b><span>Taux d'accroissement $\frac{f(t, 0) - f(0, 0)}t$.</span></div>
<div><b>« $f$ différentiable en $(0, 0)$ ? »</b><span>Candidat par les partielles, puis $\frac{f(h) - f(0) - L(h)}{\|h\|}\to0$ ?</span></div>
<div><b>« $f$ de classe $\mathcal C^1$ »</b><span>Partielles continues ; en $(0, 0)$ : leur limite égale la valeur par taux.</span></div>
<div><b>« Calculer $df(M)(H)$ » sur des matrices</b><span>Développer $f(M + H)$, garder le linéaire, montrer $o(\|H\|)$.</span></div>
<div><b>« On pose $f(x, y) = g(u, v)$ »</b><span>Règle de la chaîne, EDP simple en $g$, revenir à $x, y$.</span></div>
<div><b>« Extrema locaux »</b><span>$\nabla f = 0$, puis $rt - s^2$ (ou valeurs propres de la hessienne).</span></div>
<div><b>« Extremum global »</b><span>Écart exact $f(a + h) - f(a)$, ou compact + bord.</span></div>
<div><b>« Sur un compact »</b><span>Points critiques intérieurs et étude du bord paramétré.</span></div>
<div><b>« Sous la contrainte $g = 0$ »</b><span>$\nabla f = \lambda\nabla g$.</span></div>
<div><b>« Plan tangent »</b><span>$\nabla g$ normal, ou formule avec $\partial_xf$, $\partial_yf$.</span></div>
<div><b>$f(tx, ty) = t^\alpha f(x, y)$</b><span>Dériver en $t = 1$ : Euler.</span></div>
</div>

<h2 id="c-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Conclure à une limite parce qu'elle est la même sur toutes les droites.</p>
<p><b>2.</b> Une majoration en polaires qui dépend de $\theta$ sans être uniforme.</p>
<p><b>3.</b> Croire que les dérivées partielles donnent la continuité ou la différentiabilité.</p>
<p><b>4.</b> Dériver en $(0, 0)$ avec les formules valables ailleurs.</p>
<p><b>5.</b> Écrire $d(M^2)(H) = 2MH$ : les matrices ne commutent pas.</p>
<p><b>6.</b> Oublier où sont évaluées les dérivées de $f$ dans la règle de la chaîne.</p>
<p><b>7.</b> Conclure « min » quand $rt - s^2 = 0$.</p>
<p><b>8.</b> Chercher les extrema sur un fermé avec $\nabla f = 0$ seulement, sans le bord.</p>
<p><b>9.</b> Dire qu'un min local est global sans argument.</p>
</div>

<h2 id="c-entrainement">S'entraîner</h2>
<div data-mlab="polar"></div>
<div data-mlab="crit"></div>
<div data-mlab="quizcd"></div>

<h2 id="c-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : la relation d'Euler</p>
<p>$f$ différentiable sur $\mathbb R^2\setminus\{0\}$, homogène de degré $\alpha$ : $f(tx, ty) = t^\alpha f(x, y)$ pour $t > 0$. Montrer $x\,\partial_xf + y\,\partial_yf = \alpha f$.</p>
<p><b>Étape 1 : Rappel.</b> Règle de la chaîne le long d'une courbe : $\frac d{dt}f(x(t), y(t)) = x'\partial_xf + y'\partial_yf$.</p>
<p><b>Étape 2 : On dérive en $t$</b> les deux membres, à $(x, y)$ fixé :</p>
$$x\,\partial_xf(tx, ty) + y\,\partial_yf(tx, ty) = \alpha t^{\alpha - 1}f(x, y).$$
<p><b>Étape 3 : On prend $t = 1$.</b></p>
<p><b>Étape 4 : Conclusion.</b> $\cG{x\,\partial_xf + y\,\partial_yf = \alpha f}$.</p>

<p class="ml">Exercice 2 : Schwarz peut tomber en défaut</p>
<p>$f(x, y) = \dfrac{xy(x^2 - y^2)}{x^2 + y^2}$, $f(0, 0) = 0$. Comparer $\partial_y(\partial_xf)(0, 0)$ et $\partial_x(\partial_yf)(0, 0)$.</p>
<p><b>Étape 1 : Rappel.</b> Les dérivées en $(0, 0)$ se calculent par taux d'accroissement.</p>
<p><b>Étape 2 : $\partial_xf(0, y)$ pour $y\neq0$.</b> $\frac{f(t, y) - f(0, y)}t = \frac{y(t^2 - y^2)}{t^2 + y^2}\to\frac{-y^3}{y^2} = -y$. Et $\partial_xf(0, 0) = 0$.</p>
<p><b>Étape 3 : $\partial_yf(x, 0)$ pour $x\neq0$.</b> $\frac{f(x, t)}t = \frac{x(x^2 - t^2)}{x^2 + t^2}\to x$. Et $\partial_yf(0, 0) = 0$.</p>
<p><b>Étape 4 : Les dérivées croisées.</b> $\partial_y(\partial_xf)(0, 0) = \lim\frac{-y - 0}y = -1$ et $\partial_x(\partial_yf)(0, 0) = \lim\frac{x - 0}x = 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{-1\neq1}$ : $f$ n'est pas $\mathcal C^2$ en $(0, 0)$ (elle est pourtant $\mathcal C^1$).</p>

<p class="ml">Exercice 3 : le gradient de $x\mapsto\langle Ax, x\rangle$</p>
<p><b>Étape 1 : Rappel.</b> Développer $f(x + h)$ et isoler la partie linéaire.</p>
<p><b>Étape 2 : On développe.</b> $\langle A(x + h), x + h\rangle = \langle Ax, x\rangle + \langle Ax, h\rangle + \langle Ah, x\rangle + \langle Ah, h\rangle$.</p>
<p><b>Étape 3 : On transpose.</b> $\langle Ah, x\rangle = \langle h, A^\top x\rangle$, donc la partie linéaire est $\langle(A + A^\top)x, h\rangle$ ; et $|\langle Ah, h\rangle|\leq|||A|||\,\|h\|^2 = o(\|h\|)$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\nabla f(x) = (A + A^\top)x}$, soit $2Ax$ si $A$ est symétrique.</p>

<h2 id="c-arbre">L'arbre du calcul différentiel</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une fonction de plusieurs variables</span><ul>
<li><div class="hr"><em>en un point problématique</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>la continuité</em><a class="hl" href="#c-lim">majorer par $r$, ou deux chemins</a></div></li>
<li><div class="hr"><em>les partielles</em><a class="hl" href="#c-part">taux d'accroissement</a></div></li>
<li><div class="hr"><em>la différentiabilité</em><a class="hl" href="#c-diff">candidat $L$, quotient $\to0$ ?</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une différentielle</em><span class="hq">Quel $f$ ?</span><ul>
<li><div class="hr"><em>formule en $x, y$</em><a class="hl ok" href="#c-diff">$\mathcal C^1$ : $df = \sum\partial_if\,dx_i$</a></div></li>
<li><div class="hr"><em>matrices, normes</em><a class="hl" href="#c-exdiff">développer $f(a + h)$</a></div></li>
<li><div class="hr"><em>une composée</em><a class="hl" href="#c-chain">règle de la chaîne</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une EDP</em><span class="hq">Changement donné ?</span><ul>
<li><div class="hr"><em>linéaire $u, v$</em><a class="hl" href="#c-edp">chaîne, puis $\partial_ug = 0$…</a></div></li>
<li><div class="hr"><em>polaires</em><a class="hl" href="#c-edp">$\partial_\theta g$, $r\,\partial_rg$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>des extrema</em><span class="hq">Sur quoi ?</span><ul>
<li><div class="hr"><em>un ouvert, local</em><a class="hl ok" href="#c-ext">$\nabla f = 0$, puis $rt - s^2$</a></div></li>
<li><div class="hr"><em>un ouvert, global</em><a class="hl" href="#c-glob">$f(a + h) - f(a)$ exact</a></div></li>
<li><div class="hr"><em>un compact</em><a class="hl" href="#c-glob">intérieur + bord</a></div></li>
<li><div class="hr"><em>une contrainte</em><a class="hl" href="#c-contr">$\nabla f = \lambda\nabla g$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>un plan tangent</em><a class="hl end" href="#c-tang">$\nabla g$ normal</a></div></li>
</ul></div></div>
`,
"Séries et familles sommables": R`
<nav class="msum"><a href="#f-not">Notations</a><a href="#f-serie">Séries dans un evn</a><a href="#f-exp">Exponentielle de matrice</a><a href="#f-neu">Série géométrique de matrices</a><a href="#f-pos">Familles positives</a><a href="#f-paq">Sommation par paquets</a><a href="#f-som">Familles sommables</a><a href="#f-double">Séries doubles, Fubini</a><a href="#f-cauchy">Produit de Cauchy</a><a href="#f-enonce">L'énoncé</a><a href="#f-erreurs">Erreurs</a><a href="#f-entrainement">S'entraîner</a><a href="#f-exos">Exercices</a><a href="#f-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les termes $\cB{u_n}$, $\cB{a_i}$. <span class="kR">rouge</span> : les paquets $\cR{I_n}$ de la partition. <span class="kO">orange</span> : les majorations et la valeur absolue $\cO{|a_i|}$. <span class="kV">violet</span> : les matrices ($\cV A$, $\cV P$, $\cV D$). <span class="kG">vert</span> : la conclusion.</p>

<h2 id="f-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Série dans un evn $E$</td><td>$\sum u_n$, $u_n\in E$</td><td>$E$ de dimension finie : on peut raisonner coordonnée par coordonnée.</td></tr>
<tr><td>Absolument convergente</td><td>$\sum\|u_n\|$ converge</td><td>En dimension finie : ACV $\Rightarrow$ CV.</td></tr>
<tr><td>Exponentielle</td><td>$\exp(A) = e^A = \sum\frac{A^k}{k!}$</td><td>Converge pour toute $A\in\mathcal M_n(\mathbb K)$.</td></tr>
<tr><td>Famille positive</td><td>$\sum_{i\in I}a_i\in[0, +\infty]$</td><td>$\sup$ des sommes finies.</td></tr>
<tr><td>Famille sommable</td><td>$(a_i)_{i\in I}\in\ell^1(I)$</td><td>$\sum_{i\in I}|a_i| \lt +\infty$.</td></tr>
<tr><td>Produit de Cauchy</td><td>$c_n = \sum_{k=0}^na_kb_{n-k}$</td><td>$\sum c_n = \big(\sum a_n\big)\big(\sum b_n\big)$ si ACV.</td></tr>
</table>

<h2 id="f-serie">2. Séries dans un espace normé de dimension finie</h2>
<div class="sbox">$$\sum\cB{u_n}\ \text{converge}\iff\text{chaque série coordonnée converge (dans une base)}.\qquad\sum\|\cB{u_n}\|\ \text{converge}\Rightarrow\sum\cB{u_n}\ \text{converge},\ \Big\|\sum\cB{u_n}\Big\|\leq\sum\|\cB{u_n}\|.$$</div>
<p>Le terme général d'une série convergente tend vers $0$. Toutes les normes étant équivalentes, l'absolue convergence ne dépend pas de la norme choisie.</p>

<h2 id="f-exp">3. L'exponentielle de matrice</h2>
<div class="sbox">$$e^{\cV A} = \sum_{k=0}^{+\infty}\frac{\cV A^k}{k!}.\qquad\cV A\cV B = \cV B\cV A\Rightarrow e^{A + B} = e^Ae^B.\qquad e^A\ \text{inversible},\ (e^A)^{-1} = e^{-A}.$$
$$e^{\cV P\cV D\cV P^{-1}} = \cV Pe^{\cV D}\cV P^{-1},\qquad e^{\operatorname{diag}(\lambda_i)} = \operatorname{diag}(e^{\lambda_i}),\qquad\det(e^A) = e^{\operatorname{tr}A}.$$</div>
<p class="ml">Les méthodes de calcul</p>
<p><b>1. Nilpotente</b> : la somme est finie. <b>2. Diagonalisable</b> : $A = PDP^{-1}$, donc $e^A = Pe^DP^{-1}$. <b>3. $A = \lambda I + N$</b> avec $N$ nilpotente : $\lambda I$ commute avec $N$, donc $e^A = e^\lambda e^N$. <b>4. Polynôme annulateur</b> ($A^2 = -I$, $A^2 = A$…) : on calcule les puissances et on reconnaît des séries connues.</p>
<p class="ml piege">Piège</p>
<p>$e^{A + B} = e^Ae^B$ est <b>faux</b> en général si $AB\neq BA$.</p>

<p class="ml">Exemple 1 : une matrice nilpotente</p>
<p>$N = \begin{pmatrix}0&1&2\\0&0&3\\0&0&0\end{pmatrix}$. Calculer $e^N$.</p>
<p><b>Étape 1 : Rappel.</b> $e^N = \sum\frac{N^k}{k!}$, et la somme s'arrête si $N^p = 0$.</p>
<p><b>Étape 2 : Les puissances.</b> Le seul coefficient non nul de $N^2$ est en position $(1, 3)$ : ligne $1$ de $N$ fois colonne $3$ de $N$, $0\times2 + 1\times3 + 2\times0 = 3$. Donc $N^2 = \begin{pmatrix}0&0&3\\0&0&0\\0&0&0\end{pmatrix}$, puis $N^3 = N^2N = 0$ (la ligne $1$ de $N^2$ fois une colonne de $N$ : $3\times0 = 0$).</p>
<p><b>Étape 3 : La somme finie.</b> $N^3 = N^2\cdot N = 0$ (la seule ligne non nulle de $N^2$, la 1<sup>re</sup>, tombe sur la 3<sup>e</sup> colonne de $N$, qui est nulle sauf en ligne 1 et 2… mais elle multiplie la 3<sup>e</sup> ligne de $N$, nulle). Donc tous les termes $k\geq3$ sont nuls : $e^N = \frac{N^0}{0!} + \frac{N^1}{1!} + \frac{N^2}{2!} = I + N + \frac12N^2$.</p>
<p><b>Étape 4 : On additionne case par case.</b> Diagonale : $1 + 0 + 0 = 1$. Case $(1, 2)$ : $0 + 1 + 0 = 1$. Case $(2, 3)$ : $0 + 3 + 0 = 3$. Case $(1, 3)$ : $0 + 2 + \frac12\times3 = 2 + \frac32 = \frac72$. Sous la diagonale : $0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{e^N = \begin{pmatrix}1&1&\frac72\\0&1&3\\0&0&1\end{pmatrix}}$.</p>

<p class="ml">Exemple 2 : une matrice diagonalisable</p>
<p>$A = \begin{pmatrix}2&1\\1&2\end{pmatrix}$.</p>
<p><b>Étape 1 : Rappel.</b> $A = PDP^{-1}\Rightarrow e^A = Pe^DP^{-1}$.</p>
<p><b>Étape 2 : On diagonalise.</b> $\chi_A(X) = (X - 2)^2 - 1\times1 = X^2 - 4X + 3 = (X - 1)(X - 3)$ : valeurs propres $3$ et $1$. Pour $3$ : $A - 3I = \begin{pmatrix}-1&1\\1&-1\end{pmatrix}$, $-x + y = 0$, vecteur $(1, 1)$. Pour $1$ : $A - I = \begin{pmatrix}1&1\\1&1\end{pmatrix}$, $x + y = 0$, vecteur $(1, -1)$. Donc $\cV P = \begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $\det P = 1\times(-1) - 1\times1 = -2$, $\cV P^{-1} = \frac1{-2}\begin{pmatrix}-1&-1\\-1&1\end{pmatrix} = \frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, $\cV D = \operatorname{diag}(3, 1)$ et $e^D = \operatorname{diag}(e^3, e^1)$.</p>
<p><b>Étape 3 : On calcule.</b></p>
$$\cV P\begin{pmatrix}e^3&0\\0&e\end{pmatrix} = \begin{pmatrix}1\times e^3 + 1\times0&1\times0 + 1\times e\\1\times e^3 + (-1)\times0&1\times0 + (-1)\times e\end{pmatrix} = \begin{pmatrix}e^3&e\\e^3&-e\end{pmatrix},$$
$$e^A = \frac12\begin{pmatrix}e^3\times1 + e\times1&e^3\times1 + e\times(-1)\\e^3\times1 + (-e)\times1&e^3\times1 + (-e)\times(-1)\end{pmatrix} = \frac12\begin{pmatrix}e^3 + e&e^3 - e\\e^3 - e&e^3 + e\end{pmatrix}.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{e^A = \frac12\begin{pmatrix}e^3 + e&e^3 - e\\e^3 - e&e^3 + e\end{pmatrix}}$. Contrôle : $\det e^A = e^4 = e^{\operatorname{tr}A}$.</p>

<p class="ml">Exemple 3 : $\lambda I + N$</p>
<p>$A = \begin{pmatrix}2&1\\0&2\end{pmatrix}$.</p>
<p><b>Étape 1 : Rappel.</b> Si $AB = BA$, $e^{A + B} = e^Ae^B$.</p>
<p><b>Étape 2 : On découpe.</b> $A = \begin{pmatrix}2&0\\0&2\end{pmatrix} + \begin{pmatrix}0&1\\0&0\end{pmatrix} = 2I + N$. $N^2 = \begin{pmatrix}0\times0 + 1\times0&0\times1 + 1\times0\\0&0\end{pmatrix} = 0$, et $2I$ commute avec tout : $(2I)N = 2N = N(2I)$.</p>
<p><b>Étape 3 : On calcule.</b> $(2I)^k = 2^kI$, donc $e^{2I} = \sum\frac{2^k}{k!}I = e^2I$. Comme $N^2 = 0$, $e^N = I + N = \begin{pmatrix}1&1\\0&1\end{pmatrix}$. Donc $e^A = e^{2I}e^N = e^2\begin{pmatrix}1&1\\0&1\end{pmatrix}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{e^A = e^2\begin{pmatrix}1&1\\0&1\end{pmatrix}}$.</p>

<p class="ml">Exemple 4 : une rotation</p>
<p>$J = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$. Calculer $e^{\theta J}$.</p>
<p><b>Étape 1 : Rappel.</b> On utilise un polynôme annulateur pour calculer les puissances, puis on reconnaît $\cos$ et $\sin$.</p>
<p><b>Étape 2 : Les puissances.</b> $J^2 = \begin{pmatrix}0\times0 + (-1)\times1&0\times(-1) + (-1)\times0\\1\times0 + 0\times1&1\times(-1) + 0\times0\end{pmatrix} = \begin{pmatrix}-1&0\\0&-1\end{pmatrix} = -I$. Donc $J^{2k} = (J^2)^k = (-I)^k = (-1)^kI$ et $J^{2k+1} = J^{2k}J = (-1)^kJ$.</p>
<p><b>Étape 3 : On sépare pairs et impairs.</b></p>
$$e^{\theta J} = \sum_k\frac{(-1)^k\theta^{2k}}{(2k)!}I + \sum_k\frac{(-1)^k\theta^{2k+1}}{(2k + 1)!}J = \cos\theta\,I + \sin\theta\,J.$$
<p><b>Étape 4 : Conclusion.</b> $\cos\theta\,I + \sin\theta\,J = \begin{pmatrix}\cos\theta&0\\0&\cos\theta\end{pmatrix} + \begin{pmatrix}0&-\sin\theta\\\sin\theta&0\end{pmatrix}$, donc $\cG{e^{\theta J} = \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}}$ : la rotation $R_\theta$.</p>

<p class="ml">Exemple 5 : $\det(e^A) = e^{\operatorname{tr}A}$</p>
<p><b>Étape 1 : Rappel.</b> Toute $A\in\mathcal M_n(\mathbb C)$ est trigonalisable : $A = PTP^{-1}$.</p>
<p><b>Étape 2 : On transporte.</b> $(PTP^{-1})^k = PT^kP^{-1}$ (les $P^{-1}P$ du milieu se simplifient), donc $e^A = Pe^TP^{-1}$ et $\det e^A = \det P\,\det e^T\,\frac1{\det P} = \det e^T$.</p>
<p><b>Étape 3 : $e^T$ est triangulaire.</b> $T^k$ est triangulaire de diagonale $(\lambda_i^k)$, donc $e^T$ est triangulaire de diagonale $(e^{\lambda_i})$.</p>
<p><b>Étape 4 : Conclusion.</b> Le déterminant d'une triangulaire est le produit de sa diagonale : $\det e^A = e^{\lambda_1}\cdots e^{\lambda_n} = e^{\lambda_1 + \dots + \lambda_n} = \cG{e^{\operatorname{tr}A}}$ (la trace est la somme des valeurs propres). En particulier $\det e^A\neq0$ : $e^A$ est toujours inversible.</p>

<h2 id="f-neu">4. Série géométrique de matrices</h2>
<div class="sbox">$$\|\cdot\|\ \text{sous-multiplicative},\ \|A\| \lt 1\ \Longrightarrow\ I - A\ \text{inversible et}\ (I - A)^{-1} = \sum_{k=0}^{+\infty}A^k.$$</div>
<p class="ml">Exemple 6 : la démonstration</p>
<p><b>Étape 1 : Rappel.</b> ACV $\Rightarrow$ CV en dimension finie ; $\|A^k\|\leq\|A\|^k$.</p>
<p><b>Étape 2 : Convergence.</b> $\sum\|A^k\|\leq\sum\|A\|^k \lt +\infty$ (géométrique de raison $ \lt 1$) : $S = \sum A^k$ existe.</p>
<p><b>Étape 3 : Télescopage.</b> $(I - A)(I + A + \dots + A^N) = (I + A + \dots + A^N) - (A + A^2 + \dots + A^{N+1}) = I - A^{N+1}$ : tout se simplifie sauf le premier et le dernier.</p>
<p><b>Étape 4 : La limite.</b> $\|A^{N+1}\|\leq\|A\|^{N+1}\to0$, et le produit matriciel est continu : $(I - A)S = I$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{(I - A)^{-1} = \sum_{k\geq0}A^k}$. Conséquence : $GL_n$ contient la boule $B(I, 1)$, il est ouvert.</p>

<h2 id="f-pos">5. Familles de réels positifs</h2>
<div class="sbox">$$\sum_{i\in I}a_i = \sup\Big\{\sum_{i\in J}a_i,\ J\subset I\ \text{fini}\Big\}\in[0, +\infty].\qquad I = \mathbb N:\ \text{c'est la somme de la série}.$$</div>
<p>Pour une famille <b>positive</b>, tout est permis : on peut réordonner, regrouper, intervertir les sommes, et le résultat (fini ou $+\infty$) ne change pas.</p>

<h2 id="f-paq">6. Sommation par paquets</h2>
<div class="sbox">$$I = \bigsqcup_{n}\cR{I_n}\ \text{(partition)},\ a_i\geq0:\quad\sum_{i\in I}a_i = \sum_n\Big(\sum_{i\in\cR{I_n}}a_i\Big).$$</div>
<p class="ml">La méthode</p>
<p>Pour une famille indexée par $\mathbb N^2$, on groupe par <b>diagonales</b> $\cR{I_n = \{(p, q),\ p + q = n\}}$ (quand le terme dépend de $p + q$), ou par lignes $\{p\}\times\mathbb N$ (Fubini). On regarde d'abord les $|a_i|$.</p>

<p class="ml">Exemple 7 : $\sum_{p, q\geq1}\frac1{(p + q)^\alpha}$</p>
<p><b>Étape 1 : Rappel.</b> Famille positive : sommation par paquets, valeur dans $[0, +\infty]$.</p>
<p><b>Étape 2 : Les paquets.</b> $\cR{I_n = \{(p, q)\in(\mathbb N^*)^2,\ p + q = n\}}$ pour $n\geq2$ : il y a $n - 1$ couples ($p = 1, \dots, n - 1$).</p>
<p><b>Étape 3 : La somme d'un paquet.</b> Dans $I_n$, chaque terme vaut $\frac1{n^\alpha}$ (car $p + q = n$), et il y en a $n - 1$ : $\sum_{(p, q)\in I_n}\frac1{(p + q)^\alpha} = (n - 1)\times\frac1{n^\alpha} = \frac{n - 1}{n^\alpha}$.</p>
<p><b>Étape 4 : La série des paquets.</b> $n - 1\sim n$, donc $\frac{n - 1}{n^\alpha}\sim\frac n{n^\alpha} = \frac1{n^{\alpha - 1}}$ : série de Riemann, converge $\iff\alpha - 1 > 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\text{sommable}\iff\alpha > 2}$.</p>

<h2 id="f-som">7. Familles sommables de nombres complexes</h2>
<div class="sbox">$$(a_i)\ \text{sommable}\iff\sum_{i\in I}\cO{|a_i|} \lt +\infty.\qquad\text{Alors}:\ \text{linéarité},\ \Big|\sum a_i\Big|\leq\sum|a_i|,\ \text{sommation par paquets},\ \text{tout ordre donne la même somme}.$$
$$I = \mathbb N:\quad(a_n)\ \text{sommable}\iff\sum a_n\ \text{absolument convergente}.$$</div>
<p class="ml piege">Piège</p>
<p>Pour une famille <b>non positive</b>, on vérifie d'abord la sommabilité avec $|a_i|$. Sans elle, regrouper ou intervertir peut changer le résultat (exemple 9).</p>

<h2 id="f-double">8. Séries doubles, Fubini</h2>
<div class="sbox">$$(a_{p,q})\ \text{positive ou sommable}:\quad\sum_{(p, q)\in\mathbb N^2}a_{p,q} = \sum_{p=0}^{+\infty}\sum_{q=0}^{+\infty}a_{p,q} = \sum_{q=0}^{+\infty}\sum_{p=0}^{+\infty}a_{p,q}.$$
$$\text{Sommable}\iff\sum_p\Big(\sum_q|a_{p,q}|\Big) \lt +\infty.\qquad\text{Produit}:\ \sum_{p,q}x_py_q = \Big(\sum x_p\Big)\Big(\sum y_q\Big).$$</div>

<p class="ml">Exemple 8 : $\sum_{n\geq2}(\zeta(n) - 1) = 1$</p>
<p><b>Étape 1 : Rappel.</b> Famille positive : on peut intervertir les sommes.</p>
<p><b>Étape 2 : On écrit la double somme.</b> $\zeta(n) - 1 = \sum_{k\geq2}\frac1{k^n}$, donc la somme cherchée est $\sum_{n\geq2}\sum_{k\geq2}\frac1{k^n}$, termes positifs.</p>
<p><b>Étape 3 : On intervertit</b> (Fubini positif). Pour $k\geq2$ fixé, $\sum_{n\geq2}\frac1{k^n}$ est géométrique de raison $\frac1k \lt 1$, de premier terme $\frac1{k^2}$ :</p>
$$\sum_{n\geq2}\Big(\frac1k\Big)^n = \frac{\text{premier terme}}{1 - \text{raison}} = \frac{1/k^2}{1 - 1/k} = \frac1{k^2}\times\frac k{k - 1} = \frac1{k(k - 1)} = \frac{k - (k - 1)}{k(k - 1)} = \frac1{k - 1} - \frac1k.$$
<p><b>Étape 4 : On télescope.</b> $\sum_{k=2}^K\big(\frac1{k - 1} - \frac1k\big) = \big(1 - \frac12\big) + \big(\frac12 - \frac13\big) + \dots + \big(\frac1{K - 1} - \frac1K\big) = 1 - \frac1K\to1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\sum_{n\geq2}(\zeta(n) - 1) = 1}$.</p>

<p class="ml">Exemple 9 : intervertir sans sommabilité</p>
<p>$a_{p,q} = 1$ si $q = p$, $-1$ si $q = p + 1$, $0$ sinon ($p, q\in\mathbb N$).</p>
<p><b>Étape 1 : Rappel.</b> Fubini exige la positivité ou la sommabilité.</p>
<p><b>Étape 2 : Lignes d'abord.</b> Ligne $p$ fixée : seuls $a_{p,p} = 1$ et $a_{p,p+1} = -1$ sont non nuls, somme $1 + (-1) = 0$. Donc $\sum_p\sum_qa_{p,q} = \sum_p0 = 0$.</p>
<p><b>Étape 3 : Colonnes d'abord.</b> Colonne $q$ fixée : $a_{p,q}\neq0$ seulement si $p = q$ (valeur $1$) ou $p = q - 1$ (valeur $-1$). Pour $q = 0$, seul $a_{0,0} = 1$ existe ($p = -1$ est exclu). Pour $q\geq1$ : $1 + (-1) = 0$. Donc $\sum_q\sum_pa_{p,q} = 1 + 0 + 0 + \dots = 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{0\neq1}$ : la famille n'est pas sommable ($\sum|a_{p,q}| = +\infty$), et l'interversion est interdite.</p>

<h2 id="f-cauchy">9. Produit de Cauchy</h2>
<div class="sbox">$$\sum a_n,\ \sum b_n\ \text{absolument convergentes},\ c_n = \sum_{k=0}^na_kb_{n-k}:\quad\sum c_n\ \text{ACV et}\ \sum_{n\geq0}c_n = \Big(\sum_{n\geq0}a_n\Big)\Big(\sum_{n\geq0}b_n\Big).$$</div>
<p class="ml">Exemple 10 : $\frac1{(1 - x)^2} = \sum(n + 1)x^n$</p>
<p>Pour $|x| \lt 1$.</p>
<p><b>Étape 1 : Rappel.</b> Produit de Cauchy de deux séries ACV.</p>
<p><b>Étape 2 : Les séries.</b> $\sum x^n$ est ACV ($|x| \lt 1$), de somme $\frac1{1 - x}$.</p>
<p><b>Étape 3 : Le terme du produit.</b> $c_n = \sum_{k=0}^na_kb_{n-k}$ avec $a_k = x^k$, $b_{n-k} = x^{n-k}$ : $x^kx^{n-k} = x^{k + n - k} = x^n$ ne dépend pas de $k$, et $k$ prend $n + 1$ valeurs ($0, \dots, n$) : $c_n = (n + 1)x^n$. Et $\sum c_n = \frac1{1 - x}\times\frac1{1 - x}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\sum_{n\geq0}(n + 1)x^n = \frac1{(1 - x)^2}}$.</p>

<p class="ml">Exemple 11 : $e^ae^b = e^{a + b}$</p>
<p><b>Étape 1 : Rappel.</b> Produit de Cauchy, et la formule du binôme.</p>
<p><b>Étape 2 : Les séries.</b> $\sum\frac{a^n}{n!}$ et $\sum\frac{b^n}{n!}$ sont ACV pour tous $a, b\in\mathbb C$.</p>
<p><b>Étape 3 : Le terme du produit.</b></p>
$$c_n = \sum_{k=0}^n\frac{a^k}{k!}\frac{b^{n-k}}{(n - k)!} = \frac1{n!}\sum_{k=0}^n\frac{n!}{k!(n - k)!}a^kb^{n-k} = \frac1{n!}\sum_{k=0}^n\binom nka^kb^{n-k} = \frac{(a + b)^n}{n!}\ \text{(binôme)}.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{e^ae^b = e^{a + b}}$. Pour des matrices, le binôme exige $AB = BA$ : d'où l'hypothèse du §3.</p>

<h2 id="f-enonce">10. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Calculer $e^A$ »</b><span>Nilpotente, diagonalisable, $\lambda I + N$, ou polynôme annulateur.</span></div>
<div><b>« $e^{A + B}$ »</b><span>Vérifier $AB = BA$ avant tout.</span></div>
<div><b>« $\det e^A$ »</b><span>$e^{\operatorname{tr}A}$.</span></div>
<div><b>$\|A\| \lt 1$</b><span>$(I - A)^{-1} = \sum A^k$.</span></div>
<div><b>Une somme sur $\mathbb N^2$</b><span>Positive ? Fubini direct. Sinon : sommabilité avec $|a_{p,q}|$ d'abord.</span></div>
<div><b>Un terme en $p + q$</b><span>Paquets par diagonales $p + q = n$.</span></div>
<div><b>$\sum_n\sum_k$ à calculer</b><span>Intervertir (positivité), souvent une géométrique apparaît.</span></div>
<div><b>Produit de deux séries</b><span>Produit de Cauchy, sous ACV.</span></div>
<div><b>$\sum f(n)$ réordonnée</b><span>Sommable : la somme ne dépend pas de l'ordre.</span></div>
</div>

<h2 id="f-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Écrire $e^{A + B} = e^Ae^B$ sans commutation.</p>
<p><b>2.</b> $e^A$ calculé coefficient par coefficient ($e^{a_{ij}}$) : faux sauf pour une diagonale.</p>
<p><b>3.</b> Intervertir deux sommes sans positivité ni sommabilité.</p>
<p><b>4.</b> Oublier de compter le nombre d'éléments d'un paquet.</p>
<p><b>5.</b> Produit de Cauchy de séries seulement semi-convergentes.</p>
<p><b>6.</b> Oublier $k = 0$ (le terme $I$) dans $e^A$ ou $\sum A^k$.</p>
</div>

<h2 id="f-entrainement">S'entraîner</h2>
<div data-mlab="expmat"></div>
<div data-mlab="quizfs"></div>

<h2 id="f-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : exponentielle d'un projecteur</p>
<p>$P^2 = P$. Calculer $e^{tP}$.</p>
<p><b>Étape 1 : Rappel.</b> $e^{tP} = \sum\frac{t^kP^k}{k!}$ ; polynôme annulateur pour les puissances.</p>
<p><b>Étape 2 : Les puissances.</b> $P^0 = I$, $P^1 = P$, $P^2 = P$, puis $P^3 = P^2P = PP = P$, et par récurrence $P^k = P$ pour $k\geq1$.</p>
<p><b>Étape 3 : La somme.</b> On isole $k = 0$ : $e^{tP} = \frac{t^0}{0!}I + \sum_{k\geq1}\frac{t^k}{k!}P = I + \Big(\sum_{k\geq1}\frac{t^k}{k!}\Big)P$, et $\sum_{k\geq1}\frac{t^k}{k!} = \sum_{k\geq0}\frac{t^k}{k!} - 1 = e^t - 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{e^{tP} = I + (e^t - 1)P}$.</p>

<p class="ml">Exercice 2 : $\sum_{p, q\geq1}\frac1{p^2 + q^2}$ diverge</p>
<p><b>Étape 1 : Rappel.</b> Famille positive : comparaison terme à terme, puis exemple 7.</p>
<p><b>Étape 2 : La minoration.</b> $(p + q)^2 = p^2 + 2pq + q^2\geq p^2 + q^2$ car $2pq\geq0$. On inverse (tout est positif) : $\frac1{p^2 + q^2}\geq\frac1{(p + q)^2}$.</p>
<p><b>Étape 3 : La référence.</b> Exemple 7 avec $\alpha = 2\leq2$ : $\sum\frac1{(p + q)^2} = +\infty$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\sum_{p, q\geq1}\frac1{p^2 + q^2} = +\infty}$.</p>

<p class="ml">Exercice 3 : $\sum_{n\geq1}nx^n$</p>
<p><b>Étape 1 : Rappel.</b> Exemple 10 : $\sum_{n\geq0}(n + 1)x^n = \frac1{(1 - x)^2}$ pour $|x| \lt 1$.</p>
<p><b>Étape 2 : On décale.</b> $\sum_{n\geq1}nx^n = x\sum_{n\geq1}nx^{n-1} = x\sum_{m\geq0}(m + 1)x^m$.</p>
<p><b>Étape 3 : Conclusion.</b> $\sum_{m\geq0}(m + 1)x^m = \frac1{(1 - x)^2}$, donc $\cG{\sum_{n\geq1}nx^n = \frac x{(1 - x)^2}}$. Exemple $x = \frac12$ : $1 - \frac12 = \frac12$, $(\frac12)^2 = \frac14$, $\sum\frac n{2^n} = \frac{1/2}{1/4} = \frac12\times4 = 2$.</p>

<h2 id="f-arbre">L'arbre des séries et familles sommables</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une somme infinie</span><ul>
<li><div class="hr"><em>de matrices</em><span class="hq">Laquelle ?</span><ul>
<li><div class="hr"><em>$e^A$, nilpotente</em><a class="hl ok" href="#f-exp">somme finie</a></div></li>
<li><div class="hr"><em>$e^A$, diagonalisable</em><a class="hl ok" href="#f-exp">$Pe^DP^{-1}$</a></div></li>
<li><div class="hr"><em>$e^A$, $\lambda I + N$</em><a class="hl" href="#f-exp">$e^\lambda e^N$ (commutent)</a></div></li>
<li><div class="hr"><em>$\sum A^k$</em><a class="hl" href="#f-neu">$(I - A)^{-1}$ si $\|A\| \lt 1$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>indexée par $\mathbb N^2$, $I$</em><span class="hq">Termes positifs ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#f-paq">paquets, Fubini : tout est permis</a></div></li>
<li><div class="hr"><em>non</em><span class="hq">$\sum|a_i| \lt \infty$ ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#f-som">sommable : paquets, Fubini</a></div></li>
<li><div class="hr"><em>non</em><a class="hl end" href="#f-double">interdit d'intervertir</a></div></li>
</ul></div></li>
</ul></div></li>
<li><div class="hr"><em>produit de deux séries</em><a class="hl" href="#f-cauchy">produit de Cauchy (ACV)</a></div></li>
<li><div class="hr"><em>de vecteurs</em><a class="hl" href="#f-serie">coordonnées, ou ACV</a></div></li>
</ul></div></div>
`,
"Fonctions vectorielles et arcs paramétrés": R`
<nav class="msum"><a href="#v-not">Notations</a><a href="#v-der">Dérivation</a><a href="#v-op">Opérations</a><a href="#v-int">Intégration</a><a href="#v-af">Accroissements finis</a><a href="#v-tay">Taylor</a><a href="#v-arc">Arcs paramétrés</a><a href="#v-sing">Points singuliers</a><a href="#v-etude">Étude d'un arc</a><a href="#v-enonce">L'énoncé</a><a href="#v-erreurs">Erreurs</a><a href="#v-entrainement">S'entraîner</a><a href="#v-exos">Exercices</a><a href="#v-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la fonction $\cB f$ et ses coordonnées. <span class="kR">rouge</span> : le point étudié $\cR{t_0}$. <span class="kO">orange</span> : les majorations ($\cO M$, restes). <span class="kV">violet</span> : l'application (bi)linéaire $\cV L$, $\cV B$. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="v-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Fonction vectorielle</td><td>$f:I\to E$, $E$ de dimension finie</td><td>$f = \sum f_ie_i$ dans une base : tout se fait coordonnée par coordonnée.</td></tr>
<tr><td>Dérivée</td><td>$f'(t) = \lim\frac{f(t + h) - f(t)}h$</td><td>$f$ dérivable $\iff$ chaque $f_i$ l'est, $f' = \sum f_i'e_i$.</td></tr>
<tr><td>Classes</td><td>$\mathcal C^k(I, E)$</td><td>Stable par combinaisons linéaires, produits bilinéaires, composées.</td></tr>
<tr><td>Arc paramétré</td><td>$\gamma:I\to\mathbb R^2$, $t\mapsto(x(t), y(t))$</td><td>Point régulier : $\gamma'(t)\neq0$.</td></tr>
</table>

<h2 id="v-der">2. Dérivation</h2>
<div class="sbox">$$f(t_0 + h) = f(t_0) + hf'(t_0) + o(h).\qquad f\ \text{dérivable}\iff\text{chaque coordonnée l'est}.\qquad f' = 0\ \text{sur un intervalle}\iff f\ \text{constante}.$$</div>

<h2 id="v-op">3. Les opérations</h2>
<div class="sbox">$$(\cV L\circ f)' = \cV L\circ f'\ (\cV L\ \text{linéaire}),\qquad\cV B(f, g)' = \cV B(f', g) + \cV B(f, g')\ (\cV B\ \text{bilinéaire}).$$
$$\langle f, g\rangle' = \langle f', g\rangle + \langle f, g'\rangle,\qquad(\|f\|^2)' = 2\langle f, f'\rangle,\qquad(fg)' = f'g + fg'\ \text{(matrices, sans commuter)}.$$
$$\det(c_1, \dots, c_n)' = \sum_{i=1}^n\det(c_1, \dots, c_i', \dots, c_n),\qquad(f\circ\varphi)' = \varphi'\cdot(f'\circ\varphi).$$</div>

<p class="ml">Exemple 1 : norme constante</p>
<p>$f:I\to E$ dérivable, $E$ euclidien, $\|f\|$ constante. Montrer $f(t)\perp f'(t)$.</p>
<p><b>Étape 1 : Rappel.</b> $(\|f\|^2)' = 2\langle f, f'\rangle$.</p>
<p><b>Étape 2 : On dérive la constante.</b> $\|f\|^2$ est constante, donc sa dérivée est nulle.</p>
<p><b>Étape 3 : On remplace.</b> $(\|f\|^2)' = \langle f, f\rangle' = \langle f', f\rangle + \langle f, f'\rangle = 2\langle f(t), f'(t)\rangle$ (symétrie), et cette dérivée vaut $0$ : $2\langle f(t), f'(t)\rangle = 0$, donc $\langle f(t), f'(t)\rangle = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{f(t)\perp f'(t)}$ : sur un cercle, la vitesse est tangente (orthogonale au rayon).</p>

<p class="ml">Exemple 2 : dériver $t\mapsto A(t)^{-1}$</p>
<p>$A:I\to GL_n(\mathbb R)$ dérivable.</p>
<p><b>Étape 1 : Rappel.</b> $(fg)' = f'g + fg'$ pour le produit matriciel (bilinéaire), sans commuter.</p>
<p><b>Étape 2 : On dérive $A(t)A(t)^{-1} = I$.</b> $t\mapsto A(t)^{-1}$ est dérivable (coefficients = cofacteurs divisés par $\det$, fractions rationnelles des coefficients).</p>
$$A'A^{-1} + A\big(A^{-1}\big)' = 0.$$
<p><b>Étape 3 : On isole</b> en multipliant à gauche par $A^{-1}$ : $A^{-1}A'A^{-1} + A^{-1}A\big(A^{-1}\big)' = 0$, et $A^{-1}A = I$, donc $A^{-1}A'A^{-1} + \big(A^{-1}\big)' = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\big(A^{-1}\big)' = -A^{-1}A'A^{-1}}$ (et pas $-\frac{A'}{A^2}$).</p>

<p class="ml">Exemple 3 : dériver un déterminant</p>
<p>$\varphi(t) = \det(I_n + tH)$. Calculer $\varphi'(0)$.</p>
<p><b>Étape 1 : Rappel.</b> $\det(c_1, \dots, c_n)' = \sum_i\det(c_1, \dots, c_i', \dots, c_n)$.</p>
<p><b>Étape 2 : Les colonnes.</b> $c_i(t) = e_i + th_i$ ($h_i$ = colonne $i$ de $H$), donc $c_i' = h_i$ et $c_j(0) = e_j$.</p>
<p><b>Étape 3 : En $t = 0$.</b> La dérivée d'un déterminant est la somme des déterminants où l'on dérive une colonne : $\varphi'(0) = \sum_i\det(e_1, \dots, h_i, \dots, e_n)$. On développe selon les autres colonnes $e_j$ : il ne reste que la $i$-ième coordonnée de $h_i$, soit $h_{ii}$ (exemple $n = 2$, $i = 1$ : $\det\begin{pmatrix}h_{11}&0\\h_{21}&1\end{pmatrix} = h_{11}\times1 - 0\times h_{21} = h_{11}$).</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\varphi'(0) = \sum_ih_{ii} = \operatorname{tr}H}$.</p>

<h2 id="v-int">4. Intégration, sommes de Riemann</h2>
<div class="sbox">$$\int_a^bf = \sum_i\Big(\int_a^bf_i\Big)e_i,\qquad\cV L\Big(\int f\Big) = \int\cV L(f),\qquad\Big\|\int_a^bf\Big\|\leq\int_a^b\|f\|\ (a\leq b).$$
$$\frac{b - a}n\sum_{k=1}^nf\Big(a + k\frac{b - a}n\Big)\xrightarrow[n\to\infty]{}\int_a^bf.\qquad f\ \text{continue}:\ \Big(\int_a^xf\Big)' = f(x).$$</div>
<p class="ml">Exemple 4 : une somme de Riemann complexe</p>
<p>Limite de $S_n = \frac1n\sum_{k=1}^ne^{ik/n}$.</p>
<p><b>Étape 1 : Rappel.</b> $\frac1n\sum_{k=1}^nf\big(\frac kn\big)\to\int_0^1f$ pour $f$ continue sur $[0, 1]$, même à valeurs complexes.</p>
<p><b>Étape 2 : La fonction.</b> $f(t) = e^{it}$, continue sur $[0, 1]$.</p>
<p><b>Étape 3 : L'intégrale.</b> Une primitive de $e^{it}$ est $\frac{e^{it}}i$ : $\int_0^1e^{it}\,dt = \frac{e^{i} - e^{0}}i = \frac{e^i - 1}i$. Comme $\frac1i = -i$ et $e^i = \cos1 + i\sin1$ : $-i(\cos1 - 1 + i\sin1) = -i\cos1 + i - i^2\sin1 = \sin1 + i(1 - \cos1)$ (car $i^2 = -1$).</p>
<p><b>Étape 4 : Conclusion.</b> Somme de Riemann avec $a = 0$, $b = 1$ : $\cG{S_n\to\sin1 + i(1 - \cos1)}$.</p>

<h2 id="v-af">5. L'inégalité des accroissements finis</h2>
<div class="sbox">$$f\ \mathcal C^1\ \text{sur}\ [a, b],\ \|f'\|\leq\cO M\ \Longrightarrow\ \|f(b) - f(a)\|\leq\cO M\,|b - a|.$$</div>
<p class="ml piege">Piège</p>
<p>L'<b>égalité</b> des accroissements finis et le théorème de Rolle sont <b>faux</b> pour une fonction vectorielle (exemple 5). Seule l'inégalité reste.</p>

<p class="ml">Exemple 5 : Rolle tombe en défaut</p>
<p><b>Étape 1 : Rappel.</b> Rolle (réel) : $f(a) = f(b)\Rightarrow\exists c,\ f'(c) = 0$.</p>
<p><b>Étape 2 : La fonction.</b> $f(t) = e^{it}$ sur $[0, 2\pi]$ (à valeurs dans $\mathbb C\simeq\mathbb R^2$) : $f(0) = f(2\pi) = 1$.</p>
<p><b>Étape 3 : La dérivée.</b> $f'(t) = ie^{it}$, de module $1$ : elle ne s'annule jamais.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\text{Rolle est faux pour les fonctions vectorielles}}$. Mais l'inégalité donne $|e^{ia} - e^{ib}|\leq|a - b|$ (avec $M = 1$).</p>

<h2 id="v-tay">6. Formules de Taylor</h2>
<div class="sbox">$$\textbf{Reste intégral}\ (f\ \mathcal C^{n+1}):\ f(b) = \sum_{k=0}^n\frac{(b - a)^k}{k!}f^{(k)}(a) + \int_a^b\frac{(b - t)^n}{n!}f^{(n+1)}(t)\,dt.$$
$$\textbf{Taylor-Lagrange}:\ \|f^{(n+1)}\|\leq\cO M\Rightarrow\Big\|f(b) - \sum_{k=0}^n\frac{(b - a)^k}{k!}f^{(k)}(a)\Big\|\leq\cO M\frac{|b - a|^{n+1}}{(n + 1)!}.\qquad\textbf{Taylor-Young}:\ f(a + h) = \sum_{k\leq n}\frac{h^k}{k!}f^{(k)}(a) + o(h^n).$$</div>
<p class="ml">Exemple 6 : $|e^{ix} - 1 - ix|\leq\frac{x^2}2$</p>
<p><b>Étape 1 : Rappel.</b> Taylor-Lagrange à l'ordre $1$ : $\|f(b) - f(a) - (b - a)f'(a)\|\leq M\frac{(b - a)^2}2$, avec $M\geq\|f''\|$.</p>
<p><b>Étape 2 : La fonction.</b> $f(t) = e^{it}$, $f'(t) = ie^{it}$, $f''(t) = -e^{it}$, donc $|f''|\leq\cO1$.</p>
<p><b>Étape 3 : On applique</b> à l'ordre $n = 1$ entre $a = 0$ et $b = x$ : $f(0) = e^0 = 1$, $f'(0) = ie^0 = i$, donc $f(0) + (x - 0)f'(0) = 1 + ix$, et le majorant vaut $M\frac{|x - 0|^2}{2!} = 1\times\frac{x^2}2$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{|e^{ix} - 1 - ix|\leq\frac{x^2}2}$ pour tout réel $x$.</p>

<h2 id="v-arc">7. Arcs paramétrés : tangente</h2>
<div class="sbox">$$\gamma(t) = (x(t), y(t)).\qquad\cR{t_0}\ \textbf{régulier}\ (\gamma'(t_0)\neq0):\ \text{tangente dirigée par}\ \gamma'(t_0) = (x'(t_0), y'(t_0)).$$
$$x'(t_0) = 0,\ y'(t_0)\neq0:\ \text{tangente verticale}.\qquad y'(t_0) = 0,\ x'(t_0)\neq0:\ \text{tangente horizontale}.$$</div>

<p class="ml">Exemple 7 : tangentes horizontales et verticales, point double</p>
<p>$\gamma(t) = (t^2 - 1,\ t^3 - 3t)$.</p>
<p><b>Étape 1 : Rappel.</b> Horizontale si $y' = 0\neq x'$, verticale si $x' = 0\neq y'$.</p>
<p><b>Étape 2 : Les dérivées.</b> $x'(t) = 2t$, $y'(t) = 3t^2 - 3 = 3(t - 1)(t + 1)$. Elles ne s'annulent jamais ensemble : tous les points sont réguliers.</p>
<p><b>Étape 3 : Horizontales.</b> $y' = 0$ pour $t = \pm1$, et alors $x' = \pm2\neq0$. $\gamma(1) = (1 - 1,\ 1 - 3) = (0, -2)$ et $\gamma(-1) = (1 - 1,\ -1 + 3) = (0, 2)$.</p>
<p><b>Étape 4 : Verticale.</b> $x' = 0$ pour $t = 0$, et $y'(0) = -3\neq0$ : point $\gamma(0) = (0 - 1,\ 0) = (-1, 0)$.</p>
<p><b>Étape 5 : Point double.</b> $x(t) = x(s)\iff t^2 = s^2$, donc $s = -t$ (car $s\neq t$). Puis $y(t) = y(-t)\iff t^3 - 3t = -t^3 + 3t\iff2t^3 - 6t = 0\iff2t(t^2 - 3) = 0$ ; $t = 0$ donnerait $s = t$, donc $t = \pm\sqrt3$. Point $\gamma(\sqrt3) = (3 - 1,\ 3\sqrt3 - 3\sqrt3) = (2, 0)$.</p>
<p><b>Étape 6 : Conclusion.</b> $\cG{\text{horizontales en}\ (0, \pm2),\ \text{verticale en}\ (-1, 0),\ \text{point double}\ (2, 0)}$.</p>

<h2 id="v-sing">8. Points singuliers <span class="hp">hors programme</span></h2>
<p>En $t_0$ singulier ($\gamma'(t_0) = 0$), on cherche le premier entier $\cV p$ avec $\gamma^{(p)}(t_0)\neq0$ (direction de la tangente), puis le premier $\cV q > p$ avec $\gamma^{(q)}(t_0)$ non colinéaire à $\gamma^{(p)}(t_0)$.</p>
<table class="mtab">
<tr><th></th><th>$q$ pair</th><th>$q$ impair</th></tr>
<tr><td>$p$ impair</td><td>point ordinaire</td><td>point d'inflexion</td></tr>
<tr><td>$p$ pair</td><td>rebroussement de 2<sup>e</sup> espèce</td><td>rebroussement de 1<sup>re</sup> espèce</td></tr>
</table>
<p class="ml">Exemple 8 : $\gamma(t) = (t^2, t^3)$ en $0$</p>
<p><b>Étape 1 : Rappel.</b> $p$ = premier ordre de dérivée non nulle, $q$ = premier ordre non colinéaire.</p>
<p><b>Étape 2 : Les dérivées en $0$.</b> $\gamma'(t) = (2t, 3t^2)$ donne $\gamma'(0) = (0, 0)$. $\gamma''(t) = (2, 6t)$ donne $\gamma''(0) = (2, 0)\neq(0, 0)$ : $p = 2$, tangente dirigée par $(2, 0)$, horizontale.</p>
<p><b>Étape 3 : Ensuite.</b> $\gamma'''(t) = (0, 6)$, donc $\gamma'''(0) = (0, 6)$. Colinéaire à $(2, 0)$ ? $\det\begin{pmatrix}2&0\\0&6\end{pmatrix} = 2\times6 - 0\times0 = 12\neq0$ : non, donc $q = 3$.</p>
<p><b>Étape 4 : Conclusion.</b> $p$ pair, $q$ impair : $\cG{\text{point de rebroussement de 1}^{\text{re}}\ \text{espèce}}$ (la cuspide).</p>

<h2 id="v-etude">9. Le plan d'étude d'un arc</h2>
<p><b>1.</b> Domaine, <b>réduction</b> par périodicité et symétries ($t\mapsto-t$ donne une symétrie si $x$, $y$ sont paires ou impaires). <b>2.</b> Tableau de variations conjoint de $x$ et $y$. <b>3.</b> Points singuliers, tangentes horizontales et verticales. <b>4.</b> Branches infinies. <b>5.</b> Points doubles. <b>6.</b> Tracé.</p>
<p class="ml">Bonus : la longueur d'un arc <span class="hp">hors programme</span></p>
<p>$L = \int_a^b\|\gamma'(t)\|\,dt$. Exemple : le cercle $\gamma(t) = (R\cos t, R\sin t)$, $\|\gamma'\| = R$, $L = 2\pi R$.</p>

<h2 id="v-enonce">10. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« $\|f\|$ constante »</b><span>Dériver $\|f\|^2$ : $\langle f, f'\rangle = 0$.</span></div>
<div><b>Dériver un produit, un déterminant</b><span>Formules bilinéaire, multilinéaire ; ne jamais commuter les matrices.</span></div>
<div><b>« Montrer $\|f(b) - f(a)\|\leq\dots$ »</b><span>Inégalité des accroissements finis, avec un majorant de $\|f'\|$.</span></div>
<div><b>« Majorer un reste »</b><span>Taylor-Lagrange avec un majorant de $\|f^{(n+1)}\|$.</span></div>
<div><b>$\frac1n\sum f(\frac kn)$ à valeurs complexes</b><span>Somme de Riemann, intégrer coordonnée par coordonnée.</span></div>
<div><b>« Tangente en $\gamma(t_0)$ »</b><span>$\gamma'(t_0)$ si régulier, sinon premier $\gamma^{(p)}(t_0)\neq0$.</span></div>
<div><b>« Point double »</b><span>Résoudre $\gamma(t) = \gamma(s)$ avec $t\neq s$.</span></div>
<div><b>« Rolle » pour une vectorielle</b><span>Faux : utiliser l'inégalité ou passer aux coordonnées.</span></div>
</div>

<h2 id="v-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Appliquer Rolle ou l'égalité des accroissements finis à une fonction vectorielle.</p>
<p><b>2.</b> $(A^2)' = 2AA'$ : c'est $A'A + AA'$.</p>
<p><b>3.</b> $(A^{-1})' = -\frac{A'}{A^2}$ : c'est $-A^{-1}A'A^{-1}$.</p>
<p><b>4.</b> $\big\|\int f\big\| = \int\|f\|$ : seulement $\leq$.</p>
<p><b>5.</b> Donner la tangente par $\gamma'(t_0)$ en un point singulier.</p>
</div>

<h2 id="v-entrainement">S'entraîner</h2>
<div data-mlab="arcp"></div>
<div data-mlab="quizfv"></div>

<h2 id="v-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : $X' = AX$ avec $A$ antisymétrique</p>
<p>Montrer que $\|X(t)\|$ est constante.</p>
<p><b>Étape 1 : Rappel.</b> $(\|X\|^2)' = 2\langle X, X'\rangle$, et $A^\top = -A$.</p>
<p><b>Étape 2 : On dérive.</b> $(\|X\|^2)' = 2\langle X, AX\rangle = 2X^\top AX$.</p>
<p><b>Étape 3 : Ce nombre est nul.</b> $X^\top AX$ est un réel, égal à son transposé $X^\top A^\top X = -X^\top AX$.</p>
<p><b>Étape 4 : Conclusion.</b> $(\|X\|^2)' = 0$ : $\cG{\|X(t)\|\ \text{est constante}}$ (et $e^{tA}\in O(n)$).</p>

<p class="ml">Exercice 2 : $|\cos x - 1 + \frac{x^2}2|\leq\frac{x^4}{24}$</p>
<p><b>Étape 1 : Rappel.</b> Taylor-Lagrange à l'ordre $3$ : reste $\leq M\frac{|x|^4}{4!}$ avec $M\geq|f^{(4)}|$.</p>
<p><b>Étape 2 : Les dérivées en $0$.</b> $\cos0 = 1$, $\cos'(0) = 0$, $\cos''(0) = -1$, $\cos'''(0) = 0$, et $|\cos^{(4)}| = |\cos|\leq1$.</p>
<p><b>Étape 3 : Le polynôme.</b> $1 + 0\cdot x - \frac{x^2}2 + 0\cdot x^3 = 1 - \frac{x^2}2$.</p>
<p><b>Étape 4 : Conclusion.</b> Ordre $n = 3$, $M = 1$, entre $0$ et $x$ : majorant $1\times\frac{|x|^4}{4!} = \frac{x^4}{24}$ ($4! = 1\times2\times3\times4 = 24$). $\cG{\big|\cos x - 1 + \frac{x^2}2\big|\leq\frac{x^4}{24}}$ pour tout réel $x$.</p>

<h2 id="v-arbre">L'arbre des fonctions vectorielles</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une fonction $f:I\to E$</span><ul>
<li><div class="hr"><em>dériver</em><span class="hq">Quelle forme ?</span><ul>
<li><div class="hr"><em>coordonnées</em><a class="hl ok" href="#v-der">dériver chaque $f_i$</a></div></li>
<li><div class="hr"><em>$\langle f, g\rangle$, $fg$, $\det$</em><a class="hl" href="#v-op">formules (multi)linéaires</a></div></li>
<li><div class="hr"><em>$A^{-1}$</em><a class="hl" href="#v-op">dériver $AA^{-1} = I$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>majorer</em><span class="hq">Quoi ?</span><ul>
<li><div class="hr"><em>$f(b) - f(a)$</em><a class="hl ok" href="#v-af">accroissements finis</a></div></li>
<li><div class="hr"><em>un reste de Taylor</em><a class="hl" href="#v-tay">Taylor-Lagrange</a></div></li>
<li><div class="hr"><em>$\int f$</em><a class="hl" href="#v-int">$\|\int f\|\leq\int\|f\|$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une somme $\frac1n\sum$</em><a class="hl" href="#v-int">somme de Riemann</a></div></li>
<li><div class="hr"><em>un arc $\gamma$</em><span class="hq">$\gamma'(t_0)\neq0$ ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#v-arc">tangente dirigée par $\gamma'(t_0)$</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#v-sing">$p$ et $q$, nature du point</a></div></li>
<li><div class="hr"><em>tracer</em><a class="hl end" href="#v-etude">symétries, variations, points doubles</a></div></li>
</ul></div></li>
</ul></div></div>
`,
"Probabilités sur un univers fini": R`
<nav class="msum"><a href="#q-not">Notations</a><a href="#q-esp">Espace probabilisé</a><a href="#q-unif">Équiprobabilité</a><a href="#q-cond">Conditionnement</a><a href="#q-tot">Probabilités totales</a><a href="#q-bayes">Bayes</a><a href="#q-ind">Indépendance</a><a href="#q-va">Variables aléatoires</a><a href="#q-lois">Lois usuelles</a><a href="#q-couple">Couples</a><a href="#q-espe">Espérance</a><a href="#q-var">Variance, covariance</a><a href="#q-ineg">Markov, Bienaymé-Tchebychev</a><a href="#q-enonce">L'énoncé</a><a href="#q-erreurs">Erreurs</a><a href="#q-entrainement">S'entraîner</a><a href="#q-exos">Exercices</a><a href="#q-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les événements $\cB A$, $\cB B$ et les variables $\cB X$, $\cB Y$. <span class="kR">rouge</span> : le système complet ou l'événement par lequel on conditionne. <span class="kO">orange</span> : les probabilités lues sur l'arbre ou dans l'énoncé. <span class="kV">violet</span> : les paramètres ($\cV n$, $\cV p$). <span class="kG">vert</span> : le résultat.</p>

<h2 id="q-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Univers, événements</td><td>$\Omega$ fini, $A\in\mathcal P(\Omega)$</td><td>$\overline A$, $A\cup B$ (ou), $A\cap B$ (et).</td></tr>
<tr><td>Probabilité</td><td>$P:\mathcal P(\Omega)\to[0, 1]$</td><td>$P(\Omega) = 1$, additive sur les disjoints.</td></tr>
<tr><td>Conditionnelle</td><td>$P_B(A) = P(A\mid B)$</td><td>$\frac{P(A\cap B)}{P(B)}$, $P(B) > 0$.</td></tr>
<tr><td>Variable aléatoire</td><td>$X:\Omega\to E$, $X(\Omega)$</td><td>$(X = x)$, $(X\leq x)$, $(X\in A)$ sont des événements.</td></tr>
<tr><td>Lois</td><td>$\mathcal U$, $\mathcal B(p)$, $\mathcal B(n, p)$</td><td>$X\sim\mathcal B(n, p)$.</td></tr>
<tr><td>Espérance, variance</td><td>$E(X)$, $V(X)$, $\sigma(X)$</td><td>$\sigma = \sqrt V$.</td></tr>
<tr><td>Covariance</td><td>$\operatorname{Cov}(X, Y)$</td><td>$E(XY) - E(X)E(Y)$.</td></tr>
</table>

<h2 id="q-esp">2. Espace probabilisé fini</h2>
<div class="sbox">$$P(\overline A) = 1 - P(A),\qquad P(A\cup B) = P(A) + P(B) - P(A\cap B),\qquad A\subset B\Rightarrow P(A)\leq P(B).$$
$$P\ \text{est déterminée par les}\ p_\omega = P(\{\omega\})\geq0\ \text{avec}\ \sum p_\omega = 1:\quad P(A) = \sum_{\omega\in A}p_\omega.$$</div>
<p class="ml">Exemple 1 : « au moins un »</p>
<p>Probabilité d'obtenir au moins un $6$ en $4$ lancers d'un dé équilibré.</p>
<p><b>Étape 1 : Rappel.</b> $P(\overline A) = 1 - P(A)$ : « au moins un » se calcule par le contraire « aucun ».</p>
<p><b>Étape 2 : Le contraire.</b> « Aucun $6$ » : chaque lancer donne autre chose que $6$, probabilité $\cO{\frac56}$, et les lancers sont indépendants : $\big(\frac56\big)^4 = \frac{625}{1296}$.</p>
<p><b>Étape 3 : Le calcul.</b> $\big(\frac56\big)^4 = \frac{5^4}{6^4} = \frac{625}{1296}$, et $1296 - 625 = 671$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{P = 1 - \frac{625}{1296} = \frac{671}{1296}\approx0{,}518}$.</p>

<h2 id="q-unif">3. Équiprobabilité : on dénombre</h2>
<div class="sbox">$$P\ \text{uniforme sur}\ \Omega:\quad P(A) = \frac{\operatorname{Card}A}{\operatorname{Card}\Omega} = \frac{\text{cas favorables}}{\text{cas possibles}}.$$</div>
<p>On choisit un $\Omega$ où les issues sont <b>vraiment</b> équiprobables (couples ordonnés pour deux dés, pas sommes), puis on utilise la fiche Dénombrement.</p>
<p class="ml">Exemple 2 : deux dés</p>
<p>Probabilité que la somme de deux dés équilibrés fasse $7$.</p>
<p><b>Étape 1 : Rappel.</b> $P(A) = \frac{\operatorname{Card}A}{\operatorname{Card}\Omega}$ sur un univers équiprobable.</p>
<p><b>Étape 2 : L'univers.</b> $\Omega = [\![1, 6]\!]^2$, $36$ couples équiprobables (les sommes, elles, ne le sont pas).</p>
<p><b>Étape 3 : Les cas favorables.</b> $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$ : $6$ couples.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{P = \frac6{36} = \frac16}$.</p>

<p class="ml">Exemple 3 : le problème des anniversaires</p>
<p>$23$ personnes, $365$ jours équiprobables. Probabilité qu'au moins deux aient le même anniversaire ?</p>
<p><b>Étape 1 : Rappel.</b> « Au moins deux » : contraire « tous différents ». Uniforme : on dénombre.</p>
<p><b>Étape 2 : Cas possibles.</b> $\Omega$ = listes de $23$ jours : $365^{23}$.</p>
<p><b>Étape 3 : Tous différents.</b> Listes d'éléments distincts : $365\times364\times\dots\times343$.</p>
<p><b>Étape 4 : Le calcul.</b> On divise chaque facteur par $365$ : $P(\text{tous différents}) = \frac{365\times364\times\dots\times343}{365^{23}} = \frac{365}{365}\times\frac{364}{365}\times\dots\times\frac{343}{365} = \prod_{k=0}^{22}\frac{365 - k}{365}\approx0{,}493$ (à la calculatrice : $23$ facteurs, du plus grand $1$ au plus petit $\frac{343}{365}\approx0{,}94$).</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{P\approx1 - 0{,}493 = 0{,}507}$ : plus d'une chance sur deux.</p>

<h2 id="q-cond">4. Probabilités conditionnelles, probabilités composées</h2>
<div class="sbox">$$P_{\cR B}(A) = \frac{P(A\cap\cR B)}{P(\cR B)}.\qquad\textbf{Composées}:\ P(A_1\cap\dots\cap A_n) = P(A_1)\,P_{A_1}(A_2)\,P_{A_1\cap A_2}(A_3)\cdots P_{A_1\cap\dots\cap A_{n-1}}(A_n).$$</div>
<p>Sur un <b>arbre pondéré</b>, chaque branche porte une probabilité conditionnelle, et la probabilité d'un chemin est le <b>produit</b> des branches.</p>
<p class="ml">Exemple 4 : tirages sans remise</p>
<p>Une urne contient $3$ rouges et $2$ bleues. On tire $2$ boules sans remise. Probabilité de deux rouges ?</p>
<p><b>Étape 1 : Rappel.</b> $P(R_1\cap R_2) = P(R_1)\,P_{R_1}(R_2)$.</p>
<p><b>Étape 2 : Premier tirage.</b> $P(R_1) = \cO{\frac35}$.</p>
<p><b>Étape 3 : Second tirage sachant $R_1$.</b> Il reste $2$ rouges sur $4$ : $P_{R_1}(R_2) = \cO{\frac24}$.</p>
<p><b>Étape 4 : Conclusion.</b> Produit des branches : $\frac35\times\frac24 = \frac{3\times2}{5\times4} = \frac6{20} = \cG{\frac3{10}}$. Contrôle par dénombrement : $\binom32 = 3$ paires rouges, $\binom52 = \frac{5\times4}2 = 10$ paires en tout, $\frac3{10}$.</p>

<h2 id="q-tot">5. La formule des probabilités totales</h2>
<div class="sbox">$$\cR{(B_1, \dots, B_n)}\ \text{système complet}\ (\text{disjoints, de réunion}\ \Omega):\quad P(A) = \sum_{i=1}^nP(\cR{B_i})\,P_{\cR{B_i}}(A).$$</div>
<p>On l'utilise quand l'expérience a deux temps et qu'on connaît les probabilités du second temps <b>sachant</b> le premier. Le plus simple : $(B, \overline B)$.</p>
<p class="ml">Exemple 5 : deux urnes</p>
<p>On choisit $U_1$ ($2$ rouges, $3$ bleues) avec probabilité $\frac13$, sinon $U_2$ ($4$ rouges, $1$ bleue), puis on tire une boule. $P(R)$ ?</p>
<p><b>Étape 1 : Rappel.</b> Système complet $(\cR{U_1}, \cR{U_2})$ : $P(R) = P(U_1)P_{U_1}(R) + P(U_2)P_{U_2}(R)$.</p>
<p><b>Étape 2 : Les branches.</b> $P(U_1) = \frac13$, $P_{U_1}(R) = \frac25$ ; $P(U_2) = \frac23$, $P_{U_2}(R) = \frac45$.</p>
<p><b>Étape 3 : Le calcul.</b> $P(R) = P(U_1)P_{U_1}(R) + P(U_2)P_{U_2}(R) = \frac13\times\frac25 + \frac23\times\frac45 = \frac{1\times2}{3\times5} + \frac{2\times4}{3\times5} = \frac2{15} + \frac8{15}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\frac2{15} + \frac8{15} = \frac{2 + 8}{15} = \frac{10}{15}$, et on simplifie par $5$ : $\cG{P(R) = \frac23}$.</p>

<h2 id="q-bayes">6. La formule de Bayes</h2>
<div class="sbox">$$P_{\cB A}(\cR{B_j}) = \frac{P(\cR{B_j})\,P_{\cR{B_j}}(\cB A)}{\sum_iP(\cR{B_i})\,P_{\cR{B_i}}(\cB A)}.$$</div>
<p>Elle sert à <b>remonter le temps</b> : on connaît $P_{\text{cause}}(\text{effet})$ et on veut $P_{\text{effet}}(\text{cause})$.</p>
<p class="ml">Exemple 6 : un test médical</p>
<p>Une maladie touche $1\%$ de la population. Le test est positif chez $99\%$ des malades et chez $5\%$ des non-malades. Un patient est positif : probabilité qu'il soit malade ?</p>
<p><b>Étape 1 : Rappel.</b> Bayes avec le système complet $(\cR M, \cR{\overline M})$.</p>
<p><b>Étape 2 : Les données.</b> $P(M) = 0{,}01$, $P_M(+) = 0{,}99$, $P(\overline M) = 0{,}99$, $P_{\overline M}(+) = 0{,}05$.</p>
<p><b>Étape 3 : Probabilités totales.</b> $P(+) = 0{,}01\times0{,}99 + 0{,}99\times0{,}05 = 0{,}0099 + 0{,}0495 = 0{,}0594$.</p>
<p><b>Étape 4 : Bayes.</b> $P_+(M) = \frac{P(M)P_M(+)}{P(+)} = \frac{0{,}0099}{0{,}0594} = \frac{99}{594} = \frac{99}{6\times99} = \frac16$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{P_+(M) = \frac16\approx17\%}$ : la plupart des positifs sont des faux positifs, car la maladie est rare.</p>

<h2 id="q-ind">7. Indépendance</h2>
<div class="sbox">$$A, B\ \text{indépendants}\iff P(A\cap B) = P(A)P(B)\ \ (\iff P_B(A) = P(A)\ \text{si}\ P(B) > 0).$$
$$\text{Mutuellement indépendants}:\ P\Big(\bigcap_{i\in J}A_i\Big) = \prod_{i\in J}P(A_i)\ \text{pour toute partie}\ J.\qquad A, B\ \text{indépendants}\Rightarrow A, \overline B\ \text{aussi}.$$</div>
<p class="ml piege">Piège</p>
<p>Indépendants $\neq$ incompatibles : deux événements incompatibles de probabilités non nulles ne sont <b>jamais</b> indépendants. Et deux à deux indépendants ne suffit pas pour mutuellement (exemple 8).</p>

<p class="ml">Exemple 7 : vérifier une indépendance</p>
<p>Un dé équilibré, $A$ = « pair », $B$ = « $\leq4$ ».</p>
<p><b>Étape 1 : Rappel.</b> On compare $P(A\cap B)$ et $P(A)P(B)$.</p>
<p><b>Étape 2 : Les probabilités.</b> $A = \{2, 4, 6\}$ : $P(A) = \frac36 = \frac12$. $B = \{1, 2, 3, 4\}$ : $P(B) = \frac46 = \frac23$. $A\cap B$ = pairs et $\leq4$ = $\{2, 4\}$ : $P(A\cap B) = \frac26 = \frac13$.</p>
<p><b>Étape 3 : On compare.</b> $P(A)P(B) = \frac12\times\frac23 = \frac2{6} = \frac13 = P(A\cap B)$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{A\ \text{et}\ B\ \text{sont indépendants}}$.</p>

<p class="ml">Exemple 8 : deux à deux, mais pas mutuellement</p>
<p>Deux pièces équilibrées. $A$ = « 1<sup>re</sup> pile », $B$ = « 2<sup>e</sup> pile », $C$ = « les deux pièces donnent le même résultat ».</p>
<p><b>Étape 1 : Rappel.</b> Mutuelle : aussi $P(A\cap B\cap C) = P(A)P(B)P(C)$.</p>
<p><b>Étape 2 : Les probabilités.</b> $\Omega = \{PP, PF, FP, FF\}$, $4$ issues équiprobables. $A = \{PP, PF\}$, $B = \{PP, FP\}$, $C = \{PP, FF\}$ : chacun $\frac24 = \frac12$.</p>
<p><b>Étape 3 : Deux à deux.</b> $A\cap B = \{PP\}$, $A\cap C = \{PP\}$, $B\cap C = \{PP\}$ : chacun $\frac14$, et $\frac12\times\frac12 = \frac14$ : égalité à chaque fois.</p>
<p><b>Étape 4 : Les trois.</b> $A\cap B\cap C = \{PP\}$, probabilité $\frac14$, alors que $P(A)P(B)P(C) = \frac12\times\frac12\times\frac12 = \frac18$ : $\frac14\neq\frac18$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\text{indépendants deux à deux, pas mutuellement}}$.</p>

<h2 id="q-va">8. Variables aléatoires, loi</h2>
<div class="sbox">$$\text{Loi de}\ X:\ \text{les}\ P(X = x)\ \text{pour}\ x\in X(\Omega),\ \text{avec}\ \sum_xP(X = x) = 1.\qquad\text{Loi de}\ f(X):\ P(f(X) = y) = \sum_{x,\ f(x) = y}P(X = x).$$</div>
<p class="ml">La méthode du maximum</p>
<p>Pour $M = \max(X_1, \dots, X_n)$ : on passe par $(M\leq k) = \bigcap(X_i\leq k)$, puis $P(M = k) = P(M\leq k) - P(M\leq k - 1)$. Pour un minimum : $(m > k) = \bigcap(X_i > k)$.</p>
<p class="ml">Exemple 9 : la loi du maximum de deux dés</p>
<p><b>Étape 1 : Rappel.</b> $(M\leq k) = (X_1\leq k)\cap(X_2\leq k)$, puis on fait la différence.</p>
<p><b>Étape 2 : La fonction de répartition.</b> $(M\leq k) = (X_1\leq k)\cap(X_2\leq k)$. Un dé donne $\leq k$ pour $k$ faces sur $6$ : $P(X_i\leq k) = \frac k6$. Indépendance : $P(M\leq k) = \frac k6\times\frac k6 = \frac{k^2}{36}$.</p>
<p><b>Étape 3 : La différence.</b> $k^2 - (k - 1)^2 = k^2 - (k^2 - 2k + 1) = 2k - 1$, donc $P(M = k) = \frac{k^2 - (k - 1)^2}{36} = \frac{2k - 1}{36}$, $k\in[\![1, 6]\!]$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{P(M = k) = \frac{2k - 1}{36}}$. Contrôle : $\sum_{k=1}^6(2k - 1) = 1 + 3 + 5 + 7 + 9 + 11 = 36$, donc les probabilités somment à $\frac{36}{36} = 1$.</p>

<h2 id="q-lois">9. Les lois usuelles</h2>
<table class="mtab">
<tr><th>Loi</th><th>Modèle</th><th>$P(X = k)$</th><th>$E(X)$</th><th>$V(X)$</th></tr>
<tr><td>Uniforme $\mathcal U([\![1, n]\!])$</td><td>tirer au hasard</td><td>$\frac1n$</td><td>$\frac{n + 1}2$</td><td>$\frac{n^2 - 1}{12}$</td></tr>
<tr><td>Bernoulli $\mathcal B(p)$</td><td>succès / échec</td><td>$P(X = 1) = p$</td><td>$p$</td><td>$p(1 - p)$</td></tr>
<tr><td>Binomiale $\mathcal B(\cV n, \cV p)$</td><td>nombre de succès en $n$ épreuves indépendantes</td><td>$\binom nkp^k(1 - p)^{n-k}$</td><td>$np$</td><td>$np(1 - p)$</td></tr>
</table>
<div class="sbox">$$X_1, \dots, X_n\ \text{indépendantes de loi}\ \mathcal B(p)\ \Longrightarrow\ X_1 + \dots + X_n\sim\mathcal B(n, p).$$</div>
<p>La loi géométrique et la loi de Poisson apparaissent quand $\Omega$ est infini : elles sont au <span class="hp">programme de Spé</span>.</p>
<p class="ml">Exemple 10 : une binomiale</p>
<p>On lance $5$ fois un dé. Probabilité d'obtenir exactement deux $6$ ?</p>
<p><b>Étape 1 : Rappel.</b> Nombre de succès en $n$ épreuves indépendantes de même probabilité $p$ : $\mathcal B(n, p)$, $P(X = k) = \binom nkp^k(1 - p)^{n-k}$.</p>
<p><b>Étape 2 : Les paramètres.</b> Succès = « faire $6$ », $\cV p = \frac16$, $\cV n = 5$, lancers indépendants : $X\sim\mathcal B\big(5, \frac16\big)$.</p>
<p><b>Étape 3 : Le calcul.</b> $\binom52 = \frac{5\times4}2 = 10$, $\big(\frac16\big)^2 = \frac1{36}$, $\big(\frac56\big)^3 = \frac{125}{216}$, et $36\times216 = 7776$ :</p>
$$P(X = 2) = 10\times\frac1{36}\times\frac{125}{216} = \frac{1250}{7776}.$$
<p><b>Étape 4 : Conclusion.</b> $\cG{P(X = 2) = \frac{1250}{7776}\approx0{,}161}$.</p>

<h2 id="q-couple">10. Couples de variables aléatoires</h2>
<div class="sbox">$$\text{Loi conjointe}:\ P(X = x, Y = y).\qquad\text{Marginales}:\ P(X = x) = \sum_yP(X = x, Y = y).$$
$$X, Y\ \text{indépendantes}\iff\forall x, y,\ P(X = x, Y = y) = P(X = x)P(Y = y)\ \Longrightarrow\ f(X), g(Y)\ \text{indépendantes}.$$</div>
<p>Les marginales se lisent en sommant les <b>lignes</b> et les <b>colonnes</b> du tableau de la loi conjointe. La réciproque est fausse : les marginales ne donnent pas la loi conjointe.</p>

<h2 id="q-espe">11. Espérance</h2>
<div class="sbox">$$E(X) = \sum_{x\in X(\Omega)}x\,P(X = x).\qquad\textbf{Transfert}:\ E(f(X)) = \sum_xf(x)\,P(X = x).\qquad E(\mathbb 1_A) = P(A).$$
$$\textbf{Linéarité}:\ E(aX + bY) = aE(X) + bE(Y)\ \text{(sans indépendance)}.\qquad X\leq Y\Rightarrow E(X)\leq E(Y).\qquad X, Y\ \text{indépendantes}\Rightarrow E(XY) = E(X)E(Y).$$</div>
<p class="ml">La méthode des indicatrices</p>
<p>Si $X$ <b>compte</b> quelque chose, on l'écrit $X = \sum_i\mathbb 1_{A_i}$ (une indicatrice par objet), et $E(X) = \sum P(A_i)$, <b>même sans indépendance</b>.</p>

<p class="ml">Exemple 11 : l'espérance d'une binomiale par indicatrices</p>
<p><b>Étape 1 : Rappel.</b> $E(\mathbb 1_A) = P(A)$ et linéarité.</p>
<p><b>Étape 2 : On découpe.</b> $X = X_1 + \dots + X_n$ où $X_i = 1$ si la $i$-ième épreuve est un succès, $X_i\sim\mathcal B(p)$.</p>
<p><b>Étape 3 : La linéarité.</b> $E(X_i) = 1\times p + 0\times(1 - p) = p$, donc $E(X) = E(X_1) + \dots + E(X_n) = p + \dots + p = np$ ($n$ termes).</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{E(X) = np}$, sans aucun calcul de somme avec des $\binom nk$.</p>

<p class="ml">Exemple 12 : le nombre de points fixes d'une permutation au hasard</p>
<p>$\sigma$ uniforme dans $S_n$, $X$ = nombre de $i$ avec $\sigma(i) = i$. Calculer $E(X)$.</p>
<p><b>Étape 1 : Rappel.</b> Méthode des indicatrices.</p>
<p><b>Étape 2 : On découpe.</b> $X = \sum_{i=1}^n\mathbb 1_{A_i}$ avec $A_i = (\sigma(i) = i)$.</p>
<p><b>Étape 3 : Une probabilité.</b> Si $\sigma(i) = i$, on permute librement les $n - 1$ autres : $(n - 1)!$ permutations. Donc $P(A_i) = \frac{(n - 1)!}{n!} = \frac{(n - 1)!}{n\times(n - 1)!} = \frac1n$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{E(X) = n\times\frac1n = 1}$, pour tout $n$ (les $A_i$ ne sont pourtant pas indépendants).</p>

<h2 id="q-var">12. Variance, covariance</h2>
<div class="sbox">$$V(X) = E\big((X - E(X))^2\big) = E(X^2) - E(X)^2\ \ \textbf{(König-Huygens)}.\qquad V(aX + b) = a^2V(X).$$
$$\operatorname{Cov}(X, Y) = E(XY) - E(X)E(Y),\qquad V(X + Y) = V(X) + V(Y) + 2\operatorname{Cov}(X, Y).$$
$$X, Y\ \text{indépendantes}\Rightarrow\operatorname{Cov}(X, Y) = 0\ \text{et}\ V(X + Y) = V(X) + V(Y)\ \text{(réciproque fausse)}.$$</div>
<p class="ml">Exemple 13 : la variance de la loi uniforme</p>
<p>$X\sim\mathcal U([\![1, n]\!])$.</p>
<p><b>Étape 1 : Rappel.</b> $V(X) = E(X^2) - E(X)^2$, et le transfert pour $E(X^2)$.</p>
<p><b>Étape 2 : $E(X)$.</b> Chaque valeur a probabilité $\frac1n$ : $E(X) = \sum_{k=1}^nk\times\frac1n = \frac1n\times\frac{n(n + 1)}2 = \frac{n + 1}2$.</p>
<p><b>Étape 3 : $E(X^2)$.</b> Transfert : $E(X^2) = \sum_{k=1}^nk^2\times\frac1n = \frac1n\times\frac{n(n + 1)(2n + 1)}6 = \frac{(n + 1)(2n + 1)}6$.</p>
<p><b>Étape 4 : La différence.</b></p>
$$V(X) = E(X^2) - E(X)^2 = \frac{(n + 1)(2n + 1)}6 - \frac{(n + 1)^2}4 = \frac{2(n + 1)(2n + 1) - 3(n + 1)^2}{12} = \frac{(n + 1)\big(4n + 2 - 3n - 3\big)}{12} = \frac{(n + 1)(n - 1)}{12}.$$
<p><b>Étape 5 : Conclusion.</b> $(n + 1)(n - 1) = n^2 - 1$ : $\cG{V(X) = \frac{n^2 - 1}{12}}$ (dé, $n = 6$ : $\frac{36 - 1}{12} = \frac{35}{12}$).</p>

<h2 id="q-ineg">13. Markov et Bienaymé-Tchebychev</h2>
<div class="sbox">$$\textbf{Markov}:\ X\geq0,\ a > 0:\ P(X\geq a)\leq\frac{E(X)}a.\qquad\textbf{Bienaymé-Tchebychev}:\ P\big(|X - E(X)|\geq\varepsilon\big)\leq\frac{V(X)}{\varepsilon^2}.$$</div>
<p class="ml">Exemple 14 : combien de lancers ?</p>
<p>On lance $n$ fois une pièce équilibrée, $F = \frac{S_n}n$ la fréquence de pile. Trouver $n$ pour que $P\big(|F - \frac12|\geq0{,}05\big)\leq0{,}05$.</p>
<p><b>Étape 1 : Rappel.</b> $P(|X - E(X)|\geq\varepsilon)\leq\frac{V(X)}{\varepsilon^2}$.</p>
<p><b>Étape 2 : Espérance et variance.</b> $S_n\sim\mathcal B\big(n, \frac12\big)$ : $E(S_n) = \frac n2$, $V(S_n) = n\cdot\frac12\cdot\frac12 = \frac n4$. Donc $E(F) = \frac1nE(S_n) = \frac12$ et $V(F) = \frac1{n^2}V(S_n) = \frac1{n^2}\cdot\frac n4 = \frac1{4n}$.</p>
<p><b>Étape 3 : On applique</b> avec $\varepsilon = 0{,}05$, $\varepsilon^2 = 0{,}0025$ : $P\leq\frac{1/(4n)}{0{,}0025} = \frac1{4n\times0{,}0025} = \frac1{0{,}01\,n} = \frac{100}n$.</p>
<p><b>Étape 4 : On résout</b> $\frac{100}n\leq0{,}05\iff100\leq0{,}05\,n\iff n\geq\frac{100}{0{,}05} = 100\times20 = 2000$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{n = 2000\ \text{lancers suffisent}}$ (la majoration est grossière, mais sûre).</p>

<h2 id="q-enonce">14. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Au moins un »</b><span>Passer au contraire « aucun ».</span></div>
<div><b>Issues équiprobables</b><span>Dénombrer favorables et possibles dans un $\Omega$ bien choisi.</span></div>
<div><b>Expérience en plusieurs étapes</b><span>Arbre pondéré, probabilités composées.</span></div>
<div><b>« On choisit d'abord… puis… »</b><span>Probabilités totales sur le système complet de la 1<sup>re</sup> étape.</span></div>
<div><b>« Sachant le résultat, quelle cause ? »</b><span>Bayes.</span></div>
<div><b>« Indépendants ? »</b><span>Comparer $P(A\cap B)$ et $P(A)P(B)$.</span></div>
<div><b>« Nombre de succès en $n$ essais indépendants »</b><span>Loi binomiale.</span></div>
<div><b>Un maximum, un minimum</b><span>Passer par $(M\leq k)$ ou $(m > k)$.</span></div>
<div><b>$X$ compte des objets</b><span>Indicatrices et linéarité de l'espérance.</span></div>
<div><b>$V(X + Y)$</b><span>Indépendantes : somme. Sinon : $+2\operatorname{Cov}$.</span></div>
<div><b>« Majorer $P(|X - m|\geq\varepsilon)$ »</b><span>Bienaymé-Tchebychev.</span></div>
</div>

<h2 id="q-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Confondre $P_B(A)$ et $P_A(B)$.</p>
<p><b>2.</b> Confondre incompatibles et indépendants.</p>
<p><b>3.</b> Prendre les sommes de deux dés comme équiprobables.</p>
<p><b>4.</b> Écrire $P(A\cap B) = P(A)P(B)$ sans indépendance.</p>
<p><b>5.</b> $V(X + Y) = V(X) + V(Y)$ sans indépendance (ou covariance nulle).</p>
<p><b>6.</b> $V(aX) = aV(X)$ : c'est $a^2V(X)$.</p>
<p><b>7.</b> Utiliser la binomiale pour des tirages <b>sans remise</b>.</p>
<p><b>8.</b> Oublier de vérifier que $\sum P(X = x) = 1$.</p>
</div>

<h2 id="q-entrainement">S'entraîner</h2>
<div data-mlab="bayes"></div>
<div data-mlab="binomp"></div>
<div data-mlab="quizpr"></div>

<h2 id="q-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : Monty Hall</p>
<p>Trois portes, une voiture derrière l'une. Tu choisis la porte $1$. L'animateur, qui sait où est la voiture, ouvre une autre porte vide (au hasard s'il a le choix), disons la $3$. Faut-il changer pour la $2$ ?</p>
<p><b>Étape 1 : Rappel.</b> Bayes avec le système complet $(V_1, V_2, V_3)$ = « la voiture est derrière la porte $i$ ».</p>
<p><b>Étape 2 : Les données.</b> $P(V_i) = \frac13$. Sachant $V_1$, l'animateur ouvre la $3$ avec probabilité $\frac12$ ; sachant $V_2$, il ouvre forcément la $3$ : $1$ ; sachant $V_3$, jamais : $0$.</p>
<p><b>Étape 3 : Probabilités totales.</b> $P(O_3) = P(V_1)P_{V_1}(O_3) + P(V_2)P_{V_2}(O_3) + P(V_3)P_{V_3}(O_3) = \frac13\times\frac12 + \frac13\times1 + \frac13\times0 = \frac16 + \frac26 + 0 = \frac36 = \frac12$.</p>
<p><b>Étape 4 : Bayes.</b> $P_{O_3}(V_2) = \frac{P(V_2)P_{V_2}(O_3)}{P(O_3)} = \frac{1/3}{1/2} = \frac13\times2 = \frac23$ et $P_{O_3}(V_1) = \frac{1/6}{1/2} = \frac16\times2 = \frac13$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\text{changer fait gagner avec probabilité}\ \frac23}$.</p>

<p class="ml">Exercice 2 : un couple non indépendant</p>
<p>On tire sans remise deux boules parmi trois numérotées $1, 2, 3$ ; $X$ = 1<sup>er</sup> numéro, $Y$ = 2<sup>e</sup>. Calculer $\operatorname{Cov}(X, Y)$.</p>
<p><b>Étape 1 : Rappel.</b> $\operatorname{Cov}(X, Y) = E(XY) - E(X)E(Y)$.</p>
<p><b>Étape 2 : La loi conjointe.</b> $3$ choix pour la 1<sup>re</sup> boule, puis $2$ pour la 2<sup>e</sup> : $3\times2 = 6$ couples $(i, j)$, $i\neq j$, équiprobables : $P(X = i, Y = j) = \frac16$. Marginale : $P(X = i) = \frac16 + \frac16 = \frac13$ (deux valeurs de $j$), uniforme sur $\{1, 2, 3\}$, d'où $E(X) = \frac{1 + 2 + 3}3 = 2$, et de même $E(Y) = 2$.</p>
<p><b>Étape 3 : $E(XY)$.</b> $\big(\sum i\big)^2 = \sum_{i,j}ij$ contient aussi les termes $i = j$, qu'on retire : $\sum_{i\neq j}ij = \big(\sum i\big)^2 - \sum i^2$. Ici $\sum i = 1 + 2 + 3 = 6$, $\sum i^2 = 1 + 4 + 9 = 14$ :</p>
$$E(XY) = \frac16\sum_{i\neq j}ij = \frac16(36 - 14) = \frac{22}6 = \frac{11}3.$$
<p><b>Étape 4 : Conclusion.</b> $E(X)E(Y) = 2\times2 = 4 = \frac{12}3$, donc $\cG{\operatorname{Cov}(X, Y) = \frac{11}3 - \frac{12}3 = -\frac13}$ : non nulle, donc $X$ et $Y$ ne sont pas indépendantes (logique : sans remise).</p>

<p class="ml">Exercice 3 : tirages sans remise, l'espérance</p>
<p>Une urne de $N$ boules dont $R$ rouges ; on tire $n$ boules sans remise. $X$ = nombre de rouges. $E(X)$ ?</p>
<p><b>Étape 1 : Rappel.</b> Indicatrices et linéarité, sans indépendance.</p>
<p><b>Étape 2 : On découpe.</b> $X = \sum_{k=1}^n\mathbb 1_{A_k}$ avec $A_k$ = « la $k$-ième boule est rouge ».</p>
<p><b>Étape 3 : Par symétrie.</b> Chaque position a la même chance d'être une rouge : $P(A_k) = \frac RN$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{E(X) = n\frac RN}$, comme avec remise (mais la loi, elle, n'est pas binomiale).</p>

<h2 id="q-arbre">L'arbre des probabilités</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question de probabilité</span><ul>
<li><div class="hr"><em>calculer $P(A)$</em><span class="hq">Comment est l'expérience ?</span><ul>
<li><div class="hr"><em>issues équiprobables</em><a class="hl ok" href="#q-unif">favorables / possibles</a></div></li>
<li><div class="hr"><em>« au moins un »</em><a class="hl ok" href="#q-esp">$1 - P(\text{aucun})$</a></div></li>
<li><div class="hr"><em>en étapes</em><a class="hl" href="#q-cond">arbre, probabilités composées</a></div></li>
<li><div class="hr"><em>plusieurs causes</em><a class="hl" href="#q-tot">probabilités totales</a></div></li>
<li><div class="hr"><em>remonter à la cause</em><a class="hl" href="#q-bayes">Bayes</a></div></li>
</ul></div></li>
<li><div class="hr"><em>indépendance</em><a class="hl" href="#q-ind">$P(A\cap B) = P(A)P(B)$ ?</a></div></li>
<li><div class="hr"><em>une variable $X$</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>sa loi, modèle connu</em><a class="hl ok" href="#q-lois">uniforme, Bernoulli, binomiale</a></div></li>
<li><div class="hr"><em>loi d'un max, min</em><a class="hl" href="#q-va">$(M\leq k)$, $(m > k)$</a></div></li>
<li><div class="hr"><em>$E(X)$, $X$ compte</em><a class="hl" href="#q-espe">indicatrices</a></div></li>
<li><div class="hr"><em>$E(f(X))$</em><a class="hl" href="#q-espe">transfert</a></div></li>
<li><div class="hr"><em>$V(X)$</em><a class="hl" href="#q-var">$E(X^2) - E(X)^2$</a></div></li>
<li><div class="hr"><em>majorer un écart</em><a class="hl end" href="#q-ineg">Markov, Bienaymé-Tchebychev</a></div></li>
</ul></div></li>
<li><div class="hr"><em>un couple $(X, Y)$</em><a class="hl" href="#q-couple">loi conjointe, marginales, covariance</a></div></li>
</ul></div></div>
`,
"Structures algébriques usuelles": R`
<nav class="msum"><a href="#g-not">Notations</a><a href="#g-lci">Lois de composition</a><a href="#g-grp">Groupes</a><a href="#g-sg">Sous-groupes</a><a href="#g-morph">Morphismes de groupes</a><a href="#g-ann">Anneaux</a><a href="#g-sa">Sous-anneaux, inversibles</a><a href="#g-corps">Corps</a><a href="#g-enonce">L'énoncé</a><a href="#g-erreurs">Erreurs</a><a href="#g-entrainement">S'entraîner</a><a href="#g-exos">Exercices</a><a href="#g-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les éléments $\cB x$, $\cB y$. <span class="kR">rouge</span> : la partie étudiée $\cR H$ (sous-groupe, sous-anneau). <span class="kO">orange</span> : le neutre et les inverses. <span class="kV">violet</span> : le morphisme $\cV f$. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="g-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>Exemples</th></tr>
<tr><td>Loi de composition interne</td><td>$*:E\times E\to E$</td><td>$+$, $\times$, $\circ$.</td></tr>
<tr><td>Groupe</td><td>$(G, *)$, neutre $e$, inverse $x^{-1}$</td><td>$(\mathbb Z, +)$, $(\mathbb C^*, \times)$, $(GL_n(\mathbb K), \times)$, $(S_n, \circ)$.</td></tr>
<tr><td>Racines $n$-ièmes de l'unité</td><td>$\mathbb U_n$, $\mathbb U$</td><td>Sous-groupes de $(\mathbb C^*, \times)$.</td></tr>
<tr><td>Noyau, image</td><td>$\ker f$, $\operatorname{Im}f$</td><td>$\ker\det = SL_n(\mathbb K)$.</td></tr>
<tr><td>Anneau</td><td>$(A, +, \times)$, $0_A$, $1_A$</td><td>$\mathbb Z$, $\mathbb K[X]$, $\mathcal M_n(\mathbb K)$, $\mathcal F(X, \mathbb R)$.</td></tr>
<tr><td>Inversibles</td><td>$A^\times$ ou $U(A)$</td><td>$\mathbb Z^\times = \{\pm1\}$, $\mathcal M_n(\mathbb K)^\times = GL_n(\mathbb K)$.</td></tr>
</table>

<h2 id="g-lci">2. Lois de composition interne</h2>
<div class="sbox">$$\textbf{Associative}:\ (x*y)*z = x*(y*z).\quad\textbf{Commutative}:\ x*y = y*x.\quad\textbf{Neutre}\ \cO e:\ x*e = e*x = x.\quad\textbf{Inversible}:\ \exists\cO{x'},\ x*x' = x'*x = e.$$
$$\text{Le neutre est unique}.\quad\text{L'inverse est unique (loi associative)}.\quad(x*y)^{-1} = y^{-1}*x^{-1}\ \text{(ordre inversé)}.$$</div>
<p class="ml">Exemple 1 : étudier une loi</p>
<p>Sur $\mathbb R$ : $x*y = x + y - xy$.</p>
<p><b>Étape 1 : Rappel.</b> On vérifie associativité, commutativité, neutre, inversibles.</p>
<p><b>Étape 2 : L'astuce.</b> $1 - x*y = 1 - x - y + xy = (1 - x)(1 - y)$.</p>
<p><b>Étape 3 : Associativité, commutativité.</b> On applique l'astuce deux fois : $1 - (x*y)*z = (1 - x*y)(1 - z) = (1 - x)(1 - y)(1 - z)$. De même $1 - x*(y*z) = (1 - x)(1 - y*z) = (1 - x)(1 - y)(1 - z)$. Les deux sont égaux, donc $(x*y)*z = x*(y*z)$. Et $(1 - x)(1 - y) = (1 - y)(1 - x)$ donne $x*y = y*x$.</p>
<p><b>Étape 4 : Neutre.</b> $x*0 = x + 0 - x\times0 = x + 0 - 0 = x$, et $0*x = x$ par commutativité : $\cO{e = 0}$.</p>
<p><b>Étape 5 : Inversibles.</b> On cherche $y$ avec $x*y = 0$, c'est-à-dire $1 - x*y = 1$ :</p>
$$(1 - x)(1 - y) = 1\iff1 - y = \frac1{1 - x}\ (x\neq1)\iff y = 1 - \frac1{1 - x} = \frac{(1 - x) - 1}{1 - x} = \frac{-x}{1 - x} = \frac x{x - 1}.$$
<p>Si $x = 1$, l'équation devient $0 = 1$ : pas d'inverse.</p>
<p><b>Étape 6 : Conclusion.</b> $\cG{*\ \text{associative, commutative, neutre}\ 0,\ x\ \text{inversible}\iff x\neq1,\ x' = \frac x{x - 1}}$.</p>

<h2 id="g-grp">3. Groupes</h2>
<div class="sbox">$$(G, *)\ \text{groupe}:\ *\ \text{loi interne associative, avec un neutre, et tout élément inversible}.\qquad\text{Abélien si}\ *\ \text{commutative}.$$
$$\text{Simplification}:\ x*a = y*a\Rightarrow x = y.\qquad x^n * x^m = x^{n+m},\quad(x^n)^{-1} = x^{-n}.$$</div>
<p class="ml">La méthode</p>
<p>Pour montrer qu'un ensemble est un groupe, on essaie <b>d'abord</b> de le voir comme un <b>sous-groupe</b> d'un groupe connu (§4) : il n'y a alors que deux points à vérifier.</p>
<p class="ml">Exemple 2 : un groupe à partir de l'exemple 1</p>
<p>Montrer que $(\mathbb R\setminus\{1\}, *)$ est un groupe abélien.</p>
<p><b>Étape 1 : Rappel.</b> Loi interne, associative, neutre, inverses.</p>
<p><b>Étape 2 : Loi interne.</b> Si $x, y\neq1$ : $1 - x*y = (1 - x)(1 - y)\neq0$, donc $x*y\neq1$.</p>
<p><b>Étape 3 : Le reste.</b> Associative, commutative, neutre $0\neq1$ (exemple 1). L'inverse $\frac x{x - 1}$ est $\neq1$ : sinon $\frac x{x - 1} = 1$, soit $x = x - 1$, soit $0 = -1$, absurde.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(\mathbb R\setminus\{1\}, *)\ \text{est un groupe abélien}}$ ; $x\mapsto1 - x$ en fait même un isomorphe de $(\mathbb R^*, \times)$.</p>

<h2 id="g-sg">4. Sous-groupes</h2>
<div class="sbox">$$\cR H\subset G\ \text{sous-groupe}\iff\begin{cases}\cO e\in\cR H\ (\text{ou}\ H\neq\varnothing)\\\forall x, y\in\cR H,\ x*y^{-1}\in\cR H\end{cases}\qquad\text{Une intersection de sous-groupes est un sous-groupe}.$$
$$\textbf{Sous-groupes de}\ (\mathbb Z, +):\ \text{exactement les}\ n\mathbb Z,\ n\in\mathbb N.$$</div>
<p class="ml piege">Piège</p>
<p>Une <b>réunion</b> de sous-groupes n'est en général pas un sous-groupe : $2\mathbb Z\cup3\mathbb Z$ contient $2$ et $3$ mais pas $5$.</p>

<p class="ml">Exemple 3 : $\mathbb U$ et $\mathbb U_n$</p>
<p><b>Étape 1 : Rappel.</b> Sous-groupe : contient le neutre, stable par $xy^{-1}$.</p>
<p><b>Étape 2 : $\mathbb U = \{z,\ |z| = 1\}\subset\mathbb C^*$.</b> $|1| = 1$, et si $|z| = |w| = 1$ : $|zw^{-1}| = \frac{|z|}{|w|} = 1$.</p>
<p><b>Étape 3 : $\mathbb U_n = \{z,\ z^n = 1\}$.</b> $1^n = 1$, et si $z^n = w^n = 1$ : $(zw^{-1})^n = \frac{z^n}{w^n} = 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\mathbb U\ \text{et}\ \mathbb U_n\ \text{sont des sous-groupes de}\ (\mathbb C^*, \times)}$, et $\mathbb U_n\subset\mathbb U$.</p>

<p class="ml">Exemple 4 : les sous-groupes de $\mathbb Z$</p>
<p><b>Étape 1 : Rappel.</b> Division euclidienne $a = nq + r$, $0\leq r \lt n$.</p>
<p><b>Étape 2 : Le candidat.</b> Soit $H\neq\{0\}$ un sous-groupe de $(\mathbb Z, +)$. Il contient un entier $> 0$ (si $a\in H$, $-a\in H$). Soit $n$ le plus petit élément $> 0$ de $H$.</p>
<p><b>Étape 3 : $n\mathbb Z\subset H$.</b> $H$ est stable par somme et opposé : $kn\in H$ pour tout $k\in\mathbb Z$.</p>
<p><b>Étape 4 : $H\subset n\mathbb Z$.</b> Pour $a\in H$, $a = nq + r$ : $r = a - qn\in H$ et $0\leq r \lt n$. Par minimalité de $n$, $r = 0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{H = n\mathbb Z}$.</p>

<h2 id="g-morph">5. Morphismes de groupes</h2>
<div class="sbox">$$\cV f(x*y) = \cV f(x)\star\cV f(y).\qquad\cV f(e) = e',\quad\cV f(x^{-1}) = \cV f(x)^{-1},\quad\cV f(x^n) = \cV f(x)^n.$$
$$\ker\cV f = \cV f^{-1}(\{e'\})\ \text{et}\ \operatorname{Im}\cV f\ \text{sont des sous-groupes}.\qquad\cV f\ \text{injectif}\iff\ker\cV f = \{e\}.$$</div>
<p>Un morphisme bijectif est un <b>isomorphisme</b>, et sa réciproque est un morphisme. Pour montrer qu'une partie est un sous-groupe, il suffit souvent de la voir comme un <b>noyau</b> ou une <b>image</b>.</p>

<p class="ml">Exemple 5 : $\exp$ est un isomorphisme</p>
<p><b>Étape 1 : Rappel.</b> Morphisme : $f(x + y) = f(x)f(y)$ ; bijectif : isomorphisme.</p>
<p><b>Étape 2 : Morphisme.</b> $\cV f = \exp:(\mathbb R, +)\to(\mathbb R_+^*, \times)$ : $e^{x + y} = e^xe^y$.</p>
<p><b>Étape 3 : Bijectif.</b> $\exp$ est une bijection de $\mathbb R$ sur $]0, +\infty[$, de réciproque $\ln$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(\mathbb R, +)\simeq(\mathbb R_+^*, \times)}$ ; et $\ln(xy) = \ln x + \ln y$ dit que $\ln$ est l'isomorphisme réciproque.</p>

<p class="ml">Exemple 6 : $z\mapsto z^n$ sur $\mathbb C^*$</p>
<p><b>Étape 1 : Rappel.</b> $\ker f$ et $\operatorname{Im}f$ ; injectif $\iff\ker f = \{1\}$.</p>
<p><b>Étape 2 : Morphisme.</b> $(zw)^n = z^nw^n$ ($\mathbb C^*$ est commutatif).</p>
<p><b>Étape 3 : Le noyau.</b> $\ker f = \{z,\ z^n = 1\} = \mathbb U_n$, de cardinal $n$ : pas injectif pour $n\geq2$.</p>
<p><b>Étape 4 : L'image.</b> Tout $w = \rho e^{i\theta}\neq0$ a une racine $n$-ième $\rho^{1/n}e^{i\theta/n}$ : surjectif.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\ker f = \mathbb U_n,\ \operatorname{Im}f = \mathbb C^*}$ (et on retrouve que $\mathbb U_n$ est un sous-groupe).</p>

<p class="ml">Exemple 7 : $SL_n$ est un sous-groupe</p>
<p><b>Étape 1 : Rappel.</b> Un noyau de morphisme est un sous-groupe.</p>
<p><b>Étape 2 : Le morphisme.</b> $\cV{\det}:(GL_n(\mathbb K), \times)\to(\mathbb K^*, \times)$, avec $\det(AB) = \det A\det B$.</p>
<p><b>Étape 3 : Le noyau.</b> $\ker\det = \{A,\ \det A = 1\} = SL_n(\mathbb K)$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{SL_n(\mathbb K)\ \text{est un sous-groupe de}\ GL_n(\mathbb K)}$, sans aucune vérification à la main.</p>

<h2 id="g-ann">6. Anneaux</h2>
<div class="sbox">$$(A, +, \times):\ (A, +)\ \text{groupe abélien},\ \times\ \text{associative avec neutre}\ 1_A,\ \text{distributive sur}\ +.$$
$$0\times a = 0,\qquad(-a)b = -(ab).\qquad\textbf{Si}\ ab = ba:\ (a + b)^n = \sum_k\binom nka^kb^{n-k},\quad a^n - b^n = (a - b)\sum_{k=0}^{n-1}a^kb^{n-1-k}.$$
$$A\ \textbf{intègre}:\ \text{commutatif},\ 1\neq0,\ ab = 0\Rightarrow a = 0\ \text{ou}\ b = 0.$$</div>
<p class="ml piege">Piège</p>
<p>Dans $\mathcal M_n(\mathbb K)$ ou $\mathcal F(\mathbb R, \mathbb R)$, $ab = 0$ n'implique <b>pas</b> $a = 0$ ou $b = 0$. Et le binôme exige $ab = ba$.</p>

<p class="ml">Exemple 8 : $1 - N$ est inversible si $N$ est nilpotent</p>
<p>$A$ un anneau, $N^p = 0$.</p>
<p><b>Étape 1 : Rappel.</b> $1$ commute avec $N$ : $1 - N^p = (1 - N)\sum_{k=0}^{p-1}N^k$.</p>
<p><b>Étape 2 : On applique.</b> $1$ et $N$ commutent : $(1 - N)(1 + N + \dots + N^{p-1}) = (1 + N + \dots + N^{p-1}) - (N + N^2 + \dots + N^p) = 1 - N^p$, et $N^p = 0$, donc ce produit vaut $1$.</p>
<p><b>Étape 3 : Dans l'autre sens.</b> Le même calcul donne $(1 + N + \dots + N^{p-1})(1 - N) = 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(1 - N)^{-1} = \sum_{k=0}^{p-1}N^k}$ (c'est la série géométrique, qui s'arrête).</p>

<p class="ml">Exemple 9 : un anneau non intègre</p>
<p><b>Étape 1 : Rappel.</b> Intègre : $fg = 0\Rightarrow f = 0$ ou $g = 0$.</p>
<p><b>Étape 2 : Deux fonctions.</b> Dans $\mathcal F(\mathbb R, \mathbb R)$ : $f = \mathbb 1_{]-\infty, 0]}$ et $g = \mathbb 1_{]0, +\infty[}$, toutes deux non nulles.</p>
<p><b>Étape 3 : Le produit.</b> Si $x\leq0$ : $g(x) = 0$, donc $f(x)g(x) = 1\times0 = 0$. Si $x > 0$ : $f(x) = 0$, donc $0\times1 = 0$. Ainsi $fg = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\mathcal F(\mathbb R, \mathbb R)\ \text{n'est pas intègre}}$. Même chose pour $\mathcal M_2$ : $\begin{pmatrix}0&1\\0&0\end{pmatrix}^2 = \begin{pmatrix}0\times0 + 1\times0&0\times1 + 1\times0\\0&0\end{pmatrix} = 0$.</p>

<h2 id="g-sa">7. Sous-anneaux, éléments inversibles</h2>
<div class="sbox">$$\cR B\ \text{sous-anneau de}\ A\iff1_A\in\cR B,\ \ \forall x, y\in\cR B,\ x - y\in\cR B\ \text{et}\ xy\in\cR B.\qquad A^\times\ \text{est un groupe pour}\ \times.$$</div>
<p class="ml">Exemple 10 : $\mathbb Z[\sqrt2]$</p>
<p>$\mathbb Z[\sqrt2] = \{a + b\sqrt2,\ a, b\in\mathbb Z\}$.</p>
<p><b>Étape 1 : Rappel.</b> Contient $1$, stable par différence et par produit.</p>
<p><b>Étape 2 : $1$.</b> $1 = 1 + 0\sqrt2$.</p>
<p><b>Étape 3 : Différence.</b> $(a + b\sqrt2) - (c + d\sqrt2) = (a - c) + (b - d)\sqrt2$.</p>
<p><b>Étape 4 : Produit.</b> On développe : $(a + b\sqrt2)(c + d\sqrt2) = ac + ad\sqrt2 + bc\sqrt2 + bd\underbrace{\sqrt2\sqrt2}_{2} = (ac + 2bd) + (ad + bc)\sqrt2$, coefficients entiers.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathbb Z[\sqrt2]\ \text{est un sous-anneau de}\ \mathbb R}$ (donc intègre).</p>

<p class="ml">Exemple 11 : les inversibles de $\mathbb Z[i]$</p>
<p><b>Étape 1 : Rappel.</b> On utilise une quantité <b>multiplicative</b> : $N(z) = |z|^2 = a^2 + b^2$ pour $z = a + ib$, avec $N(zw) = N(z)N(w)$.</p>
<p><b>Étape 2 : Si $z$ est inversible</b> dans $\mathbb Z[i]$ : $zw = 1$, et $N(zw) = |zw|^2 = |z|^2|w|^2 = N(z)N(w)$, donc $N(z)N(w) = N(1) = 1$. Deux entiers $\geq0$ de produit $1$ valent $1$ : $N(z) = 1$.</p>
<p><b>Étape 3 : On résout</b> $a^2 + b^2 = 1$ en entiers : si $|a|\geq1$ et $|b|\geq1$, $a^2 + b^2\geq2$ ; donc l'un est nul, et l'autre a un carré égal à $1$ : $(\pm1, 0)$ ou $(0, \pm1)$, soit $z\in\{1, -1, i, -i\}$.</p>
<p><b>Étape 4 : Réciproque.</b> $1\cdot1 = 1$, $(-1)(-1) = 1$, $i(-i) = -i^2 = -(-1) = 1$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathbb Z[i]^\times = \{1, -1, i, -i\} = \mathbb U_4}$.</p>

<h2 id="g-corps">8. Corps</h2>
<div class="sbox">$$\mathbb K\ \text{corps}:\ \text{anneau commutatif},\ 1\neq0,\ \text{tout élément non nul est inversible}.\qquad\text{Un corps est intègre}.$$</div>
<p class="ml">Exemple 12 : $\mathbb Q(\sqrt2)$ est un corps</p>
<p>$\mathbb Q(\sqrt2) = \{a + b\sqrt2,\ a, b\in\mathbb Q\}$.</p>
<p><b>Étape 1 : Rappel.</b> Sous-anneau de $\mathbb R$ (comme l'exemple 10), puis inverses.</p>
<p><b>Étape 2 : La quantité conjuguée.</b> $(a + b\sqrt2)(a - b\sqrt2) = a^2 - 2b^2$.</p>
<p><b>Étape 3 : Elle n'est pas nulle.</b> Si $a^2 = 2b^2$ avec $(a, b)\neq(0, 0)$, alors $b\neq0$ et $\sqrt2 = \big|\frac ab\big|\in\mathbb Q$ : absurde.</p>
<p><b>Étape 4 : L'inverse.</b> On multiplie en haut et en bas par $a - b\sqrt2$ :</p>
$$\frac1{a + b\sqrt2} = \frac{a - b\sqrt2}{(a + b\sqrt2)(a - b\sqrt2)} = \frac{a - b\sqrt2}{a^2 - 2b^2} = \underbrace{\frac a{a^2 - 2b^2}}_{\in\mathbb Q} + \underbrace{\frac{-b}{a^2 - 2b^2}}_{\in\mathbb Q}\sqrt2\in\mathbb Q(\sqrt2).$$
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathbb Q(\sqrt2)\ \text{est un corps}}$ (sous-corps de $\mathbb R$).</p>

<p class="ml">Bonus : $\mathbb Z/n\mathbb Z$ et l'ordre d'un élément <span class="hp">programme de Spé</span></p>
<p>Les anneaux $\mathbb Z/n\mathbb Z$, les groupes monogènes, l'ordre d'un élément et le théorème de Lagrange sont vus en Spé (Compléments d'algèbre). Le tableau interactif ci-dessous en donne déjà l'idée.</p>

<h2 id="g-enonce">9. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Montrer que $(H, *)$ est un groupe »</b><span>Le voir comme sous-groupe d'un groupe connu : neutre, $xy^{-1}\in H$.</span></div>
<div><b>« $H$ est un sous-groupe » et $H = \{x,\ f(x) = e'\}$</b><span>C'est un noyau de morphisme.</span></div>
<div><b>« Étudier la loi $*$ »</b><span>Associativité, commutativité, neutre, inversibles ; chercher une factorisation.</span></div>
<div><b>« $f$ est un morphisme injectif »</b><span>$\ker f = \{e\}$.</span></div>
<div><b>« Sous-groupes de $\mathbb Z$ »</b><span>Ce sont les $n\mathbb Z$ (division euclidienne).</span></div>
<div><b>« $B$ est un sous-anneau »</b><span>$1\in B$, stable par différence et produit.</span></div>
<div><b>« Trouver les inversibles »</b><span>Une norme multiplicative à valeurs entières.</span></div>
<div><b>« Est-ce un corps ? »</b><span>Quantité conjuguée pour inverser.</span></div>
<div><b>$N^p = 0$</b><span>$(1 - N)^{-1} = \sum_{k \lt p}N^k$.</span></div>
<div><b>Binôme dans un anneau</b><span>Vérifier que les deux éléments commutent.</span></div>
</div>

<h2 id="g-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Oublier de vérifier que la loi est interne (stabilité).</p>
<p><b>2.</b> $(xy)^{-1} = x^{-1}y^{-1}$ dans un groupe non commutatif.</p>
<p><b>3.</b> Croire qu'une réunion de sous-groupes est un sous-groupe.</p>
<p><b>4.</b> Simplifier $ab = ac$ en $b = c$ dans un anneau non intègre.</p>
<p><b>5.</b> Utiliser le binôme sans commutation.</p>
<p><b>6.</b> Oublier $1_A\in B$ pour un sous-anneau.</p>
<p><b>7.</b> Morphisme d'anneaux : oublier $f(1) = 1$.</p>
</div>

<h2 id="g-entrainement">S'entraîner</h2>
<div data-mlab="cayley"></div>
<div data-mlab="quizst"></div>

<h2 id="g-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : $x^2 = e$ pour tout $x$, alors $G$ est abélien</p>
<p><b>Étape 1 : Rappel.</b> $x^2 = e\iff x = x^{-1}$, et $(xy)^{-1} = y^{-1}x^{-1}$.</p>
<p><b>Étape 2 : Tout élément est son propre inverse.</b> $x^{-1} = x$ pour tout $x$.</p>
<p><b>Étape 3 : On l'applique à $xy$.</b> $xy = (xy)^{-1} = y^{-1}x^{-1} = yx$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{G\ \text{est abélien}}$.</p>

<p class="ml">Exercice 2 : réunion de deux sous-groupes</p>
<p>Montrer que $H\cup K$ est un sous-groupe si et seulement si $H\subset K$ ou $K\subset H$.</p>
<p><b>Étape 1 : Rappel.</b> Sous-groupe : stable par produit.</p>
<p><b>Étape 2 : $\Leftarrow$.</b> Si $H\subset K$, $H\cup K = K$ est un sous-groupe.</p>
<p><b>Étape 3 : $\Rightarrow$ par l'absurde.</b> Sinon, on prend $h\in H\setminus K$ et $k\in K\setminus H$. Alors $hk\in H\cup K$.</p>
<p><b>Étape 4 : La contradiction.</b> Si $hk\in H$, $k = h^{-1}(hk)\in H$ : faux. Si $hk\in K$, $h = (hk)k^{-1}\in K$ : faux.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{H\cup K\ \text{sous-groupe}\iff H\subset K\ \text{ou}\ K\subset H}$.</p>

<p class="ml">Exercice 3 : les morphismes de $(\mathbb Q, +)$ dans $(\mathbb Z, +)$</p>
<p><b>Étape 1 : Rappel.</b> $f(nx) = nf(x)$ pour un morphisme et $n\in\mathbb N$.</p>
<p><b>Étape 2 : On divise.</b> Pour $x\in\mathbb Q$ et $n\geq1$ : $f(x) = f\big(n\cdot\frac xn\big) = nf\big(\frac xn\big)$.</p>
<p><b>Étape 3 : Divisible par tout entier.</b> $f(x)\in\mathbb Z$ est donc divisible par tout $n\geq1$, en particulier par $|f(x)| + 1$.</p>
<p><b>Étape 4 : Conclusion.</b> Seul $0$ convient : $\cG{f = 0}$ est le seul morphisme.</p>

<h2 id="g-arbre">L'arbre des structures</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une structure à étudier</span><ul>
<li><div class="hr"><em>une loi $*$</em><a class="hl" href="#g-lci">associative, neutre, inversibles</a></div></li>
<li><div class="hr"><em>un groupe ?</em><span class="hq">Inclus dans un groupe connu ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#g-sg">sous-groupe : $e$, $xy^{-1}$</a></div></li>
<li><div class="hr"><em>c'est un noyau</em><a class="hl ok" href="#g-morph">$\ker f$ : sous-groupe d'office</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#g-grp">les 4 axiomes</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une application $f$</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>morphisme</em><a class="hl" href="#g-morph">$f(xy) = f(x)f(y)$</a></div></li>
<li><div class="hr"><em>injective</em><a class="hl ok" href="#g-morph">$\ker f = \{e\}$</a></div></li>
<li><div class="hr"><em>isomorphisme</em><a class="hl" href="#g-morph">morphisme bijectif</a></div></li>
</ul></div></li>
<li><div class="hr"><em>un anneau</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>sous-anneau</em><a class="hl" href="#g-sa">$1$, différence, produit</a></div></li>
<li><div class="hr"><em>les inversibles</em><a class="hl" href="#g-sa">norme multiplicative</a></div></li>
<li><div class="hr"><em>intègre ?</em><a class="hl" href="#g-ann">chercher $ab = 0$</a></div></li>
<li><div class="hr"><em>un corps</em><a class="hl end" href="#g-corps">quantité conjuguée</a></div></li>
</ul></div></li>
</ul></div></div>
`,
"Probabilités et variables aléatoires discrètes": R`
<nav class="msum"><a href="#w-not">Notations</a><a href="#w-esp">Espaces probabilisés</a><a href="#w-tot">Probabilités totales</a><a href="#w-lois">Géométrique, Poisson</a><a href="#w-espe">Espérance</a><a href="#w-var">Variance, covariance</a><a href="#w-gen">Fonctions génératrices</a><a href="#w-somme">Sommes indépendantes</a><a href="#w-lfgn">Loi des grands nombres</a><a href="#w-dens">Lois à densité</a><a href="#w-enonce">L'énoncé</a><a href="#w-erreurs">Erreurs</a><a href="#w-entrainement">S'entraîner</a><a href="#w-exos">Exercices</a><a href="#w-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les variables $\cB X$, $\cB Y$ et les événements. <span class="kR">rouge</span> : le système complet par lequel on conditionne. <span class="kO">orange</span> : les séries qu'on reconnaît (géométrique, exponentielle). <span class="kV">violet</span> : les paramètres $\cV p$, $\cV\lambda$, $\cV n$. <span class="kG">vert</span> : le résultat.</p>

<h2 id="w-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Espace probabilisé</td><td>$(\Omega, \mathcal A, P)$</td><td>$\mathcal A$ tribu : stable par complémentaire et réunion <b>dénombrable</b>.</td></tr>
<tr><td>Variable discrète</td><td>$X:\Omega\to E$, $X(\Omega)$ au plus dénombrable</td><td>$(X = x)\in\mathcal A$ pour tout $x$.</td></tr>
<tr><td>Fonction de répartition</td><td>$F_X(x) = P(X\leq x)$</td><td>Croissante, continue à droite, limites $0$ et $1$.</td></tr>
<tr><td>Géométrique</td><td>$\mathcal G(\cV p)$</td><td>Rang du premier succès.</td></tr>
<tr><td>Poisson</td><td>$\mathcal P(\cV\lambda)$</td><td>Événements rares.</td></tr>
<tr><td>Fonction génératrice</td><td>$G_X(t) = E(t^X)$</td><td>$X$ à valeurs dans $\mathbb N$.</td></tr>
</table>

<h2 id="w-esp">2. Espaces probabilisés, continuité monotone</h2>
<div class="sbox">$$\textbf{σ-additivité}:\ (A_n)\ \text{deux à deux disjoints}\Rightarrow P\Big(\bigcup A_n\Big) = \sum P(A_n).\qquad\textbf{Sous-additivité}:\ P\Big(\bigcup A_n\Big)\leq\sum P(A_n).$$
$$\textbf{Continuité croissante}:\ A_n\subset A_{n+1}\Rightarrow P\Big(\bigcup A_n\Big) = \lim P(A_n).\qquad\textbf{Décroissante}:\ A_{n+1}\subset A_n\Rightarrow P\Big(\bigcap A_n\Big) = \lim P(A_n).$$</div>
<p>Un événement de probabilité $1$ est <b>presque sûr</b> ; de probabilité $0$, <b>négligeable</b> (il n'est pas forcément vide).</p>
<p class="ml">La méthode « jamais » / « au moins une fois »</p>
<p>« Jamais » $= \bigcap_n B_n$ avec $B_n$ = « pas avant le rang $n$ », suite <b>décroissante</b> : on calcule $P(B_n)$ (événement fini) puis on passe à la limite.</p>

<p class="ml">Exemple 1 : ne jamais obtenir pile</p>
<p>On lance indéfiniment une pièce équilibrée. Probabilité de n'obtenir jamais pile ?</p>
<p><b>Étape 1 : Rappel.</b> Continuité décroissante : $P\big(\bigcap B_n\big) = \lim P(B_n)$ si $B_{n+1}\subset B_n$.</p>
<p><b>Étape 2 : Les événements.</b> $B_n$ = « face aux $n$ premiers lancers ». $B_{n+1}\subset B_n$, et « jamais pile » $= \bigcap_nB_n$.</p>
<p><b>Étape 3 : $P(B_n)$.</b> Lancers indépendants : $P(B_n) = \underbrace{\frac12\times\frac12\times\dots\times\frac12}_{n\ \text{fois}} = \big(\frac12\big)^n$.</p>
<p><b>Étape 4 : Conclusion.</b> Les $B_n$ décroissent, donc (continuité décroissante) $P\big(\bigcap B_n\big) = \lim P(B_n) = \lim\big(\frac12\big)^n = 0$ (car $0 \lt \frac12 \lt 1$) : $\cG{P(\text{jamais pile}) = 0}$. On obtient pile presque sûrement (mais « que des faces » n'est pas impossible).</p>

<h2 id="w-tot">3. Probabilités totales avec un système complet dénombrable</h2>
<div class="sbox">$$\cR{(B_n)_{n\in\mathbb N}}\ \text{système complet}:\quad P(A) = \sum_{n=0}^{+\infty}P(\cR{B_n})\,P_{\cR{B_n}}(A).\qquad\text{En particulier}:\ P(Y = k) = \sum_nP(X = n)\,P_{(X = n)}(Y = k).$$</div>
<p class="ml">Exemple 2 : un tri d'une loi de Poisson</p>
<p>$X\sim\mathcal P(\lambda)$ clients arrivent ; chacun achète avec probabilité $p$, indépendamment. Loi du nombre $Y$ d'acheteurs ?</p>
<p><b>Étape 1 : Rappel.</b> Probabilités totales sur $\cR{(X = n)_{n\in\mathbb N}}$.</p>
<p><b>Étape 2 : Sachant $X = n$.</b> $Y\sim\mathcal B(n, p)$ : $P_{(X = n)}(Y = k) = \binom nkp^k(1 - p)^{n-k}$ pour $n\geq k$, $0$ sinon.</p>
<p><b>Étape 3 : La somme.</b> Probabilités totales avec $(X = n)_{n\geq0}$ : $P(Y = k) = \sum_nP(X = n)P_{(X = n)}(Y = k)$. Les $n!$ se simplifient, on sort $\frac{p^k}{k!}$ et on écrit $\lambda^n = \lambda^k\lambda^{n-k}$ :</p>
$$P(Y = k) = \sum_{n\geq k}e^{-\lambda}\frac{\lambda^n}{n!}\cdot\frac{n!}{k!\,(n - k)!}p^k(1 - p)^{n-k} = e^{-\lambda}\frac{(\lambda p)^k}{k!}\sum_{m\geq0}\cO{\frac{(\lambda(1 - p))^m}{m!}}\ \ (m = n - k).$$
<p><b>Étape 4 : On reconnaît l'exponentielle.</b> $\sum_m\frac{x^m}{m!} = e^x$ avec $x = \lambda(1 - p)$ : la somme vaut $e^{\lambda(1 - p)} = e^{\lambda - \lambda p}$. Puis $e^{-\lambda}e^{\lambda - \lambda p} = e^{-\lambda + \lambda - \lambda p} = e^{-\lambda p}$, d'où $P(Y = k) = e^{-\lambda p}\frac{(\lambda p)^k}{k!}$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{Y\sim\mathcal P(\lambda p)}$.</p>

<h2 id="w-lois">4. Lois géométrique et de Poisson</h2>
<table class="mtab">
<tr><th>Loi</th><th>Modèle</th><th>$P(X = k)$</th><th>$E(X)$</th><th>$V(X)$</th><th>$G_X(t)$</th></tr>
<tr><td>$\mathcal B(n, p)$</td><td>succès en $n$ essais</td><td>$\binom nkp^kq^{n-k}$</td><td>$np$</td><td>$npq$</td><td>$(q + pt)^n$</td></tr>
<tr><td>$\mathcal G(\cV p)$</td><td>rang du 1<sup>er</sup> succès</td><td>$q^{k-1}p$, $k\geq1$</td><td>$\frac1p$</td><td>$\frac q{p^2}$</td><td>$\frac{pt}{1 - qt}$</td></tr>
<tr><td>$\mathcal P(\cV\lambda)$</td><td>événements rares</td><td>$e^{-\lambda}\frac{\lambda^k}{k!}$, $k\geq0$</td><td>$\lambda$</td><td>$\lambda$</td><td>$e^{\lambda(t - 1)}$</td></tr>
</table>
<p>Avec $q = 1 - p$. <b>Absence de mémoire</b> : $X\sim\mathcal G(p)\Rightarrow P_{(X > n)}(X > n + k) = P(X > k)$, et c'est la seule loi à valeurs dans $\mathbb N^*$ qui la vérifie. <b>Approximation</b> : si $np_n\to\lambda$, $P(X_n = k)\to e^{-\lambda}\frac{\lambda^k}{k!}$ pour $X_n\sim\mathcal B(n, p_n)$.</p>

<p class="ml">Exemple 3 : $P(X > n)$ et absence de mémoire</p>
<p>$X\sim\mathcal G(p)$.</p>
<p><b>Étape 1 : Rappel.</b> $(X > n)$ = « les $n$ premiers essais sont des échecs ».</p>
<p><b>Étape 2 : La queue.</b> $X > n$ signifie : les $n$ premiers essais sont des échecs, chacun de probabilité $q$, indépendants : $P(X > n) = q\times\dots\times q = q^n$.</p>
<p><b>Étape 3 : Le conditionnement.</b> $(X > n + k)\subset(X > n)$, donc :</p>
$$P_{(X > n)}(X > n + k) = \frac{P(X > n + k)}{P(X > n)} = \frac{q^{n+k}}{q^n} = q^k.$$
<p><b>Étape 4 : Conclusion.</b> $q^k = P(X > k)$ (étape 2 avec $n = k$), donc $\cG{P_{(X > n)}(X > n + k) = P(X > k)}$ : avoir déjà attendu ne change rien.</p>

<p class="ml">Exemple 4 : l'approximation par Poisson</p>
<p><b>Étape 1 : Rappel.</b> $\binom nk = \frac{n(n - 1)\cdots(n - k + 1)}{k!}$ et $\big(1 + \frac an\big)^n\to e^a$ (plus généralement $(1 - p_n)^n\to e^{-\lambda}$ si $np_n\to\lambda$).</p>
<p><b>Étape 2 : On écrit</b> à $k$ fixé, avec $\binom nk = \frac{n(n - 1)\cdots(n - k + 1)}{k!}$ et $p_n^k = \frac{(np_n)^k}{n^k}$ :</p>
$$P(X_n = k) = \frac{n(n - 1)\cdots(n - k + 1)}{n^k}\cdot\frac{(np_n)^k}{k!}\cdot(1 - p_n)^{n-k}.$$
<p><b>Étape 3 : Les trois morceaux.</b> 1<sup>er</sup> : $\frac nn\cdot\frac{n - 1}n\cdots\frac{n - k + 1}n$, $k$ facteurs qui tendent chacun vers $1$, donc $\to1$. 2<sup>e</sup> : $np_n\to\lambda$ donc $\to\frac{\lambda^k}{k!}$. 3<sup>e</sup> : $(1 - p_n)^n = e^{n\ln(1 - p_n)}$ et $n\ln(1 - p_n)\sim-np_n\to-\lambda$, donc $\to e^{-\lambda}$ ; et $(1 - p_n)^{-k}\to1^{-k} = 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{P(X_n = k)\to e^{-\lambda}\frac{\lambda^k}{k!}}$ : pour $n$ grand et $p$ petit, $\mathcal B(n, p)\approx\mathcal P(np)$.</p>

<h2 id="w-espe">5. Espérance</h2>
<div class="sbox">$$X\ \text{admet une espérance}\iff(x\,P(X = x))_{x\in X(\Omega)}\ \text{est sommable}.\qquad E(X) = \sum_xx\,P(X = x).$$
$$\textbf{Transfert}:\ E(f(X))\ \text{existe}\iff(f(x)P(X = x))\ \text{sommable, et}\ E(f(X)) = \sum_xf(x)P(X = x).$$
$$X\ \text{à valeurs dans}\ \mathbb N:\quad E(X) = \sum_{n\geq1}P(X\geq n).\qquad|X|\leq Y,\ E(Y)\ \text{finie}\Rightarrow E(X)\ \text{existe}.$$</div>
<p class="ml">Exemple 5 : l'espérance d'une géométrique, deux méthodes</p>
<p><b>Étape 1 : Rappel.</b> $\sum_{k\geq1}kx^{k-1} = \frac1{(1 - x)^2}$ pour $|x| \lt 1$ (dérivée de la série géométrique), et $E(X) = \sum_{n\geq1}P(X\geq n)$.</p>
<p><b>Étape 2 : Par la définition.</b> $P(X = k) = q^{k-1}p$, donc $E(X) = \sum_{k\geq1}kq^{k-1}p = p\sum_{k\geq1}kq^{k-1}$, et $\sum_{k\geq1}kq^{k-1} = \cO{\frac1{(1 - q)^2}}$ (dérivée de $\frac1{1 - q}$). Avec $1 - q = p$ : $E(X) = p\times\frac1{p^2} = \frac1p$.</p>
<p><b>Étape 3 : Par les queues.</b> $P(X\geq n) = P(X > n - 1) = q^{n-1}$, donc $E(X) = \sum_{n\geq1}q^{n-1} = 1 + q + q^2 + \dots = \cO{\frac1{1 - q}} = \frac1p$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{E(X) = \frac1p}$ : pour un dé, $p = \frac16$ et $\frac1{1/6} = 6$ : il faut en moyenne $6$ lancers pour obtenir un $6$.</p>

<p class="ml">Exemple 6 : $E\big(\frac1{X + 1}\big)$ pour $X\sim\mathcal P(\lambda)$</p>
<p><b>Étape 1 : Rappel.</b> Transfert : $E(f(X)) = \sum f(k)P(X = k)$ (termes positifs ici).</p>
<p><b>Étape 2 : On écrit.</b> Transfert : $E\big(\frac1{X + 1}\big) = \sum_{k\geq0}\frac1{k + 1}e^{-\lambda}\frac{\lambda^k}{k!}$. Or $(k + 1)\times k! = (k + 1)!$ et $\lambda^k = \frac{\lambda^{k+1}}\lambda$ : $= \frac{e^{-\lambda}}\lambda\sum_{k\geq0}\frac{\lambda^{k+1}}{(k + 1)!}$.</p>
<p><b>Étape 3 : On reconnaît.</b> On pose $j = k + 1$ : $\sum_{j\geq1}\frac{\lambda^j}{j!} = \sum_{j\geq0}\frac{\lambda^j}{j!} - \frac{\lambda^0}{0!} = \cO{e^\lambda - 1}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\frac{e^{-\lambda}}\lambda(e^\lambda - 1) = \frac{e^{-\lambda}e^\lambda - e^{-\lambda}}\lambda = \frac{1 - e^{-\lambda}}\lambda$ : $\cG{E\big(\frac1{X + 1}\big) = \frac{1 - e^{-\lambda}}\lambda}$.</p>

<h2 id="w-var">6. Variance, covariance, Cauchy-Schwarz</h2>
<div class="sbox">$$E(X^2)\ \text{finie}\Rightarrow E(X)\ \text{finie}.\qquad V(X) = E(X^2) - E(X)^2.\qquad|E(XY)|\leq\sqrt{E(X^2)}\sqrt{E(Y^2)}.$$
$$V\Big(\sum X_i\Big) = \sum V(X_i) + 2\sum_{i \lt j}\operatorname{Cov}(X_i, X_j).\qquad\rho(X, Y) = \frac{\operatorname{Cov}(X, Y)}{\sigma(X)\sigma(Y)}\in[-1, 1].$$</div>
<p class="ml">L'astuce des moments factoriels</p>
<p>Pour les lois avec des factorielles (Poisson, binomiale), on calcule $E(X(X - 1))$, plus simple que $E(X^2)$, puis $E(X^2) = E(X(X - 1)) + E(X)$.</p>
<p class="ml">Exemple 7 : la variance d'une loi de Poisson</p>
<p><b>Étape 1 : Rappel.</b> $V(X) = E(X(X - 1)) + E(X) - E(X)^2$.</p>
<p><b>Étape 2 : $E(X(X - 1))$.</b> Transfert. Les termes $k = 0, 1$ sont nuls ($k(k - 1) = 0$), et $\frac{k(k - 1)}{k!} = \frac1{(k - 2)!}$, $\lambda^k = \lambda^2\lambda^{k-2}$ :</p>
$$\sum_{k\geq2}k(k - 1)e^{-\lambda}\frac{\lambda^k}{k!} = \lambda^2e^{-\lambda}\sum_{k\geq2}\frac{\lambda^{k-2}}{(k - 2)!} = \lambda^2e^{-\lambda}\cO{e^\lambda} = \lambda^2.$$
<p><b>Étape 3 : On assemble.</b> $E(X) = \lambda$, donc $E(X^2) = E(X(X - 1)) + E(X) = \lambda^2 + \lambda$, et $V(X) = E(X^2) - E(X)^2 = \lambda^2 + \lambda - \lambda^2 = \lambda$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{V(X) = \lambda}$ (comme $E(X)$).</p>

<h2 id="w-gen">7. Fonctions génératrices</h2>
<div class="sbox">$$G_X(t) = E(t^X) = \sum_{n\geq0}P(X = n)\,t^n,\quad\text{rayon}\geq1,\quad G_X(1) = 1.\qquad G_X\ \textbf{caractérise la loi}:\ P(X = n) = \frac{G_X^{(n)}(0)}{n!}.$$
$$E(X)\ \text{finie}\iff G_X\ \text{dérivable en}\ 1,\ E(X) = G_X'(1).\qquad V(X) = G_X''(1) + G_X'(1) - G_X'(1)^2.$$
$$X, Y\ \text{indépendantes}\Rightarrow G_{X+Y} = G_XG_Y.$$</div>
<p class="ml">La méthode</p>
<p>Pour trouver la loi d'une <b>somme de variables indépendantes</b> : multiplier les fonctions génératrices, puis <b>reconnaître</b> la fonction génératrice d'une loi connue.</p>

<p class="ml">Exemple 8 : somme de deux Poisson indépendantes</p>
<p><b>Étape 1 : Rappel.</b> $G_{X+Y} = G_XG_Y$ et $G$ caractérise la loi. Pour $\mathcal P(\lambda)$ : $G(t) = e^{\lambda(t - 1)}$.</p>
<p><b>Étape 2 : $G$ d'une Poisson.</b> $G_X(t) = \sum_ne^{-\lambda}\frac{\lambda^n}{n!}t^n = e^{-\lambda}\sum_n\frac{(\lambda t)^n}{n!} = e^{-\lambda}\cO{e^{\lambda t}} = e^{\lambda t - \lambda} = e^{\lambda(t - 1)}$.</p>
<p><b>Étape 3 : Le produit.</b> Indépendance : $G_{X+Y}(t) = G_X(t)G_Y(t) = e^{\lambda(t - 1)}e^{\mu(t - 1)} = e^{\lambda(t - 1) + \mu(t - 1)} = e^{(\lambda + \mu)(t - 1)}$.</p>
<p><b>Étape 4 : Conclusion.</b> On reconnaît $\mathcal P(\lambda + \mu)$ : $\cG{X + Y\sim\mathcal P(\lambda + \mu)}$.</p>

<p class="ml">Exemple 9 : espérance et variance d'une géométrique par $G$</p>
<p><b>Étape 1 : Rappel.</b> $E = G'(1)$, $V = G''(1) + G'(1) - G'(1)^2$.</p>
<p><b>Étape 2 : $G$.</b> $G(t) = \sum_{k\geq1}q^{k-1}pt^k = pt\sum_{k\geq1}(qt)^{k-1} = pt\times\frac1{1 - qt} = \frac{pt}{1 - qt}$ pour $|qt| \lt 1$, soit $|t| \lt \frac1q$.</p>
<p><b>Étape 3 : Les dérivées.</b> On écrit $G(t) = \frac pq\Big(\frac1{1 - qt} - 1\Big)$ (vérification : $\frac1{1 - qt} - 1 = \frac{qt}{1 - qt}$). Avec $\big(\frac1{1 - qt}\big)' = \frac q{(1 - qt)^2}$ et $\big(\frac1{(1 - qt)^2}\big)' = \frac{2q}{(1 - qt)^3}$ :</p>
$$G'(t) = \frac pq\cdot\frac q{(1 - qt)^2} = \frac p{(1 - qt)^2},\qquad G''(t) = p\times(-2)(1 - qt)^{-3}\times(-q) = \frac{2pq}{(1 - qt)^3}.$$
<p>En $t = 1$, avec $1 - q = p$ : $G'(1) = \frac p{p^2} = \frac1p$ et $G''(1) = \frac{2pq}{p^3} = \frac{2q}{p^2}$.</p>
<p><b>Étape 4 : La variance.</b> $V = G''(1) + G'(1) - G'(1)^2 = \frac{2q}{p^2} + \frac1p - \frac1{p^2}$. Au dénominateur commun $p^2$ ($\frac1p = \frac p{p^2}$) : $V = \frac{2q + p - 1}{p^2}$, et $p - 1 = -q$, donc $V = \frac{2q - q}{p^2} = \frac q{p^2}$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{E(X) = \frac1p,\ V(X) = \frac q{p^2}}$.</p>

<h2 id="w-somme">8. Loi d'une somme de variables indépendantes</h2>
<div class="sbox">$$X, Y\ \text{indépendantes, à valeurs dans}\ \mathbb N:\quad P(X + Y = n) = \sum_{k=0}^nP(X = k)\,P(Y = n - k).$$</div>
<p class="ml">Exemple 10 : somme de deux géométriques</p>
<p>$X, Y\sim\mathcal G(p)$ indépendantes. Loi de $S = X + Y$ ?</p>
<p><b>Étape 1 : Rappel.</b> Formule de convolution, en respectant les valeurs possibles ($\geq1$).</p>
<p><b>Étape 2 : Les valeurs.</b> $S\geq2$. Pour $n\geq2$, $k$ va de $1$ à $n - 1$ (il faut $X\geq1$ et $Y = n - k\geq1$).</p>
<p><b>Étape 3 : La somme.</b> $P(S = n) = \sum_{k=1}^{n-1}P(X = k)P(Y = n - k) = \sum_{k=1}^{n-1}q^{k-1}p\cdot q^{n-k-1}p$, et $q^{k-1}q^{n-k-1} = q^{(k - 1) + (n - k - 1)} = q^{n-2}$ : chaque terme vaut $p^2q^{n-2}$, indépendant de $k$.</p>
<p><b>Étape 4 : Conclusion.</b> $k$ prend $n - 1$ valeurs : $\cG{P(S = n) = (n - 1)p^2q^{n-2},\ n\geq2}$ : rang du 2<sup>e</sup> succès.</p>

<h2 id="w-lfgn">9. Inégalités, loi faible des grands nombres</h2>
<div class="sbox">$$\textbf{Markov}:\ P(|X|\geq a)\leq\frac{E(|X|)}a.\qquad\textbf{Bienaymé-Tchebychev}:\ P(|X - E(X)|\geq\varepsilon)\leq\frac{V(X)}{\varepsilon^2}.$$
$$\textbf{Loi faible des grands nombres}:\ (X_n)\ \text{i.i.d., moment d'ordre 2},\ m = E(X_1),\ \sigma^2 = V(X_1):\quad P\Big(\Big|\frac{S_n}n - m\Big|\geq\varepsilon\Big)\leq\frac{\sigma^2}{n\varepsilon^2}\to0.$$</div>
<p class="ml">Exemple 11 : la démonstration de la loi faible</p>
<p><b>Étape 1 : Rappel.</b> Bienaymé-Tchebychev, et $V\big(\sum X_i\big) = \sum V(X_i)$ pour des variables indépendantes.</p>
<p><b>Étape 2 : Espérance.</b> Linéarité : $E\big(\frac{S_n}n\big) = \frac1nE(X_1 + \dots + X_n) = \frac1n(m + \dots + m) = \frac1n\times nm = m$.</p>
<p><b>Étape 3 : Variance.</b> $V(aY) = a^2V(Y)$ et, par indépendance, $V(S_n) = V(X_1) + \dots + V(X_n) = n\sigma^2$ : $V\big(\frac{S_n}n\big) = \frac1{n^2}\times n\sigma^2 = \frac{\sigma^2}n$.</p>
<p><b>Étape 4 : On applique BT</b> ($P(|Y - E(Y)|\geq\varepsilon)\leq\frac{V(Y)}{\varepsilon^2}$) à $Y = \frac{S_n}n$ : $P\big(\big|\frac{S_n}n - m\big|\geq\varepsilon\big)\leq\frac{\sigma^2/n}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2}\to0$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\frac{S_n}n\to m\ \text{en probabilité}}$ : la moyenne empirique se rapproche de l'espérance.</p>

<h2 id="w-dens">10. Variables à densité <span class="hp">hors programme</span></h2>
<p>Elles ne sont pas au programme de MP (seulement les variables discrètes), mais on les croise en physique et dans certaines écoles.</p>
<div class="sbox">$$P(a\leq X\leq b) = \int_a^bf(t)\,dt,\quad f\geq0,\ \int_{\mathbb R}f = 1.\qquad E(X) = \int_{\mathbb R}tf(t)\,dt.$$</div>
<table class="mtab">
<tr><th>Loi</th><th>Densité</th><th>$E(X)$</th><th>$V(X)$</th></tr>
<tr><td>Uniforme $\mathcal U([a, b])$</td><td>$\frac1{b - a}$ sur $[a, b]$</td><td>$\frac{a + b}2$</td><td>$\frac{(b - a)^2}{12}$</td></tr>
<tr><td>Exponentielle $\mathcal E(\lambda)$</td><td>$\lambda e^{-\lambda t}$, $t\geq0$</td><td>$\frac1\lambda$</td><td>$\frac1{\lambda^2}$</td></tr>
<tr><td>Normale $\mathcal N(m, \sigma^2)$</td><td>$\frac1{\sigma\sqrt{2\pi}}e^{-\frac{(t - m)^2}{2\sigma^2}}$</td><td>$m$</td><td>$\sigma^2$</td></tr>
</table>
<p class="ml">Exemple 12 : l'espérance d'une loi exponentielle</p>
<p><b>Étape 1 : Rappel.</b> $E(X) = \int_0^{+\infty}t\lambda e^{-\lambda t}\,dt$, IPP sur un intervalle (fiche Intégration sur un intervalle).</p>
<p><b>Étape 2 : IPP</b> avec $u = t$, $v = -e^{-\lambda t}$ : $\int_0^{+\infty}t\lambda e^{-\lambda t}\,dt = \big[-te^{-\lambda t}\big]_0^{+\infty} + \int_0^{+\infty}e^{-\lambda t}\,dt$.</p>
<p><b>Étape 3 : Les morceaux.</b> Crochet : en $0$, $-0\times e^0 = 0$ ; en $+\infty$, $te^{-\lambda t}\to0$ (croissances comparées) : il vaut $0 - 0 = 0$. Et $\int_0^{+\infty}e^{-\lambda t}\,dt = \big[-\frac{e^{-\lambda t}}\lambda\big]_0^{+\infty} = 0 - \big(-\frac1\lambda\big) = \frac1\lambda$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{E(X) = \frac1\lambda}$ : c'est l'analogue continu de la loi géométrique (sans mémoire elle aussi).</p>

<h2 id="w-enonce">11. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Jamais », « au moins une fois », « infiniment »</b><span>Suite monotone d'événements, continuité croissante ou décroissante.</span></div>
<div><b>« Rang du premier succès »</b><span>Loi géométrique, $P(X > n) = q^n$.</span></div>
<div><b>Un nombre aléatoire $N$ d'essais</b><span>Probabilités totales sur $(N = n)_n$, puis reconnaître une série.</span></div>
<div><b>$n$ grand, $p$ petit</b><span>Approximation $\mathcal B(n, p)\approx\mathcal P(np)$.</span></div>
<div><b>« $E(X)$ existe ? »</b><span>Sommabilité de $(x\,P(X = x))$, ou domination $|X|\leq Y$.</span></div>
<div><b>$X$ à valeurs dans $\mathbb N$, $E(X)$</b><span>$\sum_{n\geq1}P(X\geq n)$, souvent plus simple.</span></div>
<div><b>Factorielles dans la loi</b><span>$E(X(X - 1))$ pour la variance.</span></div>
<div><b>« Loi de $X + Y$ », indépendantes</b><span>Convolution, ou produit des fonctions génératrices.</span></div>
<div><b>« $E$ et $V$ à partir de $G_X$ »</b><span>$G'(1)$ et $G''(1) + G'(1) - G'(1)^2$.</span></div>
<div><b>« $P(X\text{ pair})$ »</b><span>$\frac{G_X(1) + G_X(-1)}2$.</span></div>
<div><b>« Moyenne de $n$ essais »</b><span>Loi faible des grands nombres, Bienaymé-Tchebychev.</span></div>
</div>

<h2 id="w-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Calculer $E(X)$ sans vérifier la sommabilité (ou la convergence absolue).</p>
<p><b>2.</b> Confondre $\mathcal G(p)$ sur $\mathbb N^*$ (rang du premier succès) avec le nombre d'échecs avant (sur $\mathbb N$).</p>
<p><b>3.</b> $G_{X+Y} = G_XG_Y$ sans indépendance.</p>
<p><b>4.</b> Les bornes de la convolution : respecter les valeurs possibles de chaque variable.</p>
<p><b>5.</b> Dire qu'un événement de probabilité nulle est impossible.</p>
<p><b>6.</b> Oublier que $V(X)$ demande $E(X^2)$ finie.</p>
</div>

<h2 id="w-entrainement">S'entraîner</h2>
<div data-mlab="poisapp"></div>
<div data-mlab="lfgn"></div>
<div data-mlab="quizpd"></div>

<h2 id="w-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : le minimum de deux géométriques</p>
<p>$X\sim\mathcal G(p_1)$, $Y\sim\mathcal G(p_2)$ indépendantes, $M = \min(X, Y)$.</p>
<p><b>Étape 1 : Rappel.</b> $(M > n) = (X > n)\cap(Y > n)$, et $P(X > n) = q^n$ caractérise $\mathcal G(1 - q)$.</p>
<p><b>Étape 2 : La queue.</b> $(M > n) = (X > n)\cap(Y > n)$ (le min dépasse $n$ si les deux le dépassent). Indépendance et $P(X > n) = q_1^n$ : $P(M > n) = q_1^nq_2^n = (q_1q_2)^n$.</p>
<p><b>Étape 3 : La loi.</b> $P(M = n) = P(M > n - 1) - P(M > n) = (q_1q_2)^{n-1} - (q_1q_2)^n = (q_1q_2)^{n-1}(1 - q_1q_2)$ (on factorise $(q_1q_2)^{n-1}$).</p>
<p><b>Étape 4 : Conclusion.</b> C'est $P(M = n) = Q^{n-1}P$ avec $P = 1 - q_1q_2$ et $Q = q_1q_2 = 1 - P$ : $\cG{M\sim\mathcal G(1 - q_1q_2)}$.</p>

<p class="ml">Exercice 2 : $E(X) = \sum_{n\geq1}P(X\geq n)$</p>
<p><b>Étape 1 : Rappel.</b> Famille positive : on peut intervertir les sommes (fiche Familles sommables).</p>
<p><b>Étape 2 : On écrit</b> $P(X\geq n) = \sum_{k\geq n}P(X = k)$, donc $\sum_{n\geq1}P(X\geq n) = \sum_{n\geq1}\sum_{k\geq n}P(X = k)$.</p>
<p><b>Étape 3 : On intervertit</b> (termes positifs). Le couple $(n, k)$ vérifie $1\leq n\leq k$ : pour $k$ fixé, $n$ va de $1$ à $k$, soit $k$ termes égaux à $P(X = k)$. On obtient $\sum_{k\geq1}kP(X = k)$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\sum_{n\geq1}P(X\geq n) = E(X)}$, dans $[0, +\infty]$.</p>

<p class="ml">Exercice 3 : une Poisson est paire avec quelle probabilité ?</p>
<p><b>Étape 1 : Rappel.</b> $G_X(t) = \sum P(X = n)t^n$ ; en $t = -1$, les termes impairs changent de signe.</p>
<p><b>Étape 2 : On combine.</b> $G_X(1) = \sum P(X = n)$ et $G_X(-1) = \sum(-1)^nP(X = n)$. En additionnant, $1 + (-1)^n$ vaut $2$ si $n$ pair, $0$ si $n$ impair : $\frac{G_X(1) + G_X(-1)}2 = \sum_{n\ \text{pair}}P(X = n) = P(X\ \text{pair})$.</p>
<p><b>Étape 3 : On calcule.</b> $G_X(t) = e^{\lambda(t - 1)}$ : $G_X(1) = e^0 = 1$ et $G_X(-1) = e^{\lambda(-1 - 1)} = e^{-2\lambda}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{P(X\ \text{pair}) = \frac{1 + e^{-2\lambda}}2}$, toujours $> \frac12$.</p>

<h2 id="w-arbre">L'arbre des probabilités discrètes</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question de probabilité</span><ul>
<li><div class="hr"><em>un événement infini</em><a class="hl" href="#w-esp">continuité monotone</a></div></li>
<li><div class="hr"><em>une loi à trouver</em><span class="hq">Comment est construite $Y$ ?</span><ul>
<li><div class="hr"><em>premier succès</em><a class="hl ok" href="#w-lois">géométrique</a></div></li>
<li><div class="hr"><em>nombre aléatoire d'essais</em><a class="hl" href="#w-tot">probabilités totales sur $(N = n)$</a></div></li>
<li><div class="hr"><em>somme indépendante</em><a class="hl" href="#w-gen">produit des $G$, ou convolution</a></div></li>
<li><div class="hr"><em>min, max</em><a class="hl" href="#w-exos">queues $P(M > n)$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>espérance, variance</em><span class="hq">Quelle méthode ?</span><ul>
<li><div class="hr"><em>valeurs dans $\mathbb N$</em><a class="hl" href="#w-espe">$\sum P(X\geq n)$</a></div></li>
<li><div class="hr"><em>factorielles</em><a class="hl" href="#w-var">$E(X(X - 1))$</a></div></li>
<li><div class="hr"><em>$G_X$ connue</em><a class="hl ok" href="#w-gen">$G'(1)$, $G''(1)$</a></div></li>
<li><div class="hr"><em>$E(f(X))$</em><a class="hl" href="#w-espe">transfert, sommabilité</a></div></li>
</ul></div></li>
<li><div class="hr"><em>$n$ grand</em><span class="hq">Quoi ?</span><ul>
<li><div class="hr"><em>$p$ petit</em><a class="hl" href="#w-lois">approximation de Poisson</a></div></li>
<li><div class="hr"><em>une moyenne</em><a class="hl end" href="#w-lfgn">loi faible, Tchebychev</a></div></li>
</ul></div></li>
</ul></div></div>
`,
"Espaces vectoriels et dimension finie": R`
<nav class="msum"><a href="#k-not">Notations</a><a href="#k-sev">Sous-espaces</a><a href="#k-vect">Vect, génératrices</a><a href="#k-libre">Familles libres</a><a href="#k-somme">Sommes, supplémentaires</a><a href="#k-base">Bases, dimension</a><a href="#k-dimf">Sev en dimension finie</a><a href="#k-rang">Rang d'une famille</a><a href="#k-enonce">L'énoncé</a><a href="#k-erreurs">Erreurs</a><a href="#k-entrainement">S'entraîner</a><a href="#k-exos">Exercices</a><a href="#k-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les vecteurs $\cB{u_1}, \dots, \cB{u_p}$. <span class="kR">rouge</span> : les sous-espaces $\cR F$, $\cR G$. <span class="kO">orange</span> : les coefficients $\cO{\lambda_i}$ des combinaisons. <span class="kV">violet</span> : les dimensions. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="k-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Espaces de référence</td><td>$\mathbb K^n$, $\mathbb K[X]$, $\mathbb K_n[X]$, $\mathcal M_{n,p}(\mathbb K)$, $\mathcal F(X, \mathbb K)$, $\mathbb K^{\mathbb N}$</td><td>Dimensions : $n$, $\infty$, $n + 1$, $np$, $\infty$, $\infty$.</td></tr>
<tr><td>Sous-espace engendré</td><td>$\operatorname{Vect}(u_1, \dots, u_p)$</td><td>Toutes les combinaisons $\sum\lambda_iu_i$.</td></tr>
<tr><td>Somme, somme directe</td><td>$F + G$, $F\oplus G$</td><td>$F\oplus G$ : $F\cap G = \{0\}$.</td></tr>
<tr><td>Dimension, rang</td><td>$\dim E$, $\operatorname{rg}(u_1, \dots, u_p)$</td><td>$\operatorname{rg} = \dim\operatorname{Vect}$.</td></tr>
</table>

<h2 id="k-sev">2. Sous-espaces vectoriels</h2>
<div class="sbox">$$\cR F\ \text{sev de}\ E\iff\cR F\subset E,\quad0_E\in\cR F,\quad\forall x, y\in\cR F,\ \forall\cO\lambda\in\mathbb K,\ \cO\lambda x + y\in\cR F.$$</div>
<p class="ml">Les trois méthodes, de la plus rapide à la plus longue</p>
<p><b>1.</b> Écrire $F = \operatorname{Vect}(\dots)$ : c'est un sev. <b>2.</b> Écrire $F = \ker f$ avec $f$ linéaire. <b>3.</b> La caractérisation ci-dessus. Pour montrer que $F$ n'est <b>pas</b> un sev : $0\notin F$, ou deux vecteurs dont la somme sort.</p>

<p class="ml">Exemple 1 : un plan de $\mathbb R^3$</p>
<p>$F = \{(x, y, z),\ x + y - 2z = 0\}$. Sev ? Une base ?</p>
<p><b>Étape 1 : Rappel.</b> Écrire $F$ comme un $\operatorname{Vect}$ : on exprime une inconnue en fonction des autres.</p>
<p><b>Étape 2 : On paramètre.</b> On isole $x$ : $x + y - 2z = 0\iff x = -y + 2z$, avec $y, z$ libres. Donc $(x, y, z) = (-y + 2z,\ y,\ z) = (-y, y, 0) + (2z, 0, z) = y(-1, 1, 0) + z(2, 0, 1)$.</p>
<p><b>Étape 3 : On reconnaît.</b> $F = \operatorname{Vect}\big(\cB{(-1, 1, 0)}, \cB{(2, 0, 1)}\big)$ : c'est un sev.</p>
<p><b>Étape 4 : Libre.</b> Si $y(-1, 1, 0) + z(2, 0, 1) = (-y + 2z, y, z) = (0, 0, 0)$, la 2<sup>e</sup> coordonnée donne $y = 0$ et la 3<sup>e</sup> $z = 0$ : la famille est libre.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{F\ \text{est un plan de base}\ ((-1, 1, 0), (2, 0, 1))}$.</p>

<p class="ml">Exemple 2 : sev ou pas ?</p>
<p>Dans $\mathcal C(\mathbb R)$ : $A = \{f,\ f(0) = 0\}$ et $B = \{f,\ f(0) = 1\}$.</p>
<p><b>Étape 1 : Rappel.</b> Un sev contient $0$ et est stable par $\lambda f + g$.</p>
<p><b>Étape 2 : $A$.</b> La fonction nulle vaut $0$ en $0$ : elle est dans $A$. Si $f(0) = g(0) = 0$ : $(\lambda f + g)(0) = \lambda f(0) + g(0) = \lambda\times0 + 0 = 0$. Donc $A$ est un sev (c'est $\ker(f\mapsto f(0))$).</p>
<p><b>Étape 3 : $B$.</b> La fonction nulle vaut $0\neq1$ en $0$ : $0\notin B$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{A\ \text{est un sev},\ B\ \text{n'en est pas un}}$ (une contrainte avec second membre non nul n'en est jamais un).</p>

<h2 id="k-vect">3. Vect, familles génératrices</h2>
<div class="sbox">$$\operatorname{Vect}(\cB{u_1}, \dots, \cB{u_p}) = \Big\{\sum\cO{\lambda_i}\cB{u_i}\Big\}:\ \text{le plus petit sev contenant les}\ u_i.\qquad(u_i)\ \text{génératrice de}\ E\iff\operatorname{Vect}(u_i) = E.$$</div>
<p>On ne change pas $\operatorname{Vect}$ en ajoutant à un vecteur une combinaison des autres, en multipliant un vecteur par $\lambda\neq0$, ou en retirant un vecteur combinaison des autres.</p>
<p class="ml">Exemple 3 : appartenir à un Vect</p>
<p>$w = (1, 2, 3)\in\operatorname{Vect}\big((1, 1, 1), (0, 1, 2)\big)$ ?</p>
<p><b>Étape 1 : Rappel.</b> $w\in\operatorname{Vect}(u, v)\iff\exists a, b,\ w = au + bv$ : un système.</p>
<p><b>Étape 2 : Le système.</b> $a(1, 1, 1) + b(0, 1, 2) = (a, a + b, a + 2b) = (1, 2, 3)$.</p>
<p><b>Étape 3 : On résout.</b> 1<sup>re</sup> coordonnée : $a = 1$. 2<sup>e</sup> : $a + b = 2$, donc $b = 2 - 1 = 1$. 3<sup>e</sup> (contrôle) : $a + 2b = 1 + 2\times1 = 3$ : vérifiée.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{w = u + v\in\operatorname{Vect}(u, v)}$.</p>

<h2 id="k-libre">4. Familles libres</h2>
<div class="sbox">$$(\cB{u_1}, \dots, \cB{u_p})\ \text{libre}\iff\Big(\sum\cO{\lambda_i}\cB{u_i} = 0\Rightarrow\forall i,\ \cO{\lambda_i} = 0\Big).$$</div>
<p class="ml">Les méthodes</p>
<p><b>Vecteurs de $\mathbb K^n$</b> : un système homogène (ou le rang). <b>Fonctions</b> : évaluer en des points bien choisis, dériver, ou regarder en $+\infty$. <b>Polynômes</b> : degrés échelonnés $\Rightarrow$ libre. <b>Famille orthogonale</b> de vecteurs non nuls $\Rightarrow$ libre.</p>
<p class="ml piege">Piège</p>
<p>Une famille de trois vecteurs <b>deux à deux non colinéaires</b> peut être liée : $(1, 0)$, $(0, 1)$, $(1, 1)$.</p>

<p class="ml">Exemple 4 : trois vecteurs de $\mathbb R^3$</p>
<p>$u_1 = (1, 1, 0)$, $u_2 = (1, 0, 1)$, $u_3 = (0, 1, 1)$.</p>
<p><b>Étape 1 : Rappel.</b> On résout $\lambda_1u_1 + \lambda_2u_2 + \lambda_3u_3 = 0$.</p>
<p><b>Étape 2 : Le système.</b></p>
$$\left\{\begin{aligned}\lambda_1 + \lambda_2 &= 0\\\lambda_1 + \lambda_3 &= 0\\\lambda_2 + \lambda_3 &= 0\end{aligned}\right.$$
<p><b>Étape 3 : On résout.</b> On additionne les trois lignes : $2\lambda_1 + 2\lambda_2 + 2\lambda_3 = 0$, donc $\lambda_1 + \lambda_2 + \lambda_3 = 0$. On retire la 1<sup>re</sup> équation ($\lambda_1 + \lambda_2 = 0$) : $\lambda_3 = 0$. La 2<sup>e</sup> donne $\lambda_1 = -\lambda_3 = 0$, la 3<sup>e</sup> donne $\lambda_2 = -\lambda_3 = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(u_1, u_2, u_3)\ \text{est libre}}$.</p>

<p class="ml">Exemple 5 : des fonctions</p>
<p>$(\cos, \sin)$ est-elle libre dans $\mathcal F(\mathbb R, \mathbb R)$ ?</p>
<p><b>Étape 1 : Rappel.</b> Pour des fonctions, on évalue l'égalité en des points bien choisis.</p>
<p><b>Étape 2 : L'hypothèse.</b> $a\cos x + b\sin x = 0$ pour <b>tout</b> réel $x$.</p>
<p><b>Étape 3 : En $x = 0$.</b> $\cos0 = 1$, $\sin0 = 0$ : $a\times1 + b\times0 = 0$, donc $a = 0$. <b>En $x = \frac\pi2$</b> : $\cos\frac\pi2 = 0$, $\sin\frac\pi2 = 1$ : $0 + b = 0$, donc $b = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(\cos, \sin)\ \text{est libre}}$.</p>

<p class="ml">Exemple 6 : des polynômes de degrés échelonnés</p>
<p><b>Étape 1 : Rappel.</b> Le degré d'une somme est le plus grand degré quand il n'y a qu'un seul terme de ce degré.</p>
<p><b>Étape 2 : L'hypothèse.</b> $\deg P_k = k$ et $\sum_{k=0}^n\lambda_kP_k = 0$, avec des $\lambda_k$ non tous nuls.</p>
<p><b>Étape 3 : Le plus grand indice.</b> Soit $m$ le plus grand $k$ avec $\lambda_k\neq0$. La somme est de degré exactement $m$, donc non nulle.</p>
<p><b>Étape 4 : Conclusion.</b> Contradiction : $\cG{(P_0, \dots, P_n)\ \text{est libre}}$, et c'est une base de $\mathbb K_n[X]$ (§6).</p>

<h2 id="k-somme">5. Somme, somme directe, supplémentaires</h2>
<div class="sbox">$$F + G = \{x + y,\ x\in F,\ y\in G\}.\qquad F\oplus G\ \text{(directe)}\iff F\cap G = \{0\}\iff\text{décomposition unique}.$$
$$F\ \text{et}\ G\ \text{supplémentaires}:\ E = F\oplus G\iff\forall x\in E,\ \exists!(x_F, x_G)\in F\times G,\ x = x_F + x_G.$$</div>
<p class="ml">La méthode analyse-synthèse</p>
<p><b>Analyse</b> : si $x = x_F + x_G$, on trouve des formules pour $x_F$, $x_G$ (donc unicité). <b>Synthèse</b> : on vérifie que ces formules marchent (donc existence).</p>

<p class="ml">Exemple 7 : fonctions paires et impaires</p>
<p>Montrer $\mathcal F(\mathbb R, \mathbb R) = \mathcal P\oplus\mathcal I$.</p>
<p><b>Étape 1 : Rappel.</b> Analyse-synthèse.</p>
<p><b>Étape 2 : Analyse.</b> Si $f = p + i$ ($p$ paire, $i$ impaire), alors $f(-x) = p(-x) + i(-x) = p(x) - i(x)$. On additionne avec $f(x) = p(x) + i(x)$ : $f(x) + f(-x) = 2p(x)$ ; on soustrait : $f(x) - f(-x) = 2i(x)$. D'où :</p>
$$p(x) = \frac{f(x) + f(-x)}2,\qquad i(x) = \frac{f(x) - f(-x)}2.$$
<p><b>Étape 3 : Unicité.</b> $p$ et $i$ sont déterminés par $f$.</p>
<p><b>Étape 4 : Synthèse.</b> $p(-x) = \frac{f(-x) + f(x)}2 = p(x)$ : paire. $i(-x) = \frac{f(-x) - f(x)}2 = -i(x)$ : impaire. Et $p + i = \frac{f(x) + f(-x) + f(x) - f(-x)}2 = \frac{2f(x)}2 = f(x)$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\mathcal F(\mathbb R, \mathbb R) = \mathcal P\oplus\mathcal I}$ (exemple : $e^x = \operatorname{ch}x + \operatorname{sh}x$).</p>

<p class="ml">Exemple 8 : un plan et une droite de $\mathbb R^3$</p>
<p>$P:\ x + y + z = 0$ et $D = \operatorname{Vect}(1, 1, 1)$.</p>
<p><b>Étape 1 : Rappel.</b> En dimension finie : $F\cap G = \{0\}$ et $\dim F + \dim G = \dim E$ suffisent (§7).</p>
<p><b>Étape 2 : L'intersection.</b> Un vecteur de $D$ s'écrit $\lambda(1, 1, 1) = (\lambda, \lambda, \lambda)$. Il est dans $P$ si $\lambda + \lambda + \lambda = 0$, soit $3\lambda = 0$, $\lambda = 0$ : $P\cap D = \{0\}$.</p>
<p><b>Étape 3 : Les dimensions.</b> $P$ est un plan ($x = -y - z$, deux paramètres libres) : $\dim P = 2$ ; $\dim D = 1$. $\dim P + \dim D = 2 + 1 = 3 = \dim\mathbb R^3$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\mathbb R^3 = P\oplus D}$.</p>

<h2 id="k-base">6. Bases, dimension</h2>
<div class="sbox">$$\text{Base} = \text{libre et génératrice}\iff\text{tout}\ x\ \text{s'écrit de façon unique}\ \sum x_ie_i.$$
$$\textbf{Base incomplète}:\ \text{toute famille libre se complète en une base}.\qquad\text{En dimension}\ n:\ \text{libre à}\ n\ \text{vecteurs}\iff\text{génératrice à}\ n\ \text{vecteurs}\iff\text{base}.$$</div>
<p>Dans un espace de dimension $n$ : une famille libre a au plus $n$ vecteurs, une famille génératrice au moins $n$. $\dim\mathbb K_n[X] = n + 1$, $\dim\mathcal M_{n,p}(\mathbb K) = np$.</p>

<p class="ml">Exemple 9 : une base de $\mathbb R_2[X]$ et des coordonnées</p>
<p>Montrer que $\mathcal B = (1, X - 1, (X - 1)^2)$ est une base, et donner les coordonnées de $X^2$.</p>
<p><b>Étape 1 : Rappel.</b> Degrés échelonnés $\Rightarrow$ libre ; $3$ vecteurs libres en dimension $3$ $\Rightarrow$ base.</p>
<p><b>Étape 2 : Base.</b> Degrés $0, 1, 2$ : libre (exemple 6). $\dim\mathbb R_2[X] = 3$ : c'est une base.</p>
<p><b>Étape 3 : Les coordonnées.</b> On écrit $X = (X - 1) + 1$ et on développe :</p>
$$X^2 = \big(\underbrace{(X - 1)}_{a} + \underbrace{1}_{b}\big)^2 = a^2 + 2ab + b^2 = (X - 1)^2 + 2(X - 1) + 1.$$
<p>Contrôle : $(X - 1)^2 + 2(X - 1) + 1 = X^2 - 2X + 1 + 2X - 2 + 1 = X^2$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{X^2\ \text{a pour coordonnées}\ (1, 2, 1)\ \text{dans}\ \mathcal B}$ (c'est la formule de Taylor en $1$).</p>

<h2 id="k-dimf">7. Sous-espaces en dimension finie</h2>
<div class="sbox">$$F\subset E:\ \dim F\leq\dim E,\ \text{et}\ \dim F = \dim E\Rightarrow F = E.\qquad\textbf{Grassmann}:\ \dim(F + G) = \dim F + \dim G - \dim(F\cap G).$$
$$E = F\oplus G\iff F\cap G = \{0\}\ \text{et}\ \dim F + \dim G = \dim E\iff F + G = E\ \text{et}\ \dim F + \dim G = \dim E.$$</div>
<p class="ml">Exemple 10 : deux plans de $\mathbb R^3$ se coupent</p>
<p><b>Étape 1 : Rappel.</b> Grassmann.</p>
<p><b>Étape 2 : On majore la somme.</b> $P_1 + P_2\subset\mathbb R^3$, donc $\dim(P_1 + P_2)\leq3$.</p>
<p><b>Étape 3 : On applique.</b> $\dim(P_1\cap P_2) = 2 + 2 - \dim(P_1 + P_2)\geq4 - 3 = 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{P_1\cap P_2\ \text{contient au moins une droite}}$ (et c'est un plan si $P_1 = P_2$).</p>

<h2 id="k-rang">8. Rang d'une famille</h2>
<div class="sbox">$$\operatorname{rg}(u_1, \dots, u_p) = \dim\operatorname{Vect}(u_1, \dots, u_p)\leq p.\qquad\text{libre}\iff\operatorname{rg} = p.\qquad\text{Il se calcule par pivot de Gauss}.$$</div>
<p class="ml">Exemple 11 : un rang</p>
<p>$\operatorname{rg}\big((1, 2, 1), (2, 1, 0), (3, 3, 1)\big)$.</p>
<p><b>Étape 1 : Rappel.</b> On cherche une relation de dépendance, sinon on pivote.</p>
<p><b>Étape 2 : Une relation.</b> $(1, 2, 1) + (2, 1, 0) = (1 + 2,\ 2 + 1,\ 1 + 0) = (3, 3, 1)$ : le 3<sup>e</sup> vecteur est combinaison des deux premiers.</p>
<p><b>Étape 3 : Les deux premiers.</b> Si $(2, 1, 0) = \lambda(1, 2, 1)$, la 1<sup>re</sup> coordonnée donne $\lambda = 2$ et la 2<sup>e</sup> $\lambda = \frac12$ : impossible, ils ne sont pas colinéaires.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\operatorname{rg} = 2}$ : les trois vecteurs engendrent un plan, la famille est liée.</p>

<h2 id="k-enonce">9. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« $F$ est un sev »</b><span>Vect, ou noyau d'une application linéaire, ou la caractérisation.</span></div>
<div><b>Une équation avec second membre $\neq0$</b><span>Pas un sev : $0\notin F$.</span></div>
<div><b>« Une base de $F$ » ($F$ par équations)</b><span>Paramétrer, écrire comme Vect, vérifier la liberté.</span></div>
<div><b>« Famille libre » (vecteurs)</b><span>Système homogène, ou rang.</span></div>
<div><b>« Famille libre » (fonctions)</b><span>Évaluer en des points, dériver, limites en $+\infty$.</span></div>
<div><b>« $E = F\oplus G$ »</b><span>Analyse-synthèse ; en dimension finie, $F\cap G = \{0\}$ et dimensions.</span></div>
<div><b>$n$ vecteurs dans un espace de dimension $n$</b><span>Libre suffit (ou génératrice suffit).</span></div>
<div><b>« $\dim(F\cap G)$ »</b><span>Grassmann, ou résoudre le système des équations réunies.</span></div>
<div><b>« Coordonnées dans une base »</b><span>Système, ou Taylor pour les polynômes.</span></div>
</div>

<h2 id="k-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Croire qu'une réunion de sev est un sev.</p>
<p><b>2.</b> Montrer « libre » en ne vérifiant que les vecteurs deux à deux.</p>
<p><b>3.</b> Oublier « pour tout $x$ » quand on teste la liberté de fonctions.</p>
<p><b>4.</b> Conclure $E = F\oplus G$ avec $F\cap G = \{0\}$ seul, sans les dimensions.</p>
<p><b>5.</b> $\dim\mathbb K_n[X] = n$ : c'est $n + 1$.</p>
<p><b>6.</b> Confondre supplémentaire et complémentaire ($E\setminus F$ n'est jamais un sev).</p>
</div>

<h2 id="k-entrainement">S'entraîner</h2>
<div data-mlab="rangfam"></div>
<div data-mlab="quizev"></div>

<h2 id="k-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : $(1, \cos, \cos^2)$ est libre</p>
<p><b>Étape 1 : Rappel.</b> Évaluer $a + b\cos x + c\cos^2x = 0$ en des points.</p>
<p><b>Étape 2 : Trois valeurs.</b> $x = \frac\pi2$ ($\cos = 0$) : $a + 0 + 0 = 0$, $a = 0$. $x = 0$ ($\cos = 1$) : $b\times1 + c\times1^2 = b + c = 0$. $x = \pi$ ($\cos = -1$) : $b\times(-1) + c\times(-1)^2 = -b + c = 0$.</p>
<p><b>Étape 3 : On résout.</b> En additionnant les deux dernières : $2c = 0$, $c = 0$, puis $b = -c = 0$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{(1, \cos, \cos^2)\ \text{est libre}}$.</p>

<p class="ml">Exercice 2 : $H = \{P\in\mathbb K_n[X],\ P(1) = 0\}$</p>
<p><b>Étape 1 : Rappel.</b> Un noyau est un sev ; on cherche une base adaptée.</p>
<p><b>Étape 2 : C'est un sev.</b> $H = \ker(P\mapsto P(1))$.</p>
<p><b>Étape 3 : Une base.</b> $P(1) = 0\iff(X - 1)\mid P\iff P = (X - 1)Q$ avec $\deg Q\leq n - 1$. Donc $H = \operatorname{Vect}\big((X - 1)X^k,\ 0\leq k\leq n - 1\big)$, famille de degrés échelonnés.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\dim H = n}$ : c'est un hyperplan de $\mathbb K_n[X]$.</p>

<h2 id="k-arbre">L'arbre des espaces vectoriels</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question d'espaces vectoriels</span><ul>
<li><div class="hr"><em>$F$ est-il un sev ?</em><span class="hq">Comment est donné $F$ ?</span><ul>
<li><div class="hr"><em>par des vecteurs</em><a class="hl ok" href="#k-sev">c'est un Vect</a></div></li>
<li><div class="hr"><em>par des équations</em><a class="hl" href="#k-sev">noyau, ou paramétrer</a></div></li>
<li><div class="hr"><em>second membre $\neq0$</em><a class="hl end" href="#k-sev">non : $0\notin F$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une famille</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>libre</em><a class="hl" href="#k-libre">système, évaluations, degrés</a></div></li>
<li><div class="hr"><em>génératrice</em><a class="hl" href="#k-vect">tout $x$ en combinaison</a></div></li>
<li><div class="hr"><em>base</em><a class="hl ok" href="#k-base">libre + bon nombre de vecteurs</a></div></li>
<li><div class="hr"><em>son rang</em><a class="hl" href="#k-rang">relation, ou pivot</a></div></li>
</ul></div></li>
<li><div class="hr"><em>deux sev $F$, $G$</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>$E = F\oplus G$</em><a class="hl" href="#k-somme">analyse-synthèse, ou dimensions</a></div></li>
<li><div class="hr"><em>$\dim(F\cap G)$</em><a class="hl" href="#k-dimf">Grassmann</a></div></li>
</ul></div></li>
</ul></div></div>
`,
"Applications linéaires": R`
<nav class="msum"><a href="#l-not">Notations</a><a href="#l-lin">Linéarité</a><a href="#l-ker">Noyau, image</a><a href="#l-iso">Isomorphismes, bases</a><a href="#l-proj">Projecteurs, symétries</a><a href="#l-rang">Théorème du rang</a><a href="#l-hyp">Formes linéaires, hyperplans</a><a href="#l-poly">Polynômes d'endomorphismes</a><a href="#l-enonce">L'énoncé</a><a href="#l-erreurs">Erreurs</a><a href="#l-entrainement">S'entraîner</a><a href="#l-exos">Exercices</a><a href="#l-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : les vecteurs $\cB x$ et leurs images. <span class="kR">rouge</span> : le noyau $\cR{\ker f}$. <span class="kO">orange</span> : l'image $\cO{\operatorname{Im}f}$. <span class="kV">violet</span> : les dimensions et le rang. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="l-not">1. Les notations du programme</h2>
<table class="mtab">
<tr><th>Objet</th><th>Notation</th><th>À retenir</th></tr>
<tr><td>Applications linéaires</td><td>$\mathcal L(E, F)$, $\mathcal L(E)$</td><td>Endomorphismes : $E = F$.</td></tr>
<tr><td>Automorphismes</td><td>$GL(E)$</td><td>Groupe pour $\circ$.</td></tr>
<tr><td>Noyau, image</td><td>$\ker f$, $\operatorname{Im}f$</td><td>Sev de $E$ et de $F$.</td></tr>
<tr><td>Rang</td><td>$\operatorname{rg}f = \dim\operatorname{Im}f$</td><td>Si $\operatorname{Im}f$ de dimension finie.</td></tr>
<tr><td>Dual</td><td>$E^* = \mathcal L(E, \mathbb K)$</td><td>Formes linéaires.</td></tr>
</table>

<h2 id="l-lin">2. Montrer qu'une application est linéaire</h2>
<div class="sbox">$$f\ \text{linéaire}\iff\forall x, y\in E,\ \forall\lambda\in\mathbb K,\ f(\lambda x + y) = \lambda f(x) + f(y).\qquad\text{Alors}\ f(0) = 0.$$</div>
<p>Pour montrer qu'elle ne l'est <b>pas</b> : $f(0)\neq0$, ou un contre-exemple numérique.</p>
<p class="ml">Exemple 1 : sur les polynômes</p>
<p>$\varphi:\mathbb K[X]\to\mathbb K$, $\varphi(P) = P(1) + P'(0)$.</p>
<p><b>Étape 1 : Rappel.</b> On vérifie $\varphi(\lambda P + Q) = \lambda\varphi(P) + \varphi(Q)$.</p>
<p><b>Étape 2 : On calcule.</b> $(\lambda P + Q)(1) = \lambda P(1) + Q(1)$ et $(\lambda P + Q)' = \lambda P' + Q'$, donc :</p>
$$\varphi(\lambda P + Q) = \lambda P(1) + Q(1) + \lambda P'(0) + Q'(0) = \lambda\varphi(P) + \varphi(Q).$$
<p><b>Étape 3 : Conclusion.</b> $\cG{\varphi\ \text{est une forme linéaire}}$.</p>

<p class="ml">Exemple 2 : pas linéaire</p>
<p>$f(x, y) = (x + y, xy)$ de $\mathbb R^2$ dans $\mathbb R^2$.</p>
<p><b>Étape 1 : Rappel.</b> Linéaire $\Rightarrow f(2u) = 2f(u)$.</p>
<p><b>Étape 2 : Un test.</b> $f(1, 1) = (1 + 1,\ 1\times1) = (2, 1)$ et $f(2, 2) = (2 + 2,\ 2\times2) = (4, 4)$. Linéaire imposerait $f(2, 2) = 2f(1, 1) = (4, 2)$, or $(4, 4)\neq(4, 2)$.</p>
<p><b>Étape 3 : Conclusion.</b> $\cG{f\ \text{n'est pas linéaire}}$ (le produit $xy$ est du degré $2$).</p>

<h2 id="l-ker">3. Noyau et image</h2>
<div class="sbox">$$\cR{\ker f} = \{x,\ f(x) = 0\},\qquad\cO{\operatorname{Im}f} = \{f(x),\ x\in E\} = \operatorname{Vect}\big(f(e_1), \dots, f(e_n)\big)\ \text{si}\ (e_i)\ \text{base de}\ E.$$
$$f\ \text{injective}\iff\ker f = \{0\}.\qquad f\ \text{surjective}\iff\operatorname{Im}f = F.\qquad f(x) = f(y)\iff x - y\in\ker f.$$</div>
<p class="ml">Exemple 3 : noyau et image dans $\mathbb R^3$</p>
<p>$f(x, y, z) = (x - y,\ y - z,\ z - x)$.</p>
<p><b>Étape 1 : Rappel.</b> $\ker f$ : résoudre $f(x) = 0$. $\operatorname{Im}f = \operatorname{Vect}(f(e_1), f(e_2), f(e_3))$.</p>
<p><b>Étape 2 : Le noyau.</b> $f(x, y, z) = 0$ : $x - y = 0$ et $y - z = 0$ (la 3<sup>e</sup>, $z - x = 0$, est l'opposée de leur somme). Donc $x = y$ et $y = z$, $(x, y, z) = (x, x, x) = x(1, 1, 1)$ : $\cR{\ker f = \operatorname{Vect}(1, 1, 1)}$.</p>
<p><b>Étape 3 : L'image.</b> On calcule les images de la base canonique :</p>
$$f(1, 0, 0) = (1 - 0,\ 0 - 0,\ 0 - 1) = (1, 0, -1),\quad f(0, 1, 0) = (0 - 1,\ 1 - 0,\ 0 - 0) = (-1, 1, 0),\quad f(0, 0, 1) = (0, -1, 1).$$
<p>Et $-(1, 0, -1) - (-1, 1, 0) = (-1 + 1,\ 0 - 1,\ 1 - 0) = (0, -1, 1) = f(e_3)$ : il est combinaison des deux autres. Donc $\operatorname{Im}f = \operatorname{Vect}\big((1, 0, -1), (-1, 1, 0)\big)$.</p>
<p><b>Étape 4 : Une équation.</b> $(x - y) + (y - z) + (z - x) = 0$ : chaque vecteur image a ses coordonnées de somme nulle, donc $\cO{\operatorname{Im}f}\subset\{a + b + c = 0\}$. Les deux sont des plans (dimension $2$), donc égaux.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{\ker f = \mathbb R(1, 1, 1),\ \operatorname{Im}f = \{a + b + c = 0\}}$. Contrôle : $1 + 2 = 3$ (théorème du rang, §6).</p>

<p class="ml">Exemple 4 : la dérivation</p>
<p>$D:\mathbb K[X]\to\mathbb K[X]$, $P\mapsto P'$.</p>
<p><b>Étape 1 : Rappel.</b> Injective $\iff\ker = \{0\}$ ; surjective $\iff\operatorname{Im} = $ tout l'espace.</p>
<p><b>Étape 2 : Le noyau.</b> $P' = 0\iff P$ constant : $\ker D = \mathbb K_0[X]$, $D$ n'est pas injective.</p>
<p><b>Étape 3 : L'image.</b> $\big(\frac{a_k}{k + 1}X^{k+1}\big)' = \frac{a_k}{k + 1}(k + 1)X^k = a_kX^k$, donc tout $Q = \sum a_kX^k$ est la dérivée de $\sum\frac{a_k}{k + 1}X^{k+1}$ : $D$ est surjective.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{D\ \text{surjective, non injective}}$ : c'est possible car $\mathbb K[X]$ est de dimension infinie.</p>

<h2 id="l-iso">4. Isomorphismes, image d'une base</h2>
<div class="sbox">$$f\ \text{est déterminée par les images}\ f(e_1), \dots, f(e_n)\ \text{d'une base}.\qquad f\ \text{isomorphisme}\iff(f(e_i))\ \text{base de}\ F.$$
$$E\simeq F\iff\dim E = \dim F.\qquad\text{Si}\ \dim E = \dim F:\ f\ \text{injective}\iff f\ \text{surjective}\iff f\ \text{bijective}.$$</div>
<p class="ml">Exemple 5 : l'interpolation de Lagrange</p>
<p>$\varphi:\mathbb R_2[X]\to\mathbb R^3$, $P\mapsto(P(0), P(1), P(2))$.</p>
<p><b>Étape 1 : Rappel.</b> Même dimension finie : injective suffit.</p>
<p><b>Étape 2 : Les dimensions.</b> $\dim\mathbb R_2[X] = 3 = \dim\mathbb R^3$, et $\varphi$ est linéaire.</p>
<p><b>Étape 3 : Le noyau.</b> $\varphi(P) = (0, 0, 0)$ signifie $P(0) = P(1) = P(2) = 0$ : $P$, de degré $\leq2$, a $3$ racines, donc $P = 0$. $\ker\varphi = \{0\}$ : injective, donc bijective (même dimension).</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\varphi\ \text{est un isomorphisme}}$ : pour tous $a, b, c$, il existe un unique $P\in\mathbb R_2[X]$ avec $P(0) = a$, $P(1) = b$, $P(2) = c$.</p>

<h2 id="l-proj">5. Projecteurs et symétries</h2>
<div class="sbox">$$p\ \text{projecteur}\iff p\circ p = p.\ \text{Alors}\ E = \ker p\oplus\operatorname{Im}p,\ \operatorname{Im}p = \ker(p - \operatorname{id}),\ p\ \text{projette sur}\ \operatorname{Im}p\ \text{parallèlement à}\ \ker p.$$
$$s\ \text{symétrie}\iff s\circ s = \operatorname{id}.\ \text{Alors}\ E = \ker(s - \operatorname{id})\oplus\ker(s + \operatorname{id}),\qquad s = 2p - \operatorname{id}.$$</div>
<p class="ml">La méthode pour la projection sur $F$ parallèlement à $G$</p>
<p>On décompose $x = x_F + x_G$ (on écrit $x_G$ avec un paramètre, et on impose $x - x_G\in F$). Alors $p(x) = x_F$ et $s(x) = x_F - x_G$.</p>

<p class="ml">Exemple 6 : une projection oblique dans $\mathbb R^3$</p>
<p>Projection sur $P:\ x + y + z = 0$ parallèlement à $D = \operatorname{Vect}(1, 0, 0)$.</p>
<p><b>Étape 1 : Rappel.</b> $x = x_P + x_D$ avec $x_D = \lambda(1, 0, 0)$ et $x - x_D\in P$.</p>
<p><b>Étape 2 : On impose.</b> Pour $x = (a, b, c)$ : $x - \lambda(1, 0, 0) = (a - \lambda, b, c)\in P\iff a - \lambda + b + c = 0\iff\lambda = a + b + c$.</p>
<p><b>Étape 3 : Le projeté.</b> $p(a, b, c) = (a - \lambda, b, c)$ avec $a - \lambda = a - (a + b + c) = -b - c$ : $p(a, b, c) = (-b - c,\ b,\ c)$.</p>
<p><b>Étape 4 : La symétrie.</b> $s = 2p - \operatorname{id}$ : 1<sup>re</sup> coordonnée $2(-b - c) - a = -a - 2b - 2c$, 2<sup>e</sup> $2b - b = b$, 3<sup>e</sup> $2c - c = c$ : $s(a, b, c) = (-a - 2b - 2c,\ b,\ c)$.</p>
<p><b>Étape 5 : Conclusion.</b> $\cG{p(a, b, c) = (-b - c, b, c)}$. Contrôle : $p(1, 0, 0) = (-0 - 0, 0, 0) = 0$ (vecteur de $D$) et $p(-1, 1, 0) = (-1 - 0, 1, 0) = (-1, 1, 0)$ (vecteur de $P$, inchangé).</p>

<p class="ml">Exemple 7 : reconnaître un projecteur</p>
<p>$M = \begin{pmatrix}1&1\\0&0\end{pmatrix}$, endomorphisme $p$ de $\mathbb R^2$.</p>
<p><b>Étape 1 : Rappel.</b> $p^2 = p$ ; puis $\operatorname{Im}p = \ker(p - \operatorname{id})$ et $\ker p$.</p>
<p><b>Étape 2 : $M^2$.</b> Ligne par colonne :</p>
$$M^2 = \begin{pmatrix}1\times1 + 1\times0&1\times1 + 1\times0\\0\times1 + 0\times0&0\times1 + 0\times0\end{pmatrix} = \begin{pmatrix}1&1\\0&0\end{pmatrix} = M:\ \text{c'est un projecteur}.$$
<p><b>Étape 3 : Image et noyau.</b> $M\begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}x + y\\0\end{pmatrix} = (x + y)\begin{pmatrix}1\\0\end{pmatrix}$ : $\operatorname{Im}p = \operatorname{Vect}(1, 0)$. Noyau : $x + y = 0$, $y = -x$, $(x, -x) = x(1, -1)$ : $\ker p = \operatorname{Vect}(1, -1)$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{p\ \text{projette sur}\ \mathbb R(1, 0)\ \text{parallèlement à}\ \mathbb R(1, -1)}$ (pas orthogonalement).</p>

<h2 id="l-rang">6. Le théorème du rang</h2>
<div class="sbox">$$\dim E\ \text{finie}:\quad\cV{\dim E = \dim\ker f + \operatorname{rg}f}.\qquad\operatorname{rg}(g\circ f)\leq\min(\operatorname{rg}f, \operatorname{rg}g).$$
$$\operatorname{rg}f\leq\min(\dim E, \dim F).\qquad\text{Composer par un isomorphisme ne change pas le rang}.$$</div>
<p class="ml piege">Piège</p>
<p>Le théorème du rang dit une égalité de <b>dimensions</b>, pas que $E = \ker f\oplus\operatorname{Im}f$ : c'est faux pour $f(x, y) = (y, 0)$, où $\ker f = \operatorname{Im}f$.</p>

<p class="ml">Exemple 8 : bijectivité par le noyau</p>
<p>$f:\mathbb R_n[X]\to\mathbb R_n[X]$, $P\mapsto P - P'$.</p>
<p><b>Étape 1 : Rappel.</b> Endomorphisme en dimension finie : injectif $\iff$ bijectif.</p>
<p><b>Étape 2 : Le noyau.</b> $f(P) = 0\iff P = P'$. Si $P\neq0$ est de degré $d$, alors $P'$ est de degré $d - 1$ (ou nul si $d = 0$) : $P$ et $P'$ n'ont pas le même degré, ils ne peuvent pas être égaux. Donc $P = 0$ et $\ker f = \{0\}$.</p>
<p><b>Étape 3 : Conclusion.</b> $\cG{f\ \text{est bijective}}$ : pour tout $Q$, l'équation $P - P' = Q$ a une unique solution polynomiale.</p>

<p class="ml">Exemple 9 : quand $E = \ker f\oplus\operatorname{Im}f$</p>
<p><b>Étape 1 : Rappel.</b> En dimension finie : $F\cap G = \{0\}$ et $\dim F + \dim G = \dim E$ suffisent.</p>
<p><b>Étape 2 : Les dimensions.</b> Le théorème du rang donne $\dim\ker f + \dim\operatorname{Im}f = \dim E$.</p>
<p><b>Étape 3 : Il reste l'intersection.</b> Donc $E = \ker f\oplus\operatorname{Im}f\iff\ker f\cap\operatorname{Im}f = \{0\}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{E = \ker f\oplus\operatorname{Im}f\iff\ker f\cap\operatorname{Im}f = \{0\}}$ (vrai pour un projecteur, faux pour un nilpotent non nul).</p>

<h2 id="l-hyp">7. Formes linéaires et hyperplans</h2>
<div class="sbox">$$H\ \text{hyperplan}\iff H = \ker\varphi,\ \varphi\in E^*\setminus\{0\}\iff\dim H = n - 1\ (\text{dimension finie}).$$
$$\text{Dans une base}:\ H = \{x,\ a_1x_1 + \dots + a_nx_n = 0\},\ (a_i)\neq0.\ \text{Deux équations d'un même}\ H\ \text{sont proportionnelles}.$$</div>
<p class="ml">Exemple 10 : un hyperplan de polynômes</p>
<p>$H = \{P\in\mathbb R_n[X],\ \int_0^1P(t)\,dt = 0\}$.</p>
<p><b>Étape 1 : Rappel.</b> Noyau d'une forme linéaire non nulle $\Rightarrow$ hyperplan.</p>
<p><b>Étape 2 : La forme.</b> $\varphi(P) = \int_0^1P$ est linéaire (linéarité de l'intégrale).</p>
<p><b>Étape 3 : Non nulle.</b> $\varphi(1) = \int_0^11\,dt = 1 - 0 = 1\neq0$. Une forme linéaire non nulle a pour noyau un hyperplan : $\dim H = \dim\mathbb R_n[X] - 1 = (n + 1) - 1 = n$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{H = \ker\varphi\ \text{est un hyperplan, de dimension}\ n}$, et $\mathbb R_n[X] = H\oplus\mathbb R_0[X]$.</p>

<h2 id="l-poly">8. Polynômes d'endomorphismes</h2>
<div class="sbox">$$f^2 - 3f + 2\operatorname{id} = 0\ \Longrightarrow\ f\circ\frac{3\operatorname{id} - f}2 = \operatorname{id}:\ f\ \text{inversible et}\ f^{-1} = \frac{3\operatorname{id} - f}2.$$</div>
<p class="ml">Exemple 11 : un inverse sans calcul</p>
<p>$f\in\mathcal L(E)$ vérifie $f^2 - 3f + 2\operatorname{id} = 0$. Montrer que $f$ est inversible.</p>
<p><b>Étape 1 : Rappel.</b> On isole $\operatorname{id}$ et on factorise par $f$.</p>
<p><b>Étape 2 : On isole.</b> $f^2 - 3f + 2\operatorname{id} = 0\iff2\operatorname{id} = 3f - f^2$, et on factorise par $f$ : $3f - f^2 = f\circ(3\operatorname{id}) - f\circ f = f\circ(3\operatorname{id} - f)$.</p>
<p><b>Étape 3 : On divise par $2$.</b> $f\circ\frac{3\operatorname{id} - f}2 = \operatorname{id}$, et de même $\frac{3\operatorname{id} - f}2\circ f = \operatorname{id}$ ($f$ commute avec ses polynômes).</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{f\in GL(E),\ f^{-1} = \frac12(3\operatorname{id} - f)}$. En plus, $E = \ker(f - \operatorname{id})\oplus\ker(f - 2\operatorname{id})$ (voir Réduction).</p>

<h2 id="l-enonce">9. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« $f$ est linéaire »</b><span>$f(\lambda x + y) = \lambda f(x) + f(y)$.</span></div>
<div><b>« Déterminer $\ker f$ »</b><span>Résoudre $f(x) = 0$, donner une base.</span></div>
<div><b>« Déterminer $\operatorname{Im}f$ »</b><span>$\operatorname{Vect}$ des images d'une base, retirer les liés.</span></div>
<div><b>« $f$ injective »</b><span>$\ker f = \{0\}$.</span></div>
<div><b>« $f$ bijective », même dimension</b><span>Injective suffit (théorème du rang).</span></div>
<div><b>$p\circ p = p$</b><span>Projecteur sur $\operatorname{Im}p$ parallèlement à $\ker p$.</span></div>
<div><b>« Projection sur $F$ parallèlement à $G$ »</b><span>Décomposer $x = x_F + x_G$.</span></div>
<div><b>« $\dim\ker f$ »</b><span>Théorème du rang : $n - \operatorname{rg}f$.</span></div>
<div><b>« $H$ est un hyperplan »</b><span>Noyau d'une forme linéaire non nulle.</span></div>
<div><b>$P(f) = 0$ avec $P(0)\neq0$</b><span>$f$ inversible, $f^{-1}$ polynôme en $f$.</span></div>
<div><b>$f\circ g = 0$</b><span>$\operatorname{Im}g\subset\ker f$.</span></div>
</div>

<h2 id="l-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Dire que $E = \ker f\oplus\operatorname{Im}f$ toujours.</p>
<p><b>2.</b> Confondre $\ker f\subset E$ et $\operatorname{Im}f\subset F$.</p>
<p><b>3.</b> Utiliser « injective $\iff$ surjective » en dimension infinie ou avec des dimensions différentes.</p>
<p><b>4.</b> Donner $\operatorname{Im}f$ comme Vect de vecteurs liés et annoncer la mauvaise dimension.</p>
<p><b>5.</b> Une projection « sur $F$ » sans dire parallèlement à quoi.</p>
<p><b>6.</b> Oublier de vérifier la linéarité avant de parler de noyau.</p>
</div>

<h2 id="l-entrainement">S'entraîner</h2>
<div data-mlab="kerim"></div>
<div data-mlab="quizal"></div>

<h2 id="l-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : noyaux et images itérés</p>
<p>Montrer $\ker f\subset\ker f^2$ et $\operatorname{Im}f^2\subset\operatorname{Im}f$.</p>
<p><b>Étape 1 : Rappel.</b> Définitions de $\ker$ et $\operatorname{Im}$.</p>
<p><b>Étape 2 : Noyaux.</b> Si $f(x) = 0$, alors $f^2(x) = f(0) = 0$.</p>
<p><b>Étape 3 : Images.</b> Si $y = f^2(x) = f(f(x))$, alors $y$ est l'image de $f(x)$ par $f$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\ker f\subset\ker f^2,\ \operatorname{Im}f^2\subset\operatorname{Im}f}$ ; en dimension finie, l'égalité de l'un équivaut à celle de l'autre (théorème du rang).</p>

<p class="ml">Exercice 2 : $f\circ g = 0$</p>
<p>$f, g\in\mathcal L(E)$, $\dim E = n$, $f\circ g = 0$. Montrer $\operatorname{rg}f + \operatorname{rg}g\leq n$.</p>
<p><b>Étape 1 : Rappel.</b> $f\circ g = 0\iff\operatorname{Im}g\subset\ker f$. Théorème du rang pour $f$.</p>
<p><b>Étape 2 : L'inclusion.</b> Pour tout $x$, $f(g(x)) = 0$ : tout vecteur $g(x)$ de $\operatorname{Im}g$ est dans $\ker f$. Donc $\operatorname{Im}g\subset\ker f$ et $\operatorname{rg}g = \dim\operatorname{Im}g\leq\dim\ker f$.</p>
<p><b>Étape 3 : Le rang de $f$.</b> Théorème du rang : $\dim\ker f + \operatorname{rg}f = n$, donc $\dim\ker f = n - \operatorname{rg}f$, et $\operatorname{rg}g\leq n - \operatorname{rg}f$.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\operatorname{rg}f + \operatorname{rg}g\leq n}$.</p>

<h2 id="l-arbre">L'arbre des applications linéaires</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une application $f$</span><ul>
<li><div class="hr"><em>linéaire ?</em><a class="hl" href="#l-lin">$f(\lambda x + y)$, ou contre-exemple</a></div></li>
<li><div class="hr"><em>noyau, image</em><span class="hq">On veut…</span><ul>
<li><div class="hr"><em>$\ker f$</em><a class="hl ok" href="#l-ker">résoudre $f(x) = 0$</a></div></li>
<li><div class="hr"><em>$\operatorname{Im}f$</em><a class="hl ok" href="#l-ker">Vect des $f(e_i)$</a></div></li>
<li><div class="hr"><em>une dimension</em><a class="hl" href="#l-rang">théorème du rang</a></div></li>
</ul></div></li>
<li><div class="hr"><em>bijective ?</em><span class="hq">Même dimension finie ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#l-iso">$\ker f = \{0\}$ suffit</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#l-ker">injective et surjective séparément</a></div></li>
<li><div class="hr"><em>$P(f) = 0$</em><a class="hl" href="#l-poly">isoler $\operatorname{id}$</a></div></li>
</ul></div></li>
<li><div class="hr"><em>$p^2 = p$, $s^2 = \operatorname{id}$</em><a class="hl" href="#l-proj">projecteur, symétrie : $\ker$, $\operatorname{Im}$</a></div></li>
<li><div class="hr"><em>un hyperplan</em><a class="hl end" href="#l-hyp">noyau d'une forme non nulle</a></div></li>
</ul></div></div>
`,
"Fonctions convexes": R`
<nav class="msum"><a href="#x-def">Définition</a><a href="#x-jensen">Jensen</a><a href="#x-pentes">Pentes</a><a href="#x-der">Avec les dérivées</a><a href="#x-usu">Fonctions usuelles</a><a href="#x-ineg">Inégalités classiques</a><a href="#x-enonce">L'énoncé</a><a href="#x-erreurs">Erreurs</a><a href="#x-entrainement">S'entraîner</a><a href="#x-exos">Exercices</a><a href="#x-arbre">L'arbre</a></nav>

<p class="ml">Le code couleur de toute la fiche</p>
<p><span class="kB">bleu</span> : la fonction $\cB f$ et sa courbe. <span class="kR">rouge</span> : les cordes. <span class="kO">orange</span> : les tangentes. <span class="kV">violet</span> : les poids $\cV{\lambda_i}$. <span class="kG">vert</span> : la conclusion.</p>

<h2 id="x-def">1. Définition</h2>
<div class="sbox">$$\cB f\ \text{convexe sur}\ I\iff\forall x, y\in I,\ \forall\cV\lambda\in[0, 1],\ f(\cV\lambda x + (1 - \cV\lambda)y)\leq\cV\lambda f(x) + (1 - \cV\lambda)f(y).$$</div>
<p>Géométriquement : la courbe est <b>sous chaque corde</b>. $f$ est concave si $-f$ est convexe (courbe au-dessus des cordes). Une fonction affine est les deux.</p>

<h2 id="x-jensen">2. L'inégalité de Jensen</h2>
<div class="sbox">$$f\ \text{convexe},\ \cV{\lambda_i}\geq0,\ \sum\cV{\lambda_i} = 1:\quad f\Big(\sum_{i=1}^n\cV{\lambda_i}x_i\Big)\leq\sum_{i=1}^n\cV{\lambda_i}f(x_i).\qquad\text{Avec}\ \lambda_i = \frac1n:\ f\Big(\frac{x_1 + \dots + x_n}n\Big)\leq\frac{f(x_1) + \dots + f(x_n)}n.$$</div>
<p>Elle se démontre par récurrence sur $n$. Pour une fonction <b>concave</b>, l'inégalité se retourne.</p>

<p class="ml">Exemple 1 : l'inégalité arithmético-géométrique</p>
<p>Pour $x_1, \dots, x_n > 0$ : $\sqrt[n]{x_1\cdots x_n}\leq\frac{x_1 + \dots + x_n}n$.</p>
<p><b>Étape 1 : Rappel.</b> Jensen pour une fonction concave : $f\big(\frac1n\sum x_i\big)\geq\frac1n\sum f(x_i)$.</p>
<p><b>Étape 2 : La fonction.</b> $\ln' = \frac1x = x^{-1}$, $\ln'' = -x^{-2} = -\frac1{x^2}\leq0$ : $\ln$ est concave sur $]0, +\infty[$.</p>
<p><b>Étape 3 : On applique</b> Jensen concave (poids $\frac1n$) : $\ln\Big(\frac{x_1 + \dots + x_n}n\Big)\geq\frac{\ln x_1 + \dots + \ln x_n}n = \frac1n\ln(x_1\cdots x_n) = \ln\big((x_1\cdots x_n)^{1/n}\big) = \ln\sqrt[n]{x_1\cdots x_n}$.</p>
<p><b>Étape 4 : Conclusion.</b> $\exp$ est croissante : $\cG{\sqrt[n]{x_1\cdots x_n}\leq\frac{x_1 + \dots + x_n}n}$, avec égalité si tous les $x_i$ sont égaux.</p>

<p class="ml">Exemple 2 : moyenne et carrés</p>
<p>Montrer $\Big(\frac{x_1 + \dots + x_n}n\Big)^2\leq\frac{x_1^2 + \dots + x_n^2}n$.</p>
<p><b>Étape 1 : Rappel.</b> Jensen avec poids $\frac1n$ pour une fonction convexe.</p>
<p><b>Étape 2 : La fonction.</b> $(x^2)' = 2x$, $(x^2)'' = 2\geq0$ : $x\mapsto x^2$ est convexe sur $\mathbb R$. Jensen avec poids $\frac1n$ : $\varphi\big(\frac1n\sum x_i\big)\leq\frac1n\sum\varphi(x_i)$.</p>
<p><b>Étape 3 : Conclusion.</b> $\cG{\Big(\frac1n\sum x_i\Big)^2\leq\frac1n\sum x_i^2}$ (c'est aussi $V(X)\geq0$ pour une loi uniforme).</p>

<h2 id="x-pentes">3. Le lemme des pentes</h2>
<div class="sbox">$$f\ \text{convexe}\iff\text{pour tout}\ a\in I,\ x\mapsto\frac{f(x) - f(a)}{x - a}\ \text{est croissante sur}\ I\setminus\{a\}.$$
$$x \lt y \lt z:\quad\frac{f(y) - f(x)}{y - x}\leq\frac{f(z) - f(x)}{z - x}\leq\frac{f(z) - f(y)}{z - y}.$$</div>
<p>Conséquence : une fonction convexe sur un intervalle <b>ouvert</b> est dérivable à gauche et à droite en tout point, donc continue.</p>

<h2 id="x-der">4. Avec les dérivées</h2>
<div class="sbox">$$f\ \text{dérivable}:\ f\ \text{convexe}\iff f'\ \text{croissante}\iff\text{la courbe est au-dessus de ses}\ \cO{\text{tangentes}}:\ f(x)\geq f(a) + f'(a)(x - a).$$
$$f\ \text{deux fois dérivable}:\ f\ \text{convexe}\iff f''\geq0.$$</div>
<p class="ml">Les deux armes pour une inégalité</p>
<p><b>Tangente</b> : une fonction convexe est au-dessus de ses tangentes (minorations). <b>Corde</b> : elle est en dessous de ses cordes sur $[a, b]$ (majorations). Pour une concave, c'est l'inverse.</p>

<p class="ml">Exemple 3 : $e^x\geq1 + x$</p>
<p><b>Étape 1 : Rappel.</b> Convexe $\Rightarrow$ au-dessus de ses tangentes.</p>
<p><b>Étape 2 : Convexité.</b> $\exp'' = \exp > 0$ : $\exp$ est convexe sur $\mathbb R$.</p>
<p><b>Étape 3 : La tangente en $0$.</b> $y = f(0) + f'(0)(x - 0)$ avec $f(0) = e^0 = 1$ et $f'(0) = e^0 = 1$ : $y = 1 + 1\times x = 1 + x$. Une convexe est au-dessus de ses tangentes.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{e^x\geq1 + x}$ pour tout réel $x$ (égalité seulement en $0$).</p>

<p class="ml">Exemple 4 : $\ln(1 + x)\leq x$</p>
<p><b>Étape 1 : Rappel.</b> Concave $\Rightarrow$ en dessous de ses tangentes.</p>
<p><b>Étape 2 : Concavité.</b> $f(x) = \ln(1 + x)$, $f'(x) = \frac1{1 + x} = (1 + x)^{-1}$, $f''(x) = -(1 + x)^{-2} = -\frac1{(1 + x)^2} \lt 0$ sur $]-1, +\infty[$.</p>
<p><b>Étape 3 : La tangente en $0$.</b> $f(0) = \ln1 = 0$, $f'(0) = \frac1{1 + 0} = 1$ : $y = 0 + 1\times(x - 0) = x$. Une concave est sous ses tangentes.</p>
<p><b>Étape 4 : Conclusion.</b> $\cG{\ln(1 + x)\leq x}$ pour tout $x > -1$.</p>

<p class="ml">Exemple 5 : l'inégalité de Jordan $\sin x\geq\frac2\pi x$</p>
<p>Pour $x\in[0, \frac\pi2]$.</p>
<p><b>Étape 1 : Rappel.</b> Concave $\Rightarrow$ au-dessus de ses cordes.</p>
<p><b>Étape 2 : Concavité.</b> $\sin'' = -\sin\leq0$ sur $[0, \frac\pi2]$.</p>
<p><b>Étape 3 : La corde.</b> Elle relie $(0, \sin0) = (0, 0)$ et $\big(\frac\pi2, \sin\frac\pi2\big) = \big(\frac\pi2, 1\big)$ : pente $\frac{1 - 0}{\pi/2 - 0} = \frac2\pi$, donc $y = \frac2\pi x$.</p>
<p><b>Étape 4 : Conclusion.</b> Une concave est au-dessus de ses cordes et sous ses tangentes ; tangente en $0$ : $y = \sin0 + \cos0\times x = x$. Donc $\cG{\frac2\pi x\leq\sin x\leq x}$ sur $[0, \frac\pi2]$.</p>

<p class="ml">Exemple 6 : l'inégalité de Young</p>
<p>$a, b > 0$, $p, q > 1$ avec $\frac1p + \frac1q = 1$ : $ab\leq\frac{a^p}p + \frac{b^q}q$.</p>
<p><b>Étape 1 : Rappel.</b> $\ln$ concave : $\ln(\lambda u + (1 - \lambda)v)\geq\lambda\ln u + (1 - \lambda)\ln v$.</p>
<p><b>Étape 2 : Le choix.</b> $u = a^p$, $v = b^q$, $\lambda = \frac1p$, $1 - \lambda = \frac1q$.</p>
<p><b>Étape 3 : On applique</b> la concavité de $\ln$ : $\ln(\lambda u + (1 - \lambda)v)\geq\lambda\ln u + (1 - \lambda)\ln v$, soit $\ln\Big(\frac{a^p}p + \frac{b^q}q\Big)\geq\frac1p\ln a^p + \frac1q\ln b^q = \frac1p\times p\ln a + \frac1q\times q\ln b = \ln a + \ln b = \ln(ab)$.</p>
<p><b>Étape 4 : Conclusion.</b> $\exp$ est croissante : $\cG{ab\leq\frac{a^p}p + \frac{b^q}q}$ (avec $p = q = 2$, $\frac12 + \frac12 = 1$ : $ab\leq\frac{a^2}2 + \frac{b^2}2 = \frac{a^2 + b^2}2$).</p>

<h2 id="x-usu">5. Les fonctions usuelles</h2>
<table class="mtab">
<tr><th>Convexes</th><th>Concaves</th></tr>
<tr><td>$\exp$ sur $\mathbb R$ ; $x^2$, $|x|$ sur $\mathbb R$</td><td>$\ln$ sur $]0, +\infty[$</td></tr>
<tr><td>$x^\alpha$ sur $\mathbb R_+$ pour $\alpha\geq1$</td><td>$x^\alpha$ sur $\mathbb R_+$ pour $0\leq\alpha\leq1$ ($\sqrt x$)</td></tr>
<tr><td>$\frac1x$ sur $]0, +\infty[$ ; $\operatorname{ch}$ sur $\mathbb R$</td><td>$\sin$ sur $[0, \pi]$, $\cos$ sur $[-\frac\pi2, \frac\pi2]$</td></tr>
<tr><td>$x\ln x$ sur $]0, +\infty[$ ; $\tan$ sur $[0, \frac\pi2[$</td><td>$\arctan$ sur $\mathbb R_+$</td></tr>
</table>
<p>Une norme est convexe. Une somme de convexes est convexe, un sup de convexes aussi ; une composée $g\circ f$ est convexe si $f$ est convexe et $g$ convexe <b>croissante</b>.</p>

<h2 id="x-ineg">6. Démontrer une inégalité : quelle méthode ?</h2>
<p><b>1.</b> Une fonction connue, une tangente ou une corde : <b>convexité</b>. <b>2.</b> Une moyenne, des poids qui somment à $1$ : <b>Jensen</b>. <b>3.</b> Un produit et une somme : <b>arithmético-géométrique</b> ou <b>Young</b>. <b>4.</b> Sinon : étudier la fonction différence $g(x) = \text{droite} - \text{gauche}$.</p>
<p class="ml">Exemple 7 : la moyenne de puissances</p>
<p>Pour $a, b\geq0$ et $p\geq1$ : $\Big(\frac{a + b}2\Big)^p\leq\frac{a^p + b^p}2$.</p>
<p><b>Étape 1 : Rappel.</b> Définition de la convexité avec $\lambda = \frac12$.</p>
<p><b>Étape 2 : La fonction.</b> $(x^p)' = px^{p-1}$, $(x^p)'' = p(p - 1)x^{p-2}$. Pour $p\geq1$ : $p > 0$, $p - 1\geq0$, $x^{p-2}\geq0$ sur $\mathbb R_+^*$, donc $\geq0$ : $x\mapsto x^p$ est convexe.</p>
<p><b>Étape 3 : Conclusion.</b> Convexité avec $\lambda = \frac12$ : $f\big(\frac12a + \frac12b\big)\leq\frac12f(a) + \frac12f(b)$, soit $\cG{\Big(\frac{a + b}2\Big)^p\leq\frac{a^p + b^p}2}$.</p>

<h2 id="x-enonce">7. Ce que l'énoncé te donne, et ce que tu en déduis</h2>
<div class="mrefl wide">
<div><b>« Montrer que $f$ est convexe »</b><span>$f''\geq0$, ou $f'$ croissante, ou somme/sup de convexes.</span></div>
<div><b>Une minoration par une droite</b><span>Tangente d'une convexe.</span></div>
<div><b>Une majoration par une droite sur $[a, b]$</b><span>Corde d'une convexe.</span></div>
<div><b>Moyennes, poids de somme $1$</b><span>Jensen.</span></div>
<div><b>Produit $\leq$ somme</b><span>Concavité de $\ln$ : arithmético-géométrique, Young.</span></div>
<div><b>$\sin x\geq\dots$ sur $[0, \frac\pi2]$</b><span>Concavité de $\sin$, corde.</span></div>
<div><b>« Convexe et majorée sur $\mathbb R$ »</b><span>Constante (exercice 1).</span></div>
</div>

<h2 id="x-erreurs">Les erreurs qui coûtent des points</h2>
<div class="merr">
<p><b>1.</b> Confondre le sens : convexe = <b>sous</b> les cordes, <b>au-dessus</b> des tangentes.</p>
<p><b>2.</b> Jensen avec des poids qui ne somment pas à $1$, ou négatifs.</p>
<p><b>3.</b> Oublier de préciser l'intervalle de convexité ($\sin$ n'est pas concave sur $\mathbb R$).</p>
<p><b>4.</b> Composer $g\circ f$ sans vérifier que $g$ est croissante.</p>
<p><b>5.</b> Appliquer $\ln$ concave à des nombres négatifs.</p>
</div>

<h2 id="x-entrainement">S'entraîner</h2>
<div data-mlab="cordes"></div>
<div data-mlab="quizcvx"></div>

<h2 id="x-exos">Exercices corrigés</h2>
<p class="ml">Exercice 1 : convexe et majorée sur $\mathbb R$</p>
<p>$f$ convexe et majorée sur $\mathbb R$. Montrer que $f$ est constante.</p>
<p><b>Étape 1 : Rappel.</b> Lemme des pentes : $x\mapsto\frac{f(x) - f(a)}{x - a}$ est croissante.</p>
<p><b>Étape 2 : Par l'absurde.</b> Si $f(b) > f(a)$ avec $a \lt b$, la pente $s = \frac{f(b) - f(a)}{b - a} > 0$.</p>
<p><b>Étape 3 : Pour $x > b$.</b> Pentes croissantes ($a \lt b \lt x$) : $\frac{f(x) - f(a)}{x - a}\geq s$. On multiplie par $x - a > 0$ : $f(x) - f(a)\geq s(x - a)$, donc $f(x)\geq f(a) + s(x - a)\to+\infty$ quand $x\to+\infty$ (car $s > 0$) : $f$ n'est pas majorée.</p>
<p><b>Étape 4 : Le cas $f(b) \lt f(a)$.</b> Même raisonnement vers $-\infty$.</p>
<p><b>Étape 5 : Conclusion.</b> $f(a) = f(b)$ pour tous $a, b$ : $\cG{f\ \text{est constante}}$.</p>

<p class="ml">Exercice 2 : l'inégalité de Hölder (cas discret)</p>
<p>$a_i, b_i\geq0$, $\frac1p + \frac1q = 1$ : $\sum a_ib_i\leq\big(\sum a_i^p\big)^{1/p}\big(\sum b_i^q\big)^{1/q}$.</p>
<p><b>Étape 1 : Rappel.</b> Young : $uv\leq\frac{u^p}p + \frac{v^q}q$ (exemple 6).</p>
<p><b>Étape 2 : On normalise.</b> $A = \big(\sum a_i^p\big)^{1/p}$, $B = \big(\sum b_i^q\big)^{1/q}$ (supposés non nuls), $u_i = \frac{a_i}A$, $v_i = \frac{b_i}B$ : $\sum u_i^p = \frac{\sum a_i^p}{A^p} = \frac{A^p}{A^p} = 1$, et de même $\sum v_i^q = 1$.</p>
<p><b>Étape 3 : Young terme à terme, puis on somme.</b> $u_iv_i\leq\frac{u_i^p}p + \frac{v_i^q}q$ pour chaque $i$ ; en sommant : $\sum u_iv_i\leq\frac1p\sum u_i^p + \frac1q\sum v_i^q = \frac1p\times1 + \frac1q\times1 = 1$.</p>
<p><b>Étape 4 : Conclusion.</b> $u_iv_i = \frac{a_ib_i}{AB}$, donc $\frac1{AB}\sum a_ib_i\leq1$ ; on multiplie par $AB > 0$ : $\cG{\sum a_ib_i\leq AB}$ (avec $p = q = 2$ : Cauchy-Schwarz).</p>

<h2 id="x-arbre">L'arbre de la convexité</h2>
<p>Lis-le de gauche à droite, et clique une conclusion pour aller à la méthode.</p>
<div class="htree"><div class="hr"><span class="hq hroot">Une question de convexité</span><ul>
<li><div class="hr"><em>$f$ convexe ?</em><span class="hq">$f$ deux fois dérivable ?</span><ul>
<li><div class="hr"><em>oui</em><a class="hl ok" href="#x-der">$f''\geq0$</a></div></li>
<li><div class="hr"><em>une fois</em><a class="hl" href="#x-der">$f'$ croissante</a></div></li>
<li><div class="hr"><em>non</em><a class="hl" href="#x-def">définition, somme, sup</a></div></li>
</ul></div></li>
<li><div class="hr"><em>une inégalité</em><span class="hq">Quelle forme ?</span><ul>
<li><div class="hr"><em>$f\geq$ droite</em><a class="hl ok" href="#x-der">tangente d'une convexe</a></div></li>
<li><div class="hr"><em>$f\leq$ droite sur $[a, b]$</em><a class="hl" href="#x-der">corde d'une convexe</a></div></li>
<li><div class="hr"><em>des moyennes</em><a class="hl" href="#x-jensen">Jensen</a></div></li>
<li><div class="hr"><em>produit et somme</em><a class="hl" href="#x-der">$\ln$ concave : IAG, Young</a></div></li>
</ul></div></li>
<li><div class="hr"><em>des pentes</em><a class="hl end" href="#x-pentes">lemme des trois pentes</a></div></li>
</ul></div></div>
`
};

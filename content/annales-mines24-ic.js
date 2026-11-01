/* Annales · Mines-Ponts 2024, Informatique commune (MP, PC, PSI). Énoncé transcrit (sujet GIP CCMP, licence CC BY-NC-ND), corrigé rédigé pour Lemme. */
(() => {
const R = String.raw;
const P = { subj: "annales", year: "mp", chap: 13, kind: "probleme", qnav: true, side: true };
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const C = s => `<pre><code>${esc(s.replace(/^\n/, ""))}</code></pre>`;
const T = (x, y, s, c = "", fs) => `<text class="${c}" x="${x}" y="${y}" text-anchor="middle"${fs ? ` font-size="${fs}"` : ""}>${s}</text>`;
const fig = (w, h, label, inner, cap) => `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}" style="max-height:none">${inner}</svg>${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;
const node = (x, y, s) => `<circle class="mass" cx="${x}" cy="${y}" r="20"/>` + T(x, y + 4, s, "", 11);
const ln = (x1, y1, x2, y2, c = "k") => `<line class="${c}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;

/* Graphe de la question 16 */
const F_G16 = (() => {
  const w0 = [0.1, 0.1, 0.6], W = [[0.21, 0.04, 0.15], [0.28, 0.08, 0.06], [0.14, 0.06, 0.15]];
  const L = i => [180, 60 + i * 110], Rr = i => [420, 60 + i * 110];
  let s = node(50, 170, "σ") + node(560, 170, "τ");
  for (let i = 0; i < 3; i++) { const [x, y] = L(i), [u, v] = Rr(i); s += ln(70, 170, x - 20, y) + T((50 + x) / 2 - 8, (170 + y) / 2 - 6, w0[i], "b", 13) + ln(u + 20, v, 540, 170) + T((u + 560) / 2 + 8, (v + 170) / 2 - 6, "1", "sm", 12); }
  for (let i = 0; i < 3; i++) for (let k = 0; k < 3; k++) { const [x, y] = L(i), [u, v] = Rr(k); s += ln(x + 20, y, u - 20, v, "thin"); }
  for (let i = 0; i < 3; i++) { const [x, y] = L(i), [u, v] = Rr(i); s += node(x, y, `S${i},0`) + node(u, v, `S${i},1`); }
  return fig(610, 340, "Graphe pondéré pour Obs = [2, 0]", s + T(180, 330, "obs₀ = 2", "sm", 12) + T(420, 330, "obs₁ = 0", "sm", 12),
    "Arcs depuis $\\sigma$ : $E_{2,i}$. Les neuf arcs du milieu sont pondérés par $E_{0,k}P_{i,k}$ (tableau ci-dessus).");
})();

LEMME.rappels({
  "ic-cplx": { t: "Complexité d'une boucle", b: R`<p>On compte les opérations élémentaires : une boucle de $n$ tours dont le corps coûte $O(c)$ coûte $O(nc)$. Deux boucles imbriquées de $n$ et $k$ tours : $O(nk)$. Un test <code>x in L</code> sur une liste coûte $O(\mathrm{len}(L))$ ; sur un dictionnaire, $O(1)$ en moyenne.</p>` },
  "ic-dict": { t: "Dictionnaires en Python", b: R`<p><code>d = {}</code> crée un dictionnaire vide ; <code>c in d</code> teste la présence d'une clé ; <code>d[c] = v</code> crée ou modifie ; <code>d[c] += 1</code> incrémente une valeur existante.</p>` },
  "ic-sql": { t: "SQL : agrégation et jointure", b: R`<p><code>SELECT DISTINCT</code> retire les doublons. <code>JOIN ... ON</code> relie deux tables par une clé. <code>GROUP BY</code> regroupe les lignes, et <code>SUM</code>, <code>COUNT</code> calculent sur chaque groupe. Une sous-requête entre parenthèses peut fournir une valeur.</p>` },
  "ic-prog-dyn": { t: "Programmation dynamique", b: R`<p>On écrit une relation de récurrence entre sous-problèmes, on remplit un tableau dans l'ordre où les valeurs nécessaires sont déjà calculées (de bas en haut), et on garde de quoi reconstruire la solution (les « prédécesseurs »).</p>` },
  "ic-glouton": { t: "Algorithme glouton", b: R`<p>À chaque étape, il fait le choix qui paraît le meilleur sur le moment, sans jamais revenir en arrière. Il est rapide, mais pas toujours optimal : un contre-exemple suffit à le prouver.</p>` },
  "ic-dijkstra": { t: "Plus court chemin", b: R`<p>Dans un graphe à poids positifs, l'algorithme de Dijkstra calcule les plus courts chemins depuis une source. Le logarithme transforme un produit en somme : $\ln(ab) = \ln a+\ln b$, et $-\ln p\geqslant0$ quand $0< p\leqslant1$.</p>` }
});

const E0 = R`<p><b>Consignes Python</b> : <span data-def="py">pas de fonctions internes sur les listes ou chaînes (<code>min</code>, <code>max</code>, <code>count</code>, <code>remove</code>…) ; seules <code>len</code>, <code>append</code>, le tranchage et la concaténation sont permis</span>. Programmes commentés si nécessaire.</p>`;

const E1 = E0 + R`<p>Alice compresse un message, l'encode, le transmet ; Bob le décode puis le décompresse. On étudie la compression (codage arithmétique) puis le décodage (algorithme de Viterbi).</p>
<p>Avec le code de longueur fixe <code>'a'</code> = 00, <code>'b'</code> = 01, <code>'c'</code> = 10, la chaîne <code>s='abaabaca'</code> tient sur 16 bits. On peut coder <code>'a'</code> sur 1 bit et <code>'b'</code>, <code>'c'</code> sur 2 bits pour obtenir 11 bits.</p>
<ol><li>Proposer une telle représentation décodable sans ambiguïté, avec code(<code>'a'</code>) &lt; code(<code>'b'</code>) &lt; code(<code>'c'</code>).</li><li>Écrire <code>nbCaracteres(c:str, s:str) -> int</code> (nombre d'occurrences de <code>c</code> dans <code>s</code>), linéaire en $n = $ <code>len(s)</code>.</li><li>Que renvoie <code>listeCaracteres('abaabaca')</code> ? Expliquer son principe.
<pre><code>def listeCaracteres(s:str):
    listeCar = []
    n = len(s)
    for i in range(n):
        c = s[i]
        if not(c in listeCar):
            listeCar.append(c)
    return listeCar</code></pre></li><li>Complexité dans le pire cas en fonction de $n$ et du nombre $k$ de caractères distincts (le test <code>c in listeCar</code> est linéaire en la longueur de <code>listeCar</code>).</li><li>Que fait <code>analyseTexte</code> ? Valeur de <code>analyseTexte('babaaaabca')</code> ?
<pre><code>def analyseTexte(s:str):
    R = []
    l = listeCaracteres(s)
    for i in range(len(l)):
        c = l[i]
        R.append((c, nbCaracteres(c, s)))
    return R</code></pre></li><li>Complexité de <code>analyseTexte</code> en fonction de $n$ et $k$.</li><li>Réécrire <code>analyseTexte</code> avec un dictionnaire, en complexité linéaire en $n$, indépendante de $k$, avec un seul parcours de la chaîne. Exemple : <code>analyseTexte('abracadabra')</code> renvoie <code>{'a':5, 'b':2, 'r':2, 'c':1, 'd':1}</code>.</li></ol>
<p>Base de données : <span data-def="bdd"><code>caractere(idCar, symbole, typeCaractere, codeHTML)</code> ; <code>corpus(idLivre, titre, auteur, annee, nombreCaracteres, langue)</code> ; <code>occurrences(idCar, idLivre, nombreOccurrences)</code></span>.</p>
<ol start="8"><li>Requête SQL : liste sans doublon des auteurs de <code>corpus</code>.</li><li>Requête SQL : pour chaque caractère, le symbole et sa fréquence en <code>'Français'</code> (nombre total d'occurrences divisé par le nombre total de caractères des textes du corpus).</li></ol>`;

const E2 = E0 + R`<p><b>Codage arithmétique</b> : <span data-def="freq">fréquences $a : 0{,}2$, $b : 0{,}1$, $c : 0{,}2$, $d : 0{,}4$, $e : 0{,}1$, d'où les intervalles $a : [0;0{,}2[$, $b : [0{,}2;0{,}3[$, $c : [0{,}3;0{,}5[$, $d : [0{,}5;0{,}9[$, $e : [0{,}9;1[$</span>. On part de $[0;1[$ et, à chaque caractère, on garde la portion correspondante du sous-intervalle courant. Exemple : <code>'dac'</code> donne $[0{,}5;0{,}9[$, puis $[0{,}50;0{,}58[$, puis $[0{,}524;0{,}540[$. <span data-def="codecar"><code>codeCar(car, g, d)</code> renvoie le sous-intervalle de $[g,d[$ associé à <code>car</code></span>.</p>
<ol start="10"><li>Intervalle correspondant à <code>'bac'</code>.</li><li>Écrire <code>codage(s:str) -> (float, float)</code> qui renvoie l'intervalle final $(g,d)$.</li></ol>
<p><b>Décodage</b> : on repère dans quelle succession d'intervalles se trouve $x$. Pour $x = 0{,}123$ : <code>'a'</code>, puis <code>'d'</code> (sous-intervalle $[0{,}10;0{,}18[$), etc.</p>
<ol start="12"><li>Caractère qui suit <code>'ad'</code> pour $x = 0{,}123$, avec le sous-intervalle utilisé.</li><li>Donner deux chaînes correspondant à $0{,}2$. D'où vient l'ambiguïté ?</li></ol>
<p>On ajoute un caractère de fin <code>'#'</code>, de plage non vide près de $0$. <span data-def="decodecar"><code>decodeCar(x, g, d)</code> renvoie le caractère dont la plage dans $[g,d[$ contient $x$</span>.</p>
<ol start="14"><li>Écrire <code>decodage(x:float) -> str</code> (caractère <code>'#'</code> compris).</li></ol>`;

const E3 = E0 + R`<p><b>Viterbi</b>. Bob observe <code>Obs</code> $= [\mathrm{obs}_0,\dots,\mathrm{obs}_{N-1}]$, symboles de $\Sigma = [\![0,K-1]\!]$. <span data-def="E">$E[i][j]$ : probabilité d'observer $i$ sachant que $j$ a été émis</span>, ici $E = [[0.7,0.2,0.3],[0.2,0.7,0.1],[0.1,0.1,0.6]]$. <span data-def="P">$P[i][j]$ : probabilité d'émettre $j$ à l'instant $t+1$ sachant que $i$ a été émis à l'instant $t$</span>, ici $P = [[0.3,0.2,0.5],[0.4,0.4,0.2],[0.2,0.3,0.5]]$.</p>
<p>Graphe : un sommet $S_{i,j}$ par symbole $i$ et par instant $j$ ; arcs de chaque $S_{i,j}$ vers tous les $S_{k,j+1}$ ; une source $\sigma$ reliée à la première couche et une cible $\tau$ reliée à la dernière. <span data-def="poids">Poids : $\sigma\to S_{i,0}$ : $E_{\mathrm{obs}_0,i}$ ; $S_{i,j}\to S_{k,j+1}$ : $E_{\mathrm{obs}_{j+1},k}P_{i,k}$ ; vers $\tau$ : $1$</span>. La probabilité d'un chemin est le produit des poids ; on cherche le chemin de probabilité maximale.</p>
<ol start="15"><li>Nombre de sommets et d'arcs (sans $\sigma$, $\tau$ et leurs arcs).</li><li>Pour <code>Obs = [2,0]</code>, construire le graphe pondéré.</li><li>Nombre de chemins de $\sigma$ à $\tau$ ; une exploration exhaustive est-elle envisageable ?</li><li>Écrire <code>maximumListe(liste) -> (float, int)</code> : maximum et plus petit indice où il est atteint.</li><li>Écrire <code>glouton(Obs, P, E, K, N) -> [int]</code>, qui suit à chaque étape l'arc de plus forte probabilité (on dispose de <code>initialiserGlouton</code>).</li><li>Complexité de l'approche gloutonne.</li><li>Chemin glouton sur la figure 4 (arcs $\sigma\to0$ : $0{,}6$, $\sigma\to1$ : $0{,}4$ ; $0\to0$ : $0{,}5$, $0\to1$ : $0{,}1$, $1\to0$ : $0{,}9$, $1\to1$ : $0{,}01$ ; arcs vers $\tau$ : $1$). Optimalité ?</li><li>Ramener la recherche à un plus court chemin à poids positifs ; quel algorithme ?</li></ol>
<p><span data-def="dp">$T_{i,0} = E_{\mathrm{obs}_0,i}$ et, pour $j\geqslant1$, $T_{i,j} = \max_k T_{k,j-1}P_{k,i}E_{\mathrm{obs}_j,i}$ ; <code>argT</code> garde l'indice $k$ réalisant le maximum ($-1$ pour $j = 0$)</span>. On dispose de <code>initialiserViterbi(E, Obs0, K, N)</code> qui crée <code>T</code> et <code>argT</code> ($K$ lignes, $N$ colonnes) avec la colonne $0$ remplie.</p>
<ol start="23"><li>Écrire <code>construireTableauViterbi(Obs, P, E, K, N)</code> (de bas en haut).</li><li>Avec les tableaux donnés (dernière colonne de <code>T</code> : $1{,}8\cdot10^{-5}$, $3{,}5\cdot10^{-6}$, $1{,}3\cdot10^{-5}$ ; <code>argT</code> lignes : $[-1,2,0,0,2,1,1,0]$, $[-1,2,2,2,2,1,1,0]$, $[-1,2,0,0,2,1,1,0]$), donner la séquence la plus probable.</li><li>Complexités temporelle et spatiale de la programmation dynamique.</li></ol>`;

LEMME.exercises([
{ id: "mines24-ic-1", ...P, part: "1", level: 1, time: "35 min",
  title: "Analyse d'un texte, dictionnaires et SQL",
  enonce: E1,
  decode: { donnees: [R`Interdit : <code>count</code>, <code>max</code>… On écrit les boucles soi-même.`], but: R`Compter les caractères d'un texte, d'abord naïvement, puis en un seul parcours avec un dictionnaire ; écrire deux requêtes SQL.`, cles: {} },
  steps: [
    { q: 1, t: "Q1. Un code de longueur variable", h: R`<p>Aucun code ne doit être le début d'un autre.</p>`, b: R`<p>On propose :</p><div class="sbox">$$\texttt{'a'}\mapsto0,\qquad\texttt{'b'}\mapsto10,\qquad\texttt{'c'}\mapsto11.$$</div><p><b>Nombre de bits</b> : <code>'abaabaca'</code> contient 5 fois <code>'a'</code>, 2 fois <code>'b'</code>, 1 fois <code>'c'</code> : $5\times1+2\times2+1\times2 = 11$ bits : <code>0 10 0 0 10 0 11 0</code>.</p><p><b>Pas d'ambiguïté</b> : aucun code n'est le début (préfixe) d'un autre (on dit que le code est <b>préfixe</b>). On décode en lisant de gauche à droite : un <code>0</code> est forcément un <code>'a'</code> ; un <code>1</code> annonce <code>'b'</code> ou <code>'c'</code>, et le bit suivant tranche.</p><p><b>Ordre</b> : en binaire, $0< 10< 11$ (lus comme $0,2,3$), comme demandé.</p>` },
    { q: 2, t: "Q2. Compter les occurrences", h: R`<p>Un compteur et un seul parcours.</p>`, b: C(String.raw`
def nbCaracteres(c, s):
    compteur = 0
    for i in range(len(s)):
        if s[i] == c:          # une occurrence de plus
            compteur = compteur + 1
    return compteur`) + R`<p>Une boucle de $n$ tours, chaque tour en temps constant : complexité $O(n)$.</p>`, rappels: ["ic-cplx"] },
    { q: 3, t: "Q3. La liste des caractères utilisés", h: R`<p>Dérouler la boucle.</p>`, b: R`<p>On parcourt <code>'abaabaca'</code> : <code>'a'</code> est ajouté (liste vide), <code>'b'</code> est ajouté, les <code>'a'</code> et <code>'b'</code> suivants sont déjà présents, <code>'c'</code> est ajouté.</p><div class="sbox"><p style="margin:0">La fonction renvoie <code>['a', 'b', 'c']</code>.</p></div><p><b>Principe</b> : on parcourt la chaîne et on ajoute chaque caractère à <code>listeCar</code> seulement s'il n'y est pas encore. On obtient les caractères distincts, dans l'ordre de leur première apparition.</p>` },
    { q: 4, t: "Q4. Complexité de listeCaracteres", h: R`<p>Le test d'appartenance coûte au plus $k$.</p>`, b: R`<p>La boucle fait $n$ tours. À chaque tour, le test <code>c in listeCar</code> coûte au plus la longueur de <code>listeCar</code>, qui est toujours $\leqslant k$ (elle ne contient que des caractères distincts de <code>s</code>). Le reste du tour est en temps constant.</p><div class="sbox">$$\text{Complexité dans le pire cas : }O(nk).$$</div><p>Ce pire cas est atteint, par exemple quand les $k$ caractères distincts apparaissent au début puis que la suite répète le dernier : chaque test parcourt alors toute la liste.</p>`, rappels: ["ic-cplx"] },
    { q: 5, t: "Q5. Que fait analyseTexte ?", h: R`<p>Pour chaque caractère distinct, son nombre d'occurrences.</p>`, b: R`<p><b>Rôle</b> : la fonction renvoie la liste des couples (caractère, nombre d'occurrences), un couple par caractère distinct de <code>s</code>, dans l'ordre de première apparition.</p><p><b>Exemple</b> <code>'babaaaabca'</code> (positions 0 à 9) : <code>listeCaracteres</code> donne <code>['b', 'a', 'c']</code>. On compte : <code>'b'</code> en positions 0, 2, 7 (3 fois) ; <code>'a'</code> en positions 1, 3, 4, 5, 6, 9 (6 fois) ; <code>'c'</code> en position 8 (1 fois). Vérification : $3+6+1 = 10$ caractères.</p><div class="sbox"><p style="margin:0"><code>[('b', 3), ('a', 6), ('c', 1)]</code></p></div>` },
    { q: 6, t: "Q6. Complexité de analyseTexte", h: R`<p>Additionner le coût de <code>listeCaracteres</code> et celui des $k$ appels à <code>nbCaracteres</code>.</p>`, b: R`<ul><li>Ligne 3 : <code>listeCaracteres(s)</code> coûte $O(nk)$ (Q4).</li><li>Boucle : $k$ tours, chacun appelle <code>nbCaracteres</code>, en $O(n)$ (Q2) : en tout $O(nk)$.</li></ul><div class="sbox">$$\text{Complexité : }O(nk)+O(nk) = O(nk).$$</div>`, rappels: ["ic-cplx"] },
    { q: 7, t: "Q7. Un seul parcours avec un dictionnaire", h: R`<p>Le dictionnaire associe à chaque caractère son compteur.</p>`, b: C(String.raw`
def analyseTexte(s):
    compte = {}                 # caractère -> nombre d'occurrences
    for i in range(len(s)):     # un seul parcours de s
        c = s[i]
        if c in compte:         # test en temps constant
            compte[c] = compte[c] + 1
        else:
            compte[c] = 1       # première apparition
    return compte`) + R`<p><b>Complexité</b> : $n$ tours, chacun en temps constant (test d'appartenance d'une clé et mise à jour d'un dictionnaire en $O(1)$). Total $O(n)$, indépendant de $k$, et la chaîne n'est parcourue qu'une fois.</p><p>Exemple : <code>analyseTexte('abracadabra')</code> renvoie <code>{'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1}</code>.</p>`, rappels: ["ic-dict"] },
    { q: 8, t: "Q8. Les auteurs sans doublon", h: R`<p><code>DISTINCT</code>.</p>`, b: C(String.raw`
SELECT DISTINCT auteur
FROM corpus;`) + R`<p><code>DISTINCT</code> retire les doublons : Zola n'apparaît qu'une fois même s'il a plusieurs livres dans le corpus.</p>`, rappels: ["ic-sql"] },
    { q: 9, t: "Q9. Fréquence de chaque caractère en français", h: R`<p>Joindre les trois tables, filtrer sur la langue, regrouper par caractère, diviser par le total des caractères (sous-requête).</p>`, b: R`<p><b>Démarche</b> :</p><ul><li>jointure <code>caractere</code> – <code>occurrences</code> (par <code>idCar</code>) pour avoir le symbole, puis <code>occurrences</code> – <code>corpus</code> (par <code>idLivre</code>) pour avoir la langue ;</li><li>on ne garde que les livres en français ;</li><li>on regroupe par caractère et on somme les occurrences ;</li><li>on divise par le nombre total de caractères des livres en français, calculé par une sous-requête.</li></ul>` + C(String.raw`
SELECT ca.symbole,
       SUM(o.nombreOccurrences) * 1.0 /
         (SELECT SUM(nombreCaracteres) FROM corpus
          WHERE langue = 'Français') AS frequence
FROM caractere AS ca
JOIN occurrences AS o ON o.idCar = ca.idCar
JOIN corpus AS co ON co.idLivre = o.idLivre
WHERE co.langue = 'Français'
GROUP BY ca.idCar, ca.symbole;`) + R`<p>Le <code>* 1.0</code> force une division décimale (sinon certains systèmes font une division entière, qui donnerait $0$). On regroupe par <code>idCar</code> (clé primaire) et l'on cite aussi <code>symbole</code> pour pouvoir l'afficher. La fréquence est bien entre $0$ et $1$.</p>`, rappels: ["ic-sql"] }
  ],
  piege: R`En Q9, diviser par <code>COUNT(*)</code> ou oublier de restreindre le total aux livres en français : on n'obtiendrait plus une fréquence.`,
  methode: R`Pour compter en un seul parcours : un dictionnaire de compteurs. Pour une complexité : nombre de tours de boucle multiplié par le coût d'un tour, sans oublier les tests d'appartenance cachés.`
},
{ id: "mines24-ic-2", ...P, part: "2", level: 2, time: "25 min",
  title: "Codage arithmétique",
  enonce: E2,
  decode: { donnees: [R`Le sous-intervalle d'un caractère dans $[g,d[$ est $[g+a(d-g),\,g+b(d-g)[$ si sa plage dans $[0,1[$ est $[a,b[$.`], but: R`Coder une chaîne par un intervalle, puis décoder un réel.`, cles: {} },
  steps: [
    { q: 10, t: "Q10. Intervalle de « bac »", h: R`<p>À chaque étape, $[g,d[$ devient $[g+a(d-g),\,g+b(d-g)[$.</p>`, b: R`<p><b>Règle</b> : si la plage du caractère dans $[0;1[$ est $[a;b[$, le nouvel intervalle est $[g+a(d-g)\,;\,g+b(d-g)[$.</p><ul><li><code>'b'</code> (plage $[0{,}2;0{,}3[$) dans $[0;1[$ : $[0{,}2;0{,}3[$, de longueur $0{,}1$.</li><li><code>'a'</code> (plage $[0;0{,}2[$) dans $[0{,}2;0{,}3[$ : $[0{,}2+0\times0{,}1\,;\,0{,}2+0{,}2\times0{,}1[ = [0{,}2;0{,}22[$, de longueur $0{,}02$.</li><li><code>'c'</code> (plage $[0{,}3;0{,}5[$) dans $[0{,}2;0{,}22[$ : $[0{,}2+0{,}3\times0{,}02\,;\,0{,}2+0{,}5\times0{,}02[$.</li></ul><div class="sbox">$$\texttt{'bac'}\longmapsto[0{,}206\,;\,0{,}21[.$$</div><p>Vérification : la longueur finale vaut $0{,}1\times0{,}2\times0{,}2 = 0{,}004$, produit des fréquences.</p>` },
    { q: 11, t: "Q11. La fonction codage", h: R`<p>Appliquer <code>codeCar</code> à chaque caractère.</p>`, b: C(String.raw`
def codage(s):
    g, d = 0, 1                   # intervalle de départ [0, 1[
    for i in range(len(s)):
        g, d = codeCar(s[i], g, d)  # on affine avec le caractère lu
    return (g, d)`) + R`<p>Exemple : <code>codage('dac')</code> renvoie $(0{,}524\,;\,0{,}540)$.</p>` },
    { q: 12, t: "Q12. Le caractère après « ad »", h: R`<p>Se placer dans $[0{,}10;0{,}18[$ et calculer la position relative de $x$.</p>`, b: R`<p>Après <code>'ad'</code>, l'intervalle courant est $[0{,}10;0{,}18[$, de longueur $0{,}08$. La position relative de $x$ vaut</p>$$\frac{x-0{,}10}{0{,}08} = \frac{0{,}023}{0{,}08}\approx0{,}29\in[0{,}2;0{,}3[,$$<p>plage de <code>'b'</code>. Le sous-intervalle correspondant est</p><div class="sbox">$$[0{,}10+0{,}2\times0{,}08\,;\,0{,}10+0{,}3\times0{,}08[ = [0{,}116\,;\,0{,}124[\ni0{,}123 : \text{le caractère suivant est }\texttt{'b'}.$$</div>` },
    { q: 13, t: "Q13. Une ambiguïté", h: R`<p>Que se passe-t-il si l'on ajoute des <code>'a'</code> à la fin ?</p>`, b: R`<p>$0{,}2\in[0{,}2;0{,}3[$ : $0{,}2$ code <code>'b'</code>. Mais $0{,}2$ est aussi la borne gauche de l'intervalle de <code>'ba'</code>, $[0{,}2;0{,}22[$, et de celui de <code>'baa'</code>, $[0{,}2;0{,}202[$, etc.</p><div class="sbox"><p style="margin:0"><code>'b'</code> et <code>'ba'</code> (et aussi <code>'baa'</code>, <code>'baaa'</code>…) correspondent toutes à $0{,}2$.</p></div><p><b>Origine</b> : le réel ne dit pas où la chaîne s'arrête. Comme la plage de <code>'a'</code> commence à $0$, ajouter des <code>'a'</code> à la fin garde la même borne gauche : on ne sait pas quand arrêter le décodage.</p>` },
    { q: 14, t: "Q14. La fonction decodage", h: R`<p>Décoder un caractère, l'ajouter, se placer dans son sous-intervalle, jusqu'à lire <code>'#'</code>.</p>`, b: C(String.raw`
def decodage(x):
    s = ''
    g, d = 0, 1
    c = ''
    while c != '#':                # '#' marque la fin de la chaîne
        c = decodeCar(x, g, d)     # caractère dont la plage contient x
        s = s + c
        g, d = codeCar(c, g, d)    # on descend dans son sous-intervalle
    return s`) + R`<p>La boucle s'arrête au premier <code>'#'</code> lu, qui est inclus dans la chaîne renvoyée, comme demandé. (Avec des flottants de précision limitée, cela ne marche que pour des chaînes courtes, comme le rappelle l'énoncé.)</p>` }
  ],
  piege: R`En Q10, multiplier les bornes au lieu de multiplier la longueur : le nouvel intervalle est décalé de $g$ et mis à l'échelle de $d-g$.`,
  methode: R`Intervalle emboîté : $[g,d[\to[g+a(d-g),g+b(d-g)[$. Pour décoder, on refait le même chemin en cherchant à chaque étape la plage qui contient $x$.`
},
{ id: "mines24-ic-3", ...P, part: "3", level: 3, time: "50 min",
  title: "Décodage par l'algorithme de Viterbi",
  enonce: E3,
  decode: { donnees: [R`Graphe en $N$ couches de $K$ sommets, arcs complets entre deux couches consécutives.`, R`Probabilités dans $]0,1]$ : $-\ln$ les rend positives.`], but: R`Comparer exploration exhaustive, glouton et programmation dynamique pour trouver la séquence émise la plus probable.`, cles: {} },
  steps: [
    { q: 15, t: "Q15. Sommets et arcs", h: R`<p>$N$ couches de $K$ sommets ; $K^2$ arcs entre deux couches.</p>`, b: R`<p><b>Sommets</b> : $N$ couches (une par observation), $K$ sommets par couche : $NK$ sommets.</p><p><b>Arcs</b> : entre deux couches consécutives, chacun des $K$ sommets est relié aux $K$ sommets suivants : $K^2$ arcs. Il y a $N-1$ paires de couches consécutives.</p><div class="sbox">$$NK\ \text{sommets},\qquad(N-1)K^2\ \text{arcs}.$$</div>` },
    { q: 16, t: "Q16. Le graphe pour Obs = [2, 0]", h: R`<p>Lire la ligne 2 de $E$ pour les arcs issus de $\sigma$, la ligne 0 de $E$ et la matrice $P$ pour les autres.</p>`, b: R`<p><b>Arcs issus de $\sigma$</b> : $E_{\mathrm{obs}_0,i} = E_{2,i}$, ligne 2 de $E$ : $0{,}1$ ; $0{,}1$ ; $0{,}6$.</p><p><b>Arcs internes</b> $S_{i,0}\to S_{k,1}$ : $E_{\mathrm{obs}_1,k}P_{i,k} = E_{0,k}P_{i,k}$, avec la ligne 0 de $E$ : $(0{,}7\,;\,0{,}2\,;\,0{,}3)$.</p><div style="overflow-x:auto"><table class="vals"><tr><th>de \ vers</th><th>$S_{0,1}$</th><th>$S_{1,1}$</th><th>$S_{2,1}$</th></tr><tr><td>$S_{0,0}$</td><td>$0{,}7\times0{,}3 = 0{,}21$</td><td>$0{,}2\times0{,}2 = 0{,}04$</td><td>$0{,}3\times0{,}5 = 0{,}15$</td></tr><tr><td>$S_{1,0}$</td><td>$0{,}7\times0{,}4 = 0{,}28$</td><td>$0{,}2\times0{,}4 = 0{,}08$</td><td>$0{,}3\times0{,}2 = 0{,}06$</td></tr><tr><td>$S_{2,0}$</td><td>$0{,}7\times0{,}2 = 0{,}14$</td><td>$0{,}2\times0{,}3 = 0{,}06$</td><td>$0{,}3\times0{,}5 = 0{,}15$</td></tr></table></div>${F_G16}<p><b>Arcs vers $\tau$</b> : poids $1$.</p>` },
    { q: 17, t: "Q17. Combien de chemins ?", h: R`<p>Un symbole à choisir par couche.</p>`, b: R`<p>Un chemin de $\sigma$ à $\tau$ choisit exactement un sommet dans chacune des $N$ couches, et tous les choix sont possibles (arcs complets) : il y a $K$ choix par couche, donc</p><div class="sbox">$$K^N\ \text{chemins}.$$</div><p>C'est exponentiel en $N$ : pour $K = 3$ et un message de seulement $N = 100$ symboles, $3^{100}\approx5\times10^{47}$ chemins. Une exploration exhaustive est <b>impossible</b> en pratique.</p>` },
    { q: 18, t: "Q18. maximumListe", h: R`<p>Comparaison stricte pour garder le premier indice.</p>`, b: C(String.raw`
def maximumListe(liste):
    vmax, imax = liste[0], 0
    for i in range(1, len(liste)):
        if liste[i] > vmax:      # strict : on garde le premier indice du maximum
            vmax, imax = liste[i], i
    return (vmax, imax)`) + R`<p>L'inégalité stricte garantit que l'on renvoie le <b>plus petit</b> indice réalisant le maximum. On suppose la liste non vide.</p>` },
    { q: 19, t: "Q19. La stratégie gloutonne", h: R`<p>Depuis le symbole courant $i$, choisir le $k$ qui maximise $E_{\mathrm{obs}_j,k}P_{i,k}$.</p>`, b: R`<p><b>Remarque sur le code fourni</b> : dans <code>initialiserGlouton</code>, il faut lire <code>E[Obs[0]][i]</code> (ligne de l'observation, colonne du symbole) ; <code>E[Obs[0][i]]</code> est une coquille.</p>` + C(String.raw`
def glouton(Obs, P, E, K, N):
    etats = [initialiserGlouton(Obs, E, K)]    # meilleur premier symbole
    for j in range(1, N):
        i = etats[-1]                           # symbole courant
        probas = [E[Obs[j]][k] * P[i][k] for k in range(K)]  # poids des K arcs sortants
        p, k = maximumListe(probas)             # arc le plus probable
        etats.append(k)
    return etats`), rappels: ["ic-glouton"] },
    { q: 20, t: "Q20. Complexité du glouton", h: R`<p>$N$ étapes, $K$ arcs examinés par étape.</p>`, b: R`<p>L'initialisation examine $K$ valeurs. Puis $N-1$ tours de boucle ; à chaque tour, on calcule $K$ produits et on cherche le maximum de $K$ valeurs : $O(K)$.</p><div class="sbox">$$\text{Complexité : }O(NK).$$</div>` },
    { q: 21, t: "Q21. Le glouton n'est pas optimal", h: R`<p>Comparer le chemin glouton avec $\sigma\to1\to0\to\tau$.</p>`, b: R`<p><b>Chemin glouton</b> : depuis $\sigma$, l'arc le plus lourd mène au symbole $0$ ($0{,}6> 0{,}4$) ; depuis ce sommet, l'arc le plus lourd reste sur $0$ ($0{,}5> 0{,}1$). Chemin $\sigma\to0\to0\to\tau$, de probabilité $0{,}6\times0{,}5\times1 = 0{,}30$.</p><p><b>Meilleur chemin</b> : $\sigma\to1\to0\to\tau$, de probabilité $0{,}4\times0{,}9\times1 = 0{,}36> 0{,}30$. (Les deux autres valent $0{,}6\times0{,}1 = 0{,}06$ et $0{,}4\times0{,}01 = 0{,}004$.)</p><div class="sbox"><p style="margin:0">Le glouton renvoie $[0,0]$ alors que l'optimum est $[1,0]$ : l'approche gloutonne n'est <b>pas optimale</b>. Un premier choix un peu moins bon pouvait ouvrir un arc bien meilleur.</p></div>`, rappels: ["ic-glouton"] },
    { q: 22, t: "Q22. Se ramener à un plus court chemin", h: R`<p>Passer au logarithme.</p>`, b: R`<p>On remplace chaque poids $p\in]0,1]$ par $w = -\ln p\geqslant0$. Pour un chemin de poids $p_1,\dots,p_r$ :</p>$$\sum_{\ell}w_\ell = -\ln\Big(\prod_\ell p_\ell\Big).$$<p>Comme $-\ln$ est strictement décroissante, maximiser le produit des probabilités revient à <b>minimiser la somme des poids</b> $w$, qui sont positifs (un arc de probabilité nulle est simplement retiré). On cherche donc un plus court chemin de $\sigma$ à $\tau$ dans un graphe à poids positifs : on peut utiliser l'<b>algorithme de Dijkstra</b>.</p><p>(Le graphe étant sans circuit et rangé en couches, une simple programmation dynamique couche par couche suffit : c'est l'algorithme de Viterbi qui suit.)</p>`, rappels: ["ic-dijkstra"] },
    { q: 23, t: "Q23. Construire les tableaux de Viterbi", h: R`<p>Colonne par colonne : $T_{i,j}$ ne dépend que de la colonne $j-1$.</p>`, b: R`<p><b>Ordre de calcul</b> : la relation donne la colonne $j$ à partir de la colonne $j-1$ seulement. On remplit donc les colonnes de gauche à droite (de bas en haut au sens de la programmation dynamique), la colonne $0$ étant déjà remplie par <code>initialiserViterbi</code>.</p>` + C(String.raw`
def construireTableauViterbi(Obs, P, E, K, N):
    T, argT = initialiserViterbi(E, Obs[0], K, N)
    for j in range(1, N):            # colonne j, à partir de la colonne j-1
        for i in range(K):           # symbole i à l'instant j
            valeurs = [T[k][j-1] * P[k][i] * E[Obs[j]][i] for k in range(K)]
            T[i][j], argT[i][j] = maximumListe(valeurs)   # meilleur prédécesseur k
    return T, argT`), rappels: ["ic-prog-dyn"] },
    { q: 24, t: "Q24. Lire la séquence la plus probable", h: R`<p>Partir du maximum de la dernière colonne, puis remonter avec <code>argT</code>.</p>`, b: R`<p><b>Dernière colonne</b> ($j = 7$) de <code>T</code> : $1{,}8\cdot10^{-5}$, $3{,}5\cdot10^{-6}$, $1{,}3\cdot10^{-5}$. Le maximum est en ligne $0$ : le dernier symbole est $0$.</p><p><b>Remontée</b> : <code>argT[i][j]</code> donne le symbole à l'instant $j-1$.</p><ul><li>$j = 7$, symbole $0$ : <code>argT[0][7]</code> $= 0$, donc symbole $0$ en $j = 6$ ;</li><li>$j = 6$, symbole $0$ : <code>argT[0][6]</code> $= 1$, donc $1$ en $j = 5$ ;</li><li>$j = 5$, symbole $1$ : <code>argT[1][5]</code> $= 1$, donc $1$ en $j = 4$ ;</li><li>$j = 4$, symbole $1$ : <code>argT[1][4]</code> $= 2$, donc $2$ en $j = 3$ ;</li><li>$j = 3$, symbole $2$ : <code>argT[2][3]</code> $= 0$, donc $0$ en $j = 2$ ;</li><li>$j = 2$, symbole $0$ : <code>argT[0][2]</code> $= 0$, donc $0$ en $j = 1$ ;</li><li>$j = 1$, symbole $0$ : <code>argT[0][1]</code> $= 2$, donc $2$ en $j = 0$ (et <code>argT[2][0]</code> $= -1$ : on est arrivé à la source).</li></ul><div class="sbox"><p style="margin:0">Séquence la plus probable : $[2,0,0,2,1,1,0,0]$.</p></div>` },
    { q: 25, t: "Q25. Complexités de Viterbi", h: R`<p>Compter les cases et le travail par case.</p>`, b: R`<p><b>Temps</b> : il y a $(N-1)K$ cases à calculer ; chacune demande $K$ produits et un maximum sur $K$ valeurs, soit $O(K)$. Avec l'initialisation en $O(NK)$ :</p><div class="sbox">$$\text{temps : }O(NK^2),\qquad\text{espace : }O(NK)\ \text{(les deux tableaux }K\times N).$$</div><p>C'est polynomial, à comparer aux $K^N$ chemins de Q17.</p>`, rappels: ["ic-prog-dyn"] }
  ],
  piege: R`En Q24, lire <code>argT</code> dans le mauvais sens : <code>argT[i][j]</code> est le symbole à l'instant $j-1$, pas à l'instant $j+1$.`,
  methode: R`Chemin optimal dans un graphe en couches : programmation dynamique couche par couche (valeur optimale + prédécesseur), puis remontée depuis la meilleure case de la dernière couche.`
}
]);
})();

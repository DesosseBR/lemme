/* Annales · Mines-Ponts 2024, Informatique option MP (OCaml). Énoncé transcrit (sujet GIP CCMP, licence CC BY-NC-ND), corrigé rédigé pour Lemme. */
(() => {
const R = String.raw;
const P = { subj: "annales", year: "mp", chap: 14, kind: "probleme", qnav: true, side: true };
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const C = s => `<pre><code>${esc(s.replace(/^\n/, ""))}</code></pre>`;

LEMME.rappels({
  "imp-ordre": { t: "Relation d'ordre", b: R`<p>Réflexive ($x\trianglelefteq x$), antisymétrique ($x\trianglelefteq y$ et $y\trianglelefteq x$ donnent $x = y$), transitive ($x\trianglelefteq y\trianglelefteq z$ donne $x\trianglelefteq z$). Une <b>chaîne</b> est une partie où deux éléments sont toujours comparables ; une <b>antichaîne</b>, une partie où deux éléments distincts ne le sont jamais.</p>` },
  "imp-tas": { t: "Tas binaire", b: R`<p>Arbre binaire presque complet rangé dans un tableau (fils de $i$ en $2i+1$ et $2i+2$), avec l'invariant : <b>tout nœud est plus petit que ses fils</b>. Insertion (remontée) et retrait de la racine (descente) en $O(\log n)$ comparaisons.</p>` },
  "imp-couplage": { t: "Couplage et chemins augmentants", b: R`<p>Un couplage est un ensemble d'arêtes deux à deux sans extrémité commune. Un chemin augmentant alterne arêtes hors couplage et arêtes du couplage entre deux sommets libres. <b>Théorème de Berge</b> : un couplage est maximum si et seulement s'il n'admet aucun chemin augmentant.</p>` },
  "imp-invariant": { t: "Invariant de boucle", b: R`<p>Propriété vraie avant la boucle, conservée par chaque tour ; à la sortie, avec la condition d'arrêt, elle donne le résultat. C'est l'outil standard pour prouver la correction d'un programme itératif.</p>` }
});

const E0 = R`<p>Langage OCaml exclusivement. <span data-def="ordre">On représente une relation sur $V = \{v_0,\dots,v_{n-1}\}$ par une matrice <code>r : bool array array</code> de taille $n\times n$, avec <code>r.(i).(j)</code> vrai si et seulement si $v_i\trianglelefteq v_j$</span> (<code>type order = bool array array</code>).</p>`;

const E1 = E0 + R`<ol><li>Écrire <code>check_reflexivity (r:order) : bool</code> dans le paradigme <b>impératif</b>.</li><li>Écrire <code>check_reflexivity_bis (r:order) : bool</code> dans le paradigme <b>fonctionnel</b>.</li><li>Écrire <code>check_antisymmetry (r:order) : bool</code>.</li><li>Écrire <code>check_transitivity (r:order) : bool</code>.</li><li>Écrire <code>is_order (r:order) : bool</code> à partir de 1, 3 et 4.</li></ol>
<p><span data-def="graphe">Le graphe de l'ordre a pour arcs les $(v_i,v_j)$ tels que $v_i\trianglelefteq v_j$</span> ; le degré sortant d'un sommet est le nombre d'arcs qui en partent.</p>
<ol start="6"><li>Écrire <code>outdegrees (r:order) : int array</code> (degrés sortants).</li><li>Écrire <code>argmin (d:int array) : int</code> (un indice d'une valeur minimale).</li></ol>
<p><span data-def="tri">Un tri topologique est une permutation $\sigma$ de $[\![0,n-1]\!]$ telle que $v_i\trianglelefteq v_j$ entraîne $\sigma(i)\leqslant\sigma(j)$</span> ; $v_i$ est alors le sommet de numéro $\sigma(i)$.</p>
<ol start="8"><li>Montrer qu'il existe une constante $\delta_0$ telle que, pour tout tri topologique $\sigma$, le sommet de numéro $n-1$ est de degré sortant $\delta_0$ et les autres de degré sortant $\geqslant\delta_0$.</li><li>Écrire <code>topological_sort (r:order) : int array</code> qui attribue les numéros par ordre décroissant en s'appuyant sur la question 8.</li><li>Énoncer des invariants qui prouvent la correction de <code>topological_sort</code>.</li><li>Complexité en temps de <code>topological_sort</code> en fonction de $n$ ; comment la qualifier par rapport à la taille de l'entrée ?</li></ol>`;

const E2 = E0 + R`<p><span data-def="chaine">Une chaîne est une partie $C$ telle que deux éléments quelconques $c,c'$ vérifient $c\trianglelefteq c'$ ou $c'\trianglelefteq c$</span> (représentée par une <code>int list</code>). Code donné :</p>
<pre><code>let rec is_chain (r:order) (c:int list) : bool =
  match c with
  | [] -> true
  | v::cc -> List.for_all (fun x -> x > v || x &lt; v) cc
             && is_chain r cc</code></pre>
<ol start="12"><li>Confirmer ou réfuter : <code>is_chain r c</code> teste si <code>c</code> est une chaîne pour <code>r</code>. Dans le second cas, corriger la fonction.</li><li>Complexité de <code>is_chain</code> en fonction de la longueur $\gamma$ de <code>c</code>.</li></ol>
<p>On veut <code>is_chain_bis</code> en $O(\gamma\log\gamma)$ avec une structure mutable de capacité bornée : <span data-def="hp"><code>init : order -> int -> hp</code>, <code>is_empty : hp -> bool</code>, <code>push : hp -> int -> bool</code>, <code>pop : hp -> bool</code> ; <code>push</code> et <code>pop</code> peuvent échouer, ce que signale leur valeur de retour</span>. La fonction insère tous les éléments de <code>c</code> puis les retire tous, et renvoie la conjonction des succès.</p>
<ol start="14"><li>Compléter la description du type <code>hp</code> en nommant une structure de données (avec son invariant) pour que <code>is_chain_bis</code> respecte la spécification en $O(\gamma\log\gamma)$. Justifier.</li></ol>
<p><span data-def="anti">Une antichaîne est une partie dont les éléments sont deux à deux incomparables</span>.</p>
<ol start="15"><li>Modifier <code>is_chain</code> en <code>is_antichain</code> ; en déduire sa complexité.</li><li>Confirmer ou réfuter l'existence d'une fonction <code>is_antichain_bis</code> en $O(\alpha\log^2\alpha)$, où $\alpha$ est la longueur de la liste.</li></ol>`;

const E3 = E0 + R`<p><span data-def="couv">Une couverture est une famille $(C_\ell)_{1\leqslant\ell\leqslant\lambda}$ de chaînes dont la réunion est $V$</span>.</p>
<ol start="17"><li>Si $(C_\ell)$ est une couverture et $A$ une antichaîne de cardinal $\alpha$, montrer que $\alpha\leqslant\lambda$.</li></ol>
<p><span data-def="pours">Graphe des poursuites : graphe biparti $P$ sur $W_0 = \{w_i\}$ et $W_1 = \{w_{n+i}\}$ (deux copies de $V$), avec une arête $(w_i,w_{n+j})$ dès que $i\neq j$ et $v_i\trianglelefteq v_j$</span>. Représentation : <code>type bipartite = int list array</code> de longueur $2n$, chaque arête notée deux fois. Un couplage est un ensemble d'arêtes d'extrémités distinctes.</p>
<ol start="18"><li>Écrire <code>bipartite_of_order (r:order) : bipartite</code>.</li><li>Pour un couplage $M$, on prend la partition $(C_\ell)$ de $V$ la plus fine possible telle que $(w_i,w_{n+j})\in M$ impose que $v_i$ et $v_j$ soient dans la même part. Montrer que chaque $C_\ell$ est une chaîne.</li></ol>
<p><span data-def="m">Un couplage est codé par <code>m : int array</code> de longueur $n$ : <code>m.(j) = i</code> si $(w_i,w_{n+j})\in M$, et $-1$ si $w_{n+j}$ n'est pas couvert</span>.</p>
<ol start="20"><li>Écrire <code>chains_of_matching (m:int array) : int list list</code>.</li><li>Une couverture par des chaînes disjointes étant fixée, construire un couplage qui la redonne par la question 19.</li><li>Montrer que la construction de 19 donne une couverture par un nombre minimum de chaînes si et seulement si $M$ est de cardinal maximum.</li><li>Écrire <code>maximum_matching (p:bipartite) : int array</code>.</li><li>Écrire <code>minimum_cover (r:order) : int list list</code>.</li><li>Complexité de <code>minimum_cover</code> en fonction de $n$.</li></ol>`;

LEMME.exercises([
{ id: "mines24-infomp-1", ...P, part: "1", level: 2, time: "50 min",
  title: "Relation d'ordre et tri topologique",
  enonce: E1,
  decode: { donnees: [R`La matrice est de taille $n\times n$ : lire toute l'entrée coûte déjà $n^2$.`, R`Réflexivité : chaque sommet a une boucle, donc un degré sortant $\geqslant1$.`], but: R`Vérifier les axiomes d'un ordre, puis numéroter les sommets en retirant à chaque fois un élément maximal.`, cles: {} },
  steps: [
    { q: 1, t: "Q1. Réflexivité, version impérative", h: R`<p>Une référence booléenne et une boucle <code>for</code>.</p>`, b: C(String.raw`
let check_reflexivity (r:order) : bool =
  let n = Array.length r in
  let ok = ref true in
  for i = 0 to n - 1 do
    if not r.(i).(i) then ok := false   (* v_i n'est pas en relation avec lui-même *)
  done;
  !ok`) + R`<p>Style impératif : variable mutable (référence) et boucle. Complexité $O(n)$.</p>` },
    { q: 2, t: "Q2. Réflexivité, version fonctionnelle", h: R`<p>Récursion sur l'indice, sans référence.</p>`, b: C(String.raw`
let check_reflexivity_bis (r:order) : bool =
  let n = Array.length r in
  let rec from i = i >= n || (r.(i).(i) && from (i + 1)) in
  from 0`) + R`<p>Aucune variable mutable : la fonction récursive <code>from i</code> vaut « tous les $r_{k,k}$ pour $k\geqslant i$ sont vrais ». Le <code>&amp;&amp;</code> paresseux arrête dès le premier échec. Variante tout aussi fonctionnelle : <code>Array.for_all (fun b -> b) (Array.mapi (fun i ligne -> ligne.(i)) r)</code>.</p>` },
    { q: 3, t: "Q3. Antisymétrie", h: R`<p>Chercher $i\neq j$ avec <code>r.(i).(j)</code> et <code>r.(j).(i)</code>.</p>`, b: C(String.raw`
let check_antisymmetry (r:order) : bool =
  let n = Array.length r in
  let ok = ref true in
  for i = 0 to n - 1 do
    for j = 0 to n - 1 do
      if i <> j && r.(i).(j) && r.(j).(i) then ok := false
    done
  done;
  !ok`) + R`<p>Comme les $v_i$ sont distincts, $v_i = v_j$ équivaut à $i = j$ : l'antisymétrie interdit d'avoir les deux relations pour $i\neq j$. Complexité $O(n^2)$.</p>` },
    { q: 4, t: "Q4. Transitivité", h: R`<p>Trois boucles imbriquées.</p>`, b: C(String.raw`
let check_transitivity (r:order) : bool =
  let n = Array.length r in
  let ok = ref true in
  for i = 0 to n - 1 do
    for j = 0 to n - 1 do
      if r.(i).(j) then
        for k = 0 to n - 1 do
          if r.(j).(k) && not r.(i).(k) then ok := false   (* contre-exemple *)
        done
    done
  done;
  !ok`) + R`<p>On teste tous les triplets $(i,j,k)$ : complexité $O(n^3)$.</p>` },
    { q: 5, t: "Q5. Est-ce un ordre ?", h: R`<p>Conjonction des trois tests.</p>`, b: C(String.raw`
let is_order (r:order) : bool =
  check_reflexivity r && check_antisymmetry r && check_transitivity r`), rappels: ["imp-ordre"] },
    { q: 6, t: "Q6. Degrés sortants", h: R`<p>Le degré sortant de $v_i$ est le nombre de <code>true</code> sur la ligne $i$.</p>`, b: C(String.raw`
let outdegrees (r:order) : int array =
  let n = Array.length r in
  let d = Array.make n 0 in
  for i = 0 to n - 1 do
    for j = 0 to n - 1 do
      if r.(i).(j) then d.(i) <- d.(i) + 1   (* arc (v_i, v_j) *)
    done
  done;
  d`) + R`<p>Les arcs issus de $v_i$ sont les $(v_i,v_j)$ avec $v_i\trianglelefteq v_j$, boucle $(v_i,v_i)$ comprise. Complexité $O(n^2)$.</p>` },
    { q: 7, t: "Q7. Indice d'un minimum", h: R`<p>Parcours en gardant le meilleur indice.</p>`, b: C(String.raw`
let argmin (d:int array) : int =
  let best = ref 0 in
  for j = 1 to Array.length d - 1 do
    if d.(j) < d.(!best) then best := j
  done;
  !best`) + R`<p>On suppose <code>d</code> non vide. Invariant : après le tour $j$, <code>d.(!best)</code> est le minimum de <code>d.(0..j)</code>.</p>` },
    { q: 8, t: "Q8. Le dernier sommet a un degré sortant de 1", h: R`<p>Un arc qui part du sommet numéroté $n-1$ arrive sur un numéro $\geqslant n-1$.</p>`, b: R`<p>On montre que $\delta_0 = 1$ convient.</p><p><b>Tous les degrés sont $\geqslant1$</b> : par réflexivité, chaque $v_i$ a la boucle $(v_i,v_i)$.</p><p><b>Le sommet de numéro $n-1$ a un degré exactement $1$</b> : soit $u = v_{\sigma^{-1}(n-1)}$ et soit un arc $(u,v_j)$, c'est-à-dire $u\trianglelefteq v_j$. Par définition du tri topologique, $\sigma(j)\geqslant\sigma(\sigma^{-1}(n-1)) = n-1$, donc $\sigma(j) = n-1$ (c'est le plus grand numéro), donc $v_j = u$ ($\sigma$ est une bijection). Le seul arc issu de $u$ est sa boucle.</p><div class="sbox"><p style="margin:0">$\delta_0 = 1$ : le sommet de numéro $n-1$ est de degré sortant $1$ (c'est un élément maximal), les autres de degré $\geqslant1$.</p></div><p><b>Conséquence utile</b> : un sommet de degré sortant minimal (égal à $1$) est un élément maximal ; c'est lui qu'on numérote en dernier.</p>` },
    { q: 9, t: "Q9. Le tri topologique", h: R`<p>Tant qu'il reste des sommets : prendre un sommet de degré minimal, lui donner le plus grand numéro libre, puis le retirer (mettre à jour les degrés des sommets qui pointent vers lui).</p>`, b: R`<p><b>Idée</b> : d'après Q8 appliquée à l'ensemble des sommets restants, un sommet de degré sortant minimal (dans le graphe restant) est maximal. On lui donne le plus grand numéro disponible, on le retire, et on recommence. Retirer $v$ diminue de $1$ le degré de chaque sommet restant $u\neq v$ tel que $u\trianglelefteq v$ ; on met le degré de $v$ à <code>max_int</code> pour ne plus le choisir.</p>` + C(String.raw`
let topological_sort (r:order) : int array =
  let n = Array.length r in
  let d = outdegrees r in              (* degrés sortants dans le graphe restant *)
  let sigma = Array.make n 0 in
  for k = n - 1 downto 0 do
    let v = argmin d in                (* sommet maximal parmi les restants (Q8) *)
    sigma.(v) <- k;                    (* il reçoit le plus grand numéro libre *)
    d.(v) <- max_int;                  (* on le retire *)
    for u = 0 to n - 1 do
      if d.(u) <> max_int && r.(u).(v) then d.(u) <- d.(u) - 1   (* arc (u,v) supprimé *)
    done
  done;
  sigma`) },
    { q: 10, t: "Q10. Invariants de correction", h: R`<p>Décrire, au début du tour $k$, l'ensemble $R$ des sommets déjà numérotés et le contenu de <code>d</code>.</p>`, b: R`<p>Notons $R_k$ l'ensemble des sommets numérotés avant le tour $k$ (au départ, $R_{n-1} = \varnothing$). Au début du tour $k$ :</p><ul><li><b>(I1)</b> $\sigma$ réalise une bijection de $R_k$ sur $[\![k+1,n-1]\!]$ ;</li><li><b>(I2)</b> pour tout $u\notin R_k$ : <code>d.(u)</code> $= \mathrm{card}\{w\notin R_k : v_u\trianglelefteq v_w\}$ (degré sortant dans le graphe restant), et <code>d.(u)</code> $=$ <code>max_int</code> pour $u\in R_k$ ;</li><li><b>(I3)</b> si $v_i\trianglelefteq v_j$ et $i\in R_k$, alors $j\in R_k$ et $\sigma(i)\leqslant\sigma(j)$ (aucun sommet numéroté n'est en dessous d'un sommet restant).</li></ul><p><b>Initialisation</b> : $R = \varnothing$, <code>d</code> = degrés de Q6 : vrai.</p><p><b>Conservation</b> : le sommet restant est un ensemble ordonné (restriction de l'ordre). D'après Q8 appliquée à lui, le minimum des degrés restants vaut $1$ et le sommet $v$ choisi est maximal parmi les restants : si $v\trianglelefteq w$ avec $w$ restant, alors $w = v$. On lui donne le numéro $k$ :</p><ul><li>(I1) : $\sigma$ est une bijection de $R_k\cup\{v\}$ sur $[\![k,n-1]\!]$ ;</li><li>(I3) : si $v\trianglelefteq w$, alors soit $w = v$, soit $w\in R_k$, de numéro $> k$ ; pour les anciens sommets numérotés, rien ne change ;</li><li>(I2) : retirer $v$ enlève exactement un arc $(u,v)$ à chaque $u$ restant tel que $v_u\trianglelefteq v$ ; c'est la mise à jour faite.</li></ul><p><b>Conclusion</b> : après le tour $k = 0$, $R = V$, $\sigma$ est une permutation de $[\![0,n-1]\!]$ (I1) et respecte l'ordre (I3) : c'est un tri topologique.</p>`, rappels: ["imp-invariant"] },
    { q: 11, t: "Q11. Complexité", h: R`<p>$n$ tours, chacun en $O(n)$, plus le calcul initial des degrés.</p>`, b: R`<p><code>outdegrees</code> coûte $O(n^2)$. Puis $n$ tours, chacun avec un <code>argmin</code> en $O(n)$ et une mise à jour en $O(n)$ : $O(n^2)$.</p><div class="sbox">$$\text{Complexité : }\Theta(n^2).$$</div><p>L'entrée <code>r</code> occupe $n^2$ cases : la complexité est <b>linéaire en la taille de l'entrée</b>. On ne peut pas faire mieux, puisqu'il faut au moins lire la matrice.</p>` }
  ],
  piege: R`En Q9, ne pas mettre à jour les degrés après avoir retiré un sommet : le deuxième sommet choisi ne serait plus forcément maximal parmi les restants.`,
  methode: R`Tri topologique « par la fin » : retirer à chaque étape un élément maximal (degré sortant $1$ grâce à la réflexivité), en maintenant les degrés du graphe restant.`
},
{ id: "mines24-infomp-2", ...P, part: "2", level: 3, time: "40 min",
  title: "Chaînes, antichaînes et tas",
  enonce: E2,
  decode: { donnees: [R`<code>x > v || x < v</code> compare les <b>numéros</b> des sommets, pas les éléments pour la relation <code>r</code>.`, R`La transitivité permet de déduire des comparaisons sans les tester toutes.`], but: R`Tester chaînes et antichaînes, et voir pourquoi on peut aller vite pour les unes et pas pour les autres.`, cles: {} },
  steps: [
    { q: 12, t: "Q12. La fonction is_chain est fausse", h: R`<p>Que vaut <code>x > v || x < v</code> pour deux sommets distincts ?</p>`, b: R`<p><b>Réfutation</b> : la fonction compare les entiers <code>x</code> et <code>v</code> avec l'ordre usuel $\leqslant$, et non avec la relation <code>r</code> (qui n'est même pas utilisée). Pour deux sommets distincts, <code>x > v || x &lt; v</code> est toujours vrai : <code>is_chain r c</code> renvoie <code>true</code> pour toute liste sans doublon.</p><p><b>Contre-exemple</b> : l'ordre « égalité » sur $V = \{v_0,v_1\}$ (<code>r</code> = matrice identité) ; $\{v_0,v_1\}$ n'est pas une chaîne, mais <code>is_chain r [0;1]</code> renvoie <code>true</code>.</p><p><b>Correction</b> : tester la comparabilité pour <code>r</code>.</p>` + C(String.raw`
let rec is_chain (r:order) (c:int list) : bool =
  match c with
  | [] -> true
  | v :: cc -> List.for_all (fun x -> r.(v).(x) || r.(x).(v)) cc
               && is_chain r cc`) + R`<p><b>Preuve</b> (récurrence sur la longueur) : la liste vide est une chaîne. Une liste <code>v :: cc</code> est une chaîne si et seulement si <code>v</code> est comparable à chaque élément de <code>cc</code> (test du <code>for_all</code>) et <code>cc</code> est une chaîne (appel récursif, correct par hypothèse de récurrence) : ce sont exactement toutes les paires.</p>`, rappels: ["imp-ordre"] },
    { q: 13, t: "Q13. Complexité de is_chain", h: R`<p>Le premier appel fait $\gamma-1$ tests, le suivant $\gamma-2$…</p>`, b: R`<p>Sur une liste de longueur $\ell$, <code>for_all</code> fait au plus $\ell-1$ tests en $O(1)$, puis l'appel récursif porte sur une liste de longueur $\ell-1$. Dans le pire cas (une chaîne : aucun arrêt anticipé) :</p>$$\sum_{\ell=1}^{\gamma}(\ell-1) = \frac{\gamma(\gamma-1)}2.$$<div class="sbox">$$\text{Complexité : }O(\gamma^2).$$</div>` },
    { q: 14, t: "Q14. Un tas binaire qui échoue sur les incomparables", h: R`<p>Un tas min pour la relation <code>r</code> ; chaque comparaison entre deux éléments incomparables fait échouer l'opération.</p>`, b: R`<p><b>Structure</b> : <code>hp</code> est un <b>tas binaire</b> (file de priorité) de capacité $\gamma$, rangé dans un tableau, dont les comparaisons se font avec <code>r</code>. Invariant de bonne constitution : pour tout nœud $p$ de fils $f$, on a $v_p\trianglelefteq v_f$ (le parent est plus petit que ses fils pour <code>r</code>).</p><p><b>Opérations</b> :</p><ul><li><code>push q i</code> : on place $i$ en dernière position et on le fait remonter. Chaque comparaison avec le parent utilise <code>r</code> ; si les deux éléments sont <b>incomparables</b>, <code>push</code> renvoie <code>false</code>.</li><li><code>pop q</code> : on retire la racine, on met le dernier élément à la racine et on le fait descendre en le comparant à ses fils (et les fils entre eux). Si une comparaison porte sur deux incomparables, <code>pop</code> renvoie <code>false</code>.</li></ul><p><b>Correction</b> :</p><ul><li>si <code>c</code> est une chaîne, toutes les comparaisons réussissent : la fonction renvoie <code>true</code> ;</li><li>si la fonction renvoie <code>true</code>, l'invariant est vrai à chaque étape. La racine est alors plus petite que tous les éléments du tas (transitivité le long des branches), et le nouvel élément remonté à la racine après un <code>pop</code> était un descendant de l'ancienne racine. Les éléments sortent donc dans l'ordre $x_1\trianglelefteq x_2\trianglelefteq\dots\trianglelefteq x_\gamma$ ; par transitivité, deux éléments quelconques sont comparables : <code>c</code> est une chaîne ;</li><li>la fonction ne renvoie <code>false</code> que si elle a trouvé deux éléments de <code>c</code> incomparables, auquel cas <code>c</code> n'est pas une chaîne.</li></ul><p><b>Complexité</b> : $\gamma$ insertions et $\gamma$ retraits, chacun en $O(\log\gamma)$ comparaisons (hauteur du tas) : $O(\gamma\log\gamma)$. C'est un tri par tas qui vérifie au passage que tout est comparable.</p>`, rappels: ["imp-tas"] },
    { q: 15, t: "Q15. Tester une antichaîne", h: R`<p>Remplacer « comparables » par « incomparables ».</p>`, b: C(String.raw`
let rec is_antichain (r:order) (a:int list) : bool =
  match a with
  | [] -> true
  | v :: aa -> List.for_all (fun x -> not r.(v).(x) && not r.(x).(v)) aa
               && is_antichain r aa`) + R`<p>La structure du code est identique à celle de <code>is_chain</code> (Q12) : seul le prédicat testé change, toujours en $O(1)$. Le décompte de Q13 s'applique tel quel : complexité $O(\alpha^2)$.</p>` },
    { q: 16, t: "Q16. Pas d'algorithme en α log² α", h: R`<p>Argument d'adversaire : une seule paire comparable peut se cacher n'importe où.</p>`, b: R`<p><b>Réfutation</b> : tout algorithme correct doit consulter <code>r</code> pour <b>chacune</b> des $\frac{\alpha(\alpha-1)}2$ paires, donc faire $\Omega(\alpha^2)$ opérations, ce qui est plus que $O(\alpha\log^2\alpha)$.</p><p><b>Argument d'adversaire</b> : on part de l'ordre « égalité » ($v_i\trianglelefteq v_j\iff i = j$), pour lequel la liste <code>a</code> est une antichaîne, et l'algorithme doit répondre <code>true</code>. Supposons qu'il ne consulte jamais <code>r.(a).(b)</code> ni <code>r.(b).(a)</code> pour une certaine paire $\{a,b\}$ de la liste. On change alors <code>r</code> en ajoutant seulement $v_a\trianglelefteq v_b$. C'est encore une relation d'ordre (réflexive, antisymétrique, et transitive car il n'y a pas d'autre relation à enchaîner). L'algorithme fait exactement les mêmes lectures, donc répond encore <code>true</code>, alors que <code>a</code> n'est plus une antichaîne : contradiction.</p><p><b>Pourquoi c'est différent pour les chaînes</b> : dans une chaîne, la transitivité permet de déduire des comparaisons sans les lire (c'est ce qu'exploite le tas). Pour l'incomparabilité, rien ne se déduit.</p>` }
  ],
  piege: R`En Q12, croire la fonction correcte parce qu'elle « compare » : elle compare les numéros des sommets avec $\leqslant$, et non les éléments pour l'ordre <code>r</code>.`,
  methode: R`Borne inférieure de complexité : argument d'adversaire. Si l'algorithme ne lit pas une donnée, on la modifie sans qu'il s'en aperçoive.`
},
{ id: "mines24-infomp-3", ...P, part: "3", level: 4, time: "1 h",
  title: "Couverture minimale par des chaînes",
  enonce: E3,
  decode: { donnees: [R`Dans un couplage, chaque $w_i$ a au plus un partenaire « à droite » et chaque $w_{n+j}$ au plus un « à gauche » : on construit des chemins.`], but: R`Calculer le nombre minimal de chaînes qui couvrent un ordre, grâce à un couplage maximum (le théorème de Dilworth en version algorithmique).`, cles: {} },
  steps: [
    { q: 17, t: "Q17. Antichaîne et couverture", h: R`<p>Deux éléments d'une antichaîne ne peuvent pas être dans la même chaîne.</p>`, b: R`<p>Chaque élément $a\in A$ appartient à au moins une chaîne de la couverture ; on en choisit une, notée $C_{\ell(a)}$. L'application $a\mapsto\ell(a)$ va de $A$ dans $[\![1,\lambda]\!]$.</p><p>Elle est <b>injective</b> : si $\ell(a) = \ell(a')$ avec $a\neq a'$, alors $a$ et $a'$ sont dans la même chaîne, donc comparables, ce qui contredit le fait que $A$ est une antichaîne.</p><div class="sbox">$$\alpha = \mathrm{card}\,A\leqslant\mathrm{card}[\![1,\lambda]\!] = \lambda.$$</div>` },
    { q: 18, t: "Q18. Le graphe des poursuites", h: R`<p>Ajouter chaque arête dans les deux listes d'adjacence.</p>`, b: C(String.raw`
let bipartite_of_order (r:order) : bipartite =
  let n = Array.length r in
  let p = Array.make (2 * n) [] in
  for i = 0 to n - 1 do
    for j = 0 to n - 1 do
      if i <> j && r.(i).(j) then begin
        p.(i) <- (n + j) :: p.(i);       (* arête w_i -- w_{n+j} vue de w_i *)
        p.(n + j) <- i :: p.(n + j)      (* et vue de w_{n+j} *)
      end
    done
  done;
  p`) + R`<p>Complexité $O(n^2)$.</p>` },
    { q: 19, t: "Q19. Chaque part est une chaîne", h: R`<p>Montrer que chaque part est un chemin $v_{i_1}\to v_{i_2}\to\dots$ où chaque arc vient d'une arête du couplage.</p>`, b: R`<p><b>Graphe des liens</b> : on relie $v_i\to v_j$ quand $(w_i,w_{n+j})\in M$. Comme $M$ est un couplage :</p><ul><li>$w_i$ est extrémité d'au plus une arête : chaque $v_i$ a au plus un <b>successeur</b> ;</li><li>$w_{n+j}$ est extrémité d'au plus une arête : chaque $v_j$ a au plus un <b>prédécesseur</b>.</li></ul><p>La partition la plus fine qui met dans la même part les extrémités de chaque lien (c'est celle qui maximise $\lambda$) est celle des composantes connexes de ce graphe. Chaque composante est donc un chemin ou un cycle.</p><p><b>Pas de cycle</b> : un cycle $v_{i_1}\to v_{i_2}\to\dots\to v_{i_p}\to v_{i_1}$ ($p\geqslant2$, sommets distincts) donnerait par transitivité $v_{i_1}\trianglelefteq v_{i_2}$ et $v_{i_2}\trianglelefteq v_{i_1}$, donc $v_{i_1} = v_{i_2}$ par antisymétrie, ce qui est absurde.</p><p><b>Conclusion</b> : chaque part est un chemin $v_{i_1}\to v_{i_2}\to\dots\to v_{i_p}$ avec $v_{i_1}\trianglelefteq v_{i_2}\trianglelefteq\dots\trianglelefteq v_{i_p}$. Par transitivité, deux éléments quelconques de la part sont comparables : <b>chaque $C_\ell$ est une chaîne</b>.</p>` },
    { q: 20, t: "Q20. Des chaînes à partir du couplage", h: R`<p>Calculer le successeur de chaque sommet, puis partir des sommets sans prédécesseur.</p>`, b: R`<p><code>m.(j) = i</code> signifie que $v_i$ a pour successeur $v_j$. Les sommets sans prédécesseur (<code>m.(j) = -1</code>) sont les débuts des chaînes ; on suit les successeurs.</p>` + C(String.raw`
let chains_of_matching (m:int array) : int list list =
  let n = Array.length m in
  let succ = Array.make n (-1) in
  Array.iteri (fun j i -> if i >= 0 then succ.(i) <- j) m;   (* lien v_i -> v_j *)
  let rec follow v = if v = -1 then [] else v :: follow succ.(v) in
  let chains = ref [] in
  for j = 0 to n - 1 do
    if m.(j) = -1 then chains := follow j :: !chains     (* v_j débute une chaîne *)
  done;
  !chains`) + R`<p>Chaque sommet est dans exactement un chemin (Q19), et chaque chemin a exactement un début : on obtient toutes les chaînes, une seule fois chacune. Complexité $O(n)$.</p>` },
    { q: 21, t: "Q21. De la couverture au couplage", h: R`<p>Ranger chaque chaîne dans l'ordre et relier les éléments consécutifs.</p>`, b: R`<p>Soit une couverture par des chaînes disjointes. On range chaque chaîne $C_\ell$ dans l'ordre croissant : $c_1\trianglelefteq c_2\trianglelefteq\dots\trianglelefteq c_p$ (possible car tous ses éléments sont comparables). On met dans $M$ les arêtes $(w_{c_t},w_{n+c_{t+1}})$ pour $1\leqslant t< p$, pour toutes les chaînes.</p><ul><li>Ce sont des arêtes du graphe des poursuites : $c_t\neq c_{t+1}$ et $v_{c_t}\trianglelefteq v_{c_{t+1}}$.</li><li>C'est un couplage : dans une chaîne, chaque élément a au plus un suivant et au plus un précédent, et les chaînes sont disjointes.</li><li>La construction de Q19 relie exactement les éléments consécutifs de chaque chaîne : ses parts sont les $C_\ell$.</li></ul><p>On a de plus $|M| = \sum_\ell(|C_\ell|-1) = n-\lambda$.</p>` },
    { q: 22, t: "Q22. Minimum de chaînes et couplage maximum", h: R`<p>Montrer que la construction donne toujours $n-|M|$ chaînes.</p>`, b: R`<p><b>Nombre de chaînes</b> : dans Q19, les parts sont des chemins ; un chemin à $p$ sommets contient $p-1$ liens. En sommant sur les parts : $n-\lambda = |M|$, soit</p>$$\lambda = n-|M|.$$<p><b>Couvertures disjointes</b> : on peut toujours rendre une couverture disjointe sans augmenter son nombre de chaînes (on retire un élément des chaînes où il apparaît en double ; une partie d'une chaîne est une chaîne). Le minimum $\lambda_{\min}$ est donc atteint par une couverture disjointe, et par Q21 celle-ci provient d'un couplage de cardinal $n-\lambda_{\min}$.</p><p><b>Équivalence</b> :</p><ul><li>si $|M|$ est maximum, alors $n-|M|\leqslant n-|M'|$ pour tout couplage $M'$, en particulier pour celui de Q21 : $\lambda = n-|M|\leqslant\lambda_{\min}$, donc $\lambda = \lambda_{\min}$ ;</li><li>réciproquement, si $\lambda = n-|M| = \lambda_{\min}$, un couplage plus grand $M'$ donnerait une couverture de $n-|M'|< \lambda_{\min}$ chaînes, ce qui est impossible.</li></ul><div class="sbox">$$\lambda_{\min} = n-|M|_{\max}.$$</div>` },
    { q: 23, t: "Q23. Couplage maximum par chemins augmentants", h: R`<p>Pour chaque sommet gauche, chercher un chemin augmentant par un parcours en profondeur.</p>`, b: R`<p><b>Méthode</b> (algorithme de Kuhn) : on traite les sommets $w_i$ de $W_0$ un par un. Pour $w_i$, on cherche un voisin $w_{n+j}$ non encore visité ; s'il est libre, on le couple à $w_i$ ; sinon, on essaie de recaser son partenaire actuel <code>m.(j)</code> ailleurs, récursivement. Une réussite correspond à un chemin augmentant, qu'on inverse.</p>` + C(String.raw`
let maximum_matching (p:bipartite) : int array =
  let n = Array.length p / 2 in
  let m = Array.make n (-1) in              (* m.(j) = partenaire de w_{n+j} *)
  (* essaie d'attribuer un partenaire à w_i ; seen évite de reboucler *)
  let rec augment i seen =
    List.exists (fun w ->
      let j = w - n in
      if seen.(j) then false
      else begin
        seen.(j) <- true;
        if m.(j) = -1 || augment m.(j) seen then (m.(j) <- i; true)
        else false
      end) p.(i)
  in
  for i = 0 to n - 1 do
    ignore (augment i (Array.make n false))
  done;
  m`) + R`<p><code>List.exists</code> s'arrête au premier succès. <b>Correction</b> : chaque recherche réussie augmente $|M|$ de $1$ ; quand plus aucune recherche ne réussit, il n'existe plus de chemin augmentant, et le couplage est maximum par le théorème de Berge.</p>`, rappels: ["imp-couplage"] },
    { q: 24, t: "Q24. Couverture minimale", h: R`<p>Enchaîner Q18, Q23 et Q20.</p>`, b: C(String.raw`
let minimum_cover (r:order) : int list list =
  chains_of_matching (maximum_matching (bipartite_of_order r))`) + R`<p>D'après Q22, un couplage maximum donne une couverture par un nombre minimum de chaînes (disjointes).</p>` },
    { q: 25, t: "Q25. Complexité", h: R`<p>Le graphe a $2n$ sommets et $O(n^2)$ arêtes.</p>`, b: R`<ul><li><code>bipartite_of_order</code> : $O(n^2)$.</li><li><code>maximum_matching</code> : $n$ recherches ; chacune visite chaque $w_{n+j}$ au plus une fois et parcourt au plus une fois chaque liste d'adjacence, soit $O(n+\text{nombre d'arêtes}) = O(n^2)$. Total $O(n^3)$.</li><li><code>chains_of_matching</code> : $O(n)$.</li></ul><div class="sbox">$$\text{Complexité de }\texttt{minimum\_cover}\text{ : }O(n^3).$$</div>` }
  ],
  piege: R`En Q22, oublier de justifier qu'une couverture minimale peut être prise avec des chaînes disjointes : sans cela, Q21 ne s'applique pas.`,
  methode: R`Couverture minimale par des chaînes (Dilworth) : graphe biparti « $i$ peut précéder $j$ », couplage maximum, puis $\lambda_{\min} = n-|M|$.`
}
]);
})();

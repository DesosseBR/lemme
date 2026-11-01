/* Annales · Mines-Ponts 2024, Informatique 2 MPI (OCaml). Énoncé transcrit (sujet GIP CCMP, licence CC BY-NC-ND), corrigé rédigé pour Lemme. */
(() => {
const R = String.raw;
const P = { subj: "annales", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true };
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const C = s => `<pre><code>${esc(s.replace(/^\n/, ""))}</code></pre>`;
const T = (x, y, s, c = "", fs) => `<text class="${c}" x="${x}" y="${y}" text-anchor="middle"${fs ? ` font-size="${fs}"` : ""}>${s}</text>`;
const fig = (w, h, label, inner, cap) => `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">${inner}</svg>${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;
const cell = (x, y, v) => `<rect class="body" x="${x}" y="${y}" width="44" height="30"/><line class="k" x1="${x + 24}" y1="${y}" x2="${x + 24}" y2="${y + 30}"/>` + T(x + 12, y + 20, v, "", 14);
const arr = (x1, y1, x2, y2) => `<line class="vk" x1="${x1}" y1="${y1}" x2="${x2 - 6}" y2="${y2}"/><polygon class="hk" points="${x2},${y2} ${x2 - 8},${y2 - 4} ${x2 - 8},${y2 + 4}"/>`;

const F_MEM = fig(520, 170, "Maillons des deux listes en mémoire",
  T(60, 30, "list_finite", "", 13) + cell(30, 40, "1") + arr(64, 55, 100, 55) + cell(100, 40, "2") + arr(134, 55, 170, 55) + cell(170, 40, "3") + arr(204, 55, 240, 55) + T(256, 60, "[ ]", "", 14) +
  T(340, 30, "list_ones", "", 13) + cell(320, 40, "1") + `<path class="k" d="M354,55 C400,55 400,110 340,110 C290,110 300,80 318,70"/><polygon class="hk" points="320,72 312,66 314,76"/>` +
  T(260, 150, "chaque maillon : (tête, pointeur vers la queue) ; stockés dans le tas", "sm", 12),
  "<code>list_finite</code> : trois maillons terminés par la liste vide. <code>list_ones</code> : un seul maillon dont la queue pointe sur lui-même (liste cyclique).");

LEMME.rappels({
  "mpi2-flot": { t: "Flots paresseux", b: R`<p><code>Cons (x, f)</code> : la queue n'est calculée que lorsqu'on appelle <code>f ()</code>. Le corps d'une fonction <code>fun () -> ...</code> n'est pas évalué à sa création : c'est ce qui permet des suites infinies sans boucle infinie.</p>` },
  "mpi2-arret": { t: "Indécidabilité de l'arrêt", b: R`<p>Théorème de Turing : il n'existe pas de programme qui, pour tout programme $P$ et toute entrée $x$, termine et répond correctement à « $P$ termine-t-il sur $x$ ? ».</p>` },
  "mpi2-dn": { t: "Déduction naturelle (règles utilisées)", b: R`<p>(ax) $\Delta,A\vdash A$ ; ($\land_e$) de $A\land B$ on tire $A$ (ou $B$) ; ($\land_i$) de $A$ et $B$ on tire $A\land B$ ; ($\lor_i$) de $A$ on tire $A\lor B$ ; ($\lor_e$) de $A\lor B$, $\Delta,A\vdash C$, $\Delta,B\vdash C$ on tire $C$ ; ($\lnot_i$) de $\Delta,A\vdash\bot$ on tire $\lnot A$ ; ($\lnot_e$) de $A$ et $\lnot A$ on tire $\bot$ ; ($\bot_e$) de $\bot$ on tire tout.</p>` },
  "mpi2-ambigu": { t: "Grammaire non ambiguë", b: R`<p>Une grammaire est non ambiguë si chaque mot du langage a un seul arbre de dérivation. Pour $S\to aSbS\mid\varepsilon$, le $b$ qui ferme le premier $a$ est déterminé : c'est la fin du plus court préfixe non vide ayant autant de $a$ que de $b$.</p>` },
  "mpi2-mutex": { t: "Verrous (Mutex)", b: R`<p>Une section critique accède à une donnée partagée entre fils d'exécution. On l'encadre par <code>Mutex.lock</code> et <code>Mutex.unlock</code> d'un même verrou : un seul fil à la fois peut l'exécuter.</p>` }
});

const E1 = R`<p>OCaml exclusivement. <span data-def="listes"><code>let list_finite = [1; 2; 3]</code> et <code>let rec list_ones = 1 :: list_ones</code></span>.</p>
<ol><li>Croquis en maillons de <code>list_finite</code> et <code>list_ones</code> en mémoire ; quelle région de la mémoire ?</li></ol>
<p>Le code suivant provoque <code>Stack overflow during evaluation (looping recursion?)</code> :</p>
<pre><code>let list_fibo : int list =
  let rec list_fibo_with_internal_state (a:int) (b:int) : int list =
    a :: (list_fibo_with_internal_state b (a+b))
  in
  list_fibo_with_internal_state 0 1</code></pre>
<ol start="2"><li>Traduire <i>stack</i> ; expliquer l'erreur.</li><li>Avec <code>ocamlopt fibo.ml -o fibo</code> puis <code>./fibo</code> : l'une des étapes échoue-t-elle ?</li></ol>
<p><span data-def="stream"><code>type 'a stream = Nil | Cons of 'a * (unit -> 'a stream)</code></span>. Exemples : <code>let rec ones = Cons (1, fun () -> ones)</code> ; <code>fibo</code> défini par <code>fibo_with_internal_state a b = Cons (a, fun () -> fibo_with_internal_state b (a+b))</code>.</p>
<ol start="4"><li>Constante <code>integers : int stream</code> (entiers naturels croissants).</li><li><code>range (a:int) (b:int) : int stream</code> (entiers de $a$ inclus à $b$ exclu).</li><li>Toute suite $(\sigma_n)$ de chaînes est-elle codée par un <code>string stream</code> ?</li><li><code>hd (u:'a stream) : 'a</code>, avec <code>Failure "hd"</code> si <code>u</code> est vide.</li><li><code>tl (u:'a stream) : 'a stream</code>, avec <code>Failure "tl"</code>.</li><li><code>of_list (l:'a list) : 'a stream</code>.</li><li><code>iter (f:'a -> unit) (t:int) (u:'a stream) : unit</code> : applique <code>f</code> aux <code>t</code> premières valeurs existantes.</li><li><code>map (f:'a -> 'b) (u:'a stream) : 'b stream</code>.</li><li><code>zip (w:'a stream array) : 'a array stream</code> : flot des tableaux $[u_n,v_n,\dots]$, vide dès que l'un des flots l'est.</li><li><code>intertwin (u:'a stream) (v:'a stream) : 'a stream</code> : alterne les éléments de <code>u</code> et <code>v</code>, en continuant avec l'autre quand l'un est épuisé.</li></ol>
<pre><code>let rec product_wrong u1 u2 =
  match u1, u2 with
  | _, Nil | Nil, _ -> Nil
  | Cons (hd1, tl_begetter1), Cons (hd2, tl_begetter2) ->
      let part1 = product_wrong (tl_begetter1 ()) u2 in
      let part2 = map (fun y -> (hd1, y)) (tl_begetter2 ()) in
      Cons ((hd1, hd2), fun () -> intertwin part1 part2)</code></pre>
<ol start="14"><li>Montrer que <code>product_wrong u1 u2</code> ne termine pas toujours, et qu'il suffit de déplacer quelques mots pour le corriger.</li><li>Signification du <code>0</code> dans <code>return 0</code> (C) ou <code>exit 0</code> (OCaml).</li><li>Énoncer le théorème de Turing sur l'arrêt.</li><li>On admet une fonction <code>run : string -> int -> int</code> qui termine toujours et renvoie $0$ si le code $x$ termine sans erreur en moins de $n$ étapes, $1$ sinon. Construire ou réfuter l'existence de <code>filter (f:'a -> bool) (u:'a stream) : 'a stream</code> (éléments de <code>u</code> vérifiant <code>f</code>, dans l'ordre ; par exemple <code>filter is_negative ones</code> vaut <code>Nil</code>).</li></ol>`;

const E2 = R`<p>Cardinal d'un flot = nombre de valeurs distinctes. <span data-def="ffs">Le premier bit activé $\varrho(h)$ d'un entier $h\in[\![0,2^{62}-1]\!]$ est le plus grand $i$ tel que les $i-1$ bits de droite sont nuls ; $\varrho(0) = 63$</span> (exemples : $\varrho(1) = 1$, $\varrho(6) = 2$, $\varrho(8) = 4$). Hachage par <code>String.hash</code>.</p>
<ol start="18"><li>Écrire <code>ffs (h:int) : int</code>.</li></ol>
<p>Deux algorithmes sur les $t$ premiers termes : <span data-def="nf"><code>cardinality_nf</code> remplit une table de hachage et renvoie son nombre d'éléments</span> ; <span data-def="fm"><code>cardinality_fm</code> garde $r = \max\varrho(H(u))$ et renvoie $2^r$</span>.</p>
<ol start="19"><li>Comparer leurs complexités en espace.</li><li>Écrire <code>harmonic_mean (z:float array) : float</code> ($\mathrm{Harm} = m\big(\sum\frac1{z_j}\big)^{-1}$).</li></ol>
<p><b>HyperLogLog</b> ($m = 16$, $\alpha_{16} = 0{,}6731$) : <span data-def="hll">le terme $u$ va dans le sous-flot $i = H(u)\bmod m$, et $r_i = \max\varrho(H(u)/m)$ sur ce sous-flot ; estimation $s\simeq\alpha_m\cdot m\cdot\mathrm{Harm}(2^{r_0},\dots,2^{r_{m-1}})$</span>.</p>
<ol start="21"><li>Écrire <code>hll_update (r:int array) (x:string) : unit</code> (met à jour $r$ avec le nouveau terme $x$).</li><li>Écrire <code>mean_estimate (r:int array) : float</code>.</li><li>Dans le code multi-fils donné (deux fils remplissent <code>r_u</code> et <code>r_v</code> par <code>hll_update</code> ; le fil principal calcule toutes les 5 secondes <code>Array.init m (fun i -> max r_u.(i) r_v.(i))</code> et affiche l'estimation), identifier les courses critiques et proposer un mécanisme de correction.</li></ol>`;

const E3 = R`<p><span data-def="X">$X(\varphi,\psi) = (\varphi\lor\psi)\land(\lnot\varphi\lor\lnot\psi)$</span> ; règles de déduction naturelle en annexe.</p>
<ol start="24"><li>Arbres de preuve de $X(\varphi,\varphi)\vdash\bot$ et $\bot\vdash X(\varphi,\varphi)$.</li><li>Arbres de preuve de $X(\bot,\psi)\vdash\psi$ et $\psi\vdash X(\bot,\psi)$.</li><li>$\oplus(x,y)$ désigne l'évaluation de $X(x,y)$. Justifier que $(x,y)\mapsto\oplus(\oplus(x,x),y)$ et $(x,y)\mapsto y$ sont égales.</li></ol>
<p><span data-def="lfsr">LFSR de longueur $m$, germe $(b_i)_{0\leqslant i< m}$, connexion $C\subseteq[\![0,m-1]\!]$ : $b_{n+m} = \bigoplus_{i\in C}b_{n+i}$</span> ($\oplus$ est associative et commutative ; somme vide $= F$). Germe : <code>bool array</code> ; connexion : <code>int list</code>.</p>
<ol start="27"><li>Écrire <code>lfsr (g:bool array) (c:int list) : bool stream</code>.</li><li>Avec <code>type formula = Var of int | Not of formula | And of formula * formula | Or of formula * formula</code>, écrire <code>logical_map (phi:formula) (w:bool stream array) : bool stream</code> : le flot des évaluations $\varphi(b^{(1)}_n,\dots,b^{(k)}_n)$ ($\varphi$ ne dépend que de $x_1,\dots,x_k$, <code>w</code> de longueur $k$).</li><li>Alice et Bob partagent $k$ LFSR et une formule $\psi_0$. Alice envoie publiquement $X\big(\psi_0(b^{(1)}_n,\dots,b^{(k)}_n),c_n\big)$. Bob peut-il retrouver $(c_n)$ ?</li></ol>`;

const E4 = R`<p><span data-def="dyck"><code>let rec dyck = let f (x,y) = "a" ^ x ^ "b" ^ y in Cons ("", fun () -> map f (product dyck dyck))</code></span> ; $D$ est l'ensemble des mots de ce flot.</p>
<ol start="30"><li>Donner une grammaire non contextuelle $G$ avec $L(G) = D$.</li><li>Énoncer une propriété de $G$ qui assure que <code>dyck</code> n'énumère jamais deux fois le même mot, et la démontrer.</li></ol>
<p><b>Algorithme de Heap</b> : <span data-def="heap">Heap($k$, $t$) : si $k = 1$, afficher $t$ ; sinon, pour $i = 0$ à $k-1$ : exécuter Heap($k-1$, $t$), puis si $k$ est pair échanger $t[i]$ et $t[k-1]$, sinon échanger $t[0]$ et $t[k-1]$</span>.</p>
<ol start="32"><li>Nombre $A(k)$ d'affichages lors de Heap($k$, $t$).</li><li>Montrer : après Heap($k$, $t$), si $k$ est impair, $t$ est inchangé ; si $k$ est pair, les $k$ premières cases ont subi une permutation circulaire vers la droite.</li><li>Montrer que Heap($k$, $t$) affiche chaque permutation des $k$ premières cases (les autres inchangées).</li><li>Écrire <code>pivot (k:int) (i:int) (t:'a array) : unit</code> (lignes 6 à 9).</li><li>Écrire <code>permstream_of_array (t:'a array) : 'a array stream</code>, flot fini des permutations dans l'ordre de l'algorithme de Heap, économe en mémoire.</li></ol>`;

LEMME.exercises([
{ id: "mines24-mpi2-1", ...P, part: "1", level: 3, time: "1 h 15",
  title: "Flots de données paresseux",
  enonce: E1,
  decode: { donnees: [R`OCaml est strict : les arguments d'une fonction sont évalués avant l'appel.`, R`<code>fun () -> e</code> retarde le calcul de <code>e</code>.`], but: R`Comprendre pourquoi certaines définitions récursives bouclent, et programmer avec des flots paresseux.`, cles: {} },
  steps: [
    { q: 1, t: "Q1. Les listes en mémoire", h: R`<p>Un maillon = une valeur et un pointeur vers la suite.</p>`, b: R`${F_MEM}<p><code>list_finite</code> est une chaîne de trois maillons, le dernier pointant vers la liste vide. <code>list_ones</code> est un <b>seul</b> maillon dont la queue pointe sur lui-même : une liste cyclique, donc « infinie » quand on la parcourt.</p><p>Ces blocs sont stockés dans le <b>tas</b> (zone de mémoire gérée par le ramasse-miettes d'OCaml), pas dans la pile.</p>` },
    { q: 2, t: "Q2. Stack overflow", h: R`<p>Ordre d'évaluation : la queue est calculée avant de construire le maillon.</p>`, b: R`<p><i>Stack</i> se traduit par <b>pile</b> (la pile d'appels).</p><p><b>Déroulement</b> : pour évaluer <code>list_fibo_with_internal_state 0 1</code>, il faut construire <code>0 :: (...)</code>, donc d'abord évaluer la queue <code>list_fibo_with_internal_state 1 1</code> (OCaml est strict : on évalue les arguments d'un constructeur avant de le construire). Celle-ci demande <code>list_fibo_with_internal_state 1 2</code>, puis <code>2 3</code>, <code>3 5</code>… Aucun appel ne se termine, et chacun empile un bloc d'activation : la pile déborde.</p><p>Pourquoi <code>list_ones</code> marche : <code>let rec list_ones = 1 :: list_ones</code> est une définition récursive de <b>valeur</b> (un constructeur appliqué au nom défini), qu'OCaml traite en créant directement le maillon cyclique, sans appel de fonction.</p>` },
    { q: 3, t: "Q3. Compilation ou exécution ?", h: R`<p>Le programme est bien typé.</p>`, b: R`<p>La <b>compilation réussit</b> : le code est syntaxiquement correct et bien typé (<code>list_fibo : int list</code>). L'erreur se produit à l'<b>exécution</b> de <code>./fibo</code> : la récursion infinie épuise la pile et le programme s'arrête avec l'exception <code>Stack_overflow</code> (ou une erreur de segmentation, selon le système).</p>` },
    { q: 4, t: "Q4. Le flot des entiers", h: R`<p>Sur le modèle de <code>fibo</code>, avec un état interne $n$.</p>`, b: C(String.raw`
let integers : int stream =
  let rec from n = Cons (n, fun () -> from (n + 1)) in
  from 0`) + R`<p>L'appel <code>from (n + 1)</code> est retardé par <code>fun () -></code> : la définition termine immédiatement.</p>`, rappels: ["mpi2-flot"] },
    { q: 5, t: "Q5. range", h: R`<p>Flot vide dès que $a\geqslant b$.</p>`, b: C(String.raw`
let rec range (a:int) (b:int) : int stream =
  if a >= b then Nil
  else Cons (a, fun () -> range (a + 1) b)`) },
    { q: 6, t: "Q6. Toute suite est-elle un flot ?", h: R`<p>Combien y a-t-il de programmes OCaml ? De suites de chaînes ?</p>`, b: R`<p><b>Non, pas forcément.</b> Un flot est défini par un programme OCaml, c'est-à-dire un texte fini : il y a un ensemble <b>dénombrable</b> de tels programmes. L'ensemble des suites de chaînes n'est pas dénombrable : déjà les suites à valeurs dans $\{\texttt{"0"},\texttt{"1"}\}$ sont en bijection avec $\{0,1\}^{\mathbb N}$, non dénombrable (argument diagonal de Cantor). Il existe donc des suites qu'aucun flot ne code.</p><p><b>Quand c'est possible</b> : si la suite est <b>calculable</b>, c'est-à-dire s'il existe une fonction <code>sigma : int -> string</code> qui calcule $\sigma_n$, alors</p>` + C(String.raw`
let stream_of_sequence (sigma : int -> string) : string stream =
  let rec from n = Cons (sigma n, fun () -> from (n + 1)) in
  from 0`) },
    { q: 7, t: "Q7. hd", h: R`<p>Filtrage.</p>`, b: C(String.raw`
let hd (u : 'a stream) : 'a =
  match u with
  | Nil -> failwith "hd"
  | Cons (x, _) -> x`) },
    { q: 8, t: "Q8. tl", h: R`<p>On force la queue.</p>`, b: C(String.raw`
let tl (u : 'a stream) : 'a stream =
  match u with
  | Nil -> failwith "tl"
  | Cons (_, f) -> f ()`) + R`<p>C'est l'appel <code>f ()</code> qui calcule effectivement la suite du flot.</p>` },
    { q: 9, t: "Q9. of_list", h: R`<p>Récursion sur la liste, queue retardée.</p>`, b: C(String.raw`
let rec of_list (l : 'a list) : 'a stream =
  match l with
  | [] -> Nil
  | x :: q -> Cons (x, fun () -> of_list q)`) },
    { q: 10, t: "Q10. iter", h: R`<p>Décrémenter $t$ et s'arrêter si le flot est vide.</p>`, b: C(String.raw`
let rec iter (f : 'a -> unit) (t : int) (u : 'a stream) : unit =
  if t > 0 then
    match u with
    | Nil -> ()                          (* moins de t valeurs existantes *)
    | Cons (x, g) -> f x; iter f (t - 1) (g ())`) + R`<p>On ne force la queue <code>g ()</code> que si l'on en a besoin. Si $t\leqslant0$, rien ne se passe. La récursion est terminale : pas de risque de débordement de pile.</p>` },
    { q: 11, t: "Q11. map", h: R`<p>Appliquer <code>f</code> à la tête, retarder le reste.</p>`, b: C(String.raw`
let rec map (f : 'a -> 'b) (u : 'a stream) : 'b stream =
  match u with
  | Nil -> Nil
  | Cons (x, g) -> Cons (f x, fun () -> map f (g ()))`) },
    { q: 12, t: "Q12. zip", h: R`<p>Vide dès qu'un flot est vide ; sinon, tableau des têtes et queue retardée.</p>`, b: C(String.raw`
let is_nil u = match u with Nil -> true | Cons _ -> false

let rec zip (w : 'a stream array) : 'a array stream =
  if Array.exists is_nil w then Nil
  else Cons (Array.map hd w, fun () -> zip (Array.map tl w))`) + R`<p>On teste le vide par filtrage (<code>is_nil</code>) plutôt que par <code>u = Nil</code> : l'égalité structurelle pourrait tenter de comparer des fonctions. Les queues ne sont calculées (<code>Array.map tl w</code>) que lorsque l'on demande la suite.</p>` },
    { q: 13, t: "Q13. intertwin", h: R`<p>Prendre la tête de <code>u</code>, puis échanger les rôles.</p>`, b: C(String.raw`
let rec intertwin (u : 'a stream) (v : 'a stream) : 'a stream =
  match u with
  | Nil -> v                                   (* u épuisé : on continue avec v *)
  | Cons (x, g) -> Cons (x, fun () -> intertwin v (g ()))   (* on alterne *)`) + R`<p>Vérification sur <code>intertwin (range 0 2) fibo</code> : $0$, puis $F_0$ (rôles échangés), puis $1$, puis $F_1$ ; <code>range</code> est alors épuisé et l'on continue avec $F_2,F_3,\dots$ : c'est l'exemple de l'énoncé.</p>` },
    { q: 14, t: "Q14. Corriger product_wrong", h: R`<p>Où est calculé <code>part1</code> ?</p>`, b: R`<p><b>Non-terminaison</b> : <code>part1 = product_wrong (tl_begetter1 ()) u2</code> est calculé <b>avant</b> de renvoyer le <code>Cons</code>. Cet appel calcule à son tour le <code>part1</code> suivant, et ainsi de suite le long de tout <code>u1</code>. Si <code>u1</code> est infini (par exemple <code>ones</code>) et <code>u2</code> non vide, la récursion ne s'arrête jamais.</p><p><b>Correction</b> : il suffit de déplacer <code>fun () -></code> pour que <code>part1</code> et <code>part2</code> ne soient calculés qu'à la demande :</p>` + C(String.raw`
let rec product u1 u2 =
  match u1, u2 with
  | _, Nil | Nil, _ -> Nil
  | Cons (hd1, tl_begetter1), Cons (hd2, tl_begetter2) ->
      Cons ((hd1, hd2), fun () ->
        let part1 = product (tl_begetter1 ()) u2 in
        let part2 = map (fun y -> (hd1, y)) (tl_begetter2 ()) in
        intertwin part1 part2)`) + R`<p>Chaque appel renvoie maintenant un <code>Cons</code> immédiatement. Chaque couple $(u_i,v_j)$ apparaît : les couples avec $u_0$ en tête sont dans <code>part2</code> ou en tête, les autres dans <code>part1</code>, et <code>intertwin</code> alterne entre les deux, donc tout élément d'un des deux flots finit par sortir.</p>`, rappels: ["mpi2-flot"] },
    { q: 15, t: "Q15. Le 0 de return 0", h: R`<p>Code de retour au système.</p>`, b: R`<p>C'est le <b>code de retour</b> du processus, transmis au système d'exploitation (ou au processus parent, par exemple le terminal). Par convention, $0$ signifie que le programme s'est terminé <b>sans erreur</b> ; une valeur non nulle signale un échec.</p>` },
    { q: 16, t: "Q16. Théorème de Turing", h: R`<p>Problème de l'arrêt.</p>`, b: R`<div class="sbox"><p style="margin:0">Il n'existe aucun programme qui, recevant le code d'un programme $P$ et une entrée $x$, termine toujours et répond correctement à la question « l'exécution de $P$ sur $x$ termine-t-elle ? ». Le problème de l'arrêt est <b>indécidable</b>.</p></div>`, rappels: ["mpi2-arret"] },
    { q: 17, t: "Q17. Un filtre ne peut pas exister", h: R`<p>Construire, pour chaque programme $x$, un flot dont le filtrage dirait si $x$ termine.</p>`, b: R`<p><b>On réfute l'existence</b> d'une telle fonction <code>filter</code> (qui termine toujours, puisque <code>filter is_negative ones</code> doit valoir <code>Nil</code>).</p><p>Supposons qu'elle existe. Pour un code source $x$, on définit le flot</p>` + C(String.raw`
let witness (x : string) : int stream = map (run x) integers
(* terme n : 0 si x termine en moins de n étapes, 1 sinon *)

let halts (x : string) : bool =
  match filter (fun v -> v = 0) (witness x) with
  | Nil -> false        (* aucun 0 : x ne termine jamais *)
  | Cons _ -> true      (* un 0 existe : x termine *)`) + R`<p><code>run</code> termine toujours, donc <code>witness x</code> est un flot infini bien défini. Le flot filtré est vide si et seulement si aucun terme ne vaut $0$, c'est-à-dire si $x$ ne termine pas. Comme <code>filter</code> termine, <code>halts</code> termine toujours et décide l'arrêt, ce qui contredit le théorème de Turing.</p><p><b>Remarque</b> : on peut écrire un filtre <b>partiel</b>, qui cherche le prochain élément valide et boucle s'il n'y en a plus (<code>filter is_negative ones</code> ne terminerait alors pas) ; c'est la spécification « vaut <code>Nil</code> » qui est impossible.</p>`, rappels: ["mpi2-arret"] }
  ],
  piege: R`En Q14, croire que <code>map</code> ou <code>intertwin</code> est en cause : c'est l'appel récursif <code>product_wrong</code> calculé avant le <code>Cons</code> qui ne termine pas.`,
  methode: R`Flot paresseux : renvoyer tout de suite un <code>Cons</code> dont la queue est une fonction ; ne jamais forcer une queue avant d'en avoir besoin.`
},
{ id: "mines24-mpi2-2", ...P, part: "2", level: 2, time: "30 min",
  title: "Estimer le cardinal d'un flot : HyperLogLog",
  enonce: E2,
  decode: { donnees: [R`$\varrho(h)$ est la position (à partir de $1$) du bit $1$ le plus à droite.`], but: R`Estimer le nombre de valeurs distinctes avec une mémoire minuscule, puis protéger un calcul partagé entre fils d'exécution.`, cles: {} },
  steps: [
    { q: 18, t: "Q18. ffs", h: R`<p>Décaler à droite jusqu'à trouver un bit à $1$.</p>`, b: C(String.raw`
let ffs (h : int) : int =
  if h = 0 then 63                          (* convention *)
  else begin
    let rec aux h i = if h land 1 = 1 then i else aux (h lsr 1) (i + 1) in
    aux h 1
  end`) + R`<p>Vérification : $6 = 110_{(2)}$ : le bit de poids $1$ est nul, le suivant vaut $1$, donc $\varrho(6) = 2$.</p>` },
    { q: 19, t: "Q19. Mémoire des deux algorithmes", h: R`<p>Que stocke chaque algorithme ?</p>`, b: R`<ul><li><code>cardinality_nf</code> stocke toutes les chaînes distinctes dans la table : $O(s)$ chaînes, donc une mémoire proportionnelle au cardinal (multipliée par la longueur des chaînes).</li><li><code>cardinality_fm</code> ne garde qu'un entier $r\leqslant63$ : mémoire $O(1)$ (6 bits suffisent).</li></ul><p>Le second est donc bien plus économe, au prix d'une estimation approchée (et grossière, puisqu'elle ne prend que des puissances de $2$).</p>` },
    { q: 20, t: "Q20. Moyenne harmonique", h: R`<p>Somme des inverses, puis $m$ divisé par cette somme.</p>`, b: C(String.raw`
let harmonic_mean (z : float array) : float =
  let m = Array.length z in
  let s = Array.fold_left (fun acc x -> acc +. 1. /. x) 0. z in
  float_of_int m /. s`) },
    { q: 21, t: "Q21. hll_update", h: R`<p>Le reste de la division par $m$ choisit le sous-flot, le quotient sert au calcul de $\varrho$.</p>`, b: C(String.raw`
let hll_update (r : int array) (x : string) : unit =
  let h = String.hash x in
  let i = h mod m in                        (* numéro du sous-flot *)
  r.(i) <- max r.(i) (ffs (h / m))          (* nouveau maximum de rho sur ce sous-flot *)`) + R`<p>Seule la case $i$ change : elle passe de $\max_{u\in U^i_{t-1}}$ à $\max_{u\in U^i_t}$, comme demandé.</p>` },
    { q: 22, t: "Q22. mean_estimate", h: R`<p>Appliquer la formule (♣).</p>`, b: C(String.raw`
let mean_estimate (r : int array) : float =
  let z = Array.map (fun ri -> 2. ** float_of_int ri) r in   (* les 2^{r_i} *)
  alpha16 *. float_of_int m *. harmonic_mean z`) + R`<p>On calcule $2^{r_i}$ en flottant (<code>1 lsl 63</code> déborderait pour $r_i = 63$).</p>` },
    { q: 23, t: "Q23. Courses critiques", h: R`<p>Qui lit et qui écrit les tableaux <code>r_u</code> et <code>r_v</code> ?</p>`, b: R`<p><b>Accès concurrents</b> : le fil <code>f1</code> écrit dans <code>r_u</code> (par <code>hll_update</code>, qui lit <code>r.(i)</code> puis l'écrit), pendant que le fil principal lit <code>r_u</code> à la ligne 46 ; de même pour <code>f2</code> et <code>r_v</code>. Les portions critiques sont donc les appels <code>hll_update r_u</code> (ligne 38) et <code>hll_update r_v</code> (ligne 42), et la construction de <code>r</code> (ligne 46). Le fil principal peut lire un tableau en cours de mise à jour et afficher une estimation incohérente.</p><p><b>Correction</b> : un verrou par tableau (<code>Mutex</code>). On encadre chaque mise à jour et la lecture :</p>` + C(String.raw`
let lock_u = Mutex.create () and lock_v = Mutex.create () in
let f1 () = iter (fun x -> Mutex.lock lock_u; hll_update r_u x; Mutex.unlock lock_u)
              Int.max_int u in
(* idem pour f2 avec lock_v *)
...
Mutex.lock lock_u; Mutex.lock lock_v;              (* toujours dans le même ordre *)
let r = Array.init m (fun i -> max r_u.(i) r_v.(i)) in
Mutex.unlock lock_v; Mutex.unlock lock_u;
print_float (mean_estimate r)`) + R`<p>On prend les verrous toujours dans le même ordre pour éviter tout interblocage, et on les relâche avant l'affichage et la pause.</p>`, rappels: ["mpi2-mutex"] }
  ],
  piege: R`En Q21, utiliser le même nombre $h$ pour choisir le sous-flot et calculer $\varrho$ : les bits de poids faible seraient corrélés au numéro du sous-flot. D'où le quotient $h/m$.`,
  methode: R`Estimation probabiliste : un résumé de taille fixe (maximum de $\varrho$) et une moyenne (harmonique) sur plusieurs sous-flots pour réduire la variance.`
},
{ id: "mines24-mpi2-3", ...P, part: "3", level: 3, time: "40 min",
  title: "Chiffrement par flot de booléens",
  enonce: E3,
  decode: { donnees: [R`$X(\varphi,\psi)$ est le « ou exclusif » de $\varphi$ et $\psi$.`], but: R`Prouver en déduction naturelle les propriétés du ou exclusif, puis s'en servir pour chiffrer et déchiffrer avec des LFSR.`, cles: {} },
  steps: [
    { q: 24, t: "Q24. $X(\\varphi,\\varphi)\\vdash\\bot$", h: R`<p>Tirer $\varphi$ de $\varphi\lor\varphi$ et $\lnot\varphi$ de $\lnot\varphi\lor\lnot\varphi$.</p>`, b: R`<p>Notons $\Delta = \{X(\varphi,\varphi)\}$ et $X = (\varphi\lor\varphi)\land(\lnot\varphi\lor\lnot\varphi)$.</p><p><b>Arbre 1</b> ($\Delta\vdash\varphi$) : par $\land_e$ on obtient $\varphi\lor\varphi$, puis par $\lor_e$ les deux cas donnent $\varphi$ par l'axiome.</p><div style="overflow-x:auto">$$\dfrac{\dfrac{\dfrac{}{\Delta\vdash X}\,(\mathrm{ax})}{\Delta\vdash\varphi\lor\varphi}\,(\land_e)\qquad\dfrac{}{\Delta,\varphi\vdash\varphi}\,(\mathrm{ax})\qquad\dfrac{}{\Delta,\varphi\vdash\varphi}\,(\mathrm{ax})}{\Delta\vdash\varphi}\,(\lor_e)$$</div><p><b>Arbre 2</b> ($\Delta\vdash\lnot\varphi$) : le même, avec la seconde composante.</p><div style="overflow-x:auto">$$\dfrac{\dfrac{\dfrac{}{\Delta\vdash X}\,(\mathrm{ax})}{\Delta\vdash\lnot\varphi\lor\lnot\varphi}\,(\land_e)\qquad\dfrac{}{\Delta,\lnot\varphi\vdash\lnot\varphi}\,(\mathrm{ax})\qquad\dfrac{}{\Delta,\lnot\varphi\vdash\lnot\varphi}\,(\mathrm{ax})}{\Delta\vdash\lnot\varphi}\,(\lor_e)$$</div><p><b>Conclusion</b> par $\lnot_e$ :</p><div class="sbox">$$\dfrac{\dfrac{\vdots}{\Delta\vdash\varphi}\,(\text{arbre 1})\qquad\dfrac{\vdots}{\Delta\vdash\lnot\varphi}\,(\text{arbre 2})}{X(\varphi,\varphi)\vdash\bot}\,(\lnot_e)$$</div><p><b>Réciproque</b> : de $\bot$ on tire n'importe quoi :</p><div class="sbox">$$\dfrac{\dfrac{}{\bot\vdash\bot}\,(\mathrm{ax})}{\bot\vdash X(\varphi,\varphi)}\,(\bot_e)$$</div>`, rappels: ["mpi2-dn"] },
    { q: 25, t: "Q25. $X(\\bot,\\psi)\\vdash\\psi$ et réciproque", h: R`<p>Le cas $\bot$ du « ou » se traite par $\bot_e$ ; pour $\lnot\bot$, utiliser $\lnot_i$.</p>`, b: R`<p>Notons $\Delta = \{X(\bot,\psi)\}$, avec $X(\bot,\psi) = (\bot\lor\psi)\land(\lnot\bot\lor\lnot\psi)$.</p><div style="overflow-x:auto">$$\dfrac{\dfrac{\dfrac{}{\Delta\vdash X(\bot,\psi)}\,(\mathrm{ax})}{\Delta\vdash\bot\lor\psi}\,(\land_e)\qquad\dfrac{\dfrac{}{\Delta,\bot\vdash\bot}\,(\mathrm{ax})}{\Delta,\bot\vdash\psi}\,(\bot_e)\qquad\dfrac{}{\Delta,\psi\vdash\psi}\,(\mathrm{ax})}{X(\bot,\psi)\vdash\psi}\,(\lor_e)$$</div><p><b>Réciproque</b> $\psi\vdash X(\bot,\psi)$ : on construit les deux composantes et on les assemble par $\land_i$. Pour la seconde, $\lnot\bot$ s'obtient par $\lnot_i$ (sous l'hypothèse $\bot$, on a $\bot$ par l'axiome).</p><div style="overflow-x:auto">$$\dfrac{\dfrac{\dfrac{}{\psi\vdash\psi}\,(\mathrm{ax})}{\psi\vdash\bot\lor\psi}\,(\lor_i)\qquad\dfrac{\dfrac{\dfrac{}{\psi,\bot\vdash\bot}\,(\mathrm{ax})}{\psi\vdash\lnot\bot}\,(\lnot_i)}{\psi\vdash\lnot\bot\lor\lnot\psi}\,(\lor_i)}{\psi\vdash X(\bot,\psi)}\,(\land_i)$$</div>`, rappels: ["mpi2-dn"] },
    { q: 26, t: "Q26. $\\oplus(\\oplus(x,x),y) = y$", h: R`<p>Table de vérité, ou réutiliser Q24 et Q25.</p>`, b: R`<p>$\oplus(x,y)$ vaut $V$ si et seulement si exactement un de $x$, $y$ vaut $V$ : $(x\lor y)$ exige au moins un $V$, et $(\lnot x\lor\lnot y)$ au moins un $F$.</p><ul><li>$\oplus(x,x) = F$ pour tout $x$ (au moins un $V$ et au moins un $F$ parmi $x,x$ est impossible) : c'est la version sémantique de Q24.</li><li>$\oplus(F,y) = y$ : si $y = V$, exactement un vaut $V$ ; si $y = F$, aucun. C'est la version sémantique de Q25.</li></ul><p>Donc pour tous $x,y$ : $\oplus(\oplus(x,x),y) = \oplus(F,y) = y$. Les deux fonctions sont égales.</p><div style="overflow-x:auto"><table class="vals"><tr><th>$x$</th><th>$y$</th><th>$\oplus(x,x)$</th><th>$\oplus(\oplus(x,x),y)$</th></tr><tr><td>$V$</td><td>$V$</td><td>$F$</td><td>$V$</td></tr><tr><td>$V$</td><td>$F$</td><td>$F$</td><td>$F$</td></tr><tr><td>$F$</td><td>$V$</td><td>$F$</td><td>$V$</td></tr><tr><td>$F$</td><td>$F$</td><td>$F$</td><td>$F$</td></tr></table></div>` },
    { q: 27, t: "Q27. Le LFSR", h: R`<p>Garder la fenêtre des $m$ derniers bits ; $\oplus$ est le « différent » booléen.</p>`, b: C(String.raw`
let lfsr (g : bool array) (c : int list) : bool stream =
  let m = Array.length g in
  (* w contient la fenêtre (b_n, ..., b_{n+m-1}) *)
  let rec from (w : bool array) : bool stream =
    Cons (w.(0), fun () ->
      let next = List.fold_left (fun acc i -> acc <> w.(i)) false c in   (* b_{n+m} *)
      from (Array.init m (fun i -> if i < m - 1 then w.(i + 1) else next)))
  in
  if m = 0 then Nil else from (Array.copy g)`) + R`<p>Sur les booléens, <code>a &lt;&gt; b</code> vaut <code>true</code> si et seulement si exactement un des deux est vrai : c'est $\oplus$. Le <code>fold_left</code> part de <code>false</code> ($F$, somme vide) et ajoute les $b_{n+i}$ pour $i\in C$. On copie le germe pour ne pas dépendre de modifications ultérieures du tableau passé en argument.</p>` },
    { q: 28, t: "Q28. logical_map", h: R`<p>Évaluer la formule sur chaque tableau de <code>zip w</code>.</p>`, b: C(String.raw`
let rec eval (phi : formula) (b : bool array) : bool =
  match phi with
  | Var j -> b.(j - 1)                 (* x_j est la j-ième valeur, indice j-1 *)
  | Not p -> not (eval p b)
  | And (p, q) -> eval p b && eval q b
  | Or (p, q) -> eval p b || eval q b

let logical_map (phi : formula) (w : bool stream array) : bool stream =
  map (eval phi) (zip w)`) + R`<p><code>zip w</code> fournit, pour chaque $n$, le tableau $[b^{(1)}_n,\dots,b^{(k)}_n]$ ; <code>map</code> lui applique l'évaluation de $\varphi$.</p>` },
    { q: 29, t: "Q29. Bob déchiffre", h: R`<p>Bob recalcule la même clé et refait un ou exclusif.</p>`, b: R`<p><b>Oui, toujours.</b> Bob connaît les germes, les connexions et $\psi_0$ : il recalcule exactement les mêmes flots $b^{(1)},\dots,b^{(k)}$ (avec <code>lfsr</code>) et le même flot de clé $k_n = \psi_0(b^{(1)}_n,\dots,b^{(k)}_n)$ (avec <code>logical_map</code>). Il reçoit $e_n = \oplus(k_n,c_n)$ et calcule</p>$$\oplus(k_n,e_n) = \oplus\big(k_n,\oplus(k_n,c_n)\big) = \oplus\big(\oplus(k_n,k_n),c_n\big) = c_n,$$<p>par associativité de $\oplus$ puis Q26. Un espion qui ne connaît pas la clé ne voit que $e_n$.</p>` }
  ],
  piege: R`En Q25, oublier que $\lnot\bot$ se démontre (par $\lnot_i$) : ce n'est pas une hypothèse disponible.`,
  methode: R`Chiffrement par flot : message $\oplus$ clé ; on déchiffre en refaisant $\oplus$ clé, car $k\oplus k = F$ et $F\oplus c = c$.`
},
{ id: "mines24-mpi2-4", ...P, part: "4", level: 3, time: "45 min",
  title: "Mots de Dyck et algorithme de Heap",
  enonce: E4,
  decode: { donnees: [R`<code>dyck</code> = le mot vide, puis tous les $a\,x\,b\,y$ avec $x,y$ dans <code>dyck</code>.`], but: R`Décrire le langage par une grammaire non ambiguë, puis prouver et programmer l'algorithme de Heap de façon paresseuse.`, cles: {} },
  steps: [
    { q: 30, t: "Q30. Une grammaire pour D", h: R`<p>Recopier la définition du flot.</p>`, b: R`<div class="sbox">$$G : \qquad S\to aSbS\mid\varepsilon.$$</div><p><b>Justification</b> : le flot <code>dyck</code> contient le mot vide, puis les mots <code>"a" ^ x ^ "b" ^ y</code> pour tous les couples $(x,y)$ de mots du flot (<code>product</code> les énumère tous). $D$ est donc le plus petit langage contenant $\varepsilon$ et stable par $(x,y)\mapsto axby$ : c'est exactement $L(G)$ (récurrence sur la longueur des mots, ou sur la hauteur des arbres de dérivation).</p>` },
    { q: 31, t: "Q31. Pas de doublon : G est non ambiguë", h: R`<p>Le $b$ associé au premier $a$ est déterminé par le mot.</p>`, b: R`<p><b>Propriété</b> : la grammaire $G$ est <b>non ambiguë</b> (chaque mot a un unique arbre de dérivation). Comme <code>dyck</code> produit chaque arbre une seule fois (le produit énumère chaque couple une seule fois et $f$ correspond à une règle), elle n'énumère jamais deux fois le même mot.</p><p><b>Lemme</b> : dans un mot $w\in D$, tout préfixe a au moins autant de $a$ que de $b$, et $w$ a autant de $a$ que de $b$ (par récurrence sur la longueur de la dérivation : c'est vrai pour $\varepsilon$ ; pour $axby$, un préfixe de $ax$ a strictement plus de $a$, $axb$ est équilibré, puis on ajoute un préfixe de $y$).</p><p><b>Unicité</b>, par récurrence forte sur la longueur. Le mot vide n'a que la dérivation $S\to\varepsilon$. Soit $w\neq\varepsilon$ ; toute dérivation commence par $S\to aSbS$, et $w = axby$ avec $x,y\in D$. Le préfixe $axb$ est le <b>plus court préfixe non vide</b> de $w$ ayant autant de $a$ que de $b$ : d'après le lemme appliqué à $x$, les préfixes $ax'$ avec $x'$ préfixe de $x$ ont un $a$ de plus que de $b$. Ce plus court préfixe ne dépend que de $w$ : la découpe $(x,y)$ est donc unique, et par hypothèse de récurrence $x$ et $y$ (plus courts) ont une seule dérivation. Donc $w$ aussi.</p>`, rappels: ["mpi2-ambigu"] },
    { q: 32, t: "Q32. Nombre d'affichages", h: R`<p>Relation de récurrence $A(k) = kA(k-1)$.</p>`, b: R`<p>Heap($1$) affiche une fois : $A(1) = 1$. Pour $k\geqslant2$, la boucle fait $k$ appels à Heap($k-1$), et les échanges n'affichent rien : $A(k) = kA(k-1)$.</p><p><b>Récurrence</b> : si $A(k-1) = (k-1)!$, alors $A(k) = k\,(k-1)! = k!$.</p><div class="sbox">$$A(k) = k!.$$</div>` },
    { q: 33, t: "Q33. Effet de Heap(k) sur le tableau", h: R`<p>Récurrence : si $k$ est pair, $k-1$ est impair (les appels ne changent rien) ; si $k$ est impair, chaque appel fait une rotation des $k-1$ premières cases.</p>`, b: R`<p><b>Initialisation</b> : Heap($1$) affiche sans modifier : $1$ est impair, $t$ est inchangé.</p><p><b>Hérédité</b> : soit $k\geqslant2$, avec $P(k-1)$ vraie. Notons $a_0,\dots,a_{k-1}$ les $k$ premières cases au départ.</p><p><b>Cas $k$ pair</b> : $k-1$ est impair, donc chaque appel Heap($k-1$) laisse $t$ inchangé. Il ne reste que les échanges de $t[i]$ et $t[k-1]$ pour $i = 0,\dots,k-1$ :</p><ul><li>$i = 0$ : $[a_{k-1},a_1,\dots,a_{k-2},a_0]$ ;</li><li>$i = 1$ : $[a_{k-1},a_0,a_2,\dots,a_{k-2},a_1]$ ;</li><li>après l'étape $i$ : $[a_{k-1},a_0,\dots,a_{i-1},a_{i+1},\dots,a_{k-2},a_i]$ ;</li><li>$i = k-2$ : $[a_{k-1},a_0,\dots,a_{k-3},a_{k-2}]$ ; $i = k-1$ : échange de $t[k-1]$ avec lui-même.</li></ul><p>Résultat : $[a_{k-1},a_0,a_1,\dots,a_{k-2}]$, la rotation circulaire vers la droite annoncée.</p><p><b>Cas $k$ impair</b> ($k\geqslant3$) : $k-1$ est pair, donc chaque appel fait tourner vers la droite les $k-1$ premières cases. Un tour de boucle (appel puis échange de $t[0]$ et $t[k-1]$) transforme $[c_0,\dots,c_{k-1}]$ en :</p>$$[c_0,\dots,c_{k-2},c_{k-1}]\xrightarrow{\text{rotation des }k-1}[c_{k-2},c_0,\dots,c_{k-3},c_{k-1}]\xrightarrow{t[0]\leftrightarrow t[k-1]}[c_{k-1},c_0,\dots,c_{k-3},c_{k-2}],$$<p>c'est-à-dire une rotation vers la droite des $k$ cases. La boucle fait $k$ tours, donc $k$ rotations de $k$ cases : on revient au tableau de départ. Les cases au-delà de $k$ ne sont jamais touchées.</p><p>$P(k)$ est vraie, ce qui achève la récurrence.</p>` },
    { q: 34, t: "Q34. Toutes les permutations sont affichées", h: R`<p>Les $k$ valeurs placées en dernière position lors des $k$ appels sont distinctes.</p>`, b: R`<p>Montrons par récurrence : « Heap($k$, $t$) affiche une fois chacune des $k!$ permutations des $k$ premières cases, les autres étant inchangées ».</p><p>$k = 1$ : une seule permutation, affichée une fois.</p><p><b>Hérédité</b> : au tour $i$, l'appel Heap($k-1$) laisse $t[k-1]$ fixe (il ne touche que les $k-1$ premières cases) et affiche, par hypothèse de récurrence, toutes les permutations des $k-1$ premières cases avec cette valeur fixe en position $k-1$. Il suffit de voir que les $k$ valeurs présentes en position $k-1$ au début des $k$ tours sont <b>distinctes</b> :</p><ul><li>$k$ pair : d'après le calcul de Q33, avant le tour $i\geqslant1$ la dernière case contient $a_{i-1}$, et avant le tour $0$ elle contient $a_{k-1}$ : on obtient $a_{k-1},a_0,a_1,\dots,a_{k-2}$, toutes distinctes ;</li><li>$k$ impair : chaque tour fait une rotation des $k$ cases, donc avant le tour $i$ la dernière case contient $a_{k-1-i}$ : $a_{k-1},a_{k-2},\dots,a_0$, toutes distinctes.</li></ul><p>Les $k$ tours affichent donc des permutations deux à deux différentes (leur dernière case diffère d'un tour à l'autre), $(k-1)!$ par tour : $k!$ permutations distinctes, c'est-à-dire toutes (Q32).</p>` },
    { q: 35, t: "Q35. pivot", h: R`<p>Un échange selon la parité de $k$.</p>`, b: C(String.raw`
let pivot (k : int) (i : int) (t : 'a array) : unit =
  let swap a b = let x = t.(a) in t.(a) <- t.(b); t.(b) <- x in
  if k mod 2 = 0 then swap i (k - 1)     (* k pair : t[i] <-> t[k-1] *)
  else swap 0 (k - 1)                    (* k impair : t[0] <-> t[k-1] *)`) },
    { q: 36, t: "Q36. Le flot des permutations", h: R`<p>Écrire Heap avec une « suite » : <code>heap k next</code> est le flot des affichages de Heap($k$) suivi du flot <code>next ()</code>.</p>`, b: R`<p><b>Idée</b> : on simule la récursion de Heap de façon paresseuse. <code>heap k next</code> renvoie le flot des tableaux affichés par Heap($k$, $t$), suivi de <code>next ()</code>. Un affichage devient un <code>Cons</code> contenant une <b>copie</b> du tableau de travail ; les échanges ont lieu au moment où l'on demande la suite.</p>` + C(String.raw`
let permstream_of_array (t0 : 'a array) : 'a array stream =
  let t = Array.copy t0 in                 (* tableau de travail *)
  let n = Array.length t in
  let rec heap k (next : unit -> 'a array stream) : 'a array stream =
    if k <= 1 then Cons (Array.copy t, next)          (* « afficher » *)
    else
      let rec loop i () =                             (* boucle pour i = 0 .. k-1 *)
        if i = k then next ()
        else heap (k - 1) (fun () -> pivot k i t; loop (i + 1) ())
      in
      loop 0 ()
  in
  heap n (fun () -> Nil)`) + R`<p><b>Mémoire</b> : un seul tableau de travail et une chaîne de fermetures de profondeur au plus $n$ : $O(n)$ en plus des tableaux effectivement demandés, au lieu de stocker les $n!$ permutations. On n'en calcule une que si on la demande.</p><p><b>Attention</b> : le flot fait des effets de bord quand on avance ; il doit être parcouru une seule fois (appeler deux fois la même queue rejouerait les échanges).</p>` }
  ],
  piege: R`En Q33, oublier l'échange du dernier tour ($i = k-1$) : dans la variante étudiée, il y a un échange après chaque appel, y compris le dernier.`,
  methode: R`Dérécursifier paresseusement : passer à chaque appel une fonction « suite » qui calcule le reste du flot, et ne faire les effets qu'au moment où l'on force la queue.`
}
]);
})();

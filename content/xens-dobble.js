/* Commando X-ENS · Aller plus loin · Sujet « Dobble et géométrie projective ». */
(() => {
const R = String.raw;
const { FIG, S } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 15, kind: "probleme", qnav: true, side: true, level: 4, plus: "dob",
  sujet: "Dobble et plans projectifs finis",
  sujetDesc: "Dans le jeu Dobble, deux cartes ont toujours exactement un symbole en commun. On formalise cette structure (plan projectif fini), on montre que toutes les droites ont le même nombre m de points et qu'il y a m² − m + 1 points et autant de droites, puis on construit de tels plans avec le plan projectif sur un corps fini 𝔽_q : c'est ainsi qu'on fabrique un Dobble à 57 cartes." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "dob-grass": { t: "Formule de Grassmann", b: R`$$\dim(F\cap G) = \dim F+\dim G-\dim(F+G).$$` },
  "dob-cnt": { t: "Compter dans 𝔽_qⁿ", b: R`$$|\mathbb F_q^n| = q^n,\qquad\#\{\text{droites vectorielles}\} = \frac{q^n-1}{q-1},$$<div class="sbox">$$\{\text{plans de}\ \mathbb F_q^3\} = \{\ker\varphi,\ \varphi\in(\mathbb F_q^3)^*\setminus\{0\}\}/\mathbb F_q^*,\qquad\#\{\text{plans}\} = q^2+q+1.$$</div>` },
  "dob-dc": { t: "Double comptage", b: R`$$\operatorname{Card}\{(x,A) : x\in A\} = \sum_{A\in\Delta}|A| = \sum_{x\in P}\operatorname{Card}\{A : x\in A\}.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> Un <b>plan projectif</b> est la donnée d'un ensemble fini $P$ de <b>points</b> et d'un ensemble $\Delta$ de parties de $P$, les <b>droites</b>, tels que : (i) par deux points distincts passe une et une seule droite ; (ii) deux droites distinctes ont exactement un point commun ; (iii) toute droite a au moins $3$ points ; (iv) il y a au moins $2$ droites. Pour deux points $x\neq y$, on note $(xy)$ la droite qui les contient. Dans Dobble, les cartes jouent le rôle des droites et les symboles celui des points (ou l'inverse) : deux cartes ont toujours exactement un symbole commun.</p>`;

/* Figure : le plan de Fano, étiqueté par 𝔽₂³ */
const figFano = (() => {
  const A = [200, 30], B = [40, 300], C = [360, 300];
  const mid = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const G = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
  const AB = mid(A, B), BC = mid(B, C), CA = mid(C, A);
  let b = "";
  const L = (p, q, c) => `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" class="${c}" style="stroke-width:2"/>`;
  b += L(A, B, "vb") + L(B, C, "vr") + L(C, A, "vg") + L(A, BC, "vv") + L(B, CA, "vk") + L(C, AB, "vb");
  const r = Math.hypot(G[0] - BC[0], G[1] - BC[1]);
  b += `<circle cx="${G[0]}" cy="${G[1]}" r="${r.toFixed(1)}" class="vr" style="fill:none;stroke-dasharray:6 4;stroke-width:2"/>`;
  const pts = [[A, "100", 0, -12], [B, "010", -10, 18], [C, "001", 10, 18], [AB, "110", -34, 0], [CA, "101", 34, 0], [BC, "011", 0, 24], [G, "111", 24, -6]];
  pts.forEach(([p, t, dx, dy]) => { b += `<circle cx="${p[0]}" cy="${p[1]}" r="7" class="pt"/>` + S(p[0] + dx, p[1] + dy + 4, t, "middle", "it"); });
  return FIG(400, 340, b, R`Le plan de Fano : $7$ points et $7$ droites ($6$ segments et le cercle), chacune à $3$ points. Les points sont les $7$ vecteurs non nuls de $\mathbb F_2^3$ ; trois points sont alignés si et seulement si leur somme est nulle (par exemple $110+011+101 = 000$ : le cercle).`, "Plan de Fano");
})();

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "dob-1", ...P, part: "Partie I", time: "35 min",
  title: "Toutes les droites ont le même nombre de points",
  enonce: PRE + R`<p><b>Partie I.</b> Soit $(P,\Delta)$ un plan projectif.</p><ol start="1">
<li>Vérifier que le « triangle » ($P = \{1,2,3\}$, $\Delta = \{\{1,2\},\{2,3\},\{1,3\}\}$) vérifie (i), (ii), (iv) mais pas (iii).</li>
<li>Soient $A\neq B$ deux droites et $u$ leur point commun. Montrer qu'il existe un point $z$ sur aucune des deux droites.</li>
<li>Pour un tel $z$, on définit $\pi : A\to B$ par $\pi(x) = $ le point commun de $(xz)$ et $B$. Montrer que $\pi$ est bien définie et bijective. En déduire que toutes les droites ont le même nombre $m\geqslant3$ de points.</li>
<li>Soit $x\in P$. Montrer qu'il existe une droite $A$ ne passant pas par $x$, puis que $a\mapsto(xa)$ est une bijection de $A$ sur l'ensemble des droites passant par $x$. En déduire que tout point est sur exactement $m$ droites.</li></ol>`,
  decode: { donnees: [R`Axiomes (i)–(iv).`], but: R`Construire des bijections entre droites (projection depuis un point extérieur), puis entre une droite et le faisceau des droites passant par un point.`, cles: {} },
  steps: [
    Q(1, "Le triangle", R`<p>Teste (ii) sur $\{1,2\}$ et $\{2,3\}$.</p>`, R`<p>(i) : deux points distincts forment exactement une des trois paires. (ii) : deux paires distinctes de $\{1,2,3\}$ ont exactement un élément commun. (iv) : il y a $3$ droites. Mais chaque droite a $2$ points : (iii) échoue. L'axiome (iii) exclut ce cas dégénéré.</p>`),
    Q(2, "Un point hors de deux droites", R`<p>Prends $v\in A\setminus\{u\}$, $w\in B\setminus\{u\}$, et un troisième point sur $(vw)$.</p>`, R`<p>Par (iii), il existe $v\in A\setminus\{u\}$ et $w\in B\setminus\{u\}$ ; $v\neq w$ (sinon $v\in A\cap B = \{u\}$). La droite $C = (vw)$ a un troisième point $z$ (iii). Si $z\in A$, $C$ et $A$ ont deux points communs $v,z$, donc $C = A$ par (i), et $w\in A\cap B = \{u\}$ : absurde. De même $z\notin B$.</p>`),
    Q(3, "Projection centrale", R`<p>$(xz)\neq B$ car $z\notin B$. Pour l'injectivité, deux droites passant par $z$ et un même point $y\neq z$ sont égales.</p>`, R`<p><b>Bien définie.</b> Pour $x\in A$, $x\neq z$ (car $z\notin A$), donc $(xz)$ existe ; elle est différente de $B$ (elle contient $z\notin B$), donc coupe $B$ en exactement un point (ii).</p><p><b>Injective.</b> Si $\pi(x_1) = \pi(x_2) = y$ avec $x_1\neq x_2$ : les droites $(x_1z)$ et $(x_2z)$ contiennent $z$ et $y$, avec $y\neq z$ ($y\in B$) ; par (i) elles sont égales. Cette droite contient $x_1,x_2\in A$, donc c'est $A$ (i), et $z\in A$ : absurde.</p><p><b>Surjective.</b> La projection $B\to A$ depuis $z$ est une réciproque : si $y\in B$ et $x$ est le point commun de $(yz)$ et $A$, alors $(xz) = (yz)$ et $\pi(x) = y$.</p><div class="sbox"><p>$|A| = |B|$ pour toutes droites $A\neq B$ : toutes les droites ont le même nombre $m\geqslant3$ de points.</p></div>`),
    Q(4, "Le faisceau des droites passant par x", R`<p>Si $x$ est sur deux droites $A,B$, prends $a\in A$, $b\in B$ différents de $x$ : $(ab)\not\ni x$.</p>`, R`<p><b>Une droite évitant $x$.</b> Par (iv), il y a deux droites $A\neq B$. Si l'une évite $x$, c'est fini. Sinon $A\cap B = \{x\}$ ; soit $a\in A\setminus\{x\}$ et $b\in B\setminus\{x\}$. Si $x\in(ab)$, alors $(ab)$ contient $x,a$, donc $(ab) = A$, et $b\in A\cap B = \{x\}$ : absurde.</p><p><b>Bijection.</b> Soit $A$ une droite avec $x\notin A$. Pour $a\in A$, $(xa)$ est une droite par $x$. Injectivité : si $(xa) = (xa')$ avec $a\neq a'$, cette droite contient $a,a'$, c'est $A$, et $x\in A$ : absurde. Surjectivité : une droite $D$ par $x$ est différente de $A$ (elle contient $x$), donc coupe $A$ en un point $a$, et $D = (xa)$.</p><div class="sbox"><p>Tout point est sur exactement $m$ droites.</p></div>`)
  ],
  piege: R`Dans la projection, il faut $z\notin A$ <b>et</b> $z\notin B$ : si $z\in A$, toutes les droites $(xz)$, $x\in A$, sont égales à $A$, et la projection n'a plus de sens.`,
  methode: R`Pour montrer que deux ensembles finis ont même cardinal, construire une bijection géométrique explicite : ici la projection centrale d'une droite sur une autre.`
},

/* ===================== Partie II ===================== */
{ id: "dob-2", ...P, part: "Partie II", time: "30 min",
  title: "Le nombre de cartes d'un Dobble",
  enonce: PRE + R`<p><b>Partie II.</b> On note $m$ le nombre de points d'une droite et $n = m-1$ l'<b>ordre</b> du plan.</p><ol start="5">
<li>Soit $u\in P$ et $A_1,\dots,A_m$ les droites passant par $u$. Montrer que $P = \{u\}\sqcup\bigsqcup_{i=1}^m(A_i\setminus\{u\})$, et en déduire $|P| = m^2-m+1 = n^2+n+1$.</li>
<li>Par un double comptage des couples $(x,A)$ avec $x\in A$, montrer que $|\Delta| = |P|$.</li>
<li>Le vrai jeu Dobble contient $55$ cartes de $8$ symboles. Quel serait le nombre de cartes d'un plan projectif avec $8$ symboles par carte ? Combien de symboles différents faut-il ?</li>
<li>On retire deux cartes à ce plan projectif. Montrer que deux cartes restantes ont toujours un unique symbole commun, mais que certaines paires de symboles ne sont plus jamais sur une même carte. Combien ?</li></ol>`,
  decode: { donnees: [R`Partie I : $m$ points par droite, $m$ droites par point.`], but: R`Dénombrer points et droites en fonction de $m$.`, cles: {} },
  steps: [
    Q(5, "Le nombre de points", R`<p>Tout $v\neq u$ est sur la droite $(uv)$, qui est l'une des $A_i$ ; deux $A_i$ ne se coupent qu'en $u$.</p>`, R`<p>Pour $v\neq u$, la droite $(uv)$ passe par $u$, c'est un des $A_i$ : $v\in A_i\setminus\{u\}$. Les ensembles $A_i\setminus\{u\}$ sont disjoints, car $A_i\cap A_j = \{u\}$ pour $i\neq j$ (ii). Chacun a $m-1$ éléments. Donc</p><div class="sbox">$$|P| = 1+m(m-1) = m^2-m+1 = n^2+n+1.$$</div>`),
    Q(6, "Autant de droites que de points", R`<p>Chaque droite a $m$ points, chaque point est sur $m$ droites.</p>`, R`<p>Le nombre de couples $(x,A)$ avec $x\in A$ vaut $\sum_{A\in\Delta}|A| = m|\Delta|$, et aussi $\sum_{x\in P}|\{A\ni x\}| = m|P|$ (Q4). Donc</p><div class="sbox">$$|\Delta| = |P| = m^2-m+1.$$</div><p>Le rôle des points et des droites est symétrique : $(\Delta,P)$, avec « $A$ contient $x$ » lu à l'envers, est aussi un plan projectif (dualité). Cartes et symboles sont interchangeables.</p>`, ["dob-dc"]),
    Q(7, "Le Dobble complet", R`<p>$m = 8$.</p>`, R`<p>Avec $m = 8$ symboles par carte : $m^2-m+1 = 64-8+1 = 57$ cartes, et autant de symboles, $57$. Chaque symbole apparaît sur $8$ cartes. L'ordre est $n = 7$.</p><div class="sbox"><p>Un Dobble « parfait » à $8$ symboles par carte a $57$ cartes et $57$ symboles ; le jeu du commerce en a $55$.</p></div>`),
    Q(8, "Deux cartes manquantes", R`<p>Les cartes manquantes contiennent chacune $\binom82$ paires de symboles, et elles ne partagent qu'un symbole.</p>`, R`<p>La propriété « deux cartes ont un unique symbole commun » ne concerne que les cartes présentes : elle est conservée (axiome (ii) pour les droites restantes).</p><p>En revanche, deux symboles $s\neq t$ sont sur une unique carte $(st)$ (i) ; si cette carte est retirée, ils ne sont plus jamais ensemble. Une carte retirée porte $\binom82 = 28$ paires ; les deux cartes retirées n'ont qu'un symbole en commun, donc aucune paire commune. Au total :</p><div class="sbox">$$28+28 = 56\ \text{paires de symboles ne sont jamais sur une même carte.}$$</div>`)
  ],
  piege: R`L'axiome (iv) sert vraiment : sans lui, une seule droite contenant tous les points vérifierait (i), (ii), (iii), et aucune des formules ne tiendrait.`,
  methode: R`Dénombrer une structure d'incidence : partitionner selon les droites issues d'un point, et compter les couples (point, droite) de deux façons.`
},

/* ===================== Partie III ===================== */
{ id: "dob-3", ...P, part: "Partie III", time: "40 min",
  title: "Construire un Dobble avec un corps fini",
  enonce: PRE + R`<p><b>Partie III.</b> Soit $q$ une puissance d'un nombre premier et $\mathbb F_q$ le corps à $q$ éléments. On prend pour $P$ l'ensemble des droites vectorielles de $\mathbb F_q^3$ (le <b>plan projectif</b> $\mathbb P^2(\mathbb F_q)$), et pour $\Delta$ l'ensemble des parties $\{d\in P : d\subset\Pi\}$, où $\Pi$ décrit les plans vectoriels de $\mathbb F_q^3$.</p><ol start="9">
<li>Montrer que $(P,\Delta)$ vérifie (i) et (ii) (on utilisera la formule de Grassmann).</li>
<li>Montrer que chaque droite de $\Delta$ a $q+1$ points, puis que $(P,\Delta)$ est un plan projectif d'ordre $q$. Vérifier le nombre de points.</li>
<li>Pour $q = 2$, décrire les $7$ points et les $7$ droites ; retrouver le plan de Fano. Pour $q = 3$, donner les $4$ points de la droite d'équation $x+y+z = 0$.</li>
<li>Pour quel $q$ obtient-on le Dobble complet ? On admet le théorème de <b>Bruck-Ryser</b> : s'il existe un plan projectif d'ordre $n\equiv1$ ou $2\pmod4$, alors $n$ est somme de deux carrés. Montrer qu'il n'existe pas de plan projectif d'ordre $6$, $14$ ou $21$. Que dit ce théorème pour $n = 10$ ?</li></ol>`,
  decode: { donnees: [R`Grassmann ; une droite vectorielle de $\mathbb F_q^3$ a $q-1$ vecteurs non nuls.`], but: R`Les axiomes (i) et (ii) deviennent : deux droites vectorielles engendrent un plan, deux plans se coupent selon une droite.`, cles: {} },
  steps: [
    Q(9, "Axiomes (i) et (ii)", R`<p>(i) : $d_1+d_2$ est un plan. (ii) : $\dim(\Pi_1\cap\Pi_2) = 4-\dim(\Pi_1+\Pi_2) = 1$.</p>`, R`<p><b>(i).</b> Soient $d_1\neq d_2$ deux droites vectorielles. $d_1\cap d_2 = \{0\}$, donc $\dim(d_1+d_2) = 1+1-0 = 2$ : $\Pi = d_1+d_2$ est un plan contenant $d_1$ et $d_2$. Tout plan $\Pi'$ qui les contient contient $d_1+d_2$, de même dimension : $\Pi' = \Pi$. Une seule droite projective passe par les deux points.</p><p><b>(ii).</b> Soient $\Pi_1\neq\Pi_2$ deux plans. $\Pi_1+\Pi_2$ contient strictement $\Pi_1$, donc est de dimension $3$. Par Grassmann :</p>$$\dim(\Pi_1\cap\Pi_2) = 2+2-3 = 1.$$<p>$\Pi_1\cap\Pi_2$ est une droite vectorielle : les deux droites projectives ont exactement un point commun.</p>`, ["dob-grass"]),
    Q(10, "Un plan projectif d'ordre q", R`<p>Les droites vectorielles d'un plan $\Pi\simeq\mathbb F_q^2$ : $\frac{q^2-1}{q-1}$.</p>`, R`<p>Les points d'une droite projective sont les droites vectorielles de $\Pi\simeq\mathbb F_q^2$ : il y en a $\frac{q^2-1}{q-1} = q+1\geqslant3$ (iii). Il y a plusieurs plans dans $\mathbb F_q^3$, par exemple $\{x = 0\}$ et $\{y = 0\}$ (iv). C'est un plan projectif avec $m = q+1$, d'ordre $q$. Nombre de points :</p>$$|P| = \frac{q^3-1}{q-1} = q^2+q+1 = m^2-m+1.\ ✓$$`, ["dob-cnt"]),
    Q(11, "Petits exemples", R`<p>$q = 2$ : une droite vectorielle de $\mathbb F_2^3$ est $\{0,v\}$. Un plan est $\{v : a\cdot v = 0\}$.</p>`, R`<p><b>$q = 2$.</b> Une droite vectorielle de $\mathbb F_2^3$ est $\{0,v\}$ avec $v\neq0$ : les $7$ points sont les $7$ vecteurs non nuls. Un plan est $\{v : a_1v_1+a_2v_2+a_3v_3 = 0\}$ pour un $a\neq0$ : $7$ droites, de $3$ points chacune. Trois points $u,v,w$ distincts sont dans un même plan si et seulement si $w = u+v$ (le plan $\{0,u,v,u+v\}$), c'est-à-dire $u+v+w = 0$.</p>${figFano}<p><b>$q = 3$.</b> Les solutions non nulles de $x+y+z = 0$ dans $\mathbb F_3^3$ sont $8$ vecteurs, $4$ droites vectorielles (au signe près) : $$(1,2,0),\quad(1,0,2),\quad(0,1,2),\quad(1,1,1).$$ Vérification : $1+2 = 3\equiv0$, $1+1+1 = 3\equiv0$. On obtient un Dobble à $13$ cartes de $4$ symboles.</p>`, ["dob-cnt"]),
    Q(12, "Quels ordres sont possibles ?", R`<p>Dobble : $q = 7$. Puis teste $6,14,21$ avec le théorème des deux carrés.</p>`, R`<p>Le Dobble complet ($m = 8$) correspond à $q = 7$ : $\mathbb P^2(\mathbb F_7)$ a $49+7+1 = 57$ points.</p><ul><li>$6\equiv2\pmod4$, et $6 = 2\times3$ avec $v_3(6) = 1$ impair : $6$ n'est pas somme de deux carrés. Pas de plan d'ordre $6$ (c'est le « problème des $36$ officiers » d'Euler).</li><li>$14\equiv2$, $14 = 2\times7$, $v_7 = 1$ : pas somme de deux carrés, pas de plan.</li><li>$21\equiv1$, $21 = 3\times7$ : pas somme de deux carrés, pas de plan.</li><li>$10\equiv2$ et $10 = 1^2+3^2$ : Bruck-Ryser ne conclut pas. Il a fallu un calcul sur ordinateur (1989) pour montrer qu'il n'existe pas de plan d'ordre $10$.</li></ul><div class="sbox"><p>Les ordres $q$ puissances de nombres premiers sont réalisés par $\mathbb P^2(\mathbb F_q)$. On conjecture que ce sont les seuls ; le plus petit cas ouvert est $n = 12$.</p></div>`)
  ],
  piege: R`Un point de $\mathbb P^2(\mathbb F_q)$ n'est pas un vecteur mais une <b>droite vectorielle</b> : $(1,1,1)$ et $(2,2,2)$ représentent le même point de $\mathbb P^2(\mathbb F_3)$. Compter des vecteurs au lieu de droites donne un facteur $q-1$ de trop.`,
  methode: R`Géométrie projective sur un corps fini : traduire « point » et « droite » en sous-espaces vectoriels de dimensions $1$ et $2$, et utiliser Grassmann pour les intersections.`
}
]);
})();

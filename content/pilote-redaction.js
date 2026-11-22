/* Pilote « aides à la rédaction » sur la khôlle cx-05 (Sommes trigonométriques par l'exponentielle).
   Champs ajoutés aux étapes : declic (pourquoi j'y pense), copie (ce que j'écris), tete (fausses pistes),
   hs (indices gradués), trou (étape à trous), bareme, jury (remarques fréquentes des rapports, reformulées).
   Champs ajoutés à l'exercice : prereq (test de prérequis), themes (annales liées).
   Dans « copie », les tournures types sont marquées <span data-ph="id">…</span> (voir LEMME.PHRASES). */
LEMME.PHRASES = {
  posons: { t: "Posons … / Notons …", q: R`Introduire une notation avant de s'en servir. Le correcteur doit savoir d'où sort chaque lettre.`, ex: R`Posons $q = \frac{e^{ix}}{\cos x}$.` },
  reconnait: { t: "On reconnaît …", q: R`Nommer l'outil ou l'objet avant de l'utiliser : somme géométrique, binôme, dérivée d'un produit…`, ex: R`On reconnaît une somme géométrique de raison $e^{i\theta}$.` },
  comme: { t: "Comme … (hypothèse vérifiée)", q: R`Vérifier noir sur blanc l'hypothèse d'une formule ou d'un théorème juste avant de l'appliquer.`, ex: R`Comme $e^{i\theta}\neq1$, la formule de la somme géométrique s'applique.` },
  or: { t: "Or …", q: R`Apporter un fait connu (cours, question précédente) qui va débloquer la suite.`, ex: R`Or $q\neq1$ car $\tan x\neq0$.` },
  donc: { t: "Donc … / D'où …", q: R`Conséquence directe de ce qui précède, sans nouvel argument.`, ex: R`Donc $C_n+iS_n = \frac{1-e^{i(n+1)\theta}}{1-e^{i\theta}}$.` },
  identif: { t: "En identifiant les parties réelle et imaginaire", q: R`Deux complexes égaux ont même partie réelle et même partie imaginaire. À dire seulement quand le facteur devant l'exponentielle est réel.`, ex: R`En identifiant les parties réelle et imaginaire, $C_n = \dots$ et $S_n = \dots$` },
  distinguons: { t: "Distinguons deux cas", q: R`Annoncer une disjonction de cas, puis traiter chaque cas jusqu'au bout.`, ex: R`Distinguons deux cas : $x\in\pi\mathbb Z$ ou non.` },
  reciproq: { t: "Réciproquement …", q: R`Après une analyse (conditions nécessaires), vérifier que les candidats conviennent vraiment.`, ex: R`Réciproquement, on retire les valeurs où l'équation n'a pas de sens.` },
  ainsi: { t: "Ainsi … (conclusion)", q: R`Conclure la question en rappelant ce qui était demandé. Le résultat final est encadré.`, ex: R`Ainsi $\mathcal S = \{\dots\}$.` },
  parlaq: { t: "D'après la question … (appliquée à …)", q: R`Réutiliser une question précédente en disant avec quelles valeurs, et pourquoi ses hypothèses sont satisfaites.`, ex: R`D'après la question 1 appliquée à $2\theta\in\,]0,2\pi[$, …` }
};

(() => {
const e = LEMME.EXERCISES.find(x => x.id === "cx-05");
if (!e) return;
const ph = (id, t) => `<span data-ph="${id}">${t}</span>`;
e.pilote = true;
e.themes = ["somme géométrique", "angle moitié", "racines de l'unité", "Moivre", "exponentielle complexe"];
e.prereq = [
  { q: R`Pour $q\neq1$, la somme $\displaystyle\sum_{k=0}^nq^k$ vaut :`, c: [R`$\dfrac{1-q^{n+1}}{1-q}$`, R`$\dfrac{1-q^{n}}{1-q}$`, R`$\dfrac{q^{n+1}-1}{q+1}$`, R`$(n+1)\,q$`], ok: 0, r: "cx-geo" },
  { q: R`Le nombre $e^{ia}-1$ s'écrit :`, c: [R`$2i\sin\frac a2\,e^{ia/2}$`, R`$2\cos\frac a2\,e^{ia/2}$`, R`$2\sin a\,e^{ia}$`, R`$i\sin a$`], ok: 0, r: "cx-moitie" },
  { q: R`$\cos^2a$ est égal à :`, c: [R`$\dfrac{1-\cos2a}2$`, R`$\dfrac{1+\cos2a}2$`, R`$1-\sin a$`, R`$\cos(a^2)$`], ok: 1, r: "cx-lin" }
];
const S = e.steps;

/* ---------- Q1 ---------- */
Object.assign(S[0], {
  declic: R`On voit $\sum\cos(k\theta)$ : c'est la partie réelle de $\sum e^{ik\theta}$, une somme géométrique. Et le $\sin\frac\theta2$ qu'on attend au dénominateur annonce l'angle moitié.`,
  copie: R`<p>Soit $\theta\in\,]0,2\pi[$ et $n\in\mathbb N$. Par la formule de Moivre, $C_n+iS_n = \sum_{k=0}^n\big(e^{i\theta}\big)^k$.</p><p>${ph("reconnait", "On reconnaît")} une somme géométrique de raison $e^{i\theta}$. ${ph("comme", "Comme")} $\theta\notin2\pi\mathbb Z$, on a $e^{i\theta}\neq1$, ${ph("donc", "donc")}</p>$$C_n+iS_n = \frac{1-e^{i(n+1)\theta}}{1-e^{i\theta}} = \frac{-2i\sin\frac{(n+1)\theta}2\,e^{i\frac{(n+1)\theta}2}}{-2i\sin\frac\theta2\,e^{i\frac\theta2}} = \frac{\sin\frac{(n+1)\theta}2}{\sin\frac\theta2}\,e^{i\frac{n\theta}2},$$<p>par factorisation par l'angle moitié, avec $\sin\frac\theta2\neq0$ puisque $\frac\theta2\in\,]0,\pi[$.</p><p>Le quotient de sinus est réel. ${ph("identif", "En identifiant les parties réelle et imaginaire")} :</p><div class="sbox">$$C_n = \frac{\sin\frac{(n+1)\theta}2\cos\frac{n\theta}2}{\sin\frac\theta2},\qquad S_n = \frac{\sin\frac{(n+1)\theta}2\sin\frac{n\theta}2}{\sin\frac\theta2}.$$</div>`,
  tete: R`<p><b>Premier réflexe :</b> chercher une relation entre $C_n$ et $C_{n-1}$, ou linéariser. On tourne en rond : aucune forme close n'apparaît.</p><p><b>Deuxième piège :</b> prendre la partie réelle de $\frac{1-e^{i(n+1)\theta}}{1-e^{i\theta}}$ en divisant les parties réelles. C'est faux : il faut d'abord faire apparaître un facteur réel devant une exponentielle.</p>`,
  hs: [R`Écris $\cos(k\theta)$ comme la partie réelle d'une exponentielle.`, R`$C_n+iS_n$ est une somme géométrique. Quelle est sa raison ? Peut-elle valoir $1$ ici ?`, R`Factorise $1-e^{ia}$ par $e^{ia/2}$ : $1-e^{ia} = -2i\sin\frac a2\,e^{ia/2}$.`],
  trou: { q: R`Avant d'écrire $\sum_{k=0}^nq^k = \dfrac{1-q^{n+1}}{1-q}$, que faut-il vérifier ?`, c: [R`Que $q$ est réel`, R`Que $q\neq1$`, R`Que $|q|< 1$`, R`Que $n\geqslant1$`], ok: 1, why: R`La formule divise par $1-q$ : il faut $q\neq1$. Ici $q = e^{i\theta}$ avec $\theta\in\,]0,2\pi[$, donc $q\neq1$. La condition $|q|< 1$ ne sert que pour les séries.` },
  bareme: { sur: 4, l: [[1, R`Passage à $\sum e^{ik\theta}$ et reconnaissance d'une somme géométrique`], [1, R`Justification de $e^{i\theta}\neq1$`], [1, R`Factorisation par l'angle moitié, sans erreur de signe`], [1, R`Identification de $C_n$ et $S_n$`]] },
  jury: [
    { e: R`Appliquer la formule de la somme géométrique sans vérifier que la raison est différente de $1$.`, p: R`Le point de justification est perdu, même si le résultat final est juste.` },
    { e: R`Écrire $\mathrm{Re}\big(\frac ab\big) = \frac{\mathrm{Re}\,a}{\mathrm{Re}\,b}$.`, p: R`Erreur de cours : la suite de la question est en général comptée fausse.` },
    { e: R`Ne pas dire pourquoi $\sin\frac\theta2\neq0$.`, p: R`Division non justifiée : rédaction jugée incomplète.` }
  ]
});

/* ---------- Q2 ---------- */
Object.assign(S[1], {
  declic: R`Des $\binom nk$ devant des puissances $k$-ièmes : c'est la signature du binôme de Newton. $\sum\binom nkq^k = (1+q)^n$, sans aucune condition sur $q$.`,
  copie: R`<p>Soit $\theta\in\mathbb R$. Comme $\binom nk$ est réel, par Moivre, $A+iB = \sum_{k=0}^n\binom nk\big(e^{i\theta}\big)^k$.</p><p>${ph("reconnait", "On reconnaît")} la formule du binôme avec $a = e^{i\theta}$ et $b = 1$, ${ph("donc", "donc")}</p>$$A+iB = \big(1+e^{i\theta}\big)^n = \Big(2\cos\frac\theta2\,e^{i\theta/2}\Big)^n = \Big(2\cos\frac\theta2\Big)^ne^{in\theta/2}.$$<p>Le facteur $\big(2\cos\frac\theta2\big)^n$ est réel. ${ph("identif", "En identifiant les parties réelle et imaginaire")} :</p><div class="sbox">$$\sum_{k=0}^n\binom nk\cos(k\theta) = 2^n\cos^n\frac\theta2\cos\frac{n\theta}2,\qquad\sum_{k=0}^n\binom nk\sin(k\theta) = 2^n\cos^n\frac\theta2\sin\frac{n\theta}2.$$</div>`,
  tete: R`<p><b>Réflexe à éviter :</b> refaire une somme géométrique. Avec les $\binom nk$ devant, les coefficients ne sont pas constants : ce n'en est pas une.</p><p><b>Piège :</b> écrire le module $\big|2\cos\frac\theta2\big|^n$. On n'a pas besoin du module ici : on veut seulement un facteur réel.</p>`,
  hs: [R`Regroupe comme à la question 1 : $A+iB = \sum\binom nk(\dots)^k$.`, R`Quelle formule contient $\sum_k\binom nka^kb^{n-k}$ ?`, R`$1+e^{i\theta} = 2\cos\frac\theta2\,e^{i\theta/2}$.`],
  trou: { q: R`$\displaystyle\sum_{k=0}^n\binom nke^{ik\theta}$ est égal à :`, c: [R`$\dfrac{1-e^{i(n+1)\theta}}{1-e^{i\theta}}$`, R`$\big(1+e^{i\theta}\big)^n$`, R`$2^ne^{in\theta}$`, R`$\big(e^{i\theta}\big)^{n+1}$`], ok: 1, why: R`C'est le binôme avec $a = e^{i\theta}$ et $b = 1$. La première réponse oublie les coefficients binomiaux.` },
  bareme: { sur: 3, l: [[1, R`Binôme de Newton correctement appliqué`], [1, R`Angle moitié : $\big(2\cos\frac\theta2\big)^ne^{in\theta/2}$`], [1, R`Les deux formules finales`]] },
  jury: [
    { e: R`Passer au module $\big|2\cos\frac\theta2\big|^n$ sans raison.`, p: R`Résultat faux dès que $\cos\frac\theta2< 0$ et $n$ impair.` },
    { e: R`Exclure des valeurs de $\theta$ alors qu'aucune division n'a lieu.`, p: R`Réponse incomplète : la formule vaut pour tout réel $\theta$.` }
  ]
});

/* ---------- Q3 ---------- */
Object.assign(S[2], {
  declic: R`Un carré de cosinus se linéarise : $\cos^2a = \frac{1+\cos2a}2$. On retombe alors sur la somme de la question 1, avec $2\theta$ à la place de $\theta$.`,
  copie: R`<p>Soit $\theta\in\,]0,\pi[$. Par linéarisation, $\cos^2(k\theta) = \frac{1+\cos(2k\theta)}2$, ${ph("donc", "donc")}</p>$$\sum_{k=0}^n\cos^2(k\theta) = \frac{n+1}2+\frac12\sum_{k=0}^n\cos(k\cdot2\theta).$$<p>${ph("comme", "Comme")} $2\theta\in\,]0,2\pi[$, ${ph("parlaq", "d'après la question 1 appliquée à $2\\theta$")}, $\sum_{k=0}^n\cos(2k\theta) = \dfrac{\sin\big((n+1)\theta\big)\cos(n\theta)}{\sin\theta}$.</p><p>${ph("ainsi", "Ainsi")}, et comme $\sin^2 = 1-\cos^2$ :</p><div class="sbox">$$\sum_{k=0}^n\cos^2(k\theta) = \frac{n+1}2+\frac{\sin\big((n+1)\theta\big)\cos(n\theta)}{2\sin\theta},\qquad\sum_{k=0}^n\sin^2(k\theta) = \frac{n+1}2-\frac{\sin\big((n+1)\theta\big)\cos(n\theta)}{2\sin\theta}.$$</div>`,
  tete: R`<p><b>Fausse piste longue :</b> développer $\big(\frac{e^{ik\theta}+e^{-ik\theta}}2\big)^2$ et sommer trois suites géométriques. Ça marche, mais c'est trois fois plus long que de réutiliser la question 1.</p><p><b>Pourquoi $]0,\pi[$ ?</b> C'est exactement ce qu'il faut pour que $2\theta$ soit dans $]0,2\pi[$ : l'énoncé prépare l'utilisation de la question 1.</p>`,
  hs: [R`Comment se débarrasser du carré ?`, R`$\cos^2a = \frac{1+\cos2a}2$.`, R`Applique la question 1 avec $2\theta$. Vérifie d'abord que $2\theta\in\,]0,2\pi[$.`],
  trou: { q: R`Pour appliquer la question 1 à l'angle $2\theta$, il faut :`, c: [R`$2\theta\in\,]0,2\pi[$, ce qui est vrai car $\theta\in\,]0,\pi[$`, R`$\theta\in\,]0,2\pi[$, cela suffit`, R`Aucune condition`, R`$\cos\theta\neq0$`], ok: 0, why: R`La question 1 suppose l'angle dans $]0,2\pi[$. C'est pour cela que l'énoncé restreint $\theta$ à $]0,\pi[$.` },
  bareme: { sur: 3, l: [[1, R`Linéarisation de $\cos^2$`], [1, R`Réutilisation justifiée de la question 1 avec $2\theta$`], [1, R`Résultat pour $\cos^2$ puis pour $\sin^2$`]] },
  jury: [{ e: R`Réutiliser un résultat d'une question précédente sans vérifier que ses hypothèses sont satisfaites.`, p: R`Remarque très fréquente des correcteurs : le point de justification est perdu.` }]
});

/* ---------- Q4 ---------- */
Object.assign(S[3], {
  declic: R`$\frac{\cos(kx)}{\cos^kx}$ ressemble à $\frac{e^{ikx}}{\cos^kx} = \big(\frac{e^{ix}}{\cos x}\big)^k$ : une puissance $k$-ième, donc encore une somme géométrique.`,
  copie: R`<p>Soit $x$ tel que $\cos x\neq0$ et $x\notin\pi\mathbb Z$. ${ph("posons", "Posons")} $q = \dfrac{e^{ix}}{\cos x} = 1+i\tan x$.</p><p>${ph("comme", "Comme")} $\cos^kx$ est réel, $\dfrac{\cos(kx)}{\cos^kx} = \mathrm{Re}\big(q^k\big)$, ${ph("donc", "donc")} $T = \mathrm{Re}\Big(\sum_{k=0}^nq^k\Big)$.</p><p>${ph("or", "Or")} $q\neq1$ car $\tan x\neq0$, et $1-q = -i\tan x$, ${ph("donc", "d'où")}</p>$$\sum_{k=0}^nq^k = \frac{1-q^{n+1}}{-i\tan x} = \frac{i\big(1-q^{n+1}\big)}{\tan x}.$$<p>Comme $\mathrm{Re}(iu) = -\mathrm{Im}(u)$ et $\mathrm{Im}\big(q^{n+1}\big) = \frac{\sin((n+1)x)}{\cos^{n+1}x}$ :</p><div class="sbox">$$T = \frac{\sin\big((n+1)x\big)}{\cos^{n+1}x\,\tan x} = \frac{\sin\big((n+1)x\big)}{\sin x\,\cos^nx}.$$</div>`,
  tete: R`<p><b>Premier réflexe :</b> écrire $\cos(kx)$ comme un polynôme en $\cos x$. Impraticable pour $k$ quelconque.</p><p><b>Le bon réflexe :</b> tout ce qui est « à la puissance $k$ » se regroupe en une seule raison $q$.</p><p><b>Erreur fréquente au brouillon :</b> $\frac1{-i} = -i$. Non : $\frac1{-i} = i$ (car $-i\times i = 1$).</p>`,
  hs: [R`Écris le terme général comme une partie réelle.`, R`Quelle raison $q$ ? Calcule $\frac{e^{ix}}{\cos x}$ sous forme algébrique.`, R`$1-q = -i\tan x$, et $\mathrm{Re}(iu) = -\mathrm{Im}(u)$.`],
  trou: { q: R`La raison $q = \dfrac{e^{ix}}{\cos x}$ vaut :`, c: [R`$1+i\tan x$`, R`$e^{ix}\cos x$`, R`$\tan x$`, R`$1+i\cot x$`], ok: 0, why: R`$\dfrac{\cos x+i\sin x}{\cos x} = 1+i\dfrac{\sin x}{\cos x} = 1+i\tan x$.` },
  bareme: { sur: 4, l: [[1, R`Écriture comme partie réelle d'une somme géométrique`], [1, R`$q\neq1$ justifié`], [1, R`Calcul du quotient sans erreur de signe`], [1, R`Partie réelle et forme finale`]] },
  jury: [
    { e: R`Oublier les valeurs interdites ($\cos x = 0$) ou ne pas dire que $q\neq1$.`, p: R`Rédaction incomplète : point de justification perdu.` },
    { e: R`Se tromper de signe en écrivant $\frac1{-i}$.`, p: R`Le résultat final faux fait perdre le point de calcul.` }
  ]
});

/* ---------- Q5 ---------- */
Object.assign(S[4], {
  declic: R`« Somme $= 0$ » : on remplace la somme par sa forme close (question 4), puis on résout une équation trigonométrique simple. Tout le travail est dans les valeurs interdites.`,
  copie: R`<p>L'équation a un sens si et seulement si $\cos x\neq0$. ${ph("distinguons", "Distinguons deux cas.")}</p><p>Si $x\in\pi\mathbb Z$, chaque terme vaut $1$ et la somme vaut $n+1\neq0$ : pas de solution.</p><p>Sinon, ${ph("parlaq", "d'après la question 4")}, l'équation équivaut à $\sin\big((n+1)x\big) = 0$, soit $x = \frac{k\pi}{n+1}$ avec $k\in\mathbb Z$.</p><p>${ph("reciproq", "Réciproquement")}, on retire les valeurs telles que $x\in\pi\mathbb Z$ ou $\cos x = 0$, c'est-à-dire celles pour lesquelles $\frac{2x}\pi = \frac{2k}{n+1}$ est un entier.</p><p>${ph("ainsi", "Ainsi")} :</p><div class="sbox">$$\mathcal S = \Big\{\frac{k\pi}{n+1}\ \Big|\ k\in\mathbb Z,\ (n+1)\nmid2k\Big\}.$$</div>`,
  tete: R`<p><b>Piège classique :</b> donner $\frac{k\pi}{n+1}$ pour tout $k$. Il faut revenir aux conditions d'existence : $\cos x\neq0$, et le cas $x\in\pi\mathbb Z$ traité à part.</p><p><b>Astuce pour ne rien oublier :</b> regarder $\frac{2x}\pi$. Entier pair : $x\in\pi\mathbb Z$. Entier impair : $\cos x = 0$.</p>`,
  hs: [R`Utilise la question 4, mais attention à ses hypothèses.`, R`Traite à part le cas $x\in\pi\mathbb Z$.`, R`Pour $x = \frac{k\pi}{n+1}$, regarde $\frac{2x}\pi = \frac{2k}{n+1}$ : pair ou impair ?`],
  trou: { q: R`Pour $n = 2$, laquelle de ces valeurs n'est <b>pas</b> solution ?`, c: [R`$\frac\pi3$`, R`$\frac{2\pi}3$`, R`$\pi$`, R`$\frac{4\pi}3$`], ok: 2, why: R`$x = \pi$ est dans $\pi\mathbb Z$ : la somme vaut $n+1 = 3\neq0$. Dans la formule, c'est $k = 3$, et $3\mid2\times3$.` },
  bareme: { sur: 3, l: [[1, R`Conditions d'existence et cas $x\in\pi\mathbb Z$`], [1, R`Résolution de $\sin\big((n+1)x\big) = 0$`], [1, R`Exclusion des valeurs interdites et ensemble final`]] },
  jury: [
    { e: R`Donner l'ensemble $\big\{\frac{k\pi}{n+1}\big\}$ sans retirer les valeurs interdites.`, p: R`Réponse fausse : en général aucun point sur la conclusion.` },
    { e: R`Résoudre par implications sans vérifier la réciproque.`, p: R`Les correcteurs attendent explicitement le retour aux conditions d'existence.` }
  ]
});
})();

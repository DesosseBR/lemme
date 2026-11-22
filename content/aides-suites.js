/* Aides à la rédaction écrites à la main pour les khôlles « suites numériques » (su-01 à su-17).
   Mêmes champs que les khôlles réels : declic, copie, tete, trou, bareme, jury ; prereq sur l'exercice.
   Les indices gradués (hs) sont construits automatiquement à partir de l'indice et du corrigé. */
(() => {
const R = String.raw;
const ph = (id, t) => `<span data-ph="${id}">${t}</span>`;
let K = 0;
const mix = q => { if (!q || !q.c) return q; const k = (K++ * 3 + 1) % q.c.length, c = q.c.slice(), g = c.splice(q.ok, 1)[0]; c.splice(k, 0, g); return Object.assign({}, q, { c, ok: k }); };
const A = (id, steps, prereq) => {
  const e = LEMME.EXERCISES.find(x => x.id === id); if (!e) return;
  e.pilote = true; if (prereq) e.prereq = prereq.map(mix);
  steps.forEach((o, i) => { if (o && e.steps[i]) Object.assign(e.steps[i], o, o.trou ? { trou: mix(o.trou) } : {}); });
};

/* ---------- su-01 · Manipuler la définition de la limite ---------- */
A("su-01", [
  { declic: R`Deux limites $\ell\lt\ell'$ : on cherche un réel $m$ qui les sépare, puis on applique la définition de la limite à chaque suite avec le même $\varepsilon$, égal à la moitié de l'écart.`,
    copie: R`<p>${ph("posons","Posons")} $m=\frac{\ell+\ell'}2$ et $\varepsilon=\frac{\ell'-\ell}2>0$. Alors $\ell+\varepsilon=m=\ell'-\varepsilon$.</p><p>${ph("comme","Comme")} $u_n\to\ell$, il existe $n_0$ tel que pour $n\geqslant n_0$, $|u_n-\ell|\lt\varepsilon$, d'où $u_n\lt\ell+\varepsilon=m$.</p><p>${ph("comme","Comme")} $v_n\to\ell'$, il existe $n_1$ tel que pour $n\geqslant n_1$, $|v_n-\ell'|\lt\varepsilon$, d'où $v_n>\ell'-\varepsilon=m$.</p><p>${ph("donc","Donc")} pour $n\geqslant\max(n_0,n_1)$ : $u_n\lt m\lt v_n$.</p><div class="sbox">$$\ell\lt\ell'\implies\exists n_0,\ \forall n\geqslant n_0,\ u_n\lt v_n.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que $\ell\lt\ell'$ donne $u_n\lt v_n$ pour tout $n$. Seul « à partir d'un certain rang » est vrai.</p><p><b>Premier réflexe :</b> passer aux limites dans une inégalité qu'on n'a pas. Ici on part des deux limites et on fabrique l'inégalité avec la définition.</p>`,
    trou: { q: R`Pourquoi prend-on $\varepsilon=\frac{\ell'-\ell}2$ et pas un $\varepsilon$ quelconque ?`, c: [R`pour que les intervalles $]\ell-\varepsilon,\ell+\varepsilon[$ et $]\ell'-\varepsilon,\ell'+\varepsilon[$ ne se chevauchent pas`, R`pour que $\varepsilon$ soit entier`, R`pour que $u_n=v_n$`, R`parce que la définition l'impose`], ok: 0, why: R`Avec cette valeur, $\ell+\varepsilon=\ell'-\varepsilon=m$ : tout terme de $(u_n)$ proche de $\ell$ est sous $m$, tout terme de $(v_n)$ proche de $\ell'$ est au-dessus.` },
    bareme: { sur: 4, l: [[1, R`Choix de $m$ et de $\varepsilon>0$ avec $\ell+\varepsilon=\ell'-\varepsilon$`], [1, R`$u_n\lt m$ à partir d'un rang, avec la définition`], [1, R`$v_n>m$ à partir d'un rang`], [1, R`Prendre le maximum des deux rangs et conclure`]] },
    jury: [
      { e: R`Écrire « $\ell\lt\ell'$ donc $u_n\lt v_n$ » sans rang.`, p: R`Énoncé faux pour les petits $n$ : point de conclusion perdu.` },
      { e: R`Utiliser deux rangs différents sans prendre le maximum.`, p: R`Les deux inégalités ne sont pas simultanées : rigueur perdue.` }
    ] },
  { declic: R`Une inégalité large qu'on veut démontrer : on raisonne par l'absurde. La négation de $\ell\leqslant\ell'$ est $\ell>\ell'$, et la question 1 (rôles échangés) donne alors $v_n\lt u_n$ à partir d'un rang.`,
    copie: R`<p>${ph("posons","Supposons")} par l'absurde $\ell>\ell'$.</p><p>${ph("comme","Comme")} $v_n\to\ell'$, $u_n\to\ell$ et $\ell'\lt\ell$, la question 1 (rôles échangés) donne $n_0$ tel que pour $n\geqslant n_0$, $v_n\lt u_n$.</p><p>${ph("or","Or")} l'hypothèse donne $u_{n_0}\leqslant v_{n_0}$ : contradiction. ${ph("donc","Donc")} $\ell\leqslant\ell'$.</p><p>Pour l'inégalité stricte : $u_n=0\lt v_n=\frac1n$ mais $\ell=\ell'=0$.</p><div class="sbox">$$\forall n,\ u_n\leqslant v_n\implies\ell\leqslant\ell'\quad(\text{mais }\lt\text{ devient }\leqslant).$$</div>`,
    tete: R`<p><b>Piège :</b> écrire « $u_n\lt v_n$ donc $\ell\lt\ell'$ ». Une inégalité stricte devient large à la limite.</p><p><b>Premier réflexe :</b> « passer à la limite » sans citer de théorème. Ici le théorème, c'est la question 1.</p>`,
    trou: { q: R`Quel contre-exemple montre que l'inégalité stricte ne passe pas à la limite ?`, c: [R`$u_n=0$ et $v_n=\frac1n$`, R`$u_n=n$ et $v_n=n+1$`, R`$u_n=(-1)^n$ et $v_n=1$`, R`$u_n=\frac1n$ et $v_n=0$`], ok: 0, why: R`On a $u_n\lt v_n$ pour tout $n\geqslant1$ et les deux limites valent $0$. Avec $u_n=\frac1n$ et $v_n=0$ l'inégalité est inversée ; les autres suites ne convergent pas ou n'ont pas de limites égales.` },
    bareme: { sur: 4, l: [[1, R`Hypothèse absurde $\ell>\ell'$`], [1, R`Application de la question 1 avec rôles échangés`], [1, R`Contradiction avec $u_n\leqslant v_n$ au rang $n_0$`], [1, R`Contre-exemple pour l'inégalité stricte`]] },
    jury: [
      { e: R`Affirmer que l'inégalité stricte passe à la limite.`, p: R`Erreur de cours : zéro à la question sur la stricte.` },
      { e: R`Contradiction sans préciser le rang $n_0$.`, p: R`Il faut un $n$ précis où les deux inégalités coexistent : rigueur perdue.` }
    ] },
  { declic: R`Un entier à distance $\lt\frac12$ d'un autre entier lui est égal. On montre d'abord que la limite est entière, puis on prend $\varepsilon=\frac12$.`,
    copie: R`<p>$\Leftarrow$ Si $u_n=c$ pour $n\geqslant n_0$, alors $|u_n-c|=0\lt\varepsilon$ : $u_n\to c$.</p><p>$\Rightarrow$ ${ph("posons","Supposons")} $u_n\to\ell$ avec $\ell\notin\mathbb Z$. Soit $m=\lfloor\ell\rfloor$ : $m\lt\ell\lt m+1$. Avec $\varepsilon=\min(\ell-m,\,m+1-\ell)>0$, pour $n$ grand, $m\lt u_n\lt m+1$ : impossible pour un entier. ${ph("donc","Donc")} $\ell\in\mathbb Z$.</p><p>Avec $\varepsilon=\frac12$ : pour $n\geqslant n_0$, $u_n-\ell$ est un entier de valeur absolue $\lt\frac12$. ${ph("or","Or")} un entier non nul est de valeur absolue $\geqslant1$ : $u_n=\ell$.</p><div class="sbox">$$(u_n)\in\mathbb Z^{\mathbb N}\text{ converge}\iff(u_n)\text{ stationnaire.}$$</div>`,
    tete: R`<p><b>Piège :</b> oublier que $\ell$ doit être entier. Sans cela, $u_n-\ell$ n'est pas un entier et l'argument tombe.</p><p><b>Premier réflexe :</b> chercher un $\varepsilon$ qui dépend de la suite. Ici $\varepsilon=\frac12$ suffit grâce à la discrétion de $\mathbb Z$.</p>`,
    trou: { q: R`Pour $n\geqslant n_0$, $u_n-\ell$ est entier et $|u_n-\ell|\lt\frac12$. Que peut-on conclure ?`, c: [R`$u_n-\ell=0$`, R`$u_n-\ell=\frac12$`, R`$u_n-\ell=1$`, R`rien`], ok: 0, why: R`Les seuls entiers de valeur absolue strictement inférieure à $\frac12$ se réduisent à $0$ : tout entier non nul est de valeur absolue au moins $1$.` },
    bareme: { sur: 4, l: [[1, R`Sens direct : stationnaire implique convergente`], [1, R`La limite est entière (par l'absurde avec la partie entière)`], [1, R`Choix de $\varepsilon=\frac12$ et différence entière`], [1, R`Conclusion $u_n=\ell$ à partir de $n_0$`]] },
    jury: [
      { e: R`Ne pas montrer que $\ell\in\mathbb Z$.`, p: R`Étape clé manquante : deux points perdus.` },
      { e: R`Dire « un entier proche de $\ell$ est égal à $\ell$ » sans justifier.`, p: R`Il faut citer qu'un entier non nul est de valeur absolue $\geqslant1$ : point perdu.` }
    ] },
  { declic: R`Les deux suites sont à valeurs entières : par la question 3, elles convergent si et seulement si elles sont stationnaires. On sépare $x$ entier et $x$ non entier.`,
    copie: R`<p>${ph("distinguons","Distinguons")} deux cas.</p><p><b>$x=m\in\mathbb Z$.</b> Pour $n\geqslant2$ : $m\lt m+\frac1n\lt m+1$, donc $a_n=m$. Pour $n\geqslant1$ : $m-1\leqslant m-\frac1n\lt m$, donc $b_n=m-1$.</p><p><b>$x\notin\mathbb Z$.</b> Soit $m=\lfloor x\rfloor$ et $\delta=\min(x-m,\,m+1-x)>0$. Pour $n>\frac1\delta$, $m\lt x\pm\frac1n\lt m+1$ : $a_n=b_n=m$.</p><div class="sbox">$$\lfloor x+\tfrac1n\rfloor\to\lfloor x\rfloor,\qquad\lfloor x-\tfrac1n\rfloor\to\begin{cases}\lfloor x\rfloor&x\notin\mathbb Z\\x-1&x\in\mathbb Z\end{cases}$$</div>`,
    tete: R`<p><b>Piège :</b> croire que $\lfloor x-\frac1n\rfloor\to\lfloor x\rfloor$ toujours. En un entier, on approche par la gauche et la partie entière saute.</p><p><b>Premier réflexe :</b> poser $\lfloor x\rfloor$ puis encadrer. Pour que cela marche il faut une marge $\delta>0$ : elle n'existe que si $x\notin\mathbb Z$.</p>`,
    trou: { q: R`Pour $x=m\in\mathbb Z$ et $n\geqslant1$, que vaut $\lfloor m-\frac1n\rfloor$ ?`, c: [R`$m-1$`, R`$m$`, R`$m+1$`, R`$m-\frac1n$`], ok: 0, why: R`On a $m-1\leqslant m-\frac1n\lt m$ car $0\lt\frac1n\leqslant1$, donc la partie entière est $m-1$.` },
    bareme: { sur: 4, l: [[1, R`Cas $x$ entier : $a_n=m$ pour $n\geqslant2$`], [1, R`Cas $x$ entier : $b_n=m-1$ avec justification`], [1, R`Cas $x$ non entier : choix de $\delta$ et du rang`], [1, R`Tableau récapitulatif des limites`]] },
    jury: [
      { e: R`Oublier le cas $x$ entier.`, p: R`Moitié des points perdus : le cas piège est omis.` },
      { e: R`Écrire $\lfloor x-\frac1n\rfloor=\lfloor x\rfloor$ pour tout $x$.`, p: R`Faux pour $x$ entier : point perdu et contre-exemple $x=2$.` }
    ] },
  { declic: R`Les deux hypothèses de majoration $u_n\leqslant a$ et $v_n\leqslant b$ donnent des écarts positifs : $a-u_n\geqslant0$, $b-v_n\geqslant0$. Leur somme est le majorant $(a+b)-(u_n+v_n)$ qui tend vers $0$.`,
    copie: R`<p>${ph("comme","Comme")} $u_n\leqslant a$ et $v_n\leqslant b$, on a $a-u_n\geqslant0$ et $b-v_n\geqslant0$. ${ph("donc","Donc")}</p>$$0\leqslant a-u_n\leqslant(a-u_n)+(b-v_n)=(a+b)-(u_n+v_n).$$<p>${ph("or","Or")} $u_n+v_n\to a+b$, donc le majorant tend vers $0$. Par le théorème des gendarmes, $a-u_n\to0$, soit $u_n\to a$.</p><p>${ph("ainsi","Ainsi")} $v_n=(u_n+v_n)-u_n\to(a+b)-a=b$.</p><div class="sbox">$$u_n\to a,\qquad v_n\to b.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que la somme convergente suffit. $u_n=n$, $v_n=-n$ donne une somme nulle sans que les deux convergent : les majorations sont essentielles.</p><p><b>Premier réflexe :</b> écrire $v_n=(u_n+v_n)-u_n$ avant de savoir que $(u_n)$ converge. Il faut d'abord démontrer la convergence de l'une des deux.</p>`,
    trou: { q: R`Quelle hypothèse garantit que $(a-u_n)$ est minorée par $0$ ?`, c: [R`$u_n\leqslant a$`, R`$u_n+v_n\to a+b$`, R`$v_n\leqslant b$`, R`$u_n\geqslant0$`], ok: 0, why: R`$a-u_n\geqslant0$ équivaut à $u_n\leqslant a$. Les autres hypothèses ne donnent pas le signe de cette différence.` },
    bareme: { sur: 4, l: [[1, R`Signe des deux écarts $a-u_n$ et $b-v_n$`], [1, R`Encadrement $0\leqslant a-u_n\leqslant(a+b)-(u_n+v_n)$`], [1, R`Gendarmes : $u_n\to a$`], [1, R`$v_n\to b$ par différence`]] },
    jury: [
      { e: R`Déduire $v_n\to b$ avant d'avoir démontré $u_n\to a$.`, p: R`Raisonnement circulaire : point perdu.` },
      { e: R`Ne pas utiliser les majorations $u_n\leqslant a$, $v_n\leqslant b$.`, p: R`L'encadrement n'est plus justifié : deux points perdus.` }
    ] },
  { declic: R`Deux suites, deux relations : la somme et la différence. En les additionnant on isole $2u_n$, en les soustrayant on isole $2v_n$.`,
    copie: R`<p>${ph("posons","Posons")} $u_n+v_n\to\ell$ et $u_n-v_n\to\ell'$.</p><p>En additionnant, $(u_n+v_n)+(u_n-v_n)=2u_n$, donc $u_n=\frac12\big[(u_n+v_n)+(u_n-v_n)\big]\to\frac{\ell+\ell'}2$.</p><p>En soustrayant, $(u_n+v_n)-(u_n-v_n)=2v_n$, donc $v_n\to\frac{\ell-\ell'}2$.</p><p>${ph("donc","Donc")} $(u_n)$ et $(v_n)$ convergent par opérations sur les limites.</p><div class="sbox">$$u_n\to\frac{\ell+\ell'}2,\qquad v_n\to\frac{\ell-\ell'}2.$$</div>`,
    tete: R`<p><b>Piège :</b> penser que $u_n+v_n$ convergente suffit : $u_n=(-1)^n$, $v_n=-(-1)^n$ le réfute. Il faut la somme <i>et</i> la différence.</p><p><b>Premier réflexe :</b> chercher un encadrement. Ici un petit système linéaire suffit.</p>`,
    trou: { q: R`Quelle combinaison de $u_n+v_n$ et $u_n-v_n$ donne $2v_n$ ?`, c: [R`$(u_n+v_n)-(u_n-v_n)$`, R`$(u_n+v_n)+(u_n-v_n)$`, R`$(u_n-v_n)-(u_n+v_n)$`, R`$(u_n+v_n)(u_n-v_n)$`], ok: 0, why: R`$(u_n+v_n)-(u_n-v_n)=2v_n$. La somme des deux donne $2u_n$ et l'inverse de la différence donne $-2v_n$.` },
    bareme: { sur: 3, l: [[1, R`Expression de $u_n$ avec somme et différence`], [1, R`Expression de $v_n$`], [1, R`Limites obtenues par opérations`]] },
    jury: [
      { e: R`Traiter le cas où seule la somme converge comme si cela suffisait.`, p: R`Erreur de logique : point perdu, contre-exemple attendu.` }
    ] },
  { declic: R`Un maximum se calcule avec la valeur absolue : $\max(a,b)=\frac12(a+b+|a-b|)$. La limite de la valeur absolue s'obtient par l'inégalité triangulaire inverse.`,
    copie: R`<p>Pour $a,b$ réels : $\max(a,b)=\frac12\big(a+b+|a-b|\big)$ (si $a\geqslant b$ le terme de droite vaut $a$, sinon $b$).</p><p>${ph("comme","Comme")} $u_n-v_n\to\ell-\ell'$ et $\big||u_n-v_n|-|\ell-\ell'|\big|\leqslant|(u_n-v_n)-(\ell-\ell')|\to0$, on a $|u_n-v_n|\to|\ell-\ell'|$.</p><p>${ph("donc","Donc")} $\max(u_n,v_n)\to\frac12\big(\ell+\ell'+|\ell-\ell'|\big)=\max(\ell,\ell')$.</p><p>${ph("ainsi","Ainsi")} $\min(u_n,v_n)=u_n+v_n-\max(u_n,v_n)\to\ell+\ell'-\max(\ell,\ell')=\min(\ell,\ell')$.</p><div class="sbox">$$\max(u_n,v_n)\to\max(\ell,\ell'),\quad\min(u_n,v_n)\to\min(\ell,\ell').$$</div>`,
    tete: R`<p><b>Piège :</b> raisonner par cas selon que $u_n\leqslant v_n$ ou non : le cas peut changer avec $n$. La formule unique avec $|\ |$ évite cela.</p><p><b>Premier réflexe :</b> invoquer « la continuité du max » sans la démontrer. Ici on la prouve avec la formule.</p>`,
    trou: { q: R`Comment obtient-on $\min(a,b)$ à partir de $\max(a,b)$ ?`, c: [R`$\min(a,b)=a+b-\max(a,b)$`, R`$\min(a,b)=-\max(a,b)$`, R`$\min(a,b)=\max(a,b)-a-b$`, R`$\min(a,b)=\frac{\max(a,b)}2$`], ok: 0, why: R`La somme des deux est $a+b$ : si on retire le plus grand, il reste le plus petit.` },
    bareme: { sur: 4, l: [[1, R`Formule $\max=\frac12(a+b+|a-b|)$ justifiée`], [1, R`$|u_n-v_n|\to|\ell-\ell'|$ par inégalité triangulaire inverse`], [1, R`Limite du maximum`], [1, R`Limite du minimum par $\min=a+b-\max$`]] },
    jury: [
      { e: R`Admettre la formule du maximum sans la vérifier.`, p: R`Il faut distinguer $a\geqslant b$ et $a\lt b$ : point perdu.` },
      { e: R`Écrire $|u_n-v_n|\to|\ell-\ell'|$ sans justification.`, p: R`La continuité de $|\cdot|$ doit être citée ou démontrée : point perdu.` }
    ] }
], [
  { q: R`Que signifie $u_n\to\ell$ ?`, c: [R`$\forall\varepsilon>0,\ \exists N,\ \forall n\geqslant N,\ |u_n-\ell|\lt\varepsilon$`, R`$\exists\varepsilon>0,\ \forall n,\ |u_n-\ell|\lt\varepsilon$`, R`$\forall N,\ \exists\varepsilon>0,\ |u_N-\ell|\lt\varepsilon$`, R`$u_n=\ell$ à partir d'un rang`], ok: 0, r: "su-lim" },
  { q: R`Si $0\leqslant x_n\leqslant y_n$ et $y_n\to0$, que dit le théorème des gendarmes ?`, c: [R`$x_n\to0$`, R`$x_n$ est stationnaire`, R`$x_n\to y_n$`, R`rien sans monotonie`], ok: 0, r: "su-ineg" },
  { q: R`Que vaut $\lfloor x\rfloor$ ?`, c: [R`le plus grand entier $\leqslant x$`, R`le plus petit entier $\geqslant x$`, R`l'entier le plus proche de $x$`, R`$x$ privé de sa partie décimale négative`], ok: 0, r: "re-ent" }
]);

/* ---------- su-02 · Majorations, rapports et racines ---------- */
A("su-02", [
  { declic: R`Une somme de trois termes qui tend vers $0$ ne force pas chaque terme à tendre vers $0$ : $u_nv_n$ peut être négatif. On cherche une identité qui fait apparaître un carré : $2s_n-(u_n+v_n)^2=u_n^2+v_n^2$.`,
    copie: R`<p>${ph("comme","Comme")} un carré est positif, $(u_n+v_n)^2\geqslant0$. De plus $2s_n-(u_n+v_n)^2=u_n^2+v_n^2\geqslant0$. ${ph("donc","Donc")} $0\leqslant(u_n+v_n)^2\leqslant2s_n\to0$.</p><p>Par gendarmes $(u_n+v_n)^2\to0$, d'où $u_n+v_n\to0$ (continuité de la racine).</p><p>${ph("ainsi","Ainsi")} $u_nv_n=(u_n+v_n)^2-s_n\to0$ et $u_n^2+v_n^2=2s_n-(u_n+v_n)^2\to0$.</p><p>${ph("or","Or")} $0\leqslant u_n^2\leqslant u_n^2+v_n^2\to0$ : $u_n^2\to0$, donc $u_n\to0$. De même $v_n\to0$.</p><div class="sbox">$$s_n\to0\implies u_n\to0,\ v_n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> « somme qui tend vers $0$, donc chaque terme tend vers $0$ ». Faux sans signe : $u_nv_n$ peut être négatif.</p><p><b>Premier réflexe :</b> poser $u_n=r\cos\theta$, $v_n=r\sin\theta$. C'est lourd. On préfère deux identités : $(u_n+v_n)^2-s_n=u_nv_n$ et $2s_n-(u_n+v_n)^2=u_n^2+v_n^2$.</p>`,
    trou: { q: R`Quelle identité donne $u_n^2+v_n^2$ à partir de $s_n$ et de $(u_n+v_n)^2$ ?`, c: [R`$u_n^2+v_n^2=2s_n-(u_n+v_n)^2$`, R`$u_n^2+v_n^2=s_n+u_nv_n$`, R`$u_n^2+v_n^2=(u_n+v_n)^2$`, R`$u_n^2+v_n^2=s_n+(u_n+v_n)^2$`], ok: 0, why: R`En développant : $2u_n^2+2u_nv_n+2v_n^2-u_n^2-2u_nv_n-v_n^2=u_n^2+v_n^2$. Les autres égalités sont fausses (il manque le terme croisé).` },
    bareme: { sur: 5, l: [[1, R`Encadrement $0\leqslant(u_n+v_n)^2\leqslant2s_n$`], [1, R`$u_n+v_n\to0$ par gendarmes et racine`], [1, R`$u_nv_n\to0$ par identité`], [1, R`$u_n^2+v_n^2\to0$`], [1, R`Gendarmes sur $u_n^2$, puis racine`]] },
    jury: [
      { e: R`Conclure « les trois termes tendent vers $0$ » sans justifier.`, p: R`Le produit $u_nv_n$ peut être négatif : le raisonnement est faux, zéro à l'étape.` },
      { e: R`Passer de $(u_n+v_n)^2\to0$ à $u_n+v_n\to0$ sans mot.`, p: R`Il faut citer la continuité de la racine en $0$ : point de rigueur perdu.` }
    ] },
  { declic: R`Les deux suites sont dans $[0,1]$ : multiplier par un nombre positif conserve le sens de l'inégalité. Donc $u_nv_n\leqslant u_n\leqslant1$, et les gendarmes donnent la limite.`,
    copie: R`<p>${ph("comme","Comme")} $u_n\geqslant0$ et $v_n\leqslant1$, on a $u_nv_n\leqslant u_n$. ${ph("donc","Donc")} $u_nv_n\leqslant u_n\leqslant1$.</p><p>Le membre de gauche tend vers $1$, celui de droite est constant égal à $1$ : par gendarmes $u_n\to1$.</p><p>${ph("ainsi","Ainsi")}, comme $v_n\geqslant0$ et $u_n\leqslant1$, $u_nv_n\leqslant v_n\leqslant1$ et $v_n\to1$.</p><div class="sbox">$$u_n\to1,\qquad v_n\to1.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier que $u_n$ et $v_n$ sont dans $[0,1]$. Avec $u_n=n$ et $v_n=\frac1n$ le produit vaut $1$ sans que les deux tendent vers $1$.</p><p><b>Premier réflexe :</b> passer à la limite dans un produit sans connaître celle des facteurs. Ici on majore le produit par un seul facteur.</p>`,
    trou: { q: R`Pourquoi a-t-on $u_nv_n\leqslant u_n$ ?`, c: [R`on multiplie $v_n\leqslant1$ par $u_n\geqslant0$`, R`on multiplie $v_n\leqslant1$ par $u_n$ de signe quelconque`, R`parce que $u_n\leqslant v_n$`, R`parce que $u_nv_n\to1$`], ok: 0, why: R`Multiplier une inégalité par un réel positif conserve son sens. Si $u_n$ était négatif, le sens serait inversé.` },
    bareme: { sur: 3, l: [[1, R`$u_nv_n\leqslant u_n\leqslant1$ avec justification du sens`], [1, R`Gendarmes : $u_n\to1$`], [1, R`Même argument pour $v_n$`]] },
    jury: [
      { e: R`Multiplier une inégalité sans préciser le signe du facteur.`, p: R`Il faut dire que $u_n\geqslant0$ : point perdu.` }
    ] },
  { declic: R`Une somme d'exponentielles et un produit : on pose $A_n=\mathrm e^{u_n/2}$, $B_n=\mathrm e^{v_n/2}$ pour avoir $A_n^2+B_n^2$ et $A_nB_n$, puis on joue avec $(A_n\pm B_n)^2$.`,
    copie: R`<p>${ph("posons","Posons")} $A_n=\mathrm e^{u_n/2}>0$, $B_n=\mathrm e^{v_n/2}>0$. Alors $A_n^2+B_n^2=\mathrm e^{u_n}+\mathrm e^{v_n}\to2$ et $A_nB_n=\mathrm e^{(u_n+v_n)/2}\to1$.</p><p>$(A_n-B_n)^2=A_n^2+B_n^2-2A_nB_n\to0$ et $(A_n+B_n)^2\to4$ ; comme $A_n+B_n>0$, $A_n+B_n\to2$ et $A_n-B_n\to0$.</p><p>${ph("donc","Donc")} $A_n=\frac12[(A_n+B_n)+(A_n-B_n)]\to1$ et $B_n\to1$.</p><p>${ph("ainsi","Ainsi")} $u_n=2\ln A_n\to0$ et $v_n=2\ln B_n\to0$.</p><div class="sbox">$$u_n\to0,\qquad v_n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> penser que $u_n+v_n\to0$ suffit : $u_n=n$, $v_n=-n$ donne une somme nulle sans convergence. L'hypothèse sur les exponentielles est la vraie contrainte.</p><p><b>Premier réflexe :</b> prendre le logarithme de $\mathrm e^{u_n}+\mathrm e^{v_n}$. Le logarithme d'une somme ne se simplifie pas : on change de variable pour retrouver des carrés.</p>`,
    trou: { q: R`Que vaut $A_nB_n$ pour $A_n=\mathrm e^{u_n/2}$ et $B_n=\mathrm e^{v_n/2}$ ?`, c: [R`$\mathrm e^{(u_n+v_n)/2}$`, R`$\mathrm e^{u_nv_n/4}$`, R`$\mathrm e^{u_n}+\mathrm e^{v_n}$`, R`$\mathrm e^{(u_n-v_n)/2}$`], ok: 0, why: R`Le produit de deux exponentielles est l'exponentielle de la somme des exposants : $\mathrm e^a\mathrm e^b=\mathrm e^{a+b}$.` },
    bareme: { sur: 4, l: [[1, R`Changement de variable $A_n$, $B_n$ positifs`], [1, R`$A_n^2+B_n^2\to2$ et $A_nB_n\to1$`], [1, R`$A_n\to1$ et $B_n\to1$ via $(A_n\pm B_n)^2$`], [1, R`Retour par le logarithme : $u_n\to0$, $v_n\to0$`]] },
    jury: [
      { e: R`Écrire $A_n+B_n=\sqrt{(A_n+B_n)^2}$ sans mentionner la positivité.`, p: R`Le signe est nécessaire pour la racine : point perdu.` },
      { e: R`Passer au logarithme sans citer la continuité en $1$.`, p: R`Justification de la limite manquante : point perdu.` }
    ] },
  { declic: R`Un rapport qui tend vers $0$ est plus petit que $\frac12$ à partir d'un rang : les termes sont donc au plus divisés par $2$ à chaque pas. On compare à une suite géométrique.`,
    copie: R`<p>${ph("comme","Comme")} $\frac{u_{n+1}}{u_n}\to0\lt\frac12$, il existe $N$ tel que pour $n\geqslant N$, $\big|\frac{u_{n+1}}{u_n}\big|\lt\frac12$, d'où $|u_{n+1}|\leqslant\frac12|u_n|$.</p><p>Par récurrence, pour $n\geqslant N$ : $|u_n|\leqslant\dfrac{|u_N|}{2^{n-N}}$ (initialisation en $n=N$ ; hérédité par multiplication par $\frac12$).</p><p>${ph("donc","Donc")} $0\leqslant|u_n|\leqslant|u_N|2^N\big(\frac12\big)^n\to0$ : par gendarmes $u_n\to0$.</p><div class="sbox">$$\frac{u_{n+1}}{u_n}\to0\implies u_n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que la réciproque est vraie. $u_n=\frac1n$ tend vers $0$ mais le rapport tend vers $1$.</p><p><b>Premier réflexe :</b> « le rapport est petit, donc la suite est petite ». Il faut le quantifier : pour $n\geqslant N$ le rapport est $\lt\frac12$, ce qui donne une borne géométrique.</p>`,
    trou: { q: R`Pour passer de $\frac{|u_{n+1}|}{|u_n|}\lt\frac12$ à $|u_{n+1}|\leqslant\frac12|u_n|$, on multiplie par :`, c: [R`$|u_n|>0$`, R`$u_n$ de signe quelconque`, R`$\frac12$`, R`$2$`], ok: 0, why: R`On multiplie les deux membres par $|u_n|$, strictement positif (les termes sont non nuls) : le sens de l'inégalité est conservé.` },
    bareme: { sur: 4, l: [[1, R`Rang $N$ où le rapport est $\lt\frac12$ (définition avec $\varepsilon=\frac12$)`], [1, R`Forme sans quotient $|u_{n+1}|\leqslant\frac12|u_n|$`], [1, R`Récurrence $|u_n|\leqslant|u_N|/2^{n-N}$`], [1, R`Gendarmes avec $\big(\frac12\big)^n\to0$`]] },
    jury: [
      { e: R`Affirmer « $|u_{n+1}|\leqslant\frac12|u_n|$ donc $u_n\to0$ » sans récurrence.`, p: R`Il manque la borne géométrique : deux points perdus.` },
      { e: R`Écrire $\frac{u_{n+1}}{u_n}\to0$ sans préciser $u_n\neq0$.`, p: R`Le quotient n'a pas de sens sinon : point perdu.` }
    ] },
  { declic: R`Si $\sqrt[n]{u_n}\to\ell\lt1$, on glisse un $\rho$ entre $\ell$ et $1$ : à partir d'un rang $\sqrt[n]{u_n}\leqslant\rho$, donc $u_n\leqslant\rho^n$. Pour $\ell=1$, on cherche trois suites qui font trois choses.`,
    copie: R`<p><b>Cas $\ell\lt1$.</b> ${ph("posons","Posons")} $\rho=\frac{\ell+1}2$ ($\ell\lt\rho\lt1$). À partir d'un rang, $\sqrt[n]{u_n}\leqslant\rho$, donc $u_n\leqslant\rho^n$ ($x\mapsto x^n$ croissante sur $\mathbb R_+$). ${ph("donc","Donc")} $0\lt u_n\leqslant\rho^n\to0$.</p><p><b>Cas $\ell>1$.</b> Avec $1\lt\rho\lt\ell$, à partir d'un rang $u_n\geqslant\rho^n\to+\infty$.</p><p><b>Cas $\ell=1$.</b> $u_n=n$, $u_n=1$ et $u_n=\frac1n$ ont toutes $\sqrt[n]{u_n}\to1$ (car $\sqrt[n]n=\mathrm e^{\frac{\ln n}n}\to1$) mais tendent vers $+\infty$, $1$, $0$.</p><div class="sbox">$$\ell\lt1\Rightarrow u_n\to0,\quad\ell>1\Rightarrow u_n\to+\infty,\quad\ell=1\ :\ \text{rien.}$$</div>`,
    tete: R`<p><b>Piège :</b> conclure pour $\ell=1$. Le critère est muet : il faut des contre-exemples, pas une affirmation.</p><p><b>Premier réflexe :</b> prendre $\varepsilon$ très petit. Ici on choisit $\rho$ <i>strictement</i> entre $\ell$ et $1$ pour rester du bon côté de $1$.</p>`,
    trou: { q: R`Pourquoi peut-on élever $\sqrt[n]{u_n}\leqslant\rho$ à la puissance $n$ sans changer le sens ?`, c: [R`$x\mapsto x^n$ est croissante sur $[0,+\infty[$`, R`$\rho$ est entier`, R`$n$ est pair`, R`$u_n\leqslant1$`], ok: 0, why: R`Les deux membres sont positifs et $x\mapsto x^n$ est strictement croissante sur $[0,+\infty[$ : elle conserve l'ordre.` },
    bareme: { sur: 4, l: [[1, R`Cas $\ell\lt1$ avec $\rho$ intermédiaire et $u_n\leqslant\rho^n$`], [1, R`Cas $\ell>1$ avec $u_n\geqslant\rho^n$`], [1, R`Trois suites pour $\ell=1$`], [1, R`Limite $\sqrt[n]n\to1$ justifiée`]] },
    jury: [
      { e: R`Écrire $\sqrt[n]n\to1$ sans justification.`, p: R`Il faut $\mathrm e^{\ln n/n}$ et les croissances comparées : point perdu.` },
      { e: R`Conclure « $u_n\to1$ » pour $\ell=1$.`, p: R`Faux : $u_n=n$ le contredit. Deux points perdus.` }
    ] },
  { declic: R`Même méthode que pour la racine : on intercale $\rho$ entre $\ell$ et $1$, puis on obtient $u_{n+1}\leqslant\rho u_n$ à partir d'un rang, d'où $u_n\leqslant u_N\rho^{n-N}$ par récurrence.`,
    copie: R`<p><b>Cas $\ell\lt1$.</b> ${ph("posons","Posons")} $\rho=\frac{\ell+1}2$. Pour $n\geqslant N$, $\frac{u_{n+1}}{u_n}\leqslant\rho$, donc $u_{n+1}\leqslant\rho u_n$. Par récurrence $u_n\leqslant\rho^{n-N}u_N$, d'où $0\lt u_n\leqslant u_N\rho^{-N}\rho^n\to0$.</p><p><b>Cas $\ell>1$.</b> Avec $\rho=\frac{\ell+1}2>1$, $u_{n+1}\geqslant\rho u_n$ à partir de $N$, donc $u_n\geqslant\rho^{n-N}u_N\to+\infty$.</p><p><b>Cas $\ell=1$.</b> $u_n=n$, $1$, $\frac1n$ ont toutes un rapport qui tend vers $1$ mais tendent vers $+\infty$, $1$, $0$.</p><div class="sbox">$$\ell\lt1\Rightarrow u_n\to0,\quad\ell>1\Rightarrow u_n\to+\infty,\quad\ell=1\ :\ \text{rien.}$$</div>`,
    tete: R`<p><b>Piège :</b> appliquer le critère quand le rapport ne converge pas. Il faut que $\frac{u_{n+1}}{u_n}$ ait une limite.</p><p><b>Premier réflexe :</b> pour $\ell=1$, prendre une seule suite qui marche. Un critère qui ne conclut pas se montre avec <i>plusieurs</i> comportements.</p>`,
    trou: { q: R`Dans le cas $\ell>1$, quelle inégalité obtient-on pour $n\geqslant N$ ?`, c: [R`$u_n\geqslant\rho^{n-N}u_N$`, R`$u_n\leqslant\rho^{n-N}u_N$`, R`$u_n\geqslant\rho^{n}$`, R`$u_n=\rho^{n-N}u_N$`], ok: 0, why: R`Le rapport dépasse $\rho$ à partir de $N$ : on multiplie par $\rho$ à chaque pas, ce qui donne une minoration (et non une égalité) par une suite géométrique de raison $\rho>1$.` },
    bareme: { sur: 4, l: [[1, R`Cas $\ell\lt1$ avec $u_{n+1}\leqslant\rho u_n$`], [1, R`Récurrence puis limite nulle`], [1, R`Cas $\ell>1$ avec minoration géométrique`], [1, R`Trois suites pour $\ell=1$`]] },
    jury: [
      { e: R`Ne pas justifier la récurrence $u_n\leqslant\rho^{n-N}u_N$.`, p: R`Initialisation et hérédité attendues : point perdu.` },
      { e: R`Dire que le critère conclut pour $\ell=1$.`, p: R`Contre-exemples ignorés : deux points perdus.` }
    ] },
  { declic: R`Quatre suites avec factorielles ou puissances : on calcule le rapport $\frac{u_{n+1}}{u_n}$ en simplifiant ($(n+1)!=(n+1)n!$), puis on compare sa limite à $1$.`,
    copie: R`<p>${ph("posons","Posons")} $u_n=\frac{n!}{n^n}$. Alors $\frac{u_{n+1}}{u_n}=\frac{(n+1)\,n^n}{(n+1)^{n+1}}=\big(1+\frac1n\big)^{-n}\to\mathrm e^{-1}\lt1$ : $u_n\to0$.</p><p>$u_n=\frac{a^n}{n!}$ : rapport $\frac a{n+1}\to0\lt1$, donc $u_n\to0$.</p><p>$u_n=\frac{n^k}{2^n}$ : rapport $\big(1+\frac1n\big)^k\frac12\to\frac12\lt1$, donc $u_n\to0$.</p><p>$u_n=\frac{(2n)!}{(n!)^2}$ : rapport $\frac{(2n+2)(2n+1)}{(n+1)^2}=\frac{4n+2}{n+1}\to4>1$, donc $u_n\to+\infty$.</p><div class="sbox">$$\frac{n!}{n^n}\to0,\ \frac{a^n}{n!}\to0,\ \frac{n^k}{2^n}\to0,\ \frac{(2n)!}{(n!)^2}\to+\infty.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $\big(1+\frac1n\big)^{-n}\to1$ « car $1+\frac1n\to1$ ». Forme indéterminée $1^\infty$ : la limite est $\mathrm e^{-1}$.</p><p><b>Premier réflexe :</b> développer les factorielles. Mieux vaut simplifier le quotient $\frac{(n+1)!}{n!}=n+1$.</p>`,
    trou: { q: R`Pour $u_n=\frac{(2n)!}{(n!)^2}$, quelle est la limite du rapport $\frac{u_{n+1}}{u_n}$ ?`, c: [R`$4$`, R`$2$`, R`$0$`, R`$1$`], ok: 0, why: R`Le rapport vaut $\frac{(2n+2)(2n+1)}{(n+1)^2}=\frac{4n+2}{n+1}\to4$, strictement supérieur à $1$ : la suite tend vers $+\infty$.` },
    bareme: { sur: 4, l: [[1, R`Rapport de $\frac{n!}{n^n}$ et limite $\mathrm e^{-1}$`], [1, R`Rapports de $\frac{a^n}{n!}$ et $\frac{n^k}{2^n}$`], [1, R`Rapport de $\frac{(2n)!}{(n!)^2}$ et limite $4$`], [1, R`Conclusion de chaque suite par le critère`]] },
    jury: [
      { e: R`Conclure pour $\big(1+\frac1n\big)^{-n}$ sans citer la limite $\mathrm e$.`, p: R`Limite non justifiée : point perdu.` },
      { e: R`Appliquer le critère sans calculer explicitement le rapport.`, p: R`Il faut le calcul : un point par suite mal traitée.` }
    ] }
], [
  { q: R`Que vaut $\lim q^n$ lorsque $|q|\lt1$ ?`, c: [R`$0$`, R`$1$`, R`$+\infty$`, R`la limite n'existe pas`], ok: 0, r: "su-usuel" },
  { q: R`Que vaut $\lim\big(1+\frac1n\big)^n$ ?`, c: [R`$\mathrm e$`, R`$1$`, R`$0$`, R`$+\infty$`], ok: 0, r: "su-usuel" },
  { q: R`Pour $a,b\geqslant0$ et $n\geqslant1$ : $a\leqslant b\iff$ ?`, c: [R`$a^n\leqslant b^n$`, R`$a^n\geqslant b^n$`, R`$a^n=b^n$`, R`$na\leqslant b$`], ok: 0, r: "su-ineg" }
]);

})();

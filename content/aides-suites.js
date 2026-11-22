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

/* ---------- su-03 · Calculs de limites ---------- */
A("su-03", [
  { declic: R`Numérateur et dénominateur n'ont pas de limite finie : on factorise le terme qui domine, ici $3^n$, pour faire apparaître une suite géométrique de raison de module $\lt1$.`,
    copie: R`<p>${ph("comme","Comme")} $3^n\neq0$, on divise haut et bas par $3^n$ : $u_n=\dfrac{1-\big(\frac{-2}3\big)^n}{1+\big(\frac{-2}3\big)^n}$.</p><p>${ph("or","Or")} $\big|\frac{-2}3\big|=\frac23\lt1$, donc $\big(\frac{-2}3\big)^n\to0$.</p><p>${ph("donc","Donc")} le numérateur tend vers $1$ et le dénominateur vers $1\neq0$ : par quotient, $u_n\to1$.</p><div class="sbox">$$\lim\frac{3^n-(-2)^n}{3^n+(-2)^n}=1.$$</div>`,
    tete: R`<p><b>Piège :</b> dire « $(-2)^n$ n'a pas de limite, donc $u_n$ non plus ». La divergence d'un terme ne se transmet pas : il est négligeable devant $3^n$.</p><p><b>Premier réflexe :</b> prendre la limite haut et bas séparément. Elles n'existent pas : on factorise.</p>`,
    trou: { q: R`Par quel terme divise-t-on haut et bas ?`, c: [R`$3^n$, le terme de plus grand module`, R`$(-2)^n$, car il alterne`, R`$n$`, R`$3^n+(-2)^n$`], ok: 0, why: R`On factorise le terme qui domine : $|3^n|>|(-2)^n|$. Diviser par $(-2)^n$ ferait apparaître $\big(\frac3{-2}\big)^n$, qui diverge.` },
    bareme: { sur: 3, l: [[1, R`Division par $3^n$ et nouvelle écriture de $u_n$`], [1, R`$\big(\frac{-2}3\big)^n\to0$ car $\big|\frac{-2}3\big|\lt1$`], [1, R`Quotient de limites avec dénominateur $\neq0$ et conclusion`]] },
    jury: [
      { e: R`Écrire $\frac{3^n}{3^n}=\frac{(-2)^n}{3^n}$ au lieu de factoriser.`, p: R`Calcul faux : le résultat est invalide, zéro.` },
      { e: R`Ne pas justifier $\big(\frac{-2}3\big)^n\to0$.`, p: R`Citer $|q|\lt1$ : point perdu.` }
    ] },
  { declic: R`Une différence de racines : on multiplie par la quantité conjuguée pour obtenir $\frac{A-B}{\sqrt A+\sqrt B}$. Le quotient est ensuite divisé par $n$.`,
    copie: R`<p>${ph("posons","Posons")} $S_n=\sqrt{n^2+n+1}+\sqrt{n^2-n+1}>0$. Alors $u_n=\dfrac{(n^2+n+1)-(n^2-n+1)}{S_n}=\dfrac{2n}{S_n}$.</p><p>En divisant par $n>0$ : $u_n=\dfrac2{\sqrt{1+\frac1n+\frac1{n^2}}+\sqrt{1-\frac1n+\frac1{n^2}}}\to\dfrac2{1+1}=1$ (continuité de la racine).</p><p>Pour $v_n=\dfrac{n-\sqrt{n^2+1}}{n+\sqrt{n^2-1}}$, on divise par $n$ : $v_n=\dfrac{1-\sqrt{1+1/n^2}}{1+\sqrt{1-1/n^2}}$, de numérateur $\to0$ et dénominateur $\to2\neq0$ : $v_n\to0$.</p><div class="sbox">$$u_n\to1,\qquad v_n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> « $\infty-\infty=0$ » : c'est une forme indéterminée. La limite vaut ici $1$.</p><p><b>Premier réflexe :</b> factoriser $n$ sous la racine sans multiplier par le conjugué. On trouve $n(\sqrt{\cdot}-\sqrt{\cdot})$, qui reste indéterminé.</p>`,
    trou: { q: R`Par quoi multiplie-t-on $\sqrt A-\sqrt B$ pour supprimer les racines ?`, c: [R`$\sqrt A+\sqrt B$`, R`$\sqrt A-\sqrt B$`, R`$A+B$`, R`$A-B$`], ok: 0, why: R`$(\sqrt A-\sqrt B)(\sqrt A+\sqrt B)=A-B$ : le produit n'a plus de racine. Multiplier par $\sqrt A-\sqrt B$ donne $(\sqrt A-\sqrt B)^2$, encore avec des racines.` },
    bareme: { sur: 4, l: [[1, R`Quantité conjuguée et positivité de $S_n$`], [1, R`Simplification en $\frac{2n}{S_n}$`], [1, R`Limite de $u_n$ par division par $n$`], [1, R`Limite de $v_n$ (numérateur et dénominateur)`]] },
    jury: [
      { e: R`Multiplier par le conjugué sans diviser aussi le dénominateur.`, p: R`L'égalité est fausse : deux points perdus.` },
      { e: R`Oublier de vérifier que les radicandes sont positifs.`, p: R`Racine non définie : point perdu.` }
    ] },
  { declic: R`On ne connaît pas la limite d'une somme de $n$ termes qui grandit : il faut une formule explicite. Pour $\sum k$, on additionne la somme à elle-même avec l'indice retourné.`,
    copie: R`<p>${ph("posons","Posons")} $S=\sum_{k=1}^nk$. Par le changement d'indice $k\mapsto n+1-k$, $S=\sum_{k=1}^n(n+1-k)$.</p><p>En additionnant : $2S=\sum_{k=1}^n(n+1)=n(n+1)$, donc $S=\frac{n(n+1)}2$.</p><p>${ph("donc","Donc")} $u_n=\dfrac{n(n+1)}{2n^2}=\dfrac12+\dfrac1{2n}\to\dfrac12$.</p><div class="sbox">$$\lim\frac1{n^2}\sum_{k=1}^nk=\frac12.$$</div>`,
    tete: R`<p><b>Piège :</b> penser « somme de $n$ termes qui valent chacun $\leqslant n$, donc $\leqslant n^2$ ». Cela borne mais ne donne pas la limite exacte.</p><p><b>Premier réflexe :</b> écrire $\frac1{n^2}\times n\times\frac n2$ sans justification. La formule de la somme doit être démontrée ici.</p>`,
    trou: { q: R`Combien vaut $\sum_{k=1}^n(n+1)$ ?`, c: [R`$n(n+1)$`, R`$n+1$`, R`$(n+1)^2$`, R`$\frac{n(n+1)}2$`], ok: 0, why: R`C'est une somme de $n$ termes tous égaux à $n+1$ : elle vaut $n\times(n+1)$. Le résultat $\frac{n(n+1)}2$ est celui de $S$, pas de $2S$.` },
    bareme: { sur: 3, l: [[1, R`Formule $S=\frac{n(n+1)}2$ démontrée`], [1, R`Simplification $u_n=\frac12+\frac1{2n}$`], [1, R`Limite et conclusion`]] },
    jury: [
      { e: R`Utiliser la formule sans la démontrer ni la citer comme connue.`, p: R`Résultat non justifié : point perdu.` },
      { e: R`Se tromper de facteur : écrire $S=n(n+1)$.`, p: R`Limite fausse ($1$ au lieu de $\frac12$) : deux points perdus.` }
    ] },
  { declic: R`Une puissance dépendant de $n$ : on passe à l'exponentielle, $x^y=\mathrm e^{y\ln x}$, puis on reconnaît $\frac{\ln(1+x)}x\to1$ ou $\frac{\ln n}n\to0$.`,
    copie: R`<p>Pour $a=0$ : $(1+0)^n=1=\mathrm e^0$. Pour $a\neq0$ : $\big(1+\frac an\big)^n=\exp\big(n\ln(1+\frac an)\big)$.</p><p>${ph("posons","Posons")} $x_n=\frac an\to0$, $x_n\neq0$. Alors $n\ln(1+x_n)=a\,\dfrac{\ln(1+x_n)}{x_n}\to a\times1=a$.</p><p>${ph("donc","Donc")} par continuité de l'exponentielle, $\big(1+\frac an\big)^n\to\mathrm e^a$.</p><p>Enfin $\sqrt[n]{n^2}=\exp\big(\frac{2\ln n}n\big)\to\mathrm e^0=1$ car $\frac{\ln n}n\to0$.</p><div class="sbox">$$\Big(1+\frac an\Big)^n\to\mathrm e^a,\qquad\sqrt[n]{n^2}\to1.$$</div>`,
    tete: R`<p><b>Piège :</b> « $1+\frac1n\to1$ donc la puissance $n$-ième tend vers $1^n=1$ ». Forme indéterminée $1^\infty$ : la limite est $\mathrm e$.</p><p><b>Premier réflexe :</b> citer $\big(1+\frac1n\big)^n\to\mathrm e$ comme connu. Ici on le redémontre à partir de $\frac{\ln(1+x)}x\to1$.</p>`,
    trou: { q: R`Comment écrit-on $\big(1+\frac an\big)^n$ pour pouvoir passer à la limite ?`, c: [R`$\exp\big(n\ln(1+\frac an)\big)$`, R`$\exp\big(\ln(1+\frac an)\big)^n$ sans transformation`, R`$\big(1+a\big)^{n/n}$`, R`$\ln\big(n(1+\frac an)\big)$`], ok: 0, why: R`$x^y=\mathrm e^{y\ln x}$ pour $x>0$ : l'exposant $n$ devient un facteur devant le logarithme, et on peut utiliser $\frac{\ln(1+x)}x\to1$.` },
    bareme: { sur: 4, l: [[1, R`Passage à l'exponentielle (avec $1+\frac an>0$)`], [1, R`$n\ln(1+\frac an)\to a$ par $\frac{\ln(1+x)}x\to1$`], [1, R`Continuité de $\exp$ : limite $\mathrm e^a$`], [1, R`Limite de $\sqrt[n]{n^2}$ par $\frac{\ln n}n\to0$`]] },
    jury: [
      { e: R`Conclure $1^\infty=1$.`, p: R`Forme indéterminée traitée comme une limite : deux points perdus.` },
      { e: R`Oublier de vérifier la positivité de $1+\frac an$.`, p: R`Le logarithme n'est pas défini : point perdu.` }
    ] },
  { declic: R`Deux limites avec exposant dépendant de $n$ : on passe au logarithme. Pour $u_n$, on isole le $\frac1n$ de $\sin\frac1n$ ; pour $v_n$, on met $\frac{n-1}{n+1}$ sous la forme $1+x_n$.`,
    copie: R`<p>$\sin\frac1n>0$ donc $u_n=\exp\big(\frac1n\ln\sin\frac1n\big)$. Or $\sin\frac1n=\frac1n\cdot n\sin\frac1n$, donc $\frac1n\ln\sin\frac1n=-\frac{\ln n}n+\frac1n\ln\big(n\sin\frac1n\big)$.</p><p>${ph("comme","Comme")} $\frac{\ln n}n\to0$ et $n\sin\frac1n\to1$ (donc $\ln(\cdot)\to0$), l'exposant tend vers $0$ : $u_n\to1$.</p><p>Pour $v_n$ : $\frac{n-1}{n+1}=1+x_n$ avec $x_n=-\frac2{n+1}\to0$, et $n\ln(1+x_n)=-\frac{2n}{n+1}\cdot\frac{\ln(1+x_n)}{x_n}\to-2$.</p><p>${ph("donc","Donc")} $v_n\to\mathrm e^{-2}$.</p><div class="sbox">$$\Big(\sin\frac1n\Big)^{1/n}\to1,\qquad\Big(\frac{n-1}{n+1}\Big)^n\to\mathrm e^{-2}.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $\big(\frac{n-1}{n+1}\big)^n\to1$ car le rapport tend vers $1$. Forme $1^\infty$ : la réponse est $\mathrm e^{-2}$.</p><p><b>Premier réflexe :</b> écrire $\sin\frac1n\sim\frac1n$ puis passer à la puissance $\frac1n$. On n'a pas le droit d'élever un équivalent à une puissance qui dépend de $n$.</p>`,
    trou: { q: R`Par quoi remplace-t-on $\ln\sin\frac1n$ pour isoler les limites usuelles ?`, c: [R`$-\ln n+\ln\big(n\sin\frac1n\big)$`, R`$-\ln n$ seulement`, R`$\ln\frac1n\cdot\sin n$`, R`$\ln(n)+\ln\big(\sin\frac1n\big)$`], ok: 0, why: R`$\sin\frac1n=\frac1n\cdot\big(n\sin\frac1n\big)$ puis le logarithme d'un produit donne une somme. On garde le facteur $n\sin\frac1n\to1$ pour ne pas perdre d'information.` },
    bareme: { sur: 4, l: [[1, R`$u_n$ en exponentielle (avec $\sin\frac1n>0$)`], [1, R`Décomposition du logarithme et limite de l'exposant : $u_n\to1$`], [1, R`$v_n$ : $1+x_n$ et limite de l'exposant $-2$`], [1, R`Conclusion $v_n\to\mathrm e^{-2}$`]] },
    jury: [
      { e: R`Élever un équivalent à une puissance dépendant de $n$.`, p: R`Opération interdite : deux points perdus.` },
      { e: R`Oublier de justifier $\sin\frac1n>0$.`, p: R`Logarithme non défini : point perdu.` }
    ] },
  { declic: R`Trois suites avec $\sin n$, $(-1)^n$ et $n!$ : aucune limite directe. On les encadre par des suites simples (signe borné, produit de facteurs dans $]0,1]$) et on utilise les gendarmes.`,
    copie: R`<p>$|\sin n|\leqslant1$ et $n+(-1)^{n+1}\geqslant n-1>0$ ($n\geqslant2$), donc $|u_n|\leqslant\frac1{n-1}\to0$ : $u_n\to0$.</p><p>$\frac{n!}{n^n}=\frac1n\cdot\frac2n\cdots\frac nn$ avec tous les facteurs $\frac kn\in\,]0,1]$ : $0\lt v_n\leqslant\frac1n\to0$.</p><p>${ph("comme","Comme")} $-1\leqslant(-1)^n\leqslant1$, $\frac{n-1}{n+1}\leqslant w_n\leqslant\frac{n+1}{n-1}$ ; les deux bornes tendent vers $1$ : $w_n\to1$.</p><div class="sbox">$$u_n\to0,\qquad v_n\to0,\qquad w_n\to1.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire « $\sin n$ n'a pas de limite donc $u_n$ non plus ». Divisé par $n$, le sinus est écrasé.</p><p><b>Premier réflexe :</b> écrire $w_n\sim\frac nn=1$ sans justifier. Ici on encadre, ce qui est plus sûr quand $(-1)^n$ oscille.</p>`,
    trou: { q: R`Pourquoi $|u_n|\leqslant\frac1{n-1}$ ?`, c: [R`$|\sin n|\leqslant1$ et le dénominateur est $\geqslant n-1>0$`, R`$|\sin n|\leqslant n$`, R`$\sin n\to0$`, R`$(-1)^{n+1}=0$`], ok: 0, why: R`On majore le numérateur par $1$ et on minore le dénominateur par $n-1$ (qui est positif) : le quotient est majoré par $\frac1{n-1}$.` },
    bareme: { sur: 4, l: [[1, R`$u_n$ : majoration $|u_n|\leqslant\frac1{n-1}$ justifiée`], [1, R`$v_n$ : écriture en produit de facteurs $\leqslant1$`], [1, R`$w_n$ : encadrement par $\frac{n\mp1}{n\pm1}$`], [1, R`Gendarmes appliqués trois fois avec limites des bornes`]] },
    jury: [
      { e: R`Majorer un quotient sans minorer le dénominateur.`, p: R`Inégalité fausse : deux points perdus.` },
      { e: R`Ne pas préciser que le dénominateur est positif.`, p: R`Le sens de l'inégalité n'est pas justifié : point perdu.` }
    ] },
  { declic: R`$\frac{\mathrm e^n}{n^n}=\big(\frac{\mathrm e}n\big)^n$ : une puissance dont la base est $\lt1$ à partir d'un rang. Pour $\sqrt[n]{2+(-1)^n}$, on encadre l'intérieur entre $1$ et $3$, puis on prend la racine $n$-ième.`,
    copie: R`<p>$u_n=\big(\frac{\mathrm e}n\big)^n$. Pour $n\geqslant3$, $0\lt\frac{\mathrm e}n\leqslant\frac{\mathrm e}3\lt1$ (car $\mathrm e\lt3$), et $x\mapsto x^n$ est croissante sur $\mathbb R_+$ : $0\lt u_n\leqslant\big(\frac{\mathrm e}3\big)^n\to0$.</p><p>${ph("comme","Comme")} $1\leqslant2+(-1)^n\leqslant3$ et $x\mapsto x^{1/n}$ est croissante, $1\leqslant v_n\leqslant3^{1/n}=\mathrm e^{\frac{\ln3}n}\to1$.</p><p>${ph("donc","Donc")} par gendarmes $u_n\to0$ et $v_n\to1$.</p><div class="sbox">$$\frac{\mathrm e^n}{n^n}\to0,\qquad\sqrt[n]{2+(-1)^n}\to1.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que $\sqrt[n]{2+(-1)^n}$ n'a pas de limite parce que $(-1)^n$ oscille. L'oscillation est écrasée par la racine $n$-ième.</p><p><b>Premier réflexe :</b> prendre une base $\leqslant\mathrm e/n$ sans la comparer à $1$. Il faut un seuil explicite : $\frac{\mathrm e}3\lt1$.</p>`,
    trou: { q: R`À partir de quel rang a-t-on $\frac{\mathrm e}n\lt1$ ?`, c: [R`$n\geqslant3$`, R`$n\geqslant1$`, R`$n\geqslant2$`, R`jamais`], ok: 0, why: R`$\mathrm e\approx2{,}718\lt3$ donc $\frac{\mathrm e}3\lt1$ ; pour $n=2$, $\frac{\mathrm e}2\approx1{,}36>1$ et ne convient pas.` },
    bareme: { sur: 4, l: [[1, R`$u_n=(\mathrm e/n)^n$ avec seuil $n\geqslant3$`], [1, R`Majoration $u_n\leqslant(\mathrm e/3)^n$ par croissance de $x^n$`], [1, R`Encadrement $1\leqslant v_n\leqslant3^{1/n}$`], [1, R`$3^{1/n}=\mathrm e^{\ln3/n}\to1$ et gendarmes`]] },
    jury: [
      { e: R`Dire « $\frac{\mathrm e}n\lt1$ donc $u_n\to0$ » sans suite géométrique de raison fixe.`, p: R`La base dépend de $n$ : majoration non justifiée, deux points perdus.` }
    ] },
  { declic: R`On calcule trois limites avec la même expression $(1-\frac1n)^m$ en variant l'ordre. À chaque fois on fixe un des deux paramètres et on fait tendre l'autre.`,
    copie: R`<p><b>1.</b> Pour $m$ fixé, $1-\frac1n\to1$ donc $\big(1-\frac1n\big)^m\to1^m=1$ ; puis $\lim_m1=1$.</p><p><b>2.</b> Pour $n$ fixé ($n\geqslant2$), $q=1-\frac1n\in\,]0,1[$ donc $q^m\to0$ ; puis $\lim_n0=0$.</p><p><b>3.</b> Par la question 4 avec $a=-1$, $\big(1-\frac1n\big)^n\to\mathrm e^{-1}$.</p><p>${ph("ainsi","Ainsi")} $1\neq0\neq\mathrm e^{-1}$ : on ne peut pas échanger les limites.</p><div class="sbox">$$1\ \neq\ 0\ \neq\ \mathrm e^{-1}.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que « $n,m\to+\infty$ » a un sens unique. Selon que l'on fixe $m$, fixe $n$ ou prend $m=n$, la limite change.</p><p><b>Premier réflexe :</b> écrire $\lim\lim=\lim\lim$ par principe. C'est faux ici.</p>`,
    trou: { q: R`Dans la deuxième limite, pourquoi $q^m\to0$ quand $m\to+\infty$ ?`, c: [R`$q=1-\frac1n\in\,]0,1[$ est fixe quand $n$ est fixé`, R`$q$ tend vers $0$`, R`$m$ est fixe`, R`$q>1$`], ok: 0, why: R`Dans cette limite, $n$ est fixé donc $q$ est une constante de $]0,1[$ : une suite géométrique de raison $q\in\,]0,1[$ tend vers $0$.` },
    bareme: { sur: 3, l: [[1, R`Première limite : $1^m=1$ avec $m$ fixé`], [1, R`Deuxième limite : $q^m\to0$ avec $n$ fixé`], [1, R`Troisième limite $\mathrm e^{-1}$ et conclusion de non-échange`]] },
    jury: [
      { e: R`Confondre quelle variable est fixée.`, p: R`Limite fausse : deux points perdus.` }
    ] }
], [
  { q: R`Pour $x>0$ et $y\in\mathbb R$, que vaut $x^y$ ?`, c: [R`$\mathrm e^{y\ln x}$`, R`$\mathrm e^{x\ln y}$`, R`$y\ln x$`, R`$\ln(x^y)$`], ok: 0, r: "su-usuel" },
  { q: R`Que vaut $\lim\dfrac{\ln(1+x)}x$ quand $x\to0$ ?`, c: [R`$1$`, R`$0$`, R`$+\infty$`, R`$\mathrm e$`], ok: 0, r: "su-usuel" },
  { q: R`Que dit le théorème des gendarmes ?`, c: [R`$a_n\leqslant x_n\leqslant b_n$ et $a_n,b_n\to\ell$ donnent $x_n\to\ell$`, R`$x_n\leqslant b_n$ et $b_n\to\ell$ donnent $x_n\to\ell$`, R`$x_n$ bornée donne $x_n$ convergente`, R`$a_n\leqslant b_n$ donne $\lim a_n\lt\lim b_n$`], ok: 0, r: "su-ineg" }
]);

/* ---------- su-04 · Sommes à encadrer et inverses de coefficients binomiaux ---------- */
A("su-04", [
  { declic: R`Sommes de $n$ termes qui divergent : on minore chaque terme par le plus petit d'entre eux. Une somme de $n$ termes tous $\geqslant c$ vaut au moins $nc$.`,
    copie: R`<p>Pour $k\geqslant1$, $\sqrt k\geqslant1$. En sommant $n$ inégalités : $S_n\geqslant n\to+\infty$. ${ph("donc","Donc")} $S_n\to+\infty$.</p><p>Pour $1\leqslant k\leqslant n$, $\sqrt k\leqslant\sqrt n$, donc $\frac1{\sqrt k}\geqslant\frac1{\sqrt n}$ (inverse décroissante). ${ph("donc","Donc")} $T_n\geqslant n\cdot\frac1{\sqrt n}=\sqrt n\to+\infty$.</p><div class="sbox">$$\sum_{k=1}^n\sqrt k\to+\infty,\qquad\sum_{k=1}^n\frac1{\sqrt k}\to+\infty.$$</div>`,
    tete: R`<p><b>Piège :</b> penser que $\frac1{\sqrt k}\to0$ donc la somme est bornée. Non : une somme de termes qui tendent vers $0$ peut diverger.</p><p><b>Premier réflexe :</b> chercher une formule explicite pour $\sum\frac1{\sqrt k}$. Il n'y en a pas : on minore chaque terme par le plus petit, $\frac1{\sqrt n}$.</p>`,
    trou: { q: R`Combien vaut $\sum_{k=1}^n\frac1{\sqrt n}$ ?`, c: [R`$\sqrt n$`, R`$\frac1{\sqrt n}$`, R`$n$`, R`$1$`], ok: 0, why: R`$n$ termes égaux à $\frac1{\sqrt n}$ : la somme vaut $n\cdot\frac1{\sqrt n}=\sqrt n$.` },
    bareme: { sur: 4, l: [[1, R`$\sqrt k\geqslant1$ et $S_n\geqslant n$`], [1, R`Divergence de $S_n$ par minoration`], [1, R`$\frac1{\sqrt k}\geqslant\frac1{\sqrt n}$ avec justification (inverse décroissante)`], [1, R`$T_n\geqslant\sqrt n\to+\infty$`]] },
    jury: [
      { e: R`Écrire $T_n\geqslant\frac1{\sqrt n}$ (un seul terme).`, p: R`Minoration trop faible, ne diverge pas : deux points perdus.` },
      { e: R`Oublier de dire que la fonction inverse est décroissante.`, p: R`Sens de l'inégalité non justifié : point perdu.` }
    ] },
  { declic: R`Une somme de $n$ termes positifs est majorée par $n$ fois le plus grand terme. On encadre chaque terme, puis on gendarme.`,
    copie: R`<p>Pour $1\leqslant k\leqslant n$ : $n^2+1\leqslant n^2+k^2\leqslant2n^2$, donc $\frac1{2n^2}\leqslant\frac1{n^2+k^2}\leqslant\frac1{n^2+1}$.</p><p>${ph("donc","Donc")} en sommant $n$ termes : $\frac1{2n}\leqslant S_n\leqslant\frac n{n^2+1}$. Les deux bornes tendent vers $0$ : $S_n\to0$.</p><p>Pour $n+1\leqslant k\leqslant2n$, $k\geqslant n$ donc $\frac1{k^2}\leqslant\frac1{n^2}$ ; il y a $n$ termes : $0\leqslant T_n\leqslant\frac1n\to0$.</p><div class="sbox">$$S_n\to0,\qquad T_n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> mal compter les termes : $\sum_{k=n+1}^{2n}$ en a $n$, pas $n+1$.</p><p><b>Premier réflexe :</b> dire « chaque terme tend vers $0$ donc la somme aussi ». Faux en général : la somme a un nombre de termes qui grandit.</p>`,
    trou: { q: R`Combien de termes comporte $\sum_{k=n+1}^{2n}$ ?`, c: [R`$n$`, R`$n+1$`, R`$2n$`, R`$n-1$`], ok: 0, why: R`$2n-(n+1)+1=n$ : le nombre de termes est la différence des bornes plus $1$.` },
    bareme: { sur: 4, l: [[1, R`Encadrement de $\frac1{n^2+k^2}$ par deux termes indépendants de $k$`], [1, R`Somme de $n$ termes et gendarmes pour $S_n$`], [1, R`Majoration de $\frac1{k^2}$ par $\frac1{n^2}$ sur $[n+1,2n]$`], [1, R`Nombre de termes $=n$ et gendarmes pour $T_n$`]] },
    jury: [
      { e: R`Se tromper sur le nombre de termes de la somme.`, p: R`Borne fausse : deux points perdus.` },
      { e: R`Passer à la limite terme à terme.`, p: R`Le nombre de termes n'est pas constant : zéro à la question.` }
    ] },
  { declic: R`Chaque terme est coincé entre sa valeur pour $k=n$ et pour $k=1$ : la fonction inverse est décroissante. Les deux bornes de la somme ont la même limite.`,
    copie: R`<p>Pour $1\leqslant k\leqslant n$ : $n^2+1\leqslant n^2+k\leqslant n^2+n$, donc $\frac n{n^2+n}\leqslant\frac n{n^2+k}\leqslant\frac n{n^2+1}$.</p><p>En sommant $n$ termes : $\frac{n^2}{n^2+n}\leqslant S_n\leqslant\frac{n^2}{n^2+1}$, bornes qui tendent vers $1$. ${ph("donc","Donc")} $S_n\to1$.</p><p>De même $\frac n{\sqrt{n^2+n}}\leqslant T_n\leqslant\frac n{\sqrt{n^2+1}}$ (racine croissante puis inverse décroissante), bornes tendant vers $1$ : $T_n\to1$.</p><div class="sbox">$$S_n\to1,\qquad T_n\to1.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $\frac n{n^2+k}\to0$ donc la somme tend vers $0$. Chaque terme est petit, mais il y en a $n$.</p><p><b>Premier réflexe :</b> reconnaître une somme de Riemann. Ici un encadrement direct est plus rapide et évite les intégrales.</p>`,
    trou: { q: R`Pourquoi $\frac n{n^2+k}\leqslant\frac n{n^2+1}$ pour $k\geqslant1$ ?`, c: [R`la fonction inverse est décroissante et $n^2+k\geqslant n^2+1$`, R`la fonction inverse est croissante`, R`$k\leqslant n$`, R`$n\geqslant1$`], ok: 0, why: R`Si $a\geqslant b>0$ alors $\frac1a\leqslant\frac1b$ : agrandir le dénominateur diminue la fraction.` },
    bareme: { sur: 4, l: [[1, R`Encadrement de chaque terme de $S_n$`], [1, R`Somme de $n$ termes et limites des bornes pour $S_n$`], [1, R`Encadrement de $T_n$ (racine puis inverse)`], [1, R`Conclusion par gendarmes pour $T_n$`]] },
    jury: [
      { e: R`Oublier de multiplier la borne par $n$ lors de la somme.`, p: R`Bornes fausses (tendent vers $0$) : deux points perdus.` },
      { e: R`Ne pas justifier le sens des inégalités.`, p: R`Décroissance de l'inverse à citer : point perdu.` }
    ] },
  { declic: R`Le terme $k=n$ vaut $n!$, il domine tout le reste. On le met de côté et on majore les autres par une quantité de l'ordre de $(n-1)!$.`,
    copie: R`<p>${ph("posons","Isolons")} le terme $k=n$ : $S_n=n!+\sum_{k=0}^{n-1}(-1)^{n-k}k!\geqslant n!-\sum_{k=0}^{n-1}k!$.</p><p>Pour $n\geqslant2$ : $\sum_{k=0}^{n-2}k!\leqslant(n-1)(n-2)!=(n-1)!$ (factorielle croissante, $n-1$ termes), donc $\sum_{k=0}^{n-1}k!\leqslant2(n-1)!$.</p><p>${ph("donc","Donc")} $S_n\geqslant n(n-1)!-2(n-1)!=(n-2)(n-1)!\geqslant n-2\to+\infty$.</p><div class="sbox">$$\sum_{k=0}^n(-1)^{n-k}k!\to+\infty.$$</div>`,
    tete: R`<p><b>Piège :</b> croire qu'une somme alternée oscille. Ici les termes croissent si vite que le dernier écrase la somme des précédents.</p><p><b>Premier réflexe :</b> regrouper deux à deux. C'est inutile : on minore par le terme dominant moins tous les autres.</p>`,
    trou: { q: R`Pourquoi $\sum_{k=0}^{n-2}k!\leqslant(n-1)(n-2)!$ ?`, c: [R`$n-1$ termes, chacun au plus $(n-2)!$`, R`$k!\leqslant k$`, R`$n-2$ termes égaux à $(n-1)!$`, R`la factorielle est décroissante`], ok: 0, why: R`Les indices $0,\dots,n-2$ sont au nombre de $n-1$, et $k!\leqslant(n-2)!$ car la factorielle est croissante.` },
    bareme: { sur: 4, l: [[1, R`Isolation du terme $n!$ et minoration par $n!-\sum k!$`], [1, R`Majoration de $\sum_{k=0}^{n-2}k!$ par $(n-1)!$`], [1, R`$S_n\geqslant(n-2)(n-1)!$`], [1, R`$(n-1)!\geqslant1$, minoration par $n-2$ et conclusion`]] },
    jury: [
      { e: R`Majorer chaque $k!$ par $(n-1)!$ : $n$ termes donne $n(n-1)!=n!$.`, p: R`La minoration devient nulle : inutile, deux points perdus.` },
      { e: R`Ne pas tenir compte des signes $(-1)^{n-k}$.`, p: R`La minoration par $-k!$ doit être justifiée : point perdu.` }
    ] },
  { declic: R`$\binom nk$ est le plus petit aux extrémités et le plus grand au milieu. Après avoir isolé $k=0,1,n-1,n$, tous les autres coefficients sont $\geqslant\binom n2$.`,
    copie: R`<p>Pour $n\geqslant4$ : $u_n=1+1+\frac1n+\frac1n+R_n=2+\frac2n+R_n$ avec $R_n=\sum_{k=2}^{n-2}\frac1{\binom nk}$.</p><p>Le rapport $\frac{\binom n{k+1}}{\binom nk}=\frac{n-k}{k+1}\geqslant1$ si $k\leqslant\frac{n-1}2$ : $\binom nk$ croît jusqu'au milieu, puis décroît par symétrie $\binom nk=\binom n{n-k}$. ${ph("donc","Donc")} $\binom nk\geqslant\binom n2=\frac{n(n-1)}2$ pour $2\leqslant k\leqslant n-2$.</p><p>${ph("ainsi","Ainsi")} $0\leqslant R_n\leqslant(n-3)\frac2{n(n-1)}\leqslant\frac2n\to0$ et $u_n\to2$.</p><div class="sbox">$$\sum_{k=0}^n\frac1{\binom nk}\to2.$$</div>`,
    tete: R`<p><b>Piège :</b> minorer $\binom nk$ par $n$ pour tout $2\leqslant k\leqslant n-2$ : la borne est trop faible, $R_n\leqslant\frac{n-3}n$ ne tend pas vers $0$.</p><p><b>Premier réflexe :</b> utiliser la formule du binôme. Elle donne $\sum\binom nk$, pas la somme des inverses.</p>`,
    trou: { q: R`Quelle est la valeur de $\binom nk$ minimale pour $2\leqslant k\leqslant n-2$ ?`, c: [R`$\binom n2$`, R`$\binom n1=n$`, R`$\binom n{n/2}$`, R`$1$`], ok: 0, why: R`La suite $k\mapsto\binom nk$ est croissante jusqu'au milieu puis décroissante symétriquement : sur $[2,n-2]$ le minimum est atteint aux bords, $\binom n2=\binom n{n-2}$.` },
    bareme: { sur: 5, l: [[1, R`Isolement de $k=0,1,n-1,n$ : $u_n=2+\frac2n+R_n$`], [1, R`Rapport $\frac{n-k}{k+1}$ de coefficients consécutifs`], [1, R`Monotonie et symétrie : $\binom nk\geqslant\binom n2$`], [1, R`Majoration de $R_n$ par $\frac2n$`], [1, R`Limite de $u_n$`]] },
    jury: [
      { e: R`Affirmer $\binom nk\geqslant\binom n2$ sans justifier la monotonie.`, p: R`Étape clé non démontrée : deux points perdus.` },
      { e: R`Compter $n-1$ termes dans $\sum_{k=2}^{n-2}$.`, p: R`Il y en a $n-3$ : majoration à corriger, point perdu.` }
    ] },
  { declic: R`Une relation entre deux termes consécutifs d'une suite de coefficients binomiaux : on écrit les deux coefficients en factorielles et on simplifie le rapport.`,
    copie: R`<p>$\binom{n+p+2}{n+2}=\dfrac{(n+p+2)!}{(n+2)!\,p!}$ et $\binom{n+p+1}{n+1}=\dfrac{(n+p+1)!}{(n+1)!\,p!}$.</p><p>${ph("comme","Comme")} $(n+p+2)!=(n+p+2)(n+p+1)!$ et $(n+2)!=(n+2)(n+1)!$, on a $\binom{n+p+2}{n+2}=\frac{n+p+2}{n+2}\binom{n+p+1}{n+1}$.</p><p>${ph("donc","Donc")} en passant aux inverses (coefficients non nuls) : $u_{n+2}=\frac{n+2}{n+p+2}u_{n+1}$.</p><div class="sbox">$$(n+p+2)\,u_{n+2}=(n+2)\,u_{n+1}.$$</div>`,
    tete: R`<p><b>Piège :</b> se tromper de sens en inversant : $u$ est l'inverse du coefficient, pas le coefficient.</p><p><b>Premier réflexe :</b> utiliser la formule de Pascal. Ici un seul rapport de factorielles suffit.</p>`,
    trou: { q: R`Que vaut $\dfrac{(n+p+2)!}{(n+p+1)!}$ ?`, c: [R`$n+p+2$`, R`$n+p+1$`, R`$(n+p+2)!$`, R`$1$`], ok: 0, why: R`$(m+1)!=(m+1)\,m!$ avec $m=n+p+1$ : le quotient vaut $m+1=n+p+2$.` },
    bareme: { sur: 3, l: [[1, R`Écriture des deux coefficients en factorielles`], [1, R`Rapport simplifié : $\frac{n+p+2}{n+2}$`], [1, R`Passage aux inverses et conclusion`]] },
    jury: [
      { e: R`Confondre $u_n$ et le coefficient.`, p: R`La relation obtenue est inversée : deux points perdus.` }
    ] },
  { declic: R`Une formule démontrée pour tout $n$ : récurrence. Au rang $n+1$, on ajoute $u_{n+1}$ et on utilise la relation de la question précédente pour retomber sur la forme voulue.`,
    copie: R`<p><b>Initialisation.</b> $S_1=u_1=\frac1{p+1}$ et $\frac1{p-1}\big(1-(p+2)u_2\big)=\frac1{p-1}\big(1-\frac2{p+1}\big)=\frac1{p+1}$ ✓.</p><p><b>Hérédité.</b> ${ph("posons","Supposons")} la formule au rang $n$. Alors $S_{n+1}=S_n+u_{n+1}=\frac{1-(n+p+1)u_{n+1}+(p-1)u_{n+1}}{p-1}=\frac{1-(n+2)u_{n+1}}{p-1}$.</p><p>${ph("or","Or")} $(n+2)u_{n+1}=(n+p+2)u_{n+2}$ par la question 6. ${ph("donc","Donc")} $S_{n+1}=\frac1{p-1}\big(1-(n+p+2)u_{n+2}\big)$.</p><div class="sbox">$$S_n=\frac1{p-1}\big(1-(n+p+1)u_{n+1}\big).$$</div>`,
    tete: R`<p><b>Piège :</b> oublier $p\geqslant2$ : sans cela $p-1$ peut être nul et la formule n'a pas de sens.</p><p><b>Premier réflexe :</b> calculer $S_n$ en développant. Il n'y a pas de formule directe : la récurrence est la bonne méthode.</p>`,
    trou: { q: R`Dans l'hérédité, quelle relation permet de remplacer $(n+2)u_{n+1}$ ?`, c: [R`$(n+2)u_{n+1}=(n+p+2)u_{n+2}$`, R`$u_{n+1}=u_n$`, R`$(n+2)u_{n+1}=(n+p+1)u_{n+2}$`, R`$u_{n+2}=u_{n+1}+u_n$`], ok: 0, why: R`C'est la relation de la question 6. Les autres égalités ne sont pas vraies : on les vérifie avec $p=2$, $n=0$.` },
    bareme: { sur: 4, l: [[1, R`Initialisation $n=1$ calculée`], [1, R`Hypothèse de récurrence énoncée`], [1, R`Calcul de $S_n+u_{n+1}$`], [1, R`Utilisation de la question 6 et conclusion`]] },
    jury: [
      { e: R`Hérédité sans énoncer l'hypothèse.`, p: R`Raisonnement par récurrence incomplet : point perdu.` },
      { e: R`Ne pas faire l'initialisation.`, p: R`Récurrence non démontrée : deux points perdus.` }
    ] },
  { declic: R`On simplifie $(n+p)u_n$ en une fraction de factorielles, on majore par une quantité qui tend vers $0$, puis la formule de la question 7 donne la limite.`,
    copie: R`<p>$v_n=(n+p)\dfrac{n!\,p!}{(n+p)!}=\dfrac{n!\,p!}{(n+p-1)!}$.</p><p>${ph("or","Or")} $\frac{(n+p-1)!}{n!}=(n+1)\cdots(n+p-1)\geqslant n+1$ (produit de $p-1\geqslant1$ entiers $\geqslant1$, dont un est $\geqslant n+1$). ${ph("donc","Donc")} $0\leqslant v_n\leqslant\frac{p!}{n+1}\to0$.</p><p>${ph("ainsi","Ainsi")} $v_{n+1}=(n+p+1)u_{n+1}\to0$ et $S_n=\frac{1-v_{n+1}}{p-1}\to\frac1{p-1}$.</p><div class="sbox">$$v_n\to0,\qquad\sum_{k=1}^n\binom{k+p}k^{-1}\to\frac1{p-1}.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que $(n+p)u_n\to p$ car $n+p\sim n$. Le facteur $u_n$ tend vers $0$ à une vitesse polynomiale : il compense $n+p$.</p><p><b>Premier réflexe :</b> prendre un équivalent de $\binom{n+p}n\sim\frac{n^p}{p!}$. Valable, mais il faut le démontrer ; ici la majoration directe est plus rapide.</p>`,
    trou: { q: R`Pourquoi $(n+1)\cdots(n+p-1)\geqslant n+1$ ?`, c: [R`produit d'entiers $\geqslant1$ dont l'un vaut $n+1$ (car $p-1\geqslant1$)`, R`parce que $p\geqslant n$`, R`parce que $n!\geqslant n+1$`, R`parce que le produit vaut $p!$`], ok: 0, why: R`Il y a au moins un facteur (car $p\geqslant2$), qui vaut $n+1$ ; les autres facteurs sont $\geqslant1$ : le produit est au moins $n+1$.` },
    bareme: { sur: 4, l: [[1, R`Simplification de $v_n$ en $\frac{n!\,p!}{(n+p-1)!}$`], [1, R`Majoration $v_n\leqslant\frac{p!}{n+1}$`], [1, R`Gendarmes : $v_n\to0$`], [1, R`Limite de la somme via $v_{n+1}$ et la question 7`]] },
    jury: [
      { e: R`Conclure $v_n\to0$ sans majoration.`, p: R`Résultat non justifié : deux points perdus.` },
      { e: R`Oublier de passer de $v_n$ à $v_{n+1}$.`, p: R`Il faut dire que $v_{n+1}$ est un terme d'une suite qui tend vers $0$ : point perdu.` }
    ] }
], [
  { q: R`Que vaut $(m+1)!$ en fonction de $m!$ ?`, c: [R`$(m+1)\,m!$`, R`$m!+1$`, R`$(m+1)+m!$`, R`$m\,(m!)$`], ok: 0, r: "su-usuel" },
  { q: R`Que vaut $\binom nk$ en fonction de $\binom n{n-k}$ ?`, c: [R`$\binom nk=\binom n{n-k}$`, R`$\binom nk=\binom n{k-n}$`, R`$\binom nk=1/\binom n{n-k}$`, R`$\binom nk=n-k$`], ok: 0, r: "su-usuel" },
  { q: R`Combien de termes comporte $\sum_{k=a}^bf(k)$ ($a\leqslant b$ entiers) ?`, c: [R`$b-a+1$`, R`$b-a$`, R`$b+a$`, R`$b$`], ok: 0, r: "su-tele" }
]);

/* ---------- su-05 · Sommes harmoniques et comparaison avec le logarithme ---------- */
A("su-05", [
  { declic: R`$H_n$ est croissante : pour montrer qu'elle diverge, il suffit de la minorer par une suite qui tend vers $+\infty$. Le paquet $\frac1{n+1}+\dots+\frac1{2n}$ contient $n$ termes, tous au moins $\frac1{2n}$.`,
    copie: R`<p>$H_{2n}-H_n=\sum_{k=n+1}^{2n}\frac1k$ : $n$ termes, tous $\geqslant\frac1{2n}$ (inverse décroissante). ${ph("donc","Donc")} $H_{2n}-H_n\geqslant n\cdot\frac1{2n}=\frac12$.</p><p>Par récurrence, $H_{2^m}\geqslant1+\frac m2$ : vrai pour $m=0$ ($H_1=1$) ; si vrai au rang $m$, $H_{2^{m+1}}\geqslant H_{2^m}+\frac12\geqslant1+\frac{m+1}2$.</p><p>${ph("comme","Comme")} $(H_n)$ est croissante, pour $A\in\mathbb R$ et $m$ tel que $1+\frac m2\geqslant A$, on a $H_n\geqslant A$ dès que $n\geqslant2^m$ : $H_n\to+\infty$.</p><div class="sbox">$$H_{2n}-H_n\geqslant\tfrac12,\qquad H_n\to+\infty.$$</div>`,
    tete: R`<p><b>Piège :</b> « $\frac1k\to0$ donc la série converge ». C'est faux : la série harmonique diverge.</p><p><b>Premier réflexe :</b> chercher une comparaison avec une intégrale. C'est la question 4. Ici on cherche une minoration plus élémentaire, par paquets.</p>`,
    trou: { q: R`Combien de termes comporte $\sum_{k=n+1}^{2n}\frac1k$ et par quoi minore-t-on chacun ?`, c: [R`$n$ termes, chacun $\geqslant\frac1{2n}$`, R`$n+1$ termes, chacun $\geqslant\frac1n$`, R`$2n$ termes, chacun $\geqslant\frac1{2n}$`, R`$n$ termes, chacun $\geqslant\frac1n$`], ok: 0, why: R`Il y a $2n-n=n$ termes ; pour $k\leqslant2n$ on a $\frac1k\geqslant\frac1{2n}$ (et non $\frac1n$, qui est plus grand que le terme).` },
    bareme: { sur: 4, l: [[1, R`$H_{2n}-H_n\geqslant\frac12$ avec nombre de termes`], [1, R`Récurrence $H_{2^m}\geqslant1+\frac m2$`], [1, R`Monotonie de $(H_n)$`], [1, R`Passage à $+\infty$ avec $A$ et le rang $2^m$`]] },
    jury: [
      { e: R`Affirmer « $H_n$ croissante non majorée donc $+\infty$ » sans prouver la non-majoration.`, p: R`C'est la question : zéro.` },
      { e: R`Se tromper dans le nombre de termes.`, p: R`La borne $\frac12$ devient fausse : deux points perdus.` }
    ] },
  { declic: R`Si $n(u_{n+1}-u_n)\to1$, alors à partir d'un rang $u_{n+1}-u_n\geqslant\frac1{2n}$. On somme (télescopage) : $u_n$ se minore par la série harmonique, qui diverge.`,
    copie: R`<p>${ph("comme","Comme")} $n(u_{n+1}-u_n)\to1>\frac12$, il existe $N\geqslant1$ tel que pour $n\geqslant N$, $u_{n+1}-u_n\geqslant\frac1{2n}$.</p><p>Pour $n>N$, par télescopage : $u_n-u_N=\sum_{k=N}^{n-1}(u_{k+1}-u_k)\geqslant\frac12\big(H_{n-1}-H_{N-1}\big)$.</p><p>${ph("or","Or")} $H_{N-1}$ est une constante et $H_{n-1}\to+\infty$ (question 1). ${ph("donc","Donc")} $u_n\to+\infty$.</p><div class="sbox">$$n(u_{n+1}-u_n)\to1\implies u_n\to+\infty.$$</div>`,
    tete: R`<p><b>Piège :</b> « $u_{n+1}-u_n\to0$ donc $(u_n)$ converge ». Faux : $u_n=\ln n$ a une différence qui tend vers $0$ et diverge.</p><p><b>Premier réflexe :</b> citer le théorème de la limite monotone. Il faudrait la majoration, ce qui est faux : la suite n'est pas majorée.</p>`,
    trou: { q: R`Pourquoi peut-on choisir $c=\frac12$ comme seuil ?`, c: [R`la limite $1$ est $>\frac12$, donc à partir d'un rang $n(u_{n+1}-u_n)>\frac12$`, R`parce que $\frac12\lt0$`, R`parce que $n(u_{n+1}-u_n)=1$ pour tout $n$`, R`parce que $u_n$ est croissante`], ok: 0, why: R`La définition de la limite avec $\varepsilon=\frac12$ donne $n(u_{n+1}-u_n)\in]\frac12,\frac32[$ à partir d'un rang.` },
    bareme: { sur: 3, l: [[1, R`Rang $N$ avec $u_{n+1}-u_n\geqslant\frac1{2n}$ justifié`], [1, R`Sommation télescopique et minoration par $H_{n-1}-H_{N-1}$`], [1, R`Limite $+\infty$ avec $H_n\to+\infty$`]] },
    jury: [
      { e: R`Ne pas préciser le rang $N$ à partir duquel l'inégalité est valable.`, p: R`Inégalité fausse pour les petits $n$ : point perdu.` }
    ] },
  { declic: R`Une inégalité du type $\ln(1+t)\leqslant t$ : on étudie $f(t)=t-\ln(1+t)$ et on montre qu'elle est positive avec son minimum en $0$. La seconde inégalité se déduit de la première en changeant de variable.`,
    copie: R`<p>${ph("posons","Posons")} $f(t)=t-\ln(1+t)$ sur $]-1,+\infty[$. $f'(t)=\frac t{1+t}$ est du signe de $t$ : $f$ décroît sur $]-1,0]$, croît sur $[0,+\infty[$. ${ph("donc","Donc")} $f\geqslant f(0)=0$ : $\ln(1+t)\leqslant t$.</p><p>Soit $t>-1$ et $s=-\frac t{1+t}$. Alors $1+s=\frac1{1+t}>0$, donc $s>-1$ et $\ln(1+s)\leqslant s$, c'est-à-dire $-\ln(1+t)\leqslant-\frac t{1+t}$.</p><p>${ph("ainsi","Ainsi")} $\ln(1+t)\geqslant\frac t{1+t}$.</p><div class="sbox">$$\forall t>-1,\quad\frac t{t+1}\leqslant\ln(1+t)\leqslant t.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier le domaine $t>-1$ : le logarithme n'existe pas pour $t\leqslant-1$.</p><p><b>Premier réflexe :</b> étudier directement $\ln(1+t)-\frac t{1+t}$. Possible, mais le changement de variable $s=-\frac t{1+t}$ évite un second calcul de dérivée.</p>`,
    trou: { q: R`Quel est le signe de $f'(t)=\frac t{1+t}$ sur $]-1,+\infty[$ ?`, c: [R`celui de $t$, car $1+t>0$`, R`toujours positif`, R`toujours négatif`, R`celui de $1+t$`], ok: 0, why: R`Le dénominateur $1+t$ est strictement positif sur le domaine : le signe est celui du numérateur $t$.` },
    bareme: { sur: 4, l: [[1, R`Dérivée de $f$ et signe sur $]-1,+\infty[$`], [1, R`Minimum en $0$ et première inégalité`], [1, R`Changement de variable $s=-\frac t{1+t}$ avec $s>-1$`], [1, R`Seconde inégalité obtenue en multipliant par $-1$`]] },
    jury: [
      { e: R`Oublier de vérifier que $s>-1$.`, p: R`Application illégitime de la première inégalité : point perdu.` },
      { e: R`Ne pas inverser le sens en multipliant par $-1$.`, p: R`Inégalité fausse : deux points perdus.` }
    ] },
  { declic: R`Les deux inégalités du logarithme, avec $t=\frac1k$ puis $t=\frac1{k-1}$, donnent des différences $\ln(k+1)-\ln k$ qui se télescopent en sommant.`,
    copie: R`<p>Avec $t=\frac1k$ : $\ln(k+1)-\ln k=\ln(1+\frac1k)\leqslant\frac1k$. En sommant pour $k=1,\dots,n$ : $\ln(n+1)\leqslant H_n$.</p><p>Avec $t=\frac1{k-1}$ ($k\geqslant2$) : $\frac1k=\frac{t}{t+1}\leqslant\ln(1+t)=\ln k-\ln(k-1)$. En sommant pour $k=2,\dots,n$ : $H_n-1\leqslant\ln n$.</p><p>${ph("donc","Donc")} pour $n\geqslant2$ : $\frac{\ln(n+1)}{\ln n}\leqslant\frac{H_n}{\ln n}\leqslant1+\frac1{\ln n}$. Les deux bornes tendent vers $1$ : $H_n\sim\ln n$.</p><div class="sbox">$$\ln(n+1)\leqslant H_n\leqslant1+\ln n,\qquad H_n\sim\ln n.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier le terme $k=1$ dans la majoration : l'inégalité de gauche ne s'applique pas à $t=\frac1{k-1}$ pour $k=1$, donc on somme à partir de $2$.</p><p><b>Premier réflexe :</b> comparer avec $\int_1^n\frac{\mathrm dx}x$. Fonctionne aussi, mais ici on exploite l'inégalité qui vient d'être démontrée.</p>`,
    trou: { q: R`Pourquoi $\sum_{k=1}^n\big(\ln(k+1)-\ln k\big)=\ln(n+1)$ ?`, c: [R`somme télescopique : $\ln1=0$ reste avec $\ln(n+1)$`, R`les termes sont tous égaux`, R`$\ln$ est linéaire`, R`parce que $n\to+\infty$`], ok: 0, why: R`Chaque $\ln k$ intervient deux fois, avec signes opposés, sauf $\ln(n+1)$ et $-\ln1=0$.` },
    bareme: { sur: 4, l: [[1, R`Minoration $H_n\geqslant\ln(n+1)$ avec $t=\frac1k$`], [1, R`Majoration $H_n-1\leqslant\ln n$ avec $t=\frac1{k-1}$`], [1, R`Division par $\ln n>0$ pour $n\geqslant2$`], [1, R`Gendarmes : limite du quotient $=1$`]] },
    jury: [
      { e: R`Sommer à partir de $k=1$ dans la majoration.`, p: R`Division par $0$ en $k=1$ : erreur grave, deux points perdus.` },
      { e: R`Diviser par $\ln n$ sans préciser $n\geqslant2$.`, p: R`$\ln1=0$ : point perdu.` }
    ] },
  { declic: R`Deux entiers consécutifs donnent $u_{n+1}-u_n=\frac1{n+1}-\ln(1+\frac1n)$ : l'inégalité de gauche du logarithme donne le signe. Une suite décroissante et minorée converge.`,
    copie: R`<p>$u_{n+1}-u_n=\frac1{n+1}-\ln(1+\frac1n)$. Avec $t=\frac1n$, $\ln(1+\frac1n)\geqslant\frac{1/n}{1/n+1}=\frac1{n+1}$. ${ph("donc","Donc")} $u_{n+1}-u_n\leqslant0$ : $(u_n)$ est décroissante.</p><p>Par la question 4, $H_n\geqslant\ln(n+1)\geqslant\ln n$, donc $u_n\geqslant0$.</p><p>${ph("ainsi","Ainsi")}, décroissante et minorée, $(u_n)$ converge vers $\gamma\in[0,1]$ (car $u_n\leqslant u_1=1$).</p><div class="sbox">$$H_n=\ln n+\gamma+o(1),\qquad\gamma\in[0,1].$$</div>`,
    tete: R`<p><b>Piège :</b> penser que $u_n=H_n-\ln n$ tend vers $0$ car $H_n\sim\ln n$. L'équivalent ne dit rien sur la différence : elle converge ici vers une constante non nulle.</p><p><b>Premier réflexe :</b> montrer que la suite est de Cauchy. Le théorème de la limite monotone est plus direct.</p>`,
    trou: { q: R`Quelle inégalité donne le signe de $u_{n+1}-u_n$ ?`, c: [R`$\ln(1+t)\geqslant\frac t{t+1}$ avec $t=\frac1n$`, R`$\ln(1+t)\leqslant t$ avec $t=\frac1n$`, R`$H_n\leqslant1+\ln n$`, R`$\ln n\leqslant n$`], ok: 0, why: R`Il faut minorer $\ln(1+\frac1n)$ par $\frac1{n+1}$, ce qui est l'inégalité de gauche. L'inégalité de droite donnerait la majoration inverse.` },
    bareme: { sur: 3, l: [[1, R`Calcul de $u_{n+1}-u_n$ et signe grâce à la question 3`], [1, R`Minoration $u_n\geqslant0$`], [1, R`Théorème de la limite monotone et conclusion`]] },
    jury: [
      { e: R`Invoquer le théorème de la limite monotone sans les deux hypothèses.`, p: R`Il faut décroissante <i>et</i> minorée : point perdu.` },
      { e: R`Écrire « $H_n\sim\ln n$ donc $u_n\to0$ ».`, p: R`Erreur de cours : deux points perdus.` }
    ] },
  { declic: R`Une somme de $\frac1{\sqrt k}$ : on encadre chaque terme par une différence $2(\sqrt{k+1}-\sqrt k)$ via la quantité conjuguée, puis on télescope. La suite $S_n-2\sqrt n$ est décroissante et minorée.`,
    copie: R`<p>$2\big(\sqrt{n+1}-\sqrt n\big)=\frac2{\sqrt{n+1}+\sqrt n}$ et $2\sqrt n\leqslant\sqrt{n+1}+\sqrt n\leqslant2\sqrt{n+1}$, d'où $\frac1{\sqrt{n+1}}\leqslant2(\sqrt{n+1}-\sqrt n)\leqslant\frac1{\sqrt n}$.</p><p>${ph("donc","Donc")} $S_n\geqslant2(\sqrt{n+1}-1)\to+\infty$.</p><p>$v_n=S_n-2\sqrt n$ vérifie $v_{n+1}-v_n=\frac1{\sqrt{n+1}}-2(\sqrt{n+1}-\sqrt n)\leqslant0$ et $v_n\geqslant-2$ : $(v_n)$ converge vers $c$.</p><p>${ph("ainsi","Ainsi")} $\frac{S_n}{2\sqrt n}=1+\frac{v_n}{2\sqrt n}\to1$ : $S_n\sim2\sqrt n$.</p><div class="sbox">$$S_n\to+\infty,\quad S_n-2\sqrt n\to c,\quad S_n\sim2\sqrt n.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que $\frac1{\sqrt k}$ est « presque » $\frac1{\sqrt n}$. La somme grandit comme $2\sqrt n$, pas comme $\sqrt n$.</p><p><b>Premier réflexe :</b> comparer à $\int\frac{\mathrm dx}{\sqrt x}$. Ici l'encadrement par différences de racines est plus propre.</p>`,
    trou: { q: R`Par quoi multiplie-t-on $\sqrt{n+1}-\sqrt n$ pour obtenir $\frac1{\sqrt{n+1}+\sqrt n}$ ?`, c: [R`$\frac{\sqrt{n+1}+\sqrt n}{\sqrt{n+1}+\sqrt n}$`, R`$\frac{\sqrt{n+1}-\sqrt n}{\sqrt{n+1}-\sqrt n}$`, R`$\sqrt n$`, R`$n$`], ok: 0, why: R`On écrit $\sqrt{n+1}-\sqrt n=\frac{(n+1)-n}{\sqrt{n+1}+\sqrt n}=\frac1{\sqrt{n+1}+\sqrt n}$ : le produit du numérateur et du conjugué fait $1$.` },
    bareme: { sur: 4, l: [[1, R`Encadrement de $2(\sqrt{n+1}-\sqrt n)$`], [1, R`Divergence de $S_n$ par télescopage`], [1, R`$v_n=S_n-2\sqrt n$ décroissante et minorée`], [1, R`Équivalent $S_n\sim2\sqrt n$`]] },
    jury: [
      { e: R`Oublier de justifier que $(v_n)$ est bornée.`, p: R`Le passage au quotient n'est pas fondé : point perdu.` },
      { e: R`Se tromper de sens dans l'encadrement.`, p: R`Monotonie fausse : deux points perdus.` }
    ] }
], [
  { q: R`Que dit le théorème de la limite monotone ?`, c: [R`une suite décroissante et minorée converge`, R`une suite décroissante converge`, R`une suite bornée converge`, R`une suite minorée converge`], ok: 0, r: "su-mono" },
  { q: R`Que vaut $\sum_{k=a}^b(x_{k+1}-x_k)$ ?`, c: [R`$x_{b+1}-x_a$`, R`$x_b-x_a$`, R`$x_{b+1}+x_a$`, R`$(b-a)x_a$`], ok: 0, r: "su-tele" },
  { q: R`Pour $t>-1$, laquelle de ces inégalités est vraie ?`, c: [R`$\ln(1+t)\leqslant t$`, R`$\ln(1+t)\geqslant t$`, R`$\ln(1+t)\leqslant\frac t{1+t}$ pour $t>0$`, R`$\ln(1+t)\geqslant1+t$`], ok: 0, r: "su-ineg" }
]);

/* ---------- su-06 · Produits télescopiques, somme alternée et équation exponentielle ---------- */
A("su-06", [
  { declic: R`Un produit de cosinus d'angles qui se divisent par $2$ : on multiplie par $\sin\frac a{2^n}$ pour que $\sin x\cos x=\frac12\sin2x$ le télescope. On le démontre par récurrence.`,
    copie: R`<p>Montrons par récurrence $\sin\frac a{2^n}\,P_n=\frac{\sin a}{2^n}$. Pour $n=1$ : $\sin\frac a2\cos\frac a2=\frac12\sin a$ ✓.</p><p>Si c'est vrai au rang $n$ : $\sin\frac a{2^{n+1}}P_{n+1}=\sin\frac a{2^{n+1}}\cos\frac a{2^{n+1}}P_n=\frac12\sin\frac a{2^n}P_n=\frac{\sin a}{2^{n+1}}$.</p><p>Pour $a=0$ : $P_n=1\to1$. Pour $a\neq0$ et $n$ grand, $\sin\frac a{2^n}\neq0$ et $P_n=\frac{\sin a}a\cdot\frac{a/2^n}{\sin(a/2^n)}$.</p><p>${ph("donc","Donc")} $P_n\to\frac{\sin a}a$ car $\frac{\sin x_n}{x_n}\to1$ avec $x_n=\frac a{2^n}\to0$.</p><div class="sbox">$$\prod_{k=1}^n\cos\frac a{2^k}\to\frac{\sin a}a\ (a\neq0).$$</div>`,
    tete: R`<p><b>Piège :</b> diviser par $\sin\frac a{2^n}$ sans vérifier qu'il est non nul. Pour $a=0$ ou $a=2^n\pi k$, c'est impossible : on traite $a=0$ à part.</p><p><b>Premier réflexe :</b> prendre le logarithme du produit. Les cosinus peuvent être négatifs : le logarithme n'est pas défini en général.</p>`,
    trou: { q: R`Quelle formule fait le lien entre $\sin\frac a{2^{n+1}}\cos\frac a{2^{n+1}}$ et $\sin\frac a{2^n}$ ?`, c: [R`$\sin x\cos x=\frac12\sin2x$`, R`$\sin x\cos x=\sin2x$`, R`$\sin x\cos x=\cos2x$`, R`$\sin x+\cos x=\sin2x$`], ok: 0, why: R`C'est la formule de duplication $\sin2x=2\sin x\cos x$, avec $x=\frac a{2^{n+1}}$ et $2x=\frac a{2^n}$.` },
    bareme: { sur: 4, l: [[1, R`Initialisation de l'identité`], [1, R`Hérédité avec $\sin x\cos x=\frac12\sin2x$`], [1, R`Cas $a=0$ traité séparément`], [1, R`Cas $a\neq0$ : limite $\frac{\sin a}a$`]] },
    jury: [
      { e: R`Diviser par $\sin\frac a{2^n}$ sans vérifier qu'il est non nul.`, p: R`Division potentiellement par $0$ : point perdu.` },
      { e: R`Oublier le cas $a=0$.`, p: R`Cas à part non traité : point perdu.` }
    ] },
  { declic: R`Le produit $\prod(1+z^{2^k})$ rappelle $(1-w)(1+w)=1-w^2$ : en multipliant par $1-z$, chaque facteur remplace $1-w$ par $1-w^2$, d'où un télescopage.`,
    copie: R`<p>Récurrence : $(1-z)Q_n=1-z^{2^{n+1}}$. Pour $n=0$ : $(1-z)(1+z)=1-z^2$ ✓. Hérédité : $(1-z)Q_{n+1}=\big(1-z^{2^{n+1}}\big)\big(1+z^{2^{n+1}}\big)=1-z^{2^{n+2}}$.</p><p>${ph("comme","Comme")} $|z|\lt1$, $z\neq1$, donc $Q_n=\frac{1-z^{2^{n+1}}}{1-z}$.</p><p>${ph("or","Or")} $2^{n+1}\geqslant n+1$ donc $|z^{2^{n+1}}|\leqslant|z|^{n+1}\to0$. ${ph("donc","Donc")} $Q_n\to\frac1{1-z}$, soit $2$ pour $z=\frac12$.</p><div class="sbox">$$\prod_{k=0}^n\big(1+z^{2^k}\big)\to\frac1{1-z}.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier de vérifier $z\neq1$ avant de diviser par $1-z$. Ici $|z|\lt1$ garantit $z\neq1$.</p><p><b>Premier réflexe :</b> développer le produit. Il donne $\sum_{j=0}^{2^{n+1}-1}z^j$ (écriture binaire) mais il faut le démontrer ; la méthode télescopique est plus courte.</p>`,
    trou: { q: R`Pourquoi $|z|^{2^{n+1}}\leqslant|z|^{n+1}$ ?`, c: [R`$0\leqslant|z|\lt1$ et $2^{n+1}\geqslant n+1$`, R`$|z|>1$`, R`$2^{n+1}\lt n+1$`, R`$z$ est réel`], ok: 0, why: R`Pour $0\leqslant r\lt1$, la fonction $m\mapsto r^m$ est décroissante : un exposant plus grand donne une valeur plus petite.` },
    bareme: { sur: 4, l: [[1, R`Initialisation $n=0$`], [1, R`Hérédité avec $(1-w)(1+w)=1-w^2$`], [1, R`Formule $Q_n=\frac{1-z^{2^{n+1}}}{1-z}$ avec $z\neq1$`], [1, R`Limite et cas $z=\frac12$`]] },
    jury: [
      { e: R`Écrire $z^{2^n}\to0$ sans justifier.`, p: R`Il faut un argument de croissance de l'exposant : point perdu.` },
      { e: R`Diviser par $1-z$ sans vérifier $z\neq1$.`, p: R`Division non justifiée : point perdu.` }
    ] },
  { declic: R`$\frac1p$ est encadré par deux aires sous la courbe de $\frac1x$ : à gauche de $p$ la fonction est plus grande, à droite plus petite. On somme et les logarithmes se télescopent.`,
    copie: R`<p>Sur $[p,p+1]$, $\frac1x\leqslant\frac1p$ donc $\int_p^{p+1}\frac{\mathrm dx}x\leqslant\frac1p$. Sur $[p-1,p]$, $\frac1x\geqslant\frac1p$ donc $\int_{p-1}^p\frac{\mathrm dx}x\geqslant\frac1p$.</p><p>${ph("posons","Posons")} $p=n+k$ ($1\leqslant k\leqslant n$) : $\ln(n+k+1)-\ln(n+k)\leqslant\frac1{n+k}\leqslant\ln(n+k)-\ln(n+k-1)$.</p><p>En sommant (télescopage) : $\ln(2n+1)-\ln(n+1)\leqslant S_n\leqslant\ln2n-\ln n=\ln2$.</p><p>${ph("donc","Donc")} par gendarmes ($\frac{2n+1}{n+1}\to2$) : $S_n\to\ln2$.</p><div class="sbox">$$\ln\frac{2n+1}{n+1}\leqslant S_n\leqslant\ln2,\qquad S_n\to\ln2.$$</div>`,
    tete: R`<p><b>Piège :</b> confondre le sens des deux encadrements : sur $[p-1,p]$ la fonction est au-dessus de $\frac1p$, sur $[p,p+1]$ au-dessous.</p><p><b>Premier réflexe :</b> reconnaître une somme de Riemann. Valable, mais ici on demande un encadrement explicite.</p>`,
    trou: { q: R`Sur $[p-1,p]$, quel est le sens de $\frac1x$ par rapport à $\frac1p$ ?`, c: [R`$\frac1x\geqslant\frac1p$ car $x\leqslant p$`, R`$\frac1x\leqslant\frac1p$`, R`$\frac1x=\frac1p$`, R`on ne peut pas comparer`], ok: 0, why: R`Si $0\lt x\leqslant p$ alors $\frac1x\geqslant\frac1p$ (inverse décroissante).` },
    bareme: { sur: 4, l: [[1, R`Intégrale à droite : $\int_p^{p+1}\leqslant\frac1p$`], [1, R`Intégrale à gauche : $\int_{p-1}^p\geqslant\frac1p$`], [1, R`Sommation télescopique et encadrement de $S_n$`], [1, R`Gendarmes : $S_n\to\ln2$`]] },
    jury: [
      { e: R`Écrire l'intégrale sans préciser le sens de $\frac1x$ par rapport à $\frac1p$.`, p: R`Inégalité non justifiée : point perdu.` },
      { e: R`Se tromper de bornes dans le télescopage.`, p: R`Résultat faux ($\ln2$ non obtenu) : deux points perdus.` }
    ] },
  { declic: R`Une somme alternée jusqu'à $2n$ se réécrit : on retire deux fois les termes pairs de la somme harmonique. On retrouve $H_{2n}-H_n=S_n$. Pour une suite, on traite pairs et impairs.`,
    copie: R`<p>Les termes d'indice pair valent $-\frac1k$ : $S'_{2n}=H_{2n}-2\sum_{j=1}^n\frac1{2j}=H_{2n}-H_n=\sum_{j=1}^n\frac1{n+j}=S_n$.</p><p>${ph("donc","Donc")} $S'_{2n}\to\ln2$ (question 3). De plus $S'_{2n+1}=S'_{2n}+\frac1{2n+1}\to\ln2$.</p><p>${ph("comme","Comme")} les suites extraites des indices pairs et impairs ont la même limite, $S'_n\to\ln2$.</p><div class="sbox">$$S'_{2n}=S_n,\qquad\sum_{k=1}^n\frac{(-1)^{k-1}}k\to\ln2.$$</div>`,
    tete: R`<p><b>Piège :</b> croire qu'une somme alternée tend vers $0$ car les termes alternent. Elle tend vers $\ln2$.</p><p><b>Premier réflexe :</b> invoquer le critère des séries alternées pour l'existence de la limite. Il ne donne pas sa valeur : ici le lien avec $S_n$ la calcule.</p>`,
    trou: { q: R`Combien vaut $2\sum_{j=1}^n\frac1{2j}$ ?`, c: [R`$H_n$`, R`$H_{2n}$`, R`$\frac{H_n}2$`, R`$2H_n$`], ok: 0, why: R`$2\cdot\frac1{2j}=\frac1j$, donc la somme vaut $\sum_{j=1}^n\frac1j=H_n$.` },
    bareme: { sur: 4, l: [[1, R`$S'_{2n}=H_{2n}-2\sum\frac1{2j}$`], [1, R`$S'_{2n}=S_n$ par changement d'indice`], [1, R`Limite de la suite des indices impairs`], [1, R`Pairs et impairs de même limite : conclusion`]] },
    jury: [
      { e: R`Conclure avec la seule suite des indices pairs.`, p: R`Les impairs ne sont pas traités : deux points perdus.` }
    ] },
  { declic: R`Deux suites dont la somme tend vers $0$ et dont $\mathrm e^u+\mathrm e^v$ tend vers $2$ : on symétrise avec la somme et la demi-différence, ce qui fait apparaître $\mathrm{ch}$. La minoration $\mathrm{ch}\,x\geqslant1+\frac{x^2}2$ donne alors $w_n\to0$.`,
    copie: R`<p>${ph("posons","Posons")} $\varepsilon_n=u_n+v_n\to0$ et $w_n=\frac{u_n-v_n}2$. Alors $u_n=\frac{\varepsilon_n}2+w_n$, $v_n=\frac{\varepsilon_n}2-w_n$, donc $\mathrm e^{u_n}+\mathrm e^{v_n}=2\mathrm e^{\varepsilon_n/2}\mathrm{ch}\,w_n$.</p><p>${ph("donc","Donc")} $\mathrm{ch}\,w_n\to\frac2{2\mathrm e^0}=1$.</p><p>Minoration : $g(x)=\mathrm{ch}\,x-1-\frac{x^2}2$ a pour dérivées $g'=\mathrm{sh}\,x-x$ et $g''=\mathrm{ch}\,x-1\geqslant0$ ; $g'$ croissante nulle en $0$, donc $g\geqslant g(0)=0$.</p><p>${ph("ainsi","Ainsi")} $0\leqslant w_n^2\leqslant2(\mathrm{ch}\,w_n-1)\to0$, $w_n\to0$, puis $u_n\to0$ et $v_n\to0$.</p><div class="sbox">$$u_n\to0,\qquad v_n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> penser que $\mathrm e^{u_n}+\mathrm e^{v_n}\to2$ et $u_n+v_n\to0$ suffisent « par symétrie ». Il faut contrôler $u_n-v_n$, et $\mathrm{ch}$ est pair : le signe de $w_n$ ne compte pas.</p><p><b>Premier réflexe :</b> raisonner comme au début de la khôlle avec $A_n=\mathrm e^{u_n/2}$. Ici le produit $\mathrm e^{u_n+v_n}$ n'est pas connu directement.</p>`,
    trou: { q: R`Que vaut $\mathrm e^{u_n}+\mathrm e^{v_n}$ en fonction de $\varepsilon_n$ et $w_n$ ?`, c: [R`$2\,\mathrm e^{\varepsilon_n/2}\,\mathrm{ch}\,w_n$`, R`$2\,\mathrm e^{\varepsilon_n}\,\mathrm{ch}\,w_n$`, R`$\mathrm e^{\varepsilon_n/2}\,\mathrm{sh}\,w_n$`, R`$\mathrm e^{\varepsilon_n}+\mathrm{ch}\,w_n$`], ok: 0, why: R`On factorise $\mathrm e^{\varepsilon_n/2}$ : $\mathrm e^{\varepsilon_n/2}(\mathrm e^{w_n}+\mathrm e^{-w_n})=2\mathrm e^{\varepsilon_n/2}\mathrm{ch}\,w_n$.` },
    bareme: { sur: 5, l: [[1, R`Symétrisation $u_n=\frac{\varepsilon_n}2+w_n$ et identité avec $\mathrm{ch}$`], [1, R`Limite $\mathrm{ch}\,w_n\to1$`], [1, R`Minoration $\mathrm{ch}\,x\geqslant1+\frac{x^2}2$ démontrée`], [1, R`$w_n^2\to0$ puis $w_n\to0$`], [1, R`Conclusion pour $u_n$ et $v_n$`]] },
    jury: [
      { e: R`Admettre $\mathrm{ch}\,x\geqslant1+\frac{x^2}2$ sans preuve.`, p: R`Inégalité clé non démontrée : deux points perdus.` },
      { e: R`Oublier que $\mathrm e^{\varepsilon_n/2}\to1$ dans le quotient.`, p: R`La limite de $\mathrm{ch}\,w_n$ n'est pas justifiée : point perdu.` }
    ] }
], [
  { q: R`Que vaut $\sin2x$ ?`, c: [R`$2\sin x\cos x$`, R`$\sin x\cos x$`, R`$2\sin x+2\cos x$`, R`$\sin^2x-\cos^2x$`], ok: 0, r: "su-usuel" },
  { q: R`Que vaut $\lim_{x\to0}\frac{\sin x}x$ ?`, c: [R`$1$`, R`$0$`, R`$\frac12$`, R`n'existe pas`], ok: 0, r: "su-usuel" },
  { q: R`Que vaut $\mathrm{ch}\,x$ ?`, c: [R`$\frac{\mathrm e^x+\mathrm e^{-x}}2$`, R`$\frac{\mathrm e^x-\mathrm e^{-x}}2$`, R`$\mathrm e^x+\mathrm e^{-x}$`, R`$\frac{\mathrm e^{x}}{2}$`], ok: 0, r: "su-usuel" }
]);

/* ---------- su-07 · Suites monotones, bornées et bornes supérieures de queues ---------- */
A("su-07", [
  { declic: R`Une moyenne de $n$ termes croissants : on forme la différence $v_{n+1}-v_n$ et on met tout sur un dénominateur commun. Le numérateur compare $nu_{n+1}$ à la somme des $n$ premiers termes.`,
    copie: R`<p>${ph("posons","Posons")} $A_n=u_1+\cdots+u_n$. Alors $v_{n+1}-v_n=\frac{nA_{n+1}-(n+1)A_n}{n(n+1)}=\frac{nu_{n+1}-A_n}{n(n+1)}$ (car $A_{n+1}=A_n+u_{n+1}$).</p><p>${ph("comme","Comme")} $(u_n)$ est croissante, $u_k\leqslant u_{n+1}$ pour $k\leqslant n$. ${ph("donc","Donc")} $nu_{n+1}=\sum_{k=1}^nu_{n+1}\geqslant\sum_{k=1}^nu_k=A_n$.</p><p>Le numérateur est $\geqslant0$ et le dénominateur $>0$ : $v_{n+1}-v_n\geqslant0$.</p><div class="sbox">$$(v_n)\ \text{est croissante.}$$</div>`,
    tete: R`<p><b>Piège :</b> croire que la moyenne est supérieure au dernier terme. C'est l'inverse : la moyenne est inférieure au maximum.</p><p><b>Premier réflexe :</b> étudier le rapport $\frac{v_{n+1}}{v_n}$. Les $u_k$ ne sont pas supposés positifs : on étudie la différence.</p>`,
    trou: { q: R`Quelle inégalité justifie $nu_{n+1}\geqslant u_1+\cdots+u_n$ ?`, c: [R`$u_k\leqslant u_{n+1}$ pour $k\leqslant n$ (croissance)`, R`$u_k\geqslant u_{n+1}$ pour $k\leqslant n$`, R`$u_k\geqslant0$`, R`$u_{n+1}\geqslant0$`], ok: 0, why: R`La suite croît, donc les $n$ premiers termes sont tous inférieurs à $u_{n+1}$ ; leur somme est donc au plus $n\,u_{n+1}$.` },
    bareme: { sur: 3, l: [[1, R`Calcul de $v_{n+1}-v_n$ en $\frac{nu_{n+1}-A_n}{n(n+1)}$`], [1, R`$nu_{n+1}\geqslant A_n$ par croissance`], [1, R`Signe du quotient et conclusion`]] },
    jury: [
      { e: R`Étudier $\frac{v_{n+1}}{v_n}$ sans connaître le signe de $v_n$.`, p: R`Méthode non justifiée : point perdu.` },
      { e: R`Mettre au même dénominateur sans simplifier $nA_{n+1}-(n+1)A_n$.`, p: R`Le numérateur est inexploitable : deux points perdus.` }
    ] },
  { declic: R`On découpe $v_{2n}$ en deux moitiés : les $n$ premiers termes donnent $\frac{v_n}2$, les $n$ suivants sont tous au moins $u_n$ (croissance). Après passage à la limite, on obtient deux inégalités opposées.`,
    copie: R`<p>$v_{2n}=\frac{v_n}2+\frac{u_{n+1}+\cdots+u_{2n}}{2n}\geqslant\frac{v_n}2+\frac{nu_n}{2n}=\frac{u_n+v_n}2$ ($n$ termes, tous $\geqslant u_n$).</p><p>Pour $k$ fixé, $u_k\leqslant u_n$ si $n\geqslant k$ ; donc $u_k\leqslant\ell$. ${ph("donc","Donc")} $v_n\leqslant\ell$ : $(v_n)$ est croissante majorée, elle converge vers $\ell'\leqslant\ell$.</p><p>${ph("ainsi","Ainsi")}, en passant à la limite dans $v_{2n}\geqslant\frac{u_n+v_n}2$ : $\ell'\geqslant\frac{\ell+\ell'}2$, soit $\ell'\geqslant\ell$.</p><p>${ph("donc","Donc")} $\ell'=\ell$.</p><div class="sbox">$$\frac{u_1+\cdots+u_n}n\to\ell.$$</div>`,
    tete: R`<p><b>Piège :</b> supposer d'emblée que $(v_n)$ converge pour passer à la limite. Il faut d'abord la majoration (limite monotone).</p><p><b>Premier réflexe :</b> invoquer le lemme de Cesàro. Ici on le redémontre dans le cas croissant, avec une méthode plus élémentaire.</p>`,
    trou: { q: R`Que donne le passage à la limite dans $v_{2n}\geqslant\frac{u_n+v_n}2$ ?`, c: [R`$\ell'\geqslant\frac{\ell+\ell'}2$`, R`$\ell'\leqslant\frac{\ell+\ell'}2$`, R`$\ell'>\frac{\ell+\ell'}2$`, R`$\ell'=\ell+\ell'$`], ok: 0, why: R`$(v_{2n})$ est extraite de $(v_n)$ donc tend vers $\ell'$ ; une inégalité large passe à la limite en restant large.` },
    bareme: { sur: 5, l: [[1, R`Découpage et minoration $v_{2n}\geqslant\frac{u_n+v_n}2$`], [1, R`$u_k\leqslant\ell$ pour tout $k$, d'où $v_n\leqslant\ell$`], [1, R`Convergence de $(v_n)$ par limite monotone`], [1, R`Passage à la limite : $\ell'\geqslant\ell$`], [1, R`Conclusion $\ell'=\ell$`]] },
    jury: [
      { e: R`Passer à la limite avant d'avoir montré que $(v_n)$ converge.`, p: R`Limite d'une suite dont l'existence n'est pas établie : deux points perdus.` },
      { e: R`Affirmer l'inégalité stricte à la limite.`, p: R`Erreur classique : point perdu.` }
    ] },
  { declic: R`Pour une suite bornée, le plus grand terme à partir du rang $n$ est une borne supérieure : elle existe, et diminue quand $n$ augmente car on retire des termes. Une suite décroissante minorée converge.`,
    copie: R`<p>$|u_p|\leqslant M$. L'ensemble $\{u_p,\ p\geqslant n\}$ est non vide, majoré par $M$, minoré par $-M$ : $v_n=\sup$ et $w_n=\inf$ existent, et $w_n\leqslant u_n\leqslant v_n$.</p><p>$\{u_p,\ p\geqslant n+1\}\subset\{u_p,\ p\geqslant n\}$ donc $v_{n+1}\leqslant v_n$ et $w_{n+1}\geqslant w_n$ : $(v_n)$ décroît, $(w_n)$ croît.</p><p>${ph("donc","Donc")} $(v_n)$ décroissante minorée par $-M$ converge vers $L$, et $(w_n)$ croissante majorée par $M$ vers $\lambda$.</p><p>${ph("or","Or")} $w_n\leqslant v_n$ : en passant à la limite, $\lambda\leqslant L$.</p><div class="sbox">$$\lim w_n\leqslant\lim v_n.$$</div>`,
    tete: R`<p><b>Piège :</b> confondre sup et max : le sup d'une queue peut ne pas être atteint, mais il existe toujours pour un ensemble majoré non vide.</p><p><b>Premier réflexe :</b> penser que $(v_n)$ est croissante parce que $n$ augmente. Plus $n$ est grand, moins il y a de termes : le sup diminue.</p>`,
    trou: { q: R`Pourquoi $v_{n+1}\leqslant v_n$ ?`, c: [R`la queue à partir de $n+1$ est incluse dans celle à partir de $n$`, R`$(u_n)$ est décroissante`, R`$(u_n)$ est croissante`, R`$M$ décroît`], ok: 0, why: R`Si $A\subset B$ alors $\sup A\leqslant\sup B$ : chaque majorant de $B$ majore $A$. La suite $(u_n)$ n'est pas supposée monotone.` },
    bareme: { sur: 4, l: [[1, R`Existence de $v_n$ et $w_n$ (ensemble non vide, majoré, minoré)`], [1, R`Monotonie par inclusion des queues`], [1, R`Convergence par limite monotone`], [1, R`$w_n\leqslant v_n$ donne $\lambda\leqslant L$`]] },
    jury: [
      { e: R`Dire $v_n$ « décroissante car $u_n$ décroissante ».`, p: R`$(u_n)$ n'est pas monotone : justification fausse, deux points perdus.` },
      { e: R`Ne pas justifier l'existence de la borne supérieure.`, p: R`Il faut citer l'axiome : point perdu.` }
    ] },
  { declic: R`Si $u_n\to\ell$, tous les termes de la queue sont dans $[\ell-\varepsilon,\ell+\varepsilon]$ : sup et inf sont dans le même intervalle. Réciproquement, $w_n\leqslant u_n\leqslant v_n$ et gendarmes.`,
    copie: R`<p>(5) Soit $\varepsilon>0$ et $N$ tel que $|u_p-\ell|\leqslant\varepsilon$ pour $p\geqslant N$. Pour $n\geqslant N$, $\ell+\varepsilon$ majore la queue, donc $v_n\leqslant\ell+\varepsilon$ ; et $v_n\geqslant u_n\geqslant\ell-\varepsilon$. ${ph("donc","Donc")} $|v_n-\ell|\leqslant\varepsilon$ : $v_n\to\ell$. De même $w_n\to\ell$.</p><p>(6) Si $\lim v_n=\lim w_n=\ell$, ${ph("comme","comme")} $w_n\leqslant u_n\leqslant v_n$, les gendarmes donnent $u_n\to\ell$.</p><p>Contre-exemple : $u_n=(-1)^n$ a $\lim v_n=1\neq-1=\lim w_n$ et diverge.</p><div class="sbox">$$u_n\text{ converge}\iff\lim\sup_{p\geqslant n}u_p=\lim\inf_{p\geqslant n}u_p.$$</div>`,
    tete: R`<p><b>Piège :</b> déduire de $v_n\to\ell$ seul que $u_n\to\ell$. Il faut aussi $w_n\to\ell$ pour encadrer.</p><p><b>Premier réflexe :</b> raisonner avec des sous-suites. L'encadrement par sup et inf est plus court.</p>`,
    trou: { q: R`Quelle inégalité encadre $u_n$ entre ses bornes de queue ?`, c: [R`$w_n\leqslant u_n\leqslant v_n$`, R`$v_n\leqslant u_n\leqslant w_n$`, R`$u_n\leqslant w_n\leqslant v_n$`, R`$w_n\leqslant v_n\leqslant u_n$`], ok: 0, why: R`$u_n$ appartient à sa propre queue : il est au plus le sup et au moins l'inf de cette queue.` },
    bareme: { sur: 4, l: [[1, R`Majoration $v_n\leqslant\ell+\varepsilon$ pour $n\geqslant N$`], [1, R`Minoration $v_n\geqslant\ell-\varepsilon$, donc $v_n\to\ell$ (et $w_n$ de même)`], [1, R`Réciproque par gendarmes avec $w_n\leqslant u_n\leqslant v_n$`], [1, R`Contre-exemple pour deux limites différentes`]] },
    jury: [
      { e: R`Ne traiter que $v_n$ sans dire que $w_n$ est symétrique.`, p: R`Cas oublié : point perdu.` },
      { e: R`Écrire $|v_n-\ell|\leqslant\varepsilon$ sans les deux inégalités.`, p: R`Il faut majorer et minorer : point perdu.` }
    ] },
  { declic: R`Le produit des impairs se transforme en quotient de factorielles : on multiplie et divise par le produit des pairs, qui vaut $2^n\,n!$.`,
    copie: R`<p>$2\times4\times\cdots\times2n=2^n(1\times2\times\cdots\times n)=2^nn!$.</p><p>Le produit des impairs est $\frac{(2n)!}{2\times4\times\cdots\times2n}=\frac{(2n)!}{2^nn!}$ (car $(2n)!$ est le produit de tous les entiers de $1$ à $2n$).</p><p>${ph("donc","Donc")} $u_n=\frac{(2n)!}{(2^nn!)^2}=\frac{(2n)!}{4^n(n!)^2}$.</p><p>${ph("or","Or")} $\frac{u_{n+1}}{u_n}=\frac{2n+1}{2n+2}\lt1$ et $u_n>0$ : $(u_n)$ est décroissante minorée, donc converge.</p><div class="sbox">$$u_n=\frac{(2n)!}{4^n(n!)^2},\quad(u_n)\ \text{convergente.}$$</div>`,
    tete: R`<p><b>Piège :</b> écrire « $\frac1{2}\cdot\frac34\cdots$ tend vers $1$ car chaque facteur tend vers $1$ ». Le produit de $n$ facteurs qui tendent vers $1$ peut tendre vers $0$.</p><p><b>Premier réflexe :</b> simplifier terme à terme. Il n'y a pas de simplification : on passe par les factorielles.</p>`,
    trou: { q: R`Que vaut le produit $2\times4\times\cdots\times(2n)$ ?`, c: [R`$2^n\,n!$`, R`$(2n)!$`, R`$2\,n!$`, R`$n!$`], ok: 0, why: R`On sort un $2$ de chacun des $n$ facteurs : $2^n$, et il reste $1\times2\times\cdots\times n=n!$.` },
    bareme: { sur: 4, l: [[1, R`Produit des pairs $=2^nn!$`], [1, R`Produit des impairs $=\frac{(2n)!}{2^nn!}$`], [1, R`Écriture $u_n=\frac{(2n)!}{4^n(n!)^2}$`], [1, R`Décroissance et minoration : convergence`]] },
    jury: [
      { e: R`Écrire le produit des impairs comme $\frac{(2n)!}{n!}$.`, p: R`Il manque $2^n$ : deux points perdus.` }
    ] },
  { declic: R`$v_n=(n+1)u_n^2$ : le rapport $\frac{v_{n+1}}{v_n}$ se calcule avec la relation $\frac{u_{n+1}}{u_n}=\frac{2n+1}{2n+2}$. On compare le numérateur et le dénominateur par un développement.`,
    copie: R`<p>$\frac{v_{n+1}}{v_n}=\frac{n+2}{n+1}\Big(\frac{2n+1}{2n+2}\Big)^2=\frac{(n+2)(2n+1)^2}{4(n+1)^3}$.</p><p>$(n+2)(2n+1)^2=4n^3+12n^2+9n+2$ et $4(n+1)^3=4n^3+12n^2+12n+4$, donc la différence vaut $-3n-2\lt0$. ${ph("donc","Donc")} $\frac{v_{n+1}}{v_n}\lt1$ : $(v_n)$ est décroissante.</p><p>${ph("comme","Comme")} $v_n\geqslant0$, elle converge vers $C\geqslant0$.</p><p>${ph("ainsi","Ainsi")} $u_n^2=\frac{v_n}{n+1}\to0$ et, $u_n\geqslant0$, $u_n\to0$.</p><div class="sbox">$$(n+1)u_n^2\to C,\qquad u_n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire « $u_n$ décroissante donc $u_n\to0$ ». Une suite décroissante positive converge, mais pas forcément vers $0$.</p><p><b>Premier réflexe :</b> montrer $u_n\to0$ directement. Le facteur $(n+1)$ rend la suite $v_n$ plus facile : sa convergence implique celle de $u_n^2$ vers $0$.</p>`,
    trou: { q: R`Pourquoi $\frac{v_n}{n+1}\to0$ ?`, c: [R`$(v_n)$ est convergente, donc bornée, et $n+1\to+\infty$`, R`$v_n\to0$`, R`$v_n$ est croissante`, R`$n+1\to0$`], ok: 0, why: R`Une suite convergente est bornée ; divisée par une suite qui tend vers $+\infty$, elle donne une limite nulle.` },
    bareme: { sur: 4, l: [[1, R`Rapport $\frac{v_{n+1}}{v_n}$ calculé`], [1, R`Comparaison à $1$ par développement : $-3n-2\lt0$`], [1, R`Convergence de $(v_n)$ (décroissante minorée par $0$)`], [1, R`$u_n^2=\frac{v_n}{n+1}\to0$ puis $u_n\to0$`]] },
    jury: [
      { e: R`Se tromper dans le développement de $(n+2)(2n+1)^2$.`, p: R`Signe faux : deux points perdus.` },
      { e: R`Conclure $u_n\to0$ sans passer à la racine.`, p: R`Il faut $u_n=\sqrt{u_n^2}$ avec $u_n\geqslant0$ : point perdu.` }
    ] },
  { declic: R`Un produit de $1-\frac1k$ se télescope. Pour minorer $u_n^2$, on compare chaque facteur au carré à un produit de deux facteurs voisins qui se télescope.`,
    copie: R`<p>$\prod_{k=2}^{2n}\big(1-\frac1k\big)=\prod_{k=2}^{2n}\frac{k-1}k=\frac1{2n}$ (télescopage).</p><p>${ph("posons","Écrivons")} $u_n=\prod_{k=1}^n\big(1-\frac1{2k}\big)=\frac12\prod_{k=2}^n\big(1-\frac1{2k}\big)$.</p><p>Pour $k\geqslant2$, $1-\frac1{2k}\geqslant1-\frac1{2k-1}\geqslant0$, donc $\big(1-\frac1{2k}\big)^2\geqslant\frac{2k-1}{2k}\cdot\frac{2k-2}{2k-1}=\frac{k-1}k$.</p><p>${ph("donc","Donc")} $u_n^2\geqslant\frac14\prod_{k=2}^n\frac{k-1}k=\frac1{4n}$ et $v_n\geqslant\frac{n+1}{4n}\geqslant\frac14$ ; à la limite $C\geqslant\frac14>0$.</p><div class="sbox">$$\lim(n+1)u_n^2\geqslant\frac14>0.$$</div>`,
    tete: R`<p><b>Piège :</b> multiplier des inégalités entre nombres de signes quelconques. Ici tous les facteurs sont positifs : on peut multiplier membre à membre.</p><p><b>Premier réflexe :</b> prendre un équivalent de $u_n$ avec Stirling. Hors programme ; l'encadrement par un produit télescopique suffit.</p>`,
    trou: { q: R`Que vaut $\prod_{k=2}^n\frac{k-1}k$ ?`, c: [R`$\frac1n$`, R`$\frac1{n-1}$`, R`$\frac n2$`, R`$1$`], ok: 0, why: R`Le produit $\frac12\cdot\frac23\cdots\frac{n-1}n$ se télescope : tous les numérateurs sauf $1$ et tous les dénominateurs sauf $n$ se simplifient.` },
    bareme: { sur: 4, l: [[1, R`Produit télescopique $\frac1{2n}$`], [1, R`Comparaison $1-\frac1{2k}\geqslant1-\frac1{2k-1}\geqslant0$`], [1, R`Minoration $u_n^2\geqslant\frac1{4n}$ avec produit de nombres positifs`], [1, R`$v_n\geqslant\frac14$ et $C\geqslant\frac14$`]] },
    jury: [
      { e: R`Multiplier des inégalités sans préciser la positivité.`, p: R`Opération non justifiée : point perdu.` },
      { e: R`Oublier le facteur $\frac12$ en tête.`, p: R`Constante fausse : point perdu.` }
    ] }
], [
  { q: R`Que dit le théorème de la limite monotone ?`, c: [R`une suite croissante et majorée converge`, R`une suite croissante converge`, R`une suite majorée converge`, R`une suite bornée converge`], ok: 0, r: "su-mono" },
  { q: R`Si $A\subset B$ sont des parties majorées non vides de $\mathbb R$, que dit-on de $\sup A$ et $\sup B$ ?`, c: [R`$\sup A\leqslant\sup B$`, R`$\sup A\geqslant\sup B$`, R`$\sup A=\sup B$`, R`rien`], ok: 0, r: "re-sup" },
  { q: R`Que vaut $\prod_{k=a}^b\frac{x_{k-1}}{x_k}$ ?`, c: [R`$\frac{x_{a-1}}{x_b}$`, R`$\frac{x_a}{x_b}$`, R`$x_{a-1}x_b$`, R`$x_b-x_{a-1}$`], ok: 0, r: "su-tele" }
]);

/* ---------- su-08 · Suites adjacentes : polygones, racines, carrés et séries alternées ---------- */
A("su-08", [
  { declic: R`Pour montrer que deux suites sont adjacentes : une croît, l'autre décroît, leur écart tend vers $0$. Ici le passage de $n$ à $n+1$ divise l'angle par $2$ : on utilise les formules de duplication $\sin2a$ et $\tan2a$.`,
    copie: R`<p>${ph("posons","Posons")} $a=\frac\theta{2^{n+1}}\in]0,\frac\pi4[$, de sorte que $\frac\theta{2^n}=2a$.</p><p>$u_n=2^n\sin2a=2^{n+1}\sin a\cos a=u_{n+1}\cos a\leqslant u_{n+1}$ : $(u_n)$ est croissante.</p><p>$v_n=2^n\tan2a=\frac{v_{n+1}}{1-\tan^2a}\geqslant v_{n+1}$ car $0\lt1-\tan^2a\leqslant1$ : $(v_n)$ est décroissante.</p><p>${ph("or","Or")} $v_n-u_n=u_n\frac{1-\cos(\theta/2^n)}{\cos(\theta/2^n)}$ avec $0\lt u_n\leqslant\theta$ : cet écart tend vers $0$. ${ph("donc","Donc")} les deux suites sont adjacentes, de limite commune $\lim u_n=\theta\frac{\sin x_n}{x_n}\to\theta$.</p><div class="sbox">$$(u_n)\nearrow,\ (v_n)\searrow,\ v_n-u_n\to0,\ \lim u_n=\lim v_n=\theta.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier que $\tan a\lt1$ pour $a\lt\frac\pi4$ : sinon $1-\tan^2a$ peut s'annuler ou changer de signe.</p><p><b>Premier réflexe :</b> étudier $f(x)=x\sin\frac\theta x$ comme fonction de $x$. Cela marche mais exige une dérivée ; la relation entre $u_n$ et $u_{n+1}$ est immédiate avec $\sin2a$.</p>`,
    trou: { q: R`Pourquoi $u_n=u_{n+1}\cos a\leqslant u_{n+1}$ ?`, c: [R`$u_{n+1}>0$ et $0\lt\cos a\leqslant1$`, R`$u_{n+1}\lt0$`, R`$\cos a>1$`, R`$a>\frac\pi2$`], ok: 0, why: R`Multiplier un réel strictement positif par un nombre de $]0,1]$ ne l'augmente pas ; ici $a\in]0,\frac\pi4[$ donne $\cos a\in]\frac{\sqrt2}2,1[$.` },
    bareme: { sur: 5, l: [[1, R`Cadre : $a=\frac\theta{2^{n+1}}\in]0,\frac\pi4[$`], [1, R`$(u_n)$ croissante avec $\sin2a=2\sin a\cos a$`], [1, R`$(v_n)$ décroissante avec $\tan2a$`], [1, R`$v_n-u_n\to0$`], [1, R`Limite commune $\theta$ via $\frac{\sin x}x\to1$`]] },
    jury: [
      { e: R`Ne pas vérifier que $0\lt1-\tan^2a$.`, p: R`Le sens de l'inégalité n'est pas justifié : deux points perdus.` },
      { e: R`Déduire la limite sans montrer l'adjacence.`, p: R`Théorème inapplicable : deux points perdus.` }
    ] },
  { declic: R`Deux suites qui diffèrent d'un décalage d'indice dans la racine : $u_n=S_n-2\sqrt n$ et $v_n=S_n-2\sqrt{n+1}$. On compare les différences successives avec la quantité conjuguée.`,
    copie: R`<p>$u_{n+1}-u_n=\frac1{\sqrt{n+1}}-\frac2{\sqrt{n+1}+\sqrt n}\leqslant0$ car $\sqrt{n+1}+\sqrt n\leqslant2\sqrt{n+1}$ : $(u_n)$ décroît.</p><p>$v_{n+1}-v_n=\frac1{\sqrt{n+1}}-\frac2{\sqrt{n+2}+\sqrt{n+1}}\geqslant0$ car $\sqrt{n+2}+\sqrt{n+1}\geqslant2\sqrt{n+1}$ : $(v_n)$ croît.</p><p>$u_n-v_n=2(\sqrt{n+1}-\sqrt n)=\frac2{\sqrt{n+1}+\sqrt n}\to0$. ${ph("donc","Donc")} les suites sont adjacentes, de limite commune $c$.</p><p>${ph("ainsi","Ainsi")} $\frac{S_n}{2\sqrt n}=1+\frac{u_n}{2\sqrt n}\to1$.</p><div class="sbox">$$S_n=2\sqrt n+c+o(1)\sim2\sqrt n.$$</div>`,
    tete: R`<p><b>Piège :</b> penser que $u_n$ et $v_n$ ont le même sens de variation puisqu'elles se ressemblent. Elles sont de monotonies opposées.</p><p><b>Premier réflexe :</b> reprendre l'encadrement de la khôlle précédente. Ici on organise la même idée en suites adjacentes.</p>`,
    trou: { q: R`Quelle inégalité justifie $\frac2{\sqrt{n+1}+\sqrt n}\geqslant\frac1{\sqrt{n+1}}$ ?`, c: [R`$\sqrt{n+1}+\sqrt n\leqslant2\sqrt{n+1}$`, R`$\sqrt{n+1}+\sqrt n\geqslant2\sqrt{n+1}$`, R`$\sqrt n\geqslant\sqrt{n+1}$`, R`$n\geqslant1$`], ok: 0, why: R`Comme $\sqrt n\leqslant\sqrt{n+1}$, la somme est au plus $2\sqrt{n+1}$ ; en passant à l'inverse (positif) le sens s'inverse.` },
    bareme: { sur: 5, l: [[1, R`$(u_n)$ décroissante`], [1, R`$(v_n)$ croissante`], [1, R`Écart $u_n-v_n\to0$`], [1, R`Adjacence et limite $c$`], [1, R`Équivalent $S_n\sim2\sqrt n$`]] },
    jury: [
      { e: R`Se tromper de sens en passant à l'inverse.`, p: R`Monotonie fausse : deux points perdus.` }
    ] },
  { declic: R`On cherche à encadrer une limite sans la connaître : deux suites adjacentes la piègent à chaque rang. Ici $S_n$ croît et $S_n+\frac1n$ décroît.`,
    copie: R`<p>$S_{n+1}-S_n=\frac1{(n+1)^2}>0$ : $(S_n)$ croît.</p><p>$S'_{n+1}-S'_n=\frac1{(n+1)^2}+\frac1{n+1}-\frac1n=\frac1{(n+1)^2}-\frac1{n(n+1)}=-\frac1{n(n+1)^2}\lt0$ : $(S'_n)$ décroît.</p><p>$S'_n-S_n=\frac1n\to0$. ${ph("donc","Donc")} elles sont adjacentes et convergent vers $\ell$ avec $S_n\leqslant\ell\leqslant S_n+\frac1n$.</p><p>Pour $n=10$ : $S_{10}\approx1{,}5498$, d'où $1{,}549\leqslant\ell\leqslant1{,}650$.</p><div class="sbox">$$1{,}549\leqslant\ell\leqslant1{,}650.$$</div>`,
    tete: R`<p><b>Piège :</b> prendre $S_n$ et $S_n+\frac1{n^2}$. L'écart tend vers $0$ mais la seconde suite ne décroît pas toujours.</p><p><b>Premier réflexe :</b> comparer à $\int\frac{\mathrm dx}{x^2}$. Fonctionne aussi, mais l'adjacence donne directement l'encadrement à chaque rang.</p>`,
    trou: { q: R`Quelle est la propriété d'un encadrement par deux suites adjacentes $(a_n)\nearrow$, $(b_n)\searrow$ ?`, c: [R`$a_n\leqslant\ell\leqslant b_n$ pour tout $n$`, R`$a_n\geqslant\ell\geqslant b_n$`, R`$a_n=b_n$`, R`$a_n\lt\ell\lt b_n$ seulement à partir d'un rang`], ok: 0, why: R`La croissante reste sous la limite et la décroissante au-dessus, à tous les rangs et pas seulement à partir d'un certain rang.` },
    bareme: { sur: 4, l: [[1, R`$(S_n)$ croissante`], [1, R`$(S'_n)$ décroissante avec le calcul de $-\frac1{n(n+1)^2}$`], [1, R`Écart $\frac1n\to0$ : adjacence`], [1, R`Encadrement numérique avec $n=10$`]] },
    jury: [
      { e: R`Se tromper dans le calcul de $S'_{n+1}-S'_n$.`, p: R`Monotonie non justifiée : deux points perdus.` },
      { e: R`Donner un encadrement sans préciser le rang.`, p: R`Valeur numérique invérifiable : point perdu.` }
    ] },
  { declic: R`Série alternée : les sommes paires décroissent, les impaires croissent, et leur écart est le terme $u_{2n+1}$ qui tend vers $0$. Deux suites adjacentes, donc une limite commune, avec une erreur majorée par le terme suivant.`,
    copie: R`<p>$S_{2n+2}-S_{2n}=-u_{2n+1}+u_{2n+2}\leqslant0$ : $(S_{2n})$ décroît. $S_{2n+3}-S_{2n+1}=u_{2n+2}-u_{2n+3}\geqslant0$ : $(S_{2n+1})$ croît.</p><p>$S_{2n+1}-S_{2n}=-u_{2n+1}\to0$. ${ph("donc","Donc")} elles sont adjacentes, de limite commune $\ell$, et $S_{2n+1}\leqslant\ell\leqslant S_{2n}$.</p><p>${ph("ainsi","Ainsi")} $S_n\to\ell$ (extraites paire et impaire).</p><p>Pour $n=2m$ : $0\leqslant S_{2m}-\ell\leqslant S_{2m}-S_{2m+1}=u_{n+1}$ ; pour $n=2m+1$ de même. ${ph("donc","Donc")} $|\ell-S_n|\leqslant u_{n+1}$ ; avec $u_k=\frac1{k+1}$, $n\geqslant98$ donne l'erreur $\leqslant10^{-2}$.</p><div class="sbox">$$|\ell-S_n|\leqslant u_{n+1}.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier que $u_n$ est positive : sans $u_n\geqslant0$ on ne peut pas affirmer $S_{2n+1}\leqslant S_{2n}$.</p><p><b>Premier réflexe :</b> citer le critère des séries alternées comme un théorème connu. Ici on le démontre ; la preuve passe par l'adjacence.</p>`,
    trou: { q: R`Pourquoi $S_{2n+2}-S_{2n}=-u_{2n+1}+u_{2n+2}\leqslant0$ ?`, c: [R`$(u_n)$ décroît, donc $u_{2n+2}\leqslant u_{2n+1}$`, R`$(u_n)$ croît`, R`$u_n\geqslant1$`, R`$(-1)^n$ décroît`], ok: 0, why: R`Les deux termes ajoutés sont $-u_{2n+1}$ et $+u_{2n+2}$ ; leur somme est négative parce que $u$ est décroissante.` },
    bareme: { sur: 5, l: [[1, R`$(S_{2n})$ décroissante`], [1, R`$(S_{2n+1})$ croissante`], [1, R`Écart $-u_{2n+1}\to0$ et adjacence`], [1, R`Convergence de $(S_n)$ par extraites`], [1, R`Majoration $|\ell-S_n|\leqslant u_{n+1}$ dans les deux parités`]] },
    jury: [
      { e: R`Ne traiter qu'une parité pour la majoration de l'erreur.`, p: R`Cas oublié : deux points perdus.` },
      { e: R`Appeler « adjacentes » deux suites sans vérifier la limite de l'écart.`, p: R`Définition incomplète : point perdu.` }
    ] }
], [
  { q: R`Quand dit-on que deux suites $(a_n)$ et $(b_n)$ sont adjacentes ?`, c: [R`$(a_n)\nearrow$, $(b_n)\searrow$ et $b_n-a_n\to0$`, R`$(a_n)\nearrow$ et $(b_n)\nearrow$`, R`$a_n\leqslant b_n$`, R`$b_n-a_n$ est constante`], ok: 0, r: "su-mono" },
  { q: R`Que vaut $\tan2a$ en fonction de $\tan a$ ?`, c: [R`$\frac{2\tan a}{1-\tan^2a}$`, R`$2\tan a$`, R`$\frac{2\tan a}{1+\tan^2a}$`, R`$\tan^2a$`], ok: 0, r: "su-usuel" },
  { q: R`Si $(a_n)$ et $(b_n)$ sont adjacentes avec $a_n\nearrow$, que dit-on de leur limite $\ell$ ?`, c: [R`$a_n\leqslant\ell\leqslant b_n$ pour tout $n$`, R`$\ell=a_0$`, R`$\ell\leqslant a_n$`, R`$\ell\geqslant b_n$`], ok: 0, r: "su-mono" }
]);

/* ---------- su-09 · Irrationalité de e et moyenne arithmético-géométrique ---------- */
A("su-09", [
  { declic: R`Deux suites encadrent $\mathrm e$ : la première est la somme des inverses de factorielles (croissante), la seconde lui ajoute un petit terme et décroît. On vérifie le signe des différences et l'écart.`,
    copie: R`<p>$a_{n+1}-a_n=\frac1{(n+1)!}>0$ : $(a_n)$ est strictement croissante.</p><p>${ph("posons","Mettons")} $b_{n+1}-b_n$ sur le dénominateur $n(n+1)(n+1)!$ : $b_{n+1}-b_n=\frac{n(n+1)+n-(n+1)^2}{n(n+1)(n+1)!}=\frac{-1}{n(n+1)(n+1)!}\lt0$ : $(b_n)$ est strictement décroissante.</p><p>$b_n-a_n=\frac1{n\,n!}\leqslant\frac1n\to0$.</p><p>${ph("donc","Donc")} $(a_n)$ et $(b_n)$ sont adjacentes.</p><div class="sbox">$$(a_n)\nearrow,\ (b_n)\searrow,\ b_n-a_n\to0,\ a_n\lt\mathrm e\lt b_n.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que $b_n$ est croissante parce qu'elle contient des termes en plus de $a_n$. Le terme correctif $\frac1{n\,n!}$ diminue plus vite que $\frac1{(n+1)!}$ n'augmente.</p><p><b>Premier réflexe :</b> étudier $b_n$ par comparaison asymptotique. Il suffit d'une différence exacte.</p>`,
    trou: { q: R`Que vaut $b_n-a_n$ ?`, c: [R`$\frac1{n\,n!}$`, R`$\frac1{n!}$`, R`$\frac1{(n+1)!}$`, R`$0$`], ok: 0, why: R`$b_n=a_n+\frac1{n\,n!}$ par définition : l'écart est exactement le terme correctif.` },
    bareme: { sur: 4, l: [[1, R`$(a_n)$ strictement croissante`], [1, R`Calcul de $b_{n+1}-b_n$ avec dénominateur commun`], [1, R`Signe négatif et stricte décroissance`], [1, R`Écart $\frac1{n\,n!}\to0$ et adjacence`]] },
    jury: [
      { e: R`Se tromper dans la mise au même dénominateur.`, p: R`Signe de la différence non justifié : deux points perdus.` },
      { e: R`Oublier de préciser que l'écart tend vers $0$.`, p: R`Il faut un argument de limite : point perdu.` }
    ] },
  { declic: R`L'encadrement de $\mathrm e$ par $a_n$ et $b_n$ donne l'erreur $\frac1{n\,n!}$. On cherche le plus petit $n$ pour lequel elle est sous $10^{-4}$.`,
    copie: R`<p>${ph("comme","Comme")} $a_n\leqslant\mathrm e\leqslant b_n$, on a $0\leqslant\mathrm e-a_n\leqslant\frac1{n\,n!}$.</p><p>Pour $n=6$ : $\frac1{6\times720}=\frac1{4320}\approx2{,}3\times10^{-4}$, trop grand. Pour $n=7$ : $\frac1{7\times5040}=\frac1{35280}\approx2{,}8\times10^{-5}\leqslant10^{-4}$ ✓.</p><p>${ph("donc","Donc")} $a_7=1+1+\frac12+\frac16+\frac1{24}+\frac1{120}+\frac1{720}+\frac1{5040}\approx2{,}718254$.</p><div class="sbox">$$2{,}71825\leqslant\mathrm e\leqslant2{,}71829,\quad\mathrm e\approx2{,}7183.$$</div>`,
    tete: R`<p><b>Piège :</b> arrêter la somme au terme $\frac1{n!}$ en pensant que l'erreur est ce terme. L'erreur est en réalité bien plus petite.</p><p><b>Premier réflexe :</b> ajouter des termes jusqu'à ce que l'écart de deux sommes consécutives soit petit. Ça ne garantit rien : il faut une majoration de l'erreur.</p>`,
    trou: { q: R`Quel est le plus petit $n$ tel que $\frac1{n\,n!}\leqslant10^{-4}$ ?`, c: [R`$7$`, R`$6$`, R`$5$`, R`$8$`], ok: 0, why: R`$n=6$ donne $\frac1{4320}\approx2{,}3\times10^{-4}>10^{-4}$ et $n=7$ donne $\frac1{35280}\approx2{,}8\times10^{-5}\lt10^{-4}$. Pour $n=8$ cela convient aussi, mais n'est pas minimal.` },
    bareme: { sur: 3, l: [[1, R`Majoration d'erreur $\mathrm e-a_n\leqslant\frac1{n\,n!}$`], [1, R`Choix de $n=7$ avec calcul de $\frac1{35280}$`], [1, R`Valeur de $a_7$ et encadrement final`]] },
    jury: [
      { e: R`Donner un résultat sans justifier la précision.`, p: R`Erreur non majorée : deux points perdus.` }
    ] },
  { declic: R`Supposer $\mathrm e=\frac pq$ et encadrer strictement entre $a_q$ et $a_q+\frac1{q\cdot q!}$. En multipliant par $q\cdot q!$, on emprisonne un entier entre deux entiers consécutifs : absurde.`,
    copie: R`<p>${ph("posons","Supposons")} $\mathrm e=\frac pq$ avec $p\in\mathbb Z$, $q\in\mathbb N^*$.</p><p>$a_q\lt\mathrm e\lt b_q=a_q+\frac1{q\cdot q!}$ (suites strictement monotones). En multipliant par $q\cdot q!>0$ : $q\cdot q!\,a_q\lt p\cdot q!\lt q\cdot q!\,a_q+1$.</p><p>${ph("or","Or")} $q!\,a_q=\sum_{k=0}^q\frac{q!}{k!}$ est un entier : chaque $\frac{q!}{k!}=(k+1)\cdots q$ est entier. Notons $N$ cet entier. L'encadrement devient $qN\lt p\cdot q!\lt qN+1$.</p><p>${ph("donc","Donc")} l'entier $p\cdot q!$ est strictement entre deux entiers consécutifs : absurde. ${ph("ainsi","Ainsi")} $\mathrm e\notin\mathbb Q$.</p><div class="sbox">$$\mathrm e\notin\mathbb Q.$$</div>`,
    tete: R`<p><b>Piège :</b> utiliser des inégalités larges : $a_q\leqslant\mathrm e\leqslant b_q$ n'interdit pas l'égalité avec un entier. Il faut l'encadrement <i>strict</i>, d'où la stricte monotonie de la première question.</p><p><b>Premier réflexe :</b> écrire le développement décimal de $\mathrm e$. On n'a pas de forme explicite : on raisonne avec les suites.</p>`,
    trou: { q: R`Pourquoi $\frac{q!}{k!}$ est-il un entier pour $0\leqslant k\leqslant q$ ?`, c: [R`il vaut $(k+1)(k+2)\cdots q$, produit d'entiers`, R`parce que $q\geqslant k$ seulement`, R`parce que $q!\geqslant k!$`, R`parce que $k!$ divise $q$`], ok: 0, why: R`$q!=1\times2\times\cdots\times q=k!\times(k+1)\cdots q$ : le quotient est ce produit d'entiers (vide, donc égal à $1$, si $k=q$).` },
    bareme: { sur: 5, l: [[1, R`Hypothèse $\mathrm e=\frac pq$`], [1, R`Encadrement strict via la stricte monotonie`], [1, R`Multiplication par $q\cdot q!$`], [1, R`$q!\,a_q\in\mathbb N$ justifié`], [1, R`Entier entre deux entiers consécutifs : contradiction`]] },
    jury: [
      { e: R`Utiliser des inégalités larges.`, p: R`Pas de contradiction possible : deux points perdus.` },
      { e: R`Affirmer $q!\,a_q\in\mathbb N$ sans justification.`, p: R`Étape clé : point perdu.` }
    ] },
  { declic: R`Pour comparer moyenne géométrique et arithmétique, un carré fait tout le travail : $(\sqrt a-\sqrt b)^2\geqslant0$. La monotonie vient ensuite des deux inégalités $u_n\leqslant v_n$ et de la définition par récurrence.`,
    copie: R`<p>Pour $a,b\geqslant0$ : $(\sqrt a-\sqrt b)^2\geqslant0$ donne $2\sqrt{ab}\leqslant a+b$.</p><p>Par récurrence, tous les $u_n,v_n$ sont $\geqslant0$ : les racines sont définies.</p><p>Pour $n\geqslant1$ : $u_n=\sqrt{u_{n-1}v_{n-1}}\leqslant\frac{u_{n-1}+v_{n-1}}2=v_n$.</p><p>${ph("donc","Donc")} $u_{n+1}=\sqrt{u_nv_n}\geqslant\sqrt{u_n^2}=u_n$ et $v_{n+1}=\frac{u_n+v_n}2\leqslant v_n$.</p><div class="sbox">$$\forall n\geqslant1,\ u_n\leqslant v_n,\quad u_n\leqslant u_{n+1},\quad v_{n+1}\leqslant v_n.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $u_0\leqslant v_0$ : on n'a pas cette hypothèse. Ce n'est vrai qu'à partir du rang $1$.</p><p><b>Premier réflexe :</b> montrer la croissance de $u_n$ par $\frac{u_{n+1}}{u_n}\geqslant1$. Les termes peuvent s'annuler : on compare avec $\sqrt{u_n^2}=u_n$.</p>`,
    trou: { q: R`Pourquoi $u_{n+1}=\sqrt{u_nv_n}\geqslant u_n$ pour $n\geqslant1$ ?`, c: [R`$v_n\geqslant u_n\geqslant0$ donc $u_nv_n\geqslant u_n^2$`, R`$u_n\geqslant v_n$`, R`$u_n\leqslant0$`, R`$v_n\lt1$`], ok: 0, why: R`On multiplie $v_n\geqslant u_n$ par $u_n\geqslant0$ : $u_nv_n\geqslant u_n^2$ ; la racine, croissante, conserve l'inégalité.` },
    bareme: { sur: 5, l: [[1, R`Inégalité des moyennes avec le carré $(\sqrt a-\sqrt b)^2$`], [1, R`Positivité par récurrence`], [1, R`$u_n\leqslant v_n$ pour $n\geqslant1$`], [1, R`$(u_n)$ croissante`], [1, R`$(v_n)$ décroissante`]] },
    jury: [
      { e: R`Affirmer $u_0\leqslant v_0$.`, p: R`Faux si $a>b$ : deux points perdus.` },
      { e: R`Oublier de justifier la positivité avant d'écrire une racine.`, p: R`Racine non définie : point perdu.` }
    ] },
  { declic: R`Les deux suites sont coincées : $u_n$ croît et reste sous $v_1$, $v_n$ décroît et reste au-dessus de $u_1$. Elles convergent donc. Dans la relation $v_{n+1}=\frac{u_n+v_n}2$ on passe à la limite pour égaliser.`,
    copie: R`<p>Pour $n\geqslant1$ : $u_1\leqslant u_n\leqslant v_n\leqslant v_1$.</p><p>${ph("donc","Donc")} $(u_n)$ est croissante majorée par $v_1$ et converge vers $\ell$ ; $(v_n)$ est décroissante minorée par $u_1$ et converge vers $\ell'$.</p><p>${ph("comme","Comme")} $v_{n+1}=\frac{u_n+v_n}2$, le passage à la limite donne $\ell'=\frac{\ell+\ell'}2$, soit $\ell'=\ell$.</p><div class="sbox">$$\lim u_n=\lim v_n=M(a,b).$$</div>`,
    tete: R`<p><b>Piège :</b> passer à la limite dans $v_{n+1}=\frac{u_n+v_n}2$ avant d'avoir montré la convergence des deux suites.</p><p><b>Premier réflexe :</b> invoquer directement les suites adjacentes. L'écart $v_n-u_n\to0$ n'est pas encore connu : c'est justement ce qu'on déduit.</p>`,
    trou: { q: R`Que dit l'égalité $\ell'=\frac{\ell+\ell'}2$ ?`, c: [R`$\ell'=\ell$`, R`$\ell'=2\ell$`, R`$\ell'=0$`, R`$\ell=0$`], ok: 0, why: R`En multipliant par $2$ : $2\ell'=\ell+\ell'$, d'où $\ell'=\ell$.` },
    bareme: { sur: 3, l: [[1, R`Bornes $u_1\leqslant u_n\leqslant v_n\leqslant v_1$`], [1, R`Convergence de $(u_n)$ et $(v_n)$ par limite monotone`], [1, R`Égalité des limites par passage à la limite dans $v_{n+1}$`]] },
    jury: [
      { e: R`Passer à la limite sans avoir établi la convergence.`, p: R`Raisonnement circulaire : deux points perdus.` }
    ] },
  { declic: R`Chaque propriété de $M(a,b)$ se lit sur les suites : cas particuliers $a=b$ et $b=0$, homogénéité par récurrence, encadrement par $u_1$ et $v_1$.`,
    copie: R`<p>Si $a=b$ : $u_1=\sqrt{a^2}=a$, $v_1=a$, et par récurrence $u_n=v_n=a$ : $M(a,a)=a$.</p><p>Si $b=0$ : $u_1=0$, puis $u_{n+1}=\sqrt{u_nv_n}=0$ : $M(a,0)=0$.</p><p>${ph("comme","Comme")} $\sqrt{\lambda^2}=\lambda$ pour $\lambda\geqslant0$, les suites de $(\lambda a,\lambda b)$ sont $\lambda u_n$ et $\lambda v_n$ (récurrence) ; à la limite $M(\lambda a,\lambda b)=\lambda M(a,b)$.</p><p>${ph("donc","Donc")} $u_1\leqslant M\leqslant v_1$ : $\sqrt{ab}\leqslant M(a,b)\leqslant\frac{a+b}2$.</p><p>Pour $(1,2)$ : $u_2\approx1{,}45648\leqslant M\leqslant v_2\approx1{,}45711$.</p><div class="sbox">$$M(a,a)=a,\quad M(a,0)=0,\quad M(\lambda a,\lambda b)=\lambda M(a,b),\quad\sqrt{ab}\leqslant M\leqslant\tfrac{a+b}2.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $\sqrt{\lambda^2}=\lambda$ sans préciser $\lambda\geqslant0$ : pour un réel quelconque, $\sqrt{\lambda^2}=|\lambda|$.</p><p><b>Premier réflexe :</b> chercher une formule explicite pour $M(a,b)$. Elle fait intervenir une intégrale elliptique : hors programme.</p>`,
    trou: { q: R`Pourquoi $M(a,b)\geqslant u_1=\sqrt{ab}$ ?`, c: [R`$(u_n)$ croissante : tous ses termes sont $\leqslant$ sa limite`, R`$(u_n)$ décroissante`, R`$u_1=M$`, R`parce que $a\geqslant b$`], ok: 0, why: R`Pour une suite croissante qui converge, chaque terme est inférieur ou égal à la limite.` },
    bareme: { sur: 5, l: [[1, R`$M(a,a)=a$`], [1, R`$M(a,0)=0$`], [1, R`Homogénéité par récurrence avec $\lambda\geqslant0$`], [1, R`Encadrement $\sqrt{ab}\leqslant M\leqslant\frac{a+b}2$`], [1, R`Application numérique à $M(1,2)$`]] },
    jury: [
      { e: R`Écrire $\sqrt{\lambda^2}=\lambda$ pour $\lambda$ quelconque.`, p: R`Erreur de signe : point perdu.` },
      { e: R`Ne pas justifier l'encadrement par la monotonie.`, p: R`Il faut citer que chaque terme encadre la limite : point perdu.` }
    ] }
], [
  { q: R`Que vaut $(n+1)!$ ?`, c: [R`$(n+1)\,n!$`, R`$n!+1$`, R`$(n+1)+n!$`, R`$n\,(n+1)$`], ok: 0, r: "su-usuel" },
  { q: R`Pour $x,y\geqslant0$, quel lien entre $\sqrt{xy}$ et $\frac{x+y}2$ ?`, c: [R`$\sqrt{xy}\leqslant\frac{x+y}2$`, R`$\sqrt{xy}\geqslant\frac{x+y}2$`, R`$\sqrt{xy}=\frac{x+y}2$`, R`aucun`], ok: 0, r: "su-ineg" },
  { q: R`Que sait-on d'une suite croissante qui converge vers $\ell$ ?`, c: [R`tous ses termes sont $\leqslant\ell$`, R`tous ses termes sont $\geqslant\ell$`, R`elle est stationnaire`, R`$\ell$ est son premier terme`], ok: 0, r: "su-mono" }
]);

/* ---------- su-10 · Suites extraites : convergence, divergence et construction ---------- */
A("su-10", [
  { declic: R`Une suite croissante ne peut que monter : si une extraite converge vers $\ell$, elle ne dépasse jamais $\ell$, donc toute la suite est majorée par $\ell$. La limite monotone conclut.`,
    copie: R`<p>$(u_{2n})$ est croissante (extraite d'une suite croissante) et converge vers $\ell$ : donc $u_{2n}\leqslant\ell$ pour tout $n$.</p><p>${ph("comme","Comme")} $n\leqslant2n$ et $(u_n)$ est croissante, $u_n\leqslant u_{2n}\leqslant\ell$ : $(u_n)$ est majorée.</p><p>${ph("donc","Donc")} $(u_n)$ est croissante et majorée : elle converge, et sa limite est celle de l'extraite, $\ell$.</p><div class="sbox">$$(u_n)\nearrow,\ u_{2n}\to\ell\implies u_n\to\ell.$$</div>`,
    tete: R`<p><b>Piège :</b> croire qu'une suite dont une extraite converge converge toujours. $(-1)^n$ le contredit : la croissance est indispensable.</p><p><b>Premier réflexe :</b> étudier $u_{2n+1}$ séparément. Plus long : une seule majoration suffit pour la limite monotone.</p>`,
    trou: { q: R`Pourquoi $u_n\leqslant u_{2n}$ ?`, c: [R`$n\leqslant2n$ et $(u_n)$ est croissante`, R`$(u_n)$ est décroissante`, R`$u_{2n}$ converge`, R`$n\geqslant2n$`], ok: 0, why: R`La croissance de $(u_n)$ donne $u_a\leqslant u_b$ dès que $a\leqslant b$ ; ici $a=n$ et $b=2n$.` },
    bareme: { sur: 3, l: [[1, R`$u_{2n}\leqslant\ell$ (extraite croissante convergente)`], [1, R`$u_n\leqslant u_{2n}\leqslant\ell$ : majoration`], [1, R`Limite monotone et limite $\ell$`]] },
    jury: [
      { e: R`Conclure sans utiliser la croissance de $(u_n)$.`, p: R`Faux ($(-1)^n$) : zéro à la question.` }
    ] },
  { declic: R`Pour montrer que deux limites sont égales, on cherche une suite qui est extraite de deux manières différentes. $u_{6n}$ est extraite de $(u_{2n})$ et de $(u_{3n})$ ; $u_{6n+3}$ de $(u_{2n+1})$ et de $(u_{3n})$.`,
    copie: R`<p>$u_{6n}=u_{2(3n)}$ est extraite de $(u_{2n})$, donc $u_{6n}\to a$ ; c'est aussi $u_{3(2n)}$, extraite de $(u_{3n})$, donc $\to c$. Par unicité de la limite, $a=c$.</p><p>$u_{6n+3}=u_{2(3n+1)+1}$ est extraite de $(u_{2n+1})$ donc $\to b$ ; c'est aussi $u_{3(2n+1)}$, extraite de $(u_{3n})$ donc $\to c$. ${ph("donc","Donc")} $b=c$.</p><p>${ph("ainsi","Ainsi")} $a=b=c$ : les extraites paire et impaire ont la même limite, $u_n\to a$.</p><p>Chaque hypothèse est nécessaire : $(-1)^n$ sans $(u_{3n})$ ; deux suites de période $6$ pour les deux autres cas.</p><div class="sbox">$$u_{2n}\to a,\ u_{2n+1}\to b,\ u_{3n}\to c\implies a=b=c,\ u_n\to a.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que deux extraites qui couvrent tous les indices suffisent. Il faut que leurs limites soient égales : c'est le rôle de la troisième.</p><p><b>Premier réflexe :</b> prendre $u_{6n}$ sans justifier d'où elle vient. Il faut écrire la composée explicite $\psi(n)=3n$ puis $2n$.</p>`,
    trou: { q: R`De quelle suite $u_{6n+3}$ est-elle extraite pour obtenir $b$ ?`, c: [R`$(u_{2n+1})$, avec $\psi(n)=3n+1$`, R`$(u_{2n})$`, R`$(u_{3n})$ seulement`, R`$(u_{6n})$`], ok: 0, why: R`$6n+3=2(3n+1)+1$ est un indice impair, donc $u_{6n+3}$ est extraite de $(u_{2n+1})$. C'est aussi $u_{3(2n+1)}$, extraite de $(u_{3n})$.` },
    bareme: { sur: 4, l: [[1, R`$a=c$ avec $u_{6n}$ extraite de deux façons`], [1, R`$b=c$ avec $u_{6n+3}$`], [1, R`Conclusion : pairs et impairs de même limite`], [1, R`Contre-exemple pour l'hypothèse sur $(u_{3n})$`]] },
    jury: [
      { e: R`Écrire $u_{6n}$ extraite sans donner la fonction $\psi$.`, p: R`Extraction non justifiée : point perdu.` },
      { e: R`Ne pas fournir de contre-exemple.`, p: R`La question demande d'en justifier la nécessité : point perdu.` }
    ] },
  { declic: R`La somme $\cos(n+1)+\cos(n-1)=2\cos n\cos1$ relie trois termes consécutifs. Si $\cos n\to\ell$, passer à la limite donne $\ell(1-\cos1)=0$ donc $\ell=0$, puis la duplication $\cos2n=2\cos^2n-1$ donne une contradiction.`,
    copie: R`<p>${ph("posons","Supposons")} $\cos n\to\ell$. Alors $\cos(n\pm1)\to\ell$ et $\cos(n+1)+\cos(n-1)=2\cos n\cos1$ donne $2\ell=2\ell\cos1$, soit $\ell(1-\cos1)=0$. ${ph("comme","Comme")} $\cos1\neq1$, $\ell=0$.</p><p>${ph("or","Or")} $\cos2n=2\cos^2n-1\to-1$ ; mais $(\cos2n)$ est extraite de $(\cos n)$ donc tend vers $\ell=0$. Contradiction : $(\cos n)$ diverge.</p><p>Pour $\sin n$ : de même $\ell=0$, puis $\cos n=\frac{\sin(n+1)-\sin n\cos1}{\sin1}\to0$. ${ph("donc","Donc")} $\cos^2n+\sin^2n=1\to0$ : absurde.</p><div class="sbox">$$(\cos n)\ \text{et}\ (\sin n)\ \text{n'ont pas de limite.}$$</div>`,
    tete: R`<p><b>Piège :</b> dire « $n$ est entier donc $\cos n$ prend des valeurs variées, donc diverge ». Ce n'est pas une preuve : il faut une contradiction par les limites.</p><p><b>Premier réflexe :</b> équidistribution de $n$ modulo $2\pi$. Hors programme ; on utilise des identités trigonométriques simples.</p>`,
    trou: { q: R`Pourquoi $\cos1\neq1$ ?`, c: [R`$\cos x=1$ seulement si $x\in2\pi\mathbb Z$, et $0\lt1\lt2\pi$`, R`$\cos1=0$`, R`$\cos$ n'atteint jamais $1$`, R`$1$ est irrationnel`], ok: 0, why: R`Le cosinus vaut $1$ exactement aux multiples de $2\pi$ ; $1$ radian n'en est pas un.` },
    bareme: { sur: 5, l: [[1, R`Hypothèse $\cos n\to\ell$ et passage à la limite dans la somme`], [1, R`$\ell=0$ avec $\cos1\neq1$ justifié`], [1, R`Contradiction par $\cos2n\to-1$`], [1, R`Pour $\sin n$ : $\ell=0$ et $\cos n\to0$`], [1, R`Contradiction avec $\cos^2+\sin^2=1$`]] },
    jury: [
      { e: R`Passer à la limite sans dire que $\cos(n\pm1)$ tend aussi vers $\ell$.`, p: R`Décalage d'indice non justifié : point perdu.` },
      { e: R`Ne pas justifier $\cos1\neq1$.`, p: R`Division par $1-\cos1$ non justifiée : point perdu.` }
    ] },
  { declic: R`Une inégalité vraie pour tous $n$ et $p$ : on choisit $p$ en fonction de $n$ pour tomber sur des indices pairs, puis impairs. Chaque extraite est majorée par une suite qui tend vers $0$.`,
    copie: R`<p>Avec $p=n$ : $0\leqslant u_{2n}\leqslant\frac{2n}{n^2}=\frac2n\to0$. ${ph("donc","Donc")} $u_{2n}\to0$ par gendarmes.</p><p>Avec $p=n+1$ : $0\leqslant u_{2n+1}\leqslant\frac{2n+1}{n(n+1)}\leqslant\frac{2(n+1)}{n(n+1)}=\frac2n\to0$. ${ph("donc","Donc")} $u_{2n+1}\to0$.</p><p>${ph("ainsi","Ainsi")} les deux extraites tendent vers $0$ : $u_n\to0$.</p><div class="sbox">$$u_{2n}\to0,\ u_{2n+1}\to0\implies u_n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> prendre $p=n$ aussi pour les indices impairs : $n+p=2n$ est pair. Il faut $p=n+1$ pour obtenir $2n+1$.</p><p><b>Premier réflexe :</b> fixer $p$ et faire tendre $n$ vers l'infini. La borne $\frac1p$ ne tend alors pas vers $0$.</p>`,
    trou: { q: R`Quelle valeur de $p$ donne $n+p=2n+1$ ?`, c: [R`$p=n+1$`, R`$p=n$`, R`$p=n-1$`, R`$p=2$`], ok: 0, why: R`$n+(n+1)=2n+1$ : on obtient bien un indice impair.` },
    bareme: { sur: 3, l: [[1, R`Indices pairs avec $p=n$ : borne $\frac2n$`], [1, R`Indices impairs avec $p=n+1$ et majoration par $\frac2n$`], [1, R`Pairs et impairs tendent vers $0$ : $u_n\to0$`]] },
    jury: [
      { e: R`Oublier de majorer $\frac{2n+1}{n(n+1)}$ par $\frac2n$.`, p: R`Limite de la borne non justifiée : point perdu.` }
    ] },
  { declic: R`Pour extraire une suite proche des entiers : $u_n\to+\infty$ avec pas qui tendent vers $0$ ne peut pas « sauter » un entier de plus d'un petit $\varepsilon$. On prend le premier terme au-dessus de $n$, et on contrôle de combien il dépasse.`,
    copie: R`<p>${ph("posons","Posons")} $\varphi(1)=\min\{k\geqslant1:u_k\geqslant1\}$ et $\varphi(n)=\min\{k>\varphi(n-1):u_k\geqslant n\}$ ; c'est bien défini car $u_k\to+\infty$. Alors $\delta_n=u_{\varphi(n)}-n\geqslant0$.</p><p>Soit $\varepsilon\in]0,\frac12[$ et $N$ tel que $|u_{k+1}-u_k|\leqslant\varepsilon$ pour $k\geqslant N$.</p><p><b>Cas A</b> ($\varphi(n)-1>\varphi(n-1)$) : $u_{\varphi(n)-1}\lt n$, donc $\delta_n\lt\varepsilon$.</p><p><b>Cas B</b> ($\varphi(n)-1=\varphi(n-1)$) : $\delta_n\leqslant\delta_{n-1}+\varepsilon-1\lt\delta_{n-1}-\frac12$, ce qui force $\delta_{n-1}>\frac12$.</p><p>${ph("donc","Donc")} B ne peut se répéter qu'un nombre fini de fois, puis A s'installe : $\delta_n\lt\varepsilon$ pour $n$ grand.</p><p>${ph("ainsi","Ainsi")} $u_{\varphi(n)}-n\to0$.</p><div class="sbox">$$\exists\varphi\nearrow,\quad u_{\varphi(n)}-n\to0.$$</div>`,
    tete: R`<p><b>Piège :</b> prendre simplement le premier $k$ tel que $u_k\geqslant n$ sans exiger $k>\varphi(n-1)$ : $\varphi$ n'est alors pas strictement croissante.</p><p><b>Premier réflexe :</b> prendre $\varphi(n)$ tel que $u_{\varphi(n)}\in[n,n+1[$. Ce $k$ existe, mais on ne contrôle pas la distance à $n$ : la limite nulle a besoin de l'hypothèse $u_{k+1}-u_k\to0$.</p>`,
    trou: { q: R`Que garantit le choix d'un minimum dans la définition de $\varphi(n)$ ?`, c: [R`le terme précédent $u_{\varphi(n)-1}$ est $\lt n$ (cas A)`, R`$u_{\varphi(n)}=n$`, R`$\varphi$ est décroissante`, R`$u_{\varphi(n)}\leqslant n$`], ok: 0, why: R`Si $\varphi(n)-1$ est un indice admissible ($>\varphi(n-1)$) et n'a pas été choisi, c'est que $u_{\varphi(n)-1}\lt n$ ; le pas $\leqslant\varepsilon$ borne alors le dépassement.` },
    bareme: { sur: 5, l: [[1, R`Construction de $\varphi$ strictement croissante`], [1, R`Cas A : $\delta_n\lt\varepsilon$`], [1, R`Cas B : $\delta_n\lt\delta_{n-1}-\frac12$`], [1, R`Le cas B ne se répète pas indéfiniment`], [1, R`Conclusion $\delta_n\to0$ pour tout $\varepsilon$`]] },
    jury: [
      { e: R`Ne pas imposer $k>\varphi(n-1)$.`, p: R`La suite extraite n'est pas strictement croissante : deux points perdus.` },
      { e: R`Ne pas traiter le cas B.`, p: R`Cas oublié : deux points perdus.` }
    ] }
], [
  { q: R`Que dit-on d'une suite extraite d'une suite qui tend vers $\ell$ ?`, c: [R`elle tend aussi vers $\ell$`, R`elle tend vers $0$`, R`elle est constante`, R`elle diverge`], ok: 0, r: "su-ext" },
  { q: R`Si $(u_{2n})$ et $(u_{2n+1})$ tendent vers la même limite $\ell$, que dit-on de $(u_n)$ ?`, c: [R`$u_n\to\ell$`, R`$(u_n)$ diverge`, R`$u_n$ est monotone`, R`rien`], ok: 0, r: "su-ext" },
  { q: R`Quelle formule donne $\cos2x$ en fonction de $\cos x$ ?`, c: [R`$2\cos^2x-1$`, R`$2\cos x$`, R`$\cos^2x+1$`, R`$1-2\cos x$`], ok: 0, r: "su-usuel" }
]);

/* ---------- su-11 · Négligeabilité et équivalents simples ---------- */
A("su-11", [
  { declic: R`Classer des suites : on compare deux par deux avec le quotient. $u_n\ll v_n$ signifie $\frac{u_n}{v_n}\to0$. On enchaîne ensuite par transitivité.`,
    copie: R`<p>$\dfrac{1/n^2}{\ln n/n^2}=\dfrac1{\ln n}\to0$ : $\frac1{n^2}\ll\frac{\ln n}{n^2}$.</p><p>$\dfrac{\ln n/n^2}{1/(n\ln n)}=\dfrac{(\ln n)^2}n\to0$ : $\frac{\ln n}{n^2}\ll\frac1{n\ln n}$.</p><p>$\dfrac{1/(n\ln n)}{1/n}=\dfrac1{\ln n}\to0$ et $\dfrac{1/n}{\ln n/n}=\dfrac1{\ln n}\to0$.</p><p>${ph("donc","Donc")} par transitivité ($\frac uw=\frac uv\cdot\frac vw\to0$) :</p><div class="sbox">$$\frac1{n^2}\ll\frac{\ln n}{n^2}\ll\frac1{n\ln n}\ll\frac1n\ll\frac{\ln n}n.$$</div>`,
    tete: R`<p><b>Piège :</b> classer par « taille de l'exposant de $n$ » seulement. $\frac{\ln n}{n^2}$ et $\frac1{n\ln n}$ ont des exposants différents mais le logarithme ne suffit pas à compenser l'écart d'un facteur $n$.</p><p><b>Premier réflexe :</b> évaluer chaque suite en $n=10$. Insuffisant pour une asymptotique : on fait des quotients.</p>`,
    trou: { q: R`Que vaut $\frac{(\ln n)^2}n$ quand $n\to+\infty$ ?`, c: [R`il tend vers $0$ (croissances comparées)`, R`il tend vers $+\infty$`, R`il tend vers $1$`, R`il n'a pas de limite`], ok: 0, why: R`Une puissance de $\ln n$ est négligeable devant toute puissance positive de $n$.` },
    bareme: { sur: 4, l: [[1, R`Définition $u_n\ll v_n\iff\frac{u_n}{v_n}\to0$`], [1, R`Quotients calculés pour les quatre couples consécutifs`], [1, R`Croissances comparées citées`], [1, R`Transitivité et classement final`]] },
    jury: [
      { e: R`Classer sans calculer de quotient.`, p: R`Aucune justification : zéro.` },
      { e: R`Ne pas préciser la transitivité.`, p: R`Chaînage non justifié : point perdu.` }
    ] },
  { declic: R`Même méthode : quotients consécutifs. Un logarithme est négligeable devant toute puissance positive de $n$ ; deux suites qui diffèrent d'un facteur $\ln n$ se comparent par $\frac1{\ln n}\to0$.`,
    copie: R`<p>$\dfrac{\sqrt n\ln n}n=\dfrac{\ln n}{\sqrt n}\to0$ : $\sqrt n\ln n\ll n$.</p><p>$\dfrac n{n\ln n}=\dfrac1{\ln n}\to0$ : $n\ll n\ln n$.</p><p>$\dfrac{n\ln n}{n^2/\ln n}=\dfrac{(\ln n)^2}n\to0$ et $\dfrac{n^2/\ln n}{n^2}=\dfrac1{\ln n}\to0$.</p><p>${ph("donc","Donc")}</p><div class="sbox">$$\sqrt n\ln n\ll n\ll n\ln n\ll\frac{n^2}{\ln n}\ll n^2.$$</div>`,
    tete: R`<p><b>Piège :</b> croire que $n\ln n\ll n^2$ est une conséquence immédiate de $\ln n\ll n$ sans calcul. Elle l'est, mais le quotient $\frac{\ln n}n\to0$ doit être cité.</p><p><b>Premier réflexe :</b> placer les suites sur un graphique. On n'obtient que des tendances, pas de limite de quotient.</p>`,
    trou: { q: R`Quelle suite est la plus grande parmi $\frac{n^2}{\ln n}$ et $n^2$ ?`, c: [R`$n^2$, car $\frac{n^2/\ln n}{n^2}=\frac1{\ln n}\to0$`, R`$\frac{n^2}{\ln n}$`, R`elles sont équivalentes`, R`on ne peut pas comparer`], ok: 0, why: R`Le quotient $\frac{n^2/\ln n}{n^2}=\frac1{\ln n}$ tend vers $0$ : la première est négligeable devant la seconde.` },
    bareme: { sur: 3, l: [[1, R`Deux premiers quotients`], [1, R`Deux derniers quotients`], [1, R`Classement final par transitivité`]] },
    jury: [
      { e: R`Classer sans quotient.`, p: R`Résultat non justifié : deux points perdus.` }
    ] },
  { declic: R`Pour un équivalent d'une somme, on met en facteur le terme dominant : $u_n=v_n(1+\varepsilon_n)$ avec $\varepsilon_n\to0$. Les produits, quotients et puissances fixes sont compatibles avec $\sim$.`,
    copie: R`<p>(a) $n+3\ln n=n\big(1+\frac{3\ln n}n\big)\sim n$, donc $u_n\sim n\mathrm e^{-(n+1)}\to0$ (croissances comparées).</p><p>(b) $\ln(n^2+1)=2\ln n\big(1+\frac{\ln(1+1/n^2)}{2\ln n}\big)\sim2\ln n$ et $n+1\sim n$ : $u_n\sim\frac{2\ln n}n\to0$.</p><p>(c) $n^2\pm n+1\sim n^2$ donc $\sqrt{n^2+n+1}\sim n$ et $\sqrt[3]{n^2-n+1}\sim n^{2/3}$. ${ph("donc","Donc")} $u_n\sim n^{1/3}\to+\infty$.</p><div class="sbox">$$\text{a) }\sim\tfrac n{\mathrm e^{n+1}}\to0,\quad\text{b) }\sim\tfrac{2\ln n}n\to0,\quad\text{c) }\sim n^{1/3}\to+\infty.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $\mathrm e^{n+1}\sim\mathrm e^n$ « car $n+1\sim n$ ». Faux : le rapport vaut $\mathrm e$. On ne compose pas un équivalent par l'exponentielle.</p><p><b>Premier réflexe :</b> annuler les termes négligeables « à la main » sans factoriser. Il faut montrer que le facteur restant tend vers $1$.</p>`,
    trou: { q: R`Pourquoi $n+3\ln n\sim n$ ?`, c: [R`$\frac{n+3\ln n}n=1+\frac{3\ln n}n\to1$`, R`parce que $\ln n\to0$`, R`parce que $3\ln n\gg n$`, R`parce que $n\to0$`], ok: 0, why: R`On forme le quotient avec $n$ : il vaut $1+\frac{3\ln n}n$ et $\frac{\ln n}n\to0$.` },
    bareme: { sur: 4, l: [[1, R`(a) Facteur dominant et équivalent $n$`], [1, R`(a) Limite avec croissances comparées`], [1, R`(b) Équivalent du logarithme et conclusion`], [1, R`(c) Racines d'équivalents et limite $+\infty$`]] },
    jury: [
      { e: R`Composer un équivalent par l'exponentielle.`, p: R`Opération interdite : deux points perdus.` },
      { e: R`Ne pas justifier $\sqrt{n^2+n+1}\sim n$.`, p: R`Compatibilité avec la racine à citer : point perdu.` }
    ] },
  { declic: R`Si $b_n\ll a_n$, alors $a_n+b_n=a_n(1+\frac{b_n}{a_n})\sim a_n$. On identifie le terme dominant du numérateur et du dénominateur, puis on divise.`,
    copie: R`<p>(a) $\sqrt{n^2+1}\sim n\ll n^3$ donc $n^3-\sqrt{n^2+1}\sim n^3$. ${ph("comme","Comme")} $\ln n\ll n^2$, $\ln n-2n^2\sim-2n^2$.</p><p>${ph("donc","Donc")} $u_n\sim\frac{n^3}{-2n^2}=-\frac n2\to-\infty$.</p><p>(b) $\ln n\ll n^3$ et $1\ll n^3$ donc $2n^3-\ln n+1\sim2n^3$ ; $n^2+1\sim n^2$. ${ph("ainsi","Ainsi")} $u_n\sim2n\to+\infty$.</p><div class="sbox">$$\text{a) }u_n\sim-\tfrac n2\to-\infty,\qquad\text{b) }u_n\sim2n\to+\infty.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier le signe : le dénominateur dominant est $-2n^2$, d'où une limite $-\infty$.</p><p><b>Premier réflexe :</b> diviser numérateur et dénominateur par $n^3$. Marche aussi, mais produit des termes $\frac{\ln n}{n^3}$ à justifier.</p>`,
    trou: { q: R`Quel est le terme dominant de $\ln n-2n^2$ ?`, c: [R`$-2n^2$`, R`$\ln n$`, R`$2n^2$`, R`$-\ln n$`], ok: 0, why: R`$\frac{\ln n}{n^2}\to0$ donc $\ln n$ est négligeable devant $n^2$ ; le terme dominant garde son signe : $-2n^2$.` },
    bareme: { sur: 4, l: [[1, R`(a) numérateur $\sim n^3$`], [1, R`(a) dénominateur $\sim-2n^2$ et limite $-\infty$`], [1, R`(b) numérateur $\sim2n^3$`], [1, R`(b) quotient et limite $+\infty$`]] },
    jury: [
      { e: R`Perdre le signe du dénominateur.`, p: R`Limite fausse : deux points perdus.` }
    ] },
  { declic: R`Factorielle et exponentielles : on compare par le critère du rapport. $\frac{\mathrm e^n}{n!}\to0$, $\frac{2^n}{3^n}\to0$, puis le quotient est équivalent à $\frac{n!}{3^n}$ dont le rapport tend vers $+\infty$.`,
    copie: R`<p>${ph("posons","Posons")} $x_n=\frac{\mathrm e^n}{n!}>0$ : $\frac{x_{n+1}}{x_n}=\frac{\mathrm e}{n+1}\to0\lt1$ donc $x_n\to0$ et $n!+\mathrm e^n=n!(1+x_n)\sim n!$.</p><p>$\big(\frac23\big)^n\to0$ donc $2^n+3^n=3^n(1+(\frac23)^n)\sim3^n$.</p><p>${ph("donc","Donc")} $u_n\sim\frac{n!}{3^n}$. Avec $y_n=\frac{n!}{3^n}$ : $\frac{y_{n+1}}{y_n}=\frac{n+1}3\to+\infty>1$, donc $y_n\to+\infty$.</p><div class="sbox">$$u_n\sim\frac{n!}{3^n}\to+\infty.$$</div>`,
    tete: R`<p><b>Piège :</b> penser que $\mathrm e^n\gg n!$ « parce qu'une exponentielle gagne ». C'est la factorielle qui gagne.</p><p><b>Premier réflexe :</b> citer la formule de Stirling. Hors programme ; le critère du rapport suffit.</p>`,
    trou: { q: R`Que vaut $\frac{x_{n+1}}{x_n}$ pour $x_n=\frac{\mathrm e^n}{n!}$ ?`, c: [R`$\frac{\mathrm e}{n+1}$`, R`$\frac{n+1}{\mathrm e}$`, R`$\mathrm e(n+1)$`, R`$\frac{\mathrm e^n}{n+1}$`], ok: 0, why: R`$\frac{\mathrm e^{n+1}}{(n+1)!}\cdot\frac{n!}{\mathrm e^n}=\frac{\mathrm e}{n+1}$.` },
    bareme: { sur: 4, l: [[1, R`$\mathrm e^n\ll n!$ par le critère du rapport`], [1, R`$2^n\ll3^n$ et équivalent $3^n$`], [1, R`Quotient $\sim\frac{n!}{3^n}$`], [1, R`Rapport $\frac{n+1}3\to+\infty$ et limite $+\infty$`]] },
    jury: [
      { e: R`Affirmer $n!\gg\mathrm e^n$ sans le justifier.`, p: R`Il faut le rapport : deux points perdus.` }
    ] },
  { declic: R`On ne soustrait pas des équivalents : on calcule d'abord la différence exacte (dénominateur commun ou quantité conjuguée), et seulement ensuite on cherche son équivalent.`,
    copie: R`<p>(a) $\frac1{n-1}-\frac1{n+1}=\frac2{n^2-1}\sim\frac2{n^2}$.</p><p>(b) $\sqrt{n+1}-\sqrt{n-1}=\frac2{\sqrt{n+1}+\sqrt{n-1}}$. ${ph("comme","Comme")} les deux racines sont positives et équivalentes à $\sqrt n$, leur somme est $\sim2\sqrt n$. ${ph("donc","Donc")} la différence $\sim\frac1{\sqrt n}$.</p><p>(c) $\ln(n+1)-\ln n=\ln(1+\frac1n)\sim\frac1n$, donc $\sqrt{\ln(n+1)-\ln n}\sim\frac1{\sqrt n}$.</p><div class="sbox">$$\text{a) }\tfrac2{n^2},\qquad\text{b) }\tfrac1{\sqrt n},\qquad\text{c) }\tfrac1{\sqrt n}.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $\frac1{n-1}\sim\frac1{n+1}$ donc la différence est équivalente à $0$. Un équivalent n'est jamais $0$ : on ne retranche pas des équivalents.</p><p><b>Premier réflexe :</b> développer chaque racine avec une formule du binôme. Le conjugué est plus direct.</p>`,
    trou: { q: R`Pourquoi peut-on additionner $\sqrt{n+1}\sim\sqrt n$ et $\sqrt{n-1}\sim\sqrt n$ ?`, c: [R`les deux termes sont positifs`, R`ils sont décroissants`, R`on peut toujours additionner des équivalents`, R`ils tendent vers $0$`], ok: 0, why: R`La somme d'équivalents n'est licite que pour des termes de même signe (ici positifs) ; sinon des termes dominants peuvent s'annuler.` },
    bareme: { sur: 4, l: [[1, R`(a) différence exacte puis équivalent`], [1, R`(b) quantité conjuguée`], [1, R`(b) somme d'équivalents positifs`], [1, R`(c) $\ln(1+\frac1n)\sim\frac1n$ puis racine`]] },
    jury: [
      { e: R`Soustraire deux équivalents.`, p: R`Opération interdite : deux points perdus.` }
    ] },
  { declic: R`Les équivalents usuels s'appliquent à une suite $x_n\to0$ : $\sin x_n\sim x_n$, $\ln(1+x_n)\sim x_n$, $\mathrm e^{x_n}-1\sim x_n$, $1-\cos x_n\sim\frac{x_n^2}2$. Quand l'argument ne se ramène pas à ces formes, on calcule directement.`,
    copie: R`<p>(a) $x_n=\frac1{\sqrt{n+1}}\to0$ donc $\sin x_n\sim x_n\sim\frac1{\sqrt n}$.</p><p>(b) $\ln\sin\frac1n=-\ln n+\ln\big(n\sin\frac1n\big)$ avec $\ln(n\sin\frac1n)\to0$ : le rapport à $-\ln n$ tend vers $1$, donc $\sim-\ln n$.</p><p>(c) $1-\cos\frac1n\sim\frac1{2n^2}$.</p><p>(d) $n^{1/n}-1=\mathrm e^{x_n}-1$ avec $x_n=\frac{\ln n}n\to0$ : ${ph("donc","donc")} $\sim\frac{\ln n}n$.</p><div class="sbox">$$\text{a) }\tfrac1{\sqrt n},\ \text{b) }-\ln n,\ \text{c) }\tfrac1{2n^2},\ \text{d) }\tfrac{\ln n}n.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $\ln\sin\frac1n\sim\ln\frac1n$ « car $\sin\frac1n\sim\frac1n$ ». On ne passe pas un équivalent au logarithme sans calcul : ici le résultat est vrai, mais il faut le justifier.</p><p><b>Premier réflexe :</b> poser $\sin x\approx x-\frac{x^3}6$. Valable, mais hors programme de Sup pour les équivalents.</p>`,
    trou: { q: R`Quel équivalent utilise-t-on pour $1-\cos\frac1n$ ?`, c: [R`$1-\cos x_n\sim\frac{x_n^2}2$`, R`$1-\cos x_n\sim x_n$`, R`$1-\cos x_n\sim x_n^2$`, R`$1-\cos x_n\sim\frac{x_n}2$`], ok: 0, why: R`Avec $x_n=\frac1n$ on obtient $\frac1{2n^2}$ ; les autres formules ne correspondent pas au développement de $1-\cos$ en $0$.` },
    bareme: { sur: 4, l: [[1, R`(a) $\sin x_n\sim x_n$ et passage à $\frac1{\sqrt n}$`], [1, R`(b) décomposition du logarithme et limite du rapport`], [1, R`(c) $1-\cos x_n\sim\frac{x_n^2}2$`], [1, R`(d) écriture en $\mathrm e^{x_n}-1$`]] },
    jury: [
      { e: R`Passer un équivalent au logarithme sans justification.`, p: R`Opération non licite : deux points perdus.` },
      { e: R`Se tromper de coefficient dans $1-\cos x\sim\frac{x^2}2$.`, p: R`Équivalent faux : point perdu.` }
    ] }
], [
  { q: R`Que signifie $u_n\sim v_n$ ?`, c: [R`$\frac{u_n}{v_n}\to1$`, R`$u_n-v_n\to0$`, R`$u_n=v_n$ à partir d'un rang`, R`$u_n\ll v_n$`], ok: 0, r: "su-equiv" },
  { q: R`Que vaut $\lim\frac{\ln n}n$ ?`, c: [R`$0$`, R`$1$`, R`$+\infty$`, R`$\frac1{\mathrm e}$`], ok: 0, r: "su-usuel" },
  { q: R`Si $x_n\to0$ ($x_n\neq0$), à quoi est équivalent $\ln(1+x_n)$ ?`, c: [R`$x_n$`, R`$x_n^2$`, R`$1+x_n$`, R`$\frac{x_n}2$`], ok: 0, r: "su-equiv" }
]);

/* ---------- su-12 · Équivalents et limites : puissances, sommes et intégrales ---------- */
A("su-12", [
  { declic: R`Un logarithme proche de $\ln(1+x_n)$ avec $x_n\to0$ est équivalent à $x_n$. On compose ensuite avec la racine carrée et on multiplie par $n$ : un produit d'équivalents.`,
    copie: R`<p>$x_n=\frac1{n^2+1}\to0$, donc $\ln(1+x_n)\sim\frac1{n^2+1}\sim\frac1{n^2}$.</p><p>La racine carrée est compatible avec $\sim$ : $\sqrt{\ln(1+x_n)}\sim\frac1n$.</p><p>${ph("donc","Donc")} $u_n\sim n\cdot\frac1n=1$, et une suite équivalente à la constante $1\neq0$ tend vers $1$.</p><div class="sbox">$$\lim n\sqrt{\ln\Big(1+\frac1{n^2+1}\Big)}=1.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $\frac1{n^2+1}\to0$ donc $u_n\to0\times\infty$ « indéterminée, donc non calculable ». Les équivalents lèvent l'indétermination.</p><p><b>Premier réflexe :</b> développer avec Taylor. Un équivalent usuel suffit.</p>`,
    trou: { q: R`Pourquoi $u_n\sim1$ entraîne $u_n\to1$ ?`, c: [R`$\frac{u_n}1\to1$ par définition de $\sim$`, R`parce que $u_n$ est croissante`, R`parce que $u_n\geqslant0$`, R`parce que $n\to+\infty$`], ok: 0, why: R`$u_n\sim1$ signifie $\frac{u_n}{1}\to1$ : c'est exactement $u_n\to1$.` },
    bareme: { sur: 3, l: [[1, R`$\ln(1+x_n)\sim x_n$ avec $x_n\to0$`], [1, R`Racine carrée et produit par $n$`], [1, R`Limite $1$ par équivalent à une constante non nulle`]] },
    jury: [
      { e: R`Écrire $\ln(1+x_n)\sim x_n$ sans dire que $x_n\to0$.`, p: R`Hypothèse manquante : point perdu.` }
    ] },
  { declic: R`Une puissance $n$-ième se réécrit $\mathrm e^{n\ln(\cdot)}$. On ne compose pas un équivalent par l'exponentielle : il faut une <i>limite</i> de l'exposant, puis la continuité de $\exp$.`,
    copie: R`<p>$1+\sin\frac1n>0$ donc $u_n=\exp\big(n\ln(1+\sin\frac1n)\big)$.</p><p>$x_n=\sin\frac1n\to0$ ($x_n\neq0$) : $\ln(1+x_n)\sim x_n\sim\frac1n$. ${ph("donc","Donc")} l'exposant est $\sim n\cdot\frac1n=1$ et tend vers $1$.</p><p>${ph("ainsi","Ainsi")} par continuité de $\exp$, $u_n\to\mathrm e$.</p><div class="sbox">$$\lim\Big(1+\sin\frac1n\Big)^n=\mathrm e.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $u_n\sim\mathrm e^1$ en composant l'équivalent des exposants par $\exp$. Ici l'exposant a une limite : on passe à la limite, ce qui est licite.</p><p><b>Premier réflexe :</b> reconnaître $\big(1+\frac an\big)^n$. Ici $\sin\frac1n\sim\frac1n$ ramène à ce cas, mais le calcul direct est plus sûr.</p>`,
    trou: { q: R`Quelle propriété permet de passer de « l'exposant tend vers $1$ » à « $u_n\to\mathrm e$ » ?`, c: [R`la continuité de $\exp$`, R`la croissance de $\exp$`, R`$\exp$ est équivalente à l'identité`, R`$\exp$ est bornée`], ok: 0, why: R`Si $y_n\to\ell$, la continuité de $\exp$ en $\ell$ donne $\mathrm e^{y_n}\to\mathrm e^\ell$.` },
    bareme: { sur: 4, l: [[1, R`Écriture en exponentielle (avec $1+\sin\frac1n>0$)`], [1, R`$\ln(1+\sin\frac1n)\sim\sin\frac1n$`], [1, R`Équivalent de l'exposant : $\sim1$, donc limite $1$`], [1, R`Continuité de $\exp$ et conclusion $\mathrm e$`]] },
    jury: [
      { e: R`Composer un équivalent par $\exp$.`, p: R`Opération interdite : deux points perdus.` }
    ] },
  { declic: R`Une quantité $\frac{a^b}{c^d}$ : on passe à l'exponentielle et on étudie l'exposant $E_n$. C'est une différence de deux grandeurs proches : on factorise pour séparer le terme dominant.`,
    copie: R`<p>$u_n=\exp(E_n)$, $E_n=\sqrt{n+1}\ln n-\sqrt n\ln(n+1)$.</p><p>Avec $\sqrt{n+1}=\sqrt n\sqrt{1+\frac1n}$ et $\ln(n+1)=\ln n+\ln(1+\frac1n)$ :</p><p>$E_n=\sqrt n\Big[\ln n\big(\sqrt{1+\frac1n}-1\big)-\ln\big(1+\frac1n\big)\Big]$.</p><p>${ph("or","Or")} $\sqrt{1+\frac1n}-1\sim\frac1{2n}$ et $\ln(1+\frac1n)\sim\frac1n\ll\frac{\ln n}{2n}$ : le crochet est $\sim\frac{\ln n}{2n}$.</p><p>${ph("donc","Donc")} $E_n\sim\frac{\ln n}{2\sqrt n}\to0$ et $u_n\to\mathrm e^0=1$.</p><div class="sbox">$$\lim\frac{n^{\sqrt{n+1}}}{(n+1)^{\sqrt n}}=1.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $n^{\sqrt{n+1}}\sim n^{\sqrt n}$ et $(n+1)^{\sqrt n}\sim n^{\sqrt n}$ « donc le rapport vaut $1$ ». On ne passe pas un équivalent en exposant.</p><p><b>Premier réflexe :</b> soustraire deux équivalents de $E_n$. Ils ont même ordre : leur différence doit être calculée exactement.</p>`,
    trou: { q: R`Pourquoi le terme $\ln(1+\frac1n)$ est-il négligeable dans le crochet ?`, c: [R`$\frac{1/n}{\ln n/(2n)}=\frac2{\ln n}\to0$`, R`$\ln(1+\frac1n)\to+\infty$`, R`$\ln(1+\frac1n)=0$`, R`parce que $n\to0$`], ok: 0, why: R`Comparé au terme dominant $\frac{\ln n}{2n}$, $\frac1n$ en est un facteur $\frac2{\ln n}$ qui tend vers $0$.` },
    bareme: { sur: 5, l: [[1, R`$u_n=\mathrm e^{E_n}$`], [1, R`Factorisation de $\sqrt n$ et décomposition de $\ln(n+1)$`], [1, R`Équivalents $\frac1{2n}$ et $\frac1n$`], [1, R`Terme dominant du crochet justifié`], [1, R`$E_n\to0$ et $u_n\to1$`]] },
    jury: [
      { e: R`Passer un équivalent en exposant.`, p: R`Opération interdite : deux points perdus.` },
      { e: R`Soustraire des équivalents sans justifier le terme dominant.`, p: R`Point perdu.` }
    ] },
  { declic: R`Une suite décroissante a deux comportements possibles : elle converge ou elle tend vers $-\infty$. La somme $u_n+u_{n+1}\to0$ élimine le second, et la limite $\ell$ vérifie $2\ell=0$.`,
    copie: R`<p>$u_n+u_{n+1}\sim\frac1n\to0$.</p><p>Si $u_n\to-\infty$, alors $u_n+u_{n+1}\to-\infty\neq0$ : contradiction. ${ph("donc","Donc")} $(u_n)$, décroissante non tendant vers $-\infty$, est minorée et converge vers $\ell$.</p><p>Dans $u_n+u_{n+1}\to0$ on a $2\ell=0$ donc $\ell=0$.</p><p>${ph("ainsi","Ainsi")} $(u_n)$ décroît vers $0$ : $u_n\geqslant0$ pour tout $n$.</p><div class="sbox">$$u_n\to0,\qquad u_n\geqslant0.$$</div>`,
    tete: R`<p><b>Piège :</b> croire qu'une suite décroissante converge toujours. Elle peut tendre vers $-\infty$.</p><p><b>Premier réflexe :</b> poser $u_n\sim\frac c n$ et chercher $c$. On ne sait pas encore que $u_n\to0$ : on le démontre d'abord.</p>`,
    trou: { q: R`Que sait-on d'une suite décroissante qui converge vers $0$ ?`, c: [R`$u_n\geqslant0$ pour tout $n$`, R`$u_n\leqslant0$ pour tout $n$`, R`$u_n=0$ à partir d'un rang`, R`$u_n$ est stationnaire`], ok: 0, why: R`Chaque terme d'une suite décroissante est supérieur ou égal à sa limite.` },
    bareme: { sur: 4, l: [[1, R`$u_n+u_{n+1}\to0$`], [1, R`Exclusion de $-\infty$ : suite minorée`], [1, R`Limite $\ell=0$ par $2\ell=0$`], [1, R`Positivité par décroissance`]] },
    jury: [
      { e: R`Supposer que $(u_n)$ converge sans le justifier.`, p: R`Il faut exclure $-\infty$ : deux points perdus.` }
    ] },
  { declic: R`Pour un équivalent à partir d'une somme, on encadre $u_n$ par la moyenne $\frac{u_n+u_{n+1}}2$ (à gauche) et $\frac{u_{n-1}+u_n}2$ (à droite), grâce à la décroissance. Multipliés par $2n$, les deux bornes tendent vers $1$.`,
    copie: R`<p>${ph("comme","Comme")} $(u_n)$ décroît, $2u_{n+1}\leqslant u_n+u_{n+1}\leqslant2u_n$ ; au rang $n-1$ : $2u_n\leqslant u_{n-1}+u_n$. ${ph("donc","Donc")} $\frac{u_n+u_{n+1}}2\leqslant u_n\leqslant\frac{u_{n-1}+u_n}2$ ($n\geqslant2$).</p><p>En multipliant par $2n$ : $n(u_n+u_{n+1})\leqslant2nu_n\leqslant n(u_{n-1}+u_n)$.</p><p>Les deux bornes tendent vers $1$ ($u_n+u_{n+1}\sim\frac1n$ et $\frac n{n-1}\to1$). ${ph("donc","Donc")} par gendarmes $2nu_n\to1$ : $u_n\sim\frac1{2n}$.</p><div class="sbox">$$u_n\sim\frac1{2n}.$$</div>`,
    tete: R`<p><b>Piège :</b> « $u_n\approx u_{n+1}$ donc $u_n+u_{n+1}\sim2u_n$ ». C'est ce qu'on veut démontrer ; sans décroissance et encadrement, rien n'autorise de remplacer $u_{n+1}$ par $u_n$.</p><p><b>Premier réflexe :</b> invoquer $u_{n+1}\sim u_n$. Ce n'est pas donné.</p>`,
    trou: { q: R`Pourquoi $2u_{n+1}\leqslant u_n+u_{n+1}$ ?`, c: [R`$u_{n+1}\leqslant u_n$ (décroissance)`, R`$u_{n+1}\geqslant u_n$`, R`$u_n\geqslant0$ seulement`, R`$u_n\to0$`], ok: 0, why: R`En ajoutant $u_{n+1}$ aux deux membres de $u_{n+1}\leqslant u_n$ on obtient $2u_{n+1}\leqslant u_n+u_{n+1}$.` },
    bareme: { sur: 4, l: [[1, R`Encadrement des deux sommes par décroissance`], [1, R`Multiplication par $2n>0$`], [1, R`Limites des bornes égales à $1$`], [1, R`Gendarmes et conclusion $u_n\sim\frac1{2n}$`]] },
    jury: [
      { e: R`Supposer $u_{n+1}\sim u_n$ sans le démontrer.`, p: R`Hypothèse non fournie : deux points perdus.` }
    ] },
  { declic: R`Une somme de factorielles : le dernier terme $n!$ domine. On divise par $n!$ et on majore le reste par $\frac1n$ : chacun des $n-1$ termes restants est au plus $(n-2)!$.`,
    copie: R`<p>$\frac{u_n}{n!}=1+\frac1n+R_n$ avec $R_n=\sum_{k=0}^{n-2}\frac{k!}{n!}\geqslant0$.</p><p>Pour $k\leqslant n-2$, $k!\leqslant(n-2)!$ ; il y a $n-1$ termes : $R_n\leqslant\frac{(n-1)(n-2)!}{n!}=\frac1n$.</p><p>${ph("donc","Donc")} $1\leqslant\frac{u_n}{n!}\leqslant1+\frac2n\to1$ : par gendarmes $\frac{u_n}{n!}\to1$.</p><div class="sbox">$$\sum_{k=0}^nk!\sim n!.$$</div>`,
    tete: R`<p><b>Piège :</b> majorer chaque $k!$ par $(n-1)!$ : $n$ termes donne $n\,(n-1)!=n!$, la borne n'est plus petite.</p><p><b>Premier réflexe :</b> sommer terme à terme. Il n'y a pas de formule : on encadre.</p>`,
    trou: { q: R`Quelle majoration de $\frac{(n-1)(n-2)!}{n!}$ obtient-on ?`, c: [R`$\frac1n$`, R`$1$`, R`$\frac1{n-1}$`, R`$n$`], ok: 0, why: R`$(n-1)(n-2)!=(n-1)!$ et $\frac{(n-1)!}{n!}=\frac1n$.` },
    bareme: { sur: 3, l: [[1, R`Séparation $1+\frac1n+R_n$`], [1, R`Majoration de $R_n$ par $\frac1n$`], [1, R`Gendarmes et conclusion`]] },
    jury: [
      { e: R`Se tromper dans le nombre de termes.`, p: R`La borne devient fausse : deux points perdus.` }
    ] },
  { declic: R`Pour la somme d'équivalents, on écrit chaque suite comme $v_n(1+a_n)$ avec $a_n\to0$, puis on majore l'erreur par $(v_n+t_n)c_n$. La positivité sert à majorer sans perdre de signe.`,
    copie: R`<p>$u_n=v_n(1+a_n)$ et $w_n=t_n(1+b_n)$ avec $a_n,b_n\to0$. Alors $u_n+w_n=(v_n+t_n)+(v_na_n+t_nb_n)$.</p><p>${ph("posons","Posons")} $c_n=\max(|a_n|,|b_n|)\to0$. ${ph("comme","Comme")} $v_n,t_n>0$ : $|v_na_n+t_nb_n|\leqslant(v_n+t_n)c_n$.</p><p>${ph("donc","Donc")} $\frac{u_n+w_n}{v_n+t_n}=1+\frac{v_na_n+t_nb_n}{v_n+t_n}\to1$.</p><p>Sans positivité : $n+1\sim n$ et $-n\sim-n$ mais $(n+1)-n=1\not\sim0$.</p><div class="sbox">$$u_n\sim v_n,\ w_n\sim t_n,\ >0\implies u_n+w_n\sim v_n+t_n.$$</div>`,
    tete: R`<p><b>Piège :</b> sommer des équivalents de signes opposés : les termes dominants peuvent se compenser.</p><p><b>Premier réflexe :</b> citer « on peut additionner des équivalents ». Ce n'est vrai que sous une hypothèse de signe, qui est justement l'objet de la question.</p>`,
    trou: { q: R`À quoi sert l'hypothèse $v_n,t_n>0$ dans la majoration ?`, c: [R`$v_n|a_n|+t_n|b_n|\leqslant(v_n+t_n)c_n$ sans valeur absolue sur $v_n$, $t_n$`, R`à avoir $c_n=0$`, R`à rendre $a_n$ positif`, R`à éviter que $a_n\to0$`], ok: 0, why: R`Avec $v_n,t_n>0$, $|v_na_n|=v_n|a_n|$ : on peut majorer par $v_nc_n$ et sommer sans signes.` },
    bareme: { sur: 4, l: [[1, R`Écriture $v_n(1+a_n)$ et $t_n(1+b_n)$`], [1, R`Majoration de l'erreur par $(v_n+t_n)c_n$`], [1, R`Quotient $\to1$`], [1, R`Contre-exemple sans positivité`]] },
    jury: [
      { e: R`Ne pas utiliser la positivité dans la majoration.`, p: R`Inégalité non justifiée : deux points perdus.` }
    ] },
  { declic: R`Une intégrale d'un quotient sur $[n^2,n^3]$ : on encadre l'intégrande par $\frac1{t^2}$ et $\frac1{(1+n^{-4})t^2}$, dont on connaît les primitives.`,
    copie: R`<p>Pour $t\geqslant n^2$ : $1+t^2\geqslant t^2$, donc $\frac1{1+t^2}\leqslant\frac1{t^2}$ et $I_n\leqslant\frac1{n^2}-\frac1{n^3}\leqslant\frac1{n^2}$.</p><p>De plus $1\leqslant\frac{t^2}{n^4}$ donc $1+t^2\leqslant t^2(1+n^{-4})$ et $I_n\geqslant\frac1{1+n^{-4}}\big(\frac1{n^2}-\frac1{n^3}\big)$.</p><p>${ph("donc","Donc")} $\frac{1-1/n}{1+n^{-4}}\leqslant n^2I_n\leqslant1$ ; la borne de gauche tend vers $1$.</p><p>${ph("ainsi","Ainsi")} par gendarmes $n^2I_n\to1$.</p><div class="sbox">$$\int_{n^2}^{n^3}\frac{\mathrm dt}{1+t^2}\sim\frac1{n^2}.$$</div>`,
    tete: R`<p><b>Piège :</b> « $\frac1{1+t^2}\sim\frac1{t^2}$ donc les intégrales sont équivalentes » : l'équivalent des intégrandes sur un intervalle qui dépend de $n$ doit être justifié par un encadrement uniforme.</p><p><b>Premier réflexe :</b> primitiver avec $\arctan$ : $\arctan n^3-\arctan n^2$, puis un développement. Beaucoup plus lourd.</p>`,
    trou: { q: R`Que vaut $\int_{n^2}^{n^3}\frac{\mathrm dt}{t^2}$ ?`, c: [R`$\frac1{n^2}-\frac1{n^3}$`, R`$\frac1{n^3}-\frac1{n^2}$`, R`$\ln n$`, R`$\frac1{n^2}+\frac1{n^3}$`], ok: 0, why: R`Une primitive de $\frac1{t^2}$ est $-\frac1t$ : on obtient $-\frac1{n^3}+\frac1{n^2}$.` },
    bareme: { sur: 4, l: [[1, R`Majoration $\frac1{1+t^2}\leqslant\frac1{t^2}$ et valeur de l'intégrale`], [1, R`Minoration avec $1+t^2\leqslant t^2(1+n^{-4})$`], [1, R`Encadrement de $n^2I_n$`], [1, R`Gendarmes et équivalent`]] },
    jury: [
      { e: R`Dire « équivalent des intégrandes donc des intégrales » sans encadrement.`, p: R`Justification absente : deux points perdus.` }
    ] }
], [
  { q: R`Pour $x_n\to0$, $x_n\neq0$, à quoi est équivalent $\sqrt{1+x_n}-1$ ?`, c: [R`$\frac{x_n}2$`, R`$x_n$`, R`$\frac{x_n^2}2$`, R`$2x_n$`], ok: 0, r: "su-equiv" },
  { q: R`Peut-on composer un équivalent par l'exponentielle ?`, c: [R`non : $x_n\sim y_n$ n'entraîne pas $\mathrm e^{x_n}\sim\mathrm e^{y_n}$`, R`oui, toujours`, R`oui, si $x_n>0$`, R`oui, si $x_n\to0$ seulement`], ok: 0, r: "su-equiv" },
  { q: R`Si $(u_n)$ est décroissante, que fait-elle ?`, c: [R`converge ou tend vers $-\infty$`, R`converge toujours`, R`tend toujours vers $0$`, R`est bornée`], ok: 0, r: "su-mono" }
]);

})();

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

})();

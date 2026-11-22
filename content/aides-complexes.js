/* Aides à la rédaction écrites à la main pour les khôlles « complexes » (cx-01 à cx-10).
   Mêmes champs que le pilote (cx-05) : declic, copie, tete, trou, bareme, jury ; prereq sur l'exercice.
   Les indices gradués (hs) sont construits automatiquement à partir de l'indice et du corrigé. */
(() => {
const R = String.raw;
const ph = (id, t) => `<span data-ph="${id}">${t}</span>`;
const A = (id, steps, prereq) => {
  const e = LEMME.EXERCISES.find(x => x.id === id); if (!e) return;
  e.pilote = true; if (prereq) e.prereq = prereq;
  steps.forEach((o, i) => { if (o && e.steps[i]) Object.assign(e.steps[i], o); });
};

/* ---------- cx-01 · Conjugué et module : premiers lieux géométriques ---------- */
A("cx-01", [
  { declic: R`L'hypothèse $|z|=1$ n'a de prise que par $z\bar z=1$, donc par le conjugué. Et « imaginaire pur » se teste par $\bar w=-w$ : on calcule $\bar w$ et on compare à $w$.`,
    copie: R`<p>Soit $z\in\mathbb U$, $z\neq1$, et $w=\dfrac{z+1}{z-1}$ (bien défini car $z\neq1$).</p><p>${ph("or", "Or")} $|z|=1$, ${ph("donc", "donc")} $z\bar z=1$ et $\bar z=\dfrac1z$ (on a $z\neq0$).</p><p>Le conjugué d'un quotient est le quotient des conjugués :</p>$$\bar w=\frac{\bar z+1}{\bar z-1}=\frac{\frac1z+1}{\frac1z-1}=\frac{1+z}{1-z}=-w.$$<p>${ph("ainsi", "Ainsi")} $\bar w=-w$, c'est-à-dire $w\in i\mathbb R$.</p><div class="sbox">$$\forall z\in\mathbb U\setminus\{1\},\ \frac{z+1}{z-1}\in i\mathbb R.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> écrire $z=a+ib$ avec $a^2+b^2=1$ et tout développer. Ça aboutit, mais il faut rationaliser puis simplifier à l'aide de la contrainte : long et risqué.</p><p><b>Piège :</b> conjuguer sans dire pourquoi $\bar z=\frac1z$. Sans $z\bar z=1$, le calcul ne démarre pas.</p>`,
    trou: { q: R`Un complexe $w$ est imaginaire pur si et seulement si :`, c: [R`$w=\bar w$`, R`$\bar w=-w$`, R`$|w|=1$`, R`$w^2>0$`], ok: 1, why: R`Avec $w=a+ib$ : $\bar w=-w\iff a-ib=-a-ib\iff a=0$. L'égalité $w=\bar w$ caractérise au contraire les réels.` },
    bareme: { sur: 4, l: [[1, R`Hypothèse traduite : $z\bar z=1$, donc $\bar z=\frac1z$`], [1, R`Critère $\bar w=-w$ pour un imaginaire pur`], [1, R`Calcul du conjugué sans erreur`], [1, R`Conclusion rédigée`]] },
    jury: [
      { e: R`Poser $z=a+ib$ et ne jamais utiliser $|z|=1$.`, p: R`Calcul interminable, souvent faux : la contrainte $a^2+b^2=1$ n'est pas exploitée.` },
      { e: R`Oublier de dire que $z\neq1$ pour que le quotient existe.`, p: R`Point de rigueur perdu sur la ligne « bien défini ».` }
    ] },
  { declic: R`« Imaginaire pur » : on donne un nom au réel, $\frac{z+1}{z-1}=it$, puis on isole $z$. Une fois $z$ écrit comme un quotient, le module se calcule sans effort.`,
    copie: R`<p>Soit $z\neq1$ tel que $\dfrac{z+1}{z-1}\in i\mathbb R$. ${ph("posons", "Posons")} $t\in\mathbb R$ tel que $\dfrac{z+1}{z-1}=it$.</p><p>${ph("donc", "Donc")} $z+1=it(z-1)$, soit $z(1-it)=-(1+it)$. ${ph("comme", "Comme")} $t$ est réel, $1-it\neq0$ (partie réelle $1$), ${ph("donc", "donc")} $z=-\dfrac{1+it}{1-it}$.</p><p>Le module d'un quotient est le quotient des modules :</p>$$|z|=\frac{|1+it|}{|1-it|}=\frac{\sqrt{1+t^2}}{\sqrt{1+t^2}}=1.$$<p>${ph("ainsi", "Ainsi")} $|z|=1$.</p><div class="sbox">$$\text{Pour }z\neq1:\ \frac{z+1}{z-1}\in i\mathbb R\iff|z|=1.$$</div>`,
    tete: R`<p><b>Piège :</b> répondre « c'est la réciproque de la question 1 ». La question 1 donne $|z|=1\Rightarrow$ imaginaire pur ; on demande l'implication inverse, qu'il faut démontrer.</p><p><b>Piège :</b> diviser par $1-it$ sans dire qu'il est non nul.</p>`,
    trou: { q: R`Pour $t\in\mathbb R$, pourquoi a-t-on $1-it\neq0$ ?`, c: [R`Parce que $t\neq0$`, R`Parce que sa partie réelle vaut $1$`, R`Parce que $|t|=1$`, R`Parce que $t$ est imaginaire`], ok: 1, why: R`Le nombre $1-it$ a pour partie réelle $1\neq0$ : il n'est jamais nul, quelle que soit la valeur de $t$ (même pour $t=0$ il vaut $1$).` },
    bareme: { sur: 3, l: [[1, R`Traduction de l'hypothèse : $\frac{z+1}{z-1}=it$ avec $t$ réel`], [1, R`Isolation de $z$ avec justification de $1-it\neq0$`], [1, R`Calcul du module et conclusion`]] },
    jury: [
      { e: R`Se contenter de dire que c'est la réciproque de la question 1.`, p: R`Aucun point : une réciproque se démontre.` },
      { e: R`Diviser par $1-it$ sans justifier qu'il est non nul.`, p: R`Étape non justifiée : point de rigueur perdu.` }
    ] },
  { declic: R`Une égalité entre deux nombres positifs : on élève au carré. Et $|z+1|^2$ se développe avec $w\bar w$ ; tout se simplifie et il reste $\mathrm{Re}(z)=|z|$.`,
    copie: R`<p>Soit $z\in\mathbb C$. ${ph("reconnait", "On reconnaît")} un carré de module : $|z+1|^2=(z+1)(\bar z+1)=z\bar z+z+\bar z+1=|z|^2+2\,\mathrm{Re}(z)+1$.</p><p>${ph("comme", "Comme")} $|z+1|$ et $|z|+1$ sont positifs, $|z+1|=|z|+1\iff|z+1|^2=(|z|+1)^2\iff\mathrm{Re}(z)=|z|$.</p><p>${ph("posons", "Posons")} $z=a+ib$ : $a=\sqrt{a^2+b^2}$ impose $a\geqslant0$, puis $a^2=a^2+b^2$, soit $b=0$. ${ph("reciproq", "Réciproquement")}, si $z=a\geqslant0$, alors $\mathrm{Re}(z)=a=|z|$.</p><div class="sbox">$$|z+1|=|z|+1\iff z\in\mathbb R_+.$$</div>`,
    tete: R`<p><b>Piège :</b> élever au carré sans dire que les deux membres sont positifs. Sans cela, on n'a qu'une implication, pas une équivalence.</p><p><b>Piège :</b> oublier la réciproque : $a^2=a^2+b^2$ donne $b=0$, mais pas encore le signe de $a$.</p>`,
    trou: { q: R`Le passage de $|z+1|=|z|+1$ à l'égalité des carrés est une équivalence parce que :`, c: [R`les deux membres sont positifs`, R`$z$ est réel`, R`les deux membres sont non nuls`, R`$|z|=1$`], ok: 0, why: R`Sur $\mathbb R_+$, la fonction carré est injective : $x^2=y^2\iff x=y$ si $x,y\geqslant0$. Sur $\mathbb R$ on aurait seulement $x=\pm y$.` },
    bareme: { sur: 4, l: [[1, R`Développement de $|z+1|^2$`], [1, R`Passage aux carrés justifié par la positivité`], [1, R`Résolution de $\mathrm{Re}(z)=|z|$ avec la condition $a\geqslant0$`], [1, R`Réciproque et conclusion $z\in\mathbb R_+$`]] },
    jury: [
      { e: R`Élever au carré sans mentionner la positivité des deux membres.`, p: R`Équivalence non justifiée : point de rigueur perdu.` },
      { e: R`Ne pas traiter la réciproque.`, p: R`Résolution partielle : en général la moitié des points de la question.` }
    ] },
  { declic: R`L'énoncé est de la forme « $z'=\lambda z$ » : on pose $x=\frac{z'}z$ pour se ramener à $z=1$, c'est-à-dire exactement à la question précédente. Elle n'était pas isolée : elle sert ici.`,
    copie: R`<p><b>($\Leftarrow$)</b> Si $z'=\lambda z$ avec $\lambda\geqslant0$ : $|z+z'|=|1+\lambda|\,|z|=(1+\lambda)|z|$ et $|z|+|z'|=|z|+\lambda|z|=(1+\lambda)|z|$. Les deux sont égaux.</p><p><b>($\Rightarrow$)</b> ${ph("posons", "Posons")} $x=\dfrac{z'}z$ (possible car $z\neq0$). L'hypothèse s'écrit $|z|\,|1+x|=|z|\,(1+|x|)$, ${ph("donc", "donc")} $|1+x|=1+|x|$ en divisant par $|z|>0$.</p><p>${ph("parlaq", "D'après la question 3")} appliquée à $x$, $x\in\mathbb R_+$. ${ph("ainsi", "Ainsi")} $z'=\lambda z$ avec $\lambda=x\geqslant0$.</p><div class="sbox">$$|z+z'|=|z|+|z'|\iff\exists\lambda\in\mathbb R_+,\ z'=\lambda z.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> passer en forme exponentielle, $z=re^{i\alpha}$ et $z'=r'e^{i\beta}$. Ça marche, mais c'est plus lourd que d'utiliser la question 3.</p><p><b>Piège :</b> oublier que $z'$ peut être nul : l'énoncé impose seulement $z\neq0$, et $\lambda=0$ est permis.</p>`,
    trou: { q: R`Pourquoi peut-on poser $x=\dfrac{z'}z$ ?`, c: [R`Parce que $z'\neq0$`, R`Parce que $z\neq0$`, R`Parce que $|z|=1$`, R`Parce que $z'$ est réel`], ok: 1, why: R`On divise par $z$, et l'énoncé impose $z\in\mathbb C^*$. Aucune hypothèse sur $z'$ : il peut être nul (alors $\lambda=0$).` },
    bareme: { sur: 4, l: [[1, R`Sens $\Leftarrow$ : calcul des deux membres`], [1, R`Division par $z\neq0$ et réduction à $|1+x|=1+|x|$`], [1, R`Appel à la question 3 pour le nombre $x=\frac{z'}z$`], [1, R`Conclusion $\lambda=x\geqslant0$`]] },
    jury: [
      { e: R`Appliquer la question 3 sans préciser à quel nombre (ici $x=\frac{z'}z$).`, p: R`Utilisation d'un résultat mal référencée : point perdu.` },
      { e: R`Ne traiter qu'un seul sens.`, p: R`Une équivalence demande les deux sens : la moitié des points manque.` }
    ] },
  { declic: R`$z+\bar z$ est le réel $2\mathrm{Re}(z)$ et $|z|$ un réel positif : on passe en coordonnées $a+ib$ pour comparer, puis on reconnaît la figure.`,
    copie: R`<p>${ph("posons", "Posons")} $z=a+ib$ ($a,b\in\mathbb R$). L'équation devient $2a=\sqrt{a^2+b^2}$.</p><p>Elle impose $a\geqslant0$. ${ph("comme", "Comme")} les deux membres sont alors positifs, elle équivaut à $4a^2=a^2+b^2$, soit $b^2=3a^2$, soit $b=\pm\sqrt3\,a$.</p><p>${ph("ainsi", "Ainsi")} l'ensemble est $\{a+ia\sqrt3,\ a\geqslant0\}\cup\{a-ia\sqrt3,\ a\geqslant0\}$.</p><div class="sbox">Deux demi-droites d'origine $O$, d'angles polaires $\dfrac\pi3$ et $-\dfrac\pi3$.</div>`,
    tete: R`<p><b>Piège :</b> garder $b=\pm\sqrt3\,a$ pour tout réel $a$ : on obtient deux droites entières, alors que la condition $a\geqslant0$ ne laisse que deux demi-droites.</p><p><b>Piège :</b> écrire $|z|=a^2+b^2$ (oubli de la racine carrée).</p>`,
    trou: { q: R`L'ensemble des points $(a,\sqrt3\,a)$ avec $a\geqslant0$ est :`, c: [R`une droite entière`, R`une demi-droite d'origine $O$ d'angle polaire $\frac\pi3$`, R`un cercle de rayon $\sqrt3$`, R`un segment`], ok: 1, why: R`$(a,\sqrt3\,a)=a\,(1,\sqrt3)$ avec $a\geqslant0$ : ce sont les multiples positifs du vecteur $(1,\sqrt3)$, d'angle polaire $\arctan\sqrt3=\frac\pi3$.` },
    bareme: { sur: 3, l: [[1, R`Traduction $2a=\sqrt{a^2+b^2}$`], [1, R`Condition $a\geqslant0$, puis équivalence avec les carrés`], [1, R`Description géométrique exacte : deux demi-droites`]] },
    jury: [
      { e: R`Oublier la condition $a\geqslant0$ et tracer deux droites.`, p: R`Ensemble faux : une partie des points ne vérifie pas l'équation.` },
      { e: R`Élever au carré sans discuter le signe.`, p: R`Même sanction qu'en question 3 : équivalence non justifiée.` }
    ] },
  { declic: R`« Alignés » se traduit par « un quotient est réel » : $\frac{c-a}{b-a}\in\mathbb R$. Un quotient est réel si la partie imaginaire de (numérateur $\times$ conjugué du dénominateur) est nulle.`,
    copie: R`<p>${ph("distinguons", "Distinguons deux cas")}.</p><p>Si $z=i$, alors $M=I$ : deux points sont confondus, les trois sont alignés.</p><p>Si $z\neq i$, $I$, $M$, $M'$ sont alignés si et seulement si $Q=\dfrac{iz-i}{z-i}\in\mathbb R$. ${ph("posons", "Posons")} $z=x+iy$. On a $Q=\dfrac{(iz-i)\,\overline{(z-i)}}{|z-i|^2}$ avec un dénominateur réel strictement positif, ${ph("donc", "donc")} $Q\in\mathbb R\iff\mathrm{Im}\big((iz-i)\overline{(z-i)}\big)=0$.</p><p>Or $iz-i=-y+i(x-1)$ et $\overline{z-i}=x-i(y-1)$, d'où $\mathrm{Im}=x(x-1)+y(y-1)$ et</p>$$x^2-x+y^2-y=0\iff\Big(x-\tfrac12\Big)^2+\Big(y-\tfrac12\Big)^2=\tfrac12.$$<p>${ph("ainsi", "Ainsi")} le lieu est un cercle ; il passe par $I(0,1)$, donc le cas $z=i$ est déjà inclus.</p><div class="sbox">$$\text{Lieu de }M:\ \text{cercle de centre }\Omega\Big(\frac{1+i}2\Big),\ \text{rayon }\frac1{\sqrt2}.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier le cas $M=I$ : on divise par $z-i$, qui est nul pour $z=i$. Ici le point est finalement dans le cercle, mais il faut le dire.</p><p><b>Piège :</b> écrire « alignés $\iff Q=0$ » : il suffit que $Q$ soit <i>réel</i>, pas nul.</p>`,
    trou: { q: R`Trois points $A(a)$, $B(b)$, $C(c)$ avec $A\neq B$ sont alignés si et seulement si :`, c: [R`$\dfrac{c-a}{b-a}\in\mathbb R$`, R`$\dfrac{c-a}{b-a}\in i\mathbb R$`, R`$\dfrac{c-a}{b-a}=1$`, R`$|c-a|=|b-a|$`], ok: 0, why: R`$C$ est sur $(AB)$ si et seulement si $\overrightarrow{AC}=\lambda\overrightarrow{AB}$ avec $\lambda$ réel, c'est-à-dire $\frac{c-a}{b-a}=\lambda\in\mathbb R$. Un quotient imaginaire pur traduirait au contraire des droites perpendiculaires.` },
    bareme: { sur: 5, l: [[1, R`Cas $M=I$ traité à part`], [1, R`Alignement traduit par $Q\in\mathbb R$`], [1, R`Partie imaginaire calculée sans erreur`], [1, R`Équation du cercle mise sous forme canonique`], [1, R`Conclusion : centre, rayon, et $I$ appartient au cercle`]] },
    jury: [
      { e: R`Diviser par $z-i$ sans traiter $z=i$.`, p: R`Cas oublié : point de rigueur perdu.` },
      { e: R`Erreur de signe dans la partie imaginaire du produit.`, p: R`Le cercle obtenu est faux : la fin de la question est en général comptée fausse.` }
    ] },
  { declic: R`Multiplier par $i=e^{i\pi/2}$ : c'est la rotation d'angle $\frac\pi2$. Une rotation envoie un cercle sur un cercle de même rayon : il suffit de suivre le centre.`,
    copie: R`<p>${ph("comme", "Comme")} $i=e^{i\pi/2}$, l'application $z\mapsto iz$ est la rotation de centre $O$ et d'angle $\frac\pi2$ ; elle conserve les distances.</p><p>${ph("donc", "Donc")} l'image du cercle de centre $\Omega$ et de rayon $\frac1{\sqrt2}$ est le cercle de même rayon, centré en l'image de $\Omega$, d'affixe $i\times\dfrac{1+i}2=\dfrac{-1+i}2$.</p><div class="sbox">$$\text{Lieu de }M':\ \text{cercle de centre }\Omega'\Big(\frac{-1+i}2\Big),\ \text{rayon }\frac1{\sqrt2}.$$</div>`,
    tete: R`<p><b>Piège :</b> refaire un calcul de lieu avec $z'=iz$ : possible, mais long. Le geste à faire est de reconnaître la rotation.</p><p><b>Piège :</b> garder le même centre $\Omega$ : seul $O$ est fixe, le centre tourne comme tous les autres points.</p>`,
    trou: { q: R`Multiplier par $i$ revient à :`, c: [R`une symétrie par rapport à l'axe réel`, R`une rotation de centre $O$ et d'angle $\frac\pi2$`, R`une homothétie de rapport $i$`, R`une translation de vecteur $i$`], ok: 1, why: R`$|iz|=|z|$ et $\arg(iz)=\arg z+\frac\pi2$ : le module est conservé, l'argument augmente de $\frac\pi2$.` },
    bareme: { sur: 3, l: [[1, R`Reconnaissance de la rotation de centre $O$ et d'angle $\frac\pi2$`], [1, R`Image d'un cercle : même rayon, centre image`], [1, R`Affixe du nouveau centre calculée juste`]] },
    jury: [
      { e: R`Garder le centre $\Omega$ pour le lieu de $M'$.`, p: R`Résultat faux : le centre est tourné lui aussi.` },
      { e: R`Ne pas préciser le rayon.`, p: R`Réponse incomplète.` }
    ] }
], [
  { q: R`Pour $z\in\mathbb C$, le produit $z\bar z$ vaut :`, c: [R`$|z|^2$`, R`$|z|$`, R`$z^2$`, R`$2\,\mathrm{Re}(z)$`], ok: 0, r: "cx-module" },
  { q: R`Le conjugué de $\dfrac ab$ ($b\neq0$) est :`, c: [R`$\dfrac{\bar a}{\bar b}$`, R`$\dfrac{\bar b}{\bar a}$`, R`$-\dfrac ab$`, R`$\dfrac a{\bar b}$`], ok: 0, r: "cx-conj" },
  { q: R`Un complexe $w$ est réel si et seulement si :`, c: [R`$w=\bar w$`, R`$w=-\bar w$`, R`$|w|=1$`, R`$w^2=1$`], ok: 0, r: "cx-reel" }
]);

/* ---------- cx-02 · Identité du parallélogramme et inégalités sur les modules ---------- */
A("cx-02", [
  { declic: R`Deux carrés de modules : on les développe avec $|w|^2=w\bar w$. Les termes croisés ont des signes opposés dans $|z_1+z_2|^2$ et $|z_1-z_2|^2$ : ils vont s'annuler quand on additionne.`,
    copie: R`<p>Soient $z_1,z_2\in\mathbb C$. Avec $|w|^2=w\bar w$ et $\overline{z_1\pm z_2}=\bar z_1\pm\bar z_2$ :</p>$$|z_1+z_2|^2=|z_1|^2+z_1\bar z_2+\bar z_1z_2+|z_2|^2,\qquad|z_1-z_2|^2=|z_1|^2-z_1\bar z_2-\bar z_1z_2+|z_2|^2.$$<p>${ph("donc", "Donc")}, en additionnant, les termes croisés s'annulent :</p><div class="sbox">$$|z_1+z_2|^2+|z_1-z_2|^2=2|z_1|^2+2|z_2|^2.$$</div><p><b>Interprétation.</b> Dans le parallélogramme $0,\,z_1,\,z_1+z_2,\,z_2$, la somme des carrés des diagonales est égale à la somme des carrés des quatre côtés.</p>`,
    tete: R`<p><b>Piège :</b> écrire $|z_1+z_2|^2=|z_1|^2+|z_2|^2$. Le double produit $2\,\mathrm{Re}(z_1\bar z_2)$ manque.</p><p><b>Piège :</b> développer $(z_1+z_2)^2$ au lieu de $(z_1+z_2)(\bar z_1+\bar z_2)$ : le carré d'un module n'est pas le carré du nombre.</p>`,
    trou: { q: R`Le nombre $|z_1+z_2|^2$ est égal à :`, c: [R`$(z_1+z_2)^2$`, R`$(z_1+z_2)(\bar z_1+\bar z_2)$`, R`$|z_1|^2+|z_2|^2$`, R`$z_1^2+z_2^2$`], ok: 1, why: R`$|w|^2=w\bar w$ avec $w=z_1+z_2$, et $\overline{z_1+z_2}=\bar z_1+\bar z_2$. Le nombre $(z_1+z_2)^2$ est un complexe quelconque, pas un module.` },
    bareme: { sur: 4, l: [[1, R`Utilisation de $|w|^2=w\bar w$`], [1, R`Deux développements justes`], [1, R`Addition : annulation des termes croisés`], [1, R`Interprétation géométrique demandée`]] },
    jury: [
      { e: R`Écrire $|z_1+z_2|^2=|z_1|^2+|z_2|^2$.`, p: R`Erreur de cours grave : la question entière est perdue.` },
      { e: R`Ne pas interpréter géométriquement alors que l'énoncé le demande.`, p: R`Le dernier point du barème n'est pas accordé.` }
    ] },
  { declic: R`On veut $|z|+|z'|$ à partir de $z+z'$ et $z-z'$ : on pose $A=z+z'$ et $B=z-z'$, de sorte que $2z=A+B$ et $2z'=A-B$. Ensuite, l'inégalité triangulaire, deux fois.`,
    copie: R`<p>${ph("posons", "Posons")} $A=z+z'$ et $B=z-z'$. Alors $A+B=2z$ et $A-B=2z'$.</p><p>Par l'inégalité triangulaire :</p>$$2|z|=|A+B|\leqslant|A|+|B|,\qquad2|z'|=|A+(-B)|\leqslant|A|+|-B|=|A|+|B|.$$<p>En additionnant puis en divisant par $2$ :</p><div class="sbox">$$|z|+|z'|\leqslant|z+z'|+|z-z'|.$$</div><p><b>Interprétation.</b> Dans un parallélogramme, la somme de deux côtés consécutifs est inférieure ou égale à la somme des deux diagonales.</p>`,
    tete: R`<p><b>Piège :</b> utiliser $|A-B|\leqslant|A|-|B|$. L'inégalité triangulaire majore une <i>somme</i> par une somme ; pour $A-B$ on écrit $A+(-B)$.</p><p><b>Piège :</b> oublier de justifier $|-B|=|B|$ : c'est la ligne qui fait passer de $A+(-B)$ à $|A|+|B|$.</p>`,
    trou: { q: R`Pour majorer $|z'|$ on écrit $2z'=A+(-B)$ parce que :`, c: [R`l'inégalité triangulaire est énoncée pour une somme`, R`$B$ est réel`, R`$|A-B|=|A|-|B|$`, R`$-B$ est le conjugué de $B$`], ok: 0, why: R`L'inégalité triangulaire majore le module d'une <b>somme</b> : $|X+Y|\leqslant|X|+|Y|$. Pour une différence on écrit $A-B=A+(-B)$ puis $|-B|=|B|$.` },
    bareme: { sur: 3, l: [[1, R`Choix de $A=z+z'$ et $B=z-z'$`], [1, R`Deux applications de l'inégalité triangulaire (dont $|-B|=|B|$)`], [1, R`Addition, division par $2$ et interprétation`]] },
    jury: [
      { e: R`Utiliser $|A-B|\leqslant|A|-|B|$.`, p: R`Erreur de cours : la deuxième majoration est fausse.` },
      { e: R`Ne pas justifier $|-B|=|B|$.`, p: R`Pas de point pour la deuxième application.` }
    ] },
  { declic: R`Une somme de deux inégalités n'est une égalité que si <b>chacune</b> l'est. On se ramène donc à deux cas d'égalité dans l'inégalité triangulaire ; le cas $A=0$ est à part.`,
    copie: R`<p>L'inégalité est la somme de $2|z|\leqslant|A|+|B|$ et $2|z'|\leqslant|A|+|B|$. ${ph("donc", "Donc")} il y a égalité si et seulement si ces deux inégalités sont des égalités.</p><p>${ph("distinguons", "Distinguons deux cas")}. Si $A=0$, les deux égalités se réduisent à $|B|=|B|$ : elles sont vraies.</p><p>Si $A\neq0$, le cas d'égalité de l'inégalité triangulaire donne $B=\lambda A$ et $-B=\mu A$ avec $\lambda,\mu\geqslant0$. En additionnant, $(\lambda+\mu)A=0$, ${ph("donc", "donc")} $\lambda+\mu=0$, donc $\lambda=\mu=0$ et $B=0$.</p><p>${ph("reciproq", "Réciproquement")}, $B=0$ donne bien deux égalités.</p><div class="sbox">$$|z|+|z'|=|z+z'|+|z-z'|\iff z'=z\ \text{ ou }\ z'=-z.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire « égalité si et seulement si $A$ et $B$ sont colinéaires » : le cas d'égalité demande un coefficient <i>positif</i>, et ici il faut les deux égalités à la fois.</p><p><b>Piège :</b> oublier la réciproque : on vérifie $z'=z$ et $z'=-z$.</p>`,
    trou: { q: R`Pour que $2|z|+2|z'|\leqslant2(|A|+|B|)$ soit une égalité, il faut que :`, c: [R`l'une des deux inégalités soit une égalité`, R`les deux inégalités soient des égalités`, R`$A=B$`, R`$z=z'$`], ok: 1, why: R`Si l'une était stricte et l'autre large, la somme serait stricte. Une somme d'inégalités est une égalité si et seulement si chacune l'est.` },
    bareme: { sur: 4, l: [[1, R`Égalité de la somme $\iff$ égalité des deux inégalités`], [1, R`Cas $A=0$`], [1, R`Cas $A\neq0$ : $\lambda,\mu\geqslant0$, puis $B=0$`], [1, R`Conclusion $z'=\pm z$ et vérification`]] },
    jury: [
      { e: R`Écrire $B=\lambda A$ sans avoir traité le cas $A=0$.`, p: R`On ne peut proportionner à $A$ que si $A\neq0$ : point de rigueur perdu.` },
      { e: R`Conclure seulement $z'=z$.`, p: R`Solution incomplète : il y a deux familles de solutions.` }
    ] },
  { declic: R`On connaît la <b>somme</b> des deux carrés de modules (question 1). Si les deux dépassaient $2$, leur somme dépasserait $4$ : un raisonnement sur la somme donne le signe.`,
    copie: R`<p>${ph("parlaq", "D'après la question 1")}, et comme $|z_1|,|z_2|\leqslant1$ :</p>$$|z_1+z_2|^2+|z_1-z_2|^2=2|z_1|^2+2|z_2|^2\leqslant4.$$<p>Si les deux carrés étaient $>2$, leur somme serait $>4$ : absurde. ${ph("donc", "Donc")} l'un des deux est $\leqslant2$, et le module correspondant est $\leqslant\sqrt2$. On prend $\varepsilon=1$ si $|z_1+z_2|\leqslant\sqrt2$, et $\varepsilon=-1$ sinon.</p><p><b>Optimalité.</b> Pour $z_1=1$ et $z_2=i$ : $|1+i|=|1-i|=\sqrt2$. Aucun choix de signe ne fait mieux : la constante $\sqrt2$ ne peut pas être diminuée.</p><div class="sbox">$$\exists\varepsilon\in\{1,-1\},\ |z_1+\varepsilon z_2|\leqslant\sqrt2.$$</div>`,
    tete: R`<p><b>Piège :</b> dire que <i>les deux</i> modules sont $\leqslant\sqrt2$. C'est faux : pour $z_1=z_2=1$, $|z_1+z_2|=2$.</p><p><b>Piège :</b> prouver l'optimalité avec un exemple qui ne force pas la valeur $\sqrt2$ (par exemple $z_1=z_2=0$) : il ne prouve rien.</p>`,
    trou: { q: R`Si $a,b\geqslant0$ et $a+b\leqslant4$, alors :`, c: [R`$a\leqslant2$ et $b\leqslant2$`, R`$a\leqslant2$ ou $b\leqslant2$`, R`$a=b=2$`, R`$ab\leqslant4$`], ok: 1, why: R`Si $a>2$ et $b>2$, alors $a+b>4$ : donc l'un des deux au moins est $\leqslant2$. On ne peut pas dire que les deux le sont (prendre $a=4$, $b=0$).` },
    bareme: { sur: 4, l: [[1, R`Application de la question 1 : somme des carrés $\leqslant4$`], [1, R`Raisonnement : l'un des deux carrés est $\leqslant2$`], [1, R`Définition de $\varepsilon$ par disjonction de cas`], [1, R`Exemple $(1,i)$ montrant l'optimalité`]] },
    jury: [
      { e: R`Affirmer que les deux modules sont $\leqslant\sqrt2$.`, p: R`Faux : erreur de logique, le résultat n'est pas démontré.` },
      { e: R`Choisir un exemple d'optimalité où $|z_1\pm z_2|<\sqrt2$.`, p: R`L'exemple ne prouve rien : aucun point.` }
    ] },
  { declic: R`« $t\bar t=a^2$ » se lit $|t|=a$ : trois nombres de modules donnés dont la somme est nulle forment un triangle. Le sens direct est l'inégalité triangulaire ; pour la réciproque, on fixe $t=a$ et on cherche $u=x+iy$.`,
    copie: R`<p>${ph("comme", "Comme")} $a>0$, $t\bar t=a^2\iff|t|=a$ ; de même $|u|=b$ et $|v|=c$.</p><p><b>($\Rightarrow$)</b> Si $t+u+v=0$, alors $t=-(u+v)$ et $a=|u+v|\leqslant|u|+|v|=b+c$. De même $b\leqslant a+c$ et $c\leqslant a+b$.</p><p><b>($\Leftarrow$)</b> ${ph("posons", "Posons")} $t=a$, $u=x+iy$ et $v=-a-u$. Il faut $x^2+y^2=b^2$ et $(a+x)^2+y^2=c^2$. En soustrayant, $a^2+2ax=c^2-b^2$, donc $x=\dfrac{c^2-a^2-b^2}{2a}$.</p><p>Il reste à avoir $y^2=b^2-x^2\geqslant0$, c'est-à-dire $|c^2-a^2-b^2|\leqslant2ab$, ce qui équivaut à $(a-b)^2\leqslant c^2\leqslant(a+b)^2$, soit $|a-b|\leqslant c\leqslant a+b$. C'est exactement l'hypothèse.</p><p>${ph("ainsi", "Ainsi")} $y=\sqrt{b^2-x^2}$ convient.</p><div class="sbox">$$\exists\,(t,u,v)\iff a\leqslant b+c,\ b\leqslant a+c,\ c\leqslant a+b.$$</div>`,
    tete: R`<p><b>Piège :</b> ne traiter que le sens direct. L'équivalence demande aussi de <i>construire</i> $t,u,v$.</p><p><b>Piège :</b> écrire $y=\sqrt{b^2-x^2}$ sans vérifier que $b^2-x^2\geqslant0$ : c'est précisément là que les trois inégalités servent.</p>`,
    trou: { q: R`Pour que $y^2=b^2-x^2$ ait une solution réelle $y$, il faut et il suffit que :`, c: [R`$b^2-x^2\geqslant0$`, R`$x\geqslant0$`, R`$b=x$`, R`$y\geqslant0$`], ok: 0, why: R`Un carré de réel est positif : l'équation $y^2=b^2-x^2$ n'a de solution que si $b^2-x^2\geqslant0$, et alors $y=\sqrt{b^2-x^2}$ convient.` },
    bareme: { sur: 5, l: [[1, R`Traduction $t\bar t=a^2\iff|t|=a$ (car $a>0$)`], [1, R`Sens direct par l'inégalité triangulaire, trois fois`], [1, R`Construction : $t=a$, $v=-t-u$, système en $x$ et $y$`], [1, R`Valeur de $x$ et condition $x^2\leqslant b^2$`], [1, R`Équivalence avec les trois inégalités`]] },
    jury: [
      { e: R`Ne traiter que le sens direct.`, p: R`La moitié de la question n'est pas abordée.` },
      { e: R`Poser $y=\sqrt{b^2-x^2}$ sans vérifier que $b^2-x^2\geqslant0$.`, p: R`C'est le cœur de la réciproque : point de rigueur perdu.` }
    ] }
], [
  { q: R`Pour tous complexes $A$, $B$, l'inégalité triangulaire s'écrit :`, c: [R`$|A+B|\leqslant|A|+|B|$`, R`$|A+B|\geqslant|A|+|B|$`, R`$|A+B|=|A|+|B|$`, R`$|A+B|\leqslant\big||A|-|B|\big|$`], ok: 0, r: "cx-tri" },
  { q: R`Pour tout complexe $B$, $|-B|$ vaut :`, c: [R`$|B|$`, R`$-|B|$`, R`$B$`, R`$\bar B$`], ok: 0, r: "cx-module" },
  { q: R`Pour $z\in\mathbb C$, $z+\bar z$ vaut :`, c: [R`$2\,\mathrm{Re}(z)$`, R`$2\,\mathrm{Im}(z)$`, R`$|z|^2$`, R`$2|z|$`], ok: 0, r: "cx-conj" }
]);
})();

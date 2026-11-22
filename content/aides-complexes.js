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
      { e: R`Choisir un exemple d'optimalité où $|z_1\pm z_2|\lt\sqrt2$.`, p: R`L'exemple ne prouve rien : aucun point.` }
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

/* ---------- cx-03 · Homographies : demi-plan, disque et cercles ---------- */
A("cx-03", [
  { declic: R`Un module de quotient : $|f(z)|<1\iff|z-i|<|z+i|$, deux distances. On élève au carré (deux positifs) et la différence $|z+i|^2-|z-i|^2$ vaut $4y$ : son signe est celui de $\mathrm{Im}\,z$.`,
    copie: R`<p>Soit $z\in P$. Alors $z\neq-i$ (partie imaginaire $>0$), donc $f(z)$ est défini et $|f(z)|=\dfrac{|z-i|}{|z+i|}$.</p><p>${ph("comme", "Comme")} $|z+i|>0$ : $|f(z)|<1\iff|z-i|^2<|z+i|^2$ (deux positifs sont rangés comme leurs carrés).</p><p>${ph("posons", "Posons")} $z=x+iy$ avec $y>0$ : $|z+i|^2-|z-i|^2=\big(x^2+(y+1)^2\big)-\big(x^2+(y-1)^2\big)=4y>0$.</p><p>${ph("ainsi", "Ainsi")} $|f(z)|<1$.</p><div class="sbox">$$\forall z\in P,\ f(z)\in D.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> rationaliser $\frac{z-i}{z+i}$ et calculer son module à partir de la partie réelle et de la partie imaginaire. Ça marche, mais le calcul est lourd. Comparer deux distances est plus court.</p><p><b>Piège :</b> passer aux carrés sans dire que $|z-i|$ et $|z+i|$ sont positifs.</p>`,
    trou: { q: R`Pour comparer deux réels positifs $|z-i|$ et $|z+i|$, on compare :`, c: [R`leurs carrés`, R`leurs arguments`, R`leurs parties réelles`, R`leurs conjugués`], ok: 0, why: R`Sur $\mathbb R_+$ la fonction carré est strictement croissante : $x\lt y\iff x^2\lt y^2$. Les carrés se développent ensuite avec $|w|^2=w\bar w$, sans racine.` },
    bareme: { sur: 4, l: [[1, R`$f(z)$ défini ($z\neq-i$) et $|f(z)|=\frac{|z-i|}{|z+i|}$`], [1, R`Équivalence avec $|z-i|^2<|z+i|^2$ justifiée`], [1, R`Calcul $|z+i|^2-|z-i|^2=4y$`], [1, R`Conclusion avec le signe de $y$`]] },
    jury: [
      { e: R`Ne pas vérifier que $f(z)$ est défini pour $z\in P$.`, p: R`Point de rigueur perdu : $f$ n'est pas définie en $-i$.` },
      { e: R`Passer aux carrés sans dire que les deux modules sont positifs.`, p: R`Équivalence non justifiée.` }
    ] },
  { declic: R`« Unique antécédent » : on résout $f(z)=w$ d'inconnue $z$ par équivalences. Si chaque ligne est une équivalence, l'existence et l'unicité sortent ensemble ; il reste à calculer la partie imaginaire de la solution.`,
    copie: R`<p>Soit $w\in D$ et $z\neq-i$. $f(z)=w\iff z-i=w(z+i)\iff z(1-w)=i(1+w)$.</p><p>${ph("comme", "Comme")} $|w|<1$, $w\neq1$, ${ph("donc", "donc")} $1-w\neq0$ et $z=i\,\dfrac{1+w}{1-w}$. C'est l'unique solution ; elle est $\neq-i$, car $i(1+w)=-i(1-w)$ donnerait $1=-1$.</p><p>En multipliant en haut et en bas par $\overline{1-w}$ : $z=\dfrac{i(1+w)(1-\bar w)}{|1-w|^2}$, d'où</p>$$\mathrm{Im}\,z=\frac{1-|w|^2}{|1-w|^2}>0.$$<p>${ph("ainsi", "Ainsi")} $f$ est une bijection de $P$ sur $D$.</p><div class="sbox">$$\forall w\in D,\ \exists!\,z\in\mathbb C\setminus\{-i\},\ f(z)=w,\quad z=i\frac{1+w}{1-w}\in P.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire seulement des implications en résolvant. « Unique antécédent » demande l'existence <i>et</i> l'unicité : les équivalences donnent les deux.</p><p><b>Piège :</b> diviser par $1-w$ sans dire qu'il est non nul. C'est ici que l'hypothèse $|w|<1$ sert.</p>`,
    trou: { q: R`Pourquoi $1-w\neq0$ lorsque $|w|<1$ ?`, c: [R`Parce que $w$ est réel`, R`Parce que le seul $w$ qui l'annule est $1$, de module $1$`, R`Parce que $w\neq0$`, R`Parce que $\mathrm{Im}\,w>0$`], ok: 1, why: R`$1-w=0\iff w=1$, et $|1|=1$ n'est pas $<1$. Comme $|w|<1$, on a bien $w\neq1$.` },
    bareme: { sur: 5, l: [[1, R`Équation $f(z)=w$ transformée par équivalences`], [1, R`Division par $1-w$ justifiée par $|w|<1$`], [1, R`Vérification que $z\neq-i$`], [1, R`Partie imaginaire calculée juste`], [1, R`Conclusion : bijection de $P$ sur $D$`]] },
    jury: [
      { e: R`Résoudre $f(z)=w$ par de simples implications.`, p: R`L'unicité (ou l'existence) n'est pas prouvée.` },
      { e: R`Ne pas vérifier que la solution est dans l'ensemble de départ ($z\neq-i$).`, p: R`Point de rigueur perdu.` }
    ] },
  { declic: R`Un module $\leqslant1$ se ramène à une comparaison de deux carrés de modules, qu'on développe par $|w|^2=w\bar w$. Les termes croisés disparaissent et il reste un produit : $(|z|^2-1)(1-|a|^2)$.`,
    copie: R`<p>Le quotient est défini si $1-\bar az\neq0$ ; pour $a\neq0$ cela exclut $z=\frac1{\bar a}$, de module $\frac1{|a|}>1$.</p><p>Avec $|w|^2=w\bar w$ : $|z-a|^2=|z|^2-\bar az-a\bar z+|a|^2$ et $|1-\bar az|^2=1-a\bar z-\bar az+|a|^2|z|^2$. Par différence,</p>$$|z-a|^2-|1-\bar az|^2=\big(|z|^2-1\big)\big(1-|a|^2\big).$$<p>${ph("comme", "Comme")} $1-|a|^2>0$, ${ph("donc", "donc")} $\Big|\dfrac{z-a}{1-\bar az}\Big|\leqslant1\iff|z|^2\leqslant1$. Le point exclu $\frac1{\bar a}$ n'est pas dans le disque fermé : il ne manque rien.</p><div class="sbox">$$\Big\{z\ \Big|\ \Big|\frac{z-a}{1-\bar az}\Big|\leqslant1\Big\}=\{z\in\mathbb C\mid|z|\leqslant1\}.$$</div>`,
    tete: R`<p><b>Piège :</b> poser $z=x+iy$ et $a=\alpha+i\beta$ : le calcul est interminable. Le développement par $w\bar w$ garde la structure et fait apparaître la factorisation.</p><p><b>Piège :</b> oublier la condition d'existence du quotient (le point $\frac1{\bar a}$).</p>`,
    trou: { q: R`Le signe de $\big(|z|^2-1\big)\big(1-|a|^2\big)$ est celui de :`, c: [R`$|z|^2-1$, car $1-|a|^2>0$`, R`$1-|a|^2$ seulement`, R`$|a|^2-1$`, R`$|z|^2+1$`], ok: 0, why: R`Le facteur $1-|a|^2$ est strictement positif (hypothèse $|a|<1$) : il ne change pas le signe du produit, qui est celui de $|z|^2-1$.` },
    bareme: { sur: 5, l: [[1, R`Condition d'existence et point exclu $\frac1{\bar a}$`], [1, R`Les deux carrés développés`], [1, R`Différence factorisée $\big(|z|^2-1\big)\big(1-|a|^2\big)$`], [1, R`Signe justifié par $1-|a|^2>0$`], [1, R`Ensemble final : le disque fermé`]] },
    jury: [
      { e: R`Oublier le point où le quotient n'est pas défini.`, p: R`Point de rigueur perdu, même si le résultat est juste.` },
      { e: R`Diviser par $1-|a|^2$ sans signaler qu'il est strictement positif.`, p: R`Le sens de l'inégalité n'est pas justifié.` }
    ] },
  { declic: R`Un cercle, c'est « distance au centre égale à $r$ ». Pour l'écrire avec $z$ et $\bar z$, on élève au carré et on développe $|z-z_0|^2=(z-z_0)(\bar z-\bar z_0)$.`,
    copie: R`<p>$z\in\mathcal C\iff|z-z_0|=r\iff|z-z_0|^2=r^2$ (deux nombres positifs).</p><p>${ph("reconnait", "On reconnaît")} un carré de module : $|z-z_0|^2=(z-z_0)(\bar z-\bar z_0)=|z|^2-z_0\bar z-\bar z_0z+|z_0|^2$.</p><div class="sbox">$$z\in\mathcal C\iff|z|^2-z_0\bar z-\bar z_0z+|z_0|^2=r^2.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $|z-z_0|^2=|z|^2-|z_0|^2$. Il y a deux termes croisés.</p><p><b>Piège :</b> regrouper $z_0\bar z$ et $\bar z_0z$ en « $2z_0z$ » : ces deux termes sont conjugués, ils ne s'additionnent pas ainsi.</p>`,
    trou: { q: R`Le nombre $|z-z_0|^2$ est égal à :`, c: [R`$(z-z_0)(\bar z-\bar z_0)$`, R`$(z-z_0)^2$`, R`$|z|^2-|z_0|^2$`, R`$z\bar z-z_0\bar z_0$`], ok: 0, why: R`$|w|^2=w\bar w$ avec $w=z-z_0$. Le carré $(z-z_0)^2$ n'est pas un module, et $|z|^2-|z_0|^2$ oublie les deux termes croisés.` },
    bareme: { sur: 3, l: [[1, R`Passage aux carrés (deux positifs)`], [1, R`Développement par $w\bar w$`], [1, R`Équation finale correcte`]] },
    jury: [
      { e: R`Oublier les termes croisés dans le développement.`, p: R`Équation fausse : la question 5 s'effondre.` },
      { e: R`Ne pas justifier le passage aux carrés.`, p: R`Équivalence non justifiée.` }
    ] },
  { declic: R`On cherche l'équation vérifiée par $w=\frac1z$ : on remplace $z$ par $\frac1w$ dans l'équation de la question 4, on chasse les dénominateurs, et on reconnaît la forme d'un cercle $|w|^2-\bar\omega w-\omega\bar w+c=0$.`,
    copie: R`<p>$|z_0|\neq r$ : donc $0\notin\mathcal C$ et $\frac1z$ est défini. ${ph("posons", "Posons")} $d=|z_0|^2-r^2$, réel et non nul, et $z=\frac1w$ pour $w\neq0$.</p><p>${ph("parlaq", "D'après la question 4")} : $\frac1w\in\mathcal C\iff\dfrac1{|w|^2}-\dfrac{z_0}{\bar w}-\dfrac{\bar z_0}w+d=0$. En multipliant par $|w|^2=w\bar w\neq0$ :</p>$$1-z_0w-\bar z_0\bar w+d\,|w|^2=0\iff|w|^2-\frac{z_0}dw-\frac{\bar z_0}d\bar w+\frac1d=0.$$<p>${ph("reconnait", "On reconnaît")} un cercle de centre $\omega=\dfrac{\bar z_0}d$ et de rayon $\rho$ avec $\rho^2=|\omega|^2-\dfrac1d=\dfrac{r^2}{d^2}>0$. Le point $w=0$ n'est pas solution ($\frac1d\neq0$) : l'image est le cercle <i>entier</i>.</p><div class="sbox">$$\text{Image de }\mathcal C:\ \text{centre }\frac{\bar z_0}{|z_0|^2-r^2},\ \text{rayon }\frac r{\big||z_0|^2-r^2\big|}.$$</div><p><b>Application</b> ($z_0=2$, $r=1$) : $d=3$, centre $\frac23$, rayon $\frac13$.</p>`,
    tete: R`<p><b>Piège :</b> oublier que $d\neq0$ est exactement l'hypothèse $|z_0|\neq r$ : sans elle, on ne peut pas diviser par $d$ (et on tombe sur une droite, voir la question 6).</p><p><b>Piège :</b> dire que l'image est « un cercle » sans préciser centre et rayon, ou sans avoir vérifié que $w=0$ n'est pas atteint.</p>`,
    trou: { q: R`Après multiplication par $|w|^2=w\bar w$, le terme $\dfrac{z_0}{\bar w}$ devient :`, c: [R`$z_0\,w$`, R`$z_0\,\bar w$`, R`$z_0/w$`, R`$z_0\,|w|^2$`], ok: 0, why: R`$\dfrac{z_0}{\bar w}\times w\bar w=z_0w$ : le $\bar w$ se simplifie, il reste $w$.` },
    bareme: { sur: 5, l: [[1, R`Remplacement de $z$ par $\frac1w$ dans l'équation de la question 4`], [1, R`Équation débarrassée des dénominateurs`], [1, R`Centre $\omega=\frac{\bar z_0}d$ identifié`], [1, R`Rayon $\rho=\frac r{|d|}$ calculé`], [1, R`Point $w=0$ non atteint : cercle entier ; application numérique`]] },
    jury: [
      { e: R`Multiplier par $|w|^2$ sans préciser que $w\neq0$.`, p: R`Opération non justifiée : point de rigueur perdu.` },
      { e: R`Ne pas justifier que l'image est le cercle entier.`, p: R`Il manque l'inclusion réciproque : demi-note.` }
    ] },
  { declic: R`Si le cercle passe par $0$, le coefficient $d$ s'annule : l'équation en $w$ n'a plus de terme $|w|^2$, c'est celle d'une droite. Pour l'exemple, on prouve l'égalité d'ensembles en deux temps, avec $w+\bar w=1$.`,
    copie: R`<p><b>($\subset$)</b> Soit $|z|=1$, $z\neq1$ et $w=\frac1{1-z}$. On sait que $\mathrm{Re}(w)=\frac12\iff w+\bar w=1$. On a $w+\bar w=\dfrac{2-z-\bar z}{1-z-\bar z+z\bar z}$. ${ph("or", "Or")} $z\bar z=1$, ${ph("donc", "donc")} le dénominateur vaut $2-z-\bar z\neq0$ et $w+\bar w=1$.</p><p><b>($\supset$)</b> ${ph("reciproq", "Réciproquement")}, soit $w=\frac12+iy$. Alors $w\neq0$ et $w=\frac1{1-z}\iff z=\dfrac{w-1}w$, avec $|w-1|=\sqrt{\frac14+y^2}=|w|$, donc $|z|=1$ ; et $z\neq1$ car $\frac1w\neq0$.</p><div class="sbox">$$\Big\{\frac1{1-z}\ \Big|\ |z|=1,\ z\neq1\Big\}=\Big\{w\mid\mathrm{Re}(w)=\frac12\Big\}.$$</div>`,
    tete: R`<p><b>Piège :</b> ne montrer qu'une inclusion. L'égalité d'ensembles demande les deux.</p><p><b>Piège :</b> écrire « $\mathrm{Re}(w)=\frac12\iff w+\bar w=1$ » sans le dire : c'est $w+\bar w=2\,\mathrm{Re}(w)$.</p>`,
    trou: { q: R`Pour montrer une égalité d'ensembles $E=F$, on montre :`, c: [R`seulement $E\subset F$`, R`$E\subset F$ et $F\subset E$`, R`que $E\cap F\neq\emptyset$`, R`que $E$ et $F$ ont le même nombre d'éléments`], ok: 1, why: R`Une égalité d'ensembles est une double inclusion. Ici : tout $\frac1{1-z}$ est sur la droite ($\subset$), et tout point de la droite est de cette forme ($\supset$).` },
    bareme: { sur: 4, l: [[1, R`Reformulation $\mathrm{Re}(w)=\frac12\iff w+\bar w=1$`], [1, R`Sens direct avec $z\bar z=1$ et $z\neq1$`], [1, R`Réciproque : $z=\frac{w-1}w$ de module $1$`], [1, R`Conclusion en égalité d'ensembles`]] },
    jury: [
      { e: R`Ne démontrer qu'une inclusion.`, p: R`L'égalité d'ensembles n'est pas établie : demi-note.` },
      { e: R`Oublier $z\neq1$ dans la réciproque.`, p: R`Le point $1$ est exclu de l'ensemble de départ : point de rigueur perdu.` }
    ] },
  { declic: R`Trois nombres de module $1$ et des différences $z-a$ : l'angle moitié, $e^{ip}-e^{iq}=2i\sin\frac{p-q}2\,e^{i(p+q)/2}$, fait apparaître un réel devant une exponentielle. Le carré et le facteur $\frac ba$ font disparaître l'exponentielle.`,
    copie: R`<p>${ph("posons", "Posons")} $a=e^{i\alpha}$, $b=e^{i\beta}$, $z=e^{i\theta}$. Par l'angle moitié, $z-a=2i\sin\frac{\theta-\alpha}2\,e^{i\frac{\theta+\alpha}2}$ et $z-b=2i\sin\frac{\theta-\beta}2\,e^{i\frac{\theta+\beta}2}$, avec $\sin\frac{\theta-\beta}2\neq0$ car $z\neq b$.</p><p>${ph("donc", "Donc")} $\dfrac{z-a}{z-b}=s\,e^{i\frac{\alpha-\beta}2}$, avec $s=\dfrac{\sin\frac{\theta-\alpha}2}{\sin\frac{\theta-\beta}2}\in\mathbb R^*$ ($s\neq0$ car $z\neq a$).</p>$$\frac ba\Big(\frac{z-a}{z-b}\Big)^2=e^{i(\beta-\alpha)}\,s^2\,e^{i(\alpha-\beta)}=s^2.$$<p>${ph("ainsi", "Ainsi")} ce quotient est le réel strictement positif $s^2$.</p><div class="sbox">$$\frac ba\Big(\frac{z-a}{z-b}\Big)^2=s^2\in\mathbb R_+^*.$$</div>`,
    tete: R`<p><b>Piège :</b> dire que $s$ est le module de $\frac{z-a}{z-b}$. Le réel $s$ peut être négatif ; ici on n'a pas besoin de son signe, parce qu'il apparaît au carré.</p><p><b>Piège :</b> oublier $s\neq0$ : c'est lui qui donne « strictement positif ».</p>`,
    trou: { q: R`Pour $p,q$ réels, $e^{ip}-e^{iq}$ est égal à :`, c: [R`$2i\sin\frac{p-q}2\,e^{i\frac{p+q}2}$`, R`$2\cos\frac{p-q}2\,e^{i\frac{p+q}2}$`, R`$2i\sin(p-q)\,e^{i(p+q)}$`, R`$2i\sin\frac{p+q}2\,e^{i\frac{p-q}2}$`], ok: 0, why: R`On factorise par l'angle moyen $e^{i(p+q)/2}$ : il reste $e^{i(p-q)/2}-e^{-i(p-q)/2}=2i\sin\frac{p-q}2$.` },
    bareme: { sur: 4, l: [[1, R`Écriture exponentielle des trois nombres`], [1, R`Angle moitié sur $z-a$ et $z-b$, avec $\sin\frac{\theta-\beta}2\neq0$`], [1, R`Quotient $=s\,e^{i(\alpha-\beta)/2}$ avec $s$ réel non nul`], [1, R`Calcul final $=s^2>0$`]] },
    jury: [
      { e: R`Ne pas justifier que $\sin\frac{\theta-\beta}2\neq0$.`, p: R`Division non justifiée : point perdu.` },
      { e: R`Affirmer que $s$ est un module, donc positif.`, p: R`Faux : $s$ est un réel de signe quelconque, seul $s^2$ est positif.` }
    ] }
], [
  { q: R`Pour tout complexe $w$, $|w|^2$ vaut :`, c: [R`$w\bar w$`, R`$w^2$`, R`$\bar w^2$`, R`$2\,\mathrm{Re}(w)$`], ok: 0, r: "cx-module" },
  { q: R`Le module du quotient $\dfrac ab$ ($b\neq0$) est :`, c: [R`$\dfrac{|a|}{|b|}$`, R`$|a|-|b|$`, R`$\dfrac a{|b|}$`, R`$\Big|\dfrac ab\Big|^2$`], ok: 0, r: "cx-module" },
  { q: R`Le cercle de centre $z_0$ et de rayon $r$ est l'ensemble des $z$ tels que :`, c: [R`$|z-z_0|=r$`, R`$|z|=|z_0|+r$`, R`$z-z_0=r$`, R`$|z+z_0|=r$`], ok: 0, r: "cx-cercle" }
]);

/* ---------- cx-04 · Angle moitié et forme trigonométrique ---------- */
A("cx-04", [
  { declic: R`Une somme ou une différence d'exponentielles de module $1$ : on factorise par l'<b>angle moitié</b> $e^{i\theta/2}$, ce qui fait apparaître $2\cos\frac\theta2$ ou $2i\sin\frac\theta2$. Il reste à lire module et argument en regardant le signe.`,
    copie: R`<p>${ph("reconnait", "On reconnaît")} l'angle moitié : $e^{i\theta}+1=e^{i\theta/2}\big(e^{i\theta/2}+e^{-i\theta/2}\big)=2\cos\frac\theta2\,e^{i\theta/2}$ et $e^{i\theta}-1=e^{i\theta/2}\big(e^{i\theta/2}-e^{-i\theta/2}\big)=2i\sin\frac\theta2\,e^{i\theta/2}$.</p><p>${ph("distinguons", "Distinguons")} selon le signe de $\cos\frac\theta2$. S'il est $>0$ : module $2\cos\frac\theta2$ et argument $\frac\theta2$. S'il est $<0$ : $e^{i\theta}+1=\big(-2\cos\frac\theta2\big)e^{i(\frac\theta2+\pi)}$, module $-2\cos\frac\theta2$ et argument $\frac\theta2+\pi$. S'il est nul ($\theta\equiv\pi$), le nombre est nul et n'a pas d'argument.</p><p>De même $e^{i\theta}-1=2\sin\frac\theta2\,e^{i\frac{\theta+\pi}2}$, avec la discussion du signe de $\sin\frac\theta2$ (nul si $\theta\equiv0$).</p><div class="sbox">$$e^{i\theta}+1=2\cos\frac\theta2\,e^{i\theta/2},\quad e^{i\theta}-1=2i\sin\frac\theta2\,e^{i\theta/2}.$$</div>`,
    tete: R`<p><b>Piège :</b> dire que le module de $2\cos\frac\theta2\,e^{i\theta/2}$ est $2\cos\frac\theta2$. Un module est positif : il faut la valeur absolue, c'est-à-dire la discussion de signe.</p><p><b>Piège :</b> oublier le cas où le nombre est nul ($\theta\equiv\pi$ pour $+1$, $\theta\equiv0$ pour $-1$) : il n'a pas d'argument.</p>`,
    trou: { q: R`Le module de $2\cos\frac\theta2\,e^{i\theta/2}$ est :`, c: [R`$2\cos\frac\theta2$`, R`$2\big|\cos\frac\theta2\big|$`, R`$2$`, R`$\cos\frac\theta2$`], ok: 1, why: R`$|e^{i\theta/2}|=1$ et un module est positif : $\big|2\cos\frac\theta2\,e^{i\theta/2}\big|=2\big|\cos\frac\theta2\big|$. Écrire $2\cos\frac\theta2$ n'est correct que si ce nombre est positif.` },
    bareme: { sur: 4, l: [[1, R`Factorisation par $e^{i\theta/2}$ (les deux nombres)`], [1, R`Formules $2\cos\frac\theta2$ et $2i\sin\frac\theta2$ justifiées par Euler`], [1, R`Discussion du signe : module positif, argument décalé de $\pi$`], [1, R`Cas où le nombre est nul`]] },
    jury: [
      { e: R`Donner $2\cos\frac\theta2$ comme module sans discuter son signe.`, p: R`Un module négatif est une faute de cours : point perdu.` },
      { e: R`Oublier les valeurs de $\theta$ qui annulent le nombre.`, p: R`Cas d'exception omis.` }
    ] },
  { declic: R`C'est la question précédente avec deux angles : on factorise par l'angle <b>moyen</b> $m=\frac{\theta+\theta'}2$ ; il reste $e^{i\delta}+e^{-i\delta}=2\cos\delta$ avec $\delta=\frac{\theta-\theta'}2$.`,
    copie: R`<p>${ph("posons", "Posons")} $m=\frac{\theta+\theta'}2$ et $\delta=\frac{\theta-\theta'}2$, de sorte que $\theta=m+\delta$ et $\theta'=m-\delta$. ${ph("donc", "Donc")}</p>$$e^{i\theta}+e^{i\theta'}=e^{im}\big(e^{i\delta}+e^{-i\delta}\big)=2\cos\delta\;e^{im}.$$<p>Comme à la question 1 : si $\cos\delta>0$, module $2\cos\delta$ et argument $m$ ; si $\cos\delta<0$, module $-2\cos\delta$ et argument $m+\pi$ ; si $\cos\delta=0$, la somme est nulle.</p><div class="sbox">$$|e^{i\theta}+e^{i\theta'}|=2\Big|\cos\frac{\theta-\theta'}2\Big|.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> additionner les parties réelles $\cos\theta+\cos\theta'$ et les parties imaginaires, puis chercher le module. C'est possible, mais c'est justement l'angle moitié qui transforme la somme en produit.</p><p><b>Piège :</b> prendre $\frac{\theta+\theta'}2$ comme argument sans regarder le signe de $\cos\delta$.</p>`,
    trou: { q: R`On pose $m=\frac{\theta+\theta'}2$ et $\delta=\frac{\theta-\theta'}2$. Alors $\theta'$ vaut :`, c: [R`$m-\delta$`, R`$m+\delta$`, R`$2m-\delta$`, R`$\delta-m$`], ok: 0, why: R`$m+\delta=\theta$ et $m-\delta=\theta'$ : on le vérifie en additionnant et en soustrayant les définitions de $m$ et $\delta$.` },
    bareme: { sur: 3, l: [[1, R`Choix de $m$ et $\delta$ avec $\theta=m+\delta$, $\theta'=m-\delta$`], [1, R`Factorisation $2\cos\delta\;e^{im}$`], [1, R`Module et argument avec discussion du signe`]] },
    jury: [
      { e: R`Prendre $\frac{\theta+\theta'}2$ comme argument sans discuter le signe de $\cos\delta$.`, p: R`Argument faux dès que $\cos\delta<0$.` },
      { e: R`Oublier le cas $\theta-\theta'\equiv\pi$ où la somme est nulle.`, p: R`Cas d'exception omis.` }
    ] },
  { declic: R`Le numérateur et le dénominateur se factorisent tous deux par $e^{i\theta/2}$ (question 1) : il se simplifie, il reste $\frac{2i\sin}{2\cos}$, c'est-à-dire $i\tan\frac\theta2$.`,
    copie: R`<p>Pour $\theta\in\,]-\pi,\pi[$, $\frac\theta2\in\,]-\frac\pi2,\frac\pi2[$ ${ph("donc", "donc")} $\cos\frac\theta2>0$ et $e^{i\theta}+1=2\cos\frac\theta2\,e^{i\theta/2}\neq0$.</p><p>${ph("parlaq", "D'après la question 1")} :</p>$$\frac{e^{i\theta}-1}{e^{i\theta}+1}=\frac{2i\sin\frac\theta2\,e^{i\theta/2}}{2\cos\frac\theta2\,e^{i\theta/2}}=i\,\frac{\sin\frac\theta2}{\cos\frac\theta2}.$$<div class="sbox">$$\frac{e^{i\theta}-1}{e^{i\theta}+1}=i\tan\frac\theta2.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> multiplier numérateur et dénominateur par le conjugué du dénominateur. Ça marche, mais c'est long ; l'angle moitié le fait en une ligne.</p><p><b>Piège :</b> ne pas vérifier que le dénominateur est non nul : c'est ce qu'apporte la condition $\theta\in\,]-\pi,\pi[$.</p>`,
    trou: { q: R`La condition $\theta\in\,]-\pi,\pi[$ sert ici à :`, c: [R`rendre $\cos\frac\theta2>0$, donc le dénominateur non nul`, R`rendre $\sin\frac\theta2>0$`, R`rendre $\theta$ réel`, R`simplifier $e^{i\theta/2}$`], ok: 0, why: R`Pour $\theta=\pi$, $e^{i\theta}+1=0$ : le quotient n'existe pas. Sur $]-\pi,\pi[$, $\cos\frac\theta2>0$, donc le dénominateur ne s'annule pas.` },
    bareme: { sur: 3, l: [[1, R`Dénominateur non nul justifié`], [1, R`Simplification par $e^{i\theta/2}$`], [1, R`Résultat $i\tan\frac\theta2$`]] },
    jury: [
      { e: R`Simplifier sans dire que le dénominateur est non nul.`, p: R`Point de rigueur perdu.` },
      { e: R`Obtenir $\tan\theta$ au lieu de $\tan\frac\theta2$.`, p: R`Oubli de l'angle moitié : résultat faux.` }
    ] },
  { declic: R`Avec des racines emboîtées, on pense à $\cos^2a=\frac{1+\cos2a}2$ pour $a=\frac\pi8$. On calcule d'abord le module (ici $2$), on divise, puis on reconnaît $\cos\frac\pi8$ et $\sin\frac\pi8$.`,
    copie: R`<p>Avec $x=\sqrt{2+\sqrt2}$ et $y=\sqrt{2-\sqrt2}$ : $|z|^2=x^2+y^2=4$, donc $|z|=2$ et $\frac z2=\frac x2+i\frac y2$.</p><p>${ph("reconnait", "On reconnaît")} la linéarisation : $\cos^2\frac\pi8=\dfrac{1+\cos\frac\pi4}2=\dfrac{2+\sqrt2}4$. ${ph("comme", "Comme")} $\cos\frac\pi8>0$, $\cos\frac\pi8=\dfrac{\sqrt{2+\sqrt2}}2$. De même $\sin^2\frac\pi8=\dfrac{1-\cos\frac\pi4}2=\dfrac{2-\sqrt2}4$ et $\sin\frac\pi8>0$ donnent $\sin\frac\pi8=\dfrac{\sqrt{2-\sqrt2}}2$.</p><p>${ph("donc", "Donc")} $z=2e^{i\pi/8}$ et, par la formule de Moivre, $z^8=2^8e^{i\pi}=-256$.</p><div class="sbox">$$z=2e^{i\pi/8},\qquad z^8=-256.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> calculer $\arctan\frac yx$. On tombe sur $\arctan\sqrt{\frac{2-\sqrt2}{2+\sqrt2}}$, qu'on ne sait simplifier qu'en reconnaissant $\tan\frac\pi8$. Reconnaître le cosinus est plus direct.</p><p><b>Piège :</b> oublier de justifier le signe de $\cos\frac\pi8$ avant de prendre la racine : l'égalité des carrés donne deux racines $\pm$.</p>`,
    trou: { q: R`Pour passer de $\cos^2\frac\pi8=\frac{2+\sqrt2}4$ à $\cos\frac\pi8=\frac{\sqrt{2+\sqrt2}}2$, on utilise :`, c: [R`que $\cos\frac\pi8>0$`, R`que $\cos\frac\pi8$ est rationnel`, R`que $\frac\pi8$ est un angle remarquable`, R`que $\cos\frac\pi8=\sin\frac\pi8$`], ok: 0, why: R`Un carré admet deux racines $\pm$ : on choisit le signe grâce à $\frac\pi8\in\,]0,\frac\pi2[$, où le cosinus est positif.` },
    bareme: { sur: 5, l: [[1, R`Module $|z|=2$`], [1, R`Linéarisation $\cos^2\frac\pi8=\frac{2+\sqrt2}4$`], [1, R`Signes de $\cos\frac\pi8$ et $\sin\frac\pi8$ justifiés`], [1, R`Forme $z=2e^{i\pi/8}$`], [1, R`$z^8=-256$ par Moivre`]] },
    jury: [
      { e: R`Prendre la racine de $\cos^2\frac\pi8$ sans justifier le signe.`, p: R`Étape non justifiée : point perdu.` },
      { e: R`Donner un argument sans avoir identifié à la fois le cosinus et le sinus.`, p: R`Un argument se lit sur le couple (cosinus, sinus), pas sur un seul des deux.` }
    ] },
  { declic: R`Écrire $z=re^{i\theta}$ fait apparaître $z+|z|=r\,(e^{i\theta}+1)$ : c'est la question 1. Le signe de $\cos\frac\theta2$ donne la partie réelle de $f(z)$ ; pour montrer que tout $w$ est atteint, on part de $w=\rho e^{i\varphi}$ et on remonte.`,
    copie: R`<p>$f(0)=0$. Pour $z\neq0$, ${ph("posons", "posons")} $z=re^{i\theta}$ avec $r>0$ et $\theta\in\,]-\pi,\pi]$. ${ph("parlaq", "D'après la question 1")} : $f(z)=\dfrac r2\big(e^{i\theta}+1\big)=r\cos\frac\theta2\,e^{i\theta/2}$.</p><p>Si $\theta=\pi$, $f(z)=0$. Sinon $\cos\frac\theta2>0$ et $\mathrm{Re}\,f(z)=r\cos^2\frac\theta2>0$. Donc $f(\mathbb C)\subset\{\mathrm{Re}\,w>0\}\cup\{0\}$.</p><p>${ph("reciproq", "Réciproquement")}, soit $w=\rho e^{i\varphi}$ avec $\rho>0$ et $\varphi\in\,]-\frac\pi2,\frac\pi2[$. Avec $\theta=2\varphi$ et $r=\frac\rho{\cos\varphi}$ : $f(re^{i\theta})=r\cos\varphi\,e^{i\varphi}=w$.</p><div class="sbox">$$f(\mathbb C)=\{w\in\mathbb C\mid\mathrm{Re}\,w>0\}\cup\{0\}.$$</div><p><b>Points fixes.</b> $f(z)=z\iff z+|z|=2z\iff|z|=z\iff z\in\mathbb R_+$.</p><div class="sbox">$$f(z)=z\iff z\in\mathbb R_+.$$</div>`,
    tete: R`<p><b>Piège :</b> se contenter de l'inclusion $f(\mathbb C)\subset\dots$. « L'ensemble des valeurs » demande aussi que chaque valeur soit atteinte.</p><p><b>Piège :</b> conclure « $|z|=z$ donc $z=1$ » ou « $z\in\mathbb R$ » : un nombre égal à son module est un réel <i>positif</i>, quel qu'il soit.</p>`,
    trou: { q: R`Un complexe $z$ vérifiant $|z|=z$ est :`, c: [R`un réel positif ou nul`, R`un réel quelconque`, R`un imaginaire pur`, R`de module $1$`], ok: 0, why: R`Si $z=|z|$, $z$ est égal à un réel positif ou nul. Réciproquement, tout réel $x\geqslant0$ vérifie $|x|=x$.` },
    bareme: { sur: 5, l: [[1, R`Écriture $z=re^{i\theta}$ et $f(z)=r\cos\frac\theta2\,e^{i\theta/2}$`], [1, R`Cas $\theta=\pi$ et partie réelle $>0$`], [1, R`Inclusion $f(\mathbb C)\subset\{\mathrm{Re}\,w>0\}\cup\{0\}$`], [1, R`Réciproque : antécédent explicite $\theta=2\varphi$, $r=\frac\rho{\cos\varphi}$`], [1, R`Points fixes : $\mathbb R_+$`]] },
    jury: [
      { e: R`Ne traiter que l'inclusion $f(\mathbb C)\subset\dots$.`, p: R`L'ensemble des valeurs n'est pas déterminé : demi-note.` },
      { e: R`Oublier $z=0$ ou le cas $\theta=\pi$ (réels négatifs envoyés sur $0$).`, p: R`Cas particuliers manquants : ensemble des valeurs incomplet.` }
    ] }
], [
  { q: R`Le nombre $e^{ia}-e^{-ia}$ vaut :`, c: [R`$2i\sin a$`, R`$2\sin a$`, R`$2\cos a$`, R`$-2i\cos a$`], ok: 0, r: "cx-moitie" },
  { q: R`Le carré $\cos^2a$ vaut :`, c: [R`$\dfrac{1+\cos2a}2$`, R`$\dfrac{1-\cos2a}2$`, R`$\cos2a$`, R`$1-\sin a$`], ok: 0, r: "cx-lin" },
  { q: R`Si $\rho<0$ et $\varphi\in\mathbb R$, le module de $\rho\,e^{i\varphi}$ est :`, c: [R`$-\rho$`, R`$\rho$`, R`$1$`, R`$|\varphi|$`], ok: 0, r: "cx-arg" }
]);

/* ---------- cx-06 · Racines n-ièmes de l'unité : sommes et produits ---------- */
A("cx-06", [
  { declic: R`Un produit de puissances de la même base : on additionne les exposants, $0+1+\dots+(n-1)=\frac{n(n-1)}2$, puis $e^{i\pi(n-1)}=(-1)^{n-1}$.`,
    copie: R`<p>${ph("reconnait", "On reconnaît")} la somme des premiers entiers : $\displaystyle\prod_{k=0}^{n-1}\omega^k=\omega^{0+1+\dots+(n-1)}=\omega^{\frac{n(n-1)}2}$. ${ph("donc", "Donc")}</p>$$\prod_{k=0}^{n-1}\omega^k=e^{\frac{2i\pi}n\cdot\frac{n(n-1)}2}=e^{i\pi(n-1)}=\big(e^{i\pi}\big)^{n-1}=(-1)^{n-1}.$$<div class="sbox">$$\prod_{z\in\mathbb U_n}z=(-1)^{n-1}.$$</div><p><b>Vérification.</b> $n=2$ : $1\times(-1)=-1$ ✓.</p>`,
    tete: R`<p><b>Piège :</b> annoncer « le produit vaut $1$ par symétrie ». C'est faux pour $n$ pair : pour $n=2$, $1\times(-1)=-1$.</p><p><b>Piège :</b> se tromper sur la somme des exposants : elle va de $0$ à $n-1$ et vaut $\frac{n(n-1)}2$, pas $\frac{n(n+1)}2$.</p>`,
    trou: { q: R`La somme $0+1+2+\dots+(n-1)$ vaut :`, c: [R`$\dfrac{n(n-1)}2$`, R`$\dfrac{n(n+1)}2$`, R`$\dfrac{(n-1)^2}2$`, R`$n(n-1)$`], ok: 0, why: R`La somme $1+2+\dots+m$ vaut $\frac{m(m+1)}2$ ; avec $m=n-1$ on obtient $\frac{(n-1)n}2$. Le terme $k=0$ ne change rien.` },
    bareme: { sur: 3, l: [[1, R`Somme des exposants $\frac{n(n-1)}2$`], [1, R`Calcul de $e^{i\pi(n-1)}$`], [1, R`Résultat $(-1)^{n-1}$ avec vérification sur un petit $n$`]] },
    jury: [
      { e: R`Annoncer que le produit vaut $1$.`, p: R`Faux pour $n$ pair : contredit par $n=2$.` },
      { e: R`Se tromper de bornes dans la somme des exposants.`, p: R`Erreur de calcul : résultat décalé.` }
    ] },
  { declic: R`Une somme de $n$ puissances d'une même raison $\omega^p$ : une somme géométrique. Mais il faut d'abord savoir si la raison vaut $1$, ce qui arrive exactement quand $n$ divise $p$.`,
    copie: R`<p>${ph("posons", "Posons")} $q=\omega^p$ : $S_p=\sum_{k=1}^nq^k$. ${ph("distinguons", "Distinguons deux cas")}.</p><p>Si $n\mid p$, $q=e^{2i\pi p/n}=1$ (car $\frac pn\in\mathbb Z$), donc $S_p=n$.</p><p>Si $n\nmid p$, $q\neq1$ et ${ph("reconnait", "on reconnaît")} une somme géométrique : $S_p=q\,\dfrac{1-q^n}{1-q}=0$, car $q^n=(\omega^n)^p=1$.</p><div class="sbox">$$S_p=\begin{cases}n&\text{si }n\mid p,\\0&\text{sinon.}\end{cases}$$</div>`,
    tete: R`<p><b>Piège :</b> appliquer la formule de la somme géométrique sans avoir écarté $q=1$ : on diviserait par $0$ quand $n\mid p$.</p><p><b>Piège :</b> oublier le facteur $q$ : la formule $\frac{1-q^n}{1-q}$ est pour une somme qui commence à $k=0$ ; ici elle commence à $k=1$.</p>`,
    trou: { q: R`On a $\omega^p=1$ si et seulement si :`, c: [R`$n$ divise $p$`, R`$p$ divise $n$`, R`$p=n$`, R`$p$ est pair`], ok: 0, why: R`$e^{2i\pi p/n}=1\iff\frac{2\pi p}n\in2\pi\mathbb Z\iff\frac pn\in\mathbb Z$ : c'est dire que $p$ est un multiple de $n$.` },
    bareme: { sur: 4, l: [[1, R`Équivalence $\omega^p=1\iff n\mid p$`], [1, R`Cas $n\mid p$ : $S_p=n$`], [1, R`Cas $n\nmid p$ : somme géométrique avec le facteur $q$`], [1, R`Utilisation de $q^n=1$ et résultat en deux cas`]] },
    jury: [
      { e: R`Appliquer la formule géométrique sans exclure $\omega^p=1$.`, p: R`Division par $0$ possible : point de rigueur perdu.` },
      { e: R`Donner $S_p=0$ pour tout $p$.`, p: R`Résultat faux quand $n$ divise $p$.` }
    ] },
  { declic: R`Une somme $\sum(k+1)u^k$ : on multiplie par $u$ pour décaler les indices, puis on soustrait. Les coefficients $(j+1)$ et $j$ se compensent presque tous : il reste une somme géométrique.`,
    copie: R`<p>$uS=\sum_{k=0}^{n-1}(k+1)u^{k+1}=\sum_{j=1}^{n}j\,u^j$ (avec $j=k+1$). ${ph("donc", "Donc")}</p>$$S-uS=1+\sum_{j=1}^{n-1}\big[(j+1)-j\big]u^j-n\,u^n=\sum_{j=0}^{n-1}u^j-n\,u^n.$$<p>${ph("comme", "Comme")} $u\neq1$ et $u^n=1$, $\sum_{j=0}^{n-1}u^j=\frac{1-u^n}{1-u}=0$ ; ${ph("donc", "donc")} $(1-u)S=-n$ et, comme $1-u\neq0$, $S=\dfrac n{u-1}$.</p><div class="sbox">$$\sum_{k=0}^{n-1}(k+1)u^k=\frac n{u-1}.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier le terme $-n\,u^n$ : il est en dehors des indices communs $1,\dots,n-1$.</p><p><b>Piège :</b> écrire $uS=\sum(k+1)u^k$ sans décaler : $uS$ contient $u^{k+1}$, pas $u^k$.</p>`,
    trou: { q: R`Dans $uS=\displaystyle\sum_{k=0}^{n-1}(k+1)u^{k+1}$, le changement d'indice $j=k+1$ donne :`, c: [R`$\displaystyle\sum_{j=1}^{n}j\,u^j$`, R`$\displaystyle\sum_{j=0}^{n-1}j\,u^j$`, R`$\displaystyle\sum_{j=1}^{n}(j+1)\,u^j$`, R`$\displaystyle\sum_{j=0}^{n}j\,u^j$`], ok: 0, why: R`Quand $k$ va de $0$ à $n-1$, $j=k+1$ va de $1$ à $n$ ; le coefficient $k+1$ devient $j$ et l'exposant $k+1$ devient aussi $j$.` },
    bareme: { sur: 4, l: [[1, R`Changement d'indice dans $uS$`], [1, R`Différence $S-uS$ avec les termes extrêmes ($1$ et $-nu^n$)`], [1, R`Utilisation de $u^n=1$ et de $\sum u^j=0$ ($u\neq1$)`], [1, R`Division par $1-u$ et résultat $\frac n{u-1}$`]] },
    jury: [
      { e: R`Se tromper de bornes dans le changement d'indice.`, p: R`Somme fausse : le terme $nu^n$ est oublié ou compté deux fois.` },
      { e: R`Ne pas justifier $\sum_{j=0}^{n-1}u^j=0$.`, p: R`C'est le point clé : une ligne de rigueur perdue.` }
    ] },
  { declic: R`Chaque $|\omega^k-1|$ se calcule par l'angle moitié : $2\sin\frac{k\pi}n$. Puis on additionne des sinus : un sinus est la partie imaginaire d'une exponentielle, donc c'est encore une somme géométrique.`,
    copie: R`<p>Par l'angle moitié, $\omega^k-1=2i\sin\frac{k\pi}n\,e^{ik\pi/n}$, ${ph("donc", "donc")} $|\omega^k-1|=2\sin\frac{k\pi}n$, ${ph("comme", "comme")} $\frac{k\pi}n\in[0,\pi[$ où le sinus est positif.</p><p>${ph("posons", "Posons")} $q=e^{i\pi/n}$ : $\sum_{k=0}^{n-1}\sin\frac{k\pi}n=\mathrm{Im}\sum_{k=0}^{n-1}q^k$. Comme $q\neq1$ et $q^n=-1$, $\sum q^k=\dfrac{1-q^n}{1-q}=\dfrac2{1-e^{i\pi/n}}$.</p><p>L'angle moitié donne $1-e^{i\pi/n}=-2i\sin\frac\pi{2n}\,e^{i\pi/(2n)}$, d'où $\dfrac2{1-e^{i\pi/n}}=1+i\,\dfrac{\cos\frac\pi{2n}}{\sin\frac\pi{2n}}$, de partie imaginaire $\cot\frac\pi{2n}$.</p><div class="sbox">$$\sum_{z\in\mathbb U_n}|z-1|=2\cot\frac\pi{2n}.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $|\omega^k-1|=2\sin\frac{k\pi}n$ sans justifier le signe : un module est positif, ici c'est le sinus qui l'est parce que $0\leqslant\frac{k\pi}n<\pi$.</p><p><b>Piège :</b> prendre $q=\omega$ : les sinus ont pour angle $\frac{k\pi}n$, pas $\frac{2k\pi}n$. La raison de la somme géométrique est $e^{i\pi/n}$.</p>`,
    trou: { q: R`La somme $\displaystyle\sum_{k=0}^{n-1}\sin\frac{k\pi}n$ est la partie imaginaire de :`, c: [R`$\displaystyle\sum_{k=0}^{n-1}e^{ik\pi/n}$`, R`$\displaystyle\sum_{k=0}^{n-1}e^{2ik\pi/n}$`, R`$\displaystyle\sum_{k=0}^{n-1}e^{k\pi/n}$`, R`$\displaystyle\sum_{k=0}^{n-1}\cos\frac{k\pi}n$`], ok: 0, why: R`$\sin\theta=\mathrm{Im}(e^{i\theta})$ avec $\theta=\frac{k\pi}n$ : c'est $e^{ik\pi/n}=q^k$ pour $q=e^{i\pi/n}$, et non $\omega=e^{2i\pi/n}$.` },
    bareme: { sur: 5, l: [[1, R`Module $|\omega^k-1|=2\sin\frac{k\pi}n$ avec signe justifié`], [1, R`Passage à la partie imaginaire d'une somme géométrique de raison $e^{i\pi/n}$`], [1, R`$q\neq1$, $q^n=-1$ et formule de la somme géométrique`], [1, R`Angle moitié et partie imaginaire`], [1, R`Résultat $2\cot\frac\pi{2n}$`]] },
    jury: [
      { e: R`Oublier de vérifier que $q\neq1$ avant la formule géométrique.`, p: R`Point de rigueur perdu.` },
      { e: R`Confondre $q=e^{i\pi/n}$ et $\omega=e^{2i\pi/n}$.`, p: R`La somme calculée n'est pas la bonne : résultat faux.` }
    ] },
  { declic: R`Chaque terme $\frac1{1-\omega^k}$ a pour partie réelle $\frac12$ (angle moitié), et la somme est réelle par la symétrie $k\leftrightarrow n-k$ : il suffit alors de prendre la partie réelle.`,
    copie: R`<p>Pour $\alpha\notin2\pi\mathbb Z$, l'angle moitié donne $\dfrac1{1-e^{i\alpha}}=\dfrac12+\dfrac i2\cot\dfrac\alpha2$, de partie réelle $\frac12$. Cela s'applique à $\alpha=\frac{2k\pi}n$ pour $1\leqslant k\leqslant n-1$.</p><p>${ph("posons", "Posons")} $j=n-k$ : comme $\overline{\omega^k}=\omega^{-k}=\omega^{n-k}$, on a $\bar T=\sum_{k=1}^{n-1}\dfrac1{1-\omega^{n-k}}=\sum_{j=1}^{n-1}\dfrac1{1-\omega^j}=T$. Donc $T$ est réel.</p><p>${ph("donc", "Donc")} $T=\mathrm{Re}(T)=\sum_{k=1}^{n-1}\mathrm{Re}\dfrac1{1-\omega^k}=\dfrac{n-1}2$.</p><div class="sbox">$$\sum_{k=1}^{n-1}\frac1{1-\omega^k}=\frac{n-1}2.$$</div>`,
    tete: R`<p><b>Piège :</b> tenter de calculer chaque terme et de sommer les $\cot\frac{k\pi}n$ : on ne sait pas les sommer directement. Ce sont les parties imaginaires qui disparaissent, par symétrie.</p><p><b>Piège :</b> écrire $T=\mathrm{Re}(T)$ sans avoir montré d'abord que $T$ est réel.</p>`,
    trou: { q: R`Un complexe $T$ égal à son conjugué est :`, c: [R`réel`, R`imaginaire pur`, R`de module $1$`, R`nul`], ok: 0, why: R`$\bar T=T$ s'écrit $a-ib=a+ib$, donc $b=0$ : $T$ est réel.` },
    bareme: { sur: 4, l: [[1, R`Partie réelle de chaque terme égale à $\frac12$ (angle moitié)`], [1, R`Symétrie $\overline{\omega^k}=\omega^{n-k}$ et changement d'indice`], [1, R`$T=\bar T$, donc $T\in\mathbb R$`], [1, R`Conclusion $T=\frac{n-1}2$`]] },
    jury: [
      { e: R`Prendre la partie réelle de $T$ sans avoir justifié que $T$ est réel.`, p: R`Raisonnement incomplet : le cœur de la question manque.` },
      { e: R`Compter $n$ termes au lieu de $n-1$.`, p: R`Résultat faux : $\frac n2$ au lieu de $\frac{n-1}2$.` }
    ] }
], [
  { q: R`Pour $q\neq1$, la somme $\displaystyle\sum_{k=0}^{n-1}q^k$ vaut :`, c: [R`$\dfrac{1-q^n}{1-q}$`, R`$\dfrac{1-q^{n+1}}{1-q}$`, R`$\dfrac{q^n-1}{q+1}$`, R`$n\,q$`], ok: 0, r: "cx-geo" },
  { q: R`Les racines $n$-ièmes de l'unité sont les nombres :`, c: [R`$e^{2ik\pi/n}$, $0\leqslant k\leqslant n-1$`, R`$e^{ik\pi/n}$, $0\leqslant k\leqslant n-1$`, R`$k/n$, $0\leqslant k\leqslant n-1$`, R`$\cos\frac{2k\pi}n$, $0\leqslant k\leqslant n-1$`], ok: 0, r: "cx-unite" },
  { q: R`Le nombre $e^{ia}-1$ s'écrit :`, c: [R`$2i\sin\frac a2\,e^{ia/2}$`, R`$2\cos\frac a2\,e^{ia/2}$`, R`$2\sin a\,e^{ia}$`, R`$i\sin a$`], ok: 0, r: "cx-moitie" }
]);

/* ---------- cx-07 · Racines de l'unité particulières et produit de sinus ---------- */
A("cx-07", [
  { declic: R`Le nombre $j=e^{2i\pi/3}$ est une racine cubique de l'unité différente de $1$ : tout découle de $j^3=1$ et de $1+j+j^2=0$, obtenue avec $z^3-1=(z-1)(z^2+z+1)$. Pour un quotient, on multiplie par le conjugué.`,
    copie: R`<p>Par Moivre, $j^3=e^{2i\pi}=1$. ${ph("comme", "Comme")} $z^3-1=(z-1)(z^2+z+1)$ et $j\neq1$, de $0=(j-1)(j^2+j+1)$ on tire $1+j+j^2=0$.</p><p>$|j|=1$ ${ph("donc", "donc")} $\bar j=\frac1j$ ; et $j\cdot j^2=j^3=1$ donne $\frac1j=j^2$.</p><p>${ph("or", "Or")} $j+1=-j^2$ et $j^2+1=-j$, ${ph("donc", "donc")} $j(j+1)=-j^3=-1$ et $\dfrac j{j^2+1}=\dfrac j{-j}=-1$.</p><p>Pour $\dfrac{j+1}{j-1}$, on multiplie par $\overline{j-1}$ : le numérateur est $(j+1)(\bar j-1)=\bar j-j=-i\sqrt3$ et le dénominateur $|j-1|^2=\frac94+\frac34=3$.</p><div class="sbox">$$j(j+1)=-1,\quad\frac j{j^2+1}=-1,\quad\frac{j+1}{j-1}=-\frac i{\sqrt3}.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> remplacer $j$ par $\frac{-1+i\sqrt3}2$ partout et développer. C'est correct mais lourd et source d'erreurs de signe. Les relations $j^3=1$ et $1+j+j^2=0$ suffisent.</p><p><b>Piège :</b> simplifier par $j-1$ sans avoir dit que $j\neq1$.</p>`,
    trou: { q: R`Comme $1+j+j^2=0$, le nombre $j+1$ vaut :`, c: [R`$-j^2$`, R`$j^2$`, R`$-j$`, R`$1-j^2$`], ok: 0, why: R`$1+j+j^2=0\iff j+1=-j^2$. De même $j^2+1=-j$.` },
    bareme: { sur: 4, l: [[1, R`$j^3=1$ par Moivre`], [1, R`$1+j+j^2=0$ avec $j\neq1$`], [1, R`$\bar j=j^2=\frac1j$`], [1, R`Trois simplifications justes, dont le quotient (multiplication par le conjugué)`]] },
    jury: [
      { e: R`Écrire $1+j+j^2=0$ sans le justifier.`, p: R`Résultat admis : point perdu.` },
      { e: R`Erreur de signe dans $(j+1)(\bar j-1)$.`, p: R`Quotient faux : la fin de la question est perdue.` }
    ] },
  { declic: R`Une somme nulle de trois nombres de module $1$ : on veut leurs carrés. L'identité $(u+v+w)^2=u^2+v^2+w^2+2(uv+vw+wu)$ ramène à $uv+vw+wu$, que le module $1$ (donc $\frac1u=\bar u$) permet de calculer.`,
    copie: R`<p>${ph("posons", "Posons")} $u=e^{ix}$, $v=e^{iy}$, $w=e^{iz}$, avec $u+v+w=0$. En développant, $u^2+v^2+w^2=(u+v+w)^2-2(uv+vw+wu)=-2(uv+vw+wu)$.</p><p>Les trois nombres sont non nuls : $uv+vw+wu=uvw\Big(\dfrac1w+\dfrac1u+\dfrac1v\Big)$. ${ph("comme", "Comme")} $|u|=|v|=|w|=1$, on a $\frac1u=\bar u$, etc. ${ph("donc", "Donc")} $uv+vw+wu=uvw\,\overline{(u+v+w)}=0$.</p><p>${ph("ainsi", "Ainsi")} $u^2+v^2+w^2=0$, c'est-à-dire, par Moivre :</p><div class="sbox">$$e^{2ix}+e^{2iy}+e^{2iz}=0.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> tout écrire avec cosinus et sinus. On obtient $\cos x+\cos y+\cos z=0$ et $\sin x+\sin y+\sin z=0$, d'où on ne sait pas facilement passer aux doubles angles.</p><p><b>Piège :</b> remplacer $\frac1u$ par $\bar u$ sans dire que c'est parce que $|u|=1$.</p>`,
    trou: { q: R`Si $|u|=1$, alors $\dfrac1u$ vaut :`, c: [R`$\bar u$`, R`$-u$`, R`$u^2$`, R`$|u|$`], ok: 0, why: R`$u\bar u=|u|^2=1$, donc $\bar u=\frac1u$.` },
    bareme: { sur: 4, l: [[1, R`Identité $(u+v+w)^2=\dots$ et réduction à $uv+vw+wu$`], [1, R`Mise en facteur de $uvw$`], [1, R`$\frac1u=\bar u$ justifié par $|u|=1$`], [1, R`Conclusion $u^2+v^2+w^2=0$ traduite en $e^{2ix}+\dots$`]] },
    jury: [
      { e: R`Utiliser $\frac1u=\bar u$ sans mentionner $|u|=1$.`, p: R`Justification manquante : point perdu.` },
      { e: R`Ne pas relier $u^2$ à $e^{2ix}$ en conclusion.`, p: R`La conclusion porte sur des nombres, pas sur l'énoncé.` }
    ] },
  { declic: R`Les nombres $A$ et $B$ contiennent chacun trois des six racines septièmes non triviales : $A+B$ est la somme de toutes les racines moins $1$. Pour $AB$, on développe, on réduit les exposants modulo $7$ ($\omega^7=1$) et on regroupe.`,
    copie: R`<p>${ph("comme", "Comme")} $\omega\neq1$ et $\omega^7=1$, $1+\omega+\dots+\omega^6=\dfrac{1-\omega^7}{1-\omega}=0$, ${ph("donc", "donc")} $A+B=\omega+\dots+\omega^6=-1$.</p><p>En développant et en utilisant $\omega^{7+r}=\omega^r$ :</p>$$AB=\omega^4+\omega^6+\omega^7+\omega^5+\omega^7+\omega^8+\omega^7+\omega^9+\omega^{10}=3+(\omega+\omega^2+\dots+\omega^6)=3-1=2.$$<div class="sbox">$$A+B=-1,\qquad AB=2.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier de réduire les exposants : $\omega^8,\omega^9,\omega^{10}$ deviennent $\omega,\omega^2,\omega^3$.</p><p><b>Piège :</b> croire que $A+B=0$. La somme de toutes les racines septièmes est nulle, mais elle contient aussi le terme $1$, qui n'est ni dans $A$ ni dans $B$.</p>`,
    trou: { q: R`Comme $\omega^7=1$, le nombre $\omega^{10}$ vaut :`, c: [R`$\omega^3$`, R`$\omega^{10}$ (rien à simplifier)`, R`$1$`, R`$\omega^7$`], ok: 0, why: R`$\omega^{10}=\omega^7\omega^3=\omega^3$.` },
    bareme: { sur: 4, l: [[1, R`Somme des racines septièmes nulle ($\omega\neq1$, $\omega^7=1$)`], [1, R`$A+B=-1$ (le terme $1$ est exclu)`], [1, R`Développement de $AB$ en neuf termes`], [1, R`Réduction des exposants et résultat $AB=2$`]] },
    jury: [
      { e: R`Oublier le terme $1$ de la somme des racines pour obtenir $A+B$.`, p: R`Résultat décalé de $1$ : $0$ au lieu de $-1$.` },
      { e: R`Ne pas réduire les exposants supérieurs à $6$.`, p: R`Calcul inachevé.` }
    ] },
  { declic: R`Deux nombres de somme $s$ et de produit $p$ sont les racines de $Z^2-sZ+p$. On résout, puis le signe de $\mathrm{Im}\,A$ dit laquelle des deux racines est $A$.`,
    copie: R`<p>$(Z-A)(Z-B)=Z^2-(A+B)Z+AB=Z^2+Z+2$, ${ph("donc", "donc")} $A$ et $B$ sont les racines de $Z^2+Z+2$. Son discriminant est $\Delta=-7=(i\sqrt7)^2$ : les racines sont $\dfrac{-1\pm i\sqrt7}2$.</p><p>Pour savoir laquelle est $A$, on étudie $\mathrm{Im}\,A=\sin\frac{2\pi}7+\sin\frac{4\pi}7+\sin\frac{8\pi}7$. Or $\sin\frac{8\pi}7=-\sin\frac\pi7$ et $\sin\frac{4\pi}7=\sin\frac{3\pi}7$. ${ph("comme", "Comme")} $0<\frac\pi7<\frac{3\pi}7<\frac\pi2$ et que le sinus est croissant sur $[0,\frac\pi2]$, $\sin\frac{3\pi}7-\sin\frac\pi7>0$. ${ph("donc", "Donc")} $\mathrm{Im}\,A>0$.</p><div class="sbox">$$A=\frac{-1+i\sqrt7}2,\qquad B=\frac{-1-i\sqrt7}2.$$</div>`,
    tete: R`<p><b>Piège :</b> donner les deux racines sans dire laquelle est $A$. L'énoncé demande d'identifier $A$ et $B$, pas seulement l'ensemble $\{A,B\}$.</p><p><b>Piège :</b> écrire $\Delta=-7$ puis $\sqrt\Delta=\sqrt7$ : le discriminant est négatif, la racine à utiliser est $i\sqrt7$.</p>`,
    trou: { q: R`Le trinôme $Z^2+Z+2$ a pour discriminant $-7$. Ses racines complexes sont :`, c: [R`$\dfrac{-1\pm i\sqrt7}2$`, R`$\dfrac{-1\pm\sqrt7}2$`, R`$\dfrac{1\pm i\sqrt7}2$`, R`$-1\pm i\sqrt7$`], ok: 0, why: R`Les racines sont $\frac{-b\pm\delta}{2a}$ avec $\delta^2=\Delta=-7$, par exemple $\delta=i\sqrt7$ : on obtient $\frac{-1\pm i\sqrt7}2$.` },
    bareme: { sur: 4, l: [[1, R`$A$ et $B$ racines de $Z^2+Z+2$ (somme et produit)`], [1, R`Discriminant $-7=(i\sqrt7)^2$ et deux racines`], [1, R`Signe de $\mathrm{Im}\,A$ : réduction des sinus`], [1, R`Comparaison $\sin\frac{3\pi}7>\sin\frac\pi7$ et conclusion`]] },
    jury: [
      { e: R`Ne pas dire laquelle des deux racines est $A$.`, p: R`Question à moitié traitée.` },
      { e: R`Affirmer $\mathrm{Im}\,A>0$ sans comparer les sinus.`, p: R`Affirmation non démontrée.` }
    ] },
  { declic: R`La somme des racines cinquièmes de l'unité est nulle : sa partie réelle relie $\cos\frac{2\pi}5$ et $\cos\frac{4\pi}5$. Avec $\cos2a=2\cos^2a-1$, tout s'écrit avec $c=\cos\frac{2\pi}5$ : un trinôme.`,
    copie: R`<p>Avec $\omega=e^{2i\pi/5}$ : $1+\omega+\omega^2+\omega^3+\omega^4=0$. En prenant la partie réelle, et comme $\cos\frac{8\pi}5=\cos\frac{2\pi}5$ et $\cos\frac{6\pi}5=\cos\frac{4\pi}5$ :</p>$$1+2\cos\frac{2\pi}5+2\cos\frac{4\pi}5=0.$$<p>${ph("posons", "Posons")} $c=\cos\frac{2\pi}5$ : $\cos\frac{4\pi}5=2c^2-1$, ${ph("donc", "donc")} $4c^2+2c-1=0$, de racines $\frac{-1\pm\sqrt5}4$. ${ph("comme", "Comme")} $\frac{2\pi}5\in\,]0,\frac\pi2[$, on a $c>0$ : $c=\frac{\sqrt5-1}4$.</p><p>Enfin $\sin^2\frac\pi5=\dfrac{1-\cos\frac{2\pi}5}2=\dfrac{5-\sqrt5}8$, et $\sin\frac\pi5>0$ car $\frac\pi5\in\,]0,\pi[$.</p><div class="sbox">$$\cos\frac{2\pi}5=\frac{\sqrt5-1}4,\qquad\sin\frac\pi5=\sqrt{\frac{5-\sqrt5}8}.$$</div>`,
    tete: R`<p><b>Piège :</b> garder les deux racines de $4c^2+2c-1=0$. L'une est négative, ce qui est impossible puisque $\cos\frac{2\pi}5>0$.</p><p><b>Piège :</b> prendre $-\sqrt{\dots}$ pour $\sin\frac\pi5$ : le signe est imposé par $\frac\pi5\in\,]0,\pi[$.</p>`,
    trou: { q: R`Pourquoi a-t-on $\cos\frac{2\pi}5>0$ ?`, c: [R`Parce que $\frac{2\pi}5\in\,]0,\frac\pi2[$`, R`Parce que $\frac{2\pi}5<\pi$`, R`Parce que le cosinus est croissant`, R`Parce que $\cos\frac{2\pi}5=\frac{\sqrt5-1}4$`], ok: 0, why: R`Le cosinus est positif sur $]-\frac\pi2,\frac\pi2[$ et $0<\frac{2\pi}5<\frac\pi2$. On s'en sert avant de connaître la valeur, pour choisir la bonne racine.` },
    bareme: { sur: 5, l: [[1, R`Relation $1+\omega+\dots+\omega^4=0$ puis partie réelle`], [1, R`Réductions $\cos\frac{8\pi}5=\cos\frac{2\pi}5$ et $\cos\frac{6\pi}5=\cos\frac{4\pi}5$`], [1, R`Trinôme $4c^2+2c-1=0$`], [1, R`Choix de la racine justifié par $c>0$`], [1, R`$\sin\frac\pi5$ par $\sin^2a=\frac{1-\cos2a}2$`]] },
    jury: [
      { e: R`Garder les deux racines du trinôme sans éliminer la négative.`, p: R`Valeur de $\cos\frac{2\pi}5$ non déterminée : point perdu.` },
      { e: R`Oublier de justifier le signe de $\sin\frac\pi5$.`, p: R`Racine carrée non justifiée.` }
    ] },
  { declic: R`Deux écritures de $z^n-1$ : en produit (ses racines sont les $\omega^k$) et en somme (formule géométrique). Il suffit de les égaler et de simplifier par $z-1$, ce qui exige $z\neq1$.`,
    copie: R`<p>Les $\omega^k$ ($0\leqslant k\leqslant n-1$) sont $n$ racines distinctes de $z^n-1$, polynôme unitaire de degré $n$. ${ph("donc", "Donc")} $z^n-1=\prod_{k=0}^{n-1}(z-\omega^k)=(z-1)\prod_{k=1}^{n-1}(z-\omega^k)$.</p><p>Par ailleurs, pour $z\neq1$, $z^n-1=(z-1)\sum_{\ell=0}^{n-1}z^\ell$ (somme géométrique).</p><p>On égale les deux écritures et on divise par $z-1\neq0$ :</p><div class="sbox">$$\forall z\neq1,\quad\prod_{k=1}^{n-1}(z-\omega^k)=\sum_{\ell=0}^{n-1}z^\ell.$$</div>`,
    tete: R`<p><b>Piège :</b> diviser par $z-1$ sans préciser $z\neq1$. C'est exactement pourquoi la question suivante traite $z=1$ à part.</p><p><b>Piège :</b> écrire la factorisation sans dire que les $\omega^k$ sont $n$ racines <i>distinctes</i> : sans cela, rien ne prouve qu'on a toutes les racines.</p>`,
    trou: { q: R`Pourquoi a-t-on $\displaystyle\prod_{k=0}^{n-1}(z-\omega^k)=z^n-1$ ?`, c: [R`Les $\omega^k$ sont $n$ racines distinctes du polynôme unitaire $z^n-1$ de degré $n$`, R`Parce que $\omega^n=1$ seulement`, R`Parce que $z\neq1$`, R`Parce que le produit des racines vaut $-1$`], ok: 0, why: R`Un polynôme unitaire de degré $n$ qui a $n$ racines distinctes est le produit des $(z-\text{racine})$. Ici $z^n-1$ a pour racines les $n$ nombres $\omega^k$.` },
    bareme: { sur: 3, l: [[1, R`Factorisation de $z^n-1$ par ses $n$ racines, avec justification`], [1, R`Somme géométrique pour $z\neq1$`], [1, R`Égalité et division par $z-1\neq0$`]] },
    jury: [
      { e: R`Écrire la factorisation sans justifier que les $\omega^k$ sont toutes les racines.`, p: R`Résultat admis : point perdu.` },
      { e: R`Diviser par $z-1$ sans préciser $z\neq1$.`, p: R`Division non justifiée.` }
    ] },
  { declic: R`On ne peut pas diviser par $z-1$ en $z=1$. On fait tendre $z=1+t$ vers $1$ : l'égalité, vraie pour $t\neq0$, passe à la limite parce que les deux membres sont des polynômes, donc continus.`,
    copie: R`<p>${ph("posons", "Posons")} $P(z)=\prod_{k=1}^{n-1}(z-\omega^k)$ et $Q(z)=\sum_{\ell=0}^{n-1}z^\ell$. Ce sont des polynômes, donc des fonctions continues.</p><p>${ph("parlaq", "D'après la question 6")}, $P(1+t)=Q(1+t)$ pour tout réel $t\neq0$. En faisant tendre $t$ vers $0$ :</p>$$P(1)=\lim_{t\to0}P(1+t)=\lim_{t\to0}Q(1+t)=Q(1).$$<div class="sbox">$$\prod_{k=1}^{n-1}(1-\omega^k)=\sum_{\ell=0}^{n-1}1^\ell=n.$$</div>`,
    tete: R`<p><b>Piège :</b> dire « on remplace $z$ par $1$ ». L'égalité de la question 6 n'a été démontrée que pour $z\neq1$.</p><p><b>Piège :</b> passer à la limite sans dire que les deux fonctions sont continues.</p>`,
    trou: { q: R`Pour passer à la limite dans $P(1+t)=Q(1+t)$ quand $t\to0$, on utilise que :`, c: [R`$P$ et $Q$ sont continues (ce sont des polynômes)`, R`$P=Q$ en $z=1$ par définition`, R`$t$ est réel`, R`$\omega\neq1$`], ok: 0, why: R`Une fonction continue en $1$ vérifie $\lim_{t\to0}P(1+t)=P(1)$. Les polynômes sont continus : les deux limites valent $P(1)$ et $Q(1)$.` },
    bareme: { sur: 3, l: [[1, R`Remarque : l'égalité n'est prouvée que pour $z\neq1$`], [1, R`Passage à la limite justifié par la continuité`], [1, R`Valeurs $P(1)=\prod(1-\omega^k)$ et $Q(1)=n$`]] },
    jury: [
      { e: R`Remplacer directement $z$ par $1$.`, p: R`Cas exclu par la question 6 : point perdu.` },
      { e: R`Passer à la limite sans parler de continuité.`, p: R`Justification manquante.` }
    ] },
  { declic: R`On passe au module dans $\prod(1-\omega^k)=n$. Chaque facteur vaut $2\sin\frac{k\pi}n$ par l'angle moitié, positif car $\frac{k\pi}n\in\,]0,\pi[$ ; il y a $n-1$ facteurs $2$.`,
    copie: R`<p>Par l'angle moitié, $1-\omega^k=-2i\sin\frac{k\pi}n\,e^{ik\pi/n}$, ${ph("donc", "donc")} $|1-\omega^k|=2\sin\frac{k\pi}n$, ${ph("comme", "comme")} $\frac{k\pi}n\in\,]0,\pi[$ où le sinus est $>0$.</p><p>${ph("parlaq", "D'après la question 7")}, $n=\prod_{k=1}^{n-1}(1-\omega^k)$. Le module d'un produit est le produit des modules :</p>$$n=\prod_{k=1}^{n-1}2\sin\frac{k\pi}n=2^{n-1}\prod_{k=1}^{n-1}\sin\frac{k\pi}n.$$<div class="sbox">$$\prod_{k=1}^{n-1}\sin\frac{k\pi}n=\frac n{2^{n-1}}.$$</div>`,
    tete: R`<p><b>Piège :</b> écrire $|1-\omega^k|=2\sin\frac{k\pi}n$ sans justifier le signe du sinus.</p><p><b>Piège :</b> se tromper sur le nombre de facteurs $2$ : le produit va de $1$ à $n-1$, donc $2^{n-1}$ et non $2^n$.</p>`,
    trou: { q: R`Un produit de $n-1$ facteurs tous égaux à $2$ vaut :`, c: [R`$2^{n-1}$`, R`$2^n$`, R`$2(n-1)$`, R`$n-1$`], ok: 0, why: R`$n-1$ facteurs égaux à $2$ donnent $2^{n-1}$. L'indice $k$ va de $1$ à $n-1$ : il y a bien $n-1$ termes.` },
    bareme: { sur: 3, l: [[1, R`Module de chaque facteur $2\sin\frac{k\pi}n$, signe justifié`], [1, R`Module du produit et facteur $2^{n-1}$`], [1, R`Conclusion $\frac n{2^{n-1}}$`]] },
    jury: [
      { e: R`Oublier de justifier que $\sin\frac{k\pi}n>0$.`, p: R`Module négatif possible : point de rigueur perdu.` },
      { e: R`Écrire $2^n$ au lieu de $2^{n-1}$.`, p: R`Compte des facteurs faux : résultat faux.` }
    ] }
], [
  { q: R`Si $|u|=1$, alors $\dfrac1u$ vaut :`, c: [R`$\bar u$`, R`$-u$`, R`$u^2$`, R`$|u|$`], ok: 0, r: "cx-module" },
  { q: R`Pour $n\geqslant2$, la somme de toutes les racines $n$-ièmes de l'unité vaut :`, c: [R`$0$`, R`$1$`, R`$n$`, R`$-1$`], ok: 0, r: "cx-unite" },
  { q: R`Pour tout réel $a$, $\cos2a$ vaut :`, c: [R`$2\cos^2a-1$`, R`$2\sin^2a-1$`, R`$\cos^2a+\sin^2a$`, R`$2\cos a$`], ok: 0, r: "cx-lin" }
]);

/* ---------- cx-08 · Racines n-ièmes et équations de la forme (z + a)^n = (z − a)^n ---------- */
A("cx-08", [
  { declic: R`Résoudre $z^n=a$ : on écrit $a$ sous forme exponentielle et on cherche $z=re^{i\theta}$. Deux complexes non nuls sont égaux si et seulement si ils ont même module et des arguments égaux modulo $2\pi$.`,
    copie: R`<p>$z=0$ n'est pas solution. ${ph("posons", "Posons")} $z=re^{i\theta}$ avec $r>0$ ; $-1=e^{i\pi}$. Par Moivre,</p>$$z^n=-1\iff r^ne^{in\theta}=e^{i\pi}\iff r^n=1\ \text{et}\ n\theta\equiv\pi\ [2\pi]\iff r=1\ \text{et}\ \theta=\frac{(2k+1)\pi}n,\ k\in\mathbb Z.$$<p>Remplacer $k$ par $k+n$ ajoute $2\pi$ à l'argument ; les valeurs $k=0,\dots,n-1$ donnent des arguments distincts dans $[0,2\pi[$ : il y a exactement $n$ solutions.</p><div class="sbox">$$z^n=-1\iff z=e^{i\frac{(2k+1)\pi}n},\quad k\in\{0,\dots,n-1\}.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier que $r^n=1$ avec $r>0$ impose $r=1$ : écrire $r=\pm1$ est une erreur.</p><p><b>Piège :</b> laisser $k\in\mathbb Z$ dans la conclusion : les solutions se répètent, il faut se limiter à $n$ valeurs consécutives de $k$.</p>`,
    trou: { q: R`L'équation $n\theta\equiv\pi\ [2\pi]$ équivaut à :`, c: [R`$\theta=\dfrac{\pi+2k\pi}n$, $k\in\mathbb Z$`, R`$\theta=\pi+2k\pi$`, R`$\theta=\dfrac\pi n$ seulement`, R`$\theta=\dfrac\pi{2n}+k\pi$`], ok: 0, why: R`$n\theta=\pi+2k\pi$ avec $k\in\mathbb Z$ ; on divise par $n$. Les $n$ valeurs $k=0,\dots,n-1$ donnent des arguments distincts modulo $2\pi$.` },
    bareme: { sur: 4, l: [[1, R`Forme exponentielle $-1=e^{i\pi}$ et $z\neq0$`], [1, R`Égalité module/argument : $r=1$ et $n\theta\equiv\pi\ [2\pi]$`], [1, R`Les $n$ solutions distinctes ($k=0,\dots,n-1$)`], [1, R`Conclusion et vérification sur $n=2$`]] },
    jury: [
      { e: R`Laisser $k\in\mathbb Z$ dans l'ensemble des solutions.`, p: R`Ensemble redondant : on attend exactement $n$ solutions.` },
      { e: R`Ne pas justifier $r=1$.`, p: R`Deux lignes de rigueur perdues sur l'égalité des modules.` }
    ] },
  { declic: R`Même méthode : on met le second membre sous forme exponentielle, $4\sqrt2(1+i)=8e^{i\pi/4}$. Pour la forme algébrique de $e^{i\pi/12}$, il faut $\cos\frac\pi{12}$ et $\sin\frac\pi{12}$ : on écrit $\frac\pi{12}=\frac\pi3-\frac\pi4$ et on applique les formules d'addition.`,
    copie: R`<p>$1+i=\sqrt2\,e^{i\pi/4}$, ${ph("donc", "donc")} $4\sqrt2(1+i)=8e^{i\pi/4}$. ${ph("posons", "Posons")} $z=re^{i\theta}$ : $r^3=8$ et $3\theta\equiv\frac\pi4\ [2\pi]$, donc $r=2$ et $\theta=\frac\pi{12}+\frac{2k\pi}3$.</p><p>Les trois solutions sont $2e^{i\pi/12}$, $2e^{3i\pi/4}=-\sqrt2+i\sqrt2$ et $2e^{17i\pi/12}$.</p><p>${ph("reconnait", "On reconnaît")} $\frac\pi{12}=\frac\pi3-\frac\pi4$ : par les formules d'addition, $\cos\frac\pi{12}=\dfrac{\sqrt2+\sqrt6}4$ et $\sin\frac\pi{12}=\dfrac{\sqrt6-\sqrt2}4$.</p><div class="sbox">$$2e^{i\pi/12}=\frac{\sqrt6+\sqrt2}2+i\,\frac{\sqrt6-\sqrt2}2.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> passer par $\cos^2a=\frac{1+\cos2a}2$ pour $a=\frac\pi{12}$. Ça marche, mais on obtient $\sqrt{2+\sqrt3}$ qu'il faut encore simplifier. La différence d'angles remarquables donne directement le résultat.</p><p><b>Piège :</b> prendre $r=8$ : c'est $r^3=8$, donc $r=2$.</p>`,
    trou: { q: R`Le cube de $z=re^{i\theta}$ est :`, c: [R`$r^3e^{3i\theta}$`, R`$r^3e^{i\theta}$`, R`$3r\,e^{3i\theta}$`, R`$r\,e^{3i\theta}$`], ok: 0, why: R`Moivre : $(re^{i\theta})^3=r^3\,(e^{i\theta})^3=r^3e^{3i\theta}$. Le module est élevé au cube et l'argument est multiplié par $3$.` },
    bareme: { sur: 5, l: [[1, R`Forme exponentielle $8e^{i\pi/4}$ du second membre`], [1, R`Module $r=2$ (et non $8$)`], [1, R`Les trois arguments $\frac\pi{12}+\frac{2k\pi}3$`], [1, R`$\cos\frac\pi{12}$ et $\sin\frac\pi{12}$ par $\frac\pi3-\frac\pi4$`], [1, R`Forme algébrique de la solution d'argument $\frac\pi{12}$`]] },
    jury: [
      { e: R`Donner seulement la solution d'argument $\frac\pi{12}$.`, p: R`Il y a trois solutions : réponse incomplète.` },
      { e: R`Erreur de signe dans la formule de $\sin(a-b)$.`, p: R`$\sin\frac\pi{12}$ faux : la forme algébrique est perdue.` }
    ] },
  { declic: R`Le quotient $\frac{z+1}{z-1}$ élevé à la puissance $n$ vaut $1$ : c'est une racine $n$-ième de l'unité. On le pose égal à $\omega^k$ et on isole $z$, en traitant à part le cas $k=0$, qui ne donne rien.`,
    copie: R`<p>$z=1$ n'est pas solution : $2^n\neq0$. Pour $z\neq1$, on divise par $(z-1)^n$ : $(z+1)^n=(z-1)^n\iff\Big(\dfrac{z+1}{z-1}\Big)^n=1\iff\dfrac{z+1}{z-1}=\omega^k$ pour un $k\in\{0,\dots,n-1\}$.</p><p>Alors $z(\omega^k-1)=\omega^k+1$. Si $k=0$ : $0=2$, impossible. Si $1\leqslant k\leqslant n-1$, $\omega^k\neq1$ et $z=\dfrac{\omega^k+1}{\omega^k-1}$.</p><p>${ph("reconnait", "On reconnaît")} l'angle moitié : avec $\alpha=\frac{2k\pi}n$, $z=\dfrac{2\cos\frac\alpha2\,e^{i\alpha/2}}{2i\sin\frac\alpha2\,e^{i\alpha/2}}=-i\cot\dfrac{k\pi}n$. Les angles $\frac{k\pi}n$ sont distincts dans $]0,\pi[$, où $\cot$ est strictement décroissante : on a $n-1$ valeurs distinctes.</p><div class="sbox">$$\mathcal S=\Big\{-i\cot\frac{k\pi}n\ \Big|\ 1\leqslant k\leqslant n-1\Big\},\quad n-1\ \text{solutions}.$$</div>`,
    tete: R`<p><b>Piège :</b> annoncer $n$ solutions parce qu'il y a $n$ racines de l'unité : la racine $k=0$ ne donne rien. L'équation est de degré $n-1$, car les termes en $z^n$ se simplifient.</p><p><b>Piège :</b> diviser par $(z-1)^n$ sans avoir vérifié que $z=1$ n'est pas solution.</p>`,
    trou: { q: R`L'équation $\dfrac{z+1}{z-1}=1$ a :`, c: [R`aucune solution`, R`une solution`, R`$n$ solutions`, R`une infinité de solutions`], ok: 0, why: R`$\frac{z+1}{z-1}=1\iff z+1=z-1\iff1=-1$ : impossible. La racine $1$ ne donne aucune solution ; c'est pourquoi il y a $n-1$ solutions et non $n$.` },
    bareme: { sur: 5, l: [[1, R`Cas $z=1$ écarté, puis division par $(z-1)^n$`], [1, R`Quotient égal à une racine $n$-ième de l'unité`], [1, R`Cas $k=0$ sans solution ; pour $k\geqslant1$ : $z=\frac{\omega^k+1}{\omega^k-1}$`], [1, R`Angle moitié : $z=-i\cot\frac{k\pi}n$`], [1, R`Valeurs distinctes : exactement $n-1$ solutions`]] },
    jury: [
      { e: R`Annoncer $n$ solutions.`, p: R`Réponse fausse : le cas $k=0$ est sans solution.` },
      { e: R`Ne pas justifier que les $n-1$ valeurs sont distinctes.`, p: R`Le dénombrement n'est pas démontré : point perdu.` }
    ] },
  { declic: R`« Sans résoudre » : on prend le module. $|z+i|^n=|z-i|^n$ donne $|z+i|=|z-i|$, c'est-à-dire un point $M$ à égale distance de $i$ et de $-i$ : il est sur la médiatrice, qui est l'axe réel.`,
    copie: R`<p>Si $(z+i)^n=(z-i)^n$, le module donne $|z+i|^n=|z-i|^n$. ${ph("comme", "Comme")} $t\mapsto t^n$ est strictement croissante sur $\mathbb R_+$, on a $|z+i|=|z-i|$.</p><p>${ph("posons", "Posons")} $z=x+iy$ : $|z+i|^2-|z-i|^2=\big(x^2+(y+1)^2\big)-\big(x^2+(y-1)^2\big)=4y$. ${ph("donc", "Donc")} $|z+i|=|z-i|\iff y=0$.</p><p>${ph("ainsi", "Ainsi")} $z$ est réel.</p><div class="sbox">$$(z+i)^n=(z-i)^n\implies z\in\mathbb R.$$</div>`,
    tete: R`<p><b>Piège :</b> chercher les solutions explicitement avant de montrer qu'elles sont réelles : l'énoncé demande de le montrer « sans résoudre ».</p><p><b>Piège :</b> passer de $|z+i|^n=|z-i|^n$ à $|z+i|=|z-i|$ sans dire que $t\mapsto t^n$ est injective sur $\mathbb R_+$.</p>`,
    trou: { q: R`De $|z+i|^n=|z-i|^n$ on déduit $|z+i|=|z-i|$ parce que :`, c: [R`$t\mapsto t^n$ est strictement croissante sur $\mathbb R_+$`, R`$n$ est pair`, R`$z$ est réel`, R`$|z+i|=1$`], ok: 0, why: R`Une fonction strictement croissante est injective : sur $\mathbb R_+$, $a^n=b^n\Rightarrow a=b$. Sur $\mathbb R$ ce serait faux pour $n$ pair.` },
    bareme: { sur: 3, l: [[1, R`Passage au module`], [1, R`Injectivité de $t\mapsto t^n$ sur $\mathbb R_+$`], [1, R`$|z+i|=|z-i|\iff\mathrm{Im}\,z=0$ (calcul ou médiatrice)`]] },
    jury: [
      { e: R`Passer de $|a|^n=|b|^n$ à $|a|=|b|$ sans justification.`, p: R`Point de rigueur perdu.` },
      { e: R`Résoudre complètement l'équation alors que l'énoncé dit « sans résoudre ».`, p: R`Hors sujet : aucun point supplémentaire, et du temps perdu.` }
    ] },
  { declic: R`Le facteur $i$ se met en évidence : avec $z=iu$, $z+i=i(u+1)$ et $z-i=i(u-1)$. L'équation devient exactement celle de la question 3, d'inconnue $u$.`,
    copie: R`<p>${ph("posons", "Posons")} $z=iu$ (bijection de $\mathbb C$ dans $\mathbb C$). Alors $z+i=i(u+1)$ et $z-i=i(u-1)$ ; en simplifiant par $i^n\neq0$ :</p>$$(z+i)^n=(z-i)^n\iff(u+1)^n=(u-1)^n.$$<p>${ph("parlaq", "D'après la question 3")}, $u=-i\cot\frac{k\pi}n$ avec $1\leqslant k\leqslant n-1$, ${ph("donc", "donc")} $z=iu=\cot\dfrac{k\pi}n$.</p><div class="sbox">$$(z+i)^n=(z-i)^n\iff z\in\Big\{\cot\frac{k\pi}n\ \Big|\ 1\leqslant k\leqslant n-1\Big\}.$$</div><p>Ce sont $n-1$ réels distincts, en accord avec la question 4.</p>`,
    tete: R`<p><b>Piège :</b> refaire tout le calcul avec $(z+i)$ et $(z-i)$. Le changement d'inconnue $z=iu$ évite de recommencer.</p><p><b>Piège :</b> oublier de revenir à $z$ à la fin : la solution demandée est $z=iu$, pas $u$.</p>`,
    trou: { q: R`Si $u=-i\cot\theta$, alors $z=iu$ vaut :`, c: [R`$\cot\theta$`, R`$-\cot\theta$`, R`$i\cot\theta$`, R`$-i\cot\theta$`], ok: 0, why: R`$z=i\times(-i\cot\theta)=-i^2\cot\theta=\cot\theta$, car $i^2=-1$.` },
    bareme: { sur: 4, l: [[1, R`Changement d'inconnue $z=iu$`], [1, R`Équivalence avec $(u+1)^n=(u-1)^n$ (simplification par $i^n\neq0$)`], [1, R`Retour à $z$ : $z=\cot\frac{k\pi}n$`], [1, R`Nombre de solutions et accord avec la question 4`]] },
    jury: [
      { e: R`Donner les solutions en $u$ sans revenir à $z$.`, p: R`La réponse ne répond pas à la question posée.` },
      { e: R`Simplifier par $i^n$ sans dire qu'il est non nul.`, p: R`Petite étape de rigueur perdue.` }
    ] }
], [
  { q: R`Le module de $z^n$ est :`, c: [R`$|z|^n$`, R`$n|z|$`, R`$|z|$`, R`$|z|^{1/n}$`], ok: 0, r: "cx-racn" },
  { q: R`Deux complexes non nuls $re^{i\theta}$ et $r'e^{i\theta'}$ ($r,r'>0$) sont égaux si et seulement si :`, c: [R`$r=r'$ et $\theta\equiv\theta'\ [2\pi]$`, R`$r=r'$ seulement`, R`$\theta=\theta'$ seulement`, R`$r+\theta=r'+\theta'$`], ok: 0, r: "cx-arg" },
  { q: R`Il y a exactement, dans $\mathbb C$, combien de racines $n$-ièmes de $1$ ?`, c: [R`$n$`, R`$n-1$`, R`$2n$`, R`$1$`], ok: 0, r: "cx-unite" }
]);

/* ---------- cx-09 · Équations algébriques dans ℂ ---------- */
A("cx-09", [
  { declic: R`Pour une racine carrée complexe $\delta=x+iy$, on écrit $\delta^2$ en parties réelle et imaginaire, puis on ajoute l'égalité des modules $x^2+y^2=|5-12i|$ : c'est elle qui donne $x^2$ et $y^2$ sans système compliqué.`,
    copie: R`<p>${ph("posons", "Posons")} $\delta=x+iy$ ($x,y\in\mathbb R$). $\delta^2=5-12i$ équivaut à $x^2-y^2=5$ et $2xy=-12$.</p><p>En prenant les modules : $x^2+y^2=|\delta|^2=|5-12i|=\sqrt{25+144}=13$. En ajoutant et en soustrayant avec $x^2-y^2=5$ : $x^2=9$ et $y^2=4$.</p><p>${ph("comme", "Comme")} $2xy=-12<0$, $x$ et $y$ sont de signes contraires.</p><div class="sbox">$$\delta=3-2i\quad\text{ou}\quad\delta=-3+2i.$$</div><p><b>Vérification.</b> $(3-2i)^2=9-12i-4=5-12i$ ✓.</p>`,
    tete: R`<p><b>Premier réflexe :</b> résoudre $x^2-y^2=5$ et $2xy=-12$ par substitution. On tombe sur une équation bicarrée, plus longue. L'égalité des modules donne $x^2+y^2$ tout de suite.</p><p><b>Piège :</b> oublier la condition sur le signe de $xy$ et garder les quatre couples $(\pm3,\pm2)$ : deux d'entre eux ne conviennent pas.</p>`,
    trou: { q: R`Si $\delta=x+iy$ vérifie $\delta^2=5-12i$, alors $x^2+y^2$ vaut :`, c: [R`$13$`, R`$5$`, R`$12$`, R`$169$`], ok: 0, why: R`$x^2+y^2=|\delta|^2=|\delta^2|=|5-12i|=\sqrt{25+144}=13$. Le nombre $169$ est $|5-12i|^2$, pas son module.` },
    bareme: { sur: 4, l: [[1, R`Système $x^2-y^2=5$, $2xy=-12$`], [1, R`Égalité des modules $x^2+y^2=13$`], [1, R`Valeurs $x^2=9$ et $y^2=4$`], [1, R`Choix des signes par $xy<0$ : deux racines carrées`]] },
    jury: [
      { e: R`Garder les quatre couples $(\pm3,\pm2)$.`, p: R`Deux sont faux : réponse inexacte.` },
      { e: R`Se tromper sur le module : $|5-12i|=13$, et non $169$.`, p: R`Valeurs de $x^2$ et $y^2$ fausses : la question est perdue.` }
    ] },
  { declic: R`Un trinôme à coefficients complexes se traite comme un trinôme réel : discriminant, puis $\frac{-b\pm\delta}{2a}$ avec $\delta^2=\Delta$. La seule difficulté est la racine carrée complexe de $\Delta$.`,
    copie: R`<p>$\Delta=b^2-4ac=(-2i)^2-4(-1+2i)=-4+4-8i=-8i$.</p><p>${ph("posons", "Posons")} $\delta=x+iy$ avec $\delta^2=-8i$ : $x^2-y^2=0$, $2xy=-8$ et $x^2+y^2=|-8i|=8$. Donc $x^2=y^2=4$ et $xy<0$ : $\delta=2-2i$.</p><p>${ph("donc", "Donc")} $z=\dfrac{2i\pm(2-2i)}2$, soit $z=1$ ou $z=-1+2i$.</p><div class="sbox">$$\mathcal S=\{1,\ -1+2i\}.$$</div><p><b>Vérification.</b> Somme $2i=-\frac ba$ ✓ et produit $-1+2i=\frac ca$ ✓.</p>`,
    tete: R`<p><b>Piège :</b> écrire les solutions avec « $\sqrt{-8i}$ » sans l'expliciter : il faut une racine carrée complexe calculée.</p><p><b>Piège :</b> oublier que $b=-2i$ : la formule est $\dfrac{-b\pm\delta}{2a}=\dfrac{2i\pm\delta}2$.</p>`,
    trou: { q: R`Pour $z^2-2iz-1+2i=0$, le discriminant vaut :`, c: [R`$-8i$`, R`$8i$`, R`$-8$`, R`$-4$`], ok: 0, why: R`$b^2=(-2i)^2=-4$ et $-4ac=-4(-1+2i)=4-8i$. Donc $\Delta=-4+4-8i=-8i$.` },
    bareme: { sur: 4, l: [[1, R`Discriminant $\Delta=-8i$`], [1, R`Racine carrée $\delta=2-2i$ avec le système`], [1, R`Formule $\frac{-b\pm\delta}{2a}$ avec $b=-2i$`], [1, R`Deux solutions $1$ et $-1+2i$, vérification somme/produit`]] },
    jury: [
      { e: R`Se tromper de signe sur $b$ dans $-b\pm\delta$.`, p: R`Solutions fausses : la question est perdue.` },
      { e: R`Laisser $\sqrt{-8i}$ sans calcul.`, p: R`Racine carrée non déterminée : résolution inachevée.` }
    ] },
  { declic: R`Une équation en $z^4$ et $z^2$ : on pose $Z=z^2$ pour obtenir un trinôme, puis on revient à $z$ en résolvant $z^2=Z_1$ et $z^2=Z_2$. Les racines carrées complexes s'obtiennent comme à la question 1.`,
    copie: R`<p>${ph("posons", "Posons")} $Z=z^2$ : l'équation devient $Z^2-(5-14i)Z-(24+10i)=0$, de discriminant $\Delta=(5-14i)^2+4(24+10i)=-75-100i$.</p><p>Une racine carrée de $\Delta$ : $x^2-y^2=-75$, $2xy=-100$, $x^2+y^2=|\Delta|=125$, donc $x^2=25$, $y^2=100$ et $xy<0$ : $\delta=5-10i$.</p><p>${ph("donc", "Donc")} $Z_1=\dfrac{(5-14i)+(5-10i)}2=5-12i$ et $Z_2=\dfrac{(5-14i)-(5-10i)}2=-2i$.</p><p>${ph("parlaq", "D'après la question 1")}, $z^2=5-12i\iff z=\pm(3-2i)$. Et $z^2=-2i\iff z=\pm(1-i)$.</p><div class="sbox">$$\mathcal S=\{3-2i,\ -3+2i,\ 1-i,\ -1+i\}.$$</div>`,
    tete: R`<p><b>Piège :</b> s'arrêter aux valeurs de $Z$. L'inconnue est $z$, et chaque $Z$ donne deux valeurs opposées de $z$ : on attend $4$ solutions.</p><p><b>Piège :</b> écrire $z=\pm\sqrt{Z}$ sans expliciter : la notation $\sqrt{5-12i}$ n'est pas définie, il faut calculer les racines carrées complexes.</p>`,
    trou: { q: R`Après avoir trouvé $Z_1=5-12i$ et $Z_2=-2i$ (non nuls), combien de solutions $z$ attend-on ?`, c: [R`$4$`, R`$2$`, R`$8$`, R`$1$`], ok: 0, why: R`Chaque équation $z^2=Z_k$ avec $Z_k\neq0$ a deux solutions opposées : $2\times2=4$ solutions, ici toutes distinctes.` },
    bareme: { sur: 5, l: [[1, R`Changement d'inconnue $Z=z^2$ et trinôme en $Z$`], [1, R`Discriminant $-75-100i$`], [1, R`Racine carrée $5-10i$ et valeurs $Z_1$, $Z_2$`], [1, R`Retour à $z$ par les racines carrées de $Z_1$ et de $Z_2$`], [1, R`Ensemble des quatre solutions`]] },
    jury: [
      { e: R`S'arrêter aux valeurs de $Z$.`, p: R`Réponse en $Z$ et non en $z$ : la question n'est pas résolue.` },
      { e: R`Écrire $\sqrt{5-12i}$ comme racine carrée.`, p: R`Notation non définie dans $\mathbb C$ : pas de point pour le calcul.` }
    ] },
  { declic: R`Une somme $s$ et un produit $p$ : $x$ et $y$ sont les racines de $Z^2-sZ+p$, car $(Z-x)(Z-y)=Z^2-(x+y)Z+xy$. Le système se ramène à une seule équation du second degré.`,
    copie: R`<p>Pour tout $Z$, $(Z-x)(Z-y)=Z^2-(x+y)Z+xy$. ${ph("donc", "Donc")} $(x,y)$ est solution si et seulement si $x$ et $y$ sont les racines de $Z^2-(1+i)Z+(2-i)=0$.</p><p>$\Delta=(1+i)^2-4(2-i)=-8+6i$. Une racine carrée $\delta=p+iq$ : $p^2-q^2=-8$, $2pq=6$, $p^2+q^2=10$, donc $p^2=1$, $q^2=9$, $pq>0$ : $\delta=1+3i$.</p><p>${ph("donc", "Donc")} $Z=\dfrac{(1+i)\pm(1+3i)}2$ : $Z=1+2i$ ou $Z=-i$.</p><div class="sbox">$$(x,y)=(1+2i,\ -i)\quad\text{ou}\quad(x,y)=(-i,\ 1+2i).$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> poser $y=1+i-x$ et substituer. On retrouve la même équation du second degré, mais plus lentement.</p><p><b>Piège :</b> oublier l'ordre : $(x,y)$ est un couple, donc $(1+2i,-i)$ et $(-i,1+2i)$ sont deux solutions distinctes.</p>`,
    trou: { q: R`Le système $x+y=s$, $xy=p$ se ramène à l'équation d'inconnue $Z$ :`, c: [R`$Z^2-sZ+p=0$`, R`$Z^2+sZ+p=0$`, R`$Z^2-pZ+s=0$`, R`$Z^2-sZ-p=0$`], ok: 0, why: R`$(Z-x)(Z-y)=Z^2-(x+y)Z+xy=Z^2-sZ+p$ : $x$ et $y$ sont les deux racines.` },
    bareme: { sur: 4, l: [[1, R`Trinôme $Z^2-(1+i)Z+(2-i)$ justifié par $(Z-x)(Z-y)$`], [1, R`Discriminant $-8+6i$`], [1, R`Racine carrée $1+3i$`], [1, R`Deux couples solutions, ordre compris, avec vérification`]] },
    jury: [
      { e: R`Donner l'ensemble $\{1+2i,-i\}$ sans préciser qu'il y a deux couples.`, p: R`L'inconnue est un couple : l'ordre compte.` },
      { e: R`Se tromper de signe sur le coefficient de $Z$.`, p: R`Trinôme faux : toute la résolution est décalée.` }
    ] },
  { declic: R`Un polynôme de degré $3$ : on cherche une racine « évidente », ici imaginaire pure $z=iy$ comme le suggère l'énoncé. Séparer parties réelle et imaginaire donne deux équations en $y$. Puis on factorise, et il reste un trinôme.`,
    copie: R`<p>${ph("posons", "Posons")} $z=iy$ ($y\in\mathbb R$). L'équation devient $-iy^3+y^2+2iy^2-3y+3iy-10-10i=0$. En séparant les parties réelle et imaginaire :</p>$$y^2-3y-10=0\quad\text{et}\quad-y^3+2y^2+3y-10=0.$$<p>La première donne $y=5$ ou $y=-2$ ; seule $y=-2$ vérifie la seconde. ${ph("donc", "Donc")} $-2i$ est racine.</p><p>On écrit le polynôme $(z+2i)(z^2+az+b)$ et on identifie : $a=-1-4i$ et $b=-5+5i$ (contrôle sur le coefficient de $z$ : $b+2ia=3+3i$ ✓).</p><p>Le trinôme $z^2-(1+4i)z-5+5i$ a pour discriminant $5-12i=(3-2i)^2$ (question 1), donc $z=\dfrac{(1+4i)\pm(3-2i)}2$.</p><div class="sbox">$$\mathcal S=\{-2i,\ 2+i,\ -1+3i\}.$$</div>`,
    tete: R`<p><b>Piège :</b> tester $z=iy$ avec une seule équation. Il faut que les <i>deux</i> équations (partie réelle et partie imaginaire) soient vérifiées en même temps.</p><p><b>Piège :</b> oublier le contrôle sur le coefficient de $z$ lors de l'identification : c'est lui qui détecte une erreur de calcul.</p>`,
    trou: { q: R`Un complexe $a+ib$ ($a,b$ réels) est nul si et seulement si :`, c: [R`$a=0$ et $b=0$`, R`$a=0$ ou $b=0$`, R`$a=b$`, R`$|a|=|b|$`], ok: 0, why: R`Il faut les deux conditions. C'est ce qui transforme l'équation en $y$ en <b>deux</b> équations réelles, dont on cherche une solution commune.` },
    bareme: { sur: 5, l: [[1, R`Substitution $z=iy$ et séparation parties réelle/imaginaire`], [1, R`Racine $y=-2$ retenue (les deux équations vérifiées)`], [1, R`Factorisation $(z+2i)(z^2+az+b)$ par identification`], [1, R`Discriminant du trinôme et racine carrée (question 1)`], [1, R`Ensemble des trois solutions et vérification de la somme`]] },
    jury: [
      { e: R`Retenir $y=5$ sans tester la seconde équation.`, p: R`Fausse racine : la factorisation est fausse.` },
      { e: R`Factoriser sans identifier tous les coefficients.`, p: R`Erreur de calcul non détectée.` }
    ] },
  { declic: R`Pour connaître la nature d'un triangle dont on a les sommets, on compare les longueurs $|y-x|$. Deux côtés égaux, puis Pythagore (ou un quotient d'affixes égal à $\pm i$), donnent la nature.`,
    copie: R`<p>La longueur $XY$ est $|y-x|$. $CA=|-2-3i|=\sqrt{13}$, $CB=|-3+2i|=\sqrt{13}$ et $AB=|-1+5i|=\sqrt{26}$.</p><p>${ph("donc", "Donc")} $CA=CB$ : le triangle est isocèle en $C$. De plus $CA^2+CB^2=26=AB^2$ : par la réciproque du théorème de Pythagore, il est rectangle en $C$.</p><p><b>Confirmation.</b> $\dfrac{b-c}{a-c}=\dfrac{-3+2i}{-2-3i}=-i$ : $\overrightarrow{CB}$ est l'image de $\overrightarrow{CA}$ par la rotation d'angle $-\frac\pi2$.</p><div class="sbox">Le triangle $ABC$ est rectangle isocèle en $C(2+i)$.</div>`,
    tete: R`<p><b>Piège :</b> conclure d'après la figure. Un dessin ne démontre pas la nature du triangle.</p><p><b>Piège :</b> dire « rectangle » sans préciser en quel sommet : c'est celui d'où partent les deux côtés $CA$ et $CB$.</p>`,
    trou: { q: R`Un triangle $ABC$ avec $CA=CB$ et $CA^2+CB^2=AB^2$ est :`, c: [R`rectangle isocèle en $C$`, R`équilatéral`, R`rectangle en $A$`, R`isocèle en $A$`], ok: 0, why: R`$CA=CB$ : isocèle en $C$. $CA^2+CB^2=AB^2$ : par la réciproque de Pythagore, l'angle en $C$ est droit.` },
    bareme: { sur: 3, l: [[1, R`Trois longueurs calculées avec les modules`], [1, R`Isocèle en $C$ puis réciproque de Pythagore`], [1, R`Confirmation par le quotient $\frac{b-c}{a-c}=-i$ ou conclusion nette`]] },
    jury: [
      { e: R`Conclure d'après la figure.`, p: R`Aucun point : une figure n'est pas une preuve.` },
      { e: R`Se tromper de signe dans le calcul de $AB$.`, p: R`Réciproque de Pythagore fausse : conclusion fausse.` }
    ] },
  { declic: R`« $x=1$ est solution » : on remplace $x$ par $1$, ce qui donne une équation en $a$. Pour chaque valeur de $a$, on factorise par $x-1$ et on résout le trinôme obtenu, dont le discriminant peut être négatif.`,
    copie: R`<p>$x=1$ est solution si et seulement si $1+2+2a-a^2=0$, soit $a^2-2a-3=0$, soit $(a-3)(a+1)=0$ : $a=3$ ou $a=-1$.</p><p><b>Si $a=-1$ :</b> $x^3+2x^2-2x-1=(x-1)(x^2+3x+1)$. Le trinôme a pour discriminant $5$, d'où $x=\dfrac{-3\pm\sqrt5}2$.</p><p><b>Si $a=3$ :</b> $x^3+2x^2+6x-9=(x-1)(x^2+3x+9)$. Le discriminant vaut $-27=(3i\sqrt3)^2$, d'où $x=\dfrac{-3\pm3i\sqrt3}2$.</p><div class="sbox">$$a=-1:\ \Big\{1,\ \frac{-3\pm\sqrt5}2\Big\},\qquad a=3:\ \Big\{1,\ \frac{-3\pm3i\sqrt3}2\Big\}.$$</div>`,
    tete: R`<p><b>Piège :</b> ne chercher qu'une valeur de $a$ : l'équation $a^2-2a-3=0$ en a deux.</p><p><b>Piège :</b> écrire $\sqrt{-27}$ sans passer par $i$ : le discriminant est négatif, la racine carrée complexe est $3i\sqrt3$.</p>`,
    trou: { q: R`Pour $a=3$, le trinôme $x^2+3x+9$ a pour discriminant :`, c: [R`$-27$`, R`$27$`, R`$-9$`, R`$45$`], ok: 0, why: R`$\Delta=3^2-4\times1\times9=9-36=-27$. Il est négatif : les racines sont complexes non réelles, $\frac{-3\pm i\sqrt{27}}2$.` },
    bareme: { sur: 4, l: [[1, R`Condition $1+2+2a-a^2=0$ et deux valeurs de $a$`], [1, R`Factorisation par $x-1$ pour chaque $a$`], [1, R`Racines réelles du cas $a=-1$`], [1, R`Racines complexes du cas $a=3$ (discriminant négatif)`]] },
    jury: [
      { e: R`Ne garder qu'une valeur de $a$.`, p: R`Réponse incomplète : la moitié des points manque.` },
      { e: R`Donner des racines réelles pour $a=3$.`, p: R`Le discriminant est négatif : résultat faux.` }
    ] }
], [
  { q: R`Si $\delta^2=\Delta$, les racines de $az^2+bz+c$ sont :`, c: [R`$\dfrac{-b\pm\delta}{2a}$`, R`$\dfrac{b\pm\delta}{2a}$`, R`$\dfrac{-b\pm\Delta}{2a}$`, R`$\dfrac{-b\pm\delta}{a}$`], ok: 0, r: "cx-trinome" },
  { q: R`Pour $\delta=x+iy$ ($x,y$ réels), le carré $\delta^2$ vaut :`, c: [R`$x^2-y^2+2ixy$`, R`$x^2+y^2$`, R`$x^2+y^2+2ixy$`, R`$x^2-y^2$`], ok: 0, r: "cx-sqrt" },
  { q: R`Un complexe $a+ib$ ($a,b$ réels) est nul si et seulement si :`, c: [R`$a=0$ et $b=0$`, R`$a=0$ ou $b=0$`, R`$a=b$`, R`$|a|=|b|$`], ok: 0, r: "cx-reel" }
]);

/* ---------- cx-10 · Exponentielle complexe et itération de polynômes ---------- */
A("cx-10", [
  { declic: R`« $e^z=1$ » : on écrit $z=x+iy$ et on utilise $e^z=e^xe^{iy}$, dont le module est $e^x$. Le module donne $x$, puis l'argument donne $y$ : un seul complexe, deux équations réelles.`,
    copie: R`<p>${ph("posons", "Posons")} $z=x+iy$. Par définition $e^z=e^xe^{iy}$, de module $e^x$.</p><p>Si $e^z=1$, le module donne $e^x=1$, donc $x=0$. Il reste $e^{iy}=1$, soit $\cos y=1$ et $\sin y=0$ : $y\in2\pi\mathbb Z$.</p><p>Réciproquement, si $z=2ik\pi$, alors $e^z=e^{2ik\pi}=1$.</p><div class="sbox">$$e^z=1\iff z\in2i\pi\mathbb Z.$$</div><p><b>Vérification.</b> $e^{2i\pi}=\cos2\pi+i\sin2\pi=1$ ✓.</p>`,
    tete: R`<p><b>Piège :</b> oublier la réciproque. Le raisonnement donne une condition nécessaire ; pour une équivalence il faut montrer que $2ik\pi$ convient.</p><p><b>Piège :</b> croire que $e^z=1$ force $z=0$ comme dans $\mathbb R$ : l'exponentielle complexe n'est pas injective.</p>`,
    trou: { q: R`Pour $z=x+iy$ ($x,y$ réels), le module de $e^z$ vaut :`, c: [R`$e^x$`, R`$e^y$`, R`$1$`, R`$e^{x+y}$`], ok: 0, why: R`$e^z=e^xe^{iy}$, avec $e^x>0$ et $|e^{iy}|=1$ : le module est $e^x$, sans rapport avec $y$.` },
    bareme: { sur: 4, l: [[1, R`Écriture $e^z=e^xe^{iy}$ et module $e^x$`], [1, R`Module égal à $1$ donc $x=0$`], [1, R`$\cos y=1$, $\sin y=0$ donc $y\in2\pi\mathbb Z$`], [1, R`Réciproque pour obtenir l'équivalence`]] },
    jury: [
      { e: R`Omettre la réciproque.`, p: R`Implication seulement : l'équivalence n'est pas démontrée.` },
      { e: R`Écrire $|e^z|=e^{x+y}$.`, p: R`Module faux : $y$ n'intervient pas.` }
    ] },
  { declic: R`Pour $e^z=Z$, on met $Z$ sous forme exponentielle $\rho e^{i\alpha}$ puis on identifie module et argument avec $e^xe^{iy}$. Le module donne $x=\ln\rho$, l'argument donne $y=\alpha+2k\pi$.`,
    copie: R`<p>$Z\neq0$ donc $Z=\rho e^{i\alpha}$ avec $\rho=|Z|>0$ et $\alpha$ un argument de $Z$.</p><p>Avec $z=x+iy$ : $e^xe^{iy}=\rho e^{i\alpha}$. Deux complexes non nuls sont égaux si et seulement s'ils ont même module et des arguments égaux modulo $2\pi$ : $e^x=\rho$ et $y\equiv\alpha\ [2\pi]$.</p><div class="sbox">$$e^z=Z\iff z=\ln|Z|+i(\alpha+2k\pi),\ k\in\mathbb Z.$$</div><p><b>Application.</b> $1+i=\sqrt2\,e^{i\pi/4}$, donc $z=\dfrac{\ln2}2+i\Big(\dfrac\pi4+2k\pi\Big)$.</p><p><b>Vérification.</b> $e^{\frac{\ln2}2+i\frac\pi4}=\sqrt2\Big(\dfrac{\sqrt2}2+i\dfrac{\sqrt2}2\Big)=1+i$ ✓.</p>`,
    tete: R`<p><b>Piège :</b> donner une seule solution. Les arguments sont définis modulo $2\pi$ : il y a une infinité de solutions, indexées par $k\in\mathbb Z$.</p><p><b>Piège :</b> écrire $z=\ln Z$ : le logarithme n'est pas défini pour un complexe quelconque. On écrit $\ln|Z|$, un réel.</p>`,
    trou: { q: R`Quelle valeur de $|1+i|$ faut-il pour écrire $1+i=\rho e^{i\alpha}$ ?`, c: [R`$\sqrt2$`, R`$2$`, R`$1$`, R`$\dfrac{\sqrt2}2$`], ok: 0, why: R`$|1+i|=\sqrt{1^2+1^2}=\sqrt2$, et $\alpha=\frac\pi4$ car $\cos\alpha=\sin\alpha=\frac{\sqrt2}2$.` },
    bareme: { sur: 4, l: [[1, R`Forme $Z=\rho e^{i\alpha}$, $\rho>0$`], [1, R`Identification module et argument`], [1, R`Ensemble des solutions avec $k\in\mathbb Z$`], [1, R`Application $1+i=\sqrt2e^{i\pi/4}$ et vérification`]] },
    jury: [
      { e: R`Ne donner qu'une solution (pas de $2k\pi$).`, p: R`Ensemble incomplet : la moitié des points manque.` },
      { e: R`Écrire $z=\ln Z$.`, p: R`Notation non définie sur $\mathbb C^*$ : résultat non rigoureux.` }
    ] },
  { declic: R`« $(1+\frac zn)^n\to e^z$ » : écrire $1+\frac zn$ sous forme $r_ne^{i\theta_n}$, puis étudier séparément le module $r_n^n$ et l'argument $n\theta_n$. Deux limites réelles à calculer, avec les équivalents usuels $\ln(1+u)\sim u$ et $\arctan t\sim t$.`,
    copie: R`<p>${ph("posons", "Posons")} $z=a+ib$. Pour $n>|a|$, $1+\frac zn=\big(1+\frac an\big)+i\frac bn$ a une partie réelle $>0$, donc $1+\frac zn=r_ne^{i\theta_n}$ avec</p>$$r_n=\sqrt{\Big(1+\frac an\Big)^2+\frac{b^2}{n^2}},\qquad\theta_n=\arctan\frac b{n+a}.$$<p>Par Moivre, $\big(1+\frac zn\big)^n=r_n^n\,e^{in\theta_n}$.</p><p><b>Module.</b> $r_n^2=1+u_n$ avec $u_n=\frac{2a}n+\frac{a^2+b^2}{n^2}\to0$, donc $r_n^n=\exp\big(\frac n2\ln(1+u_n)\big)$. Comme $\ln(1+u_n)\sim u_n$ et $\frac n2u_n\to a$, on obtient $r_n^n\to e^a$.</p><p><b>Argument.</b> $\frac b{n+a}\to0$ donc $\theta_n\sim\frac b{n+a}$ et $n\theta_n\to b$. Par continuité de $\cos$ et $\sin$, $e^{in\theta_n}\to e^{ib}$.</p><div class="sbox">$$\Big(1+\frac zn\Big)^n\xrightarrow[n\to+\infty]{}e^ae^{ib}=e^z.$$</div><p><b>Vérification.</b> $b=0$ : on retrouve $\big(1+\frac an\big)^n\to e^a$ ✓.</p>`,
    tete: R`<p><b>Piège :</b> passer à la limite dans $(1+\frac zn)^n$ en disant « $1+\frac zn\to1$ donc la limite est $1^n=1$ ». C'est une forme indéterminée $1^\infty$.</p><p><b>Piège :</b> oublier la condition $n>|a|$ qui assure que la partie réelle est positive : sans elle, $\arctan$ ne donne pas un argument.</p>`,
    trou: { q: R`Quand $u_n\to0$, on a l'équivalent :`, c: [R`$\ln(1+u_n)\sim u_n$`, R`$\ln(1+u_n)\sim1$`, R`$\ln(1+u_n)\sim u_n^2$`, R`$\ln(1+u_n)\sim e^{u_n}$`], ok: 0, why: R`C'est la limite usuelle $\frac{\ln(1+u)}u\to1$ quand $u\to0$. Elle sert ici à calculer $\frac n2\ln(1+u_n)\to a$.` },
    bareme: { sur: 6, l: [[1, R`Forme $r_ne^{i\theta_n}$ pour $n>|a|$ et Moivre`], [1, R`Écriture $r_n^n=\exp(\frac n2\ln(1+u_n))$`], [1, R`Limite du module $e^a$ par l'équivalent de $\ln$`], [1, R`Argument : $\theta_n\sim\frac b{n+a}$ puis $n\theta_n\to b$`], [1, R`Continuité de $\cos$ et $\sin$`], [1, R`Conclusion $e^ae^{ib}=e^z$ et test avec $b=0$`]] },
    jury: [
      { e: R`Conclure « $1^n=1$ ».`, p: R`Forme indéterminée traitée comme une limite ordinaire : question perdue.` },
      { e: R`Ne pas justifier $n>|a|$.`, p: R`Argument non justifié : point d'argument perdu.` }
    ] },
  { declic: R`« $|f|^2+|g|^2$ » avec $f=u,\ g=v$ : on pense à l'identité du parallélogramme $|u+v|^2+|u-v|^2=2|u|^2+2|v|^2$. On calcule $f+g$ et $f-g$, qui sont simples.`,
    copie: R`<p>$f(z)+g(z)=2+2z^2=2(1+z^2)$ et $f(z)-g(z)=2z$.</p><p>Pour $u,v\in\mathbb C$, en développant $|u\pm v|^2=(u\pm v)(\bar u\pm\bar v)$ et en additionnant, les termes croisés s'éliminent :</p>$$|u+v|^2+|u-v|^2=2|u|^2+2|v|^2.$$<p>Avec $u=f(z)$ et $v=g(z)$ : $4|1+z^2|^2+4|z|^2=2|f(z)|^2+2|g(z)|^2$.</p><div class="sbox">$$|f(z)|^2+|g(z)|^2=2|1+z^2|^2+2|z|^2.$$</div><p><b>Conséquence.</b> Le plus grand de deux nombres est au moins égal à leur moyenne : $\max(|f(z)|^2,|g(z)|^2)\geqslant|1+z^2|^2+|z|^2$.</p>`,
    tete: R`<p><b>Piège :</b> développer $|1+z+z^2|^2$ directement : le calcul est long et plein de termes croisés. La somme et la différence sont immédiates.</p><p><b>Piège :</b> oublier de justifier l'identité du parallélogramme : c'est le point central.</p>`,
    trou: { q: R`Pour $u,v\in\mathbb C$, $|u+v|^2+|u-v|^2$ vaut :`, c: [R`$2|u|^2+2|v|^2$`, R`$|u|^2+|v|^2$`, R`$2|u+v|^2$`, R`$4|u||v|$`], ok: 0, why: R`En développant, $|u\pm v|^2=|u|^2+|v|^2\pm2\mathrm{Re}(u\bar v)$ : les termes croisés s'annulent et il reste $2|u|^2+2|v|^2$.` },
    bareme: { sur: 4, l: [[1, R`Somme $2(1+z^2)$ et différence $2z$`], [1, R`Identité du parallélogramme justifiée`], [1, R`Application et division par $2$`], [1, R`Conséquence sur le maximum`]] },
    jury: [
      { e: R`Admettre l'identité du parallélogramme sans la démontrer.`, p: R`Résultat central non justifié : point perdu.` },
      { e: R`Se tromper de facteur : $|2z|^2=2|z|^2$.`, p: R`Identité fausse : $|2z|^2=4|z|^2$.` }
    ] },
  { declic: R`« $B$ bornée et stable » : par l'absurde, si un point sort du disque unité on construit une suite dans $B$ dont le module tend vers $+\infty$, ce qui contredit la bornitude. La question 4 donne la croissance du module.`,
    copie: R`<p>Supposons qu'il existe $z_0\in B$ avec $r=|z_0|>1$.</p><p>Pour $w\in B$, soit $h(w)$ celui de $f(w)$, $g(w)$ de plus grand module : $h(w)\in B$. On pose $z_{k+1}=h(z_k)$ : tous les $z_k$ sont dans $B$.</p><p>Par la question 4 et $|1+z^2|\geqslant|z|^2-1$, dès que $|z_k|\geqslant1$ :</p>$$|z_{k+1}|^2\geqslant|z_k|^2+(|z_k|^2-1)^2.$$<p>Par récurrence, $|z_k|^2\geqslant r^2+k(r^2-1)^2$. Initialisation : $k=0$ ✓. Hérédité : $|z_k|^2\geqslant r^2>1$ et $t\mapsto(t-1)^2$ croît sur $[1,+\infty[$, donc $(|z_k|^2-1)^2\geqslant(r^2-1)^2$, d'où le rang $k+1$.</p><p>Comme $(r^2-1)^2>0$, $|z_k|\to+\infty$ : contradiction avec $B$ bornée.</p><div class="sbox">$$\forall z\in B,\ |z|\leqslant1.$$</div>`,
    tete: R`<p><b>Premier réflexe :</b> chercher directement une majoration de $|z|$. Rien ne vient : l'hypothèse est la stabilité, donc on itère.</p><p><b>Piège :</b> choisir $f$ ou $g$ « au hasard » à chaque étape. On choisit celui de plus grand module pour que l'inégalité de la question 4 s'applique.</p>`,
    trou: { q: R`Si $\lvert z\rvert\geqslant1$, l'inégalité triangulaire donne :`, c: [R`$|1+z^2|\geqslant|z|^2-1$`, R`$|1+z^2|\leqslant|z|^2-1$`, R`$|1+z^2|=|z|^2+1$`, R`$|1+z^2|\geqslant|z|^2+1$`], ok: 0, why: R`$|z^2|=|(1+z^2)-1|\leqslant|1+z^2|+1$, donc $|1+z^2|\geqslant|z|^2-1$ : c'est la forme « triangulaire inverse ».` },
    bareme: { sur: 5, l: [[1, R`Raisonnement par l'absurde et suite $(z_k)$ dans $B$`], [1, R`Choix de $h(w)$ de module maximal`], [1, R`Minoration $|z_{k+1}|^2\geqslant|z_k|^2+(|z_k|^2-1)^2$`], [1, R`Récurrence sur $|z_k|^2\geqslant r^2+k(r^2-1)^2$`], [1, R`Contradiction avec $B$ bornée`]] },
    jury: [
      { e: R`Oublier la récurrence et affirmer que $|z_k|\to+\infty$.`, p: R`Minoration non démontrée : conclusion non justifiée.` },
      { e: R`Ne pas justifier que les $z_k$ restent dans $B$.`, p: R`Contradiction avec la bornitude non valable.` }
    ] },
  { declic: R`Vérifier une identité polynomiale : on développe un membre, puis l'autre, et on compare. Pour $g$, on n'a pas à recalculer : $g(z)=f(-z)$, il suffit de remplacer $z$ par $-z$.`,
    copie: R`<p>$f(z)^2=(1+z+z^2)^2=z^4+2z^3+3z^2+2z+1$, donc $1+f(z)^2=z^4+2z^3+3z^2+2z+2$.</p><p>$(1+z^2)(z^2+2z+2)=z^2+2z+2+z^4+2z^3+2z^2=z^4+2z^3+3z^2+2z+2$ : même résultat ✓.</p><p>Pour $g$ : $g(z)=f(-z)$. En remplaçant $z$ par $-z$ (et $(-z)^2=z^2$) :</p><div class="sbox">$$1+f(z)^2=(1+z^2)(z^2+2z+2),\qquad1+g(z)^2=(1+z^2)(z^2-2z+2).$$</div><p><b>Produit des seconds facteurs.</b> $(z^2+2z+2)(z^2-2z+2)=(z^2+2)^2-(2z)^2=z^4+4$, utile à la question suivante.</p>`,
    tete: R`<p><b>Piège :</b> se tromper dans le double produit de $(1+z+z^2)^2$ : il y a trois produits croisés $2z$, $2z^2$, $2z^3$.</p><p><b>Piège :</b> recalculer $g$ entièrement. Le changement $z\to-z$ divise le travail par deux.</p>`,
    trou: { q: R`Pour tout $z$, $g(z)=1-z+z^2$ s'écrit en fonction de $f$ :`, c: [R`$g(z)=f(-z)$`, R`$g(z)=-f(z)$`, R`$g(z)=f(z)+2z$`, R`$g(z)=\overline{f(z)}$`], ok: 0, why: R`$f(-z)=1+(-z)+(-z)^2=1-z+z^2=g(z)$ : c'est ce qui permet de transporter une identité par $z\to-z$.` },
    bareme: { sur: 4, l: [[1, R`Développement de $f(z)^2$`], [1, R`Développement du produit $(1+z^2)(z^2+2z+2)$`], [1, R`Relation $g(z)=f(-z)$ et identité pour $g$`], [1, R`Produit $z^4+4$ des seconds facteurs`]] },
    jury: [
      { e: R`Oublier un produit croisé dans $(1+z+z^2)^2$.`, p: R`Identité non vérifiée : faute de calcul.` },
      { e: R`Affirmer l'identité pour $g$ sans la justifier.`, p: R`Il faut utiliser $g(z)=f(-z)$ ou refaire le calcul.` }
    ] },
  { declic: R`« Déterminer $B$ » : montrer que tout $z\in B$ vérifie $1+z^2=0$ en construisant une suite où $|1+z^2|$ est multiplié par $\sqrt3$ à chaque étape, contre une borne de $|1+w^2|\leqslant2$. Puis vérifier que $\{i,-i\}$ convient.`,
    copie: R`<p>${ph("posons", "Posons")} $\delta(z)=|1+z^2|$. Par la question 6 : $\delta(f(z))\,\delta(g(z))=\delta(z)^2\,|z^4+4|$.</p><p>Pour $z\in B$, $|z|\leqslant1$ (question 5), donc $|z^4+4|\geqslant4-|z|^4\geqslant3$ : $\delta(f(z))\,\delta(g(z))\geqslant3\,\delta(z)^2$.</p><p>L'un des deux facteurs est donc $\geqslant\sqrt3\,\delta(z)$ (sinon le produit serait $<3\delta(z)^2$). Notons $k(z)\in\{f(z),g(z)\}\subset B$ celui-là, et $z_{m+1}=k(z_m)$ : $\delta(z_m)\geqslant(\sqrt3)^m\delta(z_0)$.</p><p>Or $\delta(w)\leqslant1+|w|^2\leqslant2$ pour $w\in B$ : $\delta(z_0)\leqslant\frac2{(\sqrt3)^m}\to0$. Donc $\delta(z_0)=0$, soit $z_0^2=-1$ et $z_0\in\{i,-i\}$.</p><p>$B$ est non vide, $g(i)=-i$ et $g(-i)=i$ : si l'un est dans $B$, l'autre aussi. Réciproquement $f(i)=i$, $g(i)=-i$, $f(-i)=-i$, $g(-i)=i$ : $\{i,-i\}$ est bornée, non vide, stable.</p><div class="sbox">$$B=\{i,-i\}.$$</div>`,
    tete: R`<p><b>Piège :</b> oublier la réciproque : on a montré $B\subset\{i,-i\}$, pas que $\{i,-i\}$ convient.</p><p><b>Piège :</b> oublier que $B$ est non vide : sinon $B=\varnothing$ serait compatible avec l'inclusion.</p>`,
    trou: { q: R`Si $\delta(f(z))\,\delta(g(z))\geqslant3\,\delta(z)^2$ et $\delta(z)>0$, un des deux facteurs vérifie :`, c: [R`$\geqslant\sqrt3\,\delta(z)$`, R`$\geqslant3\,\delta(z)$`, R`$\geqslant\delta(z)^2$`, R`$\geqslant\frac{\delta(z)}{\sqrt3}$`], ok: 0, why: R`Si les deux étaient $<\sqrt3\,\delta(z)$, leur produit serait $<3\delta(z)^2$ : contradiction. Le plus grand est donc $\geqslant\sqrt3\,\delta(z)$.` },
    bareme: { sur: 6, l: [[1, R`Produit $\delta(f(z))\delta(g(z))=\delta(z)^2|z^4+4|$`], [1, R`Minoration $|z^4+4|\geqslant3$ avec $|z|\leqslant1$`], [1, R`Existence d'un facteur $\geqslant\sqrt3\,\delta(z)$ et suite $(z_m)$`], [1, R`Majoration $\delta\leqslant2$ et conclusion $\delta(z_0)=0$`], [1, R`$B=\{i,-i\}$ par non-vacuité et symétrie $g(i)=-i$`], [1, R`Réciproque : $\{i,-i\}$ stable, bornée, non vide`]] },
    jury: [
      { e: R`Oublier la réciproque.`, p: R`Seule l'inclusion est démontrée, pas l'égalité.` },
      { e: R`Oublier que $B$ est non vide.`, p: R`$B=\varnothing$ reste possible : conclusion incomplète.` }
    ] }
], [
  { q: R`Pour $z=x+iy$ ($x,y$ réels), le module de $e^z$ vaut :`, c: [R`$e^x$`, R`$e^y$`, R`$1$`, R`$e^{x+y}$`], ok: 0, r: "cx-exp" },
  { q: R`Deux complexes non nuls sont égaux si et seulement si :`, c: [R`même module et arguments égaux modulo $2\pi$`, R`même module`, R`même argument`, R`même partie réelle`], ok: 0, r: "cx-arg" },
  { q: R`L'identité $|u+v|^2$ s'obtient en développant :`, c: [R`$(u+v)(\bar u+\bar v)$`, R`$(u+v)^2$`, R`$u^2+v^2$`, R`$(u+v)(u-v)$`], ok: 0, r: "cx-module" }
]);
})();

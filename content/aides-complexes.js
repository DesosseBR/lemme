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
})();

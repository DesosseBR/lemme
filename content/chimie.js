/* Chimie : programme, résumés, exercices corrigés, DM et questions de khôlle.
   Pour ajouter un exercice : copier un objet de LEMME.exercises([...]) ci-dessous,
   changer son id (unique), son chapitre (chap = index du chapitre, en partant de 0) et son contenu. */

LEMME.subject({
  id: "chimie", name: "Chimie", short: "Chimie", sym: "⇌",
  intro: "Transformations de la matière, structure, solutions aqueuses puis thermodynamique chimique et électrochimie en MP.",
  years: {
    mpsi: [
      C("Transformation de la matière", "Avancement, quotient réactionnel, constante d'équilibre, sens d'évolution",
        R`<ul><li>Si $Q_r < K^\circ$, la réaction évolue dans le sens direct.</li><li>Réaction quasi totale si $K^\circ$ est très grand (on retient souvent $K^\circ > 10^4$).</li></ul>`),
      C("Cinétique chimique", "Vitesse de réaction, ordre, temps de demi-réaction, loi d'Arrhenius",
        R`<ul><li>Ordre 1 : $[A] = [A]_0 e^{-kt}$ et $t_{1/2} = \dfrac{\ln 2}{k}$.</li><li>Ordre 2 : $\dfrac{1}{[A]} = \dfrac{1}{[A]_0} + kt$.</li><li>Arrhenius : $k = A\,e^{-E_a/RT}$.</li></ul>`),
      C("Architecture de la matière", "Configuration électronique, classification périodique, Lewis, VSEPR, polarité",
        R`<ul><li>Règle de Klechkowski pour le remplissage des sous-couches.</li><li>L'électronégativité augmente vers la droite et vers le haut du tableau.</li><li>VSEPR : la géométrie minimise la répulsion des doublets ($AX_4$ tétraédrique).</li></ul>`),
      C("Solides cristallins", "Modèle du cristal parfait, maille CFC, compacité, sites interstitiels",
        R`<ul><li>CFC : 4 atomes par maille, coordinence 12.</li><li>Contact sur la diagonale d'une face : $a\sqrt2 = 4r$.</li><li>Compacité CFC : $\dfrac{\pi}{3\sqrt2} \approx 0{,}74$.</li></ul>`),
      C("Réactions acide-base", "Couples, pKa, diagrammes de prédominance, titrages",
        R`<ul><li>$\mathrm{pH} = \mathrm{p}K_a + \log\dfrac{[A^-]}{[AH]}$.</li><li>Produit ionique de l'eau à 25 °C : $K_e = 10^{-14}$.</li></ul>`),
      C("Précipitation et complexation", "Produit de solubilité, solubilité, effet d'ion commun",
        R`<ul><li>Pour $AB_{(s)} = A^+ + B^-$ : $K_s = [A^+][B^-]$ et $s = \sqrt{K_s}$ dans l'eau pure.</li><li>Le précipité existe si $Q \ge K_s$.</li></ul>`),
      C("Oxydoréduction", "Nombres d'oxydation, potentiel de Nernst, piles",
        R`<ul><li>Nernst à 25 °C : $E = E^\circ + \dfrac{0{,}06}{n}\log\dfrac{[\mathrm{Ox}]^\alpha}{[\mathrm{Red}]^\beta}$.</li><li>Force électromotrice d'une pile : $e = E_+ - E_-$.</li></ul>`),
      C("Diagrammes potentiel-pH", "Lecture, frontières, stabilité de l'eau, dismutation",
        R`<ul><li>Domaine de stabilité de l'eau entre $E = 1{,}23 - 0{,}06\,\mathrm{pH}$ et $E = -0{,}06\,\mathrm{pH}$ (en volts).</li><li>Deux espèces de domaines disjoints réagissent ensemble.</li></ul>`)
    ],
    mp: [
      C("Thermodynamique de la transformation chimique", "Enthalpie et entropie de réaction, enthalpie libre, potentiel chimique, constante d'équilibre",
        R`<ul><li>$\Delta_rG^\circ = \Delta_rH^\circ - T\Delta_rS^\circ$.</li><li>$\Delta_rG^\circ = -RT\ln K^\circ$.</li><li>Van 't Hoff : $\dfrac{d\ln K^\circ}{dT} = \dfrac{\Delta_rH^\circ}{RT^2}$.</li></ul>`),
      C("Optimisation d'un procédé", "Déplacement d'équilibre, influence de la température et de la pression",
        R`<ul><li>Une élévation de température favorise le sens endothermique.</li><li>Une augmentation de pression favorise le sens qui diminue la quantité de gaz.</li></ul>`),
      C("Électrochimie", "Courbes intensité-potentiel, surtension, électrolyse, piles et accumulateurs",
        R`<ul><li>Lecture des courbes $i$-$E$ : réaction rapide ou lente, surtensions.</li><li>Électrolyse : quantité d'électricité $Q = nF$, avec $F \approx 96\,500\ \mathrm{C\,mol^{-1}}$.</li></ul>`),
      C("Corrosion", "Corrosion humide, diagrammes, protection par anode sacrificielle ou courant imposé",
        R`<ul><li>Le métal le plus réducteur se corrode en premier.</li><li>Anode sacrificielle : on relie la pièce à un métal plus réducteur.</li></ul>`)
    ]
  }
});

LEMME.exercises([
{
  id: "ex-cinetique", subj: "chimie", year: "mpsi", chap: 1, level: 1, time: "10 min",
  title: "Temps de conversion pour une réaction d'ordre 1",
  enonce: R`<p>Une réaction d'ordre 1 a un temps de demi-réaction $t_{1/2} = 20\ \mathrm{min}$. Combien de temps faut-il pour consommer $90\,\%$ du réactif ?</p>`,
  steps: [
    ["Constante de vitesse", R`$$k = \frac{\ln2}{t_{1/2}} \approx 3{,}47\times10^{-2}\ \mathrm{min^{-1}}.$$`],
    ["Loi de vitesse intégrée", R`<p>$[A] = [A]_0e^{-kt}$. Il reste $10\,\%$ quand $e^{-kt} = 0{,}1$, soit $t = \dfrac{\ln 10}{k}$.</p>`],
    ["Résultat", R`$$t = t_{1/2}\,\frac{\ln10}{\ln2} \approx 20\times3{,}32 \approx 66\ \mathrm{min}.$$`]
  ],
  piege: R`Croire que $90\,\%$ prennent $1{,}8$ fois $t_{1/2}$ : la décroissance est exponentielle, pas linéaire.`,
  methode: R`Pour un ordre 1, raisonne en nombre de demi-vies : $90\,\%$ consommés correspond à environ $3{,}3$ demi-vies.`
}
]);

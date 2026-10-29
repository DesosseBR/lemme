/* Physique : programme, résumés, exercices corrigés, DM et questions de khôlle.
   Pour ajouter un exercice : copier un objet de LEMME.exercises([...]) ci-dessous,
   changer son id (unique), son chapitre (chap = index du chapitre, en partant de 0) et son contenu. */

LEMME.subject({
  id: "physique", name: "Physique", short: "Physique", sym: "∇",
  intro: "Signaux, mécanique, thermodynamique, électromagnétisme et physique quantique. Les résumés donnent les lois à connaître par cœur et les ordres de grandeur.",
  years: {
    mpsi: [
      C("Signaux et ondes", "Onde progressive, onde sinusoïdale, interférences, diffraction",
        R`<ul><li>Onde progressive : $s(x,t) = f(x-ct)$.</li><li>Onde sinusoïdale : $k = \dfrac{2\pi}{\lambda}$, $\omega = 2\pi f$, $\lambda = cT$.</li><li>Diffraction par une ouverture de largeur $a$ : $\sin\theta \approx \dfrac{\lambda}{a}$.</li></ul>`),
      C("Optique géométrique", "Lois de Snell-Descartes, réflexion totale, miroirs, lentilles minces",
        R`<ul><li>Réfraction : $n_1\sin i_1 = n_2\sin i_2$.</li><li>Réflexion totale si $n_1>n_2$ et $i_1 > \arcsin(n_2/n_1)$.</li><li>Conjugaison (Descartes) : $\dfrac{1}{\overline{OA'}}-\dfrac{1}{\overline{OA}} = \dfrac{1}{f'}$ ; grandissement $\gamma = \dfrac{\overline{OA'}}{\overline{OA}}$.</li></ul>`),
      C("Circuits électriques", "Lois de Kirchhoff, dipôles, circuits RC et RL en régime transitoire",
        R`<ul><li>Constante de temps : $\tau = RC$ ou $\tau = L/R$.</li><li>Tension d'un condensateur et courant dans une bobine : continus.</li><li>Énergie stockée : $\tfrac12 Cu^2$ et $\tfrac12 Li^2$.</li></ul>`),
      C("Oscillateurs", "Oscillateur harmonique, oscillateur amorti, facteur de qualité, RLC",
        R`$$\ddot x + \frac{\omega_0}{Q}\dot x + \omega_0^2 x = 0$$<ul><li>Pseudo-périodique si $Q>\tfrac12$, critique si $Q=\tfrac12$, apériodique si $Q<\tfrac12$.</li><li>RLC série : $\omega_0 = \dfrac{1}{\sqrt{LC}}$, $Q = \dfrac{1}{R}\sqrt{\dfrac{L}{C}}$.</li></ul>`),
      C("Filtrage linéaire", "Régime sinusoïdal forcé, impédances, fonction de transfert, diagramme de Bode",
        R`<ul><li>Impédances : $Z_R = R$, $Z_C = \dfrac{1}{jC\omega}$, $Z_L = jL\omega$.</li><li>Passe-bas du premier ordre : $H = \dfrac{H_0}{1+j\omega/\omega_c}$, pente de $-20\ \text{dB/décade}$.</li><li>Gain en décibels : $G_{dB} = 20\log|H|$.</li></ul>`),
      C("Dynamique du point", "Cinématique, lois de Newton, frottements, mouvement dans le champ de pesanteur",
        R`<ul><li>Principe fondamental : $m\vec a = \sum \vec F$ dans un référentiel galiléen.</li><li>Base polaire : $\vec a = (\ddot r - r\dot\theta^2)\vec u_r + (2\dot r\dot\theta + r\ddot\theta)\vec u_\theta$.</li></ul>`),
      C("Énergétique du point", "Travail, puissance, énergie cinétique, potentielle, mécanique, équilibre et stabilité",
        R`<ul><li>Théorème de l'énergie cinétique : $\Delta E_c = \sum W(\vec F)$.</li><li>Force conservative : $\vec F = -\overrightarrow{\operatorname{grad}}\,E_p$.</li><li>Équilibre stable : minimum de $E_p$.</li></ul>`),
      C("Mouvement dans un champ de force centrale", "Moment cinétique, conservation, lois de Kepler, satellites",
        R`<ul><li>Force centrale : moment cinétique conservé, mouvement plan, loi des aires.</li><li>Troisième loi de Kepler : $\dfrac{T^2}{a^3} = \dfrac{4\pi^2}{GM}$.</li><li>Énergie d'une orbite elliptique : $E = -\dfrac{GMm}{2a}$.</li></ul>`),
      C("Solide en rotation autour d'un axe fixe", "Moment d'inertie, théorème du moment cinétique, pendule pesant",
        R`<ul><li>$J_\Delta\dot\omega = \sum \mathcal M_\Delta$.</li><li>Énergie cinétique de rotation : $\tfrac12 J_\Delta\omega^2$.</li></ul>`),
      C("Particules chargées", "Force de Lorentz, mouvement dans un champ électrique ou magnétique uniforme",
        R`<ul><li>$\vec F = q(\vec E + \vec v\wedge\vec B)$.</li><li>Champ magnétique uniforme : mouvement circulaire de rayon $R = \dfrac{mv}{|q|B}$. La force magnétique ne travaille pas.</li></ul>`),
      C("Thermodynamique", "Gaz parfait, premier et second principe, entropie, machines thermiques",
        R`<ul><li>$PV = nRT$.</li><li>Premier principe : $\Delta U = W + Q$ ; pour une transformation isobare, $\Delta H = Q$.</li><li>Second principe : $\Delta S = S_e + S_c$ avec $S_c\ge0$.</li><li>Rendement de Carnot : $\eta_C = 1 - \dfrac{T_f}{T_c}$.</li></ul>`),
      C("Statique des fluides", "Pression, relation fondamentale, poussée d'Archimède",
        R`<ul><li>$\dfrac{dP}{dz} = -\rho g$ (axe $z$ vers le haut).</li><li>Fluide incompressible : $P(z) = P_0 - \rho g (z - z_0)$.</li></ul>`),
      C("Champ magnétique et forces de Laplace", "Sources de champ, moment magnétique, force et couple de Laplace",
        R`<ul><li>Force de Laplace : $d\vec F = I\,d\vec\ell\wedge\vec B$.</li><li>Couple sur un moment magnétique : $\vec\Gamma = \vec m\wedge\vec B$.</li></ul>`),
      C("Induction", "Loi de Faraday, loi de Lenz, auto-induction, conversion électromécanique",
        R`<ul><li>Faraday : $e = -\dfrac{d\Phi}{dt}$.</li><li>Lenz : les effets de l'induction s'opposent à leur cause.</li><li>Flux propre : $\Phi_p = Li$.</li></ul>`),
      C("Introduction à la physique quantique", "Dualité onde-corpuscule, photon, relation de de Broglie, inégalité de Heisenberg",
        R`<ul><li>Photon : $E = h\nu$, $p = h/\lambda$.</li><li>de Broglie : $\lambda = \dfrac{h}{p}$.</li><li>$\Delta x\,\Delta p_x \gtrsim \hbar$.</li></ul>`)
    ],
    mp: [
      C("Mécanique en référentiel non galiléen", "Forces d'inertie, référentiel terrestre, frottement solide",
        R`<ul><li>Force d'inertie d'entraînement en rotation uniforme : $m\omega^2 \overrightarrow{HM}$.</li><li>Force de Coriolis : $-2m\vec\Omega\wedge\vec v_r$.</li><li>Lois de Coulomb : glissement si $\|\vec T\| = f\|\vec N\|$, non-glissement si $\|\vec T\|\le f\|\vec N\|$.</li></ul>`),
      C("Traitement du signal", "Analyse de Fourier, filtrage, échantillonnage, filtrage numérique",
        R`<ul><li>Un signal périodique est une somme d'harmoniques de fréquences $nf_0$.</li><li>Shannon : il faut $f_e > 2f_{\max}$ pour éviter le repliement.</li></ul>`),
      C("Optique ondulatoire", "Chemin optique, interférences à deux ondes, Young, interféromètre de Michelson",
        R`<ul><li>Intensité : $I = 2I_0\big(1 + \cos\tfrac{2\pi\delta}{\lambda}\big)$.</li><li>Fentes d'Young : $\delta = \dfrac{ax}{D}$, interfrange $i = \dfrac{\lambda D}{a}$.</li><li>Michelson en lame d'air d'épaisseur $e$ : $\delta = 2e\cos i$.</li></ul>`),
      C("Électrostatique", "Champ et potentiel, théorème de Gauss, condensateur, énergie",
        R`<ul><li>Gauss : $\displaystyle\oint \vec E\cdot d\vec S = \frac{Q_{\text{int}}}{\varepsilon_0}$.</li><li>$\vec E = -\overrightarrow{\operatorname{grad}}\,V$.</li><li>Condensateur plan : $C = \dfrac{\varepsilon_0 S}{e}$.</li></ul>`),
      C("Magnétostatique", "Théorème d'Ampère, champs créés par un fil, un solénoïde",
        R`<ul><li>Ampère : $\displaystyle\oint \vec B\cdot d\vec\ell = \mu_0 I_{\text{enl}}$.</li><li>Fil infini : $B = \dfrac{\mu_0 I}{2\pi r}$. Solénoïde long : $B = \mu_0 n I$.</li></ul>`),
      C("Équations de Maxwell et ondes électromagnétiques", "Maxwell, énergie électromagnétique, ondes dans le vide, plasmas, conducteurs",
        R`<ul><li>Maxwell-Faraday : $\overrightarrow{\operatorname{rot}}\,\vec E = -\dfrac{\partial\vec B}{\partial t}$ ; Maxwell-Ampère : $\overrightarrow{\operatorname{rot}}\,\vec B = \mu_0\vec j + \mu_0\varepsilon_0\dfrac{\partial\vec E}{\partial t}$.</li><li>Vecteur de Poynting : $\vec\Pi = \dfrac{\vec E\wedge\vec B}{\mu_0}$.</li><li>Onde plane dans le vide : $\vec B = \dfrac{\vec u\wedge\vec E}{c}$, $c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}}$.</li></ul>`),
      C("Thermodynamique des systèmes ouverts et diffusion", "Bilans en écoulement, diffusion thermique, équation de la chaleur",
        R`<ul><li>Premier principe industriel : $\Delta h + \Delta e_c + \Delta e_p = w_u + q$.</li><li>Loi de Fourier : $\vec j_Q = -\lambda\,\overrightarrow{\operatorname{grad}}\,T$.</li><li>Équation de la chaleur 1D : $\rho c\,\dfrac{\partial T}{\partial t} = \lambda\dfrac{\partial^2 T}{\partial x^2}$.</li></ul>`),
      C("Physique quantique", "Fonction d'onde, équation de Schrödinger, puits infini, effet tunnel",
        R`<ul><li>$i\hbar\dfrac{\partial\psi}{\partial t} = -\dfrac{\hbar^2}{2m}\dfrac{\partial^2\psi}{\partial x^2} + V\psi$.</li><li>Puits infini de largeur $L$ : $E_n = \dfrac{n^2h^2}{8mL^2}$.</li></ul>`),
      C("Thermodynamique statistique", "Facteur de Boltzmann, systèmes à deux niveaux, équipartition",
        R`<ul><li>Probabilité d'un état d'énergie $E$ : proportionnelle à $e^{-E/k_BT}$.</li><li>Équipartition : $\tfrac12 k_BT$ par terme quadratique de l'énergie.</li></ul>`)
    ]
  }
});

LEMME.exercises([
{
  id: "ex-rc", subj: "physique", year: "mpsi", chap: 2, free: true, level: 1, time: "12 min",
  title: "Charge d'un condensateur dans un circuit RC",
  enonce: R`<p>Un condensateur initialement déchargé, de capacité $C = 100\ \mathrm{nF}$, est chargé à travers une résistance $R = 10\ \mathrm{k\Omega}$ par un générateur de tension constante $E$. Établir $u_C(t)$, puis le temps au bout duquel $u_C$ atteint $99\,\%$ de $E$.</p>`,
  steps: [
    ["Équation", R`<p>Loi des mailles et $i = C\dfrac{du_C}{dt}$ :</p>$$RC\frac{du_C}{dt}+u_C = E.$$`],
    ["Résolution", R`<p>Avec $\tau = RC$ et $u_C(0) = 0$ (continuité de la tension aux bornes du condensateur) :</p>$$u_C(t) = E\big(1-e^{-t/\tau}\big).$$`],
    ["Application numérique", R`<p>$\tau = 10^4\times10^{-7} = 10^{-3}\ \mathrm{s} = 1\ \mathrm{ms}$.</p>`],
    ["99 %", R`$$1-e^{-t/\tau} = 0{,}99 \iff t = \tau\ln 100 \approx 4{,}6\,\tau \approx 4{,}6\ \mathrm{ms}.$$`]
  ],
  piege: R`Supposer $u_C(0) = E$ : c'est la tension du condensateur qui est continue, pas le courant.`,
  methode: R`Un premier ordre atteint $63\,\%$ de sa valeur finale en $\tau$, $95\,\%$ en $3\tau$ et $99\,\%$ en environ $5\tau$.`
},
{
  id: "ex-chute", subj: "physique", year: "mpsi", chap: 5, level: 1, time: "12 min",
  title: "Chute verticale avec frottement linéaire",
  enonce: R`<p>Une bille de masse $m$ est lâchée sans vitesse initiale. Elle subit son poids et une force de frottement $-\alpha\vec v$. Déterminer $v(t)$ et la vitesse limite.</p>`,
  steps: [
    ["Bilan des forces", R`<p>Axe vertical descendant. Principe fondamental : $m\dfrac{dv}{dt} = mg-\alpha v$.</p>`],
    ["Forme canonique", R`$$\frac{dv}{dt}+\frac{v}{\tau} = g,\qquad \tau = \frac{m}{\alpha}.$$`],
    ["Solution", R`$$v(t) = v_\ell\big(1-e^{-t/\tau}\big),\qquad v_\ell = \frac{mg}{\alpha}.$$`],
    ["Vérification", R`<p>En régime permanent, $\frac{dv}{dt} = 0$ donc $mg = \alpha v_\ell$ : le poids compense le frottement.</p>`]
  ],
  piege: R`Mélanger les signes en prenant un axe vers le haut sans changer le signe du poids.`,
  methode: R`Trouve la vitesse limite directement en écrivant l'équilibre des forces, puis vérifie-la sur ta solution.`
},
{
  id: "ex-young", subj: "physique", year: "mp", chap: 2, level: 1, time: "10 min",
  title: "Interfrange des fentes d'Young",
  enonce: R`<p>Deux fentes distantes de $a = 0{,}50\ \mathrm{mm}$ sont éclairées par une source de longueur d'onde $\lambda = 600\ \mathrm{nm}$. L'écran est à $D = 1{,}0\ \mathrm{m}$. Calculer l'interfrange.</p>`,
  steps: [
    ["Différence de marche", R`<p>Pour $D\gg a, x$ : $\delta = \dfrac{ax}{D}$.</p>`],
    ["Franges brillantes", R`<p>$\delta = p\lambda$ donne $x_p = p\dfrac{\lambda D}{a}$, d'où $i = \dfrac{\lambda D}{a}$.</p>`],
    ["Application numérique", R`$$i = \frac{600\times10^{-9}\times1{,}0}{0{,}50\times10^{-3}} = 1{,}2\times10^{-3}\ \mathrm{m} = 1{,}2\ \mathrm{mm}.$$`]
  ],
  piege: R`Oublier de convertir les millimètres et nanomètres en mètres.`,
  methode: R`Vérifie l'ordre de grandeur : en optique visible, un interfrange de l'ordre du millimètre est normal.`
}
]);

LEMME.dm([
  { subj: "physique", year: "mpsi", title: "DM 3 · Le pendule simple et ses limites",
    body: R`<ol><li>Établir l'équation du mouvement d'un pendule simple de longueur $\ell$.</li><li>Dans l'approximation des petits angles, donner la période $T_0$.</li><li>Par une méthode énergétique, exprimer la vitesse au point bas pour un lâcher à l'angle $\theta_0$.</li><li>Expliquer qualitativement pourquoi la période augmente avec l'amplitude.</li></ol>` }
]);

LEMME.kholles([
  { subj: "physique", year: "mpsi", qs: ["Établir l'équation différentielle d'un circuit RLC série.", "Démontrer la troisième loi de Kepler pour une orbite circulaire.", "Établir l'expression du rendement de Carnot.", "Établir la relation de conjugaison d'une lentille mince."] },
  { subj: "physique", year: "mp", qs: ["Établir l'interfrange des fentes d'Young.", "Établir l'équation de la chaleur à une dimension.", "Établir l'équation de propagation de $\\vec E$ dans le vide à partir des équations de Maxwell.", "Calculer le champ créé par un fil infini avec le théorème d'Ampère."] }
]);

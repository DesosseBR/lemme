/* Contenu de la matière : programme, résumés, rappels de cours, exercices, problèmes, DM et khôlles.
   Le format est décrit dans README.md. */

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


LEMME.rappels({
  "loi-mailles": { t: "Loi des mailles", b: R`Dans une maille, la somme algébrique des tensions est nulle. Pour un générateur $E$ en série avec $R$ et $C$ : $E = Ri + u_C$.` },
  "condensateur": { t: "Le condensateur", b: R`$i = C\dfrac{du_C}{dt}$, et la tension $u_C$ aux bornes d'un condensateur est une fonction continue du temps.` },
  "pfd": { t: "Principe fondamental de la dynamique", b: R`Dans un référentiel galiléen : $m\vec a = \sum\vec F$.` },
  "frottement-lineaire": { t: "Frottement fluide linéaire", b: R`À faible vitesse : $\vec F = -\alpha\vec v$, avec $\alpha>0$.` },
  "young": { t: "Fentes d'Young", b: R`Pour $D\gg a$ et $D\gg|x|$ : $\delta = \dfrac{ax}{D}$. Franges brillantes pour $\delta = p\lambda$, interfrange $i = \dfrac{\lambda D}{a}$.` },
  "tmc": { t: "Théorème du moment cinétique", b: R`Pour un point en rotation autour d'un axe fixe : $\dfrac{dL_\Delta}{dt} = \sum\mathcal M_\Delta$, avec ici $L_\Delta = m\ell^2\dot\theta$.` },
  "energie-mecanique": { t: "Conservation de l'énergie mécanique", b: R`Si les seules forces qui travaillent sont conservatives, $E_m = E_c + E_p$ est constante. Une force perpendiculaire à la vitesse ne travaille pas.` },
  "petits-angles": { t: "Approximation des petits angles", b: R`Pour $|\theta|\ll1$ rad : $\sin\theta\approx\theta$ et $\cos\theta\approx1-\frac{\theta^2}{2}$.` },
  "oscillateur-harmonique": { t: "Oscillateur harmonique", b: R`$\ddot\theta+\omega_0^2\theta = 0$ a pour solutions $\theta_0\cos(\omega_0t+\varphi)$, de période $T_0 = \dfrac{2\pi}{\omega_0}$.` }
});

LEMME.exercises([
{
  id: "ex-rc", subj: "physique", year: "mpsi", chap: 2, classique: true, level: 2, time: "12 min",
  title: "Charge d'un condensateur",
  enonce: R`<p>Un condensateur <span data-k="decharge">initialement déchargé</span>, de capacité $C = 100\ \mathrm{nF}$, est chargé à travers une résistance $R = 10\ \mathrm{k}\Omega$ par un générateur de tension constante $E$. Établir $u_C(t)$, puis le temps au bout duquel $u_C$ atteint $99\,\%$ de $E$.</p>`,
  decode: {
    donnees: [R`$C = 100\ \mathrm{nF} = 10^{-7}\ \mathrm F$`, R`$R = 10\ \mathrm{k}\Omega = 10^{4}\ \Omega$`, R`Tension $E$ constante, interrupteur fermé à $t = 0$.`],
    but: R`La loi $u_C(t)$, puis l'instant où $u_C = 0{,}99\,E$.`,
    cles: { decharge: R`À $t=0$, $u_C(0) = 0$. C'est la condition initiale.` }
  },
  steps: [
    { t: "Équation", b: R`<p>Loi des mailles et relation du condensateur :</p>$$E = Ri+u_C = RC\frac{du_C}{dt}+u_C.$$`, rappels: ["loi-mailles", "condensateur"] },
    { t: "Résolution", b: R`<p>Avec $\tau = RC$, les solutions sont $u_C = E+\lambda e^{-t/\tau}$. La continuité de $u_C$ donne $u_C(0)=0$, d'où $\lambda=-E$ :</p>$$u_C(t) = E\big(1-e^{-t/\tau}\big).$$`, rappels: ["edo1", "condensateur"] },
    { t: "Application numérique", b: R`$$\tau = RC = 10^4\times10^{-7} = 10^{-3}\ \mathrm{s} = 1\ \mathrm{ms}.$$` },
    { t: "Le temps à 99 %", b: R`$$e^{-t/\tau} = 0{,}01 \iff t = \tau\ln100 \approx 4{,}6\ \mathrm{ms}.$$`, rappels: ["premier-ordre-reperes"] }
  ],
  piege: R`Prendre $u_C(0) = E$ : c'est la tension du condensateur qui est continue, pas le courant.`,
  methode: R`Un premier ordre atteint $63\,\%$ en $\tau$, $95\,\%$ en $3\tau$, $99\,\%$ en environ $5\tau$.`,
  viz: {
    type: "plot", title: "Change R et C : la courbe s'étire avec τ = RC", x: [0, 10], y: [0, 1.1], xlabel: "t (ms)", ylabel: "u_C / E",
    params: [
      { k: "R", label: "R", min: 1, max: 30, step: 1, v: 10, unit: "kΩ" },
      { k: "C", label: "C", min: 10, max: 300, step: 10, v: 100, unit: "nF" }
    ],
    curves: [{ label: "u_C / E", f: (t, p) => 1 - Math.exp(-t / (p.R * p.C * 1e-3)) }],
    vlines: [{ x: p => p.R * p.C * 1e-3, label: "τ" }],
    hlines: [{ y: () => 0.99, label: "99 %" }]
  }
},
{
  id: "ex-chute", subj: "physique", year: "mpsi", chap: 5, level: 2, time: "12 min",
  title: "Chute avec frottement linéaire",
  enonce: R`<p>Une bille de masse $m$ est lâchée sans vitesse initiale. Elle subit son poids et une force de frottement $-\alpha\vec v$. Déterminer $v(t)$ et <span data-k="vlim">la vitesse limite</span>.</p>`,
  decode: {
    donnees: [R`Masse $m$, champ de pesanteur $g$, coefficient de frottement $\alpha$.`, R`$v(0) = 0$.`],
    but: R`L'expression de $v(t)$ et sa limite quand $t\to+\infty$.`,
    cles: { vlim: R`La vitesse atteinte en régime permanent, quand l'accélération s'annule.` }
  },
  steps: [
    { t: "Bilan des forces", b: R`<p>Axe vertical vers le bas. Le PFD projeté donne $m\dfrac{dv}{dt} = mg-\alpha v$.</p>`, rappels: ["pfd", "frottement-lineaire"] },
    { t: "Forme canonique", b: R`$$\frac{dv}{dt}+\frac{v}{\tau} = g,\qquad \tau = \frac m\alpha.$$` },
    { t: "Solution", b: R`$$v(t) = v_\ell\big(1-e^{-t/\tau}\big),\qquad v_\ell = \frac{mg}{\alpha}.$$`, rappels: ["edo1"] },
    { t: "Vérification", b: R`<p>En régime permanent, $\frac{dv}{dt}=0$ : $mg = \alpha v_\ell$. Le poids compense le frottement.</p>` }
  ],
  piege: R`Prendre un axe vers le haut sans changer le signe du poids.`,
  methode: R`Trouve la vitesse limite directement par l'équilibre des forces, puis vérifie-la sur ta solution.`,
  viz: {
    type: "plot", title: "Plus de frottement : vitesse limite plus basse, atteinte plus vite", x: [0, 3], y: [0, 12], xlabel: "t (s)", ylabel: "v (m/s)",
    params: [
      { k: "m", label: "Masse m", min: 0.01, max: 0.2, step: 0.01, v: 0.05, unit: "kg" },
      { k: "a", label: "Coefficient α", min: 0.05, max: 0.5, step: 0.01, v: 0.1, unit: "kg/s" }
    ],
    curves: [{ label: "v(t)", f: (t, p) => (p.m * 9.81 / p.a) * (1 - Math.exp(-t * p.a / p.m)) }],
    hlines: [{ y: p => p.m * 9.81 / p.a, label: "v_ℓ" }]
  }
},
{
  id: "pb-pendule", kind: "probleme", subj: "physique", year: "mpsi", chap: 6, classique: true, level: 3, time: "40 min",
  title: "Le pendule simple et ses limites",
  enonce: R`<p>Un point matériel de masse $m$ est suspendu à un fil inextensible de longueur $\ell$, de masse négligeable. On repère sa position par l'angle $\theta$ avec la verticale.</p><ol><li>Établir l'équation du mouvement.</li><li>Dans <span data-k="petits">l'approximation des petits angles</span>, donner la période $T_0$. Application : $\ell = 1{,}0\ \mathrm m$, $g = 9{,}8\ \mathrm{m\,s^{-2}}$.</li><li>Par une méthode énergétique, exprimer la vitesse au point bas pour un lâcher sans vitesse à l'angle $\theta_0$.</li><li>Expliquer pourquoi la période augmente avec l'amplitude.</li></ol>`,
  decode: {
    donnees: [R`Forces : le poids $m\vec g$ et la tension $\vec T$ du fil, dirigée vers le point d'attache.`, R`Le mouvement est circulaire de rayon $\ell$.`],
    but: R`L'équation du mouvement, la période, une vitesse, puis une interprétation physique.`,
    cles: { petits: R`On suppose $|\theta|$ petit devant $1$ radian, de sorte que $\sin\theta\approx\theta$.` }
  },
  steps: [
    { t: "Q1 · Équation", b: R`<p>Par le théorème du moment cinétique en $O$ : la tension passe par $O$, son moment est nul. Celui du poids vaut $-mg\ell\sin\theta$. D'où</p>$$m\ell^2\ddot\theta = -mg\ell\sin\theta \iff \ddot\theta+\frac g\ell\sin\theta = 0.$$`, rappels: ["tmc"] },
    { t: "Q2 · Période", b: R`<p>Avec $\sin\theta\approx\theta$ : $\ddot\theta+\omega_0^2\theta = 0$, avec $\omega_0 = \sqrt{g/\ell}$. Donc</p>$$T_0 = 2\pi\sqrt{\frac\ell g} \approx 2{,}0\ \mathrm s.$$`, rappels: ["petits-angles", "oscillateur-harmonique"] },
    { t: "Q3 · Énergie", b: R`<p>La tension est perpendiculaire à la vitesse : elle ne travaille pas. L'énergie mécanique se conserve :</p>$$\tfrac12mv^2 + mg\ell(1-\cos\theta) = mg\ell(1-\cos\theta_0).$$<p>Au point bas, $v = \sqrt{2g\ell(1-\cos\theta_0)}$.</p>`, rappels: ["energie-mecanique"] },
    { t: "Q4 · Interprétation", b: R`<p>Comme $\sin\theta<\theta$ pour $\theta>0$, le rappel réel est plus faible que dans le modèle linéaire. Le pendule revient moins vite : la période augmente. Au premier ordre, $T\approx T_0\big(1+\frac{\theta_0^2}{16}\big)$.</p>` }
  ],
  piege: R`Appliquer l'approximation des petits angles dans la question énergétique : l'énergie se calcule exactement, avec $1-\cos\theta$.`,
  methode: R`Pour un mouvement circulaire, le théorème du moment cinétique élimine directement la tension du fil.`,
  viz: {
    type: "plot", title: "Un fil plus long donne des oscillations plus lentes", x: [0, 8], y: [-0.4, 0.4], xlabel: "t (s)", ylabel: "θ (rad)",
    params: [{ k: "l", label: "Longueur ℓ", min: 0.2, max: 3, step: 0.1, v: 1, unit: "m" }],
    curves: [{ label: "θ(t), petits angles", f: (t, p) => 0.3 * Math.cos(Math.sqrt(9.8 / p.l) * t) }]
  }
},
{
  id: "ex-young", subj: "physique", year: "mp", chap: 2, classique: true, level: 2, time: "10 min",
  title: "Interfrange des fentes d'Young",
  enonce: R`<p>Deux fentes distantes de $a = 0{,}50\ \mathrm{mm}$ sont éclairées par une source de longueur d'onde $\lambda = 600\ \mathrm{nm}$. L'écran est à $D = 1{,}0\ \mathrm m$. Calculer <span data-k="interfrange">l'interfrange</span>.</p>`,
  decode: {
    donnees: [R`$a = 5{,}0\times10^{-4}\ \mathrm m$`, R`$\lambda = 6{,}0\times10^{-7}\ \mathrm m$`, R`$D = 1{,}0\ \mathrm m$`],
    but: R`La distance $i$ entre deux franges brillantes successives.`,
    cles: { interfrange: R`La distance entre les centres de deux franges brillantes consécutives sur l'écran.` }
  },
  steps: [
    { t: "Différence de marche", b: R`<p>Pour $D\gg a,|x|$ : $\delta = \dfrac{ax}{D}$.</p>`, rappels: ["young"] },
    { t: "Franges brillantes", b: R`<p>$\delta = p\lambda$ donne $x_p = p\dfrac{\lambda D}{a}$, d'où $i = \dfrac{\lambda D}{a}$.</p>` },
    { t: "Application numérique", b: R`$$i = \frac{6{,}0\times10^{-7}\times1{,}0}{5{,}0\times10^{-4}} = 1{,}2\ \mathrm{mm}.$$` }
  ],
  piege: R`Oublier de convertir millimètres et nanomètres en mètres.`,
  methode: R`En optique visible, un interfrange de l'ordre du millimètre est normal : vérifie toujours l'ordre de grandeur.`,
  viz: {
    type: "plot", title: "Rapproche les fentes : les franges s'élargissent", x: [-5, 5], y: [0, 2.2], xlabel: "x (mm)", ylabel: "I / I₀",
    params: [
      { k: "a", label: "Écart a", min: 0.2, max: 1.5, step: 0.05, v: 0.5, unit: "mm" },
      { k: "lam", label: "Longueur d'onde λ", min: 400, max: 750, step: 10, v: 600, unit: "nm" }
    ],
    curves: [{ label: "Intensité", f: (x, p) => 1 + Math.cos(2 * Math.PI * (p.a * 1e-3) * (x * 1e-3) / (p.lam * 1e-9 * 1.0)) }]
  }
}
]);

LEMME.dm([
  { subj: "physique", year: "mpsi", title: "Le pendule simple et ses limites", corrige: "pb-pendule",
    body: R`<p>Un point matériel de masse $m$ est suspendu à un fil inextensible de longueur $\ell$. On repère sa position par l'angle $\theta$ avec la verticale.</p><ol><li>Établir l'équation du mouvement.</li><li>Dans l'approximation des petits angles, donner la période $T_0$.</li><li>Par une méthode énergétique, exprimer la vitesse au point bas pour un lâcher sans vitesse à l'angle $\theta_0$.</li><li>Expliquer pourquoi la période augmente avec l'amplitude.</li></ol>` }
]);

LEMME.kholles([
  { subj: "physique", year: "mpsi", qs: ["Établir l'équation différentielle d'un circuit RLC série.", "Démontrer la troisième loi de Kepler pour une orbite circulaire.", "Établir l'expression du rendement de Carnot.", "Établir la relation de conjugaison d'une lentille mince."] },
  { subj: "physique", year: "mp", qs: ["Établir l'interfrange des fentes d'Young.", "Établir l'équation de la chaleur à une dimension.", R`Établir l'équation de propagation de $\vec E$ dans le vide à partir des équations de Maxwell.`, "Calculer le champ créé par un fil infini avec le théorème d'Ampère."] }
]);

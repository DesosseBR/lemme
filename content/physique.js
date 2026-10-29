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

/* ---------- MP · Mécanique en référentiel non galiléen ----------
   Énoncé et corrigé côte à côte (side: true), figures en SVG, animations. */
(() => {
const f1 = v => +v.toFixed(1);
/* Flèche : un trait et une pointe pleine. c : k (noir), b (bleu), r (rouge), g (or), v (vert). */
const A = (x1, y1, x2, y2, c = "k", h = 10) => {
  const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - h * Math.cos(a), by = y2 - h * Math.sin(a), w = h * 0.42;
  const pts = [[x2, y2], [bx + w * Math.sin(a), by - w * Math.cos(a)], [bx - w * Math.sin(a), by + w * Math.cos(a)]].map(q => q.map(f1).join(",")).join(" ");
  return `<line class="v${c}" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(bx)}" y2="${f1(by)}"/><polygon class="h${c}" points="${pts}"/>`;
};
/* Axe de repère (gris, pointe fine) */
const AX = (x1, y1, x2, y2) => {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 8, bx = x2 - h * Math.cos(a), by = y2 - h * Math.sin(a), w = 3.4;
  return `<line class="ax" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(bx)}" y2="${f1(by)}"/><polygon class="axh" points="${[[x2, y2], [bx + w * Math.sin(a), by - w * Math.cos(a)], [bx - w * Math.sin(a), by + w * Math.cos(a)]].map(q => q.map(f1).join(",")).join(" ")}"/>`;
};
/* Cote : double flèche fine avec texte */
const DIM = (x1, y1, x2, y2) => {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 7, w = 3;
  const head = (x, y, s) => `<polygon class="axh" points="${[[x, y], [x - s * h * Math.cos(a) + w * Math.sin(a), y - s * h * Math.sin(a) - w * Math.cos(a)], [x - s * h * Math.cos(a) - w * Math.sin(a), y - s * h * Math.sin(a) + w * Math.cos(a)]].map(q => q.map(f1).join(",")).join(" ")}"/>`;
  return `<line class="ax" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}"/>${head(x2, y2, 1)}${head(x1, y1, -1)}`;
};
/* Texte en italique, avec indice facultatif */
const T = (x, y, main, sub, cls = "", anchor = "start") =>
  `<text x="${x}" y="${y}" class="it ${cls}" text-anchor="${anchor}">${main}${sub ? `<tspan dy="4" font-size="11">${sub}</tspan>` : ""}</text>`;
/* Vecteur : lettre surmontée d'une petite flèche */
const VL = (x, y, main, sub, c = "k") => {
  const w = 8.6 * main.length + (sub ? 6.4 * sub.length : 0) + 1;
  return T(x, y, main, sub, c === "k" ? "" : c) + `<line class="v${c}" style="stroke-width:1.1" x1="${x}" y1="${y - 15}" x2="${f1(x + w - 3)}" y2="${y - 15}"/><polygon class="h${c}" points="${f1(x + w)},${y - 15} ${f1(x + w - 5)},${y - 17.4} ${f1(x + w - 5)},${y - 12.6}"/>`;
};
const S = (x, y, txt, anchor = "start") => `<text x="${x}" y="${y}" class="sm" text-anchor="${anchor}">${txt}</text>`;
/* Ressort en zigzag entre deux points */
const ZIG = (x1, y1, x2, y2, n = 12, amp = 7) => {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, e = Math.min(10, L * 0.12);
  let d = `M${f1(x1)} ${f1(y1)} L${f1(x1 + ux * e)} ${f1(y1 + uy * e)}`;
  for (let k = 1; k < 2 * n; k++) { const s = e + (L - 2 * e) * k / (2 * n), o = (k % 2 ? amp : -amp); d += ` L${f1(x1 + ux * s - uy * o)} ${f1(y1 + uy * s + ux * o)}`; }
  d += ` L${f1(x2 - ux * e)} ${f1(y2 - uy * e)} L${f1(x2)} ${f1(y2)}`;
  return `<path class="k" style="stroke-width:1.4" d="${d}"/>`;
};
/* Hachures du sol */
const GROUND = (x1, x2, y) => { let s = `<line class="k" x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>`; for (let x = x1 + 4; x <= x2; x += 10) s += `<line class="hatch" x1="${x}" y1="${y}" x2="${x - 8}" y2="${y + 9}"/>`; return s; };
/* Axe de rotation qui sort de la feuille */
const OUT = (x, y) => `<circle class="k" cx="${x}" cy="${y}" r="7"/><circle class="hk" cx="${x}" cy="${y}" r="2.2"/>`;
/* Courbe y = f(x) dans un cadre */
const PATH = (f, a, b, X, Y, n = 160, cls = "vb") => {
  let d = "", on = false;
  for (let k = 0; k <= n; k++) { const x = a + (b - a) * k / n, y = f(x); if (!isFinite(y)) { on = false; continue; } d += `${on ? "L" : "M"}${f1(X(x))} ${f1(Y(y))} `; on = true; }
  return `<path class="${cls}" style="fill:none" d="${d.trim()}"/>`;
};
const FIG = (w, h, body, cap, label) => `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${cap}</figcaption></figure>`;

/* ===== Figures : perle sur une tige ===== */
const cx = 180, cy = 150, th = Math.PI / 6, c30 = Math.cos(th), s30 = Math.sin(th);
const P = r => [cx + r * c30, cy - r * s30];
const [mx, my] = P(92);
const figTigeDessus = FIG(360, 300,
  AX(30, cy, 345, cy) + AX(cx, 285, cx, 15) + T(336, cy + 20, "x") + T(cx + 10, 24, "y") +
  `<line class="k" style="stroke-width:5;stroke-linecap:round;opacity:.85" x1="${f1(P(-140)[0])}" y1="${f1(P(-140)[1])}" x2="${f1(P(140)[0])}" y2="${f1(P(140)[1])}"/>` +
  S(f1(P(140)[0]) + 6, f1(P(140)[1]) + 6, "B") + S(f1(P(-140)[0]) - 14, f1(P(-140)[1]) + 14, "A") +
  `<path class="k" style="stroke-width:1.2" d="M${cx + 46} ${cy} A46 46 0 0 0 ${f1(cx + 46 * c30)} ${f1(cy - 46 * s30)}"/>` + T(cx + 52, cy - 7, "θ") +
  OUT(cx, cy) + T(cx - 22, cy + 22, "O") +
  `<circle class="mass" cx="${f1(mx)}" cy="${f1(my)}" r="8"/>` + T(f1(mx) + 4, f1(my) + 28, "M") +
  A(mx, my, mx + 34 * c30, my - 34 * s30, "k", 9) + VL(f1(mx + 22), f1(my + 4), "u", "r") +
  A(mx, my, mx - 40 * s30, my - 40 * c30, "k", 9) + VL(f1(mx - 40 * s30) - 26, f1(my - 40 * c30) - 2, "u", "θ") +
  T(f1(P(46)[0]) - 8, f1(P(46)[1]) - 10, "r"),
  R`Vue de dessus. La tige tourne autour de l'axe vertical $(Oz)$, qui sort de la feuille, avec $\theta = \omega t$. La base $(\vec u_r,\vec u_\theta)$ est attachée à la tige : elle tourne avec elle.`,
  "Vue de dessus de la tige en rotation et de la perle");
const figTigeProfil = FIG(360, 230,
  `<line class="thin" x1="180" y1="200" x2="180" y2="30"/>` + AX(180, 60, 180, 18) + T(190, 30, "z") +
  `<path class="k" style="stroke-width:1.3" d="M156 50 A24 7 0 1 0 204 50"/>` + `<polygon class="hk" points="204,50 196,45 197,54"/>` + T(210, 56, "ω") +
  `<line class="k" style="stroke-width:5;stroke-linecap:round;opacity:.85" x1="40" y1="120" x2="320" y2="120"/>` +
  `<rect class="body" x="173" y="124" width="14" height="62" rx="2"/>` + GROUND(130, 230, 186) +
  T(156, 112, "O") + S(40, 108, "A") + S(312, 108, "B") +
  `<circle class="mass" cx="252" cy="120" r="9"/>` + T(262, 142, "M") +
  A(252, 120, 252, 176, "k") + VL(260, 176, "P") +
  A(252, 120, 252, 70, "b") + VL(260, 78, "R", "z", "b") +
  DIM(187, 158, 248, 158) + T(212, 152, "r"),
  R`Vue de côté. La tige reste horizontale. Verticalement, la réaction $R_z$ de la tige compense le poids.`,
  "Vue de côté de la tige horizontale, du poids et de la réaction verticale");
const figTigeForces = FIG(360, 260,
  `<line class="k" style="stroke-width:5;stroke-linecap:round;opacity:.85" x1="40" y1="130" x2="330" y2="130"/>` + OUT(150, 130) + T(128, 152, "O") +
  `<circle class="mass" cx="250" cy="130" r="9"/>` + T(232, 152, "M") +
  A(259, 130, 322, 130, "r", 11) + VL(286, 118, "f", "ie", "r") +
  A(250, 139, 250, 205, "g", 11) + VL(258, 202, "f", "ic", "g") +
  A(250, 121, 250, 58, "b", 11) + VL(258, 66, "R", "θ", "b") +
  A(40, 232, 76, 232, "k", 8) + VL(80, 236, "u", "r") + A(40, 232, 40, 196, "k", 8) + VL(46, 196, "u", "θ") +
  S(178, 248, "ici la perle s'éloigne de O : ṙ > 0", "start"),
  R`Dans le référentiel de la tige, vu de dessus. La force d'entraînement pousse vers l'extérieur, la force de Coriolis pousse vers $-\vec u_\theta$, la tige répond par $R_\theta$. Le poids et $R_z$ sont verticaux : ils sortent de la feuille et ne sont pas dessinés.`,
  "Bilan des forces horizontales sur la perle dans le référentiel de la tige");
const figTigeRessort = FIG(360, 170,
  `<line class="k" style="stroke-width:5;stroke-linecap:round;opacity:.85" x1="40" y1="80" x2="330" y2="80"/>` + OUT(90, 80) + T(70, 104, "O") +
  ZIG(97, 80, 238, 80, 11, 8) + `<circle class="mass" cx="248" cy="80" r="10"/>` + T(242, 108, "M") +
  A(258, 80, 320, 80, "r", 11) + VL(282, 66, "f", "ie", "r") +
  `<line class="thin" x1="248" y1="69" x2="248" y2="52"/>` + A(248, 52, 186, 52, "b", 11) + VL(204, 40, "F", "", "b") +
  DIM(90, 132, 248, 132) + T(164, 150, "r") + `<line class="thin" x1="90" y1="122" x2="90" y2="142"/><line class="thin" x1="248" y1="122" x2="248" y2="142"/>`,
  R`Avec le ressort : si $r>\ell_0$, le ressort est étiré et tire la perle vers $O$ ; la force d'entraînement la pousse vers l'extérieur.`,
  "La perle reliée à O par un ressort");
/* Trajectoire vue du sol : spirale r = r0 ch(θ) pour θ = ωt de 0 à ωτ */
const figSpirale = (() => {
  const S0 = 130 / 0.25, ox = 180, oy = 170, tau = Math.acosh(5);
  let d = "";
  for (let k = 0; k <= 120; k++) { const a = tau * k / 120, r = 0.05 * Math.cosh(a); d += `${k ? "L" : "M"}${f1(ox + S0 * r * Math.cos(a))} ${f1(oy - S0 * r * Math.sin(a))} `; }
  const ex = ox + 130 * Math.cos(tau), ey = oy - 130 * Math.sin(tau);
  return FIG(360, 320,
    `<circle class="thin" cx="${ox}" cy="${oy}" r="130"/>` + AX(30, oy, 340, oy) + AX(ox, 310, ox, 20) + T(330, oy + 20, "x") + T(ox + 10, 30, "y") +
    `<line class="k" style="stroke-width:3;opacity:.25;stroke-linecap:round" x1="${ox - 130}" y1="${oy}" x2="${ox + 130}" y2="${oy}"/>` +
    `<line class="k" style="stroke-width:3;opacity:.55;stroke-linecap:round" x1="${f1(ox - 130 * Math.cos(tau))}" y1="${f1(oy + 130 * Math.sin(tau))}" x2="${f1(ex)}" y2="${f1(ey)}"/>` +
    `<path class="vb" style="fill:none" d="${d.trim()}"/>` + `<circle class="mass" cx="${ox + 26}" cy="${oy}" r="5"/>` + `<circle class="mass" cx="${f1(ex)}" cy="${f1(ey)}" r="6"/>` +
    S(ox + 22, oy + 22, "départ") + S(f1(ex) - 8, f1(ey) - 12, "sortie", "end") + S(ox + 98, oy - 116, "bout de la tige (r = ℓ)") + OUT(ox, oy),
    R`Trajectoire de la perle vue du sol (référentiel galiléen) avec les valeurs numériques de l'énoncé : la tige a tourné d'environ $131^\circ$ quand la perle sort. Position de la tige au départ (pâle) et à la sortie (foncée).`,
    "Trajectoire en spirale de la perle vue du sol");
})();
/* Les trois régimes avec ressort */
const mini = (f, ttl, cap, ymax, lab) => {
  const X = t => 30 + t / 3 * 160, Y = y => 120 - y / ymax * 100;
  return FIG(200, 150, AX(30, 120, 196, 120) + AX(30, 124, 30, 12) + S(190, 138, "t", "end") + T(36, 20, "r") + PATH(f, 0, 3, X, Y, 150, "vb") + `<line class="thin" x1="30" y1="${f1(Y(25))}" x2="196" y2="${f1(Y(25))}"/>` + S(196, f1(Y(25)) - 5, "r = ℓ", "end") + `<text x="110" y="148" class="sm" text-anchor="middle">${lab}</text>`, cap, ttl);
};
const reg = (om, oc) => t => { const l0 = 8, r0 = 5, D = oc * oc - om * om; let r; if (Math.abs(D) < 1e-9) r = r0 + 0.5 * oc * oc * l0 * t * t; else { const rp = oc * oc * l0 / D; r = D > 0 ? rp + (r0 - rp) * Math.cos(Math.sqrt(D) * t) : rp + (r0 - rp) * Math.cosh(Math.sqrt(-D) * t); } return r > 26 ? NaN : r; };
const figRegimes = `<div class="figrow">${mini(reg(2, 4), "ω inférieur à ωc", R`Oscillations autour de $r_e$.`, 28, "ω < ω<tspan dy=\"3\" font-size=\"9\">c</tspan>")}${mini(reg(2, 2), "ω égal à ωc", R`Croissance en $t^2$.`, 28, "ω = ω<tspan dy=\"3\" font-size=\"9\">c</tspan>")}${mini(reg(3, 2), "ω supérieur à ωc", R`Croissance exponentielle.`, 28, "ω > ω<tspan dy=\"3\" font-size=\"9\">c</tspan>")}</div>`;

/* ===== Figures : sismomètre ===== */
const figSismo = FIG(380, 330,
  `<line class="thin" x1="20" y1="300" x2="360" y2="300"/>` + S(360, 316, "position du sol au repos (z = 0)", "end") +
  GROUND(100, 330, 280) + DIM(62, 300, 62, 282) + T(18, 296, "z", "s") +
  `<path class="k" style="stroke-width:3;stroke-linejoin:round" d="M122 280 L122 40 L298 40 L298 280"/>` +
  `<circle class="hk" cx="210" cy="40" r="3"/>` + T(224, 60, "A") +
  ZIG(210, 40, 210, 148, 9, 9) + S(150, 98, "k, ℓ₀", "end") +
  `<rect class="mass" x="182" y="148" width="56" height="40" rx="3"/>` + T(204, 174, "m") +
  `<line class="k" x1="210" y1="188" x2="210" y2="232"/><line class="k" style="stroke-width:2.4" x1="198" y1="232" x2="222" y2="232"/>` +
  `<path class="k" d="M192 214 L192 256 L228 256 L228 214"/><line class="k" x1="210" y1="256" x2="210" y2="280"/>` + S(236, 248, "λ") +
  DIM(256, 279, 256, 170) + T(261, 230, "h(t)") + `<line class="thin" x1="240" y1="168" x2="262" y2="168"/>` +
  DIM(318, 279, 318, 41) + T(324, 164, "D") +
  AX(86, 220, 86, 168) + VL(92, 172, "u", "z") +
  S(122, 28, "boîtier, solidaire du sol"),
  R`Le sismomètre. Le boîtier suit le sol : son plancher est à la cote $z_s(t)$ dans le référentiel terrestre. L'appareil enregistre $h(t)$, la hauteur de la masse au-dessus du plancher.`,
  "Schéma du sismomètre : boîtier, ressort, masse et amortisseur");
const figSismoForces = FIG(330, 270,
  `<rect class="mass" x="130" y="110" width="80" height="50" rx="4"/>` + T(164, 141, "m") +
  A(152, 110, 152, 44, "b", 11) + VL(108, 52, "F", "r", "b") +
  A(188, 110, 188, 60, "r", 11) + VL(196, 70, "f", "ie", "r") +
  A(152, 160, 152, 226, "k", 11) + VL(116, 222, "P") +
  A(188, 160, 188, 212, "v", 11) + VL(196, 208, "F", "a", "v") +
  AX(40, 200, 40, 140) + VL(46, 146, "u", "z"),
  R`Les quatre forces sur la masse dans le référentiel du boîtier. $\vec F_r$ : ressort (étiré), $\vec F_a$ : amortisseur (dessiné pour $\dot h>0$), $\vec f_{\mathrm{ie}}$ : force d'inertie d'entraînement (dessinée pour $\cos\omega t>0$), $\vec P$ : poids.`,
  "Bilan des forces sur la masse du sismomètre");
const G = (x, Q) => x * x / Math.sqrt((1 - x * x) ** 2 + x * x / (Q * Q));
const figGain = (() => {
  const X = x => 46 + x / 4 * 310, Y = y => 210 - y / 2.6 * 190;
  let ticks = "";
  for (let k = 0; k <= 4; k++) ticks += `<line class="ax" x1="${f1(X(k))}" y1="210" x2="${f1(X(k))}" y2="215"/>` + S(f1(X(k)), 230, String(k), "middle");
  for (let k = 0; k <= 2; k++) ticks += `<line class="ax" x1="41" y1="${f1(Y(k))}" x2="46" y2="${f1(Y(k))}"/>` + S(36, f1(Y(k)) + 4, String(k), "end");
  return FIG(380, 250,
    AX(46, 210, 372, 210) + AX(46, 214, 46, 12) + ticks + `<line class="thin" x1="46" y1="${f1(Y(1))}" x2="364" y2="${f1(Y(1))}"/>` +
    PATH(x => G(x, 2), 0.001, 4, X, Y, 240, "vg") + PATH(x => G(x, Math.SQRT1_2), 0.001, 4, X, Y, 200, "vb") + PATH(x => G(x, 0.35), 0.001, 4, X, Y, 200, "vr") +
    [["g", "Q = 2"], ["b", "Q = 1/√2 ≈ 0,71"], ["r", "Q = 0,35"]].map(([c, t], k) => `<line class="v${c}" x1="${f1(X(2.45))}" y1="${f1(Y(2.42 - k * 0.24)) - 4}" x2="${f1(X(2.75))}" y2="${f1(Y(2.42 - k * 0.24)) - 4}"/><text x="${f1(X(2.85))}" y="${f1(Y(2.42 - k * 0.24))}" class="${c}" style="font-size:13px">${t}</text>`).join("") +
    S(364, 246, "x = ω / ω₀", "end") + T(54, 22, "G"),
    R`Le gain $G = X_m/S_0$ en fonction de $x = \omega/\omega_0$. Il part de $0$, vaut $Q$ en $x = 1$, et tend vers $1$ à haute fréquence. Pour $Q = 1/\sqrt2$, la courbe monte sans dépasser $1$.`,
    "Courbes du gain du sismomètre pour trois facteurs de qualité");
})();
const figBande = (() => {
  const X = x => 46 + x / 8 * 310, Y = y => 190 - y / 1.1 * 170, xs = Math.pow(1 / (1 / 0.9801 - 1), 0.25);
  let ticks = "";
  for (let k = 0; k <= 8; k += 2) ticks += `<line class="ax" x1="${f1(X(k))}" y1="190" x2="${f1(X(k))}" y2="195"/>` + S(f1(X(k)), 210, String(k), "middle");
  return FIG(380, 232,
    `<rect x="${f1(X(xs))}" y="20" width="${f1(X(8) - X(xs))}" height="170" style="fill:var(--yellow-soft)"/>` +
    AX(46, 190, 372, 190) + AX(46, 194, 46, 12) + ticks + S(36, f1(Y(1)) + 4, "1", "end") + S(36, 194, "0", "end") +
    `<line class="thin" x1="46" y1="${f1(Y(0.99))}" x2="364" y2="${f1(Y(0.99))}"/>` + S(364, f1(Y(0.99)) - 6, "G = 0,99", "end") +
    PATH(x => G(x, Math.SQRT1_2), 0.001, 8, X, Y, 240, "vb") +
    `<line class="vk" style="stroke-width:1.2;stroke-dasharray:3 3" x1="${f1(X(xs))}" y1="20" x2="${f1(X(xs))}" y2="190"/>` + S(f1(X(xs)) + 6, 140, "x = 2,65") +
    S(f1(X(5.6)), 120, "zone fidèle", "middle") + S(364, 226, "x = ω / ω₀", "end") + T(54, 22, "G"),
    R`Pour $Q = 1/\sqrt2$ : l'enregistrement est fidèle à $1\,\%$ près dès que $x\geqslant2{,}65$ (zone jaune). Il faut donc que toute la bande de pulsations du séisme tombe dans cette zone.`,
    "Gain pour Q égal à un sur racine de deux, avec le seuil de 99 pour cent");
})();
const figHF = FIG(360, 240,
  (() => {
    const box = (x0, fy, hh) => `${GROUND(x0 - 10, x0 + 130, fy)}<path class="k" style="stroke-width:2.6" d="M${x0} ${fy} L${x0} ${fy - 170} L${x0 + 120} ${fy - 170} L${x0 + 120} ${fy}"/>` +
      ZIG(x0 + 60, fy - 170, x0 + 60, 92, 7, 7) + `<rect class="mass" x="${x0 + 40}" y="92" width="40" height="26" rx="3"/>` +
      `<line class="k" x1="${x0 + 60}" y1="118" x2="${x0 + 60}" y2="${fy}"/>` + DIM(x0 + 100, fy - 1, x0 + 100, 106) + T(x0 + 104, (fy + 106) / 2 + 4, hh);
    return box(30, 214, "h₁") + box(200, 186, "h₂") + `<line class="thin" x1="10" y1="105" x2="350" y2="105"/>` + S(180, 236, "le sol est monté de zₛ : le boîtier aussi, pas la masse", "middle");
  })(),
  R`Vibration rapide ($\omega\gg\omega_0$) : le boîtier monte avec le sol mais la masse, retenue par son inertie et un ressort très mou, reste presque à la même altitude. La hauteur enregistrée diminue d'autant : $h_2-h_1\approx-z_s$.`,
  "Le boîtier monte, la masse reste à la même altitude");

LEMME.rappels({
  "p-pfd-ng": { t: "Principe fondamental dans un référentiel non galiléen", b: R`<p>Si $\mathcal R'$ est en mouvement par rapport à un référentiel galiléen $\mathcal R$ :</p>$$m\vec a_{\mathcal R'}(M) = \sum\vec F+\vec f_{\mathrm{ie}}+\vec f_{\mathrm{ic}},$$<p>avec $\vec f_{\mathrm{ie}} = -m\vec a_e$ (force d'inertie d'entraînement) et $\vec f_{\mathrm{ic}} = -m\vec a_c = -2m\vec\Omega\wedge\vec v_{\mathcal R'}$ (force de Coriolis).</p>` },
  "p-rot-unif": { t: "Rotation uniforme autour d'un axe fixe", b: R`<p>Si $\mathcal R'$ tourne à $\vec\Omega = \omega\vec u_z$ constant autour d'un axe fixe $\Delta$ de $\mathcal R$, et si $H$ est le projeté de $M$ sur $\Delta$ :</p>$$\vec f_{\mathrm{ie}} = m\omega^2\,\overrightarrow{HM},\qquad\vec f_{\mathrm{ic}} = -2m\,\omega\vec u_z\wedge\vec v_{\mathcal R'}.$$<p>La première est la force « centrifuge » : elle éloigne de l'axe.</p>` },
  "p-translation": { t: "Référentiel en translation", b: R`<p>Si $\mathcal R'$ est en translation par rapport à $\mathcal R$ (ses axes gardent la même direction), $\vec\Omega = \vec 0$ :</p>$$\vec f_{\mathrm{ie}} = -m\,\vec a_{\mathcal R}(O'),\qquad\vec f_{\mathrm{ic}} = \vec 0.$$<p>Tous les points de $\mathcal R'$ ont la même accélération, celle de son origine $O'$.</p>` },
  "p-base-polaire": { t: "Base polaire et produits vectoriels", b: R`<p>$(\vec u_r,\vec u_\theta,\vec u_z)$ est orthonormée directe :</p>$$\vec u_z\wedge\vec u_r = \vec u_\theta,\qquad\vec u_z\wedge\vec u_\theta = -\vec u_r.$$<p>En coordonnées polaires : $\vec a = (\ddot r-r\dot\theta^2)\,\vec u_r+(2\dot r\dot\theta+r\ddot\theta)\,\vec u_\theta$.</p>` },
  "p-liaison": { t: "Réaction d'un support sans frottement", b: R`<p>Sans frottement, la réaction d'un support est <b>perpendiculaire</b> au support. Pour une perle enfilée sur une tige, $\vec R$ est perpendiculaire à la tige mais peut avoir <b>deux</b> composantes.</p>` },
  "p-ch-sh": { t: "Cosinus et sinus hyperboliques", b: R`$$\operatorname{ch}x = \frac{e^x+e^{-x}}2,\qquad\operatorname{sh}x = \frac{e^x-e^{-x}}2.$$<p>$\operatorname{ch}' = \operatorname{sh}$, $\operatorname{sh}' = \operatorname{ch}$, $\operatorname{ch}0 = 1$, $\operatorname{sh}0 = 0$, $\operatorname{ch}^2-\operatorname{sh}^2 = 1$. Pour $y\geqslant1$ : $\operatorname{ch}x = y$ avec $x\geqslant0$ $\iff x = \operatorname{argch}y = \ln\big(y+\sqrt{y^2-1}\big)$.</p>` },
  "p-edo-hyp": { t: "Équation dont les solutions sont en ch et sh", b: R`<p>Équation caractéristique $s^2-\omega^2 = 0$, racines $\pm\omega$. Solutions :</p>$$r(t) = \alpha e^{\omega t}+\beta e^{-\omega t} = a\operatorname{ch}(\omega t)+b\operatorname{sh}(\omega t).$$<p>Avec $r(0) = r_0$ et $\dot r(0) = v_0$ : $a = r_0$ et $b = v_0/\omega$.</p>` },
  "p-ressort": { t: "Force de rappel d'un ressort", b: R`$$\vec F = -k(\ell-\ell_0)\,\vec u_{\mathrm{ext}},$$<p>où $\ell$ est la longueur du ressort, $\ell_0$ sa longueur à vide et $\vec u_{\mathrm{ext}}$ le vecteur unitaire dirigé du ressort <b>vers</b> l'objet. Étiré ($\ell>\ell_0$), il tire l'objet vers lui ; comprimé, il le repousse.</p>` },
  "p-osc-amorti": { t: "Oscillateur amorti : forme canonique", b: R`$$\ddot X+\frac{\omega_0}{Q}\dot X+\omega_0^2X = f(t).$$<p>$\omega_0$ : pulsation propre (sans amortissement). $Q$ : facteur de qualité, sans dimension ; plus il est grand, moins l'oscillateur est amorti. Régime libre pseudo-périodique si $Q>\frac12$.</p>` },
  "p-rsf": { t: "Régime sinusoïdal forcé", b: R`<p>Pour une excitation en $\cos\omega t$, une fois le transitoire amorti, $X(t) = X_m\cos(\omega t+\varphi)$. On pose $\underline X = X_me^{j(\omega t+\varphi)}$ : dériver revient à multiplier par $j\omega$. Alors $X_m = |\underline X|$ et $\varphi = \arg\underline X$.</p>` },
  "p-equilibre": { t: "Position d'équilibre et changement de variable", b: R`<p>Quand une équation contient des termes constants (poids, longueur à vide), on écrit l'équilibre puis on pose $X = h-h_e$ : les constantes disparaissent, il ne reste que les termes qui dépendent du mouvement.</p>` }
});

LEMME.notions({
  "ref-non-galileen": { d: "phys", p: "non galiléens?", t: "Référentiel non galiléen", b: R`<p>Un référentiel accéléré ou en rotation par rapport à un référentiel galiléen. Pour y appliquer le principe fondamental, on ajoute aux forces réelles deux <b>forces d'inertie</b> :</p>$$m\vec a' = \sum\vec F+\vec f_{\mathrm{ie}}+\vec f_{\mathrm{ic}}.$$<p><b>Exemple :</b> dans un bus qui freine, on se sent poussé vers l'avant alors qu'aucun objet ne nous pousse.</p>` },
  "ref-galileen": { d: "phys", p: "(?<!non )référentiels? galiléens?|(?<!non )galiléens?", t: "Référentiel galiléen", b: R`<p>Un référentiel où le principe d'inertie est vrai : un point isolé y est au repos ou en mouvement rectiligne uniforme. Le principe fondamental $m\vec a = \sum\vec F$ ne s'y écrit qu'avec les forces réelles.</p><p>Tout référentiel en <b>translation rectiligne uniforme</b> par rapport à un galiléen est galiléen. <b>Contre-exemple :</b> un manège qui tourne, une voiture qui freine.</p><p>Le référentiel terrestre est considéré galiléen pour des expériences courtes (quelques minutes) et de petite taille.</p>` },
  "fie": { d: "phys", p: "forces? d'inertie d'entraînement|forces? d'entraînement|forces? centrifuges?", t: "Force d'inertie d'entraînement", b: R`$$\vec f_{\mathrm{ie}} = -m\vec a_e,$$<p>où $\vec a_e$ est l'accélération qu'aurait le point s'il était fixe dans $\mathcal R'$ (le « point coïncident »).</p><ul><li>Translation : $\vec f_{\mathrm{ie}} = -m\vec a(O')$.</li><li>Rotation uniforme à $\omega$ autour d'un axe fixe : $\vec f_{\mathrm{ie}} = m\omega^2\overrightarrow{HM}$, dirigée vers l'extérieur.</li></ul><p><b>Exemple :</b> à $\omega = 4\ \mathrm{rad/s}$ et à $r = 10\ \mathrm{cm}$ de l'axe, elle vaut $1{,}6\,m$ newtons, environ $16\,\%$ du poids.</p>` },
  "fic": { d: "phys", p: "forces? de Coriolis|Coriolis", t: "Force de Coriolis", b: R`$$\vec f_{\mathrm{ic}} = -2m\,\vec\Omega\wedge\vec v',$$<p>où $\vec\Omega$ est le vecteur rotation de $\mathcal R'$ et $\vec v'$ la vitesse <b>dans</b> $\mathcal R'$. Elle est nulle si le point est immobile dans $\mathcal R'$, ou si $\mathcal R'$ est en translation.</p><p>Elle est perpendiculaire à $\vec v'$ : elle ne travaille jamais.</p>` },
  "inertie": { d: "phys", p: "forces? d'inertie", t: "Forces d'inertie", b: R`<p>Termes à ajouter aux forces réelles quand on écrit le principe fondamental dans un référentiel non galiléen : la force d'entraînement $\vec f_{\mathrm{ie}} = -m\vec a_e$ et la force de Coriolis $\vec f_{\mathrm{ic}} = -2m\vec\Omega\wedge\vec v'$. Ce ne sont pas des interactions : aucun objet ne les exerce.</p>` },
  "pulsation-propre": { d: "phys", p: "pulsations? propres?", t: "Pulsation propre", b: R`<p>La pulsation $\omega_0$ des oscillations libres <b>sans amortissement</b>. Pour une masse $m$ au bout d'un ressort de raideur $k$ : $\omega_0 = \sqrt{k/m}$, période propre $T_0 = 2\pi/\omega_0$.</p><p><b>Exemple :</b> $k = 10\ \mathrm{N/m}$, $m = 100\ \mathrm g$ donnent $\omega_0 = 10\ \mathrm{rad/s}$, $T_0\approx0{,}63\ \mathrm s$.</p>` },
  "facteur-qualite": { d: "phys", p: "facteurs? de qualité", t: "Facteur de qualité", b: R`<p>Le nombre sans dimension $Q$ de la forme canonique $\ddot X+\frac{\omega_0}Q\dot X+\omega_0^2X = f$. Pour un frottement $-\lambda\dot x$ : $Q = \dfrac{m\omega_0}\lambda = \dfrac{\sqrt{km}}\lambda$.</p><p>$Q$ grand : peu d'amortissement, beaucoup d'oscillations (environ $Q$) avant l'arrêt, résonance aiguë. $Q<\frac12$ : pas d'oscillation du tout.</p>` },
  "regime-force": { d: "phys", p: "régimes? sinusoïdal forcé|régimes? sinusoïdaux forcés|régimes? forcés?", t: "Régime sinusoïdal forcé", b: R`<p>Sous une excitation sinusoïdale de pulsation $\omega$, après un régime transitoire qui s'amortit, le système oscille à la <b>même pulsation</b> $\omega$, avec une amplitude et un déphasage qui dépendent de $\omega$. On le calcule en notation complexe.</p>` },
  "frottement-fluide": { d: "phys", p: "amortisseurs?|frottements? fluides?", t: "Frottement fluide linéaire", b: R`<p>Force $-\lambda\vec v$ opposée à la vitesse, proportionnelle à elle ($\lambda>0$ en $\mathrm{kg/s}$). C'est le modèle de l'amortisseur : un piston qui se déplace dans un liquide visqueux. La vitesse à prendre est la vitesse <b>relative</b> du piston par rapport au cylindre.</p>` },
  "resonance": { d: "phys", p: "résonances?", t: "Résonance", b: R`<p>Il y a résonance quand l'amplitude en régime forcé passe par un maximum pour une pulsation proche de $\omega_0$. Pour une amplitude de la forme $x^2/\sqrt{(1-x^2)^2+x^2/Q^2}$, elle n'existe que si $Q>1/\sqrt2$.</p>` },
  "equilibre": { d: "phys", p: "positions? d'équilibre|équilibres?", t: "Position d'équilibre", b: R`<p>Une position où le point peut rester immobile : la somme des forces (y compris les forces d'inertie dans un référentiel non galiléen) y est nulle. Elle est <b>stable</b> si, écarté un peu, le point y revient.</p>` }
});

LEMME.exercises([
{
  id: "p-ng-perle", subj: "physique", year: "mp", chap: 0, side: true, classique: true, level: 3, time: "35 min",
  title: "Perle sur une tige en rotation",
  enonce: R`<p>Une tige rectiligne $AB$, de longueur $2\ell$ et de milieu $O$, est maintenue <span data-k="horizontale">horizontale</span>. Elle tourne autour de l'axe vertical $(Oz)$ à la <span data-k="omega">vitesse angulaire constante</span> $\omega$. Une perle $M$ de masse $m$, assimilée à un point, est enfilée sur la tige et glisse <span data-k="sansfrott">sans frottement</span>. On repère la perle par $r = OM$, mesuré le long de la tige. Le référentiel terrestre $\mathcal R$ est supposé galiléen.</p>` + figTigeDessus + figTigeProfil +
    R`<p>À $t = 0$, la perle est en $r = r_0>0$ et sa vitesse <span data-k="relative">par rapport à la tige</span> vaut $v_0\geqslant0$.</p>
<p>Données : $\ell = 25\ \mathrm{cm}$, $r_0 = 5{,}0\ \mathrm{cm}$, $\omega = 4{,}0\ \mathrm{rad\cdot s^{-1}}$, $m = 10\ \mathrm g$, $g = 9{,}8\ \mathrm{m\cdot s^{-2}}$.</p>
<ol>
<li>On se place dans le référentiel $\mathcal R'$ lié à la tige. Faire le bilan des forces qui s'exercent sur la perle et établir l'équation différentielle vérifiée par $r(t)$.</li>
<li>Résoudre cette équation. Dans le cas $v_0 = 0$, exprimer la durée $\tau$ au bout de laquelle la perle quitte la tige, puis calculer $\tau$ et la vitesse de la perle à cet instant.</li>
<li>Toujours pour $v_0 = 0$, déterminer les composantes de la réaction $\vec R$ de la tige en fonction du temps.</li>
<li>La perle est maintenant reliée à $O$ par un ressort enfilé sur la tige, de raideur $k$ et de longueur à vide $\ell_0<\ell$. On pose $\omega_c = \sqrt{k/m}$. Établir la nouvelle équation du mouvement, puis décrire le mouvement selon que $\omega<\omega_c$, $\omega = \omega_c$ ou $\omega>\omega_c$. Interpréter.</li>
</ol>`,
  decode: {
    donnees: [R`Rotation uniforme : $\theta = \omega t$, avec $\omega$ constant.`, R`Pas de frottement : la réaction est perpendiculaire à la tige.`, R`Conditions initiales : $r(0) = r_0$, $\dot r(0) = v_0$.`, R`$\ell = 0{,}25\ \mathrm m$, $r_0 = 0{,}050\ \mathrm m$, $\omega = 4{,}0\ \mathrm{rad/s}$, $m = 0{,}010\ \mathrm{kg}$.`],
    but: R`L'équation sur $r$, la loi $r(t)$, la durée $\tau$ avant la sortie, la réaction $\vec R$, puis la discussion avec le ressort.`,
    cles: {
      horizontale: R`La tige reste dans un plan horizontal : le poids est perpendiculaire à la tige, il ne peut pas faire avancer la perle le long de la tige.`,
      omega: R`$\theta(t) = \omega t$ avec $\dot\theta = \omega$ constant et $\ddot\theta = 0$. Le référentiel de la tige est en <b>rotation uniforme autour d'un axe fixe</b> : on connaît alors directement les forces d'inertie.`,
      sansfrott: R`Aucune force le long de la tige : la réaction $\vec R$ est perpendiculaire à la tige. Elle a deux composantes, une horizontale ($R_\theta$) et une verticale ($R_z$).`,
      relative: R`C'est $\dot r(0)$ : la vitesse mesurée par un observateur assis sur la tige. Vue du sol, la perle a en plus la vitesse $r_0\omega$ due à la rotation.`
    }
  },
  steps: [
    { q: 1, t: "Choisir le référentiel et la base", b: R`<p>Dans le référentiel $\mathcal R'$ de la tige, la perle se déplace sur une <b>droite fixe</b> : c'est ce qui rend le problème simple. On utilise la base $(\vec u_r,\vec u_\theta,\vec u_z)$ attachée à la tige : $\vec u_r$ le long de la tige, $\vec u_\theta$ horizontal et perpendiculaire à la tige, $\vec u_z$ vertical.</p><p>Dans $\mathcal R'$, ces trois vecteurs sont <b>fixes</b>. Donc :</p>$$\overrightarrow{OM} = r\,\vec u_r,\qquad\vec v' = \dot r\,\vec u_r,\qquad\vec a' = \ddot r\,\vec u_r.$$<p><b>Pourquoi $\mathcal R'$ n'est pas galiléen :</b> il tourne par rapport à $\mathcal R$. Une perle posée sans vitesse sur la tige ne reste pas immobile alors que, le long de la tige, rien ne la pousse. On ajoutera donc les forces d'inertie.</p>`, rappels: ["p-pfd-ng", "p-base-polaire"] },
    { q: 1, t: "Bilan des forces", b: R`<p>Forces réelles :</p><ul><li>le poids $\vec P = -mg\,\vec u_z$ ;</li><li>la réaction de la tige, perpendiculaire à la tige car il n'y a pas de frottement : $\vec R = R_\theta\,\vec u_\theta+R_z\,\vec u_z$, <b>sans composante sur $\vec u_r$</b>.</li></ul><p>Forces d'inertie. $\mathcal R'$ tourne uniformément autour de l'axe fixe $(Oz)$. Le projeté de $M$ sur l'axe est $H = O$, donc $\overrightarrow{HM} = r\,\vec u_r$ :</p>$$\vec f_{\mathrm{ie}} = m\omega^2r\,\vec u_r.$$<p>Pour Coriolis, on calcule le produit vectoriel pas à pas :</p>$$\vec f_{\mathrm{ic}} = -2m\,(\omega\vec u_z)\wedge(\dot r\,\vec u_r) = -2m\omega\dot r\,(\vec u_z\wedge\vec u_r) = -2m\omega\dot r\,\vec u_\theta.$$` + figTigeForces + R`<p><b>À retenir :</b> la force d'entraînement est <b>le long</b> de la tige, la force de Coriolis est <b>perpendiculaire</b> à la tige.</p>`, rappels: ["p-rot-unif", "p-liaison", "p-base-polaire"] },
    { q: 1, t: "Projeter le principe fondamental", b: R`<p>Dans $\mathcal R'$ :</p>$$m\ddot r\,\vec u_r = -mg\,\vec u_z+R_\theta\,\vec u_\theta+R_z\,\vec u_z+m\omega^2r\,\vec u_r-2m\omega\dot r\,\vec u_\theta.$$<p>On projette sur chaque vecteur de base :</p>$$\begin{aligned}\text{sur }\vec u_r :&\quad m\ddot r = m\omega^2r\\\text{sur }\vec u_\theta :&\quad 0 = R_\theta-2m\omega\dot r\\\text{sur }\vec u_z :&\quad 0 = R_z-mg\end{aligned}$$<p>La première ligne ne contient aucune inconnue de réaction : c'est l'équation du mouvement.</p>$$\boxed{\ddot r-\omega^2r = 0}$$`, rappels: ["p-pfd-ng"] },
    { q: 1, t: "Lire le signe de l'équation", b: R`<p>Compare avec l'oscillateur harmonique $\ddot x+\omega_0^2x = 0$ : ici le signe est <b>moins</b>. Ce signe change tout.</p><ul><li>Avec $+\omega^2$, la force ramène vers $0$ : on oscille.</li><li>Avec $-\omega^2$, la force (la force d'entraînement) <b>éloigne</b> de $0$, et d'autant plus que $r$ est grand : la perle s'en va de plus en plus vite.</li></ul><p><b>Cas particulier :</b> $r = 0$ est une position d'équilibre (la perle au centre ne subit aucune force d'entraînement), mais elle est instable : le moindre écart grandit.</p>`, rappels: ["oscillateur-harmonique"] },
    { q: 2, t: "Résoudre l'équation", b: R`<p>Équation caractéristique : $s^2-\omega^2 = 0$, donc $s = \omega$ ou $s = -\omega$. Les solutions sont les combinaisons de $e^{\omega t}$ et $e^{-\omega t}$, ou, ce qui est plus pratique ici, de $\operatorname{ch}(\omega t)$ et $\operatorname{sh}(\omega t)$ :</p>$$r(t) = a\operatorname{ch}(\omega t)+b\operatorname{sh}(\omega t).$$<p>Conditions initiales, avec $\operatorname{ch}0 = 1$ et $\operatorname{sh}0 = 0$ :</p><ul><li>$r(0) = a = r_0$ ;</li><li>$\dot r(t) = a\omega\operatorname{sh}(\omega t)+b\omega\operatorname{ch}(\omega t)$, donc $\dot r(0) = b\omega = v_0$, soit $b = v_0/\omega$.</li></ul>$$\boxed{r(t) = r_0\operatorname{ch}(\omega t)+\frac{v_0}\omega\operatorname{sh}(\omega t)}$$<p><b>Vérification :</b> en $t = 0$ on retrouve $r_0$, et $r$ croît sans limite : la perle finit toujours par sortir.</p>`, rappels: ["p-edo-hyp", "p-ch-sh"] },
    { q: 2, t: "Durée avant la sortie", b: R`<p>Avec $v_0 = 0$ : $r(t) = r_0\operatorname{ch}(\omega t)$. La perle sort quand elle atteint le bout de la tige, $r = \ell$ :</p>$$r_0\operatorname{ch}(\omega\tau) = \ell\iff\operatorname{ch}(\omega\tau) = \frac\ell{r_0}.$$<p>Comme $\ell/r_0\geqslant1$ et $\tau>0$, on inverse avec $\operatorname{argch}$ :</p>$$\boxed{\tau = \frac1\omega\operatorname{argch}\frac\ell{r_0} = \frac1\omega\ln\!\left(\frac\ell{r_0}+\sqrt{\frac{\ell^2}{r_0^2}-1}\right)}$$<p><b>Application numérique :</b> $\ell/r_0 = 5$, donc $\tau = \dfrac{\ln(5+\sqrt{24})}{4{,}0} = \dfrac{\ln9{,}90}{4{,}0}\approx\dfrac{2{,}29}{4{,}0}\approx0{,}57\ \mathrm s$.</p><p><b>Ordre de grandeur :</b> un tour de tige dure $2\pi/\omega\approx1{,}57\ \mathrm s$. La perle sort après $\omega\tau\approx2{,}29\ \mathrm{rad}\approx131^\circ$, soit un peu plus d'un tiers de tour.</p>`, rappels: ["p-ch-sh"] },
    { q: 2, t: "Vitesse à la sortie", b: R`<p><b>Par rapport à la tige :</b> $\dot r = r_0\omega\operatorname{sh}(\omega t)$. À la sortie, avec $\operatorname{sh} = \sqrt{\operatorname{ch}^2-1}$ :</p>$$\dot r(\tau) = r_0\omega\sqrt{\frac{\ell^2}{r_0^2}-1} = \omega\sqrt{\ell^2-r_0^2} = 4{,}0\times\sqrt{0{,}0625-0{,}0025}\approx0{,}98\ \mathrm{m/s}.$$<p><b>Par rapport au sol :</b> il faut ajouter la vitesse due à la rotation, $\ell\omega\,\vec u_\theta$ (le point de la tige où se trouve la perle tourne sur un cercle de rayon $\ell$) :</p>$$\vec v_{\mathcal R} = \dot r\,\vec u_r+\ell\omega\,\vec u_\theta,\qquad v_{\mathcal R} = \sqrt{0{,}98^2+1{,}0^2}\approx1{,}4\ \mathrm{m/s}.$$` + figSpirale + R`<p><b>Confusion fréquente :</b> la vitesse « dans $\mathcal R'$ » et la vitesse « dans $\mathcal R$ » ne sont pas les mêmes. Vue du sol, la trajectoire n'est pas une droite mais une spirale.</p>`, rappels: ["p-base-polaire"] },
    { q: 3, t: "Composantes de la réaction", b: R`<p>On reprend les deux projections laissées de côté, avec $\dot r = r_0\omega\operatorname{sh}(\omega t)$ :</p>$$R_\theta = 2m\omega\dot r = 2m\omega^2r_0\operatorname{sh}(\omega t),\qquad R_z = mg.$$<p><b>Sens physique :</b> la force de Coriolis pousse la perle vers $-\vec u_\theta$, c'est-à-dire vers l'arrière de la tige qui tourne. La tige la retient et la pousse vers l'avant : $R_\theta>0$, et cet effort grandit avec la vitesse de la perle.</p><p><b>Application numérique à la sortie :</b> $\operatorname{sh}(\omega\tau) = \sqrt{25-1}\approx4{,}9$, donc</p>$$R_\theta(\tau)\approx2\times0{,}010\times16\times0{,}050\times4{,}9\approx0{,}078\ \mathrm N,\qquad R_z = 0{,}098\ \mathrm N.$$<p>Les deux composantes sont du même ordre : l'effort horizontal n'est pas négligeable.</p>`, rappels: ["p-liaison"] },
    { q: 3, t: "Vérifier depuis le sol", b: R`<p>On peut retrouver $R_\theta$ sans forces d'inertie, dans $\mathcal R$ galiléen, avec l'accélération en polaires et $\dot\theta = \omega$, $\ddot\theta = 0$ :</p>$$a_\theta = 2\dot r\dot\theta+r\ddot\theta = 2\omega\dot r.$$<p>Sur $\vec u_\theta$, la seule force est $R_\theta$ : $m a_\theta = R_\theta$, donc $R_\theta = 2m\omega\dot r$. Même résultat : les forces d'inertie ne sont qu'une autre façon d'écrire la même physique.</p>`, rappels: ["p-base-polaire", "pfd"] },
    { q: 4, t: "La force du ressort", b: R`<p>Le ressort va de $O$ à $M$ : sa longueur est $r$ (pour $r>0$), et le vecteur qui va du ressort vers la perle est $\vec u_r$. Donc :</p>$$\vec F = -k(r-\ell_0)\,\vec u_r.$$<p><b>Vérification du signe :</b> si $r>\ell_0$, le ressort est étiré et $\vec F$ est dirigée vers $-\vec u_r$, vers $O$ : il tire la perle vers lui. Si $r<\ell_0$, il la repousse.</p>` + figTigeRessort, rappels: ["p-ressort"] },
    { q: 4, t: "Nouvelle équation", b: R`<p>Le bilan est le même, plus $\vec F$, qui est le long de la tige. Seule la projection sur $\vec u_r$ change :</p>$$m\ddot r = m\omega^2r-k(r-\ell_0).$$<p>On divise par $m$ et on fait apparaître $\omega_c^2 = k/m$ :</p>$$\boxed{\ddot r+(\omega_c^2-\omega^2)\,r = \omega_c^2\,\ell_0}$$<p>Tout dépend du signe de $\omega_c^2-\omega^2$, c'est-à-dire de la comparaison entre $\omega$ et $\omega_c$.</p>`, rappels: ["p-pfd-ng"] },
    { q: 4, t: "Cas ω < ωc : oscillations", b: R`<p>On pose $\Omega^2 = \omega_c^2-\omega^2>0$. L'équation est celle d'un oscillateur harmonique de pulsation $\Omega$, avec un second membre constant. Solution particulière constante :</p>$$r_e = \frac{\omega_c^2\,\ell_0}{\omega_c^2-\omega^2} = \frac{\ell_0}{1-\omega^2/\omega_c^2}.$$<p>Avec $v_0 = 0$ : $r(t) = r_e+(r_0-r_e)\cos(\Omega t)$. La perle oscille autour de $r_e$.</p><p><b>Remarque :</b> $r_e>\ell_0$. En tournant, le ressort s'allonge : il doit fournir la force qui fait tourner la perle. <b>Exemple :</b> pour $\omega = \omega_c/2$, $r_e = \frac43\ell_0$. Il faut aussi $r_e+|r_0-r_e|<\ell$ pour que la perle reste sur la tige.</p>`, rappels: ["oscillateur-harmonique"] },
    { q: 4, t: "Cas ω = ωc et ω > ωc", b: R`<p><b>Si $\omega = \omega_c$ :</b> l'équation devient $\ddot r = \omega_c^2\ell_0$, une accélération constante. On intègre deux fois :</p>$$r(t) = r_0+v_0t+\tfrac12\omega_c^2\ell_0\,t^2.$$<p>$r$ croît comme $t^2$ : la perle finit par sortir.</p><p><b>Si $\omega>\omega_c$ :</b> on pose $\Gamma^2 = \omega^2-\omega_c^2>0$. L'équation $\ddot r-\Gamma^2r = \omega_c^2\ell_0$ a pour solution particulière $r_p = -\omega_c^2\ell_0/\Gamma^2<0$, donc avec $v_0 = 0$ :</p>$$r(t) = r_p+(r_0-r_p)\operatorname{ch}(\Gamma t),$$<p>et $r_0-r_p>0$ : croissance exponentielle, la perle sort.</p>` + figRegimes, rappels: ["p-edo-hyp", "p-ch-sh"] },
    { q: 4, t: "Interpréter : une raideur effective", b: R`<p>On regroupe les termes en $r$ :</p>$$m\ddot r = -(k-m\omega^2)\,r+k\ell_0.$$<p>Tout se passe comme si le ressort avait une <b>raideur effective</b> $k_{\mathrm{eff}} = k-m\omega^2$. La force d'entraînement $m\omega^2r$ agit comme un « ressort à raideur négative » qui affaiblit le vrai ressort.</p><ul><li>$k_{\mathrm{eff}}>0$ ($\omega<\omega_c$) : il reste une force de rappel, on oscille.</li><li>$k_{\mathrm{eff}} = 0$ : plus de rappel, seule reste la force constante $k\ell_0$.</li><li>$k_{\mathrm{eff}}<0$ : la force éloigne, la perle s'échappe.</li></ul><p>Sans ressort ($k = 0$), on retrouve la question 1 : $k_{\mathrm{eff}} = -m\omega^2<0$.</p>` }
  ],
  piege: R`Mettre la force de Coriolis dans l'équation sur $r$. Elle est perpendiculaire à la tige : elle ne fait pas avancer la perle, elle ne sert qu'à calculer la réaction. Autre piège : écrire $\vec a' = \ddot r\,\vec u_r-r\omega^2\vec u_r$ en mélangeant les deux référentiels. Dans $\mathcal R'$, la perle va en ligne droite.`,
  methode: R`En rotation uniforme : $\vec f_{\mathrm{ie}} = m\omega^2\overrightarrow{HM}$ et $\vec f_{\mathrm{ic}} = -2m\vec\Omega\wedge\vec v'$. Projeter sur la direction du mouvement donne l'équation ; projeter sur les autres directions donne les réactions.`,
  viz: [
    { type: "tige", title: "Animation : la perle vue de dessus", l: 0.25, r0: 0.05, l0: 0.08, slow: 0.25,
      params: [{ k: "w", label: "Vitesse angulaire ω", min: 1, max: 8, step: 0.5, v: 4, unit: "rad/s" }, { k: "kc", label: "Ressort : k/m", min: 0, max: 60, step: 2, v: 0, unit: "s⁻²" }] },
    { type: "plot", title: "Avec ressort : r(t) dans les trois régimes", x: [0, 3], y: [0, 30], xlabel: "t (s)", ylabel: "r (cm)",
      params: [{ k: "om", label: "ω", min: 0, max: 7, step: 0.1, v: 2, unit: "rad/s" }, { k: "oc", label: "ωc = √(k/m)", min: 1, max: 7, step: 0.1, v: 4, unit: "rad/s" }],
      curves: [{ label: "r(t), avec ℓ₀ = 8 cm et r₀ = 5 cm", f: (t, p) => reg(p.om, p.oc)(t) }],
      hlines: [{ y: () => 25, label: "bout de la tige" }] }
  ]
},
{
  id: "p-ng-sismo", subj: "physique", year: "mp", chap: 0, side: true, classique: true, level: 4, time: "40 min",
  title: "Sismomètre vertical",
  enonce: R`<p>On modélise un capteur des vibrations verticales du sol. Un boîtier rigide est posé sur le sol et le suit exactement : dans le référentiel terrestre $\mathcal R$, supposé galiléen, son plancher est à la cote $z_s(t) = S_0\cos(\omega t)$, l'axe $(Oz)$ étant vertical vers le haut.</p>
<p>À l'intérieur, une masse $m$ est suspendue au point $A$ du couvercle, situé à la hauteur $D$ au-dessus du plancher, par un ressort de raideur $k$ et de longueur à vide $\ell_0$. Elle est aussi reliée au plancher par un <span data-k="amort">amortisseur</span> qui exerce la force $-\lambda\dot h\,\vec u_z$, où $h(t)$ est la hauteur de la masse au-dessus du plancher. L'appareil <span data-k="enreg">enregistre</span> $h(t)$.</p>` + figSismo +
    R`<ol>
<li>On travaille dans le référentiel $\mathcal R'$ du boîtier. Établir l'équation différentielle vérifiée par $h$. On note $h_e$ la valeur de $h$ à l'équilibre quand le sol est immobile, et $X = h-h_e$. Montrer que $$\ddot X+\frac{\omega_0}Q\dot X+\omega_0^2X = \omega^2S_0\cos(\omega t),$$ et exprimer $\omega_0$ et $Q$.</li>
<li>En <span data-k="rsf">régime établi</span>, $X(t) = X_m\cos(\omega t+\varphi)$. Exprimer le gain $G = X_m/S_0$ en fonction de $x = \omega/\omega_0$ et de $Q$. Étudier ses limites, sa valeur en $x = 1$, et tracer son allure.</li>
<li>On veut que l'appareil enregistre l'amplitude du sol <span data-k="fidele">à 1 % près</span> pour toutes les périodes comprises entre $0{,}5\ \mathrm s$ et $5\ \mathrm s$. On choisit $Q = 1/\sqrt2$. Quelle condition doit vérifier $\omega_0$ ?</li>
<li>Quel inconvénient pratique cette condition entraîne-t-elle ? Comment choisir $m$ et $\lambda$ ? Donnée : $g = 9{,}8\ \mathrm{m\cdot s^{-2}}$.</li>
</ol>`,
  decode: {
    donnees: [R`Mouvement imposé du boîtier : $z_s(t) = S_0\cos(\omega t)$.`, R`Ressort entre le couvercle et la masse : longueur $D-h$.`, R`Amortisseur : $-\lambda\dot h\,\vec u_z$, avec la vitesse relative $\dot h$.`, R`Bande utile : périodes de $0{,}5\ \mathrm s$ à $5\ \mathrm s$ ; $Q = 1/\sqrt2$.`],
    but: R`L'équation canonique, le gain $G(x)$, une borne sur $\omega_0$, puis les choix pratiques de conception.`,
    cles: {
      amort: R`Un piston dans un liquide visqueux. Il freine le mouvement de la masse <b>par rapport au boîtier</b> : c'est pour cela que la force dépend de $\dot h$, et non de la vitesse par rapport au sol.`,
      enreg: R`Un stylet fixé à la masse trace sur un rouleau fixé au boîtier : on lit donc la position <b>relative</b> $h(t)$, pas l'altitude de la masse.`,
      rsf: R`Le régime sinusoïdal forcé : on attend que le régime transitoire (les oscillations propres) se soit amorti. Il ne reste qu'une oscillation à la pulsation $\omega$ du sol.`,
      fidele: R`L'amplitude enregistrée $X_m$ doit valoir au moins $99\,\%$ de l'amplitude du sol $S_0$, c'est-à-dire $G\geqslant0{,}99$.`
    }
  },
  steps: [
    { q: 1, t: "Le référentiel du boîtier", b: R`<p>Le boîtier monte et descend sans tourner : $\mathcal R'$ est en <b>translation</b> par rapport à $\mathcal R$. Ce n'est pas une translation uniforme (sa vitesse change), donc $\mathcal R'$ n'est pas galiléen.</p><p>En translation, le vecteur rotation est nul, et tous les points du boîtier ont la même accélération, celle du plancher : $\ddot z_s\,\vec u_z$. Donc :</p>$$\vec f_{\mathrm{ic}} = \vec 0,\qquad\vec f_{\mathrm{ie}} = -m\ddot z_s\,\vec u_z.$$<p>On dérive deux fois $z_s = S_0\cos(\omega t)$ : $\ddot z_s = -\omega^2S_0\cos(\omega t)$, d'où</p>$$\vec f_{\mathrm{ie}} = m\omega^2S_0\cos(\omega t)\,\vec u_z.$$<p><b>Intuition :</b> quand le plancher accélère vers le haut, la masse « se sent » poussée vers le bas, comme toi dans un ascenseur qui démarre.</p>`, rappels: ["p-translation", "p-pfd-ng"] },
    { q: 1, t: "Bilan des forces", b: R`<p>Dans $\mathcal R'$, la masse est repérée par $h$ : $\vec v' = \dot h\,\vec u_z$ et $\vec a' = \ddot h\,\vec u_z$.</p><ul><li>Poids : $\vec P = -mg\,\vec u_z$.</li><li>Ressort. Il va de $A$ (en haut) à la masse : sa longueur est $D-h$, et le vecteur dirigé du ressort vers la masse est $-\vec u_z$. Donc $$\vec F_r = -k(D-h-\ell_0)(-\vec u_z) = k(D-h-\ell_0)\,\vec u_z.$$ <b>Vérification :</b> étiré ($D-h>\ell_0$), il tire la masse vers le haut. Correct.</li><li>Amortisseur : $\vec F_a = -\lambda\dot h\,\vec u_z$.</li><li>Force d'inertie : $\vec f_{\mathrm{ie}} = m\omega^2S_0\cos(\omega t)\,\vec u_z$.</li></ul>` + figSismoForces, rappels: ["p-ressort"] },
    { q: 1, t: "Principe fondamental", b: R`<p>Tout est sur $\vec u_z$ :</p>$$m\ddot h = -mg+k(D-h-\ell_0)-\lambda\dot h+m\omega^2S_0\cos(\omega t).$$<p>Les termes $-mg$ et $k(D-\ell_0)$ sont constants : ils ne décrivent pas le mouvement, seulement la position autour de laquelle il se fait. On s'en débarrasse avec l'équilibre.</p>`, rappels: ["p-pfd-ng"] },
    { q: 1, t: "Position d'équilibre", b: R`<p>Sol immobile ($S_0 = 0$) et masse au repos ($\dot h = \ddot h = 0$, $h = h_e$) :</p>$$0 = -mg+k(D-h_e-\ell_0)\iff h_e = D-\ell_0-\frac{mg}k.$$<p><b>Lecture :</b> à l'équilibre, le ressort a la longueur $D-h_e = \ell_0+\dfrac{mg}k$ : il est étiré de $mg/k$ pour porter la masse. On retiendra ce terme pour la question 4.</p>`, rappels: ["p-equilibre"] },
    { q: 1, t: "Forme canonique", b: R`<p>On soustrait l'équation d'équilibre à celle du mouvement. Avec $X = h-h_e$ : $\dot X = \dot h$, $\ddot X = \ddot h$ et $k(D-h-\ell_0)-k(D-h_e-\ell_0) = -kX$. Il reste :</p>$$m\ddot X = -kX-\lambda\dot X+m\omega^2S_0\cos(\omega t).$$<p>On divise par $m$ :</p>$$\ddot X+\frac\lambda m\dot X+\frac km X = \omega^2S_0\cos(\omega t).$$<p>On identifie avec la forme canonique : $\omega_0^2 = k/m$ et $\omega_0/Q = \lambda/m$.</p>$$\boxed{\omega_0 = \sqrt{\frac km},\qquad Q = \frac{m\omega_0}\lambda = \frac{\sqrt{km}}\lambda}$$<p><b>Remarque :</b> le poids a disparu. Il ne fait que décaler l'équilibre ; il n'influence pas les oscillations autour de lui.</p>`, rappels: ["p-equilibre", "p-osc-amorti"] },
    { q: 2, t: "Passage en complexes", b: R`<p>On associe $\underline X = X_me^{j(\omega t+\varphi)}$ à $X$ et $S_0e^{j\omega t}$ à $S_0\cos(\omega t)$. Dériver revient à multiplier par $j\omega$, donc $\ddot X\to-\omega^2\underline X$ :</p>$$\Big(-\omega^2+j\omega\frac{\omega_0}Q+\omega_0^2\Big)\underline X = \omega^2S_0e^{j\omega t}.$$<p>On divise numérateur et dénominateur par $\omega_0^2$ et on pose $x = \omega/\omega_0$ :</p>$$\frac{\underline X}{S_0e^{j\omega t}} = \frac{x^2}{1-x^2+j\,\dfrac xQ}.$$`, rappels: ["p-rsf"] },
    { q: 2, t: "Le gain", b: R`<p>Le module d'un quotient est le quotient des modules, et $|a+jb| = \sqrt{a^2+b^2}$ :</p>$$\boxed{G(x) = \frac{X_m}{S_0} = \frac{x^2}{\sqrt{(1-x^2)^2+\dfrac{x^2}{Q^2}}}}$$<ul><li><b>Basse fréquence</b> ($x\to0$) : le dénominateur tend vers $1$, donc $G\approx x^2\to0$. Un sol qui bouge lentement emporte tout l'appareil, masse comprise : rien ne s'enregistre.</li><li><b>En $x = 1$</b> : $G = \dfrac{1}{\sqrt{0+1/Q^2}} = Q$.</li><li><b>Haute fréquence</b> ($x\to\infty$) : on divise par $x^2$ : $G = 1/\sqrt{(1/x^2-1)^2+1/(Q^2x^2)}\to1$. L'appareil enregistre exactement l'amplitude du sol.</li></ul>` + figGain, rappels: ["p-rsf"] },
    { q: 2, t: "Pourquoi G → 1 à haute fréquence", b: R`<p>À haute fréquence, la phase de $\dfrac{x^2}{1-x^2+jx/Q}$ tend vers $\pi$ (dénominateur presque réel et négatif) : $X\approx-z_s$.</p><p>Dans $\mathcal R$, l'altitude de la masse est $z_s+h = z_s+h_e+X\approx h_e$ : <b>la masse reste immobile</b>. Le ressort, trop mou, n'a pas le temps de la mettre en mouvement. C'est le boîtier qui bouge autour d'elle, et le stylet enregistre ce mouvement relatif.</p>` + figHF },
    { q: 2, t: "Y a-t-il une résonance ?", b: R`<p>On pose $u = 1/x^2$ : $G^2 = \dfrac1{f(u)}$ avec $f(u) = (u-1)^2+\dfrac u{Q^2}$. $G$ est maximal quand $f$ est minimal :</p>$$f'(u) = 2(u-1)+\frac1{Q^2} = 0\iff u^* = 1-\frac1{2Q^2}.$$<p>Ce minimum n'est atteint pour un $x$ réel que si $u^*>0$, c'est-à-dire $Q>1/\sqrt2$. Alors $G_{\max} = \dfrac{Q}{\sqrt{1-1/(4Q^2)}}>1$ : il y a un pic.</p><p><b>Cas limite $Q = 1/\sqrt2$ :</b> $f(u) = u^2-2u+1+2u = 1+u^2$, donc $G = \dfrac1{\sqrt{1+1/x^4}} = \dfrac{x^2}{\sqrt{1+x^4}}$ : la courbe monte sans jamais dépasser $1$. C'est le réglage le plus « plat ».</p>` },
    { q: 3, t: "Traduire la consigne", b: R`<p>Fidèle à $1\,\%$ près : $G\geqslant0{,}99$ pour toutes les pulsations de la bande. Les périodes vont de $0{,}5\ \mathrm s$ à $5\ \mathrm s$, donc les pulsations $\omega = 2\pi/T$ vont de</p>$$\omega_{\min} = \frac{2\pi}{5}\approx1{,}26\ \mathrm{rad/s}\quad\text{à}\quad\omega_{\max} = \frac{2\pi}{0{,}5}\approx12{,}6\ \mathrm{rad/s}.$$<p><b>Attention :</b> la plus grande période donne la plus petite pulsation.</p><p>Pour $Q = 1/\sqrt2$, $G$ croît avec $x$. Le cas le plus défavorable est donc la plus petite pulsation, $\omega_{\min}$ : si la condition y est vérifiée, elle l'est sur toute la bande.</p>` },
    { q: 3, t: "Résoudre l'inégalité", b: R`$$\frac1{\sqrt{1+1/x^4}}\geqslant0{,}99\iff1+\frac1{x^4}\leqslant\frac1{0{,}99^2}\iff\frac1{x^4}\leqslant0{,}0203\iff x^4\geqslant49{,}3\iff x\geqslant2{,}65.$$<p>(Chaque étape est une équivalence car tout est positif et les fonctions utilisées sont monotones.) Il faut $\omega_{\min}/\omega_0\geqslant2{,}65$ :</p>$$\boxed{\omega_0\leqslant\frac{\omega_{\min}}{2{,}65}\approx0{,}47\ \mathrm{rad/s}},\qquad T_0 = \frac{2\pi}{\omega_0}\geqslant13\ \mathrm s.$$` + figBande + R`<p><b>À retenir :</b> pour enregistrer fidèlement un mouvement, la période propre du capteur doit être nettement plus longue que les périodes à mesurer.</p>` },
    { q: 4, t: "L'inconvénient", b: R`<p>À l'équilibre, le ressort est étiré de $mg/k$ (étape 4). Or $k/m = \omega_0^2$ :</p>$$\Delta\ell = \frac{mg}{k} = \frac{g}{\omega_0^2}\geqslant\frac{9{,}8}{0{,}47^2}\approx44\ \mathrm m.$$<p>Un ressort qui s'allonge de $44\ \mathrm m$ sous le poids de la masse : impossible à loger dans un boîtier. Une pulsation propre très basse impose un ressort extrêmement mou, et ce problème ne dépend <b>pas</b> de la masse choisie.</p>` },
    { q: 4, t: "Choisir m et λ", b: R`<p>Puisque $\omega_0 = \sqrt{k/m}$ doit être petit, pour une raideur $k$ réalisable on prend une <b>masse grande</b> : $m = k/\omega_0^2$. Une grande masse a aussi l'avantage de rendre négligeables les petites forces parasites (frottements, courants d'air).</p><p>L'amortisseur se règle ensuite avec $Q = m\omega_0/\lambda = 1/\sqrt2$ :</p>$$\lambda = \sqrt2\,m\omega_0 = \sqrt{2km}.$$<p><b>Dans la pratique :</b> on ne suspend pas la masse à un simple ressort vertical. Les sismomètres utilisent des montages où le ressort porte le poids tout en donnant une raideur effective très faible (pendules inclinés, ressorts dits « à longueur nulle »), ou un asservissement électronique.</p>` }
  ],
  piege: R`Prendre la vitesse de la masse par rapport au sol dans l'amortisseur : il agit sur la vitesse relative $\dot h$. Autre piège : confondre période et pulsation dans la question 3. La plus grande période donne la plus petite pulsation, et c'est elle qui impose la condition.`,
  methode: R`Dans un référentiel en translation, une seule force d'inertie : $-m\vec a(O')$. Écrire l'équilibre, poser $X = h-h_e$ pour éliminer les constantes, identifier $\omega_0$ et $Q$, puis passer en complexes pour le régime forcé.`,
  viz: [
    { type: "sismo", title: "Animation : le sol bouge, la masse presque pas",
      params: [{ k: "x", label: "ω / ω₀", min: 0.2, max: 5, step: 0.1, v: 3 }, { k: "Q", label: "Facteur de qualité Q", min: 0.3, max: 5, step: 0.05, v: 0.7 }] },
    { type: "plot", title: "Le gain G selon ω/ω₀", x: [0, 5], y: [0, 3], xlabel: "ω / ω₀", ylabel: "G",
      params: [{ k: "q", label: "Q", min: 0.2, max: 5, step: 0.05, v: 0.71 }],
      curves: [{ label: "G pour ce Q", f: (x, p) => G(x, p.q) }, { label: "Q = 1/√2 (référence)", f: x => G(x, Math.SQRT1_2) }],
      hlines: [{ y: () => 1, label: "G = 1 : fidèle" }], vlines: [{ x: () => 1, label: "ω = ω₀" }] }
  ]
}
]);
})();

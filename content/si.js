/* Contenu de la matière : programme, résumés, rappels de cours, exercices, problèmes, DM et khôlles.
   Le format est décrit dans README.md. */

LEMME.subject({
  id: "si", name: "Sciences de l'ingénieur", short: "SI", sym: "⚙",
  intro: "Modélisation des systèmes, asservissements, cinématique et statique en MPSI, puis stabilité, correction et dynamique pour l'option SI de MP.",
  years: {
    mpsi: [
      C("Analyse des systèmes", "Besoin, exigences, diagrammes SysML, chaînes d'information et de puissance", ""),
      C("Modélisation des systèmes asservis", "Transformée de Laplace, fonction de transfert, schéma-bloc",
        R`<ul><li>Dérivation : $\mathcal L[f'] = pF(p) - f(0^+)$.</li><li>Boucle fermée : $\text{FTBF} = \dfrac{H(p)}{1+H(p)K(p)}$.</li></ul>`),
      C("Réponses temporelles", "Systèmes du premier et du second ordre, temps de réponse, dépassement",
        R`<ul><li>Premier ordre : $H(p) = \dfrac{K}{1+\tau p}$, temps de réponse à 5 % : $t_{5\%} = 3\tau$.</li><li>Second ordre : $H(p) = \dfrac{K}{1+\frac{2\xi}{\omega_0}p+\frac{p^2}{\omega_0^2}}$, dépassement si $\xi<1$.</li></ul>`),
      C("Réponses fréquentielles", "Diagrammes de Bode, systèmes fondamentaux", ""),
      C("Cinématique du solide", "Torseur cinématique, liaisons normalisées, composition des mouvements",
        R`<ul><li>Champ des vitesses d'un solide : $\vec V_B = \vec V_A + \overrightarrow{BA}\wedge\vec\Omega$.</li><li>Composition : $\vec V_{M,3/1} = \vec V_{M,3/2} + \vec V_{M,2/1}$.</li></ul>`),
      C("Lois entrée-sortie", "Fermeture géométrique et cinématique des chaînes de solides", ""),
      C("Statique du solide", "Torseur des actions mécaniques, principe fondamental de la statique",
        R`<ul><li>PFS : la somme des torseurs des actions extérieures est nulle (résultante et moment).</li><li>Un solide soumis à deux forces : forces opposées, de même droite d'action.</li></ul>`),
      C("Systèmes à événements discrets", "Logique combinatoire, codage de l'information, diagrammes d'états", "")
    ],
    mp: [
      C("Stabilité des systèmes asservis", "Pôles, marges de gain et de phase",
        R`<ul><li>Un système est stable si tous les pôles de sa FTBF sont à partie réelle strictement négative.</li><li>Marge de phase : $M_\varphi = 180^\circ + \arg H_{BO}(j\omega_{0\,dB})$.</li></ul>`),
      C("Précision et correction", "Erreur statique, classe d'un système, correcteurs P, PI, PID",
        R`<ul><li>Erreur statique nulle en réponse à un échelon si la FTBO contient au moins une intégration.</li><li>Le correcteur PI ajoute une intégration au prix d'un déphasage négatif.</li></ul>`),
      C("Dynamique du solide", "Matrice d'inertie, torseur dynamique, principe fondamental de la dynamique", ""),
      C("Approche énergétique", "Puissance, théorème de l'énergie cinétique, inertie et masse équivalentes", "")
    ]
  }
});


LEMME.rappels({
  "premier-ordre-si": { t: "Système du premier ordre", b: R`$H(p) = \dfrac{K}{1+\tau p}$. Réponse à un échelon $E_0$ : $s(t) = KE_0\big(1-e^{-t/\tau}\big)$, avec $t_{5\%} = 3\tau$.` },
  "ftbf": { t: "Boucle fermée à retour unitaire", b: R`$\text{FTBF}(p) = \dfrac{H(p)}{1+H(p)}$.` },
  "erreur-statique": { t: "Erreur statique", b: R`$\varepsilon_s = \lim_{t\to+\infty}\big(e(t)-s(t)\big)$ pour une entrée en échelon.` }
});

LEMME.exercises([
{
  id: "ex-premier-ordre", subj: "si", year: "mpsi", chap: 2, classique: true, level: 2, time: "15 min",
  title: "Premier ordre en boucle ouverte et fermée",
  enonce: R`<p>Un système a pour fonction de transfert $H(p) = \dfrac{K}{1+\tau p}$ avec $K = 2$ et $\tau = 0{,}5\ \mathrm s$. On le place dans une boucle à <span data-k="retour">retour unitaire</span>. Comparer le temps de réponse à $5\,\%$ et l'erreur statique pour un échelon $E_0$.</p>`,
  decode: {
    donnees: [R`$K = 2$, $\tau = 0{,}5\ \mathrm s$, entrée en échelon d'amplitude $E_0$.`],
    but: R`Comparer rapidité et précision avant et après bouclage.`,
    cles: { retour: R`La sortie est comparée directement à la consigne : l'écart $e - s$ commande le système.` }
  },
  steps: [
    { t: "Boucle ouverte", b: R`<p>$t_{5\%} = 3\tau = 1{,}5\ \mathrm s$ et la sortie tend vers $KE_0 = 2E_0$.</p>`, rappels: ["premier-ordre-si"] },
    { t: "Boucle fermée", b: R`$$\text{FTBF} = \frac{K}{1+K+\tau p} = \frac{\frac{K}{1+K}}{1+\frac{\tau}{1+K}p}.$$<p>Gain $\frac23$ et constante de temps $\tau' = \frac\tau3 \approx 0{,}17\ \mathrm s$.</p>`, rappels: ["ftbf"] },
    { t: "Rapidité", b: R`<p>$t_{5\%} = 3\tau' = 0{,}5\ \mathrm s$ : la boucle fermée est trois fois plus rapide.</p>` },
    { t: "Précision", b: R`$$\varepsilon_s = E_0-\frac23E_0 = \frac{E_0}{1+K} = \frac{E_0}{3}.$$`, rappels: ["erreur-statique"] }
  ],
  piege: R`Confondre le gain statique de la boucle ouverte et celui de la boucle fermée.`,
  methode: R`Mets toujours une fonction de transfert sous forme canonique pour lire directement gain et constante de temps.`,
  viz: {
    type: "plot", title: "Augmente K : la boucle fermée devient plus rapide et plus précise", x: [0, 3], y: [0, 2.2], xlabel: "t (s)", ylabel: "s / E₀",
    params: [{ k: "K", label: "Gain K", min: 0.5, max: 10, step: 0.5, v: 2 }],
    curves: [
      { label: "Boucle fermée", f: (t, p) => (p.K / (1 + p.K)) * (1 - Math.exp(-t * (1 + p.K) / 0.5)) },
      { label: "Consigne", f: () => 1 }
    ]
  }
}
]);

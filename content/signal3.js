/* Physique · Spé · Traitement du signal (fin) : exercices 8 à 12 (signaux numériques). */
(() => {
const R = String.raw;
const { GRAPH, FIG, S, ARR, f1 } = window.__LA;
const { SPEC, frs, Q, P } = window.__SIG;
const box = (x, y, w, h, t) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" style="fill:var(--surface);stroke:currentColor;stroke-width:1.6"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" class="sm" text-anchor="middle">${t}</text>`;

/* ===== Exercice 8 : trame ===== */
const trame = FIG(520, 110, (() => {
  let s = `<line x1="20" y1="60" x2="500" y2="60" class="vk"/>`;
  const xs = [30, 70, 110, 150, 190, 230, 300, 340, 380, 420, 460];
  xs.forEach(x => s += `<line x1="${x}" y1="52" x2="${x}" y2="68" class="vk"/>`);
  s += `<text x="50" y="86" class="sm" text-anchor="middle">IT 1</text><text x="90" y="86" class="sm" text-anchor="middle">IT 2</text><text x="130" y="86" class="sm" text-anchor="middle">IT 3</text><text x="400" y="86" class="sm" text-anchor="middle">IT 31</text><text x="440" y="86" class="sm" text-anchor="middle">IT 32</text>`;
  s += `<path d="M258 44 L272 76 M266 44 L280 76" class="vk"/>` + ARR(240, 22, 30, 22, "k", 7) + ARR(250, 22, 460, 22, "k", 7) + `<text x="245" y="16" class="sm" text-anchor="middle">une trame = 32 intervalles de temps</text>`;
  return s;
})(), R`Une trame MIC : $32$ intervalles de temps (IT), dont $30$ pour les communications et $2$ pour la gestion du réseau.`, "Trame MIC");

/* ===== Exercice 9 : CNA ===== */
const cna = FIG(540, 270, (() => {
  let s = `<circle cx="40" cy="135" r="16" style="fill:none;stroke:currentColor;stroke-width:1.6"/><line x1="40" y1="125" x2="40" y2="145" class="vk"/><text x="14" y="140" class="it">E</text>`;
  s += `<line x1="40" y1="119" x2="40" y2="30" class="vk"/><line x1="40" y1="151" x2="40" y2="240" class="vk"/><line x1="40" y1="240" x2="400" y2="240" class="vk"/>`;
  const ys = [40, 90, 140, 190], lab = ["R", "R/2", "R/4", "R/8"], ks = ["K₀", "K₁", "K₂", "K₃"];
  ys.forEach((y, i) => {
    s += `<line x1="40" y1="${y}" x2="100" y2="${y}" class="vk"/><line x1="100" y1="${y}" x2="128" y2="${y - 12}" class="vk"/><circle cx="100" cy="${y}" r="3" class="pt"/><circle cx="132" cy="${y}" r="3" class="pt"/><text x="112" y="${y - 16}" class="sm" text-anchor="middle">${ks[i]}</text>`;
    s += `<line x1="132" y1="${y}" x2="170" y2="${y}" class="vk"/>` + `<rect x="170" y="${y - 10}" width="60" height="20" rx="3" style="fill:var(--surface);stroke:currentColor;stroke-width:1.6"/><text x="200" y="${y + 5}" class="sm" text-anchor="middle">${lab[i]}</text><line x1="230" y1="${y}" x2="270" y2="${y}" class="vk"/>`;
  });
  s += `<line x1="270" y1="40" x2="270" y2="190" class="vk"/><line x1="270" y1="115" x2="300" y2="115" class="vk"/>` + ARR(276, 108, 296, 108, "r", 6) + `<text x="282" y="100" class="it r">i</text>`;
  s += `<rect x="300" y="70" width="110" height="120" rx="6" style="fill:none;stroke:var(--muted);stroke-dasharray:6 4"/><text x="355" y="205" class="sm" text-anchor="middle">convertisseur</text><text x="355" y="220" class="sm" text-anchor="middle">courant-tension</text>`;
  s += `<line x1="300" y1="115" x2="340" y2="115" class="vk"/><circle cx="355" cy="130" r="14" style="fill:none;stroke:currentColor;stroke-width:1.6"/><line x1="355" y1="116" x2="355" y2="144" class="vk"/><text x="372" y="112" class="it">U<tspan dy="4" font-size="10">g</tspan></text>`;
  s += `<line x1="355" y1="144" x2="355" y2="240" class="vk"/><line x1="355" y1="116" x2="355" y2="90" class="vk"/><line x1="355" y1="90" x2="460" y2="90" class="vk"/><line x1="400" y1="240" x2="460" y2="240" class="vk"/>`;
  s += `<rect x="460" y="110" width="22" height="60" style="fill:var(--surface);stroke:currentColor;stroke-width:1.6"/><path d="M482 110 L515 85 L515 195 L482 170 Z" style="fill:none;stroke:currentColor;stroke-width:1.6"/><line x1="460" y1="90" x2="471" y2="90" class="vk"/><line x1="471" y1="90" x2="471" y2="110" class="vk"/><line x1="460" y1="240" x2="471" y2="240" class="vk"/><line x1="471" y1="240" x2="471" y2="170" class="vk"/><text x="530" y="74" class="sm" text-anchor="end">haut-parleur</text>`;
  s += ARR(440, 230, 440, 100, "b", 7) + `<text x="420" y="170" class="it b">u<tspan dy="4" font-size="10">s</tspan></text>`;
  return s;
})(), R`Le convertisseur numérique-analogique $4$ bits à résistances pondérées : l'interrupteur $K_n$ fermé ($K_n = 1$) relie la résistance $R_n = R/2^n$ à la source $E$. Le bloc en pointillés impose une tension nulle à son entrée et délivre $U_g = R'i$.`, "CNA à résistances pondérées");
const carUg = GRAPH({ w: 340, h: 200, x: [0, 25], y: [0, 19], xt: [15], xtl: ["Vsat/R′"], yt: [15], ytl: ["15 V"], xl: "i", yl: "Ug", curves: [{ f: i => Math.min(i, 15), c: "r" }] },
  R`Caractéristique du convertisseur courant-tension : $U_g = R'i$ jusqu'à la saturation $V_{\mathrm{sat}} = 15$ V.`, "Caractéristique du convertisseur");
const marches = GRAPH({ w: 480, h: 230, x: [0, 16], y: [0, 16.5], xt: [1, 2, 3, 4, 8, 15], xtl: ["0001", "0010", "0011", "0100", "1000", "1111"], yt: [5, 10, 15], xl: "N", yl: "uₛ (V)",
  curves: [{ f: x => Math.floor(x), c: "r", n: 1600 }] },
  R`Tension de sortie en fonction du mot binaire $N$ (avec $R = R'$, $E = 1$ V) : un escalier de marches de $1$ V, de $0$ à $15$ V.`, "Escalier du CNA");

/* ===== Exercice 10 : quantification ===== */
const quant = GRAPH({ w: 520, h: 250, x: [0, 1], y: [-0.15, 4.4], xt: [0.25, 0.5, 0.75, 1], xtl: ["T/4", "T/2", "3T/4", "T"], yt: [1, 2, 3, 4], ytl: ["q", "2q", "3q", "4q"], xl: "t",
  curves: [{ f: t => t < 0.5 ? 8 * t : 8 - 8 * t, c: "b", lab: [0.38, 3.5, "s(t)"] }, { f: t => Math.round(t < 0.5 ? 8 * t : 8 - 8 * t), c: "r", n: 2000, lab: [0.6, 3.9, "sₙ(t)"] }] },
  R`Un signal triangulaire $s(t)$ (bleu) et sa version quantifiée $s_n(t)$ (rouge) : chaque valeur est arrondie au multiple de $q$ le plus proche. Le basculement d'un niveau au suivant a lieu à mi-chemin.`, "Quantification d'un triangle");
const err = GRAPH({ w: 520, h: 220, x: [0, 0.5], y: [-0.7, 0.7], xt: [0.0625, 0.125, 0.1875, 0.25], xtl: ["τ/2", "τ", "3τ/2", "2τ"], yt: [-0.5, 0.5], ytl: ["−q/2", "q/2"], xl: "t", yl: "ε",
  curves: [{ f: t => { const u = t * 8; return u - Math.round(u); }, c: "r", n: 2000 }] },
  R`L'erreur $\varepsilon(t) = s(t)-s_n(t)$ pendant la montée : une dent de scie entre $-\frac q2$ et $\frac q2$, de période $\tau = q/p$ où $p$ est la pente de $s$.`, "Erreur de quantification");

/* ===== Exercice 11 : bruit de quantification ===== */
const bloc11 = FIG(540, 190, `
${box(110, 30, 90, 40, "C.A.N.")}${box(260, 30, 90, 40, "C.N.A.")}${box(420, 20, 60, 120, "")}
<text x="450" y="85" class="it" text-anchor="middle">−</text>
<line x1="30" y1="50" x2="110" y2="50" class="vk"/><text x="40" y="42" class="it">e(t)</text>
<line x1="200" y1="44" x2="260" y2="44" class="vk"/><line x1="200" y1="50" x2="260" y2="50" class="vk"/><line x1="200" y1="56" x2="260" y2="56" class="vk"/><text x="230" y="34" class="sm" text-anchor="middle">eₙ</text>
<line x1="350" y1="50" x2="420" y2="50" class="vk"/><text x="372" y="42" class="it">s(t)</text>
<line x1="70" y1="50" x2="70" y2="120" class="vk"/><line x1="70" y1="120" x2="160" y2="120" class="vk"/><path d="M160 102 L160 138 L196 120 Z" style="fill:var(--surface);stroke:currentColor;stroke-width:1.6"/><text x="172" y="125" class="sm">K</text>
<line x1="196" y1="120" x2="290" y2="120" class="vk"/><circle cx="302" cy="120" r="12" style="fill:none;stroke:currentColor;stroke-width:1.6"/><text x="302" y="125" class="sm" text-anchor="middle">+</text>
<line x1="302" y1="170" x2="302" y2="132" class="vk"/><text x="310" y="172" class="it">V₀</text>
<line x1="314" y1="120" x2="420" y2="120" class="vk"/><line x1="480" y1="80" x2="525" y2="80" class="vk"/><text x="490" y="72" class="it">ε(t)</text>`,
  R`Le montage : la chaîne C.A.N. puis C.N.A. fournit $s(t)$ ; la branche du bas, réglée par $K$ et $V_0$, recale $e(t)$ ; le soustracteur fournit l'erreur $\varepsilon(t) = s(t)-e(t)$.`, "Montage de mesure du bruit");
const Ff = GRAPH({ w: 300, h: 200, x: [-1, 1], y: [-0.1, 1.25], xt: [-0.5, 0.5], xtl: ["−q/2", "q/2"], yt: [1], xl: "x", yl: "F(x)", curves: [{ f: x => Math.min(1, Math.max(0, x + 0.5)), c: "b" }] }, R`Fonction de répartition $F$.`, "F");
const ff = GRAPH({ w: 300, h: 200, x: [-1, 1], y: [-0.1, 1.25], xt: [-0.5, 0.5], xtl: ["−q/2", "q/2"], yt: [1], ytl: ["1/q"], xl: "x", yl: "f(x)", curves: [{ f: x => Math.abs(x) < 0.5 ? 1 : 0, c: "r", n: 2000 }] }, R`Densité $f = F'$.`, "f");

/* ===== Exercice 12 : spectres numériques ===== */
const al = 0.25;
const pulses = GRAPH({ w: 520, h: 190, x: [-1.6, 1.6], y: [-0.2, 1.3], xt: [-1, -al / 2, al / 2, 1], xtl: ["−Tₑ", "−τ/2", "τ/2", "Tₑ"], yt: [1], ytl: ["E"], xl: "t", curves: [{ f: t => { const u = ((t % 1) + 1.5) % 1 - 0.5; return Math.abs(u) < al / 2 ? 1 : 0; }, c: "b", n: 3000 }] },
  R`Train d'impulsions de hauteur $E$, de largeur $\tau$ et de période $T_e$ (ici $\alpha = \tau/T_e = \frac14$).`, "Train d'impulsions");
const sinc = x => Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x;
const cn = SPEC({ w: 520, h: 220, x: [-12.5, 12.5], y: [-0.08, 0.3], xt: [-8, -4, 4, 8], xtl: ["−8/Tₑ", "−4/Tₑ", "4/Tₑ", "8/Tₑ"], yt: [0.25], ytl: ["Eα"], xl: "ν",
  more: (X, Y) => { let d = ""; for (let k = 0; k <= 400; k++) { const v = -12.5 + 25 * k / 400; d += `${k ? "L" : "M"}${f1(X(v))} ${f1(Y(al * sinc(Math.PI * v * al)))} `; } return `<path d="${d}" class="vb" style="fill:none;stroke-dasharray:5 4;stroke-width:1.6"/>`; } },
  Array.from({ length: 25 }, (_, i) => { const n = i - 12; return [n, al * sinc(Math.PI * n * al), "r"]; }),
  R`Les coefficients $C_n = E\alpha\operatorname{sinc}(n\pi\alpha)$ (raies rouges, aux fréquences $n/T_e$) et l'enveloppe $\frac1{T_e}\tilde I(\nu)$ (pointillés). Les raies sont nulles pour $n$ multiple de $1/\alpha = 4$.`, "Coefficients de Fourier");
const bits = [1, 0, 1, 1, 0, 0, 1];
const nrz = GRAPH({ w: 520, h: 190, x: [0, 7], y: [-1.4, 1.5], xt: [1, 2, 3, 4, 5, 6, 7], xtl: ["T", "2T", "3T", "4T", "5T", "6T", "7T"], yt: [-1, 1], ytl: ["−E", "E"], xl: "t",
  curves: [{ f: t => bits[Math.min(6, Math.floor(t))] ? 1 : -1, c: "b", n: 2800 }],
  extra: (X, Y) => bits.map((b, k) => S(X(k + 0.5), Y(1.25), String(b), "middle")).join("") },
  R`La suite de caractères $1011001$ : chaque bit est une impulsion de durée $T$ et de hauteur $\pm E$.`, "Signal binaire");
const dsp = GRAPH({ w: 520, h: 210, x: [-4, 4], y: [-0.05, 1.15], xt: [-3, -2, -1, 1, 2, 3], xtl: ["−3/T", "−2/T", "−1/T", "1/T", "2/T", "3/T"], yt: [1], ytl: ["E²T"], xl: "ν",
  curves: [{ f: v => sinc(Math.PI * v) ** 2, c: "r", n: 800 }] },
  R`Densité spectrale de puissance du signal binaire : $E^2T\operatorname{sinc}^2(\pi\nu T)$. Lobe principal de largeur $\frac2T$, zéros aux multiples de $\frac1T$.`, "DSP du signal binaire");
const dspm = GRAPH({ w: 520, h: 210, x: [-14, 14], y: [-0.05, 0.32], xt: [-10, -8, 8, 10, 12], xtl: ["−ν₀", "", "", "ν₀", ""], yt: [0.25], ytl: ["E²T/4"], xl: "ν",
  curves: [{ f: v => 0.25 * (sinc(Math.PI * (v - 10)) + sinc(Math.PI * (v + 10))) ** 2, c: "r", n: 1600 }] },
  R`Avec un train sinusoïdal de fréquence $\nu_0\gg1/T$ : le même lobe, recopié autour de $\pm\nu_0$ (largeur $2/T$ chacun).`, "DSP du signal modulé");

LEMME.exercises([
/* ======================== Exercice 8 ======================== */
{ id: "sig-08", ...P, level: 1, time: "15 min",
  title: "Le multiplexage temporel d'une ligne téléphonique",
  enonce: R`<p>Pour faire passer plusieurs communications sur une même ligne, on utilise le multiplexage temporel. Le système M.I.C. (modulation par impulsions et codage) transmet simultanément $30$ communications.</p><ol>
<li>Chaque voix est d'abord numérisée. Sa bande de fréquences est $[300\ \text{Hz} ; 3400\ \text{Hz}]$. Justifier le choix de $8000$ échantillons par seconde.</li>
<li>Le signal est organisé en trames de $32$ intervalles de temps (IT) ; chaque communication reçoit un IT par trame, et les deux IT restants servent à la gestion du réseau.${trame}Quelle est la durée d'une trame ? En déduire le nombre d'échantillons transmis par seconde, toutes communications confondues.</li>
<li>Chaque échantillon est codé sur $8$ bits. Calculer le débit binaire de la ligne.</li>
<li>La quantification est non linéaire : le pas est plus petit pour les faibles valeurs du signal. Quel est l'intérêt, sachant que la voix varie sur une très large gamme d'amplitudes ?</li></ol>`,
  decode: { donnees: [R`$f_{\max} = 3400$ Hz, $8000$ échantillons/s par voix.`, R`$32$ IT par trame, $8$ bits par échantillon.`], but: R`Dimensionner la liaison : cadence, trame, débit.`, cles: {} },
  steps: [
    Q("La fréquence d'échantillonnage", R`<p>Critère de Shannon.</p>`, R`<p>Le critère de Shannon impose $f_e>2f_{\max} = 2\times3400 = 6800$ Hz. Le choix $f_e = 8000$ Hz le respecte avec une <b>marge</b> : le filtre anti-repliement placé avant l'échantillonneur n'est pas idéal, il lui faut une bande de transition entre $3400$ Hz (à conserver) et $f_e-3400 = 4600$ Hz (à éliminer pour éviter le repliement).</p>`, ["sig-shannon"]),
    Q("Durée d'une trame et cadence totale", R`<p>Chaque voie est échantillonnée une fois par trame.</p>`, R`<p>Chaque communication envoie un échantillon par trame et doit envoyer $8000$ échantillons par seconde : il y a donc $8000$ trames par seconde.</p><div class="sbox">$$T_{\text{trame}} = \frac1{8000} = 125\ \mu\text{s}.$$</div><p>Chaque trame contient $32$ IT, chacun portant un échantillon (dont $2$ de service) :</p>$$32\times8000 = 256\,000\ \text{échantillons par seconde}$$<p>($240\,000$ pour les seules communications). Durée d'un IT : $\frac{125}{32}\approx3{,}9\ \mu$s.</p>`),
    Q("Le débit binaire", R`<p>$8$ bits par échantillon.</p>`, R`<div class="sbox">$$D = 256\,000\times8 = 2\,048\,000\ \text{bit/s} = 2{,}048\ \text{Mbit/s}.$$</div><p>C'est le débit normalisé des liaisons « E1 » européennes.</p>`),
    Q("L'intérêt de la compression", R`<p>Compare l'erreur relative pour un signal faible et un signal fort avec un pas constant.</p>`, R`<p>Avec un pas $q$ constant, l'erreur d'arrondi vaut au plus $\frac q2$, quelle que soit l'amplitude. Pour un son fort, c'est négligeable ; pour un son faible (de l'ordre de quelques $q$), l'erreur <b>relative</b> est énorme : la voix faible serait noyée dans le bruit de quantification.</p><p>Avec un pas petit pour les faibles valeurs et grand pour les fortes (loi de compression logarithmique), l'erreur <b>relative</b> reste à peu près constante sur toute la dynamique. On obtient ainsi avec $8$ bits une qualité qui demanderait environ $12$ bits en quantification linéaire : on économise du débit.</p>`)
  ],
  piege: R`Prendre $f_e = 2f_{\max}$ exactement : il faut une marge pour le filtre anti-repliement réel.`,
  methode: R`Débit binaire = (nombre de voies, y compris service) × (fréquence d'échantillonnage) × (nombre de bits par échantillon).`
},

/* ======================== Exercice 9 ======================== */
{ id: "sig-09", ...P, level: 2, time: "30 min",
  title: "Un convertisseur numérique-analogique à résistances pondérées",
  enonce: R`<p>Un lecteur de CD doit transformer des nombres binaires en tension pour le haut-parleur : c'est le rôle du convertisseur numérique-analogique (C.N.A.). On étudie un C.N.A. $4$ bits à résistances pondérées.</p>${cna}<p>Il comporte une source de tension constante $E$, quatre résistances $R_n = \dfrac R{2^n}$ ($0\leqslant n\leqslant3$) et quatre interrupteurs $K_n$ (ouvert : $K_n = 0$ ; fermé : $K_n = 1$). Le mot $1101$ signifie $K_3 = 1$, $K_2 = 1$, $K_1 = 0$, $K_0 = 1$. Le bloc en pointillés maintient une tension nulle à son entrée et fournit $U_g = R'i$ tant que $U_g\lt V_{\mathrm{sat}} = 15$ V (sinon $U_g = V_{\mathrm{sat}}$). La tension $u_s$ aux bornes du haut-parleur vaut $U_g$.</p>${carUg}<ol>
<li>Exprimer le courant dans $R_n$ en fonction de $K_n$, $R$ et $E$. En déduire $u_s$ en fonction des $K_n$, $R$, $R'$ et $E$. Commenter.</li>
<li>On prend $R = R'$ et $E = 1$ V. Calculer $u_s$ pour $0000$, $0001$, $0010$, $0011$, $0100$, et pour $1111$.</li>
<li>Le son d'un CD est codé sur $16$ bits : on place $16$ résistances $R_n = R/2^n$ ($0\leqslant n\leqslant15$). Quelle est la valeur maximale du nombre codé ? Quelle tension faudrait-il en sortie ? Quel problème cela pose-t-il ?</li>
<li>Quelle condition sur $R$, $R'$ et $E$ évite la saturation ?</li></ol>`,
  decode: { donnees: [R`L'entrée du convertisseur est à potentiel nul : chaque résistance a $E$ à ses bornes si son interrupteur est fermé.`], but: R`Montrer que la tension de sortie est proportionnelle au nombre binaire, et en voir les limites.`, cles: {} },
  steps: [
    Q("La tension de sortie", R`<p>Loi d'Ohm dans chaque branche, puis loi des nœuds.</p>`, R`<p>L'entrée du convertisseur courant-tension est au potentiel $0$. Si $K_n$ est fermé, $R_n$ a la tension $E$ à ses bornes et est parcourue par $\frac E{R_n}$ ; si $K_n$ est ouvert, le courant est nul. Dans tous les cas :</p>$$i_n = K_n\frac E{R_n} = K_n\,\frac{2^nE}R.$$<p><b>Loi des nœuds</b> à l'entrée du convertisseur :</p>$$i = \sum_{n=0}^3i_n = \frac ER\big(8K_3+4K_2+2K_1+K_0\big) = \frac ER\,N,$$<p>où $N = \overline{K_3K_2K_1K_0}$ est le nombre écrit en binaire. Hors saturation :</p><div class="sbox">$$u_s = R'i = \frac{R'E}R\,N = \frac{R'E}R\sum_{n=0}^3K_n2^n.$$</div><p><b>Commentaire</b> : la tension de sortie est proportionnelle au nombre codé ; le « quantum » (tension par unité) vaut $\frac{R'E}R$. C'est bien une conversion numérique → analogique. Le choix $R_n = R/2^n$ donne à chaque bit un poids double du précédent.</p>`, ["sig-ao"]),
    Q("Applications numériques", R`<p>$u_s = N$ volts.</p>`, R`<p>Avec $R = R'$ et $E = 1$ V, $u_s = N$ (en volts) :</p>$$\begin{array}{c|c|c}\text{mot}&N&u_s\\\hline0000&0&0\ \text{V}\\0001&1&1\ \text{V}\\0010&2&2\ \text{V}\\0011&3&3\ \text{V}\\0100&4&4\ \text{V}\\1111&15&15\ \text{V}\end{array}$$<p>La tension maximale, $15$ V, atteint juste $V_{\mathrm{sat}}$ : le convertisseur fonctionne sur toute sa plage, sans saturer.</p>${marches}`),
    Q("Le passage à 16 bits", R`<p>Le plus grand nombre sur $16$ bits est $2^{16}-1$.</p>`, R`<p>Le plus grand nombre est $N_{\max} = 1111\,1111\,1111\,1111_2 = 2^{16}-1 = 65\,535$. Avec les mêmes réglages, il faudrait</p>$$u_s = 65\,535\ \text{V}\gg V_{\mathrm{sat}} = 15\ \text{V}.$$<p><b>Problèmes</b> :</p><ul><li>le convertisseur sature dès $N = 15$ : tous les nombres de $15$ à $65\,535$ donnent $15$ V, la conversion est complètement fausse ;</li><li>de plus, les résistances vont de $R$ à $R/2^{15} = R/32\,768$ : il est très difficile de réaliser des résistances aussi différentes avec une précision relative meilleure que $2^{-16}$, ce qui serait nécessaire pour que le bit de poids faible ait un sens.</li></ul>`),
    Q("La condition de non-saturation", R`<p>$u_{s,\max}\leqslant V_{\mathrm{sat}}$.</p>`, R`<p>Il faut que la tension maximale reste sous la saturation :</p><div class="sbox">$$\frac{R'E}R\,(2^{16}-1)\leqslant V_{\mathrm{sat}}\iff\frac{R'E}R\leqslant\frac{15}{65\,535}\approx2{,}3\cdot10^{-4}\ \text{V}.$$</div><p>Par exemple, avec $E = 1$ V, il faut $R'\leqslant2{,}3\cdot10^{-4}R$. Le quantum de tension vaut alors $0{,}23$ mV. En pratique, on utilise plutôt des réseaux $R$-$2R$, qui n'emploient que deux valeurs de résistance.</p>`)
  ],
  piege: R`Oublier que l'entrée du convertisseur est à potentiel nul : c'est ce qui rend les courants des branches indépendants les uns des autres.`,
  methode: R`Dans un C.N.A. à sommation de courants, chaque bit $K_n$ commande un courant proportionnel à $2^n$ ; la somme est proportionnelle au nombre binaire.`
},

/* ======================== Exercice 10 ======================== */
{ id: "sig-10", ...P, level: 2, time: "30 min",
  title: "L'erreur de quantification",
  enonce: R`<p>Un convertisseur analogique-numérique à loi linéaire, de pas $q$, arrondit chaque échantillon de $s(t)$ au niveau $s_n$ le plus proche. On note $\varepsilon = s-s_n$ l'erreur d'arrondi.</p>${quant}<ol>
<li>Dans quel intervalle l'erreur $\varepsilon$ prend-elle ses valeurs ?</li>
<li>On teste le convertisseur avec un signal triangulaire. Décrire l'évolution de $\varepsilon(t)$ pendant une montée de pente $p$.</li>
<li>Sur une période de $\varepsilon(t)$, calculer sa valeur moyenne, sa moyenne quadratique et sa valeur efficace $\varepsilon_{\mathrm{eff}}$.<br><b>Application</b> : on appelle dynamique $\Delta s$ l'intervalle dans lequel peut varier le signal numérisé. Comparer $\varepsilon_{\mathrm{eff}}$ et $\Delta s$ pour un convertisseur $8$ bits, puis $12$ bits.</li>
<li>Pendant une descente, les résultats sont-ils les mêmes ?</li>
<li>Pour un signal quelconque d'amplitude grande devant $q$, pourquoi ces résultats restent-ils une bonne approximation ?</li></ol>`,
  decode: { donnees: [R`Arrondi au plus proche : on bascule à mi-chemin entre deux niveaux.`], but: R`Quantifier l'erreur introduite par la numérisation : sa valeur efficace $q/(2\sqrt3)$.`, cles: {} },
  steps: [
    Q("L'intervalle de l'erreur", R`<p>On bascule vers le niveau suivant dès que $s$ dépasse le milieu.</p>`, R`<p>Le niveau retenu est le multiple de $q$ le plus proche : on passe de $s_n$ à $s_n+q$ dès que $s$ dépasse $s_n+\frac q2$. L'écart entre $s$ et le niveau retenu est donc toujours au plus d'un demi-pas :</p><div class="sbox">$$\varepsilon\in\Big[-\frac q2;\ \frac q2\Big].$$</div>`),
    Q("L'erreur pour un signal triangulaire", R`<p>Pendant que $s$ monte de $q$, le niveau quantifié saute une fois.</p>`, R`<p>Pendant une montée, $s(t) = pt+\text{cte}$. Juste après un basculement, $s$ est à $\frac q2$ sous le nouveau niveau : $\varepsilon = -\frac q2$. Puis $s$ monte, $s_n$ est fixe, et $\varepsilon$ croît linéairement avec la pente $p$ jusqu'à $+\frac q2$, où a lieu le basculement suivant : $\varepsilon$ retombe à $-\frac q2$.</p><p>$\varepsilon(t)$ est donc une <b>dent de scie</b> entre $-\frac q2$ et $\frac q2$, de période</p>$$\tau = \frac qp\quad(\text{temps pour que }s\text{ monte de }q).$$${err}`),
    Q("Moyenne, moyenne quadratique, valeur efficace", R`<p>Sur une période centrée, $\varepsilon(t) = pt$ pour $t\in[-\tau/2,\tau/2]$.</p>`, R`<p>On centre une dent : $\varepsilon(t) = pt$ pour $t\in\big[-\frac\tau2,\frac\tau2\big]$, avec $p\tau = q$.</p><p><b>Moyenne</b> : la fonction est impaire sur un intervalle symétrique, $\langle\varepsilon\rangle = 0$.</p><p><b>Moyenne quadratique</b> :</p>$$\langle\varepsilon^2\rangle = \frac1\tau\int_{-\tau/2}^{\tau/2}p^2t^2\,dt = \frac{p^2}\tau\cdot\frac{2}{3}\Big(\frac\tau2\Big)^3 = \frac{p^2\tau^2}{12} = \frac{q^2}{12}.$$<div class="sbox">$$\langle\varepsilon\rangle = 0,\qquad\langle\varepsilon^2\rangle = \frac{q^2}{12},\qquad\varepsilon_{\mathrm{eff}} = \sqrt{\langle\varepsilon^2\rangle} = \frac q{2\sqrt3}\approx0{,}29\,q.$$</div><p><b>Application.</b> Sur $n$ bits, on dispose de $2^n$ niveaux, séparés par $2^n-1$ pas sur la dynamique : $q = \dfrac{\Delta s}{2^n-1}$. Donc</p>$$\frac{\varepsilon_{\mathrm{eff}}}{\Delta s} = \frac1{2\sqrt3\,(2^n-1)}.$$<ul><li>$8$ bits : $\dfrac1{2\sqrt3\times255}\approx1{,}1\cdot10^{-3}$ ;</li><li>$12$ bits : $\dfrac1{2\sqrt3\times4095}\approx7{,}0\cdot10^{-5}$.</li></ul><p>Chaque bit supplémentaire divise l'erreur efficace par $2$ (gain d'environ $6$ dB de rapport signal sur bruit).</p>`),
    Q("Pendant une descente", R`<p>La dent de scie est parcourue dans l'autre sens.</p>`, R`<p>Pendant une descente, $\varepsilon$ décroît linéairement de $\frac q2$ à $-\frac q2$ puis remonte brusquement : c'est la même dent de scie, retournée. Moyenne, moyenne quadratique et valeur efficace ne dépendent que de $\varepsilon^2$ et de la symétrie : elles sont <b>identiques</b>.</p>`),
    Q("Pour un signal quelconque", R`<p>Sur l'échelle d'un pas $q$, une courbe régulière ressemble à un segment.</p>`, R`<p>Si l'amplitude du signal est grande devant $q$, le signal traverse de nombreux niveaux. Entre deux niveaux voisins (sur une variation $q$), une courbe régulière est pratiquement <b>affine</b> : localement, on est ramené au cas du triangle. L'erreur est alors, morceau par morceau, une dent de scie entre $-\frac q2$ et $\frac q2$, et les résultats $\langle\varepsilon\rangle = 0$, $\varepsilon_{\mathrm{eff}} = \frac q{2\sqrt3}$ restent valables en moyenne. Seuls les sommets (où la pente s'annule) échappent à ce modèle, mais ils occupent une fraction négligeable du temps.</p>`)
  ],
  piege: R`Écrire $q = \Delta s/2^n$ ou $\Delta s/(2^n-1)$ : les deux conventions existent ; pour $n$ grand, elles donnent pratiquement le même résultat.`,
  methode: R`Valeur efficace d'une dent de scie d'amplitude crête à crête $q$ : $\frac{q}{2\sqrt3}$ (à retenir, elle sert pour tout bruit de quantification).`
},

/* ======================== Exercice 11 ======================== */
{ id: "sig-11", ...P, level: 2, time: "25 min",
  title: "Le bruit de quantification vu comme une variable aléatoire",
  enonce: R`<p>Après un C.A.N. linéaire de pas $q$ suivi d'un C.N.A., on obtient un signal $s(t)$ qui diffère de l'entrée $e(t)$. On l'étudie avec le montage suivant, réglé pour que $s(t) = e(t)$ chaque fois que $e(t)$ est un multiple exact de $q$.</p>${bloc11}<p>On note $\varepsilon(t) = s(t)-e(t)$ et on modélise $\varepsilon$ par une variable aléatoire.</p><ol>
<li>Dans quel intervalle $I$ l'erreur prend-elle ses valeurs ?</li>
<li>On suppose $\varepsilon$ uniformément répartie sur $I$. Donner sa fonction de répartition $F(x) = P(\varepsilon\lt x)$.</li>
<li>En déduire sa densité $f = F'$ et la tracer.</li>
<li>Quelle est la valeur moyenne de $\varepsilon$ ?</li>
<li>Calculer $\langle\varepsilon^2\rangle = \int_Ix^2f(x)\,dx$ et sa racine carrée. Que représente cette grandeur ? Comment la mesurer ?</li></ol>`,
  decode: { donnees: [R`Arrondi au plus proche, pas $q$.`], but: R`Retrouver la valeur efficace du bruit de quantification par un modèle probabiliste.`, cles: {} },
  steps: [
    Q("L'intervalle", R`<p>Arrondi au plus proche.</p>`, R`<p>Le C.A.N. arrondit au niveau le plus proche, donc $|s-e|\leqslant\frac q2$ :</p><div class="sbox">$$I = \Big[-\frac q2;\ \frac q2\Big].$$</div>`),
    Q("Fonction de répartition et densité", R`<p>Loi uniforme : la probabilité d'un sous-intervalle est proportionnelle à sa longueur.</p>`, R`<p>Pour une loi uniforme sur $I$ (de longueur $q$), $P(\varepsilon\lt x)$ est la proportion de $I$ située à gauche de $x$ :</p><div class="sbox">$$F(x) = \begin{cases}0&\text{si }x\leqslant-\frac q2\\\dfrac{x+q/2}q&\text{si }-\frac q2\leqslant x\leqslant\frac q2\\1&\text{si }x\geqslant\frac q2\end{cases}\qquad f(x) = F'(x) = \begin{cases}\dfrac1q&\text{sur }I\\0&\text{ailleurs.}\end{cases}$$</div><div class="figrow">${Ff}${ff}</div><p>Vérification : $\int f = q\times\frac1q = 1$.</p>`, ["sig-proba"]),
    Q("La valeur moyenne", R`<p>$f$ est paire.</p>`, R`$$\langle\varepsilon\rangle = \int_{-q/2}^{q/2}x\cdot\frac1q\,dx = \frac1q\Big[\frac{x^2}2\Big]_{-q/2}^{q/2} = 0.$$<p>L'arrondi ne biaise pas le signal en moyenne.</p>`),
    Q("La valeur efficace du bruit", R`<p>$\int_{-q/2}^{q/2}x^2\,dx = \frac{2}{3}\big(\frac q2\big)^3$.</p>`, R`$$\langle\varepsilon^2\rangle = \frac1q\int_{-q/2}^{q/2}x^2\,dx = \frac1q\cdot\frac{2}{3}\cdot\frac{q^3}{8} = \frac{q^2}{12}.$$<div class="sbox">$$\sqrt{\langle\varepsilon^2\rangle} = \frac q{2\sqrt3}\approx0{,}29\,q.$$</div><p><b>Signification</b> : c'est la <b>valeur efficace du bruit de quantification</b>, c'est-à-dire la tension continue qui dissiperait la même puissance que $\varepsilon(t)$. On retrouve le résultat de l'exercice précédent, obtenu là pour un signal triangulaire.</p><p><b>Mesure</b> : on envoie $\varepsilon(t)$ (sortie du soustracteur) sur un <b>voltmètre efficace vrai</b> (« TRMS »), ou on calcule la valeur efficace d'un enregistrement numérique de $\varepsilon(t)$ ; on peut aussi mesurer sa puissance sur un analyseur de spectre (intégrale de la densité spectrale).</p>`)
  ],
  piege: R`Confondre la densité $f$ (valeur $1/q$, qui peut dépasser $1$) avec une probabilité.`,
  methode: R`Bruit uniformément réparti sur un intervalle de largeur $q$ : moyenne nulle, écart-type $q/\sqrt{12}$.`
},

/* ======================== Exercice 12 ======================== */
{ id: "sig-12", ...P, level: 3, time: "40 min",
  title: "Le spectre d'un signal numérique",
  enonce: R`<p>On considère le signal $p(t)$ formé d'impulsions rectangulaires de hauteur $E$, de largeur $\tau$, répétées avec la période $T_e$. Son rapport cyclique est $\alpha = \tau/T_e$.</p>${pulses}<p>On note $I(t)$ <b>une seule</b> impulsion (centrée en $0$) et $\tilde I(\nu) = \displaystyle\int_{-\infty}^{+\infty}I(t)e^{-2i\pi\nu t}\,dt$ sa transformée de Fourier ; $C_n$ désigne les coefficients de Fourier complexes de $p$.</p><ol>
<li>Calculer $C_n$ et $\tilde I(\nu)$. Quelle relation les lie ?</li>
<li>Cette relation est-elle générale, si le motif répété est un signal quelconque défini sur $\big[-\frac{T_e}2;\frac{T_e}2\big]$ ?</li>
<li>Un émetteur envoie, toutes les durées $T$, un caractère binaire : $1$ est codé par une impulsion d'amplitude $E$ et de durée $T$, $0$ par une impulsion d'amplitude $-E$ de même durée.${nrz}Justifier, sans calcul détaillé, que la densité spectrale de puissance du signal (puissance par unité de fréquence) est proportionnelle à $\frac1T|\tilde I(\nu)|^2$, où $\tilde I$ est la transformée de Fourier d'une impulsion.</li>
<li>Que devient le spectre si l'impulsion est remplacée par un train sinusoïdal de fréquence $\nu_0\gg\frac1T$ et de durée $T$ ? Proposer l'allure du spectre d'une telle communication.</li></ol>`,
  decode: { donnees: [R`$\alpha = \tau/T_e$ ; une seule impulsion pour $\tilde I$, le train entier pour $C_n$.`], but: R`Relier série de Fourier (signal périodique) et transformée de Fourier (motif), puis en déduire l'encombrement spectral d'une transmission numérique.`, cles: {} },
  steps: [
    Q("Les coefficients de Fourier", R`<p>$C_n = \frac1{T_e}\int_{-T_e/2}^{T_e/2}p(t)e^{-2i\pi nt/T_e}\,dt$ ; seul l'intervalle $[-\tau/2,\tau/2]$ contribue.</p>`, R`<p>Sur une période centrée, $p$ vaut $E$ sur $\big[-\frac\tau2,\frac\tau2\big]$ et $0$ ailleurs :</p>$$C_n = \frac1{T_e}\int_{-\tau/2}^{\tau/2}E\,e^{-2i\pi nt/T_e}\,dt$$$$= \frac{E}{T_e}\cdot\frac{e^{-i\pi n\tau/T_e}-e^{i\pi n\tau/T_e}}{-2i\pi n/T_e} = \frac{E}{T_e}\cdot\frac{\sin(\pi n\tau/T_e)}{\pi n/T_e}.$$<p>Avec $\alpha = \tau/T_e$ :</p><div class="sbox">$$C_n = E\alpha\,\frac{\sin(n\pi\alpha)}{n\pi\alpha} = E\alpha\operatorname{sinc}(n\pi\alpha)\qquad(C_0 = E\alpha = \langle p\rangle).$$</div>`),
    Q("La transformée de Fourier et la relation", R`<p>Même calcul avec $\nu$ continu à la place de $n/T_e$.</p>`, R`<p>Pour une seule impulsion :</p>$$\tilde I(\nu) = \int_{-\tau/2}^{\tau/2}E\,e^{-2i\pi\nu t}\,dt = E\,\frac{\sin(\pi\nu\tau)}{\pi\nu} = E\tau\operatorname{sinc}(\pi\nu\tau).$$<p>En $\nu = \frac n{T_e}$ : $\pi\frac n{T_e}\tau = n\pi\alpha$, donc $\tilde I\big(\frac n{T_e}\big) = E\tau\operatorname{sinc}(n\pi\alpha) = T_e\,C_n$.</p><div class="sbox">$$C_n = \frac1{T_e}\,\tilde I\Big(\frac n{T_e}\Big).$$</div><p>Les raies du signal périodique sont les valeurs, aux fréquences $\frac n{T_e}$, de l'enveloppe $\frac1{T_e}\tilde I(\nu)$.</p>${cn}`, ["sig-tf"]),
    Q("La relation est générale", R`<p>Le motif $m$ est nul hors de $[-T_e/2,T_e/2]$ : son intégrale sur $\mathbb R$ se réduit à cet intervalle.</p>`, R`<p><b>Oui.</b> Soit $m(t)$ le motif ($m = p$ sur $\big[-\frac{T_e}2,\frac{T_e}2\big]$, $m = 0$ ailleurs). Alors</p>$$\tilde m(\nu) = \int_{-\infty}^{+\infty}m(t)e^{-2i\pi\nu t}\,dt$$$$= \int_{-T_e/2}^{T_e/2}p(t)e^{-2i\pi\nu t}\,dt,$$<p>et en $\nu = \frac n{T_e}$ on reconnaît $T_e\,C_n$. Donc, pour tout motif :</p><div class="sbox">$$C_n = \frac1{T_e}\,\tilde m\Big(\frac n{T_e}\Big).$$</div><p>Répéter un motif <b>échantillonne</b> sa transformée de Fourier aux multiples de $\frac1{T_e}$.</p>`),
    Q("La densité spectrale d'un signal binaire", R`<p>Chaque symbole est une impulsion $\pm I(t-kT)$ ; les signes aléatoires détruisent les raies, il reste $|\tilde I|^2$ divisé par la durée d'un symbole.</p>`, R`<p>Le signal s'écrit $x(t) = \sum_ka_kI(t-kT)$ avec $a_k = \pm1$ aléatoires (selon le bit). On raisonne en trois temps :</p><ul><li><b>Une impulsion seule</b> a pour spectre $\tilde I(\nu)$ ; son énergie se répartit en fréquence selon $|\tilde I(\nu)|^2$ (égalité de Parseval).</li><li><b>Le signe</b> $a_k = \pm1$ ne change pas $|\tilde I|^2$ ; le décalage dans le temps non plus (il multiplie $\tilde I$ par $e^{-2i\pi\nu kT}$, de module $1$).</li><li><b>Les bits sont indépendants et de moyenne nulle</b> : il n'y a pas de motif périodique, donc pas de raies ; les énergies des impulsions s'ajoutent en moyenne. On émet une impulsion toutes les durées $T$ : la puissance (énergie par unité de temps) par unité de fréquence est $$\frac{dP}{d\nu}\propto\frac1T|\tilde I(\nu)|^2.$$</li></ul><p>Ici $\tilde I(\nu) = ET\operatorname{sinc}(\pi\nu T)$, d'où $\frac{dP}{d\nu}\propto E^2T\operatorname{sinc}^2(\pi\nu T)$ : l'essentiel de la puissance est dans $|\nu|\lt\frac1T$. Plus le débit $\frac1T$ est grand, plus le spectre est large.</p>${dsp}`, ["sig-tf"]),
    Q("Avec une porteuse sinusoïdale", R`<p>Multiplier par $\cos(2\pi\nu_0t)$ translate le spectre en $\pm\nu_0$.</p>`, R`<p>La nouvelle impulsion est $I'(t) = I(t)\cos(2\pi\nu_0t)$ (on module une porteuse). Comme $\cos(2\pi\nu_0t) = \frac12\big(e^{2i\pi\nu_0t}+e^{-2i\pi\nu_0t}\big)$ :</p>$$\tilde I'(\nu) = \frac12\Big(\tilde I(\nu-\nu_0)+\tilde I(\nu+\nu_0)\Big).$$<p>Comme $\nu_0\gg\frac1T$, les deux termes ne se chevauchent pas, et la densité spectrale $\propto\frac1T|\tilde I'|^2$ est formée de <b>deux lobes</b> en $\operatorname{sinc}^2$, centrés en $\pm\nu_0$, de largeur $\frac2T$ chacun.</p>${dspm}<p>C'est le principe des transmissions numériques par radio : le spectre est déplacé autour de la fréquence porteuse, et sa largeur est fixée par le débit.</p>`, ["sig-tf"])
  ],
  piege: R`Confondre $C_n$ (sans dimension de temps) et $\tilde I$ (une amplitude multipliée par une durée) : le facteur $\frac1{T_e}$ fait la différence.`,
  methode: R`Signal périodique = motif répété : ses raies sont les valeurs de la transformée de Fourier du motif aux multiples de la fréquence de répétition, divisées par la période.`
}
]);
})();

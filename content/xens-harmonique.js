/* Commando X-ENS · Aller plus loin · Sujet « Développement asymptotique de la série harmonique ». */
(() => {
const R = String.raw;
const { FIG, S, GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 1, kind: "probleme", qnav: true, side: true, level: 3, plus: "harm",
  sujet: "Développement asymptotique de la série harmonique",
  sujetDesc: "H_n = 1 + 1/2 + … + 1/n = ln n + γ + 1/(2n) − 1/(12n²) + o(1/n²). Méthode : comparaison série-intégrale pour l'équivalent et pour les restes de Riemann, suites adjacentes pour la constante d'Euler γ, puis on « télescope » : un équivalent de t_n − t_{n−1} donne, par sommation des équivalents, un équivalent de t_n. On itère pour chaque terme." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "hm-som": { t: "Sommation des équivalents (restes)", b: R`<p>Si $u_n\sim v_n$ avec $v_n\geqslant0$ et $\sum v_n$ convergente, alors $\sum u_n$ converge et $\sum_{k>n}u_k\sim\sum_{k>n}v_k$.</p>` },
  "hm-si": { t: "Comparaison série-intégrale", b: R`<p>Si $\varphi$ est continue décroissante positive sur $[1,+\infty[$, alors pour $k\geqslant2$ : $\int_k^{k+1}\varphi\leqslant\varphi(k)\leqslant\int_{k-1}^k\varphi$.</p>` },
  "hm-adj": { t: "Suites adjacentes", b: R`<p>Si $(u_n)$ décroît, $(v_n)$ croît et $u_n-v_n\to0$, elles convergent vers une même limite $\ell$, avec $v_n\leqslant\ell\leqslant u_n$.</p>` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> On note $H_n = \sum_{k=1}^n\frac1k$ pour $n\geqslant1$. On veut établir</p>$$H_n = \ln n+\gamma+\frac1{2n}-\frac1{12n^2}+o\Big(\frac1{n^2}\Big),$$<p>où $\gamma$ est la constante d'Euler.</p>`;

/* Figure : comparaison série-intégrale */
const figRect = GRAPH({ w: 440, h: 230, x: [0.7, 7.3], y: [0, 1.15], xt: [1, 2, 3, 4, 5, 6, 7], yt: [0.5, 1], ytl: ["0,5", "1"], xl: "x",
  curves: [{ f: x => 1 / x < 1.15 ? 1 / x : NaN, c: "b", lab: [5.3, 0.3, "1/x"] }],
  extra: (X, Y) => { let s = ""; for (let k = 1; k <= 6; k++) s += `<rect x="${X(k).toFixed(1)}" y="${Y(1 / k).toFixed(1)}" width="${(X(k + 1) - X(k)).toFixed(1)}" height="${(Y(0) - Y(1 / k)).toFixed(1)}" class="hr" style="opacity:.22"/><rect x="${X(k).toFixed(1)}" y="${Y(1 / k).toFixed(1)}" width="${(X(k + 1) - X(k)).toFixed(1)}" height="${(Y(0) - Y(1 / k)).toFixed(1)}" class="vr" style="fill:none;stroke-width:1"/>`; return s; } },
  R`Les rectangles de largeur $1$ et de hauteur $\frac1k$ sur $[k,k+1]$ ont pour aire totale $H_6$ ; ils dépassent l'aire sous $\frac1x$ : $H_n\geqslant\int_1^{n+1}\frac{dx}x = \ln(n+1)$. Les petits triangles curvilignes qui dépassent ont une aire totale qui converge : c'est $\gamma$.`, "Comparaison série-intégrale");

/* Figure : H_n - ln n */
const figGam = GRAPH({ w: 440, h: 230, x: [0, 30], y: [0.55, 1.02], xt: [5, 10, 15, 20, 25, 30], yt: [0.6, 0.7, 0.8, 0.9, 1], ytl: ["0,6", "0,7", "0,8", "0,9", "1"], xl: "n",
  curves: [{ f: () => 0.5772156649, c: "k", dash: true, lab: [1.5, 0.556, "γ ≈ 0,5772"] }, { f: x => x >= 1 ? 0.5772156649 + 1 / (2 * x) - 1 / (12 * x * x) : NaN, c: "g", lab: [7, 0.7, "γ + 1/(2n) − 1/(12n²)"] }],
  extra: (X, Y) => { let s = "", H = 0; for (let n = 1; n <= 30; n++) { H += 1 / n; s += `<circle cx="${X(n).toFixed(1)}" cy="${Y(H - Math.log(n)).toFixed(1)}" r="3" class="ptr"/>`; } return s; } },
  R`Les points $H_n-\ln n$ (rouge) décroissent vers $\gamma$, et suivent de très près $\gamma+\frac1{2n}-\frac1{12n^2}$ (orange) dès $n = 3$. Pour $n = 10$, l'écart est $\approx8{,}3\cdot10^{-7}$, de l'ordre du terme suivant $\frac1{120n^4}$.`, "Convergence vers γ");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "harm-1", ...P, part: "Partie I", time: "25 min",
  title: "La constante d'Euler",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $\ln(n+1)\leqslant H_n\leqslant1+\ln n$, et en déduire $H_n\sim\ln n$.</li>
<li>On pose $u_n = H_n-\ln n$ et $v_n = H_{n-1}-\ln n$ ($n\geqslant2$). Montrer que ces suites sont adjacentes. On note $\gamma$ leur limite commune.</li>
<li>Soit $\alpha>1$. Montrer que $\sum_{k>n}\frac1{k^\alpha}\sim\frac1{(\alpha-1)n^{\alpha-1}}$.</li></ol>`,
  decode: { donnees: [R`$x\mapsto\frac1{x^\alpha}$ décroissante.`], but: R`Établir $H_n = \ln n+\gamma+o(1)$ et l'équivalent des restes de Riemann.`, cles: {} },
  steps: [
    Q(1, "Encadrement", R`<p>Comparaison série-intégrale pour $\frac1x$, en sommant de $1$ à $n$ (resp. de $2$ à $n$).</p>`, R`<p>Pour $k\geqslant1$, $\frac1k\geqslant\int_k^{k+1}\frac{dx}x$ ; en sommant, $H_n\geqslant\int_1^{n+1}\frac{dx}x = \ln(n+1)$. Pour $k\geqslant2$, $\frac1k\leqslant\int_{k-1}^k\frac{dx}x$, donc $H_n\leqslant1+\int_1^n\frac{dx}x = 1+\ln n$. En divisant par $\ln n$ et comme $\ln(n+1)\sim\ln n$, $H_n\sim\ln n$.</p>${figRect}`, ["hm-si"]),
    Q(2, "Suites adjacentes", R`<p>$u_n-u_{n+1} = -\frac1{n+1}-\ln\big(1-\frac1{n+1}\big)$ et $v_{n+1}-v_n = \frac1n-\ln\big(1+\frac1n\big)$ ; $\ln(1+x)\leqslant x$.</p>`, R`<p>$u_n-v_n = \frac1n\to0$. Ensuite $u_n-u_{n+1} = -\frac1{n+1}+\ln(n+1)-\ln n = -\frac1{n+1}-\ln\big(1-\frac1{n+1}\big)\geqslant0$, car $\ln(1+x)\leqslant x$ avec $x = -\frac1{n+1}$. Et $v_{n+1}-v_n = \frac1n-\ln\big(1+\frac1n\big)\geqslant0$. Donc $(u_n)$ décroît, $(v_n)$ croît : elles sont adjacentes et convergent vers $\gamma$, avec $v_n\leqslant\gamma\leqslant u_n$. Ainsi $H_n = \ln n+\gamma+o(1)$, et $\gamma\in[v_2,u_2] = [1-\ln2,\frac32-\ln2]\approx[0{,}31;0{,}81]$. (En fait $\gamma\approx0{,}5772$.)</p>`, ["hm-adj"]),
    Q(3, "Restes de Riemann", R`<p>Encadrer $\sum_{k=n+1}^N\frac1{k^\alpha}$ par des intégrales, puis $N\to\infty$.</p>`, R`<p>Par comparaison série-intégrale ($x\mapsto x^{-\alpha}$ décroissante) :</p>$$\int_{n+1}^{N+1}\frac{dx}{x^\alpha}\leqslant\sum_{k=n+1}^N\frac1{k^\alpha}\leqslant\int_n^N\frac{dx}{x^\alpha}.$$<p>Quand $N\to\infty$ : $\frac1{(\alpha-1)(n+1)^{\alpha-1}}\leqslant\sum_{k>n}\frac1{k^\alpha}\leqslant\frac1{(\alpha-1)n^{\alpha-1}}$. Comme $(n+1)^{\alpha-1}\sim n^{\alpha-1}$, on a l'équivalent annoncé.</p>`, ["hm-si"])
  ],
  piege: R`L'équivalent $H_n\sim\ln n$ ne dit rien sur $H_n-\ln n$ : il faut un argument supplémentaire (ici, la monotonie) pour obtenir la constante $\gamma$.`,
  methode: R`Pour une somme $\sum f(k)$ avec $f$ monotone : encadrer par des intégrales ; pour la constante, étudier la monotonie de la différence somme $-$ intégrale.`
},

/* ===================== Partie II ===================== */
{ id: "harm-2", ...P, part: "Partie II", time: "35 min",
  title: "Les deux termes suivants",
  enonce: PRE + R`<p><b>Partie II.</b> On pose $t_n = H_n-\ln n-\gamma$ ; on sait que $t_n\to0$.</p><ol start="4">
<li>Montrer que $t_n-t_{n-1} = -\frac1{2n^2}-\frac1{3n^3}+O\big(\frac1{n^4}\big)$.</li>
<li>En écrivant $t_n = -\sum_{k>n}(t_k-t_{k-1})$, montrer que $t_n\sim\frac1{2n}$.</li>
<li>On pose $w_n = t_n-\frac1{2n}$. Montrer que $w_n-w_{n-1}\sim\frac1{6n^3}$, puis que $w_n\sim-\frac1{12n^2}$, et conclure.</li></ol>`,
  decode: { donnees: [R`DL de $\ln(1-x)$, sommation des équivalents.`], but: R`Obtenir les termes en $\frac1n$ et $\frac1{n^2}$.`, cles: {} },
  steps: [
    Q(4, "L'accroissement de t", R`<p>$t_n-t_{n-1} = \frac1n+\ln\big(1-\frac1n\big)$.</p>`, R`<p>$t_n-t_{n-1} = \frac1n-\ln n+\ln(n-1) = \frac1n+\ln\Big(1-\frac1n\Big)$. Avec $\ln(1-x) = -x-\frac{x^2}2-\frac{x^3}3+O(x^4)$ :</p>$$t_n-t_{n-1} = \frac1n-\frac1n-\frac1{2n^2}-\frac1{3n^3}+O\Big(\frac1{n^4}\Big) = -\frac1{2n^2}-\frac1{3n^3}+O\Big(\frac1{n^4}\Big).$$`),
    Q(5, "Le terme en 1/(2n)", R`<p>Télescopage : $\sum_{k=n+1}^N(t_k-t_{k-1}) = t_N-t_n\to-t_n$. Puis Q3 avec $\alpha = 2$.</p>`, R`<p>$\sum_{k=n+1}^N(t_k-t_{k-1}) = t_N-t_n\xrightarrow[N\to\infty]{}-t_n$. Or $t_k-t_{k-1}\sim-\frac1{2k^2}$, de signe constant et de série convergente : par sommation des équivalents et Q3 ($\alpha = 2$),</p>$$-t_n = \sum_{k>n}(t_k-t_{k-1})\sim-\frac12\sum_{k>n}\frac1{k^2}\sim-\frac1{2n}.$$<p>Donc $t_n\sim\frac1{2n}$, soit $H_n = \ln n+\gamma+\frac1{2n}+o\big(\frac1n\big)$.</p>`, ["hm-som"]),
    Q(6, "Le terme en −1/(12n²)", R`<p>$\frac1{2(n-1)}-\frac1{2n} = \frac1{2n(n-1)} = \frac1{2n^2}+\frac1{2n^3}+O\big(\frac1{n^4}\big)$.</p>`, R`<p>$w_n-w_{n-1} = (t_n-t_{n-1})-\frac1{2n}+\frac1{2(n-1)}$. Or $\frac1{2(n-1)}-\frac1{2n} = \frac1{2n(n-1)} = \frac1{2n^2}\cdot\frac1{1-1/n} = \frac1{2n^2}+\frac1{2n^3}+O\big(\frac1{n^4}\big)$. Avec Q4 :</p>$$\begin{aligned}w_n-w_{n-1} &= -\frac1{2n^2}-\frac1{3n^3}+\frac1{2n^2}+\frac1{2n^3}+O\Big(\frac1{n^4}\Big)\\&= \frac1{6n^3}+O\Big(\frac1{n^4}\Big)\sim\frac1{6n^3}.\end{aligned}$$<p>Comme $w_n\to0$, par sommation des équivalents et Q3 ($\alpha = 3$) : $-w_n = \sum_{k>n}(w_k-w_{k-1})\sim\frac16\cdot\frac1{2n^2}$, soit $w_n\sim-\frac1{12n^2}$. Finalement</p><div class="sbox">$$H_n = \ln n+\gamma+\frac1{2n}-\frac1{12n^2}+o\Big(\frac1{n^2}\Big).$$</div>`, ["hm-som"])
  ],
  piege: R`On a besoin du DL de $t_n-t_{n-1}$ à un ordre de plus que le terme cherché (ici jusqu'à $\frac1{n^3}$ pour obtenir le terme en $\frac1{n^2}$), car le terme dominant se simplifie avec la correction.`,
  methode: R`Méthode du télescopage : pour un développement de $t_n\to0$, trouver un équivalent de $t_n-t_{n-1}$ et sommer les restes. Retrancher le terme obtenu et recommencer.`
},

/* ===================== Partie III ===================== */
{ id: "harm-3", ...P, part: "Partie III", time: "20 min",
  title: "Utilisations numériques",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="7">
<li>Calculer $H_{10}$ et comparer avec $\ln10+\gamma+\frac1{20}-\frac1{1200}$ ($\gamma\approx0{,}5772157$).</li>
<li>Donner une approximation du plus petit $n$ tel que $H_n\geqslant10$.</li>
<li>(<b>Collectionneur</b>) Un album a $N$ vignettes, chaque achat donne une vignette uniforme indépendante. On admet que le nombre moyen d'achats pour compléter l'album est $NH_N$. En donner un développement asymptotique, et l'évaluer pour $N = 100$.</li></ol>`,
  decode: { donnees: [R`Partie II.`], but: R`Exploiter le développement.`, cles: {} },
  steps: [
    Q(7, "Précision du développement", R`<p>$H_{10} = \frac{7381}{2520}$.</p>`, R`<p>$H_{10} = \frac{7381}{2520}\approx2{,}9289683$. Et $\ln10+\gamma+\frac1{20}-\frac1{1200}\approx2{,}3025851+0{,}5772157+0{,}05-0{,}0008333 = 2{,}9289674$. L'écart est $\approx8{,}3\cdot10^{-7}$, très proche de $\frac1{120\cdot10^4}\approx8{,}3\cdot10^{-7}$ : c'est le terme suivant $+\frac1{120n^4}$ du développement d'Euler-Maclaurin.</p>${figGam}`),
    Q(8, "Quand H_n dépasse 10", R`<p>$\ln n+\gamma\approx10$.</p>`, R`<p>Les termes correctifs sont minuscules pour $n$ de l'ordre de $10^4$ : $H_n\approx\ln n+\gamma+\frac1{2n}$. On résout $\ln n+\gamma = 10$ : $n = e^{10-\gamma}\approx12366{,}97$, et $\frac1{2n}\approx4\cdot10^{-5}$ correspond à un décalage de $n$ d'environ $0{,}5$. Le plus petit $n$ est $12367$ (vérification numérique : $H_{12366}\lt10\leqslant H_{12367}$). La série diverge, mais très lentement.</p>`),
    Q(9, "Le collectionneur", R`<p>$NH_N = N\ln N+\gamma N+\frac12-\frac1{12N}+o\big(\frac1N\big)$.</p>`, R`<p>En multipliant le développement par $N$ :</p>$$NH_N = N\ln N+\gamma N+\frac12-\frac1{12N}+o\Big(\frac1N\Big).$$<p>Pour $N = 100$ : $100\ln100+57{,}72+0{,}5-0{,}0008\approx460{,}52+57{,}72+0{,}50\approx518{,}7$. Il faut en moyenne environ $519$ achats pour compléter un album de $100$ vignettes, soit plus de cinq fois le nombre de vignettes.</p>`)
  ],
  piege: R`Un développement asymptotique ne donne pas de majoration d'erreur explicite : pour certifier $12367$, il faut un encadrement (par exemple $\frac1{2n}-\frac1{12n^2}\leqslant H_n-\ln n-\gamma\leqslant\frac1{2n}$, vrai pour tout $n\geqslant1$) ou un calcul direct.`,
  methode: R`Utiliser un développement asymptotique comme approximation numérique : la taille du premier terme négligé indique la précision.`
}
]);
})();

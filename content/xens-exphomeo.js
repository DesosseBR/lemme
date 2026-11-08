/* Commando X-ENS · Aller plus loin · Sujet « L'exponentielle est un homéomorphisme de Sₙ(ℝ) sur Sₙ⁺⁺(ℝ) ». */
(() => {
const R = String.raw;
const { GRAPH } = window.__LA;
const P = { subj: "xens", year: "mp", chap: 16, kind: "probleme", qnav: true, side: true, level: 4, plus: "exph",
  sujet: "L'exponentielle, homéomorphisme de Sₙ(ℝ) sur Sₙ⁺⁺(ℝ)",
  sujetDesc: "On montre que l'exponentielle de matrices envoie bijectivement les matrices symétriques réelles sur les symétriques définies positives (surjectivité par le théorème spectral, injectivité par interpolation de Lagrange), puis que sa réciproque, le logarithme, est continue (bornitude et valeur d'adhérence unique). On compare avec l'exponentielle sur Mₙ(ℝ), qui n'est ni injective ni surjective sur GLₙ⁺(ℝ)." };
const Q = (q, t, h, b, rappels) => ({ q, t, h, b, rappels });

LEMME.rappels({
  "eh-exp": { t: "Propriétés de l'exponentielle", b: R`<div class="sbox">$$\exp(PMP^{-1}) = P\exp(M)P^{-1},\qquad\exp(\operatorname{diag}(a_i)) = \operatorname{diag}(e^{a_i}).$$</div>$$M\exp(M) = \exp(M)M,\qquad\exp(M)^{-1} = \exp(-M),\qquad\exp(M)^\top = \exp(M^\top),$$$$\exp\in\mathcal C^0(\mathcal M_n(\mathbb R)).$$` },
  "eh-rho": { t: "Norme d'une matrice symétrique", b: R`$$S\in\mathcal S_n(\mathbb R)\ :\quad|||S|||_2 = \rho(S) = \max_i|\lambda_i|,\qquad\|Sx\|^2 = \sum\lambda_i^2x_i^2.$$` },
  "eh-adh": { t: "Suite bornée à valeur d'adhérence unique", b: R`$$\dim E\lt\infty,\ (x_n)\text{ bornée},\ \text{une seule valeur d'adhérence }a\ \Longrightarrow\ x_n\to a.$$` }
});

const PRE = R`<p class="pl-pre"><b>Cadre.</b> $\exp(M) = \sum_{k\geqslant0}\frac{M^k}{k!}$ pour $M\in\mathcal M_n(\mathbb R)$. $\mathcal S_n(\mathbb R)$ est l'espace des matrices symétriques réelles, $\mathcal S_n^{++}(\mathbb R)$ l'ensemble des symétriques définies positives (valeurs propres $>0$). On admet le théorème spectral : toute $S\in\mathcal S_n(\mathbb R)$ s'écrit $S = PD\,{}^tP$, $P\in O_n(\mathbb R)$, $D$ diagonale réelle.</p>`;

const figLog = GRAPH({ w: 440, h: 230, x: [-2.2, 2.2], y: [-0.2, 6], xt: [-2, -1, 1, 2], yt: [1, 2, 4, 6], xl: "λ", curves: [{ f: x => x < 1.79 ? Math.exp(x) : NaN, c: "b", lab: [1.2, 5, "exp"] }, { f: x => x > 0.83 ? Math.log(x) : NaN, c: "r", lab: [1.6, 0.25, "ln"] }] }, R`En base orthonormée propre, $\exp$ agit sur chaque valeur propre par $\lambda\mapsto e^\lambda$, bijection continue de $\mathbb R$ sur $]0,+\infty[$ de réciproque $\ln$ continue. La difficulté est de recoller : les bases propres changent avec la matrice.`, "Exponentielle et logarithme");

LEMME.exercises([
/* ===================== Partie I ===================== */
{ id: "exph-1", ...P, part: "Partie I", time: "30 min",
  title: "exp réalise une bijection de Sₙ(ℝ) sur Sₙ⁺⁺(ℝ)",
  enonce: PRE + R`<p><b>Partie I.</b></p><ol start="1">
<li>Montrer que $\exp(\mathcal S_n(\mathbb R))\subset\mathcal S_n^{++}(\mathbb R)$, et que les valeurs propres de $\exp(S)$ sont les $e^{\lambda}$, $\lambda$ valeur propre de $S$.</li>
<li>Montrer que $\exp : \mathcal S_n(\mathbb R)\to\mathcal S_n^{++}(\mathbb R)$ est surjective.</li>
<li>Soient $S,S'\in\mathcal S_n(\mathbb R)$ avec $\exp(S) = \exp(S')$. En construisant un polynôme $L$ tel que $L(e^\lambda) = \lambda$ pour toute valeur propre $\lambda$ de $S$ ou de $S'$, montrer que $S = S'$.</li>
<li>Calculer $\exp\begin{pmatrix}0&1\\1&0\end{pmatrix}$ et le logarithme symétrique de $\begin{pmatrix}2&1\\1&2\end{pmatrix}$.</li></ol>`,
  decode: { donnees: [R`Théorème spectral, $\exp(PDP^{-1}) = P\exp(D)P^{-1}$.`], but: R`Se ramener aux valeurs propres, où $\exp$ est la bijection $\mathbb R\to\,]0,+\infty[$.`, cles: {} },
  steps: [
    Q(1, "Bien défini", R`<p>$S = PD\,{}^tP$ donne $\exp(S) = P\exp(D)\,{}^tP$.</p>`, R`<p>$S = PD\,{}^tP$ avec $P^{-1} = {}^tP$, donc $\exp(S) = P\exp(D)\,{}^tP = P\operatorname{diag}(e^{\lambda_1},\dots,e^{\lambda_n})\,{}^tP$. Cette matrice est symétrique ($\,{}^t(P\Delta\,{}^tP) = P\Delta\,{}^tP$ pour $\Delta$ diagonale), de valeurs propres $e^{\lambda_i}>0$ : elle est dans $\mathcal S_n^{++}(\mathbb R)$.</p>`, ["eh-exp"]),
    Q(2, "Surjectivité", R`<p>Prends le logarithme des valeurs propres.</p>`, R`<p>Soit $A\in\mathcal S_n^{++}(\mathbb R)$ : $A = P\operatorname{diag}(\mu_1,\dots,\mu_n)\,{}^tP$, $\mu_i>0$. Posons $U = P\operatorname{diag}(\ln\mu_1,\dots,\ln\mu_n)\,{}^tP\in\mathcal S_n(\mathbb R)$. Alors $\exp(U) = P\operatorname{diag}(\mu_i)\,{}^tP = A$.</p>`, ["eh-exp"]),
    Q(3, "Injectivité par interpolation", R`<p>$L$ est bien défini car $\exp$ est injective sur $\mathbb R$. Puis $L(\exp S) = S$.</p>`, R`<p>Soient $\lambda_i$ les valeurs propres de $S$, $\mu_j$ celles de $S'$. On veut $L(e^{\lambda_i}) = \lambda_i$ et $L(e^{\mu_j}) = \mu_j$ : c'est cohérent, car $e^{\lambda_i} = e^{\mu_j}$ entraîne $\lambda_i = \mu_j$. Lagrange fournit $L\in\mathbb R[X]$. Avec $S = PD\,{}^tP$ :</p>$$L(\exp S) = P\,L(\exp D)\,{}^tP = P\operatorname{diag}\big(L(e^{\lambda_i})\big)\,{}^tP = PD\,{}^tP = S.$$<p>De même $L(\exp S') = S'$. Comme $\exp S = \exp S'$ :</p><div class="sbox">$$S = L(\exp S) = L(\exp S') = S'.$$</div><p>Avec Q1 et Q2 : $\exp : \mathcal S_n(\mathbb R)\to\mathcal S_n^{++}(\mathbb R)$ est bijective. On note $\operatorname{Log}$ sa réciproque.</p>`),
    Q(4, "Deux calculs", R`<p>$J = \begin{pmatrix}0&1\\1&0\end{pmatrix}$ vérifie $J^2 = I$. Pour le logarithme : valeurs propres $3$ et $1$.</p>`, R`<p>$J^2 = I$ : en séparant les puissances paires et impaires,</p>$$\exp(J) = \sum_k\frac1{(2k)!}I+\sum_k\frac1{(2k+1)!}J = \operatorname{ch}(1)I+\operatorname{sh}(1)J = \begin{pmatrix}\operatorname{ch}1&\operatorname{sh}1\\\operatorname{sh}1&\operatorname{ch}1\end{pmatrix}.$$<p>$A = \begin{pmatrix}2&1\\1&2\end{pmatrix} = I+J$ a pour valeurs propres $3$ (vecteur $(1,1)$) et $1$ (vecteur $(1,-1)$). Le projecteur orthogonal sur $\mathbb R(1,1)$ est $\Pi = \frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$, et $A = 3\Pi+1\cdot(I-\Pi)$, donc</p><div class="sbox">$$\operatorname{Log}A = \ln3\,\Pi+\ln1\,(I-\Pi) = \frac{\ln3}2\begin{pmatrix}1&1\\1&1\end{pmatrix}.$$</div>${figLog}`)
  ],
  piege: R`Sur $\mathcal M_n(\mathbb R)$ tout entier, $\exp$ n'est pas injective : la rotation d'angle $2\pi$ donne $\exp\begin{pmatrix}0&-2\pi\\2\pi&0\end{pmatrix} = I = \exp(0)$. La symétrie des matrices (valeurs propres réelles) est essentielle.`,
  methode: R`Une fonction de matrices symétriques définie spectralement est un polynôme en la matrice (Lagrange) : c'est l'outil universel pour les questions d'unicité.`
},

/* ===================== Partie II ===================== */
{ id: "exph-2", ...P, part: "Partie II", time: "35 min",
  title: "Continuité du logarithme",
  enonce: PRE + R`<p><b>Partie II.</b> Soit $(A_k)$ une suite de $\mathcal S_n^{++}(\mathbb R)$ qui converge vers $A\in\mathcal S_n^{++}(\mathbb R)$, et $B_k = \operatorname{Log}A_k$, $B = \operatorname{Log}A$.</p><ol start="5">
<li>Montrer que $(A_k^{-1})$ converge vers $A^{-1}$, et que $\rho(A_k)$ et $\rho(A_k^{-1})$ sont bornés.</li>
<li>Montrer que $(B_k)$ est bornée. (Une valeur propre $\lambda$ de $B_k$ donne la valeur propre $e^\lambda$ de $A_k$ et $e^{-\lambda}$ de $A_k^{-1}$.)</li>
<li>Montrer que $B$ est la seule valeur d'adhérence de $(B_k)$, et conclure que $\operatorname{Log}$ est continue.</li>
<li>Montrer qu'en fait $\|B_k\|$ est contrôlé : $\rho(B_k) = \max\big(\ln\rho(A_k),\ \ln\rho(A_k^{-1})\big)$.</li></ol>`,
  decode: { donnees: [R`$\exp$ continue et bijective $\mathcal S_n\to\mathcal S_n^{++}$.`], but: R`Une bijection continue n'a pas toujours une réciproque continue : il faut un argument de compacité.`, cles: {} },
  steps: [
    Q(5, "Contrôle de Aₖ et de son inverse", R`<p>L'inversion est continue sur $GL_n$ ; $\rho = |||\cdot|||_2$ sur $\mathcal S_n$.</p>`, R`<p>L'inversion $M\mapsto M^{-1}$ est continue sur $GL_n(\mathbb R)$ (formule de la comatrice), donc $A_k^{-1}\to A^{-1}$. Une suite convergente est bornée ; pour des matrices symétriques, $\rho = |||\cdot|||_2$, donc $\rho(A_k)\leqslant M$ et $\rho(A_k^{-1})\leqslant M$ pour un $M>0$.</p>`, ["eh-rho"]),
    Q(6, "Bornitude de (Bₖ)", R`<p>Si $\lambda$ est valeur propre de $B_k$, alors $e^\lambda\leqslant M$ et $e^{-\lambda}\leqslant M$.</p>`, R`<p>Soit $\lambda$ une valeur propre de $B_k$. Par Q1, $e^\lambda$ est valeur propre de $A_k = \exp B_k$, et $e^{-\lambda}$ est valeur propre de $\exp(-B_k) = A_k^{-1}$. Donc $e^\lambda\leqslant\rho(A_k)\leqslant M$ et $e^{-\lambda}\leqslant M$, soit $|\lambda|\leqslant\ln M$. Ainsi $\rho(B_k)\leqslant\ln M$, et $(B_k)$ est bornée.</p>`, ["eh-rho"]),
    Q(7, "Valeur d'adhérence unique", R`<p>Si $B_{\psi(k)}\to\tilde B$, alors $\tilde B$ est symétrique et $\exp\tilde B = A$.</p>`, R`<p>Soit $\tilde B$ une valeur d'adhérence : $B_{\psi(k)}\to\tilde B$. $\mathcal S_n(\mathbb R)$ est fermé, donc $\tilde B\in\mathcal S_n(\mathbb R)$. Par continuité de $\exp$, $A_{\psi(k)} = \exp B_{\psi(k)}\to\exp\tilde B$, et aussi $\to A$. Donc $\exp\tilde B = A = \exp B$, et $\tilde B = B$ par injectivité (Q3).</p><p>$(B_k)$ est bornée (Q6) dans un espace de dimension finie, avec une seule valeur d'adhérence : elle converge vers $B$.</p><div class="sbox"><p>$\operatorname{Log}$ est continue : $\exp : \mathcal S_n(\mathbb R)\to\mathcal S_n^{++}(\mathbb R)$ est un homéomorphisme.</p></div>`, ["eh-adh"]),
    Q(8, "Une formule pour le rayon spectral", R`<p>Les valeurs propres de $B_k$ sont les $\ln\mu$, $\mu$ valeur propre de $A_k$.</p>`, R`<p>Si $A_k$ a pour valeurs propres $0\lt\mu_1\leqslant\dots\leqslant\mu_n$, $B_k$ a pour valeurs propres $\ln\mu_i$, et</p>$$\begin{aligned}\rho(B_k) &= \max(|\ln\mu_1|,|\ln\mu_n|) = \max\big(\ln\mu_n,\ -\ln\mu_1\big)\\&= \max\big(\ln\rho(A_k),\ \ln\rho(A_k^{-1})\big),\end{aligned}$$<p>car $\rho(A_k^{-1}) = \frac1{\mu_1}$. On retrouve que $\operatorname{Log}$ est bornée sur les parties de $\mathcal S_n^{++}$ « loin du bord », c'est-à-dire où $\rho(A)$ et $\rho(A^{-1})$ sont bornés.</p>`)
  ],
  piege: R`Oublier de contrôler $A_k^{-1}$ : la bornitude de $(A_k)$ seule ne borne pas $(B_k)$, car une valeur propre de $A_k$ qui tend vers $0$ donne une valeur propre de $B_k$ qui tend vers $-\infty$. C'est la limite $A$ <b>inversible</b> qui l'empêche.`,
  methode: R`Continuité d'une réciproque en dimension finie : montrer que la suite des antécédents est bornée, puis qu'elle n'a qu'une valeur d'adhérence (par continuité et injectivité de la fonction directe).`
},

/* ===================== Partie III ===================== */
{ id: "exph-3", ...P, part: "Partie III", time: "30 min",
  title: "Conséquences et contrastes",
  enonce: PRE + R`<p><b>Partie III.</b></p><ol start="9">
<li>Montrer que $\mathcal S_n^{++}(\mathbb R)$ est connexe par arcs, et que $GL_n(\mathbb R)$ est homéomorphe à $O_n(\mathbb R)\times\mathcal S_n(\mathbb R)\simeq O_n(\mathbb R)\times\mathbb R^{\frac{n(n+1)}2}$. (On admet que la décomposition polaire $A\mapsto(O,S)$ est un homéomorphisme de $GL_n(\mathbb R)$ sur $O_n(\mathbb R)\times\mathcal S_n^{++}(\mathbb R)$.)</li>
<li>Montrer que $B = \begin{pmatrix}-1&1\\0&-1\end{pmatrix}$, de déterminant $1$, n'est l'exponentielle d'aucune matrice réelle. (On montrera qu'une $A$ avec $\exp A = B$ commute avec $B$, donc s'écrit $aI+bN$ avec $N = \begin{pmatrix}0&1\\0&0\end{pmatrix}$.)</li>
<li>Montrer que $\exp : \mathcal A_2(\mathbb R)\to SO_2(\mathbb R)$ (matrices antisymétriques) est surjective mais pas injective.</li></ol>`,
  decode: { donnees: [R`Partie II : $\mathcal S_n^{++}\simeq\mathcal S_n$, espace vectoriel.`], but: R`Utiliser l'homéomorphisme pour transporter la topologie, et voir ce qui casse hors des symétriques.`, cles: {} },
  steps: [
    Q(9, "Topologie de GLₙ(ℝ)", R`<p>$\mathcal S_n(\mathbb R)$ est un espace vectoriel de dimension $\frac{n(n+1)}2$.</p>`, R`<p>$\mathcal S_n(\mathbb R)$ est un espace vectoriel (de dimension $\frac{n(n+1)}2$ : les coefficients $i\leqslant j$), donc connexe par arcs ; son image continue $\mathcal S_n^{++}(\mathbb R) = \exp(\mathcal S_n(\mathbb R))$ l'est aussi. (Directement : $\mathcal S_n^{++}$ est convexe.)</p><p>En composant la décomposition polaire avec $\operatorname{id}\times\operatorname{Log}$, homéomorphisme par la Partie II :</p><div class="sbox">$$GL_n(\mathbb R)\simeq O_n(\mathbb R)\times\mathcal S_n^{++}(\mathbb R)\simeq O_n(\mathbb R)\times\mathbb R^{\frac{n(n+1)}2}.$$</div><p>La topologie de $GL_n(\mathbb R)$ est « portée » par le compact $O_n(\mathbb R)$. Par exemple $GL_n(\mathbb R)$ a deux composantes connexes par arcs, comme $O_n(\mathbb R)$ ($SO_n$ et $O_n^-$).</p>`),
    Q(10, "Une matrice de déterminant 1 sans logarithme réel", R`<p>Le commutant de $B = -I+N$ est celui de $N$ : les $aI+bN$. Puis $\exp(aI+bN) = e^a(I+bN)$.</p>`, R`<p>Si $\exp A = B$, $A$ commute avec $\exp A = B$ (rappel). $B = -I+N$, et commuter avec $B$ équivaut à commuter avec $N$. Si $A = \begin{pmatrix}p&q\\r&s\end{pmatrix}$ : $AN = \begin{pmatrix}0&p\\0&r\end{pmatrix}$ et $NA = \begin{pmatrix}r&s\\0&0\end{pmatrix}$, donc $r = 0$ et $p = s$ : $A = aI+bN$. Alors, $aI$ et $bN$ commutant et $N^2 = 0$ :</p>$$\exp A = e^a(I+bN) = \begin{pmatrix}e^a&e^ab\\0&e^a\end{pmatrix},$$<p>de coefficients diagonaux $e^a>0\neq-1$. Contradiction.</p><div class="sbox"><p>$\exp : \mathcal M_2(\mathbb R)\to GL_2^+(\mathbb R)$ n'est pas surjective.</p></div><p>(En revanche $-I_2 = \exp\begin{pmatrix}0&-\pi\\\pi&0\end{pmatrix}$ a un logarithme réel.)</p>`, ["eh-exp"]),
    Q(11, "Antisymétriques et rotations", R`<p>$\exp\begin{pmatrix}0&-\theta\\\theta&0\end{pmatrix}$ est la rotation d'angle $\theta$.</p>`, R`<p>Pour $K = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$, $K^2 = -I$, et comme pour $\cos$ et $\sin$ :</p>$$\exp(\theta K) = \cos\theta\,I+\sin\theta\,K = \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.$$<p>Toute rotation s'obtient ainsi : surjectivité. Mais $\exp(\theta K) = \exp((\theta+2\pi)K)$ : pas d'injectivité.</p><div class="sbox"><p>$\exp : \mathcal A_2(\mathbb R)\to SO_2(\mathbb R)$ est surjective, $2\pi$-périodique : c'est le contraste avec $\mathcal S_n\to\mathcal S_n^{++}$, qui est un homéomorphisme.</p></div>`)
  ],
  piege: R`« $\det B>0$ » ne suffit pas pour avoir un logarithme réel : $\exp(A)$ a toujours un déterminant $e^{\operatorname{Tr}A}>0$, mais la réciproque est fausse (Q10).`,
  methode: R`Pour montrer qu'une matrice n'est pas une exponentielle : utiliser que $A$ commute avec $\exp A$, ce qui force la forme de $A$, puis calculer.`
}
]);
})();

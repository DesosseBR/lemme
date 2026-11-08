/* Oraux de maths CCINP : les 58 exercices d'analyse, reformulés et corrigés pas à pas.
   Classés par chapitre de la page Oraux. Champs : h (indice « coup d'œil »), ctx (rappel appliqué à l'exercice).
   Les fonctions d'aide FIG, PL (graphes) servent aux figures SVG. */
(() => {
const ORAUX = LEMME.SUBJECTS.find(s => s.id === "oraux").years.mp;
ORAUX.forEach(c => { if (c.cc && !c.cc.includes("ccinp")) c.cc.unshift("ccinp"); });

const f1 = v => +(+v).toFixed(1);
const FIG = (w, h, body, cap, label) => `<figure class="fig"><svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">${body}</svg><figcaption>${cap}</figcaption></figure>`;
const S = (x, y, t, a = "start", cls = "sm") => `<text x="${f1(x)}" y="${f1(y)}" class="${cls}" text-anchor="${a}">${t}</text>`;
const ARR = (x1, y1, x2, y2, c = "k", h = 8) => {
  const a = Math.atan2(y2 - y1, x2 - x1), bx = x2 - h * Math.cos(a), by = y2 - h * Math.sin(a), w = h * 0.42;
  return `<line class="v${c}" style="stroke-width:1.5" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(bx)}" y2="${f1(by)}"/><polygon class="h${c}" points="${[[x2, y2], [bx + w * Math.sin(a), by - w * Math.cos(a)], [bx - w * Math.sin(a), by + w * Math.cos(a)]].map(q => q.map(f1).join(",")).join(" ")}"/>`;
};
/* Graphe : o = { w, h, x:[a,b], y:[c,d], xt:[...], yt:[...], xtl, ytl (libellés), curves:[{f, c, n, dash, lab:[x,y,texte]}], hl:[{y,t}], vl:[{x,t}], xl, yl, band:{f,e}, extra:(X,Y)=>"" } */
const PL = o => {
  const w = o.w || 420, h = o.h || 240, m = { l: 40, r: 16, t: 16, b: 30 };
  const [a, b] = o.x, [c, d] = o.y;
  const X = x => m.l + (x - a) / (b - a) * (w - m.l - m.r), Y = y => h - m.b - (y - c) / (d - c) * (h - m.t - m.b);
  const y0 = c <= 0 && d >= 0 ? Y(0) : h - m.b, x0 = a <= 0 && b >= 0 ? X(0) : m.l;
  let s = "";
  if (o.band) { let up = "", dn = ""; for (let k = 0; k <= 200; k++) { const x = a + (b - a) * k / 200, v = o.band.f(x); up += `${k ? "L" : "M"}${f1(X(x))} ${f1(Y(Math.min(d, v + o.band.e)))} `; dn = `L${f1(X(x))} ${f1(Y(Math.max(c, v - o.band.e)))} ` + dn; } s += `<path d="${up}${dn}Z" style="fill:var(--yellow-soft);stroke:none"/>`; }
  (o.yt || []).forEach((t, i) => { s += `<line class="thin" x1="${m.l}" y1="${f1(Y(t))}" x2="${w - m.r}" y2="${f1(Y(t))}" style="stroke:var(--line);stroke-dasharray:none"/>` + S(m.l - 6, Y(t) + 4, o.ytl ? o.ytl[i] : String(t).replace(".", ","), "end"); });
  (o.xt || []).forEach((t, i) => { s += `<line class="ax" x1="${f1(X(t))}" y1="${f1(y0 - 3)}" x2="${f1(X(t))}" y2="${f1(y0 + 3)}"/>` + S(X(t), y0 + 16, o.xtl ? o.xtl[i] : String(t).replace(".", ","), "middle"); });
  s += ARR(m.l - 4, y0, w - m.r + 4, y0, "k", 7).replace(/class="vk"/, 'class="ax"').replace(/class="hk"/, 'class="axh"') + ARR(x0, h - m.b + 4, x0, m.t - 6, "k", 7).replace(/class="vk"/, 'class="ax"').replace(/class="hk"/, 'class="axh"');
  if (o.xl) s += S(w - m.r, y0 - 6, o.xl, "end", "it");
  if (o.yl) s += S(x0 + 6, m.t + 2, o.yl, "start", "it");
  (o.hl || []).forEach(l => { s += `<line class="thin" x1="${m.l}" y1="${f1(Y(l.y))}" x2="${w - m.r}" y2="${f1(Y(l.y))}"/>` + (l.t ? S(w - m.r, Y(l.y) - 5, l.t, "end") : ""); });
  (o.vl || []).forEach(l => { s += `<line class="thin" x1="${f1(X(l.x))}" y1="${m.t}" x2="${f1(X(l.x))}" y2="${h - m.b}"/>` + (l.t ? S(X(l.x) + 4, m.t + 10, l.t) : ""); });
  (o.curves || []).forEach(cv => {
    let p = "", on = false; const n = cv.n || 300;
    for (let k = 0; k <= n; k++) { const x = a + (b - a) * k / n, v = cv.f(x); if (!isFinite(v) || v < c - (d - c) || v > d + (d - c)) { on = false; continue; } p += `${on ? "L" : "M"}${f1(X(x))} ${f1(Y(Math.max(c - 0.02 * (d - c), Math.min(d + 0.02 * (d - c), v))))} `; on = true; }
    s += `<path class="v${cv.c || "b"}" style="fill:none;stroke-width:2.2${cv.dash ? ";stroke-dasharray:5 4" : ""}" d="${p.trim()}"/>`;
    if (cv.lab) s += S(X(cv.lab[0]), Y(cv.lab[1]), cv.lab[2], cv.lab[3] || "start", "sm " + (cv.c || "b"));
  });
  if (o.extra) s += o.extra(X, Y);
  return { svg: s, w, h, X, Y };
};
const GRAPH = (o, cap, label) => { const g = PL(o); return FIG(g.w, g.h, g.svg, cap, label); };
window.__LA = { f1, FIG, S, ARR, PL, GRAPH };
})();

/* ---------- Notions d'analyse (soulignées en bleu) ---------- */
LEMME.notions({
  "norme": { p: "normes?(?! subordonnée| d'opérateur| équivalente)", t: "Norme", b: R`<div class="sbox">$$N : E\to\mathbb R_+\ \text{norme}\iff\left\{\begin{aligned}&N(x) = 0\iff x = 0,\\&N(\lambda x) = |\lambda|\,N(x),\\&N(x+y)\leqslant N(x)+N(y).\end{aligned}\right.$$</div><h5>Exemples</h5>$$\mathcal C([0,1],\mathbb R):\quad\|f\|_\infty = \sup_{[0,1]}|f|,\qquad\|f\|_1 = \int_0^1|f|.$$` },
  "normes-equiv": { p: "normes? équivalentes?", t: "Normes équivalentes", b: R`<div class="sbox">$$N_1\sim N_2\iff\exists\alpha,\beta>0,\ \forall x,\quad\alpha N_1(x)\leqslant N_2(x)\leqslant\beta N_1(x).$$</div><h5>Pour le nier</h5>$$\exists(x_n),\quad\frac{N_2(x_n)}{N_1(x_n)}\to+\infty\ \ \text{ou}\ \ \to0.$$<h5>À retenir</h5>$$\dim E\lt\infty\ \Longrightarrow\ \text{toutes les normes sont équivalentes}.$$` },
  "evn": { p: "espaces? vectoriels? normés?", t: "Espace vectoriel normé", b: R`<div class="sbox">$$(E,N),\qquad d(x,y) = N(x-y).$$</div>$$u_n\to\ell\iff N(u_n-\ell)\to0,\qquad B(a,r) = \{x : N(x-a)\lt r\}.$$` },
  "boule": { p: "boules? (?:ouvertes?|fermées?)|boules?", t: "Boule", b: R`<div class="sbox">$$B(a,r) = \{x : \|x-a\|\lt r\},$$$$B_f(a,r) = \{x : \|x-a\|\leqslant r\},\qquad S(a,r) = \{x : \|x-a\| = r\}.$$</div><h5>Attention</h5><p>La forme dépend de la norme, dans $\mathbb R^2$ :</p>$$B_{\|\cdot\|_\infty}(0,1) = \,]-1,1[^2\ (\text{carré}),$$$$B_{\|\cdot\|_1}(0,1) = \{|x|+|y|\lt1\}\ (\text{losange}).$$` },
  "compact": { p: "compacts?|compactes?|compacité", t: "Partie compacte", b: R`<h5>Définition</h5><div class="sbox">$$K\ \text{compact}\iff\forall(x_n)\in K^{\mathbb N},\ \exists\varphi\nearrow,\ \exists\ell\in K,\ x_{\varphi(n)}\to\ell.$$</div><h5>À retenir</h5>$$K\ \text{compact}\ \Longrightarrow\ K\ \text{fermé et borné},$$$$\dim E\lt\infty:\quad K\ \text{compact}\iff K\ \text{fermé et borné}.$$<h5>Attention</h5><p>En dimension infinie, la boule unité fermée n'est pas compacte (Riesz).</p>` },
  "suite-extraite": { p: "suites? extraites?|sous-suites?", t: "Suite extraite", b: R`<div class="sbox">$$(x_{\varphi(n)})_n,\quad\varphi : \mathbb N\to\mathbb N\ \text{strictement croissante}\ \Longrightarrow\ \forall n,\ \varphi(n)\geqslant n.$$</div>$$x_n\to\ell\ \Longrightarrow\ x_{\varphi(n)}\to\ell,\qquad\text{exemple}:\ \varphi(n) = 2n.$$` },
  "image-reciproque": { p: "images? réciproques?", t: "Image réciproque", b: R`<div class="sbox">$$f^{-1}(B) = \{x : f(x)\in B\}\qquad(f\ \text{non nécessairement bijective}).$$</div>$$f\ \text{continue}:\quad F\ \text{fermé}\Rightarrow f^{-1}(F)\ \text{fermé},\qquad U\ \text{ouvert}\Rightarrow f^{-1}(U)\ \text{ouvert}.$$<h5>Exemple</h5>$$\{f : f(0) = 0\} = u^{-1}(\{0\}),\qquad u(f) = f(0).$$` },
  "cv-simple": { p: "convergences? simples?|converge simplement|convergent simplement|converger simplement", t: "Convergence simple", b: R`<h5>Définition</h5><div class="sbox">$$f_n\xrightarrow{\text{CVS}}f\ \text{sur}\ X\iff\forall x\in X,\ f_n(x)\xrightarrow[n\to\infty]{}f(x).$$</div>$$\forall x,\ \forall\varepsilon>0,\ \exists N_{x,\varepsilon},\ \forall n\geqslant N_{x,\varepsilon},\ |f_n(x)-f(x)|\leqslant\varepsilon\quad(N\ \text{dépend de}\ x).$$<h5>Exemple</h5>$$x^n\xrightarrow{\text{CVS}}\left\{\begin{aligned}0&\quad x\in[0,1[\\1&\quad x = 1\end{aligned}\right.\quad\text{sur}\ [0,1].$$` },
  "cv-uniforme": { p: "convergences? uniformes?|converge uniformément|convergent uniformément|converger uniformément|uniformément convergentes?", t: "Convergence uniforme", b: R`<h5>Définition</h5><div class="sbox">$$f_n\xrightarrow{\text{CVU}}f\ \text{sur}\ X\iff\|f_n-f\|_{\infty,X} = \sup_{x\in X}|f_n(x)-f(x)|\xrightarrow[n\to\infty]{}0.$$</div><h5>Pour la nier</h5>$$\exists(x_n)\in X^{\mathbb N},\quad f_n(x_n)-f(x_n)\not\to0.$$<h5>Exemple</h5>$$x^n\ \text{sur}\ [0,1[:\quad\sup_{[0,1[}x^n = 1\not\to0.$$` },
  "cv-normale": { p: "convergences? normales?|converge normalement|convergent normalement|normalement convergentes?", t: "Convergence normale", b: R`<h5>Définition</h5><div class="sbox">$$\sum f_n\ \text{CVN sur}\ X\iff\sum_n\|f_n\|_{\infty,X}\lt+\infty.$$</div><h5>Méthode</h5>$$\forall x\in X,\ |f_n(x)|\leqslant\alpha_n,\quad\sum\alpha_n\lt+\infty\ \Longrightarrow\ \text{CVN}.$$<h5>À retenir</h5>$$\text{CVN}\ \Longrightarrow\ \text{CVU}\ \Longrightarrow\ \text{CVS}\qquad(\text{réciproques fausses}).$$` },
  "cv-absolue": { p: "absolument convergentes?|convergences? absolues?|converge absolument|convergent absolument|converger absolument", t: "Convergence absolue", b: R`<div class="sbox">$$\sum|u_n|\ \text{converge}\ \Longrightarrow\ \sum u_n\ \text{converge},\qquad\Big|\sum_{n=0}^{+\infty}u_n\Big|\leqslant\sum_{n=0}^{+\infty}|u_n|.$$</div><h5>Attention</h5>$$\sum\frac{(-1)^n}{n}\ \text{converge},\qquad\sum\frac1n\ \text{diverge}.$$` },
  "equivalent": { p: "équivalents?(?! à| au)|équivalence", t: "Suites équivalentes", b: R`<h5>Définition</h5><div class="sbox">$$u_n\sim v_n\iff u_n = v_n(1+\varepsilon_n),\ \varepsilon_n\to0\iff\frac{u_n}{v_n}\to1\quad(v_n\neq0).$$</div><h5>À retenir</h5>$$u_n\sim v_n,\ v_n\geqslant0\ \Longrightarrow\ \sum u_n\ \text{et}\ \sum v_n\ \text{de même nature}.$$<h5>Attention</h5>$$u_n\sim v_n,\ u'_n\sim v'_n\ \not\Longrightarrow\ u_n+u'_n\sim v_n+v'_n.$$` },
  "riemann": { p: "séries? de Riemann|intégrales? de Riemann|règle de Riemann", t: "Séries et intégrales de Riemann", b: R`<div class="sbox">$$\sum_{n\geqslant1}\frac1{n^\alpha}\ \text{converge}\iff\alpha>1.$$</div><div class="sbox">$$\int_1^{+\infty}\frac{dt}{t^\alpha}\ \text{converge}\iff\alpha>1,\qquad\int_0^1\frac{dt}{t^\alpha}\ \text{converge}\iff\alpha\lt1.$$</div>` },
  "dalembert": { p: "règle de d'Alembert|critère de d'Alembert|d'Alembert", t: "Règle de d'Alembert", b: R`<p>$u_n>0$, $\dfrac{u_{n+1}}{u_n}\to\ell$ :</p><div class="sbox">$$\ell\lt1\ \Longrightarrow\ \sum u_n\ \text{converge},\qquad\ell>1\ \Longrightarrow\ \sum u_n\ \text{diverge grossièrement}.$$</div><h5>Attention</h5>$$\ell = 1:\quad\sum\frac1n\ \text{diverge},\quad\sum\frac1{n^2}\ \text{converge}.$$` },
  "serie-integrale": { p: "comparaisons? séries?[- ]intégrales?|comparaison avec une intégrale", t: "Comparaison série-intégrale", b: R`<p>$f\geqslant0$ continue décroissante sur $[n_0,+\infty[$, $k\geqslant n_0+1$ :</p><div class="sbox">$$\int_k^{k+1}f(t)\,dt\leqslant f(k)\leqslant\int_{k-1}^kf(t)\,dt.$$</div>$$\sum f(n)\ \text{converge}\iff\int_{n_0}^{+\infty}f\ \text{converge}.$$` },
  "integrable": { p: "intégrables?|intégrabilité", t: "Fonction intégrable", b: R`<div class="sbox">$$f\ \text{intégrable sur}\ I\iff\int_I|f(t)|\,dt\lt+\infty.$$</div><h5>Outils</h5>$$|f|\leqslant g,\ g\ \text{intégrable}\Rightarrow f\ \text{intégrable},\qquad|f|\sim g\geqslant0\Rightarrow\big(f\ \text{int.}\iff g\ \text{int.}\big),$$$$\int_1^{+\infty}\frac{dt}{t^\alpha}\lt\infty\iff\alpha>1,\qquad\int_0^1\frac{dt}{t^\alpha}\lt\infty\iff\alpha\lt1.$$<p>Sur un segment, toute fonction continue est intégrable.</p>` },
  "cv-dominee": { p: "convergences? dominées?", t: "Théorème de convergence dominée", b: R`<h5>Hypothèses</h5><ul><li>$f_n\to f$ simplement sur $I$ ;</li><li>$f_n$, $f$ continues par morceaux ;</li><li>$\exists\varphi$ intégrable, indépendante de $n$ : $\forall n$, $|f_n|\leqslant\varphi$.</li></ul><h5>Conclusion</h5><div class="sbox">$$\int_If_n\xrightarrow[n\to\infty]{}\int_If.$$</div>` },
  "classe-c": { p: "de classe|classe C", t: "Fonction de classe Cᵏ", b: R`<h5>Définition</h5><div class="sbox">$$f\in\mathcal C^k\iff f\ k\ \text{fois dérivable et}\ f^{(k)}\ \text{continue},\qquad\mathcal C^\infty = \bigcap_k\mathcal C^k.$$</div>$$\mathcal C^\infty\subset\dots\subset\mathcal C^2\subset\mathcal C^1\subset\mathcal C^0.$$<h5>Plusieurs variables</h5>$$f\in\mathcal C^1(U)\iff\forall i,\ \frac{\partial f}{\partial x_i}\ \text{existe et est continue sur}\ U.$$` },
  "derivees-partielles": { p: "dérivées? partielles?", t: "Dérivée partielle", b: R`<h5>Définition</h5><div class="sbox">$$\frac{\partial f}{\partial x}(a,b) = \lim_{t\to0}\frac{f(a+t,b)-f(a,b)}t,\qquad\frac{\partial f}{\partial y}(a,b) = \lim_{t\to0}\frac{f(a,b+t)-f(a,b)}t.$$</div><h5>Exemple</h5>$$f(x,y) = x^2y:\qquad\partial_xf = 2xy,\qquad\partial_yf = x^2.$$<p>Point « spécial » ($f$ définie à part) : revenir au taux d'accroissement.</p>` },
  "differentiable": { p: "différentiables?|différentiabilité|(?<!équations? )différentielles?", t: "Différentiabilité", b: R`<h5>Définition</h5><div class="sbox">$$f\ \text{différentiable en}\ a\iff\exists\ell\in\mathcal L(E,F),\ f(a+h) = f(a)+\ell(h)+o(\|h\|).$$</div>$$df(a) = \ell,\qquad E = \mathbb R^2:\ df(a)(h) = \partial_xf(a)\,h_1+\partial_yf(a)\,h_2.$$<h5>Critère</h5>$$f\in\mathcal C^1\ \Longrightarrow\ f\ \text{différentiable}.$$` },
  "point-critique": { p: "points? critiques?", t: "Point critique", b: R`<div class="sbox">$$a\ \text{point critique}\iff\nabla f(a) = 0\iff\frac{\partial f}{\partial x}(a) = \frac{\partial f}{\partial y}(a) = 0.$$</div>$$U\ \text{ouvert},\ a\ \text{extremum local}\ \Longrightarrow\ \nabla f(a) = 0.$$<h5>Attention</h5>$$f(x,y) = x^2-y^2:\quad\nabla f(0,0) = 0,\quad f(t,0)>0>f(0,t)\ \Longrightarrow\ \text{col}.$$` },
  "extremum": { p: "extremums? (?:locaux|local|globaux|global)|extrema (?:locaux|globaux)|extremums?|extrema", t: "Extremum", b: R`<h5>Définition</h5>$$\text{max local en}\ a\iff\exists r>0,\ \forall x\in B(a,r),\ f(x)\leqslant f(a).$$<h5>Ordre 1</h5>$$f\in\mathcal C^1(U),\ U\ \text{ouvert},\ \text{extremum en}\ a\ \Longrightarrow\ \nabla f(a) = 0.$$<h5>Ordre 2</h5><p>$r = \partial^2_{xx}f$, $s = \partial^2_{xy}f$, $t = \partial^2_{yy}f$ au point critique :</p><div class="sbox">$$\left\{\begin{aligned}rt-s^2>0,\ r>0&\Rightarrow\text{minimum local}\\rt-s^2>0,\ r\lt0&\Rightarrow\text{maximum local}\\rt-s^2\lt0&\Rightarrow\text{point col}\end{aligned}\right.$$</div>$$rt-s^2 = 0:\ \text{on ne peut pas conclure}.$$` },
  "produit-scalaire": { p: "produits? scalaires?", t: "Produit scalaire", b: R`<div class="sbox">$$(\cdot|\cdot)\ \text{produit scalaire}\iff\left\{\begin{aligned}&\text{bilinéaire symétrique},\\&(x|x)\geqslant0,\\&(x|x) = 0\iff x = 0.\end{aligned}\right.$$</div>$$\|x\| = \sqrt{(x|x)},\qquad|(x|y)|\leqslant\|x\|\,\|y\|.$$` },
  "orthogonal": { p: "orthogonaux|orthogonales?|orthogonal", t: "Orthogonal d'une partie", b: R`<div class="sbox">$$A^\perp = \{x\in E : \forall a\in A,\ (x|a) = 0\}.$$</div>$$A^\perp\ \text{sous-espace fermé},\qquad A\subset(A^\perp)^\perp,\qquad\dim E\lt\infty:\ (F^\perp)^\perp = F.$$` },
  "cauchy-schwarz": { p: "Cauchy-Schwarz", t: "Inégalité de Cauchy-Schwarz", b: R`<div class="sbox">$$|(x|y)|\leqslant\|x\|\,\|y\|,\qquad\text{égalité}\iff(x,y)\ \text{liée}.$$</div>$$\Big|\sum_{k=0}^nx_ky_k\Big|\leqslant\sqrt{\sum_kx_k^2}\,\sqrt{\sum_ky_k^2},\qquad\Big|\int_a^bfg\Big|\leqslant\sqrt{\int_a^bf^2}\sqrt{\int_a^bg^2}.$$` },
  "dse": { p: "développables? en séries? entières?|développements? en séries? entières?", t: "Développement en série entière", b: R`<div class="sbox">$$\forall|x|\lt r,\quad f(x) = \sum_{n=0}^{+\infty}a_nx^n,\qquad a_n = \frac{f^{(n)}(0)}{n!}.$$</div><h5>Usuels</h5>$$\frac1{1-x} = \sum_{n\geqslant0}x^n,\qquad\ln(1+x) = \sum_{n\geqslant1}\frac{(-1)^{n-1}}nx^n\qquad(R = 1),$$$$e^x = \sum_{n\geqslant0}\frac{x^n}{n!}\qquad(R = +\infty).$$` },
  "norme-subordonnee": { p: "normes? subordonnées?|normes? d'opérateur|norme triple", t: "Norme subordonnée", b: R`<div class="sbox">$$|||u||| = \sup_{x\neq0}\frac{\|u(x)\|_F}{\|x\|_E} = \sup_{\|x\|_E = 1}\|u(x)\|_F = \min\{k : \forall x,\ \|u(x)\|\leqslant k\|x\|\}.$$</div><h5>Méthode</h5>$$\forall x,\ \|u(x)\|\leqslant k\|x\|\quad\text{et}\quad\exists x_0\neq0,\ \|u(x_0)\| = k\|x_0\|\ \Longrightarrow\ |||u||| = k.$$` },
  "weierstrass": { p: "théorème de Weierstrass|Weierstrass", t: "Théorème de Weierstrass", b: R`<div class="sbox">$$f\in\mathcal C^0([a,b])\ \Longrightarrow\ \forall\varepsilon>0,\ \exists P\in\mathbb R[X],\ \sup_{[a,b]}|f-P|\leqslant\varepsilon.$$</div>$$\iff\exists(P_n),\ P_n\xrightarrow{\text{CVU}}f\ \text{sur}\ [a,b].$$` },
  "leibniz": { p: "formule de Leibniz|Leibniz", t: "Formule de Leibniz", b: R`<div class="sbox">$$(fg)^{(n)} = \sum_{k=0}^n\binom nkf^{(k)}g^{(n-k)}.$$</div><h5>Exemple</h5>$$(fg)'' = f''g+2f'g'+fg''.$$` },
  "taf": { p: "accroissements finis", t: "Théorème des accroissements finis", b: R`<div class="sbox">$$f\in\mathcal C^0([a,b])\cap\mathcal D(]a,b[)\ \Longrightarrow\ \exists c\in\,]a,b[,\ f(b)-f(a) = f'(c)\,(b-a).$$</div><h5>Conséquence</h5>$$|f'|\leqslant M\ \Longrightarrow\ |f(b)-f(a)|\leqslant M|b-a|.$$` },
  "convexe": { p: "convexes?|convexité", t: "Convexité", b: R`<h5>Partie convexe</h5><div class="sbox">$$\forall x,y\in A,\ \forall t\in[0,1],\quad tx+(1-t)y\in A.$$</div><h5>Fonction convexe</h5>$$\forall x,y,\ \forall t\in[0,1],\quad f\big(tx+(1-t)y\big)\leqslant tf(x)+(1-t)f(y),$$$$f\in\mathcal D^2(I):\quad f\ \text{convexe}\iff f''\geqslant0.$$` },
  "gamma": { p: "fonction Gamma|fonction Γ", t: "Fonction Gamma", b: R`<div class="sbox">$$\Gamma(x) = \int_0^{+\infty}t^{x-1}e^{-t}\,dt\quad(x>0),\qquad\Gamma(x+1) = x\,\Gamma(x).$$</div>$$\Gamma(1) = 1\ \Longrightarrow\ \Gamma(n+1) = n!,\qquad\Gamma\Big(\frac12\Big) = \sqrt\pi.$$` },
  "derivation-integrale": { p: "dérivation sous le signe (?:intégrale|somme)|dérivation sous l'intégrale|dériver sous l'intégrale", t: "Dérivation sous le signe intégrale", b: R`<p>$F(x) = \int_If(x,t)\,dt$, $x\in J$ :</p><ul><li>$\frac{\partial f}{\partial x}$ existe, continue en $x$, continue par morceaux en $t$ ;</li><li>$t\mapsto f(x,t)$ intégrable pour tout $x$ ;</li></ul><div class="sbox">$$\forall[a,b]\subset J,\ \Big|\frac{\partial f}{\partial x}(x,t)\Big|\leqslant\varphi(t)\ \Longrightarrow\ F\in\mathcal C^1(J),\quad F'(x) = \int_I\frac{\partial f}{\partial x}(x,t)\,dt.$$</div>` },
  "extrema-lies": { p: "extrema liés|extremums? liés?|multiplicateurs? de Lagrange", t: "Extrema liés", b: R`<p>$f,g\in\mathcal C^1$, $X = \{g = 0\}$ :</p><div class="sbox">$$f_{|X}\ \text{extremum en}\ a,\ \nabla g(a)\neq0\ \Longrightarrow\ \exists\lambda\in\mathbb R,\ \nabla f(a) = \lambda\,\nabla g(a).$$</div>` },
  "algebre-normee": { p: "algèbres? normées?", t: "Algèbre normée", b: R`<h5>Définition</h5><p>Algèbre munie d'une norme sous-multiplicative :</p><div class="sbox">$$\|uv\|\leqslant\|u\|\,\|v\|\ \Longrightarrow\ \|u^n\|\leqslant\|u\|^n.$$</div><h5>Exemple</h5>$$\big(\mathcal M_n(\mathbb R),\ \|A\| = \sup_{\|X\| = 1}\|AX\|\big).$$` },
  "edl": { p: "équations? différentielles? linéaires?", t: "Équation différentielle linéaire", b: R`<p>$y'+a(x)y = b(x)$, $a,b\in\mathcal C^0(I)$, $A' = a$ :</p><div class="sbox">$$y = \underbrace{\lambda e^{-A(x)}}_{\text{homogène}}+\underbrace{y_p(x)}_{\text{particulière}},\qquad\lambda\in\mathbb K.$$</div><h5>Attention</h5>$$xy'+\dots = \dots:\ \text{résoudre sur}\ ]-\infty,0[\ \text{et}\ ]0,+\infty[,\ \text{puis raccorder en}\ 0.$$` },
  "variation-constantes": { p: "variations? des constantes?", t: "Variation des constantes", b: R`<p>$y''+y = g(x)$, $y = \lambda(x)\cos x+\mu(x)\sin x$ :</p><div class="sbox">$$\left\{\begin{aligned}\lambda'\cos x+\mu'\sin x&= 0\\-\lambda'\sin x+\mu'\cos x&= g(x)\end{aligned}\right.\iff\left\{\begin{aligned}\lambda'&= -g(x)\sin x\\\mu'&= g(x)\cos x\end{aligned}\right.$$</div>` },
  "serie-geometrique": { p: "séries? géométriques?", t: "Série géométrique", b: R`<div class="sbox">$$|q|\lt1\ \Longrightarrow\ \sum_{n=0}^{+\infty}q^n = \frac1{1-q}.$$</div>$$|q|\geqslant1\ \Longrightarrow\ q^n\not\to0\ \Longrightarrow\ \text{divergence grossière}.$$` },
  "dl": { p: "développements? limités?", t: "Développement limité", b: R`<div class="sbox">$$f(x)\underset{x\to0}{=}a_0+a_1x+\dots+a_nx^n+o(x^n),\qquad f\in\mathcal C^n\Rightarrow a_k = \frac{f^{(k)}(0)}{k!}.$$</div><h5>Usuels</h5>$$\ln(1+x) = x-\frac{x^2}2+o(x^2),\qquad\sqrt{1+x} = 1+\frac x2-\frac{x^2}8+o(x^2),$$$$e^x = 1+x+\frac{x^2}2+o(x^2),\qquad\cos x = 1-\frac{x^2}2+o(x^3).$$` },
  "sous-multiplicative": { p: "sous-multiplicatives?", t: "Norme sous-multiplicative", b: R`<div class="sbox">$$\|uv\|\leqslant\|u\|\,\|v\|\ \Longrightarrow\ \|u^n\|\leqslant\|u\|^n\ \ (n\geqslant1).$$</div>$$\|u^{n+1}\| = \|u^nu\|\leqslant\|u^n\|\,\|u\|\leqslant\|u\|^{n+1}.$$` },
  "harmonique": { p: "séries? harmoniques?|constante d'Euler", t: "Série harmonique", b: R`<div class="sbox">$$H_n = \sum_{k=1}^n\frac1k = \ln n+\gamma+o(1),\qquad\gamma\approx0{,}577.$$</div>$$H_n\sim\ln n\ \Longrightarrow\ \sum\frac1n\ \text{diverge}.$$` },
  "bolzano": { p: "Bolzano-Weierstrass", t: "Théorème de Bolzano-Weierstrass", b: R`<div class="sbox">$$(x_n)\in(\mathbb K^n)^{\mathbb N}\ \text{bornée}\ \Longrightarrow\ \exists\varphi\nearrow,\ x_{\varphi(n)}\ \text{converge}.$$</div><h5>Attention</h5><p>Faux en dimension infinie :</p>$$\big(X^n\big)\ \text{dans}\ (\mathbb R[X],\|\cdot\|_1):\quad\|X^n\|_1 = 1,\quad\|X^n-X^m\|_1 = 2\ (n\neq m).$$` }
});

/* ===== Chapitre 7 : Suites et séries numériques ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1 } = window.__LA;

LEMME.rappels({
  "o-a-comparaison": { t: "Comparaison des séries à termes positifs", b: R`<p>$0\leqslant u_n\leqslant v_n$ à partir d'un rang :</p><div class="sbox">$$\sum v_n\text{ CV}\Rightarrow\sum u_n\text{ CV},\qquad\sum u_n\text{ DV}\Rightarrow\sum v_n\text{ DV}.$$</div>` },
  "o-a-equiv-series": { t: "Règle des équivalents", b: R`<div class="sbox">$$u_n\sim v_n,\ v_n\geqslant0\ \Longrightarrow\ \sum u_n\text{ et }\sum v_n\text{ de même nature}.$$</div><p>Signe constant indispensable :</p>$$u_n = \frac{(-1)^n}{\sqrt n}+\frac1n\sim\frac{(-1)^n}{\sqrt n} = v_n,\qquad\sum v_n\text{ CV},\quad\sum u_n\text{ DV}.$$` },
  "o-a-riemann-ser": { t: "Séries de Riemann et règle n^α u_n", b: R`<div class="sbox">$$\sum\frac1{n^\alpha}\text{ CV}\iff\alpha>1.$$</div>$$u_n\geqslant0,\ n^\alpha u_n\to0,\ \alpha>1\ \Longrightarrow\ \sum u_n\text{ CV}.$$` },
  "o-a-serie-integrale": { t: "Comparaison série-intégrale", b: R`<p>$f\geqslant0$ continue décroissante sur $[a,+\infty[$ :</p><div class="sbox">$$\int_n^{n+1}f\leqslant f(n)\leqslant\int_{n-1}^nf,\qquad\sum f(n)\ \text{CV}\iff\int_a^{+\infty}f\ \text{CV}.$$</div>` },
  "o-a-dl-usuels": { t: "Développements limités usuels en 0", b: R`<div class="sbox">$$\begin{gathered}e^x = 1+x+\tfrac{x^2}2+o(x^2),\qquad\ln(1+x) = x-\tfrac{x^2}2+o(x^2)\\\sin x = x+O(x^3),\qquad\cos x = 1-\tfrac{x^2}2+O(x^4)\\(1+x)^\alpha = 1+\alpha x+\tfrac{\alpha(\alpha-1)}2x^2+o(x^2)\end{gathered}$$</div>` },
  "o-a-cv-abs": { t: "Convergence absolue", b: R`<div class="sbox">$$\sum|u_n|\text{ CV}\ \Longrightarrow\ \sum u_n\text{ CV}\quad(u_n\in\mathbb C).$$</div>` },
  "o-a-alternee": { t: "Critère spécial des séries alternées", b: R`$$a_n\geqslant0,\ (a_n)\searrow,\ a_n\to0\ \Longrightarrow\ \sum(-1)^na_n\text{ CV},$$<div class="sbox">$$|R_n| = \Big|\sum_{k = n+1}^{+\infty}(-1)^ka_k\Big|\leqslant a_{n+1}.$$</div>` },
  "o-a-limite-monotone": { t: "Théorème de la limite monotone", b: R`<div class="sbox">$$(u_n)\nearrow\ \text{majorée}\Rightarrow u_n\to\sup_nu_n,\qquad(u_n)\searrow\ \text{minorée}\Rightarrow u_n\to\inf_nu_n.$$</div>$$(u_n)\nearrow\ \text{non majorée}\ \Longrightarrow\ u_n\to+\infty.$$` },
  "o-a-limite-pf": { t: "Limite d'une suite récurrente", b: R`<div class="sbox">$$u_{n+1} = f(u_n),\ u_n\to\ell,\ f\text{ continue en }\ell\ \Longrightarrow\ f(\ell) = \ell.$$</div>` },
  "o-a-rec-lin-c": { t: "Suites récurrentes linéaires d'ordre 2 (cas complexe)", b: R`<p>$u_{n+2} = pu_{n+1}+qu_n$, $p,q\in\mathbb C$, $q\neq0$, $r^2 = pr+q$ :</p><div class="sbox">$$\left\{\begin{aligned}r_1\neq r_2&:\quad u_n = \lambda r_1^n+\mu r_2^n,\\r_1 = r_2 = r&:\quad u_n = (\lambda+\mu n)\,r^n.\end{aligned}\right.$$</div><p>Dans $\mathbb C$ : toujours deux racines (comptées avec multiplicité).</p>` },
  "o-a-sev": { t: "Montrer qu'on a un sous-espace vectoriel", b: R`<div class="sbox">$$F\text{ sev de }E\iff0_E\in F\ \text{ et }\ \forall x,y\in F,\ \forall\lambda\in\mathbb K,\ \lambda x+y\in F.$$</div>` },
  "o-a-iso-dim": { t: "Isomorphisme et dimension", b: R`<div class="sbox">$$\varphi : E\to F\text{ linéaire bijective}\ \Longrightarrow\ \dim E = \dim F.$$</div>$$\varphi\text{ bijective}\iff\ker\varphi = \{0\}\ \text{ et }\ \operatorname{Im}\varphi = F.$$` },
  "o-a-pente": { t: "Signe de f(x) − x", b: R`<div class="sbox">$$u_{n+1}-u_n = g(u_n),\qquad g(x) = f(x)-x.$$</div>$$u_n\in J,\ g\leqslant0\text{ sur }J\Rightarrow(u_n)\searrow;\qquad g\geqslant0\text{ sur }J\Rightarrow(u_n)\nearrow.$$` }
});

/* --- Figure : comparaison série-intégrale --- */
const figBertrand = (() => {
  const f = x => 1 / (x * Math.log(x) ** 2);
  const o = { w: 430, h: 230, x: [1.6, 9.5], y: [0, 1.6], xt: [2, 3, 4, 5, 6, 7, 8, 9], yt: [0.5, 1, 1.5], xl: "t", yl: "f(t)", curves: [{ f, c: "b", lab: [6.6, 0.45, "f(t) = 1 / (t (ln t)²)"] }],
    extra: (X, Y) => { let s = ""; for (let k = 2; k <= 8; k++) s += `<rect x="${f1(X(k))}" y="${f1(Y(f(k)))}" width="${f1(X(k + 1) - X(k))}" height="${f1(Y(0) - Y(f(k)))}" style="fill:var(--yellow);fill-opacity:.35;stroke:var(--gold-ink);stroke-width:1"/>`; return s; } };
  return GRAPH(o, R`Avec $\beta = 2$ : le rectangle posé sur $[k,k+1]$ a pour aire $f(k)$ et contient l'aire sous la courbe entre $k$ et $k+1$ (car $f$ décroît). Donc $\int_k^{k+1}f\leqslant f(k)\leqslant\int_{k-1}^kf$.`, "Rectangles de la comparaison série-intégrale");
})();

/* --- Figure : escalier pour u_{n+1} = th(u_n) --- */
const figEscalier = (() => {
  const th = Math.tanh;
  const o = { w: 420, h: 260, x: [-0.3, 2.6], y: [-0.3, 2.2], xt: [1, 2], yt: [1, 2], xl: "x", curves: [{ f: x => x, c: "k", dash: true, lab: [1.95, 2.08, "y = x", "end"] }, { f: th, c: "b", lab: [2.2, 0.82, "y = th x"] }],
    extra: (X, Y) => { let s = "", u = 2.4, p = `M${f1(X(u))} ${f1(Y(0))}`; for (let k = 0; k < 7; k++) { const v = th(u); p += ` L${f1(X(u))} ${f1(Y(v))} L${f1(X(v))} ${f1(Y(v))}`; u = v; } s += `<path d="${p}" style="fill:none;stroke:var(--red);stroke-width:1.6"/>`;
      let u2 = 2.4; for (let k = 0; k < 4; k++) { s += S(X(u2), Y(0) + 26, k === 0 ? "u₀" : k === 1 ? "u₁" : k === 2 ? "u₂" : "u₃", "middle", "sm r"); u2 = th(u2); } return s; } };
  return GRAPH(o, R`La méthode de l'escalier pour $u_0 = 2{,}4$ : on monte jusqu'à la courbe (on calcule $\operatorname{th}u_n$), puis on rejoint la droite $y = x$ (cette valeur devient l'abscisse suivante). Comme $\operatorname{th}x< x$ pour $x>0$, l'escalier descend vers le point fixe $0$.`, "Escalier de la suite définie par la tangente hyperbolique");
})();

LEMME.exercises([
{
  id: "o-an-5", subj: "oraux", year: "mp", chap: 6, concours: "ccinp", level: 2, time: "20 min",
  title: "Séries de Bertrand et un terme général à développer",
  enonce: R`<p>Pour $\beta\in\mathbb R$ et $n\geqslant2$, on pose $w_n = \dfrac1{n\,(\ln n)^\beta}$.</p>
<ol>
<li>On suppose $\beta\leqslant0$. À l'aide d'une <span data-k="minor">minoration élémentaire</span> de $w_n$, montrer que $\sum w_n$ diverge.</li>
<li>On suppose $\beta>0$. Déterminer la nature de $\sum w_n$ en fonction de $\beta$ (on pourra étudier $\varphi : t\mapsto\dfrac1{t(\ln t)^\beta}$ sur $[2,+\infty[$).</li>
<li>Déterminer la nature de la série $\displaystyle\sum_{n\geqslant2}\frac{\Big(e-\big(1+\frac1n\big)^n\Big)\cos\frac1n}{\big(\ln(n^3+n)\big)^2}$.</li>
</ol>`,
  decode: {
    donnees: [R`$w_n = \frac1{n(\ln n)^\beta}$, positif pour $n\geqslant2$.`, R`Une fonction $\varphi$ dont $w_n = \varphi(n)$.`],
    but: R`La nature de $\sum w_n$ selon $\beta$ (série de Bertrand), puis une série qu'on ramène au cas $\beta = 2$.`,
    cles: {
      minor: R`Pour $n\geqslant3$, $\ln n\geqslant1$. Si $\beta\leqslant0$, alors $(\ln n)^\beta\leqslant1$ et$$w_n = \frac1{n(\ln n)^\beta}\geqslant\frac1n.$$On compare à la série harmonique.`,
      decr: R`$\varphi$ décroissante signifie : $s\leqslant t\Rightarrow\varphi(s)\geqslant\varphi(t)$. C'est indispensable pour encadrer $\varphi(n)$ par des intégrales.`,
      chgt: R`On pose $u = \ln t$, donc $du = \frac{dt}t$ :$$\int_2^X\frac{dt}{t(\ln t)^\beta} = \int_{\ln2}^{\ln X}\frac{du}{u^\beta}.$$`
    }
  },
  steps: [
    { q: 1, t: "Minorer par la série harmonique", h: R`<p>Quand l'exposant $\beta$ est négatif, le facteur $(\ln n)^\beta$ ne fait que <b>diminuer</b> le dénominateur : $w_n$ est plus grand que $\frac1n$, dont la série diverge.</p>`, b: R`<p>Pour $n\geqslant3$ : $\ln n\geqslant\ln3>1$, et comme $\beta\leqslant0$, $(\ln n)^\beta\leqslant1$. Donc</p><div class="sbox">$$w_n\geqslant\frac1n>0\qquad(n\geqslant3).$$</div><p>La série harmonique $\sum\frac1n$ diverge (Riemann avec $\alpha = 1$), donc par comparaison de séries à termes positifs, $\sum w_n$ diverge.</p>`, rappels: ["o-a-comparaison", "o-a-riemann-ser"] },
    { q: 2, t: "Étudier la fonction φ", h: R`<p>$w_n = \varphi(n)$ avec $\varphi$ positive et décroissante : c'est exactement le cadre de la comparaison série-intégrale. Et $\frac{1}{t(\ln t)^\beta}$ a une primitive simple : c'est $\frac{u'}{u^\beta}$ avec $u = \ln t$.</p>`, b: R`<p>Pour $\beta>0$, sur $[2,+\infty[$ : $t\mapsto t$ et $t\mapsto(\ln t)^\beta$ sont positives et croissantes, donc leur produit aussi, et $\varphi$ est continue, positive et <span data-k="decr">décroissante</span>.</p>` + figBertrand + R`<p>Par comparaison série-intégrale, $\sum\varphi(n)$ et $\int_2^{+\infty}\varphi$ sont de même nature.</p>`, rappels: ["o-a-serie-integrale"] },
    { q: 2, t: "Calculer l'intégrale", h: R`<p>On reconnaît une intégrale de Riemann après un <b>changement de variable</b> $u = \ln t$.</p>`, b: R`<p>Par le <span data-k="chgt">changement de variable</span> $u = \ln t$ :</p>$$\int_2^X\varphi(t)\,dt = \int_{\ln2}^{\ln X}\frac{du}{u^\beta}.$$<p>Quand $X\to+\infty$, $\ln X\to+\infty$, et l'intégrale de Riemann $\int_{\ln 2}^{+\infty}\frac{du}{u^\beta}$ converge si et seulement si $\beta>1$.</p><div class="sbox">$$\sum_{n\geqslant2}\frac1{n(\ln n)^\beta}\ \text{converge}\iff\beta>1.$$</div><p><b>À retenir :</b> le $\ln$ ne change pas la frontière de $\sum\frac1n$ : il faut encore une « puissance $>1$ », mais du logarithme cette fois.</p>`, rappels: ["o-a-serie-integrale"] },
    { q: 3, t: "Un équivalent du numérateur", h: R`<p>$\big(1+\frac1n\big)^n\to e$ : le numérateur tend vers $0$. Pour savoir <b>à quelle vitesse</b>, on écrit $\big(1+\frac1n\big)^n = e^{n\ln(1+1/n)}$ et on fait un développement limité.</p>`, b: R`$$n\ln\Big(1+\frac1n\Big) = n\Big(\frac1n-\frac1{2n^2}+o\Big(\frac1{n^2}\Big)\Big) = 1-\frac1{2n}+o\Big(\frac1n\Big).$$<p>Donc $\big(1+\frac1n\big)^n = e\cdot e^{-\frac1{2n}+o(\frac1n)} = e\Big(1-\frac1{2n}+o\big(\frac1n\big)\Big)$, et</p><div class="sbox">$$e-\Big(1+\frac1n\Big)^n = \frac e{2n}+o\Big(\frac1n\Big)\sim\frac e{2n}.$$</div>`, rappels: ["o-a-dl-usuels"] },
    { q: 3, t: "Équivalent du dénominateur et conclusion", h: R`<p>Dans $\ln(n^3+n)$, le terme dominant est $n^3$ : on le factorise pour faire apparaître $3\ln n$.</p>`, b: R`$$\ln(n^3+n) = 3\ln n+\ln\Big(1+\frac1{n^2}\Big) = 3\ln n+o(1)\sim3\ln n.$$<p>De plus $\cos\frac1n\to1$. En multipliant les équivalents (c'est permis pour un produit ou un quotient) :</p><div class="sbox">$$v_n\sim\frac{e/(2n)}{9(\ln n)^2} = \frac e{18}\cdot\frac1{n(\ln n)^2}.$$</div><p>C'est un terme positif, du type $w_n$ avec $\beta = 2>1$ : $\sum\frac1{n(\ln n)^2}$ converge. Par la règle des équivalents, $\sum v_n$ <b>converge</b>.</p>`, rappels: ["o-a-equiv-series"] }
  ],
  ctx: {
    "o-a-comparaison": R`<p>Ici $u_n = \frac1n$ et $v_n = w_n$ avec $\frac1n\leqslant w_n$ : le « petit » $\frac1n$ diverge, donc le « grand » $w_n$ aussi.</p>`,
    "o-a-riemann-ser": R`<p>$\alpha = 1$ : la série harmonique $\sum\frac1n$ diverge (c'est le cas limite).</p>`,
    "o-a-serie-integrale": R`<p>$f = \varphi$ sur $[2,+\infty[$ : continue, positive, décroissante si $\beta>0$. Donc $\sum w_n$ converge $\iff\int_2^{+\infty}\frac{dt}{t(\ln t)^\beta}<+\infty\iff\beta>1$.</p>`,
    "o-a-dl-usuels": R`<p>On utilise $\ln(1+x) = x-\frac{x^2}2+o(x^2)$ avec $x = \frac1n$, puis $e^h = 1+h+o(h)$ avec $h = -\frac1{2n}+o(\frac1n)$.</p>`,
    "o-a-equiv-series": R`<p>$v_n\sim\frac e{18}\cdot\frac1{n(\ln n)^2}\geqslant0$ : les deux séries ont même nature, et la seconde converge (question 2, $\beta = 2$).</p>`
  },
  piege: R`Appliquer la comparaison série-intégrale sans vérifier que $\varphi$ décroît. Et croire que $\frac1{n\ln n}$ « est plus petit que $\frac1n$ donc converge » : il diverge ($\beta = 1$).`,
  methode: R`Pour un terme général contenant $\ln n$ : comparaison série-intégrale avec le changement $u = \ln t$. Pour un terme compliqué : équivalent par développements limités, puis règle des équivalents.`
},
{
  id: "o-an-6", subj: "oraux", year: "mp", chap: 6, concours: "ccinp", level: 2, time: "20 min",
  title: "La règle de d'Alembert, démontrée puis appliquée",
  enonce: R`<p>Soit $(a_n)_{n\in\mathbb N}$ une suite de réels strictement positifs, et $\ell\in[0,1[$.</p>
<ol>
<li>On suppose que $\dfrac{a_{n+1}}{a_n}\xrightarrow[n\to\infty]{}\ell$. Montrer que $\sum a_n$ converge. On pourra <span data-k="geo">majorer $a_n$ par le terme d'une suite géométrique</span> à partir d'un certain rang.</li>
<li>Pour $b>0$, on pose $u_n = \dfrac{b^n\,n!}{n^n}$ ($n\geqslant1$). Déterminer la nature de $\sum u_n$ lorsque $b = 2$, puis lorsque $b = 3$.</li>
</ol>`,
  decode: {
    donnees: [R`$a_n>0$ et $\frac{a_{n+1}}{a_n}\to\ell<1$.`],
    but: R`Démontrer le critère de d'Alembert, puis l'appliquer à $\frac{b^nn!}{n^n}$.`,
    cles: {
      geo: R`L'idée : si chaque terme est au plus $q$ fois le précédent, alors $$a_n\leqslant a_N\,q^{n-N}\quad(n\geqslant N),$$ et $\sum q^n$ converge pour $q<1$.`,
      eps: R`On choisit $\varepsilon = \frac{1-\ell}2>0$, de sorte que $q = \ell+\varepsilon = \frac{1+\ell}2$ est <b>strictement entre</b> $\ell$ et $1$.`,
      lim: R`Limite classique : $$\Big(1+\frac1n\Big)^n = e^{n\ln(1+\frac1n)}\xrightarrow[n\to\infty]{}e,$$ car $n\ln(1+\frac1n)\sim n\cdot\frac1n = 1$.`
    }
  },
  steps: [
    { q: 1, t: "Choisir un réel q entre ℓ et 1", h: R`<p>La limite $\ell<1$ dit que le rapport finit par être proche de $\ell$. Pour obtenir une <b>majoration</b> utile, on se laisse une marge : on vise un $q$ avec $\ell< q<1$.</p>`, b: R`<p><b>Idée</b> : comme le rapport $\frac{a_{n+1}}{a_n}$ tend vers $\ell<1$, il finit par être plus petit qu'un nombre $q<1$ fixé. On choisit $q$ au milieu de $\ell$ et $1$ : <span data-k="eps">$q = \frac{1+\ell}2$</span>. Alors $\ell\lt q<1$ (par exemple $\ell = 0{,}5$ donne $q = 0{,}75$).</p><p><b>Définition de la limite</b> avec $\varepsilon = q-\ell>0$ : il existe un rang $N$ tel que, pour $n\geqslant N$, $\Big|\frac{a_{n+1}}{a_n}-\ell\Big|\leqslant\varepsilon$, donc en particulier</p>$$\forall n\geqslant N,\quad\frac{a_{n+1}}{a_n}\leqslant\ell+\varepsilon = q.$$` },
    { q: 1, t: "Majorer par une suite géométrique", h: R`<p>On « enchaîne » les inégalités $a_{n+1}\leqslant q\,a_n$  : on le démontre par récurrence.</p>`, b: R`<p>Pour $n\geqslant N$ : $a_{n+1}\leqslant q\,a_n$. <b>Récurrence sur $n\geqslant N$</b> : pour $n = N$, $a_N\leqslant a_Nq^0$. Si $a_n\leqslant a_Nq^{n-N}$, alors $a_{n+1}\leqslant q\,a_n\leqslant q\cdot a_Nq^{n-N} = a_Nq^{n+1-N}$ (on a multiplié par $q\geqslant0$, ce qui garde le sens). D'où :</p><div class="sbox">$$\forall n\geqslant N,\quad0< a_n\leqslant a_N\,q^{n-N} = \underbrace{\frac{a_N}{q^N}}_{\text{constante}}\,q^n.$$</div><p>Comme $0\leqslant q<1$, la série géométrique $\sum q^n$ converge. Par comparaison de séries à termes positifs, $\sum a_n$ converge.</p>`, rappels: ["o-a-comparaison"] },
    { q: 2, t: "Calculer le rapport", h: R`<p>Un terme avec $n!$ et $n^n$ : le quotient $\frac{u_{n+1}}{u_n}$ se simplifie toujours bien, car $(n+1)! = (n+1)\,n!$.</p>`, b: R`$$\frac{u_{n+1}}{u_n} = \frac{b^{n+1}(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{b^nn!} = b\,\frac{(n+1)\,n^n}{(n+1)^{n+1}} = b\Big(\frac n{n+1}\Big)^n = \frac b{\big(1+\frac1n\big)^n}.$$<p>Avec <span data-k="lim">$\big(1+\frac1n\big)^n\to e$</span> :</p><div class="sbox">$$\frac{u_{n+1}}{u_n}\xrightarrow[n\to\infty]{}\frac be.$$</div>` },
    { q: 2, t: "Conclure selon b", h: R`<p>On compare $\frac be$ à $1$, sachant $e\approx2{,}718$.</p>`, b: R`<ul><li>$b = 2$ : $\frac2e\approx0{,}74<1$. Par la question 1, $\sum\frac{2^nn!}{n^n}$ <b>converge</b>.</li><li>$b = 3$ : $\frac3e\approx1{,}10>1$. À partir d'un rang, $u_{n+1}>u_n$ : la suite $(u_n)$ est croissante et positive, donc ne tend pas vers $0$. La série $\sum\frac{3^nn!}{n^n}$ <b>diverge grossièrement</b>.</li></ul><p><b>Remarque :</b> pour $b = e$, la limite vaut $1$ et le critère ne conclut pas (on peut montrer, avec la formule de Stirling, que la série diverge).</p>` }
  ],
  ctx: { "o-a-comparaison": R`<p>$u_n = a_n$ et $v_n = C\,q^n$ avec $C = \frac{a_N}{q^N}$ : $0< a_n\leqslant Cq^n$ pour $n\geqslant N$, et $\sum Cq^n$ converge car $q<1$.</p>` },
  piege: R`Prendre $q = \ell$ : l'inégalité $\frac{a_{n+1}}{a_n}\leqslant\ell$ n'a aucune raison d'être vraie (la suite des rapports peut tendre vers $\ell$ par au-dessus). Il faut une marge.`,
  methode: R`Factorielles et puissances $n$-ièmes : critère de d'Alembert, avec $(n+1)! = (n+1)n!$ et $\big(1+\frac1n\big)^n\to e$.`
},
{
  id: "o-an-7", subj: "oraux", year: "mp", chap: 6, concours: "ccinp", level: 2, time: "20 min",
  title: "Équivalents, signe et nature d'une série complexe",
  enonce: R`<p>Soient $(u_n)$ et $(v_n)$ deux suites réelles, $(v_n)$ ne s'annulant pas à partir d'un certain rang.</p>
<ol>
<li>On suppose $u_n\sim v_n$. Montrer qu'à partir d'un certain rang, $u_n$ et $v_n$ ont <span data-k="signe">le même signe</span>.</li>
<li>On suppose de plus $v_n\geqslant0$. Montrer que $\sum u_n$ et $\sum v_n$ ont la même nature.</li>
<li>Étudier la convergence de $\displaystyle\sum_{n\geqslant2}\frac{\big((-1)^n+2i\big)\ln(n)\,\operatorname{sh}\frac1n}{\sqrt{n+5}}$.</li>
</ol>`,
  decode: {
    donnees: [R`$u_n\sim v_n$ : $\frac{u_n}{v_n}\to1$ (car $v_n\neq0$ à partir d'un rang).`],
    but: R`Justifier la règle des équivalents, puis l'utiliser pour une série complexe via la convergence absolue.`,
    cles: {
      signe: R`« Même signe » : $u_nv_n>0$, ce qui équivaut ici à $\frac{u_n}{v_n}>0$.`,
      module: R`Pour $z = a+ib$ : $|z| = \sqrt{a^2+b^2}$. Ici $(-1)^n+2i$ vaut $1+2i$ ou $-1+2i$, de module $\sqrt{1+4} = \sqrt5$ dans les deux cas.`
    }
  },
  steps: [
    { q: 1, t: "Écrire la limite avec ε = 1/2", h: R`<p>Un rapport qui tend vers $1$ finit par être compris entre $\frac12$ et $\frac32$ : en particulier il est positif. On choisit donc $\varepsilon = \frac12$ dans la définition de la limite.</p>`, b: R`<p>$\frac{u_n}{v_n}\to1$, donc avec $\varepsilon = \frac12$ :</p><div class="sbox">$$\exists N,\ \forall n\geqslant N,\quad\frac12\leqslant\frac{u_n}{v_n}\leqslant\frac32.$$</div><p>En particulier $\frac{u_n}{v_n}>0$ : $u_n$ et $v_n$ ont le même signe pour $n\geqslant N$.</p>` },
    { q: 2, t: "Encadrer u_n par des multiples de v_n", h: R`<p>On multiplie l'encadrement précédent par $v_n>0$ : on obtient $u_n$ coincé entre $\frac12v_n$ et $\frac32v_n$. Puis on compare dans les deux sens.</p>`, b: R`<p>Pour $n\geqslant N$, $v_n>0$ (car $v_n\geqslant0$ et $v_n\neq0$), d'où</p>$$0<\tfrac12v_n\leqslant u_n\leqslant\tfrac32v_n.$$<ul><li>Si $\sum v_n$ converge : $\sum\frac32v_n$ aussi, et $u_n\leqslant\frac32v_n$ donne la convergence de $\sum u_n$.</li><li>Si $\sum v_n$ diverge : $\sum\frac12v_n$ aussi, et $\frac12v_n\leqslant u_n$ donne la divergence de $\sum u_n$.</li></ul><p>Les deux séries ont bien la même nature.</p>`, rappels: ["o-a-comparaison"] },
    { q: 3, t: "Passer au module", h: R`<p>Le terme est complexe : on ne peut pas utiliser directement les équivalents (il faut un signe constant). Le réflexe : étudier la <b>convergence absolue</b>, c'est-à-dire la série des modules, qui est positive.</p>`, b: R`<p>Notons $z_n$ le terme général. <span data-k="module">$|(-1)^n+2i| = \sqrt5$</span>, et pour $n\geqslant2$, $\ln n>0$, $\operatorname{sh}\frac1n>0$ :</p>$$|z_n| = \frac{\sqrt5\,\ln(n)\,\operatorname{sh}\frac1n}{\sqrt{n+5}}.$$<p>Comme $\operatorname{sh}x\sim x$ en $0$ et $\sqrt{n+5}\sim\sqrt n$ :</p><div class="sbox">$$|z_n|\sim\frac{\sqrt5\,\ln n}{n\sqrt n} = \frac{\sqrt5\,\ln n}{n^{3/2}}.$$</div>`, rappels: ["o-a-cv-abs"] },
    { q: 3, t: "Comparer à une série de Riemann", h: R`<p>$\frac{\ln n}{n^{3/2}}$ n'est pas directement une série de Riemann à cause du $\ln n$. On « sacrifie » un peu de l'exposant : on multiplie par $n^{5/4}$ ($1<\frac54<\frac32$) et le $\ln$ est écrasé par la puissance restante.</p>`, b: R`<p>Soit $t_n = \frac{\sqrt5\ln n}{n^{3/2}}$. Alors</p>$$n^{5/4}\,t_n = \frac{\sqrt5\,\ln n}{n^{1/4}}\xrightarrow[n\to\infty]{}0$$<p>par croissances comparées. Comme $\frac54>1$, la règle $n^\alpha u_n\to0$ donne la convergence de $\sum t_n$. Par la question 2 (équivalents positifs), $\sum|z_n|$ converge.</p><div class="sbox">$$\sum z_n\ \text{converge absolument, donc converge.}$$</div>`, rappels: ["o-a-riemann-ser", "o-a-equiv-series", "o-a-cv-abs"] }
  ],
  ctx: {
    "o-a-comparaison": R`<p>Utilisée deux fois : $u_n\leqslant\frac32v_n$ pour transmettre la convergence, $\frac12v_n\leqslant u_n$ pour transmettre la divergence.</p>`,
    "o-a-cv-abs": R`<p>Le terme $z_n$ est complexe : on montre $\sum|z_n|<+\infty$, ce qui suffit.</p>`,
    "o-a-riemann-ser": R`<p>Avec $\alpha = \frac54>1$ : $n^{5/4}t_n\to0$, donc $t_n\leqslant\frac1{n^{5/4}}$ à partir d'un rang.</p>`,
    "o-a-equiv-series": R`<p>$|z_n|\sim t_n\geqslant0$, donc $\sum|z_n|$ et $\sum t_n$ ont même nature (convergente).</p>`
  },
  piege: R`Utiliser un équivalent sur une série complexe ou de signe variable. Ici on passe d'abord au module, qui est positif.`,
  methode: R`Série complexe : module, équivalent, puis règle $n^\alpha u_n\to0$ avec $1<\alpha<$ l'exposant trouvé pour absorber les $\ln$.`
},
{
  id: "o-an-43", subj: "oraux", year: "mp", chap: 6, concours: "ccinp", level: 2, time: "20 min",
  title: "Itérer la tangente hyperbolique",
  enonce: R`<p>Soit $x_0\in\mathbb R$. On définit $(u_n)$ par $u_0 = x_0$ et $u_{n+1} = \operatorname{th}(u_n)$ pour tout $n\in\mathbb N$.</p>
<ol>
<li>Montrer que $(u_n)$ est monotone et préciser son sens de variation selon le signe de $x_0$.</li>
<li>Montrer que $(u_n)$ converge et déterminer sa limite.</li>
<li>Déterminer toutes les fonctions $h$ <span data-k="cont">continues</span> sur $\mathbb R$ telles que $h(x) = h(\operatorname{th}x)$ pour tout réel $x$.</li>
</ol>`,
  decode: {
    donnees: [R`$\operatorname{th}x = \frac{\operatorname{sh}x}{\operatorname{ch}x}$, fonction impaire, strictement croissante, à valeurs dans $]-1,1[$.`],
    but: R`Le comportement de la suite, puis une équation fonctionnelle.`,
    cles: {
      cont: R`$h$ continue en $0$ :$$x_n\to0\ \Longrightarrow\ h(x_n)\to h(0).$$C'est ce qui permet de « passer à la limite dans $h$ ».`,
      stab: R`Un intervalle $I$ est stable par $f$ si $f(I)\subset I$. Ici $\operatorname{th}(\mathbb R_+)\subset\mathbb R_+$ : si $u_n\geqslant0$, alors $u_{n+1}\geqslant0$.`
    }
  },
  steps: [
    { q: 1, t: "Comparer th x et x", h: R`<p>Le sens de variation de $u_{n+1} = f(u_n)$ se lit sur le signe de $f(x)-x$. On étudie donc $g(x) = \operatorname{th}x-x$, en dérivant.</p>`, b: R`<p>Soit $g(x) = \operatorname{th}x-x$. Alors $g'(x) = (1-\operatorname{th}^2x)-1 = -\operatorname{th}^2x\leqslant0$, nul seulement en $0$. Donc $g$ est strictement décroissante, et $g(0) = 0$ :</p><div class="sbox">$$\operatorname{th}x< x\ \text{si}\ x>0,\qquad\operatorname{th}x>x\ \text{si}\ x<0.$$</div>`, rappels: ["o-a-pente"] },
    { q: 1, t: "Le signe de u_n est constant", h: R`<p>Pour utiliser le signe de $g(u_n)$, il faut savoir où est $u_n$ : $\operatorname{th}$ conserve le signe, donc tous les $u_n$ ont le signe de $x_0$.</p>`, b: R`<p>$\operatorname{th}$ est impaire et $\operatorname{th}x$ a le signe de $x$ : $\mathbb R_+$ et $\mathbb R_-$ sont <span data-k="stab">stables</span>. <b>Récurrence</b> : $u_0 = x_0$ a le signe de $x_0$ ; si $u_n$ a le signe de $x_0$, alors $u_{n+1} = \operatorname{th}(u_n)$ a le signe de $u_n$ (car $\operatorname{th}x$ a le signe de $x$), donc celui de $x_0$. Ainsi $u_n$ a le signe de $x_0$ pour tout $n$. Alors $u_{n+1}-u_n = g(u_n)$ :</p><ul><li>$x_0>0$ : $u_n>0$, donc $g(u_n)<0$ : $(u_n)$ est <b>strictement décroissante</b>.</li><li>$x_0<0$ : $(u_n)$ est <b>strictement croissante</b>.</li><li>$x_0 = 0$ : $(u_n)$ est constante, égale à $0$.</li></ul>` + figEscalier, rappels: ["o-a-pente"] },
    { q: 2, t: "Converger, puis identifier la limite", h: R`<p>Monotone et bornée : la limite monotone donne la convergence. Puis $\operatorname{th}$ est continue : la limite est un point fixe, et on a vu que le seul point fixe est $0$.</p>`, b: R`<p>Si $x_0>0$ : $(u_n)$ décroît et est minorée par $0$, donc converge vers $\ell\geqslant0$. Si $x_0<0$ : elle croît et est majorée par $0$. Dans tous les cas $u_n\to\ell$.</p><p>$\operatorname{th}$ est continue, donc en passant à la limite dans $u_{n+1} = \operatorname{th}u_n$ : $\ell = \operatorname{th}\ell$, soit $g(\ell) = 0$. Comme $g$ est strictement décroissante et $g(0) = 0$ :</p><div class="sbox">$$\lim_{n\to\infty}u_n = 0\quad\text{pour tout }x_0.$$</div>`, rappels: ["o-a-limite-monotone", "o-a-limite-pf"] },
    { q: 3, t: "Itérer l'équation", h: R`<p>L'équation relie $h(x)$ à $h(\operatorname{th}x)$ ; en l'appliquant plusieurs fois, on relie $h(x)$ à $h(u_n)$ où $(u_n)$ est la suite partie de $x$. Et on sait que $u_n\to0$.</p>`, b: R`<p>Soit $h$ une solution et $x\in\mathbb R$. On note $(u_n)$ la suite avec $u_0 = x$ et $u_{n+1} = \operatorname{th}u_n$. Montrons <b>par récurrence</b> : $h(u_n) = h(x)$ pour tout $n$.</p><ul><li><b>Initialisation</b> : $h(u_0) = h(x)$.</li><li><b>Hérédité</b> : si $h(u_n) = h(x)$, l'équation $h(y) = h(\operatorname{th}y)$, appliquée à $y = u_n$, donne $h(u_{n+1}) = h(\operatorname{th}u_n) = h(u_n) = h(x)$.</li></ul>$$h(x) = h(u_0) = h(u_1) = \dots = h(u_n)\quad\text{pour tout }n.$$<p>Or $u_n\to0$ et $h$ est continue en $0$ : $h(u_n)\to h(0)$. La suite constante $h(x)$ a donc pour limite $h(0)$ :</p><div class="sbox">$$\forall x\in\mathbb R,\quad h(x) = h(0).$$</div><p>Réciproquement, toute fonction constante convient. Les solutions sont exactement les <b>fonctions constantes</b>.</p>` }
  ],
  ctx: {
    "o-a-pente": R`<p>$g(x) = \operatorname{th}x-x$ est négative sur $\mathbb R_+^*$ : une suite positive vérifiant $u_{n+1} = \operatorname{th}u_n$ décroît.</p>`,
    "o-a-limite-monotone": R`<p>Pour $x_0>0$ : décroissante et minorée par $0$. Pour $x_0<0$ : croissante et majorée par $0$.</p>`,
    "o-a-limite-pf": R`<p>$f = \operatorname{th}$ est continue partout : $\ell = \operatorname{th}\ell$, et la seule solution est $\ell = 0$.</p>`
  },
  piege: R`Oublier de montrer que $u_n$ garde un signe constant avant d'utiliser le signe de $\operatorname{th}x-x$. Et, en question 3, oublier la réciproque (vérifier que les constantes conviennent).`,
  methode: R`Suite $u_{n+1} = f(u_n)$ : signe de $f(x)-x$, intervalle stable, limite monotone, puis point fixe par continuité.`
},
{
  id: "o-an-46", subj: "oraux", year: "mp", chap: 6, concours: "ccinp", level: 3, time: "25 min",
  title: "Une série trigonométrique semi-convergente",
  enonce: R`<p>On étudie la série $\displaystyle\sum_{n\geqslant1}c_n$ avec $c_n = \cos\Big(\pi\sqrt{n^2+n+2}\Big)$.</p>
<ol>
<li>Montrer qu'il existe un réel $\alpha$ tel que $\pi\sqrt{n^2+n+2} = n\pi+\dfrac\pi2+\dfrac{\alpha\pi}n+O\Big(\dfrac1{n^2}\Big)$ quand $n\to+\infty$, et le déterminer.</li>
<li>En déduire que $\sum c_n$ converge.</li>
<li>La série $\sum c_n$ converge-t-elle <span data-k="abs">absolument</span> ?</li>
</ol>`,
  decode: {
    donnees: [R`$c_n = \cos\big(\pi\sqrt{n^2+n+2}\big)$.`],
    but: R`Un développement asymptotique, puis la nature de la série et de la série des valeurs absolues.`,
    cles: {
      abs: R`$\sum c_n$ converge absolument si $$\sum|c_n|<+\infty.$$`,
      O: R`$O\big(\frac1{n^2}\big)$ désigne une suite $r_n$ telle que $|r_n|\leqslant\frac C{n^2}$ pour une constante $C$. Une série $\sum r_n$ de ce type converge absolument.`
    }
  },
  steps: [
    { q: 1, t: "Factoriser par n", h: R`<p>Sous la racine, le terme dominant est $n^2$ : on le sort, pour se ramener à $\sqrt{1+\varepsilon}$ avec $\varepsilon\to0$, puis on utilise $(1+x)^{1/2} = 1+\frac x2-\frac{x^2}8+O(x^3)$.</p>`, b: R`$$\sqrt{n^2+n+2} = n\sqrt{1+x_n},\qquad x_n = \frac1n+\frac2{n^2}\to0.$$<p>On a $x_n^2 = \frac1{n^2}+O\big(\frac1{n^3}\big)$, donc</p>$$\sqrt{1+x_n} = 1+\frac{x_n}2-\frac{x_n^2}8+O(x_n^3) = 1+\frac1{2n}+\frac1{n^2}-\frac1{8n^2}+O\Big(\frac1{n^3}\Big).$$`, rappels: ["o-a-dl-usuels"] },
    { q: 1, t: "Identifier α", h: R`<p>On multiplie par $n$ : chaque terme perd une puissance de $n$.</p>`, b: R`<p>L'étape précédente donne $\sqrt{1+x_n} = 1+\frac{x_n}2-\frac{x_n^2}8+O(x_n^3)$, avec $x_n = \frac1n+\frac2{n^2}$. On remplace, en ne gardant que les termes jusqu'à $\frac1{n^2}$ :</p><ul><li>$\frac{x_n}2 = \frac1{2n}+\frac1{n^2}$ ;</li><li>$\frac{x_n^2}8 = \frac18\Big(\frac1{n^2}+O\big(\frac1{n^3}\big)\Big) = \frac1{8n^2}+O\big(\frac1{n^3}\big)$.</li></ul><p>Donc $\sqrt{1+x_n} = 1+\frac1{2n}+\frac1{n^2}-\frac1{8n^2}+O\big(\frac1{n^3}\big) = 1+\frac1{2n}+\frac7{8n^2}+O\big(\frac1{n^3}\big)$. On multiplie par $n$ :</p>$$\sqrt{n^2+n+2} = n+\frac12+\frac7{8n}+O\Big(\frac1{n^2}\Big).$$<p>En multipliant par $\pi$ :</p><div class="sbox">$$\pi\sqrt{n^2+n+2} = n\pi+\frac\pi2+\frac{7\pi}{8n}+O\Big(\frac1{n^2}\Big),\qquad\alpha = \frac78.$$</div>` },
    { q: 2, t: "Simplifier le cosinus", h: R`<p>$\cos(n\pi+\theta) = (-1)^n\cos\theta$ et $\cos\big(\frac\pi2+y\big) = -\sin y$ : la partie « grande » de l'angle disparaît et il ne reste qu'un sinus d'un petit angle.</p>`, b: R`<p>Posons $y_n = \frac{7\pi}{8n}+O\big(\frac1{n^2}\big)\to0$. Alors</p>$$c_n = \cos\Big(n\pi+\frac\pi2+y_n\Big) = (-1)^n\cos\Big(\frac\pi2+y_n\Big) = (-1)^{n+1}\sin y_n.$$<p>Comme $\sin y = y+O(y^3)$ :</p><div class="sbox">$$c_n = (-1)^{n+1}\frac{7\pi}{8n}+O\Big(\frac1{n^2}\Big).$$</div>` },
    { q: 2, t: "Séparer en deux séries", h: R`<p>On ne peut pas appliquer le critère des séries alternées à $c_n$ directement (on ne sait pas si $|c_n|$ décroît). On découpe : une partie alternée simple + un reste en $O(\frac1{n^2})$.</p>`, b: R`<ul><li>$\sum(-1)^{n+1}\frac{7\pi}{8n}$ converge par le critère des séries alternées : $\frac{7\pi}{8n}$ est positive, décroissante, de limite nulle.</li><li>Le reste $r_n = O\big(\frac1{n^2}\big)$ vérifie $|r_n|\leqslant\frac C{n^2}$, donc $\sum r_n$ converge absolument.</li></ul><p>La somme de deux séries convergentes converge : $\sum c_n$ <b>converge</b>.</p>`, rappels: ["o-a-alternee", "o-a-cv-abs"] },
    { q: 3, t: "Les valeurs absolues", h: R`<p>Pour $|c_n|$, le signe disparaît : il reste $\frac{7\pi}{8n}$, comme une série harmonique.</p>`, b: R`<p>$|c_n| = |\sin y_n|\sim|y_n|\sim\frac{7\pi}{8n}$, qui est positif. Par la règle des équivalents, $\sum|c_n|$ a la nature de $\sum\frac1n$ : elle <b>diverge</b>.</p><div class="sbox">$$\sum c_n\ \text{converge, mais pas absolument (série semi-convergente).}$$</div>`, rappels: ["o-a-equiv-series"] }
  ],
  ctx: {
    "o-a-dl-usuels": R`<p>Avec $\alpha = \frac12$ : $(1+x)^{1/2} = 1+\frac x2-\frac{x^2}8+O(x^3)$, appliqué à $x = \frac1n+\frac2{n^2}$.</p>`,
    "o-a-alternee": R`<p>$a_n = \frac{7\pi}{8n}$ : positive, décroissante, de limite nulle. Donc $\sum(-1)^{n+1}a_n$ converge.</p>`,
    "o-a-cv-abs": R`<p>Le reste $r_n$ vérifie $|r_n|\leqslant\frac C{n^2}$ : $\sum|r_n|$ converge (Riemann), donc $\sum r_n$ converge.</p>`,
    "o-a-equiv-series": R`<p>$|c_n|\sim\frac{7\pi}{8n}\geqslant0$ et $\sum\frac1n$ diverge.</p>`
  },
  piege: R`Écrire $c_n\sim(-1)^{n+1}\frac{7\pi}{8n}$ et conclure par équivalents : interdit, le terme change de signe. Il faut découper « terme alterné $+$ reste absolument convergent ».`,
  methode: R`Terme de la forme $\cos(\pi f(n))$ : développer $f(n)$ jusqu'au terme en $\frac1n$, réduire modulo $\pi$, puis découper en série alternée $+$ $O(\frac1{n^2})$.`
},
{
  id: "o-an-55", subj: "oraux", year: "mp", chap: 6, concours: "ccinp", level: 3, time: "25 min",
  title: "Une récurrence linéaire à paramètre complexe",
  enonce: R`<p>Soit $a\in\mathbb C$. On note $E_a$ l'ensemble des suites complexes $(u_n)$ telles que</p>$$\forall n\in\mathbb N,\quad u_{n+2} = 2a\,u_{n+1}-4(a-1)\,u_n.$$
<ol>
<li>Montrer que $E_a$ est un sous-espace vectoriel de $\mathbb C^{\mathbb N}$ et déterminer sa dimension.</li>
<li>Pour la suite de $E_a$ telle que $u_0 = u_1 = 1$, exprimer $u_n$ en fonction de $n$. On <span data-k="discuter">discutera selon $a$</span>.</li>
</ol>`,
  decode: {
    donnees: [R`Une relation de récurrence linéaire d'ordre $2$ à coefficients constants (dépendant de $a$).`],
    but: R`La structure de l'ensemble des solutions, puis une solution explicite.`,
    cles: {
      discuter: R`La forme des solutions dépend de l'équation caractéristique : deux racines distinctes, ou une racine double. Il faut trouver les valeurs de $a$ qui donnent une racine double.`,
      phi: R`$\varphi : E_a\to\mathbb C^2$, $u\mapsto(u_0,u_1)$. Une suite de $E_a$ est entièrement déterminée par ses deux premiers termes.`
    }
  },
  steps: [
    { q: 1, t: "Sous-espace vectoriel", h: R`<p>La relation est linéaire en $u$ : une combinaison linéaire de solutions est encore solution.</p>`, b: R`<p>La suite nulle est dans $E_a$. Si $u,v\in E_a$ et $\lambda\in\mathbb C$, posons $w = \lambda u+v$ :</p>$$w_{n+2} = \lambda u_{n+2}+v_{n+2} = 2a(\lambda u_{n+1}+v_{n+1})-4(a-1)(\lambda u_n+v_n) = 2a\,w_{n+1}-4(a-1)\,w_n.$$<p>Donc $w\in E_a$ : $E_a$ est un sous-espace vectoriel de $\mathbb C^{\mathbb N}$.</p>`, rappels: ["o-a-sev"] },
    { q: 1, t: "Dimension", h: R`<p>Une suite récurrente d'ordre $2$ est déterminée par $(u_0,u_1)$ : l'application « deux premiers termes » est un isomorphisme vers $\mathbb C^2$.</p>`, b: R`<p>Soit <span data-k="phi">$\varphi(u) = (u_0,u_1)$</span>. Elle est linéaire.</p><ul><li><b>Injective :</b> si $u_0 = u_1 = 0$, la relation donne $u_2 = 2a\cdot0-4(a-1)\cdot0 = 0$. <b>Récurrence double</b> : si $u_n = u_{n+1} = 0$, alors $u_{n+2} = 2a\,u_{n+1}-4(a-1)\,u_n = 0$, donc $u_{n+1} = u_{n+2} = 0$. Partant de $u_0 = u_1 = 0$, on obtient $u_n = 0$ pour tout $n$.</li><li><b>Surjective :</b> pour $(\alpha,\beta)\in\mathbb C^2$, on définit $u_0 = \alpha$, $u_1 = \beta$ et les termes suivants par la relation : $u\in E_a$ et $\varphi(u) = (\alpha,\beta)$.</li></ul><div class="sbox">$$\dim E_a = \dim\mathbb C^2 = 2.$$</div>`, rappels: ["o-a-iso-dim"] },
    { q: 2, t: "L'équation caractéristique", h: R`<p>On cherche les solutions géométriques $r^n$ : $r$ doit vérifier $r^2 = 2ar-4(a-1)$. On calcule le discriminant et on espère un carré parfait.</p>`, b: R`<p><b>Méthode (suites récurrentes linéaires d'ordre 2)</b> : pour $u_{n+2} = pu_{n+1}+qu_n$, on cherche des solutions $u_n = r^n$. En remplaçant, $r^{n+2} = pr^{n+1}+qr^n$, soit après division par $r^n$ l'<b>équation caractéristique</b> $r^2 = pr+q$.</p><p>Ici $p = 2a$ et $q = -4(a-1)$ :</p>$$r^2-2ar+4(a-1) = 0.$$<p>Discriminant réduit ($r^2-2br+c$ a pour discriminant réduit $b^2-c$) :</p>$$\frac\Delta4 = a^2-4(a-1) = a^2-4a+4 = (a-2)^2.$$<p>C'est un carré : une racine carrée est $a-2$, d'où les racines $r = a\pm(a-2)$ :</p><div class="sbox">$$r_1 = 2a-2,\qquad r_2 = 2.$$</div><p>Elles sont confondues si et seulement si $2a-2 = 2$, c'est-à-dire $a = 2$ : d'où la discussion.</p>`, rappels: ["o-a-rec-lin-c"] },
    { q: 2, t: "Cas a ≠ 2", h: R`<p>Deux racines distinctes : $u_n = \lambda r_1^n+\mu r_2^n$, et les deux conditions $u_0 = u_1 = 1$ donnent un système $2\times2$.</p>`, b: R`<p>$u_n = \lambda(2a-2)^n+\mu\,2^n$ avec</p>$$\begin{cases}\lambda+\mu = 1\\\lambda(2a-2)+2\mu = 1\end{cases}\Longrightarrow\lambda(2a-4) = -1.$$<div class="sbox">$$u_n = \frac{(2a-2)^n+(3-2a)\,2^n}{4-2a}\qquad(a\neq2).$$</div><p><b>Contrôle :</b> $u_0 = \frac{1+3-2a}{4-2a} = 1$, $u_1 = \frac{2a-2+6-4a}{4-2a} = 1$.</p><p><b>Cas particulier $a = 1$ :</b> $r_1 = 0$ (avec $0^0 = 1$), on trouve $u_0 = 1$ et $u_n = 2^{n-1}$ pour $n\geqslant1$. Cohérent avec la relation $u_{n+2} = 2u_{n+1}$.</p>`, rappels: ["o-a-rec-lin-c"] },
    { q: 2, t: "Cas a = 2 (racine double)", h: R`<p>Racine double $r = 2$ : les solutions sont $(\lambda+\mu n)2^n$.</p>`, b: R`<p>La relation devient $u_{n+2} = 4u_{n+1}-4u_n$. On écrit $u_n = (\lambda+\mu n)2^n$ :</p>$$u_0 = \lambda = 1,\qquad u_1 = 2(1+\mu) = 1\ \Rightarrow\ \mu = -\frac12.$$<div class="sbox">$$u_n = \Big(1-\frac n2\Big)2^n = (2-n)\,2^{n-1}\qquad(a = 2).$$</div><p><b>Contrôle :</b> $u_2 = 0$ et la relation donne $u_2 = 4\cdot1-4\cdot1 = 0$.</p>`, rappels: ["o-a-rec-lin-c"] }
  ],
  ctx: {
    "o-a-sev": R`<p>$0\in E_a$, et $\lambda u+v\in E_a$ car la relation est linéaire.</p>`,
    "o-a-iso-dim": R`<p>$\varphi : E_a\to\mathbb C^2$, $u\mapsto(u_0,u_1)$ est linéaire bijective, donc $\dim E_a = 2$.</p>`,
    "o-a-rec-lin-c": R`<p>$p = 2a$, $q = -4(a-1)$ ; racines $2a-2$ et $2$, confondues si $a = 2$. Remarque : si $a = 1$, $q = 0$ et une racine est nulle.</p>`
  },
  piege: R`Oublier le cas de la racine double ($a = 2$), où la formule « $\lambda r_1^n+\mu r_2^n$ » ne donne plus toutes les solutions (et la formule finale aurait un dénominateur nul).`,
  methode: R`Équation caractéristique, discriminant (souvent un carré), discussion racines distinctes / racine double, puis conditions initiales.`
}
]);
})();

/* ===== Chapitre 8 : Suites et séries de fonctions ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1 } = window.__LA;

LEMME.rappels({
  "o-a-cvu-def": { t: "Convergence uniforme : définition", b: R`<div class="sbox">$$\begin{aligned}f_n\xrightarrow{\text{CVU}}f\text{ sur }X&\iff \forall\varepsilon>0,\ \exists N,\ \forall n\geqslant N,\ \forall x\in X,\ |f_n(x)-f(x)|\leqslant\varepsilon\\&\iff \|f_n-f\|_{\infty,X}\to0.\end{aligned}$$</div>` },
  "o-a-cvu-majorer": { t: "Prouver une convergence uniforme", b: R`<div class="sbox">$$\forall x\in X,\ |f_n(x)-f(x)|\leqslant\alpha_n,\quad\alpha_n\to0\ \Longrightarrow\ \|f_n-f\|_\infty\leqslant\alpha_n\to0.$$</div><p>$\alpha_n$ indépendant de $x$.</p>` },
  "o-a-cvu-nier": { t: "Prouver une non-convergence uniforme", b: R`<div class="sbox">$$\exists x_n\in X,\ f_n(x_n)-f(x_n)\not\to0\ \Longrightarrow\ \|f_n-f\|_\infty\not\to0.$$</div><p>Choisir $x_n$ à la « bosse » de $f_n$ (souvent $x_n = \frac1n$).</p>` },
  "o-a-cvu-cont": { t: "Limite uniforme de fonctions continues", b: R`<div class="sbox">$$f_n\ \text{continues en}\ x_0,\ f_n\xrightarrow{\text{CVU}}f\ \Longrightarrow\ f\ \text{continue en}\ x_0.$$</div><p><b>Contraposée</b> :</p>$$f_n\ \text{continues},\ f\ \text{discontinue}\ \Longrightarrow\ f_n\not\xrightarrow{\text{CVU}}f.$$` },
  "o-a-cvu-int": { t: "Intégrer une limite uniforme sur un segment", b: R`<div class="sbox">$$\Big|\int_a^bf_n-\int_a^bf\Big|\leqslant(b-a)\|f_n-f\|_\infty\xrightarrow[n\to\infty]{}0.$$</div>$$\sum f_n\ \text{CVU sur}\ [a,b]\ \Longrightarrow\ \int_a^b\sum f_n = \sum\int_a^bf_n.$$` },
  "o-a-normale-unif": { t: "Normale implique uniforme", b: R`<div class="sbox">$$\forall x\in X,\ |f_n(x)|\leqslant\alpha_n,\ \sum\alpha_n\text{ CV}\ \Longrightarrow\ |R_n(x)|\leqslant\sum_{k>n}\alpha_k\to0\ \text{(CVU)}.$$</div>` },
  "o-a-reste": { t: "Série uniformément convergente et reste", b: R`<div class="sbox">$$\sum f_n\ \text{CVU sur}\ X\iff\sum f_n\ \text{CVS}\ \wedge\ \|R_n\|_\infty\to0,\qquad R_n = \sum_{k=n+1}^{+\infty}f_k.$$</div>$$f_n = R_{n-1}-R_n\ \Longrightarrow\ \|f_n\|_\infty\to0.$$` },
  "o-a-serie-cont": { t: "Continuité de la somme d'une série", b: R`<div class="sbox">$$f_n\in\mathcal C(I),\ \sum f_n\text{ CVU sur tout segment de }I\ \Longrightarrow\ \sum f_n\in\mathcal C(I).$$</div>` },
  "o-a-serie-c1": { t: "Dérivation terme à terme", b: R`<div class="sbox">$$\left\{\begin{aligned}&f_n\in\mathcal C^1(I),\ \sum f_n\text{ CVS sur }I\\&\sum f_n'\text{ CVU sur tout segment}\end{aligned}\right.\ \Longrightarrow\ S = \sum f_n\in\mathcal C^1(I),\ S' = \sum f_n'.$$</div>` },
  "o-a-double-limite": { t: "Théorème de la double limite", b: R`<div class="sbox">$$\left\{\begin{aligned}&\sum f_n\text{ CVU sur }[a,+\infty[\\&f_n(x)\xrightarrow[x\to+\infty]{}\ell_n\end{aligned}\right.\ \Longrightarrow\ \sum\ell_n\text{ CV},\quad\lim_{x\to+\infty}\sum_nf_n(x) = \sum_n\ell_n.$$</div>` },
  "o-a-ineg-ln": { t: "Inégalités sur le logarithme", b: R`<div class="sbox">$$\forall t\geqslant0,\quad t-\frac{t^2}2\leqslant\ln(1+t)\leqslant t.$$</div>$$\frac d{dt}\big(\ln(1+t)-t\big) = \frac{-t}{1+t}\leqslant0,\qquad\frac d{dt}\Big(\ln(1+t)-t+\frac{t^2}2\Big) = \frac{t^2}{1+t}\geqslant0.$$` },
  "o-a-adjacentes": { t: "Suites adjacentes", b: R`<div class="sbox">$$(a_n)\nearrow,\ (b_n)\searrow,\ b_n-a_n\to0\ \Longrightarrow\ a_n\to\ell,\ b_n\to\ell,\quad a_n\leqslant\ell\leqslant b_n.$$</div>` },
  "o-a-weierstrass": { t: "Théorème de Weierstrass", b: R`<div class="sbox">$$f\in\mathcal C([a,b],\mathbb R)\ \Longrightarrow\ \exists(P_n)\ \text{polynômes},\ \|P_n-f\|_{\infty,[a,b]}\to0.$$</div>` },
  "o-a-cv-se-dalembert": { t: "D'Alembert pour une série de réels positifs", b: R`<div class="sbox">$$\frac{u_{n+1}}{u_n}\to\ell<1\ \Longrightarrow\ \sum u_n\ \text{converge}.$$</div>` },
  "o-a-croissances": { t: "Croissances comparées", b: R`<div class="sbox">$$\forall a>0,\ \forall b\in\mathbb R,\quad\frac{t^b}{e^{at}}\xrightarrow[t\to+\infty]{}0,\qquad\frac{(\ln t)^b}{t^a}\xrightarrow[t\to+\infty]{}0,\qquad t^a|\ln t|^b\xrightarrow[t\to0^+]{}0.$$</div>` }
});

/* Figures : bosses qui ne s'écrasent pas */
const bump = (fs, o, cap, label) => GRAPH({ w: 430, h: 230, ...o, curves: fs }, cap, label);
const figAlt = (() => {
  const a = k => 1 / Math.sqrt(k + 1); let s = 0; const pts = [];
  for (let n = 0; n <= 14; n++) { s += (n % 2 ? -1 : 1) * a(n); pts.push(s); }
  const lim = pts[14] * 0.5 + pts[13] * 0.5;
  return GRAPH({ w: 430, h: 220, x: [-0.5, 14.5], y: [0, 1.1], xt: [0, 2, 4, 6, 8, 10, 12, 14], yt: [0.5, 1], xl: "n", yl: "Sₙ", hl: [{ y: 0.605, t: "S" }],
    extra: (X, Y) => pts.map((v, n) => `<circle cx="${f1(X(n))}" cy="${f1(Y(v))}" r="4.5" class="${n % 2 ? "mass" : "body"}" style="${n % 2 ? "" : "fill:var(--blue);stroke:var(--blue)"}"/>`).join("") },
    R`Les sommes partielles de $\sum\frac{(-1)^k}{\sqrt{k+1}}$ : les indices pairs (bleu) descendent, les indices impairs (jaune) montent, et les deux suites se resserrent sur la somme $S$.`, "Sommes partielles d'une série alternée");
})();

LEMME.exercises([
{
  id: "o-an-8", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "25 min",
  title: "Critère des séries alternées et une série d'exponentielles",
  enonce: R`<p>1. Soit $(a_n)_{n\in\mathbb N}$ une suite réelle positive, décroissante, de limite nulle, et $S_n = \sum_{k=0}^n(-1)^ka_k$.</p>
<ol style="list-style:lower-alpha">
<li>Montrer que $\sum(-1)^ka_k$ converge, en étudiant $(S_{2n})$ et $(S_{2n+1})$.</li>
<li>Majorer la valeur absolue du reste $R_n = \sum_{k=n+1}^{+\infty}(-1)^ka_k$.</li>
</ol>
<p>2. Pour $n\geqslant1$ et $x\in\mathbb R$, on pose $f_n(x) = \dfrac{(-1)^n\,e^{-nx}}{\sqrt n}$.</p>
<ol style="list-style:lower-alpha">
<li>Déterminer l'ensemble des réels $x$ où $\sum f_n(x)$ converge.</li>
<li>La série $\sum f_n$ converge-t-elle uniformément sur $[0,+\infty[$ ? Normalement ?</li>
</ol>`,
  decode: {
    donnees: [R`$a_n\geqslant0$, $(a_n)$ décroissante, $a_n\to0$.`, R`$f_n(x) = (-1)^n\frac{e^{-nx}}{\sqrt n}$.`],
    but: R`Démontrer le critère spécial des séries alternées avec sa majoration du reste, puis l'utiliser pour une convergence uniforme.`,
    cles: {
      adj: R`Deux suites sont adjacentes si l'une croît, l'autre décroît, et leur différence tend vers $0$ :$$(S_{2n+1})\nearrow,\quad(S_{2n})\searrow,\quad S_{2n}-S_{2n+1} = a_{2n+1}\to0.$$`,
      grossier: R`Divergence grossière : si $u_n\not\to0$, alors $\sum u_n$ diverge. Ici pour $x<0$, $|f_n(x)| = \frac{e^{n|x|}}{\sqrt n}\to+\infty$.`
    }
  },
  steps: [
    { q: 1, t: "Les sommes paires et impaires", h: R`<p>Dans une série alternée, chaque pas de deux termes fait « $-a_{2n+1}+a_{2n+2}$ », qui est $\leqslant0$ car $(a_n)$ décroît. Les sommes paires descendent, les impaires montent.</p>`, b: R`$$S_{2n+2}-S_{2n} = -a_{2n+1}+a_{2n+2}\leqslant0,\qquad S_{2n+3}-S_{2n+1} = a_{2n+2}-a_{2n+3}\geqslant0.$$<p>Et $S_{2n}-S_{2n+1} = a_{2n+1}\to0$. Les suites $(S_{2n})$ et $(S_{2n+1})$ sont <span data-k="adj">adjacentes</span> : elles convergent vers une même limite $S$.</p>` + figAlt + R`<p>Les termes pairs et impairs de $(S_n)$ tendent vers $S$, donc $S_n\to S$ : la série converge.</p>`, rappels: ["o-a-adjacentes"] },
    { q: 1, t: "Majorer le reste", h: R`<p>$S$ est coincée entre deux sommes partielles consécutives. L'écart entre elles est exactement un terme $a_{n+1}$.</p>`, b: R`<p>Par adjacence, pour tout $n$ : $S_{2n+1}\leqslant S\leqslant S_{2n}$ et $S_{2n+1}\leqslant S\leqslant S_{2n+2}$. Donc $S$ est toujours entre $S_n$ et $S_{n+1}$, et</p><div class="sbox">$$|R_n| = |S-S_n|\leqslant|S_{n+1}-S_n| = a_{n+1}.$$</div><p>De plus $R_n$ a le signe de son premier terme $(-1)^{n+1}a_{n+1}$.</p>` },
    { q: 2, t: "Convergence simple selon x", h: R`<p>Trois zones : $x<0$ (l'exponentielle explose), $x = 0$ (série alternée), $x>0$ (l'exponentielle écrase tout).</p>`, b: R`<ul><li>$x<0$ : $|f_n(x)| = \frac{e^{n|x|}}{\sqrt n}\to+\infty$ : <span data-k="grossier">divergence grossière</span>.</li><li>$x = 0$ : $f_n(0) = \frac{(-1)^n}{\sqrt n}$ ; $\frac1{\sqrt n}$ décroît vers $0$, la série converge par la question 1.</li><li>$x>0$ : $|f_n(x)|\leqslant e^{-nx} = (e^{-x})^n$, terme d'une série géométrique de raison $e^{-x}<1$ : convergence absolue.</li></ul><div class="sbox">$$\sum f_n(x)\ \text{converge}\iff x\geqslant0.$$</div>`, rappels: ["o-a-alternee"] },
    { q: 2, t: "Uniforme sur [0, +∞[", h: R`<p>Pour chaque $x\geqslant0$, la série est alternée : on majore le reste par le premier terme négligé, puis on cherche une majoration <b>indépendante de $x$</b>.</p>`, b: R`<p>Pour $x\geqslant0$ fixé, $a_n(x) = \frac{e^{-nx}}{\sqrt n}$ est positive et décroissante en $n$ (produit de deux suites positives décroissantes), de limite $0$. La question 1 donne</p>$$|R_n(x)|\leqslant a_{n+1}(x) = \frac{e^{-(n+1)x}}{\sqrt{n+1}}\leqslant\frac1{\sqrt{n+1}}.$$<p>La borne ne dépend pas de $x$ et tend vers $0$ : $\|R_n\|_{\infty,[0,+\infty[}\to0$.</p><div class="sbox">$$\sum f_n\ \text{converge uniformément sur}\ [0,+\infty[.$$</div>`, rappels: ["o-a-reste", "o-a-alternee"] },
    { q: 2, t: "Pas de convergence normale", h: R`<p>La convergence normale regarde $\sup|f_n|$, sans tenir compte des signes. Le sup est atteint en $x = 0$.</p>`, b: R`<p>$\|f_n\|_{\infty,[0,+\infty[} = \sup_{x\geqslant0}\frac{e^{-nx}}{\sqrt n} = \frac1{\sqrt n}$, et $\sum\frac1{\sqrt n}$ diverge (Riemann, $\frac12\leqslant1$). La série ne converge <b>pas normalement</b> sur $[0,+\infty[$ : uniforme n'implique pas normale.</p>` }
  ],
  ctx: {
    "o-a-adjacentes": R`<p>$a_n\to S_{2n+1}$ (croissante), $b_n\to S_{2n}$ (décroissante), et $b_n-a_n = a_{2n+1}\to0$.</p>`,
    "o-a-alternee": R`<p>En $x$ fixé $\geqslant0$, $\sum(-1)^na_n(x)$ avec $a_n(x) = \frac{e^{-nx}}{\sqrt n}$ décroissante vers $0$ : convergence et $|R_n(x)|\leqslant a_{n+1}(x)$.</p>`,
    "o-a-reste": R`<p>$\|R_n\|_\infty\leqslant\frac1{\sqrt{n+1}}\to0$ : c'est exactement la convergence uniforme de la série.</p>`
  },
  piege: R`Conclure « pas normale donc pas uniforme » : faux. Et oublier que la majoration $|R_n|\leqslant a_{n+1}$ demande une suite <b>décroissante</b>.`,
  methode: R`Série alternée de fonctions : reste majoré par le premier terme négligé, puis majoration uniforme en $x$.`
},
{
  id: "o-an-9", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "20 min",
  title: "Une bosse qui se contracte vers 0",
  enonce: R`<p>1. Soit $X$ un ensemble et $(g_n)$, $g$ des fonctions de $X$ dans $\mathbb C$. Rappeler la définition de « $(g_n)$ converge uniformément vers $g$ sur $X$ ».</p>
<p>2. Pour $n\in\mathbb N$ et $x\geqslant0$, on pose $g_n(x) = \dfrac{2n+1}{n+1}\,e^{-nx^2}\cos\big(\sqrt n\,x\big)$.</p>
<ol style="list-style:lower-alpha">
<li>Étudier la convergence simple de $(g_n)$ sur $[0,+\infty[$.</li>
<li>Y a-t-il convergence uniforme sur $[0,+\infty[$ ?</li>
<li>Soit $a>0$. Y a-t-il convergence uniforme sur $[a,+\infty[$ ?</li>
<li>Y a-t-il convergence uniforme sur $]0,+\infty[$ ?</li>
</ol>`,
  decode: {
    donnees: [R`$g_n(x) = \frac{2n+1}{n+1}e^{-nx^2}\cos(\sqrt nx)$, continue sur $[0,+\infty[$.`],
    but: R`La limite simple, puis la convergence uniforme sur trois intervalles différents.`,
    cles: {
      fixe: R`On fixe $x>0$ et on regarde la suite de nombres $(g_n(x))_n$ : $$|g_n(x)|\leqslant\frac{2n+1}{n+1}e^{-nx^2}\leqslant2e^{-nx^2}\xrightarrow[n\to\infty]{}0.$$`,
      xn: R`Le choix $x_n = \frac1{\sqrt n}$ « suit la bosse » : il rend $nx_n^2 = 1$ et $\sqrt nx_n = 1$ constants.`
    }
  },
  steps: [
    { q: 1, t: "La définition", h: R`<p>Une phrase avec quantificateurs : le rang $N$ ne doit dépendre que de $\varepsilon$, pas de $x$.</p>`, b: R`<p>$(g_n)$ converge uniformément vers $g$ sur $X$ si l'écart entre $g_n$ et $g$ devient petit <b>en même temps pour tous les $x$</b> :</p><div class="sbox">$$\forall\varepsilon>0,\ \exists N\in\mathbb N,\ \forall n\geqslant N,\ \forall x\in X,\ |g_n(x)-g(x)|\leqslant\varepsilon.$$</div><p>Le rang $N$ ne dépend que de $\varepsilon$, pas de $x$ : c'est la différence avec la convergence simple. Formulation équivalente : $\sup_{x\in X}|g_n(x)-g(x)|\xrightarrow[n\to\infty]{}0$.</p>`, rappels: ["o-a-cvu-def"] },
    { q: 2, t: "Limite simple", h: R`<p>On fixe $x$. En $x = 0$, tout vaut $1$ sauf la fraction. Pour $x>0$, $e^{-nx^2}$ tend vers $0$ et le reste est borné.</p>`, b: R`<p>On fixe $x\geqslant0$ et on fait tendre $n\to\infty$.</p><ul><li><b>$x = 0$</b> : $e^0 = 1$ et $\cos0 = 1$, donc $g_n(0) = \frac{2n+1}{n+1}$. On divise en haut et en bas par $n$ : $\frac{2+1/n}{1+1/n}\to2$.</li><li><b>$x>0$</b> : $\frac{2n+1}{n+1}\leqslant2$ (car $2n+1\leqslant2n+2$) et $|\cos|\leqslant1$, donc <span data-k="fixe">$|g_n(x)|\leqslant2e^{-nx^2}$</span>. Comme $x^2>0$ est fixé, $e^{-nx^2} = (e^{-x^2})^n$ avec $0\lt e^{-x^2}<1$ : cela tend vers $0$.</li></ul><div class="sbox">$$g(0) = 2,\qquad g(x) = 0\ \ (x>0).$$</div>` },
    { q: 2, t: "Sur [0, +∞[ : la limite n'est pas continue", h: R`<p>Chaque $g_n$ est continue mais la limite $g$ saute en $0$. Une limite uniforme de fonctions continues serait continue.</p>`, b: R`<p>Les $g_n$ sont continues en $0$ ; si la convergence était uniforme sur $[0,+\infty[$, $g$ serait continue en $0$. Or $g(0) = 2$ et $g(x) = 0$ pour $x>0$. Donc <b>pas de convergence uniforme</b> sur $[0,+\infty[$.</p>` + GRAPH({ w: 430, h: 230, x: [0, 1.6], y: [-0.6, 2.2], xt: [0.5, 1, 1.5], yt: [1, 2], xl: "x", curves: [5, 25, 120].map((n, i) => ({ f: x => (2 * n + 1) / (n + 1) * Math.exp(-n * x * x) * Math.cos(Math.sqrt(n) * x), c: ["g", "b", "r"][i], lab: [[0.75, 0.75, "n = 5"], [0.32, 0.9, "n = 25"], [0.1, 1.5, "n = 120"]][i] })) },
      R`Les fonctions $g_n$ : la bosse en $0$ garde une hauteur proche de $2$ mais devient de plus en plus étroite. La limite simple vaut $2$ en $0$ et $0$ ailleurs.`, "Graphes des fonctions g_n"), rappels: ["o-a-cvu-cont"] },
    { q: 2, t: "Sur [a, +∞[ avec a > 0", h: R`<p>Loin de $0$, la bosse a disparu. On cherche une majoration de $|g_n(x)|$ qui ne dépend pas de $x\in[a,+\infty[$ : on utilise la décroissance de $x\mapsto e^{-nx^2}$.</p>`, b: R`<p>On veut majorer $|g_n(x)-g(x)| = |g_n(x)|$ (car $g = 0$ sur $[a,+\infty[$) <b>par un nombre qui ne dépend pas de $x$</b>.</p><p>Pour $x\geqslant a>0$ : $x^2\geqslant a^2$, donc $-nx^2\leqslant-na^2$, et l'exponentielle est croissante : $e^{-nx^2}\leqslant e^{-na^2}$. Avec la majoration de l'étape 2 :</p><div class="sbox">$$\sup_{x\geqslant a}|g_n(x)-0|\leqslant2e^{-na^2}\xrightarrow[n\to\infty]{}0.$$</div><p>Le majorant ne dépend pas de $x$ et tend vers $0$ : il y a <b>convergence uniforme</b> sur $[a,+\infty[$, pour tout $a>0$. (Loin de $0$, la bosse est déjà écrasée.)</p>`, rappels: ["o-a-cvu-majorer"] },
    { q: 2, t: "Sur ]0, +∞[ : suivre la bosse", h: R`<p>Ici $g$ est continue sur $]0,+\infty[$ (nulle) : l'argument précédent ne marche plus. On évalue $g_n$ en un point qui suit la bosse quand elle se rapproche de $0$.</p>`, b: R`<p>Prenons <span data-k="xn">$x_n = \frac1{\sqrt n}\in\,]0,+\infty[$</span> :</p>$$g_n(x_n)-g(x_n) = \frac{2n+1}{n+1}e^{-1}\cos1\xrightarrow[n\to\infty]{}\frac{2\cos1}e\approx0{,}40\neq0.$$<p>Donc $\|g_n-g\|_{\infty,]0,+\infty[}\geqslant|g_n(x_n)|\not\to0$ : <b>pas de convergence uniforme</b> sur $]0,+\infty[$.</p>`, rappels: ["o-a-cvu-nier"] }
  ],
  ctx: {
    "o-a-cvu-def": R`<p>$X$ est ici un intervalle de $[0,+\infty[$, et $g$ la limite simple trouvée en 2.a.</p>`,
    "o-a-cvu-cont": R`<p>Contraposée : $g_n$ continues en $0$, $g$ discontinue en $0$, donc pas de convergence uniforme sur un intervalle qui contient $0$.</p>`,
    "o-a-cvu-majorer": R`<p>$\alpha_n = 2e^{-na^2}$ ne dépend pas de $x\geqslant a$ et tend vers $0$.</p>`,
    "o-a-cvu-nier": R`<p>$x_n = \frac1{\sqrt n}$ et $g_n(x_n)\to\frac{2\cos1}e\neq0$.</p>`
  },
  piege: R`Sur $]0,+\infty[$, croire que la convergence est uniforme parce que la limite est continue (nulle) : la bosse est toujours là, elle se rapproche juste du bord.`,
  methode: R`Uniforme : majorer $|g_n-g|$ indépendamment de $x$. Non uniforme : limite discontinue, ou une suite $x_n$ qui suit la bosse.`,
  viz: { type: "plot", title: "Fais varier n : la bosse rétrécit mais ne baisse pas", x: [0, 1.6], y: [-0.6, 2.2], xlabel: "x", params: [{ k: "n", label: "n", min: 1, max: 200, step: 1, v: 10 }],
    curves: [{ label: "gₙ", f: (x, p) => (2 * p.n + 1) / (p.n + 1) * Math.exp(-p.n * x * x) * Math.cos(Math.sqrt(p.n) * x) }], vlines: [{ x: p => 1 / Math.sqrt(p.n), label: "1/√n" }] }
},
{
  id: "o-an-10", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 1, time: "15 min",
  title: "Limite d'une intégrale par convergence uniforme",
  enonce: R`<p>Pour $n\in\mathbb N^\ast$ et $x\in[0,1]$, on pose $h_n(x) = (x+2)\,\dfrac{n\,e^x+x}{n+x}$.</p>
<ol>
<li>Montrer que $(h_n)$ converge <span data-k="unif">uniformément</span> sur $[0,1]$ vers une fonction $h$ à préciser.</li>
<li>En déduire $\displaystyle\lim_{n\to\infty}\int_0^1h_n(x)\,dx$.</li>
</ol>`,
  decode: { donnees: [R`$h_n$ continue sur le segment $[0,1]$.`], but: R`La limite uniforme, puis la limite des intégrales.`, cles: {
    unif: R`On veut $\displaystyle\sup_{x\in[0,1]}|h_n(x)-h(x)|\xrightarrow[n\to\infty]{}0.$`,
    reduire: R`On met au même dénominateur :$$\frac{ne^x+x}{n+x}-e^x = \frac{ne^x+x-ne^x-xe^x}{n+x} = \frac{x(1-e^x)}{n+x}.$$` } },
  steps: [
    { q: 1, t: "Deviner la limite", h: R`<p>Quand $n$ est grand, les termes en $x$ (bornés) sont négligeables devant ceux en $n$.</p>`, b: R`<p>À $x\in[0,1]$ fixé, on cherche la limite de $\frac{ne^x+x}{n+x}$ quand $n\to\infty$. On divise en haut et en bas par $n$ :</p>$$\frac{ne^x+x}{n+x} = \frac{e^x+\frac xn}{1+\frac xn}\xrightarrow[n\to\infty]{}\frac{e^x+0}{1+0} = e^x.$$<p>Donc $h_n(x)\to h(x) = (x+2)\,e^x$ : c'est la limite simple. Il reste à voir si la convergence est uniforme, en majorant $|h_n(x)-h(x)|$ indépendamment de $x$.</p>` },
    { q: 1, t: "Majorer l'écart uniformément", h: R`<p>On calcule $h_n-h$ en <b>réduisant au même dénominateur</b>, puis on majore numérateur et dénominateur séparément, pour tout $x\in[0,1]$.</p>`, b: R`<p>On factorise $(x+2)$ et <span data-k="reduire">on réduit au même dénominateur</span> :</p>$$\frac{ne^x+x}{n+x}-e^x = \frac{ne^x+x-(n+x)e^x}{n+x} = \frac{x-xe^x}{n+x} = \frac{x(1-e^x)}{n+x}.$$<p>D'où :</p>$$h_n(x)-h(x) = (x+2)\,\frac{x(1-e^x)}{n+x}.$$<p>Sur $[0,1]$ : $0\leqslant x+2\leqslant3$, $0\leqslant x(e^x-1)\leqslant e-1$, et $n+x\geqslant n$. Donc</p><div class="sbox">$$\sup_{[0,1]}|h_n-h|\leqslant\frac{3(e-1)}n\xrightarrow[n\to\infty]{}0.$$</div>`, rappels: ["o-a-cvu-majorer"] },
    { q: 2, t: "Passer à la limite sous l'intégrale", h: R`<p>Sur un <b>segment</b>, la convergence uniforme permet d'échanger limite et intégrale. Ensuite il reste une intégration par parties.</p>`, b: R`$$\Big|\int_0^1h_n-\int_0^1h\Big|\leqslant\int_0^1|h_n-h|\leqslant\frac{3(e-1)}n\to0.$$<p>Calcul de $\int_0^1(x+2)e^x\,dx$ par parties ($u = x+2$, $v' = e^x$) :</p>$$\int_0^1(x+2)e^x\,dx = \big[(x+2)e^x\big]_0^1-\int_0^1e^x\,dx = 3e-2-(e-1) = 2e-1.$$<div class="sbox">$$\lim_{n\to\infty}\int_0^1h_n = 2e-1.$$</div>`, rappels: ["o-a-cvu-int"] }
  ],
  ctx: { "o-a-cvu-majorer": R`<p>$\alpha_n = \frac{3(e-1)}n$, indépendant de $x\in[0,1]$.</p>`, "o-a-cvu-int": R`<p>Segment $[0,1]$ de longueur $1$ : $|\int h_n-\int h|\leqslant\|h_n-h\|_\infty$.</p>` },
  piege: R`Majorer $|h_n-h|$ par une quantité qui dépend encore de $x$ (comme $\frac{x(e^x-1)}{n}$) et conclure : il faut prendre le sup sur $[0,1]$.`,
  methode: R`Réduire $h_n-h$ au même dénominateur, majorer chaque facteur sur le segment, puis intégrer.`
},
{
  id: "o-an-11", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "20 min",
  title: "Nier la convergence uniforme avec une suite de points",
  enonce: R`<p>1. Soit $X\subset\mathbb R$ et $(f_n)$ une suite de fonctions de $X$ dans $\mathbb R$ qui converge simplement vers $f$. On suppose qu'il existe $(x_n)\in X^{\mathbb N}$ telle que $\big(f_n(x_n)-f(x_n)\big)$ ne tende pas vers $0$. Montrer que $(f_n)$ ne converge pas uniformément vers $f$ sur $X$.</p>
<p>2. Pour $x\in\mathbb R$, on pose $f_n(x) = \dfrac{\sin(2nx)}{1+n^2x^2}$.</p>
<ol style="list-style:lower-alpha"><li>Étudier la convergence simple de $(f_n)$.</li><li>Étudier la convergence uniforme sur $[a,+\infty[$ ($a>0$), puis sur $]0,+\infty[$.</li></ol>`,
  decode: { donnees: [R`$f_n(x) = \frac{\sin(2nx)}{1+n^2x^2}$.`], but: R`Un critère de non-convergence uniforme, puis son utilisation.`, cles: {
    contra: R`Raisonnement par contraposée : on montre$$\text{CVU}\Longrightarrow f_n(x_n)-f(x_n)\to0\ \text{pour toute suite}\ (x_n).$$`,
    choix: R`$x_n = \frac\pi{4n}$ donne $2nx_n = \frac\pi2$ (le sinus vaut $1$) et $nx_n = \frac\pi4$ (le dénominateur reste borné).` } },
  steps: [
    { q: 1, t: "Majorer par la norme infinie", h: R`<p>Une valeur en un point est toujours plus petite que le sup : $|f_n(x_n)-f(x_n)|\leqslant\|f_n-f\|_\infty$.</p>`, b: R`<p>Par <span data-k="contra">contraposée</span> : supposons la convergence uniforme. Alors, à partir d'un rang,</p><div class="sbox">$$|f_n(x_n)-f(x_n)|\leqslant\sup_{x\in X}|f_n(x)-f(x)| = \|f_n-f\|_\infty\xrightarrow[n\to\infty]{}0,$$</div><p>donc $f_n(x_n)-f(x_n)\to0$. Si ce n'est pas le cas, la convergence n'est pas uniforme.</p>`, rappels: ["o-a-cvu-def"] },
    { q: 2, t: "Limite simple", h: R`<p>Numérateur borné par $1$, dénominateur qui tend vers $+\infty$ si $x\neq0$.</p>`, b: R`<p>On fixe $x$ et on fait tendre $n\to\infty$.</p><ul><li><b>$x = 0$</b> : $\sin0 = 0$, donc $f_n(0) = 0$ pour tout $n$.</li><li><b>$x\neq0$</b> : on majore le numérateur par $|\sin(2nx)|\leqslant1$, et on minore le dénominateur : $1+n^2x^2\geqslant n^2x^2$. Donc</li></ul>$$|f_n(x)|\leqslant\frac1{1+n^2x^2}\leqslant\frac1{n^2x^2}\xrightarrow[n\to\infty]{}0\quad(x\ \text{fixé}).$$<p>$(f_n)$ converge simplement vers la fonction nulle sur $\mathbb R$.</p>` },
    { q: 2, t: "Sur [a, +∞[", h: R`<p>Pour $x\geqslant a$, $1+n^2x^2\geqslant1+n^2a^2$ : la majoration ne dépend plus de $x$.</p>`, b: R`<p>On cherche un majorant de $|f_n(x)|$ <b>valable pour tous les $x\geqslant a$ à la fois</b>. Pour $x\geqslant a>0$ : $x^2\geqslant a^2$, donc $1+n^2x^2\geqslant1+n^2a^2$, et en passant à l'inverse (tout est positif) :</p>$$|f_n(x)|\leqslant\frac1{1+n^2x^2}\leqslant\frac1{1+n^2a^2}.$$<div class="sbox">$$\sup_{x\geqslant a}|f_n(x)-0|\leqslant\frac1{1+n^2a^2}\xrightarrow[n\to\infty]{}0.$$</div><p>Le majorant ne dépend plus de $x$ et tend vers $0$ : convergence <b>uniforme</b> sur $[a,+\infty[$.</p>`, rappels: ["o-a-cvu-majorer"] },
    { q: 2, t: "Sur ]0, +∞[", h: R`<p>La bosse se rapproche de $0$ à l'échelle $\frac1n$ : on prend $x_n$ proportionnel à $\frac1n$ et on applique la question 1.</p>`, b: R`<p>Avec <span data-k="choix">$x_n = \frac\pi{4n}$</span> :</p>$$f_n(x_n)-0 = \frac{\sin\frac\pi2}{1+\frac{\pi^2}{16}} = \frac{16}{16+\pi^2}\approx0{,}62\not\to0.$$<p>Par la question 1 : <b>pas de convergence uniforme</b> sur $]0,+\infty[$.</p>` + GRAPH({ w: 430, h: 220, x: [0, 1.5], y: [-0.5, 1], xt: [0.5, 1, 1.5], yt: [0.5, 1], xl: "x", curves: [3, 10, 30].map((n, i) => ({ f: x => Math.sin(2 * n * x) / (1 + n * n * x * x), c: ["g", "b", "r"][i], n: 600 })) }, R`$f_3$, $f_{10}$ et $f_{30}$ : la première bosse garde une hauteur d'environ $0{,}6$ et se rapproche de $0$.`, "Graphes de f_n"), rappels: ["o-a-cvu-nier"] }
  ],
  ctx: { "o-a-cvu-def": R`<p>On utilise la forme « $\|f_n-f\|_\infty\to0$ » et l'inégalité $|f_n(x_n)-f(x_n)|\leqslant\|f_n-f\|_\infty$.</p>`, "o-a-cvu-majorer": R`<p>$\alpha_n = \frac1{1+n^2a^2}$, valable pour tout $x\geqslant a$.</p>`, "o-a-cvu-nier": R`<p>$x_n = \frac\pi{4n}$ : $f_n(x_n) = \frac{16}{16+\pi^2}$, constant non nul.</p>` },
  piege: R`Choisir $x_n$ fixe (indépendant de $n$) : en un point fixe, $f_n(x)\to f(x)$ par convergence simple, donc ça ne prouve rien.`,
  methode: R`Pour nier la convergence uniforme : chercher où est la bosse de $f_n$ (souvent en $\frac cn$) et évaluer là.`
},
{
  id: "o-an-12", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "15 min",
  title: "Continuité d'une limite uniforme",
  enonce: R`<p>1. Soit $(f_n)$ une suite de fonctions de $[a,b]$ dans $\mathbb R$, toutes continues en un point $x_0\in[a,b]$, qui converge <span data-k="unif">uniformément</span> vers $f$ sur $[a,b]$. Montrer que $f$ est continue en $x_0$.</p>
<p>2. Pour $n\geqslant1$ et $x\in[0,2]$, on pose $h_n(x) = \dfrac1{1+x^n}$. La suite $(h_n)$ converge-t-elle uniformément sur $[0,2]$ ?</p>`,
  decode: { donnees: [R`$\|f_n-f\|_\infty\to0$ et chaque $f_n$ continue en $x_0$.`], but: R`La continuité de la limite, puis un contre-exemple qui l'utilise.`, cles: {
    unif: R`$$\forall\varepsilon>0,\ \exists N,\ \forall n\geqslant N,\ \forall x\in[a,b],\ |f_n(x)-f(x)|\leqslant\varepsilon.$$`,
    trois: R`L'inégalité triangulaire « en trois morceaux » :$$|f(x)-f(x_0)|\leqslant|f(x)-f_N(x)|+|f_N(x)-f_N(x_0)|+|f_N(x_0)-f(x_0)|.$$` } },
  steps: [
    { q: 1, t: "Découper en trois morceaux", h: R`<p>On ne sait rien de $f$ directement. On passe par une fonction $f_N$ bien choisie : $f$ est proche de $f_N$ partout (uniforme), et $f_N$ est continue. C'est l'« argument en $\frac\varepsilon3$ ».</p>`, b: R`<p>Soit $\varepsilon>0$. Par convergence uniforme, il existe $N$ tel que $|f_N(x)-f(x)|\leqslant\frac\varepsilon3$ pour <b>tout</b> $x\in[a,b]$. On écrit <span data-k="trois">l'inégalité triangulaire en trois morceaux</span> :</p>$$|f(x)-f(x_0)|\leqslant\underbrace{|f(x)-f_N(x)|}_{\leqslant\varepsilon/3}+|f_N(x)-f_N(x_0)|+\underbrace{|f_N(x_0)-f(x_0)|}_{\leqslant\varepsilon/3}.$$`, rappels: ["o-a-cvu-def"] },
    { q: 1, t: "Utiliser la continuité de f_N", h: R`<p>Le morceau du milieu ne concerne que $f_N$, une seule fonction, continue en $x_0$.</p>`, b: R`<p>$f_N$ est continue en $x_0$ : il existe $\eta>0$ tel que $|x-x_0|\leqslant\eta\Rightarrow|f_N(x)-f_N(x_0)|\leqslant\frac\varepsilon3$. Alors</p><div class="sbox">$$|x-x_0|\leqslant\eta\ \Longrightarrow\ |f(x)-f(x_0)|\leqslant\frac\varepsilon3+\frac\varepsilon3+\frac\varepsilon3 = \varepsilon.$$</div><p>$f$ est continue en $x_0$.</p><p><b>Où sert l'uniformité :</b> on a utilisé $|f(x)-f_N(x)|\leqslant\frac\varepsilon3$ en un point $x$ <b>quelconque</b>, avec le même $N$ qu'en $x_0$.</p>` },
    { q: 2, t: "La limite simple", h: R`<p>$x^n$ se comporte très différemment selon que $x<1$, $x = 1$ ou $x>1$.</p>`, b: R`<p>On fixe $x\in[0,2]$ et on étudie $x^n$ quand $n\to\infty$ (suite géométrique de raison $x$) :</p><ul><li><b>$0\leqslant x<1$</b> : $x^n\to0$, donc $h_n(x) = \frac1{1+x^n}\to\frac1{1+0} = 1$.</li><li><b>$x = 1$</b> : $1^n = 1$, donc $h_n(1) = \frac1{1+1} = \frac12$ pour tout $n$.</li><li><b>$1\lt x\leqslant2$</b> : $x^n\to+\infty$, donc $h_n(x)\to0$.</li></ul><p>La limite simple $h$ vaut $1$ sur $[0,1[$, $\frac12$ en $1$, et $0$ sur $]1,2]$.</p>` + GRAPH({ w: 430, h: 210, x: [0, 2], y: [0, 1.15], xt: [0.5, 1, 1.5, 2], yt: [0.5, 1], xl: "x", curves: [2, 6, 30].map((n, i) => ({ f: x => 1 / (1 + x ** n), c: ["g", "b", "r"][i] })) }, R`$h_2$, $h_6$, $h_{30}$ : elles se rapprochent d'une « marche » qui vaut $1$, puis $\frac12$ en $1$, puis $0$.`, "Graphes de h_n") },
    { q: 2, t: "Conclure", h: R`<p>Toutes les $h_n$ sont continues, la limite ne l'est pas : la question 1 interdit la convergence uniforme.</p>`, b: R`<p>La limite $h$ n'est pas continue en $1$ (elle vaut $1$ à gauche, $\frac12$ en $1$, $0$ à droite). Les $h_n$ sont continues en $1$. Si $(h_n)$ convergeait uniformément sur $[0,2]$, $h$ serait continue en $1$ par la question 1.</p><div class="sbox">$$(h_n)\ \text{ne converge pas uniformément sur}\ [0,2].$$</div>`, rappels: ["o-a-cvu-cont"] }
  ],
  ctx: { "o-a-cvu-def": R`<p>On l'utilise avec $\varepsilon/3$ et un seul indice $N$, valable pour tous les $x$.</p>`, "o-a-cvu-cont": R`<p>Ici en contraposée : $h_n$ continues en $1$, $h$ discontinue en $1$ $\Rightarrow$ pas de convergence uniforme.</p>` },
  piege: R`Choisir $N$ dépendant de $x$ dans la question 1 : alors l'argument ne marche plus. C'est toute la différence entre simple et uniforme.`,
  methode: R`Argument en $\frac\varepsilon3$ : passer par $f_N$ (proche partout de $f$ et continue).`
},
{
  id: "o-an-14", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "15 min",
  title: "Intégrer une série terme à terme",
  enonce: R`<p>Soient $a< b$ et $(f_n)$ une suite de fonctions continues sur $[a,b]$.</p>
<ol>
<li>Montrer que si $(f_n)$ converge uniformément vers $f$ sur $[a,b]$, alors $\displaystyle\int_a^bf_n\to\int_a^bf$.</li>
<li>Énoncer le résultat correspondant pour une série de fonctions.</li>
<li>Montrer que $\displaystyle\int_0^{1/3}\Big(\sum_{n=0}^{+\infty}x^n\Big)dx = \sum_{n=1}^{+\infty}\frac1{n\,3^n}$, puis calculer cette somme.</li>
</ol>`,
  decode: { donnees: [R`$f_n$ continues sur le segment $[a,b]$.`], but: R`Le théorème d'interversion limite-intégrale sur un segment, puis une somme de série calculée par intégration.`, cles: {
    cont: R`La limite uniforme $f$ est continue (comme limite uniforme de fonctions continues) : son intégrale a bien un sens.`,
    geom: R`Pour $|x|<1$ : $$\sum_{n=0}^{+\infty}x^n = \frac1{1-x}.$$` } },
  steps: [
    { q: 1, t: "Majorer l'écart des intégrales", h: R`<p>L'écart entre deux intégrales est au plus l'intégrale de l'écart, qui est au plus (longueur) $\times$ (sup).</p>`, b: R`<p>D'abord, $f$ est <span data-k="cont">continue</span> : c'est une limite uniforme de fonctions continues (théorème du cours). Elle est donc intégrable sur $[a,b]$.</p><p>Ensuite, on majore l'écart en trois étapes :</p><ul><li>linéarité puis inégalité triangulaire : $\Big|\int_a^bf_n-\int_a^bf\Big| = \Big|\int_a^b(f_n-f)\Big|\leqslant\int_a^b|f_n-f|$ ;</li><li>pour tout $x$, $|f_n(x)-f(x)|\leqslant\|f_n-f\|_\infty$ (le sup est plus grand que chaque valeur) ;</li><li>l'intégrale d'une constante $c$ sur $[a,b]$ vaut $(b-a)c$.</li></ul><div class="sbox">$$\Big|\int_a^bf_n-\int_a^bf\Big|\leqslant(b-a)\,\|f_n-f\|_\infty\xrightarrow[n\to\infty]{}0.$$</div>`, rappels: ["o-a-cvu-int"] },
    { q: 2, t: "Version séries", h: R`<p>Une série est la suite de ses sommes partielles : on applique la question 1 à $S_n = \sum_{k\leqslant n}f_k$, et l'intégrale d'une somme finie est la somme des intégrales.</p>`, b: R`<p>On applique Q1 à la suite des sommes partielles $S_N = \sum_{n=0}^Nf_n$ : elles sont continues (somme finie), et « $\sum f_n$ converge uniformément » veut dire exactement que $(S_N)$ converge uniformément vers la somme $S$. Comme $\int_a^bS_N = \sum_{n=0}^N\int_a^bf_n$ (linéarité), Q1 donne :</p><p><b>Théorème.</b> Si les $f_n$ sont continues sur $[a,b]$ et si $\sum f_n$ converge uniformément sur $[a,b]$, alors $\sum\int_a^bf_n$ converge et</p><div class="sbox">$$\int_a^b\sum_{n=0}^{+\infty}f_n = \sum_{n=0}^{+\infty}\int_a^bf_n.$$</div>` },
    { q: 3, t: "Convergence normale sur [0, 1/3]", h: R`<p>Pour appliquer la question 2, il faut une convergence uniforme. Sur $[0,\frac13]$, $|x^n|\leqslant\frac1{3^n}$ : convergence normale.</p>`, b: R`<p>Pour $x\in[0,\frac13]$ : $|x^n|\leqslant\big(\frac13\big)^n$ et $\sum\frac1{3^n}$ converge. La série $\sum x^n$ converge normalement, donc uniformément, sur $[0,\frac13]$. Par la question 2 :</p>$$\int_0^{1/3}\sum_{n=0}^{+\infty}x^n\,dx = \sum_{n=0}^{+\infty}\int_0^{1/3}x^n\,dx = \sum_{n=0}^{+\infty}\frac{(1/3)^{n+1}}{n+1} = \sum_{n=1}^{+\infty}\frac1{n\,3^n}.$$`, rappels: ["o-a-normale-unif"] },
    { q: 3, t: "Calculer la somme", h: R`<p>On calcule le membre de gauche directement avec la <b>somme de la série géométrique</b>.</p>`, b: R`<p><span data-k="geom">Pour $0\leqslant x\leqslant\frac13$, $\sum x^n = \frac1{1-x}$</span>, donc</p>$$\int_0^{1/3}\frac{dx}{1-x} = \big[-\ln(1-x)\big]_0^{1/3} = -\ln\frac23 = \ln\frac32.$$<div class="sbox">$$\sum_{n=1}^{+\infty}\frac1{n\,3^n} = \ln\frac32\approx0{,}405.$$</div><p><b>Contrôle :</b> $\frac13+\frac1{18}+\frac1{81}\approx0{,}401$.</p>` }
  ],
  ctx: { "o-a-cvu-int": R`<p>$[a,b]$ est un segment et les $f_n$ sont continues : l'inégalité $\leqslant(b-a)\|f_n-f\|_\infty$ est valable.</p>`, "o-a-normale-unif": R`<p>$\alpha_n = 3^{-n}$ pour $\sum x^n$ sur $[0,\frac13]$.</p>` },
  piege: R`Intervertir sur $[0,1[$ : la convergence n'y est pas uniforme ($\sup_{[0,1[}x^n = 1$). On se place sur un segment $[0,r]$ avec $r<1$.`,
  methode: R`Pour sommer $\sum\frac{r^{n+1}}{n+1}$ : reconnaître l'intégrale de $\sum x^n$ entre $0$ et $r$.`
},
{
  id: "o-an-15", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "15 min",
  title: "Convergence normale sur un disque",
  enonce: R`<p>Soit $X\subset\mathbb C$ et $\sum f_n$ une série de fonctions de $X$ dans $\mathbb C$.</p>
<ol>
<li>Rappeler les définitions de la convergence normale et de la convergence uniforme de $\sum f_n$ sur $X$.</li>
<li>Montrer que la convergence normale sur $X$ implique la convergence uniforme sur $X$.</li>
<li>Soit $\rho>0$. La série $\displaystyle\sum_{n\geqslant0}\frac{n^3}{n!}z^n$ converge-t-elle uniformément sur le <span data-k="disque">disque fermé</span> $\overline D(0,\rho)$ ?</li>
</ol>`,
  decode: { donnees: [R`$f_n(z) = \frac{n^3}{n!}z^n$.`], but: R`Les définitions, l'implication normale $\Rightarrow$ uniforme, puis un exemple.`, cles: {
    disque: R`$\overline D(0,\rho) = \{z\in\mathbb C : |z|\leqslant\rho\}$. Pour $z$ dedans : $|z^n|\leqslant\rho^n$.`,
    cs: R`$|f_n(z)|\leqslant\alpha_n$ et $\sum\alpha_n<+\infty$ : la série numérique $\sum f_n(z)$ converge absolument pour chaque $z$.` } },
  steps: [
    { q: 1, t: "Les définitions", h: R`<p>Normale : on regarde la série des $\sup|f_n|$. Uniforme : on regarde le sup du reste.</p>`, b: R`<ul><li><b>Normale :</b> les $f_n$ sont bornées sur $X$ (au moins à partir d'un rang) et $\sum\|f_n\|_{\infty,X}$ converge.</li><li><b>Uniforme :</b> $\sum f_n$ converge simplement sur $X$ et le reste $R_n = \sum_{k>n}f_k$ vérifie $\|R_n\|_{\infty,X}\to0$.</li></ul>`, rappels: ["o-a-reste"] },
    { q: 2, t: "Normale implique uniforme", h: R`<p>On majore le reste $|R_n(x)|$ par le reste d'une série <b>numérique</b> convergente, qui ne dépend pas de $x$.</p>`, b: R`<p>Soit $\alpha_n = \|f_n\|_\infty$ (à partir d'un rang). Pour tout $x\in X$, $|f_n(x)|\leqslant\alpha_n$, donc <span data-k="cs">$\sum f_n(x)$ converge absolument</span> : convergence simple. Et</p><div class="sbox">$$|R_n(x)|\leqslant\sum_{k>n}|f_k(x)|\leqslant\sum_{k>n}\alpha_k\xrightarrow[n\to\infty]{}0,$$</div><p>borne indépendante de $x$ : $\|R_n\|_\infty\to0$.</p>`, rappels: ["o-a-normale-unif"] },
    { q: 3, t: "Majorer sur le disque", h: R`<p>Sur le disque, le pire cas est $|z| = \rho$. On obtient une série numérique avec $n!$ : d'Alembert.</p>`, b: R`<p>Pour $|z|\leqslant\rho$ : $|f_n(z)|\leqslant\alpha_n = \frac{n^3\rho^n}{n!}$. Pour $n\geqslant1$ :</p>$$\frac{\alpha_{n+1}}{\alpha_n} = \Big(\frac{n+1}n\Big)^3\frac\rho{n+1}\xrightarrow[n\to\infty]{}0<1.$$<p>$\sum\alpha_n$ converge, donc la série converge normalement, et donc uniformément, sur $\overline D(0,\rho)$.</p><div class="sbox">$$\text{Oui : convergence uniforme sur tout disque fermé.}$$</div>`, rappels: ["o-a-cv-se-dalembert", "o-a-normale-unif"] }
  ],
  ctx: { "o-a-reste": R`<p>Pour une série, « uniforme » se lit sur le reste $R_n$.</p>`, "o-a-normale-unif": R`<p>Avec $\alpha_n = \frac{n^3\rho^n}{n!}$, indépendant de $z$ dans le disque.</p>`, "o-a-cv-se-dalembert": R`<p>$\frac{\alpha_{n+1}}{\alpha_n}\sim\frac\rho n\to0$.</p>` },
  piege: R`Conclure à la convergence uniforme sur $\mathbb C$ tout entier : $\sup_{\mathbb C}|f_n| = +\infty$. Elle est uniforme sur chaque disque, pas sur $\mathbb C$.`,
  methode: R`Série entière sur un disque fermé strictement inclus dans le disque de convergence : convergence normale avec $\alpha_n = |a_n|\rho^n$.`
},
{
  id: "o-an-16", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 3, time: "25 min",
  title: "Une série de fonctions qui fait apparaître la constante d'Euler",
  enonce: R`<p>Pour $n\geqslant1$ et $x\in[0,2]$, on pose $u_n(x) = \ln\Big(1+\dfrac xn\Big)-\dfrac xn$, et $S(x) = \sum_{n=1}^{+\infty}u_n(x)$ quand la série converge.</p>
<ol>
<li>Montrer que $S$ est définie sur $[0,2]$.</li>
<li>On pose $v_n = \ln(n+1)-\sum_{k=1}^n\frac1k$. En utilisant $S(1)$, montrer que $(v_n)$ converge, puis donner un équivalent de $\sum_{k=1}^n\frac1k$.</li>
<li>Montrer que $S$ est de classe $\mathcal C^1$ sur $[0,2]$ et calculer $S'(2)$.</li>
</ol>`,
  decode: { donnees: [R`$u_n(x) = \ln(1+\frac xn)-\frac xn$, pour $x\in[0,2]$.`], but: R`Domaine de $S$, un lien avec la série harmonique, puis la régularité de $S$.`, cles: {
    teles: R`$\ln\big(1+\frac1k\big) = \ln(k+1)-\ln k$ : la somme se télescope,$$\sum_{k=1}^n\ln\Big(1+\frac1k\Big) = \ln(n+1).$$`,
    deriv: R`$u_k'(x) = \frac{1/k}{1+x/k}-\frac1k = \frac1{k+x}-\frac1k = -\frac x{k(k+x)}.$` } },
  steps: [
    { q: 1, t: "Majorer u_n(x)", h: R`<p>$\ln(1+t)-t$ est d'ordre $t^2$ quand $t$ est petit. Avec $t = \frac xn$, on obtient du $\frac1{n^2}$ : c'est sommable.</p>`, b: R`<p>Pour $t\geqslant0$ : $t-\frac{t^2}2\leqslant\ln(1+t)\leqslant t$. Avec $t = \frac xn\geqslant0$ :</p><div class="sbox">$$|u_n(x)| = \frac xn-\ln\Big(1+\frac xn\Big)\leqslant\frac{x^2}{2n^2}\leqslant\frac2{n^2}\qquad(x\in[0,2]).$$</div><p>$\sum\frac2{n^2}$ converge : $\sum u_n$ converge normalement sur $[0,2]$, en particulier simplement. $S$ est définie sur $[0,2]$.</p>`, rappels: ["o-a-ineg-ln", "o-a-normale-unif"] },
    { q: 2, t: "Reconnaître v_n", h: R`<p>Les sommes partielles de $S(1)$ contiennent $\sum\ln(1+\frac1k)$, qui se télescope en $\ln(n+1)$.</p>`, b: R`$$\sum_{k=1}^nu_k(1) = \sum_{k=1}^n\ln\Big(1+\frac1k\Big)-\sum_{k=1}^n\frac1k = \ln(n+1)-\sum_{k=1}^n\frac1k = v_n,$$<p>grâce au <span data-k="teles">télescopage</span>. Comme la série $S(1)$ converge, ses sommes partielles convergent : $v_n\to S(1)$.</p>` },
    { q: 2, t: "Un équivalent de H_n", h: R`<p>$H_n = \ln(n+1)-v_n$ avec $v_n$ borné : le terme dominant est $\ln(n+1)\sim\ln n$.</p>`, b: R`<p>Notons $H_n = \sum_{k=1}^n\frac1k = \ln(n+1)-v_n$. Comme $v_n$ a une limite finie et $\ln(n+1)\to+\infty$ :</p><div class="sbox">$$H_n = \ln(n+1)+O(1)\sim\ln n.$$</div><p>La limite $\gamma = -S(1) = \lim(H_n-\ln n)\approx0{,}577$ est la constante d'Euler.</p>` },
    { q: 3, t: "Dériver terme à terme", h: R`<p>Théorème de dérivation des séries : il faut la convergence simple de $\sum u_n$ (faite) et la convergence <b>uniforme</b> de $\sum u_n'$. On la montre par convergence normale.</p>`, b: R`<p>Chaque $u_k$ est $\mathcal C^1$ sur $[0,2]$, avec <span data-k="deriv">$u_k'(x) = -\frac x{k(k+x)}$</span>. Pour $x\in[0,2]$ :</p>$$|u_k'(x)|\leqslant\frac2{k\cdot k} = \frac2{k^2}.$$<p>$\sum u_k'$ converge normalement, donc uniformément, sur $[0,2]$. Donc $S$ est $\mathcal C^1$ sur $[0,2]$ et $S' = \sum u_k'$.</p>`, rappels: ["o-a-serie-c1"] },
    { q: 3, t: "Calculer S'(2)", h: R`<p>$u_k'(2) = \frac1{k+2}-\frac1k$ : télescopage avec un décalage de $2$.</p>`, b: R`$$S'(2) = \sum_{k=1}^{+\infty}\Big(\frac1{k+2}-\frac1k\Big) = \lim_{n\to\infty}\Big(\frac1{n+1}+\frac1{n+2}-1-\frac12\Big) = -\frac32.$$<p>(Dans la somme partielle, tous les termes se simplifient sauf $-1$, $-\frac12$, $\frac1{n+1}$, $\frac1{n+2}$.)</p><div class="sbox">$$S'(2) = -\frac32.$$</div>` }
  ],
  ctx: { "o-a-ineg-ln": R`<p>Appliquée à $t = \frac xn$ : $0\leqslant\frac xn-\ln(1+\frac xn)\leqslant\frac{x^2}{2n^2}$.</p>`, "o-a-normale-unif": R`<p>$\alpha_n = \frac2{n^2}$ pour $u_n$ sur $[0,2]$.</p>`, "o-a-serie-c1": R`<p>$u_k$ de classe $\mathcal C^1$, $\sum u_k$ CVS, $\sum u_k'$ CVN donc CVU sur $[0,2]$.</p>` },
  piege: R`Dériver terme à terme sans vérifier la convergence uniforme de la série des <b>dérivées</b> : c'est elle qui compte.`,
  methode: R`$\ln(1+t)-t = O(t^2)$ donne la convergence normale. Pour la dérivée : majorer $|u_k'|$ uniformément et télescoper.`
},
{
  id: "o-an-17", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "20 min",
  title: "Une série qui converge partout mais pas uniformément",
  enonce: R`<p>Soit $A\subset\mathbb C$ et $(f_n)$ une suite de fonctions de $A$ dans $\mathbb C$.</p>
<ol>
<li>Montrer que si $\sum f_n$ converge uniformément sur $A$, alors $(f_n)$ converge uniformément vers $0$ sur $A$.</li>
<li>Pour $n\in\mathbb N$ et $x\geqslant0$, on pose $f_n(x) = n^2x^4e^{-x\sqrt n}$. Montrer que $\sum f_n$ converge simplement sur $[0,+\infty[$. Converge-t-elle uniformément ?</li>
</ol>`,
  decode: { donnees: [R`$f_n(x) = n^2x^4e^{-x\sqrt n}$, positive.`], but: R`Une condition nécessaire de convergence uniforme, puis son utilisation.`, cles: {
    reste: R`$R_n = \sum_{k>n}f_k$ et $R_{n-1}-R_n = f_n$.`,
    max: R`Pour $\varphi(x) = x^4e^{-cx}$ ($c>0$) : $\varphi'(x) = x^3(4-cx)e^{-cx}$, nul en $x = \frac4c$. Ici $c = \sqrt n$.` } },
  steps: [
    { q: 1, t: "Le terme général est une différence de restes", h: R`<p>$f_n$ est la différence de deux restes consécutifs, et chaque reste tend uniformément vers $0$.</p>`, b: R`<p>Notons $S$ la somme et $R_n = \sum_{k>n}f_k = S-S_n$ le reste. « $\sum f_n$ converge uniformément » signifie $\|R_n\|_\infty\to0$.</p><p>Le terme général est une différence de deux restes consécutifs : <span data-k="reste">$R_{n-1}-R_n = \sum_{k\geqslant n}f_k-\sum_{k\geqslant n+1}f_k = f_n$</span>. Par l'inégalité triangulaire, pour tout $x$ :</p>$$|f_n(x)|\leqslant|R_{n-1}(x)|+|R_n(x)|\leqslant\|R_{n-1}\|_\infty+\|R_n\|_\infty.$$<div class="sbox">$$\|f_n\|_\infty\leqslant\|R_{n-1}\|_\infty+\|R_n\|_\infty\xrightarrow[n\to\infty]{}0.$$</div><p>Donc $f_n\to0$ uniformément sur $A$.</p>`, rappels: ["o-a-reste"] },
    { q: 2, t: "Convergence simple", h: R`<p>En $x>0$ fixé, $e^{-x\sqrt n}$ décroît plus vite que toute puissance de $n$ : on montre $n^2f_n(x)\to0$.</p>`, b: R`<p>$f_n(0) = 0$. Pour $x>0$ : $n^2f_n(x) = x^4\,n^4e^{-x\sqrt n}$. Avec $t = \sqrt n\to+\infty$ : $n^4e^{-x\sqrt n} = t^8e^{-xt}\to0$ par croissances comparées. Donc $f_n(x) = o\big(\frac1{n^2}\big)$, et $\sum f_n(x)$ converge (termes positifs).</p>`, rappels: ["o-a-croissances"] },
    { q: 2, t: "Le maximum de f_n", h: R`<p>Pour tester la condition de la question 1, on calcule $\|f_n\|_\infty$ en étudiant $f_n$ (dérivée).</p>`, b: R`<p><span data-k="max">$f_n$ atteint son maximum en $x_n = \frac4{\sqrt n}$</span> :</p><div class="sbox">$$\|f_n\|_\infty = f_n\Big(\frac4{\sqrt n}\Big) = n^2\cdot\frac{256}{n^2}\,e^{-4} = 256\,e^{-4}\approx4{,}69.$$</div>` + GRAPH({ w: 430, h: 220, x: [0, 4], y: [0, 5.5], xt: [1, 2, 3, 4], yt: [2, 4], xl: "x", hl: [{ y: 256 * Math.exp(-4), t: "256 e⁻⁴" }], curves: [1, 4, 16].map((n, i) => ({ f: x => n * n * x ** 4 * Math.exp(-x * Math.sqrt(n)), c: ["g", "b", "r"][i] })) }, R`$f_1$, $f_4$, $f_{16}$ : même hauteur maximale $256e^{-4}$, atteinte en $\frac4{\sqrt n}$, de plus en plus près de $0$.`, "Bosses de hauteur constante") },
    { q: 2, t: "Conclure", h: R`<p>Le sup ne tend pas vers $0$ : la condition nécessaire de la question 1 n'est pas remplie.</p>`, b: R`<p>L'étape précédente donne $\|f_n\|_\infty = 256e^{-4}\approx4{,}7$ pour tout $n$ : cette quantité ne tend pas vers $0$. Donc $(f_n)$ ne converge pas uniformément vers $0$.</p><p>On utilise alors la <b>contraposée</b> de Q1 : « si $\sum f_n$ converge uniformément, alors $f_n\to0$ uniformément » devient « si $f_n\not\to0$ uniformément, alors $\sum f_n$ ne converge pas uniformément ».</p><div class="sbox">$$\sum f_n\ \text{ne converge pas uniformément sur}\ [0,+\infty[.$$</div><p>Elle converge pourtant simplement en chaque point (étape 2) : la bosse de $f_n$, de hauteur fixe, se déplace vers $0$.</p>` }
  ],
  ctx: { "o-a-reste": R`<p>$f_n = R_{n-1}-R_n$, donc $\|f_n\|_\infty\leqslant\|R_{n-1}\|_\infty+\|R_n\|_\infty$.</p>`, "o-a-croissances": R`<p>$t^8e^{-xt}\to0$ quand $t = \sqrt n\to+\infty$, pour $x>0$ fixé.</p>` },
  piege: R`Croire que la convergence simple d'une série de fonctions positives donne la convergence uniforme. Les bosses de hauteur constante l'empêchent.`,
  methode: R`Pour nier la convergence uniforme d'une série : montrer que $\|f_n\|_\infty\not\to0$.`,
  viz: { type: "plot", title: "Fais varier n : la bosse garde sa hauteur", x: [0, 4], y: [0, 5.5], xlabel: "x", params: [{ k: "n", label: "n", min: 1, max: 60, step: 1, v: 4 }], curves: [{ label: "fₙ", f: (x, p) => p.n * p.n * x ** 4 * Math.exp(-x * Math.sqrt(p.n)) }], hlines: [{ y: () => 256 * Math.exp(-4), label: "256 e⁻⁴" }] }
},
{
  id: "o-an-18", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 3, time: "25 min",
  title: "Uniforme mais pas normale : une série de puissances alternées",
  enonce: R`<p>Pour $n\in\mathbb N$ et $x\in\mathbb R$, on pose $u_n(x) = \dfrac{(-1)^nx^n}{n+1}$.</p>
<ol>
<li>Déterminer l'ensemble $D$ des réels $x$ pour lesquels $\sum u_n(x)$ converge. On note $S(x)$ la somme.</li>
<li><ol style="list-style:lower-alpha"><li>$S$ est-elle continue sur $D$ ?</li><li>La série converge-t-elle normalement sur $D$ ? Uniformément sur $D$ ?</li><li>Converge-t-elle uniformément sur $[0,1]$ ?</li></ol></li>
</ol>`,
  decode: { donnees: [R`$u_n(x) = \frac{(-1)^nx^n}{n+1}$, $n\geqslant0$.`], but: R`Le domaine de convergence, puis la comparaison des modes de convergence.`, cles: {
    ray: R`Pour $|x|>1$ : $|u_n(x)| = \frac{|x|^n}{n+1}\to+\infty$ (croissances comparées), divergence grossière.`,
    neg: R`Pour $x\in\,]-1,0[$, posons $y = -x\in\,]0,1[$ : $u_n(x) = \frac{y^n}{n+1}>0$. Tous les termes sont positifs.` } },
  steps: [
    { q: 1, t: "Le domaine de convergence", h: R`<p>Comparer $|x|$ à $1$, puis traiter les deux bords $x = 1$ et $x = -1$ à part.</p>`, b: R`<p>On distingue selon $|x|$ :</p><ul><li><b>$|x|<1$</b> : $|u_n(x)| = \frac{|x|^n}{n+1}\leqslant|x|^n$, terme d'une série géométrique convergente : la série converge (absolument).</li><li><b>$|x|>1$</b> : $|u_n(x)| = \frac{|x|^n}{n+1}\to+\infty$ (croissances comparées) ; le terme général ne tend pas vers $0$ : <span data-k="ray">divergence grossière</span>.</li><li><b>$x = 1$</b> : $u_n(1) = \frac{(-1)^n}{n+1}$. Critère des séries alternées : $\frac1{n+1}$ est positive, décroissante, de limite nulle, donc la série converge.</li><li><b>$x = -1$</b> : $u_n(-1) = \frac{(-1)^n(-1)^n}{n+1} = \frac1{n+1}$, série harmonique, divergente.</li></ul><div class="sbox">$$D = \,]-1,1].$$</div>`, rappels: ["o-a-alternee"] },
    { q: 2, t: "Convergence uniforme sur [0, 1]", h: R`<p>Sur $[0,1]$, la série est alternée en chaque $x$ : son reste est majoré par le premier terme négligé, indépendamment de $x$.</p>`, b: R`<p>Pour $x\in[0,1]$ fixé, $a_n(x) = \frac{x^n}{n+1}$ est positive, décroissante en $n$, de limite $0$. Donc</p><div class="sbox">$$|R_n(x)|\leqslant\frac{x^{n+1}}{n+2}\leqslant\frac1{n+2}\xrightarrow[n\to\infty]{}0.$$</div><p>Convergence <b>uniforme sur $[0,1]$</b> (question 2.c).</p>`, rappels: ["o-a-alternee", "o-a-reste"] },
    { q: 2, t: "Continuité de S sur D", h: R`<p>La continuité est locale : on la montre sur $[-a,a]$ ($a<1$) par convergence normale, et sur $[0,1]$ par la convergence uniforme précédente. Ces intervalles recouvrent $D$.</p>`, b: R`<p>Chaque $u_n$ est continue (polynôme). On utilise : <b>une limite uniforme de fonctions continues est continue</b>, sur deux types d'intervalles.</p><ul><li><b>Sur $[-a,a]$, $0\lt a<1$</b> : $|u_n(x)|\leqslant a^n$ pour $|x|\leqslant a$, et $\sum a^n$ converge : convergence normale, donc uniforme. $S$ est continue sur $[-a,a]$.</li><li><b>Sur $[0,1]$</b> : convergence uniforme (étape précédente), donc $S$ est continue sur $[0,1]$.</li></ul><p>Tout point $x_0$ de $D = ]-1,1]$ est dans l'un de ces intervalles : si $x_0\geqslant0$, dans $[0,1]$ ; si $-1\lt x_0<0$, dans $[-a,a]$ avec $a = |x_0|$… à l'intérieur, en prenant $a = \frac{1+|x_0|}2$. La continuité étant locale :</p><div class="sbox">$$S\ \text{est continue sur}\ D = \,]-1,1].$$</div><p>(Vérification : $S(x) = \frac{\ln(1+x)}x$ pour $x\neq0$ et $S(0) = 1$.)</p>`, rappels: ["o-a-serie-cont"] },
    { q: 2, t: "Ni normale ni uniforme sur D", h: R`<p>Normale : on calcule $\sup_D|u_n|$. Uniforme : près de $-1$, tous les termes deviennent positifs et la série ressemble à la série harmonique ; le reste ne peut pas être petit uniformément.</p>`, b: R`<p><b>Normale :</b> $\sup_{x\in D}|u_n(x)| = \frac1{n+1}$ (atteint en $x = 1$), et $\sum\frac1{n+1}$ diverge : pas de convergence normale.</p><p><b>Uniforme :</b> <span data-k="neg">pour $x\in\,]-1,0[$, avec $y = -x$</span>, $R_n(x) = \sum_{k>n}\frac{y^k}{k+1}\geqslant\sum_{k=n+1}^{2n}\frac{y^{k}}{k+1}\geqslant n\cdot\frac{y^{2n}}{2n+1}$. Quand $y\to1^-$, ce minorant tend vers $\frac n{2n+1}\geqslant\frac13$. Donc $\|R_n\|_{\infty,D}\geqslant\frac13$ : pas de convergence uniforme sur $D$.</p>` }
  ],
  ctx: { "o-a-alternee": R`<p>En $x\in[0,1]$, $a_n(x) = \frac{x^n}{n+1}$ décroît vers $0$ : $|R_n(x)|\leqslant\frac{x^{n+1}}{n+2}$.</p>`, "o-a-reste": R`<p>$\|R_n\|_{\infty,[0,1]}\leqslant\frac1{n+2}\to0$.</p>`, "o-a-serie-cont": R`<p>On recouvre $]-1,1]$ par les $[-a,a]$ ($a<1$) et par $[0,1]$.</p>` },
  piege: R`Déduire la continuité en $1$ de la convergence normale : elle n'a pas lieu sur $[0,1]$. C'est l'uniformité via les séries alternées qui sert.`,
  methode: R`Continuité au bord du domaine : convergence uniforme sur un intervalle contenant ce bord (séries alternées), pas normale.`
},
{
  id: "o-an-27", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "20 min",
  title: "Une suite de fonctions et la limite de ses intégrales",
  enonce: R`<p>Pour $n\in\mathbb N^\ast$ et $x\in[0,1]$, on pose $f_n(x) = \dfrac{\cos x}{1+nx^2}$ et $I_n = \displaystyle\int_0^1f_n(x)\,dx$.</p>
<ol>
<li>Étudier la convergence simple de $(f_n)$ sur $[0,1]$.</li>
<li>Soit $a\in\,]0,1[$. Y a-t-il convergence uniforme sur $[a,1]$ ?</li>
<li>Y a-t-il convergence uniforme sur $[0,1]$ ?</li>
<li>Déterminer la limite de $(I_n)$.</li>
</ol>`,
  decode: { donnees: [R`$f_n(x) = \frac{\cos x}{1+nx^2}$, continue sur $[0,1]$, $0\leqslant f_n\leqslant1$.`], but: R`Modes de convergence, puis la limite des intégrales sans convergence uniforme.`, cles: {
    arct: R`Avec $u = \sqrt n\,x$ : $$\int_0^1\frac{dx}{1+nx^2} = \frac1{\sqrt n}\int_0^{\sqrt n}\frac{du}{1+u^2} = \frac{\arctan\sqrt n}{\sqrt n}.$$` } },
  steps: [
    { q: 1, t: "Limite simple", h: R`<p>En $x = 0$, le dénominateur vaut $1$ ; ailleurs il tend vers l'infini.</p>`, b: R`<p>On fixe $x$ et on fait tendre $n\to\infty$.</p><ul><li><b>$x = 0$</b> : $f_n(0) = \frac{\cos0}{1+0} = 1$ pour tout $n$.</li><li><b>$x\in]0,1]$</b> : $|\cos x|\leqslant1$ et $1+nx^2\geqslant nx^2$, donc $|f_n(x)|\leqslant\frac1{nx^2}$, qui tend vers $0$ ($x$ fixé non nul).</li></ul><div class="sbox">$$f(0) = 1,\qquad f(x) = 0\ \ (0< x\leqslant1).$$</div>` + GRAPH({ w: 430, h: 210, x: [0, 1], y: [0, 1.1], xt: [0.25, 0.5, 0.75, 1], yt: [0.5, 1], xl: "x", curves: [5, 50, 500].map((n, i) => ({ f: x => Math.cos(x) / (1 + n * x * x), c: ["g", "b", "r"][i] })) }, R`$f_5$, $f_{50}$, $f_{500}$ : un pic de hauteur $1$ en $0$, de plus en plus étroit.`, "Graphes de f_n") },
    { q: 2, t: "Sur [a, 1]", h: R`<p>Pour $x\geqslant a$, on minore le dénominateur par sa valeur en $a$.</p>`, b: R`<p>On majore $|f_n(x)-f(x)| = |f_n(x)|$ sur $[a,1]$ par une quantité sans $x$ : pour $x\geqslant a$, $nx^2\geqslant na^2$, donc $\frac1{1+nx^2}\leqslant\frac1{1+na^2}$, et $|\cos x|\leqslant1$ :</p><div class="sbox">$$\sup_{[a,1]}|f_n|\leqslant\frac1{1+na^2}\xrightarrow[n\to\infty]{}0.$$</div><p>Convergence <b>uniforme</b> sur $[a,1]$.</p>`, rappels: ["o-a-cvu-majorer"] },
    { q: 3, t: "Sur [0, 1]", h: R`<p>Limite discontinue en $0$, fonctions continues : pas d'uniformité.</p>`, b: R`<p><b>Théorème</b> : une limite uniforme de fonctions continues est continue.</p><p>Les $f_n$ sont continues sur $[0,1]$. Si $(f_n)$ convergeait uniformément sur $[0,1]$, sa limite $f$ serait continue. Or $f(0) = 1$ et $f(x) = 0$ pour $x>0$ : $f$ n'est pas continue en $0$.</p><p>Donc <b>pas de convergence uniforme</b> sur $[0,1]$ : le problème est concentré au voisinage de $0$.</p>`, rappels: ["o-a-cvu-cont"] },
    { q: 4, t: "Majorer l'intégrale", h: R`<p>On ne peut pas échanger limite et intégrale par convergence uniforme. Mais on peut majorer directement : $0\leqslant\cos x\leqslant1$, et $\frac1{1+nx^2}$ a une primitive en arctangente.</p>`, b: R`<p>Sur $[0,1]$ : $0\leqslant f_n(x)\leqslant\frac1{1+nx^2}$. <span data-k="arct">Par le changement $u = \sqrt nx$</span> :</p><div class="sbox">$$0\leqslant I_n\leqslant\frac{\arctan\sqrt n}{\sqrt n}\leqslant\frac\pi{2\sqrt n}\xrightarrow[n\to\infty]{}0.$$</div><p>Donc $I_n\to0$. (On peut aussi utiliser la convergence dominée avec $|f_n|\leqslant1$, intégrable sur $[0,1]$.)</p>` }
  ],
  ctx: { "o-a-cvu-majorer": R`<p>$\alpha_n = \frac1{1+na^2}$ pour $x\in[a,1]$.</p>`, "o-a-cvu-cont": R`<p>$f$ n'est pas continue en $0$, alors que les $f_n$ le sont.</p>` },
  piege: R`Dire « pas de convergence uniforme, donc on ne peut rien dire sur $I_n$ » : la limite des intégrales peut quand même s'obtenir par majoration directe ou convergence dominée.`,
  methode: R`Limite d'intégrales : convergence uniforme sur un segment si elle a lieu, sinon majoration explicite ou convergence dominée.`,
  viz: { type: "plot", title: "Le pic s'affine, l'aire tend vers 0", x: [0, 1], y: [0, 1.1], xlabel: "x", params: [{ k: "n", label: "n", min: 1, max: 1000, step: 1, v: 20 }], curves: [{ label: "fₙ", f: (x, p) => Math.cos(x) / (1 + p.n * x * x) }] }
},
{
  id: "o-an-48", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "20 min",
  title: "Une fonction orthogonale à tous les monômes",
  enonce: R`<p>Soit $f$ continue sur $[0,2]$ à valeurs réelles, telle que $\displaystyle\int_0^2t^nf(t)\,dt = 0$ pour tout $n\in\mathbb N$.</p>
<ol>
<li>Énoncer le théorème d'approximation de Weierstrass.</li>
<li>Soit $(P_n)$ une suite de polynômes qui converge uniformément vers $f$ sur $[0,2]$.<ol style="list-style:lower-alpha"><li>Montrer que $(P_nf)$ converge uniformément vers $f^2$ sur $[0,2]$.</li><li>En déduire que $\int_0^2f^2 = \lim\int_0^2P_nf$.</li><li>Calculer $\int_0^2P_n(t)f(t)\,dt$.</li></ol></li>
<li>Conclure que $f$ est nulle sur $[0,2]$.</li>
</ol>`,
  decode: { donnees: [R`$\int_0^2t^nf(t)\,dt = 0$ pour tout $n$.`], but: R`Montrer que $f = 0$ en l'approchant par des polynômes.`, cles: {
    born: R`$f$ est continue sur le segment $[0,2]$ : elle est bornée, $\|f\|_\infty<+\infty$ (théorème des bornes atteintes).`,
    lin: R`Si $P = \sum_{k=0}^da_kt^k$, par linéarité de l'intégrale :$$\int_0^2P(t)f(t)\,dt = \sum_{k=0}^da_k\int_0^2t^kf(t)\,dt.$$`,
    pos: R`Une fonction continue, positive, d'intégrale nulle sur un segment est nulle. Ici $f^2\geqslant0$.` } },
  steps: [
    { q: 1, t: "Le théorème", h: R`<p>À connaître par cœur : toute fonction continue sur un segment est limite uniforme de polynômes.</p>`, b: R`<p><b>Théorème de Weierstrass</b> : toute fonction continue sur un segment $[a,b]$ est limite uniforme d'une suite de polynômes.</p><div class="sbox">$$f\in\mathcal C([a,b],\mathbb R)\ \Longrightarrow\ \exists(P_n)\ \text{polynômes},\ \sup_{[a,b]}|P_n-f|\xrightarrow[n\to\infty]{}0.$$</div>`, rappels: ["o-a-weierstrass"] },
    { q: 2, t: "Multiplier par f", h: R`<p>On factorise $P_nf-f^2 = (P_n-f)f$, et $f$ est bornée.</p>`, b: R`<p>$f$ est continue sur le segment $[0,2]$, donc <span data-k="born">bornée</span> : $\|f\|_\infty = \sup|f|< +\infty$. Pour tout $t\in[0,2]$, on factorise :</p>$$|P_n(t)f(t)-f(t)^2| = |P_n(t)-f(t)|\cdot|f(t)|\leqslant\|P_n-f\|_\infty\,\|f\|_\infty.$$<p>Le majorant ne dépend pas de $t$ et tend vers $0$. Donc</p><div class="sbox">$$\|P_nf-f^2\|_\infty\leqslant\|P_n-f\|_\infty\|f\|_\infty\xrightarrow[n\to\infty]{}0.$$</div><p>$(P_nf)$ converge uniformément vers $f^2$ sur $[0,2]$.</p>` },
    { q: 2, t: "Passer à la limite dans l'intégrale", h: R`<p>Majore $\big|\int(P_nf-f^2)\big|$ par la longueur de l'intervalle fois la norme infinie.</p>`, b: R`<p>Par l'inégalité triangulaire pour les intégrales, sur un intervalle de longueur $2$ :</p>$$\Big|\int_0^2P_nf-\int_0^2f^2\Big|\leqslant\int_0^2|P_nf-f^2|\leqslant2\,\|P_nf-f^2\|_\infty\xrightarrow[n\to\infty]{}0.$$<div class="sbox">$$\int_0^2f^2 = \lim_{n\to\infty}\int_0^2P_nf.$$</div>`, rappels: ["o-a-cvu-int"] },
    { q: 2, t: "Chaque intégrale est nulle", h: R`<p>Un polynôme est une combinaison de monômes, et l'hypothèse dit que chaque monôme donne une intégrale nulle.</p>`, b: R`<p>$P_n$ est un polynôme : écrivons $P_n(t) = \sum_{k=0}^da_kt^k$ ($d$ son degré, $a_k$ ses coefficients). <span data-k="lin">Par linéarité de l'intégrale</span>, l'intégrale d'une somme est la somme des intégrales, et les constantes $a_k$ sortent :</p>$$\int_0^2P_n(t)f(t)\,dt = \int_0^2\sum_{k=0}^da_kt^kf(t)\,dt = \sum_{k=0}^da_k\int_0^2t^kf(t)\,dt.$$<p>Chaque intégrale $\int_0^2t^kf(t)\,dt$ est nulle par hypothèse de l'énoncé. Donc</p>$$\int_0^2P_n(t)f(t)\,dt = 0\quad\text{pour tout }n.$$` },
    { q: 3, t: "Conclure", h: R`<p>On obtient $\int f^2 = 0$ avec $f^2$ continue et positive.</p>`, b: R`<p>Par les deux étapes précédentes : $\int_0^2f^2 = \lim0 = 0$.</p><p><span data-k="pos">$f^2$ est continue, positive, d'intégrale nulle sur $[0,2]$</span>. Si $f^2(t_0)>0$ en un point, par continuité $f^2>\frac{f^2(t_0)}2$ sur un petit intervalle, et l'intégrale serait $>0$. Donc $f^2 = 0$ partout :</p><div class="sbox">$$f = 0\ \text{sur}\ [0,2].$$</div>` }
  ],
  ctx: { "o-a-weierstrass": R`<p>Appliqué à $f$ sur le segment $[0,2]$.</p>`, "o-a-cvu-int": R`<p>Avec $P_nf\to f^2$ uniformément sur $[0,2]$, de longueur $2$.</p>` },
  piege: R`Oublier que $f$ est bornée pour montrer que $P_nf\to f^2$ uniformément.`,
  methode: R`« Orthogonale à tous les monômes » : approcher $f$ par des polynômes (Weierstrass) pour obtenir $\int f^2 = 0$.`
},
{
  id: "o-an-53", subj: "oraux", year: "mp", chap: 7, concours: "ccinp", level: 2, time: "25 min",
  title: "Une série de fonctions impaires",
  enonce: R`<p>Pour $n\geqslant1$ et $x\in\mathbb R$, on pose $f_n(x) = \dfrac x{1+n^2x^2}$.</p>
<ol>
<li><ol style="list-style:lower-alpha"><li>Montrer que $\sum f_n$ converge simplement sur $\mathbb R$. On note $f$ sa somme.</li><li>Soient $0< a< b$. La convergence est-elle normale sur $[a,b]$ ? Sur $[a,+\infty[$ ?</li><li>Est-elle normale sur $[0,+\infty[$ ?</li></ol></li>
<li>Montrer que $f$ est continue sur $\mathbb R^\ast$.</li>
<li>Déterminer $\displaystyle\lim_{x\to+\infty}f(x)$.</li>
</ol>`,
  decode: { donnees: [R`$f_n(x) = \frac x{1+n^2x^2}$, impaire, continue.`], but: R`Les modes de convergence, la continuité de la somme, puis sa limite en $+\infty$.`, cles: {
    var: R`$f_n'(x) = \frac{1-n^2x^2}{(1+n^2x^2)^2}$ : $f_n$ croît sur $[0,\frac1n]$ et décroît sur $[\frac1n,+\infty[$.`,
    imp: R`$f(-x) = -f(x)$ : ce qu'on prouve sur $]0,+\infty[$ se transporte sur $]-\infty,0[$.` } },
  steps: [
    { q: 1, t: "Convergence simple", h: R`<p>$x$ fixé non nul : le terme est d'ordre $\frac1{n^2}$.</p>`, b: R`<p>On fixe $x$ et on étudie la série numérique $\sum_nf_n(x)$.</p><ul><li><b>$x = 0$</b> : $f_n(0) = 0$ pour tout $n$, la série converge (somme nulle).</li><li><b>$x\neq0$</b> : on minore le dénominateur par $n^2x^2$ (on retire $1>0$) :</li></ul>$$|f_n(x)| = \frac{|x|}{1+n^2x^2}\leqslant\frac{|x|}{n^2x^2} = \frac1{|x|}\cdot\frac1{n^2}.$$<p>$\sum\frac1{n^2}$ est une série de Riemann convergente (exposant $2>1$), et $\frac1{|x|}$ est une constante : par comparaison, $\sum|f_n(x)|$ converge, donc $\sum f_n(x)$ converge (absolument).</p><p>La série converge simplement sur $\mathbb R$ ; on note $f$ sa somme.</p>` },
    { q: 1, t: "Normale sur [a, +∞[", h: R`<p>Le sup de $|f_n|$ sur $[a,+\infty[$ se lit sur les variations de $f_n$ : pour $n$ grand, $\frac1n< a$ et $f_n$ décroît sur $[a,+\infty[$.</p>`, b: R`<p><span data-k="var">Variations</span> : $f_n$ est maximale en $\frac1n$. Pour $n>\frac1a$, $f_n$ décroît sur $[a,+\infty[$, donc</p><div class="sbox">$$\sup_{[a,+\infty[}|f_n| = f_n(a) = \frac a{1+n^2a^2}\leqslant\frac1{n^2a}.$$</div><p>$\sum\frac1{n^2a}$ converge : convergence <b>normale</b> sur $[a,+\infty[$, donc aussi sur $[a,b]$.</p>`, rappels: ["o-a-normale-unif"] },
    { q: 1, t: "Sur [0, +∞[", h: R`<p>Sur $[0,+\infty[$, le sup est le maximum $f_n(\frac1n)$.</p>`, b: R`$$\sup_{[0,+\infty[}|f_n| = f_n\Big(\frac1n\Big) = \frac{1/n}{2} = \frac1{2n},$$<p>et $\sum\frac1{2n}$ diverge : <b>pas de convergence normale</b> sur $[0,+\infty[$.</p>` + GRAPH({ w: 430, h: 210, x: [0, 2], y: [0, 0.55], xt: [0.5, 1, 1.5, 2], yt: [0.25, 0.5], xl: "x", curves: [1, 3, 10].map((n, i) => ({ f: x => x / (1 + n * n * x * x), c: ["g", "b", "r"][i] })) }, R`$f_1$, $f_3$, $f_{10}$ : le maximum vaut $\frac1{2n}$, atteint en $\frac1n$.`, "Graphes de f_n") },
    { q: 2, t: "Continuité sur R*", h: R`<p>La continuité est locale : autour d'un $x_0>0$, on se place sur $[a,+\infty[$ avec $0< a< x_0$, où la convergence est normale. Puis on utilise l'imparité.</p>`, b: R`<p>Les $f_n$ sont continues. Pour tout $a>0$, convergence normale donc uniforme sur $[a,+\infty[$ : $f$ est continue sur $[a,+\infty[$. Tout $x_0>0$ est dans un tel intervalle : $f$ est continue sur $]0,+\infty[$. <span data-k="imp">Par imparité</span>, aussi sur $]-\infty,0[$.</p>`, rappels: ["o-a-serie-cont"] },
    { q: 3, t: "Limite en +∞", h: R`<p>Convergence uniforme sur $[1,+\infty[$ et chaque $f_n$ a une limite en $+\infty$ : théorème de la double limite.</p>`, b: R`<p>Chaque $f_n(x)\to0$ quand $x\to+\infty$. Comme $\sum f_n$ converge uniformément sur $[1,+\infty[$ :</p><div class="sbox">$$\lim_{x\to+\infty}f(x) = \sum_{n\geqslant1}\lim_{x\to+\infty}f_n(x) = 0.$$</div><p>(Directement aussi : $0\leqslant f(x)\leqslant\frac1x\sum\frac1{n^2}$.)</p>`, rappels: ["o-a-double-limite"] }
  ],
  ctx: { "o-a-normale-unif": R`<p>$\alpha_n = \frac1{n^2a}$ sur $[a,+\infty[$ (pour $n>\frac1a$).</p>`, "o-a-serie-cont": R`<p>On recouvre $]0,+\infty[$ par les $[a,+\infty[$, $a>0$.</p>`, "o-a-double-limite": R`<p>$\ell_n = \lim_{+\infty}f_n = 0$ et convergence uniforme sur $[1,+\infty[$.</p>` },
  piege: R`Calculer $\sup_{[a,+\infty[}|f_n|$ comme $f_n(\frac1n)$ : ce point n'est dans $[a,+\infty[$ que si $\frac1n\geqslant a$.`,
  methode: R`Étudier les variations de $f_n$ pour calculer $\|f_n\|_\infty$ ; continuité par convergence uniforme locale.`
}
]);
})();

/* ===== Chapitre 11 : Séries entières ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1 } = window.__LA;

LEMME.rappels({
  "o-a-rayon-def": { t: "Rayon de convergence", b: R`<div class="sbox">$$R = \sup\{r\geqslant0 : (a_nr^n)\text{ bornée}\}.$$</div>$$|z|\lt R\Rightarrow\sum a_nz^n\text{ CVA};\qquad|z|>R\Rightarrow\text{DVG}.$$` },
  "o-a-rayon-outils": { t: "Outils pour trouver un rayon", b: R`$$\Big|\frac{a_{n+1}}{a_n}\Big|\to\ell\Rightarrow R = \frac1\ell;\qquad|a_n|\leqslant|b_n|\Rightarrow R_a\geqslant R_b;\qquad a_n\sim b_n\Rightarrow R_a = R_b.$$<div class="sbox">$$(a_nr^n)\text{ bornée}\Rightarrow R\geqslant r,\qquad(a_nr^n)\text{ non bornée}\Rightarrow R\leqslant r.$$</div>` },
  "o-a-rayon-somme": { t: "Rayon d'une somme", b: R`<div class="sbox">$$R_{a+b}\geqslant\min(R_a,R_b),\qquad R_a\neq R_b\ \Longrightarrow\ R_{a+b} = \min(R_a,R_b).$$</div><p><b>Contre-exemple</b> si $R_a = R_b$ :</p>$$a_n = 1,\ b_n = -1:\quad R_a = R_b = 1,\quad R_{a+b} = +\infty.$$` },
  "o-a-se-derivation": { t: "Dérivation d'une série entière", b: R`$$R\Big(\sum a_nx^n\Big) = R\Big(\sum na_nx^{n-1}\Big).$$<div class="sbox">$$S\in\mathcal C^\infty(]-R,R[),\qquad S'(x) = \sum_{n=1}^{+\infty}na_nx^{n-1},\qquad a_p = \frac{S^{(p)}(0)}{p!}.$$</div>` },
  "o-a-dse-usuels": { t: "Développements en série entière usuels", b: R`<div class="sbox">$$\begin{gathered}\frac1{1-x} = \sum_{n\geqslant0}x^n,\quad\ln(1+x) = \sum_{n\geqslant1}\frac{(-1)^{n-1}}nx^n\quad(R = 1)\\e^x = \sum\frac{x^n}{n!},\quad\operatorname{ch}x = \sum\frac{x^{2n}}{(2n)!},\quad\cos x = \sum\frac{(-1)^nx^{2n}}{(2n)!}\quad(R = +\infty)\\\operatorname{sh}x = \sum\frac{x^{2n+1}}{(2n+1)!},\quad\sin x = \sum\frac{(-1)^nx^{2n+1}}{(2n+1)!}\quad(R = +\infty)\end{gathered}$$</div>` },
  "o-a-binome-alpha": { t: "Série du binôme", b: R`<div class="sbox">$$|x|\lt1:\quad(1+x)^\alpha = 1+\sum_{n\geqslant1}\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n.$$</div>$$\alpha\notin\mathbb N\ \Longrightarrow\ R = 1.$$` },
  "o-a-elements-simples": { t: "Décomposition en éléments simples", b: R`<div class="sbox">$$\deg P\lt2\ :\quad\frac{P(x)}{(x-a)^2} = \frac\alpha{x-a}+\frac\beta{(x-a)^2},\qquad P(x) = \alpha(x-a)+\beta.$$</div><p>$\beta = P(a)$, $\alpha$ = coefficient de $x$ dans $P$.</p>` },
  "o-a-cauchy-se": { t: "Produit de Cauchy de séries entières", b: R`<p>Pour $|z|<\min(R_a,R_b)$ :</p><div class="sbox">$$\Big(\sum a_nz^n\Big)\Big(\sum b_nz^n\Big) = \sum c_nz^n,\qquad c_n = \sum_{k=0}^na_kb_{n-k}.$$</div><p>Le rayon du produit est au moins $\min(R_a,R_b)$.</p>` },
  "o-a-se-continuite": { t: "Continuité de la somme d'une série entière", b: R`<p>$R$ rayon de $\sum a_nx^n$ :</p>$$S\in\mathcal C^0(]-R,R[).$$<div class="sbox">$$\sum a_nx^n\ \text{CVU sur}\ [0,R]\ \Longrightarrow\ S\in\mathcal C^0([0,R]).$$</div><p>Outils au bord : critère des séries alternées, convergence normale.</p>` },
  "o-a-unicite-dse": { t: "Unicité du développement", b: R`<div class="sbox">$$\sum a_nx^n = \sum b_nx^n\ \text{sur}\ ]-r,r[\ (r>0)\ \Longrightarrow\ \forall n,\ a_n = b_n.$$</div>` },
  "o-a-dl-coeffs": { t: "DSE et développement limité", b: R`<div class="sbox">$$f(x) = \sum_{n\geqslant0}a_nx^n\text{ sur }]-r,r[\ \Longrightarrow\ \forall p,\ f(x)\underset{x\to0}{=}\sum_{n=0}^pa_nx^n+o(x^p).$$</div>` }
});

LEMME.exercises([
{
  id: "o-an-2", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 2, time: "20 min",
  title: "Une fraction rationnelle développée en série entière",
  enonce: R`<p>Pour $x\neq-2$, on pose $f(x) = \dfrac{2x+5}{(x+2)^2}$.</p>
<ol>
<li>Décomposer $f(x)$ en éléments simples.</li>
<li>Montrer que $f$ est développable en série entière sur un intervalle $]-r,r[$ ($r>0$), donner ce développement et déterminer le plus grand ensemble $D$ sur lequel il est valable.</li>
<li><ol style="list-style:lower-alpha"><li>Soit $\sum a_nx^n$ de rayon $R>0$ et $g(x) = \sum_{n=0}^{+\infty}a_nx^n$ sur $]-R,R[$. Exprimer $a_p$ à l'aide de $g^{(p)}(0)$, en le démontrant.</li><li>En déduire le développement limité de $f$ à l'ordre $3$ en $0$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`$f(x) = \frac{2x+5}{(x+2)^2}$.`], but: R`Éléments simples, développement en série entière, lien coefficients-dérivées, développement limité.`, cles: {
    fact: R`On factorise par $2$ pour se ramener à $\frac1{1-u}$ :$$\frac1{x+2} = \frac12\cdot\frac1{1+\frac x2} = \frac12\sum_{n\geqslant0}\Big(-\frac x2\Big)^n\quad\text{si}\ \Big|\frac x2\Big|<1.$$`,
    der: R`$\frac1{(x+2)^2} = -\frac{d}{dx}\Big(\frac1{x+2}\Big)$ : on dérive terme à terme le développement précédent.`,
    bord: R`En $x = \pm2$ : $|a_n2^n| = \frac{n+5}4\to+\infty$, le terme général ne tend pas vers $0$.` } },
  steps: [
    { q: 1, t: "Éléments simples", h: R`<p>Pôle double en $-2$ : la forme est $\frac\alpha{x+2}+\frac\beta{(x+2)^2}$. On écrit le numérateur en puissances de $(x+2)$.</p>`, b: R`<p><b>Idée</b> : le dénominateur est $(x+2)^2$ ; on écrit le numérateur à l'aide de $x+2$ pour faire apparaître des fractions plus simples. On cherche $\alpha,\beta$ avec $2x+5 = \alpha(x+2)+\beta$ : en identifiant le coefficient de $x$, $\alpha = 2$ ; puis $2\cdot2+\beta = 5$, donc $\beta = 1$.</p>$$2x+5 = 2(x+2)+1,\qquad\text{donc}\qquad f(x) = \frac{2(x+2)+1}{(x+2)^2} = \frac2{x+2}+\frac1{(x+2)^2}.$$<p>Vérification en $x = 0$ : $\frac54 = \frac22+\frac14$ ✓.</p>`, rappels: ["o-a-elements-simples"] },
    { q: 2, t: "Développer 1/(x+2)", h: R`<p>On se ramène à la série géométrique en <b>factorisant par la constante</b> : $x+2 = 2(1+\frac x2)$.</p>`, b: R`<p>On factorise par la constante : $\frac1{x+2} = \frac12\cdot\frac1{1+\frac x2} = \frac12\cdot\frac1{1-(-\frac x2)}$. Série géométrique de raison $-\frac x2$, <span data-k="fact">valable pour $|x|< 2$</span> :</p>$$\frac1{x+2} = \frac12\sum_{n\geqslant0}\Big(-\frac x2\Big)^n,\quad\text{soit}$$<div class="sbox">$$\frac1{x+2} = \sum_{n\geqslant0}\frac{(-1)^n}{2^{n+1}}x^n.$$</div>`, rappels: ["o-a-dse-usuels"] },
    { q: 2, t: "Développer 1/(x+2)² en dérivant", h: R`<p>Une série entière se dérive terme à terme sur son intervalle ouvert, avec le même rayon.</p>`, b: R`<p><b>Théorème</b> : une série entière se dérive terme à terme sur son intervalle ouvert de convergence, avec le même rayon.</p><p>On part de l'étape précédente, $\frac1{x+2} = \sum_{n\geqslant0}\frac{(-1)^n}{2^{n+1}}x^n$ pour $|x|<2$. <span data-k="der">En dérivant</span> les deux membres : à gauche $\big((x+2)^{-1}\big)' = -(x+2)^{-2}$, à droite le terme $n = 0$ (constant) disparaît et $(x^n)' = nx^{n-1}$ :</p>$$-\frac1{(x+2)^2} = \sum_{n\geqslant1}\frac{(-1)^nn}{2^{n+1}}x^{n-1}.$$<p>On réindexe avec $m = n-1$ (donc $n = m+1$), puis on multiplie par $-1$ (ce qui transforme $(-1)^{m+1}$ en $(-1)^m$) :</p>$$\frac1{(x+2)^2} = \sum_{m\geqslant0}\frac{(-1)^m(m+1)}{2^{m+2}}x^m\quad(|x|<2).$$` , rappels: ["o-a-se-derivation"] },
    { q: 2, t: "Assembler et trouver D", h: R`<p>On additionne les deux séries (même rayon $2$). Pour $D$ : à l'intérieur ça marche, au bord on teste.</p>`, b: R`$$f(x) = \sum_{n\geqslant0}(-1)^n\Big(\frac2{2^{n+1}}+\frac{n+1}{2^{n+2}}\Big)x^n = \sum_{n\geqslant0}\frac{(-1)^n(n+5)}{2^{n+2}}x^n.$$<p><b>Contrôle :</b> $n = 0$ donne $\frac54 = f(0)$. Le rayon vaut $2$ (d'Alembert : $\frac{|a_{n+1}|}{|a_n|}\to\frac12$). <span data-k="bord">En $x = \pm2$ la série diverge grossièrement</span>.</p><div class="sbox">$$D = \,]-2,2[.$$</div>`, rappels: ["o-a-rayon-outils"] },
    { q: 3, t: "Coefficients et dérivées", h: R`<p>On dérive $p$ fois terme à terme : les termes de degré $< p$ disparaissent, et en $x = 0$ seuls survivent les termes de degré exactement $p$.</p>`, b: R`<p>Par dérivation terme à terme ($p$ fois) sur $]-R,R[$ :</p>$$g^{(p)}(x) = \sum_{n\geqslant p}n(n-1)\cdots(n-p+1)\,a_nx^{n-p}.$$<p>En $x = 0$, seul le terme $n = p$ reste :</p><div class="sbox">$$g^{(p)}(0) = p!\,a_p,\qquad a_p = \frac{g^{(p)}(0)}{p!}.$$</div>`, rappels: ["o-a-se-derivation"] },
    { q: 3, t: "Le développement limité", h: R`<p>$f$ est $\mathcal C^\infty$ et ses coefficients sont $\frac{f^{(k)}(0)}{k!}$ : Taylor-Young donne directement le DL en tronquant la série.</p>`, b: R`<p>Par la question 3a, le développement limité de $f$ en $0$ s'obtient en tronquant la série entière : les coefficients sont $a_n = \frac{(-1)^n(n+5)}{2^{n+2}}$ (étape 4). On calcule :</p><ul><li>$a_0 = \frac{5}{4}$ ;</li><li>$a_1 = \frac{-6}{8} = -\frac34$ ;</li><li>$a_2 = \frac{7}{16}$ ;</li><li>$a_3 = \frac{-8}{32} = -\frac14$.</li></ul><div class="sbox">$$f(x) = \frac54-\frac34x+\frac7{16}x^2-\frac14x^3+o(x^3).$$</div><p>Contrôle : $f(0) = \frac5{(2)^2} = \frac54$ ✓.</p>`, rappels: ["o-a-dl-coeffs"] }
  ],
  ctx: {
    "o-a-elements-simples": R`<p>$P(x) = 2x+5 = 2(x+2)+1$ : $\alpha = 2$, $\beta = P(-2) = 1$.</p>`,
    "o-a-dse-usuels": R`<p>$\frac1{1-u} = \sum u^n$ avec $u = -\frac x2$, valable pour $|x|<2$.</p>`,
    "o-a-se-derivation": R`<p>On dérive $\sum\frac{(-1)^n}{2^{n+1}}x^n$ sur $]-2,2[$ ; et en 3.a, on dérive $p$ fois $\sum a_nx^n$.</p>`,
    "o-a-rayon-outils": R`<p>$\frac{|a_{n+1}|}{|a_n|} = \frac{n+6}{2(n+5)}\to\frac12$, donc $R = 2$.</p>`,
    "o-a-dl-coeffs": R`<p>On tronque $\sum\frac{(-1)^n(n+5)}{2^{n+2}}x^n$ après $n = 3$.</p>`
  },
  piege: R`Oublier de réindexer après la dérivation, ou confondre $D$ et le domaine de définition de $f$ (qui est $\mathbb R\setminus\{-2\}$).`,
  methode: R`Éléments simples, puis géométrique en factorisant par la constante, puis dérivation pour les pôles doubles.`
},
{
  id: "o-an-19", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 2, time: "20 min",
  title: "Puissances de 1/(1 − z) par dérivation et par produit",
  enonce: R`<ol>
<li><ol style="list-style:lower-alpha"><li>Justifier, à l'aide du théorème de dérivation terme à terme, que la somme d'une série entière réelle est dérivable sur son intervalle ouvert de convergence (on admet que $\sum a_nx^n$ et $\sum na_nx^n$ ont le même rayon).</li><li>En déduire le développement en série entière en $0$ de $x\mapsto\dfrac1{(1-x)^2}$.</li></ol></li>
<li><ol style="list-style:lower-alpha"><li>Donner le développement en série entière en $0$ de $z\mapsto\dfrac1{1-z}$ ($z\in\mathbb C$).</li><li>Rappeler le produit de Cauchy de deux séries entières.</li><li>En déduire les développements de $z\mapsto\dfrac1{(1-z)^2}$ puis de $z\mapsto\dfrac1{(1-z)^3}$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`Le développement $\frac1{1-z} = \sum z^n$ pour $|z|<1$.`], but: R`Obtenir les puissances de $\frac1{1-z}$ de deux façons.`, cles: {
    unif: R`Sur un segment $[-r,r]\subset\,]-R,R[$ : $|na_nx^{n-1}|\leqslant n|a_n|r^{n-1}$, terme d'une série convergente (car $r< R$). Convergence normale.`,
    somme: R`$$\sum_{k=0}^n(k+1) = 1+2+\dots+(n+1) = \frac{(n+1)(n+2)}2.$$` } },
  steps: [
    { q: 1, t: "Dérivation terme à terme", h: R`<p>Le théorème demande la convergence uniforme de la série des dérivées. On l'obtient sur chaque segment $[-r,r]$ avec $r< R$, car la série dérivée a le même rayon.</p>`, b: R`<p>Soit $f_n(x) = a_nx^n$, de classe $\mathcal C^1$, et $f_n'(x) = na_nx^{n-1}$. La série $\sum na_nx^{n-1}$ a le rayon $R$. Pour $0< r< R$, <span data-k="unif">elle converge normalement sur $[-r,r]$</span>. Donc $S = \sum f_n$ est $\mathcal C^1$ sur $[-r,r]$, pour tout $r< R$, donc sur $]-R,R[$, et</p><div class="sbox">$$S'(x) = \sum_{n\geqslant1}na_nx^{n-1}.$$</div>`, rappels: ["o-a-se-derivation"] },
    { q: 1, t: "Dériver la série géométrique", h: R`<p>$\frac1{(1-x)^2}$ est la dérivée de $\frac1{1-x}$.</p>`, b: R`<p>Pour $|x|<1$, on connaît la série géométrique : $\frac1{1-x} = \sum_{n\geqslant0}x^n$, de rayon $1$. Par Q1a, on peut dériver terme à terme sur $]-1,1[$ :</p><ul><li>à gauche : $\Big(\frac1{1-x}\Big)' = \big((1-x)^{-1}\big)' = -(1-x)^{-2}\times(-1) = \frac1{(1-x)^2}$ ;</li><li>à droite : $(x^n)' = nx^{n-1}$, et le terme $n = 0$ disparaît.</li></ul><p>On réindexe ensuite avec $m = n-1$ :</p><div class="sbox">$$\frac1{(1-x)^2} = \sum_{n\geqslant1}nx^{n-1} = \sum_{m\geqslant0}(m+1)x^m\quad(|x|<1).$$</div><p>Vérification : $\frac1{(1-x)^2} = 1+2x+3x^2+\dots$, et en $x = 0{,}1$ : $\frac1{0{,}81}\approx1{,}2346$, contre $1+0{,}2+0{,}03+0{,}004 = 1{,}234$ ✓.</p>` },
    { q: 2, t: "Série géométrique complexe", h: R`<p>Somme partielle d'une suite géométrique : $\sum_{k=0}^nz^k = \frac{1-z^{n+1}}{1-z}$, et $z^{n+1}\to0$ si $|z|<1$.</p>`, b: R`<p><b>Somme géométrique finie</b> : pour $z\neq1$, $\sum_{k=0}^nz^k = \frac{1-z^{n+1}}{1-z}$ (on vérifie en multipliant par $1-z$ : tout se télescope).</p><p>Si $|z|<1$ : $|z^{n+1}| = |z|^{n+1}\to0$, donc $z^{n+1}\to0$ et la somme partielle tend vers $\frac1{1-z}$.</p><div class="sbox">$$\frac1{1-z} = \sum_{n\geqslant0}z^n\quad(|z|<1),\qquad R = 1.$$</div><p>Le rayon est exactement $1$ : pour $|z|\geqslant1$, $|z^n|\geqslant1$ ne tend pas vers $0$, la série diverge grossièrement.</p>` },
    { q: 2, t: "Produit de Cauchy", h: R`<p>On multiplie deux séries comme deux polynômes, en regroupant par degré total.</p>`, b: R`<p><b>Produit de Cauchy de deux séries entières</b>. Si $\sum a_nz^n$ et $\sum b_nz^n$ ont pour rayons $R_a$ et $R_b$, alors pour $|z|<\min(R_a,R_b)$ :</p><div class="sbox">$$\Big(\sum a_nz^n\Big)\Big(\sum b_nz^n\Big) = \sum c_nz^n,\qquad c_n = \sum_{k=0}^na_kb_{n-k}.$$</div><p>Lecture : on développe le produit comme pour deux polynômes, et on regroupe les termes de même puissance $z^n$ ; ils viennent des couples $(a_kz^k)(b_{n-k}z^{n-k})$, $k = 0,\dots,n$.</p><p>Exemple : $c_2 = a_0b_2+a_1b_1+a_2b_0$.</p>`, rappels: ["o-a-cauchy-se"] },
    { q: 2, t: "Les carré et cube", h: R`<p>$\frac1{(1-z)^2} = \frac1{1-z}\cdot\frac1{1-z}$ : tous les coefficients valent $1$, donc $c_n$ compte les termes. Pour le cube, on multiplie encore par $\frac1{1-z}$.</p>`, b: R`<p>Avec $a_k = b_k = 1$ : $c_n = \sum_{k=0}^n1 = n+1$, donc pour $|z|<1$</p>$$\frac1{(1-z)^2} = \sum_{n\geqslant0}(n+1)z^n.$$<p>Puis avec $a_k = k+1$ et $b_k = 1$ : $c_n = \sum_{k=0}^n(k+1) = $ <span data-k="somme">$\frac{(n+1)(n+2)}2$</span>.</p><div class="sbox">$$\frac1{(1-z)^3} = \sum_{n\geqslant0}\frac{(n+1)(n+2)}2z^n\quad(|z|<1).$$</div><p><b>Contrôle réel :</b> en dérivant deux fois $\frac1{1-x}$, on trouve $\frac2{(1-x)^3} = \sum n(n-1)x^{n-2}$, ce qui redonne le même coefficient.</p>`, rappels: ["o-a-cauchy-se"] }
  ],
  ctx: { "o-a-se-derivation": R`<p>Appliqué à $\sum x^n$ sur $]-1,1[$.</p>`, "o-a-cauchy-se": R`<p>$R_a = R_b = 1$, donc les égalités sont valables pour $|z|<1$.</p>` },
  piege: R`Dériver en variable complexe : le théorème de dérivation est énoncé pour une variable réelle. Pour $z$ complexe, on passe par le produit de Cauchy.`,
  methode: R`Puissances de $\frac1{1-z}$ : dérivation (cas réel) ou produit de Cauchy (cas complexe).`
},
{
  id: "o-an-20", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 2, time: "20 min",
  title: "Trois rayons de convergence",
  enonce: R`<ol>
<li>Donner la définition du rayon de convergence d'une série entière complexe.</li>
<li>Déterminer le rayon de convergence de :<ol style="list-style:lower-alpha"><li>$\displaystyle\sum\frac{(n!)^2}{(2n)!}z^{3n}$ ;</li><li>$\displaystyle\sum2^{(-1)^nn}z^n$ ;</li><li>$\displaystyle\sum\sin(n)\,z^n$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`Trois séries entières, dont une « lacunaire » ($z^{3n}$).`], but: R`Trois rayons, avec trois méthodes différentes.`, cles: {
    lac: R`La série ne contient que des puissances multiples de $3$ : les coefficients $a_n$ « classiques » sont nuls deux fois sur trois, et $\frac{a_{n+1}}{a_n}$ n'a pas de sens. On applique d'Alembert à la série <b>numérique</b> $\sum|u_n(z)|$.`,
    sin: R`$\sin n\not\to0$ : sinon $\sin(n+1) = \sin n\cos1+\cos n\sin1$ donnerait $\cos n\to0$, puis $\sin^2n+\cos^2n\to0$, absurde.` } },
  steps: [
    { q: 1, t: "La définition", h: R`<p>Le rayon est la frontière entre « termes bornés » et « termes non bornés ».</p>`, b: R`<p>Le rayon de convergence de $\sum a_nz^n$ est</p><div class="sbox">$$R = \sup\{r\geqslant0 : (a_nr^n)_n\ \text{est bornée}\}\in[0,+\infty].$$</div><p>Ce qu'il faut savoir en faire :</p><ul><li>si $|z|\lt R$ : la série converge absolument ;</li><li>si $|z|>R$ : $(a_nz^n)$ n'est pas bornée, donc ne tend pas vers $0$ : divergence grossière ;</li><li>si $|z| = R$ : on ne peut rien dire en général, il faut étudier à part.</li></ul>`, rappels: ["o-a-rayon-def"] },
    { q: 2, t: "(a) D'Alembert sur la série numérique", h: R`<p>Série <span data-k="lac">lacunaire</span> : on fixe $z\neq0$ et on applique d'Alembert à $u_n = \frac{(n!)^2}{(2n)!}|z|^{3n}$.</p>`, b: R`$$\frac{u_{n+1}}{u_n} = \frac{(n+1)^2}{(2n+2)(2n+1)}|z|^3\xrightarrow[n\to\infty]{}\frac{|z|^3}4.$$<ul><li>$|z|^3<4$ : convergence absolue.</li><li>$|z|^3>4$ : le rapport tend vers une limite $>1$, $u_n\to+\infty$, divergence grossière.</li></ul><div class="sbox">$$R = \sqrt[3]4\approx1{,}59.$$</div>`, rappels: ["o-a-rayon-outils"] },
    { q: 2, t: "(b) Deux sous-suites très différentes", h: R`<p>$a_n = 2^n$ si $n$ pair, $2^{-n}$ si $n$ impair. Le comportement est dicté par les termes les plus gros, donc les termes pairs.</p>`, b: R`<p>Ici $a_n = 2^{(-1)^nn}$ vaut $2^n$ pour $n$ pair et $2^{-n}$ pour $n$ impair : deux comportements très différents. On encadre $R$ par deux inégalités.</p><ul><li><b>$R\geqslant\frac12$</b> : dans tous les cas $a_n\leqslant2^n$. Si $|z|<\frac12$, $|a_nz^n|\leqslant2^n|z|^n = (2|z|)^n$, terme d'une série géométrique de raison $2|z|<1$ : convergence.</li><li><b>$R\leqslant\frac12$</b> : si $|z|>\frac12$, pour les indices pairs $n = 2m$, $|a_nz^n| = 2^{2m}|z|^{2m} = (2|z|)^{2m}\to+\infty$. Le terme général n'est pas borné : $|z|\geqslant R$.</li></ul><div class="sbox">$$R = \frac12.$$</div><p>Ce sont les termes pairs, les plus gros, qui décident.</p>`, rappels: ["o-a-rayon-outils"] },
    { q: 2, t: "(c) Borné mais pas de limite nulle", h: R`<p>$|\sin n|\leqslant1$ donne $R\geqslant1$. Et si $\sin n$ ne tend pas vers $0$, la série diverge en $z = 1$, donc $R\leqslant1$.</p>`, b: R`<ul><li><b>$R\geqslant1$</b> : $|\sin n|\leqslant1$, donc $|\sin(n)z^n|\leqslant|z|^n$. Pour $|z|<1$, c'est le terme d'une série géométrique convergente : la série converge, donc $R\geqslant1$.</li><li><b>$R\leqslant1$</b> : en $z = 1$, le terme général est $\sin n$, et <span data-k="sin">$\sin n$ ne tend pas vers $0$</span> (sinon $\sin(n+1)-\sin(n-1) = 2\cos n\sin1$ tendrait vers $0$, donc $\cos n\to0$, et $\cos^2n+\sin^2n = 1$ serait contredit). La série $\sum\sin n$ diverge grossièrement. Si on avait $R>1$, elle convergerait en $z = 1$.</li></ul><div class="sbox">$$R = 1.$$</div>`, rappels: ["o-a-rayon-outils"] }
  ],
  ctx: { "o-a-rayon-def": R`<p>Utilisé sous la forme : « $(a_nr^n)$ bornée $\Rightarrow R\geqslant r$ ; non bornée $\Rightarrow R\leqslant r$ ».</p>`, "o-a-rayon-outils": R`<p>(a) d'Alembert sur $\sum|u_n(z)|$ ; (b) bornes sur les sous-suites paire et impaire ; (c) comparaison et un point de divergence.</p>` },
  piege: R`Pour (a), écrire « $\frac{a_{n+1}}{a_n}\to\frac14$ donc $R = 4$ » : faux, il y a $z^{3n}$. Et pour (b), regarder seulement les termes impairs.`,
  methode: R`Série lacunaire : d'Alembert sur la série numérique. Coefficients irréguliers : majorer et minorer séparément.`
},
{
  id: "o-an-21", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 2, time: "15 min",
  title: "Coefficients bornés, série divergente",
  enonce: R`<ol>
<li>Donner la définition du rayon de convergence d'une série entière complexe.</li>
<li>Soit $(a_n)$ une suite <span data-k="bornee">bornée</span> telle que $\sum a_n$ diverge. Quel est le rayon de $\sum a_nz^n$ ?</li>
<li>Quel est le rayon de $\displaystyle\sum_{n\geqslant1}n^{(-1)^n}\sin\Big(\frac1n\Big)z^n$ ?</li>
</ol>`,
  decode: { donnees: [R`$(a_n)$ bornée et $\sum a_n$ divergente.`], but: R`Un rayon déterminé par deux informations, puis un exemple.`, cles: {
    bornee: R`$\exists M,\ \forall n,\ |a_n|\leqslant M$. Donc $(a_n\cdot1^n)$ est bornée.`,
    par: R`Pour $n = 2m$ pair : $a_{2m} = 2m\sin\frac1{2m}\to1$ (car $\sin x\sim x$). Pour $n$ impair : $a_n = \frac1n\sin\frac1n\sim\frac1{n^2}$.` } },
  steps: [
    { q: 1, t: "Définition", h: R`<p>Même définition que d'habitude.</p>`, b: R`<p>Le rayon de convergence de $\sum a_nz^n$ est</p><div class="sbox">$$R = \sup\{r\geqslant0 : (a_nr^n)\ \text{bornée}\}\in[0,+\infty].$$</div><p>La série converge absolument pour $|z|\lt R$ et diverge grossièrement pour $|z|>R$. Sur le cercle $|z| = R$, tout peut arriver.</p><p>Exemple : pour $\sum z^n$, $(r^n)$ est bornée exactement si $r\leqslant1$ : $R = 1$.</p>`, rappels: ["o-a-rayon-def"] },
    { q: 2, t: "Deux inégalités", h: R`<p>« <span data-k="bornee">Bornée</span> » dit que $r = 1$ est dans l'ensemble : $R\geqslant1$. « $\sum a_n$ diverge » dit que la série diverge en $z = 1$ : $R\leqslant1$.</p>`, b: R`<p>On montre deux inégalités.</p><ul><li><b>$R\geqslant1$</b> : $(a_n)$ est <span data-k="bornee">bornée</span>, autrement dit $(a_n1^n)$ est bornée. Le nombre $r = 1$ appartient donc à l'ensemble dont $R$ est la borne supérieure, et $R\geqslant1$.</li><li><b>$R\leqslant1$</b> : raisonnons par l'absurde. Si $R>1$, alors $z = 1$ vérifie $|z|\lt R$, et la série $\sum a_n1^n = \sum a_n$ convergerait (absolument). C'est contraire à l'hypothèse « $\sum a_n$ diverge ».</li></ul><div class="sbox">$$R = 1.$$</div>`, rappels: ["o-a-rayon-outils"] },
    { q: 3, t: "Termes pairs", h: R`<p>Pour $n = 2m$, $(-1)^n = 1$ : $a_{2m} = 2m\sin\frac1{2m}$. Utilise $\sin u\sim u$.</p>`, b: R`<p>Le facteur $n^{(-1)^n}$ change selon la parité de $n$ : <span data-k="par">on sépare $n$ pair et $n$ impair</span>.</p><p>Pour $n$ pair, $(-1)^n = 1$, donc $n^{(-1)^n} = n$ et</p>$$a_n = n\sin\frac1n = \frac{\sin(1/n)}{1/n}\xrightarrow[n\to\infty]{}1.$$<p>En effet, avec $u = \frac1n\to0$, on utilise la limite classique $\frac{\sin u}u\to1$ (c'est la dérivée de $\sin$ en $0$, égale à $\cos0 = 1$).</p>` },
    { q: 3, t: "Termes impairs et conclusion", h: R`<p>Pour $n$ impair, $n^{-1} = \frac1n$ : $a_n = \frac1n\sin\frac1n$.</p>`, b: R`<p>Pour $n$ impair, $n^{(-1)^n} = n^{-1}$ : $a_n = \frac1n\sin\frac1n$, et $0\leqslant a_n\leqslant\frac1n\to0$.</p><ul><li><b>Bornée</b> : $|\sin u|\leqslant|u|$ donne $|a_n|\leqslant n\cdot\frac1n = 1$ dans tous les cas.</li><li><b>$\sum a_n$ diverge</b> : les termes pairs tendent vers $1$, donc $a_n\not\to0$ : divergence grossière.</li></ul><p>Par la question 2 :</p><div class="sbox">$$R = 1.$$</div>` }
  ],
  ctx: { "o-a-rayon-def": R`<p>Avec $r = 1$ : $(a_n)$ bornée.</p>`, "o-a-rayon-outils": R`<p>Un point de divergence ($z = 1$) donne $R\leqslant1$.</p>` },
  piege: R`Appliquer d'Alembert : $\frac{a_{n+1}}{a_n}$ oscille entre $0$ et $+\infty$, il n'a pas de limite.`,
  methode: R`Rayon $= 1$ dès que les coefficients sont bornés et que la série diverge en $1$.`
},
{
  id: "o-an-22", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 3, time: "25 min",
  title: "Somme de deux logarithmes et comportement au bord",
  enonce: R`<ol>
<li>Que peut-on dire du rayon de convergence de la somme de deux séries entières ? Le démontrer.</li>
<li>Développer en série entière en $0$ la fonction $f : x\mapsto\ln(1-x)+\ln(1+3x)$, en précisant le rayon.</li>
<li>La série obtenue converge-t-elle en $x = \frac14$ ? En $x = \frac13$ ? En $x = -\frac13$ ? En cas de convergence, sa somme est-elle continue en ces points, et vaut-elle $f(x)$ ?</li>
</ol>`,
  decode: { donnees: [R`$f(x) = \ln(1-x)+\ln(1+3x)$, définie pour $-\frac13< x<1$.`], but: R`Rayon d'une somme, un développement, puis l'étude au bord.`, cles: {
    trois: R`$\ln(1+3x) = \ln(1+u)$ avec $u = 3x$, valable pour $|u|<1$, soit $|x|<\frac13$.`,
    alt: R`Pour $x\in[0,\frac13]$, $\frac{(3x)^n}n$ est positive, décroissante en $n$ (car $3x\leqslant1$), de limite nulle.` } },
  steps: [
    { q: 1, t: "Minoration du rayon de la somme", h: R`<p>Là où les deux séries convergent, leur somme converge. Et si les rayons sont différents, la plus « courte » impose sa divergence.</p>`, b: R`<p>Notons $R_a$, $R_b$ les rayons et $R$ celui de $\sum(a_n+b_n)z^n$. Si $|z|<\min(R_a,R_b)$, les deux séries convergent donc leur somme aussi : $R\geqslant\min(R_a,R_b)$.</p><p>Si $R_a< R_b$ et $R_a<|z|< R_b$ : $\sum b_nz^n$ converge et $\sum a_nz^n$ diverge, donc la somme diverge. D'où $R\leqslant R_a$, et</p><div class="sbox">$$R\geqslant\min(R_a,R_b),\qquad R = \min(R_a,R_b)\ \text{si}\ R_a\neq R_b.$$</div><p><b>Exemple d'inégalité stricte :</b> $a_n = 1$, $b_n = -1$ : $R_a = R_b = 1$ mais la somme est nulle, $R = +\infty$.</p>`, rappels: ["o-a-rayon-somme"] },
    { q: 2, t: "Les deux développements", h: R`<p>On utilise $\ln(1+u) = \sum\frac{(-1)^{n-1}}nu^n$ avec $u = -x$, puis avec $u = 3x$.</p>`, b: R`$$\ln(1-x) = -\sum_{n\geqslant1}\frac{x^n}n\ (R = 1),\qquad\ln(1+3x) = \sum_{n\geqslant1}\frac{(-1)^{n-1}3^n}nx^n\ \Big(R = \frac13\Big).$$<p>Les rayons $1$ et <span data-k="trois">$\frac13$</span> sont différents :</p><div class="sbox">$$f(x) = \sum_{n\geqslant1}\frac{(-1)^{n-1}3^n-1}n\,x^n,\qquad R = \frac13.$$</div>`, rappels: ["o-a-dse-usuels", "o-a-rayon-somme"] },
    { q: 3, t: "En x = 1/4 et x = −1/3", h: R`<p>$\frac14<\frac13$ : à l'intérieur. En $-\frac13$, on regarde chaque morceau séparément.</p>`, b: R`<ul><li>$x = \frac14$ : $|x|< R$, convergence (absolue), et la somme vaut $f(\frac14)$ ; elle est continue en ce point (intérieur au disque).</li><li>$x = -\frac13$ : $\frac{(-1)^{n-1}3^n}n\big(-\frac13\big)^n = -\frac1n$, et $-\frac1n\big(-\frac13\big)^n$ est le terme d'une série convergente. Somme d'une divergente et d'une convergente : <b>divergence</b>.</li></ul>` },
    { q: 3, t: "En x = 1/3", h: R`<p>Au bord droit, la partie $\ln(1+3x)$ donne une série alternée : convergente mais pas absolument.</p>`, b: R`<p>On remplace $x = \frac13$ dans chacune des deux séries.</p><ul><li><b>Série de $\ln(1+3x)$</b> : $\frac{(-1)^{n-1}3^n}n\Big(\frac13\Big)^n = \frac{(-1)^{n-1}3^n}{n\,3^n} = \frac{(-1)^{n-1}}n$. Critère des séries alternées : $\frac1n$ est positive, décroissante, de limite nulle, donc $\sum\frac{(-1)^{n-1}}n$ converge.</li><li><b>Série de $\ln(1-x)$</b> : $-\frac1n\Big(\frac13\Big)^n$, et $\Big|\frac1n\big(\frac13\big)^n\Big|\leqslant\big(\frac13\big)^n$, terme d'une série géométrique convergente.</li></ul><p>Somme de deux séries convergentes : la série de $f$ <b>converge</b> en $x = \frac13$.</p>` },
    { q: 3, t: "Continuité en 1/3 et valeur", h: R`<p>Pour la continuité au bord, on cherche une convergence uniforme sur $[0,\frac13]$. On traite les deux morceaux : normale pour l'un, critère des séries alternées pour l'autre.</p>`, b: R`<ul><li>$\sum\frac{x^n}n$ : $\big|\frac{x^n}n\big|\leqslant\frac1{n3^n}$ sur $[0,\frac13]$, convergence normale.</li><li>$\sum\frac{(-1)^{n-1}(3x)^n}n$ : <span data-k="alt">série alternée</span> pour chaque $x\in[0,\frac13]$, donc $|R_n(x)|\leqslant\frac{(3x)^{n+1}}{n+1}\leqslant\frac1{n+1}$, borne uniforme qui tend vers $0$.</li></ul><p>Convergence uniforme sur $[0,\frac13]$ : la somme $T$ est continue sur $[0,\frac13]$. Comme $T = f$ sur $[0,\frac13[$ et que $f$ est continue en $\frac13$ :</p><div class="sbox">$$T\Big(\frac13\Big) = \lim_{x\to1/3^-}f(x) = \ln\frac23+\ln2 = \ln\frac43.$$</div>`, rappels: ["o-a-se-continuite", "o-a-alternee"] }
  ],
  ctx: { "o-a-rayon-somme": R`<p>$R_a = 1\neq R_b = \frac13$, donc $R = \frac13$.</p>`, "o-a-dse-usuels": R`<p>$\ln(1+u)$ avec $u = -x$ et $u = 3x$.</p>`, "o-a-se-continuite": R`<p>Convergence uniforme sur $[0,\frac13]$, bord compris.</p>`, "o-a-alternee": R`<p>$a_n = \frac{(3x)^n}n$ avec $0\leqslant3x\leqslant1$ : décroissante, de limite nulle.</p>` },
  piege: R`Affirmer que la somme vaut $f(\frac13)$ « parce que la série converge en $\frac13$ » : il faut un argument de continuité (convergence uniforme jusqu'au bord).`,
  methode: R`Au bord du disque : étudier la convergence de la série numérique, puis la continuité par convergence uniforme sur $[0,R]$.`
},
{
  id: "o-an-23", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 2, time: "20 min",
  title: "Série dérivée et régularité de la somme",
  enonce: R`<p>Soit $(a_n)$ une suite complexe, jamais nulle, telle que $\Big(\dfrac{|a_{n+1}|}{|a_n|}\Big)$ admette une limite $\ell\in[0,+\infty]$.</p>
<ol>
<li>Montrer que $\sum a_nx^n$ et $\sum(n+1)a_{n+1}x^n$ ont le même rayon de convergence $R$.</li>
<li>Montrer que $S : x\mapsto\sum_{n=0}^{+\infty}a_nx^n$ est de classe $\mathcal C^1$ sur $]-R,R[$.</li>
</ol>`,
  decode: { donnees: [R`$\frac{|a_{n+1}|}{|a_n|}\to\ell$.`], but: R`Le rayon de la série dérivée, puis la régularité par le théorème de dérivation.`, cles: {
    b: R`On pose $b_n = (n+1)a_{n+1}$ : $$\frac{|b_{n+1}|}{|b_n|} = \frac{n+2}{n+1}\cdot\frac{|a_{n+2}|}{|a_{n+1}|}\xrightarrow[n\to\infty]{}1\cdot\ell = \ell.$$` } },
  steps: [
    { q: 1, t: "Même limite des rapports", h: R`<p>Le facteur $\frac{n+2}{n+1}$ tend vers $1$ : il ne change pas la limite du rapport, donc pas le rayon.</p>`, b: R`<p>Par d'Alembert, $\sum a_nx^n$ a pour rayon $R = \frac1\ell$. Avec <span data-k="b">$b_n = (n+1)a_{n+1}$</span>, $\frac{|b_{n+1}|}{|b_n|}\to\ell$, donc $\sum b_nx^n$ a aussi pour rayon $\frac1\ell$.</p><div class="sbox">$$R_{\sum a_nx^n} = R_{\sum(n+1)a_{n+1}x^n} = R.$$</div>`, rappels: ["o-a-rayon-outils"] },
    { q: 2, t: "Convergence normale de la série dérivée sur un segment", h: R`<p>Pour dériver terme à terme, on veut la convergence uniforme de $\sum f_n'$. Sur $[-r,r]$ avec $r< R$, elle est normale.</p>`, b: R`<p>Soit $f_n(x) = a_nx^n$, $\mathcal C^1$ sur $\mathbb R$, avec $f_n'(x) = na_nx^{n-1}$, et $\sum f_n' = \sum(n+1)a_{n+1}x^n$ a pour rayon $R$. Pour $0< r< R$ et $|x|\leqslant r$ :</p>$$|f_{n+1}'(x)| = (n+1)|a_{n+1}||x|^n\leqslant(n+1)|a_{n+1}|r^n,$$<p>terme d'une série convergente car $r< R$. Convergence normale sur $[-r,r]$.</p>`, rappels: ["o-a-normale-unif"] },
    { q: 2, t: "Conclure", h: R`<p>Le théorème de dérivation sur chaque $[-r,r]$, puis on fait varier $r$.</p>`, b: R`<p>On applique le <b>théorème de dérivation terme à terme</b> : si les $f_n$ sont $\mathcal C^1$ sur un intervalle $I$, si $\sum f_n$ converge simplement sur $I$ et si $\sum f_n'$ converge uniformément sur $I$, alors $S = \sum f_n$ est $\mathcal C^1$ sur $I$ et $S' = \sum f_n'$.</p><p>Les hypothèses sont vérifiées sur chaque segment $I = [-r,r]$ avec $0\lt r\lt R$ : convergence simple (car $r\lt R$) et convergence normale, donc uniforme, de $\sum f_n'$ (étape précédente). Donc $S$ est $\mathcal C^1$ sur $[-r,r]$.</p><p>Tout $x\in]-R,R[$ est dans un tel segment (prendre $r = \frac{|x|+R}2$, ou $r = |x|+1$ si $R = +\infty$). Être $\mathcal C^1$ est une propriété locale :</p><div class="sbox">$$S\in\mathcal C^1(]-R,R[),\qquad S'(x) = \sum_{n\geqslant0}(n+1)a_{n+1}x^n.$$</div>`, rappels: ["o-a-serie-c1"] }
  ],
  ctx: { "o-a-rayon-outils": R`<p>D'Alembert pour $(a_n)$ et pour $(b_n)$, avec la même limite $\ell$.</p>`, "o-a-normale-unif": R`<p>$\alpha_n = (n+1)|a_{n+1}|r^n$ sur $[-r,r]$.</p>`, "o-a-serie-c1": R`<p>Sur chaque $[-r,r]$, $r< R$ ; la dérivabilité étant locale, on obtient $]-R,R[$.</p>` },
  piege: R`Chercher la convergence uniforme sur tout $]-R,R[$ : elle peut être fausse. On travaille sur des segments $[-r,r]$.`,
  methode: R`Régularité de la somme d'une série entière : convergence normale sur $[-r,r]$ pour tout $r< R$.`
},
{
  id: "o-an-24", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 3, time: "25 min",
  title: "sin √x / √x prolongée en une fonction C∞",
  enonce: R`<ol>
<li>Déterminer le rayon de convergence de $\displaystyle\sum\frac{(-1)^nx^n}{(2n+1)!}$. On note $T(x)$ sa somme.</li>
<li>Rappeler sans démonstration les développements en série entière de $\sin$ et $\operatorname{sh}$, avec leurs rayons.</li>
<li><ol style="list-style:lower-alpha"><li>Exprimer $T(x)$ à l'aide de fonctions usuelles, selon le signe de $x$.</li><li>Soit $g$ définie par $g(0) = 1$, $g(x) = \dfrac{\sin\sqrt x}{\sqrt x}$ si $x>0$ et $g(x) = \dfrac{\operatorname{sh}\sqrt{-x}}{\sqrt{-x}}$ si $x<0$. Montrer que $g$ est de classe $\mathcal C^\infty$ sur $\mathbb R$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`$T(x) = \sum_{n\geqslant0}\frac{(-1)^nx^n}{(2n+1)!}$.`], but: R`Identifier $T$, puis l'utiliser pour prouver la régularité d'une fonction définie par morceaux.`, cles: {
    xpos: R`Pour $x = t^2$ avec $t>0$ : $x^n = t^{2n}$, et $\frac{\sin t}t = \sum\frac{(-1)^nt^{2n}}{(2n+1)!}$.`,
    xneg: R`Pour $x = -t^2$ : $(-1)^nx^n = t^{2n}$, et $\frac{\operatorname{sh}t}t = \sum\frac{t^{2n}}{(2n+1)!}$.` } },
  steps: [
    { q: 1, t: "Rayon infini", h: R`<p>Coefficients avec une factorielle : d'Alembert.</p>`, b: R`<p><b>Règle de d'Alembert pour les séries entières</b> : si $\frac{|a_{n+1}|}{|a_n|}\to\ell$, alors $R = \frac1\ell$ (avec $R = +\infty$ si $\ell = 0$).</p><p>Ici $a_n = \frac{(-1)^n}{(2n+1)!}$. Comme $(2n+3)! = (2n+3)(2n+2)\cdot(2n+1)!$ :</p>$$\frac{|a_{n+1}|}{|a_n|} = \frac{(2n+1)!}{(2n+3)!} = \frac1{(2n+3)(2n+2)}\xrightarrow[n\to\infty]{}0.$$<div class="sbox">$$R = +\infty.$$</div><p>La série converge pour tout réel $x$.</p>`, rappels: ["o-a-rayon-outils"] },
    { q: 2, t: "Développements usuels", h: R`<p>À savoir par cœur.</p>`, b: R`<p>Ce sont deux développements du cours, valables pour tout réel $t$ :</p><div class="sbox">$$\sin t = \sum_{n\geqslant0}\frac{(-1)^nt^{2n+1}}{(2n+1)!},\qquad\operatorname{sh}t = \sum_{n\geqslant0}\frac{t^{2n+1}}{(2n+1)!},\qquad R = +\infty.$$</div><p>Ils ne gardent que les puissances impaires ($\sin$ et $\operatorname{sh}$ sont impaires), avec des signes alternés pour $\sin$ et tous positifs pour $\operatorname{sh}$. Début : $\sin t = t-\frac{t^3}6+\dots$, $\operatorname{sh}t = t+\frac{t^3}6+\dots$</p>`, rappels: ["o-a-dse-usuels"] },
    { q: 3, t: "Identifier T", h: R`<p>Il faut faire apparaître $t^{2n}$ à partir de $x^n$ : on pose $x = t^2$ si $x>0$, $x = -t^2$ si $x<0$. On divise ensuite la série de $\sin t$ par $t$.</p>`, b: R`<ul><li><span data-k="xpos">$x>0$, $t = \sqrt x$</span> : $T(x) = \sum\frac{(-1)^nt^{2n}}{(2n+1)!} = \frac{\sin t}t = \frac{\sin\sqrt x}{\sqrt x}$.</li><li><span data-k="xneg">$x<0$, $t = \sqrt{-x}$</span> : $x = -t^2$, donc $(-1)^nx^n = (-1)^n(-1)^nt^{2n} = t^{2n}$, et $T(x) = \sum\frac{t^{2n}}{(2n+1)!} = \frac{\operatorname{sh}t}t = \frac{\operatorname{sh}\sqrt{-x}}{\sqrt{-x}}$.</li><li>$x = 0$ : $T(0) = 1$.</li></ul><div class="sbox">$$T = g\ \text{sur}\ \mathbb R.$$</div>` },
    { q: 3, t: "Régularité", h: R`<p>Montrer directement que $g$ est $\mathcal C^\infty$ en $0$ par les morceaux serait pénible. Mais $g$ est la somme d'une série entière de rayon infini, qui est $\mathcal C^\infty$ sur $\mathbb R$.</p>`, b: R`<p>$g = T$ et $T$ est la somme d'une série entière de rayon $+\infty$ : elle est de classe $\mathcal C^\infty$ sur $\mathbb R$.</p><div class="sbox">$$g\in\mathcal C^\infty(\mathbb R),\qquad g^{(k)}(0) = k!\,\frac{(-1)^k}{(2k+1)!}.$$</div>` + GRAPH({ w: 430, h: 220, x: [-6, 40], y: [-0.4, 3.5], xt: [-5, 10, 20, 30, 40], yt: [1, 2, 3], xl: "x", curves: [{ f: x => x > 0 ? Math.sin(Math.sqrt(x)) / Math.sqrt(x) : x < 0 ? Math.sinh(Math.sqrt(-x)) / Math.sqrt(-x) : 1, c: "b" }] }, R`Le graphe de $g$ : aucune cassure en $0$, alors qu'elle est définie par deux formules différentes.`, "Graphe de g"), rappels: ["o-a-se-derivation"] }
  ],
  ctx: { "o-a-rayon-outils": R`<p>D'Alembert : le rapport tend vers $0$, donc $R = +\infty$.</p>`, "o-a-dse-usuels": R`<p>On utilise les séries de $\sin$ et $\operatorname{sh}$ divisées par $t$.</p>`, "o-a-se-derivation": R`<p>$T$ est $\mathcal C^\infty$ sur $]-R,R[ = \mathbb R$.</p>` },
  piege: R`Oublier de traiter $x<0$ (où $\sqrt x$ n'existe pas) : c'est là qu'intervient $\operatorname{sh}$.`,
  methode: R`Fonction définie par morceaux autour de $0$ : la reconnaître comme somme d'une série entière.`
},
{
  id: "o-an-47", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 2, time: "20 min",
  title: "Deux séries entières à sommer",
  enonce: R`<p>Pour chacune des séries entières réelles suivantes, déterminer le rayon de convergence et la somme sur l'intervalle ouvert de convergence :</p>
<ol>
<li>$\displaystyle\sum_{n\geqslant1}\frac{2^nx^{2n}}n$ ;</li>
<li>$\sum a_nx^n$ avec $a_{2n} = 3^n$ et $a_{2n+1} = 2^{n+1}$.</li>
</ol>`,
  decode: { donnees: [R`Deux séries « lacunaires » ou à coefficients pairs et impairs différents.`], but: R`Rayons et sommes.`, cles: {
    u: R`On pose $u = 2x^2$ : $\sum\frac{2^nx^{2n}}n = \sum\frac{u^n}n$, et $\sum_{n\geqslant1}\frac{u^n}n = -\ln(1-u)$ pour $|u|<1$.`,
    sep: R`$\sum a_nx^n = \sum_n a_{2n}x^{2n}+\sum_n a_{2n+1}x^{2n+1}$ : on sépare les puissances paires et impaires.` } },
  steps: [
    { q: 1, t: "Changement de variable", h: R`<p>Tout s'écrit en fonction de $2x^2$ : on reconnaît la série de $-\ln(1-u)$.</p>`, b: R`<p>La série ne contient que des puissances paires de $x$, et $2^nx^{2n} = (2x^2)^n$. <span data-k="u">On pose $u = 2x^2$</span> : la série devient $\sum_{n\geqslant1}\frac{u^n}n$, que l'on connaît.</p><ul><li>$|u|<1$ : $\sum\frac{u^n}n = -\ln(1-u)$ (développement de $\ln(1-u)$).</li><li>$|u|>1$ : $\frac{|u|^n}n\to+\infty$, divergence grossière.</li></ul><p>Donc la série converge pour $2x^2<1$, c'est-à-dire $|x|<\frac1{\sqrt2}$, et diverge pour $|x|>\frac1{\sqrt2}$ : $R = \frac1{\sqrt2}$.</p><div class="sbox">$$\sum_{n\geqslant1}\frac{2^nx^{2n}}n = -\ln(1-2x^2),\qquad|x|<\frac1{\sqrt2}.$$</div>`, rappels: ["o-a-dse-usuels"] },
    { q: 2, t: "Séparer pairs et impairs", h: R`<p>Deux séries géométriques en $x^2$ : on les somme séparément, puis on prend le plus petit des deux rayons.</p>`, b: R`<p>Les coefficients pairs et impairs suivent deux règles différentes : <span data-k="sep">on sépare la série en deux</span>, termes pairs ($n = 2k$) et impairs ($n = 2k+1$).</p><ul><li>Pairs : $\sum_k3^kx^{2k} = \sum_k(3x^2)^k = \frac1{1-3x^2}$, série géométrique, valable pour $3x^2<1$, soit $|x|<\frac1{\sqrt3}$.</li><li>Impairs : $\sum_k2^{k+1}x^{2k+1} = 2x\sum_k(2x^2)^k = \frac{2x}{1-2x^2}$, valable pour $|x|<\frac1{\sqrt2}$.</li></ul><p><b>Rayon d'une somme</b> : quand les deux rayons sont différents, le rayon de la somme est le plus petit. Ici $\frac1{\sqrt3}<\frac1{\sqrt2}$, donc $R = \frac1{\sqrt3}$ :</p><div class="sbox">$$\sum a_nx^n = \frac1{1-3x^2}+\frac{2x}{1-2x^2},\qquad|x|<\frac1{\sqrt3}.$$</div>`, rappels: ["o-a-rayon-somme"] }
  ],
  ctx: { "o-a-dse-usuels": R`<p>$-\ln(1-u) = \sum_{n\geqslant1}\frac{u^n}n$ pour $|u|<1$, avec $u = 2x^2$.</p>`, "o-a-rayon-somme": R`<p>Les deux morceaux ont des rayons $\frac1{\sqrt3}$ et $\frac1{\sqrt2}$ différents.</p>` },
  piege: R`Appliquer d'Alembert aux $a_n$ de la question 2 : $\frac{a_{n+1}}{a_n}$ n'a pas de limite.`,
  methode: R`Changement de variable $u = cx^2$, séparation pairs/impairs, sommes géométriques.`
},
{
  id: "o-an-51", subj: "oraux", year: "mp", chap: 10, concours: "ccinp", level: 3, time: "30 min",
  title: "Une somme qui vaut π / (2√2)",
  enonce: R`<ol>
<li>Montrer que la série $\displaystyle\sum_{n\geqslant0}\frac{(2n)!}{(n!)^2\,8^n\,(2n+1)}$ converge.</li>
<li>Donner le développement en série entière en $0$ de $t\mapsto\dfrac1{\sqrt{1-t}}$, avec son rayon, en utilisant des factorielles.</li>
<li>En déduire le développement en série entière de $\operatorname{Arcsin}$ en $0$ et son rayon.</li>
<li>En déduire la valeur de la somme de la question 1.</li>
</ol>`,
  decode: { donnees: [R`$u_n = \frac{(2n)!}{(n!)^2\,8^n\,(2n+1)}$.`], but: R`Calculer la somme via le développement de $\operatorname{Arcsin}$.`, cles: {
    coef: R`$$\frac{\frac12\cdot\frac32\cdots\frac{2n-1}2}{n!} = \frac{1\cdot3\cdots(2n-1)}{2^nn!} = \frac{(2n)!}{2^nn!\cdot2^nn!} = \frac{(2n)!}{4^n(n!)^2},$$ car $1\cdot3\cdots(2n-1) = \frac{(2n)!}{2\cdot4\cdots(2n)} = \frac{(2n)!}{2^nn!}$.`,
    prim: R`On intègre terme à terme sur $]-1,1[$ : une primitive d'une série entière s'obtient en primitivant chaque terme, avec le même rayon.` } },
  steps: [
    { q: 1, t: "Convergence par d'Alembert", h: R`<p>Factorielles : rapport $\frac{u_{n+1}}{u_n}$.</p>`, b: R`<p><b>Règle de d'Alembert</b> (série à termes positifs) : si $\frac{u_{n+1}}{u_n}\to\ell<1$, la série converge.</p><p>Avec $u_n = \frac{(2n)!}{(n!)^2\,8^n\,(2n+1)}$, on écrit $(2n+2)! = (2n+2)(2n+1)(2n)!$ et $((n+1)!)^2 = (n+1)^2(n!)^2$ :</p>$$\frac{u_{n+1}}{u_n} = \frac{(2n+2)(2n+1)}{(n+1)^2}\cdot\frac18\cdot\frac{2n+1}{2n+3}.$$<p>Quand $n\to\infty$ : $\frac{(2n+2)(2n+1)}{(n+1)^2}\to\frac{4n^2}{n^2} = 4$ et $\frac{2n+1}{2n+3}\to1$. Donc</p>$$\frac{u_{n+1}}{u_n}\xrightarrow[n\to\infty]{}\frac48 = \frac12<1 :\quad\text{la série converge.}$$`, rappels: ["o-a-rayon-outils"] },
    { q: 2, t: "Série du binôme avec α = −1/2", h: R`<p>$\frac1{\sqrt{1-t}} = (1+u)^{-1/2}$ avec $u = -t$. Les produits $\big(-\frac12\big)\big(-\frac32\big)\cdots$ se simplifient avec les signes de $(-t)^n$.</p>`, b: R`<p>Pour $|t|<1$ :</p>$$(1-t)^{-1/2} = \sum_{n\geqslant0}\frac{\frac12\cdot\frac32\cdots\frac{2n-1}2}{n!}t^n,$$<p>et <span data-k="coef">ce coefficient vaut $\frac{(2n)!}{4^n(n!)^2}$</span>. Rayon $1$ ($\alpha = -\frac12\notin\mathbb N$).</p><div class="sbox">$$\frac1{\sqrt{1-t}} = \sum_{n\geqslant0}\frac{(2n)!}{4^n(n!)^2}t^n,\qquad|t|<1.$$</div>`, rappels: ["o-a-binome-alpha"] },
    { q: 3, t: "Arcsin par intégration", h: R`<p>$\operatorname{Arcsin}'(x) = \frac1{\sqrt{1-x^2}}$ : on remplace $t$ par $x^2$, puis on primitive terme à terme (avec $\operatorname{Arcsin}0 = 0$).</p>`, b: R`<p>On remplace $t$ par $x^2$ dans le développement de Q2 (valable car $|x^2|<1$ quand $|x|<1$) : on obtient la dérivée de $\operatorname{Arcsin}$,</p>$$\operatorname{Arcsin}'(x) = \frac1{\sqrt{1-x^2}} = \sum_{n\geqslant0}\frac{(2n)!}{4^n(n!)^2}x^{2n}\qquad(|x|<1).$$<p><b>Théorème</b> : une série entière s'intègre terme à terme sur son intervalle ouvert de convergence, avec le même rayon. <span data-k="prim">On intègre de $0$ à $x$</span>, avec $\operatorname{Arcsin}0 = 0$ et $\int_0^xt^{2n}dt = \frac{x^{2n+1}}{2n+1}$ :</p><div class="sbox">$$\operatorname{Arcsin}x = \sum_{n\geqslant0}\frac{(2n)!}{4^n(n!)^2(2n+1)}x^{2n+1},\qquad R = 1.$$</div><p>Début : $\operatorname{Arcsin}x = x+\frac{x^3}6+\dots$</p>`, rappels: ["o-a-se-derivation"] },
    { q: 4, t: "Choisir le bon x", h: R`<p>Il faut $\frac{x^{2n+1}}{4^n} = \frac{c}{8^n}$ : avec $x^2 = \frac12$, on a $\frac{x^{2n}}{4^n} = \frac1{8^n}$.</p>`, b: R`<p>Avec $x = \frac1{\sqrt2}\in\,]-1,1[$ :</p>$$\operatorname{Arcsin}\frac1{\sqrt2} = \frac1{\sqrt2}\sum_{n\geqslant0}\frac{(2n)!}{(n!)^2\,8^n\,(2n+1)}.$$<p>Or $\operatorname{Arcsin}\frac1{\sqrt2} = \frac\pi4$, donc</p><div class="sbox">$$\sum_{n\geqslant0}\frac{(2n)!}{(n!)^2\,8^n\,(2n+1)} = \frac{\pi\sqrt2}4 = \frac\pi{2\sqrt2}\approx1{,}111.$$</div><p><b>Contrôle :</b> $1+\frac2{24}+\frac6{64\cdot5}+\dots\approx1{,}102$.</p>` }
  ],
  ctx: { "o-a-rayon-outils": R`<p>D'Alembert sur une série numérique : limite $\frac12<1$.</p>`, "o-a-binome-alpha": R`<p>$\alpha = -\frac12$ et $x = -t$.</p>`, "o-a-se-derivation": R`<p>Utilisé dans l'autre sens : une primitive de $\sum b_nx^n$ est $\sum\frac{b_n}{n+1}x^{n+1}$, avec le même rayon.</p>` },
  piege: R`Oublier la constante d'intégration (ici nulle car $\operatorname{Arcsin}0 = 0$), ou se tromper dans le calcul du produit $1\cdot3\cdots(2n-1)$.`,
  methode: R`Somme avec $\binom{2n}n$ et $\frac1{2n+1}$ : penser à $\operatorname{Arcsin}$, et choisir $x$ pour faire apparaître la bonne puissance.`
}
]);
})();

/* ===== Chapitres 9 et 10 : Intégration, intégrales à paramètres ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1 } = window.__LA;

LEMME.rappels({
  "o-a-integ-comp": { t: "Critères d'intégrabilité", b: R`<p>$f$ continue par morceaux sur $[a,b[$ :</p><div class="sbox">$$\begin{aligned}&|f|\leqslant g,\ g\text{ intégrable}\ \Longrightarrow\ f\text{ intégrable},\\&|f|\underset{b}{\sim}g\ \Longrightarrow\ \big(f\text{ intégrable}\iff g\text{ intégrable}\big).\end{aligned}$$</div><p>Chaque borne impropre séparément.</p>` },
  "o-a-riemann-int": { t: "Intégrales de référence", b: R`<div class="sbox">$$\int_1^{+\infty}\frac{dt}{t^\alpha}\lt\infty\iff\alpha>1,\qquad\int_0^1\frac{dt}{t^\alpha}\lt\infty\iff\alpha\lt1.$$</div>$$\int_0^{+\infty}e^{-ct}\,dt = \frac1c\ (c>0),\qquad\int_0^1|\ln t|\,dt = 1,\qquad\int_a^{a+1}\frac{dt}{(t-a)^\alpha}\lt\infty\iff\alpha\lt1.$$` },
  "o-a-cvd": { t: "Théorème de convergence dominée", b: R`<ul><li>$f_n\to f$ simplement sur $I$ ;</li><li>$f_n$, $f$ continues par morceaux ;</li><li>$\exists\varphi$ intégrable, $\forall n$, $|f_n|\leqslant\varphi$.</li></ul><div class="sbox">$$\int_If_n\xrightarrow[n\to\infty]{}\int_If.$$</div>` },
  "o-a-param-cont": { t: "Continuité d'une intégrale à paramètre", b: R`<p>$F(x) = \int_If(x,t)\,dt$, $f$ continue en $x$, continue par morceaux en $t$ :</p><div class="sbox">$$\forall[a,b]\subset J,\ \exists\varphi\ \text{intégrable},\ \forall x\in[a,b],\ |f(x,t)|\leqslant\varphi(t)\ \Longrightarrow\ F\in\mathcal C^0(J).$$</div>` },
  "o-a-param-der": { t: "Dérivation sous l'intégrale", b: R`<ul><li>$\forall x$, $t\mapsto f(x,t)$ intégrable ;</li><li>$\frac{\partial f}{\partial x}$ continue en $x$, continue par morceaux en $t$ ;</li><li>$\forall[a,b]\subset J$ : $\Big|\dfrac{\partial f}{\partial x}(x,t)\Big|\leqslant\varphi(t)$, $\varphi$ intégrable.</li></ul><div class="sbox">$$F\in\mathcal C^1(J),\qquad F'(x) = \int_I\frac{\partial f}{\partial x}(x,t)\,dt.$$</div>` },
  "o-a-ipp": { t: "Intégration par parties généralisée", b: R`<div class="sbox">$$\int_a^bu'v = \big[uv\big]_a^b-\int_a^buv'.$$</div><p><b>Sur $]a,b[$</b> : si $\lim_auv$ et $\lim_buv$ existent dans $\mathbb R$, alors</p>$$\int_a^bu'v\ \text{converge}\iff\int_a^buv'\ \text{converge}.$$` },
  "o-a-terme-a-terme": { t: "Intégration terme à terme", b: R`<ul><li>$f_n$ intégrables sur $I$ ;</li><li>$\sum f_n$ converge simplement vers $S$ continue par morceaux ;</li></ul><div class="sbox">$$\sum_n\int_I|f_n|\lt+\infty\ \Longrightarrow\ \int_I\sum_nf_n = \sum_n\int_If_n.$$</div>` },
  "o-a-edl1": { t: "Équation y' = a(x) y", b: R`<p>$a\in\mathcal C^0(J)$, $A' = a$ :</p><div class="sbox">$$y' = a(x)\,y\iff y(x) = C\,e^{A(x)},\qquad C = y(x_0)e^{-A(x_0)}.$$</div>` },
  "o-a-gauss": { t: "Intégrale de Gauss", b: R`<div class="sbox">$$\int_0^{+\infty}e^{-u^2}\,du = \frac{\sqrt\pi}2,\qquad\int_0^{+\infty}e^{-t^2/2}\,dt = \sqrt{\frac\pi2}\quad(t = \sqrt2\,u).$$</div>` }
});

LEMME.exercises([
{
  id: "o-an-25", subj: "oraux", year: "mp", chap: 8, concours: "ccinp", level: 2, time: "20 min",
  title: "Limite d'intégrales par convergence dominée",
  enonce: R`<ol>
<li>Montrer que pour tout $n\in\mathbb N$, la fonction $t\mapsto\dfrac{e^{-t}}{1+t^n}$ est intégrable sur $[0,+\infty[$.</li>
<li>On pose $u_n = \displaystyle\int_0^{+\infty}\frac{e^{-t}}{1+t^n}\,dt$. Calculer $\displaystyle\lim_{n\to\infty}u_n$.</li>
</ol>`,
  decode: { donnees: [R`$f_n(t) = \frac{e^{-t}}{1+t^n}$, continue et positive sur $[0,+\infty[$.`], but: R`L'intégrabilité, puis la limite des intégrales.`, cles: {
    sup: R`Pour $t>1$ : $t^n\to+\infty$. Pour $0\leqslant t<1$ : $t^n\to0$. En $t = 1$ : $t^n = 1$.`,
    dom: R`On cherche $\varphi$ <b>indépendante de $n$</b> et intégrable avec $|f_n|\leqslant\varphi$ : ici $\varphi(t) = e^{-t}$ convient car $1+t^n\geqslant1$.` } },
  steps: [
    { q: 1, t: "Majorer par e^(−t)", h: R`<p>Le dénominateur est au moins $1$ : on se débarrasse de $t^n$ par une majoration grossière.</p>`, b: R`<p><b>Méthode</b> : pour montrer qu'une fonction positive est intégrable, on la majore par une fonction intégrable connue.</p><p>Pour $t\geqslant0$ : $t^n\geqslant0$, donc $1+t^n\geqslant1$, et $\frac1{1+t^n}\leqslant1$. En multipliant par $e^{-t}>0$ :</p><div class="sbox">$$0\leqslant f_n(t) = \frac{e^{-t}}{1+t^n}\leqslant e^{-t}.$$</div><p>Or $\int_0^{+\infty}e^{-t}dt = \big[-e^{-t}\big]_0^{+\infty} = 1$ : $t\mapsto e^{-t}$ est intégrable sur $[0,+\infty[$. Par comparaison, $f_n$ (continue et positive) est intégrable aussi.</p>`, rappels: ["o-a-integ-comp"] },
    { q: 2, t: "La limite simple", h: R`<p>On fixe $t$ et on fait tendre $n$ vers l'infini : il faut comparer $t$ à $1$.</p>`, b: R`<p><span data-k="sup">Selon $t$</span> :</p><div class="sbox">$$f(t) = \lim_{n}f_n(t) = \begin{cases}e^{-t}&\text{si}\ 0\leqslant t<1\\e^{-1}/2&\text{si}\ t = 1\\0&\text{si}\ t>1\end{cases}$$</div><p>$f$ est continue par morceaux sur $[0,+\infty[$.</p>` + GRAPH({ w: 430, h: 210, x: [0, 3], y: [0, 1.1], xt: [1, 2, 3], yt: [0.5, 1], xl: "t", curves: [{ f: t => Math.exp(-t), c: "k", dash: true, lab: [2.1, 0.22, "e⁻ᵗ"] }, ...[2, 6, 30].map((n, i) => ({ f: t => Math.exp(-t) / (1 + t ** n), c: ["g", "b", "r"][i] }))] }, R`$f_2$, $f_6$, $f_{30}$ sous la courbe de $e^{-t}$ (pointillés) : elles se rapprochent de $e^{-t}$ sur $[0,1[$ et de $0$ au-delà.`, "Graphes des f_n") },
    { q: 2, t: "Convergence dominée", h: R`<p>La domination vient de la question 1, avec une fonction qui ne dépend pas de $n$.</p>`, b: R`<p>Hypothèses : convergence simple vers $f$, <span data-k="dom">domination $|f_n|\leqslant e^{-t}$</span> intégrable. Donc</p>$$u_n\xrightarrow[n\to\infty]{}\int_0^{+\infty}f = \int_0^1e^{-t}\,dt = 1-\frac1e.$$<div class="sbox">$$\lim_{n\to\infty}u_n = 1-\frac1e\approx0{,}632.$$</div>`, rappels: ["o-a-cvd"] }
  ],
  ctx: { "o-a-integ-comp": R`<p>$|f_n|\leqslant e^{-t}$ sur $[0,+\infty[$.</p>`, "o-a-cvd": R`<p>$\varphi(t) = e^{-t}$ ; la valeur de $f$ en $t = 1$ ne change pas l'intégrale.</p>` },
  piege: R`Chercher une convergence uniforme sur $[0,+\infty[$ : intervalle non borné et limite discontinue, ça ne marche pas. La convergence dominée est l'outil adapté.`,
  methode: R`Limite d'intégrales sur un intervalle quelconque : limite simple puis domination indépendante de $n$.`
},
{
  id: "o-an-26", subj: "oraux", year: "mp", chap: 8, concours: "ccinp", level: 2, time: "20 min",
  title: "Une suite d'intégrales qui décroît vers 0",
  enonce: R`<p>Pour $n\geqslant1$, on pose $J_n = \displaystyle\int_0^{+\infty}\frac{dt}{(1+t^3)^n}$.</p>
<ol>
<li>Justifier que $J_n$ est bien définie.</li>
<li><ol style="list-style:lower-alpha"><li>Étudier la monotonie de $(J_n)$.</li><li>Déterminer sa limite.</li></ol></li>
<li>La série $\sum_{n\geqslant1}(-1)^nJ_n$ converge-t-elle ?</li>
</ol>`,
  decode: { donnees: [R`$g_n(t) = \frac1{(1+t^3)^n}$, continue, positive, $\leqslant1$.`], but: R`Existence, monotonie, limite, puis une série alternée.`, cles: {
    equiv: R`Quand $t\to+\infty$ : $(1+t^3)^n\sim t^{3n}$, donc $g_n(t)\sim\frac1{t^{3n}}$ avec $3n\geqslant3>1$.`,
    dec: R`Pour $t\geqslant0$ : $1+t^3\geqslant1$, donc $(1+t^3)^{n+1}\geqslant(1+t^3)^n$ et $g_{n+1}(t)\leqslant g_n(t)$.` } },
  steps: [
    { q: 1, t: "Intégrabilité", h: R`<p>Continue sur $[0,+\infty[$ : le seul problème est en $+\infty$, où l'on compare à une fonction de Riemann.</p>`, b: R`<p>On note $g_n(t) = \frac1{(1+t^3)^n}$, continue et positive sur $[0,+\infty[$. Le seul problème est en $+\infty$. Quand $t\to+\infty$, $1+t^3\sim t^3$, donc <span data-k="equiv">$g_n(t)\sim\frac1{t^{3n}}$</span>.</p><p>$t\mapsto\frac1{t^{3n}}$ est intégrable sur $[1,+\infty[$ car $3n\geqslant3>1$ (Riemann). Par comparaison de fonctions positives, $g_n$ est intégrable sur $[1,+\infty[$, et sur $[0,1]$ elle est continue. Donc $J_n$ existe.</p>`, rappels: ["o-a-integ-comp", "o-a-riemann-int"] },
    { q: 2, t: "Monotonie", h: R`<p>Compare les intégrandes point par point, puis intègre (l'intégrale est croissante).</p>`, b: R`<p>Pour $t\geqslant0$, $1+t^3\geqslant1$, donc $\frac1{1+t^3}\in\,]0,1]$. Multiplier par un nombre de $]0,1]$ fait diminuer :</p>$$g_{n+1}(t) = g_n(t)\times\frac1{1+t^3}\leqslant g_n(t).$$<p><span data-k="dec">L'inégalité est vraie pour tout $t\geqslant0$</span>. En intégrant : $J_{n+1}\leqslant J_n$. La suite $(J_n)$ est <b>décroissante</b> et positive.</p>` },
    { q: 2, t: "Limite", h: R`<p>Limite simple : $0$ pour $t>0$. Domination : $g_n\leqslant g_1$, intégrable.</p>`, b: R`<p>On applique le théorème de convergence dominée.</p><ul><li><b>Limite simple</b> : pour $t>0$, $\frac1{1+t^3}< 1$, donc $g_n(t) = \big(\frac1{1+t^3}\big)^n\to0$. En $t = 0$, $g_n(0) = 1$. La limite est nulle sauf en un point, ce qui ne change pas l'intégrale (fonction continue par morceaux).</li><li><b>Domination</b> : $0\leqslant g_n\leqslant g_1$ (étape précédente), et $g_1$ est intégrable (Q1).</li></ul><div class="sbox">$$J_n\xrightarrow[n\to\infty]{}\int_0^{+\infty}0\,dt = 0.$$</div>`, rappels: ["o-a-cvd"] },
    { q: 3, t: "Série alternée", h: R`<p>$(J_n)$ est positive, décroissante, de limite nulle : c'est exactement le critère des séries alternées.</p>`, b: R`<p>Le critère spécial des séries alternées dit : si $(a_n)$ est positive, décroissante et tend vers $0$, alors $\sum(-1)^na_n$ converge. Avec $a_n = J_n$, les trois hypothèses viennent de Q1, 2.a et 2.b :</p><div class="sbox">$$\sum_{n\geqslant1}(-1)^nJ_n\ \text{converge}.$$</div>`, rappels: ["o-a-alternee"] }
  ],
  ctx: { "o-a-integ-comp": R`<p>Règle des équivalents en $+\infty$ avec $\frac1{t^{3n}}$.</p>`, "o-a-riemann-int": R`<p>$\alpha = 3n\geqslant3>1$ en $+\infty$.</p>`, "o-a-cvd": R`<p>Domination par $\varphi = g_1$, intégrable par la question 1.</p>`, "o-a-alternee": R`<p>$a_n = J_n$ : positive, décroissante, de limite nulle.</p>` },
  piege: R`Dominer par $1$ : la fonction constante $1$ n'est pas intégrable sur $[0,+\infty[$.`,
  methode: R`Intégrandes décroissants en $n$ : monotonie par intégration, limite par convergence dominée avec $g_1$.`
},
{
  id: "o-an-28", subj: "oraux", year: "mp", chap: 8, concours: "ccinp", level: 2, time: "20 min",
  title: "Deux questions d'intégrabilité",
  enonce: R`<p>Les deux questions sont indépendantes.</p>
<ol>
<li>La fonction $x\mapsto\dfrac{e^{-2x}}{\sqrt{x^2-1}}$ est-elle intégrable sur $]1,+\infty[$ ?</li>
<li>Soit $a>0$. La fonction $x\mapsto\dfrac{\ln x}{1+x^a}$ est-elle intégrable sur $]0,+\infty[$ ?</li>
</ol>`,
  decode: { donnees: [R`Deux fonctions continues sur des intervalles ouverts.`], but: R`Étudier l'intégrabilité à chaque borne.`, cles: {
    fact: R`$x^2-1 = (x-1)(x+1)$ et $x+1\to2$ quand $x\to1$ : $$\sqrt{x^2-1}\sim\sqrt2\sqrt{x-1}.$$`,
    ln: R`$|\ln x|$ est intégrable sur $]0,1]$ : $\int_\varepsilon^1|\ln x|\,dx = \big[x-x\ln x\big]_\varepsilon^1\to1$.` } },
  steps: [
    { q: 1, t: "Borne 1", h: R`<p>Le problème en $1$ vient de la racine qui s'annule. On factorise $x^2-1$ et on compare à $\frac1{(x-1)^{1/2}}$.</p>`, b: R`<p>Le seul problème en $1$ est le dénominateur, qui s'annule. <span data-k="fact">On factorise</span> $x^2-1 = (x-1)(x+1)$ : quand $x\to1^+$, $x+1\to2$ et $e^{-2x}\to e^{-2}$, donc</p>$$\frac{e^{-2x}}{\sqrt{x^2-1}} = \frac{e^{-2x}}{\sqrt{x+1}}\cdot\frac1{\sqrt{x-1}}\sim\frac{e^{-2}}{\sqrt2}\cdot\frac1{(x-1)^{1/2}}.$$<p><b>Intégrales de Riemann</b> : $\int_1^2\frac{dx}{(x-1)^\alpha}$ converge si et seulement si $\alpha<1$. Ici $\alpha = \frac12<1$. Par équivalence (fonctions positives), la fonction est intégrable sur $]1,2]$.</p>`, rappels: ["o-a-integ-comp", "o-a-riemann-int"] },
    { q: 1, t: "Borne +∞", h: R`<p>À l'infini, $e^{-2x}$ domine tout.</p>`, b: R`<p>Pour $x\geqslant2$ : $x^2-1\geqslant3$, donc $\sqrt{x^2-1}\geqslant\sqrt3\geqslant1$, et en passant à l'inverse :</p>$$0\leqslant\frac{e^{-2x}}{\sqrt{x^2-1}}\leqslant e^{-2x}.$$<p>$\int_2^{+\infty}e^{-2x}dx = \frac{e^{-4}}2$ est finie : $e^{-2x}$ est intégrable, donc notre fonction aussi sur $[2,+\infty[$. Avec l'étape précédente (sur $]1,2]$) :</p><div class="sbox">$$\text{Oui : intégrable sur}\ ]1,+\infty[.$$</div>` },
    { q: 2, t: "Borne 0", h: R`<p>Près de $0$, $1+x^a\to1$ : la fonction se comporte comme $\ln x$.</p>`, b: R`<p>Quand $x\to0^+$ : $x^a\to0$ (car $a>0$), donc $1+x^a\to1$, et</p>$$\frac{\ln x}{1+x^a}\sim\ln x.$$<p><span data-k="ln">$\ln$ est intégrable sur $]0,1]$</span> : une primitive est $x\ln x-x$, qui a une limite finie ($0$) en $0^+$. On peut aussi dire : $\sqrt x\,|\ln x|\to0$, donc $|\ln x| = o\big(\frac1{\sqrt x}\big)$, et $\frac1{\sqrt x}$ est intégrable en $0$ (Riemann, $\frac12<1$).</p><p>La fonction est de signe constant (négatif) près de $0$ : par équivalence, elle est intégrable sur $]0,1]$, quel que soit $a>0$.</p>`, rappels: ["o-a-riemann-int"] },
    { q: 2, t: "Borne +∞", h: R`<p>En $+\infty$ : $\frac{\ln x}{x^a}$. Si $a>1$, on « emprunte » un peu de puissance pour écraser le $\ln$. Si $a\leqslant1$, on minore par $\frac1x$.</p>`, b: R`<p>$\frac{\ln x}{1+x^a}\sim\frac{\ln x}{x^a}$, positif pour $x>1$.</p><ul><li>$a>1$ : avec $\beta = \frac{1+a}2\in\,]1,a[$, $x^\beta\cdot\frac{\ln x}{x^a} = \frac{\ln x}{x^{a-\beta}}\to0$, donc $\frac{\ln x}{x^a}\leqslant\frac1{x^\beta}$ pour $x$ grand : intégrable.</li><li>$a\leqslant1$ : pour $x\geqslant e$, $\frac{\ln x}{x^a}\geqslant\frac1{x^a}\geqslant\frac1x$, non intégrable.</li></ul><div class="sbox">$$\text{Intégrable sur}\ ]0,+\infty[\iff a>1.$$</div>`, rappels: ["o-a-integ-comp", "o-a-riemann-int"] }
  ],
  ctx: { "o-a-integ-comp": R`<p>Équivalents positifs en $1^+$ et en $+\infty$, majoration par $e^{-2x}$, minoration par $\frac1x$.</p>`, "o-a-riemann-int": R`<p>$\frac1{(x-1)^{1/2}}$ en $1$ ($\frac12<1$), $\frac1{x^\beta}$ en $+\infty$ ($\beta>1$), et $\ln$ en $0$.</p>` },
  piege: R`Conclure en $+\infty$ avec « $\frac{\ln x}{x^a}$ est négligeable devant $\frac1{x^{a}}$ » : c'est le contraire, le $\ln$ fait grossir le terme.`,
  methode: R`Une borne à la fois, équivalent positif, référence de Riemann (en empruntant un peu d'exposant pour absorber les $\ln$).`
},
{
  id: "o-an-49", subj: "oraux", year: "mp", chap: 8, concours: "ccinp", level: 3, time: "25 min",
  title: "Intégrer terme à terme une série exponentielle",
  enonce: R`<p>Soit $\sum a_n$ une série complexe absolument convergente, et $M = \sum_{n=0}^{+\infty}|a_n|$. Pour $n\in\mathbb N$ et $t\geqslant0$, on pose $f_n(t) = \dfrac{a_nt^n}{n!}e^{-2t}$.</p>
<ol>
<li><ol style="list-style:lower-alpha"><li>Justifier que $(a_n)$ est bornée.</li><li>Justifier que $\sum f_n$ converge simplement sur $[0,+\infty[$. On admet que sa somme $f$ est continue.</li></ol></li>
<li><ol style="list-style:lower-alpha"><li>Montrer que $g_n : t\mapsto t^ne^{-2t}$ est intégrable sur $[0,+\infty[$ et calculer son intégrale. En déduire $\int_0^{+\infty}|f_n|$.</li><li>Montrer que $\displaystyle\int_0^{+\infty}\Big(\sum_{n=0}^{+\infty}\frac{a_nt^n}{n!}\Big)e^{-2t}\,dt = \sum_{n=0}^{+\infty}\frac{a_n}{2^{n+1}}$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`$\sum|a_n| = M<+\infty$.`], but: R`Échanger somme et intégrale sur $[0,+\infty[$.`, cles: {
    rec: R`Par parties : $\int_0^{+\infty}t^ne^{-2t}\,dt = \big[-\tfrac12t^ne^{-2t}\big]_0^{+\infty}+\frac n2\int_0^{+\infty}t^{n-1}e^{-2t}\,dt$, et le crochet est nul pour $n\geqslant1$.`,
    exp: R`$\sum_{n\geqslant0}\frac{|a_n|t^n}{n!}\leqslant M\sum\frac{t^n}{n!} = Me^t$.` } },
  steps: [
    { q: 1, t: "Suite bornée", h: R`<p>Le terme général d'une série convergente tend vers $0$, donc est borné.</p>`, b: R`<p>$\sum|a_n|$ converge (hypothèse), donc son terme général tend vers $0$ : $|a_n|\to0$. Une suite convergente est bornée.</p><p>On peut même donner une borne : chaque $|a_n|$ est l'un des termes positifs de la somme $M = \sum_k|a_k|$, donc $|a_n|\leqslant M$ pour tout $n$.</p>` },
    { q: 1, t: "Convergence simple", h: R`<p>On majore $|f_n(t)|$ par $M\frac{t^n}{n!}e^{-2t}$, qui est le terme d'une série exponentielle.</p>`, b: R`<p>On fixe $t\geqslant0$. Avec $|a_n|\leqslant M$ (Q1a) :</p>$$|f_n(t)| = |a_n|\frac{t^n}{n!}e^{-2t}\leqslant M\,e^{-2t}\,\frac{t^n}{n!}.$$<p>$\sum\frac{t^n}{n!}$ est la série de l'exponentielle, convergente, de somme $e^t$. Par comparaison, $\sum|f_n(t)|$ converge : $\sum f_n(t)$ converge absolument, donc converge.</p>` },
    { q: 2, t: "L'intégrale de t^n e^(−2t)", h: R`<p>Intégrabilité par croissances comparées, puis une relation de récurrence par parties.</p>`, b: R`<p>$t^2\cdot t^ne^{-2t}\to0$ en $+\infty$ : $g_n$ est intégrable. Notons $K_n = \int_0^{+\infty}t^ne^{-2t}\,dt$. <span data-k="rec">Par parties</span> : $K_n = \frac n2K_{n-1}$, et $K_0 = \int_0^{+\infty}e^{-2t}dt = \frac12$. <b>Récurrence</b> : $K_0 = \frac{0!}{2^1}$ ; si $K_{n-1} = \frac{(n-1)!}{2^n}$, alors $K_n = \frac n2\cdot\frac{(n-1)!}{2^n} = \frac{n!}{2^{n+1}}$. D'où :</p><div class="sbox">$$K_n = \frac{n!}{2^{n+1}},\qquad\int_0^{+\infty}|f_n| = \frac{|a_n|}{n!}K_n = \frac{|a_n|}{2^{n+1}}.$$</div>`, rappels: ["o-a-ipp", "o-a-croissances"] },
    { q: 2, t: "Intégration terme à terme", h: R`<p>Le théorème demande que la série des intégrales des <b>valeurs absolues</b> converge.</p>`, b: R`<p>$\sum\int_0^{+\infty}|f_n| = \sum\frac{|a_n|}{2^{n+1}}\leqslant\frac12\sum|a_n| = \frac M2<+\infty$. Les $f_n$ sont intégrables, $\sum f_n$ converge simplement vers $f$ continue. Par le théorème d'intégration terme à terme :</p><div class="sbox">$$\int_0^{+\infty}f = \sum_{n=0}^{+\infty}\int_0^{+\infty}f_n = \sum_{n=0}^{+\infty}\frac{a_n}{2^{n+1}}.$$</div><p><b>Exemple :</b> $a_n = \frac1{2^n}$ : à gauche $\int_0^{+\infty}e^{t/2}e^{-2t}dt = \frac23$ ; à droite $\sum\frac1{2^{2n+1}} = \frac12\cdot\frac43 = \frac23$.</p>`, rappels: ["o-a-terme-a-terme"] }
  ],
  ctx: { "o-a-ipp": R`<p>$u = t^n$, $v' = e^{-2t}$ ; le crochet $\big[-\frac12t^ne^{-2t}\big]_0^{+\infty}$ est nul.</p>`, "o-a-croissances": R`<p>$t^{n+2}e^{-2t}\to0$, donc $g_n(t) = o(\frac1{t^2})$.</p>`, "o-a-terme-a-terme": R`<p>$\sum\int|f_n| = \sum\frac{|a_n|}{2^{n+1}}<+\infty$.</p>` },
  piege: R`Vérifier $\sum\int f_n$ au lieu de $\sum\int|f_n|$ : le théorème exige les valeurs absolues.`,
  methode: R`Échanger $\int$ et $\sum$ sur un intervalle non borné : théorème d'intégration terme à terme avec $\sum\int|f_n|<\infty$.`
},
{
  id: "o-an-29", subj: "oraux", year: "mp", chap: 9, concours: "ccinp", level: 2, time: "25 min",
  title: "La fonction Gamma",
  enonce: R`<p>Pour $x>0$ et $t>0$, on pose $f(x,t) = e^{-t}t^{x-1}$.</p>
<ol>
<li>Montrer que pour tout $x>0$, $t\mapsto f(x,t)$ est intégrable sur $]0,+\infty[$. On pose $\Gamma(x) = \int_0^{+\infty}e^{-t}t^{x-1}\,dt$.</li>
<li>Exprimer $\Gamma(x+1)$ en fonction de $\Gamma(x)$, puis calculer $\Gamma(n+1)$ pour $n\in\mathbb N$.</li>
<li>Montrer que $\Gamma$ est de classe $\mathcal C^1$ sur $]0,+\infty[$ et exprimer $\Gamma'(x)$ sous forme d'intégrale.</li>
</ol>`,
  decode: { donnees: [R`$f(x,t) = e^{-t}t^{x-1}$.`], but: R`Définition, relation fonctionnelle, régularité de la fonction Gamma.`, cles: {
    dx: R`$t^{x-1} = e^{(x-1)\ln t}$, donc $\frac{\partial}{\partial x}t^{x-1} = \ln(t)\,t^{x-1}$.`,
    seg: R`On fixe un segment $[a,b]\subset\,]0,+\infty[$ ($0< a< b$). Pour $x\in[a,b]$ : si $t\leqslant1$, $t^{x-1}\leqslant t^{a-1}$ ; si $t\geqslant1$, $t^{x-1}\leqslant t^{b-1}$.` } },
  steps: [
    { q: 1, t: "Intégrabilité en 0 et en +∞", h: R`<p>Deux bornes : en $0$, $t^{x-1}$ (Riemann, il faut $1-x<1$) ; en $+\infty$, l'exponentielle gagne.</p>`, b: R`<p>Les bornes à étudier sont $0$ et $+\infty$ ($f$ est continue et positive sur $]0,+\infty[$).</p><ul><li><b>En $0$</b> : $e^{-t}\to1$, donc $f(x,t)\sim t^{x-1} = \frac1{t^{1-x}}$. Intégrale de Riemann en $0$ : $\int_0^1\frac{dt}{t^\alpha}$ converge si et seulement si $\alpha<1$. Ici $\alpha = 1-x<1$ car $x>0$ : intégrable sur $]0,1]$.</li><li><b>En $+\infty$</b> : $t^2f(x,t) = t^{x+1}e^{-t}\to0$ (croissances comparées : l'exponentielle l'emporte sur toute puissance). Donc à partir d'un rang, $f(x,t)\leqslant\frac1{t^2}$, intégrable sur $[1,+\infty[$ (Riemann, $2>1$).</li></ul><p>$f(x,\cdot)$ est donc intégrable sur $]0,+\infty[$, et $\Gamma(x)$ est bien défini.</p>`, rappels: ["o-a-integ-comp", "o-a-riemann-int"] },
    { q: 2, t: "Relation fonctionnelle", h: R`<p>Une intégration par parties fait passer de $t^x$ à $t^{x-1}$ : on dérive $t^x$ et on intègre $e^{-t}$.</p>`, b: R`$$\Gamma(x+1) = \int_0^{+\infty}t^xe^{-t}\,dt = \big[-t^xe^{-t}\big]_0^{+\infty}+x\int_0^{+\infty}t^{x-1}e^{-t}\,dt.$$<p>Le crochet est nul ($x>0$ en $0$, croissances comparées en $+\infty$) :</p><div class="sbox">$$\Gamma(x+1) = x\,\Gamma(x).$$</div><p>On calcule $\Gamma(1) = \int_0^{+\infty}e^{-t}dt = \big[-e^{-t}\big]_0^{+\infty} = 0-(-1) = 1 = 0!$. <b>Récurrence</b> : si $\Gamma(n+1) = n!$, alors, avec la relation ci-dessus pour $x = n+1$, $\Gamma(n+2) = (n+1)\Gamma(n+1) = (n+1)\,n! = (n+1)!$. Donc $\Gamma(n+1) = n!$ pour tout $n\in\mathbb N$.</p>`, rappels: ["o-a-ipp"] },
    { q: 3, t: "La dérivée partielle", h: R`<p>Pour dériver sous l'intégrale, on calcule $\frac{\partial f}{\partial x}$ et on la domine. La domination ne marche pas sur tout $]0,+\infty[$ : on travaille sur un segment $[a,b]$.</p>`, b: R`<p>On veut appliquer le <b>théorème de dérivation sous l'intégrale</b>. Il faut : (1) $\frac{\partial f}{\partial x}$ existe et est continue ; (2) une domination intégrable indépendante de $x$, au moins sur des segments.</p><p>Comme $t^{x-1} = e^{(x-1)\ln t}$, sa dérivée par rapport à $x$ est $\ln t\cdot t^{x-1}$ :</p>$$\frac{\partial f}{\partial x}(x,t) = \ln(t)\,t^{x-1}e^{-t},$$<p><span data-k="dx">continue en $x$ et en $t$</span>. <span data-k="seg">On travaille sur un segment $[a,b]\subset]0,+\infty[$</span> : pour $x\in[a,b]$, $t^{x-1}\leqslant t^{a-1}$ si $t\leqslant1$ et $t^{x-1}\leqslant t^{b-1}$ si $t\geqslant1$, donc dans tous les cas $t^{x-1}\leqslant t^{a-1}+t^{b-1}$ :</p><div class="sbox">$$\Big|\frac{\partial f}{\partial x}(x,t)\Big|\leqslant\varphi(t) = |\ln t|\,e^{-t}\big(t^{a-1}+t^{b-1}\big).$$</div>`, rappels: ["o-a-param-der"] },
    { q: 3, t: "φ est intégrable", h: R`<p>Même analyse qu'en question 1, avec un $\ln$ en plus qu'on absorbe.</p>`, b: R`<ul><li>En $0$ : $\varphi(t)\sim|\ln t|\,t^{a-1}$ ; avec $\beta = 1-\frac a2<1$, $t^\beta\varphi(t) = |\ln t|t^{a/2}\to0$, intégrable.</li><li>En $+\infty$ : $t^2\varphi(t)\to0$.</li></ul><p>Par le théorème de dérivation, $\Gamma$ est $\mathcal C^1$ sur chaque $[a,b]$, donc sur $]0,+\infty[$ :</p><div class="sbox">$$\Gamma'(x) = \int_0^{+\infty}\ln(t)\,t^{x-1}e^{-t}\,dt.$$</div>`, rappels: ["o-a-param-der", "o-a-riemann-int"] }
  ],
  ctx: { "o-a-integ-comp": R`<p>En $0$ : équivalent ; en $+\infty$ : $o(\frac1{t^2})$.</p>`, "o-a-riemann-int": R`<p>En $0$, $\frac1{t^{\alpha}}$ avec $\alpha<1$ ; en $+\infty$, $\frac1{t^2}$.</p>`, "o-a-ipp": R`<p>$u = t^x$, $v' = e^{-t}$ ; crochet nul aux deux bornes.</p>`, "o-a-param-der": R`<p>Domination sur chaque segment $[a,b]$ de $]0,+\infty[$, suffisante car la dérivabilité est locale.</p>` },
  piege: R`Chercher une domination valable pour tout $x>0$ : impossible quand $x\to0$ (et quand $x\to+\infty$). On domine sur des segments.`,
  methode: R`Intégrale à paramètre : dérivée partielle, domination sur un segment en séparant $t\leqslant1$ et $t\geqslant1$.`
},
{
  id: "o-an-30", subj: "oraux", year: "mp", chap: 9, concours: "ccinp", level: 3, time: "25 min",
  title: "Transformée de Fourier d'une gaussienne",
  enonce: R`<ol>
<li>Énoncer le théorème de dérivation sous le signe intégrale.</li>
<li>Montrer que $g : x\mapsto\displaystyle\int_0^{+\infty}e^{-t^2/2}\cos(xt)\,dt$ est de classe $\mathcal C^1$ sur $\mathbb R$.</li>
<li><ol style="list-style:lower-alpha"><li>Trouver une équation différentielle linéaire d'ordre $1$ vérifiée par $g$.</li><li>La résoudre, et en déduire $g$. On admet $\int_0^{+\infty}e^{-u^2}du = \frac{\sqrt\pi}2$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`$h(x,t) = e^{-t^2/2}\cos(xt)$.`], but: R`Régularité de $g$, puis une équation différentielle qui donne $g$ explicitement.`, cles: {
    dom: R`$|\cos|\leqslant1$ et $|\sin|\leqslant1$ : les dominations ne dépendent pas de $x$.`,
    ipp: R`On intègre $te^{-t^2/2}$ (primitive $-e^{-t^2/2}$) et on dérive $\sin(xt)$ (dérivée $x\cos(xt)$).` } },
  steps: [
    { q: 1, t: "Le théorème", h: R`<p>Trois points : intégrabilité pour chaque $x$, dérivée partielle continue, domination de la dérivée partielle.</p>`, b: R`<p>Soit $h : J\times I\to\mathbb C$ telle que : pour tout $x$, $t\mapsto h(x,t)$ est intégrable sur $I$ ; $\frac{\partial h}{\partial x}$ existe, est continue en $x$ et continue par morceaux en $t$ ; il existe $\varphi$ intégrable sur $I$ avec $\big|\frac{\partial h}{\partial x}(x,t)\big|\leqslant\varphi(t)$ pour tous $x,t$. Alors</p><div class="sbox">$$g(x) = \int_Ih(x,t)\,dt\ \text{est}\ \mathcal C^1\ \text{sur}\ J,\qquad g'(x) = \int_I\frac{\partial h}{\partial x}(x,t)\,dt.$$</div>`, rappels: ["o-a-param-der"] },
    { q: 2, t: "Vérifier les hypothèses", h: R`<p><span data-k="dom">Le cosinus et le sinus sont bornés par $1$</span> : on domine par des fonctions de $t$ seul.</p>`, b: R`<ul><li>$|h(x,t)|\leqslant e^{-t^2/2}$, intégrable sur $[0,+\infty[$ ($t^2e^{-t^2/2}\to0$).</li><li>$\frac{\partial h}{\partial x}(x,t) = -te^{-t^2/2}\sin(xt)$, continue en $(x,t)$.</li><li>$\big|\frac{\partial h}{\partial x}\big|\leqslant te^{-t^2/2}$, intégrable sur $[0,+\infty[$.</li></ul><p>Donc $g$ est $\mathcal C^1$ sur $\mathbb R$ et $g'(x) = -\int_0^{+\infty}te^{-t^2/2}\sin(xt)\,dt$.</p>`, rappels: ["o-a-param-der"] },
    { q: 3, t: "Faire réapparaître g", h: R`<p>Une intégration par parties transforme $te^{-t^2/2}\sin(xt)$ en $e^{-t^2/2}\cos(xt)$, c'est-à-dire l'intégrande de $g$.</p>`, b: R`<p>L'étape précédente donne $g'(x) = -\int_0^{+\infty}te^{-t^2/2}\sin(xt)\,dt$. On veut faire réapparaître $g$, qui contient $\cos(xt)$ : <span data-k="ipp">on intègre par parties</span>, en remarquant que $te^{-t^2/2}$ est la dérivée de $-e^{-t^2/2}$.</p><p>On pose $u'(t) = te^{-t^2/2}$, $u(t) = -e^{-t^2/2}$, et $v(t) = \sin(xt)$, $v'(t) = x\cos(xt)$ :</p>$$\int_0^{+\infty}te^{-t^2/2}\sin(xt)\,dt = \big[-e^{-t^2/2}\sin(xt)\big]_0^{+\infty}+x\int_0^{+\infty}e^{-t^2/2}\cos(xt)\,dt.$$<p>Le crochet est nul : en $0$, $\sin0 = 0$ ; en $+\infty$, $e^{-t^2/2}\to0$ et $|\sin|\leqslant1$. Le dernier terme est $x\,g(x)$. Avec le signe $-$ :</p><div class="sbox">$$g'(x) = -x\,g(x).$$</div>`, rappels: ["o-a-ipp"] },
    { q: 3, t: "Résoudre", h: R`<p>Équation $y' = a(x)y$ avec $a(x) = -x$ : $y = Ce^{-x^2/2}$. La constante vaut $g(0)$, une intégrale de Gauss.</p>`, b: R`$$g(x) = g(0)\,e^{-x^2/2},\qquad g(0) = \int_0^{+\infty}e^{-t^2/2}\,dt = \sqrt2\int_0^{+\infty}e^{-u^2}\,du = \sqrt{\frac\pi2}.$$<div class="sbox">$$\int_0^{+\infty}e^{-t^2/2}\cos(xt)\,dt = \sqrt{\frac\pi2}\,e^{-x^2/2}.$$</div><p>Une gaussienne a pour « transformée » une gaussienne.</p>`, rappels: ["o-a-edl1", "o-a-gauss"] }
  ],
  ctx: { "o-a-param-der": R`<p>$\varphi(t) = te^{-t^2/2}$, indépendante de $x\in\mathbb R$.</p>`, "o-a-ipp": R`<p>$u = \sin(xt)$, $v' = te^{-t^2/2}$, $v = -e^{-t^2/2}$ ; crochet nul.</p>`, "o-a-edl1": R`<p>$a(x) = -x$, $A(x) = -\frac{x^2}2$.</p>`, "o-a-gauss": R`<p>Changement $t = \sqrt2u$, $dt = \sqrt2\,du$.</p>` },
  piege: R`Oublier de vérifier l'intégrabilité de $t\mapsto h(x,t)$ elle-même, ou dominer $\frac{\partial h}{\partial x}$ par $|x|te^{-t^2/2}$ (qui dépend de $x$).`,
  methode: R`Dériver sous l'intégrale, intégrer par parties pour retrouver l'intégrale de départ, résoudre l'équation différentielle obtenue.`
},
{
  id: "o-an-50", subj: "oraux", year: "mp", chap: 9, concours: "ccinp", level: 3, time: "25 min",
  title: "Un équivalent en +∞ d'une intégrale à paramètre",
  enonce: R`<p>On considère $F : x\mapsto\displaystyle\int_0^{+\infty}\frac{e^{-3t}}{x+t}\,dt$.</p>
<ol>
<li>Montrer que $F$ est définie et continue sur $]0,+\infty[$.</li>
<li>Montrer que $x\mapsto xF(x)$ a une limite en $+\infty$ et la déterminer.</li>
<li>En déduire un équivalent de $F(x)$ en $+\infty$.</li>
</ol>`,
  decode: { donnees: [R`$h(x,t) = \frac{e^{-3t}}{x+t}$, $x>0$, $t\geqslant0$.`], but: R`Continuité de $F$ et son comportement en $+\infty$.`, cles: {
    seg: R`Sur $[a,+\infty[$ avec $a>0$ : $x+t\geqslant a$, donc $\frac{e^{-3t}}{x+t}\leqslant\frac{e^{-3t}}a$.`,
    xn: R`Pour utiliser la convergence dominée avec $x\to+\infty$, on prend une suite $x_n\to+\infty$ quelconque (caractérisation séquentielle de la limite).` } },
  steps: [
    { q: 1, t: "Définition et continuité", h: R`<p>Pour $x>0$ fixé, $\frac1{x+t}\leqslant\frac1x$ : majoration par $e^{-3t}$. Pour la continuité, il faut une domination indépendante de $x$ : on se place sur $[a,+\infty[$.</p>`, b: R`<p>$h$ est continue sur $]0,+\infty[\times[0,+\infty[$. <span data-k="seg">Pour $x\geqslant a>0$</span> :</p><div class="sbox">$$0\leqslant h(x,t)\leqslant\frac{e^{-3t}}a,\quad\text{intégrable sur}\ [0,+\infty[.$$</div><p>Donc $F$ est définie et continue sur $[a,+\infty[$ pour tout $a>0$, donc sur $]0,+\infty[$.</p>`, rappels: ["o-a-param-cont"] },
    { q: 2, t: "Écrire xF(x)", h: R`<p>$\frac x{x+t}\to1$ quand $x\to+\infty$ : on s'attend à $xF(x)\to\int_0^{+\infty}e^{-3t}dt = \frac13$. On le prouve par convergence dominée.</p>`, b: R`$$xF(x) = \int_0^{+\infty}\frac x{x+t}e^{-3t}\,dt,\qquad0\leqslant\frac x{x+t}e^{-3t}\leqslant e^{-3t}.$$<p><span data-k="xn">Soit $x_n\to+\infty$</span>. Pour $t$ fixé, $\frac{x_n}{x_n+t}e^{-3t}\to e^{-3t}$, avec domination par $e^{-3t}$ intégrable. Par convergence dominée :</p><div class="sbox">$$x_nF(x_n)\to\int_0^{+\infty}e^{-3t}\,dt = \frac13,\qquad\text{donc}\ \lim_{x\to+\infty}xF(x) = \frac13.$$</div>`, rappels: ["o-a-cvd"] },
    { q: 3, t: "Équivalent", h: R`<p>$xF(x)\to\frac13\neq0$ s'écrit exactement $F(x)\sim\frac1{3x}$.</p>`, b: R`<p>Q2 donne $xF(x)\xrightarrow[x\to+\infty]{}\int_0^{+\infty}e^{-3t}dt = \frac13$. <b>Rappel</b> : $f\sim g$ signifie $\frac fg\to1$. Ici $\frac{F(x)}{1/(3x)} = 3xF(x)\to3\cdot\frac13 = 1$ :</p><div class="sbox">$$F(x)\underset{x\to+\infty}{\sim}\frac1{3x}.$$</div><p><b>Intuition :</b> $e^{-3t}$ est presque nulle dès que $t$ dépasse quelques unités ; là où elle compte ($t$ proche de $0$), on a $x+t\approx x$ pour $x$ grand, donc $F(x)\approx\frac1x\int_0^{+\infty}e^{-3t}dt = \frac1{3x}$.</p>` }
  ],
  ctx: { "o-a-param-cont": R`<p>$\varphi(t) = \frac{e^{-3t}}a$ sur $[a,+\infty[$.</p>`, "o-a-cvd": R`<p>Paramètre continu $x\to+\infty$ : on passe par des suites $x_n\to+\infty$.</p>` },
  piege: R`Dominer par $\frac{e^{-3t}}x$ : cette fonction dépend de $x$. La domination doit être indépendante du paramètre.`,
  methode: R`Équivalent d'une intégrale à paramètre : multiplier par le bon facteur et appliquer la convergence dominée le long de suites.`
}
]);
})();

/* ===== Chapitres 12 et 3 : Espaces vectoriels normés, espaces préhilbertiens ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1 } = window.__LA;

LEMME.rappels({
  "o-a-norme-def": { t: "Définition d'une norme", b: R`$$N\text{ norme}\iff\left\{\begin{aligned}&N(x)\geqslant0,\quad N(x) = 0\Rightarrow x = 0,\\&N(\lambda x) = |\lambda|N(x),\\&N(x+y)\leqslant N(x)+N(y).\end{aligned}\right.$$<p><b>Point délicat</b> : la séparation ; pour une norme intégrale, par continuité :</p>$$\int_a^b|f| = 0,\ f\text{ continue}\ \Longrightarrow\ f = 0.$$` },
  "o-a-int-nulle": { t: "Fonction continue positive d'intégrale nulle", b: R`<div class="sbox">$$g\in\mathcal C^0([a,b]),\ g\geqslant0,\ \int_a^bg = 0\ \Longrightarrow\ g = 0.$$</div><p><b>Contre-exemple</b> sans continuité :</p>$$g = \mathbb 1_{\{a\}},\qquad\int_a^bg = 0,\qquad g\neq0.$$` },
  "o-a-equiv-normes": { t: "Normes équivalentes", b: R`<div class="sbox">$$\exists\alpha,\beta>0,\ \alpha N_1\leqslant N_2\leqslant\beta N_1.$$</div><p>Pour le nier : une suite $(x_n)$ avec $\frac{N_2(x_n)}{N_1(x_n)}\to+\infty$ (ou $\to0$).</p>` },
  "o-a-lin-cont": { t: "Continuité d'une application linéaire", b: R`<p>$u : E\to F$ linéaire :</p><div class="sbox">$$u\ \text{continue}\iff u\ \text{continue en}\ 0\iff\exists k\geqslant0,\ \forall x\in E,\ \|u(x)\|_F\leqslant k\,\|x\|_E.$$</div>$$\dim E\lt\infty\ \Longrightarrow\ u\ \text{continue}.$$` },
  "o-a-ferme-seq": { t: "Caractérisation séquentielle des fermés", b: R`<div class="sbox">$$F\ \text{fermé}\iff\big(\forall(x_n)\in F^{\mathbb N},\ x_n\to\ell\Rightarrow\ell\in F\big).$$</div><p><b>Non fermé</b> :</p>$$\exists(x_n)\in F^{\mathbb N},\ x_n\to\ell\notin F.$$` },
  "o-a-image-rec": { t: "Image réciproque par une application continue", b: R`<div class="sbox">$$f\ \text{continue}:\quad B\ \text{fermé}\Rightarrow f^{-1}(B)\ \text{fermé},\qquad B\ \text{ouvert}\Rightarrow f^{-1}(B)\ \text{ouvert}.$$</div><h5>Exemple</h5>$$\{f : f(1) = 0\} = u^{-1}(\{0\}),\qquad u : f\mapsto f(1)\ \text{continue}.$$` },
  "o-a-adh-seq": { t: "Caractérisation séquentielle de l'adhérence", b: R`<div class="sbox">$$x\in\overline A\iff\exists(a_n)\in A^{\mathbb N},\ a_n\to x\iff\forall r>0,\ B(x,r)\cap A\neq\emptyset.$$</div>` },
  "o-a-compact": { t: "Compacité", b: R`<div class="sbox">$$K\text{ compact}\iff\forall(x_n)\in K^{\mathbb N},\ \exists\varphi\nearrow,\ x_{\varphi(n)}\to\ell\in K.$$</div>$$K\text{ compact}\Rightarrow K\text{ fermé borné},\qquad\dim E\lt\infty:\ K\text{ compact}\iff K\text{ fermé borné}.$$` },
  "o-a-norme-cont": { t: "La norme est 1-lipschitzienne", b: R`<div class="sbox">$$\big|\,\|x\|-\|y\|\,\big|\leqslant\|x-y\|.$$</div>$$x\mapsto\|x\|\ \text{continue},\qquad\{x : \|x\| = r\}\ \text{fermé}.$$` },
  "o-a-seq-cont": { t: "Caractérisation séquentielle de la continuité", b: R`<div class="sbox">$$f\ \text{continue en}\ a\iff\big(\forall(x_n),\ x_n\to a\Rightarrow f(x_n)\to f(a)\big).$$</div>` },
  "o-a-cs": { t: "Inégalité de Cauchy-Schwarz", b: R`<div class="sbox">$$|(x|y)|\leqslant\|x\|\,\|y\|,\qquad\Big|\sum x_ky_k\Big|\leqslant\Big(\sum x_k^2\Big)^{1/2}\Big(\sum y_k^2\Big)^{1/2}.$$</div>` },
  "o-a-abs-dimfinie": { t: "Séries absolument convergentes en dimension finie", b: R`<div class="sbox">$$\dim E\lt\infty,\ \sum\|u_n\|\lt+\infty\ \Longrightarrow\ \sum u_n\ \text{converge dans}\ E.$$</div><p><b>Exemple</b> :</p>$$\sum\frac{\|A\|^n}{n!}\lt+\infty\ \Longrightarrow\ \exp(A) = \sum\frac{A^n}{n!}\ \text{existe}.$$` },
  "o-a-ouvert": { t: "Ouverts", b: R`<div class="sbox">$$U\ \text{ouvert}\iff\forall a\in U,\ \exists r>0,\ B(a,r)\subset U.$$</div><p>Un ouvert est le complémentaire d'un fermé.</p>` }
});

LEMME.exercises([
{
  id: "o-an-1", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 2, time: "25 min",
  title: "Une même partie, fermée pour une norme et pas pour l'autre",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$, muni des normes $\|f\|_\infty = \sup_{[0,1]}|f|$ et $\|f\|_1 = \int_0^1|f(t)|\,dt$.</p>
<ol>
<li>Les normes $\|\ \|_\infty$ et $\|\ \|_1$ sont-elles équivalentes ?</li>
<li>On munit $E$ de $\|\ \|_\infty$.<ol style="list-style:lower-alpha"><li>Montrer que $u : f\mapsto f(1)$ est continue.</li><li>Montrer que $F = \{f\in E : f(1) = 0\}$ est fermée.</li></ol></li>
<li>On munit $E$ de $\|\ \|_1$. Soit $c$ la fonction constante égale à $1$, et pour $n\geqslant1$, $f_n(x) = 1$ si $0\leqslant x\leqslant1-\frac1n$, $f_n(x) = n(1-x)$ si $1-\frac1n< x\leqslant1$.<ol style="list-style:lower-alpha"><li>Calculer $\|f_n-c\|_1$.</li><li>Montrer que $c$ est <span data-k="adh">adhérent</span> à $F$. $F$ est-elle fermée pour $\|\ \|_1$ ?</li></ol></li>
</ol>`,
  decode: { donnees: [R`Deux normes sur les fonctions continues de $[0,1]$.`], but: R`Comparer les normes, puis montrer que « fermé » dépend de la norme.`, cles: {
    adh: R`$c\in\overline F$ s'il existe une suite d'éléments de $F$ qui converge vers $c$ (pour la norme choisie) :$$\exists(f_n)\in F^{\mathbb N},\ \|f_n-c\|_1\to0.$$`,
    ratio: R`Avec $g_n(x) = e^{-nx}$ : $\|g_n\|_\infty = g_n(0) = 1$ et $\|g_n\|_1 = \int_0^1e^{-nx}dx = \frac{1-e^{-n}}n$.` } },
  steps: [
    { q: 1, t: "Une suite qui sépare les deux normes", h: R`<p>Pour nier l'équivalence, on cherche des fonctions de sup égal à $1$ mais d'aire minuscule : un pic de plus en plus étroit.</p>`, b: R`<p><span data-k="ratio">Avec $g_n(x) = e^{-nx}$</span> :</p><div class="sbox">$$\frac{\|g_n\|_\infty}{\|g_n\|_1} = \frac n{1-e^{-n}}\xrightarrow[n\to\infty]{}+\infty.$$</div><p>Il n'existe donc pas de $\beta$ avec $\|f\|_\infty\leqslant\beta\|f\|_1$ pour tout $f$ : les normes ne sont <b>pas équivalentes</b>. (L'autre inégalité $\|f\|_1\leqslant\|f\|_\infty$ est vraie.)</p>`, rappels: ["o-a-equiv-normes"] },
    { q: 2, t: "u est linéaire et lipschitzienne", h: R`<p>Application linéaire : il suffit de trouver $k$ avec $|u(f)|\leqslant k\|f\|_\infty$.</p>`, b: R`<p><b>Rappel</b> : une application <b>linéaire</b> $u$ est continue dès qu'il existe $k$ avec $|u(f)|\leqslant k\|f\|$ pour tout $f$ (elle est alors $k$-lipschitzienne : $|u(f)-u(g)| = |u(f-g)|\leqslant k\|f-g\|$).</p><ul><li>$u$ est linéaire : $(\lambda f+g)(1) = \lambda f(1)+g(1)$.</li><li>La valeur en $1$ est l'une des valeurs de $|f|$ sur $[0,1]$, donc elle est plus petite que leur sup : $|u(f)| = |f(1)|\leqslant\sup_{[0,1]}|f| = \|f\|_\infty$.</li></ul><p>Avec $k = 1$ : $u$ est continue pour $\|\ \|_\infty$.</p>`, rappels: ["o-a-lin-cont"] },
    { q: 2, t: "F est fermée pour la norme infinie", h: R`<p>$F$ est l'ensemble des $f$ où $u$ vaut $0$ : image réciproque d'un fermé par une application continue.</p>`, b: R`<p><b>Rappel</b> : l'image réciproque d'un fermé par une application continue est un fermé.</p><p>$F$ est l'ensemble des $f$ telles que $u(f) = f(1)$ appartient à $\{0\}$ : c'est exactement $u^{-1}(\{0\})$. Le singleton $\{0\}$ est un fermé de $\mathbb R$, et $u$ est continue (étape précédente) :</p><div class="sbox">$$F = u^{-1}(\{0\}),\quad\{0\}\ \text{fermé de}\ \mathbb R,\quad u\ \text{continue}\ \Longrightarrow\ F\ \text{fermé}.$$</div>`, rappels: ["o-a-image-rec"] },
    { q: 3, t: "Calculer ‖f_n − c‖₁", h: R`<p>$f_n-c$ n'est non nulle que sur le petit intervalle $[1-\frac1n,1]$ : l'aire est celle d'un triangle.</p>`, b: R`<p>Sur $[0,1-\frac1n]$, $f_n-c = 0$. Sur $[1-\frac1n,1]$, $|f_n-c| = 1-n(1-x)$, qui va de $0$ à $1$ : un triangle de base $\frac1n$ et de hauteur $1$.</p><div class="sbox">$$\|f_n-c\|_1 = \frac1{2n}.$$</div>` + GRAPH({ w: 430, h: 200, x: [0, 1.05], y: [0, 1.25], xt: [0.5, 0.8, 1], xtl: ["0,5", "1 − 1/n", "1"], yt: [1], xl: "x", curves: [{ f: x => 1, c: "k", dash: true, lab: [0.05, 1.12, "c = 1"] }, { f: x => x <= 0.8 ? 1 : x <= 1 ? 5 * (1 - x) : NaN, c: "b", lab: [0.55, 0.85, "f₅"] }],
      extra: (X, Y) => `<path d="M${f1(X(0.8))} ${f1(Y(1))} L${f1(X(1))} ${f1(Y(1))} L${f1(X(1))} ${f1(Y(0))} Z" style="fill:var(--yellow);fill-opacity:.45;stroke:none"/>` }, R`$f_5$ (en bleu) et $c$ : ils ne diffèrent que sur le triangle jaune, d'aire $\frac1{2n}$. En norme $\|\ \|_1$, $f_n$ se rapproche de $c$ ; en norme $\|\ \|_\infty$, l'écart reste $1$ (en $x = 1$).`, "Fonction f_n et fonction constante"), },
    { q: 3, t: "c est adhérent à F, qui n'est pas fermée", h: R`<p>Les $f_n$ sont dans $F$ ($f_n(1) = 0$) et tendent vers $c$ pour $\|\ \|_1$. Mais $c(1) = 1$ : $c\notin F$.</p>`, b: R`<p>Chaque $f_n$ est continue (les deux morceaux valent $1$ en $1-\frac1n$) et $f_n(1) = 0$ : $f_n\in F$. Et $\|f_n-c\|_1\to0$. Donc <span data-k="adh">$c\in\overline F$</span>. Or $c(1) = 1\neq0$ : $c\notin F$.</p><div class="sbox">$$\overline F\neq F\ :\ F\ \text{n'est pas fermée pour}\ \|\ \|_1.$$</div><p><b>Moralité :</b> en dimension infinie, la topologie dépend de la norme. Ici $u$ n'est pas continue pour $\|\ \|_1$.</p>`, rappels: ["o-a-ferme-seq", "o-a-adh-seq"] }
  ],
  ctx: { "o-a-equiv-normes": R`<p>$g_n = e^{-nx}$ : $\frac{\|g_n\|_\infty}{\|g_n\|_1}\to+\infty$.</p>`, "o-a-lin-cont": R`<p>$k = 1$ pour $u(f) = f(1)$ et la norme $\|\ \|_\infty$.</p>`, "o-a-image-rec": R`<p>$F = u^{-1}(\{0\})$.</p>`, "o-a-ferme-seq": R`<p>$(f_n)$ dans $F$, limite $c\notin F$ : $F$ n'est pas fermée.</p>`, "o-a-adh-seq": R`<p>La suite $(f_n)$ de $F$ converge vers $c$ pour $\|\ \|_1$.</p>` },
  piege: R`Dire que $F$ est fermée « dans tous les cas » parce que c'est l'ensemble des zéros d'une application : il faut que cette application soit continue pour la norme utilisée.`,
  methode: R`Normes non équivalentes : une suite qui fait exploser le rapport. Partie non fermée : une suite de la partie qui converge hors de la partie.`
},
{
  id: "o-an-13", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 3, time: "25 min",
  title: "Une sphère fermée bornée mais pas compacte",
  enonce: R`<ol>
<li>Rappeler la définition séquentielle d'une partie compacte d'un espace vectoriel normé.</li>
<li>Montrer qu'une partie compacte est fermée.</li>
<li>Montrer qu'une partie compacte est bornée (on pourra raisonner par l'absurde).</li>
<li>Sur $E = \mathbb R[X]$, on pose $\|P\|_\infty = \max_i|a_i|$ pour $P = \sum a_iX^i$.<ol style="list-style:lower-alpha"><li>Justifier que $S = \{P\in E : \|P\|_\infty = 1\}$ est fermée et bornée.</li><li>Calculer $\|X^n-X^m\|_\infty$ pour $n\neq m$. $S$ est-elle compacte ?</li></ol></li>
</ol>`,
  decode: { donnees: [R`$\|P\|_\infty$ = plus grand coefficient en valeur absolue.`], but: R`Compact $\Rightarrow$ fermé borné, puis un contre-exemple à la réciproque en dimension infinie.`, cles: {
    extr: R`Si $\varphi$ est strictement croissante, $\varphi(n)\geqslant n$, et une suite extraite d'une suite convergente converge vers la même limite.`,
    cauchy: R`Une suite convergente vérifie : $\|x_p-x_q\|\to0$ quand $p,q\to\infty$ (car $\|x_p-x_q\|\leqslant\|x_p-\ell\|+\|\ell-x_q\|$).` } },
  steps: [
    { q: 1, t: "Définition", h: R`<p>Compact = toute suite a une valeur d'adhérence dans la partie.</p>`, b: R`<p>Une partie $K$ est <b>compacte</b> si toute suite d'éléments de $K$ admet une sous-suite (suite extraite) qui converge <b>vers un élément de $K$</b> :</p><div class="sbox">$$K\ \text{compacte}\iff\forall(x_n)\in K^{\mathbb N},\ \exists\varphi\nearrow\ \text{strict.},\ \exists\ell\in K,\ x_{\varphi(n)}\to\ell.$$</div><p>$\varphi : \mathbb N\to\mathbb N$ strictement croissante sélectionne les indices gardés. Exemple : $[0,1]$ est compact dans $\mathbb R$ (Bolzano-Weierstrass), mais $]0,1]$ ne l'est pas, car $\frac1n\to0\notin]0,1]$.</p>`, rappels: ["o-a-compact"] },
    { q: 2, t: "Compact implique fermé", h: R`<p>On utilise la caractérisation séquentielle des fermés : une suite de $K$ qui converge a sa limite dans $K$.</p>`, b: R`<p>Soit $(x_n)\in K^{\mathbb N}$ avec $x_n\to\ell\in E$. Par compacité, une suite extraite $x_{\varphi(n)}$ converge vers un $\ell'\in K$. <span data-k="extr">Mais une suite extraite converge vers la même limite</span> : $\ell' = \ell$. Donc $\ell\in K$ : $K$ est fermée.</p>`, rappels: ["o-a-ferme-seq"] },
    { q: 3, t: "Compact implique borné", h: R`<p>Par l'absurde : si $K$ n'est pas bornée, on construit une suite dont la norme tend vers l'infini ; aucune suite extraite ne peut converger.</p>`, b: R`<p>Si $K$ n'est pas bornée, pour tout $n$ il existe $x_n\in K$ avec $\|x_n\|\geqslant n$. Toute suite extraite vérifie $\|x_{\varphi(n)}\|\geqslant\varphi(n)\geqslant n\to+\infty$, donc ne converge pas (une suite convergente est bornée). Contradiction avec la compacité.</p>` },
    { q: 4, t: "S est fermée et bornée", h: R`<p>$S$ est une sphère : image réciproque de $\{1\}$ par la norme, qui est continue.</p>`, b: R`<ul><li><b>Bornée</b> : tous les éléments de $S$ sont de norme $1$, donc $S\subset B_f(0,1)$.</li><li><b>Fermée</b> : la norme est $1$-lipschitzienne ($\big|\|P\|-\|Q\|\big|\leqslant\|P-Q\|$, inégalité triangulaire), donc continue. $S$ est l'ensemble des $P$ dont la norme appartient à $\{1\}$ : $S = \|\cdot\|_\infty^{-1}(\{1\})$, image réciproque du fermé $\{1\}$ par une application continue, donc fermée.</li></ul><p>En dimension finie, « fermé borné » suffirait pour être compact ; on va voir que ce n'est plus vrai ici ($\mathbb R[X]$ est de dimension infinie).</p>`, rappels: ["o-a-norme-cont", "o-a-image-rec"] },
    { q: 4, t: "Une suite sans sous-suite convergente", h: R`<p>$(X^n)$ est dans $S$. Si une suite extraite convergeait, ses termes se rapprocheraient les uns des autres. Or ils restent tous à distance $1$.</p>`, b: R`<p>Pour $n\neq m$, $X^n-X^m$ a deux coefficients non nuls, $1$ et $-1$ :</p><div class="sbox">$$\|X^n-X^m\|_\infty = 1.$$</div><p>Si $(X^{\varphi(n)})$ convergeait, on aurait <span data-k="cauchy">$\|X^{\varphi(p)}-X^{\varphi(q)}\|_\infty\to0$</span>, alors que cette quantité vaut $1$ pour $p\neq q$. Donc $(X^n)$ n'a pas de suite extraite convergente : <b>$S$ n'est pas compacte</b>, bien que fermée et bornée.</p>`, rappels: ["o-a-compact"] }
  ],
  ctx: { "o-a-compact": R`<p>Ici la réciproque « fermé borné $\Rightarrow$ compact » tombe : $\mathbb R[X]$ est de dimension infinie.</p>`, "o-a-ferme-seq": R`<p>On montre que la limite de toute suite convergente de $K$ est dans $K$.</p>`, "o-a-norme-cont": R`<p>$\|\cdot\|_\infty$ est continue sur $(E,\|\cdot\|_\infty)$.</p>`, "o-a-image-rec": R`<p>$S = N^{-1}(\{1\})$ avec $N$ continue.</p>` },
  piege: R`Appliquer Bolzano-Weierstrass dans $\mathbb R[X]$ : il n'est valable qu'en dimension finie.`,
  methode: R`Non-compacité en dimension infinie : une suite de la partie dont les termes restent à distance fixe les uns des autres.`
},
{
  id: "o-an-34", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 2, time: "25 min",
  title: "Adhérence : suites, sous-espaces et produits",
  enonce: R`<p>Soit $A$ une partie non vide d'un espace vectoriel normé réel $E$.</p>
<ol>
<li>Rappeler la définition d'un point adhérent à $A$ à l'aide des boules.</li>
<li>Montrer que $x\in\overline A$ si et seulement s'il existe une suite d'éléments de $A$ qui converge vers $x$.</li>
<li>Montrer que si $A$ est un sous-espace vectoriel, $\overline A$ aussi.</li>
<li>Soit $B$ une autre partie non vide de $E$. Montrer que $\overline{A\times B} = \overline A\times\overline B$ dans $E\times E$ muni de $\|(x,y)\| = \max(\|x\|,\|y\|)$.</li>
</ol>`,
  decode: { donnees: [R`$E$ normé, $A,B\subset E$ non vides.`], but: R`Les propriétés de base de l'adhérence.`, cles: {
    boule: R`Choix classique : $r = \frac1{n+1}$. La boule $B\big(x,\frac1{n+1}\big)$ rencontre $A$, on y prend un point $a_n$.`,
    prod: R`Avec la norme max : $\|(x_n,y_n)-(x,y)\|\to0\iff\|x_n-x\|\to0\ \text{et}\ \|y_n-y\|\to0$.` } },
  steps: [
    { q: 1, t: "Définition par les boules", h: R`<p>Un point adhérent est « collé » à $A$ : aussi près qu'on veut, il y a des points de $A$.</p>`, b: R`<p>$x$ est <b>adhérent</b> à $A$ si toute boule centrée en $x$, aussi petite soit-elle, contient au moins un point de $A$ :</p><div class="sbox">$$x\in\overline A\iff\forall r>0,\ B(x,r)\cap A\neq\varnothing.$$</div><p>Exemple : dans $\mathbb R$, $1$ est adhérent à $A = [0,1[$ : la boule $]1-r,1+r[$ contient $1-\frac r2\in A$. Mais $2$ ne l'est pas : $]1{,}5;2{,}5[\cap A = \varnothing$.</p>` },
    { q: 2, t: "Sens direct", h: R`<p>On fabrique une suite en prenant un point de $A$ dans chaque boule de rayon $\frac1{n+1}$.</p>`, b: R`<p>Soit $x\in\overline A$. On applique la définition avec des rayons de plus en plus petits, $r = \frac1{n+1}$ : pour chaque $n$, <span data-k="boule">la boule $B(x,\frac1{n+1})$ rencontre $A$</span>, donc on peut choisir $a_n\in A$ avec $\|a_n-x\|<\frac1{n+1}$.</p><p>Comme $\frac1{n+1}\to0$, on a $\|a_n-x\|\to0$ (théorème des gendarmes) : la suite $(a_n)$ d'éléments de $A$ converge vers $x$.</p>` },
    { q: 2, t: "Réciproque", h: R`<p>Une suite qui converge vers $x$ finit par entrer dans toute boule centrée en $x$.</p>`, b: R`<p>Réciproquement, soit $(a_n)$ une suite de $A$ qui converge vers $x$. Soit $r>0$. Par définition de la limite, il existe $N$ tel que $\|a_n-x\|\lt r$ pour $n\geqslant N$ ; en particulier $\|a_N-x\|\lt r$.</p><p>Donc $a_N\in B(x,r)$, et $a_N\in A$ : $B(x,r)\cap A\neq\varnothing$. Ceci pour tout $r>0$ : $x\in\overline A$.</p>`, rappels: ["o-a-adh-seq"] },
    { q: 3, t: "Adhérence d'un sous-espace", h: R`<p>On utilise la caractérisation séquentielle et la continuité des opérations (somme, produit par un scalaire).</p>`, b: R`<p>$0\in A\subset\overline A$. Soient $x,y\in\overline A$, $\lambda\in\mathbb R$, et $a_n\to x$, $b_n\to y$ avec $a_n,b_n\in A$. Alors $\lambda a_n+b_n\in A$ et</p>$$\|\lambda a_n+b_n-(\lambda x+y)\|\leqslant|\lambda|\|a_n-x\|+\|b_n-y\|\to0.$$<p>Donc $\lambda x+y\in\overline A$ : $\overline A$ est un sous-espace vectoriel.</p>`, rappels: ["o-a-sev"] },
    { q: 4, t: "Adhérence d'un produit", h: R`<p>Avec la norme max, converger dans $E\times E$ revient à converger composante par composante.</p>`, b: R`<p><span data-k="prod">Convergence composante par composante</span>. Alors :</p>$$(x,y)\in\overline{A\times B}\iff\exists(a_n,b_n)\in A\times B,\ (a_n,b_n)\to(x,y)\iff\exists a_n\to x,\ \exists b_n\to y\iff(x,y)\in\overline A\times\overline B.$$<div class="sbox">$$\overline{A\times B} = \overline A\times\overline B.$$</div>`, rappels: ["o-a-adh-seq"] }
  ],
  ctx: { "o-a-adh-seq": R`<p>C'est l'outil de presque toutes les questions : on remplace « adhérent » par « limite d'une suite de la partie ».</p>`, "o-a-sev": R`<p>Appliqué à $\overline A$ : $0\in\overline A$ et stabilité par $\lambda x+y$.</p>` },
  piege: R`Dans la question 4, oublier qu'il faut les deux sens d'équivalence (ou d'inclusion).`,
  methode: R`Questions sur l'adhérence : toujours passer par les suites.`
},
{
  id: "o-an-35", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 2, time: "20 min",
  title: "Continuité séquentielle et parties denses",
  enonce: R`<p>Soient $(E,\|\ \|_E)$ et $(F,\|\ \|_F)$ deux espaces vectoriels normés.</p>
<ol>
<li>Soit $f : E\to F$ et $a\in E$. Montrer l'équivalence entre (P1) « $f$ est continue en $a$ » et (P2) « pour toute suite $x_n\to a$, $f(x_n)\to f(a)$ ».</li>
<li>Soit $A$ une partie <span data-k="dense">dense</span> de $E$ et $f,g : E\to F$ continues. Montrer que si $f = g$ sur $A$, alors $f = g$ sur $E$.</li>
</ol>`,
  decode: { donnees: [R`Deux espaces normés, des applications quelconques puis continues.`], but: R`La caractérisation séquentielle de la continuité et une application.`, cles: {
    dense: R`$A$ est dense dans $E$ si $\overline A = E$ :$$\forall x\in E,\ \exists(a_n)\in A^{\mathbb N},\ a_n\to x.$$Exemple : $\mathbb Q$ dans $\mathbb R$.`,
    neg: R`La négation de « $\forall\varepsilon>0,\ \exists\eta>0,\ \forall x,\ \|x-a\|\leqslant\eta\Rightarrow\|f(x)-f(a)\|\leqslant\varepsilon$ » est$$\exists\varepsilon>0,\ \forall\eta>0,\ \exists x,\ \|x-a\|\leqslant\eta\ \text{et}\ \|f(x)-f(a)\|>\varepsilon.$$` } },
  steps: [
    { q: 1, t: "P1 implique P2", h: R`<p>On combine deux définitions avec $\varepsilon$ : celle de la continuité (donne un $\eta$) et celle de la convergence de $x_n$ (donne un rang $N$ pour ce $\eta$).</p>`, b: R`<p>Soit $x_n\to a$ et $\varepsilon>0$. Par continuité, il existe $\eta>0$ tel que $\|x-a\|\leqslant\eta\Rightarrow\|f(x)-f(a)\|\leqslant\varepsilon$. Comme $x_n\to a$, il existe $N$ tel que $\|x_n-a\|\leqslant\eta$ pour $n\geqslant N$. Alors $\|f(x_n)-f(a)\|\leqslant\varepsilon$ pour $n\geqslant N$ : $f(x_n)\to f(a)$.</p>` },
    { q: 1, t: "P2 implique P1 (par contraposée)", h: R`<p>Si $f$ n'est pas continue en $a$, on fabrique une suite qui tend vers $a$ mais dont l'image reste loin de $f(a)$ : on prend $\eta = \frac1{n+1}$ dans la négation.</p>`, b: R`<p>Supposons $f$ non continue en $a$. <span data-k="neg">Par négation</span>, il existe $\varepsilon>0$ tel que, pour $\eta = \frac1{n+1}$, on trouve $x_n$ avec $\|x_n-a\|\leqslant\frac1{n+1}$ et $\|f(x_n)-f(a)\|>\varepsilon$. Alors $x_n\to a$ mais $f(x_n)\not\to f(a)$ : (P2) est fausse.</p>`, rappels: ["o-a-seq-cont"] },
    { q: 2, t: "Prolonger l'égalité par densité", h: R`<p>Tout point $x$ est limite de points de $A$, où $f$ et $g$ coïncident. La continuité transporte l'égalité à la limite.</p>`, b: R`<p>Soit $x\in E$. Par densité, il existe $a_n\in A$ avec $a_n\to x$. Pour tout $n$ : $f(a_n) = g(a_n)$. Par continuité séquentielle :</p><div class="sbox">$$f(x) = \lim f(a_n) = \lim g(a_n) = g(x).$$</div><p><b>Exemple :</b> deux fonctions continues sur $\mathbb R$ égales sur $\mathbb Q$ sont égales.</p>`, rappels: ["o-a-seq-cont", "o-a-adh-seq"] }
  ],
  ctx: { "o-a-seq-cont": R`<p>Utilisée pour démontrer l'équivalence, puis pour passer à la limite dans $f(a_n) = g(a_n)$.</p>`, "o-a-adh-seq": R`<p>$\overline A = E$ : tout $x$ est limite d'une suite de $A$.</p>` },
  piege: R`Dans la négation de la continuité, mettre $\eta$ dépendant de $x$ ou mal placer les quantificateurs.`,
  methode: R`Prolongement par densité : approcher chaque point par une suite de la partie dense et passer à la limite.`
},
{
  id: "o-an-36", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 2, time: "20 min",
  title: "Applications linéaires continues",
  enonce: R`<p>Soient $E$, $F$ deux espaces vectoriels normés réels.</p>
<ol>
<li>Soit $f : E\to F$ linéaire. Montrer l'équivalence des propriétés : (P1) $f$ est continue sur $E$ ; (P2) $f$ est continue en $0_E$ ; (P3) il existe $k>0$ tel que $\|f(x)\|_F\leqslant k\|x\|_E$ pour tout $x$.</li>
<li>Sur $E = \mathcal C([0,1],\mathbb R)$ muni de $\|\ \|_\infty$, on pose $\psi(f) = \displaystyle\int_0^1t\,f(t)\,dt$. Montrer que $\psi$ est linéaire continue.</li>
</ol>`,
  decode: { donnees: [R`$f$ linéaire.`], but: R`La caractérisation de la continuité des applications linéaires, puis un exemple.`, cles: {
    hom: R`Pour $x\neq0$, $y = \frac\eta{\|x\|}x$ vérifie $\|y\| = \eta$, et par linéarité $f(x) = \frac{\|x\|}\eta f(y)$.`,
    lip: R`Par linéarité, $\|f(x)-f(y)\| = \|f(x-y)\|\leqslant k\|x-y\|$ : $f$ est $k$-lipschitzienne.` } },
  steps: [
    { q: 1, t: "P1 ⇒ P2", h: R`<p>Continue partout, donc en particulier en $0$.</p>`, b: R`<p>(P1) dit que $f$ est continue en <b>tout</b> point de $E$. C'est vrai en particulier au point $0_E$ : c'est (P2).</p>` },
    { q: 1, t: "P2 ⇒ P3", h: R`<p>La continuité en $0$ avec $\varepsilon = 1$ donne : petits vecteurs $\Rightarrow$ petites images. Par homogénéité, on ramène tout vecteur à un petit vecteur.</p>`, b: R`<p>Avec $\varepsilon = 1$ : il existe $\eta>0$ tel que $\|y\|\leqslant\eta\Rightarrow\|f(y)\|\leqslant1$ (car $f(0) = 0$). Pour $x\neq0$, <span data-k="hom">on pose $y = \frac\eta{\|x\|}x$</span> :</p><div class="sbox">$$\|f(x)\| = \frac{\|x\|}\eta\|f(y)\|\leqslant\frac1\eta\|x\|.$$</div><p>(P3) est vraie avec $k = \frac1\eta$. Pour $x = 0$ : $\|f(0)\| = 0\leqslant\frac1\eta\cdot0$, l'inégalité est aussi vraie.</p>` },
    { q: 1, t: "P3 ⇒ P1", h: R`<p>(P3) dit que $f$ est lipschitzienne, grâce à la linéarité.</p>`, b: R`<p>On suppose (P3) : $\|f(z)\|\leqslant k\|z\|$ pour tout $z$. Pour $x,y\in E$, on applique (P3) à $z = x-y$, et la linéarité $f(x)-f(y) = f(x-y)$ :</p>$$\|f(x)-f(y)\| = \|f(x-y)\|\leqslant k\|x-y\|.$$<p><span data-k="lip">$f$ est $k$-lipschitzienne</span>. Une fonction lipschitzienne est continue (si $y\to x$, alors $\|f(y)-f(x)\|\leqslant k\|y-x\|\to0$) : c'est (P1).</p>`, rappels: ["o-a-lin-cont"] },
    { q: 2, t: "Exemple", h: R`<p>Linéarité de l'intégrale, puis majoration de $|tf(t)|$ par $t\|f\|_\infty$.</p>`, b: R`<p>$\psi$ est linéaire par linéarité de l'intégrale. Et</p><div class="sbox">$$|\psi(f)|\leqslant\int_0^1t\,|f(t)|\,dt\leqslant\|f\|_\infty\int_0^1t\,dt = \frac12\|f\|_\infty.$$</div><p>(P3) est vérifiée avec $k = \frac12$ : $\psi$ est continue. (Avec $f = 1$, on a égalité : $\frac12$ est la meilleure constante.)</p>`, rappels: ["o-a-lin-cont"] }
  ],
  ctx: { "o-a-lin-cont": R`<p>On prouve ici ce théorème, puis on l'applique avec $k = \frac12$.</p>` },
  piege: R`Oublier que $f(0) = 0$ (linéarité) dans le passage de (P2) à (P3).`,
  methode: R`Continuité d'une application linéaire : chercher une majoration $\|f(x)\|\leqslant k\|x\|$.`
},
{
  id: "o-an-37", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 2, time: "25 min",
  title: "Norme infinie et norme quadratique",
  enonce: R`<p>Soit $E = \mathcal C([0,1],\mathbb R)$. On pose $N_\infty(f) = \sup_{[0,1]}|f|$ et $N_2(f) = \Big(\displaystyle\int_0^1f(t)^2\,dt\Big)^{1/2}$.</p>
<ol>
<li><ol style="list-style:lower-alpha"><li>Montrer que $N_\infty$ et $N_2$ sont des normes sur $E$.</li><li>Montrer que $N_2\leqslant N_\infty$.</li><li>Montrer que tout ouvert pour $N_2$ est un ouvert pour $N_\infty$.</li></ol></li>
<li>Montrer que $N_2$ et $N_\infty$ ne sont pas équivalentes.</li>
</ol>`,
  decode: { donnees: [R`Deux fonctions de $E$ dans $\mathbb R_+$.`], but: R`Vérifier les axiomes, comparer les normes et leurs ouverts.`, cles: {
    ps: R`$(f|g) = \int_0^1fg$ est bilinéaire, symétrique, positive, et définie ($\int f^2 = 0\Rightarrow f = 0$ par continuité). $N_2$ est la norme associée.`,
    boule: R`$N_2\leqslant N_\infty$ entraîne $B_{N_\infty}(a,r)\subset B_{N_2}(a,r)$ : si $N_\infty(f-a)< r$, alors $N_2(f-a)< r$.` } },
  steps: [
    { q: 1, t: "N∞ est une norme", h: R`<p>Le sup d'une fonction continue sur un segment existe. Les axiomes se vérifient point par point puis en passant au sup.</p>`, b: R`<ul><li>$N_\infty(f)\geqslant0$, et $N_\infty(f) = 0\Rightarrow f = 0$.</li><li>$N_\infty(\lambda f) = |\lambda|N_\infty(f)$.</li><li>Pour tout $t$ : $|f(t)+g(t)|\leqslant N_\infty(f)+N_\infty(g)$, d'où $N_\infty(f+g)\leqslant N_\infty(f)+N_\infty(g)$.</li></ul>`, rappels: ["o-a-norme-def"] },
    { q: 1, t: "N₂ est une norme", h: R`<p>Le plus rapide : reconnaître la norme associée à un produit scalaire.</p>`, b: R`<p><span data-k="ps">$(f|g) = \int_0^1fg$ est un produit scalaire</span> sur $E$ : la séparation vient de « $f^2$ continue, positive, d'intégrale nulle $\Rightarrow f^2 = 0$ ». $N_2 = \sqrt{(f|f)}$ est donc une norme (l'inégalité triangulaire découle de Cauchy-Schwarz).</p>`, rappels: ["o-a-int-nulle", "o-a-cs"] },
    { q: 1, t: "Comparer", h: R`<p>On majore $f^2$ par $N_\infty(f)^2$ sous l'intégrale.</p>`, b: R`<p>Pour tout $t\in[0,1]$, $|f(t)|\leqslant N_\infty(f)$ (le sup est plus grand que chaque valeur), donc $f(t)^2\leqslant N_\infty(f)^2$. On intègre cette inégalité sur $[0,1]$ (l'intégrale conserve l'ordre, et l'intégrale d'une constante $c$ sur un intervalle de longueur $1$ vaut $c$) :</p>$$N_2(f)^2 = \int_0^1f(t)^2\,dt\leqslant\int_0^1N_\infty(f)^2\,dt = N_\infty(f)^2.$$<p>Les deux nombres sont positifs : on peut prendre la racine carrée.</p><div class="sbox">$$N_2\leqslant N_\infty.$$</div>` },
    { q: 1, t: "Les ouverts", h: R`<p>Les boules de $N_\infty$ sont plus petites que celles de $N_2$ de même rayon : un ouvert pour $N_2$ contient donc aussi une boule $N_\infty$ autour de chacun de ses points.</p>`, b: R`<p>Soit $U$ un ouvert pour $N_2$ et $a\in U$ : il existe $r>0$ avec $B_{N_2}(a,r)\subset U$.</p><p><span data-k="boule">Comparons les boules</span> : si $N_\infty(f-a)\lt r$, alors $N_2(f-a)\leqslant N_\infty(f-a)\lt r$ (étape précédente). Donc $B_{N_\infty}(a,r)\subset B_{N_2}(a,r)\subset U$.</p><p>Autour de chaque point de $U$, il y a une boule pour $N_\infty$ incluse dans $U$ : $U$ est ouvert pour $N_\infty$.</p>`, rappels: ["o-a-ouvert"] },
    { q: 2, t: "Non-équivalence", h: R`<p>Des fonctions de sup $1$ dont l'« énergie » $\int f^2$ tend vers $0$ : $x^n$.</p>`, b: R`<p>Avec $f_n(x) = x^n$ : $N_\infty(f_n) = 1$ et $N_2(f_n) = \frac1{\sqrt{2n+1}}$. Donc</p><div class="sbox">$$\frac{N_\infty(f_n)}{N_2(f_n)} = \sqrt{2n+1}\xrightarrow[n\to\infty]{}+\infty.$$</div><p>Pas de $\beta$ avec $N_\infty\leqslant\beta N_2$ : les normes ne sont pas équivalentes.</p>`, rappels: ["o-a-equiv-normes"] }
  ],
  ctx: { "o-a-norme-def": R`<p>Vérifiée directement pour $N_\infty$.</p>`, "o-a-int-nulle": R`<p>Avec $g = f^2$ : $N_2(f) = 0\Rightarrow f = 0$.</p>`, "o-a-cs": R`<p>Elle donne l'inégalité triangulaire de toute norme euclidienne.</p>`, "o-a-ouvert": R`<p>On transporte la boule $N_2$ en une boule $N_\infty$ plus petite.</p>`, "o-a-equiv-normes": R`<p>$f_n = x^n$ : rapport $\sqrt{2n+1}\to+\infty$.</p>` },
  piege: R`Croire que l'inclusion des ouverts va dans l'autre sens : c'est la norme la plus « forte » ($N_\infty$) qui a le plus d'ouverts.`,
  methode: R`Comparer deux normes : une inégalité dans un sens, une suite qui fait exploser le rapport dans l'autre.`
},
{
  id: "o-an-38", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 3, time: "30 min",
  title: "Trois normes subordonnées et un opérateur non continu",
  enonce: R`<p>Les trois questions sont indépendantes.</p>
<ol>
<li>Sur $E = \mathcal C([0,1],\mathbb R)$ muni de $\|f\|_1 = \int_0^1|f|$, on considère $V : f\mapsto g$ avec $g(x) = \int_0^xf(t)\,dt$. On admet que $V$ est un endomorphisme de $E$. Montrer que $V$ est continu et calculer sa norme subordonnée $|||V|||$. On pourra utiliser $f_n(t) = (n+1)(1-t)^n$.</li>
<li>Soit $(a_1,\dots,a_n)\in\mathbb R^n$ non nul, et $u(x) = \sum_{i=1}^na_ix_i$.<ol style="list-style:lower-alpha"><li>Justifier que $u$ est continue pour toute norme sur $\mathbb R^n$.</li><li>On munit $\mathbb R^n$ de $\|x\|_\infty = \max|x_i|$. Calculer $|||u|||$.</li></ol></li>
<li>Donner un espace normé $E$ et un endomorphisme de $E$ non continu.</li>
</ol>`,
  decode: { donnees: [R`$V(f)(x) = \int_0^xf$ ; $u(x) = \sum a_ix_i$.`], but: R`Calculer des normes d'opérateurs et trouver un contre-exemple.`, cles: {
    fn: R`$\|f_n\|_1 = \int_0^1(n+1)(1-t)^ndt = 1$, et $V(f_n)(x) = 1-(1-x)^{n+1}$.`,
    sgn: R`On choisit $x_i = \operatorname{signe}(a_i)\in\{-1,0,1\}$ : alors $\|x\|_\infty\leqslant1$ et $a_ix_i = |a_i|$.` } },
  steps: [
    { q: 1, t: "Majorer ‖V(f)‖₁", h: R`<p>On majore $|g(x)|$ par l'intégrale de $|f|$ sur tout $[0,1]$, qui ne dépend plus de $x$.</p>`, b: R`<p><b>Rappel</b> : un endomorphisme $V$ est continu s'il existe $k$ avec $\|V(f)\|\leqslant k\|f\|$, et la norme subordonnée $|||V|||$ est le plus petit tel $k$.</p><p>Pour $x\in[0,1]$, par l'inégalité triangulaire pour les intégrales, puis en agrandissant l'intervalle d'intégration (la fonction $|f|$ est positive) :</p>$$|g(x)| = \Big|\int_0^xf(t)\,dt\Big|\leqslant\int_0^x|f(t)|\,dt\leqslant\int_0^1|f(t)|\,dt = \|f\|_1.$$<p>On intègre cette inégalité en $x$ sur $[0,1]$ (le membre de droite ne dépend pas de $x$) :</p><div class="sbox">$$\|V(f)\|_1 = \int_0^1|g(x)|\,dx\leqslant\|f\|_1.$$</div><p>$V$ est continu et $|||V|||\leqslant1$.</p>`, rappels: ["o-a-lin-cont"] },
    { q: 1, t: "Atteindre la borne à la limite", h: R`<p>Pour que $\int_0^x f$ soit déjà presque égal à $\int_0^1f$ dès que $x>0$, il faut que $f$ concentre sa masse près de $0$ : c'est le rôle de $(n+1)(1-t)^n$.</p>`, b: R`<p><span data-k="fn">Avec $f_n$</span> : $\|f_n\|_1 = 1$ et</p>$$\|V(f_n)\|_1 = \int_0^1\big(1-(1-x)^{n+1}\big)dx = 1-\frac1{n+2}\xrightarrow[n\to\infty]{}1.$$<p>Donc $|||V|||\geqslant\frac{\|V(f_n)\|_1}{\|f_n\|_1}\to1$.</p><div class="sbox">$$|||V||| = 1\quad(\text{borne non atteinte}).$$</div>` },
    { q: 2, t: "Dimension finie", h: R`<p>En dimension finie, toutes les normes sont équivalentes et toute application linéaire est continue.</p>`, b: R`<p><b>Théorème du cours</b> : en dimension finie, toute application linéaire est continue, quelle que soit la norme choisie (toutes les normes y sont équivalentes).</p><p>$\mathbb R^n$ est de dimension finie et $u$ est linéaire ($u(\lambda x+y) = \sum a_i(\lambda x_i+y_i) = \lambda u(x)+u(y)$) : $u$ est continue pour n'importe quelle norme.</p>` },
    { q: 2, t: "Norme subordonnée à ‖ ‖∞", h: R`<p>Majorer avec l'inégalité triangulaire, puis trouver un vecteur qui réalise l'égalité en alignant les signes.</p>`, b: R`<p><b>Majoration.</b> Par l'inégalité triangulaire, puis $|x_i|\leqslant\|x\|_\infty$ pour chaque $i$ :</p>$$|u(x)| = \Big|\sum a_ix_i\Big|\leqslant\sum|a_i||x_i|\leqslant\Big(\sum|a_i|\Big)\|x\|_\infty.$$<p>Donc $|||u|||\leqslant\sum|a_i|$.</p><p><b>Cas d'égalité.</b> <span data-k="sgn">On prend $x_i = \operatorname{signe}(a_i)$</span> ($1$ si $a_i\geqslant0$, $-1$ sinon) : chaque $a_ix_i = |a_i|$, donc $u(x) = \sum|a_i|$, et $\|x\|_\infty = 1$. Le rapport $\frac{|u(x)|}{\|x\|_\infty}$ atteint $\sum|a_i|$.</p><div class="sbox">$$|||u||| = \sum_{i=1}^n|a_i| = \|a\|_1.$$</div>` },
    { q: 3, t: "La dérivation sur les polynômes", h: R`<p>En dimension infinie : la dérivation fait « grossir » $X^n$ d'un facteur $n$, sans borne.</p>`, b: R`<p>$E = \mathbb R[X]$ avec $\|P\| = \sup_{[0,1]}|P|$ (c'est une norme : un polynôme nul sur $[0,1]$ est nul). $D : P\mapsto P'$ est linéaire. Avec $P_n = X^n$ :</p><div class="sbox">$$\|P_n\| = 1,\qquad\|D(P_n)\| = \|nX^{n-1}\| = n.$$</div><p>Aucune constante $k$ ne vérifie $\|D(P)\|\leqslant k\|P\|$ : $D$ n'est pas continue.</p>`, rappels: ["o-a-lin-cont"] }
  ],
  ctx: { "o-a-lin-cont": R`<p>Q1 : $k = 1$. Q3 : aucune constante ne convient pour $D$.</p>` },
  piege: R`Conclure $|||V||| = 1$ uniquement de la majoration : il faut aussi montrer qu'on ne peut pas faire mieux (suite $f_n$).`,
  methode: R`Norme subordonnée : majoration $\|u(x)\|\leqslant k\|x\|$, puis des vecteurs qui atteignent (ou approchent) $k$.`
},
{
  id: "o-an-40", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 3, time: "20 min",
  title: "Série de Neumann dans une algèbre normée",
  enonce: R`<p>Soit $\mathcal A$ une algèbre de dimension finie, d'unité $e$, munie d'une norme vérifiant $\|uv\|\leqslant\|u\|\,\|v\|$.</p>
<ol>
<li>Soit $u\in\mathcal A$ avec $\|u\|<1$.<ol style="list-style:lower-alpha"><li>Montrer que $\sum u^n$ converge.</li><li>Montrer que $e-u$ est inversible, d'inverse $\sum_{n\geqslant0}u^n$, et que $\|(e-u)^{-1}\|\leqslant\|e\|+\dfrac{\|u\|}{1-\|u\|}$.</li></ol></li>
<li>Montrer que pour tout $u\in\mathcal A$, $\sum\dfrac{u^n}{n!}$ converge.</li>
</ol>`,
  decode: { donnees: [R`Norme sous-multiplicative, dimension finie.`], but: R`L'analogue de $\frac1{1-x} = \sum x^n$ et de $e^x$ dans une algèbre.`, cles: {
    sm: R`Par récurrence : $\|u^n\|\leqslant\|u\|^n$ pour $n\geqslant1$ (pour $n = 0$, $u^0 = e$).`,
    tel: R`$(e-u)\sum_{k=0}^Nu^k = \sum_{k=0}^Nu^k-\sum_{k=1}^{N+1}u^k = e-u^{N+1}$ (télescopage).` } },
  steps: [
    { q: 1, t: "Convergence absolue", h: R`<p>En dimension finie, une série absolument convergente converge. On majore $\|u^n\|$ par une suite géométrique grâce à la sous-multiplicativité.</p>`, b: R`<p>La norme est sous-multiplicative : <span data-k="sm">$\|uv\|\leqslant\|u\|\,\|v\|$</span>. Par récurrence, $\|u^n\|\leqslant\|u\|^n$ : c'est vrai pour $n = 1$, et $\|u^{n+1}\| = \|u^nu\|\leqslant\|u^n\|\,\|u\|\leqslant\|u\|^{n+1}$.</p><p>Comme $\|u\|<1$, la série géométrique $\sum\|u\|^n$ converge ; par comparaison, $\sum\|u^n\|$ converge : la série $\sum u^n$ est <b>absolument convergente</b>.</p><p><b>Rappel</b> : en dimension finie, une série absolument convergente converge. Donc $\sum u^n$ converge.</p>`, rappels: ["o-a-abs-dimfinie"] },
    { q: 1, t: "Télescoper", h: R`<p>Comme pour $(1-x)(1+x+\dots+x^N) = 1-x^{N+1}$.</p>`, b: R`<p><span data-k="tel">$(e-u)S_N = e-u^{N+1}$</span>, avec $S_N = \sum_{k\leqslant N}u^k$. Comme $\|u^{N+1}\|\leqslant\|u\|^{N+1}\to0$ et que la multiplication est continue (dimension finie) :</p><div class="sbox">$$(e-u)\sum_{n\geqslant0}u^n = e = \Big(\sum_{n\geqslant0}u^n\Big)(e-u).$$</div><p>$e-u$ est inversible, d'inverse $S = \sum u^n$, et $\|S\|\leqslant\|e\|+\sum_{n\geqslant1}\|u\|^n = \|e\|+\frac{\|u\|}{1-\|u\|}$.</p>` },
    { q: 2, t: "L'exponentielle", h: R`<p>Même idée avec $\frac{\|u\|^n}{n!}$, terme de la série de $e^{\|u\|}$.</p>`, b: R`<p>Même méthode qu'en Q1. Par sous-multiplicativité, $\|u^n\|\leqslant\|u\|^n$, donc</p>$$\Big\|\frac{u^n}{n!}\Big\|\leqslant\frac{\|u\|^n}{n!}.$$<p>La série $\sum\frac{\|u\|^n}{n!}$ est la série de l'exponentielle réelle en $\|u\|$, convergente (de somme $e^{\|u\|}$). Par comparaison, $\sum\frac{u^n}{n!}$ converge absolument, donc converge (dimension finie). Cela permet de définir $\exp(u)$ pour tout $u\in\mathcal A$.</p>`, rappels: ["o-a-abs-dimfinie"] }
  ],
  ctx: { "o-a-abs-dimfinie": R`<p>$\mathcal A$ est de dimension finie : la convergence absolue suffit.</p>` },
  piege: R`Écrire $\|u^n\| = \|u\|^n$ : on a seulement l'inégalité.`,
  methode: R`Dans une algèbre normée : sous-multiplicativité, puis convergence absolue et télescopage.`
},
{
  id: "o-an-44", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 2, time: "20 min",
  title: "Adhérence d'une réunion et d'une intersection",
  enonce: R`<p>Soit $E$ un espace vectoriel normé et $A$, $B$ deux parties non vides.</p>
<ol>
<li><ol style="list-style:lower-alpha"><li>Rappeler la caractérisation séquentielle de l'adhérence.</li><li>Montrer que $A\subset B\Rightarrow\overline A\subset\overline B$.</li></ol></li>
<li>Montrer que $\overline{A\cup B} = \overline A\cup\overline B$.</li>
<li><ol style="list-style:lower-alpha"><li>Montrer que $\overline{A\cap B}\subset\overline A\cap\overline B$.</li><li>Montrer par un exemple dans $\mathbb R$ que l'inclusion peut être stricte.</li></ol></li>
</ol>`,
  decode: { donnees: [R`Deux parties non vides.`], but: R`Comportement de l'adhérence avec les opérations ensemblistes.`, cles: {
    inf: R`Si une suite $(x_n)$ est à valeurs dans $A\cup B$, l'un des deux ensembles contient $x_n$ pour une infinité d'indices : on peut extraire une suite à valeurs dans $A$ (ou dans $B$).`,
    qr: R`Tout intervalle ouvert non vide de $\mathbb R$ contient des rationnels et des irrationnels : $\overline{\mathbb Q} = \overline{\mathbb R\setminus\mathbb Q} = \mathbb R$.` } },
  steps: [
    { q: 1, t: "Caractérisation et croissance", h: R`<p>Une suite de $A$ est une suite de $B$ si $A\subset B$.</p>`, b: R`<p><b>Caractérisation séquentielle</b> : $x\in\overline A$ si et seulement s'il existe une suite $(a_n)$ d'éléments de $A$ avec $a_n\to x$.</p><p><b>Croissance</b> : supposons $A\subset B$ et $x\in\overline A$. On prend une suite $(a_n)$ de $A$ qui tend vers $x$. Comme $A\subset B$, c'est aussi une suite d'éléments de $B$, qui tend vers $x$ : donc $x\in\overline B$.</p><div class="sbox">$$A\subset B\ \Longrightarrow\ \overline A\subset\overline B.$$</div>`, rappels: ["o-a-adh-seq"] },
    { q: 2, t: "Réunion", h: R`<p>Inclusion facile par croissance. Pour l'autre, on extrait de la suite une sous-suite qui reste dans $A$ ou dans $B$.</p>`, b: R`<p>$A\subset A\cup B$ et $B\subset A\cup B$ donnent $\overline A\cup\overline B\subset\overline{A\cup B}$.</p><p>Réciproquement, soit $x_n\to x$ avec $x_n\in A\cup B$. <span data-k="inf">L'un des deux, disons $A$, contient une infinité de $x_n$</span> : une suite extraite $(x_{\varphi(n)})$ est dans $A$ et tend vers $x$. Donc $x\in\overline A\subset\overline A\cup\overline B$.</p><div class="sbox">$$\overline{A\cup B} = \overline A\cup\overline B.$$</div>` },
    { q: 3, t: "Intersection : l'inclusion", h: R`<p>Croissance de l'adhérence, deux fois.</p>`, b: R`<p>On utilise la croissance de l'adhérence (Q1b) deux fois :</p><ul><li>$A\cap B\subset A$, donc $\overline{A\cap B}\subset\overline A$ ;</li><li>$A\cap B\subset B$, donc $\overline{A\cap B}\subset\overline B$.</li></ul><p>Une partie incluse dans $\overline A$ et dans $\overline B$ est incluse dans leur intersection :</p><div class="sbox">$$\overline{A\cap B}\subset\overline A\cap\overline B.$$</div>` },
    { q: 3, t: "Un exemple d'inclusion stricte", h: R`<p>Deux parties disjointes, mais toutes les deux denses.</p>`, b: R`<p>$A = \mathbb Q$, $B = \mathbb R\setminus\mathbb Q$ : $A\cap B = \varnothing$, donc $\overline{A\cap B} = \varnothing$. Mais <span data-k="qr">$\overline A = \overline B = \mathbb R$</span>.</p><div class="sbox">$$\overline{A\cap B} = \varnothing\subsetneq\mathbb R = \overline A\cap\overline B.$$</div><p>Un exemple plus simple : $A = ]0,1[$, $B = ]1,2[$ donne $\varnothing\subsetneq\{1\}$.</p>` }
  ],
  ctx: { "o-a-adh-seq": R`<p>Toutes les inclusions se prouvent avec des suites.</p>` },
  piege: R`Croire que l'adhérence commute avec l'intersection comme avec la réunion.`,
  methode: R`Adhérence et opérations : suites et suites extraites ; contre-exemples avec des parties denses disjointes.`
},
{
  id: "o-an-45", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 3, time: "25 min",
  title: "Convexité, adhérence et distance à une partie",
  enonce: R`<p>Les questions 1 et 2 sont indépendantes. Soit $E$ un espace vectoriel normé réel et $A$ une partie non vide.</p>
<ol>
<li><ol style="list-style:lower-alpha"><li>Donner la caractérisation séquentielle de $\overline A$.</li><li>Montrer que si $A$ est <span data-k="conv">convexe</span>, $\overline A$ l'est aussi.</li></ol></li>
<li>On pose $d_A(x) = \inf_{a\in A}\|x-a\|$.<ol style="list-style:lower-alpha"><li>Montrer que $d_A(x) = 0\Rightarrow x\in\overline A$.</li><li>On suppose $A$ fermée et $d_A(tx+(1-t)y)\leqslant t\,d_A(x)+(1-t)\,d_A(y)$ pour tous $x,y\in E$, $t\in[0,1]$. Montrer que $A$ est convexe.</li></ol></li>
</ol>`,
  decode: { donnees: [R`$d_A(x)$ : distance de $x$ à $A$.`], but: R`Liens entre convexité, adhérence et distance.`, cles: {
    conv: R`$$\forall x,y\in A,\ \forall t\in[0,1],\ tx+(1-t)y\in A.$$Le segment $[x,y]$ est inclus dans $A$.`,
    inf: R`Par définition de la borne inférieure, pour tout $n$ il existe $a_n\in A$ avec $\|x-a_n\|\leqslant d_A(x)+\frac1{n+1}$.` } },
  steps: [
    { q: 1, t: "Caractérisation séquentielle", h: R`<p>À connaître.</p>`, b: R`<p>$x\in\overline A$ si et seulement s'il existe une suite $(a_n)$ d'éléments de $A$ qui converge vers $x$.</p><p>Exemple dans $\mathbb R$ : $1\in\overline{[0,1[}$, car $a_n = 1-\frac1{n+1}\in[0,1[$ tend vers $1$.</p>`, rappels: ["o-a-adh-seq"] },
    { q: 1, t: "L'adhérence d'un convexe est convexe", h: R`<p>On approche $x$ et $y$ par des suites de $A$ ; les combinaisons convexes de ces suites restent dans $A$ et tendent vers $tx+(1-t)y$.</p>`, b: R`<p>Soient $x,y\in\overline A$, $t\in[0,1]$, $a_n\to x$, $b_n\to y$ avec $a_n,b_n\in A$. Par convexité $ta_n+(1-t)b_n\in A$, et</p>$$\|ta_n+(1-t)b_n-(tx+(1-t)y)\|\leqslant t\|a_n-x\|+(1-t)\|b_n-y\|\to0.$$<p>Donc $tx+(1-t)y\in\overline A$.</p>` + FIG(380, 150, `<ellipse cx="190" cy="75" rx="160" ry="60" style="fill:var(--yellow-soft);stroke:var(--gold-ink);stroke-width:1.4"/><line class="vb" x1="80" y1="80" x2="300" y2="60" style="stroke-width:2"/><circle cx="80" cy="80" r="5" class="mass"/><circle cx="300" cy="60" r="5" class="mass"/><circle cx="190" cy="70" r="4" style="fill:var(--blue)"/>` + S(70, 102, "x") + S(306, 54, "y") + S(186, 92, "tx + (1 − t)y") + S(40, 24, "A convexe : tout le segment est dedans"), R`Une partie convexe contient le segment joignant deux quelconques de ses points.`, "Segment dans une partie convexe"), rappels: ["o-a-adh-seq"] },
    { q: 2, t: "Distance nulle", h: R`<p>La borne inférieure s'approche par des éléments de $A$ : on obtient une suite de $A$ qui tend vers $x$.</p>`, b: R`<p>$d_A(x) = \inf_{a\in A}\|x-a\|$. <b>Caractérisation de la borne inférieure</b> : pour tout $\varepsilon>0$, il existe $a\in A$ avec $\|x-a\|\leqslant d_A(x)+\varepsilon$.</p><p>Si $d_A(x) = 0$, on prend $\varepsilon = \frac1{n+1}$ : <span data-k="inf">il existe $a_n\in A$ avec $\|x-a_n\|\leqslant\frac1{n+1}$</span>. Donc $\|x-a_n\|\to0$, c'est-à-dire $a_n\to x$, avec $a_n\in A$ : par la caractérisation séquentielle, $x\in\overline A$.</p>` },
    { q: 2, t: "Une distance convexe donne une partie convexe", h: R`<p>Pour $x,y\in A$, les distances $d_A(x)$, $d_A(y)$ sont nulles ; l'hypothèse force $d_A$ du point du segment à être nulle aussi. Puis $A$ fermée donne l'appartenance.</p>`, b: R`<p>Pour montrer que $A$ est convexe, on prend $x,y\in A$ et $t\in[0,1]$, et on montre que $z = tx+(1-t)y\in A$.</p><ul><li>$x\in A$ donne $d_A(x) = 0$ (prendre $a = x$ dans l'inf) ; de même $d_A(y) = 0$.</li><li>L'hypothèse donne $d_A(z)\leqslant t\cdot0+(1-t)\cdot0 = 0$, et une distance est $\geqslant0$ : $d_A(z) = 0$.</li><li>Par 2.a, $z\in\overline A$ ; or $A$ est fermée, donc $\overline A = A$ et $z\in A$.</li></ul><div class="sbox">$$A\ \text{est convexe}.$$</div>` }
  ],
  ctx: { "o-a-adh-seq": R`<p>Pour approcher $x$ et $y$ par des éléments de $A$.</p>` },
  piege: R`Oublier l'hypothèse « $A$ fermée » à la fin : sans elle, on obtient seulement $tx+(1-t)y\in\overline A$.`,
  methode: R`Distance nulle $\iff$ point adhérent ; convexité de l'adhérence par passage à la limite.`
},
{
  id: "o-an-54", subj: "oraux", year: "mp", chap: 11, concours: "ccinp", level: 2, time: "20 min",
  title: "L'espace des suites de limite nulle",
  enonce: R`<p>Soit $E$ l'ensemble des suites réelles qui convergent vers $0$.</p>
<ol>
<li>Montrer que $E$ est un sous-espace vectoriel de $\mathbb R^{\mathbb N}$.</li>
<li>Pour $u\in E$, on pose $\|u\| = \sup_{n\in\mathbb N}|u_n|$.<ol style="list-style:lower-alpha"><li>Montrer que $\|\ \|$ est une norme sur $E$.</li><li>Montrer que pour tout $u\in E$, $\sum\frac{u_n}{3^n}$ converge.</li><li>On pose $\theta(u) = \displaystyle\sum_{n=0}^{+\infty}\frac{u_n}{3^n}$. Montrer que $\theta$ est continue sur $E$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`Les suites de limite nulle, avec la norme sup.`], but: R`Structure d'espace normé, puis continuité d'une forme linéaire.`, cles: {
    born: R`Une suite convergente est bornée : le sup est fini.`,
    geo: R`$$\sum_{n\geqslant0}\frac1{3^n} = \frac1{1-\frac13} = \frac32.$$` } },
  steps: [
    { q: 1, t: "Sous-espace", h: R`<p>Limite d'une combinaison linéaire.</p>`, b: R`<p>$E\subset\mathbb R^{\mathbb N}$, et on vérifie :</p><ul><li>la suite nulle tend vers $0$ : elle est dans $E$ ;</li><li>si $u_n\to0$, $v_n\to0$ et $\lambda\in\mathbb R$, par opérations sur les limites $\lambda u_n+v_n\to\lambda\cdot0+0 = 0$.</li></ul><p>$E$ est un sous-espace vectoriel de $\mathbb R^{\mathbb N}$.</p>`, rappels: ["o-a-sev"] },
    { q: 2, t: "Une norme", h: R`<p>Le sup existe car les suites convergentes sont bornées ; les axiomes se vérifient terme à terme.</p>`, b: R`<p>Une suite convergente est bornée, donc <span data-k="born">$\|u\| = \sup|u_n|$ est un réel</span>. On vérifie les axiomes :</p><ul><li><b>Séparation</b> : si $\|u\| = 0$, alors $0\leqslant|u_n|\leqslant0$ pour tout $n$ : $u = 0$.</li><li><b>Homogénéité</b> : $\sup|\lambda u_n| = |\lambda|\sup|u_n|$.</li><li><b>Inégalité triangulaire</b> : pour tout $n$, $|u_n+v_n|\leqslant|u_n|+|v_n|\leqslant\|u\|+\|v\|$. Le sup est le plus petit majorant, donc $\|u+v\|\leqslant\|u\|+\|v\|$.</li></ul>`, rappels: ["o-a-norme-def"] },
    { q: 2, t: "Convergence de la série", h: R`<p>On majore $|u_n|$ par $\|u\|$ : terme géométrique.</p>`, b: R`<p>$\|u\| = \sup_n|u_n|$ majore chaque $|u_n|$, donc pour tout $n$ :</p>$$\Big|\frac{u_n}{3^n}\Big| = \frac{|u_n|}{3^n}\leqslant\frac{\|u\|}{3^n} = \|u\|\Big(\frac13\Big)^n.$$<p>$\sum\big(\frac13\big)^n$ est une série géométrique de raison $\frac13<1$ : elle converge (somme $\frac32$). Par comparaison de séries à termes positifs, $\sum\frac{|u_n|}{3^n}$ converge : $\sum\frac{u_n}{3^n}$ converge absolument, donc converge.</p>` },
    { q: 2, t: "Continuité de θ", h: R`<p>$\theta$ est linéaire : on cherche $k$ avec $|\theta(u)|\leqslant k\|u\|$.</p>`, b: R`<p>$\theta$ est linéaire (linéarité de la somme d'une série convergente). Pour une application linéaire, la continuité équivaut à l'existence de $k$ avec $|\theta(u)|\leqslant k\|u\|$. Par l'inégalité triangulaire et l'étape précédente :</p>$$|\theta(u)|\leqslant\sum_{n\geqslant0}\frac{|u_n|}{3^n}\leqslant\|u\|\sum_{n\geqslant0}\frac1{3^n} = \|u\|\cdot\frac1{1-1/3}.$$<p>Par <span data-k="geo">la somme géométrique</span>, $\frac1{1-1/3} = \frac32$ :</p><div class="sbox">$$|\theta(u)|\leqslant\frac32\|u\|.$$</div><p>$\theta$ est continue (et même $\frac32$-lipschitzienne).</p>`, rappels: ["o-a-lin-cont"] }
  ],
  ctx: { "o-a-sev": R`<p>$E\subset\mathbb R^{\mathbb N}$, stable par combinaison linéaire.</p>`, "o-a-norme-def": R`<p>Vérification terme à terme puis passage au sup.</p>`, "o-a-lin-cont": R`<p>$k = \frac32$.</p>` },
  piege: R`Oublier de dire pourquoi $\sup|u_n|$ est fini.`,
  methode: R`Forme linéaire définie par une série : majorer terme à terme par $\|u\|$ et sommer.`
},
{
  id: "o-an-39", subj: "oraux", year: "mp", chap: 2, concours: "ccinp", level: 3, time: "25 min",
  title: "L'espace ℓ² et l'orthogonal des suites presque nulles",
  enonce: R`<p>On note $\ell^2$ l'ensemble des suites réelles $x = (x_n)_{n\in\mathbb N}$ telles que $\sum x_n^2$ converge.</p>
<ol>
<li><ol style="list-style:lower-alpha"><li>Montrer que pour $x,y\in\ell^2$, $\sum x_ny_n$ converge. On pose $(x|y) = \sum_{n\geqslant0}x_ny_n$.</li><li>Montrer que $\ell^2$ est un sous-espace vectoriel de $\mathbb R^{\mathbb N}$.</li></ol><p>On admet que $(\ |\ )$ est un produit scalaire sur $\ell^2$, de norme associée $\|\ \|$.</p></li>
<li>Montrer que $\varphi : x\mapsto x_0+2x_1$ est linéaire et continue sur $\ell^2$.</li>
<li>Soit $F$ l'ensemble des suites presque nulles (nulles à partir d'un certain rang). Déterminer $F^\perp$, puis comparer $F$ et $(F^\perp)^\perp$.</li>
</ol>`,
  decode: { donnees: [R`$x\in\ell^2\iff\sum x_n^2<+\infty$.`], but: R`Structure de $\ell^2$, une forme linéaire continue, un orthogonal.`, cles: {
    am: R`Pour réels $a,b$ : $(|a|-|b|)^2\geqslant0$ donne $$|ab|\leqslant\frac{a^2+b^2}2.$$`,
    ek: R`$e^{(k)}$ est la suite qui vaut $1$ au rang $k$ et $0$ ailleurs. Elle est presque nulle, et $(x|e^{(k)}) = x_k$.` } },
  steps: [
    { q: 1, t: "Convergence de Σ x_n y_n", h: R`<p>On majore $|x_ny_n|$ par une combinaison de $x_n^2$ et $y_n^2$, qui sont sommables.</p>`, b: R`<p><b>Inégalité clé</b> : pour deux réels $a,b$, $(a-b)^2\geqslant0$ donne $a^2-2ab+b^2\geqslant0$, soit $ab\leqslant\frac12(a^2+b^2)$.</p><p>Avec $a = |x_n|$ et $b = |y_n|$ : <span data-k="am">$|x_ny_n|\leqslant\frac12(x_n^2+y_n^2)$</span>.</p><p>$\sum x_n^2$ et $\sum y_n^2$ convergent (car $x,y\in\ell^2$), donc $\sum\frac12(x_n^2+y_n^2)$ converge. Par comparaison, $\sum|x_ny_n|$ converge : $\sum x_ny_n$ converge absolument.</p>` },
    { q: 1, t: "Sous-espace", h: R`<p>Développer $(\lambda x_n+y_n)^2$ et utiliser 1.a.</p>`, b: R`<p>$\ell^2$ est une partie de l'espace vectoriel $\mathbb R^{\mathbb N}$ ; on vérifie :</p><ul><li>la suite nulle est dans $\ell^2$ ($\sum0^2 = 0$) ;</li><li>si $x,y\in\ell^2$ et $\lambda\in\mathbb R$ : on développe $(\lambda x_n+y_n)^2 = \lambda^2x_n^2+2\lambda x_ny_n+y_n^2$. Chacun des trois termes est celui d'une série convergente : $\sum x_n^2$ et $\sum y_n^2$ par hypothèse, $\sum x_ny_n$ par Q1a. Donc $\sum(\lambda x_n+y_n)^2$ converge : $\lambda x+y\in\ell^2$.</li></ul><p>$\ell^2$ est un sous-espace vectoriel de $\mathbb R^{\mathbb N}$.</p>`, rappels: ["o-a-sev"] },
    { q: 2, t: "Continuité de φ", h: R`<p>Forme linéaire : on cherche $|\varphi(x)|\leqslant k\|x\|$, avec Cauchy-Schwarz sur deux termes.</p>`, b: R`<p>$\varphi$ est linéaire. Par Cauchy-Schwarz dans $\mathbb R^2$ :</p><div class="sbox">$$|x_0+2x_1|\leqslant\sqrt{1+4}\,\sqrt{x_0^2+x_1^2}\leqslant\sqrt5\,\|x\|.$$</div><p>$\varphi$ est continue (on a même $\varphi(x) = (x|a)$ avec $a = (1,2,0,0,\dots)$).</p>`, rappels: ["o-a-cs", "o-a-lin-cont"] },
    { q: 3, t: "F⊥ = {0}", h: R`<p>Tester l'orthogonalité contre les suites « élémentaires » $e^{(k)}$, qui sont dans $F$.</p>`, b: R`<p>Notons $e^{(k)}$ la suite qui vaut $1$ au rang $k$ et $0$ ailleurs : elle est presque nulle, donc $e^{(k)}\in F$. Et toute suite de $F$ est combinaison linéaire finie de ces $e^{(k)}$.</p><p>Soit $x\in F^\perp$ : $x$ est orthogonal à tout élément de $F$, en particulier à chaque $e^{(k)}$. Or <span data-k="ek">$(x|e^{(k)}) = \sum_nx_ne^{(k)}_n = x_k$</span> (seul le terme $n = k$ reste). Donc $x_k = 0$ pour tout $k$ : $x = 0$. Réciproquement, $0$ est orthogonal à tout.</p><div class="sbox">$$F^\perp = \{0\},\qquad(F^\perp)^\perp = \{0\}^\perp = \ell^2.$$</div>`, rappels: ["o-a-orth"] },
    { q: 3, t: "Comparer", h: R`<p>Trouver une suite de $\ell^2$ qui n'est pas presque nulle.</p>`, b: R`<p>La suite $\big(\frac1{n+1}\big)$ est dans $\ell^2$ ($\sum\frac1{(n+1)^2}$ converge) mais pas dans $F$. Donc</p><div class="sbox">$$F\subsetneq(F^\perp)^\perp = \ell^2.$$</div><p>En dimension finie on aurait $(F^\perp)^\perp = F$ ; en dimension infinie, c'est faux en général.</p>` }
  ],
  ctx: { "o-a-sev": R`<p>Stabilité par combinaison linéaire grâce au développement du carré.</p>`, "o-a-cs": R`<p>Dans $\mathbb R^2$ : $(1,2)\cdot(x_0,x_1)\leqslant\sqrt5\sqrt{x_0^2+x_1^2}$.</p>`, "o-a-lin-cont": R`<p>$k = \sqrt5$.</p>`, "o-a-orth": R`<p>$A = F$ ; on teste avec les $e^{(k)}$.</p>` },
  piege: R`Affirmer $(F^\perp)^\perp = F$ par réflexe de dimension finie.`,
  methode: R`Orthogonal d'une famille : tester contre les vecteurs les plus simples (ici les $e^{(k)}$).`
}
]);
LEMME.rappels({ "o-a-orth": { t: "Orthogonal d'une partie", b: R`<div class="sbox">$$A^\perp = \{x : \forall a\in A,\ (x|a) = 0\},\qquad A\subset B\Rightarrow B^\perp\subset A^\perp,\qquad\{0\}^\perp = E.$$</div>$$\dim E\lt\infty:\quad(F^\perp)^\perp = F.$$` } });
})();

/* ===== Chapitres 13, 14, 15 : Fonctions d'une variable, équations différentielles, plusieurs variables ===== */
(() => {
const { FIG, S, ARR, PL, GRAPH, f1 } = window.__LA;

LEMME.rappels({
  "o-a-leibniz": { t: "Formule de Leibniz", b: R`<div class="sbox">$$(fg)^{(n)} = \sum_{k=0}^n\binom nkf^{(k)}g^{(n-k)}.$$</div><p><b>Récurrence</b> avec Pascal :</p>$$\binom nk+\binom n{k-1} = \binom{n+1}k.$$` },
  "o-a-pascal": { t: "Relation de Pascal", b: R`<div class="sbox">$$\binom n{k-1}+\binom nk = \binom{n+1}k\qquad(1\leqslant k\leqslant n).$$</div>` },
  "o-a-taf": { t: "Théorème des accroissements finis", b: R`<div class="sbox">$$f\in\mathcal C^0([a,b])\cap\mathcal D(]a,b[)\ \Longrightarrow\ \exists c\in\,]a,b[,\ f(b)-f(a) = f'(c)(b-a).$$</div>` },
  "o-a-taux": { t: "Dérivabilité et taux d'accroissement", b: R`<div class="sbox">$$f\ \text{dérivable en}\ x_0\iff\lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}\in\mathbb R.$$</div>` },
  "o-a-linearisation": { t: "Linéariser une puissance de sinus ou cosinus", b: R`<div class="sbox">$$\sin^3x = \frac{3\sin x-\sin3x}4,\qquad\cos^3x = \frac{3\cos x+\cos3x}4,$$$$\sin^4x = \frac{3-4\cos2x+\cos4x}8.$$</div>$$\cos x = \frac{e^{ix}+e^{-ix}}2,\qquad\sin x = \frac{e^{ix}-e^{-ix}}{2i}.$$<p>Puis binôme de Newton.</p>` },
  "o-a-var-const": { t: "Variation des constantes (ordre 2)", b: R`<p>$y''+y = g$, $y = \lambda(x)\cos x+\mu(x)\sin x$ :</p><div class="sbox">$$\left\{\begin{aligned}\lambda'\cos x+\mu'\sin x&= 0\\-\lambda'\sin x+\mu'\cos x&= g\end{aligned}\right.\iff\left\{\begin{aligned}\lambda'&= -g\sin x\\\mu'&= g\cos x\end{aligned}\right.$$</div>` },
  "o-a-structure-edl": { t: "Structure des solutions d'une équation linéaire", b: R`<p>$I$ intervalle où le coefficient dominant ne s'annule pas :</p><div class="sbox">$$\mathcal S = y_p+\mathcal S_H,\qquad\dim\mathcal S_H = \text{ordre}.$$</div><p><b>Ordre $2$</b> :</p>$$\mathcal S_H = \operatorname{Vect}(y_1,y_2),\qquad(y_1,y_2)\ \text{libre}.$$<p>Si le coefficient dominant s'annule : résoudre de chaque côté, puis raccorder.</p>` },
  "o-a-se-edo": { t: "Chercher les solutions développables en série entière", b: R`$$y = \sum a_nx^n,\quad y' = \sum_{n}(n+1)a_{n+1}x^n,\quad y'' = \sum_n(n+2)(n+1)a_{n+2}x^n.$$<div class="sbox">$$\sum_nc_nx^n = 0\ \text{sur}\ ]-r,r[\ \Longrightarrow\ \forall n,\ c_n = 0.$$</div><p>D'où une récurrence sur les $a_n$ ; vérifier $R>0$ à la fin.</p>` },
  "o-a-cont-2var": { t: "Continuité en (0,0)", b: R`<p>$r = \sqrt{x^2+y^2}$ :</p><div class="sbox">$$|x|\leqslant r,\qquad|y|\leqslant r,\qquad|xy|\leqslant\frac{r^2}2.$$</div>$$|f(x,y)-f(0,0)|\leqslant\varepsilon(r),\ \varepsilon(r)\xrightarrow[r\to0]{}0\ \Longrightarrow\ f\text{ continue en }(0,0).$$` },
  "o-a-c1-2var": { t: "Fonctions de classe C¹ de deux variables", b: R`<div class="sbox">$$f\in\mathcal C^1(U)\iff\frac{\partial f}{\partial x},\ \frac{\partial f}{\partial y}\ \text{existent et sont continues sur}\ U\ \Longrightarrow\ f\ \text{différentiable}.$$</div><p><b>En $(0,0)$</b> :</p>$$\frac{\partial f}{\partial x}(0,0) = \lim_{t\to0}\frac{f(t,0)-f(0,0)}t,\qquad\text{puis}\ \lim_{(x,y)\to0}\frac{\partial f}{\partial x}(x,y)\overset{?}{=}\frac{\partial f}{\partial x}(0,0).$$` },
  "o-a-pt-critique": { t: "Points critiques et extremums", b: R`<div class="sbox">$$f\in\mathcal C^1(U),\ U\ \text{ouvert},\ a\ \text{extremum local}\ \Longrightarrow\ \nabla f(a) = 0.$$</div><p>En un point critique, $r = \partial_{xx}f$, $s = \partial_{xy}f$, $t = \partial_{yy}f$ :</p>$$\left\{\begin{aligned}rt-s^2>0,\ r>0&\Rightarrow\text{minimum local},\\rt-s^2>0,\ r\lt0&\Rightarrow\text{maximum local},\\rt-s^2\lt0&\Rightarrow\text{point col}.\end{aligned}\right.$$` },
  "o-a-bornes": { t: "Bornes atteintes", b: R`<div class="sbox">$$f\in\mathcal C^0(K,\mathbb R),\ K\ \text{compact}\neq\emptyset\ \Longrightarrow\ \exists a,b\in K,\ f(a) = \min_Kf,\ f(b) = \max_Kf.$$</div>$$\dim E\lt\infty:\quad K\ \text{fermé borné}\ \Longrightarrow\ K\ \text{compact}.$$` },
  "o-a-lagrange": { t: "Extrema liés", b: R`<p>$f,g\in\mathcal C^1(U)$, $X = \{g = 0\}$ :</p><div class="sbox">$$f_{|X}\ \text{extremum en}\ a,\ \nabla g(a)\neq0\ \Longrightarrow\ \exists\lambda\in\mathbb R,\ \nabla f(a) = \lambda\,\nabla g(a).$$</div>` },
  "o-a-diff-def": { t: "Différentiabilité", b: R`<div class="sbox">$$f\text{ différentiable en }a\iff\exists L\in\mathcal L(E,F),\ f(a+h) = f(a)+L(h)+o(\|h\|).$$</div>$$\dim E\lt\infty\ \Longrightarrow\ L\text{ continue},\qquad B\text{ bilinéaire}\ \Longrightarrow\ \exists C,\ \|B(x,y)\|\leqslant C\|x\|\|y\|.$$` }
});

LEMME.exercises([
{
  id: "o-an-3", subj: "oraux", year: "mp", chap: 12, concours: "ccinp", level: 2, time: "20 min",
  title: "Dérivées successives par la formule de Leibniz",
  enonce: R`<ol>
<li>Pour $g(x) = e^{3x}$ et $h(x) = \dfrac1{1-x}$, calculer $g^{(k)}$ et $h^{(k)}$ pour tout $k\in\mathbb N$, sur leurs domaines.</li>
<li>Soit $f(x) = \dfrac{e^{3x}}{1-x}$. À l'aide de la <span data-k="leib">formule de Leibniz</span>, calculer $f^{(n)}(x)$ pour tout $n\in\mathbb N$ et $x\neq1$.</li>
<li>Démontrer la formule de Leibniz.</li>
</ol>`,
  decode: { donnees: [R`$f = g\,h$ avec $g = e^{3x}$, $h = (1-x)^{-1}$.`], but: R`Les dérivées $n$-ièmes d'un produit.`, cles: {
    leib: R`$$(gh)^{(n)} = \sum_{k=0}^n\binom nkg^{(k)}h^{(n-k)}.$$`,
    rec: R`$h^{(k)}(x) = k!\,(1-x)^{-(k+1)}$ : chaque dérivation sort l'exposant et un signe moins, qui se compense avec la dérivée de $1-x$.` } },
  steps: [
    { q: 1, t: "Dérivées de g et h", h: R`<p>On calcule les premières, on devine, on prouve par récurrence.</p>`, b: R`<p>$g^{(k)}(x) = 3^ke^{3x}$. Pour $h(x) = (1-x)^{-1}$ : $h' = (1-x)^{-2}$, $h'' = 2(1-x)^{-3}$, et par récurrence</p><div class="sbox">$$h^{(k)}(x) = \frac{k!}{(1-x)^{k+1}}\qquad(x\neq1).$$</div><p>Hérédité : <span data-k="rec">$\big(k!(1-x)^{-(k+1)}\big)' = k!(k+1)(1-x)^{-(k+2)}$</span>.</p>` },
    { q: 2, t: "Appliquer Leibniz", h: R`<p>On choisit quelle fonction dériver $k$ fois et laquelle $n-k$ fois : peu importe, la formule est symétrique.</p>`, b: R`<div class="sbox">$$f^{(n)}(x) = \sum_{k=0}^n\binom nk\frac{k!}{(1-x)^{k+1}}3^{n-k}e^{3x} = e^{3x}\sum_{k=0}^n\frac{n!}{(n-k)!}\cdot\frac{3^{n-k}}{(1-x)^{k+1}}.$$</div><p><b>Contrôle $n = 1$ :</b> $f'(x) = e^{3x}\big(\frac3{1-x}+\frac1{(1-x)^2}\big)$, ce qu'on retrouve en dérivant le quotient.</p>`, rappels: ["o-a-leibniz"] },
    { q: 3, t: "Récurrence", h: R`<p>On dérive la formule au rang $n$ terme à terme, on regroupe les termes de même forme, et Pascal fait le reste.</p>`, b: R`<p>Au rang $0$, c'est $fg = fg$. Si la formule est vraie au rang $n$ :</p>$$(fg)^{(n+1)} = \sum_{k=0}^n\binom nk\big(f^{(k+1)}g^{(n-k)}+f^{(k)}g^{(n+1-k)}\big).$$<p>On réindexe la première somme ($j = k+1$) et on regroupe selon $f^{(j)}g^{(n+1-j)}$ :</p>$$= \sum_{j=0}^{n+1}\Big(\binom n{j-1}+\binom nj\Big)f^{(j)}g^{(n+1-j)} = \sum_{j=0}^{n+1}\binom{n+1}jf^{(j)}g^{(n+1-j)},$$<p>avec les conventions $\binom n{-1} = \binom n{n+1} = 0$ et la relation de Pascal.</p>`, rappels: ["o-a-pascal", "o-a-leibniz"] }
  ],
  ctx: { "o-a-leibniz": R`<p>$f = g\cdot h$ avec $g^{(n-k)} = 3^{n-k}e^{3x}$ et $h^{(k)} = \frac{k!}{(1-x)^{k+1}}$.</p>`, "o-a-pascal": R`<p>Utilisée pour fusionner les deux sommes au rang $n+1$.</p>` },
  piege: R`Oublier les termes extrêmes ($j = 0$ et $j = n+1$) en regroupant les sommes.`,
  methode: R`Produit de deux fonctions dont on connaît les dérivées $k$-ièmes : formule de Leibniz.`
},
{
  id: "o-an-4", subj: "oraux", year: "mp", chap: 12, concours: "ccinp", level: 2, time: "20 min",
  title: "Limite de la dérivée et dérivabilité",
  enonce: R`<ol>
<li>Énoncer le théorème des accroissements finis.</li>
<li>Soit $f : [a,b]\to\mathbb R$ continue, $x_0\in\,]a,b[$, $f$ dérivable sur $]a,x_0[$ et sur $]x_0,b[$. Montrer que si $f'$ a une limite finie $\ell$ en $x_0$, alors $f$ est dérivable en $x_0$ et $f'(x_0) = \ell$.</li>
<li>Montrer que la réciproque est fausse, avec $k(x) = x^2\cos\frac1x$ ($x\neq0$), $k(0) = 0$.</li>
</ol>`,
  decode: { donnees: [R`$f$ continue en $x_0$, dérivable autour.`], but: R`Le théorème de la limite de la dérivée, et un contre-exemple à sa réciproque.`, cles: {
    cx: R`$c_x$ est entre $x_0$ et $x$, donc $c_x\to x_0$ quand $x\to x_0$ (encadrement).`,
    osc: R`$\sin\frac1x$ n'a pas de limite en $0$ : avec $x_n = \frac1{\pi/2+2n\pi}$ on obtient $1$, avec $y_n = \frac1{2n\pi}$ on obtient $0$.` } },
  steps: [
    { q: 1, t: "Énoncé", h: R`<p>À savoir par cœur, avec ses hypothèses.</p>`, b: R`<p><b>Théorème des accroissements finis.</b> Si $f$ est continue sur $[a,b]$ et dérivable sur $]a,b[$, il existe $c\in\,]a,b[$ tel que</p>$$f(b)-f(a) = f'(c)(b-a).$$<p>Lecture géométrique : il existe un point où la tangente est parallèle à la corde qui joint $(a,f(a))$ et $(b,f(b))$. Exemple : $f(x) = x^2$ sur $[0,2]$ : $4 = f'(c)\times2$ donne $c = 1$.</p>`, rappels: ["o-a-taf"] },
    { q: 2, t: "Accroissements finis entre x₀ et x", h: R`<p>Le taux d'accroissement en $x_0$ est égal à une valeur de $f'$ en un point intermédiaire. Si $f'$ a une limite, ce point intermédiaire l'impose.</p>`, b: R`<p>Pour $x\in\,]x_0,b[$, le TAF sur $[x_0,x]$ donne $c_x\in\,]x_0,x[$ avec</p><div class="sbox">$$\frac{f(x)-f(x_0)}{x-x_0} = f'(c_x).$$</div><p><span data-k="cx">$c_x\to x_0$</span> quand $x\to x_0^+$, donc $f'(c_x)\to\ell$. Même raisonnement à gauche. Le taux tend vers $\ell$ des deux côtés : $f$ est dérivable en $x_0$ et $f'(x_0) = \ell$.</p>`, rappels: ["o-a-taf", "o-a-taux"] },
    { q: 3, t: "k est dérivable en 0", h: R`<p>Au point spécial $0$, on revient au taux d'accroissement.</p>`, b: R`<p>On revient à la définition de la dérivée : on étudie le taux d'accroissement en $0$. Pour $x\neq0$, avec $k(0) = 0$ :</p>$$\frac{k(x)-k(0)}{x-0} = \frac{x^2\cos\frac1x}x = x\cos\frac1x.$$<p>Comme $|\cos|\leqslant1$ : $\Big|x\cos\frac1x\Big|\leqslant|x|\xrightarrow[x\to0]{}0$. Par encadrement, le taux tend vers $0$ :</p><div class="sbox">$$k\ \text{est dérivable en}\ 0\ \text{et}\ k'(0) = 0.$$</div>`, rappels: ["o-a-taux"] },
    { q: 3, t: "k′ n'a pas de limite en 0", h: R`<p>On calcule $k'$ ailleurs : un terme tend vers $0$, l'autre oscille.</p>`, b: R`<p>Pour $x\neq0$ : $k'(x) = 2x\cos\frac1x+\sin\frac1x$. Le premier terme tend vers $0$, mais <span data-k="osc">$\sin\frac1x$ n'a pas de limite</span>. Donc $k'$ n'a pas de limite en $0$, bien que $k$ soit dérivable en $0$.</p>` + GRAPH({ w: 430, h: 220, x: [-0.35, 0.35], y: [-1.3, 1.3], xt: [-0.3, 0.3], yt: [-1, 1], xl: "x", curves: [{ f: x => x === 0 ? 0 : 2 * x * Math.cos(1 / x) + Math.sin(1 / x), c: "r", n: 1500, lab: [0.12, 1.15, "k′"] }, { f: x => x === 0 ? 0 : x * x * Math.cos(1 / x), c: "b", n: 600, lab: [0.2, 0.18, "k"] }] }, R`$k$ (bleu) est coincée entre $-x^2$ et $x^2$ : tangente horizontale en $0$. Sa dérivée (rouge) oscille entre $-1$ et $1$ près de $0$.`, "Graphe de k et de sa dérivée") }
  ],
  ctx: { "o-a-taf": R`<p>Appliqué sur $[x_0,x]$ et sur $[x,x_0]$.</p>`, "o-a-taux": R`<p>Pour $k$ en $0$ : $\frac{k(x)}x = x\cos\frac1x\to0$.</p>` },
  piege: R`Calculer $k'(0)$ en faisant tendre $x\to0$ dans l'expression de $k'(x)$ : elle n'a pas de limite, et pourtant $k'(0)$ existe.`,
  methode: R`Dérivabilité en un point de raccord : théorème de la limite de la dérivée si $f'$ a une limite, sinon taux d'accroissement.`
},
{
  id: "o-an-31", subj: "oraux", year: "mp", chap: 13, concours: "ccinp", level: 2, time: "25 min",
  title: "Variation des constantes avec un second membre en sin³",
  enonce: R`<ol>
<li>Déterminer une primitive de $x\mapsto\sin^4x$.</li>
<li>Résoudre sur $\mathbb R$ l'équation $y''+y = \sin^3x$ par la <span data-k="vc">méthode de variation des constantes</span>.</li>
</ol>`,
  decode: { donnees: [R`Équation linéaire d'ordre $2$ à coefficients constants.`], but: R`Une primitive puis la résolution complète.`, cles: {
    vc: R`On cherche $y = \lambda(x)\cos x+\mu(x)\sin x$ avec $\lambda'\cos x+\mu'\sin x = 0$ : cette condition simplifie $y''$.`,
    euler: R`$\sin x = \frac{e^{ix}-e^{-ix}}{2i}$ ; en développant $(e^{ix}-e^{-ix})^4$ par le binôme on obtient $\sin^4x = \frac{3-4\cos2x+\cos4x}8$.` } },
  steps: [
    { q: 1, t: "Linéariser sin⁴", h: R`<p>On ne sait pas primitiver $\sin^4$ directement ; on l'écrit comme une combinaison de $\cos(kx)$.</p>`, b: R`<p><b>Idée</b> : on ne sait pas intégrer directement une puissance de $\sin$ ; on la <b>linéarise</b> (on l'écrit comme somme de $\cos(kx)$). <span data-k="euler">Formules d'Euler</span> : $\sin x = \frac{e^{ix}-e^{-ix}}{2i}$, donc, avec le binôme $(a-b)^4 = a^4-4a^3b+6a^2b^2-4ab^3+b^4$ et $(2i)^4 = 16$ :</p>$$\sin^4x = \frac{e^{4ix}-4e^{2ix}+6-4e^{-2ix}+e^{-4ix}}{16} = \frac{2\cos4x-8\cos2x+6}{16},$$<p>car $e^{ika}+e^{-ika} = 2\cos(ka)$. En simplifiant :</p>$$\sin^4x = \frac38-\frac12\cos2x+\frac18\cos4x.$$<p>Vérification en $x = \frac\pi2$ : $\frac38+\frac12+\frac18 = 1 = \sin^4\frac\pi2$ ✓. On intègre terme à terme ($\int\cos(kx)dx = \frac{\sin(kx)}k$) :</p><div class="sbox">$$\int\sin^4x\,dx = \frac{3x}8-\frac{\sin2x}4+\frac{\sin4x}{32}+C.$$</div>`, rappels: ["o-a-linearisation"] },
    { q: 2, t: "Solutions homogènes", h: R`<p>$r^2+1 = 0$ : racines $\pm i$.</p>`, b: R`<p><b>Méthode</b> : pour $y''+ay'+by = 0$, on résout l'équation caractéristique $r^2+ar+b = 0$.</p><p>Ici $r^2+1 = 0$, de racines complexes $r = \pm i$. Quand les racines sont $\alpha\pm i\beta$, les solutions réelles sont $e^{\alpha x}(\lambda\cos\beta x+\mu\sin\beta x)$ ; ici $\alpha = 0$, $\beta = 1$ :</p><div class="sbox">$$y_h(x) = \lambda\cos x+\mu\sin x,\qquad(\lambda,\mu)\in\mathbb R^2.$$</div><p>Vérification : $(\cos x)''+\cos x = -\cos x+\cos x = 0$ ✓.</p>` },
    { q: 2, t: "Le système de variation des constantes", h: R`<p>Deux inconnues $\lambda'$, $\mu'$, deux équations : on résout par combinaison (déterminant égal à $1$).</p>`, b: R`$$\begin{cases}\lambda'\cos x+\mu'\sin x = 0\\-\lambda'\sin x+\mu'\cos x = \sin^3x\end{cases}\Longrightarrow\lambda' = -\sin^4x,\quad\mu' = \sin^3x\cos x.$$<p>Primitives : $\lambda = -\Big(\frac{3x}8-\frac{\sin2x}4+\frac{\sin4x}{32}\Big)$ (question 1) et $\mu = \frac{\sin^4x}4$.</p>`, rappels: ["o-a-var-const"] },
    { q: 2, t: "Solution générale", h: R`<p>On assemble $\lambda\cos x+\mu\sin x$ et on ajoute les solutions homogènes. Une forme plus simple s'obtient en linéarisant $\sin^3$ dès le départ.</p>`, b: R`<p>Une solution particulière est $y_p = \lambda(x)\cos x+\mu(x)\sin x$. Elle diffère de $-\frac38x\cos x+\frac{\sin3x}{32}$ d'une solution homogène ($\frac9{32}\sin x$), d'où :</p><div class="sbox">$$y(x) = A\cos x+B\sin x-\frac38x\cos x+\frac1{32}\sin3x,\qquad(A,B)\in\mathbb R^2.$$</div><p><b>Vérification :</b> avec $\sin^3x = \frac{3\sin x-\sin3x}4$, $\big(-\frac38x\cos x\big)''+\big(-\frac38x\cos x\big) = \frac34\sin x$ et $\big(\frac{\sin3x}{32}\big)''+\frac{\sin3x}{32} = -\frac14\sin3x$.</p>`, rappels: ["o-a-structure-edl", "o-a-linearisation"] }
  ],
  ctx: { "o-a-linearisation": R`<p>$\sin^4$ en question 1, $\sin^3$ pour la vérification.</p>`, "o-a-var-const": R`<p>$g(x) = \sin^3x$.</p>`, "o-a-structure-edl": R`<p>Solution générale $=$ particulière $+$ homogènes (dimension $2$).</p>` },
  piege: R`Oublier les constantes $A$, $B$, ou se tromper de signe dans $\lambda' = -g\sin x$.`,
  methode: R`Variation des constantes : système $2\times2$, puis primitives (linéariser si besoin).`
},
{
  id: "o-an-32", subj: "oraux", year: "mp", chap: 13, concours: "ccinp", level: 3, time: "25 min",
  title: "Solutions développables en série entière d'une équation singulière",
  enonce: R`<p>On considère l'équation $(E)$ : $x(x-1)y''+4xy'+2y = 0$.</p>
<ol>
<li>Déterminer les solutions de $(E)$ développables en série entière sur un intervalle $]-r,r[$ ($r>0$), et calculer leur somme.</li>
<li>Toutes les solutions de $(E)$ sur $]0,1[$ sont-elles restrictions d'une fonction développable en série entière sur $]-1,1[$ ?</li>
</ol>`,
  decode: { donnees: [R`Équation linéaire d'ordre $2$, dont le coefficient $x(x-1)$ s'annule en $0$ et en $1$.`], but: R`Solutions séries entières, puis comparaison avec l'ensemble de toutes les solutions.`, cles: {
    som: R`$$\sum_{n\geqslant1}\frac{n(n+1)}2x^{n-1} = \frac1{(1-x)^3},\quad\text{donc}\quad\sum_{n\geqslant1}\frac{n(n+1)}2x^n = \frac x{(1-x)^3}.$$`,
    prod: R`$$\prod_{k=1}^{n-1}\frac{k+2}k = \frac{3\cdot4\cdots(n+1)}{1\cdot2\cdots(n-1)} = \frac{n(n+1)}2.$$` } },
  steps: [
    { q: 1, t: "Injecter une série entière", h: R`<p>On calcule chaque terme de l'équation comme une série en $x^n$, en réindexant pour que toutes les puissances soient les mêmes.</p>`, b: R`<p>Soit $y = \sum a_nx^n$ de rayon $R>0$. Sur $]-R,R[$ :</p>$$x^2y'' = \sum n(n-1)a_nx^n,\quad xy'' = \sum(n+1)na_{n+1}x^n,\quad xy' = \sum na_nx^n.$$<p>L'équation $x^2y''-xy''+4xy'+2y = 0$ devient</p>$$\sum_{n\geqslant0}\Big[\big(n(n-1)+4n+2\big)a_n-n(n+1)a_{n+1}\Big]x^n = 0.$$`, rappels: ["o-a-se-edo"] },
    { q: 1, t: "La relation de récurrence", h: R`<p>$n(n-1)+4n+2 = n^2+3n+2 = (n+1)(n+2)$ : on factorise par $(n+1)$.</p>`, b: R`<p>L'étape précédente donne, après regroupement, $\sum_n(n+1)\big[(n+2)a_n-na_{n+1}\big]x^n = 0$ sur $]-R,R[$.</p><p><b>Unicité du développement en série entière</b> : une série entière nulle sur un intervalle $]-R,R[$ a tous ses coefficients nuls. Donc pour tout $n$ : $(n+1)\big[(n+2)a_n-na_{n+1}\big] = 0$, et comme $n+1\neq0$, $(n+2)a_n = na_{n+1}$.</p><ul><li>$n = 0$ : $2a_0 = 0$, donc $a_0 = 0$.</li><li>$n\geqslant1$ : $a_{n+1} = \frac{n+2}na_n$.</li></ul><p>On calcule les premiers : $a_2 = \frac31a_1$, $a_3 = \frac42a_2 = 6a_1$, $a_4 = \frac53a_3 = 10a_1$. On reconnaît $\frac{n(n+1)}2$ ($1,3,6,10,\dots$). <b>Récurrence</b> : si $a_n = \frac{n(n+1)}2a_1$, alors $a_{n+1} = \frac{n+2}n\cdot\frac{n(n+1)}2a_1 = \frac{(n+1)(n+2)}2a_1$. Donc <span data-k="prod">$a_n = \frac{n(n+1)}2a_1$</span> pour $n\geqslant1$.</p>`, rappels: ["o-a-unicite-dse"] },
    { q: 1, t: "Rayon et somme", h: R`<p>D'Alembert pour le rayon ; pour la somme, on reconnaît une dérivée seconde de $\frac1{1-x}$.</p>`, b: R`<p>$\frac{a_{n+1}}{a_n}\to1$ : $R = 1$. <span data-k="som">On reconnaît</span> :</p><div class="sbox">$$y(x) = a_1\sum_{n\geqslant1}\frac{n(n+1)}2x^n = a_1\frac x{(1-x)^3},\qquad|x|<1.$$</div><p>Réciproquement, ces fonctions sont solutions (le calcul est réversible). Les solutions DSE forment une <b>droite</b> vectorielle.</p>` },
    { q: 2, t: "Comparer les dimensions", h: R`<p>Sur $]0,1[$, le coefficient $x(x-1)$ ne s'annule pas : l'espace des solutions est de dimension $2$. Les solutions DSE n'en donnent qu'une droite.</p>`, b: R`<p>Sur $]0,1[$, on peut diviser par $x(x-1)$ : $(E)$ est une équation linéaire normalisée d'ordre $2$ à coefficients continus, son espace de solutions est de dimension $2$. Une solution sur $]0,1[$ restriction d'une fonction DSE sur $]-1,1[$ serait (par le calcul précédent) de la forme $\frac{a_1x}{(1-x)^3}$, ce qui ne décrit qu'une droite.</p><div class="sbox">$$\text{Non : il y a des solutions qui ne sont pas développables en série entière.}$$</div>`, rappels: ["o-a-structure-edl"] }
  ],
  ctx: { "o-a-se-edo": R`<p>Réindexation de $xy''$ : $\sum n(n-1)a_nx^{n-1} = \sum(n+1)na_{n+1}x^n$.</p>`, "o-a-unicite-dse": R`<p>La série $\sum[\dots]x^n$ est nulle sur $]-R,R[$ : chaque crochet est nul.</p>`, "o-a-structure-edl": R`<p>Sur $]0,1[$, dimension $2$ ; les solutions DSE forment un sous-espace de dimension $1$.</p>` },
  piege: R`Mal réindexer $xy''$ (qui fait baisser le degré d'une unité) et obtenir une récurrence fausse.`,
  methode: R`Solutions DSE : injecter, réindexer, identifier, résoudre la récurrence, sommer, vérifier le rayon.`
},
{
  id: "o-an-42", subj: "oraux", year: "mp", chap: 13, concours: "ccinp", level: 2, time: "20 min",
  title: "Une équation singulière en 0 et le raccord",
  enonce: R`<p>On considère $(H)$ : $2xy'-5y = 0$ et $(E)$ : $2xy'-5y = x$.</p>
<ol>
<li>Résoudre $(H)$ sur $]0,+\infty[$.</li>
<li>Résoudre $(E)$ sur $]0,+\infty[$.</li>
<li>Déterminer les solutions de $(E)$ sur $[0,+\infty[$. Que remarque-t-on sur le problème « $y$ solution de $(E)$ avec $y(0) = 0$ » ?</li>
</ol>`,
  decode: { donnees: [R`Le coefficient $2x$ de $y'$ s'annule en $0$.`], but: R`Résoudre sur $]0,+\infty[$, puis étudier le prolongement en $0$.`, cles: {
    norm: R`Sur $]0,+\infty[$ : $y' = \frac5{2x}y$, et une primitive de $\frac5{2x}$ est $\frac52\ln x$, d'où $e^{\frac52\ln x} = x^{5/2}$.`,
    der0: R`$\frac{y(x)-y(0)}x = Cx^{3/2}-\frac13\to-\frac13$ : la dérivée en $0$ existe, pour toute valeur de $C$.` } },
  steps: [
    { q: 1, t: "Équation homogène", h: R`<p>On divise par $2x\neq0$ : équation $y' = a(x)y$.</p>`, b: R`<p><span data-k="norm">Sur $]0,+\infty[$, $x\neq0$ : on peut diviser par $2x$</span> et mettre l'équation sous forme normalisée $y' = \frac5{2x}y$.</p><p><b>Rappel</b> : les solutions de $y' = a(x)y$ sont $y = Ce^{A(x)}$, où $A$ est une primitive de $a$. Ici $a(x) = \frac5{2x}$, $A(x) = \frac52\ln x$, et $e^{\frac52\ln x} = x^{5/2}$ :</p><div class="sbox">$$y = C\,x^{5/2},\quad C\in\mathbb R.$$</div><p>Vérification : $2x\cdot\frac52Cx^{3/2}-5Cx^{5/2} = 5Cx^{5/2}-5Cx^{5/2} = 0$ ✓.</p>`, rappels: ["o-a-edl1"] },
    { q: 2, t: "Solution particulière", h: R`<p>Second membre $x$ : on essaie $y = ax$.</p>`, b: R`<p>Le second membre est $x$ (un polynôme de degré $1$) : on essaie une solution particulière de la même forme, $y = ax$. Alors $y' = a$ et</p>$$2x\cdot a-5\cdot ax = -3ax.$$<p>Il faut $-3ax = x$ pour tout $x>0$, donc $a = -\frac13$. <b>Structure des solutions</b> : solution générale = solution particulière + solutions de l'équation homogène (Q1) :</p><div class="sbox">$$y = Cx^{5/2}-\frac x3,\quad C\in\mathbb R\quad\text{sur}\ ]0,+\infty[.$$</div>`, rappels: ["o-a-structure-edl"] },
    { q: 3, t: "Raccord en 0", h: R`<p>Une solution sur $[0,+\infty[$ est en particulier solution sur $]0,+\infty[$ : elle a la forme précédente. On vérifie ensuite la dérivabilité et l'équation en $0$.</p>`, b: R`<p>Si $y$ est solution sur $[0,+\infty[$, alors $y(x) = Cx^{5/2}-\frac x3$ pour $x>0$, et par continuité $y(0) = 0$. Réciproquement, une telle fonction est <span data-k="der0">dérivable en $0$</span> avec $y'(0) = -\frac13$, et en $x = 0$ l'équation s'écrit $0-5y(0) = 0$ : vraie.</p><div class="sbox">$$\mathcal S_{[0,+\infty[} = \Big\{x\mapsto Cx^{5/2}-\frac x3,\ C\in\mathbb R\Big\}.$$</div><p><b>Remarque :</b> toutes ces solutions vérifient $y(0) = 0$ : le problème « $(E)$ et $y(0) = 0$ » a une infinité de solutions. Pas de contradiction avec Cauchy-Lipschitz, qui demande un coefficient de $y'$ non nul.</p>` + GRAPH({ w: 430, h: 220, x: [0, 2], y: [-1.5, 2.5], xt: [1, 2], yt: [-1, 1, 2], xl: "x", curves: [-0.6, -0.2, 0, 0.3, 0.7].map((C, i) => ({ f: x => C * x ** 2.5 - x / 3, c: ["r", "g", "b", "v", "k"][i] })) }, R`Plusieurs solutions sur $[0,+\infty[$ : elles passent toutes par l'origine avec la même pente $-\frac13$.`, "Solutions qui passent toutes par l'origine") }
  ],
  ctx: { "o-a-edl1": R`<p>$a(x) = \frac5{2x}$ sur $]0,+\infty[$.</p>`, "o-a-structure-edl": R`<p>Sur $]0,+\infty[$ : $y_p = -\frac x3$ plus les solutions homogènes $Cx^{5/2}$.</p>` },
  piege: R`Résoudre directement sur $[0,+\infty[$ en divisant par $x$ : impossible en $0$. On résout là où le coefficient ne s'annule pas, puis on raccorde.`,
  methode: R`Équation $a(x)y'+b(x)y = c(x)$ avec $a$ qui s'annule : résolution par intervalles, puis étude du raccord.`
},
{
  id: "o-an-33", subj: "oraux", year: "mp", chap: 14, concours: "ccinp", level: 2, time: "20 min",
  title: "Continue, dérivées partielles, mais pas C¹",
  enonce: R`<p>On pose $f(x,y) = \dfrac{x^2y}{x^2+y^2}$ pour $(x,y)\neq(0,0)$ et $f(0,0) = 0$.</p>
<ol>
<li>Montrer que $f$ est continue sur $\mathbb R^2$.</li>
<li>Montrer que $f$ admet des dérivées partielles en tout point.</li>
<li>$f$ est-elle de classe $\mathcal C^1$ sur $\mathbb R^2$ ?</li>
</ol>`,
  decode: { donnees: [R`Une fraction rationnelle prolongée par $0$ en $(0,0)$.`], but: R`Continuité, dérivées partielles, classe $\mathcal C^1$.`, cles: {
    frac: R`$\frac{x^2}{x^2+y^2}\in[0,1]$, donc $|f(x,y)|\leqslant|y|$.`,
    diag: R`Sur la diagonale $y = x\neq0$ : $\frac{\partial f}{\partial x}(x,x) = \frac{2x\cdot x^3}{(2x^2)^2} = \frac12$.` } },
  steps: [
    { q: 1, t: "Continuité", h: R`<p>Hors de l'origine : opérations sur des fonctions continues. En $(0,0)$ : majorer $|f|$ par quelque chose qui tend vers $0$.</p>`, b: R`<ul><li><b>Hors de l'origine</b> : $f$ est un quotient de deux polynômes en $x,y$, avec un dénominateur $x^2+y^2$ non nul : elle est continue.</li><li><b>En $(0,0)$</b> : on majore. Comme $x^2\leqslant x^2+y^2$, on a $\frac{x^2}{x^2+y^2}\leqslant1$, donc <span data-k="frac">$|f(x,y)| = \frac{x^2}{x^2+y^2}|y|\leqslant|y|$</span>.</li></ul><p>Quand $(x,y)\to(0,0)$, $|y|\to0$, donc $f(x,y)\to0 = f(0,0)$ : $f$ est continue en $(0,0)$, donc sur $\mathbb R^2$.</p>`, rappels: ["o-a-cont-2var"] },
    { q: 2, t: "Dérivées partielles", h: R`<p>Ailleurs : calcul usuel. En $(0,0)$ : taux d'accroissement le long des axes.</p>`, b: R`<p>Pour $(x,y)\neq(0,0)$ :</p>$$\frac{\partial f}{\partial x} = \frac{2xy(x^2+y^2)-x^2y\cdot2x}{(x^2+y^2)^2} = \frac{2xy^3}{(x^2+y^2)^2},\qquad\frac{\partial f}{\partial y} = \frac{x^2(x^2-y^2)}{(x^2+y^2)^2}.$$<p>En $(0,0)$ : $f(t,0) = 0$ et $f(0,t) = 0$, donc $\frac{\partial f}{\partial x}(0,0) = \frac{\partial f}{\partial y}(0,0) = 0$.</p>` },
    { q: 3, t: "Pas C¹", h: R`<p>Il suffit qu'une dérivée partielle ne soit pas continue en $(0,0)$. On teste sur une droite qui passe par l'origine.</p>`, b: R`<p><span data-k="diag">Sur la diagonale</span>, $\frac{\partial f}{\partial x}(x,x) = \frac12\not\to0 = \frac{\partial f}{\partial x}(0,0)$. $\frac{\partial f}{\partial x}$ n'est pas continue en $(0,0)$ :</p><div class="sbox">$$f\ \text{n'est pas de classe}\ \mathcal C^1\ \text{sur}\ \mathbb R^2.$$</div><p>Elle n'est même pas différentiable en $(0,0)$ : sinon $df(0,0) = 0$ et $f(t,t) = \frac t2$ serait un $o(t)$.</p>`, rappels: ["o-a-c1-2var"] }
  ],
  ctx: { "o-a-cont-2var": R`<p>Majoration $|f|\leqslant|y|\leqslant r$.</p>`, "o-a-c1-2var": R`<p>Les dérivées partielles existent partout, mais $\frac{\partial f}{\partial x}$ n'est pas continue en $(0,0)$.</p>` },
  piege: R`Croire que l'existence des dérivées partielles en un point entraîne la continuité ou la différentiabilité : c'est faux en dimension $2$.`,
  methode: R`En $(0,0)$ : continuité par majoration, dérivées partielles par taux, non-$\mathcal C^1$ en testant sur une droite.`
},
{
  id: "o-an-41", subj: "oraux", year: "mp", chap: 14, concours: "ccinp", level: 3, time: "25 min",
  title: "Extrema d'une forme quadratique sur un cercle",
  enonce: R`<p>Soit $f(x,y) = x^2+4xy-2y^2$ et $\mathcal C = \{(x,y)\in\mathbb R^2 : x^2+y^2 = 5\}$.</p>
<ol>
<li>Justifier que $f$ atteint un maximum et un minimum sur $\mathcal C$.</li>
<li>Soit $(u,v)\in\mathcal C$ où $f_{|\mathcal C}$ atteint un extremum.<ol style="list-style:lower-alpha"><li>Justifier qu'il existe $\lambda\in\mathbb R$ tel que $u+2v = \lambda u$ et $2u-2v = \lambda v$.</li><li>Montrer que $(\lambda-1)(\lambda+2)-4 = 0$ et en déduire les valeurs possibles de $\lambda$.</li></ol></li>
<li>Déterminer les points possibles, puis le maximum et le minimum de $f$ sur $\mathcal C$.</li>
</ol>`,
  decode: { donnees: [R`$f$ polynomiale, contrainte $g(x,y) = x^2+y^2-5 = 0$.`], but: R`Extrema sous contrainte par la méthode de Lagrange.`, cles: {
    grad: R`$\nabla f = (2x+4y,\ 4x-4y)$ et $\nabla g = (2x,\ 2y)$, qui ne s'annule pas sur $\mathcal C$.`,
    det: R`Le système $\begin{cases}(1-\lambda)u+2v = 0\\2u+(-2-\lambda)v = 0\end{cases}$ a une solution $(u,v)\neq(0,0)$ : son déterminant est nul.`,
    val: R`Au point trouvé : $f(u,v) = u(u+2v)+v(2u-2v) = u\cdot\lambda u+v\cdot\lambda v = 5\lambda$.` } },
  steps: [
    { q: 1, t: "Compacité", h: R`<p>Fonction continue sur une partie fermée bornée de $\mathbb R^2$.</p>`, b: R`<p><b>Théorème</b> : une fonction continue sur une partie compacte (non vide) est bornée et atteint ses bornes. En dimension finie, compact = fermé et borné.</p><ul><li><b>Fermé</b> : $\mathcal C = g^{-1}(\{5\})$ avec $g(x,y) = x^2+y^2$ continue, et $\{5\}$ est fermé dans $\mathbb R$.</li><li><b>Borné</b> : tout point de $\mathcal C$ est à distance $\sqrt5$ de l'origine.</li></ul><p>$\mathcal C$ est donc compact, et $f$ (polynôme, donc continue) y atteint un maximum et un minimum.</p>`, rappels: ["o-a-bornes"] },
    { q: 2, t: "Théorème des extrema liés", h: R`<p>En un extremum sous la contrainte $g = 0$, les gradients de $f$ et $g$ sont colinéaires (si $\nabla g\neq0$).</p>`, b: R`<p><span data-k="grad">Gradients</span> : $\nabla g(u,v) = (2u,2v)\neq(0,0)$ sur $\mathcal C$. Il existe $\lambda$ avec $\nabla f(u,v) = \lambda\nabla g(u,v)$ :</p>$$2u+4v = 2\lambda u,\quad4u-4v = 2\lambda v\iff u+2v = \lambda u,\quad2u-2v = \lambda v.$$`, rappels: ["o-a-lagrange"] },
    { q: 2, t: "Équation sur λ", h: R`<p>$(u,v)\neq(0,0)$ : le système linéaire homogène a une solution non nulle, donc son déterminant est nul.</p>`, b: R`<p><span data-k="det">Déterminant nul</span> :</p>$$(1-\lambda)(-2-\lambda)-4 = (\lambda-1)(\lambda+2)-4 = \lambda^2+\lambda-6 = 0.$$<div class="sbox">$$\lambda = 2\quad\text{ou}\quad\lambda = -3.$$</div><p>(Ce sont les valeurs propres de la matrice symétrique $\begin{pmatrix}1&2\\2&-2\end{pmatrix}$ de $f$.)</p>` },
    { q: 3, t: "Les points et les valeurs", h: R`<p>Pour chaque $\lambda$, une droite de solutions, qu'on coupe avec le cercle. <span data-k="val">La valeur de $f$ vaut $5\lambda$</span>.</p>`, b: R`<ul><li>$\lambda = 2$ : $-u+2v = 0$, $u = 2v$, $5v^2 = 5$ : $(u,v) = \pm(2,1)$, $f = 4+8-2 = 10$.</li><li>$\lambda = -3$ : $4u+2v = 0$, $v = -2u$, $5u^2 = 5$ : $(u,v) = \pm(1,-2)$, $f = 1-8-8 = -15$.</li></ul><div class="sbox">$$\max_{\mathcal C}f = 10\ \text{en}\ \pm(2,1),\qquad\min_{\mathcal C}f = -15\ \text{en}\ \pm(1,-2).$$</div>` + FIG(300, 300, (() => { const c = 150, k = 40, P = (x, y) => [c + k * x, c - k * y]; let s = ARR(20, c, 290, c, "k", 7).replace(/class="vk"/, 'class="ax"').replace(/class="hk"/, 'class="axh"') + ARR(c, 290, c, 12, "k", 7).replace(/class="vk"/, 'class="ax"').replace(/class="hk"/, 'class="axh"') + `<circle cx="${c}" cy="${c}" r="${f1(k * Math.sqrt(5))}" class="k" style="stroke-width:2"/>`; for (const [x, y, cl, t] of [[2, 1, "mass", "max 10"], [-2, -1, "mass", ""], [1, -2, "body", "min −15"], [-1, 2, "body", ""]]) { const [X, Y] = P(x, y); s += `<circle cx="${X}" cy="${Y}" r="6" class="${cl}"/>` + (t ? S(X + 10, Y + (y > 0 ? -8 : 18), t) : ""); } return s + S(286, 142, "x", "end", "it") + S(158, 20, "y", "start", "it"); })(), R`Le cercle $x^2+y^2 = 5$ : maximum en $\pm(2,1)$ (jaune), minimum en $\pm(1,-2)$. Ces directions sont perpendiculaires : ce sont les vecteurs propres de la matrice de $f$.`, "Points extremaux sur le cercle") }
  ],
  ctx: { "o-a-bornes": R`<p>$K = \mathcal C$, fermé borné de $\mathbb R^2$.</p>`, "o-a-lagrange": R`<p>$g(x,y) = x^2+y^2-5$, $\nabla g\neq0$ sur $\mathcal C$.</p>` },
  piege: R`Chercher les points critiques de $f$ sur $\mathbb R^2$ : on veut les extrema <b>sur le cercle</b>, qui ne sont pas des points critiques de $f$.`,
  methode: R`Extremum sous contrainte : compacité pour l'existence, Lagrange pour localiser, comparer les valeurs.`
},
{
  id: "o-an-52", subj: "oraux", year: "mp", chap: 14, concours: "ccinp", level: 3, time: "25 min",
  title: "Choisir la valeur en (0,0) pour rendre f régulière",
  enonce: R`<p>Soit $\alpha\in\mathbb R$ et $f(x,y) = \dfrac{x^4}{x^2+y^2+xy}$ si $(x,y)\neq(0,0)$, $f(0,0) = \alpha$.</p>
<ol>
<li>Montrer que $x^2+y^2+xy\geqslant\frac12(x^2+y^2)$ pour tous $x,y$.</li>
<li><ol style="list-style:lower-alpha"><li>Justifier que $f$ est définie sur $\mathbb R^2$.</li><li>Déterminer $\alpha$ pour que $f$ soit continue sur $\mathbb R^2$.</li></ol></li>
<li>On suppose $\alpha = 0$.<ol style="list-style:lower-alpha"><li>Calculer les dérivées partielles sur $\mathbb R^2\setminus\{(0,0)\}$.</li><li>Calculer les dérivées partielles en $(0,0)$.</li><li>$f$ est-elle de classe $\mathcal C^1$ sur $\mathbb R^2$ ?</li></ol></li>
</ol>`,
  decode: { donnees: [R`$D(x,y) = x^2+y^2+xy$.`], but: R`Régularité de $f$ en $(0,0)$ selon $\alpha$.`, cles: {
    carre: R`$x^2+y^2+xy-\frac12(x^2+y^2) = \frac12(x^2+2xy+y^2) = \frac12(x+y)^2\geqslant0$.`,
    maj: R`Avec $r^2 = x^2+y^2$ : $|x|\leqslant r$, $|y|\leqslant r$, $D\geqslant\frac{r^2}2$ et $D\leqslant\frac32r^2$.` } },
  steps: [
    { q: 1, t: "L'inégalité", h: R`<p>On fait la différence et on reconnaît un carré.</p>`, b: R`<p>On calcule la différence entre les deux membres et on cherche à reconnaître un carré :</p>$$x^2+y^2+xy-\frac12(x^2+y^2) = \frac12x^2+xy+\frac12y^2 = \frac12\big(x^2+2xy+y^2\big).$$<p><span data-k="carre">C'est $\frac12(x+y)^2$, qui est $\geqslant0$</span> (identité remarquable $(a+b)^2 = a^2+2ab+b^2$). Donc</p><div class="sbox">$$x^2+y^2+xy\geqslant\frac12(x^2+y^2).$$</div>` },
    { q: 2, t: "Définition et continuité", h: R`<p>Le dénominateur est minoré par $\frac{r^2}2>0$ hors de l'origine. Ensuite on majore $|f|$.</p>`, b: R`<p>Pour $(x,y)\neq(0,0)$, $D(x,y)\geqslant\frac{r^2}2>0$ : $f$ est bien définie. Et</p><p>On note $r = \sqrt{x^2+y^2}$ ; alors $x^4\leqslant r^4$ (car $|x|\leqslant r$), et le dénominateur est $\geqslant\frac{r^2}2$ :</p>$$|f(x,y)|\leqslant\frac{r^4}{r^2/2} = 2r^2\xrightarrow[(x,y)\to(0,0)]{}0.$$<p>$f$ est continue hors de l'origine (quotient), et en $(0,0)$ si et seulement si $f(0,0) = \lim f = 0$.</p><div class="sbox">$$f\ \text{continue sur}\ \mathbb R^2\iff\alpha = 0.$$</div>`, rappels: ["o-a-cont-2var"] },
    { q: 3, t: "Dérivées partielles hors de l'origine", h: R`<p>Dérivée d'un quotient.</p>`, b: R`<p>Notons $D = x^2+y^2+xy$. On dérive un quotient : $\big(\frac uv\big)' = \frac{u'v-uv'}{v^2}$.</p><ul><li>Par rapport à $x$ ($y$ fixé) : $u = x^4$, $u' = 4x^3$ ; $v = D$, $\frac{\partial D}{\partial x} = 2x+y$.</li><li>Par rapport à $y$ ($x$ fixé) : $u = x^4$ ne dépend pas de $y$, sa dérivée est $0$ ; $\frac{\partial D}{\partial y} = 2y+x$.</li></ul>$$\frac{\partial f}{\partial x} = \frac{4x^3D-x^4(2x+y)}{D^2},\qquad\frac{\partial f}{\partial y} = \frac{0\cdot D-x^4(2y+x)}{D^2} = -\frac{x^4(2y+x)}{D^2}.$$` },
    { q: 3, t: "En (0,0)", h: R`<p>Taux d'accroissement sur les axes.</p>`, b: R`<p>À l'origine, pas de formule : on revient à la <b>définition</b> de la dérivée partielle, limite du taux d'accroissement le long d'un axe.</p><ul><li>Selon $x$ : $f(t,0) = \frac{t^4}{t^2} = t^2$, donc $\frac{f(t,0)-f(0,0)}t = \frac{t^2-0}t = t\xrightarrow[t\to0]{}0$.</li><li>Selon $y$ : $f(0,t) = \frac0{t^2} = 0$, donc le taux vaut $0$.</li></ul><div class="sbox">$$\frac{\partial f}{\partial x}(0,0) = \frac{\partial f}{\partial y}(0,0) = 0.$$</div>`, rappels: ["o-a-taux"] },
    { q: 3, t: "Continuité des dérivées partielles", h: R`<p>On majore numérateurs et dénominateurs en fonction de $r$ : le numérateur est d'ordre $r^5$, le dénominateur d'ordre $r^4$.</p>`, b: R`<p><span data-k="maj">Majorations</span> :</p>$$\Big|\frac{\partial f}{\partial x}\Big|\leqslant\frac{4r^3\cdot\frac32r^2+r^4\cdot3r}{r^4/4} = 36\,r,\qquad\Big|\frac{\partial f}{\partial y}\Big|\leqslant\frac{r^4\cdot3r}{r^4/4} = 12\,r.$$<p>Les deux tendent vers $0$ : les dérivées partielles sont continues en $(0,0)$, et ailleurs par opérations.</p><div class="sbox">$$f\in\mathcal C^1(\mathbb R^2).$$</div>`, rappels: ["o-a-c1-2var"] }
  ],
  ctx: { "o-a-cont-2var": R`<p>Majoration par $2r^2$ grâce à la question 1.</p>`, "o-a-taux": R`<p>Sur l'axe des $x$ : $f(t,0) = t^2$.</p>`, "o-a-c1-2var": R`<p>Dérivées partielles majorées par $36r$ et $12r$.</p>` },
  piege: R`Oublier de vérifier que le dénominateur ne s'annule pas hors de l'origine : c'est le rôle de la question 1.`,
  methode: R`Minorer le dénominateur par $c\,r^2$, majorer le numérateur par une puissance de $r$, comparer les degrés.`
},
{
  id: "o-an-56", subj: "oraux", year: "mp", chap: 14, concours: "ccinp", level: 3, time: "25 min",
  title: "Extrema locaux, globaux, et sur un carré",
  enonce: R`<p>Soit $f(x,y) = 2x^3-6xy+3y^2+1$ sur $\mathbb R^2$.</p>
<ol>
<li>$f$ admet-elle des extrema locaux ? Si oui, les déterminer.</li>
<li>$f$ admet-elle des extrema globaux sur $\mathbb R^2$ ?</li>
<li>Soit $K = [0,2]\times[0,2]$. Justifier que $f$ admet un maximum sur $K$ et le déterminer.</li>
</ol>`,
  decode: { donnees: [R`$f$ polynomiale de degré $3$.`], but: R`Extrema locaux par la hessienne, globaux par des limites, puis sur un compact.`, cles: {
    cub: R`$f(x,0) = 2x^3+1$ tend vers $+\infty$ en $+\infty$ et vers $-\infty$ en $-\infty$.`,
    bord: R`Le bord de $K$ est formé de quatre segments ; sur chacun, $f$ est une fonction d'une variable.` } },
  steps: [
    { q: 1, t: "Points critiques", h: R`<p>Sur l'ouvert $\mathbb R^2$, un extremum local est un point critique.</p>`, b: R`<p>Un extremum local d'une fonction $\mathcal C^1$ sur un ouvert est un <b>point critique</b> : les deux dérivées partielles y sont nulles.</p>$$\frac{\partial f}{\partial x} = 6x^2-6y,\qquad\frac{\partial f}{\partial y} = -6x+6y.$$<p>On résout : la 2ᵉ équation donne $y = x$ ; en remplaçant dans la 1ʳᵉ, $6x^2-6x = 0$, soit $x(x-1) = 0$, donc $x = 0$ ou $x = 1$. Points critiques : $(0,0)$ et $(1,1)$.</p>`, rappels: ["o-a-pt-critique"] },
    { q: 1, t: "Nature des points critiques", h: R`<p>On calcule $r$, $s$, $t$ et le signe de $rt-s^2$.</p>`, b: R`<p><b>Notations de Monge</b> : $r = \frac{\partial^2f}{\partial x^2}$, $s = \frac{\partial^2f}{\partial x\partial y}$, $t = \frac{\partial^2f}{\partial y^2}$. En un point critique : si $rt-s^2>0$, c'est un extremum (minimum si $r>0$, maximum si $r<0$) ; si $rt-s^2<0$, c'est un point col (pas d'extremum).</p><p>Ici $r = 12x$, $s = -6$, $t = 6$.</p><ul><li>$(0,0)$ : $r = 0$, $rt-s^2 = 0-36<0$ : point col, pas d'extremum.</li><li>$(1,1)$ : $r = 12$, $rt-s^2 = 72-36 = 36>0$ et $r>0$ : <b>minimum local</b>, de valeur $f(1,1) = 2-6+3+1 = 0$.</li></ul>`, rappels: ["o-a-pt-critique"] },
    { q: 2, t: "Pas d'extremum global", h: R`<p>Restreindre à une droite où $f$ part à $\pm\infty$.</p>`, b: R`<p>On regarde $f$ sur l'axe $y = 0$ : <span data-k="cub">$f(x,0) = 2x^3+1$</span>. Quand $x\to+\infty$, cela tend vers $+\infty$ ; quand $x\to-\infty$, vers $-\infty$. Donc $f$ n'est ni majorée ni minorée sur $\mathbb R^2$ : <b>pas d'extremum global</b>.</p><p>En particulier, le minimum local $f(1,1) = 0$ n'est pas global : $f(-1,0) = -2+1 = -1<0$.</p>` },
    { q: 3, t: "Existence et localisation", h: R`<p>$K$ compact : le max existe. À l'intérieur, il serait un point critique ; le seul point critique intérieur est $(1,1)$, qui est un minimum. Donc le max est sur le bord.</p>`, b: R`<p><b>Existence</b> : $K = [0,2]^2$ est fermé et borné en dimension finie, donc compact ; $f$ est continue : elle atteint un maximum sur $K$.</p><p><b>Où ?</b> Si le maximum était atteint en un point intérieur (dans $]0,2[^2$), ce serait un point critique. Le seul point critique intérieur est $(1,1)$, qui est un minimum local, et $f(1,1) = 0\lt f(2,0) = 17$ : ce n'est pas le maximum. Le maximum est donc atteint sur <span data-k="bord">le bord</span> du carré : on étudie les quatre côtés.</p>`, rappels: ["o-a-bornes"] },
    { q: 3, t: "Étudier les quatre côtés", h: R`<p>Sur chaque côté, on étudie une fonction d'une variable sur $[0,2]$.</p>`, b: R`<ul><li>$x = 0$ : $3y^2+1$, max $13$ en $y = 2$.</li><li>$y = 0$ : $2x^3+1$, max $17$ en $x = 2$.</li><li>$x = 2$ : $3y^2-12y+17$, décroissante sur $[0,2]$, max $17$ en $y = 0$.</li><li>$y = 2$ : $2x^3-12x+13$, max aux bornes : $13$ en $x = 0$, $5$ en $x = 2$.</li></ul><div class="sbox">$$\max_Kf = 17,\ \text{atteint en}\ (2,0).$$</div>` }
  ],
  ctx: { "o-a-pt-critique": R`<p>$(0,0)$ col, $(1,1)$ minimum local.</p>`, "o-a-bornes": R`<p>$K = [0,2]^2$ est compact.</p>` },
  piege: R`Chercher le maximum sur $K$ uniquement parmi les points critiques : sur un compact, les extrema sont souvent sur le bord.`,
  methode: R`Extrema sur un compact : points critiques intérieurs, puis étude du bord côté par côté.`
},
{
  id: "o-an-57", subj: "oraux", year: "mp", chap: 14, concours: "ccinp", level: 2, time: "20 min",
  title: "Une fonction de classe C¹ définie en deux morceaux",
  enonce: R`<ol>
<li>Soit $f : \mathbb R^2\to\mathbb R$.<ol style="list-style:lower-alpha"><li>Écrire avec des quantificateurs la continuité de $f$ en $(0,0)$.</li><li>Définir « $f$ différentiable en $(0,0)$ ».</li></ol></li>
<li>Soit $f(x,y) = \dfrac{x^2y^2}{x^2+y^2}$ si $(x,y)\neq(0,0)$, $f(0,0) = 0$.<ol style="list-style:lower-alpha"><li>Montrer que $f$ est continue sur $\mathbb R^2$.</li><li>Montrer que $f$ est de classe $\mathcal C^1$ sur $\mathbb R^2$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`$f$ symétrique en $x$ et $y$.`], but: R`Définitions, puis continuité et classe $\mathcal C^1$.`, cles: {
    frac: R`$\frac{y^2}{x^2+y^2}\leqslant1$ et $\frac{y^4}{(x^2+y^2)^2}\leqslant1$.`,
    sym: R`$f(x,y) = f(y,x)$ : $\frac{\partial f}{\partial y}(x,y) = \frac{\partial f}{\partial x}(y,x)$, même étude.` } },
  steps: [
    { q: 1, t: "Définitions", h: R`<p>Les quantificateurs dans le bon ordre ; pour la différentiabilité, une application linéaire et un petit $o$.</p>`, b: R`<p>(a) $\forall\varepsilon>0,\ \exists\eta>0,\ \forall(x,y),\ \|(x,y)\|\leqslant\eta\Rightarrow|f(x,y)-f(0,0)|\leqslant\varepsilon$.</p><p>(b) Il existe $L$ linéaire de $\mathbb R^2$ dans $\mathbb R$ telle que $f(h)-f(0,0)-L(h) = o(\|h\|)$ quand $h\to0$.</p>`, rappels: ["o-a-diff-def"] },
    { q: 2, t: "Continuité", h: R`<p>Le facteur $\frac{y^2}{x^2+y^2}$ est entre $0$ et $1$.</p>`, b: R`<ul><li><b>Hors de l'origine</b> : quotient de polynômes à dénominateur non nul, donc continue.</li><li><b>En $(0,0)$</b> : comme $y^2\leqslant x^2+y^2$, on a $\frac{y^2}{x^2+y^2}\leqslant1$, d'où <span data-k="frac">$|f(x,y)| = x^2\frac{y^2}{x^2+y^2}\leqslant x^2$</span>. Quand $(x,y)\to(0,0)$, $x^2\to0$ : $f(x,y)\to0 = f(0,0)$.</li></ul><p>$f$ est continue sur $\mathbb R^2$.</p>`, rappels: ["o-a-cont-2var"] },
    { q: 2, t: "Dérivées partielles", h: R`<p>Ailleurs : quotient. En $(0,0)$ : taux.</p>`, b: R`<p>Pour $(x,y)\neq(0,0)$ :</p>$$\frac{\partial f}{\partial x} = \frac{2xy^2(x^2+y^2)-x^2y^2\cdot2x}{(x^2+y^2)^2} = \frac{2xy^4}{(x^2+y^2)^2}.$$<p>En $(0,0)$ : $f(t,0) = 0$ donc $\frac{\partial f}{\partial x}(0,0) = 0$. <span data-k="sym">Par symétrie</span>, même chose pour $\frac{\partial f}{\partial y}$.</p>` },
    { q: 2, t: "Continuité des dérivées partielles", h: R`<p>Majorer $\big|\frac{\partial f}{\partial x}\big|$ par une quantité qui tend vers $0$.</p>`, b: R`<p>Pour $(x,y)\neq(0,0)$ : $\frac{y^4}{(x^2+y^2)^2} = \Big(\frac{y^2}{x^2+y^2}\Big)^2\leqslant1$, donc</p>$$\Big|\frac{\partial f}{\partial x}(x,y)\Big| = 2|x|\frac{y^4}{(x^2+y^2)^2}\leqslant2|x|\xrightarrow[(x,y)\to(0,0)]{}0 = \frac{\partial f}{\partial x}(0,0).$$<p><span data-k="sym">Par symétrie de $f$ en $x$ et $y$</span>, même chose pour $\frac{\partial f}{\partial y}$ (on obtient $\leqslant2|y|$). Les dérivées partielles sont continues en $(0,0)$ ; ailleurs elles le sont comme quotients de polynômes. <b>Théorème</b> : une fonction dont les dérivées partielles existent et sont continues est $\mathcal C^1$.</p><div class="sbox">$$f\in\mathcal C^1(\mathbb R^2).$$</div>`, rappels: ["o-a-c1-2var"] }
  ],
  ctx: { "o-a-diff-def": R`<p>Ici $L = 0$ en $(0,0)$ puisque les deux dérivées partielles sont nulles.</p>`, "o-a-cont-2var": R`<p>$|f|\leqslant x^2$.</p>`, "o-a-c1-2var": R`<p>$|\partial_xf|\leqslant2|x|$ et $|\partial_yf|\leqslant2|y|$.</p>` },
  piege: R`Inverser $\exists\eta$ et $\forall(x,y)$ dans la définition de la continuité.`,
  methode: R`Classe $\mathcal C^1$ en $(0,0)$ : dérivées partielles par taux, puis majoration des formules générales.`
},
{
  id: "o-an-58", subj: "oraux", year: "mp", chap: 14, concours: "ccinp", level: 3, time: "25 min",
  title: "Différentielle d'une forme bilinéaire",
  enonce: R`<ol>
<li>Soient $E$, $F$ deux espaces normés de dimension finie, $a\in E$ et $f : E\to F$. Définir « $f$ différentiable en $a$ ».</li>
<li>Soit $E$ de dimension finie $n$, de base $(e_1,\dots,e_n)$. Pour $x = \sum x_ie_i$, on pose $\|x\|_\infty = \max|x_i|$, et sur $E\times E$, $\|(x,y)\| = \max(\|x\|_\infty,\|y\|_\infty)$. Soit $B : E\times E\to\mathbb R$ <span data-k="bil">bilinéaire</span>.<ol style="list-style:lower-alpha"><li>Montrer qu'il existe $C\geqslant0$ tel que $|B(x,y)|\leqslant C\|x\|_\infty\|y\|_\infty$.</li><li>Montrer que $B$ est différentiable sur $E\times E$ et calculer $dB(u,v)$.</li></ol></li>
</ol>`,
  decode: { donnees: [R`$B$ linéaire par rapport à chaque variable.`], but: R`Une majoration, puis la différentielle d'une application bilinéaire.`, cles: {
    bil: R`$B(\lambda x+x',y) = \lambda B(x,y)+B(x',y)$, et de même en $y$.`,
    dev: R`$B(u+h,v+k) = B(u,v)+B(u,k)+B(h,v)+B(h,k)$ par bilinéarité.` } },
  steps: [
    { q: 1, t: "Définition", h: R`<p>Application linéaire tangente et reste négligeable.</p>`, b: R`<p>$f$ est <b>différentiable en $a$</b> s'il existe une application linéaire $L : E\to F$ telle que, quand $h\to0$,</p><div class="sbox">$$f(a+h) = f(a)+L(h)+o(\|h\|).$$</div><p>Lecture : près de $a$, $f$ ressemble à une fonction affine, l'erreur étant négligeable devant $\|h\|$. $L$ est alors unique et s'appelle la différentielle $df(a)$. Exemple : $f(x) = x^2$ sur $\mathbb R$, $f(a+h) = a^2+2ah+h^2$, donc $L(h) = 2ah$ et $h^2 = o(h)$.</p>`, rappels: ["o-a-diff-def"] },
    { q: 2, t: "Majoration", h: R`<p>On développe $B(x,y)$ sur la base : une somme double de $x_iy_jB(e_i,e_j)$.</p>`, b: R`<p>On décompose $x = \sum x_ie_i$ et $y = \sum y_je_j$ dans la base. <b>Bilinéarité</b> : $B$ est linéaire en chaque variable, donc on peut développer comme un produit :</p>$$B(x,y) = B\Big(\sum_ix_ie_i,\sum_jy_je_j\Big) = \sum_{i,j}x_iy_jB(e_i,e_j).$$<p>Inégalité triangulaire, puis $|x_i|\leqslant\|x\|_\infty$ et $|y_j|\leqslant\|y\|_\infty$ :</p>$$|B(x,y)|\leqslant\sum_{i,j}|x_i||y_j||B(e_i,e_j)|\leqslant\Big(\sum_{i,j}|B(e_i,e_j)|\Big)\|x\|_\infty\|y\|_\infty.$$<div class="sbox">$$|B(x,y)|\leqslant C\|x\|_\infty\|y\|_\infty,\qquad C = \sum_{i,j}|B(e_i,e_j)|.$$</div>` },
    { q: 2, t: "Développer B(u + h, v + k)", h: R`<p>Par bilinéarité, le développement donne une partie constante, une partie linéaire en $(h,k)$ et un terme « quadratique » qui sera le petit $o$.</p>`, b: R`<p><span data-k="dev">Développement</span> :</p>$$B(u+h,v+k)-B(u,v) = \underbrace{B(u,k)+B(h,v)}_{L(h,k)}+B(h,k).$$<p>$L$ est linéaire en $(h,k)$, et</p>$$|B(h,k)|\leqslant C\|h\|_\infty\|k\|_\infty\leqslant C\|(h,k)\|^2 = o(\|(h,k)\|).$$<div class="sbox">$$dB(u,v)(h,k) = B(u,k)+B(h,v).$$</div><p>C'est l'analogue de $(uv)' = u'v+uv'$.</p>`, rappels: ["o-a-diff-def"] }
  ],
  ctx: { "o-a-diff-def": R`<p>$L(h,k) = B(u,k)+B(h,v)$, reste $B(h,k)$ en $O(\|(h,k)\|^2)$.</p>` },
  piege: R`Oublier de justifier que $L$ est linéaire (et continue : automatique en dimension finie).`,
  methode: R`Différentielle d'une application bilinéaire : développer, isoler la partie linéaire, majorer le reste.`
}
]);
})();

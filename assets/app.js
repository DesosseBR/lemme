/* Lemme : navigation, pages, lecteur PDF, visualisations et corrigé pas à pas.
   Le contenu vient de content/*.js : ce fichier n'a pas à changer quand on ajoute des exercices. */
(function () {
"use strict";
const { SUBJECTS, EXERCISES, DM, KHOLLES, BANKS, RAPPELS } = window.LEMME;
const PDFS = new Set(window.LEMME.PDFS || []);
const YEARS = { mpsi: "Sup", mp: "Spé" };
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const app = $("#app");
const sid = id => SUBJECTS.find(s => s.id === id);
const VISIBLE = SUBJECTS.filter(s => !s.hidden);
const CONC = window.LEMME.CONCOURS || {};
const homeOf = s => s.home || "#commando";
const parentOf = s => s.id === "oraux" ? ["Oraux", "#oral"] : s.id === "kholles" ? ["Khôlles", "#kholles"] : ["Concours", "#concours"];
let lastConc = null;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pad = n => String(n).padStart(2, "0");
const plural = (n, w) => `${n} ${w}${n > 1 ? "s" : ""}`;

/* ---------- Photos (Unsplash, licence libre) ---------- */
const PHOTOS = {
  hero: ["photo-1758685734643-db77920292bc", "Vitaly Gariev"],
  maths: ["photo-1509228468518-180dd4864904", "Antoine Dautry"],
  physique: ["photo-1509869175650-a1d97972541a", "JESHOOTS.COM"],
  chimie: ["photo-1532094349884-543bc11b234d", "Hans Reniers"],
  si: ["photo-1524514587686-e2909d726e9b", "Isis França"],
  info: ["photo-1675602488453-c3897a475af5", "Bermix Studio"],
  anglais: ["photo-1530608031805-8e170c1b793a", "Jonathan Singer"],
  oral: ["photo-1758685845906-6f705cde4fb7", "Vitaly Gariev"],
  commando: ["photo-1588450248442-1c8357368dba", "Simon Infanger"]
};
const src = (k, w) => `https://images.unsplash.com/${PHOTOS[k][0]}?auto=format&fit=crop&w=${w}&q=72`;
const img = (k, sizes = "100vw", eager = false) => `<img src="${src(k, 1200)}" srcset="${src(k, 640)} 640w, ${src(k, 1200)} 1200w, ${src(k, 2000)} 2000w" sizes="${sizes}" alt="" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" class="fi" onload="this.classList.add('ld')" onerror="this.style.visibility='hidden'">`;

/* ---------- Icônes ---------- */
const I = {
  arrow: `<svg class="go" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  left: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M16 10H4m5-5-5 5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  book: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H16v12H5.5A1.5 1.5 0 0 0 4 16.5v-12ZM4 16.5A1.5 1.5 0 0 0 5.5 18H16" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  close: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 5 10 10M15 5 5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  minus: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 10h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  plus: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 5v10M5 10h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  dl: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v10m-4-4 4 4 4-4M4 16h12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  full: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 7V3h4M17 7V3h-4M3 13v4h4M17 13v4h-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};
const DONE = (() => { try { return JSON.parse(localStorage.getItem("lemme-done") || "{}") || {}; } catch (e) { return {}; } })();
const doneN = id => DONE[id] || 0;
function setDone(id, n) { if (typeof trackDone === "function" && n !== (DONE[id] || 0)) trackDone(id, n > (DONE[id] || 0) ? 1 : -1); if (n > 0) DONE[id] = n; else delete DONE[id]; try { localStorage.setItem("lemme-done", JSON.stringify(DONE)); } catch (e) {} }
const MT = (() => {
  const SYM = {"⊂":"\\subset ","⊃":"\\supset ","∘":"\\circ ","≤":"\\leqslant ","≥":"\\geqslant ","⩽":"\\leqslant ","⩾":"\\geqslant ","∈":"\\in ","∉":"\\notin ","ℝ":"\\mathbb R","ℕ":"\\mathbb N","ℤ":"\\mathbb Z","ℂ":"\\mathbb C","ℚ":"\\mathbb Q","𝕂":"\\mathbb K","∑":"\\sum ","∏":"\\prod ","√":"\\sqrt ","∫":"\\int ","→":"\\to ","↦":"\\mapsto ","⇒":"\\Rightarrow ","⇔":"\\iff ","≠":"\\neq ","∞":"\\infty ","Δ":"\\Delta ","𝒫":"\\mathcal P","−":"-","×":"\\times ","∩":"\\cap ","∪":"\\cup ","∖":"\\setminus ","≡":"\\equiv ","∼":"\\sim ","≈":"\\approx ","∀":"\\forall ","∃":"\\exists ","∂":"\\partial ","∇":"\\nabla ","⊥":"\\perp ","∅":"\\emptyset ","±":"\\pm ","α":"\\alpha ","β":"\\beta ","γ":"\\gamma ","δ":"\\delta ","ε":"\\varepsilon ","θ":"\\theta ","λ":"\\lambda ","μ":"\\mu ","ν":"\\nu ","π":"\\pi ","ρ":"\\rho ","σ":"\\sigma ","τ":"\\tau ","φ":"\\varphi ","χ":"\\chi ","ψ":"\\psi ","ω":"\\omega ","ξ":"\\xi ","ζ":"\\zeta ","η":"\\eta ","Γ":"\\Gamma ","Λ":"\\Lambda ","Π":"\\Pi ","Σ":"\\Sigma ","Φ":"\\Phi ","Ω":"\\Omega ","ℓ":"\\ell ","‖":"\\|","ⁿ⁻¹":"^{n-1}","ⁿ⁺¹":"^{n+1}","⁻¹":"^{-1}","ⁿ":"^n","²":"^2","³":"^3","ᵏ":"^k","ᵖ":"^p","⁰":"^0","¹":"^1","⁴":"^4","ˣ":"^x","₀":"_0","₁":"_1","₂":"_2","₃":"_3","ₙ":"_n","ₖ":"_k","ᵢ":"_i","ⱼ":"_j","ₚ":"_p","ᵣ":"_r"};
  const FN = {ker:"\\ker",Im:"\\operatorname{Im}",det:"\\det",tr:"\\operatorname{tr}",rg:"\\operatorname{rg}",sin:"\\sin",cos:"\\cos",tan:"\\tan",ln:"\\ln",exp:"\\exp",arctan:"\\arctan",sh:"\\operatorname{sh}",ch:"\\operatorname{ch}",th:"\\operatorname{th}",min:"\\min",max:"\\max",sup:"\\sup",inf:"\\inf",lim:"\\lim",dim:"\\dim",Vect:"\\operatorname{Vect}",Id:"\\mathrm{Id}",deg:"\\deg",pgcd:"\\operatorname{pgcd}"};
  const SYMRE = new RegExp(Object.keys(SYM).map(s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).sort((a, b) => b.length - a.length).join("|"), "g");
  const TEXTW = new Set("a à y l d et ou de du des le la les un une en sur par pour avec sans dans est sont si on ne pas que qui au aux ce cet cette son sa ses leur deux trois puis donc mais car".split(" "));
  const isMath = w => {
    const core = /\(/.test(w) ? w.replace(/^[«\[]+|[».,;:!?\]]+$/g, "") : w.replace(/^[«(\[]+|[»).,;:!?\]]+$/g, "");
    if (!core) return false;
    if (/^Q\d|^(Étape|Partie|Cas)$/i.test(core)) return false;
    if (/^\(?[ivx]+\)$/.test(w) || /^\(?[a-h]\)$/.test(w)) return false;
    if (/^[\[\]]?-?[0-9]*[A-Za-z]{0,2}[,;]?[\[\]]?$/.test(w) && /[\[\]]/.test(w)) return true;
    if (/^\d+[a-zA-Z]{1,2}$/.test(core)) return true;
    if (SYMRE.test(w)) { SYMRE.lastIndex = 0; return true; }
    SYMRE.lastIndex = 0;
    if (/[_^=<>|+*/]/.test(w)) return true;
    if (FN[core.replace(/\(.*$/, "")] && /^[a-zA-Z]+(\(|$)/.test(core) && core.replace(/\(.*$/, "") !== "ch" ) return true;
    if (/^[A-Za-z]$/.test(core) && !TEXTW.has(core)) return true;
    if (/^[A-Za-z]'+$/.test(core)) return true;
    if (/^[A-Za-z]\(.*\)$/.test(core)) return true;
    if (/^-?\d+$/.test(core)) return "num";
    if (/^[A-Za-z]{1,2}\d+$/.test(core) && !/^Q\d/.test(core)) return true;
    return false;
  };
  const conv = s => s.replace(SYMRE, m => SYM[m]).replace(/\b([A-Za-z]+)\b/g, (m, w) => FN[w] || m).replace(/\^\(([^()]*)\)/g, "^{$1}").replace(/_([A-Za-z0-9])/g, "_{$1}").replace(/\^(-?[A-Za-z0-9]+)/g, "^{$1}");
  return function (t) {
    if (!t || t.includes("$")) return null;
    const ws = t.split(/\s+/).filter(Boolean);
    const cls = ws.map(isMath);
    const OP = /^(=|<|>|≤|≥|⩽|⩾|≠|⊂|∈|→|⇒|⇔|\+|−|-|\*|×|∘|∩|∪)$/;
    for (let i = 0; i < ws.length; i++) {
      if (/^[ay]$/.test(ws[i]) && ((ws[i + 1] && OP.test(ws[i + 1])) || (ws[i - 1] && OP.test(ws[i - 1])))) cls[i] = true;
      if (cls[i] === "num") cls[i] = (cls[i - 1] === true || cls[i + 1] === true) ? true : false;
    }
    if (!cls.some(c => c === true)) return null;
    const out = [];
    for (let i = 0; i < ws.length;) {
      if (cls[i] !== true) { out.push(ws[i]); i++; continue; }
      let j = i; while (j + 1 < ws.length && cls[j + 1] === true) j++;
      let seg = ws.slice(i, j + 1).join(" ");
      let pre = "", post = "";
      const pm = seg.match(/^«+/); if (pm) { pre = pm[0]; seg = seg.slice(pre.length); }
      const qm = seg.match(/[».,;:!?]+$/); if (qm) { post = qm[0]; seg = seg.slice(0, -post.length); }
      if (seg.endsWith(")") && (seg.match(/\(/g) || []).length < (seg.match(/\)/g) || []).length) { seg = seg.slice(0, -1); post = ")" + post; }
      if (seg.startsWith("(") && (seg.match(/\(/g) || []).length > (seg.match(/\)/g) || []).length) { seg = seg.slice(1); pre += "("; }
      out.push(pre + "$" + conv(seg).trim() + "$" + post);
      i = j + 1;
    }
    return out.join(" ");
  };
})();
const ttl = e => e.tt || esc(MT(e.title) || e.title);
const stt = t => esc(MT(t) || t);
const CC_SHORT = { ccinp: "CCINP", mt: "Mines-Télécom", c1: "Centrale", mp: "Mines-Ponts", x: "X-ENS" };
const BANK_MARK = { "X-ENS": ["X", "x"], "Mines-Ponts": ["MP", "mp"], "Centrale-Supélec": ["CS", "c1"], "CCINP": ["CCINP", "ccinp"], "e3a-Polytech": ["e3a", "e3a"], "CNC": ["CNC", "cnc"] };
const bankMark = (name, big) => { const m = BANK_MARK[name] || [name.slice(0, 2), ""]; return `<span class="bmark${big ? " big" : ""}" data-cc="${m[1]}" aria-hidden="true">${m[0]}</span>`; };
const BANK_PHOTO = {
  "X-ENS": "Ecole_polytechnique_former_building_entrance.jpg",
  "Mines-Ponts": "P1250413_Paris_VI_bd_St-Michel_ecole_des_Mines_rwk.jpg",
  "Centrale-Supélec": "Châtenay-Malabry_-_l'école_Centrale.JPG",
  "CCINP": "ENSEEIHT_-_01.jpg",
  "e3a-Polytech": "Polytech_Nice_Sophia.jpg"
};
const BANK_PHOTO_CAP = { "X-ENS": "Ancienne entrée de l'École polytechnique, Paris", "Mines-Ponts": "Mines Paris, boulevard Saint-Michel", "Centrale-Supélec": "Ancien campus de Centrale, Châtenay-Malabry", "CCINP": "ENSEEIHT, Toulouse INP (école du concours CCINP)", "e3a-Polytech": "Polytech Nice Sophia" };
const wsrc = (f, w) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(f)}?width=${w}`;
const wimg = (f, eager) => `<img src="${wsrc(f, 1600)}" srcset="${wsrc(f, 800)} 800w, ${wsrc(f, 1600)} 1600w" sizes="100vw" alt="" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" referrerpolicy="no-referrer" onerror="this.style.visibility='hidden'">`;
const wcredit = f => `<a class="wcredit" href="https://commons.wikimedia.org/wiki/File:${encodeURIComponent(f)}" target="_blank" rel="noopener">Photo : Wikimedia Commons, licence libre (auteur et licence)</a>`;
const ICHECK = `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const tile = (href, num, title, foot, cls) => `<a class="tile${cls ? " " + cls : ""}" href="${href}"><span class="tnum">${num}</span><span class="tt">${title}</span>${foot ? `<span class="tfoot">${foot}</span>` : ""}</a>`;
const lvl = n => `<span class="lvl" role="img" aria-label="Difficulté ${n} sur 5">${[1, 2, 3, 4, 5].map(k => `<i class="${k <= n ? "on" : ""}" aria-hidden="true">★</i>`).join("")}</span>`;

/* ---------- MathJax ---------- */
let mjQueue = Promise.resolve();
let mjBusy = 0;
/* Rendu synchrone quand c'est possible : le navigateur ne peint jamais le code TeX brut, donc pas de flash */
function typeset(el) {
  if (!el || !window.MathJax || !MathJax.typesetPromise) return;
  if (!mjBusy && MathJax.typeset) {
    try { MathJax.typeset([el]); fitMath(el); return Promise.resolve(); } catch (err) { /* extension à charger : on passe en asynchrone */ }
  }
  mjBusy++;
  mjQueue = mjQueue.then(() => MathJax.typesetPromise([el])).then(() => fitMath(el)).catch(() => {}).finally(() => { mjBusy--; });
  return mjQueue;
}
/* Une transition interrompue par une autre n'est pas une erreur : on ignore ses promesses rejetées */
const quietVT = t => { if (t) [t.ready, t.finished, t.updateCallbackDone].forEach(p => p && p.catch(() => {})); return t; };
/* Fondu enchaîné entre l'ancien et le nouvel affichage (View Transitions), sinon changement immédiat */
const smooth = fn => {
  if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return fn();
  quietVT(document.startViewTransition(() => { fn(); }));
};
/* Formules trop larges : on réduit la taille au lieu d'afficher une barre de défilement */
function fitMath(root) {
  (root || document).querySelectorAll('mjx-container[display="true"]').forEach(c => {
    c.style.removeProperty("font-size");
    const w = c.clientWidth; if (!w) return;
    const need = c.scrollWidth; if (need <= w + 1) return;
    c.style.setProperty("font-size", (105 * Math.max(.5, w / need * .97)).toFixed(1) + "%", "important");
  });
}
let fitT = 0;
window.addEventListener("resize", () => { clearTimeout(fitT); fitT = setTimeout(() => fitMath(document), 150); });
document.addEventListener("toggle", e => { if (e.target.open) fitMath(e.target); }, true);
window.__lemmeTypeset = () => typeset(app);

/* ---------- Année ---------- */
let year = "mpsi";
try { const y = localStorage.getItem("lemme-year"); if (y in YEARS) year = y; } catch (e) {}
const ysw = $(".yearswitch"), pill = $(".yearswitch .pill");
function paintYear() {
  document.documentElement.dataset.year = year;
  $$(".yearswitch button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.year === year)));
  const b = $(`.yearswitch button[data-year="${year}"]`);
  if (b) { pill.style.width = b.offsetWidth + "px"; pill.style.transform = `translateX(${b.offsetLeft - 3}px)`; }
}
function setYear(y) { year = y; try { localStorage.setItem("lemme-year", y); } catch (e) {} paintYear(); }
$$(".yearswitch button").forEach(b => b.addEventListener("click", () => {
  if (b.dataset.year === year) return;
  const m = location.hash.match(/^#c-([a-z]+)-(mpsi|mp)-\d+$/);
  if (m) { setYear(b.dataset.year); location.hash = "s-" + m[1]; }
  else smooth(() => { setYear(b.dataset.year); render(true); });
}));
window.addEventListener("resize", paintYear);

/* ---------- Menus ---------- */
$("#dd-mat").innerHTML = VISIBLE.map(s => `<a href="#s-${s.id}"><b>${s.name}</b></a>`).join("");
$("#foot-subj").innerHTML = VISIBLE.map(s => `<li><a href="#s-${s.id}">${s.name}</a></li>`).join("");
$("#credits").textContent = "Photos : Unsplash · " + [...new Set(Object.values(PHOTOS).map(p => p[1]))].join(", ");
const ddBtns = $$(".dd > .navbtn");
function closeMenus(except) { ddBtns.forEach(b => { if (b !== except) { b.setAttribute("aria-expanded", "false"); $("#" + b.getAttribute("aria-controls")).hidden = true; } }); }
ddBtns.forEach(b => b.addEventListener("click", e => {
  e.stopPropagation();
  const open = b.getAttribute("aria-expanded") === "true";
  closeMenus(b); b.setAttribute("aria-expanded", String(!open)); $("#" + b.getAttribute("aria-controls")).hidden = open;
}));
document.addEventListener("click", e => { if (!e.target.closest(".dd")) closeMenus(); if (!e.target.closest(".search")) $("#results").hidden = true; if (!e.target.closest("[data-k]") && !e.target.closest(".tip")) closeTip(); });
const nav = $("#mainnav"), burger = $("#burger");
burger.addEventListener("click", () => { const o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", String(o)); });
const head = $(".site-head");
window.addEventListener("scroll", () => head.classList.toggle("scrolled", scrollY > 8), { passive: true });

/* ---------- Recherche ---------- */
const sbar = $("#searchbar"), stog = $("#search-toggle"), q = $("#q"), results = $("#results");
stog.addEventListener("click", () => { const o = sbar.hidden; sbar.hidden = !o; stog.setAttribute("aria-expanded", String(o)); if (o) q.focus(); });
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const INDEX = [];
SUBJECTS.forEach(s => ["mpsi", "mp"].forEach(y => s.years[y].forEach((c, i) => INDEX.push({ href: `#c-${s.id}-${y}-${i}`, label: c.t, meta: `${s.name} · ${YEARS[y]}`, n: norm(c.t + " " + c.n + " " + s.name) }))));
EXERCISES.forEach(e => INDEX.push({ href: `#e-${e.id}`, label: e.title, meta: `${e.kind === "probleme" ? "Problème" : "Exercice"} · ${sid(e.subj).name} ${YEARS[e.year]}`, n: norm(e.title + " " + sid(e.subj).name) }));
q.addEventListener("input", () => {
  const v = norm(q.value.trim());
  if (!v) { results.hidden = true; return; }
  const hits = INDEX.filter(x => v.split(/\s+/).every(w => x.n.includes(w))).slice(0, 12);
  results.innerHTML = hits.length ? hits.map(h => `<a href="${h.href}"><span>${esc(h.label)}</span><small>${h.meta}</small></a>`).join("") : `<p>Aucun résultat pour « ${esc(q.value)} ».</p>`;
  results.hidden = false;
});
results.addEventListener("click", e => { if (e.target.closest("a")) { sbar.hidden = true; stog.setAttribute("aria-expanded", "false"); q.value = ""; results.hidden = true; } });

/* ---------- Composants ---------- */
const exOf = (s, y, c) => EXERCISES.filter(e => e.subj === s && e.year === y && (c === undefined || e.chap === c));
function crumbs(list) { return `<nav class="crumbs" aria-label="Fil d'Ariane"><a href="#accueil">Accueil</a>${list.map(c => `<span class="sep" aria-hidden="true">/</span>${c[1] ? `<a href="${c[1]}">${esc(c[0])}</a>` : `<span>${esc(c[0])}</span>`}`).join("")}</nav>`; }
function phead({ crumb, title, meta = "", tabs = "", photo, tall, wiki }) {
  return `<section class="phead${photo || wiki ? " has-photo" : ""}${tall ? " tall" : ""}">${wiki ? `<div class="photo">${wimg(wiki, true)}</div>${wcredit(wiki)}` : photo ? `<div class="photo">${img(photo, "100vw", true)}</div>` : ""}<div class="wrap">${crumbs(crumb)}<h1>${title}</h1>${meta ? `<div class="meta">${meta}</div>` : ""}${tabs}</div></section>`;
}
function exCard(e) {
  const n = doneN(e.id), pb = e.kind === "probleme";
  const kind = e.subj === "kholles" ? "Khôlle" : e.concours ? (CC_SHORT[e.concours] || CONC[e.concours]) : e.subj === "annales" ? "Sujet de concours" : (pb ? "Problème" : "Exercice");
  return `<a class="excard${n ? " done" : ""}" href="#e-${e.id}"${e.concours ? ` data-cc="${e.concours}"` : ""}><span class="top"><span class="kind">${kind}</span>${lvl(e.level)}</span><b class="ttl">${ttl(e)}</b><span class="foot"><span>${e.time || ""}</span>${n ? `<span class="dn">${ICHECK}Fait${n > 1 ? " " + n + " fois" : ""}</span>` : ""}</span></a>`;
}
let stars = (() => { try { return new Set(JSON.parse(localStorage.getItem("lemme-stars") || "[]")); } catch (_) { return new Set(); } })();
const byStars = list => stars.size ? list.filter(e => stars.has(e.level || 1)) : list;
function starBar(list) {
  const cnt = [1, 2, 3, 4, 5].map(k => list.filter(e => (e.level || 1) === k).length);
  return `<div class="starbar" role="group" aria-label="Filtrer par difficulté"><span class="sbl">Difficulté</span><button type="button" class="sbtn" data-star="0" aria-pressed="${!stars.size}">Toutes<span class="n">${list.length}</span></button>${cnt.map((n, k) => `<button type="button" class="sbtn" data-star="${k + 1}" aria-pressed="${stars.has(k + 1)}"${n ? "" : " disabled"}><span class="st" aria-label="${k + 1} étoile${k ? "s" : ""}">${"★".repeat(k + 1)}</span><span class="n">${n}</span></button>`).join("")}</div>`;
}
function exList(list, emptyHtml) {
  const f = byStars(list);
  return starBar(list) + (f.length ? `<div class="exgrid stagger">${f.map(exCard).join("")}</div>` : empty("Aucun exercice à ce niveau", " Choisis une autre difficulté."));
}
function plusList(list) {
  if (!list.length) return empty("Bientôt", " Les sujets « Aller plus loin » de ce chapitre sont en préparation.");
  const ids = [...new Set(list.map(e => e.plus))];
  return `<p class="pl-intro">Des sujets complets, rédigés comme un problème de concours : chaque partie s'appuie sur les précédentes, et tout est corrigé question par question.</p>` + ids.map(k => {
    const parts = list.filter(e => e.plus === k), f = parts[0], nd = parts.filter(e => doneN(e.id)).length;
    if (parts.length === 1) { const nq = new Set(f.steps.map(st => st.q)).size; return `<section class="plsujet"><div class="plh"><span class="plk">Sujet</span><h2>${esc(f.title)}</h2>${f.sujetDesc ? `<p>${f.sujetDesc}</p>` : ""}<span class="plm">${nq} questions${f.time ? " · " + f.time : ""}${nd ? ` · ${ICHECK}Fait` : ""}</span></div><ol class="plparts"><li><a class="excard${nd ? " done" : ""}" href="#e-${f.id}"><span class="plp">Sujet complet</span><span class="plt">Énoncé et corrigé question par question</span><span class="plq">Q1 à Q${nq}</span>${I.arrow}</a></li></ol></section>`; }
    return `<section class="plsujet"><div class="plh"><span class="plk">Sujet</span><h2>${esc(f.sujet || f.title)}</h2>${f.sujetDesc ? `<p>${f.sujetDesc}</p>` : ""}<span class="plm">${plural(parts.length, "partie")} · ${parts.reduce((a, e) => a + new Set(e.steps.map(st => st.q)).size, 0)} questions${nd ? ` · ${nd} faite${nd > 1 ? "s" : ""}` : ""}</span></div><ol class="plparts">${parts.map(e => `<li><a class="excard${doneN(e.id) ? " done" : ""}" href="#e-${e.id}"><span class="plp">${esc(e.part)}</span><span class="plt">${ttl(e)}</span><span class="plq">${qrange(e)}${doneN(e.id) ? ` · ${ICHECK}Fait` : ""}</span>${I.arrow}</a></li>`).join("")}</ol></section>`;
  }).join("");
}
function tabsHtml(list, cur) { if (!list.length) return ""; return `<div class="tabs" role="tablist">${list.map(t => `<button type="button" role="tab" data-tab="${t[0]}" aria-selected="${t[0] === cur}">${t[1]}${t[2] !== undefined ? `<span class="n">${t[2]}</span>` : ""}</button>`).join("")}</div>`; }
function empty(title, text) { return `<div class="empty"><b>${title}</b>${text}</div>`; }

/* ---------- Pages ---------- */
function home() {
  const demo = EXERCISES.find(e => e.id === "ex-rc");
  const st = demo.steps[1];
  return `
  <section class="hero"><div class="photo">${img("hero", "100vw", true)}</div><div class="wrap">
    <h1><span class="line"><span>Toute ta prépa,</span></span><span class="line"><span><span class="mark">corrigée</span></span></span><span class="line"><span>pas à pas</span></span></h1>
    <p>Cours, résumés et corrigés interactifs pour la prépa scientifique, de la Sup à la Spé.</p>
    <div class="ctas"><a class="btn btn-yellow" href="#s-maths">Explorer les matières ${I.arrow}</a><a class="btn btn-glass" href="#e-ex-recurrence">Essayer un corrigé</a></div>
  </div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-title"><h2>Les matières</h2><a href="#exercices">Tous les exercices ${I.arrow}</a></div>
    <div class="subjects stagger">${VISIBLE.map(s => `<a class="scard" href="#s-${s.id}">${img(s.id, "(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw")}<span class="in"><h3>${s.name}</h3><span class="bar"></span><small>${s.years.mpsi.length} chapitres en Sup · ${s.years.mp.length} en Spé</small></span></a>`).join("")}</div>
  </div></section>

  <section class="sec"><div class="wrap showcase">
    <div>
      <h2>Un corrigé qu'on suit, pas qu'on survole</h2>
      <p>Chaque correction avance étape par étape, et le rappel de cours utilisé est à un clic.</p>
      <div class="keys"><kbd>←</kbd><kbd>→</kbd><span>pour avancer ou revenir</span></div>
      <a class="btn btn-navy" href="#e-${demo.id}">Ouvrir cet exercice ${I.arrow}</a>
    </div>
    <div class="panelbox player" aria-label="Aperçu d'un corrigé">
      <div class="prog" aria-hidden="true">${demo.steps.map((_, k) => `<button tabindex="-1" class="${k <= 1 ? "done" : ""}"></button>`).join("")}<button tabindex="-1"></button></div>
      <div class="step"><span class="count">Étape 2 sur ${demo.steps.length}</span><h3>${stt(st.t)}</h3><div class="prose">${st.b}</div>
      <div class="rappels"><span class="lab">Rappels utilisés</span>${(st.rappels || []).map(r => rchip(r)).join("")}</div></div>
    </div>
  </div></section>

  <section class="sec"><div class="wrap"><div class="band">
    <div class="list"><h2>S'entraîner</h2><ul>
      <li><a href="#classiques">Classiques <span>Les exercices et problèmes incontournables</span>${I.arrow}</a></li>
      <li><a href="#dm">Devoirs maison <span>Sujets complets en PDF</span>${I.arrow}</a></li>
      <li><a href="#kholles">Khôlles <span>Les exercices classiques, par chapitre</span>${I.arrow}</a></li>
      <li><a href="#concours">Concours <span>Banques et calendrier</span>${I.arrow}</a></li>
      <li><a href="#oral">Oraux <span>Ce qu'on attend de toi</span>${I.arrow}</a></li>
    </ul></div>
    <div class="photo">${img("oral", "(max-width:860px) 100vw, 50vw")}</div>
  </div></div></section>`;
}

let subjTab = "chapitres";
function subjectPage(id) {
  const s = sid(id); if (!s) return notFound();
  const list = s.years[year];
  const classics = EXERCISES.filter(e => e.subj === id && e.year === year && e.classique).sort((a, b) => (b.kind === "probleme") - (a.kind === "probleme"));
  const tabs = tabsHtml([["chapitres", "Chapitres", list.length], ["classiques", "Classiques", classics.length]], subjTab);
  const body = subjTab === "classiques"
    ? (classics.length ? `<div class="exgrid stagger">${classics.map(exCard).join("")}</div>` : empty("Bientôt", ` Les classiques de ${s.name.toLowerCase()} en ${YEARS[year]} sont en préparation.`))
    : `<div class="chaptiles stagger">${list.map((c, i) => { const n = exOf(id, year, i).length, r = PDFS.has(`resume-${id}-${year}-${pad(i + 1)}`); return `<a class="chaptile" href="#c-${id}-${year}-${i}"><span class="tnum">${pad(i + 1)}</span><span class="tt">${esc(c.t)}</span><span class="tn">${n ? plural(n, "exercice") : (c.r || r ? "Résumé" : "En préparation")}</span></a>`; }).join("")}</div>`;
  return phead({ crumb: [["Matières"], [s.name]], title: s.name, tabs, photo: id, tall: true })
    + `<div class="wrap layout full">${body}</div>`;
}

let chapTab = null;
function chapterPage(id, y, i) {
  const s = sid(id); if (!s || !s.years[y] || !s.years[y][i]) return notFound();
  if (year !== y && !s.hidden) setYear(y);
  const list = s.years[y], c = list[i], all = exOf(id, y, i), exs = all.filter(e => !e.plus), plus = all.filter(e => e.plus);
  const rs = `resume-${id}-${y}-${pad(i + 1)}`, cs = `cours-${id}-${y}-${pad(i + 1)}`;
  const tabs = [];
  const oral = id === "oraux";
  if (oral) {
    (c.cc || []).forEach(k => tabs.push([k, CONC[k], exs.filter(e => e.concours === k).length]));
    if (!chapTab || !tabs.find(t => t[0] === chapTab)) chapTab = (lastConc && tabs.find(t => t[0] === lastConc)) ? lastConc : ((tabs.find(t => t[2]) || tabs[0] || [""])[0]);
  } else if (id === "kholles") {
    chapTab = "exercices";
  } else {
    if (PDFS.has(cs)) tabs.push(["cours", "Cours"]);
    tabs.push(["resume", "Résumé"]);
    if (exs.length) tabs.push(["exercices", "Exercices", exs.length]);
    if (id === "xens") tabs.push(["plus", "Aller plus loin", new Set(plus.map(e => e.plus)).size]);
    if (!chapTab || !tabs.find(t => t[0] === chapTab)) chapTab = PDFS.has(cs) ? "cours" : (PDFS.has(rs) ? "resume" : (exs.length ? "exercices" : plus.length ? "plus" : "resume"));
  }
  let body;
  if (oral) { const ce = exs.filter(e => e.concours === chapTab); body = ce.length ? `<div class="exgrid stagger">${ce.map(exCard).join("")}</div>` : empty("Exercices en préparation", ` Les exercices ${CONC[chapTab] || ""} de ce chapitre arrivent bientôt.`); }
  else if (chapTab === "cours") body = `<div data-pdf="${cs}" data-title="Cours · ${esc(c.t)}"></div>`;
  else if (chapTab === "resume") body = c.r
    ? `<article class="panelbox resume"><p class="rs-prog"><b>Au programme</b>${esc(c.n)}</p><h2>L'essentiel</h2><div class="prose">${c.r}</div>${PDFS.has(rs) ? `<a class="btn btn-ghost btn-sm rs-dl" href="pdf/${rs}.pdf" download>${I.dl}Télécharger en PDF</a>` : ""}</article>`
    : (PDFS.has(rs) ? `<div data-pdf="${rs}" data-title="Résumé · ${esc(c.t)}"></div>` : empty("Résumé en préparation", "")) + `<p style="margin:20px 4px 0;color:var(--muted);font-size:14.5px"><b style="color:var(--ink)">Au programme :</b> ${esc(c.n)}.</p>`;
  else if (chapTab === "plus") body = plusList(plus);
  else body = exs.length ? exList(exs) : empty("Exercices en préparation", "");
  const prev = list[i - 1], next = list[i + 1];
  const pager = `<div style="display:flex;justify-content:space-between;gap:12px;margin-top:36px;flex-wrap:wrap">${prev ? `<a class="btn btn-ghost" href="#c-${id}-${y}-${i - 1}">${I.left} ${esc(prev.t)}</a>` : "<span></span>"}${next ? `<a class="btn btn-ghost" href="#c-${id}-${y}-${i + 1}">${esc(next.t)} ${I.arrow}</a>` : ""}</div>`;
  return phead({ crumb: id === "kholles" ? [["Khôlles", "#kholles"]] : s.hidden ? [parentOf(s), [s.name, homeOf(s)]] : [[s.name, `#s-${id}`], [YEARS[y]]], title: esc(c.t), meta: oral ? `<span class="tag y">Chapitre ${i + 1}</span><span class="tag">${s.name}</span><span class="tag">${plural((c.cc || []).length, "concours").replace("concourss", "concours")}</span>` : id === "kholles" ? `<span class="tag y">Chapitre ${pad(i + 1)}</span><span class="tag">${s.name} · ${YEARS[y]}</span>` : s.hidden ? `<span class="tag y">${esc(xpos(s, i).name)} · ${xpos(s, i).j + 1}</span><span class="tag">${s.name}</span><span class="tag">Niveau ★★★★★</span>` : `<span class="tag y">Chapitre ${pad(i + 1)}</span><span class="tag">${s.name} · ${YEARS[y]}</span>`, tabs: oral ? tabsHtml(tabs, chapTab).replace(/data-tab="(\w+)"/g, 'data-tab="$1" data-cc="$1"') : (tabs.length > 1 ? tabsHtml(tabs, chapTab) : "") })
    + `<div class="wrap layout"><div>${body}${pager}</div><aside class="side"><div class="sticky"><h3>${oral ? s.name : id === "kholles" ? s.name + " · " + YEARS[y] : s.hidden ? s.name : s.name + " · " + YEARS[y]}</h3><ul class="navlist">${list.map((x, j) => `<li><a href="#c-${id}-${y}-${j}" ${j === i ? 'aria-current="page"' : ""}><span class="n">${pad(j + 1)}</span>${esc(x.t)}</a></li>`).join("")}</ul></div></aside></div>`;
}

function doneHtml(e) {
  const n = doneN(e.id);
  const cf = typeof confOf === "function" ? confOf(e.id) : 0;
  return n ? `<span class="donestate">${ICHECK}Fait ${n} fois</span><button type="button" class="btn btn-ghost btn-sm" data-done="1">Je l'ai refait</button><button type="button" class="linkbtn" data-done="-1">Annuler</button><span class="feelpick" role="group" aria-label="Ton ressenti"><span class="fpl">Ressenti</span>${[[1, "Facile"], [2, "Moyen"], [3, "Difficile"]].map(([v, l]) => `<button type="button" class="chip" data-conf="${v}" aria-pressed="${cf === v}">${l}</button>`).join("")}</span>`
    : `<button type="button" class="btn btn-ghost btn-sm donebtn" data-done="1">${ICHECK}Marquer comme fait</button>`;
}
function bindDone(e, root) {
  $$("[data-done]", root || app).forEach(b => b.addEventListener("click", () => {
    setDone(e.id, doneN(e.id) + (+b.dataset.done));
    $$(".donebox").forEach(x => { x.innerHTML = doneHtml(e); bindDone(e, x); });
  }));
  $$("[data-conf]", root || app).forEach(b => b.addEventListener("click", () => {
    setConf(e.id, confOf(e.id) === +b.dataset.conf ? 0 : +b.dataset.conf);
    $$(".donebox").forEach(x => { x.innerHTML = doneHtml(e); bindDone(e, x); });
  }));
}
let enonceMode = "interactif";
function exercisePage(eid) {
  const e = EXERCISES.find(x => x.id === eid); if (!e) return notFound();
  const s = sid(e.subj), c = s.years[e.year][e.chap], pb = e.kind === "probleme";
  if (year !== e.year && !s.hidden) setYear(e.year);
  const hasPdf = PDFS.has("enonce-" + e.id);
  const d = e.decode || { donnees: [], but: "", cles: {} };
  const others = EXERCISES.filter(x => x.subj === e.subj && x.id !== e.id && x.year === e.year && x.chap === e.chap).slice(0, 3);
  if (e.concours) lastConc = e.concours;
  const ann = e.subj === "annales";
  const cr = ann ? [...bqCrumbs(c), [c.epreuve, `#c-annales-mp-${e.chap}`], [(/^(Exercice|Partie|Problème)/.test(e.part) ? "" : "Partie ") + e.part]] : e.subj === "kholles" ? [["Khôlles", "#kholles"], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]] : s.hidden ? [[s.name, homeOf(s)], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]].concat(e.plus ? [["Aller plus loin"], [e.part]] : []) : [[s.name, `#s-${s.id}`], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]];
  const kind = ann ? qrange(e) : e.subj === "kholles" ? "Khôlle" : e.concours ? "Oral " + CONC[e.concours] : (pb ? "Problème" : "Exercice");
  const meta = [`<span class="k"${e.concours ? ` data-cc="${e.concours}"` : ""}>${kind}</span>`, ann ? "" : (s.hidden ? s.name : s.name + " · " + YEARS[e.year]), e.time || "", ann ? "" : lvl(e.level)].filter(Boolean).join(`<span class="dot" aria-hidden="true">·</span>`);
  const head = `<section class="exhead"><div class="wrap wrap-wide">${crumbs(cr)}<div class="exh-row"><div class="exh-t"><h1 class="ttl">${ttl(e)}</h1><div class="exmeta">${meta}</div></div><div class="donebox">${doneHtml(e)}</div></div></div></section>`;
  const enHead = `<h2 id="h-en" class="pane-h">Énoncé ${hasPdf ? `<span class="seg" role="group" aria-label="Affichage de l'énoncé"><button type="button" data-mode="interactif" aria-pressed="${enonceMode === "interactif"}">Interactif</button><button type="button" data-mode="pdf" aria-pressed="${enonceMode === "pdf"}">PDF</button></span>` : ""}</h2>`;
  const enBody = `<div id="en-int" ${enonceMode === "pdf" && hasPdf ? "hidden" : ""}>
      <div class="prose enonce">${annotate(e.enonce, e)}</div>
      ${(d.donnees || []).length || d.but ? `<div class="decode">
        ${(d.donnees || []).length ? `<details class="fold"><summary>Ce que l'énoncé te donne</summary><ul>${d.donnees.map(x => `<li>${x}</li>`).join("")}</ul></details>` : ""}
        ${d.but ? `<details class="fold"><summary>Ce qu'on te demande</summary><div>${d.but}</div></details>` : ""}
      </div>` : ""}
    </div>
    ${hasPdf ? `<div id="en-pdf" ${enonceMode === "pdf" ? "" : "hidden"}><div data-pdf="enonce-${e.id}" data-title="${esc(e.title)}" data-lazy="1"></div></div>` : ""}`;
  const legend = `<span class="legend" aria-hidden="true"><span class="lg lg-n">notion de cours</span>${Object.keys(d.cles || {}).length ? `<span class="lg lg-k">mot expliqué</span>` : ""}${e.side ? `<span class="lg lg-s">donné par l'énoncé</span>` : ""}</span>`;
  const cor = `<section class="panelbox pane-cor" aria-labelledby="h-cor"><h2 id="h-cor" class="pane-h cor-h">Corrigé ${legend}${PDFS.has("corrige-" + e.id) ? `<a class="btn btn-ghost btn-sm" style="margin-left:auto" href="pdf/corrige-${e.id}.pdf" download aria-label="Télécharger le corrigé en PDF">${I.dl} PDF</a>` : ""}</h2><div id="player" class="player"></div></section>`;
  const viz = [].concat(e.viz || []).map((v, k) => `<section class="panelbox" aria-labelledby="h-viz${k}"><h2 id="h-viz${k}" class="pane-h">${v.title || "Visualiser"}</h2><div id="viz${k ? k : ""}"></div></section>`).join("");
  const plab = q => (/^(Exercice|Partie|Problème|Question|Thème)/.test(q) ? "" : "Partie ") + q;
  let more;
  if (e.part) {
    const sib = EXERCISES.filter(x => x.subj === e.subj && x.year === e.year && x.chap === e.chap && x.part && x.plus === e.plus);
    const k = sib.indexOf(e), pv = sib[k - 1], nx = sib[k + 1];
    const home = ann ? `#c-annales-mp-${e.chap}` : `#c-${s.id}-${e.year}-${e.chap}`;
    const card = (x, dir) => x ? `<a class="pnav ${dir}" href="#e-${x.id}"><span class="pdir">${dir === "prev" ? "← Partie précédente" : "Partie suivante →"}</span><span class="plab">${esc(plab(x.part))}</span><span class="ptt">${ttl(x)}</span></a>` : `<span class="pnav ${dir} off"><span class="pdir">${dir === "prev" ? "Début du sujet" : "Fin du sujet"}</span><a class="plab" href="${home}">Retour au sujet</a></span>`;
    more = sib.length > 1 ? `<section class="more"><h2>${esc(plab(e.part))} sur ${sib.length}</h2><div class="pnavs">${card(pv, "prev")}${card(nx, "next")}</div></section>` : "";
  } else more = others.length ? `<section class="more"><h2>Dans le même chapitre</h2><div class="exgrid">${others.map(exCard).join("")}</div></section>` : "";
  return head + `<div class="wrap wrap-wide"><div class="ex-layout wide">
      <div class="split"><section class="panelbox side-en" aria-labelledby="h-en">${enHead}${enBody}</section>${cor}</div>
      ${viz}${more}
    </div></div>`;
}

let exFilter = "all";
function exercisesPage(onlyClassics) {
  const list = EXERCISES.filter(e => e.year === year && !sid(e.subj).hidden && (exFilter === "all" || e.subj === exFilter) && (!onlyClassics || e.classique));
  const title = onlyClassics ? "Classiques" : "Exercices corrigés";
  return phead({ crumb: [[title]], title })
  + `<div class="wrap layout full"><div>
    <div class="filters" role="group" aria-label="Filtrer par matière"><button type="button" class="chip" data-f="all" aria-pressed="${exFilter === "all"}">Toutes</button>${VISIBLE.map(s => `<button type="button" class="chip" data-f="${s.id}" aria-pressed="${exFilter === s.id}">${s.name}</button>`).join("")}</div>
    ${list.length ? exList(list) : empty("Rien pour l'instant", ` Essaie une autre matière ou passe en ${year === "mpsi" ? "Spé" : "Sup"}.`)}
  </div></div>`;
}

let dmSel = 0;
function dmPage() {
  if (!DM[dmSel]) dmSel = 0;
  const d = DM[dmSel], s = d && sid(d.subj);
  return phead({ crumb: [["Devoirs maison"]], title: "Devoirs maison" })
  + `<div class="wrap layout full"><div>
    <div class="filters" role="group" aria-label="Choisir un devoir">${DM.map((x, k) => `<button type="button" class="chip" data-dm="${k}" aria-pressed="${k === dmSel}">${esc(x.title)} · ${YEARS[x.year]}</button>`).join("")}</div>
    ${d ? `<div data-pdf="dm-${d.subj}-${d.year}-${dmSel + 1}" data-title="${esc(d.title)} · ${s.name} ${YEARS[d.year]}"></div>
    ${d.corrige ? `<div style="margin-top:20px"><a class="btn btn-yellow" href="#e-${d.corrige}">Voir le corrigé pas à pas ${I.arrow}</a></div>` : ""}` : ""}
  </div></div>`;
}

function dsPage() {
  return phead({ crumb: [["Devoirs surveillés"]], title: "Réussir un DS" }) + `<div class="wrap layout full"><article class="prose">
    <h2>Un plan pour quatre heures</h2>
    <ul class="steps-list">
      <li><b>0 h 00 · 0 h 15</b><span>Lire tout le sujet. Repérer les parties indépendantes et les questions de cours.</span></li>
      <li><b>0 h 15 · 3 h 15</b><span>Traiter les parties dans l'ordre qui t'arrange. Changer de partie après 15 minutes bloqué.</span></li>
      <li><b>3 h 15 · 3 h 45</b><span>Revenir sur les questions laissées, en admettant les résultats intermédiaires.</span></li>
      <li><b>3 h 45 · 4 h 00</b><span>Relire, vérifier les numéros, encadrer les résultats.</span></li>
    </ul>
    <h2>Rédiger pour le correcteur</h2>
    <ul><li>Annonce ce que tu montres, puis montre-le.</li><li>Cite le théorème et vérifie ses hypothèses sur la copie.</li><li>En physique, vérifie l'homogénéité avant d'encadrer.</li><li>Une question admise proprement vaut mieux qu'une question bâclée.</li></ul>
  </article></div>`;
}

function khollesPage() {
  const s = sid("kholles"), list = (s && s.years[year]) || [];
  return phead({ crumb: [["Khôlles"]], title: "Khôlles", photo: "oral" }) + `<div class="wrap layout full"><div>
    <p class="lead">Les exercices classiques posés en khôlle, rangés par chapitre et corrigés pas à pas.</p>
    ${list.length ? `<div class="tiles stagger">${list.map((c, i) => { const n = exOf("kholles", year, i).length, d = exOf("kholles", year, i).filter(e => doneN(e.id)).length; return tile(`#c-kholles-${year}-${i}`, pad(i + 1), esc(c.t), n ? `${d ? `<span class="tdone">${d}/${n} faits</span>` : `${n} exo${n > 1 ? "s" : ""}`}` : "Bientôt"); }).join("")}</div>` : empty("Bientôt", "")}
  </div></div>`;
}

const CONC_TAIL = `<h2>L'année de Spé</h2>
    <ul class="steps-list">
      <li><b>Décembre · janvier</b><span>Inscriptions sur le site du SCEI.</span></li>
      <li><b>Avril · mai</b><span>Les écrits, sur plusieurs semaines.</span></li>
      <li><b>Juin · juillet</b><span>Les oraux et le TIPE, pour les admissibles.</span></li>
    </ul>
    <p>Les dates exactes changent chaque année : vérifie-les sur <a href="https://www.scei-concours.fr" target="_blank" rel="noopener">scei-concours.fr</a>.</p>
    <h2>Réviser</h2>
    <ul><li>Dès janvier, un sujet complet en temps limité toutes les deux semaines.</li><li>Un carnet d'erreurs : chaque faute de DS, avec la bonne méthode.</li><li>Les dernières semaines, les annales des concours que tu vises.</li></ul>
  </article></div>`;
function concoursPage(f) {
  if (f) curFil = f;
  const nOf = k => ANN().filter(c => fils(c).includes(FIL[k])).length;
  if (!f) return phead({ crumb: [["Concours"]], title: "Préparer les écrits" }) + `<div class="wrap layout full">
    <article class="prose">
    <h2>Choisis ta filière</h2>
    <p>Tu ne vois ensuite que les épreuves que tu passeras.</p>
    <div class="filpick">${Object.keys(FIL).map(k => { const n = nOf(k); return `<a class="filcard" href="#concours-${k}"><b>${FIL[k]}</b><span>${n ? plural(n, "sujet corrigé").replace("sujet corrigés", "sujets corrigés") : "Bientôt"}</span></a>`; }).join("")}</div>
    <a class="tfcta" href="#trouver"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2.2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg><span><b>Chercher un sujet</b> par mots-clés, banque, année ou difficulté</span></a>`
    + CONC_TAIL;
  const seg = `<div class="filseg" role="group" aria-label="Filière">${Object.keys(FIL).map(k => `<a href="#concours-${k}"${k === f ? ' aria-current="page"' : ""}>${FIL[k]}</a>`).join("")}</div>`;
  return phead({ crumb: [["Concours", "#concours"], [FIL[f]]], title: `Écrits · ${FIL[f]}` }) + `<div class="wrap layout full">
    <article class="prose">
    ${seg}
    <h2>Les banques</h2>
    <div class="banklist">${BANKS.map(b => { const n = sujetsOf(b.name, f).length; const inner = `<span class="bkn">${b.name}</span><span class="bkd">${b.desc}</span><span class="bkc">${n ? plural(n, "sujet") : "Bientôt"}</span>`; return n ? `<a class="bkrow" href="#banque-${bslug(b.name)}-${f}">${inner}${I.arrow}</a>` : `<div class="bkrow off">${inner}<span></span></div>`; }).join("")}</div>
    ` + CONC_TAIL;
}

const bslug = n => norm(n).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const ANN = () => (sid("annales") || { years: { mp: [] } }).years.mp;
const FIL = { mp: "MP", mpi: "MPI", pc: "PC", psi: "PSI" };
let curFil = "mp";
const fils = c => String(c.filiere || "").split(/\s*,\s*/);
const filOf = c => fils(c).includes(FIL[curFil]) ? curFil : (Object.keys(FIL).find(k => fils(c).includes(FIL[k])) || "mp");
const sujetsOf = (bank, f) => ANN().map((c, i) => ({ c, i })).filter(x => x.c.bank === bank && (!f || fils(x.c).includes(FIL[f])));
const qrange = e => { const q = e.steps.map(st => st.q).filter(Boolean); return q.length ? `Q${Math.min(...q)} à Q${Math.max(...q)}` : ""; };
const MATS = ["Mathématiques", "Physique", "Chimie", "Sciences industrielles", "Informatique", "Langues"];
const matOf = c => MATS.find(m => norm(c.epreuve).startsWith(norm(m).slice(0, 6))) || "Autres";
function byYearMat(list) {
  const years = [...new Set(list.map(x => x.c.annee))].sort((a, b) => b - a);
  return years.map(y => {
    const ly = list.filter(x => x.c.annee === y);
    const mats = [...MATS, "Autres"].filter(m => ly.some(x => matOf(x.c) === m));
    return `<section class="yblock"><h2 class="ytitle">${y}</h2>${mats.map(m => `<div class="mblock"><h3 class="mtitle">${m}</h3><div class="tiles ann vault stagger">${ly.filter(x => matOf(x.c) === m).map(({ c, i }) => tile(`#c-annales-mp-${i}`, esc(c.epreuve), esc(c.titre), esc(c.filiere))).join("")}</div></div>`).join("")}</section>`;
  }).join("");
}
function bqCrumbs(c) {
  const f = filOf(c), sl = bslug(c.bank), mi = [...MATS, "Autres"].indexOf(matOf(c));
  return [["Concours", "#concours"], [FIL[f], "#concours-" + f], [c.bank, `#bq/${sl}/${f}`], [matOf(c), `#bq/${sl}/${f}/${mi}`], [String(c.annee), `#bq/${sl}/${f}/${mi}/${c.annee}`]];
}
function banquePage(slug, f, mi, year) {
  const b = BANKS.find(x => bslug(x.name) === slug); if (!b) return notFound();
  if (f) curFil = f;
  const fk = f || "tous";
  const list = sujetsOf(b.name, f);
  const ALLM = [...MATS, "Autres"];
  const m = mi == null ? null : ALLM[mi];
  const base = `#bq/${slug}/${fk}`;
  const crumb = [["Concours", "#concours"]].concat(f ? [[FIL[f], "#concours-" + f]] : []).concat([[b.name, m ? base : null]]).concat(m ? [[m, year ? `${base}/${mi}` : null]] : []).concat(year ? [[String(year)]] : []).map(x => x[1] ? x : [x[0]]);
  const ph = phead({ crumb, title: esc(b.name), meta: `<span class="tag y">Écrits</span>${f ? `<span class="tag">Filière ${FIL[f]}</span>` : ""}${m ? `<span class="tag">${m}</span>` : ""}${year ? `<span class="tag">${year}</span>` : ""}` });
  let body;
  if (!list.length) body = empty("Bientôt", f ? ` Pas encore de sujet ${b.name} corrigé en ${FIL[f]}.` : "");
  else if (!m) {
    const mats = ALLM.map((x, k) => ({ x, k, n: list.filter(e => matOf(e.c) === x).length })).filter(o => o.n);
    body = `<h2 class="steph">Choisis la matière</h2><div class="tiles vault stagger">${mats.map(o => tile(`${base}/${o.k}`, "Matière", o.x, plural(o.n, "sujet"))).join("")}</div>`;
  } else {
    const lm = list.filter(e => matOf(e.c) === m);
    if (!year) {
      const years = [...new Set(lm.map(e => e.c.annee))].sort((a, c) => c - a);
      body = `<h2 class="steph">${m} : choisis l'année</h2><div class="tiles vault stagger">${years.map(y => tile(`${base}/${mi}/${y}`, "Session", String(y), plural(lm.filter(e => e.c.annee === y).length, "sujet"))).join("")}</div>`;
    } else {
      const ly = lm.filter(e => e.c.annee === year);
      body = ly.length ? `<h2 class="steph">${m} · ${year}</h2><div class="tiles ann vault stagger">${ly.map(({ c, i }) => tile(`#c-annales-mp-${i}`, esc(c.epreuve), esc(c.titre), esc(c.filiere))).join("")}</div>` : empty("Aucun sujet", "");
    }
  }
  return ph + `<div class="wrap layout full"><div>
    ${m ? "" : `<p class="lead">${b.desc} Chaque sujet est donné tel qu'il a été posé, avec un corrigé question par question.</p>`}
    ${f ? "" : `<div class="filters" role="group" aria-label="Filière">${Object.keys(FIL).map(k => `<a class="chip" href="#banque-${slug}-${k}">${FIL[k]}</a>`).join("")}</div>`}
    ${body}
  </div></div>`;
}
function sujetPage(i) {
  const c = ANN()[i]; if (!c) return notFound();
  const parts = exOf("annales", "mp", i);
  return phead({ crumb: bqCrumbs(c).concat([[c.epreuve]]), title: esc(c.titre), meta: `<span class="tag y">${esc(c.bank)} ${c.annee}</span><span class="tag">${esc(c.epreuve)} · ${esc(c.filiere)}</span><span class="tag">${esc(c.duree)}</span>` }) + `<div class="wrap layout full"><div>
    <p class="sj-intro">${c.intro}</p>
    <h2 class="sj-h">Le corrigé, partie par partie</h2>
    <p class="lead">Une page par partie, avec l'énoncé à côté du corrigé.</p>
    <div class="tiles ann vault stagger">${parts.map(e => tile(`#e-${e.id}`, (/^(Exercice|Partie|Problème)/.test(e.part) ? "" : "Partie ") + esc(e.part.replace(/\s*\(.*\)/, "")), ttl(e), doneN(e.id) ? `<span class="tdone">${ICHECK}Fait</span>` : "", doneN(e.id) ? "is-done" : "")).join("")}</div>
    ${c.pdf ? `<details class="sj-pdf"><summary><span>Voir le sujet original</span><small>PDF · ${esc(c.bank)} ${c.annee}</small></summary><div data-pdf="${c.pdf}" data-title="${esc(c.bank)} ${c.annee} · ${esc(c.epreuve)} ${esc(c.filiere)}" data-lazy="1"></div><a class="btn btn-ghost btn-sm" href="pdf/${c.pdf}.pdf" download>${I.dl}Télécharger le sujet</a></details>` : ""}
  </div></div>`;
}

function oralPage() {
  const om = sid("oraux"), nEx = EXERCISES.filter(e => e.subj === "oraux").length;
  return phead({ crumb: [["Oraux"]], title: "Réussir les oraux", photo: "oral" }) + `<div class="wrap layout full">
    <article class="prose">
    <div class="cards">
      <a class="card card-link" href="#oraux-maths"><h3>Mathématiques</h3><p>Un ou deux exercices au tableau, avec des indications si tu bloques.</p><span class="card-go">${om.years.mp.length} chapitres · ${plural(nEx, "exercice")} corrigés ${I.arrow}</span></a>
      <div class="card"><h3>Physique</h3><p>Souvent un problème ouvert : modéliser, estimer, discuter.</p></div>
      <div class="card"><h3>Avec Python</h3><p>Certaines épreuves demandent de programmer en direct.</p></div>
      <div class="card"><h3>TIPE</h3><p>Présenter ton travail, puis répondre au jury sur ta démarche.</p></div>
    </div>
    <h2>Ce qui fait la différence</h2>
    <ul><li>Réfléchir à voix haute, même quand tu hésites.</li><li>Tester une idée sur un cas simple.</li><li>Écouter : une indication est une aide, pas un piège.</li><li>Pour CCINP, travailler la banque officielle d'exercices d'oral.</li></ul>
  </article></div>`;
}

function orauxMathsPage() {
  const s = sid("oraux"), list = s.years.mp;
  return phead({ crumb: [["Oraux", "#oral"], ["Mathématiques"]], title: "Oraux de mathématiques", meta: `<span class="tag y">${list.length} chapitres</span>`, photo: "oral" })
  + `<div class="wrap layout full"><div>
    <p class="lead">Des exercices tombés à l'oral, rangés par chapitre puis par concours.</p>
    <div class="tiles oral vault stagger">${list.map((c, i) => { const ks = (c.cc || []).filter(k => EXERCISES.some(e => e.subj === "oraux" && e.chap === i && e.concours === k)); return tile(`#c-oraux-mp-${i}`, pad(i + 1), esc(c.t), ks.map(k => `<i class="ccb" data-cc="${k}">${esc(CC_SHORT[k] || CONC[k])}</i>`).join("")); }).join("")}</div>
  </div></div>`;
}

function xparts(s) {
  const out = [];
  s.years.mp.forEach((c, i) => { const name = c.p || s.part; let g = out.find(x => x.name === name); if (!g) out.push(g = { name, items: [] }); g.items.push({ c, i }); });
  return out;
}
function xpos(s, i) { const P = xparts(s); for (let g = 0; g < P.length; g++) { const j = P[g].items.findIndex(x => x.i === i); if (j >= 0) return { g, j, name: P[g].name }; } return { g: 0, j: i, name: s.part }; }
function commandoPage() {
  const s = sid("xens"), list = s.years.mp;
  const next = ["Fonctions d'une variable réelle", "Suites et séries", "Équations différentielles"];
  return `
  <section class="hero"><div class="photo">${img("commando", "100vw", true)}</div><div class="wrap">
    <h1><span class="line"><span>Formation</span></span><span class="line"><span><span class="mark">commando</span></span></span><span class="line"><span>X-ENS.</span></span></h1>
    <p>Les exercices les plus durs du programme, corrigés sans sauter une seule étape.</p>
    <div class="ctas"><a class="btn btn-yellow" href="#c-xens-mp-0">Commencer l'entraînement ${I.arrow}</a><a class="btn btn-glass" href="#banque-x-ens">Les sujets X-ENS corrigés</a></div>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="cmd-rules stagger">
      <div><b>★★★★★</b><span>Tous les exercices sont au niveau des concours X-ENS.</span></div>
      <div><b>Aucune étape sautée</b><span>Chaque ligne du corrigé est justifiée, avec le rappel de cours utilisé.</span></div>
      <div><b>Le cours d'abord</b><span>Chaque sous-chapitre commence par un résumé et ses formules à connaître.</span></div>
    </div>
  </div></section>
  <section class="sec"><div class="wrap">
    ${xparts(s).map((g, gi) => `<div class="sec-title"${gi ? ' style="margin-top:40px"' : ""}><h2>Chapitre ${gi + 1} · ${esc(g.name)}</h2></div>
    <div class="tiles vault stagger">${g.items.map(({ c, i }, j) => { const n = exOf("xens", "mp", i).filter(e => !e.plus).length, pl = new Set(exOf("xens", "mp", i).filter(e => e.plus).map(e => e.plus)).size, r = PDFS.has(`resume-xens-mp-${pad(i + 1)}`); const foot = [r ? "Résumé" : "", n ? `${n} exos` : "", pl ? plural(pl, "sujet") : ""].filter(Boolean).join(" · "); return foot ? tile(`#c-xens-mp-${i}`, `${gi + 1}.${j + 1}`, esc(c.t), foot) : ""; }).join("")}</div>${(() => { const off = g.items.filter(({ i }) => !exOf("xens", "mp", i).length && !PDFS.has(`resume-xens-mp-${pad(i + 1)}`)).map(({ c }) => esc(c.t)); return off.length ? `<p class="soon-line">En préparation : ${off.join(", ")}</p>` : ""; })()}`).join("")}
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-title"><h2>La suite du programme</h2></div>
    <ul class="roadmap">${next.map((t, k) => `<li>Chapitre ${k + 1 + xparts(s).length} · ${t}</li>`).join("")}</ul>
  </div></section>`;
}

function notFound() {
  return phead({ crumb: [["Page introuvable"]], title: "Cette page n'existe pas" }) + `<div class="wrap layout full"><div><a class="btn btn-yellow" href="#accueil">Retour à l'accueil</a></div></div>`;
}

/* ---------- Rappels de cours ---------- */
function rchip(id, ex) {
  const r = RAPPELS[id]; if (!r) return "";
  return `<button type="button" class="rchip" data-r="${id}"${ex && ex.id ? ` data-ex="${ex.id}"` : ""}>${esc(r.t)}</button>`;
}
/* Volets empilés : ouvrir une notion depuis un volet garde le premier derrière ; fermer le second fait retomber sur le premier. */
const drawerStack = [];
function mountDrawer(dr) {
  const top = drawerStack[drawerStack.length - 1];
  let scrim;
  if (top) {
    scrim = top.scrim;
    top.dr.removeAttribute("id"); top.dr.classList.remove("back"); top.dr.classList.add("under"); top.dr.inert = true; top.dr.setAttribute("aria-hidden", "true");
    $$("[id]", top.dr).forEach(x => { x.dataset.oid = x.id; x.removeAttribute("id"); });
    if (drawerStack.length >= 6) drawerStack.shift().dr.remove();
  } else {
    scrim = document.createElement("div"); scrim.className = "scrim"; scrim.id = "scrim";
    scrim.addEventListener("click", () => popDrawer());
    document.body.append(scrim);
  }
  dr.id = "drawer";
  drawerStack.push({ dr, scrim, ret: document.activeElement });
  document.body.append(dr);
  $(".close", dr).addEventListener("click", () => popDrawer());
  $(".close", dr).focus();
}
function popDrawer() {
  const top = drawerStack.pop(); if (!top) return;
  top.dr.remove();
  const prev = drawerStack[drawerStack.length - 1];
  if (prev) {
    prev.dr.classList.replace("under", "back"); prev.dr.inert = false; prev.dr.removeAttribute("aria-hidden"); prev.dr.id = "drawer";
    $$("[data-oid]", prev.dr).forEach(x => { x.id = x.dataset.oid; delete x.dataset.oid; });
  } else top.scrim.remove();
  if (top.ret && top.ret.isConnected && top.ret.focus) top.ret.focus();
}
function closeRappel(silent) {
  const first = drawerStack[0];
  while (drawerStack.length) drawerStack.pop().dr.remove();
  const s = $("#scrim"); if (s) s.remove();
  if (!silent && first && first.ret && first.ret.isConnected && first.ret.focus) first.ret.focus();
}
/* Dans le volet, on encadre l'énoncé précis qui sert ici (un rappel peut dire plusieurs choses). */
const TOK_SKIP = new Set("left right big Big bigg Bigg quad qquad text mathrm mathbf mathbb mathcal operatorname frac dfrac tfrac displaystyle begin end aligned cases pmatrix bmatrix limits nolimits cdot cdots dots ldots lt gt le ge leqslant geqslant leq geq iff Rightarrow Longrightarrow Leftrightarrow Longleftrightarrow to mapsto in notin forall exists wedge vee neq overline underline widehat hat vec tilde boxed qquad xrightarrow longrightarrow sim alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta lambda mu nu xi pi rho sigma tau varphi phi psi omega Omega Lambda Gamma Delta Sigma Phi Psi ell infty prime neg setminus emptyset quad mathfrak N R C K".split(" "));
const STOP = new Set("dans avec pour sont tout tous toute toutes alors donc cette leur leurs être fait même comme entre aussi ainsi deux trois quand chaque elle elles ceci cela soit sous vers mais plus moins très bien cas fois tel telle tels telles ici puis étape montre montrer donne déduit déduire donc avoir sinon encore".split(" "));
const SYN = { noyau: "ker", noyaux: "ker", image: "Im", images: "Im", rang: "rg", dimens: "dim", trace: "tr", determ: "det", inclus: "subset", contie: "subset", somme: "sum", integr: "int", limite: "lim", union: "cup", inters: "cap", transp: "top", expone: "exp", propre: "Sp", spectr: "Sp", orthog: "perp", conjug: "overline", polyno: "X" };
function toks(s) {
  const out = new Set(); s = String(s || "");
  s.replace(/\\(?:operatorname|mathrm)\{([^}]*)\}/g, (m, x) => { out.add(x.trim()); return " "; })
   .replace(/\\(mathcal|mathbb)\{?\s*([A-Za-z])\}?/g, (m, k, x) => { out.add(k.slice(-2) + x); return " "; })
   .replace(/\\([a-zA-Z]+)/g, (m, x) => { if (!TOK_SKIP.has(x)) out.add(x === "subseteq" ? "subset" : x); return " "; })
   .replace(/<[^>]+>/g, " ")
   .replace(/[\p{L}]{4,}/gu, w => { const st = w.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").slice(0, 6); if (!STOP.has(w.toLowerCase())) { out.add("w:" + st); if (SYN[st]) out.add(SYN[st]); } return " "; });
  return out;
}
function texOf(el) {
  if (!el) return "";
  const map = new Map();
  try { for (const it of MathJax.startup.document.math) map.set(it.typesetRoot, it.math); } catch (e) {}
  let s = "";
  const rec = n => {
    if (n.nodeType === 3) { s += n.data; return; }
    if (n.nodeType !== 1) return;
    if (n.tagName === "MJX-CONTAINER") { s += " " + (map.get(n) || "") + " "; return; }
    if (n.matches("button, .here, .here-quote")) return;
    for (const c of n.childNodes) rec(c);
  };
  rec(el); return s;
}
function topQquad(f) {
  const out = []; let d = 0, a = 0;
  for (let i = 0; i < f.length; i++) {
    const c = f[i];
    if (c === "\\") {
      const r = f.slice(i);
      if (/^\\(?:left|begin)(?![a-zA-Z])/.test(r)) d++;
      else if (/^\\(?:right|end)(?![a-zA-Z])/.test(r)) d = Math.max(0, d - 1);
      else if (!d && /^\\qquad(?![a-zA-Z])/.test(r)) { out.push(f.slice(a, i)); a = i + 6; i += 5; continue; }
      const m = r.match(/^\\[a-zA-Z]+|^\\./); i += m ? m[0].length - 1 : 0; continue;
    }
    if (c === "{") d++; else if (c === "}") d = Math.max(0, d - 1);
  }
  out.push(f.slice(a)); return out.map(x => x.trim()).filter(Boolean);
}
function markUsed(dr, ctx, own) {
  const body = dr && $(".body", dr); if (!body || !ctx) return;
  const C = toks(ctx); if (!C.size) return;
  const O = toks(own || "");
  /* les formules centrées deviennent des blocs repérables */
  const tw = document.createTreeWalker(body, NodeFilter.SHOW_TEXT); const tn = [];
  while (tw.nextNode()) if (tw.currentNode.data.includes("$$")) tn.push(tw.currentNode);
  for (const t of tn) {
    const parts = t.data.split(/(\$\$[\s\S]*?\$\$)/); if (parts.length < 2) continue;
    const fr = document.createDocumentFragment();
    parts.forEach(x => { if (!x) return; if (/^\$\$[\s\S]*\$\$$/.test(x)) { const sp = document.createElement("span"); sp.className = "fm"; sp.textContent = x; fr.appendChild(sp); } else fr.appendChild(document.createTextNode(x)); });
    t.replaceWith(fr);
  }
  /* les exemples et mises en garde ne sont pas « ce qui sert » */
  let skipSec = false;
  for (const el of [...body.children]) { if (el.tagName === "H5") skipSec = /exemple|attention|contre/i.test(el.textContent); else if (skipSec) el.dataset.nouse = "1"; }
  const cands = [];
  $$(".sbox", body).forEach(el => cands.push({ el, t: el.textContent }));
  $$(".fm", body).forEach(el => {
    if (el.closest(".sbox, li")) return;
    const ps = topQquad(el.textContent.slice(2, -2));
    if (ps.length > 1 && !/:\s*\\(?:q?quad|[ ,;])/.test(ps[0])) ps.forEach((t, k) => cands.push({ el, t, k, ps })); else cands.push({ el, t: el.textContent });
  });
  $$("li", body).forEach(el => { if (!$("li", el) && !el.closest(".sbox")) cands.push({ el, t: el.textContent }); });
  $$("p", body).forEach(el => { if (!$(".fm", el) && !el.closest(".sbox, li") && el.textContent.trim().length > 12) cands.push({ el, t: el.textContent }); });
  for (let i = cands.length - 1; i >= 0; i--) if (cands[i].el.closest("[data-nouse]") || /:\s*$/.test(cands[i].el.tagName === "P" ? cands[i].t : "")) cands.splice(i, 1);
  if (cands.length < 2) return;
  cands.forEach(c => c.T = toks(c.t));
  const df = new Map(); cands.forEach(c => c.T.forEach(t => df.set(t, (df.get(t) || 0) + 1)));
  const n = cands.length;
  cands.forEach(c => { c.s = 0; c.sp = 0; c.T.forEach(t => { if (!C.has(t)) return; const own = O.has(t); c.s += Math.log((n + 1) / df.get(t)) * (own ? .4 : t.startsWith("w:") ? 1 : 1.4); if (!own && df.get(t) === 1) c.sp++; }); });
  const order = [...cands].sort((x, y) => y.s - x.s);
  const best = order[0], second = order.find(c => c.el !== best.el || c.k !== best.k);
  if (best.s < 2 || !best.sp) return;
  const tie = second && second.s * 1.3 > best.s;
  if (tie && !(best.ps && second.el === best.el)) return;
  let target = best.el;
  if (best.ps && !tie) {
    const fr = document.createDocumentFragment(); let hit = null;
    best.ps.forEach((t, k) => { const sp = document.createElement("span"); sp.className = "fm"; sp.textContent = `$$${t}$$`; fr.appendChild(sp); if (k === best.k) hit = sp; });
    best.el.replaceWith(fr); target = hit;
  }
  target.classList.add("used");
}
function revealUsed(dr) {
  const u = dr && $(".used", dr); if (!u) return;
  const r = u.getBoundingClientRect(), d = dr.getBoundingClientRect();
  if (r.bottom > d.bottom - 24 || r.top < d.top) dr.scrollTo({ top: dr.scrollTop + r.top - d.top - 120, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}
function openRappel(id, exId, src) {
  const r = RAPPELS[id]; if (!r) return;
  const ex = exId && EXERCISES.find(x => x.id === exId);
  const here = ex && ex.ctx && ex.ctx[id];
  const links = stepLinks(ex, st => (st.rappels || []).includes(id), "Utilisé dans le corrigé");
  const dr = document.createElement("aside"); dr.className = "drawer"; dr.setAttribute("role", "dialog"); dr.setAttribute("aria-modal", "true"); dr.setAttribute("aria-labelledby", "dr-t");
  dr.innerHTML = `<button class="iconbtn close" type="button" aria-label="Fermer le rappel">${I.close}</button><span class="kicker">Rappel de cours</span><h3 id="dr-t">${esc(r.t)}</h3><div class="body course">${annotate(r.b, ex || null, null, true)}</div>${here || links ? `<div class="here"><h4>Dans cet exercice</h4>${here ? `<div class="body course">${annotate(here, ex, null, true)}</div>` : ""}<div class="hq-slot"></div>${links}</div>` : ""}`;
  const stp = src && !src.closest(".drawer") && src.closest(".step");
  const res = stp && ($$(".prose .sbox", stp)[0] || $(".prose > p", stp) || $(".prose", stp));
  const slot = $(".hq-slot", dr);
  if (slot) { if (res) { const w = document.createElement("div"); w.innerHTML = `<p class="here-lab">À cette étape</p>`; const q = document.createElement("div"); q.className = "here-quote"; const c = res.cloneNode(true); c.querySelectorAll("button, figure").forEach(x => x.remove()); q.appendChild(c); w.appendChild(q); slot.replaceWith(w); } else slot.remove(); }
  /* ce qui sert vraiment : le lien écrit dans l'exercice, sinon les étapes qui citent ce rappel */
  let ctx = here || "";
  if (ex && ex.steps) {
    const sts = ex.steps.filter(st => (st.rappels || []).includes(id));
    const cur = stp && player && ex.steps[player.i !== undefined ? player.i : -1];
    ctx += " " + (cur && sts.includes(cur) ? cur.b : sts.map(st => st.b).join(" "));
  }
  if (!ctx.trim() && src && src.closest(".drawer")) ctx = texOf(src.closest("li, p, .sbox, .fm") || src.parentElement);
  markUsed(dr, ctx, r.t);
  wireHere(dr);
  mountDrawer(dr);
  const p = typeset(dr); (p || Promise.resolve()).then(() => revealUsed(dr));
}
document.addEventListener("click", e => {
  const b = e.target.closest(".rchip"); if (!b) return;
  openRappel(b.dataset.r, b.dataset.ex, b);
});

/* ---------- Notions de cours soulignées en bleu ---------- */
const NOTIONS = window.LEMME.NOTIONS || {};
const NOTION_LIST = Object.entries(NOTIONS).sort((a, b) => (b[1].p.includes(" ") ? 1 : 0) - (a[1].p.includes(" ") ? 1 : 0)).map(([id, n]) => { try { const src = "(?<![\\p{L}\\p{N}-])(?:" + n.p + ")(?![\\p{L}\\p{N}-])"; return { id, re: new RegExp(src, "iu"), g: new RegExp(src, "giu") }; } catch (e) { return null; } }).filter(Boolean);
/* Le surligneur couvre l'expression entière : « théorème du rang », « caractérisation séquentielle des fermés », « dimension finie ».
   À chaque endroit, la correspondance la plus longue l'emporte, et un groupe de mots déjà pris n'est jamais redécoupé par une notion plus courte. */
const NOTION_PREFIX = /(?:^|[\s(«])((?:(?:le|la|les|du|un|une|au|par|d['’]après)\s+)?(?:théorèmes?|lemmes?|formules?|inégalités?|critères?|règles?|caractérisations?|propriétés?|principes?)(?:\s+[\p{L}-]+)?\s+(?:du|de\s+la|des|de\s+l['’]|d['’]|de)\s*)$/iu;
const NOTION_ARTICLE = /^(?:le|la|les|du|un|une|au|par|d['’]après)\s+/i;
function annotateText(txt, used, skip) {
  const cand = [];
  for (const n of NOTION_LIST) {
    if (skip.has(n.id)) continue;
    const re = n.g; re.lastIndex = 0; let m;
    while ((m = re.exec(txt))) { if (!m[0]) { re.lastIndex++; continue; } cand.push({ a: m.index, b: m.index + m[0].length, id: n.id }); }
  }
  if (!cand.length) return txt;
  cand.sort((x, y) => (y.b - y.a) - (x.b - x.a) || x.a - y.a);
  const taken = [];
  for (const c of cand) if (!taken.some(t => c.a < t.b && t.a < c.b)) taken.push(c);
  taken.sort((x, y) => x.a - y.a);
  let out = "", pos = 0;
  for (const c of taken) {
    if (used.has(c.id)) continue;
    let a = c.a;
    const pm = txt.slice(pos, a).match(NOTION_PREFIX);
    if (pm) a -= pm[1].replace(NOTION_ARTICLE, "").length;
    out += txt.slice(pos, a) + `<span class="nt" data-n="${c.id}" tabindex="0" role="button">${txt.slice(a, c.b)}</span>`;
    pos = c.b; used.add(c.id);
  }
  return out + txt.slice(pos);
}
/* Aère la rédaction : dans un paragraphe ou un item, chaque phrase va sur sa propre ligne (hors formules et balises imbriquées). */
const ABBR = /(?:^|[\s(])(?:cf|p|ex|etc|resp|éq|i\.e|e\.g|c\.-à-d|Th|Prop|Déf|n°|vol|chap)\.$/i;
/* Une formule « lourde » (opérateur intégral, somme, chaîne d'égalités, ou longue) écrite en ligne passe en formule centrée : le texte et les calculs ne se mélangent plus. */
const REL = /[=<>]|\\(?:leqslant|geqslant|leq|geq|le|ge|lt|gt|sim|approx|equiv|xrightarrow|longrightarrow|to|iff|Longleftrightarrow|Rightarrow|Longrightarrow)(?![a-zA-Z])/g;
function heavy(f) {
  const g = f.replace(/\\(?:mathrm|operatorname|text|mathbb|mathcal)\{[^}]*\}/g, "x");
  const rel = (g.match(REL) || []).length;
  const big = /\\(?:int|iint|sum|prod|lim|limsup|liminf|bigcup|bigcap|max|min|sup|inf)(?![a-zA-Z])/.test(f);
  const L = h => h.replace(/\\(?:left|right|big|Big|bigg|Bigg)[lr]?/g, "").replace(/\\[,;!: ]|\\q?quad/g, "").replace(/\\[a-zA-Z]+/g, "x").replace(/[{}\s_^]/g, "").length;
  const len = L(g);
  const mat = /\\begin\{(?:p|b|v|V)?matrix\}|\\begin\{cases\}/.test(f);
  if (!rel) return (big && len > 16) || (mat && len > 8);
  if (mat) return true;
  const fr = /\\(?:frac|dfrac|tfrac|sqrt|binom|dbinom)(?![a-zA-Z])|\^\{[^}]{3,}\}/.test(f);
  if ((big && len > 10) || (fr && len > 12) || (rel >= 2 && len > 14) || len > 30) return true;
  /* une seule relation entre deux membres consistants */
  const m = g.match(REL); const k = g.indexOf(m[0]);
  return L(g.slice(0, k)) >= 8 && L(g.slice(k + m[0].length)) >= 8;
}
/* Dans les rappels et notions de cours, toute intégrale, somme, limite ou fraction consistante passe en display. */
function heavyCourse(f) {
  const n = f.replace(/\\(?:left|right|big|Big|bigg|Bigg)[lr]?/g, "").replace(/\\[,;!: ]|\\q?quad/g, "").replace(/\\[a-zA-Z]+/g, "x").replace(/[{}\s_^]/g, "").length;
  const rel = (f.match(REL) || []).length;
  if (!rel) return n > 26;
  if (/\\(?:int|iint|sum|prod|lim|bigcup|bigcap)(?![a-zA-Z])/.test(f)) return n > 6;
  if (/\\(?:frac|dfrac)(?![a-zA-Z])/.test(f)) return n > 8;
  return n > 22;
}
function promote(inner, tag, strong) {
  const parts = inner.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$|<[^>]+>)/); let depth = 0, par = 0, out = "";
  for (let k = 0; k < parts.length; k++) {
    let t = parts[k]; if (!t) continue;
    if (t[0] === "<") { if (!/^<br\b/i.test(t)) { if (/^<\//.test(t)) depth = Math.max(0, depth - 1); else if (!/\/>$/.test(t)) depth++; } out += t; continue; }
    if (t[0] !== "$") { par = Math.max(0, par + (t.match(/\(/g) || []).length - (t.match(/\)/g) || []).length); out += t; continue; }
    if (t[1] !== "$" && !depth && (!par || strong) && (heavy(t.slice(1, -1)) || (strong && heavyCourse(t.slice(1, -1))))) {
      let f = t.slice(1, -1).trim(); const nx = parts[k + 1] || ""; const m = nx.match(/^\s*([.,;:])/);
      if (m) { f += m[1] === ":" ? "\\;:" : m[1]; parts[k + 1] = nx.slice(m[0].length); }
      out += `$$${f}$$`; continue;
    }
    if (strong && t[1] !== "$" && !depth && /\\(?:int|iint|sum|prod|frac|lim)(?![a-zA-Z])/.test(t) && !/\\displaystyle/.test(t)) { out += `$\\displaystyle ${t.slice(1, -1)}$`; continue; }
    out += t;
  }
  return out;
}
/* Listes de résultats : « $$W_3 = …,$$ $$W_4 = …$$ » ou « $$W_3 = …, W_4 = …$$ » deviennent un bloc aligné, une égalité par ligne. */
const RELTOK = /^(?:=|<|>|\\(?:leqslant|geqslant|leq|geq|lt|gt|sim|approx|equiv|iff|Rightarrow|Longrightarrow|to|xrightarrow)(?![a-zA-Z]))/;
function topSplit(f) {
  const out = []; let d = 0, a = 0;
  for (let i = 0; i < f.length; i++) {
    const c = f[i];
    if (c === "\\") { if (/^\\(left|big|Big|bigg|Bigg)l?[([{|.]/.test(f.slice(i))) d++; else if (/^\\(right|big|Big|bigg|Bigg)r?[)\]}|.]/.test(f.slice(i))) d = Math.max(0, d - 1); i++; continue; }
    if ("({[".includes(c)) d++; else if (")}]".includes(c)) d = Math.max(0, d - 1);
    else if (c === "," && !d && f[i - 1] !== "\\") { out.push(f.slice(a, i)); a = i + 1; }
  }
  out.push(f.slice(a)); return out.map(x => x.trim()).filter(Boolean);
}
function alignAmp(f) {
  let d = 0;
  for (let i = 0; i < f.length; i++) {
    const c = f[i];
    if ("({[".includes(c)) d++; else if (")}]".includes(c)) d--;
    else if (!d && RELTOK.test(f.slice(i)) && !(c === "\\" && /^\\(?:left|right)/.test(f.slice(i)))) return f.slice(0, i) + "&" + f.slice(i);
    if (c === "\\") { const m = f.slice(i).match(/^\\[a-zA-Z]+/); if (m) i += m[0].length - 1; else i++; }
  }
  return "&" + f;
}
const plain = f => !/&|\\\\|\\begin|\\end/.test(f);
function listify(html) {
  html = html.replace(/\$\$([^$]+?)\$\$/g, (m, f) => {
    if (!plain(f)) return m;
    const end = (f.match(/[.,;]\s*$/) || [""])[0], body = end ? f.slice(0, -end.length) : f;
    const ps = topSplit(body);
    if (ps.length < 2 || !ps.every(x => /=|\\(?:sim|leqslant|geqslant|approx)(?![a-zA-Z])/.test(x)) || body.replace(/\\[a-zA-Z]+|[{}\s]/g, "").length < 30) return m;
    return `$$\\begin{aligned}${ps.map((x, i) => alignAmp(x) + (i < ps.length - 1 ? ",\\\\[6pt]" : end.trim())).join("")}\\end{aligned}$$`;
  });
  return html.replace(/\$\$[^$]+?\$\$(?:\s*,?\s*\$\$[^$]+?\$\$)+/g, m => {
    const fs = [...m.matchAll(/\$\$([^$]+?)\$\$/g)].map(x => x[1].trim());
    if (!fs.every(plain)) return m;
    return `$$\\begin{aligned}${fs.map((x, i) => alignAmp(x) + (i < fs.length - 1 ? "\\\\[6pt]" : "")).join("")}\\end{aligned}$$`;
  });
}
/* Rappels : « pour tout $x$, il existe $r$ tel que $P$ » devient une formule quantifiée en display. */
const QM = String.raw`(?<!\$)\$([^$<]+)\$(?!\$)`, QP = String.raw`(?:\s*([.,;]))?`;
const QA = new RegExp(String.raw`(?:pour tout|quel que soit|quels que soient)\s+` + QM + String.raw`\s*,?\s*(?:il existe|on peut trouver)\s+` + QM + String.raw`\s*,?\s*(?:tel(?:le)?s? que|avec|vérifiant|:)?\s*` + QM + QP, "gi");
const QB = new RegExp(String.raw`(s['’]il existe|il existe)\s+` + QM + String.raw`\s*,?\s*(?:tel(?:le)?s? que|avec|vérifiant)\s+` + QM + QP, "gi");
const QC = new RegExp(String.raw`(?:pour tout|quel que soit|quels que soient)\s+` + QM + String.raw`\s*,\s*` + QM + QP, "gi");
const qp = q => q ? (q === ";" ? "\\;;" : q) : "";
function quantify(h) {
  h = h.replace(QA, (m, a, b, c, q) => `$$\\forall ${a},\\ \\exists ${b},\\quad ${c}${qp(q)}$$`);
  h = h.replace(QB, (m, w, b, c, q) => `${/^s/i.test(w) ? "si " : ""}$$\\exists ${b},\\quad ${c}${qp(q)}$$`);
  h = h.replace(QC, (m, a, c, q) => (c.match(REL) || []).length || /\\(?:subset|in|notin|neq)(?![a-zA-Z])/.test(c) ? `$$\\forall ${a},\\quad ${c}${qp(q)}$$` : m);
  h = h.replace(new RegExp(QM + String.raw`\s+(?:pour tout|pour tous|quel que soit)\s+` + QM + QP, "gi"), (m, c, a, q) => (c.match(REL) || []).length || /\\(?:subset|in|notin|neq)(?![a-zA-Z])/.test(c) ? `$$\\forall ${a},\\quad ${c}${qp(q)}$$` : m);
  return h;
}
function aerateInner(inner, tag, strong) {
  inner = inner.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$|<[^>]+>)/).map(t => t && t[0] !== "$" && t[0] !== "<" ? t.replace(/ ([:;!?»])/g, "\u00a0$1").replace(/« /g, "«\u00a0") : t).join("");
  if (strong && !/<(p|div|ol|ul|li|figure|table|pre|h\d)\b/i.test(inner)) inner = quantify(inner);
  if (/<(p|div|ol|ul|li|figure|table|pre|h\d)\b/i.test(inner)) return inner;
  const bare = inner.replace(/\$\$[\s\S]*?\$\$|\$[^$]*?\$|<[^>]+>/g, "").replace(/[\s.,;:]/g, "");
  if (!(tag === "li" && bare.length < 4)) inner = listify(promote(inner, tag, strong));
  const parts = inner.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$|<[^>]+>)/);
  const cuts = []; let depth = 0, pos = 0;
  const startsSentence = rest => /^\s+(?=[A-ZÀ-ÖØ-Ý«(\[$<]|\d+\)|$)/.test(rest);
  for (let k = 0; k < parts.length; k++) {
    const t = parts[k]; if (!t) continue;
    if (t[0] === "<") {
      if (/^<br\b/i.test(t)) { pos += t.length; continue; }
      if (/^<\//.test(t)) depth = Math.max(0, depth - 1); else if (!/\/>$/.test(t)) depth++;
    } else if (t[0] === "$") {
      if (!depth && (t[1] !== "$" ? /[.!?]\s*\$$/ : /[.!?]\s*\$\$$/).test(t)) { const nx = parts[k + 1] || ""; if (nx && startsSentence(nx)) cuts.push(pos + t.length); }
    } else if (!depth) {
      const re = strong ? /(?:[.!?]\)?|\s;)(\s+)/g : /[.!?]\)?(\s+)/g; let m;
      while ((m = re.exec(t))) {
        const end = m.index + m[0].length, before = t.slice(0, m.index + 1);
        if (/\.\.$/.test(before) || ABBR.test(before)) continue;
        const after = t.slice(m.index + m[0].length - m[1].length);
        const nx = end < t.length ? after : after + (parts[k + 1] || "");
        if ((startsSentence(nx) || (strong && /;\s+$/.test(m[0]))) && (end < t.length || parts[k + 1])) cuts.push(pos + end);
      }
    }
    pos += t.length;
  }
  if (!cuts.length) return glue(inner);
  const segs = []; let a = 0;
  for (const c of cuts) { const s = inner.slice(a, c).trim(); if (s) segs.push(s); a = c; }
  const last = inner.slice(a).trim(); if (last) segs.push(last);
  return segs.length < 2 ? glue(inner) : segs.map(s => `<span class="sn">${glue(s)}</span>`).join("");
}
/* Une formule et la ponctuation qui la suit restent sur la même ligne. */
const glue = h => h.replace(/(\$\$[\s\S]*?\$\$)|\$([^$]+?)\$([.,;:!?)]+)/g, (m, d, f, q) => d ? d : `<span class="nw">$${f}$${q}</span>`);
/* « Si (i) …, (ii) …, (iii) …, alors … » devient une liste à puces. */
function enumList(html) {
  return html.replace(/<p>([\s\S]*?)<\/p>/g, (m, inner) => {
    const parts = inner.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$)/);
    const marks = []; let pos = 0;
    for (const t of parts) { if (t && t[0] !== "$") { const re = /\((i|ii|iii|iv|v|vi|[1-9])\)\s*/g; let x; while ((x = re.exec(t))) marks.push([pos + x.index, pos + x.index + x[0].length]); } pos += t.length; }
    if (marks.length < 2) return m;
    const head = inner.slice(0, marks[0][0]).trim(); let tail = "";
    if (/^\(\d/.test(inner.slice(marks[0][0])) && !/:\s*$/.test(head.replace(/<[^>]+>/g, ""))) return m;
    const items = marks.map((mk, j) => inner.slice(mk[1], j + 1 < marks.length ? marks[j + 1][0] : inner.length).trim());
    let last = items[items.length - 1];
    const sc = last.search(/[.!?]\s+(?=[A-ZÀ-ÖØ-Ý])/);
    if (sc > 0 && !/\$/.test(last.slice(sc, sc + 2))) { tail = last.slice(sc + 1).trim(); last = items[items.length - 1] = last.slice(0, sc); }
    const cut = last.search(/,?\s+(?:alors|donc)\b/);
    if (cut > 0) { const t2 = last.slice(cut).replace(/^,?\s+/, ""); tail = t2[0].toUpperCase() + t2.slice(1) + (tail ? " " + tail : ""); items[items.length - 1] = last.slice(0, cut); }
    const clean = it => it.replace(/[.;]\s*$/, "").replace(/\s*(?:,|;)?(?:\s+et)?\s*$/, "").replace(/,\s*$/, "");
    const hd = head && !/[:.]\s*$/.test(head) ? head + "\u00a0:" : head;
    return `${hd ? `<p>${hd}</p>` : ""}<ul>${items.map(it => `<li>${clean(it)} ;</li>`).join("").replace(/ ;<\/li>$/, ".</li>")}</ul>${tail ? `<p>${tail}</p>` : ""}`;
  });
}
function aerate(html, strong) {
  if (!html || html.indexOf("<") < 0) return html ? (strong ? aerate(`<p>${html}</p>`, true) : aerateInner(html)) : html;
  /* une balise <span> écrite au milieu d'une formule empêche MathJax de la lire : on la retire */
  html = html.replace(/\$\$[\s\S]*?\$\$|\$[^$]+?\$/g, m => m.includes("<span") || m.includes("</span") ? m.replace(/<\/?span[^>]*>/g, "") : m);
  if (strong) html = enumList(html);
  const res = html.replace(/<(p|li)((?:\s[^>]*)?)>([\s\S]*?)<\/\1>/g, (m, tag, attr, inner) => /class="(?:rt|here-lab)"/.test(attr) ? m : (() => { const r = aerateInner(inner, tag, strong); return tag === "li" && !attr && /^\s*(?:<span class="sn">)?\s*\$\$/.test(r) ? `<li class="lm">${r}</li>` : `<${tag}${attr}>${r}</${tag}>`; })());
  return strong ? stmtList(res) : res;
}
/* Rappels : les énoncés successifs (paragraphes, phrases) deviennent une liste à puces. */
function stmtList(h) {
  const txt = x => x.replace(/<[^>]+>/g, "").trim();
  let n = 0;
  const out = h.replace(/<p>([\s\S]*?)<\/p>/g, (m, inner, off, str) => {
    if (/^\s*<(?:div|ul|ol|figure|table)\b/.test(str.slice(off + m.length)) || /:\s*$/.test(txt(inner)) || /\\;?:\$\$\s*$/.test(inner.trim())) return m;
    const segs = inner.includes('<span class="sn">') ? [...inner.matchAll(/<span class="sn">([\s\S]*?)<\/span>(?=<span class="sn">|$)/g)].map(x => x[1]) : [inner];
    n += segs.length;
    return `<ul class="st">${segs.map(x => `<li${/^\s*\$\$/.test(x) ? ' class="lm"' : ""}>${x}</li>`).join("")}</ul>`;
  }).replace(/<\/ul><ul class="st">/g, "");
  return n >= 2 ? out : h;
}
window.__lemmeAerate = aerate; window.__lemmeTexOf = el => texOf(el);
/* Souligne la première apparition de chaque notion dans un bloc HTML, hors formules, code et mots déjà expliqués. */
function annotate(html, ex, used, strong) {
  html = aerate(html, strong);
  if (!html || !NOTION_LIST.length) return html || "";
  used = used || new Set();
  const skip = new Set((ex && ex.noNotions) || []);
  /* Les notions de physique (d: "phys") ne servent qu'en physique, et inversement. */
  const phys = !!ex && ex.subj === "physique";
  for (const id in NOTIONS) if ((NOTIONS[id].d === "phys") !== phys) skip.add(id);
  const parts = html.split(/(\$\$[\s\S]*?\$\$|\$[^$]*?\$|<[^>]+>)/);
  let block = 0, out = "";
  for (const part of parts) {
    if (!part) continue;
    if (part[0] === "<") {
      const tag = part.toLowerCase();
      if (/^<(pre|code|svg|figure)\b/.test(tag) || /^<span\b[^>]*data-[kn]=/.test(tag)) block++;
      else if (block && /^<\/(pre|code|span|svg|figure)>/.test(tag)) block--;
      else if (block && /^<span\b/.test(tag)) block++;
      out += part;
    } else if (part[0] === "$" || block) out += part;
    else out += annotateText(part, used, skip);
  }
  return out;
}
/* Lien avec l'exercice : la phrase où le mot apparaît, et les étapes qui l'utilisent */
const curEx = () => { const m = location.hash.match(/^#e-([a-z0-9-]+)$/); return m ? EXERCISES.find(x => x.id === m[1]) : null; };
const plainTxt = h => String(h || "").replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ");
function stepLinks(ex, pred, label) {
  if (!ex || !ex.steps) return "";
  const ks = ex.steps.map((st, k) => pred(st) ? k : -1).filter(k => k >= 0).slice(0, 6);
  if (!ks.length) return "";
  return `<div class="here-steps"><h4>${label}</h4>${ks.map(k => { const st = ex.steps[k]; const pos = ex.qnav ? qpos(ex, k) : null; return `<button type="button" class="here-go" data-go-step="${k}">${st.q ? `Q${st.q}` : `Étape ${k + 1}`}${pos && pos[1] > 1 ? ` · étape ${pos[0]}` : ""} — ${stt(st.t)}</button>`; }).join("")}</div>`;
}
function excerpt(src) {
  if (!src || src.closest(".drawer")) return null;
  const blk = src.closest("li, p, td, .sbox, .decode > div") ; if (!blk) return null;
  const c = blk.cloneNode(true);
  c.querySelectorAll("button, .labo-btn, figure").forEach(x => x.remove());
  const i = [...blk.querySelectorAll("[data-n], [data-k]")].indexOf(src);
  const twin = i >= 0 ? c.querySelectorAll("[data-n], [data-k]")[i] : null; if (twin) twin.classList.add("here-word");
  const w = document.createElement("div"); w.className = "here-quote"; w.appendChild(c.tagName === "LI" ? Object.assign(document.createElement("div"), { innerHTML: c.innerHTML }) : c);
  return w;
}
function wireHere(dr) {
  $$("[data-go-step]", dr).forEach(b => b.addEventListener("click", () => { const k = +b.dataset.goStep; closeRappel(true); if (player && player.go) player.go(k); }));
}
function openNotion(id, src) {
  const n = NOTIONS[id]; if (!n) return;
  closeTip();
  const ex = curEx();
  const dr = document.createElement("aside"); dr.className = "drawer"; dr.setAttribute("role", "dialog"); dr.setAttribute("aria-modal", "true"); dr.setAttribute("aria-labelledby", "dr-t");
  dr.innerHTML = `<button class="iconbtn close" type="button" aria-label="Fermer la notion">${I.close}</button><span class="kicker nt-kicker">Notion de cours</span><h3 id="dr-t">${esc(n.t)}</h3><div class="body notion-body course">${annotate(n.b, ex, new Set([id]), true)}</div>`;
  /* contexte : la phrase où le mot est souligné, et la formule qui la suit */
  if (src && src.closest) {
    const blk = src.closest("li, p, td, .sbox, .fm") || src.parentElement;
    let ctx = texOf(blk);
    let nx = blk && blk.nextElementSibling;
    if (nx && !/^(H\d|DETAILS)$/.test(nx.tagName)) ctx += " " + texOf(nx);
    const sn = src.closest(".sn"); if (sn) ctx = texOf(sn) + " " + texOf(sn.nextElementSibling) + " " + ctx;
    markUsed(dr, ctx, n.t + " " + src.textContent);
  }
  mountDrawer(dr);
  const p = typeset(dr); (p || Promise.resolve()).then(() => revealUsed(dr));
}
document.addEventListener("click", e => { const n = e.target.closest("[data-n]"); if (n) { e.stopPropagation(); openNotion(n.dataset.n, n); } });
document.addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches("[data-n]")) { e.preventDefault(); openNotion(e.target.dataset.n); } });

/* ---------- Infobulles de l'énoncé ---------- */
let tipFor = null;
function closeTip() { const t = $(".tip"); if (t) t.remove(); if (tipFor) tipFor.classList.remove("open"); tipFor = null; }
function openTip(el, html) {
  closeTip();
  const t = document.createElement("div"); t.className = "tip"; t.setAttribute("role", "tooltip"); t.innerHTML = html;
  document.body.appendChild(t);
  const place = () => {
    if (!t.isConnected) return;
    const r = el.getBoundingClientRect(), w = t.offsetWidth, h = t.offsetHeight;
    const left = Math.max(16, Math.min(r.left + scrollX, scrollX + innerWidth - w - 16));
    const below = r.bottom + 10 + h <= innerHeight - 8 || r.top - 10 - h < 72;
    t.classList.toggle("up", !below);
    t.style.left = left + "px"; t.style.top = (below ? r.bottom + scrollY + 10 : r.top + scrollY - 10 - h) + "px";
    t.style.setProperty("--ax", Math.max(14, Math.min(w - 26, r.left + scrollX - left + r.width / 2 - 6)) + "px");
  };
  place();
  el.classList.add("open"); tipFor = el;
  const p = typeset(t); if (p) p.then(place);
}

/* Mots surlignés (énoncé et corrigé) : un clic affiche leur explication */
function bindKeys(root, ex) {
  if (!root) return;
  $$("[data-k]", root).forEach(k => {
    k.setAttribute("tabindex", "0"); k.setAttribute("role", "button");
    const html = (ex.decode && ex.decode.cles && ex.decode.cles[k.dataset.k]) || "";
    const toggle = ev => { ev.stopPropagation(); if (tipFor === k) closeTip(); else openTip(k, html); };
    k.addEventListener("click", toggle);
    k.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(ev); } });
  });
}

/* Renvois à l'énoncé (vert) : un clic montre la donnée dans l'énoncé */
function srcTarget(v, root) {
  const box = root || $(".side-en") || $(".enonce");
  if (!box) return null;
  if (/^q\d+$/.test(v)) {
    const q = +v.slice(1);
    return $$(".enonce ol > li", box).find(li => { const ol = li.parentElement; return (ol.hasAttribute("start") ? +ol.getAttribute("start") : 1) + [...ol.children].indexOf(li) === q && ol.closest(".enonce") === li.closest(".enonce") && !li.parentElement.closest("li"); }) || null;
  }
  return $(`[data-def="${v}"]`, box) || $(`.enonce [data-k="${v}"]`, box);
}
function bindSrc(root) {
  $$("[data-src]", root).forEach(k => {
    if (k.dataset.bound) return; k.dataset.bound = "1";
    k.setAttribute("tabindex", "0"); k.setAttribute("role", "button");
    k.setAttribute("title", "Donné dans l'énoncé : cliquer pour le voir");
    const go = ev => {
      ev.stopPropagation(); closeTip();
      const big = k.closest(".bigread");
      const t = srcTarget(k.dataset.src, big || null);
      if (!t) return;
      const rm = matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      const box = t.closest(".side-en");
      if (box && box.scrollHeight > box.clientHeight) { const y = t.getBoundingClientRect().top - box.getBoundingClientRect().top + box.scrollTop; box.scrollTo({ top: Math.max(0, y - 90), behavior: rm }); }
      else t.scrollIntoView({ behavior: rm, block: "center" });
      $$(".src-flash").forEach(x => x.classList.remove("src-flash"));
      void t.offsetWidth; t.classList.add("src-flash");
      setTimeout(() => t.classList.remove("src-flash"), 2600);
    };
    k.addEventListener("click", go);
    k.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); go(ev); } });
  });
}

/* Rédaction complète d'un corrigé, et sa vue en grand */
function redaction(e) {
  if (e.qnav) return e.steps.map((st, k) => `${k === 0 || e.steps[k - 1].q !== st.q ? `<h3 class="rq">Question ${st.q}</h3>` : ""}<p class="rt"><b>Étape ${qpos(e, k)[0]} · ${stt(st.t)}</b></p>${annotate(st.b, e)}`).join("");
  return e.steps.map((st, k) => `<p class="rt"><b>${/^\d+[a-z]?\)/.test(st.t) ? "" : k + 1 + ". "}${stt(st.t)}</b></p>${annotate(st.b, e)}`).join("");
}
function qpos(e, k) { const q = e.steps[k].q, same = e.steps.map((st, j) => [st, j]).filter(x => x[0].q === q); return [same.findIndex(x => x[1] === k) + 1, same.length]; }
let bigReturn = null;
function openBig(e) {
  closeBig(true); closeTip();
  bigReturn = document.activeElement;
  const ov = document.createElement("div"); ov.className = "bigread"; ov.id = "bigread"; ov.setAttribute("role", "dialog"); ov.setAttribute("aria-modal", "true"); ov.setAttribute("aria-labelledby", "big-t");
  ov.innerHTML = `<div class="big-bar"><span id="big-t">${esc(e.title)}</span>${PDFS.has("corrige-" + e.id) ? `<a class="btn btn-ghost btn-sm" href="pdf/corrige-${e.id}.pdf" download>${I.dl} PDF</a>` : ""}<button class="iconbtn" type="button" data-close aria-label="Fermer">${I.close}</button></div>
    <div class="big-body"><div class="big-col prose enonce"><h2>Énoncé</h2>${annotate(e.enonce, e)}<h2>Corrigé</h2>${redaction(e)}<div class="bilan" style="margin-top:28px"><div class="trap"><h4>Le piège</h4>${annotate(e.piege, e)}</div><div class="meth"><h4>La méthode</h4>${annotate(e.methode, e)}</div></div></div></div>`;
  document.body.appendChild(ov); document.body.style.overflow = "hidden";
  $("[data-close]", ov).addEventListener("click", () => closeBig());
  $("[data-close]", ov).focus();
  bindKeys(ov, e); bindSrc(ov); typeset(ov);
}
function closeBig(silent) {
  const ov = $("#bigread"); if (!ov) return;
  ov.remove(); document.body.style.overflow = ""; closeTip();
  if (!silent && bigReturn && bigReturn.focus) bigReturn.focus();
}

/* ---------- Corrigé pas à pas ---------- */
/* Numéro de la question traitée par une étape : champ q, sinon titre « 2) … », « 1a) … », « Q3 … », sinon celui de l'étape précédente. */
function stepQ(e, i) {
  for (let k = i; k >= 0; k--) {
    const st = e.steps[k]; if (st.q) return +st.q || 0;
    const m = String(st.t || "").match(/^\s*(?:Q|Question\s*)?(\d+)\s*[a-z]?\s*[).·:]/i); if (m) return +m[1];
  }
  return 0;
}
let player = null;
function mountPlayer(e, host) {
  const n = e.steps.length;
  const all = [...new Set(e.steps.flatMap(s => s.rappels || []))];
  const state = { i: -1 };
  function intro() { show(0, 0, true); }
  function show(i, dir, quiet) { if (quiet) return showNow(i, dir, quiet); smooth(() => showNow(i, dir, quiet)); }
  function showNow(i, dir, quiet) {
    state.i = Math.max(0, Math.min(n, i));
    const last = state.i === n;
    const st = e.steps[state.i];
    const qs = e.qnav ? [...new Set(e.steps.map(x => x.q))] : [];
    const curQ = last ? null : st.q;
    const qi = qs.indexOf(curQ);
    host.innerHTML = `${qs.length ? `<div class="qnav" role="group" aria-label="Aller à une question">${qs.map((q, k) => `<button type="button" data-q="${q}" class="${last || k < qi ? "done" : ""}" aria-pressed="${q === curQ}">Q${q}</button>`).join("")}<button type="button" data-go="${n}" class="qb" aria-pressed="${last}">Bilan</button></div>` : ""}
      <div class="prog"${qs.length ? " hidden" : ""}>${Array.from({ length: n + 1 }, (_, k) => `<button type="button" class="${k <= state.i ? "done" : ""}" data-go="${k}" aria-label="${k === n ? "Bilan" : "Étape " + (k + 1)}"></button>`).join("")}</div>
      <div class="stage" aria-live="polite">
        <div class="step" style="--anim:${dir < 0 ? "stepback" : "stepin"}">
          ${last
            ? `<span class="count">Bilan</span><div class="redac"><div class="redac-head"><h4>La rédaction complète</h4><button class="btn btn-ghost btn-sm" type="button" data-big>${I.full} Voir en grand</button></div><div class="prose">${redaction(e)}</div></div><div class="folds">${e.piege ? `<details class="fold f-trap"><summary>Le piège</summary><div>${annotate(e.piege, e)}</div></details>` : ""}${e.methode ? `<details class="fold f-meth"><summary>La méthode</summary><div>${annotate(e.methode, e)}</div></details>` : ""}${all.length ? `<details class="fold"><summary>Tous les rappels utilisés (${all.length})</summary><div class="rappels">${all.map(r => rchip(r, e)).join("")}</div></details>` : ""}</div>`
            : `${e.qnav ? (qpos(e, state.i)[1] > 1 ? `<span class="count">Étape ${qpos(e, state.i)[0]} / ${qpos(e, state.i)[1]}</span>` : "") : `<span class="count">${st.q ? `Question ${st.q} · ` : ""}Étape ${state.i + 1} sur ${n}</span>`}<h3>${stt(st.t)}</h3><div class="prose">${annotate(st.b, e)}</div>${(st.rappels || []).length ? `<details class="fold fold-sm"><summary>Rappels utilisés (${st.rappels.length})</summary><div class="rappels">${st.rappels.map(r => rchip(r, e)).join("")}</div></details>` : ""}`}
        </div>
      </div>
      <div class="nav">
        <button class="btn btn-ghost" type="button" data-step="-1" ${state.i === 0 ? "disabled style=\"opacity:.4;cursor:default\"" : ""}>${I.left} Précédent</button>
        ${last ? `<button class="btn btn-navy" type="button" data-step="restart">Recommencer</button>` : `<button class="btn btn-yellow" type="button" data-step="1">${state.i === n - 1 ? "Voir le bilan" : "Étape suivante"} ${I.arrow}</button>`}
      </div>`;
    $$("[data-q]", host).forEach(b => b.addEventListener("click", () => { const k = e.steps.findIndex(x => String(x.q) === b.dataset.q); show(k, k >= state.i ? 1 : -1); }));
    $$("[data-go]", host).forEach(b => b.addEventListener("click", () => show(+b.dataset.go, +b.dataset.go >= state.i ? 1 : -1)));
    const big = $("[data-big]", host); if (big) big.addEventListener("click", () => openBig(e));
    $$("[data-step]", host).forEach(b => b.addEventListener("click", () => {
      const v = b.dataset.step;
      if (v === "restart") show(0, -1); else show(state.i + (+v), +v);
    }));
    closeTip(); bindKeys(host, e); bindSrc(host); 
    {
      const q = last ? 0 : stepQ(e, state.i);
      const lis = $$(".side-en .enonce ol > li").filter(li => !li.parentElement.closest("li"));
      const num = li => { const ol = li.parentElement; return (ol.hasAttribute("start") ? +ol.getAttribute("start") : 1) + [...ol.children].indexOf(li); };
      lis.forEach(li => li.classList.toggle("qon", num(li) === q));
      const on = lis.find(li => num(li) === q), box = $(".side-en");
      if (on && box && box.scrollHeight > box.clientHeight) box.scrollTo({ top: Math.max(0, on.offsetTop - 80), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
    typeset(host);
    if (quiet) return;
    const top = host.closest(".panelbox").getBoundingClientRect().top;
    if (top < 72 || top > innerHeight * .6) host.closest(".panelbox").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }
  player = {
    get i() { return state.i; },
    go(k) { show(k, k >= state.i ? 1 : -1); },
    key(k) {
      if (k === "ArrowRight" && state.i < n) show(state.i + 1, 1);
      if (k === "ArrowLeft" && state.i > 0) show(state.i - 1, -1);
    }
  };
  intro();
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeMenus(); closeTip(); results.hidden = true; if ($("#drawer")) popDrawer(); else if ($("#bigread")) closeBig(); return; }
  if (!player || $("#drawer") || $("#bigread") || e.altKey || e.ctrlKey || e.metaKey) return;
  const t = e.target; if (t && (t.matches("input,textarea,select") || t.isContentEditable)) return;
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); player.key(e.key); }
});

/* ---------- Lecteur PDF ---------- */
let pdfjsReady = null;
function loadScript(u) { return new Promise((ok, ko) => { const s = document.createElement("script"); s.src = u; s.onload = ok; s.onerror = ko; document.head.appendChild(s); }); }
function pdfjs() {
  if (!pdfjsReady) pdfjsReady = loadScript("vendor/pdfjs/pdf.js").then(() => { const lib = window.pdfjsLib; lib.GlobalWorkerOptions.workerSrc = "vendor/pdfjs/pdf.worker.js"; return lib; });
  return pdfjsReady;
}
function mountPdf(el) {
  const slug = el.dataset.pdf, url = `pdf/${slug}.pdf`;
  el.className = "pdfv";
  el.innerHTML = `<div class="bar"><span class="ttl">${el.dataset.title || ""}</span><span class="pg">…</span><button class="iconbtn" type="button" data-z="-1" aria-label="Dézoomer">${I.minus}</button><button class="iconbtn" type="button" data-z="1" aria-label="Zoomer">${I.plus}</button><a class="iconbtn" href="${url}" download aria-label="Télécharger le PDF">${I.dl}</a><button class="iconbtn" type="button" data-fs aria-label="Plein écran">${I.full}</button></div><div class="scroll" tabindex="0" aria-label="Aperçu du PDF"></div>`;
  const scroll = $(".scroll", el), pg = $(".pg", el);
  let zoom = 1, doc = null, pages = [], io = null;
  const fitW = () => Math.min(scroll.clientWidth - 32, 820);
  function layout() {
    const w = Math.round(fitW() * zoom);
    pages.forEach(p => { p.el.style.width = w + "px"; p.el.style.height = Math.round(w * p.ratio) + "px"; if (p.w !== w) { p.w = w; p.done = false; } });
    pages.forEach(p => { if (p.visible) draw(p); });
  }
  async function draw(p) {
    if (p.done || p.busy) return;
    p.busy = true;
    try {
      const page = await doc.getPage(p.n);
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const vp = page.getViewport({ scale: (p.w / page.getViewport({ scale: 1 }).width) * dpr });
      const cv = document.createElement("canvas"); cv.width = Math.floor(vp.width); cv.height = Math.floor(vp.height);
      await page.render({ canvasContext: cv.getContext("2d"), viewport: vp }).promise;
      p.el.classList.remove("skel"); p.el.replaceChildren(cv); requestAnimationFrame(() => cv.classList.add("on"));
      p.done = true;
    } catch (e) {} finally { p.busy = false; if (!p.done && p.visible) setTimeout(() => draw(p), 50); }
  }
  pdfjs().then(lib => lib.getDocument({ url, isEvalSupported: false }).promise).then(async d => {
    doc = d;
    const first = await d.getPage(1); const v = first.getViewport({ scale: 1 }); const ratio = v.height / v.width;
    pg.textContent = `1 / ${d.numPages}`;
    for (let n = 1; n <= d.numPages; n++) { const pe = document.createElement("div"); pe.className = "page skel"; pe.dataset.n = n; scroll.appendChild(pe); pages.push({ n, el: pe, ratio, w: 0, done: false, visible: false }); }
    io = new IntersectionObserver(es => es.forEach(en => { const p = pages[+en.target.dataset.n - 1]; p.visible = en.isIntersecting; if (p.visible) draw(p); }), { root: scroll, rootMargin: "400px 0px" });
    pages.forEach(p => io.observe(p.el));
    layout();
    new ResizeObserver(() => layout()).observe(scroll);
  }).catch(() => { scroll.innerHTML = `<div class="err">Impossible d'afficher l'aperçu. <a href="${url}" download>Télécharger le PDF</a></div>`; });
  scroll.addEventListener("scroll", () => {
    if (!pages.length) return;
    const mid = scroll.scrollTop + scroll.clientHeight / 2;
    let cur = 1; pages.forEach(p => { if (p.el.offsetTop <= mid) cur = p.n; });
    pg.textContent = `${cur} / ${pages.length}`;
  }, { passive: true });
  $$("[data-z]", el).forEach(b => b.addEventListener("click", () => { zoom = Math.max(.6, Math.min(2.2, zoom + (+b.dataset.z) * .2)); layout(); }));
  $("[data-fs]", el).addEventListener("click", () => { if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(() => {}); });
}

/* ---------- Labos : explications visuelles, tout est écrit en LaTeX ---------- */
const L = String.raw;
const nf = (v, d = 2) => { const r = +(+v).toFixed(d); return (Object.is(r, -0) ? 0 : r).toString().replace(".", ",").replace("-", "−"); };
const tnum = (v, d = 2) => { const r = +(+v).toFixed(d); return (Object.is(r, -0) ? 0 : r).toString().replace(".", "{,}"); };
const sgn = v => v > 0 ? "+1" : "-1";
/* Matrice LaTeX dont chaque coefficient est cliquable (\class), avec traits de séparation de blocs */
function texMat(M, o = {}) {
  const n = M.length, m = M[0].length, cuts = o.cuts || [];
  const spec = Array.from({ length: m }, (_, j) => "c" + (cuts.includes(j + 1) && j < m - 1 ? "|" : "")).join("");
  const rows = M.map((r, i) => r.map((v, j) => `\\class{mc ${o.id || "m"} r${i} c${j}${(o.nz ? o.nz(v, i, j) : v !== 0) ? " nz" : ""}}{${o.f ? o.f(v, i, j) : v}}`).join(" & ") + (cuts.includes(i + 1) && i < n - 1 ? L` \\ \hline ` : L` \\ `)).join("");
  return L`\left(\begin{array}{` + spec + "}" + rows + L`\end{array}\right)`;
}
const blockCuts = sizes => { const c = []; let s = 0; sizes.forEach(x => { s += x; c.push(s); }); return c; };
function labShell(host, { intro, ctl, math, expl, extra }) {
  host.innerHTML = `<div class="lab">${intro ? `<div class="lab-intro">${intro}</div>` : ""}${ctl ? `<div class="lab-ctl">${ctl}</div>` : ""}<div class="lab-main"><div class="lab-math">${math}</div>${extra || ""}</div>${expl ? `<div class="lab-expl">${expl}</div>` : ""}</div>`;
  typeset(host);
}
const labSegH = (key, opts, cur) => `<span class="seg lab-seg" data-s="${key}" role="group">${opts.map(o => `<button type="button" data-v="${o[0]}" aria-pressed="${String(o[0]) === String(cur)}">${o[1]}</button>`).join("")}</span>`;
const stepper = (key, label, v, min, max, step = 1, show) => `<span class="stp"><span class="stp-l">${label}</span><button type="button" data-st="${key}" data-d="${-step}" data-min="${min}" data-max="${max}" aria-label="Diminuer">−</button><b>${show !== undefined ? show : nf(v)}</b><button type="button" data-st="${key}" data-d="${step}" data-min="${min}" data-max="${max}" aria-label="Augmenter">+</button></span>`;
function labControls(host, st, draw) {
  $$(".lab-seg", host).forEach(g => $$("button", g).forEach(b => b.addEventListener("click", () => { const v = b.dataset.v; st[g.dataset.s] = isNaN(+v) ? v : +v; draw(); })));
  $$("[data-st]", host).forEach(b => b.addEventListener("click", () => { const k = b.dataset.st, d = +b.dataset.d; const v = +(st[k] + d).toFixed(4); if (v < +b.dataset.min - 1e-9 || v > +b.dataset.max + 1e-9) return; st[k] = v; draw(); }));
}
function labPick(host, fn) {
  host.onclick = e => {
    const g = e.target.closest && e.target.closest(".mc"); if (!g || !host.contains(g)) return;
    const cl = (g.getAttribute("class") || "").split(/\s+/);
    const i = +((cl.find(c => /^r\d+$/.test(c)) || "r0").slice(1)), j = +((cl.find(c => /^c\d+$/.test(c)) || "c0").slice(1));
    $$(".mc.sel", host).forEach(x => x.classList.remove("sel")); g.classList.add("sel");
    const ex = $(".lab-expl", host); if (ex) { ex.innerHTML = fn(cl[1], i, j); typeset(ex); }
  };
}
const svgWrap = (w, h, s, label) => `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" class="lab-svg" role="img" aria-label="${label}">${s}</svg>`;
const fx = v => +(+v).toFixed(1);

/* 1. Matrices de décalage C(n,k), J(1), valeurs propres */
function labCycle(host) {
  const st = { v: "C", n: 6, k: 2 };
  const C = (n, k) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => { const I = i + 1, J = j + 1; return ((I <= k && J === I + n - k) || (I >= k + 1 && J === I - k)) ? 1 : 0; }));
  function circle(n, edges, arrows) {
    const c = 120, R = 92, P = k => { const a = Math.PI / 2 - 2 * Math.PI * (k - 1) / n; return [c + R * Math.cos(a), c - R * Math.sin(a)]; };
    let s = "";
    edges.forEach(([a, b]) => { const [x1, y1] = P(a), [x2, y2] = P(b); const L0 = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L0, uy = (y2 - y1) / L0; const sx = x1 + ux * 14, sy = y1 + uy * 14, ex = x2 - ux * 14, ey = y2 - uy * 14; s += `<line x1="${fx(sx)}" y1="${fx(sy)}" x2="${fx(ex)}" y2="${fx(ey)}" class="lab-e"/>`; if (arrows) s += `<polygon points="${fx(ex)},${fx(ey)} ${fx(ex - ux * 9 - uy * 4.5)},${fx(ey - uy * 9 + ux * 4.5)} ${fx(ex - ux * 9 + uy * 4.5)},${fx(ey - uy * 9 - ux * 4.5)}" class="lab-ah"/>`; });
    for (let k = 1; k <= n; k++) { const [x, y] = P(k); s += `<circle cx="${fx(x)}" cy="${fx(y)}" r="13" class="lab-v"/><text x="${fx(x)}" y="${fx(y + 5)}" text-anchor="middle" class="lab-vt">${k}</text>`; }
    return svgWrap(240, 240, s, "Graphe");
  }
  function draw() {
    const { n } = st; if (st.k > n) st.k = n; const k = st.k;
    const ctl = labSegH("v", [["C", L`$C_{n,k}$`], ["J", L`$J_n^{(1)}$`], ["S", "Valeurs propres"]], st.v) + stepper("n", L`$n$`, n, 3, 8) + (st.v === "C" ? stepper("k", L`$k$`, k, 1, n) : "");
    if (st.v === "C") {
      const M = C(n, k);
      const imgs = Array.from({ length: n }, (_, j) => { const t = (j + k) % n + 1; return `e_{${j + 1}}\\mapsto e_{${t}}`; });
      labShell(host, {
        intro: L`<p>La matrice $C_{n,k}$ <b>décale</b> les vecteurs de base de $k$ crans, en tournant. Pour la comprendre, on la lit <b>colonne par colonne</b> : la colonne $j$ est l'image $C_{n,k}e_j$. Clique sur un coefficient pour voir la règle de l'énoncé.</p>`,
        ctl, math: `$$C_{${n},${k}} = ${texMat(M, { id: "C" })}$$` + L`$$\begin{array}{c}` + imgs.reduce((a, s, i) => a + s + (i % 4 === 3 ? L` \\ ` : L`,\quad `), "").replace(/,\\quad $|\\\\ $/, "") + L`\end{array}$$`,
        extra: circle(n, Array.from({ length: n }, (_, j) => [j + 1, (j + k) % n + 1]), true),
        expl: L`<p>Chaque colonne contient un seul $1$ : $C_{${n},${k}}\,e_j = e_{j+${k}}$, en revenant à $1$ après $${n}$. Décaler de ${k} crans revient à décaler ${k} fois d'un cran, donc $C_{n,1}^{\,k} = C_{n,k}$ (Q10). Pour $k = n$, on retrouve $I_n$.</p>`.replace(/\$\{n\}/g, n).replace(/\$\{k\}/g, k)
      });
      labPick(host, (id, i, j) => { const I = i + 1, J = j + 1, c1 = I <= k && J === I + n - k, c2 = I >= k + 1 && J === I - k; return c1 ? L`<p>Coefficient $(${I},${J})$ : on a $i = ${I}\leqslant k = ${k}$ et $j = i+n-k = ${I}+${n}-${k} = ${J}$, donc il vaut $1$. Lecture : la colonne $${J}$ envoie $e_{${J}}$ sur $e_{${I}}$.</p>` : c2 ? L`<p>Coefficient $(${I},${J})$ : on a $i = ${I}\geqslant k+1$ et $j = i-k = ${I}-${k} = ${J}$, donc il vaut $1$. Lecture : la colonne $${J}$ envoie $e_{${J}}$ sur $e_{${I}}$.</p>` : L`<p>Coefficient $(${I},${J})$ : ${I <= k ? `comme $i\\leqslant k$, il faudrait $j = i+n-k = ${I + n - k}$` : `comme $i\\geqslant k+1$, il faudrait $j = i-k = ${I - k}$`}. Ce n'est pas le cas : il vaut $0$.</p>`; });
    } else if (st.v === "J") {
      const A = C(n, 1), B = C(n, n - 1), M = A.map((r, i) => r.map((v, j) => v + B[i][j]));
      labShell(host, {
        intro: L`<p>$J_n^{(1)} = C_{n,1}+C_{n,n-1}$ : le premier terme décale d'un cran en avant, le second d'un cran en arrière. Le coefficient $(i,j)$ vaut donc $1$ exactement quand $i$ et $j$ sont <b>voisins sur le cercle</b>. Clique sur un coefficient.</p>`,
        ctl, math: `$$J_{${n}}^{(1)} = ${texMat(A, { id: "A" })} + ${texMat(B, { id: "B" })} = ${texMat(M, { id: "J" })}$$`,
        extra: circle(n, Array.from({ length: n }, (_, j) => [j + 1, (j + 1) % n + 1]), false),
        expl: L`<p>C'est la matrice d'adjacence du cycle à $${n}$ sommets (Q8) : chaque ligne contient deux $1$, aux colonnes des deux voisins.</p>`.replace("${n}", n)
      });
      labPick(host, (id, i, j) => { const I = i + 1, J = j + 1, nb = J === I % n + 1 || I === J % n + 1; return nb ? L`<p>Coefficient $(${I},${J})$ : les sommets $${I}$ et $${J}$ sont voisins sur le cercle, il vaut $1$. Il provient de ${A[i][j] ? L`$C_{n,1}$ (car $i = j+1$ modulo $n$)` : L`$C_{n,n-1}$ (car $j = i+1$ modulo $n$)`}.</p>` : L`<p>Coefficient $(${I},${J})$ : $${I}$ et $${J}$ ne sont pas voisins, il vaut $0$.</p>`; });
    } else {
      const c = 120, R = 90; let s = `<line x1="10" y1="${c}" x2="230" y2="${c}" class="lab-ax"/><line x1="${c}" y1="10" x2="${c}" y2="230" class="lab-ax"/><circle cx="${c}" cy="${c}" r="${R}" class="lab-ax" style="fill:none"/>`;
      for (let j = 0; j < n; j++) { const x = Math.cos(2 * Math.PI * j / n), y = Math.sin(2 * Math.PI * j / n); s += `<line x1="${fx(c + R * x)}" y1="${fx(c - R * y)}" x2="${fx(c + R * x)}" y2="${c}" class="lab-proj"/><circle cx="${fx(c + R * x)}" cy="${fx(c - R * y)}" r="5" class="lab-pt"/><circle cx="${fx(c + R * x)}" cy="${c}" r="4" class="lab-pt2"/>`; }
      const lam = Array.from({ length: n }, (_, j) => `\\lambda_{${j}} = 2\\cos\\frac{${2 * j}\\pi}{${n}} = ${tnum(2 * Math.cos(2 * Math.PI * j / n))}`);
      labShell(host, {
        intro: L`<p>Les valeurs propres de $C_{n,1}$ sont les racines $n$-ièmes de l'unité $\omega_k = e^{2ik\pi/n}$ (points bleus). Comme $C_{n,n-1} = C_{n,1}^{-1}$, la même matrice de passage diagonalise $J_n^{(1)}$, avec les valeurs propres $\lambda_k = \omega_k+\overline{\omega_k} = 2\cos\frac{2k\pi}n$ : deux fois l'abscisse du point (points jaunes).</p>`,
        ctl, math: L`$$\begin{array}{l}` + lam.join(L` \\ `) + L`\end{array}$$`, extra: svgWrap(240, 240, s, "Racines de l'unité"),
        expl: L`<p>Vérification : la somme des $\lambda_k$ vaut $${tnum(Array.from({ length: n }, (_, j) => 2 * Math.cos(2 * Math.PI * j / n)).reduce((a, b) => a + b, 0))}$, c'est la trace de $J_n^{(1)}$ (diagonale nulle).</p>`.replace(/\$\{[^}]+\}/, tnum(Array.from({ length: n }, (_, j) => 2 * Math.cos(2 * Math.PI * j / n)).reduce((a, b) => a + b, 0)))
      });
    }
    labControls(host, st, draw);
  }
  draw();
}

/* 2. Produit de Kronecker et J9(2) */
function labKron(host) {
  const st = { v: "AB", A: [[1, 2], [3, 4]], B: [[0, 1], [1, 2]] };
  const kron = (A, B) => { const r = B.length, s = B[0].length; return Array.from({ length: A.length * r }, (_, i) => Array.from({ length: A[0].length * s }, (_, j) => A[Math.floor(i / r)][Math.floor(j / s)] * B[i % r][j % s])); };
  const I3 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]], J3 = [[0, 1, 1], [1, 0, 1], [1, 1, 0]];
  const T1 = kron(I3, J3), T2 = kron(J3, I3), T = T1.map((r, i) => r.map((v, j) => v + T2[i][j]));
  const pm = M => L`\begin{pmatrix}` + M.map(r => r.join(" & ")).join(L` \\ `) + L`\end{pmatrix}`;
  function grid(hl) {
    const P = v => { const a = Math.floor((v - 1) / 3), b = (v - 1) % 3; return [45 + b * 75, 35 + a * 75]; };
    let s = "";
    for (let u = 1; u <= 9; u++) for (let v = u + 1; v <= 9; v++) {
      const same = Math.floor((u - 1) / 3) === Math.floor((v - 1) / 3), col = (u - 1) % 3 === (v - 1) % 3; if (!same && !col) continue;
      const [x1, y1] = P(u), [x2, y2] = P(v), far = Math.abs(x2 - x1) > 100 || Math.abs(y2 - y1) > 100, on = hl && ((hl[0] === u && hl[1] === v) || (hl[0] === v && hl[1] === u));
      const cls = `lab-e${same ? "" : " dash"}${on ? " on" : ""}`;
      s += far ? `<path d="M${x1} ${y1} Q${(x1 + x2) / 2 + (same ? 0 : -32)} ${(y1 + y2) / 2 + (same ? -32 : 0)} ${x2} ${y2}" class="${cls}" style="fill:none"/>` : `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
    }
    for (let v = 1; v <= 9; v++) { const [x, y] = P(v); s += `<circle cx="${x}" cy="${y}" r="13" class="lab-v${hl && hl.includes(v) ? " on" : ""}"/><text x="${x}" y="${y + 5}" text-anchor="middle" class="lab-vt">${v}</text>`; }
    return svgWrap(240, 230, s, "Grille 3 par 3");
  }
  function draw() {
    const ctl = labSegH("v", [["AB", L`$A\otimes B$`], ["T1", L`$I_3\otimes J_3^{(1)}$`], ["T2", L`$J_3^{(1)}\otimes I_3$`], ["T", L`$J_9^{(2)}$`]], st.v);
    if (st.v === "AB") {
      const { A, B } = st, K = kron(A, B);
      const inp = (X, nm) => `<span class="mx-in">${X.map((r, i) => r.map((v, j) => `<input type="number" step="1" value="${v}" data-m="${nm}" data-i="${i}" data-j="${j}" aria-label="${nm} ${i + 1} ${j + 1}">`).join("")).join("")}</span>`;
      labShell(host, {
        intro: L`<p>Le produit de Kronecker remplace chaque coefficient $a_{ij}$ de $A$ par le <b>bloc</b> $a_{ij}B$. Modifie $A$ et $B$, puis clique sur un coefficient du résultat pour voir d'où il vient.</p>`,
        ctl: ctl + `<span class="lab-inputs"><span>$A =$</span>${inp(A, "A")}<span>$B =$</span>${inp(B, "B")}</span>`,
        math: L`$$A\otimes B = \begin{pmatrix}a_{11}B & a_{12}B\\ a_{21}B & a_{22}B\end{pmatrix} = \begin{pmatrix}` + `${A[0][0]}\\,B & ${A[0][1]}\\,B\\\\ ${A[1][0]}\\,B & ${A[1][1]}\\,B` + L`\end{pmatrix} = ` + texMat(K, { id: "K", cuts: [2, 4], nz: () => false }) + "$$",
        expl: L`<p>Clique sur un coefficient de la matrice de droite.</p>`
      });
      $$(".mx-in input", host).forEach(x => x.addEventListener("change", () => { const v = parseFloat(x.value.replace(",", ".")); st[x.dataset.m][+x.dataset.i][+x.dataset.j] = isFinite(v) ? v : 0; draw(); }));
      labPick(host, (id, i, j) => { const a = Math.floor(i / 2), b = Math.floor(j / 2), p = i % 2, q = j % 2; return L`<p>Ligne $${i + 1}$ : bloc $${a + 1}$, position $${p + 1}$. Colonne $${j + 1}$ : bloc $${b + 1}$, position $${q + 1}$. Le coefficient vaut</p>$$a_{${a + 1}${b + 1}}\,b_{${p + 1}${q + 1}} = ${A[a][b]}\times${B[p][q]} = ${A[a][b] * B[p][q]}.$$`; });
    } else {
      const M = st.v === "T1" ? T1 : st.v === "T2" ? T2 : T;
      const head = st.v === "T1" ? L`I_3\otimes J = \begin{pmatrix}J&0&0\\0&J&0\\0&0&J\end{pmatrix}` : st.v === "T2" ? L`J\otimes I_3 = \begin{pmatrix}0&I_3&I_3\\I_3&0&I_3\\I_3&I_3&0\end{pmatrix}` : L`J_9^{(2)} = I_3\otimes J+J\otimes I_3`;
      labShell(host, {
        intro: L`<p>Ici $J = J_3^{(1)} = ` + pm(J3) + L`$. On numérote le sommet de la ligne $a$ et de la colonne $b$ de la grille par $3(a-1)+b$. ` + (st.v === "T1" ? L`$I_3\otimes J$ relie les sommets d'une <b>même ligne</b> de la grille (traits pleins).` : st.v === "T2" ? L`$J\otimes I_3$ relie les sommets d'une <b>même colonne</b> (pointillés).` : L`La somme relie les sommets d'une même ligne ou d'une même colonne : chaque sommet a $4$ voisins.`) + " Clique sur un coefficient.</p>",
        ctl, math: `$$${head} = ${texMat(M, { id: "T", cuts: [3, 6] })}$$`, extra: grid(),
        expl: L`<p>Clique sur un coefficient égal à $1$ : l'arête correspondante s'allume sur la grille.</p>`
      });
      labPick(host, (id, i, j) => {
        const a = Math.floor(i / 3) + 1, b = i % 3 + 1, a2 = Math.floor(j / 3) + 1, b2 = j % 3 + 1, t1 = a === a2 ? J3[b - 1][b2 - 1] : 0, t2 = b === b2 ? J3[a - 1][a2 - 1] : 0;
        const g = $(".lab-svg", host); if (g) g.outerHTML = grid(M[i][j] ? [i + 1, j + 1] : null);
        return L`<p>Ligne $${i + 1}$ : sommet $(a,b) = (${a},${b})$. Colonne $${j + 1}$ : sommet $(${a2},${b2})$. On est dans le bloc $(${a},${a2})$, à la position $(${b},${b2})$.</p>$$\big(I_3\otimes J\big)_{${i + 1},${j + 1}} = (I_3)_{${a}${a2}}\,J_{${b}${b2}} = ${t1},\qquad\big(J\otimes I_3\big)_{${i + 1},${j + 1}} = J_{${a}${a2}}\,(I_3)_{${b}${b2}} = ${t2}.$$` + (st.v === "T" ? L`<p>Somme : $${t1 + t2}$. ${t1 + t2 ? "Les deux sommets sont voisins dans la grille." : "Les deux sommets ne sont pas voisins."}</p>` : "");
      });
    }
    labControls(host, st, draw);
  }
  draw();
}

/* 3. Matrice de transfert du modèle d'Ising */
function labTransfer(host) {
  const st = { n: 5, b: 0.6, h: 0.3, x: [1, 1, -1, 1, -1, -1, 1, 1] };
  function draw() {
    const { n, b, h } = st, x = st.x.slice(0, n);
    const A = [[Math.exp(b - h), Math.exp(-b - h)], [Math.exp(-b + h), Math.exp(b + h)]], kk = v => v === -1 ? 1 : 2;
    const f = x.map((v, i) => { const w = x[(i + 1) % n]; return { v, w, val: Math.exp(b * v * w + h * v), a: kk(v), c: kk(w) }; });
    const prod = f.reduce((p, t) => p * t.val, 1);
    let Z = 0; for (let m = 0; m < 1 << n; m++) { const y = Array.from({ length: n }, (_, i) => (m >> i) & 1 ? 1 : -1); let t = 1; for (let i = 0; i < n; i++) t *= Math.exp(b * y[i] * y[(i + 1) % n] + h * y[i]); Z += t; }
    let P = [[1, 0], [0, 1]]; for (let i = 0; i < n; i++) P = [[P[0][0] * A[0][0] + P[0][1] * A[1][0], P[0][0] * A[0][1] + P[0][1] * A[1][1]], [P[1][0] * A[0][0] + P[1][1] * A[1][0], P[1][0] * A[0][1] + P[1][1] * A[1][1]]];
    const used = new Set(f.map(t => `${t.a - 1}${t.c - 1}`));
    const ctl = stepper("n", L`$n$`, n, 2, 8) + stepper("b", L`$\beta$`, b, 0, 1.5, 0.1) + stepper("h", L`$h$`, h, 0, 1, 0.1) + `<span class="spins"><span class="stp-l">Configuration (clique pour retourner) :</span>${x.map((v, i) => `<button type="button" data-s="${i}" class="${v > 0 ? "up" : "dn"}" aria-label="x${i + 1}">$x_{${i + 1}} = ${sgn(v)}$</button>`).join("")}</span>`;
    labShell(host, {
      intro: L`<p>Dans le modèle d'Ising, le poids d'une configuration $x$ est un produit de facteurs $e^{\beta x_ix_{i+1}+hx_i}$, chacun ne dépendant que de deux voisins. On range ces $4$ facteurs possibles dans une matrice $2\times2$ : ligne $=$ valeur de $x_i$, colonne $=$ valeur de $x_{i+1}$ (indice $1$ pour $-1$, indice $2$ pour $+1$).</p>`,
      ctl,
      math: L`$$A = \begin{pmatrix}e^{\beta-h}&e^{-\beta-h}\\ e^{-\beta+h}&e^{\beta+h}\end{pmatrix} = ` + texMat(A, { id: "A", f: v => tnum(v), nz: (v, i, j) => used.has(`${i}${j}`) }) + "$$"
        + L`$$\prod_{i=1}^{${n}}e^{\beta x_ix_{i+1}+hx_i} = ` + f.map(t => `A(${t.a},${t.c})`).join("\\,") + " = " + f.map(t => tnum(t.val)).join("\\times") + ` = ${tnum(prod, 4)}$$`
        + L`$$Z_{${n}}(h) = \sum_{x\in\Lambda_{${n}}}\prod_{i=1}^{${n}}e^{\beta x_ix_{i+1}+hx_i} = ${tnum(Z, 3)},\qquad\operatorname{tr}\big(A^{${n}}\big) = ${tnum(P[0][0] + P[1][1], 3)}.$$`.replace(/\$\{n\}/g, n),
      expl: "<p></p>"
    });
    const ex = $(".lab-expl", host); ex.innerHTML = `<p>Le produit ci-dessus est un <b>chemin fermé</b> dans les indices : $${f.map(t => t.a).join("\\to ")}\\to ${f[0].a}$. D'après Q20, le coefficient diagonal $(k_1,k_1)$ de $A^{n}$ est la somme des produits sur tous les chemins fermés partant de $k_1$. En sommant sur $k_1$, on obtient la trace, et les chemins fermés correspondent exactement aux $2^{n}$ configurations : $Z_n(h) = \\operatorname{tr}(A^n)$. Les coefficients de $A$ utilisés par ta configuration sont en couleur.</p>`; typeset(ex);
    labControls(host, st, draw);
    $$(".spins button", host).forEach(btn => btn.addEventListener("click", () => { const i = +btn.dataset.s; st.x[i] = -st.x[i]; draw(); }));
  }
  draw();
}

/* 4. Curie-Weiss et sinus */
function labSpec(host) {
  const st = { v: "CW", n: 4, m: 2 };
  function draw() {
    const ctl = labSegH("v", [["CW", "Curie-Weiss (Q5)"], ["SI", "Sinus (Q7)"]], st.v) + (st.v === "CW" ? stepper("n", L`$n$`, st.n, 2, 6) : stepper("m", L`$n$`, st.m, 1, 4));
    if (st.v === "CW") {
      const n = st.n, J = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 0 : 1)), U = J.map(r => r.map(() => 1)), U2 = U.map(r => r.map(() => n));
      labShell(host, {
        intro: L`<p>On part de $J_n^{(C)}$ (des $\frac1n$ partout sauf sur la diagonale), on multiplie par $n$ et on ajoute $I_n$ : on obtient la matrice $U_n$ remplie de $1$. Son carré se calcule de tête, et donne son spectre.</p>`,
        ctl,
        math: `$$J_{${n}}^{(C)} = \\frac1{${n}}${texMat(J, { id: "J" })},\\qquad U_{${n}} = ${n}J_{${n}}^{(C)}+I_{${n}} = ${texMat(U, { id: "U" })}$$` + `$$U_{${n}}^2 = ${texMat(U2, { id: "V" })} = ${n}\\,U_{${n}}$$`,
        expl: L`<p>Chaque coefficient de $U_n^2$ est $\sum_{k=1}^{n}1\times1 = n$, donc $U_n^2 = nU_n$ et $X^2-nX$ annule $U_n$ : $\operatorname{Sp}(U_n)\subset\{0,n\}$. Avec $U_n(1,\dots,1)^{\mathsf T} = n(1,\dots,1)^{\mathsf T}$ et $U_nx = 0$ pour $x$ de somme nulle, $\operatorname{Sp}(U_n) = \{0,n\}$. Enfin $J_n^{(C)} = \frac1n(U_n-I_n)$ :</p>$$\operatorname{Sp}\big(J_{${n}}^{(C)}\big) = \Big\{\frac{0-1}{${n}},\ \frac{${n}-1}{${n}}\Big\} = \Big\{-\frac1{${n}},\ \frac{${n - 1}}{${n}}\Big\}.$$`.replace(/\$\{n\}/g, n).replace(/\$\{n - 1\}/g, n - 1)
      });
    } else {
      const n = st.m, N = 2 * n + 1, S = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => 2 / Math.sqrt(N) * Math.sin(2 * Math.PI * (i + 1) * (j + 1) / N)));
      const S2 = S.map((r, i) => r.map((_, j) => S[i].reduce((a, _, k) => a + S[i][k] * S[k][j], 0)));
      labShell(host, {
        intro: L`<p>$J_n^{(S)}(i,j) = \frac2{\sqrt{2n+1}}\sin\frac{2\pi ij}{2n+1}$. Elle est symétrique, donc $J^{\mathsf T}J = J\times J$. On calcule ce produit : on doit trouver $I_n$. Clique sur un coefficient du produit pour voir le calcul.</p>`,
        ctl,
        math: `$$J_{${n}}^{(S)} = ${texMat(S, { id: "S", f: v => tnum(v) })},\\qquad \\big(J_{${n}}^{(S)}\\big)^2 = ${texMat(S2, { id: "P", f: v => tnum(v), nz: (v, i, j) => i === j })}$$`,
        expl: L`<p>Le coefficient $(i,j)$ du produit est le produit scalaire des colonnes $i$ et $j$. Clique sur un coefficient.</p>`
      });
      labPick(host, (id, i, j) => { if (id !== "P") return L`<p>Clique sur un coefficient du produit (à droite).</p>`; const a = i + 1, c = j + 1; return a === c ? L`<p>Coefficient $(${a},${a})$ :</p>$$\frac4{${N}}\sum_{k=1}^{${n}}\sin^2\frac{2\pi ${a}k}{${N}} = \frac2{${N}}\sum_{k=1}^{${n}}\Big(1-\cos\frac{4\pi ${a}k}{${N}}\Big) = \frac2{${N}}\Big(${n}+\frac12\Big) = 1,$$<p>car la somme de cosinus vaut $-\frac12$ (Q6, avec $\sin(2\pi\cdot${a}) = 0$).</p>` : L`<p>Coefficient $(${a},${c})$ : avec $\sin a\sin b = \frac12(\cos(a-b)-\cos(a+b))$,</p>$$\frac2{${N}}\sum_{k=1}^{${n}}\Big(\cos\frac{2\pi(${a}-${c})k}{${N}}-\cos\frac{2\pi(${a}+${c})k}{${N}}\Big) = \frac2{${N}}\Big(-\frac12+\frac12\Big) = 0,$$<p>car chaque somme vaut $-\frac12$ par Q6 : $\sin\big(\pi(${a}\mp${c})\big) = 0$.</p>`; });
    }
    labControls(host, st, draw);
  }
  draw();
}

/* 5. L'opérateur ξ sur les polynômes de Laurent */
function labXi(host) {
  const presets = [{ "-3": 1, "-1": 2, "1": 1 }, { "-4": 1, "-2": -1, "0": 3 }, { "-2": 2, "-1": 1 }];
  const st = { v: "op", p: 0, c: { ...presets[0] }, hist: [], n: 2 };
  const mono = (a, k) => { const m = Math.abs(a), co = m === 1 && k !== 0 ? "" : String(m); return { s: a < 0 ? "-" : "+", t: co + (k === 0 ? "" : k === 1 ? "X" : `X^{${k}}`) }; };
  const texF = (c, gray) => { const ks = Object.keys(c).map(Number).filter(k => c[k]).sort((a, b) => a - b); if (!ks.length) return "0"; return ks.map((k, i) => { const { s, t } = mono(c[k], k), g = gray && k >= 0; const body = g ? `\\color{#9AA3BA}{\\cancel{${t}}}` : t; return (i === 0 ? (s === "-" ? "-" : "") : ` ${s} `) + body; }).join(""); };
  const mulX = c => { const r = {}; Object.keys(c).forEach(k => r[+k + 1] = c[k]); return r; };
  const proj = c => { const r = {}; Object.keys(c).forEach(k => { if (+k < 0) r[k] = c[k]; }); return r; };
  function draw() {
    const ctl = labSegH("v", [["op", L`Calculer $\xi(F)$ (Q3)`], ["ker", L`Noyau de $\xi^n$ (Q4, Q5)`]], st.v) + (st.v === "op" ? labSegH("p", presets.map((p, i) => [i, `$${texF(p)}$`]), st.p) + `<button type="button" class="btn btn-yellow btn-sm" data-op="xi">Appliquer $\\xi$</button><button type="button" class="btn btn-ghost btn-sm" data-op="r">Recommencer</button>` : stepper("n", L`$n$`, st.n, 1, 5));
    if (st.v === "op") {
      const F = st.c, XF = mulX(F), R = proj(XF);
      labShell(host, {
        intro: L`<p>$\xi$ agit en deux temps : on <b>multiplie par $X$</b> (toutes les puissances augmentent de $1$), puis $\Pi$ <b>efface</b> les puissances $\geqslant0$ (barrées en gris). Choisis un polynôme $F$ et applique $\xi$ plusieurs fois.</p>`,
        ctl,
        math: L`$$\begin{aligned}F &= ` + texF(F) + L`\\ XF &= ` + texF(XF) + L`\\ \xi(F) = \Pi(XF) &= ` + texF(XF, true) + " = " + texF(R) + L`\end{aligned}$$` + (st.hist.length ? L`$$` + st.hist.map(h => h).join(L`\ \xrightarrow{\ \xi\ }\ `) + L`\ \xrightarrow{\ \xi\ }\ ` + texF(F) + "$$" : ""),
        expl: L`<p>Sur la base : $\xi(X^{-j}) = X^{-j+1}$ si $j\geqslant2$, et $\xi(X^{-1}) = \Pi(1) = 0$. Le terme $X^{-1}$ disparaît à chaque application : en répétant, on finit toujours par obtenir $0$. Remarque (Q3 a) : effacer la partie polynomiale <b>avant</b> de multiplier par $X$ ne change rien, car elle aurait été effacée après.</p>`
      });
      $$("[data-op]", host).forEach(b => b.addEventListener("click", () => { if (b.dataset.op === "r") { st.c = { ...presets[st.p] }; st.hist = []; } else { st.hist.push(texF(st.c)); st.c = proj(mulX(st.c)); } draw(); }));
    } else {
      const n = st.n, js = Array.from({ length: n + 3 }, (_, i) => i + 1);
      labShell(host, {
        intro: L`<p>Avec Q3 b, $\xi^n(X^{-j}) = \Pi(X^{n-j})$ : on décale de $n$ crans, puis on efface. Les monômes $X^{-1},\dots,X^{-n}$ deviennent des puissances $\geqslant0$ et sont effacés.</p>`,
        ctl,
        math: L`$$\begin{array}{c|` + "c".repeat(js.length) + L`} j & ` + js.join(" & ") + L` \\ \hline \xi^{${n}}(X^{-j}) & ` + js.map(j => j <= n ? L`\class{mc z r0 c${j} nz}{0}` : (n - j === -1 ? "X^{-1}" : `X^{${n - j}}`)).join(" & ") + L`\end{array}$$`.replace(/\$\{n\}/g, n),
        expl: L`<p>Donc $\ker\xi^{${n}} = \operatorname{Vect}(X^{-1},\dots,X^{-${n}})$, de dimension $${n}$ (Q4). Et tout $X^{-j}$ est atteint : $\xi^{${n}}(X^{-j-${n}}) = X^{-j}$, donc $\xi^{${n}}$ est surjectif. Sur $D_r = \operatorname{Vect}(X^{-r},\dots,X^{-1})$, $\xi$ envoie chaque monôme sur le suivant et $X^{-1}$ sur $0$ : sa matrice est le bloc de Jordan $J_r$ (Q5).</p>`.replace(/\$\{n\}/g, n)
      });
    }
    labControls(host, st, draw);
    $$(".lab-seg[data-s=p] button", host).forEach(b => b.addEventListener("click", () => { st.c = { ...presets[+b.dataset.v] }; st.hist = []; draw(); }));
  }
  draw();
}

/* 6. Blocs de Jordan, invariant δ_k, version graduée */
function labJordan(host) {
  const st = { v: "simple", r1: 3, r2: 2, r3: 2, r4: 1, a1: 1, a2: 1, a3: 2, a4: 3, k: 2 };
  const ZL = ["1", "i", "-1", "-i"];
  function draw() {
    const R0 = [st.r1, st.r2, st.r3, st.r4], A0 = [st.a1, st.a2, st.a3, st.a4];
    const B = R0.map((r, i) => ({ r, a: A0[i] })).filter(x => x.r > 0), r = B.map(x => x.r), n = r.reduce((p, x) => p + x, 0);
    const M = Array.from({ length: n }, () => Array(n).fill(0)); let o = 0; r.forEach(x => { for (let j = 0; j < x - 1; j++) M[o + j + 1][o + j] = 1; o += x; });
    const d = k => r.reduce((p, x) => p + Math.min(Math.max(k, 0), x), 0), kmax = Math.max(...r) + 1;
    if (st.k > kmax) st.k = kmax;
    const k = st.k;
    let off = 0;
    const chains = B.map(({ r: x, a }) => { const parts = []; for (let j = 0; j < x; j++) { const idx = off + j + 1, killed = st.v === "simple" && j >= x - k; let t = `e_{${idx}}`; if (st.v === "grad") { const e = (a + j) % 4; t = `\\underset{\\class{${e === 0 ? "bad" : "ev"}}{${ZL[e]}}}{e_{${idx}}}`; } else if (killed) t = `\\class{kill}{${t}}`; parts.push(t); } off += x; return parts.join(L`\xrightarrow{\;u\;}`) + L`\xrightarrow{\;u\;}0` + L`\qquad\big(J_{` + x + "}" + (st.v === "grad" ? `,\\ D_{${x},${a}}` : "") + "\\big)"; });
    const ctl = labSegH("v", [["simple", L`Blocs et invariant $\delta_k$ (Q2, Q10)`], ["grad", L`Version graduée, $N = 4$ (Q13, Q14)`]], st.v)
      + `<span class="stp-row">` + [1, 2, 3, 4].map(i => stepper("r" + i, `Bloc ${i}`, st["r" + i], 0, 4, 1, st["r" + i] ? `$J_{${st["r" + i]}}$` : "—")).join("") + `</span>`
      + (st.v === "simple" ? labSegH("k", Array.from({ length: kmax }, (_, i) => [i + 1, `$k = ${i + 1}$`]), k) : `<span class="stp-row">` + [1, 2, 3, 4].map(i => st["r" + i] ? stepper("a" + i, `$a$ (bloc ${i})`, st["a" + i], 0, 3) : "").join("") + `</span>`);
    if (st.v === "simple") {
      const ds = Array.from({ length: kmax + 2 }, (_, i) => d(i));
      const dk = -d(k - 1) + 2 * d(k) - d(k + 1), cnt = r.filter(x => x === k).length;
      labShell(host, {
        intro: L`<p>Un endomorphisme nilpotent se découpe en <b>chaînes</b> : $u$ envoie chaque vecteur sur le suivant, et le dernier sur $0$. Une chaîne de longueur $r$, c'est un bloc de Jordan $J_r$. Choisis les tailles des blocs, puis une valeur de $k$ : en couleur, les vecteurs <b>tués</b> par $u^k$.</p>`,
        ctl,
        math: `$$M = \\operatorname{diag}(${r.map(x => `J_{${x}}`).join(",")}) = ${texMat(M, { id: "M", cuts: blockCuts(r) })}$$` + L`$$\begin{array}{l}` + chains.join(L` \\[4pt] `) + L`\end{array}$$` + L`$$\begin{array}{c|` + "c".repeat(ds.length) + L`} k & ` + ds.map((_, i) => i).join(" & ") + L` \\ \hline d_k = \dim\ker M^k & ` + ds.join(" & ") + L`\end{array}$$`,
        expl: L`<p>Sur une chaîne de longueur $r$, $u^k$ tue les $\min(k,r)$ derniers vecteurs : $\dim\ker J_r^k = \min(k,r)$, et ces dimensions s'additionnent sur les blocs (Q2 c). Pour $k = ${k}$ :</p>$$\delta_{${k}} = -d_{${k - 1}}+2d_{${k}}-d_{${k + 1}} = -${d(k - 1)}+2\times${d(k)}-${d(k + 1)} = ${dk}.$$<p>Et il y a bien $${cnt}$ bloc${cnt > 1 ? "s" : ""} de taille $${k}$. C'est le sens de Q2 b et Q10 : $\delta_k$ compte les blocs de taille $k$, et ne dépend que de $u$.</p>`.replace(/\$\{k\}/g, k).replace(/\$\{k - 1\}/g, k - 1).replace(/\$\{k \+ 1\}/g, k + 1).replace(/\$\{d\(k - 1\)\}/g, d(k - 1)).replace(/\$\{d\(k\)\}/g, d(k)).replace(/\$\{d\(k \+ 1\)\}/g, d(k + 1)).replace(/\$\{dk\}/g, dk).replace(/\$\{cnt\}/g, cnt).replace(/\$\{cnt > 1 \? "s" : ""\}/g, cnt > 1 ? "s" : "")
      });
    } else {
      const bad = B.some(({ r: x, a }) => Array.from({ length: x }, (_, j) => (a + j) % 4).includes(0));
      labShell(host, {
        intro: L`<p>Dans la version graduée, chaque vecteur de base est aussi un vecteur propre de $h$. Sous chaque $e_j$, on lit sa valeur propre (ici $\zeta = i$). Une chaîne qui commence avec $\zeta^a$ continue avec $\zeta^{a+1},\zeta^{a+2},\dots$ : $u$ fait monter d'un cran (Q11 b). Choisis le départ $a$ de chaque bloc.</p>`,
        ctl, math: L`$$\begin{array}{l}` + chains.join(L` \\[10pt] `) + L`\end{array}$$`,
        expl: L`<p>En Q14, $\ker(h-\mathrm{id}) = \{0\}$ : la valeur propre $1 = \zeta^0$ est interdite (en rouge). Une chaîne doit donc rester dans $V_1\to V_2\to V_3$ et s'arrêter avant de revenir à $1$, ce qui laisse exactement six types : $(1,1),(1,2),(1,3),(2,1),(2,2),(3,1)$.</p>` + (bad ? L`<p><b>Configuration actuelle : impossible en Q14</b> (un vecteur a la valeur propre $1$).</p>` : L`<p><b>Configuration actuelle : compatible avec Q14.</b></p>`)
      });
    }
    labControls(host, st, draw);
  }
  draw();
}

/* 7. Graphes aléatoires et fonction de seuil */
function labSeuil(host) {
  const st = { v: "e", n: 40, c: 1, seed: 1 };
  const props = { e: { t: "au moins une arête", w: 2, d: 1, wt: "2" }, s2: { t: "une étoile à 2 branches", w: 1.5, d: 2, wt: L`\frac32` }, s3: { t: "une étoile à 3 branches", w: 4 / 3, d: 3, wt: L`\frac43` } };
  let rs = 1; const rnd = () => { rs = (rs * 1103515245 + 12345) & 0x7fffffff; return rs / 0x7fffffff; };
  const sample = (n, p) => { const deg = new Array(n).fill(0), E = []; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (rnd() < p) { deg[i]++; deg[j]++; E.push([i, j]); } return { deg, E }; };
  function draw() {
    const P = props[st.v], n = st.n, c = st.c, p = Math.min(1, c * Math.pow(n, -P.w));
    rs = 1000 + st.seed * 7919; const g = sample(n, p); let hit = -1; g.deg.forEach((x, i) => { if (hit < 0 && x >= P.d) hit = i; });
    const W = 260, cx = 130, R = 110, pos = i => [cx + R * Math.cos(2 * Math.PI * i / n - Math.PI / 2), cx + R * Math.sin(2 * Math.PI * i / n - Math.PI / 2)];
    let s = ""; g.E.forEach(([i, j]) => { const [x1, y1] = pos(i), [x2, y2] = pos(j), on = hit >= 0 && (i === hit || j === hit); s += `<line x1="${fx(x1)}" y1="${fx(y1)}" x2="${fx(x2)}" y2="${fx(y2)}" class="lab-e${on ? " on" : ""}"/>`; });
    for (let i = 0; i < n; i++) { const [x, y] = pos(i); s += `<circle cx="${fx(x)}" cy="${fx(y)}" r="${n > 60 ? 2.5 : 4}" class="lab-v${i === hit ? " on" : ""}" style="stroke-width:1.2"/>`; }
    const grid = Array.from({ length: 21 }, (_, k) => -1.5 + k * 0.15), T = 60; rs = 777 + n;
    const pts = grid.map(l => { const pp = Math.min(1, Math.pow(10, l) * Math.pow(n, -P.w)); let ok = 0; for (let t = 0; t < T; t++) if (sample(n, pp).deg.some(x => x >= P.d)) ok++; return [l, ok / T]; });
    const CW = 340, CH = 200, X = l => 44 + (l + 1.5) / 3 * (CW - 60), Y = v => CH - 30 - v * (CH - 50);
    let cs = `<line x1="44" y1="${Y(0)}" x2="${CW - 10}" y2="${Y(0)}" class="lab-ax"/><line x1="44" y1="${Y(0)}" x2="44" y2="${Y(1) - 6}" class="lab-ax"/>`;
    [[0, "0"], [0.5, "0,5"], [1, "1"]].forEach(([v, t]) => { cs += `<text x="38" y="${fx(Y(v) + 4)}" text-anchor="end" class="lab-vt sm">${t}</text>`; });
    [[-1, "0,1"], [0, "1"], [1, "10"]].forEach(([l, t]) => { cs += `<text x="${fx(X(l))}" y="${Y(0) + 17}" text-anchor="middle" class="lab-vt sm">${t}</text>`; });
    cs += `<text x="${CW - 10}" y="${Y(0) - 6}" text-anchor="end" class="lab-vt sm">c</text><path d="${pts.map(([l, v], k) => `${k ? "L" : "M"}${fx(X(l))} ${fx(Y(v))}`).join(" ")}" style="fill:none;stroke:var(--blue);stroke-width:2.4"/><line x1="${fx(X(Math.log10(c)))}" y1="${Y(0)}" x2="${fx(X(Math.log10(c)))}" y2="${Y(1)}" style="stroke:var(--gold-ink);stroke-dasharray:4 3;stroke-width:1.5"/>`;
    const ctl = labSegH("v", Object.entries(props).map(([k, o]) => [k, o.t[0].toUpperCase() + o.t.slice(1)]), st.v) + stepper("n", L`$n$`, n, 10, 120, 10) + labSegH("c", [[0.1, "$c = 0{,}1$"], [0.3, "$0{,}3$"], [1, "$1$"], [3, "$3$"], [10, "$10$"]], c) + `<button type="button" class="btn btn-ghost btn-sm" data-re="1">Tirer un autre graphe</button>`;
    labShell(host, {
      intro: L`<p>On tire un graphe à $n$ sommets où chaque arête est présente avec probabilité $p_n = c\,n^{-\omega_0}$, c'est-à-dire $c$ fois la fonction de seuil. Pour « ${P.t} », $\omega_0 = ${P.wt}$. La courbe montre la probabilité (estimée par simulation) que le graphe ait cette propriété, en fonction de $c$.</p>`.replace("${P.t}", P.t).replace("${P.wt}", P.wt),
      ctl, math: svgWrap(W, W, s, "Graphe aléatoire"), extra: svgWrap(CW, CH, cs, "Courbe de seuil"),
      expl: L`<p>Ici $n = ${n}$ et $p_n = ${tnum(c)}\times${n}^{-${P.wt}} = ${tnum(p, 5)}$ : le graphe tiré a $${g.E.length}$ arête${g.E.length > 1 ? "s" : ""}. ${hit >= 0 ? "La propriété est réalisée (sommet en jaune)." : "La propriété n'est pas réalisée."}</p><p>Quand $c\to0$ (c'est-à-dire $p_n = o(n^{-\omega_0})$), la probabilité tend vers $0$ ; quand $c\to+\infty$, elle tend vers $1$. C'est exactement la définition d'une fonction de seuil.</p>`.replace(/\$\{n\}/g, n).replace("${tnum(c)}", tnum(c)).replace("${P.wt}", P.wt).replace("${tnum(p, 5)}", tnum(p, 5)).replace("${g.E.length}", g.E.length).replace('${g.E.length > 1 ? "s" : ""}', g.E.length > 1 ? "s" : "").replace('${hit >= 0 ? "La propriété est réalisée (sommet en jaune)." : "La propriété n\'est pas réalisée."}', hit >= 0 ? "La propriété est réalisée (sommet en jaune)." : "La propriété n'est pas réalisée.")
    });
    labControls(host, st, draw);
    $("[data-re]", host).addEventListener("click", () => { st.seed++; draw(); });
  }
  draw();
}

function mountLab(host, spec) { ({ cycle: labCycle, kron: labKron, transfer: labTransfer, spec: labSpec, xi: labXi, jordan: labJordan, seuil: labSeuil })[spec.mode](host, spec); }
document.addEventListener("click", e => { const b = e.target.closest("[data-labo]"); if (!b) return; const t = document.getElementById("lab-" + b.dataset.labo); if (t) { t.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); t.classList.add("flash"); setTimeout(() => t.classList.remove("flash"), 1400); } });


/* ---------- Visualisations ---------- */
function tokens() {
  const cs = getComputedStyle(document.documentElement), g = k => cs.getPropertyValue(k).trim();
  const dark = matchMedia("(prefers-color-scheme: dark)").matches || document.documentElement.dataset.zone === "commando";
  return { line: g("--line"), muted: g("--muted"), ink: g("--ink"), bg: g("--bg"), c: dark ? [g("--yellow"), "#8FB3FF", "#C9D2EA"] : [g("--navy"), "#E0A200", "#7C88A8"] };
}
function niceStep(range, target) { const raw = range / target, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p; return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p; }
const fmt = v => { const a = Math.abs(v); return (a !== 0 && (a < 0.01 || a >= 1e4)) ? v.toExponential(1) : String(+v.toFixed(3)).replace(".", ","); };
function mountViz(host, spec) {
  if (spec.type === "lab") { const pb = host.closest(".panelbox"); if (pb) pb.id = "lab-" + spec.mode; return mountLab(host, spec); }
  if (spec.type === "dicho") return mountDicho(host);
  if (spec.type === "tige") return mountTige(host, spec);
  if (spec.type === "sismo") return mountSismo(host, spec);
  const p = {}; (spec.params || []).forEach(x => p[x.k] = x.v);
  host.innerHTML = `${(spec.params || []).length ? `<div class="viz-ctrl">${spec.params.map(x => `<div><label for="vz-${x.k}">${x.label}<output id="vo-${x.k}">${fmt(x.v)}${x.unit ? " " + x.unit : ""}</output></label><input type="range" id="vz-${x.k}" min="${x.min}" max="${x.max}" step="${x.step}" value="${x.v}"></div>`).join("")}</div>` : ""}
    <canvas class="viz-canvas" role="img" aria-label="${esc((spec.title || "Graphique").replace(/\$/g, ""))}"></canvas>
    <div class="viz-legend">${[...(spec.curves || spec.series || []).map((c, k) => `<span><i data-c="${k}"></i>${esc(c.label)}</span>`), ...(spec.hlines || []).concat(spec.vlines || []).map(l => `<span><i style="background:none;border-top:2px dashed currentColor;height:0"></i>${esc(l.label)}</span>`)].join("")}</div>`;
  const cv = $("canvas", host);
  (spec.params || []).forEach(x => $(`#vz-${x.k}`, host).addEventListener("input", ev => { p[x.k] = +ev.target.value; $(`#vo-${x.k}`, host).textContent = fmt(p[x.k]) + (x.unit ? " " + x.unit : ""); draw(); }));
  function draw() {
    const T = tokens();
    $$(".viz-legend i[data-c]", host).forEach(i => i.style.background = T.c[+i.dataset.c % 3]);
    const W = cv.clientWidth, H = cv.clientHeight; if (!W || !H) return;
    const dpr = Math.min(devicePixelRatio || 1, 2.5); cv.width = W * dpr; cv.height = H * dpr;
    const g = cv.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    const m = { l: 52, r: 18, t: 18, b: 40 }, pw = W - m.l - m.r, ph = H - m.t - m.b;
    const seq = spec.type === "seq";
    const [x0, x1] = seq ? [spec.n[0] - 0.6, spec.n[1] + 0.6] : spec.x, [y0, y1] = spec.y;
    const X = x => m.l + (x - x0) / (x1 - x0) * pw, Y = y => m.t + (1 - (y - y0) / (y1 - y0)) * ph;
    g.font = "500 12px " + getComputedStyle(document.body).fontFamily; g.lineWidth = 1;
    const sy = niceStep(y1 - y0, 5); g.textAlign = "right"; g.textBaseline = "middle";
    for (let v = Math.ceil(y0 / sy) * sy; v <= y1 + 1e-9; v += sy) { g.strokeStyle = T.line; g.beginPath(); g.moveTo(m.l, Y(v)); g.lineTo(W - m.r, Y(v)); g.stroke(); g.fillStyle = T.muted; g.fillText(fmt(+v.toFixed(10)), m.l - 8, Y(v)); }
    g.textAlign = "center"; g.textBaseline = "top";
    if (seq) { const st = Math.max(1, Math.ceil((spec.n[1] - spec.n[0]) / 10)); for (let n = spec.n[0]; n <= spec.n[1]; n += st) { g.fillStyle = T.muted; g.fillText(String(n), X(n), H - m.b + 10); } }
    else { const sx = niceStep(x1 - x0, 6); for (let v = Math.ceil(x0 / sx) * sx; v <= x1 + 1e-9; v += sx) { g.strokeStyle = T.line; g.beginPath(); g.moveTo(X(v), m.t); g.lineTo(X(v), H - m.b); g.stroke(); g.fillStyle = T.muted; g.fillText(fmt(+v.toFixed(10)), X(v), H - m.b + 10); } }
    if (spec.xlabel) { g.textAlign = "right"; g.fillStyle = T.muted; g.fillText(spec.xlabel, W - m.r, H - 16); }
    if (spec.ylabel) { g.textAlign = "left"; g.textBaseline = "top"; g.fillStyle = T.muted; g.fillText(spec.ylabel, m.l + 6, m.t + 2); }
    if (y0 < 0 && y1 > 0) { g.strokeStyle = T.muted; g.globalAlpha = .5; g.beginPath(); g.moveTo(m.l, Y(0)); g.lineTo(W - m.r, Y(0)); g.stroke(); g.globalAlpha = 1; }
    g.save(); g.beginPath(); g.rect(m.l, m.t, pw, ph); g.clip();
    if (seq) {
      const N = spec.n[1] - spec.n[0] + 1, bw = Math.max(2, pw / N * .62);
      spec.series.forEach((s, k) => {
        g.fillStyle = g.strokeStyle = T.c[k % 3];
        if (s.style === "bar") { for (let n = spec.n[0]; n <= spec.n[1]; n++) { const v = s.f(n, p); if (!isFinite(v)) continue; g.globalAlpha = .9; const yy = Y(Math.max(y0, Math.min(y1, v))); g.beginPath(); g.roundRect ? g.roundRect(X(n) - bw / 2, yy, bw, Y(Math.max(y0, 0)) - yy, [3, 3, 0, 0]) : g.rect(X(n) - bw / 2, yy, bw, Y(Math.max(y0, 0)) - yy); g.fill(); } g.globalAlpha = 1; }
        else { g.lineWidth = 2.5; g.beginPath(); let st = false; for (let n = spec.n[0]; n <= spec.n[1]; n++) { const v = s.f(n, p); if (!isFinite(v)) { st = false; continue; } st ? g.lineTo(X(n), Y(v)) : g.moveTo(X(n), Y(v)); st = true; } g.stroke(); for (let n = spec.n[0]; n <= spec.n[1]; n++) { const v = s.f(n, p); if (isFinite(v)) { g.beginPath(); g.arc(X(n), Y(v), 3, 0, 7); g.fill(); } } }
      });
    } else {
      (spec.curves || []).forEach((c, k) => {
        g.strokeStyle = T.c[k % 3]; g.lineWidth = k === 0 ? 3 : 2.4; g.lineJoin = "round"; g.beginPath(); let st = false;
        const steps = Math.max(200, Math.round(pw * 1.5));
        for (let s = 0; s <= steps; s++) { const x = x0 + (x1 - x0) * s / steps, v = c.f(x, p); if (!isFinite(v) || Math.abs(v) > 1e6) { st = false; continue; } const yy = Y(Math.max(y0 - (y1 - y0), Math.min(y1 + (y1 - y0), v))); st ? g.lineTo(X(x), yy) : g.moveTo(X(x), yy); st = true; }
        g.stroke();
      });
    }
    g.setLineDash([5, 5]); g.lineWidth = 1.6; g.strokeStyle = T.muted; g.fillStyle = T.muted;
    (spec.hlines || []).forEach(l => { const v = l.y(p); g.beginPath(); g.moveTo(m.l, Y(v)); g.lineTo(W - m.r, Y(v)); g.stroke(); g.textAlign = "right"; g.textBaseline = "bottom"; g.fillText(l.label, W - m.r - 6, Y(v) - 4); });
    (spec.vlines || []).forEach(l => { const v = l.x(p); g.beginPath(); g.moveTo(X(v), m.t); g.lineTo(X(v), H - m.b); g.stroke(); g.textAlign = "left"; g.textBaseline = "top"; g.fillText(l.label, X(v) + 6, m.t + 4); });
    g.restore(); g.setLineDash([]);
  }
  new ResizeObserver(draw).observe(cv);
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
  draw();
}
function mountDicho(host) {
  const L = [3, 7, 11, 15, 18, 23, 29, 31, 37, 42, 48, 53, 60, 64, 71];
  let x = 37, g, d, m, done, log;
  const reset = () => { g = 0; d = L.length - 1; m = -1; done = false; log = `On cherche <b>x = ${x}</b>. Au départ, g = 0 et d = ${L.length - 1}.`; };
  function tour() {
    if (done) return;
    if (g > d) { done = true; log = `g &gt; d : la zone est vide. <b>${x} n'est pas dans la liste.</b>`; return paint(); }
    m = Math.floor((g + d) / 2);
    if (L[m] === x) { done = true; log = `L[${m}] = ${L[m]} : <b>trouvé</b>, en ${count + 1} tour${count ? "s" : ""}.`; }
    else if (L[m] < x) { log = `L[${m}] = ${L[m]} &lt; ${x} : on garde la moitié droite, g = ${m + 1}.`; g = m + 1; }
    else { log = `L[${m}] = ${L[m]} &gt; ${x} : on garde la moitié gauche, d = ${m - 1}.`; d = m - 1; }
    count++; paint();
  }
  let count = 0;
  function paint() {
    host.innerHTML = `<div class="dicho">
      <div class="row" style="margin-bottom:14px"><span style="font-weight:700;font-size:14px">Valeur cherchée</span>${[37, 23, 40, 71].map(v => `<button type="button" class="chip" data-x="${v}" aria-pressed="${v === x}">${v}</button>`).join("")}</div>
      <div class="cells">${L.map((v, k) => `<div class="cell ${(k < g || k > d) && !(done && k === m && L[m] === x) ? "out" : ""} ${k === m ? (L[m] === x ? "hit" : "m") : ""}">${v}</div>`).join("")}</div>
      <div class="idx">${L.map((_, k) => `<span>${[k === g ? "g" : "", k === m ? "m" : "", k === d ? "d" : ""].filter(Boolean).join(" ")}</span>`).join("")}</div>
      <p class="log" aria-live="polite">${log}</p>
      <div class="row"><button class="btn btn-yellow btn-sm" type="button" data-a="tour" ${done ? "disabled style=\"opacity:.45\"" : ""}>Tour suivant ${I.arrow}</button><button class="btn btn-ghost btn-sm" type="button" data-a="reset">Recommencer</button><span style="margin-left:auto;font-size:13.5px;color:var(--muted)">${count} tour${count > 1 ? "s" : ""} · au plus ${Math.floor(Math.log2(L.length)) + 1}</span></div>
    </div>`;
    $$("[data-x]", host).forEach(b => b.addEventListener("click", () => { x = +b.dataset.x; count = 0; reset(); paint(); }));
    $("[data-a=tour]", host).addEventListener("click", tour);
    $("[data-a=reset]", host).addEventListener("click", () => { count = 0; reset(); paint(); });
  }
  reset(); paint();
}

/* ---------- Animations de physique ---------- */
function animControls(host, params, p) {
  return `${params.length ? `<div class="viz-ctrl">${params.map(x => `<div><label for="vz-${x.k}">${x.label}<output id="vo-${x.k}">${fmt(x.v)}${x.unit ? " " + x.unit : ""}</output></label><input type="range" id="vz-${x.k}" min="${x.min}" max="${x.max}" step="${x.step}" value="${x.v}"></div>`).join("")}</div>` : ""}`;
}
function bindSliders(host, params, p, onChange) {
  params.forEach(x => $(`#vz-${x.k}`, host).addEventListener("input", ev => { p[x.k] = +ev.target.value; $(`#vo-${x.k}`, host).textContent = fmt(p[x.k]) + (x.unit ? " " + x.unit : ""); onChange(); }));
}
function arrowTo(g, x1, y1, x2, y2, color, w) {
  const a = Math.atan2(y2 - y1, x2 - x1), L = Math.hypot(x2 - x1, y2 - y1); if (L < 2) return;
  g.strokeStyle = g.fillStyle = color; g.lineWidth = w || 2.4; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2 - 7 * Math.cos(a), y2 - 7 * Math.sin(a)); g.stroke();
  g.beginPath(); g.moveTo(x2, y2); g.lineTo(x2 - 11 * Math.cos(a - .42), y2 - 11 * Math.sin(a - .42)); g.lineTo(x2 - 11 * Math.cos(a + .42), y2 - 11 * Math.sin(a + .42)); g.closePath(); g.fill();
}
function canvasCtx(cv) {
  const W = cv.clientWidth, H = cv.clientHeight, dpr = Math.min(devicePixelRatio || 1, 2.5);
  if (cv.width !== Math.round(W * dpr)) { cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); }
  const g = cv.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H); return { g, W, H };
}
const tok = () => { const cs = getComputedStyle(document.documentElement), v = k => cs.getPropertyValue(k).trim(); return { ink: v("--ink"), muted: v("--muted"), line: v("--line"), blue: v("--blue"), red: v("--red"), gold: v("--gold-ink"), yellow: v("--yellow"), bg2: v("--bg-2") }; };

/* Perle sur une tige en rotation, vue de dessus */
function mountTige(host, spec) {
  const params = spec.params || [], p = {}; params.forEach(x => p[x.k] = x.v);
  host.innerHTML = animControls(host, params, p) + `<canvas class="viz-canvas anim" role="img" aria-label="Animation de la perle sur la tige en rotation, vue de dessus"></canvas>
    <div class="anim-bar"><button class="btn btn-yellow btn-sm" type="button" data-play>Lancer</button><button class="btn btn-ghost btn-sm" type="button" data-reset>Recommencer</button><span class="anim-info" aria-live="polite"></span></div>
    <div class="viz-legend"><span><i style="background:var(--red)"></i>Force d'inertie d'entraînement</span><span><i style="background:var(--gold-ink)"></i>Force de Coriolis</span><span><i style="background:var(--blue)"></i>Trajectoire vue du sol</span></div>`;
  const cv = $("canvas", host), info = $(".anim-info", host), play = $("[data-play]", host);
  const L = spec.l, r0 = spec.r0, l0 = spec.l0 || 0;
  let t, r, v, th, trail, running = false, out = false, last = 0;
  const reset = () => { t = 0; r = r0; v = 0; th = 0; trail = [[r0, 0]]; out = false; running = false; play.textContent = "Lancer"; info.textContent = ""; draw(); };
  function step(dt) {
    const w = p.w, kc = p.kc || 0, n = 40, h = dt / n;
    for (let i = 0; i < n && !out; i++) {
      const a = (w * w - kc) * r + kc * l0;
      v += a * h; r += v * h; th += w * h; t += h;
      if (Math.abs(r) >= L) { out = true; r = Math.sign(r) * L; }
    }
    trail.push([r, th]); if (trail.length > 1500) trail.shift();
    if (out) { running = false; play.textContent = "Lancer"; info.textContent = `La perle sort de la tige au bout de ${fmt(+t.toFixed(2))} s.`; }
    else info.textContent = `t = ${fmt(+t.toFixed(2))} s · r = ${fmt(+(r * 100).toFixed(1))} cm${spec.slow && spec.slow < 1 ? " · ralenti ×" + fmt(Math.round(1 / spec.slow)) : ""}`;
  }
  function draw() {
    if (!cv.isConnected) return;
    const T = tok(), { g, W, H } = canvasCtx(cv);
    const cx = W / 2, cy = H / 2, S = Math.min(W, H) * 0.44 / L;
    g.strokeStyle = T.line; g.lineWidth = 1; g.setLineDash([4, 5]);
    g.beginPath(); g.arc(cx, cy, L * S, 0, 7); g.stroke(); g.setLineDash([]);
    arrowTo(g, cx - L * S - 14, cy, cx + L * S + 22, cy, T.muted, 1.3); arrowTo(g, cx, cy + L * S + 14, cx, cy - L * S - 22, T.muted, 1.3);
    g.fillStyle = T.muted; g.font = "italic 14px serif"; g.fillText("x", cx + L * S + 14, cy + 18); g.fillText("y", cx + 8, cy - L * S - 14);
    g.strokeStyle = T.blue; g.lineWidth = 2; g.beginPath();
    trail.forEach(([rr, a], k) => { const X = cx + rr * S * Math.cos(a), Y = cy - rr * S * Math.sin(a); k ? g.lineTo(X, Y) : g.moveTo(X, Y); }); g.stroke();
    const c = Math.cos(th), sn = Math.sin(th);
    g.lineCap = "round"; g.strokeStyle = T.ink; g.lineWidth = 9; g.globalAlpha = .18;
    g.beginPath(); g.moveTo(cx - L * S * c, cy + L * S * sn); g.lineTo(cx + L * S * c, cy - L * S * sn); g.stroke(); g.globalAlpha = 1;
    g.lineWidth = 2; g.beginPath(); g.moveTo(cx - L * S * c, cy + L * S * sn); g.lineTo(cx + L * S * c, cy - L * S * sn); g.stroke(); g.lineCap = "butt";
    if ((p.kc || 0) > 0) { g.strokeStyle = T.muted; g.lineWidth = 1.5; g.beginPath(); const n = 14; for (let k = 0; k <= n; k++) { const s = r * k / n, off = (k % 2 ? 5 : -5) * (k > 0 && k < n ? 1 : 0); g.lineTo(cx + s * S * c - off * sn, cy - s * S * sn - off * c); } g.stroke(); }
    const bx = cx + r * S * c, by = cy - r * S * sn, w = p.w;
    const fie = w * w * r, fic = -2 * w * v, K = 90 / Math.max(1e-6, w * w * L), cap = q => Math.max(-130, Math.min(130, q));
    arrowTo(g, bx, by, bx + cap(fie * K) * c, by - cap(fie * K) * sn, T.red, 2.8);
    arrowTo(g, bx, by, bx + cap(fic * K) * (-sn), by - cap(fic * K) * c, T.gold, 2.8);
    g.fillStyle = T.yellow; g.strokeStyle = T.ink; g.lineWidth = 1.6; g.beginPath(); g.arc(bx, by, 8, 0, 7); g.fill(); g.stroke();
    g.fillStyle = T.ink; g.beginPath(); g.arc(cx, cy, 3.5, 0, 7); g.fill(); g.font = "italic 14px serif"; g.fillText("O", cx - 16, cy + 16);
  }
  function loop(ts) {
    if (!cv.isConnected) return;
    if (running) { const dt = Math.min(0.05, (ts - last) / 1000 || 0); step(dt * (spec.slow || 1)); }
    last = ts; draw(); if (running) requestAnimationFrame(loop);
  }
  play.addEventListener("click", () => { if (out) reset(); running = !running; play.textContent = running ? "Pause" : "Reprendre"; last = performance.now(); if (running) requestAnimationFrame(loop); });
  $("[data-reset]", host).addEventListener("click", reset);
  bindSliders(host, params, p, reset);
  new ResizeObserver(draw).observe(cv); matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
  reset();
}

/* Sismomètre : le sol bouge, la masse reste presque immobile si ω ≫ ω0 */
function mountSismo(host, spec) {
  const params = spec.params || [], p = {}; params.forEach(x => p[x.k] = x.v);
  host.innerHTML = animControls(host, params, p) + `<canvas class="viz-canvas anim tall" role="img" aria-label="Animation du sismomètre et de son enregistrement"></canvas>
    <div class="anim-bar"><button class="btn btn-yellow btn-sm" type="button" data-play>Pause</button><span class="anim-info" aria-live="polite"></span></div>
    <div class="viz-legend"><span><i style="background:var(--muted)"></i>Mouvement du sol z<sub>s</sub>(t)</span><span><i style="background:var(--blue)"></i>Enregistrement X(t)</span></div>`;
  const cv = $("canvas", host), info = $(".anim-info", host), play = $("[data-play]", host);
  let t = 0, running = true, last = performance.now();
  const resp = () => { const x = p.x, Q = p.Q, re = 1 - x * x, im = x / Q, den = re * re + im * im; return { G: x * x / Math.sqrt(den), phi: Math.atan2(-x * x * im, x * x * re) }; };
  function draw() {
    if (!cv.isConnected) return;
    const T = tok(), { g, W, H } = canvasCtx(cv), w = p.x, { G, phi } = resp();
    const zs = t2 => Math.cos(w * t2), X = t2 => G * Math.cos(w * t2 + phi), A = 26;
    const bx = Math.min(240, W * 0.42), gy = H - 40, z = zs(t) * A, base = gy - z;
    g.strokeStyle = T.muted; g.lineWidth = 1.2;
    for (let k = 0; k < bx; k += 10) { g.beginPath(); g.moveTo(k, base + 4); g.lineTo(k - 8, base + 14); g.stroke(); }
    g.beginPath(); g.moveTo(0, base + 4); g.lineTo(bx, base + 4); g.stroke();
    const left = bx * 0.18, right = bx * 0.82, top = base - (H - 90);
    g.strokeStyle = T.ink; g.lineWidth = 2; g.beginPath(); g.moveTo(left, top); g.lineTo(right, top); g.moveTo(left, top); g.lineTo(left, base); g.lineTo(right, base); g.stroke();
    const mid = (left + right) / 2, heq = (base - top) * 0.5, my = base - heq - X(t) * A;
    g.strokeStyle = T.muted; g.lineWidth = 1.5; g.beginPath(); const n = 12, y0 = top, y1 = my - 14;
    for (let k = 0; k <= n; k++) { const yy = y0 + (y1 - y0) * k / n, off = (k % 2 ? 9 : -9) * (k > 0 && k < n ? 1 : 0); k ? g.lineTo(mid + off, yy) : g.moveTo(mid, yy); } g.stroke();
    g.strokeStyle = T.ink; g.lineWidth = 1.6; g.beginPath(); g.moveTo(mid, my + 14); g.lineTo(mid, my + 34); g.moveTo(mid - 10, my + 34); g.lineTo(mid + 10, my + 34); g.stroke();
    g.beginPath(); g.moveTo(mid - 14, base - 46); g.lineTo(mid - 14, base - 18); g.lineTo(mid + 14, base - 18); g.lineTo(mid + 14, base - 46); g.moveTo(mid, base - 18); g.lineTo(mid, base); g.stroke();
    g.fillStyle = T.yellow; g.strokeStyle = T.ink; g.fillRect(mid - 26, my - 14, 52, 28); g.strokeRect(mid - 26, my - 14, 52, 28);
    g.strokeStyle = T.line; g.setLineDash([3, 4]); g.beginPath(); g.moveTo(mid + 30, my); g.lineTo(bx + 10, my); g.stroke(); g.setLineDash([]);
    const cx0 = bx + 30, cw = W - cx0 - 14, cyM = H / 2, span = 12;
    g.strokeStyle = T.line; g.lineWidth = 1; g.beginPath(); g.moveTo(cx0, cyM); g.lineTo(cx0 + cw, cyM); g.stroke();
    const plot = (f, color, wd) => { g.strokeStyle = color; g.lineWidth = wd; g.beginPath(); for (let k = 0; k <= 300; k++) { const tt = t - span + span * k / 300, xx = cx0 + cw * k / 300, yy = cyM - f(tt) * A * 1.6; k ? g.lineTo(xx, yy) : g.moveTo(xx, yy); } g.stroke(); };
    plot(zs, T.muted, 1.6); plot(X, T.blue, 2.6);
    g.fillStyle = T.muted; g.font = "12px sans-serif"; g.fillText("sismogramme", cx0, 18);
    info.textContent = `ω/ω₀ = ${fmt(w)} · amplitude enregistrée / amplitude du sol = ${fmt(+G.toFixed(2))}`;
  }
  function loop(ts) { if (!cv.isConnected) return; if (running) t += Math.min(0.05, (ts - last) / 1000) * 2.2; last = ts; draw(); requestAnimationFrame(loop); }
  play.addEventListener("click", () => { running = !running; play.textContent = running ? "Pause" : "Reprendre"; });
  bindSliders(host, params, p, draw);
  matchMedia("(prefers-reduced-motion: reduce)").matches && (running = false, play.textContent = "Lancer");
  requestAnimationFrame(loop);
}

/* Lemme · tableau de bord : suivi du travail (exercices faits, temps, ressenti) et préparation aux concours.
   Tout est stocké dans le navigateur (localStorage). Chargé avant app.js : les fonctions n'utilisent
   les constantes d'app.js (EXERCISES, BANKS, ...) qu'au moment où elles sont appelées. */

/* ---------- Stockage ---------- */
const DS = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const dayKey = (t = Date.now()) => { const d = new Date(t); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; };

/* Journal des exercices faits : [horodatage, id, +1 ou -1] */
function trackDone(id, delta) {
  const log = DS.get("lemme-log", []);
  log.push([Date.now(), id, delta]);
  DS.set("lemme-log", log.slice(-5000));
}
/* Ressenti : 1 facile, 2 moyen, 3 difficile */
const confOf = id => DS.get("lemme-conf", {})[id] || 0;
function setConf(id, v) { const c = DS.get("lemme-conf", {}); if (v) c[id] = v; else delete c[id]; DS.set("lemme-conf", c); }

/* Temps passé sur les pages d'exercice (onglet visible uniquement, 45 min max par visite) */
const TT = { id: null, t0: 0, acc: 0 };
function ttFlush() {
  if (!TT.id || !TT.t0) return;
  const s = Math.min((Date.now() - TT.t0) / 1000, 2700 - TT.acc);
  TT.t0 = document.visibilityState === "visible" ? Date.now() : 0;
  if (s < 5) return;
  TT.acc += s;
  const per = DS.get("lemme-time", {}), days = DS.get("lemme-days", {}), k = dayKey();
  per[TT.id] = Math.round((per[TT.id] || 0) + s); days[k] = Math.round((days[k] || 0) + s);
  DS.set("lemme-time", per); DS.set("lemme-days", days);
}
function trackRoute(h) {
  ttFlush();
  const m = /^e-([a-z0-9-]+)$/.exec(h);
  TT.id = m ? m[1] : null; TT.t0 = m && document.visibilityState === "visible" ? Date.now() : 0; TT.acc = 0;
}
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") { if (TT.id) TT.t0 = Date.now(); } else ttFlush(); });
setInterval(() => { if (document.visibilityState === "visible") ttFlush(); }, 30000);
addEventListener("pagehide", ttFlush);

/* ---------- Modèle ---------- */
const DMATS = [
  { m: "Mathématiques", subj: ["maths", "kholles", "xens", "oraux"], href: "#s-maths" },
  { m: "Physique", subj: ["physique"], href: "#s-physique" },
  { m: "Chimie", subj: ["chimie"], href: "#s-chimie" },
  { m: "Sciences industrielles", subj: ["si"], href: "#s-si" },
  { m: "Informatique", subj: ["info"], href: "#s-info" },
  { m: "Langues", subj: ["anglais"], href: "#s-anglais" }
];
/* Niveau attendu par banque (score brut nécessaire pour être « prêt ») */
const BAR = { "X-ENS": 0.9, "Centrale-Supélec": 0.8, "Mines-Ponts": 0.8, "CCINP": 0.62, "e3a-Polytech": 0.55, "CNC": 0.65 };
const CONFW = { 1: 1, 2: 0.6, 3: 0.25 };
function dashPrefs() {
  const p = DS.get("lemme-dash", {});
  const now = new Date(), y = now.getMonth() > 4 ? now.getFullYear() + 1 : now.getFullYear();
  return { fil: p.fil || "mp", bank: p.bank || "Mines-Ponts", goal: p.goal || 10, exam: p.exam || `${y}-04-15` };
}
function setPref(k, v) { const p = DS.get("lemme-dash", {}); p[k] = v; DS.set("lemme-dash", p); }
const matOfEx = e => e.subj === "annales" ? matOf(ANN()[e.chap] || { epreuve: "" }) : (DMATS.find(d => d.subj.includes(e.subj)) || {}).m;

function model() {
  const pref = dashPrefs(), F = FIL[pref.fil];
  const done = EXERCISES.filter(e => doneN(e.id));
  const conf = DS.get("lemme-conf", {}), log = DS.get("lemme-log", []), days = DS.get("lemme-days", {}), time = DS.get("lemme-time", {});
  /* couverture par matière (hors annales) */
  const cover = DMATS.map(d => {
    const all = EXERCISES.filter(e => d.subj.includes(e.subj)), n = all.filter(e => doneN(e.id)).length;
    return { ...d, total: all.length, n, p: all.length ? n / all.length : 0, need: Math.min(all.length, Math.max(4, Math.ceil(all.length * 0.5))) };
  });
  /* annales de la filière */
  const annF = EXERCISES.filter(e => e.subj === "annales" && ANN()[e.chap] && fils(ANN()[e.chap]).includes(F));
  const mastery = done.length ? done.reduce((a, e) => a + (CONFW[conf[e.id]] || 0.6), 0) / done.length : 0;
  const ready = BANKS.map(b => {
    const parts = annF.filter(e => ANN()[e.chap].bank === b.name);
    const mats = [...new Set(parts.map(e => matOfEx(e)))];
    const used = cover.filter(c => (mats.length ? mats : ["Mathématiques", "Physique"]).includes(c.m) && c.total);
    const P = used.length ? used.reduce((a, c) => a + Math.min(1, c.n / c.need), 0) / used.length : 0;
    const pool = parts.length ? parts : annF;
    const A = pool.length ? pool.filter(e => doneN(e.id)).length / pool.length : 0;
    const raw = 0.5 * P + 0.3 * A + 0.2 * mastery;
    return { b, P, A, M: mastery, raw, score: Math.min(100, Math.round(100 * raw / (BAR[b.name] || 0.75))), nParts: parts.length, own: parts.length > 0 };
  });
  /* activité par jour : exercices faits (journal) et minutes de travail */
  const perDay = {};
  log.forEach(([t, , d]) => { const k = dayKey(t); perDay[k] = (perDay[k] || 0) + d; });
  const firstDone = {};
  log.forEach(([t, id, d]) => { if (d > 0 && !(id in firstDone)) firstDone[id] = t; });
  return { pref, F, done, conf, log, days, time, cover, annF, mastery, ready, perDay, firstDone };
}

/* ---------- Petits composants ---------- */
const DAY = 864e5;
const fmtH = s => s >= 3600 ? `${Math.floor(s / 3600)} h ${String(Math.round(s % 3600 / 60)).padStart(2, "0")}` : `${Math.round(s / 60)} min`;
const fmtDate = t => new Date(t).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
const tipAttr = s => ` data-tip="${String(s).replace(/"/g, "&quot;")}" tabindex="0"`;
const status = s => s >= 75 ? ["ok", "Prêt", "M4 9l3 3 7-7"] : s >= 45 ? ["mid", "En bonne voie", "M4 9h10"] : ["low", "À construire", "M9 4v6M9 13v1"];
function ring(score, size = 132) {
  const r = size / 2 - 9, c = 2 * Math.PI * r, [k] = status(score);
  return `<svg class="ring ${k}" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" aria-hidden="true"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="rtrack"/>${score > 0 ? "" : "<!--"}<circle cx="${size / 2}" cy="${size / 2}" r="${r}" class="rval" stroke-dasharray="${(c * score / 100).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>${score > 0 ? "" : "-->"}</svg>`;
}
const badge = score => { const [k, lab, d] = status(score); return `<span class="rbadge ${k}"><svg viewBox="0 0 18 18" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>${lab}</span>`; };
const meter = (lab, v, hint) => `<div class="dmeter"${tipAttr(hint)}><span class="dml">${lab}</span><span class="dmbar"><span style="width:${Math.round(v * 100)}%"></span></span><span class="dmv">${Math.round(v * 100)} %</span></div>`;

/* Exercices faits par semaine (8 semaines) avec la ligne d'objectif */
function weekBars(M) {
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const mon = now.getTime() - ((now.getDay() + 6) % 7) * DAY, N = 8;
  const weeks = [...Array(N)].map((_, i) => { const a = mon - (N - 1 - i) * 7 * DAY, b = a + 7 * DAY; const n = M.log.filter(([t, , d]) => t >= a && t < b).reduce((s, [, , d]) => s + d, 0); return { a, n: Math.max(0, n) }; });
  const H = 170, X0 = 34, BW = 34, G = 22, max = Math.max(M.pref.goal, ...weeks.map(w => w.n), 4), Y = v => 26 + (H - 26) * (1 - v / max);
  const ticks = [0, Math.round(max / 2), max];
  let s = ticks.map(v => `<line class="grid" x1="${X0}" x2="${X0 + N * (BW + G)}" y1="${Y(v)}" y2="${Y(v)}"/><text class="axt" x="${X0 - 8}" y="${Y(v) + 4}" text-anchor="end">${v}</text>`).join("");
  weeks.forEach((w, i) => {
    const x = X0 + 10 + i * (BW + G), y = Y(w.n), hgt = H - y;
    s += hgt > 0 ? `<path class="bar${i === N - 1 ? " cur" : ""}" d="M${x},${H} V${y + 4} q0,-4 4,-4 h${BW - 8} q4,0 4,4 V${H} Z"${tipAttr(`Semaine du ${fmtDate(w.a)} : ${w.n} exercice${w.n > 1 ? "s" : ""}`)}/>` : `<rect class="hit" x="${x}" y="${H - 6}" width="${BW}" height="6"${tipAttr(`Semaine du ${fmtDate(w.a)} : aucun exercice`)}/>`;
    s += `<text class="axt" x="${x + BW / 2}" y="${H + 18}" text-anchor="middle">${fmtDate(w.a)}</text>`;
  });
  s += `<line class="goal" x1="${X0}" x2="${X0 + N * (BW + G)}" y1="${Y(M.pref.goal)}" y2="${Y(M.pref.goal)}"/><text class="goalt" x="${X0 + N * (BW + G)}" y="${Y(M.pref.goal) - 6}" text-anchor="end">objectif : ${M.pref.goal}</text>`;
  const table = `<details class="dtable"><summary>Voir les données</summary><table class="vals"><tr><th>Semaine du</th><th>Exercices faits</th></tr>${weeks.map(w => `<tr><td>${fmtDate(w.a)}</td><td>${w.n}</td></tr>`).join("")}</table></details>`;
  return `<svg class="wbars" viewBox="0 0 ${X0 + N * (BW + G) + 6} ${H + 28}" role="img" aria-label="Exercices faits par semaine, huit dernières semaines">${s}<line class="base" x1="${X0}" x2="${X0 + N * (BW + G)}" y1="${H}" y2="${H}"/></svg>${table}`;
}

/* Rythme et projection vers « prêt » pour le concours visé */
function projection(M, R) {
  const four = M.log.filter(([t, , d]) => t > Date.now() - 28 * DAY).reduce((s, [, , d]) => s + d, 0) / 4;
  const exam = new Date(M.pref.exam + "T08:00:00"), daysLeft = Math.ceil((exam - Date.now()) / DAY);
  if (R.score >= 75) return { four, daysLeft, txt: `Tu as atteint le niveau « prêt » pour ${R.b.name}. Garde le rythme pour consolider.` };
  if (four < 0.5) return { four, daysLeft, txt: `Pas encore assez d'activité récente pour une projection. Marque tes exercices comme faits : la courbe apparaîtra dès la première semaine.` };
  /* nombre d'exercices supplémentaires pour atteindre 75 %, en supposant que chaque exercice fait améliore le score comme la moyenne actuelle */
  const perEx = M.done.length ? R.score / M.done.length : 1.2;
  const need = Math.ceil((75 - R.score) / Math.max(0.15, perEx)), weeks = need / four, eta = Date.now() + weeks * 7 * DAY;
  const ok = eta < exam.getTime();
  return { four, daysLeft, ok, eta, txt: `À ton rythme actuel (${four.toFixed(1).replace(".", ",")} exercice${four >= 2 ? "s" : ""} par semaine), tu atteindrais le niveau « prêt » pour ${R.b.name} vers le <b>${new Date(eta).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</b>, ${ok ? "avant les écrits" : "<b>après</b> les écrits : il faut accélérer"}.` };
}

/* Exercices à revoir : ressenti difficile, ou fait il y a longtemps avec un ressenti moyen */
function toReview(M) {
  const last = {}; M.log.forEach(([t, id, d]) => { if (d > 0) last[id] = t; });
  return M.done.map(e => {
    const c = M.conf[e.id] || 0, age = last[e.id] ? (Date.now() - last[e.id]) / DAY : 30;
    const pri = c === 3 ? 3 + age / 7 : c === 2 && age > 14 ? 1 + age / 30 : age > 45 ? age / 60 : 0;
    return { e, c, age, pri };
  }).filter(x => x.pri > 0).sort((a, b) => b.pri - a.pri).slice(0, 5);
}
/* Suggestions : la matière la plus faible, le concours visé, un classique */
function nextSteps(M, R) {
  const out = [];
  const weak = M.cover.filter(c => c.total).sort((a, b) => a.n / a.need - b.n / b.need)[0];
  if (weak) { const e = EXERCISES.find(x => weak.subj.includes(x.subj) && !doneN(x.id)); if (e) out.push({ why: `Ta matière la moins travaillée : ${weak.m}`, e }); }
  const part = M.annF.find(e => ANN()[e.chap].bank === R.b.name && !doneN(e.id)) || M.annF.find(e => !doneN(e.id));
  if (part) out.push({ why: `Un sujet de concours (${ANN()[part.chap].bank} ${ANN()[part.chap].annee})`, e: part });
  const cl = EXERCISES.find(x => x.classique && !doneN(x.id) && !out.some(o => o.e === x));
  if (cl) out.push({ why: "Un grand classique", e: cl });
  return out;
}

/* ---------- Page ---------- */
function dashPage() {
  ttFlush();
  const M = model(), P = M.pref;
  const R = M.ready.find(r => r.b.name === P.bank) || M.ready[0];
  const proj = projection(M, R), rev = toReview(M), nxt = nextSteps(M, R);
  const week = Math.max(0, M.log.filter(([t]) => t > Date.now() - 7 * DAY).reduce((s, [, , d]) => s + d, 0));
  const week7 = Object.entries(M.days).filter(([k]) => k >= dayKey(Date.now() - 6 * DAY)).reduce((s, [, v]) => s + v, 0);
  let streak = 0; for (let i = 0; i < 400; i++) { const k = dayKey(Date.now() - i * DAY); if ((M.perDay[k] || 0) > 0 || (M.days[k] || 0) >= 300) streak++; else if (i > 0) break; }
  const [sk, slab] = status(R.score);
  /* 8 semaines */
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const mon = now.getTime() - ((now.getDay() + 6) % 7) * DAY;
  const weeks = [...Array(8)].map((_, i) => { const a = mon - (7 - i) * 7 * DAY, b = a + 7 * DAY; return { a, n: Math.max(0, M.log.filter(([t]) => t >= a && t < b).reduce((s, [, , d]) => s + d, 0)) }; });
  const wmax = Math.max(P.goal, ...weeks.map(w => w.n), 1);
  /* à faire : d'abord ce qui est à revoir, puis les suggestions */
  const todo = [...rev.slice(0, 3).map(x => ({ e: x.e, why: x.c === 3 ? "À revoir · jugé difficile" : `À revoir · fait il y a ${Math.round(x.age)} jours` })), ...nxt.map(x => ({ e: x.e, why: x.why }))].filter((x, i, a) => a.findIndex(y => y.e === x.e) === i).slice(0, 5);
  const bankOpts = BANKS.map(b => `<option${b.name === P.bank ? " selected" : ""}>${esc(b.name)}</option>`).join("");
  const stat = (v, l) => `<div class="dbs-i"><b>${v}</b><span>${l}</span></div>`;

  return phead({ crumb: [["Tableau de bord"]], title: "Tableau de bord" }) + `<div class="wrap db">
${M.done.length ? `
  <section class="db-sum">
    <div class="db-main">
      <label class="db-target">Préparation pour <select data-dpref="bank" aria-label="Concours visé">${bankOpts}</select> <span>en ${M.F}</span></label>
      <div class="db-score"><b data-count="${R.score}">${R.score}</b><span>%</span><em class="db-st ${sk}">${slab}</em></div>
      <div class="db-bar" role="img" aria-label="Score ${R.score} sur 100, seuil prêt à 75"><span class="db-fill" style="--w:${R.score}%"></span><i style="left:75%"></i></div>
      <p class="db-proj">${proj.txt}</p>
    </div>
    <div class="db-stats">
      ${stat(M.done.length, `exercices faits${week ? `, dont ${week} cette semaine` : ""}`)}
      ${stat(fmtH(week7), "de travail sur 7 jours")}
      ${stat(`${streak} j`, streak > 1 ? "d'affilée" : "de série")}
      ${stat(Math.max(0, proj.daysLeft), "jours avant les écrits")}
    </div>
  </section>

  <div class="db-grid">
    <section class="db-card">
      <h2>Exercices par semaine</h2>
      <div class="db-weeks" role="img" aria-label="Exercices faits par semaine sur les huit dernières semaines">
        <span class="db-goal" style="--g:${(P.goal / wmax).toFixed(3)}"><em>objectif ${P.goal}</em></span>
        ${weeks.map((w, i) => `<div class="db-w${i === 7 ? " cur" : ""}"${tipAttr(`Semaine du ${fmtDate(w.a)} : ${w.n} exercice${w.n > 1 ? "s" : ""}`)}><span class="db-wb" style="--h:${(100 * w.n / wmax).toFixed(1)}%;--d:${i * 40}ms">${w.n ? `<b>${w.n}</b>` : ""}</span><span class="db-wl">${i === 7 ? "cette sem." : fmtDate(w.a)}</span></div>`).join("")}
      </div>
    </section>
    <section class="db-card">
      <h2>Par matière</h2>
      <div class="db-mats">${M.cover.filter(c => c.total).map((c, i) => `<a class="db-m" href="${c.href}"><span class="db-ml">${c.m}</span><span class="db-mb"><span style="--w:${Math.round(c.p * 100)}%;--d:${i * 50}ms"></span></span><span class="db-mv">${c.n}<small> / ${c.total}</small></span></a>`).join("")}</div>
    </section>
  </div>

` : `
  <section class="db-start">
    <div>
      <h2>Ton suivi démarre au premier exercice</h2>
      <p>À la fin d'un exercice, clique sur « Marquer comme fait ». Ce tableau calcule alors ta progression vers <select data-dpref="bank" aria-label="Concours visé">${bankOpts}</select> en ${M.F}. Tout reste sur ton appareil.</p>
      ${todo[0] ? `<a class="btn btn-navy" href="#e-${todo[0].e.id}">Commencer par « ${esc(todo[0].e.title)} » ${I.arrow}</a>` : ""}
    </div>
    <div class="db-start-n"><b>${Math.max(0, proj.daysLeft)}</b><span>jours avant les écrits</span></div>
  </section>
`}
  <section class="db-card">
    <h2>À faire ensuite</h2>
    ${todo.length ? `<ol class="db-todo">${todo.map(x => `<li><a href="#e-${x.e.id}"><span class="db-tt">${esc(x.e.title)}</span><span class="db-tw">${esc(x.why)}</span>${I.arrow}</a></li>`).join("")}</ol>` : `<p class="db-note">Tout est fait. Impressionnant.</p>`}
  </section>

  <details class="db-card db-more">
    <summary>Réglages, sauvegarde et calcul du score</summary>
    <div class="db-set">
      <div class="db-f"><span id="dl-fil">Filière</span><div class="filters" role="group" aria-labelledby="dl-fil">${Object.keys(FIL).map(k => `<button type="button" class="sbtn" data-dfil="${k}" aria-pressed="${k === P.fil}">${FIL[k]}</button>`).join("")}</div></div>
      <label class="db-f"><span>Date des écrits</span><input type="date" data-dpref="exam" value="${P.exam}"></label>
      <label class="db-f"><span>Objectif par semaine</span><input type="number" min="1" max="99" data-dpref="goal" value="${P.goal}"></label>
    </div>
    <div class="drow"><button type="button" class="btn btn-ghost btn-sm" data-dexport>Exporter ma progression</button><label class="btn btn-ghost btn-sm dimport">Importer un fichier<input type="file" accept="application/json" data-dimport hidden></label><button type="button" class="linkbtn" data-dreset>Tout effacer</button></div>
    <p class="dmsg" role="status" aria-live="polite"></p>
    <p class="db-note">Le score combine le programme travaillé (50 %), les sujets de la banque faits dans ta filière (30 %) et ton ressenti sur les exercices faits (20 %), puis le compare au niveau attendu : X-ENS 90 %, Centrale et Mines-Ponts 80 %, CNC 65 %, CCINP 62 %, e3a 55 %. Au-dessus de 75 %, tu es prêt. C'est un indicateur de travail, pas une prédiction.</p>
  </details>
  <div class="dtip" role="tooltip" hidden></div>
</div>`;
}

function wireDash() {
  const host = $(".db", app); if (!host) return;
  const re = () => { const y = scrollY; render(true); scrollTo(0, y); host.classList.add("still"); };
  $$("[data-dfil]", host).forEach(b => b.addEventListener("click", () => { setPref("fil", b.dataset.dfil); re(); }));
  $$("[data-dpref]", host).forEach(i => i.addEventListener("change", () => { let v = i.value; if (i.type === "number") v = Math.max(1, Math.min(99, +v || 10)); setPref(i.dataset.dpref, v); re(); }));
  /* animation d'entrée : barres et compteur */
  const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cnt = $("[data-count]", host);
  if (rm || dashSeen) host.classList.add("in");
  else {
    requestAnimationFrame(() => requestAnimationFrame(() => host.classList.add("in")));
    if (cnt) {
      const to = +cnt.dataset.count, t0 = performance.now(), D = 900;
      const step = t => { const k = Math.min(1, (t - t0) / D), e = 1 - Math.pow(1 - k, 3); cnt.textContent = Math.round(to * e); if (k < 1) requestAnimationFrame(step); };
      cnt.textContent = "0"; requestAnimationFrame(step);
    }
  }
  dashSeen = true;
  const msg = $(".dmsg", host);
  const KEYS = ["lemme-done", "lemme-log", "lemme-conf", "lemme-time", "lemme-days", "lemme-dash"];
  $("[data-dexport]", host).addEventListener("click", () => {
    const data = { app: "lemme", v: 1, date: new Date().toISOString() }; KEYS.forEach(k => data[k] = DS.get(k, null));
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: "application/json" })); a.download = `lemme-progression-${dayKey()}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    msg.textContent = "Fichier exporté.";
  });
  $("[data-dimport]", host).addEventListener("change", ev => {
    const f = ev.target.files[0]; if (!f) return;
    f.text().then(t => { const d = JSON.parse(t); if (d.app !== "lemme") throw 0; KEYS.forEach(k => { if (d[k] != null) DS.set(k, d[k]); }); location.reload(); })
      .catch(() => { msg.textContent = "Ce fichier n'est pas une sauvegarde Lemme. Choisis le fichier .json exporté depuis ce tableau de bord."; });
  });
  $("[data-dreset]", host).addEventListener("click", ev => {
    const b = ev.currentTarget;
    if (b.dataset.armed) { KEYS.forEach(k => { try { localStorage.removeItem(k); } catch (e) {} }); location.reload(); return; }
    b.dataset.armed = "1"; b.textContent = "Effacer toute ma progression ? Clique encore pour confirmer"; setTimeout(() => { if (b.isConnected) { delete b.dataset.armed; b.textContent = "Tout effacer"; } }, 5000);
  });
  const tip = $(".dtip", host);
  const show = (el, x, y) => { tip.textContent = el.dataset.tip; tip.hidden = false; const r = tip.getBoundingClientRect(); tip.style.left = Math.min(innerWidth - r.width - 8, Math.max(8, x - r.width / 2)) + "px"; tip.style.top = Math.max(8, y - r.height - 12) + "px"; };
  $$("[data-tip]", host).forEach(el => {
    el.addEventListener("pointermove", e => show(el, e.clientX, e.clientY));
    el.addEventListener("pointerleave", () => tip.hidden = true);
    el.addEventListener("focus", () => { const r = el.getBoundingClientRect(); show(el, r.left + r.width / 2, r.top); });
    el.addEventListener("blur", () => tip.hidden = true);
  });
}

/* ---------- Trouver un sujet ou un exercice (recherche + filtres) ---------- */
const TF = (() => { try { return JSON.parse(sessionStorage.getItem("lemme-trouver")) || {}; } catch (e) { return {}; } })();
const tfSave = () => { try { sessionStorage.setItem("lemme-trouver", JSON.stringify(TF)); } catch (e) {} };
const TFD = { mode: "sujets", q: "", fil: [], mat: [], bank: [], an: [], stars: [], yr: [], chap: null, sort: "recent" };
for (const k in TFD) if (!(k in TF)) TF[k] = Array.isArray(TFD[k]) ? [] : TFD[k];
const strip = s => String(s || "").replace(/<[^>]+>/g, " ").replace(/\$[^$]*\$/g, " ");
let SUJ = null, EXS = null;
function tfIndex() {
  if (SUJ) return;
  SUJ = ANN().map((c, i) => {
    const parts = EXERCISES.filter(e => e.subj === "annales" && e.chap === i);
    const lv = parts.length ? Math.round(parts.reduce((a, e) => a + (e.level || 3), 0) / parts.length) : 3;
    return { c, i, parts, lv, mat: matOf(c), fils: fils(c), txt: norm([c.t, c.n, c.titre, c.intro, c.epreuve, c.bank, c.annee, ...parts.map(e => e.title + " " + strip(e.enonce).slice(0, 400))].join(" ")) };
  });
  EXS = EXERCISES.filter(e => e.subj !== "annales").map(e => ({ e, mat: matOfEx(e) || "Mathématiques", txt: norm(e.title + " " + strip(e.enonce).slice(0, 600) + " " + ((sid(e.subj) || {}).name || "")) }));
}
const tog = (arr, v) => { const k = arr.indexOf(v); if (k < 0) arr.push(v); else arr.splice(k, 1); };
const qmatch = (txt, q) => norm(q).split(/\s+/).filter(Boolean).every(w => txt.includes(w));

function trouverPage() {
  return phead({ crumb: [["Trouver"]], title: "Trouver un sujet ou un exercice", photo: "hero" }) + `<div class="wrap tf">
  <div class="tfbar">
    <div class="tfmode" role="tablist" aria-label="Que cherches-tu ?">
      <button type="button" role="tab" data-tmode="sujets" aria-selected="${TF.mode === "sujets"}">Sujets de concours</button>
      <button type="button" role="tab" data-tmode="exos" aria-selected="${TF.mode === "exos"}">Exercices par chapitre</button>
    </div>
    <label class="tfsearch"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2.2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg><span class="sr">Mots-clés</span><input type="search" data-tq value="${esc(TF.q)}" placeholder="Mots-clés : Tchebychev, Viterbi, diagonalisation, pendule…" autocomplete="off"></label>
  </div>
  <div class="tfbody">
    <aside class="tfside" aria-label="Filtres"></aside>
    <section class="tfres" aria-live="polite"></section>
  </div>
</div>`;
}

function tfFilters() {
  const grp = (title, key, opts, extra = "") => `<div class="tfg"><div class="tfgh"><span>${title}</span>${TF[key].length ? `<button type="button" class="linkbtn" data-tclear="${key}">effacer</button>` : ""}</div><div class="tfchips">${opts.map(([v, lab, n]) => `<button type="button" class="tfchip" data-tf="${key}" data-v="${esc(String(v))}" aria-pressed="${TF[key].includes(v)}">${lab}${n != null ? `<small>${n}</small>` : ""}</button>`).join("")}</div>${extra}</div>`;
  const starsG = `<div class="tfg"><div class="tfgh"><span>Difficulté</span>${TF.stars.length ? `<button type="button" class="linkbtn" data-tclear="stars">effacer</button>` : ""}</div><div class="tfstars">${[1, 2, 3, 4, 5].map(k => `<button type="button" data-tf="stars" data-v="${k}" aria-pressed="${TF.stars.includes(k)}" aria-label="${k} étoile${k > 1 ? "s" : ""}"><span>${"★".repeat(k)}</span></button>`).join("")}</div><p class="tfhint">Plusieurs choix possibles.</p></div>`;
  if (TF.mode === "sujets") {
    const years = [...new Set(SUJ.map(s => s.c.annee))].sort((a, b) => b - a);
    return grp("Filière", "fil", Object.values(FIL).map(f => [f, f, SUJ.filter(s => s.fils.includes(f)).length]))
      + grp("Matière", "mat", [...MATS, "Autres"].filter(m => SUJ.some(s => s.mat === m)).map(m => [m, m, SUJ.filter(s => s.mat === m).length]))
      + starsG
      + grp("Concours", "bank", BANKS.filter(b => SUJ.some(s => s.c.bank === b.name)).map(b => [b.name, b.name, SUJ.filter(s => s.c.bank === b.name).length]))
      + grp("Année", "an", years.map(y => [y, String(y), null]));
  }
  const mats = DMATS.filter(d => EXS.some(x => x.mat === d.m));
  const one = TF.mat.length === 1 ? DMATS.find(d => d.m === TF.mat[0]) : null;
  const subj = one && sid(one.subj[0]);
  let chapG = "";
  if (subj && !subj.hidden) {
    const ys = TF.yr.length === 1 ? TF.yr : ["mpsi", "mp"];
    chapG = `<div class="tfg"><div class="tfgh"><span>Chapitre</span>${TF.chap ? `<button type="button" class="linkbtn" data-tclear="chap">effacer</button>` : ""}</div><div class="tfchaps">${ys.map(y => `<div class="tfcy"><span class="tfcyl">${YEARS[y]}</span>${subj.years[y].map((c, i) => { const n = EXS.filter(x => x.e.subj === subj.id && x.e.year === y && x.e.chap === i).length; return n ? `<button type="button" class="tfchap" data-tchap="${subj.id}-${y}-${i}" aria-pressed="${TF.chap === subj.id + "-" + y + "-" + i}">${esc(c.t)}<small>${n}</small></button>` : ""; }).join("")}</div>`).join("")}</div></div>`;
  }
  return grp("Matière", "mat", mats.map(d => [d.m, d.m, EXS.filter(x => x.mat === d.m).length]))
    + grp("Année", "yr", [["mpsi", "Sup"], ["mp", "Spé"]].map(([v, l]) => [v, l, EXS.filter(x => x.e.year === v).length]))
    + starsG + chapG;
}

function tfResults() {
  if (TF.mode === "sujets") {
    let L = SUJ.filter(s => (!TF.fil.length || TF.fil.some(f => s.fils.includes(f))) && (!TF.mat.length || TF.mat.includes(s.mat)) && (!TF.bank.length || TF.bank.includes(s.c.bank)) && (!TF.an.length || TF.an.includes(s.c.annee)) && (!TF.stars.length || TF.stars.includes(s.lv)) && (!TF.q || qmatch(s.txt, TF.q)));
    L = L.sort(TF.sort === "facile" ? (a, b) => a.lv - b.lv : TF.sort === "dur" ? (a, b) => b.lv - a.lv : (a, b) => b.c.annee - a.c.annee);
    const card = s => { const d = s.parts.filter(e => doneN(e.id)).length; return `<a class="sjc" href="#c-annales-mp-${s.i}"><span class="sjh">${bankMark(s.c.bank)}<span class="sjm"><b>${esc(s.c.bank)} ${s.c.annee}</b><span>${esc(s.c.epreuve)} · ${esc(s.c.duree)}</span></span>${lvl(s.lv)}</span><span class="sjt">${esc(s.c.titre)}</span><span class="sjn">${esc(s.c.n)}</span><span class="sjf"><span>${s.fils.map(f => `<i>${f}</i>`).join("")}</span><span>${plural(s.parts.length, "partie")}${d ? ` · <b>${d} faite${d > 1 ? "s" : ""}</b>` : ""}</span></span></a>`; };
    return tfHead(L.length, "sujet") + (L.length ? `<div class="sjgrid">${L.map(card).join("")}</div>` : tfEmpty());
  }
  let L = EXS.filter(x => (!TF.mat.length || TF.mat.includes(x.mat)) && (!TF.yr.length || TF.yr.includes(x.e.year)) && (!TF.chap || `${x.e.subj}-${x.e.year}-${x.e.chap}` === TF.chap) && (!TF.stars.length || TF.stars.includes(x.e.level || 3)) && (!TF.q || qmatch(x.txt, TF.q)));
  L = L.sort(TF.sort === "facile" ? (a, b) => (a.e.level || 3) - (b.e.level || 3) : TF.sort === "dur" ? (a, b) => (b.e.level || 3) - (a.e.level || 3) : () => 0);
  const shown = L.slice(0, 60);
  return tfHead(L.length, "exercice") + (L.length ? `<div class="exgrid">${shown.map(x => exCard(x.e)).join("")}</div>${L.length > 60 ? `<p class="tfhint">Les 60 premiers sont affichés : affine avec un mot-clé ou un filtre.</p>` : ""}` : tfEmpty());
}
const tfHead = (n, w) => `<div class="tfhead"><p><b>${n}</b> ${w}${n > 1 ? "s" : ""}</p><label class="tfsort">Trier <select data-tsort><option value="recent"${TF.sort === "recent" ? " selected" : ""}>${TF.mode === "sujets" ? "plus récents" : "ordre du cours"}</option><option value="facile"${TF.sort === "facile" ? " selected" : ""}>plus faciles d'abord</option><option value="dur"${TF.sort === "dur" ? " selected" : ""}>plus difficiles d'abord</option></select></label></div>`;
const tfEmpty = () => `<div class="tfempty"><p>Aucun résultat avec ces critères.</p><button type="button" class="btn btn-ghost btn-sm" data-treset>Effacer tous les filtres</button></div>`;

function wireTrouver() {
  const host = $(".tf", app); if (!host) return;
  tfIndex();
  const side = $(".tfside", host), res = $(".tfres", host);
  const paint = () => {
    side.innerHTML = tfFilters(); res.innerHTML = tfResults(); tfSave();
    $$("[data-tf]", host).forEach(b => b.addEventListener("click", () => { const k = b.dataset.tf, v = k === "an" || k === "stars" ? +b.dataset.v : b.dataset.v; tog(TF[k], v); if (k === "mat" || k === "yr") TF.chap = null; paint(); }));
    $$("[data-tclear]", host).forEach(b => b.addEventListener("click", () => { const k = b.dataset.tclear; TF[k] = k === "chap" ? null : []; paint(); }));
    $$("[data-tchap]", host).forEach(b => b.addEventListener("click", () => { TF.chap = TF.chap === b.dataset.tchap ? null : b.dataset.tchap; paint(); }));
    $$("[data-treset]", host).forEach(b => b.addEventListener("click", () => { Object.assign(TF, { q: "", fil: [], mat: [], bank: [], an: [], stars: [], yr: [], chap: null }); $("[data-tq]", host).value = ""; paint(); }));
    const so = $("[data-tsort]", host); if (so) so.addEventListener("change", () => { TF.sort = so.value; paint(); });
    typeset(res);
  };
  $$("[data-tmode]", host).forEach(b => b.addEventListener("click", () => { TF.mode = b.dataset.tmode; TF.mat = []; TF.chap = null; $$("[data-tmode]", host).forEach(x => x.setAttribute("aria-selected", x === b)); paint(); }));
  let t; $("[data-tq]", host).addEventListener("input", ev => { clearTimeout(t); t = setTimeout(() => { TF.q = ev.target.value.trim(); res.innerHTML = tfResults(); tfSave(); const so = $("[data-tsort]", host); if (so) so.addEventListener("change", () => { TF.sort = so.value; paint(); }); $$("[data-treset]", host).forEach(b => b.addEventListener("click", () => { Object.assign(TF, { q: "", fil: [], mat: [], bank: [], an: [], stars: [], yr: [], chap: null }); $("[data-tq]", host).value = ""; paint(); })); typeset(res); }, 160); });
  paint();
}

/* ---------- Routeur ---------- */
let lastRoute = "", dashSeen = false;
const tabMem = (() => { try { return JSON.parse(sessionStorage.getItem("lemme-tabs") || "{}"); } catch (_) { return {}; } })();
let lastTs = null, booted = false;
function route(keepScroll) {
  const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!booted || rm || !document.startViewTransition) { booted = true; return render(keepScroll); }
  quietVT(document.startViewTransition(() => { render(keepScroll); return Promise.race([lastTs || Promise.resolve(), new Promise(r => setTimeout(r, 260))]); }));
}
function render(keepScroll) {
  const h = location.hash.slice(1) || "accueil";
  const fromEx = h !== lastRoute && /^e-/.test(lastRoute) ? lastRoute.slice(2) : null;
  if (h !== lastRoute) {
    if (!/^c-/.test(h) || lastRoute.replace(/-\d+$/, "") !== h.replace(/-\d+$/, "")) chapTab = /^c-/.test(h) ? (tabMem[h] || null) : null;
    if (fromEx && /^c-/.test(h)) { const fe = EXERCISES.find(x => x.id === fromEx), mm = h.match(/^c-([a-z]+)-(mpsi|mp)-(\d+)$/); if (fe && mm && fe.subj === mm[1] && fe.year === mm[2] && fe.chap === +mm[3]) chapTab = mm[1] === "oraux" ? (fe.concours || chapTab) : fe.plus ? "plus" : "exercices"; }
    if (!/^s-/.test(h)) subjTab = "chapitres"; enonceMode = "interactif";
  }
  lastRoute = h;
  if (typeof trackRoute === "function") trackRoute(h);
  player = null; closeRappel(true); closeBig(true); closeTip();
  let html, m, ex = null;
  if (h === "accueil") html = home();
  else if (h === "commando" || h === "s-xens") html = commandoPage();
  else if (h === "oraux-maths" || h === "s-oraux") html = orauxMathsPage();
  else if ((m = h.match(/^s-([a-z]+)$/))) html = subjectPage(m[1]);
  else if ((m = h.match(/^bq\/([a-z0-9-]+)\/(mp|mpi|pc|psi|tous)(?:\/(\d+))?(?:\/(\d{4}))?$/))) html = banquePage(m[1], m[2] === "tous" ? null : m[2], m[3] == null ? null : +m[3], m[4] ? +m[4] : null);
  else if ((m = h.match(/^banque-([a-z0-9-]+)-(mp|mpi|pc|psi)$/)) && BANKS.some(x => bslug(x.name) === m[1])) html = banquePage(m[1], m[2]);
  else if ((m = h.match(/^banque-([a-z0-9-]+)$/))) html = banquePage(m[1]);
  else if ((m = h.match(/^concours-(mp|mpi|pc|psi)$/))) html = concoursPage(m[1]);
  else if ((m = h.match(/^c-annales-mp-(\d+)$/))) html = sujetPage(+m[1]);
  else if ((m = h.match(/^c-([a-z]+)-(mpsi|mp)-(\d+)$/))) html = chapterPage(m[1], m[2], +m[3]);
  else if ((m = h.match(/^e-([a-z0-9-]+)$/))) { const al = (window.LEMME.ALIAS || {})[m[1]]; if (al) { location.replace("#e-" + al); return; } ex = EXERCISES.find(x => x.id === m[1]); html = exercisePage(m[1]); }
  else if (h === "exercices") html = exercisesPage(false);
  else if (h === "classiques") html = exercisesPage(true);
  else if (h === "dm") html = dmPage();
  else if (h === "ds") html = dsPage();
  else if (h === "kholles") html = khollesPage();
  else if (h === "concours") html = concoursPage();
  else if (h === "oral") html = oralPage();
  else if (h === "tableau") html = dashPage();
  else if (h === "trouver") html = trouverPage();
  else html = notFound();
  const zone = h === "commando" || /^(s|c)-xens/.test(h) || (ex && ex.subj === "xens");
  if (zone) document.documentElement.dataset.zone = "commando"; else delete document.documentElement.dataset.zone;
  const tc = document.querySelector('meta[name="theme-color"]'); if (tc) tc.content = zone ? "#05070C" : "#0F2557";
  const sec = /^(s|c)-/.test(h) && !/^c-annales/.test(h) && !/^(s|c)-(xens|oraux|kholles)/.test(h) ? "cours" : /^(exercices|classiques|kholles|dm|ds|c-kholles)/.test(h) ? "exos" : /^(concours|oral|trouver|bq\/|banque|c-annales|commando|s-xens|c-xens|oraux|s-oraux|c-oraux)/.test(h) ? "conc" : h === "tableau" ? "tab" : "";
  $$("[data-sec]").forEach(x => x.classList.toggle("on", x.dataset.sec === sec));
  $$(".panel a").forEach(a => { if (a.getAttribute("href") === "#" + h) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  head.classList.remove("scrolled");
  app.innerHTML = html;
  $$("img.fi", app).forEach(im => { if (im.complete && im.naturalWidth) im.classList.add("ld"); });
  closeMenus(); nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
  document.title = h === "accueil" ? "Lemme · Prépa scientifique" : (ex ? ex.title : (($("h1", app) || {}).textContent || "Lemme")) + " · Lemme";
  wire(ex);
  if (h === "tableau") wireDash();
  if (h === "trouver") wireTrouver();
  lastTs = typeset(app);
  const back = fromEx && !keepScroll && app.querySelector(`.excard[href="#e-${fromEx}"]`);
  if (back) {
    back.classList.add("was");
    const r = back.getBoundingClientRect();
    window.scrollTo(0, Math.max(0, scrollY + r.top - (innerHeight - r.height) / 2));
    setTimeout(() => back.classList.add("fade"), 2600);
  } else if (!keepScroll) window.scrollTo(0, 0);
  head.classList.toggle("scrolled", scrollY > 8);
  if (!document.documentElement.classList.contains("seen")) setTimeout(() => document.documentElement.classList.add("seen"), 1500);
}
function wire(ex) {
  $$(".tabs [data-tab]", app).forEach(b => b.addEventListener("click", () => {
    if (/^#s-/.test(location.hash)) subjTab = b.dataset.tab; else chapTab = b.dataset.tab; if (/^#c-/.test(location.hash)) { tabMem[location.hash.slice(1)] = chapTab; try { sessionStorage.setItem("lemme-tabs", JSON.stringify(tabMem)); } catch (_) {} }
    route(true);
  }));
  $$(".filters [data-f]", app).forEach(b => b.addEventListener("click", () => { exFilter = b.dataset.f; route(true); }));
  $$(".starbar [data-star]", app).forEach(b => b.addEventListener("click", () => {
    const k = +b.dataset.star;
    if (!k) stars.clear(); else if (stars.has(k)) stars.delete(k); else stars.add(k);
    try { localStorage.setItem("lemme-stars", JSON.stringify([...stars])); } catch (_) {}
    route(true);
  }));
  $$(".filters [data-dm]", app).forEach(b => b.addEventListener("click", () => { dmSel = +b.dataset.dm; route(true); }));
  $$("[data-pdf]:not([data-lazy])", app).forEach(mountPdf);
  $$(".sj-pdf", app).forEach(d => d.addEventListener("toggle", () => { const lz = d.open && $("[data-lazy]", d); if (lz) { lz.removeAttribute("data-lazy"); mountPdf(lz); } }));
  if (ex) {
    const seg = $$(".seg button", app);
    seg.forEach(b => b.addEventListener("click", () => {
      enonceMode = b.dataset.mode;
      seg.forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      $("#en-int").hidden = enonceMode !== "interactif"; $("#en-pdf").hidden = enonceMode !== "pdf";
      const lz = $("#en-pdf [data-lazy]"); if (enonceMode === "pdf" && lz) { lz.removeAttribute("data-lazy"); mountPdf(lz); }
    }));
    bindKeys($(".enonce", app), ex);
    [].concat(ex.viz || []).forEach((v, k) => mountViz($("#viz" + (k ? k : "")), v));
    mountPlayer(ex, $("#player"));
    bindDone(ex, $(".exhead .donebox", app));
  }
}

paintYear();
requestAnimationFrame(paintYear);
window.addEventListener("hashchange", () => route());
route();
})();

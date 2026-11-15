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
const homeOf = s => s.home || (s.id === "xens" ? "#xens-chapitres" : "#commando");
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
const tile = (href, num, title, foot, cls) => `<a class="tile${cls ? " " + cls : ""}" href="${href}">${num ? `<span class="tnum">${num}</span>` : ""}<span class="tt">${title}</span>${foot ? `<span class="tfoot">${foot}</span>` : ""}</a>`;
/* Difficulté sur 3 étoiles, par demi-étoiles : 1 → 1, 2 → 1,5, 3 → 2, 4 → 2,5, 5 → 3 */
const lv3 = n => Math.max(1, Math.min(3, ((n || 3) + 1) / 2));
const lvl = n => { const v = lv3(n); return `<span class="lvl" style="--v:${v}" role="img" aria-label="Difficulté ${String(v).replace(".", ",")} sur 3"></span>`; };
const DIFFS = [["", "Tout"], ["f", "Facile"], ["m", "Moyen"], ["d", "Difficile"]];
const dOf = n => (n || 3) <= 2 ? "f" : (n || 3) === 3 ? "m" : "d";
/* Le ruban : il descend du haut de la carte, porte les étoiles en noir, et sa couleur dit le niveau */
const rib = n => `<span class="rib r-${dOf(n)}" style="--v:${lv3(n)}" aria-hidden="true"></span>`;

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
{ const _x = $("#foot-subj"); if (_x) _x.innerHTML = VISIBLE.map(s => `<li><a href="#s-${s.id}">${s.name}</a></li>`).join(""); }
{ const _x = $("#credits"); if (_x) _x.textContent = "Photos : Unsplash · " + [...new Set(Object.values(PHOTOS).map(p => p[1]))].join(", "); }
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

/* ---------- Chronomètre d'épreuve ---------- */
const chronoEl = document.createElement("button"); chronoEl.type = "button"; chronoEl.className = "chrono"; chronoEl.hidden = true; chronoEl.title = "Arrêter le chrono"; document.body.appendChild(chronoEl);
chronoEl.addEventListener("click", () => { DS.set("lemme-chrono", null); chronoTick(); });
function chronoTick() {
  const c = DS.get("lemme-chrono", null);
  if (!c) { chronoEl.hidden = true; return; }
  const r = Math.max(0, c.end - Date.now()), h = Math.floor(r / 36e5), m = Math.floor(r / 6e4) % 60, sec = Math.floor(r / 1e3) % 60;
  chronoEl.hidden = false; chronoEl.classList.toggle("over", !r);
  chronoEl.innerHTML = `<b>${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}</b><span>${esc(c.t)}</span>`;
}
setInterval(chronoTick, 1000);
const hintsOn = () => { try { return localStorage.getItem("lemme-hints") !== "0"; } catch (_) { return true; } };
/* ---------- Apparence ---------- */
const THEMES = [["auto", "Automatique", "linear-gradient(135deg,#F5F7FC 50%,#0A1230 50%)"], ["clair", "Clair", "#F5F7FC"], ["sombre", "Sombre", "#12151c"], ["papier", "Papier", "#F6F1E7"], ["synthwave", "Synthwave", "linear-gradient(135deg,#ff4fd8,#5b2bd6 55%,#1a1033)"], ["verre", "Verre", "linear-gradient(135deg,#c9d6ff,#fbd3e9)"], ["ardoise", "Tableau noir", "#22302a"]];
{
  const tb = $("#theme-toggle"), tp = $("#themepop");
  const cur = () => { try { return localStorage.getItem("lemme-theme") || "auto"; } catch (_) { return "auto"; } };
  const gs = (k, d) => { try { return localStorage.getItem(k) || d; } catch (_) { return d; } };
  const paintT = () => { tp.innerHTML = `<p>Apparence</p>` + THEMES.map(([k, l, sw]) => `<button type="button" data-theme-k="${k}" aria-pressed="${cur() === k}"><i style="background:${sw}"></i>${l}</button>`).join("")
    + `<p>Taille du texte</p><div class="tsize">${[["p", "A−"], ["n", "A"], ["g", "A+"]].map(([k, l]) => `<button type="button" data-size-k="${k}" aria-pressed="${gs("lemme-size", "n") === k}">${l}</button>`).join("")}</div>`
    + `<p>Corrigé</p><button type="button" data-hints aria-pressed="${hintsOn()}"><i class="sw ${hintsOn() ? "on" : ""}"></i>Indice avant le corrigé</button>`; };
  paintT();
  tb.addEventListener("click", ev => { ev.stopPropagation(); const o = tp.hidden; tp.hidden = !o; tb.setAttribute("aria-expanded", String(o)); });
  tp.addEventListener("click", ev => {
    ev.stopPropagation();
    const sz = ev.target.closest("[data-size-k]"); if (sz) { const k = sz.dataset.sizeK; try { localStorage.setItem("lemme-size", k); } catch (_) {} if (k === "n") delete document.documentElement.dataset.size; else document.documentElement.dataset.size = k; paintT(); return; }
    if (ev.target.closest("[data-hints]")) { try { localStorage.setItem("lemme-hints", hintsOn() ? "0" : "1"); } catch (_) {} paintT(); return; }
    const b = ev.target.closest("[data-theme-k]"); if (!b) return;
    const k = b.dataset.themeK; try { localStorage.setItem("lemme-theme", k); } catch (_) {}
    if (k === "auto") delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = k;
    paintT();
  });
  document.addEventListener("click", () => { tp.hidden = true; tb.setAttribute("aria-expanded", "false"); });
}

/* ---------- Recherche ---------- */
const sbar = $("#searchbar"), stog = $("#search-toggle"), q = $("#q"), results = $("#results");
stog.addEventListener("click", () => { const o = sbar.hidden; sbar.hidden = !o; stog.setAttribute("aria-expanded", String(o)); if (o) q.focus(); });
const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
/* Moteur de recherche : sans accents ni majuscules, début de mot suffit (« diag » trouve « diagonalisation »),
   une faute de frappe est tolérée, et le titre compte plus que le texte. */
const STOPQ = new Set("le la les de des du un une et en au aux pour par sur dans avec qui que est sont ou on se ce cette ces son sa ses d l".split(" "));
const qwords = s => norm(String(s || "")).split(/[^a-z0-9]+/).filter(w => w.length > 1 && !STOPQ.has(w));
const plainOf = h => String(h || "").replace(/<[^>]+>/g, " ").replace(/\\[a-zA-Z]+/g, " ");
function mkItem(title, body) { const tw = qwords(title), all = [...new Set(tw.concat(qwords(body)))]; return { tset: new Set(tw), toks: all, set: new Set(all) }; }
function near(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, d = 0;
  while (i < a.length && j < b.length) { if (a[i] === b[j]) { i++; j++; continue; } if (++d > 1) return false; if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; } }
  return d + (a.length - i) + (b.length - j) <= 1;
}
function wscore(it, w) {
  if (it.tset.has(w)) return 1.6;
  if (it.set.has(w)) return 1.2;
  if (it.toks.some(t => t.startsWith(w))) return 1;
  if (w.length >= 5 && it.toks.some(t => t.length >= 5 && w.startsWith(t.slice(0, Math.max(5, t.length - 2))))) return .9;
  if (w.length >= 5 && it.toks.some(t => near(t, w))) return .8;
  return 0;
}
/* score : -1 si un mot manque, sinon la somme (plus c'est haut, mieux c'est) ; part = proportion des mots trouvés */
function qscore(it, query) {
  const ws = qwords(query); if (!ws.length) return { all: true, sc: 0, part: 1 };
  let sc = 0, got = 0; for (const w of ws) { const v = wscore(it, w); if (v) { got++; sc += v; } }
  return { all: got === ws.length, sc, part: got / ws.length };
}
function qsearch(items, query, key) {
  const r = items.map(x => ({ x, s: qscore(key(x), query) }));
  const exact = r.filter(o => o.s.all).sort((a, b) => b.s.sc - a.s.sc);
  if (exact.length) return { list: exact.map(o => o.x), near: false };
  return { list: r.filter(o => o.s.part >= .5).sort((a, b) => b.s.part - a.s.part || b.s.sc - a.s.sc).map(o => o.x), near: true };
}
let INDEX = null;
function headIndex() {
  if (INDEX) return INDEX;
  INDEX = [];
  SUBJECTS.forEach(s => ["mpsi", "mp"].forEach(y => (s.years[y] || []).forEach((c, i) => INDEX.push({ href: `#c-${s.id}-${y}-${i}`, label: c.t, meta: `${s.name} · ${YEARS[y]}`, it: mkItem(c.t, (c.n || "") + " " + s.name) }))));
  EXERCISES.forEach(e => INDEX.push({ href: `#e-${e.id}`, label: e.title, meta: `${sid(e.subj).name} · ${YEARS[e.year]}`, it: mkItem(e.title, sid(e.subj).name + " " + (e.steps || []).map(st => st.t).join(" ") + " " + plainOf(e.enonce).slice(0, 1500)) }));
  return INDEX;
}
q.addEventListener("input", () => {
  const v = q.value.trim();
  if (!v) { results.hidden = true; return; }
  const hits = qsearch(headIndex(), v, x => x.it).list.slice(0, 12);
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
  const n = doneN(e.id);
  return `<a class="excard${n ? " done" : ""}" href="#e-${e.id}"${e.concours ? ` data-cc="${e.concours}"` : ""}>${rib(e.level)}<b class="ttl">${ttl(e)}</b><span class="cf">${FAV.has(e.id) ? `<span class="fv" title="À revoir">${IBM}</span>` : ""}${n ? `<span class="dn">${ICHECK}Fait</span>` : ""}${lvl(e.level)}</span></a>`;
}
const FAV = (() => { try { return new Set(JSON.parse(localStorage.getItem("lemme-fav") || "[]")); } catch (_) { return new Set(); } })();
const favSave = () => { try { localStorage.setItem("lemme-fav", JSON.stringify([...FAV])); } catch (_) {} };
const IBM = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2h8v12l-4-3-4 3z" fill="currentColor"/></svg>`;
let diff = (() => { try { return localStorage.getItem("lemme-diff") || ""; } catch (_) { return ""; } })();
const byDiff = list => diff ? list.filter(e => dOf(e.level) === diff) : list;
function diffBar(list) {
  return `<div class="diffbar" role="group" aria-label="Difficulté">${DIFFS.map(([k, lab]) => { const n = k ? list.filter(e => dOf(e.level) === k).length : list.length; return `<button type="button" data-diff="${k}" aria-pressed="${diff === k}"${n ? "" : " disabled"}>${lab}</button>`; }).join("")}</div>`;
}
function exList(list, emptyHtml) {
  const f = byDiff(list);
  return diffBar(list) + (f.length ? `<div class="exgrid stagger">${f.map(exCard).join("")}</div>` : empty("Rien à ce niveau", ""));
}
function plusList(list) {
  if (!list.length) return empty("Bientôt", "");
  const ids = [...new Set(list.map(e => e.plus))];
  return `<div class="plist">` + ids.map(k => {
    const parts = list.filter(e => e.plus === k), f = parts[0];
    const nq = parts.reduce((a, e) => a + new Set(e.steps.map(st => st.q)).size, 0);
    if (parts.length === 1) return `<a class="prow${doneN(f.id) ? " done" : ""}" href="#e-${f.id}"><span class="prt">${esc(f.title)}</span><span class="prm">${nq} questions${f.time ? " · " + f.time : ""}</span>${doneN(f.id) ? `<span class="dn">${ICHECK}</span>` : ""}${I.arrow}</a>`;
    return `<div class="pgroup"><div class="prow head"><span class="prt">${esc(f.sujet || f.title)}</span><span class="prm">${nq} questions</span></div>${parts.map(e => `<a class="prow sub${doneN(e.id) ? " done" : ""}" href="#e-${e.id}"><span class="prt">${esc(e.part)} · ${ttl(e)}</span><span class="prm">${qrange(e)}</span>${doneN(e.id) ? `<span class="dn">${ICHECK}</span>` : ""}${I.arrow}</a>`).join("")}</div>`;
  }).join("") + `</div>`;
}
function tabsHtml(list, cur) { if (!list.length) return ""; return `<div class="tabs" role="tablist">${list.map(t => `<button type="button" role="tab" data-tab="${t[0]}" aria-selected="${t[0] === cur}">${t[1]}${t[2] !== undefined ? `<span class="n">${t[2]}</span>` : ""}</button>`).join("")}</div>`; }
/* Précédent / suivant : deux grands boutons, aussi au clavier (← →) */
const METH = window.LEMME.METHODES || {};
/* les rappels de cours utilisés dans les exercices d'un chapitre, sans doublon */
const chapRappels = list => [...new Set(list.flatMap(e => (e.steps || []).flatMap(st => st.rappels || [])))].filter(k => RAPPELS[k]);
function pagerHtml(prev, next) {
  if (!prev && !next) return "";
  const one = (x, dir) => x ? `<a class="pager-btn ${dir}" href="${x[0]}" data-key="${dir === "prev" ? "ArrowLeft" : "ArrowRight"}"><span class="pk">${dir === "prev" ? `${I.left} Précédent` : `Suivant ${I.arrow}`}</span><span class="pt">${stt(x[1])}</span></a>` : `<span class="pager-btn off" aria-hidden="true"></span>`;
  return `<nav class="pager" aria-label="Chapitre précédent ou suivant">${one(prev, "prev")}${one(next, "next")}</nav>`;
}
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
    <div class="subjects stagger">${VISIBLE.map(s => `<a class="scard" href="#s-${s.id}">${img(s.id, "(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw")}<span class="in"><h3>${s.name}</h3></span></a>`).join("")}</div>
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
      <li><a href="#classiques">Classiques${I.arrow}</a></li>
      <li><a href="#dm">Devoirs maison${I.arrow}</a></li>
      <li><a href="#kholles">Khôlles${I.arrow}</a></li>
      <li><a href="#concours">Concours${I.arrow}</a></li>
      <li><a href="#oral">Oraux${I.arrow}</a></li>
    </ul></div>
    <div class="photo">${img("oral", "(max-width:860px) 100vw, 50vw")}</div>
  </div></div></section>`;
}
function wireHome() {
  const i = $("#hq"), r = $("#hres"); if (!i) return;
  i.addEventListener("input", () => {
    const v = i.value.trim(); if (!v) { r.hidden = true; return; }
    const hits = qsearch(headIndex(), v, x => x.it).list.slice(0, 8);
    r.innerHTML = hits.length ? hits.map(h => `<a href="${h.href}"><span>${esc(h.label)}</span><small>${h.meta}</small></a>`).join("") : `<p>Rien trouvé.</p>`;
    r.hidden = false;
  });
  $$("[data-resume]", app).forEach(a => a.addEventListener("click", () => { try { sessionStorage.setItem("lemme-resume", a.dataset.resume); } catch (_) {} }));
}

/* Domaine d'un chapitre de maths, pour ranger Sup et Spé en Algèbre / Analyse / Probabilités */
function domOf(t) {
  if (/^(Logique|Ensembles)/.test(t)) return "Fondamentaux";
  if (/Probabilit|Dénombrement/.test(t)) return "Probabilités";
  if (/Arithmétique|Structures|Polynômes|Fractions|Matrices|Espaces vectoriels|Applications linéaires|Groupe symétrique|déterminant|Compléments d'algèbre|Réduction|préhilbertiens|euclidiens|Calcul algébrique|Nombres complexes/.test(t)) return "Algèbre";
  return "Analyse";
}
let subjTab = "chapitres";
function subjectPage(id) {
  const s = sid(id); if (!s) return notFound();
  const list = s.years[year];
  const classics = EXERCISES.filter(e => e.subj === id && e.year === year && e.classique).sort((a, b) => (b.kind === "probleme") - (a.kind === "probleme"));
  const tabs = tabsHtml([["chapitres", "Chapitres", list.length], ["classiques", "Classiques", classics.length]], subjTab);
  const body = subjTab === "classiques"
    ? (classics.length ? `<div class="exgrid stagger">${classics.map(exCard).join("")}</div>` : empty("Bientôt", ` Les classiques de ${s.name.toLowerCase()} en ${YEARS[year]} sont en préparation.`))
    : (() => { const tile = (c, i) => { const n = exOf(id, year, i).length, r = PDFS.has(`resume-${id}-${year}-${pad(i + 1)}`) || PDFS.has(`cours-${id}-${year}-${pad(i + 1)}`); const dn = n ? exOf(id, year, i).filter(e => doneN(e.id)).length : 0; return `<a class="chaptile${n || c.r || r ? "" : " soon"}" href="#c-${id}-${year}-${i}"><span class="tt">${esc(c.t)}</span>${n ? `<span class="cbar" title="${dn} sur ${n} faits"><i style="width:${Math.round(100 * dn / n)}%"></i></span>` : ""}</a>`; };
        if (id !== "maths") return `<div class="chaptiles stagger">${list.map(tile).join("")}</div>`;
        const G = ["Fondamentaux", "Algèbre", "Analyse", "Probabilités"], gr = {};
        list.forEach((c, i) => { const g = domOf(c.t); (gr[g] = gr[g] || []).push(tile(c, i)); });
        return G.filter(g => gr[g]).map(g => `<section class="dom cbox"><h2 class="cbt"><span>${g}</span><span>${gr[g].length} chapitre${gr[g].length > 1 ? "s" : ""}</span></h2><div class="chaptiles stagger">${gr[g].join("")}</div></section>`).join(""); })();
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
    if (id === "maths" && METH[c.t]) tabs.push(["methode", "Méthode"]);
    if (exs.length) tabs.push(["exercices", "Exercices", exs.length]);
    if (id === "xens") tabs.push(["plus", "Aller plus loin", new Set(plus.map(e => e.plus)).size]);
    if (chapRappels(all).length > 1) tabs.push(["formulaire", "Formulaire"], ["cartes", "Cartes"]);
    if (!chapTab || !tabs.find(t => t[0] === chapTab)) chapTab = PDFS.has(cs) ? "cours" : (PDFS.has(rs) ? "resume" : (exs.length ? "exercices" : plus.length ? "plus" : "resume"));
  }
  let body;
  if (oral) { const ce = exs.filter(e => e.concours === chapTab); body = ce.length ? `<div class="exgrid stagger">${ce.map(exCard).join("")}</div>` : empty("Exercices en préparation", ` Les exercices ${CONC[chapTab] || ""} de ce chapitre arrivent bientôt.`); }
  else if (chapTab === "cours") body = `<div data-pdf="${cs}" data-title="Cours · ${esc(c.t)}"></div>`;
  else if (chapTab === "resume") body = c.r
    ? `<article class="panelbox resume"><p class="rs-prog"><b>Au programme</b>${esc(c.n)}</p><h2>L'essentiel</h2><div class="prose">${c.r}</div>${PDFS.has(rs) ? `<a class="btn btn-ghost btn-sm rs-dl" href="pdf/${rs}.pdf" download>${I.dl}Télécharger en PDF</a>` : ""}</article>`
    : (PDFS.has(rs) ? `<div data-pdf="${rs}" data-title="Résumé · ${esc(c.t)}"></div>` : empty("Résumé en préparation", "")) + `<p style="margin:20px 4px 0;color:var(--muted);font-size:14.5px"><b style="color:var(--ink)">Au programme :</b> ${esc(c.n)}.</p>`;
  else if (chapTab === "plus") body = plusList(plus);
  else if (chapTab === "methode") { EXT = c.t; const mm = METH[c.t], nv = (mm.match(/<nav class="msum">[\s\S]*?<\/nav>/) || [""])[0]; body = `<article class="panelbox methode"><div class="prose">${nv}${annotate(mm.replace(nv, ""), null)}</div></article>`; }
  else if (chapTab === "formulaire") body = `<div class="formulaire"><div class="fm-top"><button type="button" class="btn btn-ghost btn-sm" data-print>Imprimer</button></div>${chapRappels(all).map(k => `<section><h3>${esc(RAPPELS[k].t)}</h3><div class="body course">${aerate(RAPPELS[k].b, true)}</div></section>`).join("")}</div>`;
  else if (chapTab === "cartes") { const ks = chapRappels(all); body = `<div class="flash" data-n="${ks.length}">${ks.map((k, j) => `<button type="button" class="fcard" data-j="${j}"${j ? " hidden" : ""} aria-label="Retourner la carte"><span class="ff">${esc(RAPPELS[k].t)}<small>Clique pour voir la réponse</small></span><span class="fb body course">${aerate(RAPPELS[k].b, true)}</span></button>`).join("")}<div class="fnav"><button type="button" class="btn btn-ghost" data-fl="-1">${I.left} Précédente</button><span class="fpos">1 / ${ks.length}</span><button type="button" class="btn btn-ghost" data-fl="1">Suivante ${I.arrow}</button></div></div>`; }
  else body = exs.length ? exList(exs) : empty("Exercices en préparation", "");
  const prev = list[i - 1], next = list[i + 1];
  const pager = pagerHtml(prev && [`#c-${id}-${y}-${i - 1}`, prev.t], next && [`#c-${id}-${y}-${i + 1}`, next.t]);
  return phead({ crumb: id === "kholles" ? [["Khôlles", "#kholles"]] : s.hidden ? [parentOf(s), [s.name, homeOf(s)]] : [[s.name, `#s-${id}`], [YEARS[y]]], title: esc(c.t), meta: `<details class="chsw"><summary>Changer de chapitre</summary><ul>${list.map((x, j) => `<li><a href="#c-${id}-${y}-${j}"${j === i ? ' aria-current="page"' : ""}>${esc(x.t)}</a></li>`).join("")}</ul></details>`, tabs: oral ? tabsHtml(tabs, chapTab).replace(/data-tab="(\w+)"/g, 'data-tab="$1" data-cc="$1"') : (tabs.length > 1 ? tabsHtml(tabs, chapTab) : "") })
    + `<div class="wrap layout full"><div>${body}${pager}</div></div>`;
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
  const cr = ann ? [...bqCrumbs(c), [c.epreuve]] : e.subj === "kholles" ? [["Khôlles", "#kholles"], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]] : s.hidden ? [[s.name, homeOf(s)], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]].concat(e.plus ? [["Aller plus loin"], [e.part]] : []) : [[s.name, `#s-${s.id}`], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]];
  const kind = ann ? qrange(e) : e.subj === "kholles" ? "Khôlle" : e.concours ? "Oral " + CONC[e.concours] : (pb ? "Problème" : "Exercice");
  const meta = [`<span class="k"${e.concours ? ` data-cc="${e.concours}"` : ""}>${kind}</span>`, ann ? "" : (s.hidden ? s.name : s.name + " · " + YEARS[e.year]), e.time || "", ann ? "" : lvl(e.level)].filter(Boolean).join(`<span class="dot" aria-hidden="true">·</span>`);
  const head = `<section class="exhead"><div class="wrap wrap-wide">${crumbs(cr)}<div class="exh-row"><div class="exh-t"><h1 class="ttl">${ttl(e)}</h1><div class="exmeta">${meta}</div></div><div class="donebox">${doneHtml(e)}<div class="exacts"><button type="button" class="btn btn-ghost btn-sm" data-fav aria-pressed="${FAV.has(e.id)}">${IBM}<span>${FAV.has(e.id) ? "À revoir" : "Garder pour plus tard"}</span></button>${ann ? `<button type="button" class="btn btn-ghost btn-sm" data-chrono>Chrono ${esc(c.duree || "4 h")}</button>` : ""}<button type="button" class="btn btn-ghost btn-sm" data-printex>Imprimer</button></div></div></div></div></section>`;
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
    ${list.length ? `<div class="chaptiles stagger">${list.map((c, i) => `<a class="chaptile${exOf("kholles", year, i).length ? "" : " soon"}" href="#c-kholles-${year}-${i}"><span class="tt">${esc(c.t)}</span>${I.arrow}</a>`).join("")}</div>` : empty("Bientôt", "")}
  </div></div>`;
}

function concoursPage(f) {
  if (f) curFil = f;
  if (!f) return phead({ crumb: [["Concours"]], title: "Préparer les écrits" }) + `<div class="wrap layout full"><div>
    <h2 class="pick-h">Choisis ta filière</h2>
    <div class="filpick">${Object.keys(FIL).map(k => `<a class="filcard" href="#concours-${k}"><b>${FIL[k]}</b>${I.arrow}</a>`).join("")}</div>
  </div></div>`;
  const seg = `<div class="filseg" role="group" aria-label="Filière">${Object.keys(FIL).map(k => `<a href="#concours-${k}"${k === f ? ' aria-current="page"' : ""}>${FIL[k]}</a>`).join("")}</div>`;
  return phead({ crumb: [["Concours", "#concours"], [FIL[f]]], title: `Écrits · ${FIL[f]}` }) + `<div class="wrap layout full"><div>
    ${seg}
    <div class="banklist">${BANKS.map(b => { const n = sujetsOf(b.name, f).length; return n ? `<a class="bkrow" href="#banque-${bslug(b.name)}-${f}"><span class="bkn">${b.name}</span>${I.arrow}</a>` : `<div class="bkrow off"><span class="bkn">${b.name}</span><span class="bks">Bientôt</span></div>`; }).join("")}</div>
  </div></div>`;
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
    ${f ? "" : `<div class="filters" role="group" aria-label="Filière">${Object.keys(FIL).map(k => `<a class="chip" href="#banque-${slug}-${k}">${FIL[k]}</a>`).join("")}</div>`}
    ${body}
  </div></div>`;
}
function sujetPage(i) {
  const c = ANN()[i]; if (!c) return notFound();
  const parts = exOf("annales", "mp", i);
  return phead({ crumb: bqCrumbs(c).concat([[c.epreuve]]), title: esc(c.titre), meta: `<span class="tag y">${esc(c.bank)} ${c.annee}</span><span class="tag">${esc(c.epreuve)} · ${esc(c.filiere)}</span><span class="tag">${esc(c.duree)}</span>` }) + `<div class="wrap layout full"><div>
    <p class="sj-intro">${c.intro}</p>
    <div class="sj-go">${parts.map(e => `<a class="btn btn-yellow" href="#e-${e.id}">Ouvrir le sujet et son corrigé ${I.arrow}</a>${doneN(e.id) ? `<span class="tdone">${ICHECK}Fait</span>` : ""}`).join("")}</div>
    ${c.pdf ? `<details class="sj-pdf"><summary><span>Voir le sujet original</span><small>PDF · ${esc(c.bank)} ${c.annee}</small></summary><div data-pdf="${c.pdf}" data-title="${esc(c.bank)} ${c.annee} · ${esc(c.epreuve)} ${esc(c.filiere)}" data-lazy="1"></div><a class="btn btn-ghost btn-sm" href="pdf/${c.pdf}.pdf" download>${I.dl}Télécharger le sujet</a></details>` : ""}
  </div></div>`;
}

function oralPage() {
  return phead({ crumb: [["Oraux"]], title: "Réussir les oraux", photo: "oral" }) + `<div class="wrap layout full"><div>
    <div class="filpick oral-pick">
      <a class="filcard" href="#oraux-maths"><b>Mathématiques</b>${I.arrow}</a>
      <div class="filcard off"><b>Physique</b><span>Bientôt</span></div>
      <div class="filcard off"><b>Python</b><span>Bientôt</span></div>
      <div class="filcard off"><b>TIPE</b><span>Bientôt</span></div>
    </div>
  </div></div>`;
}

function orauxMathsPage() {
  const s = sid("oraux"), list = s.years.mp;
  return phead({ crumb: [["Oraux", "#oral"], ["Mathématiques"]], title: "Oraux de mathématiques", photo: "oral" })
  + `<div class="wrap layout full"><div>
    <div class="chaptiles stagger">${list.map((c, i) => `<a class="chaptile${EXERCISES.some(e => e.subj === "oraux" && e.chap === i) ? "" : " soon"}" href="#c-oraux-mp-${i}"><span class="tt">${esc(c.t)}</span>${I.arrow}</a>`).join("")}</div>
  </div></div>`;
}

function xparts(s) {
  const out = [];
  s.years.mp.forEach((c, i) => { const name = c.p || s.part; let g = out.find(x => x.name === name); if (!g) out.push(g = { name, items: [] }); g.items.push({ c, i }); });
  return out;
}
function xpos(s, i) { const P = xparts(s); for (let g = 0; g < P.length; g++) { const j = P[g].items.findIndex(x => x.i === i); if (j >= 0) return { g, j, name: P[g].name }; } return { g: 0, j: i, name: s.part }; }
function commandoPage() {
  return `
  <section class="hero hero-cmd"><div class="photo">${img("commando", "100vw", true)}</div><div class="wrap">
    <h1><span class="line"><span>Formation</span></span><span class="line"><span><span class="mark">commando</span></span></span><span class="line"><span>X-ENS</span></span></h1>
    <p>Les exercices les plus durs du programme, corrigés sans sauter une étape.</p>
    <div class="ctas"><a class="btn btn-yellow" href="#xens-chapitres">Commencer l'entraînement ${I.arrow}</a><a class="btn btn-glass" href="#banque-x-ens">Les sujets X-ENS</a></div>
  </div></section>`;
}
/* Les chapitres du commando, dans l'ordre : un chapitre, puis ses parties */
function commandoChaps() {
  const s = sid("xens");
  return phead({ crumb: [["Commando X-ENS", "#commando"], ["Chapitres"]], title: "L'entraînement" }) + `<div class="wrap layout full"><div class="xchaps">
    ${xparts(s).map((g, gi) => `<section class="xch"><h2>${esc(g.name)}</h2><div class="chaptiles">${g.items.map(({ c, i }) => { const ready = exOf("xens", "mp", i).length || PDFS.has(`resume-xens-mp-${pad(i + 1)}`); return `<a class="chaptile${ready ? "" : " soon"}" href="#c-xens-mp-${i}"><span class="tt">${esc(c.t)}</span>${I.arrow}</a>`; }).join("")}</div></section>`).join("")}
  </div></div>`;
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
  function intro() {
    let k = 0;
    try { if (sessionStorage.getItem("lemme-resume") === e.id) { sessionStorage.removeItem("lemme-resume"); const l = DS.get("lemme-last", null); if (l && l.id === e.id) k = Math.min(l.i, n); } } catch (_) {}
    show(k, 0, true);
  }
  const seen = new Set();
  function show(i, dir, quiet) { if (quiet) return showNow(i, dir, quiet); smooth(() => showNow(i, dir, quiet)); }
  function showNow(i, dir, quiet) {
    state.i = Math.max(0, Math.min(n, i));
    const last = state.i === n;
    const st = e.steps[state.i];
    DS.set("lemme-last", { id: e.id, i: state.i });
    /* indices d'abord : le corrigé de l'étape reste caché tant qu'on ne l'a pas demandé */
    const veil = !last && st.h && hintsOn() && !seen.has(state.i);
    const qs = e.qnav ? [...new Set(e.steps.map(x => x.q))] : [];
    const curQ = last ? null : st.q;
    const qi = qs.indexOf(curQ);
    host.innerHTML = `${qs.length ? `<div class="qnav" role="group" aria-label="Aller à une question">${qs.map((q, k) => `<button type="button" data-q="${q}" class="${last || k < qi ? "done" : ""}" aria-pressed="${q === curQ}">Q${q}</button>`).join("")}<button type="button" data-go="${n}" class="qb" aria-pressed="${last}">Bilan</button></div>` : ""}
      <div class="prog"${qs.length ? " hidden" : ""}>${Array.from({ length: n + 1 }, (_, k) => `<button type="button" class="${k <= state.i ? "done" : ""}" data-go="${k}" aria-label="${k === n ? "Bilan" : "Étape " + (k + 1)}"></button>`).join("")}</div>
      <div class="stage" aria-live="polite">
        <div class="step" style="--anim:${dir < 0 ? "stepback" : "stepin"}">
          ${last
            ? `<span class="count">Bilan</span><div class="redac"><div class="redac-head"><h4>La rédaction complète</h4><button class="btn btn-ghost btn-sm" type="button" data-big>${I.full} Voir en grand</button></div><div class="prose">${redaction(e)}</div></div><div class="folds">${e.piege ? `<details class="fold f-trap"><summary>Le piège</summary><div>${annotate(e.piege, e)}</div></details>` : ""}${e.methode ? `<details class="fold f-meth"><summary>La méthode</summary><div>${annotate(e.methode, e)}</div></details>` : ""}${all.length ? `<details class="fold"><summary>Tous les rappels utilisés (${all.length})</summary><div class="rappels">${all.map(r => rchip(r, e)).join("")}</div></details>` : ""}</div>`
            : `${e.qnav ? (qpos(e, state.i)[1] > 1 ? `<span class="count">Étape ${qpos(e, state.i)[0]} / ${qpos(e, state.i)[1]}</span>` : "") : `<span class="count">${st.q ? `Question ${st.q} · ` : ""}Étape ${state.i + 1} sur ${n}</span>`}<h3>${stt(st.t)}</h3>${st.h && hintsOn() ? `<details class="hint"${veil ? " open" : ""}><summary><span class="hint-ico">?</span>Indice</summary><div class="prose">${annotate(st.h, e)}</div></details>` : ""}${veil ? `<button type="button" class="btn btn-ghost reveal" data-reveal>Voir le corrigé</button><div class="prose veiled" hidden>${annotate(st.b, e)}</div>` : `<div class="prose">${annotate(st.b, e)}</div>`}${(st.rappels || []).length ? `<details class="fold fold-sm"><summary>Rappels utilisés (${st.rappels.length})</summary><div class="rappels">${st.rappels.map(r => rchip(r, e)).join("")}</div></details>` : ""}`}
        </div>
      </div>
      <div class="nav">
        <button class="btn btn-ghost" type="button" data-step="-1" ${state.i === 0 ? "disabled style=\"opacity:.4;cursor:default\"" : ""}>${I.left} Précédent</button>
        <span class="keys-hint" aria-hidden="true"><kbd>←</kbd><kbd>→</kbd> naviguer · <kbd>F</kbd> concentration · <kbd>/</kbd> chercher</span>
        ${last ? `<button class="btn btn-navy" type="button" data-step="restart">Recommencer</button>` : `<button class="btn btn-yellow" type="button" data-step="1">${state.i === n - 1 ? "Voir le bilan" : "Étape suivante"} ${I.arrow}</button>`}
      </div>`;
    const rv = $("[data-reveal]", host); if (rv) rv.addEventListener("click", () => { seen.add(state.i); rv.remove(); const v = $(".veiled", host); v.hidden = false; const h = $(".hint", host); if (h) h.open = false; typeset(v); });
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
      const rv = $("[data-reveal]", host);
      if (k === "ArrowRight" && rv) { rv.click(); return; }
      if (k === "ArrowRight" && state.i < n) show(state.i + 1, 1);
      if (k === "ArrowLeft" && state.i > 0) show(state.i - 1, -1);
    }
  };
  intro();
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeMenus(); closeTip(); results.hidden = true; if ($("#drawer")) popDrawer(); else if ($("#bigread")) closeBig(); return; }
  const t = e.target, typing = t && (t.matches("input,textarea,select") || t.isContentEditable);
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); return; }
  if ($("#drawer") || $("#bigread") || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || typing) return;
  if (e.key === "/") { e.preventDefault(); openSearch(); return; }
  if (e.key === "f" || e.key === "F") { document.documentElement.classList.toggle("focus"); return; }
  const fl = $(".flash", app);
  if (fl && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { e.preventDefault(); flashGo(fl, e.key === "ArrowRight" ? 1 : -1); return; }
  if (fl && (e.key === " " || e.key === "Enter") && !t.closest("button")) { e.preventDefault(); const c = $(".fcard:not([hidden])", fl); if (c) c.classList.toggle("flip"); return; }
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  /* on voit la touche : le bouton correspondant s'enfonce avant de changer de page */
  if (player) {
    e.preventDefault();
    const b = $(`#player [data-step="${e.key === "ArrowRight" ? 1 : -1}"]:not([disabled])`); if (b) press(b);
    const pl = player; setTimeout(() => { if (player === pl) pl.key(e.key); }, b ? 110 : 0); return;
  }
  const pb = $(`.pager [data-key="${e.key}"]`, app);
  if (pb) { e.preventDefault(); press(pb); setTimeout(() => { location.hash = pb.getAttribute("href"); }, 140); }
});

function openSearch() { if ($("#hq")) { $("#hq").focus(); return; } sbar.hidden = false; stog.setAttribute("aria-expanded", "true"); q.focus(); q.select(); }
function flashGo(fl, d) {
  const cs = $$(".fcard", fl), k = cs.findIndex(c => !c.hidden), j = Math.max(0, Math.min(cs.length - 1, k + d));
  const b = $(`[data-fl="${d}"]`, fl); if (b) press(b);
  cs.forEach((c, x) => { c.hidden = x !== j; c.classList.remove("flip"); });
  $(".fpos", fl).textContent = `${j + 1} / ${cs.length}`;
}
function press(b) { b.classList.remove("kp"); void b.offsetWidth; b.classList.add("kp"); setTimeout(() => b.classList.remove("kp"), 260); }
/* ---------- Labos de la Méthode « Matrices » ---------- */
/* fractions exactes */
const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
const Fr = (n, d = 1) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d); return { n: n / g, d: d / g }; };
const fadd = (a, b) => Fr(a.n * b.d + b.n * a.d, a.d * b.d), fmul = (a, b) => Fr(a.n * b.n, a.d * b.d), fdiv = (a, b) => Fr(a.n * b.d, a.d * b.n);
const ftex = f => f.d === 1 ? String(f.n) : `${f.n < 0 ? "-" : ""}\\frac{${Math.abs(f.n)}}{${f.d}}`;
const fstr = f => f.d === 1 ? String(f.n) : `${f.n}/${f.d}`;
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pm = (rows, cls = "") => `<table class="mx ${cls}">${rows.map((r, i) => `<tr>${r.map((v, j) => `<td data-i="${i}" data-j="${j}">${v}</td>`).join("")}</tr>`).join("")}</table>`;
const mmul = (A, B) => A.map(r => B[0].map((_, j) => r.reduce((s, v, k) => s + v * B[k][j], 0)));
const texM = M => `\\begin{pmatrix}${M.map(r => r.join("&")).join("\\\\")}\\end{pmatrix}`;
function mountMlab(host) {
  const k = host.dataset.mlab; host.classList.add("mlab");
  ({ prod: mlProd, gauss: mlGauss, puiss: mlPuiss, exos: mlExos, quiz: h => mlQuiz(h, QMAT), perm: mlPerm, sarrus: mlSarrus, dev: mlDev, colf: mlColf, chgbase: mlChg, diag: mlDiag, exred: mlExRed, quizred: h => mlQuiz(h, QRED), exdet: mlExDet, quizdet: h => mlQuiz(h, QDET), edo1: mlEdo1, edo2: mlEdo2, quizedo: h => mlQuiz(h, QEDO), pascal: mlPascal, binome: mlBinome, sommes: mlSommes, quizalg: h => mlQuiz(h, QALG), expform: mlExpForm, lin: mlLin, rac2: mlRac2, racn: mlRacn, quizcpx: h => mlQuiz(h, QCPX), riemann: mlRiemann, ipp: mlIpp, quizint: h => mlQuiz(h, QINT), nature: mlNature, partielles: mlPartielles, quizser: h => mlQuiz(h, QSER), taylor: mlTaylor, dlex: mlDlEx, quizdl: h => mlQuiz(h, QDL), domin: mlDomin, quizipar: h => mlQuiz(h, QIPAR), fn: mlFn, quizsf: h => mlQuiz(h, QSF), diveucl: mlDivEucl, des: mlDes, quizpoly: h => mlQuiz(h, QPOLY), absval: mlAbsVal, entx: mlEntX, supeps: mlSupEps, quizreel: h => mlQuiz(h, QREEL), cobweb: mlCobweb, arigeo: mlAriGeo, recur2: mlRecur2, quizsuite: h => mlQuiz(h, QSUITE), modele: mlModele, denex: mlDenEx, quizden: h => mlQuiz(h, QDEN), riemref: mlRiemRef, quizimp: h => mlQuiz(h, QIMP), euclz: mlEuclZ, dioph: mlDioph, powmod: mlPowMod, quizarith: h => mlQuiz(h, QARITH), arcval: mlArcVal, arcfx: mlArcFx, quizfu: h => mlQuiz(h, QFU), gram: mlGram, projpl: mlProjPl, quizph: h => mlQuiz(h, QPH), spec2: mlSpec2, rot3: mlRot3, quizeu: h => mlQuiz(h, QEU), boules: mlBoules, quizevn: h => mlQuiz(h, QEVN), polar: mlPolar, crit: mlCrit, quizcd: h => mlQuiz(h, QCD), expmat: mlExpMat, quizfs: h => mlQuiz(h, QFS), arcp: mlArcP, quizfv: h => mlQuiz(h, QFV), bayes: mlBayes, binomp: mlBinomP, quizpr: h => mlQuiz(h, QPR), cayley: mlCayley, quizst: h => mlQuiz(h, QST), poisapp: mlPoisApp, lfgn: mlLfgn, quizpd: h => mlQuiz(h, QPD), rangfam: mlRangFam, kerim: mlKerIm, quizev: h => mlQuiz(h, QEV), quizal: h => mlQuiz(h, QAL), cordes: mlCordes, quizcvx: h => mlQuiz(h, QCVX), imgsq: mlImgSq, homog: mlHomog, relprop: mlRelProp, quizens: h => mlQuiz(h, QENS), rayonda: mlRayonDA, dsefrac: mlDseFrac, quizse: h => mlQuiz(h, QSE) })[k](host);
}
/* 1. Produit en croix : on clique une case de AB */
function mlProd(host) {
  let A, B;
  const draw = () => {
    const C = mmul(A, B);
    host.innerHTML = `<p class="mlt">Produit en croix : clique une case du résultat</p><div class="croix"><span></span>${pm(B, "mb")}${pm(A, "ma")}${pm(C.map(r => r.map(() => "?")), "mc")}</div><p class="mlcalc">Choisis une case de $AB$.</p><button type="button" class="btn btn-ghost btn-sm" data-new>Autres matrices</button>`;
    $$(".mc td", host).forEach(td => td.addEventListener("click", () => {
      const i = +td.dataset.i, j = +td.dataset.j;
      $$("td", host).forEach(x => x.classList.remove("on"));
      $$(`.ma td[data-i="${i}"]`, host).forEach(x => x.classList.add("on"));
      $$(`.mb td[data-j="${j}"]`, host).forEach(x => x.classList.add("on"));
      td.classList.add("on"); td.textContent = C[i][j];
      $(".mlcalc", host).innerHTML = `$c_{${i + 1},${j + 1}} = ${A[i].map((v, k) => `(${v})\\times(${B[k][j]})`).join(" + ")} = ${C[i][j]}$`;
      typeset($(".mlcalc", host));
    }));
    $("[data-new]", host).addEventListener("click", () => { gen(); draw(); });
    typeset(host);
  };
  const gen = () => { const n = rnd(2, 3), p = rnd(2, 3), r = rnd(2, 3); A = Array.from({ length: n }, () => Array.from({ length: p }, () => rnd(-3, 5))); B = Array.from({ length: p }, () => Array.from({ length: r }, () => rnd(-3, 5))); };
  A = [[3, 1], [2, 4]]; B = [[1, 5], [7, 8]]; draw();
}
/* 2. Pivot de Gauss pas à pas sur (A | I) */
function mlGauss(host) {
  let steps, k;
  const build = A0 => {
    const n = A0.length, M = A0.map((r, i) => r.map(v => Fr(v)).concat(A0.map((_, j) => Fr(i === j ? 1 : 0))));
    const S = [{ M: M.map(r => r.slice()), op: "Départ : $(A\\,|\\,I_3)$" }];
    for (let c = 0; c < n; c++) {
      let p = c; while (p < n && M[p][c].n === 0) p++;
      if (p === n) return null;
      if (p !== c) { [M[p], M[c]] = [M[c], M[p]]; S.push({ M: M.map(r => r.slice()), op: `$L_${c + 1}\\leftrightarrow L_${p + 1}$`, row: c }); }
      const pv = M[c][c];
      if (!(pv.n === 1 && pv.d === 1)) { M[c] = M[c].map(v => fdiv(v, pv)); S.push({ M: M.map(r => r.slice()), op: `$L_${c + 1}\\leftarrow ${pv.n === -1 && pv.d === 1 ? "-" : `\\frac{1}{${ftex(pv)}}`}L_${c + 1}$`, row: c }); }
      for (let r = 0; r < n; r++) if (r !== c && M[r][c].n !== 0) { const f = M[r][c]; M[r] = M[r].map((v, j) => fadd(v, fmul(Fr(-f.n, f.d), M[c][j]))); S.push({ M: M.map(x => x.slice()), op: `$L_${r + 1}\\leftarrow L_${r + 1} ${f.n > 0 ? "-" : "+"} ${f.n * (f.n > 0 ? 1 : -1) === f.d ? "" : ftex(Fr(Math.abs(f.n), f.d))}L_${c + 1}$`, row: r }); }
    }
    S.push({ M: M.map(r => r.slice()), op: "À gauche $I_3$ : à droite, $A^{-1}$.", end: true });
    return S;
  };
  const gen = () => { for (;;) { const A = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => rnd(-2, 3))); const S = build(A); if (S && S.length <= 12 && S.flatMap(x => x.M.flat()).every(f => f.d <= 6)) return S; } };
  const draw = () => {
    const st = steps[k];
    host.innerHTML = `<p class="mlt">Pivot de Gauss pas à pas</p><div class="gstep"><table class="mx aug">${st.M.map((r, i) => `<tr class="${i === st.row ? "on" : ""}">${r.map((v, j) => `<td class="${j === 3 ? "sep" : ""}">$${ftex(v)}$</td>`).join("")}</tr>`).join("")}</table></div><p class="mlcalc">${st.op}</p><div class="mlnav"><button type="button" class="btn btn-ghost btn-sm" data-g="-1"${k ? "" : " disabled"}>${I.left} Avant</button><span class="mlpos">${k + 1} / ${steps.length}</span><button type="button" class="btn btn-ghost btn-sm" data-g="1"${k < steps.length - 1 ? "" : " disabled"}>Après ${I.arrow}</button><button type="button" class="btn btn-ghost btn-sm" data-new>Autre matrice</button></div>`;
    $$("[data-g]", host).forEach(b => b.addEventListener("click", () => { k += +b.dataset.g; draw(); }));
    $("[data-new]", host).addEventListener("click", () => { steps = gen(); k = 0; draw(); });
    typeset(host);
  };
  steps = build([[1, 2, 0], [0, 1, 1], [1, 0, 2]]) || gen(); k = 0; draw();
}
/* 3. Puissances : A = λI + N, curseur sur n, binôme écrit en entier */
function mlPuiss(host) {
  const N = [[0, 1, 0], [0, 0, 1], [0, 0, 0]], N2 = [[0, 0, 1], [0, 0, 0], [0, 0, 0]], I3 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
  let lam = 2, n = 3;
  const bin = (a, b) => b < 0 || b > a ? 0 : Math.round(Array.from({ length: b }, (_, i) => (a - i) / (i + 1)).reduce((x, y) => x * y, 1));
  const draw = () => {
    let P = I3; const A = I3.map((r, i) => r.map((v, j) => lam * v + N[i][j]));
    for (let t = 0; t < n; t++) P = mmul(P, A);
    const pw = (b, e) => e === 0 ? "1" : `${par(b)}^{${e}}`;
    const terms = [];
    for (let k = 0; k <= Math.min(n, 4); k++) {
      const t = `\\binom{${n}}{${k}}\\cB{(${lam}I_3)^{${n - k}}}\\cR{N^{${k}}}`;
      terms.push(k >= 3 ? `\\cancel{${t}}` : t);
    }
    if (n > 4) terms.push("\\cdots");
    const c = [0, 1, 2].map(k => k <= n ? bin(n, k) * Math.pow(lam, n - k) : 0);
    const val = [0, 1, 2].filter(k => k <= n).map(k => `\\underbrace{${bin(n, k)}\\times${pw(lam, n - k)}}_{=\\,${c[k]}}${["I_3", "\\cR N", "\\cG{N^2}"][k]}`).join(" + ");
    const mats = [0, 1, 2].filter(k => k <= n).map(k => `${c[k]}${texM([I3, N, N2][k])}`).join(" + ");
    host.innerHTML = `<p class="mlt">Le binôme pas à pas : $A = ${lam}I_3 + N$</p><div class="mlrow"><label>$\\lambda = ${lam}$ <input type="range" min="-3" max="3" value="${lam}" data-l></label><label>$n = ${n}$ <input type="range" min="0" max="10" value="${n}" data-n></label></div>
      <p class="mlstep">1. La formule écrite en entier ${n >= 3 ? "(les termes barrés contiennent $N^3 = 0$)" : ""} :</p><p class="mlcalc">$$A^{${n}} = ${terms.join(" + ")}$$</p>
      <p class="mlstep">2. On calcule les coefficients $\\binom{${n}}{k}\\times${par(lam)}^{${n}-k}$ :</p><p class="mlcalc">$$A^{${n}} = ${val}$$</p>
      <p class="mlstep">3. On additionne les matrices :</p><p class="mlcalc">$$A^{${n}} = ${mats} = ${texM(P)}$$</p>`;
    $("[data-l]", host).addEventListener("input", e => { lam = +e.target.value; draw(); });
    $("[data-n]", host).addEventListener("input", e => { n = +e.target.value; draw(); });
    typeset(host);
  };
  draw();
}
/* 4. Exercices générés au hasard, avec vérification */
function mlExos(host) {
  const KINDS = ["Produit", "Inverse 2×2", "Système 2×2"];
  let kind = 0, ex;
  const parse = s => { s = String(s).trim().replace(",", "."); if (/^-?\d+\s*\/\s*-?\d+$/.test(s)) { const [a, b] = s.split("/").map(Number); return b ? a / b : NaN; } return s === "" ? NaN : Number(s); };
  const gen = () => {
    if (kind === 0) { const A = [[rnd(-3, 4), rnd(-3, 4)], [rnd(-3, 4), rnd(-3, 4)]], B = [[rnd(-3, 4), rnd(-3, 4)], [rnd(-3, 4), rnd(-3, 4)]]; return { q: `Calcule $AB$ avec $A = ${texM(A)}$ et $B = ${texM(B)}$.`, ans: mmul(A, B).flat(), shape: [2, 2], sol: `$$AB = ${texM(mmul(A, B))}$$` }; }
    if (kind === 1) { for (;;) { const a = rnd(-3, 4), b = rnd(-3, 4), c = rnd(-3, 4), d = rnd(-3, 4), D = a * d - b * c; if (!D) continue; const inv = [d, -b, -c, a].map(v => Fr(v, D)); return { q: `Calcule l'inverse de $A = ${texM([[a, b], [c, d]])}$. Fractions acceptées : 1/3.`, ans: inv.map(f => f.n / f.d), shape: [2, 2], sol: `$$\\det A = ${a}\\cdot${d} - (${b})(${c}) = ${D}\\ne0,\\qquad A^{-1} = \\frac1{${D}}${texM([[d, -b], [-c, a]])} = ${texM([[ftex(inv[0]), ftex(inv[1])], [ftex(inv[2]), ftex(inv[3])]])}$$` }; } }
    for (;;) { const a = rnd(-3, 4), b = rnd(-3, 4), c = rnd(-3, 4), d = rnd(-3, 4), D = a * d - b * c; if (!D) continue; const x = rnd(-4, 4), y = rnd(-4, 4); const e1 = a * x + b * y, e2 = c * x + d * y; return { q: `Résous $\\left\\{\\begin{aligned}${a}x + (${b})y&= ${e1}\\\\${c}x + (${d})y&= ${e2}\\end{aligned}\\right.$ : donne $x$ puis $y$.`, ans: [x, y], shape: [2, 1], sol: `$$\\det A = ${D}\\neq0:\\ \\text{une seule solution},\\qquad x = ${x},\\quad y = ${y}.$$` }; }
  };
  const draw = () => {
    host.innerHTML = `<div class="mlseg">${KINDS.map((t, i) => `<button type="button" data-k="${i}" aria-pressed="${i === kind}">${t}</button>`).join("")}</div><p class="mlq">${ex.q}</p><div class="mlin" style="grid-template-columns:repeat(${ex.shape[1]},80px)">${ex.ans.map((_, i) => `<input inputmode="decimal" aria-label="Case ${i + 1}" data-a="${i}">`).join("")}</div><div class="mlnav"><button type="button" class="btn btn-yellow btn-sm" data-check>Vérifier</button><button type="button" class="btn btn-ghost btn-sm" data-sol>Voir la correction</button><button type="button" class="btn btn-ghost btn-sm" data-new>Un autre</button></div><p class="mlres"></p><div class="mlsol" hidden>${ex.sol}</div>`;
    $$("[data-k]", host).forEach(b => b.addEventListener("click", () => { kind = +b.dataset.k; ex = gen(); draw(); }));
    $("[data-check]", host).addEventListener("click", () => {
      let ok = 0; $$("[data-a]", host).forEach(i => { const v = parse(i.value), good = Math.abs(v - ex.ans[+i.dataset.a]) < 1e-9; i.classList.toggle("ok", good); i.classList.toggle("ko", !good); ok += good; });
      $(".mlres", host).textContent = ok === ex.ans.length ? "Tout est juste." : `${ok} sur ${ex.ans.length} juste${ok > 1 ? "s" : ""}. Les cases en rouge sont à revoir.`;
    });
    $("[data-sol]", host).addEventListener("click", () => { const s = $(".mlsol", host); s.hidden = false; typeset(s); });
    $("[data-new]", host).addEventListener("click", () => { ex = gen(); draw(); });
    typeset(host);
  };
  ex = gen(); draw();
}
/* 5. Vrai ou faux : les pièges */
const QMAT = [
    ["Si $AB = 0$, alors $A = 0$ ou $B = 0$.", false, "Faux : $\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix} = 0$."],
    ["$(A + B)^2 = A^2 + 2AB + B^2$ pour toutes matrices carrées.", false, "Faux : $(A + B)^2 = A^2 + AB + BA + B^2$, égal seulement si $AB = BA$."],
    ["${}^t(AB) = {}^tB\\,{}^tA$.", true, "Vrai : l'ordre s'inverse, comme pour l'inverse."],
    ["$\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$.", true, "Vrai, même si $AB\\neq BA$."],
    ["Si $AB = I_n$ avec $A, B$ carrées, alors $BA = I_n$.", true, "Vrai pour des matrices carrées : $B = A^{-1}$."],
    ["$3A^2 + 2A = A(3A + 2)$.", false, "Faux : $A(3A + 2I_n)$, on n'ajoute pas un nombre à une matrice."],
    ["Une matrice triangulaire à diagonale nulle est nilpotente.", true, "Vrai : $N^n = 0$ pour une telle matrice de taille $n$."],
    ["Si $AX = B$ a deux solutions, $A$ est inversible.", false, "Faux : si $A$ était inversible, la solution serait unique, $X = A^{-1}B$."],
    ["$(AB)^{-1} = A^{-1}B^{-1}$.", false, "Faux : $(AB)^{-1} = B^{-1}A^{-1}$."],
    ["Une matrice antisymétrique a des zéros sur la diagonale.", true, "Vrai : $a_{i,i} = -a_{i,i}$ donc $a_{i,i} = 0$."]
  ];
const QDET = [
    ["$\\det(2A) = 2\\det A$ pour $A\\in\\mathcal M_3(\\mathbb R)$.", false, "Faux : $\\det(2A) = 2^3\\det A = 8\\det A$."],
    ["$\\det(A + B) = \\det A + \\det B$.", false, "Faux en général : $\\det(I_2 + I_2) = 4\\neq2$."],
    ["$\\det({}^tA) = \\det A$.", true, "Vrai : lignes et colonnes jouent le même rôle."],
    ["Un cycle de longueur $3$ est une permutation impaire.", false, "Faux : $\\varepsilon = (-1)^{3-1} = 1$, il est pair."],
    ["Échanger deux lignes change le signe du déterminant.", true, "Vrai : le déterminant est alterné."],
    ["$L_2\\leftarrow L_2 - 3L_1$ ne change pas le déterminant.", true, "Vrai : on ajoute à une ligne un multiple d'une autre."],
    ["La règle de Sarrus marche pour les matrices $4\\times4$.", false, "Faux : seulement en taille $3$ ; en taille $4$ il y a $24$ produits."],
    ["Si deux colonnes sont égales, le déterminant est nul.", true, "Vrai : en les échangeant, $\\det A = -\\det A$."],
    ["Une matrice antisymétrique de taille $3$ a un déterminant nul.", true, "Vrai : $\\det A = \\det({}^tA) = \\det(-A) = (-1)^3\\det A$."],
    ["$\\operatorname{Card}\\mathfrak S_4 = 16$.", false, "Faux : $\\operatorname{Card}\\mathfrak S_4 = 4! = 24$."]
  ];
const QRED = [
    ["Si $P(A) = 0$, alors $\\operatorname{Sp}(A)$ est l'ensemble des racines de $P$.", false, "Faux : seulement $\\operatorname{Sp}(A)\\subset$ racines de $P$. Exemple : $I_n$ annule $X^2 - 1$ mais $-1\\notin\\operatorname{Sp}(I_n)$."],
    ["Une matrice qui a $n$ valeurs propres distinctes est diagonalisable.", true, "Vrai : chaque sous-espace propre est une droite et leur somme est de dimension $n$."],
    ["Une matrice diagonalisable a $n$ valeurs propres distinctes.", false, "Faux : $I_n$ est diagonale avec une seule valeur propre."],
    ["$\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ est diagonalisable.", false, "Faux : $\\operatorname{Sp} = \\{1\\}$ et elle n'est pas égale à $I_2$."],
    ["Toute matrice de $\\mathcal M_n(\\mathbb C)$ est trigonalisable.", true, "Vrai : $\\chi_A$ est scindé sur $\\mathbb C$."],
    ["Une matrice symétrique réelle est diagonalisable.", true, "Vrai : théorème spectral, et même dans une base orthonormée."],
    ["$\\chi_A = \\det(A - XI_n)$.", false, "Faux : le programme pose $\\chi_A = \\det(XI_n - A)$, unitaire."],
    ["Si $\\operatorname{rg}A = 1$ et $\\operatorname{tr}A\\neq0$, $A$ est diagonalisable.", true, "Vrai : $\\dim E_0 = n - 1$ et $E_{\\operatorname{tr}A}$ est une droite."],
    ["$A$ et ${}^tA$ ont les mêmes vecteurs propres.", false, "Faux : même spectre, mais pas les mêmes vecteurs propres en général."],
    ["Une matrice nilpotente non nulle n'est pas diagonalisable.", true, "Vrai : son seul spectre est $\\{0\\}$, elle serait semblable à $0$."]
  ];
function mlQuiz(host, Q) {
  let k = 0, score = 0, done = false;
  const draw = () => {
    if (k >= Q.length) { host.innerHTML = `<p class="mlq">Score : <b>${score} / ${Q.length}</b></p><button type="button" class="btn btn-ghost btn-sm" data-re>Recommencer</button>`; $("[data-re]", host).addEventListener("click", () => { k = 0; score = 0; done = false; draw(); }); return; }
    const [t, v, why] = Q[k];
    host.innerHTML = `<p class="mlpos">${k + 1} / ${Q.length}</p><p class="mlq">${t}</p><div class="mlnav"><button type="button" class="btn btn-ghost btn-sm" data-v="1">Vrai</button><button type="button" class="btn btn-ghost btn-sm" data-v="0">Faux</button></div><p class="mlres"></p>`;
    $$("[data-v]", host).forEach(b => b.addEventListener("click", () => {
      if (done) return; done = true;
      const good = (b.dataset.v === "1") === v; score += good;
      b.classList.add(good ? "ok" : "ko");
      const r = $(".mlres", host); r.innerHTML = `${good ? "Bonne réponse." : "Raté."} ${why} <button type="button" class="btn btn-ghost btn-sm" data-next>Suivante</button>`; typeset(r);
      $("[data-next]", r).addEventListener("click", () => { k++; done = false; draw(); });
    }));
    typeset(host);
  };
  draw();
}

/* Un tableau étiqueté (.labm) devient une vraie matrice entre parenthèses, avec les étiquettes au-dessus et à gauche */
function fixLabm(root) {
  $$(".labm table:not(.mx)", root).forEach(t => {
    const rows = [...t.rows], head = [...rows[0].cells].slice(1).filter(c => c.innerHTML.trim()), body = rows.slice(1);
    const left = body.map(r => r.cells[0]), nums = body.map(r => [...r.cells].slice(1).filter(c => !c.classList.contains("lr")));
    const w = document.createElement("div"); w.className = "lm2"; w.style.setProperty("--nc", nums[0].length);
    w.innerHTML = `<div class="lm-top"><span></span>${head.map(c => `<span class="${c.className}" ${c.dataset.c ? `data-c="${c.dataset.c}"` : ""} style="${c.getAttribute("style") || ""}">${c.innerHTML}</span>`).join("")}</div><div class="lm-body"><div class="lm-left">${left.map(c => `<span class="${c.className}">${c.innerHTML}</span>`).join("")}</div><table class="mx lm-mx">${nums.map(r => `<tr>${r.map(c => `<td class="${c.className}"${c.dataset.c ? ` data-c="${c.dataset.c}"` : ""}>${c.innerHTML}</td>`).join("")}</tr>`).join("")}</table></div>`;
    t.replaceWith(w);
  });
}
/* ---------- Labos : applications linéaires ---------- */
const CC = ["cB", "cR", "cG", "cV"], CH = ["#2B5BD7", "#D4503B", "#1F8A5B", "#7A4CC2"];
/* Les colonnes de A sont les images ; AX est une combinaison des colonnes */
function mlColf(host) {
  const A = [[3, -8, 7], [4, 5, -2]]; let x = [2, -1, 1], col = null;
  const draw = () => {
    const Y = A.map(r => r.reduce((s, v, j) => s + v * x[j], 0));
    host.innerHTML = `<p class="mlt">Clique une colonne, puis bouge les coordonnées de $x$</p>
      <div class="labm"><table><tr><td></td>${[0, 1, 2].map(j => `<td class="kB colh${col === j ? " on" : ""}" data-c="${j}" style="--k:${CH[j]}">$f(e_${j + 1})$</td>`).join("")}</tr>${A.map((r, i) => `<tr><td class="kR">$e'_${i + 1}$</td>${r.map((v, j) => `<td class="c${j + 1}${col === j ? " on" : ""}" data-c="${j}">${v}</td>`).join("")}</tr>`).join("")}</table></div>
      <p class="mlcalc">${col === null ? "Clique une colonne : c'est l'image d'un vecteur de départ." : `$f(\\cB{e_${col + 1}}) = ${A[0][col]}\\cR{e'_1} ${A[1][col] < 0 ? "-" : "+"} ${Math.abs(A[1][col])}\\cR{e'_2}$ : on lit la colonne $${col + 1}$ de haut en bas.`}</p>
      <div class="mlrow">${[0, 1, 2].map(j => `<label style="color:${CH[j]}">$a_${j + 1} = ${x[j]}$ <input type="range" min="-3" max="3" value="${x[j]}" data-x="${j}"></label>`).join("")}</div>
      <p class="mlcalc">$$f(x) = ${[0, 1, 2].map(j => `\\${CC[j]}{${par(x[j])}}\\begin{pmatrix}\\${CC[j]}{${A[0][j]}}\\\\\\${CC[j]}{${A[1][j]}}\\end{pmatrix}`).join(" + ")} = \\begin{pmatrix}${Y[0]}\\\\${Y[1]}\\end{pmatrix}$$</p>
      <p class="mlnote">Astuce : $AX$ est la combinaison des colonnes de $A$ avec les coordonnées de $x$. C'est la linéarité écrite en matrices.</p>`;
    fixLabm(host);
    $$("[data-c]", host).forEach(t => t.addEventListener("click", () => { col = +t.dataset.c; draw(); }));
    $$("[data-x]", host).forEach(r => r.addEventListener("input", () => { x[+r.dataset.x] = +r.value; draw(); }));
    typeset(host);
  };
  draw();
}
/* Changement de base 2×2, avec le dessin des vecteurs */
function mlChg(host) {
  let A = [[3, 1], [1, 3]], E = [[1, 1], [1, -1]];
  const fm = M => `\\begin{pmatrix}${M.map(r => r.map(ftex).join("&")).join("\\\\")}\\end{pmatrix}`;
  const fmul2 = (X, Y) => X.map(r => Y[0].map((_, j) => r.reduce((s, v, k) => fadd(s, fmul(v, Y[k][j])), Fr(0))));
  const draw = () => {
    const P = [[E[0][0], E[1][0]], [E[0][1], E[1][1]]], d = det2(P);
    let body;
    if (!d) body = `<p class="mlres">Ces deux vecteurs sont colinéaires : ce n'est pas une base, $\\det P = 0$.</p>`;
    else {
      const Pf = P.map(r => r.map(v => Fr(v))), Af = A.map(r => r.map(v => Fr(v))), Pi = [[Fr(P[1][1], d), Fr(-P[0][1], d)], [Fr(-P[1][0], d), Fr(P[0][0], d)]];
      const AP = fmul2(Af, Pf), Ap = fmul2(Pi, AP), diag = Ap[0][1].n === 0 && Ap[1][0].n === 0;
      body = `<p class="mlcalc">$$\\cG P = \\begin{pmatrix}\\cG{${P[0][0]}}&\\cG{${P[0][1]}}\\\\\\cG{${P[1][0]}}&\\cG{${P[1][1]}}\\end{pmatrix},\\qquad\\cB{P^{-1}} = ${fm(Pi)}$$$$AP = ${fm(AP)}\\qquad\\cG{A'} = P^{-1}AP = ${fm(Ap)}$$</p><p class="mlres">${diag ? "La nouvelle matrice est diagonale : chaque nouveau vecteur est envoyé sur un multiple de lui-même (les flèches pointillées sont alignées)." : "Pas diagonale : les images (pointillés) ne sont pas alignées avec les nouveaux vecteurs."}</p>`;
    }
    const S = 22, O = 120, pt = (x, y) => [O + x * S, O - y * S];
    const arrow = (v, c, dash) => { const [x, y] = pt(v[0], v[1]); return `<line x1="${O}" y1="${O}" x2="${x}" y2="${y}" stroke="${c}" stroke-width="2.5" ${dash ? 'stroke-dasharray="5 4"' : ""} marker-end="url(#mk${c.slice(1)})"/>`; };
    const img = v => [A[0][0] * v[0] + A[0][1] * v[1], A[1][0] * v[0] + A[1][1] * v[1]];
    const mk = ["#1F8A5B", "#2B5BD7"].map(c => `<marker id="mk${c.slice(1)}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`).join("");
    const grid = Array.from({ length: 11 }, (_, i) => `<line x1="${O + (i - 5) * S}" y1="10" x2="${O + (i - 5) * S}" y2="230" stroke="var(--line)"/><line x1="10" y1="${O + (i - 5) * S}" x2="230" y2="${O + (i - 5) * S}" stroke="var(--line)"/>`).join("");
    host.innerHTML = `<p class="mlt">Changement de base : choisis $A$ et les nouveaux vecteurs</p>
      <div class="chgin"><div><span>$A$</span><div class="mlin" style="grid-template-columns:repeat(2,60px)">${A.flat().map((v, i) => `<input value="${v}" data-a="${i}" inputmode="numeric">`).join("")}</div></div>
      <div><span style="color:#1F8A5B">$e'_1$, $e'_2$ (en colonnes)</span><div class="mlin" style="grid-template-columns:repeat(2,60px)">${[E[0][0], E[1][0], E[0][1], E[1][1]].map((v, i) => `<input value="${v}" data-e="${i}" inputmode="numeric">`).join("")}</div></div>
      <svg viewBox="0 0 240 240" width="240" height="240" role="img" aria-label="Vecteurs de la nouvelle base et leurs images"><defs>${mk}</defs>${grid}${arrow(E[0], "#1F8A5B")}${arrow(E[1], "#1F8A5B")}${arrow(img(E[0]), "#2B5BD7", 1)}${arrow(img(E[1]), "#2B5BD7", 1)}</svg></div>
      <p class="mlnote"><span style="color:#1F8A5B">vert</span> : $e'_1$, $e'_2$ · <span style="color:#2B5BD7">bleu pointillé</span> : leurs images $f(e'_1)$, $f(e'_2)$</p>
      ${body}
      <div class="mlnav"><button type="button" class="btn btn-ghost btn-sm" data-ex>Exemple qui se diagonalise</button><button type="button" class="btn btn-ghost btn-sm" data-rnd>Au hasard</button></div>`;
    const read = () => { const a = $$("[data-a]", host).map(i => parseInt(i.value) || 0), e = $$("[data-e]", host).map(i => parseInt(i.value) || 0); A = [[a[0], a[1]], [a[2], a[3]]]; E = [[e[0], e[2]], [e[1], e[3]]]; draw(); };
    $$("[data-a],[data-e]", host).forEach(i => i.addEventListener("change", read));
    $("[data-ex]", host).addEventListener("click", () => { const ex = [[[[3, 1], [1, 3]], [[1, 1], [1, -1]]], [[[2, 1], [0, 3]], [[1, 0], [1, 1]]], [[[1, 2], [2, 1]], [[1, 1], [1, -1]]], [[[4, -2], [1, 1]], [[1, 1], [2, 1]]]]; const k = rnd(0, ex.length - 1); A = ex[k][0]; E = ex[k][1]; draw(); });
    $("[data-rnd]", host).addEventListener("click", () => { A = randM(2, -2, 3); E = randM(2, -2, 2); draw(); });
    typeset(host);
  };
  draw();
}

/* ---------- Labos : réduction ---------- */
const randUni = n => { let P = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => +(i === j))); for (let t = 0; t < 5; t++) { const i = rnd(0, n - 1), j = rnd(0, n - 1), k = [-1, 1, 2][rnd(0, 2)]; if (i !== j) P = P.map((r, a) => a === i ? r.map((v, b) => v + k * P[j][b]) : r); } return P; };
const inv2 = P => { const d = det2(P); return [[P[1][1] / d, -P[0][1] / d], [-P[1][0] / d, P[0][0] / d]]; };
/* inverse exacte d'une matrice unimodulaire (det ±1), par la comatrice */
const invUni = P => { const n = P.length, d = detN(P); return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => ((i + j) % 2 ? -1 : 1) * detN(minor(P, j, i)) / d)); };
/* aides pour les calculs détaillés de la réduction */
const lin = (cs, vs) => { let s = ""; cs.forEach((c, i) => { if (!c.n) return; const neg = c.n < 0, a = Fr(Math.abs(c.n), c.d), co = a.n === 1 && a.d === 1 ? "" : ftex(a); s += s ? (neg ? " - " : " + ") : (neg ? "-" : ""); s += co + vs[i]; }); return s || "0"; };
const polyTex = cs => { const n = cs.length - 1; let s = ""; cs.forEach((c, i) => { if (!c) return; const d = n - i, a = Math.abs(c), mon = d === 0 ? "" : d === 1 ? "X" : `X^{${d}}`, co = a === 1 && d ? "" : String(a); s += s ? (c < 0 ? " - " : " + ") : (c < 0 ? "-" : ""); s += co + mon; }); return s || "0"; };
const sysTex = (rows, vs) => rows.length === 1 ? `${lin(rows[0], vs)} = 0` : `\\left\\{\\begin{aligned}${rows.map(r => `${lin(r, vs)} &= 0`).join("\\\\")}\\end{aligned}\\right.`;
const lcmN = (a, b) => a / gcd(a, b) * b;
/* noyau de M (entiers) par le pivot de Gauss, en gardant la trace des opérations */
function kerSteps(M) {
  const R = M.map(r => r.map(v => Fr(v))), ops = [], piv = [], n = R[0].length; let r = 0;
  for (let c = 0; c < n && r < R.length; c++) {
    let i = r; while (i < R.length && !R[i][c].n) i++;
    if (i === R.length) continue;
    if (i !== r) { [R[i], R[r]] = [R[r], R[i]]; ops.push(`L_{${r + 1}}\\leftrightarrow L_{${i + 1}}`); }
    for (let k = 0; k < R.length; k++) {
      if (k === r || !R[k][c].n) continue;
      const f = fdiv(R[k][c], R[r][c]);
      R[k] = R[k].map((v, j) => fadd(v, fmul(Fr(-f.n, f.d), R[r][j])));
      const a = Fr(Math.abs(f.n), f.d), co = a.n === 1 && a.d === 1 ? "" : ftex(a);
      ops.push(`L_{${k + 1}}\\leftarrow L_{${k + 1}} ${f.n > 0 ? "-" : "+"} ${co}L_{${r + 1}}`);
    }
    piv.push([r, c]); r++;
  }
  const pc = piv.map(p => p[1]), free = [...Array(n).keys()].filter(j => !pc.includes(j));
  const expr = piv.map(([ri, c]) => ({ c, co: free.map(f => fdiv(Fr(-R[ri][f].n, R[ri][f].d), R[ri][c])) }));
  const basis = free.map(f => { const v = Array(n).fill(0).map(() => Fr(0)); v[f] = Fr(1); expr.forEach(e => { v[e.c] = e.co[free.indexOf(f)]; }); const L = v.reduce((s, x) => lcmN(s, x.d), 1); return v.map(x => x.n * L / x.d); });
  return { R: R.filter(row => row.some(v => v.n)), ops, free, expr, basis };
}
/* Arbre « accolades de manuel » : on réécrit l'ancien .tree (chaînes question / oui / non) */
const BRACE = '<svg class="brc" viewBox="0 0 16 100" preserveAspectRatio="none" aria-hidden="true"><path d="M14 1C6 1 8 10 8 25S8 45 2 50C8 55 8 60 8 75S6 99 14 99" fill="none" stroke="currentColor" stroke-width="1.4" vector-effect="non-scaling-stroke"/></svg>';
/* Bouton « revenir à l'arbre » : apparaît après un clic dans l'arbre, ramène à l'endroit cliqué */
function backTo(a) {
  let b = document.getElementById("treeback");
  if (!b) { b = document.createElement("button"); b.id = "treeback"; b.type = "button"; b.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 4v15M5 12l7 7 7-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Revenir à l’arbre</span>'; document.body.appendChild(b); window.addEventListener("hashchange", () => b.hidden = true); }
  b.hidden = false;
  b.onclick = () => { b.hidden = true; if (document.body.contains(a)) { a.scrollIntoView({ behavior: "smooth", block: "center" }); a.classList.remove("tb-flash"); void a.offsetWidth; a.classList.add("tb-flash"); } };
}
/* Division euclidienne posée « en potence » (A et B : coefficients du plus haut degré au plus bas, B unitaire de préférence) */
function potenceHtml(A, B) {
  const n = A.length - 1, m = B.length - 1, cols = n + 1, Q = [], rows = [];
  const term = (c, d, first) => { if (c === null || c === undefined) return ""; if (!c) return ""; const a = Math.abs(c), mon = d === 0 ? "" : d === 1 ? "X" : `X^{${d}}`, co = a === 1 && d ? "" : (Number.isInteger(a) ? a : ftex(Fr(Math.round(a * 1e6), 1e6))); return `$${c < 0 ? "-" : first ? "" : "+"}${co}${mon}$`; };
  const rowCells = (v, cls) => { let first = true; return v.map((c, k) => { const t = term(c, n - k, first); if (t) first = false; return `<td class="${cls}">${t}</td>`; }).join(""); };
  let cur = A.slice(), steps = [];
  rows.push(rowCells(cur, ""));
  for (let i = 0; i <= n - m; i++) {
    const c = cur[i] / B[0]; Q.push(c);
    if (!c) continue;
    const sub = Array(cols).fill(null); B.forEach((b, j) => { sub[i + j] = -c * b; });
    rows.push(rowCells(sub, "ps"));
    cur = cur.map((x, k) => sub[k] !== null ? x + sub[k] : x);
    const shown = cur.map((x, k) => k <= i ? null : x);
    rows.push(rowCells(shown, "pr").replace(/<td class="pr"><\/td>/g, '<td class="pr"></td>'));
    steps.push([c, n - i - m]);
  }
  const ptxt = v => { let f = true; return v.map((c, k) => { const t = term(c, v.length - 1 - k, f); if (t) f = false; return t.replace(/\$/g, ""); }).join(" ") || "0"; };
  const last = cur.slice(n - m + 1);
  const html = `<table class="pot"><tbody>${rows.map((r, i) => `<tr${i % 2 === 1 ? ' class="sub"' : ""}>${r}<td class="pb${i === 0 ? " pdiv" : i === 1 ? " pq" : ""}">${i === 0 ? `$${ptxt(B)}$` : i === 1 ? `$\\cR{${ptxt(Q)}}$` : ""}</td></tr>`).join("")}</tbody></table>`;
  return { html, Q, R: last, ptxt };
}
function renderPotence(el) { const A = el.dataset.a.split(",").map(Number), B = el.dataset.b.split(",").map(Number); el.innerHTML = potenceHtml(A, B).html; }
const STEP_RE = /^[\s ]*<b>[\s ]*(?:Étape[\s ]*)?(\d+(?:[\s ]*[–-][\s ]*\d+)?)[\s ]*(?:[.:][\s ]*)?([\s\S]*?)<\/b>[\s ]*(?::[\s ]*)?([\s\S]*)$/;
const NOSTEP = /^[\s ]*(Contrôle|Astuce|Vérification|Remarque|Moyen mnémotechnique|C'est l'exercice|Plus rapide)/;
function stepify(q, num, lead) {
  q.classList.add("exs");
  const n = document.createElement("span"); n.className = "exn"; n.textContent = num;
  const w = document.createElement("span"); w.className = "exbody";
  if (lead) { const bb = document.createElement("b"); const ld = lead.replace(/[\s:]+$/, "").replace(/(?:\\?[.,]|\{,\})+\$$/, "$").replace(/\.((?:<\/[a-z]+>)*)$/, "$1"); bb.innerHTML = ld.charAt(0).toUpperCase() + ld.slice(1) + (/\.\$?$/.test(ld) ? " " : ". "); w.appendChild(bb); }
  while (q.firstChild) w.appendChild(q.firstChild);
  q.append(n, w);
}
function numberSteps(body) {
  let k = 0;
  const lead = q => { const h = (q.firstElementChild && q.firstElementChild.tagName === "SPAN" && /^\s*<span/.test(q.innerHTML) ? q.firstElementChild : q).innerHTML; return /^[\s\u00a0]*<b>/.test(h) && !NOSTEP.test(q.textContent); };
  const structured = [...body.children].some(el => el.tagName === "OL" || (el.tagName === "P" && lead(el)));
  [...body.children].forEach(el => {
    if (el.tagName === "OL") {
      const frag = document.createDocumentFragment();
      [...el.children].forEach(li => { const q = document.createElement("p"); while (li.firstChild) q.appendChild(li.firstChild); stepify(q, String(++k)); frag.appendChild(q); });
      el.replaceWith(frag); return;
    }
    if (el.tagName !== "P" || el.classList.contains("exs") || el.classList.contains("ml")) return;
    if (NOSTEP.test(el.textContent)) return;
    let host = el;
    const f = el.firstElementChild;
    if (f && f.tagName === "SPAN" && /^\s*<span/.test(el.innerHTML)) host = f;
    const r = host.innerHTML.replace(/&nbsp;/g, " ").match(STEP_RE);
    if (r) { host.innerHTML = r[3]; const last = +r[1].split(/[–-]/).pop(); k = Math.max(k, last); stepify(el, r[1].replace(/\s/g, ""), r[2].trim()); return; }
    const b = host.innerHTML.replace(/&nbsp;/g, " ").match(/^[\s\u00a0]*<b>([\s\S]*?)<\/b>[\s\u00a0]*(?::[\s\u00a0]*)?([\s\S]*)$/);
    if (b && !/^(Conclusion|Contrôle)/.test(b[1])) { host.innerHTML = b[2]; stepify(el, String(++k), b[1]); return; }
    if (!structured) stepify(el, String(++k));
  });
  if (!body.querySelector(".exs")) {
    let n = 0;
    [...body.childNodes].forEach(nd => {
      if (nd.nodeType === 3 && /\$\$/.test(nd.textContent)) { const q = document.createElement("div"); nd.replaceWith(q); q.appendChild(nd); stepify(q, String(++n)); q.classList.add("exsm"); }
    });
  }
}
/* Exemples des fiches Méthode : « Exemple » souligné, encadré Méthode ombré, étapes dans des cercles */
let EXT = null;
function exBlocks(app) {
  const EM = (window.LEMME || {}).EXMETH || {}, M = EM[EXT] || [], MX = EM[EXT + " (exercices)"] || []; let idx = 0, jdx = 0;
  const STOP = "h2, p.ml, [data-mlab], .tree, .btree, .lg, .htree, .mrefl, .merr, .exb, .mtab, .sbox";
  const isStep = n => n.nodeType === 1 && n.tagName === "P" && !!n.querySelector("b") && /^\s*Étape\s*\d/.test(n.textContent);
  $$(".methode .prose > p.ml", app).forEach(p => {
    const txt = p.textContent.trim(), isEx = /^Exercice/.test(txt);
    if (!isEx && !/^Exemple/.test(txt)) return;
    const meth = isEx ? MX[jdx++] : M[idx++];
    const mm = p.innerHTML.replace(/&nbsp;/g, " ").match(/^[\s ]*(?:Exemple|Exercice)[^:]*?(?::[\s ]*([\s\S]*))?$/);
    const tit = mm && mm[1] ? mm[1].trim() : "";
    const nodes = []; let n = p.nextSibling;
    while (n && !(n.nodeType === 1 && n.matches(STOP))) { nodes.push(n); n = n.nextSibling; }
    /* l'énoncé = ce qui précède la première étape ; la méthode = l'étape « Rappel » */
    const first = nodes.findIndex(isStep);
    const stmt = first < 0 ? [] : nodes.slice(0, first), rest = first < 0 ? nodes : nodes.slice(first);
    const rap = [];
    if (rest.length && /^\s*Étape\s*1\s*:\s*Rappel/.test(rest[0].textContent)) {
      const r0 = rest.shift(); r0.querySelector("b").remove(); rap.push(r0);
      while (rest.length && !isStep(rest[0])) rap.push(rest.shift());
      rest.forEach(x => { if (isStep(x)) { const bb = x.querySelector("b"); bb.innerHTML = bb.innerHTML.replace(/Étape(?:\s|&nbsp;)*(\d+)/, (a, k) => "Étape " + (k - 1)); } });
    }
    const box = document.createElement("div"); box.className = "exb"; if (meth) box.dataset.meth = meth;
    box.innerHTML = `${rap.length ? `<div class="mtd"><span class="mtk">La méthode</span><div class="mtb"></div></div>` : ""}<div class="exq"><span class="exqk">Exercice</span><div class="exqb"></div></div><div class="exk">Corrigé</div><div class="exc"></div>`;
    const mtb = box.querySelector(".mtb"), qb = box.querySelector(".exqb"), body = box.querySelector(".exc");
    rap.forEach(x => mtb.appendChild(x));
    const hasStmt = stmt.some(x => x.nodeType === 1 || x.textContent.trim());
    if (hasStmt) stmt.forEach(x => qb.appendChild(x)); else { stmt.forEach(x => x.remove()); qb.innerHTML = `<p>${tit}</p>`; }
    rest.forEach(x => body.appendChild(x));
    p.replaceWith(box);
    numberSteps(body);
  });
  friseSections(app);
  mtabCards(app);
}
/* Méthode : dans chaque type de question (h2), une frise « Méthode 1, 2, 3… », chacune suivie de son exercice */
/* Blocs de référence des fiches Méthode (tableaux, listes « à retenir ») : cinq présentations,
   choisies selon le contenu et alternées d'un bloc à l'autre pour éviter la répétition. */
function mtabCards(app) {
  const blocks = [];
  $$(".methode .prose table.mtab, .methode .prose .mrefl", app).forEach(el => {
    let items = [];
    if (el.tagName === "TABLE") {
      const trs = [...el.querySelectorAll("tr")]; if (trs.length < 2) return;
      const hs = [...trs[0].children].map(c => c.innerHTML.trim()), ht = [...trs[0].children].map(c => c.textContent.trim());
      if (hs.length < 2 || hs.length > 5 || !ht[0] || /^\$/.test(hs[0]) || new Set(ht).size !== ht.length || /^(Convexes|Répétitions)/.test(ht[0])) return;
      const lab = h => { const d = document.createElement("div"); d.innerHTML = h; d.querySelectorAll(".nt").forEach(n => n.replaceWith(n.textContent)); return d.innerHTML; };
      trs.slice(1).forEach(tr => { const cs = [...tr.children]; if (!cs.length) return;
        items.push({ k: cs[0].innerHTML, v: cs.slice(1).map((c, i) => ({ l: hs.length > 2 ? lab(hs[i + 1]) : "", h: c.innerHTML })).filter(x => x.h.trim()) }); });
    } else {
      [...el.children].forEach(d => { const b = d.querySelector(":scope > b"), sp = d.querySelector(":scope > span");
        if (b) items.push({ k: b.innerHTML, v: sp ? [{ l: "", h: sp.innerHTML }] : [] }); });
    }
    if (items.length) blocks.push({ el, items, nota: el.tagName === "TABLE" && /^(Notation|Symbole)/.test(el.querySelector("tr").children[1] ? el.querySelector("tr").children[1].textContent.trim() : "") || el.tagName === "TABLE" && /^(Notation|Symbole)/.test(el.querySelector("tr").children[0].textContent.trim()) });
  });
  const tlen = h => { const d = document.createElement("div"); d.innerHTML = h; return d.textContent.replace(/\\[a-zA-Z]+|[{}$^_]/g, "").length; };
  const ORDER = [9, 7, 5, 3, 1];
  const fits = (m, it) => m === 5 ? it.every(x => x.v.length === 1 && tlen(x.v[0].h) < 70 && tlen(x.k) < 40)
    : m === 7 ? it.length >= 4 : true;
  let prev = 0, off = 0;
  for (const ch of (EXT || "")) off = (off * 31 + ch.charCodeAt(0)) % 997;
  blocks.forEach((b, i) => {
    let m = 1;
    if (b.nota) { m = 9; } else for (let j = 0; j < 5; j++) { const c = ORDER[(off + i + j) % 5]; if (c !== prev && fits(c, b.items)) { m = c; break; } }
    prev = m;
    const vals = x => x.v.map(f => `<div class="fm-v">${f.l ? `<span class="fm-l">${f.l}</span>` : ""}<div>${f.h}</div></div>`).join("");
    const box = document.createElement("div"); box.className = "fm fm" + m;
    if (b.nota) box.classList.add("fmc");
    if (m === 1) box.innerHTML = b.items.map(x => `<div class="fm-r"><div class="fm-k">${x.k}</div><div class="fm-c">${vals(x)}</div></div>`).join("");
    else if (m === 3) box.innerHTML = b.items.map(x => `<div class="fm-r"><div class="fm-k">${x.k}</div>${vals(x)}</div>`).join("");
    else if (m === 5) box.innerHTML = b.items.map(x => `<div class="fm-r"><span class="fm-k">${x.k}</span><span class="fm-d"></span><span class="fm-c">${x.v.length ? x.v[0].h : ""}</span></div>`).join("");
    else if (m === 7) {
      box.innerHTML = `<div class="fm-tabs" role="tablist">${b.items.map((x, j) => `<button type="button" role="tab" aria-selected="${j === 0}" data-j="${j}">${x.k}</button>`).join("")}</div><div class="fm-pane">${b.items.map((x, j) => `<div class="fm-p" data-j="${j}"${j ? " hidden" : ""}><div class="fm-k">${x.k}</div>${vals(x)}</div>`).join("")}</div>`;
      box.addEventListener("click", e => { const t = e.target.closest("button[data-j]"); if (!t) return;
        box.querySelectorAll("button[data-j]").forEach(x => x.setAttribute("aria-selected", x === t));
        box.querySelectorAll(".fm-p").forEach(p => p.hidden = p.dataset.j !== t.dataset.j); });
    } else {
      let ttl = "", pm = b.el.previousElementSibling;
      if (pm && pm.matches("p.ml")) { ttl = pm.innerHTML; pm.remove(); }
      else { let h = b.el.previousElementSibling; while (h && h.tagName !== "H2") h = h.previousElementSibling; ttl = h ? h.innerHTML.replace(/^\s*\d+\.\s*/, "") : "À retenir"; }
      box.innerHTML = b.nota ? `<div class="fm-t">${ttl}</div><div class="fm-g">${b.items.map(x => `<div class="fm-r"><div class="fm-k">${x.k}</div>${x.v.map((f, q) => `<div class="${q ? "fm-x" : "fm-s"}">${f.h}</div>`).join("")}</div>`).join("")}</div>` : `<div class="fm-t">${ttl}</div><div class="fm-g">${b.items.map(x => `<div class="fm-r${x.v.reduce((a, f) => a + tlen(f.h), 0) > 80 ? " wide" : ""}"><div class="fm-k">${x.k}</div>${vals(x)}</div>`).join("")}</div>`;
    }
    b.el.replaceWith(box);
  });
}

function friseSections(app) {
  const prose = $(".methode .prose", app); if (!prose || prose.dataset.frise) return; prose.dataset.frise = "1";
  const COLS = ["fB", "fO", "fV", "fG"];
  let sec = null, k = 0;
  [...prose.children].forEach(el => {
    if (el.tagName === "H2") { sec = el; k = 0; return; }
    if (!el.classList.contains("exb")) return;
    const exo = sec && /exos$/.test(sec.id || "");
    let fr = el.previousElementSibling;
    if (!fr || !fr.classList.contains("frise")) { fr = document.createElement("div"); fr.className = "frise"; el.before(fr); }
    const i = k++, it = document.createElement("div"); it.className = "fri " + COLS[i % 4];
    const lab = el.dataset.meth || "";
    it.innerHTML = `<span class="frd">${i + 1}</span><div class="frh"><span class="frk">${exo ? "Exercice corrigé" : "Méthode"} ${i + 1}</span>${lab ? `<span class="frt">${lab}</span>` : ""}</div>`;
    fr.appendChild(it); it.appendChild(el);
  });
}
function braceTree(el) {
  /* L'arbre de décision, dessiné comme les autres arbres (htree) : racine, branches, questions, conclusions. */
  const root = el.querySelector(".troot"), brs = [...el.querySelectorAll(".tb")];
  const chain = tb => { const out = []; let cur = null, fin = null; [...tb.children].forEach(c => { if (c.classList.contains("tq")) { cur = { q: c.innerHTML }; out.push(cur); } else if (c.classList.contains("tend")) fin = c; else if (c.classList.contains("tl") && cur) cur.yes = c; else if (c.classList.contains("tno") && cur) cur.no = c.innerHTML; }); return { out, fin }; };
  const leaf = (a, cls) => `<a class="hl ${cls}" href="${a.getAttribute("href")}">${a.innerHTML.replace(/^oui\s*:\s*/, "")}</a>`;
  const rec = (out, i, fin) => i === out.length ? (fin ? leaf(fin, "end") : "")
    : `<span class="hq">${out[i].q}</span><ul><li><div class="hr"><em>oui</em>${out[i].yes ? leaf(out[i].yes, "ok") : ""}</div></li><li><div class="hr"><em>${out[i].no || "non"}</em>${rec(out, i + 1, fin)}</div></li></ul>`;
  const html = brs.map(tb => { const { out, fin } = chain(tb); return `<li><div class="hr"><em>${tb.querySelector(".tt").innerHTML}</em>${rec(out, 0, fin)}</div></li>`; }).join("");
  const n = document.createElement("div"); n.className = "htree";
  n.innerHTML = `<div class="hr"><span class="hq hroot">${root ? root.innerHTML : ""}</span><ul>${html}</ul></div>`;
  el.replaceWith(n);
}
function mlDiag(host) {
  let A, D, k, data;
  const V = ["x", "y", "z"];
  const gen = () => {
    for (;;) {
      const P = randUni(3); if (Math.abs(detN(P)) !== 1 || P.flat().some(v => Math.abs(v) > 3)) continue;
      const opts = [[1, 2, 3], [2, 2, -1], [0, 1, 1], [3, -1, -1], [1, -2, 4], [2, 2, 5], [1, 1, 3], [-1, 2, 2]], dd = opts[rnd(0, opts.length - 1)];
      D = dd; A = mmul(mmul(P, D.map((v, i) => [0, 1, 2].map(j => i === j ? v : 0))), invUni(P)).map(r => r.map(v => Math.round(v)));
      if (A.flat().every(v => Math.abs(v) <= 9) && A.flat().filter(v => v === 0).length < 5) break;
    }
    k = 0;
  };
  const draw = () => {
    const vals = [...new Set(D)].sort((a, b) => Math.abs(a) - Math.abs(b) || a - b), m = v => D.filter(x => x === v).length;
    const CL = ["cB", "cR", "cG"], cOf = v => CL[vals.indexOf(v)], cv = (v, t) => `\\${cOf(v)}{${t}}`;
    const a = A, tr = a[0][0] + a[1][1] + a[2][2];
    const m12 = a[0][0] * a[1][1] - a[0][1] * a[1][0], m13 = a[0][0] * a[2][2] - a[0][2] * a[2][0], m23 = a[1][1] * a[2][2] - a[1][2] * a[2][1], s2 = m12 + m13 + m23;
    const c11 = m23, c12 = a[1][0] * a[2][2] - a[1][2] * a[2][0], c13 = a[1][0] * a[2][1] - a[1][1] * a[2][0], det = a[0][0] * c11 - a[0][1] * c12 + a[0][2] * c13;
    const l1 = vals[0], b = l1 - tr, c = s2 + l1 * b, dl = b * b - 4 * c, sq = Math.round(Math.sqrt(dl));
    const v2 = (-b - sq) / 2, v3 = (-b + sq) / 2;
    const chi = vals.map(v => cv(v, `(X ${v < 0 ? "+" : "-"} ${Math.abs(v)})${m(v) > 1 ? `^{${m(v)}}` : ""}`)).join("");
    const mi = (p, q, r, s) => `\\begin{vmatrix}${p}&${q}\\\\${r}&${s}\\end{vmatrix}`;
    const prod = (p, q, r, s) => `${par(p)}\\times${par(q)} - ${par(r)}\\times${par(s)}`;
    const kers = vals.map(v => ({ v, M: A.map((r, i) => r.map((x, j) => x - (i === j ? v : 0))) })).map(o => ({ ...o, K: kerSteps(o.M) }));
    const cols = []; kers.forEach(o => o.K.basis.forEach(bv => cols.push({ v: o.v, bv })));
    const P = [0, 1, 2].map(i => cols.map(cl => cl.bv[i])), Dl = cols.map(cl => cl.v);
    const AP = mmul(A, P), PD = P.map(r => r.map((x, j) => x * Dl[j]));
    const espace = o => {
      const { v, M, K } = o, fv = K.free.map(f => V[f]);
      const sol = K.expr.map(e => `${V[e.c]} = ${lin(e.co, fv)}`).join(",\\qquad ");
      const X = [0, 1, 2].map(j => K.free.includes(j) ? V[j] : lin(K.expr.find(e => e.c === j).co, fv));
      return `<p class="mlstep">$\\lambda = ${cv(v, v)}$ : on résout $(A - ${par(v)}I_3)X = 0$ avec $X = (x, y, z)$.</p>
$$A - ${par(v)}I_3 = ${texM(M)}\\qquad\\Longleftrightarrow\\qquad ${sysTex(M.map(r => r.map(x => Fr(x))), V)}$$
<p class="mlnote">Pivot de Gauss : $${K.ops.length ? K.ops.join(",\\ \\ ") : "rien à faire"}$.</p>
$$\\Longleftrightarrow\\ ${sysTex(K.R, V)}\\qquad\\Longleftrightarrow\\qquad ${sol}.$$
<p class="mlnote">Inconnue${fv.length > 1 ? "s" : ""} libre${fv.length > 1 ? "s" : ""} : $${fv.join(", ")}$. On remplace dans $X$ :</p>
$$X = \\begin{pmatrix}${X.join("\\\\")}\\end{pmatrix}\\ \\Longrightarrow\\ ${cv(v, `E_{${v}}`)} = \\operatorname{Vect}\\Big(${K.basis.map(bv => `\\cR{${texM(bv.map(x => [x]))}}`).join(",\\ ")}\\Big),\\qquad\\dim ${cv(v, `E_{${v}}`)} = ${K.basis.length} = \\cO{m_{${v}}}.$$`;
    };
    const steps = [
      `$$A = ${texM(A)}$$`,
      `<p class="mlstep">1. Le polynôme caractéristique. En taille 3, la formule qui marche toujours :</p><div class="sbox">$$\\chi_A = X^3 - \\operatorname{tr}(A)\\,X^2 + s_2\\,X - \\det A,\\qquad s_2 = \\text{somme des 3 mineurs principaux}.$$</div>
$$\\operatorname{tr}A = ${par(a[0][0])} + ${par(a[1][1])} + ${par(a[2][2])} = ${tr}$$
$$s_2 = ${mi(a[0][0], a[0][1], a[1][0], a[1][1])} + ${mi(a[0][0], a[0][2], a[2][0], a[2][2])} + ${mi(a[1][1], a[1][2], a[2][1], a[2][2])} = ${par(m12)} + ${par(m13)} + ${par(m23)} = ${s2}$$
<p class="mlnote">Chaque mineur : $${mi(a[0][0], a[0][1], a[1][0], a[1][1])} = ${prod(a[0][0], a[1][1], a[0][1], a[1][0])} = ${m12}$, et de même pour les deux autres.</p>
<p class="mlnote">Le déterminant, en développant selon la première ligne :</p>
$$\\det A = ${par(a[0][0])}${mi(a[1][1], a[1][2], a[2][1], a[2][2])} - ${par(a[0][1])}${mi(a[1][0], a[1][2], a[2][0], a[2][2])} + ${par(a[0][2])}${mi(a[1][0], a[1][1], a[2][0], a[2][1])}$$
$$= ${par(a[0][0])}\\times${par(c11)} - ${par(a[0][1])}\\times${par(c12)} + ${par(a[0][2])}\\times${par(c13)} = ${det}$$
$$\\chi_A = ${polyTex([1, -tr, s2, -det])}$$`,
      `<p class="mlstep">2. Factoriser : on cherche une racine évidente parmi $0, \\pm1, \\pm2, \\dots$ (des diviseurs de $\\det A$).</p>
$$\\chi_A(${l1}) = ${par(l1)}^3 - ${par(tr)}\\times${par(l1)}^2 + ${par(s2)}\\times${par(l1)} - ${par(det)} = 0\\quad\\Longrightarrow\\quad${cv(l1, `(X ${l1 < 0 ? "+" : "-"} ${Math.abs(l1)})`)}\\ \\text{divise}\\ \\chi_A.$$
<p class="mlnote">Division (Horner) : $\\chi_A = (X - ${par(l1)})(X^2 + bX + c)$ avec $b = ${par(l1)} - ${par(tr)} = ${b}$ et $c = ${par(s2)} + ${par(l1)}\\times${par(b)} = ${c}$.</p>
$$X^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}X ${c < 0 ? "-" : "+"} ${Math.abs(c)}:\\qquad\\Delta = ${par(b)}^2 - 4\\times${par(c)} = ${dl}${dl ? `\\ \\Longrightarrow\\ \\lambda = \\frac{${-b}\\pm${sq}}{2},\\ \\text{soit}\\ ${v2}\\ \\text{et}\\ ${v3}` : `\\ \\Longrightarrow\\ \\text{racine double}\\ ${v2}`}.$$
$$\\chi_A = ${chi}$$
<p class="mlnote">Vérification : $${D.map(par).join(" + ")} = ${tr} = \\operatorname{tr}A$, et $${D.map(par).join("\\times")} = ${det} = \\det A$.</p>`,
      `<p class="mlstep">3. Le spectre et les multiplicités :</p>$$\\operatorname{Sp}(A) = \\{${vals.map(v => cv(v, v)).join(",\\ ")}\\},\\qquad ${vals.map(v => `\\cO{m_{${v}} = ${m(v)}}`).join(",\\quad ")}$$`,
      ...kers.map(o => `<p class="mlstep">4. Le sous-espace propre de $${cv(o.v, o.v)}$</p>` + espace(o)),
      `<p class="mlstep">5. Les vecteurs propres en colonnes, les valeurs propres dans le même ordre :</p>$$P = \\begin{pmatrix}${[0, 1, 2].map(i => [0, 1, 2].map(j => cv(Dl[j], P[i][j])).join("&")).join("\\\\")}\\end{pmatrix},\\qquad D = \\begin{pmatrix}${[0, 1, 2].map(i => [0, 1, 2].map(j => i === j ? cv(Dl[j], Dl[j]) : "0").join("&")).join("\\\\")}\\end{pmatrix}$$`,
      `<p class="mlstep">6. On vérifie $AP = PD$ sans calculer $P^{-1}$ :</p>$$AP = ${texM(A)}${texM(P)} = ${texM(AP)}$$$$PD = ${texM(P)}${texM(Dl.map((v, i) => Dl.map((_, j) => i === j ? v : 0)))} = ${texM(PD)}$$<p class="mlres">${JSON.stringify(AP) === JSON.stringify(PD) ? "Les deux sont égaux" : "Erreur"}, donc $A = PDP^{-1}$ : $A$ est diagonalisable.</p>`
    ];
    host.innerHTML = `<p class="mlt">Diagonaliser pas à pas</p>${steps.slice(0, k + 1).join("")}<div class="mlnav"><button type="button" class="btn btn-ghost btn-sm" data-g="-1"${k ? "" : " disabled"}>${I.left} Avant</button><span class="mlpos">${k + 1} / ${steps.length}</span><button type="button" class="btn btn-yellow btn-sm" data-g="1"${k < steps.length - 1 ? "" : " disabled"}>Étape suivante ${I.arrow}</button><button type="button" class="btn btn-ghost btn-sm" data-all>Tout afficher</button><button type="button" class="btn btn-ghost btn-sm" data-new>Autre matrice</button></div>`;
    $$("[data-g]", host).forEach(bt => bt.addEventListener("click", () => { k += +bt.dataset.g; draw(); }));
    $("[data-all]", host).addEventListener("click", () => { k = steps.length - 1; draw(); });
    $("[data-new]", host).addEventListener("click", () => { gen(); draw(); });
    typeset(host);
  };
  gen(); draw();
}
function mlExRed(host) {
  let ex;
  const gen = () => {
    const P = randUni(2), kind = rnd(0, 2);
    let a, b, M;
    if (kind < 2) { a = rnd(-3, 4); b = kind ? a : rnd(-3, 4); if (kind === 0 && a === b) b = a + 1; M = [[a, 0], [0, b]]; }
    else { a = rnd(-2, 3); b = a; M = [[a, 1], [0, a]]; }
    const A = mmul(mmul(P, M), invUni(P)).map(r => r.map(v => Math.round(v)));
    const diag = kind !== 2;
    return { A, a, b, diag, tr: A[0][0] + A[1][1], det: det2(A), scal: kind === 1 };
  };
  const draw = () => {
    const { A } = ex;
    host.innerHTML = `<p class="mlq">$A = ${texM(A)}$. Donne ses valeurs propres (avec multiplicité) et dis si elle est diagonalisable.</p><div class="mlin" style="grid-template-columns:repeat(2,80px)"><input data-v="0" aria-label="Valeur propre 1" inputmode="numeric"><input data-v="1" aria-label="Valeur propre 2" inputmode="numeric"></div><div class="mlseg"><button type="button" data-d="1">Diagonalisable</button><button type="button" data-d="0">Pas diagonalisable</button></div><div class="mlnav"><button type="button" class="btn btn-yellow btn-sm" data-check>Vérifier</button><button type="button" class="btn btn-ghost btn-sm" data-sol>Correction</button><button type="button" class="btn btn-ghost btn-sm" data-new>Une autre</button></div><p class="mlres"></p><div class="mlsol" hidden><p>$$\\operatorname{tr}A = ${par(A[0][0])} + ${par(A[1][1])} = ${ex.tr},\\qquad\\det A = ${par(A[0][0])}\\times${par(A[1][1])} - ${par(A[0][1])}\\times${par(A[1][0])} = ${ex.det}$$</p><p>$$\\chi_A = X^2 - \\operatorname{tr}(A)X + \\det A = ${polyTex([1, -ex.tr, ex.det])},\\qquad\\Delta = ${par(ex.tr)}^2 - 4\\times${par(ex.det)} = ${ex.tr * ex.tr - 4 * ex.det}$$</p><p>$$\\chi_A = (X - ${par(ex.a)})(X - ${par(ex.b)})$$</p>${ex.a === ex.b ? `<p>$$A - ${par(ex.a)}I_2 = ${texM(A.map((r, i) => r.map((x, j) => x - (i === j ? ex.a : 0))))}$$</p>` : ""}<p>${ex.a !== ex.b ? "Deux valeurs propres distinctes : diagonalisable." : ex.scal ? `Une seule valeur propre et $A = ${ex.a}I_2$ : diagonale, donc diagonalisable.` : `Une seule valeur propre $${ex.a}$ et $A\\neq${ex.a}I_2$ : pas diagonalisable. On peut la trigonaliser.`}</p></div>`;
    let pick = null;
    $$("[data-d]", host).forEach(b => b.addEventListener("click", () => { pick = b.dataset.d === "1"; $$("[data-d]", host).forEach(x => x.setAttribute("aria-pressed", x === b)); }));
    $("[data-check]", host).addEventListener("click", () => {
      const v = $$("[data-v]", host).map(i => Number(i.value)).sort((x, y) => x - y), want = [ex.a, ex.b].sort((x, y) => x - y);
      const okv = v.every((x, i) => x === want[i]) && $$("[data-v]", host).every(i => i.value.trim() !== ""), okd = pick === ex.diag;
      $$("[data-v]", host).forEach(i => { i.classList.toggle("ok", okv); i.classList.toggle("ko", !okv); });
      $(".mlres", host).textContent = okv && okd ? "Tout est juste." : !okv ? "Les valeurs propres ne sont pas bonnes : calcule $\\chi_A = X^2 - \\operatorname{tr}(A)X + \\det A$." : pick === null ? "Choisis diagonalisable ou non." : "Regarde la dimension du sous-espace propre.";
      typeset($(".mlres", host));
    });
    $("[data-sol]", host).addEventListener("click", () => { const s = $(".mlsol", host); s.hidden = false; typeset(s); });
    $("[data-new]", host).addEventListener("click", () => { ex = gen(); draw(); });
    typeset(host);
  };
  ex = gen(); draw();
}

/* ---------- Labos de la Méthode « Équations différentielles » ---------- */
const fterm = (f, v, first) => { if (!f.n) return ""; const neg = f.n < 0, a = Fr(Math.abs(f.n), f.d), co = a.n === 1 && a.d === 1 && v ? "" : ftex(a); return (first ? (neg ? "-" : "") : (neg ? " - " : " + ")) + co + v; };
const fsum = pairs => { let s = ""; for (const [f, v] of pairs) s += fterm(typeof f === "number" ? Fr(f) : f, v, !s); return s || "0"; };
const exT = m => m === 0 ? "" : `e^{${m === 1 ? "" : m === -1 ? "-" : m}t}`;
const ftx = f => ftex(typeof f === "number" ? Fr(f) : f);
const fpar = f => { f = typeof f === "number" ? Fr(f) : f; return f.n < 0 ? `\\left(${ftex(f)}\\right)` : ftex(f); };
const labNav = (host, k, n, go, re, all) => `<div class="mlnav"><button type="button" class="btn btn-ghost btn-sm" data-g="-1"${k ? "" : " disabled"}>${I.left} Avant</button><span class="mlpos">${k + 1} / ${n}</span><button type="button" class="btn btn-yellow btn-sm" data-g="1"${k < n - 1 ? "" : " disabled"}>Étape suivante ${I.arrow}</button><button type="button" class="btn btn-ghost btn-sm" data-all>Tout afficher</button><button type="button" class="btn btn-ghost btn-sm" data-new>Un autre</button></div>`;
function stepLab(host, title, gen, build) {
  let ex, k = 0;
  const draw = () => {
    const st = build(ex);
    host.innerHTML = `<p class="mlt">${title}</p>${st.slice(0, k + 1).join("")}${labNav(host, k, st.length)}`;
    $$("[data-g]", host).forEach(b => b.addEventListener("click", () => { k += +b.dataset.g; draw(); }));
    $("[data-all]", host).addEventListener("click", () => { k = st.length - 1; draw(); });
    $("[data-new]", host).addEventListener("click", () => { ex = gen(); k = 0; draw(); });
    typeset(host);
  };
  ex = gen(); draw();
}
/* Ordre 1 : y' + a y = b(t), y(0) = y0 */
function mlEdo1(host) {
  const gen = () => {
    let a = 0; while (!a) a = rnd(-3, 3);
    const kind = rnd(0, 2), y0 = rnd(-3, 3);
    if (kind === 0) { let p = 0; while (!p) p = rnd(-4, 4); return { a, kind, p, q: rnd(-5, 5), y0 }; }
    let k = 0; while (!k) k = rnd(-3, 4);
    if (kind === 1) { let m = -a; while (m === -a || m === 0) m = rnd(-2, 2); return { a, kind, k, m, y0 }; }
    return { a, kind, k, m: -a, y0 };
  };
  const build = e => {
    const { a, kind, y0 } = e, eqL = fsum([[1, "y'"], [a, "y"]]);
    const b = kind === 0 ? fsum([[e.p, "t"], [e.q, ""]]) : fsum([[e.k, exT(e.m)]]);
    const st = [`$$${eqL} = \\cO{${b}},\\qquad\\cG{y(0) = ${y0}}.$$`];
    st.push(`<p class="mlstep">1. L'équation homogène $${eqL} = 0$ :</p>$$a(t) = ${a},\\qquad A(t) = ${fsum([[a, "t"]])},\\qquad\\cB{y_H(t) = \\cG\\lambda\\,${exT(-a)}}.$$`);
    let yp, yp0, form, calc;
    if (kind === 0) {
      const al = Fr(e.p, a), be = fdiv(fadd(Fr(e.q), Fr(-al.n, al.d)), Fr(a));
      yp = fsum([[al, "t"], [be, ""]]); yp0 = be;
      form = `Le second membre est un polynôme de degré 1 et $a\\neq0$ : on cherche $\\cR{y_p = \\alpha t + \\beta}$, donc $y_p' = \\alpha$.`;
      calc = `$$${fsum([[1, "y_p'"], [a, "y_p"]])} = \\alpha + ${fpar(a)}(\\alpha t + \\beta) = ${fsum([[a, "\\alpha\\,t"]])} + (${fsum([[1, "\\alpha"], [a, "\\beta"]])}).$$
<p class="mlnote">On identifie avec $${b}$ :</p>$$\\left\\{\\begin{aligned}${fsum([[a, "\\alpha"]])} &= ${e.p}\\\\${fsum([[1, "\\alpha"], [a, "\\beta"]])} &= ${e.q}\\end{aligned}\\right.\\iff\\left\\{\\begin{aligned}\\alpha &= ${ftex(al)}\\\\\\beta &= \\frac{${e.q} - ${fpar(al)}}{${a}} = ${ftex(be)}\\end{aligned}\\right.$$`;
    } else if (kind === 1) {
      const C = Fr(e.k, e.m + a); yp = fsum([[C, exT(e.m)]]); yp0 = C;
      form = `Second membre $${e.k === 1 ? "" : e.k === -1 ? "-" : e.k}${exT(e.m)}$ avec $m = ${e.m}\\neq-a = ${-a}$ : pas de résonance, on cherche $\\cR{y_p = C\\,${exT(e.m)}}$, donc $y_p' = ${fsum([[e.m, "C\\,"+exT(e.m)]])}$.`;
      calc = `$$${fsum([[1, "y_p'"], [a, "y_p"]])} = (${e.m} ${a < 0 ? "-" : "+"} ${Math.abs(a)})\\,C\\,${exT(e.m)} = ${fsum([[e.m + a, "C\\,"+exT(e.m)]])} = ${e.k}\\,${exT(e.m)}\\iff C = ${ftex(C)}.$$`;
    } else {
      yp = fsum([[e.k, "t" + exT(e.m)]]); yp0 = Fr(0);
      form = `Second membre en $${exT(e.m)}$ avec $m = ${e.m} = -a$ : <b>résonance</b>, $${exT(e.m)}$ est déjà solution de l'équation homogène. On cherche $\\cR{y_p = C\\,t\\,${exT(e.m)}}$.`;
      const cx = n => `${n < 0 ? " - " : " + "}\\cancel{${Math.abs(n) === 1 ? "" : Math.abs(n)}C\\,t\\,${exT(e.m)}}`;
      calc = `$$y_p' = C\\,${exT(e.m)}${fsum([[e.m, "C\\,t\\,"+exT(e.m)]]).replace(/^(?!-)/, " + ").replace(/^-/, " - ")},\\qquad ${fsum([[1, "y_p'"], [a, "y_p"]])} = C\\,${exT(e.m)}${cx(e.m)}${cx(a)} = C\\,${exT(e.m)}.$$$$C\\,${exT(e.m)} = ${e.k}\\,${exT(e.m)}\\iff C = ${e.k}.$$`;
    }
    st.push(`<p class="mlstep">2. La forme de la solution particulière :</p><p class="mlnote">${form}</p>`);
    st.push(`<p class="mlstep">3. On remplace dans l'équation et on identifie :</p>${calc}$$\\cR{y_p(t) = ${yp}}$$`);
    st.push(`<p class="mlstep">4. Toutes les solutions :</p>$$y(t) = \\cB{\\cG\\lambda\\,${exT(-a)}} + \\cR{${yp}}.$$`);
    const lam = fadd(Fr(y0), Fr(-yp0.n, yp0.d));
    st.push(`<p class="mlstep">5. La condition initiale, <b>maintenant</b> :</p>$$y(0) = \\cG\\lambda + ${fpar(yp0)} = ${y0}\\iff\\cG{\\lambda = ${ftex(lam)}}.$$<p class="mlres">$$y(t) = ${fsum([[lam, exT(-a)]])}${yp === "0" ? "" : (yp[0] === "-" ? " " : " + ") + yp}$$</p>`);
    return st;
  };
  stepLab(host, "Ordre 1 pas à pas : $y' + ay = b(t)$", gen, build);
}
/* Ordre 2 homogène à coefficients constants, avec conditions initiales */
function mlEdo2(host) {
  const gen = () => {
    const kind = rnd(0, 2), y0 = rnd(-3, 3), y1 = rnd(-3, 3);
    if (kind === 0) { let r1 = 0, r2 = 0; while (r1 === r2) { r1 = rnd(-3, 3); r2 = rnd(-3, 3); } if (r1 > r2) [r1, r2] = [r2, r1]; return { kind, r1, r2, a: -(r1 + r2), b: r1 * r2, y0, y1 }; }
    if (kind === 1) { const r = rnd(-2, 2); return { kind, r, a: -2 * r, b: r * r, y0, y1 }; }
    const al = rnd(-2, 2), be = rnd(1, 3); return { kind, al, be, a: -2 * al, b: al * al + be * be, y0, y1 };
  };
  const build = e => {
    const { a, b, y0, y1, kind } = e, D = a * a - 4 * b;
    const st = [`$$${fsum([[1, "y''"], [a, "y'"], [b, "y"]])} = 0,\\qquad\\cG{y(0) = ${y0}},\\quad\\cG{y'(0) = ${y1}}.$$`];
    st.push(`<p class="mlstep">1. L'équation caractéristique (on remplace $y''$ par $r^2$, $y'$ par $r$, $y$ par $1$) :</p>$$${fsum([[1, "r^2"], [a, "r"], [b, ""]])} = 0,\\qquad\\Delta = ${fpar(a)}^2 - 4\\times${fpar(b)} = ${D}.$$`);
    let roots, yH, dy, sys, sol, fin;
    const cs = t => t === 1 ? "\\cos t" : `\\cos(${t}t)`, sn = t => t === 1 ? "\\sin t" : `\\sin(${t}t)`;
    if (kind === 0) {
      const s = Math.round(Math.sqrt(D));
      roots = `$$\\Delta = ${s}^2 > 0:\\qquad r = \\frac{${-a}\\pm${s}}{2}\\ \\Longrightarrow\\ \\cV{r_1 = ${e.r1}},\\quad\\cV{r_2 = ${e.r2}}.$$`;
      yH = `\\cG\\lambda\\,${exT(e.r1) || "1"} + \\cG\\mu\\,${exT(e.r2) || "1"}`;
      dy = `y'(t) = ${fsum([[e.r1, "\\lambda\\," + exT(e.r1)], [e.r2, "\\mu\\," + exT(e.r2)]])}`;
      const mu = Fr(y1 - e.r1 * y0, e.r2 - e.r1), lam = fadd(Fr(y0), Fr(-mu.n, mu.d));
      sys = `\\left\\{\\begin{aligned}\\cG\\lambda + \\cG\\mu &= ${y0}\\\\${fsum([[e.r1, "\\lambda"], [e.r2, "\\mu"]])} &= ${y1}\\end{aligned}\\right.\\ \\underset{\\cO{L_2\\leftarrow L_2 ${e.r1 < 0 ? "+" : "-"} ${Math.abs(e.r1) === 1 ? "" : Math.abs(e.r1)}L_1}}{\\iff}\\ \\left\\{\\begin{aligned}\\cG\\lambda + \\cG\\mu &= ${y0}\\\\${e.r2 - e.r1}\\cG\\mu &= ${y1 - e.r1 * y0}\\end{aligned}\\right.\\iff\\left\\{\\begin{aligned}\\cG\\mu &= ${ftex(mu)}\\\\\\cG\\lambda &= ${y0} - ${fpar(mu)} = ${ftex(lam)}\\end{aligned}\\right.`;
      fin = fsum([[lam, exT(e.r1)], [mu, exT(e.r2)]]);
    } else if (kind === 1) {
      const r = e.r, mu = y1 - r * y0;
      roots = `$$\\Delta = 0:\\qquad\\cV{r_0} = \\frac{${-a}}{2} = \\cV{${r}}\\quad\\text{racine double}.$$`;
      yH = `(\\cG\\lambda + \\cG\\mu\\,t)\\,${exT(r)}`;
      dy = r ? `y'(t) = \\big(\\mu + ${fpar(r)}(\\lambda + \\mu t)\\big)${exT(r)}` : `y'(t) = \\mu`;
      sys = `\\left\\{\\begin{aligned}y(0) &= \\cG\\lambda = ${y0}\\\\y'(0) &= \\cG\\mu + ${fpar(r)}\\cG\\lambda = ${y1}\\end{aligned}\\right.\\iff\\left\\{\\begin{aligned}\\cG\\lambda &= ${y0}\\\\\\cG\\mu &= ${y1} - ${fpar(r)}\\times${fpar(y0)} = ${mu}\\end{aligned}\\right.`;
      fin = `\\left(${fsum([[y0, ""], [mu, "t"]])}\\right)${exT(r)}`;
    } else {
      const { al, be } = e, s = 2 * be, mu = Fr(y1 - al * y0, be);
      roots = `$$\\Delta = ${D} = (${s}i)^2\\lt0:\\qquad r = \\frac{${-a}\\pm${s}i}{2} = \\cV{${al ? al + " \\pm " : "\\pm "}${be === 1 ? "" : be}i}\\ \\Longrightarrow\\ \\cV{\\alpha = ${al}},\\ \\cV{\\beta = ${be}}.$$`;
      yH = `${exT(al)}\\big(\\cG\\lambda\\,${cs(be)} + \\cG\\mu\\,${sn(be)}\\big)`;
      dy = `y'(t) = ${exT(al)}\\big((${fsum([[al, "\\lambda"], [be, "\\mu"]])})${cs(be)} + (${fsum([[al, "\\mu"], [-be, "\\lambda"]])})${sn(be)}\\big)`;
      sys = `\\left\\{\\begin{aligned}y(0) &= \\cG\\lambda = ${y0}\\\\y'(0) &= ${fsum([[al, "\\lambda"], [be, "\\mu"]])} = ${y1}\\end{aligned}\\right.\\iff\\left\\{\\begin{aligned}\\cG\\lambda &= ${y0}\\\\\\cG\\mu &= \\frac{${y1} - ${fpar(al)}\\times${fpar(y0)}}{${be}} = ${ftex(mu)}\\end{aligned}\\right.`;
      fin = `${exT(al)}\\left(${fsum([[y0, cs(be)], [mu, sn(be)]])}\\right)`;
    }
    st.push(`<p class="mlstep">2. Les racines :</p>${roots}`);
    st.push(`<p class="mlstep">3. La solution générale, puis sa dérivée :</p>$$\\cB{y(t) = ${yH}},\\qquad ${dy}.$$`);
    st.push(`<p class="mlstep">4. Les conditions en $t = 0$ ($e^0 = 1$, $\\cos0 = 1$, $\\sin0 = 0$) :</p>$$${sys}$$`);
    st.push(`<p class="mlres">$$y(t) = ${fin}$$</p>`);
    return st;
  };
  stepLab(host, "Ordre 2 pas à pas : $y'' + ay' + by = 0$", gen, build);
}
const QEDO = [
  ["Les solutions de $y' + 2y = 0$ sont $t\\mapsto\\lambda e^{2t}$.", false, "Faux : $A(t) = 2t$ et $y = \\lambda e^{-A(t)} = \\lambda e^{-2t}$."],
  ["Pour $y' + y = e^{-t}$, on peut chercher une solution particulière $Ce^{-t}$.", false, "Faux : $e^{-t}$ est solution de l'équation homogène (résonance). On cherche $Cte^{-t}$, et on trouve $C = 1$."],
  ["On détermine les constantes avec les conditions initiales avant d'ajouter $y_p$.", false, "Faux : on écrit d'abord $y = y_H + y_p$, puis on utilise les conditions."],
  ["Les solutions réelles de $y'' + 4y = 0$ sont $\\lambda\\cos(2t) + \\mu\\sin(2t)$.", true, "Vrai : $r^2 + 4 = 0$ donne $r = \\pm2i$, donc $\\alpha = 0$ et $\\beta = 2$."],
  ["Pour $y'' - 4y' + 4y = e^{2t}$, on cherche $y_p = Ct\\,e^{2t}$.", false, "Faux : $2$ est racine <b>double</b> de $r^2 - 4r + 4$, il faut $Ct^2e^{2t}$ (on trouve $C = \\frac12$)."],
  ["L'ensemble des solutions de $ty' - 2y = 0$ sur $\\mathbb R$ est de dimension $1$.", false, "Faux : en raccordant en $0$, on obtient $\\lambda_1t^2$ à droite et $\\lambda_2t^2$ à gauche, indépendants : dimension $2$."],
  ["Si $\\varphi_1, \\varphi_2$ sont solutions de $(H)$ et $W(0)\\neq0$, alors $(\\varphi_1, \\varphi_2)$ est une base de $\\mathcal S_H$.", true, "Vrai : $\\mathcal S_H$ est de dimension $2$ et le wronskien non nul en un point donne la liberté."],
  ["Une solution de $y'' + a(t)y' + b(t)y = 0$ avec $y(0) = y'(0) = 0$ est nulle.", true, "Vrai : c'est l'unicité de Cauchy-Lipschitz, la fonction nulle convient."],
  ["Pour $X' = AX$ avec $A$ diagonalisable de valeurs propres $-1$ et $-3$, toutes les solutions tendent vers $0$.", true, "Vrai : $X(t) = c_1e^{-t}V_1 + c_2e^{-3t}V_2\\to0$."],
  ["Dans une équation à variables séparées, on met une constante de chaque côté.", false, "Faux : une seule constante suffit, les deux se regroupent."]
];

/* ---------- Labos des Méthodes « Calcul algébrique » et « Nombres complexes » ---------- */
const binom = (n, k) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
/* Triangle de Pascal cliquable */
function mlPascal(host) {
  const N = 9;
  const draw = (n, k) => {
    const rows = [...Array(N + 1).keys()].map(i => `<div class="pr">${[...Array(i + 1).keys()].map(j => `<button type="button" data-n="${i}" data-k="${j}" class="${i === n && j === k ? "on" : i === n - 1 && j === k - 1 ? "ua" : i === n - 1 && j === k ? "ub" : ""}">${binom(i, j)}</button>`).join("")}</div>`).join("");
    let msg = "Clique un nombre du triangle.";
    if (n !== undefined) msg = k === 0 || k === n ? `$\\binom{${n}}{${k}} = 1$ : les bords valent toujours $1$.` : `$$\\cB{\\binom{${n - 1}}{${k - 1}}} + \\cR{\\binom{${n - 1}}{${k}}} = \\cB{${binom(n - 1, k - 1)}} + \\cR{${binom(n - 1, k)}} = \\cG{${binom(n, k)}} = \\binom{${n}}{${k}} = \\frac{${n}!}{${k}!\\,${n - k}!}$$`;
    host.innerHTML = `<p class="mlt">Le triangle de Pascal : clique un nombre</p><div class="pasc">${rows}</div><div class="mlcalc">${msg}</div>`;
    $$("[data-n]", host).forEach(b => b.addEventListener("click", () => draw(+b.dataset.n, +b.dataset.k)));
    typeset(host);
  };
  draw();
}
/* Développer (px + q)^n terme par terme */
function mlBinome(host) {
  let p, q, n;
  const gen = () => { n = rnd(2, 5); do { p = rnd(-3, 3); } while (!p); do { q = rnd(-4, 4); } while (!q); };
  const mono = (c, d) => fsum([[c, d === 0 ? "" : d === 1 ? "x" : `x^{${d}}`]]);
  const draw = () => {
    const a = p === 1 ? "x" : p === -1 ? "-x" : `${p}x`, rowsT = [...Array(n + 1).keys()].map(k => { const c = binom(n, k) * p ** k * q ** (n - k); return { k, c, t: `<tr><td>$${k}$</td><td>$\\cV{${binom(n, k)}}$</td><td>$${k ? `(${a})^{${k}} = ${mono(p ** k, k)}` : "1"}$</td><td>$${par(q)}^{${n - k}} = ${q ** (n - k)}$</td><td>$${mono(c, k)}$</td></tr>` }; });
    const poly = fsum([...rowsT].reverse().map(r => [r.c, r.k === 0 ? "" : r.k === 1 ? "x" : `x^{${r.k}}`]));
    host.innerHTML = `<p class="mlt">Développer avec le binôme</p><p class="mlq">$$(${a} ${q < 0 ? "-" : "+"} ${Math.abs(q)})^{${n}} = \\sum_{k=0}^{${n}}\\cV{\\binom{${n}}{k}}(${a})^k(${q})^{${n}-k}$$</p><table class="mtab"><tr><th>$k$</th><th>$\\binom{${n}}{k}$</th><th>$(${a})^k$</th><th>$(${q})^{${n}-k}$</th><th>Terme</th></tr>${rowsT.map(r => r.t).join("")}</table><p class="mlres">$$(${a} ${q < 0 ? "-" : "+"} ${Math.abs(q)})^{${n}} = \\cG{${poly}}$$</p><p class="mlnote">Contrôle avec $x = 1$ : $(${p + q})^{${n}} = ${(p + q) ** n}$, et la somme des coefficients vaut $${rowsT.reduce((s, r) => s + r.c, 0)}$.</p><button type="button" class="btn btn-ghost btn-sm" data-new>Un autre</button>`;
    $("[data-new]", host).addEventListener("click", () => { gen(); draw(); });
    typeset(host);
  };
  gen(); draw();
}
/* Somme d'un polynôme de degré 2 en k */
function mlSommes(host) {
  const gen = () => { let al, be, ga; do { al = rnd(-3, 3); be = rnd(-4, 4); ga = rnd(-5, 5); } while (!al && !be); return { al, be, ga }; };
  const build = e => {
    const { al, be, ga } = e, term = fsum([[al, "k^2"], [be, "k"], [ga, ""]]);
    const c3 = Fr(al, 3), c2 = fadd(Fr(al, 2), Fr(be, 2)), c1 = fadd(fadd(Fr(al, 6), Fr(be, 2)), Fr(ga));
    const st = [`$$S_n = \\sum_{k=1}^n\\big(${term}\\big)$$`];
    st.push(`<p class="mlstep">1. Linéarité : on coupe en sommes simples.</p>$$S_n = ${fsum([[al, "\\sum_{k=1}^nk^2"], [be, "\\sum_{k=1}^nk"], [ga, "\\sum_{k=1}^n1"]])}$$`);
    st.push(`<p class="mlstep">2. Les sommes usuelles (attention : $\\sum_{k=1}^n1 = n$) :</p>$$S_n = ${fsum([[al, "\\frac{n(n+1)(2n+1)}{6}"], [be, "\\frac{n(n+1)}{2}"], [ga, "n"]])}$$`);
    st.push(`<p class="mlstep">3. On développe et on regroupe :</p>$$${al ? `${ftx(Fr(al, 6))}(2n^3 + 3n^2 + n)` : ""}${be ? `${al && be > 0 ? " + " : ""}${ftx(Fr(be, 2))}(n^2 + n)` : ""}${ga ? (ga > 0 ? " + " : " ") + fsum([[ga, "n"]]) : ""}$$$$S_n = \\cG{${fsum([[c3, "n^3"], [c2, "n^2"], [c1, "n"]])}}$$`);
    const v1 = al + be + ga, f1 = fadd(fadd(c3, c2), c1);
    st.push(`<p class="mlstep">4. Contrôle avec $n = 1$ :</p>$$S_1 = ${fsum([[al, ""], [be, ""], [ga, ""]]).replace(/^0$/, "0")} = ${v1},\\qquad ${ftx(c3)} ${c2.n < 0 ? "-" : "+"} ${ftex(Fr(Math.abs(c2.n), c2.d))} ${c1.n < 0 ? "-" : "+"} ${ftex(Fr(Math.abs(c1.n), c1.d))} = ${ftx(f1)}$$`);
    return st;
  };
  stepLab(host, "Calculer une somme pas à pas", gen, build);
}
const QALG = [
  ["$\\sum_{k=0}^n3 = 3n$.", false, "Faux : il y a $n + 1$ termes, donc $3(n + 1)$."],
  ["$\\sum_{k=1}^n\\frac1{k(k + 1)} = 1 - \\frac1{n + 1}$.", true, "Vrai : $\\frac1{k(k + 1)} = \\frac1k - \\frac1{k + 1}$, et ça télescope."],
  ["$\\prod_{k=1}^n(3x_k) = 3\\prod_{k=1}^nx_k$.", false, "Faux : le $3$ sort $n$ fois, c'est $3^n\\prod x_k$."],
  ["$\\binom{10}{7} = \\binom{10}{3} = 120$.", true, "Vrai : symétrie, puis $\\frac{10\\times9\\times8}{6} = 120$."],
  ["$\\sum_{k=0}^n\\binom nk = 2^n$.", true, "Vrai : binôme avec $a = b = 1$."],
  ["$\\sum_{k=2}^n2^k = \\frac{1 - 2^{n+1}}{1 - 2}$.", false, "Faux : la somme commence à $k = 2$. C'est $4\\cdot\\frac{1 - 2^{n-1}}{1 - 2} = 2^{n+1} - 4$."],
  ["$\\big(\\sum_{k=1}^nx_k\\big)^2 = \\sum_{k=1}^nx_k^2$.", false, "Faux : il manque $2\\sum_{i\\lt j}x_ix_j$."],
  ["$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$.", true, "Vrai : c'est la formule de Bernoulli pour $n = 3$."],
  ["Avec $j = n - k$, $\\sum_{k=0}^nx_{n-k} = \\sum_{j=0}^nx_j$.", true, "Vrai : $k = 0\\mapsto j = n$ et $k = n\\mapsto j = 0$, l'ordre des termes ne change pas la somme."],
  ["$\\sum_{1\\leqslant i\\leqslant j\\leqslant n}1 = n^2$.", false, "Faux : c'est $\\sum_{j=1}^nj = \\frac{n(n + 1)}2$ (un triangle, pas un carré)."]
];
/* ---------- Complexes ---------- */
/* surd : f·√m en LaTeX */
const surd = (f, m) => { if (m === 1 || !f.n) return ftex(f); const neg = f.n < 0, a = Math.abs(f.n), co = a === 1 ? "" : a; return (neg ? "-" : "") + (f.d === 1 ? `${co}\\sqrt{${m}}` : `\\frac{${co}\\sqrt{${m}}}{${f.d}}`); };
const piTex = f => { if (!f.n) return "0"; const neg = f.n < 0, a = Math.abs(f.n); return (neg ? "-" : "") + (f.d === 1 ? `${a === 1 ? "" : a}\\pi` : `\\frac{${a === 1 ? "" : a}\\pi}{${f.d}}`); };
/* angles remarquables : t = k·π/12, cos = [f, m] */
const TRIG = { 0: [[1, 1, 1], [0, 1, 1]], 2: [[1, 2, 3], [1, 2, 1]], 3: [[1, 2, 2], [1, 2, 2]], 4: [[1, 2, 1], [1, 2, 3]], 6: [[0, 1, 1], [1, 1, 1]] };
const trigOf = k => { k = ((k % 24) + 24) % 24; let sc = 1, ss = 1, b = k; if (b > 12) { b = 24 - b; ss = -1; } if (b > 6) { b = 12 - b; sc = -1; } const [c, s] = TRIG[b]; return { c: [Fr(sc * c[0], c[1]), c[2]], s: [Fr(ss * s[0], s[1]), s[2]] }; };
function mlExpForm(host) {
  const gen = () => { const ks = [2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22]; return { r: rnd(1, 4), k: ks[rnd(0, ks.length - 1)] }; };
  const build = e => {
    const { r, k } = e, T = trigOf(k), a = [fmul(Fr(r), T.c[0]), T.c[1]], b = [fmul(Fr(r), T.s[0]), T.s[1]];
    const at = surd(...a), bt = surd(...b), bAbs = surd(Fr(Math.abs(b[0].n), b[0].d), b[1]);
    const z = b[0].n === 0 ? at : a[0].n === 0 ? `${b[0].n < 0 ? "-" : ""}${bAbs === "1" ? "" : bAbs}i` : `${at} ${b[0].n < 0 ? "-" : "+"} ${bAbs === "1" ? "" : bAbs}i`;
    const sq = x => fmul(fmul(x[0], x[0]), Fr(x[1]));
    let th = Fr(k > 12 ? k - 24 : k, 12);
    const st = [`$$z = ${z}$$`];
    st.push(`<p class="mlstep">1. Le module :</p>$$\\cB r = \\sqrt{a^2 + b^2} = \\sqrt{\\left(${at}\\right)^2 + \\left(${bt}\\right)^2} = \\sqrt{${ftex(sq(a))} + ${ftex(sq(b))}} = \\sqrt{${r * r}} = \\cB{${r}}$$`);
    st.push(`<p class="mlstep">2. On factorise par $r$ :</p>$$z = \\cB{${r}}\\left(${surd(T.c[0], T.c[1])} ${T.s[0].n < 0 ? "-" : "+"} i\\,${surd(Fr(Math.abs(T.s[0].n), T.s[0].d), T.s[1])}\\right)$$`);
    st.push(`<p class="mlstep">3. On reconnaît l'angle (le signe de $\\sin\\theta$ donne le demi-plan) :</p>$$\\cos\\cR\\theta = ${surd(...T.c)},\\qquad\\sin\\cR\\theta = ${surd(...T.s)}${T.s[0].n > 0 ? " > 0" : T.s[0].n < 0 ? "\\lt0" : ""}\\qquad\\Longrightarrow\\qquad\\cR{\\theta = ${piTex(th)}}$$`);
    st.push(`<p class="mlres">$$z = \\cG{${r === 1 ? "" : r}e^{${th.n ? `${th.n < 0 ? "-" : ""}i${piTex(Fr(Math.abs(th.n), th.d))}` : "0"}}}$$</p>`);
    return st;
  };
  stepLab(host, "Forme exponentielle pas à pas", gen, build);
}
/* Linéariser cos^n x sin^m x */
function mlLin(host) {
  const gen = () => { const opts = [[2, 0], [0, 2], [3, 0], [0, 3], [4, 0], [0, 4], [2, 1], [1, 2], [2, 2], [3, 1], [1, 3]]; const [n, m] = opts[rnd(0, opts.length - 1)]; return { n, m }; };
  const expT = (c, k) => { const e = k === 0 ? "" : `e^{${k === 1 ? "" : k === -1 ? "-" : k}ix}`; return [c, e]; };
  const build = e => {
    const { n, m } = e, A = n + m;
    const P = Array(2 * A + 1).fill(0); // index = k + A
    const cA = [...Array(n + 1).keys()].map(j => [binom(n, j), n - 2 * j]);
    const sA = [...Array(m + 1).keys()].map(j => [binom(m, j) * (-1) ** j, m - 2 * j]);
    cA.forEach(([c1, k1]) => sA.forEach(([c2, k2]) => { P[k1 + k2 + A] += c1 * c2; }));
    const f = `${n ? `\\cos^{${n}}x` : ""}${m ? `\\sin^{${m}}x` : ""}`.replace("^{1}", "");
    const den = 2 ** n * 2 ** m, im = ((m % 4) + 4) % 4; // (2i)^m = 2^m i^m
    const iTex = ["", "i", "-", "-i"][im];
    const st = [`$$${f}$$`];
    st.push(`<p class="mlstep">1. Euler :</p>$$${f} = ${n ? `\\left(\\frac{e^{ix} + e^{-ix}}{2}\\right)^{${n}}` : ""}${m ? `\\left(\\frac{e^{ix} - e^{-ix}}{2i}\\right)^{${m}}` : ""} = \\frac{${n ? `(e^{ix} + e^{-ix})^{${n}}` : ""}${m ? `(e^{ix} - e^{-ix})^{${m}}` : ""}}{${m ? `${2 ** n}\\cdot(2i)^{${m}}` : 2 ** n}}$$${m ? `<p class="mlnote">$(2i)^{${m}} = ${2 ** m}\\,i^{${m}} = ${m ? `${im === 2 || im === 3 ? "-" : ""}${2 ** m}${im % 2 ? "i" : ""}` : 1}$, donc le dénominateur vaut $${iTex === "-" ? "-" : iTex === "-i" ? "-" : ""}${den}${im % 2 ? "i" : ""}$.</p>` : ""}`);
    const dev = arr => fsum(arr.map(([c, k]) => expT(c, k)));
    st.push(`<p class="mlstep">2. Binôme de Newton :</p>${n ? `$$(e^{ix} + e^{-ix})^{${n}} = ${dev(cA)}$$` : ""}${m ? `$$(e^{ix} - e^{-ix})^{${m}} = ${dev(sA)}$$` : ""}`);
    const terms = []; for (let k = A; k >= -A; k--) if (P[k + A]) terms.push([P[k + A], k]);
    if (n && m) st.push(`<p class="mlstep">3. On développe le produit complètement (on ajoute les exposants) :</p>$$\\text{numérateur} = ${dev(terms)}$$`);
    /* regroupement */
    const even = m % 2 === 0, parts = [];
    for (let k = A; k >= 1; k--) { const c = P[k + A]; if (c) parts.push([c, k]); }
    const c0 = P[A];
    const grp = parts.map(([c, k]) => `${c === 1 ? "" : c === -1 ? "-" : c}\\big(e^{${k === 1 ? "" : k}ix} ${even ? "+" : "-"} e^{-${k === 1 ? "" : k}ix}\\big)`).join(" + ").replace(/\+ -/g, "- ");
    const eul = parts.map(([c, k]) => [Fr(2 * c), even ? `\\cos ${k === 1 ? "" : k}x` : `i\\sin ${k === 1 ? "" : k}x`]);
    st.push(`<p class="mlstep">${n && m ? 4 : 3}. On regroupe $e^{ikx}$ avec $e^{-ikx}$, puis Euler dans l'autre sens :</p>$$\\text{numérateur} = ${grp}${c0 ? (c0 > 0 ? " + " : " - ") + Math.abs(c0) : ""} = ${fsum([...eul, [c0, ""]])}$$`);
    /* division : num / (den · i^m). Pour m pair : i^m = ±1 ; m impair : num contient i, i/i = 1 */
    const sg = (im === 2 || im === 3) ? -1 : 1;
    const fin = parts.map(([c, k]) => [Fr(sg * 2 * c, den), even ? `\\cos ${k === 1 ? "" : k}x` : `\\sin ${k === 1 ? "" : k}x`]).reverse();
    if (c0) fin.unshift([Fr(sg * c0, den), ""]);
    st.push(`<p class="mlstep">${n && m ? 5 : 4}. On divise par le dénominateur :</p><p class="mlres">$$${f} = \\cG{${fsum(fin)}}$$</p><p class="mlnote">Contrôle de parité : la fonction est ${m % 2 ? "impaire, il ne reste que des sinus" : "paire, il ne reste que des cosinus"}.</p>`);
    return st;
  };
  stepLab(host, "Linéariser pas à pas", gen, build);
}
/* Racines carrées en forme algébrique */
function mlRac2(host) {
  const gen = () => { let x, y; do { x = rnd(-4, 4); y = rnd(-4, 4); } while (!x || !y); if (x < 0) { x = -x; y = -y; } return { x, y }; };
  const build = e => {
    const { x, y } = e, a = x * x - y * y, b = 2 * x * y, M = x * x + y * y;
    const D = `${a}${b < 0 ? " - " : " + "}${Math.abs(b)}i`;
    const st = [`$$\\text{Racines carrées de}\\ \\Delta = ${D}$$`];
    st.push(`<p class="mlstep">1. Le module de $\\Delta$ :</p>$$|\\Delta| = \\sqrt{${par(a)}^2 + ${par(b)}^2} = \\sqrt{${a * a + b * b}} = ${M}$$`);
    st.push(`<p class="mlstep">2. On cherche $\\delta = x + iy$ avec $\\delta^2 = \\Delta$ :</p>$$\\left\\{\\begin{aligned}x^2 - y^2 &= ${a}\\\\x^2 + y^2 &= ${M}\\\\2xy &= ${b}\\end{aligned}\\right.$$`);
    st.push(`<p class="mlstep">3. On ajoute, puis on soustrait les deux premières lignes :</p>$$2x^2 = ${a + M}\\ \\Longrightarrow\\ x^2 = ${x * x},\\qquad2y^2 = ${M - a}\\ \\Longrightarrow\\ y^2 = ${y * y}$$<p class="mlnote">Donc $x = \\pm${x}$ et $y = \\pm${Math.abs(y)}$. La troisième ligne donne $xy = ${x * y} ${x * y > 0 ? "> 0" : "\\lt0"}$ : $x$ et $y$ sont de ${x * y > 0 ? "même signe" : "signes contraires"}.</p>`);
    st.push(`<p class="mlres">$$\\delta = \\cG{\\pm\\left(${x}${y < 0 ? " - " : " + "}${Math.abs(y) === 1 ? "" : Math.abs(y)}i\\right)}$$</p><p class="mlnote">Contrôle : $(${x}${y < 0 ? " - " : " + "}${Math.abs(y) === 1 ? "" : Math.abs(y)}i)^2 = ${x * x} ${b < 0 ? "-" : "+"} ${Math.abs(b)}i - ${y * y} = ${D}$</p>`);
    return st;
  };
  stepLab(host, "Racine carrée d'un complexe pas à pas", gen, build);
}
/* Racines n-ièmes, avec le polygone */
function mlRacn(host) {
  const gen = () => { const n = rnd(2, 6), rho = rnd(1, 2), ths = [Fr(0), Fr(1, 2), Fr(1), Fr(-1, 2), Fr(1, 3), Fr(1, 4)]; return { n, rho, th: ths[rnd(0, ths.length - 1)] }; };
  const build = e => {
    const { n, rho, th } = e, R = rho ** n, CL = ["#2B5BD7", "#D4503B", "#1F8A5B", "#7A4CC2", "#C27C00", "#C2416B"];
    const eT = (r, f) => f.n ? `${r === 1 ? "" : r}e^{${f.n < 0 ? "-" : ""}i${piTex(Fr(Math.abs(f.n), f.d))}}` : String(r);
    const aT = eT(R, th);
    const ang = k => fadd(fdiv(th, Fr(n)), Fr(2 * k, n));
    const st = [`$$z^{${n}} = ${aT}$$`];
    st.push(`<p class="mlstep">1. On pose $z = \\rho e^{i\\varphi}$, donc $z^{${n}} = \\rho^{${n}}e^{${n}i\\varphi}$, et on identifie :</p>$$\\left\\{\\begin{aligned}\\rho^{${n}} &= ${R}\\\\${n}\\varphi &= ${th.n ? piTex(th) + " + " : ""}2k\\pi\\end{aligned}\\right.\\iff\\left\\{\\begin{aligned}\\rho &= ${rho}\\\\\\varphi &= ${th.n ? piTex(fdiv(th, Fr(n))) + " + " : ""}\\frac{2k\\pi}{${n}},\\quad k\\in[\\![0, ${n - 1}]\\!]\\end{aligned}\\right.$$`);
    st.push(`<p class="mlstep">2. Les ${n} racines :</p>$$${[...Array(n).keys()].map(k => `\\textcolor[RGB]{${CL[k].slice(1).match(/../g).map(h => parseInt(h, 16)).join(",")}}{z_{${k}} = ${eT(rho, ang(k))}}`).join(",\\quad ")}$$`);
    const W = 220, c = W / 2, s = 80 / rho, pts = [...Array(n).keys()].map(k => { const a = Math.PI * (ang(k).n / ang(k).d); return [c + rho * s * Math.cos(a), c - rho * s * Math.sin(a)]; });
    const svg = `<svg class="racn" viewBox="0 0 ${W} ${W}" width="${W}" height="${W}" role="img" aria-label="Les racines sur le cercle"><line x1="10" y1="${c}" x2="${W - 10}" y2="${c}" class="ax"/><line x1="${c}" y1="10" x2="${c}" y2="${W - 10}" class="ax"/><circle cx="${c}" cy="${c}" r="${rho * s}" class="ci"/>${n > 2 ? `<polygon points="${pts.map(p => p.map(v => v.toFixed(1)).join(",")).join(" ")}" class="po"/>` : `<line x1="${pts[0][0]}" y1="${pts[0][1]}" x2="${pts[1][0]}" y2="${pts[1][1]}" class="po"/>`}${pts.map((p, k) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="5" fill="${CL[k]}"/>`).join("")}</svg>`;
    st.push(`<p class="mlstep">3. Elles forment un ${n === 2 ? "segment centré en $0$" : `polygone régulier à ${n} côtés`}, sur le cercle de rayon $${rho}$ :</p><div class="racnw">${svg}</div><p class="mlnote">Leur somme est nulle${n > 1 ? "" : ""} : $\\sum_k z_k = 0$.</p>`);
    return st;
  };
  stepLab(host, "Racines $n$-ièmes pas à pas", gen, build);
}
const QCPX = [
  ["$\\operatorname{Im}(3 - 2i) = -2i$.", false, "Faux : la partie imaginaire est un réel, $-2$."],
  ["$|z + z'| = |z| + |z'|$ pour tous $z, z'$.", false, "Faux : seulement $\\leqslant$. Égalité si $z = \\lambda z'$ avec $\\lambda\\geqslant0$."],
  ["$-2e^{i\\pi/4}$ est une forme exponentielle de module $-2$.", false, "Faux : un module est positif. $-2e^{i\\pi/4} = 2e^{5i\\pi/4}$."],
  ["$1 + j + j^2 = 0$.", true, "Vrai : somme des racines cubiques de l'unité."],
  ["$\\sqrt{-4} = 2i$.", false, "Faux : la notation $\\sqrt{\\ }$ est réservée aux réels positifs. On dit : les racines carrées de $-4$ sont $\\pm2i$."],
  ["$\\cos^2x = \\frac{1 + \\cos2x}2$.", true, "Vrai : c'est la linéarisation la plus utilisée."],
  ["$z^4 = 1$ a quatre solutions dans $\\mathbb C$.", true, "Vrai : $1, i, -1, -i$."],
  ["$\\arg(z + z') = \\arg z + \\arg z'$.", false, "Faux : c'est vrai pour le produit $zz'$, pas pour la somme."],
  ["Si $z\\in\\mathbb U$, alors $\\overline z = \\frac1z$.", true, "Vrai : $z\\overline z = |z|^2 = 1$."],
  ["$1 + e^{i\\theta} = 2\\cos\\frac\\theta2\\,e^{i\\theta/2}$, donc $|1 + e^{i\\theta}| = 2\\cos\\frac\\theta2$ pour tout $\\theta$.", false, "Faux : seulement si $\\cos\\frac\\theta2\\geqslant0$. Sinon le module est $-2\\cos\\frac\\theta2$."]
];

/* ---------- Labos des Méthodes « Intégration » et « Séries numériques » ---------- */
/* Sommes de Riemann : rectangles, curseur n */
function mlRiemann(host) {
  const F = [
    { t: "x^2", f: x => x * x, I: 1 / 3, It: "\\frac13" },
    { t: "\\frac1{1 + x^2}", f: x => 1 / (1 + x * x), I: Math.PI / 4, It: "\\frac\\pi4" },
    { t: "\\sqrt x", f: x => Math.sqrt(x), I: 2 / 3, It: "\\frac23" },
    { t: "e^x", f: x => Math.exp(x), I: Math.E - 1, It: "e - 1" }
  ];
  let fi = 1, n = 6, side = "d";
  const W = 520, H = 260, X = x => 40 + x * (W - 60), Y = (y, M) => H - 30 - y / M * (H - 50);
  const draw = () => {
    const { f, t, I, It } = F[fi], M = Math.max(f(0), f(1)) * 1.08;
    let S = 0, rects = "";
    for (let k = 0; k < n; k++) { const x = side === "d" ? (k + 1) / n : k / n, h = f(x); S += h / n; rects += `<rect x="${X(k / n).toFixed(1)}" y="${Y(h, M).toFixed(1)}" width="${(X((k + 1) / n) - X(k / n)).toFixed(1)}" height="${(Y(0, M) - Y(h, M)).toFixed(1)}" class="rr"/>`; }
    let path = ""; for (let i = 0; i <= 100; i++) { const x = i / 100; path += `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x), M).toFixed(1)}`; }
    host.innerHTML = `<p class="mlt">Sommes de Riemann : fais varier $n$</p><div class="rmctl"><div class="mlseg">${F.map((g, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${g.t}$</button>`).join("")}</div><div class="mlseg"><button type="button" data-s="g" aria-pressed="${side === "g"}">rectangles à gauche</button><button type="button" data-s="d" aria-pressed="${side === "d"}">à droite</button></div><label class="rmn">$n = ${n}$ <input type="range" min="1" max="60" value="${n}" data-n aria-label="Nombre de rectangles"></label></div>
<svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Rectangles sous la courbe">${rects}<line x1="${X(0)}" y1="${Y(0, M)}" x2="${X(1)}" y2="${Y(0, M)}" class="ax"/><line x1="${X(0)}" y1="${Y(0, M)}" x2="${X(0)}" y2="16" class="ax"/><path d="${path}" class="cu"/><text x="${X(1) - 4}" y="${Y(0, M) + 18}" class="tx">1</text><text x="${X(0) - 4}" y="${Y(0, M) + 18}" class="tx">0</text></svg>
<p class="mlcalc">$$S_{${n}} = \\frac1{${n}}\\sum_{k=${side === "d" ? 1 : 0}}^{${side === "d" ? n : n - 1}}f\\Big(\\frac k{${n}}\\Big) \\approx ${S.toFixed(5).replace(".", "{,}")},\\qquad\\int_0^1${t}\\,dx = ${It}\\approx${I.toFixed(5).replace(".", "{,}")},\\qquad\\text{écart}\\approx${Math.abs(S - I).toFixed(5).replace(".", "{,}")}$$</p><p class="mlnote">Multiplie $n$ par $2$ : l'écart est à peu près divisé par $2$, il est en $\\frac1n$.</p>`;
    $$("[data-f]", host).forEach(b => b.addEventListener("click", () => { fi = +b.dataset.f; draw(); }));
    $$("[data-s]", host).forEach(b => b.addEventListener("click", () => { side = b.dataset.s; draw(); }));
    $("[data-n]", host).addEventListener("input", e => { n = +e.target.value; draw(); $("[data-n]", host).focus(); });
    typeset(host);
  };
  draw();
}
/* IPP pas à pas */
function mlIpp(host) {
  const gen = () => { if (rnd(0, 1)) { let p = 0; while (!p) p = rnd(-3, 3); const as = [1, 2, -1, 3]; return { kind: 0, p, q: rnd(-3, 3), a: as[rnd(0, 3)] }; } return { kind: 1, k: rnd(0, 3) }; };
  const build = e => {
    if (e.kind === 0) {
      const { p, q, a } = e, P = fsum([[p, "x"], [q, ""]]), ea = exT(a).replace(/t/g, "x"), e1 = a === 1 ? "e" : `e^{${a}}`;
      const ce = fadd(Fr(p + q, a), Fr(-p, a * a)), c0 = fadd(Fr(-q, a), Fr(p, a * a));
      return [`$$I = \\int_0^1(${P})\\,${ea}\\,dx$$`,
        `<p class="mlstep">1. On dérive le polynôme, on intègre l'exponentielle :</p>$$\\left\\{\\begin{aligned}\\cB{u(x)} &= \\cB{${P}} & \\cB{u'(x)} &= \\cB{${p}}\\\\\\cR{v'(x)} &= \\cR{${ea}} & \\cR{v(x)} &= \\cR{${fsum([[Fr(1, a), ea]])}}\\end{aligned}\\right.$$`,
        `<p class="mlstep">2. La formule :</p>$$I = \\Big[\\cB{(${P})}\\,\\cR{${fsum([[Fr(1, a), ea]])}}\\Big]_0^1 - \\int_0^1\\cB{${p}}\\cdot\\cR{${fsum([[Fr(1, a), ea]])}}\\,dx$$`,
        `<p class="mlstep">3. Le crochet, puis l'intégrale restante :</p>$$\\Big[\\dots\\Big]_0^1 = ${fsum([[Fr(p + q, a), e1]])} - \\left(${ftex(Fr(q, a))}\\right),\\qquad\\int_0^1${fsum([[Fr(p, a), ea]])}\\,dx = ${ftx(Fr(p, a * a))}\\big(${e1} - 1\\big)$$`,
        `<p class="mlres">$$I = ${fsum([[ce, e1], [c0, ""]])}$$</p>`];
    }
    const { k } = e, xk = k === 0 ? "1" : k === 1 ? "x" : `x^{${k}}`, xk1 = k === 0 ? "x" : `x^{${k + 1}}`, ek = k === 0 ? "e" : `e^{${k + 1}}`;
    return [`$$I = \\int_1^e${k ? xk : ""}\\ln x\\,dx$$`,
      `<p class="mlstep">1. On dérive le $\\ln$${k ? `, on intègre $${xk}$` : `, on intègre le « 1 » caché`} :</p>$$\\left\\{\\begin{aligned}\\cB u &= \\cB{\\ln x} & \\cB{u'} &= \\cB{\\tfrac1x}\\\\\\cR{v'} &= \\cR{${xk}} & \\cR v &= \\cR{${k ? `\\tfrac{${xk1}}{${k + 1}}` : "x"}}\\end{aligned}\\right.$$`,
      `<p class="mlstep">2. La formule ($\\ln e = 1$, $\\ln1 = 0$) :</p>$$I = \\Big[${k ? `\\frac{${xk1}}{${k + 1}}` : "x"}\\ln x\\Big]_1^e - \\int_1^e\\frac1x\\cdot ${k ? `\\frac{${xk1}}{${k + 1}}` : "x"}\\,dx = ${k ? `\\frac{${ek}}{${k + 1}}` : "e"} - ${k ? `\\frac1{${k + 1}}` : ""}\\int_1^e${xk}\\,dx$$`,
      `<p class="mlstep">3. L'intégrale restante :</p>$$\\int_1^e${xk}\\,dx = \\Big[${k ? `\\frac{${xk1}}{${k + 1}}` : "x"}\\Big]_1^e = ${k ? `\\frac{${ek} - 1}{${k + 1}}` : "e - 1"}$$`,
      `<p class="mlres">$$I = ${k ? `\\frac{${ek}}{${k + 1}} - \\frac{${ek} - 1}{${(k + 1) ** 2}} = \\frac{${k === 1 ? "" : k}${ek} + 1}{${(k + 1) ** 2}}` : "e - (e - 1) = 1"}$$</p>`];
  };
  stepLab(host, "Intégration par parties pas à pas", gen, build);
}
const QINT = [
  ["Si $f$ est continue, positive et $\\int_a^bf = 0$, alors $f = 0$ sur $[a, b]$.", true, "Vrai : c'est le théorème de positivité stricte, la continuité est indispensable."],
  ["$\\frac{d}{dx}\\int_0^{x^2}e^{t^2}\\,dt = e^{x^4}$.", false, "Faux : il manque la dérivée de la borne, c'est $2x\\,e^{x^4}$."],
  ["$\\int_{-1}^1x^3\\cos x\\,dx = 0$.", true, "Vrai : la fonction est impaire et l'intervalle symétrique."],
  ["Dans $\\int_0^1x\\,e^x\\,dx$, on dérive $e^x$ et on intègre $x$.", false, "Faux : on dérive le polynôme (il disparaît), on intègre $e^x$."],
  ["Avec $x = \\sin t$, $\\int_0^1\\sqrt{1 - x^2}\\,dx = \\int_0^1\\cos^2t\\,dt$.", false, "Faux : les bornes deviennent $0$ et $\\frac\\pi2$."],
  ["$\\frac1n\\sum_{k=1}^n\\frac kn\\to\\frac12$.", true, "Vrai : somme de Riemann de $x\\mapsto x$ sur $[0, 1]$."],
  ["Taylor-Young donne une inégalité valable sur tout $\\mathbb R$.", false, "Faux : Young est local. Pour une inégalité globale, c'est Taylor-Lagrange ou le reste intégral."],
  ["Pour $\\int\\frac{\\cos x}{1 + \\sin^2x}\\,dx$, les règles de Bioche conseillent $t = \\sin x$.", true, "Vrai : l'élément $g(x)$ est invariant par $x\\mapsto\\pi - x$."],
  ["$\\int\\frac{dx}{x^2 + 9} = \\frac13\\arctan\\frac x3 + C$.", true, "Vrai : $\\int\\frac{dx}{x^2 + a^2} = \\frac1a\\arctan\\frac xa$."],
  ["Si $f\\leqslant g$, alors $\\int_1^0f\\leqslant\\int_1^0g$.", false, "Faux : les bornes sont dans le mauvais ordre, l'inégalité s'inverse."]
];
/* Nature d'une série : banque d'exemples corrigés */
const NAT = [
  ["\\frac{n + 1}{n^3 + 2}", true, "Termes positifs. $u_n\\sim\\frac n{n^3} = \\frac1{n^2}$, Riemann avec $\\alpha = 2 > 1$ : CV."],
  ["\\frac{\\sqrt n}{n + 1}", false, "Termes positifs. $u_n\\sim\\frac{\\sqrt n}n = \\frac1{n^{1/2}}$, Riemann avec $\\alpha = \\frac12\\leqslant1$ : DV."],
  ["\\Big(1 + \\frac1n\\Big)^n", false, "$u_n = e^{n\\ln(1 + 1/n)}\\to e\\neq0$ : divergence grossière."],
  ["\\tan\\frac1{n^2}", true, "Termes positifs. $\\tan x\\sim x$ en $0$, donc $u_n\\sim\\frac1{n^2}$ : CV."],
  ["\\frac{3^n}{n!}", true, "D'Alembert : $\\frac{u_{n+1}}{u_n} = \\frac{3}{n + 1}\\to0\\lt1$ : CV."],
  ["\\frac{(-1)^n}{n^2 + 1}", true, "$|u_n|\\leqslant\\frac1{n^2}$ : convergence absolue, donc CV."],
  ["\\frac{\\ln n}{n}", false, "Termes positifs et $u_n\\geqslant\\frac1n$ pour $n\\geqslant3$ (car $\\ln n\\geqslant1$) : DV par comparaison avec la série harmonique."],
  ["n\\,e^{-n}", true, "$n^2u_n = n^3e^{-n}\\to0$, donc $u_n = o\\big(\\frac1{n^2}\\big)$ : CV."],
  ["\\frac{(-1)^n}{\\sqrt n}", true, "$\\frac1{\\sqrt n}$ décroît vers $0$ : critère spécial des séries alternées, CV (mais pas absolument)."],
  ["\\sqrt{n + 1} - \\sqrt n", false, "Télescopique : $S_N = \\sqrt{N + 1} - 1\\to+\\infty$. Ou bien $u_n = \\frac1{\\sqrt{n + 1} + \\sqrt n}\\sim\\frac1{2\\sqrt n}$ : DV."],
  ["\\frac1{n^2}\\sin n", true, "$|u_n|\\leqslant\\frac1{n^2}$ : CV absolument."],
  ["e^{1/n} - 1", false, "Termes positifs. $e^x - 1\\sim x$, donc $u_n\\sim\\frac1n$ : DV."],
  ["\\frac{n!}{n^n}", true, "D'Alembert : $\\frac{u_{n+1}}{u_n} = \\big(1 + \\frac1n\\big)^{-n}\\to\\frac1e\\lt1$ : CV."],
  ["\\frac1{n\\ln n}", false, "Série-intégrale : $\\int_2^N\\frac{dt}{t\\ln t} = \\ln\\ln N - \\ln\\ln2\\to+\\infty$ : DV."]
];
function mlNature(host) {
  let i = rnd(0, NAT.length - 1), pick = null;
  const draw = () => {
    const [u, cv, sol] = NAT[i];
    host.innerHTML = `<p class="mlt">Convergente ou divergente ?</p><p class="mlq">$$\\sum_{n}u_n,\\qquad u_n = ${u}$$</p><div class="mlseg"><button type="button" data-c="1">Converge</button><button type="button" data-c="0">Diverge</button></div><div class="mlnav"><button type="button" class="btn btn-yellow btn-sm" data-check>Vérifier</button><button type="button" class="btn btn-ghost btn-sm" data-sol>Correction</button><button type="button" class="btn btn-ghost btn-sm" data-new>Une autre</button></div><p class="mlres"></p><div class="mlsol" hidden><p>${sol}</p></div>`;
    $$("[data-c]", host).forEach(b => b.addEventListener("click", () => { pick = b.dataset.c === "1"; $$("[data-c]", host).forEach(x => x.setAttribute("aria-pressed", x === b)); }));
    $("[data-check]", host).addEventListener("click", () => { const r = $(".mlres", host); r.textContent = pick === null ? "Choisis d'abord une réponse." : pick === cv ? "Juste." : "Non : regarde la correction."; });
    $("[data-sol]", host).addEventListener("click", () => { const s = $(".mlsol", host); s.hidden = false; typeset(s); });
    $("[data-new]", host).addEventListener("click", () => { let j = i; while (j === i) j = rnd(0, NAT.length - 1); i = j; pick = null; draw(); });
    typeset(host);
  };
  draw();
}
/* Sommes partielles tracées */
function mlPartielles(host) {
  const S = [
    { t: "\\frac1n", u: n => 1 / n, c: "diverge (lentement, comme $\\ln n$)" },
    { t: "\\frac1{n^2}", u: n => 1 / (n * n), c: "converge vers $\\frac{\\pi^2}6\\approx1{,}645$" },
    { t: "\\frac{(-1)^{n+1}}n", u: n => (n % 2 ? 1 : -1) / n, c: "converge vers $\\ln2\\approx0{,}693$, en oscillant" },
    { t: "\\frac1{2^n}", u: n => 2 ** -n, c: "converge vers $1$, très vite" },
    { t: "\\frac1{\\sqrt n}", u: n => 1 / Math.sqrt(n), c: "diverge, comme $2\\sqrt n$" }
  ];
  let si = 0, N = 40;
  const W = 520, H = 240;
  const draw = () => {
    const { u, t, c } = S[si]; let s = 0; const v = []; for (let n = 1; n <= N; n++) { s += u(n); v.push(s); }
    const mn = Math.min(0, ...v), mx = Math.max(...v) * 1.05 || 1, X = n => 40 + (n - 1) / Math.max(N - 1, 1) * (W - 60), Y = y => H - 25 - (y - mn) / (mx - mn) * (H - 45);
    host.innerHTML = `<p class="mlt">Les sommes partielles $S_N = \\sum_{n=1}^Nu_n$</p><div class="rmctl"><div class="mlseg">${S.map((g, i) => `<button type="button" data-s="${i}" aria-pressed="${i === si}">$${g.t}$</button>`).join("")}</div><label class="rmn">$N = ${N}$ <input type="range" min="5" max="400" value="${N}" data-n aria-label="Nombre de termes"></label></div><svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Sommes partielles"><line x1="40" y1="${Y(0)}" x2="${W - 20}" y2="${Y(0)}" class="ax"/><line x1="40" y1="${H - 25}" x2="40" y2="12" class="ax"/><polyline points="${v.map((y, k) => `${X(k + 1).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")}" class="cu"/>${N <= 60 ? v.map((y, k) => `<circle cx="${X(k + 1).toFixed(1)}" cy="${Y(y).toFixed(1)}" r="2.2" class="pt"/>`).join("") : ""}</svg><p class="mlcalc">$S_{${N}}\\approx${s.toFixed(4).replace(".", "{,}")}$ : la série $\\sum${t}$ ${c}.</p>`;
    $$("[data-s]", host).forEach(b => b.addEventListener("click", () => { si = +b.dataset.s; draw(); }));
    $("[data-n]", host).addEventListener("input", e => { N = +e.target.value; draw(); $("[data-n]", host).focus(); });
    typeset(host);
  };
  draw();
}
const QSER = [
  ["Si $u_n\\to0$, alors $\\sum u_n$ converge.", false, "Faux : $\\sum\\frac1n$ diverge alors que $\\frac1n\\to0$."],
  ["$\\sum\\frac1{n^{1{,}01}}$ converge.", true, "Vrai : Riemann avec $\\alpha = 1{,}01 > 1$."],
  ["Si $u_n\\sim v_n$, alors $\\sum u_n$ et $\\sum v_n$ ont même nature, quels que soient les signes.", false, "Faux : il faut un signe constant. Contre-exemple : $u_n = \\frac{(-1)^n}{\\sqrt n}$ et $v_n = u_n + \\frac1n$."],
  ["$\\sum_{n=1}^{+\\infty}\\frac1{2^n} = 1$.", true, "Vrai : $\\frac{1/2}{1 - 1/2} = 1$."],
  ["Une série absolument convergente est convergente.", true, "Vrai, pour des réels comme pour des complexes."],
  ["D'Alembert permet de conclure pour $\\sum\\frac1{n^2}$.", false, "Faux : le rapport tend vers $1$, on ne peut rien dire. On utilise Riemann."],
  ["$\\sum\\frac{(-1)^n}n$ converge absolument.", false, "Faux : elle converge (critère spécial) mais $\\sum\\frac1n$ diverge."],
  ["$\\sum(u_{n+1} - u_n)$ converge si et seulement si $(u_n)$ converge.", true, "Vrai : $S_N = u_{N+1} - u_0$."],
  ["$\\sum_{k=1}^n\\frac1k\\sim\\ln n$.", true, "Vrai : par comparaison série-intégrale, $\\ln(n + 1)\\leqslant H_n\\leqslant1 + \\ln n$."],
  ["Si $\\sum u_n$ et $\\sum v_n$ divergent, alors $\\sum(u_n + v_n)$ diverge.", false, "Faux : $u_n = 1$ et $v_n = -1$."]
];

/* ---------- Labos : DL, intégrales à paramètre, suites de fonctions ---------- */
/* tracé générique : plusieurs courbes sur [x0, x1] */
function plotSvg(curves, x0, x1, y0, y1, extra = "") {
  const W = 520, H = 260, X = x => 40 + (x - x0) / (x1 - x0) * (W - 60), Y = y => H - 25 - (Math.max(y0 - 1, Math.min(y1 + 1, y)) - y0) / (y1 - y0) * (H - 45);
  const path = f => { let d = "", up = false; for (let i = 0; i <= 240; i++) { const x = x0 + (x1 - x0) * i / 240, y = f(x); if (!isFinite(y)) { up = false; continue; } d += `${up ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`; up = true; } return d; };
  return `<svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Courbes"><defs><clipPath id="pc"><rect x="40" y="12" width="${W - 60}" height="${H - 37}"/></clipPath></defs>${y0 <= 0 && y1 >= 0 ? `<line x1="40" y1="${Y(0)}" x2="${W - 20}" y2="${Y(0)}" class="ax"/>` : ""}${x0 <= 0 && x1 >= 0 ? `<line x1="${X(0)}" y1="${H - 25}" x2="${X(0)}" y2="12" class="ax"/>` : ""}<g clip-path="url(#pc)">${curves.map(c => `<path d="${path(c.f)}" fill="none" stroke="${c.c}" stroke-width="${c.w || 2}"${c.d ? ` stroke-dasharray="${c.d}"` : ""}/>`).join("")}${extra ? extra(X, Y) : ""}</g><text x="${W - 22}" y="${H - 8}" class="tx" text-anchor="end">${x1}</text><text x="40" y="${H - 8}" class="tx">${x0}</text></svg>`;
}
/* Polynômes de Taylor */
function mlTaylor(host) {
  const F = [
    { t: "e^x", f: Math.exp, c: k => 1 / fact(k), r: [-3, 3, -1, 8] },
    { t: "\\cos x", f: Math.cos, c: k => k % 2 ? 0 : (-1) ** (k / 2) / fact(k), r: [-6, 6, -2, 2] },
    { t: "\\sin x", f: Math.sin, c: k => k % 2 ? (-1) ** ((k - 1) / 2) / fact(k) : 0, r: [-6, 6, -2, 2] },
    { t: "\\ln(1 + x)", f: x => x > -1 ? Math.log(1 + x) : NaN, c: k => k ? (-1) ** (k - 1) / k : 0, r: [-0.95, 2, -3, 1.5] },
    { t: "\\frac1{1 - x}", f: x => 1 / (1 - x), c: () => 1, r: [-2, 0.95, -1, 6] }
  ];
  let fi = 0, n = 2;
  const draw = () => {
    const g = F[fi], P = x => { let s = 0; for (let k = 0; k <= n; k++) s += g.c(k) * x ** k; return s; };
    const terms = []; for (let k = 0; k <= n; k++) { const c = g.c(k); if (!c) continue; const fr = Math.abs(c) < 1 ? (() => { const d = Math.round(1 / Math.abs(c)); return Math.abs(1 / d - Math.abs(c)) < 1e-9 ? Fr(Math.sign(c), d) : null; })() : Fr(Math.round(c)); terms.push([fr || Fr(Math.round(c * 1e6), 1e6), k === 0 ? "" : k === 1 ? "x" : `x^{${k}}`]); }
    host.innerHTML = `<p class="mlt">Le DL s'approche de la fonction près de $0$</p><div class="rmctl"><div class="mlseg">${F.map((h, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${h.t}$</button>`).join("")}</div><label class="rmn">ordre $n = ${n}$ <input type="range" min="0" max="12" value="${n}" data-n aria-label="Ordre du DL"></label></div>${plotSvg([{ f: g.f, c: "#2B5BD7", w: 2.5 }, { f: P, c: "#D4503B", d: "6 4" }], g.r[0], g.r[1], g.r[2], g.r[3])}<p class="mlcalc">$$${g.t} = \\textcolor[RGB]{212,80,59}{${fsum(terms)}} + o(x^{${n}})$$</p><p class="mlnote">En bleu la fonction, en rouge pointillé la partie régulière. Plus l'ordre augmente, plus elles collent longtemps, mais seulement <b>près de $0$</b>.</p>`;
    $$("[data-f]", host).forEach(b => b.addEventListener("click", () => { fi = +b.dataset.f; draw(); }));
    $("[data-n]", host).addEventListener("input", e => { n = +e.target.value; draw(); $("[data-n]", host).focus(); });
    typeset(host);
  };
  draw();
}
const fact = k => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };
/* Banque de limites par DL, corrigées pas à pas */
const DLEX = [
  ["\\lim_{x\\to0}\\frac{\\ln(1 + x) - x}{x^2}", ["Le dénominateur est $x^2$ : on développe le numérateur à l'ordre $2$.", "$\\ln(1 + x) - x = x - \\frac{x^2}2 + o(x^2) - x = -\\frac{x^2}2 + o(x^2)$.", "Donc le quotient vaut $-\\frac12 + o(1)$ : la limite est $-\\frac12$."]],
  ["\\lim_{x\\to0}\\frac{x - \\sin x}{x - \\tan x}", ["En haut : $x - \\sin x = \\frac{x^3}6 + o(x^3)$.", "En bas : $x - \\tan x = -\\frac{x^3}3 + o(x^3)$.", "Quotient : $\\frac{x^3/6}{-x^3/3} = -\\frac12$. La limite est $-\\frac12$."]],
  ["\\lim_{x\\to0}\\frac{e^x - \\cos x - x}{x^2}", ["Ordre $2$ : $e^x = 1 + x + \\frac{x^2}2 + o(x^2)$ et $\\cos x = 1 - \\frac{x^2}2 + o(x^2)$.", "$e^x - \\cos x - x = \\frac{x^2}2 + \\frac{x^2}2 + o(x^2) = x^2 + o(x^2)$.", "La limite est $1$."]],
  ["\\lim_{x\\to0}(\\cos x)^{1/x^2}", ["Forme $1^\\infty$ : on écrit $e^{\\frac{\\ln(\\cos x)}{x^2}}$.", "$\\ln(\\cos x) = \\ln\\big(1 - \\frac{x^2}2 + o(x^2)\\big) = -\\frac{x^2}2 + o(x^2)$.", "L'exposant tend vers $-\\frac12$ : la limite est $e^{-1/2} = \\frac1{\\sqrt e}$."]],
  ["\\lim_{x\\to+\\infty}x^2\\Big(e^{1/x} - 1 - \\frac1x\\Big)", ["On pose $h = \\frac1x\\to0$ : l'expression vaut $\\frac{e^h - 1 - h}{h^2}$.", "$e^h - 1 - h = \\frac{h^2}2 + o(h^2)$.", "La limite est $\\frac12$."]],
  ["\\lim_{x\\to0}\\frac{\\sqrt{1 + x} - \\sqrt{1 - x}}{x}", ["Ordre $1$ : $\\sqrt{1 + x} = 1 + \\frac x2 + o(x)$ et $\\sqrt{1 - x} = 1 - \\frac x2 + o(x)$.", "Différence : $x + o(x)$.", "La limite est $1$."]],
  ["\\lim_{x\\to0}\\Big(\\frac1x - \\frac1{\\ln(1 + x)}\\Big)", ["Même dénominateur : $\\frac{\\ln(1 + x) - x}{x\\ln(1 + x)}$, et le dénominateur est $\\sim x^2$.", "Numérateur à l'ordre $2$ : $-\\frac{x^2}2 + o(x^2)$.", "La limite est $-\\frac12$."]],
  ["\\lim_{n\\to+\\infty}n\\Big(\\Big(1 + \\frac1n\\Big)^{1/3} - 1\\Big)", ["$(1 + u)^{1/3} - 1\\sim\\frac u3$ avec $u = \\frac1n\\to0$.", "Donc l'expression $\\sim n\\cdot\\frac1{3n} = \\frac13$.", "Un équivalent suffit ici (produit). La limite est $\\frac13$."]]
];
function mlDlEx(host) {
  let i = rnd(0, DLEX.length - 1), k = -1;
  const draw = () => {
    const [q, st] = DLEX[i];
    host.innerHTML = `<p class="mlt">Limites par DL : cherche, puis dévoile étape par étape</p><p class="mlq">$$${q}$$</p>${st.slice(0, k + 1).map((s, j) => `<p class="mlstep">${j + 1}. ${s}</p>`).join("")}<div class="mlnav"><button type="button" class="btn btn-yellow btn-sm" data-g${k < st.length - 1 ? "" : " disabled"}>${k < 0 ? "Indice" : "Étape suivante"} ${I.arrow}</button><button type="button" class="btn btn-ghost btn-sm" data-new>Une autre</button></div>`;
    $("[data-g]", host).addEventListener("click", () => { k++; draw(); });
    $("[data-new]", host).addEventListener("click", () => { let j = i; while (j === i) j = rnd(0, DLEX.length - 1); i = j; k = -1; draw(); });
    typeset(host);
  };
  draw();
}
const QDL = [
  ["Si $f\\sim g$ et $h\\sim k$, alors $f + h\\sim g + k$.", false, "Faux : on n'additionne pas les équivalents. $x + x^2\\sim x$ et $-x\\sim-x$, mais la somme vaut $x^2$."],
  ["$\\cos x = 1 - \\frac{x^2}2 + o(x^3)$ en $0$.", true, "Vrai : le terme en $x^3$ est nul (parité), on gagne un ordre."],
  ["$\\ln(1 + x)\\sim x$ en $0$, donc $\\ln(1 + x) - x\\sim0$.", false, "Faux : on ne soustrait pas des équivalents, et rien n'est équivalent à $0$. Il faut le DL : $-\\frac{x^2}2$."],
  ["Si $f\\sim g$ en $+\\infty$, alors $e^f\\sim e^g$.", false, "Faux : $x + 1\\sim x$ mais $e^{x+1} = e\\cdot e^x$."],
  ["$\\tan x = x + \\frac{x^3}3 + o(x^3)$.", true, "Vrai : par $\\frac{\\sin}{\\cos}$ ou en primitivant $1 + \\tan^2$."],
  ["$(\\ln x)^{10} = o(\\sqrt x)$ en $+\\infty$.", true, "Vrai : croissances comparées."],
  ["Pour composer $g(u(x))$ par DL en $0$, il faut $u(x)\\to0$.", true, "Vrai : les DL usuels sont en $0$. Pour $e^{\\cos x}$, écrire $e\\cdot e^{\\cos x - 1}$."],
  ["Si $f(x) = 2 + 3x + x^3 + o(x^3)$, alors la courbe traverse sa tangente en $0$.", true, "Vrai : le premier terme après la tangente est $x^3$, de signe variable : point d'inflexion."],
  ["Une fonction qui a un $DL_2(0)$ est deux fois dérivable en $0$.", false, "Faux : $DL_1$ donne la dérivabilité, mais pas plus. Contre-exemple : $x^3\\sin\\frac1x$."],
  ["$\\sqrt{x^2 + x}\\underset{+\\infty}= x + \\frac12 + o(1)$.", true, "Vrai : $x\\sqrt{1 + \\frac1x} = x\\big(1 + \\frac1{2x} + o(\\frac1x)\\big)$."]
];
/* Domination : f(x, t) pour plusieurs x, et φ au-dessus */
function mlDomin(host) {
  const F = [
    { t: "\\frac{e^{-xt}}{1 + t^2}", f: (x, t) => Math.exp(-x * t) / (1 + t * t), phi: t => 1 / (1 + t * t), pt: "\\frac1{1 + t^2}", xr: [0, 3], tr: [0, 6], yr: [0, 1.1] },
    { t: "e^{-t^2}\\cos(xt)", f: (x, t) => Math.exp(-t * t) * Math.cos(x * t), phi: t => Math.exp(-t * t), pt: "e^{-t^2}", xr: [0, 8], tr: [0, 3], yr: [-1, 1.1] },
    { t: "\\Big(1 - \\frac tx\\Big)^x\\mathbf 1_{[0, x]}", f: (x, t) => t <= x ? (1 - t / x) ** x : 0, phi: t => Math.exp(-t), pt: "e^{-t}", xr: [1, 30], tr: [0, 6], yr: [0, 1.1] }
  ];
  let fi = 0, x = 1;
  const draw = () => {
    const g = F[fi];
    host.innerHTML = `<p class="mlt">La domination : $\\varphi$ reste au-dessus pour tous les paramètres</p><div class="rmctl"><div class="mlseg">${F.map((h, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${h.t}$</button>`).join("")}</div><label class="rmn">paramètre $= ${x.toFixed(1).replace(".", "{,}")}$ <input type="range" min="${g.xr[0]}" max="${g.xr[1]}" step="0.1" value="${x}" data-x aria-label="Paramètre"></label></div>${plotSvg([{ f: t => g.phi(t), c: "#C27C00", w: 2.5 }, { f: t => -g.phi(t), c: "#C27C00", w: 1.5, d: "4 4" }, { f: t => g.f(x, t), c: "#2B5BD7", w: 2 }], g.tr[0], g.tr[1], g.yr[0], g.yr[1])}<p class="mlnote">En bleu $t\\mapsto f(x, t)$, en orange $\\pm\\varphi(t) = \\pm${g.pt}$ : elle ne dépend pas du paramètre, et elle est intégrable.</p>`;
    $$("[data-f]", host).forEach(b => b.addEventListener("click", () => { fi = +b.dataset.f; x = F[fi].xr[0] || 1; draw(); }));
    $("[data-x]", host).addEventListener("input", e => { x = +e.target.value; draw(); $("[data-x]", host).focus(); });
    typeset(host);
  };
  draw();
}
const QIPAR = [
  ["$\\int_0^1\\frac{dt}{\\sqrt t}$ converge.", true, "Vrai : $\\alpha = \\frac12\\lt1$ en $0$."],
  ["$\\int_1^{+\\infty}\\frac{dt}t$ converge.", false, "Faux : $\\alpha = 1$, divergence (c'est $\\ln$)."],
  ["Une intégrale convergente est toujours celle d'une fonction intégrable.", false, "Faux : $\\int_1^{+\\infty}\\frac{\\sin t}t\\,dt$ converge, mais $\\frac{\\sin t}t$ n'est pas intégrable."],
  ["Pour la convergence dominée, $\\varphi$ peut dépendre de $n$.", false, "Faux : $\\varphi$ doit être la même pour tous les $n$."],
  ["Pour dériver sous l'intégrale, on domine $\\frac{\\partial f}{\\partial x}$.", true, "Vrai : c'est la dérivée partielle qu'il faut dominer (et $f$ doit être intégrable)."],
  ["$\\Gamma(n + 1) = n!$.", true, "Vrai : $\\Gamma(x + 1) = x\\Gamma(x)$ et $\\Gamma(1) = 1$."],
  ["Pour la continuité de $\\Gamma$ sur $]0, +\\infty[$, on domine sur chaque $[a, b]$.", true, "Vrai : une domination sur tout $]0, +\\infty[$ est impossible, la continuité est locale."],
  ["$f_n = n\\mathbf 1_{]0, 1/n]}$ vérifie $\\int_0^1f_n\\to\\int_0^1\\lim f_n$.", false, "Faux : $\\int f_n = 1$ et la limite simple est nulle. Il n'y a pas de domination."],
  ["Pour intégrer une série terme à terme sur $]0, +\\infty[$, il suffit que $\\sum f_n$ converge simplement.", false, "Faux : il faut aussi que $\\sum\\int|f_n|$ converge."],
  ["$\\int_0^{+\\infty}e^{-t^2}\\,dt = \\frac{\\sqrt\\pi}2$.", true, "Vrai : c'est l'intégrale de Gauss."]
];
/* Suites de fonctions : tracé de f_n et du sup de l'écart */
function mlFn(host) {
  const F = [
    { t: "x^n\\ \\text{sur}\\ [0, 1]", f: (n, x) => x ** n, lim: x => x < 1 ? 0 : 1, r: [0, 1, 0, 1.05], sup: n => 1, st: "1\\ (\\text{près de}\\ 1)", cu: false },
    { t: "nxe^{-nx}", f: (n, x) => n * x * Math.exp(-n * x), lim: () => 0, r: [0, 3, 0, 0.45], sup: n => 1 / Math.E, st: "f_n(\\tfrac1n) = \\tfrac1e", cu: false },
    { t: "\\frac{\\sin(nx)}n", f: (n, x) => Math.sin(n * x) / n, lim: () => 0, r: [0, 6.3, -1.05, 1.05], sup: n => 1 / n, st: "\\tfrac1n", cu: true },
    { t: "\\frac{x}{1 + nx^2}", f: (n, x) => x / (1 + n * x * x), lim: () => 0, r: [0, 3, 0, 0.55], sup: n => 1 / (2 * Math.sqrt(n)), st: "f_n(\\tfrac1{\\sqrt n}) = \\tfrac1{2\\sqrt n}", cu: true }
  ];
  let fi = 0, n = 3;
  const draw = () => {
    const g = F[fi], s = g.sup(n);
    host.innerHTML = `<p class="mlt">Convergence simple ou uniforme ? Fais varier $n$</p><div class="rmctl"><div class="mlseg">${F.map((h, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${h.t}$</button>`).join("")}</div><label class="rmn">$n = ${n}$ <input type="range" min="1" max="60" value="${n}" data-n aria-label="Valeur de n"></label></div>${plotSvg([1, 2, 4].filter(m => m < n).map(m => ({ f: x => g.f(m, x), c: "#9AA6C9", w: 1 })).concat([{ f: x => g.lim(x), c: "#2B5BD7", w: 2.5 }, { f: x => g.f(n, x), c: "#D4503B", w: 2 }]), g.r[0], g.r[1], g.r[2], g.r[3])}<p class="mlcalc">$\\|f_n - f\\|_\\infty = ${g.st}\\approx${s.toFixed(4).replace(".", "{,}")}$ : ${g.cu ? "tend vers $0$, la convergence est <b>uniforme</b>." : "ne tend pas vers $0$, la convergence est seulement <b>simple</b>."}</p><p class="mlnote">En bleu la limite simple $f$, en rouge $f_n$, en gris quelques $f_m$ précédentes.</p>`;
    $$("[data-f]", host).forEach(b => b.addEventListener("click", () => { fi = +b.dataset.f; draw(); }));
    $("[data-n]", host).addEventListener("input", e => { n = +e.target.value; draw(); $("[data-n]", host).focus(); });
    typeset(host);
  };
  draw();
}
const QSF = [
  ["La convergence simple de fonctions continues donne une limite continue.", false, "Faux : $x^n$ sur $[0, 1]$ a une limite discontinue en $1$."],
  ["La convergence normale entraîne la convergence uniforme.", true, "Vrai : $\\|R_n\\|_\\infty\\leqslant\\sum_{k > n}\\|f_k\\|_\\infty\\to0$."],
  ["$(x^n)$ converge uniformément sur $[0, \\frac12]$.", true, "Vrai : $\\sup_{[0, 1/2]}x^n = \\frac1{2^n}\\to0$."],
  ["Si $f_n\\to f$ uniformément et les $f_n$ sont $\\mathcal C^1$, alors $f$ est $\\mathcal C^1$.", false, "Faux : il faut la CU des dérivées. $\\frac{\\sin(nx)}n\\to0$ mais $\\cos(nx)$ diverge."],
  ["$\\sum\\frac{(-1)^n}{n + x}$ converge normalement sur $[0, +\\infty[$.", false, "Faux : $\\|f_n\\|_\\infty = \\frac1n$. Mais elle converge uniformément (séries alternées)."],
  ["Pour montrer que la somme est continue, la CU sur chaque segment suffit.", true, "Vrai : la continuité est locale."],
  ["Si $\\sum f_n$ converge uniformément, alors $\\|f_n\\|_\\infty\\to0$.", true, "Vrai : $f_n = R_{n-1} - R_n$."],
  ["$\\zeta(x) = \\sum\\frac1{n^x}$ converge normalement sur $]1, +\\infty[$.", false, "Faux : $\\sup_{x > 1}\\frac1{n^x} = \\frac1n$. Elle converge normalement sur chaque $[a, +\\infty[$, $a > 1$."],
  ["Sur un segment, la CU permet d'échanger limite et intégrale.", true, "Vrai : $\\big|\\int(f_n - f)\\big|\\leqslant(b - a)\\|f_n - f\\|_\\infty$."],
  ["Une fonction continue sur $[a, b]$ est limite uniforme de polynômes.", true, "Vrai : théorème de Weierstrass."]
];

/* ---------- Labos de la Méthode « Polynômes » ---------- */
const ptex = (cs, v = "X") => { const n = cs.length - 1; return fsum(cs.map((c, i) => [c, n - i === 0 ? "" : n - i === 1 ? v : `${v}^{${n - i}}`])); };
/* Nombres réels : |ax + b| ⋈ c */
function mlAbsVal(host) {
  const OPS = ["\\leq", "\\lt", "\\geq", "\\gt"];
  const gen = () => { let a = 0; while (!a) a = rnd(-4, 4); return { a, b: rnd(-6, 6), c: rnd(1, 7), o: rnd(0, 3) }; };
  const build = ({ a, b, c, o }) => {
    const X = fsum([[a, "x"], [b, ""]]), op = OPS[o], inner = o < 2, st = o % 2 ? "\\lt" : "\\leq";
    const L = Fr(-c - b, a), U = Fr(c - b, a), lo = a > 0 ? L : U, hi = a > 0 ? U : L;
    const ax = fsum([[a, "x"]]), dv = a > 0 ? `On divise par $${a} > 0$, le sens ne change pas` : `On divise par $${a} \\lt 0$ : <b>on retourne</b> les inégalités`;
    const s = [`$$|${X}|\\ ${op}\\ ${c}$$`];
    s.push(`<p class="mlstep">1. Rappel, pour $a\\geq0$ :</p>$$${inner ? `|X|\\ ${st}\\ a\\iff-a\\ ${st}\\ X\\ ${st}\\ a` : `|X|\\ ${op}\\ a\\iff X\\ ${st === "\\lt" ? "\\lt" : "\\leq"}\\ -a\\ \\text{ou}\\ X\\ ${op}\\ a`}$$`);
    if (inner) {
      s.push(`<p class="mlstep">2. Avec $X = ${X}$ et $a = ${c}$ :</p>$$-${c}\\ ${st}\\ ${X}\\ ${st}\\ ${c}$$`);
      s.push(`<p class="mlstep">3. On retranche $${fpar(b)}$ aux trois membres :</p>$$${-c - b}\\ ${st}\\ ${ax}\\ ${st}\\ ${c - b}$$`);
      s.push(`<p class="mlstep">4. ${dv} :</p>$$${ftex(lo)}\\ ${st}\\ x\\ ${st}\\ ${ftex(hi)}$$`);
      const br = o ? ["]", "["] : ["[", "]"];
      s.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{\\mathcal S = \\left${br[0]}${ftex(lo)},\\ ${ftex(hi)}\\right${br[1]}}$$`);
    } else {
      const ost = o === 3 ? "\\lt" : "\\leq", og = o === 3 ? "\\gt" : "\\geq";
      s.push(`<p class="mlstep">2. Avec $X = ${X}$ et $a = ${c}$ :</p>$$${X}\\ ${ost}\\ -${c}\\quad\\text{ou}\\quad${X}\\ ${og}\\ ${c}$$`);
      s.push(`<p class="mlstep">3. On retranche $${fpar(b)}$ :</p>$$${ax}\\ ${ost}\\ ${-c - b}\\quad\\text{ou}\\quad${ax}\\ ${og}\\ ${c - b}$$`);
      s.push(`<p class="mlstep">4. ${dv}${a < 0 ? " (les deux morceaux s'échangent)" : ""} :</p>$$x\\ ${ost}\\ ${ftex(lo)}\\quad\\text{ou}\\quad x\\ ${og}\\ ${ftex(hi)}$$`);
      const [c1, c2] = o === 3 ? ["[", "]"] : ["]", "["];
      s.push(`<p class="mlstep">5. Conclusion : une <b>réunion</b>.</p>$$\\cG{\\mathcal S = \\left]-\\infty,\\ ${ftex(lo)}\\right${c1}\\cup\\left${c2}${ftex(hi)},\\ +\\infty\\right[}$$`);
    }
    return s;
  };
  stepLab(host, "Résoudre une inéquation avec une valeur absolue", gen, build);
}
/* Nombres réels : ⌊ax + b⌋ = n */
function mlEntX(host) {
  const gen = () => { const A = [-3, -2, 2, 3, 4]; return { a: A[rnd(0, 4)], b: rnd(-4, 4), n: rnd(-4, 5) }; };
  const build = ({ a, b, n }) => {
    const X = fsum([[a, "x"], [b, ""]]), ax = fsum([[a, "x"]]);
    const P = Fr(n - b, a), Q = Fr(n + 1 - b, a), s = [`$$\\left\\lfloor ${X}\\right\\rfloor = ${n}$$`];
    s.push(`<p class="mlstep">1. Rappel :</p>$$\\lfloor X\\rfloor = \\cV n\\iff\\cV n\\leq X\\lt\\cV n + 1\\qquad(\\cV n\\in\\mathbb Z)$$`);
    s.push(`<p class="mlstep">2. Avec $X = ${X}$ et $\\cV n = ${n}$ :</p>$$${n}\\leq ${X}\\lt ${n + 1}$$`);
    s.push(`<p class="mlstep">3. On retranche $${fpar(b)}$ :</p>$$${n - b}\\leq ${ax}\\lt ${n + 1 - b}$$`);
    if (a > 0) {
      s.push(`<p class="mlstep">4. On divise par $${a} > 0$, le sens ne change pas :</p>$$${ftex(P)}\\leq x\\lt ${ftex(Q)}$$`);
      s.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{\\mathcal S = \\left[${ftex(P)},\\ ${ftex(Q)}\\right[}$$<p class="mlnote">Contrôle : en $x = ${ftex(P)}$, on trouve $${X} = ${n}$ et $\\lfloor${n}\\rfloor = ${n}$.</p>`);
    } else {
      s.push(`<p class="mlstep">4. On divise par $${a} \\lt 0$ : <b>on retourne</b> les inégalités, et la stricte change de côté :</p>$$${ftex(Q)}\\lt x\\leq ${ftex(P)}$$`);
      s.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{\\mathcal S = \\left]${ftex(Q)},\\ ${ftex(P)}\\right]}$$<p class="mlnote">Contrôle : en $x = ${ftex(P)}$, on trouve $${X} = ${n}$ et $\\lfloor${n}\\rfloor = ${n}$.</p>`);
    }
    return s;
  };
  stepLab(host, "Résoudre une équation avec une partie entière", gen, build);
}
/* Nombres réels : la caractérisation de la borne supérieure */
function mlSupEps(host) {
  const F = [
    { t: "1 - \\frac1n", f: n => 1 - 1 / n, n0: 1, M: 1, Mt: "1", max: false },
    { t: "\\frac{2n + 1}{n + 2}", f: n => (2 * n + 1) / (n + 2), n0: 0, M: 2, Mt: "2", max: false },
    { t: "\\frac{n^2}{n^2 + 1}", f: n => n * n / (n * n + 1), n0: 0, M: 1, Mt: "1", max: false },
    { t: "1 + \\frac{(-1)^n}n", f: n => 1 + (-1) ** n / n, n0: 1, M: 1.5, Mt: "\\frac32", max: true }
  ], EPS = [0.5, 0.3, 0.2, 0.1, 0.05, 0.02, 0.01, 0.001];
  let fi = 0, ei = 2;
  const draw = () => {
    const g = F[fi], e = EPS[ei], N1 = 30, xs = [];
    for (let n = g.n0; n <= N1; n++) xs.push([n, g.f(n)]);
    let N = g.n0; while (!(g.f(N) > g.M - e)) N++;
    const lo = Math.min(...xs.map(p => p[1]), g.M - e) - 0.1, hi = g.M + 0.15, W = 520, H = 240;
    const X = n => 40 + (n - g.n0) / (N1 - g.n0) * (W - 60), Y = y => H - 25 - (y - lo) / (hi - lo) * (H - 45);
    const svg = `<svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Termes de la suite et bande de largeur epsilon"><rect x="40" y="${Y(g.M)}" width="${W - 60}" height="${Y(g.M - e) - Y(g.M)}" fill="rgba(194,124,0,.16)"/><line x1="40" x2="${W - 20}" y1="${Y(g.M)}" y2="${Y(g.M)}" stroke="#D4503B" stroke-width="2"/><line x1="40" x2="${W - 20}" y1="${Y(g.M - e)}" y2="${Y(g.M - e)}" stroke="#C27C00" stroke-dasharray="5 4"/>${xs.map(([n, y]) => `<circle cx="${X(n).toFixed(1)}" cy="${Y(y).toFixed(1)}" r="${n === N ? 5.5 : 3.5}" fill="${y > g.M - e ? "#C27C00" : "#2B5BD7"}"${n === N ? ` stroke="#1F8A5B" stroke-width="2.5"` : ""}/>`).join("")}<text x="${W - 22}" y="${Y(g.M) - 6}" class="tx" text-anchor="end">M</text><text x="${W - 22}" y="${Y(g.M - e) + 14}" class="tx" text-anchor="end">M − ε</text><text x="40" y="${H - 8}" class="tx">n = ${g.n0}</text><text x="${W - 20}" y="${H - 8}" class="tx" text-anchor="end">n = ${N1}</text></svg>`;
    host.innerHTML = `<p class="mlt">Aucun nombre plus petit que $M$ ne majore $A$</p><div class="rmctl"><div class="mlseg">${F.map((h, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${h.t}$</button>`).join("")}</div><label class="rmn">$\\varepsilon = ${e}$ <input type="range" min="0" max="${EPS.length - 1}" value="${ei}" data-e aria-label="Valeur de epsilon"></label></div>${svg}<p class="mlcalc">$$\\cB A = \\Big\\{${g.t}\\Big\\},\\qquad\\cR{\\sup A = ${g.Mt}}${g.max ? "\\ \\text{(atteint : max)}" : "\\ \\text{(non atteint)}"}$$</p><p class="mlnote">Dans la bande orange, les éléments dépassent $\\cR M - \\cO\\varepsilon$. Le premier est au rang $\\cV n = ${N}$ : $\\cB{a_{${N}}} \\approx ${g.f(N).toFixed(4)} > ${(g.M - e).toFixed(4)}$${N > N1 ? ", hors du dessin" : " (cerclé de vert)"}. ${g.max ? "Le max est atteint : le même rang convient pour tout $\\varepsilon$." : "Plus $\\varepsilon$ est petit, plus ce rang recule, mais il existe toujours."}</p>`;
    $$("[data-f]", host).forEach(b => b.addEventListener("click", () => { fi = +b.dataset.f; draw(); }));
    $("[data-e]", host).addEventListener("input", ev => { ei = +ev.target.value; draw(); $("[data-e]", host).focus(); });
    typeset(host);
  };
  draw();
}
const QREEL = [
  ["$\\lfloor-3{,}2\\rfloor = -3$.", false, "Faux : $\\lfloor-3{,}2\\rfloor = -4$, car $-4\\leq-3{,}2\\lt-3$."],
  ["Pour tous réels $x, y$ : $\\lfloor x + y\\rfloor = \\lfloor x\\rfloor + \\lfloor y\\rfloor$.", false, "Faux : $x = y = 0{,}5$ donne $1\\neq0$. C'est vrai si $y$ est un entier."],
  ["$|x - 3|\\leq2\\iff x\\in[1, 5]$.", true, "Vrai : $-2\\leq x - 3\\leq2\\iff1\\leq x\\leq5$."],
  ["Toute partie non vide et majorée de $\\mathbb R$ a un maximum.", false, "Faux : elle a une <b>borne supérieure</b>, pas forcément un max. $[0, 1[$ n'a pas de max."],
  ["$\\sup\\{1 - \\frac1n,\\ n\\geq1\\} = 1$.", true, "Vrai : $1$ majore, et $1 - \\frac1n\\to1$ (caractérisation séquentielle)."],
  ["Si $a \\lt 2$ pour tout $a\\in A$, alors $\\sup A \\lt 2$.", false, "Faux : on obtient seulement $\\sup A\\leq2$. Exemple : $A = [0, 2[$, $\\sup A = 2$."],
  ["$|x + y| = |x| + |y|$ si et seulement si $xy\\geq0$.", true, "Vrai : c'est le cas d'égalité de l'inégalité triangulaire."],
  ["Entre deux réels distincts, il y a un rationnel et un irrationnel.", true, "Vrai : $\\mathbb Q$ et $\\mathbb R\\setminus\\mathbb Q$ sont denses dans $\\mathbb R$."],
  ["$\\sqrt{x^2} = x$ pour tout réel $x$.", false, "Faux : $\\sqrt{x^2} = |x|$. Pour $x = -2$, $\\sqrt4 = 2\\neq-2$."],
  ["$\\{x\\in\\mathbb Q,\\ x^2\\lt2\\}$ a une borne supérieure dans $\\mathbb Q$.", false, "Faux : dans $\\mathbb R$ c'est $\\sqrt2$, qui n'est pas rationnel."]
];
/* Suites : u_{n+1} = f(u_n), escalier ou escargot */
function mlCobweb(host) {
  const F = [
    { t: "\\sqrt{2 + x}", f: x => Math.sqrt(2 + x), r: [0, 3], u: [0, 3, 1], c: "$[0, 2]$ est stable, $f$ croît : la suite est monotone et tend vers le point fixe $2$." },
    { t: "x - x^2", f: x => x - x * x, r: [0, 1], u: [0, 1, 0.8], c: "$f(x) - x = -x^2\\leq0$ : la suite décroît vers le point fixe $0$." },
    { t: "\\frac{x^2 + 2}3", f: x => (x * x + 2) / 3, r: [0, 2.6], u: [0, 2.4, 0.5], c: "Points fixes $1$ et $2$. Si $u_0 \\lt 2$, la suite tend vers $1$. Si $u_0 > 2$, elle part vers $+\\infty$ : le point fixe $2$ repousse." },
    { t: "\\cos x", f: Math.cos, r: [0, 1.6], u: [0, 1.5, 1.2], c: "$f$ décroît : la suite n'est pas monotone, elle tourne autour du point fixe. $(u_{2n})$ et $(u_{2n+1})$ sont monotones de sens contraires." },
    { t: "1 + \\frac1x", f: x => 1 + 1 / x, r: [0.4, 3], u: [0.5, 3, 2.5], c: "$f$ décroît sur $]0, +\\infty[$ : escargot autour de $\\frac{1 + \\sqrt5}2\\approx1{,}618$." }
  ];
  let fi = 0, u0 = F[0].u[2];
  const draw = () => {
    const g = F[fi], [a, b] = g.r, us = [u0];
    for (let k = 0; k < 12; k++) us.push(g.f(us[k]));
    const extra = (X, Y) => { let d = `M${X(us[0]).toFixed(1)},${Y(a).toFixed(1)}L${X(us[0]).toFixed(1)},${Y(us[1]).toFixed(1)}`; for (let k = 1; k < 12; k++) { if (!isFinite(us[k + 1]) || Math.abs(us[k]) > 50) break; d += `L${X(us[k]).toFixed(1)},${Y(us[k]).toFixed(1)}L${X(us[k]).toFixed(1)},${Y(us[k + 1]).toFixed(1)}`; } return `<path d="${d}" fill="none" stroke="#D4503B" stroke-width="1.6"/><circle cx="${X(us[0]).toFixed(1)}" cy="${Y(a).toFixed(1)}" r="4" fill="#1F8A5B"/>`; };
    const svg = plotSvg([{ f: x => x, c: "#8a8fa0", w: 1.2, d: "5 4" }, { f: g.f, c: "#2B5BD7", w: 2.5 }], a, b, a, b, extra);
    const fmt = v => Math.abs(v) > 1e4 ? "\\text{très grand}" : v.toFixed(4).replace(".", "{,}");
    host.innerHTML = `<p class="mlt">Suite récurrente $u_{n+1} = f(u_n)$</p><div class="rmctl"><div class="mlseg">${F.map((h, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${h.t}$</button>`).join("")}</div><label class="rmn">$u_0 = ${u0.toFixed(2)}$ <input type="range" min="${g.u[0]}" max="${g.u[1]}" step="0.02" value="${u0}" data-u aria-label="Premier terme"></label></div>${svg}<p class="mlcalc">$$${us.slice(0, 6).map((v, k) => `u_{${k}} = ${fmt(v)}`).join(",\\quad ")}$$</p><p class="mlnote">En bleu $y = f(x)$, en pointillé $y = x$. On part de $u_0$ (point vert), on monte à la courbe, on revient à la diagonale, et ainsi de suite. ${g.c}</p>`;
    $$("[data-f]", host).forEach(btn => btn.addEventListener("click", () => { fi = +btn.dataset.f; u0 = F[fi].u[2]; draw(); }));
    $("[data-u]", host).addEventListener("input", ev => { u0 = +ev.target.value; draw(); $("[data-u]", host).focus(); });
    typeset(host);
  };
  draw();
}
const apow = a => a.d === 1 && a.n > 0 ? `${a.n}^n` : `\\left(${ftex(a)}\\right)^n`;
const ctp = (c, b) => { c = typeof c === "number" ? Fr(c) : c; if (!c.n) return ""; if (!b) return ftex(c); return c.n === c.d ? b : c.n === -c.d ? "-" + b : (/^[a-z]/i.test(b) ? `${ftex(c)}${b}` : `${ftex(c)}\\times ${b}`); };
const csum = ts => ts.filter(Boolean).reduce((s, t) => !s ? t : t[0] === "-" ? `${s} - ${t.slice(1)}` : `${s} + ${t}`, "") || "0";
/* Suites : arithmético-géométrique */
function mlAriGeo(host) {
  const gen = () => { const L = [Fr(2), Fr(3), Fr(-2), Fr(-3), Fr(1, 2), Fr(-1, 2)]; let b = 0; while (!b) b = rnd(-6, 6); return { a: L[rnd(0, 5)], b, u0: rnd(-4, 6) }; };
  const build = ({ a, b, u0 }) => {
    const om = fadd(Fr(1), Fr(-a.n, a.d)), l = fdiv(Fr(b), om), v0 = fadd(Fr(u0), Fr(-l.n, l.d)), s = [];
    s.push(`$$u_0 = ${u0},\\qquad u_{n+1} = ${fsum([[a, "u_n"], [b, ""]])}$$`);
    s.push(`<p class="mlstep">1. Rappel : on cherche le point fixe $\\ell = a\\ell + b$, puis $v_n = u_n - \\ell$ est géométrique de raison $a$.</p>`);
    s.push(`<p class="mlstep">2. Le point fixe :</p>$$\\ell = ${fsum([[a, "\\ell"], [b, ""]])}\\iff ${fsum([[om, "\\ell"]])} = ${b}\\iff\\cR{\\ell = ${ftex(l)}}$$`);
    s.push(`<p class="mlstep">3. On soustrait $\\ell = ${fsum([[a, "\\ell"], [b, ""]])}$ à la relation : les $${b}$ disparaissent.</p>$$u_{n+1} - \\ell = ${fsum([[a, "(u_n - \\ell)"]])},\\qquad v_{n+1} = ${fsum([[a, "v_n"]])}$$`);
    s.push(`<p class="mlstep">4. $v_0 = u_0 - \\ell = ${u0} - ${fpar(l)} = ${ftex(v0)}$, donc :</p>$$v_n = ${csum([ctp(v0, apow(a))])}$$`);
    const lim = v0.n === 0 ? `la suite est constante, égale à $${ftex(l)}$` : Math.abs(a.n) < a.d ? `$|a| \\lt 1$, donc $${apow(a)}\\to0$ et $\\cG{u_n\\to${ftex(l)}}$` : a.n > 0 ? `$a > 1$ et $v_0 ${v0.n > 0 ? ">" : "\\lt"} 0$, donc $\\cG{u_n\\to${v0.n > 0 ? "+" : "-"}\\infty}$` : `$a \\lt -1$ : $v_n$ change de signe et $|v_n|\\to+\\infty$, $\\cG{(u_n)\\ \\text{n'a pas de limite}}$`;
    s.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{u_n = ${v0.n === 0 ? ftex(l) : csum([ctp(l, ""), ctp(v0, apow(a))])}}$$<p class="mlnote">Limite : ${lim}.</p>`);
    return s;
  };
  stepLab(host, "Suite arithmético-géométrique", gen, build);
}
/* Suites : récurrence linéaire d'ordre 2 */
function mlRecur2(host) {
  const pw = r => r === 1 ? "" : r > 0 ? `${r}^n` : `(${r})^n`;
  const gen = () => { const R = [-3, -2, -1, 1, 2, 3]; if (rnd(0, 2)) { const r1 = R[rnd(0, 5)]; let r2 = r1; while (r2 === r1) r2 = R[rnd(0, 5)]; return { r1: Math.max(r1, r2), r2: Math.min(r1, r2), u0: rnd(-3, 4), u1: rnd(-3, 5) }; } const r = R[rnd(0, 5)]; return { r1: r, r2: r, u0: rnd(-3, 4), u1: rnd(-3, 5) }; };
  const build = ({ r1, r2, u0, u1 }) => {
    const a = r1 + r2, b = -r1 * r2, D = a * a + 4 * b, s = [];
    s.push(`$$u_0 = ${u0},\\quad u_1 = ${u1},\\qquad u_{n+2} = ${fsum([[a, "u_{n+1}"], [b, "u_n"]])}$$`);
    s.push(`<p class="mlstep">1. Rappel : équation caractéristique $r^2 = ar + b$. $\\Delta > 0$ : $u_n = A r_1^n + B r_2^n$. $\\Delta = 0$ : $u_n = (A + Bn) r_0^n$.</p>`);
    s.push(`<p class="mlstep">2. L'équation caractéristique :</p>$$${fsum([[1, "r^2"], [-a, "r"], [-b, ""]])} = 0,\\qquad\\Delta = ${fpar(a)}^2 + 4\\times${fpar(b)} = ${D}$$<p class="mlnote">${D ? `Deux racines : $\\cV{r_1 = ${r1}}$ et $\\cV{r_2 = ${r2}}$.` : `Racine double : $\\cV{r_0 = \\frac{${a}}2 = ${r1}}$.`}</p>`);
    let res, chk;
    if (D) {
      const B = Fr(u1 - r1 * u0, r2 - r1), A = fadd(Fr(u0), Fr(-B.n, B.d));
      s.push(`<p class="mlstep">3. Forme générale : $u_n = A\\,${pw(r1) || "1^n"} + B\\,${pw(r2) || "1^n"}$. Avec $n = 0$ et $n = 1$ :</p>$$\\left\\{\\begin{aligned}A + B &= ${u0}\\\\${fsum([[r1, "A"], [r2, "B"]])} &= ${u1}\\end{aligned}\\right.\\iff\\left\\{\\begin{aligned}A &= ${ftex(A)}\\\\B &= ${ftex(B)}\\end{aligned}\\right.$$<p class="mlnote">On remplace $A = ${u0} - B$ dans la 2<sup>e</sup> ligne : $(${r2} - ${fpar(r1)})B = ${u1} - ${fpar(r1)}\\times${fpar(u0)}$.</p>`);
      res = csum([ctp(A, pw(r1)), ctp(B, pw(r2))]); chk = fadd(fmul(A, Fr(r1 * r1)), fmul(B, Fr(r2 * r2)));
    } else {
      const r = r1, B = fadd(Fr(u1, r), Fr(-u0)), A = Fr(u0);
      s.push(`<p class="mlstep">3. Forme générale : $u_n = (A + Bn)\\,${pw(r) || "1^n"}$. Avec $n = 0$ : $A = ${u0}$. Avec $n = 1$ :</p>$$(A + B)\\times${fpar(r)} = ${u1}\\iff A + B = ${ftex(Fr(u1, r))}\\iff B = ${ftex(B)}$$`);
      res = `${B.n === 0 ? ftex(A) : `\\left(${fsum([[A, ""], [B, "n"]])}\\right)`}${pw(r) ? "\\times" + pw(r) : ""}`; chk = fmul(fadd(A, fmul(B, Fr(2))), Fr(r * r));
    }
    s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{u_n = ${res}}$$<p class="mlnote">Contrôle : la relation donne $u_2 = ${a * u1 + b * u0}$, la formule donne $${ftex(chk)}$.</p>`);
    return s;
  };
  stepLab(host, "Récurrence linéaire d'ordre 2", gen, build);
}
const QSUITE = [
  ["Une suite bornée converge.", false, "Faux : $(-1)^n$ est bornée et n'a pas de limite."],
  ["Une suite convergente est bornée.", true, "Vrai : à partir d'un rang, $|u_n - \\ell|\\leq1$, et il reste un nombre fini de termes."],
  ["Si $u_n \\lt 1$ pour tout $n$ et $u_n\\to\\ell$, alors $\\ell \\lt 1$.", false, "Faux : $\\ell\\leq1$ seulement. Exemple : $u_n = 1 - \\frac1n$."],
  ["Une suite croissante et majorée converge.", true, "Vrai : théorème de la limite monotone, vers $\\sup u_n$."],
  ["Si $f$ est croissante, la suite $u_{n+1} = f(u_n)$ est croissante.", false, "Faux : elle est monotone, et son sens dépend du signe de $u_1 - u_0$."],
  ["$\\big(1 + \\frac1n\\big)^n\\to1$.", false, "Faux : forme $1^\\infty$, la limite est $e$."],
  ["Si $u_{2n}\\to\\ell$ et $u_{2n+1}\\to\\ell$, alors $u_n\\to\\ell$.", true, "Vrai : pairs et impairs recouvrent tous les indices."],
  ["$\\frac{n^{10}}{2^n}\\to0$.", true, "Vrai : croissances comparées, $n^\\beta\\ll q^n$ pour $q > 1$."],
  ["Pour $u_{n+2} = 4u_{n+1} - 4u_n$, on a $u_n = A2^n + B2^n$.", false, "Faux : racine double $2$, la forme est $(A + Bn)2^n$."],
  ["Deux suites adjacentes ont la même limite.", true, "Vrai, et la limite est entre les deux : $u_n\\leq\\ell\\leq v_n$."]
];
/* Dénombrement : quel modèle ? */
function mlModele(host) {
  let ord = true, rep = true, n = 4, p = 2;
  const L = "abcdef";
  const all = () => { const out = []; const go = (pre, start) => { if (pre.length === p) { out.push(pre.slice()); return; } for (let i = (ord ? 0 : start); i < n; i++) { if (!rep && pre.includes(i)) continue; pre.push(i); go(pre, rep ? i : i + 1); pre.pop(); } }; go([], 0); return out; };
  const draw = () => {
    const E = all(), shown = E.slice(0, 60).map(t => `<span style="white-space:nowrap">${ord ? `(${t.map(i => L[i]).join(", ")})` : `{${t.map(i => L[i]).join(", ")}}`}</span>`).join("&ensp; ");
    const f = ord && rep ? [`\\cV n^{\\cV p} = ${n}^{${p}}`, "$p$-listes, tirages successifs avec remise"] : ord ? [`\\frac{n!}{(n - p)!} = ${Array.from({ length: p }, (_, i) => n - i).join("\\times")}`, "arrangements, tirages successifs sans remise"] : !rep ? [`\\binom{${n}}{${p}}`, "combinaisons, tirage simultané"] : [`\\binom{n + p - 1}{p} = \\binom{${n + p - 1}}{${p}}`, "combinaisons avec répétition <span class=\"hp\">hors programme</span>"];
    host.innerHTML = `<p class="mlt">Ordre, répétitions : quel modèle ?</p><div class="rmctl"><div class="mlseg"><button type="button" data-o="1" aria-pressed="${ord}">ordre compte</button><button type="button" data-o="0" aria-pressed="${!ord}">pas d'ordre</button></div><div class="mlseg"><button type="button" data-r="1" aria-pressed="${rep}">avec répétition</button><button type="button" data-r="0" aria-pressed="${!rep}">sans répétition</button></div></div><div class="rmctl"><label class="rmn">$n = ${n}$ <input type="range" min="1" max="6" value="${n}" data-n aria-label="n"></label><label class="rmn">$p = ${p}$ <input type="range" min="1" max="4" value="${p}" data-p aria-label="p"></label></div><p class="mlcalc">$$${f[0]} = \\cG{${E.length}}$$</p><p class="mlnote">${f[1]}. On choisit $p = ${p}$ éléments dans $\\{${L.slice(0, n).split("").join(", ")}\\}$. ${E.length > 60 ? "Les 60 premiers :" : "Tous les cas :"}</p><p class="mlnote" style="font-family:var(--f-mono,monospace)">${shown || "aucun (on ne peut pas choisir $p > n$ éléments distincts)"}${E.length > 60 ? " …" : ""}</p>`;
    $$("[data-o]", host).forEach(btn => btn.addEventListener("click", () => { ord = btn.dataset.o === "1"; draw(); }));
    $$("[data-r]", host).forEach(btn => btn.addEventListener("click", () => { rep = btn.dataset.r === "1"; draw(); }));
    $("[data-n]", host).addEventListener("input", ev => { n = +ev.target.value; draw(); $("[data-n]", host).focus(); });
    $("[data-p]", host).addEventListener("input", ev => { p = +ev.target.value; draw(); $("[data-p]", host).focus(); });
    typeset(host);
  };
  draw();
}
const bnm = (n, k) => { if (k < 0 || k > n) return 0; let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
const bnTex = (n, k) => k === 0 ? `\\binom{${n}}{0} = 1` : k === 1 ? `\\binom{${n}}{1} = ${n}` : `\\binom{${n}}{${k}} = \\frac{${Array.from({ length: k }, (_, i) => n - i).join("\\times")}}{${k}!} = ${bnm(n, k).toLocaleString("fr-FR")}`;
/* Dénombrement : mains de cartes */
function mlDenEx(host) {
  const gen = () => { const p = rnd(3, 5); return rnd(0, 2) ? { p, k: rnd(0, Math.min(p, 3)), au: false } : { p, au: true }; };
  const build = ({ p, k, au }) => {
    const s = [`<p class="mlnote">Un jeu de $32$ cartes contient $8$ cœurs. On tire $${p}$ cartes simultanément. Combien de mains contiennent ${au ? "<b>au moins un</b> cœur" : `<b>exactement</b> $${k}$ cœur${k > 1 ? "s" : ""}`} ?</p>`];
    if (au) {
      s.push(`<p class="mlstep">1. Rappel : une main est une partie, $\\binom np$. « Au moins un » : total moins « aucun ».</p>`);
      s.push(`<p class="mlstep">2. Toutes les mains :</p>$$${bnTex(32, p)}$$`);
      s.push(`<p class="mlstep">3. Aucun cœur : les $${p}$ cartes parmi les $24$ autres :</p>$$\\cR{${bnTex(24, p)}}$$`);
      s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{${bnm(32, p).toLocaleString("fr-FR")} - ${bnm(24, p).toLocaleString("fr-FR")} = ${(bnm(32, p) - bnm(24, p)).toLocaleString("fr-FR")}}$$`);
    } else {
      s.push(`<p class="mlstep">1. Rappel : une main est une partie, $\\binom np$. Choix successifs : on multiplie.</p>`);
      s.push(`<p class="mlstep">2. On choisit $${k}$ cœur${k > 1 ? "s" : ""} parmi les $8$ :</p>$$\\cO{${bnTex(8, k)}}$$`);
      s.push(`<p class="mlstep">3. On choisit les $${p - k}$ autres cartes parmi les $24$ qui ne sont pas des cœurs :</p>$$\\cO{${bnTex(24, p - k)}}$$`);
      s.push(`<p class="mlstep">4. Conclusion (principe multiplicatif) :</p>$$\\cG{${bnm(8, k)}\\times${bnm(24, p - k).toLocaleString("fr-FR")} = ${(bnm(8, k) * bnm(24, p - k)).toLocaleString("fr-FR")}}$$<p class="mlnote">Sur $${bnm(32, p).toLocaleString("fr-FR")}$ mains en tout.</p>`);
    }
    return s;
  };
  stepLab(host, "Compter des mains de cartes", gen, build);
}
const QDEN = [
  ["Il y a $n^p$ applications d'un ensemble à $n$ éléments dans un ensemble à $p$ éléments.", false, "Faux : c'est $p^n$. Chacun des $n$ éléments de départ a $p$ images possibles."],
  ["Le nombre de parties d'un ensemble à $5$ éléments est $32$.", true, "Vrai : $2^5 = 32$."],
  ["Un tirage simultané de $3$ boules parmi $10$ se compte avec $10\\times9\\times8$.", false, "Faux : l'ordre ne compte pas, c'est $\\binom{10}3 = \\frac{720}{6} = 120$."],
  ["$|A\\cup B| = |A| + |B|$ pour tous ensembles finis $A, B$.", false, "Faux : seulement si $A\\cap B = \\varnothing$. Sinon on retire $|A\\cap B|$."],
  ["Il y a $60$ anagrammes de ALLER.", true, "Vrai : $5$ lettres dont deux L, donc $\\frac{5!}{2!} = \\frac{120}2 = 60$."],
  ["Entre deux ensembles finis de même cardinal, une injection est une bijection.", true, "Vrai : injective $\\iff$ surjective $\\iff$ bijective."],
  ["$\\binom{n}{p} = \\binom{n}{n - p}$.", true, "Vrai : choisir les $p$ éléments pris, c'est choisir les $n - p$ laissés."],
  ["Parmi $367$ personnes, deux ont le même jour d'anniversaire.", true, "Vrai : principe des tiroirs, $367 > 366$."]
];
/* Intégrales impropres : Riemann en 0 et en +∞ */
function mlRiemRef(host) {
  let al = 1.5;
  const I1 = (X, a) => Math.abs(a - 1) < 1e-9 ? Math.log(X) : (X ** (1 - a) - 1) / (1 - a), I0 = (e, a) => Math.abs(a - 1) < 1e-9 ? -Math.log(e) : (1 - e ** (1 - a)) / (1 - a);
  const fm = v => !isFinite(v) || v > 1e6 ? "\\text{énorme}" : v.toFixed(3).replace(".", "{,}");
  const draw = () => {
    const a = al, f = t => t > 0 ? t ** -a : NaN;
    const extra = (X, Y) => { let d1 = `M${X(1)},${Y(0)}`, d0 = `M${X(0.04)},${Y(0)}`; for (let i = 0; i <= 80; i++) { const t = 1 + 5 * i / 80; d1 += `L${X(t).toFixed(1)},${Y(Math.min(f(t), 4.5)).toFixed(1)}`; const s = 0.04 + 0.96 * i / 80; d0 += `L${X(s).toFixed(1)},${Y(Math.min(f(s), 4.5)).toFixed(1)}`; } return `<path d="${d1}L${X(6)},${Y(0)}Z" fill="rgba(43,91,215,.15)"/><path d="${d0}L${X(1)},${Y(0)}Z" fill="rgba(194,124,0,.18)"/>`; };
    const Xs = [10, 100, 1e4, 1e6], Es = [0.1, 0.01, 1e-4, 1e-6], cvI = a > 1, cv0 = a < 1;
    host.innerHTML = `<p class="mlt">Les intégrales de Riemann $\\int\\frac{dt}{t^\\alpha}$</p><div class="rmctl"><label class="rmn">$\\alpha = ${a.toFixed(1).replace(".", "{,}")}$ <input type="range" min="0.2" max="2.5" step="0.1" value="${a}" data-a aria-label="alpha"></label></div>${plotSvg([{ f, c: "#2B5BD7", w: 2.5 }], 0, 6, 0, 4, extra)}<table class="mtab"><tr><th>$X$</th>${Xs.map(x => `<td>$10^{${Math.log10(x)}}$</td>`).join("")}<th>bilan en $+\\infty$</th></tr><tr><th>$\\int_1^X$</th>${Xs.map(x => `<td>$${fm(I1(x, a))}$</td>`).join("")}<td>${cvI ? `$\\cG{\\text{CV vers}\\ ${fm(1 / (a - 1))}}$` : "$\\cR{\\text{DV}}$"}</td></tr><tr><th>$\\varepsilon$</th>${Es.map(x => `<td>$10^{${Math.log10(x)}}$</td>`).join("")}<th>bilan en $0$</th></tr><tr><th>$\\int_\\varepsilon^1$</th>${Es.map(x => `<td>$${fm(I0(x, a))}$</td>`).join("")}<td>${cv0 ? `$\\cG{\\text{CV vers}\\ ${fm(1 / (1 - a))}}$` : "$\\cR{\\text{DV}}$"}</td></tr></table><p class="mlnote">En bleu l'aire sur $[1, +\\infty[$ : finie si et seulement si $\\alpha > 1$. En orange l'aire sur $]0, 1]$ : finie si et seulement si $\\alpha \\lt 1$. Pour $\\alpha = 1$, les deux sont infinies (lentement : $\\ln$).</p>`;
    $("[data-a]", host).addEventListener("input", ev => { al = +ev.target.value; draw(); $("[data-a]", host).focus(); });
    typeset(host);
  };
  draw();
}
const QIMP = [
  ["$\\int_1^{+\\infty}\\frac{dt}{\\sqrt t}$ converge.", false, "Faux : $\\alpha = \\frac12\\leq1$ en $+\\infty$, elle diverge."],
  ["$\\int_0^1\\frac{dt}{\\sqrt t}$ converge.", true, "Vrai : $\\alpha = \\frac12 \\lt 1$ en $0$, elle vaut $2$."],
  ["Si $f(t)\\to0$ en $+\\infty$, alors $\\int_1^{+\\infty}f$ converge.", false, "Faux : $\\frac1t\\to0$ et $\\int_1^{+\\infty}\\frac{dt}t$ diverge."],
  ["$\\int_{-\\infty}^{+\\infty}t\\,dt = 0$ car la fonction est impaire.", false, "Faux : chaque morceau diverge, donc l'intégrale diverge."],
  ["Si $|f|$ est intégrable, alors $\\int f$ converge.", true, "Vrai : convergence absolue $\\Rightarrow$ convergence."],
  ["$\\int_1^{+\\infty}\\frac{\\sin t}t\\,dt$ est absolument convergente.", false, "Faux : elle converge (IPP), mais $\\int\\frac{|\\sin t|}t$ diverge."],
  ["$\\int_0^1\\ln t\\,dt = -1$.", true, "Vrai : $[t\\ln t - t]_x^1 = -1 - x\\ln x + x\\to-1$."],
  ["Pour $f$ positive décroissante, $\\sum f(n)$ et $\\int_1^{+\\infty}f$ ont même nature.", true, "Vrai : comparaison série-intégrale."]
];
const egcd = (a, b) => { let [r0, r1, u0, u1, v0, v1] = [a, b, 1, 0, 0, 1]; const rows = [[r0, "", u0, v0], [r1, "", u1, v1]]; while (r1) { const q = Math.floor(r0 / r1); [r0, r1] = [r1, r0 - q * r1]; [u0, u1] = [u1, u0 - q * u1]; [v0, v1] = [v1, v0 - q * v1]; rows[rows.length - 2][1] = q; rows.push([r1, "", u1, v1]); } return { d: r0, u: u0, v: v0, rows }; };
const gcdi = (a, b) => b ? gcdi(b, a % b) : Math.abs(a);
/* Arithmétique : Euclide étendu */
function mlEuclZ(host) {
  const gen = () => { const D = [1, 1, 2, 3, 6, 7, 12]; const d = D[rnd(0, 6)]; let a, b; do { a = rnd(20, 160); b = rnd(8, a - 1); } while (gcdi(a, b) !== 1); return { a: a * d, b: b * d }; };
  const build = ({ a, b }) => {
    const E = egcd(a, b), s = [`$$a = ${a},\\qquad b = ${b}$$`];
    s.push(`<p class="mlstep">1. Rappel : $a = bq + r\\Rightarrow a\\wedge b = b\\wedge r$, le PGCD est le dernier reste non nul. Pour Bézout, chaque reste s'écrit $r_k = au_k + bv_k$, avec la même relation $x_{k+1} = x_{k-1} - q_kx_k$ sur $r$, $u$ et $v$.</p>`);
    const divs = []; let x = a, y = b; while (y) { const q = Math.floor(x / y), r = x - q * y; divs.push(`${x} &= ${q}\\times${y} + ${r === 0 ? "0" : `\\cR{${r}}`}`); [x, y] = [y, r]; }
    s.push(`<p class="mlstep">2. Les divisions successives :</p>$$\\begin{aligned}${divs.join("\\\\")}\\end{aligned}$$`);
    s.push(`<p class="mlstep">3. Le dernier reste non nul : $\\cR{a\\wedge b = ${E.d}}$.</p>`);
    const rows = E.rows.slice(0, -1);
    s.push(`<p class="mlstep">4. Le tableau (chaque ligne vérifie $r = ${a}u + ${b}v$) :</p>$$\\begin{array}{c|c|c|c}r_k&q_k&u_k&v_k\\\\\\hline ${rows.map(r => `${r[0]}&${r[1]}&${r[2]}&${r[3]}`).join("\\\\")}\\end{array}$$`);
    s.push(`<p class="mlstep">5. Conclusion : on lit la ligne du PGCD.</p>$$\\cG{${a}\\times${fpar(E.u)} + ${b}\\times${fpar(E.v)} = ${E.d}}$$<p class="mlnote">Contrôle : $${a * E.u} + ${fpar(b * E.v)} = ${E.d}$.</p>`);
    return s;
  };
  stepLab(host, "Algorithme d'Euclide étendu", gen, build);
}
/* Arithmétique : ax + by = c */
function mlDioph(host) {
  const gen = () => { const D = [1, 2, 3, 4, 6]; const d = D[rnd(0, 4)]; let a, b; do { a = rnd(2, 15); b = rnd(2, 15); } while (gcdi(a, b) !== 1 || a === b); let c = 0; while (!c) c = rnd(-9, 12); const bad = d > 1 && !rnd(0, 3); return { a: a * d, b: b * d, c: bad ? c * d + 1 : c * d }; };
  const build = ({ a, b, c }) => {
    const d = gcdi(a, b), s = [`$$${a}x + ${b}y = ${c}$$`];
    s.push(`<p class="mlstep">1. Rappel : il y a des solutions $\\iff d = a\\wedge b$ divise $c$. Puis Bézout pour une solution, et Gauss pour toutes.</p>`);
    if (c % d) { s.push(`<p class="mlstep">2. Le PGCD : $${a}\\wedge${b} = ${d}$, et $${d}\\nmid${c}$.</p>`); s.push(`<p class="mlstep">3. Conclusion : $${d}$ divise le membre de gauche pour tous $x, y$ entiers, mais pas $${c}$ : $\\cG{\\mathcal S = \\varnothing}$.</p>`); return s; }
    const A = a / d, B = b / d, C = c / d, E = egcd(A, B), x0 = E.u * C, y0 = E.v * C;
    s.push(`<p class="mlstep">2. Le PGCD : $${a}\\wedge${b} = ${d}$ divise $${c}$.${d > 1 ? ` On divise par $${d}$ :` : ""}</p>${d > 1 ? `$$${A}x + ${B}y = ${C}$$` : ""}`);
    s.push(`<p class="mlstep">3. Bézout (Euclide étendu) : $${A}\\times${fpar(E.u)} + ${B}\\times${fpar(E.v)} = 1$. On multiplie par $${C}$ :</p>$$${A}\\times${fpar(x0)} + ${B}\\times${fpar(y0)} = ${C},\\qquad(x_0, y_0) = (${x0}, ${y0}).$$`);
    s.push(`<p class="mlstep">4. On soustrait les deux égalités :</p>$$${A}\\,(${csum(["x", ctp(-x0, "")])}) = -${B}\\,(${csum(["y", ctp(-y0, "")])})$$`);
    s.push(`<p class="mlstep">5. Gauss : $${B}$ divise $${A}\\,(x - x_0)$ et $${B}\\wedge${A} = 1$, donc $x = ${x0} + ${B}k$. On remplace : $y = ${y0} - ${A}k$.</p>`);
    s.push(`<p class="mlstep">6. Conclusion :</p>$$\\cG{\\mathcal S = \\{(${csum([ctp(x0, ""), ctp(B, "k")])},\\ ${csum([ctp(y0, ""), ctp(-A, "k")])}),\\ k\\in\\mathbb Z\\}}$$<p class="mlnote">Contrôle $k = 0$ : $${a}\\times${fpar(x0)} + ${b}\\times${fpar(y0)} = ${a * x0 + b * y0}$.</p>`);
    return s;
  };
  stepLab(host, "Résoudre $ax + by = c$ dans $\\mathbb Z^2$", gen, build);
}
/* Arithmétique : a^k mod n */
function mlPowMod(host) {
  const gen = () => { const N = [7, 9, 10, 11, 13]; const n = N[rnd(0, 4)]; let a; do { a = rnd(2, 3 * n); } while (gcdi(a, n) !== 1 || a % n === 1); return { a, n, k: rnd(40, 2030) }; };
  const build = ({ a, n, k }) => {
    const a0 = a % n, pw = [1]; let m = 0; do { m++; pw.push(pw[m - 1] * a0 % n); } while (pw[m] !== 1);
    const q = Math.floor(k / m), r = k % m, prem = [7, 11, 13].includes(n), s = [`$$\\text{Reste de}\\ ${a}^{${k}}\\ \\text{modulo}\\ ${n}$$`];
    s.push(`<p class="mlstep">1. Rappel : on cherche $m$ avec $a^m\\equiv1\\ [n]$, puis $k = mq + r$ donne $a^k = (a^m)^qa^r\\equiv a^r$.${prem ? ` Ici $${n}$ est premier : Fermat donne $a^{${n - 1}}\\equiv1$, et $m$ divise $${n - 1}$.` : ""}</p>`);
    if (a0 !== a) s.push(`<p class="mlstep">2. On réduit la base : $${a} = ${Math.floor(a / n)}\\times${n} + ${a0}$, donc $${a}\\equiv${a0}\\ [${n}]$.</p>`); else s.push(`<p class="mlstep">2. La base $${a}$ est déjà entre $0$ et $${n - 1}$.</p>`);
    s.push(`<p class="mlstep">3. Les puissances successives modulo $${n}$ :</p>$$${pw.slice(1).map((v, i) => `${a0}^{${i + 1}}\\equiv${i + 1 === m ? `\\cG{${v}}` : v}`).join(",\\quad ")}$$<p class="mlnote">Chaque ligne : on multiplie la précédente par $${a0}$ et on réduit. Donc $m = ${m}$.</p>`);
    s.push(`<p class="mlstep">4. On divise l'exposant par $${m}$ :</p>$$${k} = ${m}\\times${q} + ${r}$$`);
    s.push(`<p class="mlstep">5. Conclusion :</p>$$${a}^{${k}} = \\big(${a}^{${m}}\\big)^{${q}}\\times${a}^{${r}}\\equiv1\\times${a0}^{${r}}\\equiv\\cG{${pw[r]}}\\ [${n}]$$`);
    return s;
  };
  stepLab(host, "Calculer une puissance modulo $n$", gen, build);
}
const QARITH = [
  ["Le reste de la division euclidienne de $-7$ par $3$ est $-1$.", false, "Faux : le reste est entre $0$ et $2$. $-7 = 3\\times(-3) + 2$, le reste est $2$."],
  ["Si $6\\mid ab$, alors $6\\mid a$ ou $6\\mid b$.", false, "Faux : $6\\mid4\\times3$. Le lemme d'Euclide ne vaut que pour un premier."],
  ["$3u + 5v = 1$ a des solutions entières.", true, "Vrai : $3\\wedge5 = 1$ (Bézout), par exemple $3\\times2 + 5\\times(-1) = 1$."],
  ["Si $4u + 6v = 2$, alors $4\\wedge6 = 2$.", true, "Vrai ici, mais par chance : $4\\wedge6$ divise $2$ et divise $4$, donc vaut $1$ ou $2$, et $2\\mid4, 6$."],
  ["$2^{10}\\equiv1\\ [11]$.", true, "Vrai : Fermat, $11$ premier et $11\\nmid2$."],
  ["De $2x\\equiv2\\ [6]$ on déduit $x\\equiv1\\ [6]$.", false, "Faux : $x = 4$ marche aussi. $2\\wedge6\\neq1$, on ne peut pas simplifier."],
  ["$(a\\wedge b)(a\\vee b) = |ab|$.", true, "Vrai : exposants $\\min + \\max = $ somme."],
  ["$1$ est un nombre premier.", false, "Faux : un premier est $\\geq2$."]
];
/* Outils : racines carrées simplifiées */
const sqf = N => { let s = 1, m = N; for (let k = 2; k * k <= m; k++) while (m % (k * k) === 0) { m /= k * k; s *= k; } return { s, m }; };
const surd2 = (a, b, m) => { if (b < 0) { a = -a; b = -b; } const g = gcdi(Math.abs(a) || 1, b); a /= g; b /= g; const sg = a < 0 ? "-" : ""; a = Math.abs(a); const num = m === 1 ? `${a}` : a === 1 ? `\\sqrt{${m}}` : `${a}\\sqrt{${m}}`; return b === 1 ? sg + num : `${sg}\\frac{${num}}{${b}}`; };
const piTex2 = (m, d) => { if (!m) return "0"; const g = gcdi(Math.abs(m), d); m /= g; d /= g; const sg = m < 0 ? "-" : ""; m = Math.abs(m); const n = m === 1 ? "\\pi" : `${m}\\pi`; return d === 1 ? sg + n : `${sg}\\frac{${n}}{${d}}`; };
/* Fonctions usuelles : valeurs avec arcsin, arccos, arctan */
function mlArcVal(host) {
  const AR = { s: ["\\arcsin", "\\sin", "\\Big[-\\frac\\pi2, \\frac\\pi2\\Big]"], c: ["\\arccos", "\\cos", "[0, \\pi]"], t: ["\\arctan", "\\tan", "\\Big]-\\frac\\pi2, \\frac\\pi2\\Big["] };
  const gen = () => {
    if (rnd(0, 1)) { const a = "sct"[rnd(0, 2)]; let g; do { g = "sct"[rnd(0, 2)]; } while (g === a); const q = rnd(2, 7); let p; do { p = rnd(a === "t" ? -6 : -q + 1, a === "t" ? 6 : q - 1); } while (!p || gcdi(Math.abs(p), q) !== 1); return { k: 0, a, g, p, q }; }
    const a = "sct"[rnd(0, 2)]; let m; do { m = rnd(-11, 11); } while (a === "t" && ((m % 6) + 6) % 6 === 3); return { k: 1, a, m };
  };
  const build = e => {
    const s = [];
    if (e.k === 0) {
      const { a, g, p, q } = e, r = ftex(Fr(p, q)), [A, T, I] = AR[a], G = AR[g][1];
      s.push(`$$\\text{Calculer}\\ ${G}\\Big(${A}\\Big(${r}\\Big)\\Big)$$`);
      s.push(`<p class="mlstep">1. Rappel : $\\theta = ${A}\\,x\\iff ${T}\\theta = x\\ \\text{et}\\ \\theta\\in${I}$.</p>`);
      s.push(`<p class="mlstep">2. On pose $\\theta = ${A}\\big(${r}\\big)$ : $${T}\\theta = ${r}$ et $\\cR{\\theta\\in${I}}$.</p>`);
      let res, idt, sgn;
      if (a === "t") { const N = q * q + p * p, { s: sq, m } = sqf(N); idt = `$$\\cos^2\\theta = \\frac1{1 + \\tan^2\\theta} = \\frac1{1 + ${fpar(Fr(p * p, q * q))}} = \\frac{${q * q}}{${N}}$$`; sgn = `Sur $\\cR{]-\\frac\\pi2, \\frac\\pi2[}$, $\\cO{\\cos\\theta > 0}$ : $\\cos\\theta = \\frac{${q}}{\\sqrt{${N}}}$.`; res = g === "c" ? surd2(q, sq * m, m) : surd2(p, sq * m, m); if (g === "s") sgn += ` Puis $\\sin\\theta = \\tan\\theta\\cos\\theta = ${r}\\times\\frac{${q}}{\\sqrt{${N}}}$.`; }
      else { const N = q * q - p * p, { s: sq, m } = sqf(N), other = a === "s" ? "\\cos" : "\\sin"; idt = `$$${other}^2\\theta = 1 - ${T}^2\\theta = 1 - \\frac{${p * p}}{${q * q}} = \\frac{${N}}{${q * q}}$$`; sgn = `Sur $\\cR{${I}}$, $\\cO{${other}\\theta\\geq0}$ : $${other}\\theta = \\frac{\\sqrt{${N}}}{${q}}$.`;
        if ((a === "s" && g === "c") || (a === "c" && g === "s")) res = surd2(sq, q, m);
        else if (a === "s") { res = surd2(p, sq * m, m); sgn += ` Puis $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{${p}}{\\sqrt{${N}}}$.`; }
        else { res = surd2(sq, p, m); sgn += ` Puis $\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{\\sqrt{${N}}}{${p}}$.`; } }
      s.push(`<p class="mlstep">3. La relation entre $\\cos$ et $\\sin$ :</p>${idt}`);
      s.push(`<p class="mlstep">4. Le signe : ${sgn}</p>`);
      s.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{${G}\\Big(${A}\\Big(${r}\\Big)\\Big) = ${res}}$$`);
    } else {
      const { a, m } = e, [A, T, I] = AR[a], x = piTex2(m, 6);
      let t, why;
      if (a === "s") { let m1 = ((m % 12) + 18) % 12 - 6; why = m1 !== m ? `$${T}$ est $2\\pi$-périodique : $${T}\\big(${x}\\big) = ${T}\\big(${piTex2(m1, 6)}\\big)$. ` : ""; t = m1; if (m1 > 3) { t = 6 - m1; why += `Puis $\\sin(\\pi - a) = \\sin a$ : on prend $\\pi - ${piTex2(m1, 6)} = ${piTex2(t, 6)}$.`; } else if (m1 < -3) { t = -6 - m1; why += `Puis $\\sin(-\\pi - a) = \\sin a$ : on prend $-\\pi - \\big(${piTex2(m1, 6)}\\big) = ${piTex2(t, 6)}$.`; } }
      else if (a === "c") { let m1 = ((m % 12) + 18) % 12 - 6; why = m1 !== m ? `$\\cos$ est $2\\pi$-périodique : $\\cos\\big(${x}\\big) = \\cos\\big(${piTex2(m1, 6)}\\big)$. ` : ""; t = Math.abs(m1); if (m1 < 0) why += `Puis $\\cos(-a) = \\cos a$ : on prend $${piTex2(t, 6)}$.`; }
      else { let m1 = ((m % 6) + 9) % 6 - 3; t = m1; why = `$\\tan$ est $\\pi$-périodique : $\\tan\\big(${x}\\big) = \\tan\\big(${piTex2(m1, 6)}\\big)$.`; }
      s.push(`$$\\text{Calculer}\\ ${A}\\Big(${T}\\Big(${x}\\Big)\\Big)$$`);
      s.push(`<p class="mlstep">1. Rappel : $${A}(${T}\\,a) = a$ <b>seulement si</b> $a\\in\\cR{${I}}$.</p>`);
      const inI = a === "s" ? Math.abs(m) <= 3 : a === "c" ? m >= 0 && m <= 6 : Math.abs(m) < 3;
      s.push(`<p class="mlstep">2. $${x}$ ${inI ? "est" : "n'est pas"} dans $\\cR{${I}}$.</p>`);
      s.push(`<p class="mlstep">3. ${inI ? "Rien à transformer." : `On cherche l'angle de l'intervalle avec la même valeur. ${why}`}</p>`);
      s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{${A}\\Big(${T}\\Big(${x}\\Big)\\Big) = ${piTex2(t, 6)}}$$`);
    }
    return s;
  };
  stepLab(host, "Calculer avec arcsin, arccos, arctan", gen, build);
}
/* Fonctions usuelles : arcsin(sin x), arccos(cos x), arctan(tan x) */
function mlArcFx(host) {
  const F = [
    { t: "\\arcsin(\\sin x)", f: x => Math.asin(Math.sin(x)), c: "Dents de scie entre $-\\frac\\pi2$ et $\\frac\\pi2$ : $x$ sur $[-\\frac\\pi2, \\frac\\pi2]$, $\\pi - x$ sur $[\\frac\\pi2, \\frac{3\\pi}2]$, puis période $2\\pi$." },
    { t: "\\arccos(\\cos x)", f: x => Math.acos(Math.cos(x)), c: "Toit entre $0$ et $\\pi$ : $x$ sur $[0, \\pi]$, $-x$ sur $[-\\pi, 0]$ (parité), puis période $2\\pi$." },
    { t: "\\arctan(\\tan x)", f: x => Math.abs(Math.cos(x)) < 0.03 ? NaN : Math.atan(Math.tan(x)), c: "$x - k\\pi$ sur $]-\\frac\\pi2 + k\\pi, \\frac\\pi2 + k\\pi[$ : des morceaux de la droite $y = x$, période $\\pi$, non définie en $\\frac\\pi2 + k\\pi$." }
  ];
  let fi = 0;
  const draw = () => {
    const g = F[fi];
    host.innerHTML = `<p class="mlt">La fonction ne « défait » le sinus que sur un intervalle</p><div class="rmctl"><div class="mlseg">${F.map((h, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${h.t}$</button>`).join("")}</div></div>${plotSvg([{ f: x => x, c: "#8a8fa0", w: 1.2, d: "5 4" }, { f: g.f, c: "#2B5BD7", w: 2.5 }], -7, 7, -3.5, 3.5)}<p class="mlnote">En pointillé $y = x$ : la courbe ne coïncide avec la diagonale que sur l'intervalle de référence. ${g.c}</p>`;
    $$("[data-f]", host).forEach(b => b.addEventListener("click", () => { fi = +b.dataset.f; draw(); }));
    typeset(host);
  };
  draw();
}
const QFU = [
  ["$\\arcsin(\\sin\\pi) = \\pi$.", false, "Faux : $\\sin\\pi = 0$ et $\\arcsin0 = 0$. $\\pi\\notin[-\\frac\\pi2, \\frac\\pi2]$."],
  ["$\\cos(\\arcsin x) = \\sqrt{1 - x^2}$ pour $x\\in[-1, 1]$.", true, "Vrai : $\\arcsin x\\in[-\\frac\\pi2, \\frac\\pi2]$ où le cosinus est positif."],
  ["$\\arcsin$ est dérivable sur $[-1, 1]$.", false, "Faux : seulement sur $]-1, 1[$, la dérivée $\\frac1{\\sqrt{1 - x^2}}$ explose aux bords."],
  ["$\\arctan x + \\arctan\\frac1x = \\frac\\pi2$ pour tout $x\\neq0$.", false, "Faux : c'est $-\\frac\\pi2$ pour $x \\lt 0$."],
  ["$\\operatorname{ch}^2x - \\operatorname{sh}^2x = 1$.", true, "Vrai : $(\\operatorname{ch} - \\operatorname{sh})(\\operatorname{ch} + \\operatorname{sh}) = e^{-x}e^x = 1$."],
  ["$x^x\\to0$ quand $x\\to0^+$.", false, "Faux : $x^x = e^{x\\ln x}$ et $x\\ln x\\to0$, donc $x^x\\to1$."],
  ["$\\arccos(-x) = -\\arccos x$.", false, "Faux : $\\arccos(-x) = \\pi - \\arccos x$. C'est $\\arcsin$ et $\\arctan$ qui sont impaires."],
  ["$\\arctan'(x) = \\frac1{1 + x^2}$.", true, "Vrai, et c'est l'outil pour les primitives de $\\frac1{1 + x^2}$."]
];
/* Préhilbertiens : Gram-Schmidt dans R^3 */
const vtex = v => `\\left(${v.map(ftex).join(", ")}\\right)`;
const vint = v => { const L = v.reduce((l, f) => l * f.d / gcdi(l, f.d), 1); let w = v.map(f => f.n * (L / f.d)); const g = w.reduce((a, b) => gcdi(a, Math.abs(b)), 0) || 1; return w.map(x => x / g); };
const cf = c => c.n === c.d ? "" : `${fpar(c)}\\,`;
const dotF = (a, b) => a.reduce((s, x, i) => fadd(s, fmul(x, b[i])), Fr(0));
function mlGram(host) {
  const gen = () => { let v; do { v = [0, 1, 2].map(() => [0, 1, 2].map(() => rnd(-2, 2))); } while (v[0][0] * (v[1][1] * v[2][2] - v[1][2] * v[2][1]) - v[0][1] * (v[1][0] * v[2][2] - v[1][2] * v[2][0]) + v[0][2] * (v[1][0] * v[2][1] - v[1][1] * v[2][0]) === 0); return v; };
  const build = v => {
    const V = v.map(r => r.map(x => Fr(x))), s = [`$$v_1 = ${vtex(V[0])},\\quad v_2 = ${vtex(V[1])},\\quad v_3 = ${vtex(V[2])}$$`];
    s.push(`<p class="mlstep">1. Rappel : on orthogonalise sans normaliser, $w_k = v_k - \\sum_{j \\lt k}\\frac{\\langle v_k, w_j\\rangle}{\\|w_j\\|^2}w_j$, on enlève les fractions, puis $e_k = \\frac{w_k}{\\|w_k\\|}$ à la fin.</p>`);
    const W = [vint(V[0]).map(x => Fr(x))]; const N1 = dotF(W[0], W[0]);
    s.push(`<p class="mlstep">2. $w_1 = ${vtex(W[0])}$, $\\|w_1\\|^2 = ${ftex(N1)}$.</p>`);
    const c21 = fdiv(dotF(V[1], W[0]), N1), w2 = V[1].map((x, i) => fadd(x, fmul(Fr(-c21.n, c21.d), W[0][i]))), W2 = vint(w2).map(x => Fr(x)); W.push(W2); const N2 = dotF(W2, W2);
    s.push(`<p class="mlstep">3. $\\langle v_2, w_1\\rangle = ${ftex(dotF(V[1], W[0]))}$, donc :</p>$$w_2 = v_2 - ${cf(c21)}w_1 = ${vtex(w2)}\\ \\longrightarrow\\ ${vtex(W2)},\\quad\\|w_2\\|^2 = ${ftex(N2)}$$`);
    const c31 = fdiv(dotF(V[2], W[0]), N1), c32 = fdiv(dotF(V[2], W2), N2), w3 = V[2].map((x, i) => fadd(fadd(x, fmul(Fr(-c31.n, c31.d), W[0][i])), fmul(Fr(-c32.n, c32.d), W2[i]))), W3 = vint(w3).map(x => Fr(x)); const N3 = dotF(W3, W3);
    s.push(`<p class="mlstep">4. $\\langle v_3, w_1\\rangle = ${ftex(dotF(V[2], W[0]))}$ et $\\langle v_3, w_2\\rangle = ${ftex(dotF(V[2], W2))}$ :</p>$$w_3 = v_3 - ${cf(c31)}w_1 - ${cf(c32)}w_2 = ${vtex(w3)}\\ \\longrightarrow\\ ${vtex(W3)},\\quad\\|w_3\\|^2 = ${ftex(N3)}$$`);
    const nt = N => { const { s: q, m } = sqf(N.n); return m === 1 ? (q === 1 ? "" : `\\frac1{${q}}`) : `\\frac1{\\sqrt{${N.n}}}`; };
    s.push(`<p class="mlstep">5. On normalise :</p>$$\\cG{e_1 = ${nt(N1)}${vtex(W[0])},\\quad e_2 = ${nt(N2)}${vtex(W2)},\\quad e_3 = ${nt(N3)}${vtex(W3)}}$$<p class="mlnote">Contrôle : $\\langle w_1, w_2\\rangle = ${ftex(dotF(W[0], W2))}$, $\\langle w_1, w_3\\rangle = ${ftex(dotF(W[0], W3))}$, $\\langle w_2, w_3\\rangle = ${ftex(dotF(W2, W3))}$.</p>`);
    return s;
  };
  stepLab(host, "Gram-Schmidt dans $\\mathbb R^3$", gen, build);
}
/* Préhilbertiens : projection sur un plan */
function mlProjPl(host) {
  const gen = () => { let n; do { n = [rnd(-2, 2), rnd(-2, 2), rnd(-2, 2)]; } while (!n.some(x => x)); let x; do { x = [rnd(-3, 3), rnd(-3, 3), rnd(-3, 3)]; } while (n[0] * x[0] + n[1] * x[1] + n[2] * x[2] === 0); return { n, x }; };
  const build = ({ n, x }) => {
    const k = n[0] * x[0] + n[1] * x[1] + n[2] * x[2], N = n[0] ** 2 + n[1] ** 2 + n[2] ** 2, c = Fr(k, N), p = x.map((xi, i) => fadd(Fr(xi), fmul(Fr(-c.n, c.d), Fr(n[i])))), eq = fsum([[n[0], "x"], [n[1], "y"], [n[2], "z"]]);
    const { s: q, m } = sqf(N), d = surd2(Math.abs(k) * q, q * q * m, m);
    return [`$$\\text{Projeter}\\ X = (${x.join(", ")})\\ \\text{sur le plan}\\ P:\\ ${eq} = 0$$`,
      `<p class="mlstep">1. Rappel : $P = n^\\perp$, $p_P(X) = X - \\frac{\\langle X, n\\rangle}{\\|n\\|^2}n$ et $d(X, P) = \\frac{|\\langle X, n\\rangle|}{\\|n\\|}$.</p>`,
      `<p class="mlstep">2. Le vecteur normal se lit sur l'équation : $\\cR{n = (${n.join(", ")})}$, $\\|n\\|^2 = ${N}$.</p>`,
      `<p class="mlstep">3. Le produit scalaire : $\\cO{\\langle X, n\\rangle = ${k}}$, donc $\\frac{\\langle X, n\\rangle}{\\|n\\|^2} = ${ftex(c)}$.</p>`,
      `<p class="mlstep">4. Le projeté :</p>$$p_P(X) = (${x.join(", ")}) - ${fpar(c)}\\,(${n.join(", ")}) = \\cG{${vtex(p)}}$$<p class="mlnote">Contrôle : $${fsum([[n[0], ""]])}\\times${fpar(p[0])} + ${fpar(n[1])}\\times${fpar(p[1])} + ${fpar(n[2])}\\times${fpar(p[2])} = ${ftex(dotF(p, n.map(z => Fr(z))))}$.</p>`,
      `<p class="mlstep">5. La distance :</p>$$\\cG{d(X, P) = \\frac{|${k}|}{\\sqrt{${N}}} = ${d}}$$`];
  };
  stepLab(host, "Projeter sur un plan de $\\mathbb R^3$", gen, build);
}
const QPH = [
  ["$\\varphi(x, y) = x_1y_1 + x_1y_2 + x_2y_1 + x_2y_2$ est un produit scalaire sur $\\mathbb R^2$.", false, "Faux : $\\varphi(x, x) = (x_1 + x_2)^2$ est nul pour $x = (1, -1)$ : pas défini."],
  ["Une famille orthogonale de vecteurs non nuls est libre.", true, "Vrai : on prend le produit scalaire d'une combinaison nulle avec chaque $e_i$."],
  ["Dans toute base, $\\langle x, y\\rangle = \\sum x_iy_i$.", false, "Faux : seulement dans une base orthonormée."],
  ["$|\\langle x, y\\rangle| = \\|x\\|\\,\\|y\\|$ si et seulement si $x$ et $y$ sont colinéaires.", true, "Vrai : cas d'égalité de Cauchy-Schwarz."],
  ["Le projeté de $x$ sur $F$ est le point de $F$ le plus proche de $x$.", true, "Vrai : $d(x, F) = \\|x - p_F(x)\\|$."],
  ["Le projeté sur l'hyperplan $n^\\perp$ est $x - \\frac{\\langle x, n\\rangle}{\\|n\\|}n$.", false, "Faux : il faut $\\|n\\|^2$ au dénominateur."],
  ["Si $F\\subset G$, alors $F^\\perp\\subset G^\\perp$.", false, "Faux : l'inclusion se retourne, $G^\\perp\\subset F^\\perp$."]
];
/* Euclidiens : diagonalisation en BON d'une matrice 2x2 */
function mlSpec2(host) {
  const gen = () => { const U = [[1, 1], [1, -1], [1, 2], [2, 1], [1, -2], [2, -1], [1, 3], [3, -1]]; const [p, q] = U[rnd(0, 7)]; let m = 0; while (!m) m = rnd(-2, 2); return { p, q, l1: rnd(-3, 5), m }; };
  const build = ({ p, q, l1, m }) => {
    const N = p * p + q * q, l2 = l1 - N * m, a = l1 - m * q * q, b = m * p * q, d = l1 - m * p * p, tr = a + d, det = a * d - b * b;
    const nt = sqf(N).m === 1 ? `\\frac1{${sqf(N).s}}` : `\\frac1{\\sqrt{${N}}}`, mx = (A, B, C, D) => `\\begin{pmatrix}${A}&${B}\\\\${C}&${D}\\end{pmatrix}`;
    return [`$$S = ${mx(a, b, b, d)}$$`,
      `<p class="mlstep">1. Rappel : $S$ symétrique réelle, donc $S = PDP^\\top$ avec $P\\in O(2)$ ; les deux sous-espaces propres sont orthogonaux.</p>`,
      `<p class="mlstep">2. Valeurs propres : $\\chi_S = X^2 - (\\operatorname{tr}S)X + \\det S = ${fsum([[1, "X^2"], [-tr, "X"], [det, ""]])}$.</p>$$\\Delta = ${tr}^2 - 4\\times${fpar(det)} = ${tr * tr - 4 * det},\\qquad\\cO{\\lambda_1 = ${l1}},\\quad\\cO{\\lambda_2 = ${l2}}$$`,
      `<p class="mlstep">3. Vecteur propre pour $\\lambda_1 = ${l1}$ : la première ligne de $S - ${fpar(l1)}I$ donne $${fsum([[a - l1, "x"], [b, "y"]])} = 0$, d'où $u = (${p}, ${q})$. Pour $\\lambda_2$, on prend directement l'orthogonal $v = (${-q}, ${p})$ (contrôle : $Sv = ${l2}v$).</p>`,
      `<p class="mlstep">4. On normalise : $\\|u\\|^2 = \\|v\\|^2 = ${N}$.</p>`,
      `<p class="mlstep">5. Conclusion :</p>$$\\cG{S = \\cV PDP^\\top,\\quad\\cV P = ${nt}${mx(p, -q, q, p)},\\quad D = ${mx(l1, 0, 0, l2)}}$$`];
  };
  stepLab(host, "Diagonaliser une matrice symétrique en BON", gen, build);
}
/* Euclidiens : axe et angle d'une rotation de SO(3) */
function mlRot3(host) {
  const B = [[[2, -1, 2], [2, 2, -1], [-1, 2, 2], 3], [[0, -1, 0], [1, 0, 0], [0, 0, 1], 1], [[0, 0, 1], [1, 0, 0], [0, 1, 0], 1], [[-1, 2, 2], [2, -1, 2], [2, 2, -1], 3], [[1, 0, 0], [0, 0, -1], [0, 1, 0], 1], [[2, 2, -1], [-1, 2, 2], [2, -1, 2], 3], [[0, 1, 0], [0, 0, 1], [1, 0, 0], 1], [[0, 0, -1], [0, 1, 0], [1, 0, 0], 1]];
  let last = -1;
  const gen = () => { let i; do { i = rnd(0, B.length - 1); } while (i === last); last = i; return B[i]; };
  const build = ([r1, r2, r3, den]) => {
    const M = [r1, r2, r3], col = j => M.map(r => r[j]), dt = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], cr = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const det3 = (a, b, c) => dt(a, cr(b, c)), D = det3(r1, r2, r3) / den ** 3, tr = Fr(r1[0] + r2[1] + r3[2], den), cs = fdiv(fadd(tr, Fr(-1)), Fr(2));
    const R = M.map((r, i) => r.map((x, j) => x - (i === j ? den : 0))); let u = cr(R[0], R[1]); if (!u.some(x => x)) u = cr(R[0], R[2]); if (!u.some(x => x)) u = cr(R[1], R[2]);
    const g = u.reduce((a, b) => gcdi(a, Math.abs(b)), 0); u = u.map(x => x / g); if (u.find(x => x) < 0) u = u.map(x => -x);
    const E = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]; const x = E.find(e => cr(u, e).some(z => z)), Ax = M.map(r => dt(r, x)), sg = det3(u, x, Ax);
    const ang = { "1": 0, "1/2": 1, "0": 2, "-1/2": 3, "-1": 4 }[cs.d === 1 ? `${cs.n}` : `${cs.n}/${cs.d}`], AN = ["0", "\\frac\\pi3", "\\frac\\pi2", "\\frac{2\\pi}3", "\\pi"];
    const th = ang === undefined ? `\\arccos\\big(${ftex(cs)}\\big)` : AN[ang], thS = ang === 4 || ang === 0 ? th : sg > 0 ? th : `-${th}`;
    const mt = `${den === 1 ? "" : `\\frac1{${den}}`}\\begin{pmatrix}${M.map(r => r.join("&")).join("\\\\")}\\end{pmatrix}`, Nu = dt(u, u), ut = Nu === 1 ? `(${u.join(", ")})` : `\\frac1{\\sqrt{${Nu}}}(${u.join(", ")})`;
    return [`$$A = ${mt}$$`,
      `<p class="mlstep">1. Rappel : $A^\\top A = I$ et $\\det A = 1$ ; axe $= \\ker(A - I)$ ; $\\cos\\theta = \\frac{\\operatorname{tr}A - 1}2$ ; signe de $\\sin\\theta$ = signe de $\\det(u, x, Ax)$.</p>`,
      `<p class="mlstep">2. Orthogonale : colonnes de norme ${den === 1 ? "$1$" : `$\\frac{${dt(col(0), col(0))}}{${den * den}} = 1$`}, produits scalaires $${dt(col(0), col(1))}$, $${dt(col(0), col(2))}$, $${dt(col(1), col(2))}$. Et $\\det A = ${D}$.</p>`,
      `<p class="mlstep">3. L'axe : $\\ker(A - I)$ est dirigé par $\\cR{u = ${ut}}$ (produit vectoriel de deux lignes de $${den === 1 ? "" : den}A - ${den === 1 ? "" : den}I$, puis contrôle $Au = u$).</p>`,
      `<p class="mlstep">4. Le cosinus : $\\operatorname{tr}A = ${ftex(tr)}$, donc $\\cos\\cO\\theta = \\frac{${ftex(tr)} - 1}2 = ${ftex(cs)}$.</p>`,
      `<p class="mlstep">5. Le signe : avec $x = (${x.join(", ")})$, $${den === 1 ? "" : den}Ax = (${Ax.join(", ")})$ et $\\det(u, x, ${den === 1 ? "" : den}Ax) = ${sg}$${ang === 4 || ang === 0 ? " : l'angle est $\\pi$ ou $0$, le signe n'importe pas." : sg > 0 ? " $> 0$ : $\\sin\\theta > 0$." : " $\\lt 0$ : $\\sin\\theta \\lt 0$."}</p>`,
      `<p class="mlstep">6. Conclusion :</p>$$\\cG{\\text{rotation d'axe}\\ \\mathbb R(${u.join(", ")})\\ \\text{(orienté par ce vecteur), d'angle}\\ ${thS}}$$`];
  };
  stepLab(host, "Axe et angle d'une rotation de $SO(3)$", gen, build);
}
const QEU = [
  ["Une matrice orthogonale est symétrique.", false, "Faux : $R_{\\pi/2} = \\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ est orthogonale et pas symétrique."],
  ["Une matrice symétrique réelle est diagonalisable dans une BON.", true, "Vrai : c'est le théorème spectral."],
  ["Pour $A\\in O(n)$, $A^{-1} = A^\\top$.", true, "Vrai : $A^\\top A = I_n$."],
  ["Les valeurs propres réelles d'une isométrie sont $\\pm1$.", true, "Vrai : $\\|u(x)\\| = |\\lambda|\\,\\|x\\| = \\|x\\|$."],
  ["Si $\\operatorname{tr}A = 2$ pour $A\\in SO(3)$, l'angle est $\\frac\\pi3$.", false, "Faux : $\\cos\\theta = \\frac12$ donne $\\pm\\frac\\pi3$, il faut le signe de $\\sin\\theta$."],
  ["$A^\\top A$ est symétrique positive pour toute $A\\in\\mathcal M_n(\\mathbb R)$.", true, "Vrai : $X^\\top A^\\top AX = \\|AX\\|^2\\geq0$."],
  ["Dans $O(2)$, une matrice de déterminant $-1$ est une rotation.", false, "Faux : c'est une réflexion."],
  ["Un projecteur est orthogonal si et seulement s'il est autoadjoint.", true, "Vrai : $p^* = p\\iff\\ker p\\perp\\operatorname{Im}p$."]
];
/* Topologie : boules unité de N_p */
function mlBoules(host) {
  let p = 3, inf = false;
  const W = 300, c = W / 2, s = 110, P = q => { let d = ""; for (let i = 0; i <= 400; i++) { const t = 2 * Math.PI * i / 400, co = Math.cos(t), si = Math.sin(t); let x, y; if (q === Infinity) { const m = Math.max(Math.abs(co), Math.abs(si)); x = co / m; y = si / m; } else { x = Math.sign(co) * Math.abs(co) ** (2 / q); y = Math.sign(si) * Math.abs(si) ** (2 / q); } d += `${i ? "L" : "M"}${(c + s * x).toFixed(1)},${(c - s * y).toFixed(1)}`; } return d + "Z"; };
  const draw = () => {
    const q = inf ? Infinity : p;
    host.innerHTML = `<p class="mlt">Les boules unité de $\\|\\cdot\\|_p$ dans $\\mathbb R^2$</p><div class="rmctl"><label class="rmn">$p = ${inf ? "\\infty" : p.toFixed(1).replace(".", "{,}")}$ <input type="range" min="1" max="8" step="0.1" value="${p}" data-p aria-label="p"></label><div class="mlseg"><button type="button" data-i aria-pressed="${inf}">$p = \\infty$</button></div></div><svg viewBox="0 0 ${W} ${W}" class="rmsvg" style="max-width:320px" role="img" aria-label="Boules unité"><line x1="10" y1="${c}" x2="${W - 10}" y2="${c}" class="ax"/><line x1="${c}" y1="10" x2="${c}" y2="${W - 10}" class="ax"/><path d="${P(1)}" fill="none" stroke="#C27C00" stroke-dasharray="4 3"/><path d="${P(2)}" fill="none" stroke="#1F8A5B" stroke-dasharray="4 3"/><path d="${P(Infinity)}" fill="none" stroke="#7A4CC2" stroke-dasharray="4 3"/><path d="${P(q)}" fill="rgba(43,91,215,.12)" stroke="#2B5BD7" stroke-width="2.5"/></svg><p class="mlnote">En pointillés : $\\textcolor[RGB]{194,124,0}{\\|\\cdot\\|_1}$ (losange), $\\textcolor[RGB]{31,138,91}{\\|\\cdot\\|_2}$ (disque), $\\textcolor[RGB]{122,76,194}{\\|\\cdot\\|_\\infty}$ (carré). Les boules sont emboîtées : $B_1\\subset B_p\\subset B_\\infty\\subset 2B_1$, c'est l'équivalence des normes vue sur un dessin. Toutes sont convexes.</p>`;
    $("[data-p]", host).addEventListener("input", e => { p = +e.target.value; inf = false; draw(); $("[data-p]", host).focus(); });
    $("[data-i]", host).addEventListener("click", () => { inf = !inf; draw(); });
    typeset(host);
  };
  draw();
}
const QEVN = [
  ["Sur $\\mathcal C([0, 1])$, $\\|\\cdot\\|_1$ et $\\|\\cdot\\|_\\infty$ sont équivalentes.", false, "Faux : $f_n = t^n$ donne un quotient $n + 1\\to\\infty$."],
  ["Dans $\\mathbb R^n$, une partie fermée et bornée est compacte.", true, "Vrai : en dimension finie, compact $\\iff$ fermé borné."],
  ["$\\{(x, y),\\ x^2 + y^2 \\lt 1\\}$ est fermé.", false, "Faux : inégalité stricte, c'est un ouvert (et pas un fermé)."],
  ["Une partie qui n'est pas ouverte est fermée.", false, "Faux : $[0, 1[$ n'est ni ouverte ni fermée."],
  ["Toute application linéaire de $\\mathbb R^n$ dans $\\mathbb R^p$ est continue.", true, "Vrai : départ de dimension finie."],
  ["$GL_n(\\mathbb R)$ est dense dans $\\mathcal M_n(\\mathbb R)$.", true, "Vrai : $A - \\frac1kI_n\\to A$, inversible pour $k$ grand."],
  ["Une fonction continue sur un fermé de $\\mathbb R^n$ atteint son maximum.", false, "Faux : il faut un compact. $x\\mapsto x$ sur $\\mathbb R$."],
  ["$x\\mapsto d(x, A)$ est $1$-lipschitzienne.", true, "Vrai : $|d(x, A) - d(y, A)|\\leq\\|x - y\\|$."]
];
/* Calcul différentiel : limite en (0,0) vue en polaires */
function mlPolar(host) {
  const F = [
    { t: "\\frac{xy}{x^2 + y^2}", f: (x, y) => x * y / (x * x + y * y), c: "La courbe ne s'écrase pas quand $r\\to0$ : $f = \\cos\\theta\\sin\\theta$ dépend de $\\theta$, <b>pas de limite</b>." },
    { t: "\\frac{x^2y}{x^2 + y^2}", f: (x, y) => x * x * y / (x * x + y * y), c: "La courbe s'écrase sur $0$ uniformément : $|f|\\leq r$, <b>limite $0$</b>." },
    { t: "\\frac{x^2y}{x^4 + y^2}", f: (x, y) => x * x * y / (x ** 4 + y * y), c: "Sur chaque droite, $f\\to0$, mais il reste un pic de hauteur $\\frac12$ de plus en plus étroit (le long de $y = x^2$) : <b>pas de limite</b>." },
    { t: "\\frac{x^3 + y^3}{x^2 + y^2}", f: (x, y) => (x ** 3 + y ** 3) / (x * x + y * y), c: "$|f|\\leq2r$ : la courbe s'écrase, <b>limite $0$</b>." }
  ];
  let fi = 0, k = 10;
  const draw = () => {
    const g = F[fi], r = 10 ** (-k / 10), W = 520, H = 220, X = t => 40 + t / (2 * Math.PI) * (W - 60), Y = v => H / 2 - v * (H / 2 - 20);
    let d = "", mx = 0; for (let i = 0; i <= 3000; i++) { const t = 2 * Math.PI * i / 3000, v = g.f(r * Math.cos(t), r * Math.sin(t)); mx = Math.max(mx, Math.abs(v)); d += `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(Math.max(-1, Math.min(1, v))).toFixed(1)}`; }
    host.innerHTML = `<p class="mlt">$\\theta\\mapsto f(r\\cos\\theta, r\\sin\\theta)$ quand $r\\to0$</p><div class="rmctl"><div class="mlseg">${F.map((h, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${h.t}$</button>`).join("")}</div><label class="rmn">$r = 10^{-${(k / 10).toFixed(1)}}$ <input type="range" min="0" max="30" value="${k}" data-r aria-label="rayon"></label></div><svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Valeurs sur un cercle"><line x1="40" x2="${W - 20}" y1="${Y(0)}" y2="${Y(0)}" class="ax"/><path d="${d}" fill="none" stroke="#2B5BD7" stroke-width="2"/><text x="40" y="${H - 4}" class="tx">θ = 0</text><text x="${W - 20}" y="${H - 4}" class="tx" text-anchor="end">2π</text><text x="36" y="${Y(1) + 4}" class="tx" text-anchor="end">1</text><text x="36" y="${Y(-1) + 4}" class="tx" text-anchor="end">−1</text></svg><p class="mlcalc">$$\\max_\\theta|f(r\\cos\\theta, r\\sin\\theta)| \\approx ${mx.toFixed(4).replace(".", "{,}")}$$</p><p class="mlnote">${g.c} Fais diminuer $r$ avec le curseur.</p>`;
    $$("[data-f]", host).forEach(b => b.addEventListener("click", () => { fi = +b.dataset.f; draw(); }));
    $("[data-r]", host).addEventListener("input", e => { k = +e.target.value; draw(); $("[data-r]", host).focus(); });
    typeset(host);
  };
  draw();
}
/* Calcul différentiel : points critiques et nature */
function mlCrit(host) {
  const gen = () => { if (rnd(0, 1)) { let a, b, c; do { a = rnd(-3, 3); b = rnd(-3, 3); c = rnd(-3, 3); } while (!a || !c || 4 * a * c - b * b === 0); return { k: 0, a, b, c, d: rnd(-4, 4), e: rnd(-4, 4) }; } return { k: 1, K: rnd(1, 3), eps: rnd(0, 1) ? 1 : -1, m: rnd(-3, 3) }; };
  const nat = (r, s, t) => { const D = r * t - s * s; return D > 0 ? (r > 0 ? "minimum local" : "maximum local") : D < 0 ? "point col" : "on ne peut pas conclure"; };
  const build = E => {
    const st = [];
    if (E.k === 0) {
      const { a, b, c, d, e } = E, fx = fsum([[a, "x^2"], [b, "xy"], [c, "y^2"], [d, "x"], [e, "y"]]), D = 4 * a * c - b * b, x0 = Fr(-2 * c * d + b * e, D), y0 = Fr(-2 * a * e + b * d, D);
      st.push(`$$f(x, y) = ${fx}$$`);
      st.push(`<p class="mlstep">1. Rappel : points critiques par $\\nabla f = 0$, puis $r = \\partial^2_{xx}f$, $s = \\partial^2_{xy}f$, $t = \\partial^2_{yy}f$ et le signe de $rt - s^2$.</p>`);
      st.push(`<p class="mlstep">2. Le gradient :</p>$$\\left\\{\\begin{aligned}\\partial_xf &= ${fsum([[2 * a, "x"], [b, "y"], [d, ""]])} = 0\\\\\\partial_yf &= ${fsum([[b, "x"], [2 * c, "y"], [e, ""]])} = 0\\end{aligned}\\right.$$`);
      st.push(`<p class="mlstep">3. Un système linéaire de déterminant $${2 * a}\\times${fpar(2 * c)} - ${fpar(b)}^2 = ${D}\\neq0$ : un seul point critique $\\cR{a = \\big(${ftex(x0)}, ${ftex(y0)}\\big)}$.</p>`);
      st.push(`<p class="mlstep">4. Les dérivées secondes (constantes) : $r = ${2 * a}$, $s = ${b}$, $t = ${2 * c}$, donc $rt - s^2 = ${D}$.</p>`);
      st.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{\\text{en}\\ \\big(${ftex(x0)}, ${ftex(y0)}\\big)\\ :\\ \\text{${nat(2 * a, b, 2 * c)}}}$$<p class="mlnote">${D > 0 ? "Ici l'extremum est même global : $f(a + h) - f(a)$ est la forme quadratique $ah_1^2 + bh_1h_2 + ch_2^2$, de signe constant." : "Un col : $f(a + h) - f(a)$ prend les deux signes."}</p>`);
    } else {
      const { K, eps, m } = E, fx = `x^3 - ${3 * K * K}x ${eps > 0 ? "+" : "-"} (${fsum([[1, "y^2"], [2 * m, "y"]])})`;
      st.push(`$$f(x, y) = ${fx}$$`);
      st.push(`<p class="mlstep">1. Rappel : $\\nabla f = 0$, puis $rt - s^2$ en chaque point critique.</p>`);
      st.push(`<p class="mlstep">2. Le gradient :</p>$$\\partial_xf = 3x^2 - ${3 * K * K} = 0\\iff x = \\pm${K},\\qquad\\partial_yf = ${eps > 0 ? "" : "-"}(2y ${m >= 0 ? "+" : "-"} ${Math.abs(2 * m)}) = 0\\iff y = ${-m}.$$`);
      st.push(`<p class="mlstep">3. Deux points critiques : $\\cR{(${K}, ${-m})}$ et $\\cR{(${-K}, ${-m})}$.</p>`);
      st.push(`<p class="mlstep">4. Les dérivées secondes : $r = 6x$, $s = 0$, $t = ${2 * eps}$, donc $rt - s^2 = ${12 * eps}x$.</p><p class="mlnote">En $(${K}, ${-m})$ : $r = ${6 * K}$, $rt - s^2 = ${12 * eps * K}$. En $(${-K}, ${-m})$ : $r = ${-6 * K}$, $rt - s^2 = ${-12 * eps * K}$.</p>`);
      st.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{(${K}, ${-m}):\\ \\text{${nat(6 * K, 0, 2 * eps)}},\\qquad(${-K}, ${-m}):\\ \\text{${nat(-6 * K, 0, 2 * eps)}}}$$<p class="mlnote">Aucun n'est global : $f(x, ${-m})\\to\\pm\\infty$ quand $x\\to\\pm\\infty$.</p>`);
    }
    return st;
  };
  stepLab(host, "Points critiques et leur nature", gen, build);
}
const QCD = [
  ["Si $f$ a des dérivées partielles en $(0, 0)$, elle y est continue.", false, "Faux : $\\frac{xy}{x^2 + y^2}$ a des partielles nulles en $(0, 0)$ et n'y est pas continue."],
  ["Une fonction différentiable en $a$ est continue en $a$.", true, "Vrai : $f(a + h) - f(a) = df(a)(h) + o(\\|h\\|)\\to0$."],
  ["Si $f\\to\\ell$ sur toutes les droites passant par $0$, alors $f\\to\\ell$ en $0$.", false, "Faux : $\\frac{x^2y}{x^4 + y^2}$, le long de $y = x^2$, vaut $\\frac12$."],
  ["$d(M\\mapsto M^2)(M)(H) = 2MH$.", false, "Faux : c'est $MH + HM$."],
  ["Si $\\nabla f(a) = 0$, alors $f$ a un extremum en $a$.", false, "Faux : $(0, 0)$ est un col de $x^2 - y^2$."],
  ["Si $rt - s^2 > 0$ et $r > 0$ en un point critique, c'est un minimum local.", true, "Vrai : la hessienne est définie positive."],
  ["Si $f$ est $\\mathcal C^2$, $\\partial_x\\partial_yf = \\partial_y\\partial_xf$.", true, "Vrai : théorème de Schwarz."],
  ["Un extremum d'une fonction sur un disque fermé est toujours un point critique.", false, "Faux : il peut être sur le bord, avec $\\nabla f\\neq0$."]
];
/* Familles sommables : exponentielle de matrices 2x2 */
function mlExpMat(host) {
  const PS = [[[1, 1], [0, 1]], [[1, 0], [1, 1]], [[2, 1], [1, 1]], [[1, 1], [1, 2]], [[1, 2], [0, 1]], [[1, -1], [1, 0]]];
  const gen = () => { const k = rnd(0, 2); if (k === 0) { const P = PS[rnd(0, PS.length - 1)]; let l1 = rnd(-2, 3), l2; do { l2 = rnd(-2, 3); } while (l2 === l1); return { k, P, l1, l2 }; } if (k === 1) { let a = 0; while (!a) a = rnd(-3, 3); return { k, l: rnd(-2, 3), a }; } return { k, t: rnd(1, 3) }; };
  const fx = l => l === 0 ? "X" : `(X ${l > 0 ? "-" : "+"} ${Math.abs(l)})`, mx = M => `\\begin{pmatrix}${M.map(r => r.join("&")).join("\\\\")}\\end{pmatrix}`, eb = l => l === 0 ? "" : l === 1 ? "e" : `e^{${l}}`;
  const build = E => {
    const s = [];
    if (E.k === 0) {
      const { P, l1, l2 } = E, d = P[0][0] * P[1][1] - P[0][1] * P[1][0], Q = [[P[1][1] * d, -P[0][1] * d], [-P[1][0] * d, P[0][0] * d]];
      const A = [0, 1].map(i => [0, 1].map(j => P[i][0] * l1 * Q[0][j] + P[i][1] * l2 * Q[1][j]));
      const R = [0, 1].map(i => [0, 1].map(j => csum([ctp(P[i][0] * Q[0][j], eb(l1)), ctp(P[i][1] * Q[1][j], eb(l2))])));
      s.push(`$$A = ${mx(A)}$$`);
      s.push(`<p class="mlstep">1. Rappel : $A = PDP^{-1}\\Rightarrow e^A = Pe^DP^{-1}$ et $e^{\\operatorname{diag}(\\lambda_i)} = \\operatorname{diag}(e^{\\lambda_i})$.</p>`);
      s.push(`<p class="mlstep">2. Valeurs propres : $\\operatorname{tr}A = ${l1 + l2}$, $\\det A = ${l1 * l2}$, donc $\\chi_A = ${fsum([[1, "X^2"], [-(l1 + l2), "X"], [l1 * l2, ""]])} = ${fx(l1)}${fx(l2)}$ : $\\cV{\\lambda_1 = ${l1}}$, $\\cV{\\lambda_2 = ${l2}}$, distinctes.</p>`);
      s.push(`<p class="mlstep">3. Vecteurs propres : $(${P[0][0]}, ${P[1][0]})$ pour $${l1}$ et $(${P[0][1]}, ${P[1][1]})$ pour $${l2}$ (contrôle : $AX = \\lambda X$). D'où :</p>$$\\cV P = ${mx(P)},\\qquad\\cV P^{-1} = ${mx(Q)}$$`);
      s.push(`<p class="mlstep">4. On calcule $Pe^DP^{-1}$ :</p>$$e^A = ${mx(P)}\\begin{pmatrix}${eb(l1) || "1"}&0\\\\0&${eb(l2) || "1"}\\end{pmatrix}${mx(Q)}$$`);
      s.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{e^A = ${mx(R)}}$$<p class="mlnote">Contrôle : $\\det e^A = e^{${l1 + l2}} = e^{\\operatorname{tr}A}$.</p>`);
    } else if (E.k === 1) {
      const { l, a } = E;
      s.push(`$$A = ${mx([[l, a], [0, l]])}$$`);
      s.push(`<p class="mlstep">1. Rappel : si $AB = BA$, $e^{A + B} = e^Ae^B$ ; si $N^2 = 0$, $e^N = I + N$.</p>`);
      s.push(`<p class="mlstep">2. On découpe : $A = ${l}I + N$ avec $N = ${mx([[0, a], [0, 0]])}$, $N^2 = 0$, et $${l}I$ commute avec $N$.</p>`);
      s.push(`<p class="mlstep">3. Les deux morceaux : $e^{${l}I} = ${eb(l) || "1"}\\,I$ et $e^N = I + N = ${mx([[1, a], [0, 1]])}$.</p>`);
      s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{e^A = ${eb(l) ? eb(l) : ""}${mx([[1, a], [0, 1]])}}$$`);
    } else {
      const { t } = E;
      s.push(`$$A = ${mx([[0, -t], [t, 0]])} = ${t}J,\\qquad J = ${mx([[0, -1], [1, 0]])}$$`);
      s.push(`<p class="mlstep">1. Rappel : un polynôme annulateur donne les puissances ; on reconnaît les séries de $\\cos$ et $\\sin$.</p>`);
      s.push(`<p class="mlstep">2. $J^2 = -I$, donc $(${t}J)^{2k} = (-1)^k${t}^{2k}I$ et $(${t}J)^{2k+1} = (-1)^k${t}^{2k+1}J$.</p>`);
      s.push(`<p class="mlstep">3. On sépare pairs et impairs :</p>$$e^A = \\sum_k\\frac{(-1)^k${t}^{2k}}{(2k)!}I + \\sum_k\\frac{(-1)^k${t}^{2k+1}}{(2k + 1)!}J = \\cos(${t})\\,I + \\sin(${t})\\,J$$`);
      s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{e^A = ${mx([[`\\cos ${t}`, `-\\sin ${t}`], [`\\sin ${t}`, `\\cos ${t}`]])}}$$<p class="mlnote">C'est la rotation d'angle $${t}$ radian${t > 1 ? "s" : ""}.</p>`);
    }
    return s;
  };
  stepLab(host, "Calculer une exponentielle de matrice", gen, build);
}
const QFS = [
  ["$e^{A + B} = e^Ae^B$ pour toutes matrices $A, B$.", false, "Faux : il faut $AB = BA$."],
  ["$e^A$ est toujours inversible.", true, "Vrai : $(e^A)^{-1} = e^{-A}$, et $\\det e^A = e^{\\operatorname{tr}A}\\neq0$."],
  ["Pour une famille positive, on peut toujours intervertir les sommes.", true, "Vrai : le résultat est le même, éventuellement $+\\infty$."],
  ["$\\sum_{p, q\\geq1}\\frac1{(p + q)^2}$ est finie.", false, "Faux : les paquets donnent $\\sum\\frac{n - 1}{n^2}$, qui diverge. Il faut $\\alpha > 2$."],
  ["Le produit de Cauchy de deux séries convergentes converge toujours.", false, "Faux : il faut l'absolue convergence (contre-exemple : $\\frac{(-1)^n}{\\sqrt{n + 1}}$)."],
  ["Si $\\|A\\| \\lt 1$ (norme sous-multiplicative), $I - A$ est inversible.", true, "Vrai : $(I - A)^{-1} = \\sum A^k$."]
];
/* Fonctions vectorielles : arcs paramétrés et vecteur vitesse */
function mlArcP(host) {
  const cm = x => x.toFixed(2).replace(".", "{,}");
  const F = [
    { t: "(t^2 - 1, t^3 - 3t)", f: t => [t * t - 1, t ** 3 - 3 * t], r: [-2.2, 2.2] },
    { t: "(t^2, t^3)", f: t => [t * t, t ** 3], r: [-1.4, 1.4] },
    { t: "(\\cos^3t, \\sin^3t)", f: t => [Math.cos(t) ** 3, Math.sin(t) ** 3], r: [0, 2 * Math.PI] },
    { t: "(\\sin2t, \\sin3t)", f: t => [Math.sin(2 * t), Math.sin(3 * t)], r: [0, 2 * Math.PI] },
    { t: "(t - \\sin t, 1 - \\cos t)", f: t => [t - Math.sin(t), 1 - Math.cos(t)], r: [0, 4 * Math.PI] }
  ];
  let fi = 0, u = 0.3;
  const draw = () => {
    const g = F[fi], [a, b] = g.r, T = a + (b - a) * u, pts = []; for (let i = 0; i <= 600; i++) pts.push(g.f(a + (b - a) * i / 600));
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]); let x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys); const m = 0.15 * Math.max(x1 - x0, y1 - y0); x0 -= m; x1 += m; y0 -= m; y1 += m;
    const W = 520, H = 300, sc = Math.min((W - 20) / (x1 - x0), (H - 20) / (y1 - y0)), X = x => 10 + (x - x0) * sc, Y = y => H - 10 - (y - y0) * sc;
    const h = 1e-4, P = g.f(T), P2 = g.f(T + h), P1 = g.f(T - h), v = [(P2[0] - P1[0]) / (2 * h), (P2[1] - P1[1]) / (2 * h)], nv = Math.hypot(...v), sing = nv < 1e-3, k = 0.25 * (x1 - x0) / Math.max(nv, 1e-9);
    const arrow = sing ? "" : `<line x1="${X(P[0])}" y1="${Y(P[1])}" x2="${X(P[0] + k * v[0])}" y2="${Y(P[1] + k * v[1])}" stroke="#D4503B" stroke-width="2.5"/><circle cx="${X(P[0] + k * v[0])}" cy="${Y(P[1] + k * v[1])}" r="3" fill="#D4503B"/>`;
    host.innerHTML = `<p class="mlt">Un arc et son vecteur vitesse $\\gamma'(t)$</p><div class="rmctl"><div class="mlseg">${F.map((q, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${q.t}$</button>`).join("")}</div><label class="rmn">$t = ${T.toFixed(2).replace(".", "{,}")}$ <input type="range" min="0" max="1" step="0.002" value="${u}" data-t aria-label="t"></label></div><svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Arc paramétré"><path d="${pts.map((p, i) => `${i ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`).join("")}" fill="none" stroke="#2B5BD7" stroke-width="2"/>${arrow}<circle cx="${X(P[0])}" cy="${Y(P[1])}" r="5" fill="#1F8A5B"/></svg><p class="mlcalc">$$\\gamma(t)\\approx(${cm(P[0])}\\,;\\ ${cm(P[1])}),\\qquad\\gamma'(t)\\approx(${cm(v[0])}\\,;\\ ${cm(v[1])})$$</p><p class="mlnote">${sing ? "<b>Point singulier</b> : $\\gamma'(t) = 0$, la tangente se lit sur la première dérivée non nulle." : "Point régulier : la flèche rouge dirige la tangente. Cherche les valeurs de $t$ où elle disparaît."}</p>`;
    $$("[data-f]", host).forEach(btn => btn.addEventListener("click", () => { fi = +btn.dataset.f; draw(); }));
    $("[data-t]", host).addEventListener("input", e => { u = +e.target.value; draw(); $("[data-t]", host).focus(); });
    typeset(host);
  };
  draw();
}
const QFV = [
  ["Le théorème de Rolle est vrai pour les fonctions à valeurs dans $\\mathbb R^2$.", false, "Faux : $e^{it}$ sur $[0, 2\\pi]$."],
  ["Si $\\|f\\|$ est constante, alors $\\langle f, f'\\rangle = 0$.", true, "Vrai : on dérive $\\|f\\|^2$."],
  ["$(A(t)^2)' = 2A(t)A'(t)$.", false, "Faux : c'est $A'A + AA'$."],
  ["$\\|f'\\|\\leq M$ sur $[a, b]$ donne $\\|f(b) - f(a)\\|\\leq M(b - a)$.", true, "Vrai : inégalité des accroissements finis."],
  ["En un point singulier, la tangente est dirigée par $\\gamma'(t_0)$.", false, "Faux : $\\gamma'(t_0) = 0$ ; on prend le premier $\\gamma^{(p)}(t_0)\\neq0$."],
  ["$\\big\\|\\int_a^bf\\big\\|\\leq\\int_a^b\\|f\\|$ pour $a\\leq b$.", true, "Vrai : inégalité triangulaire intégrale."]
];
/* Probabilités : Bayes pour un test */
function mlBayes(host) {
  const gen = () => ({ p: [0.001, 0.005, 0.01, 0.02, 0.05, 0.1][rnd(0, 5)], se: [0.9, 0.95, 0.99][rnd(0, 2)], fp: [0.01, 0.02, 0.05, 0.1][rnd(0, 3)] });
  const fm = v => String(+v.toFixed(6)).replace(".", "{,}"), pc = v => String(+(v * 100).toFixed(2)).replace(".", "{,}");
  const build = ({ p, se, fp }) => {
    const a = p * se, b = (1 - p) * fp, tot = a + b, post = a / tot;
    return [`<p class="mlnote">Une maladie touche $${pc(p)}\\,\\%$ de la population. Le test est positif chez $${pc(se)}\\,\\%$ des malades et chez $${pc(fp)}\\,\\%$ des non-malades. Un patient est positif : quelle est la probabilité qu'il soit malade ?</p>`,
      `<p class="mlstep">1. Rappel : Bayes avec le système complet $(\\cR M, \\cR{\\overline M})$ : $P_+(M) = \\frac{P(M)P_M(+)}{P(M)P_M(+) + P(\\overline M)P_{\\overline M}(+)}$.</p>`,
      `<p class="mlstep">2. Les données :</p>$$P(M) = ${fm(p)},\\quad P_M(+) = ${fm(se)},\\quad P(\\overline M) = ${fm(1 - p)},\\quad P_{\\overline M}(+) = ${fm(fp)}$$`,
      `<p class="mlstep">3. Probabilités totales :</p>$$P(+) = ${fm(p)}\\times${fm(se)} + ${fm(1 - p)}\\times${fm(fp)} = ${fm(a)} + ${fm(b)} = ${fm(tot)}$$`,
      `<p class="mlstep">4. Bayes :</p>$$P_+(M) = \\frac{${fm(a)}}{${fm(tot)}}\\approx${fm(+post.toFixed(4))}$$`,
      `<p class="mlstep">5. Conclusion :</p>$$\\cG{P_+(M)\\approx${pc(post)}\\,\\%}$$<p class="mlnote">${post < 0.5 ? "Moins d'une chance sur deux : la maladie est rare, les faux positifs dominent." : "Le test est très informatif ici : la maladie est assez fréquente ou les faux positifs rares."}</p>`];
  };
  stepLab(host, "Formule de Bayes : un test de dépistage", gen, build);
}
/* Probabilités : la loi binomiale */
function mlBinomP(host) {
  let n = 10, p = 0.3;
  const draw = () => {
    const P = []; for (let k = 0; k <= n; k++) P.push(binom(n, k) * p ** k * (1 - p) ** (n - k));
    const mxv = Math.max(...P), W = 520, H = 240, bw = (W - 60) / (n + 1), X = k => 40 + k * bw, Y = v => H - 25 - v / mxv * (H - 50), m = n * p, sd = Math.sqrt(n * p * (1 - p));
    const bars = P.map((v, k) => `<rect x="${(X(k) + bw * 0.15).toFixed(1)}" y="${Y(v).toFixed(1)}" width="${(bw * 0.7).toFixed(1)}" height="${(H - 25 - Y(v)).toFixed(1)}" fill="#2B5BD7" opacity=".8"/>`).join("") + (n <= 20 ? P.map((v, k) => `<text x="${(X(k) + bw / 2).toFixed(1)}" y="${H - 10}" class="tx" text-anchor="middle">${k}</text>`).join("") : "");
    const xm = X(m) + bw / 2;
    host.innerHTML = `<p class="mlt">La loi binomiale $\\mathcal B(n, p)$</p><div class="rmctl"><label class="rmn">$n = ${n}$ <input type="range" min="1" max="40" value="${n}" data-n aria-label="n"></label><label class="rmn">$p = ${p.toFixed(2).replace(".", "{,}")}$ <input type="range" min="0.05" max="0.95" step="0.05" value="${p}" data-p aria-label="p"></label></div><svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Diagramme de la loi binomiale"><rect x="${(xm - sd * bw).toFixed(1)}" y="20" width="${(2 * sd * bw).toFixed(1)}" height="${H - 45}" fill="rgba(194,124,0,.15)"/>${bars}<line x1="${xm.toFixed(1)}" x2="${xm.toFixed(1)}" y1="15" y2="${H - 25}" stroke="#D4503B" stroke-width="2"/></svg><p class="mlcalc">$$E(X) = np = ${(m).toFixed(2).replace(".", "{,}")},\\qquad V(X) = np(1 - p) = ${(sd * sd).toFixed(2).replace(".", "{,}")},\\qquad\\sigma\\approx${sd.toFixed(2).replace(".", "{,}")}$$</p><p class="mlnote">En rouge l'espérance, en orange la bande $[E - \\sigma, E + \\sigma]$. Le pic est près de $np$ ; la loi est symétrique pour $p = \\frac12$.</p>`;
    $("[data-n]", host).addEventListener("input", e => { n = +e.target.value; draw(); $("[data-n]", host).focus(); });
    $("[data-p]", host).addEventListener("input", e => { p = +e.target.value; draw(); $("[data-p]", host).focus(); });
    typeset(host);
  };
  draw();
}
const QPR = [
  ["Deux événements incompatibles de probabilités non nulles sont indépendants.", false, "Faux : $P(A\\cap B) = 0\\neq P(A)P(B)$."],
  ["$P_B(A) = P_A(B)$ en général.", false, "Faux : c'est tout l'objet de la formule de Bayes."],
  ["Si $X\\sim\\mathcal B(n, p)$, alors $E(X) = np$.", true, "Vrai : somme de $n$ Bernoulli de paramètre $p$."],
  ["$V(X + Y) = V(X) + V(Y)$ pour toutes variables.", false, "Faux : il manque $2\\operatorname{Cov}(X, Y)$, nul si indépendantes."],
  ["$E(X + Y) = E(X) + E(Y)$ même si $X$ et $Y$ ne sont pas indépendantes.", true, "Vrai : la linéarité ne demande rien."],
  ["$V(2X) = 2V(X)$.", false, "Faux : $V(aX) = a^2V(X)$, donc $4V(X)$."],
  ["Le nombre de rouges dans des tirages sans remise suit une loi binomiale.", false, "Faux : les tirages ne sont pas indépendants (loi hypergéométrique)."],
  ["Deux à deux indépendants implique mutuellement indépendants.", false, "Faux : contre-exemple des deux pièces et « même résultat »."]
];
/* Structures : table de Z/nZ */
function mlCayley(host) {
  let n = 6, op = "+";
  const draw = () => {
    const g = (a, b) => gcdi(a, b), inv = op === "×" ? [...Array(n).keys()].filter(k => g(k, n) === 1) : [...Array(n).keys()];
    const cell = (a, b) => { const v = op === "+" ? (a + b) % n : (a * b) % n, mark = op === "+" ? v === 0 : v === 1, dim = op === "×" && (g(a, n) !== 1 || g(b, n) !== 1); return `<td style="padding:4px 7px;text-align:center;${mark ? "background:rgba(194,124,0,.22);font-weight:600;" : ""}${dim ? "color:var(--muted);opacity:.55;" : ""}">${v}</td>`; };
    const rows = [...Array(n).keys()].map(a => `<tr><th style="padding:4px 7px">${a}</th>${[...Array(n).keys()].map(b => cell(a, b)).join("")}</tr>`).join("");
    const prem = [...Array(n - 1).keys()].every(k => g(k + 1, n) === 1);
    const txt = op === "+" ? `Groupe abélien de neutre $0$ ; chaque ligne contient exactement une case $0$ (en orange) : tout élément a un opposé. Chaque ligne est une permutation des éléments.` : `Les inversibles (cases $1$ en orange) sont les $k$ premiers avec $${n}$ : $\\{${inv.join(", ")}\\}$, soit $${inv.length}$ éléments. Les lignes grisées n'ont pas d'inverse. ${prem ? `$${n}$ est premier : tout élément non nul est inversible, $\\mathbb Z/${n}\\mathbb Z$ est un <b>corps</b>.` : `$${n}$ n'est pas premier : $\\mathbb Z/${n}\\mathbb Z$ n'est pas intègre (cherche un produit nul entre deux non nuls).`}`;
    host.innerHTML = `<p class="mlt">La table de $\\mathbb Z/n\\mathbb Z$ <span class="hp">programme de Spé</span></p><div class="rmctl"><div class="mlseg"><button type="button" data-o="+" aria-pressed="${op === "+"}">addition</button><button type="button" data-o="×" aria-pressed="${op === "×"}">multiplication</button></div><label class="rmn">$n = ${n}$ <input type="range" min="2" max="12" value="${n}" data-n aria-label="n"></label></div><div style="overflow-x:auto;display:flex;justify-content:center"><table style="border-collapse:collapse;font-variant-numeric:tabular-nums"><tr><th style="padding:4px 7px">${op}</th>${[...Array(n).keys()].map(b => `<th style="padding:4px 7px">${b}</th>`).join("")}</tr>${rows}</table></div><p class="mlnote">${txt}</p>`;
    $$("[data-o]", host).forEach(b => b.addEventListener("click", () => { op = b.dataset.o; draw(); }));
    $("[data-n]", host).addEventListener("input", e => { n = +e.target.value; draw(); $("[data-n]", host).focus(); });
    typeset(host);
  };
  draw();
}
const QST = [
  ["Une réunion de deux sous-groupes est un sous-groupe.", false, "Faux : $2\\mathbb Z\\cup3\\mathbb Z$ contient $2$ et $3$, pas $5$."],
  ["Le noyau d'un morphisme de groupes est un sous-groupe.", true, "Vrai, et $f$ est injectif si et seulement si $\\ker f = \\{e\\}$."],
  ["Dans un groupe, $(xy)^{-1} = x^{-1}y^{-1}$.", false, "Faux en général : c'est $y^{-1}x^{-1}$."],
  ["$\\mathcal M_2(\\mathbb R)$ est un anneau intègre.", false, "Faux : $\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}^2 = 0$."],
  ["Les sous-groupes de $(\\mathbb Z, +)$ sont les $n\\mathbb Z$.", true, "Vrai : on prend le plus petit élément $> 0$ et on fait une division euclidienne."],
  ["$\\mathbb Z[i]^\\times = \\{\\pm1, \\pm i\\}$.", true, "Vrai : la norme $a^2 + b^2$ doit valoir $1$."],
  ["Un corps est intègre.", true, "Vrai : si $ab = 0$ et $a\\neq0$, on multiplie par $a^{-1}$."]
];
/* Probabilités : approximation de la binomiale par Poisson */
function mlPoisApp(host) {
  let n = 20, lam = 3;
  const draw = () => {
    const p = lam / n, K = Math.max(8, Math.ceil(lam + 4 * Math.sqrt(lam))), B = [], Pz = []; let f = Math.exp(-lam), dmax = 0;
    for (let k = 0; k <= K; k++) { B.push(k <= n ? binom(n, k) * p ** k * (1 - p) ** (n - k) : 0); Pz.push(f); f *= lam / (k + 1); dmax = Math.max(dmax, Math.abs(B[k] - Pz[k])); }
    const mx = Math.max(...B, ...Pz), W = 520, H = 220, bw = (W - 60) / (K + 1), X = k => 40 + k * bw, Y = v => H - 25 - v / mx * (H - 45);
    host.innerHTML = `<p class="mlt">$\\mathcal B(n, \\frac\\lambda n)$ se rapproche de $\\mathcal P(\\lambda)$</p><div class="rmctl"><label class="rmn">$n = ${n}$ <input type="range" min="5" max="200" value="${n}" data-n aria-label="n"></label><label class="rmn">$\\lambda = ${lam.toFixed(1).replace(".", "{,}")}$ <input type="range" min="0.5" max="8" step="0.5" value="${lam}" data-l aria-label="lambda"></label></div><svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Comparaison binomiale Poisson">${B.map((v, k) => `<rect x="${(X(k) + bw * 0.15).toFixed(1)}" y="${Y(v).toFixed(1)}" width="${(bw * 0.7).toFixed(1)}" height="${(H - 25 - Y(v)).toFixed(1)}" fill="#2B5BD7" opacity=".75"/>`).join("")}${Pz.map((v, k) => `<circle cx="${(X(k) + bw / 2).toFixed(1)}" cy="${Y(v).toFixed(1)}" r="4" fill="#D4503B"/>`).join("")}${B.map((_, k) => k % (K > 16 ? 2 : 1) ? "" : `<text x="${(X(k) + bw / 2).toFixed(1)}" y="${H - 8}" class="tx" text-anchor="middle">${k}</text>`).join("")}</svg><p class="mlcalc">$$\\max_k\\big|P(X_n = k) - e^{-\\lambda}\\tfrac{\\lambda^k}{k!}\\big|\\approx${dmax.toFixed(4).replace(".", "{,}")}$$</p><p class="mlnote">Barres bleues : la binomiale $\\mathcal B(n, p)$ avec $p = \\frac\\lambda n = ${p.toFixed(3).replace(".", "{,}")}$. Points rouges : la loi de Poisson. Augmente $n$ : l'écart tend vers $0$.</p>`;
    $("[data-n]", host).addEventListener("input", e => { n = +e.target.value; draw(); $("[data-n]", host).focus(); });
    $("[data-l]", host).addEventListener("input", e => { lam = +e.target.value; draw(); $("[data-l]", host).focus(); });
    typeset(host);
  };
  draw();
}
/* Probabilités : loi faible des grands nombres, simulation */
function mlLfgn(host) {
  let p = 0.5, N = 2000, paths = [];
  const sim = () => { paths = [0, 1, 2].map(() => { let s = 0; const f = []; for (let i = 1; i <= N; i++) { s += Math.random() < p ? 1 : 0; f.push(s / i); } return f; }); };
  const draw = () => {
    const W = 520, H = 240, X = i => 40 + Math.log(i) / Math.log(N) * (W - 60), Y = v => H - 25 - v * (H - 45), eps = 0.05, cols = ["#2B5BD7", "#1F8A5B", "#7A4CC2"];
    const band = `<rect x="40" y="${Y(Math.min(1, p + eps))}" width="${W - 60}" height="${Y(Math.max(0, p - eps)) - Y(Math.min(1, p + eps))}" fill="rgba(194,124,0,.15)"/>`;
    const lines = paths.map((f, j) => `<path d="${f.map((v, i) => `${i ? "L" : "M"}${X(i + 1).toFixed(1)},${Y(v).toFixed(1)}`).join("")}" fill="none" stroke="${cols[j]}" stroke-width="1.6"/>`).join("");
    const bound = Math.min(1, p * (1 - p) / (N * eps * eps));
    host.innerHTML = `<p class="mlt">La fréquence de succès se stabilise</p><div class="rmctl"><label class="rmn">$p = ${p.toFixed(2).replace(".", "{,}")}$ <input type="range" min="0.05" max="0.95" step="0.05" value="${p}" data-p aria-label="p"></label><button type="button" class="btn btn-ghost btn-sm" data-s>Relancer</button></div><svg class="rmsvg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Fréquences simulées">${band}<line x1="40" x2="${W - 20}" y1="${Y(p)}" y2="${Y(p)}" stroke="#D4503B" stroke-width="1.5"/>${lines}<text x="40" y="${H - 8}" class="tx">n = 1</text><text x="${W - 20}" y="${H - 8}" class="tx" text-anchor="end">n = ${N}</text></svg><p class="mlnote">Trois simulations de $\\frac{S_n}n$ (échelle logarithmique en $n$). La bande orange est $[p - 0{,}05,\\ p + 0{,}05]$. Bienaymé-Tchebychev garantit, pour $n = ${N}$ : $P\\big(\\big|\\frac{S_n}n - p\\big|\\geq0{,}05\\big)\\leq\\frac{p(1 - p)}{n\\varepsilon^2}\\approx${bound.toFixed(3).replace(".", "{,}")}$.</p>`;
    $("[data-p]", host).addEventListener("input", e => { p = +e.target.value; sim(); draw(); $("[data-p]", host).focus(); });
    $("[data-s]", host).addEventListener("click", () => { sim(); draw(); });
    typeset(host);
  };
  sim(); draw();
}
const QPD = [
  ["Si $X\\sim\\mathcal G(p)$, alors $E(X) = \\frac1p$.", true, "Vrai : $\\sum kq^{k-1}p = \\frac p{(1 - q)^2}$."],
  ["Si $X\\sim\\mathcal P(\\lambda)$, $V(X) = \\lambda^2$.", false, "Faux : $V(X) = \\lambda$, comme l'espérance."],
  ["Un événement de probabilité nulle est impossible.", false, "Faux : « que des faces » à l'infini a une probabilité nulle mais n'est pas vide."],
  ["$G_{X+Y} = G_XG_Y$ pour toutes variables.", false, "Faux : il faut l'indépendance."],
  ["Toute variable discrète admet une espérance.", false, "Faux : $P(X = n) = \\frac1{n(n + 1)}$ donne $\\sum nP(X = n) = +\\infty$."],
  ["La somme de deux Poisson indépendantes est une Poisson.", true, "Vrai : $\\mathcal P(\\lambda) + \\mathcal P(\\mu) = \\mathcal P(\\lambda + \\mu)$."],
  ["La loi géométrique est sans mémoire.", true, "Vrai : $P_{(X > n)}(X > n + k) = P(X > k)$."]
];
/* EV / AL : générateur de matrices 3x3 de rang donné */
const genRank = () => { const r = [1, 2, 2, 2, 3][rnd(0, 4)], R = () => [rnd(-2, 2), rnd(-2, 2), rnd(-2, 2)], cr = (u, v) => [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]], nz = v => v.some(x => x);
  let r1, r2, r3, a = 0, b = 0;
  if (r === 3) { do { r1 = R(); r2 = R(); r3 = R(); } while (cr(r1, r2)[0] * r3[0] + cr(r1, r2)[1] * r3[1] + cr(r1, r2)[2] * r3[2] === 0); }
  else if (r === 2) { do { r1 = R(); r2 = R(); } while (!nz(cr(r1, r2))); a = rnd(-1, 2); b = rnd(-1, 2); if (!a && !b) a = 1; r3 = r1.map((x, i) => a * x + b * r2[i]); }
  else { do { r1 = R(); } while (!nz(r1)); a = rnd(-2, 2); b = rnd(-2, 2); r2 = r1.map(x => a * x); r3 = r1.map(x => b * x); }
  return { r, M: [r1, r2, r3], a, b, cr };
};
const vt = v => `(${v.join(", ")})`, red = v => { const g = v.reduce((s, x) => gcdi(s, Math.abs(x)), 0) || 1; let w = v.map(x => x / g); if (w.find(x => x) < 0) w = w.map(x => -x); return w; };
function mlRangFam(host) {
  const build = ({ r, M, a, b, cr }) => {
    const [u1, u2, u3] = M, s = [`$$u_1 = ${vt(u1)},\\quad u_2 = ${vt(u2)},\\quad u_3 = ${vt(u3)}$$`];
    s.push(`<p class="mlstep">1. Rappel : $\\operatorname{rg} = \\dim\\operatorname{Vect}$. Libre $\\iff$ rang $= 3$. On cherche des relations de dépendance.</p>`);
    if (r === 3) { const d = u1[0] * (u2[1] * u3[2] - u2[2] * u3[1]) - u1[1] * (u2[0] * u3[2] - u2[2] * u3[0]) + u1[2] * (u2[0] * u3[1] - u2[1] * u3[0]); s.push(`<p class="mlstep">2. Le déterminant des trois vecteurs (règle de Sarrus) vaut $${d}\\neq0$ : aucune relation.</p>`); s.push(`<p class="mlstep">3. Conclusion :</p>$$\\cG{\\operatorname{rg} = 3,\\ \\text{famille libre, base de}\\ \\mathbb R^3}$$`); }
    else if (r === 2) { s.push(`<p class="mlstep">2. $u_1$ et $u_2$ ne sont pas colinéaires (produit vectoriel $${vt(cr(u1, u2))}\\neq0$).</p>`); s.push(`<p class="mlstep">3. Une relation : $u_3 = ${csum([ctp(a, "u_1"), ctp(b, "u_2")])}$ (vérifie coordonnée par coordonnée).</p>`); s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{\\operatorname{rg} = 2,\\ \\text{famille liée, elle engendre un plan}}$$`); }
    else { s.push(`<p class="mlstep">2. Des relations : $u_2 = ${csum([ctp(a, "u_1")])}$ et $u_3 = ${csum([ctp(b, "u_1")])}$.</p>`); s.push(`<p class="mlstep">3. Conclusion :</p>$$\\cG{\\operatorname{rg} = 1,\\ \\text{tout est sur la droite}\\ \\mathbb R\\,${vt(u1)}}$$`); }
    return s;
  };
  stepLab(host, "Rang d'une famille de trois vecteurs", genRank, build);
}
function mlKerIm(host) {
  const build = ({ r, M, a, b, cr }) => {
    const mx = `\\begin{pmatrix}${M.map(x => x.join("&")).join("\\\\")}\\end{pmatrix}`, s = [`$$A = ${mx},\\qquad f(X) = AX$$`];
    s.push(`<p class="mlstep">1. Rappel : $\\ker f$ = solutions de $AX = 0$ ; $\\operatorname{Im}f$ = Vect des colonnes ; $3 = \\dim\\ker f + \\operatorname{rg}f$.</p>`);
    const eq = row => fsum([[row[0], "x"], [row[1], "y"], [row[2], "z"]]);
    if (r === 3) { s.push(`<p class="mlstep">2. Les lignes sont indépendantes ($\\det A\\neq0$) : le seul vecteur solution de $AX = 0$ est $0$.</p>`); s.push(`<p class="mlstep">3. Conclusion :</p>$$\\cG{\\ker f = \\{0\\},\\ \\operatorname{Im}f = \\mathbb R^3,\\ \\operatorname{rg}f = 3}$$`); }
    else if (r === 2) { const u = red(cr(M[0], M[1])), n = red([a, b, -1]);
      s.push(`<p class="mlstep">2. Une relation entre les lignes : $L_3 = ${csum([ctp(a, "L_1"), ctp(b, "L_2")])}$. Le système $AX = 0$ se réduit à :</p>$$\\left\\{\\begin{aligned}${eq(M[0])} &= 0\\\\${eq(M[1])} &= 0\\end{aligned}\\right.$$`);
      s.push(`<p class="mlstep">3. Le noyau : une droite, dirigée par $\\cR{u = ${vt(u)}}$ (contrôle : $Au = 0$).</p>`);
      s.push(`<p class="mlstep">4. L'image : $\\operatorname{rg}f = 3 - 1 = 2$, un plan. La relation $L_3 = ${csum([ctp(a, "L_1"), ctp(b, "L_2")])}$ donne son équation : $Y = (Y_1, Y_2, Y_3)\\in\\operatorname{Im}f\\iff ${csum([ctp(n[0], "Y_1"), ctp(n[1], "Y_2"), ctp(n[2], "Y_3")])} = 0$.</p>`);
      s.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{\\ker f = \\mathbb R\\,${vt(u)},\\quad\\operatorname{Im}f:\\ ${csum([ctp(n[0], "Y_1"), ctp(n[1], "Y_2"), ctp(n[2], "Y_3")])} = 0}$$`); }
    else { const c = red([1, a, b]);
      s.push(`<p class="mlstep">2. Toutes les lignes sont proportionnelles à $L_1$ : $AX = 0\\iff ${eq(M[0])} = 0$, un plan.</p>`);
      s.push(`<p class="mlstep">3. L'image : chaque colonne est proportionnelle à $${vt(c)}$, donc $\\operatorname{rg}f = 1 = 3 - 2$.</p>`);
      s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{\\ker f:\\ ${eq(M[0])} = 0,\\quad\\operatorname{Im}f = \\mathbb R\\,${vt(c)}}$$`); }
    return s;
  };
  stepLab(host, "Noyau et image d'une matrice $3\\times3$", genRank, build);
}
const QEV = [
  ["$\\{(x, y),\\ x + y = 1\\}$ est un sous-espace vectoriel de $\\mathbb R^2$.", false, "Faux : $(0, 0)$ n'y est pas."],
  ["Trois vecteurs deux à deux non colinéaires forment une famille libre.", false, "Faux : $(1, 0), (0, 1), (1, 1)$."],
  ["Dans $\\mathbb R^3$, trois vecteurs libres forment une base.", true, "Vrai : $3$ vecteurs libres en dimension $3$."],
  ["$\\dim\\mathbb R_n[X] = n$.", false, "Faux : $n + 1$ (base $1, X, \\dots, X^n$)."],
  ["Deux plans de $\\mathbb R^3$ ont toujours une droite en commun.", true, "Vrai : Grassmann donne $\\dim(P_1\\cap P_2)\\geq1$."],
  ["La réunion de deux sous-espaces est un sous-espace.", false, "Faux, sauf si l'un contient l'autre."]
];
const QAL = [
  ["Pour tout $f\\in\\mathcal L(E)$ en dimension finie, $E = \\ker f\\oplus\\operatorname{Im}f$.", false, "Faux : $f(x, y) = (y, 0)$ a $\\ker f = \\operatorname{Im}f$."],
  ["Un endomorphisme injectif d'un espace de dimension finie est bijectif.", true, "Vrai : théorème du rang."],
  ["$P\\mapsto P'$ est injective sur $\\mathbb K[X]$.", false, "Faux : les constantes sont dans le noyau."],
  ["Si $p^2 = p$, alors $E = \\ker p\\oplus\\operatorname{Im}p$.", true, "Vrai : $x = (x - p(x)) + p(x)$."],
  ["$f\\circ g = 0\\iff\\operatorname{Im}g\\subset\\ker f$.", true, "Vrai : $f(g(x)) = 0$ pour tout $x$."],
  ["Un hyperplan de $\\mathbb R^4$ est de dimension $3$.", true, "Vrai : noyau d'une forme non nulle, $4 - 1$."]
];
/* Convexité : cordes et tangentes */
function mlCordes(host) {
  const F = [
    { t: "e^x", f: Math.exp, d: Math.exp, r: [-2, 2], k: "convexe" },
    { t: "x^2", f: x => x * x, d: x => 2 * x, r: [-2, 2], k: "convexe" },
    { t: "\\ln x", f: Math.log, d: x => 1 / x, r: [0.2, 4], k: "concave" },
    { t: "\\sin x", f: Math.sin, d: Math.cos, r: [0, Math.PI], k: "concave" },
    { t: "x^3", f: x => x ** 3, d: x => 3 * x * x, r: [-1.5, 1.5], k: "ni l'un ni l'autre sur cet intervalle" }
  ];
  let fi = 0, ua = 0.2, ub = 0.85, lam = 0.5;
  const draw = () => {
    const g = F[fi], [r0, r1] = g.r, a = r0 + (r1 - r0) * ua, b = r0 + (r1 - r0) * ub, xl = lam * a + (1 - lam) * b, ys = []; for (let i = 0; i <= 200; i++) ys.push(g.f(r0 + (r1 - r0) * i / 200));
    const y0 = Math.min(...ys), y1 = Math.max(...ys), pad = 0.15 * (y1 - y0);
    const chord = (X, Y) => { const ga = g.f(a), gb = g.f(b), ta = x => g.f(a) + g.d(a) * (x - a); return `<line x1="${X(a)}" y1="${Y(ga)}" x2="${X(b)}" y2="${Y(gb)}" stroke="#D4503B" stroke-width="2"/><line x1="${X(r0)}" y1="${Y(ta(r0))}" x2="${X(r1)}" y2="${Y(ta(r1))}" stroke="#C27C00" stroke-dasharray="5 4"/><circle cx="${X(xl)}" cy="${Y(g.f(xl))}" r="4.5" fill="#2B5BD7"/><circle cx="${X(xl)}" cy="${Y(lam * ga + (1 - lam) * gb)}" r="4.5" fill="#D4503B"/>`; };
    const lhs = g.f(xl), rhs = lam * g.f(a) + (1 - lam) * g.f(b), cm = v => v.toFixed(3).replace(".", "{,}");
    host.innerHTML = `<p class="mlt">Corde au-dessus, tangente en dessous</p><div class="rmctl"><div class="mlseg">${F.map((h, i) => `<button type="button" data-f="${i}" aria-pressed="${i === fi}">$${h.t}$</button>`).join("")}</div></div><div class="rmctl"><label class="rmn">$a$ <input type="range" min="0" max="1" step="0.01" value="${ua}" data-a aria-label="a"></label><label class="rmn">$b$ <input type="range" min="0" max="1" step="0.01" value="${ub}" data-b aria-label="b"></label><label class="rmn">$\\lambda = ${lam.toFixed(2).replace(".", "{,}")}$ <input type="range" min="0" max="1" step="0.01" value="${lam}" data-l aria-label="lambda"></label></div>${plotSvg([{ f: g.f, c: "#2B5BD7", w: 2.5 }], r0, r1, y0 - pad, y1 + pad, chord)}<p class="mlcalc">$$f(\\lambda a + (1 - \\lambda)b) = ${cm(lhs)}\\quad${lhs <= rhs + 1e-12 ? "\\leq" : "\\gt"}\\quad\\lambda f(a) + (1 - \\lambda)f(b) = ${cm(rhs)}$$</p><p class="mlnote">En rouge la corde entre $a$ et $b$, en orange pointillé la tangente en $a$. $${g.t}$ est ${g.k}. Point bleu : la courbe ; point rouge : la corde, au même abscisse.</p>`;
    $$("[data-f]", host).forEach(btn => btn.addEventListener("click", () => { fi = +btn.dataset.f; draw(); }));
    [["a", v => ua = v], ["b", v => ub = v], ["l", v => lam = v]].forEach(([k, set]) => $(`[data-${k}]`, host).addEventListener("input", e => { set(+e.target.value); draw(); $(`[data-${k}]`, host).focus(); }));
    typeset(host);
  };
  draw();
}
const QCVX = [
  ["Une fonction convexe est au-dessus de ses cordes.", false, "Faux : en dessous de ses cordes, au-dessus de ses tangentes."],
  ["$\\ln$ est concave sur $]0, +\\infty[$.", true, "Vrai : $\\ln'' = -\\frac1{x^2} \\lt 0$."],
  ["$e^x\\geq1 + x$ pour tout réel $x$.", true, "Vrai : tangente en $0$ d'une fonction convexe."],
  ["$\\sin$ est concave sur $\\mathbb R$.", false, "Faux : seulement sur $[0, \\pi]$ (modulo $2\\pi$)."],
  ["Une fonction convexe et majorée sur $\\mathbb R$ est constante.", true, "Vrai : lemme des pentes."],
  ["Si $f$ est convexe et $g$ convexe, $g\\circ f$ est convexe.", false, "Faux en général : il faut $g$ croissante."]
];
/* Ensembles et applications : images par x -> x^2 */
const sqT = n => { const r = Math.round(Math.sqrt(n)); return r * r === n ? String(r) : `\\sqrt{${n}}`; };
function mlImgSq(host) {
  const gen = () => { let a = rnd(-4, 3), b = rnd(a + 1, 4), c = rnd(-3, 8), d = rnd(c + 1, 9); return { a, b, c, d }; };
  const build = ({ a, b, c, d }) => {
    const s = [`<p class="mlnote">$f(x) = x^2$ sur $\\mathbb R$. Calculer $f([${a}, ${b}])$ et $f^{-1}([${c}, ${d}])$.</p>`];
    s.push(`<p class="mlstep">1. Rappel : $f(A)$ se lit sur les variations ($f$ décroît sur $\\mathbb R_-$, croît sur $\\mathbb R_+$) ; $f^{-1}(B)$ s'obtient en résolvant $x^2\\in B$.</p>`);
    let im;
    if (a >= 0) { s.push(`<p class="mlstep">2. $[${a}, ${b}]\\subset\\mathbb R_+$ : $f$ croît de $f(${a}) = ${a * a}$ à $f(${b}) = ${b * b}$.</p>`); im = `[${a * a}, ${b * b}]`; }
    else if (b <= 0) { s.push(`<p class="mlstep">2. $[${a}, ${b}]\\subset\\mathbb R_-$ : $f$ décroît de $f(${a}) = ${a * a}$ à $f(${b}) = ${b * b}$.</p>`); im = `[${b * b}, ${a * a}]`; }
    else { const M = Math.max(a * a, b * b); s.push(`<p class="mlstep">2. Sur $[${a}, 0]$, $f$ décroît de $f(${a}) = ${a * a}$ à $0$ ; sur $[0, ${b}]$, elle croît de $0$ à $f(${b}) = ${b * b}$. Réunion : $[0, ${a * a}]\\cup[0, ${b * b}] = [0, ${M}]$.</p>`); im = `[0, ${M}]`; }
    let pre;
    if (d < 0) { s.push(`<p class="mlstep">3. $x^2\\geq0 > ${d}$ pour tout $x$ : aucun réel ne vérifie $x^2\\leq${d}$.</p>`); pre = "\\varnothing"; }
    else if (c <= 0) { s.push(`<p class="mlstep">3. ${c < 0 ? `$x^2\\geq${c}$ est toujours vrai ($x^2\\geq0 > ${c}$), il reste` : "$x^2\\geq0$ est toujours vrai, il reste"} $x^2\\leq${d}\\iff|x|\\leq${sqT(d)}$ (racine croissante, $\\sqrt{x^2} = |x|$).</p>`); pre = d === 0 ? "\\{0\\}" : `[-${sqT(d)}, ${sqT(d)}]`; }
    else { s.push(`<p class="mlstep">3. $${c}\\leq x^2\\leq${d}\\iff${sqT(c)}\\leq|x|\\leq${sqT(d)}$ (racine croissante, $\\sqrt{x^2} = |x|$). Si $x\\geq0$ : $${sqT(c)}\\leq x\\leq${sqT(d)}$ ; si $x \\lt 0$ : $-${sqT(d)}\\leq x\\leq-${sqT(c)}$.</p>`); pre = `[-${sqT(d)}, -${sqT(c)}]\\cup[${sqT(c)}, ${sqT(d)}]`; }
    s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{f([${a}, ${b}]) = ${im},\\qquad f^{-1}([${c}, ${d}]) = ${pre}}$$`);
    return s;
  };
  stepLab(host, "Image directe et image réciproque par $x\\mapsto x^2$", gen, build);
}
/* Ensembles et applications : bijection homographique */
function mlHomog(host) {
  const gen = () => { let a = 0, d = 0, b = 0; while (!a) a = rnd(-3, 3); while (!d) d = rnd(-4, 4); do b = rnd(-5, 5); while (b === a * d); return { a, b, d }; };
  const build = ({ a, b, d }) => {
    const num = csum([ctp(a, "x"), ctp(b)]), den = csum(["x", ctp(d)]), ad = a * d;
    const s = [`<p class="mlnote">$f:\\mathbb R\\setminus\\{${-d}\\}\\to\\mathbb R\\setminus\\{${a}\\}$, $f(x) = \\dfrac{${num}}{${den}}$. Montrer que $f$ est bijective et donner $f^{-1}$.</p>`];
    s.push(`<p class="mlstep">1. Rappel : on résout $f(x) = y$ pour $y$ fixé ; une seule solution dans le départ donne la bijectivité et $f^{-1}$.</p>`);
    s.push(`<p class="mlstep">2. Bien définie : si $f(x) = ${a}$, alors $${num} = ${a}(${den}) = ${csum([ctp(a, "x"), ctp(ad)])}$, donc $${b} = ${ad}$ : faux. Donc $f(x)\\neq${a}$.</p>`);
    s.push(`<p class="mlstep">3. Soit $y\\neq${a}$. On multiplie par $${den}\\neq0$ :</p>$$y(${den}) = ${num}\\iff ${csum(["yx", ctp(d, "y")])} = ${num}\\iff ${csum(["yx", ctp(-a, "x")])} = ${csum([ctp(b), ctp(-d, "y")])}\\iff x\\,(${csum(["y", ctp(-a)])}) = ${csum([ctp(b), ctp(-d, "y")])}\\iff x = \\frac{${csum([ctp(b), ctp(-d, "y")])}}{${csum(["y", ctp(-a)])}}.$$`);
    s.push(`<p class="mlstep">4. Dans le départ ? Si $x = ${-d}$ : $${csum([ctp(b), ctp(-d, "y")])} = ${-d}(${csum(["y", ctp(-a)])}) = ${csum([ctp(-d, "y"), ctp(ad)])}$, donc $${b} = ${ad}$ : faux. Donc $x\\neq${-d}$.</p>`);
    const x0 = 1 - d, y0 = Fr(a * x0 + b, x0 + d), xb = fdiv(fadd(Fr(b), fmul(Fr(-d), y0)), fadd(y0, Fr(-a)));
    s.push(`<p class="mlstep">5. Conclusion :</p>$$\\cG{f\\ \\text{bijective},\\quad f^{-1}(y) = \\frac{${csum([ctp(b), ctp(-d, "y")])}}{${csum(["y", ctp(-a)])}}}$$<p class="mlnote">Contrôle : $f(${x0}) = \\frac{${a}\\times(${x0}) + (${b})}{${x0} + (${d})} = \\frac{${a * x0 + b}}{${x0 + d}} = ${ftex(y0)}$ et $f^{-1}(${ftex(y0)}) = \\frac{${b} - (${d})\\times(${ftex(y0)})}{${ftex(y0)} - (${a})} = ${ftex(xb)}$ : on retrouve $${x0}$.</p>`);
    return s;
  };
  stepLab(host, "Une bijection et sa réciproque", gen, build);
}
/* Ensembles et applications : propriétés d'une relation */
const RELS = [
  { e: "Sur $\\mathbb Z$ : $x\\,\\mathcal R\\,y\\iff 3\\mid x - y$.", r: "$3\\mid x - x = 0$ : oui.", s: "$y - x = -(x - y)$ : oui.", a: "Non : $0\\,\\mathcal R\\,3$ et $3\\,\\mathcal R\\,0$ mais $0\\neq3$.", t: "$x - z = (x - y) + (y - z)$, somme de multiples de $3$ : oui.", c: "relation d'équivalence (classes $\\overline0, \\overline1, \\overline2$)" },
  { e: "Sur $\\mathbb R$ : $x\\,\\mathcal R\\,y\\iff x\\leq y$.", r: "$x\\leq x$ : oui.", s: "Non : $0\\leq1$ mais $1\\not\\leq0$.", a: "$x\\leq y$ et $y\\leq x$ donnent $x = y$ : oui.", t: "$x\\leq y\\leq z$ : oui.", c: "relation d'ordre total" },
  { e: "Sur $\\mathbb R$ : $x\\,\\mathcal R\\,y\\iff x \\lt y$.", r: "Non : $0 \\lt 0$ est faux.", s: "Non : $0 \\lt 1$ mais $1\\not \\lt 0$.", a: "Oui (jamais $x \\lt y$ et $y \\lt x$ en même temps).", t: "$x \\lt y \\lt z$ : oui.", c: "ni équivalence ni ordre (pas réflexive)" },
  { e: "Sur $\\mathbb R$ : $x\\,\\mathcal R\\,y\\iff|x| = |y|$.", r: "$|x| = |x|$ : oui.", s: "Oui, l'égalité est symétrique.", a: "Non : $1\\,\\mathcal R\\,(-1)$ et $(-1)\\,\\mathcal R\\,1$ mais $1\\neq-1$.", t: "Oui, l'égalité est transitive.", c: "relation d'équivalence (classes $\\{a, -a\\}$)" },
  { e: "Sur $\\mathcal P(E)$ : $A\\,\\mathcal R\\,B\\iff A\\subset B$.", r: "$A\\subset A$ : oui.", s: "Non (si $E\\neq\\varnothing$) : $\\varnothing\\subset E$ mais $E\\not\\subset\\varnothing$.", a: "Double inclusion : oui.", t: "Oui : $A\\subset B\\subset C$.", c: "relation d'ordre partiel (si $\\operatorname{Card}E\\geq2$)" },
  { e: "Sur $\\mathbb R$ : $x\\,\\mathcal R\\,y\\iff|x - y|\\leq1$.", r: "$|0|\\leq1$ : oui.", s: "$|y - x| = |x - y|$ : oui.", a: "Non : $0\\,\\mathcal R\\,1$ et $1\\,\\mathcal R\\,0$.", t: "Non : $0\\,\\mathcal R\\,1$, $1\\,\\mathcal R\\,2$ mais $|0 - 2| = 2 > 1$.", c: "ni équivalence ni ordre (pas transitive)" },
  { e: "Sur $\\mathbb N^*$ : $p\\,\\mathcal R\\,q\\iff\\exists n\\in\\mathbb N^*,\\ q = p^n$.", r: "$p = p^1$ : oui.", s: "Non : $2\\,\\mathcal R\\,4$ ($4 = 2^2$) mais $4\\,\\mathcal R\\,2$ est faux.", a: "Si $q = p^n$ et $p = q^m$, $p = p^{nm}$ ; si $p\\geq2$, $nm = 1$, $n = 1$, $q = p$ ; si $p = 1$, $q = 1$ : oui.", t: "$r = q^m = p^{nm}$ : oui.", c: "relation d'ordre partiel ($2$ et $3$ non comparables)" }
];
function mlRelProp(host) {
  const gen = () => rnd(0, RELS.length - 1);
  const build = i => { const R = RELS[i]; return [`<p class="mlnote">${R.e} Quelles propriétés ?</p>`, `<p class="mlstep">1. Réflexive : ${R.r}</p>`, `<p class="mlstep">2. Symétrique : ${R.s}</p>`, `<p class="mlstep">3. Antisymétrique : ${R.a}</p>`, `<p class="mlstep">4. Transitive : ${R.t}</p>`, `<p class="mlstep">5. Conclusion : <span class="kG">${R.c}</span>.</p>`]; };
  stepLab(host, "Reconnaître une relation", gen, build);
}
const QENS = [
  ["$\\{a\\}\\in\\mathcal P(E)$ pour tout $a\\in E$.", true, "Vrai : $\\{a\\}\\subset E$, donc c'est une partie de $E$."],
  ["La négation de « $\\forall x > 0,\\ f(x) > 0$ » est « $\\exists x\\leq0,\\ f(x)\\leq0$ ».", false, "Faux : on garde le domaine, « $\\exists x > 0,\\ f(x)\\leq0$ »."],
  ["Pour toute application $f$, $f(A\\cap B) = f(A)\\cap f(B)$.", false, "Faux : seulement $\\subset$ ; $x\\mapsto x^2$, $A = \\{-1\\}$, $B = \\{1\\}$ donne $\\varnothing$ et $\\{1\\}$."],
  ["Pour toute application $f$, $f^{-1}(A\\cap B) = f^{-1}(A)\\cap f^{-1}(B)$.", true, "Vrai : l'image réciproque respecte toutes les opérations."],
  ["Si $g\\circ f$ est injective, alors $g$ est injective.", false, "Faux : c'est $f$ qui l'est. Contre-exemple : $f(0) = 0$ sur $\\{0\\}$, $g(x) = x^2$."],
  ["Si $f\\circ f = \\operatorname{id}_E$, alors $f$ est bijective.", true, "Vrai : $f^{-1} = f$."],
  ["Une relation non symétrique est antisymétrique.", false, "Faux : $|x - y|\\leq1$ sur $\\mathbb R$ n'est pas antisymétrique, et une relation peut n'être ni l'une ni l'autre."],
  ["$(g\\circ f)^{-1} = f^{-1}\\circ g^{-1}$ pour $f, g$ bijectives.", true, "Vrai : on défait d'abord $g$, la dernière appliquée."]
];
/* Séries entières : rayon par d'Alembert */
function mlRayonDA(host) {
  const gen = () => { const t = rnd(0, 4); return { t, p: rnd(0, 3), c: rnd(2, 5), m: rnd(1, 2), inv: rnd(0, 1) }; };
  const Rt = (c, m, inv) => { const r = m === 1 ? String(c) : sqT(c); return inv ? r : `\\frac1{${r}}`; };
  const build = ({ t, p, c, m, inv }) => {
    const np = p ? (p === 1 ? "n" : `n^{${p}}`) : "", zm = m === 1 ? "z^n" : `z^{${m}n}`, s = [];
    if (t <= 2) {
      const a = inv ? `\\frac{${np || 1}}{${c}^n}` : `${np}${c}^n`;
      s.push(`<p class="mlnote">Rayon de convergence de $\\sum ${a}\\,${zm}$.</p>`);
      s.push(`<p class="mlstep">1. Rappel : ${m === 1 ? "coefficients non nuls : $R = \\frac1\\ell$ avec $\\ell = \\lim\\big|\\frac{a_{n+1}}{a_n}\\big|$." : "série lacunaire (les coefficients des autres puissances sont nuls) : d'Alembert sur $u_n = |a_n|\\,|z|^{2n}$, $z\\neq0$ fixé."}</p>`);
      const q = `${p ? `\\Big(\\frac{n + 1}n\\Big)^{${p}}\\times` : ""}${inv ? `\\frac1{${c}}` : c}${m === 1 ? "" : "\\,|z|^2"}`;
      s.push(`<p class="mlstep">2. Le quotient : ${p ? `$(n + 1)^{${p}}$ sur $n^{${p}}$ donne $\\big(\\frac{n + 1}n\\big)^{${p}}$, et ` : ""}$${c}^{n+1}$ sur $${c}^n$ donne $${inv ? `\\frac1{${c}}` : c}$ :</p>$$\\frac{${m === 1 ? "|a_{n+1}|" : "u_{n+1}"}}{${m === 1 ? "|a_n|" : "u_n"}} = ${q}\\longrightarrow${inv ? `\\frac1{${c}}` : c}${m === 1 ? "" : "\\,|z|^2"}$$`);
      if (m === 2) s.push(`<p class="mlstep">3. On lit : convergence si $${inv ? `\\frac{|z|^2}{${c}}` : `${c}|z|^2`} \\lt 1\\iff|z|^2 \\lt ${inv ? c : `\\frac1{${c}}`}\\iff|z| \\lt ${Rt(c, 2, inv)}$ ; divergence grossière au-delà.</p>`);
      else s.push(`<p class="mlstep">3. On inverse la limite : $R = \\frac1\\ell = ${inv ? c : `\\frac1{${c}}`}$${p ? ` (le facteur $${np}$ ne change pas le rayon)` : ""}.</p>`);
      s.push(`<p class="mlstep">4. Conclusion :</p>$$\\cG{R = ${Rt(c, m, inv)}}$$`);
    } else {
      const a = inv ? `\\frac{n!}{${c}^n}` : `\\frac{${c}^n}{n!}`;
      s.push(`<p class="mlnote">Rayon de convergence de $\\sum ${a}\\,z^n$.</p>`);
      s.push(`<p class="mlstep">1. Rappel : $R = \\frac1\\ell$, avec $\\frac10 = +\\infty$ et $\\frac1{+\\infty} = 0$.</p>`);
      s.push(`<p class="mlstep">2. Le quotient : $(n + 1)! = (n + 1)\\,n!$, donc</p>$$\\frac{a_{n+1}}{a_n} = ${inv ? `\\frac{(n + 1)!}{${c}^{n+1}}\\times\\frac{${c}^n}{n!} = \\frac{n + 1}{${c}}\\longrightarrow+\\infty` : `\\frac{${c}^{n+1}}{(n + 1)!}\\times\\frac{n!}{${c}^n} = \\frac{${c}}{n + 1}\\longrightarrow0`}.$$`);
      s.push(`<p class="mlstep">3. Conclusion :</p>$$\\cG{R = ${inv ? "0" : "+\\infty"}}$$<p class="mlnote">${inv ? "La série ne converge qu'en $z = 0$." : `On reconnaît $e^{${c}z}$.`}</p>`);
    }
    return s;
  };
  stepLab(host, "Rayon de convergence par d'Alembert", gen, build);
}
/* Séries entières : DSE d'une fraction 1/((x-a)(x-b)) */
function mlDseFrac(host) {
  const gen = () => { let a = 0, b = 0; while (!a) a = rnd(-4, 4); while (!b || b === a) b = rnd(-4, 4); return { a, b }; };
  const build = ({ a, b }) => {
    const xa = csum(["x", ctp(-a)]), xb = csum(["x", ctp(-b)]), pw = v => v < 0 ? `(${v})` : `${v}`, k = a - b === 1 ? "" : a - b === -1 ? "-" : ftex(Fr(1, a - b));
    const s = [`<p class="mlnote">Développer en série entière $f(x) = \\dfrac1{(${xa})(${xb})}$ et donner le rayon.</p>`];
    s.push(`<p class="mlstep">1. Rappel : éléments simples, puis $\\frac1{1 - u} = \\sum u^n$ pour $|u| \\lt 1$.</p>`);
    s.push(`<p class="mlstep">2. Éléments simples : $\\frac1{${xa}} - \\frac1{${xb}} = \\frac{(${xb}) - (${xa})}{(${xa})(${xb})} = \\frac{${a - b}}{(${xa})(${xb})}$, donc</p>$$f(x) = ${k}\\Big(\\frac1{${xa}} - \\frac1{${xb}}\\Big).$$`);
    s.push(`<p class="mlstep">3. Chaque morceau : $\\frac1{x - c} = -\\frac1c\\times\\frac1{1 - x/c} = -\\sum_{n\\geq0}\\frac{x^n}{c^{n+1}}$ pour $|x| \\lt |c|$. Avec $c = ${a}$ puis $c = ${b}$ :</p>$$\\frac1{${xa}} = -\\sum_{n\\geq0}\\frac{x^n}{${pw(a)}^{n+1}}\\ (|x| \\lt ${Math.abs(a)}),\\qquad\\frac1{${xb}} = -\\sum_{n\\geq0}\\frac{x^n}{${pw(b)}^{n+1}}\\ (|x| \\lt ${Math.abs(b)}).$$`);
    s.push(`<p class="mlstep">4. On regroupe :</p>$$f(x) = \\sum_{n\\geq0}${k}\\Big(\\frac1{${pw(b)}^{n+1}} - \\frac1{${pw(a)}^{n+1}}\\Big)x^n.$$`);
    const c0 = fmul(Fr(1, a - b), fadd(Fr(1, b), Fr(-1, a))), c1 = fmul(Fr(1, a - b), fadd(Fr(1, b * b), Fr(-1, a * a)));
    s.push(`<p class="mlstep">5. Conclusion : rayon $\\min(${Math.abs(a)}, ${Math.abs(b)}) = ${Math.min(Math.abs(a), Math.abs(b))}$ (la somme converge au moins sur le plus petit des deux intervalles, et pas au-delà car $f$ n'est pas bornée près de son pôle le plus proche de $0$).</p>$$\\cG{f(x) = ${csum([ftex(c0), ctp(c1, "x")])} + \\dots}$$<p class="mlnote">Contrôle : $f(0) = \\frac1{(${-a})\\times(${-b})} = ${ftex(Fr(1, a * b))}$.</p>`);
    return s;
  };
  stepLab(host, "Développer une fraction rationnelle", gen, build);
}
const QSE = [
  ["Si $\\big|\\frac{a_{n+1}}{a_n}\\big|\\to2$, le rayon vaut $2$.", false, "Faux : $R = \\frac1\\ell = \\frac12$."],
  ["$\\sum a_nz^n$ et $\\sum n^3a_nz^n$ ont le même rayon.", true, "Vrai : un facteur polynomial ne change pas le rayon."],
  ["Sur le cercle $|z| = R$, la série diverge toujours.", false, "Faux : $\\sum\\frac{z^n}{n^2}$ converge sur tout le cercle $|z| = 1$."],
  ["La somme de deux séries de rayon $1$ a toujours le rayon $1$.", false, "Faux : seulement $R\\geq1$ ; $\\sum x^n + \\sum(-x^n)$ a un rayon infini."],
  ["Si $f(x) = \\sum a_nx^n$, alors $a_n = \\frac{f^{(n)}(0)}{n!}$.", true, "Vrai : on dérive terme à terme $n$ fois et on évalue en $0$."],
  ["Toute fonction $\\mathcal C^\\infty$ sur $\\mathbb R$ est développable en série entière en $0$.", false, "Faux : $e^{-1/x^2}$ prolongée par $0$ a une série de Taylor nulle."],
  ["$\\ln(1 + x) = \\sum_{n\\geq1}(-1)^{n-1}\\frac{x^n}n$ pour $|x| \\lt 1$.", true, "Vrai : on intègre $\\frac1{1 + t} = \\sum(-t)^n$."]
];
function mlDivEucl(host) {
  const gen = () => { let p, q, Q, R; p = rnd(-3, 3); q = rnd(-3, 3); if (!q) q = 1; Q = [rnd(1, 2), rnd(-3, 3), rnd(-3, 3)]; R = [rnd(-4, 4), rnd(-4, 4)]; return { B: [1, p, q], Q, R }; };
  const build = e => {
    const { B, Q, R } = e, A = [0, 0, 0, 0, 0];
    Q.forEach((qc, i) => B.forEach((bc, j) => { A[i + j] += qc * bc; })); A[3] += R[0]; A[4] += R[1];
    const st = [`$$A = ${ptex(A)},\\qquad B = ${ptex(B)}$$`];
    let cur = A.slice(), rows = "";
    for (let i = 0; i < 3; i++) {
      const t = cur[i], deg = 2 - i, tq = fsum([[t, deg ? (deg === 1 ? "X" : `X^{${deg}}`) : ""]]);
      const sub = B.map(b => b * t), subFull = Array(5).fill(0); sub.forEach((v, j) => subFull[i + j] = v);
      rows += `<tr><td>$${ptex(cur.slice(i))}$</td><td>$\\cR{${tq}}$</td><td>$${tq === "0" ? "0" : `${tq}\\times B = ${ptex(subFull.slice(i))}`}$</td></tr>`;
      cur = cur.map((v, j) => v - subFull[j]);
    }
    rows += `<tr><td>$${ptex(cur.slice(3))}$</td><td colspan="2">degré $\\lt2$ : on s'arrête</td></tr>`;
    st.push(`<p class="mlstep">1. On pose la division : on divise le premier terme par $X^2$, on écrit le résultat au quotient, on multiplie $B$ par ce terme et on soustrait (en rouge), puis on recommence avec le reste :</p><div class="potw">${potenceHtml(A, B).html}</div>`);
    st.push(`<p class="mlres">$$${ptex(A)} = \\left(${ptex(B)}\\right)\\left(\\cR{${ptex(Q)}}\\right)${ptex(R)[0] === "-" ? " " : " + "}${ptex(R)}$$</p><p class="mlnote">Contrôle en $X = 1$ : $A(1) = ${A.reduce((s, v) => s + v, 0)}$ et $B(1)Q(1) + R(1) = ${B.reduce((s, v) => s + v, 0)}\\times${par(Q.reduce((s, v) => s + v, 0))} + ${par(R[0] + R[1])} = ${B.reduce((s, v) => s + v, 0) * Q.reduce((s, v) => s + v, 0) + R[0] + R[1]}$</p>`);
    return st;
  };
  stepLab(host, "Division euclidienne pas à pas", gen, build);
}
const desSum = ts => ts.filter(([f]) => f.n).map(([f, den], i) => { const a = Math.abs(f.n), num = f.d === 1 ? a : a, dd = f.d === 1 ? den : `${f.d}${/^X [+-]/.test(den) ? `(${den})` : den}`; return `${f.n < 0 ? (i ? " - " : "-") : (i ? " + " : "")}\\frac{${num}}{${dd}}`; }).join("") || "0";
function mlDes(host) {
  const gen = () => {
    const dbl = rnd(0, 1); let a, b, c;
    do { a = rnd(-3, 3); b = rnd(-3, 3); c = rnd(-3, 3); } while (a === b || (!dbl && (c === a || c === b)));
    let n1, n0; do { n1 = rnd(-2, 3); n0 = rnd(-4, 4); } while (n1 * a + n0 === 0 || n1 * b + n0 === 0 || (!dbl && n1 * c + n0 === 0));
    return { dbl, a, b, c, n1, n0 };
  };
  const fx = (r, s) => `(X ${r < 0 ? "+" : "-"} ${Math.abs(r)})${s || ""}`.replace("(X - 0)", "X").replace("(X + 0)", "X"), fx1 = r => fx(r).replace(/^\((.*)\)$/, "$1");
  const build = e => {
    const { dbl, a, b, c, n1, n0 } = e, N = x => n1 * x + n0, num = fsum([[n1, "X"], [n0, ""]]);
    if (!dbl) {
      const ca = Fr(N(a), (a - b) * (a - c)), cb = Fr(N(b), (b - a) * (b - c)), cc = Fr(N(c), (c - a) * (c - b));
      let x0 = 0; while ([a, b, c].includes(x0)) x0++;
      const F0 = Fr(N(x0), (x0 - a) * (x0 - b) * (x0 - c)), S0 = fadd(fadd(fdiv(ca, Fr(x0 - a)), fdiv(cb, Fr(x0 - b))), fdiv(cc, Fr(x0 - c)));
      return [`$$F = \\frac{${num}}{\\cB{${fx(a)}${fx(b)}${fx(c)}}}$$`,
        `<p class="mlstep">1. Degré $${n1 ? 1 : 0}\\lt3$ : pas de partie entière. Trois pôles simples, donc la forme :</p>$$F = \\frac{\\cR\\alpha}{${fx1(a)}} + \\frac{\\cR\\beta}{${fx1(b)}} + \\frac{\\cR\\gamma}{${fx1(c)}}$$`,
        `<p class="mlstep">2. On cache chaque facteur et on évalue au pôle :</p>$$\\cR\\alpha = \\frac{${N(a)}}{(${a} - ${par(b)})(${a} - ${par(c)})} = ${ftex(ca)},\\qquad\\cR\\beta = \\frac{${N(b)}}{(${b} - ${par(a)})(${b} - ${par(c)})} = ${ftex(cb)},\\qquad\\cR\\gamma = \\frac{${N(c)}}{(${c} - ${par(a)})(${c} - ${par(b)})} = ${ftex(cc)}$$`,
        `<p class="mlres">$$F = \\cG{${desSum([[ca, fx1(a)], [cb, fx1(b)], [cc, fx1(c)]])}}$$</p><p class="mlnote">Contrôle en $X = ${x0}$ : $F(${x0}) = ${ftex(F0)}$ et la décomposition donne $${ftex(S0)}$</p>`];
    }
    /* pôle double en a, simple en b : F = N/((X-a)^2 (X-b)) */
    const cb = Fr(N(b), (b - a) ** 2), c2 = Fr(N(a), a - b), c1 = Fr(-cb.n, cb.d);
    let x0 = 0; while ([a, b].includes(x0)) x0++;
    const F0 = Fr(N(x0), (x0 - a) ** 2 * (x0 - b)), S0 = fadd(fadd(fdiv(c1, Fr(x0 - a)), fdiv(c2, Fr((x0 - a) ** 2))), fdiv(cb, Fr(x0 - b)));
    return [`$$F = \\frac{${num}}{\\cB{${fx(a, "^2")}${fx(b)}}}$$`,
      `<p class="mlstep">1. Pôle <b>double</b> en $${a}$ (deux termes) et pôle simple en $${b}$ :</p>$$F = \\frac{\\cR\\alpha}{${fx1(a)}} + \\frac{\\cR{\\alpha'}}{${fx(a, "^2")}} + \\frac{\\cR\\beta}{${fx1(b)}}$$`,
      `<p class="mlstep">2. Les coefficients qu'on obtient en cachant : $\\beta$, et $\\alpha'$ (la plus haute puissance) :</p>$$\\cR\\beta = \\frac{${N(b)}}{(${b} - ${par(a)})^2} = ${ftex(cb)},\\qquad\\cR{\\alpha'} = \\frac{${N(a)}}{${a} - ${par(b)}} = ${ftex(c2)}$$`,
      `<p class="mlstep">3. Pour $\\alpha$ : on multiplie par $X$ et $X\\to+\\infty$. À gauche $XF\\to0$ (degré $${n1 ? 2 : 1}$ en haut, $3$ en bas), à droite on trouve $\\alpha + \\beta$ :</p>$$0 = \\alpha + \\beta\\ \\Longrightarrow\\ \\cR{\\alpha = ${ftex(c1)}}$$`,
      `<p class="mlres">$$F = \\cG{${desSum([[c1, fx1(a)], [c2, fx(a, "^2")], [cb, fx1(b)]])}}$$</p><p class="mlnote">Contrôle en $X = ${x0}$ : $F(${x0}) = ${ftex(F0)}$ et la décomposition donne $${ftex(S0)}$</p>`];
  };
  stepLab(host, "Décomposition en éléments simples pas à pas", gen, build);
}
const QPOLY = [
  ["$\\deg(P + Q) = \\max(\\deg P, \\deg Q)$.", false, "Faux : seulement $\\leqslant$. $(X^2 + 1) + (-X^2) = 1$."],
  ["Si $P(a) = P'(a) = 0$, alors $(X - a)^2\\mid P$.", true, "Vrai : $a$ est racine d'ordre au moins $2$."],
  ["$X^2 + 1$ est irréductible dans $\\mathbb R[X]$.", true, "Vrai : degré $2$ et $\\Delta = -4\\lt0$."],
  ["Le pôle double $a$ de $F$ donne seulement un terme $\\frac c{(X - a)^2}$.", false, "Faux : il donne $\\frac{c_1}{X - a} + \\frac{c_2}{(X - a)^2}$."],
  ["Pour un pôle simple, le coefficient vaut $\\frac{P(a)}{Q'(a)}$.", true, "Vrai, et c'est très utile quand $Q$ n'est pas factorisé ($X^n - 1$)."],
  ["Dans $\\mathbb R(X)$, au-dessus de $X^2 + X + 1$, on met une constante.", false, "Faux : on met $\\alpha X + \\beta$."],
  ["Un polynôme de degré $n$ qui a $n + 1$ racines est nul.", true, "Vrai : un polynôme non nul a au plus $n$ racines."],
  ["La somme des racines de $2X^3 - 6X^2 + 1$ vaut $3$.", true, "Vrai : $\\sigma_1 = -\\frac{a_2}{a_3} = -\\frac{-6}{2} = 3$."],
  ["$\\frac{X^3}{X^2 - 1}$ se décompose sans partie entière.", false, "Faux : $\\deg3\\geqslant2$, la partie entière est $X$."],
  ["Si $P$ est scindé, $\\frac{P'}P = \\sum\\frac1{X - x_i}$.", true, "Vrai : c'est la dérivée logarithmique, racines comptées avec multiplicité."]
];

/* ---------- Labos de la Méthode « Déterminants » ---------- */
const det2 = M => M[0][0] * M[1][1] - M[0][1] * M[1][0];
const minor = (M, i, j) => M.filter((_, r) => r !== i).map(r => r.filter((_, c) => c !== j));
const detN = M => M.length === 1 ? M[0][0] : M.length === 2 ? det2(M) : M[0].reduce((s, v, j) => s + (j % 2 ? -1 : 1) * v * detN(minor(M, 0, j)), 0);
const randM = (n, a = -3, b = 5) => Array.from({ length: n }, () => Array.from({ length: n }, () => rnd(a, b)));
const par = v => v < 0 ? `(${v})` : String(v);
/* Permutations : les flèches, les cycles, la signature */
function mlPerm(host) {
  const n = 6; let p = [3, 5, 1, 2, 4, 6], sel = null;
  const cycles = () => { const seen = new Set(), out = []; for (let i = 1; i <= n; i++) { if (seen.has(i)) continue; const c = []; let k = i; while (!seen.has(k)) { seen.add(k); c.push(k); k = p[k - 1]; } if (c.length > 1) out.push(c); } return out; };
  const inv = () => { let x = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (p[i] > p[j]) x++; return x; };
  const COL = ["#2B5BD7", "#D4503B", "#1F8A5B", "#C27C00", "#7A4CC2"];
  const draw = () => {
    const cs = cycles(), N = inv(), eps = N % 2 ? -1 : 1;
    const colOf = k => { const i = cs.findIndex(c => c.includes(k)); return i < 0 ? "var(--muted)" : COL[i % COL.length]; };
    const R = 70, cx = 110, cy = 95, pos = k => [cx + R * Math.cos(-Math.PI / 2 + 2 * Math.PI * (k - 1) / n), cy + R * Math.sin(-Math.PI / 2 + 2 * Math.PI * (k - 1) / n)];
    const arrows = p.map((v, i) => { const k = i + 1; if (v === k) return ""; const [x1, y1] = pos(k), [x2, y2] = pos(v), dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L; const c = colOf(k); return `<line x1="${x1 + ux * 16}" y1="${y1 + uy * 16}" x2="${x2 - ux * 18}" y2="${y2 - uy * 18}" stroke="${c}" stroke-width="2" marker-end="url(#ah${cs.findIndex(cc => cc.includes(k))})"/>`; }).join("");
    const nodes = Array.from({ length: n }, (_, i) => { const [x, y] = pos(i + 1); return `<circle cx="${x}" cy="${y}" r="14" fill="var(--surface)" stroke="${colOf(i + 1)}" stroke-width="2"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="14" fill="var(--ink)">${i + 1}</text>`; }).join("");
    const defs = COL.map((c, i) => `<marker id="ah${i}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="${c}"/></marker>`).join("");
    host.innerHTML = `<p class="mlt">Permutation : clique deux nombres de la ligne du bas pour les échanger</p>
      <div class="permrow"><table class="mx ptab"><tr>${p.map((_, i) => `<td>${i + 1}</td>`).join("")}</tr><tr>${p.map((v, i) => `<td class="pv${sel === i ? " on" : ""}" data-i="${i}" style="color:${colOf(i + 1)}">${v}</td>`).join("")}</tr></table>
      <svg viewBox="0 0 220 190" width="220" height="190" role="img" aria-label="Graphe de la permutation"><defs>${defs}</defs>${arrows}${nodes}</svg></div>
      <p class="mlcalc">$\\sigma = ${cs.length ? cs.map(c => `(${c.join("\\ ")})`).join("") : "\\mathrm{id}"}$ &nbsp;·&nbsp; $${N}$ inversions &nbsp;·&nbsp; $\\varepsilon(\\sigma) = (-1)^{${N}} = ${eps}$${cs.length ? ` &nbsp;·&nbsp; par les cycles : $(-1)^{${cs.map(c => c.length - 1).join(" + ")}} = ${eps}$` : ""}</p>
      <p class="mlcalc">${cs.length ? cs.map((c, i) => `$\\textcolor[RGB]{${[1, 3, 5].map(x => parseInt(COL[i % COL.length].slice(x, x + 2), 16)).join(",")}}{${c.concat(c[0]).join("\\to")}}$`).join(" &nbsp; ") : "Tous les nombres sont fixes."}</p>
      <p class="mlnote">Inversions (paires $i\\lt j$ avec $\\sigma(i)\\gt\\sigma(j)$) : ${(() => { const L = []; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (p[i] > p[j]) L.push(`$(${i + 1},${j + 1})$`); return L.length ? L.join(", ") : "aucune"; })()}</p>
      <div class="mlnav"><button type="button" class="btn btn-ghost btn-sm" data-new>Au hasard</button><button type="button" class="btn btn-ghost btn-sm" data-id>Identité</button></div>`;
    $$(".pv", host).forEach(td => td.addEventListener("click", () => { const i = +td.dataset.i; if (sel === null) sel = i; else { [p[sel], p[i]] = [p[i], p[sel]]; sel = null; } draw(); }));
    $("[data-new]", host).addEventListener("click", () => { for (let i = n - 1; i > 0; i--) { const j = rnd(0, i); [p[i], p[j]] = [p[j], p[i]]; } sel = null; draw(); });
    $("[data-id]", host).addEventListener("click", () => { p = [1, 2, 3, 4, 5, 6]; sel = null; draw(); });
    typeset(host);
  };
  draw();
}
/* Sarrus : les traits qui donnent les six produits */
function mlSarrus(host) {
  let M = [[1, 2, 3], [0, 4, 5], [1, 0, 6]], mode = 2, hi = null;
  const L = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  /* chaque produit : 3 cases (ligne, colonne), signe */
  const P = [[[0, 0], [1, 1], [2, 2], 1], [[0, 1], [1, 2], [2, 0], 1], [[0, 2], [1, 0], [2, 1], 1], [[0, 2], [1, 1], [2, 0], -1], [[0, 0], [1, 2], [2, 1], -1], [[0, 1], [1, 0], [2, 2], -1]];
  const POS = ["#2B5BD7", "#1F8A5B", "#7A4CC2"], NEG = ["#D4503B", "#C27C00", "#C2416B"], MC = ["cB", "cG", "cV", "cR", "cO", "cP"];
  const draw = () => {
    const W = 56, H = 46, cols = mode === 2 ? 5 : 3, x0 = 30, y0 = 26;
    const cx = c => x0 + c * W + W / 2, cy = r => y0 + r * H + H / 2;
    const cells = [];
    for (let r = 0; r < 3; r++) for (let c = 0; c < cols; c++) cells.push(`<text x="${cx(c)}" y="${cy(r) + 6}" text-anchor="middle" font-size="18" fill="${c >= 3 ? "var(--muted)" : "var(--ink)"}" font-family="var(--f-mono)">${M[r][c % 3]}</text>`);
    const lines = P.map((pr, k) => {
      const col = pr[3] > 0 ? POS[k % 3] : NEG[k % 3], on = hi === null || hi === k, w = hi === k ? 5 : 3;
      let pts;
      if (mode === 2) { /* colonnes recopiées : vraies diagonales */ const start = pr[3] > 0 ? k : k - 3; pts = pr[3] > 0 ? [[0, start], [1, start + 1], [2, start + 2]] : [[0, start + 2], [1, start + 1], [2, start]]; }
      else pts = pr.slice(0, 3);
      const d = pts.map(([r, c], i) => `${i ? "L" : "M"}${cx(c)} ${cy(r)}`).join(" ");
      return `<path d="${d}${mode === 1 ? " Z" : ""}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" opacity="${on ? .9 : .12}" data-k="${k}"/>`;
    }).join("");
    const br = x => `<line x1="${x}" y1="${y0 + 2}" x2="${x}" y2="${y0 + 3 * H - 2}" stroke="var(--ink)" stroke-width="2"/>`;
    const Wt = x0 * 2 + cols * W;
    const term = k => { const pr = P[k]; return pr.slice(0, 3).map(([r, c]) => par(M[r][c])).join("\\times"); };
    const val = k => P[k].slice(0, 3).reduce((s, [r, c]) => s * M[r][c], 1) * 1;
    const sp = [0, 1, 2].reduce((s, k) => s + val(k), 0), sm = [3, 4, 5].reduce((s, k) => s + val(k), 0);
    host.innerHTML = `<p class="mlt">Règle de Sarrus : survole ou touche un trait</p>
      <div class="mlseg"><button type="button" data-m="2" aria-pressed="${mode === 2}">Colonnes recopiées</button><button type="button" data-m="1" aria-pressed="${mode === 1}">Triangles</button></div>
      <svg class="sarrus" viewBox="0 0 ${Wt} ${y0 * 2 + 3 * H}" width="${Wt}" height="${y0 * 2 + 3 * H}" role="img" aria-label="Schéma de Sarrus">${lines}${cells.join("")}${br(x0 + 4)}${br(x0 + 3 * W - 4)}${mode === 2 ? `<line x1="${x0 + 3 * W + 2}" y1="${y0}" x2="${x0 + 3 * W + 2}" y2="${y0 + 3 * H}" stroke="var(--line)" stroke-dasharray="4 4"/>` : ""}</svg>
      <div class="sterms">${P.map((pr, k) => `<button type="button" data-t="${k}" class="${pr[3] > 0 ? "plus" : "moins"}${hi === k ? " on" : ""}" style="--c:${pr[3] > 0 ? POS[k % 3] : NEG[k % 3]}">${pr[3] > 0 ? "+" : "−"} $${pr.slice(0, 3).map(([r, c]) => L[r * 3 + c]).join("")}$</button>`).join("")}</div>
      <p class="mlcalc">${hi === null ? `$$\\det = (${[0, 1, 2].map(k => `\\${MC[k]}{${term(k)}}`).join(" + ")}) - (${[3, 4, 5].map(k => `\\${MC[k]}{${term(k)}}`).join(" + ")})$$$$= (${[0, 1, 2].map(k => `\\${MC[k]}{${par(val(k))}}`).join(" + ")}) - (${[3, 4, 5].map(k => `\\${MC[k]}{${par(val(k))}}`).join(" + ")}) = ${sp} - ${par(sm)} = ${sp - sm}$$` : `$${P[hi][3] > 0 ? "+" : "-"}\\ \\${MC[hi]}{${term(hi)}} = ${P[hi][3] > 0 ? "" : "-"}${par(val(hi))}$`}</p>
      <p class="mlnote">Les traits bleus et verts (descendants) comptent avec $+$, les rouges et orange (montants) avec $-$.</p>
      <div class="mlnav"><button type="button" class="btn btn-ghost btn-sm" data-new>Autre matrice</button><button type="button" class="btn btn-ghost btn-sm" data-all>Tous les traits</button></div>`;
    const set = k => { hi = k; draw(); };
    $$("[data-k]", host).forEach(l => { l.style.cursor = "pointer"; l.addEventListener("mouseenter", () => { if (hi !== +l.dataset.k) set(+l.dataset.k); }); l.addEventListener("click", () => set(+l.dataset.k)); });
    $$("[data-t]", host).forEach(b => b.addEventListener("click", () => set(+b.dataset.t)));
    $$("[data-m]", host).forEach(b => b.addEventListener("click", () => { mode = +b.dataset.m; hi = null; draw(); }));
    $("[data-new]", host).addEventListener("click", () => { M = randM(3, -2, 5); hi = null; draw(); });
    $$(".sarrus text", host).forEach(() => {});
    $("[data-all]", host).addEventListener("click", () => set(null));
    typeset(host);
  };
  draw();
}
/* Développement : on barre la ligne et la colonne */
function mlDev(host) {
  let M = [[1, 4, 5], [2, 0, 3], [0, 1, 2]], by = "r", idx = 0;
  const draw = () => {
    const n = M.length, z = k => (by === "r" ? M[k] : M.map(r => r[k])).filter(v => v === 0).length;
    const best = [...Array(n).keys()].map(k => [k, Math.max(z(k), 0)]);
    const terms = [...Array(n).keys()].map(t => { const i = by === "r" ? idx : t, j = by === "r" ? t : idx; return { i, j, a: M[i][j], s: (i + j) % 2 ? -1 : 1, m: minor(M, i, j) }; });
    const tot = terms.reduce((s, t) => s + t.s * t.a * detN(t.m), 0);
    const DC = ["cB", "cR", "cG", "cV"], HX = ["#2B5BD7", "#D4503B", "#1F8A5B", "#7A4CC2"];
    terms.forEach((t, k) => { t.c = DC[k]; t.h = HX[k]; });
    const mini = t => `<div class="dvt${t.a === 0 ? " zero" : ""}" style="--tc:${t.h}"><span class="dvs" style="color:${t.h}">${t.s > 0 ? "+" : "−"} ${par(t.a)} ×</span><table class="mx">${M.map((r, i) => `<tr>${r.map((v, j) => `<td class="${i === t.i || j === t.j ? "x" : ""}${i === t.i && j === t.j ? " pv" : ""}">${v}</td>`).join("")}</tr>`).join("")}</table><span class="dvv">mineur $${detN(t.m)}$</span></div>`;
    host.innerHTML = `<p class="mlt">Développer : choisis une ligne ou une colonne</p>
      <div class="mlnav">${[...Array(n).keys()].map(k => `<button type="button" class="btn btn-ghost btn-sm${by === "r" && idx === k ? " sel" : ""}" data-r="${k}">Ligne ${k + 1}${z(k) ? ` · ${z(k)} zéro${z(k) > 1 ? "s" : ""}` : ""}</button>`).join("")}</div>
      <div class="mlnav">${[...Array(n).keys()].map(k => { const zz = M.map(r => r[k]).filter(v => v === 0).length; return `<button type="button" class="btn btn-ghost btn-sm${by === "c" && idx === k ? " sel" : ""}" data-c="${k}">Colonne ${k + 1}${zz ? ` · ${zz} zéro${zz > 1 ? "s" : ""}` : ""}</button>`; }).join("")}</div>
      <div class="dvrow">${terms.map(mini).join("")}</div>
      <p class="mlcalc">$$\\det A = ${terms.map(t => `${t.s > 0 ? "+" : "-"}\\${t.c}{${par(t.a)}\\begin{vmatrix}${t.m.map(r => r.join("&")).join("\\\\")}\\end{vmatrix}}`).join(" ").replace(/^\+/, "")}$$$$= ${terms.map(t => `${t.s > 0 ? "+" : "-"}\\${t.c}{${par(t.a)}\\times${par(detN(t.m))}}`).join(" ").replace(/^\+/, "")} = ${tot}$$</p>
      <p class="mlnote">Les cases grisées sont barrées : il reste le mineur. Un coefficient nul supprime tout un terme.</p>
      <div class="mlnav"><button type="button" class="btn btn-ghost btn-sm" data-new>Autre matrice</button><button type="button" class="btn btn-ghost btn-sm" data-four>Une 4×4</button></div>`;
    $$("[data-r]", host).forEach(b => b.addEventListener("click", () => { by = "r"; idx = +b.dataset.r; draw(); }));
    $$("[data-c]", host).forEach(b => b.addEventListener("click", () => { by = "c"; idx = +b.dataset.c; draw(); }));
    $("[data-new]", host).addEventListener("click", () => { M = randM(3, -2, 4); M[rnd(0, 2)][rnd(0, 2)] = 0; by = "r"; idx = 0; draw(); });
    $("[data-four]", host).addEventListener("click", () => { M = randM(4, -2, 3); const c = rnd(0, 3); [0, 1, 2, 3].forEach(i => { if (i !== 1) M[i][c] = 0; }); by = "r"; idx = 0; draw(); });
    typeset(host);
  };
  draw();
}
/* Exercices au hasard : déterminants et signatures */
function mlExDet(host) {
  const KINDS = ["Taille 2", "Sarrus", "Développer", "Signature"];
  let kind = 0, ex;
  const gen = () => {
    if (kind === 0) { const M = randM(2, -5, 7); return { q: `Calcule $\\begin{vmatrix}${M.map(r => r.join("&")).join("\\\\")}\\end{vmatrix}$.`, a: det2(M), sol: `$$${par(M[0][0])}\\times${par(M[1][1])} - ${par(M[0][1])}\\times${par(M[1][0])} = ${det2(M)}$$` }; }
    if (kind === 1) { const M = randM(3, -2, 4), [[a, b, c], [d, e, f], [g, h, i]] = M; const sp = a * e * i + b * f * g + c * d * h, sm = c * e * g + a * f * h + b * d * i; return { q: `Calcule avec Sarrus $\\begin{vmatrix}${M.map(r => r.join("&")).join("\\\\")}\\end{vmatrix}$.`, a: sp - sm, sol: `$$(${a * e * i} + ${b * f * g} + ${c * d * h}) - (${c * e * g} + ${a * f * h} + ${b * d * i}) = ${sp} - ${sm} = ${sp - sm}$$` }; }
    if (kind === 2) { const M = randM(4, -2, 3); const c = rnd(0, 3), r = rnd(0, 3); [0, 1, 2, 3].forEach(i => { if (i !== r) M[i][c] = 0; }); const s = (r + c) % 2 ? -1 : 1; return { q: `Calcule $\\begin{vmatrix}${M.map(x => x.join("&")).join("\\\\")}\\end{vmatrix}$ (développe selon la colonne pleine de zéros).`, a: detN(M), sol: `$$\\text{Colonne}\\ ${c + 1}:\\quad\\det = ${s > 0 ? "" : "-"}${par(M[r][c])}\\times\\begin{vmatrix}${minor(M, r, c).map(x => x.join("&")).join("\\\\")}\\end{vmatrix} = ${s > 0 ? "" : "-"}${par(M[r][c])}\\times${par(detN(minor(M, r, c)))} = ${detN(M)}$$` }; }
    const p = [1, 2, 3, 4, 5, 6]; for (let i = 5; i > 0; i--) { const j = rnd(0, i); [p[i], p[j]] = [p[j], p[i]]; }
    let N = 0; for (let i = 0; i < 6; i++) for (let j = i + 1; j < 6; j++) if (p[i] > p[j]) N++;
    const seen = new Set(), cs = []; for (let i = 1; i <= 6; i++) { if (seen.has(i)) continue; const c = []; let k = i; while (!seen.has(k)) { seen.add(k); c.push(k); k = p[k - 1]; } if (c.length > 1) cs.push(c); }
    return { q: `Donne la signature de $\\sigma = \\begin{pmatrix}1&2&3&4&5&6\\\\${p.join("&")}\\end{pmatrix}$ ($1$ ou $-1$).`, a: N % 2 ? -1 : 1, sol: `$$\\sigma = ${cs.length ? cs.map(c => `(${c.join("\\ ")})`).join("") : "\\mathrm{id}"},\\qquad\\varepsilon(\\sigma) = (-1)^{${cs.map(c => c.length - 1).join(" + ") || 0}} = ${N % 2 ? -1 : 1}$$` };
  };
  const draw = () => {
    host.innerHTML = `<div class="mlseg">${KINDS.map((t, i) => `<button type="button" data-k="${i}" aria-pressed="${i === kind}">${t}</button>`).join("")}</div><p class="mlq">${ex.q}</p><div class="mlin" style="grid-template-columns:100px"><input inputmode="numeric" aria-label="Ta réponse" data-a></div><div class="mlnav"><button type="button" class="btn btn-yellow btn-sm" data-check>Vérifier</button><button type="button" class="btn btn-ghost btn-sm" data-sol>Voir la correction</button><button type="button" class="btn btn-ghost btn-sm" data-new>Un autre</button></div><p class="mlres"></p><div class="mlsol" hidden>${ex.sol}</div>`;
    $$("[data-k]", host).forEach(b => b.addEventListener("click", () => { kind = +b.dataset.k; ex = gen(); draw(); }));
    $("[data-check]", host).addEventListener("click", () => { const i = $("[data-a]", host), ok = Number(i.value.trim()) === ex.a && i.value.trim() !== ""; i.classList.toggle("ok", ok); i.classList.toggle("ko", !ok); $(".mlres", host).textContent = ok ? "Juste." : "Pas encore : vérifie les signes."; });
    $("[data-sol]", host).addEventListener("click", () => { const s = $(".mlsol", host); s.hidden = false; typeset(s); });
    $("[data-new]", host).addEventListener("click", () => { ex = gen(); draw(); });
    typeset(host);
  };
  ex = gen(); draw();
}

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
function heatHtml() {
  const days = DS.get("lemme-days", {}), out = [], now = new Date(); now.setHours(12, 0, 0, 0);
  const start = new Date(now); start.setDate(start.getDate() - 62);
  for (let k = 0; k < 63; k++) { const d = new Date(start); d.setDate(start.getDate() + k); if (d > now) break; const v = days[dayKey(d.getTime())] || 0; out.push(`<i class="h${v > 3600 ? 4 : v > 1800 ? 3 : v > 600 ? 2 : v > 0 ? 1 : 0}" title="${d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })} · ${Math.round(v / 60)} min"></i>`); }
  return `<section class="heat"><h2>Tes jours de travail</h2><div class="hgrid">${out.join("")}</div></section>`;
}
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

  return phead({ crumb: [["Tableau de bord"]], title: "Tableau de bord" }) + `<div class="wrap db">${heatHtml()}
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
const TFD = { mode: "sujets", q: "", fil: "", mat: "", bank: "", an: "", diff: "", yr: "", chap: "", sort: "recent" };
for (const k in TFD) if (!(k in TF) || Array.isArray(TF[k]) || TF[k] == null) TF[k] = TFD[k];
const strip = s => String(s || "").replace(/<[^>]+>/g, " ").replace(/\$[^$]*\$/g, " ");
let SUJ = null, EXS = null;
function tfIndex() {
  if (SUJ) return;
  SUJ = ANN().map((c, i) => {
    const parts = EXERCISES.filter(e => e.subj === "annales" && e.chap === i);
    const lv = parts.length ? Math.round(parts.reduce((a, e) => a + (e.level || 3), 0) / parts.length) : 3;
    return { c, i, parts, lv, mat: matOf(c), fils: fils(c), it: mkItem(c.titre + " " + c.bank + " " + c.annee, [c.t, c.n, plainOf(c.intro), c.epreuve, c.filiere, ...parts.map(e => e.title + " " + (e.part || "") + " " + e.steps.map(st => st.t).join(" ") + " " + plainOf(e.enonce))].join(" ")) };
  });
  EXS = EXERCISES.filter(e => e.subj !== "annales").map(e => { const sj = sid(e.subj) || {}, ch = ((sj.years || {})[e.year] || [])[e.chap] || {}; return { e, mat: matOfEx(e) || "Mathématiques", it: mkItem(e.title, [sj.name, ch.t, ch.n, e.steps.map(st => st.t).join(" "), plainOf(e.enonce), [...new Set(e.steps.flatMap(st => st.rappels || []))].map(r => (RAPPELS[r] || {}).t || "").join(" ")].join(" ")) }; });
}

function trouverPage() {
  return phead({ crumb: [["Trouver"]], title: "Trouver un sujet ou un exercice" }) + `<div class="wrap tf">
  <div class="tfmode" role="tablist" aria-label="Que cherches-tu ?">
    <button type="button" role="tab" data-tmode="sujets" aria-selected="${TF.mode === "sujets"}">Sujets de concours</button>
    <button type="button" role="tab" data-tmode="exos" aria-selected="${TF.mode === "exos"}">Exercices</button>
  </div>
  <label class="tfsearch"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M20 20l-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="sr-only">Mots-clés</span><input type="search" data-tq value="${esc(TF.q)}" placeholder="Un mot-clé : diagonalisation, Kepler…" autocomplete="off"></label>
  <div class="tffilters"></div>
  <section class="tfres" aria-live="polite"></section>
</div>`;
}

function tfFilters() {
  const sel = (key, label, opts) => `<label class="tfsel${TF[key] ? " on" : ""}"><span class="sr-only">${label}</span><select data-tsel="${key}"><option value="">${label}</option>${opts.map(([v, l]) => `<option value="${esc(String(v))}"${String(TF[key]) === String(v) ? " selected" : ""}>${esc(l)}</option>`).join("")}</select></label>`;
  const dsel = sel("diff", "Difficulté", DIFFS.slice(1));
  let out;
  if (TF.mode === "sujets") {
    const years = [...new Set(SUJ.map(s => s.c.annee))].sort((a, b) => b - a);
    out = sel("fil", "Filière", Object.values(FIL).map(f => [f, f]))
      + sel("mat", "Matière", [...MATS, "Autres"].filter(m => SUJ.some(s => s.mat === m)).map(m => [m, m]))
      + sel("bank", "Concours", BANKS.filter(b => SUJ.some(s => s.c.bank === b.name)).map(b => [b.name, b.name]))
      + sel("an", "Année", years.map(y => [y, String(y)])) + dsel;
  } else {
    const mats = DMATS.filter(d => EXS.some(x => x.mat === d.m));
    const one = TF.mat ? DMATS.find(d => d.m === TF.mat) : null, subj = one && sid(one.subj[0]);
    let chs = [];
    if (subj && !subj.hidden) (TF.yr ? [TF.yr] : ["mpsi", "mp"]).forEach(y => subj.years[y].forEach((c, i) => { if (EXS.some(x => x.e.subj === subj.id && x.e.year === y && x.e.chap === i)) chs.push([`${subj.id}-${y}-${i}`, (TF.yr ? "" : YEARS[y] + " · ") + c.t]); }));
    out = sel("mat", "Matière", mats.map(d => [d.m, d.m])) + sel("yr", "Année", [["mpsi", "Sup"], ["mp", "Spé"]]) + (chs.length ? sel("chap", "Chapitre", chs) : "") + dsel;
  }
  const any = ["fil", "mat", "bank", "an", "diff", "yr", "chap"].some(k => TF[k]);
  return out + (any ? `<button type="button" class="tfclear" data-treset>Effacer</button>` : "");
}

function tfResults() {
  const q = TF.q;
  let L, near = false;
  if (TF.mode === "sujets") {
    L = SUJ.filter(s => (!TF.fil || s.fils.includes(TF.fil)) && (!TF.mat || s.mat === TF.mat) && (!TF.bank || s.c.bank === TF.bank) && (!TF.an || String(s.c.annee) === String(TF.an)) && (!TF.diff || dOf(s.lv) === TF.diff));
    if (q) ({ list: L, near } = qsearch(L, q, x => x.it));
    if (!q || TF.sort !== "recent") L = L.sort(TF.sort === "facile" ? (a, b) => a.lv - b.lv : TF.sort === "dur" ? (a, b) => b.lv - a.lv : (a, b) => b.c.annee - a.c.annee);
    const card = s => { const d = s.parts.filter(e => doneN(e.id)).length; return `<a class="sjc${d ? " done" : ""}" href="#c-annales-mp-${s.i}">${rib(s.lv)}<span class="sjm">${esc(s.c.bank)} ${s.c.annee} · ${esc(s.c.epreuve)}</span><b class="sjt">${esc(s.c.titre)}</b><span class="cf">${lvl(s.lv)}${d ? `<span class="dn">${ICHECK}Fait</span>` : ""}</span></a>`; };
    return tfHead(L.length, "sujet", near) + (L.length ? `<div class="sjgrid">${L.map(card).join("")}</div>` : tfEmpty());
  }
  L = EXS.filter(x => (!TF.mat || x.mat === TF.mat) && (!TF.yr || x.e.year === TF.yr) && (!TF.chap || `${x.e.subj}-${x.e.year}-${x.e.chap}` === TF.chap) && (!TF.diff || dOf(x.e.level) === TF.diff));
  if (q) ({ list: L, near } = qsearch(L, q, x => x.it));
  if (TF.sort !== "recent") L = L.sort(TF.sort === "facile" ? (a, b) => (a.e.level || 3) - (b.e.level || 3) : (a, b) => (b.e.level || 3) - (a.e.level || 3));
  const shown = L.slice(0, 60);
  return tfHead(L.length, "exercice", near) + (L.length ? `<div class="exgrid">${shown.map(x => exCard(x.e)).join("")}</div>${L.length > 60 ? `<p class="tfhint">Les 60 premiers. Ajoute un mot-clé pour affiner.</p>` : ""}` : tfEmpty());
}
const tfHead = (n, w, near) => `<div class="tfhead"><p>${near && n ? "Résultats proches" : `${n} ${w}${n > 1 ? "s" : ""}`}</p><label class="tfsort"><span class="sr-only">Trier</span><select data-tsort><option value="recent"${TF.sort === "recent" ? " selected" : ""}>${TF.q ? "Pertinence" : TF.mode === "sujets" ? "Plus récents" : "Ordre du cours"}</option><option value="facile"${TF.sort === "facile" ? " selected" : ""}>Plus faciles</option><option value="dur"${TF.sort === "dur" ? " selected" : ""}>Plus difficiles</option></select></label></div>`;
const tfEmpty = () => `<div class="tfempty"><p>Rien trouvé.</p><button type="button" class="btn btn-ghost btn-sm" data-treset>Tout effacer</button></div>`;

function wireTrouver() {
  const host = $(".tf", app); if (!host) return;
  tfIndex();
  const fl = $(".tffilters", host), res = $(".tfres", host);
  const reset = () => { Object.assign(TF, { q: "", fil: "", mat: "", bank: "", an: "", diff: "", yr: "", chap: "" }); $("[data-tq]", host).value = ""; paint(); };
  const paintRes = () => {
    res.innerHTML = tfResults(); tfSave();
    const so = $("[data-tsort]", res); if (so) so.addEventListener("change", () => { TF.sort = so.value; paintRes(); });
    $$("[data-treset]", res).forEach(b => b.addEventListener("click", reset));
    typeset(res);
  };
  const paint = () => {
    fl.innerHTML = tfFilters();
    $$("[data-tsel]", fl).forEach(se => se.addEventListener("change", () => { const k = se.dataset.tsel; TF[k] = se.value; if (k === "mat" || k === "yr") TF.chap = ""; paint(); }));
    $$("[data-treset]", fl).forEach(b => b.addEventListener("click", reset));
    paintRes();
  };
  $$("[data-tmode]", host).forEach(b => b.addEventListener("click", () => { TF.mode = b.dataset.tmode; TF.mat = ""; TF.chap = ""; $$("[data-tmode]", host).forEach(x => x.setAttribute("aria-selected", x === b)); paint(); }));
  let t; $("[data-tq]", host).addEventListener("input", ev => { clearTimeout(t); t = setTimeout(() => { TF.q = ev.target.value.trim(); paintRes(); }, 140); });
  paint();
}

/* Sujets de concours réunis : titre et durée du sujet complet */
EXERCISES.forEach(e => { if (e.__ann) { const c = ANN()[e.chap]; if (c) { e.title = c.titre; e.tt = undefined; if (c.duree) e.time = c.duree; } } });
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
  else if (h === "xens-chapitres") html = commandoChaps();
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
  else if (h === "a-revoir") { const L = EXERCISES.filter(e => FAV.has(e.id)); html = phead({ crumb: [["À revoir"]], title: "À revoir" }) + `<div class="wrap layout full"><div>${L.length ? `<div class="exgrid">${L.map(exCard).join("")}</div>` : empty("Rien pour l'instant", " Sur un exercice, clique sur « Garder pour plus tard ».")}</div></div>`; }
  else if (h === "concours") html = concoursPage();
  else if (h === "oral") html = oralPage();
  else if (h === "tableau") html = dashPage();
  else if (h === "trouver") html = trouverPage();
  else html = notFound();
  const zone = h === "commando" || h === "xens-chapitres" || /^(s|c)-xens/.test(h) || (ex && ex.subj === "xens");
  if (zone) document.documentElement.dataset.zone = "commando"; else delete document.documentElement.dataset.zone;
  const tc = document.querySelector('meta[name="theme-color"]'); if (tc) tc.content = zone ? "#05070C" : "#0F2557";
  const sec = /^(s|c)-/.test(h) && !/^c-annales/.test(h) && !/^(s|c)-(xens|oraux|kholles)/.test(h) ? "cours" : /^(exercices|classiques|kholles|dm|ds|c-kholles)/.test(h) ? "exos" : /^(concours|oral|trouver|bq\/|banque|c-annales|commando|xens-chapitres|s-xens|c-xens|oraux|s-oraux|c-oraux)/.test(h) ? "conc" : h === "tableau" ? "tab" : "";
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
  if (h === "accueil") wireHome();
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
  $$(".diffbar [data-diff]", app).forEach(b => b.addEventListener("click", () => {
    diff = b.dataset.diff;
    try { localStorage.setItem("lemme-diff", diff); } catch (_) {}
    route(true);
  }));
  if (EXT && $(".methode", app)) exBlocks(app);
  fixLabm(app);
  $$(".potence", app).forEach(renderPotence);
  $$(".tree", app).forEach(braceTree);
  $$("[data-mlab]", app).forEach(mountMlab);
  /* Un arbre plus large que la page est réduit pour tenir en entier, sans barre de défilement. */
  $$(".htree", app).forEach(t => { const inner = t.firstElementChild; if (!inner || !window.ResizeObserver) return;
    const fit = () => { t.style.zoom = ""; const w = inner.scrollWidth, c = t.clientWidth; if (w > c + 2) t.style.zoom = String(Math.max(.55, c / w)); };
    new ResizeObserver(fit).observe(inner); fit(); });
  $$(".msum a, .btree a, .lg a, .htree a", app).forEach(a => a.addEventListener("click", ev => { const t = document.getElementById(a.getAttribute("href").slice(1)); if (t) { ev.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); if (a.closest(".btree, .lg, .htree")) backTo(a); } }));
  $$("[data-print]", app).forEach(b => b.addEventListener("click", () => print()));
  $$(".flash", app).forEach(fl => { $$(".fcard", fl).forEach(c => c.addEventListener("click", () => c.classList.toggle("flip"))); $$("[data-fl]", fl).forEach(b => b.addEventListener("click", () => flashGo(fl, +b.dataset.fl))); });
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
    const fb = $("[data-fav]", app); if (fb) fb.addEventListener("click", () => { if (FAV.has(ex.id)) FAV.delete(ex.id); else FAV.add(ex.id); favSave(); fb.setAttribute("aria-pressed", FAV.has(ex.id)); $("span", fb).textContent = FAV.has(ex.id) ? "À revoir" : "Garder pour plus tard"; });
    const pb = $("[data-printex]", app); if (pb) pb.addEventListener("click", () => { openBig(ex); setTimeout(() => (lastTs || Promise.resolve()).then(() => setTimeout(print, 300)), 400); });
    const cb = $("[data-chrono]", app); if (cb) cb.addEventListener("click", () => { const c = ANN()[ex.chap] || {}, d = String(c.duree || "4 h"), h = +(d.match(/(\d+)\s*h/) || [0, 0])[1], m = +(d.match(/(\d+)\s*min/) || [0, 0])[1]; DS.set("lemme-chrono", { id: ex.id, t: ex.title, end: Date.now() + ((h * 60 + m) || 240) * 6e4 }); chronoTick(); });
  }
}

paintYear();
requestAnimationFrame(paintYear);
window.addEventListener("hashchange", () => route());
route();
})();

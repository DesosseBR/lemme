/* Lemme : navigation, pages, lecteur PDF, visualisations et corrigé pas à pas.
   Le contenu vient de content/*.js : ce fichier n'a pas à changer quand on ajoute des exercices. */
(function () {
"use strict";
const { SUBJECTS, EXERCISES, DM, KHOLLES, BANKS, RAPPELS } = window.LEMME;
const PDFS = new Set(window.LEMME.PDFS || []);
const YEARS = { mpsi: "MPSI", mp: "MP" };
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
const img = (k, sizes = "100vw", eager = false) => `<img src="${src(k, 1200)}" srcset="${src(k, 640)} 640w, ${src(k, 1200)} 1200w, ${src(k, 2000)} 2000w" sizes="${sizes}" alt="" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" onerror="this.style.visibility='hidden'">`;

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
const lvl = n => `<span class="lvl" role="img" aria-label="Difficulté ${n} sur 5">${[1, 2, 3, 4, 5].map(k => `<i class="${k <= n ? "on" : ""}" aria-hidden="true">★</i>`).join("")}</span>`;

/* ---------- MathJax ---------- */
let mjQueue = Promise.resolve();
function typeset(el) {
  if (!el || !window.MathJax || !MathJax.typesetPromise) return;
  mjQueue = mjQueue.then(() => MathJax.typesetPromise([el])).then(() => fitMath(el)).catch(() => {});
  return mjQueue;
}
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
  $$(".yearswitch button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.year === year)));
  const b = $(`.yearswitch button[data-year="${year}"]`);
  if (b) { pill.style.width = b.offsetWidth + "px"; pill.style.transform = `translateX(${b.offsetLeft - 3}px)`; }
}
function setYear(y) { year = y; try { localStorage.setItem("lemme-year", y); } catch (e) {} paintYear(); }
$$(".yearswitch button").forEach(b => b.addEventListener("click", () => {
  if (b.dataset.year === year) return;
  setYear(b.dataset.year);
  const m = location.hash.match(/^#c-([a-z]+)-(mpsi|mp)-\d+$/);
  if (m) location.hash = "s-" + m[1]; else route(true);
}));
window.addEventListener("resize", paintYear);

/* ---------- Menus ---------- */
$("#dd-mat").innerHTML = VISIBLE.map(s => `<a href="#s-${s.id}"><img class="thumb" src="${src(s.id, 120)}" alt="" loading="lazy">${s.name}</a>`).join("");
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
function phead({ crumb, title, meta = "", tabs = "", photo, tall }) {
  return `<section class="phead${photo ? " has-photo" : ""}${tall ? " tall" : ""}">${photo ? `<div class="photo">${img(photo, "100vw", true)}</div>` : ""}<div class="wrap">${crumbs(crumb)}<h1>${title}</h1>${meta ? `<div class="meta">${meta}</div>` : ""}${tabs}</div></section>`;
}
function exCard(e) {
  const s = sid(e.subj), c = s.years[e.year][e.chap], pb = e.kind === "probleme";
  return `<a class="excard" href="#e-${e.id}"><span class="top"><span class="kind${pb ? " pb" : ""}">${e.subj === "kholles" ? "Khôlle · " + YEARS[e.year] : e.concours ? "Oral " + CONC[e.concours] : (pb ? "Problème" : "Exercice") + " · " + (s.hidden ? s.name : s.name + " " + YEARS[e.year])}</span>${lvl(e.level)}</span><b>${esc(e.title)}</b><span class="foot"><span>${esc(c.t)}</span><span>·</span><span>${e.time}</span></span></a>`;
}
function tabsHtml(list, cur) { return `<div class="tabs" role="tablist">${list.map(t => `<button type="button" role="tab" data-tab="${t[0]}" aria-selected="${t[0] === cur}">${t[1]}${t[2] !== undefined ? `<span class="n">${t[2]}</span>` : ""}</button>`).join("")}</div>`; }
function empty(title, text) { return `<div class="empty"><b>${title}</b>${text}</div>`; }

/* ---------- Pages ---------- */
function home() {
  const demo = EXERCISES.find(e => e.id === "ex-rc");
  const st = demo.steps[1];
  return `
  <section class="hero"><div class="photo">${img("hero", "100vw", true)}</div><div class="wrap">
    <h1><span class="line"><span>Toute ta prépa,</span></span><span class="line"><span><span class="mark">corrigée</span></span></span><span class="line"><span>pas à pas.</span></span></h1>
    <p>Cours, résumés et corrigés interactifs pour la MPSI et la MP.</p>
    <div class="ctas"><a class="btn btn-yellow" href="#s-maths">Explorer les matières ${I.arrow}</a><a class="btn btn-glass" href="#e-ex-recurrence">Essayer un corrigé</a></div>
  </div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-title"><h2>Les matières</h2><a href="#exercices">Tous les exercices ${I.arrow}</a></div>
    <div class="subjects stagger">${VISIBLE.map(s => `<a class="scard" href="#s-${s.id}">${img(s.id, "(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw")}<span class="in"><h3>${s.name}</h3><span class="bar"></span><small>${s.years.mpsi.length} chapitres en MPSI · ${s.years.mp.length} en MP</small></span></a>`).join("")}</div>
  </div></section>

  <section class="sec"><div class="wrap showcase">
    <div>
      <h2>Un corrigé qu'on suit, pas qu'on survole.</h2>
      <p>Chaque correction avance étape par étape, et le rappel de cours utilisé est à un clic.</p>
      <div class="keys"><kbd>←</kbd><kbd>→</kbd><span>pour avancer ou revenir</span></div>
      <a class="btn btn-navy" href="#e-${demo.id}">Ouvrir cet exercice ${I.arrow}</a>
    </div>
    <div class="panelbox player" aria-label="Aperçu d'un corrigé">
      <div class="prog" aria-hidden="true">${demo.steps.map((_, k) => `<button tabindex="-1" class="${k <= 1 ? "done" : ""}"></button>`).join("")}<button tabindex="-1"></button></div>
      <div class="step"><span class="count">Étape 2 sur ${demo.steps.length}</span><h3>${esc(st.t)}</h3><div class="prose">${st.b}</div>
      <div class="rappels"><span class="lab">Rappels utilisés</span>${(st.rappels || []).map(r => rchip(r)).join("")}</div></div>
    </div>
  </div></section>

  <section class="sec"><div class="wrap"><div class="band">
    <div class="list"><h2>S'entraîner</h2><ul>
      <li><a href="#classiques">Classiques <span>Les exercices et problèmes incontournables</span>${I.arrow}</a></li>
      <li><a href="#dm">Devoirs maison <span>Sujets complets en PDF</span>${I.arrow}</a></li>
      <li><a href="#kholles">Khôlles <span>Les questions de cours</span>${I.arrow}</a></li>
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
    : `<ol class="chapters stagger">${list.map((c, i) => { const n = exOf(id, year, i).length, r = PDFS.has(`resume-${id}-${year}-${pad(i + 1)}`); return `<li><a href="#c-${id}-${year}-${i}"><span class="num">${pad(i + 1)}</span><h3>${esc(c.t)}</h3><span class="info">${r ? "<span>Résumé</span>" : ""}${n ? `<span><b>${n}</b> exo${n > 1 ? "s" : ""}</span>` : ""}<svg class="go" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a></li>`; }).join("")}</ol>`;
  return phead({ crumb: [["Matières"], [s.name]], title: s.name, meta: `<span class="tag y">${YEARS[year]}</span>`, tabs, photo: id, tall: true })
    + `<div class="wrap layout full">${body}</div>`;
}

let chapTab = null;
function chapterPage(id, y, i) {
  const s = sid(id); if (!s || !s.years[y] || !s.years[y][i]) return notFound();
  if (year !== y && !s.hidden) setYear(y);
  const list = s.years[y], c = list[i], exs = exOf(id, y, i);
  const rs = `resume-${id}-${y}-${pad(i + 1)}`, cs = `cours-${id}-${y}-${pad(i + 1)}`;
  const tabs = [];
  const oral = id === "oraux";
  if (oral) {
    (c.cc || []).forEach(k => tabs.push([k, CONC[k], exs.filter(e => e.concours === k).length]));
    if (!chapTab || !tabs.find(t => t[0] === chapTab)) chapTab = (lastConc && tabs.find(t => t[0] === lastConc)) ? lastConc : ((tabs.find(t => t[2]) || tabs[0] || [""])[0]);
  } else {
    if (PDFS.has(cs)) tabs.push(["cours", "Cours"]);
    tabs.push(["resume", "Résumé"]);
    tabs.push(["exercices", "Exercices", exs.length]);
    if (!chapTab || !tabs.find(t => t[0] === chapTab)) chapTab = PDFS.has(cs) ? "cours" : (PDFS.has(rs) ? "resume" : (exs.length ? "exercices" : "resume"));
  }
  let body;
  if (oral) { const ce = exs.filter(e => e.concours === chapTab); body = ce.length ? `<div class="exgrid stagger">${ce.map(exCard).join("")}</div>` : empty("Exercices en préparation", ` Les exercices ${CONC[chapTab] || ""} de ce chapitre arrivent bientôt.`); }
  else if (chapTab === "cours") body = `<div data-pdf="${cs}" data-title="Cours · ${esc(c.t)}"></div>`;
  else if (chapTab === "resume") body = (PDFS.has(rs) ? `<div data-pdf="${rs}" data-title="Résumé · ${esc(c.t)}"></div>` : empty("Résumé en préparation", "")) + `<p style="margin:20px 4px 0;color:var(--muted);font-size:14.5px"><b style="color:var(--ink)">Au programme :</b> ${esc(c.n)}.</p>`;
  else body = exs.length ? `<div class="exgrid stagger">${exs.map(exCard).join("")}</div>` : empty("Exercices en préparation", "");
  const prev = list[i - 1], next = list[i + 1];
  const pager = `<div style="display:flex;justify-content:space-between;gap:12px;margin-top:36px;flex-wrap:wrap">${prev ? `<a class="btn btn-ghost" href="#c-${id}-${y}-${i - 1}">${I.left} ${esc(prev.t)}</a>` : "<span></span>"}${next ? `<a class="btn btn-ghost" href="#c-${id}-${y}-${i + 1}">${esc(next.t)} ${I.arrow}</a>` : ""}</div>`;
  return phead({ crumb: s.hidden ? [parentOf(s), [s.name, homeOf(s)]] : [[s.name, `#s-${id}`], [YEARS[y]]], title: esc(c.t), meta: oral ? `<span class="tag y">Chapitre ${i + 1}</span><span class="tag">${s.name}</span><span class="tag">${plural((c.cc || []).length, "concours").replace("concourss", "concours")}</span>` : id === "kholles" ? `<span class="tag y">Chapitre ${pad(i + 1)}</span><span class="tag">${s.name} · ${YEARS[y]}</span>` : s.hidden ? `<span class="tag y">Topologie · ${i + 1}</span><span class="tag">${s.name}</span><span class="tag">Niveau ★★★★★</span>` : `<span class="tag y">Chapitre ${pad(i + 1)}</span><span class="tag">${s.name} · ${YEARS[y]}</span>`, tabs: tabsHtml(tabs, chapTab) })
    + `<div class="wrap layout"><div>${body}${pager}</div><aside class="side"><div class="sticky"><h3>${oral ? s.name : id === "kholles" ? s.name + " · " + YEARS[y] : s.hidden ? s.name + " · Topologie" : s.name + " · " + YEARS[y]}</h3><ul class="navlist">${list.map((x, j) => `<li><a href="#c-${id}-${y}-${j}" ${j === i ? 'aria-current="page"' : ""}><span class="n">${pad(j + 1)}</span>${esc(x.t)}</a></li>`).join("")}</ul></div></aside></div>`;
}

let enonceMode = "interactif";
function exercisePage(eid) {
  const e = EXERCISES.find(x => x.id === eid); if (!e) return notFound();
  const s = sid(e.subj), c = s.years[e.year][e.chap], pb = e.kind === "probleme";
  if (year !== e.year && !s.hidden) setYear(e.year);
  const hasPdf = PDFS.has("enonce-" + e.id);
  const d = e.decode || { donnees: [], but: "", cles: {} };
  const others = EXERCISES.filter(x => x.subj === e.subj && x.id !== e.id && x.year === e.year).slice(0, 2);
  if (e.concours) lastConc = e.concours;
  const ann = e.subj === "annales";
  return phead({ crumb: ann ? [["Concours", "#concours"], [c.bank, "#banque-" + bslug(c.bank)], [c.epreuve + " " + c.annee, `#c-annales-mp-${e.chap}`], ["Partie " + e.part]] : s.hidden ? [[s.name, homeOf(s)], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]] : [[s.name, `#s-${s.id}`], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]], title: esc(e.title),
    meta: ann ? `<span class="tag y">${qrange(e)}</span>` : `<span class="tag y">${e.subj === "kholles" ? "Khôlle" : e.concours ? "Oral " + CONC[e.concours] : (pb ? "Problème" : "Exercice")}</span><span class="tag">${s.hidden ? s.name : s.name + " · " + YEARS[e.year]}</span><span class="tag">${e.time}</span><span class="tag l" aria-label="Difficulté ${e.level} sur 5"><span style="color:var(--ink);letter-spacing:1px">${"★".repeat(e.level)}</span><span style="opacity:.35;letter-spacing:1px">${"★".repeat(5 - e.level)}</span></span>` })
  + (() => {
    const enHead = `<h2 id="h-en">Énoncé ${hasPdf ? `<span class="seg" role="group" aria-label="Affichage de l'énoncé"><button type="button" data-mode="interactif" aria-pressed="${enonceMode === "interactif"}">Interactif</button><button type="button" data-mode="pdf" aria-pressed="${enonceMode === "pdf"}">PDF</button></span>` : ""}</h2>`;
    const enBody = `<div id="en-int" ${enonceMode === "pdf" && hasPdf ? "hidden" : ""}>
        <div class="prose enonce">${annotate(e.enonce, e)}</div>
        <div class="decode">
          <div><h4>Ce que l'énoncé te donne</h4><ul>${d.donnees.map(x => `<li>${x}</li>`).join("")}</ul></div>
          <div><h4>Ce qu'on te demande</h4>${d.but}</div>
        </div>
        <p class="legend-k">${Object.keys(d.cles || {}).length ? `<span><i class="lk"></i>Surligné en jaune : un mot de l'énoncé expliqué</span>` : ""}<span><i class="ln"></i>Surligné en bleu : une notion de cours, avec sa définition</span></p>
      </div>
      ${hasPdf ? `<div id="en-pdf" ${enonceMode === "pdf" ? "" : "hidden"}><div data-pdf="enonce-${e.id}" data-title="${esc(e.title)}" data-lazy="1"></div></div>` : ""}`;
    const cor = `<section class="panelbox" aria-labelledby="h-cor"><h2 id="h-cor" class="cor-h"><span class="sr-only">Corrigé pas à pas</span>${PDFS.has("corrige-" + e.id) ? `<a class="btn btn-ghost btn-sm" style="margin-left:auto" href="pdf/corrige-${e.id}.pdf" download aria-label="Télécharger le corrigé en PDF">${I.dl} PDF</a>` : ""}</h2><div id="player" class="player"></div></section>`;
    const viz = [].concat(e.viz || []).map((v, k) => `<section class="panelbox" aria-labelledby="h-viz${k}"><h2 id="h-viz${k}">${v.title || "Visualiser"}</h2><div id="viz${k ? k : ""}"></div></section>`).join("");
    const more = others.length ? `<section><h2 style="font-weight:800;font-size:24px;letter-spacing:-.02em;margin:24px 0 16px">Pour continuer</h2><div class="exgrid">${others.map(exCard).join("")}</div></section>` : "";
    if (e.side) return `<div class="wrap wrap-wide"><div class="ex-layout wide">
      <div class="split"><section class="panelbox side-en" aria-labelledby="h-en">${enHead}${enBody}</section>${cor}</div>
      ${viz}${more}
    </div></div>`;
    return `<div class="wrap"><div class="ex-layout">
    <section class="panelbox" aria-labelledby="h-en">${enHead}${enBody}</section>
    ${viz}${cor}${more}
  </div></div>`;
  })();
}

let exFilter = "all";
function exercisesPage(onlyClassics) {
  const list = EXERCISES.filter(e => e.year === year && !sid(e.subj).hidden && (exFilter === "all" || e.subj === exFilter) && (!onlyClassics || e.classique));
  const title = onlyClassics ? "Classiques" : "Exercices corrigés";
  return phead({ crumb: [[title]], title, meta: `<span class="tag y">${YEARS[year]}</span>` })
  + `<div class="wrap layout full"><div>
    <div class="filters" role="group" aria-label="Filtrer par matière"><button type="button" class="chip" data-f="all" aria-pressed="${exFilter === "all"}">Toutes</button>${VISIBLE.map(s => `<button type="button" class="chip" data-f="${s.id}" aria-pressed="${exFilter === s.id}">${s.name}</button>`).join("")}</div>
    ${list.length ? `<div class="exgrid stagger">${list.map(exCard).join("")}</div>` : empty("Rien pour l'instant", ` Essaie une autre matière ou passe en ${year === "mpsi" ? "MP" : "MPSI"}.`)}
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

function khollesEx() {
  const s = sid("kholles"); if (!s || !(s.years[year] || []).length) return "";
  const list = s.years[year];
  return `<div style="margin-top:40px"><h2 style="font-family:var(--f-display,inherit);margin:0 0 8px">Exercices classiques de khôlle</h2><p style="font-family:var(--f-read);font-size:17px;color:var(--muted);margin:0 0 24px;max-width:46em">Les grands classiques posés en khôlle, rangés par chapitre et corrigés pas à pas.</p>
    <ol class="chapters stagger">${list.map((c, i) => { const n = exOf("kholles", year, i).length; return `<li><a href="#c-kholles-${year}-${i}"><span class="num">${pad(i + 1)}</span><h3>${esc(c.t)}</h3><span class="info">${n ? `<span><b>${n}</b> exo${n > 1 ? "s" : ""}</span>` : ""}<svg class="go" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a></li>`; }).join("")}</ol></div>`;
}

function khollesPage() {
  const groups = KHOLLES.filter(k => k.year === year);
  return phead({ crumb: [["Khôlles"]], title: "Questions de khôlle", meta: `<span class="tag y">${YEARS[year]}</span>`, photo: "oral" }) + `<div class="wrap layout full"><article class="prose">
    <p>Une heure au tableau : une question de cours, puis un exercice. Voici les questions de cours à savoir refaire.</p>
    ${groups.length ? groups.map(k => `<h2>${sid(k.subj).name}</h2><ol class="qlist">${k.qs.map(x => `<li><span>${x}</span></li>`).join("")}</ol>`).join("") : empty("Bientôt", "")}
  </article>${khollesEx()}</div>`;
}

function concoursPage() {
  return phead({ crumb: [["Concours"]], title: "Préparer les concours", photo: "hero" }) + `<div class="wrap layout full">
    <a class="cmd-band" href="#commando"><span class="tx"><span class="k">Nouveau · Niveau ★★★★★</span><h2>Formation commando <span style="white-space:nowrap">X-ENS</span></h2><p>Les exercices les plus durs, corrigés sans sauter une seule étape.</p><span><span class="btn btn-yellow">Entrer dans la formation ${I.arrow}</span></span></span><span class="ph">${img("commando", "(max-width:820px) 100vw, 45vw")}</span></a>
    <article class="prose">
    <h2>Les banques</h2>
    <div class="cards">${BANKS.map(b => { const n = sujetsOf(b.name).length; return n ? `<a class="card card-link" href="#banque-${bslug(b.name)}"><h3>${b.name}</h3><p>${b.desc}</p><span class="card-go">${plural(n, "sujet")} corrigé${n > 1 ? "s" : ""} ${I.arrow}</span></a>` : `<div class="card"><h3>${b.name}</h3><p>${b.desc}</p></div>`; }).join("")}</div>
    <h2>L'année de MP</h2>
    <ul class="steps-list">
      <li><b>Décembre · janvier</b><span>Inscriptions sur le site du SCEI.</span></li>
      <li><b>Avril · mai</b><span>Les écrits, sur plusieurs semaines.</span></li>
      <li><b>Juin · juillet</b><span>Les oraux et le TIPE, pour les admissibles.</span></li>
    </ul>
    <p>Les dates exactes changent chaque année : vérifie-les sur <a href="https://www.scei-concours.fr" target="_blank" rel="noopener">scei-concours.fr</a>.</p>
    <h2>Réviser</h2>
    <ul><li>Dès janvier, un sujet complet en temps limité toutes les deux semaines.</li><li>Un carnet d'erreurs : chaque faute de DS, avec la bonne méthode.</li><li>Les dernières semaines, les annales des concours que tu vises.</li></ul>
  </article></div>`;
}

const bslug = n => norm(n).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const ANN = () => (sid("annales") || { years: { mp: [] } }).years.mp;
const sujetsOf = bank => ANN().map((c, i) => ({ c, i })).filter(x => x.c.bank === bank);
const qrange = e => { const q = e.steps.map(st => st.q).filter(Boolean); return q.length ? `Q${Math.min(...q)} à Q${Math.max(...q)}` : ""; };
function banquePage(slug) {
  const b = BANKS.find(x => bslug(x.name) === slug); if (!b) return notFound();
  const list = sujetsOf(b.name);
  return phead({ crumb: [["Concours", "#concours"], [b.name]], title: esc(b.name), meta: `<span class="tag y">${plural(list.length, "sujet")}</span><span class="tag">Écrits</span>`, photo: "hero" }) + `<div class="wrap layout full"><div>
    <p style="font-family:var(--f-read);font-size:17px;color:var(--muted);margin:0 0 28px;max-width:46em">${b.desc} Chaque sujet est donné tel qu'il a été posé, avec un corrigé question par question.</p>
    <ol class="chapters stagger">${list.map(({ c, i }) => `<li><a href="#c-annales-mp-${i}"><span class="num">${c.annee}</span><h3>${esc(c.epreuve)} · ${esc(c.filiere)} <span style="font-weight:500;color:var(--muted)">· ${esc(c.titre)}</span></h3><span class="info"><span><b>${c.nq}</b> questions</span><svg class="go" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a></li>`).join("")}</ol>
  </div></div>`;
}
function sujetPage(i) {
  const c = ANN()[i]; if (!c) return notFound();
  const parts = exOf("annales", "mp", i);
  return phead({ crumb: [["Concours", "#concours"], [c.bank, "#banque-" + bslug(c.bank)], [c.epreuve + " " + c.annee]], title: esc(c.titre), meta: `<span class="tag y">${esc(c.bank)} ${c.annee}</span><span class="tag">${esc(c.epreuve)} · ${esc(c.filiere)}</span><span class="tag">${esc(c.duree)}</span><span class="tag">${c.nq} questions</span>` }) + `<div class="wrap layout full"><div>
    <h2 style="margin:0 0 14px">Le sujet</h2>
    <p style="font-family:var(--f-read);font-size:17px;color:var(--muted);margin:0 0 18px;max-width:46em">${c.intro}</p>
    <div data-pdf="${c.pdf}" data-title="${esc(c.bank)} ${c.annee} · ${esc(c.epreuve)} ${esc(c.filiere)}"></div>
    <h2 style="margin:40px 0 8px">Le corrigé, question par question</h2>
    <p style="font-family:var(--f-read);font-size:17px;color:var(--muted);margin:0 0 24px;max-width:46em">Une page par partie. L'énoncé reste affiché à côté du corrigé, et chaque question est découpée en étapes avec un indice.</p>
    <ol class="chapters stagger">${parts.map(e => `<li><a href="#e-${e.id}"><span class="num" style="white-space:nowrap;min-width:5.5em">${esc(e.part)}</span><h3>${esc(e.title)}</h3><span class="info">${[].concat(e.viz || []).some(v => v.type === "lab") ? `<span style="color:var(--gold-ink);font-weight:700">Labo interactif</span>` : ""}<span><b>${qrange(e)}</b></span><svg class="go" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a></li>`).join("")}</ol>
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
  return phead({ crumb: [["Oraux", "#oral"], ["Mathématiques"]], title: "Oraux de mathématiques", meta: `<span class="tag y">${list.length} chapitres</span><span class="tag">CCINP · Mines-Télécom · Centrale · Mines-Ponts</span>`, photo: "oral" })
  + `<div class="wrap layout full"><div>
    <p style="font-family:var(--f-read);font-size:17px;color:var(--muted);margin:0 0 28px;max-width:46em">Chaque chapitre regroupe des exercices tombés à l'oral, rangés par concours. Les corrigés détaillent chaque calcul, avec des exemples et des contre-exemples.</p>
    <ol class="chapters stagger">${list.map((c, i) => { const n = exOf("oraux", "mp", i).length; return `<li><a href="#c-oraux-mp-${i}"><span class="num">${pad(i + 1)}</span><h3>${esc(c.t)}</h3><span class="info"><span class="ccs">${(c.cc || []).map(k => `<i class="${EXERCISES.some(e => e.subj === "oraux" && e.chap === i && e.concours === k) ? "on" : ""}">${esc(CONC[k])}</i>`).join("")}</span>${n ? `<span><b>${n}</b> exo${n > 1 ? "s" : ""}</span>` : ""}<svg class="go" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a></li>`; }).join("")}</ol>
  </div></div>`;
}

function commandoPage() {
  const s = sid("xens"), list = s.years.mp;
  const next = ["Fonctions d'une variable réelle", "Intégration", "Suites et séries", "Fonctions de plusieurs variables", "Équations différentielles"];
  return `
  <section class="hero"><div class="photo">${img("commando", "100vw", true)}</div><div class="wrap">
    <h1><span class="line"><span>Formation</span></span><span class="line"><span><span class="mark">commando</span></span></span><span class="line"><span>X-ENS.</span></span></h1>
    <p>Les exercices les plus durs du programme, corrigés sans sauter une seule étape.</p>
    <div class="ctas"><a class="btn btn-yellow" href="#c-xens-mp-0">Commencer l'entraînement ${I.arrow}</a><a class="btn btn-glass" href="#concours">Retour aux concours</a></div>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="cmd-rules stagger">
      <div><b>★★★★★</b><span>Tous les exercices sont au niveau des concours X-ENS.</span></div>
      <div><b>Aucune étape sautée</b><span>Chaque ligne du corrigé est justifiée, avec le rappel de cours utilisé.</span></div>
      <div><b>Le cours d'abord</b><span>Chaque sous-chapitre commence par un résumé et ses formules à connaître.</span></div>
    </div>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-title"><h2>Chapitre 1 · ${esc(s.part)}</h2></div>
    <ol class="chapters stagger">${list.map((c, i) => { const n = exOf("xens", "mp", i).length, r = PDFS.has(`resume-xens-mp-${pad(i + 1)}`); return (n || r) ? `<li><a href="#c-xens-mp-${i}"><span class="num">1.${i + 1}</span><h3>${esc(c.t)}</h3><span class="info">${r ? "<span>Résumé</span>" : ""}${n ? `<span><b>${n}</b> exos</span>` : ""}<svg class="go" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a></li>` : `<li><div class="soonrow"><span class="num">1.${i + 1}</span><h3>${esc(c.t)}</h3><span class="info">En préparation</span></div></li>`; }).join("")}</ol>
  </div></section>
  <section class="sec"><div class="wrap">
    <div class="sec-title"><h2>La suite du programme</h2></div>
    <ul class="roadmap">${next.map((t, k) => `<li>Chapitre ${k + 2} · ${t}</li>`).join("")}</ul>
  </div></section>`;
}

function notFound() {
  return phead({ crumb: [["Page introuvable"]], title: "Cette page n'existe pas." }) + `<div class="wrap layout full"><div><a class="btn btn-yellow" href="#accueil">Retour à l'accueil</a></div></div>`;
}

/* ---------- Rappels de cours ---------- */
function rchip(id, ex) {
  const r = RAPPELS[id]; if (!r) return "";
  return `<button type="button" class="rchip" data-r="${id}"${ex && ex.id ? ` data-ex="${ex.id}"` : ""}>${esc(r.t)}</button>`;
}
let drawerReturn = null;
function openRappel(id, exId, src) {
  const r = RAPPELS[id]; if (!r) return;
  const ex = exId && EXERCISES.find(x => x.id === exId);
  const here = ex && ex.ctx && ex.ctx[id];
  const links = stepLinks(ex, st => (st.rappels || []).includes(id), "Utilisé dans le corrigé");
  closeRappel(true);
  drawerReturn = document.activeElement;
  const scrim = document.createElement("div"); scrim.className = "scrim"; scrim.id = "scrim";
  const dr = document.createElement("aside"); dr.className = "drawer"; dr.id = "drawer"; dr.setAttribute("role", "dialog"); dr.setAttribute("aria-modal", "true"); dr.setAttribute("aria-labelledby", "dr-t");
  dr.innerHTML = `<button class="iconbtn close" type="button" aria-label="Fermer le rappel">${I.close}</button><span class="kicker">Rappel de cours</span><h3 id="dr-t">${esc(r.t)}</h3><div class="body">${annotate(r.b, ex || null)}</div>${here || links ? `<div class="here"><h4>Dans cet exercice</h4>${here ? `<div class="body">${annotate(here, ex)}</div>` : ""}<div class="hq-slot"></div>${links}</div>` : ""}`;
  const stp = src && !src.closest("#drawer") && src.closest(".step");
  const res = stp && ($$(".prose .sbox", stp)[0] || $(".prose > p", stp) || $(".prose", stp));
  const slot = $(".hq-slot", dr);
  if (slot) { if (res) { const w = document.createElement("div"); w.innerHTML = `<p class="here-lab">Ce que ça donne à cette étape :</p>`; const q = document.createElement("div"); q.className = "here-quote"; const c = res.cloneNode(true); c.querySelectorAll("button, figure").forEach(x => x.remove()); q.appendChild(c); w.appendChild(q); slot.replaceWith(w); } else slot.remove(); }
  wireHere(dr);
  document.body.append(scrim, dr);
  scrim.addEventListener("click", () => closeRappel());
  $(".close", dr).addEventListener("click", () => closeRappel());
  $(".close", dr).focus();
  typeset(dr);
}
function closeRappel(silent) {
  const d = $("#drawer"), s = $("#scrim");
  if (d) d.remove(); if (s) s.remove();
  if (!silent && drawerReturn && drawerReturn.focus) drawerReturn.focus();
}
document.addEventListener("click", e => {
  const b = e.target.closest(".rchip"); if (!b) return;
  openRappel(b.dataset.r, b.dataset.ex, b);
});

/* ---------- Notions de cours soulignées en bleu ---------- */
const NOTIONS = window.LEMME.NOTIONS || {};
const NOTION_LIST = Object.entries(NOTIONS).sort((a, b) => (b[1].p.includes(" ") ? 1 : 0) - (a[1].p.includes(" ") ? 1 : 0)).map(([id, n]) => { try { return { id, re: new RegExp("(?<![\\p{L}\\p{N}-])(?:" + n.p + ")(?![\\p{L}\\p{N}-])", "iu") }; } catch (e) { return null; } }).filter(Boolean);
function annotateText(txt, used, skip) {
  let pieces = [{ t: txt }];
  for (const n of NOTION_LIST) {
    if (used.has(n.id) || skip.has(n.id)) continue;
    for (let i = 0; i < pieces.length; i++) {
      const pc = pieces[i]; if (pc.w) continue;
      const m = n.re.exec(pc.t); if (!m) continue;
      pieces.splice(i, 1, { t: pc.t.slice(0, m.index) }, { t: m[0], w: n.id }, { t: pc.t.slice(m.index + m[0].length) });
      used.add(n.id); break;
    }
  }
  return pieces.map(pc => pc.w ? `<span class="nt" data-n="${pc.w}" tabindex="0" role="button">${pc.t}</span>` : pc.t).join("");
}
/* Souligne la première apparition de chaque notion dans un bloc HTML, hors formules, code et mots déjà expliqués. */
function annotate(html, ex, used) {
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
  return `<div class="here-steps"><h4>${label}</h4>${ks.map(k => { const st = ex.steps[k]; const pos = ex.qnav ? qpos(ex, k) : null; return `<button type="button" class="here-go" data-go-step="${k}">${st.q ? `Q${st.q}` : `Étape ${k + 1}`}${pos && pos[1] > 1 ? ` · étape ${pos[0]}` : ""} — ${esc(st.t)}</button>`; }).join("")}</div>`;
}
function excerpt(src) {
  if (!src || src.closest("#drawer")) return null;
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
  closeRappel(true); closeTip();
  drawerReturn = document.activeElement;
  const scrim = document.createElement("div"); scrim.className = "scrim"; scrim.id = "scrim";
  const dr = document.createElement("aside"); dr.className = "drawer"; dr.id = "drawer"; dr.setAttribute("role", "dialog"); dr.setAttribute("aria-modal", "true"); dr.setAttribute("aria-labelledby", "dr-t");
  const ex = curEx(), own = ex && ex.nctx && ex.nctx[id];
  let re = null; try { re = new RegExp("(?<![\\p{L}\\p{N}-])(?:" + n.p + ")(?![\\p{L}\\p{N}-])", "iu"); } catch (e) {}
  const q = excerpt(src);
  const links = re ? stepLinks(ex, st => re.test(plainTxt(st.b) + " " + plainTxt(st.h)), "Où on s'en sert dans le corrigé") : "";
  dr.innerHTML = `<button class="iconbtn close" type="button" aria-label="Fermer la notion">${I.close}</button><span class="kicker nt-kicker">Notion de cours</span><h3 id="dr-t">${esc(n.t)}</h3><div class="body">${n.b}</div>${own || q || links ? `<div class="here"><h4>Dans cet exercice</h4>${own ? `<div class="body">${annotate(own, ex)}</div>` : ""}${q ? `<p class="here-lab">Le mot apparaît ici :</p><div class="hq-slot"></div>` : ""}${links}</div>` : ""}`;
  if (q) $(".hq-slot", dr).replaceWith(q);
  wireHere(dr);
  document.body.append(scrim, dr);
  scrim.addEventListener("click", () => closeRappel());
  $(".close", dr).addEventListener("click", () => closeRappel());
  $(".close", dr).focus();
  typeset(dr);
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

/* Rédaction complète d'un corrigé, et sa vue en grand */
function redaction(e) {
  if (e.qnav) return e.steps.map((st, k) => `${k === 0 || e.steps[k - 1].q !== st.q ? `<h3 class="rq">Question ${st.q}</h3>` : ""}<p class="rt"><b>Étape ${qpos(e, k)[0]} · ${esc(st.t)}</b></p>${annotate(st.b, e)}`).join("");
  return e.steps.map((st, k) => `<p class="rt"><b>${k + 1}. ${esc(st.t)}</b></p>${annotate(st.b, e)}`).join("");
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
  bindKeys(ov, e); typeset(ov);
}
function closeBig(silent) {
  const ov = $("#bigread"); if (!ov) return;
  ov.remove(); document.body.style.overflow = ""; closeTip();
  if (!silent && bigReturn && bigReturn.focus) bigReturn.focus();
}

/* ---------- Corrigé pas à pas ---------- */
let player = null;
function mountPlayer(e, host) {
  const n = e.steps.length;
  const all = [...new Set(e.steps.flatMap(s => s.rappels || []))];
  const state = { i: -1 };
  function intro() {
    host.innerHTML = `<div class="start"><p>Cherche d'abord seul. Quand tu es prêt, avance étape par étape avec les flèches du clavier.</p><button class="btn btn-yellow" type="button" id="go">Commencer le corrigé ${I.arrow}</button></div>`;
    $("#go", host).addEventListener("click", () => show(0, 1));
  }
  function show(i, dir) {
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
            ? `<span class="count">Bilan</span><h3>Ce qu'il faut retenir</h3><div class="bilan"><div class="trap"><h4>Le piège</h4>${annotate(e.piege, e)}</div><div class="meth"><h4>La méthode</h4>${annotate(e.methode, e)}</div></div>${all.length ? `<div class="rappels"><span class="lab">Tous les rappels utilisés</span>${all.map(r => rchip(r, e)).join("")}</div>` : ""}<div class="redac"><div class="redac-head"><h4>La rédaction complète</h4><button class="btn btn-ghost btn-sm" type="button" data-big>${I.full} Voir en grand</button></div><div class="prose">${redaction(e)}</div></div>`
            : `${e.qnav ? (qpos(e, state.i)[1] > 1 ? `<span class="count">Étape ${qpos(e, state.i)[0]} / ${qpos(e, state.i)[1]}</span>` : "") : `<span class="count">${st.q ? `Question ${st.q} · ` : ""}Étape ${state.i + 1} sur ${n}</span>`}<h3>${esc(st.t)}</h3>${st.h ? `<details class="hint"><summary><span class="hint-ico" aria-hidden="true">?</span>Indice</summary><div class="prose">${annotate(st.h, e)}</div></details>` : ""}<div class="prose">${annotate(st.b, e)}</div>${(st.rappels || []).length ? `<div class="rappels"><span class="lab">Rappels utilisés</span>${st.rappels.map(r => rchip(r, e)).join("")}</div>` : ""}`}
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
    closeTip(); bindKeys(host, e);
    if (e.side) {
      const q = last ? 0 : (st.q || 0);
      const lis = $$(".side-en .enonce > ol > li");
      const num = li => { const ol = li.parentElement; return (ol.hasAttribute("start") ? +ol.getAttribute("start") : 1) + [...ol.children].indexOf(li); };
      lis.forEach(li => li.classList.toggle("qon", num(li) === q));
      const on = lis.find(li => num(li) === q), box = $(".side-en");
      if (on && box && box.scrollHeight > box.clientHeight) box.scrollTo({ top: Math.max(0, on.offsetTop - 80), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
    typeset(host);
    const top = host.closest(".panelbox").getBoundingClientRect().top;
    if (top < 72 || top > innerHeight * .6) host.closest(".panelbox").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }
  intro();
  player = {
    go(k) { show(k, k >= state.i ? 1 : -1); },
    key(k) {
      if (state.i < 0) { if (k === "ArrowRight") show(0, 1); return; }
      if (k === "ArrowRight" && state.i < n) show(state.i + 1, 1);
      if (k === "ArrowLeft" && state.i > 0) show(state.i - 1, -1);
    }
  };
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeMenus(); closeTip(); results.hidden = true; if ($("#drawer")) closeRappel(); else if ($("#bigread")) closeBig(); return; }
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

const fx = v => +(+v).toFixed(1);
/* ---------- Labo matrices : voir comment une matrice est construite ---------- */
const nf = (v, d = 2) => { const r = +(+v).toFixed(d); return (Object.is(r, -0) ? 0 : r).toString().replace(".", ",").replace("-", "−"); };
const sub = s => `<sub>${s}</sub>`;
function mxHtml(rows, o = {}) {
  const m = rows[0].length, bs = o.block || 0;
  return `<div class="mx${o.small ? " sm" : ""}" style="grid-template-columns:repeat(${m},auto)" role="grid" aria-label="${esc(o.label || "Matrice")}">${rows.map((r, i) => r.map((v, j) => {
    const on = o.on ? o.on(i, j, v) : v !== 0;
    const alt = bs && ((Math.floor(i / bs) + Math.floor(j / bs)) % 2) ? " alt" : "";
    const st = o.heat ? ` style="--h:${Math.min(1, Math.abs(v) / o.heat).toFixed(2)}"` : "";
    return `<span class="c${on ? " on" : ""}${o.heat ? (v < 0 ? " neg heat" : " heat") : ""}${alt}" data-i="${i}" data-j="${j}"${st} role="gridcell">${o.fmt ? o.fmt(v, i, j) : v}</span>`;
  }).join("")).join("")}</div>`;
}
function labBind(host, sel, onHover, onLeave) {
  $$(sel + " .c", host).forEach(c => {
    const go = () => { $$(".c.hl", host).forEach(x => x.classList.remove("hl")); c.classList.add("hl"); onHover(+c.dataset.i, +c.dataset.j); };
    c.addEventListener("mouseenter", go); c.addEventListener("click", go);
  });
  const g = $(sel, host); if (g && onLeave) g.addEventListener("mouseleave", () => { $$(".c.hl", host).forEach(x => x.classList.remove("hl")); onLeave(); });
}
const labSeg = (name, opts, cur) => `<span class="seg lab-seg" role="group" aria-label="${name}">${opts.map(o => `<button type="button" data-v="${o[0]}" aria-pressed="${o[0] === cur}">${o[1]}</button>`).join("")}</span>`;
const labRange = (k, label, min, max, step, v) => `<div><label for="lb-${k}">${label}<output id="lbo-${k}">${nf(v)}</output></label><input type="range" id="lb-${k}" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${v}"></div>`;
function labWire(host, st, draw) {
  $$("input[type=range][data-k]", host).forEach(r => {
    r.addEventListener("input", () => { const o = $("#lbo-" + r.dataset.k, host); if (o) o.textContent = nf(+r.value); });
    r.addEventListener("change", () => { st[r.dataset.k] = +r.value; draw(); });
  });
  $$(".lab-seg", host).forEach(g => $$("button", g).forEach(b => b.addEventListener("click", () => { st[g.dataset.s] = b.dataset.v; draw(); })));
}
/* Graphe sur un cercle : sommets 1..n, arêtes ou flèches */
function cycleSvg(n, edges, o = {}) {
  const W = 260, c = 130, R = 100, P = k => { const a = Math.PI / 2 - 2 * Math.PI * (k - 1) / n + (o.rot || 0); return [c + R * Math.cos(a), c - R * Math.sin(a)]; };
  let s = "";
  edges.forEach(([a, b, cls]) => {
    const [x1, y1] = P(a), [x2, y2] = P(b);
    if (a === b) { s += `<circle cx="${fx(x1 + (x1 - c) * 0.16)}" cy="${fx(y1 + (y1 - c) * 0.16)}" r="11" class="lab-e ${cls || ""}" style="fill:none"/>`; return; }
    if (o.arrows) { const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, ex = x2 - ux * 13, ey = y2 - uy * 13, sx = x1 + ux * 13, sy = y1 + uy * 13, w = 4.5; s += `<line x1="${fx(sx)}" y1="${fx(sy)}" x2="${fx(ex - ux * 6)}" y2="${fx(ey - uy * 6)}" class="lab-e ${cls || ""}"/><polygon points="${fx(ex)},${fx(ey)} ${fx(ex - ux * 9 - uy * w)},${fx(ey - uy * 9 + ux * w)} ${fx(ex - ux * 9 + uy * w)},${fx(ey - uy * 9 - ux * w)}" class="lab-ah ${cls || ""}"/>`; }
    else s += `<line x1="${fx(x1)}" y1="${fx(y1)}" x2="${fx(x2)}" y2="${fx(y2)}" class="lab-e ${cls || ""}"/>`;
  });
  for (let k = 1; k <= n; k++) { const [x, y] = P(k); s += `<circle cx="${fx(x)}" cy="${fx(y)}" r="12" class="lab-v${(o.hv || []).includes(k) ? " on" : ""}"/><text x="${fx(x)}" y="${fx(y + 4.5)}" text-anchor="middle" class="lab-vt">${k}</text>`; }
  return `<svg viewBox="0 0 ${W} ${W}" width="${W}" height="${W}" class="lab-svg" role="img" aria-label="${esc(o.label || "Graphe")}">${s}</svg>`;
}

/* Mode 1 : matrices de décalage C(n,k), J(1) = C(n,1) + C(n,n-1), valeurs propres */
function labCycle(host) {
  const st = { n: 6, k: 1, v: "C" };
  const C = (n, k) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => { const I = i + 1, J = j + 1; return ((I <= k && J === I + n - k) || (I >= k + 1 && J === I - k)) ? 1 : 0; }));
  function draw() {
    const { n } = st; if (st.k > n) st.k = n; const k = st.k;
    const M = st.v === "C" ? C(n, k) : C(n, 1).map((r, i) => r.map((v, j) => v + C(n, n - 1)[i][j]));
    const ctl = `<div class="lab-ctl">${labSeg("Matrice", [["C", `C${sub("n,k")}`], ["J", `J${sub("n")}<sup>(1)</sup>`], ["S", "Valeurs propres"]], st.v).replace('class="seg lab-seg"', 'class="seg lab-seg" data-s="v"')}<div class="viz-ctrl">${labRange("n", "Taille n", 3, 10, 1, n)}${st.v === "C" ? labRange("k", "Décalage k", 1, n, 1, k) : ""}</div></div>`;
    let body;
    if (st.v === "S") {
      const W = 300, c = 150, R = 95, pts = Array.from({ length: n }, (_, j) => [Math.cos(2 * Math.PI * j / n), Math.sin(2 * Math.PI * j / n)]);
      let s = `<line x1="20" y1="${c}" x2="${W - 20}" y2="${c}" class="lab-ax"/><line x1="${c}" y1="20" x2="${c}" y2="${W - 20}" class="lab-ax"/><circle cx="${c}" cy="${c}" r="${R}" class="lab-ax" style="fill:none"/>`;
      pts.forEach(([x, y], j) => { s += `<line x1="${fx(c + R * x)}" y1="${fx(c - R * y)}" x2="${fx(c + R * x)}" y2="${c}" class="lab-proj"/><circle cx="${fx(c + R * x)}" cy="${fx(c - R * y)}" r="5" class="lab-pt"/><text x="${fx(c + (R + 16) * x)}" y="${fx(c - (R + 16) * y + 4)}" text-anchor="middle" class="lab-vt sm">ω${String(j).split("").map(d => "₀₁₂₃₄₅₆₇₈₉"[+d]).join("")}</text><circle cx="${fx(c + R * x)}" cy="${c}" r="4" class="lab-pt2"/>`; });
      s += `<text x="${W - 22}" y="${c - 6}" text-anchor="end" class="lab-vt sm">Re</text>`;
      body = `<div class="lab-row"><svg viewBox="0 0 ${W} ${W}" width="${W}" height="${W}" class="lab-svg" role="img" aria-label="Racines n-ièmes de l'unité">${s}</svg>
        <div class="lab-txt"><p>Les points bleus sont les valeurs propres $\\omega_k = e^{2ik\\pi/n}$ de $C_{n,1}$. Comme $C_{n,n-1} = C_{n,1}^{-1}$, la même matrice de passage donne pour $J_n^{(1)}$ les valeurs propres</p><p style="text-align:center">$\\lambda_k = \\omega_k+\\overline{\\omega_k} = 2\\operatorname{Re}(\\omega_k) = 2\\cos\\frac{2k\\pi}n$,</p><p>soit deux fois l'abscisse du point (points jaunes) :</p><div class="lab-chips">${pts.map(([x], j) => `<span>λ${sub(j)} = ${nf(2 * x)}</span>`).join("")}</div><p class="lab-small">Somme : ${nf(pts.reduce((a, p) => a + 2 * p[0], 0))} = trace de $J_n^{(1)}$ (diagonale nulle).</p></div></div>`;
    } else {
      const edges = [];
      if (st.v === "C") for (let j = 1; j <= n; j++) { const i = (j - 1 + k) % n + 1; edges.push([j, i, ""]); }
      else for (let j = 1; j <= n; j++) edges.push([j, j % n + 1, ""]);
      body = `<div class="lab-row"><div><div class="lab-cap">${st.v === "C" ? `C${sub(`${n},${k}`)}` : `J${sub(n)}<sup>(1)</sup> = C${sub(`${n},1`)} + C${sub(`${n},${n - 1}`)}`}</div>${mxHtml(M, { label: "Matrice" })}</div><div><div class="lab-cap">${st.v === "C" ? `e${sub("j")} → e${sub("j+k")} (modulo n)` : "Chaque sommet relié à ses deux voisins"}</div><div data-r="g">${cycleSvg(n, edges, { arrows: st.v === "C" })}</div></div></div><div class="lab-note" data-r="n"></div>`;
    }
    host.innerHTML = ctl + body;
    labWire(host, st, draw);
    if (st.v === "S") { typeset(host); return; }
    const note = $("[data-r=n]", host);
    const idle = () => { note.innerHTML = st.v === "C" ? `<b>Comment lire la matrice.</b> Chaque <b>colonne j</b> contient un seul 1, à la ligne j + k (on revient à 1 après n). La colonne j donne l'image de e${sub("j")} : C${sub("n,k")} e${sub("j")} = e${sub("j+k")}. Décaler de k crans, c'est décaler k fois d'un cran : <b>C${sub("n,1")}<sup>k</sup> = C${sub("n,k")}</b>. Bouge k jusqu'à n : on retombe sur I${sub("n")}.<br><span class="lab-small">Survole une case pour voir la règle de l'énoncé.</span>` : `<b>Comment lire la matrice.</b> J${sub("n")}<sup>(1)</sup>(i,j) = 1 exactement quand j = i + 1 ou j = i − 1 (modulo n) : la ligne i a deux 1, aux colonnes des deux voisins de i sur le cercle. C'est la matrice d'adjacence du cycle (Q8).<br><span class="lab-small">Survole une case.</span>`; };
    idle();
    labBind(host, ".mx", (i, j) => {
      const I = i + 1, J = j + 1;
      if (st.v === "C") {
        const c1 = I <= k && J === I + n - k, c2 = I >= k + 1 && J === I - k;
        note.innerHTML = `<b>Case (${I}, ${J}).</b> ${c1 ? `i = ${I} ≤ k = ${k} et j = i + n − k = ${I} + ${n} − ${k} = ${J} : <b>1</b>.` : c2 ? `i = ${I} ≥ k + 1 = ${k + 1} et j = i − k = ${I} − ${k} = ${J} : <b>1</b>.` : `${I <= k ? `i ≤ k, il faudrait j = ${I + n - k}` : `i ≥ k + 1, il faudrait j = ${I - k}`} : <b>0</b>.`} ${M[i][j] ? `Donc la colonne ${J} envoie e${sub(J)} sur e${sub(I)}.` : ""}`;
        $("[data-r=g]", host).innerHTML = cycleSvg(n, Array.from({ length: n }, (_, t) => { const a = t + 1, b = (a - 1 + k) % n + 1; return [a, b, M[i][j] && a === J ? "on" : ""]; }), { arrows: true, hv: [I, J] });
      } else {
        const nb = J === I % n + 1 || I === J % n + 1;
        note.innerHTML = `<b>Case (${I}, ${J}).</b> ${nb ? `Les sommets ${I} et ${J} sont voisins sur le cercle : <b>1</b>. ${C(n, 1)[i][j] ? `Il vient de C${sub("n,1")} (i = j + 1).` : `Il vient de C${sub("n,n−1")} (j = i + 1).`}` : `${I} et ${J} ne sont pas voisins : <b>0</b>.`}`;
        $("[data-r=g]", host).innerHTML = cycleSvg(n, Array.from({ length: n }, (_, t) => [t + 1, (t + 1) % n + 1, nb && ((t + 1 === I && (t + 1) % n + 1 === J) || (t + 1 === J && (t + 1) % n + 1 === I)) ? "on" : ""]), { hv: [I, J] });
      }
    }, () => { idle(); draw(); });
  }
  draw();
}

/* Mode 2 : produit de Kronecker, puis J9(2) */
function labKron(host) {
  const st = { v: "AB", A: [[1, 2], [3, 4]], B: [[0, 1], [1, 2]] };
  const kron = (A, B) => { const r = B.length, s = B[0].length; return Array.from({ length: A.length * r }, (_, i) => Array.from({ length: A[0].length * s }, (_, j) => A[Math.floor(i / r)][Math.floor(j / s)] * B[i % r][j % s])); };
  const I3 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]], J3 = [[0, 1, 1], [1, 0, 1], [1, 1, 0]];
  const T1 = kron(I3, J3), T2 = kron(J3, I3), T = T1.map((r, i) => r.map((v, j) => v + T2[i][j]));
  function gridSvg(hl) {
    const P = v => { const a = Math.floor((v - 1) / 3), b = (v - 1) % 3; return [50 + b * 80, 40 + a * 80]; };
    let s = "";
    for (let u = 1; u <= 9; u++) for (let v = u + 1; v <= 9; v++) {
      const same = Math.floor((u - 1) / 3) === Math.floor((v - 1) / 3), col = (u - 1) % 3 === (v - 1) % 3; if (!same && !col) continue;
      const [x1, y1] = P(u), [x2, y2] = P(v), far = Math.abs(x2 - x1) > 100 || Math.abs(y2 - y1) > 100;
      const on = hl && ((hl[0] === u && hl[1] === v) || (hl[0] === v && hl[1] === u));
      const cls = `lab-e ${same ? "" : "dash"}${on ? " on" : ""}`;
      if (far) { const mx = (x1 + x2) / 2 + (same ? 0 : -34), my = (y1 + y2) / 2 + (same ? -34 : 0); s += `<path d="M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}" class="${cls}" style="fill:none"/>`; }
      else s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"/>`;
    }
    for (let v = 1; v <= 9; v++) { const [x, y] = P(v); s += `<circle cx="${x}" cy="${y}" r="13" class="lab-v${hl && hl.includes(v) ? " on" : ""}"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" class="lab-vt">${v}</text>`; }
    return `<svg viewBox="0 0 270 250" width="270" height="250" class="lab-svg" role="img" aria-label="Graphe de la grille 3 par 3">${s}</svg>`;
  }
  function draw() {
    const ctl = `<div class="lab-ctl">${labSeg("Exemple", [["AB", "A ⊗ B (exemple)"], ["T1", `I${sub(3)} ⊗ J${sub(3)}<sup>(1)</sup>`], ["T2", `J${sub(3)}<sup>(1)</sup> ⊗ I${sub(3)}`], ["T", `J${sub(9)}<sup>(2)</sup> (somme)`]], st.v).replace('class="seg lab-seg"', 'class="seg lab-seg" data-s="v"')}</div>`;
    let body;
    if (st.v === "AB") {
      const inp = (X, nm) => `<div class="mx-in" style="grid-template-columns:repeat(2,auto)">${X.map((r, i) => r.map((v, j) => `<input type="number" step="1" value="${v}" data-m="${nm}" data-i="${i}" data-j="${j}" aria-label="${nm}(${i + 1},${j + 1})">`).join("")).join("")}</div>`;
      body = `<div class="lab-row" style="align-items:center"><div><div class="lab-cap">A (modifiable)</div>${inp(st.A, "A")}</div><span class="lab-op">⊗</span><div><div class="lab-cap">B (modifiable)</div>${inp(st.B, "B")}</div><span class="lab-op">=</span><div><div class="lab-cap">A ⊗ B : 2 × 2 blocs a${sub("ij")} B</div>${mxHtml(kron(st.A, st.B), { block: 2, on: () => false, label: "A tenseur B" })}</div></div><div class="lab-note" data-r="n"></div>`;
    } else {
      const M = st.v === "T1" ? T1 : st.v === "T2" ? T2 : T;
      body = `<div class="lab-row"><div><div class="lab-cap">${st.v === "T1" ? "Blocs diagonaux : 1 · J, les autres 0 · J" : st.v === "T2" ? "Bloc (a, a') = J(a, a') · I₃" : "Somme des deux"}</div>${mxHtml(M, { block: 3, label: "Matrice 9 par 9", small: true })}</div><div><div class="lab-cap">Sommet (a, b) numéroté 3(a − 1) + b</div><div data-r="g">${gridSvg()}</div></div></div><div class="lab-note" data-r="n"></div>`;
    }
    host.innerHTML = ctl + body;
    labWire(host, st, draw);
    const note = $("[data-r=n]", host);
    if (st.v === "AB") {
      const idle = () => { note.innerHTML = `<b>Comment construire A ⊗ B.</b> On remplace chaque coefficient a${sub("ij")} de A par le bloc a${sub("ij")}·B. Les blocs sont colorés en damier. Modifie A ou B, puis survole une case du résultat.`; };
      idle();
      $$(".mx-in input", host).forEach(x => x.addEventListener("change", () => { const v = parseFloat(x.value.replace(",", ".")); st[x.dataset.m][+x.dataset.i][+x.dataset.j] = isFinite(v) ? v : 0; draw(); }));
      labBind(host, ".mx", (i, j) => { const a = Math.floor(i / 2), b = Math.floor(j / 2), p = i % 2, q = j % 2; note.innerHTML = `<b>Case (${i + 1}, ${j + 1}).</b> Ligne ${i + 1} = bloc ${a + 1}, position ${p + 1} ; colonne ${j + 1} = bloc ${b + 1}, position ${q + 1}. Coefficient = a${sub(`${a + 1}${b + 1}`)} × b${sub(`${p + 1}${q + 1}`)} = ${nf(st.A[a][b])} × ${nf(st.B[p][q])} = <b>${nf(st.A[a][b] * st.B[p][q])}</b>.`; }, idle);
      return;
    }
    const M = st.v === "T1" ? T1 : st.v === "T2" ? T2 : T;
    const idle = () => { note.innerHTML = st.v === "T1" ? `<b>I₃ ⊗ J₃<sup>(1)</sup></b> : le bloc (a, a') vaut I₃(a, a')·J₃<sup>(1)</sup>, donc J sur la diagonale et 0 ailleurs. Il relie les sommets <b>d'une même ligne</b> du dessin (traits pleins).` : st.v === "T2" ? `<b>J₃<sup>(1)</sup> ⊗ I₃</b> : le bloc (a, a') vaut J(a, a')·I₃, donc I₃ hors diagonale. Il relie les sommets <b>d'une même colonne</b> (pointillés).` : `<b>J₉<sup>(2)</sup></b> : (i, j) vaut 1 si i et j sont sur la même ligne ou la même colonne de la grille 3 × 3 (sur un tore, tous sont voisins à n = 3). Chaque sommet a 4 voisins : chaque ligne contient quatre 1.`; };
    idle();
    labBind(host, ".mx", (i, j) => {
      const a = Math.floor(i / 3) + 1, b = i % 3 + 1, a2 = Math.floor(j / 3) + 1, b2 = j % 3 + 1;
      const t1 = a === a2 ? J3[b - 1][b2 - 1] : 0, t2 = b === b2 ? J3[a - 1][a2 - 1] : 0;
      note.innerHTML = `<b>Case (${i + 1}, ${j + 1}).</b> Ligne ${i + 1} ↔ sommet (a, b) = (${a}, ${b}) ; colonne ${j + 1} ↔ (${a2}, ${b2}). Bloc (${a}, ${a2}), position (${b}, ${b2}).<br>I₃ ⊗ J : I₃(${a},${a2}) × J(${b},${b2}) = <b>${t1}</b> ; J ⊗ I₃ : J(${a},${a2}) × I₃(${b},${b2}) = <b>${t2}</b>.${st.v === "T" ? ` Somme : <b>${t1 + t2}</b>.` : ""}`;
      $("[data-r=g]", host).innerHTML = gridSvg(M[i][j] ? [i + 1, j + 1] : null);
    }, () => { idle(); $("[data-r=g]", host).innerHTML = gridSvg(); });
  }
  draw();
}

/* Mode 3 : matrice de transfert du modèle d'Ising, Z_n(h) = tr(A^n) */
function labTransfer(host) {
  const st = { n: 5, b: 0.6, h: 0.3, x: [1, 1, -1, 1, -1, -1, 1, 1] };
  function draw() {
    const { n, b, h } = st, x = st.x.slice(0, n);
    const A = [[Math.exp(b - h), Math.exp(-b - h)], [Math.exp(-b + h), Math.exp(b + h)]];
    const kk = v => v === -1 ? 1 : 2;
    const f = x.map((v, i) => { const w = x[(i + 1) % n]; return { i, v, w, val: Math.exp(b * v * w + h * v), a: kk(v), c: kk(w) }; });
    const prod = f.reduce((p, t) => p * t.val, 1);
    let Z = 0; for (let m = 0; m < 1 << n; m++) { const y = Array.from({ length: n }, (_, i) => (m >> i) & 1 ? 1 : -1); let t = 1; for (let i = 0; i < n; i++) t *= Math.exp(b * y[i] * y[(i + 1) % n] + h * y[i]); Z += t; }
    let P = [[1, 0], [0, 1]]; for (let i = 0; i < n; i++) P = [[P[0][0] * A[0][0] + P[0][1] * A[1][0], P[0][0] * A[0][1] + P[0][1] * A[1][1]], [P[1][0] * A[0][0] + P[1][1] * A[1][0], P[1][0] * A[0][1] + P[1][1] * A[1][1]]];
    const used = new Set(f.map(t => `${t.a - 1}${t.c - 1}`));
    host.innerHTML = `<div class="lab-ctl"><div class="viz-ctrl">${labRange("n", "Nombre de particules n", 2, 8, 1, n)}${labRange("b", "β", 0, 1.5, 0.05, b)}${labRange("h", "h", 0, 1, 0.05, h)}</div></div>
      <div class="lab-cap">Une configuration x (clique sur une particule pour la retourner). Le cercle se referme : x${sub("n+1")} = x${sub("1")}.</div>
      <div class="spins">${x.map((v, i) => `<button type="button" data-s="${i}" class="${v > 0 ? "up" : "dn"}" aria-label="Particule ${i + 1} : ${v > 0 ? "+1" : "−1"}"><b>${v > 0 ? "↑" : "↓"}</b><small>x${sub(i + 1)} = ${v > 0 ? "+1" : "−1"}</small><small>indice ${kk(v)}</small></button>`).join("")}</div>
      <div class="lab-row"><div><div class="lab-cap">A : ligne = indice de x${sub("i")}, colonne = indice de x${sub("i+1")}<br>(indice 1 pour −1, indice 2 pour +1)</div>${mxHtml(A, { fmt: (v, i, j) => nf(v), on: (i, j) => used.has(`${i}${j}`), label: "Matrice A" })}<div class="lab-small" style="margin-top:8px">A(i, j) = exp(β·x·y + h·x) avec x = ±1 lu sur la ligne, y sur la colonne.</div></div>
      <div class="lab-txt"><div class="lab-cap">Le terme de cette configuration dans Z${sub("n")}(h)</div><ol class="lab-fac">${f.map(t => `<li>i = ${t.i + 1} : e<sup>β·(${t.v > 0 ? "+1" : "−1"})(${t.w > 0 ? "+1" : "−1"}) + h·(${t.v > 0 ? "+1" : "−1"})</sup> = A(${t.a}, ${t.c}) = ${nf(t.val, 3)}</li>`).join("")}</ol><p>Produit : <b>${nf(prod, 4)}</b> = A(k${sub(1)},k${sub(2)}) A(k${sub(2)},k${sub(3)}) ⋯ A(k${sub("n")},k${sub(1)}) : un chemin fermé ${f.map(t => t.a).join(" → ")} → ${f[0].a}.</p></div></div>
      <div class="lab-note"><b>Pourquoi la trace.</b> Le coefficient diagonal (k${sub(1)}, k${sub(1)}) de A<sup>n</sup> est la somme de ces produits sur tous les chemins fermés partant de k${sub(1)} (Q20). Sommer sur k${sub(1)}, c'est prendre la trace, et les chemins fermés correspondent exactement aux 2<sup>n</sup> configurations.<br>Somme des ${1 << n} termes : <b>Z${sub(n)} = ${nf(Z, 4)}</b> &nbsp;·&nbsp; tr(A<sup>${n}</sup>) = <b>${nf(P[0][0] + P[1][1], 4)}</b></div>`;
    labWire(host, st, draw);
    $$(".spins button", host).forEach(btn => btn.addEventListener("click", () => { const i = +btn.dataset.s; st.x[i] = -st.x[i]; draw(); }));
  }
  draw();
}

/* Mode 4 : Curie-Weiss et modèle sinus */
function labSpec(host) {
  const st = { v: "CW", n: 4, m: 3 };
  function draw() {
    const ctl = `<div class="lab-ctl">${labSeg("Modèle", [["CW", "Curie-Weiss (Q5)"], ["SI", "Sinus (Q7)"]], st.v).replace('class="seg lab-seg"', 'class="seg lab-seg" data-s="v"')}<div class="viz-ctrl">${st.v === "CW" ? labRange("n", "Taille n", 2, 8, 1, st.n) : labRange("m", "Taille n", 1, 7, 1, st.m)}</div></div>`;
    let body;
    if (st.v === "CW") {
      const n = st.n, J = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 0 : 1 / n)), U = J.map((r, i) => r.map((v, j) => n * v + (i === j ? 1 : 0))), U2 = U.map(r => r.map(() => n));
      body = `<div class="lab-row" style="align-items:center"><div><div class="lab-cap">J${sub(n)}<sup>(C)</sup></div>${mxHtml(J, { fmt: v => v ? `1/${n}` : "0", small: true, label: "J Curie-Weiss" })}</div><span class="lab-op">→</span><div><div class="lab-cap">U${sub(n)} = n J + I${sub(n)}</div>${mxHtml(U, { small: true, label: "U" })}</div><span class="lab-op">→</span><div><div class="lab-cap">U${sub(n)}<sup>2</sup> = n U${sub(n)}</div>${mxHtml(U2, { small: true, label: "U carré" })}</div></div>
      <div class="lab-note"><b>Le calcul.</b> Multiplier par n transforme les 1/n en 1, ajouter I${sub(n)} remplit la diagonale : U${sub(n)} n'a que des 1. Chaque coefficient de U${sub(n)}<sup>2</sup> est une somme de n produits 1 × 1, donc vaut ${n} : U${sub(n)}<sup>2</sup> = ${n} U${sub(n)}. Ainsi X<sup>2</sup> − nX annule U${sub(n)} : Sp(U${sub(n)}) ⊂ {0, ${n}}.<br>U${sub(n)}(1, …, 1) = ${n}·(1, …, 1), et tout vecteur de somme nulle est envoyé sur 0 (espace de dimension ${n - 1}). Puis J = (U − I)/n : Sp(J${sub(n)}<sup>(C)</sup>) = {−1/${n}, ${n - 1}/${n}} = {${nf(-1 / n, 3)} ; ${nf((n - 1) / n, 3)}}.</div>`;
    } else {
      const n = st.m, N = 2 * n + 1, S = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => 2 / Math.sqrt(N) * Math.sin(2 * Math.PI * (i + 1) * (j + 1) / N)));
      const S2 = S.map((r, i) => r.map((_, j) => S[i].reduce((a, _, k) => a + S[i][k] * S[k][j], 0)));
      body = `<div class="lab-row" style="align-items:center"><div><div class="lab-cap">J${sub(n)}<sup>(S)</sup>(i, j) = 2/√${N} · sin(2π i j / ${N})</div>${mxHtml(S, { fmt: v => nf(v), heat: 0.8, small: true, label: "J sinus" })}</div><span class="lab-op">×</span><div><div class="lab-cap">elle-même</div>${mxHtml(S, { fmt: v => nf(v), heat: 0.8, small: true, label: "J sinus" })}</div><span class="lab-op">=</span><div><div class="lab-cap">J × J (arrondi)</div>${mxHtml(S2, { fmt: v => nf(v), on: (i, j) => i === j, small: true, label: "Produit" })}</div></div><div class="lab-note" data-r="n"><b>Le calcul.</b> La matrice est symétrique (i j = j i), donc J<sup>T</sup> J = J × J. Le coefficient (i, j) du produit est le produit scalaire des colonnes i et j : il vaut 1 si i = j et 0 sinon (Q7, avec la somme de cosinus de Q6). Donc J<sup>T</sup> J = I${sub(n)} : J est orthogonale. Survole une case du produit.</div>`;
    }
    host.innerHTML = ctl + body;
    labWire(host, st, draw);
    if (st.v === "SI") {
      const n = st.m, N = 2 * n + 1, note = $("[data-r=n]", host), base = note.innerHTML;
      const grids = $$(".mx", host);
      $$(".c", grids[2]).forEach(c => c.addEventListener("mouseenter", () => {
        const i = +c.dataset.i + 1, j = +c.dataset.j + 1;
        note.innerHTML = i === j ? `<b>Case (${i}, ${i}).</b> Σ ${4}/${N}·sin²(2π ${i} k/${N}) = 2/${N}·Σ (1 − cos(4π ${i} k/${N})) = 2/${N}·(${n} − Q6) = 2/${N}·(${n} + 1/2) = <b>1</b>.` : `<b>Case (${i}, ${j}).</b> sin a sin b = ½(cos(a − b) − cos(a + b)) : on obtient deux sommes de cosinus du type Q6, en x = π(${i} − ${j})/${N} et π(${i} + ${j})/${N}. Les sin((2n + 1)x) valent sin(π(${i} ∓ ${j})) = 0, donc le total vaut <b>0</b>.`;
      }));
      grids[2].addEventListener("mouseleave", () => note.innerHTML = base);
    }
  }
  draw();
}
/* Mode 5 : l'opérateur ξ sur les polynômes de Laurent (X-ENS 2025) */
function labXi(host) {
  const K0 = -6, K1 = 3;
  const st = { c: { "-3": 1, "-1": 2, "1": 1 }, log: [], n: 2, v: "op" };
  const term = (a, k) => { const s = a < 0 ? "−" : "+", m = Math.abs(a), co = m === 1 && k !== 0 ? "" : String(m); return `${s} ${co}${k === 0 ? "" : k === 1 ? "X" : `X<sup>${k}</sup>`}`; };
  const fmtF = c => { const ks = Object.keys(c).map(Number).filter(k => c[k]).sort((a, b) => a - b); if (!ks.length) return "0"; const s = ks.map(k => term(c[k], k)).join(" "); return s.replace(/^\+ /, "").replace(/^− /, "−"); };
  function draw() {
    const c = st.c;
    const ctl = `<div class="lab-ctl">${labSeg("Vue", [["op", "Appliquer ξ pas à pas (Q3)"], ["ker", "Noyau de ξⁿ (Q4, Q5)"]], st.v).replace('class="seg lab-seg"', 'class="seg lab-seg" data-s="v"')}${st.v === "ker" ? `<div class="viz-ctrl">${labRange("n", "n", 1, 6, 1, st.n)}</div>` : ""}</div>`;
    const cells = [];
    for (let k = K0; k <= K1; k++) {
      const v = st.v === "ker" ? (k >= -st.n && k <= -1 ? 1 : 0) : (c[k] || 0);
      cells.push(`<button type="button" class="xc${k >= 0 ? " pos" : ""}${v ? " on" : ""}" data-k="${k}" ${st.v === "ker" ? "disabled" : ""} aria-label="Coefficient de X puissance ${k}"><small>X<sup>${k}</sup></small><b>${v}</b></button>`);
    }
    let body = `<div class="xstrip">${cells.join("")}</div><div class="xleg"><span><i class="d"></i>partie dans D (puissances &lt; 0)</span><span><i class="p"></i>partie dans ℂ[X] (effacée par Π)</span></div>`;
    if (st.v === "op") {
      body += `<p class="lab-cap" style="margin-top:12px">F = ${fmtF(c)} &nbsp;·&nbsp; clique sur une case pour changer un coefficient</p>
      <div class="xbtn"><button type="button" class="btn btn-ghost btn-sm" data-op="X">× X (décaler à droite)</button><button type="button" class="btn btn-ghost btn-sm" data-op="P">Π (garder les puissances &lt; 0)</button><button type="button" class="btn btn-yellow btn-sm" data-op="XI">ξ = Π(X ·)</button><button type="button" class="btn btn-ghost btn-sm" data-op="R">Réinitialiser</button></div>
      <div class="lab-note">${st.log.length ? st.log.slice(-3).map(l => `<div>${l}</div>`).join("") : `<b>Comment ça marche.</b> Multiplier par X décale toutes les cases d'un cran vers la droite. Π efface tout ce qui arrive dans la zone grise (puissances ≥ 0). ξ fait les deux : <b>X<sup>−1</sup> est envoyé sur 0</b>, et X<sup>−j</sup> sur X<sup>−j+1</sup> pour j ≥ 2. Essaie : appliquer Π avant ou après ξ donne le même résultat (Q3 a).`}</div>`;
    } else {
      const n = st.n;
      body += `<div class="lab-note"><b>ξ<sup>${n}</sup></b> décale de ${n} crans puis efface les puissances ≥ 0. Les monômes X<sup>−1</sup>, …, X<sup>−${n}</sup> (cases jaunes) arrivent tous dans la zone grise : ils forment une base de <b>ker ξ<sup>${n}</sup></b> (Q4). Et tout X<sup>−j</sup> est atteint, comme ξ<sup>${n}</sup>(X<sup>−j−${n}</sup>) : ξ<sup>${n}</sup> est surjectif.<br>Sur D<sub>r</sub> = Vect(X<sup>−r</sup>, …, X<sup>−1</sup>), ξ envoie chaque monôme sur le suivant et X<sup>−1</sup> sur 0 : sa matrice est le bloc de Jordan J<sub>r</sub> (Q5).</div>`;
    }
    host.innerHTML = ctl + body;
    labWire(host, st, draw);
    if (st.v !== "op") return;
    $$(".xc", host).forEach(b => b.addEventListener("click", () => { const k = +b.dataset.k, v = (c[k] || 0) + 1; c[k] = v > 3 ? -2 : v; if (!c[k]) delete c[k]; draw(); }));
    $$("[data-op]", host).forEach(b => b.addEventListener("click", () => {
      const before = fmtF(c), o = b.dataset.op; let nc = {};
      if (o === "R") { st.c = { "-3": 1, "-1": 2, "1": 1 }; st.log = []; return draw(); }
      if (o === "X" || o === "XI") Object.keys(c).forEach(k => { if (+k + 1 <= K1) nc[+k + 1] = c[k]; }); else nc = { ...c };
      if (o === "P" || o === "XI") Object.keys(nc).forEach(k => { if (+k >= 0) delete nc[k]; });
      st.c = nc; st.log.push(`${o === "X" ? "× X" : o === "P" ? "Π" : "ξ"} : ${before} &nbsp;→&nbsp; <b>${fmtF(nc)}</b>`); draw();
    }));
  }
  draw();
}

/* Mode 6 : blocs de Jordan, invariants δ_k, version graduée */
function labJordan(host) {
  const st = { r: [3, 2, 2, 1], a: [1, 1, 2, 3], v: "simple" };
  const Z = ["1", "i", "−1", "−i"];
  function draw() {
    const r = st.r.filter(x => x > 0), A = st.a.filter((_, i) => st.r[i] > 0), n = r.reduce((p, x) => p + x, 0);
    const M = Array.from({ length: n }, () => Array(n).fill(0)); let o = 0; r.forEach(x => { for (let j = 0; j < x - 1; j++) M[o + j + 1][o + j] = 1; o += x; });
    const kerDim = k => r.reduce((p, x) => p + Math.min(k, x), 0);
    const kmax = Math.max(...r, 1) + 1;
    const ctl = `<div class="lab-ctl">${labSeg("Vue", [["simple", "Blocs et invariants (Q2, Q9, Q10)"], ["grad", "Version graduée N = 4 (Q13, Q14)"]], st.v).replace('class="seg lab-seg"', 'class="seg lab-seg" data-s="v"')}</div>
      <div class="jb">${st.r.map((x, i) => `<div class="jbi"><span>Bloc ${i + 1}</span><button type="button" data-b="${i}" data-d="-1" aria-label="Réduire le bloc ${i + 1}">−</button><b>${x ? `J<sub>${x}</sub>` : "aucun"}</b><button type="button" data-b="${i}" data-d="1" aria-label="Agrandir le bloc ${i + 1}">+</button>${st.v === "grad" && x ? `<button type="button" class="ja" data-a="${i}" aria-label="Changer a">a = ${st.a[i]}</button>` : ""}</div>`).join("")}</div>`;
    // chaînes : chaque bloc est une colonne e1 -> e2 -> ... -> er -> 0
    const W = Math.max(260, r.length * 80 + 40), H = Math.max(...r, 1) * 56 + 50;
    let s = "";
    r.forEach((x, i) => {
      const cx = 50 + i * 80;
      for (let j = 0; j < x; j++) {
        const cy = 30 + j * 56, ex = (A[i] + j) % 4, bad = st.v === "grad" && ex === 0;
        if (j < x - 1) s += `<line x1="${cx}" y1="${cy + 13}" x2="${cx}" y2="${cy + 40}" class="lab-e"/><polygon points="${cx},${cy + 44} ${cx - 4.5},${cy + 35} ${cx + 4.5},${cy + 35}" class="lab-ah"/>`;
        else s += `<line x1="${cx}" y1="${cy + 13}" x2="${cx}" y2="${cy + 30}" class="lab-e dash"/><text x="${cx}" y="${cy + 44}" text-anchor="middle" class="lab-vt sm">0</text>`;
        s += `<circle cx="${cx}" cy="${cy}" r="13" class="lab-v ${st.v === "grad" ? "g" + ex : ""}${bad ? " bad" : ""}"/><text x="${cx}" y="${cy + 4.5}" text-anchor="middle" class="lab-vt">${st.v === "grad" ? Z[ex] : `e${String(j + 1).split("").map(d => "₀₁₂₃₄₅₆₇₈₉"[+d]).join("")}`}</text>`;
      }
      s += `<text x="${cx}" y="${H - 4}" text-anchor="middle" class="lab-vt sm">J${String(x).split("").map(d => "₀₁₂₃₄₅₆₇₈₉"[+d]).join("")}</text>`;
    });
    const chains = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" class="lab-svg" role="img" aria-label="Chaînes de vecteurs">${s}</svg>`;
    let body;
    if (st.v === "simple") {
      const rows = Array.from({ length: kmax }, (_, k0) => { const k = k0 + 1, d = -kerDim(k - 1) + 2 * kerDim(k) - kerDim(k + 1); return `<tr><td>${k}</td><td>${kerDim(k)}</td><td class="${d ? "hi" : ""}">${d}</td><td>${r.filter(x => x === k).length}</td></tr>`; }).join("");
      body = `<div class="lab-row"><div><div class="lab-cap">Matrice diag(${r.map(x => `J<sub>${x}</sub>`).join(", ")}) (${n} × ${n})</div>${n ? mxHtml(M, { small: n > 8, label: "Matrice de Jordan" }) : ""}</div><div><div class="lab-cap">Chaque bloc = une chaîne : u envoie chaque vecteur sur le suivant, le dernier sur 0</div>${chains}</div></div>
        <div class="lab-row"><table class="jt"><thead><tr><th>k</th><th>dim ker M<sup>k</sup></th><th>δ<sub>k</sub>(M)</th><th>blocs de taille k</th></tr></thead><tbody>${rows}</tbody></table>
        <div class="lab-note" style="flex:1;min-width:260px"><b>Pourquoi δ<sub>k</sub> compte les blocs.</b> Sur une chaîne de longueur r, M<sup>k</sup> tue les k derniers vecteurs (ou toute la chaîne si k ≥ r) : dim ker J<sub>r</sub><sup>k</sup> = min(k, r). Les dimensions s'additionnent sur les blocs (Q2 c). Le « saut du saut » δ<sub>k</sub> = −d<sub>k−1</sub> + 2d<sub>k</sub> − d<sub>k+1</sub> vaut 1 exactement pour le bloc de taille k (Q2 b). Donc <b>δ<sub>k</sub> = nombre de blocs de taille k</b> : il ne dépend que de u, d'où l'unicité (Q10). Change les tailles pour le vérifier.</div></div>`;
    } else {
      const bad = r.some((x, i) => Array.from({ length: x }, (_, j) => (A[i] + j) % 4).includes(0));
      body = `<div class="lab-row"><div><div class="lab-cap">Chaque vecteur porte sa valeur propre pour h (ζ = i). u fait monter l'exposant de 1 : V<sub>j</sub> → V<sub>j+1</sub>.</div>${chains}</div>
        <div class="lab-note" style="flex:1;min-width:260px"><b>Le bloc (J<sub>r</sub>, D<sub>r,a</sub>).</b> Dans une chaîne qui commence avec la valeur propre ζ<sup>a</sup>, les vecteurs suivants ont ζ<sup>a+1</sup>, ζ<sup>a+2</sup>, … (Q11 b : u envoie V<sub>j</sub> dans V<sub>j+1</sub>). Clique sur « a = … » pour changer le départ.<br><br><b>Q14 (N = 4, ker(h − id) = {0}).</b> La valeur propre 1 = ζ<sup>0</sup> est interdite (cercles rouges). Une chaîne doit donc rester dans V<sub>1</sub> → V<sub>2</sub> → V<sub>3</sub> et s'arrêter avant de revenir à 1 : seuls les types (1,1), (1,2), (1,3), (2,1), (2,2), (3,1) sont possibles.${bad ? `<br><span style="color:var(--red);font-weight:700">Configuration actuelle impossible en Q14.</span>` : `<br><span style="color:var(--green);font-weight:700">Configuration compatible avec Q14.</span>`}</div></div>`;
    }
    host.innerHTML = ctl + body;
    labWire(host, st, draw);
    $$("[data-b]", host).forEach(b => b.addEventListener("click", () => { const i = +b.dataset.b, v = st.r[i] + +b.dataset.d; if (v < 0 || v > 5) return; if (v === 0 && st.r.filter(x => x > 0).length === 1) return; st.r[i] = v; draw(); }));
    $$("[data-a]", host).forEach(b => b.addEventListener("click", () => { const i = +b.dataset.a; st.a[i] = (st.a[i] + 1) % 4; draw(); }));
  }
  draw();
}

/* Mode 7 : graphes aléatoires et fonction de seuil (Mines-Ponts 2024) */
function labSeuil(host) {
  const st = { v: "e", n: 40, lc: 0, seed: 1 };
  const props = { e: { t: "Au moins une arête", w: 2, d: 1 }, s2: { t: "Une étoile à 2 branches", w: 1.5, d: 2 }, s3: { t: "Une étoile à 3 branches", w: 4 / 3, d: 3 } };
  let rs = 12345; const rnd = () => { rs = (rs * 1103515245 + 12345) & 0x7fffffff; return rs / 0x7fffffff; };
  const sample = (n, p) => { const deg = new Array(n).fill(0), E = []; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (rnd() < p) { deg[i]++; deg[j]++; E.push([i, j]); } return { deg, E }; };
  const holds = (g, d) => g.deg.some(x => x >= d);
  function draw() {
    const P = props[st.v], n = st.n, c = Math.pow(10, st.lc), p = Math.min(1, c * Math.pow(n, -P.w));
    rs = 1000 + st.seed * 7919;
    const g = sample(n, p);
    let hit = -1; g.deg.forEach((x, i) => { if (hit < 0 && x >= P.d) hit = i; });
    const W = 300, cx = 150, R = 125, pos = i => [cx + R * Math.cos(2 * Math.PI * i / n - Math.PI / 2), cx + R * Math.sin(2 * Math.PI * i / n - Math.PI / 2)];
    let s = "";
    g.E.forEach(([i, j]) => { const [x1, y1] = pos(i), [x2, y2] = pos(j), on = hit >= 0 && (i === hit || j === hit); s += `<line x1="${fx(x1)}" y1="${fx(y1)}" x2="${fx(x2)}" y2="${fx(y2)}" class="lab-e${on ? " on" : ""}"/>`; });
    for (let i = 0; i < n; i++) { const [x, y] = pos(i); s += `<circle cx="${fx(x)}" cy="${fx(y)}" r="${n > 60 ? 2.5 : 4}" class="lab-v${i === hit ? " on" : ""}" style="stroke-width:1.2"/>`; }
    // courbe : probabilité estimée en fonction de c
    const grid = Array.from({ length: 21 }, (_, k) => -1.5 + k * 0.15), T = 60;
    rs = 777 + n;
    const pts = grid.map(l => { const pp = Math.min(1, Math.pow(10, l) * Math.pow(n, -P.w)); let ok = 0; for (let t = 0; t < T; t++) if (holds(sample(n, pp), P.d)) ok++; return [l, ok / T]; });
    const CW = 360, CH = 200, X = l => 40 + (l + 1.5) / 3 * (CW - 56), Y = v => CH - 30 - v * (CH - 50);
    let cs = `<line x1="40" y1="${Y(0)}" x2="${CW - 10}" y2="${Y(0)}" class="lab-ax"/><line x1="40" y1="${Y(0)}" x2="40" y2="${Y(1) - 6}" class="lab-ax"/>`;
    [[0, "0"], [0.5, "0,5"], [1, "1"]].forEach(([v, t]) => { cs += `<text x="34" y="${fx(Y(v) + 4)}" text-anchor="end" class="lab-vt sm">${t}</text>`; });
    [[-1, "0,1"], [0, "1"], [1, "10"]].forEach(([l, t]) => { cs += `<line x1="${fx(X(l))}" y1="${Y(0)}" x2="${fx(X(l))}" y2="${Y(0) + 4}" class="lab-ax"/><text x="${fx(X(l))}" y="${Y(0) + 17}" text-anchor="middle" class="lab-vt sm">${t}</text>`; });
    cs += `<text x="${CW - 10}" y="${Y(0) - 6}" text-anchor="end" class="lab-vt sm">c</text>`;
    cs += `<path d="${pts.map(([l, v], k) => `${k ? "L" : "M"}${fx(X(l))} ${fx(Y(v))}`).join(" ")}" style="fill:none;stroke:var(--blue);stroke-width:2.4"/>`;
    cs += `<line x1="${fx(X(st.lc))}" y1="${Y(0)}" x2="${fx(X(st.lc))}" y2="${Y(1)}" style="stroke:var(--gold-ink);stroke-dasharray:4 3;stroke-width:1.5"/>`;
    const wt = P.w === 2 ? "2" : P.w === 1.5 ? "3/2" : "4/3";
    host.innerHTML = `<div class="lab-ctl">${labSeg("Propriété", Object.entries(props).map(([k, o]) => [k, o.t]), st.v).replace('class="seg lab-seg"', 'class="seg lab-seg" data-s="v"')}<div class="viz-ctrl">${labRange("n", "Nombre de sommets n", 10, 120, 10, n)}${labRange("lc", "log₁₀ c", -1.5, 1.5, 0.1, st.lc)}</div></div>
      <div class="lab-row"><div><div class="lab-cap">Un graphe tiré au hasard : n = ${n}, p = c · n<sup>−ω₀</sup> = ${nf(p, 5)}, ${g.E.length} arête${g.E.length > 1 ? "s" : ""}</div><svg viewBox="0 0 ${W} ${W}" width="${W}" height="${W}" class="lab-svg" role="img" aria-label="Graphe aléatoire">${s}</svg><div><button type="button" class="btn btn-ghost btn-sm" data-re="1">Tirer un autre graphe</button></div></div>
      <div><div class="lab-cap">Probabilité de la propriété (simulée, ${T} tirages par point) en fonction de c</div><svg viewBox="0 0 ${CW} ${CH}" width="${CW}" height="${CH}" class="lab-svg" role="img" aria-label="Courbe de seuil">${cs}</svg></div></div>
      <div class="lab-note"><b>${P.t} : ω₀ = ${wt}.</b> On prend p<sub>n</sub> = c · n<sup>−ω₀</sup>, c'est-à-dire c fois la fonction de seuil. Quand c est petit (p<sub>n</sub> = o(n<sup>−ω₀</sup>) à la limite), la propriété n'apparaît presque jamais ; quand c est grand, presque toujours. ${hit >= 0 ? `Dans le graphe tiré, le sommet en jaune ${P.d === 1 ? "porte une arête" : `a au moins ${P.d} voisins`} : la propriété est réalisée.` : "Dans le graphe tiré, la propriété n'est pas réalisée."}</div>`;
    labWire(host, st, draw);
    $("[data-re]", host).addEventListener("click", () => { st.seed++; draw(); });
  }
  draw();
}

function mountLab(host, spec) { ({ cycle: labCycle, kron: labKron, transfer: labTransfer, spec: labSpec, xi: labXi, jordan: labJordan, seuil: labSeuil })[spec.mode](host, spec); }
document.addEventListener("click", e => { const b = e.target.closest("[data-labo]"); if (!b) return; const t = document.getElementById("lab-" + b.dataset.labo); if (t) { t.closest(".panelbox").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); t.closest(".panelbox").classList.add("flash"); setTimeout(() => t.closest(".panelbox").classList.remove("flash"), 1400); } });


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

/* ---------- Routeur ---------- */
let lastRoute = "";
function route(keepScroll) {
  const h = location.hash.slice(1) || "accueil";
  if (h !== lastRoute) { if (!/^c-/.test(h) || lastRoute.replace(/-\d+$/, "") !== h.replace(/-\d+$/, "")) chapTab = null; if (!/^s-/.test(h)) subjTab = "chapitres"; enonceMode = "interactif"; }
  lastRoute = h;
  player = null; closeRappel(true); closeBig(true); closeTip();
  let html, m, ex = null;
  if (h === "accueil") html = home();
  else if (h === "commando" || h === "s-xens") html = commandoPage();
  else if (h === "oraux-maths" || h === "s-oraux") html = orauxMathsPage();
  else if ((m = h.match(/^s-([a-z]+)$/))) html = subjectPage(m[1]);
  else if ((m = h.match(/^banque-([a-z0-9-]+)$/))) html = banquePage(m[1]);
  else if ((m = h.match(/^c-annales-mp-(\d+)$/))) html = sujetPage(+m[1]);
  else if ((m = h.match(/^c-([a-z]+)-(mpsi|mp)-(\d+)$/))) html = chapterPage(m[1], m[2], +m[3]);
  else if ((m = h.match(/^e-([a-z0-9-]+)$/))) { ex = EXERCISES.find(x => x.id === m[1]); html = exercisePage(m[1]); }
  else if (h === "exercices") html = exercisesPage(false);
  else if (h === "classiques") html = exercisesPage(true);
  else if (h === "dm") html = dmPage();
  else if (h === "ds") html = dsPage();
  else if (h === "kholles") html = khollesPage();
  else if (h === "concours") html = concoursPage();
  else if (h === "oral") html = oralPage();
  else html = notFound();
  const zone = h === "commando" || /^(s|c)-xens/.test(h) || (ex && ex.subj === "xens");
  if (zone) document.documentElement.dataset.zone = "commando"; else delete document.documentElement.dataset.zone;
  const tc = document.querySelector('meta[name="theme-color"]'); if (tc) tc.content = zone ? "#05070C" : "#0F2557";
  app.classList.remove("enter"); void app.offsetWidth;
  app.innerHTML = html; app.classList.add("enter");
  closeMenus(); nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
  document.title = (h === "accueil" ? "Lemme · Prépa MPSI et MP" : (($("h1", app) || {}).textContent || "Lemme") + " · Lemme");
  wire(ex);
  typeset(app);
  if (!keepScroll) window.scrollTo(0, 0);
}
function wire(ex) {
  $$(".tabs [data-tab]", app).forEach(b => b.addEventListener("click", () => {
    if (/^#s-/.test(location.hash)) subjTab = b.dataset.tab; else chapTab = b.dataset.tab;
    route(true);
  }));
  $$(".filters [data-f]", app).forEach(b => b.addEventListener("click", () => { exFilter = b.dataset.f; route(true); }));
  $$(".filters [data-dm]", app).forEach(b => b.addEventListener("click", () => { dmSel = +b.dataset.dm; route(true); }));
  $$("[data-pdf]:not([data-lazy])", app).forEach(mountPdf);
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
  }
}

paintYear();
requestAnimationFrame(paintYear);
window.addEventListener("hashchange", () => route());
route();
})();

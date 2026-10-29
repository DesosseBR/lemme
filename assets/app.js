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
  oral: ["photo-1758685845906-6f705cde4fb7", "Vitaly Gariev"]
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
const lvl = n => `<span class="lvl" aria-label="Difficulté ${n} sur 3">${[1, 2, 3].map(k => `<i class="${k <= n ? "on" : ""}"></i>`).join("")}</span>`;

/* ---------- MathJax ---------- */
let mjQueue = Promise.resolve();
function typeset(el) {
  if (!el || !window.MathJax || !MathJax.typesetPromise) return;
  mjQueue = mjQueue.then(() => MathJax.typesetPromise([el])).catch(() => {});
}
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
$("#dd-mat").innerHTML = SUBJECTS.map(s => `<a href="#s-${s.id}"><img class="thumb" src="${src(s.id, 120)}" alt="" loading="lazy">${s.name}</a>`).join("");
$("#foot-subj").innerHTML = SUBJECTS.map(s => `<li><a href="#s-${s.id}">${s.name}</a></li>`).join("");
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
  return `<a class="excard" href="#e-${e.id}"><span class="top"><span class="kind${pb ? " pb" : ""}">${pb ? "Problème" : "Exercice"} · ${s.name} ${YEARS[e.year]}</span>${lvl(e.level)}</span><b>${esc(e.title)}</b><span class="foot"><span>${esc(c.t)}</span><span>·</span><span>${e.time}</span></span></a>`;
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
    <div class="subjects stagger">${SUBJECTS.map(s => `<a class="scard" href="#s-${s.id}">${img(s.id, "(max-width:560px) 100vw, (max-width:900px) 50vw, 33vw")}<span class="in"><h3>${s.name}</h3><span class="bar"></span><small>${s.years.mpsi.length} chapitres en MPSI · ${s.years.mp.length} en MP</small></span></a>`).join("")}</div>
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
      <div class="rappels"><span class="lab">Rappels utilisés</span>${(st.rappels || []).map(r => rchip(r, st.rappels)).join("")}</div></div>
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
  if (year !== y) setYear(y);
  const list = s.years[y], c = list[i], exs = exOf(id, y, i);
  const rs = `resume-${id}-${y}-${pad(i + 1)}`, cs = `cours-${id}-${y}-${pad(i + 1)}`;
  const tabs = [];
  if (PDFS.has(cs)) tabs.push(["cours", "Cours"]);
  tabs.push(["resume", "Résumé"]);
  tabs.push(["exercices", "Exercices", exs.length]);
  if (!chapTab || !tabs.find(t => t[0] === chapTab)) chapTab = PDFS.has(cs) ? "cours" : (PDFS.has(rs) ? "resume" : (exs.length ? "exercices" : "resume"));
  let body;
  if (chapTab === "cours") body = `<div data-pdf="${cs}" data-title="Cours · ${esc(c.t)}"></div>`;
  else if (chapTab === "resume") body = (PDFS.has(rs) ? `<div data-pdf="${rs}" data-title="Résumé · ${esc(c.t)}"></div>` : empty("Résumé en préparation", "")) + `<p style="margin:20px 4px 0;color:var(--muted);font-size:14.5px"><b style="color:var(--ink)">Au programme :</b> ${esc(c.n)}.</p>`;
  else body = exs.length ? `<div class="exgrid stagger">${exs.map(exCard).join("")}</div>` : empty("Exercices en préparation", "");
  const prev = list[i - 1], next = list[i + 1];
  const pager = `<div style="display:flex;justify-content:space-between;gap:12px;margin-top:36px;flex-wrap:wrap">${prev ? `<a class="btn btn-ghost" href="#c-${id}-${y}-${i - 1}">${I.left} ${esc(prev.t)}</a>` : "<span></span>"}${next ? `<a class="btn btn-ghost" href="#c-${id}-${y}-${i + 1}">${esc(next.t)} ${I.arrow}</a>` : ""}</div>`;
  return phead({ crumb: [[s.name, `#s-${id}`], [YEARS[y]]], title: esc(c.t), meta: `<span class="tag y">Chapitre ${pad(i + 1)}</span><span class="tag">${s.name} · ${YEARS[y]}</span>`, tabs: tabsHtml(tabs, chapTab) })
    + `<div class="wrap layout"><div>${body}${pager}</div><aside class="side"><div class="sticky"><h3>${s.name} · ${YEARS[y]}</h3><ul class="navlist">${list.map((x, j) => `<li><a href="#c-${id}-${y}-${j}" ${j === i ? 'aria-current="page"' : ""}><span class="n">${pad(j + 1)}</span>${esc(x.t)}</a></li>`).join("")}</ul></div></aside></div>`;
}

let enonceMode = "interactif";
function exercisePage(eid) {
  const e = EXERCISES.find(x => x.id === eid); if (!e) return notFound();
  const s = sid(e.subj), c = s.years[e.year][e.chap], pb = e.kind === "probleme";
  if (year !== e.year) setYear(e.year);
  const hasPdf = PDFS.has("enonce-" + e.id);
  const d = e.decode || { donnees: [], but: "", cles: {} };
  const others = EXERCISES.filter(x => x.subj === e.subj && x.id !== e.id && x.year === e.year).slice(0, 2);
  return phead({ crumb: [[s.name, `#s-${s.id}`], [c.t, `#c-${s.id}-${e.year}-${e.chap}`]], title: esc(e.title),
    meta: `<span class="tag y">${pb ? "Problème" : "Exercice"}</span><span class="tag">${s.name} · ${YEARS[e.year]}</span><span class="tag">${e.time}</span><span class="tag">${["", "Accessible", "Intermédiaire", "Exigeant"][e.level]}</span>` })
  + `<div class="wrap"><div class="ex-layout">
    <section class="panelbox" aria-labelledby="h-en">
      <h2 id="h-en">Énoncé ${hasPdf ? `<span class="seg" role="group" aria-label="Affichage de l'énoncé"><button type="button" data-mode="interactif" aria-pressed="${enonceMode === "interactif"}">Interactif</button><button type="button" data-mode="pdf" aria-pressed="${enonceMode === "pdf"}">PDF</button></span>` : ""}</h2>
      <div id="en-int" ${enonceMode === "pdf" && hasPdf ? "hidden" : ""}>
        <div class="prose enonce">${e.enonce}</div>
        <div class="decode">
          <div><h4>Ce que l'énoncé te donne</h4><ul>${d.donnees.map(x => `<li>${x}</li>`).join("")}</ul></div>
          <div><h4>Ce qu'on te demande</h4>${d.but}</div>
        </div>
        ${Object.keys(d.cles || {}).length ? `<p style="margin:14px 2px 0;font-size:13.5px;color:var(--muted)">Clique sur les mots surlignés pour leur définition.</p>` : ""}
      </div>
      ${hasPdf ? `<div id="en-pdf" ${enonceMode === "pdf" ? "" : "hidden"}><div data-pdf="enonce-${e.id}" data-title="${esc(e.title)}" data-lazy="1"></div></div>` : ""}
    </section>
    ${e.viz ? `<section class="panelbox" aria-labelledby="h-viz"><h2 id="h-viz">${e.viz.title || "Visualiser"}</h2><div id="viz"></div></section>` : ""}
    <section class="panelbox" aria-labelledby="h-cor"><h2 id="h-cor">Corrigé pas à pas</h2><div id="player" class="player"></div></section>
    ${others.length ? `<section><h2 style="font-weight:800;font-size:24px;letter-spacing:-.02em;margin:24px 0 16px">Pour continuer</h2><div class="exgrid">${others.map(exCard).join("")}</div></section>` : ""}
  </div></div>`;
}

let exFilter = "all";
function exercisesPage(onlyClassics) {
  const list = EXERCISES.filter(e => e.year === year && (exFilter === "all" || e.subj === exFilter) && (!onlyClassics || e.classique));
  const title = onlyClassics ? "Classiques" : "Exercices corrigés";
  return phead({ crumb: [[title]], title, meta: `<span class="tag y">${YEARS[year]}</span>` })
  + `<div class="wrap layout full"><div>
    <div class="filters" role="group" aria-label="Filtrer par matière"><button type="button" class="chip" data-f="all" aria-pressed="${exFilter === "all"}">Toutes</button>${SUBJECTS.map(s => `<button type="button" class="chip" data-f="${s.id}" aria-pressed="${exFilter === s.id}">${s.name}</button>`).join("")}</div>
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

function khollesPage() {
  const groups = KHOLLES.filter(k => k.year === year);
  return phead({ crumb: [["Khôlles"]], title: "Questions de khôlle", meta: `<span class="tag y">${YEARS[year]}</span>`, photo: "oral" }) + `<div class="wrap layout full"><article class="prose">
    <p>Une heure au tableau : une question de cours, puis un exercice. Voici les questions de cours à savoir refaire.</p>
    ${groups.length ? groups.map(k => `<h2>${sid(k.subj).name}</h2><ol class="qlist">${k.qs.map(x => `<li><span>${x}</span></li>`).join("")}</ol>`).join("") : empty("Bientôt", "")}
  </article></div>`;
}

function concoursPage() {
  return phead({ crumb: [["Concours"]], title: "Préparer les concours", photo: "hero" }) + `<div class="wrap layout full"><article class="prose">
    <h2>Les banques</h2>
    <div class="cards">${BANKS.map(b => `<div class="card"><h3>${b.name}</h3><p>${b.desc}</p></div>`).join("")}</div>
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

function oralPage() {
  return phead({ crumb: [["Oraux"]], title: "Réussir les oraux", photo: "oral" }) + `<div class="wrap layout full"><article class="prose">
    <div class="cards">
      <div class="card"><h3>Mathématiques</h3><p>Un ou deux exercices au tableau, avec des indications si tu bloques.</p></div>
      <div class="card"><h3>Physique</h3><p>Souvent un problème ouvert : modéliser, estimer, discuter.</p></div>
      <div class="card"><h3>Avec Python</h3><p>Certaines épreuves demandent de programmer en direct.</p></div>
      <div class="card"><h3>TIPE</h3><p>Présenter ton travail, puis répondre au jury sur ta démarche.</p></div>
    </div>
    <h2>Ce qui fait la différence</h2>
    <ul><li>Réfléchir à voix haute, même quand tu hésites.</li><li>Tester une idée sur un cas simple.</li><li>Écouter : une indication est une aide, pas un piège.</li><li>Pour CCINP, travailler la banque officielle d'exercices d'oral.</li></ul>
  </article></div>`;
}

function notFound() {
  return phead({ crumb: [["Page introuvable"]], title: "Cette page n'existe pas." }) + `<div class="wrap layout full"><div><a class="btn btn-yellow" href="#accueil">Retour à l'accueil</a></div></div>`;
}

/* ---------- Rappels de cours ---------- */
function rchip(id, ctx) {
  const r = RAPPELS[id]; if (!r) return "";
  return `<button type="button" class="rchip" data-r="${id}" data-ctx="${(ctx || []).join(",")}">${I.book}${esc(r.t)}</button>`;
}
let drawerReturn = null;
function openRappel(id, ctx) {
  const r = RAPPELS[id]; if (!r) return;
  closeRappel(true);
  drawerReturn = document.activeElement;
  const others = (ctx || []).filter(x => x && x !== id && RAPPELS[x]);
  const scrim = document.createElement("div"); scrim.className = "scrim"; scrim.id = "scrim";
  const dr = document.createElement("aside"); dr.className = "drawer"; dr.id = "drawer"; dr.setAttribute("role", "dialog"); dr.setAttribute("aria-modal", "true"); dr.setAttribute("aria-labelledby", "dr-t");
  dr.innerHTML = `<button class="iconbtn close" type="button" aria-label="Fermer le rappel">${I.close}</button><span class="kicker">Rappel de cours</span><h3 id="dr-t">${esc(r.t)}</h3><div class="body">${r.b}</div>${others.length ? `<div class="others"><h4>Autres rappels de ce corrigé</h4>${others.map(x => rchip(x, ctx)).join("")}</div>` : ""}`;
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
  openRappel(b.dataset.r, (b.dataset.ctx || "").split(","));
});

/* ---------- Infobulles de l'énoncé ---------- */
let tipFor = null;
function closeTip() { const t = $(".tip"); if (t) t.remove(); if (tipFor) tipFor.classList.remove("open"); tipFor = null; }
function openTip(el, html) {
  closeTip();
  const t = document.createElement("div"); t.className = "tip"; t.setAttribute("role", "tooltip"); t.innerHTML = html;
  document.body.appendChild(t);
  const r = el.getBoundingClientRect(), w = t.offsetWidth;
  const left = Math.max(16, Math.min(r.left + scrollX, scrollX + innerWidth - w - 16));
  t.style.left = left + "px"; t.style.top = (r.bottom + scrollY + 10) + "px";
  t.style.setProperty("--ax", Math.max(14, Math.min(w - 26, r.left + scrollX - left + r.width / 2 - 6)) + "px");
  el.classList.add("open"); tipFor = el;
  typeset(t);
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
    host.innerHTML = `
      <div class="prog">${Array.from({ length: n + 1 }, (_, k) => `<button type="button" class="${k <= state.i ? "done" : ""}" data-go="${k}" aria-label="${k === n ? "Bilan" : "Étape " + (k + 1)}"></button>`).join("")}</div>
      <div class="stage" aria-live="polite">
        <div class="step" style="--anim:${dir < 0 ? "stepback" : "stepin"}">
          ${last
            ? `<span class="count">Bilan</span><h3>Ce qu'il faut retenir</h3><div class="bilan"><div class="trap"><h4>Le piège</h4>${e.piege}</div><div class="meth"><h4>La méthode</h4>${e.methode}</div></div>${all.length ? `<div class="rappels"><span class="lab">Tous les rappels utilisés</span>${all.map(r => rchip(r, all)).join("")}</div>` : ""}`
            : `<span class="count">Étape ${state.i + 1} sur ${n}</span><h3>${esc(st.t)}</h3><div class="prose">${st.b}</div>${(st.rappels || []).length ? `<div class="rappels"><span class="lab">Rappels utilisés</span>${st.rappels.map(r => rchip(r, all)).join("")}</div>` : ""}`}
        </div>
      </div>
      <div class="nav">
        <button class="btn btn-ghost" type="button" data-step="-1" ${state.i === 0 ? "disabled style=\"opacity:.4;cursor:default\"" : ""}>${I.left} Précédent</button>
        ${last ? `<button class="btn btn-navy" type="button" data-step="restart">Recommencer</button>` : `<button class="btn btn-yellow" type="button" data-step="1">${state.i === n - 1 ? "Voir le bilan" : "Étape suivante"} ${I.arrow}</button>`}
        <span class="hint"><kbd>←</kbd><kbd>→</kbd></span>
      </div>`;
    $$("[data-go]", host).forEach(b => b.addEventListener("click", () => show(+b.dataset.go, +b.dataset.go >= state.i ? 1 : -1)));
    $$("[data-step]", host).forEach(b => b.addEventListener("click", () => {
      const v = b.dataset.step;
      if (v === "restart") show(0, -1); else show(state.i + (+v), +v);
    }));
    closeTip(); bindKeys(host, e);
    typeset(host);
    const top = host.closest(".panelbox").getBoundingClientRect().top;
    if (top < 72 || top > innerHeight * .6) host.closest(".panelbox").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }
  intro();
  player = {
    key(k) {
      if (state.i < 0) { if (k === "ArrowRight") show(0, 1); return; }
      if (k === "ArrowRight" && state.i < n) show(state.i + 1, 1);
      if (k === "ArrowLeft" && state.i > 0) show(state.i - 1, -1);
    }
  };
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeMenus(); closeTip(); results.hidden = true; if ($("#drawer")) closeRappel(); return; }
  if (!player || $("#drawer") || e.altKey || e.ctrlKey || e.metaKey) return;
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

/* ---------- Visualisations ---------- */
function tokens() {
  const cs = getComputedStyle(document.documentElement), g = k => cs.getPropertyValue(k).trim();
  const dark = matchMedia("(prefers-color-scheme: dark)").matches;
  return { line: g("--line"), muted: g("--muted"), ink: g("--ink"), bg: g("--bg"), c: dark ? [g("--yellow"), "#8FB3FF", "#C9D2EA"] : [g("--navy"), "#E0A200", "#7C88A8"] };
}
function niceStep(range, target) { const raw = range / target, p = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / p; return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p; }
const fmt = v => { const a = Math.abs(v); return (a !== 0 && (a < 0.01 || a >= 1e4)) ? v.toExponential(1) : String(+v.toFixed(3)).replace(".", ","); };
function mountViz(host, spec) {
  if (spec.type === "dicho") return mountDicho(host);
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

/* ---------- Routeur ---------- */
let lastRoute = "";
function route(keepScroll) {
  const h = location.hash.slice(1) || "accueil";
  if (h !== lastRoute) { if (!/^c-/.test(h) || lastRoute.replace(/-\d+$/, "") !== h.replace(/-\d+$/, "")) chapTab = null; if (!/^s-/.test(h)) subjTab = "chapitres"; enonceMode = "interactif"; }
  lastRoute = h;
  player = null; closeRappel(true); closeTip();
  let html, m, ex = null;
  if (h === "accueil") html = home();
  else if ((m = h.match(/^s-([a-z]+)$/))) html = subjectPage(m[1]);
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
    if (ex.viz) mountViz($("#viz"), ex.viz);
    mountPlayer(ex, $("#player"));
  }
}

paintYear();
requestAnimationFrame(paintYear);
window.addEventListener("hashchange", () => route());
route();
})();

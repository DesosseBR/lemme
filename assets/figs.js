/* Lemme · figures.
   Toutes les figures SVG du site passent par ici, dans le navigateur comme pour les PDF (scripts/svg2pdf.py) :
   1. chaque <text> devient une étiquette composée en LaTeX par MathJax (indices, exposants, fractions…) ;
   2. une étiquette qui touche un trait ou une autre étiquette est déplacée vers la place libre la plus proche ;
   3. chaque figure reçoit un des cinq modèles de dessin (m1 manuel, m2 revue, m3 épuré, m4 dessin technique, m5 pédagogique),
      choisi de façon stable à partir du contenu de la figure, ou imposé par data-model="m2" sur le <svg>. */
(function (root) {
  "use strict";

  /* ---------- 1. Texte brut vers LaTeX ---------- */
  const SUB = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9", "ₐ": "a", "ₑ": "e", "ₒ": "o", "ₓ": "x", "ₙ": "n", "ₘ": "m", "ₖ": "k", "ₗ": "l", "ₚ": "p", "ₛ": "s", "ₜ": "t", "ᵢ": "i", "ⱼ": "j", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "₊": "+", "₋": "-", "₌": "=", "₍": "(", "₎": ")", "꜀": "c" };
  const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁺": "+", "⁻": "-", "⁼": "=", "⁽": "(", "⁾": ")", "ⁿ": "n", "ⁱ": "i", "ᵗ": "t", "ᵏ": "k", "ˣ": "x", "ʸ": "y", "ʲ": "j", "ʳ": "r", "ᵈ": "d", "ᵐ": "m", "ᵃ": "a", "ᵇ": "b", "ᶜ": "c", "ᵉ": "e", "ᶠ": "f", "ʰ": "h", "ˡ": "l", "ᵒ": "o", "ᵖ": "p", "ˢ": "s", "ᵘ": "u", "ᵛ": "v", "ʷ": "w", "ᶻ": "z" };
  const SYM = { "≈": "\\approx ", "≃": "\\simeq ", "≤": "\\leqslant ", "≥": "\\geqslant ", "⩽": "\\leqslant ", "⩾": "\\geqslant ", "≠": "\\neq ", "≡": "\\equiv ", "∞": "\\infty ", "⊂": "\\subset ", "⊃": "\\supset ", "⊆": "\\subseteq ", "∩": "\\cap ", "∪": "\\cup ", "→": "\\to ", "←": "\\leftarrow ", "↦": "\\mapsto ", "⇒": "\\Rightarrow ", "⟹": "\\Longrightarrow ", "⇔": "\\iff ", "∈": "\\in ", "∉": "\\notin ", "…": "\\dots ", "⋯": "\\cdots ", "·": "\\cdot ", "×": "\\times ", "÷": "\\div ", "±": "\\pm ", "∓": "\\mp ", "°": "^\\circ ", "ℓ": "\\ell ", "ℏ": "\\hbar ", "∂": "\\partial ", "∇": "\\nabla ", "∫": "\\int ", "∑": "\\sum ", "∏": "\\prod ", "√": "\\sqrt ", "⌊": "\\lfloor ", "⌋": "\\rfloor ", "⌈": "\\lceil ", "⌉": "\\rceil ", "∅": "\\varnothing ", "∀": "\\forall ", "∃": "\\exists ", "‖": "\\| ", "⟨": "\\langle ", "⟩": "\\rangle ", "∘": "\\circ ", "⊥": "\\perp ", "∥": "\\parallel ", "∝": "\\propto ", "∼": "\\sim ", "~": "\\sim ", "−": "-", "–": "-", "—": "-", "′": "'", "″": "''", "𝕌": "\\mathbb U ", "ℝ": "\\mathbb R ", "ℕ": "\\mathbb N ", "ℤ": "\\mathbb Z ", "ℚ": "\\mathbb Q ", "ℂ": "\\mathbb C ", "𝔼": "\\mathbb E ", "ℙ": "\\mathbb P ", "Å": "\\mathring{\\mathrm A}", "µ": "\\mu ", "μ": "\\mu ", "ε": "\\varepsilon ", "ϵ": "\\varepsilon ", "φ": "\\varphi ", "ϕ": "\\varphi ", "%": "\\% ", "&": "\\& ", "#": "\\# ", "{": "\\{", "}": "\\}", "_": "\\_", "^": "\\hat{}", "\\": "\\backslash ", "$": "\\$", "ṙ": "\\dot r ", "ẋ": "\\dot x ", "ẏ": "\\dot y ", "ż": "\\dot z ", "θ̇": "\\dot\\theta ", "ℰ": "\\mathcal E ", "ħ": "\\hbar ", "↔": "\\leftrightarrow ", "⇄": "\\rightleftarrows ", "ℋ": "\\mathcal H ", "ℒ": "\\mathcal L ", "𝒞": "\\mathcal C ", "★": "\\star ", "½": "\\tfrac12 ", "¼": "\\tfrac14 ", "¾": "\\tfrac34 ", "●": "\\bullet ", "○": "\\circ ", "■": "\\blacksquare ", "∗": "\\ast ", "𝓕": "\\mathcal F ", "ℱ": "\\mathcal F ", "ℬ": "\\mathcal B ", "𝒫": "\\mathcal P ", "𝒩": "\\mathcal N ", "𝒰": "\\mathcal U ", "𝒮": "\\mathcal S ", "𝒜": "\\mathcal A ", "𝒟": "\\mathcal D ", "𝒪": "\\mathcal O ", "𝒯": "\\mathcal T ", "𝒱": "\\mathcal V ", "𝒢": "\\mathcal G ", "𝔽": "\\mathbb F ", "𝕂": "\\mathbb K ", "⅓": "\\tfrac13 ", "⅔": "\\tfrac23 ", "⋆": "\\star ", "𝟙": "\\mathbf 1 " };
  const GREEK = { "α": "alpha", "β": "beta", "γ": "gamma", "δ": "delta", "ζ": "zeta", "η": "eta", "θ": "theta", "ι": "iota", "κ": "kappa", "λ": "lambda", "ν": "nu", "ξ": "xi", "π": "pi", "ρ": "rho", "σ": "sigma", "τ": "tau", "υ": "upsilon", "χ": "chi", "ψ": "psi", "ω": "omega", "Γ": "Gamma", "Δ": "Delta", "Θ": "Theta", "Λ": "Lambda", "Ξ": "Xi", "Π": "Pi", "Σ": "Sigma", "Φ": "Phi", "Ψ": "Psi", "Ω": "Omega" };
  /* fonctions et opérateurs écrits droits */
  const FUN = new Set(["sin", "cos", "tan", "ln", "log", "exp", "det", "lim", "max", "min", "sup", "inf", "arg", "deg", "dim", "ker", "sh", "ch", "th", "arctan", "arcsin", "arccos", "cotan"]);
  const OPN = new Set(["ad", "adh", "diag", "pgcd", "ppcm", "mod", "sinc", "div", "rot", "grad", "Im", "Re", "tr", "rg", "card", "Vect", "int", "Fr"]);
  /* unités (après un nombre) */
  const UNIT = new Set(["m", "cm", "mm", "km", "nm", "µm", "μm", "pm", "s", "ms", "µs", "μs", "ns", "ps", "fs", "Hz", "kHz", "MHz", "GHz", "THz", "V", "mV", "kV", "A", "mA", "W", "kW", "MW", "mW", "J", "kJ", "eV", "keV", "MeV", "N", "kN", "Pa", "kPa", "bar", "K", "g", "kg", "mg", "L", "mL", "mol", "rad", "dB", "Ω", "T", "mT", "F", "µF", "nF", "H", "mH", "C", "lx", "cd", "h", "min", "j", "°C", "tr", "Å"]);
  /* mots de deux lettres (ou abréviations) qui sont du texte */
  const SHORT = new Set(["mi", "va", "On", "Le", "La", "En", "Si", "Un", "Au", "De", "Du", "Il", "à", "a", "au", "de", "du", "en", "et", "la", "le", "ne", "on", "ou", "où", "se", "si", "un", "ni", "il", "y", "es", "sa", "ce", "ça", "OK", "ex", "cf", "vs", "Av", "Sp", "Ug"]);
  const AMBIG = new Set(["a", "y", "ne", "on", "es", "sa", "Av", "Sp", "Ug", "il", "ni"]);
  const NOT_WORD = new Set(["sinc", "cav", "eff", "ext", "obs", "diff", "int", "inc", "ref", "max", "min", "sup", "inf", "lim", "det", "adh", "div", "diag", "pgcd", "mod", "exp", "log", "sin", "cos", "tan", "arg", "dim", "ker", "sat", "tot", "moy"]);
  const CHEM = /^(?:(?:He|Li|Be|Ne|Na|Mg|Al|Si|Cl|Ar|Ca|Sc|Ti|Cr|Mn|Fe|Co|Ni|Cu|Zn|Ga|Ge|As|Se|Br|Kr|Rb|Sr|Ag|Cd|Sn|Sb|Xe|Cs|Ba|Pt|Au|Hg|Pb|H|B|C|N|O|F|P|S|K|V|I|U)\d*)+$/;

  const esc = w => w.replace(/[\\{}$&#%_^~]/g, c => SYM[c] || c);
  const isWord = w => {
    if (NOT_WORD.has(w)) return false;
    if (/^[a-zàâäçéèêëîïôöùûüÿœæ']+$/.test(w) && (w.length >= 3 || /[àâçéèêëîïôöùûüœ]/.test(w)) && /[aeiouyàâéèêëîïôöùûüœ]/.test(w)) return true;
    if (/^[A-ZÀÂÇÉÈÊÎÔÛ][a-zàâäçéèêëîïôöùûüÿœæ']{2,}$/.test(w)) return !FUN.has(w.toLowerCase()) && !OPN.has(w);
    if (/^[A-ZÉ]{3,}$/.test(w)) return true; /* sigles : FADEC, RVDT, BUS */
    if (/^(?:I|II|III|IV|V|VI|VII|VIII|IX|X)$/.test(w) && false) return true;
    return SHORT.has(w);
  };

  const subPost = a => { a = a.trim(); return /^[A-Za-z]{2,}$/.test(a) && !/^(?:ie|ic|ij|kl|nm|mn|xy|nk|ik|jk)$/.test(a) ? `\\mathrm{${a}}` : a; };
  /* finitions : indice puis exposant sur un symbole primé, espaces superflues */
  const UNITRE = /(\d\}?|\d)\s+(cm|mm|km|nm|pm|µm|ms|ns|ps|fs|Hz|kHz|MHz|GHz|mV|kV|mA|kW|MW|mW|eV|keV|MeV|kPa|Pa|bar|kg|mg|mol|rad|dB|mT|mH|nF|lx|s|m|h|j|K|V|A|W|N|J|g|L|T|F)(\^\{[^{}]*\})?(?=$|[\s,;)\]])/g;
  const REL = /(?:=|:|<|>|\\(?:to|leqslant|geqslant|approx|in|subset|subseteq|cap|cup|times|cdot|pm|leftarrow|Rightarrow|iff|mapsto|simeq|sim|neq|equiv|propto|rightleftarrows|leftrightarrow|Longrightarrow)) *$/;
  const post = o => o
    /* « flux φ (du chaud au froid) » : l'espace avant la parenthèse est gardée */
    /* relation suivie d'un texte : l'espace de la relation suffit */
    .replace(/(=|:|<|>) *\\ (?=\\text)/g, "$1 ").replace(/(\\text\{[^{}]*\})\\ (?=[=:<>])/g, "$1 ")
    /* signe moins après un mot, un crochet ouvrant ou une relation : unaire */
    .replace(/(\\text\{[^{}]*\}\\ )([-+])/g, "$1{$2}")
    .replace(/(^|[=\s(,])\]/g, "$1\\mathopen{]}").replace(/\[(\s*)$/g, "\\mathclose{[}$1").replace(/\[(?=\s*[,;)])/g, "\\mathclose{[}")
    .replace(UNITRE, (_, a, u, e) => `${a}\\ \\mathrm{${u}}${e || ""}`)
    .replace(/(\d)\s*\\mu s\b/g, "$1\\ \\mu\\mathrm{s}").replace(/\(\\mu s\)/g, "(\\mu\\mathrm{s})").replace(/\(\^\\circ \)/g, "({}^\\circ)")
    .replace(/(\d) (\d{3})(?!\d)/g, "$1\\,$2").replace(/(\d) ?\\%/g, "$1\\,\\%")
    .replace(/(^|[^A-Za-z\\])([eu])_\{(x|y|z|r|\\theta ?|\\varphi ?)\}/g, "$1\\vec{$2}_{$3}")
    .replace(/ \((s|ms|m|cm|mm|nm|V|mV|A|mA|W|kW|Hz|kHz|K|J|N|Pa|kPa|bar|g|kg|mol|rad|dB|h|j|min|eV)\)/g, " (\\mathrm{$1})").replace(/\(\^\\circ C\)/g, "({}^\\circ\\mathrm{C})").replace(/(\d) ?\^\\circ C\b/g, "$1\\,{}^\\circ\\mathrm{C}")
    .replace(/\s+_\{/g, "_{").replace(/\s+\^\{/g, "^{")
    .replace(/(\\[a-zA-Z]+ ?|[A-Za-z])'_\{([^{}]*)\}\^\{([^{}]*)\}/g, "{$1'_{$2}}^{$3}")
    .replace(/(\\[A-Za-z]+) (?=[^A-Za-z ])/g, "$1")
    .replace(/(\\[A-Za-z]+|[A-Za-z0-9}\)\]'|]) +\(/g, (m, a) => /^\\(?:sin|cos|tan|ln|log|exp|det|lim|max|min|sup|inf|arg|sh|ch|th|arctan|arcsin|arccos)$/.test(a) ? a + " (" : a + "\\ (")
    .replace(/\s{2,}/g, " ").trim();
  /* morceau mathématique (sans mots) */
  function mathTex(s) {
    let o = "";
    const keep = KEEP;
    s = s.replace(/([A-Za-z])\u0303/g, (_, a) => { keep.push(`\\tilde{${a}}`); return "\u0011" + (keep.length - 1) + "\u0012"; })
         .replace(/([A-Za-z])\u0302/g, (_, a) => { keep.push(`\\hat{${a}}`); return "\u0011" + (keep.length - 1) + "\u0012"; })
         .replace(/([A-Za-z])\u0304/g, (_, a) => { keep.push(`\\bar{${a}}`); return "\u0011" + (keep.length - 1) + "\u0012"; })
         .replace(/([A-Za-z])\u20d7/g, (_, a) => { keep.push(`\\vec{${a}}`); return "\u0011" + (keep.length - 1) + "\u0012"; });
    /* √(…) et √x */
    s = s.replace(/√\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g, (_, a) => `\u0001${a}\u0002`).replace(/√([0-9A-Za-zα-ω]+)/g, (_, a) => `\u0001${a}\u0002`);
    const toks = s.match(/\u0011\d+\u0012|\u0001|\u0002|[0-9]+(?:[.,][0-9]+)?|[A-Za-z]+|[α-ωΑ-Ω]|\s+|./gu) || [];
    for (let i = 0; i < toks.length; i++) {
      const t = toks[i];
      if (t[0] === "\u0011") { o += keep[+t.slice(1, -1)]; continue; }
      if (t === "\u0001") { o += "\\sqrt{"; continue; }
      if (t === "\u0002") { o += "}"; continue; }
      if (/^\s+$/.test(t)) { o += " "; continue; }
      if (/^[0-9]/.test(t)) { o += t.replace(/[,.]/, "{,}"); continue; }
      if (GREEK[t]) { o += "\\" + GREEK[t] + " "; continue; }
      if (/^[A-Za-z]+$/.test(t)) {
        if (FUN.has(t)) { o += "\\" + (t === "th" || t === "sh" || t === "ch" ? `operatorname{${t}}` : t) + " "; continue; }
        if (OPN.has(t)) { o += `\\operatorname{${t}}`; continue; }
        if (t.length === 1) { o += t; continue; }
        /* lettre + chiffres collés : x1 → x_1 (traité par le lexème suivant) */
        o += t; continue;
      }
      if (SYM[t] !== undefined) { o += SYM[t]; continue; }
      o += t;
    }
    /* x1 → x_{1}, B16 → B_{16}, I2 → I_2 */
    o = o.replace(/(^|[^A-Za-z\\{])([A-Za-z])([0-9]+)(?![0-9,{])/g, (_, a, l, d) => `${a}${l}_{${d}}`);
    return o;
  }

  let KEEP = [];
  const protect = tex => { KEEP.push(tex); return "\u0011" + (KEEP.length - 1) + "\u0012"; };
  /* convertit un libellé (texte + indices tspan déjà marqués _{} ^{}) */
  function toTeX(raw, chem) {
    const saved = KEEP; KEEP = [];
    try { const t = toTeX0(raw); return chem ? chemify(t) : t; } finally { KEEP = saved; }
  }
  /* figure de chimie (data-chem) : symboles d'éléments, formules et orbitales en romain */
  const EL = "He|Li|Be|Ne|Na|Mg|Al|Si|Cl|Ar|Ca|Ti|Cr|Mn|Fe|Co|Ni|Cu|Zn|Br|Ag|Sn|Pt|Au|Hg|Pb|H|B|C|N|O|F|P|S|K|I";
  const chemify = t => t.replace(new RegExp(`(^|[^\\\\A-Za-z{])((?:(?:${EL})(?:_\\{\\d+\\})?)+(?:\\^\\{\\d*[+-]\\})?)(?![A-Za-z])`, "g"), (m, a, b) => `${a}\\mathrm{${b}}`)
    .replace(/(^|[^\\A-Za-z])([1-7])([spdf])(?![A-Za-z])/g, "$1\\mathrm{$2$3}");
  function toTeX0(raw) {
    if (OVERRIDE[raw] !== undefined) return OVERRIDE[raw];
    let s = raw.replace(/[\u200b\u200c\u200d\ufeff]/g, "").replace(/\s+/g, " ").trim();
    if (!s) return "";
    s = s.replace(/[₀-ₜᵢⱼᵣᵤᵥ₊₋₌₍₎꜀]+/g, m => "\u0003" + [...m].map(c => SUB[c]).join("") + "\u0004")
         .replace(/[⁰-⁹⁺⁻⁼⁽⁾ⁿⁱᵗᵏˣʸ¹²³ʲʳᵈᵐᵃᵇᶜᵉᶠʰˡᵒᵖˢᵘᵛʷᶻ]+/g, m => "\u0005" + [...m].map(c => SUP[c]).join("") + "\u0006");
    /* n₀,max : l'indice continue après la virgule */
    s = s.replace(/\u0004,(max|min|eff|sat|0|1|[a-z]{3,})(?![A-Za-z\u0003])/g, ",$1\u0004");
    /* e^(…) */
    s = s.replace(/\^\(((?:[^()]|\([^()]*\))*)\)/g, (_, a) => { const inner = toTeX(a); return protect(`^{${inner}}`); });
    /* x_n, x_{n+1}, ω^2 écrits tels quels */
    s = s.replace(/([A-Za-zα-ωΑ-Ω)])_(\{[^{}]*\}|[0-9]+(?:,[A-Za-z0-9]+)?|[a-zà-ÿα-ω]+(?:,[A-Za-z0-9]+)?|[A-Zα-ωΑ-Ω](?:,[A-Za-z0-9]+)?)/g, (_, a, b) => a + "\u0003" + b.replace(/^\{|\}$/g, "") + "\u0004")
         .replace(/([A-Za-z0-9α-ωΑ-Ω)])\^(\{[^{}]*\}|-?[A-Za-z0-9α-ω]+)/g, (_, a, b) => a + "\u0005" + b.replace(/^\{|\}$/g, "") + "\u0006");
    /* B(0,1) : virgule séparatrice entre deux entiers dans des parenthèses */
    s = s.replace(/([(\[])(-?\d+(?:,-?\d+)+)([)\]])/g, (_, a, b, c) => a + b.replace(/,/g, "\u0010") + c);
    /* cycles (1 3)(2 4) : les espaces séparent les éléments */
    s = s.replace(/\((\d+(?: \d+)+)\)/g, (m, a) => /^\d \d{3}$/.test(a) ? m : protect("(" + a.split(" ").join("\\ ") + ")"));
    /* ‖x‖∞ */
    s = s.replace(/‖\s*∞/g, "‖\u0003∞\u0004");
    /* (rad/s), (m/s), (W/m²) : unités composées entre parenthèses */
    s = s.replace(/\((\s*[A-Za-zµΩ°]+(?:[/·.][A-Za-zµΩ°]+)*[²³]?\s*)\)/g, (m, a) => a.trim().split(/[/·.]/).every(u => UNIT.has(u.replace(/[²³]/, ""))) && /[/·]/.test(a) ? protect(`(\\mathrm{${a.trim().replace(/µ/g, "\\mu ").replace(/·/g, "\\cdot ").replace(/²/, "^2").replace(/³/, "^3")}})`) : m);
    /* ωmax, φmax : indice */
    s = s.replace(/([α-ωΑ-Ω])(max|min)\b/g, "$1\u0003$2\u0004");
    /* découpage : mots (texte) / reste (maths) */
    const parts = s.split(/([A-Za-zÀ-ÖØ-öø-ÿœæŒÆ']+)/);
    const segs = [];
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      if (!p) continue;
      if (i % 2 === 1 && isWord(p)) segs.push({ w: p });
      else if (segs.length && segs[segs.length - 1].m !== undefined) segs[segs.length - 1].m += p;
      else segs.push({ m: p });
    }
    /* 2π-périodique : le trait d'union reste dans le mot */
    for (let i = 0; i + 1 < segs.length; i++) if (segs[i].m !== undefined && /[^\s-]-$/.test(segs[i].m) && segs[i + 1].w !== undefined) { segs[i].m = segs[i].m.slice(0, -1); segs[i + 1].w = "-" + segs[i + 1].w; }
    /* un petit mot isolé (ne, a, va…) entre deux morceaux de calcul est une lettre, pas un mot */
    for (let i = 0; i < segs.length; i++) if (segs[i].w !== undefined && AMBIG.has(segs[i].w)) {
      const nb = j => j >= 0 && j < segs.length && segs[j].w !== undefined && segs[j].w.length > 2;
      const near = j => j >= 0 && j < segs.length && segs[j].m !== undefined && /^[\s,.:;'’()-]*$/.test(segs[j].m);
      if (!((near(i - 1) && nb(i - 2)) || (near(i + 1) && nb(i + 2)))) segs[i] = { m: segs[i].w };
    }
    for (let i = segs.length - 1; i > 0; i--) if (segs[i].m !== undefined && segs[i - 1].m !== undefined) { segs[i - 1].m += segs[i].m; segs.splice(i, 1); }
    /* unités : nombre + espace + unité */
    for (let i = 0; i < segs.length; i++) if (segs[i].m && UNIT.has(segs[i].m.trim()) && i > 0) {
      const prev = segs[i - 1];
      if (prev.m && /[0-9]\s*$/.test(prev.m) && /^[A-Za-zµμΩ°Å]+$/.test(segs[i].m.trim())) segs[i] = { u: segs[i].m.trim() };
    }
    let out = "";
    for (let i = 0; i < segs.length; i++) {
      const g = segs[i];
      if (g.w !== undefined) {
        /* regroupe les mots consécutifs séparés d'espaces / ponctuation simple */
        let txt = g.w;
        while (i + 2 < segs.length && segs[i + 1].m !== undefined && /^[\s,;:'’.!?«»"()-]*$/.test(segs[i + 1].m) && !/[()]/.test(segs[i + 1].m.trim().slice(-1) === "(" ? "(" : "") && segs[i + 2].w !== undefined) { txt += segs[i + 1].m + segs[i + 2].w; i += 2; }
        const lead = /\S$/.test(out) && !/[{(\[\u0003\u0005]$/.test(out) && txt[0] !== "-" ? "\\ " : "";
        out += lead + `\\text{${txt.replace(/'/g, "’")}}`;
        continue;
      }
      if (g.u !== undefined) { out = out.replace(/\s*$/, ""); out += `\\ \\mathrm{${g.u === "µm" || g.u === "μm" ? "\\mu m" : g.u === "°C" ? "{}^\\circ C" : g.u === "Ω" ? "\\Omega" : g.u === "Å" ? "\\mathring{A}" : g.u}}`; continue; }
      let m = g.m;
      /* formule chimique isolée */
      if (CHEM.test(m.trim()) && /[A-Z][^A-Z]*[A-Z]|[A-Z][a-z]/.test(m.trim())) { out += `\\mathrm{${m.trim().replace(/(\d+)/g, "_{$1}")}}`; continue; }
      let t = mathTex(m);
      /* espaces de la phrase autour des segments texte */
      if (i > 0 && segs[i - 1].w !== undefined && /^\s/.test(m)) t = "\\ " + t.replace(/^\s+/, "");
      if (i < segs.length - 1 && segs[i + 1].w !== undefined && /\s$/.test(m)) t = t.replace(/\s+$/, "") + "\\ ";
      out += t;
    }
    out = out.replace(/\u0003([^\u0004]*)\u0004/g, (_, a) => `_{${subPost(a)}}`).replace(/\u0005([^\u0006]*)\u0006/g, (_, a) => `^{${a.trim()}}`).replace(/\u0010/g, ",");
    return post(out);
  }

  /* libellés dont la lecture automatique serait ambiguë : écrits ici à la main */
  const OVERRIDE = {
    "qa": "q_a", "qb": "q_b", "qc": "q_c",
    "Bf(a,r) : bord inclus": "B_f(a,r) :\\ \\text{bord inclus}", "Bf(a,r)": "B_f(a,r)", "Bf(0,1) = {0, 1}": "B_f(0,1) = \\{0, 1\\}",
    "pH": "\\mathrm{pH}", "lactose": "\\text{lactose}",
    "Cu₂O": "\\mathrm{Cu_2O}", "Fe²⁺": "\\mathrm{Fe^{2+}}", "MnO₄⁻": "\\mathrm{MnO_4^{-}}", "Cu²⁺ réduit": "\\mathrm{Cu^{2+}}\\ \\text{réduit}",
    "1 Cu → 1 Fe²⁺": "1\\,\\mathrm{Cu}\\to 1\\,\\mathrm{Fe^{2+}}", "5 Fe²⁺ ↔ 1 MnO₄⁻": "5\\,\\mathrm{Fe^{2+}}\\leftrightarrow 1\\,\\mathrm{MnO_4^{-}}",
    "n(Cu) = n(Fe²⁺) = 5 n(MnO₄⁻) = 5 C V_éq": "n(\\mathrm{Cu}) = n(\\mathrm{Fe^{2+}}) = 5\\,n(\\mathrm{MnO_4^{-}}) = 5\\,C\\,V_{\\text{éq}}",
    "A = HClO": "A = \\mathrm{HClO}", "B = Cl₂": "B = \\mathrm{Cl_2}", "C = Cl⁻": "C = \\mathrm{Cl^{-}}", "D = ClO⁻": "D = \\mathrm{ClO^{-}}",
    "pH = pKₐ = 7,5": "\\mathrm{pH} = \\mathrm{p}K_{\\mathrm a} = 7{,}5",
    "(1) MnO₄⁻ : +VII": "(1)\\ \\mathrm{MnO_4^{-}} : +\\mathrm{VII}", "(2) MnO₄²⁻ : +VI": "(2)\\ \\mathrm{MnO_4^{2-}} : +\\mathrm{VI}", "(3) MnO₂ : +IV": "(3)\\ \\mathrm{MnO_2} : +\\mathrm{IV}",
    "(4) Mn²⁺ : +II": "(4)\\ \\mathrm{Mn^{2+}} : +\\mathrm{II}", "(5) Mn(OH)₂ : +II": "(5)\\ \\mathrm{Mn(OH)_2} : +\\mathrm{II}", "(6) Mn : 0": "(6)\\ \\mathrm{Mn} : 0",
    "CH₃COOH": "\\mathrm{CH_3COOH}", "CH₃COO⁻": "\\mathrm{CH_3COO^{-}}", "CH₃CH₂OH": "\\mathrm{CH_3CH_2OH}", "H⁺": "\\mathrm{H^{+}}", "H₂O": "\\mathrm{H_2O}", "CO₂": "\\mathrm{CO_2}",
    "e⁻ (circuit extérieur)": "\\mathrm{e^{-}}\\ (\\text{circuit extérieur})", "e⁻": "\\mathrm{e^{-}}", "p⁺": "\\mathrm{p^{+}}",
    "1er max (vitesse c)": "1^{\\text{er}}\\ \\text{max}\\ (\\text{vitesse}\\ c)", "2e max": "2^{\\text{e}}\\ \\text{max}",
    "i.a : durée T, période T₀": "\\text{(i.a)}\\ \\text{durée}\\ T,\\ \\text{période}\\ T_0", "i.c : focalisation sur la cible": "\\text{(i.c)}\\ \\text{focalisation sur la cible}",
    "i.d : col du faisceau au foyer": "\\text{(i.d)}\\ \\text{col du faisceau au foyer}", "ii.a : état fondamental": "\\text{(ii.a)}\\ \\text{état fondamental}",
    "ii.b : ionisation": "\\text{(ii.b)}\\ \\text{ionisation}", "ii.c-d : accélération, retour": "\\text{(ii.c-d)}\\ \\text{accélération, retour}",
    "E (u.a.)": "E\\ (\\text{u.a.})", "E_p,eff": "E_{p,\\mathrm{eff}}",
    "k = α e_x + γ e_z": "\\vec k = \\alpha\\,\\vec e_x + \\gamma\\,\\vec e_z", "|k| = ω/c": "\\|\\vec k\\| = \\omega/c",
    "F_g : vers le col O": "\\vec F_g : \\text{vers le col}\\ O", "F_d : sens du faisceau": "\\vec F_d : \\text{sens du faisceau}",
    "115 V~": "115\\ \\mathrm{V}\\sim", "24 V=": "24\\ \\mathrm{V}\\,{=}",
    "θb (°)": "\\theta_b\\ ({}^\\circ)", "droite : λ ≈ 6.28 θb + 264": "\\text{droite}\\ : \\lambda \\approx 6{,}28\\,\\theta_b + 264", "+20 dB/déc": "+20\\ \\mathrm{dB/déc}",
    "S0,0": "S_{0,0}", "S0,1": "S_{0,1}", "S1,0": "S_{1,0}", "S1,1": "S_{1,1}", "S2,0": "S_{2,0}", "S2,1": "S_{2,1}",
    "obs₀ = 2": "\\mathrm{obs}_0 = 2", "obs₁ = 0": "\\mathrm{obs}_1 = 0", "list_finite": "\\texttt{list_finite}", "list_ones": "\\texttt{list_ones}",
    "Cβ = {J ≤ β}": "C_\\beta = \\{J \\leqslant \\beta\\}", "⟨y − p(a), a − p(a)⟩ ≤ 0 pour y ∈ Cβ": "\\langle y - p(a), a - p(a)\\rangle \\leqslant 0\\ \\text{pour}\\ y \\in C_\\beta",
    "(ℤ/9ℤ)ˣ = ⟨2⟩ ≃ ℤ/6ℤ": "(\\mathbb Z/9\\mathbb Z)^\\times = \\langle 2\\rangle \\simeq \\mathbb Z/6\\mathbb Z",
    "(ℤ/16ℤ)ˣ = {±1} × ⟨5⟩ ≃ ℤ/2ℤ × ℤ/4ℤ": "(\\mathbb Z/16\\mathbb Z)^\\times = \\{\\pm 1\\} \\times \\langle 5\\rangle \\simeq \\mathbb Z/2\\mathbb Z \\times \\mathbb Z/4\\mathbb Z",
    "Base de temps : 50 µs/div": "\\text{Base de temps : }50\\ \\mu\\mathrm{s/div}", "Base de temps : 5 µs/div": "\\text{Base de temps : }5\\ \\mu\\mathrm{s/div}",
    "Voie 1 (vₑ, bleu) : 2 V/div — Voie 2 (vₛ, rouge) : 1 V/div — couplage DC": "\\text{Voie 1 (}v_e\\text{, bleu) : }2\\ \\mathrm{V/div}\\quad\\text{Voie 2 (}v_s\\text{, rouge) : }1\\ \\mathrm{V/div}\\quad\\text{couplage DC}",
    "Voie 1 (vₑ, bleu) : 2 V/div — Voie 2 (vₛ, rouge) : 20 mV/div — couplage DC": "\\text{Voie 1 (}v_e\\text{, bleu) : }2\\ \\mathrm{V/div}\\quad\\text{Voie 2 (}v_s\\text{, rouge) : }20\\ \\mathrm{mV/div}\\quad\\text{couplage DC}",
    "IT 1": "\\text{IT 1}", "IT 2": "\\text{IT 2}", "IT 3": "\\text{IT 3}", "IT 31": "\\text{IT 31}", "IT 32": "\\text{IT 32}",
    "C.A.N.": "\\text{C.A.N.}", "C.N.A.": "\\text{C.N.A.}", "Vsat/R′": "V_{\\mathrm{sat}}/R'", "Ug": "U_g", "DC": "\\text{DC}",
    "état excité ℰ*": "\\text{état excité}\\ \\mathcal E^{*}", "( 1 1 ; 0 1 )": "\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}",
    "boule de rayon a, charge +e": "\\text{boule de rayon}\\ a,\\ \\text{charge}\\ {+e}", "a, potentiel V_a(t)": "a,\\ \\text{potentiel}\\ V_a(t)", "b, potentiel V_b = 32 V": "b,\\ \\text{potentiel}\\ V_b = 32\\ \\mathrm{V}",
    "L = L e_z sort du plan": "\\vec L = L\\,\\vec e_z\\ \\text{sort du plan}", "a √2 = 4R": "a\\sqrt2 = 4R"
  };

  /* ---------- 2. Modèles ---------- */
  const COLORED = /class="[^"]*\b(?:v[brgv]|h[brgv]|z[brgv]|pt[brv]|b|r|g|v|vb|vr)\b[^"]*"|stroke="#(?!(?:000|111|222|333|444|555|666|777|888|999|aaa|bbb|ccc|ddd|eee|fff))|fill="#(?!(?:000|111|222|333|444|555|666|777|888|999|aaa|bbb|ccc|ddd|eee|fff|FFF))|rgba\(|var\(--(?:blue|red|green|gold|yellow|navy)/;
  const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
  function pickModel(svg, src) {
    const forced = svg.getAttribute("data-model");
    if (/^m[1-5]$/.test(forced || "")) return forced;
    /* labos et petits schémas interactifs : redessinés à chaque réglage, ils gardent un seul modèle */
    if (!svg.closest("figure.fig")) return "m1";
    const h = hash(src);
    const mono = !COLORED.test(src);
    /* le dessin technique (noir et blanc) seulement quand la couleur ne porte aucun sens */
    const pool = mono ? ["m1", "m2", "m3", "m4", "m5"] : ["m1", "m2", "m3", "m5"];
    return pool[h % pool.length];
  }

  /* ---------- 3. Rendu ---------- */
  const NS = "http://www.w3.org/2000/svg";
  const VARS = ["--ink", "--muted", "--blue", "--red", "--gold-ink", "--green", "--navy"];
  function colorVar(el) {
    const c = getComputedStyle(el).fill;
    const cs = getComputedStyle(document.documentElement);
    const probe = document.createElement("span");
    document.body.appendChild(probe);
    let best = null;
    for (const v of VARS) { const raw = cs.getPropertyValue(v).trim(); if (!raw) continue; probe.style.color = raw; if (getComputedStyle(probe).color === c) { best = `var(${v})`; break; } }
    probe.remove();
    return best || c || "currentColor";
  }

  /* lit un <text> : texte + tspans indices / exposants */
  function readText(t) {
    let s = "", off = 0;
    for (const n of t.childNodes) {
      if (n.nodeType === 3) { s += wrap(n.nodeValue, off); continue; }
      if (n.nodeName !== "tspan") continue;
      off += parseFloat(n.getAttribute("dy") || "0");
      const bs = n.getAttribute("baseline-shift") || "";
      const lv = bs === "sub" ? 1 : bs === "super" ? -1 : off;
      s += wrap(n.textContent, lv);
    }
    return s;
  }
  const wrap = (v, lv) => !v ? "" : lv > 0.5 ? `\u0003${v}\u0004` : lv < -0.5 ? `\u0005${v}\u0006` : v;
  /* le texte lu avec marqueurs → clef d'OVERRIDE lisible */
  const keyOf = s => s.replace(/\u0003/g, "_{").replace(/\u0004/g, "}").replace(/\u0005/g, "^{").replace(/\u0006/g, "}");
  function labelTeX(t) {
    const s = readText(t);
    if (t.hasAttribute("data-tex")) return t.getAttribute("data-tex");
    const k = keyOf(s).replace(/[\u200b\u200c\u200d\ufeff]/g, "").replace(/\s+/g, " ").trim();
    if (OVERRIDE[k] !== undefined) return OVERRIDE[k];
    return toTeX(s, !!(t.closest && t.closest("[data-chem]")));
  }

  const SCALE = 1.1; /* les glyphes TeX paraissent plus petits qu'un texte de même corps */
  function renderLabel(t, svg) {
    const tex = labelTeX(t);
    if (!tex) { t.remove(); return null; }
    const cs = getComputedStyle(t);
    const fs = parseFloat(t.getAttribute("font-size") || cs.fontSize) || 15;
    let px = fs * SCALE;
    const x = parseFloat(t.getAttribute("x") || "0"), y = parseFloat(t.getAttribute("y") || "0");
    const anchor = t.getAttribute("text-anchor") || cs.textAnchor || "start";
    const color = colorVar(t);
    let node;
    try { node = MathJax.tex2svg(tex, { display: false }).querySelector("svg"); } catch (e) { node = null; }
    if (!node || node.querySelector("[data-mjx-error], merror") || !isFinite(x) || !isFinite(y)) { console.warn("[figs] LaTeX refusé :", JSON.stringify(readText(t)), "→", tex); return null; }
    const vb = node.getAttribute("viewBox").split(/\s+/).map(Number);
    const g = document.createElementNS(NS, "g");
    g.setAttribute("class", "fxl");
    g.setAttribute("data-tex", tex);
    if (t.getAttribute("transform")) g.setAttribute("transform", t.getAttribute("transform"));
    const k = px / 1000;
    const w = vb[2] * k, h = vb[3] * k, top0 = vb[1] * k; /* vb[1] < 0 : hauteur au-dessus de la ligne de base */
    let x0 = anchor === "middle" ? x - w / 2 : anchor === "end" ? x - w : x;
    const lab = { g, node, vb, k, w, h, x0, y0: y + top0, ax: x, ay: y, color, tex, fs, fixed: t.hasAttribute("data-fixed") };
    node.removeAttribute("style"); node.removeAttribute("width"); node.removeAttribute("height");
    node.setAttribute("overflow", "visible");
    node.style.color = color;
    const top = node.querySelector("g");
    if (top) { top.setAttribute("stroke", "var(--figbg, #fff)"); top.setAttribute("stroke-width", String(Math.round(2.6 / k))); top.setAttribute("paint-order", "stroke"); top.setAttribute("stroke-linejoin", "round"); }
    /* caractères absents des polices TeX (é, è, à…) : MathJax les écrit en <text> ; on protège leur corps et leur couleur des styles du site */
    node.querySelectorAll("text").forEach(u => { const f = u.getAttribute("font-size"); if (f) u.style.fontSize = f; u.style.fill = "currentColor"; u.style.fontStyle = u.getAttribute("font-style") || "normal"; });
    g.appendChild(node);
    place(lab, lab.x0, lab.y0);
    t.replaceWith(g);
    return lab;
  }
  function place(l, x, y) { l.x0 = x; l.y0 = y; l.node.setAttribute("x", x.toFixed(2)); l.node.setAttribute("y", y.toFixed(2)); l.node.setAttribute("width", l.w.toFixed(2)); l.node.setAttribute("height", l.h.toFixed(2)); }

  /* points des traits (repère du viewBox) */
  let LINE = null;
  function obstacles(svg) {
    const pts = [], shapes = [];
    /* les traits de grille (couleur --line, fins) ne gênent pas une étiquette : le halo suffit */
    if (LINE === null) { const p = document.createElement("span"); p.style.color = getComputedStyle(document.documentElement).getPropertyValue("--line").trim() || "#dce2ef"; document.body.appendChild(p); LINE = getComputedStyle(p).color; p.remove(); }
    const inv = svg.getCTM && svg.getCTM() ? null : null;
    let id = 0;
    svg.querySelectorAll("path, line, polyline, polygon, circle, ellipse, rect").forEach(el => {
      const eid = ++id;
      if (el.closest(".fxl") || el.closest("defs") || el.closest("clipPath") || el.closest("marker")) return;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden" || +cs.opacity === 0) return;
      const stroked = cs.stroke && cs.stroke !== "none" && parseFloat(cs.strokeWidth) > 0 && +cs.strokeOpacity > 0;
      if (stroked && cs.stroke === LINE && parseFloat(cs.strokeWidth) <= 1.3 && (cs.fill === "none" || el.tagName === "line")) return;
      const filled = cs.fill && cs.fill !== "none" && +cs.fillOpacity > 0.5;
      let bb; try { bb = el.getBBox(); } catch (e) { return; }
      const area = bb.width * bb.height;
      if (!stroked && !(filled && area < 900)) {
        if (filled && area >= 900 && (el.tagName === "rect" || el.tagName === "circle" || el.tagName === "polygon" || el.tagName === "path")) shapes.push({ bb, el, eid, fillOnly: true });
        return;
      }
      if (/^(rect|circle|ellipse|polygon)$/.test(el.tagName) || (el.tagName === "path" && /z\s*$/i.test(el.getAttribute("d") || ""))) shapes.push({ bb, el, eid });
      const m = el.getCTM && el.getCTM(), sm = svg.getCTM && svg.getCTM();
      let M = null;
      if (m && sm) M = sm.inverse().multiply(m);
      let len = 0; try { len = el.getTotalLength(); } catch (e) { }
      const sw = stroked ? parseFloat(cs.strokeWidth) / 2 : 0;
      const step = 1.6, n = Math.max(2, Math.ceil(len / step));
      if (len > 0) for (let i = 0; i <= n; i++) {
        let p; try { p = el.getPointAtLength(len * i / n); } catch (e) { break; }
        let px = p.x, py = p.y;
        if (M) { px = M.a * p.x + M.c * p.y + M.e; py = M.b * p.x + M.d * p.y + M.f; }
        pts.push([px, py, sw, eid]);
      }
      /* petites formes pleines (pointes de flèche, points) : tout le rectangle */
      if (filled && area < 900) for (let u = 0; u <= 1; u += 0.25) for (let v = 0; v <= 1; v += 0.25) { let px = bb.x + u * bb.width, py = bb.y + v * bb.height; if (M) { const qx = M.a * px + M.c * py + M.e, qy = M.b * px + M.d * py + M.f; px = qx; py = qy; } pts.push([px, py, 0, eid]); }
    });
    /* grille de recherche */
    const C = 10, grid = new Map();
    for (const p of pts) { const k = Math.floor(p[0] / C) + "," + Math.floor(p[1] / C); (grid.get(k) || grid.set(k, []).get(k)).push(p); }
    return { grid, C, shapes };
  }
  function hits(ob, x, y, w, h, pad, skip) {
    const { grid, C } = ob; let n = 0;
    const x1 = x - pad, y1 = y - pad, x2 = x + w + pad, y2 = y + h + pad;
    for (let i = Math.floor((x1 - 3) / C); i <= Math.floor((x2 + 3) / C); i++) for (let j = Math.floor((y1 - 3) / C); j <= Math.floor((y2 + 3) / C); j++) {
      const a = grid.get(i + "," + j); if (!a) continue;
      for (const p of a) if (p[3] !== skip && p[0] >= x1 - p[2] && p[0] <= x2 + p[2] && p[1] >= y1 - p[2] && p[1] <= y2 + p[2]) n++;
    }
    return n;
  }
  const overlap = (a, b, pad) => a.x0 - pad < b.x0 + b.w && b.x0 - pad < a.x0 + a.w && a.y0 - pad < b.y0 + b.h && b.y0 - pad < a.y0 + a.h;

  function resolve(svg, labs) {
    const ob = obstacles(svg);
    const vb = (svg.getAttribute("viewBox") || "0 0 400 300").split(/[\s,]+/).map(Number);
    const placed = [];
    const PAD = 1.8;
    /* les étiquettes enfermées dans un cadre y restent */
    for (const l of labs) {
      const cx = l.x0 + l.w / 2, cy = l.y0 + l.h / 2;
      let box = null, sh = null;
      for (const s of ob.shapes) { const b = s.bb; if (cx > b.x && cx < b.x + b.width && cy > b.y && cy < b.y + b.height && b.width < vb[2] * 0.9 && (!box || b.width * b.height < box.width * box.height)) { box = b; sh = s; } }
      l.box = box && box.width * box.height < vb[2] * vb[3] * 0.5 ? box : null;
      l.skip = l.box ? sh.eid : -1;
      /* petite forme fermée (nœud de graphe, case, bloc) : l'étiquette y est centrée exprès, on ne la bouge pas */
      l.inside = !!(l.box && box.width * box.height < 60 * 60 * 4 && l.w <= box.width * 1.6 && l.h <= box.height * 1.4);
      /* trop large pour sa case (n+1 dans un petit nœud) : réduite pour y tenir, centrée au même endroit */
      if (l.inside && (l.w > box.width - 3 || l.h > box.height - 2)) { const f = Math.max(0.6, Math.min((box.width - 3) / l.w, (box.height - 2) / l.h)); const cx0 = l.x0 + l.w / 2, cy0 = l.y0 + l.h / 2; l.w *= f; l.h *= f; l.k *= f; place(l, cx0 - l.w / 2, cy0 - l.h / 2); }
    }
    for (const l of labs) {
      const free = (x, y) => {
        if (x < vb[0] - 2 || y < vb[1] - 2 || x + l.w > vb[0] + vb[2] + 2 || y + l.h > vb[1] + vb[3] + 2) return false;
        if (l.box && (x < l.box.x + 1 || y < l.box.y + 1 || x + l.w > l.box.x + l.box.width - 1 || y + l.h > l.box.y + l.box.height - 1)) return false;
        if (hits(ob, x, y, l.w, l.h, PAD, l.skip)) return false;
        for (const q of placed) if (overlap({ x0: x, y0: y, w: l.w, h: l.h }, q, 2)) return false;
        return true;
      };
      const X = l.x0, Y = l.y0;
      if (l.inside || l.fixed) { placed.push(l); continue; }
      if (!free(X, Y)) {
        /* étiquette trop large pour son cadre : on la réduit */
        let best = null;
        const R = Math.min(34, Math.max(14, l.h * 1.6));
        outer: for (let r = 1.5; r <= R; r += 1.5) {
          const n = Math.max(8, Math.round(r * 1.2));
          let cand = [];
          for (let i = 0; i < n; i++) { const a = 2 * Math.PI * i / n; cand.push([l.x0 + r * Math.cos(a) * 1.3, l.y0 + r * Math.sin(a)]); }
          /* d'abord les déplacements verticaux / horizontaux purs */
          cand.sort((p, q) => Math.min(Math.abs(p[0] - l.x0), Math.abs(p[1] - l.y0)) - Math.min(Math.abs(q[0] - l.x0), Math.abs(q[1] - l.y0)));
          for (const c of cand) if (free(c[0], c[1])) { best = c; break outer; }
        }
        if (best) place(l, best[0], best[1]);
        else {
          /* pas de place libre : la moins encombrée, le halo garde la lecture */
          let bc = [l.x0, l.y0], bn = Infinity;
          for (let r = 0; r <= 14; r += 2) for (let i = 0; i < 12; i++) { const a = 2 * Math.PI * i / 12, x = l.x0 + r * Math.cos(a), y = l.y0 + r * Math.sin(a); const n = hits(ob, x, y, l.w, l.h, PAD, l.skip) + (x < vb[0] || y < vb[1] || x + l.w > vb[0] + vb[2] || y + l.h > vb[1] + vb[3] ? 1000 : 0) + r * 0.3 + placed.filter(q => overlap({ x0: x, y0: y, w: l.w, h: l.h }, q, 2)).length * 50; if (n < bn) { bn = n; bc = [x, y]; } }
          place(l, bc[0], bc[1]);
          l.g.setAttribute("data-crowded", "1");
        }
        if (Math.hypot(l.x0 - X, l.y0 - Y) > 0.5) l.g.setAttribute("data-moved", (l.x0 - X).toFixed(1) + "," + (l.y0 - Y).toFixed(1));
      }
      placed.push(l);
    }
  }

  /* compléments propres à un modèle, pour les graphes qui déclarent leur zone de tracé (data-plot sur un <g>) */
  function decorate(svg, model) {
    const mk = svg.querySelector("g[data-plot]");
    if (!mk) return;
    const [l, t, r, b, y0] = mk.getAttribute("data-plot").split(" ").map(Number);
    const add = (html, first) => { const g = document.createElementNS(NS, "g"); g.setAttribute("class", "fxd"); g.innerHTML = html; if (first) svg.insertBefore(g, svg.firstChild); else svg.appendChild(g); return g; };
    if (model === "m2") {
      /* cadre fermé + graduations répétées sur le bord opposé */
      { const e = 0.03 * (b - t); add(`<rect x="${l}" y="${t - e}" width="${r - l}" height="${b - t + 2 * e}" class="fx-frame"/>`); }
    }
    if (model === "m3" || model === "m5") {
      /* aire teintée sous la première courbe principale */
      /* seulement s'il n'y a qu'une courbe : sinon on n'en privilégie aucune */
      const cs = svg.querySelectorAll("path.vb, path.vr, path.vg, path.vv, path.vk");
      const c = cs.length === 1 ? cs[0] : null;
      if (c && isFinite(y0)) {
        const d = c.getAttribute("d") || "";
        const segs = d.split(/(?=M)/).filter(s => s.trim());
        if (segs.length === 1) {
          const nums = d.match(/-?\d+(?:\.\d+)?/g).map(Number);
          const xa = nums[0], xb = nums[nums.length - 2];
          add(`<path d="${d.trim()} L${xb} ${y0} L${xa} ${y0} Z" class="fx-area ${model === "m5" ? "fx-area5" : ""}"/>`, true);
        }
      }
    }
  }

  function processSvg(svg) {
    if (svg.hasAttribute("data-fx")) return true;
    if (svg.parentElement && svg.parentElement.closest(".fxl, mjx-container")) return true;
    if (!root.MathJax || !MathJax.tex2svg) return false;
    let bb; try { bb = svg.getBBox(); } catch (e) { return false; }
    if (!svg.getClientRects().length) return false;
    /* empreinte stable (même valeur sur le site et pour les PDF) */
    const src = (svg.getAttribute("viewBox") || "") + "|" + (svg.getAttribute("aria-label") || "") + "|" + [...svg.querySelectorAll("text")].map(t => t.textContent).join("|") + "|" + svg.innerHTML.replace(/<text[\s\S]*?<\/text>/g, "").replace(/\s+/g, "").length;
    svg.setAttribute("data-fx", "1");
    const model = pickModel(svg, src);
    svg.classList.add("fx", model);
    /* couleur du halo des étiquettes : le fond réel derrière la figure */
    if (!svg.style.getPropertyValue("--figbg")) {
      let e = svg, bg = "";
      while (e && e.nodeType === 1) { const c = getComputedStyle(e).backgroundColor; if (c && c !== "transparent" && !/rgba\([^)]*,\s*0\)$/.test(c)) { bg = c; break; } e = e.parentElement; }
      if (bg) {
        const cs = getComputedStyle(document.documentElement), probe = document.createElement("span"); document.body.appendChild(probe);
        let v = bg; for (const n of ["--bg", "--surface", "--bg-2"]) { probe.style.color = cs.getPropertyValue(n).trim(); if (getComputedStyle(probe).color === bg) { v = `var(${n})`; break; } }
        probe.remove(); svg.style.setProperty("--figbg", v);
      }
    }
    const fig = svg.closest("figure"); if (fig) fig.classList.add("fx-" + model);
    decorate(svg, model);
    const labs = [];
    svg.querySelectorAll("text").forEach(t => { if (t.closest(".fxl")) return; const l = renderLabel(t, svg); if (l) labs.push(l); });
    if (labs.length) resolve(svg, labs);
    return true;
  }

  const SEL = "figure.fig > svg, svg.fx-auto, svg.rmsvg, svg.lab-svg, svg.racn, svg.sarrus, svg.fx-auto";
  let io = null;
  function scan(rootEl) {
    const list = (rootEl || document).querySelectorAll(SEL);
    if (!list.length) return;
    if (!io && "IntersectionObserver" in root) io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && processSvg(e.target)) io.unobserve(e.target); }), { rootMargin: "600px 0px" });
    list.forEach(s => { if (s.hasAttribute("data-fx") || !s.querySelector("text")) return; if (io) io.observe(s); else processSvg(s); });
  }
  function start() {
    const go = () => {
      scan(document);
      new MutationObserver(ms => {
        for (const m of ms) for (const n of m.addedNodes) if (n.nodeType === 1 && (n.matches(SEL) || (n.querySelector && n.querySelector("svg")))) {
          /* figure déjà à l'écran (labo redessiné au curseur) : tout de suite, sans clignotement */
          const list = n.matches(SEL) ? [n] : [...n.querySelectorAll(SEL)];
          for (const s of list) { const r = s.getBoundingClientRect(); if (r.width && r.bottom > -200 && r.top < innerHeight + 200) processSvg(s); }
          scan(n.parentNode || n);
        }
      }).observe(document.body, { childList: true, subtree: true });
    };
    const wait = () => { if (root.MathJax && MathJax.startup && MathJax.startup.promise) MathJax.startup.promise.then(go); else setTimeout(wait, 60); };
    wait();
  }

  root.LemmeFigs = { toTeX, labelTeX, readText, keyOf, processSvg, scan, start, pickModel, OVERRIDE, mathTex };
  if (typeof module !== "undefined") module.exports = root.LemmeFigs;
  else if (!root.__LEMME_FIGS_MANUAL) start();
})(typeof window !== "undefined" ? window : globalThis);

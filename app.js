(() => {
  "use strict";

  // ---------- À personnaliser ----------
  const DEPOT = "lucie-lab/mes-recettes"; // ton-pseudo/nom-du-dépôt
  const SEUIL_PROTEINES = 20;             // g par portion pour le filtre 💪

  // Si recettes.js a une erreur (souvent une virgule oubliée), on le dit clairement
  if (typeof RECETTES === "undefined" || !Array.isArray(RECETTES)) {
    document.body.innerHTML =
      '<div class="erreur"><h2>Le fichier recettes.js contient une erreur</h2>' +
      "<p>Le plus souvent, c'est une virgule oubliée entre deux recettes, ou un guillemet non fermé. " +
      "Regarde la dernière recette que tu as ajoutée.</p></div>";
    return;
  }

  // ---------- Réglages ----------
  const CATEGORIES = {
    "Entrée":    { couleur: "var(--entree)",   emoji: "🥗" },
    "Plat":      { couleur: "var(--plat)",     emoji: "🍲" },
    "Dessert":   { couleur: "var(--dessert)",  emoji: "🍰" },
    "Apéro":     { couleur: "var(--apero)",    emoji: "🫒" },
    "Boisson":   { couleur: "var(--boisson)",  emoji: "🍹" },
    "Petit-déj": { couleur: "var(--petitdej)", emoji: "🥐" }
  };
  // Les tags connus passent en premier dans les filtres, avec leur emoji
  const ORDRE_TAGS = ["volaille", "poisson", "viande", "végétarien", "vegan", "sans gluten"];
  const EMOJIS_TAGS = {
    "volaille": "🍗", "poisson": "🐟", "viande": "🥩",
    "végétarien": "🌱", "vegan": "🌿", "sans gluten": "🌾"
  };
  const TOUTES = "Toutes";
  const RAPIDE = "__rapide";
  const FAVORIS = "__favoris";
  const PROTEINES = "__proteines";

  // ---------- Outils ----------
  const $ = (s) => document.querySelector(s);
  const norm = (s) => String(s).toLowerCase().replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const couleur = (cat) => (CATEGORIES[cat] || {}).couleur || "var(--papier)";
  const difficulte = (n) => ["", "Facile", "Moyen", "On s'accroche"][n] || "";
  const duree = (min) => {
    if (!min) return "";
    if (min < 60) return `${min} min`;
    const h = Math.floor(min / 60), m = min % 60;
    return m ? `${h} h ${m}` : `${h} h`;
  };
  const aProteines = (r) => typeof r.proteines === "number";
  const estProteinee = (r) => aProteines(r) && r.proteines >= SEUIL_PROTEINES;
  const reduireMouvement = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function formatQte(n) {
    if (typeof n !== "number") return n ?? "";
    const e = Math.floor(n), r = n - e;
    if (r < 0.08) return String(e);
    if (r > 0.92) return String(e + 1);
    const fractions = [[0.25, "¼"], [1 / 3, "⅓"], [0.5, "½"], [2 / 3, "⅔"], [0.75, "¾"]];
    const f = fractions.find(([v]) => Math.abs(v - r) < 0.06);
    if (f) return (e || "") + f[1];
    return String(Math.round(n * 10) / 10).replace(".", ",");
  }

  const ligneIngredient = (ing, portions, base) => {
    const q = typeof ing.qte === "number" ? ing.qte * portions / base : ing.qte;
    return [formatQte(q), ing.unite, ing.nom].filter((x) => x !== "" && x != null).join(" ");
  };

  async function copier(texte) {
    try { await navigator.clipboard.writeText(texte); return true; }
    catch {
      const zone = document.createElement("textarea");
      zone.value = texte;
      zone.style.position = "fixed"; zone.style.opacity = "0";
      document.body.appendChild(zone); zone.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch {}
      zone.remove();
      return ok;
    }
  }

  function confirmer(bouton, ok, texteOk) {
    const original = bouton.textContent;
    bouton.textContent = ok ? texteOk : "Copie impossible";
    bouton.disabled = true;
    setTimeout(() => { bouton.textContent = original; bouton.disabled = false; }, 1800);
  }

  // ---------- Favoris (gardés dans le navigateur) ----------
  let favoris;
  try { favoris = new Set(JSON.parse(localStorage.getItem("favoris") || "[]")); }
  catch { favoris = new Set(); }
  const sauverFavoris = () => {
    try { localStorage.setItem("favoris", JSON.stringify([...favoris])); } catch {}
  };

  // ---------- État ----------
  const etat = { cat: TOUTES, filtres: new Set(), q: "", tri: "alpha" };

  // ---------- Filtrage et tri ----------
  function filtrer() {
    const mots = norm(etat.q).split(/\s+/).filter(Boolean);
    const liste = RECETTES.filter((r) => {
      if (etat.cat !== TOUTES && r.categorie !== etat.cat) return false;
      for (const f of etat.filtres) {
        if (f === RAPIDE) { if (!(r.temps && r.temps <= 30)) return false; }
        else if (f === FAVORIS) { if (!favoris.has(r.id)) return false; }
        else if (f === PROTEINES) { if (!estProteinee(r)) return false; }
        else if (!(r.tags || []).includes(f)) return false;
      }
      if (mots.length) {
        const texte = norm([
          r.titre, r.categorie, ...(r.tags || []),
          ...(r.ingredients || []).map((i) => i.nom)
        ].join(" "));
        return mots.every((m) => texte.includes(m));
      }
      return true;
    });
    return trier(liste);
  }

  function trier(liste) {
    const l = [...liste];
    if (etat.tri === "proteines") l.sort((a, b) => (b.proteines ?? -1) - (a.proteines ?? -1));
    else if (etat.tri === "temps") l.sort((a, b) => (a.temps ?? 9999) - (b.temps ?? 9999));
    else l.sort((a, b) => a.titre.localeCompare(b.titre, "fr"));
    return l;
  }

  // ---------- Affichage ----------
  function afficherOnglets() {
    const presentes = Object.keys(CATEGORIES).filter((c) => RECETTES.some((r) => r.categorie === c));
    const liste = [TOUTES, ...presentes];
    $("#onglets").innerHTML = liste.map((c) => {
      const nb = c === TOUTES ? RECETTES.length : RECETTES.filter((r) => r.categorie === c).length;
      const emoji = c === TOUTES ? "📚" : CATEGORIES[c].emoji;
      const coul = c === TOUTES ? "var(--toutes)" : couleur(c);
      const texte = c === TOUTES ? "var(--encre)" : "#2B2233";
      return `<button type="button" class="onglet" style="--c:${coul};--t:${texte}" data-cat="${esc(c)}"
        aria-pressed="${etat.cat === c}">${emoji} ${esc(c)}<span class="nb">${nb}</span></button>`;
    }).join("");
    $(".boite").style.setProperty("--c-active", etat.cat === TOUTES ? "var(--toutes)" : couleur(etat.cat));
  }

  function afficherFiltres() {
    const rang = (t) => { const i = ORDRE_TAGS.indexOf(t); return i === -1 ? 99 : i; };
    const tags = [...new Set(RECETTES.flatMap((r) => r.tags || []))]
      .sort((a, b) => rang(a) - rang(b) || a.localeCompare(b, "fr"));
    const puces = [
      ...(RECETTES.some(estProteinee) ? [{ id: PROTEINES, label: "💪 Riche en protéines", classe: "puce-muscle" }] : []),
      { id: FAVORIS, label: "★ Mes favoris" },
      { id: RAPIDE, label: "⏱ Rapide (30 min max)" },
      ...tags.map((t) => ({ id: t, label: EMOJIS_TAGS[t] ? `${EMOJIS_TAGS[t]} ${t}` : t }))
    ];
    $("#filtres").innerHTML = puces.map((p) =>
      `<button type="button" class="puce ${p.classe || ""}" data-filtre="${esc(p.id)}"
        aria-pressed="${etat.filtres.has(p.id)}">${esc(p.label)}</button>`).join("");
  }

  function badgeProteines(r) {
    return aProteines(r)
      ? `<span class="badge-prot${estProteinee(r) ? " fort" : ""}" title="Protéines par portion">💪 ${r.proteines} g</span>`
      : "";
  }

  function carte(r) {
    const fav = favoris.has(r.id);
    return `
      <article class="carte" style="--c:${couleur(r.categorie)}">
        <button type="button" class="carte-ouvrir" data-ouvrir="${esc(r.id)}">
          <div class="carte-emoji" aria-hidden="true">${esc(r.emoji || "🍽️")}</div>
          <div class="carte-corps">
            <h2>${esc(r.titre)}</h2>
            <div class="carte-meta">
              ${badgeProteines(r)}
              ${r.temps ? `<span>⏱ ${duree(r.temps)}</span>` : ""}
              ${r.difficulte ? `<span>${difficulte(r.difficulte)}</span>` : ""}
            </div>
            ${(r.tags || []).length ? `<div class="etiquettes">${r.tags.map((t) => `<span class="etiquette">${esc(t)}</span>`).join("")}</div>` : ""}
          </div>
        </button>
        <button type="button" class="fav" data-fav="${esc(r.id)}" aria-pressed="${fav}"
          aria-label="${fav ? "Retirer des favoris" : "Ajouter aux favoris"}">${fav ? "★" : "☆"}</button>
      </article>`;
  }

  function afficher() {
    const liste = filtrer();
    $("#grille").innerHTML = liste.map(carte).join("");
    $("#vide").hidden = liste.length > 0;
    const n = RECETTES.length;
    const nbProt = RECETTES.filter(estProteinee).length;
    $("#compteur").textContent = `${n} recette${n > 1 ? "s" : ""} dans la boîte` +
      (nbProt ? `, dont ${nbProt} riche${nbProt > 1 ? "s" : ""} en protéines` : "");
  }

  function toutAfficher() { afficherOnglets(); afficherFiltres(); afficher(); }

  // ---------- Fiche recette ----------
  const fiche = $("#fiche");
  let verrouEcran = null;

  function ouvrirFiche(id, majUrl = true) {
    const r = RECETTES.find((x) => x.id === id);
    if (!r) return;
    const base = r.portions || 1;
    let portions = base;

    const nutrition = (aProteines(r) || typeof r.kcal === "number") ? `
      <div class="nutrition">
        ${aProteines(r) ? `<div class="valeur"><strong>${r.proteines} g</strong><span>de protéines par portion</span></div>` : ""}
        ${typeof r.kcal === "number" ? `<div class="valeur"><strong>≈ ${r.kcal}</strong><span>kcal par portion</span></div>` : ""}
      </div>
      <p class="aide">Valeurs estimées à partir de tables nutritionnelles, à titre indicatif.</p>` : "";

    fiche.innerHTML = `
      <div class="fiche-haut" style="--c:${couleur(r.categorie)}">
        <button type="button" class="fermer" data-fermer aria-label="Fermer">✕</button>
        <div class="emoji" aria-hidden="true">${esc(r.emoji || "🍽️")}</div>
        <h2 id="fiche-titre">${esc(r.titre)}</h2>
        <div class="carte-meta">
          <span>${esc(r.categorie || "")}</span>
          ${r.temps ? `<span>⏱ ${duree(r.temps)}</span>` : ""}
          ${r.difficulte ? `<span>${difficulte(r.difficulte)}</span>` : ""}
        </div>
        ${(r.tags || []).length ? `<div class="etiquettes">${r.tags.map((t) => `<span class="etiquette">${esc(t)}</span>`).join("")}</div>` : ""}
      </div>
      <div class="fiche-corps">
        ${nutrition}

        <h3>Ingrédients</h3>
        <div class="portions">
          <button type="button" data-portion="-1" aria-label="Moins de portions">−</button>
          <output id="nb-portions"></output>
          <button type="button" data-portion="1" aria-label="Plus de portions">+</button>
        </div>
        <p class="aide">Coche au fur et à mesure que tu sors les ingrédients.</p>
        <ul class="ingredients" id="liste-ing"></ul>

        <div class="actions-fiche">
          <button type="button" class="bouton" id="copier-courses">🛒 Copier la liste de courses</button>
          <button type="button" class="bouton" id="partager">🔗 Partager la recette</button>
        </div>

        <h3>Préparation</h3>
        <ol class="etapes">${(r.etapes || []).map((e) => `<li tabindex="0">${esc(e)}</li>`).join("")}</ol>
        <p class="aide">Touche une étape pour la barrer quand elle est faite.</p>

        ${r.astuce ? `<div class="astuce"><strong>Astuce :</strong> ${esc(r.astuce)}</div>` : ""}

        ${"wakeLock" in navigator ? `<label class="ecran"><input type="checkbox" id="garder-ecran"> Garder l'écran allumé pendant que je cuisine</label>` : ""}
      </div>`;

    const majPortions = () => {
      fiche.querySelector("#nb-portions").textContent = `${portions} portion${portions > 1 ? "s" : ""}`;
      fiche.querySelector("#liste-ing").innerHTML = (r.ingredients || []).map((ing, i) =>
        `<li><label><input type="checkbox" data-ing="${i}"><span>${esc(ligneIngredient(ing, portions, base))}</span></label></li>`
      ).join("");
    };
    majPortions();

    fiche.querySelectorAll("[data-portion]").forEach((b) => b.addEventListener("click", () => {
      portions = Math.max(1, Math.min(30, portions + Number(b.dataset.portion)));
      majPortions();
    }));

    fiche.querySelectorAll(".etapes li").forEach((li) => {
      const basculer = () => li.classList.toggle("faite");
      li.addEventListener("click", basculer);
      li.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); basculer(); } });
    });

    const boutonCourses = fiche.querySelector("#copier-courses");
    boutonCourses.addEventListener("click", async () => {
      const texte = `${r.titre} (${portions} portion${portions > 1 ? "s" : ""})\n` +
        (r.ingredients || []).map((i) => "- " + ligneIngredient(i, portions, base)).join("\n");
      confirmer(boutonCourses, await copier(texte), "✓ Liste copiée");
    });

    const boutonPartager = fiche.querySelector("#partager");
    boutonPartager.addEventListener("click", async () => {
      const url = location.origin + location.pathname + "#" + encodeURIComponent(r.id);
      if (navigator.share) {
        try { await navigator.share({ title: r.titre, url }); } catch {}
        return;
      }
      confirmer(boutonPartager, await copier(url), "✓ Lien copié");
    });

    const caseEcran = fiche.querySelector("#garder-ecran");
    if (caseEcran) caseEcran.addEventListener("change", async () => {
      try {
        if (caseEcran.checked) verrouEcran = await navigator.wakeLock.request("screen");
        else if (verrouEcran) { await verrouEcran.release(); verrouEcran = null; }
      } catch { caseEcran.checked = false; }
    });

    if (!fiche.open) fiche.showModal();
    fiche.scrollTop = 0;
    if (majUrl) history.replaceState(null, "", `#${encodeURIComponent(r.id)}`);
  }

  fiche.addEventListener("close", () => {
    if (verrouEcran) { verrouEcran.release().catch(() => {}); verrouEcran = null; }
    history.replaceState(null, "", location.pathname + location.search);
  });
  fiche.addEventListener("click", (e) => {
    if (e.target === fiche || e.target.closest("[data-fermer]")) fiche.close();
  });

  // ---------- Roulette ----------
  let rouletteEnCours = false;
  function roulette() {
    if (rouletteEnCours) return;
    const filtrees = filtrer();
    const candidates = filtrees.length ? filtrees : RECETTES;
    if (!candidates.length) return;
    const choix = candidates[Math.floor(Math.random() * candidates.length)];
    const boite = $("#roulette"), emoji = $("#roulette-emoji"), titre = $("#roulette-titre");
    const montrer = (r) => { emoji.textContent = r.emoji || "🍽️"; titre.textContent = r.titre; };

    if (reduireMouvement || candidates.length === 1) {
      boite.hidden = false; boite.classList.add("fini"); montrer(choix);
      setTimeout(() => { boite.hidden = true; boite.classList.remove("fini"); ouvrirFiche(choix.id); }, 900);
      return;
    }

    rouletteEnCours = true;
    boite.hidden = false;
    boite.classList.remove("fini");
    let tours = 0;
    const total = 14;
    const tourner = () => {
      tours++;
      if (tours < total) {
        montrer(candidates[Math.floor(Math.random() * candidates.length)]);
        setTimeout(tourner, 60 + tours * tours * 2.2); // ralentit peu à peu
      } else {
        montrer(choix);
        boite.classList.add("fini");
        setTimeout(() => {
          boite.hidden = true;
          boite.classList.remove("fini");
          rouletteEnCours = false;
          ouvrirFiche(choix.id);
        }, 1100);
      }
    };
    tourner();
  }

  // ---------- Formulaire d'ajout ----------
  const ajout = $("#ajout");
  const UNITES = ["c. à soupe", "c. à café", "c.à.s", "c.à.c", "cs", "cc", "kg", "g", "mg", "ml", "cl", "dl", "l",
    "pincées", "pincée", "boîtes", "boîte", "gousses", "gousse", "tranches", "tranche", "sachets", "sachet",
    "pots", "pot", "verres", "verre", "poignées", "poignée", "feuilles", "feuille", "bouquets", "bouquet",
    "tasses", "tasse"].sort((a, b) => b.length - a.length);
  const FRACTIONS = { "½": 0.5, "¼": 0.25, "¾": 0.75, "⅓": 1 / 3, "⅔": 2 / 3 };

  function lireIngredient(ligne) {
    const s = ligne.trim().replace(/^[-•*]\s*/, "");
    if (!s) return null;
    const m = s.match(/^(\d+\s*\/\s*\d+|\d+(?:[.,]\d+)?|[½¼¾⅓⅔])\s*(.*)$/);
    if (!m) return { qte: "", unite: "", nom: s };
    let qte;
    if (FRACTIONS[m[1]]) qte = FRACTIONS[m[1]];
    else if (m[1].includes("/")) { const [a, b] = m[1].split("/").map(Number); qte = b ? a / b : a; }
    else qte = parseFloat(m[1].replace(",", "."));
    qte = Math.round(qte * 100) / 100;
    let reste = m[2].trim();
    const bas = reste.toLowerCase();
    const unite = UNITES.find((u) => bas === u || bas.startsWith(u + " "));
    let u = "";
    if (unite) { u = reste.slice(0, unite.length); reste = reste.slice(unite.length).trim(); }
    reste = reste.replace(/^(de |d'|d’)/i, "").trim();
    return { qte, unite: u, nom: reste || s };
  }

  function idUnique(titre) {
    const base = norm(titre).replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "recette";
    const ids = new Set(RECETTES.map((r) => r.id));
    let id = base, i = 2;
    while (ids.has(id)) id = `${base}-${i++}`;
    return id;
  }

  const nombre = (sel) => {
    const v = parseFloat(String($(sel).value).replace(",", "."));
    return Number.isFinite(v) && v >= 0 ? v : undefined;
  };

  // Même présentation que dans recettes.js, pour que ce soit lisible
  function enCode(r) {
    const J = JSON.stringify;
    const l = ["  {", `    id: ${J(r.id)},`, `    titre: ${J(r.titre)},`, `    emoji: ${J(r.emoji)},`,
      `    categorie: ${J(r.categorie)},`, `    tags: [${r.tags.map((t) => J(t)).join(", ")}],`];
    for (const k of ["temps", "difficulte", "portions", "proteines", "kcal"]) {
      if (r[k] !== undefined) l.push(`    ${k}: ${r[k]},`);
    }
    l.push("    ingredients: [",
      r.ingredients.map((i) => `      { qte: ${J(i.qte)}, unite: ${J(i.unite)}, nom: ${J(i.nom)} }`).join(",\n"),
      "    ],",
      "    etapes: [",
      r.etapes.map((e) => `      ${J(e)}`).join(",\n"),
      r.astuce ? "    ]," : "    ]");
    if (r.astuce) l.push(`    astuce: ${J(r.astuce)}`);
    l.push("  },");
    return l.join("\n");
  }

  function genererCode() {
    const erreur = $("#f-erreur");
    const titre = $("#f-titre").value.trim();
    const ingredients = $("#f-ingredients").value.split("\n").map(lireIngredient).filter(Boolean);
    const etapes = $("#f-etapes").value.split("\n")
      .map((s) => s.replace(/^\s*\d+\s*[.)-]\s*/, "").trim()).filter(Boolean);

    const manques = [];
    if (!titre) manques.push("le nom de la recette");
    if (!ingredients.length) manques.push("au moins un ingrédient");
    if (!etapes.length) manques.push("au moins une étape");
    if (manques.length) {
      erreur.textContent = `Il manque ${manques.join(", ")}.`;
      erreur.hidden = false;
      $("#f-resultat").hidden = true;
      return;
    }
    erreur.hidden = true;

    const tags = [...document.querySelectorAll(".f-tag:checked")].map((c) => c.value)
      .concat($("#f-tags").value.split(",").map((t) => t.trim().toLowerCase()).filter(Boolean));

    const recette = {
      id: idUnique(titre),
      titre,
      emoji: $("#f-emoji").value.trim() || "🍽️",
      categorie: $("#f-categorie").value,
      tags: [...new Set(tags)]
    };
    const temps = nombre("#f-temps");
    if (temps) recette.temps = Math.round(temps);
    recette.difficulte = Number($("#f-difficulte").value);
    recette.portions = Math.max(1, Math.round(nombre("#f-portions") || 1));
    const prot = nombre("#f-proteines");
    if (prot !== undefined) recette.proteines = Math.round(prot);
    const kcal = nombre("#f-kcal");
    if (kcal !== undefined) recette.kcal = Math.round(kcal);
    recette.ingredients = ingredients;
    recette.etapes = etapes;
    const astuce = $("#f-astuce").value.trim();
    if (astuce) recette.astuce = astuce;

    const code = enCode(recette);
    $("#f-code").textContent = code;
    $("#f-resultat").hidden = false;
    $("#f-resultat").scrollIntoView({ behavior: reduireMouvement ? "auto" : "smooth", block: "start" });
  }

  $("#f-categorie").innerHTML = Object.keys(CATEGORIES)
    .map((c) => `<option value="${esc(c)}"${c === "Plat" ? " selected" : ""}>${CATEGORIES[c].emoji} ${esc(c)}</option>`).join("");
  $("#f-github").href = `https://github.com/${DEPOT}/edit/main/recettes.js`;
  $("#f-generer").addEventListener("click", genererCode);
  $("#f-copier").addEventListener("click", async (e) => {
    confirmer(e.currentTarget, await copier($("#f-code").textContent), "✓ Code copié");
  });
  $("#ouvrir-ajout").addEventListener("click", () => { ajout.showModal(); ajout.scrollTop = 0; });
  ajout.addEventListener("click", (e) => {
    if (e.target === ajout || e.target.closest("[data-fermer-ajout]")) ajout.close();
  });

  // ---------- Événements ----------
  $("#onglets").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]");
    if (!b) return;
    etat.cat = b.dataset.cat;
    afficherOnglets(); afficher();
  });

  $("#filtres").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filtre]");
    if (!b) return;
    const f = b.dataset.filtre;
    etat.filtres.has(f) ? etat.filtres.delete(f) : etat.filtres.add(f);
    afficherFiltres(); afficher();
  });

  $("#tri").addEventListener("change", (e) => { etat.tri = e.target.value; afficher(); });

  $("#grille").addEventListener("click", (e) => {
    const fav = e.target.closest("[data-fav]");
    if (fav) {
      const id = fav.dataset.fav;
      favoris.has(id) ? favoris.delete(id) : favoris.add(id);
      sauverFavoris(); afficher();
      return;
    }
    const ouvrir = e.target.closest("[data-ouvrir]");
    if (ouvrir) ouvrirFiche(ouvrir.dataset.ouvrir);
  });

  $("#q").addEventListener("input", (e) => { etat.q = e.target.value; afficher(); });
  $("#hasard").addEventListener("click", roulette);
  $("#reinit").addEventListener("click", () => {
    etat.cat = TOUTES; etat.filtres.clear(); etat.q = ""; $("#q").value = "";
    toutAfficher();
  });

  // ---------- Démarrage ----------
  toutAfficher();
  // Un lien du type monsite/#mousse-chocolat ouvre directement la recette
  if (location.hash.length > 1) ouvrirFiche(decodeURIComponent(location.hash.slice(1)), false);
})();

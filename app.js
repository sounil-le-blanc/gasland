// ==========================================
// 1. CATALOGUE ENRICHI DES RÈGLES GASLANDS
// ==========================================
const GASLANDS_DATA = {
  sponsors: [
    { id: "none", name: "Aucun Sponsor (Alignement Libre)", perkClasses: ["Badass", "Speed", "Engineering", "Audace", "Agression", "DurACuire", "Horreur", "Militaire", "Optimisation", "Poursuite", "Precision", "Technologie"] },
    { id: "rustys", name: "Rusty's Bootleggers", perkClasses: ["Badass", "Engineering"] },
    { id: "rutherford", name: "Anatolia Rutherford", perkClasses: ["DurACuire", "Militaire"] },
    { id: "miyazaki", name: "Miyazaki", perkClasses: ["Audace", "Precision"] },
    { id: "mishkin", name: "Mishkin", perkClasses: ["Militaire", "Technologie"] },
    { id: "idris", name: "Idris", perkClasses: ["Precision", "Speed"] },
    { id: "slime", name: "Slime", perkClasses: ["Optimisation", "Badass"] },
    { id: "geoliere", name: "La Geôlière (The Warden)", perkClasses: ["Agression", "DurACuire"] },
    { id: "scarlett", name: "Scarlett", perkClasses: ["Optimisation", "Agression"] },
    { id: "patrouille", name: "Patrouille de l'Autoroute", perkClasses: ["Speed", "Poursuite"] },
    { id: "verney", name: "Arthur Verney", perkClasses: ["Technologie", "Engineering"] },
    { id: "maxxine", name: "Maxxine", perkClasses: ["Optimisation", "Poursuite"] },
    { id: "ordre_infernal", name: "L'Ordre Infernal", perkClasses: ["Horreur", "Speed"] },
    { id: "beverly", name: "Beverly", perkClasses: ["Horreur", "Engineering"] }
  ],
  vehicles: {
    bike: { name: "Moto", baseCost: 5, hull: 4, slots: 1 },
    buggy: { name: "Buggy", baseCost: 6, hull: 6, slots: 2 },
    car: { name: "Voiture Standard", baseCost: 15, hull: 10, slots: 2 },
    "perf-car": { name: "Voiture de Course (Performance Car)", baseCost: 15, hull: 8, slots: 1 },
    truck: { name: "Camionette / Pick-up", baseCost: 15, hull: 12, slots: 3 },
    "monster-truck": { name: "Monster Truck", baseCost: 25, hull: 12, slots: 2 },
    "heavy-truck": { name: "Poids Lourd", baseCost: 25, hull: 14, slots: 5 },
    bus: { name: "Bus de ligne", baseCost: 30, hull: 16, slots: 3 }
  },
  // 💥 TOUTES LES ARMES EXTRAITES DE TES PAGES (ea696d1c-2325-4fe7-81c9-0dd162f0da83 & 184ce3ee-f889-49dc-8b04-13b5cf731dfb)
  weapons: [
    { id: "none", name: "Aucune arme additionnelle", cost: 0, slots: 0 },
    { id: "auto_tourelle", name: "Auto-Tourelle", cost: 3, slots: 0 },
    { id: "bfg", name: "BFG", cost: 4, slots: 3 },
    { id: "bras_mecanique", name: "Bras Mécanique", cost: 6, slots: 1 },
    { id: "brouilleur_em", name: "Brouilleur Électromagnétique", cost: 2, slots: 0 },
    { id: "bombes_teleguidees", name: "Bombes Téléguidées", cost: 3, slots: 0 },
    { id: "boule_demolition", name: "Boule de démolition", cost: 2, slots: 3 },
    { id: "canon_arc", name: "Canon à Arc Électrique", cost: 6, slots: 2 },
    { id: "canon_125", name: "Canon de 125 mm", cost: 6, slots: 3 },
    { id: "canon_gravitationnel", name: "Canon Gravitationnel", cost: 4, slots: 1 },
    { id: "canon_laser", name: "Canon Laser", cost: 5, slots: 1 },
    { id: "cocktails_molotov", name: "Cocktails Molotov", cost: 1, slots: 0 },
    { id: "filet_metallique", name: "Filet Métallique", cost: 1, slots: 0 },
    { id: "fusil_pompe", name: "Fusil à Pompe", cost: 0, slots: 0 },
    { id: "grenades", name: "Grenades", cost: 1, slots: 0 },
    { id: "grenades_lacrymo", name: "Grenades Lacrymogènes", cost: 1, slots: 0 },
    { id: "lance_carcasse", name: "Lance-Carcasse", cost: 4, slots: 4 },
    { id: "flamethrower", name: "Lance-Flammes", cost: 4, slots: 2 },
    { id: "lance_missiles", name: "Lance-missiles", cost: 5, slots: 2 },
    { id: "rockets", name: "Lance-Roquettes", cost: 4, slots: 2 },
    { id: "largueur_chausse_trapes", name: "Largueur de Chausse-Trapes", cost: 1, slots: 1 },
    { id: "largueur_colle", name: "Largueur de Colle", cost: 1, slots: 1 },
    { id: "largueur_fumigenes", name: "Largueur de Fumigènes", cost: 1, slots: 0 },
    { id: "largueur_huile", name: "Largueur d'Huile", cost: 2, slots: 0 },
    { id: "largueur_mines", name: "Largueur de Mines", cost: 1, slots: 1 },
    { id: "largueur_napalm", name: "Largueur de Napalm", cost: 1, slots: 1 },
    { id: "harpon", name: "Harpon", cost: 2, slots: 1 },
    { id: "magnum", name: "Magnum", cost: 1, slots: 0 },
    { id: "marteleur", name: "Marteleur (Mishkin)", cost: 4, slots: 2 },
    { id: "mini_gun", name: "Minigun", cost: 5, slots: 1 },
    { id: "machine_gun", name: "Mitrailleuse", cost: 2, slots: 1 },
    { id: "heavy_machine_gun", name: "Mitrailleuse Lourde", cost: 3, slots: 1 },
    { id: "mortar", name: "Mortier", cost: 4, slots: 1 },
    { id: "mur_haut_parleurs", name: "Mur de haut-parleurs", cost: 4, slots: 3 },
    { id: "pistolet", name: "Pistolet", cost: 0, slots: 0 },
    { id: "pistolet_mitrailleur", name: "Pistolet Mitralleur", cost: 5, slots: 0 },
    { id: "rayon_desintegrateur", name: "Rayon Désintégrateur", cost: 3, slots: 1 },
    { id: "super_ampli_cinetique", name: "Super Amplificateur Cinétique (Mishkin)", cost: 6, slots: 2 },
    { id: "tromblon", name: "Tromblon", cost: 2, slots: 0 }
  ],
  // 🔧 TOUTES LES AMÉLIORATIONS EXTRAITES DE TA PAGE (184ce3ee-f889-49dc-8b04-13b5cf731dfb)
  upgrades: [
    { id: "none", name: "Aucune amélioration matérielle", cost: 0 },
    { id: "arceaux", name: "Arceaux", cost: 4 },
    { id: "belier", name: "Bélier", cost: 4 },
    { id: "belier_explosif", name: "Bélier Explosif", cost: 3 },
    { id: "armor_plating", name: "Blindage (+2 Coque)", cost: 4 },
    { id: "catapulte_improvisee", name: "Catapulte Improvisée", cost: 2 },
    { id: "chenilles", name: "Chenilles", cost: 4 },
    { id: "equipage_supp", name: "Membre d'Équipage Supplémentaire", cost: 4 },
    { id: "nitro", name: "Nitro", cost: 6 },
    { id: "reacteur_nucleaire", name: "Réacteur Nucléaire Expérimental (Mishkin)", cost: 5 },
    { id: "teleporteur", name: "Téléporteur Expérimental (Mishkin)", cost: 7 }
  ],
  trailers: [
    { id: "none", name: "Aucune remorque", cost: 0, extraSlots: 0 },
    { id: "trailer_light", name: "Remorque (Poids Léger)", cost: 4, extraSlots: 0 },
    { id: "trailer_medium", name: "Remorque (Poids Moyen)", cost: 8, extraSlots: 1 },
    { id: "trailer_heavy", name: "Remorque (Poids Lourd)", cost: 12, extraSlots: 3 }
  ],
  cargoUpgrades: [
    { id: "none", name: "Aucune amélioration de transport", cost: 0 },
    { id: "tord_boyaux", name: "Tord-boyaux de Pêche", cost: 0 },
    { id: "turbo_tonneau", name: "Turbo de Fond de Tonneau", cost: 0 },
    { id: "pompe_syphon", name: "Pompe à Syphon", cost: 0 },
    { id: "liqueur_mais", name: "Liqueur de Maïs à l'Ancienne", cost: 0 },
    { id: "marteau_bovins", name: "Marteau à Bovins", cost: 0 }
  ],
  perks: [
    { id: "poids_mort", name: "Poids Mort", cost: 2, class: "Engineering" },
    { id: "expert_tonneaux", name: "Expert en Tonneaux", cost: 2, class: "Engineering" },
    { id: "cogneur", name: "Cogneur", cost: 4, class: "Engineering" },
    { id: "retour_de_flamme", name: "Retour de Flamme", cost: 5, class: "Engineering" },
    { id: "concasseur", name: "Concasseur", cost: 7, class: "Engineering" },
    { id: "meme_pas_mal", name: "Même pas Mal !", cost: 8, class: "Engineering" },
    { id: "depart_eclair", name: "Départ Éclair", cost: 1, class: "Speed" },
    { id: "sillage", name: "Sillage", cost: 2, class: "Speed" },
    { id: "surcharge", name: "Surcharge", cost: 2, class: "Speed" },
    { id: "retrograder", name: "Rétrograder", cost: 3, class: "Speed" },
    { id: "temps_additionnel", name: "Temps Additionnel !", cost: 3, class: "Speed" },
    { id: "a_fond_la_caisse", name: "À Fond la Caisse", cost: 5, class: "Speed" },
    { id: "rage_au_volant", name: "Rage au Volant", cost: 1, class: "Badass" },
    { id: "frenesie", name: "Frénésie", cost: 2, class: "Badass" },
    { id: "foutu_pour_foutu", name: "Foutu pour Foutu", cost: 2, class: "Badass" },
    { id: "intouchable", name: "Intouchable", cost: 4, class: "Badass" },
    { id: "plus_balaise_que_toi", name: "Plus Balaise que Toi", cost: 4, class: "Badass" },
    { id: "biereserker", name: "Bièreserker", cost: 5, class: "Badass" },
    { id: "mister_fahrenheit", name: "Mister Fahrenheit", cost: 2, class: "Precision" },
    { id: "heure_de_gloire", name: "Heure de Gloire", cost: 2, class: "Precision" },
    { id: "prudence", name: "Prudence", cost: 2, class: "Precision" },
    { id: "expertise", name: "Expertise", cost: 3, class: "Precision" },
    { id: "art_de_la_route", name: "Art de la Route", cost: 3, class: "Precision" },
    { id: "pilote_ne", name: "Pilote-Né", cost: 5, class: "Precision" },
    { id: "symbiose", name: "Symbiose", cost: 2, class: "Audace" },
    { id: "insaisissable", name: "Insaisissable", cost: 3, class: "Audace" },
    { id: "as_du_frein_a_main", name: "As du Frein à Main", cost: 3, class: "Audace" },
    { id: "feinte", name: "Feinte", cost: 5, class: "Audace" },
    { id: "derapage_controle", name: "Dérapage Contrôlé", cost: 5, class: "Audace" },
    { id: "cascadeur", name: "Cascadeur", cost: 7, class: "Audace" },
    { id: "double_canon", name: "Double Canon", cost: 2, class: "Agression" },
    { id: "abordage", name: "Abordage", cost: 2, class: "Agression" },
    { id: "marteau_de_guerre", name: "Marteau de Guerre", cost: 4, class: "Agression" },
    { id: "psychopathe", name: "Psychopathe", cost: 5, class: "Agression" },
    { id: "broyeur", name: "Broyeur", cost: 5, class: "Agression" },
    { id: "engin_de_la_mort", name: "Engin de la Mort", cost: 5, class: "Agression" },
    { id: "baril_de_poudre", name: "Baril de Poudre", cost: 1, class: "DurACuire" },
    { id: "sens_du_spectacle", name: "Sens du Spectacle", cost: 1, class: "DurACuire" },
    { id: "guerrier_de_la_route", name: "Guerrier de la Route", cost: 2, class: "DurACuire" },
    { id: "couvrez_moi", name: "Couvrez-Moi !", cost: 2, class: "DurACuire" },
    { id: "fou_furieux", name: "Fou Furieux", cost: 3, class: "DurACuire" },
    { id: "pluie_de_balles", name: "Pluie de Balles", cost: 3, class: "DurACuire" },
    { id: "flammes_purificatrices", name: "Flammes Purificatrices", cost: 1, class: "Horreur" },
    { id: "visions_extatiques", name: "Visions Extatiques", cost: 1, class: "Horreur" },
    { id: "pacte_avec_le_diable", name: "Pacte avec le Diable", cost: 1, class: "Horreur" },
    { id: "autoroute_vers_lenfer", name: "Autoroute vers l'Enfer", cost: 2, class: "Horreur" },
    { id: "manifestation_diabolique", name: "Manifestation Diabolique", cost: 3, class: "Horreur" },
    { id: "ange_de_la_mort", name: "Ange de la Mort", cost: 4, class: "Horreur" },
    { id: "tireur_delite", name: "Tireur d'Élite", cost: 2, class: "Militaire" },
    { id: "servant_dartillerie", name: "Servant d'Artillerie", cost: 2, class: "Militaire" },
    { id: "charge_a_bloc", name: "Chargé à Bloc", cost: 2, class: "Militaire" },
    { id: "tirs_rapides", name: "Tirs Rapides", cost: 2, class: "Militaire" },
    { id: "tir_a_la_tete", name: "Tir à la Tête", cost: 4, class: "Militaire" },
    { id: "riposte", name: "Riposte", cost: 5, class: "Militaire" },
    { id: "fenderkiss", name: "Fenderkiss", cost: 2, class: "Optimisation" },
    { id: "propulsion", name: "Propulsion", cost: 2, class: "Optimisation" },
    { id: "doigte", name: "Doigté", cost: 3, class: "Optimisation" },
    { id: "momentum", name: "Momentum", cost: 3, class: "Optimisation" },
    { id: "ronronnement", name: "Ronronnement", cost: 6, class: "Optimisation" },
    { id: "sur_deux_roues", name: "Sur Deux Roues", cost: 6, class: "Optimisation" },
    { id: "a_tes_trousses", name: "À Tes Trousses", cost: 2, class: "Poursuite" },
    { id: "le_malheur_des_uns", name: "Le Malheur des Uns...", cost: 2, class: "Poursuite" },
    { id: "provocation", name: "Provocation", cost: 2, class: "Poursuite" },
    { id: "distancer", name: "Distancer", cost: 2, class: "Poursuite" },
    { id: "tip", name: "Tip", cost: 4, class: "Poursuite" },
    { id: "regard_destabilisant", name: "Regard Déstabilisant", cost: 5, class: "Poursuite" },
    { id: "moteurs_fusee", name: "Moteurs-Fusée", cost: 1, class: "Technologie" },
    { id: "survolte", name: "Survolté", cost: 1, class: "Technologie" },
    { id: "gyroscope", name: "Gyroscope", cost: 1, class: "Technologie" },
    { id: "navigation_satellite", name: "Navigation Satellite", cost: 2, class: "Technologie" },
    { id: "mecano_de_bord", name: "Mécano de Bord", cost: 3, class: "Technologie" },
    { id: "eureka", name: "Eurêka !", cost: 4, class: "Technologie" }
  ]
};

// ==========================================
// 2. CONFIGURATION SUPABASE
// ==========================================
const SUPABASE_URL = "https://vwfzzybjjlrashioovrk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_CVxOH_z-iZs-hmc2O6NBEw_faZRGkNI";

if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let crew = [];
let currentUser = null;

document.addEventListener("DOMContentLoaded", async () => {
  populateFormOptions();

  if (window.supabase && window.supabase.auth) {
    const { data: { session } } = await window.supabase.auth.getSession();
    if (session) {
      currentUser = session.user;
      updateAuthUI();
      await loadCrewFromSupabase();
    }
  } else {
    const localData = localStorage.getItem("gaslands_advanced_crew");
    if (localData) crew = JSON.parse(localData);
  }
  renderCrew();
});

function populateFormOptions() {
  const sSelect = document.getElementById("sponsor-select");
  const vSelect = document.getElementById("vehicle-type");
  const wSelect = document.getElementById("weapon-select");
  const uSelect = document.getElementById("upgrade-select");
  const tSelect = document.getElementById("trailer-select");
  const cSelect = document.getElementById("cargo-select");

  if (sSelect) {
    sSelect.innerHTML = GASLANDS_DATA.sponsors.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
  }
  if (vSelect) {
    vSelect.innerHTML = Object.entries(GASLANDS_DATA.vehicles).map(([key, v]) => `<option value="${key}">${v.name} (${v.baseCost} Cans — Slots: ${v.slots})</option>`).join("");
  }
  if (wSelect) {
    wSelect.innerHTML = GASLANDS_DATA.weapons.map(w => `<option value="${w.id}">${w.name} [${w.slots} Slot${w.slots > 1 ? 's' : ''}] ${w.cost > 0 ? `(+${w.cost} Cans)` : ''}</option>`).join("");
    wSelect.addEventListener("change", handleWeaponChange);
  }

  const wfSelect = document.getElementById("weapon-facing");
  if (wfSelect) {
    wfSelect.addEventListener("change", updateLiveWeaponCosts);
  }

  if (uSelect) {
    uSelect.innerHTML = GASLANDS_DATA.upgrades.map(u => `<option value="${u.id}">${u.name} ${u.cost > 0 ? `(+${u.cost} Cans)` : ''}</option>`).join("");
  }
  if (tSelect) {
    tSelect.innerHTML = GASLANDS_DATA.trailers.map(t => `<option value="${t.id}">${t.name} ${t.cost > 0 ? `(+${t.cost} Cans)` : ''}</option>`).join("");
  }
  if (cSelect) {
    cSelect.innerHTML = GASLANDS_DATA.cargoUpgrades.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  }

  handleSponsorChange();
  handleTrailerChange();
  handleWeaponChange();
}

function handleWeaponChange() {
  const weaponId = document.getElementById("weapon-select").value;
  const wfSelect = document.getElementById("weapon-facing");

  if (!wfSelect) return;

  if (weaponId === "none") {
    wfSelect.value = "Avant";
    wfSelect.disabled = true;
  } else {
    wfSelect.disabled = false;
  }

  updateLiveWeaponCosts();
}

function updateLiveWeaponCosts() {
  const weaponId = document.getElementById("weapon-select").value;
  const wfSelect = document.getElementById("weapon-facing");

  if (!wfSelect) return;

  const weapon = GASLANDS_DATA.weapons.find(w => w.id === weaponId);
  const currentWeaponCost = weapon ? weapon.cost : 0;

  const turretOption = wfSelect.querySelector('option[value*="Tourelle"]');
  if (turretOption) {
    if (weaponId !== "none" && currentWeaponCost > 0) {
      turretOption.textContent = `Tourelle (Turret — Vrai coût : +${currentWeaponCost * 3} Cans)`;
    } else {
      turretOption.textContent = "Tourelle (Turret — Multiplie le coût x3)";
    }
  }
}

function handleTrailerChange() {
  const trailerId = document.getElementById("trailer-select").value;
  const cargoZone = document.getElementById("cargo-upgrade-zone");
  if (cargoZone) {
    if (trailerId === "none") {
      cargoZone.classList.add("hidden");
      document.getElementById("cargo-select").value = "none";
    } else {
      cargoZone.classList.remove("hidden");
    }
  }
}

function handleSponsorChange() {
  const sponsorId = document.getElementById("sponsor-select").value;
  const container = document.getElementById("perk-checkboxes-container");
  const trailerZone = document.getElementById("trailer-zone");

  if (!container) return;

  const selectedSponsor = GASLANDS_DATA.sponsors.find(s => s.id === sponsorId);

  if (trailerZone) {
    if (sponsorId === "rustys" || sponsorId === "none") {
      trailerZone.classList.remove("hidden");
    } else {
      trailerZone.classList.add("hidden");
      document.getElementById("trailer-select").value = "none";
      handleTrailerChange();
    }
  }

  const allowedPerks = GASLANDS_DATA.perks.filter(perk => selectedSponsor.perkClasses.includes(perk.class));

  if (allowedPerks.length === 0) {
    container.innerHTML = `<p class="text-xs text-zinc-600 italic">Aucun avantage pour ce sponsor.</p>`;
    return;
  }

  container.innerHTML = allowedPerks.map(p => `
    <label class="flex items-center gap-2.5 cursor-pointer hover:text-amber-400 transition py-0.5">
      <input type="checkbox" name="perk-checkbox" value="${p.id}" class="accent-amber-500 w-4 h-4 cursor-pointer">
      <span>${p.name} <span class="text-[10px] text-zinc-500">[${p.class}]</span> <span class="text-amber-500 font-bold text-xs">(+${p.cost})</span></span>
    </label>
  `).join("");
}

function handleChassisChange() { }

function addVehicleToCrew() {
  const chassisKey = document.getElementById("vehicle-type").value;
  const customName = document.getElementById("vehicle-name").value.trim();
  const weaponId = document.getElementById("weapon-select").value;
  const weaponFacing = document.getElementById("weapon-facing").value;
  const upgradeId = document.getElementById("upgrade-select").value;
  const trailerId = document.getElementById("trailer-select").value;
  const cargoId = document.getElementById("cargo-select").value;

  const chassis = GASLANDS_DATA.vehicles[chassisKey];
  const weapon = GASLANDS_DATA.weapons.find(w => w.id === weaponId);
  const upgrade = GASLANDS_DATA.upgrades.find(u => u.id === upgradeId);
  const trailer = GASLANDS_DATA.trailers.find(t => t.id === trailerId);
  const cargo = GASLANDS_DATA.cargoUpgrades.find(c => c.id === cargoId);

  let finalWeaponCost = weapon.cost;
  if (weaponId !== "none" && weaponFacing.includes("Tourelle")) {
    finalWeaponCost = weapon.cost * 3;
  }

  const checkboxes = document.querySelectorAll('input[name="perk-checkbox"]:checked');
  let totalPerksCost = 0;
  let selectedPerksNames = [];

  checkboxes.forEach(cb => {
    const perkObj = GASLANDS_DATA.perks.find(p => p.id === cb.value);
    if (perkObj) {
      totalPerksCost += perkObj.cost;
      selectedPerksNames.push(perkObj.name);
    }
  });

  const totalVehicleCost = chassis.baseCost + finalWeaponCost + upgrade.cost + totalPerksCost + trailer.cost + cargo.cost;
  const finalName = customName || `${chassis.name} de Combat`;

  const slotsUsed = weapon.slots;
  const maxSlotsAvailable = chassis.slots + trailer.extraSlots;
  const slotsExceeded = slotsUsed > maxSlotsAvailable;

  const newVehicle = {
    id: crypto.randomUUID(),
    name: finalName,
    chassisName: chassis.name,
    hull: upgradeId === "armor_plating" ? chassis.hull + 2 : chassis.hull,
    maxSlots: maxSlotsAvailable,
    slotsUsed: slotsUsed,
    weaponName: weaponId !== "none" ? `${weapon.name} (${weaponFacing.split(" ")[0]})` : "Aucune",
    upgradeName: upgradeId !== "none" ? upgrade.name : "Aucune",
    perkName: selectedPerksNames.length > 0 ? selectedPerksNames.join(", ") : "Aucun",
    trailerName: trailerId !== "none" ? trailer.name : "Aucune",
    cargoName: cargoId !== "none" ? cargo.name : "Aucune",
    cost: totalVehicleCost,
    invalid: slotsExceeded
  };

  crew.push(newVehicle);
  saveData();
  renderCrew();

  document.getElementById("vehicle-name").value = "";
  document.getElementById("trailer-select").value = "none";
  checkboxes.forEach(cb => cb.checked = false);
  handleTrailerChange();
  handleWeaponChange();
}

function removeVehicle(id) {
  crew = crew.filter(v => v.id !== id);
  saveData();
  renderCrew();
}

function clearRoster() {
  if (confirm("Vider entièrement le garage ?")) {
    crew = [];
    saveData();
    renderCrew();
  }
}

function renderCrew() {
  const container = document.getElementById("crew-list");
  const totalCansEl = document.getElementById("total-cans");

  if (!container || !totalCansEl) return;

  if (crew.length === 0) {
    container.innerHTML = `<p class="text-zinc-600 text-sm italic text-center py-12">Aucun véhicule blindé dans le garage pour le moment...</p>`;
    totalCansEl.textContent = "0";
    totalCansEl.className = "text-5xl font-black text-amber-500 font-sans";
    return;
  }

  let totalCans = 0;
  container.innerHTML = crew.map(v => {
    totalCans += v.cost;
    return `
            <div class="bg-zinc-950 border-2 ${v.invalid ? 'border-red-600/60 bg-red-950/10' : 'border-zinc-800'} rounded p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition">
                <div class="flex-grow">
                    <div class="flex items-center gap-2">
                        <h4 class="font-black text-sm uppercase ${v.invalid ? 'text-red-400' : 'text-zinc-100'}">${v.name}</h4>
                        <span class="text-[10px] bg-zinc-900 text-zinc-400 border border-zinc-700 px-1.5 py-0.5 rounded uppercase font-sans">${v.chassisName}</span>
                    </div>
                    
                    <div class="text-zinc-400 text-xs font-sans mt-2 space-y-1">
                        <div>💥 <span class="font-bold text-zinc-500">Armement :</span> ${v.weaponName}</div>
                        <div>🔧 <span class="font-bold text-zinc-500">Matériel :</span> ${v.upgradeName}</div>
                        <div>🔥 <span class="font-bold text-zinc-500">Avantage / Perk :</span> ${v.perkName}</div>
                        ${v.trailerName !== "Aucune" ? `<div>🚛 <span class="font-bold text-zinc-500">Attelage :</span> ${v.trailerName} ${v.cargoName !== "Aucune" ? `[${v.cargoName}]` : ''}</div>` : ''}
                        <div class="${v.invalid ? 'text-red-400 font-bold' : 'text-zinc-500'} text-[11px] pt-1 border-t border-zinc-900/60">
                            Structure Coque : ${v.hull} | Équipement Slots : ${v.slotsUsed} / ${v.maxSlots} ${v.invalid ? '(Attention : Emplacements insuffisants !)' : ''}
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-zinc-800/60 pt-2 sm:pt-0 min-w-[120px]">
                    <span class="text-amber-500 font-black text-base font-sans">${v.cost} Cans</span>
                    <button onclick="removeVehicle('${v.id}')" class="text-zinc-500 hover:text-red-400 font-bold text-xs uppercase cursor-pointer transition">Supprimer</button>
                </div>
            </div>
        `;
  }).join("");

  totalCansEl.textContent = totalCans;

  if (totalCans > 50) {
    totalCansEl.className = "text-5xl font-black text-red-500 font-sans tracking-tight animate-pulse";
  } else {
    totalCansEl.className = "text-5xl font-black text-amber-500 font-sans tracking-tight drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)]";
  }
}

async function saveData() {
  if (window.supabase && currentUser) {
    await window.supabase.from("crews").upsert({ user_id: currentUser.id, data: crew });
  } else {
    localStorage.setItem("gaslands_advanced_crew", JSON.stringify(crew));
  }
}

async function loadCrewFromSupabase() {
  if (!window.supabase || !currentUser) return;
  const { data } = await window.supabase.from("crews").select("data").eq("user_id", currentUser.id).maybeSingle();
  if (data && data.data) crew = data.data;
}

function toggleAuthModal(mode = "signin") {
  const modal = document.getElementById("auth-modal");
  if (!modal) return;
  modal.classList.toggle("hidden");
  if (!modal.classList.contains("hidden")) {
    document.getElementById("auth-mode").value = mode;
    document.getElementById("modal-title").textContent = mode === "signin" ? "⚡ Connexion Pilote" : "🔥 S'inscrire au Championnat";
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  if (!window.supabase) return;
  const mode = document.getElementById("auth-mode").value;
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;

  let response = mode === "signin"
    ? await window.supabase.auth.signInWithPassword({ email, password })
    : await window.supabase.auth.signUp({ email, password });

  if (response.error) {
    alert(`Échec : ${response.error.message}`);
  } else {
    currentUser = response.data.user;
    toggleAuthModal();
    updateAuthUI();
    await loadCrewFromSupabase();
    renderCrew();
  }
}

async function handleLogout() {
  if (window.supabase) await window.supabase.auth.signOut();
  currentUser = null;
  crew = [];
  localStorage.removeItem("gaslands_advanced_crew");
  updateAuthUI();
  renderCrew();
}

function updateAuthUI() {
  const loggedOutZone = document.getElementById("auth-logged-out");
  const loggedInZone = document.getElementById("auth-logged-in");
  const statusText = document.getElementById("crew-status-text");

  if (!loggedOutZone || !loggedInZone || !statusText) return;

  if (currentUser) {
    loggedOutZone.classList.add("hidden");
    loggedInZone.classList.remove("hidden");
    document.getElementById("user-email").textContent = currentUser.email;
    statusText.textContent = "Profil et Gang synchronisés via liaison satellite.";
    statusText.className = "text-emerald-500 text-xs font-sans font-bold";
  } else {
    loggedOutZone.classList.remove("hidden");
    loggedInZone.classList.add("hidden");
    statusText.textContent = "Sauvegarde locale active. Connecte-toi pour sauvegarder sur le Cloud.";
    statusText.className = "text-zinc-500 text-xs font-sans";
  }
}
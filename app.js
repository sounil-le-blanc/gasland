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
    dragster: { name: "Dragster", baseCost: 5, hull: 4, slots: 2 },
    moto: { name: "Moto", baseCost: 5, hull: 4, slots: 1 },
    buggy: { name: "Buggy", baseCost: 6, hull: 6, slots: 2 },
    moto_sidecar: { name: "Moto avec side-car", baseCost: 8, hull: 4, slots: 2 },
    camion_glaces: { name: "Camion à glaces", baseCost: 8, hull: 10, slots: 2 },
    voiture: { name: "Voiture Standard", baseCost: 12, hull: 10, slots: 2 },
    voiture_sport: { name: "Voiture de Course (Performance Car)", baseCost: 15, hull: 8, slots: 2 },
    camion: { name: "Camion", baseCost: 15, hull: 12, slots: 3 },
    gyrocoptere: { name: "Gyrocoptère", baseCost: 10, hull: 4, slots: 0 },
    ambulance: { name: "Ambulance", baseCost: 20, hull: 12, slots: 3 },
    monster_truck: { name: "Monster Truck", baseCost: 25, hull: 10, slots: 2 },
    camion_lourd: { name: "Camion Lourd", baseCost: 25, hull: 14, slots: 5 },
    bus: { name: "Bus", baseCost: 30, hull: 16, slots: 3 },
    helicoptere: { name: "Hélicoptère", baseCost: 30, hull: 8, slots: 4 },
    char_assaut: { name: "Char d'assaut", baseCost: 40, hull: 20, slots: 4 },
    forteresse_mobile: { name: "Forteresse Mobile", baseCost: 40, hull: 26, slots: 5 }
  },
  weapons: [
    { id: "auto_tourelle", name: "Auto-Tourelle", cost: 3, slots: 0, crew: false, mishkinOnly: false },
    { id: "bfg", name: "BFG", cost: 4, slots: 3, crew: false, mishkinOnly: false },
    { id: "bras_mecanique", name: "Bras Mécanique", cost: 6, slots: 1, crew: false, mishkinOnly: false },
    { id: "brouilleur_em", name: "Brouilleur Électromagnétique", cost: 2, slots: 0, crew: false, mishkinOnly: false },
    { id: "bombes_teleguidees", name: "Bombes Téléguidées", cost: 3, slots: 0, crew: false, mishkinOnly: false },
    { id: "boule_demolition", name: "Boule de démolition", cost: 2, slots: 3, crew: false, mishkinOnly: false },
    { id: "canon_arc", name: "Canon à Arc Électrique", cost: 6, slots: 2, crew: false, mishkinOnly: true },
    { id: "canon_125", name: "Canon de 125 mm", cost: 6, slots: 3, crew: false, mishkinOnly: false },
    { id: "canon_gravitationnel", name: "Canon Gravitationnel", cost: 4, slots: 1, crew: false, mishkinOnly: true },
    { id: "canon_laser", name: "Canon Laser", cost: 5, slots: 1, crew: false, mishkinOnly: false },
    { id: "cocktails_molotov", name: "Cocktails Molotov", cost: 1, slots: 0, crew: true, mishkinOnly: false },
    { id: "filet_metallique", name: "Filet Métallique", cost: 1, slots: 0, crew: true, mishkinOnly: false },
    { id: "fusil_pompe", name: "Fusil à Pompe", cost: 0, slots: 0, crew: true, mishkinOnly: false },
    { id: "grenades", name: "Grenades", cost: 1, slots: 0, crew: true, mishkinOnly: false },
    { id: "grenades_lacrymo", name: "Grenades Lacrymogènes", cost: 1, slots: 0, crew: true, mishkinOnly: false },
    { id: "lance_carcasse", name: "Lance-Carcasse", cost: 4, slots: 4, crew: false, mishkinOnly: false },
    { id: "flamethrower", name: "Lance-Flammes", cost: 4, slots: 2, crew: false, mishkinOnly: false },
    { id: "lance_missiles", name: "Lance-missiles", cost: 5, slots: 2, crew: false, mishkinOnly: false },
    { id: "rockets", name: "Lance-Roquettes", cost: 4, slots: 2, crew: false, mishkinOnly: false },
    { id: "largueur_chausse_trapes", name: "Largueur de Chausse-Trapes", cost: 1, slots: 1, crew: false, mishkinOnly: false },
    { id: "largueur_colle", name: "Largueur de Colle", cost: 1, slots: 1, crew: false, mishkinOnly: false },
    { id: "largueur_fumigenes", name: "Largueur de Fumigènes", cost: 1, slots: 0, crew: false, mishkinOnly: false },
    { id: "largueur_huile", name: "Largueur d'Huile", cost: 2, slots: 0, crew: false, mishkinOnly: false },
    { id: "largueur_mines", name: "Largueur de Mines", cost: 1, slots: 1, crew: false, mishkinOnly: false },
    { id: "largueur_napalm", name: "Largueur de Napalm", cost: 1, slots: 1, crew: false, mishkinOnly: false },
    { id: "harpon", name: "Harpon", cost: 2, slots: 1, crew: false, mishkinOnly: false },
    { id: "magnum", name: "Magnum", cost: 1, slots: 0, crew: true, mishkinOnly: false },
    { id: "marteleur", name: "Marteleur (Mishkin)", cost: 4, slots: 2, crew: false, mishkinOnly: true },
    { id: "mini_gun", name: "Minigun", cost: 5, slots: 1, crew: false, mishkinOnly: false },
    { id: "machine_gun", name: "Mitrailleuse", cost: 2, slots: 1, crew: false, mishkinOnly: false },
    { id: "heavy_machine_gun", name: "Mitrailleuse Lourde", cost: 3, slots: 1, crew: false, mishkinOnly: false },
    { id: "mortar", name: "Mortier", cost: 4, slots: 1, crew: false, mishkinOnly: false },
    { id: "mur_haut_parleurs", name: "Mur de haut-parleurs", cost: 4, slots: 3, crew: false, mishkinOnly: false },
    { id: "pistolet", name: "Pistolet", cost: 0, slots: 0, crew: true, mishkinOnly: false },
    { id: "pistolet_mitrailleur", name: "Pistolet Mitralleur", cost: 5, slots: 0, crew: true, mishkinOnly: false },
    { id: "rayon_desintegrateur", name: "Rayon Désintégrateur", cost: 3, slots: 1, crew: false, mishkinOnly: false },
    { id: "super_ampli_cinetique", name: "Super Amplificateur Cinétique (Mishkin)", cost: 6, slots: 2, crew: false, mishkinOnly: true },
    { id: "tromblon", name: "Tromblon", cost: 2, slots: 0, crew: true, mishkinOnly: false }
  ],
  upgrades: [
    { id: "arceaux", name: "Arceaux", cost: 4, slots: 1, directional: false, mishkinOnly: false },
    { id: "belier", name: "Bélier", cost: 4, slots: 1, directional: true, mishkinOnly: false },
    { id: "belier_explosif", name: "Bélier Explosif", cost: 3, slots: 0, directional: true, mishkinOnly: false },
    { id: "armor_plating", name: "Blindage (+2 Coque)", cost: 4, slots: 1, directional: false, mishkinOnly: false },
    { id: "catapulte_improvisee", name: "Catapulte Improvisée", cost: 2, slots: 1, directional: false, mishkinOnly: false },
    { id: "chenilles", name: "Chenilles", cost: 4, slots: 1, directional: false, mishkinOnly: false },
    { id: "equipage_supp", name: "Membre d'Équipage Supplémentaire", cost: 4, slots: 0, directional: false, mishkinOnly: false },
    { id: "nitro", name: "Nitro", cost: 6, slots: 0, directional: false, mishkinOnly: false },
    { id: "reacteur_nucleaire", name: "Réacteur Nucléaire Expérimental (Mishkin)", cost: 5, slots: 0, directional: false, mishkinOnly: true },
    { id: "teleporteur", name: "Téléporteur Expérimental (Mishkin)", cost: 7, slots: 0, directional: false, mishkinOnly: true }
  ],
  trailers: [
    { id: "none", name: "Aucune remorque", cost: 0, extraSlots: 0, addsFacings: false },
    { id: "trailer_light", name: "Remorque (Poids Léger)", cost: 4, extraSlots: 0, addsFacings: true },
    { id: "trailer_medium", name: "Remorque (Poids Moyen)", cost: 8, extraSlots: 1, addsFacings: true },
    { id: "trailer_heavy", name: "Remorque (Poids Lourd)", cost: 12, extraSlots: 3, addsFacings: true }
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
    { id: "heure_de_gloire", name: "Heure de Glory", cost: 2, class: "Precision" },
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

const SUPABASE_URL = "https://vwfzzybjjlrashioovrk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_CVxOH_z-iZs-hmc2O6NBEw_faZRGkNI";

if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
  window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

let crew = [];
let maxCans = 50;
let myGarageCode = "";
let garageHistory = [];

document.addEventListener("DOMContentLoaded", async () => {
  const savedHistory = localStorage.getItem("gaslands_garage_history_list");
  if (savedHistory) garageHistory = JSON.parse(savedHistory);

  let savedCode = localStorage.getItem("gaslands_garage_unique_code");
  if (!savedCode) {
    savedCode = "GANG-" + Math.random().toString(36).substring(2, 6).toUpperCase();
    localStorage.setItem("gaslands_garage_unique_code", savedCode);
    addToHistory(savedCode);
  }
  myGarageCode = savedCode;

  if (!garageHistory.includes(myGarageCode)) addToHistory(myGarageCode);
  document.getElementById("garage-code-display").textContent = myGarageCode;

  const savedLimit = localStorage.getItem("gaslands_max_cans_limit");
  if (savedLimit) maxCans = parseInt(savedLimit, 10);
  document.getElementById("max-cans-display").textContent = maxCans;

  populateFormOptions();
  updateHistoryDropdownUI();
  loadLocalCrewForCode(myGarageCode);
});

function addToHistory(code) {
  if (!garageHistory.includes(code)) {
    garageHistory.push(code);
    localStorage.setItem("gaslands_garage_history_list", JSON.stringify(garageHistory));
  }
}

function updateHistoryDropdownUI() {
  const select = document.getElementById("garage-history-select");
  if (!select) return;
  select.innerHTML = `<option value="">Écuries (${garageHistory.length})...</option>` +
    garageHistory.map(code => `<option value="${code}" ${code === myGarageCode ? 'selected' : ''}>${code}</option>`).join("");
}

function createNewGarage() {
  const newCode = "GANG-" + Math.random().toString(36).substring(2, 6).toUpperCase();
  localStorage.setItem("gaslands_garage_unique_code", newCode);
  addToHistory(newCode);

  myGarageCode = newCode;
  document.getElementById("garage-code-display").textContent = myGarageCode;

  crew = [];
  localSave();
  renderCrew();
  populateFormOptions();
  updateHistoryDropdownUI();
}

function deleteCurrentGarage() {
  if (garageHistory.length <= 1) {
    alert("🚨 Action impossible : Tu dois garder au moins une écurie active !");
    return;
  }

  if (confirm(`⚠️ Supprimer définitivement l'écurie locale ${myGarageCode} ?`)) {
    const codeToDelete = myGarageCode;
    garageHistory = garageHistory.filter(code => code !== codeToDelete);
    localStorage.setItem("gaslands_garage_history_list", JSON.stringify(garageHistory));

    const allGarages = localStorage.getItem("gaslands_multi_garages_data");
    if (allGarages) {
      let multiData = JSON.parse(allGarages);
      delete multiData[codeToDelete];
      localStorage.setItem("gaslands_multi_garages_data", JSON.stringify(multiData));
    }

    myGarageCode = garageHistory[0];
    localStorage.setItem("gaslands_garage_unique_code", myGarageCode);
    document.getElementById("garage-code-display").textContent = myGarageCode;

    loadLocalCrewForCode(myGarageCode);
    populateFormOptions();
    updateHistoryDropdownUI();
  }
}

function switchGarageFromHistory(selectedCode) {
  if (!selectedCode) return;
  myGarageCode = selectedCode;
  localStorage.setItem("gaslands_garage_unique_code", myGarageCode);
  document.getElementById("garage-code-display").textContent = myGarageCode;
  loadLocalCrewForCode(myGarageCode);
  populateFormOptions();
}

function loadLocalCrewForCode(code) {
  const allGarages = localStorage.getItem("gaslands_multi_garages_data");
  let multiData = allGarages ? JSON.parse(allGarages) : {};
  crew = multiData[code] || [];
  renderCrew();
}

function localSave() {
  const allGarages = localStorage.getItem("gaslands_multi_garages_data");
  let multiData = allGarages ? JSON.parse(allGarages) : {};
  multiData[myGarageCode] = crew;
  localStorage.setItem("gaslands_multi_garages_data", JSON.stringify(multiData));
  localStorage.setItem("gaslands_advanced_crew", JSON.stringify(crew));
  cloudSaveGarage();
}

async function cloudSaveGarage() {
  if (!window.supabase) return;
  const statusText = document.getElementById("crew-status-text");
  const { error } = await window.supabase
    .from("crews")
    .upsert({ user_id: myGarageCode, data: crew });

  if (!error && statusText) {
    statusText.textContent = "🛰️ Garage local & Cloud synchronisés — " + myGarageCode;
    statusText.className = "text-emerald-500 text-xs font-sans font-bold";
  }
}

async function cloudLoadGarage(event) {
  event.preventDefault();
  if (!window.supabase) return;

  const codeInput = document.getElementById("load-code-input").value.trim().toUpperCase();
  if (!codeInput) return;

  const { data, error } = await window.supabase
    .from("crews")
    .select("data")
    .eq("user_id", codeInput)
    .maybeSingle();

  if (error) {
    alert("Erreur satellite : " + error.message);
  } else if (data && data.data) {
    crew = data.data;
    myGarageCode = codeInput;
    localStorage.setItem("gaslands_garage_unique_code", myGarageCode);
    addToHistory(myGarageCode);
    localSave();
    document.getElementById("garage-code-display").textContent = myGarageCode;
    renderCrew();
    populateFormOptions();
    toggleLoadModal();
  } else {
    alert("⚠️ Aucun garage sur la fréquence : " + codeInput);
  }
}

function adjustMaxCans(amount) {
  maxCans += amount;
  if (maxCans < 5) maxCans = 5;
  document.getElementById("max-cans-display").textContent = maxCans;
  localStorage.setItem("gaslands_max_cans_limit", maxCans);
  renderCrew();
}

function populateFormOptions() {
  const sSelect = document.getElementById("sponsor-select");
  const vSelect = document.getElementById("vehicle-type");
  const tSelect = document.getElementById("trailer-select");
  const cSelect = document.getElementById("cargo-select");
  const wContainer = document.getElementById("weapon-checkboxes-container");
  const uContainer = document.getElementById("upgrade-checkboxes-container");

  if (!sSelect) return;

  if (sSelect.innerHTML.trim() === "") {
    sSelect.innerHTML = GASLANDS_DATA.sponsors.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
  }

  const currentSponsorId = sSelect.value || "none";

  if (vSelect) {
    vSelect.innerHTML = Object.entries(GASLANDS_DATA.vehicles).map(([key, v]) => `<option value="${key}">${v.name} (${v.baseCost} Cans — Slots: ${v.slots})</option>`).join("");
  }
  if (tSelect) {
    tSelect.innerHTML = GASLANDS_DATA.trailers.map(t => `<option value="${t.id}">${t.name} ${t.cost > 0 ? `(+${t.cost} Cans — Soute +${t.extraSlots} Slots)` : '(Soute +0 Slot)'}</option>`).join("");
  }
  if (cSelect) {
    cSelect.innerHTML = GASLANDS_DATA.cargoUpgrades.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
  }

  if (wContainer) {
    const filteredWeapons = GASLANDS_DATA.weapons.filter(w => !w.mishkinOnly || currentSponsorId === "mishkin");
    wContainer.innerHTML = filteredWeapons.map(w => `
      <div class="flex flex-col gap-1 bg-zinc-900/20 border border-zinc-900 p-2 rounded hover:border-zinc-800 transition">
        <label class="flex items-center gap-2 cursor-pointer w-full">
          <input type="checkbox" name="weapon-checkbox" value="${w.id}" onchange="toggleWeaponOrientationState('${w.id}'); updateLiveFormCalculations();" class="accent-amber-500 w-4 h-4 cursor-pointer">
          <span class="flex-grow font-bold text-zinc-200">${w.name} ${w.crew ? '<span class="text-[9px] text-amber-500/70 bg-amber-950/40 border border-amber-900/50 px-1 py-0.5 rounded font-sans ml-1 uppercase">Équipage</span>' : `<span class="text-[10px] text-zinc-500">[${w.slots}S]</span>`} <span class="text-amber-500 text-xs font-black">(+${w.cost} Cans)</span></span>
        </label>
        ${!w.crew ? `
        <div class="flex items-center justify-end gap-2 mt-1 text-[11px] opacity-40 transition" id="w-orient-zone-${w.id}">
          <span class="text-zinc-500">Fixation :</span>
          <select id="w-facing-${w.id}" disabled onchange="updateLiveFormCalculations()" class="bg-zinc-950 border border-zinc-800 rounded px-1.5 py-0.5 text-zinc-300 font-sans outline-none focus:border-amber-500">
            <option value="Avant">Avant</option>
            <option value="Arrière">Arrière</option>
            <option value="Flanc Gauche">Flanc Gauche</option>
            <option value="Flanc Droit">Flanc Droit</option>
            <option value="Tourelle">Tourelle (Coût x3)</option>
          </select>
        </div>
        ` : ''}
      </div>
    `).join("");
  }

  if (uContainer) {
    const filteredUpgrades = GASLANDS_DATA.upgrades.filter(u => !u.mishkinOnly || currentSponsorId === "mishkin");
    uContainer.innerHTML = filteredUpgrades.map(u => `
      <div class="flex flex-col gap-1 bg-zinc-900/10 border border-zinc-900/60 p-2 rounded hover:border-zinc-800 transition">
        <label class="flex items-center gap-2 cursor-pointer w-full">
          <input type="checkbox" name="upgrade-checkbox" value="${u.id}" onchange="toggleUpgradeOrientationState('${u.id}'); updateLiveFormCalculations();" class="accent-amber-500 w-4 h-4 cursor-pointer">
          <span class="flex-grow text-zinc-300">${u.name} <span class="text-[10px] text-zinc-500">[${u.slots}S]</span> <span class="text-amber-500 font-bold text-xs">(+${u.cost})</span></span>
        </label>
        ${u.directional ? `
        <div class="flex items-center justify-end gap-2 mt-1 text-[11px] opacity-40 transition" id="u-orient-zone-${u.id}">
          <span class="text-zinc-500">Emplacement :</span>
          <select id="u-facing-${u.id}" disabled onchange="updateLiveFormCalculations()" class="bg-zinc-950 border border-zinc-800 rounded px-1.5 py-0.5 text-zinc-300 font-sans outline-none focus:border-amber-500">
            <option value="Avant">Avant (Standard)</option>
            <option value="Arrière">Arrière</option>
            <option value="Latéral">Latéral</option>
          </select>
        </div>
        ` : ''}
      </div>
    `).join("");
  }

  handleSponsorChange();
  handleTrailerChange();
  updateLiveFormCalculations();
}

function updateLiveFormCalculations() {
  const chassisKey = document.getElementById("vehicle-type").value;
  const trailerId = document.getElementById("trailer-select").value;
  const cargoId = document.getElementById("cargo-select").value;

  const chassis = GASLANDS_DATA.vehicles[chassisKey];
  const trailer = GASLANDS_DATA.trailers.find(t => t.id === trailerId);
  const cargo = GASLANDS_DATA.cargoUpgrades.find(c => c.id === cargoId);

  if (!chassis) return;

  let currentCansTotal = chassis.baseCost + (trailer ? trailer.cost : 0) + (cargo ? cargo.cost : 0);
  let currentSlotsTotal = 0;

  let facingsUsage = { "Avant": 0, "Arrière": 0, "Flanc Gauche": 0, "Flanc Droit": 0, "Latéral": 0 };

  document.querySelectorAll('input[name="weapon-checkbox"]:checked').forEach(cb => {
    const wObj = GASLANDS_DATA.weapons.find(w => w.id === cb.value);
    if (wObj) {
      let weaponCost = wObj.cost;
      if (!wObj.crew) {
        const facing = document.getElementById(`w-facing-${wObj.id}`).value;
        if (facing === "Tourelle" && wObj.cost > 0) weaponCost = wObj.cost * 3;
        if (facingsUsage[facing] !== undefined) facingsUsage[facing]++;
      }
      currentCansTotal += weaponCost;
      currentSlotsTotal += wObj.slots;
    }
  });

  document.querySelectorAll('input[name="upgrade-checkbox"]:checked').forEach(cb => {
    const uObj = GASLANDS_DATA.upgrades.find(u => u.id === cb.value);
    if (uObj) {
      currentCansTotal += uObj.cost;
      currentSlotsTotal += uObj.slots;
      if (uObj.directional) {
        const facing = document.getElementById(`u-facing-${uObj.id}`).value;
        if (facingsUsage[facing] !== undefined) facingsUsage[facing]++;
      }
    }
  });

  document.querySelectorAll('input[name="perk-checkbox"]:checked').forEach(cb => {
    const pObj = GASLANDS_DATA.perks.find(p => p.id === cb.value);
    if (pObj) currentCansTotal += pObj.cost;
  });

  const maxSlotsAvailable = chassis.slots + (trailer ? trailer.extraSlots : 0);
  const maxPerFacing = (trailer && trailer.id !== "none") ? 2 : 1;

  let facingOverloadDetected = false;
  let overloadDetails = [];

  let finalAvant = facingsUsage["Avant"];
  let finalArriere = facingsUsage["Arrière"];
  let finalGauche = facingsUsage["Flanc Gauche"] + facingsUsage["Latéral"];
  let finalDroit = facingsUsage["Flanc Droit"] + facingsUsage["Latéral"];

  if (finalAvant > maxPerFacing) { facingOverloadDetected = true; overloadDetails.push(`Avant (${finalAvant}/${maxPerFacing})`); }
  if (finalArriere > maxPerFacing) { facingOverloadDetected = true; overloadDetails.push(`Arrière (${finalArriere}/${maxPerFacing})`); }
  if (finalGauche > maxPerFacing) { facingOverloadDetected = true; overloadDetails.push(`Flanc G. (${finalGauche}/${maxPerFacing})`); }
  if (finalDroit > maxPerFacing) { facingOverloadDetected = true; overloadDetails.push(`Flanc D. (${finalDroit}/${maxPerFacing})`); }

  const cansIndicator = document.getElementById("live-cans-indicator");
  const slotsIndicator = document.getElementById("live-slots-indicator");
  const facingsIndicator = document.getElementById("live-facings-indicator");

  if (cansIndicator) cansIndicator.textContent = `${currentCansTotal} Cans`;

  if (slotsIndicator) {
    slotsIndicator.textContent = `${currentSlotsTotal} / ${maxSlotsAvailable} Slots`;
    slotsIndicator.className = (currentSlotsTotal > maxSlotsAvailable)
      ? "text-red-500 font-mono text-sm font-black tracking-wide animate-pulse"
      : "text-zinc-300 font-mono";
  }

  if (facingsIndicator) {
    if (facingOverloadDetected) {
      facingsIndicator.innerHTML = `<span class="text-red-500 font-black animate-pulse">⚠️ FIXATION SATURÉE : ${overloadDetails.join(", ")}</span>`;
    } else {
      facingsIndicator.innerHTML = `
        <span class="${finalAvant > 0 ? 'text-amber-500' : 'text-zinc-600'}">AV: ${finalAvant}/${maxPerFacing}</span>
        <span class="${finalArriere > 0 ? 'text-amber-500' : 'text-zinc-600'}">ARR: ${finalArriere}/${maxPerFacing}</span>
        <span class="${finalGauche > 0 || finalDroit > 0 ? 'text-amber-500' : 'text-zinc-600'}">LAT: Max ${maxPerFacing}</span>
      `;
    }
  }

  document.getElementById("live-counter-zone").dataset.invalidFacing = facingOverloadDetected ? "true" : "false";
}

function handleSponsorSelectChange() { populateFormOptions(); }

function toggleWeaponOrientationState(weaponId) {
  const wBox = document.querySelector(`input[name="weapon-checkbox"][value="${weaponId}"]`);
  const zone = document.getElementById(`w-orient-zone-${weaponId}`);
  const select = document.getElementById(`w-facing-${weaponId}`);
  if (wBox && zone && select) {
    select.disabled = !wBox.checked;
    wBox.checked ? zone.classList.remove("opacity-40") : zone.classList.add("opacity-40");
  }
}

function toggleUpgradeOrientationState(upgradeId) {
  const uBox = document.querySelector(`input[name="upgrade-checkbox"][value="${upgradeId}"]`);
  const zone = document.getElementById(`u-orient-zone-${upgradeId}`);
  const select = document.getElementById(`u-facing-${upgradeId}`);
  if (uBox && zone && select) {
    select.disabled = !uBox.checked;
    uBox.checked ? zone.classList.remove("opacity-40") : zone.classList.add("opacity-40");
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
  updateLiveFormCalculations();
}

function handleSponsorChange() {
  const sSelect = document.getElementById("sponsor-select");
  if (!sSelect) return;
  const sponsorId = sSelect.value;
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
      <input type="checkbox" name="perk-checkbox" value="${p.id}" onchange="updateLiveFormCalculations()" class="accent-amber-500 w-4 h-4 cursor-pointer">
      <span>${p.name} <span class="text-[10px] text-zinc-500">[${p.class}]</span> <span class="text-amber-500 font-bold text-xs">(+${p.cost})</span></span>
    </label>
  `).join("");
}

function editVehicle(vehicleId) {
  const targetVehicle = crew.find(v => v.id === vehicleId);
  if (!targetVehicle) return;

  document.getElementById("vehicle-name").value = targetVehicle.customNameOriginal || "";

  const chassisEntry = Object.entries(GASLANDS_DATA.vehicles).find(([key, val]) => val.name === targetVehicle.chassisName);
  if (chassisEntry) document.getElementById("vehicle-type").value = chassisEntry[0];

  document.querySelectorAll('input[name="weapon-checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="upgrade-checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="perk-checkbox"]').forEach(cb => cb.checked = false);

  if (targetVehicle.originalWeapons) {
    targetVehicle.originalWeapons.forEach(wData => {
      const wBox = document.querySelector(`input[name="weapon-checkbox"][value="${wData.id}"]`);
      if (wBox) {
        wBox.checked = true;
        toggleWeaponOrientationState(wData.id);
        const sf = document.getElementById(`w-facing-${wData.id}`);
        if (sf) sf.value = wData.facing;
      }
    });
  }

  if (targetVehicle.originalUpgrades) {
    targetVehicle.originalUpgrades.forEach(uData => {
      const uBox = document.querySelector(`input[name="upgrade-checkbox"][value="${uData.id}"]`);
      if (uBox) {
        uBox.checked = true;
        toggleUpgradeOrientationState(uData.id);
        const sf = document.getElementById(`u-facing-${uData.id}`);
        if (sf) sf.value = uData.facing;
      }
    });
  }

  if (targetVehicle.originalPerks) {
    targetVehicle.originalPerks.forEach(pId => {
      const pBox = document.querySelector(`input[name="perk-checkbox"][value="${pId}"]`);
      if (pBox) pBox.checked = true;
    });
  }

  const trEntry = GASLANDS_DATA.trailers.find(t => t.name === targetVehicle.trailerName);
  document.getElementById("trailer-select").value = trEntry ? trEntry.id : "none";
  handleTrailerChange();

  const cgEntry = GASLANDS_DATA.cargoUpgrades.find(c => c.name === targetVehicle.cargoName);
  document.getElementById("cargo-select").value = cgEntry ? cgEntry.id : "none";

  crew = crew.filter(v => v.id !== vehicleId);
  localSave();
  renderCrew();
  populateFormOptions();
  document.getElementById("vehicle-name").focus();
}

function addVehicleToCrew() {
  if (document.getElementById("live-counter-zone").dataset.invalidFacing === "true") {
    alert("🚨 ERREUR D'ASSEMBLAGE : Tu as saturé un point de fixation physique ! Tu ne peux installer qu'un seul élément directionnel par face (Avant, Arrière, Flancs), sauf si tu équipes une remorque qui double tes emplacements disponibles.");
    return;
  }

  const chassisKey = document.getElementById("vehicle-type").value;
  const customName = document.getElementById("vehicle-name").value.trim();
  const trailerId = document.getElementById("trailer-select").value;
  const cargoId = document.getElementById("cargo-select").value;

  const chassis = GASLANDS_DATA.vehicles[chassisKey];
  const trailer = GASLANDS_DATA.trailers.find(t => t.id === trailerId);
  const cargo = GASLANDS_DATA.cargoUpgrades.find(c => c.id === cargoId);

  let totalSlotsUsed = 0;

  const weaponBoxes = document.querySelectorAll('input[name="weapon-checkbox"]:checked');
  let totalWeaponsCost = 0;
  let selectedWeaponsNames = [];
  let backupWeaponsData = [];

  weaponBoxes.forEach(cb => {
    const wObj = GASLANDS_DATA.weapons.find(w => w.id === cb.value);
    if (wObj) {
      let costForThisWeapon = wObj.cost;
      let displayFacing = "Équipement Équipage";
      let actualFacing = "Équipement Équipage";

      if (!wObj.crew) {
        const facing = document.getElementById(`w-facing-${wObj.id}`).value;
        displayFacing = facing;
        actualFacing = facing;
        if (facing === "Tourelle" && wObj.cost > 0) costForThisWeapon = wObj.cost * 3;
      }

      totalWeaponsCost += costForThisWeapon;
      totalSlotsUsed += wObj.slots;
      selectedWeaponsNames.push(`${wObj.name} (${displayFacing})`);
      backupWeaponsData.push({ id: wObj.id, facing: actualFacing });
    }
  });

  const upgradeBoxes = document.querySelectorAll('input[name="upgrade-checkbox"]:checked');
  let totalUpgradesCost = 0;
  let selectedUpgradesNames = [];
  let extraArmorHull = 0;
  let backupUpgradesData = [];

  upgradeBoxes.forEach(cb => {
    const uObj = GASLANDS_DATA.upgrades.find(u => u.id === cb.value);
    if (uObj) {
      totalUpgradesCost += uObj.cost;
      totalSlotsUsed += uObj.slots;

      let facingText = "";
      let actualFacing = "Normal";
      if (uObj.directional) {
        actualFacing = document.getElementById(`u-facing-${uObj.id}`).value;
        facingText = ` (${actualFacing})`;
      }

      selectedUpgradesNames.push(`${uObj.name}${facingText}`);
      backupUpgradesData.push({ id: uObj.id, facing: actualFacing });
      if (uObj.id === "armor_plating") extraArmorHull += 2;
    }
  });

  const maxSlotsAvailable = chassis.slots + trailer.extraSlots;

  if (totalSlotsUsed > maxSlotsAvailable) {
    alert(`🚨 TRANSMISSION BLOQUÉE : Surcharge ! Soute limitée à ${maxSlotsAvailable} emplacements.`);
    return;
  }

  const perkBoxes = document.querySelectorAll('input[name="perk-checkbox"]:checked');
  let totalPerksCost = 0;
  let selectedPerksNames = [];
  let backupPerksData = [];

  perkBoxes.forEach(cb => {
    const pObj = GASLANDS_DATA.perks.find(p => p.id === cb.value);
    if (pObj) {
      totalPerksCost += pObj.cost;
      selectedPerksNames.push(pObj.name);
      backupPerksData.push(pObj.id);
    }
  });

  const totalVehicleCost = chassis.baseCost + totalWeaponsCost + totalUpgradesCost + totalPerksCost + trailer.cost + cargo.cost;
  const finalName = customName || `${chassis.name} de Combat`;

  const newVehicle = {
    id: crypto.randomUUID(),
    name: finalName,
    customNameOriginal: customName,
    chassisName: chassis.name,
    hull: chassis.hull + extraArmorHull,
    maxSlots: maxSlotsAvailable,
    slotsUsed: totalSlotsUsed,
    weaponName: selectedWeaponsNames.length > 0 ? selectedWeaponsNames.join(", ") : "Aucune",
    upgradeName: selectedUpgradesNames.length > 0 ? selectedUpgradesNames.join(", ") : "Aucune",
    perkName: selectedPerksNames.length > 0 ? selectedPerksNames.join(", ") : "Aucun",
    trailerName: trailerId !== "none" ? trailer.name : "Aucune",
    cargoName: cargoId !== "none" ? cargo.name : "Aucune",
    cost: totalVehicleCost,
    invalid: false,
    originalWeapons: backupWeaponsData,
    originalUpgrades: backupUpgradesData,
    originalPerks: backupPerksData
  };

  crew.push(newVehicle);
  localSave();
  renderCrew();

  document.getElementById("vehicle-name").value = "";
  document.getElementById("trailer-select").value = "none";
  weaponBoxes.forEach(cb => cb.checked = false);
  upgradeBoxes.forEach(cb => cb.checked = false);
  perkBoxes.forEach(cb => cb.checked = false);

  GASLANDS_DATA.weapons.forEach(w => { if (!w.crew) toggleWeaponOrientationState(w.id); });
  GASLANDS_DATA.upgrades.forEach(u => toggleUpgradeOrientationState(u.id));
  handleTrailerChange();
  updateLiveFormCalculations();
}

function removeVehicle(id) {
  crew = crew.filter(v => v.id !== id);
  localSave();
  renderCrew();
}

function clearRoster() {
  if (confirm("Vider entièrement le garage ?")) {
    crew = [];
    localSave();
    renderCrew();
  }
}

function renderCrew() {
  const container = document.getElementById("crew-list");
  const totalCansEl = document.getElementById("total-cans");

  if (!container || !totalCansEl) return;

  if (crew.length === 0) {
    container.innerHTML = `<p class="text-zinc-600 text-sm italic text-center py-12">Aucun véhicule blindé dans le garage...</p>`;
    totalCansEl.textContent = "0";
    totalCansEl.className = "text-5xl font-black text-amber-500 font-sans";
    return;
  }

  let totalCans = 0;
  container.innerHTML = crew.map(v => {
    totalCans += v.cost;
    return `
            <div class="bg-zinc-950 border-2 border-zinc-800 rounded p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition">
                <div class="flex-grow">
                    <div class="flex items-center gap-2">
                        <h4 class="font-black text-sm uppercase text-zinc-100">${v.name}</h4>
                        <span class="text-[10px] bg-zinc-900 text-zinc-400 border border-zinc-700 px-1.5 py-0.5 rounded uppercase font-sans">${v.chassisName}</span>
                    </div>
                    <div class="text-zinc-400 text-xs font-sans mt-2 space-y-1">
                        <div>💥 <span class="font-bold text-zinc-500">Armement :</span> ${v.weaponName}</div>
                        <div>🔧 <span class="font-bold text-zinc-500">Matériel :</span> ${v.upgradeName}</div>
                        <div>🔥 <span class="font-bold text-zinc-500">Avantage :</span> ${v.perkName}</div>
                        ${v.trailerName !== "Aucune" ? `<div>🚛 <span class="font-bold text-zinc-500">Attelage :</span> ${v.trailerName} ${v.cargoName !== "Aucune" ? `[${v.cargoName}]` : ''}</div>` : ''}
                        <div class="text-zinc-500 text-[11px] pt-1 border-t border-t-zinc-900/60">
                            Structure Coque : ${v.hull} | Emplacements : ${v.slotsUsed} / ${v.maxSlots}
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 border-zinc-800/60 pt-2 sm:pt-0 min-w-[160px]">
                    <span class="text-amber-500 font-black text-base font-sans mr-2">${v.cost} Cans</span>
                    <div class="flex gap-3">
                      <button onclick="editVehicle('${v.id}')" class="text-zinc-400 hover:text-amber-500 font-bold text-xs uppercase cursor-pointer transition">Modifier</button>
                      <button onclick="removeVehicle('${v.id}')" class="text-zinc-500 hover:text-red-400 font-bold text-xs uppercase cursor-pointer transition">Supprimer</button>
                    </div>
                </div>
            </div>
        `;
  }).join("");

  totalCansEl.textContent = totalCans;

  if (totalCans > maxCans) {
    totalCansEl.className = "text-5xl font-black text-red-500 font-sans tracking-tight animate-pulse";
  } else {
    totalCansEl.className = "text-5xl font-black text-amber-500 font-sans tracking-tight";
  }
}

function toggleLoadModal() {
  const modal = document.getElementById("load-modal");
  if (modal) modal.classList.toggle("hidden");
}

// ==========================================
// 3. MODULE D'IMPRESSION DU ROSTER (PDF)
// ==========================================
function printMatchSheet() {
  if (crew.length === 0) {
    alert("🚨 Ton garage est vide ! Ajoute au moins un véhicule avant d'imprimer la fiche de match.");
    return;
  }

  const sponsorSelect = document.getElementById("sponsor-select");
  const sponsorName = sponsorSelect ? sponsorSelect.options[sponsorSelect.selectedIndex].text : "Non spécifié";
  const totalCans = crew.reduce((sum, v) => sum + v.cost, 0);

  const printWindow = window.open('', '_blank');

  let vehiclesHTML = crew.map((v, index) => {
    let boxes = "";
    for (let i = 0; i < v.hull; i++) {
      boxes += '<div style="display:inline-block; width:16px; height:16px; border:2px solid #000; margin-right:5px; margin-bottom:5px; background:#fff;"></div>';
    }

    return `
      <div style="border: 3px solid #000; margin-bottom: 20px; page-break-inside: avoid; background: #fff;">
        <div style="background: #000; color: #fff; padding: 6px 10px; font-weight: bold; text-transform: uppercase; font-size: 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color:#fff; font-weight:bold; font-family:monospace;">${String(index + 1).padStart(2, '0')}. ${v.name.toUpperCase()}</td>
              <td style="text-align: right; color:#fff; font-size: 11px; font-family:monospace;">${v.chassisName.toUpperCase()} — ${v.cost} CANS</td>
            </tr>
          </table>
        </div>
        <div style="padding: 10px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 12px; font-family:monospace;">
            <tr style="border-bottom: 1px dashed #ccc;"><td style="padding: 4px 0; font-weight: bold; width: 110px;">💥 ARMEMENTS :</td><td style="padding: 4px 0;">${v.weaponName}</td></tr>
            <tr style="border-bottom: 1px dashed #ccc;"><td style="padding: 4px 0; font-weight: bold;">🔧 MATÉRIEL :</td><td style="padding: 4px 0;">${v.upgradeName}</td></tr>
            <tr style="border-bottom: 1px dashed #ccc;"><td style="padding: 4px 0; font-weight: bold;">🔥 AVANTAGES :</td><td style="padding: 4px 0;">${v.perkName}</td></tr>
            ${v.trailerName !== "Aucune" ? `<tr style="border-bottom: 1px dashed #ccc;"><td style="padding: 4px 0; font-weight: bold;">¼🚛 ATTELAGE :</td><td style="padding: 4px 0;">${v.trailerName} ${v.cargoName !== "Aucune" ? `[${v.cargoName}]` : ''}</td></tr>` : ''}
          </table>
          <div style="border-top: 2px solid #000; padding-top: 6px; margin-top: 4px;">
            <span style="font-weight: bold; font-size: 11px; text-transform: uppercase; font-family:monospace;">Structure de la Coque (Points de vie) :</span>
            <div style="margin-top: 6px;">${boxes} <span style="font-size: 10px; vertical-align: super; font-weight: bold; margin-left: 4px; font-family:monospace;">(${v.hull} PV)</span></div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Gaslands - Roster ${myGarageCode}</title>
      <style>
        @page { size: A4; margin: 15mm 10mm; }
        body { font-family: 'Courier New', Courier, monospace; color: #000; background: #fff; margin: 0; padding: 0; }
        .header { border: 4px solid #000; padding: 12px; margin-bottom: 25px; }
        .header-title { font-size: 24px; font-weight: bold; text-align: center; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 8px 0; border-bottom: 2px solid #000; padding-bottom: 4px; }
        .quick-rules { margin-top: 30px; border: 1px solid #000; padding: 10px; font-size: 11px; page-break-inside: avoid; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="header-title">Gaslands - Roster d'Écurie</div>
        <table style="width: 100%; font-size: 13px; font-weight: bold; font-family:monospace;">
          <tr>
            <td style="width: 33%;">FRÉQUENCE : ${myGarageCode}</td>
            <td style="width: 34%; text-align: center;">SPONSOR : ${sponsorName}</td>
            <td style="width: 33%; text-align: right;">VALEUR : ${totalCans} / ${maxCans} CANS</td>
          </tr>
        </table>
      </div>
      
      ${vehiclesHTML}

      <div class="quick-rules">
        <div style="font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 2px; margin-bottom: 6px;">Aide-Mémoire - Règles de Vitesse</div>
        <ul style="margin: 0; padding-left: 18px;">
          <li><strong>Phases 1 à 6 :</strong> On s'active si la vitesse actuelle du bolide >= Phase en cours.</li>
          <li><strong>Séquence :</strong> 1. Choisir Gabarit / 2. Dés de Manœuvre / 3. Résoudre Glissade/Tonneau / 4. Déplacement / 5. Étape d'Attaque.</li>
        </ul>
      </div>

      <script>
        window.onload = function() {
          window.print();
          window.close();
        };
      <\/script>
    </body>
    </html>
  `);

  printWindow.document.close();
}
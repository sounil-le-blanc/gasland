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
  weapons: [
    { id: "none", name: "Aucune arme additionnelle", cost: 0, slots: 0 },
    { id: "machine_gun", name: "Mitrailleuse (Machine Gun)", cost: 2, slots: 1 },
    { id: "heavy_machine_gun", name: "Mitrailleuse Lourde", cost: 3, slots: 1 },
    { id: "mini_gun", name: "Minigun", cost: 5, slots: 1 },
    { id: "flamethrower", name: "Lance-flammes", cost: 4, slots: 1 },
    { id: "rockets", name: "Roquettes (Rockets)", cost: 4, slots: 1 },
    { id: "mortar", name: "Mortier", cost: 4, slots: 2 }
  ],
  upgrades: [
    { id: "none", name: "Aucune amélioration matérielle", cost: 0 },
    { id: "armor_plating", name: "Blindages additionnels (+2 Coque)", cost: 4 },
    { id: "nitro", name: "Booster Nitro", cost: 6 },
    { id: "ram", name: "Éperon renforcé (Ram)", cost: 2 },
    { id: "exploding_ram", name: "Éperon Explosif", cost: 3 }
  ],
  perks: [
    { id: "none", name: "Aucun avantage sélectionné", cost: 0, class: "All" },

    // 🔧 CLASSE : MÉCANIQUE (Engineering) - Réf: 52a21705-7ebc-4d36-ad09-ab777056b39f
    { id: "poids_mort", name: "Poids Mort", cost: 2, class: "Engineering" },
    { id: "expert_tonneaux", name: "Expert en Tonneaux", cost: 2, class: "Engineering" },
    { id: "cogneur", name: "Cogneur", cost: 4, class: "Engineering" },
    { id: "retour_de_flamme", name: "Retour de Flamme", cost: 5, class: "Engineering" },
    { id: "concasseur", name: "Concasseur", cost: 7, class: "Engineering" },
    { id: "meme_pas_mal", name: "Même pas Mal !", cost: 8, class: "Engineering" },

    // ⚡ CLASSE : RAPIDITÉ (Speed) - Réf: f1d9bebf-7b7a-483b-82f4-8802de38b50a
    { id: "depart_eclair", name: "Départ Éclair", cost: 1, class: "Speed" },
    { id: "sillage", name: "Sillage", cost: 2, class: "Speed" },
    { id: "surcharge", name: "Surcharge", cost: 2, class: "Speed" },
    { id: "retrograder", name: "Rétrograder", cost: 3, class: "Speed" },
    { id: "temps_additionnel", name: "Temps Additionnel !", cost: 3, class: "Speed" },
    { id: "a_fond_la_caisse", name: "À Fond la Caisse", cost: 5, class: "Speed" },

    // 🔥 CLASSE : TROMPE-LA-MORT (Badass) - Réf: d5ecf7be-bb9e-4b0d-81d5-6ce92d9e4f97
    { id: "rage_au_volant", name: "Rage au Volant", cost: 1, class: "Badass" },
    { id: "frenesie", name: "Frénésie", cost: 2, class: "Badass" },
    { id: "foutu_pour_foutu", name: "Foutu pour Foutu", cost: 2, class: "Badass" },
    { id: "intouchable", name: "Intouchable", cost: 4, class: "Badass" },
    { id: "plus_balaise_que_toi", name: "Plus Balaise que Toi", cost: 4, class: "Badass" },
    { id: "biereserker", name: "Bièreserker", cost: 5, class: "Badass" },

    // 🎯 CLASSE : PRÉCISION (Precision) - Réf: ce65e45c-ba38-40dd-98fe-e4dcf05d074a
    { id: "mister_fahrenheit", name: "Mister Fahrenheit", cost: 2, class: "Precision" },
    { id: "heure_de_gloire", name: "Heure de Gloire", cost: 2, class: "Precision" },
    { id: "prudence", name: "Prudence", cost: 2, class: "Precision" },
    { id: "expertise", name: "Expertise", cost: 3, class: "Precision" },
    { id: "art_de_la_route", name: "Art de la Route", cost: 3, class: "Precision" },
    { id: "pilote_ne", name: "Pilote-Né", cost: 5, class: "Precision" },

    // 🤠 CLASSE : AUDACE (Audace) - Réf: 1000026185.jpg
    { id: "symbiose", name: "Symbiose", cost: 2, class: "Audace" },
    { id: "insaisissable", name: "Insaisissable", cost: 3, class: "Audace" },
    { id: "as_du_frein_a_main", name: "As du Frein à Main", cost: 3, class: "Audace" },
    { id: "feinte", name: "Feinte", cost: 5, class: "Audace" },
    { id: "derapage_controle", name: "Dérapage Contrôlé", cost: 5, class: "Audace" },
    { id: "cascadeur", name: "Cascadeur", cost: 7, class: "Audace" },

    // 💥 CLASSE : AGRESSION (Agression) - Réf: 1000026185.jpg
    { id: "double_canon", name: "Double Canon", cost: 2, class: "Agression" },
    { id: "abordage", name: "Abordage", cost: 2, class: "Agression" },
    { id: "marteau_de_guerre", name: "Marteau de Guerre", cost: 4, class: "Agression" },
    { id: "psychopathe", name: "Psychopathe", cost: 5, class: "Agression" },
    { id: "broyeur", name: "Broyeur", cost: 5, class: "Agression" },
    { id: "engin_de_la_mort", name: "Engin de la Mort", cost: 5, class: "Agression" },

    // 🛡️ CLASSE : DUR À CUIRE (DurACuire) - Réf: 2b84b894-e13f-4b1e-8747-23eac0b5a4c4
    { id: "baril_de_poudre", name: "Baril de Poudre", cost: 1, class: "DurACuire" },
    { id: "sens_du_spectacle", name: "Sens du Spectacle", cost: 1, class: "DurACuire" },
    { id: "guerrier_de_la_route", name: "Guerrier de la Route", cost: 2, class: "DurACuire" },
    { id: "couvrez_moi", name: "Couvrez-Moi !", cost: 2, class: "DurACuire" },
    { id: "fou_furieux", name: "Fou Furieux", cost: 3, class: "DurACuire" },
    { id: "pluie_de_balles", name: "Pluie de Balles", cost: 3, class: "DurACuire" },

    // 💀 CLASSE : HORREUR (Horreur) - Réf: 75f49b9e-987d-4a2a-a882-5b47a3f6602f
    { id: "flammes_purificatrices", name: "Flammes Purificatrices", cost: 1, class: "Horreur" },
    { id: "visions_extatiques", name: "Visions Extatiques", cost: 1, class: "Horreur" },
    { id: "pacte_avec_le_diable", name: "Pacte avec le Diable", cost: 1, class: "Horreur" },
    { id: "autoroute_vers_lenfer", name: "Autoroute vers l'Enfer", cost: 2, class: "Horreur" },
    { id: "manifestation_diabolique", name: "Manifestation Diabolique", cost: 3, class: "Horreur" },
    { id: "ange_de_la_mort", name: "Ange de la Mort", cost: 4, class: "Horreur" },

    // ⚔️ CLASSE : MILITAIRE (Militaire) - Réf: 2cbd2f66-d8e1-4aa8-b78f-010529a3856c
    { id: "tireur_delite", name: "Tireur d'Élite", cost: 2, class: "Militaire" },
    { id: "servant_dartillerie", name: "Servant d'Artillerie", cost: 2, class: "Militaire" },
    { id: "charge_a_bloc", name: "Chargé à Bloc", cost: 2, class: "Militaire" },
    { id: "tirs_rapides", name: "Tirs Rapides", cost: 2, class: "Militaire" },
    { id: "tir_a_la_tete", name: "Tir à la Tête", cost: 4, class: "Militaire" },
    { id: "riposte", name: "Riposte", cost: 5, class: "Militaire" },

    // ⚙️ CLASSE : OPTIMISATION (Optimisation) - Réf: 8062496c-174e-4420-b816-fe721b041c70
    { id: "fenderkiss", name: "Fenderkiss", cost: 2, class: "Optimisation" },
    { id: "propulsion", name: "Propulsion", cost: 2, class: "Optimisation" },
    { id: "doigte", name: "Doigté", cost: 3, class: "Optimisation" },
    { id: "momentum", name: "Momentum", cost: 3, class: "Optimisation" },
    { id: "ronronnement", name: "Ronronnement", cost: 6, class: "Optimisation" },
    { id: "sur_deux_roues", name: "Sur Deux Roues", cost: 6, class: "Optimisation" },

    // 🏁 CLASSE : POURSUITE (Poursuite) - Réf: b307f5d8-9aea-49ae-8220-6fdf2763461e
    { id: "a_tes_trousses", name: "À Tes Trousses", cost: 2, class: "Poursuite" },
    { id: "le_malheur_des_uns", name: "Le Malheur des Uns...", cost: 2, class: "Poursuite" },
    { id: "provocation", name: "Provocation", cost: 2, class: "Poursuite" },
    { id: "distancer", name: "Distancer", cost: 2, class: "Poursuite" },
    { id: "tip", name: "Tip", cost: 4, class: "Poursuite" },
    { id: "regard_destabilisant", name: "Regard Déstabilisant", cost: 5, class: "Poursuite" },

    // 💻 CLASSE : TECHNOLOGIE (Technologie) - Réf: b4c35181-ce87-42fc-99b4-936bb8aedb22
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

  if (sSelect) {
    sSelect.innerHTML = GASLANDS_DATA.sponsors.map(s =>
      `<option value="${s.id}">${s.name}</option>`
    ).join("");
  }

  if (vSelect) {
    vSelect.innerHTML = Object.entries(GASLANDS_DATA.vehicles).map(([key, v]) =>
      `<option value="${key}">${v.name} (${v.baseCost} Cans — Slots: ${v.slots})</option>`
    ).join("");
  }

  if (wSelect) {
    wSelect.innerHTML = GASLANDS_DATA.weapons.map(w =>
      `<option value="${w.id}">${w.name} ${w.cost > 0 ? `(+${w.cost} Cans)` : ''}</option>`
    ).join("");
  }

  if (uSelect) {
    uSelect.innerHTML = GASLANDS_DATA.upgrades.map(u =>
      `<option value="${u.id}">${u.name} ${u.cost > 0 ? `(+${u.cost} Cans)` : ''}</option>`
    ).join("");
  }

  handleSponsorChange();
}

function handleSponsorChange() {
  const sponsorId = document.getElementById("sponsor-select").value;
  const pSelect = document.getElementById("perk-select");

  if (!pSelect) return;

  const selectedSponsor = GASLANDS_DATA.sponsors.find(s => s.id === sponsorId);

  const allowedPerks = GASLANDS_DATA.perks.filter(perk => {
    return perk.id === "none" ||
      perk.class === "All" ||
      selectedSponsor.perkClasses.includes(perk.class);
  });

  pSelect.innerHTML = allowedPerks.map(p =>
    `<option value="${p.id}">${p.name} [${p.class}] ${p.cost > 0 ? `(+${p.cost} Cans)` : ''}</option>`
  ).join("");
}

function handleChassisChange() { }

function addVehicleToCrew() {
  const chassisKey = document.getElementById("vehicle-type").value;
  const customName = document.getElementById("vehicle-name").value.trim();
  const weaponId = document.getElementById("weapon-select").value;
  const weaponFacing = document.getElementById("weapon-facing").value;
  const upgradeId = document.getElementById("upgrade-select").value;
  const perkId = document.getElementById("perk-select").value;

  const chassis = GASLANDS_DATA.vehicles[chassisKey];
  const weapon = GASLANDS_DATA.weapons.find(w => w.id === weaponId);
  const upgrade = GASLANDS_DATA.upgrades.find(u => u.id === upgradeId);
  const perk = GASLANDS_DATA.perks.find(p => p.id === perkId);

  let finalWeaponCost = weapon.cost;
  if (weaponId !== "none" && weaponFacing.includes("Tourelle")) {
    finalWeaponCost += 3;
  }

  const totalVehicleCost = chassis.baseCost + finalWeaponCost + upgrade.cost + perk.cost;
  const finalName = customName || `${chassis.name} de Combat`;

  const slotsUsed = weapon.slots;
  const slotsExceeded = slotsUsed > chassis.slots;

  const newVehicle = {
    id: crypto.randomUUID(),
    name: finalName,
    chassisName: chassis.name,
    hull: upgradeId === "armor_plating" ? chassis.hull + 2 : chassis.hull,
    maxSlots: chassis.slots,
    slotsUsed: slotsUsed,
    weaponName: weaponId !== "none" ? `${weapon.name} (${weaponFacing})` : "Aucune",
    upgradeName: upgradeId !== "none" ? upgrade.name : "Aucune",
    perkName: perkId !== "none" ? perk.name : "Aucun",
    cost: totalVehicleCost,
    invalid: slotsExceeded
  };

  crew.push(newVehicle);
  saveData();
  renderCrew();

  document.getElementById("vehicle-name").value = "";
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
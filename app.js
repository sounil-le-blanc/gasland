// ==========================================
// 1. CATALOGUE ENRICHI DES RÈGLES GASLANDS
// ==========================================
const GASLANDS_DATA = {
  sponsors: [
    { id: "none", name: "Aucun Sponsor (Alignement Libre)", perkClasses: ["Badass", "Rocker"] },
    { id: "idris", name: "Idris (Vitesse & Tech)", perkClasses: ["Speed", "Precision"] },
    { id: "rutherford", name: "Rutherford (Militaire & Armes)", perkClasses: ["Military", "Firepower"] },
    { id: "slime", name: "Slime (Punks & Pièges)", perkClasses: ["Aggro", "CrowdPleaser"] },
    { id: "miyazaki", name: "Miyazaki (Drift & Tuning)", perkClasses: ["Speed", "Precision"] },
    { id: "verney", name: "Verney (Ingénieurs)", perkClasses: ["Engineering", "Gadgets"] }
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
    // Classe Speed / Daredevil
    { id: "trompe_la_mort", name: "Trompe-la-mort (Daredevil — Relance de dé)", cost: 2, class: "Speed" },
    { id: "expert_drift", name: "Roi du Drift", cost: 1, class: "Speed" },
    // Classe Engineering / Mécanique
    { id: "mecanicien", name: "Mécanicien de Génie (Réparation live)", cost: 3, class: "Engineering" },
    { id: "bricolage", name: "Système D / Bricolage", cost: 2, class: "Engineering" },
    // Classe Firepower
    { id: "gachette_facile", name: "Gâchette Facile", cost: 2, class: "Firepower" }
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

// Initialisation au chargement
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

// Injection dynamique des nouvelles options
function populateFormOptions() {
  const sSelect = document.getElementById("sponsor-select");
  const vSelect = document.getElementById("vehicle-type");
  const wSelect = document.getElementById("weapon-select");
  const uSelect = document.getElementById("upgrade-select");
  const pSelect = document.getElementById("perk-select");

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

  if (pSelect) {
    pSelect.innerHTML = GASLANDS_DATA.perks.map(p =>
      `<option value="${p.id}">${p.name} [${p.class}] ${p.cost > 0 ? `(+${p.cost} Cans)` : ''}</option>`
    ).join("");
  }
}

// Changement de Sponsor -> Optionnel: pour filtrer visuellement plus tard
function handleSponsorChange() {
  console.log("Nouveau sponsor d'écurie sélectionné :", document.getElementById("sponsor-select").value);
}

function handleChassisChange() {
  // Évite l'ancienne erreur manquante
}

// Ajout d'un véhicule configuré
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
    finalWeaponCost += 3; // Règle Tourelle (+3 Cans)
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

// Auth Modals
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
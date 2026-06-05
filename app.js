// ==========================================
// CONFIGURATION SUPABASE (PROJET WASTELAND)
// ==========================================
const SUPABASE_URL = "https://vwfzzybjjlrashioovrk.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_CVxOH_z-iZs-hmc2O6NBEw_faZRGkNI";

let supabase = null;

// Initialisation via l'objet global exposé par le CDN dans index.html
if (typeof window.supabase !== 'undefined') {
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// État (State) de l'application
let crew = [];
let currentUser = null;

// Initialisation automatique au chargement du DOM
document.addEventListener("DOMContentLoaded", async () => {
  populateFormOptions();

  if (supabase) {
    // Récupération de la session utilisateur active si elle existe
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      currentUser = session.user;
      updateAuthUI();
      await loadCrewFromSupabase();
    }
  } else {
    // Mode de secours local si le CDN Supabase échouait à charger
    const localData = localStorage.getItem("gaslands_advanced_crew");
    if (localData) crew = JSON.parse(localData);
  }
  renderCrew();
});

// Injection dynamique des données de règles (data.js) dans le HTML
function populateFormOptions() {
  const vSelect = document.getElementById("vehicle-type");
  const wSelect = document.getElementById("weapon-select");
  const uSelect = document.getElementById("upgrade-select");

  if (!vSelect || !wSelect || !uSelect) return;

  // Remplir les types de châssis
  vSelect.innerHTML = Object.entries(GASLANDS_DATA.vehicles).map(([key, v]) =>
    `<option value="${key}">${v.name} (${v.baseCost} Cans — Build Slots: ${v.slots})</option>`
  ).join("");

  // Remplir la soute à armes
  wSelect.innerHTML = GASLANDS_DATA.weapons.map(w =>
    `<option value="${w.id}">${w.name} ${w.cost > 0 ? `(+${w.cost} Cans)` : ''}</option>`
  ).join("");

  // Remplir les pièces de rechange (Upgrades)
  uSelect.innerHTML = GASLANDS_DATA.upgrades.map(u =>
    `<option value="${u.id}">${u.name} ${u.cost > 0 ? `(+${u.cost} Cans)` : ''}</option>`
  ).join("");
}

// Ajout mécanique d'un véhicule configuré au gang
function addVehicleToCrew() {
  const chassisKey = document.getElementById("vehicle-type").value;
  const customName = document.getElementById("vehicle-name").value.trim();
  const weaponId = document.getElementById("weapon-select").value;
  const weaponFacing = document.getElementById("weapon-facing").value;
  const upgradeId = document.getElementById("upgrade-select").value;

  const chassis = GASLANDS_DATA.vehicles[chassisKey];
  const weapon = GASLANDS_DATA.weapons.find(w => w.id === weaponId);
  const upgrade = GASLANDS_DATA.upgrades.find(u => u.id === upgradeId);

  // Règle Gaslands : Monter une arme sur tourelle ajoute +3 Cans au coût total
  let finalWeaponCost = weapon.cost;
  if (weaponId !== "none" && weaponFacing.includes("Tourelle")) {
    finalWeaponCost += 3;
  }

  const totalVehicleCost = chassis.baseCost + finalWeaponCost + upgrade.cost;
  const finalName = customName || `${chassis.name} Reconditionnée`;

  // Vérification de la contrainte technique des Build Slots du châssis
  const slotsUsed = weapon.slots;
  const slotsExceeded = slotsUsed > chassis.slots;

  const newVehicle = {
    id: crypto.randomUUID(),
    name: finalName,
    chassisName: chassis.name,
    hull: upgradeId === "armor_plating" ? chassis.hull + 2 : chassis.hull, // Blindage = +2 Coque
    maxSlots: chassis.slots,
    slotsUsed: slotsUsed,
    weaponName: weaponId !== "none" ? `${weapon.name} (${weaponFacing})` : "Aucune",
    upgradeName: upgradeId !== "none" ? upgrade.name : "Aucune",
    cost: totalVehicleCost,
    invalid: slotsExceeded
  };

  crew.push(newVehicle);
  saveData();
  renderCrew();

  // Reset du champ de saisie du nom pour la bagnole suivante
  document.getElementById("vehicle-name").value = "";
}

// Destruction d'un véhicule ciblé
function removeVehicle(id) {
  crew = crew.filter(v => v.id !== id);
  saveData();
  renderCrew();
}

// Purge complète du garage
function clearRoster() {
  if (confirm("Détruire l'intégralité des véhicules du Roster ?")) {
    crew = [];
    saveData();
    renderCrew();
  }
}

// Rendu et mise à jour de l'affichage HTML
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
                <div>
                    <div class="flex items-center gap-2">
                        <h4 class="font-black text-sm uppercase ${v.invalid ? 'text-red-400' : 'text-zinc-100'}">${v.name}</h4>
                        <span class="text-[10px] bg-zinc-900 text-zinc-400 border border-zinc-700 px-1.5 py-0.5 rounded uppercase font-sans">${v.chassisName}</span>
                    </div>
                    
                    <div class="text-zinc-400 text-xs font-sans mt-2 space-y-0.5">
                        <div>💥 <span class="font-bold">Armement :</span> ${v.weaponName}</div>
                        <div>🔧 <span class="font-bold">Châssis/Option :</span> ${v.upgradeName}</div>
                        <div class="${v.invalid ? 'text-red-400 font-bold' : 'text-zinc-500'} text-[11px] mt-1">
                            Structure Coque : ${v.hull} | Slots d'armes : ${v.slotsUsed} / ${v.maxSlots} ${v.invalid ? '(Surchargé !)' : ''}
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-zinc-800/60 pt-2 sm:pt-0">
                    <span class="text-amber-500 font-black text-base font-sans">${v.cost} Cans</span>
                    <button onclick="removeVehicle('${v.id}')" class="text-zinc-500 hover:text-red-400 font-bold text-xs uppercase cursor-pointer transition">Supprimer</button>
                </div>
            </div>
        `;
  }).join("");

  totalCansEl.textContent = totalCans;

  // Alerte si la liste dépasse la limite classique de tournoi à 50 Cans
  if (totalCans > 50) {
    totalCansEl.className = "text-5xl font-black text-red-500 font-sans tracking-tight animate-pulse";
  } else {
    totalCansEl.className = "text-5xl font-black text-amber-500 font-sans tracking-tight drop-shadow-[0_4px_12px_rgba(245,158,11,0.2)]";
  }
}

// Sauvegarde persistante synchrone (Base Cloud ou locale)
async function saveData() {
  if (supabase && currentUser) {
    await supabase
      .from("crews")
      .upsert({ user_id: currentUser.id, data: crew });
  } else {
    localStorage.setItem("gaslands_advanced_crew", JSON.stringify(crew));
  }
}

// Chargement distant depuis Supabase
async function loadCrewFromSupabase() {
  if (!supabase || !currentUser) return;
  const { data, error } = await supabase
    .from("crews")
    .select("data")
    .eq("user_id", currentUser.id)
    .maybeSingle(); // Prévient les plantages si la ligne n'existe pas encore

  if (data && data.data) {
    crew = data.data;
  }
}

// ==========================================
// MOTEUR D'AUTHENTIFICATION COMPTE PILOTE
// ==========================================
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
  if (!supabase) {
    alert("Le client de communication avec les serveurs est hors-ligne.");
    return;
  }
  const mode = document.getElementById("auth-mode").value;
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;

  let response;
  if (mode === "signin") {
    response = await supabase.auth.signInWithPassword({ email, password });
  } else {
    response = await supabase.auth.signUp({ email, password });
  }

  if (response.error) {
    alert(`Échec de la liaison radio : ${response.error.message}`);
  } else {
    currentUser = response.data.user;
    toggleAuthModal();
    updateAuthUI();
    await loadCrewFromSupabase();
    renderCrew();
  }
}

async function handleLogout() {
  if (supabase) await supabase.auth.signOut();
  currentUser = null;
  crew = [];
  localStorage.removeItem("gaslands_advanced_crew");
  updateAuthUI();
  renderCrew();
}

// Rafraîchissement graphique des indicateurs de statut
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
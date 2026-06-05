// data.js - Base de données officielle Gaslands Refueled
const GASLANDS_DATA = {
  vehicles: {
    bike: { name: "Moto", baseCost: 5, hull: 4, slots: 1, crew: 1 },
    buggy: { name: "Buggy", baseCost: 6, hull: 6, slots: 2, crew: 2 },
    car: { name: "Voiture", baseCost: 15, hull: 10, slots: 2, crew: 2 },
    truck: { name: "Camionnette / Pick-up", baseCost: 15, hull: 12, slots: 3, crew: 3 },
    "heavy-truck": { name: "Poids Lourd", baseCost: 25, hull: 14, slots: 5, crew: 4 },
    bus: { name: "Bus de ligne", baseCost: 30, hull: 16, slots: 3, crew: 8 }
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
    { id: "none", name: "Aucune amélioration", cost: 0 },
    { id: "armor_plating", name: "Blindages additionnels (+2 Coque)", cost: 4 },
    { id: "nitro", name: "Booster Nitro", cost: 6 },
    { id: "ram", name: "Éperon renforcé (Ram)", cost: 2 },
    { id: "exploding_ram", name: "Éperon Explosif", cost: 3 }
  ]
};
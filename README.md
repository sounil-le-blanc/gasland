# 🛠️ Wasteland Garage — Gaslands Crew Builder

> Fan-tool non officiel pour le jeu de figurines **Gaslands : Refuelled** de Mike Hutchinson (Osprey Games).

**[▶ Démo live → gasland.vercel.app](https://gasland.vercel.app/)**

---

## C'est quoi ?

Wasteland Garage est un builder de roster complet pour Gaslands, utilisable directement dans le navigateur, sans installation. Il permet de composer son équipe de véhicules fous, gérer ses sponsors, armes, upgrades et perks, puis partager sa liste avec son club via un système de grilles de match en ligne.

---

## Fonctionnalités

- **Builder complet** — Châssis, armes (avec orientation : Avant / Arrière / Flanc / Tourelle), upgrades, perks, remorques et cargaisons
- **Multi-écuries** — Jusqu'à 5 écuries sauvegardées en local dans le navigateur
- **Calcul live** — Coût en Cans et occupation des slots mis à jour en temps réel
- **Fiche imprimable** — Export PDF/impression de la fiche de roster avec cases de dégâts
- **Grilles de match TV partagées** — Crée un événement avec un code TV, partage le lien magique, les joueurs s'inscrivent en ligne
- **Scanner d'arène** — Consulte les rosters des adversaires inscrits à un match
- **Filtrage par sponsor** — Armes Mishkin exclusives, perks limités aux classes autorisées par le sponsor

---

## Stack technique

- HTML / CSS / JavaScript vanilla
- [Tailwind CSS](https://tailwindcss.com/) (via CDN browser build)
- [Supabase](https://supabase.com/) — base de données pour les grilles de match partagées
- Hébergé sur [Vercel](https://vercel.com/)

---

## Installation locale

```bash
git clone https://github.com/TON_USERNAME/wasteland-garage.git
cd wasteland-garage
```

Ouvre simplement `index.html` dans ton navigateur. Aucune dépendance à installer.

Pour les fonctionnalités en ligne (grilles de match), tu auras besoin de configurer ta propre instance Supabase et de renseigner tes clés dans `app.js` :

```js
const SUPABASE_URL = "https://ton-projet.supabase.co";
const SUPABASE_ANON_KEY = "ta_clé_publique";
```

---

## Contribuer

Les contributions sont les bienvenues ! Que ce soit pour corriger un bug, ajouter des données manquantes ou améliorer l'UI.

1. Fork le repo
2. Crée une branche (`git checkout -b feature/ma-feature`)
3. Commit tes changements (`git commit -m 'Ajout de ...'`)
4. Push et ouvre une Pull Request

---

## Données du jeu

Toutes les données (véhicules, armes, upgrades, sponsors, perks) sont issues de **Gaslands : Refuelled** de Mike Hutchinson, publié par **Osprey Games**.

Ce projet est un outil fan-made, non commercial et non affilié à Osprey Games. Une prise de contact avec l'auteur et l'éditeur est prévue pour s'assurer de la conformité du projet avec leurs conditions d'utilisation.

---

## Licence

Code source distribué sous licence **MIT** — libre d'utilisation, de modification et de distribution.

---

*Wasteland Garage — 2026 • Fan-tool indépendant pour Gaslands*
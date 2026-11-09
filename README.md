# Gestion des tickets de maintenance

## 1. Présentation du projet

Ce projet est réalisé dans le cadre du TP 1 du module Développement Framework côté Client.

Il s'agit d'une application web développée avec Vue.js 3 permettant de consulter et de rechercher des tickets de maintenance à partir d'une API REST.

## 2. Technologies utilisées

- Vue.js 3
- Vite
- Axios
- JSON Server
- JavaScript
- HTML et CSS

## 3. Structure du projet

```text
Vue-Gestion-des-tickets-de-maintenance--version1-
│
├── db.json
├── package.json
├── package-lock.json
├── README.md
│
├── screenshots/
│
└── src/
    ├── components/
    │   └── TicketList.vue
    │
    ├── services/
    │   └── ticketService.js
    │
    └── App.vue
```

## 4. Installation

Cloner le projet :

```bash
git clone URL_DU_DEPOT
```

Accéder au dossier du projet :

```bash
cd Vue-Gestion-des-tickets-de-maintenance--version1-
```

Installer les dépendances :

```bash
npm install
```

## 5. Lancement du projet

Démarrer le serveur JSON :

```bash
npm run server
```

L'API est accessible à l'adresse :

http://localhost:3000/tickets

Dans un deuxième terminal, démarrer l'application Vue :

```bash
npm run dev
```

L'application est accessible à l'adresse :

http://localhost:5173/

## 6. Fonctionnalités réalisées

- Récupération des tickets depuis l'API REST avec Axios.
- Affichage des tickets dans une interface Vue.js.
- Affichage d'un message pendant le chargement.
- Gestion des erreurs lorsque le serveur est indisponible.
- Recherche des tickets par titre.
- Filtrage par statut.
- Filtrage par priorité.
- Combinaison des filtres.
- Affichage du nombre de tickets trouvés.
- Affichage d'un message lorsqu'aucun ticket ne correspond aux critères.

## 7. Captures d'écran

Les captures d'écran du projet sont disponibles dans le dossier `screenshots/`.

- capture-01-api-get.png
- capture-02-vue-tickets.png
- capture-03-recherche.png
- capture-04-filtres.png
- capture-05-erreur.png

## 8. Questions et réponses

### 1. Quelle est la différence entre une API REST et le fichier db.json ?

Le fichier db.json contient les données des tickets au format JSON. L'API REST permet d'accéder à ces données et de les manipuler à travers des requêtes HTTP.

### 2. Pourquoi utilise-t-on onMounted() ?

onMounted() est un hook du cycle de vie de Vue.js. Il permet d'exécuter une fonction lorsque le composant est monté. Dans ce projet, il permet de charger les tickets dès l'affichage du composant.

### 3. Quel est le rôle d'Axios ?

Axios est une bibliothèque JavaScript qui permet d'envoyer des requêtes HTTP vers une API REST et de récupérer les données.

### 4. Quelle est la différence entre ref() et computed() ?

ref() permet de créer une donnée réactive qui peut changer au cours de l'exécution de l'application.

computed() permet de calculer une valeur réactive à partir d'autres données réactives. Dans ce projet, computed() est utilisé pour filtrer les tickets selon les critères de recherche.

## 9. Difficultés rencontrées

Les principales difficultés rencontrées concernent la configuration de JSON Server, la communication entre Vue.js et l'API REST avec Axios, ainsi que la mise en place de la recherche et des filtres.

Ces difficultés ont été résolues progressivement grâce aux tests et aux corrections du code.

## 10. Conclusion

Ce TP m'a permis de découvrir les API REST, de manipuler des données JSON et de développer une interface interactive avec Vue.js 3.

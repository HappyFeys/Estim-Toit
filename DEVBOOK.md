# DEVBOOK – Suivi du projet Estim'Toit

Ce document détaille toutes les étapes du projet, organisées pour un développement progressif et logique, selon la méthodologie TDD. Chaque fonctionnalité est découpée en sous-tâches backend et frontend, à cocher au fur et à mesure.

---

## Légende
- [ ] = À faire
- [x] = Fait

---

## 1. Gestion des matériaux
### 1.1 Backend
- [ ] 1.1.1 Création du modèle "Matériau"
- [ ] 1.1.2 Tests unitaires du modèle
- [ ] 1.1.3 Création des endpoints API CRUD matériaux
- [ ] 1.1.4 Tests API matériaux
- [ ] 1.1.5 Gestion de l’historique/prix évolutif
- [ ] 1.1.6 Tests sur historique/prix

### 1.2 Frontend
- [ ] 1.2.1 Maquette interface matériaux
- [ ] 1.2.2 Formulaire d’ajout/édition/suppression
- [ ] 1.2.3 Intégration avec l’API
- [ ] 1.2.4 Affichage courbes/prix (graphique)
- [ ] 1.2.5 Filtres par catégorie, fournisseur, période
- [ ] 1.2.6 Tests UI matériaux

---

## 2. Gestion des postes
### 2.1 Backend
- [ ] 2.1.1 Création du modèle "Poste" (lien matériaux)
- [ ] 2.1.2 Tests unitaires du modèle
- [ ] 2.1.3 Endpoints API CRUD postes
- [ ] 2.1.4 Tests API postes
- [ ] 2.1.5 Classement par catégories
- [ ] 2.1.6 Recherche rapide (requêtes optimisées)
- [ ] 2.1.7 Import/export de la base
- [ ] 2.1.8 Tests import/export

### 2.2 Frontend
- [ ] 2.2.1 Maquette interface postes
- [ ] 2.2.2 Formulaire d’ajout/édition/suppression
- [ ] 2.2.3 Intégration avec l’API
- [ ] 2.2.4 Recherche et filtres
- [ ] 2.2.5 Import/export via interface
- [ ] 2.2.6 Tests UI postes

---

## 3. Gestion des clients
### 3.1 Backend
- [ ] 3.1.1 Modèle "Client"
- [ ] 3.1.2 Tests unitaires modèle
- [ ] 3.1.3 Endpoints API CRUD clients
- [ ] 3.1.4 Historique des devis par client
- [ ] 3.1.5 Système de rappels (logique)
- [ ] 3.1.6 Tests API clients/rappels

### 3.2 Frontend
- [ ] 3.2.1 Maquette interface clients
- [ ] 3.2.2 Formulaire gestion clients
- [ ] 3.2.3 Historique devis par client
- [ ] 3.2.4 Gestion rappels et modèles d’emails
- [ ] 3.2.5 Intégration API
- [ ] 3.2.6 Tests UI clients

---

## 4. Création de devis
### 4.1 Backend
- [ ] 4.1.1 Modèle "Devis" (liens clients, postes)
- [ ] 4.1.2 Tests unitaires modèle
- [ ] 4.1.3 Endpoints API CRUD devis
- [ ] 4.1.4 Ajout/suppression de postes à un devis
- [ ] 4.1.5 Calcul automatique des prix (matériaux, main d’œuvre, total)
- [ ] 4.1.6 Modification des quantités avec MAJ prix
- [ ] 4.1.7 Gestion TVA globale
- [ ] 4.1.8 Génération PDF
- [ ] 4.1.9 Tests API devis

### 4.2 Frontend
- [ ] 4.2.1 Maquette interface devis
- [ ] 4.2.2 Ajout/suppression de postes au devis
- [ ] 4.2.3 Modification quantités/prix en temps réel
- [ ] 4.2.4 Gestion TVA et affichage total
- [ ] 4.2.5 Génération et téléchargement PDF
- [ ] 4.2.6 Intégration API
- [ ] 4.2.7 Tests UI devis

---

## 5. Calculs & automatisations
### 5.1 Backend
- [ ] 5.1.1 Calculateur de surfaces (longueur × largeur × coefficient de pente)
- [ ] 5.1.2 Suggestions de postes complémentaires (logique)
- [ ] 5.1.3 Formules de calcul (matériaux, main d’œuvre, total)
- [ ] 5.1.4 Tests calculs/automatisations

### 5.2 Frontend
- [ ] 5.2.1 Interface calculateur de surfaces
- [ ] 5.2.2 Suggestions automatiques de postes
- [ ] 5.2.3 Affichage dynamique des résultats
- [ ] 5.2.4 Tests UI calculs/automatisations

---

## 6. Planification et suivi
### 6.1 Backend
- [ ] 6.1.1 Modèle "Chantier"
- [ ] 6.1.2 Endpoints API CRUD chantiers
- [ ] 6.1.3 Suivi d’avancement (états, dates)
- [ ] 6.1.4 Tests API chantiers

### 6.2 Frontend
- [ ] 6.2.1 Maquette calendrier/vues chantiers
- [ ] 6.2.2 Ajout/édition chantiers
- [ ] 6.2.3 Vue d’ensemble planifiée
- [ ] 6.2.4 Suivi d’état d’avancement
- [ ] 6.2.5 Tests UI planification

---

Mise à jour : aucune étape réalisée pour l’instant.

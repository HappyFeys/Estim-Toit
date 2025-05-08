# CDC

## Contexte

Dans le but de développer un projet de création de devis pour un prestataire de services de toiture.

## Objectif

### 1. Gestion des postes

- Création, modification et suppression de postes
- Classement par catégories
- Recherche rapide
- Import/export de la base de postes

### 2. Création de devis

- Interface intuitive d'ajout de postes
- Calcul automatique des prix
- Modification des quantités avec mise à jour en temps réel
- Gestion de la TVA au niveau global du devis
- Génération de PDF pour l'envoi au client

### 3. Calculs et automatisations

- Calculateur de surfaces simple (longueur × largeur avec coefficient de pente)
- Suggestions de postes complémentaires
- Formules de calcul de prix :
    - Pour les matériaux : Prix d'achat × (1 + Marge)
    - Pour la main d'œuvre : Taux horaire × Temps estimé
    - Prix total d'un poste au métré : (Prix matériaux + Prix main d'œuvre) × Quantité × Coefficient de difficulté (optionnel)

### 4. Gestion des clients

- Base de données clients complète
- Historique des devis par client
- Système de rappels pour les relances
- Modèles d'emails pour l'envoi de devis

### 5. Planification simplifiée

- Calendrier des chantiers
- Vue d'ensemble des travaux planifiés
- Suivi de l'état d'avancement

### 6. Gestion des matériaux

- Courbes d'évolution des prix des matériaux
- Possibilité de comparer plusieurs matériaux sur un même graphique
- Filtrage par catégorie, fournisseur, période

### 7. Ecrans principaux à développer

1. Tableau de bord principal
2. Gestion des postes (liste, création, édition)
3. Gestion des matériaux (liste, création, édition)
4. Création/édition de devis
5. Gestion des clients (liste, création, édition)
6. Calendrier des chantiers
7. Paramètres de l'application

## Fonctionnalités futures (non prioritaires)

- Gestion des stocks et des matériaux
- Suivi de la rentabilité et analyses post-chantier
- Gestion des équipes et des ressources
- Facturation et suivi des paiements
- Application mobile pour les devis sur chantier
- Modélisation 3D de la toiture
- Gestion des fournisseurs
- Gestion des utilisateurs


## Environnement

Les technologies à utiliser sont : 
 - Backend : Node.js + Express
 - Frontend : React
 - Base de données : MongoDB
 - Authentification : JWT
 - ORM : Mongoose
 - Gestion d'état : Redux
 - CSS : Tailwind CSS

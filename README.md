# Suivi Chantier — page de lancement

Adresse : **https://jasonnexpro.github.io/suivi-chantier/**

Cette page affiche l'application Suivi Chantier (Google Apps Script) en plein écran et **garde la connexion mémorisée**. Il n'y a donc plus besoin de se reconnecter après avoir fermé le navigateur du téléphone.

## Pourquoi cette page

L'application Apps Script tourne dans un cadre hébergé chez Google. Les navigateurs des téléphones (Safari en particulier) effacent souvent ce que ce cadre mémorise. Cette page est ouverte directement : le téléphone garde donc ses données, et c'est elle qui conserve la connexion.

## Fonctionnement

- Si « Mémoriser mes identifiants » est cochée à la connexion, l'application confie le prénom et le mot de passe à cette page. À l'ouverture suivante, la page les renvoie et l'application se reconnecte toute seule.
- La déconnexion, ou une connexion sans la case cochée, efface ces informations.
- La page n'échange de messages qu'avec l'application Google (adresse `…-script.googleusercontent.com`). De son côté, l'application n'accepte que cette page (`https://jasonnexpro.github.io`).
- Aucune donnée de chantier n'est stockée ici.

## Mettre l'icône sur l'écran d'accueil

- **iPhone (Safari)** : ouvrir l'adresse, bouton Partager, puis « Sur l'écran d'accueil ».
- **Android (Chrome)** : ouvrir l'adresse, menu ⋮, puis « Ajouter à l'écran d'accueil » (ou « Installer l'application »).

L'ancienne adresse script.google.com continue de fonctionner.

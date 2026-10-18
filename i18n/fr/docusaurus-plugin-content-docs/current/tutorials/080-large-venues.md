---
id: large-venues
title: Grandes salles, éclairage et son
---

# 🏟️ Grandes salles, éclairage et son

QuizWitz Live s'adapte aussi bien à un quiz de bar qu'à de grandes salles avec des centaines de joueurs. Ce guide explique ce qui change lorsque vous passez à une scène plus grande : le réseau, le son et la synchronisation de votre éclairage (ou d'autres équipements de spectacle) avec le jeu.

> 🧭 Si vous découvrez QuizWitz Live, commencez par le [**Guide de démarrage du quizmaster**](../quizmaster/002-startup.md).

---

## 🌐 Une connexion internet stable

Toutes les parties d'une partie en direct communiquent entre elles via nos serveurs en temps réel : l'écran de jeu, la Quizmaster App, l'app du jury, les outils de régie et l'appareil de chaque joueur. Une connexion internet stable est l'exigence la plus importante pour un grand événement.

- Connectez l'ordinateur de l'écran de jeu et tous les ordinateurs de régie avec un **câble réseau**. Ne comptez pas sur le wifi de la salle ou sur un partage de connexion mobile pour ces appareils.
- Assurez-vous que les joueurs ont une bonne couverture wifi ou mobile (4G/5G) dans toute la salle. Une salle pleine peut surcharger un petit réseau wifi.
- Cliquez sur **Charger le quiz** bien avant le début. QuizWitz précharge toutes les images, l'audio et la vidéo, pour que les pièces jointes se lisent sans accroc une fois le quiz lancé.

---

## 🔊 Son : tout passe par l'écran de jeu

Tout le son est joué par l'écran de jeu : la musique et les effets sonores de QuizWitz, ainsi que chaque pièce jointe audio ou vidéo que vous ajoutez à vos questions, manches ou quiz (musique de l'écran de connexion, musique de fin de manche, etc.). Tout est synchronisé avec ce qui se passe à l'écran.

Il vous suffit donc de brancher la **sortie audio de l'ordinateur de l'écran de jeu** sur votre table de mixage ou votre sonorisation. Il n'y a pas de sons séparés à déclencher à la main.

- Utilisez le curseur de volume de la barre de contrôle du jeu pour régler le niveau, ou pour couper tous les sons du quiz.
- Pour ne jouer que votre propre audio importé, ajoutez `music=0` au lien du jeu (voir [paramètres avancés](../advanced/020-advanced-parameters.md)). `connectMusic=0` coupe uniquement la musique de l'écran de connexion.

---

## 💡 Éclairage : le contrôleur MIDI

Le contrôleur MIDI sur [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) transforme les événements du jeu en notes MIDI. Associez ces notes à des cues dans votre logiciel ou votre console d'éclairage, et vos lumières suivent le jeu automatiquement.

Nous l'utilisons avec [QLC+](https://www.qlcplus.org/) (un logiciel d'éclairage gratuit qui pilote des projecteurs DMX), mais il envoie du MIDI standard, il fonctionne donc avec la plupart des consoles et logiciels d'éclairage qui acceptent une entrée MIDI, ainsi qu'avec des tables de mixage audio, des mélangeurs vidéo et d'autres équipements de spectacle.

### Connexion

1. Lancez votre partie QuizWitz Live. La Quizmaster App affiche le **code régie** à côté du code quizmaster et du code du jury.
2. Sur l'ordinateur relié à votre système d'éclairage, ouvrez [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) dans **Google Chrome**. Le contrôleur utilise Web MIDI, que d'autres navigateurs peuvent ne pas prendre en charge.
3. Autorisez l'accès MIDI lorsque Chrome le demande.
4. Saisissez le code régie et cliquez sur **Connect**.
5. Sélectionnez le périphérique MIDI de sortie (**Output**) et le canal (canal 1 par défaut).

Si votre logiciel d'éclairage tourne sur le même ordinateur, utilisez un port MIDI virtuel : l'**IAC Driver** sur macOS, ou un outil comme **loopMIDI** sur Windows.

> ⚠️ Gardez l'onglet du contrôleur ouvert pendant toute la partie. Si vous le fermez, les notes MIDI ne sont plus envoyées.

### Fonctionnement

Chaque événement du jeu a son propre numéro de note MIDI fixe. Lorsque l'événement se produit, le contrôleur joue cette note sur le canal de sortie. Le numéro de note est affiché sur chaque bouton du contrôleur.

- **Appuyez sur un bouton** pour envoyer sa note à la main. Utilisez-le pour configurer et tester votre mapping avant le spectacle.
- Un bouton devient **rouge** un instant lorsque le jeu le déclenche.
- La plupart des événements ne sont envoyés qu'une fois d'affilée : si le même événement se produit deux fois de suite, le second est ignoré. Bonne réponse et mauvaise réponse sont envoyées à chaque fois, pour que vous puissiez faire clignoter les lumières à chaque réponse révélée.
- **Feedback** (facultatif) : sélectionnez une entrée MIDI et un canal (canal 2 par défaut). Les notes que votre logiciel d'éclairage renvoie allument en vert les boutons correspondants, pour que vous voyiez quels cues sont actifs.

### Notes MIDI

| Note | Événement |
|---|---|
| 1 | Introduction du jeu |
| 2 | Introduction du jeu : arrêt |
| 3 | Introduction de la manche |
| 4 | Introduction de la manche : arrêt |
| 5 | Introduction de la manche éclair |
| 6 | Introduction de la manche éclair : arrêt |
| 10 | Début de la question |
| 11 | Question en cours |
| 12 | Le minuteur de la question démarre |
| 13 | Le minuteur de la question s'arrête |
| 14 | Question terminée |
| 20 | Minuteur de la question à 25 % |
| 21 | Minuteur de la question à 33 % |
| 22 | Minuteur de la question à 50 % |
| 23 | Minuteur de la question à 66 % |
| 24 | Minuteur de la question à 75 % |
| 30 | Pièce jointe affichée |
| 31 | Pièce jointe masquée |
| 40 | Avant le résultat de la question |
| 41 | Résultat de la question |
| 42 | Bonne réponse révélée |
| 43 | Mauvaise réponse révélée |
| 44 | Résultat de la question : arrêt |
| 45 | Tout le monde a répondu correctement |
| 46 | Personne n'a répondu correctement |
| 47 | Une seule bonne réponse |
| 50 | Résultat de la manche |
| 51 | Résultat de la manche : arrêt |
| 52 | Résultat de la manche éclair |
| 53 | Résultat de la manche éclair : arrêt |
| 60 | Pause |
| 61 | Pause : arrêt |
| 70 | Résultat final |
| 71 | Résultat final : une position est révélée |
| 72 | Résultat final : le gagnant est révélé |
| 73 | Résultat final : arrêt |

### Éclairage par question

Vous pouvez donner à chaque question sa propre ambiance lumineuse. Dans l'éditeur de quiz, ouvrez les réglages de la question et ajoutez **Éclairage** (sous *Présentation*). Lorsque le minuteur de la question démarre, le contrôleur envoie la note de cette ambiance. Les questions sans ambiance lumineuse envoient la note *Par défaut*, pour que vos lumières puissent revenir à leur état normal.

| Note | Éclairage |
|---|---|
| 100 | Par défaut |
| 101 | Compte à rebours |
| 102 | Soirée disco |
| 103 | Zone de guerre |
| 104 | Alerte rouge |
| 105 | Nuit étoilée |
| 106 | Évasion de prison |
| 107 | Matières dangereuses |
| 108 | Rose cosy |
| 109 | Atlantis |
| 110 | Jungle |
| 111 | Océan bleu |
| 112 | Océan jaune |
| 113 | Océan vert |
| 114 | Océan violet |
| 115 | Océan orange |
| 116 | Océan rouge |
| 117 | Rouge contre bleu |

Les noms sont des suggestions : ce que fait chaque note dépend de vous et de votre installation d'éclairage.

---

## 🛠️ Plus d'outils de régie

[**regie.catlab.eu**](https://regie.catlab.eu) propose d'autres outils pour les grands événements. Ils utilisent tous le code régie.

- **Téléprompteur** - un deuxième écran pour le quizmaster avec défilement automatique et mode miroir
- **Écran de régie** - envoyez des messages aux quizmasters sur un ou plusieurs retours de scène
- **Contrôleur OBS** - changez automatiquement de scène OBS pendant la partie (voir [quiz en direct](040-livestreaming.md))
- **Compte à rebours** - affichez les minuteurs QuizWitz sur un écran séparé
- **Écran dupliqué** - affichez une copie de l'écran de jeu sur un autre moniteur

---

## ✅ Exemple d'installation

- **Ordinateur de l'écran de jeu** - relié au projecteur ou au mur LED et à la sonorisation, avec un câble réseau
- **Ordinateur de régie** - le contrôleur MIDI dans Chrome, relié à votre système d'éclairage, avec un câble réseau
- **Tablette ou téléphone** - la Quizmaster App
- **Ordinateur portable ou tablette** - l'app du jury, pour ajuster les scores et contrôler la partie

> 💡 Faites une répétition complète dans la salle avant l'événement, pour tester vos cues d'éclairage, les niveaux sonores et le réseau.

---
id: livestream-tutorial
title: Quiz en livestream
---

# 📺 Animer un quiz en livestream

Avec QuizWitz Live, c'est facile d'animer un quiz en livestream entièrement interactif sur des plateformes comme **Twitch**, **YouTube Live** ou **Facebook Live** — même pour de grandes audiences. Ce guide vous accompagne pour la configuration, la gestion du délai et les bonnes pratiques de présentation.

> 🧭 Si vous êtes nouveau sur l'application Quizmaster, commencez par le [**guide de démarrage Quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 La configuration du quizmaster

Le quizmaster est le cœur de votre événement. Il contrôle le rythme, présente les questions et maintient l'engagement de votre audience.

Utilisez l'**application Quizmaster** pour gérer la partie. Lancez QuizWitz Live depuis l’éditeur de quiz en cliquant sur **Démarrer QuizWitz Live**.

> 💡 L'application Quizmaster est une **application web** — aucune installation nécessaire. Il suffit d'aller sur [**quizwitz.tv**](https://quizwitz.tv) sur votre appareil de présentation et d'entrer le **Code Maître**.

Nous recommandons d'utiliser une **tablette ou un smartphone** pour que le quizmaster puisse se déplacer librement pendant le spectacle.

---

## 🧩 Choisir le bon mode de jeu

Au démarrage de QuizWitz Live, il vous sera demandé de choisir un mode :

- **Mode régulier** — Chaque joueur ou équipe reçoit un code unique. Utile pour les événements d'équipes pré-inscrites.
- **Mode ad-hoc** — Un Code Jeu partagé pour tous les joueurs. Idéal pour les livestreams avec inscription libre.

> Pour les livestreams, choisissez toujours le **Mode ad-hoc** et cliquez sur **Démarrer la partie ad-hoc**.

Une fois le quiz chargé, l'application Quizmaster affichera :

- **Code Maître** — pour le quizmaster
- **Code Jury** — pour la revue des questions ouvertes
- **Code Regie** — pour contrôler les visuels/audio
- **Code Jeu** — pour que les joueurs puissent rejoindre

Votre écran de jeu affiche désormais l'**écran de connexion**, que vous devez diffuser à votre audience.

---

## 🎥 Diffusion vers Twitch (ou autres)

Pour diffuser votre quiz, utilisez un logiciel de diffusion. Nous recommandons :

- **OBS Studio** (Open Broadcast Software) — gratuit et puissant
- Alternatives : Streamlabs, vMix, ou options natives pour Zoom/Meet

Si vous utilisez un **logiciel de réunion** comme Zoom ou Google Meet :

- Partagez simplement votre écran
- Appuyez sur **Démarrer** dans l'application Quizmaster
- Les joueurs peuvent participer en quasi temps réel

Pour **Twitch, YouTube Live ou Facebook Live**, vous subirez un **délai de streaming** (aussi appelé délai de transcodage).

> ✅ Nous recommandons **Twitch** pour de meilleurs résultats — il offre systématiquement de bonnes performances à faible latence et une bonne synchronisation des spectateurs.

---

## ⏱️ Régler le délai des joueurs QuizWitz

Pour compenser le délai du streaming, utilisez le **délai d’interaction joueur** dans l'application Jury.

Voici comment faire :

1. Démarrez l’aperçu de votre stream — pas besoin de diffuser en direct tout de suite
2. Ouvrez l’**application Jury** en entrant votre Code Jury sur [**catlab.tv**](https://catlab.tv)
3. Allez dans **Contrôle du jeu**
4. Ouvrez votre livestream dans une autre fenêtre, avec le son
5. Utilisez un chronomètre
6. Dans l'application Jury, appuyez sur le bouton **Buzzer** et commencez à chronométrer
7. Quand vous entendez le buzzer sur le livestream, arrêtez le chronomètre
8. Arrondissez le délai (en secondes) et entrez-le dans le champ **Délai d'interaction joueur**
9. Cliquez sur **Confirmer le réglage**

> 🎯 Il est préférable de surestimer légèrement le délai. Cela garantit que les joueurs ne voient les options de réponse **qu'après** que vous ayez fini de lire la question.

---

## 🚀 Passage en direct

Une fois le délai réglé et vos joueurs connectés :

- Démarrez votre stream Twitch
- Utilisez l'application Quizmaster pour **lancer le quiz**
- QuizWitz gèrera le timing en arrière-plan — pas besoin de pause entre les questions

---

## 💡 Conseils pour la présentation en livestream

- **Ne laissez pas le quizmaster regarder le flux retardé** — il doit utiliser uniquement l'application Quizmaster en direct pour éviter les pauses gênantes.

- Pour interagir avec le public, suivez les **commentaires en direct** sur un écran séparé — pas via le flux vidéo.

- Vous voulez changer automatiquement les scènes OBS ? Use:\
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Vous voulez déclencher des appareils MIDI pendant la partie ? Try:\
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Vous cherchez plus d'outils ? Visitez [**regie.catlab.eu**](https://regie.catlab.eu) — un hub central avec des utilitaires supplémentaires pour l'automatisation, le changement de scène, les effets, et plus encore.

> Tous les outils nécessitent votre **Code Regie** provenant de l'application Quizmaster.

---

Vous êtes prêt à passer en direct ! Twitch offre une plateforme fluide et réactive pour organiser des quiz à grande échelle. Combinez cela avec QuizWitz Live — et votre soirée quiz est prête à impressionner.

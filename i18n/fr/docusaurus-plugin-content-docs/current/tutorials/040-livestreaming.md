---
id: livestream-tutorial
title: Quiz en direct
---

# 📺 Organiser un quiz en direct

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Ce guide vous accompagne pas à pas dans la configuration, la gestion du décalage, et les meilleures pratiques de présentation.

> 🧭 Si vous découvrez la Quizmaster App, commencez par le [**Guide de démarrage du quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 La configuration du quizmaster

Le quizmaster est le cœur de votre événement. Il contrôle le rythme, présente les questions et maintient l'engagement de votre public.

Utilisez la **Quizmaster App** pour gérer la partie. Lancez QuizWitz Live depuis l'éditeur de quiz en cliquant sur **Démarrer QuizWitz Live**.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Allez simplement sur [**quizwitz.tv**](https://quizwitz.tv) sur l'appareil du quizmaster et entrez le **code quizmaster**.

Nous recommandons d'utiliser une **tablette ou un smartphone** pour que le quizmaster puisse bouger librement pendant le spectacle.

---

## 🧩 Choisir le bon mode de jeu

Lorsque vous démarrez QuizWitz Live, il vous sera demandé de choisir comment les joueurs se connectent :

- **Team codes** - Players or teams each receive a unique code. Utile pour les événements en équipe pré-enregistrés.
- **Single game code** - One shared game code for all players. Idéal pour les livestreams avec inscription ouverte.

> Pour les livestreams, choisissez toujours **Code de jeu partagé** et cliquez sur _Démarrer le jeu ad-hoc_.

Une fois le quiz chargé, la Quizmaster App affichera :

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

Votre écran de jeu affiche maintenant l'**écran de connexion**, qui est ce que vous devez diffuser à votre public.

---

## 🎥 Diffuser sur Twitch (ou autres)

Pour diffuser votre quiz, utilisez un logiciel de diffusion. Nous recommandons :

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Alternatives : Streamlabs, vMix ou options natives pour Zoom/Meet

Si vous utilisez un **logiciel de réunion** comme Zoom ou Google Meet :

- Partagez simplement votre écran
- Appuyez sur **Démarrer** dans la Quizmaster App
- Les joueurs peuvent participer en temps quasi réel

Pour **Twitch, YouTube Live ou Facebook Live**, vous ferez face à un **décalage de diffusion** (aussi appelé décalage de transcodage).

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Régler le délai des joueurs QuizWitz

Pour compenser le délai de diffusion, utilisez **le délai d'interaction du joueur** dans l'app du jury.

Voici comment faire :

1. Start your stream preview - no need to go live yet
2. Ouvrez l'**app du jury** en entrant votre code du jury sur [**quizwitz.tv**](https://quizwitz.tv)
3. Allez dans **Contrôle du jeu**
4. Ouvrez votre livestream dans une autre fenêtre, avec le son
5. Utilisez un chronomètre
6. Dans l'app du jury, appuyez sur le bouton **Buzzer** et démarrez le chronométrage
7. Quand vous entendez le buzzer sur le livestream, arrêtez le chronomètre
8. Arrondissez le délai (en secondes) et entrez-le dans le champ **Délai d'interaction des joueurs**
9. Cliquez sur **Confirmer le réglage**

> 🎯 Il vaut mieux surestimer légèrement le délai. Cela garantit que les joueurs voient les options de réponse **après** que vous ayez fini de lire la question.

---

## 🚀 Passer en direct

Une fois le délai réglé et vos joueurs connectés :

- Lancez votre diffusion Twitch
- Utilisez la Quizmaster App pour **lancer le quiz**
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Conseils pour la présentation en livestream

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- Vous voulez changer automatiquement les scènes OBS ? Utilisez :  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Vous voulez déclencher des appareils MIDI pendant la partie ? Essayez :  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Vous cherchez plus d'outils ? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Tous les outils nécessitent votre **code régie** depuis la Quizmaster App.

---

Vous êtes prêt à passer en direct ! Twitch offre une plateforme fluide et réactive pour organiser des événements quiz à grande échelle. Combine that with QuizWitz Live - and your quiz night is set to impress.

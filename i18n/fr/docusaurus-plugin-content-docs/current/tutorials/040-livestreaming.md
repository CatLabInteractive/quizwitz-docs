---
id: livestream-tutorial
title: Quiz en direct
---

# 📺 Organiser un quiz en direct

Avec QuizWitz Live, il est facile d'organiser un quiz en direct entièrement interactif sur des plateformes comme **Twitch**, **YouTube Live** ou **Facebook Live** — même pour un large public. Ce guide vous accompagne pas à pas dans la configuration, la gestion du décalage, et les meilleures pratiques de présentation.

> 🧭 Si vous découvrez la Quizmaster App, commencez par le [**Guide de démarrage du quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 La configuration du quizmaster

Le quizmaster est le cœur de votre événement. Il contrôle le rythme, présente les questions et maintient l'engagement de votre public.

Utilisez la **Quizmaster App** pour gérer la partie. Lancez QuizWitz Live depuis l'éditeur de quiz en cliquant sur **Démarrer QuizWitz Live**.

> 💡 La Quizmaster App est une **application web** — il n'y a pas d'installation. Allez simplement sur [**quizwitz.tv**](https://quizwitz.tv) sur l'appareil du quizmaster et entrez le **code quizmaster**.

Nous recommandons d'utiliser une **tablette ou un smartphone** pour que le quizmaster puisse bouger librement pendant le spectacle.

---

## 🧩 Choisir le bon mode de jeu

Lorsque vous démarrez QuizWitz Live, il vous sera demandé de choisir comment les joueurs se connectent :

- **Codes d'équipe** — Les joueurs ou les équipes reçoivent chacun un code unique. Utile pour les événements en équipe pré-enregistrés.
- **Code de jeu partagé** — Un code unique partagé par tous les joueurs. Idéal pour les livestreams avec inscription ouverte.

> Pour les livestreams, choisissez toujours **Code de jeu partagé** et cliquez sur _Démarrer le jeu ad-hoc_.

Une fois le quiz chargé, la Quizmaster App affichera :

- **Code quizmaster** — pour le quizmaster
- **Code du jury** — pour réviser les questions ouvertes
- **Code régie** — pour contrôler visuels/sons
- **Code de jeu** — pour que les joueurs rejoignent

Votre écran de jeu affiche maintenant l'**écran de connexion**, qui est ce que vous devez diffuser à votre public.

---

## 🎥 Diffuser sur Twitch (ou autres)

Pour diffuser votre quiz, utilisez un logiciel de diffusion. Nous recommandons :

- **OBS Studio** (Open Broadcast Software) — gratuit et puissant
- Alternatives : Streamlabs, vMix ou options natives pour Zoom/Meet

Si vous utilisez un **logiciel de réunion** comme Zoom ou Google Meet :

- Partagez simplement votre écran
- Appuyez sur **Démarrer** dans la Quizmaster App
- Les joueurs peuvent participer en temps quasi réel

Pour **Twitch, YouTube Live ou Facebook Live**, vous ferez face à un **décalage de diffusion** (aussi appelé décalage de transcodage).

> ✅ Nous recommandons **Twitch** pour de meilleurs résultats — il offre constamment une faible latence et une bonne synchronisation pour les spectateurs.

---

## ⏱️ Régler le délai des joueurs QuizWitz

Pour compenser le délai de diffusion, utilisez **le délai d'interaction du joueur** dans l'app du jury.

Voici comment faire :

1. Lancez votre aperçu de diffusion — pas besoin de passer en direct tout de suite
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
- QuizWitz gère le minutage en arrière-plan — pas besoin de faire de pause entre les questions

---

## 💡 Conseils pour la présentation en livestream

- **Ne laissez pas le quizmaster regarder le flux différé** — il doit utiliser uniquement la Quizmaster App en direct pour éviter les pauses maladroites.

- Pour interagir avec l'audience, surveillez les **commentaires en direct** sur un écran séparé — pas le flux vidéo.

- Vous voulez changer automatiquement les scènes OBS ? Utilisez :  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Vous voulez déclencher des appareils MIDI pendant la partie ? Essayez :  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Vous cherchez plus d'outils ? Visitez [**regie.catlab.eu**](https://regie.catlab.eu) — un hub central avec des utilitaires supplémentaires pour l'automatisation, le changement de scène, les effets, et plus encore.

> Tous les outils nécessitent votre **code régie** depuis la Quizmaster App.

---

Vous êtes prêt à passer en direct ! Twitch offre une plateforme fluide et réactive pour organiser des événements quiz à grande échelle. Combinez cela avec QuizWitz Live — et votre soirée quiz est prête à impressionner.

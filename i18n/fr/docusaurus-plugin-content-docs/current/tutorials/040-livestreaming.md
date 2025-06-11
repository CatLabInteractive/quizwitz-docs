---
id: livestream-tutorial
title: quiz en direct
---

# 📺 Héberger un quiz en direct

Avec QuizWitz Live, il est facile d'héberger un quiz en direct entièrement interactif sur des plateformes comme **Twitch**, **YouTube Live**, ou **Facebook Live** — même pour les grands publics. Ce guide vous guide à travers la configuration, la gestion des retards et les meilleures pratiques de présentation.

> 🧭 Si vous êtes nouveau dans l'application Quizmaster, commencez par le [**Guide de démarrage du questionnaire**](../quizmaster/002-startup.md).

---

## 🎤 La configuration du quizmaster

Le quizmaster est le cœur de votre événement. Ils contrôlent le rythme, présentent les questions et tiennent votre public engagé.

Utilisez l'**application de questionnaire** pour exécuter le jeu. Lancez QuizWitz Live à partir de l'éditeur de quiz en cliquant sur **Démarrer QuizWitz Live**.

> 💡 L'application Quizmaster est une **application web** — il n'y a pas d'installation. Allez simplement sur [**quizwitz.tv**](https://quizwitz.tv) sur votre appareil de présentation et entrez le **Code Maître**.

Nous vous recommandons d'utiliser une **tablette ou smartphone** afin que le quizmaster puisse se déplacer librement pendant l'émission.

---

## 🧩 Choisir le bon mode de jeu

Lorsque vous démarrez QuizWitz Live, il vous sera demandé de choisir un mode :

- **Mode régulier** — Les joueurs ou les équipes reçoivent chacun un code unique. Utile pour les événements d'équipe pré-enregistrés.
- **Mode ad hoc** — Un code de jeu partagé pour tous les joueurs. Meilleur pour les livestreams avec inscription ouverte.

> Pour les livestreams, choisissez toujours **le mode Ad-hoc** et cliquez sur **Démarrer le jeu ad-hoc**.

Une fois le quiz chargé, l'application Quizmaster s'affichera :

- **Code Maître** — pour le quizmaster
- \*\*Code du Jury \*\* — pour l'examen des questions ouvertes
- **Code Regie** — pour contrôler les visuels/audio
- **Code de jeu** — pour que les joueurs rejoignent

Votre écran de jeu affiche maintenant **l'écran de connexion**, ce qui est ce que vous devriez diffuser à votre public.

---

## 🎥 Streaming sur Twitch (ou autres)

Pour diffuser votre quiz, utilisez un logiciel de diffusion. Nous vous recommandons :

- **Studio OBS** (Open Broadcast Software) — gratuit et puissant
- Alternatives : Streamlabs, vMix, ou options natives pour Zoom/Meet

Si vous utilisez un **logiciel de réunion** comme Zoom ou Google Meet:

- Partagez simplement votre écran
- Appuyez sur **Démarrer** dans l'application Quizmaster
- Les joueurs peuvent participer en temps quasi réel

Pour **Twitch, YouTube Live, ou Facebook Live**, vous vivrez un **retard de streaming** (délai de transcodage).

> ✅ Nous recommandons **Twitch** pour les meilleurs résultats — il offre constamment des performances à faible latence et une bonne synchronisation avec le lecteur.

---

## ⏱️ Réglage du délai du joueur QuizWitz

Pour compenser le délai de diffusion, utilisez **le délai d'interaction du joueur** dans l'application Jury.

Voici comment :

1. Démarrez l'aperçu de votre flux — pas besoin de passer en direct pour le moment
2. Ouvrez la **application Jury app** en entrant votre code Jury sur [**catlab.tv**](https://catlab.tv)
3. Allez sur **Contrôle de Jeu**
4. Ouvrez votre livestream dans une autre fenêtre, avec du son
5. Utiliser un chronomètre
6. Dans l'application Jury , appuyez sur le bouton **Buzzer** et démarrez le timing
7. Quand vous entendez le buzzer sur le live ream, arrêtez le chronomètre
8. Arrondir le délai (en secondes) et le saisir dans le champ **Délai d'interaction du joueur**
9. Cliquez sur **Confirmer le paramètre**

> 🎯 Il vaut mieux surestimer légèrement le retard. Cela permet aux joueurs de voir les options de réponse seulement \*\*après avoir fini de lire la question.

---

## 🚀 Aller en direct

Une fois que le délai est réglé et que vos joueurs sont connectés:

- Démarrez votre flux Twitch
- Utilisez l'application Quizmaster pour **lancer le quiz**
- QuizWitz s'occupera du temps en tâche de fond. Pas besoin de faire une pause entre les questions

---

## 💡 Conseils de présentation Livestream

- **Ne laissez pas le quizmaster regarder le flux différé** — il ne devrait utiliser que l'application Live Quizmaster pour éviter les pauses maladroites.

- Pour interagir avec le public, surveillez **les commentaires en direct** sur un écran séparé — pas le flux vidéo.

- Vous voulez changer les scènes d'OBS automatiquement ? Utilisation :\
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Vous voulez déclencher des appareils MIDI pendant le jeu? Essayez:\
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Vous cherchez plus d’outils ? Visitez [**regie.catlab.eu**](https://regie.catlab.eu) — un concentrateur central avec des utilitaires supplémentaires pour l'automatisation, le changement de scène, les effets, et plus encore.

> Tous les outils nécessitent votre **code Regie** depuis l'application Quizmaster.

---

Vous êtes prêt à partir en direct! Twitch offre une plateforme souple et réactive pour l'hébergement d'événements de quiz à grande échelle. Combinez cela avec QuizWitz Live — et votre nuit au quiz est prête à impressionner.

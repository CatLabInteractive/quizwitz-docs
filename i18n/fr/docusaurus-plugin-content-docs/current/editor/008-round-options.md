---
id: round-options
title: Options de la manche
---

# 🔄 Options de la manche

Chaque manche a un **type** spécifique. La valeur par défaut est **Trivia**, mais nous vous invitons à tester et expérimenter tous les types disponibles. Cette page explique les réglages et pièces jointes que vous pouvez configurer pour chaque manche.

📘 Pour une vue d'ensemble détaillée de tous les types de manches, consultez la [documentation sur les types de manches](../round-types/000-round-types.md).

---

## 🔧 Configuration d'une manche

Pour configurer les options d'une manche, cliquez sur l'icône d'engrenage dans le panneau de la manche :

| ![Ouvrir les options de la manche](/images/open-round-options.png) | ![Options de la manche](/images/round-options.png) |
| :----------------------------------------------------------------: | :------------------------------------------------: |
|                _Ouverture des options de la manche_                |       _Panneau de configuration de la manche_      |

---

## ⚙️ Options générales de la manche

Les options suivantes sont disponibles pour la plupart des types de manches :

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ Cela ne prend effet que pour les types de manches et de questions où le feedback serait normalement retardé, comme les questions ouvertes ou les manches éclair.

📘 Consultez les [types de questions](../question-types/000-question-types.md) pour plus d'informations sur le timing et le comportement du feedback.

---

## 🏆 Options de scoring {#scoring}

QuizWitz offre un système de scoring flexible pour que le jeu reste équitable et captivant pour tous les joueurs.

- **Time-based scoring** - Players earn more points for faster answers.
  - Pour la plupart des types de questions, les points basés sur le temps diminuent **en continu par microseconde** : plus vous répondez vite, plus vous marquez.
  - Pour les **questions ouvertes**, les points basés sur le temps sont divisés en blocs. Par exemple : les réponses dans le premier bloc (par ex., les premières secondes) gagnent **100%** de la part basée sur le temps, le bloc suivant gagne **80%**, et ainsi de suite. Cela aide à niveler le terrain pour les personnes qui tapent plus lentement.

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - Par défaut, **75%** des points sont fixes (tous ceux qui répondent correctement reçoivent ces points, peu importe la vitesse).
  - Seuls les **25%** restants sont influencés par la rapidité des réponses des joueurs.

> 💡 Ajuster ce réglage vous permet de rendre les manches plus basées sur les connaissances ou plus basées sur la rapidité, selon votre style de quiz.

Ces options de scoring se trouvent dans le panneau d'options de la manche lorsqu'on édite une manche.

---

## 📜 Instructions pour le quizmaster

Vous pouvez ajouter un **texte d'introduction de manche** personnalisé qui n'apparaîtra que sur la [Quizmaster App](../quizmaster/001-introduction.md) au début de la manche. Utilisez ceci pour informer le quizmaster ou ajouter une touche personnelle.

---

## 📎 Pièces jointes

Améliorez votre manche avec des médias affichés à des moments spécifiques :

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- ...

📘 Pour les types de fichiers pris en charge et des conseils d'utilisation, consultez le [guide des pièces jointes](../editor/006-attachments.md).

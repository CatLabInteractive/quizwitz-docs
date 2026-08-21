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

- **Afficher seulement _X_ questions** — Limite la manche à un nombre spécifique de questions
- **Ordre aléatoire des questions** — Mélange l'ordre des questions dans la manche
- **Afficher l’intro de la manche** — Affiche un titre animé avant le début de la manche
- **Afficher l’outro de la manche (score intermédiaire)** — Révèle les classements à la fin de la manche
- **Regrouper tout le feedback sur un seul écran** — Rassemble le feedback des questions en un bloc à la fin de la manche
- **Afficher tout le feedback des questions à la fin de la manche** — Retarde le feedback jusqu'à la fin de la manche
- **Forcer le feedback après chaque question individuelle** — Garantit un feedback immédiat
  > ⚠️ Cela ne prend effet que pour les types de manches et de questions où le feedback serait normalement retardé, comme les questions ouvertes ou les manches éclair.

📘 Consultez les [types de questions](../question-types/000-question-types.md) pour plus d'informations sur le timing et le comportement du feedback.

---

## 🏆 Options de scoring {#scoring}

QuizWitz offre un système de scoring flexible pour que le jeu reste équitable et captivant pour tous les joueurs.

- **Scoring basé sur le temps** — Les joueurs gagnent plus de points s’ils répondent plus vite.
  - Pour la plupart des types de questions, les points basés sur le temps diminuent **en continu par microseconde** : plus vous répondez vite, plus vous marquez.
  - Pour les **questions ouvertes**, les points basés sur le temps sont divisés en blocs. Par exemple : les réponses dans le premier bloc (par ex., les premières secondes) gagnent **100%** de la part basée sur le temps, le bloc suivant gagne **80%**, et ainsi de suite. Cela aide à niveler le terrain pour les personnes qui tapent plus lentement.

- **Pourcentage fixe de points dans le scoring basé sur le temps** — Vous contrôlez la part du score total influencée par la vitesse.
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

- **Avant la manche** — Affiché après l’animation d’intro de la manche
- **Après la manche** — Affiché après l’outro de la manche
- **Avant l’outro de la manche** — Affiché après la dernière question, juste avant l’outro
- **Pendant l’outro de la manche** — _(audio uniquement)_ Joue pendant l’affichage des classements
- ...

📘 Pour les types de fichiers pris en charge et des conseils d'utilisation, consultez le [guide des pièces jointes](../editor/006-attachments.md).

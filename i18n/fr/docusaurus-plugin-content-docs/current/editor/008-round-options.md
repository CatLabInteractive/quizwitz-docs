---
id: round-options
title: Options du Round
---

# 🔄 Options du Round

Chaque manche a un **type** spécifique. La valeur par défaut est **Trivia**, mais nous vous invitons à tester et expérimenter tous les types disponibles. Cette page explique les réglages et pièces jointes que vous pouvez configurer pour chaque manche.

📘 Pour une vue d'ensemble détaillée de tous les types de manches, consultez la [documentation sur les types de manches](../round-types/000-round-types.md).

---

## 🔧 Configuration d'une manche

Pour configurer les options d'une manche, cliquez sur l'icône d'engrenage dans le panneau de la manche :

| ![Open round options](/images/open-round-options.png) | ![Round options](/images/round-options.png) |
| :---------------------------------------------------: | :-----------------------------------------: |
|            _Ouverture des options du round_           |     _Panneau de configuration du round_     |

---

## ⚙️ Options générales du round

Les options suivantes sont disponibles pour la plupart des types de manches :

- **Afficher seulement _X_ questions** — Limite la manche à un nombre spécifique de questions
- **Ordre aléatoire des questions** — Mélange l'ordre des questions dans la manche
- **Afficher l’intro de la manche** — Affiche un titre animé avant le début de la manche
- **Afficher l’outro de la manche (score intermédiaire)** — Révèle les classements à la fin de la manche
- **Regrouper tous les retours en un seul écran** — Récupère les retours sur les questions en un bloc après la manche
- **Afficher tous les retours sur les questions à la fin de la manche** — Retarde les retours jusqu’à la fin de la manche
- **Forcer le retour après chaque question individuelle** — Assure un retour immédiat
  > ⚠️ Cela ne prend effet que dans les types de manches et de questions où les retours sont normalement retardés, comme les questions ouvertes ou les lightning rounds.

📘 Consultez les [types de questions](../question-types/000-question-types.md) pour plus d’informations sur le timing et le comportement des retours.

---

## 🏆 Options de scoring {#scoring}

QuizWitz offre un système de scoring flexible pour garder les choses justes et engaging pour tous les joueurs.

- **Scoring basé sur le temps** — Les joueurs gagnent plus de points s’ils répondent plus vite.
  - Pour la plupart des types de questions, les points basés sur le temps diminuent **en continu par microseconde** : plus vous répondez vite, plus vous marquez.
  - Pour les **questions ouvertes**, les points basés sur le temps sont divisés en blocs. Par exemple : les réponses dans le premier bloc (par ex., les premières secondes) gagnent **100%** de la part basée sur le temps, le bloc suivant gagne **80%**, et ainsi de suite. Cela aide à niveler le terrain pour les personnes qui tapent plus lentement.

- **Pourcentage fixe de points dans le scoring basé sur le temps** — Vous contrôlez la part du score total influencée par la vitesse.
  - Par défaut, **75%** des points sont fixes (tous ceux qui répondent correctement reçoivent ces points, peu importe la vitesse).
  - Seuls les **25%** restants sont influencés par la rapidité des réponses des joueurs.

> 💡 Ajuster ce réglage vous permet de rendre les manches plus basées sur les connaissances ou plus basées sur la rapidité, selon votre style de quiz.

Ces options de scoring se trouvent dans le panneau d’options du round lorsqu’on édite une manche.

---

## 📜 Instructions pour le quizmaster

Vous pouvez ajouter un **texte d'introduction d'arronde** personnalisé qui n'apparaîtra que sur l'[application de questionnaire](../quizmaster/001-introduction.md) au début de la manche. Utilisez ceci pour informer le quizmaster ou ajouter une touche personnelle.

---

## 📎 Pièces jointes

Améliorez votre manche avec des médias affichés à des moments spécifiques :

- **Avant la manche** — Affiché après l’animation d’intro de la manche
- **Après la manche** — Affiché après l’outro de la manche
- **Avant l’outro de la manche** — Affiché après la dernière question, juste avant l’outro
- **Pendant l’outro de la manche** — _(audio uniquement)_ Joue pendant l’affichage des classements
- ...

📘 Pour les types de fichiers supportés et conseils d’utilisation, consultez le [guide des pièces jointes](../editor/006-attachments.md).

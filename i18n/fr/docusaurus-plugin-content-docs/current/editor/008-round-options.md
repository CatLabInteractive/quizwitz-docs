---
id: round-options
title: Options de la manche
---

# 🔄 Options d'arrondi

Chaque manche a un **type** spécifique. La valeur par défaut est **Choix multiple (Trivia)**, mais n'hésitez pas à tester et expérimenter tous les types disponibles. Cette page explique les paramètres et les pièces jointes que vous pouvez configurer par joute.

📘 Pour une vue d'ensemble détaillée de tous les types d'arronde, visitez la [documentation sur les types d'arrondisse](../round-types/000-round-types.md).

---

## 🔧 Configuration d'une manche

Pour configurer les options d'une ronde, cliquez sur l'icône d'engrenage dans le panneau rond:

| ![Options de la manche ouverte](/images/open-round-options.png) | ![Options de la manche](/images/round-options.png) |
| :-------------------------------------------------------------: | :------------------------------------------------: |
|                _Options d'ouverture de la manche_               |          _Panneau de configuration ronde_          |

---

## ⚙️ Options de la manche générale

Les options suivantes sont disponibles pour la plupart des types d'arrondi :

- **Afficher uniquement _X_ questions** — Limite la ronde à un nombre spécifique de questions
- **Ordre de question aléatoire** — Mélange l'ordre des questions dans la manche
- **Afficher l'intro de la manche** — Afficher un titre animé avant le début de la manche
- **Afficher la ronde outro (score intermédiaire)** — Révéler les classements à la fin de la manche
- **Grouper tous les commentaires en un seul écran** — Collecter les commentaires de la question dans un bloc après la fin de la manche
- **Afficher tous les commentaires sur les questions à la fin de la manche** — Délai le retour des questions jusqu'à la fin de la manche
- **Forcer les retours après chaque question individuelle** — Assurer un retour immédiat
  > ⚠️ Ceci ne prend effet que dans les rondes et les types de questions où les retours seraient autrement retardés, tels que les questions ouvertes ou les tours de foudre.

📘 Voir [types de questions](../question-types/000-question-types.md) pour plus d'informations sur le moment et le comportement des commentaires.

---

## 🏆 Options de cotation {#scoring}

QuizWitz offre des notes flexibles pour garder les choses équitables et engageantes pour tous les joueurs.

- **Score basé sur le temps** — Les joueurs gagnent plus de points pour des réponses plus rapides.
  - Pour la plupart des types de questions, les points temporels diminuent **continuellement par microseconde**: plus vous répondez rapidement, plus vous marquez de points.
  - Pour les **questions ouvertes seulement**, les points basés sur le temps sont divisés en blocs. Par exemple: les réponses dans le premier bloc (par exemple, les premières secondes) gagnent **100%** de la portion basée sur le temps, le prochain bloc gagne **80%**, et ainsi de suite. Cela aide à uniformiser les conditions de jeu pour les typers plus lents.

- **Pourcentage fixe de points sur le pointage basé sur le temps** — Vous contrôlez la quantité du score total influencée par la vitesse.
  - Par défaut, **75%** des points sont corrigés (tous ceux qui répondent correctement obtiennent ces points, quelle que soit la vitesse).
  - Seuls les **25%** restants sont influencés par la rapidité avec laquelle les joueurs réagissent.

> 💡 Ajuster ce paramètre vous permet de faire des tours plus basées sur la connaissance ou plus sur la vitesse, selon votre style de quiz.

Ces options de notation peuvent être trouvées dans le panneau des options de la manche lors de l'édition d'une manche.

---

## 📜 Instructions du Quizmaster

Vous pouvez ajouter un **texte d'introduction d'arronde** personnalisé qui n'apparaîtra que sur [l'application Quizmaster](../quizmaster/001-introduction.md) au début de la manche. Utilisez ceci pour informer le présentateur ou ajouter une touche personnelle.

---

## 📎 Pièces jointes

Améliorez votre manche avec les médias affichés à des moments précis :

- **Avant le round** — Affiché après l'animation d'intro de la manche
- **Après le round** — Affiché après la ronde outro
- **Avant l'outro** — Affiché après la dernière question, juste avant l'outro
- **Pendant la manche** — _(audio seulement)_ Joue lorsque les classements sont affichés
- ...

📘 Pour les types de fichiers pris en charge et les conseils d'utilisation, consultez le [guide des pièces jointes](../editor/006-attachments.md).

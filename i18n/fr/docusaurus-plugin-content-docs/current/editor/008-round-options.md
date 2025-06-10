---
id: round-options
title: Options du round
---

# 🔄 Options du round

Chaque round a un **type** spécifique. Le défaut est **Choix multiples (Trivia)**, mais n'hésitez pas à tester et expérimenter avec tous les types disponibles. Cette page explique les paramètres et pièces jointes que vous pouvez configurer par round.

📘 Pour une vue détaillée de tous les types de round, visitez la [documentation des types de round](../round-types/000-round-types.md).

---

## 🔧 Configuration d'un round

Pour configurer les options d'un round, cliquez sur l'icône d'engrenage dans le panneau du round :

| ![Ouvrir les options du round](/images/open-round-options.png) | ![Options du round](/images/round-options.png) |
| :------------------------------------------------------------: | :--------------------------------------------: |
|                     _Opening round options_                    |           _Round configuration panel_          |

---

## ⚙️ Options générales du round

Les options suivantes sont disponibles pour la plupart des types de round :

- **Afficher seulement _X_ questions** — Limite le round à un nombre spécifique de questions
- **Ordre aléatoire des questions** — Mélange l'ordre des questions dans le round
- **Afficher l'intro du round** — Affiche un titre animé avant le début du round
- **Afficher l'outro du round (score intermédiaire)** — Révèle le classement à la fin du round
- **Regrouper tous les retours dans un seul écran** — Regroupe les retours des questions en un seul bloc après la fin du round
- **Afficher tous les retours des questions à la fin du round** — Retarde les retours des questions jusqu'à la fin du round
- **Forcer les retours après chaque question individuelle** — Assure un retour immédiat
  > ⚠️ Ceci n'a d'effet que dans les types de round et de questions où le retour est autrement retardé, comme les questions ouvertes ou les rounds éclairs.

📘 Consultez les [types de questions](../question-types/000-question-types.md) pour plus d'informations sur le timing et le comportement des retours.

---

## 🏆 Options de score {#scoring}

QuizWitz offre un système de score flexible pour garder les choses justes et engageantes pour tous les joueurs.

- **Score basé sur le temps** — Les joueurs gagnent plus de points pour des réponses rapides.
  - Pour la plupart des types de questions, les points basés sur le temps diminuent **continuellement par microseconde** : plus vous répondez vite, plus vous marquez de points.
  - Pour **les questions ouvertes uniquement**, les points basés sur le temps sont divisés en blocs. Par exemple : les réponses dans le premier bloc (par ex., premières secondes) gagnent **100%** de la partie temps, le bloc suivant gagne **80%**, et ainsi de suite. Cela aide à niveler le terrain pour les dactylographes plus lents.

- **Pourcentage fixe de points sur le score basé sur le temps** — Vous contrôlez combien du score total est influencé par la rapidité.
  - Par défaut, **75%** des points sont fixes (tous ceux qui répondent correctement obtiennent ces points, indépendamment de la vitesse).
  - Seuls les **25%** restants sont influencés par la rapidité des joueurs.

> 💡 Ajuster ce paramètre vous permet de rendre les rounds plus basés sur la connaissance ou plus axés sur la rapidité, selon votre style de quiz.

Ces options de score se trouvent dans le panneau des options du round lors de la modification d'un round.

---

## 📜 Instructions du quizmaster

Vous pouvez ajouter un **texte d'introduction de manche** personnalisé qui apparaîtra uniquement dans l'application [Quizmaster](../quizmaster/001-introduction.md) au début de la manche. Utilisez ceci pour informer le présentateur ou ajouter une touche personnelle.

---

## 📎 Pièces jointes

Améliorez votre round avec des médias affichés à des moments précis :

- **Avant le round** — Affiché après l'animation de l'intro du round
- **Après le round** — Affiché après l'outro du round
- **Avant l'outro du round** — Affiché après la dernière question, juste avant l'outro
- **During round outro** — _(audio only)_ Plays while rankings are displayed
- ...

📘 Pour les types de fichiers pris en charge et des astuces d'utilisation, consultez le [guide des pièces jointes](../editor/006-attachments.md).

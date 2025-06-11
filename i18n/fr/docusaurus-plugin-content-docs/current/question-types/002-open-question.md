---
id: open-question
title: Questions ouvertes
---

# 💬 Question ouverte

Une question ouverte permet aux joueurs de taper leur réponse librement en utilisant leur clavier. Ce mode est parfait pour les questions où vous voulez des réponses écrites — par exemple, des noms, des chiffres ou de courtes explications.

---

![Exemple: Ouvrir une question sur la musique](/images/question-modes/open-question/open-question.png)

---

## 📝 Comment ça marche

- **Question:** Demandez une réponse spécifique dans un champ texte libre (exemple: « Quel duo effectue cette chanson ?»).
- **Réponse:** Les joueurs saisissent leur réponse. Vous pouvez fournir plusieurs réponses acceptées pour la validation automatique.
- **Pièces jointes :** Ajouter de l'audio, des images ou de la vidéo comme indice (par exemple, jouer un clip musical).
- **Commentaire :** Les joueurs voient après avoir répondu si leur réponse a été marquée correcte ou non. Vous pouvez également fournir des commentaires ou des explications supplémentaires.

---

## ⚙️ Paramètres étendus

Les questions ouvertes offrent une gamme de paramètres pour répondre à votre quiz:

- **Réponses acceptées multiples:** Ajouter des orthographes, abréviations ou synonymes alternatifs pour une correction automatique plus flexible.
- **Score basé sur le temps :** Récompenses de réponses plus rapides (voir « Score » ci-dessous).
- **Forcer la correction automatique :** Activez ceci pour permettre au jeu de marquer automatiquement les réponses correctes en fonction de votre liste fournie.
    - S'il n'est pas activé (par défaut pour la plupart des jeux en direct), les réponses ouvertes doivent être vérifiées et marquées manuellement en utilisant l'application [Jury app](../quizmaster/004-jury-app.md).

Pour en savoir plus sur ces options, voir [écrire des questions] (../editor/005-writing-questions.md).

---

## 🏆 Score pour les questions ouvertes

Le score en questions ouvertes est conçu pour être équitable, même pour les typers plus lents :

- Le **score basé sur le temps** divise les points disponibles en blocs, pas un compte à rebours strict par milliseconde.
- Par exemple, répondre dans le premier bloc (par exemple les 5 premières secondes) donne des points complets; le bloc suivant donne 80%, et ainsi de suite. Cela permet de réduire la pénalité pour les typers lents.
- Par défaut, seuls **25%** des points dépendent de la vitesse — le reste de **75%** est fixé, pour que tous ceux qui répondent correctement obtiennent la plupart des points, indépendamment de la vitesse de frappe.

> ⚙️ **Astuce :** Vous pouvez ajuster davantage le comportement de notation et d'autres paramètres dans les [options d'arrondissement](../editor/008-round-options.md).

---

## 🧑‍⚖️ Revue du Jury dans QuizWitz Live

Dans **QuizWitz Live**, les questions ouvertes nécessitent généralement une révision manuelle avec l'application [Jury app](../quizmaster/004-jury-app.md):

- L'application Jury permet aux membres du jury d'accepter, de rejeter ou d'ajuster la notation pour les réponses ouvertes.
- Le jumelage phonétique et alternatif aide mais le jugement humain est essentiel pour une notation et une créativité équitables.
- Pour obtenir des instructions et des fonctionnalités complètes, consultez la [documentation de l'application du Jury ](../quizmaster/004-jury-app.md).

---

## 💡 Conseils pour les grandes questions ouvertes

- **Soyez précis :** Dites aux joueurs exactement ce que vous voulez qu'ils répondent.
- **Anticiper les variations :** Ajouter des abréviations courantes, des orthographes alternatives ou des synonymes aux réponses acceptées.
- **Utilisez des pièces jointes:** Ajoutez de l'audio, des images ou des vidéos pour rendre votre question plus claire ou plus intéressante.
- **Coordonnez avec votre jury:** Assurez-vous que votre jury sache quoi accepter pour des réponses subjectives ou délicates.

---

Pour en savoir plus sur les pièces jointes et les commentaires, consultez la [documentation des pièces jointes](../editor/006-attachments.md).

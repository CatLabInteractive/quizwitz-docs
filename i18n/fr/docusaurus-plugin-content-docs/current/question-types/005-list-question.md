---
id: list-question
title: Question de liste
---

# 📝 Question de liste

Une **Question de liste** demande aux joueurs de fournir plusieurs réponses correctes parmi une liste plus grande — parfaite pour des consignes telles que « Liste les 5 premiers présidents des États-Unis d’Amérique » ou « Nomme trois éléments du tableau périodique.»

---

![Exemple: Question de liste avec présidents US](/images/question-modes/list-question/list-question.png)

---

## 📝 Comment ça marche

- **Question :** Indique clairement ce que tu veux que les joueurs énumèrent.
- **Éléments de la liste :** Entre toutes les réponses correctes possibles.
  - Marque certaines comme **« Données »** pour les afficher comme exemples à l’écran ; celles-ci ne doivent PAS être répondus.
  - L’ordre **n’a pas** d’importance — les joueurs peuvent entrer les bonnes réponses dans n’importe quel ordre.
- **Saisie du joueur :** Les joueurs doivent fournir un nombre défini de réponses (par ex., entre 1 et 5). Des points sont attribués pour chaque bonne réponse qu’ils soumettent.
- **Pièces jointes :** Ajoute des images, audio, ou vidéo pour le contexte. Remplis l’attribution si tu publies.

---

## ⚙️ Paramètres avancés

- **Réponses minimum et maximum :** Définit combien de réponses un joueur doit donner.
- **Points par réponse :** Les points peuvent être donnés pour chaque bonne réponse, ou seulement quand le minimum est atteint.
- **Options données :** Utilise comme exemples dans la question.
- **Correction :**
  - **Correction automatique forcée :** Quand activée, QuizWitz vérifie automatiquement toutes les réponses (acceptant petites fautes et variations). Pas besoin de jury.
  - **Révision manuelle :** Quand non activée, chaque réponse donnée doit être vérifiée par l’[app jury](../quizmaster/004-jury-app.md).

---

## 🏆 Score

- **Points par bonne réponse :** Les joueurs gagnent des points pour chaque bonne réponse.
- **Time-based scoring** (if enabled):\
  Follows the **open question rules** for fairness:
  - Les points disponibles sont divisés en blocs temporels (pas par milliseconde).\
    The available points are split into blocks of time (not by the millisecond).\
    For example: full points in the first block, 80% in the next, and so on.
  - **Seulement 25 %** des points dépendent de la rapidité.\
    **Only 25%** of the points depend on speed.\
    The other **75%** is fixed — so even slower typers get most of the points if they answer correctly.
  - Cela réduit la pénalité liée à la vitesse de frappe et rend le score plus équitable pour tous.

Pour plus de détails, vois [options de score du tour](../editor/008-round-options.md#scoring).

---

## 💡 Conseils pour les questions de liste

- **Sois précis :** Défini clairement les réponses valides.
- **Montre des exemples :** Utilise la fonction « Données ».
- **Variante de listes :** Inclut les orthographes/variantes courantes.
- **Réduis le travail du jury :** Utilise la correction automatique si possible.

---

Pour en savoir plus, consulte la [documentation de l'app jury](../quizmaster/004-jury-app.md).

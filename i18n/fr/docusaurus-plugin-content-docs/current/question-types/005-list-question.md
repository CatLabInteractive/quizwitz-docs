---
id: list-question
title: Question de liste
---

# 📝 Question de liste

Une **question de liste** demande aux joueurs de fournir plusieurs bonnes réponses issues d'une liste plus étendue — parfait pour des consignes comme « Listez les 5 premiers présidents des États-Unis d'Amérique » ou « Nommez trois éléments du tableau périodique. »

---

![Exemple : Question de liste avec les présidents américains](/images/question-modes/list-question/list-question.png)

---

## 📝 Comment ça marche

- **Question :** Indiquez clairement ce que vous voulez que les joueurs listent.
- **Éléments à lister :** Saisissez toutes les réponses correctes possibles.
  - Marquez certains comme **« Donnés »** pour les afficher en exemple à l'écran ; ils n'ont PAS besoin d'être répondus.
  - L'ordre n'a **pas** d'importance — les joueurs peuvent saisir les réponses correctes dans n'importe quel ordre.
- **Réponse du joueur :** Les joueurs doivent fournir un nombre défini de réponses (par ex. entre 1 et 5). Des points sont attribués pour chaque réponse correcte soumise.
- **Pièces jointes :** Ajoutez images, audio ou vidéo pour le contexte. Remplissez la mention d’attribution si vous publiez.

---

## ⚙️ Paramètres avancés

- **Réponses minimum et maximum :** Définissez combien de réponses un joueur doit fournir.
- **Points par réponse :** Les points peuvent être attribués pour chaque réponse correcte, ou seulement quand le nombre minimum est atteint.
- **Options données :** Utilisez-les comme exemples dans la question.
- **Correction :**
  - **Forcer la correction automatique :** Quand activé, QuizWitz vérifie automatiquement toutes les réponses (en acceptant petites fautes et variations). Pas besoin de jury.
  - **Révision manuelle :** Lorsqu'elle n'est pas activée, chaque réponse fournie doit être examinée par [l'application Jury App](../quizmaster/004-jury-app.md).

---

## 🏆 Scoring

- **Points par réponse correcte :** Les joueurs gagnent des points pour chaque bonne réponse.
- **Scoring basé sur le temps** (si activé) :  
  Suit les **règles des questions ouvertes** pour plus d'équité :
  - Les points disponibles sont divisés en tranches de temps (pas au milliseconde).  
    Par exemple : plein de points dans la première tranche, 80 % dans la suivante, etc.
  - **Seuls 25 %** des points dépendent de la rapidité.  
    Les autres **75 %** sont fixes — même les joueurs plus lents obtiennent la majorité des points s’ils répondent correctement.
  - Cela réduit la pénalité liée à la vitesse de frappe et rend le scoring plus équitable pour tous.

Pour plus de détails, voyez [options de scoring des manches](../editor/008-round-options.md#scoring).

---

## 💡 Astuces pour les questions de liste

- **Soyez précis :** Définissez clairement les réponses valides.
- **Montrez des exemples :** Utilisez la fonction « Donné ».
- **Lister les variantes :** Incluez les orthographes/variantes courantes.
- **Réduisez le travail du jury :** Utilisez la correction automatique si possible.

---

Pour en savoir plus, voir [Documentation de l'application du Jury ](../quizmaster/004-jury-app.md).

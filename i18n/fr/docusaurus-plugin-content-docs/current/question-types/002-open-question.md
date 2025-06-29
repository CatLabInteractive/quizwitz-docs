---
id: open-question
title: Question ouverte
---

# 💬 Question ouverte

Une question ouverte permet aux joueurs de taper librement leur réponse avec leur clavier. Ce mode est parfait pour les questions où vous souhaitez des réponses écrites — par exemple, des noms, des nombres ou de courtes explications.

---

![Exemple : Question ouverte sur la musique](/images/question-modes/open-question/open-question.png)

---

## 📝 Comment ça marche

- **Question :** Demandez une réponse spécifique dans un champ de texte libre (exemple : « Quel duo interprète cette chanson ? »).
- **Réponse :** Les joueurs tapent leur réponse. Vous pouvez fournir plusieurs réponses acceptées pour une validation automatique.
- **Pièces jointes :** Ajoutez de l’audio, des images ou des vidéos comme indice (par exemple, un extrait musical).
- **Retour :** Les joueurs voient, après avoir répondu, si leur réponse a été marquée comme correcte ou non. Vous pouvez aussi fournir des retours supplémentaires ou des explications.

---

## ⚙️ Paramètres étendus

Les questions ouvertes offrent une gamme de paramètres pour s’adapter à votre quiz :

- **Plusieurs réponses acceptées :** Ajoutez des orthographes alternatives, des abréviations ou des synonymes pour une correction automatique plus flexible.
- **Score basé sur le temps :** Récompensez les réponses plus rapides (voir « Score » ci-dessous).
- **Forcer la correction automatique :** Activez cette option pour que le jeu marque automatiquement les réponses correctes selon la liste que vous avez fournie.
    - Si non activé (par défaut pour la plupart des parties en direct), les réponses ouvertes doivent être examinées et notées manuellement via l’[application Jury](../quizmaster/004-jury-app.md).

Pour en savoir plus sur ces options, voyez [comment écrire des questions](../editor/005-writing-questions.md).

---

## 🏆 Score pour les questions ouvertes

Le système de score pour les questions ouvertes est conçu pour être équitable, même pour les personnes qui tapent lentement :

- **Le score basé sur le temps** divise les points disponibles en blocs, pas un décompte strict par milliseconde.
- Par exemple, répondre durant le premier bloc (par ex. les 5 premières secondes) donne le plein de points ; le bloc suivant donne 80 % des points, et ainsi de suite. Cela aide à réduire la pénalité pour les personnes qui tapent lentement.
- Par défaut, seulement **25 %** des points dépendent de la vitesse — les **75 %** restants sont fixes, donc tous les joueurs qui répondent correctement obtiennent la majorité des points, quelle que soit leur vitesse de frappe.

> ⚙️ **Astuce :** Vous pouvez ajuster davantage le comportement du score et d’autres paramètres dans les [options de manche](../editor/008-round-options.md).

---

## 🧑‍⚖️ Revue par le jury dans QuizWitz Live

Dans **QuizWitz Live**, les questions ouvertes nécessitent généralement une revue manuelle avec l’[application Jury](../quizmaster/004-jury-app.md) :

- L’application Jury permet aux membres du jury d’accepter, refuser, ou ajuster la notation des réponses ouvertes.
- La reconnaissance phonétique et alternative aide, mais le jugement humain est essentiel pour une notation juste et créative.
- Pour toutes les instructions et fonctionnalités, consultez la [documentation de l’application Jury](../quizmaster/004-jury-app.md).

---

## 💡 Conseils pour de super questions ouvertes

- **Soyez précis :** Dites aux joueurs exactement ce que vous voulez qu’ils répondent.
- **Anticipez les variantes :** Ajoutez les abréviations courantes, orthographes alternatives ou synonymes aux réponses acceptées.
- **Utilisez des pièces jointes :** Ajoutez de l’audio, des images ou des vidéos pour rendre votre question plus claire ou attrayante.
- **Coordonnez-vous avec votre jury :** Assurez-vous que votre jury sait quoi accepter pour les réponses subjectives ou délicates.

---

Pour plus d’informations sur les pièces jointes et les retours, voyez la [documentation sur les pièces jointes](../editor/006-attachments.md).

---
id: image-map-question
title: Question de la carte des images
---

# 🗺️ Image map

Dans une question de **carte des images**, les joueurs doivent sélectionner le bon endroit (ou les endroits) sur une image affichée sur leur console. C'est idéal pour les défis de l'identification visuelle, tels que « Sélectionner le flacon Erlenmeyer ».

---

![Exemple: Image map question with flasks](/images/question-modes/image-map/image-map-example.png)

---

## 📝 Comment ������������fonctionne

- **Question :** Indiquez clairement ce que les joueurs doivent trouver sur l'image.\
  _(Exemple : « Sélectionnez la flasque Erlenmeyer.»)_\
  _(Exemple : « Sélectionnez la flasque Erlenmeyer.»)_\
  _(Exemple : « Sélectionnez la flasque Erlenmeyer.»)_
- **Image:** Téléchargez une image de haute qualité qui sera affichée à tous les joueurs.
- **Points de réponse :** Définissez une ou plusieurs **zones cibles** (« points») sur l'image. Chaque zone peut être définie comme un cercle ou une autre forme, et vous déterminez sa position et sa taille.
- **Sélection des réponses:** Les joueurs tapent ou cliquent pour marquer la(les) réponse(s) sur l'image.
  - Si la réponse est **dans une zone correcte**, ils reçoivent des points complets.
  - Si la réponse est **en dehors de la zone correcte** mais dans le rayon "presque correct", ils peuvent gagner des points partiels en fonction de la distance (définie par le paramètre _score easing_).
- **Réponses multiples :** Si la question nécessite plus d'une réponse, les joueurs doivent sélectionner chaque zone correcte.
  - En sélectionnant la même zone plusieurs fois, **n'accordera pas** des points supplémentaires.
- **Méthode d'évaluation :** Vous pouvez configurer si les points sont attribués pour chaque zone correcte, individuellement, ou seulement lorsque le nombre minimum requis de réponses correctes est sélectionné.

---

## ⚙️ Paramètres étendus

- **Nombre de réponses:** Définit le nombre minimum et maximum de points requis qu'un joueur doit identifier.
- **Réduction du score :** Ajuste le crédit partiel pour les réponses « presque correctes », en fonction de la proximité de la sélection avec la zone correcte (ne s'applique qu'à la distance entre la bonne et la presque correcte).
- **Points par zone :** Décider si les points sont attribués par zone correctement identifiée, ou seulement si toutes les zones minimum requises sont sélectionnées.
- **Options de pièce jointe :** Ajouter des images, de l'audio ou de la vidéo pour un contexte plus riche. Définir les attributions lors de la publication.

Voir [écrire des questions](../editor/005-writing-questions.md) pour les paramètres généraux de la question.

---

## ⏱️ Score basé sur le temps

**Le pointage basé sur le temps est activé par défaut.** Les joueurs qui répondent rapidement gagnent plus de points, mais il y a toujours un composant fixe (par défaut : 75%) pour une réponse correcte. Seulement 25% du score total est influencé par la rapidité de votre réponse.\
Vous pouvez désactiver le pointage basé sur le temps pour ce type de question si vous le souhaitez.\
Vous pouvez désactiver le pointage basé sur le temps pour ce type de question si vous le souhaitez.\
Vous pouvez désactiver le pointage basé sur le temps pour ce type de question si vous le souhaitez.\
Vous pouvez désactiver le pointage basé sur le temps pour ce type de question si vous le souhaitez.

📘 Pour plus de détails sur les paramètres de notation et de temps, consultez la [documentation des options de ronde](../editor/008-round-options.md#scoring).

---

## 💡 Conseils pour les grandes questions sur la carte des images

- **Utilisez des images claires et non encombrées** pour faciliter l'identification.
- **Définissez soigneusement les zones de réponse** pour éviter le chevauchement ou la confusion.
- **Donnez des commentaires constructifs** pour aider les joueurs à apprendre des erreurs.
- **Crédit partiel:** Utilisez l'option « presque correcte» pour récompenser presque les manques et garder les choses équitables.

---

Les questions sur la carte des images sont parfaites pour étiqueter des diagrammes, identifier des régions ou des jeux visuels de type « trouver l’objet » !

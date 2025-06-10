---
id: image-map-question
title: Question à carte image
---

# 🗺️ Carte image

Dans une question **carte image**, les joueurs doivent sélectionner l’emplacement correct (ou les emplacements corrects) sur une image affichée sur leur appareil. C’est idéal pour les défis d’identification visuelle, comme « Sélectionnez le ballon d’Erlenmeyer. »

---

![Exemple : question à carte image avec des ballons](/images/question-modes/image-map/image-map-example.png)

---

## 📝 Comment ça marche

- **Question:** Clearly state what players need to find on the image.\
  _(Example: “Select the Erlenmeyer flask.”)_\
  _(Exemple : « Sélectionnez le ballon d’Erlenmeyer. »)_
- **Image :** Télécharge une image de haute qualité qui sera montrée à tous les joueurs.
- **Points de réponse :** Défini un ou plusieurs **zones cibles** (« points ») sur l’image. Chaque zone peut être définie comme un cercle ou une autre forme, et tu détermines sa position et sa taille.
- **Sélection des réponses :** Les joueurs tapent ou cliquent pour marquer leur(s) réponse(s) sur l’image.
  - Si la réponse tombe **dans une zone correcte**, ils reçoivent le plein de points.
  - If the answer falls **outside the correct area** but within the “almost correct” radius, they can earn partial points based on the distance (as defined by the _score easing_ setting).
- **Réponses multiples :** Si la question nécessite plus d’une réponse, les joueurs doivent sélectionner chaque zone correcte.
  - Sélectionner plusieurs fois la même zone **ne** donnera **pas** de points supplémentaires.
- **Méthode de notation :** Tu peux configurer si les points sont attribués pour chaque zone correcte individuellement, ou seulement quand le nombre minimum requis de bonnes réponses est sélectionné.

---

## ⚙️ Paramètres étendus

- **Nombre de réponses :** Défini le nombre minimum et maximum de points qu’un joueur doit identifier.
- **Adoucissement du score :** Ajuste le crédit partiel pour les réponses « presque correctes », basé sur la proximité de la sélection avec la zone correcte (s’applique seulement à la distance entre correct et presque correct).
- **Points par zone :** Décide si les points sont donnés par zone correctement identifiée, ou seulement si toutes les zones minimales requises sont sélectionnées.
- **Options de pièces jointes :** Ajoute des images, audio, ou vidéo pour un contexte plus riche. Définis les attributions si tu publies.

Voir [rédiger des questions](../editor/005-writing-questions.md) pour les réglages généraux des questions.

---

## ⏱️ Notation basée sur le temps

**La notation basée sur le temps est activée par défaut.** Les joueurs qui répondent rapidement gagnent plus de points, mais il y a toujours une composante fixe (par défaut : 75 %) pour une bonne réponse. Only 25% of the total score is influenced by how fast you answer.\
You can turn off time-based scoring for this question type if you wish.\
Tu peux désactiver la notation basée sur le temps pour ce type de question si tu veux.

📘 Pour les détails sur la notation et les réglages temps, vois la [documentation des options de la manche](../editor/008-round-options.md#scoring).

---

## 💡 Conseils pour de super questions à carte image

- **Utilise des images claires et non encombrées** pour une identification facile.
- **Définis les zones de réponse avec soin** pour éviter les chevauchements ou les confusions.
- **Fournis des retours constructifs** pour aider les joueurs à apprendre de leurs erreurs.
- **Crédit partiel :** Utilise l’option « presque correct » pour récompenser les réponses proches et garder ça juste.

---

Les questions à carte image sont parfaites pour étiqueter des schémas, identifier des régions, ou des jeux visuels de type « trouve l’objet » !

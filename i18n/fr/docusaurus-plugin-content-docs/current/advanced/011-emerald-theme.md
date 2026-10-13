---
id: emerald-theme
title: Thème Emerald
---

# Thème Emerald

Le thème Emerald est le moyen le plus simple de personnaliser l'apparence de votre jeu QuizWitz. Par défaut, le thème présente un style bleu / vert épuré avec des couleurs d'options vives, mais en combinant les pièces jointes du quiz et les modificateurs de thème, vous pouvez changer radicalement son apparence.

:::tip
Vous pouvez utiliser notre [testeur de thème](https://client.quizwitz.com/test.html?theme=emerald) pour voir à quoi ressembleront vos réglages.
:::

![Une capture d'écran du thème Emerald](/images/emerald/emerald.png)

## Sélectionnez le thème Emerald

Dans vos **Paramètres du Quiz**, sélectionnez **Thème** et activez **Emerald**.

Vous pouvez tester un quiz utilisant le thème Emerald [ici](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Une capture d'écran des paramètres du quiz](/images/emerald/quiz-settings.png)

## Pièces jointes

### Pièces jointes du quiz

De loin, la façon la plus simple de changer l'aspect et l'ambiance du jeu est d'ajouter des images à votre quiz. Ouvrez les **Paramètres du Quiz** et faites défiler jusqu'à la section **Pièces jointes**. Ici, vous pouvez télécharger des images qui seront utilisées comme arrière-plan, logo client, écrans de connexion et d'attente (pour les quiz en conférence et en direct), et plus encore.

![Une capture d'écran des pièces jointes du quiz](/images/emerald/quiz-attachments.png)

### Pièces jointes de la manche

Vous pouvez également télécharger des images ou vidéos qui seront diffusées avant et après le jeu. Cela s'applique aussi aux manches : trouvez une image que vous souhaitez utiliser comme introduction de manche, allez dans les **paramètres de la manche**, désactivez **Afficher l'introduction de la manche** pour masquer l'introduction par défaut, et téléchargez votre image ou vidéo en tant que **Afficher avant la manche**. Lorsque la manche commence, l'image ou la vidéo s'affichera à la place de l'introduction par défaut.

![Une capture d'écran des pièces jointes de la manche](/images/emerald/round-settings.png)

:::tip
Utilisez des images et vidéos en résolution 1920 x 1080 pour de meilleurs résultats.
:::

:::info
Après avoir expérimenté avec les pièces jointes, nous obtenons quelque chose [comme ceci](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Une capture d'écran du thème Emerald avec pièces jointes au quiz](/images/emerald/emerald-with-attachments.png)

### Musique

Toute la musique dans le jeu peut également être remplacée par des pièces jointes. Tous les fichiers audio téléchargés dans les emplacements **pendant la question** seront joués pendant le compte à rebours de la question.

## Modificateurs du thème Emerald

En plus des pièces jointes, vous pouvez aussi manipuler le thème Emerald avec des **paramètres de requête**. Ce sont des paramètres que vous pouvez ajouter à l'URL des **options avancées du jeu** - ils modifient l'apparence du thème.

Pour cela, nous commencerons avec un quiz exemple (sans pièces jointes) :  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Lorsque vous démarrez ce quiz, le jeu sera dans le style Emerald par défaut. Changeons cela.

:::tip
La façon la plus simple d'expérimenter avec ces paramètres est d'utiliser notre [testeur de thème](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Une fois que vous avez fini d'expérimenter, vous pouvez copier - coller les paramètres dans l'URL des options avancées de votre jeu.
:::

Les modificateurs disponibles sont :

- backgroundColor
- mainColor
- accentColor
- containerColor (le conteneur de la question ; peut inclure une valeur alpha, par exemple ffffff40)
- timerBackgroundColor
- headerTextColor
- optionTextColor
- dialogTextColor
- pieChartLabelColor
- ladderColor
- optionColors (4 couleurs, séparées par des virgules)
- optionBorderColors (4 couleurs, séparées par des virgules)

Les appareils des joueurs peuvent également être personnalisés :

- remoteBackgroundColor
- remoteTextColor
- remoteQuestionColor
- remoteQuestionTextColor
- remoteOptionOutlineColor
- remoteOutlineColor
- remoteContainerBackground
- remoteContainerText
- remoteOptionColors (4 couleurs, séparées par des virgules)

De plus, vous pouvez définir une police par défaut :

- defaultFont
- headerFont

Ces polices doivent être des URL vers des fichiers de polices accessibles publiquement.

Enfin, `hideLogo=1` masque le logo QuizWitz.

Chacun de ces modificateurs peut contenir une seule couleur au format hexadécimal HTML (ff0000), ou un dégradé linéaire en fournissant plusieurs couleurs séparées par un tiret ( - par exemple ff1b6b-45caff). (Notez que le symbole # ne doit pas être ajouté.)

:::note
Les paramètres de requête doivent commencer par un point d'interrogation ( ? ) et chaque paramètre doit être séparé par un esperluette ( & ). Pour plus d'informations sur les paramètres de requête, visitez [wikipedia](https://fr.wikipedia.org/wiki/URI_Query).
:::

En ajoutant ces paramètres à l'URL de votre jeu, vous pouvez modifier les couleurs du thème :  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Une capture d'écran du thème Emerald avec modificateurs personnalisés](/images/emerald/theme_properties.png)

### Enregistrer les modificateurs dans votre quiz

Vous n'avez pas besoin d'ajouter les paramètres à la main à chaque lien. Ouvrez **Partager ou intégrer** dans l'éditeur de quiz, dépliez **Options de jeu avancées**, collez les paramètres (sans le point d'interrogation initial, par exemple `backgroundColor=ff1b6b-45caff&accentColor=00ff87`) dans le champ **requête brute** et cliquez sur **Enregistrer les paramètres dans le quiz**. Dès lors, chaque lien de jeu et chaque lien de partage du quiz les contient.

L'assistant IA de QuizWitz peut aussi le faire pour vous : demandez-lui de changer la couleur d'arrière-plan de votre quiz, et il passera le quiz au thème Emerald et enregistrera les modificateurs.

## Vues de question personnalisées

Le thème Emerald propose aussi deux mises en page supplémentaires pour une question avec une image ou une vidéo dans l'emplacement **Pendant la question**, à choisir pour chaque question avec l'option **Vue personnalisée** dans les paramètres de la question :

- **Pièce jointe en plein écran** - l'image ou la vidéo remplit tout l'écran de jeu, le texte de la question et les options ne sont pas affichés
- **Pièce jointe en plein écran sans minuteur** - idem, avec le compte à rebours masqué en plus

Les joueurs lisent la question et répondent sur leurs propres appareils. Consultez [rédiger des questions](../editor/005-writing-questions.md) pour plus de détails.

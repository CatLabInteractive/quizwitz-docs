---
id: emerald-theme
title: Thème Emerald
---

# Thème Emerald

Le thème Emerald est le moyen le plus simple de personnaliser l'apparence de votre jeu QuizWitz. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks - drastically.

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

De loin, la façon la plus simple de changer l'aspect et l'ambiance du jeu est d'ajouter des images à votre quiz. Ouvrez les **Paramètres du Quiz** et faites défiler jusqu'à la section **Pièces jointes**. Here you can upload images that will be used as background, client logo, connect - and wait screens (for conference - and live quizzes), and more.

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

En plus des pièces jointes, vous pouvez aussi manipuler le thème Emerald avec des **paramètres de requête**. These are parameters you can add to the **advanced game options** URL - and they change the look of the theme.

Pour cela, nous commencerons avec un quiz exemple (sans pièces jointes) :  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Lorsque vous démarrez ce quiz, le jeu sera dans le style Emerald par défaut. Changeons cela.

:::tip
La façon la plus simple d'expérimenter avec ces paramètres est d'utiliser notre [testeur de thème](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
When you are done experimenting, you can copy - paste the parameters to your advanced game options URL.
:::

Les modificateurs disponibles sont :

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma - separated)
- optionBorderColors (4 colors, comma - separated)

De plus, vous pouvez définir une police par défaut :

- defaultFont
- headerFont

Ces polices doivent être des URL vers des fichiers de polices accessibles publiquement.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( - for example ff1b6b-45caff). (Notez que le symbole # ne doit pas être ajouté.)

:::note
Les paramètres de requête doivent commencer par un point d'interrogation ( ? ) et chaque paramètre doit être séparé par un esperluette ( & ). Pour plus d'informations sur les paramètres de requête, visitez [wikipedia](https://fr.wikipedia.org/wiki/URI_Query).
:::

En ajoutant ces paramètres à l'URL de votre jeu, vous pouvez modifier les couleurs du thème :  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Une capture d'écran du thème Emerald avec modificateurs personnalisés](/images/emerald/theme_properties.png)

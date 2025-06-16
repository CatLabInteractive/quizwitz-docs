---
id: emerald-theme
name: Thème émeraude
---

# Thème émeraude

Le thème Émeraude est la façon la plus simple de personnaliser l’apparence de votre jeu QuizWitz. Par défaut, le thème est un style bleu / vert propre avec des couleurs vives d'options, mais en combinant des pièces jointes au quiz et des modificateurs de thème, vous pouvez changer l'apparence de celui-ci — de façon drastique.

:::tip
Vous pouvez utiliser notre [testeur de thèmes](https://client.quizwitz.com/test.html?theme=emerald) pour voir à quoi ressembleront vos paramètres.
:::

![A screenshot of the emerald theme](/images/emerald/emerald.png)

## Sélectionnez le thème émeraude

Dans vos **paramètres de Quiz**, sélectionnez **Thème** et activez **Émeraude**.

Vous pouvez tester un quiz en utilisant le thème Emeraude [here](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![A screenshot of the quiz settings](/images/emerald/quiz-settings.png)

## Fichiers joints

### Pièces jointes au quiz

De loin, la façon la plus simple de changer l'apparence du jeu consiste à attacher des images à votre quiz. Ouvrez les **paramètres du questionnaire** et descendez jusqu'à la section **Pièces jointes**. Ici vous pouvez télécharger des images qui seront utilisées en arrière-plan, le logo du client, connectez — et attendez les écrans (pour la conférence — et les quiz en direct) et plus encore.

![A screenshot of the quiz attachments](/images/emerald/quiz-attachments.png)

### Pièces jointes arrondies

Vous pouvez également télécharger des images ou des vidéos qui seront lues avant et après le jeu. Cela vaut aussi pour les rondes : trouvez une image que vous voulez utiliser comme introduction à la ronde, allez dans les **paramètres arrondiss**, désactivez **Show round intro** pour masquer l'introduction par défaut, et téléchargez votre image ou vidéo en tant que **Show before round**. Lorsque la manche démarre, l'image ou la vidéo sera affichée au lieu de l'introduction par défaut.

![A screenshot of the round attachments](/images/emerald/round-settings.png)

:::tip
Utilisez des images et des vidéos d'une résolution de 1920 x 1080 pour de meilleurs résultats.
:::

:::info
Après avoir joué avec les pièces jointes, nous nous retrouvons avec quelque chose [comme ça](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![A screenshot of the emerald theme with quiz attachments](/images/emerald/emerald-with-attachments.png)

### Musique

Toutes les musiques du jeu peuvent également être remplacées par des pièces jointes. Tous les fichiers audio téléchargés dans les créneaux **pendant la question** seront joués pendant le compte à rebours des questions.

## Modificateurs de thème émeraude

En plus des pièces jointes, vous pouvez aussi manipuler le thème Emerald avec des **paramètres de requête**. Ce sont des paramètres que vous pouvez ajouter à l'URL **options de jeu avancées** — et ils changent l'apparence du thème.

Pour cela, nous allons commencer par un exemple de quiz (sans pièces jointes) :\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Lorsque vous démarrez le quiz ci-dessus, le jeu sera dans le style Emeraude par défaut. Allons-y.

:::tip
La façon la plus simple d'expérimenter ces paramètres est d'utiliser notre testeur de thèmes.\
La façon la plus simple d'expérimenter ces paramètres est d'utiliser notre testeur de thèmes.\
Lorsque vous avez fini d'expérimenter, vous pouvez copier — collez les paramètres dans l'URL des options de jeu avancées.
:::

Les modificateurs disponibles sont:

- Couleur de fond
- Couleur principale
- accentColor
- Couleur de fond du chronomètre
- headerTextColor
- optionTextColor
- optionCouleurs (4 couleurs, virgule — séparées)
- optionBorderColors (4 couleurs, virgule — séparées)

De plus, vous pouvez définir une police par défaut :

- defaultFont
- Police de l'en-tête

Ces polices doivent être des URL pour les fichiers de police accessibles au public.

Chacun de ces modificateurs peut contenir une seule couleur au format HTML hexadécimal (ff0000), ou un dégradé linéaire en fournissant des couleurs multiples divisées par un symbole moins ( — par exemple ff1b6b-45caff). (Notez que le symbole # ne doit pas être ajouté.)

:::note
Les paramètres de la requête doivent commencer par un point d'interrogation ( ? ) et chaque paramètre doit être divisé avec un esperluette ( & ). Pour plus d'informations sur les paramètres de la requête, visitez [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

En ajoutant ces paramètres à votre URL de jeu, vous pouvez modifier les couleurs dans le thème :\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffff&timerBackgroundColor=fff95b

![A screenshot of the Emerald theme with custom modifiers](/images/emerald/theme_properties.png)

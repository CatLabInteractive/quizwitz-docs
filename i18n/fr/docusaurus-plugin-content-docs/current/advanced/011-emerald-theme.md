---
id: emerald-theme
name: Thème Emerald
---

# Thème Emerald

Le thème Emerald est le moyen le plus simple de personnaliser l'apparence de votre jeu QuizWitz. Par défaut, le thème présente un style bleu / vert épuré avec des couleurs d'options vives, mais en combinant les pièces jointes du quiz et les modificateurs de thème, vous pouvez changer radicalement son apparence.

:::tip
Vous pouvez utiliser notre [testeur de thème](https://client.quizwitz.com/test.html?theme=emerald) pour voir à quoi ressembleront vos réglages.
:::

![Une capture d'écran du thème emerald](/images/emerald/emerald.png)

## Sélectionnez le thème Emerald

Dans vos **Paramètres du Quiz**, sélectionnez **Thème** et activez **Emerald**.

Vous pouvez tester un quiz utilisant le thème Emerald [ici](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Une capture d'écran des paramètres du quiz](/images/emerald/quiz-settings.png)

## Pièces jointes

### Pièces jointes du quiz

De loin la façon la plus simple de changer l'apparence et l'ambiance du jeu est d'ajouter des images à votre quiz. Ouvrez les **Paramètres du Quiz** et descendez jusqu'à la section **Pièces jointes**. Ici, vous pouvez télécharger des images qui serviront de fond, logo client, écrans de connexion — et de mise en attente (pour les conférences — et quiz en direct), et plus encore.

![Une capture d'écran des pièces jointes du quiz](/images/emerald/quiz-attachments.png)

### Pièces jointes des rounds

Vous pouvez aussi télécharger des images ou vidéos qui seront diffusées avant et après le jeu. Cela s'applique aussi aux rounds : trouvez une image que vous voulez utiliser comme introduction de round, allez dans **paramètres du round**, désactivez **Afficher intro du round** pour cacher l'introduction par défaut, et téléchargez votre image ou vidéo comme **Afficher avant le round**. Quand le round démarre, l'image ou vidéo sera affichée à la place de l'introduction par défaut.

![Une capture d'écran des pièces jointes des rounds](/images/emerald/round-settings.png)

:::tip
Utilisez des images et vidéos avec une résolution de 1920 x 1080 pour de meilleurs résultats.
:::

:::info
Après avoir joué avec les pièces jointes, on obtient quelque chose [comme ceci](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Une capture d'écran du thème emerald avec pièces jointes au quiz](/images/emerald/emerald-with-attachments.png)

### Musique

Toute la musique dans le jeu peut aussi être remplacée par des pièces jointes. Tous les fichiers audio téléchargés dans les emplacements **pendant la question** seront joués pendant le compte à rebours de la question.

## Modificateurs du thème Emerald

En plus des pièces jointes, vous pouvez aussi manipuler le thème Emerald avec des **paramètres de requête**. Ce sont des paramètres que vous pouvez ajouter à l'URL des **options avancées de jeu** — et ils modifient l'apparence du thème.

For this, we will start with an example quiz (without any attachments):\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Quand vous lancez ce quiz, le jeu sera dans le style Emerald par défaut. Changeons cela.

:::tip
Le moyen le plus simple pour expérimenter avec ces paramètres est d'utiliser notre testeur de thème.\
The easiest way to experiment with these parameters is by using our theme tester.\
When you are done experimenting, you can copy — paste the parameters to your advanced game options URL.
:::

Les modificateurs disponibles sont :

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 couleurs, séparées par des virgules)
- optionBorderColors (4 couleurs, séparées par des virgules)

De plus, vous pouvez définir une police par défaut :

- defaultFont
- headerFont

Ces polices doivent être des URL vers des fichiers de polices accessibles publiquement.

Chacun de ces modificateurs peut contenir une seule couleur en format hexadécimal HTML (ff0000), ou un dégradé linéaire en fournissant plusieurs couleurs séparées par un trait d'union (— par exemple ff1b6b-45caff). (Notez que le symbole # ne doit pas être ajouté.)

:::note
Les paramètres de requête doivent commencer par un point d'interrogation ( ? ) et chaque paramètre doit être séparé par un esperluette ( & ). Pour plus d'informations sur les paramètres de requête, visitez [wikipedia](https://fr.wikipedia.org/wiki/Chaîne_de_requête).
:::

By adding these parameters to your game URL, you can modify the colors in the theme:\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Une capture d'écran du thème Emerald avec modificateurs personnalisés](/images/emerald/theme_properties.png)

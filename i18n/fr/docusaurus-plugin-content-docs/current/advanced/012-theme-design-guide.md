---
id: theme-design-guide
title: Guide de conception du thème
---

# Guide de conception du thème

[Theming](/docs/advanced/theming) explains how a QuizWitz theme is built: in Adobe Animate, exported as a CreateJS library. Cette page couvre l'étape qui précède — **création** le thème.

Il est écrit pour un graphiste, et il suppose que le design et la production Animate sont faits par différentes personnes. Peu de designers travaillent encore dans Adobe Animate, donc un arrangement commun est qu'un designer livre des œuvres d'art et que quelqu'un d'autre assemble le thème. Cela fonctionne bien, mais seulement si l'œuvre est remise dans une forme que la construction peut effectivement utiliser. Cette page décrit cette forme.

:::tip
Si vous voulez seulement changer les couleurs, les polices et les arrière-plans, vous n'en avez pas besoin — personnalisez le [thème émeraude] (/docs/advanced/emerald-theme) à la place.
:::

---

## Ce que vous concevez

Une partie de QuizWitz est jouée par une salle entière en même temps, et deux écrans sont toujours impliqués:

- **L'écran partagé** — un projecteur ou une télévision, 1920 × 1080. Questions, réponses, comment les réponses de la salle ont été diffusées, le classement. C'est ce que vous concevez.
- **Téléphone de chaque joueur**, où ils tapent leur réponse. Il s'agit d'une page web avec une mise en page fixe ; elle est stylisée à partir de vos couleurs et de vos polices, et non pas de vous.

Un thème est le thème visuel complet de l'écran partagé : arrière-plan, typographie, couleur, la façon dont une question avec quatre options est présentée, comment le classement se constitue, comment un tour est annoncé.

---

## Sept images

Le jeu a environ vingt-cinq états d'écran distincts, mais la plupart sont des variantes de la même mise en page. **Vous concevez sept images; le reste en est dérivé.** Ce n'est pas un raccourci, c'est le fonctionnement du moteur. Un écran qui ne possède pas d'œuvre personnelle tombe sur un cadre général.

| #     | Frame                        | Qu'est-ce qui est dessus                                                                                                                                                                             | Qu'est-ce qui en est dérivé                                                                                                                                                                                 |
| ----- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Cadre général**            | L'arrière-plan, un titre d'en-tête et une zone de contenu vide en dessous. Le modèle visuel pour tout le thème.                                                      | Treize états de l’écran : explication de la manche, classement, introduction du joueur, variantes à choix multiple, questions longues, avertissements du siège, paramètres. |
| **2** | **Écran de connexion**       | Ce que la salle voit pour rejoindre : cinq lignes d'instruction, une place pour un code de jointure ou un code QR, et une liste de joueurs qui rôdent.               | Aussi l'écran d'attente affiché pendant que le quizmaster lit la question à haute voix.                                                                                                     |
| **3** | **Écran de question**        | La question, un chronomètre, quatre options de réponse, une ligne de commentaires. L'écran que la salle regarde le plus longtemps.                                   | —                                                                                                                                                                                                           |
| **4** | **Question avec les médias** | La même chose, organisée autour d'une image ou d'une vidéo. Peut être une composition différente du cadre 3.                                                         | Également la variante de média en plein écran et les médias affichés entre les questions.                                                                                                   |
| **5** | **Écran de réponse**         | Quelle réponse a été correcte, comment les réponses de la salle ont été réparties entre les options, et une ligne de commentaires.                                                   | Aussi l'écran de réponse pour les questions ouvertes et pour les questions avec les médias.                                                                                                 |
| **6** | **Standings et gagnants**    | Une liste de joueurs avec nom, score et position. Fournit la **rangée du joueur** en tant qu'élément séparé et réutilisable — elle est répétée six à dix fois.       | Le classement entre les tours et le vainqueur final.                                                                                                                                        |
| **7** | **Introduction à la manche** | Une courte annonce par catégorie de manche. Il y a six catégories : science et technologie, nature, divertissement et musique, sport, art, histoire. | Les six catégories.                                                                                                                                                                         |

### Ce qui est décidé pour vous

- \*\*Les contrôles individuels. \* Les boutons dans leurs quatre états, les symboles corrects et erronés, la barre de défilement, les cases à cocher et les sélections sont dérivés de ce qui apparaît dans vos sept cadres. Assurez-vous qu'un bouton apparaisse quelque part, donc il y a un style pour les prendre.
- **Les téléphones des joueurs.** Une mise en page HTML fixe, stylisée à partir de votre liste de couleurs et de polices.
- **Quels écrans retombent sur le cadre général et comment.**
- **Comment les six catégories correspondent à l'œuvre d'introduction de la ronde.**
- **Toutes les durées de timing et d'animation.**

### Un caractère est optionnel

Le thème original QuizWitz a un caractère qui parle et réagit. Rien ne nécessite une seule : le validateur de thème n'avertit que l'élément `ted`; il ne échoue pas sans lui. [Thème de l'émeraude](/docs/advanced/emerald-theme) est livré sans personnage, et le lâcher supprime le travail d'animation le plus coûteux : synchronisation des lèvres, des yeux, des bras.

Sans personnage, l'intro de la ronde devient un moment graphique, typographique ou illustratif. Deux approches maintiennent le travail en proportion: une composition avec une couleur ou une variante d'icône par catégorie, ou une seule annonce universelle avec seulement le changement de nom de ronde. Six intros vraiment différentes, c'est beaucoup de travail pour quelques secondes de temps à l'écran.

---

## À quoi ressemblent ces cadres dans la pratique

Les écrans ci-dessous proviennent d'un thème existant. Ils sont là pour montrer **ce qui se passe sur chaque écran**; ils ne sont pas une référence de style.

### Cadre 1 — le cadre général

Deux moments de jeu très différents sur le même modèle : un sélecteur de questions et une échelle de points. Il montre combien de travail un cadre fait pour vous et pourquoi sa zone de contenu doit être spacieuse et neutre.

![The general frame with a three-row question picker](/images/theme-design/frame1-general-multiquestion.png)

![The general frame with a five level points scalder](/images/theme-design/frame1-general-strikeladder.png)

### Cadre 2 — connexion et attente

Avec un logo client à côté du code d'adhésion, et sans un, où la propre œuvre du thème porte l'écran:

![Écran de connexion avec un logo client](/images/theme-design/frame2-connect.png)

![Écran de connexion sans logo client](/images/theme-design/frame2-connect-nologo.png)

L'écran d'attente qui suit, affiché pendant que le quizmaster lit la question à haute voix :

![Écran en attente](/images/theme-design/frame2-pending.png)

### Cadre 3 — l'écran de question

Quatre options, la question ci-dessus, la minuterie au milieu. Notez qu'une option ne peut contenir que des émoji.

![Écran de question avec quatre options de texte](/images/theme-design/frame3-question-options.png)

![Écran de question avec flags as answer options](/images/theme-design/frame3-question-emoji.png)

Une question sans options — les joueurs tapent leur réponse sur leur téléphone. L'écran est presque vide et le minuteur devient l'élément principal :

![Questions ouvertes avec seulement la question et un grand chronomètre](/images/theme-design/frame3-question-open.png)

Le temps presse. Le ballon de rétroaction apparaît sur l'écran et le minuteur est vide:

![Écran des questions montrant l'état du temps](/images/theme-design/frame3-question-timeout.png)

### Cadre 4 — média

Les mêmes parties, réarrangées autour d'une zone média, avec les options à gauche et à droite :

![Écran de questions avec une image au milieu](/images/theme-design/frame4-question-attachment.png)

Média seul, remplissant l’écran:

![Full-screen media](/images/theme-design/frame4-attachment-fullscreen.png)

### Cadre 5 — l'écran de réponse

Cet écran traverse trois instants. Tout d'abord la diffusion, sans aucune mention pour le moment:

![Écran de réponse montrant la diffusion](/images/theme-design/frame5-answer-mc-spread.png)

Puis la bonne option est cochée et les mauvaises sont croisées:

![Écran de réponse avec l'option correcte révélée](/images/theme-design/frame5-answer-mc-reveal.png)

Et si la question porte une explication, un ballon tombe sur l'oeuvre. Laissez de la place pour lui : elle tombe sur ce que vous avez conçu :

![Écran de réponse avec le ballon d'explication](/images/theme-design/frame5-answer-mc-explanation.png)

Avec un petit groupe, le même moment est une liste de scores plutôt qu'un graphique :

![Écran de réponse pour un petit groupe](/images/theme-design/frame5-answer-mc-small.png)

Pour une question ouverte, le graphique montre combien de joueurs ont bien compris :

![Écran de réponse pour une question ouverte](/images/theme-design/frame5-answer-open.png)

### Cadre 6 — classement et gagnant

Le classement après une manche. La ligne du joueur est l'élément qui se répète : position, avatar, nom, score.

![Standings with six players rows](/images/theme-design/frame6-roundoutro.png)

Le compte à rebours final nomme un joueur à la fois, de la dernière place au premier rang — lieu, score et nom d'équipe en vedette :

![The winner countdown naming one player](/images/theme-design/frame6-winner-countdown.png)

![The final standings](/images/theme-design/frame6-winner.png)

### Cadre 7 — l'intro de la ronde

Une conception, optionnellement avec une variante par catégorie:

![Intro de la ronde pour la catégorie nature](/images/theme-design/frame7-roundintro-nature.png)

![Intro de la ronde pour la catégorie de la science](/images/theme-design/frame7-roundintro-science.png)

---

## Règles de conception

Aucun de ces éléments ne limite votre design visuel. Ils portent sur la façon dont le fichier est construit.

### Formater

- **1920 × 1080 pixels**, exactement. Une image par écran.
- Travaillez **en vecteur** où vous le pouvez. Où vous utilisez raster (photos, textures): au moins 2× taille d'affichage.
- Le jeu tourne à **24 images par seconde**. Pertinent si vous fournissez des idées de mouvement.
- Gardez une **marge de 5%** à la lisière des informations essentielles. Recadrage de projecteurs.

### Structure du calque — la règle qui importe le plus

**Tout ce qui peut bouger, apparaître ou changer de valeur est sur sa propre couche nommée.** Rien de fusionné, rien n'a été aplati.

En pratique, les quatre options de réponse sont quatre couches distinctes, pas une. La minuterie est séparée de l'arrière-plan. Un bouton et son étiquette sont deux éléments. Une rangée de joueurs est un groupe qui peut être dupliqué.

Ce qui peut être fusionné : une œuvre de fond purement décorative qui fonctionne comme une seule image morte.

C'est la seule règle qui fait vraiment mal quand elle n'est pas respectée — l'œuvre doit ensuite être séparée ou redessinée, qui est exactement le coût que cet arrangement est censé éviter.

### Effets qui ne survivent pas

Le moteur s'appuie sur une toile HTML5. Celles-ci doivent être **cuites dans l'image** ou laissées dehors :

- Flou en direct, ombrage et éclat en tant que filtres → les fournir en tant qu'œuvre d'art
- Modes de fusion (multiplication, écran, superposition) → les résoudre à une couleur plate
- Effets de calque et calques d'ajustement
- Dégradés **à l'intérieur** du texte, ou du texte avec un contour par caractère
- Masques qui changent par image

Les dégradés de formes sont bons. La transparence est une bonne chose. Les ombres en tant qu'œuvre d'art fixe sont parfaites.

### Comment se comporte le texte

C'est là que la conception pour QuizWitz diffère le plus des travaux de design ordinaires.

**Vous ne définissez pas de taille de police. Vous dessinez une boîte.**

Tout le texte est dessiné en direct par un composant qui reçoit deux choses: une chaîne, et le rectangle que vous avez dessiné. Il trouve alors **la plus grande taille de police à laquelle cette chaîne, enveloppée à travers les lignes, s'intègre toujours dans la boîte**. Une longue corde se rétrécit pour s'ajuster; une corde courte pousse jusqu'à ce que la boîte soit pleine.

![A picker where three lines of different length each get a different police size](/images/theme-design/frame1-general-multiquestion.png)

Trois lignes, trois boîtes identiques — et trois tailles de police complètement différentes, simplement parce que le texte est plus court ou plus long. "Où est l'amour" obtient la pleine hauteur; la question au-dessus il faut se contenter de deux petites lignes. Les étiquettes à gauche se comportent de la même façon.

Qu'est-ce qui suit de cela:

- \*\*La même question est différente dans un autre jeu. \* Une question à six mots apparaît de grande taille et remplissage d'écran; un texte à trente-cinq mots apparaît petit sur cinq lignes, dans exactement la même boîte. Les deux doivent être visibles.
- \*\*Concevoir deux fois chaque zone de texte. \* Remplissez-le une fois avec un échantillon très court et une fois avec un très long, et vérifiez que la composition tient dans les deux. En règle générale : une option de réponse s'exécute de un à huit mots, une question de cinq à quarante, un nom de joueur de deux à vingt caractères.
- **Ne comptez pas sur un nombre fixe de lignes.** Un titre qui est "toujours sur une ligne" n'existe pas ici.
- \*\*Ne pas aligner le texte avec autre chose. \* Le texte qui doit être aligné avec une règle ou une forme dérive dès qu'il est plus court ou plus long. Utilisez des boîtes assez spacieuses et un alignement (à gauche, centré, à droite) au lieu de positions exactes.
- **La boîte est un maximum et non une promesse.** Vous créez ses proportions, le remplissage varie.
- **Onze langues.** Les composés allemands sont longs et le hongrois n'est pas plus petit. Une boîte qui est serrée en anglais tombe à une petite taille illisible en allemand.
- \*\*Les émoticônes peuvent apparaître dans le texte. \* Les joueurs en choisissent un à côté du nom de leur équipe, et une question ou une option peut en contenir une — parfois une option n'est rien d'autre qu'un emoji. Ils sont dessinés en couleur et sont plus grands que les lettres qui les entourent.

Ce que la construction a besoin de savoir sur chaque zone de texte : où elle est, quelle taille il est, comment il est aligné, quelle couleur et quelle police. Pas : à quel point la taille.

Deux choses s’ensuivent que vous pouvez utiliser : une grande boîte avec un texte court devient une forte composition typographique par elle-même, et une boîte que vous faites délibérément étroite et grande force le texte dans une colonne. Vous pouvez utiliser le raccord comme un appareil de design — vous ne devriez pas concevoir contre lui.

### La minuterie — requise, et c'est une animation

**Chaque écran de question a un chronomètre.** Ce n'est pas optionnel; la salle doit voir combien de temps est restant. Les deux cadres de questions en portent une.

\*\*Le chronomètre n'est pas un nombre de compteurs mais une animation dont la tête de lecture du moteur se déplace. \* Vous concevez une progression de "plein" à "vide" — un drainage de barres, une bague de fermeture, un sablier, une ligne de rétrécissement. Le moteur joue cette animation exactement à la vitesse qui fait que le dernier cadre coïncide avec la fin de la question.

Ce qui suit :

- **La durée de la question n'est pas fixe.** Elle est définie par quiz — souvent de vingt à trente secondes, mais elle peut être plus courte ou plus longue. Votre animation est étirée ou compressée pour s'adapter. Concevoir une _progression_, pas une animation d'un nombre défini de secondes.
- **Aucun nombre ou ticket par seconde.** Un minuteur comptant "20, 19, 18…" cesse d'être vrai dès que la durée change.
- **Les dernières secondes sont le moment le plus tendu du jeu.** Cela aide si la progression devient plus claire ou plus urgente vers la fin.
- **Légable au dos de la pièce**, en un coup d'œil.
- **Plusieurs minuteurs sont autorisés.** Une barre en haut et un anneau près de la question sont tous deux conduits, à condition que chacun soit nommé `timer`.

Fournissez le minuteur comme une série de cadres clés ou comme une description de la progression — « la barre draine de droite à gauche et passe du vert au rouge » suffit.

### Polices

- **Les polices doivent être embeddables.** Le fichier `.ttf` ou `.otf` est nécessaire, plus une licence qui permet d'intégrer une application. Une police sous licence uniquement en tant que police web, ou seulement pour impression, ne peut pas être utilisée. Vérifiez cela avant de le concevoir ; c'est une correction coûteuse par la suite.
- Les polices avec des ascendants ou des descendants exceptionnellement grands peuvent être compensées, mais indiquez-les si vous en utilisez un.

### Couleur en tant que liste

Le thème lit une liste de couleurs à partir d'un fichier de configuration. Fournissez votre palette en tant que **liste nommée**, pas seulement en tant que couleurs dans l'œuvre :

la couleur principale, la couleur d'accentuation, l'arrière-plan, la couleur du texte par défaut, la couleur du texte de l'entête, la couleur du texte du texte de la question, le texte du bouton, le texte du bouton les quatre couleurs de réponse (chacune avec un fond et une couleur de bordure), la couleur correcte et la mauvaise couleur.

Les dégradés sont autorisés : donnez-leur deux valeurs hexadécimales.

### Le logo de QuizWitz

Les designs personnalisés incluent le logo QuizWitz. Réservez un endroit pour lui où il ne gêne pas la conception.

---

## Quoi remettre

### Fichier source — Illustrator préféré

\*\*Adobe Illustrator (`.ai`) est préféré, et il y a une raison concrète. \* Le thème est intégré dans Adobe Animate, qui importe directement les fichiers Illustrator et convertit vos calques en calques d'animation ou symboles séparés, en conservant les noms des calques et en laissant les vecteurs modifiables. C'est exactement l'étape qui permet d'éviter que l'œuvre ne soit reconstruite à la main.

Figma ou Photoshop est possible, mais sachez le coût : avec Figma, tout passe par l'exportation SVG et PNG, et c'est précisément là que la structure de calque nécessaire ici est perdue. Si vous utilisez Figma, fournissez **chaque élément séparément en SVG**, avec des noms de fichiers correspondant aux noms de calques, de sorte que la structure peut être reconstruite à la main. Photoshop importe dans Animate avec ses calques intacts, comme Illustrator, mais vous donne du raster au lieu du vecteur.

Si vous êtes plus rapide dans Figma, utilisez-le pour la phase du concept et livrez la version finale dans Illustrator.

Structure du fichier :

- Un artboard par écran, chacun exactement 1920 × 1080, nommé d'après les cadres ci-dessus.
- Pièces réutilisables (bouton, ligne du joueur, option de réponse, minuterie) en tant que **symboles** ou composants, pas en tant que copies détachées.
- Noms des couches en anglais, sans espaces: `question`, `option1` à `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Couleurs sous forme d'échantillons nommés et de texte sous la forme de styles nommés, plutôt que de définir individuellement chaque objet.

### Exportations

- Chaque cadre en tant que PNG, 1920 × 1080 — en tant que référence pour son apparence.
- Chaque élément graphique séparé en tant que **PNG transparent à 2×**, dans un dossier, nom de fichier correspondant au nom du calque.
- Fontes en tant que `.ttf` ou `.otf`, avec une preuve de licence.

### Une demi-page de notes

Une courte note écrite : quelle est l'idée, comment les options devraient apparaître, ce qui bouge et ce qui reste immobile. Pas une logique de conception de dix pages — celui qui construit le thème a besoin de savoir quoi construire.

Les idées de motion peuvent être décrites ou fournies comme une animation approximative.

---

## Annexe - noms de symboles

Pour l'exhaustivité, et pour tous ceux qui veulent savoir exactement où se trouve leur oeuvre. **Tu n'as pas besoin de lire ceci pour faire le travail**; les sept images ci-dessus sont suffisantes. L'utilisation de ces noms comme noms de calques enregistre une étape de traduction.

| Frame                                               | Nom du symbole                                                                                                                                                                                | Pièces requises                                                                                                |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| 1. Cadre général             | `GeneralPurposeScreen`, `GeneralPurposeScreenWithHeader`                                                                                                                                      | `header.text`, zone de contenu                                                                                 |
| 2. Ecran de connexion        | `PrésentationConnectScreen`                                                                                                                                                                   | `instructions.line1` à `line5`                                                                                 |
| 2b. Ecran d'attente                 | `En attente`                                                                                                                                                                                  | `header.text`                                                                                                  |
| 3. Écran de la question      | `QuestionScreen`                                                                                                                                                                              | `question.text`, `timer`, `feedback.text`, `option1` à `option4`, frame labels `showOptions` et `showFeedback` |
| 4. Question avec les médias  | `QuestionScreenAttachment`                                                                                                                                                                    | comme ci-dessus, plus `attachment.placeholder`                                                                 |
| 4b. Média en plein écran            | `Écran de pièce jointe`                                                                                                                                                                       | `placeholder`                                                                                                  |
| 5. Écran de réponse          | `AnswerPieScreen`                                                                                                                                                                             | `option1` à `option4`, `answer.text`, `feedback.text`                                                          |
| 5b. Ouvrir la réponse à la question | `AnswerScreen`, `AnswerOpenQuestionPieScreen`                                                                                                                                                 | `answer.text`, `feedback.text`, `players`, `piechart`                                                          |
| 6. Classements               | `WinnerScreen` + `PlayerScore`                                                                                                                                                                | `header.text`, `players`, `feedback.text` (facultatif `playAgain.text`)                     |
| 7. Introduction de la manche | `RoundIntroTedMusic`, `RoundIntroTedSport`, `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedCultHist`                                                                    | —                                                                                                              |
| —                                                   | `LoadingScreen`                                                                                                                                                                               | `text`, `progress`                                                                                             |
| —                                                   | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `SymbolCorrect`, `SymbolWrong`, `SettingsScreenScrollarea`, `AlertScreen`, `ActivityScreen`, `MenuScreen`, `SettingsScreen`, `PackListItem` | aucune œuvre d'art nécessaire — construite à partir de vos montures et du cadre général                        |

Les noms d'introduction de la ronde contiennent "Ted" pour des raisons historiques. C'est un reliquat du thème original qui ne veut pas dire qu'un personnage doit apparaître en eux.

Chaque élément avec `.text` après c'est une boîte de texte ajustée comme décrit ci-dessus : un rectangle que le moteur se remplit lui-même. L'élément `timer` est un clip de film avec sa propre timeline ; le moteur lit le nombre de cadences et déplace la tête de lecture en proportion du temps écoulé.

### Ce que le fichier de configuration prend de votre design

```json
{
  "fonts": { "default": "<body font>", "header": "<heading font>" },
  "couleurs": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "default": "#…", "header": "#…", "question": "#…",
    "boutons": "#…", "dialog": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "overlay": "light | dark"
}
```

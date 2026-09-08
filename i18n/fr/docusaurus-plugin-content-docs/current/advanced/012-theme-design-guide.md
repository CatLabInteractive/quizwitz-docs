---
id: theme-design-guide
title: Guide de conception d'un thème
---

# Guide de conception d'un thème

[Thématisation](/docs/advanced/theming) explique comment un thème QuizWitz est construit : dans Adobe Animate, exporté sous forme de bibliothèque CreateJS. Cette page traite de l'étape qui précède - la **conception** du thème.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Cette page décrit cette forme et sert en même temps de liste des livrables lorsque vous demandez un devis à un graphiste.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Si vous voulez seulement changer les couleurs, les polices et les fonds, vous n'avez besoin de rien de tout cela - personnalisez plutôt le [thème Emerald](/docs/advanced/emerald-theme).
:::

:::info[Le voir en action]
Chaque écran décrit ici peut être joué en direct, avec des données d'exemple, dans le **testeur de thème** à l'adresse [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Il charge un thème et propose un menu d'écrans de test : des questions avec et sans pièce jointe, la répartition des réponses pour un petit et un grand groupe, le classement, les intros de manche, l'écran de connexion avec et sans logo client, et ainsi de suite. Ajoutez `?theme=emerald` à l'adresse pour voir le [thème Emerald](/docs/advanced/emerald-theme). Celui qui construit le thème utilise la même page pour le vérifier pendant l'assemblage.
:::

---

## Ce que vous concevez

Une partie de QuizWitz se joue avec toute une salle en même temps, et deux écrans sont toujours en jeu :

- **L'écran de jeu** - un projecteur ou un téléviseur, 1920 × 1080. Les questions, les réponses, la façon dont les réponses de la salle se sont réparties, le classement. C'est cela que vous concevez.
- **Le téléphone de chaque joueur**, sur lequel il tape sa réponse. C'est une page web à la mise en page fixe ; elle est stylée à partir de votre liste de couleurs, elle n'est pas mise en page par vous.

Un thème est l'habillage visuel complet de l'écran de jeu : le fond, la typographie, la couleur, la façon dont une question à quatre options est présentée, la façon dont le classement se construit, la façon dont une manche est annoncée.

---

## Eight frames and an element sheet

Le jeu compte des dizaines d'états d'écran distincts, mais la plupart sont des variantes d'une même mise en page. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Un écran sans visuels propres se rabat sur un cadre général.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Cadre                                                           | Also covers                                                               |
| - | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1 | [General frame](#frame-1---the-general-frame)                   | Thirteen screen states with no artwork of their own                       |
| 2 | [Connect screen](#frame-2---the-connect-screen)                 | Draw it twice: with a client logo and without one         |
| 3 | [Waiting screen](#frame-3---the-waiting-screen)                 | -                                                                         |
| 4 | [Question screen](#frame-4---the-question-screen)               | -                                                                         |
| 5 | [Question with attachment](#frame-5---question-with-attachment) | The full-screen attachment, and attachments shown between questions       |
| 6 | [Answer screen](#frame-6---the-answer-screen)                   | The answer screen for open questions and for questions with an attachment |
| 7 | [Standings and winner](#frame-7---standings-and-winner)         | The standings between rounds and the final winner                         |
| 8 | [Round intro](#frame-8---the-round-intro)                       | All six round categories                                                  |

:::note[About the screenshots]
Les écrans ci-dessous proviennent d'un thème existant. They show **which elements appear on each screen and when**. Ils ne sont une référence ni de style _ni_ de mise en page : l'endroit où ce thème place sa question, ses options et son minuteur relève de son propre choix, et le vôtre peut être complètement différent.
:::

### Cadre 1 - le cadre général

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. Le sélecteur de questions et la question longue peuvent recevoir leur propre composition si vous le souhaitez ; sinon ils utilisent ce cadre.

Deux moments de jeu sur le même cadre : un sélecteur de questions et une échelle de points.

![Le cadre général avec un sélecteur de questions à trois lignes](/images/theme-design/frame1-general-multiquestion.png)

![Le cadre général avec une échelle de points à cinq niveaux](/images/theme-design/frame1-general-strikeladder.png)

Regardez le peu qu'ils ont en commun. Le sélecteur place ses trois lignes dans un panneau bordé ; l'échelle n'a aucun panneau, seulement des lignes séparées par de fins filets. Ce que les deux partagent, c'est le fond et le bandeau d'en-tête au-dessus - tout ce qui se trouve en dessous appartient à l'écran individuel et est rempli par le jeu, pas par vous.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Ce que ce cadre doit faire, c'est les accueillir : concevez la zone de contenu comme une zone vide, neutre et généreuse, qui fonctionne aussi bien avec un panneau bordé, une liste nue qu'un tableau de lignes. Un fond chargé en son centre, ou un en-tête qui ne fonctionne qu'avec un panneau glissé juste en dessous, c'est là que cela casse.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Écran de connexion avec un logo client](/images/theme-design/frame2-connect.png)

![Écran de connexion sans logo client](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Écran d'attente](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Écran de question avec quatre options textuelles](/images/theme-design/frame3-question-options.png)

![Écran de question avec des drapeaux comme options de réponse](/images/theme-design/frame3-question-emoji.png)

Une question sans options - les joueurs tapent leur réponse sur leur téléphone. L'écran est presque vide et le minuteur devient l'élément principal :

![Question ouverte avec seulement la question et un grand minuteur](/images/theme-design/frame3-question-open.png)

Le moment où le temps est écoulé. La bulle de feedback apparaît par-dessus l'écran et le minuteur est vide :

![Écran de question à l'état « temps écoulé »](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. La pièce jointe est mise à l'échelle pour tenir dans le cadre que vous dessinez, une image en format paysage comme en format portrait doit donc y rester acceptable.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Écran de question avec une image au milieu](/images/theme-design/frame4-question-attachment.png)

Une pièce jointe seule, occupant tout l'écran :

![Pièce jointe en plein écran](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. D'abord la répartition, sans rien de marqué encore :

![Écran de réponse montrant la répartition](/images/theme-design/frame5-answer-mc-spread.png)

Ensuite l'option correcte est cochée et les mauvaises sont barrées :

![Écran de réponse avec l'option correcte révélée](/images/theme-design/frame5-answer-mc-reveal.png)

Et si la question comporte une explication, une bulle descend par-dessus les visuels. Laissez-lui de la place - elle se pose par-dessus tout ce que vous avez conçu :

![Écran de réponse avec la bulle d'explication](/images/theme-design/frame5-answer-mc-explanation.png)

Avec un petit groupe, le même moment est une liste de scores plutôt qu'un graphique :

![Écran de réponse pour un petit groupe](/images/theme-design/frame5-answer-mc-small.png)

Pour une question ouverte, le graphique montre combien de joueurs ont trouvé :

![Écran de réponse pour une question ouverte](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Classement avec six lignes de joueur](/images/theme-design/frame6-roundoutro.png)

Le décompte final nomme un joueur à la fois, de la dernière place à la première - place, score et nom d'équipe sous les projecteurs. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![Le décompte du gagnant nommant un joueur](/images/theme-design/frame6-winner-countdown.png)

![Le classement final](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Il y a six catégories : sciences & techniques, nature, divertissement & musique, sport, art, histoire.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Intro de manche pour la catégorie nature](/images/theme-design/frame7-roundintro-nature.png)

![Intro de manche pour la catégorie sciences](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Sans personnage, l'intro de manche devient un moment graphique, typographique ou illustratif. Deux approches gardent le travail dans des proportions raisonnables : une composition avec une variante de couleur ou d'icône par catégorie, ou une annonce universelle unique dont seul le nom de la manche change. Six intros vraiment différentes, cela fait beaucoup de travail pour quelques secondes à l'écran.

---

## La planche d'éléments

Deux groupes d'éléments, sur une seule planche, chacun dessiné une fois et réutilisé partout.

**Briques de contenu.** Elles remplissent la zone de contenu du cadre général. Les écrans qui se rabattent dessus sont assemblés à partir d'elles, ce que vous dessinez ici décide donc de l'allure de tous :

- un **panneau** : remplissage, bordure, rayon des angles - le conteneur dans lequel se trouve une liste ou un bloc de texte
- une **ligne de liste** : l'unité répétée de toute liste, avec son propre fond ou sans
- un **séparateur** : le filet entre les lignes, là où il n'y a pas de panneau
- une **paire label-valeur** : un label court à gauche, une valeur à droite

**Contrôles.** Dessinés une fois, utilisés sur chaque écran :

- un **bouton** dans ses quatre états : repos, survol, enfoncé, désactivé
- les symboles **correct** et **incorrect**
- une **barre de défilement**, une **case à cocher**, une **liste déroulante**
- l'emplacement du **logo QuizWitz**

---

## Ce qui est décidé pour vous

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Quels écrans se rabattent sur le cadre général, et comment.**
- **La façon dont les six catégories sont associées aux visuels d'intro de manche.** Cette association est un réglage de configuration, une même intro peut donc être réutilisée pour plusieurs catégories.
- **Tout le rythme et toutes les durées d'animation.**
- **Le son.** Un thème peut embarquer sa propre musique et ses propres effets sonores, mais c'est un livrable distinct qui ne fait pas partie du brief de conception.

---

## Règles de conception

Aucune de ces règles ne limite votre travail visuel. Elles portent sur la façon dont le fichier est construit.

### Format

- **1920 × 1080 pixels**, exactement. Un cadre par écran.
- Travaillez **en vectoriel** partout où c'est possible. Là où vous utilisez du bitmap (photos, textures) : au moins 2× la taille d'affichage.
- Le document Animate tourne à **24 images par seconde**. Utile si vous fournissez des idées de mouvement.
- Gardez une **marge de 5 %** sur les bords, libre de toute information essentielle. Les projecteurs rognent.

### Structure des calques - la règle qui compte le plus

**Tout ce qui peut bouger, apparaître ou changer de valeur se trouve sur son propre calque nommé.** Rien de fusionné, rien d'aplati.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Ce qui peut être fusionné : les visuels de fond purement décoratifs qui fonctionnent comme une seule image fixe.

C'est la seule règle dont le non-respect fait vraiment mal - il faut alors décomposer ou redessiner les visuels, ce qui est précisément le coût que cette organisation vise à éviter.

### Les effets qui ne survivent pas

Le moteur dessine sur un canvas HTML5. Ceux-ci doivent être **intégrés à l'image** ou abandonnés :

| Effect                                                                      | What to do instead          |
| --------------------------------------------------------------------------- | --------------------------- |
| Live blur, drop shadows and glow as filters                                 | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)                  | Resolve them to flat colour |
| Effets de calque et calques de réglage                                      | Bake them in                |
| Dégradés **à l'intérieur** du texte, ou texte avec un contour par caractère | Leave them out              |
| Masques qui changent d'une image à l'autre                                  | Leave them out              |

Les dégradés dans les formes ne posent pas de problème. La transparence ne pose pas de problème. Les ombres sous forme de visuels fixes ne posent pas de problème.

### Comment se comporte le texte

C'est là que concevoir pour QuizWitz diffère le plus d'un travail de conception ordinaire.

**Vous ne définissez pas de corps de texte. Vous dessinez un cadre de texte.**

Tout le texte est dessiné en direct par un composant qui reçoit deux choses : une chaîne, et le rectangle que vous avez dessiné. Il cherche ensuite **le plus grand corps auquel cette chaîne, répartie sur plusieurs lignes, tient encore dans le cadre**. Une chaîne longue rétrécit pour tenir ; une chaîne courte grandit jusqu'à remplir le cadre.

![Un sélecteur où trois lignes de longueurs différentes reçoivent chacune un corps différent](/images/theme-design/frame1-general-multiquestion.png)

Trois lignes, trois cadres identiques - et trois corps de texte complètement différents, uniquement parce que le texte est plus court ou plus long. « Where is love » obtient toute la hauteur ; la question au-dessus doit se contenter de deux petites lignes. Les labels de gauche se comportent de la même manière.

Ce qui en découle :

- **La même question a une autre allure dans une autre partie.** Une question de six mots apparaît grande et occupe tout l'écran ; une question de trente-cinq mots apparaît petite sur cinq lignes, dans exactement le même cadre. Les deux doivent bien rendre.
- **Concevez chaque cadre de texte deux fois.** Remplissez-le une fois avec un exemple très court et une fois avec un exemple très long, et vérifiez que la composition tient dans les deux cas. En règle générale : une option de réponse va d'un à environ huit mots, une question de cinq à quarante, un nom de joueur de deux à vingt caractères.
- **Ne comptez pas sur un nombre de lignes fixe.** Un titre « toujours sur une ligne » n'existe pas ici.
- **N'alignez pas le texte optiquement sur autre chose.** Un texte qui doit s'aligner sur un filet ou une forme se décalera dès qu'il sera plus court ou plus long. Utilisez des cadres suffisamment généreux et un alignement (à gauche, centré, à droite) plutôt que des positions exactes.
- **Douze langues.** Les mots composés allemands sont longs, et le hongrois n'est pas plus clément. Un cadre juste en anglais tombe à une taille illisible en allemand.
- **Des emoji peuvent apparaître à l'intérieur du texte.** Les joueurs en choisissent un à côté de leur nom d'équipe, et une question ou une option peut en contenir un - parfois une option n'est rien d'autre qu'un emoji. Ils sont dessinés en couleur et sont plus hauts que les lettres qui les entourent.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Pas : à quel corps.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### Le minuteur - obligatoire, et c'est une animation

**Every question screen has a timer**; the room has to see how much time is left.

**Le minuteur n'est pas un nombre qui décompte mais une animation dont le moteur déplace la tête de lecture.** Vous concevez une progression de « plein » à « vide » - une barre qui se vide, un anneau qui se referme, un sablier, une ligne qui rétrécit. Le moteur joue cette animation exactement à la vitesse qui fait coïncider la dernière image avec la fin de la question.

Ce qui en découle :

- **La durée d'une question n'est pas fixe.** Elle est définie par quiz - souvent vingt à trente secondes, mais elle peut être plus courte ou plus longue. Votre animation est étirée ou compressée pour s'y adapter.
- **Pas de chiffres ni de graduations par seconde.** Un minuteur qui décompte « 20, 19, 18… » cesse d'être juste dès que la durée change.
- **Les dernières secondes sont le moment le plus tendu du jeu.** Il est utile que la progression devienne plus lisible ou plus pressante vers la fin.
- **Lisible depuis le fond de la salle**, d'un seul coup d'œil.
- **Plusieurs minuteurs sont autorisés.** Une barre en haut et un anneau près de la question sont tous deux pilotés, tant que chacun s'appelle `timer`.

Fournissez le minuteur sous forme d'une série d'images clés ou d'une description de la progression - « la barre se vide de droite à gauche et passe du vert au rouge » suffit.

### Les emoji volants atterrissent par-dessus tout

Chaque joueur choisit un emoji en rejoignant la partie, et le jeu projette ces emoji à travers l'écran. They are drawn by the engine on a layer above the theme. **Il n'y a rien à concevoir ici** - mais il y a quelque chose à contourner par la conception, car ce ne sont pas une fioriture rare.

Ils apparaissent à trois moments :

- **Quand un joueur répond.** Son emoji s'élève depuis le bord inférieur à une position horizontale aléatoire, décrit un arc et retombe hors du champ.
- **Quand un joueur en projette un.** Les joueurs peuvent projeter leur emoji depuis leur téléphone ; l'angle et la vitesse viennent du balayage, et il part du bas au centre, en tournoyant.
- **Quand une place est dévoilée dans le décompte final.** Une gerbe des emoji du joueur nommé : vingt pour une place ordinaire, cinquante pour la troisième, soixante-quinze pour la deuxième, et **cent cinquante pour le gagnant.**

Ce que cela implique pour la conception :

- **Gardez le tiers inférieur des écrans de classement et de gagnant libre de tout élément petit ou essentiel.** Pendant le décompte, c'est vraiment encombré là en bas.
- **Partez du principe qu'ils jureront avec votre palette.** Ce sont des emoji en pleine couleur venus de tous les coins de la table Unicode, et aucun thème ne les contrôle. Une conception qui ne tient que dans une gamme de couleurs resserrée aura l'air accidentelle pendant ces secondes.
- **Les projections sont supprimées tant qu'une image ou une vidéo est affichée**, les écrans avec pièce jointe restent donc propres.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Polices

- **Les polices doivent pouvoir être incorporées.** Le fichier `.ttf` ou `.otf` est nécessaire, ainsi qu'une licence qui autorise l'incorporation dans une application. Une police dont la licence ne couvre que le web, ou uniquement l'impression, ne peut pas être utilisée. Vérifiez-le avant de concevoir avec elle ; c'est une correction coûteuse après coup.
- Les polices aux jambages supérieurs ou inférieurs inhabituellement grands peuvent être compensées, mais signalez-le si vous en utilisez une.

### La couleur sous forme de liste

Le thème lit une liste de couleurs dans un fichier de configuration, et les téléphones des joueurs sont stylés à partir de la même liste. Fournissez votre palette sous forme de **liste nommée**, et pas seulement sous forme de couleurs dans les visuels :

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

Les dégradés sont autorisés sur l'écran de jeu : donnez-les sous forme de deux valeurs hexadécimales.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Si vous les omettez, elles retombent sur des valeurs par défaut intégrées - blanc, gris, rouge, noir et blanc - qui correspondent rarement à une conception.

### Le logo QuizWitz

Les conceptions sur mesure comprennent le logo QuizWitz. Réservez-lui une place où il ne gêne pas la conception.

---

## Ce qu'il faut livrer

### Fichier source - Illustrator de préférence

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                                                                       | Use it for                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. C'est exactement l'étape qui évite que les visuels soient reconstruits à la main.                                                                                    | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                                                                        | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Si vous utilisez malgré tout Figma, fournissez **chaque élément séparément en SVG**, avec des noms de fichiers correspondant aux noms de calques, afin que la structure puisse être reconstruite à la main. | The concept phase, if you are faster in it |

Structure du fichier :

- One artboard per screen, named after the frames above.
- Les parties réutilisables (bouton, ligne de joueur, option de réponse, minuteur) sous forme de **symboles** ou de composants, pas de copies isolées.
- Des noms de calques en anglais, sans espaces : `question`, `option1` à `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Les couleurs en nuances nommées et le texte en styles nommés, plutôt que définis objet par objet.

### Liste des livrables

1. Le **fichier source**, structuré comme ci-dessus.
2. **Chaque cadre en PNG**, 1920 × 1080 - une référence de l'allure attendue. Pour le cadre 2, la version avec et la version sans logo client.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Chaque élément graphique séparé en PNG transparent à 2×**, dans un seul dossier, le nom de fichier correspondant au nom de calque.
5. **Le minuteur** sous forme d'images clés ou d'une description écrite de la progression.
6. **Les polices** en `.ttf` ou `.otf`, avec justificatif de licence.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Une demi-page de notes** : quelle est l'idée, comment les options doivent apparaître, ce qui bouge et ce qui reste immobile. Pas une justification de conception de dix pages - celui qui construit le thème a besoin de savoir quoi construire. Les idées de mouvement peuvent être décrites ou fournies sous forme d'animatique sommaire.

### Ordre de travail

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Annexe - noms des symboles

Pour être complet, et pour qui veut savoir exactement où aboutissent ses visuels. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Utiliser ces noms comme noms de calques épargne une étape de traduction.

| Cadre                                                       | Nom du symbole                                                                                                                            | Parties requises                                                                                                                                                                                                          |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Cadre général                     | `GeneralPurposeScreen` ; `GeneralPurposeScreenWithHeader` facultatif                                                                      | `placeholder` (la zone de contenu) ; cadre de texte `title` facultatif                                                                                                                                 |
| 1b. Sélecteur de questions, question longue | `MultiQuestionScreen`, `LongQuestionScreen` ; tous deux facultatifs, se rabattent sur le cadre général                                    | sélecteur : espace réservé `questions`, `timer` ; question longue : espace réservé `question`                                                                                             |
| 2. Écran de connexion                | `PresentationConnectScreen` ; `PresentationConnectScreenWithLogo` facultatif, avec un espace réservé `logo`                               | `instructions.line1` à `line5`, `connectedPlayers` ; espace réservé `qrCode` avec l'étiquette d'image `showQrCode` facultatif                                                                                             |
| 3. Écran d'attente                   | `PendingScreen` ; `PendingScreenWithLogo` facultatif                                                                                      | `header.text`                                                                                                                                                                                                             |
| 4. Écran de question                 | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` à `option4`, étiquettes d'image `showOptions` et `showFeedback`                                                                                                      |
| 5. Question avec pièce jointe        | `QuestionScreenAttachment`                                                                                                                | comme ci-dessus, plus `attachment.placeholder`                                                                                                                                                                            |
| 5b. Pièce jointe en plein écran             | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                             |
| 6. Écran de réponse                  | `AnswerPieScreen` ; `AnswerPieScreenAttachment` facultatif                                                                                | `option1` à `option4`, `answer.text`, `feedback.text`                                                                                                                                                                     |
| 6b. Réponse à une question ouverte          | `AnswerScreen`, `AnswerOpenQuestionPieScreen` ; variantes `…Attachment` facultatives                                                      | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                                     |
| 7. Classement                        | `WinnerScreen` + `PlayerScore` ; `WinnerScreen_round`, `WinnerScreen_game` et `PlayerScoreNoImage` facultatifs                            | `header.text`, `players`, `feedback.text` (`playAgain.text` facultatif) ; dans la ligne : `position`, `name`, `score`, `avatar` facultatif                                             |
| 8. Intro de manche                   | un ou plusieurs symboles de n'importe quel nom ; le fichier de configuration associe chacune des six catégories à un symbole              | -                                                                                                                                                                                                                         |
| -                                                           | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                                        |
| -                                                           | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | aucun visuel propre nécessaire - construits à partir de ce qui apparaît dans vos cadres                                                                                                                                   |
| -                                                           | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | affichés uniquement dans l'application de bureau, pas dans un quiz en direct. Ne font pas partie du brief : ils sont repris du modèle de thème et restylés avec votre fond et vos boutons |

Les symboles d'intro de manche du thème d'origine s'appellent `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` et `RoundIntroTedCultHist` ; l'art et l'histoire partagent le dernier. Le « Ted » de ces noms est un reste du personnage du thème d'origine et ne signifie pas qu'un personnage doive y apparaître.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. L'élément `timer` est un clip vidéo doté de son propre scénario ; le moteur lit son nombre d'images et déplace la tête de lecture proportionnellement au temps écoulé, au maximum 24 fois par seconde.

### Ce que le fichier de configuration reprend de votre conception

```json
{
  "fontFiles": { "<body font>": "fonts/body.ttf", "<heading font>": "fonts/heading.ttf" },
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "_container_": "#…", "_timerBackground_": "#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…", "player": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "optionColors": [ "#…", "#…", "#…", "#…" ],
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "remoteColors": {
    "background": "#…", "text": "#…", "outline": "#…",
    "options-outline": "#…", "container-background": "#…", "container-text": "#…"
  },
  "roundIntros": { "science": "<symbol>", "nature": "<symbol>", "entertainment": "<symbol>",
                   "sports": "<symbol>", "art": "<symbol>", "history": "<symbol>" },
  "overlay": "light | dark"
}
```

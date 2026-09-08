---
id: theme-design-guide
title: Guide de conception du thème
---

# Guide de conception du thème

[Theming](/docs/advanced/theming) explains how a QuizWitz theme is built: in Adobe Animate, exported as a CreateJS library. This page covers the step before that - **designing** the theme.

Il est écrit pour un graphiste, et il suppose que le design et la production Animate sont faits par différentes personnes. Peu de designers travaillent encore dans Adobe Animate, donc un arrangement commun est qu'un designer livre des œuvres d'art et que quelqu'un d'autre assemble le thème. Cela fonctionne bien, mais seulement si l'œuvre est remise dans une forme que la construction peut effectivement utiliser. This page describes that shape, and doubles as the list of deliverables when you ask a designer for a quote.

:::tip
If you only want to change colours, fonts and backgrounds, you do not need any of this - customise the [Emerald theme](/docs/advanced/emerald-theme) instead.
:::

:::info[See it running]
Every screen described here can be played live, with sample data, in the **theme tester** at [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). It loads a theme and offers a menu of test screens: questions with and without an attachment, the answer spread for a small and a large group, the standings, the round intros, the connect screen with and without a client logo, and so on. Add `?theme=emerald` to the address to see the [Emerald theme](/docs/advanced/emerald-theme). Whoever builds the theme uses the same page to check it while it is being assembled.
:::

---

## Ce que vous concevez

Une partie de QuizWitz est jouée par une salle entière en même temps, et deux écrans sont toujours impliqués:

- **The game screen** - a projector or TV, 1920 × 1080. Questions, réponses, comment les réponses de la salle ont été diffusées, le classement. C'est ce que vous concevez.
- **Téléphone de chaque joueur**, où ils tapent leur réponse. That is a web page with a fixed layout; it is styled from your colour list, not laid out by you.

A theme is the complete visual skin of the game screen: background, typography, colour, the way a question with four options is presented, how the standings build up, how a round is announced.

---

## Seven frames and an element sheet

The game has dozens of distinct screen states, but most are variants of the same layout. **You design seven frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Un écran qui ne possède pas d'œuvre personnelle tombe sur un cadre général.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule - and that furniture is a design decision, not something that can be inferred from a background.

| #     | Frame                        | Qu'est-ce qui est dessus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Qu'est-ce qui en est dérivé                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Cadre général**            | L'arrière-plan, un titre d'en-tête et une zone de contenu vide en dessous. Not a finished composition - the frame the rest is built inside.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Treize états de l’écran : explication de la manche, classement, introduction du joueur, variantes à choix multiple, questions longues, avertissements du siège, paramètres. Each fills that content area its own way with elements from the sheet, so it has to hold things that look nothing alike. The question picker and the long question may get a composition of their own if you want them to; otherwise they use this frame. |
| **2** | **Connect and waiting**      | Two screens, not one. The **connect screen** is what the room sees to join: five lines of instruction, a join code, a QR code, a line with the number of connected players, and a list of players trickling in. Design it **twice**: with a client logo and without one. The join code and the QR code are generated by the engine; reserve a square for the QR code. The **waiting screen** stays up while the quizmaster reads a question aloud and is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **3** | **Écran de question**        | La question, un chronomètre, quatre options de réponse, une ligne de commentaires. L'écran que la salle regarde le plus longtemps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **4** | **Question with attachment** | La même chose, organisée autour d'une image ou d'une vidéo. Peut être une composition différente du cadre 3. The attachment is scaled to fit inside the box you draw, so both a landscape and a portrait image must look acceptable in it.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Also the full-screen attachment variant, and attachments shown between questions.                                                                                                                                                                                                                                                                                                                                                                                                     |
| **5** | **Écran de réponse**         | Quelle réponse a été correcte, comment les réponses de la salle ont été réparties entre les options, et une ligne de commentaires.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Also the answer screen for open questions and for questions with an attachment.                                                                                                                                                                                                                                                                                                                                                                                                       |
| **6** | **Standings et gagnants**    | A list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element - it is repeated six times by default, up to ten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Le classement entre les tours et le vainqueur final.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **7** | **Introduction à la manche** | Une courte annonce par catégorie de manche. Il y a six catégories : science et technologie, nature, divertissement et musique, sport, art, histoire. One design may serve several categories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Les six catégories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### The element sheet

Two groups of elements, on one sheet, each drawn once and reused everywhere.

**Content building blocks.** These fill the content area of the general frame. The screens that fall back to it are assembled from these, so whatever you draw here decides how all of them look:

- a **panel**: fill, border, corner radius - the container a list or a block of text sits in
- a **list row**: the repeating unit of any list, with its own background or none
- a **separator**: the rule between rows, where there is no panel
- a **label and value pair**: a short label on the left, a value on the right

**Controls.** Drawn once, used on every screen:

- a **button** in its four states: rest, hover, pressed, disabled
- the **correct** and **wrong** symbols
- a **scrollbar**, a **checkbox**, a **select**
- where the **QuizWitz logo** sits

### Ce qui est décidé pour vous

- **The players' phones.** A fixed HTML layout, styled from your colour list.
- **The handful of things the engine draws itself.** Some furniture is drawn in code rather than taken from the theme - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Those take their colour from the list in **Colour as a list** and nothing else, so that list is the only control you have over them.
- **Quels écrans retombent sur le cadre général et comment.**
- **How the six categories map onto the round intro artwork.** That mapping is a configuration setting, so one intro can be reused for several categories.
- **Toutes les durées de timing et d'animation.**
- **Sound.** A theme can carry its own music and sound effects, but that is a separate deliverable and not part of the design brief.

### Un caractère est optionnel

Le thème original QuizWitz a un caractère qui parle et réagit. Rien ne nécessite une seule : le validateur de thème n'avertit que l'élément `ted`; il ne échoue pas sans lui. The [Emerald theme](/docs/advanced/emerald-theme) ships without a character, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Sans personnage, l'intro de la ronde devient un moment graphique, typographique ou illustratif. Deux approches maintiennent le travail en proportion: une composition avec une couleur ou une variante d'icône par catégorie, ou une seule annonce universelle avec seulement le changement de nom de ronde. Six intros vraiment différentes, c'est beaucoup de travail pour quelques secondes de temps à l'écran.

---

## À quoi ressemblent ces cadres dans la pratique

Les écrans ci-dessous proviennent d'un thème existant. They are here to show **which elements appear on each screen and when**. They are not a reference for style _or_ layout: where this theme puts its question, its options and its timer is its own decision, and yours can differ completely. Read them for what has to be present, not for where it goes. All of them, and more, can be played in the [theme tester](https://client.quizwitz.com/test.html).

### Frame 1 - the general frame

Two game moments on the same frame: a question picker and a points ladder.

Look at how little they have in common. The picker puts its three rows inside a panel with a border; the ladder has no panel at all, just rows separated by thin rules. What the two share is the background and the header band above them - everything below that belongs to the individual screen and is filled by the game, not by you.

![The general frame with a three-row question picker](/images/theme-design/frame1-general-multiquestion.png)

![The general frame with a five level points scalder](/images/theme-design/frame1-general-strikeladder.png)

That panel and those rules are design decisions, and they are yours to make - they come from the **element sheet**, not from this frame. What this frame has to do is hold them: design the content area as an empty, neutral, roomy zone that works with a bordered panel, a bare list and a table of rows alike. A background that is busy in the middle, or a header that only works with a panel tucked right underneath it, is where that breaks.

### Frame 2 - connect and waiting

Avec un logo client à côté du code d'adhésion, et sans un, où la propre œuvre du thème porte l'écran:

![Écran de connexion avec un logo client](/images/theme-design/frame2-connect.png)

![Écran de connexion sans logo client](/images/theme-design/frame2-connect-nologo.png)

The waiting screen is a separate composition rather than a variant of the connect screen - the two share only a background. It stays up while the quizmaster reads a question aloud, and it is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game, so it deserves more attention than an empty screen usually gets.

![Écran en attente](/images/theme-design/frame2-pending.png)

### Frame 3 - the question screen

Quatre options, la question ci-dessus, la minuterie au milieu. Notez qu'une option ne peut contenir que des émoji.

![Écran de question avec quatre options de texte](/images/theme-design/frame3-question-options.png)

![Écran de question avec flags as answer options](/images/theme-design/frame3-question-emoji.png)

A question with no options - players type their answer on their phone. L'écran est presque vide et le minuteur devient l'élément principal :

![Questions ouvertes avec seulement la question et un grand chronomètre](/images/theme-design/frame3-question-open.png)

Le temps presse. Le ballon de rétroaction apparaît sur l'écran et le minuteur est vide:

![Écran des questions montrant l'état du temps](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - attachment

The same parts, rearranged around an attachment area, with the options to the left and right:

![Écran de questions avec une image au milieu](/images/theme-design/frame4-question-attachment.png)

An attachment on its own, filling the screen:

![Full-screen attachment](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - the answer screen

Cet écran traverse trois instants. Tout d'abord la diffusion, sans aucune mention pour le moment:

![Écran de réponse montrant la diffusion](/images/theme-design/frame5-answer-mc-spread.png)

Puis la bonne option est cochée et les mauvaises sont croisées:

![Écran de réponse avec l'option correcte révélée](/images/theme-design/frame5-answer-mc-reveal.png)

Et si la question porte une explication, un ballon tombe sur l'oeuvre. Leave room for it - it lands on top of whatever you designed:

![Écran de réponse avec le ballon d'explication](/images/theme-design/frame5-answer-mc-explanation.png)

Avec un petit groupe, le même moment est une liste de scores plutôt qu'un graphique :

![Écran de réponse pour un petit groupe](/images/theme-design/frame5-answer-mc-small.png)

Pour une question ouverte, le graphique montre combien de joueurs ont bien compris :

![Écran de réponse pour une question ouverte](/images/theme-design/frame5-answer-open.png)

### Frame 6 - standings and winner

Le classement après une manche. La ligne du joueur est l'élément qui se répète : position, avatar, nom, score.

![Standings with six players rows](/images/theme-design/frame6-roundoutro.png)

The final countdown names one player at a time, from last place to first - place, score and team name in the spotlight. This is also where the flying emoji are heaviest; see the note further down:

![The winner countdown naming one player](/images/theme-design/frame6-winner-countdown.png)

![The final standings](/images/theme-design/frame6-winner.png)

### Frame 7 - the round intro

Une conception, optionnellement avec une variante par catégorie:

![Intro de la ronde pour la catégorie nature](/images/theme-design/frame7-roundintro-nature.png)

![Intro de la ronde pour la catégorie de la science](/images/theme-design/frame7-roundintro-science.png)

---

## Règles de conception

Aucun de ces éléments ne limite votre design visuel. Ils portent sur la façon dont le fichier est construit.

### Formater

- **1920 × 1080 pixels**, exactement. Une image par écran.
- Travaillez **en vecteur** où vous le pouvez. Où vous utilisez raster (photos, textures): au moins 2× taille d'affichage.
- The Animate document runs at **24 frames per second**. Pertinent si vous fournissez des idées de mouvement.
- Gardez une **marge de 5%** à la lisière des informations essentielles. Recadrage de projecteurs.

### Layer structure - the rule that matters most

**Tout ce qui peut bouger, apparaître ou changer de valeur est sur sa propre couche nommée.** Rien de fusionné, rien n'a été aplati.

En pratique, les quatre options de réponse sont quatre couches distinctes, pas une. La minuterie est séparée de l'arrière-plan. Un bouton et son étiquette sont deux éléments. Une rangée de joueurs est un groupe qui peut être dupliqué.

Ce qui peut être fusionné : une œuvre de fond purement décorative qui fonctionne comme une seule image morte.

This is the one rule that genuinely hurts when it is not followed - the artwork then has to be pulled apart or redrawn, which is exactly the cost this arrangement is meant to avoid.

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

Three rows, three identical boxes - and three completely different font sizes, purely because the text is shorter or longer. "Où est l'amour" obtient la pleine hauteur; la question au-dessus il faut se contenter de deux petites lignes. Les étiquettes à gauche se comportent de la même façon.

Qu'est-ce qui suit de cela:

- \*\*La même question est différente dans un autre jeu. \* Une question à six mots apparaît de grande taille et remplissage d'écran; un texte à trente-cinq mots apparaît petit sur cinq lignes, dans exactement la même boîte. Les deux doivent être visibles.
- \*\*Concevoir deux fois chaque zone de texte. \* Remplissez-le une fois avec un échantillon très court et une fois avec un très long, et vérifiez que la composition tient dans les deux. En règle générale : une option de réponse s'exécute de un à huit mots, une question de cinq à quarante, un nom de joueur de deux à vingt caractères.
- **Ne comptez pas sur un nombre fixe de lignes.** Un titre qui est "toujours sur une ligne" n'existe pas ici.
- \*\*Ne pas aligner le texte avec autre chose. \* Le texte qui doit être aligné avec une règle ou une forme dérive dès qu'il est plus court ou plus long. Utilisez des boîtes assez spacieuses et un alignement (à gauche, centré, à droite) au lieu de positions exactes.
- **La boîte est un maximum et non une promesse.** Vous créez ses proportions, le remplissage varie.
- **Twelve languages.** German compounds are long, and Hungarian is no kinder. Une boîte qui est serrée en anglais tombe à une petite taille illisible en allemand.
- **Emoji can appear inside text.** Players pick one next to their team name, and a question or an option can contain one - sometimes an option is nothing but an emoji. Ils sont dessinés en couleur et sont plus grands que les lettres qui les entourent.

Ce que la construction a besoin de savoir sur chaque zone de texte : où elle est, quelle taille il est, comment il est aligné, quelle couleur et quelle police. Pas : à quel point la taille.

Deux choses s’ensuivent que vous pouvez utiliser : une grande boîte avec un texte court devient une forte composition typographique par elle-même, et une boîte que vous faites délibérément étroite et grande force le texte dans une colonne. You can use the fitting as a design device - you just should not design against it.

### The timer - required, and it is an animation

**Chaque écran de question a un chronomètre.** Ce n'est pas optionnel; la salle doit voir combien de temps est restant. Les deux cadres de questions en portent une.

**The timer is not a counting number but an animation whose playhead the engine moves.** You design a progression from "full" to "empty" - a bar draining, a ring closing, an hourglass, a shrinking line. Le moteur joue cette animation exactement à la vitesse qui fait que le dernier cadre coïncide avec la fin de la question.

Ce qui suit :

- **The question duration is not fixed.** It is set per quiz - often twenty to thirty seconds, but it can be shorter or longer. Votre animation est étirée ou compressée pour s'adapter. Concevoir une _progression_, pas une animation d'un nombre défini de secondes.
- **Aucun nombre ou ticket par seconde.** Un minuteur comptant "20, 19, 18…" cesse d'être vrai dès que la durée change.
- **Les dernières secondes sont le moment le plus tendu du jeu.** Cela aide si la progression devient plus claire ou plus urgente vers la fin.
- **Légable au dos de la pièce**, en un coup d'œil.
- **Plusieurs minuteurs sont autorisés.** Une barre en haut et un anneau près de la question sont tous deux conduits, à condition que chacun soit nommé `timer`.

Supply the timer as a series of keyframes or as a description of the progression - "the bar drains right to left and shifts from green to red" is enough.

### Flying emoji land on top of everything

Every player picks an emoji when they join, and the game throws those emoji across the screen. They are drawn by the engine on a layer above the theme, in whatever colours the player's emoji happens to have. **There is nothing here for you to design** - but there is something to design around, because they are not a rare flourish. They appear at three moments:

- **When a player answers.** Their emoji rises from the bottom edge at a random horizontal position, arcs up and falls back out of frame.
- **When a player flings one.** Players can fling their emoji from their phone; angle and speed come from the swipe, and it launches from the bottom centre, spinning.
- **When a place is revealed in the final countdown.** A burst of the named player's emoji: twenty for an ordinary place, fifty for third, seventy-five for second, and **a hundred and fifty for the winner.**

They always enter from the bottom edge, arc under gravity and fall back out. What that means for the design:

- **Keep the bottom third of the standings and winner screens clear of anything small or critical.** During the countdown it is genuinely crowded down there.
- **Assume they will clash with your palette.** They are full-colour emoji from every corner of the Unicode chart, and no theme controls them. A design that only holds together in a tight colour range will look accidental for those seconds.
- **Flings are suppressed while an image or video is showing**, so the attachment screens stay clean.
- The whole layer can be switched off per game, so do not build a composition that depends on them being there either.

### Polices

- **Les polices doivent être embeddables.** Le fichier `.ttf` ou `.otf` est nécessaire, plus une licence qui permet d'intégrer une application. Une police sous licence uniquement en tant que police web, ou seulement pour impression, ne peut pas être utilisée. Vérifiez cela avant de le concevoir ; c'est une correction coûteuse par la suite.
- Les polices avec des ascendants ou des descendants exceptionnellement grands peuvent être compensées, mais indiquez-les si vous en utilisez un.

### Couleur en tant que liste

The theme reads a colour list from a configuration file, and the players' phones are styled from the same list. Fournissez votre palette en tant que **liste nommée**, pas seulement en tant que couleurs dans l'œuvre :

- **Game screen:** main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong.
- **The four answer options:** each with a background and a border colour, plus one flat colour per option for the phones and the charts.
- **Players' phones:** background, text colour, outline colour, option outline colour, and the background and text colour of the answer container.

Gradients are allowed on the game screen: give them as two hex values.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting: the **separator** (the rules between rows where there is no panel, and on the points ladder), the **active**, **inactive** and **selected** states of a row in the question picker, the **dialog** text, and the **front and back of the QR code**. If you leave them out they fall back to built-in defaults - white, grey, red, black and white - which rarely match a design.

### Le logo de QuizWitz

Les designs personnalisés incluent le logo QuizWitz. Réservez un endroit pour lui où il ne gêne pas la conception.

---

## Quoi remettre

### Source file - Illustrator preferred

\*\*Adobe Illustrator (`.ai`) est préféré, et il y a une raison concrète. \* Le thème est intégré dans Adobe Animate, qui importe directement les fichiers Illustrator et convertit vos calques en calques d'animation ou symboles séparés, en conservant les noms des calques et en laissant les vecteurs modifiables. C'est exactement l'étape qui permet d'éviter que l'œuvre ne soit reconstruite à la main.

Figma ou Photoshop est possible, mais sachez le coût : avec Figma, tout passe par l'exportation SVG et PNG, et c'est précisément là que la structure de calque nécessaire ici est perdue. Si vous utilisez Figma, fournissez **chaque élément séparément en SVG**, avec des noms de fichiers correspondant aux noms de calques, de sorte que la structure peut être reconstruite à la main. Photoshop importe dans Animate avec ses calques intacts, comme Illustrator, mais vous donne du raster au lieu du vecteur.

Si vous êtes plus rapide dans Figma, utilisez-le pour la phase du concept et livrez la version finale dans Illustrator.

Structure du fichier :

- Un artboard par écran, chacun exactement 1920 × 1080, nommé d'après les cadres ci-dessus.
- Pièces réutilisables (bouton, ligne du joueur, option de réponse, minuterie) en tant que **symboles** ou composants, pas en tant que copies détachées.
- Noms des couches en anglais, sans espaces: `question`, `option1` à `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Couleurs sous forme d'échantillons nommés et de texte sous la forme de styles nommés, plutôt que de définir individuellement chaque objet.

### Deliverables checklist

1. The **source file**, structured as above.
2. **Each frame as a PNG**, 1920 × 1080 - a reference for how it should look. For frame 2, both the version with and the version without a client logo.
3. **The element sheet** as one artboard: the content building blocks and the controls listed above.
4. **Each separate graphic element as a transparent PNG at 2×**, in one folder, filename matching the layer name.
5. **The timer** as keyframes or a written description of the progression.
6. **Fonts** as `.ttf` or `.otf`, with proof of licence.
7. **The colour list** described above, as hex values.
8. **Half a page of notes**: what the idea is, how the options should appear, what moves and what stays still. Not a ten-page design rationale - whoever builds the theme needs to know what to build. Les idées de motion peuvent être décrites ou fournies comme une animation approximative.

### Order of work

Start with frame 3, the question screen, together with the element sheet, and get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme, and the question screen is the one the room looks at longest. Frames 1 and 2 follow naturally from them; frames 5 to 7 come last.

---

## Appendix - symbol names

Pour l'exhaustivité, et pour tous ceux qui veulent savoir exactement où se trouve leur oeuvre. **You do not need to read this to do the work**; the seven frames and the element sheet above are enough. L'utilisation de ces noms comme noms de calques enregistre une étape de traduction.

| Frame                                               | Nom du symbole                                                                                                                            | Pièces requises                                                                                                                                                                                |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Cadre général             | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (the content area); `title` text box optional                                                                                                                 |
| 1b. Question picker, long question  | `MultiQuestionScreen`, `LongQuestionScreen`; both optional, fall back to the general frame                                                | picker: `questions` placeholder, `timer`; long question: `question` placeholder                                                                                |
| 2. Ecran de connexion        | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, with a `logo` placeholder                                      | `instructions.line1` to `line5`, `connectedPlayers`; `qrCode` placeholder with frame label `showQrCode` optional                                                                               |
| 2b. Ecran d'attente                 | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | `header.text`                                                                                                                                                                                  |
| 3. Écran de la question      | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` à `option4`, frame labels `showOptions` et `showFeedback`                                                                                 |
| 4. Question with attachment  | `QuestionScreenAttachment`                                                                                                                | comme ci-dessus, plus `attachment.placeholder`                                                                                                                                                 |
| 4b. Full-screen attachment          | `Écran de pièce jointe`                                                                                                                   | `placeholder`                                                                                                                                                                                  |
| 5. Écran de réponse          | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` à `option4`, `answer.text`, `feedback.text`                                                                                                                                          |
| 5b. Ouvrir la réponse à la question | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` variants optional                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 6. Classements               | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` and `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in the row: `position`, `name`, `score`, `avatar` optional                           |
| 7. Introduction de la manche | one or more symbols of any name; the configuration file maps each of the six categories to a symbol                                       | -                                                                                                                                                                                              |
| -                                                   | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                             |
| -                                                   | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no artwork of their own needed - built from what appears in your frames                                                                                                                        |
| -                                                   | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | only shown in the desktop app, not in a live quiz. Not part of the brief: they are taken from the theme template and restyled with your background and buttons |

The stock theme's round intro symbols are called `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` and `RoundIntroTedCultHist`; art and history share the last one. The "Ted" in those names is a leftover from the original theme's character and does not mean a character has to appear in them.

Chaque élément avec `.text` après c'est une boîte de texte ajustée comme décrit ci-dessus : un rectangle que le moteur se remplit lui-même. The `timer` element is a movie clip with its own timeline; the engine reads its frame count and moves the playhead in proportion to elapsed time, at most 24 times per second.

### Ce que le fichier de configuration prend de votre design

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

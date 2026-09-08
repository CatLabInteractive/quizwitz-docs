---
id: theme-design-guide
title: Guide de conception d'un thème
---

# Guide de conception d'un thème

[Thématisation](/docs/advanced/theming) explique comment un thème QuizWitz est construit : dans Adobe Animate, exporté sous forme de bibliothèque CreateJS. Cette page traite de l'étape qui précède - la **conception** du thème.

Elle s'adresse à un graphiste et part du principe que la conception et la production dans Animate sont assurées par des personnes différentes. Peu de graphistes travaillent encore dans Adobe Animate, il est donc courant qu'un graphiste livre les visuels et que quelqu'un d'autre assemble le thème. Cela fonctionne bien, mais uniquement si les visuels sont livrés sous une forme réellement exploitable par celui qui construit le thème. Cette page décrit cette forme et sert en même temps de liste des livrables lorsque vous demandez un devis à un graphiste.

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

## Sept cadres et une planche d'éléments

Le jeu compte des dizaines d'états d'écran distincts, mais la plupart sont des variantes d'une même mise en page. **Vous concevez sept cadres et une planche d'éléments ; le reste en découle.** Ce n'est pas un raccourci - c'est ainsi que fonctionne le moteur. Un écran sans visuels propres se rabat sur un cadre général.

La planche compte autant que les cadres : un écran qui se rabat a tout de même besoin de mobilier dans sa zone de contenu - un panneau, une ligne, un filet - et ce mobilier est un choix de conception, pas quelque chose qui se déduirait d'un fond.

| #     | Cadre                          | Ce qui s'y trouve                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Ce qui en découle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Cadre général**              | Le fond, un titre d'en-tête et une zone de contenu vide en dessous. Pas une composition finie - le cadre à l'intérieur duquel le reste se construit.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Treize états d'écran : explication de manche, classement, présentation des joueurs, variantes à choix multiples, questions longues, avertissements Seats, réglages. Chacun remplit cette zone de contenu à sa manière avec des éléments de la planche, elle doit donc accueillir des choses qui ne se ressemblent pas du tout. Le sélecteur de questions et la question longue peuvent recevoir leur propre composition si vous le souhaitez ; sinon ils utilisent ce cadre. |
| **2** | **Connexion et attente**       | Deux écrans, pas un. L'**écran de connexion** est ce que la salle voit pour rejoindre la partie : cinq lignes d'instructions, un code de jeu, un code QR, une ligne indiquant le nombre de joueurs connectés, et une liste des joueurs qui arrivent au compte-gouttes. Concevez-le **deux fois** : avec un logo client et sans. Le code de jeu et le code QR sont générés par le moteur ; réservez un carré pour le code QR. L'**écran d'attente** reste affiché pendant que le quizmaster lit une question à voix haute et il est presque vide : le logo du quiz lui-même, ou les visuels du thème, et rien d'autre. Il reste à l'écran plus longtemps que presque tout le reste du jeu. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **3** | **Écran de question**          | La question, un minuteur, quatre options de réponse, une ligne de feedback. L'écran que la salle regarde le plus longtemps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **4** | **Question avec pièce jointe** | La même chose, organisée autour d'une image ou d'une vidéo. Peut être une composition différente de celle du cadre 3. La pièce jointe est mise à l'échelle pour tenir dans le cadre que vous dessinez, une image en format paysage comme en format portrait doit donc y rester acceptable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Également la variante de pièce jointe en plein écran, et les pièces jointes affichées entre les questions.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **5** | **Écran de réponse**           | Quelle réponse était correcte, comment les réponses de la salle se sont réparties entre les options, et une ligne de feedback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Également l'écran de réponse pour les questions ouvertes et pour les questions avec pièce jointe.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **6** | **Classement et gagnant**      | Une liste de joueurs avec la position, l'avatar, le nom et le score. Livrez la **ligne de joueur** comme un élément distinct et réutilisable - elle est répétée six fois par défaut, jusqu'à dix.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | À la fois le classement entre les manches et le gagnant final.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **7** | **Intro de manche**            | Une courte annonce par catégorie de manche. Il y a six catégories : sciences & techniques, nature, divertissement & musique, sport, art, histoire. Une même conception peut servir plusieurs catégories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Les six catégories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### La planche d'éléments

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

### Ce qui est décidé pour vous

- **Les téléphones des joueurs.** Une mise en page HTML fixe, stylée à partir de votre liste de couleurs.
- **La poignée de choses que le moteur dessine lui-même.** Une partie du mobilier est dessinée dans le code plutôt que reprise du thème - les filets entre les lignes de l'échelle de points, la ligne mise en évidence dans le sélecteur de questions, le code QR. Ces éléments prennent leur couleur dans la liste de **La couleur sous forme de liste** et nulle part ailleurs, cette liste est donc le seul contrôle que vous avez sur eux.
- **Quels écrans se rabattent sur le cadre général, et comment.**
- **La façon dont les six catégories sont associées aux visuels d'intro de manche.** Cette association est un réglage de configuration, une même intro peut donc être réutilisée pour plusieurs catégories.
- **Tout le rythme et toutes les durées d'animation.**
- **Le son.** Un thème peut embarquer sa propre musique et ses propres effets sonores, mais c'est un livrable distinct qui ne fait pas partie du brief de conception.

### Un personnage est facultatif

Le thème QuizWitz d'origine a un personnage qui parle et réagit. Rien n'en impose un : le validateur de thème ne fait qu'avertir à propos de l'élément `ted` ; il n'échoue pas en son absence. Le [thème Emerald](/docs/advanced/emerald-theme) est livré sans personnage, et s'en passer supprime le travail d'animation le plus coûteux - synchronisation labiale, yeux, bras.

Sans personnage, l'intro de manche devient un moment graphique, typographique ou illustratif. Deux approches gardent le travail dans des proportions raisonnables : une composition avec une variante de couleur ou d'icône par catégorie, ou une annonce universelle unique dont seul le nom de la manche change. Six intros vraiment différentes, cela fait beaucoup de travail pour quelques secondes à l'écran.

---

## À quoi ressemblent ces cadres en pratique

Les écrans ci-dessous proviennent d'un thème existant. Ils sont là pour montrer **quels éléments apparaissent sur chaque écran et à quel moment**. Ils ne sont une référence ni de style _ni_ de mise en page : l'endroit où ce thème place sa question, ses options et son minuteur relève de son propre choix, et le vôtre peut être complètement différent. Lisez-les pour ce qui doit être présent, pas pour l'endroit où cela se trouve. Tous, et bien d'autres, peuvent être joués dans le [testeur de thème](https://client.quizwitz.com/test.html).

### Cadre 1 - le cadre général

Deux moments de jeu sur le même cadre : un sélecteur de questions et une échelle de points.

Regardez le peu qu'ils ont en commun. Le sélecteur place ses trois lignes dans un panneau bordé ; l'échelle n'a aucun panneau, seulement des lignes séparées par de fins filets. Ce que les deux partagent, c'est le fond et le bandeau d'en-tête au-dessus - tout ce qui se trouve en dessous appartient à l'écran individuel et est rempli par le jeu, pas par vous.

![Le cadre général avec un sélecteur de questions à trois lignes](/images/theme-design/frame1-general-multiquestion.png)

![Le cadre général avec une échelle de points à cinq niveaux](/images/theme-design/frame1-general-strikeladder.png)

Ce panneau et ces filets sont des choix de conception, et ils vous reviennent - ils proviennent de la **planche d'éléments**, pas de ce cadre. Ce que ce cadre doit faire, c'est les accueillir : concevez la zone de contenu comme une zone vide, neutre et généreuse, qui fonctionne aussi bien avec un panneau bordé, une liste nue qu'un tableau de lignes. Un fond chargé en son centre, ou un en-tête qui ne fonctionne qu'avec un panneau glissé juste en dessous, c'est là que cela casse.

### Cadre 2 - connexion et attente

Avec un logo client à côté du code de jeu, et sans, où ce sont les visuels propres au thème qui portent l'écran :

![Écran de connexion avec un logo client](/images/theme-design/frame2-connect.png)

![Écran de connexion sans logo client](/images/theme-design/frame2-connect-nologo.png)

L'écran d'attente est une composition à part et non une variante de l'écran de connexion - les deux ne partagent que le fond. Il reste affiché pendant que le quizmaster lit une question à voix haute, et il est presque vide : le logo du quiz lui-même, ou les visuels du thème, et rien d'autre. Il reste à l'écran plus longtemps que presque tout le reste du jeu, il mérite donc plus d'attention qu'un écran vide n'en reçoit d'ordinaire.

![Écran d'attente](/images/theme-design/frame2-pending.png)

### Cadre 3 - l'écran de question

Quatre options, la question au-dessus, le minuteur au milieu. Notez qu'une option peut se réduire à un simple emoji.

![Écran de question avec quatre options textuelles](/images/theme-design/frame3-question-options.png)

![Écran de question avec des drapeaux comme options de réponse](/images/theme-design/frame3-question-emoji.png)

Une question sans options - les joueurs tapent leur réponse sur leur téléphone. L'écran est presque vide et le minuteur devient l'élément principal :

![Question ouverte avec seulement la question et un grand minuteur](/images/theme-design/frame3-question-open.png)

Le moment où le temps est écoulé. La bulle de feedback apparaît par-dessus l'écran et le minuteur est vide :

![Écran de question à l'état « temps écoulé »](/images/theme-design/frame3-question-timeout.png)

### Cadre 4 - pièce jointe

Les mêmes parties, réorganisées autour d'une zone de pièce jointe, avec les options à gauche et à droite :

![Écran de question avec une image au milieu](/images/theme-design/frame4-question-attachment.png)

Une pièce jointe seule, occupant tout l'écran :

![Pièce jointe en plein écran](/images/theme-design/frame4-attachment-fullscreen.png)

### Cadre 5 - l'écran de réponse

Cet écran passe par trois moments. D'abord la répartition, sans rien de marqué encore :

![Écran de réponse montrant la répartition](/images/theme-design/frame5-answer-mc-spread.png)

Ensuite l'option correcte est cochée et les mauvaises sont barrées :

![Écran de réponse avec l'option correcte révélée](/images/theme-design/frame5-answer-mc-reveal.png)

Et si la question comporte une explication, une bulle descend par-dessus les visuels. Laissez-lui de la place - elle se pose par-dessus tout ce que vous avez conçu :

![Écran de réponse avec la bulle d'explication](/images/theme-design/frame5-answer-mc-explanation.png)

Avec un petit groupe, le même moment est une liste de scores plutôt qu'un graphique :

![Écran de réponse pour un petit groupe](/images/theme-design/frame5-answer-mc-small.png)

Pour une question ouverte, le graphique montre combien de joueurs ont trouvé :

![Écran de réponse pour une question ouverte](/images/theme-design/frame5-answer-open.png)

### Cadre 6 - classement et gagnant

Le classement après une manche. La ligne de joueur est l'élément qui se répète : position, avatar, nom, score.

![Classement avec six lignes de joueur](/images/theme-design/frame6-roundoutro.png)

Le décompte final nomme un joueur à la fois, de la dernière place à la première - place, score et nom d'équipe sous les projecteurs. C'est aussi là que les emoji volants sont les plus denses ; voyez la note plus bas :

![Le décompte du gagnant nommant un joueur](/images/theme-design/frame6-winner-countdown.png)

![Le classement final](/images/theme-design/frame6-winner.png)

### Cadre 7 - l'intro de manche

Une seule conception, éventuellement avec une variante par catégorie :

![Intro de manche pour la catégorie nature](/images/theme-design/frame7-roundintro-nature.png)

![Intro de manche pour la catégorie sciences](/images/theme-design/frame7-roundintro-science.png)

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

En pratique : les quatre options de réponse sont quatre calques distincts, pas un seul. Le minuteur est séparé du fond. Un bouton et son libellé sont deux éléments. Une ligne de joueur est un groupe qui peut être dupliqué.

Ce qui peut être fusionné : les visuels de fond purement décoratifs qui fonctionnent comme une seule image fixe.

C'est la seule règle dont le non-respect fait vraiment mal - il faut alors décomposer ou redessiner les visuels, ce qui est précisément le coût que cette organisation vise à éviter.

### Les effets qui ne survivent pas

Le moteur dessine sur un canvas HTML5. Ceux-ci doivent être **intégrés à l'image** ou abandonnés :

- Flou, ombres portées et lueur en direct sous forme de filtres → fournissez-les sous forme de visuels
- Modes de fusion (produit, superposition, incrustation) → résolvez-les en aplats de couleur
- Effets de calque et calques de réglage
- Dégradés **à l'intérieur** du texte, ou texte avec un contour par caractère
- Masques qui changent d'une image à l'autre

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
- **Le cadre est un maximum, pas une promesse.** Vous en concevez les proportions ; le remplissage varie.
- **Douze langues.** Les mots composés allemands sont longs, et le hongrois n'est pas plus clément. Un cadre juste en anglais tombe à une taille illisible en allemand.
- **Des emoji peuvent apparaître à l'intérieur du texte.** Les joueurs en choisissent un à côté de leur nom d'équipe, et une question ou une option peut en contenir un - parfois une option n'est rien d'autre qu'un emoji. Ils sont dessinés en couleur et sont plus hauts que les lettres qui les entourent.

Ce que la mise en œuvre doit savoir de chaque cadre de texte : où il se trouve, quelle est sa taille, comment il est aligné, quelle couleur et quelle police. Pas : à quel corps.

Deux choses en découlent, dont vous pouvez tirer parti : un grand cadre avec un texte court devient à lui seul une composition typographique forte, et un cadre que vous rendez délibérément étroit et haut force le texte en colonne. Vous pouvez utiliser cet ajustement comme un outil de conception - il ne faut simplement pas concevoir contre lui.

### Le minuteur - obligatoire, et c'est une animation

**Chaque écran de question a un minuteur.** Il n'est pas facultatif ; la salle doit voir combien de temps il reste. Les deux cadres de question en portent un.

**Le minuteur n'est pas un nombre qui décompte mais une animation dont le moteur déplace la tête de lecture.** Vous concevez une progression de « plein » à « vide » - une barre qui se vide, un anneau qui se referme, un sablier, une ligne qui rétrécit. Le moteur joue cette animation exactement à la vitesse qui fait coïncider la dernière image avec la fin de la question.

Ce qui en découle :

- **La durée d'une question n'est pas fixe.** Elle est définie par quiz - souvent vingt à trente secondes, mais elle peut être plus courte ou plus longue. Votre animation est étirée ou compressée pour s'y adapter. Concevez une _progression_, pas une animation d'un nombre de secondes donné.
- **Pas de chiffres ni de graduations par seconde.** Un minuteur qui décompte « 20, 19, 18… » cesse d'être juste dès que la durée change.
- **Les dernières secondes sont le moment le plus tendu du jeu.** Il est utile que la progression devienne plus lisible ou plus pressante vers la fin.
- **Lisible depuis le fond de la salle**, d'un seul coup d'œil.
- **Plusieurs minuteurs sont autorisés.** Une barre en haut et un anneau près de la question sont tous deux pilotés, tant que chacun s'appelle `timer`.

Fournissez le minuteur sous forme d'une série d'images clés ou d'une description de la progression - « la barre se vide de droite à gauche et passe du vert au rouge » suffit.

### Les emoji volants atterrissent par-dessus tout

Chaque joueur choisit un emoji en rejoignant la partie, et le jeu projette ces emoji à travers l'écran. Ils sont dessinés par le moteur sur un calque au-dessus du thème, dans les couleurs qu'a l'emoji du joueur. **Il n'y a rien à concevoir ici** - mais il y a quelque chose à contourner par la conception, car ce ne sont pas une fioriture rare. Ils apparaissent à trois moments :

- **Quand un joueur répond.** Son emoji s'élève depuis le bord inférieur à une position horizontale aléatoire, décrit un arc et retombe hors du champ.
- **Quand un joueur en projette un.** Les joueurs peuvent projeter leur emoji depuis leur téléphone ; l'angle et la vitesse viennent du balayage, et il part du bas au centre, en tournoyant.
- **Quand une place est dévoilée dans le décompte final.** Une gerbe des emoji du joueur nommé : vingt pour une place ordinaire, cinquante pour la troisième, soixante-quinze pour la deuxième, et **cent cinquante pour le gagnant.**

Ils entrent toujours par le bord inférieur, décrivent un arc sous l'effet de la gravité et retombent hors du champ. Ce que cela implique pour la conception :

- **Gardez le tiers inférieur des écrans de classement et de gagnant libre de tout élément petit ou essentiel.** Pendant le décompte, c'est vraiment encombré là en bas.
- **Partez du principe qu'ils jureront avec votre palette.** Ce sont des emoji en pleine couleur venus de tous les coins de la table Unicode, et aucun thème ne les contrôle. Une conception qui ne tient que dans une gamme de couleurs resserrée aura l'air accidentelle pendant ces secondes.
- **Les projections sont supprimées tant qu'une image ou une vidéo est affichée**, les écrans avec pièce jointe restent donc propres.
- Le calque entier peut être désactivé partie par partie, ne construisez donc pas non plus une composition qui dépende de leur présence.

### Polices

- **Les polices doivent pouvoir être incorporées.** Le fichier `.ttf` ou `.otf` est nécessaire, ainsi qu'une licence qui autorise l'incorporation dans une application. Une police dont la licence ne couvre que le web, ou uniquement l'impression, ne peut pas être utilisée. Vérifiez-le avant de concevoir avec elle ; c'est une correction coûteuse après coup.
- Les polices aux jambages supérieurs ou inférieurs inhabituellement grands peuvent être compensées, mais signalez-le si vous en utilisez une.

### La couleur sous forme de liste

Le thème lit une liste de couleurs dans un fichier de configuration, et les téléphones des joueurs sont stylés à partir de la même liste. Fournissez votre palette sous forme de **liste nommée**, et pas seulement sous forme de couleurs dans les visuels :

- **Écran de jeu :** couleur principale, couleur d'accentuation, fond, couleur de panneau ou de conteneur, fond du minuteur, couleur de texte par défaut, couleur du texte d'en-tête, couleur du texte de question, texte des boutons, texte des dialogues et des explications, texte du nom de joueur et du score, la couleur du correct, la couleur de l'incorrect.
- **Les quatre options de réponse :** chacune avec une couleur de fond et une couleur de bordure, plus un aplat par option pour les téléphones et les graphiques.
- **Téléphones des joueurs :** fond, couleur du texte, couleur du contour, couleur du contour des options, ainsi que la couleur de fond et de texte du conteneur de réponse.

Les dégradés sont autorisés sur l'écran de jeu : donnez-les sous forme de deux valeurs hexadécimales.

Quelques couleurs sont la _seule_ prise sur des parties que le moteur dessine lui-même, il vaut donc la peine de les décider plutôt que de les laisser par défaut : le **séparateur** (les filets entre les lignes là où il n'y a pas de panneau, et sur l'échelle de points), les états **actif**, **inactif** et **sélectionné** d'une ligne du sélecteur de questions, le texte des **dialogues**, et le **recto et le verso du code QR**. Si vous les omettez, elles retombent sur des valeurs par défaut intégrées - blanc, gris, rouge, noir et blanc - qui correspondent rarement à une conception.

### Le logo QuizWitz

Les conceptions sur mesure comprennent le logo QuizWitz. Réservez-lui une place où il ne gêne pas la conception.

---

## Ce qu'il faut livrer

### Fichier source - Illustrator de préférence

**Adobe Illustrator (`.ai`) est préférable, et il y a une raison concrète à cela.** Le thème est construit dans Adobe Animate, qui importe directement les fichiers Illustrator et convertit vos calques en calques Animate ou en symboles distincts, en conservant les noms de calques et en laissant les vecteurs modifiables. C'est exactement l'étape qui évite que les visuels soient reconstruits à la main.

Figma ou Photoshop est possible, mais sachez ce qu'il en coûte : avec Figma, tout passe par un export SVG et PNG, et c'est précisément là que se perd la structure de calques nécessaire ici. Si vous utilisez malgré tout Figma, fournissez **chaque élément séparément en SVG**, avec des noms de fichiers correspondant aux noms de calques, afin que la structure puisse être reconstruite à la main. Photoshop s'importe dans Animate avec ses calques intacts, comme Illustrator, mais vous donne du bitmap au lieu du vectoriel.

Si vous êtes plus rapide dans Figma, utilisez-le pour la phase de concept et livrez la version finale dans Illustrator.

Structure du fichier :

- Un plan de travail par écran, chacun exactement en 1920 × 1080, nommé d'après les cadres ci-dessus.
- Les parties réutilisables (bouton, ligne de joueur, option de réponse, minuteur) sous forme de **symboles** ou de composants, pas de copies isolées.
- Des noms de calques en anglais, sans espaces : `question`, `option1` à `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Les couleurs en nuances nommées et le texte en styles nommés, plutôt que définis objet par objet.

### Liste des livrables

1. Le **fichier source**, structuré comme ci-dessus.
2. **Chaque cadre en PNG**, 1920 × 1080 - une référence de l'allure attendue. Pour le cadre 2, la version avec et la version sans logo client.
3. **La planche d'éléments** sur un seul plan de travail : les briques de contenu et les contrôles énumérés ci-dessus.
4. **Chaque élément graphique séparé en PNG transparent à 2×**, dans un seul dossier, le nom de fichier correspondant au nom de calque.
5. **Le minuteur** sous forme d'images clés ou d'une description écrite de la progression.
6. **Les polices** en `.ttf` ou `.otf`, avec justificatif de licence.
7. **La liste de couleurs** décrite ci-dessus, en valeurs hexadécimales.
8. **Une demi-page de notes** : quelle est l'idée, comment les options doivent apparaître, ce qui bouge et ce qui reste immobile. Pas une justification de conception de dix pages - celui qui construit le thème a besoin de savoir quoi construire. Les idées de mouvement peuvent être décrites ou fournies sous forme d'animatique sommaire.

### Ordre de travail

Commencez par le cadre 3, l'écran de question, avec la planche d'éléments, et faites valider les deux avant le reste. À eux deux, ils portent le minuteur, les options, le panneau et chaque contrôle, ils fixent donc le style de tout le thème, et l'écran de question est celui que la salle regarde le plus longtemps. Les cadres 1 et 2 en découlent naturellement ; les cadres 5 à 7 viennent en dernier.

---

## Annexe - noms des symboles

Pour être complet, et pour qui veut savoir exactement où aboutissent ses visuels. **Vous n'avez pas besoin de lire ceci pour faire le travail** ; les sept cadres et la planche d'éléments ci-dessus suffisent. Utiliser ces noms comme noms de calques épargne une étape de traduction.

| Cadre                                                       | Nom du symbole                                                                                                                            | Parties requises                                                                                                                                                                                                          |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Cadre général                     | `GeneralPurposeScreen` ; `GeneralPurposeScreenWithHeader` facultatif                                                                      | `placeholder` (la zone de contenu) ; cadre de texte `title` facultatif                                                                                                                                 |
| 1b. Sélecteur de questions, question longue | `MultiQuestionScreen`, `LongQuestionScreen` ; tous deux facultatifs, se rabattent sur le cadre général                                    | sélecteur : espace réservé `questions`, `timer` ; question longue : espace réservé `question`                                                                                             |
| 2. Écran de connexion                | `PresentationConnectScreen` ; `PresentationConnectScreenWithLogo` facultatif, avec un espace réservé `logo`                               | `instructions.line1` à `line5`, `connectedPlayers` ; espace réservé `qrCode` avec l'étiquette d'image `showQrCode` facultatif                                                                                             |
| 2b. Écran d'attente                         | `PendingScreen` ; `PendingScreenWithLogo` facultatif                                                                                      | `header.text`                                                                                                                                                                                                             |
| 3. Écran de question                 | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` à `option4`, étiquettes d'image `showOptions` et `showFeedback`                                                                                                      |
| 4. Question avec pièce jointe        | `QuestionScreenAttachment`                                                                                                                | comme ci-dessus, plus `attachment.placeholder`                                                                                                                                                                            |
| 4b. Pièce jointe en plein écran             | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                             |
| 5. Écran de réponse                  | `AnswerPieScreen` ; `AnswerPieScreenAttachment` facultatif                                                                                | `option1` à `option4`, `answer.text`, `feedback.text`                                                                                                                                                                     |
| 5b. Réponse à une question ouverte          | `AnswerScreen`, `AnswerOpenQuestionPieScreen` ; variantes `…Attachment` facultatives                                                      | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                                     |
| 6. Classement                        | `WinnerScreen` + `PlayerScore` ; `WinnerScreen_round`, `WinnerScreen_game` et `PlayerScoreNoImage` facultatifs                            | `header.text`, `players`, `feedback.text` (`playAgain.text` facultatif) ; dans la ligne : `position`, `name`, `score`, `avatar` facultatif                                             |
| 7. Intro de manche                   | un ou plusieurs symboles de n'importe quel nom ; le fichier de configuration associe chacune des six catégories à un symbole              | -                                                                                                                                                                                                                         |
| -                                                           | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                                        |
| -                                                           | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | aucun visuel propre nécessaire - construits à partir de ce qui apparaît dans vos cadres                                                                                                                                   |
| -                                                           | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | affichés uniquement dans l'application de bureau, pas dans un quiz en direct. Ne font pas partie du brief : ils sont repris du modèle de thème et restylés avec votre fond et vos boutons |

Les symboles d'intro de manche du thème d'origine s'appellent `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` et `RoundIntroTedCultHist` ; l'art et l'histoire partagent le dernier. Le « Ted » de ces noms est un reste du personnage du thème d'origine et ne signifie pas qu'un personnage doive y apparaître.

Chaque élément suivi de `.text` est un cadre de texte ajusté comme décrit ci-dessus : un rectangle que le moteur remplit lui-même. L'élément `timer` est un clip vidéo doté de son propre scénario ; le moteur lit son nombre d'images et déplace la tête de lecture proportionnellement au temps écoulé, au maximum 24 fois par seconde.

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

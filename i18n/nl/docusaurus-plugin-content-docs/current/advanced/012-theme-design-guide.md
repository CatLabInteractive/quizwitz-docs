---
id: theme-design-guide
title: Handleiding voor thema-ontwerp
---

# Handleiding voor thema-ontwerp

[Thematisering](/docs/advanced/theming) legt uit hoe een QuizWitz-thema gebouwd wordt: in Adobe Animate, geëxporteerd als een CreateJS-bibliotheek. This page covers the step before that - **designing** the theme.

Ze is geschreven voor een grafisch ontwerper en gaat ervan uit dat het ontwerp en de productie in Animate door verschillende mensen gebeuren. Weinig ontwerpers werken nog in Adobe Animate, dus is het gebruikelijk dat een ontwerper het beeldmateriaal levert en iemand anders het thema in elkaar zet. Dat werkt goed, maar alleen als het beeldmateriaal wordt aangeleverd in een vorm die bruikbaar is voor wie het thema bouwt. This page describes that shape, and doubles as the list of deliverables when you ask a designer for a quote.

:::tip
If you only want to change colours, fonts and backgrounds, you do not need any of this - customise the [Emerald theme](/docs/advanced/emerald-theme) instead.
:::

:::info[See it running]
Every screen described here can be played live, with sample data, in the **theme tester** at [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). It loads a theme and offers a menu of test screens: questions with and without an attachment, the answer spread for a small and a large group, the standings, the round intros, the connect screen with and without a client logo, and so on. Add `?theme=emerald` to the address to see the [Emerald theme](/docs/advanced/emerald-theme). Whoever builds the theme uses the same page to check it while it is being assembled.
:::

---

## Wat je ontwerpt

Een spel QuizWitz wordt door een hele zaal tegelijk gespeeld, en er zijn altijd twee schermen in het spel:

- **The game screen** - a projector or TV, 1920 × 1080. Vragen, antwoorden, hoe de antwoorden van de zaal verdeeld waren, het klassement. Dit is wat jij ontwerpt.
- **De telefoon van elke speler**, waarop het antwoord wordt ingetikt. That is a web page with a fixed layout; it is styled from your colour list, not laid out by you.

A theme is the complete visual skin of the game screen: background, typography, colour, the way a question with four options is presented, how the standings build up, how a round is announced.

---

## Seven frames and an element sheet

The game has dozens of distinct screen states, but most are variants of the same layout. **You design seven frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Een scherm zonder eigen beeldmateriaal valt terug op een algemeen frame.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule - and that furniture is a design decision, not something that can be inferred from a background.

| #     | Frame                        | Wat erop staat                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Wat eruit wordt afgeleid                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Algemeen frame**           | De achtergrond, een koptitel en een leeg contentvlak eronder. Not a finished composition - the frame the rest is built inside.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Dertien schermtoestanden: ronde-uitleg, klassement, spelersintroductie, meerkeuzevarianten, lange vragen, Seats-waarschuwingen, instellingen. Each fills that content area its own way with elements from the sheet, so it has to hold things that look nothing alike. The question picker and the long question may get a composition of their own if you want them to; otherwise they use this frame. |
| **2** | **Connect and waiting**      | Two screens, not one. The **connect screen** is what the room sees to join: five lines of instruction, a join code, a QR code, a line with the number of connected players, and a list of players trickling in. Design it **twice**: with a client logo and without one. The join code and the QR code are generated by the engine; reserve a square for the QR code. The **waiting screen** stays up while the quizmaster reads a question aloud and is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **3** | **Vraagscherm**              | De vraag, een timer, vier antwoordopties, een feedbackregel. Het scherm waar de zaal het langst naar kijkt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **4** | **Question with attachment** | Hetzelfde, maar geschikt rond een afbeelding of video. Kan een andere samenstelling zijn dan frame 3. The attachment is scaled to fit inside the box you draw, so both a landscape and a portrait image must look acceptable in it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Also the full-screen attachment variant, and attachments shown between questions.                                                                                                                                                                                                                                                                                                                                                                       |
| **5** | **Antwoordscherm**           | Welk antwoord juist was, hoe de antwoorden van de zaal over de opties verdeeld waren, en een feedbackregel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Also the answer screen for open questions and for questions with an attachment.                                                                                                                                                                                                                                                                                                                                                                         |
| **6** | **Klassement en winnaar**    | A list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element - it is repeated six times by default, up to ten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Zowel het tussenklassement tussen de rondes als de eindwinnaar.                                                                                                                                                                                                                                                                                                                                                                                         |
| **7** | **Ronde-intro**              | Een korte aankondiging per rondecategorie. Er zijn zes categorieën: wetenschap & techniek, natuur, entertainment & muziek, sport, kunst, geschiedenis. One design may serve several categories.                                                                                                                                                                                                                                                                                                                                                                                                                                             | Alle zes de categorieën.                                                                                                                                                                                                                                                                                                                                                                                                                                |

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

### Wat voor jou beslist wordt

- **The players' phones.** A fixed HTML layout, styled from your colour list.
- **The handful of things the engine draws itself.** Some furniture is drawn in code rather than taken from the theme - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Those take their colour from the list in **Colour as a list** and nothing else, so that list is the only control you have over them.
- **Welke schermen op het algemene frame terugvallen, en hoe.**
- **How the six categories map onto the round intro artwork.** That mapping is a configuration setting, so one intro can be reused for several categories.
- **Alle timing en animatieduur.**
- **Sound.** A theme can carry its own music and sound effects, but that is a separate deliverable and not part of the design brief.

### Een personage is optioneel

Het standaardthema van QuizWitz heeft een personage dat praat en reageert. Niets vereist er een: de themavalidator waarschuwt alleen over het `ted`-element; hij faalt niet zonder. The [Emerald theme](/docs/advanced/emerald-theme) ships without a character, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Zonder personage wordt de ronde-intro een grafisch, typografisch of illustratief moment. Twee aanpakken houden het werk in verhouding: één compositie met een kleur- of icoonvariant per categorie, of één universele aankondiging waarbij alleen de rondenaam verandert. Zes echt verschillende intro's is veel werk voor een paar seconden schermtijd.

---

## Hoe deze frames er in de praktijk uitzien

De schermen hieronder komen uit een bestaand thema. They are here to show **which elements appear on each screen and when**. They are not a reference for style _or_ layout: where this theme puts its question, its options and its timer is its own decision, and yours can differ completely. Read them for what has to be present, not for where it goes. All of them, and more, can be played in the [theme tester](https://client.quizwitz.com/test.html).

### Frame 1 - the general frame

Two game moments on the same frame: a question picker and a points ladder.

Look at how little they have in common. The picker puts its three rows inside a panel with a border; the ladder has no panel at all, just rows separated by thin rules. What the two share is the background and the header band above them - everything below that belongs to the individual screen and is filled by the game, not by you.

![Het algemene frame met een vraagkeuze in drie rijen](/images/theme-design/frame1-general-multiquestion.png)

![Het algemene frame met een puntenladder in vijf niveaus](/images/theme-design/frame1-general-strikeladder.png)

That panel and those rules are design decisions, and they are yours to make - they come from the **element sheet**, not from this frame. What this frame has to do is hold them: design the content area as an empty, neutral, roomy zone that works with a bordered panel, a bare list and a table of rows alike. A background that is busy in the middle, or a header that only works with a panel tucked right underneath it, is where that breaks.

### Frame 2 - connect and waiting

Met een klantlogo naast de deelnamecode, en zonder, waarbij het eigen beeldmateriaal van het thema het scherm draagt:

![Verbindingsscherm met een klantlogo](/images/theme-design/frame2-connect.png)

![Verbindingsscherm zonder klantlogo](/images/theme-design/frame2-connect-nologo.png)

The waiting screen is a separate composition rather than a variant of the connect screen - the two share only a background. It stays up while the quizmaster reads a question aloud, and it is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game, so it deserves more attention than an empty screen usually gets.

![Wachtscherm](/images/theme-design/frame2-pending.png)

### Frame 3 - the question screen

Vier opties, de vraag erboven, de timer in het midden. Merk op dat een optie ook alleen uit een emoji kan bestaan.

![Vraagscherm met vier tekstopties](/images/theme-design/frame3-question-options.png)

![Vraagscherm met vlaggen als antwoordopties](/images/theme-design/frame3-question-emoji.png)

A question with no options - players type their answer on their phone. Het scherm is bijna leeg en de timer wordt het hoofdelement:

![Open vraag met alleen de vraag en een grote timer](/images/theme-design/frame3-question-open.png)

Het moment waarop de tijd om is. De feedbackballon verschijnt over het scherm en de timer staat leeg:

![Vraagscherm met de melding dat de tijd om is](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - attachment

The same parts, rearranged around an attachment area, with the options to the left and right:

![Vraagscherm met een afbeelding in het midden](/images/theme-design/frame4-question-attachment.png)

An attachment on its own, filling the screen:

![Full-screen attachment](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - the answer screen

Dit scherm doorloopt drie momenten. Eerst de spreiding, met nog niets gemarkeerd:

![Antwoordscherm met de spreiding](/images/theme-design/frame5-answer-mc-spread.png)

Daarna wordt de juiste optie aangevinkt en worden de foute doorkruist:

![Antwoordscherm met de juiste optie onthuld](/images/theme-design/frame5-answer-mc-reveal.png)

En als de vraag een uitleg bevat, valt er een ballon over het beeldmateriaal. Leave room for it - it lands on top of whatever you designed:

![Antwoordscherm met de uitlegballon](/images/theme-design/frame5-answer-mc-explanation.png)

Bij een kleine groep is hetzelfde moment een scorelijst in plaats van een diagram:

![Antwoordscherm bij een kleine groep](/images/theme-design/frame5-answer-mc-small.png)

Bij een open vraag toont het diagram hoeveel spelers het juist hadden:

![Antwoordscherm bij een open vraag](/images/theme-design/frame5-answer-open.png)

### Frame 6 - standings and winner

Het klassement na een ronde. De spelersrij is het element dat zich herhaalt: positie, avatar, naam, score.

![Klassement met zes spelersrijen](/images/theme-design/frame6-roundoutro.png)

The final countdown names one player at a time, from last place to first - place, score and team name in the spotlight. This is also where the flying emoji are heaviest; see the note further down:

![De aftelling die één speler noemt](/images/theme-design/frame6-winner-countdown.png)

![Het eindklassement](/images/theme-design/frame6-winner.png)

### Frame 7 - the round intro

Één ontwerp, eventueel met een variant per categorie:

![Ronde-intro voor de categorie natuur](/images/theme-design/frame7-roundintro-nature.png)

![Ronde-intro voor de categorie wetenschap](/images/theme-design/frame7-roundintro-science.png)

---

## Ontwerpregels

Geen van deze regels beperkt je visuele ontwerp. Ze gaan over hoe het bestand is opgebouwd.

### Formaat

- **1920 × 1080 pixels**, exact. Eén frame per scherm.
- Werk **in vector** waar het kan. Waar je raster gebruikt (foto's, texturen): minstens 2× de weergavegrootte.
- The Animate document runs at **24 frames per second**. Relevant als je bewegingsideeën aanlevert.
- Houd **5% marge** aan de randen vrij van essentiële informatie. Projectoren snijden aan.

### Layer structure - the rule that matters most

**Alles wat kan bewegen, verschijnen of van waarde veranderen, staat op een eigen laag met een eigen naam.** Niets samengevoegd, niets afgevlakt.

In de praktijk: de vier antwoordopties zijn vier aparte lagen, niet één. De timer staat los van de achtergrond. Een knop en het label erin zijn twee elementen. Een spelersrij is één groep die gedupliceerd kan worden.

Wat wél samengevoegd mag: puur decoratief achtergrondbeeld dat als één stilstaand beeld werkt.

This is the one rule that genuinely hurts when it is not followed - the artwork then has to be pulled apart or redrawn, which is exactly the cost this arrangement is meant to avoid.

### Effecten die het niet overleven

De engine tekent op een HTML5-canvas. Deze moeten **in het beeld ingebakken** worden of achterwege blijven:

- Live blur, slagschaduwen en gloed als filter → lever ze als beeldmateriaal aan
- Overvloeimodi (multiply, screen, overlay) → reken ze door naar platte kleur
- Laageffecten en aanpassingslagen
- Verlopen **in** tekst, of tekst met een contour per teken
- Maskers die per frame veranderen

Verlopen in vormen zijn prima. Transparantie is prima. Schaduwen als vast beeld zijn prima.

### Hoe tekst zich gedraagt

Hier verschilt ontwerpen voor QuizWitz het meest van gewoon ontwerpwerk.

**Je stelt geen lettergrootte in. Je tekent een vak.**

Alle tekst wordt live getekend door een component die twee dingen krijgt: een tekst, en de rechthoek die jij hebt getekend. Vervolgens zoekt hij **de grootste lettergrootte waarbij die tekst, afgebroken over meerdere regels, nog volledig binnen het vak past**. Een lange tekst krimpt om te passen; een korte groeit tot het vak vol is.

![Een keuzescherm waarin drie regels van verschillende lengte elk een andere lettergrootte krijgen](/images/theme-design/frame1-general-multiquestion.png)

Three rows, three identical boxes - and three completely different font sizes, purely because the text is shorter or longer. "Where is love" krijgt de volle hoogte; de vraag erboven moet het met twee kleine regels doen. De labels links gedragen zich net zo.

Wat daaruit volgt:

- **Dezelfde vraag ziet er in een ander spel anders uit.** Een vraag van zes woorden verschijnt groot en beeldvullend; een van vijfendertig woorden verschijnt klein over vijf regels, in precies hetzelfde vak. Beide moeten er goed uitzien.
- **Ontwerp elk tekstvak twee keer.** Vul het één keer met een heel kort voorbeeld en één keer met een heel lang voorbeeld, en controleer of de compositie in beide gevallen klopt. Als vuistregel: een antwoordoptie loopt van één tot ongeveer acht woorden, een vraag van vijf tot veertig, een spelersnaam van twee tot twintig tekens.
- **Reken niet op een vast aantal regels.** Een titel die "altijd op één regel" staat, bestaat hier niet.
- **Lijn tekst niet optisch uit met iets anders.** Tekst die op een lijn of een vorm moet aansluiten, gaat schuiven zodra hij korter of langer is. Gebruik vakken die ruim genoeg zijn en een uitlijning (links, gecentreerd, rechts) in plaats van exacte posities.
- **Het vak is een maximum, geen belofte.** Jij ontwerpt de verhoudingen; de vulling varieert.
- **Twelve languages.** German compounds are long, and Hungarian is no kinder. Een vak dat in het Engels krap zit, valt in het Duits terug op een onleesbaar kleine letter.
- **Emoji can appear inside text.** Players pick one next to their team name, and a question or an option can contain one - sometimes an option is nothing but an emoji. Ze worden in kleur getekend en zijn hoger dan de letters eromheen.

Wat de bouw over elk tekstvak moet weten: waar het staat, hoe groot het is, hoe het is uitgelijnd, welke kleur en welk lettertype. Niet: op welke puntgrootte.

Twee dingen volgen daaruit die je kunt gebruiken: een groot vak met korte tekst wordt vanzelf een sterke typografische compositie, en een vak dat je bewust smal en hoog maakt, dwingt tekst in een kolom. You can use the fitting as a design device - you just should not design against it.

### The timer - required, and it is an animation

**Elk vraagscherm heeft een timer.** Hij is niet optioneel; de zaal moet zien hoeveel tijd er nog is. Beide vraagframes hebben er een.

**The timer is not a counting number but an animation whose playhead the engine moves.** You design a progression from "full" to "empty" - a bar draining, a ring closing, an hourglass, a shrinking line. De engine speelt die animatie precies zo snel af dat het laatste beeld samenvalt met het einde van de vraag.

Wat volgt:

- **The question duration is not fixed.** It is set per quiz - often twenty to thirty seconds, but it can be shorter or longer. Jouw animatie wordt uitgerekt of samengeperst om te passen. Ontwerp een _verloop_, geen animatie van een vast aantal seconden.
- **Geen cijfers of streepjes per seconde.** Een timer die "20, 19, 18…" aftelt, klopt niet meer zodra de duur verandert.
- **De laatste seconden zijn het spannendste moment van het spel.** Het helpt als het verloop naar het einde toe duidelijker of dringender wordt.
- **Afleesbaar vanaf achteraan in de zaal**, in één oogopslag.
- **Meerdere timers mogen.** Een balk bovenaan en een ring bij de vraag worden allebei aangestuurd, zolang elk element `timer` heet.

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

### Lettertypen

- **Lettertypen moeten insluitbaar zijn.** Het `.ttf`- of `.otf`-bestand is nodig, plus een licentie die insluiting in een applicatie toelaat. Een lettertype dat alleen als webfont of alleen voor drukwerk gelicentieerd is, kan niet gebruikt worden. Controleer dit voor je ermee ontwerpt; achteraf is het een dure correctie.
- Lettertypen met ongewoon grote stok- of staartlengtes kunnen bijgesteld worden, maar meld het als je er een gebruikt.

### Kleur als lijst

The theme reads a colour list from a configuration file, and the players' phones are styled from the same list. Lever je palet aan als een **benoemde lijst**, niet alleen als kleuren in het beeldmateriaal:

- **Game screen:** main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong.
- **The four answer options:** each with a background and a border colour, plus one flat colour per option for the phones and the charts.
- **Players' phones:** background, text colour, outline colour, option outline colour, and the background and text colour of the answer container.

Gradients are allowed on the game screen: give them as two hex values.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting: the **separator** (the rules between rows where there is no panel, and on the points ladder), the **active**, **inactive** and **selected** states of a row in the question picker, the **dialog** text, and the **front and back of the QR code**. If you leave them out they fall back to built-in defaults - white, grey, red, black and white - which rarely match a design.

### Het QuizWitz logo

Eigen ontwerpen bevatten het QuizWitz-logo. Reserveer er een plek voor waar het het ontwerp niet in de weg zit.

---

## Wat je aanlevert

### Source file - Illustrator preferred

**Adobe Illustrator (`.ai`) heeft de voorkeur, en daar zit een concrete reden achter.** Het thema wordt gebouwd in Adobe Animate, dat Illustrator-bestanden rechtstreeks importeert en jouw lagen omzet in Animate-lagen of losse symbolen, met behoud van de laagnamen en met de vectoren nog bewerkbaar. Dat is precies de stap die voorkomt dat het beeldmateriaal met de hand opnieuw opgebouwd moet worden.

Figma of Photoshop kan ook, maar weet wat het kost: bij Figma loopt alles via SVG- en PNG-export, en juist daar gaat de laagstructuur verloren die hier nodig is. Gebruik je toch Figma, lever dan **elk element apart als SVG** aan, met bestandsnamen die overeenkomen met de laagnamen, zodat de structuur met de hand hersteld kan worden. Photoshop importeert in Animate met zijn lagen intact, net als Illustrator, maar levert raster in plaats van vector.

Ben je sneller in Figma, gebruik het dan voor de conceptfase en lever de definitieve versie in Illustrator.

Bestandsstructuur:

- Één artboard per scherm, elk exact 1920 × 1080, genoemd naar de frames hierboven.
- Herbruikbare onderdelen (knop, spelersrij, antwoordoptie, timer) als **symbolen** of componenten, niet als losse kopieën.
- Laagnamen in het Engels, zonder spaties: `question`, `option1` tot `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Kleuren als benoemde stalen en tekst als benoemde stijlen, in plaats van per object ingesteld.

### Deliverables checklist

1. The **source file**, structured as above.
2. **Each frame as a PNG**, 1920 × 1080 - a reference for how it should look. For frame 2, both the version with and the version without a client logo.
3. **The element sheet** as one artboard: the content building blocks and the controls listed above.
4. **Each separate graphic element as a transparent PNG at 2×**, in one folder, filename matching the layer name.
5. **The timer** as keyframes or a written description of the progression.
6. **Fonts** as `.ttf` or `.otf`, with proof of licence.
7. **The colour list** described above, as hex values.
8. **Half a page of notes**: what the idea is, how the options should appear, what moves and what stays still. Not a ten-page design rationale - whoever builds the theme needs to know what to build. Bewegingsideeën mogen beschreven of als ruwe animatic aangeleverd worden.

### Order of work

Start with frame 3, the question screen, together with the element sheet, and get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme, and the question screen is the one the room looks at longest. Frames 1 and 2 follow naturally from them; frames 5 to 7 come last.

---

## Appendix - symbol names

Voor de volledigheid, en voor wie precies wil weten waar zijn beeldmateriaal terechtkomt. **You do not need to read this to do the work**; the seven frames and the element sheet above are enough. Deze namen als laagnamen gebruiken bespaart een vertaalslag.

| Frame                                              | Symbool naam                                                                                                                              | Verplichte onderdelen                                                                                                                                                                          |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Algemeen frame           | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (the content area); `title` text box optional                                                                                                                 |
| 1b. Question picker, long question | `MultiQuestionScreen`, `LongQuestionScreen`; both optional, fall back to the general frame                                                | picker: `questions` placeholder, `timer`; long question: `question` placeholder                                                                                |
| 2. Verbindingsscherm        | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, with a `logo` placeholder                                      | `instructions.line1` to `line5`, `connectedPlayers`; `qrCode` placeholder with frame label `showQrCode` optional                                                                               |
| 2b. Wachtscherm                    | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | `header.text`                                                                                                                                                                                  |
| 3. Vraagscherm              | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` tot `option4`, framelabels `showOptions` en `showFeedback`                                                                                |
| 4. Question with attachment | `QuestionScreenAttachment`                                                                                                                | als hierboven, plus `attachment.placeholder`                                                                                                                                                   |
| 4b. Full-screen attachment         | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                  |
| 5. Antwoordscherm           | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` tot `option4`, `answer.text`, `feedback.text`                                                                                                                                        |
| 5b. Antwoord op open vraag         | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` variants optional                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 6. Klassement               | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` and `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in the row: `position`, `name`, `score`, `avatar` optional                           |
| 7. Ronde-intro              | one or more symbols of any name; the configuration file maps each of the six categories to a symbol                                       | -                                                                                                                                                                                              |
| -                                                  | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                             |
| -                                                  | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no artwork of their own needed - built from what appears in your frames                                                                                                                        |
| -                                                  | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | only shown in the desktop app, not in a live quiz. Not part of the brief: they are taken from the theme template and restyled with your background and buttons |

The stock theme's round intro symbols are called `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` and `RoundIntroTedCultHist`; art and history share the last one. The "Ted" in those names is a leftover from the original theme's character and does not mean a character has to appear in them.

Elk element met `.text` erachter is een passend gemaakt tekstvak zoals hierboven beschreven: een rechthoek die de engine zelf vult. The `timer` element is a movie clip with its own timeline; the engine reads its frame count and moves the playhead in proportion to elapsed time, at most 24 times per second.

### Wat het configuratiebestand uit jouw ontwerp haalt

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

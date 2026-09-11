---
id: theme-design-guide
title: Handleiding voor thema-ontwerp
---

# Handleiding voor thema-ontwerp

[Thematisering](/docs/advanced/theming) legt uit hoe een QuizWitz-thema gebouwd wordt: in Adobe Animate, geëxporteerd als een CreateJS-bibliotheek. Deze pagina gaat over de stap daarvoor - het **ontwerpen** van het thema.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Deze pagina beschrijft die vorm, en dient meteen als lijst van op te leveren onderdelen wanneer je een ontwerper om een offerte vraagt.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Wil je alleen kleuren, lettertypen en achtergronden aanpassen, dan heb je dit allemaal niet nodig - pas dan het [Emerald-thema](/docs/advanced/emerald-theme) aan.
:::

:::info[Zie het in actie]
Elk scherm dat hier beschreven wordt, kun je live met voorbeeldgegevens bekijken in de **themetester** op [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Hij laadt een thema en biedt een menu met testschermen: vragen met en zonder bijlage, de antwoordspreiding bij een kleine en een grote groep, het klassement, de ronde-intro's, het aanmeldscherm met en zonder klantlogo, enzovoort. Voeg `?theme=emerald` toe aan het adres om het [Emerald-thema](/docs/advanced/emerald-theme) te zien. Wie het thema bouwt, gebruikt dezelfde pagina om het te controleren terwijl het in elkaar wordt gezet.
:::

---

## Wat je ontwerpt

Een spel QuizWitz wordt door een hele zaal tegelijk gespeeld, en er zijn altijd twee schermen in het spel:

- **Het spelscherm** - een projector of tv, 1920 × 1080. Vragen, antwoorden, hoe de antwoorden van de zaal verdeeld waren, het klassement. Dit is wat jij ontwerpt.
- **De telefoon van elke speler**, waarop het antwoord wordt ingetikt. Dat is een webpagina met een vaste opmaak; ze wordt gestyled op basis van jouw kleurenlijst, niet door jou vormgegeven.

Een thema is de volledige visuele laag van het spelscherm: achtergrond, typografie, kleur, de manier waarop een vraag met vier opties wordt getoond, hoe het klassement wordt opgebouwd, hoe een ronde wordt aangekondigd.

---

## Eight frames and an element sheet

Het spel heeft tientallen verschillende schermtoestanden, maar de meeste zijn varianten van dezelfde opbouw. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Een scherm zonder eigen beeldmateriaal valt terug op een algemeen frame.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Frame                                                           | Also covers                                                               |
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
De schermen hieronder komen uit een bestaand thema. They show **which elements appear on each screen and when**. Ze zijn geen referentie voor stijl _of_ opmaak: waar dit thema zijn vraag, zijn opties en zijn timer plaatst, is zijn eigen keuze, en die van jou mag daar volledig van afwijken.
:::

### Frame 1 - het algemene frame

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. De vraagkeuze en de lange vraag mogen een eigen compositie krijgen als je dat wilt; anders gebruiken ze dit frame.

Twee spelmomenten op hetzelfde frame: een vraagkeuze en een puntenladder.

![Het algemene frame met een vraagkeuze in drie rijen](/images/theme-design/frame1-general-multiquestion.png)

![Het algemene frame met een puntenladder in vijf niveaus](/images/theme-design/frame1-general-strikeladder.png)

Kijk hoe weinig ze gemeen hebben. De vraagkeuze zet haar drie rijen in een paneel met een rand; de ladder heeft helemaal geen paneel, alleen rijen die door dunne lijnen gescheiden worden. Wat de twee delen is de achtergrond en de kopbalk erboven - alles daaronder hoort bij het scherm zelf en wordt door het spel gevuld, niet door jou.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Wat dit frame moet doen, is ze kunnen dragen: ontwerp het contentvlak als een lege, neutrale, ruime zone die even goed werkt met een paneel met rand, een kale lijst en een tabel met rijen. Een achtergrond die druk is in het midden, of een kopbalk die alleen werkt met een paneel er vlak onder, is waar dat misloopt.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Aanmeldscherm met een klantlogo](/images/theme-design/frame2-connect.png)

![Aanmeldscherm zonder klantlogo](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Wachtscherm](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Vraagscherm met vier tekstopties](/images/theme-design/frame3-question-options.png)

![Vraagscherm met vlaggen als antwoordopties](/images/theme-design/frame3-question-emoji.png)

Een vraag zonder opties - spelers tikken hun antwoord in op hun telefoon. Het scherm is bijna leeg en de timer wordt het hoofdelement:

![Open vraag met alleen de vraag en een grote timer](/images/theme-design/frame3-question-open.png)

Het moment waarop de tijd om is. De feedbackballon verschijnt over het scherm en de timer staat leeg:

![Vraagscherm met de melding dat de tijd om is](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. De bijlage wordt geschaald om binnen het vak te passen dat jij tekent, dus zowel een liggende als een staande afbeelding moet erin acceptabel ogen.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Vraagscherm met een afbeelding in het midden](/images/theme-design/frame4-question-attachment.png)

Een bijlage op zichzelf, schermvullend:

![Schermvullende bijlage](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Eerst de spreiding, met nog niets gemarkeerd:

![Antwoordscherm met de spreiding](/images/theme-design/frame5-answer-mc-spread.png)

Daarna wordt de juiste optie aangevinkt en worden de foute doorkruist:

![Antwoordscherm met de juiste optie onthuld](/images/theme-design/frame5-answer-mc-reveal.png)

En als de vraag een uitleg bevat, valt er een ballon over het beeldmateriaal. Laat er ruimte voor - hij komt boven op wat je ook ontworpen hebt:

![Antwoordscherm met de uitlegballon](/images/theme-design/frame5-answer-mc-explanation.png)

Bij een kleine groep is hetzelfde moment een scorelijst in plaats van een diagram:

![Antwoordscherm bij een kleine groep](/images/theme-design/frame5-answer-mc-small.png)

Bij een open vraag toont het diagram hoeveel spelers het juist hadden:

![Antwoordscherm bij een open vraag](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Klassement met zes spelersrijen](/images/theme-design/frame6-roundoutro.png)

De eindaftelling noemt één speler tegelijk, van de laatste plaats naar de eerste - plaats, score en teamnaam in de schijnwerpers. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![De aftelling die één speler noemt](/images/theme-design/frame6-winner-countdown.png)

![Het eindklassement](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Er zijn zes categorieën: wetenschap & techniek, natuur, entertainment & muziek, sport, kunst, geschiedenis.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Ronde-intro voor de categorie natuur](/images/theme-design/frame7-roundintro-nature.png)

![Ronde-intro voor de categorie wetenschap](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Zonder personage wordt de ronde-intro een grafisch, typografisch of illustratief moment. Twee aanpakken houden het werk in verhouding: één compositie met een kleur- of icoonvariant per categorie, of één universele aankondiging waarbij alleen de rondenaam verandert. Zes echt verschillende intro's is veel werk voor een paar seconden schermtijd.

---

## Het elementenblad

Twee groepen elementen, op één blad, elk één keer getekend en overal hergebruikt.

**Bouwstenen voor content.** Deze vullen het contentvlak van het algemene frame. De schermen die erop terugvallen worden hieruit samengesteld, dus wat je hier tekent bepaalt hoe ze er allemaal uitzien:

- een **paneel**: vulling, rand, hoekafronding - de container waar een lijst of een blok tekst in staat
- een **lijstrij**: de zich herhalende eenheid van elke lijst, met een eigen achtergrond of zonder
- een **scheidingslijn**: de lijn tussen rijen, waar geen paneel is
- een **label-waardepaar**: een kort label links, een waarde rechts

**Bedieningselementen.** Eén keer getekend, op elk scherm gebruikt:

- een **knop** in zijn vier toestanden: rust, hover, ingedrukt, uitgeschakeld
- de symbolen voor **juist** en **fout**
- een **scrollbalk**, een **selectievakje**, een **keuzelijst**
- waar het **QuizWitz-logo** staat

---

## Wat voor jou beslist wordt

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Welke schermen op het algemene frame terugvallen, en hoe.**
- **Hoe de zes categorieën op het beeldmateriaal van de ronde-intro worden afgebeeld.** Die koppeling is een configuratie-instelling, dus één intro kan voor meerdere categorieën hergebruikt worden.
- **Alle timing en animatieduur.**
- **Geluid.** Een thema kan eigen muziek en geluidseffecten bevatten, maar dat is een aparte oplevering en geen onderdeel van de ontwerpbriefing.

---

## Ontwerpregels

Geen van deze regels beperkt je visuele ontwerp. Ze gaan over hoe het bestand is opgebouwd.

### Formaat

- **1920 × 1080 pixels**, exact. Eén frame per scherm.
- Werk **in vector** waar het kan. Waar je raster gebruikt (foto's, texturen): minstens 2× de weergavegrootte.
- Het Animate-document draait op **24 beelden per seconde**. Relevant als je bewegingsideeën aanlevert.
- Houd **5% marge** aan de randen vrij van essentiële informatie. Projectoren snijden aan.

### Laagstructuur - de regel die het meest telt

**Alles wat kan bewegen, verschijnen of van waarde veranderen, staat op een eigen laag met een eigen naam.** Niets samengevoegd, niets afgevlakt.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Wat wél samengevoegd mag: puur decoratief achtergrondbeeld dat als één stilstaand beeld werkt.

Dit is de ene regel die echt pijn doet als hij niet gevolgd wordt - het beeldmateriaal moet dan uit elkaar getrokken of hertekend worden, en dat is precies de kost die deze werkwijze wil vermijden.

### Effecten die het niet overleven

De engine tekent op een HTML5-canvas. Deze moeten **in het beeld ingebakken** worden of achterwege blijven:

| Effect                                                     | What to do instead          |
| ---------------------------------------------------------- | --------------------------- |
| Live blur, drop shadows and glow as filters                | Supply them as artwork      |
| Blend modes (multiply, screen, overlay) | Resolve them to flat colour |
| Laageffecten en aanpassingslagen                           | Bake them in                |
| Verlopen **in** tekst, of tekst met een contour per teken  | Leave them out              |
| Maskers die per frame veranderen                           | Leave them out              |

Verlopen in vormen zijn prima. Transparantie is prima. Schaduwen als vast beeld zijn prima.

### Hoe tekst zich gedraagt

Hier verschilt ontwerpen voor QuizWitz het meest van gewoon ontwerpwerk.

**Je stelt geen lettergrootte in. Je tekent een vak.**

Alle tekst wordt live getekend door een component die twee dingen krijgt: een tekst, en de rechthoek die jij hebt getekend. Vervolgens zoekt hij **de grootste lettergrootte waarbij die tekst, afgebroken over meerdere regels, nog volledig binnen het vak past**. Een lange tekst krimpt om te passen; een korte groeit tot het vak vol is.

![Een vraagkeuze waarin drie regels van verschillende lengte elk een andere lettergrootte krijgen](/images/theme-design/frame1-general-multiquestion.png)

Drie rijen, drie identieke vakken - en drie totaal verschillende lettergroottes, puur omdat de tekst korter of langer is. "Where is love" krijgt de volle hoogte; de vraag erboven moet het met twee kleine regels doen. De labels links gedragen zich net zo.

Wat daaruit volgt:

- **Dezelfde vraag ziet er in een ander spel anders uit.** Een vraag van zes woorden verschijnt groot en beeldvullend; een van vijfendertig woorden verschijnt klein over vijf regels, in precies hetzelfde vak. Beide moeten er goed uitzien.
- **Ontwerp elk tekstvak twee keer.** Vul het één keer met een heel kort voorbeeld en één keer met een heel lang voorbeeld, en controleer of de compositie in beide gevallen klopt. Als vuistregel: een antwoordoptie loopt van één tot ongeveer acht woorden, een vraag van vijf tot veertig, een spelersnaam van twee tot twintig tekens.
- **Reken niet op een vast aantal regels.** Een titel die "altijd op één regel" staat, bestaat hier niet.
- **Lijn tekst niet optisch uit met iets anders.** Tekst die op een lijn of een vorm moet aansluiten, gaat schuiven zodra hij korter of langer is. Gebruik vakken die ruim genoeg zijn en een uitlijning (links, gecentreerd, rechts) in plaats van exacte posities.
- **Twaalf talen.** Duitse samenstellingen zijn lang, en het Hongaars is niet milder. Een vak dat in het Engels krap zit, valt in het Duits terug op een onleesbaar kleine letter.
- **Emoji kunnen in tekst voorkomen.** Spelers kiezen er een naast hun teamnaam, en een vraag of een optie kan er een bevatten - soms bestaat een optie uit niets anders dan een emoji. Ze worden in kleur getekend en zijn hoger dan de letters eromheen.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Niet: op welke puntgrootte.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### De timer - verplicht, en het is een animatie

**Every question screen has a timer**; the room has to see how much time is left.

**De timer is geen aftellend getal maar een animatie waarvan de engine de afspeelkop verplaatst.** Jij ontwerpt een verloop van "vol" naar "leeg" - een balk die leegloopt, een ring die zich sluit, een zandloper, een krimpende lijn. De engine speelt die animatie precies zo snel af dat het laatste beeld samenvalt met het einde van de vraag.

Wat volgt:

- **De vraagduur ligt niet vast.** Ze wordt per quiz ingesteld - vaak twintig tot dertig seconden, maar het kan korter of langer. Jouw animatie wordt uitgerekt of samengeperst om te passen.
- **Geen cijfers of streepjes per seconde.** Een timer die "20, 19, 18…" aftelt, klopt niet meer zodra de duur verandert.
- **De laatste seconden zijn het spannendste moment van het spel.** Het helpt als het verloop naar het einde toe duidelijker of dringender wordt.
- **Afleesbaar vanaf achteraan in de zaal**, in één oogopslag.
- **Meerdere timers mogen.** Een balk bovenaan en een ring bij de vraag worden allebei aangestuurd, zolang elk element `timer` heet.

Lever de timer aan als een reeks keyframes of als een beschrijving van het verloop - "de balk loopt van rechts naar links leeg en verkleurt van groen naar rood" volstaat.

### Vliegende emoji komen boven op alles terecht

Elke speler kiest een emoji bij het deelnemen, en het spel gooit die emoji over het scherm. They are drawn by the engine on a layer above the theme. **Hier valt voor jou niets te ontwerpen** - maar er valt wel iets omheen te ontwerpen, want ze zijn geen zeldzame franje.

Ze verschijnen op drie momenten:

- **Wanneer een speler antwoordt.** De emoji van die speler stijgt op vanaf de onderrand op een willekeurige horizontale positie, maakt een boog en valt weer uit beeld.
- **Wanneer een speler er een wegslingert.** Spelers kunnen hun emoji vanaf hun telefoon wegslingeren; hoek en snelheid komen uit de veegbeweging, en hij vertrekt tollend vanuit het midden onderaan.
- **Wanneer een plaats wordt onthuld in de eindaftelling.** Een uitbarsting van de emoji van de genoemde speler: twintig voor een gewone plaats, vijftig voor de derde, vijfenzeventig voor de tweede, en **honderdvijftig voor de winnaar.**

Wat dat betekent voor het ontwerp:

- **Houd het onderste derde van de klassement- en winnaarschermen vrij van alles wat klein of cruciaal is.** Tijdens de aftelling is het daar echt druk.
- **Ga ervan uit dat ze zullen vloeken met je palet.** Het zijn emoji in volle kleur uit alle hoeken van de Unicode-tabel, en geen enkel thema heeft er vat op. Een ontwerp dat alleen standhoudt binnen een strak kleurbereik oogt tijdens die seconden toevallig.
- **Wegslingeren wordt onderdrukt zolang een afbeelding of video getoond wordt**, dus de bijlageschermen blijven rustig.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Lettertypen

- **Lettertypen moeten insluitbaar zijn.** Het `.ttf`- of `.otf`-bestand is nodig, plus een licentie die insluiting in een applicatie toelaat. Een lettertype dat alleen als webfont of alleen voor drukwerk gelicentieerd is, kan niet gebruikt worden. Controleer dit voor je ermee ontwerpt; achteraf is het een dure correctie.
- Lettertypen met ongewoon grote stok- of staartlengtes kunnen bijgesteld worden, maar meld het als je er een gebruikt.

### Kleur als lijst

Het thema leest een kleurenlijst uit een configuratiebestand, en de telefoons van de spelers worden vanuit dezelfde lijst gestyled. Lever je palet aan als een **benoemde lijst**, niet alleen als kleuren in het beeldmateriaal:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

Verlopen zijn toegestaan op het spelscherm: geef ze als twee hexwaarden.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Laat je ze weg, dan vallen ze terug op ingebouwde standaardwaarden - wit, grijs, rood, zwart en wit - die zelden bij een ontwerp passen.

### Het QuizWitz-logo

Eigen ontwerpen bevatten het QuizWitz-logo. Reserveer er een plek voor waar het het ontwerp niet in de weg zit.

---

## Wat je aanlevert

### Bronbestand - Illustrator heeft de voorkeur

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                                        | Use it for                                 |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. Dat is precies de stap die voorkomt dat het beeldmateriaal met de hand opnieuw opgebouwd moet worden.                                 | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                                         | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Gebruik je toch Figma, lever dan **elk element apart als SVG** aan, met bestandsnamen die overeenkomen met de laagnamen, zodat de structuur met de hand hersteld kan worden. | The concept phase, if you are faster in it |

Bestandsstructuur:

- One artboard per screen, named after the frames above.
- Herbruikbare onderdelen (knop, spelersrij, antwoordoptie, timer) als **symbolen** of componenten, niet als losse kopieën.
- Laagnamen in het Engels, zonder spaties: `question`, `option1` tot `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Kleuren als benoemde stalen en tekst als benoemde stijlen, in plaats van per object ingesteld.

### Checklist van op te leveren onderdelen

1. Het **bronbestand**, opgebouwd zoals hierboven.
2. **Elk frame als PNG**, 1920 × 1080 - een referentie voor hoe het eruit moet zien. Voor frame 2 zowel de versie met als de versie zonder klantlogo.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Elk afzonderlijk grafisch element als transparante PNG op 2×**, in één map, met een bestandsnaam die overeenkomt met de laagnaam.
5. **De timer** als keyframes of als een geschreven beschrijving van het verloop.
6. **Lettertypen** als `.ttf` of `.otf`, met bewijs van licentie.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Een halve pagina notities**: wat het idee is, hoe de opties moeten verschijnen, wat beweegt en wat stil blijft staan. Geen ontwerpverantwoording van tien pagina's - wie het thema bouwt, moet weten wat er gebouwd moet worden. Bewegingsideeën mogen beschreven of als ruwe animatic aangeleverd worden.

### Volgorde van het werk

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Bijlage - symboolnamen

Voor de volledigheid, en voor wie precies wil weten waar zijn beeldmateriaal terechtkomt. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Deze namen als laagnamen gebruiken bespaart een vertaalslag.

| Frame                                       | Symboolnaam                                                                                                                               | Verplichte onderdelen                                                                                                                                                                                              |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Algemeen frame    | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optioneel                                                                        | `placeholder` (het contentvlak); tekstvak `title` optioneel                                                                                                                                     |
| 1b. Vraagkeuze, lange vraag | `MultiQuestionScreen`, `LongQuestionScreen`; beide optioneel, vallen terug op het algemene frame                                          | vraagkeuze: `questions`-placeholder, `timer`; lange vraag: `question`-placeholder                                                                                                  |
| 2. Aanmeldscherm     | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optioneel, met een `logo`-placeholder                                    | `instructions.line1` tot `line5`, `connectedPlayers`; `qrCode`-placeholder met framelabel `showQrCode` optioneel                                                                                                   |
| 3. Wachtscherm       | `PendingScreen`; `PendingScreenWithLogo` optioneel                                                                                        | `header.text`                                                                                                                                                                                                      |
| 4. Vraagscherm       | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` tot `option4`, framelabels `showOptions` en `showFeedback`                                                                                                    |
| 5. Vraag met bijlage | `QuestionScreenAttachment`                                                                                                                | als hierboven, plus `attachment.placeholder`                                                                                                                                                                       |
| 5b. Schermvullende bijlage  | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                      |
| 6. Antwoordscherm    | `AnswerPieScreen`; `AnswerPieScreenAttachment` optioneel                                                                                  | `option1` tot `option4`, `answer.text`, `feedback.text`                                                                                                                                                            |
| 6b. Antwoord op open vraag  | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment`-varianten optioneel                                                          | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                              |
| 7. Klassement        | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` en `PlayerScoreNoImage` optioneel                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optioneel); in de rij: `position`, `name`, `score`, `avatar` optioneel                                              |
| 8. Ronde-intro       | een of meer symbolen met een willekeurige naam; het configuratiebestand koppelt elk van de zes categorieën aan een symbool                | -                                                                                                                                                                                                                  |
| -                                           | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                                 |
| -                                           | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | geen eigen beeldmateriaal nodig - opgebouwd uit wat in jouw frames voorkomt                                                                                                                                        |
| -                                           | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | alleen te zien in de desktopapp, niet in een live quiz. Geen onderdeel van de opdracht: ze worden uit de themasjabloon gehaald en opnieuw gestyled met jouw achtergrond en knoppen |

De ronde-intro-symbolen van het standaardthema heten `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` en `RoundIntroTedCultHist`; kunst en geschiedenis delen de laatste. De "Ted" in die namen is een overblijfsel van het personage uit het oorspronkelijke thema en betekent niet dat er een personage in moet voorkomen.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. Het `timer`-element is een movieclip met een eigen tijdlijn; de engine leest het aantal beelden en verplaatst de afspeelkop evenredig met de verstreken tijd, maximaal 24 keer per seconde.

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

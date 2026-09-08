---
id: theme-design-guide
title: Gids voor ontwerp
---

# Gids voor ontwerp

[Theming](/docs/advanced/theming) legt uit hoe een QuizWitz thema is gebouwd: in Adobe Animate, geëxporteerd als een CreateJS bibliotheek. Deze pagina bedekt de stap daarvoor - het thema **ontwerpen**.

Het is geschreven voor een grafisch ontwerper, en het veronderstelt dat het ontwerp en de productie van Animaten door verschillende mensen worden uitgevoerd. Weinig ontwerpers werken nog in Adobe Animate, dus een gemeenschappelijke regeling is dat een ontwerper kunstwerk levert en iemand anders het thema samenbrengt. Dat werkt goed, maar alleen als de kunst wordt overgedragen op een manier die het bouwwerk ook echt kan gebruiken. Deze pagina beschrijft die vorm.

:::tip
Als je alleen kleuren, lettertypen en achtergronden wilt veranderen, heb je geen van deze nodig - pas in plaats daarvan het [Smaragd-thema] (/docs/advanced/emerald-theme) aan.
:::

---

## Wat je ontwerpt

Een QuizWitz spel wordt in één keer gespeeld door een hele kamer, waarbij altijd twee schermen betrokken zijn:

- **Het gedeelde scherm** - een projector of TV, 1920 × 1080. Vragen, antwoorden, hoe de antwoorden van de kamer zich verspreiden, de standpunten. Dit is wat je opmaakt.
- **Elke speler zijn telefoon**, waar hij zijn antwoord typt. Dat is een webpagina met een vaste lay-out; het is opgemaakt uit je kleuren en lettertypen, niet door jou.

Een thema is de volledige visuele skin van de gedeelde schermen: achtergrond, typografie, kleur, de manier waarop een vraag met vier opties wordt gepresenteerd, hoe de stand van zaken wordt opgebouwd, hoe een ronde wordt aangekondigd.

---

## Zeven frames

De wedstrijd heeft ruwweg vijfentwintig verschillende schermstaten, maar de meeste zijn varianten van dezelfde lay-out. **Je ontwerpt zeven frames; de rest wordt er afgeleid van.** Dat is geen sneltoets - het is hoe de motor werkt. Een scherm zonder eigen bestanden valt terug in een algemeen frame.

| #     | Frame                  | Wat staat er op                                                                                                                                                                                                   | Wat hieruit is afgeleid                                                                                                                                                        |
| ----- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1** | **Algemeen frame**     | De achtergrond, een koptekst en een leeg inhoudsgebied eronder. Het visuele sjabloon voor het hele thema.                                                                         | Dertien scherm states: ronde uitleg, standen, speler introductie, meerkeuze varianten, lange vragen, zitplaatsen waarschuwingen, instellingen. |
| **2** | **Scherm verbinden**   | Wat de kamer ziet, zien we samen: vijf regels instructie, ruimte voor deelname aan code of QR-code en een lijst van spelers die in het spel zijn.                                 | Ook het wachtscherm dat wordt weergegeven terwijl de quizmaster de vraag hardop leest.                                                                         |
| **3** | **Vraag scherm**       | De vraag, een timer, vier antwoorden, een feedbacklijn. Het scherm dat de kamer het langst bekijkt.                                                                               | —                                                                                                                                                                              |
| **4** | **Vraag met media**    | Dezelfde, gerangschikt rond een afbeelding of video. Kan een andere samenstelling zijn dan frame 3.                                                                               | Ook de mediavariant op het volledige scherm en de media worden weergegeven tussen vragen.                                                                      |
| **5** | **Beantwoord scherm**  | Welk antwoord was juist, hoe de antwoorden van de kamer over de opties werden verspreid, en een feedbacklijn.                                                                                     | Ook het antwoordscherm voor open vragen en voor vragen met media.                                                                                              |
| **6** | **Standen en winnaar** | Een lijst van spelers met naam, score en positie. Voorzie de **spelerrij** als een afzonderlijk, herbruikbaar element - het wordt zes tot tien keer herhaald.                     | Zowel de staande stand tussen rondes en de laatste winnaar.                                                                                                    |
| **7** | **Rond intro**         | Een korte aankondiging per ronde categorie. Er zijn zes categorieën: wetenschap & technologie, natuur, amusement, sport, kunst, geschiedenis. | Alle zes categorieën.                                                                                                                                          |

### Wat is besloten voor jou

- \*\*De individuele besturingselementen. \* Knoppen in hun vier staten, de juiste en verkeerde symbolen, de scrollbar, selectievakjes en selecties zijn afgeleid van wat er in uw zeven frames verschijnt. Zorg ervoor dat er ergens een knop verschijnt, dus er is een stijl om ze vanaf te nemen.
- **De telefoon van de spelers** Een vaste HTML-lay-out, opgemaakt uit je kleurenlijst en lettertypes.
- **Welke schermen vallen terug op het algemene kader, en how.**
- **Hoe de kaart van de zes categorieën op de ronde intro artwork zit.**
- **Alle timing en animatie duur.**

### Een teken is optioneel

Het stock QuizWitz thema heeft een karakter dat praat en reageert. Niets vereist één: de thema validator waarschuwt alleen voor het `ted` element; het faalt niet zonder het. Het [Smaragd-thema](/docs/advanced/emerald-theme) schepen zonder personage en het verwijderen van het duurste animatiewerk - lip sync, oogsen, wapens.

Zonder personage wordt de ronde intro een grafisch, typografisch of illustratief moment. Twee benaderingen houden het werk in verhouding: één samenstelling met een kleur of pictogramvariant per categorie, of een enkele universele bekendmaking met slechts een andere rondetafelnaam. Zes echt verschillende intro's zijn veel werk voor een paar seconden van de schermtijd.

---

## Hoe deze frames er in de praktijk uitzien

De schermen hieronder komen van een bestaand thema. Ze zijn hier om te laten zien **wat er gebeurt op elk scherm**; ze zijn geen stijlverwijzing.

### Frame 1 – het algemene kader

Twee zeer verschillende spelmomenten op hetzelfde sjabloon: een vraagkiezer en een puntenladder. Het laat zien hoeveel werk een bepaald kader voor u betekent, en waarom het inhoudsgebied lokaal en neutraal moet zijn.

![Het algemene kader met een drie-rij vraag kiezer](/images/theme-design/frame1-general-multiquestion.png)

![Het algemene kader met een ladder](/images/theme-design/frame1-general-strikeladder.png)

### Frame 2 — verbind en wacht

Met een cliëntlogo naast de samenvoegcode en zonder één, waar het thema het scherm draait:

![Verbind het scherm met een clientlogo](/images/theme-design/frame2-connect.png)

![Verbinden scherm zonder een client logo](/images/theme-design/frame2-connect-nologo.png)

Het wachtende scherm dat volgt, aan het scherm terwijl de quizmeester de vraag leest:

![Wachten scherm](/images/theme-design/frame2-pending.png)

### Frame 3 - het vraagscherm

Vier opties, de vraag hierboven, de timer in het midden. Merk op dat een optie niets dan een emoji kan bevatten.

![Vragenscherm met vier tekstopties](/images/theme-design/frame3-question-options.png)

![Vragenscherm met vlaggen als antwoordopties](/images/theme-design/frame3-question-emoji.png)

Een vraag zonder opties — typen spelers hun antwoord op hun telefoon. Het scherm is bijna leeg en de timer wordt het belangrijkste element:

![Open vraag met alleen de vraag en een grote timer](/images/theme-design/frame3-question-open.png)

De tijd is om. De feedback ballon verschijnt over het scherm en de timer is leeg:

![Vragenscherm dat de tijd-up status laat zien](/images/theme-design/frame3-question-timeout.png)

### Frame 4 — media

Dezelfde onderdelen, herschikt rond een mediaruimte, met de opties naar links en recht:

![Vragenscherm met een afbeelding in het midden](/images/theme-design/frame4-question-attachment.png)

Media op zichzelf, het scherm vullen:

![Volledig scherm media](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - het antwoordscherm

Dit scherm loopt drie ogenblikken. Eerst de spread, maar er is niets gemarkeerd:

![Antwoord met de spread](/images/theme-design/frame5-answer-mc-spread.png)

Dan is de juiste optie aangevinkt en is de verkeerde gekruist:

![Antwoord met de juiste optie onthuld](/images/theme-design/frame5-answer-mc-reveal.png)

En als de vraag een verklaring heeft, dan komt er een ballon over de kunstwerken. Laat de ruimte ernaartoe - het landt er bovenop wat je ook opmaakt:

![Antwoord met de uitlegballoon](/images/theme-design/frame5-answer-mc-explanation.png)

Met een kleine groep is hetzelfde moment een score lijst in plaats van een grafiek:

![Antwoord voor een kleine groep](/images/theme-design/frame5-answer-mc-small.png)

Voor een open vraag laat de grafiek zien hoeveel spelers er gelijk had:

![Antwoord voor een open vraag](/images/theme-design/frame5-answer-open.png)

### Frame 6 – standjes en winnaar

Het staat na een ronde. De spelerrij is het element dat herhaalt: positie, avatar, naam, score.

![Standing met zes spelerrijen](/images/theme-design/frame6-roundoutro.png)

De laatste countdown geeft een speler per keer, van de laatste plaats tot de eerste - plaats, score en teamnaam in de schijnwerper:

![De winnaar van het aftellen van een speler](/images/theme-design/frame6-winner-countdown.png)

![De definitieve standings](/images/theme-design/frame6-winner.png)

### Frame 7 - de ronde intro

Eén ontwerp, optioneel met een variant per categorie:

![Ronde intro voor de natuurcategorie](/images/theme-design/frame7-roundintro-nature.png)

![Ronde intro voor de wetenschap categorie](/images/theme-design/frame7-roundintro-science.png)

---

## Ontwerp regels

Geen van deze limiet van je visuele ontwerp. Ze gaan over hoe het bestand wordt gemaakt.

### Formatteren

- **1920 × 1080 pixels**, precies. Eén frame per scherm.
- Werk **in vector** waar jij kunt. Wanneer je raster gebruikt (foto's, textures): minstens 2 x display grootte.
- Het spel loopt bij **24 frames per seconde**. Relevant als u bewegingsideeën indient.
- Hou een **5% margin** aan de randen zonder essentiële informatie. Projectoren uitsnijden.

### Laag structuur – de regel die het meest telt

**Alles wat waarde kan verplaatsen, weergeven of veranderen zit op zijn eigen naamlaag.** Niets samengevoegd, niets platgevoegd.

In de praktijk: de vier antwoorden zijn vier verschillende lagen, niet één. De timer staat los van de achtergrond. Een knop en het label zijn twee elementen. Een spelerrij is één groep die kan worden gedupliceerd.

Wat kan worden samengevoegd: puur decoratief achtergrondbestand dat als één enkel nog te zien is.

Dit is de ene regel die echt pijn doet wanneer ze niet wordt gevolgd - de bestanden moeten dan uit elkaar worden gehaald of opnieuw worden getekend. dat precies de kosten zijn die deze regeling moet vermijden.

### Effecten die niet overleven

De motor maakt gebruik van een HTML5 canvas. Deze moeten **in de afbeelding gebakken worden** of achtergelaten worden:

- Live blur, drop schaduw en gloed als filters → geef ze aan als kunstwerk
- Modi mengen (vermenigvuldigen, scherm, overlay) → ze oplossen om een vlakke kleur
- Laag effecten en aanpasbare lagen
- Gradienten **binnen** tekst, of tekst met een omlijning per teken
- Maskers die per frame veranderen

Gradiënten in vormen zijn prima. Transparantie is prima. Schaduwen als vast bestand zijn prima.

### Hoe tekst zich gedraagt

Hier wijkt het ontwerp voor QuizWitz het meest af van het gewone ontwerpresultaat.

**Je hebt geen lettergrootte ingesteld. Je tekent een doos.**

Alle tekst wordt live getekend door een component die twee dingen ontvangt: een tekenreeks en de rechthoek die je droomde. Het vindt dan **de grootste lettergrootte waarmee die tekenreeks, over de regels heen gewikkeld is, nog steeds in het doos**. Een lange string krimpt om te passen; er groeit een korte totdat het vak vol is.

![Een kiezer waarbij elk drie regels met verschillende lengte krijgt een andere lettergrootte](/images/theme-design/frame1-general-multiquestion.png)

Drie rijen, drie identieke vakjes - en drie volledig verschillende lettergrootte, puur omdat de tekst korter of langer is. "Waar is de liefde" krijgt het volle hoogte; de vraag hierboven gaat over twee kleine lijnen. De etiketten aan de linkerkant gedragen zich op dezelfde manier.

Daaruit volgt dat:

- \*\*Dezelfde vraag ziet er anders uit in een ander spel. \* Een kwestie met zes woorden lijkt groot en schermvulling; een vijfendertig woord dat klein lijkt over vijf regels heen, in precies dezelfde doos. Beide moeten goed uitkijken.
- \*\*Ontwerp elk tekstvak twee keer. \* Vul het één keer met een zeer kort sample en één keer met een zeer lange sample en controleer of de compositie in beide bestaat. Als vuistregel: een antwoord kan worden gegeven van een naar ongeveer acht woorden. een vraag van vijf tot veertig, een spelernaam van twee tot twintig tekens.
- **Reken niet op een vast aantal lijnen.** Een titel die "always on one line" is, bestaat hier niet.
- \*\*Zet de tekst niet opeens uit met iets anders. \* Tekst die aan een regel of vorm moet voldoen zal bewegen zodra deze korter of langer is. Gebruik de vakjes die ruimte genoeg hebben en een uitlijning (links, centrum, rechts) in plaats van exacte posities.
- **De doos is een maximum, geen belofte.** Ontwerp de verhoudingen; de vulling varieert.
- **Elf talen.** Duitse verbindingen zijn lang en Hongaars is geen kinderspel. Een doos die in het Engels een onleesbaar klein formaat heeft.
- \*\*Emoji kan in tekst verschijnen. \* Spelers kiezen er één naast hun teamnaam en een vraag of een optie kan er één bevatten - soms is een optie niets anders dan een emoji. Ze worden getekend in kleur en zijn groter dan de brieven om zich heen.

Wat het bouwwerk moet weten over elke tekstveld: waar het is, waar het is, hoe groot het is, hoe het wordt gelijkgetrokken, welke kleur en welk lettertype het is. Niet op welk punt.

Twee dingen volgen op die je kunt gebruiken: een groot vak met korte tekst wordt zelf een sterke typografische samenstelling en een vakje maak je bewust smal en lange krachten tekst in een kolom. Je kunt de uitrusting gebruiken als design apparaat - je moet er gewoon niet tegen ontwerpen.

### De timer - vereist en het is een animatie

**Elk vraagscherm heeft een tijdperk.** Het is niet optioneel; de ruimte moet zien hoeveel tijd er nog overblijft. Beide vragen betreffen er een.

\*\*De timer is geen optelnummer maar een animatie waarvan de hoofd van de motor beweegt. \* Je ontwerpt een progressie van "volledig" naar "leeg" - een staafval, een ring sluiting, een glasplaatje van een uur, een slinkende lijn. De motor speelt die animatie met precies de snelheid die het laatste frame laat samenvallen met het einde van de vraag.

Wat is dat:

- **De vraagduur is niet vastgesteld.** Deze is ingesteld per quiz - vaak 20 tot 30 seconden, maar kan korter of langer zijn. Je animatie is uitgerokken of gecomprimeerd om te passen. Ontwerp een _progressie_, geen animatie van een ingesteld aantal seconden.
- **Geen cijfers of per seconde tikken.** Een timer die "20, 19, 18…" telt, stopt wanneer de duur verandert.
- **De laatste seconden zijn het moeilijkste moment van het spel.** Het helpt als de vooruitgang duidelijker of urgenter wordt tegen het einde.
- **Blijfbaar van de achterkant van de kamer**, in een oogopslag.
- **Meerdere timers zijn toegestaan.** Een balk aan de bovenkant en een ring bij de vraag zijn allebei gedroogd, zolang elke `timer` heet.

Voorzie de timer als een serie sleutelframes of als een beschrijving van de progressie - "de staafafvoer van rechts naar links en verschuift van groen naar rood" is genoeg.

### Lettertypen

- **Lettertypen moeten inbeddbaar zijn.** Het `.ttf` of `.otf` bestand is nodig, plus een licentie die inbedding in een applicatie toestaat. Een lettertype alleen als webfont, of alleen voor afdrukken, kan niet worden gebruikt. Controleer dit voordat je het opmaakt; het is daarna een dure correctie.
- Lettertypen met ongewoon grote ascenders of descenders kunnen worden gecompenseerd, maar markeren als je er een gebruikt.

### Kleur als lijst

Het thema leest een kleurenlijst uit een configuratiebestand. Vul je palet in als een **naamlijst**, niet alleen als kleuren in het kunstwerk:

hoofdkleur, accentkleur, achtergrond, standaard tekstkleur, koptekst kleur, vraagteksttekst, knoptekst de vier antwoordkleuren (met een achtergrond en een randkleur), de kleur voor de rechtzetting, de kleur voor het verkeerde antwoord.

Kalen zijn toegestaan: geef ze als twee hexadecimale waarden.

### Het QuizWitz logo

Eigen ontwerpen omvatten het QuizWitz logo. Reserveer hier een plek voor waar het ontwerp niet in de weg staat.

---

## Wat je moet overhandigen

### Bronbestand — Illustrator voorkeur

\*\*Adobe Illustrator (`.ai`) heeft de voorkeur, en er is een concrete reden. \* Het thema is gebouwd in Adobe Animate, dat Illustrator bestanden rechtstreeks importeert en uw lagen omzet in Animatelagen of afzonderlijke symbolen, de namen van de lagen behouden en de vectoren bewerkbaar houden. Dat is precies de stap die ervoor zorgt dat kunstwerken niet met de hand kunnen worden hergebouwd.

Figma of Photoshop is mogelijk, maar weet wat de kosten zijn: met Figma gaat alles door de SVG en PNG-export, en dat is precies waar de laagstructuur die hier nodig is, verloren gaat. Als je Figma gebruikt, geef dan **elk element afzonderlijk aan als SVG**, met bestandsnamen die overeenkomen met de lagennamen, zodat de structuur kan worden herbouwd met de hand. Photoshop importeert in Animate met zijn lagen intact, zoals Illustrator, maar geeft je raster in plaats van vector.

Als je sneller bent in Figma, gebruik het voor de conceptfase en lever de definitieve versie in Illustrator.

Bestands structuur:

- Eén artboard per scherm, elk precies 1920 × 1080, genoemd naar bovenstaande.
- Herbruikbare onderdelen (knop, spelerrij, antwoordoptie, timer) als **symbolen** of componenten, niet als losse kopieën.
- Leernamen in het Engels, zonder spaties: `vragen`, `option1` to `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Kleuren met de naam swatches en tekst met de naam stijlen in plaats van deze op elk object afzonderlijk in te stellen.

### Exporteren

- Elk frame als een PNG, 1920 x 1080 - als referentie voor hoe het eruit moet zien.
- Elk afzonderlijk grafische element als een **transparant PNG bij 2×**, in één map, bestandsnaam die overeenkomt met de naam van de laag.
- Lettertypen als `.ttf` of `.otf`, met bewijs van licentie.

### Halve een pagina van notities

Een korte schriftelijke opmerking: wat is het idee, hoe de opties eruit zouden moeten zien, wat beweegt en wat nog altijd blijft. Geen tien pagina's ontwerpredenering - degene die het thema bouwt moet weten wat hij moet bouwen.

Bewegingsideeën kunnen als een ruwe animatie worden beschreven of geleverd.

---

## Bijlage - symbool namen

Voor volledigheid en voor iedereen die wil weten waar zijn kunstwerk precies eindigt. **Je hoeft dit niet te lezen om het werk te doen**; de zeven bovenstaande frames zijn genoeg. Het gebruik van deze namen als lagernamen bespaart een vertalingsstap.

| Frame                                       | Symbool naam                                                                                                                                                                               | Vereiste onderdelen                                                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 1. Algemeen frame    | `AlgemeenPurposeScreen`, `GeneralPurposeScreenWithHeader`                                                                                                                                  | `header.text`, inhoudsgebied                                                                                     |
| 2. Scherm aansluiten | `PresentationConnectScreen`                                                                                                                                                                | `instructions.line1` naar `line5`                                                                                |
| 2b. Wacht op scherm         | `In behandelscherm`                                                                                                                                                                        | `header.text`                                                                                                    |
| 3. Vraag scherm      | `Vraagscherm`                                                                                                                                                                              | `question.text`, `timer`, `feedback.text`, `option1` tot `option4`, frame labels `showOptions` en `showFeedback` |
| 4. Vraag via media   | `VraagScreenAttachment`                                                                                                                                                                    | als hierboven, plus `attachment.placeholder`                                                                     |
| 4b. Volledig scherm         | `Bijlagescherm`                                                                                                                                                                            | `placeholder`                                                                                                    |
| 5. Beantwoord scherm | `AntwoordPieScreen`                                                                                                                                                                        | `option1` naar `option4`, `answer.text`, `feedback.text`                                                         |
| 5b. Open vraag antwoord     | `AntwoordScherm`, `AnswerOpenVrationPieScreen`                                                                                                                                             | `answer.text`, `feedback.text`, `players`, `piechart`                                                            |
| 6. Standen           | `WinnerScherm` + `PlayerScore`                                                                                                                                                             | `header.text`, `players`, `feedback.text` (`playAgain.text` optioneel)                        |
| 7. Ronde intro       | `RoundIntroTedMusic`, `RoundIntroTedSport`, `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedCultHist`                                                                 | —                                                                                                                |
| —                                           | `LadingScreen`                                                                                                                                                                             | `text`, `progress`                                                                                               |
| —                                           | `Button`, `Checkbox`, `Slider`, `VraagSelect`, `SymbolCorrect`, `SymbolWrong`, `SettingsScreenScrollarea`, `AlertScreen`, `ActivityScreen`, `MenuScreen`, `SettingsScreen`, `PackListItem` | geen bestanden van eigen behoefte, gebouwd van je bril en het algemene frame                                     |

De intronamen van de ronde bevatten om historische redenen "Ted". Dat is een overblijfsel uit het oorspronkelijke thema en dat betekent niet dat er een personage in moet staan.

Elk element met `.text` nadat het een gepast tekstvak is zoals hierboven beschreven: een rechthoek de engine vult zich. Het `timer` element is een film clip met zijn eigen tijdlijn; de motor leest zijn frame-aantal en beweegt de playhead in verhouding tot de tijd die is verstreken.

### Wat het configuratiebestand van uw ontwerp neemt

```json
{
  "fonts": { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "standaard": "#…", "header": "#…", "vraag": "#…",
    "knoppen": "#…", "dialoog": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "booleanResultColors": { "correct": "#…", "fou": "#…" },
  "overlay": "licht Ø donker"
}
```

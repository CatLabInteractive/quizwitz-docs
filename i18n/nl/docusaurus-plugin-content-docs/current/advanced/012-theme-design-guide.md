---
id: theme-design-guide
title: Handleiding voor thema-ontwerp
---

# Handleiding voor thema-ontwerp

[Thematisering](/docs/advanced/theming) legt uit hoe een QuizWitz-thema gebouwd wordt: in Adobe Animate, geëxporteerd als een CreateJS-bibliotheek. Deze pagina gaat over de stap daarvoor - het **ontwerpen** van het thema.

Ze is geschreven voor een grafisch ontwerper en gaat ervan uit dat het ontwerp en de productie in Animate door verschillende mensen gebeuren. Weinig ontwerpers werken nog in Adobe Animate, dus meestal levert een ontwerper het beeldmateriaal aan en zet iemand anders het thema in elkaar. Dat werkt goed, zolang het beeldmateriaal aankomt in een vorm waarmee de bouw verder kan. Deze pagina beschrijft die vorm, en dient meteen als lijst van op te leveren onderdelen wanneer je een ontwerper om een offerte vraagt.

De pagina bestaat uit vier delen:

1. [Wat je ontwerpt](#what-you-are-designing) - de schermen die een thema beslaat.
2. [De acht frames](#eight-frames-and-an-element-sheet) en [het elementenblad](#the-element-sheet), een voor een, met schermafbeeldingen.
3. [Ontwerpregels](#design-rules) - hoe het bestand opgebouwd moet zijn zodat de engine het kan gebruiken.
4. [Wat je aanlevert](#what-to-hand-over) - bronbestand, op te leveren onderdelen en volgorde van het werk.

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

## Acht frames en een elementenblad

Het spel heeft tientallen verschillende schermtoestanden, maar de meeste zijn varianten van dezelfde opbouw. **Je ontwerpt acht frames en één blad met elementen; de rest wordt daarvan afgeleid.** Dat is geen sluiproute - zo werkt de engine. Een scherm zonder eigen beeldmateriaal valt terug op een algemeen frame.

Het blad is even belangrijk als de frames: een scherm dat terugvalt op het algemene frame heeft nog steeds inrichting nodig in zijn contentvlak - een paneel, een rij, een lijn.

| # | Frame                                                    | Omvat ook                                                               |
| - | -------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1 | [Algemeen frame](#frame-1---the-general-frame)           | Dertien schermtoestanden zonder eigen beeldmateriaal                    |
| 2 | [Aanmeldscherm](#frame-2---the-connect-screen)           | Teken het twee keer: met en zonder klantlogo            |
| 3 | [Wachtscherm](#frame-3---the-waiting-screen)             | -                                                                       |
| 4 | [Vraagscherm](#frame-4---the-question-screen)            | -                                                                       |
| 5 | [Vraag met bijlage](#frame-5---question-with-attachment) | De schermvullende bijlage, en bijlagen die tussen vragen worden getoond |
| 6 | [Antwoordscherm](#frame-6---the-answer-screen)           | Het antwoordscherm voor open vragen en voor vragen met een bijlage      |
| 7 | [Klassement en winnaar](#frame-7---standings-and-winner) | Het klassement tussen rondes en de uiteindelijke winnaar                |
| 8 | [Ronde-intro](#frame-8---the-round-intro)                | Alle zes rondecategorieën                                               |

:::note[Over de schermafbeeldingen]
De schermen hieronder komen uit een bestaand thema. Ze tonen **welke elementen op elk scherm verschijnen, en wanneer**. Ze zijn geen referentie voor stijl _of_ opmaak: waar dit thema zijn vraag, zijn opties en zijn timer plaatst, is zijn eigen keuze, en die van jou mag daar volledig van afwijken.
:::

### Frame 1 - het algemene frame

**Wat erop staat:** de achtergrond, een koptitel en een leeg contentvlak daaronder. Het is geen afgewerkte compositie, maar het frame waarbinnen de rest wordt opgebouwd.

**Wat het omvat:** dertien schermtoestanden - ronde-uitleg, klassement, spelerintroductie, varianten van meerkeuzevragen, lange vragen, waarschuwingen over seats, instellingen. Elk vult het contentvlak op zijn eigen manier met elementen van het [elementenblad](#the-element-sheet), dus het frame moet dingen kunnen dragen die totaal niet op elkaar lijken. De vraagkeuze en de lange vraag mogen een eigen compositie krijgen als je dat wilt; anders gebruiken ze dit frame.

Twee spelmomenten op hetzelfde frame: een vraagkeuze en een puntenladder.

![Het algemene frame met een vraagkeuze in drie rijen](/images/theme-design/frame1-general-multiquestion.png)

![Het algemene frame met een puntenladder in vijf niveaus](/images/theme-design/frame1-general-strikeladder.png)

Kijk hoe weinig ze gemeen hebben. De vraagkeuze zet haar drie rijen in een paneel met een rand; de ladder heeft helemaal geen paneel, alleen rijen die door dunne lijnen gescheiden worden. Wat de twee delen is de achtergrond en de kopbalk erboven - alles daaronder hoort bij het scherm zelf en wordt door het spel gevuld, niet door jou.

Dat paneel en die lijnen komen van het [elementenblad](#the-element-sheet), niet van dit frame. Wat dit frame moet doen, is ze kunnen dragen: ontwerp het contentvlak als een lege, neutrale, ruime zone die even goed werkt met een paneel met rand, een kale lijst en een tabel met rijen. Een achtergrond die druk is in het midden, of een kopbalk die alleen werkt met een paneel er vlak onder, is waar dat misloopt.

### Frame 2 - het aanmeldscherm

**Wat erop staat:** alles wat de zaal nodig heeft om mee te doen.

- vijf regels instructie
- een spelcode en een QR-code, allebei gegenereerd door de engine - reserveer een vierkant voor de QR-code
- een regel met het aantal verbonden spelers
- een lijst van spelers die binnendruppelen

**Teken het twee keer:** met een klantlogo naast de spelcode, en zonder, waarbij het eigen beeldmateriaal van het thema het scherm draagt.

![Aanmeldscherm met een klantlogo](/images/theme-design/frame2-connect.png)

![Aanmeldscherm zonder klantlogo](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - het wachtscherm

**Wat erop staat:** bijna niets - het eigen logo van de quiz, of het beeldmateriaal van het thema.

Het deelt alleen de achtergrond met het aanmeldscherm, dus ontwerp het als een eigen compositie. Het blijft in beeld terwijl de quizmaster een vraag voorleest, waardoor het langer op het scherm staat dan bijna al het andere in het spel. Het verdient meer aandacht dan een leeg scherm gewoonlijk krijgt.

![Wachtscherm](/images/theme-design/frame2-pending.png)

### Frame 4 - het vraagscherm

**Wat erop staat:** de vraag, een timer, vier antwoordopties en een feedbackregel. Dit is het scherm waar de zaal het langst naar kijkt. Let op: een optie kan uit niets anders dan een emoji bestaan:

![Vraagscherm met vier tekstopties](/images/theme-design/frame3-question-options.png)

![Vraagscherm met vlaggen als antwoordopties](/images/theme-design/frame3-question-emoji.png)

Een vraag zonder opties - spelers tikken hun antwoord in op hun telefoon. Het scherm is bijna leeg en de timer wordt het hoofdelement:

![Open vraag met alleen de vraag en een grote timer](/images/theme-design/frame3-question-open.png)

Het moment waarop de tijd om is. De feedbackballon verschijnt over het scherm en de timer staat leeg:

![Vraagscherm met de melding dat de tijd om is](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - vraag met bijlage

**Wat erop staat:** dezelfde onderdelen als in frame 4, geschikt rond een afbeelding of video. Het mag een andere compositie zijn. De bijlage wordt geschaald om binnen het vak te passen dat jij tekent, dus zowel een liggende als een staande afbeelding moet erin acceptabel ogen.

**Wat het omvat:** de schermvullende bijlage, en bijlagen die tussen vragen worden getoond.

Hier met de opties links en rechts van de bijlage:

![Vraagscherm met een afbeelding in het midden](/images/theme-design/frame4-question-attachment.png)

Een bijlage op zichzelf, schermvullend:

![Schermvullende bijlage](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - het antwoordscherm

**Wat erop staat:** welk antwoord juist was, hoe de antwoorden van de zaal over de opties verdeeld waren, en een feedbackregel.

**Wat het omvat:** het antwoordscherm voor open vragen en voor vragen met een bijlage.

Het scherm doorloopt drie momenten. Eerst de spreiding, met nog niets gemarkeerd:

![Antwoordscherm met de spreiding](/images/theme-design/frame5-answer-mc-spread.png)

Daarna wordt de juiste optie aangevinkt en worden de foute doorkruist:

![Antwoordscherm met de juiste optie onthuld](/images/theme-design/frame5-answer-mc-reveal.png)

En als de vraag een uitleg bevat, valt er een ballon over het beeldmateriaal. Laat er ruimte voor - hij komt boven op wat je ook ontworpen hebt:

![Antwoordscherm met de uitlegballon](/images/theme-design/frame5-answer-mc-explanation.png)

Bij een kleine groep is hetzelfde moment een scorelijst in plaats van een diagram:

![Antwoordscherm bij een kleine groep](/images/theme-design/frame5-answer-mc-small.png)

Bij een open vraag toont het diagram hoeveel spelers het juist hadden:

![Antwoordscherm bij een open vraag](/images/theme-design/frame5-answer-open.png)

### Frame 7 - klassement en winnaar

**Wat erop staat:** een lijst van spelers met positie, avatar, naam en score. Lever de **spelersrij** aan als een apart, herbruikbaar element: standaard wordt ze zes keer herhaald, tot maximaal tien.

**Wat het omvat:** het klassement tussen rondes en de uiteindelijke winnaar.

Het klassement na een ronde, met zes spelersrijen:

![Klassement met zes spelersrijen](/images/theme-design/frame6-roundoutro.png)

De eindaftelling noemt één speler tegelijk, van de laatste plaats naar de eerste - plaats, score en teamnaam in de schijnwerpers. Hier zijn de [vliegende emoji](#flying-emoji-land-on-top-of-everything) ook het talrijkst:

![De aftelling die één speler noemt](/images/theme-design/frame6-winner-countdown.png)

![Het eindklassement](/images/theme-design/frame6-winner.png)

### Frame 8 - de ronde-intro

**Wat erop staat:** een korte aankondiging per rondecategorie. Er zijn zes categorieën: wetenschap & techniek, natuur, entertainment & muziek, sport, kunst, geschiedenis.

**Wat het omvat:** alle zes de categorieën. Eén ontwerp mag er meerdere bedienen.

Hier één compositie met een variant per categorie:

![Ronde-intro voor de categorie natuur](/images/theme-design/frame7-roundintro-nature.png)

![Ronde-intro voor de categorie wetenschap](/images/theme-design/frame7-roundintro-science.png)

**Een personage is optioneel.** Het standaardthema van QuizWitz heeft er een dat praat en reageert; het [Emerald-thema](/docs/advanced/emerald-theme) heeft er geen, en zonder personage vervalt het duurste animatiewerk - lipsync, ogen, armen.

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

- **De telefoons van de spelers.** Een vaste HTML-opmaak.
- **De handvol dingen die de engine zelf tekent** - de lijnen tussen de rijen op de puntenladder, de gemarkeerde rij in de vraagkeuze, de QR-code. Hun kleuren komen uit [Kleur als lijst](#colour-as-a-list).
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

In de praktijk:

- de vier antwoordopties zijn vier aparte lagen, niet één
- de timer staat los van de achtergrond
- een knop en zijn label zijn twee elementen
- een spelersrij is één groep die gedupliceerd kan worden

Wat wél samengevoegd mag: puur decoratief achtergrondbeeld dat als één stilstaand beeld werkt.

Dit is de ene regel die echt pijn doet als hij niet gevolgd wordt - het beeldmateriaal moet dan uit elkaar getrokken of hertekend worden, en dat is precies de kost die deze werkwijze wil vermijden.

### Effecten die het niet overleven

De engine tekent op een HTML5-canvas. Deze moeten **in het beeld ingebakken** worden of achterwege blijven:

| Effect                                                       | Wat je in plaats daarvan doet   |
| ------------------------------------------------------------ | ------------------------------- |
| Live vervaging, slagschaduwen en gloed als filters           | Lever ze aan als beeldmateriaal |
| Overvloeimodi (multiply, screen, overlay) | Zet ze om naar een egale kleur  |
| Laageffecten en aanpassingslagen                             | Bak ze in                       |
| Verlopen **in** tekst, of tekst met een contour per teken    | Laat ze weg                     |
| Maskers die per frame veranderen                             | Laat ze weg                     |

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

**Wat wie het thema bouwt over elk tekstvak moet weten:** waar het staat, hoe groot het is, hoe het is uitgelijnd, welke kleur en welk lettertype. Niet: op welke puntgrootte.

**Je kunt dit benutten.** Een groot vak met korte tekst wordt op zich al een sterke typografische compositie, en een vak dat je bewust smal en hoog maakt, dwingt tekst in een kolom. Gebruik het passend maken als ontwerpmiddel; ontwerp er alleen niet tegenin.

### De timer - verplicht, en het is een animatie

**Elk vraagscherm heeft een timer**; de zaal moet kunnen zien hoeveel tijd er nog is.

**De timer is geen aftellend getal maar een animatie waarvan de engine de afspeelkop verplaatst.** Jij ontwerpt een verloop van "vol" naar "leeg" - een balk die leegloopt, een ring die zich sluit, een zandloper, een krimpende lijn. De engine speelt die animatie precies zo snel af dat het laatste beeld samenvalt met het einde van de vraag.

Wat volgt:

- **De vraagduur ligt niet vast.** Ze wordt per quiz ingesteld - vaak twintig tot dertig seconden, maar het kan korter of langer. Jouw animatie wordt uitgerekt of samengeperst om te passen.
- **Geen cijfers of streepjes per seconde.** Een timer die "20, 19, 18…" aftelt, klopt niet meer zodra de duur verandert.
- **De laatste seconden zijn het spannendste moment van het spel.** Het helpt als het verloop naar het einde toe duidelijker of dringender wordt.
- **Afleesbaar vanaf achteraan in de zaal**, in één oogopslag.
- **Meerdere timers mogen.** Een balk bovenaan en een ring bij de vraag worden allebei aangestuurd, zolang elk element `timer` heet.

Lever de timer aan als een reeks keyframes of als een beschrijving van het verloop - "de balk loopt van rechts naar links leeg en verkleurt van groen naar rood" volstaat.

### Vliegende emoji komen boven op alles terecht

Elke speler kiest een emoji bij het deelnemen, en het spel gooit die emoji over het scherm. Ze worden door de engine getekend op een laag boven het thema. **Hier valt voor jou niets te ontwerpen** - maar er valt wel iets omheen te ontwerpen, want ze zijn geen zeldzame franje.

Ze verschijnen op drie momenten:

- **Wanneer een speler antwoordt.** De emoji van die speler stijgt op vanaf de onderrand op een willekeurige horizontale positie, maakt een boog en valt weer uit beeld.
- **Wanneer een speler er een wegslingert.** Spelers kunnen hun emoji vanaf hun telefoon wegslingeren; hoek en snelheid komen uit de veegbeweging, en hij vertrekt tollend vanuit het midden onderaan.
- **Wanneer een plaats wordt onthuld in de eindaftelling.** Een uitbarsting van de emoji van de genoemde speler: twintig voor een gewone plaats, vijftig voor de derde, vijfenzeventig voor de tweede, en **honderdvijftig voor de winnaar.**

Wat dat betekent voor het ontwerp:

- **Houd het onderste derde van de klassement- en winnaarschermen vrij van alles wat klein of cruciaal is.** Tijdens de aftelling is het daar echt druk.
- **Ga ervan uit dat ze zullen vloeken met je palet.** Het zijn emoji in volle kleur uit alle hoeken van de Unicode-tabel, en geen enkel thema heeft er vat op. Een ontwerp dat alleen standhoudt binnen een strak kleurbereik oogt tijdens die seconden toevallig.
- **Wegslingeren wordt onderdrukt zolang een afbeelding of video getoond wordt**, dus de bijlageschermen blijven rustig.
- **De hele laag kan per spel worden uitgeschakeld**, dus bouw ook geen compositie die ervan afhangt dat ze er zijn.

### Lettertypen

- **Lettertypen moeten insluitbaar zijn.** Het `.ttf`- of `.otf`-bestand is nodig, plus een licentie die insluiting in een applicatie toelaat. Een lettertype dat alleen als webfont of alleen voor drukwerk gelicentieerd is, kan niet gebruikt worden. Controleer dit voor je ermee ontwerpt; achteraf is het een dure correctie.
- Lettertypen met ongewoon grote stok- of staartlengtes kunnen bijgesteld worden, maar meld het als je er een gebruikt.

### Kleur als lijst

Het thema leest een kleurenlijst uit een configuratiebestand, en de telefoons van de spelers worden vanuit dezelfde lijst gestyled. Lever je palet aan als een **benoemde lijst**, niet alleen als kleuren in het beeldmateriaal:

| Waar                         | Kleuren                                                                                                                                                                                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Spelscherm**               | Hoofdkleur, accentkleur, achtergrond, paneel- of containerkleur, timerachtergrond, standaardtekstkleur, tekstkleur van de kop, tekstkleur van de vraag, knoptekst, tekst van dialogen en uitleg, tekst van spelersnaam en score, de kleur voor juist, de kleur voor fout |
| **De vier antwoordopties**   | Per optie: een achtergrondkleur, een randkleur en één egale kleur voor de telefoons en de diagrammen                                                                                                                                                     |
| **Telefoons van de spelers** | Achtergrond, tekstkleur, contourkleur, contourkleur van de opties, en de achtergrond- en tekstkleur van de antwoordcontainer                                                                                                                                             |

Verlopen zijn toegestaan op het spelscherm: geef ze als twee hexwaarden.

Een paar kleuren zijn de _enige_ manier om onderdelen te sturen die de engine zelf tekent, dus het loont om ze bewust te kiezen in plaats van de standaardwaarden te laten staan:

- de **scheidingslijn** - de lijnen tussen rijen waar geen paneel is, en op de puntenladder
- de toestanden **actief**, **inactief** en **geselecteerd** van een rij in de vraagkeuze
- de tekst van **dialogen**
- de **voor- en achterkant van de QR-code**

Laat je ze weg, dan vallen ze terug op ingebouwde standaardwaarden - wit, grijs, rood, zwart en wit - die zelden bij een ontwerp passen.

### Het QuizWitz-logo

Eigen ontwerpen bevatten het QuizWitz-logo. Reserveer er een plek voor waar het het ontwerp niet in de weg zit.

---

## Wat je aanlevert

### Bronbestand - Illustrator heeft de voorkeur

Het thema wordt gebouwd in Adobe Animate, en wat Animate kan importeren bepaalt hoeveel van je werk de overdracht ongeschonden overleeft:

| Tool                                             | Wat er bij het importeren gebeurt                                                                                                                                                                                                                                                                                         | Gebruik het voor                              |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate importeert het rechtstreeks en zet je lagen om in Animate-lagen of aparte symbolen, waarbij de laagnamen behouden blijven en de vectoren bewerkbaar blijven. Dat is precies de stap die voorkomt dat het beeldmateriaal met de hand opnieuw opgebouwd moet worden.                | **Voorkeur** voor de uiteindelijke oplevering |
| **Adobe Photoshop**                              | Wordt geïmporteerd met de lagen intact, zoals Illustrator, maar levert raster in plaats van vector.                                                                                                                                                                                                       | Mogelijk                                      |
| **Figma**                                        | Alles gaat via een export naar SVG en PNG, en precies daar gaat de laagstructuur verloren die hier nodig is. Gebruik je toch Figma, lever dan **elk element apart als SVG** aan, met bestandsnamen die overeenkomen met de laagnamen, zodat de structuur met de hand hersteld kan worden. | De conceptfase, als je daar sneller in bent   |

Bestandsstructuur:

- Eén tekengebied per scherm, genoemd naar de frames hierboven.
- Herbruikbare onderdelen (knop, spelersrij, antwoordoptie, timer) als **symbolen** of componenten, niet als losse kopieën.
- Laagnamen in het Engels, zonder spaties: `question`, `option1` tot `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Kleuren als benoemde stalen en tekst als benoemde stijlen, in plaats van per object ingesteld.

### Checklist van op te leveren onderdelen

1. Het **bronbestand**, opgebouwd zoals hierboven.
2. **Elk frame als PNG**, 1920 × 1080 - een referentie voor hoe het eruit moet zien. Voor frame 2 zowel de versie met als de versie zonder klantlogo.
3. **Het elementenblad** als één tekengebied: de [bouwstenen voor content en de bedieningselementen](#the-element-sheet).
4. **Elk afzonderlijk grafisch element als transparante PNG op 2×**, in één map, met een bestandsnaam die overeenkomt met de laagnaam.
5. **De timer** als keyframes of als een geschreven beschrijving van het verloop.
6. **Lettertypen** als `.ttf` of `.otf`, met bewijs van licentie.
7. **De kleurenlijst** uit [Kleur als lijst](#colour-as-a-list), als hexwaarden.
8. **Een halve pagina notities**: wat het idee is, hoe de opties moeten verschijnen, wat beweegt en wat stil blijft staan. Geen ontwerpverantwoording van tien pagina's - wie het thema bouwt, moet weten wat er gebouwd moet worden. Bewegingsideeën mogen beschreven of als ruwe animatic aangeleverd worden.

### Volgorde van het werk

1. **Frame 4, het vraagscherm, samen met het elementenblad.** Laat beide goedkeuren voor de rest. Samen bevatten ze de timer, de opties, het paneel en elk bedieningselement, dus ze leggen de stijl van het hele thema vast.
2. **Frames 1 tot 3.** Die volgen vanzelf uit de eerste twee.
3. **Frames 6 tot 8** komen als laatste.

---

## Bijlage - symboolnamen

Voor de volledigheid, en voor wie precies wil weten waar zijn beeldmateriaal terechtkomt. **Je hoeft dit niet te lezen om het werk te doen**; de acht frames en het elementenblad hierboven volstaan. Deze namen als laagnamen gebruiken bespaart een vertaalslag.

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

Elk element met `.text` erachter is een passend tekstvak zoals beschreven onder [Hoe tekst zich gedraagt](#how-text-behaves): een rechthoek die de engine zelf vult. Het `timer`-element is een movieclip met een eigen tijdlijn; de engine leest het aantal beelden en verplaatst de afspeelkop evenredig met de verstreken tijd, maximaal 24 keer per seconde.

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

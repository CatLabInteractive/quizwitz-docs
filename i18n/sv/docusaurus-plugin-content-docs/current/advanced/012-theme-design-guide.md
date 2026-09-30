---
id: theme-design-guide
title: Designguide för teman
---

# Designguide för teman

[Teman](/docs/advanced/theming) förklarar hur ett QuizWitz-tema byggs: i Adobe Animate, exporterat som ett CreateJS-bibliotek. Den här sidan handlar om steget före det - att **designa** temat.

Den är skriven för en grafisk designer och utgår från att design och produktion i Animate görs av olika personer. Få designers arbetar fortfarande i Adobe Animate, så vanligtvis levererar en designer grafiken och någon annan sätter ihop temat. Det fungerar bra, så länge grafiken kommer i en form som bygget kan använda. Den här sidan beskriver den formen och fungerar samtidigt som listan över leveranser när du ber en designer om en offert.

Sidan har fyra delar:

1. [Vad du designar](#what-you-are-designing) - skärmarna som ett tema omfattar.
2. [De åtta ramarna](#eight-frames-and-an-element-sheet) och [elementarket](#the-element-sheet), en i taget, med skärmbilder.
3. [Designregler](#design-rules) - hur filen måste byggas upp så att motorn kan använda den.
4. [Vad du ska lämna över](#what-to-hand-over) - källfil, leveranser och arbetsordning.

:::tip
Om du bara vill ändra färger, typsnitt och bakgrunder behöver du inget av det här - anpassa i stället [Emerald-temat](/docs/advanced/emerald-theme).
:::

:::info[Se det i aktion]
Varje skärm som beskrivs här kan spelas live, med exempeldata, i **tematestaren** på [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Det laddar ett tema och erbjuder en meny med testskärmar: frågor med och utan bilaga, svarsfördelningen för en liten och en stor grupp, ställningen, rundintrona, anslutningsskärmen med och utan kundlogotyp, och så vidare. Lägg till `?theme=emerald` i adressen för att se [Emerald-temat](/docs/advanced/emerald-theme). Den som bygger temat använder samma sida för att kontrollera det medan det sätts ihop.
:::

---

## Vad du designar

En omgång QuizWitz spelas av ett helt rum på en gång, och två skärmar är alltid inblandade:

- **Spelskärmen** - en projektor eller tv, 1920 × 1080. Frågor, svar, hur rummets svar fördelades och ställningen. Det är det här du designar.
- **Varje spelares telefon**, där spelaren skriver sitt svar. Det är en webbsida med fast layout; den stylas utifrån din färglista, du gör inte layouten.

Ett tema är spelskärmens kompletta visuella skal: bakgrund, typografi, färg, hur en fråga med fyra alternativ presenteras, hur ställningen byggs upp, hur en runda presenteras.

---

## Åtta ramar och ett elementark

Spelet har dussintals olika skärmlägen, men de flesta är varianter av samma layout. **Du designar åtta ramar och ett elementark; resten härleds från dem.** Det är ingen genväg - det är så motorn fungerar. En skärm utan egen grafik faller tillbaka på en allmän ram.

Arket är lika viktigt som ramarna: en reservskärm behöver fortfarande inredning i sin innehållsyta - en panel, en rad, en linje.

| # | Ram                                                      | Omfattar även                                                 |
| - | -------------------------------------------------------- | ------------------------------------------------------------- |
| 1 | [Allmän ram](#frame-1---the-general-frame)               | Tretton skärmlägen utan egen grafik                           |
| 2 | [Anslutningsskärm](#frame-2---the-connect-screen)        | Rita den två gånger: med och utan kundlogotyp |
| 3 | [Vänteskärm](#frame-3---the-waiting-screen)              | -                                                             |
| 4 | [Frågeskärm](#frame-4---the-question-screen)             | -                                                             |
| 5 | [Fråga med bilaga](#frame-5---question-with-attachment)  | Bilagan i helskärm och bilagor som visas mellan frågor        |
| 6 | [Svarsskärm](#frame-6---the-answer-screen)               | Svarsskärmen för öppna frågor och för frågor med bilaga       |
| 7 | [Ställning och vinnare](#frame-7---standings-and-winner) | Ställningen mellan rundor och den slutliga vinnaren           |
| 8 | [Rundintro](#frame-8---the-round-intro)                  | Alla sex rundkategorier                                       |

:::note[Om skärmbilderna]
Skärmarna nedan kommer från ett befintligt tema. De visar **vilka element som finns på varje skärm och när**. De är inte en referens för stil _eller_ layout: var det här temat placerar sin fråga, sina alternativ och sin timer är dess eget beslut, och ditt kan skilja sig helt.
:::

### Ram 1 - den allmänna ramen

**Vad som finns på den:** bakgrunden, en rubrik och en tom innehållsyta under den. Det är inte en färdig komposition utan ramen som resten byggs inuti.

**Vad den omfattar:** tretton skärmlägen - rundförklaring, ställning, spelarpresentation, flervalsvarianter, långa frågor, varningar om Seats, inställningar. Var och en fyller innehållsytan på sitt eget sätt med element från [elementarket](#the-element-sheet), så ramen måste kunna rymma saker som inte liknar varandra alls. Frågeväljaren och den långa frågan kan få en egen komposition om du vill; annars använder de den här ramen.

Två spelögonblick i samma ram: en frågeväljare och en poängstege.

![Den allmänna ramen med en frågeväljare med tre rader](/images/theme-design/frame1-general-multiquestion.png)

![Den allmänna ramen med en poängstege med fem nivåer](/images/theme-design/frame1-general-strikeladder.png)

Se hur lite de har gemensamt. Väljaren placerar sina tre rader i en panel med kant; stegen har ingen panel alls, bara rader åtskilda av tunna linjer. Det de har gemensamt är bakgrunden och rubrikbandet ovanför dem - allt under det hör till den enskilda skärmen och fylls av spelet, inte av dig.

Den panelen och de linjerna kommer från [elementarket](#the-element-sheet), inte från den här ramen. Den här ramens uppgift är att rymma dem: designa innehållsytan som en tom, neutral och rymlig zon som fungerar lika bra med en panel med kant, en naken lista och en tabell med rader. En bakgrund som är rörig i mitten, eller en rubrik som bara fungerar med en panel precis under sig, är där det brister.

### Ram 2 - anslutningsskärmen

**Vad som finns på den:** allt som rummet behöver för att gå med.

- fem rader med instruktioner
- en spelkod och en QR-kod, båda genererade av motorn - reservera en kvadrat för QR-koden
- en rad med antalet anslutna spelare
- en lista över spelare som droppar in

**Rita den två gånger:** med en kundlogotyp bredvid spelkoden, och utan, där temats egen grafik bär skärmen.

![Anslutningsskärm med kundlogotyp](/images/theme-design/frame2-connect.png)

![Anslutningsskärm utan kundlogotyp](/images/theme-design/frame2-connect-nologo.png)

### Ram 3 - vänteskärmen

**Vad som finns på den:** nästan ingenting - quizets egen logotyp eller temats grafik.

Den delar bara bakgrund med anslutningsskärmen, så designa den som en egen komposition. Den visas medan quizmastern läser upp en fråga, vilket gör att den syns längre än nästan något annat i spelet. Den förtjänar mer uppmärksamhet än en tom skärm brukar få.

![Vänteskärm](/images/theme-design/frame2-pending.png)

### Ram 4 - frågeskärmen

**Vad som finns på den:** frågan, en timer, fyra svarsalternativ och en feedbackrad. Det är den skärm som rummet tittar längst på. Observera att ett alternativ kan bestå av enbart en emoji:

![Frågeskärm med fyra textalternativ](/images/theme-design/frame3-question-options.png)

![Frågeskärm med flaggor som svarsalternativ](/images/theme-design/frame3-question-emoji.png)

En fråga utan alternativ - spelarna skriver sitt svar på telefonen. Skärmen är nästan tom och timern blir huvudelementet:

![Öppen fråga med bara frågan och en stor timer](/images/theme-design/frame3-question-open.png)

Ögonblicket när tiden tar slut. Feedbackbubblan visas över skärmen och timern är tom:

![Frågeskärm som visar läget när tiden är ute](/images/theme-design/frame3-question-timeout.png)

### Ram 5 - fråga med bilaga

**Vad som finns på den:** samma delar som i ram 4, placerade runt en bild eller video. Det kan vara en annan komposition. Bilagan skalas för att rymmas i rutan du ritar, så både en liggande och en stående bild måste se acceptabla ut i den.

**Vad den omfattar:** bilagan i helskärm och bilagor som visas mellan frågor.

Här med alternativen till vänster och höger om bilagan:

![Frågeskärm med en bild i mitten](/images/theme-design/frame4-question-attachment.png)

En bilaga för sig själv, som fyller skärmen:

![Bilaga i helskärm](/images/theme-design/frame4-attachment-fullscreen.png)

### Ram 6 - svarsskärmen

**Vad som finns på den:** vilket svar som var rätt, hur rummets svar fördelades över alternativen och en feedbackrad.

**Vad den omfattar:** svarsskärmen för öppna frågor och för frågor med bilaga.

Skärmen går igenom tre ögonblick. Först fördelningen, utan att något är markerat än:

![Svarsskärm som visar fördelningen](/images/theme-design/frame5-answer-mc-spread.png)

Sedan bockas det rätta alternativet av och de felaktiga kryssas över:

![Svarsskärm där det rätta alternativet visas](/images/theme-design/frame5-answer-mc-reveal.png)

Och om frågan har en förklaring fälls en bubbla ner över grafiken. Lämna plats för den - den hamnar ovanpå det du har designat:

![Svarsskärm med förklaringsbubblan](/images/theme-design/frame5-answer-mc-explanation.png)

Med en liten grupp blir samma ögonblick en poänglista i stället för ett diagram:

![Svarsskärm för en liten grupp](/images/theme-design/frame5-answer-mc-small.png)

För en öppen fråga visar diagrammet hur många spelare som svarade rätt:

![Svarsskärm för en öppen fråga](/images/theme-design/frame5-answer-open.png)

### Ram 7 - ställning och vinnare

**Vad som finns på den:** en lista över spelare med placering, avatar, namn och poäng. Leverera **spelarraden** som ett separat, återanvändbart element: den upprepas sex gånger som standard, upp till tio.

**Vad den omfattar:** ställningen mellan rundor och den slutliga vinnaren.

Ställningen efter en runda, med sex spelarrader:

![Ställning med sex spelarrader](/images/theme-design/frame6-roundoutro.png)

Den sista nedräkningen presenterar en spelare i taget, från sista plats till första - placering, poäng och lagnamn i strålkastarljuset. Det är också här som de [flygande emojierna](#flying-emoji-land-on-top-of-everything) är flest:

![Vinnarnedräkningen som presenterar en spelare](/images/theme-design/frame6-winner-countdown.png)

![Slutställningen](/images/theme-design/frame6-winner.png)

### Ram 8 - rundintrot

**Vad som finns på den:** ett kort meddelande per rundkategori. Det finns sex kategorier: vetenskap och teknik, natur, underhållning och musik, sport, konst, historia.

**Vad den omfattar:** alla sex kategorierna. En design kan användas för flera av dem.

Här en komposition med en variant per kategori:

![Rundintro för kategorin natur](/images/theme-design/frame7-roundintro-nature.png)

![Rundintro för kategorin vetenskap](/images/theme-design/frame7-roundintro-science.png)

**En figur är valfri.** Standardtemat för QuizWitz har en som pratar och reagerar; [Emerald-temat](/docs/advanced/emerald-theme) levereras utan, och att slopa den tar bort det dyraste animationsarbetet - läppsynk, ögon, armar.

Utan en figur blir rundintrot ett grafiskt, typografiskt eller illustrativt ögonblick. Två tillvägagångssätt håller arbetet i proportion: en komposition med en färg- eller ikonvariant per kategori, eller ett enda universellt meddelande där bara rundans namn ändras. Sex helt olika intron är mycket arbete för några sekunder på skärmen.

---

## Elementarket

Två grupper av element, på ett ark, var och en ritad en gång och återanvänd överallt.

**Byggstenar för innehåll.** De fyller den allmänna ramens innehållsyta. Skärmarna som faller tillbaka på den byggs av dessa, så det du ritar här avgör hur alla ser ut:

- en **panel**: fyllning, kant, hörnradie - behållaren som en lista eller ett textblock ligger i
- en **listrad**: den upprepade enheten i en lista, med egen bakgrund eller ingen
- en **avdelare**: linjen mellan rader, där det inte finns någon panel
- ett **par av etikett och värde**: en kort etikett till vänster, ett värde till höger

**Kontroller.** Ritas en gång, används på varje skärm:

- en **knapp** i sina fyra lägen: vila, hovring, nedtryckt, inaktiverad
- symbolerna för **rätt** och **fel**
- en **rullningslist**, en **kryssruta**, en **rullgardinsmeny**
- var **QuizWitz-logotypen** placeras

---

## Vad som redan är bestämt åt dig

- **Spelarnas telefoner.** En fast HTML-layout.
- **De få saker som motorn ritar själv** - linjerna mellan raderna på poängstegen, den markerade raden i frågeväljaren, QR-koden. Deras färger kommer från [Färg som en lista](#colour-as-a-list).
- **Vilka skärmar som faller tillbaka på den allmänna ramen, och hur.**
- **Hur de sex kategorierna kopplas till grafiken för rundintrot.** Den kopplingen är en konfigurationsinställning, så ett intro kan återanvändas för flera kategorier.
- **All timing och alla animationslängder.**
- **Ljud.** Ett tema kan ha egen musik och egna ljudeffekter, men det är en separat leverans och ingår inte i designuppdraget.

---

## Designregler

Inget av detta begränsar din visuella design. Det handlar om hur filen byggs upp.

### Format

- **1920 × 1080 pixlar**, exakt. En ram per skärm.
- Arbeta **i vektor** där det går. Där du använder raster (foton, texturer): minst 2× visningsstorleken.
- Animate-dokumentet körs med **24 bildrutor per sekund**. Relevant om du levererar idéer för rörelse.
- Håll en **marginal på 5 %** vid kanterna fri från viktig information. Projektorer beskär bilden.

### Lagerstruktur - regeln som betyder mest

**Allt som kan röra sig, dyka upp eller ändra värde ligger på ett eget namngivet lager.** Inget sammanslaget, inget förenklat till ett lager.

I praktiken:

- de fyra svarsalternativen är fyra separata lager, inte ett
- timern är separat från bakgrunden
- en knapp och dess etikett är två element
- en spelarrad är en grupp som kan dupliceras

Det som får slås samman: rent dekorativ bakgrundsgrafik som fungerar som en enda stillbild.

Det här är den enda regeln som verkligen gör ont när den inte följs - grafiken måste då plockas isär eller ritas om, vilket är exakt den kostnad som det här arbetssättet ska undvika.

### Effekter som inte överlever

Motorn ritar på en HTML5-canvas. De här måste **bakas in i bilden** eller utelämnas:

| Effekt                                                                | Vad du gör i stället         |
| --------------------------------------------------------------------- | ---------------------------- |
| Liveoskärpa, skuggor och glöd som filter                              | Leverera dem som grafik      |
| Blandningslägen (multiplicera, raster, täcka över) | Omvandla dem till platt färg |
| Lagereffekter och justeringslager                                     | Baka in dem                  |
| Toningar **inuti** text, eller text med kontur per tecken             | Utelämna dem                 |
| Masker som ändras per bildruta                                        | Utelämna dem                 |

Toningar i former går bra. Transparens går bra. Skuggor som fast grafik går bra.

### Hur text beter sig

Det är här som design för QuizWitz skiljer sig mest från vanligt designarbete.

**Du anger ingen teckenstorlek. Du ritar en ruta.**

All text ritas live av en komponent som får två saker: en sträng och rektangeln du ritade. Den hittar sedan **den största teckenstorlek där strängen, radbruten över flera rader, fortfarande får plats i rutan**. En lång sträng krymper för att få plats; en kort växer tills rutan är full.

![En väljare där tre rader av olika längd får var sin teckenstorlek](/images/theme-design/frame1-general-multiquestion.png)

Tre rader, tre identiska rutor - och tre helt olika teckenstorlekar, enbart för att texten är kortare eller längre. ”Where is love” får full höjd; frågan ovanför får nöja sig med två små rader. Etiketterna till vänster beter sig på samma sätt.

Vad det innebär:

- **Samma fråga ser annorlunda ut i ett annat spel.** En fråga på sex ord blir stor och fyller skärmen; en på trettiofem ord blir liten över fem rader, i exakt samma ruta. Båda måste se bra ut.
- **Designa varje textruta två gånger.** Fyll den en gång med ett mycket kort exempel och en gång med ett mycket långt, och kontrollera att kompositionen håller i båda fallen. Som tumregel: ett svarsalternativ är från ett till ungefär åtta ord, en fråga från fem till fyrtio, ett spelarnamn från två till tjugo tecken.
- **Räkna inte med ett fast antal rader.** En rubrik som ”alltid ryms på en rad” finns inte här.
- **Justera inte text optiskt mot något annat.** Text som måste ligga i linje med en linje eller en form förskjuts så fort den blir kortare eller längre. Använd rutor som är tillräckligt rymliga och en justering (vänster, centrerad, höger) i stället för exakta positioner.
- **Tolv språk.** Tyska sammansättningar är långa, och ungerska är inte snällare. En ruta som är trång på engelska krymper till en oläsligt liten storlek på tyska.
- **Emoji kan förekomma i text.** Spelarna väljer en bredvid sitt lagnamn, och en fråga eller ett alternativ kan innehålla en - ibland består ett alternativ bara av en emoji. De ritas i färg och är högre än bokstäverna runt dem.

**Vad bygget behöver veta om varje textruta:** var den är, hur stor den är, hur den är justerad, vilken färg och vilket typsnitt. Inte: vilken punktstorlek.

**Det här kan du utnyttja.** En stor ruta med kort text blir en stark typografisk komposition i sig, och en ruta som du medvetet gör smal och hög tvingar texten in i en kolumn. Använd anpassningen som ett designgrepp; designa bara inte emot den.

### Timern - obligatorisk, och den är en animation

**Varje frågeskärm har en timer**; rummet måste kunna se hur mycket tid som är kvar.

**Timern är inte ett nedräknande tal utan en animation vars spelhuvud motorn flyttar.** Du designar ett förlopp från ”full” till ”tom” - en stapel som töms, en ring som sluts, ett timglas, en linje som krymper. Motorn spelar upp animationen i exakt den hastighet som gör att sista bildrutan sammanfaller med frågans slut.

Vad det innebär:

- **Frågans längd är inte fast.** Den ställs in per quiz - ofta tjugo till trettio sekunder, men den kan vara kortare eller längre. Din animation sträcks ut eller trycks ihop för att passa.
- **Inga siffror eller tick per sekund.** En timer som räknar ”20, 19, 18…” slutar stämma så fort längden ändras.
- **De sista sekunderna är spelets mest spända ögonblick.** Det hjälper om förloppet blir tydligare eller mer brådskande mot slutet.
- **Läsbar från rummets bakre del**, med en snabb blick.
- **Flera timers är tillåtna.** En stapel längst upp och en ring nära frågan styrs båda, så länge var och en heter `timer`.

Leverera timern som en serie nyckelbildrutor eller som en beskrivning av förloppet - ”stapeln töms från höger till vänster och skiftar från grönt till rött” räcker.

### Flygande emoji hamnar ovanpå allt

Varje spelare väljer en emoji när de går med, och spelet kastar ut de emojierna över skärmen. De ritas av motorn på ett lager ovanför temat. **Här finns inget för dig att designa** - men det finns något att designa runt, eftersom de inte är ett sällsynt inslag.

De dyker upp vid tre tillfällen:

- **När en spelare svarar.** Spelarens emoji stiger från nederkanten på en slumpmässig horisontell position, gör en båge uppåt och faller sedan ut ur bilden.
- **När en spelare slungar en.** Spelarna kan slunga sin emoji från telefonen; vinkel och hastighet kommer från svepet, och den skjuts iväg från mitten av nederkanten, snurrande.
- **När en placering avslöjas i den sista nedräkningen.** En skur av den presenterade spelarens emoji: tjugo för en vanlig placering, femtio för tredje plats, sjuttiofem för andra och **hundrafemtio för vinnaren.**

Vad det innebär för designen:

- **Håll den nedre tredjedelen av ställnings- och vinnarskärmarna fri från allt som är litet eller viktigt.** Under nedräkningen är det verkligen trångt där nere.
- **Räkna med att de krockar med din palett.** De är fullfärgs-emoji från alla hörn av Unicode-tabellen, och inget tema styr dem. En design som bara håller ihop inom ett snävt färgomfång ser oavsiktlig ut under de sekunderna.
- **Slungade emoji undertrycks medan en bild eller video visas**, så att bilageskärmarna förblir rena.
- **Hela lagret kan stängas av per spel**, så bygg inte heller en komposition som är beroende av att de finns där.

### Typsnitt

- **Typsnitten måste kunna bäddas in.** Filen `.ttf` eller `.otf` behövs, plus en licens som tillåter inbäddning i en applikation. Ett typsnitt som bara är licensierat som webbtypsnitt, eller bara för tryck, kan inte användas. Kontrollera det innan du designar med det; det är en dyr rättelse i efterhand.
- Typsnitt med ovanligt stora över- eller underlängder kan kompenseras, men flagga det om du använder ett sådant.

### Färg som en lista

Temat läser en färglista från en konfigurationsfil, och spelarnas telefoner stylas utifrån samma lista. Leverera din palett som en **namngiven lista**, inte bara som färger i grafiken:

| Var                           | Färger                                                                                                                                                                                                                                       |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spelskärm**                 | Huvudfärg, accentfärg, bakgrund, panel- eller behållarfärg, timerns bakgrund, standardtextfärg, rubrikens textfärg, frågans textfärg, knapptext, dialog- och förklaringstext, text för spelarnamn och poäng, färgen för rätt, färgen för fel |
| **De fyra svarsalternativen** | För varje alternativ: en bakgrundsfärg, en kantfärg och en platt färg för telefonerna och diagrammen                                                                                                                         |
| **Spelarnas telefoner**       | Bakgrund, textfärg, konturfärg, konturfärg för alternativ samt bakgrunds- och textfärg för svarsbehållaren                                                                                                                                   |

Toningar är tillåtna på spelskärmen: ange dem som två hexvärden.

Några färger är det _enda_ sättet att påverka delar som motorn ritar själv, så de är värda att bestämma i stället för att lämna som standard:

- **avdelaren** - linjerna mellan rader där det inte finns någon panel, och på poängstegen
- lägena **aktiv**, **inaktiv** och **vald** för en rad i frågeväljaren
- texten i **dialoger**
- **QR-kodens förgrund och bakgrund**

Om du utelämnar dem används inbyggda standardvärden - vitt, grått, rött, svart och vitt - som sällan passar en design.

### QuizWitz-logotypen

Egna designer innehåller QuizWitz-logotypen. Reservera en plats för den där den inte är i vägen för designen.

---

## Vad du ska lämna över

### Källfil - Illustrator föredras

Temat byggs i Adobe Animate, och vad Animate kan importera avgör hur mycket av ditt arbete som överlever överlämningen intakt:

| Verktyg                                          | Vad som händer vid import                                                                                                                                                                                                                                                                        | Använd det för                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate importerar den direkt och omvandlar dina lager till Animate-lager eller separata symboler, behåller lagernamnen och låter vektorerna förbli redigerbara. Det är precis det steget som gör att grafiken slipper byggas om för hand.                       | **Föredras** för den slutliga leveransen |
| **Adobe Photoshop**                              | Importeras med lagren intakta, precis som Illustrator, men ger raster i stället för vektor.                                                                                                                                                                                      | Möjligt                                  |
| **Figma**                                        | Allt går via export till SVG och PNG, och det är precis där den lagerstruktur som behövs här går förlorad. Om du ändå använder Figma, leverera **varje element separat som SVG**, med filnamn som matchar lagernamnen, så att strukturen kan byggas om för hand. | Konceptfasen, om du är snabbare i det    |

Filstruktur:

- En rityta per skärm, namngiven efter ramarna ovan.
- Återanvändbara delar (knapp, spelarrad, svarsalternativ, timer) som **symboler** eller komponenter, inte som lösa kopior.
- Lagernamn på engelska, utan mellanslag: `question`, `option1` till `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Färger som namngivna färgrutor och text som namngivna format, i stället för att anges på varje objekt för sig.

### Checklista för leveranser

1. **Källfilen**, strukturerad enligt ovan.
2. **Varje ram som PNG**, 1920 × 1080 - en referens för hur den ska se ut. För ram 2, både versionen med och versionen utan kundlogotyp.
3. **Elementarket** som en rityta: [byggstenarna för innehåll och kontrollerna](#the-element-sheet).
4. **Varje separat grafiskt element som transparent PNG i 2×**, i en mapp, med filnamn som matchar lagernamnet.
5. **Timern** som nyckelbildrutor eller en skriftlig beskrivning av förloppet.
6. **Typsnitt** som `.ttf` eller `.otf`, med bevis på licens.
7. **Färglistan** från [Färg som en lista](#colour-as-a-list), som hexvärden.
8. **En halv sida anteckningar**: vad idén är, hur alternativen ska visas, vad som rör sig och vad som står still. Inte en tio sidor lång designmotivering - den som bygger temat behöver veta vad som ska byggas. Idéer för rörelse kan beskrivas eller levereras som en grov animatic.

### Arbetsordning

1. **Ram 4, frågeskärmen, tillsammans med elementarket.** Få båda godkända före resten. Tillsammans innehåller de timern, alternativen, panelen och varje kontroll, så de avgör stilen för hela temat.
2. **Ram 1 till 3.** De följer naturligt av de två första.
3. **Ram 6 till 8** kommer sist.

---

## Appendix - symbolnamn

För fullständighetens skull, och för den som vill veta exakt var grafiken hamnar. **Du behöver inte läsa det här för att göra jobbet**; de åtta ramarna och elementarket ovan räcker. Att använda de här namnen som lagernamn sparar ett översättningssteg.

| Ram                                          | Symbolnamn                                                                                                                                | Obligatoriska delar                                                                                                                                                               |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Allmän ram         | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` valfri                                                                           | `placeholder` (innehållsytan); textrutan `title` valfri                                                                                                        |
| 1b. Frågeväljare, lång fråga | `MultiQuestionScreen`, `LongQuestionScreen`; båda valfria, faller tillbaka på den allmänna ramen                                          | väljare: platshållaren `questions`, `timer`; lång fråga: platshållaren `question`                                                                 |
| 2. Anslutningsskärm   | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` valfri, med en platshållare `logo`                                       | `instructions.line1` till `line5`, `connectedPlayers`; platshållaren `qrCode` med bildruteetiketten `showQrCode` valfri                                                           |
| 3. Vänteskärm         | `PendingScreen`; `PendingScreenWithLogo` valfri                                                                                           | `header.text`                                                                                                                                                                     |
| 4. Frågeskärm         | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` till `option4`, bildruteetiketterna `showOptions` och `showFeedback`                                                         |
| 5. Fråga med bilaga   | `QuestionScreenAttachment`                                                                                                                | som ovan, plus `attachment.placeholder`                                                                                                                                           |
| 5b. Bilaga i helskärm        | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                     |
| 6. Svarsskärm         | `AnswerPieScreen`; `AnswerPieScreenAttachment` valfri                                                                                     | `option1` till `option4`, `answer.text`, `feedback.text`                                                                                                                          |
| 6b. Svar på öppen fråga      | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment`-varianter valfria                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                             |
| 7. Ställning          | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` och `PlayerScoreNoImage` valfria                                | `header.text`, `players`, `feedback.text` (`playAgain.text` valfri); i raden: `position`, `name`, `score`, `avatar` valfri                     |
| 8. Rundintro          | en eller flera symboler med valfritt namn; konfigurationsfilen kopplar var och en av de sex kategorierna till en symbol                   | -                                                                                                                                                                                 |
| -                                            | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                |
| -                                            | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | ingen egen grafik behövs - byggs av det som finns i dina ramar                                                                                                                    |
| -                                            | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | visas bara i skrivbordsappen, inte i ett livequiz. Ingår inte i uppdraget: de tas från temamallen och stylas om med din bakgrund och dina knappar |

Standardtemats symboler för rundintron heter `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` och `RoundIntroTedCultHist`; konst och historia delar på den sista. ”Ted” i de namnen är en kvarleva från det ursprungliga temats figur och betyder inte att en figur måste finnas med i dem.

Varje element med `.text` efter sig är en anpassad textruta enligt beskrivningen under [Hur text beter sig](#how-text-behaves): en rektangel som motorn fyller själv. Elementet `timer` är ett filmklipp med egen tidslinje; motorn läser av antalet bildrutor och flyttar spelhuvudet i proportion till den förflutna tiden, högst 24 gånger per sekund.

### Vad konfigurationsfilen hämtar från din design

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

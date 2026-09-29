---
id: theme-design-guide
title: Designvejledning til temaer
---

# Designvejledning til temaer

[Temaer](/docs/advanced/theming) forklarer, hvordan et QuizWitz-tema bygges: i Adobe Animate, eksporteret som et CreateJS-bibliotek. Denne side handler om trinnet før det - at **designe** temaet.

Den er skrevet til en grafisk designer og går ud fra, at design og produktion i Animate udføres af forskellige personer. Få designere arbejder stadig i Adobe Animate, så en designer leverer som regel grafikken, og en anden samler temaet. Det fungerer godt, så længe grafikken kommer i en form, som opbygningen kan bruge. Denne side beskriver den form og fungerer samtidig som listen over leverancer, når du beder en designer om et tilbud.

Siden har fire dele:

1. [Hvad du designer](#what-you-are-designing) - de skærme, et tema dækker.
2. [De otte rammer](#eight-frames-and-an-element-sheet) og [elementarket](#the-element-sheet), én ad gangen, med skærmbilleder.
3. [Designregler](#design-rules) - hvordan filen skal bygges, så motoren kan bruge den.
4. [Hvad du skal aflevere](#what-to-hand-over) - kildefil, leverancer og arbejdsrækkefølge.

:::tip
Hvis du kun vil ændre farver, skrifttyper og baggrunde, har du ikke brug for noget af dette - tilpas i stedet [Emerald-temaet](/docs/advanced/emerald-theme).
:::

:::info[Se det i aktion]
Alle skærme, der beskrives her, kan afspilles live med eksempeldata i **tematesteren** på [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Den indlæser et tema og tilbyder en menu med testskærme: spørgsmål med og uden vedhæftning, svarfordelingen for en lille og en stor gruppe, stillingen, rundeintroerne, tilslutningsskærmen med og uden kundelogo og så videre. Tilføj `?theme=emerald` til adressen for at se [Emerald-temaet](/docs/advanced/emerald-theme). Den, der bygger temaet, bruger den samme side til at tjekke det, mens det bliver samlet.
:::

---

## Hvad du designer

Et spil QuizWitz spilles af et helt rum på én gang, og der er altid to skærme involveret:

- **Spilskærmen** - en projektor eller et tv, 1920 × 1080. Spørgsmål, svar, hvordan rummets svar fordelte sig, stillingen. Det er det, du designer.
- **Hver spillers telefon**, hvor de skriver deres svar. Det er en webside med et fast layout; den styles ud fra din farveliste, men du laver ikke selv layoutet.

Et tema er spilskærmens komplette visuelle udseende: baggrund, typografi, farver, måden et spørgsmål med fire svarmuligheder præsenteres på, hvordan stillingen bygges op, hvordan en runde annonceres.

---

## Otte rammer og et elementark

Spillet har snesevis af forskellige skærmtilstande, men de fleste er varianter af det samme layout. **Du designer otte rammer og ét ark med elementer; resten afledes af dem.** Det er ikke en genvej - det er sådan, motoren fungerer. En skærm uden sin egen grafik falder tilbage på en generel ramme.

Arket betyder lige så meget som rammerne: en reserveskærm har stadig brug for inventar i sit indholdsområde - et panel, en række, en streg.

| # | Ramme                                                            | Dækker også                                                             |
| - | ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1 | [Generel ramme](#frame-1---the-general-frame)                    | Tretten skærmtilstande uden egen grafik                                 |
| 2 | [Tilslutningsskærm](#frame-2---the-connect-screen)               | Tegn den to gange: med et kundelogo og uden             |
| 3 | [Venteskærm](#frame-3---the-waiting-screen)                      | -                                                                       |
| 4 | [Spørgsmålsskærm](#frame-4---the-question-screen)                | -                                                                       |
| 5 | [Spørgsmål med vedhæftning](#frame-5---question-with-attachment) | Vedhæftningen i fuld skærm og vedhæftninger, der vises mellem spørgsmål |
| 6 | [Svarskærm](#frame-6---the-answer-screen)                        | Svarskærmen til åbne spørgsmål og til spørgsmål med en vedhæftning      |
| 7 | [Stilling og vinder](#frame-7---standings-and-winner)            | Stillingen mellem runderne og den endelige vinder                       |
| 8 | [Rundeintro](#frame-8---the-round-intro)                         | Alle seks rundekategorier                                               |

:::note[Om skærmbillederne]
Skærmene nedenfor kommer fra et eksisterende tema. De viser, **hvilke elementer der vises på hver skærm, og hvornår**. De er ikke en reference for stil _eller_ layout: hvor dette tema placerer sit spørgsmål, sine svarmuligheder og sin nedtælling, er dets egen beslutning, og dit kan være helt anderledes.
:::

### Ramme 1 - den generelle ramme

**Hvad der er på den:** baggrunden, en overskrift og et tomt indholdsområde nedenunder. Det er ikke en færdig komposition, men den ramme, som resten bygges indeni.

**Hvad den dækker:** tretten skærmtilstande - rundeforklaring, stilling, spillerpræsentation, varianter af multiple choice, lange spørgsmål, advarsler om Seats, indstillinger. Hver af dem fylder indholdsområdet på sin egen måde med elementer fra [elementarket](#the-element-sheet), så rammen skal kunne rumme ting, der ikke ligner hinanden det mindste. Spørgsmålsvælgeren og det lange spørgsmål kan få deres egen komposition, hvis du ønsker det; ellers bruger de denne ramme.

To spiløjeblikke i den samme ramme: en spørgsmålsvælger og en pointstige.

![Den generelle ramme med en spørgsmålsvælger med tre rækker](/images/theme-design/frame1-general-multiquestion.png)

![Den generelle ramme med en pointstige med fem trin](/images/theme-design/frame1-general-strikeladder.png)

Se, hvor lidt de har til fælles. Vælgeren placerer sine tre rækker i et panel med en kant; stigen har slet intet panel, kun rækker adskilt af tynde streger. Det, de to har til fælles, er baggrunden og overskriftsbåndet over dem - alt nedenunder hører til den enkelte skærm og fyldes ud af spillet, ikke af dig.

Det panel og de streger kommer fra [elementarket](#the-element-sheet), ikke fra denne ramme. Det, denne ramme skal gøre, er at kunne rumme dem: design indholdsområdet som en tom, neutral, rummelig zone, der fungerer lige godt med et panel med kant, en bar liste og en tabel med rækker. En baggrund, der er urolig i midten, eller en overskrift, der kun fungerer med et panel lige nedenunder, er dér, det går i stykker.

### Ramme 2 - tilslutningsskærmen

**Hvad der er på den:** alt, hvad rummet skal bruge for at deltage.

- fem instruktionslinjer
- en spilkode og en QR-kode, begge genereret af motoren - reservér et kvadrat til QR-koden
- en linje med antallet af tilsluttede spillere
- en liste over spillere, der dukker op én efter én

**Tegn den to gange:** med et kundelogo ved siden af spilkoden og uden, hvor temaets egen grafik bærer skærmen.

![Tilslutningsskærm med et kundelogo](/images/theme-design/frame2-connect.png)

![Tilslutningsskærm uden et kundelogo](/images/theme-design/frame2-connect-nologo.png)

### Ramme 3 - venteskærmen

**Hvad der er på den:** næsten ingenting - quizzens eget logo eller temaets grafik.

Den deler kun baggrunden med tilslutningsskærmen, så design den som en selvstændig komposition. Den står fremme, mens quizmasteren læser et spørgsmål højt, og er derfor på skærmen længere end næsten alt andet i spillet. Den fortjener mere opmærksomhed, end en tom skærm normalt får.

![Venteskærm](/images/theme-design/frame2-pending.png)

### Ramme 4 - spørgsmålsskærmen

**Hvad der er på den:** spørgsmålet, en nedtælling, fire svarmuligheder og en feedbacklinje. Det er den skærm, rummet kigger længst på. Bemærk, at en svarmulighed kan bestå af intet andet end en emoji:

![Spørgsmålsskærm med fire tekstsvarmuligheder](/images/theme-design/frame3-question-options.png)

![Spørgsmålsskærm med flag som svarmuligheder](/images/theme-design/frame3-question-emoji.png)

Et spørgsmål uden svarmuligheder - spillerne skriver deres svar på telefonen. Skærmen er næsten tom, og nedtællingen bliver hovedelementet:

![Åbent spørgsmål med kun spørgsmålet og en stor nedtælling](/images/theme-design/frame3-question-open.png)

Øjeblikket, hvor tiden løber ud. Feedbackboblen vises over skærmen, og nedtællingen er tom:

![Spørgsmålsskærm, der viser, at tiden er gået](/images/theme-design/frame3-question-timeout.png)

### Ramme 5 - spørgsmål med vedhæftning

**Hvad der er på den:** de samme dele som i ramme 4, placeret omkring et billede eller en video. Det kan være en anden komposition. Vedhæftningen skaleres, så den passer ind i den boks, du tegner, så både et billede i liggende og i stående format skal se acceptabelt ud i den.

**Hvad den dækker:** vedhæftningen i fuld skærm og vedhæftninger, der vises mellem spørgsmål.

Her med svarmulighederne til venstre og højre for vedhæftningen:

![Spørgsmålsskærm med et billede i midten](/images/theme-design/frame4-question-attachment.png)

En vedhæftning alene, der fylder skærmen:

![Vedhæftning i fuld skærm](/images/theme-design/frame4-attachment-fullscreen.png)

### Ramme 6 - svarskærmen

**Hvad der er på den:** hvilket svar der var rigtigt, hvordan rummets svar fordelte sig på svarmulighederne, og en feedbacklinje.

**Hvad den dækker:** svarskærmen til åbne spørgsmål og til spørgsmål med en vedhæftning.

Skærmen gennemgår tre øjeblikke. Først fordelingen, hvor intet er markeret endnu:

![Svarskærm, der viser fordelingen](/images/theme-design/frame5-answer-mc-spread.png)

Derefter bliver den rigtige svarmulighed markeret med et flueben og de forkerte krydset ud:

![Svarskærm med den rigtige svarmulighed afsløret](/images/theme-design/frame5-answer-mc-reveal.png)

Og hvis spørgsmålet har en forklaring, falder en boble ned over grafikken. Giv plads til den - den lander oven på det, du har designet:

![Svarskærm med forklaringsboblen](/images/theme-design/frame5-answer-mc-explanation.png)

Med en lille gruppe er det samme øjeblik en scoreliste i stedet for et diagram:

![Svarskærm for en lille gruppe](/images/theme-design/frame5-answer-mc-small.png)

Ved et åbent spørgsmål viser diagrammet, hvor mange spillere der svarede rigtigt:

![Svarskærm for et åbent spørgsmål](/images/theme-design/frame5-answer-open.png)

### Ramme 7 - stilling og vinder

**Hvad der er på den:** en liste over spillere med placering, avatar, navn og score. Lever **spillerrækken** som et separat, genbrugeligt element: den gentages seks gange som standard, op til ti.

**Hvad den dækker:** stillingen mellem runderne og den endelige vinder.

Stillingen efter en runde, med seks spillerrækker:

![Stilling med seks spillerrækker](/images/theme-design/frame6-roundoutro.png)

Den afsluttende nedtælling nævner én spiller ad gangen, fra sidstepladsen til førstepladsen - placering, score og holdnavn i spotlyset. Det er også her, de [flyvende emoji](#flying-emoji-land-on-top-of-everything) er flest:

![Vindernedtællingen, der nævner én spiller](/images/theme-design/frame6-winner-countdown.png)

![Den endelige stilling](/images/theme-design/frame6-winner.png)

### Ramme 8 - rundeintroen

**Hvad der er på den:** en kort annoncering pr. rundekategori. Der er seks kategorier: videnskab & teknologi, natur, underholdning & musik, sport, kunst, historie.

**Hvad den dækker:** alle seks kategorier. Ét design kan dække flere af dem.

Her én komposition med en variant pr. kategori:

![Rundeintro for kategorien natur](/images/theme-design/frame7-roundintro-nature.png)

![Rundeintro for kategorien videnskab](/images/theme-design/frame7-roundintro-science.png)

**En figur er valgfri.** Standardtemaet i QuizWitz har en, der taler og reagerer; [Emerald-temaet](/docs/advanced/emerald-theme) leveres uden, og hvis man dropper den, forsvinder det dyreste animationsarbejde - læbesynk, øjne, arme.

Uden en figur bliver rundeintroen et grafisk, typografisk eller illustrativt øjeblik. To tilgange holder arbejdet i proportion: én komposition med en farve- eller ikonvariant pr. kategori, eller én universel annoncering, hvor kun rundens navn skifter. Seks helt forskellige introer er meget arbejde for nogle få sekunders skærmtid.

---

## Elementarket

To grupper af elementer på ét ark, hver tegnet én gang og genbrugt overalt.

**Indholdsbyggeklodser.** De fylder indholdsområdet i den generelle ramme. Skærmene, der falder tilbage på den, er sat sammen af disse, så det, du tegner her, bestemmer, hvordan de alle ser ud:

- et **panel**: fyld, kant, hjørneradius - beholderen, som en liste eller en tekstblok ligger i
- en **listerække**: den gentagne enhed i enhver liste, med sin egen baggrund eller ingen
- en **separator**: stregen mellem rækker, hvor der ikke er et panel
- et **par af etiket og værdi**: en kort etiket til venstre, en værdi til højre

**Kontroller.** Tegnet én gang, brugt på alle skærme:

- en **knap** i dens fire tilstande: hvile, hover, trykket, deaktiveret
- symbolerne for **rigtigt** og **forkert**
- en **rullebjælke**, et **afkrydsningsfelt**, en **rullemenu**
- hvor **QuizWitz-logoet** sidder

---

## Hvad der er bestemt for dig

- **Spillernes telefoner.** Et fast HTML-layout.
- **Den håndfuld ting, motoren selv tegner** - stregerne mellem rækkerne på pointstigen, den fremhævede række i spørgsmålsvælgeren, QR-koden. Deres farver kommer fra [Farver som en liste](#colour-as-a-list).
- **Hvilke skærme der falder tilbage på den generelle ramme, og hvordan.**
- **Hvordan de seks kategorier fordeles på grafikken til rundeintroen.** Den fordeling er en konfigurationsindstilling, så én intro kan genbruges til flere kategorier.
- **Al timing og varighed af animationer.**
- **Lyd.** Et tema kan have sin egen musik og sine egne lydeffekter, men det er en separat leverance og ikke en del af designopgaven.

---

## Designregler

Ingen af dem begrænser dit visuelle design. De handler om, hvordan filen er bygget.

### Format

- **1920 × 1080 pixels**, præcis. Én ramme pr. skærm.
- Arbejd **i vektor**, hvor du kan. Hvor du bruger raster (fotos, teksturer): mindst 2× visningsstørrelsen.
- Animate-dokumentet kører med **24 billeder pr. sekund**. Relevant, hvis du leverer idéer til bevægelse.
- Hold en **margen på 5%** ved kanterne fri for vigtig information. Projektorer beskærer billedet.

### Lagstruktur - den regel, der betyder mest

**Alt, der kan bevæge sig, dukke op eller ændre værdi, ligger på sit eget navngivne lag.** Intet flettet sammen, intet fladgjort.

I praksis:

- de fire svarmuligheder er fire separate lag, ikke ét
- nedtællingen er adskilt fra baggrunden
- en knap og dens etiket er to elementer
- en spillerrække er én gruppe, der kan duplikeres

Hvad der må flettes sammen: rent dekorativ baggrundsgrafik, der fungerer som ét stillbillede.

Det er den ene regel, der virkelig gør ondt, når den ikke bliver fulgt - grafikken skal så skilles ad eller tegnes om, hvilket er præcis den udgift, denne arbejdsdeling skal undgå.

### Effekter, der ikke overlever

Motoren tegner på et HTML5-canvas. Disse skal **bages ind i billedet** eller udelades:

| Effekt                                                                         | Hvad du gør i stedet     |
| ------------------------------------------------------------------------------ | ------------------------ |
| Live-sløring, skygger og glød som filtre                                       | Lever dem som grafik     |
| Blandingstilstande (multiplicer, skærm, overlejring)        | Omsæt dem til flad farve |
| Lageffekter og justeringslag                                                   | Bag dem ind              |
| Gradienter **inde i** tekst eller tekst med en kontur pr. tegn | Udelad dem               |
| Masker, der ændrer sig fra billede til billede                                 | Udelad dem               |

Gradienter i former er fine. Gennemsigtighed er fint. Skygger som fast grafik er fine.

### Sådan opfører tekst sig

Det er her, design til QuizWitz adskiller sig mest fra almindeligt designarbejde.

**Du angiver ikke en skriftstørrelse. Du tegner en boks.**

Al tekst tegnes live af en komponent, der modtager to ting: en tekststreng og det rektangel, du tegnede. Den finder derefter **den største skriftstørrelse, hvor teksten, fordelt over flere linjer, stadig kan være inde i boksen**. En lang tekst skrumper, så den passer; en kort vokser, indtil boksen er fyldt.

![En vælger, hvor tre linjer af forskellig længde hver får en forskellig skriftstørrelse](/images/theme-design/frame1-general-multiquestion.png)

Tre rækker, tre identiske bokse - og tre helt forskellige skriftstørrelser, kun fordi teksten er kortere eller længere. "Where is love" får hele højden; spørgsmålet over det må nøjes med to små linjer. Etiketterne til venstre opfører sig på samme måde.

Hvad det betyder:

- **Det samme spørgsmål ser anderledes ud i et andet spil.** Et spørgsmål på seks ord vises stort og fylder skærmen; et på femogtredive ord vises småt over fem linjer, i præcis den samme boks. Begge skal se rigtige ud.
- **Design hver tekstboks to gange.** Fyld den én gang med et meget kort eksempel og én gang med et meget langt, og tjek, at kompositionen holder i begge tilfælde. Som tommelfingerregel: en svarmulighed er fra ét til omkring otte ord, et spørgsmål fra fem til fyrre, et spillernavn fra to til tyve tegn.
- **Regn ikke med et fast antal linjer.** En titel, der "altid står på én linje", findes ikke her.
- **Juster ikke tekst optisk efter noget andet.** Tekst, der skal flugte med en streg eller en form, forskubber sig, så snart den er kortere eller længere. Brug bokse, der er rummelige nok, og en justering (venstre, centreret, højre) i stedet for præcise positioner.
- **Tolv sprog.** Tyske sammensatte ord er lange, og ungarsk er ikke meget bedre. En boks, der er stram på engelsk, falder til en ulæseligt lille størrelse på tysk.
- **Emoji kan forekomme i teksten.** Spillerne vælger en ved siden af deres holdnavn, og et spørgsmål eller en svarmulighed kan indeholde en - nogle gange er en svarmulighed ikke andet end en emoji. De tegnes i farver og er højere end bogstaverne omkring dem.

**Hvad opbygningen skal vide om hver tekstboks:** hvor den er, hvor stor den er, hvordan den er justeret, hvilken farve og hvilken skrifttype. Ikke: i hvilken punktstørrelse.

**Du kan udnytte det.** En stor boks med kort tekst bliver i sig selv en stærk typografisk komposition, og en boks, du bevidst gør smal og høj, tvinger teksten ind i en kolonne. Brug tilpasningen som et designgreb; bare lad være med at designe imod den.

### Nedtællingen - påkrævet, og den er en animation

**Alle spørgsmålsskærme har en nedtælling**; rummet skal kunne se, hvor meget tid der er tilbage.

**Nedtællingen er ikke et tal, der tæller, men en animation, hvis afspilningshoved motoren flytter.** Du designer et forløb fra "fuld" til "tom" - en bjælke, der tømmes, en ring, der lukker sig, et timeglas, en linje, der skrumper. Motoren afspiller animationen med præcis den hastighed, der får det sidste billede til at falde sammen med spørgsmålets afslutning.

Hvad det betyder:

- **Spørgsmålets varighed er ikke fast.** Den indstilles pr. quiz - ofte tyve til tredive sekunder, men den kan være kortere eller længere. Din animation strækkes eller komprimeres, så den passer.
- **Ingen tal eller tik pr. sekund.** En nedtælling, der tæller "20, 19, 18…", holder op med at være sand, så snart varigheden ændres.
- **De sidste sekunder er spillets mest spændte øjeblik.** Det hjælper, hvis forløbet bliver tydeligere eller mere presserende mod slutningen.
- **Læsbar fra bagerst i rummet**, med ét blik.
- **Flere nedtællinger er tilladt.** En bjælke øverst og en ring ved spørgsmålet bliver begge styret, så længe hver af dem hedder `timer`.

Lever nedtællingen som en række nøglebilleder eller som en beskrivelse af forløbet - "bjælken tømmes fra højre mod venstre og skifter fra grøn til rød" er nok.

### Flyvende emoji lander oven på alt

Hver spiller vælger en emoji, når de deltager, og spillet kaster de emoji hen over skærmen. De tegnes af motoren på et lag over temaet. **Der er intet her, du skal designe** - men der er noget, du skal designe udenom, for de er ikke en sjælden krusedulle.

De dukker op på tre tidspunkter:

- **Når en spiller svarer.** Spillerens emoji stiger op fra underkanten på en tilfældig vandret position, laver en bue og falder ud af billedet igen.
- **Når en spiller kaster en.** Spillerne kan kaste deres emoji fra telefonen; vinkel og fart kommer fra swipet, og den sendes af sted fra midten af bunden, mens den snurrer.
- **Når en placering afsløres i den afsluttende nedtælling.** En byge af den nævnte spillers emoji: tyve for en almindelig placering, halvtreds for tredjepladsen, femoghalvfjerds for andenpladsen og **hundrede og halvtreds for vinderen.**

Hvad det betyder for designet:

- **Hold den nederste tredjedel af stillings- og vinderskærmene fri for alt, der er småt eller vigtigt.** Under nedtællingen er der virkelig trængsel dernede.
- **Gå ud fra, at de vil støde sammen med din palet.** Det er emoji i fuld farve fra alle hjørner af Unicode-tabellen, og intet tema styrer dem. Et design, der kun hænger sammen inden for et snævert farveområde, vil se tilfældigt ud i de sekunder.
- **Kast undertrykkes, mens et billede eller en video vises**, så vedhæftningsskærmene forbliver rene.
- **Hele laget kan slås fra pr. spil**, så byg heller ikke en komposition, der er afhængig af, at de er der.

### Skrifttyper

- **Skrifttyper skal kunne indlejres.** Der skal bruges en `.ttf`- eller `.otf`-fil samt en licens, der tillader indlejring i en applikation. En skrifttype, der kun er licenseret som webfont eller kun til tryk, kan ikke bruges. Tjek det, før du designer med den; det er en dyr rettelse bagefter.
- Skrifttyper med usædvanligt høje over- eller underlængder kan der kompenseres for, men gør opmærksom på det, hvis du bruger en.

### Farver som en liste

Temaet læser en farveliste fra en konfigurationsfil, og spillernes telefoner styles ud fra den samme liste. Lever din palet som en **navngiven liste**, ikke kun som farver i grafikken:

| Hvor                       | Farver                                                                                                                                                                                                                                                                            |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spilskærm**              | Hovedfarve, accentfarve, baggrund, panel- eller beholderfarve, nedtællingens baggrund, standardtekstfarve, overskriftens tekstfarve, spørgsmålets tekstfarve, knaptekst, tekst i dialoger og forklaringer, tekst til spillernavn og score, farven for rigtigt, farven for forkert |
| **De fire svarmuligheder** | For hver svarmulighed: en baggrundsfarve, en kantfarve og én flad farve til telefonerne og diagrammerne                                                                                                                                                           |
| **Spillernes telefoner**   | Baggrund, tekstfarve, konturfarve, konturfarve for svarmuligheder samt baggrunds- og tekstfarve for svarbeholderen                                                                                                                                                                |

Gradienter er tilladt på spilskærmen: angiv dem som to hex-værdier.

Nogle få farver er det _eneste_ håndtag på dele, som motoren selv tegner, så det er værd at tage stilling til dem i stedet for at bruge standarden:

- **separatoren** - stregerne mellem rækker, hvor der ikke er et panel, og på pointstigen
- tilstandene **aktiv**, **inaktiv** og **valgt** for en række i spørgsmålsvælgeren
- teksten i **dialoger**
- **for- og bagsiden af QR-koden**

Hvis du udelader dem, falder de tilbage på indbyggede standardværdier - hvid, grå, rød, sort og hvid - som sjældent passer til et design.

### QuizWitz-logoet

Tilpassede designs indeholder QuizWitz-logoet. Reservér en plads til det, hvor det ikke står i vejen for designet.

---

## Hvad du skal aflevere

### Kildefil - helst Illustrator

Temaet bygges i Adobe Animate, og det, Animate kan importere, afgør, hvor meget af dit arbejde der overlever overdragelsen intakt:

| Værktøj                                          | Hvad der sker ved import                                                                                                                                                                                                                                                                       | Brug det til                               |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate importerer den direkte og konverterer dine lag til Animate-lag eller separate symboler, bevarer lagnavnene og lader vektorerne forblive redigerbare. Det er præcis det trin, der redder grafikken fra at skulle genopbygges i hånden.                  | **Foretrukket** til den endelige leverance |
| **Adobe Photoshop**                              | Importeres med lagene intakte, ligesom Illustrator, men giver raster i stedet for vektor.                                                                                                                                                                                      | Muligt                                     |
| **Figma**                                        | Alt går gennem eksport til SVG og PNG, og det er netop dér, den lagstruktur, der er brug for her, går tabt. Hvis du bruger Figma, så lever **hvert element separat som SVG**, med filnavne, der svarer til lagnavnene, så strukturen kan genopbygges i hånden. | Konceptfasen, hvis du er hurtigere i det   |

Filstruktur:

- Én tegneflade pr. skærm, navngivet efter rammerne ovenfor.
- Genbrugelige dele (knap, spillerrække, svarmulighed, nedtælling) som **symboler** eller komponenter, ikke som løse kopier.
- Lagnavne på engelsk, uden mellemrum: `question`, `option1` til `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farver som navngivne farveprøver og tekst som navngivne typografier, i stedet for at blive sat på hvert objekt for sig.

### Tjekliste over leverancer

1. **Kildefilen**, struktureret som ovenfor.
2. **Hver ramme som PNG**, 1920 × 1080 - en reference for, hvordan den skal se ud. For ramme 2 både versionen med og versionen uden kundelogo.
3. **Elementarket** som én tegneflade: [indholdsbyggeklodserne og kontrollerne](#the-element-sheet).
4. **Hvert separat grafisk element som en gennemsigtig PNG i 2×**, i én mappe, med filnavn svarende til lagnavnet.
5. **Nedtællingen** som nøglebilleder eller en skriftlig beskrivelse af forløbet.
6. **Skrifttyper** som `.ttf` eller `.otf`, med dokumentation for licensen.
7. **Farvelisten** fra [Farver som en liste](#colour-as-a-list), som hex-værdier.
8. **En halv side noter**: hvad idéen er, hvordan svarmulighederne skal vises, hvad der bevæger sig, og hvad der står stille. Ikke en designbegrundelse på ti sider - den, der bygger temaet, skal vide, hvad der skal bygges. Idéer til bevægelse kan beskrives eller leveres som en grov animatic.

### Arbejdsrækkefølge

1. **Ramme 4, spørgsmålsskærmen, sammen med elementarket.** Få begge godkendt før resten. Tilsammen indeholder de nedtællingen, svarmulighederne, panelet og alle kontroller, så de fastlægger stilen for hele temaet.
2. **Ramme 1 til 3.** De følger naturligt af de to første.
3. **Ramme 6 til 8** kommer til sidst.

---

## Bilag - symbolnavne

For fuldstændighedens skyld, og for alle, der vil vide præcis, hvor deres grafik ender. **Du behøver ikke at læse dette for at udføre arbejdet**; de otte rammer og elementarket ovenfor er nok. Hvis du bruger disse navne som lagnavne, sparer du et oversættelsestrin.

| Ramme                                                 | Symbolnavn                                                                                                                                | Påkrævede dele                                                                                                                                                                      |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Generel ramme               | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` valgfri                                                                          | `placeholder` (indholdsområdet); tekstboksen `title` valgfri                                                                                                     |
| 1b. Spørgsmålsvælger, langt spørgsmål | `MultiQuestionScreen`, `LongQuestionScreen`; begge valgfri, falder tilbage på den generelle ramme                                         | vælger: `questions`-pladsholder, `timer`; langt spørgsmål: `question`-pladsholder                                                                   |
| 2. Tilslutningsskærm           | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` valgfri, med en `logo`-pladsholder                                       | `instructions.line1` til `line5`, `connectedPlayers`; `qrCode`-pladsholder med billedetiketten `showQrCode` valgfri                                                                 |
| 3. Venteskærm                  | `PendingScreen`; `PendingScreenWithLogo` valgfri                                                                                          | `header.text`                                                                                                                                                                       |
| 4. Spørgsmålsskærm             | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` til `option4`, billedetiketter `showOptions` og `showFeedback`                                                                 |
| 5. Spørgsmål med vedhæftning   | `QuestionScreenAttachment`                                                                                                                | som ovenfor, plus `attachment.placeholder`                                                                                                                                          |
| 5b. Vedhæftning i fuld skærm          | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                       |
| 6. Svarskærm                   | `AnswerPieScreen`; `AnswerPieScreenAttachment` valgfri                                                                                    | `option1` til `option4`, `answer.text`, `feedback.text`                                                                                                                             |
| 6b. Svar på åbent spørgsmål           | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment`-varianter valgfri                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                               |
| 7. Stilling                    | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` og `PlayerScoreNoImage` valgfri                                 | `header.text`, `players`, `feedback.text` (`playAgain.text` valgfri); i rækken: `position`, `name`, `score`, `avatar` valgfri                    |
| 8. Rundeintro                  | et eller flere symboler med vilkårligt navn; konfigurationsfilen knytter hver af de seks kategorier til et symbol                         | -                                                                                                                                                                                   |
| -                                                     | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                  |
| -                                                     | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | kræver ingen egen grafik - bygges ud fra det, der findes i dine rammer                                                                                                              |
| -                                                     | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | vises kun i desktop-appen, ikke i en live-quiz. Ikke en del af opgaven: de tages fra temaskabelonen og får ny stil med din baggrund og dine knapper |

Standardtemaets symboler til rundeintroer hedder `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` og `RoundIntroTedCultHist`; kunst og historie deler den sidste. "Ted" i de navne er en rest fra det oprindelige temas figur og betyder ikke, at der skal optræde en figur i dem.

Alle elementer med `.text` efter sig er tilpassede tekstbokse som beskrevet under [Sådan opfører tekst sig](#how-text-behaves): et rektangel, som motoren selv fylder ud. Elementet `timer` er et movieclip med sin egen tidslinje; motoren læser antallet af billeder og flytter afspilningshovedet i forhold til den forløbne tid, højst 24 gange i sekundet.

### Hvad konfigurationsfilen tager fra dit design

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

---
id: theme-design-guide
title: Designveiledning for temaer
---

# Designveiledning for temaer

[Temaer](/docs/advanced/theming) forklarer hvordan et QuizWitz-tema bygges: i Adobe Animate, eksportert som et CreateJS-bibliotek. Denne siden dekker steget før det - å **designe** temaet.

Den er skrevet for en grafisk designer og forutsetter at design og produksjon i Animate gjøres av forskjellige personer. Få designere jobber fortsatt i Adobe Animate, så vanligvis leverer en designer grafikken, og noen andre setter sammen temaet. Det fungerer godt, så lenge grafikken kommer i en form byggingen kan bruke. Denne siden beskriver den formen, og fungerer samtidig som listen over leveranser når du ber en designer om et pristilbud.

Siden har fire deler:

1. [Hva du designer](#what-you-are-designing) - skjermene et tema dekker.
2. [De åtte rammene](#eight-frames-and-an-element-sheet) og [elementarket](#the-element-sheet), én etter én, med skjermbilder.
3. [Designregler](#design-rules) - hvordan filen må bygges for at motoren skal kunne bruke den.
4. [Hva du skal levere](#what-to-hand-over) - kildefil, leveranser og arbeidsrekkefølge.

:::tip
Hvis du bare vil endre farger, skrifter og bakgrunner, trenger du ikke noe av dette - tilpass heller [Emerald-temaet](/docs/advanced/emerald-theme).
:::

:::info[Se det i aksjon]
Alle skjermene som beskrives her, kan spilles direkte, med eksempeldata, i **tematesteren** på [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Den laster inn et tema og tilbyr en meny med testskjermer: spørsmål med og uten vedlegg, svarfordelingen for en liten og en stor gruppe, stillingen, rundeintroene, tilkoblingsskjermen med og uten kundelogo, og så videre. Legg til `?theme=emerald` i adressen for å se [Emerald-temaet](/docs/advanced/emerald-theme). Den som bygger temaet, bruker den samme siden til å sjekke det mens det settes sammen.
:::

---

## Hva du designer

Et QuizWitz-spill spilles av et helt rom samtidig, og to skjermer er alltid involvert:

- **Spillskjermen** - en projektor eller TV, 1920 × 1080. Spørsmål, svar, hvordan svarene i rommet fordelte seg, stillingen. Det er dette du designer.
- **Telefonen til hver spiller**, der de skriver inn svaret sitt. Det er en nettside med fast oppsett; den får stil fra fargelisten din, men oppsettet lager ikke du.

Et tema er hele det visuelle uttrykket på spillskjermen: bakgrunn, typografi, farger, måten et spørsmål med fire alternativer presenteres på, hvordan stillingen bygges opp, hvordan en runde kunngjøres.

---

## Åtte rammer og et elementark

Spillet har dusinvis av ulike skjermtilstander, men de fleste er varianter av det samme oppsettet. **Du designer åtte rammer og ett elementark; resten avledes fra dem.** Det er ikke en snarvei - det er slik motoren fungerer. En skjerm uten egen grafikk faller tilbake på en generell ramme.

Arket betyr like mye som rammene: en reserveskjerm trenger fortsatt innredning i innholdsområdet sitt - et panel, en rad, en linje.

| # | Ramme                                                       | Dekker også                                                     |
| - | ----------------------------------------------------------- | --------------------------------------------------------------- |
| 1 | [Generell ramme](#frame-1---the-general-frame)              | Tretten skjermtilstander uten egen grafikk                      |
| 2 | [Tilkoblingsskjerm](#frame-2---the-connect-screen)          | Tegn den to ganger: med kundelogo og uten       |
| 3 | [Venteskjerm](#frame-3---the-waiting-screen)                | -                                                               |
| 4 | [Spørsmålsskjerm](#frame-4---the-question-screen)           | -                                                               |
| 5 | [Spørsmål med vedlegg](#frame-5---question-with-attachment) | Vedlegget i fullskjerm, og vedlegg som vises mellom spørsmålene |
| 6 | [Svarskjerm](#frame-6---the-answer-screen)                  | Svarskjermen for åpne spørsmål og for spørsmål med vedlegg      |
| 7 | [Stilling og vinner](#frame-7---standings-and-winner)       | Stillingen mellom rundene og den endelige vinneren              |
| 8 | [Rundeintro](#frame-8---the-round-intro)                    | Alle seks rundekategorier                                       |

:::note[Om skjermbildene]
Skjermene nedenfor er hentet fra et eksisterende tema. De viser **hvilke elementer som vises på hver skjerm, og når**. De er ikke en referanse for stil _eller_ oppsett: hvor dette temaet plasserer spørsmålet, alternativene og tidtakeren, er dets eget valg, og ditt kan være helt annerledes.
:::

### Ramme 1 - den generelle rammen

**Hva den inneholder:** bakgrunnen, en tittel i toppfeltet og et tomt innholdsområde under den. Det er ikke en ferdig komposisjon, men rammen resten bygges inne i.

**Hva den dekker:** tretten skjermtilstander - forklaring av runden, stilling, spillerpresentasjon, flervalgsvarianter, lange spørsmål, advarsler om Seats, innstillinger. Hver av dem fyller innholdsområdet på sin egen måte med elementer fra [elementarket](#the-element-sheet), så rammen må romme ting som ikke ligner hverandre i det hele tatt. Spørsmålsvelgeren og det lange spørsmålet kan få sin egen komposisjon hvis du ønsker det; ellers bruker de denne rammen.

To spilløyeblikk i samme ramme: en spørsmålsvelger og en poengstige.

![Den generelle rammen med en spørsmålsvelger på tre rader](/images/theme-design/frame1-general-multiquestion.png)

![Den generelle rammen med en poengstige på fem nivåer](/images/theme-design/frame1-general-strikeladder.png)

Se hvor lite de har til felles. Velgeren plasserer de tre radene sine i et panel med kantlinje; stigen har ikke noe panel i det hele tatt, bare rader skilt med tynne linjer. Det de to har felles, er bakgrunnen og toppfeltet over dem - alt under det hører til den enkelte skjermen og fylles av spillet, ikke av deg.

Det panelet og de linjene kommer fra [elementarket](#the-element-sheet), ikke fra denne rammen. Det denne rammen må gjøre, er å romme dem: design innholdsområdet som en tom, nøytral og romslig sone som fungerer like godt med et panel med kantlinje, en enkel liste og en tabell med rader. En bakgrunn som er urolig i midten, eller et toppfelt som bare fungerer med et panel rett under seg, er der det svikter.

### Ramme 2 - tilkoblingsskjermen

**Hva den inneholder:** alt rommet trenger for å bli med.

- fem linjer med instruksjoner
- en tilkoblingskode og en QR-kode, begge generert av motoren - sett av et kvadrat til QR-koden
- en linje med antallet tilkoblede spillere
- en liste over spillere som kommer til etter hvert

**Tegn den to ganger:** med en kundelogo ved siden av tilkoblingskoden, og uten, der temaets egen grafikk bærer skjermen.

![Tilkoblingsskjerm med kundelogo](/images/theme-design/frame2-connect.png)

![Tilkoblingsskjerm uten kundelogo](/images/theme-design/frame2-connect-nologo.png)

### Ramme 3 - venteskjermen

**Hva den inneholder:** nesten ingenting - quizens egen logo eller temaets grafikk.

Den har bare bakgrunnen felles med tilkoblingsskjermen, så design den som en egen komposisjon. Den står fremme mens quizmasteren leser et spørsmål høyt, og det gjør at den er på skjermen lenger enn nesten noe annet i spillet. Den fortjener mer oppmerksomhet enn en tom skjerm vanligvis får.

![Venteskjerm](/images/theme-design/frame2-pending.png)

### Ramme 4 - spørsmålsskjermen

**Hva den inneholder:** spørsmålet, en tidtaker, fire svaralternativer og en tilbakemeldingslinje. Dette er skjermen rommet ser lengst på. Merk at et alternativ kan bestå av ikke annet enn en emoji:

![Spørsmålsskjerm med fire tekstalternativer](/images/theme-design/frame3-question-options.png)

![Spørsmålsskjerm med flagg som svaralternativer](/images/theme-design/frame3-question-emoji.png)

Et spørsmål uten alternativer - spillerne skriver svaret sitt på telefonen. Skjermen er nesten tom, og tidtakeren blir hovedelementet:

![Åpent spørsmål med bare spørsmålet og en stor tidtaker](/images/theme-design/frame3-question-open.png)

Øyeblikket tiden renner ut. Tilbakemeldingsboblen dukker opp over skjermen, og tidtakeren er tom:

![Spørsmålsskjerm som viser at tiden er ute](/images/theme-design/frame3-question-timeout.png)

### Ramme 5 - spørsmål med vedlegg

**Hva den inneholder:** de samme delene som ramme 4, plassert rundt et bilde eller en video. Den kan ha en annen komposisjon. Vedlegget skaleres for å få plass i boksen du tegner, så både et liggende og et stående bilde må se akseptabelt ut i den.

**Hva den dekker:** vedlegget i fullskjerm, og vedlegg som vises mellom spørsmålene.

Her med alternativene til venstre og høyre for vedlegget:

![Spørsmålsskjerm med et bilde i midten](/images/theme-design/frame4-question-attachment.png)

Et vedlegg alene, som fyller skjermen:

![Vedlegg i fullskjerm](/images/theme-design/frame4-attachment-fullscreen.png)

### Ramme 6 - svarskjermen

**Hva den inneholder:** hvilket svar som var riktig, hvordan svarene i rommet fordelte seg på alternativene, og en tilbakemeldingslinje.

**Hva den dekker:** svarskjermen for åpne spørsmål og for spørsmål med vedlegg.

Skjermen går gjennom tre øyeblikk. Først fordelingen, uten at noe er markert ennå:

![Svarskjerm som viser fordelingen](/images/theme-design/frame5-answer-mc-spread.png)

Deretter hakes det riktige alternativet av, og de gale krysses ut:

![Svarskjerm der det riktige alternativet er avslørt](/images/theme-design/frame5-answer-mc-reveal.png)

Og hvis spørsmålet har en forklaring, faller en boble ned over grafikken. Sett av plass til den - den legger seg oppå det du har designet:

![Svarskjerm med forklaringsboblen](/images/theme-design/frame5-answer-mc-explanation.png)

Med en liten gruppe er det samme øyeblikket en poengliste i stedet for et diagram:

![Svarskjerm for en liten gruppe](/images/theme-design/frame5-answer-mc-small.png)

For et åpent spørsmål viser diagrammet hvor mange spillere som svarte riktig:

![Svarskjerm for et åpent spørsmål](/images/theme-design/frame5-answer-open.png)

### Ramme 7 - stilling og vinner

**Hva den inneholder:** en liste over spillere med plassering, avatar, navn og poengsum. Lever **spillerraden** som et eget, gjenbrukbart element: den gjentas seks ganger som standard, opptil ti.

**Hva den dekker:** stillingen mellom rundene og den endelige vinneren.

Stillingen etter en runde, med seks spillerrader:

![Stilling med seks spillerrader](/images/theme-design/frame6-roundoutro.png)

Den endelige nedtellingen navngir én spiller om gangen, fra siste plass til første - plassering, poengsum og lagnavn i rampelyset. Det er også her de [flygende emojiene](#flying-emoji-land-on-top-of-everything) er flest:

![Vinnernedtellingen som navngir én spiller](/images/theme-design/frame6-winner-countdown.png)

![Sluttstillingen](/images/theme-design/frame6-winner.png)

### Ramme 8 - rundeintroen

**Hva den inneholder:** en kort kunngjøring per rundekategori. Det finnes seks kategorier: vitenskap og teknologi, natur, underholdning og musikk, sport, kunst, historie.

**Hva den dekker:** alle seks kategoriene. Ett design kan dekke flere av dem.

Her én komposisjon med en variant per kategori:

![Rundeintro for kategorien natur](/images/theme-design/frame7-roundintro-nature.png)

![Rundeintro for kategorien vitenskap](/images/theme-design/frame7-roundintro-science.png)

**En figur er valgfri.** Standardtemaet til QuizWitz har en som snakker og reagerer; [Emerald-temaet](/docs/advanced/emerald-theme) kommer uten, og å droppe den fjerner det dyreste animasjonsarbeidet - leppesynk, øyne, armer.

Uten en figur blir rundeintroen et grafisk, typografisk eller illustrativt øyeblikk. To tilnærminger holder arbeidet i rimelige proporsjoner: én komposisjon med en farge- eller ikonvariant per kategori, eller én universell kunngjøring der bare rundenavnet endres. Seks helt forskjellige introer er mye arbeid for noen få sekunder på skjermen.

---

## Elementarket

To grupper elementer, på ett ark, hver tegnet én gang og gjenbrukt overalt.

**Byggeklosser for innhold.** Disse fyller innholdsområdet i den generelle rammen. Skjermene som faller tilbake på den, settes sammen av disse, så det du tegner her, avgjør hvordan alle sammen ser ut:

- et **panel**: fyll, kantlinje, hjørneradius - beholderen en liste eller en tekstblokk står i
- en **listerad**: den gjentatte enheten i enhver liste, med egen bakgrunn eller uten
- en **skillelinje**: linjen mellom rader, der det ikke er noe panel
- et **etikett- og verdipar**: en kort etikett til venstre, en verdi til høyre

**Kontroller.** Tegnes én gang, brukes på alle skjermer:

- en **knapp** i sine fire tilstander: hvile, hover, trykket, deaktivert
- symbolene for **riktig** og **feil**
- et **rullefelt**, en **avkrysningsboks**, en **nedtrekksliste**
- hvor **QuizWitz-logoen** plasseres

---

## Hva som er bestemt for deg

- **Spillernes telefoner.** Et fast HTML-oppsett.
- **Den håndfullen ting motoren tegner selv** - linjene mellom radene på poengstigen, den uthevede raden i spørsmålsvelgeren, QR-koden. Fargene deres kommer fra [Farger som en liste](#colour-as-a-list).
- **Hvilke skjermer som faller tilbake på den generelle rammen, og hvordan.**
- **Hvordan de seks kategoriene kobles til grafikken for rundeintroene.** Den koblingen er en konfigurasjonsinnstilling, så én intro kan gjenbrukes for flere kategorier.
- **All timing og varighet på animasjoner.**
- **Lyd.** Et tema kan ha egen musikk og egne lydeffekter, men det er en separat leveranse og ikke en del av designoppdraget.

---

## Designregler

Ingen av disse begrenser det visuelle designet ditt. De handler om hvordan filen er bygget opp.

### Format

- **1920 × 1080 piksler**, nøyaktig. Én ramme per skjerm.
- Arbeid **i vektor** der du kan. Der du bruker raster (bilder, teksturer): minst 2× visningsstørrelsen.
- Animate-dokumentet kjører med **24 bilder per sekund**. Relevant hvis du leverer ideer til bevegelse.
- Hold en **marg på 5 %** langs kantene fri for viktig informasjon. Projektorer beskjærer bildet.

### Lagstruktur - regelen som betyr mest

**Alt som kan bevege seg, dukke opp eller endre verdi, ligger på sitt eget navngitte lag.** Ingenting slått sammen, ingenting flatet ut.

I praksis:

- de fire svaralternativene er fire separate lag, ikke ett
- tidtakeren er atskilt fra bakgrunnen
- en knapp og etiketten dens er to elementer
- en spillerrad er én gruppe som kan dupliseres

Det som kan slås sammen: ren dekorativ bakgrunnsgrafikk som fungerer som ett enkelt stillbilde.

Dette er den ene regelen som virkelig gjør vondt når den ikke følges - da må grafikken plukkes fra hverandre eller tegnes på nytt, og det er nettopp den kostnaden denne arbeidsdelingen skal unngå.

### Effekter som ikke overlever

Motoren tegner på et HTML5-lerret. Disse må **bakes inn i bildet** eller utelates:

| Effekt                                                              | Hva du gjør i stedet         |
| ------------------------------------------------------------------- | ---------------------------- |
| Direkte uskarphet, slagskygger og glød som filtre                   | Lever dem som grafikk        |
| Blandingsmoduser (multipliser, raster, overlegg) | Gjør dem om til flate farger |
| Lageffekter og justeringslag                                        | Bak dem inn                  |
| Gradienter **inne i** tekst, eller tekst med kontur per tegn        | Utelat dem                   |
| Masker som endres fra ramme til ramme                               | Utelat dem                   |

Gradienter i former er greit. Gjennomsiktighet er greit. Skygger som fast grafikk er greit.

### Hvordan tekst oppfører seg

Det er her design for QuizWitz skiller seg mest fra vanlig designarbeid.

**Du setter ikke en skriftstørrelse. Du tegner en boks.**

All tekst tegnes direkte av en komponent som får to ting: en tekststreng og rektangelet du tegnet. Den finner så **den største skriftstørrelsen der teksten, fordelt over flere linjer, fortsatt får plass i boksen**. En lang tekst krymper for å få plass; en kort tekst vokser til boksen er full.

![En velger der tre linjer av ulik lengde får hver sin skriftstørrelse](/images/theme-design/frame1-general-multiquestion.png)

Tre rader, tre identiske bokser - og tre helt forskjellige skriftstørrelser, bare fordi teksten er kortere eller lengre. «Where is love» får full høyde; spørsmålet over må klare seg med to små linjer. Etikettene til venstre oppfører seg på samme måte.

Det betyr at:

- **Det samme spørsmålet ser annerledes ut i et annet spill.** Et spørsmål på seks ord vises stort og fyller skjermen; et på trettifem ord vises lite over fem linjer, i nøyaktig samme boks. Begge må se riktige ut.
- **Design hver tekstboks to ganger.** Fyll den én gang med en svært kort prøvetekst og én gang med en svært lang, og sjekk at komposisjonen holder i begge tilfeller. Som tommelfingerregel: et svaralternativ er fra ett til rundt åtte ord, et spørsmål fra fem til førti, et spillernavn fra to til tjue tegn.
- **Ikke regn med et fast antall linjer.** En tittel som «alltid står på én linje», finnes ikke her.
- **Ikke juster tekst optisk etter noe annet.** Tekst som skal flukte med en linje eller en form, vil forskyve seg så snart den blir kortere eller lengre. Bruk bokser som er romslige nok, og en justering (venstre, midtstilt, høyre) i stedet for nøyaktige posisjoner.
- **Tolv språk.** Tyske sammensetninger er lange, og ungarsk er ikke noe snillere. En boks som er trang på engelsk, faller til en uleselig liten størrelse på tysk.
- **Emoji kan dukke opp inne i tekst.** Spillerne velger en ved siden av lagnavnet sitt, og et spørsmål eller et alternativ kan inneholde en - noen ganger er et alternativ ikke annet enn en emoji. De tegnes i farger og er høyere enn bokstavene rundt dem.

**Hva byggingen trenger å vite om hver tekstboks:** hvor den er, hvor stor den er, hvordan den er justert, hvilken farge og hvilken skrift. Ikke: i hvilken punktstørrelse.

**Dette kan du utnytte.** En stor boks med kort tekst blir en sterk typografisk komposisjon i seg selv, og en boks du med vilje gjør smal og høy, tvinger teksten inn i en spalte. Bruk tilpasningen som et designgrep; bare ikke design mot den.

### Tidtakeren - påkrevd, og den er en animasjon

**Hver spørsmålsskjerm har en tidtaker**; rommet må se hvor mye tid som er igjen.

**Tidtakeren er ikke et tall som teller, men en animasjon der motoren flytter avspillingshodet.** Du designer en progresjon fra «full» til «tom» - en stolpe som tømmes, en ring som lukkes, et timeglass, en linje som krymper. Motoren spiller av animasjonen i nøyaktig den hastigheten som gjør at den siste rammen faller sammen med slutten av spørsmålet.

Det betyr at:

- **Varigheten på spørsmålet er ikke fast.** Den angis per quiz - ofte tjue til tretti sekunder, men den kan være kortere eller lengre. Animasjonen din strekkes eller komprimeres for å passe.
- **Ingen tall eller tikk per sekund.** En tidtaker som teller «20, 19, 18…», slutter å stemme så snart varigheten endres.
- **De siste sekundene er det mest spennende øyeblikket i spillet.** Det hjelper hvis fremdriften blir tydeligere eller mer presserende mot slutten.
- **Lesbar fra bakerst i rommet**, med et raskt blikk.
- **Flere tidtakere er tillatt.** En stolpe øverst og en ring ved spørsmålet styres begge, så lenge hver av dem heter `timer`.

Lever tidtakeren som en serie nøkkelrammer eller som en beskrivelse av progresjonen - «stolpen tømmes fra høyre mot venstre og går fra grønn til rød» er nok.

### Flygende emoji lander oppå alt

Hver spiller velger en emoji når de blir med, og spillet kaster disse emojiene over skjermen. De tegnes av motoren på et lag over temaet. **Det er ingenting her for deg å designe** - men det er noe å designe rundt, for de er ikke en sjelden krusedull.

De dukker opp i tre øyeblikk:

- **Når en spiller svarer.** Emojien deres stiger opp fra nederkanten på en tilfeldig vannrett posisjon, går i en bue oppover og faller ut av bildet igjen.
- **Når en spiller slenger en.** Spillerne kan slenge emojien sin fra telefonen; vinkel og fart kommer fra sveipet, og den skytes ut fra midten nederst, mens den snurrer.
- **Når en plassering avsløres i den endelige nedtellingen.** En byge av emojien til spilleren som navngis: tjue for en vanlig plassering, femti for tredjeplass, syttifem for andreplass og **hundre og femti for vinneren.**

Hva det betyr for designet:

- **Hold den nederste tredjedelen av stillings- og vinnerskjermene fri for alt som er lite eller viktig.** Under nedtellingen er det virkelig trangt der nede.
- **Gå ut fra at de vil kollidere med fargepaletten din.** De er fargerike emojier fra alle hjørner av Unicode-tabellen, og ingen temaer styrer dem. Et design som bare henger sammen innenfor et smalt fargespekter, vil se tilfeldig ut i de sekundene.
- **Slengte emojier undertrykkes mens et bilde eller en video vises**, slik at vedleggsskjermene holdes rene.
- **Hele laget kan slås av per spill**, så ikke bygg en komposisjon som er avhengig av at de er der heller.

### Skrifter

- **Skriftene må kunne bygges inn.** Du trenger `.ttf`- eller `.otf`-filen, pluss en lisens som tillater innbygging i en applikasjon. En skrift som bare er lisensiert som nettskrift, eller bare for trykk, kan ikke brukes. Sjekk dette før du designer med den; det er en dyr rettelse i etterkant.
- Skrifter med uvanlig store over- eller underlengder kan kompenseres for, men si fra hvis du bruker en slik.

### Farger som en liste

Temaet leser en fargeliste fra en konfigurasjonsfil, og spillernes telefoner får stil fra den samme listen. Lever fargepaletten din som en **navngitt liste**, ikke bare som farger i grafikken:

| Hvor                          | Farger                                                                                                                                                                                                                                                                              |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spillskjerm**               | Hovedfarge, aksentfarge, bakgrunn, panel- eller beholderfarge, bakgrunn for tidtakeren, standard tekstfarge, tekstfarge i toppfeltet, tekstfarge for spørsmål, knappetekst, tekst i dialoger og forklaringer, tekst for spillernavn og poengsum, fargen for riktig, fargen for feil |
| **De fire svaralternativene** | For hvert alternativ: en bakgrunnsfarge, en kantfarge og én flat farge for telefonene og diagrammene                                                                                                                                                                |
| **Spillernes telefoner**      | Bakgrunn, tekstfarge, konturfarge, konturfarge for alternativer, og bakgrunns- og tekstfargen til svarbeholderen                                                                                                                                                                    |

Gradienter er tillatt på spillskjermen: oppgi dem som to heksverdier.

Noen få farger er det _eneste_ håndtaket på deler motoren tegner selv, så det lønner seg å bestemme dem i stedet for å bruke standardverdiene:

- **skillelinjen** - linjene mellom radene der det ikke er noe panel, og på poengstigen
- tilstandene **aktiv**, **inaktiv** og **valgt** for en rad i spørsmålsvelgeren
- teksten i **dialoger**
- **forgrunnen og bakgrunnen til QR-koden**

Hvis du utelater dem, faller de tilbake på innebygde standardverdier - hvit, grå, rød, svart og hvit - som sjelden passer til et design.

### QuizWitz-logoen

Egne design inneholder QuizWitz-logoen. Sett av en plass til den der den ikke står i veien for designet.

---

## Hva du skal levere

### Kildefil - helst Illustrator

Temaet bygges i Adobe Animate, og det Animate kan importere, avgjør hvor mye av arbeidet ditt som overlever overleveringen intakt:

| Verktøy                                          | Hva som skjer ved import                                                                                                                                                                                                                                                                         | Bruk det til                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate importerer det direkte og gjør lagene dine om til Animate-lag eller separate symboler, beholder lagnavnene og lar vektorene forbli redigerbare. Det er nettopp det steget som gjør at grafikken slipper å bygges opp igjen for hånd.                     | **Foretrukket** for den endelige leveransen |
| **Adobe Photoshop**                              | Importeres med lagene intakt, som Illustrator, men gir raster i stedet for vektor.                                                                                                                                                                                               | Mulig                                       |
| **Figma**                                        | Alt går via eksport til SVG og PNG, og det er nettopp der lagstrukturen som trengs her, går tapt. Hvis du likevel bruker Figma, lever **hvert element separat som SVG**, med filnavn som tilsvarer lagnavnene, slik at strukturen kan bygges opp igjen for hånd. | Konseptfasen, hvis du jobber raskere i det  |

Filstruktur:

- Ett tegnebrett per skjerm, oppkalt etter rammene over.
- Gjenbrukbare deler (knapp, spillerrad, svaralternativ, tidtaker) som **symboler** eller komponenter, ikke som løse kopier.
- Lagnavn på engelsk, uten mellomrom: `question`, `option1` til `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farger som navngitte fargeprøver og tekst som navngitte stiler, i stedet for å være satt på hvert objekt for seg.

### Sjekkliste for leveranser

1. **Kildefilen**, strukturert som beskrevet over.
2. **Hver ramme som PNG**, 1920 × 1080 - en referanse for hvordan den skal se ut. For ramme 2 både versjonen med og versjonen uten kundelogo.
3. **Elementarket** som ett tegnebrett: [byggeklossene for innhold og kontrollene](#the-element-sheet).
4. **Hvert separate grafiske element som en gjennomsiktig PNG i 2×**, i én mappe, med filnavn som tilsvarer lagnavnet.
5. **Tidtakeren** som nøkkelrammer eller en skriftlig beskrivelse av progresjonen.
6. **Skrifter** som `.ttf` eller `.otf`, med dokumentasjon på lisens.
7. **Fargelisten** fra [Farger som en liste](#colour-as-a-list), som heksverdier.
8. **En halv side med notater**: hva ideen er, hvordan alternativene skal vises, hva som beveger seg og hva som står stille. Ikke en tisiders designbegrunnelse - den som bygger temaet, trenger å vite hva som skal bygges. Ideer til bevegelse kan beskrives eller leveres som en grov animatic.

### Arbeidsrekkefølge

1. **Ramme 4, spørsmålsskjermen, sammen med elementarket.** Få begge godkjent før resten. Til sammen inneholder de tidtakeren, alternativene, panelet og alle kontrollene, så de fastsetter stilen for hele temaet.
2. **Ramme 1 til 3.** De følger naturlig av de to første.
3. **Ramme 6 til 8** kommer sist.

---

## Vedlegg - symbolnavn

For fullstendighetens skyld, og for alle som vil vite nøyaktig hvor grafikken deres havner. **Du trenger ikke lese dette for å gjøre jobben**; de åtte rammene og elementarket over er nok. Å bruke disse navnene som lagnavn sparer et oversettelsessteg.

| Ramme                                               | Symbolnavn                                                                                                                                | Påkrevde deler                                                                                                                                                                               |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Generell ramme            | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` valgfritt                                                                        | `placeholder` (innholdsområdet); tekstboksen `title` valgfri                                                                                                              |
| 1b. Spørsmålsvelger, langt spørsmål | `MultiQuestionScreen`, `LongQuestionScreen`; begge valgfrie, faller tilbake på den generelle rammen                                       | velger: plassholderen `questions`, `timer`; langt spørsmål: plassholderen `question`                                                                         |
| 2. Tilkoblingsskjerm         | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` valgfritt, med en plassholder `logo`                                     | `instructions.line1` til `line5`, `connectedPlayers`; plassholderen `qrCode` med rammeetiketten `showQrCode` valgfri                                                                         |
| 3. Venteskjerm               | `PendingScreen`; `PendingScreenWithLogo` valgfritt                                                                                        | `header.text`                                                                                                                                                                                |
| 4. Spørsmålsskjerm           | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` til `option4`, rammeetiketter `showOptions` og `showFeedback`                                                                           |
| 5. Spørsmål med vedlegg      | `QuestionScreenAttachment`                                                                                                                | som over, pluss `attachment.placeholder`                                                                                                                                                     |
| 5b. Vedlegg i fullskjerm            | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                |
| 6. Svarskjerm                | `AnswerPieScreen`; `AnswerPieScreenAttachment` valgfritt                                                                                  | `option1` til `option4`, `answer.text`, `feedback.text`                                                                                                                                      |
| 6b. Svar på åpent spørsmål          | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment`-varianter valgfrie                                                           | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                        |
| 7. Stilling                  | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` og `PlayerScoreNoImage` valgfrie                                | `header.text`, `players`, `feedback.text` (`playAgain.text` valgfri); i raden: `position`, `name`, `score`, `avatar` valgfri                              |
| 8. Rundeintro                | ett eller flere symboler med valgfritt navn; konfigurasjonsfilen kobler hver av de seks kategoriene til et symbol                         | -                                                                                                                                                                                            |
| -                                                   | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                           |
| -                                                   | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | ingen egen grafikk nødvendig - bygges av det som finnes i rammene dine                                                                                                                       |
| -                                                   | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | vises bare i skrivebordsappen, ikke i en direktesendt quiz. Ikke en del av oppdraget: de hentes fra temamalen og får ny stil med bakgrunnen og knappene dine |

Standardtemaets symboler for rundeintroer heter `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` og `RoundIntroTedCultHist`; kunst og historie deler det siste. «Ted» i disse navnene er en rest fra figuren i det opprinnelige temaet og betyr ikke at en figur må være med i dem.

Hvert element med `.text` etter seg er en tilpasset tekstboks som beskrevet under [Hvordan tekst oppfører seg](#how-text-behaves): et rektangel motoren fyller selv. `timer`-elementet er et filmklipp med egen tidslinje; motoren leser antallet rammer og flytter avspillingshodet i takt med medgått tid, høyst 24 ganger per sekund.

### Hva konfigurasjonsfilen henter fra designet ditt

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

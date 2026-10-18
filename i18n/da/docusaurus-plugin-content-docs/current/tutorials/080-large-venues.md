---
id: large-venues
title: Store spillesteder, lys og lyd
---

# 🏟️ Store spillesteder, lys og lyd

QuizWitz Live skalerer fra en pubquiz til store spillesteder med hundredvis af spillere. Denne vejledning viser, hvad der ændrer sig, når du flytter til en større scene: netværket, lyden og synkroniseringen af dit lys (eller andet sceneudstyr) med spillet.

> 🧭 Hvis du er ny i QuizWitz Live, så start med [**opstartsvejledningen for quizmastere**](../quizmaster/002-startup.md).

---

## 🌐 En stabil internetforbindelse

Alle dele af et Live-spil taler med hinanden via vores servere i realtid: spilskærmen, Quizmaster-appen, Jury-appen, regiværktøjerne og hver spillers enhed. En stabil internetforbindelse er det vigtigste krav til et stort event.

- Tilslut computeren til spilskærmen og eventuelle regicomputere med et **netværkskabel**. Stol ikke på stedets wifi eller et mobilt hotspot til dem.
- Sørg for, at spillerne har god wifi- eller mobildækning (4G/5G) i hele lokalet. Et fyldt lokale kan overbelaste et lille wifi-netværk.
- Klik på **Indlæs quiz** i god tid før start. QuizWitz indlæser alle billeder, lyd og video på forhånd, så vedhæftninger afspilles glat, når quizzen kører.

---

## 🔊 Lyd: alt afspilles via spilskærmen

Al lyd afspilles af spilskærmen: musikken og lydeffekterne fra QuizWitz og alle lyd- eller videovedhæftninger, du føjer til dine spørgsmål, runder eller din quiz (musik til tilslutningsskærmen, musik til afslutningen af en runde og så videre). Alt er timet med det, der sker på skærmen.

Du behøver altså kun at forbinde **lydudgangen på computeren til spilskærmen** med din mixer eller dit PA-anlæg. Der er ingen separate lydcues, der skal afspilles manuelt.

- Brug lydstyrkeskyderen i spillets kontrollinje til at indstille niveauet eller slå alle quizlyde fra.
- Hvis du kun vil afspille din egen uploadede lyd, så tilføj `music=0` til spillinket (se [avancerede parametre](../advanced/020-advanced-parameters.md)). `connectMusic=0` slår kun musikken på tilslutningsskærmen fra.

---

## 💡 Lys: MIDI-controlleren

MIDI-controlleren på [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) omsætter hændelser i spillet til MIDI-noder. Knyt de noder til cues i dit lysprogram eller dit lyspult, så følger dit lys automatisk spillet.

Vi bruger den sammen med [QLC+](https://www.qlcplus.org/) (gratis lysprogram, der styrer DMX-lamper), men den sender almindelig MIDI, så den virker med de fleste lyspulte og lysprogrammer, der tager imod MIDI, og også med lydpulte, videomixere og andet sceneudstyr.

### Tilslutning

1. Start dit QuizWitz Live-spil. Quizmaster-appen viser **regikoden** ved siden af quizmasterkoden og jurykoden.
2. Åbn [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) i **Google Chrome** på den computer, der er forbundet med dit lysanlæg. Controlleren bruger Web MIDI, som andre browsere måske ikke understøtter.
3. Tillad MIDI-adgang, når Chrome spørger om det.
4. Indtast regikoden, og klik på **Connect**.
5. Vælg MIDI-enheden og kanalen under **Output** (kanal 1 som standard).

Hvis dit lysprogram kører på samme computer, så brug en virtuel MIDI-port: **IAC Driver** på macOS eller et værktøj som **loopMIDI** på Windows.

> ⚠️ Hold controllerfanen åben under hele spillet. Lukker du den, stopper MIDI-noderne.

### Sådan virker det

Hver hændelse i spillet har sit eget faste MIDI-nodenummer. Når hændelsen sker, spiller controlleren den node på udgangskanalen. Nodenummeret står på hver knap i controlleren.

- **Tryk på en knap** for at sende dens node manuelt. Brug det til at sætte din mapping op og teste den før showet.
- En knap bliver kortvarigt **rød**, når spillet udløser den.
- De fleste hændelser sendes kun én gang i træk: hvis den samme hændelse sker to gange efter hinanden, springes den anden over. Rigtigt svar og forkert svar sendes hver gang, så du kan blinke med lyset for hvert svar, der bliver afsløret.
- **Feedback** (valgfrit): vælg en MIDI-indgang og en kanal (kanal 2 som standard). Noder, som dit lysprogram sender tilbage, lyser de tilsvarende knapper op med grønt, så du kan se, hvilke cues der er aktive.

### MIDI-noder

| Node | Hændelse |
|---|---|
| 1 | Spilintro |
| 2 | Spilintro: stop |
| 3 | Rundeintro |
| 4 | Rundeintro: stop |
| 5 | Lynrunde-intro |
| 6 | Lynrunde-intro: stop |
| 10 | Spørgsmålet starter |
| 11 | Spørgsmålet er i gang |
| 12 | Nedtællingen for spørgsmålet starter |
| 13 | Nedtællingen for spørgsmålet stopper |
| 14 | Spørgsmålet er færdigt |
| 20 | Nedtælling for spørgsmålet ved 25 % |
| 21 | Nedtælling for spørgsmålet ved 33 % |
| 22 | Nedtælling for spørgsmålet ved 50 % |
| 23 | Nedtælling for spørgsmålet ved 66 % |
| 24 | Nedtælling for spørgsmålet ved 75 % |
| 30 | Vedhæftning vises |
| 31 | Vedhæftning skjules |
| 40 | Før spørgsmålets resultat |
| 41 | Spørgsmålets resultat |
| 42 | Rigtigt svar afsløres |
| 43 | Forkert svar afsløres |
| 44 | Spørgsmålets resultat: stop |
| 45 | Alle svarede rigtigt |
| 46 | Ingen svarede rigtigt |
| 47 | Kun ét rigtigt svar |
| 50 | Rundens resultat |
| 51 | Rundens resultat: stop |
| 52 | Lynrundens resultat |
| 53 | Lynrundens resultat: stop |
| 60 | Pause |
| 61 | Pause: stop |
| 70 | Slutresultat |
| 71 | Slutresultat: en placering afsløres |
| 72 | Slutresultat: vinderen afsløres |
| 73 | Slutresultat: stop |

### Lys pr. spørgsmål

Du kan give hvert spørgsmål sin egen lysstemning. Åbn spørgsmålets indstillinger i quizeditoren, og tilføj **Belysning** (under *Præsentation*). Når nedtællingen for spørgsmålet starter, sender controlleren noden for den stemning. Spørgsmål uden lysstemning sender noden for *Standard*, så dit lys kan vende tilbage til sin normale tilstand.

| Node | Belysning |
|---|---|
| 100 | Standard |
| 101 | Nedtælling |
| 102 | Diskofest |
| 103 | Krigszone |
| 104 | Rød alarm |
| 105 | Stjerneklar nat |
| 106 | Fængselsflugt |
| 107 | Farlige stoffer |
| 108 | Hyggelig pink |
| 109 | Atlantis |
| 110 | Jungle |
| 111 | Blåt hav |
| 112 | Gult hav |
| 113 | Grønt hav |
| 114 | Lilla hav |
| 115 | Orange hav |
| 116 | Rødt hav |
| 117 | Rød mod blå |

Navnene er forslag: hvad hver node gør, bestemmer du og dit lysopsæt.

---

## 🛠️ Flere regiværktøjer

[**regie.catlab.eu**](https://regie.catlab.eu) har flere værktøjer til store events. De bruger alle regikoden.

- **Teleprompter** - en ekstra quizmasterskærm med automatisk rulning og spejling
- **Director screen** - send beskeder til folkene på scenen på en eller flere scenemonitorer
- **OBS controller** - skift OBS-scener automatisk under spillet (se [livestreamquiz](040-livestreaming.md))
- **Countdown timer** - vis QuizWitz-nedtællinger på en separat skærm
- **Duplicate screen** - vis en kopi af spilskærmen på en anden skærm

---

## ✅ Eksempel på opsætning

- **Computer til spilskærmen** - forbundet med projektoren eller LED-væggen og med PA-anlægget, med netværkskabel
- **Regicomputer** - MIDI-controlleren i Chrome, forbundet med dit lysanlæg, med netværkskabel
- **Tablet eller telefon** - Quizmaster-appen
- **Bærbar eller tablet** - Jury-appen, til at justere point og styre spillet

> 💡 Lav en komplet gennemprøvning på stedet før eventet, så du kan teste dine lyscues, lydniveauer og netværket.

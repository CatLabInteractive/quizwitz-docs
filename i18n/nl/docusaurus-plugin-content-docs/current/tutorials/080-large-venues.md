---
id: large-venues
title: Grote locaties, licht en geluid
---

# 🏟️ Grote locaties, licht en geluid

QuizWitz Live schaalt mee van een café-quiz tot grote locaties met honderden spelers. Deze gids behandelt wat er verandert als je naar een groter podium gaat: het netwerk, het geluid en het synchroniseren van je verlichting (of andere showapparatuur) met het spel.

> 🧭 Ben je nieuw met QuizWitz Live? Begin dan met de [**opstartgids voor de quizmaster**](../quizmaster/002-startup.md).

---

## 🌐 Een stabiele internetverbinding

Elk onderdeel van een live spel praat in realtime met de andere via onze servers: het spelscherm, de Quizmaster-app, de Jury-app, de regietools en het toestel van elke speler. Een stabiele internetverbinding is de belangrijkste voorwaarde voor een groot evenement.

- Sluit de computer van het spelscherm en eventuele regiecomputers aan met een **netwerkkabel**. Vertrouw hiervoor niet op de wifi van de locatie of een mobiele hotspot.
- Zorg dat spelers in de hele zaal goede wifi- of mobiele (4G/5G) dekking hebben. Een volle zaal kan een klein wifinetwerk overbelasten.
- Klik ruim voor de start op **Laad quiz**. QuizWitz laadt alle afbeeldingen, audio en video vooraf, zodat bijlagen vlot afspelen zodra de quiz loopt.

---

## 🔊 Geluid: alles speelt via het spelscherm

Al het geluid wordt afgespeeld door het spelscherm: de muziek en geluidseffecten van QuizWitz, en elke audio- of videobijlage die je aan je vragen, rondes of quiz toevoegt (muziek op het aanmeldscherm, outromuziek van een ronde, enzovoort). Alles is getimed op wat er op het scherm gebeurt.

Je hoeft dus alleen de **audio-uitgang van de computer van het spelscherm** aan te sluiten op je mengtafel of geluidsinstallatie. Er zijn geen aparte geluidscues die je met de hand moet afvuren.

- Gebruik de volumeschuif in de bedieningsbalk van het spel om het niveau in te stellen, of om alle quizgeluiden te dempen.
- Wil je alleen je eigen geüploade audio afspelen? Voeg dan `music=0` toe aan de spellink (zie [geavanceerde parameters](../advanced/020-advanced-parameters.md)). `connectMusic=0` zet alleen de muziek op het aanmeldscherm uit.

---

## 💡 Licht: de MIDI-controller

De MIDI-controller op [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) zet gebeurtenissen in het spel om in MIDI-noten. Koppel die noten aan cues in je lichtsoftware of lichttafel, en je verlichting volgt het spel automatisch.

Wij gebruiken het met [QLC+](https://www.qlcplus.org/) (gratis lichtsoftware die DMX-armaturen aanstuurt), maar het verstuurt gewone MIDI, dus het werkt met de meeste lichttafels en lichtsoftware die MIDI-invoer accepteren, en ook met geluidstafels, videomixers en andere showapparatuur.

### Verbinden

1. Start je QuizWitz Live-spel. De Quizmaster-app toont de **regiecode** naast de quizmastercode en de jurycode.
2. Open op de computer die met je lichtinstallatie verbonden is [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) in **Google Chrome**. De controller gebruikt Web MIDI, wat andere browsers mogelijk niet ondersteunen.
3. Sta MIDI-toegang toe als Chrome erom vraagt.
4. Voer de regiecode in en klik op **Connect**.
5. Kies het MIDI-apparaat bij **Output** en het kanaal (standaard kanaal 1).

Draait je lichtsoftware op dezelfde computer? Gebruik dan een virtuele MIDI-poort: de **IAC Driver** op macOS, of een tool zoals **loopMIDI** op Windows.

> ⚠️ Houd het tabblad van de controller het hele spel open. Als je het sluit, stoppen de MIDI-noten.

### Zo werkt het

Elke gebeurtenis in het spel heeft een eigen, vast MIDI-nootnummer. Wanneer de gebeurtenis plaatsvindt, speelt de controller die noot af op het uitgangskanaal. Het nootnummer staat op elke knop in de controller.

- **Druk op een knop** om de noot met de hand te versturen. Zo kun je je koppelingen instellen en testen vóór de show.
- Een knop wordt even **rood** wanneer het spel hem activeert.
- De meeste gebeurtenissen worden maar één keer na elkaar verstuurd: als dezelfde gebeurtenis twee keer na elkaar plaatsvindt, wordt de tweede overgeslagen. Juist antwoord en fout antwoord worden altijd verstuurd, zodat je de lichten kunt laten flitsen bij elk antwoord dat onthuld wordt.
- **Feedback** (optioneel): kies een MIDI-ingang en een kanaal (standaard kanaal 2). Noten die je lichtsoftware terugstuurt, laten de bijbehorende knoppen groen oplichten, zodat je ziet welke cues actief zijn.

### MIDI-noten

| Noot | Gebeurtenis |
|---|---|
| 1 | Intro van het spel |
| 2 | Intro van het spel: stop |
| 3 | Intro van de ronde |
| 4 | Intro van de ronde: stop |
| 5 | Intro van de Bliksemronde |
| 6 | Intro van de Bliksemronde: stop |
| 10 | Start van de vraag |
| 11 | Vraag bezig |
| 12 | Timer van de vraag start |
| 13 | Timer van de vraag stopt |
| 14 | Vraag afgelopen |
| 20 | Timer van de vraag op 25% |
| 21 | Timer van de vraag op 33% |
| 22 | Timer van de vraag op 50% |
| 23 | Timer van de vraag op 66% |
| 24 | Timer van de vraag op 75% |
| 30 | Bijlage getoond |
| 31 | Bijlage verborgen |
| 40 | Vóór het resultaat van de vraag |
| 41 | Resultaat van de vraag |
| 42 | Juist antwoord onthuld |
| 43 | Fout antwoord onthuld |
| 44 | Resultaat van de vraag: stop |
| 45 | Iedereen had het juist |
| 46 | Niemand had het juist |
| 47 | Maar één juist antwoord |
| 50 | Resultaat van de ronde |
| 51 | Resultaat van de ronde: stop |
| 52 | Resultaat van de Bliksemronde |
| 53 | Resultaat van de Bliksemronde: stop |
| 60 | Pauze |
| 61 | Pauze: stop |
| 70 | Eindresultaat |
| 71 | Eindresultaat: een positie wordt onthuld |
| 72 | Eindresultaat: de winnaar wordt onthuld |
| 73 | Eindresultaat: stop |

### Verlichting per vraag

Je kunt elke vraag een eigen lichtsfeer geven. Open in de quizeditor de instellingen van de vraag en voeg **Verlichting** toe (onder *Presentatie*). Wanneer de timer van de vraag start, verstuurt de controller de noot van die sfeer. Vragen zonder lichtsfeer versturen de noot *Standaard*, zodat je verlichting kan terugkeren naar de normale stand.

| Noot | Verlichting |
|---|---|
| 100 | Standaard |
| 101 | Aftellen |
| 102 | Discofeest |
| 103 | Oorlogsgebied |
| 104 | Rood alarm |
| 105 | Sterrennacht |
| 106 | Ontsnapping uit de gevangenis |
| 107 | Gevaarlijke stoffen |
| 108 | Gezellig roze |
| 109 | Atlantis |
| 110 | Jungle |
| 111 | Blauwe oceaan |
| 112 | Gele oceaan |
| 113 | Groene oceaan |
| 114 | Paarse oceaan |
| 115 | Oranje oceaan |
| 116 | Rode oceaan |
| 117 | Rood tegen blauw |

De namen zijn suggesties: wat elke noot doet, bepaal je zelf met je lichtinstallatie.

---

## 🛠️ Meer regietools

[**regie.catlab.eu**](https://regie.catlab.eu) heeft nog meer tools voor grote evenementen. Ze werken allemaal met de regiecode.

- **Teleprompter** - een tweede quizmasterscherm dat automatisch scrolt en kan spiegelen
- **Regiescherm** - stuur berichten naar de mensen op het podium via een of meer podiummonitors
- **OBS-controller** - wissel tijdens het spel automatisch van OBS-scène (zie [livestreamquiz](040-livestreaming.md))
- **Afteltimer** - toon de timers van QuizWitz op een apart scherm
- **Duplicaatscherm** - toon een kopie van het spelscherm op een andere monitor

---

## ✅ Voorbeeldopstelling

- **Computer van het spelscherm** - aangesloten op de projector of ledwall en op de geluidsinstallatie, met een netwerkkabel
- **Regiecomputer** - de MIDI-controller in Chrome, verbonden met je lichtinstallatie, met een netwerkkabel
- **Tablet of telefoon** - de Quizmaster-app
- **Laptop of tablet** - de Jury-app, om scores aan te passen en het spel te bedienen

> 💡 Doe vóór het evenement een volledige doorloop op de locatie, zodat je je lichtcues, geluidsniveaus en het netwerk kunt testen.

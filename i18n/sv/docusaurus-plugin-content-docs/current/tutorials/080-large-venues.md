---
id: large-venues
title: Stora lokaler, ljus och ljud
---

# 🏟️ Stora lokaler, ljus och ljud

QuizWitz Live skalar från ett pubquiz till stora lokaler med hundratals spelare. Den här guiden går igenom vad som ändras när du flyttar till en större scen: nätverket, ljudet och hur du synkar ljuset (eller annan showutrustning) med spelet.

> 🧭 Om du är ny i QuizWitz Live, börja med [**uppstartsguiden för quizmaster**](../quizmaster/002-startup.md).

---

## 🌐 En stabil internetanslutning

Alla delar av ett livespel pratar med varandra via våra servrar i realtid: spelskärmen, Quizmaster-appen, juryappen, regiverktygen och varje spelares enhet. En stabil internetanslutning är det viktigaste kravet för ett stort evenemang.

- Anslut spelskärmens dator och eventuella regidatorer med en **nätverkskabel**. Lita inte på lokalens wifi eller en mobil hotspot för dessa.
- Se till att spelarna har bra wifi- eller mobiltäckning (4G/5G) i hela lokalen. Ett fullsatt rum kan överbelasta ett litet wifi-nätverk.
- Klicka på **Ladda quiz** i god tid före start. QuizWitz förladdar alla bilder, allt ljud och all video, så att bilagorna spelas upp smidigt när quizet väl är igång.

---

## 🔊 Ljud: allt spelas upp via spelskärmen

Allt ljud spelas upp av spelskärmen: QuizWitz musik och ljudeffekter, och varje ljud- eller videobilaga som du lägger till i dina frågor, rundor eller ditt quiz (musik på anslutningsskärmen, outromusik för rundan och så vidare). Allt är synkat med det som händer på skärmen.

Du behöver alltså bara ansluta **ljudutgången från spelskärmens dator** till ditt mixerbord eller PA. Det finns inga separata ljudcues att starta för hand.

- Använd volymreglaget i spelets kontrollfält för att ställa in nivån eller för att stänga av alla quizljud.
- Om du bara vill spela upp ditt eget uppladdade ljud lägger du till `music=0` i spellänken (se [avancerade parametrar](../advanced/020-advanced-parameters.md)). `connectMusic=0` stänger bara av musiken på anslutningsskärmen.

---

## 💡 Ljus: MIDI-styrningen

MIDI-styrningen på [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) gör om händelser i spelet till MIDI-noter. Koppla de noterna till cues i ditt ljusprogram eller ditt ljusbord, så följer ljuset spelet automatiskt.

Vi använder den med [QLC+](https://www.qlcplus.org/) (gratis ljusprogram som styr DMX-armaturer), men eftersom den skickar vanlig MIDI fungerar den med de flesta ljusbord och ljusprogram som tar emot MIDI-ingång, och även med ljudbord, videomixrar och annan showutrustning.

### Ansluta

1. Starta ditt QuizWitz Live-spel. Quizmaster-appen visar **regikoden** bredvid quizmasterkoden och jurykoden.
2. Öppna [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) i **Google Chrome** på datorn som är ansluten till ditt ljussystem. Styrningen använder Web MIDI, som andra webbläsare kanske inte stöder.
3. Tillåt MIDI-åtkomst när Chrome frågar.
4. Ange regikoden och klicka på **Connect**.
5. Välj MIDI-enhet för utgången (**Output**) och kanal (kanal 1 som standard).

Om ditt ljusprogram körs på samma dator använder du en virtuell MIDI-port: **IAC Driver** på macOS, eller ett verktyg som **loopMIDI** på Windows.

> ⚠️ Håll fliken med styrningen öppen under hela spelet. Om du stänger den slutar MIDI-noterna skickas.

### Så fungerar det

Varje händelse i spelet har sitt eget fasta MIDI-notnummer. När händelsen inträffar spelar styrningen den noten på utgångskanalen. Notnumret visas på varje knapp i styrningen.

- **Tryck på en knapp** för att skicka dess not för hand. Använd det för att ställa in och testa din koppling före showen.
- En knapp blir **röd** en kort stund när spelet utlöser den.
- De flesta händelser skickas bara en gång i rad: om samma händelse inträffar två gånger i rad hoppas den andra över. Rätt svar och fel svar skickas varje gång, så att du kan blinka med ljuset för varje svar som visas.
- **Feedback** (valfritt): välj en MIDI-ingång och kanal (kanal 2 som standard). Noter som ditt ljusprogram skickar tillbaka tänder motsvarande knappar i grönt, så att du ser vilka cues som är aktiva.

### MIDI-noter

| Not | Händelse |
|---|---|
| 1 | Spelintro |
| 2 | Spelintro: stopp |
| 3 | Rundintro |
| 4 | Rundintro: stopp |
| 5 | Intro för blixtrunda |
| 6 | Intro för blixtrunda: stopp |
| 10 | Frågan börjar |
| 11 | Frågan pågår |
| 12 | Frågans timer startar |
| 13 | Frågans timer stoppar |
| 14 | Frågan klar |
| 20 | Frågans timer på 25 % |
| 21 | Frågans timer på 33 % |
| 22 | Frågans timer på 50 % |
| 23 | Frågans timer på 66 % |
| 24 | Frågans timer på 75 % |
| 30 | Bilaga visas |
| 31 | Bilaga döljs |
| 40 | Före frågans resultat |
| 41 | Frågans resultat |
| 42 | Rätt svar visas |
| 43 | Fel svar visas |
| 44 | Frågans resultat: stopp |
| 45 | Alla svarade rätt |
| 46 | Ingen svarade rätt |
| 47 | Bara ett rätt svar |
| 50 | Rundans resultat |
| 51 | Rundans resultat: stopp |
| 52 | Blixtrundans resultat |
| 53 | Blixtrundans resultat: stopp |
| 60 | Paus |
| 61 | Paus: stopp |
| 70 | Slutresultat |
| 71 | Slutresultat: en placering avslöjas |
| 72 | Slutresultat: vinnaren avslöjas |
| 73 | Slutresultat: stopp |

### Ljus per fråga

Du kan ge varje fråga sin egen ljusstämning. Öppna frågans inställningar i quizredigeraren och lägg till **Belysning** (under *Presentation*). När frågans timer startar skickar styrningen noten för den stämningen. Frågor utan ljusstämning skickar noten för *Standard*, så att ljuset kan återgå till sitt normala läge.

| Not | Belysning |
|---|---|
| 100 | Standard |
| 101 | Nedräkning |
| 102 | Discofest |
| 103 | Krigszon |
| 104 | Röd varning |
| 105 | Stjärnnatt |
| 106 | Fängelseflykt |
| 107 | Farligt gods |
| 108 | Mysig rosa |
| 109 | Atlantis |
| 110 | Djungel |
| 111 | Blått hav |
| 112 | Gult hav |
| 113 | Grönt hav |
| 114 | Lila hav |
| 115 | Orange hav |
| 116 | Rött hav |
| 117 | Röd mot blå |

Namnen är förslag: vad varje not gör bestämmer du och din ljussättning.

---

## 🛠️ Fler regiverktyg

[**regie.catlab.eu**](https://regie.catlab.eu) har fler verktyg för stora evenemang. Alla använder regikoden.

- **Teleprompter** - en andra quizmasterskärm med automatisk rullning och spegling
- **Regissörsskärm** - skicka meddelanden till programledare på en eller flera scenmonitorer
- **OBS-styrning** - byt OBS-scener automatiskt under spelet (se [livestreamquiz](040-livestreaming.md))
- **Nedräkningstimer** - visa QuizWitz-timers på en separat skärm
- **Duplicerad skärm** - visa en kopia av spelskärmen på en annan monitor

---

## ✅ Exempel på uppsättning

- **Spelskärmens dator** - ansluten till projektorn eller LED-väggen och till PA:t, med en nätverkskabel
- **Regidator** - MIDI-styrningen i Chrome, ansluten till ditt ljussystem, med en nätverkskabel
- **Surfplatta eller telefon** - Quizmaster-appen
- **Bärbar dator eller surfplatta** - juryappen, för att justera poäng och styra spelet

> 💡 Gör en fullständig genomkörning i lokalen före evenemanget, så att du kan testa dina ljuscues, ljudnivåer och nätverket.

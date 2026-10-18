---
id: large-venues
title: Store lokaler, lys og lyd
---

# 🏟️ Store lokaler, lys og lyd

QuizWitz Live skalerer fra en pubquiz til store lokaler med hundrevis av spillere. Denne veiledningen tar for seg hva som endrer seg når du flytter til en større scene: nettverket, lyden og synkroniseringen av lyset (eller annet sceneutstyr) med spillet.

> 🧭 Hvis du er ny i QuizWitz Live, begynner du med [**oppstartsveiledningen for quizmastere**](../quizmaster/002-startup.md).

---

## 🌐 En stabil internettforbindelse

Hver del av et live-spill snakker med de andre gjennom serverne våre i sanntid: spillskjermen, Quizmaster-appen, juryappen, regiverktøyene og enheten til hver spiller. En stabil internettforbindelse er det viktigste kravet for et stort arrangement.

- Koble spillskjermdatamaskinen og eventuelle regidatamaskiner til med en **nettverkskabel**. Ikke stol på lokalets wifi eller et mobilt tilgangspunkt for disse.
- Sørg for at spillerne har god wifi- eller mobildekning (4G/5G) i hele salen. En full sal kan overbelaste et lite wifi-nettverk.
- Klikk på **Last inn quiz** i god tid før start. QuizWitz forhåndslaster alle bilder, lyd og video, slik at vedleggene spilles av uten hakking når quizen er i gang.

---

## 🔊 Lyd: alt spilles av gjennom spillskjermen

All lyd spilles av gjennom spillskjermen: musikken og lydeffektene i QuizWitz, og alle lyd- og videovedlegg du legger til spørsmålene, rundene eller quizen (musikk på tilkoblingsskjermen, avslutningsmusikk for runden og så videre). Alt er timet med det som skjer på skjermen.

Du trenger altså bare å koble **lydutgangen på spillskjermdatamaskinen** til miksebordet eller PA-anlegget. Det finnes ingen separate lydcuer som må startes for hånd.

- Bruk volumglidebryteren i kontrollinjen i spillet til å stille inn nivået, eller til å dempe alle quizlydene.
- For å spille bare din egen opplastede lyd legger du til `music=0` i spillenken (se [avanserte parametere](../advanced/020-advanced-parameters.md)). `connectMusic=0` slår bare av musikken på tilkoblingsskjermen.

---

## 💡 Lys: MIDI-kontrolleren

MIDI-kontrolleren på [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) gjør hendelser i spillet om til MIDI-noter. Koble disse notene til cuer i lysprogramvaren eller lysbordet ditt, så følger lyset spillet automatisk.

Vi bruker den med [QLC+](https://www.qlcplus.org/) (gratis lysprogramvare som styrer DMX-lamper), men den sender vanlig MIDI, så den fungerer med de fleste lysbord og lysprogrammer som tar imot MIDI-signaler, og også med lydmiksere, videomiksere og annet sceneutstyr.

### Koble til

1. Start QuizWitz Live-spillet ditt. Quizmaster-appen viser **regikoden** ved siden av quizmasterkoden og jurykoden.
2. På datamaskinen som er koblet til lysanlegget, åpner du [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) i **Google Chrome**. Kontrolleren bruker Web MIDI, som andre nettlesere kanskje ikke støtter.
3. Tillat MIDI-tilgang når Chrome spør om det.
4. Skriv inn regikoden og klikk på **Connect**.
5. Velg MIDI-enheten under **Output** og kanalen (kanal 1 som standard).

Hvis lysprogramvaren kjører på samme datamaskin, bruker du en virtuell MIDI-port: **IAC Driver** på macOS, eller et verktøy som **loopMIDI** på Windows.

> ⚠️ La fanen med kontrolleren være åpen gjennom hele spillet. Hvis du lukker den, stopper MIDI-notene.

### Slik fungerer det

Hver hendelse i spillet har sitt eget faste MIDI-notenummer. Når hendelsen skjer, spiller kontrolleren den noten på utgangskanalen. Notenummeret står på hver knapp i kontrolleren.

- **Trykk på en knapp** for å sende noten for hånd. Bruk dette til å sette opp og teste koblingene før showet.
- En knapp blir **rød** et øyeblikk når spillet utløser den.
- De fleste hendelser sendes bare én gang på rad: hvis samme hendelse skjer to ganger på rad, hoppes den andre over. Riktig svar og feil svar sendes hver gang, slik at du kan blinke med lyset for hvert svar som avsløres.
- **Feedback** (valgfritt): velg en MIDI-inngang og en kanal (kanal 2 som standard). Noter som lysprogramvaren sender tilbake, lyser opp de tilsvarende knappene i grønt, slik at du ser hvilke cuer som er aktive.

### MIDI-noter

| Note | Hendelse |
|---|---|
| 1 | Spillintro |
| 2 | Spillintro: stopp |
| 3 | Rundeintro |
| 4 | Rundeintro: stopp |
| 5 | Intro til lynrunde |
| 6 | Intro til lynrunde: stopp |
| 10 | Spørsmålet starter |
| 11 | Spørsmålet pågår |
| 12 | Tidtakeren for spørsmålet starter |
| 13 | Tidtakeren for spørsmålet stopper |
| 14 | Spørsmålet er ferdig |
| 20 | Tidtakeren for spørsmålet på 25 % |
| 21 | Tidtakeren for spørsmålet på 33 % |
| 22 | Tidtakeren for spørsmålet på 50 % |
| 23 | Tidtakeren for spørsmålet på 66 % |
| 24 | Tidtakeren for spørsmålet på 75 % |
| 30 | Vedlegg vises |
| 31 | Vedlegg skjules |
| 40 | Før spørsmålsresultatet |
| 41 | Spørsmålsresultat |
| 42 | Riktig svar avsløres |
| 43 | Feil svar avsløres |
| 44 | Spørsmålsresultat: stopp |
| 45 | Alle svarte riktig |
| 46 | Ingen svarte riktig |
| 47 | Bare ett riktig svar |
| 50 | Runderesultat |
| 51 | Runderesultat: stopp |
| 52 | Resultat av lynrunde |
| 53 | Resultat av lynrunde: stopp |
| 60 | Pause |
| 61 | Pause: stopp |
| 70 | Sluttresultat |
| 71 | Sluttresultat: en plassering avsløres |
| 72 | Sluttresultat: vinneren avsløres |
| 73 | Sluttresultat: stopp |

### Lys per spørsmål

Du kan gi hvert spørsmål sin egen lysstemning. I quizeditoren åpner du innstillingene for spørsmålet og legger til **Belysning** (under *Presentasjon*). Når tidtakeren for spørsmålet starter, sender kontrolleren noten for den stemningen. Spørsmål uten lysstemning sender noten for *Standard*, slik at lyset kan gå tilbake til normaltilstanden.

| Note | Belysning |
|---|---|
| 100 | Standard |
| 101 | Nedtelling |
| 102 | Diskofest |
| 103 | Krigssone |
| 104 | Rødt varsel |
| 105 | Stjerneklar natt |
| 106 | Fengselsflukt |
| 107 | Farlige stoffer |
| 108 | Koselig rosa |
| 109 | Atlantis |
| 110 | Jungel |
| 111 | Blått hav |
| 112 | Gult hav |
| 113 | Grønt hav |
| 114 | Lilla hav |
| 115 | Oransje hav |
| 116 | Rødt hav |
| 117 | Rød mot blå |

Navnene er forslag: hva hver note gjør, bestemmer du og lysoppsettet ditt.

---

## 🛠️ Flere regiverktøy

[**regie.catlab.eu**](https://regie.catlab.eu) har flere verktøy for store arrangementer. Alle bruker regikoden.

- **Teleprompter** - en ekstra quizmasterskjerm med automatisk rulling og speilvending
- **Regiskjerm** - send meldinger til de som står på scenen, på én eller flere scenemonitorer
- **OBS-kontroller** - bytt OBS-scener automatisk under spillet (se [livestrømquiz](040-livestreaming.md))
- **Nedtellingstidtaker** - vis tidtakerne i QuizWitz på en egen skjerm
- **Duplisert skjerm** - vis en kopi av spillskjermen på en annen monitor

---

## ✅ Eksempel på oppsett

- **Spillskjermdatamaskin** - koblet til projektoren eller LED-veggen og til PA-anlegget, med nettverkskabel
- **Regidatamaskin** - MIDI-kontrolleren i Chrome, koblet til lysanlegget, med nettverkskabel
- **Nettbrett eller telefon** - Quizmaster-appen
- **Bærbar PC eller nettbrett** - juryappen, for å justere poengsummer og styre spillet

> 💡 Ta en full gjennomkjøring i lokalet før arrangementet, slik at du kan teste lyscuene, lydnivåene og nettverket.

---
id: round-options
title: Rundealternativer
---

# 🔄 Rundealternativer

Hver runde har en bestemt **type**. Standard er **Trivia**, men vi oppfordrer deg til å teste og eksperimentere med alle tilgjengelige typer. Denne siden forklarer innstillingene og vedleggene du kan konfigurere per runde.

📘 En detaljert oversikt over alle rundetyper finner du i [dokumentasjonen om rundetyper](../round-types/000-round-types.md).

---

## 🔧 Konfigurere en runde

For å konfigurere alternativene for en runde klikker du på tannhjulikonet i rundepanelet:

| ![Åpne rundealternativene](/images/open-round-options.png) | ![Rundealternativer](/images/round-options.png) |
| :--------------------------------------------------------: | :---------------------------------------------: |
|             _Slik åpner du rundealternativene_             |         _Panelet for rundekonfigurasjon_        |

---

## ⚙️ Generelle rundealternativer

Følgende alternativer er tilgjengelige for de fleste rundetyper:

- **Vis bare _X_ spørsmål** - Begrenser runden til et bestemt antall spørsmål
- **Tilfeldig spørsmålsrekkefølge** - Stokk rekkefølgen på spørsmålene i runden
- **Vis rundeintro** - Vis en animert tittel før runden begynner
- **Vis rundeavslutning (mellomstilling)** - Vis rangeringen på slutten av runden
- **Samle all tilbakemelding på én skjerm** - Samle tilbakemeldingen på spørsmålene i én blokk etter at runden er slutt
- **Vis all tilbakemelding på spørsmålene på slutten av runden** - Utsett tilbakemeldingen på spørsmålene til runden er slutt
- **Tving tilbakemelding etter hvert enkelt spørsmål** - Sørg for umiddelbar tilbakemelding
  > ⚠️ Dette har bare virkning i runde- og spørsmålstyper der tilbakemeldingen ellers ville blitt utsatt, for eksempel åpne spørsmål eller lynrunder.

📘 Se [spørsmålstyper](../question-types/000-question-types.md) for mer informasjon om timing og oppførsel for tilbakemelding.

---

## 🏆 Alternativer for poengberegning {#scoring}

QuizWitz har fleksibel poengberegning som holder det rettferdig og engasjerende for alle spillere.

- **Tidsbasert poengberegning** - Spillerne får flere poeng for raskere svar.
  - For de fleste spørsmålstyper synker de tidsbaserte poengene **kontinuerlig per mikrosekund**: jo raskere du svarer, desto flere poeng får du.
  - For **åpne spørsmål** deles de tidsbaserte poengene inn i blokker. For eksempel: svar i den første blokken (f.eks. de første sekundene) gir **100 %** av den tidsbaserte delen, neste blokk gir **80 %**, og så videre. Dette gjør det mer rettferdig for dem som skriver saktere.

- **Fast prosentandel av poengene ved tidsbasert poengberegning** - Du styrer hvor mye av den totale poengsummen som påvirkes av fart.
  - Som standard er **75 %** av poengene faste (alle som svarer riktig, får disse poengene, uansett hvor raskt de svarer).
  - Bare de resterende **25 %** påvirkes av hvor raskt spillerne svarer.

> 💡 Ved å justere denne innstillingen kan du gjøre rundene mer kunnskapsbaserte eller mer fartsbaserte, avhengig av quizstilen din.

Disse alternativene for poengberegning finner du i panelet for rundealternativer når du redigerer en runde.

---

## 📜 Instruksjoner for quizmasteren

Du kan legge til en egen **introduksjonstekst for runden** som bare vises i [Quizmaster-appen](../quizmaster/001-introduction.md) ved starten av runden. Bruk dette til å orientere quizmasteren eller gi det et personlig preg.

---

## 📎 Vedlegg

Gjør runden din rikere med medier som vises i bestemte øyeblikk:

- **Før runden** - Vises etter animasjonen for rundeintroen
- **Etter runden** - Vises etter rundeavslutningen
- **Før rundeavslutningen** - Vises etter det siste spørsmålet, rett før avslutningen
- **Under rundeavslutningen** - _(bare lyd)_ Spilles av mens rangeringen vises
- ...

📘 Støttede filtyper og tips om bruk finner du i [veiledningen for vedlegg](../editor/006-attachments.md).

---
id: open-question
title: Åpent spørsmål
---

# 💬 Åpent spørsmål

Et åpent spørsmål lar spillerne skrive svaret sitt fritt med tastaturet. Denne typen passer perfekt til spørsmål der du vil ha skriftlige svar - for eksempel navn, tall eller korte forklaringer.

---

![Eksempel: åpent spørsmål om musikk](/images/question-modes/open-question/open-question.png)

---

## 📝 Slik fungerer det

- **Spørsmål:** Be om et bestemt svar i et fritekstfelt (eksempel: «Hvilken duo fremfører denne sangen?»).
- **Svar:** Spillerne skriver inn svaret sitt. Du kan legge inn flere godkjente svar for automatisk validering.
- **Vedlegg:** Legg til lyd, bilder eller video som hint (for eksempel et musikkutdrag).
- **Tilbakemelding:** Etter at de har svart, ser spillerne om svaret ble godkjent som riktig eller ikke. Du kan også legge inn ekstra tilbakemelding eller forklaringer.

---

## ⚙️ Utvidede innstillinger

Åpne spørsmål har en rekke innstillinger som kan tilpasses quizen din:

- **Flere godkjente svar:** Legg til alternative stavemåter, forkortelser eller synonymer for mer fleksibel automatisk retting.
- **Tidsbasert poengberegning:** Belønn raske svar (se «Poenggivning» nedenfor).
- **Tving automatisk retting:** Slå på dette for å la spillet automatisk godkjenne riktige svar ut fra listen du har lagt inn.
  - Hvis dette ikke er slått på (standard for de fleste Live-spill), må åpne svar vurderes og poengsettes manuelt med [juryappen](../quizmaster/004-jury-app.md).

Les mer om disse alternativene under [skrive spørsmål](../editor/005-writing-questions.md).

---

## 🏆 Poenggivning for åpne spørsmål

Poenggivningen for åpne spørsmål er laget for å være rettferdig, også for dem som skriver sakte:

- **Tidsbasert poengberegning** deler de tilgjengelige poengene inn i blokker, i stedet for en streng nedtelling per millisekund.
- For eksempel gir et svar i den første blokken (f.eks. de første 5 sekundene) full poengsum, neste blokk gir 80 %, og så videre. Dette gjør straffen mindre for dem som skriver sakte.
- Som standard avhenger bare **25 %** av poengene av hastighet - de resterende **75 %** er faste, så alle som svarer riktig får mesteparten av poengene, uansett hvor raskt de skriver.

> ⚙️ **Tips:** Du kan justere poenggivningen og andre innstillinger ytterligere i [rundealternativene](../editor/008-round-options.md).

---

## 🧑‍⚖️ Juryvurdering i QuizWitz Live

I **QuizWitz Live** krever åpne spørsmål vanligvis en manuell vurdering med [juryappen](../quizmaster/004-jury-app.md):

- Med juryappen kan jurymedlemmene godta, avvise eller justere poengene for åpne svar.
- Fonetisk og alternativ matching hjelper, men menneskelig skjønn er avgjørende for rettferdig poenggivning og kreativitet.
- Fullstendige instruksjoner og funksjoner finner du i [dokumentasjonen for juryappen](../quizmaster/004-jury-app.md).

---

## 💡 Tips for gode åpne spørsmål

- **Vær presis:** Si nøyaktig hva du vil at spillerne skal svare.
- **Forutse variasjoner:** Legg til vanlige forkortelser, alternative stavemåter eller synonymer blant de godkjente svarene.
- **Bruk vedlegg:** Legg til lyd, bilder eller video for å gjøre spørsmålet tydeligere eller mer engasjerende.
- **Samarbeid med juryen:** Sørg for at juryen vet hva som skal godtas ved subjektive eller vanskelige svar.

---

Les mer om vedlegg og tilbakemelding i [dokumentasjonen om vedlegg](../editor/006-attachments.md).

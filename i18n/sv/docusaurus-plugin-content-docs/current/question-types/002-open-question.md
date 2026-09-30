---
id: open-question
title: Öppen fråga
---

# 💬 Öppen fråga

En öppen fråga låter spelarna skriva sitt svar fritt med tangentbordet. Den här typen passar perfekt för frågor där du vill ha skrivna svar - till exempel namn, siffror eller korta förklaringar.

---

![Exempel: öppen fråga om musik](/images/question-modes/open-question/open-question.png)

---

## 📝 Så fungerar det

- **Fråga:** Be om ett specifikt svar i ett fritt textfält (exempel: ”Vilken duo framför den här låten?”).
- **Svar:** Spelarna skriver in sitt svar. Du kan ange flera godkända svar för automatisk validering.
- **Bilagor:** Lägg till ljud, bilder eller video som ledtråd (till exempel ett musikklipp).
- **Feedback:** Efter att ha svarat ser spelarna om deras svar bedömdes som rätt eller inte. Du kan också ge extra feedback eller förklaringar.

---

## ⚙️ Utökade inställningar

Öppna frågor har en rad inställningar som kan anpassas efter ditt quiz:

- **Flera godkända svar:** Lägg till alternativa stavningar, förkortningar eller synonymer för en mer flexibel automatisk rättning.
- **Tidsbaserad poängsättning:** Belöna snabbare svar (se ”Poängsättning” nedan).
- **Tvinga automatisk rättning:** Aktivera detta för att låta spelet automatiskt markera rätta svar utifrån listan du har angett.
  - Om det inte är aktiverat (standard för de flesta livespel) måste öppna svar granskas och poängsättas manuellt med [juryappen](../quizmaster/004-jury-app.md).

Mer om dessa alternativ finns i [skriva frågor](../editor/005-writing-questions.md).

---

## 🏆 Poängsättning för öppna frågor

Poängsättningen för öppna frågor är utformad för att vara rättvis, även för den som skriver långsamt:

- **Tidsbaserad poängsättning** delar in de tillgängliga poängen i block, i stället för en strikt nedräkning per millisekund.
- Om du till exempel svarar i det första blocket (t.ex. de första 5 sekunderna) får du full poäng; nästa block ger 80 %, och så vidare. Det minskar nackdelen för den som skriver långsamt.
- Som standard beror bara **25 %** av poängen på snabbheten - de återstående **75 %** är fasta, så alla som svarar rätt får merparten av poängen, oavsett hur snabbt de skriver.

> ⚙️ **Tips:** Du kan justera poängsättningen och andra inställningar ytterligare i [rundinställningarna](../editor/008-round-options.md).

---

## 🧑‍⚖️ Juryns granskning i QuizWitz Live

I **QuizWitz Live** kräver öppna frågor i regel en manuell granskning med [juryappen](../quizmaster/004-jury-app.md):

- Med juryappen kan jurymedlemmarna godkänna, underkänna eller justera poängen för öppna svar.
- Fonetisk och alternativ matchning hjälper, men mänskligt omdöme är avgörande för en rättvis poängsättning och för att belöna kreativitet.
- Fullständiga instruktioner och funktioner finns i [dokumentationen om juryappen](../quizmaster/004-jury-app.md).

---

## 💡 Tips för bra öppna frågor

- **Var specifik:** Tala om exakt vad du vill att spelarna ska svara.
- **Förutse varianter:** Lägg till vanliga förkortningar, alternativa stavningar eller synonymer bland de godkända svaren.
- **Använd bilagor:** Lägg till ljud, bilder eller video för att göra frågan tydligare eller mer engagerande.
- **Samordna med juryn:** Se till att juryn vet vad som ska godkännas vid subjektiva eller knepiga svar.

---

Mer om bilagor och feedback finns i [dokumentationen om bilagor](../editor/006-attachments.md).

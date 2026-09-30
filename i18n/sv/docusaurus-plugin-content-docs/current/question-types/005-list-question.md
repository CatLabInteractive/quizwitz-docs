---
id: list-question
title: Listfråga
---

# 📝 Listfråga

En **listfråga** ber spelarna att ge flera rätta svar ur en större lista - perfekt för uppmaningar som ”Räkna upp USA:s fem första presidenter” eller ”Nämn tre grundämnen i periodiska systemet.”

---

![Exempel: listfråga om amerikanska presidenter](/images/question-modes/list-question/list-question.png)

---

## 📝 Så fungerar det

- **Fråga:** Ange tydligt vad du vill att spelarna ska räkna upp.
- **Listobjekt:** Ange alla möjliga rätta svar.
  - Markera några som **’Given’** för att visa dem som exempel på skärmen; de behöver INTE besvaras.
  - Ordningen spelar **ingen** roll - spelarna kan ange de rätta svaren i valfri ordning.
- **Spelarens inmatning:** Spelarna måste ge ett bestämt antal svar (t.ex. mellan 1 och 5). Poäng ges för varje rätt svar som de skickar in.
- **Bilagor:** Lägg till bilder, ljud eller video för sammanhang. Fyll i källhänvisning om du publicerar.

---

## ⚙️ Utökade inställningar

- **Minsta och största antal svar:** Ange hur många svar en spelare måste ge.
- **Poäng per svar:** Poäng kan ges för varje rätt svar, eller bara när minimiantalet har uppnåtts.
- **Givna alternativ:** Används som exempel i frågan.
- **Rättning:**
  - **Tvinga automatisk rättning:** När detta är aktiverat kontrollerar QuizWitz automatiskt alla svar (och godtar små stavfel och varianter). Ingen jury behövs.
  - **Manuell granskning:** När det inte är aktiverat måste varje inskickat svar granskas i [juryappen](../quizmaster/004-jury-app.md).

---

## 🏆 Poängsättning

- **Poäng per rätt svar:** Spelarna får poäng för varje rätt svar.
- **Tidsbaserad poängsättning** (om aktiverad):  
  Följer **reglerna för öppna frågor** för att vara rättvis:
  - De tillgängliga poängen delas in i tidsblock (inte per millisekund).  
    Till exempel: full poäng i det första blocket, 80 % i nästa, och så vidare.
  - **Bara 25 %** av poängen beror på snabbheten.  
    Övriga **75 %** är fasta - så även de som skriver långsamt får merparten av poängen om de svarar rätt.
  - Det minskar nackdelen för den som skriver långsamt och gör poängsättningen rättvisare för alla.

Mer information finns i [poängalternativ för rundor](../editor/008-round-options.md#scoring).

---

## 💡 Tips för listfrågor

- **Var specifik:** Definiera tydligt vilka svar som är giltiga.
- **Visa exempel:** Använd funktionen ’Givet’.
- **Lista varianter:** Ta med vanliga stavningar och varianter.
- **Minska juryns arbete:** Använd automatisk rättning om det går.

---

Mer information finns i [dokumentationen om juryappen](../quizmaster/004-jury-app.md).

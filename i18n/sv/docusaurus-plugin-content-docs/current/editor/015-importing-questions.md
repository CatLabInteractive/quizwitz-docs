---
id: import-questions
title: Importera frågor
---

# 📥 Importera frågor

Det finns två sätt att snabbt lägga till frågor i en runda i QuizWitz:

- Importera befintligt innehåll från **QuizWitz-biblioteket**
- Klistra in en lista med frågor från ett **kalkylark**

Båda alternativen finns i alla rundor.

---

## 📚 Importera från QuizWitz-biblioteket

Använd fliken **QuizWitz-biblioteket** för att söka efter och importera frågor, rundor eller quiz som du själv eller andra skapare har gjort.

1. Öppna rundan där du vill importera innehåll
2. Klicka på fliken **QuizWitz-biblioteket**
3. Använd filter som språk, samling, typ, kategori eller taggar
4. Välj ett eller flera objekt
5. Klicka på **Lägg till X objekt** för att infoga det valda innehållet i ditt quiz

![QuizWitz-biblioteket](/images/import/import-from-quizwitz.png)

> ✅ Använd den här metoden för att återanvända innehåll av hög kvalitet eller kombinera flera offentliga Round-Abouts till ett större quiz.

---

## 📋 Importera från ett kalkylark

Använd fliken **Importera från kalkylblad** för att snabbt skapa många frågor på en gång.

1. Öppna en runda
2. Klicka på fliken **Importera från kalkylblad**
3. Klistra in rader med **tabbseparerade** värden (kopierade från Excel, Google Kalkylark osv.)
4. Klicka på **Importera frågor**

![Importera från kalkylark](/images/import/import-from-spreadsheet.png)

---

### 🗂️ Format för inklistring

Varje rad måste innehålla följande kolumner i exakt den här ordningen:

1. **Kort fråga** - Visas på spelarskärmen
2. **Rätt svar**
3. **Fel svar 1** (lämna tomt för öppna frågor)
4. **Fel svar 2**
5. **Fel svar 3**
6. **Kort feedback** - Visas på spelarskärmen efter att spelaren har svarat
7. **Lång fråga** _(valfritt)_ - Visas på quizmasterns skärm
8. **Lång feedback** _(valfritt)_ - Förklaring som quizmastern läser upp

> 📌 De två sista kolumnerna används bara i [QuizWitz Live](../quizmaster/001-introduction.md), men de måste ändå finnas med (även om de lämnas tomma).

---

## ✅ Efter importen

Oavsett om du importerar från biblioteket eller från ett kalkylark:

- Granska formatering och tydlighet i dina frågor
- Uppdatera eventuell metadata som kategori, rundtyp eller bilagor
- Glöm inte att **spara ditt quiz**

📘 Vill du förbättra dina frågor ytterligare? Fortsätt i [guiden Skriva frågor](../editor/005-writing-questions.md).

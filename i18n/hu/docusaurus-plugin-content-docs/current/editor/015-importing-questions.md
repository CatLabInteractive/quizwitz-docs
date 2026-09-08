---
id: import-questions
title: Kérdések importálása
---

# 📥 Kérdések importálása

Két módon adhatsz gyorsan kérdéseket egy fordulóhoz a QuizWitzben:

- Importálj meglévő tartalmat a **QuizWitz Library** könyvtárból
- Illessz be egy kérdéslistát egy **táblázatból**

Mindkét lehetőség bármelyik fordulón belül elérhető.

---

## 📚 Importálás a QuizWitz Library könyvtárból

A **QuizWitz Library** lapon kereshetsz és importálhatsz olyan kérdéseket, fordulókat vagy kvízeket, amelyeket te vagy más készítők hoztak létre.

1. Nyisd meg azt a fordulót, ahová tartalmat szeretnél importálni
2. Kattints a **QuizWitz Library** lapra
3. Használj szűrőket, például nyelv, gyűjtemény, típus, kategória vagy címkék szerint
4. Válassz ki egy vagy több bejegyzést
5. Kattints az **X elem hozzáadása** gombra, hogy a kiválasztott tartalmat beilleszd a kvízedbe

![QuizWitz könyvtár](/images/import/import-from-quizwitz.png)

> ✅ Ezzel a módszerrel újrahasznosíthatsz kiváló minőségű tartalmakat, vagy több nyilvános Round-Abouts anyagot kombinálhatsz egy nagyobb kvízzé.

---

## 📋 Importálás táblázatból

Ha gyorsan sok kérdést szeretnél egyszerre létrehozni, használd az **Importálás táblázatból** lapot.

1. Nyiss meg egy fordulót
2. Kattints az **Importálás táblázatból** lapra
3. Illessz be **tabulátorral elválasztott** értékeket tartalmazó sorokat (Excelből, Google Sheetsből stb. másolva)
4. Kattints a **Kérdések importálása** gombra

![Importálás táblázatból](/images/import/import-from-spreadsheet.png)

---

### 🗂️ Beillesztési formátum

Minden sornak a következő oszlopokat kell tartalmaznia pontosan ebben a sorrendben:

1. **Short question** - Displayed on the player screen
2. **Helyes válasz**
3. **Hibás válasz 1** (hagyd üresen nyitott kérdésekhez)
4. **Hibás válasz 2**
5. **Hibás válasz 3**
6. **Short feedback** - Displayed on the player screen after answering
7. **Long question** _(optional)_ - Displayed on the quizmaster screen
8. **Long feedback** _(optional)_ - Explanation for the quizmaster to read aloud

> 📌 Az utolsó két oszlopot csak a [QuizWitz Live](../quizmaster/001-introduction.md) használja, de akkor is szerepelniük kell (még akkor is, ha üresen hagyod őket).

---

## ✅ Importálás után

Akár a könyvtárból, akár táblázatból importálsz:

- Nézd át a kérdéseidet formázás és érthetőség szempontjából
- Frissítsd az olyan metaadatokat, mint a kategória, a fordulótípus vagy a mellékletek
- Ne felejtsd el **elmenteni a kvízedet**

📘 Szeretnéd még tovább fejleszteni a kérdéseidet? Folytasd a [Kérdések írása útmutatóban](../editor/005-writing-questions.md).

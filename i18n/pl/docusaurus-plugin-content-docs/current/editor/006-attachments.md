---
id: attachments
title: Załączniki
---

# 📎 Załączniki

Załączniki można dodawać w różnych slotach w całym quizie, aby wzbogacić go o obrazy, dźwięk lub filmy.

Sloty te występują w następujących częściach quizu:

- [Pytania](../editor/005-writing-questions.md)
- [Rundy](../editor/008-round-options.md)
- [Quizy](../editor/007-quiz-options.md)

Na każdej stronie wyjaśniono, kiedy te załączniki są wyświetlane podczas gry.

![Załączniki pytania](/images/edit-question.png)

---

## 🗂️ Obsługiwane typy plików

Oto ogólna (niepełna) lista zgodnych formatów:

- **Obrazy** - `.png`, `.jpeg`, `.gif` (bez animacji). Zalecana rozdzielczość Full HD (1920×1080)
- **Audio** - Obsługiwana jest większość standardowych formatów
- **Wideo** - Obsługiwana jest większość standardowych formatów

> 🔊 ⏱️ Załączniki audio i wideo powinny trwać **nie dłużej niż 15 minut**.

---

## 📝 Nazwa i źródło

Każdy załącznik może mieć nazwę i opcjonalne źródło:

- **Nazwa** - Wyświetlana quizmasterowi w [QuizWitz Live (PRO)](../quizmaster/001-introduction.md); pomaga porządkować załączniki
- **Źródło** - Wyświetlane graczom jako informacja o autorze lub źródle. Powinna to być **nazwa właściciela praw**.

> ⚠️ Aby **opublikować** Round-About lub quiz, **wszystkie załączniki muszą mieć wypełnione prawidłowe źródło**. Without this, it cannot be made public.

---

## 📱 Show on player devices

Images shown between screens - before or after a question, before or after its feedback, and before or after a round - can also be shown on the **players' devices**, not only on the game screen. Tick **Show on player devices** on the attachment to do so.

> ℹ️ This applies to images only. An image in the **During question** slot is never mirrored: players see it on the game screen. To make that image fill the game screen instead, use the question's **Custom view** (see [writing questions](../editor/005-writing-questions.md)).

---

## ✨ Efekty załączników

Niektóre sloty załączników obsługują **efekty**, które stopniowo odsłaniają obraz:

- **Brak** - Plik jest wyświetlany bez zmian
- **Efekt reflektora** - Stopniowo odsłania fragmenty obrazu za pomocą ruchomego reflektora, który z czasem się powiększa

Jest to szczególnie skuteczne w łamigłówkach lub przy powolnym odsłanianiu podczas intro albo w dramatycznych momentach.

---

## 📚 Wiele załączników w jednym slocie

Niektóre sloty pozwalają dodać **wiele załączników**. Ich zachowanie zależy od trybu gry:

> ⚡ **W [QuizWitz Live (PRO)](../quizmaster/001-introduction.md):** quizmaster ma pełną kontrolę i może decydować, kiedy pokazać lub ukryć załączniki podczas gry.  
> 🎮 **W grach bez quizmastera (Gra imprezowa, tryb konferencyjny, Gra jednoosobowa):** wszystkie załączniki w slocie są wyświetlane **jednocześnie**.

Szczegóły dotyczące czasu wyświetlania i zachowania każdego slotu znajdziesz w dokumentacji dla [pytań](../editor/015-importing-questions.md), [rund](../editor/008-round-options.md) i [quizów](../editor/007-quiz-options.md).

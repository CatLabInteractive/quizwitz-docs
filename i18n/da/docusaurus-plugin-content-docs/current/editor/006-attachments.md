---
id: attachments
title: Vedhæftninger
---

# 📎 Vedhæftninger

Vedhæftninger kan tilføjes i forskellige felter i hele din quiz for at berige oplevelsen med billeder, lyd eller video.

Felterne findes i følgende dele af din quiz:

- [Spørgsmål](../editor/005-writing-questions.md)
- [Runder](../editor/008-round-options.md)
- [Quizzer](../editor/007-quiz-options.md)

På hver side forklares det, hvornår vedhæftningerne vises under spillet.

![Vedhæftninger til spørgsmål](/images/edit-question.png)

---

## 🗂️ Understøttede filtyper

Her er en generel (ikke udtømmende) liste over kompatible formater:

- **Billeder** - `.png`, `.jpeg`, `.gif` (ikke animeret). Full HD (1920×1080) anbefales
- **Lyd** - De fleste almindelige formater understøttes
- **Video** - De fleste almindelige formater understøttes

> 🔊 ⏱️ Lyd- og videovedhæftninger må **højst vare 15 minutter**.

---

## 📝 Navn og kildeangivelse

Hver vedhæftning kan have et navn og en valgfri kildeangivelse:

- **Navn** - Vises for quizmasteren i [QuizWitz Live (PRO)](../quizmaster/001-introduction.md); hjælper med at holde styr på vedhæftninger
- **Kildeangivelse** - Vises for spillerne som kreditering eller kildeoplysning. Det skal være **navnet på rettighedshaveren**.

> ⚠️ For at kunne **udgive** en Round-About eller en quiz skal **alle vedhæftninger have en gyldig kildeangivelse** udfyldt. Without this, it cannot be made public.

---

## 📱 Show on player devices

Images shown between screens - before or after a question, before or after its feedback, and before or after a round - can also be shown on the **players' devices**, not only on the game screen. Tick **Show on player devices** on the attachment to do so.

> ℹ️ This applies to images only. An image in the **During question** slot is never mirrored: players see it on the game screen. To make that image fill the game screen instead, use the question's **Custom view** (see [writing questions](../editor/005-writing-questions.md)).

---

## ✨ Effekter på vedhæftninger

Nogle vedhæftningsfelter understøtter **effekter**, der afslører billedet mere gradvist:

- **Ingen** - Filen vises, som den er
- **Spotlighteffekt** - Afslører gradvist dele af billedet med et spotlys i bevægelse, der udvider sig undervejs

Det er især effektivt til gåder eller langsomme afsløringer under introer eller dramatiske øjeblikke.

---

## 📚 Flere vedhæftninger pr. felt

I nogle felter kan du tilføje **flere vedhæftninger**. Hvordan de opfører sig, afhænger af spiltilstanden:

> ⚡ **I [QuizWitz Live (PRO)](../quizmaster/001-introduction.md):** Quizmasteren har fuld kontrol og kan bestemme, hvornår vedhæftninger skal vises eller skjules under spillet.  
> 🎮 **I spil uden quizmaster (Partyspil, konferencetilstand, Singleplayer):** Alle vedhæftninger i et felt vises **samtidig**.

Detaljer om timing og opførsel for hvert felt finder du i den tilknyttede dokumentation for [spørgsmål](../editor/015-importing-questions.md), [runder](../editor/008-round-options.md) og [quizzer](../editor/007-quiz-options.md).

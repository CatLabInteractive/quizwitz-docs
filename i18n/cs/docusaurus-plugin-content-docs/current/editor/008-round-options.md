---
id: round-options
title: Možnosti kola
---

# 🔄 Možnosti kola

Každé kolo má konkrétní **typ**. Výchozí typ je **Trivia**, ale doporučujeme ti vyzkoušet a otestovat všechny dostupné typy. Tahle stránka vysvětluje nastavení a přílohy, které si můžeš nakonfigurovat pro každé kolo.

📘 Podrobný přehled všech typů kol najdeš v [dokumentaci typů kol](../round-types/000-round-types.md).

---

## 🔧 Konfigurace kola

Možnosti kola nastavíš kliknutím na ikonu ozubeného kola v panelu kola:

| ![Otevřít možnosti kola](/images/open-round-options.png) | ![Možnosti kola](/images/round-options.png) |
| :------------------------------------------------------: | :-----------------------------------------: |
|                 _Otevření možností kola_                 |           _Panel konfigurace kola_          |

---

## ⚙️ Obecné možnosti kola

Pro většinu typů kol jsou dostupné tyhle možnosti:

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ Tohle se projeví jen u typů kol a otázek, kde by jinak byla zpětná vazba odložená, třeba u otevřených otázek nebo bleskových kol.

📘 Více informací o načasování a chování zpětné vazby najdeš v části [typy otázek](../question-types/000-question-types.md).

---

## 🏆 Možnosti bodování {#scoring}

QuizWitz nabízí flexibilní bodování, aby hra zůstala férová a zábavná pro všechny hráče.

- **Time-based scoring** - Players earn more points for faster answers.
  - U většiny typů otázek se body podle času snižují **plynule po mikrosekundách**: čím rychleji odpovíš, tím víc bodů získáš.
  - U **otevřených otázek** se body podle času dělí do bloků. Například: odpovědi v prvním bloku (např. v prvních několika sekundách) získají **100 %** časové části, další blok získá **80 %** a tak dále. Tohle pomáhá vyrovnat šance hráčům, kteří píšou pomaleji.

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - Ve výchozím nastavení je **75 %** bodů pevných (každý, kdo odpoví správně, tyhle body získá bez ohledu na rychlost).
  - Jen zbývajících **25 %** ovlivňuje to, jak rychle hráči odpoví.

> 💡 Úpravou tohoto nastavení můžeš kola zaměřit víc na znalosti nebo víc na rychlost, podle stylu svého kvízu.

Tyhle možnosti bodování najdeš v panelu možností kola při úpravě kola.

---

## 📜 Pokyny pro quizmaster

Můžete přidat vlastní **kolo úvodu**, které se zobrazí pouze na [Quizmaster App](../quizmaster/001-introduction.md) na začátku kola. Pomocí tohoto nástroje můžete krátit kvíz nebo přidat osobní kontakt.

---

## 📎 Přílohy

Vylepši své kolo médii, která se zobrazí v konkrétních momentech:

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- ...

📘 Podporované typy souborů a tipy k použití najdeš v [průvodci přílohami](../editor/006-attachments.md).

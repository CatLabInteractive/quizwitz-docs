---
id: round-options
title: Možnosti kola
---

# 🔄 Možnosti kola

Každé kolo má konkrétny **typ**. Predvolený typ je **Trivia**, ale odporúčame ti otestovať a vyskúšať všetky dostupné typy. Táto stránka vysvetľuje nastavenia a prílohy, ktoré si môžeš nakonfigurovať pre jednotlivé kolá.

📘 Podrobný prehľad všetkých typov kôl nájdeš v [dokumentácii typov kôl](../round-types/000-round-types.md).

---

## 🔧 Konfigurácia kola

Ak chceš nakonfigurovať možnosti kola, klikni na ikonu ozubeného kolieska v paneli kola:

| ![Otvoriť možnosti kola](/images/open-round-options.png) | ![Možnosti kola](/images/round-options.png) |
| :------------------------------------------------------: | :-----------------------------------------: |
|                 _Otváranie možností kola_                |          _Panel konfigurácie kola_          |

---

## ⚙️ Všeobecné možnosti kola

Nasledujúce možnosti sú dostupné pre väčšinu typov kôl:

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ Toto sa prejaví iba pri typoch kôl a otázok, kde by sa spätná väzba inak odložila, napríklad pri otvorených otázkach alebo bleskových kolách.

📘 Viac informácií o načasovaní a správaní spätnej väzby nájdeš v časti [typy otázok](../question-types/000-question-types.md).

---

## 🏆 Možnosti bodovania {#scoring}

QuizWitz ponúka flexibilné bodovanie, aby všetko zostalo férové a pútavé pre všetkých hráčov.

- **Time-based scoring** - Players earn more points for faster answers.
  - Pri väčšine typov otázok sa body podľa času znižujú **plynulo po mikrosekundách**: čím rýchlejšie odpovieš, tým viac bodov získaš.
  - Pri **otvorených otázkach** sú body podľa času rozdelené do blokov. Napríklad: odpovede v prvom bloku (napr. počas prvých pár sekúnd) získajú **100 %** časovej časti, ďalší blok získa **80 %** a tak ďalej. Pomáha to vyrovnať šance ľuďom, ktorí píšu pomalšie.

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - Predvolene je **75 %** bodov fixných (každý, kto odpovie správne, tieto body získa bez ohľadu na rýchlosť).
  - Iba zvyšných **25 %** ovplyvňuje to, ako rýchlo hráči odpovedajú.

> 💡 Úpravou tohto nastavenia môžeš kolá spraviť viac zamerané na vedomosti alebo na rýchlosť, podľa štýlu tvojho kvízu.

Tieto možnosti bodovania nájdeš v paneli možností kola pri úprave kola.

---

## 📜 Pokyny pre quizmaster

Môžeš pridať vlastný **úvodný text kola**, ktorý sa na začiatku kola zobrazí len v [Quizmaster App](../quizmaster/001-introduction.md). Použi to na inštruktáž quizmastera alebo na osobný podpis.

---

## 📎 Prílohy

Vylepši svoje kolo médiami, ktoré sa zobrazia v konkrétnych momentoch:

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- ...

📘 Podporované typy súborov a tipy na používanie nájdeš v [sprievodcovi prílohami](../editor/006-attachments.md).

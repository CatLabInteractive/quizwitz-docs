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

- **Zobraziť iba _X_ otázok** — Obmedzí kolo na konkrétny počet otázok
- **Náhodné poradie otázok** — Zamieša poradie otázok v rámci kola
- **Zobraziť úvod kola** — Zobrazí animovaný nadpis pred začiatkom kola
- **Zobraziť záver kola (priebežné skóre)** — Odhalí poradie na konci kola
- **Zoskupiť všetku spätnú väzbu na jednej obrazovke** — Zhromaždí spätnú väzbu k otázkam do jedného bloku po skončení kola
- **Zobraziť všetku spätnú väzbu k otázkam na konci kola** — Odloží spätnú väzbu k otázkam až do skončenia kola
- **Vynútiť spätnú väzbu po každej jednotlivej otázke** — Zabezpečí okamžitú spätnú väzbu
  > ⚠️ Toto sa prejaví iba pri typoch kôl a otázok, kde by sa spätná väzba inak odložila, napríklad pri otvorených otázkach alebo bleskových kolách.

📘 Viac informácií o načasovaní a správaní spätnej väzby nájdeš v časti [typy otázok](../question-types/000-question-types.md).

---

## 🏆 Možnosti bodovania {#scoring}

QuizWitz ponúka flexibilné bodovanie, aby všetko zostalo férové a pútavé pre všetkých hráčov.

- **Bodovanie podľa času** — Hráči získajú viac bodov za rýchlejšie odpovede.
  - Pri väčšine typov otázok sa body podľa času znižujú **plynulo po mikrosekundách**: čím rýchlejšie odpovieš, tým viac bodov získaš.
  - Pri **otvorených otázkach** sú body podľa času rozdelené do blokov. Napríklad: odpovede v prvom bloku (napr. počas prvých pár sekúnd) získajú **100 %** časovej časti, ďalší blok získa **80 %** a tak ďalej. Pomáha to vyrovnať šance ľuďom, ktorí píšu pomalšie.

- **Fixné percento bodov pri bodovaní podľa času** — Ovládaš, aká časť celkového skóre je ovplyvnená rýchlosťou.
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

- **Pred kolom** — Zobrazí sa po animácii úvodu kola
- **Po kole** — Zobrazí sa po závere kola
- **Pred záverom kola** — Zobrazí sa po poslednej otázke, tesne pred záverom
- **Počas záveru kola** — _(iba zvuk)_ Prehráva sa počas zobrazenia poradia
- ...

📘 Podporované typy súborov a tipy na používanie nájdeš v [sprievodcovi prílohami](../editor/006-attachments.md).

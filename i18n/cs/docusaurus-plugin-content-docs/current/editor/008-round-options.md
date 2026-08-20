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

- **Zobrazit jen _X_ otázek** — Omezí kolo na konkrétní počet otázek
- **Náhodné pořadí otázek** — Zamíchá pořadí otázek v rámci kola
- **Zobrazit úvod kola** — Před začátkem kola zobrazí animovaný název
- **Zobrazit závěr kola (průběžné skóre)** — Na konci kola odhalí pořadí
- **Seskupit veškerou zpětnou vazbu na jednu obrazovku** — Po skončení kola shromáždí zpětnou vazbu k otázkám do jednoho bloku
- **Zobrazit veškerou zpětnou vazbu k otázkám na konci kola** — Odloží zpětnou vazbu k otázkám až do konce kola
- **Vynutit zpětnou vazbu po každé jednotlivé otázce** — Zajistí okamžitou zpětnou vazbu
  > ⚠️ Tohle se projeví jen u typů kol a otázek, kde by jinak byla zpětná vazba odložená, třeba u otevřených otázek nebo bleskových kol.

📘 Více informací o načasování a chování zpětné vazby najdeš v části [typy otázek](../question-types/000-question-types.md).

---

## 🏆 Možnosti bodování {#scoring}

QuizWitz nabízí flexibilní bodování, aby hra zůstala férová a zábavná pro všechny hráče.

- **Bodování podle času** — Hráči získávají více bodů za rychlejší odpovědi.
  - U většiny typů otázek se body podle času snižují **plynule po mikrosekundách**: čím rychleji odpovíš, tím víc bodů získáš.
  - U **otevřených otázek** se body podle času dělí do bloků. Například: odpovědi v prvním bloku (např. v prvních několika sekundách) získají **100 %** časové části, další blok získá **80 %** a tak dále. Tohle pomáhá vyrovnat šance hráčům, kteří píšou pomaleji.

- **Pevné procento bodů při bodování podle času** — Určuješ, jak velkou část celkového skóre ovlivní rychlost.
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

- **Před kolem** — Zobrazí se po animaci úvodu kola
- **Po kole** — Zobrazí se po závěru kola
- **Před závěrem kola** — Zobrazí se po poslední otázce, těsně před závěrem
- **Během závěru kola** — _(jen zvuk)_ Přehrává se během zobrazení pořadí
- ...

📘 Podporované typy souborů a tipy k použití najdeš v [průvodci přílohami](../editor/006-attachments.md).

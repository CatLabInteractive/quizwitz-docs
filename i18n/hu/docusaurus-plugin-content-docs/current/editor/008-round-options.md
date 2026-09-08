---
id: round-options
title: Körbeállítások
---

# 🔄 Körbeállítások

Minden körnek van egy adott **típusa**. Az alapértelmezett típus a **Trivia**, de arra biztatunk, hogy próbáld ki és teszteld az összes elérhető típust. Ez az oldal bemutatja azokat a beállításokat és csatolmányokat, amelyeket körönként konfigurálhatsz.

📘 Az összes körtípus részletes áttekintéséhez nézd meg a [körtípusok dokumentációját](../round-types/000-round-types.md).

---

## 🔧 Kör konfigurálása

Egy kör beállításainak konfigurálásához kattints a fogaskerék ikonra a kör paneljén:

| ![Körbeállítások megnyitása](/images/open-round-options.png) | ![Körbeállítások](/images/round-options.png) |
| :----------------------------------------------------------: | :------------------------------------------: |
|                  _Körbeállítások megnyitása_                 |           _Körkonfigurációs panel_           |

---

## ⚙️ Általános körbeállítások

A legtöbb körtípusnál a következő beállítások érhetők el:

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ Ez csak azoknál a kör- és kérdéstípusoknál lép érvénybe, ahol a visszajelzés egyébként késleltetve lenne, például nyílt kérdéseknél vagy villámköröknél.

📘 A visszajelzések időzítéséről és működéséről további információt a [kérdéstípusoknál](../question-types/000-question-types.md) találsz.

---

## 🏆 Pontozási beállítások {#scoring}

A QuizWitz rugalmas pontozást kínál, hogy minden játékos számára igazságos és izgalmas maradjon a játék.

- **Time-based scoring** - Players earn more points for faster answers.
  - A legtöbb kérdéstípusnál az időalapú pontok **mikroszekundumonként folyamatosan** csökkennek: minél gyorsabban válaszolsz, annál több pontot szerzel.
  - **Nyílt kérdéseknél** az időalapú pontok blokkokra vannak osztva. Például: az első blokkban adott válaszok (pl. az első néhány másodpercben) az időalapú rész **100%**-át érik, a következő blokk **80%**-ot, és így tovább. Ez segít kiegyenlíteni az esélyeket a lassabban gépelők számára.

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - Alapértelmezés szerint a pontok **75%**-a fix (mindenki, aki helyesen válaszol, megkapja ezeket a pontokat, a sebességtől függetlenül).
  - Csak a fennmaradó **25%**-ot befolyásolja az, hogy milyen gyorsan válaszolnak a játékosok.

> 💡 Ennek a beállításnak a módosításával a köreidet inkább tudásalapúvá vagy inkább sebességalapúvá teheted, a kvízstílusodtól függően.

Ezeket a pontozási beállításokat a kör szerkesztésekor a körbeállítások panelen találod.

---

## 📜 Quizmaster utasítások

Megadhatsz egyedi **fordulóbevezető szöveget**, amely a forduló elején csak a [Quizmaster appban](../quizmaster/001-introduction.md) jelenik meg. Használd a quizmaster eligazítására vagy egy személyes megjegyzésre.

---

## 📎 Csatolmányok

Dobd fel a körödet médiával, amely meghatározott pillanatokban jelenik meg:

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- ...

📘 A támogatott fájltípusokért és használati tippekért nézd meg a [csatolmányok útmutatóját](../editor/006-attachments.md).

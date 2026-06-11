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

- **Csak _X_ kérdés megjelenítése** — A kört egy adott számú kérdésre korlátozza
- **Véletlenszerű kérdéssorrend** — Összekeveri a kérdések sorrendjét a körön belül
- **Körbevezető megjelenítése** — Animált címet jelenít meg a kör kezdete előtt
- **Körlezáró megjelenítése (köztes eredmény)** — Felfedi a rangsort a kör végén
- **Minden visszajelzés csoportosítása egyetlen képernyőn** — A kérdések visszajelzéseit egy blokkban gyűjti össze a kör vége után
- **Minden kérdés-visszajelzés megjelenítése a kör végén** — A kérdések visszajelzését a kör végéig késlelteti
- **Visszajelzés kényszerítése minden egyes kérdés után** — Azonnali visszajelzést biztosít
  > ⚠️ Ez csak azoknál a kör- és kérdéstípusoknál lép érvénybe, ahol a visszajelzés egyébként késleltetve lenne, például nyílt kérdéseknél vagy villámköröknél.

📘 A visszajelzések időzítéséről és működéséről további információt a [kérdéstípusoknál](../question-types/000-question-types.md) találsz.

---

## 🏆 Pontozási beállítások {#scoring}

A QuizWitz rugalmas pontozást kínál, hogy minden játékos számára igazságos és izgalmas maradjon a játék.

- **Időalapú pontozás** — A játékosok több pontot kapnak a gyorsabb válaszokért.
  - A legtöbb kérdéstípusnál az időalapú pontok **mikroszekundumonként folyamatosan** csökkennek: minél gyorsabban válaszolsz, annál több pontot szerzel.
  - **Nyílt kérdéseknél** az időalapú pontok blokkokra vannak osztva. Például: az első blokkban adott válaszok (pl. az első néhány másodpercben) az időalapú rész **100%**-át érik, a következő blokk **80%**-ot, és így tovább. Ez segít kiegyenlíteni az esélyeket a lassabban gépelők számára.

- **Fix pontszázalék időalapú pontozásnál** — Te szabályozod, hogy az összpontszám mekkora részét befolyásolja a sebesség.
  - Alapértelmezés szerint a pontok **75%**-a fix (mindenki, aki helyesen válaszol, megkapja ezeket a pontokat, a sebességtől függetlenül).
  - Csak a fennmaradó **25%**-ot befolyásolja az, hogy milyen gyorsan válaszolnak a játékosok.

> 💡 Ennek a beállításnak a módosításával a köreidet inkább tudásalapúvá vagy inkább sebességalapúvá teheted, a kvízstílusodtól függően.

Ezeket a pontozási beállításokat a kör szerkesztésekor a körbeállítások panelen találod.

---

## 📜 Quizmaster utasítások

Hozzáadhatsz egyéni **körbevezető szöveget**, amely csak a [Quizmaster appban](../quizmaster/001-introduction.md) jelenik meg a kör elején. Ezzel eligazíthatod a műsorvezetőt, vagy személyesebb hangulatot adhatsz a körnek.

---

## 📎 Csatolmányok

Dobd fel a körödet médiával, amely meghatározott pillanatokban jelenik meg:

- **Kör előtt** — A körbevezető animáció után jelenik meg
- **Kör után** — A körlezáró után jelenik meg
- **Körlezáró előtt** — Az utolsó kérdés után, közvetlenül a lezáró előtt jelenik meg
- **Körlezáró közben** — _(csak hang)_ A rangsor megjelenítése közben játszódik le
- ...

📘 A támogatott fájltípusokért és használati tippekért nézd meg a [csatolmányok útmutatóját](../editor/006-attachments.md).

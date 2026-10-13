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

- **Csak _X_ kérdés megjelenítése** - A fordulót egy adott számú kérdésre korlátozza
- **Véletlenszerű kérdéssorrend** - Összekeveri a kérdések sorrendjét a fordulón belül
- **Fordulóbevezető megjelenítése** - Animált címet jelenít meg a forduló kezdete előtt
- **Fordulólezáró megjelenítése (részeredmény)** - Felfedi a rangsort a forduló végén
- **Minden visszajelzés csoportosítása egyetlen képernyőn** - A kérdések visszajelzéseit egy blokkban gyűjti össze a forduló vége után
- **Minden kérdés-visszajelzés megjelenítése a forduló végén** - A kérdések visszajelzését a forduló végéig késlelteti
- **Visszajelzés kényszerítése minden egyes kérdés után** - Azonnali visszajelzést biztosít
  > ⚠️ Ez csak azoknál a kör- és kérdéstípusoknál lép érvénybe, ahol a visszajelzés egyébként késleltetve lenne, például nyílt kérdéseknél vagy villámköröknél.

📘 A visszajelzések időzítéséről és működéséről további információt a [kérdéstípusoknál](../question-types/000-question-types.md) találsz.

---

## 🏆 Pontozási beállítások {#scoring}

A QuizWitz rugalmas pontozást kínál, hogy minden játékos számára igazságos és izgalmas maradjon a játék.

- **Időalapú pontozás** - A játékosok több pontot kapnak a gyorsabb válaszokért.
  - A legtöbb kérdéstípusnál az időalapú pontok **mikroszekundumonként folyamatosan** csökkennek: minél gyorsabban válaszolsz, annál több pontot szerzel.
  - **Nyílt kérdéseknél** az időalapú pontok blokkokra vannak osztva. Például: az első blokkban adott válaszok (pl. az első néhány másodpercben) az időalapú rész **100%**-át érik, a következő blokk **80%**-ot, és így tovább. Ez segít kiegyenlíteni az esélyeket a lassabban gépelők számára.

- **Fix pontszázalék időalapú pontozásnál** - Te szabályozod, hogy az összpontszám mekkora részét befolyásolja a sebesség.
  - Alapértelmezés szerint a pontok **75%**-a fix (mindenki, aki helyesen válaszol, megkapja ezeket a pontokat, a sebességtől függetlenül).
  - Csak a fennmaradó **25%**-ot befolyásolja az, hogy milyen gyorsan válaszolnak a játékosok.

> 💡 Ennek a beállításnak a módosításával a köreidet inkább tudásalapúvá vagy inkább sebességalapúvá teheted, a kvízstílusodtól függően.

Ezeket a pontozási beállításokat a kör szerkesztésekor a körbeállítások panelen találod.

---

## 💬 Forduló magyarázata

Egyes fordulótípusok és pontozási beállítások az első kérdés előtt rövid magyarázatot jelenítenek meg a játékképernyőn, például *„Folytatólagosan helyesen válaszolj, hogy magasabb szintekre juss, és bónuszpontokat kapj.”*, ha a forduló Strike pontozást használ. Kattints a forduló elején a **+ Kör magyarázata** gombra, hogy ezt a szöveget a sajátodra cseréld. Egy hagyományos Trivia forduló magyarázatára is használhatod, amelynek alapértelmezés szerint nincs magyarázata.

- Hagyd üresen a mezőt, ha a fordulótípus alapértelmezett magyarázatát szeretnéd megtartani.
- A forduló magyarázata ugyanúgy fordítandó, mint bármely más szöveg: add meg a kvízed minden nyelvén.
- Ha egy quizmaster vezeti a kvízt, a játékképernyő kihagyja a forduló magyarázatát. Helyette használd az alábbi quizmaster-szkriptet.

---

## 📜 Quizmaster utasítások

Megadhatsz egyedi **fordulóbevezető szöveget** (a **quizmaster-szkriptet**), amely a forduló elején csak a [Quizmaster appban](../quizmaster/001-introduction.md) jelenik meg. Használd a quizmaster eligazítására vagy egy személyes megjegyzésre.

---

## 📎 Mellékletek

Dobd fel a fordulódat mellékletekkel, amelyek meghatározott pillanatokban jelennek meg:

- **Forduló előtt** - A fordulóbevezető animáció után jelenik meg
- **Forduló után** - A fordulólezáró után jelenik meg
- **Fordulólezáró előtt** - Az utolsó kérdés után, közvetlenül a lezáró előtt jelenik meg
- **Fordulólezáró közben** - _(csak hang)_ A rangsor megjelenítése közben játszódik le
- ...

📘 A támogatott fájltípusokért és használati tippekért nézd meg a [mellékletek útmutatóját](../editor/006-attachments.md).

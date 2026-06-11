---
id: advanced-player-parameters
title: Speciális paraméterek
---

# ⚙️ Speciális paraméterek

A query string paraméterekkel testre szabhatod, hogyan viselkedik a QuizWitz játékkliens. Ezeket a paramétereket bármelyik játéklinkhez hozzáfűzheted a **Speciális játékbeállítások** funkcióval.

Példa:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Mik azok a query stringek?](https://en.wikipedia.org/wiki/Query_string)

---

## Elérhető paraméterek:

| Paraméter                |        Alapértelmezett        |            Példa            | Magyarázat                                                                                                                                                                                                             |
| ------------------------ | :---------------------------: | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (böngésző) |              en             | Betöltendő és alapnyelvként használandó ISO-639 nyelvkód                                                                                                                                                               |
| `theme`                  |            quizted            |           emerald           | A betöltendő téma neve (vagy jóváhagyott URL-je)                                                                                                                                                    |
| `reservation`            |               /               |            abcdef           | Használandó foglalási token (élő játékokban)                                                                                                                                                        |
| `remote`                 |  quizwitz.tv  | quizwitz.tv | A használandó CatLab Remote szerver                                                                                                                                                                                    |
| `server`                 |               /               |              10             | A használandó CatLab Remote szerverazonosító (automatikus felismeréssel)                                                                                                                            |
| `publisher`              |               /               |           QuizWitz          | A játékot hosztoló kiadó neve. Ezt a nézetek testreszabására használjuk                                                                                                                                |
| `smileys`                |               1               |              0              | Állítsd 0-ra, hogy letiltsd a smiley-kat a játékban                                                                                                                                                                    |
| `outroPlayers`           |               12              |          5,4,3,1,2          | Meghatározza azoknak a játékosoknak a mennyiségét (számát) VAGY sorrendjét (pozíciók vesszővel elválasztott listája), akiket a játék outroja során bemondunk.    |
| `focusPositions`         |               /               |            50,100           | Adj meg egy listát azokról a további pozíciókról, amelyek megjelennek a quizmaster appban                                                                                                                              |
| `translations`           |               1               |              0              | Állítsd 0-ra, hogy letiltsd a betöltött kvíz fordításainak betöltését                                                                                                                                                  |
| `cycleTranslations`      |               0               |              1              | Állítsd 1-re, hogy kérdésenként végigpörgesd a kvíz összes elérhető nyelvét                                                                                                                                            |
| `showLongQuestions`      |               0               |              1              | Állítsd 1-re, hogy megjelenjen a „hosszú kérdés” a játékképernyőn                                                                                                                                                      |
| `forcePiecharts`         |               0               |              1              | Állítsd 1-re, hogy mindig minden visszajelzés kördiagramokban jelenjen meg                                                                                                                                             |
| `forceNoPiecharts`       |               0               |              1              | Állítsd 1-re, hogy soha ne legyen minden visszajelzés kördiagramokba csoportosítva.                                                                                                                    |
| `piechartPercentages`    |               0               |              1              | Állítsd 1-re, hogy minden kördiagramon százalékok jelenjenek meg abszolút értékek helyett                                                                                                                              |
| `monitors`               |               /               |            nl,fr            | Ha be van állítva, élő játékokban külön kódok jönnek létre egy „monitor” megjelenítéséhez az adott nyelven, lokalizált előadók számára.                                                                |
| `allowLogin`             |               1               |              0              | Állítsd 0-ra, hogy ne engedd a felhasználóknak a bejelentkezést                                                                                                                                                        |
| `tracker`                |               1               |              0              | Állítsd 0-ra, hogy letiltsd az összes nyomkövetést. Nem lesz elérhető kvízriport                                                                                                                       |
| `random`                 |               0               |              1              | Állítsd 1-re egy „véletlenszerű kvíz” betöltéséhez                                                                                                                                                                     |
| `delay`                  |               0               |            30000            | Állítsd be, hány ezredmásodperccel késleltetődjön az összes játékosinterakció (livestreamekhez)                                                                                                     |
| `countdown`              |               10              |              60             | Állítsd be, hány másodpercig „számoljon vissza” a játék prezentációs módban.                                                                                                                           |
| `autoCountdown`          |               0               |              1              | Állítsd 1-re, hogy prezentációs módban automatikusan elinduljon a visszaszámlálás, miután az első játékos csatlakozik.                                                                                 |
| `autoRestart`            |               0               |              1              | Állítsd 1-re, hogy a játék automatikusan újrainduljon, miután véget ért.                                                                                                                               |
| `waitForPlayers`         |               0               |              1              | Állítsd 1-re, hogy ne várjon egyetlen játékosra sem, amikor az `autoCountdown` engedélyezve van                                                                                                                        |
| `askEmail`               |               1               |              0              | Állítsd 0-ra, hogy prezentációs módban ne kérje el a felhasználó e-mail-címét.                                                                                                                         |
| `beacon`                 |               /               |           my-beacn          | Állíts be egy CatLab Remote beacon tokent, amellyel automatikusan csatlakoztatható a quizmaster app.                                                                                                   |
| `rounds`                 |               5               |              7              | Állítsd be, hány kör legyen generálva egy véletlenszerű kvízben.                                                                                                                                       |
| `questions`              |               7               |              7              | Állítsd be, hány kérdés legyen generálva minden körhöz egy véletlenszerű kvízben.                                                                                                                      |
| `showListenQuotes`       |               1               |              0              | Állítsd 0-ra, hogy letiltsd a „vicces” „kérlek, figyeljetek” idézeteket.                                                                                                                               |
| `shared`                 |               /               |  123:abcdef | Egy megosztott bejegyzés hozzáférési tokenje.                                                                                                                                                          |
| `music`                  |               1               |              0              | Állítsd 0-ra az összes (játék) zene letiltásához. A feltöltött hangok továbbra is lejátszódnak.                                                                     |
| `connectMusic`           |               1               |              0              | Állítsd 0-ra a „connect” fázis alatt lejátszott (játék) zene letiltásához.                                                                                                          |
| `slideshowVideoInterval` |              300              |             300             | Ha videók vannak feltöltve a csatlakozási képernyő fázisában, ez határozza meg, hány másodperc teljen el az egyes videólejátszások között.                                                             |
| `slideshowImageInterval` |               20              |              60             | Ha képek vannak feltöltve a csatlakozási képernyő fázisában, ez határozza meg, hány másodpercig jelenjen meg egy-egy kép.                                                                              |
| `skipOnAllAnswered`      |               1               |              0              | Állítsd 0-ra, hogy felülírd a bejegyzések `skipOnAllAnswered` értékét                                                                                                                                                  |
| `departments`            |               1               |            A,B,C            | Állítsd 0-ra, hogy letiltsd a részlegek betöltését. Állítsd egy vesszővel elválasztott névlistára, hogy minden csatlakozó játékost automatikusan egy véletlenszerű részleghez rendelj. |
| `showRankInDepartment`   |               1               |              0              | Állítsd 0-ra, hogy a felhasználók ne lássák a helyezésüket a részlegükön belül.                                                                                                                        |
| `showDepartmentRanking`  |               1               |              0              | Állítsd 0-ra, hogy letiltsd a részlegek rangsorának megjelenítését a körök között.                                                                                                                     |
| `preloadVideo`           |               0               |              1              | Állítsd 1-re, hogy kikényszerítsd az összes videórészlet előtöltését.                                                                                                                                  |
| `n`                      |               /               |          `_prompt_`         | Állíts be (vagy a `_prompt_` értékre állítva kérj be) egy nevet a játékot játszó játékoscsoportnak. Ez a név bekerül a kvízriportba.                                |

---

## 💡 Használati tippek

- Több paramétert is összekombinálhatsz az `&` használatával
- Linkek megosztásakor vagy beágyazásakor használd ezeket az opciókat a **Speciális játékbeállításokkal**
- Sok opció hasznos livestream-optimalizáláshoz vagy többnyelvű eseményekhez

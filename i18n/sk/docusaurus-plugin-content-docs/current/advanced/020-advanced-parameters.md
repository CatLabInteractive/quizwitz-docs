---
id: advanced-player-parameters
title: Rozšírené parametre
---

# ⚙️ Rozšírené parametre

Pomocou parametrov reťazca dopytu si môžeš prispôsobiť, ako sa správa herný klient QuizWitz. Tieto parametre môžeš pridať k ľubovoľnému odkazu na hru pomocou funkcie **Rozšírené nastavenia hry**.

Príklad:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Čo sú reťazce dopytu?](https://en.wikipedia.org/wiki/Query_string)

---

## Dostupné parametre:

| Názov parametra          |            Predvolené           |           Príklad           | Vysvetlenie                                                                                                                                                                                                     |
| ------------------------ | :-----------------------------: | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (prehliadač) |              en             | Kód jazyka ISO-639, ktorý sa má načítať a použiť ako základný jazyk                                                                                                                                             |
| `theme`                  |             quizted             |           emerald           | Názov (alebo schválená URL adresa) témy, ktorá sa má načítať                                                                                                                                 |
| `reservation`            |                /                |            abcdef           | Rezervačný token, ktorý sa má použiť (v živých hrách)                                                                                                                                        |
| `remote`                 |   quizwitz.tv   | quizwitz.tv | Server CatLab Remote, ktorý sa má použiť                                                                                                                                                                        |
| `server`                 |                /                |              10             | ID servera CatLab Remote, ktorý sa má použiť (s automatickým zisťovaním)                                                                                                                     |
| `publisher`              |                /                |           QuizWitz          | Meno vydavateľa, ktorý hostuje hru. Používa sa to na prispôsobenie zobrazení                                                                                                                    |
| `smileys`                |                1                |              0              | Nastav na 0, ak chceš v hre vypnúť smajlíkov                                                                                                                                                                    |
| `outroPlayers`           |                12               |          5,4,3,1,2          | Určuje množstvo (počet) ALEBO poradie hráčov (zoznam pozícií oddelených čiarkami), ktoré sa oznámia počas outra hry.                                      |
| `focusPositions`         |                /                |            50,100           | Define a list of additional positions that will be displayed in the Quizmaster App                                                                                                                              |
| `translations`           |                1                |              0              | Nastav na 0, ak chceš vypnúť načítavanie prekladov kvízu, ktorý načítavaš                                                                                                                                       |
| `cycleTranslations`      |                0                |              1              | Nastav na 1, ak chceš pri každej otázke cyklicky prechádzať všetkými dostupnými jazykmi kvízu                                                                                                                   |
| `showLongQuestions`      |                0                |              1              | Nastav na 1, ak chceš na hernej obrazovke zobraziť „dlhú otázku“                                                                                                                                                |
| `forcePiecharts`         |                0                |              1              | Nastav na 1, ak chceš vždy zobraziť všetku spätnú väzbu v koláčových grafoch                                                                                                                                    |
| `forceNoPiecharts`       |                0                |              1              | Nastav na 1, ak nechceš nikdy zoskupovať všetku spätnú väzbu do koláčových grafov.                                                                                                              |
| `piechartPercentages`    |                0                |              1              | Nastav na 1, ak chceš vo všetkých koláčových grafoch zobrazovať percentá namiesto absolútnych hodnôt                                                                                                            |
| `monitors`               |                /                |            nl,fr            | If set, in live games separate codes will be created to display a 'monitor' in that specific language for localized quizmasters.                                                                |
| `allowLogin`             |                1                |              0              | Nastav na 0, ak chceš používateľom zakázať prihlásenie                                                                                                                                                          |
| `tracker`                |                1                |              0              | Nastav na 0, ak chceš vypnúť všetko sledovanie. Nebude dostupná žiadna správa o kvíze                                                                                                           |
| `random`                 |                0                |              1              | Nastav na 1, ak chceš načítať „náhodný kvíz“                                                                                                                                                                    |
| `delay`                  |                0                |            30000            | Nastav počet milisekúnd, o ktoré sa oneskorí všetka interakcia hráčov (pre livestreamy)                                                                                                      |
| `countdown`              |                10               |              60             | Nastav počet sekúnd, počas ktorých bude hra „odpočítavať“ v režime prezentácie.                                                                                                                 |
| `autoCountdown`          |                0                |              1              | Nastav na 1, ak chceš po pripojení prvého hráča v režime prezentácie automaticky spustiť odpočítavanie.                                                                                         |
| `autoRestart`            |                0                |              1              | Nastav na 1, ak chceš hru po jej skončení automaticky reštartovať.                                                                                                                              |
| `waitForPlayers`         |                0                |              1              | Nastav na 1, aby sa pri zapnutom `autoCountdown` nečakalo na žiadnych hráčov                                                                                                                                    |
| `askEmail`               |                1                |              0              | Nastav na 0, ak sa v režime prezentácie nemá pýtať e-mailová adresa používateľa.                                                                                                                |
| `beacon`                 |                /                |           my-beacn          | Set a CatLab Remote beacon token that can be used to automatically connect the Quizmaster App.                                                                                                  |
| `rounds`                 |                5                |              7              | Nastav počet kôl, ktoré sa vygenerujú v náhodnom kvíze.                                                                                                                                         |
| `questions`              |                7                |              7              | Nastav počet otázok, ktoré sa vygenerujú pre každé kolo v náhodnom kvíze.                                                                                                                       |
| `showListenQuotes`       |                1                |              0              | Nastav na 0, ak chceš vypnúť „vtipné“ citáty „prosím počúvajte“.                                                                                                                                |
| `shared`                 |                /                |  123:abcdef | Prístupový token zdieľanej položky.                                                                                                                                                             |
| `music`                  |                1                |              0              | Nastav na 0, ak chceš vypnúť všetku (hernú) hudbu. Nahraný zvuk sa bude stále prehrávať.                                                                     |
| `connectMusic`           |                1                |              0              | Nastav na 0, ak chceš vypnúť (hernú) hudbu, ktorá hrá počas fázy „pripojenia“.                                                                                               |
| `slideshowVideoInterval` |               300               |             300             | Keď sú vo fáze obrazovky pripojenia nahrané videá, toto určuje počet sekúnd medzi jednotlivými prehratiami videa.                                                                               |
| `slideshowImageInterval` |                20               |              60             | Keď sú vo fáze obrazovky pripojenia nahrané obrázky, toto určuje počet sekúnd, počas ktorých sa zobrazí každý obrázok.                                                                          |
| `skipOnAllAnswered`      |                1                |              0              | Nastav na 0, ak chceš prepísať položky `skipOnAllAnswered`                                                                                                                                                      |
| `departments`            |                1                |            A,B,C            | Nastav na 0, ak chceš vypnúť načítavanie oddelení. Nastav na zoznam názvov oddelených čiarkami, aby sa všetci pripájajúci sa hráči automaticky priradili k náhodnému oddeleniu. |
| `showRankInDepartment`   |                1                |              0              | Nastav na 0, ak chceš používateľom zakázať vidieť ich poradie v rámci ich oddelenia.                                                                                                            |
| `showDepartmentRanking`  |                1                |              0              | Nastav na 0, ak chceš vypnúť zobrazovanie rebríčka oddelení medzi kolami.                                                                                                                       |
| `preloadVideo`           |                0                |              1              | Nastav na 1, ak chceš vynútiť prednačítanie všetkých video fragmentov.                                                                                                                          |
| `n`                      |                /                |          `_prompt_`         | Nastav (alebo vyžiadaj nastavením na `_prompt_`) názov skupiny hráčov, ktorá hrá hru. Tento názov sa odošle do správy o kvíze.                               |

---

## 💡 Tipy na používanie

- Viacero parametrov sa dá skombinovať pomocou `&`
- Použi tieto možnosti s **Rozšírenými nastaveniami hry** pri zdieľaní alebo vkladaní odkazov
- Mnohé možnosti sú užitočné na optimalizáciu livestreamov alebo viacjazyčné podujatia

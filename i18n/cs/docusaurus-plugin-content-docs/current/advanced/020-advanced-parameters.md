---
id: advanced-player-parameters
title: Pokročilé parametry
---

# ⚙️ Pokročilé parametry

Pomocí parametrů query stringu si můžeš přizpůsobit, jak se bude herní klient QuizWitz chovat. Tyto parametry můžeš přidat k libovolnému odkazu na hru pomocí funkce **Pokročilá nastavení hry**.

Příklad:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Co jsou query stringy?](https://en.wikipedia.org/wiki/Query_string)

---

## Dostupné parametry:

| Parametr                 |         Výchozí hodnota        |           Příklad           | Vysvětlení                                                                                                                                                                                                   |
| ------------------------ | :----------------------------: | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `language`               | (prohlížeč) |              en             | Kód jazyka ISO-639, který se má načíst a použít jako základní jazyk                                                                                                                                          |
| `theme`                  |             quizted            |           emerald           | Název (nebo schválená URL adresa) motivu, který se má načíst                                                                                                                              |
| `reservation`            |                /               |            abcdef           | Rezervační token, který se má použít (v živých hrách)                                                                                                                                     |
| `remote`                 |   quizwitz.tv  | quizwitz.tv | Server CatLab Remote, který se má použít                                                                                                                                                                     |
| `server`                 |                /               |              10             | ID serveru CatLab Remote, který se má použít (s automatickým vyhledáním)                                                                                                                  |
| `publisher`              |                /               |           QuizWitz          | Název vydavatele, který hru hostuje. Používá se k přizpůsobení zobrazení                                                                                                                     |
| `smileys`                |                1               |              0              | Nastav na 0, pokud chceš ve hře vypnout smajlíky                                                                                                                                                             |
| `outroPlayers`           |               12               |          5,4,3,1,2          | Určuje množství (počet) NEBO pořadí hráčů (seznam pozic oddělených čárkou), kteří budou oznámeni během závěru hry.                                     |
| `focusPositions`         |                /               |            50,100           | Definujte seznam dalších pozic, které budou zobrazeny v aplikaci Quizmaster                                                                                                                                  |
| `translations`           |                1               |              0              | Nastav na 0, pokud chceš vypnout načítání překladů kvízu, který načítáš                                                                                                                                      |
| `cycleTranslations`      |                0               |              1              | Nastav na 1, pokud chceš u každé otázky cyklicky procházet všechny dostupné jazyky kvízu                                                                                                                     |
| `showLongQuestions`      |                0               |              1              | Nastav na 1, pokud chceš na herní obrazovce zobrazit „dlouhou otázku“                                                                                                                                        |
| `forcePiecharts`         |                0               |              1              | Nastav na 1, pokud chceš veškerou zpětnou vazbu vždy zobrazovat v koláčových grafech                                                                                                                         |
| `forceNoPiecharts`       |                0               |              1              | Nastav na 1, pokud chceš, aby se zpětná vazba nikdy neseskupovala do koláčových grafů.                                                                                                       |
| `piechartPercentages`    |                0               |              1              | Nastav na 1, pokud chceš ve všech koláčových grafech zobrazovat procenta místo absolutních hodnot                                                                                                            |
| `monitors`               |                /               |            nl,fr            | Je-li nastaveno, v živých hrách budou vytvořeny samostatné kódy pro zobrazení 'monitor' v tomto konkrétním jazyce pro lokalizované kvízy.                                                    |
| `allowLogin`             |                1               |              0              | Nastav na 0, pokud nechceš uživatelům povolit přihlášení                                                                                                                                                     |
| `tracker`                |                1               |              0              | Nastav na 0, pokud chceš vypnout veškeré sledování. Nebude k dispozici žádný report kvízu                                                                                                    |
| `random`                 |                0               |              1              | Nastav na 1, pokud chceš načíst „náhodný kvíz“                                                                                                                                                               |
| `delay`                  |                0               |            30000            | Nastav počet milisekund, o který se zpozdí veškerá interakce hráčů (pro livestreamy)                                                                                                      |
| `countdown`              |               10               |              60             | Nastav počet sekund, po které bude hra v prezentačním režimu „odpočítávat“.                                                                                                                  |
| `autoCountdown`          |                0               |              1              | Nastav na 1, pokud chceš v prezentačním režimu automaticky spustit odpočet po připojení prvního hráče.                                                                                       |
| `autoRestart`            |                0               |              1              | Nastav na 1, pokud chceš po dokončení hry automaticky spustit hru znovu.                                                                                                                     |
| `waitForPlayers`         |                0               |              1              | Nastav na 1, pokud nechceš čekat na žádné hráče, když je zapnuté `autoCountdown`                                                                                                                             |
| `askEmail`               |                1               |              0              | Nastav na 0, pokud se v prezentačním režimu nechceš ptát na e-mailovou adresu uživatele.                                                                                                     |
| `beacon`                 |                /               |           my-beacn          | Nastavte token pro vzdálený maják CatLab, který může být použit k automatickému připojení aplikace Quizmaster                                                                                                |
| `rounds`                 |                5               |              7              | Nastav počet kol, která se vygenerují v náhodném kvízu.                                                                                                                                      |
| `questions`              |                7               |              7              | Nastav počet otázek, které se vygenerují pro každé kolo v náhodném kvízu.                                                                                                                    |
| `showListenQuotes`       |                1               |              0              | Nastav na 0, pokud chceš vypnout „vtipné“ hlášky typu „prosím poslouchejte“.                                                                                                                 |
| `shared`                 |                /               |  123:abcdef | Přístupový token sdílené položky.                                                                                                                                                            |
| `music`                  |                1               |              0              | Nastav na 0, pokud chceš vypnout veškerou (herní) hudbu. Nahraný zvuk se bude přehrávat dál.                                                              |
| `connectMusic`           |                1               |              0              | Nastav na 0, pokud chceš vypnout (herní) hudbu, která hraje během fáze „připojení“.                                                                                       |
| `slideshowVideoInterval` |               300              |             300             | Když jsou ve fázi obrazovky připojení nahraná videa, určuje to počet sekund mezi jednotlivými přehráními videí.                                                                              |
| `slideshowImageInterval` |               20               |              60             | Když jsou ve fázi obrazovky připojení nahrané obrázky, určuje to počet sekund, po které se každý obrázek zobrazí.                                                                            |
| `skipOnAllAnswered`      |                1               |              0              | Nastav na 0, pokud chceš přepsat nastavení položky `skipOnAllAnswered`                                                                                                                                       |
| `departments`            |                1               |            A,B,C            | Nastav na 0, pokud chceš vypnout načítání oddělení. Nastav na seznam názvů oddělených čárkami, aby se všichni připojující hráči automaticky přiřadili do náhodného oddělení. |
| `showRankInDepartment`   |                1               |              0              | Nastav na 0, pokud nechceš uživatelům umožnit vidět jejich pořadí v rámci jejich oddělení.                                                                                                   |
| `showDepartmentRanking`  |                1               |              0              | Nastav na 0, pokud chceš vypnout zobrazování žebříčku oddělení mezi koly.                                                                                                                    |
| `preloadVideo`           |                0               |              1              | Nastav na 1, pokud chceš vynutit přednačtení všech fragmentů videa.                                                                                                                          |
| `n`                      |                /               |          `_prompt_`         | Nastav (nebo vyžádej nastavením na `_prompt_`) název skupiny hráčů, která hraje hru. Tento název se odešle do reportu kvízu.                              |

---

## 💡 Tipy k použití

- Více parametrů můžeš zkombinovat pomocí `&`
- Tyto možnosti používej s **Pokročilými nastaveními hry** při sdílení nebo vkládání odkazů
- Spousta možností se hodí pro optimalizaci livestreamů nebo vícejazyčné akce

---
id: advanced-player-parameters
title: Geavanceerde parameters
---

# ⚙️ Geavanceerde parameters

Je kunt query-stringparameters gebruiken om aan te passen hoe de QuizWitz gameclient zich gedraagt. Deze parameters kun je aan elke spel-link toevoegen via de functie **Geavanceerde Spelinstellingen**.

Voorbeeld:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Wat zijn query strings?](https://en.wikipedia.org/wiki/Query_string)

---

## Beschikbare parameters:

| Parameter                |           Standaard          |          Voorbeeld          | Uitleg                                                                                                                                                                                                                          |
| ------------------------ | :--------------------------: | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (browser) |              en             | ISO-639 taalcodes om te laden en te gebruiken als basistaal                                                                                                                                                                     |
| `theme`                  |            quizted           |           emerald           | Naam (of goedgekeurde URL) van het thema om te laden                                                                                                                                                         |
| `reservation`            |               /              |            abcdef           | Reservatietoken om te gebruiken (bij live games)                                                                                                                                                             |
| `remote`                 |  quizwitz.tv | quizwitz.tv | CatLab Remote-server die gebruikt zal worden                                                                                                                                                                                    |
| `server`                 |               /              |              10             | CatLab Remote-server-ID die gebruikt zal worden (met automatische detectie)                                                                                                                                  |
| `publisher`              |               /              |           QuizWitz          | Naam van de publisher die het spel host. Dit wordt gebruikt om weergaven aan te passen                                                                                                                          |
| `smileys`                |               1              |              0              | Stel in op 0 om smileys uit te schakelen in het spel                                                                                                                                                                            |
| `outroPlayers`           |              12              |          5,4,3,1,2          | Bepaalt het aantal (aantal) OF de volgorde van spelers (komma-gescheiden lijst met posities) die aangekondigd worden tijdens de outro van het spel.                       |
| `focusPositions`         |               /              |            50,100           | Definieer een lijst met extra posities die worden weergegeven in de quizmaster-app                                                                                                                                              |
| `translations`           |               1              |              0              | Stel in op 0 om vertalingen van de quiz die je laadt uit te schakelen                                                                                                                                                           |
| `cycleTranslations`      |               0              |              1              | Stel in op 1 om per vraag te wisselen tussen alle beschikbare talen van de quiz                                                                                                                                                 |
| `showLongQuestions`      |               0              |              1              | Stel in op 1 om de 'lange vraag' op het spelscherm te tonen                                                                                                                                                                     |
| `forcePiecharts`         |               0              |              1              | Stel in op 1 om altijd alle feedback als taartdiagrammen weer te geven                                                                                                                                                          |
| `forceNoPiecharts`       |               0              |              1              | Stel in op 1 om nooit alle feedback samen te voegen in taartdiagrammen.                                                                                                                                         |
| `piechartPercentages`    |               0              |              1              | Stel in op 1 om waar te geven in procenten i.p.v. absolute waarden in alle taartdiagrammen                                                                                      |
| `monitors`               |               /              |            nl,fr            | Indien ingesteld, worden bij live games aparte codes aangemaakt om een 'monitor' in die specifieke taal weer te geven voor lokale presentatoren.                                                                |
| `allowLogin`             |               1              |              0              | Stel in op 0 om gebruikers niet toe te laten om in te loggen                                                                                                                                                                    |
| `tracker`                |               1              |              0              | Stel in op 0 om alle tracking uit te schakelen. Er zal geen quizrapport beschikbaar zijn                                                                                                                        |
| `random`                 |               0              |              1              | Stel in op 1 om een 'willekeurige quiz' te laden                                                                                                                                                                                |
| `delay`                  |               0              |            30000            | Stel het aantal milliseconden in dat alle spelerinteractie wordt uitgesteld (voor livestreams)                                                                                                               |
| `countdown`              |              10              |              60             | Stel het aantal seconden in dat het spel "aftelt" in presentatiemodus.                                                                                                                                          |
| `autoCountdown`          |               0              |              1              | Stel in op 1 om de countdown automatisch te starten nadat de eerste speler meedoet in presentatiemodus.                                                                                                         |
| `autoRestart`            |               0              |              1              | Stel in op 1 om het spel automatisch opnieuw te starten nadat het is afgelopen.                                                                                                                                 |
| `waitForPlayers`         |               0              |              1              | Stel in op 1 om niet op spelers te wachten wanneer `autoCountdown` is ingeschakeld                                                                                                                                              |
| `askEmail`               |               1              |              0              | Stel in op 0 om niet naar het e-mailadres van de gebruiker te vragen in presentatiemodus.                                                                                                                       |
| `beacon`                 |               /              |           my-beacn          | Stel een CatLab Remote beacon-token in dat gebruikt kan worden om de quizmaster app automatisch te verbinden.                                                                                                   |
| `rounds`                 |               5              |              7              | Stel het aantal rondes in dat wordt gegenereerd in een willekeurige quiz.                                                                                                                                       |
| `questions`              |               7              |              7              | Stel het aantal vragen in dat per ronde wordt gegenereerd in een willekeurige quiz.                                                                                                                             |
| `showListenQuotes`       |               1              |              0              | Stel in op 0 om de grappige "luister alsjeblieft"-quotes uit te schakelen.                                                                                                                                      |
| `shared`                 |               /              |  123:abcdef | Het toegangstoken van een gedeelde invoer.                                                                                                                                                                      |
| `music`                  |               1              |              0              | Stel in op 0 om alle (spel) muziek uit te schakelen. Geüploade audio wordt nog steeds afgespeeld.                                                                            |
| `connectMusic`           |               1              |              0              | Stel in op 0 om de (spel) muziek die tijdens de 'verbinden'-fase afspeelt uit te schakelen.                                                                                                  |
| `slideshowVideoInterval` |              300             |             300             | Wanneer video's worden geüpload in de verbindingsscherm-fase, bepaalt dit het aantal seconden tussen elk videofragment.                                                                                         |
| `slideshowImageInterval` |              20              |              60             | Wanneer afbeeldingen worden geüpload in de verbindingsscherm-fase, bepaalt dit het aantal seconden dat elke afbeelding wordt getoond.                                                                           |
| `skipOnAllAnswered`      |               1              |              0              | Stel in op 0 om de invoer `skipOnAllAnswered` te overschrijven                                                                                                                                                                  |
| `departments`            |               1              |            A,B,C            | Stel in op 0 om het laden van afdelingen uit te schakelen. Stel in op een lijst met komma-gescheiden namen om automatisch alle verbindende spelers aan een willekeurige afdeling toe te wijzen. |
| `showRankInDepartment`   |               1              |              0              | Stel in op 0 om te voorkomen dat gebruikers hun ranking binnen de afdeling zien.                                                                                                                                |
| `showDepartmentRanking`  |               1              |              0              | Stel in op 0 om de afdeling-ranglijst niet te tonen tussen de rondes.                                                                                                                                           |
| `preloadVideo`           |               0              |              1              | Stel in op 1 om alle videofragmenten vooraf te laden.                                                                                                                                                           |
| `n`                      |               /              |          `_prompt_`         | Stel (of vraag door in te stellen op `_prompt_`) een naam in voor de spelersgroep die het spel speelt. Deze naam wordt meegestuurd naar het quizrapport.                     |

---

## 💡 Gebruikstips

- Meerdere parameters kun je combineren met `&`
- Gebruik deze opties met **Geavanceerde Spellinstellingen** wanneer je links deelt of insluit
- Veel opties zijn handig voor livestream-optimalisatie of meertalige evenementen

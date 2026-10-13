---
id: advanced-player-parameters
title: Avancerade parametrar
---

# ⚙️ Avancerade parametrar

Du kan använda query-parametrar för att anpassa hur QuizWitz spelklient beter sig. Parametrarna kan läggas till i valfri spellänk med funktionen **Avancerade spelinställningar**.

Exempel:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Vad är query-strängar?](https://en.wikipedia.org/wiki/Query_string)

---

## Tillgängliga parametrar:

| Parameter                |             Standard            |           Exempel           | Förklaring                                                                                                                                                                                                    |
| ------------------------ | :-----------------------------: | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (webbläsare) |              en             | ISO-639-språkkod som laddas och används som basspråk                                                                                                                                                          |
| `theme`                  |             quizted             |           emerald           | Namn (eller godkänd URL) på temat som ska laddas                                                                                                                                           |
| `reservation`            |                /                |            abcdef           | Bokningstoken som ska användas (i Live-spel)                                                                                                                                               |
| `remote`                 |   quizwitz.tv   | quizwitz.tv | CatLab Remote-server som ska användas                                                                                                                                                                         |
| `server`                 |                /                |              10             | ID för CatLab Remote-servern som ska användas (med automatisk identifiering)                                                                                                               |
| `publisher`              |                /                |           QuizWitz          | Namn på den profil som är värd för spelet. Används för att anpassa vyer                                                                                                                       |
| `smileys`                |                1                |              0              | Sätt till 0 för att inaktivera smileys i spelet                                                                                                                                                               |
| `outroPlayers`           |                12               |          5,4,3,1,2          | Anger antalet (ett tal) ELLER ordningen på spelarna (kommaseparerad lista med placeringar) som presenteras under speloutrot.                            |
| `focusPositions`         |                /                |            50,100           | Definiera en lista med ytterligare placeringar som visas i Quizmaster-appen                                                                                                                                   |
| `translations`           |                1                |              0              | Sätt till 0 för att inte ladda översättningar av quizet som laddas                                                                                                                                            |
| `cycleTranslations`      |                0                |              1              | Sätt till 1 för att växla mellan alla tillgängliga språk i quizet för varje fråga                                                                                                                             |
| `showLongQuestions`      |                0                |              1              | Sätt till 1 för att visa ”lång fråga” på spelskärmen                                                                                                                                                          |
| `forcePiecharts`         |                0                |              1              | Sätt till 1 för att alltid visa all feedback i cirkeldiagram                                                                                                                                                  |
| `forceNoPiecharts`       |                0                |              1              | Sätt till 1 för att aldrig gruppera all feedback i cirkeldiagram.                                                                                                                             |
| `piechartPercentages`    |                0                |              1              | Sätt till 1 för att visa procent i stället för absoluta värden i alla cirkeldiagram                                                                                                                           |
| `monitors`               |                /                |            nl,fr            | Om den är angiven skapas separata koder i Live-spel för att visa en ”monitor” på just det språket, så att quizmastern kan arbeta på sitt eget språk.                                          |
| `allowLogin`             |                1                |              0              | Sätt till 0 för att inte låta användare logga in                                                                                                                                                              |
| `tracker`                |                1                |              0              | Sätt till 0 för att inaktivera all spårning. Ingen quizrapport kommer att finnas tillgänglig                                                                                                  |
| `random`                 |                0                |              1              | Sätt till 1 för att ladda ett ”slumpmässigt quiz”                                                                                                                                                             |
| `delay`                  |                0                |            30000            | Anger hur många millisekunder all spelarinteraktion ska fördröjas (för livestreamar)                                                                                                       |
| `countdown`              |                10               |              60             | Anger hur många sekunder spelet ska ”räkna ner” i presentationsläget.                                                                                                                         |
| `autoCountdown`          |                0                |              1              | Sätt till 1 för att automatiskt starta nedräkningen när den första spelaren har gått med i presentationsläget.                                                                                |
| `autoRestart`            |                0                |              1              | Sätt till 1 för att automatiskt starta om spelet när det är slut.                                                                                                                             |
| `waitForPlayers`         |                0                |              1              | Sätt till 1 för att inte vänta på några spelare när `autoCountdown` är aktiverat                                                                                                                              |
| `askEmail`               |                1                |              0              | Sätt till 0 för att inte fråga efter användarens e-postadress i presentationsläget.                                                                                                           |
| `beacon`                 |                /                |           my-beacn          | Ange en beacon-token för CatLab Remote som kan användas för att automatiskt ansluta Quizmaster-appen.                                                                                         |
| `rounds`                 |                5                |              7              | Anger antalet rundor som genereras i ett slumpmässigt quiz.                                                                                                                                   |
| `questions`              |                7                |              7              | Anger antalet frågor som genereras för varje runda i ett slumpmässigt quiz.                                                                                                                   |
| `showListenQuotes`       |                1                |              0              | Sätt till 0 för att inaktivera de ”roliga” citaten om att lyssna.                                                                                                                             |
| `shared`                 |                /                |  123:abcdef | Åtkomsttoken för ett delat objekt.                                                                                                                                                            |
| `music`                  |                1                |              0              | Sätt till 0 för att inaktivera all (spel)musik. Uppladdat ljud spelas fortfarande upp.                                                                     |
| `connectMusic`           |                1                |              0              | Sätt till 0 för att inaktivera (spel)musiken som spelas under ”anslutningsfasen”.                                                                                          |
| `slideshowVideoInterval` |               300               |             300             | När videor har laddats upp för anslutningsskärmen anger detta antalet sekunder mellan varje videouppspelning.                                                                                 |
| `slideshowImageInterval` |                20               |              60             | När bilder har laddats upp för anslutningsskärmen anger detta antalet sekunder som varje bild visas.                                                                                          |
| `skipOnAllAnswered`      |                1                |              0              | Sätt till 0 för att åsidosätta objektets inställning `skipOnAllAnswered`                                                                                                                                      |
| `departments`            |                1                |            A,B,C            | Sätt till 0 för att inaktivera laddning av avdelningar. Ange en kommaseparerad lista med namn för att automatiskt placera alla anslutande spelare i en slumpmässig avdelning. |
| `showRankInDepartment`   |                1                |              0              | Sätt till 0 för att hindra användare från att se sin placering inom sin avdelning.                                                                                                            |
| `showDepartmentRanking`  |                1                |              0              | Sätt till 0 för att inaktivera visningen av avdelningsrankningen mellan rundor.                                                                                                               |
| `preloadVideo`           |                0                |              1              | Sätt till 1 för att tvinga förladdning av alla videofragment.                                                                                                                                 |
| `n`                      |                /                |          `_prompt_`         | Ange (eller begär genom att sätta till `_prompt_`) ett namn på spelargruppen som spelar spelet. Namnet skickas till quizrapporten.                         |

---

## 💡 Användningstips

- Flera parametrar kan kombineras med `&`
- Använd de här alternativen med **Avancerade spelinställningar** när du delar eller bäddar in länkar
- Många alternativ är användbara för att optimera livestreamar eller för flerspråkiga evenemang

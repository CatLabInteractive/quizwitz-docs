---
id: advanced-player-parameters
title: Avancerede parametre
---

# ⚙️ Avancerede parametre

Du kan bruge parametre i query-strengen til at tilpasse, hvordan QuizWitz-spilklienten opfører sig. Disse parametre kan tilføjes til ethvert spillink med funktionen **Avancerede spilindstillinger**.

Eksempel:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Hvad er query-strenge?](https://en.wikipedia.org/wiki/Query_string)

---

## Tilgængelige parametre:

| Parameter                |           Standard           |           Eksempel          | Forklaring                                                                                                                                                                                                      |
| ------------------------ | :--------------------------: | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (browser) |              en             | ISO-639-sprogkode, der skal indlæses og bruges som basissprog                                                                                                                                                   |
| `theme`                  |            quizted           |           emerald           | Navn (eller godkendt URL) på det tema, der skal indlæses                                                                                                                                     |
| `reservation`            |               /              |            abcdef           | Reservationstoken, der skal bruges (i live-spil)                                                                                                                                             |
| `remote`                 |  quizwitz.tv | quizwitz.tv | CatLab Remote-server, der skal bruges                                                                                                                                                                           |
| `server`                 |               /              |              10             | ID på den CatLab Remote-server, der skal bruges (med automatisk registrering)                                                                                                                |
| `publisher`              |               /              |           QuizWitz          | Navnet på den profil, der er vært for spillet. Det bruges til at tilpasse visninger                                                                                                             |
| `smileys`                |               1              |              0              | Sæt til 0 for at slå smileys fra i spillet                                                                                                                                                                      |
| `outroPlayers`           |              12              |          5,4,3,1,2          | Angiver antallet (tal) ELLER rækkefølgen af spillere (kommasepareret liste af placeringer), der annonceres under spilafslutningen.                        |
| `focusPositions`         |               /              |            50,100           | Angiv en liste over ekstra placeringer, der vises i Quizmaster-appen                                                                                                                                            |
| `translations`           |               1              |              0              | Sæt til 0 for at slå indlæsning af oversættelser af den quiz, du indlæser, fra                                                                                                                                  |
| `cycleTranslations`      |               0              |              1              | Sæt til 1 for at skifte mellem alle tilgængelige sprog i quizzen for hvert spørgsmål                                                                                                                            |
| `showLongQuestions`      |               0              |              1              | Sæt til 1 for at vise 'Langt spørgsmål' på spilskærmen                                                                                                                                                          |
| `forcePiecharts`         |               0              |              1              | Sæt til 1 for altid at vise al feedback i lagkagediagrammer                                                                                                                                                     |
| `forceNoPiecharts`       |               0              |              1              | Sæt til 1 for aldrig at samle al feedback i lagkagediagrammer.                                                                                                                                  |
| `piechartPercentages`    |               0              |              1              | Sæt til 1 for at vise procenter i stedet for absolutte værdier i alle lagkagediagrammer                                                                                                                         |
| `monitors`               |               /              |            nl,fr            | Hvis den er angivet, oprettes der i live-spil separate koder til at vise en 'monitor' på det pågældende sprog for lokale quizmastere.                                                           |
| `allowLogin`             |               1              |              0              | Sæt til 0 for at forhindre brugere i at logge ind                                                                                                                                                               |
| `tracker`                |               1              |              0              | Sæt til 0 for at slå al sporing fra. Der vil ikke være nogen quizrapport                                                                                                                        |
| `random`                 |               0              |              1              | Sæt til 1 for at indlæse en 'tilfældig quiz'                                                                                                                                                                    |
| `delay`                  |               0              |            30000            | Angiv det antal millisekunder, al interaktion fra spillerne skal forsinkes (til livestreams)                                                                                                 |
| `countdown`              |              10              |              60             | Angiv det antal sekunder, spillet 'tæller ned' i præsentationstilstand.                                                                                                                         |
| `autoCountdown`          |               0              |              1              | Sæt til 1 for automatisk at starte nedtællingen, når den første spiller deltager i præsentationstilstand.                                                                                       |
| `autoRestart`            |               0              |              1              | Sæt til 1 for automatisk at genstarte spillet, når det er færdigt.                                                                                                                              |
| `waitForPlayers`         |               0              |              1              | Sæt til 1 for ikke at vente på spillere, når `autoCountdown` er slået til                                                                                                                                       |
| `askEmail`               |               1              |              0              | Sæt til 0 for ikke at bede om brugerens e-mailadresse i præsentationstilstand.                                                                                                                  |
| `beacon`                 |               /              |           my-beacn          | Angiv et CatLab Remote beacon-token, der kan bruges til automatisk at forbinde Quizmaster-appen.                                                                                                |
| `rounds`                 |               5              |              7              | Angiv det antal runder, der genereres i en tilfældig quiz.                                                                                                                                      |
| `questions`              |               7              |              7              | Angiv det antal spørgsmål, der genereres for hver runde i en tilfældig quiz.                                                                                                                    |
| `showListenQuotes`       |               1              |              0              | Sæt til 0 for at slå de 'sjove' "lyt nu efter"-citater fra.                                                                                                                                     |
| `shared`                 |               /              |  123:abcdef | Adgangstokenet for et delt element.                                                                                                                                                             |
| `music`                  |               1              |              0              | Sæt til 0 for at slå al (spil)musik fra. Uploadet lyd afspilles stadig.                                                                                      |
| `connectMusic`           |               1              |              0              | Sæt til 0 for at slå den (spil)musik fra, der spiller under 'tilslutnings'-fasen.                                                                                            |
| `slideshowVideoInterval` |              300             |             300             | Når der er uploadet videoer i tilslutningsskærm-fasen, angiver dette antallet af sekunder mellem hver videoafspilning.                                                                          |
| `slideshowImageInterval` |              20              |              60             | Når der er uploadet billeder i tilslutningsskærm-fasen, angiver dette antallet af sekunder, hvert billede vises.                                                                                |
| `skipOnAllAnswered`      |               1              |              0              | Sæt til 0 for at tilsidesætte elementets `skipOnAllAnswered`                                                                                                                                                    |
| `departments`            |               1              |            A,B,C            | Sæt til 0 for at slå indlæsning af afdelinger fra. Sæt til en kommasepareret liste af navne for automatisk at tildele alle spillere, der tilslutter sig, en tilfældig afdeling. |
| `showRankInDepartment`   |               1              |              0              | Sæt til 0 for at forhindre brugere i at se deres placering i deres afdeling.                                                                                                                    |
| `showDepartmentRanking`  |               1              |              0              | Sæt til 0 for ikke at vise afdelingsstillingen mellem runderne.                                                                                                                                 |
| `preloadVideo`           |               0              |              1              | Sæt til 1 for at gennemtvinge forudindlæsning af alle videoklip.                                                                                                                                |
| `n`                      |               /              |          `_prompt_`         | Angiv (eller bed om ved at sætte til `_prompt_`) et navn på den spillergruppe, der spiller spillet. Navnet sendes til quizrapporten.                         |

---

## 💡 Tips til brug

- Flere parametre kan kombineres med `&`
- Brug disse muligheder med **Avancerede spilindstillinger**, når du deler eller indlejrer links
- Mange muligheder er nyttige til optimering af livestreams eller flersprogede events

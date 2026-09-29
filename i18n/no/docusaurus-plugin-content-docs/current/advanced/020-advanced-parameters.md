---
id: advanced-player-parameters
title: Avanserte parametere
---

# ⚙️ Avanserte parametere

Du kan bruke parametere i spørrestrengen til å tilpasse hvordan QuizWitz-spillklienten oppfører seg. Disse parameterne kan legges til en hvilken som helst spillelenke med funksjonen **Avanserte spillinnstillinger**.

Eksempel:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Hva er spørrestrenger?](https://en.wikipedia.org/wiki/Query_string)

---

## Tilgjengelige parametere:

| Parameter                |            Standard            |           Eksempel          | Forklaring                                                                                                                                                                                                  |
| ------------------------ | :----------------------------: | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (nettleser) |              en             | ISO-639-språkkode som skal lastes inn og brukes som grunnspråk                                                                                                                                              |
| `theme`                  |             quizted            |           emerald           | Navn (eller godkjent URL) på temaet som skal lastes inn                                                                                                                                  |
| `reservation`            |                /               |            abcdef           | Reservasjonstoken som skal brukes (i Live-spill)                                                                                                                                         |
| `remote`                 |   quizwitz.tv  | quizwitz.tv | CatLab Remote-server som skal brukes                                                                                                                                                                        |
| `server`                 |                /               |              10             | ID for CatLab Remote-serveren som skal brukes (med automatisk oppdagelse)                                                                                                                |
| `publisher`              |                /               |           QuizWitz          | Navnet på profilen som arrangerer spillet. Dette brukes til å tilpasse visninger                                                                                                            |
| `smileys`                |                1               |              0              | Sett til 0 for å slå av smileyer i spillet                                                                                                                                                                  |
| `outroPlayers`           |               12               |          5,4,3,1,2          | Angir antallet (tall) ELLER rekkefølgen på spillerne (kommaseparert liste over plasseringer) som kunngjøres under spillavslutningen.                  |
| `focusPositions`         |                /               |            50,100           | Angi en liste med ekstra plasseringer som skal vises i Quizmaster-appen                                                                                                                                     |
| `translations`           |                1               |              0              | Sett til 0 for å slå av innlasting av oversettelser for quizen du laster inn                                                                                                                                |
| `cycleTranslations`      |                0               |              1              | Sett til 1 for å veksle mellom alle tilgjengelige språk i quizen for hvert spørsmål                                                                                                                         |
| `showLongQuestions`      |                0               |              1              | Sett til 1 for å vise «langt spørsmål» på spillskjermen                                                                                                                                                     |
| `forcePiecharts`         |                0               |              1              | Sett til 1 for alltid å vise all tilbakemelding i kakediagrammer                                                                                                                                            |
| `forceNoPiecharts`       |                0               |              1              | Sett til 1 for aldri å gruppere all tilbakemelding i kakediagrammer.                                                                                                                        |
| `piechartPercentages`    |                0               |              1              | Sett til 1 for å vise prosenter i stedet for absolutte verdier i alle kakediagrammer                                                                                                                        |
| `monitors`               |                /               |            nl,fr            | Hvis dette er angitt, opprettes det i Live-spill egne koder for å vise en «monitor» på det aktuelle språket for lokale quizmastere.                                                         |
| `allowLogin`             |                1               |              0              | Sett til 0 for å hindre brukere i å logge inn                                                                                                                                                               |
| `tracker`                |                1               |              0              | Sett til 0 for å slå av all sporing. Ingen quizrapport vil være tilgjengelig                                                                                                                |
| `random`                 |                0               |              1              | Sett til 1 for å laste inn en «tilfeldig quiz»                                                                                                                                                              |
| `delay`                  |                0               |            30000            | Angi antallet millisekunder all spillerinteraksjon skal forsinkes (for direktesendinger)                                                                                                 |
| `countdown`              |               10               |              60             | Angi antallet sekunder spillet skal «telle ned» i presentasjonsmodus.                                                                                                                       |
| `autoCountdown`          |                0               |              1              | Sett til 1 for å starte nedtellingen automatisk etter at den første spilleren har blitt med, i presentasjonsmodus.                                                                          |
| `autoRestart`            |                0               |              1              | Sett til 1 for å starte spillet på nytt automatisk når det er ferdig.                                                                                                                       |
| `waitForPlayers`         |                0               |              1              | Sett til 1 for ikke å vente på spillere når `autoCountdown` er aktivert                                                                                                                                     |
| `askEmail`               |                1               |              0              | Sett til 0 for ikke å be om brukerens e-postadresse i presentasjonsmodus.                                                                                                                   |
| `beacon`                 |                /               |           my-beacn          | Angi et beacon-token for CatLab Remote som kan brukes til å koble til Quizmaster-appen automatisk.                                                                                          |
| `rounds`                 |                5               |              7              | Angi antallet runder som skal genereres i en tilfeldig quiz.                                                                                                                                |
| `questions`              |                7               |              7              | Angi antallet spørsmål som skal genereres for hver runde i en tilfeldig quiz.                                                                                                               |
| `showListenQuotes`       |                1               |              0              | Sett til 0 for å slå av de «morsomme» «vennligst lytt»-sitatene.                                                                                                                            |
| `shared`                 |                /               |  123:abcdef | Tilgangstokenet til et delt element.                                                                                                                                                        |
| `music`                  |                1               |              0              | Sett til 0 for å slå av all (spill)musikk. Opplastet lyd spilles fortsatt av.                                                                            |
| `connectMusic`           |                1               |              0              | Sett til 0 for å slå av (spill)musikken som spilles i «tilkoblingsfasen».                                                                                                |
| `slideshowVideoInterval` |               300              |             300             | Når videoer er lastet opp i tilkoblingsskjermfasen, angir dette antallet sekunder mellom hver videoavspilling.                                                                              |
| `slideshowImageInterval` |               20               |              60             | Når bilder er lastet opp i tilkoblingsskjermfasen, angir dette antallet sekunder hvert bilde vises.                                                                                         |
| `skipOnAllAnswered`      |                1               |              0              | Sett til 0 for å overstyre elementenes `skipOnAllAnswered`                                                                                                                                                  |
| `departments`            |                1               |            A,B,C            | Sett til 0 for å slå av innlasting av avdelinger. Sett til en kommaseparert liste med navn for automatisk å fordele alle spillere som kobler til, på en tilfeldig avdeling. |
| `showRankInDepartment`   |                1               |              0              | Sett til 0 for å hindre brukere i å se plasseringen sin innenfor avdelingen.                                                                                                                |
| `showDepartmentRanking`  |                1               |              0              | Sett til 0 for å slå av visning av avdelingsrangeringen mellom rundene.                                                                                                                     |
| `preloadVideo`           |                0               |              1              | Sett til 1 for å tvinge forhåndsinnlasting av alle videofragmenter.                                                                                                                         |
| `n`                      |                /               |          `_prompt_`         | Angi (eller be om ved å sette til `_prompt_`) et navn på spillergruppen som spiller spillet. Dette navnet sendes til quizrapporten.                      |

---

## 💡 Tips til bruk

- Flere parametere kan kombineres med `&`
- Bruk disse alternativene med **Avanserte spillinnstillinger** når du deler eller bygger inn lenker
- Mange alternativer er nyttige for å optimalisere direktesendinger eller for flerspråklige arrangementer

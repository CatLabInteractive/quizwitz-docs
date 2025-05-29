---
id: advanced-player-parameters
title: Advanced parameters
---

# ⚙️ Advanced parameters

You can use query string parameters to customize how the QuizWitz game client behaves. These parameters can be appended to any game link using the **Advanced Game Settings** feature.

Example:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [What are query strings?](https://en.wikipedia.org/wiki/Query_string)

---

Available parameters:
---------------------
| Parameter                | Default     | Example     | Explanation
| -------------------------|:-----------:|:-----------:|-------------------------------------------------------
| `language`               | (browser)   | en          | ISO-639 language code to load and use as base language
| `theme`                  | quizted     | emerald     | Name (or approved URL) of the theme to load
| `reservation`            | /           | abcdef      | Reservation token to use (in live games)
| `remote`                 | quizwitz.tv | quizwitz.tv | CatLab Remote server to use
| `server`                 | /           | 10          | CatLab Remote server ID to use (with auto discover)
| `publisher`              | /           | QuizWitz    | Name of the publisher who is hosting the game. This is used for customizing views
| `smileys`                | 1           | 0           | Set to 0 to disable smileys in the game
| `outroPlayers`           | 12          | 5,4,3,1,2   | Defines the amount (number) OR the order of players (comma separated list of positions) that will be announced during the game outro.
| `focusPositions`         | /           | 50,100      | Define a list of additional positions that will be displayed in the quizmaster app
| `translations`           | 1           | 0           | Set to 0 to disable loading translations of the quiz you are loading
| `cycleTranslations`      | 0           | 1           | Set to 1 to cycle through all available languages of the quiz per question
| `showLongQuestions`      | 0           | 1           | Set to 1 to show the 'long question' on the game screen
| `forcePiecharts`         | 0           | 1           | Set to 1 to always show all feedback in pie-charts
| `forceNoPiecharts`       | 0           | 1           | Set to 1 to always to never group all feedback in pie-charts.
| `piechartPercentages`    | 0           | 1           | Set to 1 to show percentages instead of absolute values in all pie-charts
| `monitors`               | /           | nl,fr       | If set, in live games separate codes will be created to display a 'monitor' in that specific language for localized presenters.
| `allowLogin`             | 1           | 0           | Set to 0 to disallow users to login
| `tracker`                | 1           | 0           | Set to 0 to disable all tracking. No quiz report will be available
| `random`                 | 0           | 1           | Set to 1 to load a 'random quiz'
| `delay`                  | 0           | 30000       | Set the amount of milliseconds all player interaction will be delayed (for livestreams)
| `countdown`              | 10          | 60          | Set the amount of seconds the game will 'count down' in presentation mode.
| `autoCountdown`          | 0           | 1           | Set to 1 to automatically start countdown after first player join in presentation mode.
| `autoRestart`            | 0           | 1           | Set to 1 to automatically restart the game after it is finished.
| `waitForPlayers`         | 0           | 1           | Set to 1 to not wait for any players when `autoCountdown` is enabled
| `askEmail`               | 1           | 0           | Set to 0 to not ask for user email address in presentation mode.
| `beacon`                 | /           | my-beacn    | Set a CatLab Remote beacon token that can be used to automatically connect the quizmaster app.
| `rounds`                 | 5           | 7           | Set the amount of rounds that will be generated in a random quiz.
| `questions`              | 7           | 7           | Set the amount of questions that will be generated for each round in a random quiz.
| `showListenQuotes`       | 1           | 0           | Set to 0 to disable the 'funny' "please listen" quotes.
| `shared`                 | /           | 123:abcdef  | The access token of a shared entry.
| `music`                  | 1           | 0           | Set to 0 to disable all (game) music. Uploaded audio will still play.
| `connectMusic`           | 1           | 0           | Set to 0 to disable the (game) music that is playing during the 'connect' phase.
| `slideshowVideoInterval` | 300         | 300         | When videos are uploaded in the connect screen phase, this defines the amount of seconds between each video play.
| `slideshowImageInterval` | 20          | 60          | When images are uploaded in the connect screen phase, this defines the amount of seconds each image will be shown.
| `skipOnAllAnswered`      | 1           | 0           | Set to 0 to override the entries `skipOnAllAnswered`
| `departments`            | 1           | A,B,C       | Set to 0 to disable loading departments. Set to comma separated names list to automatically assign all connecting players to a random department.
| `showRankInDepartment`   | 1           | 0           | Set to 0 to disable users from seeing their rank within their department.
| `showDepartmentRanking`  | 1           | 0           | Set to 0 to disable showing the department ranking in between rounds.
| `preloadVideo`           | 0           | 1           | Set to 1 to force preloading all video fragments.
| `n`                      | /           | `_prompt_`  | Set (or request by setting to `_prompt_`) a name for the player group that is playing the game. This name is sent to the quiz report.

---

## 💡 Usage tips

- Multiple parameters can be combined using `&`
- Use these options with **Advanced Game Settings** when sharing or embedding links
- Many options are useful for live stream optimization or multilingual events

---
id: advanced-player-parameters
title: Erweiterte Parameter
---

# ⚙️ Erweiterte Parameter

Du kannst Abfragezeichenfolgen-Parameter verwenden, um anzupassen, wie sich der QuizWitz-Spielclient verhält. Diese Parameter können an jeden Spiel-Link angehängt werden, indem die Funktion **Erweiterte Spieleinstellungen** genutzt wird.

Beispiel:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Was sind Abfragezeichenfolgen?](https://en.wikipedia.org/wiki/Query_string)

---

## Verfügbare Parameter:

| Parameter                |           Standard           |           Beispiel          | Erklärung                                                                                                                                                                                                                         |
| ------------------------ | :--------------------------: | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (Browser) |              en             | ISO-639-Sprachcode, der als Basissprache geladen und verwendet wird                                                                                                                                                               |
| `theme`                  |            quizted           |           emerald           | Name (oder genehmigte URL) des zu ladenden Themes                                                                                                                                                              |
| `reservation`            |               /              |            abcdef           | Reservierungstoken zur Verwendung (bei Live-Spielen)                                                                                                                                                           |
| `remote`                 |  quizwitz.tv | quizwitz.tv | CatLab Remote Server zur Verwendung                                                                                                                                                                                               |
| `server`                 |               /              |              10             | CatLab Remote Server-ID zur Verwendung (mit automatischer Erkennung)                                                                                                                                           |
| `publisher`              |               /              |           QuizWitz          | Name des Herausgebers, der das Spiel hostet. Dies wird zur Anpassung der Ansichten verwendet                                                                                                                      |
| `smileys`                |               1              |              0              | Setze auf 0, um Smileys im Spiel zu deaktivieren                                                                                                                                                                                  |
| `outroPlayers`           |              12              |          5,4,3,1,2          | Legt die Anzahl (Zahl) ODER die Reihenfolge der Spieler (durch Komma getrennte Liste von Positionen) fest, die während des Spiel-Outros angekündigt werden.                 |
| `focusPositions`         |               /              |            50,100           | Definieren Sie eine Liste zusätzlicher Positionen, die in der quizmaster-App angezeigt werden sollen                                                                                                                              |
| `translations`           |               1              |              0              | Setze auf 0, um das Laden von Übersetzungen des geladenen Quiz zu deaktivieren                                                                                                                                                    |
| `cycleTranslations`      |               0              |              1              | Setze auf 1, um bei jeder Frage durch alle verfügbaren Sprachen des Quiz zu wechseln                                                                                                                                              |
| `showLongQuestions`      |               0              |              1              | Setze auf 1, um die "lange Frage" auf dem Spielfeld anzuzeigen                                                                                                                                                                    |
| `forcePiecharts`         |               0              |              1              | Setze auf 1, um immer alle Rückmeldungen als Tortendiagramme anzuzeigen                                                                                                                                                           |
| `forceNoPiecharts`       |               0              |              1              | Setze auf 1, um Rückmeldungen niemals in Tortendiagrammen zusammenzufassen.                                                                                                                                       |
| `piechartPercentages`    |               0              |              1              | Setze auf 1, um in allen Tortendiagrammen Prozentwerte anstelle von absoluten Zahlen anzuzeigen                                                                                                                                   |
| `monitors`               |               /              |            nl,fr            | Wenn gesetzt, werden bei Live-Spielen separate Codes erstellt, um einen "Monitor" in dieser Sprache für lokalisierte Moderatoren anzuzeigen.                                                                      |
| `allowLogin`             |               1              |              0              | Setze auf 0, um das Einloggen der Nutzer zu verhindern                                                                                                                                                                            |
| `tracker`                |               1              |              0              | Setze auf 0, um jegliches Tracking zu deaktivieren. Es wird kein Quizbericht verfügbar sein                                                                                                                       |
| `random`                 |               0              |              1              | Setze auf 1, um ein "zufälliges Quiz" zu laden                                                                                                                                                                                    |
| `delay`                  |               0              |            30000            | Legt die Anzahl Millisekunden fest, um die alle Spielerinteraktionen verzögert werden (für Livestreams)                                                                                                        |
| `countdown`              |              10              |              60             | Legt die Anzahl Sekunden fest, die das Spiel im Präsentationsmodus herunterzählt.                                                                                                                                 |
| `autoCountdown`          |               0              |              1              | Setze auf 1, um den Countdown automatisch nach dem ersten Spielerbeitritt im Präsentationsmodus zu starten.                                                                                                       |
| `autoRestart`            |               0              |              1              | Setze auf 1, um das Spiel nach Beendigung automatisch neu zu starten.                                                                                                                                             |
| `waitForPlayers`         |               0              |              1              | Setze auf 1, um bei aktiviertem `autoCountdown` nicht auf Spieler zu warten                                                                                                                                                       |
| `askEmail`               |               1              |              0              | Setze auf 0, um im Präsentationsmodus nicht nach der E-Mail-Adresse des Nutzers zu fragen.                                                                                                                        |
| `beacon`                 |               /              |           my-beacn          | Setze ein CatLab Remote Beacon-Token, das zum automatischen Verbinden der quizmaster-App verwendet werden kann.                                                                                                   |
| `rounds`                 |               5              |              7              | Lege die Anzahl der Runden fest, die in einem Zufallsquiz generiert werden.                                                                                                                                       |
| `questions`              |               7              |              7              | Lege die Anzahl der Fragen fest, die für jede Runde in einem Zufallsquiz generiert werden.                                                                                                                        |
| `showListenQuotes`       |               1              |              0              | Setze auf 0, um die "lustigen" "bitte hören"-Zitate zu deaktivieren.                                                                                                                                              |
| `shared`                 |               /              |  123:abcdef | Der Zugriffstoken eines geteilten Eintrags.                                                                                                                                                                       |
| `music`                  |               1              |              0              | Setze auf 0, um alle (Spiel-)Musik zu deaktivieren. Hochgeladene Audiodateien werden weiterhin abgespielt.                                                                     |
| `connectMusic`           |               1              |              0              | Setze auf 0, um die (Spiel-)Musik zu deaktivieren, die während der "Verbindungs"-Phase spielt.                                                                                                 |
| `slideshowVideoInterval` |              300             |             300             | Wenn Videos in der Verbindungsbildschirm-Phase hochgeladen werden, definiert dies die Anzahl der Sekunden zwischen jedem Video.                                                                                   |
| `slideshowImageInterval` |              20              |              60             | Wenn Bilder in der Verbindungsbildschirm-Phase hochgeladen werden, definiert dies die Anzahl der Sekunden, die jedes Bild angezeigt wird.                                                                         |
| `skipOnAllAnswered`      |               1              |              0              | Setze auf 0, um die `skipOnAllAnswered`-Einstellung des Eintrags zu überschreiben                                                                                                                                                 |
| `departments`            |               1              |            A,B,C            | Setze auf 0, um das Laden von Abteilungen zu deaktivieren. Setze auf eine durch Komma getrennte Namensliste, um alle sich verbindenden Spieler automatisch einer zufälligen Abteilung zuzuweisen. |
| `showRankInDepartment`   |               1              |              0              | Setze auf 0, damit Nutzer ihre Rangfolge innerhalb ihrer Abteilung nicht sehen können.                                                                                                                            |
| `showDepartmentRanking`  |               1              |              0              | Setze auf 0, um die Anzeige der Abteilungs-Rangliste zwischen den Runden zu deaktivieren.                                                                                                                         |
| `preloadVideo`           |               0              |              1              | Setze auf 1, um das Vorladen aller Videofragmente zu erzwingen.                                                                                                                                                   |
| `n`                      |               /              |          `_prompt_`         | Setze (oder fordere durch Setzen auf `_prompt_`) einen Namen für die Spielergruppe, die das Spiel spielt, an. Dieser Name wird an den Quizbericht gesendet.                    |

---

## 💡 Tipps zur Verwendung

- Mehrere Parameter können mit `&` kombiniert werden
- Nutze diese Optionen mit **Erweiterte Spieleinstellungen**, wenn du Links teilst oder einbettest
- Viele Optionen sind nützlich für Live-Stream-Optimierung oder mehrsprachige Events

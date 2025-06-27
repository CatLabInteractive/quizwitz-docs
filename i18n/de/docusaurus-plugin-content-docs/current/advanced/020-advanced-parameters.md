---
id: advanced-player-parameters
title: Erweiterte Parameter
---

# ⚙️ Erweiterte Parameter

Du kannst Abfragezeichenketten-Parameter verwenden, um das Verhalten des QuizWitz-Spielclients anzupassen. Diese Parameter können an jeden Spiel-Link angehängt werden, indem du die Funktion **Erweiterte Spieleinstellungen** nutzt.

Beispiel:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Was sind Abfragezeichenketten?](https://en.wikipedia.org/wiki/Query_string)

---

## Verfügbare Parameter:

| Parameter                |         Standardwert         |           Beispiel          | Erklärung                                                                                                                                                                                                                     |
| ------------------------ | :--------------------------: | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (Browser) |              en             | ISO-639-Sprachcode, der als Basissprache geladen und verwendet wird                                                                                                                                                           |
| `theme`                  |            quizted           |           emerald           | Name (oder zugelassene URL) des zu ladenden Themes                                                                                                                                                         |
| `reservation`            |               /              |            abcdef           | Reservierungstoken zur Verwendung (bei Live-Spielen)                                                                                                                                                       |
| `remote`                 |  quizwitz.tv | quizwitz.tv | CatLab Remote-Server zur Verwendung                                                                                                                                                                                           |
| `server`                 |               /              |              10             | CatLab Remote-Server-ID zur Verwendung (mit automatischer Erkennung)                                                                                                                                       |
| `publisher`              |               /              |           QuizWitz          | Name des Herausgebers, der das Spiel veranstaltet. Dies wird für die Anpassung von Ansichten verwendet                                                                                                        |
| `smileys`                |               1              |              0              | Setze auf 0, um Smileys im Spiel zu deaktivieren                                                                                                                                                                              |
| `outroPlayers`           |              12              |          5,4,3,1,2          | Definiert die Menge (Anzahl) ODER die Reihenfolge der Spieler (durch Komma getrennte Liste von Positionen), die während des Spiel-Outros angekündigt werden.            |
| `focusPositions`         |               /              |            50,100           | Definiert eine Liste zusätzlicher Positionen, die in der quizmaster-App angezeigt werden                                                                                                                                      |
| `translations`           |               1              |              0              | Setze auf 0, um das Laden von Übersetzungen des geladenen Quiz zu deaktivieren                                                                                                                                                |
| `cycleTranslations`      |               0              |              1              | Setze auf 1, um bei jeder Frage durch alle verfügbaren Sprachen des Quiz zu wechseln                                                                                                                                          |
| `showLongQuestions`      |               0              |              1              | Setze auf 1, um die "lange Frage" auf dem Spielbildschirm anzuzeigen                                                                                                                                                          |
| `forcePiecharts`         |               0              |              1              | Setze auf 1, um immer alle Rückmeldungen in Tortendiagrammen anzuzeigen                                                                                                                                                       |
| `forceNoPiecharts`       |               0              |              1              | Setze auf 1, um niemals alle Rückmeldungen in Tortendiagrammen zu gruppieren.                                                                                                                                 |
| `piechartPercentages`    |               0              |              1              | Setze auf 1, um in allen Tortendiagrammen Prozentsätze anstelle von absoluten Werten anzuzeigen                                                                                                                               |
| `monitors`               |               /              |            nl,fr            | Wenn gesetzt, werden in Live-Spielen separate Codes erstellt, um einen "Monitor" in dieser spezifischen Sprache für lokalisierte Moderatoren anzuzeigen.                                                      |
| `allowLogin`             |               1              |              0              | Setze auf 0, um Benutzern das Einloggen zu untersagen                                                                                                                                                                         |
| `tracker`                |               1              |              0              | Setze auf 0, um jegliches Tracking zu deaktivieren. Es wird kein Quiz-Bericht verfügbar sein                                                                                                                  |
| `random`                 |               0              |              1              | Setze auf 1, um ein "zufälliges Quiz" zu laden                                                                                                                                                                                |
| `delay`                  |               0              |            30000            | Legt die Anzahl der Millisekunden fest, um die alle Spieleraktionen verzögert werden (für Livestreams)                                                                                                     |
| `countdown`              |              10              |              60             | Legt die Anzahl der Sekunden fest, die das Spiel im Präsentationsmodus herunterzählt.                                                                                                                         |
| `autoCountdown`          |               0              |              1              | Setze auf 1, um den Countdown im Präsentationsmodus automatisch nach dem ersten Beitritt eines Spielers zu starten.                                                                                           |
| `autoRestart`            |               0              |              1              | Setze auf 1, um das Spiel automatisch neu zu starten, nachdem es beendet wurde.                                                                                                                               |
| `waitForPlayers`         |               0              |              1              | Setze auf 1, um bei aktiviertem `autoCountdown` nicht auf Spieler zu warten                                                                                                                                                   |
| `askEmail`               |               1              |              0              | Setze auf 0, um im Präsentationsmodus nicht nach der E-Mail-Adresse des Nutzers zu fragen.                                                                                                                    |
| `beacon`                 |               /              |           my-beacn          | Setzt ein CatLab Remote-Beacon-Token, das verwendet werden kann, um die quizmaster-App automatisch zu verbinden.                                                                                              |
| `rounds`                 |               5              |              7              | Legt die Anzahl der Runden fest, die in einem Zufallsquiz generiert werden.                                                                                                                                   |
| `questions`              |               7              |              7              | Legt die Anzahl der Fragen fest, die für jede Runde in einem Zufallsquiz generiert werden.                                                                                                                    |
| `showListenQuotes`       |               1              |              0              | Setze auf 0, um die „lustigen“ "Bitte hör zu"-Zitate zu deaktivieren.                                                                                                                                         |
| `shared`                 |               /              |  123:abcdef | Der Zugriffstoken eines freigegebenen Eintrags.                                                                                                                                                               |
| `music`                  |               1              |              0              | Setze auf 0, um alle (Spiel-)Musik zu deaktivieren. Hochgeladene Audios werden weiterhin abgespielt.                                                                       |
| `connectMusic`           |               1              |              0              | Setze auf 0, um die (Spiel-)Musik während der "Connect"-Phase zu deaktivieren.                                                                                                             |
| `slideshowVideoInterval` |              300             |             300             | Wenn Videos in der Connect-Screen-Phase hochgeladen werden, legt dies die Anzahl der Sekunden zwischen den einzelnen Videoabspielen fest.                                                                     |
| `slideshowImageInterval` |              20              |              60             | Wenn Bilder in der Connect-Screen-Phase hochgeladen werden, definiert dies die Anzahl der Sekunden, die jedes Bild angezeigt wird.                                                                            |
| `skipOnAllAnswered`      |               1              |              0              | Setze auf 0, um die Einstellung `skipOnAllAnswered` des Eintrags zu überschreiben                                                                                                                                             |
| `departments`            |               1              |            A,B,C            | Setze auf 0, um das Laden von Abteilungen zu deaktivieren. Setze auf eine durch Kommas getrennte Namensliste, um alle verbindenden Spieler automatisch einer zufälligen Abteilung zuzuordnen. |
| `showRankInDepartment`   |               1              |              0              | Setze auf 0, damit Nutzer ihren Rang innerhalb ihrer Abteilung nicht sehen.                                                                                                                                   |
| `showDepartmentRanking`  |               1              |              0              | Setze auf 0, um die Anzeige der Abteilungs-Rangliste zwischen den Runden zu deaktivieren.                                                                                                                     |
| `preloadVideo`           |               0              |              1              | Setze auf 1, um das Vorladen aller Videofragmente zu erzwingen.                                                                                                                                               |
| `n`                      |               /              |          `_prompt_`         | Lege einen Namen für die Spielergruppe fest (oder fordere ihn an, indem du `_prompt_` setzt), die das Spiel spielt. Dieser Name wird an den Quiz-Bericht gesendet.         |

---

## 💡 Nutzungstipps

- Mehrere Parameter können mit `&` kombiniert werden
- Nutze diese Optionen mit den **Erweiterten Spieleinstellungen**, wenn du Links teilst oder einbindest
- Viele Optionen sind für Live-Stream-Optimierungen oder mehrsprachige Events nützlich

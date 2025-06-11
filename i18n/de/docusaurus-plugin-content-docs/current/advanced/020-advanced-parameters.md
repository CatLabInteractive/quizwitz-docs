---
id: advanced-player-parameters
title: Erweiterte Parameter
---

# ⚙️ Erweiterte Parameter

Sie können Abfrage-String-Parameter verwenden, um das Verhalten des QuizWitz Spiel-Clients anzupassen. Diese Parameter können mit den **Erweiterten Spieleinstellungen** an jeden Link angehängt werden.

Beispiel:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Was sind Abfragezeichen?](https://en.wikipedia.org/wiki/Query_string)

---

## Verfügbare Parameter:

| Parameter                |           Standard           |           Beispiel          | Erklärung                                                                                                                                                                                                        |
| ------------------------ | :--------------------------: | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (Browser) |              de             | ISO-639 Sprachcode zum Laden und Benutzen als Basissprache                                                                                                                                                       |
| `theme`                  |           quiziert           |         smaragdgrün         | Name (oder genehmigte URL) des zu ladenden Themes                                                                                                                                             |
| 'Reservierung'           |               /              |            abcdef           | Zu verwendendes Reservierungstoken (in Live-Spielen)                                                                                                                                          |
| "remote"                 |  quizwitz.tv | quizwitz.tv | Zu verwendender CatLab Remote-Server                                                                                                                                                                             |
| `Server`                 |               /              |              10             | Zu verwendende CatLab Remote Server ID (mit Auto-Entdeckung)                                                                                                                                  |
| `publisher`              |               /              |           QuizWitz          | Name des Verlegers, der das Spiel veranstaltet. Dies wird zum Anpassen der Ansichten verwendet                                                                                                   |
| "Smileys"                |               1              |              0              | Setze 0 um Smileys im Spiel zu deaktivieren                                                                                                                                                                      |
| `outroPlayer`            |              12              |          5,4,3,1,2          | Definiert den Betrag (Zahl) ODER die Reihenfolge der Spieler (kommaseparierte Positionsliste), der während des Spiels bekannt gegeben wird.                |
| "Fokuspositionen"        |               /              |            50,100           | Definieren Sie eine Liste zusätzlicher Positionen, die in der Quizmaster-App angezeigt werden                                                                                                                    |
| `translations`           |               1              |              0              | 0 deaktiviert das Laden von Übersetzungen des von Ihnen geladenen Quiz                                                                                                                                           |
| "cycleTranslations"      |               0              |              1              | Setze auf 1 um durch alle verfügbaren Sprachen des Quiz pro Frage zu fahren                                                                                                                                      |
| `showLongQuestions`      |               0              |              1              | Auf 1 gesetzt, um die 'lange Frage' auf dem Spielbildschirm zu zeigen                                                                                                                                            |
| "forcePiecharts"         |               0              |              1              | Auf 1 gesetzt, um immer alle Rückmeldungen in Tortendiagrammen anzuzeigen                                                                                                                                        |
| `forceNoPiecharts`       |               0              |              1              | Auf 1 setzen um nie alle Rückmeldungen in Tortendiagrammen zu gruppieren.                                                                                                                        |
| `piechartPercentages`    |               0              |              1              | Auf 1 gesetzt, um Prozentsätze statt Absolutwerte in allen pie-charts anzuzeigen                                                                                                                                 |
| `Monitore`               |               /              |            nl,fr            | Wenn aktiviert, werden in Live-Spielen separate Codes erzeugt, um einen "Monitor" in dieser speziellen Sprache für lokalisierte Moderatoren anzuzeigen.                                          |
| 'allowLogin'             |               1              |              0              | Setze auf 0, um Benutzern das Anmelden zu verbieten                                                                                                                                                              |
| "tracker"                |               1              |              0              | Setze 0 um alle Tracking zu deaktivieren. Es wird kein Quizbericht verfügbar sein                                                                                                                |
| "zufällig"               |               0              |              1              | Auf 1 gesetzt, um 'zufälliges Quiz' zu laden                                                                                                                                                                     |
| "Verzögerung"            |               0              |            30000            | Legen Sie die Anzahl der Millisekunden fest, die alle Spieler-Interaktion verzögert wird (für Livestreams)                                                                                    |
| `countdown`              |              10              |              60             | Legen Sie die Anzahl der Sekunden fest, die das Spiel im Präsentationsmodus "zählt" wird.                                                                                                        |
| "autoCountdown"          |               0              |              1              | Auf 1 setzen um automatisch Countdown zu starten, nachdem der erste Spieler im Präsentationsmodus teilnimmt.                                                                                     |
| "AutoNeustart"           |               0              |              1              | Setze auf 1, um das Spiel automatisch neu zu starten, nachdem es beendet ist.                                                                                                                    |
| `waitForPlayer`          |               0              |              1              | Setze auf 1 um nicht auf Spieler zu warten, wenn `autoCountdown` aktiviert ist                                                                                                                                   |
| `askEmail`               |               1              |              0              | Legen Sie 0 fest, um keine Benutzer-E-Mail-Adresse im Präsentationsmodus zu fragen.                                                                                                              |
| "Leuchtfeuer"            |               /              |       mein Leuchtfeuer      | Legen Sie ein CatLab Remote Beacon Token fest, mit dem die Quizmaster App automatisch verbunden werden kann.                                                                                     |
| Runden                   |               5              |              7              | Legen Sie die Anzahl der Runden fest, die in einem zufälligen Quiz generiert werden.                                                                                                             |
| `Fragen`                 |               7              |              7              | Legen Sie die Anzahl der Fragen fest, die für jede Runde in einem zufälligen Quiz generiert werden.                                                                                              |
| `showListenQuotes`       |               1              |              0              | Auf 0 setzen um die Anführungszeichen 'lustig' zu deaktivieren.                                                                                                                                  |
| "geteilt"                |               /              |  123:abcdef | Das Zugriffstoken eines geteilten Eintrags.                                                                                                                                                      |
| "music"                  |               1              |              0              | Auf 0 gesetzt, um alle (Spiel) Musik zu deaktivieren. Hochgeladene Audiodateien werden weiterhin abgespielt.                                                  |
| `connectMusic`           |               1              |              0              | Auf 0 setzen, um die (Spiel-)Musik zu deaktivieren, die während der "Verbindung" Phase abgespielt wird.                                                                       |
| `slideshowVideoInterval` |              300             |             300             | Wenn Videos in der Verbindungsphase hochgeladen werden, legt dies die Anzahl der Sekunden zwischen den einzelnen Videospielen fest.                                                              |
| SlideshowImageIntervall  |              20              |              60             | Wenn Bilder in der Verbindungsphase hochgeladen werden, legt dies die Anzahl der Sekunden fest, die jedes Bild angezeigt wird.                                                                   |
| `skipOnAllAnswered`      |               1              |              0              | Auf 0 gesetzt, um die Einträge `skipOnAllAnswered` zu überschreiben                                                                                                                                              |
| `Abteilungen`            |               1              |            A,B,C            | Legt 0 fest, um Ladeabteilungen zu deaktivieren. Auf Komma getrennte Namensliste setzen, um automatisch alle verbundenen Spieler einer zufälligen Abteilung zuzuordnen.          |
| `showRankInDepartment`   |               1              |              0              | Auf 0 gesetzt, um Benutzer davon abzuhalten, ihren Rang innerhalb ihrer Abteilung zu sehen.                                                                                                      |
| `showDepartmentRang`     |               1              |              0              | 0 deaktiviert die Anzeige des Abteilungsranglings zwischen Runden.                                                                                                                               |
| "preloadVideo"           |               0              |              1              | Auf 1 gesetzt, um das Vorladen aller Videofragmente zu erzwingen.                                                                                                                                |
| `n`                      |               /              |          `_prompt_`         | Setze (oder beantrage, indem du auf `_prompt_`) einen Namen für die Spielergruppe setzst, die das Spiel spielt. Dieser Name wird an den Quizbericht gesendet. |

---

## 💡 Verwendungstipps

- Mehrere Parameter können mit `&` kombiniert werden
- Verwenden Sie diese Optionen mit **Erweiterten Spieleinstellungen** beim Teilen oder Einbetten von Links
- Viele Optionen sind nützlich für Live-Stream-Optimierung oder mehrsprachige Ereignisse

---
id: theme-design-guide
title: Design-Leitfaden
---

# Design-Leitfaden

[Theming](/docs/advanced/theming) erklärt, wie ein QuizWitz Theme erstellt wurde: in Adobe Animate, exportiert als CreateJS Bibliothek. Diese Seite behandelt den Schritt davor — **gestalten** das Theme.

Es ist für einen Grafikdesigner geschrieben, und es geht davon aus, dass das Design und die Animate Produktion von verschiedenen Personen durchgeführt werden. Nur wenige Designer arbeiten noch in Adobe Animate, so dass eine gemeinsame Arrangements ist, dass ein Designer liefert Kunstwerk und jemand anderes montiert das Thema. Das funktioniert gut, aber nur, wenn das Kunstwerk in einer Form übergeben wird, die das Gebäude tatsächlich benutzen kann. Diese Seite beschreibt diese Form.

:::tip
Wenn du nur Farben, Schriften und Hintergründe ändern willst, brauchst du nichts davon — anpasse stattdessen das [Smaragdtheme](/docs/advanced/emerald-theme).
:::

---

## Was Sie entwerfen

Ein QuizWitz-Spiel wird von einem ganzen Raum auf einmal gespielt, wobei immer zwei Bildschirme involviert sind:

- **Der gemeinsame Bildschirm** — ein Projektor oder TV, 1920 × 1080. Fragen und Antworten, wie sich die Antworten des Zimmers ausgebreitet haben, die Rangliste. Das ist das, was Sie entwerfen.
- **Das Telefon jedes Spieler**, wo er seine Antwort eintippt. Das ist eine Webseite mit einem festen Layout; sie ist von Ihren Farben und Schriften entworfen, nicht von Ihnen angeordnet.

Ein Thema ist die komplette visuelle Haut des gemeinsamen Bildschirms: Hintergrund, Typographie, Farbe, die Art und Weise, wie eine Frage mit vier Optionen präsentiert wird, wie sich die Rangliste zusammensetzt, wie eine Runde angekündigt wird.

---

## Sieben Frames

Das Spiel hat ungefähr 25 unterschiedliche Bildschirmzustände, aber die meisten sind Varianten des gleichen Layouts. **Du entwirfst sieben Bilder; der Rest wird von ihnen abgeleitet.** Das ist keine Verknüpfung — es ist so, wie der Motor funktioniert. Ein Bildschirm, der kein eigenes Kunstwerk hat, fällt auf einen allgemeinen Rahmen zurück.

| #     | Frame                     | Was ist drauf                                                                                                                                                                                                                                    | Was daraus abgeleitet wird                                                                                                                                      |
| ----- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Allgemeiner Rahmen**    | Der Hintergrund, ein Header-Titel und ein leerer Inhaltsbereich darunter. Die visuelle Vorlage für das gesamte Thema.                                                                                            | Dreizehn Bildschirmzustände: runde Erklärung, Einführung, Multiple-Choice-Variante, lange Fragen, Sitzwarnungen, Einstellungen. |
| **2** | **Bildschirm verbinden**  | Was der Raum bewirkt, um beizutreten: fünf Instruktionszeilen, Raum für einen Join-Code oder QR-Code und eine Liste der Spieler, die eindringen.                                                                 | Auch der Wartebildschirm, der angezeigt wird, während der Quizmaster die Frage vorliest.                                                        |
| **3** | **Fragenbildschirm**      | Die Frage, ein Timer, vier Antwort-Optionen, eine Feedback-Linie. Der Bildschirm des Zimmers sieht am längsten.                                                                                                  | —                                                                                                                                                               |
| **4** | **Frage mit Media**       | Das gleiche, um ein Bild oder Video angeordnet. Kann eine andere Komposition als Rahmen 3 sein.                                                                                                                  | Auch die Vollbildmedien-Variante und die Medien, die zwischen den Fragen gezeigt werden.                                                        |
| **5** | **Antwortbildschirm**     | Welche Antwort war richtig, wie die Antworten des Raumes über die Optionen verteilt wurden und eine Feedback-Linie.                                                                                                              | Auch der Antwortbildschirm für offene Fragen und für Fragen mit Medien.                                                                         |
| **6** | **Ranglisten und Sieger** | Eine Liste von Spielern mit Namen, Punktzahl und Position. Liefert die **Spieler Reihe** als separates wiederverwendbares Element — es wird sechs bis zehn Mal wiederholt.                                       | Sowohl die Rangliste zwischen Runden und dem Finalsieger.                                                                                       |
| **7** | **Runde Intro**           | Eine kurze Ankündigung pro Runde Kategorie. Es gibt sechs Kategorien: Wissenschaft & Technologie, Natur, Unterhaltung & Musik, Sport, Kunst, Geschichte. | Alle sechs Kategorien.                                                                                                                          |

### Was für Sie entschieden wird

- \*\*Die individuellen Kontrollen. \* Schaltflächen in ihren vier Zuständen, die richtigen und falschen Symbole, die Scrollbar, die Kontrollkästchen und die Auswahl werden von dem abgeleitet, was in Ihren sieben Bildern erscheint. Stellen Sie sicher, dass irgendwo ein Button erscheint, so dass es einen Stil zu entnehmen gibt.
- **Die Handys der Spieler.** Ein festgelegtes HTML-Layout aus deiner Farbliste und Schriftarten.
- **Welche Bildschirme fallen zurück auf den allgemeinen Rahmen, und wie.**
- **Wie die sechs Kategorien auf das runde Einführungsobjekt zuordnen.**
- **Dauer aller Zeit- und Animationen.**

### Ein Zeichen ist optional

Das Thema QuizWitz hat einen Charakter, der spricht und reagiert. Nichts erfordert eines: der Theme-Validator warnt nur vor dem `ted` Element, ohne es fehlschlägt. Das [Smaragdtheme](/docs/advanced/emerald-theme) verschickt ohne Charakter, und das Ablegen entfernt die teuerste Animationsarbeit — Lippensync, Augen, Arme.

Ohne Charakter wird das runde Intro zu einem grafischen, typographischen oder illustrierenden Moment. Zwei Ansätze halten die Arbeit proportional bei: eine Komposition mit einer Farb- oder Symbolvariante pro Kategorie, oder eine einzige universelle Ankündigung mit nur dem runden Namen. Sechs wirklich unterschiedliche Intros sind eine Menge Arbeit für ein paar Sekunden Bildschirmzeit.

---

## Wie diese Rahmen in der Praxis aussehen

Die untenstehenden Bildschirme stammen von einem vorhandenen Theme. Sie sind hier, um **was auf jedem Bildschirm passiert**; sie sind keine Stilreferenz.

### Rahmen 1 — der allgemeine Rahmen

Zwei sehr unterschiedliche Spielmomente auf dem gleichen Vorlagen: ein Fragepicker und eine Punkteleiter. Es zeigt, wie viel Arbeit ein Frame für Sie leistet und warum sein Inhaltsbereich geräumig und neutral sein muss.

![Der allgemeine Rahmen mit einem dreizeiligen Fragenwähler](/images/theme-design/frame1-general-multiquestion.png)

![Der allgemeine Rahmen mit einer fünfstufigen Punktestand](/images/theme-design/frame1-general-strikeladder.png)

### Rahmen 2 — verbinden und warten

Mit einem Client-Logo neben dem Join-Code und ohne eines, wo das eigene Artwork des Themes den Bildschirm trägt:

![Bildschirm mit einem Client-Logo verbinden](/images/theme-design/frame2-connect.png)

![Bildschirm ohne Client-Logo verbinden](/images/theme-design/frame2-connect-nologo.png)

Der folgende Wartebildschirm wird angezeigt, während der Quizmaster die Frage vorlesen wird:

![Warte Bildschirm](/images/theme-design/frame2-pending.png)

### Rahmen 3 — der Fragenbildschirm

Vier Optionen, die Frage oben, der Timer in der Mitte. Beachten Sie, dass eine Option nur aus einem Emoji bestehen kann.

![Fragenbildschirm mit vier Textoptionen](/images/theme-design/frame3-question-options.png)

![Fragenbildschirm mit Flaggen als Antwortoptionen](/images/theme-design/frame3-question-emoji.png)

Eine Frage ohne Optionen – Spieler geben ihre Antwort auf ihr Telefon ein. Der Bildschirm ist fast leer und der Timer wird das Hauptelement:

![Frage nur mit der Frage und einem großen Timer öffnen](/images/theme-design/frame3-question-open.png)

Der Moment ist abgelaufen. Der Feedback-Ballon erscheint über dem Bildschirm und der Timer ist leer:

![Fragenbildschirm zeigt den Zeit-up-Zustand](/images/theme-design/frame3-question-timeout.png)

### Rahmen 4 — Medien

Die gleichen Teile, umstrukturiert um einen Medienbereich, mit den Optionen nach links und rechts:

![Fragenbildschirm mit einem Bild in der Mitte](/images/theme-design/frame4-question-attachment.png)

Medien allein, Bildschirm füllen:

![Vollbild-Media](/images/theme-design/frame4-attachment-fullscreen.png)

### Rahmen 5 — der Antwortbildschirm

Dieser Bildschirm durchläuft drei Momente. Zuerst der Spread, mit nichts markiert:

![Antwort-Bildschirm zeigt die Spread](/images/theme-design/frame5-answer-mc-spread.png)

Dann wird die richtige Option angekreuzt und die falschen angekreuzt:

![Bildschirm mit der richtigen Option beantworten](/images/theme-design/frame5-answer-mc-reveal.png)

Und wenn die Frage eine Erklärung trägt, fällt ein Ballon über das Kunstwerk. Verlasse Platz für es — es landet auf dem, was du gestaltet hast:

![Antwort-Bildschirm mit der Erklärungsballon](/images/theme-design/frame5-answer-mc-explanation.png)

Bei einer kleinen Gruppe ist der gleiche Moment eher eine Punkteliste als ein Diagramm:

![Antwort-Bildschirm für eine kleine Gruppe](/images/theme-design/frame5-answer-mc-small.png)

Für eine offene Frage zeigt das Diagramm, wie viele Spieler es richtig gemacht haben:

![Antwort-Bildschirm für eine offene Frage](/images/theme-design/frame5-answer-open.png)

### Rahmen 6 — Rangliste und Gewinner

Die Rangliste nach einer Runde. Die Spielerzeile ist das Element, das sich wiederholt: Position, Avatar, Name, Punktzahl.

![Steht mit sechs Spielerzeilen](/images/theme-design/frame6-roundoutro.png)

Der endgültige Countdown benennt jeweils einen Spieler, vom letzten Platz bis zum ersten – Platz, Partitur und Teamname im Scheinwerfer:

![Der Gewinner Countdown benennt einen Spieler](/images/theme-design/frame6-winner-countdown.png)

![Die endgültige Position](/images/theme-design/frame6-winner.png)

### Rahmen 7 — die runde Einleitung

Ein Design, optional mit einer Variante pro Kategorie:

![Round Intro für die Naturkategorie](/images/theme-design/frame7-roundintro-nature.png)

![Round Intro für die Wissenschaftskategorie](/images/theme-design/frame7-roundintro-science.png)

---

## Designregeln

Nichts davon schränkt Ihr visuelles Design ein. Es geht darum, wie die Datei erstellt wird.

### Format

- **1920 × 1080 Pixel**, genau. Ein Frame pro Bildschirm.
- Arbeiten Sie **in Vektor** wo Sie können. Wo Sie Raster verwenden (Fotos, Texturen): mindestens 2× Anzeigegröße.
- Das Spiel läuft bei **24 Frames pro Sekunde**. Relevant für Bewegungsideen.
- Halten Sie einen **5% Marsch** an den Rändern frei von wichtigen Informationen. Projektoren anbauen.

### Ebenenstruktur — die Regel, die am meisten wichtig ist

**Alles, was sich bewegen kann, erscheint oder den Wert ändern kann, sitzt auf der eigenen benannten Ebene.** Nichts verschmolzen, nichts abgeflacht.

In der Praxis: Die vier Antwortoptionen sind vier getrennte Ebenen, nicht eine. Der Timer ist vom Hintergrund getrennt. Ein Knopf und seine Bezeichnung sind zwei Elemente. Eine Spielerzeile ist eine Gruppe, die dupliziert werden kann.

Was verschmelzen kann: rein dekoratives Hintergrundbild, das als ein einzelnes Stillbild funktioniert.

Dies ist die einzige Regel, die wirklich weh tut, wenn sie nicht befolgt wird – das Kunstwerk muss dann auseinander gezogen oder neu gezogen werden, die genau die Kosten sind, die diese Regelung vermeiden soll.

### Effekte, die nicht überleben

Die Engine basiert auf einem HTML5 Leinwand. Diese müssen **im Bild gebacken** oder ausgelassen werden:

- Live Unschärfe, Schlagschatten und leuchten als Filter → liefern sie als Kunstwerk
- Modi mischen (mehrfach, Bildschirm, Overlay) → sie flach auflösen
- Ebeneneffekte und Ebenen anpassen
- Verläufe **inside** Text oder Text mit einer Umrisslinie pro Zeichen
- Masken, die sich pro Rahmen ändern

Verläufe in Form sind gut. Transparenz ist in Ordnung. Schatten als fixes Kunstwerk sind in Ordnung.

### Wie sich Text verhält

Hier unterscheidet sich das Design für QuizWitz am meisten von gewöhnlichen Designarbeiten.

**Du hast keine Schriftgröße festgelegt. Du zeichnst ein Kästchen.**

Der gesamte Text wird live von einer Komponente gezeichnet, die zwei Dinge erhält: eine Zeichenkette und das Rechteck, das Sie gezogen haben. Es findet dann **die größte Schriftgröße, bei der der Zeichenkette, der über Zeilen eingewickelt ist, immer noch in das Kasten** passt. Eine lange Schrumpfschrumpfung, eine kurze Schrumpfung, bis die Schachtel voll ist.

![Ein Picker, bei dem drei Zeilen unterschiedlicher Länge jeweils eine andere Schriftgröße erhalten](/images/theme-design/frame1-general-multiquestion.png)

Drei Zeilen, drei identische Felder — und drei völlig unterschiedliche Schriftgrößen, nur weil der Text kürzer oder länger ist. "Wo ist Liebe" bekommt die volle Höhe; die obige Frage muss sich mit zwei kleinen Linien begnügen. Die Etiketten auf der linken Seite verhalten sich in gleicher Weise.

Was folgt daraus:

- \*\*Die gleiche Frage sieht in einem anderen Spiel anders aus. \* Eine sechswortige Frage erscheint groß und wird mit einem Siebdruck befüllt; ein fünfunddreißig Wörter eines Wortes erscheint über fünf Zeilen hinweg in genau demselben Feld. Beide müssen richtig aussehen.
- \*\*Entwerfen Sie jedes Textfeld zweimal aus. \* Füllen Sie es einmal mit einer sehr kurzen Probe und einmal mit einer sehr langen und überprüfen Sie, dass die Zusammensetzung in beiden hält. Als Thumbnail-Regel: Eine Antwort-Option läuft von einem bis etwa acht Wörtern eine Frage von fünf bis vierzig Spielern, ein Spielername von zwei bis zwanzig Zeichen.
- **Zähle nicht auf eine feste Anzahl von Zeilen.** Ein Titel, der "immer auf einer Zeile" ist, existiert hier nicht.
- \*\*Lass Text nicht optisch an irgendetwas anderes ausrichten. \* Text, der mit einer Regel oder einer Form zusammengesetzt werden muss, wird nach kürzeren oder längeren Schritten abdriften. Verwenden Sie Kästchen, die geräumig genug sind, und eine Ausrichtung (links, zentriert, rechts) statt exakte Positionen.
- **Die Box ist ein Maximum, kein Versprechen.** Du entwirfst seine Proportionen; die Füllung variiert.
- **Elf Sprachen.** Deutsche Verbindungen sind lang, und Ungarisch ist keine kinderleicht. Eine Schachtel, die im Englischen dicht ist, fällt auf eine unleserlich kleine Größe in Deutsch.
- \*\*Emoji kann im Text erscheinen. \* Spieler wählen einen neben ihrem Teamnamen und eine Frage oder eine Option kann eine enthalten — manchmal ist eine Option nichts als ein Emoji. Sie sind farblich gezeichnet und höher als die Buchstaben um sie herum.

Was der Aufbau über jedes Textfeld wissen muss: wo er sich befindet wie groß es ist, wie es ausgerichtet ist, welche Farbe und welche Schrift. Nicht: an welchem Punkt die Größe.

Zwei Dinge folgen Ihnen, die Sie verwenden können: Eine große Box mit kurzen Text wird zu einer starken typographischen Komposition von sich aus und ein Kästchen, das Sie absichtlich schmal und groß machen, erzwingt Text in eine Spalte. Sie können die Montage als Konstruktionsgerät verwenden – Sie sollten einfach nicht dagegen konstruieren.

### Der Timer – erforderlich, und es ist eine Animation

**Jeder Fragenbildschirm hat einen Timer.** Er ist nicht optional; der Raum muss sehen, wie viel Zeit noch bleibt. Beide Fragenrahmen tragen einen davon.

\*\*Der Timer ist keine Zählnummer, sondern eine Animation, deren Playhead sich die Engine bewegt. \* Du entwirfst einen Fortschritt von "voll" zu "leer" — ein Balkendraining, ein Ring schließend, ein Stundenglas, eine schrumpfende Linie. Die Engine spielt diese Animation mit genau der Geschwindigkeit, die den letzten Frame mit dem Ende der Frage übereinstimmt.

Was heißt:

- **Die Fragendauer ist nicht fixiert.** Sie ist pro Quiz festgelegt — oft zwanzig bis dreißig Sekunden, aber sie kann kürzer oder länger sein. Ihre Animation ist gestreckt oder komprimiert zu passen. Entwerfen Sie eine _Progression_, keine Animation für eine bestimmte Anzahl von Sekunden.
- **Keine Zahlen oder pro Sekunde Ticks.** Ein Timer, der "20, 19, 18…" zählt, hört auf, wahr zu sein, sobald sich die Dauer ändert.
- **Die letzten Sekunden sind der Zehnerste Moment des Spiels.** Es hilft, wenn der Fortschritt am Ende klarer oder dringender wird.
- **Auf einen Blick von der Rückseite des Zimmers**.
- **Mehrere Timer sind erlaubt.** Eine Leiste oben und ein Ring in der Nähe der Frage werden beide gefahren, solange jeder "Timer" genannt wird.

Liefert den Timer als eine Reihe von Keyframes oder als Beschreibung der Progression — "Der Balken fließt von rechts nach links und wechselt von grün nach rot" ist genug.

### Schriftarten

- **Schriftarten müssen eingebettet sein.** Die Datei `.ttf` oder `.otf` wird benötigt, plus eine Lizenz, die das Einbinden in eine Anwendung erlaubt. Eine Schriftart, die nur als Webschriftart oder nur zum Drucken lizenziert ist, kann nicht verwendet werden. Überprüfen Sie dies vor der Gestaltung mit ihm; es ist eine kostspielige Korrektur hinterher.
- Schriften mit ungewöhnlich großen Aufstiegsanlagen oder Absendern können kompensiert werden, aber Flaggen Sie sie, wenn Sie eine verwenden.

### Farbe als Liste

Das Theme liest eine Farbliste aus einer Konfigurationsdatei aus. Liefert deine Palette als **benannte Liste**, nicht nur als Farben im Kunstwerk:

Hauptfarbe, Akzentfarbe, Hintergrundfarbe, Standard-Textfarbe, Kopfzeilen-Textfarbe, Fragetext-Farbe, Button-Text, die vier Antwortfarben (jeweils mit Hintergrundfarbe und Rahmenfarbe), die Farbe für korrekt, die Farbe für falsch.

Verläufe sind erlaubt: Geben Sie sie als zwei Hex-Werte an.

### Das QuizWitz Logo

Zu den individuellen Designs gehört das QuizWitz-Logo. Reservieren Sie sich einen Ort, wo es nicht in den Weg des Designs kommt.

---

## Was übergeben werden soll

### Quelldatei — Illustrator bevorzugt

\*\*Adobe Illustrator (`.ai`) wird bevorzugt, und es gibt einen konkreten Grund. \* Das Theme ist in Adobe Animate eingebaut, welches Illustrator-Dateien direkt importiert und Ihre Ebenen in Animate Ebenen oder separate Symbole umwandelt, die Ebenennamen beibehalten und die Vektoren editierbar lassen. Das ist genau der Schritt, der das Kunstwerk vor dem Umbau durch die Hand bewahrt.

Figma oder Photoshop ist möglich, aber wissen Sie die Kosten: Mit Figma geht alles durch SVG und PNG exportiert, und genau hier geht die Ebenenstruktur verloren. Wenn Sie Figma verwenden, liefern Sie **jedes Element separat als SVG** mit Dateinamen zu den Ebenennamen, so dass die Struktur von Hand neu aufgebaut werden kann. Photoshop importiert mit seinen Ebenen intakt, wie Illustrator, aber gibt Ihnen Raster statt Vektor.

Wenn Sie in Figma schneller sind, verwenden Sie es für die Konzeptphase und liefern die endgültige Version in Illustrator.

Dateistruktur:

- Ein Artboard pro Bildschirm, jedes genau 1920 × 1080, benannt nach den Frames oben.
- Wiederverwendbare Teile (Button, Player-Zeile, Antwort-Option, Timer) als **Symbole** oder Komponenten, nicht als lose Kopien.
- Ebenennamen in Englisch, ohne Leerzeichen: `question`, `option1` zu `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farben wie benannte Muster und Text wie benannte Stile, anstatt auf jedes Objekt einzeln gesetzt.

### Exporte

- Jeder Frame als PNG, 1920 × 1080 — als Referenz dafür, wie es aussehen sollte.
- Jedes einzelne Grafikelement als **transparentes PNG bei 2×**, in einem Ordner, Dateiname passend zum Ebenennamen.
- Schriften als `.ttf` oder `.otf`, mit Lizenznachweis.

### Eine halbe Seite mit Notizen

Eine kurze schriftliche Anmerkung: Was die Idee ist, wie die Optionen aussehen sollen, was bewegt und was bleibt. Keine zehnseitige Designrationale — wer das Theme baut, muss wissen, was zu bauen ist.

Bewegungsideen können als grob animatisch beschrieben oder geliefert werden.

---

## Anhang — Symbolnamen

Für Vollständigkeit und für alle, die genau wissen wollen, wo ihr Kunstwerk landet. **Du musst dies nicht lesen, um die Arbeit zu erledigen**; die sieben Frames oben sind ausreichend. Die Verwendung dieser Namen als Ebenennamen speichert einen Übersetzungsschritt.

| Frame                                          | Symbolname                                                                                                                                                                                    | Erforderliche Teile                                                                                               |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 1. Allgemeiner Rahmen   | `GeneralPurposeScreen`, `GeneralPurposeScreenWithHeader`                                                                                                                                      | "header.text", Inhaltsbereich                                                                     |
| 2. Bildschirm verbinden | `PresentationConnectScreen`                                                                                                                                                                   | `instructions.line1` zu `line5`                                                                                   |
| 2b. Wartebildschirm            | Ausstehender Bildschirm                                                                                                                                                                       | `header.text`                                                                                                     |
| 3. Fragenbildschirm     | "Fragenbildschirm"                                                                                                                                                                            | `question.text`, `timer`, `feedback.text`, `option1` bis `option4`, Frame Labels `showOptions` und `showFeedback` |
| 4. Frage mit Medien     | `FrageScreenAttachment`                                                                                                                                                                       | wie oben, plus `attachment.placeholder`                                                                           |
| 4b. Vollbildmedien             | "Anhang-Screen"                                                                                                                                                                               | Platzhalter                                                                                                       |
| 5. Antwort-Bildschirm   | "AntwortPiescreen"                                                                                                                                                                            | `option1` zu `option4`, `answer.text`, `feedback.text`                                                            |
| 5b. Antwort auf Fragen öffnen  | `AnswerScreen`, `AnswerOpenQuestionPieScreen`                                                                                                                                                 | `answer.text`, `feedback.text`, `players`, `piechart`                                                             |
| 6. Messungen            | `Siegerbildschirm` + `PlayerScore`                                                                                                                                                            | `header.text`, `players`, `feedback.text` (`playAgain.text` optional)                          |
| 7. Runde Einleitung     | `RoundIntroTedMusic`, `RoundIntroTedSport`, `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedCultHist`                                                                    | —                                                                                                                 |
| —                                              | "Ladebildschirm"                                                                                                                                                                              | `text`, `progress`                                                                                                |
| —                                              | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `SymbolCorrect`, `SymbolWrong`, `SettingsScreenScrollarea`, `AlertScreen`, `ActivityScreen`, `MenuScreen`, `SettingsScreen`, `PackListItem` | kein eigenes Kunstwerk benötigt – aus Ihren Rahmen und dem allgemeinen Rahmen erstellt                            |

Die runden Intro Namen enthalten "Ted" aus historischen Gründen. Das ist ein Überbleibsel des ursprünglichen Themes und bedeutet nicht, dass ein Charakter in ihnen erscheinen muss.

Jedes Element mit `.text` nachdem es ein passendes Textfeld ist, wie oben beschrieben: Ein Rechteck füllt sich selbst. Das `timer` Element ist ein Filmclip mit eigener Timeline; Der Motor liest seine Rahmenanzahl aus und bewegt den Spielkopf im Verhältnis zur abgelaufenen Zeit.

### Wie die Konfigurationsdatei aus Ihrem Design stammt

```json
{
  "Fonts": { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } } ]
  },
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "overlay": "light | dark"
}
```

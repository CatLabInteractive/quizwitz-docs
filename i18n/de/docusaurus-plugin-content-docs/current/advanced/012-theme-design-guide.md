---
id: theme-design-guide
title: Design-Leitfaden
---

# Design-Leitfaden

[Theming](/docs/advanced/theming) erklärt, wie ein QuizWitz Theme erstellt wurde: in Adobe Animate, exportiert als CreateJS Bibliothek. This page covers the step before that - **designing** the theme.

Es ist für einen Grafikdesigner geschrieben, und es geht davon aus, dass das Design und die Animate Produktion von verschiedenen Personen durchgeführt werden. Nur wenige Designer arbeiten noch in Adobe Animate, so dass eine gemeinsame Arrangements ist, dass ein Designer liefert Kunstwerk und jemand anderes montiert das Thema. Das funktioniert gut, aber nur, wenn das Kunstwerk in einer Form übergeben wird, die das Gebäude tatsächlich benutzen kann. This page describes that shape, and doubles as the list of deliverables when you ask a designer for a quote.

:::tip
If you only want to change colours, fonts and backgrounds, you do not need any of this - customise the [Emerald theme](/docs/advanced/emerald-theme) instead.
:::

:::info[See it running]
Every screen described here can be played live, with sample data, in the **theme tester** at [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). It loads a theme and offers a menu of test screens: questions with and without an attachment, the answer spread for a small and a large group, the standings, the round intros, the connect screen with and without a client logo, and so on. Add `?theme=emerald` to the address to see the [Emerald theme](/docs/advanced/emerald-theme). Whoever builds the theme uses the same page to check it while it is being assembled.
:::

---

## Was Sie entwerfen

Ein QuizWitz-Spiel wird von einem ganzen Raum auf einmal gespielt, wobei immer zwei Bildschirme involviert sind:

- **The game screen** - a projector or TV, 1920 × 1080. Fragen und Antworten, wie sich die Antworten des Zimmers ausgebreitet haben, die Rangliste. Das ist das, was Sie entwerfen.
- **Das Telefon jedes Spieler**, wo er seine Antwort eintippt. That is a web page with a fixed layout; it is styled from your colour list, not laid out by you.

A theme is the complete visual skin of the game screen: background, typography, colour, the way a question with four options is presented, how the standings build up, how a round is announced.

---

## Seven frames and an element sheet

The game has dozens of distinct screen states, but most are variants of the same layout. **You design seven frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Ein Bildschirm, der kein eigenes Kunstwerk hat, fällt auf einen allgemeinen Rahmen zurück.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule - and that furniture is a design decision, not something that can be inferred from a background.

| #     | Frame                        | Was ist drauf                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Was daraus abgeleitet wird                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Allgemeiner Rahmen**       | Der Hintergrund, ein Header-Titel und ein leerer Inhaltsbereich darunter. Not a finished composition - the frame the rest is built inside.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Dreizehn Bildschirmzustände: runde Erklärung, Einführung, Multiple-Choice-Variante, lange Fragen, Sitzwarnungen, Einstellungen. Each fills that content area its own way with elements from the sheet, so it has to hold things that look nothing alike. The question picker and the long question may get a composition of their own if you want them to; otherwise they use this frame. |
| **2** | **Connect and waiting**      | Two screens, not one. The **connect screen** is what the room sees to join: five lines of instruction, a join code, a QR code, a line with the number of connected players, and a list of players trickling in. Design it **twice**: with a client logo and without one. The join code and the QR code are generated by the engine; reserve a square for the QR code. The **waiting screen** stays up while the quizmaster reads a question aloud and is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **3** | **Fragenbildschirm**         | Die Frage, ein Timer, vier Antwort-Optionen, eine Feedback-Linie. Der Bildschirm des Zimmers sieht am längsten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **4** | **Question with attachment** | Das gleiche, um ein Bild oder Video angeordnet. Kann eine andere Komposition als Rahmen 3 sein. The attachment is scaled to fit inside the box you draw, so both a landscape and a portrait image must look acceptable in it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Also the full-screen attachment variant, and attachments shown between questions.                                                                                                                                                                                                                                                                                                                                                         |
| **5** | **Antwortbildschirm**        | Welche Antwort war richtig, wie die Antworten des Raumes über die Optionen verteilt wurden und eine Feedback-Linie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Also the answer screen for open questions and for questions with an attachment.                                                                                                                                                                                                                                                                                                                                                           |
| **6** | **Ranglisten und Sieger**    | A list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element - it is repeated six times by default, up to ten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Sowohl die Rangliste zwischen Runden und dem Finalsieger.                                                                                                                                                                                                                                                                                                                                                                                 |
| **7** | **Runde Intro**              | Eine kurze Ankündigung pro Runde Kategorie. Es gibt sechs Kategorien: Wissenschaft & Technologie, Natur, Unterhaltung & Musik, Sport, Kunst, Geschichte. One design may serve several categories.                                                                                                                                                                                                                                                                                                                                                                                                                                           | Alle sechs Kategorien.                                                                                                                                                                                                                                                                                                                                                                                                                    |

### The element sheet

Two groups of elements, on one sheet, each drawn once and reused everywhere.

**Content building blocks.** These fill the content area of the general frame. The screens that fall back to it are assembled from these, so whatever you draw here decides how all of them look:

- a **panel**: fill, border, corner radius - the container a list or a block of text sits in
- a **list row**: the repeating unit of any list, with its own background or none
- a **separator**: the rule between rows, where there is no panel
- a **label and value pair**: a short label on the left, a value on the right

**Controls.** Drawn once, used on every screen:

- a **button** in its four states: rest, hover, pressed, disabled
- the **correct** and **wrong** symbols
- a **scrollbar**, a **checkbox**, a **select**
- where the **QuizWitz logo** sits

### Was für Sie entschieden wird

- **The players' phones.** A fixed HTML layout, styled from your colour list.
- **The handful of things the engine draws itself.** Some furniture is drawn in code rather than taken from the theme - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Those take their colour from the list in **Colour as a list** and nothing else, so that list is the only control you have over them.
- **Welche Bildschirme fallen zurück auf den allgemeinen Rahmen, und wie.**
- **How the six categories map onto the round intro artwork.** That mapping is a configuration setting, so one intro can be reused for several categories.
- **Dauer aller Zeit- und Animationen.**
- **Sound.** A theme can carry its own music and sound effects, but that is a separate deliverable and not part of the design brief.

### Ein Zeichen ist optional

Das Thema QuizWitz hat einen Charakter, der spricht und reagiert. Nichts erfordert eines: der Theme-Validator warnt nur vor dem `ted` Element, ohne es fehlschlägt. The [Emerald theme](/docs/advanced/emerald-theme) ships without a character, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Ohne Charakter wird das runde Intro zu einem grafischen, typographischen oder illustrierenden Moment. Zwei Ansätze halten die Arbeit proportional bei: eine Komposition mit einer Farb- oder Symbolvariante pro Kategorie, oder eine einzige universelle Ankündigung mit nur dem runden Namen. Sechs wirklich unterschiedliche Intros sind eine Menge Arbeit für ein paar Sekunden Bildschirmzeit.

---

## Wie diese Rahmen in der Praxis aussehen

Die untenstehenden Bildschirme stammen von einem vorhandenen Theme. They are here to show **which elements appear on each screen and when**. They are not a reference for style _or_ layout: where this theme puts its question, its options and its timer is its own decision, and yours can differ completely. Read them for what has to be present, not for where it goes. All of them, and more, can be played in the [theme tester](https://client.quizwitz.com/test.html).

### Frame 1 - the general frame

Two game moments on the same frame: a question picker and a points ladder.

Look at how little they have in common. The picker puts its three rows inside a panel with a border; the ladder has no panel at all, just rows separated by thin rules. What the two share is the background and the header band above them - everything below that belongs to the individual screen and is filled by the game, not by you.

![Der allgemeine Rahmen mit einem dreizeiligen Fragenwähler](/images/theme-design/frame1-general-multiquestion.png)

![Der allgemeine Rahmen mit einer fünfstufigen Punktestand](/images/theme-design/frame1-general-strikeladder.png)

That panel and those rules are design decisions, and they are yours to make - they come from the **element sheet**, not from this frame. What this frame has to do is hold them: design the content area as an empty, neutral, roomy zone that works with a bordered panel, a bare list and a table of rows alike. A background that is busy in the middle, or a header that only works with a panel tucked right underneath it, is where that breaks.

### Frame 2 - connect and waiting

Mit einem Client-Logo neben dem Join-Code und ohne eines, wo das eigene Artwork des Themes den Bildschirm trägt:

![Bildschirm mit einem Client-Logo verbinden](/images/theme-design/frame2-connect.png)

![Bildschirm ohne Client-Logo verbinden](/images/theme-design/frame2-connect-nologo.png)

The waiting screen is a separate composition rather than a variant of the connect screen - the two share only a background. It stays up while the quizmaster reads a question aloud, and it is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game, so it deserves more attention than an empty screen usually gets.

![Warte Bildschirm](/images/theme-design/frame2-pending.png)

### Frame 3 - the question screen

Vier Optionen, die Frage oben, der Timer in der Mitte. Beachten Sie, dass eine Option nur aus einem Emoji bestehen kann.

![Fragenbildschirm mit vier Textoptionen](/images/theme-design/frame3-question-options.png)

![Fragenbildschirm mit Flaggen als Antwortoptionen](/images/theme-design/frame3-question-emoji.png)

A question with no options - players type their answer on their phone. Der Bildschirm ist fast leer und der Timer wird das Hauptelement:

![Frage nur mit der Frage und einem großen Timer öffnen](/images/theme-design/frame3-question-open.png)

Der Moment ist abgelaufen. Der Feedback-Ballon erscheint über dem Bildschirm und der Timer ist leer:

![Fragenbildschirm zeigt den Zeit-up-Zustand](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - attachment

The same parts, rearranged around an attachment area, with the options to the left and right:

![Fragenbildschirm mit einem Bild in der Mitte](/images/theme-design/frame4-question-attachment.png)

An attachment on its own, filling the screen:

![Full-screen attachment](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - the answer screen

Dieser Bildschirm durchläuft drei Momente. Zuerst der Spread, mit nichts markiert:

![Antwort-Bildschirm zeigt die Spread](/images/theme-design/frame5-answer-mc-spread.png)

Dann wird die richtige Option angekreuzt und die falschen angekreuzt:

![Bildschirm mit der richtigen Option beantworten](/images/theme-design/frame5-answer-mc-reveal.png)

Und wenn die Frage eine Erklärung trägt, fällt ein Ballon über das Kunstwerk. Leave room for it - it lands on top of whatever you designed:

![Antwort-Bildschirm mit der Erklärungsballon](/images/theme-design/frame5-answer-mc-explanation.png)

Bei einer kleinen Gruppe ist der gleiche Moment eher eine Punkteliste als ein Diagramm:

![Antwort-Bildschirm für eine kleine Gruppe](/images/theme-design/frame5-answer-mc-small.png)

Für eine offene Frage zeigt das Diagramm, wie viele Spieler es richtig gemacht haben:

![Antwort-Bildschirm für eine offene Frage](/images/theme-design/frame5-answer-open.png)

### Frame 6 - standings and winner

Die Rangliste nach einer Runde. Die Spielerzeile ist das Element, das sich wiederholt: Position, Avatar, Name, Punktzahl.

![Steht mit sechs Spielerzeilen](/images/theme-design/frame6-roundoutro.png)

The final countdown names one player at a time, from last place to first - place, score and team name in the spotlight. This is also where the flying emoji are heaviest; see the note further down:

![Der Gewinner Countdown benennt einen Spieler](/images/theme-design/frame6-winner-countdown.png)

![Die endgültige Position](/images/theme-design/frame6-winner.png)

### Frame 7 - the round intro

Ein Design, optional mit einer Variante pro Kategorie:

![Round Intro für die Naturkategorie](/images/theme-design/frame7-roundintro-nature.png)

![Round Intro für die Wissenschaftskategorie](/images/theme-design/frame7-roundintro-science.png)

---

## Designregeln

Nichts davon schränkt Ihr visuelles Design ein. Es geht darum, wie die Datei erstellt wird.

### Format

- **1920 × 1080 Pixel**, genau. Ein Frame pro Bildschirm.
- Arbeiten Sie **in Vektor** wo Sie können. Wo Sie Raster verwenden (Fotos, Texturen): mindestens 2× Anzeigegröße.
- The Animate document runs at **24 frames per second**. Relevant für Bewegungsideen.
- Halten Sie einen **5% Marsch** an den Rändern frei von wichtigen Informationen. Projektoren anbauen.

### Layer structure - the rule that matters most

**Alles, was sich bewegen kann, erscheint oder den Wert ändern kann, sitzt auf der eigenen benannten Ebene.** Nichts verschmolzen, nichts abgeflacht.

In der Praxis: Die vier Antwortoptionen sind vier getrennte Ebenen, nicht eine. Der Timer ist vom Hintergrund getrennt. Ein Knopf und seine Bezeichnung sind zwei Elemente. Eine Spielerzeile ist eine Gruppe, die dupliziert werden kann.

Was verschmelzen kann: rein dekoratives Hintergrundbild, das als ein einzelnes Stillbild funktioniert.

This is the one rule that genuinely hurts when it is not followed - the artwork then has to be pulled apart or redrawn, which is exactly the cost this arrangement is meant to avoid.

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

Three rows, three identical boxes - and three completely different font sizes, purely because the text is shorter or longer. "Wo ist Liebe" bekommt die volle Höhe; die obige Frage muss sich mit zwei kleinen Linien begnügen. Die Etiketten auf der linken Seite verhalten sich in gleicher Weise.

Was folgt daraus:

- \*\*Die gleiche Frage sieht in einem anderen Spiel anders aus. \* Eine sechswortige Frage erscheint groß und wird mit einem Siebdruck befüllt; ein fünfunddreißig Wörter eines Wortes erscheint über fünf Zeilen hinweg in genau demselben Feld. Beide müssen richtig aussehen.
- \*\*Entwerfen Sie jedes Textfeld zweimal aus. \* Füllen Sie es einmal mit einer sehr kurzen Probe und einmal mit einer sehr langen und überprüfen Sie, dass die Zusammensetzung in beiden hält. Als Thumbnail-Regel: Eine Antwort-Option läuft von einem bis etwa acht Wörtern eine Frage von fünf bis vierzig Spielern, ein Spielername von zwei bis zwanzig Zeichen.
- **Zähle nicht auf eine feste Anzahl von Zeilen.** Ein Titel, der "immer auf einer Zeile" ist, existiert hier nicht.
- \*\*Lass Text nicht optisch an irgendetwas anderes ausrichten. \* Text, der mit einer Regel oder einer Form zusammengesetzt werden muss, wird nach kürzeren oder längeren Schritten abdriften. Verwenden Sie Kästchen, die geräumig genug sind, und eine Ausrichtung (links, zentriert, rechts) statt exakte Positionen.
- **Die Box ist ein Maximum, kein Versprechen.** Du entwirfst seine Proportionen; die Füllung variiert.
- **Twelve languages.** German compounds are long, and Hungarian is no kinder. Eine Schachtel, die im Englischen dicht ist, fällt auf eine unleserlich kleine Größe in Deutsch.
- **Emoji can appear inside text.** Players pick one next to their team name, and a question or an option can contain one - sometimes an option is nothing but an emoji. Sie sind farblich gezeichnet und höher als die Buchstaben um sie herum.

Was der Aufbau über jedes Textfeld wissen muss: wo er sich befindet wie groß es ist, wie es ausgerichtet ist, welche Farbe und welche Schrift. Nicht: an welchem Punkt die Größe.

Zwei Dinge folgen Ihnen, die Sie verwenden können: Eine große Box mit kurzen Text wird zu einer starken typographischen Komposition von sich aus und ein Kästchen, das Sie absichtlich schmal und groß machen, erzwingt Text in eine Spalte. You can use the fitting as a design device - you just should not design against it.

### The timer - required, and it is an animation

**Jeder Fragenbildschirm hat einen Timer.** Er ist nicht optional; der Raum muss sehen, wie viel Zeit noch bleibt. Beide Fragenrahmen tragen einen davon.

**The timer is not a counting number but an animation whose playhead the engine moves.** You design a progression from "full" to "empty" - a bar draining, a ring closing, an hourglass, a shrinking line. Die Engine spielt diese Animation mit genau der Geschwindigkeit, die den letzten Frame mit dem Ende der Frage übereinstimmt.

Was heißt:

- **The question duration is not fixed.** It is set per quiz - often twenty to thirty seconds, but it can be shorter or longer. Ihre Animation ist gestreckt oder komprimiert zu passen. Entwerfen Sie eine _Progression_, keine Animation für eine bestimmte Anzahl von Sekunden.
- **Keine Zahlen oder pro Sekunde Ticks.** Ein Timer, der "20, 19, 18…" zählt, hört auf, wahr zu sein, sobald sich die Dauer ändert.
- **Die letzten Sekunden sind der Zehnerste Moment des Spiels.** Es hilft, wenn der Fortschritt am Ende klarer oder dringender wird.
- **Auf einen Blick von der Rückseite des Zimmers**.
- **Mehrere Timer sind erlaubt.** Eine Leiste oben und ein Ring in der Nähe der Frage werden beide gefahren, solange jeder "Timer" genannt wird.

Supply the timer as a series of keyframes or as a description of the progression - "the bar drains right to left and shifts from green to red" is enough.

### Flying emoji land on top of everything

Every player picks an emoji when they join, and the game throws those emoji across the screen. They are drawn by the engine on a layer above the theme, in whatever colours the player's emoji happens to have. **There is nothing here for you to design** - but there is something to design around, because they are not a rare flourish. They appear at three moments:

- **When a player answers.** Their emoji rises from the bottom edge at a random horizontal position, arcs up and falls back out of frame.
- **When a player flings one.** Players can fling their emoji from their phone; angle and speed come from the swipe, and it launches from the bottom centre, spinning.
- **When a place is revealed in the final countdown.** A burst of the named player's emoji: twenty for an ordinary place, fifty for third, seventy-five for second, and **a hundred and fifty for the winner.**

They always enter from the bottom edge, arc under gravity and fall back out. What that means for the design:

- **Keep the bottom third of the standings and winner screens clear of anything small or critical.** During the countdown it is genuinely crowded down there.
- **Assume they will clash with your palette.** They are full-colour emoji from every corner of the Unicode chart, and no theme controls them. A design that only holds together in a tight colour range will look accidental for those seconds.
- **Flings are suppressed while an image or video is showing**, so the attachment screens stay clean.
- The whole layer can be switched off per game, so do not build a composition that depends on them being there either.

### Schriftarten

- **Schriftarten müssen eingebettet sein.** Die Datei `.ttf` oder `.otf` wird benötigt, plus eine Lizenz, die das Einbinden in eine Anwendung erlaubt. Eine Schriftart, die nur als Webschriftart oder nur zum Drucken lizenziert ist, kann nicht verwendet werden. Überprüfen Sie dies vor der Gestaltung mit ihm; es ist eine kostspielige Korrektur hinterher.
- Schriften mit ungewöhnlich großen Aufstiegsanlagen oder Absendern können kompensiert werden, aber Flaggen Sie sie, wenn Sie eine verwenden.

### Farbe als Liste

The theme reads a colour list from a configuration file, and the players' phones are styled from the same list. Liefert deine Palette als **benannte Liste**, nicht nur als Farben im Kunstwerk:

- **Game screen:** main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong.
- **The four answer options:** each with a background and a border colour, plus one flat colour per option for the phones and the charts.
- **Players' phones:** background, text colour, outline colour, option outline colour, and the background and text colour of the answer container.

Gradients are allowed on the game screen: give them as two hex values.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting: the **separator** (the rules between rows where there is no panel, and on the points ladder), the **active**, **inactive** and **selected** states of a row in the question picker, the **dialog** text, and the **front and back of the QR code**. If you leave them out they fall back to built-in defaults - white, grey, red, black and white - which rarely match a design.

### Das QuizWitz Logo

Zu den individuellen Designs gehört das QuizWitz-Logo. Reservieren Sie sich einen Ort, wo es nicht in den Weg des Designs kommt.

---

## Was übergeben werden soll

### Source file - Illustrator preferred

\*\*Adobe Illustrator (`.ai`) wird bevorzugt, und es gibt einen konkreten Grund. \* Das Theme ist in Adobe Animate eingebaut, welches Illustrator-Dateien direkt importiert und Ihre Ebenen in Animate Ebenen oder separate Symbole umwandelt, die Ebenennamen beibehalten und die Vektoren editierbar lassen. Das ist genau der Schritt, der das Kunstwerk vor dem Umbau durch die Hand bewahrt.

Figma oder Photoshop ist möglich, aber wissen Sie die Kosten: Mit Figma geht alles durch SVG und PNG exportiert, und genau hier geht die Ebenenstruktur verloren. Wenn Sie Figma verwenden, liefern Sie **jedes Element separat als SVG** mit Dateinamen zu den Ebenennamen, so dass die Struktur von Hand neu aufgebaut werden kann. Photoshop importiert mit seinen Ebenen intakt, wie Illustrator, aber gibt Ihnen Raster statt Vektor.

Wenn Sie in Figma schneller sind, verwenden Sie es für die Konzeptphase und liefern die endgültige Version in Illustrator.

Dateistruktur:

- Ein Artboard pro Bildschirm, jedes genau 1920 × 1080, benannt nach den Frames oben.
- Wiederverwendbare Teile (Button, Player-Zeile, Antwort-Option, Timer) als **Symbole** oder Komponenten, nicht als lose Kopien.
- Ebenennamen in Englisch, ohne Leerzeichen: `question`, `option1` zu `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farben wie benannte Muster und Text wie benannte Stile, anstatt auf jedes Objekt einzeln gesetzt.

### Deliverables checklist

1. The **source file**, structured as above.
2. **Each frame as a PNG**, 1920 × 1080 - a reference for how it should look. For frame 2, both the version with and the version without a client logo.
3. **The element sheet** as one artboard: the content building blocks and the controls listed above.
4. **Each separate graphic element as a transparent PNG at 2×**, in one folder, filename matching the layer name.
5. **The timer** as keyframes or a written description of the progression.
6. **Fonts** as `.ttf` or `.otf`, with proof of licence.
7. **The colour list** described above, as hex values.
8. **Half a page of notes**: what the idea is, how the options should appear, what moves and what stays still. Not a ten-page design rationale - whoever builds the theme needs to know what to build. Bewegungsideen können als grob animatisch beschrieben oder geliefert werden.

### Order of work

Start with frame 3, the question screen, together with the element sheet, and get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme, and the question screen is the one the room looks at longest. Frames 1 and 2 follow naturally from them; frames 5 to 7 come last.

---

## Appendix - symbol names

Für Vollständigkeit und für alle, die genau wissen wollen, wo ihr Kunstwerk landet. **You do not need to read this to do the work**; the seven frames and the element sheet above are enough. Die Verwendung dieser Namen als Ebenennamen speichert einen Übersetzungsschritt.

| Frame                                              | Symbolname                                                                                                                                | Erforderliche Teile                                                                                                                                                                            |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Allgemeiner Rahmen       | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (the content area); `title` text box optional                                                                                                                 |
| 1b. Question picker, long question | `MultiQuestionScreen`, `LongQuestionScreen`; both optional, fall back to the general frame                                                | picker: `questions` placeholder, `timer`; long question: `question` placeholder                                                                                |
| 2. Bildschirm verbinden     | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, with a `logo` placeholder                                      | `instructions.line1` to `line5`, `connectedPlayers`; `qrCode` placeholder with frame label `showQrCode` optional                                                                               |
| 2b. Wartebildschirm                | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | `header.text`                                                                                                                                                                                  |
| 3. Fragenbildschirm         | "Fragenbildschirm"                                                                                                                        | `question.text`, `timer`, `feedback.text`, `option1` bis `option4`, Frame Labels `showOptions` und `showFeedback`                                                                              |
| 4. Question with attachment | `FrageScreenAttachment`                                                                                                                   | wie oben, plus `attachment.placeholder`                                                                                                                                                        |
| 4b. Full-screen attachment         | "Anhang-Screen"                                                                                                                           | Platzhalter                                                                                                                                                                                    |
| 5. Antwort-Bildschirm       | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` zu `option4`, `answer.text`, `feedback.text`                                                                                                                                         |
| 5b. Antwort auf Fragen öffnen      | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` variants optional                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 6. Messungen                | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` and `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in the row: `position`, `name`, `score`, `avatar` optional                           |
| 7. Runde Einleitung         | one or more symbols of any name; the configuration file maps each of the six categories to a symbol                                       | -                                                                                                                                                                                              |
| -                                                  | "Ladebildschirm"                                                                                                                          | `text`, `progress`                                                                                                                                                                             |
| -                                                  | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no artwork of their own needed - built from what appears in your frames                                                                                                                        |
| -                                                  | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | only shown in the desktop app, not in a live quiz. Not part of the brief: they are taken from the theme template and restyled with your background and buttons |

The stock theme's round intro symbols are called `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` and `RoundIntroTedCultHist`; art and history share the last one. The "Ted" in those names is a leftover from the original theme's character and does not mean a character has to appear in them.

Jedes Element mit `.text` nachdem es ein passendes Textfeld ist, wie oben beschrieben: Ein Rechteck füllt sich selbst. The `timer` element is a movie clip with its own timeline; the engine reads its frame count and moves the playhead in proportion to elapsed time, at most 24 times per second.

### Wie die Konfigurationsdatei aus Ihrem Design stammt

```json
{
  "fontFiles": { "<body font>": "fonts/body.ttf", "<heading font>": "fonts/heading.ttf" },
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "_container_": "#…", "_timerBackground_": "#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…", "player": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "optionColors": [ "#…", "#…", "#…", "#…" ],
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "remoteColors": {
    "background": "#…", "text": "#…", "outline": "#…",
    "options-outline": "#…", "container-background": "#…", "container-text": "#…"
  },
  "roundIntros": { "science": "<symbol>", "nature": "<symbol>", "entertainment": "<symbol>",
                   "sports": "<symbol>", "art": "<symbol>", "history": "<symbol>" },
  "overlay": "light | dark"
}
```

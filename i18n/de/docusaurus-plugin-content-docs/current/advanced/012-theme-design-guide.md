---
id: theme-design-guide
title: Leitfaden für das Theme-Design
---

# Leitfaden für das Theme-Design

[Theming](/docs/advanced/theming) erklärt, wie ein QuizWitz-Theme gebaut wird: in Adobe Animate, exportiert als CreateJS-Bibliothek. Diese Seite behandelt den Schritt davor - das **Gestalten** des Themes.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Diese Seite beschreibt diese Form und dient zugleich als Liste der Liefergegenstände, wenn du bei einem Designer ein Angebot einholst.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Wenn du nur Farben, Schriften und Hintergründe ändern möchtest, brauchst du nichts davon - passe stattdessen das [Emerald-Theme](/docs/advanced/emerald-theme) an.
:::

:::info[In Aktion ansehen]
Jeder hier beschriebene Bildschirm lässt sich mit Beispieldaten live im **Theme-Tester** unter [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html) durchspielen. Er lädt ein Theme und bietet ein Menü mit Testbildschirmen: Fragen mit und ohne Anhang, die Antwortverteilung für eine kleine und eine große Gruppe, die Rangliste, die Runden-Intros, den Verbindungsbildschirm mit und ohne Kundenlogo und so weiter. Hänge `?theme=emerald` an die Adresse an, um das [Emerald-Theme](/docs/advanced/emerald-theme) zu sehen. Wer das Theme baut, prüft es während des Zusammenbaus auf derselben Seite.
:::

---

## Was du gestaltest

Eine Partie QuizWitz wird von einem ganzen Raum gleichzeitig gespielt, und es sind immer zwei Bildschirme im Spiel:

- **Der Spielbildschirm** - ein Beamer oder Fernseher, 1920 × 1080. Fragen, Antworten, wie sich die Antworten des Raums verteilt haben, die Rangliste. Das ist es, was du gestaltest.
- **Das Handy jedes Spielers**, auf dem die Antwort eingetippt wird. Das ist eine Webseite mit festem Layout; sie wird aus deiner Farbliste gestaltet, nicht von dir angeordnet.

Ein Theme ist die komplette visuelle Hülle des Spielbildschirms: Hintergrund, Typografie, Farbe, die Art, wie eine Frage mit vier Optionen präsentiert wird, wie sich die Rangliste aufbaut, wie eine Runde angekündigt wird.

---

## Eight frames and an element sheet

Das Spiel hat Dutzende unterschiedlicher Bildschirmzustände, die meisten davon sind aber Varianten desselben Aufbaus. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Ein Bildschirm ohne eigene Grafiken fällt auf einen allgemeinen Frame zurück.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Frame                                                           | Also covers                                                               |
| - | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1 | [General frame](#frame-1---the-general-frame)                   | Thirteen screen states with no artwork of their own                       |
| 2 | [Connect screen](#frame-2---the-connect-screen)                 | Draw it twice: with a client logo and without one         |
| 3 | [Waiting screen](#frame-3---the-waiting-screen)                 | -                                                                         |
| 4 | [Question screen](#frame-4---the-question-screen)               | -                                                                         |
| 5 | [Question with attachment](#frame-5---question-with-attachment) | The full-screen attachment, and attachments shown between questions       |
| 6 | [Answer screen](#frame-6---the-answer-screen)                   | The answer screen for open questions and for questions with an attachment |
| 7 | [Standings and winner](#frame-7---standings-and-winner)         | The standings between rounds and the final winner                         |
| 8 | [Round intro](#frame-8---the-round-intro)                       | All six round categories                                                  |

:::note[About the screenshots]
Die Bildschirme unten stammen aus einem bestehenden Theme. They show **which elements appear on each screen and when**. Sie sind keine Referenz für Stil _oder_ Layout: Wo dieses Theme seine Frage, seine Optionen und seinen Timer platziert, ist seine eigene Entscheidung, und deine darf völlig davon abweichen.
:::

### Frame 1 - der allgemeine Frame

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. Die Fragenauswahl und die lange Frage dürfen eine eigene Komposition bekommen, wenn du das möchtest; sonst nutzen sie diesen Frame.

Zwei Spielmomente auf demselben Frame: eine Fragenauswahl und eine Punkteleiter.

![Der allgemeine Frame mit einer dreizeiligen Fragenauswahl](/images/theme-design/frame1-general-multiquestion.png)

![Der allgemeine Frame mit einer fünfstufigen Punkteleiter](/images/theme-design/frame1-general-strikeladder.png)

Sieh dir an, wie wenig sie gemeinsam haben. Die Auswahl setzt ihre drei Zeilen in ein Panel mit Rand; die Leiter hat gar kein Panel, nur Zeilen, die durch dünne Linien getrennt sind. Gemeinsam haben beide den Hintergrund und das Kopfband darüber - alles darunter gehört zum einzelnen Bildschirm und wird vom Spiel gefüllt, nicht von dir.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Was dieser Frame leisten muss, ist, sie zu tragen: Gestalte den Inhaltsbereich als leere, neutrale, großzügige Zone, die mit einem gerandeten Panel, einer nackten Liste und einer Zeilentabelle gleichermaßen funktioniert. Ein Hintergrund, der in der Mitte unruhig ist, oder ein Kopfbereich, der nur mit einem direkt darunter eingefügten Panel funktioniert, ist genau die Stelle, an der das bricht.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Verbindungsbildschirm mit Kundenlogo](/images/theme-design/frame2-connect.png)

![Verbindungsbildschirm ohne Kundenlogo](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Wartebildschirm](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Fragebildschirm mit vier Textoptionen](/images/theme-design/frame3-question-options.png)

![Fragebildschirm mit Flaggen als Antwortoptionen](/images/theme-design/frame3-question-emoji.png)

Eine Frage ohne Optionen - die Spieler tippen ihre Antwort auf dem Handy ein. Der Bildschirm ist fast leer und der Timer wird zum Hauptelement:

![Offene Frage mit nur der Frage und einem großen Timer](/images/theme-design/frame3-question-open.png)

Der Moment, in dem die Zeit abläuft. Der Feedbackballon erscheint über dem Bildschirm und der Timer ist leer:

![Fragebildschirm im Zustand „Zeit abgelaufen“](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. Der Anhang wird so skaliert, dass er in das von dir gezeichnete Feld passt, deshalb müssen darin sowohl ein Quer- als auch ein Hochformat akzeptabel aussehen.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Fragebildschirm mit einem Bild in der Mitte](/images/theme-design/frame4-question-attachment.png)

Ein Anhang für sich allein, bildschirmfüllend:

![Bildschirmfüllender Anhang](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Zuerst die Verteilung, noch ohne Markierung:

![Antwortbildschirm mit der Verteilung](/images/theme-design/frame5-answer-mc-spread.png)

Dann wird die richtige Option abgehakt und die falschen werden durchgestrichen:

![Antwortbildschirm mit aufgedeckter richtiger Option](/images/theme-design/frame5-answer-mc-reveal.png)

Und wenn die Frage eine Erklärung mitbringt, fällt ein Ballon über die Grafik. Lass Platz dafür - er landet über allem, was du gestaltet hast:

![Antwortbildschirm mit dem Erklärungsballon](/images/theme-design/frame5-answer-mc-explanation.png)

Bei einer kleinen Gruppe ist derselbe Moment eine Punkteliste statt eines Diagramms:

![Antwortbildschirm für eine kleine Gruppe](/images/theme-design/frame5-answer-mc-small.png)

Bei einer offenen Frage zeigt das Diagramm, wie viele Spieler richtig lagen:

![Antwortbildschirm für eine offene Frage](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Rangliste mit sechs Spielerzeilen](/images/theme-design/frame6-roundoutro.png)

Der finale Countdown nennt einen Spieler nach dem anderen, vom letzten Platz bis zum ersten - Platz, Punktzahl und Teamname im Rampenlicht. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![Der Sieger-Countdown, der einen Spieler nennt](/images/theme-design/frame6-winner-countdown.png)

![Die Endrangliste](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Es gibt sechs Kategorien: Wissenschaft & Technik, Natur, Unterhaltung & Musik, Sport, Kunst, Geschichte.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Runden-Intro für die Kategorie Natur](/images/theme-design/frame7-roundintro-nature.png)

![Runden-Intro für die Kategorie Wissenschaft](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Ohne Figur wird das Runden-Intro zu einem grafischen, typografischen oder illustrativen Moment. Zwei Ansätze halten den Aufwand im Rahmen: eine Komposition mit einer Farb- oder Iconvariante pro Kategorie, oder eine einzige universelle Ankündigung, bei der sich nur der Rundenname ändert. Sechs wirklich unterschiedliche Intros sind viel Arbeit für ein paar Sekunden Bildschirmzeit.

---

## Das Elementblatt

Zwei Gruppen von Elementen, auf einem Blatt, jedes einmal gezeichnet und überall wiederverwendet.

**Inhaltsbausteine.** Diese füllen den Inhaltsbereich des allgemeinen Frames. Die Bildschirme, die darauf zurückfallen, werden aus ihnen zusammengesetzt, was du hier zeichnest, entscheidet also über das Aussehen von allen:

- ein **Panel**: Füllung, Rand, Eckenradius - der Container, in dem eine Liste oder ein Textblock sitzt
- eine **Listenzeile**: die sich wiederholende Einheit jeder Liste, mit eigenem Hintergrund oder ohne
- eine **Trennlinie**: die Linie zwischen Zeilen, wo es kein Panel gibt
- ein **Label-Wert-Paar**: ein kurzes Label links, ein Wert rechts

**Bedienelemente.** Einmal gezeichnet, auf jedem Bildschirm verwendet:

- eine **Schaltfläche** in ihren vier Zuständen: Ruhe, Hover, gedrückt, deaktiviert
- die Symbole für **richtig** und **falsch**
- eine **Scrollleiste**, ein **Kontrollkästchen**, ein **Auswahlfeld**
- wo das **QuizWitz-Logo** sitzt

---

## Was für dich entschieden ist

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Welche Bildschirme auf den allgemeinen Frame zurückfallen und wie.**
- **Wie die sechs Kategorien auf die Grafiken des Runden-Intros abgebildet werden.** Diese Zuordnung ist eine Konfigurationseinstellung, ein Intro kann also für mehrere Kategorien wiederverwendet werden.
- **Sämtliches Timing und alle Animationsdauern.**
- **Ton.** Ein Theme kann eigene Musik und Soundeffekte mitbringen, das ist aber ein eigener Liefergegenstand und nicht Teil des Gestaltungsauftrags.

---

## Gestaltungsregeln

Keine dieser Regeln schränkt dein visuelles Design ein. Es geht darum, wie die Datei aufgebaut ist.

### Format

- **1920 × 1080 Pixel**, exakt. Ein Frame pro Bildschirm.
- Arbeite **in Vektoren**, wo es geht. Wo du Raster verwendest (Fotos, Texturen): mindestens 2× der Anzeigegröße.
- Das Animate-Dokument läuft mit **24 Bildern pro Sekunde**. Relevant, wenn du Bewegungsideen lieferst.
- Halte **5 % Rand** an den Kanten frei von wesentlichen Informationen. Beamer schneiden ab.

### Ebenenstruktur - die Regel, auf die es am meisten ankommt

**Alles, was sich bewegen, erscheinen oder seinen Wert ändern kann, liegt auf einer eigenen, benannten Ebene.** Nichts zusammengefasst, nichts reduziert.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Was zusammengefasst werden darf: rein dekorative Hintergrundgrafik, die als einzelnes Standbild funktioniert.

Das ist die eine Regel, die wirklich wehtut, wenn sie nicht befolgt wird - die Grafiken müssen dann auseinandergenommen oder neu gezeichnet werden, und genau diese Kosten soll dieses Vorgehen vermeiden.

### Effekte, die es nicht überstehen

Die Engine zeichnet auf ein HTML5-Canvas. Diese müssen **ins Bild eingebacken** oder weggelassen werden:

| Effect                                                          | What to do instead          |
| --------------------------------------------------------------- | --------------------------- |
| Live blur, drop shadows and glow as filters                     | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)      | Resolve them to flat colour |
| Ebeneneffekte und Einstellungsebenen                            | Bake them in                |
| Verläufe **innerhalb** von Text oder Text mit Kontur je Zeichen | Leave them out              |
| Masken, die sich pro Frame ändern                               | Leave them out              |

Verläufe in Formen sind in Ordnung. Transparenz ist in Ordnung. Schatten als feste Grafik sind in Ordnung.

### Wie sich Text verhält

Hier unterscheidet sich das Gestalten für QuizWitz am stärksten von gewöhnlicher Designarbeit.

**Du legst keine Schriftgröße fest. Du zeichnest ein Feld.**

Aller Text wird live von einer Komponente gezeichnet, die zwei Dinge bekommt: einen Text und das Rechteck, das du gezeichnet hast. Sie sucht dann **die größte Schriftgröße, bei der dieser Text, über Zeilen umbrochen, noch in das Feld passt**. Ein langer Text schrumpft, damit er passt; ein kurzer wächst, bis das Feld voll ist.

![Eine Auswahl, in der drei unterschiedlich lange Zeilen jeweils eine andere Schriftgröße bekommen](/images/theme-design/frame1-general-multiquestion.png)

Drei Zeilen, drei identische Felder - und drei völlig unterschiedliche Schriftgrößen, allein weil der Text kürzer oder länger ist. „Where is love“ bekommt die volle Höhe; die Frage darüber muss mit zwei kleinen Zeilen auskommen. Die Labels links verhalten sich genauso.

Daraus folgt:

- **Dieselbe Frage sieht in einer anderen Partie anders aus.** Eine Frage aus sechs Wörtern erscheint groß und bildschirmfüllend; eine aus fünfunddreißig Wörtern erscheint klein über fünf Zeilen, in genau demselben Feld. Beide müssen gut aussehen.
- **Gestalte jedes Textfeld zweimal.** Fülle es einmal mit einem sehr kurzen und einmal mit einem sehr langen Beispiel und prüfe, ob die Komposition in beiden Fällen trägt. Als Faustregel: Eine Antwortoption reicht von einem bis etwa acht Wörtern, eine Frage von fünf bis vierzig, ein Spielername von zwei bis zwanzig Zeichen.
- **Verlass dich nicht auf eine feste Zeilenzahl.** Einen Titel, der „immer einzeilig“ ist, gibt es hier nicht.
- **Richte Text nicht optisch an etwas anderem aus.** Text, der zu einer Linie oder einer Form passen soll, verrutscht, sobald er kürzer oder länger ist. Nimm Felder, die großzügig genug sind, und eine Ausrichtung (links, zentriert, rechts) statt exakter Positionen.
- **Zwölf Sprachen.** Deutsche Komposita sind lang, und Ungarisch ist nicht gnädiger. Ein Feld, das im Englischen knapp ist, fällt im Deutschen auf eine unleserlich kleine Größe.
- **Emoji können innerhalb von Text auftauchen.** Spieler wählen eines neben ihrem Teamnamen, und eine Frage oder eine Option kann eines enthalten - manchmal besteht eine Option aus nichts als einem Emoji. Sie werden farbig gezeichnet und sind höher als die Buchstaben um sie herum.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Nicht: bei welcher Punktgröße.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### Der Timer - Pflicht, und er ist eine Animation

**Every question screen has a timer**; the room has to see how much time is left.

**Der Timer ist keine zählende Zahl, sondern eine Animation, deren Abspielkopf die Engine bewegt.** Du gestaltest einen Verlauf von „voll“ zu „leer“ - ein leerlaufender Balken, ein sich schließender Ring, eine Sanduhr, eine schrumpfende Linie. Die Engine spielt diese Animation genau so schnell ab, dass das letzte Bild mit dem Ende der Frage zusammenfällt.

Daraus folgt:

- **Die Fragendauer steht nicht fest.** Sie wird pro Quiz eingestellt - oft zwanzig bis dreißig Sekunden, sie kann aber kürzer oder länger sein. Deine Animation wird gedehnt oder gestaucht, damit sie passt.
- **Keine Zahlen und keine Ticks pro Sekunde.** Ein Timer, der „20, 19, 18…“ herunterzählt, stimmt nicht mehr, sobald sich die Dauer ändert.
- **Die letzten Sekunden sind der spannendste Moment des Spiels.** Es hilft, wenn der Verlauf zum Ende hin deutlicher oder drängender wird.
- **Aus der letzten Reihe lesbar**, auf einen Blick.
- **Mehrere Timer sind erlaubt.** Ein Balken oben und ein Ring bei der Frage werden beide angesteuert, solange jeder `timer` heißt.

Liefere den Timer als Folge von Keyframes oder als Beschreibung des Verlaufs - „der Balken läuft von rechts nach links leer und wechselt von Grün zu Rot“ genügt.

### Fliegende Emoji landen über allem

Jeder Spieler wählt beim Beitreten ein Emoji, und das Spiel wirft diese Emoji über den Bildschirm. They are drawn by the engine on a layer above the theme. **Hier gibt es für dich nichts zu gestalten** - aber es gibt etwas, um das herum zu gestalten ist, denn sie sind keine seltene Zierde.

Sie tauchen in drei Momenten auf:

- **Wenn ein Spieler antwortet.** Das Emoji dieses Spielers steigt an einer zufälligen horizontalen Position vom unteren Rand auf, beschreibt einen Bogen und fällt wieder aus dem Bild.
- **Wenn ein Spieler eines schleudert.** Spieler können ihr Emoji vom Handy aus schleudern; Winkel und Geschwindigkeit kommen aus der Wischbewegung, und es startet rotierend aus der Mitte unten.
- **Wenn im finalen Countdown ein Platz aufgedeckt wird.** Ein Schwall der Emoji des genannten Spielers: zwanzig für einen gewöhnlichen Platz, fünfzig für den dritten, fünfundsiebzig für den zweiten und **hundertfünfzig für den Sieger.**

Was das für die Gestaltung bedeutet:

- **Halte das untere Drittel der Ranglisten- und Siegerbildschirme frei von allem Kleinen oder Wichtigen.** Während des Countdowns ist es dort unten wirklich voll.
- **Geh davon aus, dass sie mit deiner Palette kollidieren.** Es sind vollfarbige Emoji aus jeder Ecke der Unicode-Tabelle, und kein Theme hat sie im Griff. Ein Design, das nur in einem engen Farbbereich zusammenhält, wirkt in diesen Sekunden zufällig.
- **Das Schleudern wird unterdrückt, solange ein Bild oder Video zu sehen ist**, die Anhangbildschirme bleiben also ruhig.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Schriften

- **Schriften müssen einbettbar sein.** Die `.ttf`- oder `.otf`-Datei wird gebraucht, dazu eine Lizenz, die das Einbetten in eine Anwendung erlaubt. Eine Schrift, die nur als Webfont oder nur für den Druck lizenziert ist, kann nicht verwendet werden. Prüfe das, bevor du damit gestaltest; hinterher ist es eine teure Korrektur.
- Schriften mit ungewöhnlich großen Ober- oder Unterlängen lassen sich ausgleichen, aber weise darauf hin, wenn du eine verwendest.

### Farbe als Liste

Das Theme liest eine Farbliste aus einer Konfigurationsdatei, und die Handys der Spieler werden aus derselben Liste gestaltet. Liefere deine Palette als **benannte Liste**, nicht nur als Farben in den Grafiken:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

Verläufe sind auf dem Spielbildschirm erlaubt: gib sie als zwei Hex-Werte an.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Lässt du sie weg, fallen sie auf eingebaute Standardwerte zurück - Weiß, Grau, Rot, Schwarz und Weiß - die selten zu einem Design passen.

### Das QuizWitz-Logo

Eigene Designs enthalten das QuizWitz-Logo. Halte einen Platz dafür frei, an dem es dem Design nicht im Weg steht.

---

## Was zu liefern ist

### Quelldatei - Illustrator bevorzugt

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                                          | Use it for                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. Genau dieser Schritt bewahrt die Grafiken davor, von Hand neu aufgebaut zu werden.                                                      | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                                           | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Wenn du doch Figma nutzt, liefere **jedes Element einzeln als SVG**, mit Dateinamen, die den Ebenennamen entsprechen, damit sich die Struktur von Hand wiederherstellen lässt. | The concept phase, if you are faster in it |

Dateistruktur:

- One artboard per screen, named after the frames above.
- Wiederverwendbare Teile (Schaltfläche, Spielerzeile, Antwortoption, Timer) als **Symbole** oder Komponenten, nicht als lose Kopien.
- Ebenennamen auf Englisch, ohne Leerzeichen: `question`, `option1` bis `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farben als benannte Farbfelder und Text als benannte Stile, statt an jedem Objekt einzeln gesetzt.

### Checkliste der Liefergegenstände

1. Die **Quelldatei**, aufgebaut wie oben.
2. **Jeder Frame als PNG**, 1920 × 1080 - eine Referenz dafür, wie es aussehen soll. Für Frame 2 sowohl die Fassung mit als auch die ohne Kundenlogo.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Jedes einzelne Grafikelement als transparentes PNG in 2×**, in einem Ordner, Dateiname passend zum Ebenennamen.
5. **Der Timer** als Keyframes oder als schriftliche Beschreibung des Verlaufs.
6. **Schriften** als `.ttf` oder `.otf`, mit Lizenznachweis.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Eine halbe Seite Notizen**: was die Idee ist, wie die Optionen erscheinen sollen, was sich bewegt und was stehen bleibt. Keine zehnseitige Designbegründung - wer das Theme baut, muss wissen, was zu bauen ist. Bewegungsideen dürfen beschrieben oder als grobes Animatic geliefert werden.

### Reihenfolge der Arbeit

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Anhang - Symbolnamen

Der Vollständigkeit halber und für alle, die genau wissen wollen, wo ihre Grafiken landen. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Diese Namen als Ebenennamen zu verwenden spart einen Übersetzungsschritt.

| Frame                                           | Symbolname                                                                                                                                | Erforderliche Teile                                                                                                                                                                                                               |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Allgemeiner Frame     | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (der Inhaltsbereich); Textfeld `title` optional                                                                                                                                                  |
| 1b. Fragenauswahl, lange Frage  | `MultiQuestionScreen`, `LongQuestionScreen`; beide optional, fallen auf den allgemeinen Frame zurück                                      | Auswahl: `questions`-Platzhalter, `timer`; lange Frage: `question`-Platzhalter                                                                                                                    |
| 2. Verbindungsbildschirm | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, mit einem `logo`-Platzhalter                                   | `instructions.line1` bis `line5`, `connectedPlayers`; `qrCode`-Platzhalter mit Frame-Label `showQrCode` optional                                                                                                                  |
| 3. Wartebildschirm       | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | `header.text`                                                                                                                                                                                                                     |
| 4. Fragebildschirm       | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` bis `option4`, Frame-Labels `showOptions` und `showFeedback`                                                                                                                 |
| 5. Frage mit Anhang      | `QuestionScreenAttachment`                                                                                                                | wie oben, plus `attachment.placeholder`                                                                                                                                                                                           |
| 5b. Bildschirmfüllender Anhang  | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                                     |
| 6. Antwortbildschirm     | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` bis `option4`, `answer.text`, `feedback.text`                                                                                                                                                                           |
| 6b. Antwort auf offene Frage    | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment`-Varianten optional                                                           | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                                             |
| 7. Rangliste             | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` und `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in der Zeile: `position`, `name`, `score`, `avatar` optional                                                            |
| 8. Runden-Intro          | ein oder mehrere Symbole mit beliebigem Namen; die Konfigurationsdatei ordnet jeder der sechs Kategorien ein Symbol zu                    | -                                                                                                                                                                                                                                 |
| -                                               | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                                                |
| -                                               | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | keine eigenen Grafiken nötig - aufgebaut aus dem, was in deinen Frames vorkommt                                                                                                                                                   |
| -                                               | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | nur in der Desktop-App zu sehen, nicht in einem Live-Quiz. Nicht Teil des Auftrags: Sie werden aus der Theme-Vorlage übernommen und mit deinem Hintergrund und deinen Schaltflächen neu gestaltet |

Die Runden-Intro-Symbole des Standard-Themes heißen `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` und `RoundIntroTedCultHist`; Kunst und Geschichte teilen sich das letzte. Das „Ted“ in diesen Namen ist ein Überbleibsel der Figur aus dem ursprünglichen Theme und bedeutet nicht, dass darin eine Figur auftauchen muss.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. Das `timer`-Element ist ein Movieclip mit eigener Zeitleiste; die Engine liest seine Bildanzahl und bewegt den Abspielkopf proportional zur verstrichenen Zeit, höchstens 24-mal pro Sekunde.

### Was die Konfigurationsdatei aus deinem Design übernimmt

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

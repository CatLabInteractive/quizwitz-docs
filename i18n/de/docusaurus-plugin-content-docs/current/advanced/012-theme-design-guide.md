---
id: theme-design-guide
title: Leitfaden für das Theme-Design
---

# Leitfaden für das Theme-Design

[Theming](/docs/advanced/theming) erklärt, wie ein QuizWitz-Theme gebaut wird: in Adobe Animate, exportiert als CreateJS-Bibliothek. Diese Seite behandelt den Schritt davor - das **Gestalten** des Themes.

Sie richtet sich an Grafikdesigner und geht davon aus, dass Design und Animate-Produktion von verschiedenen Personen erledigt werden. Nur noch wenige Designer arbeiten in Adobe Animate, daher liefert ein Designer meist die Grafiken, und jemand anderes baut das Theme zusammen. Das funktioniert gut, solange die Grafiken in einer Form ankommen, die der Zusammenbau verwenden kann. Diese Seite beschreibt diese Form und dient zugleich als Liste der Liefergegenstände, wenn du bei einem Designer ein Angebot einholst.

Die Seite hat vier Teile:

1. [Was du gestaltest](#what-you-are-designing) - die Bildschirme, die ein Theme abdeckt.
2. [Die acht Frames](#eight-frames-and-an-element-sheet) und [das Elementblatt](#the-element-sheet), einzeln und mit Screenshots.
3. [Gestaltungsregeln](#design-rules) - wie die Datei aufgebaut sein muss, damit die Engine sie verwenden kann.
4. [Was zu liefern ist](#what-to-hand-over) - Quelldatei, Liefergegenstände und Reihenfolge der Arbeit.

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

## Acht Frames und ein Elementblatt

Das Spiel hat Dutzende unterschiedlicher Bildschirmzustände, die meisten davon sind aber Varianten desselben Aufbaus. **Du gestaltest acht Frames und ein Elementblatt; der Rest wird daraus abgeleitet.** Das ist keine Abkürzung - so funktioniert die Engine. Ein Bildschirm ohne eigene Grafiken fällt auf einen allgemeinen Frame zurück.

Das Blatt ist genauso wichtig wie die Frames: Ein Bildschirm, der zurückfällt, braucht trotzdem Mobiliar in seinem Inhaltsbereich - ein Panel, eine Zeile, eine Trennlinie.

| # | Frame                                                   | Deckt auch ab                                                                  |
| - | ------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1 | [Allgemeiner Frame](#frame-1---the-general-frame)       | Dreizehn Bildschirmzustände ohne eigene Grafiken                               |
| 2 | [Verbindungsbildschirm](#frame-2---the-connect-screen)  | Zweimal zeichnen: mit Kundenlogo und ohne                      |
| 3 | [Wartebildschirm](#frame-3---the-waiting-screen)        | -                                                                              |
| 4 | [Fragebildschirm](#frame-4---the-question-screen)       | -                                                                              |
| 5 | [Frage mit Anhang](#frame-5---question-with-attachment) | Den bildschirmfüllenden Anhang und Anhänge, die zwischen Fragen gezeigt werden |
| 6 | [Antwortbildschirm](#frame-6---the-answer-screen)       | Den Antwortbildschirm für offene Fragen und für Fragen mit Anhang              |
| 7 | [Rangliste und Sieger](#frame-7---standings-and-winner) | Die Rangliste zwischen den Runden und den finalen Sieger                       |
| 8 | [Runden-Intro](#frame-8---the-round-intro)              | Alle sechs Rundenkategorien                                                    |

:::note[Über die Screenshots]
Die Bildschirme unten stammen aus einem bestehenden Theme. Sie zeigen, **welche Elemente auf welchem Bildschirm erscheinen und wann**. Sie sind keine Referenz für Stil _oder_ Layout: Wo dieses Theme seine Frage, seine Optionen und seinen Timer platziert, ist seine eigene Entscheidung, und deine darf völlig davon abweichen.
:::

### Frame 1 - der allgemeine Frame

**Was darauf ist:** der Hintergrund, ein Kopftitel und ein leerer Inhaltsbereich darunter. Er ist keine fertige Komposition, sondern der Rahmen, in dem der Rest aufgebaut wird.

**Was er abdeckt:** dreizehn Bildschirmzustände - Rundenerklärung, Rangliste, Spielervorstellung, Multiple-Choice-Varianten, lange Fragen, Seat-Warnungen, Einstellungen. Jeder füllt den Inhaltsbereich auf seine eigene Weise mit Elementen aus dem [Elementblatt](#the-element-sheet), daher muss der Frame Dinge tragen, die sich überhaupt nicht ähneln. Die Fragenauswahl und die lange Frage dürfen eine eigene Komposition bekommen, wenn du das möchtest; sonst nutzen sie diesen Frame.

Zwei Spielmomente auf demselben Frame: eine Fragenauswahl und eine Punkteleiter.

![Der allgemeine Frame mit einer dreizeiligen Fragenauswahl](/images/theme-design/frame1-general-multiquestion.png)

![Der allgemeine Frame mit einer fünfstufigen Punkteleiter](/images/theme-design/frame1-general-strikeladder.png)

Sieh dir an, wie wenig sie gemeinsam haben. Die Auswahl setzt ihre drei Zeilen in ein Panel mit Rand; die Leiter hat gar kein Panel, nur Zeilen, die durch dünne Linien getrennt sind. Gemeinsam haben beide den Hintergrund und das Kopfband darüber - alles darunter gehört zum einzelnen Bildschirm und wird vom Spiel gefüllt, nicht von dir.

Dieses Panel und diese Linien kommen aus dem [Elementblatt](#the-element-sheet), nicht aus diesem Frame. Was dieser Frame leisten muss, ist, sie zu tragen: Gestalte den Inhaltsbereich als leere, neutrale, großzügige Zone, die mit einem gerandeten Panel, einer nackten Liste und einer Zeilentabelle gleichermaßen funktioniert. Ein Hintergrund, der in der Mitte unruhig ist, oder ein Kopfbereich, der nur mit einem direkt darunter eingefügten Panel funktioniert, ist genau die Stelle, an der das bricht.

### Frame 2 - der Verbindungsbildschirm

**Was darauf ist:** alles, was der Raum zum Beitreten braucht.

- fünf Zeilen Anleitung
- ein Beitrittscode und ein QR-Code, beide von der Engine erzeugt - reserviere ein Quadrat für den QR-Code
- eine Zeile mit der Anzahl verbundener Spieler
- eine Liste der nach und nach eintreffenden Spieler

**Zweimal zeichnen:** mit einem Kundenlogo neben dem Beitrittscode und ohne, wobei dann die eigenen Grafiken des Themes den Bildschirm tragen.

![Verbindungsbildschirm mit Kundenlogo](/images/theme-design/frame2-connect.png)

![Verbindungsbildschirm ohne Kundenlogo](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - der Wartebildschirm

**Was darauf ist:** fast nichts - das eigene Logo des Quiz oder die Grafiken des Themes.

Er teilt mit dem Verbindungsbildschirm nur den Hintergrund, gestalte ihn also als eigene Komposition. Er bleibt stehen, während der Quizmaster eine Frage vorliest, und ist dadurch länger zu sehen als fast alles andere im Spiel. Er verdient mehr Aufmerksamkeit, als ein leerer Bildschirm normalerweise bekommt.

![Wartebildschirm](/images/theme-design/frame2-pending.png)

### Frame 4 - der Fragebildschirm

**Was darauf ist:** die Frage, ein Timer, vier Antwortoptionen und eine Feedbackzeile. Das ist der Bildschirm, auf den der Raum am längsten schaut. Beachte, dass eine Option aus nichts als einem Emoji bestehen kann:

![Fragebildschirm mit vier Textoptionen](/images/theme-design/frame3-question-options.png)

![Fragebildschirm mit Flaggen als Antwortoptionen](/images/theme-design/frame3-question-emoji.png)

Eine Frage ohne Optionen - die Spieler tippen ihre Antwort auf dem Handy ein. Der Bildschirm ist fast leer und der Timer wird zum Hauptelement:

![Offene Frage mit nur der Frage und einem großen Timer](/images/theme-design/frame3-question-open.png)

Der Moment, in dem die Zeit abläuft. Der Feedbackballon erscheint über dem Bildschirm und der Timer ist leer:

![Fragebildschirm im Zustand „Zeit abgelaufen“](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - Frage mit Anhang

**Was darauf ist:** dieselben Teile wie in Frame 4, angeordnet um ein Bild oder Video. Das darf eine andere Komposition sein. Der Anhang wird so skaliert, dass er in das von dir gezeichnete Feld passt, deshalb müssen darin sowohl ein Quer- als auch ein Hochformat akzeptabel aussehen.

**Was er abdeckt:** den bildschirmfüllenden Anhang und Anhänge, die zwischen Fragen gezeigt werden.

Hier mit den Optionen links und rechts vom Anhang:

![Fragebildschirm mit einem Bild in der Mitte](/images/theme-design/frame4-question-attachment.png)

Ein Anhang für sich allein, bildschirmfüllend:

![Bildschirmfüllender Anhang](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - der Antwortbildschirm

**Was darauf ist:** welche Antwort richtig war, wie sich die Antworten des Raums auf die Optionen verteilt haben, und eine Feedbackzeile.

**Was er abdeckt:** den Antwortbildschirm für offene Fragen und für Fragen mit Anhang.

Der Bildschirm durchläuft drei Momente. Zuerst die Verteilung, noch ohne Markierung:

![Antwortbildschirm mit der Verteilung](/images/theme-design/frame5-answer-mc-spread.png)

Dann wird die richtige Option abgehakt und die falschen werden durchgestrichen:

![Antwortbildschirm mit aufgedeckter richtiger Option](/images/theme-design/frame5-answer-mc-reveal.png)

Und wenn die Frage eine Erklärung mitbringt, fällt ein Ballon über die Grafik. Lass Platz dafür - er landet über allem, was du gestaltet hast:

![Antwortbildschirm mit dem Erklärungsballon](/images/theme-design/frame5-answer-mc-explanation.png)

Bei einer kleinen Gruppe ist derselbe Moment eine Punkteliste statt eines Diagramms:

![Antwortbildschirm für eine kleine Gruppe](/images/theme-design/frame5-answer-mc-small.png)

Bei einer offenen Frage zeigt das Diagramm, wie viele Spieler richtig lagen:

![Antwortbildschirm für eine offene Frage](/images/theme-design/frame5-answer-open.png)

### Frame 7 - Rangliste und Sieger

**Was darauf ist:** eine Liste von Spielern mit Platz, Avatar, Name und Punktzahl. Liefere die **Spielerzeile** als separates, wiederverwendbares Element: Sie wird standardmäßig sechsmal wiederholt, bis zu zehnmal.

**Was er abdeckt:** die Rangliste zwischen den Runden und den finalen Sieger.

Die Rangliste nach einer Runde, mit sechs Spielerzeilen:

![Rangliste mit sechs Spielerzeilen](/images/theme-design/frame6-roundoutro.png)

Der finale Countdown nennt einen Spieler nach dem anderen, vom letzten Platz bis zum ersten - Platz, Punktzahl und Teamname im Rampenlicht. Hier sind auch die [fliegenden Emoji](#flying-emoji-land-on-top-of-everything) am dichtesten:

![Der Sieger-Countdown, der einen Spieler nennt](/images/theme-design/frame6-winner-countdown.png)

![Die Endrangliste](/images/theme-design/frame6-winner.png)

### Frame 8 - das Runden-Intro

**Was darauf ist:** eine kurze Ankündigung pro Rundenkategorie. Es gibt sechs Kategorien: Wissenschaft & Technik, Natur, Unterhaltung & Musik, Sport, Kunst, Geschichte.

**Was er abdeckt:** alle sechs Kategorien. Ein Design darf mehrere davon bedienen.

Hier eine Komposition mit einer Variante pro Kategorie:

![Runden-Intro für die Kategorie Natur](/images/theme-design/frame7-roundintro-nature.png)

![Runden-Intro für die Kategorie Wissenschaft](/images/theme-design/frame7-roundintro-science.png)

**Eine Figur ist optional.** Das Standard-Theme von QuizWitz hat eine, die spricht und reagiert; das [Emerald-Theme](/docs/advanced/emerald-theme) kommt ohne aus, und der Verzicht darauf entfernt die teuerste Animationsarbeit - Lippensynchronisation, Augen, Arme.

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

- **Die Handys der Spieler.** Ein festes HTML-Layout.
- **Die paar Dinge, die die Engine selbst zeichnet** - die Linien zwischen den Zeilen der Punkteleiter, die hervorgehobene Zeile in der Fragenauswahl, der QR-Code. Ihre Farben kommen aus [Farbe als Liste](#colour-as-a-list).
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

In der Praxis:

- die vier Antwortoptionen sind vier separate Ebenen, nicht eine
- der Timer ist vom Hintergrund getrennt
- eine Schaltfläche und ihre Beschriftung sind zwei Elemente
- eine Spielerzeile ist eine Gruppe, die dupliziert werden kann

Was zusammengefasst werden darf: rein dekorative Hintergrundgrafik, die als einzelnes Standbild funktioniert.

Das ist die eine Regel, die wirklich wehtut, wenn sie nicht befolgt wird - die Grafiken müssen dann auseinandergenommen oder neu gezeichnet werden, und genau diese Kosten soll dieses Vorgehen vermeiden.

### Effekte, die es nicht überstehen

Die Engine zeichnet auf ein HTML5-Canvas. Diese müssen **ins Bild eingebacken** oder weggelassen werden:

| Effekt                                                                                       | Was du stattdessen tust   |
| -------------------------------------------------------------------------------------------- | ------------------------- |
| Live-Weichzeichner, Schlagschatten und Leuchten als Filter                                   | Als Grafik liefern        |
| Füllmethoden (Multiplizieren, Negativ multiplizieren, Ineinanderkopieren) | In flache Farbe umwandeln |
| Ebeneneffekte und Einstellungsebenen                                                         | Einbacken                 |
| Verläufe **innerhalb** von Text oder Text mit Kontur je Zeichen                              | Weglassen                 |
| Masken, die sich pro Frame ändern                                                            | Weglassen                 |

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

**Was der Zusammenbau über jedes Textfeld wissen muss:** wo es ist, wie groß es ist, wie es ausgerichtet ist, welche Farbe und welche Schrift. Nicht: bei welcher Punktgröße.

**Du kannst das nutzen.** Ein großes Feld mit kurzem Text wird von selbst zu einer starken typografischen Komposition, und ein Feld, das du absichtlich schmal und hoch machst, zwingt den Text in eine Spalte. Nutze die Einpassung als Gestaltungsmittel; gestalte nur nicht dagegen an.

### Der Timer - Pflicht, und er ist eine Animation

**Jeder Fragebildschirm hat einen Timer**; der Raum muss sehen, wie viel Zeit noch bleibt.

**Der Timer ist keine zählende Zahl, sondern eine Animation, deren Abspielkopf die Engine bewegt.** Du gestaltest einen Verlauf von „voll“ zu „leer“ - ein leerlaufender Balken, ein sich schließender Ring, eine Sanduhr, eine schrumpfende Linie. Die Engine spielt diese Animation genau so schnell ab, dass das letzte Bild mit dem Ende der Frage zusammenfällt.

Daraus folgt:

- **Die Fragendauer steht nicht fest.** Sie wird pro Quiz eingestellt - oft zwanzig bis dreißig Sekunden, sie kann aber kürzer oder länger sein. Deine Animation wird gedehnt oder gestaucht, damit sie passt.
- **Keine Zahlen und keine Ticks pro Sekunde.** Ein Timer, der „20, 19, 18…“ herunterzählt, stimmt nicht mehr, sobald sich die Dauer ändert.
- **Die letzten Sekunden sind der spannendste Moment des Spiels.** Es hilft, wenn der Verlauf zum Ende hin deutlicher oder drängender wird.
- **Aus der letzten Reihe lesbar**, auf einen Blick.
- **Mehrere Timer sind erlaubt.** Ein Balken oben und ein Ring bei der Frage werden beide angesteuert, solange jeder `timer` heißt.

Liefere den Timer als Folge von Keyframes oder als Beschreibung des Verlaufs - „der Balken läuft von rechts nach links leer und wechselt von Grün zu Rot“ genügt.

### Fliegende Emoji landen über allem

Jeder Spieler wählt beim Beitreten ein Emoji, und das Spiel wirft diese Emoji über den Bildschirm. Sie werden von der Engine auf einer Ebene über dem Theme gezeichnet. **Hier gibt es für dich nichts zu gestalten** - aber es gibt etwas, um das herum zu gestalten ist, denn sie sind keine seltene Zierde.

Sie tauchen in drei Momenten auf:

- **Wenn ein Spieler antwortet.** Das Emoji dieses Spielers steigt an einer zufälligen horizontalen Position vom unteren Rand auf, beschreibt einen Bogen und fällt wieder aus dem Bild.
- **Wenn ein Spieler eines schleudert.** Spieler können ihr Emoji vom Handy aus schleudern; Winkel und Geschwindigkeit kommen aus der Wischbewegung, und es startet rotierend aus der Mitte unten.
- **Wenn im finalen Countdown ein Platz aufgedeckt wird.** Ein Schwall der Emoji des genannten Spielers: zwanzig für einen gewöhnlichen Platz, fünfzig für den dritten, fünfundsiebzig für den zweiten und **hundertfünfzig für den Sieger.**

Was das für die Gestaltung bedeutet:

- **Halte das untere Drittel der Ranglisten- und Siegerbildschirme frei von allem Kleinen oder Wichtigen.** Während des Countdowns ist es dort unten wirklich voll.
- **Geh davon aus, dass sie mit deiner Palette kollidieren.** Es sind vollfarbige Emoji aus jeder Ecke der Unicode-Tabelle, und kein Theme hat sie im Griff. Ein Design, das nur in einem engen Farbbereich zusammenhält, wirkt in diesen Sekunden zufällig.
- **Das Schleudern wird unterdrückt, solange ein Bild oder Video zu sehen ist**, die Anhangbildschirme bleiben also ruhig.
- **Die ganze Ebene kann pro Spiel abgeschaltet werden**, baue also auch keine Komposition, die darauf angewiesen ist, dass sie da sind.

### Schriften

- **Schriften müssen einbettbar sein.** Die `.ttf`- oder `.otf`-Datei wird gebraucht, dazu eine Lizenz, die das Einbetten in eine Anwendung erlaubt. Eine Schrift, die nur als Webfont oder nur für den Druck lizenziert ist, kann nicht verwendet werden. Prüfe das, bevor du damit gestaltest; hinterher ist es eine teure Korrektur.
- Schriften mit ungewöhnlich großen Ober- oder Unterlängen lassen sich ausgleichen, aber weise darauf hin, wenn du eine verwendest.

### Farbe als Liste

Das Theme liest eine Farbliste aus einer Konfigurationsdatei, und die Handys der Spieler werden aus derselben Liste gestaltet. Liefere deine Palette als **benannte Liste**, nicht nur als Farben in den Grafiken:

| Wo                           | Farben                                                                                                                                                                                                                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Spielbildschirm**          | Hauptfarbe, Akzentfarbe, Hintergrund, Panel- oder Containerfarbe, Timer-Hintergrund, Standard-Textfarbe, Textfarbe der Kopfzeile, Textfarbe der Frage, Schaltflächentext, Dialog- und Erklärungstext, Text für Spielername und Punktzahl, die Farbe für richtig, die Farbe für falsch |
| **Die vier Antwortoptionen** | Für jede Option: eine Hintergrundfarbe, eine Randfarbe und eine flache Farbe für die Handys und die Diagramme                                                                                                                                                         |
| **Handys der Spieler**       | Hintergrund, Textfarbe, Konturfarbe, Konturfarbe der Optionen sowie Hintergrund- und Textfarbe des Antwortcontainers                                                                                                                                                                  |

Verläufe sind auf dem Spielbildschirm erlaubt: gib sie als zwei Hex-Werte an.

Einige Farben sind der _einzige_ Hebel für Teile, die die Engine selbst zeichnet, daher lohnt es sich, sie festzulegen, statt die Standardwerte zu übernehmen:

- das **Trennzeichen** - die Linien zwischen Zeilen, wo es kein Panel gibt, und auf der Punkteleiter
- die Zustände **aktiv**, **inaktiv** und **ausgewählt** einer Zeile in der Fragenauswahl
- der **Dialog**-Text
- die **Vorder- und Rückseite des QR-Codes**

Lässt du sie weg, fallen sie auf eingebaute Standardwerte zurück - Weiß, Grau, Rot, Schwarz und Weiß - die selten zu einem Design passen.

### Das QuizWitz-Logo

Eigene Designs enthalten das QuizWitz-Logo. Halte einen Platz dafür frei, an dem es dem Design nicht im Weg steht.

---

## Was zu liefern ist

### Quelldatei - Illustrator bevorzugt

Das Theme wird in Adobe Animate gebaut, und was Animate importieren kann, entscheidet darüber, wie viel deiner Arbeit die Übergabe unbeschadet übersteht:

| Werkzeug                                         | Was beim Import passiert                                                                                                                                                                                                                                                                                              | Verwende es für                                |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate importiert es direkt und wandelt deine Ebenen in Animate-Ebenen oder separate Symbole um, wobei die Ebenennamen erhalten und die Vektoren bearbeitbar bleiben. Genau dieser Schritt bewahrt die Grafiken davor, von Hand neu aufgebaut zu werden.                             | **Bevorzugt** für den finalen Liefergegenstand |
| **Adobe Photoshop**                              | Wird wie Illustrator mit intakten Ebenen importiert, liefert aber Raster statt Vektoren.                                                                                                                                                                                                              | Möglich                                        |
| **Figma**                                        | Alles läuft über SVG- und PNG-Export, und genau dabei geht die hier benötigte Ebenenstruktur verloren. Wenn du doch Figma nutzt, liefere **jedes Element einzeln als SVG**, mit Dateinamen, die den Ebenennamen entsprechen, damit sich die Struktur von Hand wiederherstellen lässt. | Die Konzeptphase, wenn du darin schneller bist |

Dateistruktur:

- Eine Zeichenfläche pro Bildschirm, benannt nach den Frames oben.
- Wiederverwendbare Teile (Schaltfläche, Spielerzeile, Antwortoption, Timer) als **Symbole** oder Komponenten, nicht als lose Kopien.
- Ebenennamen auf Englisch, ohne Leerzeichen: `question`, `option1` bis `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farben als benannte Farbfelder und Text als benannte Stile, statt an jedem Objekt einzeln gesetzt.

### Checkliste der Liefergegenstände

1. Die **Quelldatei**, aufgebaut wie oben.
2. **Jeder Frame als PNG**, 1920 × 1080 - eine Referenz dafür, wie es aussehen soll. Für Frame 2 sowohl die Fassung mit als auch die ohne Kundenlogo.
3. **Das Elementblatt** als eine Zeichenfläche: die [Inhaltsbausteine und die Bedienelemente](#the-element-sheet).
4. **Jedes einzelne Grafikelement als transparentes PNG in 2×**, in einem Ordner, Dateiname passend zum Ebenennamen.
5. **Der Timer** als Keyframes oder als schriftliche Beschreibung des Verlaufs.
6. **Schriften** als `.ttf` oder `.otf`, mit Lizenznachweis.
7. **Die Farbliste** aus [Farbe als Liste](#colour-as-a-list), als Hex-Werte.
8. **Eine halbe Seite Notizen**: was die Idee ist, wie die Optionen erscheinen sollen, was sich bewegt und was stehen bleibt. Keine zehnseitige Designbegründung - wer das Theme baut, muss wissen, was zu bauen ist. Bewegungsideen dürfen beschrieben oder als grobes Animatic geliefert werden.

### Reihenfolge der Arbeit

1. **Frame 4, der Fragebildschirm, zusammen mit dem Elementblatt.** Lass beides vor dem Rest freigeben. Zusammen enthalten sie den Timer, die Optionen, das Panel und jedes Bedienelement und legen damit den Stil des ganzen Themes fest.
2. **Frames 1 bis 3.** Sie ergeben sich ganz natürlich aus den ersten beiden.
3. **Frames 6 bis 8** kommen zuletzt.

---

## Anhang - Symbolnamen

Der Vollständigkeit halber und für alle, die genau wissen wollen, wo ihre Grafiken landen. **Du musst das nicht lesen, um die Arbeit zu erledigen**; die acht Frames und das Elementblatt oben reichen aus. Diese Namen als Ebenennamen zu verwenden spart einen Übersetzungsschritt.

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

Jedes Element mit `.text` dahinter ist ein eingepasstes Textfeld, wie unter [Wie sich Text verhält](#how-text-behaves) beschrieben: ein Rechteck, das die Engine selbst füllt. Das `timer`-Element ist ein Movieclip mit eigener Zeitleiste; die Engine liest seine Bildanzahl und bewegt den Abspielkopf proportional zur verstrichenen Zeit, höchstens 24-mal pro Sekunde.

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

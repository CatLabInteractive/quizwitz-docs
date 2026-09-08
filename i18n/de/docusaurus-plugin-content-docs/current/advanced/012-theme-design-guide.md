---
id: theme-design-guide
title: Leitfaden für das Theme-Design
---

# Leitfaden für das Theme-Design

[Theming](/docs/advanced/theming) erklärt, wie ein QuizWitz-Theme gebaut wird: in Adobe Animate, exportiert als CreateJS-Bibliothek. Diese Seite behandelt den Schritt davor - das **Gestalten** des Themes.

Sie richtet sich an Grafikdesigner und geht davon aus, dass Design und Animate-Produktion von verschiedenen Personen übernommen werden. Nur noch wenige Designer arbeiten in Adobe Animate, deshalb ist es üblich, dass eine Person die Grafiken liefert und eine andere das Theme zusammenbaut. Das funktioniert gut, aber nur, wenn die Grafiken in einer Form übergeben werden, mit der die Umsetzung tatsächlich arbeiten kann. Diese Seite beschreibt diese Form und dient zugleich als Liste der Liefergegenstände, wenn du bei einem Designer ein Angebot einholst.

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

## Sieben Frames und ein Elementblatt

Das Spiel hat Dutzende unterschiedlicher Bildschirmzustände, die meisten davon sind aber Varianten desselben Aufbaus. **Du gestaltest sieben Frames und ein Blatt mit Elementen; der Rest wird daraus abgeleitet.** Das ist keine Abkürzung - so funktioniert die Engine. Ein Bildschirm ohne eigene Grafiken fällt auf einen allgemeinen Frame zurück.

Das Blatt ist genauso wichtig wie die Frames: Ein zurückfallender Bildschirm braucht trotzdem Mobiliar in seinem Inhaltsbereich - ein Panel, eine Zeile, eine Linie - und dieses Mobiliar ist eine Gestaltungsentscheidung, nichts, was sich aus einem Hintergrund ableiten ließe.

| #     | Frame                    | Was darauf zu sehen ist                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Was daraus abgeleitet wird                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Allgemeiner Frame**    | Der Hintergrund, ein Kopftitel und ein leerer Inhaltsbereich darunter. Keine fertige Komposition - der Frame, in dem der Rest aufgebaut wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Dreizehn Bildschirmzustände: Rundenerklärung, Rangliste, Spielervorstellung, Multiple-Choice-Varianten, lange Fragen, Seats-Warnungen, Einstellungen. Jeder füllt diesen Inhaltsbereich auf seine eigene Art mit Elementen vom Blatt, er muss also Dinge tragen, die einander überhaupt nicht ähneln. Die Fragenauswahl und die lange Frage dürfen eine eigene Komposition bekommen, wenn du das möchtest; sonst nutzen sie diesen Frame. |
| **2** | **Verbinden und Warten** | Zwei Bildschirme, nicht einer. Der **Verbindungsbildschirm** ist das, was der Raum zum Beitreten sieht: fünf Zeilen Anleitung, ein Spielcode, ein QR-Code, eine Zeile mit der Zahl der verbundenen Spieler und eine Liste der nach und nach eintrudelnden Spieler. Gestalte ihn **zweimal**: mit einem Kundenlogo und ohne. Der Spielcode und der QR-Code werden von der Engine erzeugt; halte ein Quadrat für den QR-Code frei. Der **Wartebildschirm** bleibt stehen, während der Quizmaster eine Frage vorliest, und ist fast leer: das eigene Logo des Quiz oder die Grafiken des Themes, sonst nichts. Er ist länger zu sehen als fast alles andere im Spiel. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **3** | **Fragebildschirm**      | Die Frage, ein Timer, vier Antwortoptionen, eine Feedbackzeile. Der Bildschirm, auf den der Raum am längsten schaut.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **4** | **Frage mit Anhang**     | Dasselbe, angeordnet um ein Bild oder Video. Darf eine andere Komposition sein als Frame 3. Der Anhang wird so skaliert, dass er in das von dir gezeichnete Feld passt, deshalb müssen darin sowohl ein Quer- als auch ein Hochformat akzeptabel aussehen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Außerdem die bildschirmfüllende Anhangvariante und Anhänge, die zwischen Fragen gezeigt werden.                                                                                                                                                                                                                                                                                                                                                                                           |
| **5** | **Antwortbildschirm**    | Welche Antwort richtig war, wie sich die Antworten des Raums auf die Optionen verteilt haben, und eine Feedbackzeile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Außerdem der Antwortbildschirm für offene Fragen und für Fragen mit Anhang.                                                                                                                                                                                                                                                                                                                                                                                                               |
| **6** | **Rangliste und Sieger** | Eine Liste der Spieler mit Platz, Avatar, Name und Punktzahl. Liefere die **Spielerzeile** als eigenständiges, wiederverwendbares Element - sie wird standardmäßig sechsmal wiederholt, bis zu zehnmal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Sowohl die Rangliste zwischen den Runden als auch der finale Sieger.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **7** | **Runden-Intro**         | Eine kurze Ankündigung pro Rundenkategorie. Es gibt sechs Kategorien: Wissenschaft & Technik, Natur, Unterhaltung & Musik, Sport, Kunst, Geschichte. Ein Design kann mehrere Kategorien abdecken.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Alle sechs Kategorien.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Das Elementblatt

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

### Was für dich entschieden ist

- **Die Handys der Spieler.** Ein festes HTML-Layout, gestaltet aus deiner Farbliste.
- **Die Handvoll Dinge, die die Engine selbst zeichnet.** Ein Teil des Mobiliars wird im Code gezeichnet statt aus dem Theme genommen - die Linien zwischen den Zeilen der Punkteleiter, die hervorgehobene Zeile in der Fragenauswahl, der QR-Code. Diese nehmen ihre Farbe ausschließlich aus der Liste unter **Farbe als Liste**, diese Liste ist also der einzige Einfluss, den du auf sie hast.
- **Welche Bildschirme auf den allgemeinen Frame zurückfallen und wie.**
- **Wie die sechs Kategorien auf die Grafiken des Runden-Intros abgebildet werden.** Diese Zuordnung ist eine Konfigurationseinstellung, ein Intro kann also für mehrere Kategorien wiederverwendet werden.
- **Sämtliches Timing und alle Animationsdauern.**
- **Ton.** Ein Theme kann eigene Musik und Soundeffekte mitbringen, das ist aber ein eigener Liefergegenstand und nicht Teil des Gestaltungsauftrags.

### Eine Figur ist optional

Das Standard-Theme von QuizWitz hat eine Figur, die spricht und reagiert. Nichts setzt eine voraus: Der Theme-Validator warnt nur wegen des `ted`-Elements; ohne sie schlägt er nicht fehl. Das [Emerald-Theme](/docs/advanced/emerald-theme) kommt ohne Figur aus, und sie wegzulassen streicht die teuerste Animationsarbeit - Lippensynchronisation, Augen, Arme.

Ohne Figur wird das Runden-Intro zu einem grafischen, typografischen oder illustrativen Moment. Zwei Ansätze halten den Aufwand im Rahmen: eine Komposition mit einer Farb- oder Iconvariante pro Kategorie, oder eine einzige universelle Ankündigung, bei der sich nur der Rundenname ändert. Sechs wirklich unterschiedliche Intros sind viel Arbeit für ein paar Sekunden Bildschirmzeit.

---

## Wie diese Frames in der Praxis aussehen

Die Bildschirme unten stammen aus einem bestehenden Theme. Sie stehen hier, um zu zeigen, **welche Elemente auf welchem Bildschirm erscheinen und wann**. Sie sind keine Referenz für Stil _oder_ Layout: Wo dieses Theme seine Frage, seine Optionen und seinen Timer platziert, ist seine eigene Entscheidung, und deine darf völlig davon abweichen. Lies sie danach, was vorhanden sein muss, nicht danach, wo es hingehört. Sie alle und noch mehr lassen sich im [Theme-Tester](https://client.quizwitz.com/test.html) durchspielen.

### Frame 1 - der allgemeine Frame

Zwei Spielmomente auf demselben Frame: eine Fragenauswahl und eine Punkteleiter.

Sieh dir an, wie wenig sie gemeinsam haben. Die Auswahl setzt ihre drei Zeilen in ein Panel mit Rand; die Leiter hat gar kein Panel, nur Zeilen, die durch dünne Linien getrennt sind. Gemeinsam haben beide den Hintergrund und das Kopfband darüber - alles darunter gehört zum einzelnen Bildschirm und wird vom Spiel gefüllt, nicht von dir.

![Der allgemeine Frame mit einer dreizeiligen Fragenauswahl](/images/theme-design/frame1-general-multiquestion.png)

![Der allgemeine Frame mit einer fünfstufigen Punkteleiter](/images/theme-design/frame1-general-strikeladder.png)

Dieses Panel und diese Linien sind Gestaltungsentscheidungen, und sie liegen bei dir - sie kommen vom **Elementblatt**, nicht von diesem Frame. Was dieser Frame leisten muss, ist, sie zu tragen: Gestalte den Inhaltsbereich als leere, neutrale, großzügige Zone, die mit einem gerandeten Panel, einer nackten Liste und einer Zeilentabelle gleichermaßen funktioniert. Ein Hintergrund, der in der Mitte unruhig ist, oder ein Kopfbereich, der nur mit einem direkt darunter eingefügten Panel funktioniert, ist genau die Stelle, an der das bricht.

### Frame 2 - Verbinden und Warten

Mit einem Kundenlogo neben dem Spielcode und ohne, wo die eigenen Grafiken des Themes den Bildschirm tragen:

![Verbindungsbildschirm mit Kundenlogo](/images/theme-design/frame2-connect.png)

![Verbindungsbildschirm ohne Kundenlogo](/images/theme-design/frame2-connect-nologo.png)

Der Wartebildschirm ist eine eigene Komposition und keine Variante des Verbindungsbildschirms - gemeinsam haben beide nur den Hintergrund. Er bleibt stehen, während der Quizmaster eine Frage vorliest, und ist fast leer: das eigene Logo des Quiz oder die Grafiken des Themes, sonst nichts. Er ist länger zu sehen als fast alles andere im Spiel und verdient deshalb mehr Aufmerksamkeit, als ein leerer Bildschirm sonst bekommt.

![Wartebildschirm](/images/theme-design/frame2-pending.png)

### Frame 3 - der Fragebildschirm

Vier Optionen, die Frage darüber, der Timer in der Mitte. Beachte, dass eine Option auch nur aus einem Emoji bestehen kann.

![Fragebildschirm mit vier Textoptionen](/images/theme-design/frame3-question-options.png)

![Fragebildschirm mit Flaggen als Antwortoptionen](/images/theme-design/frame3-question-emoji.png)

Eine Frage ohne Optionen - die Spieler tippen ihre Antwort auf dem Handy ein. Der Bildschirm ist fast leer und der Timer wird zum Hauptelement:

![Offene Frage mit nur der Frage und einem großen Timer](/images/theme-design/frame3-question-open.png)

Der Moment, in dem die Zeit abläuft. Der Feedbackballon erscheint über dem Bildschirm und der Timer ist leer:

![Fragebildschirm im Zustand „Zeit abgelaufen“](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - Anhang

Dieselben Teile, neu angeordnet um einen Anhangbereich, mit den Optionen links und rechts:

![Fragebildschirm mit einem Bild in der Mitte](/images/theme-design/frame4-question-attachment.png)

Ein Anhang für sich allein, bildschirmfüllend:

![Bildschirmfüllender Anhang](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - der Antwortbildschirm

Dieser Bildschirm durchläuft drei Momente. Zuerst die Verteilung, noch ohne Markierung:

![Antwortbildschirm mit der Verteilung](/images/theme-design/frame5-answer-mc-spread.png)

Dann wird die richtige Option abgehakt und die falschen werden durchgestrichen:

![Antwortbildschirm mit aufgedeckter richtiger Option](/images/theme-design/frame5-answer-mc-reveal.png)

Und wenn die Frage eine Erklärung mitbringt, fällt ein Ballon über die Grafik. Lass Platz dafür - er landet über allem, was du gestaltet hast:

![Antwortbildschirm mit dem Erklärungsballon](/images/theme-design/frame5-answer-mc-explanation.png)

Bei einer kleinen Gruppe ist derselbe Moment eine Punkteliste statt eines Diagramms:

![Antwortbildschirm für eine kleine Gruppe](/images/theme-design/frame5-answer-mc-small.png)

Bei einer offenen Frage zeigt das Diagramm, wie viele Spieler richtig lagen:

![Antwortbildschirm für eine offene Frage](/images/theme-design/frame5-answer-open.png)

### Frame 6 - Rangliste und Sieger

Die Rangliste nach einer Runde. Die Spielerzeile ist das Element, das sich wiederholt: Platz, Avatar, Name, Punktzahl.

![Rangliste mit sechs Spielerzeilen](/images/theme-design/frame6-roundoutro.png)

Der finale Countdown nennt einen Spieler nach dem anderen, vom letzten Platz bis zum ersten - Platz, Punktzahl und Teamname im Rampenlicht. Hier sind auch die fliegenden Emoji am dichtesten; siehe den Hinweis weiter unten:

![Der Sieger-Countdown, der einen Spieler nennt](/images/theme-design/frame6-winner-countdown.png)

![Die Endrangliste](/images/theme-design/frame6-winner.png)

### Frame 7 - das Runden-Intro

Ein Design, wahlweise mit einer Variante pro Kategorie:

![Runden-Intro für die Kategorie Natur](/images/theme-design/frame7-roundintro-nature.png)

![Runden-Intro für die Kategorie Wissenschaft](/images/theme-design/frame7-roundintro-science.png)

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

In der Praxis: Die vier Antwortoptionen sind vier getrennte Ebenen, nicht eine. Der Timer ist vom Hintergrund getrennt. Eine Schaltfläche und ihre Beschriftung sind zwei Elemente. Eine Spielerzeile ist eine Gruppe, die sich duplizieren lässt.

Was zusammengefasst werden darf: rein dekorative Hintergrundgrafik, die als einzelnes Standbild funktioniert.

Das ist die eine Regel, die wirklich wehtut, wenn sie nicht befolgt wird - die Grafiken müssen dann auseinandergenommen oder neu gezeichnet werden, und genau diese Kosten soll dieses Vorgehen vermeiden.

### Effekte, die es nicht überstehen

Die Engine zeichnet auf ein HTML5-Canvas. Diese müssen **ins Bild eingebacken** oder weggelassen werden:

- Live-Weichzeichner, Schlagschatten und Schein als Filter → liefere sie als Grafik
- Füllmethoden (Multiplizieren, Negativ multiplizieren, Überlagern) → löse sie in flache Farbe auf
- Ebeneneffekte und Einstellungsebenen
- Verläufe **innerhalb** von Text oder Text mit Kontur je Zeichen
- Masken, die sich pro Frame ändern

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
- **Das Feld ist ein Maximum, kein Versprechen.** Du gestaltest seine Proportionen; die Füllung schwankt.
- **Zwölf Sprachen.** Deutsche Komposita sind lang, und Ungarisch ist nicht gnädiger. Ein Feld, das im Englischen knapp ist, fällt im Deutschen auf eine unleserlich kleine Größe.
- **Emoji können innerhalb von Text auftauchen.** Spieler wählen eines neben ihrem Teamnamen, und eine Frage oder eine Option kann eines enthalten - manchmal besteht eine Option aus nichts als einem Emoji. Sie werden farbig gezeichnet und sind höher als die Buchstaben um sie herum.

Was die Umsetzung über jedes Textfeld wissen muss: wo es liegt, wie groß es ist, wie es ausgerichtet ist, welche Farbe und welche Schrift. Nicht: bei welcher Punktgröße.

Zwei Dinge folgen daraus, die du nutzen kannst: Ein großes Feld mit kurzem Text wird von selbst zu einer starken typografischen Komposition, und ein Feld, das du bewusst schmal und hoch anlegst, zwingt Text in eine Spalte. Du kannst die Einpassung als Gestaltungsmittel nutzen - du solltest nur nicht gegen sie gestalten.

### Der Timer - Pflicht, und er ist eine Animation

**Jeder Fragebildschirm hat einen Timer.** Er ist nicht optional; der Raum muss sehen, wie viel Zeit bleibt. Beide Fragen-Frames tragen einen.

**Der Timer ist keine zählende Zahl, sondern eine Animation, deren Abspielkopf die Engine bewegt.** Du gestaltest einen Verlauf von „voll“ zu „leer“ - ein leerlaufender Balken, ein sich schließender Ring, eine Sanduhr, eine schrumpfende Linie. Die Engine spielt diese Animation genau so schnell ab, dass das letzte Bild mit dem Ende der Frage zusammenfällt.

Daraus folgt:

- **Die Fragendauer steht nicht fest.** Sie wird pro Quiz eingestellt - oft zwanzig bis dreißig Sekunden, sie kann aber kürzer oder länger sein. Deine Animation wird gedehnt oder gestaucht, damit sie passt. Gestalte einen _Verlauf_, keine Animation über eine feste Sekundenzahl.
- **Keine Zahlen und keine Ticks pro Sekunde.** Ein Timer, der „20, 19, 18…“ herunterzählt, stimmt nicht mehr, sobald sich die Dauer ändert.
- **Die letzten Sekunden sind der spannendste Moment des Spiels.** Es hilft, wenn der Verlauf zum Ende hin deutlicher oder drängender wird.
- **Aus der letzten Reihe lesbar**, auf einen Blick.
- **Mehrere Timer sind erlaubt.** Ein Balken oben und ein Ring bei der Frage werden beide angesteuert, solange jeder `timer` heißt.

Liefere den Timer als Folge von Keyframes oder als Beschreibung des Verlaufs - „der Balken läuft von rechts nach links leer und wechselt von Grün zu Rot“ genügt.

### Fliegende Emoji landen über allem

Jeder Spieler wählt beim Beitreten ein Emoji, und das Spiel wirft diese Emoji über den Bildschirm. Sie werden von der Engine auf einer Ebene über dem Theme gezeichnet, in genau den Farben, die das Emoji des Spielers zufällig hat. **Hier gibt es für dich nichts zu gestalten** - aber es gibt etwas, um das herum zu gestalten ist, denn sie sind keine seltene Zierde. Sie tauchen in drei Momenten auf:

- **Wenn ein Spieler antwortet.** Das Emoji dieses Spielers steigt an einer zufälligen horizontalen Position vom unteren Rand auf, beschreibt einen Bogen und fällt wieder aus dem Bild.
- **Wenn ein Spieler eines schleudert.** Spieler können ihr Emoji vom Handy aus schleudern; Winkel und Geschwindigkeit kommen aus der Wischbewegung, und es startet rotierend aus der Mitte unten.
- **Wenn im finalen Countdown ein Platz aufgedeckt wird.** Ein Schwall der Emoji des genannten Spielers: zwanzig für einen gewöhnlichen Platz, fünfzig für den dritten, fünfundsiebzig für den zweiten und **hundertfünfzig für den Sieger.**

Sie kommen immer vom unteren Rand herein, beschreiben unter Schwerkraft einen Bogen und fallen wieder heraus. Was das für die Gestaltung bedeutet:

- **Halte das untere Drittel der Ranglisten- und Siegerbildschirme frei von allem Kleinen oder Wichtigen.** Während des Countdowns ist es dort unten wirklich voll.
- **Geh davon aus, dass sie mit deiner Palette kollidieren.** Es sind vollfarbige Emoji aus jeder Ecke der Unicode-Tabelle, und kein Theme hat sie im Griff. Ein Design, das nur in einem engen Farbbereich zusammenhält, wirkt in diesen Sekunden zufällig.
- **Das Schleudern wird unterdrückt, solange ein Bild oder Video zu sehen ist**, die Anhangbildschirme bleiben also ruhig.
- Die ganze Ebene lässt sich pro Partie abschalten, baue also auch keine Komposition, die darauf angewiesen ist, dass sie da sind.

### Schriften

- **Schriften müssen einbettbar sein.** Die `.ttf`- oder `.otf`-Datei wird gebraucht, dazu eine Lizenz, die das Einbetten in eine Anwendung erlaubt. Eine Schrift, die nur als Webfont oder nur für den Druck lizenziert ist, kann nicht verwendet werden. Prüfe das, bevor du damit gestaltest; hinterher ist es eine teure Korrektur.
- Schriften mit ungewöhnlich großen Ober- oder Unterlängen lassen sich ausgleichen, aber weise darauf hin, wenn du eine verwendest.

### Farbe als Liste

Das Theme liest eine Farbliste aus einer Konfigurationsdatei, und die Handys der Spieler werden aus derselben Liste gestaltet. Liefere deine Palette als **benannte Liste**, nicht nur als Farben in den Grafiken:

- **Spielbildschirm:** Hauptfarbe, Akzentfarbe, Hintergrund, Panel- oder Containerfarbe, Timer-Hintergrund, Standardtextfarbe, Kopftextfarbe, Fragetextfarbe, Schaltflächentext, Dialog- und Erklärungstext, Text für Spielername und Punktzahl, die Farbe für richtig, die Farbe für falsch.
- **Die vier Antwortoptionen:** jeweils mit einer Hintergrund- und einer Randfarbe, dazu eine flache Farbe pro Option für die Handys und die Diagramme.
- **Handys der Spieler:** Hintergrund, Textfarbe, Konturfarbe, Konturfarbe der Optionen sowie Hintergrund- und Textfarbe des Antwortcontainers.

Verläufe sind auf dem Spielbildschirm erlaubt: gib sie als zwei Hex-Werte an.

Ein paar Farben sind der _einzige_ Hebel auf Teile, die die Engine selbst zeichnet, es lohnt sich also, sie zu entscheiden statt sie voreingestellt zu lassen: die **Trennlinie** (die Linien zwischen Zeilen, wo es kein Panel gibt, und auf der Punkteleiter), die Zustände **aktiv**, **inaktiv** und **ausgewählt** einer Zeile in der Fragenauswahl, der **Dialogtext** und die **Vorder- und Rückseite des QR-Codes**. Lässt du sie weg, fallen sie auf eingebaute Standardwerte zurück - Weiß, Grau, Rot, Schwarz und Weiß - die selten zu einem Design passen.

### Das QuizWitz-Logo

Eigene Designs enthalten das QuizWitz-Logo. Halte einen Platz dafür frei, an dem es dem Design nicht im Weg steht.

---

## Was zu liefern ist

### Quelldatei - Illustrator bevorzugt

**Adobe Illustrator (`.ai`) ist bevorzugt, und dafür gibt es einen konkreten Grund.** Das Theme wird in Adobe Animate gebaut, das Illustrator-Dateien direkt importiert und deine Ebenen in Animate-Ebenen oder eigene Symbole umwandelt, wobei die Ebenennamen erhalten bleiben und die Vektoren bearbeitbar sind. Genau dieser Schritt bewahrt die Grafiken davor, von Hand neu aufgebaut zu werden.

Figma oder Photoshop geht auch, aber sei dir über den Preis im Klaren: Bei Figma läuft alles über SVG- und PNG-Export, und genau dort geht die hier nötige Ebenenstruktur verloren. Wenn du doch Figma nutzt, liefere **jedes Element einzeln als SVG**, mit Dateinamen, die den Ebenennamen entsprechen, damit sich die Struktur von Hand wiederherstellen lässt. Photoshop importiert wie Illustrator mit intakten Ebenen in Animate, liefert aber Raster statt Vektor.

Wenn du in Figma schneller bist, nutze es für die Konzeptphase und liefere die finale Fassung in Illustrator.

Dateistruktur:

- Eine Zeichenfläche pro Bildschirm, jede exakt 1920 × 1080, benannt nach den Frames oben.
- Wiederverwendbare Teile (Schaltfläche, Spielerzeile, Antwortoption, Timer) als **Symbole** oder Komponenten, nicht als lose Kopien.
- Ebenennamen auf Englisch, ohne Leerzeichen: `question`, `option1` bis `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farben als benannte Farbfelder und Text als benannte Stile, statt an jedem Objekt einzeln gesetzt.

### Checkliste der Liefergegenstände

1. Die **Quelldatei**, aufgebaut wie oben.
2. **Jeder Frame als PNG**, 1920 × 1080 - eine Referenz dafür, wie es aussehen soll. Für Frame 2 sowohl die Fassung mit als auch die ohne Kundenlogo.
3. **Das Elementblatt** als eine Zeichenfläche: die oben aufgeführten Inhaltsbausteine und Bedienelemente.
4. **Jedes einzelne Grafikelement als transparentes PNG in 2×**, in einem Ordner, Dateiname passend zum Ebenennamen.
5. **Der Timer** als Keyframes oder als schriftliche Beschreibung des Verlaufs.
6. **Schriften** als `.ttf` oder `.otf`, mit Lizenznachweis.
7. **Die oben beschriebene Farbliste**, als Hex-Werte.
8. **Eine halbe Seite Notizen**: was die Idee ist, wie die Optionen erscheinen sollen, was sich bewegt und was stehen bleibt. Keine zehnseitige Designbegründung - wer das Theme baut, muss wissen, was zu bauen ist. Bewegungsideen dürfen beschrieben oder als grobes Animatic geliefert werden.

### Reihenfolge der Arbeit

Beginne mit Frame 3, dem Fragebildschirm, zusammen mit dem Elementblatt, und lass beide vor dem Rest freigeben. Zusammen tragen sie den Timer, die Optionen, das Panel und jedes Bedienelement, sie legen damit den Stil des gesamten Themes fest, und der Fragebildschirm ist der, auf den der Raum am längsten schaut. Frames 1 und 2 ergeben sich daraus von selbst; Frames 5 bis 7 kommen zuletzt.

---

## Anhang - Symbolnamen

Der Vollständigkeit halber und für alle, die genau wissen wollen, wo ihre Grafiken landen. **Du musst das nicht lesen, um die Arbeit zu machen**; die sieben Frames und das Elementblatt oben genügen. Diese Namen als Ebenennamen zu verwenden spart einen Übersetzungsschritt.

| Frame                                           | Symbolname                                                                                                                                | Erforderliche Teile                                                                                                                                                                                                               |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Allgemeiner Frame     | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (der Inhaltsbereich); Textfeld `title` optional                                                                                                                                                  |
| 1b. Fragenauswahl, lange Frage  | `MultiQuestionScreen`, `LongQuestionScreen`; beide optional, fallen auf den allgemeinen Frame zurück                                      | Auswahl: `questions`-Platzhalter, `timer`; lange Frage: `question`-Platzhalter                                                                                                                    |
| 2. Verbindungsbildschirm | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, mit einem `logo`-Platzhalter                                   | `instructions.line1` bis `line5`, `connectedPlayers`; `qrCode`-Platzhalter mit Frame-Label `showQrCode` optional                                                                                                                  |
| 2b. Wartebildschirm             | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | `header.text`                                                                                                                                                                                                                     |
| 3. Fragebildschirm       | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` bis `option4`, Frame-Labels `showOptions` und `showFeedback`                                                                                                                 |
| 4. Frage mit Anhang      | `QuestionScreenAttachment`                                                                                                                | wie oben, plus `attachment.placeholder`                                                                                                                                                                                           |
| 4b. Bildschirmfüllender Anhang  | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                                     |
| 5. Antwortbildschirm     | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` bis `option4`, `answer.text`, `feedback.text`                                                                                                                                                                           |
| 5b. Antwort auf offene Frage    | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment`-Varianten optional                                                           | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                                             |
| 6. Rangliste             | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` und `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in der Zeile: `position`, `name`, `score`, `avatar` optional                                                            |
| 7. Runden-Intro          | ein oder mehrere Symbole mit beliebigem Namen; die Konfigurationsdatei ordnet jeder der sechs Kategorien ein Symbol zu                    | -                                                                                                                                                                                                                                 |
| -                                               | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                                                |
| -                                               | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | keine eigenen Grafiken nötig - aufgebaut aus dem, was in deinen Frames vorkommt                                                                                                                                                   |
| -                                               | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | nur in der Desktop-App zu sehen, nicht in einem Live-Quiz. Nicht Teil des Auftrags: Sie werden aus der Theme-Vorlage übernommen und mit deinem Hintergrund und deinen Schaltflächen neu gestaltet |

Die Runden-Intro-Symbole des Standard-Themes heißen `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` und `RoundIntroTedCultHist`; Kunst und Geschichte teilen sich das letzte. Das „Ted“ in diesen Namen ist ein Überbleibsel der Figur aus dem ursprünglichen Theme und bedeutet nicht, dass darin eine Figur auftauchen muss.

Jedes Element mit `.text` dahinter ist ein eingepasstes Textfeld wie oben beschrieben: ein Rechteck, das die Engine selbst füllt. Das `timer`-Element ist ein Movieclip mit eigener Zeitleiste; die Engine liest seine Bildanzahl und bewegt den Abspielkopf proportional zur verstrichenen Zeit, höchstens 24-mal pro Sekunde.

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

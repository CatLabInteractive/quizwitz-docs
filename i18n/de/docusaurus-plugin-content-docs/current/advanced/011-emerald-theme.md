---
id: emerald-theme
name: Emerald Thema
---

# Emerald Thema

Das Emerald Thema ist der einfachste Weg, das Aussehen deines QuizWitz Spiels anzupassen. Standardmäßig ist das Thema ein klarer Blau/Grün-Stil mit lebendigen Optionsfarben, aber durch die Kombination von Quiz-Anhängen und Themenmodifikatoren kannst du das Aussehen stark verändern.

:::tip
Du kannst unseren [Theme Tester](https://client.quizwitz.com/test.html?theme=emerald) nutzen, um zu sehen, wie deine Einstellungen aussehen werden.
:::

![Ein Screenshot des Emerald Themas](/images/emerald/emerald.png)

## Wähle das Emerald Thema aus

Wähle in deinen **Quiz-Einstellungen** **Thema** und aktiviere **Emerald**.

Du kannst ein Quiz mit dem Emerald Thema [hier](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default) testen.

![Ein Screenshot der Quiz-Einstellungen](/images/emerald/quiz-settings.png)

## Anhänge

### Quiz-Anhänge

Bei weitem der einfachste Weg, das Aussehen und Gefühl des Spiels zu ändern, ist das Anhängen von Bildern an dein Quiz. Öffne die **Quiz-Einstellungen** und scrolle zum Abschnitt **Anhänge**. Hier kannst du Bilder hochladen, die als Hintergrund, Kundenlogo, Verbindungs- und Wartebildschirme (für Konferenz- und Live-Quizze) verwendet werden – und mehr.

![Ein Screenshot der Quiz-Anhänge](/images/emerald/quiz-attachments.png)

### Runden-Anhänge

Du kannst auch Bilder oder Videos hochladen, die vor und nach dem Spiel abgespielt werden. Das gilt auch für Runden: Finde ein Bild, das du als Runden-Einführung verwenden möchtest, gehe zu den **Rundeneinstellungen**, deaktiviere **Runden-Einführung anzeigen** um die Standard-Einführung zu verbergen, und lade dein Bild oder Video als **Vor der Runde zeigen** hoch. Wenn die Runde startet, wird das Bild oder Video anstelle der Standard-Einführung angezeigt.

![Ein Screenshot der Runden-Anhänge](/images/emerald/round-settings.png)

:::tip
Verwende Bilder und Videos mit einer Auflösung von 1920 x 1080 für beste Ergebnisse.
:::

:::info
Nachdem du mit den Anhängen gespielt hast, hast du etwas [wie das hier](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Ein Screenshot des Emerald Themas mit Quiz-Anhängen](/images/emerald/emerald-with-attachments.png)

### Musik

Alle Musik im Spiel kann ebenfalls durch Anhänge ersetzt werden. Alle Audiodateien, die in den **während der Frage**-Slots hochgeladen werden, werden während des Frage-Countdowns abgespielt.

## Emerald Themenmodifikatoren

Zusätzlich zu Anhängen kannst du das Emerald Thema auch mit **Abfrageparametern** manipulieren. Das sind Parameter, die du zur **Erweiterten Spieloptionen**-URL hinzufügen kannst — und die das Erscheinungsbild des Themas ändern.

Dafür starten wir mit einem Beispielquiz (ohne Anhänge):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Wenn du das obige Quiz startest, ist das Spiel im Standard Emerald Stil. Lass uns das ändern.

:::tip
Der einfachste Weg, mit diesen Parametern zu experimentieren, ist die Nutzung unseres [Theme Testers](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Wenn du fertig bist mit dem Experimentieren, kannst du die Parameter in deine erweiterte Spieloptionen-URL kopieren und einfügen.
:::

Die verfügbaren Modifikatoren sind:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 Farben, durch Kommas getrennt)
- optionBorderColors (4 Farben, durch Kommas getrennt)

Außerdem kannst du eine Standardschrift festlegen:

- defaultFont
- headerFont

Diese Schriften müssen URLs sein, die öffentlich zugängliche Schriftdateien enthalten.

Jeder dieser Modifikatoren kann eine einzelne Farbe im HTML-Hex-Format enthalten (ff0000), oder einen linearen Verlauf, indem mehrere Farben durch einen Bindestrich getrennt werden (– zum Beispiel ff1b6b-45caff). (Beachte, dass das # Symbol nicht hinzugefügt werden sollte.)

:::note
Die Abfrageparameter müssen mit einem Fragezeichen ( ? ) beginnen und jeder Parameter muss mit einem Kaufmanns-Und ( & ) getrennt werden. Für weitere Informationen zu Abfrageparametern besuche [Wikipedia](https://de.wikipedia.org/wiki/Query_string).
:::

Indem du diese Parameter zu deiner Spiel-URL hinzufügst, kannst du die Farben im Thema anpassen:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Ein Screenshot des Emerald Themas mit benutzerdefinierten Modifikatoren](/images/emerald/theme_properties.png)

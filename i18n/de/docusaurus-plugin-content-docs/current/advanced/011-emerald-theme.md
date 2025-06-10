---
id: emerald-theme
name: Emerald-Thema
---

# Emerald-Thema

Das Emerald-Thema ist der einfachste Weg, das Aussehen deines QuizWitz-Spiels anzupassen. Standardmäßig ist das Thema ein sauberer Blau-/Grün-Stil mit lebendigen Optionsfarben, aber durch die Kombination von Quiz-Anhängen und Themenmodifikatoren kannst du das Aussehen drastisch verändern.

:::tip
Du kannst unseren [Theme-Tester](https://client.quizwitz.com/test.html?theme=emerald) benutzen, um zu sehen, wie deine Einstellungen aussehen werden.
:::

![Ein Screenshot des Emerald-Themas](/images/emerald/emerald.png)

## Wähle das Emerald-Thema aus

Wähle in deinen **Quiz-Einstellungen** unter **Thema** die Option **Emerald** aus und aktiviere sie.

Du kannst ein Quiz mit dem Emerald-Thema [hier](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default) testen.

![Ein Screenshot der Quiz-Einstellungen](/images/emerald/quiz-settings.png)

## Anhänge

### Quiz-Anhänge

Der mit Abstand einfachste Weg, das Aussehen und das Gefühl des Spiels zu ändern, ist das Anhängen von Bildern an dein Quiz. Öffne die **Quiz-Einstellungen** und scrolle zum Abschnitt **Anhänge** nach unten. Hier kannst du Bilder hochladen, die als Hintergrund, Kundenlogo, Verbindungs- und Wartebildschirme (für Konferenz- und Live-Quizze) und mehr verwendet werden.

![Ein Screenshot der Quiz-Anhänge](/images/emerald/quiz-attachments.png)

### Runden-Anhänge

Du kannst auch Bilder oder Videos hochladen, die vor und nach dem Spiel abgespielt werden. Das gilt auch für Runden: Finde ein Bild, das du als Runden-Einführung verwenden möchtest, gehe zu den **Rundeneinstellungen**, deaktiviere **Rundenintro anzeigen**, um die Standard-Einführung zu verbergen, und lade dein Bild oder Video als **Vor der Runde anzeigen** hoch. Wenn die Runde startet, wird das Bild oder Video statt der Standard-Einführung angezeigt.

![Ein Screenshot der Runden-Anhänge](/images/emerald/round-settings.png)

:::tip
Verwende Bilder und Videos mit einer Auflösung von 1920 x 1080 für beste Ergebnisse.
:::

:::info
Nach dem Experimentieren mit den Anhängen erhalten wir etwas [wie das hier](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Ein Screenshot des Emerald-Themas mit Quiz-Anhängen](/images/emerald/emerald-with-attachments.png)

### Musik

Alle Musik im Spiel kann ebenfalls durch Anhänge ersetzt werden. Alle in den **Während der Frage**-Slots hochgeladenen Audiodateien werden während des Frage-Countdowns abgespielt.

## Emerald-Thema-Modifier

Zusätzlich zu den Anhängen kannst du das Emerald-Thema auch mit **Abfrageparametern** manipulieren. Das sind Parameter, die du der URL für **Erweiterte Spieloptionen** hinzufügen kannst — und sie ändern das Aussehen des Themas.

For this, we will start with an example quiz (without any attachments):\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Wenn du das oben genannte Quiz startest, ist das Spiel im Standard-Emerald-Stil. Lass uns das ändern.

:::tip
Der einfachste Weg, mit diesen Parametern zu experimentieren, ist die Nutzung unseres Theme-Testers.\
The easiest way to experiment with these parameters is by using our theme tester.\
When you are done experimenting, you can copy — paste the parameters to your advanced game options URL.
:::

Die verfügbaren Modifier sind:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 Farben, durch Komma getrennt)
- optionBorderColors (4 Farben, durch Komma getrennt)

Außerdem kannst du eine Standardschriftart festlegen:

- defaultFont
- headerFont

Diese Schriftarten müssen URLs zu öffentlich verfügbaren Schriftdateien sein.

Jeder dieser Modifier kann eine einzelne Farbe im HTML-Hex-Format (ff0000) oder einen linearen Farbverlauf enthalten, indem mehrere Farben durch ein Minuszeichen getrennt werden (— zum Beispiel ff1b6b-45caff). (Beachte, dass das #-Symbol nicht hinzugefügt werden sollte.)

:::note
Die Abfrageparameter müssen mit einem Fragezeichen ( ? ) beginnen und jeder Parameter muss mit einem Ampersand ( & ) getrennt werden. Für weitere Informationen über Abfrageparameter besuche [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

By adding these parameters to your game URL, you can modify the colors in the theme:\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Ein Screenshot des Emerald-Themas mit benutzerdefinierten Modifikatoren](/images/emerald/theme_properties.png)

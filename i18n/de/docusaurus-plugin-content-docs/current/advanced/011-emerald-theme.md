---
id: emerald-theme
title: Emerald-Theme
---

# Emerald-Theme

Das Emerald-Theme ist der einfachste Weg, das Aussehen deines QuizWitz-Spiels anzupassen. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks - drastically.

:::tip
Du kannst unseren [Theme Tester](https://client.quizwitz.com/test.html?theme=emerald) nutzen, um zu sehen, wie deine Einstellungen aussehen werden.
:::

![Ein Screenshot des Emerald-Themes](/images/emerald/emerald.png)

## Wähle das Emerald-Theme aus

Wähle in deinen **Quiz-Einstellungen** **Theme** und aktiviere **Emerald**.

Du kannst ein Quiz mit dem Emerald-Theme [hier](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default) testen.

![Ein Screenshot der Quiz-Einstellungen](/images/emerald/quiz-settings.png)

## Anhänge

### Quiz-Anhänge

Bei weitem der einfachste Weg, das Aussehen und Gefühl des Spiels zu ändern, ist das Anhängen von Bildern an dein Quiz. Öffne die **Quiz-Einstellungen** und scrolle zum Abschnitt **Anhänge**. Here you can upload images that will be used as background, client logo, connect - and wait screens (for conference - and live quizzes), and more.

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

![Ein Screenshot des Emerald-Themes mit Quiz-Anhängen](/images/emerald/emerald-with-attachments.png)

### Musik

Alle Musik im Spiel kann ebenfalls durch Anhänge ersetzt werden. Alle Audiodateien, die in den **während der Frage**-Slots hochgeladen werden, werden während des Frage-Countdowns abgespielt.

## Emerald Themenmodifikatoren

Zusätzlich zu Anhängen kannst du das Emerald-Theme auch mit **Abfrageparametern** manipulieren. These are parameters you can add to the **advanced game options** URL - and they change the look of the theme.

Dafür starten wir mit einem Beispielquiz (ohne Anhänge):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Wenn du das obige Quiz startest, läuft das Spiel im Standard-Emerald-Stil. Lass uns das ändern.

:::tip
Der einfachste Weg, mit diesen Parametern zu experimentieren, ist die Nutzung unseres [Theme Testers](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
When you are done experimenting, you can copy - paste the parameters to your advanced game options URL.
:::

Die verfügbaren Modifikatoren sind:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma - separated)
- optionBorderColors (4 colors, comma - separated)

Außerdem kannst du eine Standardschrift festlegen:

- defaultFont
- headerFont

Diese Schriften müssen URLs sein, die öffentlich zugängliche Schriftdateien enthalten.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( - for example ff1b6b-45caff). (Beachte, dass das # Symbol nicht hinzugefügt werden sollte.)

:::note
Die Abfrageparameter müssen mit einem Fragezeichen ( ? ) beginnen und jeder Parameter muss mit einem Kaufmanns-Und ( & ) getrennt werden. Für weitere Informationen zu Abfrageparametern besuche [Wikipedia](https://de.wikipedia.org/wiki/Query_string).
:::

Indem du diese Parameter zu deiner Spiel-URL hinzufügst, kannst du die Farben im Theme anpassen:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Ein Screenshot des Emerald-Themes mit benutzerdefinierten Modifikatoren](/images/emerald/theme_properties.png)

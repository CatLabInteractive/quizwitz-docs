---
id: emerald-theme
name: Smaragdthema
---

# Smaragdthema

Das Smaragd-Theme ist der einfachste Weg, um das Aussehen Ihres QuizWitz Spiels anzupassen. Standardmäßig ist das Theme ein sauberer blauer / grüner Stil mit lebhaften Optionsfarben, aber durch die Kombination von Quiz-Anhängen und Theme-Modifikatoren können Sie die Art und Weise ändern, wie es aussieht — drastisch.

:::tip
Du kannst unseren [Thementest](https://client.quizwitz.com/test.html?theme=emerald) verwenden, um zu sehen, wie deine Einstellungen aussehen werden.
:::

![Ein Screenshot des Smaragdtheme](/images/emerald/emerald.png)

## Smaragdthema auswählen

Wählen Sie in Ihren **Quiz Einstellungen**, **Theme** aus und aktivieren Sie **Emerald**.

Du kannst einen Test mit dem Smaragdthema [here](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Ein Screenshot der Quizeinstellungen](/images/emerald/quiz-settings.png)

## Anhänge

### Quiz Anhänge

Der einfachste Weg, das Aussehen und das Gefühl des Spiels zu verändern, ist das Anhängen von Bildern an Ihrem Quiz. Öffne die **Quiz-Einstellungen** und gehe zum Abschnitt **Anhänge**. Hier können Sie Bilder hochladen, die als Hintergrund, Client-Logo verwendet werden Verbinden — und Wartebildschirme (für Konferenz- und Live-Quizzen) und mehr.

![Ein Screenshot der Quiz-Anhänge](/images/emerald/quiz-attachments.png)

### Anhänge runden

Sie können auch Bilder oder Videos hochladen, die vor und nach dem Spiel wiedergegeben werden. Dies gilt auch für Runden: Finde ein Bild, das du als runde Einführung verwenden möchtest, gehe zu **runden Einstellungen**, Deaktiviere **Runde Intro** um die Standardeinleitung zu verstecken, und lade dein Bild oder Video als **Vor Runde anzeigen** hoch. Wenn die Runde beginnt, wird das Bild oder das Video anstelle der Standardeinführung angezeigt.

![Ein Screenshot der runden Anhänge](/images/emerald/round-settings.png)

:::tip
Verwenden Sie Bilder und Videos mit einer Auflösung von 1920 x 1080 für beste Ergebnisse.
:::

:::info
Nachdem wir mit den Anhängen gespielt haben, landen wir mit etwas [ähnlich](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Ein Screenshot des Smaragd-Themes mit Quiz-Anhängen](/images/emerald/emerald-with-attachments.png)

### Musik

Alle Musik im Spiel kann auch durch Anhänge ersetzt werden. Alle Audiodateien, die in den **während der Fragen** Slots hochgeladen werden, werden während des Fragencountdown abgespielt.

## Smaragd-Theme-Modifikatoren

Zusätzlich zu den Anhängen können Sie das Smaragdthema auch mit **Query-Parametern** bearbeiten. Dies sind Parameter, die du zur URL der **erweiterten Spieloptionen** hinzufügen kannst und die das Aussehen des Themes verändern.

Dazu beginnen wir mit einem Beispiel-Quiz (ohne Anhänge):\
https://play.quizwitz.com/11486:gFUFUFh7i/emerald-theme-tutorial-default

Wenn Sie das obige Quiz starten, wird das Spiel im voreingestellten Smaragdstil sein. Lassen Sie uns das ändern.

:::tip
Der einfachste Weg, mit diesen Parametern zu experimentieren, ist die Verwendung unseres Thementester.\
Der einfachste Weg, mit diesen Parametern zu experimentieren, ist die Verwendung unseres Thementester.\
Wenn du mit dem Experimentieren fertig bist, kannst du kopieren — füge die Parameter in die URL deiner erweiterten Spieloptionen ein.
:::

Die verfügbaren Modifikatoren sind:

- Hintergrundfarbe
- startfarbe
- accentColor
- timerbackfarbe
- headerTextColor
- optionTextColor
- optionFarben (4 Farben, Komma — getrennt)
- optionBorderColors (4 Farben, Komma — getrennt)

Zusätzlich können Sie eine Standardschriftart festlegen:

- defaultFont
- header-Schriftart

Diese Schriftarten müssen URLs für öffentlich zugängliche Schriftarten sein.

Jeder dieser Modifikatoren kann eine einzelne Farbe im HTML-Hex-Format enthalten (ff0000), oder ein linearer Verlauf, indem mehrere Farben durch ein Minussymbol geteilt werden ( — zum Beispiel ff1b6b-45caff). (Beachten Sie, dass das # Symbol nicht hinzugefügt werden sollte.)

:::note
Die Abfrageparameter müssen mit einem Fragezeichen beginnen ( ? ) und jeder Parameter muss mit einem Amperand ( & ) geteilt werden. Weitere Informationen zu den Abfrageparametern finden Sie unter [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Wenn du diese Parameter deiner Spiel-URL hinzufügst, kannst du die Farben im Theme ändern:\
https://play.quizwitz.com/11486:gFUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Ein Screenshot des Smaragd-Themes mit benutzerdefinierten Modifikatoren](/images/emerald/theme_properties.png)

---
id: emerald-theme
title: Emerald-Theme
---

# Emerald-Theme

Das Emerald-Theme ist der einfachste Weg, das Aussehen deines QuizWitz-Spiels anzupassen. Standardmäßig ist das Theme ein klarer Blau/Grün-Stil mit lebendigen Optionsfarben, aber durch die Kombination von Quiz-Anhängen und Theme-Modifikatoren kannst du das Aussehen stark verändern.

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

Bei weitem der einfachste Weg, das Aussehen und Gefühl des Spiels zu ändern, ist das Anhängen von Bildern an dein Quiz. Öffne die **Quiz-Einstellungen** und scrolle zum Abschnitt **Anhänge**. Hier kannst du Bilder hochladen, die als Hintergrund, Kundenlogo, Verbindungs- und Wartebildschirme (für Konferenz- und Live-Quizze) verwendet werden - und mehr.

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

Zusätzlich zu Anhängen kannst du das Emerald-Theme auch mit **Abfrageparametern** manipulieren. Das sind Parameter, die du zur **Erweiterten Spieloptionen**-URL hinzufügen kannst - und die das Erscheinungsbild des Themes ändern.

Dafür starten wir mit einem Beispielquiz (ohne Anhänge):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Wenn du das obige Quiz startest, läuft das Spiel im Standard-Emerald-Stil. Lass uns das ändern.

:::tip
Der einfachste Weg, mit diesen Parametern zu experimentieren, ist die Nutzung unseres [Theme Testers](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Wenn du fertig bist mit dem Experimentieren, kannst du die Parameter in deine erweiterte Spieloptionen-URL kopieren und einfügen.
:::

Die verfügbaren Modifikatoren sind:

- backgroundColor
- mainColor
- accentColor
- containerColor (der Fragencontainer; kann einen Alphawert enthalten, zum Beispiel ffffff40)
- timerBackgroundColor
- headerTextColor
- optionTextColor
- dialogTextColor
- pieChartLabelColor
- ladderColor
- optionColors (4 Farben, durch Kommas getrennt)
- optionBorderColors (4 Farben, durch Kommas getrennt)

Auch die Geräte der Spieler lassen sich gestalten:

- remoteBackgroundColor
- remoteTextColor
- remoteQuestionColor
- remoteQuestionTextColor
- remoteOptionOutlineColor
- remoteOutlineColor
- remoteContainerBackground
- remoteContainerText
- remoteOptionColors (4 Farben, durch Kommas getrennt)

Außerdem kannst du eine Standardschrift festlegen:

- defaultFont
- headerFont

Diese Schriften müssen URLs sein, die öffentlich zugängliche Schriftdateien enthalten.

Und schließlich blendet `hideLogo=1` das QuizWitz-Logo aus.

Jeder dieser Modifikatoren kann eine einzelne Farbe im HTML-Hex-Format enthalten (ff0000), oder einen linearen Verlauf, indem mehrere Farben durch einen Bindestrich getrennt werden ( - zum Beispiel ff1b6b-45caff). (Beachte, dass das # Symbol nicht hinzugefügt werden sollte.)

:::note
Die Abfrageparameter müssen mit einem Fragezeichen ( ? ) beginnen und jeder Parameter muss mit einem Kaufmanns-Und ( & ) getrennt werden. Für weitere Informationen zu Abfrageparametern besuche [Wikipedia](https://de.wikipedia.org/wiki/Query_string).
:::

Indem du diese Parameter zu deiner Spiel-URL hinzufügst, kannst du die Farben im Theme anpassen:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Ein Screenshot des Emerald-Themes mit benutzerdefinierten Modifikatoren](/images/emerald/theme_properties.png)

### Das Theme im Quiz-Editor anpassen

Am schnellsten legst du die Modifikatoren mit dem Button **Theme anpassen** in den Quiz-Einstellungen fest, unter der Liste der Themes. Er öffnet den Theme Tester mit deinem Quiz, wo du die Farben und Schriftarten auswählen kannst, die das Theme anbietet, und das Ergebnis sofort siehst. Klicke auf **Einstellungen auf Quiz anwenden**, dann wählt der Editor das Theme aus und speichert die Modifikatoren in deinem Quiz.

Der Button setzt ein gespeichertes Quiz und Premium voraus und funktioniert am Computer: Der Theme Tester passt nicht auf ein Handy.

### Die Modifikatoren im Quiz speichern

Du musst die Parameter nicht von Hand an jeden Link anhängen. Öffne im Quiz-Editor **Teilen oder einbetten**, klappe **Erweiterte Spieloptionen** auf, füge die Parameter (ohne das führende Fragezeichen, zum Beispiel `backgroundColor=ff1b6b-45caff&accentColor=00ff87`) in das Feld **roher Abfragestring** ein und klicke auf **Einstellungen im Quiz speichern**. Ab dann enthält jeder Spiel- und Teilen-Link des Quiz diese Parameter.

Der QuizWitz-KI-Assistent kann das auch für dich erledigen: Bitte ihn, die Hintergrundfarbe deines Quiz zu ändern, dann stellt er das Quiz auf das Emerald-Theme um und speichert die Modifikatoren.

## Benutzerdefinierte Fragenansichten

Das Emerald-Theme bietet außerdem zwei zusätzliche Bildschirmlayouts für eine Frage mit einem Bild oder Video im Slot **Während der Frage**, die du pro Frage über die Option **Benutzerdefinierte Ansicht** in den Frageeinstellungen auswählst:

- **Anhang im Vollbild** - das Bild oder Video füllt den ganzen Spielbildschirm, Fragetext und Optionen werden nicht dargestellt
- **Anhang im Vollbild ohne Timer** - dasselbe, zusätzlich ist der Countdown ausgeblendet

Die Spieler lesen die Frage und antworten auf ihren eigenen Geräten. Details findest du unter [Fragen schreiben](../editor/005-writing-questions.md).

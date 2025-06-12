---
id: livestream-tutorial
title: Livestream Quiz
---

# 📺 Gastgeber eines Livestream-Quiz

Mit QuizWitz Live ist es einfach, einen vollständig interaktiven Live-Quiz auf Plattformen wie **Twitch** zu veranstalten, **YouTube Live**, oder **Facebook Live** — auch für große Zielgruppen. Dieser Leitfaden führt Sie durch Setup-, Delay-Handling und die Präsentation von Best Practices.

> 🧭 Wenn du neu in der Quizmaster-App bist, starte mit der [**Quizmaster-Start-Anleitung**](../quizmaster/002-startup.md).

---

## 🎤 Das Quizmaster-Setup

Der Quizmaster ist das Herzstück Ihrer Veranstaltung. Sie steuern das Tempo, stellen die Fragen vor und halten Ihr Publikum in die Hand.

Benutze die **Quizmaster-App** um das Spiel auszuführen. Starten Sie QuizWitz Live aus dem Quiz-Editor, indem Sie auf **QuizWitz Live** starten.

> 💡 Die Quizmaster-App ist eine **Web-App** — es gibt keine Installation. Gehe einfach zu [**quizwitz.tv**](https://quizwitz.tv) auf deinem Präsentationsgerät und gib den **Master Code** ein.

Wir empfehlen ein **Tablet oder Smartphone** damit sich der Quizmaster während der Show frei bewegen kann.

---

## 🧩 Wählen Sie den richtigen Spielmodus

Beim Start von QuizWitz Live werden Sie aufgefordert, einen Modus auszuwählen:

- **Normaler Modus** — Spieler oder Teams erhalten jeweils einen einzigartigen Code. Nützlich für vorregistrierte Team-Events.
- **Ad-hoc-Modus** — Ein gemeinsamer Spielcode für alle Spieler. Ideal für Livestreams mit offener Registrierung.

> Wählen Sie für Livestreams immer den **Ad-hoc-Modus** und klicken Sie auf **Ad-hoc-Spiel starten**.

Sobald das Quiz geladen wurde, wird die Quizmaster-App angezeigt:

- **Master Code** — für den Quizmaster
- **Jury-Code** — zum Überprüfen offener Fragen
- **Regie Code** — zur Steuerung von Visualen/Audio
- \*\*Spielcode \*\* — für Spieler beizutreten

Dein Spielbildschirm zeigt jetzt den **Connect-Bildschirm**, den du zu deinem Publikum streamen solltest.

---

## 🎥 Streamen auf Twitch (oder anderen)

Um Ihr Quiz zu streamen, verwenden Sie die Broadcast-Software. Wir empfehlen:

- **OBS Studio** (Open Broadcast Software) — kostenlos und leistungsstark
- Alternativen: Streamlabs, vMix oder native Optionen für Zoom/Meet

Wenn Sie **Besprechungssoftware** wie Zoom oder Google Meeting verwenden:

- Teilen Sie einfach Ihren Bildschirm
- Drücke **Start** in der Quizmaster-App
- Spieler können in Echtzeit teilnehmen

Für **Twitch, YouTube Live oder Facebook Live** wirst du eine **Streaming-Verzögerung** (aka Transkodierverzögerung) erleben.

> ✅ Wir empfehlen **Twitch** für die besten Ergebnisse — er bietet durchweg eine latenzarme Leistung und eine gute Synchronisation des Betrachters.

---

## ⏱️ Einstellung der QuizWitz Player-Verzögerung

Um Streamverzögerungen zu kompensieren, verwenden Sie die **Spieler-Interaktionsverzögerung** in der Jury-App.

Hier ist wie:

1. Starte deine Stream-Vorschau – du musst noch nicht live gehen
2. Öffne die **Jury App** durch Eingabe deines Jury Codes unter [**catlab.tv**](https://catlab.tv)
3. Gehe zur **Spielsteuerung**
4. Öffne deinen Livestream in einem anderen Fenster, mit Ton
5. Stoppuhr verwenden
6. Drücke in der Jury App den **Buzzer** Button und starte das Timing
7. Wenn du den Bussen im Livestream hörst, stoppe die Stoppuhr
8. Erweitere die Verzögerung (in Sekunden) und gib sie im Feld **Spieler Interaktion Verzögerung** ein
9. Klicke **Einstellungen bestätigen**

> 🎯 Es ist besser, die Verzögerung etwas zu überschätzen. Dadurch wird sichergestellt, dass Spieler die Antwortoptionen nur **nach** sehen, dass du die Frage gelesen hast.

---

## :Rakete: Live gehen

Sobald die Verzögerung gesetzt ist und Ihre Spieler verbunden sind:

- Starte deinen Twitch-Stream
- Benutze die Quizmaster-App um das Quiz **zu starten**
- QuizWitz wird das Timing im Hintergrund handhaben — keine Notwendigkeit zwischen den Fragen zu pausieren

---

## 💡 Livestream-Präsentationstipps

- **Lass den verzögerten Stream nicht vom Quizmaster beobachten** — sie sollten nur die Live-Quizmaster-App verwenden, um unangenehme Pausen zu vermeiden.

- Um mit dem Publikum zu interagieren, überwachen Sie **Live-Kommentare** auf einem separaten Bildschirm — nicht den Video-Feed.

- Möchten Sie die OBS-Szenen automatisch wechseln? Verwenden:\
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Möchten Sie während des Spiels MIDI-Geräte auslösen? Versuch:\
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Auf der Suche nach weiteren Tools? Besuchen Sie [**regie.catlab.eu**](https://regie.catlab.eu) — eine zentrale Drehscheibe mit zusätzlichen Werkzeugen für Automatisierung, Szenenwechsel, Effekte und mehr.

> Alle Werkzeuge benötigen deinen **Regie Code** von der Quizmaster App.

---

Du bist bereit live zu gehen! Twitch bietet eine reibungslose und reaktionsfähige Plattform für die Durchführung großer Quizveranstaltungen. Kombinieren Sie das mit QuizWitz Live — und Ihre Quiznacht wird beeindrucken.

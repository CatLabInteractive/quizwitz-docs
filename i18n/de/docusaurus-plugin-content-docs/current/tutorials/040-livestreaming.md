---
id: livestream-tutorial
title: Livestream-Quiz
---

# 📺 Hosting eines Livestream-Quiz

Mit QuizWitz Live ist es einfach, ein vollständig interaktives Livestream-Quiz auf Plattformen wie **Twitch**, **YouTube Live** oder **Facebook Live** zu veranstalten – sogar für großes Publikum. Diese Anleitung führt dich durch die Einrichtung, Verzögerungshandhabung und Präsentationsbest Practices.

> 🧭 Wenn du neu in der Quizmaster-App bist, beginne mit dem [**Quizmaster-Startleitfaden**](../quizmaster/002-startup.md).

---

## 🎤 Die Quizmaster-Einrichtung

Der Quizmaster ist das Herzstück deines Events. Er steuert das Tempo, präsentiert die Fragen und hält dein Publikum bei Laune.

Benutze die **Quizmaster-App**, um das Spiel zu leiten. Starte QuizWitz Live aus dem Quiz-Editor, indem du auf **Start QuizWitz Live** klickst.

> 💡 Die Quizmaster-App ist eine **Web-App** — es gibt keine Installation. Gehe einfach mit deinem Präsentationsgerät zu [**quizwitz.tv**](https://quizwitz.tv) und gib den **Master-Code** ein.

Wir empfehlen ein **Tablet oder Smartphone**, damit sich der Quizmaster während der Show frei bewegen kann.

---

## 🧩 Die richtige Spielmodus-Auswahl

Beim Start von QuizWitz Live wirst du gebeten, einen Modus auszuwählen:

- **Regulärer Modus** — Spieler oder Teams erhalten jeweils einen eindeutigen Code. Nützlich für vorregistrierte Team-Events.
- **Ad-hoc-Modus** — Ein gemeinsamer Spielcode für alle Spieler. Am besten geeignet für Livestreams mit offener Registrierung.

> Für Livestreams wähle immer den **Ad-hoc-Modus** und klicke auf **Start ad-hoc game**.

Nachdem das Quiz geladen ist, zeigt die Quizmaster-App:

- **Master-Code** — für den Quizmaster
- **Jury-Code** — zum Überprüfen offener Fragen
- **Regie-Code** — zur Steuerung von visuellen und Audioelementen
- **Spiel-Code** — für Spieler zum Beitritt

Dein Spielbildschirm zeigt nun den **Verbindungsbildschirm**, den du an dein Publikum streamen solltest.

---

## 🎥 Streaming zu Twitch (oder anderen)

Um deinen Quiz zu streamen, nutze Broadcast-Software. Wir empfehlen:

- **OBS Studio** (Open Broadcast Software) — kostenlos und leistungsfähig
- Alternativen: Streamlabs, vMix oder native Optionen für Zoom/Meet

Wenn du **Meeting-Software** wie Zoom oder Google Meet nutzt:

- Teile einfach deinen Bildschirm
- Drücke **Start** in der Quizmaster-App
- Spieler können nahezu in Echtzeit teilnehmen

Für **Twitch, YouTube Live oder Facebook Live** wirst du eine **Streaming-Verzögerung** (auch Transkodierungs-Verzögerung genannt) erleben.

> ✅ Wir empfehlen **Twitch** für beste Ergebnisse — es bietet ständig niedrige Latenz und gute Zuschauer-Synchronisation.

---

## ⏱️ Einstellung der QuizWitz-Spielerverzögerung

Um die Streaming-Verzögerung auszugleichen, nutze die **Spieler-Interaktions-Verzögerung** in der Jury-App.

So geht's:

1. Starte deine Stream-Vorschau — noch kein Live gehen nötig
2. Öffne die **Jury-App** und gib deinen Jury-Code auf [**catlab.tv**](https://catlab.tv) ein
3. Wechsle zu **Spielsteuerung**
4. Öffne deinen Livestream in einem anderen Fenster, mit Ton
5. Nutze eine Stoppuhr
6. Drücke in der Jury-App den **Buzzer**-Button und starte die Zeitmessung
7. Wenn du den Buzzer im Livestream hörst, stoppe die Stoppuhr
8. Runde die Verzögerung (in Sekunden) auf und trage sie im Feld **Spieler-Interaktions-Verzögerung** ein
9. Klicke auf **Einstellung bestätigen**

> 🎯 Lieber die Verzögerung etwas überschätzen. So sehen die Spieler die Antwortoptionen erst **nachdem** du die Frage vorgelesen hast.

---

## 🚀 Live gehen

Sobald die Verzögerung eingestellt ist und deine Spieler verbunden sind:

- Starte deinen Twitch-Stream
- Nutze die Quizmaster-App, um das Quiz **zu starten**
- QuizWitz übernimmt das Timing im Hintergrund — du brauchst nicht zwischen den Fragen zu pausieren

---

## 💡 Tipps für die Livestream-Präsentation

- **Lass den Quizmaster den verzögerten Stream nicht anschauen** — er sollte nur die Live-Quizmaster-App nutzen, um peinliche Pausen zu vermeiden.

- Zur Interaktion mit dem Publikum beobachte **Live-Kommentare** auf einem separaten Bildschirm — nicht das Video-Feed.

- Möchtest du OBS-Szenen automatisch wechseln? Nutze:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Willst du MIDI-Geräte während des Spiels steuern? Probier:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Suchst du weitere Tools? Besuche [**regie.catlab.eu**](https://regie.catlab.eu) — eine zentrale Anlaufstelle mit zusätzlichen Utilities für Automatisierung, Szenenwechsel, Effekte und mehr.

> Alle Tools benötigen deinen **Regie-Code** aus der Quizmaster-App.

---

Du bist bereit, live zu gehen! Twitch bietet eine geschmeidige, reaktionsschnelle Plattform für große Quiz-Events. Kombiniere das mit QuizWitz Live — und dein Quizabend wird beeindrucken.

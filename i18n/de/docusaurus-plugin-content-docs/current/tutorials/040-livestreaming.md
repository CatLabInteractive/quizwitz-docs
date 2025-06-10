---
id: livestream-tutorial
title: Livestream-Quiz
---

# 📺 Einen Livestream-Quiz moderieren

Mit QuizWitz Live ist es einfach, ein vollständig interaktives Livestream-Quiz auf Plattformen wie **Twitch**, **YouTube Live** oder **Facebook Live** zu veranstalten – selbst für große Publikumsmengen. Dieser Leitfaden führt dich durch die Einrichtung, das Verzögerungsmanagement und die besten Präsentationspraktiken.

> 🧭 Wenn du neu in der Quizmaster App bist, starte mit dem [**Quizmaster-Startup-Guide**](../quizmaster/002-startup.md).

---

## 🎤 Die Quizmaster-Einrichtung

Der Quizmaster ist das Herz deines Events. Er steuert das Tempo, präsentiert die Fragen und hält dein Publikum bei Laune.

Benutze die **Quizmaster App**, um das Spiel zu leiten. Starte QuizWitz Live aus dem Quiz-Editor, indem du auf **Start QuizWitz Live** klickst.

> 💡 Die Quizmaster App ist eine **Web-App** – keine Installation nötig. Besuche einfach [**quizwitz.tv**](https://quizwitz.tv) auf deinem Präsentationsgerät und gib den **Master Code** ein.

Wir empfehlen die Nutzung eines **Tablets oder Smartphones**, damit der Quizmaster sich während der Show frei bewegen kann.

---

## 🧩 Den richtigen Spielmodus wählen

Beim Start von QuizWitz Live wirst du gefragt, einen Modus zu wählen:

- **Regelmäßiger Modus** — Spieler oder Teams erhalten jeweils einen eindeutigen Code. Ideal für vorausgewählte Team-Events.
- **Ad-hoc-Modus** — Ein gemeinsamer Spielcode für alle Spieler. Perfekt für Livestreams mit offener Anmeldung.

> Für Livestreams immer den **Ad-hoc-Modus** wählen und auf **Ad-hoc-Spiel starten** klicken.

Sobald das Quiz lädt, zeigt die Quizmaster App:

- **Master Code** — für den Quizmaster
- **Jury Code** — zum Überprüfen offener Fragen
- **Regie Code** — zur Steuerung von Visuals/Audio
- **Game Code** — damit Spieler beitreten können

Dein Spielbildschirm zeigt nun den **Connect-Bildschirm**, den du an dein Publikum streamen solltest.

---

## 🎥 Streaming zu Twitch (oder anderen)

Zum Streamen deines Quiz verwende Broadcasting-Software. Wir empfehlen:

- **OBS Studio** (Open Broadcast Software) — kostenlos und leistungsstark
- Alternativen: Streamlabs, vMix oder native Optionen für Zoom/Meet

Wenn du **Meeting-Software** wie Zoom oder Google Meet nutzt:

- Teile einfach deinen Bildschirm
- Drücke **Start** in der Quizmaster App
- Spieler können nahezu in Echtzeit teilnehmen

Bei **Twitch, YouTube Live oder Facebook Live** gibt es eine **Streaming-Verzögerung** (auch Transcoding-Verzögerung genannt).

> ✅ Wir empfehlen **Twitch** für beste Ergebnisse – es bietet konstant niedrige Latenz und gute Synchronisation der Zuschauer.

---

## ⏱️ Die QuizWitz-Spielerverzögerung einstellen

Um die Stream-Verzögerung zu kompensieren, benutze die **Spielerinteraktionsverzögerung** in der Jury-App.

So geht’s:

1. Starte deine Stream-Vorschau – live gehen ist noch nicht nötig
2. Öffne die **Jury-App** und gib deinen Jury-Code auf [**catlab.tv**](https://catlab.tv) ein
3. Gehe zu **Spielsteuerung**
4. Öffne deinen Livestream in einem anderen Fenster, mit Ton
5. Nutze eine Stoppuhr
6. Drücke in der Jury-App auf die **Buzzer**-Taste und starte die Zeitmessung
7. Wenn du den Buzzer im Livestream hörst, stoppe die Stoppuhr
8. Runde die Verzögerung (in Sekunden) auf und gib sie im Feld **Spielerinteraktionsverzögerung** ein
9. Klicke auf **Einstellung bestätigen**

> 🎯 Es ist besser, die Verzögerung leicht zu überschätzen. So sehen die Spieler die Antwortoptionen erst **nachdem** du die Frage vollständig vorgelesen hast.

---

## 🚀 Live gehen

Wenn die Verzögerung eingestellt ist und deine Spieler verbunden sind:

- Starte deinen Twitch-Stream
- Nutze die Quizmaster App, um das Quiz **zu starten**
- QuizWitz übernimmt die Zeitkontrolle im Hintergrund – du musst nicht zwischen den Fragen pausieren

---

## 💡 Tipps zur Livestream-Präsentation

- **Lass den Quizmaster den verzögerten Stream nicht ansehen** – er soll nur die live Quizmaster App nutzen, um peinliche Pausen zu vermeiden.

- Für die Interaktion mit dem Publikum beobachte die **Live-Kommentare** auf einem separaten Bildschirm – nicht das Video.

- Willst du automatisch OBS-Szenen wechseln? Use:\
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Möchtest du MIDI-Geräte während des Spiels auslösen? Try:\
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Suchst du mehr Tools? Besuche [**regie.catlab.eu**](https://regie.catlab.eu) – ein zentraler Hub mit zusätzlichen Hilfsmitteln für Automatisierung, Szenenwechsel, Effekte und mehr.

> Alle Tools benötigen deinen **Regie Code** aus der Quizmaster App.

---

Du bist bereit, live zu gehen! Twitch bietet eine flüssige, reaktionsschnelle Plattform für die Durchführung von groß angelegten Quiz-Events. Kombiniert mit QuizWitz Live wird dein Quizabend garantiert beeindrucken.

---
id: livestream-tutorial
title: Livestream-Quiz
---

# 📺 Hosting eines Livestream-Quiz

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Diese Anleitung führt dich durch die Einrichtung, den Umgang mit Verzögerungen und bewährte Präsentationspraktiken.

> 🧭 Wenn du neu in der Quizmaster-App bist, starte mit der [**Quizmaster-Start-Anleitung**](../quizmaster/002-startup.md).

---

## 🎤 Die Quizmaster-Einrichtung

Der Quizmaster ist das Herzstück deines Events. Er steuert das Tempo, präsentiert die Fragen und hält dein Publikum bei Laune.

Benutze die **Quizmaster-App** um das Spiel auszuführen. Starte QuizWitz Live aus dem Quiz-Editor, indem du auf **Start QuizWitz Live** klickst.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Gehe einfach zu [**quizwitz.tv**](https://quizwitz.tv) auf deinem Quizmaster-Gerät und gib den **Quizmaster-Code** ein.

Wir empfehlen ein **Tablet oder Smartphone**, damit sich der Quizmaster während der Show frei bewegen kann.

---

## 🧩 Die richtige Spielmodus-Auswahl

Beim Start von QuizWitz Live wirst du gefragt, wie sich Spieler verbinden können:

- **Team codes** - Players or teams each receive a unique code. Nützlich für vorregistrierte Team-Events.
- **Single game code** - One shared game code for all players. Am besten geeignet für Livestreams mit offener Registrierung.

> Für Livestreams wähle immer **Geteilter Spielcode** und klicke _Ad-hoc-Spiel starten_.

Sobald das Quiz geladen wurde, wird die Quizmaster-App angezeigt:

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

Dein Spielbildschirm zeigt nun den **Verbindungsbildschirm**, den du an dein Publikum streamen solltest.

---

## 🎥 Streaming zu Twitch (oder anderen)

Um deinen Quiz zu streamen, nutze Broadcast-Software. Wir empfehlen:

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Alternativen: Streamlabs, vMix oder native Optionen für Zoom/Meet

Wenn du **Meeting-Software** wie Zoom oder Google Meet nutzt:

- Teile einfach deinen Bildschirm
- Drücke **Start** in der Quizmaster-App
- Spieler können nahezu in Echtzeit teilnehmen

Für **Twitch, YouTube Live oder Facebook Live** wirst du eine **Streaming-Verzögerung** (auch Transkodierungs-Verzögerung genannt) erleben.

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Einstellung der QuizWitz-Spielerverzögerung

Um Streamverzögerungen zu kompensieren, verwende die **Spieler-Interaktionsverzögerung** in der Jury-App.

So geht's:

1. Start your stream preview - no need to go live yet
2. Öffne die **Jury-App** durch Eingabe deines Jury-Codes unter [**quizwitz.tv**](https://quizwitz.tv)
3. Wechsle zu **Spielsteuerung**
4. Öffne deinen Livestream in einem anderen Fenster, mit Ton
5. Nutze eine Stoppuhr
6. Drücke in der Jury-App den **Buzzer** Button und beginne Timing
7. Wenn du den Buzzer im Livestream hörst, stoppe die Stoppuhr
8. Runde die Verzögerung (in Sekunden) auf und trage sie im Feld **Spieler-Interaktions-Verzögerung** ein
9. Klicke auf **Einstellung bestätigen**

> 🎯 Lieber die Verzögerung etwas überschätzen. So sehen die Spieler die Antwortoptionen erst **nachdem** du die Frage vorgelesen hast.

---

## 🚀 Live gehen

Sobald die Verzögerung eingestellt ist und deine Spieler verbunden sind:

- Starte deinen Twitch-Stream
- Benutze die Quizmaster-App um das Quiz **zu starten**
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Tipps für die Livestream-Präsentation

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- Möchtest du OBS-Szenen automatisch wechseln? Nutze:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Willst du MIDI-Geräte während des Spiels steuern? Probier:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Suchst du weitere Tools? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Alle Werkzeuge benötigen deinen **Regie-Code** von der Quizmaster-App.

---

Du bist bereit, live zu gehen! Twitch bietet eine geschmeidige, reaktionsschnelle Plattform für große Quiz-Events. Combine that with QuizWitz Live - and your quiz night is set to impress.

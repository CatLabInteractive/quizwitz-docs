---
id: large-venues
title: Große Veranstaltungsorte, Licht und Ton
---

# 🏟️ Große Veranstaltungsorte, Licht und Ton

QuizWitz Live wächst vom Kneipenquiz bis zu großen Veranstaltungsorten mit Hunderten von Spielern. Diese Anleitung zeigt, was sich ändert, wenn du auf eine größere Bühne wechselst: das Netzwerk, der Ton und die Synchronisierung deiner Beleuchtung (oder anderer Showtechnik) mit dem Spiel.

> 🧭 Wenn du neu bei QuizWitz Live bist, starte mit der [**Quizmaster-Start-Anleitung**](../quizmaster/002-startup.md).

---

## 🌐 Eine stabile Internetverbindung

Jeder Teil eines Live-Spiels kommuniziert in Echtzeit über unsere Server mit den anderen: der Spielbildschirm, die Quizmaster-App, die Jury-App, die Regie-Tools und das Gerät jedes Spielers. Eine stabile Internetverbindung ist die wichtigste Voraussetzung für eine große Veranstaltung.

- Schließe den Computer für den Spielbildschirm und alle Regie-Computer mit einem **Netzwerkkabel** an. Verlass dich dafür nicht auf das WLAN des Veranstaltungsorts oder einen mobilen Hotspot.
- Sorge dafür, dass die Spieler im ganzen Raum guten WLAN- oder Mobilfunkempfang (4G/5G) haben. Ein voller Saal kann ein kleines WLAN-Netz überlasten.
- Klicke rechtzeitig vor dem Start auf **Quiz laden**. QuizWitz lädt alle Bilder, Audios und Videos vorab, damit Anhänge flüssig abgespielt werden, sobald das Quiz läuft.

---

## 🔊 Ton: alles läuft über den Spielbildschirm

Den gesamten Ton spielt der Spielbildschirm ab: die Musik und Soundeffekte von QuizWitz und jeden Audio- oder Videoanhang, den du deinen Fragen, Runden oder deinem Quiz hinzufügst (Musik für den Verbindungsbildschirm, Musik zum Rundenabschluss und so weiter). Alles ist auf das Geschehen auf dem Bildschirm abgestimmt.

Du musst also nur den **Audioausgang des Computers für den Spielbildschirm** mit deinem Mischpult oder deiner PA verbinden. Es gibt keine separaten Sound-Cues, die du von Hand auslösen musst.

- Stelle mit dem Lautstärkeregler in der Steuerleiste des Spiels den Pegel ein oder schalte alle Quiz-Sounds stumm.
- Wenn nur dein eigenes hochgeladenes Audio laufen soll, füge `music=0` zum Spiel-Link hinzu (siehe [erweiterte Parameter](../advanced/020-advanced-parameters.md)). `connectMusic=0` schaltet nur die Musik auf dem Verbindungsbildschirm aus.

---

## 💡 Licht: der MIDI-Controller

Der MIDI-Controller unter [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) wandelt Spielereignisse in MIDI-Noten um. Ordne diese Noten Cues in deiner Lichtsoftware oder deinem Lichtpult zu, und dein Licht folgt automatisch dem Spiel.

Wir nutzen ihn mit [QLC+](https://www.qlcplus.org/) (kostenlose Lichtsoftware, die DMX-Geräte steuert), aber er sendet ganz normales MIDI und funktioniert daher mit den meisten Lichtpulten und Lichtprogrammen mit MIDI-Eingang, ebenso mit Tonpulten, Videomischern und anderer Showtechnik.

### Verbinden

1. Starte dein QuizWitz Live-Spiel. Die Quizmaster-App zeigt den **Regie-Code** neben dem Quizmaster-Code und dem Jury-Code.
2. Öffne auf dem Computer, der mit deiner Lichtanlage verbunden ist, [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) in **Google Chrome**. Der Controller nutzt Web MIDI, das andere Browser möglicherweise nicht unterstützen.
3. Erlaube den MIDI-Zugriff, wenn Chrome danach fragt.
4. Gib den Regie-Code ein und klicke auf **Connect**.
5. Wähle unter **Output** das MIDI-Gerät und den Kanal (standardmäßig Kanal 1).

Läuft deine Lichtsoftware auf demselben Computer, nutze einen virtuellen MIDI-Port: den **IAC Driver** unter macOS oder ein Tool wie **loopMIDI** unter Windows.

> ⚠️ Lass den Controller-Tab während des ganzen Spiels geöffnet. Wenn du ihn schließt, werden keine MIDI-Noten mehr gesendet.

### So funktioniert es

Jedes Spielereignis hat seine eigene feste MIDI-Notennummer. Tritt das Ereignis ein, spielt der Controller diese Note auf dem Ausgangskanal. Die Notennummer steht auf jedem Button im Controller.

- **Drücke einen Button**, um seine Note von Hand zu senden. So kannst du deine Zuordnung vor der Show einrichten und testen.
- Ein Button leuchtet kurz **rot** auf, wenn das Spiel ihn auslöst.
- Die meisten Ereignisse werden nur einmal hintereinander gesendet: Tritt dasselbe Ereignis zweimal nacheinander ein, wird das zweite übersprungen. Richtige und falsche Antwort werden jedes Mal gesendet, sodass du das Licht bei jeder aufgedeckten Antwort blinken lassen kannst.
- **Rückmeldung** (optional): Wähle einen MIDI-Eingang und Kanal (standardmäßig Kanal 2). Noten, die deine Lichtsoftware zurücksendet, lassen die passenden Buttons grün leuchten, sodass du siehst, welche Cues aktiv sind.

### MIDI-Noten

| Note | Ereignis |
|---|---|
| 1 | Spielintro |
| 2 | Spielintro: Stopp |
| 3 | Rundenintro |
| 4 | Rundenintro: Stopp |
| 5 | Blitzrunden-Intro |
| 6 | Blitzrunden-Intro: Stopp |
| 10 | Frage startet |
| 11 | Frage läuft |
| 12 | Fragen-Timer startet |
| 13 | Fragen-Timer stoppt |
| 14 | Frage beendet |
| 20 | Fragen-Timer bei 25 % |
| 21 | Fragen-Timer bei 33 % |
| 22 | Fragen-Timer bei 50 % |
| 23 | Fragen-Timer bei 66 % |
| 24 | Fragen-Timer bei 75 % |
| 30 | Anhang angezeigt |
| 31 | Anhang ausgeblendet |
| 40 | Vor dem Fragenergebnis |
| 41 | Fragenergebnis |
| 42 | Richtige Antwort aufgedeckt |
| 43 | Falsche Antwort aufgedeckt |
| 44 | Fragenergebnis: Stopp |
| 45 | Alle haben richtig geantwortet |
| 46 | Niemand hat richtig geantwortet |
| 47 | Nur eine richtige Antwort |
| 50 | Rundenergebnis |
| 51 | Rundenergebnis: Stopp |
| 52 | Blitzrunden-Ergebnis |
| 53 | Blitzrunden-Ergebnis: Stopp |
| 60 | Pause |
| 61 | Pause: Stopp |
| 70 | Endergebnis |
| 71 | Endergebnis: eine Platzierung wird aufgedeckt |
| 72 | Endergebnis: der Gewinner wird aufgedeckt |
| 73 | Endergebnis: Stopp |

### Licht pro Frage

Du kannst jeder Frage eine eigene Lichtstimmung geben. Öffne im Quiz-Editor die Einstellungen der Frage und füge **Beleuchtung** hinzu (unter *Präsentation*). Wenn der Fragen-Timer startet, sendet der Controller die Note für diese Stimmung. Fragen ohne Lichtstimmung senden die Note *Standard*, damit dein Licht in seinen normalen Zustand zurückkehren kann.

| Note | Beleuchtung |
|---|---|
| 100 | Standard |
| 101 | Countdown |
| 102 | Disco-Party |
| 103 | Kriegszone |
| 104 | Rote Alarmstufe |
| 105 | Sternennacht |
| 106 | Gefängnisausbruch |
| 107 | Gefahrenstoffe |
| 108 | Gemütliches Pink |
| 109 | Atlantis |
| 110 | Dschungel |
| 111 | Blauer Ozean |
| 112 | Gelber Ozean |
| 113 | Grüner Ozean |
| 114 | Lila Ozean |
| 115 | Oranger Ozean |
| 116 | Roter Ozean |
| 117 | Rot gegen Blau |

Die Namen sind Vorschläge: Was jede Note bewirkt, bestimmst du selbst mit deinem Lichtsetup.

---

## 🛠️ Weitere Regie-Tools

[**regie.catlab.eu**](https://regie.catlab.eu) bietet weitere Tools für große Veranstaltungen. Alle nutzen den Regie-Code.

- **Teleprompter** - ein zweiter Quizmaster-Bildschirm mit automatischem Scrollen und Spiegelung
- **Director screen** - sende Nachrichten an die Leute auf der Bühne, auf einem oder mehreren Bühnenmonitoren
- **OBS controller** - wechsle OBS-Szenen während des Spiels automatisch (siehe [Livestream-Quiz](040-livestreaming.md))
- **Countdown timer** - zeige QuizWitz-Timer auf einem separaten Bildschirm
- **Duplicate screen** - zeige eine Kopie des Spielbildschirms auf einem anderen Monitor

---

## ✅ Beispiel-Setup

- **Computer für den Spielbildschirm** - verbunden mit dem Beamer oder der LED-Wand und mit der PA, per Netzwerkkabel
- **Regie-Computer** - der MIDI-Controller in Chrome, verbunden mit deiner Lichtanlage, per Netzwerkkabel
- **Tablet oder Handy** - die Quizmaster-App
- **Laptop oder Tablet** - die Jury-App, um Punkte anzupassen und das Spiel zu steuern

> 💡 Mach vor der Veranstaltung einen kompletten Durchlauf am Veranstaltungsort, damit du deine Licht-Cues, die Tonpegel und das Netzwerk testen kannst.

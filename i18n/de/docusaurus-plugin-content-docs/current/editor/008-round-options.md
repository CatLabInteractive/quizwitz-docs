---
id: round-options
title: Rundenoptionen
---

# 🔄 Rundenoptionen

Jede Runde hat einen spezifischen **Typ**. Standardmäßig ist **Trivia** eingestellt, aber wir laden dich ein, mit allen verfügbaren Typen zu testen und zu experimentieren. Diese Seite erklärt die Einstellungen und Anhänge, die du pro Runde konfigurieren kannst.

📘 Für einen ausführlichen Überblick über alle Rundentypen, besuche die [Dokumentation zu Rundentypen](../round-types/000-round-types.md).

---

## 🔧 Eine Runde konfigurieren

Um die Optionen einer Runde zu konfigurieren, klicke auf das Zahnrad-Symbol im Rundenpanel:

| ![Rundenoptionen öffnen](/images/open-round-options.png) | ![Rundenoptionen](/images/round-options.png) |
| :------------------------------------------------------: | :------------------------------------------: |
|                  _Rundenoptionen öffnen_                 |          _Rundeneinstellungs-Panel_          |

---

## ⚙️ Allgemeine Rundenoptionen

Die folgenden Optionen sind für die meisten Rundentypen verfügbar:

- **Nur _X_ Fragen anzeigen** - Beschränkt die Runde auf eine bestimmte Anzahl von Fragen
- **Fragen zufällig anordnen** - Mische die Reihenfolge der Fragen innerhalb der Runde
- **Rundeneinführung anzeigen** - Zeige einen animierten Titel vor Beginn der Runde an
- **Rundenausklang anzeigen (Zwischenstand)** - Zeige Ranglisten am Ende der Runde an
- **Alle Rückmeldungen auf einer einzigen Seite gruppieren** - Sammle das Feedback zu den Fragen in einem Block nach Ende der Runde
- **Alle Feedbacks zu Fragen erst am Ende der Runde anzeigen** - Verzögere das Feedback zu den Fragen bis zum Ende der Runde
- **Feedback nach jeder einzelnen Frage erzwingen** - Sofortiges Feedback sicherstellen
  > ⚠️ Dies gilt nur für Rundentypen und Fragearten, bei denen das Feedback sonst verzögert wäre, wie zum Beispiel bei offenen Fragen oder Blitzrunden.

📘 Siehe [Fragetypen](../question-types/000-question-types.md) für weitere Infos zu Feedback-Timing und Verhalten.

---

## 🏆 Punkteoptionen {#scoring}

QuizWitz bietet flexible Punktevergabe, um Fairness und Spannung für alle Spieler zu gewährleisten.

- **Zeitbasierte Punktevergabe** - Spieler erhalten mehr Punkte für schnellere Antworten.
  - Für die meisten Fragetypen verringern sich die zeitbasierten Punkte **kontinuierlich pro Mikrosekunde**: Je schneller du antwortest, desto mehr Punkte erhältst du.
  - Bei **offenen Fragen** werden zeitbasierte Punkte in Blöcke unterteilt. Zum Beispiel: Antworten im ersten Block (z.B. den ersten Sekunden) erhalten **100%** des zeitbasierten Anteils, der nächste Block erhält **80%** und so weiter. Dies hilft, das Spielfeld für langsamere Tipper auszugleichen.

- **Fester Prozentsatz der Punkte bei zeitbasierter Punktevergabe** - Du steuerst, wie viel der Gesamtpunktzahl durch Geschwindigkeit beeinflusst wird.
  - Standardmäßig sind **75%** der Punkte fest (jeder, der richtig antwortet, erhält diese Punkte, unabhängig von der Geschwindigkeit).
  - Nur die verbleibenden **25%** hängen davon ab, wie schnell die Spieler antworten.

> 💡 Mit dieser Einstellung kannst du Runden je nach deinem Quizstil mehr wissensbasiert oder mehr geschwindigkeitsbasiert machen.

Diese Punkteoptionen findest du im Optionen-Panel der Runde beim Bearbeiten einer Runde.

---

## 💬 Round explanation

Some round types and scoring options show a short explanation on the game screen before the first question, for example _"Answer consecutive questions correctly to reach higher levels and get bonus points."_ when a round uses strike scoring. Click **+ Round explanation** in the round opening to replace that text with your own. You can also use it to explain a regular trivia round, which has no explanation by default.

- Leave the field empty to keep the default explanation of the round type.
- The round explanation is translated like any other text: add it in every language of your quiz.
- When a quizmaster presents the quiz, the game screen skips the round explanation. Use the quizmaster script below instead.

---

## 📜 Quizmaster-Anweisungen

You can add a custom **round introduction text** (the **Quizmaster script**) that will appear only on the [Quizmaster App](../quizmaster/001-introduction.md) at the start of the round. Verwende dies, um den Quizmaster zu kürzen oder eine persönliche Note hinzuzufügen.

---

## 📎 Anhänge

Verstärke deine Runde mit Medien, die zu bestimmten Momenten angezeigt werden:

- **Vor der Runde** - Nach der Rundeneinführung angezeigt
- **Nach der Runde** - Nach dem Rundenausklang angezeigt
- **Vor dem Rundenausklang** - Nach der letzten Frage, kurz vor dem Ausklang angezeigt
- **Während des Rundenausklangs** - _(nur Audio)_ Spielt, während die Rangliste angezeigt wird
- ...

📘 Für unterstützte Dateitypen und Tipps zur Nutzung siehe die [Anhänge-Anleitung](../editor/006-attachments.md).

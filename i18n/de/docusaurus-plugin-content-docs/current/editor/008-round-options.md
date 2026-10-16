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

## 💬 Rundenerklärung

Manche Rundentypen und Punkteoptionen zeigen vor der ersten Frage eine kurze Erklärung auf dem Spielbildschirm, zum Beispiel *„Beantworte aufeinanderfolgende Fragen richtig, um höhere Level zu erreichen und Bonuspunkte zu erhalten.“*, wenn eine Runde die Strike-Punktestrategie verwendet. Klicke in der Rundeneröffnung auf **+ Rundenerklärung**, um diesen Text durch deinen eigenen zu ersetzen. Du kannst damit auch eine normale Trivia-Runde erklären, die standardmäßig keine Erklärung hat.

- Lass das Feld leer, um die Standarderklärung des Rundentyps zu behalten.
- Die Rundenerklärung wird wie jeder andere Text übersetzt: Füge sie in jeder Sprache deines Quiz hinzu.
- Wenn ein Quizmaster das Quiz präsentiert, überspringt der Spielbildschirm die Rundenerklärung. Nutze stattdessen das Quizmaster-Skript unten.

---

## 📜 Quizmaster-Anweisungen

Du kannst einen eigenen **Einführungstext für die Runde** (das **Quizmaster-Skript**) hinzufügen, der nur in der [Quizmaster-App](../quizmaster/001-introduction.md) zu Beginn der Runde angezeigt wird. Verwende ihn, um den Quizmaster zu instruieren oder eine persönliche Note hinzuzufügen.

---

## 📎 Anhänge

Verstärke deine Runde mit Anhängen, die zu bestimmten Momenten angezeigt werden:

- **Vor der Runde** - Nach der Rundeneinführung angezeigt
- **Nach der Runde** - Nach dem Rundenausklang angezeigt
- **Vor dem Rundenausklang** - Nach der letzten Frage, kurz vor dem Ausklang angezeigt
- **Während des Rundenausklangs** - _(nur Audio)_ Spielt, während die Rangliste angezeigt wird
- ...

📘 Für unterstützte Dateitypen und Tipps zur Nutzung siehe die [Anhänge-Anleitung](../editor/006-attachments.md).

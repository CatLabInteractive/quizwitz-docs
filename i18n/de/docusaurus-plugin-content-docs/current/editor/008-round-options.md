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

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ Dies gilt nur für Rundentypen und Fragearten, bei denen das Feedback sonst verzögert wäre, wie zum Beispiel bei offenen Fragen oder Blitzrunden.

📘 Siehe [Fragetypen](../question-types/000-question-types.md) für weitere Infos zu Feedback-Timing und Verhalten.

---

## 🏆 Punkteoptionen {#scoring}

QuizWitz bietet flexible Punktevergabe, um Fairness und Spannung für alle Spieler zu gewährleisten.

- **Time-based scoring** - Players earn more points for faster answers.
  - Für die meisten Fragetypen verringern sich die zeitbasierten Punkte **kontinuierlich pro Mikrosekunde**: Je schneller du antwortest, desto mehr Punkte erhältst du.
  - Bei **offenen Fragen** werden zeitbasierte Punkte in Blöcke unterteilt. Zum Beispiel: Antworten im ersten Block (z.B. den ersten Sekunden) erhalten **100%** des zeitbasierten Anteils, der nächste Block erhält **80%** und so weiter. Dies hilft, das Spielfeld für langsamere Tipper auszugleichen.

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - Standardmäßig sind **75%** der Punkte fest (jeder, der richtig antwortet, erhält diese Punkte, unabhängig von der Geschwindigkeit).
  - Nur die verbleibenden **25%** hängen davon ab, wie schnell die Spieler antworten.

> 💡 Mit dieser Einstellung kannst du Runden je nach deinem Quizstil mehr wissensbasiert oder mehr geschwindigkeitsbasiert machen.

Diese Punkteoptionen findest du im Optionen-Panel der Runde beim Bearbeiten einer Runde.

---

## 📜 Quizmaster-Anweisungen

Du kannst einen benutzerdefinierten **runden Einführung** hinzufügen, der nur in der [Quizmaster-App](../quizmaster/001-introduction.md) zu Beginn der Runde angezeigt wird. Verwende dies, um den Quizmaster zu kürzen oder eine persönliche Note hinzuzufügen.

---

## 📎 Anhänge

Verstärke deine Runde mit Medien, die zu bestimmten Momenten angezeigt werden:

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- ...

📘 Für unterstützte Dateitypen und Tipps zur Nutzung siehe die [Anhänge-Anleitung](../editor/006-attachments.md).

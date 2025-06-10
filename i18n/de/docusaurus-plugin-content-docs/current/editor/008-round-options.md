---
id: round-options
title: Rundenoptionen
---

# 🔄 Rundenoptionen

Jede Runde hat einen bestimmten **Typ**. Standard ist **Multiple Choice (Trivia)**, aber probiere ruhig alle verfügbaren Typen aus und experimentiere. Diese Seite erklärt die Einstellungen und Anhänge, die du pro Runde konfigurieren kannst.

📘 Für eine detaillierte Übersicht aller Rundentypen besuche die [Rundentyp-Dokumentation](../round-types/000-round-types.md).

---

## 🔧 Runde konfigurieren

Um die Optionen einer Runde zu konfigurieren, klicke auf das Zahnrad-Symbol im Rundenpanel:

| ![Rundenoptionen öffnen](/images/open-round-options.png) | ![Rundenoptionen](/images/round-options.png) |
| :------------------------------------------------------: | :------------------------------------------: |
|                  _Opening round options_                 |          _Round configuration panel_         |

---

## ⚙️ Allgemeine Rundenoptionen

Folgende Optionen sind für die meisten Rundentypen verfügbar:

- **Zeige nur _X_ Fragen** — Begrenze die Runde auf eine bestimmte Anzahl von Fragen
- **Zufällige Fragenreihenfolge** — Mische die Reihenfolge der Fragen innerhalb der Runde
- **Zeige Rundenintro** — Zeige einen animierten Titel bevor die Runde beginnt
- **Zeige Rundenoutro (Zwischenergebnis)** — Zeige die Ranglisten am Ende der Runde
- **Fasse sämtliches Feedback auf einem Bildschirm zusammen** — Sammle das Feedback zu den Fragen in einem Block nachdem die Runde endet
- **Zeige sämtliches Feedback zu den Fragen erst am Ende der Runde** — Verzögere das Feedback zu den Fragen bis zum Rundenende
- **Feedback nach jeder einzelnen Frage erzwingen** — Sofortiges Feedback sicherstellen
  > ⚠️ Dies gilt nur für Rundentypen und Fragetyen, bei denen das Feedback sonst verzögert wäre, z. B. offene Fragen oder Blitzrunden.

📘 Weitere Informationen zum Feedbacktiming und -verhalten findest du bei den [Fragetypen](../question-types/000-question-types.md).

---

## 🏆 Wertungsoptionen {#scoring}

QuizWitz bietet flexible Punktvergabe, um das Spiel für alle fair und spannend zu halten.

- **Zeitbasierte Punktevergabe** — Spieler erhalten mehr Punkte für schnellere Antworten.
  - Bei den meisten Fragetypen verringert sich die Zeitpunktzahl **kontinuierlich pro Mikrosekunde**: Je schneller du antwortest, desto mehr Punkte bekommst du.
  - Nur bei **offenen Fragen** wird die zeitbasierte Punktevergabe in Blöcke eingeteilt. Zum Beispiel: Antworten im ersten Block (z. B. erste paar Sekunden) erhalten **100 %** der zeitbasierten Punkte, der nächste Block bekommt **80 %** und so weiter. Das hilft, den Wettbewerb für langsamere Tippen auszugleichen.

- **Fester Prozentsatz der Punkte bei zeitbasierter Punktevergabe** — Du bestimmst, wie stark die Gesamtpunktzahl durch die Geschwindigkeit beeinflusst wird.
  - Standardmäßig sind **75 %** der Punkte fest (jeder, der richtig antwortet, bekommt diese Punkte, unabhängig von der Geschwindigkeit).
  - Nur die restlichen **25 %** werden durch die Antwortgeschwindigkeit beeinflusst.

> 💡 Mit dieser Einstellung kannst du machen, dass Runden mehr wissens- oder mehr geschwindigkeitsbasiert sind, je nach deinem Quizstil.

Diese Punkteoptionen findest du im Rundenoptionspanel beim Bearbeiten einer Runde.

---

## 📜 Quizmaster-Anweisungen

Du kannst einen eigenen **Rundeneinleitungstext** hinzufügen, der nur in der [Quizmaster-App](../quizmaster/001-introduction.md) zu Beginn der Runde angezeigt wird. Nutze dies, um den Moderator zu briefen oder eine persönliche Note hinzuzufügen.

---

## 📎 Anhänge

Bereichere deine Runde mit Medien, die zu bestimmten Momenten angezeigt werden:

- **Vor der Runde** — Wird nach der Intro-Animation der Runde angezeigt
- **Nach der Runde** — Wird nach dem Outro der Runde gezeigt
- **Vor dem Rundenoutro** — Wird nach der letzten Frage, direkt vor dem Outro angezeigt
- **During round outro** — _(audio only)_ Plays while rankings are displayed
- ...

📘 Für unterstützte Dateitypen und Nutzungstipps siehe den [Anhangsleitfaden](../editor/006-attachments.md).

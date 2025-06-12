---
id: round-options
title: Rundungsoptionen
---

# 🔄 Rundungsoptionen

Jede Runde hat einen bestimmten **Typ**. Die Standardeinstellung ist **Multiple-Choice (Trivia)**, aber Sie können alle verfügbaren Typen testen und experimentieren. Diese Seite erklärt die Einstellungen und Anhänge, die Sie pro Runde konfigurieren können.

📘 Für eine detaillierte Übersicht aller Rundungstypen besuchen Sie bitte die [Rundungstyp-Dokumentation](../round-types/000-round-types.md).

---

## 🔧 Konfigurieren einer Runde

Um die Optionen einer Runde zu konfigurieren, klicken Sie auf das Zahnradsymbol im runden Fenster:

| ![Runde Optionen öffnen](/images/open-round-options.png) | ![Runden Optionen](/images/round-options.png) |
| :------------------------------------------------------: | :-------------------------------------------: |
|                     _runde Optionen_                     |            _Rundungskonfiguration_            |

---

## :getriebe: Allgemeine Rundungsoptionen

Die folgenden Optionen sind für die meisten runden Typen verfügbar:

- **Nur _X_ Fragen anzeigen** — Begrenzt die Runde auf eine bestimmte Anzahl von Fragen
- **Zufällige Fragenbestellung** — Mische die Fragenreihenfolge innerhalb der Runde
- **Runde Intro** anzeigen — Zeigt einen animierten Titel vor Beginn der Runde an
- **Zeige Round outro (Interims-Punktestand)** — Zeige Rankings am Ende der Runde
- **Gruppiere alle Feedback in einem einzigen Bildschirm** — Sammle FragenFeedback in einem Block nach Ende der Runde
- **Zeige alle Fragen Feedback am Ende der Runde** — Verzögere das Feedback der Frage bis zum Ende der Runde
- **Erzwinge Feedback nach jeder einzelnen Frage** — Stelle sofortige Rückmeldung sicher
  > :warnung: Dies wirkt nur bei runden und Fragetypen, bei denen das Feedback sonst verzögert würde, wie zum Beispiel offene Fragen oder Blitzrunden.

📘 Siehe [Frage Typen](../question-types/000-question-types.md) für weitere Informationen zum Feedback-Timing und zum Verhalten.

---

## 🏆 Scoring-Optionen {#scoring}

QuizWitz bietet flexible Scoring, um die Dinge fair und engagiert für alle Spieler zu halten.

- **Zeitbasierte Punkte** — Spieler erhalten mehr Punkte für schnellere Antworten.
  - Bei den meisten Fragetypen sinken die Zeitpunkte **kontinuierlich pro Mikrosekunde**: Je schneller du antwortest, desto mehr Punkte bekommst du.
  - Nur für **offene Fragen**, werden zeitbasierte Punkte in Blöcke aufgeteilt. Zum Beispiel: Antworten im ersten Block (z.B. erste Sekunden) verdienen **100%** des zeitbasierten Teils, der nächste Block verdient **80%**, und so weiter. Dies hilft dabei, das Spielfeld für langsamere Reifer zu gleichen.

- **Prozentsatz der Punkte bei zeitbasierter Punkte** — Du kontrollierst, wie viel der Gesamtpunktzahl durch Geschwindigkeit beeinflusst wird.
  - Standardmäßig sind **75%** der Punkte festgelegt (jeder, der richtig antwortet, bekommt diese Punkte, unabhängig von der Geschwindigkeit).
  - Nur die restlichen **25%** sind davon beeinflusst, wie schnell die Spieler reagieren.

> 💡 Mit dieser Einstellung können Sie Runden wissensbasierter oder schneller gestalten, je nach Quizstil.

Diese Scoring-Optionen finden Sie in der runden Optionsleiste beim Bearbeiten einer Runde.

---

## 📜 Quizmaster-Anweisungen

Du kannst einen benutzerdefinierten **runden Einführung** hinzufügen, der nur in der [Quizmaster app](../quizmaster/001-introduction.md) zu Beginn der Runde angezeigt wird. Benutzen Sie dies, um den Moderator zu kürzen oder eine persönliche Note hinzuzufügen.

---

## 📎 Anhänge

Verbessern Sie Ihre Runde mit Medien, die zu bestimmten Zeiten gezeigt werden:

- **Vor der Runde** — Nach der runden Einführungsanimation angezeigt
- **Nach Runde** — Wird nach dem runden Outro angezeigt
- **Vor Runde outro** — Wird nach der letzten Frage vor dem Outtro angezeigt
- \*\*Während der Runde außerhalb \*\* — _(nur Audio)_ Spielt während der Rangliste ab
- ...

📘 Für unterstützte Dateitypen und Benutzungstipps siehe [Anhang Anleitung](../editor/006-attachments.md).

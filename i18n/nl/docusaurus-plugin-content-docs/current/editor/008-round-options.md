---
id: round-options
title: Ronde-opties
---

# 🔄 Ronde-opties

Elke ronde heeft een specifiek **type**. De standaard is **Multiple Choice (Trivia)**, maar voel je vrij om te testen en experimenteren met alle beschikbare types. Op deze pagina worden de instellingen en bijlagen uitgelegd die je per ronde kunt configureren.

📘 Voor een gedetailleerd overzicht van alle ronde types, bezoek de [documentatie over ronde types](../round-types/000-round-types.md).

---

## 🔧 Een ronde configureren

Om de opties van een ronde te configureren, klik je op het tandwielpictogram in het ronde-paneel:

| ![Open ronde-opties](/images/open-round-options.png) | ![Ronde-opties](/images/round-options.png) |
| :--------------------------------------------------: | :----------------------------------------: |
|                 _Ronde-opties openen_                |         _Ronde configuratie paneel_        |

---

## ⚙️ Algemene ronde-opties

De volgende opties zijn beschikbaar voor de meeste ronde types:

- **Toon alleen _X_ vragen** — Beperkt de ronde tot een specifiek aantal vragen
- **Willekeurige vraagvolgorde** — Schud de volgorde van vragen binnen de ronde
- **Toon ronde-intro** — Toon een geanimeerde titel voordat de ronde begint
- **Toon ronde-outro (tussenstand)** — Laat de ranglijsten zien aan het einde van de ronde
- **Groeperen van alle feedback in één scherm** — Verzamel alle vraagfeedback in één blok nadat de ronde is geëindigd
- **Toon alle vraagfeedback aan het einde van de ronde** — Stel vraagfeedback uit tot het einde van de ronde
- **Forceer feedback na elke individuele vraag** — Zorg voor directe feedback
  > ⚠️ Dit werkt alleen in ronde- en vraagtypes waar feedback anders uitgesteld zou worden, zoals open vragen of lightning rounds.

📘 Zie [vraagtypes](../question-types/000-question-types.md) voor meer informatie over timing en gedrag van feedback.

---

## 🏆 Scoring opties {#scoring}

QuizWitz biedt flexibele scoring om het eerlijk en boeiend te houden voor alle spelers.

- **Tijdgebaseerde scoring** — Spelers verdienen meer punten voor snellere antwoorden.
  - Voor de meeste vraagtypen nemen tijdgebaseerde punten **continu af per microseconde**: hoe sneller je antwoordt, hoe meer punten je scoort.
  - Voor **alleen open vragen**, worden tijdbased punten verdeeld in blokken. Bijvoorbeeld: antwoorden in het eerste blok (bijv. eerste paar seconden) verdienen **100%** van het tijdbased gedeelte, het volgende blok verdient **80%**, enzovoorts. Dit helpt om het speelveld gelijk te trekken voor langzamere typers.

- **Vast percentage van de punten op tijdbased scoring** — Jij bepaalt hoeveel van de totaalscore beïnvloed wordt door snelheid.
  - Standaard is **75%** van de punten vast (iedereen die correct antwoordt krijgt deze, ongeacht snelheid).
  - Alleen de resterende **25%** wordt beïnvloed door hoe snel spelers reageren.

> 💡 Door deze instelling aan te passen kun je rondes meer op kennis of meer op snelheid maken, afhankelijk van je quiz-stijl.

Deze score-opties vind je in het ronde-opties paneel tijdens het bewerken van een ronde.

---

## 📜 Quizmasterinstructies

Je kunt een eigen **ronde-introductietekst** toevoegen die alleen in de [Quizmaster App](../quizmaster/001-introduction.md) verschijnt aan het begin van de ronde. Gebruik dit om de quizmaster te briefen of om een persoonlijke noot toe te voegen.

---

## 📎 Bijlagen

Versterk je ronde met media die op specifieke momenten worden getoond:

- **Voor de ronde** — Getoond na de ronde-intro animatie
- **Na de ronde** — Getoond na de ronde-outro
- **Voor de ronde-outro** — Getoond na de laatste vraag, net voor de outro
- **During round outro** — _(audio only)_ Plays while rankings are displayed
- ...

📘 Voor ondersteunde bestandstypen en gebruikstips, zie de [bijlagengids](../editor/006-attachments.md).

---
id: round-options
title: Rundeindstillinger
---

# 🔄 Rundeindstillinger

Hver runde har en bestemt **type**. Standard er **Trivia**, men vi opfordrer dig til at teste og eksperimentere med alle de tilgængelige typer. Denne side forklarer de indstillinger og vedhæftninger, du kan indstille for hver runde.

📘 En detaljeret oversigt over alle rundetyper finder du i [dokumentationen om rundetyper](../round-types/000-round-types.md).

---

## 🔧 Indstil en runde

For at indstille en rundes muligheder skal du klikke på tandhjulsikonet i rundepanelet:

| ![Åbn rundeindstillinger](/images/open-round-options.png) | ![Rundeindstillinger](/images/round-options.png) |
| :-------------------------------------------------------: | :----------------------------------------------: |
|             _Sådan åbnes rundeindstillingerne_            |         _Panel til indstilling af runden_        |

---

## ⚙️ Generelle rundeindstillinger

Følgende muligheder er tilgængelige for de fleste rundetyper:

- **Vis kun _X_ spørgsmål** - Begrænser runden til et bestemt antal spørgsmål
- **Tilfældig spørgsmålsrækkefølge** - Bland rækkefølgen af spørgsmål i runden
- **Vis rundens intro** - Vis en animeret titel, før runden begynder
- **Vis rundens outro (mellemstand)** - Vis stillingen ved slutningen af runden
- **Saml al feedback på én skærm** - Saml feedback på spørgsmålene i én blok, når runden er slut
- **Vis al feedback på spørgsmål i slutningen af runden** - Udskyd feedback på spørgsmålene, til runden er slut
- **Gennemtving feedback efter hvert enkelt spørgsmål** - Sørg for øjeblikkelig feedback
  > ⚠️ Det har kun virkning i runde- og spørgsmålstyper, hvor feedback ellers ville blive forsinket, f.eks. åbne spørgsmål eller lynrunder.

📘 Se [spørgsmålstyper](../question-types/000-question-types.md) for mere information om timing og opførsel af feedback.

---

## 🏆 Pointindstillinger {#scoring}

QuizWitz tilbyder fleksibel pointgivning, så det er fair og engagerende for alle spillere.

- **Tidsbaseret pointgivning** - Spillerne får flere point for hurtigere svar.
  - For de fleste spørgsmålstyper falder de tidsbaserede point **løbende pr. mikrosekund**: jo hurtigere du svarer, jo flere point får du.
  - Ved **åbne spørgsmål** er de tidsbaserede point opdelt i blokke. For eksempel: svar i den første blok (f.eks. de første par sekunder) giver **100%** af den tidsbaserede del, den næste blok giver **80%** og så videre. Det er med til at give lige vilkår for dem, der skriver langsommere.

- **Fast procentdel af pointene ved tidsbaseret pointgivning** - Du bestemmer, hvor meget af den samlede score der påvirkes af hastighed.
  - Som standard er **75%** af pointene faste (alle, der svarer rigtigt, får disse point, uanset hvor hurtige de er).
  - Kun de resterende **25%** påvirkes af, hvor hurtigt spillerne svarer.

> 💡 Ved at justere denne indstilling kan du gøre runder mere vidensbaserede eller mere hastighedsbaserede, alt efter din quizstil.

Disse pointindstillinger finder du i panelet med rundeindstillinger, når du redigerer en runde.

---

## 💬 Round explanation

Some round types and scoring options show a short explanation on the game screen before the first question, for example _"Answer consecutive questions correctly to reach higher levels and get bonus points."_ when a round uses strike scoring. Click **+ Round explanation** in the round opening to replace that text with your own. You can also use it to explain a regular trivia round, which has no explanation by default.

- Leave the field empty to keep the default explanation of the round type.
- The round explanation is translated like any other text: add it in every language of your quiz.
- When a quizmaster presents the quiz, the game screen skips the round explanation. Use the quizmaster script below instead.

---

## 📜 Instruktioner til quizmasteren

You can add a custom **round introduction text** (the **Quizmaster script**) that will appear only on the [Quizmaster App](../quizmaster/001-introduction.md) at the start of the round. Brug den til at briefe quizmasteren eller give det et personligt præg.

---

## 📎 Vedhæftninger

Enhance your round with attachments shown at specific moments:

- **Før runde** - Vises efter animationen med rundeintroen
- **Efter runde** - Vises efter rundeafslutningen
- **Før rundeafslutning** - Vises efter det sidste spørgsmål, lige før afslutningen
- **Under rundeafslutning** - _(kun lyd)_ Afspilles, mens stillingen vises
- ...

📘 Understøttede filtyper og tips til brug finder du i [vejledningen om vedhæftninger](../editor/006-attachments.md).

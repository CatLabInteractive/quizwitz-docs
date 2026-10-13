---
id: emerald-theme
title: Emerald-tema
---

# Emerald-tema

Emerald-temaet er den nemmeste måde at tilpasse udseendet af dit QuizWitz-spil på. Som standard har temaet en ren blå/grøn stil med livlige farver på svarmulighederne, men ved at kombinere quizvedhæftninger og temamodifikatorer kan du ændre udseendet - drastisk.

:::tip
Du kan bruge vores [tematester](https://client.quizwitz.com/test.html?theme=emerald) til at se, hvordan dine indstillinger kommer til at se ud.
:::

![Et skærmbillede af Emerald-temaet](/images/emerald/emerald.png)

## Vælg Emerald-temaet

Vælg **Tema** i dine **Quizindstillinger**, og aktivér **Emerald**.

Du kan teste en quiz med Emerald-temaet [her](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Et skærmbillede af quizindstillingerne](/images/emerald/quiz-settings.png)

## Vedhæftninger

### Quizvedhæftninger

Den klart nemmeste måde at ændre spillets udseende og stemning på er ved at vedhæfte billeder til din quiz. Åbn **Quizindstillinger**, og rul ned til afsnittet **Vedhæftninger**. Her kan du uploade billeder, der bruges som baggrund, kundelogo, tilslutnings - og venteskærme (til konference - og Live-quizzer) og meget mere.

![Et skærmbillede af quizvedhæftningerne](/images/emerald/quiz-attachments.png)

### Rundevedhæftninger

Du kan også uploade billeder eller videoer, der afspilles før og efter spillet. Det gælder også for runder: find et billede, du vil bruge som rundeintroduktion, gå til **rundeindstillinger**, slå **Vis rundens intro** fra for at skjule standardintroduktionen til runden, og upload dit billede eller din video som **Vis før runden**. Når runden starter, vises billedet eller videoen i stedet for standardintroduktionen.

![Et skærmbillede af rundevedhæftningerne](/images/emerald/round-settings.png)

:::tip
Brug billeder og videoer i en opløsning på 1920 x 1080 for at få det bedste resultat.
:::

:::info
Efter lidt leg med vedhæftningerne ender vi med noget i [stil med dette](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Et skærmbillede af Emerald-temaet med quizvedhæftninger](/images/emerald/emerald-with-attachments.png)

### Musik

Al musik i spillet kan også erstattes med vedhæftninger. Lydfiler, der uploades i felterne **under spørgsmål**, afspilles under spørgsmålets nedtælling.

## Modifikatorer til Emerald-temaet

Ud over vedhæftninger kan du også ændre Emerald-temaet med **query-parametre**. Det er parametre, du kan tilføje til URL'en fra **avancerede spilindstillinger** - og de ændrer temaets udseende.

Til det tager vi udgangspunkt i en eksempelquiz (uden vedhæftninger):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Når du starter quizzen ovenfor, vises spillet i standardstilen for Emerald. Lad os ændre det.

:::tip
Den nemmeste måde at eksperimentere med disse parametre på er med vores [tematester](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Når du er færdig med at eksperimentere, kan du kopiere - indsætte parametrene i URL'en fra dine avancerede spilindstillinger.
:::

De tilgængelige modifikatorer er:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 farver, komma - separeret)
- optionBorderColors (4 farver, komma - separeret)

Du kan desuden angive en standardskrifttype:

- defaultFont
- headerFont

Skrifttyperne skal være URL'er til offentligt tilgængelige skrifttypefiler.

Hver af disse modifikatorer kan indeholde en enkelt farve i HTML-hexformat (ff0000) eller en lineær gradient ved at angive flere farver adskilt af et minustegn ( - for eksempel ff1b6b-45caff). (Bemærk, at symbolet # ikke skal tilføjes.)

:::note
Query-parametrene skal starte med et spørgsmålstegn ( ? ) og hver parameter skal adskilles med et og-tegn ( & ). Læs mere om query-parametre på [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Ved at tilføje disse parametre til din spil-URL kan du ændre farverne i temaet:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Et skærmbillede af Emerald-temaet med tilpassede modifikatorer](/images/emerald/theme_properties.png)

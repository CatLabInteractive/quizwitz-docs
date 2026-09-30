---
id: emerald-theme
title: Emerald-tema
---

# Emerald-tema

Emerald-temaet er den enkleste måten å tilpasse utseendet på QuizWitz-spillet ditt. Som standard har temaet en ren blå/grønn stil med livlige alternativfarger, men ved å kombinere quizvedlegg og temamodifikatorer kan du endre utseendet - drastisk.

:::tip
Du kan bruke [tematesteren](https://client.quizwitz.com/test.html?theme=emerald) vår for å se hvordan innstillingene dine vil se ut.
:::

![Et skjermbilde av Emerald-temaet](/images/emerald/emerald.png)

## Velg Emerald-temaet

I **Quizinnstillinger** velger du **Tema** og aktiverer **Emerald**.

Du kan teste en quiz med Emerald-temaet [her](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Et skjermbilde av quizinnstillingene](/images/emerald/quiz-settings.png)

## Vedlegg

### Quizvedlegg

Den desidert enkleste måten å endre utseendet og følelsen i spillet på, er å legge ved bilder i quizen din. Åpne **Quizinnstillinger** og bla ned til seksjonen **Vedlegg**. Her kan du laste opp bilder som brukes som bakgrunn, kundelogo, tilkoblings- og venteskjermer (for konferanse- og Live-quizer) og mer.

![Et skjermbilde av quizvedleggene](/images/emerald/quiz-attachments.png)

### Rundevedlegg

Du kan også laste opp bilder eller videoer som vises før og etter spillet. Det samme gjelder runder: finn et bilde du vil bruke som rundeintroduksjon, gå til **rundeinnstillinger**, slå av **Vis rundeintro** for å skjule standardintroduksjonen til runden, og last opp bildet eller videoen din som **Vis før runden**. Når runden starter, vises bildet eller videoen i stedet for standardintroduksjonen.

![Et skjermbilde av rundevedleggene](/images/emerald/round-settings.png)

:::tip
Bruk bilder og videoer med oppløsning 1920 x 1080 for best resultat.
:::

:::info
Etter å ha lekt litt med vedleggene ender vi opp med noe [som dette](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Et skjermbilde av Emerald-temaet med quizvedlegg](/images/emerald/emerald-with-attachments.png)

### Musikk

All musikk i spillet kan også erstattes med vedlegg. Lydfiler som lastes opp i **under spørsmål**-feltene, spilles av under nedtellingen til spørsmålet.

## Modifikatorer for Emerald-temaet

I tillegg til vedlegg kan du også endre Emerald-temaet med **spørringsparametere**. Dette er parametere du kan legge til URL-en for **avanserte spillalternativer** - og de endrer utseendet på temaet.

Til dette starter vi med en eksempelquiz (uten vedlegg):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Når du starter quizen over, har spillet standardutseendet til Emerald. La oss endre på det.

:::tip
Den enkleste måten å eksperimentere med disse parameterne på er å bruke [tematesteren](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b) vår.  
Når du er ferdig med å eksperimentere, kan du kopiere og lime inn parameterne i URL-en for avanserte spillalternativer.
:::

Tilgjengelige modifikatorer er:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 farger, kommaseparert)
- optionBorderColors (4 farger, kommaseparert)

I tillegg kan du angi en standardskrift:

- defaultFont
- headerFont

Disse skriftene må være URL-er til offentlig tilgjengelige skriftfiler.

Hver av disse modifikatorene kan inneholde én farge i HTML-heksformat (ff0000), eller en lineær gradient ved å oppgi flere farger skilt med et minustegn (for eksempel ff1b6b-45caff). (Merk at symbolet # ikke skal tas med.)

:::note
Spørringsparameterne må starte med et spørsmålstegn ( ? ) og hver parameter må skilles med et og-tegn ( & ). Mer informasjon om spørringsparametere finner du på [Wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Ved å legge disse parameterne til spill-URL-en din kan du endre fargene i temaet:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Et skjermbilde av Emerald-temaet med egne modifikatorer](/images/emerald/theme_properties.png)

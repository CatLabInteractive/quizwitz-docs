---
id: emerald-theme
title: Emerald-tema
---

# Emerald-tema

Emerald-temat är det enklaste sättet att anpassa utseendet på ditt QuizWitz-spel. Som standard har temat en ren blå/grön stil med livfulla färger på alternativen, men genom att kombinera quizbilagor och temamodifierare kan du ändra utseendet - drastiskt.

:::tip
Du kan använda vårt [testverktyg för teman](https://client.quizwitz.com/test.html?theme=emerald) för att se hur dina inställningar kommer att se ut.
:::

![En skärmbild av Emerald-temat](/images/emerald/emerald.png)

## Välj Emerald-temat

I **Quizinställningar** väljer du **Tema** och aktiverar **Emerald**.

Du kan testa ett quiz med Emerald-temat [här](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![En skärmbild av quizinställningarna](/images/emerald/quiz-settings.png)

## Bilagor

### Quizbilagor

Det överlägset enklaste sättet att ändra spelets utseende och känsla är att bifoga bilder till ditt quiz. Öppna **Quizinställningar** och scrolla ner till avsnittet **Bilagor**. Här kan du ladda upp bilder som används som bakgrund, kundlogotyp, anslutnings- och vänteskärmar (för konferens- och livequiz) med mera.

![En skärmbild av quizbilagorna](/images/emerald/quiz-attachments.png)

### Rundbilagor

Du kan också ladda upp bilder eller videor som spelas upp före och efter spelet. Samma sak gäller för rundor: hitta en bild som du vill använda som rundintro, gå till **rundinställningar**, inaktivera **Visa rundans intro** för att dölja standardintrot för rundan och ladda upp din bild eller video som **Visa före rundan**. När rundan startar visas bilden eller videon i stället för standardintrot.

![En skärmbild av rundbilagorna](/images/emerald/round-settings.png)

:::tip
Använd bilder och videor med upplösningen 1920 x 1080 för bästa resultat.
:::

:::info
När vi har experimenterat med bilagorna får vi något i stil med [det här](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![En skärmbild av Emerald-temat med quizbilagor](/images/emerald/emerald-with-attachments.png)

### Musik

All musik i spelet kan också ersättas med bilagor. Ljudfiler som laddas upp i platserna **under frågan** spelas upp under frågans nedräkning.

## Modifierare för Emerald-temat

Förutom bilagor kan du också ändra Emerald-temat med **query-parametrar**. Det här är parametrar som du kan lägga till i URL:en för **avancerade spelalternativ** - och de ändrar temats utseende.

Här utgår vi från ett exempelquiz (utan bilagor):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

När du startar quizet ovan visas spelet i Emeralds standardstil. Nu ändrar vi på det.

:::tip
Det enklaste sättet att experimentera med de här parametrarna är att använda vårt [testverktyg för teman](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
När du är klar med experimenterandet kan du kopiera och klistra in parametrarna i URL:en för dina avancerade spelinställningar.
:::

De tillgängliga modifierarna är:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 färger, kommaseparerade)
- optionBorderColors (4 färger, kommaseparerade)

Du kan dessutom ange ett standardtypsnitt:

- defaultFont
- headerFont

Typsnitten måste vara URL:er till allmänt tillgängliga typsnittsfiler.

Var och en av de här modifierarna kan innehålla en enda färg i HTML-hexformat (ff0000) eller en linjär gradient, genom att ange flera färger åtskilda av ett minustecken ( - till exempel ff1b6b-45caff). (Observera att tecknet # inte ska läggas till.)

:::note
Query-parametrarna måste börja med ett frågetecken ( ? ) och varje parameter måste avgränsas med ett et-tecken ( & ). Mer information om query-parametrar finns på [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Genom att lägga till de här parametrarna i din spel-URL kan du ändra färgerna i temat:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![En skärmbild av Emerald-temat med anpassade modifierare](/images/emerald/theme_properties.png)

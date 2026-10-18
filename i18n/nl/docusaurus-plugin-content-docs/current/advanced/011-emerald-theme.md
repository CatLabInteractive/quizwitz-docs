---
id: emerald-theme
title: Emerald-thema
---

# Emerald-thema

Het Emerald-thema is de makkelijkste manier om het uiterlijk van je QuizWitz game aan te passen. Standaard heeft het thema een frisse blauw-groene stijl met levendige optiekleuren, maar door quizbijlagen en thema-aanpassingen te combineren kun je het uiterlijk ingrijpend veranderen.

:::tip
Je kunt onze [thematester](https://client.quizwitz.com/test.html?theme=emerald) gebruiken om te zien hoe jouw instellingen eruitzien.
:::

![Een screenshot van het emerald-thema](/images/emerald/emerald.png)

## Selecteer het Emerald-thema

Kies in je **Quizinstellingen** bij **Thema** voor **Emerald**.

Je kunt een quiz testen met het Emerald-thema [hier](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Een screenshot van de quizinstellingen](/images/emerald/quiz-settings.png)

## Bijlagen

### Quizbijlagen

De simpelste manier om het uiterlijk en het gevoel van de game te veranderen is door afbeeldingen toe te voegen aan je quiz. Open de **Quizinstellingen** en scroll naar het onderdeel **Bijlagen**. Hier kun je afbeeldingen uploaden die gebruikt worden als achtergrond, klantlogo, aanmeld- en wachtschermen (voor conferentie- en live-quizzen), en meer.

![Een screenshot van de quizbijlagen](/images/emerald/quiz-attachments.png)

### Rondebijlagen

Je kunt ook afbeeldingen of video's uploaden die voor en na de quiz worden getoond. Dit geldt ook voor rondes: zoek een afbeelding die je wilt gebruiken als introductie, ga naar **ronde-instellingen**, zet **Toon ronde-intro** uit om de standaard ronde-intro te verbergen, en upload je afbeelding of video als **Toon voor ronde**. Wanneer de ronde start, wordt de afbeelding of video weergegeven in plaats van de standaard introductie.

![Een screenshot van de rondebijlagen](/images/emerald/round-settings.png)

:::tip
Gebruik afbeeldingen en video's met een resolutie van 1920 x 1080 voor het beste resultaat.
:::

:::info
Na het spelen met de bijlagen krijg je iets [zoals dit](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Een screenshot van het emerald-thema met quizbijlagen](/images/emerald/emerald-with-attachments.png)

### Muziek

Alle muziek in de game kan ook vervangen worden door bijlagen. Alle audiobestanden die geüpload zijn bij de **tijdens vraag**-plekken worden afgespeeld tijdens de aftelling van de vraag.

## Emerald-thema aanpassers

Naast bijlagen kun je het Emerald-thema ook aanpassen met **query parameters**. Dit zijn parameters die je kunt toevoegen aan de URL van de **geavanceerde spelopties** - en ze veranderen het uiterlijk van het thema.

Hiervoor starten we met een voorbeeldquiz (zonder bijlagen):\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Als je bovenstaande quiz start, krijg je de game in de standaard Emerald-stijl. Laten we dat veranderen.

:::tip
De makkelijkste manier om te experimenteren met deze parameters is met onze [thematester](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Ben je klaar met experimenteren, dan kun je de parameters gewoon kopiëren en plakken naar de URL van je geavanceerde spelopties.
:::

De beschikbare aanpassers zijn:

- backgroundColor
- mainColor
- accentColor
- containerColor (de vraagcontainer; mag een alfawaarde bevatten, bijvoorbeeld ffffff40)
- timerBackgroundColor
- headerTextColor
- optionTextColor
- dialogTextColor
- pieChartLabelColor
- ladderColor
- optionColors (4 kleuren, kommagescheiden)
- optionBorderColors (4 kleuren, kommagescheiden)

Ook de apparaten van de spelers kun je opmaken:

- remoteBackgroundColor
- remoteTextColor
- remoteQuestionColor
- remoteQuestionTextColor
- remoteOptionOutlineColor
- remoteOutlineColor
- remoteContainerBackground
- remoteContainerText
- remoteOptionColors (4 kleuren, kommagescheiden)

Daarnaast kun je een standaardlettertype instellen:

- defaultFont
- headerFont

Deze lettertypes moeten URL's zijn naar publiek toegankelijke fontbestanden.

Tot slot verbergt `hideLogo=1` het QuizWitz-logo.

Elk van deze aanpassers kan een enkele kleur bevatten in HTML-hexformaat (ff0000), of een lineaire gradient door meerdere kleuren te geven gescheiden door een minteken (zoals ff1b6b-45caff). (Let op: het # symbool mag niet gebruikt worden.)

:::note
De query parameters moeten beginnen met een vraagteken (?) ) en elke parameter moet gescheiden worden met een ampersand (&). Voor meer informatie over query parameters, bekijk [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Door deze parameters aan je game URL toe te voegen, kun je de kleuren in het thema aanpassen:\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Een screenshot van het Emerald-thema met aangepaste modificators](/images/emerald/theme_properties.png)

### Het thema aanpassen vanuit de quiz-editor

De snelste manier om de aanpassers in te stellen is de knop **Thema aanpassen** in de quizinstellingen, onder de lijst met thema's. Die opent de thematester met je quiz, waar je de kleuren en lettertypes kiest die het thema aanbiedt en meteen het resultaat ziet. Klik op **Instellingen toepassen op quiz** en de editor selecteert het thema en slaat de aanpassers op in je quiz.

De knop vraagt een opgeslagen quiz en Premium, en werkt op een computer: de thematester past niet op een telefoon.

### De aanpassers opslaan in je quiz

Je hoeft de parameters niet bij elke link met de hand toe te voegen. Open **Delen of insluiten** in de quiz-editor, klap **Geavanceerde spelopties** open, plak de parameters (zonder het vraagteken vooraan, bijvoorbeeld `backgroundColor=ff1b6b-45caff&accentColor=00ff87`) in het veld **onbewerkte query string** en klik op **Instellingen opslaan voor quiz**. Vanaf dan bevat elke speellink en deellink van de quiz ze.

De QuizWitz AI-assistent kan dit ook voor je doen: vraag hem om de achtergrondkleur van je quiz te wijzigen, dan zet hij de quiz over naar het Emerald-thema en slaat hij de aanpassers op.

## Aangepaste vraagschermen

Het Emerald-thema biedt ook twee extra schermindelingen voor een vraag met een afbeelding of video in het slot **Tijdens de vraag**, per vraag te kiezen met de optie **Aangepast scherm** in de vraaginstellingen:

- **Bijlage op volledig scherm** - de afbeelding of video vult het hele spelscherm, de vraagtekst en opties worden niet getoond
- **Bijlage op volledig scherm zonder timer** - hetzelfde, maar ook het aftellen is verborgen

Spelers lezen de vraag en antwoorden op hun eigen apparaat. Zie [vragen schrijven](../editor/005-writing-questions.md) voor details.

---
id: emerald-theme
name: Emerald-thema
---

# Emerald-thema

Het Emerald-thema is de makkelijkste manier om het uiterlijk van je QuizWitz game aan te passen. Standaard is het thema een frisse blauw / groene stijl met levendige keuropties, maar door quizbijlagen en thema-aanpassingen te combineren kun je het uiterlijk volledig naar wens veranderen.

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

De simpelste manier om het uiterlijk en het gevoel van de game te veranderen is door afbeeldingen toe te voegen aan je quiz. Open de **Quizinstellingen** en scroll naar het onderdeel **Bijlagen**. Hier kun je afbeeldingen uploaden die gebruikt worden als achtergrond, klantlogo, connect- en wacht-schermen (voor conferentie- en live-quizzes), en nog meer.

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

Naast bijlagen kun je het Emerald-thema ook aanpassen met **query parameters**. Dit zijn parameters die je kunt toevoegen aan de URL van de **geavanceerde spelopties** om het uiterlijk van het thema aan te passen.

Hiervoor starten we met een voorbeeldquiz (zonder bijlagen):\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Als je bovenstaande quiz start, krijg je de game in de standaard Emerald-stijl. Laten we dat veranderen.

:::tip
De makkelijkste manier om te experimenteren met deze parameters is met onze thematester.\
Ben je klaar met experimenteren, dan kun je de parameters gewoon kopiëren en plakken naar de URL van je geavanceerde spelopties.
:::

De beschikbare aanpassers zijn:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 kleuren, komma-gescheiden)
- optionBorderColors (4 kleuren, komma-gescheiden)

Daarnaast kun je een standaardlettertype instellen:

- defaultFont
- headerFont

Deze lettertypes moeten URLs zijn naar publiek toegankelijke fontbestanden.

Elk van deze aanpassers kan een enkele kleur bevatten in HTML-hexformaat (ff0000), of een lineaire gradient door meerdere kleuren te geven gescheiden door een minteken (zoals ff1b6b-45caff). (Let op: het # symbool mag niet gebruikt worden.)

:::note
De query parameters moeten beginnen met een vraagteken (?) ) en elke parameter moet gescheiden worden met een ampersand (&). Voor meer informatie over query parameters, bekijk [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Door deze parameters aan je game URL toe te voegen, kun je de kleuren in het thema aanpassen:\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Een screenshot van het Emerald-thema met aangepaste aanpassers](/images/emerald/theme_properties.png)

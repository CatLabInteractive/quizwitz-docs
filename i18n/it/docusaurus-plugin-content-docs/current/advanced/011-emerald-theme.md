---
id: emerald-theme
title: Tema Emerald
---

# Tema Emerald

Il tema Emerald è il modo più semplice per personalizzare l'aspetto del tuo gioco QuizWitz. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks - drastically.

:::tip
Puoi usare il nostro [tester del tema](https://client.quizwitz.com/test.html?theme=emerald) per vedere come appariranno le tue impostazioni.
:::

![Uno screenshot del tema emerald](/images/emerald/emerald.png)

## Seleziona il tema Emerald

Nelle tue **impostazioni del quiz**, seleziona **Tema** e abilita **Emerald**.

Puoi provare un quiz usando il tema Emerald [qui](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Uno screenshot delle impostazioni del quiz](/images/emerald/quiz-settings.png)

## Allegati

### Allegati del quiz

Il modo di gran lunga più semplice per cambiare l'aspetto e l'atmosfera del gioco è allegare immagini al tuo quiz. Apri le **impostazioni del quiz** e scorri verso il basso fino alla sezione **Allegati**. Here you can upload images that will be used as background, client logo, connect - and wait screens (for conference - and live quizzes), and more.

![Uno screenshot degli allegati del quiz](/images/emerald/quiz-attachments.png)

### Allegati del round

Puoi anche caricare immagini o video che verranno riprodotti prima e dopo il gioco. Questo vale anche per i round: trova un'immagine che vuoi usare come introduzione del round, vai alle **impostazioni del round**, disabilita **Mostra introduzione round** per nascondere l'introduzione predefinita del round, e carica la tua immagine o il tuo video come **Mostra prima del round**. Quando il round inizia, l'immagine o il video verrà mostrato al posto dell'introduzione predefinita.

![Uno screenshot degli allegati del round](/images/emerald/round-settings.png)

:::tip
Usa immagini e video con risoluzione 1920 x 1080 per ottenere i risultati migliori.
:::

:::info
Dopo aver giocato un po' con gli allegati, otteniamo qualcosa [come questo](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Uno screenshot del tema emerald con allegati del quiz](/images/emerald/emerald-with-attachments.png)

### Musica

Anche tutta la musica del gioco può essere sostituita con allegati. Qualsiasi file audio caricato negli slot **durante la domanda** verrà riprodotto durante il conto alla rovescia della domanda.

## Modificatori del tema Emerald

Oltre agli allegati, puoi anche modificare il tema Emerald con i **parametri di query**. These are parameters you can add to the **advanced game options** URL - and they change the look of the theme.

Per questo, partiremo da un quiz di esempio (senza allegati):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Quando avvii il quiz qui sopra, il gioco sarà nello stile Emerald predefinito. Cambiamolo.

:::tip
Il modo più semplice per sperimentare con questi parametri è usare il nostro [tester del tema](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
When you are done experimenting, you can copy - paste the parameters to your advanced game options URL.
:::

I modificatori disponibili sono:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma - separated)
- optionBorderColors (4 colors, comma - separated)

In più, puoi impostare un font predefinito:

- defaultFont
- headerFont

Questi font devono essere URL di file di font disponibili pubblicamente.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( - for example ff1b6b-45caff). (Nota che il simbolo # non deve essere aggiunto.)

:::note
I parametri di query devono iniziare con un punto interrogativo ( ? ) e ogni parametro deve essere separato con una e commerciale ( & ). Per maggiori informazioni sui parametri di query, visita [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Aggiungendo questi parametri all'URL del tuo gioco, puoi modificare i colori del tema:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Uno screenshot del tema Emerald con modificatori personalizzati](/images/emerald/theme_properties.png)

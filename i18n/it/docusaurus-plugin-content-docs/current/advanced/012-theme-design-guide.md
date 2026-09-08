---
id: theme-design-guide
title: Guida alla progettazione del tema
---

# Guida alla progettazione del tema

[Theming](/docs/advanced/theming) spiega come viene costruito un tema QuizWitz: in Adobe Animate, esportato come libreria CreateJS. This page covers the step before that - **designing** the theme.

È scritto per un graphic designer, e suppone che il design e la produzione di Animate siano fatte da persone diverse. Pochi designer lavorano ancora in Adobe Animate, quindi un accordo comune è che un designer offre opere d'arte e qualcun altro assembla il tema. Questo funziona bene, ma solo se l'opera d'arte viene consegnata in una forma che la costruzione può effettivamente utilizzare. This page describes that shape, and doubles as the list of deliverables when you ask a designer for a quote.

:::tip
If you only want to change colours, fonts and backgrounds, you do not need any of this - customise the [Emerald theme](/docs/advanced/emerald-theme) instead.
:::

:::info[See it running]
Every screen described here can be played live, with sample data, in the **theme tester** at [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). It loads a theme and offers a menu of test screens: questions with and without an attachment, the answer spread for a small and a large group, the standings, the round intros, the connect screen with and without a client logo, and so on. Add `?theme=emerald` to the address to see the [Emerald theme](/docs/advanced/emerald-theme). Whoever builds the theme uses the same page to check it while it is being assembled.
:::

---

## Cosa stai progettando

Un gioco di QuizWitz è giocato da un'intera stanza in una sola volta, e due schermi sono sempre coinvolti:

- **The game screen** - a projector or TV, 1920 × 1080. Domande, risposte, come le risposte della stanza sono state diffuse, la classifica. Questo è quello che progettate.
- **Telefono di ogni giocatore**, dove scrivono la loro risposta. That is a web page with a fixed layout; it is styled from your colour list, not laid out by you.

A theme is the complete visual skin of the game screen: background, typography, colour, the way a question with four options is presented, how the standings build up, how a round is announced.

---

## Seven frames and an element sheet

The game has dozens of distinct screen states, but most are variants of the same layout. **You design seven frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Uno schermo senza opere d'arte propria cade di nuovo a una cornice generale.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule - and that furniture is a design decision, not something that can be inferred from a background.

| #     | Frame                              | Che cosa è su di esso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Che cosa ne deriva                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Quadro generale**                | Lo sfondo, un titolo di intestazione e un'area di contenuto vuota sotto di esso. Not a finished composition - the frame the rest is built inside.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Tredici stati dello schermo: spiegazione rotonda, posizione, introduzione del giocatore, varianti a scelta multipla, domande lunghe, avvisi sul posto, impostazioni. Each fills that content area its own way with elements from the sheet, so it has to hold things that look nothing alike. The question picker and the long question may get a composition of their own if you want them to; otherwise they use this frame. |
| **2** | **Connect and waiting**            | Two screens, not one. The **connect screen** is what the room sees to join: five lines of instruction, a join code, a QR code, a line with the number of connected players, and a list of players trickling in. Design it **twice**: with a client logo and without one. The join code and the QR code are generated by the engine; reserve a square for the QR code. The **waiting screen** stays up while the quizmaster reads a question aloud and is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **3** | **Schermata delle interrogazioni** | La domanda, un timer, quattro opzioni di risposta, una linea di feedback. Lo schermo della stanza guarda più a lungo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **4** | **Question with attachment**       | Lo stesso, organizzato intorno a un'immagine o video. Può essere una composizione diversa dal telaio 3. The attachment is scaled to fit inside the box you draw, so both a landscape and a portrait image must look acceptable in it.                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Also the full-screen attachment variant, and attachments shown between questions.                                                                                                                                                                                                                                                                                                                                                                                              |
| **5** | **Rispondi a schermo**             | Quale risposta era corretta, come le risposte della stanza sono state distribuite tra le opzioni, e una linea di feedback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Also the answer screen for open questions and for questions with an attachment.                                                                                                                                                                                                                                                                                                                                                                                                |
| **6** | **Classifica e vincitore**         | A list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element - it is repeated six times by default, up to ten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Sia la classifica tra i turni e il vincitore finale.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **7** | **Intro tondo**                    | Un breve annuncio per categoria round. Ci sono sei categorie: scienza & tecnologia, natura, intrattenimento & musica, sport, arte, storia. One design may serve several categories.                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Tutte le sei categorie.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### The element sheet

Two groups of elements, on one sheet, each drawn once and reused everywhere.

**Content building blocks.** These fill the content area of the general frame. The screens that fall back to it are assembled from these, so whatever you draw here decides how all of them look:

- a **panel**: fill, border, corner radius - the container a list or a block of text sits in
- a **list row**: the repeating unit of any list, with its own background or none
- a **separator**: the rule between rows, where there is no panel
- a **label and value pair**: a short label on the left, a value on the right

**Controls.** Drawn once, used on every screen:

- a **button** in its four states: rest, hover, pressed, disabled
- the **correct** and **wrong** symbols
- a **scrollbar**, a **checkbox**, a **select**
- where the **QuizWitz logo** sits

### Cosa è deciso per te

- **The players' phones.** A fixed HTML layout, styled from your colour list.
- **The handful of things the engine draws itself.** Some furniture is drawn in code rather than taken from the theme - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Those take their colour from the list in **Colour as a list** and nothing else, so that list is the only control you have over them.
- **Quali schermi rientrano nella cornice generale e come.**
- **How the six categories map onto the round intro artwork.** That mapping is a configuration setting, so one intro can be reused for several categories.
- **Tutti i tempi e la durata dell'animazione.**
- **Sound.** A theme can carry its own music and sound effects, but that is a separate deliverable and not part of the design brief.

### Un carattere è opzionale

Il tema QuizWitz stock ha un carattere che parla e reagisce. Niente richiede uno: il validatore del tema avverte solo sull'elemento `ted`; non fallisce senza di esso. The [Emerald theme](/docs/advanced/emerald-theme) ships without a character, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Senza un personaggio, l'intro rotondo diventa un momento grafico, tipografico o illustrativo. Due approcci mantengono il lavoro in proporzione: una composizione con una variante di colore o icona per categoria, o un unico annuncio universale con solo il nome rotondo che cambia. Sei intros genuinamente diversi è un sacco di lavoro per alcuni secondi di tempo dello schermo.

---

## Come appaiono queste cornici nella pratica

Gli schermi qui sotto provengono da un tema esistente. They are here to show **which elements appear on each screen and when**. They are not a reference for style _or_ layout: where this theme puts its question, its options and its timer is its own decision, and yours can differ completely. Read them for what has to be present, not for where it goes. All of them, and more, can be played in the [theme tester](https://client.quizwitz.com/test.html).

### Frame 1 - the general frame

Two game moments on the same frame: a question picker and a points ladder.

Look at how little they have in common. The picker puts its three rows inside a panel with a border; the ladder has no panel at all, just rows separated by thin rules. What the two share is the background and the header band above them - everything below that belongs to the individual screen and is filled by the game, not by you.

![Il quadro generale con un selettore di domande a tre righe](/images/theme-design/frame1-general-multiquestion.png)

![La cornice generale con una scala di cinque punti livello](/images/theme-design/frame1-general-strikeladder.png)

That panel and those rules are design decisions, and they are yours to make - they come from the **element sheet**, not from this frame. What this frame has to do is hold them: design the content area as an empty, neutral, roomy zone that works with a bordered panel, a bare list and a table of rows alike. A background that is busy in the middle, or a header that only works with a panel tucked right underneath it, is where that breaks.

### Frame 2 - connect and waiting

Con un logo client accanto al codice join e senza uno, dove l'opera d'arte del tema porta lo schermo:

![Connetti lo schermo con un logo client](/images/theme-design/frame2-connect.png)

![Connetti lo schermo senza un logo client](/images/theme-design/frame2-connect-nologo.png)

The waiting screen is a separate composition rather than a variant of the connect screen - the two share only a background. It stays up while the quizmaster reads a question aloud, and it is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game, so it deserves more attention than an empty screen usually gets.

![Schermata in attesa](/images/theme-design/frame2-pending.png)

### Frame 3 - the question screen

Quattro opzioni, la domanda sopra, il timer nel mezzo. Si noti che un'opzione può consistere di nient'altro che di emoji.

![Schermata della domanda con quattro opzioni di testo](/images/theme-design/frame3-question-options.png)

![Schermata delle domande con bandiere come opzioni di risposta](/images/theme-design/frame3-question-emoji.png)

A question with no options - players type their answer on their phone. Lo schermo è quasi vuoto e il timer diventa l'elemento principale:

![Domanda aperta con solo la domanda e un grande timer](/images/theme-design/frame3-question-open.png)

Il momento si esaurisce. Il pallone di feedback appare sullo schermo e il timer è vuoto:

![Schermata delle domande che mostra lo stato del time'sup](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - attachment

The same parts, rearranged around an attachment area, with the options to the left and right:

![Schermata delle domande con un'immagine al centro](/images/theme-design/frame4-question-attachment.png)

An attachment on its own, filling the screen:

![Full-screen attachment](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - the answer screen

Questo schermo passa attraverso tre momenti. Prima la diffusione, con niente ancora segnato:

![Rispondi alla schermata che mostra lo spread](/images/theme-design/frame5-answer-mc-spread.png)

Quindi l'opzione corretta è spuntata e quelli sbagliati incrociati:

![Rispondi alla schermata con l'opzione corretta rivelata](/images/theme-design/frame5-answer-mc-reveal.png)

E se la domanda porta una spiegazione, un palloncino cade sopra l'opera d'arte. Leave room for it - it lands on top of whatever you designed:

![Rispondi alla schermata con la spiegazione palloncino](/images/theme-design/frame5-answer-mc-explanation.png)

Con un piccolo gruppo, lo stesso momento è una lista di punteggi piuttosto che un grafico:

![Rispondi alla schermata per un piccolo gruppo](/images/theme-design/frame5-answer-mc-small.png)

Per una domanda aperta, il grafico mostra quanti giocatori hanno ottenuto giusto:

![Rispondi alla schermata per una domanda aperta](/images/theme-design/frame5-answer-open.png)

### Frame 6 - standings and winner

La classifica dopo un turno. La riga del giocatore è l'elemento che ripete: posizione, avatar, nome, punteggio.

![Classifiche con sei righe di giocatore](/images/theme-design/frame6-roundoutro.png)

The final countdown names one player at a time, from last place to first - place, score and team name in the spotlight. This is also where the flying emoji are heaviest; see the note further down:

![Il conto alla rovescia del vincitore nomina un giocatore](/images/theme-design/frame6-winner-countdown.png)

![La classifica finale](/images/theme-design/frame6-winner.png)

### Frame 7 - the round intro

Un disegno, opzionalmente con una variante per categoria:

![Intro tondo per la categoria naturale](/images/theme-design/frame7-roundintro-nature.png)

![Intro tondo per la categoria scientifica](/images/theme-design/frame7-roundintro-science.png)

---

## Norme di progettazione

Nessuno di questi limita il vostro disegno visivo. Si tratta di come viene costruito il file.

### Formato

- **1920 × 1080 pixel**, esattamente. Una cornice per schermo.
- Lavora **nel vettore** dove puoi. Dove si utilizza raster (foto, texture): almeno 2× dimensioni di visualizzazione.
- The Animate document runs at **24 frames per second**. Rilevante se si forniscono idee di movimento.
- Mantenere un **5% di margine** ai bordi senza informazioni essenziali. Colture di proiettori.

### Layer structure - the rule that matters most

**Tutto ciò che può spostare, apparire o cambiare il valore si trova sul proprio livello denominato.** Niente unito, niente appiattito.

In pratica: le quattro opzioni di risposta sono quattro strati separati, non uno. Il timer è separato dallo sfondo. Un pulsante e la sua etichetta sono due elementi. Una riga del giocatore è un gruppo che può essere duplicato.

Cosa può essere fuso: arte di sfondo puramente decorativa che funziona come una singola immagine ferma.

This is the one rule that genuinely hurts when it is not followed - the artwork then has to be pulled apart or redrawn, which is exactly the cost this arrangement is meant to avoid.

### Effetti che non sopravvivono

Il motore si avvale di una tela HTML5. Questi devono essere **cotti nell'immagine** o lasciati fuori:

- Sfocatura live, ombre e bagliore come filtri → fornire come opere d'arte
- Modalità di fusione (multipla, schermo, sovrapposizione) → risolvono a colore piatto
- Effetti di livello e livelli di regolazione
- Testo **dentro** dei gradienti, o testo con contorno per carattere
- Maschere che cambiano per fotogramma

I gradienti nelle forme vanno bene. La trasparenza va bene. Ombre come arte fissa vanno bene.

### Come si comporta il testo

Questo è dove la progettazione per QuizWitz differisce più dal lavoro di progettazione ordinaria.

**Non si imposta la dimensione del carattere. Hai disegnato una scatola.**

Tutto il testo è disegnato in diretta da un componente che riceve due cose: una stringa, e il rettangolo che hai sognato. Poi trova **la dimensione più grande del carattere in cui quella stringa, avvolta tra le righe, si inserisce ancora all'interno della scatola**. Una corda lunga si restringe per adattarsi; uno corto cresce fino a quando la scatola è piena.

![Un selettore in cui tre righe di lunghezza diversa ottengono una dimensione di carattere diversa](/images/theme-design/frame1-general-multiquestion.png)

Three rows, three identical boxes - and three completely different font sizes, purely because the text is shorter or longer. "Dove è l'amore" ottiene l'altezza piena; la domanda sopra deve fare a che fare con due piccole linee. Le etichette a sinistra si comportano allo stesso modo.

Ciò che ne consegue:

- \*\*La stessa domanda sembra diversa in un'altra partita. \* Una domanda di sei parole appare grande e schermo-riempimento; un trentacinque parola uno appare piccolo su cinque righe, esattamente nella stessa scatola. Entrambi devono guardare a destra.
- \*\*Progettare ogni casella di testo due volte. \* Riempirlo una volta con un campione molto breve e una volta con uno molto lungo, e controllare che la composizione tiene in entrambi. Come regola generale, un'opzione di risposta viene eseguita da una a circa otto parole, una domanda da cinque a quaranta, un nome di giocatore da due a venti personaggi.
- **Non contare su un numero fisso di linee.** Un titolo che è "sempre su una riga" non esiste qui.
- \*\*Non allineare otticamente il testo con nient'altro. \* Testo che deve allinearsi con una regola o una forma deriva non appena è più breve o più lungo. Usa scatole abbastanza spaziose e un allineamento (sinistra, centrata, destra) invece di posizioni esatte.
- **La scatola è un massimo, non una promessa.** Si progetta le sue proporzioni; il riempimento varia.
- **Twelve languages.** German compounds are long, and Hungarian is no kinder. Una scatola che è stretta in inglese scende a una dimensione illeggibilmente piccola in tedesco.
- **Emoji can appear inside text.** Players pick one next to their team name, and a question or an option can contain one - sometimes an option is nothing but an emoji. Essi sono disegnati a colori e sono più alti delle lettere che li circondano.

Che cosa la build ha bisogno di sapere su ogni casella di testo: dove è, quanto è grande, come è allineato, quale colore e quale carattere. Nota: a quale punto dimensione.

Seguono due cose che puoi usare: una grande scatola con testo corto diventa di per sé una forte composizione tipografica. e una scatola che intenzionalmente fa stretto e alto forza il testo in una colonna. You can use the fitting as a design device - you just should not design against it.

### The timer - required, and it is an animation

**Ogni schermata delle domande ha un timer.** Non è opzionale; la stanza deve vedere quanto tempo è rimasto. Entrambi i telai interrogativi ne portano uno.

**The timer is not a counting number but an animation whose playhead the engine moves.** You design a progression from "full" to "empty" - a bar draining, a ring closing, an hourglass, a shrinking line. Il motore gioca quella animazione esattamente alla velocità che rende l'ultimo telaio coincide con la fine della domanda.

Cosa segue:

- **The question duration is not fixed.** It is set per quiz - often twenty to thirty seconds, but it can be shorter or longer. La tua animazione è allungata o compresso per adattarsi. Progetta una _progressione_, non un'animazione di un determinato numero di secondi.
- **Nessun numero o ticket al secondo.** Un timer che conta "20, 19, 18…" smette di essere vero non appena la durata cambia.
- **Gli ultimi secondi sono il momento più lungo del gioco.** Aiuta se la progressione diventa più chiara o più urgente verso la fine.
- **Legible from the back of the room**, at a glance.
- **Sono ammessi più temporizzatori.** Una barra in alto e un anello vicino alla domanda sono entrambi guidati, purché ciascuno sia chiamato `timer`.

Supply the timer as a series of keyframes or as a description of the progression - "the bar drains right to left and shifts from green to red" is enough.

### Flying emoji land on top of everything

Every player picks an emoji when they join, and the game throws those emoji across the screen. They are drawn by the engine on a layer above the theme, in whatever colours the player's emoji happens to have. **There is nothing here for you to design** - but there is something to design around, because they are not a rare flourish. They appear at three moments:

- **When a player answers.** Their emoji rises from the bottom edge at a random horizontal position, arcs up and falls back out of frame.
- **When a player flings one.** Players can fling their emoji from their phone; angle and speed come from the swipe, and it launches from the bottom centre, spinning.
- **When a place is revealed in the final countdown.** A burst of the named player's emoji: twenty for an ordinary place, fifty for third, seventy-five for second, and **a hundred and fifty for the winner.**

They always enter from the bottom edge, arc under gravity and fall back out. What that means for the design:

- **Keep the bottom third of the standings and winner screens clear of anything small or critical.** During the countdown it is genuinely crowded down there.
- **Assume they will clash with your palette.** They are full-colour emoji from every corner of the Unicode chart, and no theme controls them. A design that only holds together in a tight colour range will look accidental for those seconds.
- **Flings are suppressed while an image or video is showing**, so the attachment screens stay clean.
- The whole layer can be switched off per game, so do not build a composition that depends on them being there either.

### Caratteri

- **I caratteri devono essere incorporabili.** Il file `.ttf` o `.otf` è necessario, oltre a una licenza che permetta di incorporare in un'applicazione. Un carattere con licenza solo come webfont, o solo per la stampa, non può essere utilizzato. Controllare questo prima di progettare con esso; si tratta di una correzione costosa in seguito.
- Caratteri con ascendenti o discendenti di grandi dimensioni insolitamente possono essere compensati, ma flag se ne usi uno.

### Colore come lista

The theme reads a colour list from a configuration file, and the players' phones are styled from the same list. Fornisci la tua tavolozza come **lista nominata**, non solo come colori nell'opera d'arte:

- **Game screen:** main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong.
- **The four answer options:** each with a background and a border colour, plus one flat colour per option for the phones and the charts.
- **Players' phones:** background, text colour, outline colour, option outline colour, and the background and text colour of the answer container.

Gradients are allowed on the game screen: give them as two hex values.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting: the **separator** (the rules between rows where there is no panel, and on the points ladder), the **active**, **inactive** and **selected** states of a row in the question picker, the **dialog** text, and the **front and back of the QR code**. If you leave them out they fall back to built-in defaults - white, grey, red, black and white - which rarely match a design.

### Il logo QuizWitz

I disegni personalizzati includono il logo QuizWitz. Riserva un posto per esso dove non ottiene nel modo del design.

---

## Cosa consegnare

### Source file - Illustrator preferred

\*\*Adobe Illustrator (`.ai`) è preferito, e c'è una ragione concreta. \* Il tema è costruito in Adobe Animate, che importa direttamente i file Illustrator e converte i tuoi livelli in livelli Animati o simboli separati, mantenere i nomi dei livelli e lasciare i vettori modificabili. Questo è esattamente il passo che salva l'opera d'arte da essere ricostruita a mano.

Figma o Photoshop è possibile, ma conoscere il costo: con Figma tutto passa attraverso SVG ed esportazione PNG, ed è proprio qui che si perde la struttura dello strato necessaria. Se usi Figma, fornisci **ogni elemento separatamente come SVG**, con nomi di file corrispondenti ai nomi dei livelli, in modo che la struttura possa essere ricostruita a mano. Photoshop importa in Animate con i suoi strati intatti, come Illustrator, ma ti dà raster invece di vettore.

Se siete più veloci a Figma, usatelo per la fase concettuale e consegnate la versione finale in Illustrator.

Struttura dei file:

- Una scheda per schermo, ciascuna esattamente 1920 × 1080, denominata dopo i fotogrammi precedenti.
- Parti riutilizzabili (pulsante, riga del giocatore, opzione di risposta, timer) come **simboli** o componenti, non come copie sciolte.
- Nomi dei livelli in inglese, senza spazi: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colori come swatches e testo chiamati come stili chiamati, piuttosto che impostare su ogni oggetto singolarmente.

### Deliverables checklist

1. The **source file**, structured as above.
2. **Each frame as a PNG**, 1920 × 1080 - a reference for how it should look. For frame 2, both the version with and the version without a client logo.
3. **The element sheet** as one artboard: the content building blocks and the controls listed above.
4. **Each separate graphic element as a transparent PNG at 2×**, in one folder, filename matching the layer name.
5. **The timer** as keyframes or a written description of the progression.
6. **Fonts** as `.ttf` or `.otf`, with proof of licence.
7. **The colour list** described above, as hex values.
8. **Half a page of notes**: what the idea is, how the options should appear, what moves and what stays still. Not a ten-page design rationale - whoever builds the theme needs to know what to build. Le idee di movimento possono essere descritte o fornite come animatiche grezze.

### Order of work

Start with frame 3, the question screen, together with the element sheet, and get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme, and the question screen is the one the room looks at longest. Frames 1 and 2 follow naturally from them; frames 5 to 7 come last.

---

## Appendix - symbol names

Per completezza, e per chiunque voglia sapere esattamente dove finisce la propria opera. **You do not need to read this to do the work**; the seven frames and the element sheet above are enough. Usando questi nomi come nomi di livelli si salva una fase di traduzione.

| Frame                                              | Nome del simbolo                                                                                                                          | Parti richieste                                                                                                                                                                                |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Frame generale           | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (the content area); `title` text box optional                                                                                                                 |
| 1b. Question picker, long question | `MultiQuestionScreen`, `LongQuestionScreen`; both optional, fall back to the general frame                                                | picker: `questions` placeholder, `timer`; long question: `question` placeholder                                                                                |
| 2. Connetti schermo         | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, with a `logo` placeholder                                      | `instructions.line1` to `line5`, `connectedPlayers`; `qrCode` placeholder with frame label `showQrCode` optional                                                                               |
| 2b. Schermata di attesa            | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | `header.text`                                                                                                                                                                                  |
| 3. Schermata della domanda  | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` a `option4`, etichette di quadri `showOptions` e `showFeedback`                                                                           |
| 4. Question with attachment | `QuestionScreenAttachment`                                                                                                                | come sopra, più `attachment.placeholder`                                                                                                                                                       |
| 4b. Full-screen attachment         | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                  |
| 5. Rispondi a schermo       | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` a `option4`, `answer.text`, `feedback.text`                                                                                                                                          |
| 5b. Apri risposta domanda          | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` variants optional                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 6. Classifiche              | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` and `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in the row: `position`, `name`, `score`, `avatar` optional                           |
| 7. Intro rotondo            | one or more symbols of any name; the configuration file maps each of the six categories to a symbol                                       | -                                                                                                                                                                                              |
| -                                                  | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                             |
| -                                                  | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no artwork of their own needed - built from what appears in your frames                                                                                                                        |
| -                                                  | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | only shown in the desktop app, not in a live quiz. Not part of the brief: they are taken from the theme template and restyled with your background and buttons |

The stock theme's round intro symbols are called `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` and `RoundIntroTedCultHist`; art and history share the last one. The "Ted" in those names is a leftover from the original theme's character and does not mean a character has to appear in them.

Ogni elemento con `.text` dopo che è una casella di testo montata come descritto sopra: un rettangolo che il motore si riempie. The `timer` element is a movie clip with its own timeline; the engine reads its frame count and moves the playhead in proportion to elapsed time, at most 24 times per second.

### Ciò che il file di configurazione prende dal tuo design

```json
{
  "fontFiles": { "<body font>": "fonts/body.ttf", "<heading font>": "fonts/heading.ttf" },
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "_container_": "#…", "_timerBackground_": "#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…", "player": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "optionColors": [ "#…", "#…", "#…", "#…" ],
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "remoteColors": {
    "background": "#…", "text": "#…", "outline": "#…",
    "options-outline": "#…", "container-background": "#…", "container-text": "#…"
  },
  "roundIntros": { "science": "<symbol>", "nature": "<symbol>", "entertainment": "<symbol>",
                   "sports": "<symbol>", "art": "<symbol>", "history": "<symbol>" },
  "overlay": "light | dark"
}
```

---
id: theme-design-guide
title: Guida alla progettazione dei temi
---

# Guida alla progettazione dei temi

[Temi](/docs/advanced/theming) spiega come viene costruito un tema QuizWitz: in Adobe Animate, esportato come libreria CreateJS. Questa pagina riguarda il passaggio precedente: la **progettazione** del tema.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Questa pagina descrive quella forma e vale allo stesso tempo come elenco dei materiali da consegnare quando chiedi un preventivo a un grafico.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Se vuoi solo cambiare colori, font e sfondi, non ti serve niente di tutto questo: personalizza invece il [tema Emerald](/docs/advanced/emerald-theme).
:::

:::info[Vederlo in azione]
Ogni schermata descritta qui può essere provata dal vivo, con dati di esempio, nel **tester dei temi** all'indirizzo [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Carica un tema e propone un menu di schermate di prova: domande con e senza allegato, la distribuzione delle risposte per un gruppo piccolo e per uno grande, la classifica, le intro dei round, la schermata di connessione con e senza logo del cliente, e così via. Aggiungi `?theme=emerald` all'indirizzo per vedere il [tema Emerald](/docs/advanced/emerald-theme). Chi costruisce il tema usa la stessa pagina per controllarlo mentre lo assembla.
:::

---

## Che cosa stai progettando

Una partita a QuizWitz viene giocata da un'intera sala contemporaneamente, e ci sono sempre due schermi in gioco:

- **Lo schermo di gioco** - un proiettore o un televisore, 1920 × 1080. Domande, risposte, come si sono distribuite le risposte della sala, la classifica. È questo che progetti tu.
- **Il telefono di ogni giocatore**, dove digita la sua risposta. È una pagina web con un impaginato fisso; viene stilizzata a partire dal tuo elenco di colori, non sei tu a impaginarla.

Un tema è l'intero rivestimento visivo dello schermo di gioco: sfondo, tipografia, colore, il modo in cui viene presentata una domanda con quattro opzioni, come si costruisce la classifica, come viene annunciato un round.

---

## Eight frames and an element sheet

Il gioco ha decine di stati di schermata distinti, ma la maggior parte sono varianti dello stesso impaginato. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Una schermata senza grafica propria ripiega su un frame generale.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Frame                                                           | Also covers                                                               |
| - | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1 | [General frame](#frame-1---the-general-frame)                   | Thirteen screen states with no artwork of their own                       |
| 2 | [Connect screen](#frame-2---the-connect-screen)                 | Draw it twice: with a client logo and without one         |
| 3 | [Waiting screen](#frame-3---the-waiting-screen)                 | -                                                                         |
| 4 | [Question screen](#frame-4---the-question-screen)               | -                                                                         |
| 5 | [Question with attachment](#frame-5---question-with-attachment) | The full-screen attachment, and attachments shown between questions       |
| 6 | [Answer screen](#frame-6---the-answer-screen)                   | The answer screen for open questions and for questions with an attachment |
| 7 | [Standings and winner](#frame-7---standings-and-winner)         | The standings between rounds and the final winner                         |
| 8 | [Round intro](#frame-8---the-round-intro)                       | All six round categories                                                  |

:::note[About the screenshots]
Le schermate qui sotto provengono da un tema esistente. They show **which elements appear on each screen and when**. Non sono un riferimento né di stile _né_ di impaginazione: dove questo tema mette la sua domanda, le sue opzioni e il suo timer è una sua scelta, e la tua può essere completamente diversa.
:::

### Frame 1 - il frame generale

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. Il selettore delle domande e la domanda lunga possono avere una composizione propria, se lo desideri; altrimenti usano questo frame.

Due momenti di gioco sullo stesso frame: un selettore delle domande e una scala dei punti.

![Il frame generale con un selettore delle domande a tre righe](/images/theme-design/frame1-general-multiquestion.png)

![Il frame generale con una scala dei punti a cinque livelli](/images/theme-design/frame1-general-strikeladder.png)

Guarda quanto poco hanno in comune. Il selettore mette le sue tre righe dentro un pannello con bordo; la scala non ha alcun pannello, solo righe separate da filetti sottili. Ciò che i due condividono è lo sfondo e la fascia di intestazione sopra di essi: tutto quello che sta sotto appartiene alla singola schermata e viene riempito dal gioco, non da te.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Quello che questo frame deve fare è reggerli: progetta l'area dei contenuti come una zona vuota, neutra e ampia, che funzioni allo stesso modo con un pannello bordato, con un elenco spoglio e con una tabella di righe. Uno sfondo affollato al centro, o un'intestazione che funziona solo con un pannello infilato subito sotto, è il punto in cui questo si rompe.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Schermata di connessione con un logo del cliente](/images/theme-design/frame2-connect.png)

![Schermata di connessione senza logo del cliente](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Schermata di attesa](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Schermata della domanda con quattro opzioni testuali](/images/theme-design/frame3-question-options.png)

![Schermata della domanda con bandiere come opzioni di risposta](/images/theme-design/frame3-question-emoji.png)

Una domanda senza opzioni: i giocatori digitano la risposta sul telefono. La schermata è quasi vuota e il timer diventa l'elemento principale:

![Domanda aperta con solo la domanda e un timer grande](/images/theme-design/frame3-question-open.png)

Il momento in cui il tempo scade. Il fumetto di feedback compare sopra la schermata e il timer resta vuoto:

![Schermata della domanda nello stato di tempo scaduto](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. L'allegato viene ridimensionato per stare nel riquadro che disegni, quindi sia un'immagine orizzontale sia una verticale devono risultare accettabili al suo interno.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Schermata della domanda con un'immagine al centro](/images/theme-design/frame4-question-attachment.png)

Un allegato da solo, che riempie lo schermo:

![Allegato a tutto schermo](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Prima la distribuzione, senza ancora nulla di marcato:

![Schermata della risposta con la distribuzione](/images/theme-design/frame5-answer-mc-spread.png)

Poi l'opzione corretta viene spuntata e quelle sbagliate vengono barrate:

![Schermata della risposta con l'opzione corretta rivelata](/images/theme-design/frame5-answer-mc-reveal.png)

E se la domanda porta con sé una spiegazione, un fumetto scende sopra la grafica. Lasciagli spazio: atterra sopra qualunque cosa tu abbia progettato:

![Schermata della risposta con il fumetto della spiegazione](/images/theme-design/frame5-answer-mc-explanation.png)

Con un gruppo piccolo, lo stesso momento è un elenco di punteggi invece di un grafico:

![Schermata della risposta per un gruppo piccolo](/images/theme-design/frame5-answer-mc-small.png)

Per una domanda aperta, il grafico mostra quanti giocatori hanno indovinato:

![Schermata della risposta per una domanda aperta](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Classifica con sei righe giocatore](/images/theme-design/frame6-roundoutro.png)

Il conto alla rovescia finale nomina un giocatore alla volta, dall'ultimo posto al primo: posto, punteggio e nome del team sotto i riflettori. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![Il conto alla rovescia del vincitore che nomina un giocatore](/images/theme-design/frame6-winner-countdown.png)

![La classifica finale](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Le categorie sono sei: scienza e tecnologia, natura, intrattenimento e musica, sport, arte, storia.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Intro del round per la categoria natura](/images/theme-design/frame7-roundintro-nature.png)

![Intro del round per la categoria scienza](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Senza personaggio, l'intro del round diventa un momento grafico, tipografico o illustrativo. Due approcci tengono il lavoro in proporzione: una composizione con una variante di colore o di icona per categoria, oppure un unico annuncio universale in cui cambia solo il nome del round. Sei intro davvero diverse sono molto lavoro per pochi secondi di schermo.

---

## Il foglio degli elementi

Due gruppi di elementi, su un unico foglio, ciascuno disegnato una volta e riutilizzato ovunque.

**Blocchi di contenuto.** Questi riempiono l'area dei contenuti del frame generale. Le schermate che vi ripiegano vengono assemblate a partire da essi, quindi quello che disegni qui decide l'aspetto di tutte:

- un **pannello**: riempimento, bordo, raggio degli angoli - il contenitore in cui sta un elenco o un blocco di testo
- una **riga di elenco**: l'unità che si ripete in ogni elenco, con uno sfondo proprio o senza
- un **separatore**: il filetto tra le righe, dove non c'è un pannello
- una **coppia etichetta-valore**: un'etichetta breve a sinistra, un valore a destra

**Controlli.** Disegnati una volta, usati su ogni schermata:

- un **pulsante** nei suoi quattro stati: riposo, hover, premuto, disattivato
- i simboli di **corretto** ed **errato**
- una **barra di scorrimento**, una **casella di controllo**, un **menu a discesa**
- dove si trova il **logo QuizWitz**

---

## Che cosa è già deciso

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Quali schermate ripiegano sul frame generale, e come.**
- **In che modo le sei categorie vengono associate alla grafica dell'intro del round.** Questa associazione è un'impostazione di configurazione, quindi una stessa intro può essere riutilizzata per più categorie.
- **Tutti i tempi e tutte le durate delle animazioni.**
- **L'audio.** Un tema può avere musica ed effetti sonori propri, ma è un materiale da consegnare a parte e non fa parte del brief di progettazione.

---

## Regole di progettazione

Nessuna di queste limita il tuo lavoro visivo. Riguardano il modo in cui è costruito il file.

### Formato

- **1920 × 1080 pixel**, esatti. Un frame per schermata.
- Lavora **in vettoriale** dove puoi. Dove usi il raster (foto, texture): almeno 2× la dimensione di visualizzazione.
- Il documento Animate gira a **24 fotogrammi al secondo**. Utile se fornisci idee di movimento.
- Tieni un **margine del 5%** ai bordi libero da informazioni essenziali. I proiettori tagliano.

### Struttura dei livelli - la regola che conta di più

**Tutto ciò che può muoversi, comparire o cambiare valore sta su un livello proprio con un nome proprio.** Niente unito, niente appiattito.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Che cosa si può unire: la grafica di sfondo puramente decorativa che funziona come una singola immagine fissa.

Questa è l'unica regola che fa davvero male quando non viene seguita: la grafica va poi smontata o ridisegnata, ed è esattamente il costo che questa organizzazione vuole evitare.

### Effetti che non sopravvivono

Il motore disegna su un canvas HTML5. Questi vanno **incorporati nell'immagine** oppure lasciati fuori:

| Effect                                                               | What to do instead          |
| -------------------------------------------------------------------- | --------------------------- |
| Live blur, drop shadows and glow as filters                          | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)           | Resolve them to flat colour |
| Effetti di livello e livelli di regolazione                          | Bake them in                |
| Sfumature **dentro** il testo, o testo con un contorno per carattere | Leave them out              |
| Maschere che cambiano da un fotogramma all'altro                     | Leave them out              |

Le sfumature nelle forme vanno bene. La trasparenza va bene. Le ombre come grafica fissa vanno bene.

### Come si comporta il testo

È qui che progettare per QuizWitz si discosta di più dal normale lavoro di progettazione.

**Non imposti un corpo del carattere. Disegni un riquadro.**

Tutto il testo viene disegnato dal vivo da un componente che riceve due cose: una stringa e il rettangolo che hai disegnato. Poi cerca **il corpo più grande con cui quella stringa, mandata a capo su più righe, sta ancora dentro il riquadro**. Una stringa lunga si rimpicciolisce per entrare; una corta cresce finché il riquadro non è pieno.

![Un selettore in cui tre righe di lunghezza diversa ricevono ciascuna un corpo diverso](/images/theme-design/frame1-general-multiquestion.png)

Tre righe, tre riquadri identici - e tre corpi del carattere completamente diversi, solo perché il testo è più corto o più lungo. "Where is love" si prende tutta l'altezza; la domanda sopra deve accontentarsi di due righe piccole. Le etichette a sinistra si comportano allo stesso modo.

Da qui deriva quanto segue:

- **La stessa domanda ha un aspetto diverso in un'altra partita.** Una domanda di sei parole compare grande e riempie lo schermo; una di trentacinque parole compare piccola su cinque righe, esattamente nello stesso riquadro. Entrambe devono venire bene.
- **Progetta ogni riquadro di testo due volte.** Riempilo una volta con un esempio molto corto e una volta con uno molto lungo, e verifica che la composizione regga in entrambi i casi. Come regola pratica: un'opzione di risposta va da una a circa otto parole, una domanda da cinque a quaranta, un nome di giocatore da due a venti caratteri.
- **Non contare su un numero fisso di righe.** Un titolo che sta "sempre su una riga" qui non esiste.
- **Non allineare otticamente il testo a qualcos'altro.** Il testo che deve allinearsi a un filetto o a una forma si sposterà non appena sarà più corto o più lungo. Usa riquadri abbastanza ampi e un allineamento (a sinistra, centrato, a destra) invece di posizioni esatte.
- **Dodici lingue.** Le parole composte tedesche sono lunghe, e l'ungherese non è più clemente. Un riquadro che in inglese sta stretto scende a una dimensione illeggibile in tedesco.
- **Gli emoji possono comparire dentro il testo.** I giocatori ne scelgono uno accanto al nome del team, e una domanda o un'opzione può contenerne uno: a volte un'opzione non è altro che un emoji. Vengono disegnati a colori e sono più alti delle lettere che li circondano.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Non: a che corpo.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### Il timer - obbligatorio, ed è un'animazione

**Every question screen has a timer**; the room has to see how much time is left.

**Il timer non è un numero che conta, ma un'animazione di cui il motore muove la testina di riproduzione.** Progetti una progressione da "pieno" a "vuoto": una barra che si svuota, un anello che si chiude, una clessidra, una linea che si accorcia. Il motore riproduce quell'animazione esattamente alla velocità che fa coincidere l'ultimo fotogramma con la fine della domanda.

Da qui deriva quanto segue:

- **La durata della domanda non è fissa.** Viene impostata per quiz: spesso da venti a trenta secondi, ma può essere più breve o più lunga. La tua animazione viene allungata o compressa per adattarsi.
- **Niente numeri né scatti al secondo.** Un timer che conta "20, 19, 18…" smette di essere vero non appena la durata cambia.
- **Gli ultimi secondi sono il momento più teso del gioco.** Aiuta se la progressione diventa più chiara o più incalzante verso la fine.
- **Leggibile dal fondo della sala**, con un colpo d'occhio.
- **Più timer sono ammessi.** Una barra in alto e un anello vicino alla domanda vengono pilotati entrambi, purché ciascuno si chiami `timer`.

Consegna il timer come una serie di fotogrammi chiave o come una descrizione della progressione: "la barra si svuota da destra a sinistra e passa dal verde al rosso" è sufficiente.

### Gli emoji volanti atterrano sopra ogni cosa

Ogni giocatore sceglie un emoji quando entra, e il gioco lancia quegli emoji attraverso lo schermo. They are drawn by the engine on a layer above the theme. **Qui non c'è niente da progettare per te** - ma c'è qualcosa attorno a cui progettare, perché non sono un fronzolo raro.

Compaiono in tre momenti:

- **Quando un giocatore risponde.** L'emoji di quel giocatore sale dal bordo inferiore in una posizione orizzontale casuale, descrive un arco e ricade fuori dall'inquadratura.
- **Quando un giocatore ne lancia uno.** I giocatori possono lanciare il loro emoji dal telefono; angolo e velocità vengono dallo scorrimento del dito, e parte dal centro in basso, ruotando.
- **Quando viene svelato un posto nel conto alla rovescia finale.** Una raffica degli emoji del giocatore nominato: venti per un posto qualsiasi, cinquanta per il terzo, settantacinque per il secondo e **centocinquanta per il vincitore.**

Che cosa significa questo per la progettazione:

- **Tieni il terzo inferiore delle schermate di classifica e del vincitore libero da qualsiasi cosa piccola o essenziale.** Durante il conto alla rovescia là sotto c'è davvero calca.
- **Dai per scontato che stoneranno con la tua palette.** Sono emoji a colori pieni provenienti da ogni angolo della tabella Unicode, e nessun tema li controlla. Un progetto che sta in piedi solo entro una gamma cromatica stretta sembrerà casuale per quei secondi.
- **I lanci vengono soppressi mentre è visibile un'immagine o un video**, quindi le schermate con allegato restano pulite.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Font

- **I font devono poter essere incorporati.** Serve il file `.ttf` o `.otf`, più una licenza che consenta l'incorporazione in un'applicazione. Un font concesso in licenza solo come webfont, o solo per la stampa, non può essere usato. Verificalo prima di progettare con quel font; correggerlo dopo costa caro.
- I font con ascendenti o discendenti insolitamente grandi si possono compensare, ma segnalalo se ne usi uno.

### Il colore come elenco

Il tema legge un elenco di colori da un file di configurazione, e i telefoni dei giocatori vengono stilizzati a partire dallo stesso elenco. Consegna la tua palette come **elenco con nomi**, non solo come colori nella grafica:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

Sullo schermo di gioco sono ammesse le sfumature: indicale come due valori esadecimali.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Se li ometti, ripiegano su valori predefiniti incorporati - bianco, grigio, rosso, nero e bianco - che raramente si abbinano a un progetto.

### Il logo QuizWitz

I progetti su misura comprendono il logo QuizWitz. Riservagli un posto in cui non sia d'intralcio al progetto.

---

## Che cosa consegnare

### File sorgente - meglio Illustrator

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                                                  | Use it for                                 |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. È esattamente il passaggio che salva la grafica dal dover essere ricostruita a mano.                                                            | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                                                   | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Se usi comunque Figma, consegna **ogni elemento separatamente in SVG**, con nomi di file corrispondenti ai nomi dei livelli, in modo che la struttura possa essere ricostruita a mano. | The concept phase, if you are faster in it |

Struttura del file:

- One artboard per screen, named after the frames above.
- Le parti riutilizzabili (pulsante, riga giocatore, opzione di risposta, timer) come **simboli** o componenti, non come copie sciolte.
- Nomi dei livelli in inglese, senza spazi: `question`, `option1` fino a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colori come campioni con nome e testo come stili con nome, invece che impostati su ogni singolo oggetto.

### Elenco dei materiali da consegnare

1. Il **file sorgente**, strutturato come sopra.
2. **Ogni frame come PNG**, 1920 × 1080 - un riferimento di come deve apparire. Per il frame 2, sia la versione con sia quella senza logo del cliente.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Ogni singolo elemento grafico come PNG trasparente a 2×**, in un'unica cartella, con il nome del file corrispondente al nome del livello.
5. **Il timer** come fotogrammi chiave o come descrizione scritta della progressione.
6. **I font** in `.ttf` o `.otf`, con prova della licenza.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Mezza pagina di note**: qual è l'idea, come devono comparire le opzioni, che cosa si muove e che cosa resta fermo. Non una motivazione progettuale di dieci pagine: chi costruisce il tema ha bisogno di sapere che cosa costruire. Le idee di movimento possono essere descritte o fornite come animatic di massima.

### Ordine di lavoro

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Appendice - nomi dei simboli

Per completezza, e per chi vuole sapere esattamente dove va a finire la propria grafica. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Usare questi nomi come nomi dei livelli fa risparmiare un passaggio di traduzione.

| Frame                                                      | Nome del simbolo                                                                                                                          | Parti obbligatorie                                                                                                                                                                                        |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Frame generale                   | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` facoltativo                                                                      | `placeholder` (l'area dei contenuti); riquadro di testo `title` facoltativo                                                                                                            |
| 1b. Selettore delle domande, domanda lunga | `MultiQuestionScreen`, `LongQuestionScreen`; entrambi facoltativi, ripiegano sul frame generale                                           | selettore: segnaposto `questions`, `timer`; domanda lunga: segnaposto `question`                                                                                          |
| 2. Schermata di connessione         | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` facoltativo, con un segnaposto `logo`                                    | `instructions.line1` fino a `line5`, `connectedPlayers`; segnaposto `qrCode` con etichetta di fotogramma `showQrCode` facoltativo                                                                         |
| 3. Schermata di attesa              | `PendingScreen`; `PendingScreenWithLogo` facoltativo                                                                                      | `header.text`                                                                                                                                                                                             |
| 4. Schermata della domanda          | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` fino a `option4`, etichette di fotogramma `showOptions` e `showFeedback`                                                                             |
| 5. Domanda con allegato             | `QuestionScreenAttachment`                                                                                                                | come sopra, più `attachment.placeholder`                                                                                                                                                                  |
| 5b. Allegato a tutto schermo               | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                             |
| 6. Schermata della risposta         | `AnswerPieScreen`; `AnswerPieScreenAttachment` facoltativo                                                                                | `option1` fino a `option4`, `answer.text`, `feedback.text`                                                                                                                                                |
| 6b. Risposta a domanda aperta              | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; varianti `…Attachment` facoltative                                                         | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                     |
| 7. Classifica                       | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` e `PlayerScoreNoImage` facoltativi                              | `header.text`, `players`, `feedback.text` (`playAgain.text` facoltativo); nella riga: `position`, `name`, `score`, `avatar` facoltativo                                |
| 8. Intro del round                  | uno o più simboli con un nome qualsiasi; il file di configurazione associa ciascuna delle sei categorie a un simbolo                      | -                                                                                                                                                                                                         |
| -                                                          | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                        |
| -                                                          | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | non serve grafica propria - costruiti a partire da quello che compare nei tuoi frame                                                                                                                      |
| -                                                          | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | visibili solo nell'app desktop, non in un quiz dal vivo. Non fanno parte del brief: vengono presi dal modello del tema e ristilizzati con il tuo sfondo e i tuoi pulsanti |

I simboli dell'intro del round del tema di serie si chiamano `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` e `RoundIntroTedCultHist`; arte e storia condividono l'ultimo. Il "Ted" in quei nomi è un residuo del personaggio del tema originale e non significa che in essi debba comparire un personaggio.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. L'elemento `timer` è un filmato con una linea temporale propria; il motore ne legge il numero di fotogrammi e muove la testina di riproduzione in proporzione al tempo trascorso, al massimo 24 volte al secondo.

### Che cosa prende il file di configurazione dal tuo progetto

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

---
id: theme-design-guide
title: Guida alla progettazione dei temi
---

# Guida alla progettazione dei temi

[Temi](/docs/advanced/theming) spiega come viene costruito un tema QuizWitz: in Adobe Animate, esportato come libreria CreateJS. Questa pagina riguarda il passaggio precedente: la **progettazione** del tema.

È scritta per un grafico e presuppone che la progettazione e la produzione in Animate siano svolte da persone diverse. Pochi grafici lavorano ancora in Adobe Animate, quindi di solito un grafico consegna la grafica e qualcun altro assembla il tema. Funziona bene, purché la grafica arrivi in una forma che chi costruisce il tema può usare. Questa pagina descrive quella forma e vale allo stesso tempo come elenco dei materiali da consegnare quando chiedi un preventivo a un grafico.

La pagina è divisa in quattro parti:

1. [Che cosa stai progettando](#what-you-are-designing) - le schermate che un tema copre.
2. [Gli otto frame](#eight-frames-and-an-element-sheet) e [il foglio degli elementi](#the-element-sheet), uno per uno, con screenshot.
3. [Regole di progettazione](#design-rules) - come deve essere costruito il file perché il motore possa usarlo.
4. [Che cosa consegnare](#what-to-hand-over) - file sorgente, materiali da consegnare e ordine di lavoro.

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

## Otto frame e un foglio degli elementi

Il gioco ha decine di stati di schermata distinti, ma la maggior parte sono varianti dello stesso impaginato. **Progetti otto frame e un foglio di elementi; il resto deriva da questi.** Non è una scorciatoia - è così che funziona il motore. Una schermata senza grafica propria ripiega su un frame generale.

Il foglio conta quanto i frame: anche una schermata di ripiego ha bisogno di arredi nella sua area dei contenuti - un pannello, una riga, un filetto.

| # | Frame                                                       | Copre anche                                                                     |
| - | ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 1 | [Frame generale](#frame-1---the-general-frame)              | Tredici stati di schermata senza grafica propria                                |
| 2 | [Schermata di connessione](#frame-2---the-connect-screen)   | Disegnala due volte: con un logo del cliente e senza            |
| 3 | [Schermata di attesa](#frame-3---the-waiting-screen)        | -                                                                               |
| 4 | [Schermata della domanda](#frame-4---the-question-screen)   | -                                                                               |
| 5 | [Domanda con allegato](#frame-5---question-with-attachment) | L'allegato a tutto schermo e gli allegati mostrati tra una domanda e l'altra    |
| 6 | [Schermata della risposta](#frame-6---the-answer-screen)    | La schermata della risposta per le domande aperte e per le domande con allegato |
| 7 | [Classifica e vincitore](#frame-7---standings-and-winner)   | La classifica tra un round e l'altro e il vincitore finale                      |
| 8 | [Intro del round](#frame-8---the-round-intro)               | Tutte e sei le categorie di round                                               |

:::note[Informazioni sugli screenshot]
Le schermate qui sotto provengono da un tema esistente. Mostrano **quali elementi compaiono su ogni schermata e quando**. Non sono un riferimento né di stile _né_ di impaginazione: dove questo tema mette la sua domanda, le sue opzioni e il suo timer è una sua scelta, e la tua può essere completamente diversa.
:::

### Frame 1 - il frame generale

**Che cosa contiene:** lo sfondo, un titolo di intestazione e sotto di esso un'area dei contenuti vuota. Non è una composizione finita, ma il frame dentro cui viene costruito il resto.

**Che cosa copre:** tredici stati di schermata - spiegazione del round, classifica, introduzione dei giocatori, varianti a scelta multipla, domande lunghe, avvisi sui Seats, impostazioni. Ognuno riempie l'area dei contenuti a modo suo con elementi del [foglio degli elementi](#the-element-sheet), quindi il frame deve poter contenere cose che non si somigliano affatto. Il selettore delle domande e la domanda lunga possono avere una composizione propria, se lo desideri; altrimenti usano questo frame.

Due momenti di gioco sullo stesso frame: un selettore delle domande e una scala dei punti.

![Il frame generale con un selettore delle domande a tre righe](/images/theme-design/frame1-general-multiquestion.png)

![Il frame generale con una scala dei punti a cinque livelli](/images/theme-design/frame1-general-strikeladder.png)

Guarda quanto poco hanno in comune. Il selettore mette le sue tre righe dentro un pannello con bordo; la scala non ha alcun pannello, solo righe separate da filetti sottili. Ciò che i due condividono è lo sfondo e la fascia di intestazione sopra di essi: tutto quello che sta sotto appartiene alla singola schermata e viene riempito dal gioco, non da te.

Quel pannello e quei filetti vengono dal [foglio degli elementi](#the-element-sheet), non da questo frame. Quello che questo frame deve fare è reggerli: progetta l'area dei contenuti come una zona vuota, neutra e ampia, che funzioni allo stesso modo con un pannello bordato, con un elenco spoglio e con una tabella di righe. Uno sfondo affollato al centro, o un'intestazione che funziona solo con un pannello infilato subito sotto, è il punto in cui questo si rompe.

### Frame 2 - la schermata di connessione

**Che cosa contiene:** tutto ciò di cui la sala ha bisogno per entrare.

- cinque righe di istruzioni
- un codice di accesso e un codice QR, entrambi generati dal motore - riserva un quadrato per il codice QR
- una riga con il numero di giocatori connessi
- un elenco di giocatori che arrivano alla spicciolata

**Disegnala due volte:** con un logo del cliente accanto al codice di accesso, e senza, quando è la grafica del tema a reggere la schermata.

![Schermata di connessione con un logo del cliente](/images/theme-design/frame2-connect.png)

![Schermata di connessione senza logo del cliente](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - la schermata di attesa

**Che cosa contiene:** quasi nulla - il logo del quiz, oppure la grafica del tema.

Ha in comune con la schermata di connessione solo lo sfondo, quindi progettala come una composizione a sé. Resta visibile mentre il quizmaster legge una domanda ad alta voce, e questo la tiene sullo schermo più a lungo di quasi ogni altra cosa nel gioco. Merita più attenzione di quanta ne riceva di solito una schermata vuota.

![Schermata di attesa](/images/theme-design/frame2-pending.png)

### Frame 4 - la schermata della domanda

**Che cosa contiene:** la domanda, un timer, quattro opzioni di risposta e una riga di feedback. È la schermata che la sala guarda più a lungo. Nota che un'opzione può essere composta solo da un emoji:

![Schermata della domanda con quattro opzioni testuali](/images/theme-design/frame3-question-options.png)

![Schermata della domanda con bandiere come opzioni di risposta](/images/theme-design/frame3-question-emoji.png)

Una domanda senza opzioni: i giocatori digitano la risposta sul telefono. La schermata è quasi vuota e il timer diventa l'elemento principale:

![Domanda aperta con solo la domanda e un timer grande](/images/theme-design/frame3-question-open.png)

Il momento in cui il tempo scade. Il fumetto di feedback compare sopra la schermata e il timer resta vuoto:

![Schermata della domanda nello stato di tempo scaduto](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - domanda con allegato

**Che cosa contiene:** le stesse parti del frame 4, disposte attorno a un'immagine o a un video. Può essere una composizione diversa. L'allegato viene ridimensionato per stare nel riquadro che disegni, quindi sia un'immagine orizzontale sia una verticale devono risultare accettabili al suo interno.

**Che cosa copre:** l'allegato a tutto schermo e gli allegati mostrati tra una domanda e l'altra.

Qui con le opzioni a sinistra e a destra dell'allegato:

![Schermata della domanda con un'immagine al centro](/images/theme-design/frame4-question-attachment.png)

Un allegato da solo, che riempie lo schermo:

![Allegato a tutto schermo](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - la schermata della risposta

**Che cosa contiene:** quale risposta era corretta, come si sono distribuite le risposte della sala tra le opzioni, e una riga di feedback.

**Che cosa copre:** la schermata della risposta per le domande aperte e per le domande con allegato.

La schermata attraversa tre momenti. Prima la distribuzione, senza ancora nulla di marcato:

![Schermata della risposta con la distribuzione](/images/theme-design/frame5-answer-mc-spread.png)

Poi l'opzione corretta viene spuntata e quelle sbagliate vengono barrate:

![Schermata della risposta con l'opzione corretta rivelata](/images/theme-design/frame5-answer-mc-reveal.png)

E se la domanda porta con sé una spiegazione, un fumetto scende sopra la grafica. Lasciagli spazio: atterra sopra qualunque cosa tu abbia progettato:

![Schermata della risposta con il fumetto della spiegazione](/images/theme-design/frame5-answer-mc-explanation.png)

Con un gruppo piccolo, lo stesso momento è un elenco di punteggi invece di un grafico:

![Schermata della risposta per un gruppo piccolo](/images/theme-design/frame5-answer-mc-small.png)

Per una domanda aperta, il grafico mostra quanti giocatori hanno indovinato:

![Schermata della risposta per una domanda aperta](/images/theme-design/frame5-answer-open.png)

### Frame 7 - classifica e vincitore

**Che cosa contiene:** un elenco di giocatori con posizione, avatar, nome e punteggio. Fornisci la **riga giocatore** come elemento separato e riutilizzabile: per impostazione predefinita viene ripetuta sei volte, fino a un massimo di dieci.

**Che cosa copre:** la classifica tra un round e l'altro e il vincitore finale.

La classifica dopo un round, con sei righe giocatore:

![Classifica con sei righe giocatore](/images/theme-design/frame6-roundoutro.png)

Il conto alla rovescia finale nomina un giocatore alla volta, dall'ultimo posto al primo: posto, punteggio e nome del team sotto i riflettori. È anche qui che gli [emoji volanti](#flying-emoji-land-on-top-of-everything) sono più fitti:

![Il conto alla rovescia del vincitore che nomina un giocatore](/images/theme-design/frame6-winner-countdown.png)

![La classifica finale](/images/theme-design/frame6-winner.png)

### Frame 8 - l'intro del round

**Che cosa contiene:** un breve annuncio per ogni categoria di round. Le categorie sono sei: scienza e tecnologia, natura, intrattenimento e musica, sport, arte, storia.

**Che cosa copre:** tutte e sei le categorie. Un solo progetto può servirne diverse.

Qui, una composizione con una variante per categoria:

![Intro del round per la categoria natura](/images/theme-design/frame7-roundintro-nature.png)

![Intro del round per la categoria scienza](/images/theme-design/frame7-roundintro-science.png)

**Un personaggio è facoltativo.** Il tema QuizWitz di serie ne ha uno che parla e reagisce; il [tema Emerald](/docs/advanced/emerald-theme) ne è privo, e rinunciarvi elimina il lavoro di animazione più costoso - sincronizzazione labiale, occhi, braccia.

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

- **I telefoni dei giocatori.** Un impaginato HTML fisso.
- **Le poche cose che il motore disegna da sé** - i filetti tra le righe della scala dei punti, la riga evidenziata nel selettore delle domande, il codice QR. I loro colori vengono da [Il colore come elenco](#colour-as-a-list).
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

In pratica:

- le quattro opzioni di risposta sono quattro livelli separati, non uno
- il timer è separato dallo sfondo
- un pulsante e la sua etichetta sono due elementi
- una riga giocatore è un unico gruppo che può essere duplicato

Che cosa si può unire: la grafica di sfondo puramente decorativa che funziona come una singola immagine fissa.

Questa è l'unica regola che fa davvero male quando non viene seguita: la grafica va poi smontata o ridisegnata, ed è esattamente il costo che questa organizzazione vuole evitare.

### Effetti che non sopravvivono

Il motore disegna su un canvas HTML5. Questi vanno **incorporati nell'immagine** oppure lasciati fuori:

| Effetto                                                                | Cosa fare invece            |
| ---------------------------------------------------------------------- | --------------------------- |
| Sfocatura dal vivo, ombre esterne e bagliore come filtri               | Forniscili come grafica     |
| Metodi di fusione (moltiplica, scolora, sovrapponi) | Convertili in colore piatto |
| Effetti di livello e livelli di regolazione                            | Incorporali nell'immagine   |
| Sfumature **dentro** il testo, o testo con un contorno per carattere   | Lasciali fuori              |
| Maschere che cambiano da un fotogramma all'altro                       | Lasciale fuori              |

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

**Che cosa deve sapere chi costruisce il tema di ogni riquadro di testo:** dove si trova, quanto è grande, come è allineato, quale colore e quale font. Non: a che corpo.

**Puoi sfruttarlo.** Un riquadro grande con un testo breve diventa da solo una composizione tipografica forte, e un riquadro che rendi di proposito stretto e alto costringe il testo in una colonna. Usa l'adattamento come strumento di progettazione; semplicemente non progettare contro di esso.

### Il timer - obbligatorio, ed è un'animazione

**Ogni schermata della domanda ha un timer**; la sala deve vedere quanto tempo resta.

**Il timer non è un numero che conta, ma un'animazione di cui il motore muove la testina di riproduzione.** Progetti una progressione da "pieno" a "vuoto": una barra che si svuota, un anello che si chiude, una clessidra, una linea che si accorcia. Il motore riproduce quell'animazione esattamente alla velocità che fa coincidere l'ultimo fotogramma con la fine della domanda.

Da qui deriva quanto segue:

- **La durata della domanda non è fissa.** Viene impostata per quiz: spesso da venti a trenta secondi, ma può essere più breve o più lunga. La tua animazione viene allungata o compressa per adattarsi.
- **Niente numeri né scatti al secondo.** Un timer che conta "20, 19, 18…" smette di essere vero non appena la durata cambia.
- **Gli ultimi secondi sono il momento più teso del gioco.** Aiuta se la progressione diventa più chiara o più incalzante verso la fine.
- **Leggibile dal fondo della sala**, con un colpo d'occhio.
- **Più timer sono ammessi.** Una barra in alto e un anello vicino alla domanda vengono pilotati entrambi, purché ciascuno si chiami `timer`.

Consegna il timer come una serie di fotogrammi chiave o come una descrizione della progressione: "la barra si svuota da destra a sinistra e passa dal verde al rosso" è sufficiente.

### Gli emoji volanti atterrano sopra ogni cosa

Ogni giocatore sceglie un emoji quando entra, e il gioco lancia quegli emoji attraverso lo schermo. Vengono disegnati dal motore su un livello sopra il tema. **Qui non c'è niente da progettare per te** - ma c'è qualcosa attorno a cui progettare, perché non sono un fronzolo raro.

Compaiono in tre momenti:

- **Quando un giocatore risponde.** L'emoji di quel giocatore sale dal bordo inferiore in una posizione orizzontale casuale, descrive un arco e ricade fuori dall'inquadratura.
- **Quando un giocatore ne lancia uno.** I giocatori possono lanciare il loro emoji dal telefono; angolo e velocità vengono dallo scorrimento del dito, e parte dal centro in basso, ruotando.
- **Quando viene svelato un posto nel conto alla rovescia finale.** Una raffica degli emoji del giocatore nominato: venti per un posto qualsiasi, cinquanta per il terzo, settantacinque per il secondo e **centocinquanta per il vincitore.**

Che cosa significa questo per la progettazione:

- **Tieni il terzo inferiore delle schermate di classifica e del vincitore libero da qualsiasi cosa piccola o essenziale.** Durante il conto alla rovescia là sotto c'è davvero calca.
- **Dai per scontato che stoneranno con la tua palette.** Sono emoji a colori pieni provenienti da ogni angolo della tabella Unicode, e nessun tema li controlla. Un progetto che sta in piedi solo entro una gamma cromatica stretta sembrerà casuale per quei secondi.
- **I lanci vengono soppressi mentre è visibile un'immagine o un video**, quindi le schermate con allegato restano pulite.
- **L'intero livello può essere disattivato per ogni partita**, quindi non costruire nemmeno una composizione che dipenda dalla loro presenza.

### Font

- **I font devono poter essere incorporati.** Serve il file `.ttf` o `.otf`, più una licenza che consenta l'incorporazione in un'applicazione. Un font concesso in licenza solo come webfont, o solo per la stampa, non può essere usato. Verificalo prima di progettare con quel font; correggerlo dopo costa caro.
- I font con ascendenti o discendenti insolitamente grandi si possono compensare, ma segnalalo se ne usi uno.

### Il colore come elenco

Il tema legge un elenco di colori da un file di configurazione, e i telefoni dei giocatori vengono stilizzati a partire dallo stesso elenco. Consegna la tua palette come **elenco con nomi**, non solo come colori nella grafica:

| Dove                               | Colori                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Schermo di gioco**               | Colore principale, colore di accento, sfondo, colore del pannello o del contenitore, sfondo del timer, colore del testo predefinito, colore del testo dell'intestazione, colore del testo della domanda, testo dei pulsanti, testo delle finestre di dialogo e delle spiegazioni, testo del nome e del punteggio del giocatore, il colore per il corretto, il colore per l'errato |
| **Le quattro opzioni di risposta** | Per ogni opzione: un colore di sfondo, un colore del bordo e un colore piatto per i telefoni e i grafici                                                                                                                                                                                                                                                          |
| **Telefoni dei giocatori**         | Sfondo, colore del testo, colore del contorno, colore del contorno delle opzioni, e il colore di sfondo e del testo del contenitore delle risposte                                                                                                                                                                                                                                |

Sullo schermo di gioco sono ammesse le sfumature: indicale come due valori esadecimali.

Alcuni colori sono l'_unico_ controllo sulle parti che il motore disegna da sé, quindi vale la pena deciderli invece di lasciare i valori predefiniti:

- il **separatore** - i filetti tra le righe dove non c'è un pannello, e sulla scala dei punti
- gli stati **attivo**, **inattivo** e **selezionato** di una riga nel selettore delle domande
- il testo delle **finestre di dialogo**
- il **fronte e il retro del codice QR**

Se li ometti, ripiegano su valori predefiniti incorporati - bianco, grigio, rosso, nero e bianco - che raramente si abbinano a un progetto.

### Il logo QuizWitz

I progetti su misura comprendono il logo QuizWitz. Riservagli un posto in cui non sia d'intralcio al progetto.

---

## Che cosa consegnare

### File sorgente - meglio Illustrator

Il tema viene costruito in Adobe Animate, e ciò che Animate può importare decide quanta parte del tuo lavoro sopravvive intatta al passaggio di consegne:

| Strumento                                        | Che cosa succede all'importazione                                                                                                                                                                                                                                                                                                         | Usalo per                                |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate lo importa direttamente e converte i tuoi livelli in livelli di Animate o in simboli separati, mantenendo i nomi dei livelli e lasciando i vettori modificabili. È esattamente il passaggio che salva la grafica dal dover essere ricostruita a mano.                                             | **Da preferire** per la consegna finale  |
| **Adobe Photoshop**                              | Si importa con i livelli intatti, come Illustrator, ma fornisce raster invece di vettori.                                                                                                                                                                                                                                 | Possibile                                |
| **Figma**                                        | Tutto passa per l'esportazione in SVG e PNG, ed è proprio lì che si perde la struttura dei livelli necessaria qui. Se usi comunque Figma, consegna **ogni elemento separatamente in SVG**, con nomi di file corrispondenti ai nomi dei livelli, in modo che la struttura possa essere ricostruita a mano. | La fase di concept, se lì sei più veloce |

Struttura del file:

- Una tavola da disegno per schermata, con il nome del frame corrispondente qui sopra.
- Le parti riutilizzabili (pulsante, riga giocatore, opzione di risposta, timer) come **simboli** o componenti, non come copie sciolte.
- Nomi dei livelli in inglese, senza spazi: `question`, `option1` fino a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colori come campioni con nome e testo come stili con nome, invece che impostati su ogni singolo oggetto.

### Elenco dei materiali da consegnare

1. Il **file sorgente**, strutturato come sopra.
2. **Ogni frame come PNG**, 1920 × 1080 - un riferimento di come deve apparire. Per il frame 2, sia la versione con sia quella senza logo del cliente.
3. **Il foglio degli elementi** come un'unica tavola da disegno: i [blocchi di contenuto e i controlli](#the-element-sheet).
4. **Ogni singolo elemento grafico come PNG trasparente a 2×**, in un'unica cartella, con il nome del file corrispondente al nome del livello.
5. **Il timer** come fotogrammi chiave o come descrizione scritta della progressione.
6. **I font** in `.ttf` o `.otf`, con prova della licenza.
7. **L'elenco dei colori** da [Il colore come elenco](#colour-as-a-list), come valori esadecimali.
8. **Mezza pagina di note**: qual è l'idea, come devono comparire le opzioni, che cosa si muove e che cosa resta fermo. Non una motivazione progettuale di dieci pagine: chi costruisce il tema ha bisogno di sapere che cosa costruire. Le idee di movimento possono essere descritte o fornite come animatic di massima.

### Ordine di lavoro

1. **Frame 4, la schermata della domanda, insieme al foglio degli elementi.** Falli approvare entrambi prima del resto. Insieme contengono il timer, le opzioni, il pannello e tutti i controlli, quindi fissano lo stile dell'intero tema.
2. **Frame da 1 a 3.** Seguono in modo naturale dai primi due.
3. **Frame da 6 a 8** vengono per ultimi.

---

## Appendice - nomi dei simboli

Per completezza, e per chi vuole sapere esattamente dove va a finire la propria grafica. **Non ti serve leggere questa parte per fare il lavoro**; gli otto frame e il foglio degli elementi qui sopra sono sufficienti. Usare questi nomi come nomi dei livelli fa risparmiare un passaggio di traduzione.

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

Ogni elemento seguito da `.text` è un riquadro di testo adattivo, come descritto in [Come si comporta il testo](#how-text-behaves): un rettangolo che il motore riempie da sé. L'elemento `timer` è un filmato con una linea temporale propria; il motore ne legge il numero di fotogrammi e muove la testina di riproduzione in proporzione al tempo trascorso, al massimo 24 volte al secondo.

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

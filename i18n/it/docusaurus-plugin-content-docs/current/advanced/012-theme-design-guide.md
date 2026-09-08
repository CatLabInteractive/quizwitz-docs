---
id: theme-design-guide
title: Guida alla progettazione dei temi
---

# Guida alla progettazione dei temi

[Temi](/docs/advanced/theming) spiega come viene costruito un tema QuizWitz: in Adobe Animate, esportato come libreria CreateJS. Questa pagina riguarda il passaggio precedente: la **progettazione** del tema.

È scritta per un grafico e presuppone che la progettazione e la produzione in Animate siano affidate a persone diverse. Ormai pochi grafici lavorano ancora in Adobe Animate, quindi è normale che un grafico consegni la grafica e che qualcun altro assembli il tema. Funziona bene, ma solo se la grafica viene consegnata in una forma che chi costruisce il tema possa davvero usare. Questa pagina descrive quella forma e vale allo stesso tempo come elenco dei materiali da consegnare quando chiedi un preventivo a un grafico.

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

## Sette frame e un foglio degli elementi

Il gioco ha decine di stati di schermata distinti, ma la maggior parte sono varianti dello stesso impaginato. **Tu progetti sette frame e un foglio di elementi; il resto ne deriva.** Non è una scorciatoia: è così che funziona il motore. Una schermata senza grafica propria ripiega su un frame generale.

Il foglio conta quanto i frame: una schermata che ripiega ha comunque bisogno di arredo nella sua area dei contenuti - un pannello, una riga, un filetto - e quell'arredo è una scelta progettuale, non qualcosa che si possa dedurre da uno sfondo.

| #     | Frame                        | Che cosa c'è sopra                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Che cosa ne deriva                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Frame generale**           | Lo sfondo, un titolo di intestazione e un'area dei contenuti vuota sotto. Non è una composizione finita: è il frame dentro cui viene costruito il resto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Tredici stati di schermata: spiegazione del round, classifica, presentazione dei giocatori, varianti a scelta multipla, domande lunghe, avvisi sui Seats, impostazioni. Ognuno riempie quell'area dei contenuti a modo suo con elementi del foglio, quindi deve reggere cose che non si somigliano affatto. Il selettore delle domande e la domanda lunga possono avere una composizione propria, se lo desideri; altrimenti usano questo frame. |
| **2** | **Connessione e attesa**     | Due schermate, non una. La **schermata di connessione** è ciò che la sala vede per partecipare: cinque righe di istruzioni, un codice di gioco, un codice QR, una riga con il numero di giocatori collegati e un elenco dei giocatori che arrivano alla spicciolata. Progettala **due volte**: con il logo del cliente e senza. Il codice di gioco e il codice QR vengono generati dal motore; riserva un quadrato per il codice QR. La **schermata di attesa** resta visibile mentre il quizmaster legge una domanda ad alta voce ed è quasi vuota: il logo del quiz stesso, oppure la grafica del tema, e nient'altro. Resta a schermo più a lungo di quasi ogni altra cosa nel gioco. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **3** | **Schermata della domanda**  | La domanda, un timer, quattro opzioni di risposta, una riga di feedback. La schermata che la sala guarda più a lungo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **4** | **Domanda con allegato**     | La stessa cosa, disposta attorno a un'immagine o a un video. Può essere una composizione diversa da quella del frame 3. L'allegato viene ridimensionato per stare nel riquadro che disegni, quindi sia un'immagine orizzontale sia una verticale devono risultare accettabili al suo interno.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Anche la variante con allegato a tutto schermo e gli allegati mostrati tra una domanda e l'altra.                                                                                                                                                                                                                                                                                                                                                                                                |
| **5** | **Schermata della risposta** | Quale risposta era corretta, come si sono distribuite le risposte della sala tra le opzioni, e una riga di feedback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Anche la schermata della risposta per le domande aperte e per le domande con allegato.                                                                                                                                                                                                                                                                                                                                                                                                           |
| **6** | **Classifica e vincitore**   | Un elenco di giocatori con posizione, avatar, nome e punteggio. Consegna la **riga giocatore** come elemento separato e riutilizzabile: viene ripetuta sei volte per impostazione predefinita, fino a dieci.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Sia la classifica tra un round e l'altro sia il vincitore finale.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **7** | **Intro del round**          | Un breve annuncio per categoria di round. Le categorie sono sei: scienza e tecnologia, natura, intrattenimento e musica, sport, arte, storia. Uno stesso progetto può servire più categorie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Tutte e sei le categorie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Il foglio degli elementi

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

### Che cosa è già deciso

- **I telefoni dei giocatori.** Un impaginato HTML fisso, stilizzato a partire dal tuo elenco di colori.
- **Il pugno di cose che il motore disegna da sé.** Una parte dell'arredo viene disegnata nel codice invece di essere presa dal tema: i filetti tra le righe della scala dei punti, la riga evidenziata nel selettore delle domande, il codice QR. Questi elementi prendono il colore dall'elenco in **Il colore come elenco** e da nient'altro, quindi quell'elenco è l'unico controllo che hai su di loro.
- **Quali schermate ripiegano sul frame generale, e come.**
- **In che modo le sei categorie vengono associate alla grafica dell'intro del round.** Questa associazione è un'impostazione di configurazione, quindi una stessa intro può essere riutilizzata per più categorie.
- **Tutti i tempi e tutte le durate delle animazioni.**
- **L'audio.** Un tema può avere musica ed effetti sonori propri, ma è un materiale da consegnare a parte e non fa parte del brief di progettazione.

### Il personaggio è facoltativo

Il tema di serie di QuizWitz ha un personaggio che parla e reagisce. Niente ne impone uno: il validatore dei temi si limita ad avvisare a proposito dell'elemento `ted`; senza di esso non fallisce. Il [tema Emerald](/docs/advanced/emerald-theme) viene fornito senza personaggio, e rinunciarvi elimina il lavoro di animazione più costoso: sincronizzazione labiale, occhi, braccia.

Senza personaggio, l'intro del round diventa un momento grafico, tipografico o illustrativo. Due approcci tengono il lavoro in proporzione: una composizione con una variante di colore o di icona per categoria, oppure un unico annuncio universale in cui cambia solo il nome del round. Sei intro davvero diverse sono molto lavoro per pochi secondi di schermo.

---

## Come si presentano questi frame nella pratica

Le schermate qui sotto provengono da un tema esistente. Sono qui per mostrare **quali elementi compaiono su ogni schermata e quando**. Non sono un riferimento né di stile _né_ di impaginazione: dove questo tema mette la sua domanda, le sue opzioni e il suo timer è una sua scelta, e la tua può essere completamente diversa. Leggile per ciò che deve esserci, non per dove va collocato. Tutte, e altre ancora, si possono provare nel [tester dei temi](https://client.quizwitz.com/test.html).

### Frame 1 - il frame generale

Due momenti di gioco sullo stesso frame: un selettore delle domande e una scala dei punti.

Guarda quanto poco hanno in comune. Il selettore mette le sue tre righe dentro un pannello con bordo; la scala non ha alcun pannello, solo righe separate da filetti sottili. Ciò che i due condividono è lo sfondo e la fascia di intestazione sopra di essi: tutto quello che sta sotto appartiene alla singola schermata e viene riempito dal gioco, non da te.

![Il frame generale con un selettore delle domande a tre righe](/images/theme-design/frame1-general-multiquestion.png)

![Il frame generale con una scala dei punti a cinque livelli](/images/theme-design/frame1-general-strikeladder.png)

Quel pannello e quei filetti sono scelte progettuali, e spettano a te: vengono dal **foglio degli elementi**, non da questo frame. Quello che questo frame deve fare è reggerli: progetta l'area dei contenuti come una zona vuota, neutra e ampia, che funzioni allo stesso modo con un pannello bordato, con un elenco spoglio e con una tabella di righe. Uno sfondo affollato al centro, o un'intestazione che funziona solo con un pannello infilato subito sotto, è il punto in cui questo si rompe.

### Frame 2 - connessione e attesa

Con un logo del cliente accanto al codice di gioco, e senza, dove è la grafica propria del tema a reggere la schermata:

![Schermata di connessione con un logo del cliente](/images/theme-design/frame2-connect.png)

![Schermata di connessione senza logo del cliente](/images/theme-design/frame2-connect-nologo.png)

La schermata di attesa è una composizione a sé e non una variante della schermata di connessione: le due condividono solo lo sfondo. Resta visibile mentre il quizmaster legge una domanda ad alta voce, ed è quasi vuota: il logo del quiz stesso, oppure la grafica del tema, e nient'altro. Resta a schermo più a lungo di quasi ogni altra cosa nel gioco, quindi merita più attenzione di quanta ne riceva di solito una schermata vuota.

![Schermata di attesa](/images/theme-design/frame2-pending.png)

### Frame 3 - la schermata della domanda

Quattro opzioni, la domanda sopra, il timer al centro. Nota che un'opzione può essere composta da un solo emoji.

![Schermata della domanda con quattro opzioni testuali](/images/theme-design/frame3-question-options.png)

![Schermata della domanda con bandiere come opzioni di risposta](/images/theme-design/frame3-question-emoji.png)

Una domanda senza opzioni: i giocatori digitano la risposta sul telefono. La schermata è quasi vuota e il timer diventa l'elemento principale:

![Domanda aperta con solo la domanda e un timer grande](/images/theme-design/frame3-question-open.png)

Il momento in cui il tempo scade. Il fumetto di feedback compare sopra la schermata e il timer resta vuoto:

![Schermata della domanda nello stato di tempo scaduto](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - allegato

Le stesse parti, ridisposte attorno a un'area per l'allegato, con le opzioni a sinistra e a destra:

![Schermata della domanda con un'immagine al centro](/images/theme-design/frame4-question-attachment.png)

Un allegato da solo, che riempie lo schermo:

![Allegato a tutto schermo](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - la schermata della risposta

Questa schermata attraversa tre momenti. Prima la distribuzione, senza ancora nulla di marcato:

![Schermata della risposta con la distribuzione](/images/theme-design/frame5-answer-mc-spread.png)

Poi l'opzione corretta viene spuntata e quelle sbagliate vengono barrate:

![Schermata della risposta con l'opzione corretta rivelata](/images/theme-design/frame5-answer-mc-reveal.png)

E se la domanda porta con sé una spiegazione, un fumetto scende sopra la grafica. Lasciagli spazio: atterra sopra qualunque cosa tu abbia progettato:

![Schermata della risposta con il fumetto della spiegazione](/images/theme-design/frame5-answer-mc-explanation.png)

Con un gruppo piccolo, lo stesso momento è un elenco di punteggi invece di un grafico:

![Schermata della risposta per un gruppo piccolo](/images/theme-design/frame5-answer-mc-small.png)

Per una domanda aperta, il grafico mostra quanti giocatori hanno indovinato:

![Schermata della risposta per una domanda aperta](/images/theme-design/frame5-answer-open.png)

### Frame 6 - classifica e vincitore

La classifica dopo un round. La riga giocatore è l'elemento che si ripete: posizione, avatar, nome, punteggio.

![Classifica con sei righe giocatore](/images/theme-design/frame6-roundoutro.png)

Il conto alla rovescia finale nomina un giocatore alla volta, dall'ultimo posto al primo: posto, punteggio e nome del team sotto i riflettori. È anche qui che gli emoji volanti sono più fitti; vedi la nota più avanti:

![Il conto alla rovescia del vincitore che nomina un giocatore](/images/theme-design/frame6-winner-countdown.png)

![La classifica finale](/images/theme-design/frame6-winner.png)

### Frame 7 - l'intro del round

Un solo progetto, eventualmente con una variante per categoria:

![Intro del round per la categoria natura](/images/theme-design/frame7-roundintro-nature.png)

![Intro del round per la categoria scienza](/images/theme-design/frame7-roundintro-science.png)

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

In pratica: le quattro opzioni di risposta sono quattro livelli separati, non uno. Il timer è separato dallo sfondo. Un pulsante e la sua etichetta sono due elementi. Una riga giocatore è un gruppo che si può duplicare.

Che cosa si può unire: la grafica di sfondo puramente decorativa che funziona come una singola immagine fissa.

Questa è l'unica regola che fa davvero male quando non viene seguita: la grafica va poi smontata o ridisegnata, ed è esattamente il costo che questa organizzazione vuole evitare.

### Effetti che non sopravvivono

Il motore disegna su un canvas HTML5. Questi vanno **incorporati nell'immagine** oppure lasciati fuori:

- Sfocatura, ombre esterne e bagliore dal vivo come filtri → forniscili come grafica
- Metodi di fusione (moltiplica, scolora, sovrapponi) → risolvili in colore piatto
- Effetti di livello e livelli di regolazione
- Sfumature **dentro** il testo, o testo con un contorno per carattere
- Maschere che cambiano da un fotogramma all'altro

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
- **Il riquadro è un massimo, non una promessa.** Tu ne progetti le proporzioni; il riempimento varia.
- **Dodici lingue.** Le parole composte tedesche sono lunghe, e l'ungherese non è più clemente. Un riquadro che in inglese sta stretto scende a una dimensione illeggibile in tedesco.
- **Gli emoji possono comparire dentro il testo.** I giocatori ne scelgono uno accanto al nome del team, e una domanda o un'opzione può contenerne uno: a volte un'opzione non è altro che un emoji. Vengono disegnati a colori e sono più alti delle lettere che li circondano.

Che cosa deve sapere chi costruisce a proposito di ogni riquadro di testo: dove si trova, quanto è grande, come è allineato, che colore e che font ha. Non: a che corpo.

Ne derivano due cose che puoi sfruttare: un riquadro grande con testo corto diventa da solo una composizione tipografica forte, e un riquadro che rendi volutamente stretto e alto costringe il testo in colonna. Puoi usare questo adattamento come strumento progettuale: semplicemente non devi progettare contro di esso.

### Il timer - obbligatorio, ed è un'animazione

**Ogni schermata della domanda ha un timer.** Non è facoltativo; la sala deve vedere quanto tempo resta. Entrambi i frame della domanda ne portano uno.

**Il timer non è un numero che conta, ma un'animazione di cui il motore muove la testina di riproduzione.** Progetti una progressione da "pieno" a "vuoto": una barra che si svuota, un anello che si chiude, una clessidra, una linea che si accorcia. Il motore riproduce quell'animazione esattamente alla velocità che fa coincidere l'ultimo fotogramma con la fine della domanda.

Da qui deriva quanto segue:

- **La durata della domanda non è fissa.** Viene impostata per quiz: spesso da venti a trenta secondi, ma può essere più breve o più lunga. La tua animazione viene allungata o compressa per adattarsi. Progetta una _progressione_, non un'animazione di un numero fisso di secondi.
- **Niente numeri né scatti al secondo.** Un timer che conta "20, 19, 18…" smette di essere vero non appena la durata cambia.
- **Gli ultimi secondi sono il momento più teso del gioco.** Aiuta se la progressione diventa più chiara o più incalzante verso la fine.
- **Leggibile dal fondo della sala**, con un colpo d'occhio.
- **Più timer sono ammessi.** Una barra in alto e un anello vicino alla domanda vengono pilotati entrambi, purché ciascuno si chiami `timer`.

Consegna il timer come una serie di fotogrammi chiave o come una descrizione della progressione: "la barra si svuota da destra a sinistra e passa dal verde al rosso" è sufficiente.

### Gli emoji volanti atterrano sopra ogni cosa

Ogni giocatore sceglie un emoji quando entra, e il gioco lancia quegli emoji attraverso lo schermo. Vengono disegnati dal motore su un livello sopra il tema, con i colori che l'emoji del giocatore si trova ad avere. **Qui non c'è niente da progettare per te** - ma c'è qualcosa attorno a cui progettare, perché non sono un fronzolo raro. Compaiono in tre momenti:

- **Quando un giocatore risponde.** L'emoji di quel giocatore sale dal bordo inferiore in una posizione orizzontale casuale, descrive un arco e ricade fuori dall'inquadratura.
- **Quando un giocatore ne lancia uno.** I giocatori possono lanciare il loro emoji dal telefono; angolo e velocità vengono dallo scorrimento del dito, e parte dal centro in basso, ruotando.
- **Quando viene svelato un posto nel conto alla rovescia finale.** Una raffica degli emoji del giocatore nominato: venti per un posto qualsiasi, cinquanta per il terzo, settantacinque per il secondo e **centocinquanta per il vincitore.**

Entrano sempre dal bordo inferiore, descrivono un arco sotto l'effetto della gravità e ricadono fuori. Che cosa significa questo per la progettazione:

- **Tieni il terzo inferiore delle schermate di classifica e del vincitore libero da qualsiasi cosa piccola o essenziale.** Durante il conto alla rovescia là sotto c'è davvero calca.
- **Dai per scontato che stoneranno con la tua palette.** Sono emoji a colori pieni provenienti da ogni angolo della tabella Unicode, e nessun tema li controlla. Un progetto che sta in piedi solo entro una gamma cromatica stretta sembrerà casuale per quei secondi.
- **I lanci vengono soppressi mentre è visibile un'immagine o un video**, quindi le schermate con allegato restano pulite.
- L'intero livello può essere disattivato partita per partita, quindi non costruire nemmeno una composizione che dipenda dalla loro presenza.

### Font

- **I font devono poter essere incorporati.** Serve il file `.ttf` o `.otf`, più una licenza che consenta l'incorporazione in un'applicazione. Un font concesso in licenza solo come webfont, o solo per la stampa, non può essere usato. Verificalo prima di progettare con quel font; correggerlo dopo costa caro.
- I font con ascendenti o discendenti insolitamente grandi si possono compensare, ma segnalalo se ne usi uno.

### Il colore come elenco

Il tema legge un elenco di colori da un file di configurazione, e i telefoni dei giocatori vengono stilizzati a partire dallo stesso elenco. Consegna la tua palette come **elenco con nomi**, non solo come colori nella grafica:

- **Schermo di gioco:** colore principale, colore d'accento, sfondo, colore del pannello o del contenitore, sfondo del timer, colore del testo predefinito, colore del testo di intestazione, colore del testo della domanda, testo dei pulsanti, testo delle finestre di dialogo e delle spiegazioni, testo del nome del giocatore e del punteggio, il colore del corretto, il colore dell'errato.
- **Le quattro opzioni di risposta:** ciascuna con un colore di sfondo e uno di bordo, più un colore pieno per opzione, per i telefoni e per i grafici.
- **Telefoni dei giocatori:** sfondo, colore del testo, colore del contorno, colore del contorno delle opzioni, e il colore di sfondo e del testo del contenitore della risposta.

Sullo schermo di gioco sono ammesse le sfumature: indicale come due valori esadecimali.

Qualche colore è l'_unica_ presa che hai sulle parti che il motore disegna da sé, quindi vale la pena deciderli invece di lasciarli al valore predefinito: il **separatore** (i filetti tra le righe dove non c'è un pannello, e quelli sulla scala dei punti), gli stati **attivo**, **inattivo** e **selezionato** di una riga nel selettore delle domande, il testo delle **finestre di dialogo**, e il **fronte e il retro del codice QR**. Se li ometti, ripiegano su valori predefiniti incorporati - bianco, grigio, rosso, nero e bianco - che raramente si abbinano a un progetto.

### Il logo QuizWitz

I progetti su misura comprendono il logo QuizWitz. Riservagli un posto in cui non sia d'intralcio al progetto.

---

## Che cosa consegnare

### File sorgente - meglio Illustrator

**Adobe Illustrator (`.ai`) è preferibile, e c'è un motivo concreto.** Il tema viene costruito in Adobe Animate, che importa direttamente i file di Illustrator e converte i tuoi livelli in livelli di Animate o in simboli separati, mantenendo i nomi dei livelli e lasciando i vettori modificabili. È esattamente il passaggio che salva la grafica dal dover essere ricostruita a mano.

Figma o Photoshop sono possibili, ma sappi quanto costa: con Figma tutto passa dall'esportazione in SVG e PNG, ed è proprio lì che si perde la struttura dei livelli necessaria qui. Se usi comunque Figma, consegna **ogni elemento separatamente in SVG**, con nomi di file corrispondenti ai nomi dei livelli, in modo che la struttura possa essere ricostruita a mano. Photoshop si importa in Animate con i suoi livelli intatti, come Illustrator, ma ti dà raster invece di vettoriale.

Se sei più veloce in Figma, usalo per la fase di concept e consegna la versione definitiva in Illustrator.

Struttura del file:

- Una tavola da disegno per schermata, ciascuna esattamente 1920 × 1080, con il nome dei frame qui sopra.
- Le parti riutilizzabili (pulsante, riga giocatore, opzione di risposta, timer) come **simboli** o componenti, non come copie sciolte.
- Nomi dei livelli in inglese, senza spazi: `question`, `option1` fino a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colori come campioni con nome e testo come stili con nome, invece che impostati su ogni singolo oggetto.

### Elenco dei materiali da consegnare

1. Il **file sorgente**, strutturato come sopra.
2. **Ogni frame come PNG**, 1920 × 1080 - un riferimento di come deve apparire. Per il frame 2, sia la versione con sia quella senza logo del cliente.
3. **Il foglio degli elementi** come una sola tavola da disegno: i blocchi di contenuto e i controlli elencati sopra.
4. **Ogni singolo elemento grafico come PNG trasparente a 2×**, in un'unica cartella, con il nome del file corrispondente al nome del livello.
5. **Il timer** come fotogrammi chiave o come descrizione scritta della progressione.
6. **I font** in `.ttf` o `.otf`, con prova della licenza.
7. **L'elenco dei colori** descritto sopra, in valori esadecimali.
8. **Mezza pagina di note**: qual è l'idea, come devono comparire le opzioni, che cosa si muove e che cosa resta fermo. Non una motivazione progettuale di dieci pagine: chi costruisce il tema ha bisogno di sapere che cosa costruire. Le idee di movimento possono essere descritte o fornite come animatic di massima.

### Ordine di lavoro

Comincia dal frame 3, la schermata della domanda, insieme al foglio degli elementi, e fai approvare entrambi prima del resto. Insieme portano il timer, le opzioni, il pannello e ogni controllo, quindi fissano lo stile dell'intero tema, e la schermata della domanda è quella che la sala guarda più a lungo. I frame 1 e 2 ne derivano naturalmente; i frame da 5 a 7 vengono per ultimi.

---

## Appendice - nomi dei simboli

Per completezza, e per chi vuole sapere esattamente dove va a finire la propria grafica. **Non hai bisogno di leggere questo per fare il lavoro**; i sette frame e il foglio degli elementi qui sopra bastano. Usare questi nomi come nomi dei livelli fa risparmiare un passaggio di traduzione.

| Frame                                                      | Nome del simbolo                                                                                                                          | Parti obbligatorie                                                                                                                                                                                        |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Frame generale                   | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` facoltativo                                                                      | `placeholder` (l'area dei contenuti); riquadro di testo `title` facoltativo                                                                                                            |
| 1b. Selettore delle domande, domanda lunga | `MultiQuestionScreen`, `LongQuestionScreen`; entrambi facoltativi, ripiegano sul frame generale                                           | selettore: segnaposto `questions`, `timer`; domanda lunga: segnaposto `question`                                                                                          |
| 2. Schermata di connessione         | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` facoltativo, con un segnaposto `logo`                                    | `instructions.line1` fino a `line5`, `connectedPlayers`; segnaposto `qrCode` con etichetta di fotogramma `showQrCode` facoltativo                                                                         |
| 2b. Schermata di attesa                    | `PendingScreen`; `PendingScreenWithLogo` facoltativo                                                                                      | `header.text`                                                                                                                                                                                             |
| 3. Schermata della domanda          | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` fino a `option4`, etichette di fotogramma `showOptions` e `showFeedback`                                                                             |
| 4. Domanda con allegato             | `QuestionScreenAttachment`                                                                                                                | come sopra, più `attachment.placeholder`                                                                                                                                                                  |
| 4b. Allegato a tutto schermo               | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                             |
| 5. Schermata della risposta         | `AnswerPieScreen`; `AnswerPieScreenAttachment` facoltativo                                                                                | `option1` fino a `option4`, `answer.text`, `feedback.text`                                                                                                                                                |
| 5b. Risposta a domanda aperta              | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; varianti `…Attachment` facoltative                                                         | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                     |
| 6. Classifica                       | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` e `PlayerScoreNoImage` facoltativi                              | `header.text`, `players`, `feedback.text` (`playAgain.text` facoltativo); nella riga: `position`, `name`, `score`, `avatar` facoltativo                                |
| 7. Intro del round                  | uno o più simboli con un nome qualsiasi; il file di configurazione associa ciascuna delle sei categorie a un simbolo                      | -                                                                                                                                                                                                         |
| -                                                          | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                        |
| -                                                          | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | non serve grafica propria - costruiti a partire da quello che compare nei tuoi frame                                                                                                                      |
| -                                                          | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | visibili solo nell'app desktop, non in un quiz dal vivo. Non fanno parte del brief: vengono presi dal modello del tema e ristilizzati con il tuo sfondo e i tuoi pulsanti |

I simboli dell'intro del round del tema di serie si chiamano `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` e `RoundIntroTedCultHist`; arte e storia condividono l'ultimo. Il "Ted" in quei nomi è un residuo del personaggio del tema originale e non significa che in essi debba comparire un personaggio.

Ogni elemento seguito da `.text` è un riquadro di testo adattato come descritto sopra: un rettangolo che il motore riempie da sé. L'elemento `timer` è un filmato con una linea temporale propria; il motore ne legge il numero di fotogrammi e muove la testina di riproduzione in proporzione al tempo trascorso, al massimo 24 volte al secondo.

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

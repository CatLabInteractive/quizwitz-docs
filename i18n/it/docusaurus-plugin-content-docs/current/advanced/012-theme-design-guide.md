---
id: theme-design-guide
title: Guida alla progettazione del tema
---

# Guida alla progettazione del tema

[Theming](/docs/advanced/theming) spiega come viene costruito un tema QuizWitz: in Adobe Animate, esportato come libreria CreateJS. Questa pagina copre il passo precedente — **progettando** il tema.

È scritto per un graphic designer, e suppone che il design e la produzione di Animate siano fatte da persone diverse. Pochi designer lavorano ancora in Adobe Animate, quindi un accordo comune è che un designer offre opere d'arte e qualcun altro assembla il tema. Questo funziona bene, ma solo se l'opera d'arte viene consegnata in una forma che la costruzione può effettivamente utilizzare. Questa pagina descrive quella forma.

:::tip
Se vuoi solo cambiare colori, caratteri e sfondi, non hai bisogno di nessuno di questo - personalizza invece il tema [Smeraldo](/docs/advanced/emerald-theme).
:::

---

## Cosa stai progettando

Un gioco di QuizWitz è giocato da un'intera stanza in una sola volta, e due schermi sono sempre coinvolti:

- **Lo schermo condiviso** — un proiettore o TV, 1920 × 1080. Domande, risposte, come le risposte della stanza sono state diffuse, la classifica. Questo è quello che progettate.
- **Telefono di ogni giocatore**, dove scrivono la loro risposta. Questa è una pagina web con un layout fisso; è stilata dai vostri colori e caratteri, non disposti da voi.

Un tema è la pelle visiva completa dello schermo condiviso: sfondo, tipografia, colore, il modo in cui viene presentata una domanda con quattro opzioni, come la classifica si sviluppa, come viene annunciato un round.

---

## Sette cornici

Il gioco ha circa venticinque stati di schermo distinti, ma la maggior parte sono varianti dello stesso layout. **Hai disegnato sette fotogrammi; il resto è derivato da loro.** Questa non è una scorciatoia — è come funziona il motore. Uno schermo senza opere d'arte propria cade di nuovo a una cornice generale.

| #     | Frame                              | Che cosa è su di esso                                                                                                                                                                                                              | Che cosa ne deriva                                                                                                                                                                                   |
| ----- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Quadro generale**                | Lo sfondo, un titolo di intestazione e un'area di contenuto vuota sotto di esso. Il modello visivo per l'intero tema.                                                                              | Tredici stati dello schermo: spiegazione rotonda, posizione, introduzione del giocatore, varianti a scelta multipla, domande lunghe, avvisi sul posto, impostazioni. |
| **2** | **Connetti schermo**               | Quello che la stanza vede unirsi: cinque righe di istruzioni, spazio per un codice unito o codice QR, e un elenco di giocatori ingannare in.                                                       | Anche la schermata di attesa mostrata mentre il quizmaster legge la domanda ad alta voce.                                                                                            |
| **3** | **Schermata delle interrogazioni** | La domanda, un timer, quattro opzioni di risposta, una linea di feedback. Lo schermo della stanza guarda più a lungo.                                                                              | —                                                                                                                                                                                                    |
| **4** | **Domanda con i media**            | Lo stesso, organizzato intorno a un'immagine o video. Può essere una composizione diversa dal telaio 3.                                                                                            | Anche la variante multimediale a schermo intero e i media mostrati tra le domande.                                                                                                   |
| **5** | **Rispondi a schermo**             | Quale risposta era corretta, come le risposte della stanza sono state distribuite tra le opzioni, e una linea di feedback.                                                                                         | Anche lo schermo di risposta per le domande aperte e per le domande con i media.                                                                                                     |
| **6** | **Classifica e vincitore**         | Un elenco di giocatori con nome, punteggio e posizione. Fornisci la **riga del giocatore** come elemento separato e riutilizzabile — viene ripetuto sei o dieci volte.                             | Sia la classifica tra i turni e il vincitore finale.                                                                                                                                 |
| **7** | **Intro tondo**                    | Un breve annuncio per categoria round. Ci sono sei categorie: scienza & tecnologia, natura, intrattenimento & musica, sport, arte, storia. | Tutte le sei categorie.                                                                                                                                                              |

### Cosa è deciso per te

- \*\*I controlli individuali. \* I pulsanti nei loro quattro stati, i simboli corretti e sbagliati, la barra di scorrimento, le caselle di controllo e le selezioni sono derivati da ciò che appare nei tuoi sette fotogrammi. Assicurati che un pulsante appaia da qualche parte, quindi c'è uno stile da cui prenderli.
- **I telefoni dei giocatori.** Un layout HTML fisso, stilizzato dalla tua lista di colori e caratteri.
- **Quali schermi rientrano nella cornice generale e come.**
- **Come le sei categorie mappano sulla tavola rotonda dell'arte.**
- **Tutti i tempi e la durata dell'animazione.**

### Un carattere è opzionale

Il tema QuizWitz stock ha un carattere che parla e reagisce. Niente richiede uno: il validatore del tema avverte solo sull'elemento `ted`; non fallisce senza di esso. Il [tema Smeraldo](/docs/advanced/emerald-theme) spedisce senza un personaggio, e cadere rimuove il lavoro di animazione più costoso — sincronia labbra, occhi, braccia.

Senza un personaggio, l'intro rotondo diventa un momento grafico, tipografico o illustrativo. Due approcci mantengono il lavoro in proporzione: una composizione con una variante di colore o icona per categoria, o un unico annuncio universale con solo il nome rotondo che cambia. Sei intros genuinamente diversi è un sacco di lavoro per alcuni secondi di tempo dello schermo.

---

## Come appaiono queste cornici nella pratica

Gli schermi qui sotto provengono da un tema esistente. Sono qui per mostrare **cosa succede su ogni schermo**; non sono un riferimento di stile.

### Frame 1 — Quadro generale

Due momenti di gioco molto diversi sullo stesso modello: un selettore di domande e una scala di punti. Mostra quanto lavoro fa per te, e perché la sua area di contenuto deve essere spaziosa e neutrale.

![Il quadro generale con un selettore di domande a tre righe](/images/theme-design/frame1-general-multiquestion.png)

![La cornice generale con una scala di cinque punti livello](/images/theme-design/frame1-general-strikeladder.png)

### Telaio 2 — Collegare e attendere

Con un logo client accanto al codice join e senza uno, dove l'opera d'arte del tema porta lo schermo:

![Connetti lo schermo con un logo client](/images/theme-design/frame2-connect.png)

![Connetti lo schermo senza un logo client](/images/theme-design/frame2-connect-nologo.png)

La schermata di attesa che segue, visualizzata mentre il quizmaster legge la domanda ad alta voce:

![Schermata in attesa](/images/theme-design/frame2-pending.png)

### Frame 3 — schermata delle domande

Quattro opzioni, la domanda sopra, il timer nel mezzo. Si noti che un'opzione può consistere di nient'altro che di emoji.

![Schermata della domanda con quattro opzioni di testo](/images/theme-design/frame3-question-options.png)

![Schermata delle domande con bandiere come opzioni di risposta](/images/theme-design/frame3-question-emoji.png)

Una domanda senza opzioni — i giocatori scrivono la loro risposta sul loro telefono. Lo schermo è quasi vuoto e il timer diventa l'elemento principale:

![Domanda aperta con solo la domanda e un grande timer](/images/theme-design/frame3-question-open.png)

Il momento si esaurisce. Il pallone di feedback appare sullo schermo e il timer è vuoto:

![Schermata delle domande che mostra lo stato del time'sup](/images/theme-design/frame3-question-timeout.png)

### Riquadro 4 — supporti

Le stesse parti, riorganizzate intorno a un'area media, con le opzioni a sinistra e a destra:

![Schermata delle domande con un'immagine al centro](/images/theme-design/frame4-question-attachment.png)

Media da soli, riempiendo lo schermo:

![Full-screen media](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 — lo schermo di risposta

Questo schermo passa attraverso tre momenti. Prima la diffusione, con niente ancora segnato:

![Rispondi alla schermata che mostra lo spread](/images/theme-design/frame5-answer-mc-spread.png)

Quindi l'opzione corretta è spuntata e quelli sbagliati incrociati:

![Rispondi alla schermata con l'opzione corretta rivelata](/images/theme-design/frame5-answer-mc-reveal.png)

E se la domanda porta una spiegazione, un palloncino cade sopra l'opera d'arte. Lascia spazio per esso — atterra in cima a quello che hai progettato:

![Rispondi alla schermata con la spiegazione palloncino](/images/theme-design/frame5-answer-mc-explanation.png)

Con un piccolo gruppo, lo stesso momento è una lista di punteggi piuttosto che un grafico:

![Rispondi alla schermata per un piccolo gruppo](/images/theme-design/frame5-answer-mc-small.png)

Per una domanda aperta, il grafico mostra quanti giocatori hanno ottenuto giusto:

![Rispondi alla schermata per una domanda aperta](/images/theme-design/frame5-answer-open.png)

### Frame 6 — Classifica e vincitore

La classifica dopo un turno. La riga del giocatore è l'elemento che ripete: posizione, avatar, nome, punteggio.

![Classifiche con sei righe di giocatore](/images/theme-design/frame6-roundoutro.png)

Il conto alla rovescia finale nomina un giocatore alla volta, dall'ultimo posto al primo posto: il posto, il punteggio e il nome della squadra sotto il riflettore:

![Il conto alla rovescia del vincitore nomina un giocatore](/images/theme-design/frame6-winner-countdown.png)

![La classifica finale](/images/theme-design/frame6-winner.png)

### Cornice 7 — l’introduzione rotonda

Un disegno, opzionalmente con una variante per categoria:

![Intro tondo per la categoria naturale](/images/theme-design/frame7-roundintro-nature.png)

![Intro tondo per la categoria scientifica](/images/theme-design/frame7-roundintro-science.png)

---

## Norme di progettazione

Nessuno di questi limita il vostro disegno visivo. Si tratta di come viene costruito il file.

### Formato

- **1920 × 1080 pixel**, esattamente. Una cornice per schermo.
- Lavora **nel vettore** dove puoi. Dove si utilizza raster (foto, texture): almeno 2× dimensioni di visualizzazione.
- Il gioco viene eseguito a **24 frame al secondo**. Rilevante se si forniscono idee di movimento.
- Mantenere un **5% di margine** ai bordi senza informazioni essenziali. Colture di proiettori.

### Struttura a strati — la regola che conta di più

**Tutto ciò che può spostare, apparire o cambiare il valore si trova sul proprio livello denominato.** Niente unito, niente appiattito.

In pratica: le quattro opzioni di risposta sono quattro strati separati, non uno. Il timer è separato dallo sfondo. Un pulsante e la sua etichetta sono due elementi. Una riga del giocatore è un gruppo che può essere duplicato.

Cosa può essere fuso: arte di sfondo puramente decorativa che funziona come una singola immagine ferma.

Questa è la sola regola che fa davvero male quando non è seguita — l'opera deve poi essere strappata o ridisegnata, che è esattamente il costo che questo accordo è destinato ad evitare.

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

Tre righe, tre caselle identiche — e tre dimensioni dei caratteri completamente diverse, semplicemente perché il testo è più corto o più lungo. "Dove è l'amore" ottiene l'altezza piena; la domanda sopra deve fare a che fare con due piccole linee. Le etichette a sinistra si comportano allo stesso modo.

Ciò che ne consegue:

- \*\*La stessa domanda sembra diversa in un'altra partita. \* Una domanda di sei parole appare grande e schermo-riempimento; un trentacinque parola uno appare piccolo su cinque righe, esattamente nella stessa scatola. Entrambi devono guardare a destra.
- \*\*Progettare ogni casella di testo due volte. \* Riempirlo una volta con un campione molto breve e una volta con uno molto lungo, e controllare che la composizione tiene in entrambi. Come regola generale, un'opzione di risposta viene eseguita da una a circa otto parole, una domanda da cinque a quaranta, un nome di giocatore da due a venti personaggi.
- **Non contare su un numero fisso di linee.** Un titolo che è "sempre su una riga" non esiste qui.
- \*\*Non allineare otticamente il testo con nient'altro. \* Testo che deve allinearsi con una regola o una forma deriva non appena è più breve o più lungo. Usa scatole abbastanza spaziose e un allineamento (sinistra, centrata, destra) invece di posizioni esatte.
- **La scatola è un massimo, non una promessa.** Si progetta le sue proporzioni; il riempimento varia.
- **Undici lingue.** I composti tedeschi sono lunghi e l'ungherese non è più gentile. Una scatola che è stretta in inglese scende a una dimensione illeggibilmente piccola in tedesco.
- \*\*Le emoji possono apparire all'interno del testo. \* I giocatori scelgono uno accanto al loro nome di squadra, e una domanda o un'opzione può contenere uno — a volte un'opzione non è altro che un emoji. Essi sono disegnati a colori e sono più alti delle lettere che li circondano.

Che cosa la build ha bisogno di sapere su ogni casella di testo: dove è, quanto è grande, come è allineato, quale colore e quale carattere. Nota: a quale punto dimensione.

Seguono due cose che puoi usare: una grande scatola con testo corto diventa di per sé una forte composizione tipografica. e una scatola che intenzionalmente fa stretto e alto forza il testo in una colonna. È possibile utilizzare il montaggio come dispositivo di progettazione — basta non progettare contro di esso.

### Il timer — richiesto, e è un'animazione

**Ogni schermata delle domande ha un timer.** Non è opzionale; la stanza deve vedere quanto tempo è rimasto. Entrambi i telai interrogativi ne portano uno.

\*\*Il timer non è un numero di conteggio, ma un'animazione la cui testa di gioco si muove. \* Si progetta una progressione da "pieno" a "vuoto" — una barra drenante, un anello di chiusura, una clessidra, una linea di restringimento. Il motore gioca quella animazione esattamente alla velocità che rende l'ultimo telaio coincide con la fine della domanda.

Cosa segue:

- **La durata della domanda non è fissa.** Viene impostata per ogni quiz — spesso da venti a trenta secondi, ma può essere più breve o più lunga. La tua animazione è allungata o compresso per adattarsi. Progetta una _progressione_, non un'animazione di un determinato numero di secondi.
- **Nessun numero o ticket al secondo.** Un timer che conta "20, 19, 18…" smette di essere vero non appena la durata cambia.
- **Gli ultimi secondi sono il momento più lungo del gioco.** Aiuta se la progressione diventa più chiara o più urgente verso la fine.
- **Legible from the back of the room**, at a glance.
- **Sono ammessi più temporizzatori.** Una barra in alto e un anello vicino alla domanda sono entrambi guidati, purché ciascuno sia chiamato `timer`.

Fornire il timer come una serie di fotogrammi chiave o come una descrizione della progressione — "la barra drena destra a sinistra e si sposta da verde a rosso" è sufficiente.

### Caratteri

- **I caratteri devono essere incorporabili.** Il file `.ttf` o `.otf` è necessario, oltre a una licenza che permetta di incorporare in un'applicazione. Un carattere con licenza solo come webfont, o solo per la stampa, non può essere utilizzato. Controllare questo prima di progettare con esso; si tratta di una correzione costosa in seguito.
- Caratteri con ascendenti o discendenti di grandi dimensioni insolitamente possono essere compensati, ma flag se ne usi uno.

### Colore come lista

Il tema legge una lista di colori da un file di configurazione. Fornisci la tua tavolozza come **lista nominata**, non solo come colori nell'opera d'arte:

colore principale, colore accento, sfondo, colore del testo predefinito, colore del testo dell'intestazione, colore del testo della domanda, testo del pulsante, i quattro colori di risposta (ciascuno con uno sfondo e un colore di bordo), il colore per correggere, il colore per errore.

I gradienti sono ammessi: darli come due valori esagonali.

### Il logo QuizWitz

I disegni personalizzati includono il logo QuizWitz. Riserva un posto per esso dove non ottiene nel modo del design.

---

## Cosa consegnare

### File sorgente — Illustrator preferito

\*\*Adobe Illustrator (`.ai`) è preferito, e c'è una ragione concreta. \* Il tema è costruito in Adobe Animate, che importa direttamente i file Illustrator e converte i tuoi livelli in livelli Animati o simboli separati, mantenere i nomi dei livelli e lasciare i vettori modificabili. Questo è esattamente il passo che salva l'opera d'arte da essere ricostruita a mano.

Figma o Photoshop è possibile, ma conoscere il costo: con Figma tutto passa attraverso SVG ed esportazione PNG, ed è proprio qui che si perde la struttura dello strato necessaria. Se usi Figma, fornisci **ogni elemento separatamente come SVG**, con nomi di file corrispondenti ai nomi dei livelli, in modo che la struttura possa essere ricostruita a mano. Photoshop importa in Animate con i suoi strati intatti, come Illustrator, ma ti dà raster invece di vettore.

Se siete più veloci a Figma, usatelo per la fase concettuale e consegnate la versione finale in Illustrator.

Struttura dei file:

- Una scheda per schermo, ciascuna esattamente 1920 × 1080, denominata dopo i fotogrammi precedenti.
- Parti riutilizzabili (pulsante, riga del giocatore, opzione di risposta, timer) come **simboli** o componenti, non come copie sciolte.
- Nomi dei livelli in inglese, senza spazi: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colori come swatches e testo chiamati come stili chiamati, piuttosto che impostare su ogni oggetto singolarmente.

### Esportazioni

- Ogni fotogramma come PNG, 1920 × 1080 — come riferimento per come dovrebbe guardare.
- Ogni elemento grafico separato come **PNG trasparente a 2×**, in una cartella, nome file corrispondente al nome del livello.
- Caratteri come `.ttf` o `.otf`, con prova di licenza.

### Mezza pagina di note

Una breve nota scritta: che cos'è l'idea, come dovrebbero apparire le opzioni, cosa si muove e cosa rimane ancora. Non una logica di progettazione di dieci pagine — chi costruisce il tema ha bisogno di sapere cosa costruire.

Le idee di movimento possono essere descritte o fornite come animatiche grezze.

---

## Appendice — nomi dei simboli

Per completezza, e per chiunque voglia sapere esattamente dove finisce la propria opera. **Non è necessario leggerlo per fare il lavoro**; i sette fotogrammi sopra sono sufficienti. Usando questi nomi come nomi di livelli si salva una fase di traduzione.

| Frame                                             | Nome del simbolo                                                                                                                                                                              | Parti richieste                                                                                                      |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 1. Frame generale          | `GeneralPurposeScreen`, `GeneralPurposeScreenWithHeader`                                                                                                                                      | `header.text`, area del contenuto                                                                                    |
| 2. Connetti schermo        | `PresentationConnectScreen`                                                                                                                                                                   | `instructions.line1` a `line5`                                                                                       |
| 2b. Schermata di attesa           | `PendingScreen`                                                                                                                                                                               | `header.text`                                                                                                        |
| 3. Schermata della domanda | `QuestionScreen`                                                                                                                                                                              | `question.text`, `timer`, `feedback.text`, `option1` a `option4`, etichette di quadri `showOptions` e `showFeedback` |
| 4. Domanda con i media     | `QuestionScreenAttachment`                                                                                                                                                                    | come sopra, più `attachment.placeholder`                                                                             |
| 4b. Supporti a schermo intero     | `AttachmentScreen`                                                                                                                                                                            | `placeholder`                                                                                                        |
| 5. Rispondi a schermo      | `AnswerPieScreen`                                                                                                                                                                             | `option1` a `option4`, `answer.text`, `feedback.text`                                                                |
| 5b. Apri risposta domanda         | `AnswerScreen`, `AnswerOpenQuestionPieScreen`                                                                                                                                                 | `answer.text`, `feedback.text`, `players`, `piechart`                                                                |
| 6. Classifiche             | `WinnerScreen` + `PlayerScore`                                                                                                                                                                | `header.text`, `players`, `feedback.text` (`playagain.text` opzionale)                            |
| 7. Intro rotondo           | `RoundIntroTedMusic`, `RoundIntroTedSport`, `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedCultHist`                                                                    | —                                                                                                                    |
| —                                                 | `LoadingScreen`                                                                                                                                                                               | `text`, `progress`                                                                                                   |
| —                                                 | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `SymbolCorrect`, `SymbolWrong`, `SettingsScreenScrollarea`, `AlertScreen`, `ActivityScreen`, `MenuScreen`, `SettingsScreen`, `PackListItem` | nessuna opera d'arte del proprio bisogno — costruita dalle tue cornici e dalla cornice generale                      |

I nomi intro rotondi contengono "Ted" per motivi storici. Questo è un rimanente dal tema originale e non significa che un personaggio deve apparire in loro.

Ogni elemento con `.text` dopo che è una casella di testo montata come descritto sopra: un rettangolo che il motore si riempie. L'elemento `timer` è una clip di film con la propria timeline; il motore legge il suo numero di fotogrammi e muove la testata di gioco in proporzione al tempo trascorso.

### Ciò che il file di configurazione prende dal tuo design

```json
{
  "fonts": { "default": "<body font>", "header": "<heading font>" },
  "colori": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "default": "#…", "header": "#…", "question": "#…",
    "pulsanti": "#…", "dialog": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "booleanResultColors": { "correct": "#…", "sbagliato": "#…" },
  "overlay": "light <unk> dark"
}
```

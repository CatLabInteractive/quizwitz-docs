---
id: large-venues
title: Grandi location, luci e audio
---

# 🏟️ Grandi location, luci e audio

QuizWitz Live si adatta dal quiz al pub fino a grandi location con centinaia di giocatori. Questa guida spiega cosa cambia quando passi a un palco più grande: la rete, l'audio e la sincronizzazione delle luci (o di altra attrezzatura da spettacolo) con il gioco.

> 🧭 Se sei nuovo in QuizWitz Live, inizia con la [**guida introduttiva per il quizmaster**](../quizmaster/002-startup.md).

---

## 🌐 Una connessione internet stabile

Ogni parte di una partita dal vivo comunica con le altre in tempo reale attraverso i nostri server: lo schermo di gioco, la Quizmaster App, l'app giuria, gli strumenti regie e il dispositivo di ogni giocatore. Una connessione internet stabile è il requisito più importante per un grande evento.

- Collega il computer dello schermo di gioco e gli eventuali computer di regie con un **cavo di rete**. Per questi non affidarti al wifi della location o a un hotspot mobile.
- Assicurati che i giocatori abbiano una buona copertura wifi o mobile (4G/5G) in tutta la sala. Una sala piena può sovraccaricare una piccola rete wifi.
- Clicca su **Carica quiz** con largo anticipo. QuizWitz precarica tutte le immagini, l'audio e i video, così gli allegati vengono riprodotti senza intoppi quando il quiz è in corso.

---

## 🔊 Audio: tutto passa dallo schermo di gioco

Tutto l'audio viene riprodotto dallo schermo di gioco: la musica e gli effetti sonori di QuizWitz e ogni allegato audio o video che aggiungi a domande, round o quiz (musica della schermata di connessione, musica di chiusura del round e così via). Tutto è sincronizzato con quello che succede sullo schermo.

Quindi devi solo collegare l'**uscita audio del computer dello schermo di gioco** al tuo mixer o impianto audio. Non ci sono effetti sonori separati da lanciare a mano.

- Usa il cursore del volume nella barra di controllo del gioco per regolare il livello o per disattivare tutti i suoni del quiz.
- Per riprodurre solo l'audio che hai caricato tu, aggiungi `music=0` al link del gioco (vedi [parametri avanzati](../advanced/020-advanced-parameters.md)). `connectMusic=0` disattiva solo la musica della schermata di connessione.

---

## 💡 Luci: il controller MIDI

Il controller MIDI su [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) trasforma gli eventi del gioco in note MIDI. Associa queste note ai cue del tuo software o della tua console luci, e le luci seguiranno il gioco automaticamente.

Noi lo usiamo con [QLC+](https://www.qlcplus.org/) (software gratuito per le luci che pilota apparecchi DMX), ma invia MIDI standard, quindi funziona con la maggior parte delle console e dei software luci che accettano un ingresso MIDI, oltre che con mixer audio, mixer video e altra attrezzatura da spettacolo.

### Connessione

1. Avvia la tua partita QuizWitz Live. La Quizmaster App mostra il **codice regie** accanto al codice quizmaster e al codice della giuria.
2. Sul computer collegato al tuo impianto luci, apri [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) in **Google Chrome**. Il controller usa Web MIDI, che altri browser potrebbero non supportare.
3. Consenti l'accesso MIDI quando Chrome lo chiede.
4. Inserisci il codice regie e clicca su **Connect**.
5. Seleziona il dispositivo MIDI di **Output** e il canale (per impostazione predefinita il canale 1).

Se il software luci gira sullo stesso computer, usa una porta MIDI virtuale: l'**IAC Driver** su macOS, oppure uno strumento come **loopMIDI** su Windows.

> ⚠️ Tieni aperta la scheda del controller per tutta la partita. Se la chiudi, le note MIDI si fermano.

### Come funziona

Ogni evento del gioco ha un proprio numero di nota MIDI fisso. Quando l'evento si verifica, il controller suona quella nota sul canale di uscita. Il numero della nota è indicato su ogni pulsante del controller.

- **Premi un pulsante** per inviarne la nota a mano. Usalo per configurare e provare la tua mappatura prima dello spettacolo.
- Un pulsante diventa **rosso** per un attimo quando il gioco lo attiva.
- La maggior parte degli eventi viene inviata una sola volta di seguito: se lo stesso evento si verifica due volte di fila, il secondo viene saltato. Risposta corretta e risposta sbagliata vengono inviate ogni volta, così puoi far lampeggiare le luci per ogni risposta rivelata.
- **Feedback** (facoltativo): seleziona un ingresso MIDI e un canale (per impostazione predefinita il canale 2). Le note che il tuo software luci rimanda indietro accendono in verde i pulsanti corrispondenti, così vedi quali cue sono attivi.

### Note MIDI

| Nota | Evento |
|---|---|
| 1 | Introduzione del gioco |
| 2 | Introduzione del gioco: stop |
| 3 | Introduzione del round |
| 4 | Introduzione del round: stop |
| 5 | Introduzione del Round lampo |
| 6 | Introduzione del Round lampo: stop |
| 10 | Inizio della domanda |
| 11 | Domanda in corso |
| 12 | Il timer della domanda parte |
| 13 | Il timer della domanda si ferma |
| 14 | Domanda conclusa |
| 20 | Timer della domanda al 25% |
| 21 | Timer della domanda al 33% |
| 22 | Timer della domanda al 50% |
| 23 | Timer della domanda al 66% |
| 24 | Timer della domanda al 75% |
| 30 | Allegato mostrato |
| 31 | Allegato nascosto |
| 40 | Prima del risultato della domanda |
| 41 | Risultato della domanda |
| 42 | Risposta corretta rivelata |
| 43 | Risposta sbagliata rivelata |
| 44 | Risultato della domanda: stop |
| 45 | Tutti hanno risposto correttamente |
| 46 | Nessuno ha risposto correttamente |
| 47 | Una sola risposta corretta |
| 50 | Risultato del round |
| 51 | Risultato del round: stop |
| 52 | Risultato del Round lampo |
| 53 | Risultato del Round lampo: stop |
| 60 | Intervallo |
| 61 | Intervallo: stop |
| 70 | Risultato finale |
| 71 | Risultato finale: viene rivelata una posizione |
| 72 | Risultato finale: viene rivelato il vincitore |
| 73 | Risultato finale: stop |

### Luci per ogni domanda

Puoi dare a ogni domanda la sua atmosfera luminosa. Nell'editor del quiz, apri le impostazioni della domanda e aggiungi **Illuminazione** (sotto *Presentazione*). Quando parte il timer della domanda, il controller invia la nota di quell'atmosfera. Le domande senza un'atmosfera luminosa inviano la nota *Predefinito*, così le luci possono tornare al loro stato normale.

| Nota | Illuminazione |
|---|---|
| 100 | Predefinito |
| 101 | Conto alla rovescia |
| 102 | Festa disco |
| 103 | Zona di guerra |
| 104 | Allarme rosso |
| 105 | Notte stellata |
| 106 | Fuga dalla prigione |
| 107 | Materiali pericolosi |
| 108 | Rosa accogliente |
| 109 | Atlantide |
| 110 | Giungla |
| 111 | Oceano blu |
| 112 | Oceano giallo |
| 113 | Oceano verde |
| 114 | Oceano viola |
| 115 | Oceano arancione |
| 116 | Oceano rosso |
| 117 | Rosso contro blu |

I nomi sono solo suggerimenti: cosa fa ogni nota dipende da te e dal tuo impianto luci.

---

## 🛠️ Altri strumenti regie

[**regie.catlab.eu**](https://regie.catlab.eu) offre altri strumenti per i grandi eventi. Tutti usano il codice regie.

- **Teleprompter** - un secondo schermo per il quizmaster con scorrimento automatico e testo a specchio
- **Schermo regia** - invia messaggi ai conduttori su uno o più monitor sul palco
- **Controller OBS** - cambia automaticamente le scene di OBS durante il gioco (vedi [quiz in diretta streaming](040-livestreaming.md))
- **Timer con conto alla rovescia** - mostra i timer di QuizWitz su uno schermo separato
- **Schermo duplicato** - mostra una copia dello schermo di gioco su un altro monitor

---

## ✅ Esempio di configurazione

- **Computer dello schermo di gioco** - collegato al proiettore o al ledwall e all'impianto audio, con un cavo di rete
- **Computer di regie** - il controller MIDI in Chrome, collegato al tuo impianto luci, con un cavo di rete
- **Tablet o telefono** - la Quizmaster App
- **Portatile o tablet** - l'app giuria, per correggere i punteggi e controllare il gioco

> 💡 Fai una prova completa nella location prima dell'evento, così puoi testare i cue delle luci, i livelli audio e la rete.

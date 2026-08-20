---
id: advanced-player-parameters
title: Parametri avanzati
---

# ⚙️ Parametri avanzati

Puoi usare i parametri della query string per personalizzare il comportamento del client di gioco QuizWitz. Questi parametri possono essere aggiunti a qualsiasi link di gioco usando la funzione **Impostazioni di gioco avanzate**.

Esempio:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Cosa sono le query string?](https://en.wikipedia.org/wiki/Query_string)

---

## Parametri disponibili:

| Parametro                |          Predefinito         |           Esempio           | Spiegazione                                                                                                                                                                                                                      |
| ------------------------ | :--------------------------: | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (browser) |              en             | Codice lingua ISO-639 da caricare e usare come lingua di base                                                                                                                                                                    |
| `theme`                  |            quizted           |           emerald           | Nome (o URL approvato) del tema da caricare                                                                                                                                                                   |
| `reservation`            |               /              |            abcdef           | Token di prenotazione da usare (nelle partite live)                                                                                                                                                           |
| `remote`                 |  quizwitz.tv | quizwitz.tv | Server CatLab Remote da usare                                                                                                                                                                                                    |
| `server`                 |               /              |              10             | ID del server CatLab Remote da usare (con rilevamento automatico)                                                                                                                                             |
| `publisher`              |               /              |           QuizWitz          | Nome del publisher che ospita la partita. Questo viene usato per personalizzare le viste                                                                                                                         |
| `smileys`                |               1              |              0              | Imposta su 0 per disattivare gli smiley nel gioco                                                                                                                                                                                |
| `outroPlayers`           |              12              |          5,4,3,1,2          | Definisce la quantità (numero) O l'ordine dei giocatori (elenco di posizioni separate da virgole) che verranno annunciati durante l'outro del gioco.                       |
| `focusPositions`         |               /              |            50,100           | Definisci un elenco di posizioni aggiuntive che verranno visualizzate nell'app Quizmaster                                                                                                                                        |
| `translations`           |               1              |              0              | Imposta su 0 per disattivare il caricamento delle traduzioni del quiz che stai caricando                                                                                                                                         |
| `cycleTranslations`      |               0              |              1              | Imposta su 1 per scorrere tutte le lingue disponibili del quiz per ogni domanda                                                                                                                                                  |
| `showLongQuestions`      |               0              |              1              | Imposta su 1 per mostrare la "domanda lunga" nella schermata di gioco                                                                                                                                                            |
| `forcePiecharts`         |               0              |              1              | Imposta su 1 per mostrare sempre tutti i feedback nei grafici a torta                                                                                                                                                            |
| `forceNoPiecharts`       |               0              |              1              | Imposta su 1 per non raggruppare mai tutti i feedback nei grafici a torta.                                                                                                                                       |
| `piechartPercentages`    |               0              |              1              | Imposta su 1 per mostrare le percentuali invece dei valori assoluti in tutti i grafici a torta                                                                                                                                   |
| `monitors`               |               /              |            nl,fr            | Se impostato, in partite live verranno creati codici separati per visualizzare un 'monitor' in quella lingua specifica per i quizmaster localizzati.                                                             |
| `allowLogin`             |               1              |              0              | Imposta su 0 per impedire agli utenti di effettuare il login                                                                                                                                                                     |
| `tracker`                |               1              |              0              | Imposta su 0 per disattivare tutto il tracciamento. Non sarà disponibile alcun report del quiz                                                                                                                   |
| `random`                 |               0              |              1              | Imposta su 1 per caricare un "quiz casuale"                                                                                                                                                                                      |
| `delay`                  |               0              |            30000            | Imposta il numero di millisecondi di ritardo per tutte le interazioni dei giocatori (per le livestream)                                                                                                       |
| `countdown`              |              10              |              60             | Imposta il numero di secondi del conto alla rovescia del gioco in modalità presentazione.                                                                                                                        |
| `autoCountdown`          |               0              |              1              | Imposta su 1 per avviare automaticamente il conto alla rovescia dopo che il primo giocatore si è unito in modalità presentazione.                                                                                |
| `autoRestart`            |               0              |              1              | Imposta su 1 per riavviare automaticamente il gioco al termine.                                                                                                                                                  |
| `waitForPlayers`         |               0              |              1              | Imposta su 1 per non aspettare alcun giocatore quando `autoCountdown` è abilitato                                                                                                                                                |
| `askEmail`               |               1              |              0              | Imposta su 0 per non chiedere l'indirizzo email dell'utente in modalità presentazione.                                                                                                                           |
| `beacon`                 |               /              |           my-beacn          | Impostare un token catLab Remote beacon che può essere utilizzato per collegare automaticamente l'app Quizmaster.                                                                                                |
| `rounds`                 |               5              |              7              | Imposta il numero di round che verranno generati in un quiz casuale.                                                                                                                                             |
| `questions`              |               7              |              7              | Imposta il numero di domande che verranno generate per ogni round in un quiz casuale.                                                                                                                            |
| `showListenQuotes`       |               1              |              0              | Imposta su 0 per disattivare le citazioni "please listen" "divertenti".                                                                                                                                          |
| `shared`                 |               /              |  123:abcdef | Il token di accesso di una voce condivisa.                                                                                                                                                                       |
| `music`                  |               1              |              0              | Imposta su 0 per disattivare tutta la musica (di gioco). L'audio caricato verrà comunque riprodotto.                                                                          |
| `connectMusic`           |               1              |              0              | Imposta su 0 per disattivare la musica (di gioco) riprodotta durante la fase di "connessione".                                                                                                |
| `slideshowVideoInterval` |              300             |             300             | Quando vengono caricati video nella fase della schermata di connessione, questo definisce il numero di secondi tra una riproduzione video e l'altra.                                                             |
| `slideshowImageInterval` |              20              |              60             | Quando vengono caricate immagini nella fase della schermata di connessione, questo definisce il numero di secondi per cui ogni immagine verrà mostrata.                                                          |
| `skipOnAllAnswered`      |               1              |              0              | Imposta su 0 per sovrascrivere `skipOnAllAnswered` delle voci                                                                                                                                                                    |
| `departments`            |               1              |            A,B,C            | Imposta su 0 per disattivare il caricamento dei reparti. Imposta su un elenco di nomi separati da virgole per assegnare automaticamente tutti i giocatori che si collegano a un reparto casuale. |
| `showRankInDepartment`   |               1              |              0              | Imposta su 0 per impedire agli utenti di vedere la propria posizione all'interno del reparto.                                                                                                                    |
| `showDepartmentRanking`  |               1              |              0              | Imposta su 0 per disattivare la visualizzazione della classifica dei reparti tra un round e l'altro.                                                                                                             |
| `preloadVideo`           |               0              |              1              | Imposta su 1 per forzare il precaricamento di tutti i frammenti video.                                                                                                                                           |
| `n`                      |               /              |          `_prompt_`         | Imposta (o richiedi impostando su `_prompt_`) un nome per il gruppo di giocatori che sta giocando la partita. Questo nome viene inviato al report del quiz.                   |

---

## 💡 Consigli d'uso

- Puoi combinare più parametri usando `&`
- Usa queste opzioni con **Impostazioni di gioco avanzate** quando condividi o incorpori link
- Molte opzioni sono utili per ottimizzare le livestream o per eventi multilingue

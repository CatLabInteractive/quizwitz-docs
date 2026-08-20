---
id: livestream-tutorial
title: Quiz in diretta streaming
---

# 📺 Organizzare un quiz in diretta streaming

Con QuizWitz Live è facile organizzare un quiz in diretta streaming completamente interattivo su piattaforme come **Twitch**, **YouTube Live** o **Facebook Live** — anche per un pubblico numeroso. Questa guida ti accompagna nella configurazione, nella gestione del ritardo e nelle migliori pratiche per la presentazione.

> 🧭 Se sei nuovo nell'app Quizmaster, inizia con [**Quizmaster startup guide**](../quizmaster/002-startup.md).

---

## 🎤 La configurazione del quizmaster

Il quizmaster è il cuore del tuo evento. Gestisce il ritmo, presenta le domande e mantiene coinvolto il pubblico.

Usa la **Quizmaster App** per avviare il gioco. Avvia QuizWitz Live dall’editor del quiz cliccando su **Avvia QuizWitz Live**.

> 💡 Quizmaster App è una **web app** — non c'è installazione. Basta andare su [**quizwitz.tv**](https://quizwitz.tv) sul tuo dispositivo quizmaster e inserire il **codice quizmaster**.

Ti consigliamo di usare un **tablet o smartphone** così il quizmaster può muoversi liberamente durante lo show.

---

## 🧩 Scegliere la modalità di gioco giusta

Quando inizi QuizWitz Live, ti verrà chiesto di scegliere come si connettono i giocatori:

- **Codici team** — I giocatori o i team ricevono ciascuno un codice unico. Utile per eventi con team pre-registrati.
- **Codice di gioco condiviso** — Un unico codice per tutti i giocatori. Ideale per dirette streaming con registrazione aperta.

> Per i livestream, scegli sempre **Codice di gioco condiviso** e fai clic su _Avvia gioco ad hoc_.

Una volta caricato il quiz, verrà visualizzata la Quizmaster App:

- **Codice quizmaster** — per il quizmaster
- **Codice Jury** — per controllare le domande aperte
- **Codice Regie** — per controllare elementi visivi/audio
- **Codice Gioco** — per permettere ai giocatori di entrare

La schermata di gioco ora mostra la **schermata di connessione**, che è quella da trasmettere al tuo pubblico.

---

## 🎥 Trasmettere su Twitch (o altrove)

Per trasmettere il tuo quiz, usa un software di broadcasting. Ti consigliamo:

- **OBS Studio** (Open Broadcast Software) — gratuito e potente
- Alternative: Streamlabs, vMix oppure le opzioni native di Zoom/Meet

Se usi un **software per riunioni** come Zoom o Google Meet:

- Condividi semplicemente lo schermo
- Premi **Inizio** nell'app Quizmaster
- I giocatori possono partecipare quasi in tempo reale

Con **Twitch, YouTube Live o Facebook Live**, noterai un **ritardo dello streaming** (detto anche ritardo di transcodifica).

> ✅ Ti consigliamo **Twitch** per ottenere i risultati migliori — offre costantemente bassa latenza e una buona sincronizzazione degli spettatori.

---

## ⏱️ Impostare il ritardo dei giocatori di QuizWitz

Per compensare il ritardo dello streaming, utilizzare il **ritardo di interazione del giocatore** nell'app Giuria.

Ecco come fare:

1. Avvia l’anteprima dello stream — non serve ancora andare in diretta
2. Apri la **App della Giuria** inserendo il tuo Codice della Giuria su [**quizwitz.tv**](https://quizwitz.tv)
3. Vai a **Controllo gioco**
4. Apri la tua diretta streaming in un’altra finestra, con l’audio attivo
5. Usa un cronometro
6. Nell'app della Giuria, premi il pulsante **Buzzer** e inizia la tempistica
7. Quando senti il buzzer nella diretta streaming, ferma il cronometro
8. Arrotonda il ritardo per eccesso (in secondi) e inseriscilo nel campo **Ritardo interazione giocatori**
9. Clicca su **Conferma impostazione**

> 🎯 È meglio sovrastimare leggermente il ritardo. Così i giocatori vedranno le opzioni di risposta solo **dopo** che avrai finito di leggere la domanda.

---

## 🚀 Andare in diretta

Una volta impostato il ritardo e con i giocatori connessi:

- Avvia il tuo stream su Twitch
- Usa l'app Quizmaster per **avviare il quiz**
- QuizWitz gestirà i tempi in background — non serve fare pause tra una domanda e l’altra

---

## 💡 Consigli per presentare una diretta streaming

- **Non lasciare che il quizmaster guardi lo stream ritardato** — dovrebbero usare solo l'app Quizmaster live per evitare pause imbarazzanti.

- Per interagire con il pubblico, tieni d’occhio i **commenti in diretta** su uno schermo separato — non il feed video.

- Vuoi cambiare automaticamente le scene di OBS? Usa:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Vuoi attivare dispositivi MIDI durante il gioco? Prova:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Cerchi altri strumenti? Visita [**regie.catlab.eu**](https://regie.catlab.eu) — un hub centrale con utilità aggiuntive per automazione, cambio scene, effetti e altro.

> Tutti gli strumenti richiedono il tuo **codice regie** dall'app Quizmaster.

---

Sei pronto per andare in diretta! Twitch offre una piattaforma fluida e reattiva per organizzare eventi quiz su larga scala. Abbinala a QuizWitz Live — e la tua serata quiz farà davvero colpo.

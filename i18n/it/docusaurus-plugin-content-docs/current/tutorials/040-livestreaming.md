---
id: livestream-tutorial
title: Quiz in diretta streaming
---

# 📺 Organizzare un quiz in diretta streaming

Con QuizWitz Live è facile organizzare un quiz in diretta streaming completamente interattivo su piattaforme come **Twitch**, **YouTube Live** o **Facebook Live** — anche per un pubblico numeroso. Questa guida ti accompagna nella configurazione, nella gestione del ritardo e nelle migliori pratiche per la presentazione.

> 🧭 Se non conosci ancora l’app Quizmaster, inizia con la [**guida introduttiva di Quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 La configurazione del quizmaster

Il quizmaster è il cuore del tuo evento. Gestisce il ritmo, presenta le domande e mantiene coinvolto il pubblico.

Usa l’**app Quizmaster** per gestire il gioco. Avvia QuizWitz Live dall’editor del quiz cliccando su **Avvia QuizWitz Live**.

> 💡 L’app Quizmaster è una **web app** — non serve installare nulla. Vai semplicemente su [**quizwitz.tv**](https://quizwitz.tv) dal dispositivo di presentazione e inserisci il **Codice Master**.

Ti consigliamo di usare un **tablet o smartphone** così il quizmaster può muoversi liberamente durante lo show.

---

## 🧩 Scegliere la modalità di gioco giusta

Quando avvii QuizWitz Live, ti verrà chiesto di scegliere una modalità:

- **Modalità normale** — Giocatori o squadre ricevono ciascuno un codice univoco. Utile per eventi a squadre con pre-registrazione.
- **Modalità ad-hoc** — Un unico Codice Gioco condiviso per tutti i giocatori. Ideale per dirette streaming con registrazione aperta.

> Per le dirette streaming, scegli sempre la **modalità ad-hoc** e clicca su **Avvia partita ad-hoc**.

Una volta caricato il quiz, l’app Quizmaster mostrerà:

- **Codice Master** — per il quizmaster
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
- Premi **Avvia** nell’app Quizmaster
- I giocatori possono partecipare quasi in tempo reale

Con **Twitch, YouTube Live o Facebook Live**, noterai un **ritardo dello streaming** (detto anche ritardo di transcodifica).

> ✅ Ti consigliamo **Twitch** per ottenere i risultati migliori — offre costantemente bassa latenza e una buona sincronizzazione degli spettatori.

---

## ⏱️ Impostare il ritardo dei giocatori di QuizWitz

Per compensare il ritardo dello stream, usa il **ritardo di interazione dei giocatori** nell’app Jury.

Ecco come fare:

1. Avvia l’anteprima dello stream — non serve ancora andare in diretta
2. Apri l’**app Jury** inserendo il tuo Codice Jury su [**catlab.tv**](https://catlab.tv)
3. Vai a **Controllo gioco**
4. Apri la tua diretta streaming in un’altra finestra, con l’audio attivo
5. Usa un cronometro
6. Nell’app Jury, premi il pulsante **Buzzer** e avvia il cronometro
7. Quando senti il buzzer nella diretta streaming, ferma il cronometro
8. Arrotonda il ritardo per eccesso (in secondi) e inseriscilo nel campo **Ritardo interazione giocatori**
9. Clicca su **Conferma impostazione**

> 🎯 È meglio sovrastimare leggermente il ritardo. Così i giocatori vedranno le opzioni di risposta solo **dopo** che avrai finito di leggere la domanda.

---

## 🚀 Andare in diretta

Una volta impostato il ritardo e con i giocatori connessi:

- Avvia il tuo stream su Twitch
- Usa l’app Quizmaster per **avviare il quiz**
- QuizWitz gestirà i tempi in background — non serve fare pause tra una domanda e l’altra

---

## 💡 Consigli per presentare una diretta streaming

- **Non lasciare che il quizmaster guardi lo stream in ritardo** — dovrebbe usare solo l’app Quizmaster live per evitare pause imbarazzanti.

- Per interagire con il pubblico, tieni d’occhio i **commenti in diretta** su uno schermo separato — non il feed video.

- Vuoi cambiare automaticamente le scene di OBS? Usa:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Vuoi attivare dispositivi MIDI durante il gioco? Prova:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Cerchi altri strumenti? Visita [**regie.catlab.eu**](https://regie.catlab.eu) — un hub centrale con utilità aggiuntive per automazione, cambio scene, effetti e altro.

> Tutti gli strumenti richiedono il tuo **Codice Regie** dall’app Quizmaster.

---

Sei pronto per andare in diretta! Twitch offre una piattaforma fluida e reattiva per organizzare eventi quiz su larga scala. Abbinala a QuizWitz Live — e la tua serata quiz farà davvero colpo.

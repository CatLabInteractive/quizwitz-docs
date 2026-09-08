---
id: livestream-tutorial
title: Quiz in diretta streaming
---

# 📺 Organizzare un quiz in diretta streaming

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Questa guida ti accompagna nella configurazione, nella gestione del ritardo e nelle migliori pratiche per la presentazione.

> 🧭 Se sei nuovo nell'app Quizmaster, inizia con [**Quizmaster startup guide**](../quizmaster/002-startup.md).

---

## 🎤 La configurazione del quizmaster

Il quizmaster è il cuore del tuo evento. Gestisce il ritmo, presenta le domande e mantiene coinvolto il pubblico.

Usa la **Quizmaster App** per avviare il gioco. Avvia QuizWitz Live dall’editor del quiz cliccando su **Avvia QuizWitz Live**.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Basta andare su [**quizwitz.tv**](https://quizwitz.tv) sul tuo dispositivo quizmaster e inserire il **codice quizmaster**.

Ti consigliamo di usare un **tablet o smartphone** così il quizmaster può muoversi liberamente durante lo show.

---

## 🧩 Scegliere la modalità di gioco giusta

Quando inizi QuizWitz Live, ti verrà chiesto di scegliere come si connettono i giocatori:

- **Team codes** - Players or teams each receive a unique code. Utile per eventi con team pre-registrati.
- **Single game code** - One shared game code for all players. Ideale per dirette streaming con registrazione aperta.

> Per i livestream, scegli sempre **Codice di gioco condiviso** e fai clic su _Avvia gioco ad hoc_.

Una volta caricato il quiz, verrà visualizzata la Quizmaster App:

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

La schermata di gioco ora mostra la **schermata di connessione**, che è quella da trasmettere al tuo pubblico.

---

## 🎥 Trasmettere su Twitch (o altrove)

Per trasmettere il tuo quiz, usa un software di broadcasting. Ti consigliamo:

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Alternative: Streamlabs, vMix oppure le opzioni native di Zoom/Meet

Se usi un **software per riunioni** come Zoom o Google Meet:

- Condividi semplicemente lo schermo
- Premi **Inizio** nell'app Quizmaster
- I giocatori possono partecipare quasi in tempo reale

Con **Twitch, YouTube Live o Facebook Live**, noterai un **ritardo dello streaming** (detto anche ritardo di transcodifica).

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Impostare il ritardo dei giocatori di QuizWitz

Per compensare il ritardo dello streaming, utilizzare il **ritardo di interazione del giocatore** nell'app Giuria.

Ecco come fare:

1. Start your stream preview - no need to go live yet
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
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Consigli per presentare una diretta streaming

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- Vuoi cambiare automaticamente le scene di OBS? Usa:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Vuoi attivare dispositivi MIDI durante il gioco? Prova:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Cerchi altri strumenti? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Tutti gli strumenti richiedono il tuo **codice regie** dall'app Quizmaster.

---

Sei pronto per andare in diretta! Twitch offre una piattaforma fluida e reattiva per organizzare eventi quiz su larga scala. Combine that with QuizWitz Live - and your quiz night is set to impress.

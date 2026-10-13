---
id: round-options
title: Opzioni del round
---

# 🔄 Opzioni del round

Ogni round ha un **tipo** specifico. L’impostazione predefinita è **Trivia**, ma ti invitiamo a provare e sperimentare tutti i tipi disponibili. Questa pagina spiega le impostazioni e gli allegati che puoi configurare per ogni round.

📘 Per una panoramica dettagliata di tutti i tipi di round, visita la [documentazione sui tipi di round](../round-types/000-round-types.md).

---

## 🔧 Configurare un round

Per configurare le opzioni di un round, clicca sull’icona a forma di ingranaggio nel pannello del round:

| ![Apri opzioni del round](/images/open-round-options.png) | ![Opzioni del round](/images/round-options.png) |
| :-------------------------------------------------------: | :---------------------------------------------: |
|             _Apertura delle opzioni del round_            |      _Pannello di configurazione del round_     |

---

## ⚙️ Opzioni generali del round

Le seguenti opzioni sono disponibili per la maggior parte dei tipi di round:

- **Mostra solo _X_ domande** - Limita il round a un numero specifico di domande
- **Ordine casuale delle domande** - Mescola l’ordine delle domande all’interno del round
- **Mostra intro del round** - Mostra un titolo animato prima dell’inizio del round
- **Mostra outro del round (punteggio intermedio)** - Rivela le classifiche alla fine del round
- **Raggruppa tutti i feedback in un’unica schermata** - Raccoglie i feedback delle domande in un unico blocco al termine del round
- **Mostra tutti i feedback delle domande alla fine del round** - Rimanda i feedback delle domande fino al termine del round
- **Forza il feedback dopo ogni singola domanda** - Assicura un feedback immediato
  > ⚠️ Questo ha effetto solo nei tipi di round e di domanda in cui il feedback altrimenti verrebbe rimandato, come le domande aperte o i round lampo.

📘 Consulta [tipi di domanda](../question-types/000-question-types.md) per maggiori informazioni su tempi e comportamento del feedback.

---

## 🏆 Opzioni di punteggio {#scoring}

QuizWitz offre un sistema di punteggio flessibile per rendere tutto equo e coinvolgente per tutti i giocatori.

- **Punteggio basato sul tempo** - I giocatori guadagnano più punti rispondendo più velocemente.
  - Per la maggior parte dei tipi di domanda, i punti basati sul tempo diminuiscono **continuamente per microsecondo**: più rispondi in fretta, più punti ottieni.
  - Per le **domande aperte**, i punti basati sul tempo sono divisi in blocchi. Per esempio: le risposte nel primo blocco (ad es. i primi secondi) ottengono il **100%** della parte basata sul tempo, il blocco successivo ottiene l’**80%**, e così via. Questo aiuta a rendere il gioco più equilibrato per chi digita più lentamente.

- **Percentuale fissa di punti nel punteggio basato sul tempo** - Controlli quanto del punteggio totale è influenzato dalla velocità.
  - Per impostazione predefinita, il **75%** dei punti è fisso (tutti quelli che rispondono correttamente ricevono questi punti, indipendentemente dalla velocità).
  - Solo il restante **25%** è influenzato dalla rapidità con cui i giocatori rispondono.

> 💡 Regolando questa impostazione puoi rendere i round più basati sulla conoscenza o più basati sulla velocità, a seconda dello stile del tuo quiz.

Queste opzioni di punteggio si trovano nel pannello delle opzioni del round quando modifichi un round.

---

## 💬 Round explanation

Some round types and scoring options show a short explanation on the game screen before the first question, for example _"Answer consecutive questions correctly to reach higher levels and get bonus points."_ when a round uses strike scoring. Click **+ Round explanation** in the round opening to replace that text with your own. You can also use it to explain a regular trivia round, which has no explanation by default.

- Leave the field empty to keep the default explanation of the round type.
- The round explanation is translated like any other text: add it in every language of your quiz.
- When a quizmaster presents the quiz, the game screen skips the round explanation. Use the quizmaster script below instead.

---

## 📜 Istruzioni per il quizmaster

You can add a custom **round introduction text** (the **Quizmaster script**) that will appear only on the [Quizmaster App](../quizmaster/001-introduction.md) at the start of the round. Usalo per descrivere il quizmaster o aggiungere un tocco personale.

---

## 📎 Allegati

Enhance your round with attachments shown at specific moments:

- **Prima del round** - Mostrato dopo l’animazione di intro del round
- **Dopo il round** - Mostrato dopo l’outro del round
- **Prima dell’outro del round** - Mostrato dopo l’ultima domanda, appena prima dell’outro
- **Durante l’outro del round** - _(solo audio)_ Viene riprodotto mentre vengono mostrate le classifiche
- ...

📘 Per i tipi di file supportati e consigli d’uso, consulta la [guida agli allegati](../editor/006-attachments.md).

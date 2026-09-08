---
id: livestream-tutorial
title: Quiz em livestream
---

# 📺 Organizar um quiz em livestream

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Este guia mostra-te a configuração, como lidar com atrasos e as melhores práticas de apresentação.

> 🧭 Se és novo na app Quizmaster, começa com o [**guia de inicialização do Quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 A configuração do quizmaster

O quizmaster é o coração do teu evento. Controla o ritmo, apresenta as perguntas e mantém a tua audiência envolvida.

Usa a **App Quizmaster** para executar o jogo. Inicia o QuizWitz Live a partir do editor de quizzes clicando em **Start QuizWitz Live**.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Vai a [**quizwitz.tv**](https://quizwitz.tv) no teu dispositivo de quizmaster e introduz o **código de quizmaster**.

Recomendamos usar um **tablet ou smartphone** para que o quizmaster se possa movimentar livremente durante o espetáculo.

---

## 🧩 Escolher o modo de jogo certo

Ao iniciares o QuizWitz Live, vais ser solicitado a escolher como os jogadores se vão ligar:

- **Team codes** - Players or teams each receive a unique code. Útil para eventos de equipas pré-registadas.
- **Single game code** - One shared game code for all players. Ideal para livestreams com inscrições abertas.

> Para livestreams, escolhe sempre o **Código de jogo partilhado** e clica em _Iniciar jogo_.

Quando o quiz carregar, a App Quizmaster é apresentada:

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

O teu ecrã de jogo mostra agora o **ecrã de ligação**, que é o que deves transmitir para a tua audiência.

---

## 🎥 Transmitir para a Twitch (ou outras plataformas)

Para transmitir o teu quiz, usa software de transmissão. Recomendamos:

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Alternativas: Streamlabs, vMix ou opções nativas para Zoom/Meet

Se estiveres a usar **software de reunião** como Zoom ou Google Meet:

- Basta partilhares o teu ecrã
- Pressiona **Iniciar** na App Quizmaster
- Os jogadores podem participar quase em tempo real

Para **Twitch, YouTube Live ou Facebook Live**, vais notar um **atraso na transmissão** (também chamado atraso de transcodificação).

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Definir o atraso dos jogadores no QuizWitz

Para compensar o atraso de transmissão, usa o **atraso de interação dos jogadores** na App Quizmaster.

Eis como fazer:

1. Start your stream preview - no need to go live yet
2. Abre a **App do Júri** introduzindo o teu Código do Júri em [**quizwitz.tv**](https://quizwitz.tv)
3. Vai a **Game control**
4. Abre a tua livestream noutra janela, com som
5. Usa um cronómetro
6. Na App do Júri, carrega no botão **Buzzer** e começa a contar o tempo
7. Quando ouvires o buzzer na livestream, para o cronómetro
8. Arredonda o atraso para cima (em segundos) e insere-o no campo **Player interaction delay**
9. Clica em **Confirm setting**

> 🎯 É melhor sobrestimar ligeiramente o atraso. Isto garante que os jogadores só veem as opções de resposta **depois** de terminares de ler a pergunta.

---

## 🚀 Entrar em direto

Depois de o atraso estar definido e os teus jogadores estarem ligados:

- Inicia a tua transmissão na Twitch
- Usa a App Quizmaster para **iniciar o quiz**
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Dicas de apresentação para livestream

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- Queres mudar cenas do OBS automaticamente? Usa:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Queres acionar dispositivos MIDI durante o jogo? Experimenta:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- À procura de mais ferramentas? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Todas as ferramentas requerem o teu **Código de Regie** na App Quizmaster.

---

Estás pronto para entrar em direto! A Twitch oferece uma plataforma fluida e responsiva para organizar eventos de quiz em grande escala. Combine that with QuizWitz Live - and your quiz night is set to impress.

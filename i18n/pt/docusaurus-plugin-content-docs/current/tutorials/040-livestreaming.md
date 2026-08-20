---
id: livestream-tutorial
title: Quiz em livestream
---

# 📺 Organizar um quiz em livestream

Com QuizWitz Live, é fácil organizar um quiz em livestream totalmente interativo em plataformas como **Twitch**, **YouTube Live** ou **Facebook Live** — mesmo para grandes audiências. Este guia mostra-te a configuração, como lidar com atrasos e as melhores práticas de apresentação.

> 🧭 Se você é novo no aplicativo de Quizmaster, comece com o [**guia de inicialização do Quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 A configuração do quizmaster

O quizmaster é o coração do teu evento. Controla o ritmo, apresenta as perguntas e mantém a tua audiência envolvida.

Use o **App de Quizmaster** para executar o jogo. Inicia o QuizWitz Live a partir do editor de quizzes clicando em **Start QuizWitz Live**.

> 💡 O App de Tizmaster é um **aplicativo web** — não há instalação. Vá para [**quizwitz.tv**](https://quizwitz.tv) no seu dispositivo mestre e insira o **código do testador**.

Recomendamos usar um **tablet ou smartphone** para que o quizmaster se possa movimentar livremente durante o espetáculo.

---

## 🧩 Escolher o modo de jogo certo

Ao iniciar o QuesizWitz Live, você será solicitado a escolher como os jogadores se conectaram:

- **Códigos da equipe** — Jogadores ou equipes recebem cada um código único. Útil para eventos de equipas pré-registadas.
- **Código de jogo único** — Um código de jogo compartilhado para todos os jogadores. Ideal para livestreams com inscrições abertas.

> Para livestreams, sempre escolha **Código único** e clique em _Iniciar jogo ad-hoc_.

Quando o questionário carregar, o aplicativo de Tizmaster será exibido:

- **Código de questionário** — para o testador
- **Jury Code** — para rever perguntas abertas
- **Regie Code** — para controlar imagens/áudio
- **Game Code** — para os jogadores entrarem

O teu ecrã de jogo mostra agora o **ecrã de ligação**, que é o que deves transmitir para a tua audiência.

---

## 🎥 Transmitir para a Twitch (ou outras plataformas)

Para transmitir o teu quiz, usa software de transmissão. Recomendamos:

- **OBS Studio** (Open Broadcast Software) — gratuito e poderoso
- Alternativas: Streamlabs, vMix ou opções nativas para Zoom/Meet

Se estiveres a usar **software de reunião** como Zoom ou Google Meet:

- Basta partilhares o teu ecrã
- Pressione **Iniciar** no aplicativo Quizmaster
- Os jogadores podem participar quase em tempo real

Para **Twitch, YouTube Live ou Facebook Live**, vais notar um **atraso na transmissão** (também chamado atraso de transcodificação).

> ✅ Recomendamos **Twitch** para os melhores resultados — oferece consistentemente baixa latência e boa sincronização dos espectadores.

---

## ⏱️ Definir o atraso dos jogadores no QuizWitz

Para compensar o atraso de transmissão, use o **atraso de interação** no Aplicativo Jury.

Eis como fazer:

1. Inicia a pré-visualização da tua transmissão — ainda não precisas de entrar em direto
2. Abra o **Aplicativo do Justo** entrando no seu Código do Júrio em [**quizwitz.tv**](https://quizwitz.tv)
3. Vai a **Game control**
4. Abre a tua livestream noutra janela, com som
5. Usa um cronómetro
6. No App Jury, aperte o botão **Buzzer** e comece o tempo
7. Quando ouvires o buzzer na livestream, para o cronómetro
8. Arredonda o atraso para cima (em segundos) e insere-o no campo **Player interaction delay**
9. Clica em **Confirm setting**

> 🎯 É melhor sobrestimar ligeiramente o atraso. Isto garante que os jogadores só veem as opções de resposta **depois** de terminares de ler a pergunta.

---

## 🚀 Entrar em direto

Depois de o atraso estar definido e os teus jogadores estarem ligados:

- Inicia a tua transmissão na Twitch
- Use o aplicativo de Tizmaster para **iniciar o teste**
- O QuizWitz trata dos tempos em segundo plano — não precisas de fazer pausas entre perguntas

---

## 💡 Dicas de apresentação para livestream

- **Não deixe o quizmaster assistir o fluxo atrasado** — eles devem usar apenas o aplicativo de questionário ao vivo para evitar pavimentos estranhos.

- Para interagir com a audiência, acompanha os **comentários em direto** num ecrã separado — não no feed de vídeo.

- Queres mudar cenas do OBS automaticamente? Usa:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Queres acionar dispositivos MIDI durante o jogo? Experimenta:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- À procura de mais ferramentas? Visita [**regie.catlab.eu**](https://regie.catlab.eu) — um hub central com utilitários adicionais para automação, mudança de cenas, efeitos e muito mais.

> Todas as ferramentas requerem seu **Código de Região** no Aplicativo Mestre do Questionário.

---

Estás pronto para entrar em direto! A Twitch oferece uma plataforma fluida e responsiva para organizar eventos de quiz em grande escala. Combina isso com QuizWitz Live — e a tua noite de quiz está pronta para impressionar.

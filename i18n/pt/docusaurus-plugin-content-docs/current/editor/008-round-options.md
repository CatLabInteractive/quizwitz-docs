---
id: round-options
title: Opções da ronda
---

# 🔄 Opções da ronda

Cada ronda tem um **tipo** específico. A predefinição é **Trivia**, mas convidamos-te a testar e a experimentar todos os tipos disponíveis. Esta página explica as definições e os anexos que podes configurar por ronda.

📘 Para uma visão geral detalhada de todos os tipos de ronda, visita a [documentação sobre tipos de ronda](../round-types/000-round-types.md).

---

## 🔧 Configurar uma ronda

Para configurar as opções de uma ronda, clica no ícone de engrenagem no painel da ronda:

| ![Abrir opções da ronda](/images/open-round-options.png) | ![Opções da ronda](/images/round-options.png) |
| :------------------------------------------------------: | :-------------------------------------------: |
|               _A abrir as opções da ronda_               |       _Painel de configuração da ronda_       |

---

## ⚙️ Opções gerais da ronda

As seguintes opções estão disponíveis para a maioria dos tipos de ronda:

- **Mostrar apenas _X_ perguntas** — Limita a ronda a um número específico de perguntas
- **Ordem aleatória das perguntas** — Baralha a ordem das perguntas dentro da ronda
- **Mostrar introdução da ronda** — Apresenta um título animado antes de a ronda começar
- **Mostrar encerramento da ronda (pontuação provisória)** — Revela as classificações no fim da ronda
- **Agrupar todo o feedback num único ecrã** — Reúne o feedback das perguntas num só bloco depois de a ronda terminar
- **Mostrar todo o feedback das perguntas no fim da ronda** — Adia o feedback das perguntas até a ronda terminar
- **Forçar feedback depois de cada pergunta individual** — Garante feedback imediato
  > ⚠️ Isto só tem efeito em tipos de ronda e de pergunta em que o feedback normalmente seria adiado, como perguntas abertas ou rondas relâmpago.

📘 Consulta os [tipos de pergunta](../question-types/000-question-types.md) para mais informações sobre o momento e o comportamento do feedback.

---

## 🏆 Opções de pontuação {#scoring}

O QuizWitz oferece pontuação flexível para manter tudo justo e envolvente para todos os jogadores.

- **Pontuação baseada no tempo** — Os jogadores ganham mais pontos por respostas mais rápidas.
  - Para a maioria dos tipos de pergunta, os pontos baseados no tempo diminuem **continuamente por microssegundo**: quanto mais rápido responderes, mais pontos ganhas.
  - Para **perguntas abertas**, os pontos baseados no tempo são divididos em blocos. Por exemplo: as respostas no primeiro bloco (por exemplo, nos primeiros segundos) ganham **100%** da parte baseada no tempo, o bloco seguinte ganha **80%**, e assim por diante. Isto ajuda a equilibrar as coisas para quem escreve mais devagar.

- **Percentagem fixa de pontos na pontuação baseada no tempo** — Tu controlas quanto da pontuação total é influenciado pela rapidez.
  - Por predefinição, **75%** dos pontos são fixos (toda a gente que responde corretamente recebe estes pontos, independentemente da rapidez).
  - Só os restantes **25%** são influenciados pela rapidez com que os jogadores respondem.

> 💡 Ajustar esta definição permite-te tornar as rondas mais baseadas em conhecimento ou mais baseadas em rapidez, dependendo do estilo do teu quiz.

Estas opções de pontuação encontram-se no painel de opções da ronda ao editar uma ronda.

---

## 📜 Instruções do Quizmaster

Você pode adicionar um **texto de introdução** personalizado que aparecerá somente no [Aplicativo de Tizmaster](../quizmaster/001-introduction.md) no início da rodada. Use isto para curtir o questionário ou adicionar um toque pessoal.

---

## 📎 Anexos

Melhora a tua ronda com multimédia mostrado em momentos específicos:

- **Antes da ronda** — Mostrado depois da animação de introdução da ronda
- **Depois da ronda** — Mostrado depois do encerramento da ronda
- **Antes do encerramento da ronda** — Mostrado depois da última pergunta, mesmo antes do encerramento
- **Durante o encerramento da ronda** — _(apenas áudio)_ Toca enquanto as classificações são apresentadas
- ...

📘 Para tipos de ficheiro suportados e dicas de utilização, consulta o [guia de anexos](../editor/006-attachments.md).

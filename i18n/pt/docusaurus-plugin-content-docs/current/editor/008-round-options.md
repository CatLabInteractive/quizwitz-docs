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

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ Isto só tem efeito em tipos de ronda e de pergunta em que o feedback normalmente seria adiado, como perguntas abertas ou rondas relâmpago.

📘 Consulta os [tipos de pergunta](../question-types/000-question-types.md) para mais informações sobre o momento e o comportamento do feedback.

---

## 🏆 Opções de pontuação {#scoring}

O QuizWitz oferece pontuação flexível para manter tudo justo e envolvente para todos os jogadores.

- **Time-based scoring** - Players earn more points for faster answers.
  - Para a maioria dos tipos de pergunta, os pontos baseados no tempo diminuem **continuamente por microssegundo**: quanto mais rápido responderes, mais pontos ganhas.
  - Para **perguntas abertas**, os pontos baseados no tempo são divididos em blocos. Por exemplo: as respostas no primeiro bloco (por exemplo, nos primeiros segundos) ganham **100%** da parte baseada no tempo, o bloco seguinte ganha **80%**, e assim por diante. Isto ajuda a equilibrar as coisas para quem escreve mais devagar.

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - Por predefinição, **75%** dos pontos são fixos (toda a gente que responde corretamente recebe estes pontos, independentemente da rapidez).
  - Só os restantes **25%** são influenciados pela rapidez com que os jogadores respondem.

> 💡 Ajustar esta definição permite-te tornar as rondas mais baseadas em conhecimento ou mais baseadas em rapidez, dependendo do estilo do teu quiz.

Estas opções de pontuação encontram-se no painel de opções da ronda ao editar uma ronda.

---

## 📜 Instruções do Quizmaster

Podes adicionar um **texto de introdução** personalizado que aparecerá somente na App Quizmaster no início da ronda. Use isto para curtir o questionário ou adicionar um toque pessoal.

---

## 📎 Anexos

Melhora a tua ronda com multimédia mostrado em momentos específicos:

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- ...

📘 Para tipos de ficheiro suportados e dicas de utilização, consulta o [guia de anexos](../editor/006-attachments.md).

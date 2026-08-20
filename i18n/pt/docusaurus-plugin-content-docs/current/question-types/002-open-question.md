---
id: open-question
title: Pergunta aberta
---

# 💬 Pergunta aberta

Uma pergunta aberta permite que os jogadores digitem a resposta livremente usando o teclado. Este modo é perfeito para perguntas em que queres respostas escritas — por exemplo, nomes, números ou explicações curtas.

---

![Exemplo: pergunta aberta sobre música](/images/question-modes/open-question/open-question.png)

---

## 📝 Como funciona

- **Pergunta:** Pede uma resposta específica num campo de texto livre (exemplo: “Que dupla interpreta esta música?”).
- **Resposta:** Os jogadores digitam a sua resposta. Podes fornecer várias respostas aceites para validação automática.
- **Anexos:** Adiciona áudio, imagens ou vídeo como pista (por exemplo, reproduzir um excerto de música).
- **Feedback:** Depois de responderem, os jogadores veem se a resposta foi marcada como correta ou não. Também podes fornecer feedback ou explicações adicionais.

---

## ⚙️ Definições expandidas

As perguntas abertas oferecem várias definições para se ajustarem ao teu quiz:

- **Várias respostas aceites:** Adiciona grafias alternativas, abreviaturas ou sinónimos para uma autocorreção mais flexível.
- **Pontuação baseada no tempo:** Recompensa respostas mais rápidas (vê “Pontuação” abaixo).
- **Forçar correção automática:** Ativa isto para permitir que o jogo marque automaticamente as respostas corretas com base na lista que forneceste.
  - Se não estiver habilitado (o padrão para a maioria dos jogos ao vivo), as respostas abertas precisam ser revisadas e pontuadas manualmente usando o [Aplicativo do Jury](../quizmaster/004-jury-app.md).

Para saberes mais sobre estas opções, vê [escrever perguntas](../editor/005-writing-questions.md).

---

## 🏆 Pontuação para perguntas abertas

A pontuação nas perguntas abertas foi pensada para ser justa, mesmo para quem digita mais devagar:

- A **pontuação baseada no tempo** divide os pontos disponíveis em blocos, não numa contagem decrescente rígida por milissegundo.
- Por exemplo, responder no primeiro bloco (por exemplo, nos primeiros 5 segundos) dá a pontuação total; o bloco seguinte dá 80%, e assim por diante. Isto ajuda a reduzir a penalização para quem digita mais devagar.
- Por predefinição, apenas **25%** dos pontos dependem da velocidade — os restantes **75%** são fixos, por isso toda a gente que responde corretamente recebe a maior parte dos pontos, independentemente da velocidade de digitação.

> ⚙️ **Dica:** Podes ajustar ainda mais o comportamento da pontuação e outras definições nas [Opções da ronda](../editor/008-round-options.md).

---

## 🧑‍⚖️ Revisão do júri no QuizWitz Live

Em **QuizWitz Live**, questões abertas geralmente requerem uma revisão manual com o [Aplicativo Jury](../quizmaster/004-jury-app.md):

- O aplicativo Jury permite que membros do júri aceitem, rejeite ou ajuste a pontuação para respostas abertas.
- A correspondência fonética e alternativa ajuda, mas o julgamento humano é essencial para uma pontuação justa e para valorizar a criatividade.
- Para obter instruções completas e funcionalidades, veja a [Documentação do Aplicativo do Jury](../quizmaster/004-jury-app.md).

---

## 💡 Dicas para ótimas perguntas abertas

- **Sê específico:** Diz aos jogadores exatamente o que queres que respondam.
- **Antecipa variações:** Adiciona abreviaturas comuns, grafias alternativas ou sinónimos às respostas aceites.
- **Usa anexos:** Adiciona áudio, imagens ou vídeo para tornar a tua pergunta mais clara ou mais envolvente.
- **Coordena com o teu júri:** Garante que o teu júri sabe o que aceitar em respostas subjetivas ou complicadas.

---

Para saberes mais sobre anexos e feedback, vê a [documentação de anexos](../editor/006-attachments.md).

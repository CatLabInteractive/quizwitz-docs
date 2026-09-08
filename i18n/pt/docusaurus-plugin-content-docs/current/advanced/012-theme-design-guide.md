---
id: theme-design-guide
title: Guia de design de temas
---

# Guia de design de temas

[Temas](/docs/advanced/theming) explica como é construído um tema QuizWitz: no Adobe Animate, exportado como biblioteca CreateJS. Esta página trata do passo anterior: o **design** do tema.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Esta página descreve essa forma e serve ao mesmo tempo de lista de entregáveis quando pedes um orçamento a um designer.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Se só queres mudar cores, tipos de letra e fundos, não precisas de nada disto: personaliza antes o [tema Emerald](/docs/advanced/emerald-theme).
:::

:::info[Vê-lo a funcionar]
Todos os ecrãs aqui descritos podem ser jogados ao vivo, com dados de exemplo, no **testador de temas** em [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Carrega um tema e apresenta um menu de ecrãs de teste: perguntas com e sem anexo, a distribuição das respostas para um grupo pequeno e para um grupo grande, a classificação, as intros das rondas, o ecrã de ligação com e sem logótipo do cliente, e assim por diante. Acrescenta `?theme=emerald` ao endereço para veres o [tema Emerald](/docs/advanced/emerald-theme). Quem constrói o tema usa a mesma página para o verificar enquanto o monta.
:::

---

## O que estás a desenhar

Um jogo de QuizWitz é jogado por uma sala inteira ao mesmo tempo, e há sempre dois ecrãs envolvidos:

- **O ecrã de jogo** - um projetor ou uma televisão, 1920 × 1080. Perguntas, respostas, como se distribuíram as respostas da sala, a classificação. É isto que desenhas.
- **O telemóvel de cada jogador**, onde escreve a sua resposta. É uma página web com uma disposição fixa; recebe o estilo a partir da tua lista de cores, não és tu que a dispões.

Um tema é toda a pele visual do ecrã de jogo: fundo, tipografia, cor, a forma como é apresentada uma pergunta com quatro opções, como se constrói a classificação, como é anunciada uma ronda.

---

## Eight frames and an element sheet

O jogo tem dezenas de estados de ecrã distintos, mas a maioria são variantes da mesma disposição. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Um ecrã sem grafismos próprios recorre a uma moldura geral.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Moldura                                                         | Also covers                                                               |
| - | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1 | [General frame](#frame-1---the-general-frame)                   | Thirteen screen states with no artwork of their own                       |
| 2 | [Connect screen](#frame-2---the-connect-screen)                 | Draw it twice: with a client logo and without one         |
| 3 | [Waiting screen](#frame-3---the-waiting-screen)                 | -                                                                         |
| 4 | [Question screen](#frame-4---the-question-screen)               | -                                                                         |
| 5 | [Question with attachment](#frame-5---question-with-attachment) | The full-screen attachment, and attachments shown between questions       |
| 6 | [Answer screen](#frame-6---the-answer-screen)                   | The answer screen for open questions and for questions with an attachment |
| 7 | [Standings and winner](#frame-7---standings-and-winner)         | The standings between rounds and the final winner                         |
| 8 | [Round intro](#frame-8---the-round-intro)                       | All six round categories                                                  |

:::note[About the screenshots]
Os ecrãs abaixo vêm de um tema existente. They show **which elements appear on each screen and when**. Não são uma referência de estilo _nem_ de disposição: onde este tema coloca a sua pergunta, as suas opções e o seu temporizador é decisão dele, e a tua pode ser completamente diferente.
:::

### Moldura 1 - a moldura geral

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. O seletor de perguntas e a pergunta longa podem ter uma composição própria, se assim o quiseres; caso contrário usam esta moldura.

Dois momentos de jogo na mesma moldura: um seletor de perguntas e uma escada de pontos.

![A moldura geral com um seletor de perguntas de três linhas](/images/theme-design/frame1-general-multiquestion.png)

![A moldura geral com uma escada de pontos de cinco níveis](/images/theme-design/frame1-general-strikeladder.png)

Repara no pouco que têm em comum. O seletor põe as suas três linhas dentro de um painel com contorno; a escada não tem painel nenhum, apenas linhas separadas por filetes finos. O que os dois partilham é o fundo e a faixa de cabeçalho por cima: tudo o que está abaixo disso pertence ao ecrã concreto e é preenchido pelo jogo, não por ti.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. O que esta moldura tem de fazer é suportá-los: desenha a área de conteúdo como uma zona vazia, neutra e ampla, que funcione igualmente bem com um painel com contorno, com uma lista despida e com uma tabela de linhas. Um fundo carregado ao centro, ou um cabeçalho que só funciona com um painel encaixado logo por baixo, é onde isso se parte.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Ecrã de ligação com um logótipo do cliente](/images/theme-design/frame2-connect.png)

![Ecrã de ligação sem logótipo do cliente](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Ecrã de espera](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Ecrã da pergunta com quatro opções de texto](/images/theme-design/frame3-question-options.png)

![Ecrã da pergunta com bandeiras como opções de resposta](/images/theme-design/frame3-question-emoji.png)

Uma pergunta sem opções: os jogadores escrevem a resposta no telemóvel. O ecrã está quase vazio e o temporizador passa a ser o elemento principal:

![Pergunta aberta apenas com a pergunta e um temporizador grande](/images/theme-design/frame3-question-open.png)

O momento em que o tempo acaba. O balão de feedback aparece por cima do ecrã e o temporizador fica vazio:

![Ecrã da pergunta a mostrar o estado de tempo esgotado](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. O anexo é redimensionado para caber dentro da caixa que desenhas, por isso tanto uma imagem horizontal como uma vertical têm de ficar aceitáveis lá dentro.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Ecrã da pergunta com uma imagem ao centro](/images/theme-design/frame4-question-attachment.png)

Um anexo sozinho, a preencher o ecrã:

![Anexo em ecrã inteiro](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Primeiro a distribuição, ainda sem nada assinalado:

![Ecrã da resposta a mostrar a distribuição](/images/theme-design/frame5-answer-mc-spread.png)

Depois a opção correta é assinalada e as erradas são riscadas:

![Ecrã da resposta com a opção correta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

E se a pergunta trouxer uma explicação, cai um balão por cima dos grafismos. Deixa-lhe espaço: aterra por cima do que quer que tenhas desenhado:

![Ecrã da resposta com o balão de explicação](/images/theme-design/frame5-answer-mc-explanation.png)

Com um grupo pequeno, o mesmo momento é uma lista de pontuações em vez de um gráfico:

![Ecrã da resposta para um grupo pequeno](/images/theme-design/frame5-answer-mc-small.png)

Numa pergunta aberta, o gráfico mostra quantos jogadores acertaram:

![Ecrã da resposta para uma pergunta aberta](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Classificação com seis linhas de jogador](/images/theme-design/frame6-roundoutro.png)

A contagem decrescente final nomeia um jogador de cada vez, do último lugar ao primeiro: lugar, pontuação e nome da equipa em destaque. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![A contagem decrescente do vencedor a nomear um jogador](/images/theme-design/frame6-winner-countdown.png)

![A classificação final](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Há seis categorias: ciência e tecnologia, natureza, entretenimento e música, desporto, arte, história.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Intro da ronda para a categoria natureza](/images/theme-design/frame7-roundintro-nature.png)

![Intro da ronda para a categoria ciência](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Sem personagem, a intro da ronda passa a ser um momento gráfico, tipográfico ou ilustrativo. Duas abordagens mantêm o trabalho em proporção: uma composição com uma variante de cor ou de ícone por categoria, ou um único anúncio universal em que só muda o nome da ronda. Seis intros verdadeiramente diferentes dão muito trabalho para uns segundos de ecrã.

---

## A folha de elementos

Dois grupos de elementos, numa só folha, cada um desenhado uma vez e reutilizado em todo o lado.

**Blocos de conteúdo.** Estes preenchem a área de conteúdo da moldura geral. Os ecrãs que recorrem a ela são montados a partir deles, por isso o que desenhas aqui decide o aspeto de todos:

- um **painel**: preenchimento, contorno, raio dos cantos - o contentor onde assenta uma lista ou um bloco de texto
- uma **linha de lista**: a unidade que se repete em qualquer lista, com fundo próprio ou sem ele
- um **separador**: o filete entre linhas, onde não há painel
- um **par etiqueta-valor**: uma etiqueta curta à esquerda, um valor à direita

**Controlos.** Desenhados uma vez, usados em todos os ecrãs:

- um **botão** nos seus quatro estados: repouso, sobreposição do cursor, premido, desativado
- os símbolos de **certo** e **errado**
- uma **barra de deslocamento**, uma **caixa de verificação**, uma **lista pendente**
- onde fica o **logótipo QuizWitz**

---

## O que já está decidido

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Que ecrãs recorrem à moldura geral, e como.**
- **Como as seis categorias são associadas aos grafismos da intro da ronda.** Essa associação é uma definição de configuração, por isso uma mesma intro pode ser reutilizada para várias categorias.
- **Todo o ritmo e todas as durações de animação.**
- **O som.** Um tema pode trazer música e efeitos sonoros próprios, mas isso é um entregável à parte e não faz parte do briefing de design.

---

## Regras de design

Nenhuma delas limita o teu design visual. Dizem respeito à forma como o ficheiro é construído.

### Formato

- **1920 × 1080 pixéis**, exatamente. Uma moldura por ecrã.
- Trabalha **em vetorial** sempre que possível. Onde usares rasterizado (fotografias, texturas): pelo menos 2× o tamanho de apresentação.
- O documento do Animate corre a **24 fotogramas por segundo**. Relevante se forneceres ideias de movimento.
- Mantém uma **margem de 5%** nas extremidades livre de informação essencial. Os projetores cortam.

### Estrutura de camadas - a regra que mais importa

**Tudo o que se possa mover, aparecer ou mudar de valor fica numa camada própria com nome próprio.** Nada fundido, nada achatado.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

O que pode ser fundido: grafismos de fundo puramente decorativos que funcionem como uma única imagem fixa.

Esta é a única regra que dói mesmo quando não é seguida: os grafismos têm depois de ser desmontados ou redesenhados, que é exatamente o custo que esta forma de trabalhar pretende evitar.

### Efeitos que não sobrevivem

O motor desenha sobre uma tela HTML5. Estes têm de ser **fundidos na imagem** ou deixados de fora:

| Effect                                                            | What to do instead          |
| ----------------------------------------------------------------- | --------------------------- |
| Live blur, drop shadows and glow as filters                       | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)        | Resolve them to flat colour |
| Efeitos de camada e camadas de ajuste                             | Bake them in                |
| Gradientes **dentro** de texto, ou texto com contorno por caráter | Leave them out              |
| Máscaras que mudam a cada fotograma                               | Leave them out              |

Gradientes em formas não há problema. Transparência não há problema. Sombras como grafismos fixos não há problema.

### Como se comporta o texto

É aqui que desenhar para o QuizWitz mais se afasta do trabalho de design habitual.

**Não defines um corpo de letra. Desenhas uma caixa.**

Todo o texto é desenhado ao vivo por um componente que recebe duas coisas: uma cadeia de texto e o retângulo que desenhaste. Depois procura **o maior corpo de letra com o qual essa cadeia, repartida por várias linhas, ainda cabe dentro da caixa**. Uma cadeia longa encolhe para caber; uma curta cresce até a caixa ficar cheia.

![Um seletor em que três linhas de comprimentos diferentes recebem cada uma um corpo diferente](/images/theme-design/frame1-general-multiquestion.png)

Três linhas, três caixas idênticas - e três corpos de letra completamente diferentes, apenas porque o texto é mais curto ou mais longo. "Where is love" fica com toda a altura; a pergunta por cima tem de se arranjar com duas linhas pequenas. As etiquetas da esquerda comportam-se da mesma maneira.

Daqui decorre o seguinte:

- **A mesma pergunta fica diferente noutro jogo.** Uma pergunta de seis palavras aparece grande e a preencher o ecrã; uma de trinta e cinco palavras aparece pequena em cinco linhas, exatamente na mesma caixa. Ambas têm de ficar bem.
- **Desenha cada caixa de texto duas vezes.** Enche-a uma vez com um exemplo muito curto e outra com um muito longo, e confirma que a composição aguenta nos dois casos. Como regra prática: uma opção de resposta vai de uma a cerca de oito palavras, uma pergunta de cinco a quarenta, um nome de jogador de dois a vinte carateres.
- **Não contes com um número fixo de linhas.** Um título que fica "sempre numa linha" aqui não existe.
- **Não alinhes o texto oticamente com mais nada.** O texto que tem de acertar com um filete ou com uma forma vai deslizar assim que ficar mais curto ou mais longo. Usa caixas suficientemente amplas e um alinhamento (à esquerda, centrado, à direita) em vez de posições exatas.
- **Doze idiomas.** As palavras compostas alemãs são longas, e o húngaro não é mais benevolente. Uma caixa que fica justa em inglês desce para um tamanho ilegível em alemão.
- **Podem aparecer emoji dentro do texto.** Os jogadores escolhem um ao lado do nome da equipa, e uma pergunta ou uma opção pode conter um: às vezes uma opção não é mais do que um emoji. São desenhados a cores e são mais altos do que as letras à sua volta.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Não: em que corpo.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### O temporizador - obrigatório, e é uma animação

**Every question screen has a timer**; the room has to see how much time is left.

**O temporizador não é um número que conta, mas uma animação cuja cabeça de leitura o motor desloca.** Desenhas uma progressão de "cheio" a "vazio": uma barra a esvaziar, um anel a fechar, uma ampulheta, uma linha a encolher. O motor reproduz essa animação exatamente à velocidade que faz coincidir o último fotograma com o fim da pergunta.

Daqui decorre o seguinte:

- **A duração da pergunta não é fixa.** É definida por quiz: muitas vezes de vinte a trinta segundos, mas pode ser mais curta ou mais longa. A tua animação é esticada ou comprimida para encaixar.
- **Sem números nem marcas por segundo.** Um temporizador que conta "20, 19, 18…" deixa de ser verdadeiro assim que a duração muda.
- **Os últimos segundos são o momento de maior tensão do jogo.** Ajuda que a progressão se torne mais clara ou mais urgente para o fim.
- **Legível do fundo da sala**, num relance.
- **Vários temporizadores são permitidos.** Uma barra em cima e um anel junto à pergunta são ambos acionados, desde que cada um se chame `timer`.

Entrega o temporizador como uma série de fotogramas-chave ou como uma descrição da progressão: "a barra esvazia da direita para a esquerda e passa de verde a vermelho" chega.

### Os emoji voadores aterram por cima de tudo

Cada jogador escolhe um emoji ao entrar, e o jogo atira esses emoji pelo ecrã. They are drawn by the engine on a layer above the theme. **Aqui não há nada para desenhares** - mas há algo à volta do qual desenhar, porque não são um adorno raro.

Aparecem em três momentos:

- **Quando um jogador responde.** O emoji desse jogador sobe a partir da margem inferior numa posição horizontal aleatória, descreve um arco e volta a cair para fora do enquadramento.
- **Quando um jogador atira um.** Os jogadores podem atirar o seu emoji a partir do telemóvel; o ângulo e a velocidade vêm do gesto de deslize, e ele parte do centro inferior, a rodopiar.
- **Quando um lugar é revelado na contagem decrescente final.** Uma rajada dos emoji do jogador nomeado: vinte para um lugar comum, cinquenta para o terceiro, setenta e cinco para o segundo e **cento e cinquenta para o vencedor.**

O que isso significa para o design:

- **Mantém o terço inferior dos ecrãs de classificação e de vencedor livre de tudo o que seja pequeno ou crítico.** Durante a contagem decrescente aquilo ali em baixo fica mesmo cheio.
- **Parte do princípio de que vão chocar com a tua paleta.** São emoji a cores plenas vindos de todos os cantos da tabela Unicode, e nenhum tema os controla. Um design que só se aguenta dentro de uma gama de cores apertada vai parecer acidental durante esses segundos.
- **Os lançamentos são suprimidos enquanto estiver a ser mostrada uma imagem ou um vídeo**, por isso os ecrãs com anexo mantêm-se limpos.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Tipos de letra

- **Os tipos de letra têm de poder ser incorporados.** É preciso o ficheiro `.ttf` ou `.otf`, mais uma licença que permita a incorporação numa aplicação. Um tipo de letra licenciado apenas como webfont, ou apenas para impressão, não pode ser usado. Verifica isto antes de desenhares com ele; depois é uma correção cara.
- Tipos de letra com ascendentes ou descendentes invulgarmente grandes podem ser compensados, mas assinala-o se usares algum.

### A cor como lista

O tema lê uma lista de cores de um ficheiro de configuração, e os telemóveis dos jogadores recebem o estilo a partir dessa mesma lista. Entrega a tua paleta como uma **lista com nomes**, e não apenas como cores nos grafismos:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

No ecrã de jogo são permitidos gradientes: indica-os como dois valores hexadecimais.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Se as deixares de fora, recaem em predefinições internas - branco, cinzento, vermelho, preto e branco - que raramente combinam com um design.

### O logótipo QuizWitz

Os designs à medida incluem o logótipo QuizWitz. Reserva-lhe um lugar onde não atrapalhe o design.

---

## O que entregar

### Ficheiro de origem - de preferência Illustrator

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                                                          | Use it for                                 |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. É exatamente esse passo que poupa os grafismos de terem de ser reconstruídos à mão.                                                                     | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                                                           | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Se ainda assim usares o Figma, entrega **cada elemento separadamente em SVG**, com nomes de ficheiro correspondentes aos nomes das camadas, para que a estrutura possa ser reconstruída à mão. | The concept phase, if you are faster in it |

Estrutura do ficheiro:

- One artboard per screen, named after the frames above.
- As peças reutilizáveis (botão, linha de jogador, opção de resposta, temporizador) como **símbolos** ou componentes, não como cópias soltas.
- Nomes de camada em inglês, sem espaços: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Cores como amostras com nome e texto como estilos com nome, em vez de definidos objeto a objeto.

### Lista de entregáveis

1. O **ficheiro de origem**, estruturado como acima.
2. **Cada moldura em PNG**, 1920 × 1080 - uma referência de como deve ficar. Para a moldura 2, tanto a versão com como a versão sem logótipo do cliente.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Cada elemento gráfico separado em PNG transparente a 2×**, numa pasta, com o nome de ficheiro igual ao nome da camada.
5. **O temporizador** como fotogramas-chave ou como descrição escrita da progressão.
6. **Os tipos de letra** em `.ttf` ou `.otf`, com comprovativo de licença.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Meia página de notas**: qual é a ideia, como devem aparecer as opções, o que se move e o que fica parado. Não uma justificação de design de dez páginas: quem constrói o tema precisa de saber o que construir. As ideias de movimento podem ser descritas ou entregues como um animatic tosco.

### Ordem de trabalho

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Anexo - nomes dos símbolos

Para ficar completo, e para quem quiser saber exatamente onde vão parar os seus grafismos. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Usar estes nomes como nomes de camada poupa um passo de tradução.

| Moldura                                                  | Nome do símbolo                                                                                                                           | Peças obrigatórias                                                                                                                                                                                                   |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Moldura geral                  | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` opcional                                                                         | `placeholder` (a área de conteúdo); caixa de texto `title` opcional                                                                                                                               |
| 1b. Seletor de perguntas, pergunta longa | `MultiQuestionScreen`, `LongQuestionScreen`; ambos opcionais, recorrem à moldura geral                                                    | seletor: marcador `questions`, `timer`; pergunta longa: marcador `question`                                                                                                          |
| 2. Ecrã de ligação                | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` opcional, com um marcador `logo`                                         | `instructions.line1` a `line5`, `connectedPlayers`; marcador `qrCode` com a etiqueta de fotograma `showQrCode` opcional                                                                                              |
| 3. Ecrã de espera                 | `PendingScreen`; `PendingScreenWithLogo` opcional                                                                                         | `header.text`                                                                                                                                                                                                        |
| 4. Ecrã da pergunta               | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` a `option4`, etiquetas de fotograma `showOptions` e `showFeedback`                                                                                              |
| 5. Pergunta com anexo             | `QuestionScreenAttachment`                                                                                                                | como acima, mais `attachment.placeholder`                                                                                                                                                                            |
| 5b. Anexo em ecrã inteiro                | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                        |
| 6. Ecrã da resposta               | `AnswerPieScreen`; `AnswerPieScreenAttachment` opcional                                                                                   | `option1` a `option4`, `answer.text`, `feedback.text`                                                                                                                                                                |
| 6b. Resposta a pergunta aberta           | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; variantes `…Attachment` opcionais                                                          | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                                |
| 7. Classificação                  | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` e `PlayerScoreNoImage` opcionais                                | `header.text`, `players`, `feedback.text` (`playAgain.text` opcional); na linha: `position`, `name`, `score`, `avatar` opcional                                                   |
| 8. Intro da ronda                 | um ou mais símbolos com qualquer nome; o ficheiro de configuração associa cada uma das seis categorias a um símbolo                       | -                                                                                                                                                                                                                    |
| -                                                        | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                                   |
| -                                                        | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | não precisam de grafismos próprios - construídos a partir do que aparece nas tuas molduras                                                                                                                           |
| -                                                        | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | só aparecem na aplicação de ambiente de trabalho, não num quiz ao vivo. Não fazem parte do briefing: são retirados do modelo do tema e restilizados com o teu fundo e os teus botões |

Os símbolos de intro da ronda do tema de origem chamam-se `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` e `RoundIntroTedCultHist`; arte e história partilham o último. O "Ted" nesses nomes é um resto da personagem do tema original e não significa que tenha de aparecer nelas uma personagem.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. O elemento `timer` é um clipe de filme com uma linha temporal própria; o motor lê o seu número de fotogramas e desloca a cabeça de leitura proporcionalmente ao tempo decorrido, no máximo 24 vezes por segundo.

### O que o ficheiro de configuração retira do teu design

```json
{
  "fontFiles": { "<body font>": "fonts/body.ttf", "<heading font>": "fonts/heading.ttf" },
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "_container_": "#…", "_timerBackground_": "#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…", "player": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "optionColors": [ "#…", "#…", "#…", "#…" ],
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "remoteColors": {
    "background": "#…", "text": "#…", "outline": "#…",
    "options-outline": "#…", "container-background": "#…", "container-text": "#…"
  },
  "roundIntros": { "science": "<symbol>", "nature": "<symbol>", "entertainment": "<symbol>",
                   "sports": "<symbol>", "art": "<symbol>", "history": "<symbol>" },
  "overlay": "light | dark"
}
```

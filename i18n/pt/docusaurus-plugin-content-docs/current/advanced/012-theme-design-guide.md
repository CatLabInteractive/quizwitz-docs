---
id: theme-design-guide
title: Guia de design do tema
---

# Guia de design do tema

[Theming](/docs/advanced/theming) explica como um tema QuizWitz é construído: em Adobe Animate, exportado como uma biblioteca CreateJS. This page covers the step before that - **designing** the theme.

Está escrito para uma concepção gráfica e presume que a concepção e a produção de animais são feitas por diferentes pessoas. Poucos designers ainda trabalham no Adobe Animate, portanto um arranjo comum é que um designer entrega obras de arte e outra pessoa monta o tema. Isso funciona bem, mas apenas se a obra de arte for entregue de uma forma que a construção possa efectivamente utilizar. This page describes that shape, and doubles as the list of deliverables when you ask a designer for a quote.

:::tip
If you only want to change colours, fonts and backgrounds, you do not need any of this - customise the [Emerald theme](/docs/advanced/emerald-theme) instead.
:::

:::info[See it running]
Every screen described here can be played live, with sample data, in the **theme tester** at [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). It loads a theme and offers a menu of test screens: questions with and without an attachment, the answer spread for a small and a large group, the standings, the round intros, the connect screen with and without a client logo, and so on. Add `?theme=emerald` to the address to see the [Emerald theme](/docs/advanced/emerald-theme). Whoever builds the theme uses the same page to check it while it is being assembled.
:::

---

## O que você está desenhando

Um jogo de QuesizWitz é jogado por uma sala inteira de uma vez e há sempre duas telas envolvidas:

- **The game screen** - a projector or TV, 1920 × 1080. Perguntas, respostas, como as respostas da sala foram difundidas, as posições. Isso é o que vocês desenham.
- **Telefone de cada jogador**, onde eles digitam sua resposta. That is a web page with a fixed layout; it is styled from your colour list, not laid out by you.

A theme is the complete visual skin of the game screen: background, typography, colour, the way a question with four options is presented, how the standings build up, how a round is announced.

---

## Seven frames and an element sheet

The game has dozens of distinct screen states, but most are variants of the same layout. **You design seven frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Um ecrã sem arte de sua própria estrutura volta a uma moldura geral.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule - and that furniture is a design decision, not something that can be inferred from a background.

| #     | Frame                         | O que há nisso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | O que é derivado dele                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Quadro Geral**              | O fundo, um título de cabeçalho e uma área de conteúdo vazia abaixo dele. Not a finished composition - the frame the rest is built inside.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Treze estados de tela: explicação redonda, standings, introdução do jogador, variações de múltipla escolha, questões longas, avisos de assento, configurações. Each fills that content area its own way with elements from the sheet, so it has to hold things that look nothing alike. The question picker and the long question may get a composition of their own if you want them to; otherwise they use this frame. |
| **2** | **Connect and waiting**       | Two screens, not one. The **connect screen** is what the room sees to join: five lines of instruction, a join code, a QR code, a line with the number of connected players, and a list of players trickling in. Design it **twice**: with a client logo and without one. The join code and the QR code are generated by the engine; reserve a square for the QR code. The **waiting screen** stays up while the quizmaster reads a question aloud and is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **3** | **Tela de perguntas**         | A pergunta, um temporizador, quatro opções de resposta, uma linha de feedback. A tela da sala parece mais longa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **4** | **Question with attachment**  | O mesmo arranjado em torno de uma imagem ou vídeo. Pode ser uma composição diferente do quadro 3. The attachment is scaled to fit inside the box you draw, so both a landscape and a portrait image must look acceptable in it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Also the full-screen attachment variant, and attachments shown between questions.                                                                                                                                                                                                                                                                                                                                                                                        |
| **5** | **Responder tela**            | Qual resposta estava correta, como as respostas da sala foram espalhadas pelas opções, e uma linha de feedback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Also the answer screen for open questions and for questions with an attachment.                                                                                                                                                                                                                                                                                                                                                                                          |
| **6** | **Classificações e vencedor** | A list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element - it is repeated six times by default, up to ten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ambas as posições entre as rodadas e o vencedor final.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **7** | **Introdução à rodada**       | Um pequeno anúncio por categoria redonda. Existem seis categorias: ciência e tecnologia, natureza, entretenimento e música, esporte, arte, história. One design may serve several categories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Todas as seis categorias.                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### The element sheet

Two groups of elements, on one sheet, each drawn once and reused everywhere.

**Content building blocks.** These fill the content area of the general frame. The screens that fall back to it are assembled from these, so whatever you draw here decides how all of them look:

- a **panel**: fill, border, corner radius - the container a list or a block of text sits in
- a **list row**: the repeating unit of any list, with its own background or none
- a **separator**: the rule between rows, where there is no panel
- a **label and value pair**: a short label on the left, a value on the right

**Controls.** Drawn once, used on every screen:

- a **button** in its four states: rest, hover, pressed, disabled
- the **correct** and **wrong** symbols
- a **scrollbar**, a **checkbox**, a **select**
- where the **QuizWitz logo** sits

### O que é decidido para você

- **The players' phones.** A fixed HTML layout, styled from your colour list.
- **The handful of things the engine draws itself.** Some furniture is drawn in code rather than taken from the theme - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Those take their colour from the list in **Colour as a list** and nothing else, so that list is the only control you have over them.
- **Quais telas voltam para o quadro geral e como.**
- **How the six categories map onto the round intro artwork.** That mapping is a configuration setting, so one intro can be reused for several categories.
- **Todo o tempo e duração da animação.**
- **Sound.** A theme can carry its own music and sound effects, but that is a separate deliverable and not part of the design brief.

### Um caractere é opcional

O tema de QuizWitz tem um caractere que fala e reagem. Nada requer uma: o validador de tema só avisa sobre o elemento `ted`; ele não falha sem ele. The [Emerald theme](/docs/advanced/emerald-theme) ships without a character, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Sem um personagem, a introdução à rodada se torna um momento gráfico, tipográfico ou ilustrativo. Duas abordagens mantêm o trabalho em proporção: uma composição com cor ou ícone de variante por categoria, ou um único anúncio universal com apenas a mudança de nome da rodada. Seis entregues genuinamente diferentes é muito trabalho por alguns segundos de tempo de tela.

---

## Como estes quadros se parecem na prática

As telas abaixo vêm de um tema existente. They are here to show **which elements appear on each screen and when**. They are not a reference for style _or_ layout: where this theme puts its question, its options and its timer is its own decision, and yours can differ completely. Read them for what has to be present, not for where it goes. All of them, and more, can be played in the [theme tester](https://client.quizwitz.com/test.html).

### Frame 1 - the general frame

Two game moments on the same frame: a question picker and a points ladder.

Look at how little they have in common. The picker puts its three rows inside a panel with a border; the ladder has no panel at all, just rows separated by thin rules. What the two share is the background and the header band above them - everything below that belongs to the individual screen and is filled by the game, not by you.

![O quadro geral com um seletor de perguntas de três linhas](/images/theme-design/frame1-general-multiquestion.png)

![O quadro geral com uma escada de cinco pontos de nível](/images/theme-design/frame1-general-strikeladder.png)

That panel and those rules are design decisions, and they are yours to make - they come from the **element sheet**, not from this frame. What this frame has to do is hold them: design the content area as an empty, neutral, roomy zone that works with a bordered panel, a bare list and a table of rows alike. A background that is busy in the middle, or a header that only works with a panel tucked right underneath it, is where that breaks.

### Frame 2 - connect and waiting

Com um logotipo de cliente ao lado do código de adesão, e sem um, onde a própria arte do tema carrega a tela:

![Conectar tela com um logotipo do cliente](/images/theme-design/frame2-connect.png)

![Conectar tela sem um logotipo do cliente](/images/theme-design/frame2-connect-nologo.png)

The waiting screen is a separate composition rather than a variant of the connect screen - the two share only a background. It stays up while the quizmaster reads a question aloud, and it is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game, so it deserves more attention than an empty screen usually gets.

![Esperando tela](/images/theme-design/frame2-pending.png)

### Frame 3 - the question screen

Quatro opções, a questão acima, o temporizador no meio. Note que uma opção não pode consistir em nada além de um emoji.

![Tela de perguntas com quatro opções de texto](/images/theme-design/frame3-question-options.png)

![Tela de perguntas com sinalizadores como opções de resposta](/images/theme-design/frame3-question-emoji.png)

A question with no options - players type their answer on their phone. A tela está quase vazia e o temporizador se torna o elemento principal:

![Abrir pergunta apenas com a pergunta e um grande temporizador](/images/theme-design/frame3-question-open.png)

O tempo acabou. O balão de feedback aparece sobre a tela e o temporizador está vazio:

![Tela de perguntas mostrando o estado do tempo-up](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - attachment

The same parts, rearranged around an attachment area, with the options to the left and right:

![Tela de perguntas com uma imagem no meio](/images/theme-design/frame4-question-attachment.png)

An attachment on its own, filling the screen:

![Full-screen attachment](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - the answer screen

Esta tela passa três minutos. Primeiro o spread, com nada marcado ainda:

![Resposta mostrando o spread](/images/theme-design/frame5-answer-mc-spread.png)

Então a opção correta é marcada e os errados são cruzados:

![Responder à tela com a opção correta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

E se a pergunta contém uma explicação, um balão cai sobre a arte. Leave room for it - it lands on top of whatever you designed:

![Responder à tela com o balão de explicação](/images/theme-design/frame5-answer-mc-explanation.png)

Com um pequeno grupo, o mesmo momento é uma lista de notas em vez de uma carta:

![Responder à tela para um grupo pequeno](/images/theme-design/frame5-answer-mc-small.png)

Para uma pergunta aberta, o gráfico mostra quantos jogadores acertaram:

![Responder à tela para uma pergunta aberta](/images/theme-design/frame5-answer-open.png)

### Frame 6 - standings and winner

As posições depois de uma rodada. A linha do jogador é o elemento que se repete: posição, avatar, nome, pontuação.

![Classificação com seis linhas de jogador](/images/theme-design/frame6-roundoutro.png)

The final countdown names one player at a time, from last place to first - place, score and team name in the spotlight. This is also where the flying emoji are heaviest; see the note further down:

![O vencedor apontando um jogador](/images/theme-design/frame6-winner-countdown.png)

![Os pontos finais](/images/theme-design/frame6-winner.png)

### Frame 7 - the round intro

Um design, opcionalmente com uma variante por categoria:

![Introdução da rodada para a categoria da natureza](/images/theme-design/frame7-roundintro-nature.png)

![Introdução da rodada para a categoria científica](/images/theme-design/frame7-roundintro-science.png)

---

## Regras de design

Nenhum destes limitam seu design visual. Eles são sobre como o arquivo é compilado.

### Formato

- **1920 × 1080 pixels**, exatamente. Um quadro por tela.
- Trabalhe **em veto** onde você puder. Onde você usa quadriculado (fotos, texturas): pelo menos 2× display tam.
- The Animate document runs at **24 frames per second**. Relevante se você fornece ideias de movimento
- Mantenha uma margem de **5%** nas bordas sem informações essenciais. Projetores cultivam.

### Layer structure - the rule that matters most

**Qualquer coisa que possa se mover, aparecer ou alterar valor fica em sua própria camada nomeada.** Nada mesclado, nada nivelado.

Na prática: as quatro opções de resposta são quatro camadas separadas, não uma. O timer é separado do plano de fundo. Um botão e seu rótulo são dois elementos. Uma linha de jogador é um grupo que pode ser duplicado.

O que pode ser mesclado: obra de arte de fundo puramente decorativa que funciona como uma única imagem.

This is the one rule that genuinely hurts when it is not followed - the artwork then has to be pulled apart or redrawn, which is exactly the cost this arrangement is meant to avoid.

### Efeitos que não sobrevivem

O motor se baseia em uma tela de HTML5. Estes devem ser **reservados na imagem** ou excluídos:

- Desfoque ao vivo, solte sombras e brilho como filtros → forneça-os como obra de arte
- Modos de mistura (multiplicar, tela, sobreposição) → resolva-os para a cor plana
- Efeitos de camada e ajuste de camadas
- Gradientes **dentro** do texto, ou texto com contorno por caractere
- Máscaras que variam por quadro

Os gradientes em formas são bonitos. A transparência está bem. Sombras como arte fixa estão bem.

### Como o texto se comporta

É aqui que o design para o QuizWitz difere mais do trabalho normal de design.

**Você não define o tamanho da fonte. Você desenhou uma caixa.**

Todo o texto é desenhado ao vivo por um componente que recebe duas coisas: uma string e o retângulo que você sonha. Em seguida, encontra **o maior tamanho de fonte em que essa string, embrulhada através de linhas, cabe dentro da caixa**. Uma longa cadeia de caracteres encolhe de acordo; uma curta cresce até que a caixa esteja cheia.

![Um seletor onde três linhas de comprimento diferente cada uma tem um tamanho de fonte diferente](/images/theme-design/frame1-general-multiquestion.png)

Three rows, three identical boxes - and three completely different font sizes, purely because the text is shorter or longer. "Onde é amor" fica com a altura completa; a pergunta acima dela tem de se prender com duas linhas pequenas. Os rótulos à esquerda se comportam da mesma maneira.

O que resulta disso:

- \*\*A mesma pergunta parece diferente em outro jogo. \* Uma pergunta de seis palavras parece grande e preenche o ecrã; trinta e cinco palavras são pequenas em cinco linhas, exatamente na mesma caixa. Ambas têm de olhar bem.
- \*\*Projete todas as caixas de texto duas vezes. \* Preencha uma vez com uma amostra muito curta e uma com uma muito longa, e verifique se a composição se mantém em ambos. Por regra uma opção de polegar: uma opção de resposta vai de uma a cerca de oito palavras, uma pergunta de cinco a quarenta, um nome de jogador de dois a vinte caracteres.
- **Não conte com um número fixo de linhas.** Não existe aqui um título que é "sempre em uma linha".
- \*\*Não alinhar texto com mais nada opticalmente. \* Texto que tem que alinhar com uma regra ou uma forma irá derivar assim que for menor ou maior. Use caixas que são cômodo o suficiente e um alinhamento (esquerda, centrada, direita) ao invés de posições exatas.
- **A caixa é um máximo, não uma promessa.** Você projeta a proporção; a caixa de preenchimento varia.
- **Twelve languages.** German compounds are long, and Hungarian is no kinder. Uma caixa que é apertada em inglês cai para um tamanho mal pequeno em alemão.
- **Emoji can appear inside text.** Players pick one next to their team name, and a question or an option can contain one - sometimes an option is nothing but an emoji. Eles são desenhados de cor e são mais altos que as letras ao seu redor.

O que a compilação precisa saber sobre cada caixa de texto: onde está, quão grande é, como está alinhado, qual cor e qual fonte. Não: a que tamanho de ponto.

Duas coisas se seguem que você pode usar: uma caixa grande com texto curto se torna uma composição tipográfica forte por si só, e uma caixa que você deliberadamente torna estreita e alta força o texto em uma coluna. You can use the fitting as a design device - you just should not design against it.

### The timer - required, and it is an animation

**Toda tela de questões tem um temporizador.** Não é opcional; a sala precisa ver quanto tempo sobra. Ambas as questões carregam uma.

**The timer is not a counting number but an animation whose playhead the engine moves.** You design a progression from "full" to "empty" - a bar draining, a ring closing, an hourglass, a shrinking line. O motor reproduz essa animação exatamente com a velocidade que faz o último quadro coincidir com o final da pergunta.

Que segue:

- **The question duration is not fixed.** It is set per quiz - often twenty to thirty seconds, but it can be shorter or longer. Sua animação está esticada ou comprimida para se encaixar. Projeta uma _progressão_, não uma animação de um conjunto de segundos.
- **Nenhum número por segundo ticks.** Um temporizador contando "20, 19, 18…" para de ser verdadeiro assim que a duração muda.
- **Os últimos segundos são o momento mais longo do jogo.** Isso ajuda se a progressão se tornar mais clara ou mais urgente para o final.
- **Lidável do fundo da sala**, de repente.
- **Vários cronômetros são permitidos.** Uma barra no topo e um anel perto da questão são ambos dirigidos, contanto que cada um seja nomeado `timer`.

Supply the timer as a series of keyframes or as a description of the progression - "the bar drains right to left and shifts from green to red" is enough.

### Flying emoji land on top of everything

Every player picks an emoji when they join, and the game throws those emoji across the screen. They are drawn by the engine on a layer above the theme, in whatever colours the player's emoji happens to have. **There is nothing here for you to design** - but there is something to design around, because they are not a rare flourish. They appear at three moments:

- **When a player answers.** Their emoji rises from the bottom edge at a random horizontal position, arcs up and falls back out of frame.
- **When a player flings one.** Players can fling their emoji from their phone; angle and speed come from the swipe, and it launches from the bottom centre, spinning.
- **When a place is revealed in the final countdown.** A burst of the named player's emoji: twenty for an ordinary place, fifty for third, seventy-five for second, and **a hundred and fifty for the winner.**

They always enter from the bottom edge, arc under gravity and fall back out. What that means for the design:

- **Keep the bottom third of the standings and winner screens clear of anything small or critical.** During the countdown it is genuinely crowded down there.
- **Assume they will clash with your palette.** They are full-colour emoji from every corner of the Unicode chart, and no theme controls them. A design that only holds together in a tight colour range will look accidental for those seconds.
- **Flings are suppressed while an image or video is showing**, so the attachment screens stay clean.
- The whole layer can be switched off per game, so do not build a composition that depends on them being there either.

### Fontes

- **Fontes devem estar incorporáveis.** O arquivo `.ttf` ou `.otf` é necessário, mais uma licença que permite incorporar uma aplicação. Uma fonte licenciada apenas como uma webfont, ou apenas para impressão, não pode ser usada. Verifique isto antes de projetar com ele; depois é uma correção cara.
- Fontes com ascendentes ou descendentes invulgarmente grandes podem ser compensadas, mas sinalizem se você usar um.

### Cor como uma lista

The theme reads a colour list from a configuration file, and the players' phones are styled from the same list. Forneça sua paleta como uma **lista nome**, não apenas como cores na arte:

- **Game screen:** main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong.
- **The four answer options:** each with a background and a border colour, plus one flat colour per option for the phones and the charts.
- **Players' phones:** background, text colour, outline colour, option outline colour, and the background and text colour of the answer container.

Gradients are allowed on the game screen: give them as two hex values.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting: the **separator** (the rules between rows where there is no panel, and on the points ladder), the **active**, **inactive** and **selected** states of a row in the question picker, the **dialog** text, and the **front and back of the QR code**. If you leave them out they fall back to built-in defaults - white, grey, red, black and white - which rarely match a design.

### O logotipo do QuizWitz

Os designs personalizados incluem o logotipo do QuesizWitz. Reserve um lugar para ele onde não atrapalha o desenho.

---

## O que entregar acima

### Source file - Illustrator preferred

\*\*Adobe Illustrator (`.ai`) é preferido, e há uma razão concreta. \* O tema é construído no Adobe Animate, que importa arquivos do Illustrator diretamente e converte suas camadas em camadas animadas ou símbolos separados, mantendo os nomes das camadas e deixando os vetores editáveis. Esse é precisamente o passo que impede que a obra de arte seja reconstruída à mão.

Figma ou Photoshop é possível, mas saiba o custo: com Figma tudo passa pela exportação SVG e PNG, e é precisamente aí que se perde a estrutura da camada de que aqui necessitamos. Se você usar a Figura, forneça **cada elemento separadamente como SVG**, com nomes de arquivos correspondentes aos nomes da camada, para que a estrutura possa ser reconstruída manualmente. O Photoshop importa para o Animar com suas camadas intactas, como o Ilustrador, mas dá a você um raster em vez de vetor.

Se você é mais rápido em Figma, use-o na fase de conceitos e entregue a versão final em Illustrator.

Estrutura de arquivo:

- Um quadro por tela, exatamente 1920 × 1080, nomeado a partir dos quadros acima.
- Peças reutilizáveis (botão, linha do jogador, opção de resposta, temporizador) como **símbolo** ou componentes, não como cópias perdidas.
- Nomes de camada em inglês, sem espaços: `question`, `option1` para `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Cores como swatches e texto como estilos nomeados, em vez de definir em cada objeto individualmente.

### Deliverables checklist

1. The **source file**, structured as above.
2. **Each frame as a PNG**, 1920 × 1080 - a reference for how it should look. For frame 2, both the version with and the version without a client logo.
3. **The element sheet** as one artboard: the content building blocks and the controls listed above.
4. **Each separate graphic element as a transparent PNG at 2×**, in one folder, filename matching the layer name.
5. **The timer** as keyframes or a written description of the progression.
6. **Fonts** as `.ttf` or `.otf`, with proof of licence.
7. **The colour list** described above, as hex values.
8. **Half a page of notes**: what the idea is, how the options should appear, what moves and what stays still. Not a ten-page design rationale - whoever builds the theme needs to know what to build. As ideias de movimento podem ser descritas ou fornecidas como um animático grosseiro.

### Order of work

Start with frame 3, the question screen, together with the element sheet, and get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme, and the question screen is the one the room looks at longest. Frames 1 and 2 follow naturally from them; frames 5 to 7 come last.

---

## Appendix - symbol names

Para completar e para quem quiser saber exatamente onde sua obra de arte acaba acabando. **You do not need to read this to do the work**; the seven frames and the element sheet above are enough. Usar estes nomes como nomes de camada salva um passo de tradução.

| Frame                                              | Nome do símbolo                                                                                                                           | Peças requeridas                                                                                                                                                                               |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Quadro geral             | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (the content area); `title` text box optional                                                                                                                 |
| 1b. Question picker, long question | `MultiQuestionScreen`, `LongQuestionScreen`; both optional, fall back to the general frame                                                | picker: `questions` placeholder, `timer`; long question: `question` placeholder                                                                                |
| 2. Ligar tela               | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, with a `logo` placeholder                                      | `instructions.line1` to `line5`, `connectedPlayers`; `qrCode` placeholder with frame label `showQrCode` optional                                                                               |
| r.. Tela de espera | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | cabeçalho.texto\`                                                                                                                                                              |
| 3. Tela de perguntas        | PerguntaTela\`                                                                                                                            | `question.text`, `timer`, `feedback.text`, `option1` para `option4`, frame labels `showOptions` and `showFeedback`                                                                             |
| 4. Question with attachment | AnexoPerguntaTelaTela\`                                                                                                                   | como acima, mais `attachment.placeholder`                                                                                                                                                      |
| 4b Full-screen attachment                          | `Tela de Anexo`                                                                                                                           | `espaço reservado`                                                                                                                                                                             |
| 5. Tela de resposta         | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` para `option4`, `answer.text`, `feedback.text`                                                                                                                                       |
| 5b Resposta à pergunta aberta                      | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` variants optional                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 6. Classificação            | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` and `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in the row: `position`, `name`, `score`, `avatar` optional                           |
| 7. Introdução à rodada      | one or more symbols of any name; the configuration file maps each of the six categories to a symbol                                       | -                                                                                                                                                                                              |
| -                                                  | `CarregandoTela`                                                                                                                          | `texto`, `progresso`                                                                                                                                                                           |
| -                                                  | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no artwork of their own needed - built from what appears in your frames                                                                                                                        |
| -                                                  | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | only shown in the desktop app, not in a live quiz. Not part of the brief: they are taken from the theme template and restyled with your background and buttons |

The stock theme's round intro symbols are called `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` and `RoundIntroTedCultHist`; art and history share the last one. The "Ted" in those names is a leftover from the original theme's character and does not mean a character has to appear in them.

Cada elemento com `.text` depois que ele é uma caixa de texto ajustada como descrita acima: um retângulo que o motor se enche a si mesmo. The `timer` element is a movie clip with its own timeline; the engine reads its frame count and moves the playhead in proportion to elapsed time, at most 24 times per second.

### O que o arquivo de configuração retira do seu design

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

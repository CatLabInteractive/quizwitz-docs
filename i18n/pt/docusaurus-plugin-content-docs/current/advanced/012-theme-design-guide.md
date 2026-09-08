---
id: theme-design-guide
title: Guia de design do tema
---

# Guia de design do tema

[Theming](/docs/advanced/theming) explica como um tema QuizWitz é construído: em Adobe Animate, exportado como uma biblioteca CreateJS. Essa página cobre o passo anterior — **projetando** o tema.

Está escrito para uma concepção gráfica e presume que a concepção e a produção de animais são feitas por diferentes pessoas. Poucos designers ainda trabalham no Adobe Animate, portanto um arranjo comum é que um designer entrega obras de arte e outra pessoa monta o tema. Isso funciona bem, mas apenas se a obra de arte for entregue de uma forma que a construção possa efectivamente utilizar. Esta página descreve essa forma.

:::tip
Se você quiser apenas mudar cores, fontes e fundos, não precisa disso — personalize o [tema de Esmeralda](/docs/advanced/emerald-theme) em vez disso.
:::

---

## O que você está desenhando

Um jogo de QuesizWitz é jogado por uma sala inteira de uma vez e há sempre duas telas envolvidas:

- **A tela compartilhada** — um projetor ou TV, 1920 × 1080. Perguntas, respostas, como as respostas da sala foram difundidas, as posições. Isso é o que vocês desenham.
- **Telefone de cada jogador**, onde eles digitam sua resposta. Essa é uma página da web com um layout fixo; ela é estilizada a partir de suas cores e fontes, não expostas por você.

Um tema é a skin visual completa da tela compartilhada: fundo, tipografia, cor, a forma como uma pergunta com quatro opções é apresentada, como as posições crescem, como uma rodada é anunciada.

---

## Sete molduras

O jogo tem cerca de vinte e cinco estados distintos de ecrã, mas a maioria são variantes do mesmo layout. **Você projeta sete quadros; o resto é derivado deles.** Isso não é um atalho — é como o motor funciona. Um ecrã sem arte de sua própria estrutura volta a uma moldura geral.

| #     | Frame                         | O que há nisso                                                                                                                                                                                       | O que é derivado dele                                                                                                                                                                          |
| ----- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Quadro Geral**              | O fundo, um título de cabeçalho e uma área de conteúdo vazia abaixo dele. O template visual para todo o tema.                                                        | Treze estados de tela: explicação redonda, standings, introdução do jogador, variações de múltipla escolha, questões longas, avisos de assento, configurações. |
| **2** | **Conectar tela**             | O que a sala vê se juntar: cinco linhas de instrução, espaço para um código de associação ou código QR, e uma lista de jogadores trocando.                           | Também a tela de espera mostrada enquanto o questionário lê a questão em voz alta.                                                                                             |
| **3** | **Tela de perguntas**         | A pergunta, um temporizador, quatro opções de resposta, uma linha de feedback. A tela da sala parece mais longa.                                                     | —                                                                                                                                                                                              |
| **4** | **Pergunta com a mídia**      | O mesmo arranjado em torno de uma imagem ou vídeo. Pode ser uma composição diferente do quadro 3.                                                                    | Também a variante de mídia na tela cheia e a mídia mostrada entre as perguntas.                                                                                                |
| **5** | **Responder tela**            | Qual resposta estava correta, como as respostas da sala foram espalhadas pelas opções, e uma linha de feedback.                                                                      | Também a tela de respostas para perguntas em aberto e para perguntas com meios de comunicação.                                                                                 |
| **6** | **Classificações e vencedor** | Uma lista de jogadores com nome, pontuação e posição. Forneça a **linha do jogador** como um elemento separado e reutilizável — ele é repetido seis a dez vezes.     | Ambas as posições entre as rodadas e o vencedor final.                                                                                                                         |
| **7** | **Introdução à rodada**       | Um pequeno anúncio por categoria redonda. Existem seis categorias: ciência e tecnologia, natureza, entretenimento e música, esporte, arte, história. | Todas as seis categorias.                                                                                                                                                      |

### O que é decidido para você

- \*\*Os controles individuais. \* Botões em seus quatro estados, os símbolos corretos e errados, a barra de rolagem, caixas de seleção e seleções são derivados do que aparece em suas sete molduras. Certifique-se de que um botão apareça em algum lugar, então há um estilo para retirá-los.
- **Os telefones dos jogadores.** Um layout HTML fixo, estilizado de sua lista de cores e fontes.
- **Quais telas voltam para o quadro geral e como.**
- **Como funcionam as seis categorias de mapa na arte de introdução redonda.**
- **Todo o tempo e duração da animação.**

### Um caractere é opcional

O tema de QuizWitz tem um caractere que fala e reagem. Nada requer uma: o validador de tema só avisa sobre o elemento `ted`; ele não falha sem ele. O [tema de Esmeralda](/docs/advanced/emerald-theme) não apresenta personagem, e o deixa cair o trabalho mais caro — sincronização fraternal, olhos, braços.

Sem um personagem, a introdução à rodada se torna um momento gráfico, tipográfico ou ilustrativo. Duas abordagens mantêm o trabalho em proporção: uma composição com cor ou ícone de variante por categoria, ou um único anúncio universal com apenas a mudança de nome da rodada. Seis entregues genuinamente diferentes é muito trabalho por alguns segundos de tempo de tela.

---

## Como estes quadros se parecem na prática

As telas abaixo vêm de um tema existente. Eles estão aqui para mostrar **o que acontece em cada tela**; eles não são uma referência de estilo.

### Quadro 1 — o quadro geral

Dois momentos de jogo muito diferentes sobre o mesmo modelo: um seletor de questões e uma escada de pontos. Ele mostra o trabalho que uma moldura faz para si e por que razão a sua área de conteúdo precisa de estar em espaço e neutra.

![O quadro geral com um seletor de perguntas de três linhas](/images/theme-design/frame1-general-multiquestion.png)

![O quadro geral com uma escada de cinco pontos de nível](/images/theme-design/frame1-general-strikeladder.png)

### Frame 2 - conecte e aguarde

Com um logotipo de cliente ao lado do código de adesão, e sem um, onde a própria arte do tema carrega a tela:

![Conectar tela com um logotipo do cliente](/images/theme-design/frame2-connect.png)

![Conectar tela sem um logotipo do cliente](/images/theme-design/frame2-connect-nologo.png)

A tela de espera que segue, em exibição enquanto o testador lê a pergunta em voz alta:

![Esperando tela](/images/theme-design/frame2-pending.png)

### Frame 3 — a tela de perguntas

Quatro opções, a questão acima, o temporizador no meio. Note que uma opção não pode consistir em nada além de um emoji.

![Tela de perguntas com quatro opções de texto](/images/theme-design/frame3-question-options.png)

![Tela de perguntas com sinalizadores como opções de resposta](/images/theme-design/frame3-question-emoji.png)

Uma pergunta sem opções — os jogadores digitam a resposta no telefone. A tela está quase vazia e o temporizador se torna o elemento principal:

![Abrir pergunta apenas com a pergunta e um grande temporizador](/images/theme-design/frame3-question-open.png)

O tempo acabou. O balão de feedback aparece sobre a tela e o temporizador está vazio:

![Tela de perguntas mostrando o estado do tempo-up](/images/theme-design/frame3-question-timeout.png)

### Quadro 4 - mídia

As mesmas partes, reorganizadas em torno de uma área de mídia, com as opções à esquerda e à direita:

![Tela de perguntas com uma imagem no meio](/images/theme-design/frame4-question-attachment.png)

Mídia por conta própria, preenchendo a tela:

![Mídia de tela inteira](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 — a tela de resposta

Esta tela passa três minutos. Primeiro o spread, com nada marcado ainda:

![Resposta mostrando o spread](/images/theme-design/frame5-answer-mc-spread.png)

Então a opção correta é marcada e os errados são cruzados:

![Responder à tela com a opção correta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

E se a pergunta contém uma explicação, um balão cai sobre a arte. Deixe espaço para ele — ele cai em cima de tudo o que você projetou:

![Responder à tela com o balão de explicação](/images/theme-design/frame5-answer-mc-explanation.png)

Com um pequeno grupo, o mesmo momento é uma lista de notas em vez de uma carta:

![Responder à tela para um grupo pequeno](/images/theme-design/frame5-answer-mc-small.png)

Para uma pergunta aberta, o gráfico mostra quantos jogadores acertaram:

![Responder à tela para uma pergunta aberta](/images/theme-design/frame5-answer-open.png)

### Frame 6 — Posições e vencedor

As posições depois de uma rodada. A linha do jogador é o elemento que se repete: posição, avatar, nome, pontuação.

![Classificação com seis linhas de jogador](/images/theme-design/frame6-roundoutro.png)

A contagem regressiva final nomeia um jogador de cada vez, do último lugar ao primeiro - lugar, pontuações e nome da equipe no centro das atenções:

![O vencedor apontando um jogador](/images/theme-design/frame6-winner-countdown.png)

![Os pontos finais](/images/theme-design/frame6-winner.png)

### Quadro 7 — a introdução da rodada

Um design, opcionalmente com uma variante por categoria:

![Introdução da rodada para a categoria da natureza](/images/theme-design/frame7-roundintro-nature.png)

![Introdução da rodada para a categoria científica](/images/theme-design/frame7-roundintro-science.png)

---

## Regras de design

Nenhum destes limitam seu design visual. Eles são sobre como o arquivo é compilado.

### Formato

- **1920 × 1080 pixels**, exatamente. Um quadro por tela.
- Trabalhe **em veto** onde você puder. Onde você usa quadriculado (fotos, texturas): pelo menos 2× display tam.
- O jogo roda a **24 quadros por segundo**. Relevante se você fornece ideias de movimento
- Mantenha uma margem de **5%** nas bordas sem informações essenciais. Projetores cultivam.

### Estrutura da camada — a regra que mais importa

**Qualquer coisa que possa se mover, aparecer ou alterar valor fica em sua própria camada nomeada.** Nada mesclado, nada nivelado.

Na prática: as quatro opções de resposta são quatro camadas separadas, não uma. O timer é separado do plano de fundo. Um botão e seu rótulo são dois elementos. Uma linha de jogador é um grupo que pode ser duplicado.

O que pode ser mesclado: obra de arte de fundo puramente decorativa que funciona como uma única imagem.

Esta é a única regra que realmente dói quando não é seguida — a arte tem então de ser desfeita ou redesenhada, que é exactamente o custo que esta disposição tem de evitar.

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

Três linhas, três caixas idênticas — e três tamanhos de fonte completamente diferentes, simplesmente porque o texto é menor ou maior. "Onde é amor" fica com a altura completa; a pergunta acima dela tem de se prender com duas linhas pequenas. Os rótulos à esquerda se comportam da mesma maneira.

O que resulta disso:

- \*\*A mesma pergunta parece diferente em outro jogo. \* Uma pergunta de seis palavras parece grande e preenche o ecrã; trinta e cinco palavras são pequenas em cinco linhas, exatamente na mesma caixa. Ambas têm de olhar bem.
- \*\*Projete todas as caixas de texto duas vezes. \* Preencha uma vez com uma amostra muito curta e uma com uma muito longa, e verifique se a composição se mantém em ambos. Por regra uma opção de polegar: uma opção de resposta vai de uma a cerca de oito palavras, uma pergunta de cinco a quarenta, um nome de jogador de dois a vinte caracteres.
- **Não conte com um número fixo de linhas.** Não existe aqui um título que é "sempre em uma linha".
- \*\*Não alinhar texto com mais nada opticalmente. \* Texto que tem que alinhar com uma regra ou uma forma irá derivar assim que for menor ou maior. Use caixas que são cômodo o suficiente e um alinhamento (esquerda, centrada, direita) ao invés de posições exatas.
- **A caixa é um máximo, não uma promessa.** Você projeta a proporção; a caixa de preenchimento varia.
- **Onze línguas.** Os compostos alemães são longos e o húngaro não é mais bonito. Uma caixa que é apertada em inglês cai para um tamanho mal pequeno em alemão.
- \*\*Os emojis podem aparecer dentro do texto. \* Os jogadores escolhem um ao lado do nome de sua equipe, e uma pergunta ou uma opção pode conter uma — às vezes, uma opção não é nada além de um emoji. Eles são desenhados de cor e são mais altos que as letras ao seu redor.

O que a compilação precisa saber sobre cada caixa de texto: onde está, quão grande é, como está alinhado, qual cor e qual fonte. Não: a que tamanho de ponto.

Duas coisas se seguem que você pode usar: uma caixa grande com texto curto se torna uma composição tipográfica forte por si só, e uma caixa que você deliberadamente torna estreita e alta força o texto em uma coluna. Você pode usar o equipamento como um dispositivo de design — você simplesmente não deve projetar contra ele.

### O temporizador — necessário, e é uma animação

**Toda tela de questões tem um temporizador.** Não é opcional; a sala precisa ver quanto tempo sobra. Ambas as questões carregam uma.

\*\*O temporizador não é um número de contagem mas uma animação cuja playhead o motor se move. \* Você projeta uma progressão de "cheio" para "vazio" — um esgoto de barras, um anel fechando, um vidro de hora, uma linha encolhedora. O motor reproduz essa animação exatamente com a velocidade que faz o último quadro coincidir com o final da pergunta.

Que segue:

- **A duração da pergunta não é fixa.** Ela é definida por questionário — muitas vezes vinte a trinta segundos, mas pode ser menor ou maior. Sua animação está esticada ou comprimida para se encaixar. Projeta uma _progressão_, não uma animação de um conjunto de segundos.
- **Nenhum número por segundo ticks.** Um temporizador contando "20, 19, 18…" para de ser verdadeiro assim que a duração muda.
- **Os últimos segundos são o momento mais longo do jogo.** Isso ajuda se a progressão se tornar mais clara ou mais urgente para o final.
- **Lidável do fundo da sala**, de repente.
- **Vários cronômetros são permitidos.** Uma barra no topo e um anel perto da questão são ambos dirigidos, contanto que cada um seja nomeado `timer`.

Forneça o temporizador como uma série de quadros-chave ou como uma descrição do progresso — "a barra drena a direita para a esquerda e deslocamentos de verde para vermelho" é o bastante.

### Fontes

- **Fontes devem estar incorporáveis.** O arquivo `.ttf` ou `.otf` é necessário, mais uma licença que permite incorporar uma aplicação. Uma fonte licenciada apenas como uma webfont, ou apenas para impressão, não pode ser usada. Verifique isto antes de projetar com ele; depois é uma correção cara.
- Fontes com ascendentes ou descendentes invulgarmente grandes podem ser compensadas, mas sinalizem se você usar um.

### Cor como uma lista

O tema lê uma lista de cores a partir de um arquivo de configuração. Forneça sua paleta como uma **lista nome**, não apenas como cores na arte:

cor principal, cor de destaque, cor de fundo, cor de texto padrão, cor de texto do cabeçalho, cor de texto da questão, texto do botão, texto as quatro cores da resposta (cada uma com um fundo e uma cor da borda), a cor de correto, a cor de errado.

Os gradientes são permitidos: dar-lhes dois valores hexadecimais.

### O logotipo do QuizWitz

Os designs personalizados incluem o logotipo do QuesizWitz. Reserve um lugar para ele onde não atrapalha o desenho.

---

## O que entregar acima

### Arquivo de origem - Ilustrador preferido

\*\*Adobe Illustrator (`.ai`) é preferido, e há uma razão concreta. \* O tema é construído no Adobe Animate, que importa arquivos do Illustrator diretamente e converte suas camadas em camadas animadas ou símbolos separados, mantendo os nomes das camadas e deixando os vetores editáveis. Esse é precisamente o passo que impede que a obra de arte seja reconstruída à mão.

Figma ou Photoshop é possível, mas saiba o custo: com Figma tudo passa pela exportação SVG e PNG, e é precisamente aí que se perde a estrutura da camada de que aqui necessitamos. Se você usar a Figura, forneça **cada elemento separadamente como SVG**, com nomes de arquivos correspondentes aos nomes da camada, para que a estrutura possa ser reconstruída manualmente. O Photoshop importa para o Animar com suas camadas intactas, como o Ilustrador, mas dá a você um raster em vez de vetor.

Se você é mais rápido em Figma, use-o na fase de conceitos e entregue a versão final em Illustrator.

Estrutura de arquivo:

- Um quadro por tela, exatamente 1920 × 1080, nomeado a partir dos quadros acima.
- Peças reutilizáveis (botão, linha do jogador, opção de resposta, temporizador) como **símbolo** ou componentes, não como cópias perdidas.
- Nomes de camada em inglês, sem espaços: `question`, `option1` para `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Cores como swatches e texto como estilos nomeados, em vez de definir em cada objeto individualmente.

### Exportações

- Cada quadro como PNG, 1920 × 1080 — como referência para como deve parecer.
- Cada elemento gráfico separado como um **PNG transparente em 2×**, em uma pasta, o nome do arquivo correspondente ao nome da camada.
- Fontes como `.ttf` ou `.otf`, com prova de licença.

### Meio página de notas

Uma breve nota escrita: qual deve ser a ideia de como devem aparecer as opções, quais os movimentos e o que permanece. Não é uma lógica de design de dez páginas — quem construir o tema precisa saber o que construir.

As ideias de movimento podem ser descritas ou fornecidas como um animático grosseiro.

---

## Apêndice - nomes de símbolos

Para completar e para quem quiser saber exatamente onde sua obra de arte acaba acabando. **Você não precisa ler isso para fazer o trabalho**; os sete quadros acima são suficientes. Usar estes nomes como nomes de camada salva um passo de tradução.

| Frame                                              | Nome do símbolo                                                                                                                                                                              | Peças requeridas                                                                                                   |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1. Quadro geral             | `GeneralPurposeScreen`, `GeneralPurposeScreenWithHeader`                                                                                                                                     | `header.text`, área de conteúdo                                                                                    |
| 2. Ligar tela               | `ApresententationConnectScreen`                                                                                                                                                              | `instructions.line1` para `line5`                                                                                  |
| r.. Tela de espera | `PendingScreen`                                                                                                                                                                              | cabeçalho.texto\`                                                                                  |
| 3. Tela de perguntas        | PerguntaTela\`                                                                                                                                                                               | `question.text`, `timer`, `feedback.text`, `option1` para `option4`, frame labels `showOptions` and `showFeedback` |
| 4. Pergunta com mídia       | AnexoPerguntaTelaTela\`                                                                                                                                                                      | como acima, mais `attachment.placeholder`                                                                          |
| 4b Mídia Tela Inteira                              | `Tela de Anexo`                                                                                                                                                                              | `espaço reservado`                                                                                                 |
| 5. Tela de resposta         | `AnswerPieScreen`                                                                                                                                                                            | `option1` para `option4`, `answer.text`, `feedback.text`                                                           |
| 5b Resposta à pergunta aberta                      | `AnswerScreen`, `AnswerOpenQuestionPieScreen`                                                                                                                                                | `answer.text`, `feedback.text`, `players`, `piechart`                                                              |
| 6. Classificação            | `WinnerScreen` + `PlayerScore`                                                                                                                                                               | `header.text`, `players`, `feedback.text` (`playAgain.text` opcional)                           |
| 7. Introdução à rodada      | `RoundIntroTedMusic`, `RoundIntroTedSport`, `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedCultHist`                                                                   | —                                                                                                                  |
| —                                                  | `CarregandoTela`                                                                                                                                                                             | `texto`, `progresso`                                                                                               |
| —                                                  | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `SymbolCorrect`, `SymbolErrg`, `SettingsScreenScrollarea`, `AlertScreen`, `ActivityScreen`, `MenuScreen`, `SettingsScreen`, `PackListItem` | nenhuma arte é necessária — construída a partir dos seus quadros e da moldura geral                                |

Os nomes de introdução da rodada contêm "Ted" por razões históricas. Este é um remanescente do tema original e não quer dizer que um caractere tenha de aparecer neles.

Cada elemento com `.text` depois que ele é uma caixa de texto ajustada como descrita acima: um retângulo que o motor se enche a si mesmo. O elemento `temporizador` é um clipe de filme com sua própria linha do tempo; o motor lê sua contagem de quadros e move o playhead em proporção ao tempo decorrido.

### O que o arquivo de configuração retira do seu design

```json
{
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "overlay": "light | dark"
}
```

---
id: theme-design-guide
title: Guia de design de temas
---

# Guia de design de temas

[Temas](/docs/advanced/theming) explica como é construído um tema QuizWitz: no Adobe Animate, exportado como biblioteca CreateJS. Esta página trata do passo anterior: o **design** do tema.

Foi escrita para um designer gráfico e parte do princípio de que o design e a produção no Animate são feitos por pessoas diferentes. Poucos designers ainda trabalham no Adobe Animate, por isso normalmente um designer entrega os grafismos e outra pessoa monta o tema. Isso funciona bem, desde que os grafismos cheguem numa forma que a construção possa usar. Esta página descreve essa forma e serve ao mesmo tempo de lista de entregáveis quando pedes um orçamento a um designer.

A página tem quatro partes:

1. [O que estás a desenhar](#what-you-are-designing) - os ecrãs que um tema abrange.
2. [As oito molduras](#eight-frames-and-an-element-sheet) e [a folha de elementos](#the-element-sheet), uma a uma, com capturas de ecrã.
3. [Regras de design](#design-rules) - como o ficheiro tem de ser construído para que o motor o possa usar.
4. [O que entregar](#what-to-hand-over) - ficheiro de origem, entregáveis e ordem de trabalho.

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

## Oito molduras e uma folha de elementos

O jogo tem dezenas de estados de ecrã distintos, mas a maioria são variantes da mesma disposição. **Desenhas oito molduras e uma folha de elementos; o resto deriva delas.** Não é um atalho - é assim que o motor funciona. Um ecrã sem grafismos próprios recorre a uma moldura geral.

A folha importa tanto quanto as molduras: um ecrã que recorre à moldura geral continua a precisar de mobiliário dentro da sua área de conteúdo - um painel, uma linha, um filete.

| # | Moldura                                                     | Também abrange                                                             |
| - | ----------------------------------------------------------- | -------------------------------------------------------------------------- |
| 1 | [Moldura geral](#frame-1---the-general-frame)               | Treze estados de ecrã sem grafismos próprios                               |
| 2 | [Ecrã de ligação](#frame-2---the-connect-screen)            | Desenha-o duas vezes: com um logótipo do cliente e sem ele |
| 3 | [Ecrã de espera](#frame-3---the-waiting-screen)             | -                                                                          |
| 4 | [Ecrã da pergunta](#frame-4---the-question-screen)          | -                                                                          |
| 5 | [Pergunta com anexo](#frame-5---question-with-attachment)   | O anexo em ecrã inteiro e os anexos mostrados entre perguntas              |
| 6 | [Ecrã da resposta](#frame-6---the-answer-screen)            | O ecrã da resposta para perguntas abertas e para perguntas com anexo       |
| 7 | [Classificação e vencedor](#frame-7---standings-and-winner) | A classificação entre rondas e o vencedor final                            |
| 8 | [Intro da ronda](#frame-8---the-round-intro)                | Todas as seis categorias de ronda                                          |

:::note[Sobre as capturas de ecrã]
Os ecrãs abaixo vêm de um tema existente. Mostram **que elementos aparecem em cada ecrã e quando**. Não são uma referência de estilo _nem_ de disposição: onde este tema coloca a sua pergunta, as suas opções e o seu temporizador é decisão dele, e a tua pode ser completamente diferente.
:::

### Moldura 1 - a moldura geral

**O que tem:** o fundo, um título de cabeçalho e uma área de conteúdo vazia por baixo. Não é uma composição acabada, mas sim a moldura dentro da qual o resto é construído.

**O que abrange:** treze estados de ecrã - explicação da ronda, classificação, apresentação dos jogadores, variantes de múltipla escolha, perguntas longas, avisos de Seats, definições. Cada um preenche a área de conteúdo à sua maneira com elementos da [folha de elementos](#the-element-sheet), por isso a moldura tem de acolher coisas que não se parecem nada umas com as outras. O seletor de perguntas e a pergunta longa podem ter uma composição própria, se assim o quiseres; caso contrário usam esta moldura.

Dois momentos de jogo na mesma moldura: um seletor de perguntas e uma escada de pontos.

![A moldura geral com um seletor de perguntas de três linhas](/images/theme-design/frame1-general-multiquestion.png)

![A moldura geral com uma escada de pontos de cinco níveis](/images/theme-design/frame1-general-strikeladder.png)

Repara no pouco que têm em comum. O seletor põe as suas três linhas dentro de um painel com contorno; a escada não tem painel nenhum, apenas linhas separadas por filetes finos. O que os dois partilham é o fundo e a faixa de cabeçalho por cima: tudo o que está abaixo disso pertence ao ecrã concreto e é preenchido pelo jogo, não por ti.

Esse painel e esses filetes vêm da [folha de elementos](#the-element-sheet), não desta moldura. O que esta moldura tem de fazer é suportá-los: desenha a área de conteúdo como uma zona vazia, neutra e ampla, que funcione igualmente bem com um painel com contorno, com uma lista despida e com uma tabela de linhas. Um fundo carregado ao centro, ou um cabeçalho que só funciona com um painel encaixado logo por baixo, é onde isso se parte.

### Moldura 2 - o ecrã de ligação

**O que tem:** tudo o que a sala precisa para entrar.

- cinco linhas de instruções
- um código de entrada e um código QR, ambos gerados pelo motor - reserva um quadrado para o código QR
- uma linha com o número de jogadores ligados
- uma lista de jogadores a chegar aos poucos

**Desenha-o duas vezes:** com um logótipo do cliente ao lado do código de entrada, e sem ele, em que são os grafismos do próprio tema a sustentar o ecrã.

![Ecrã de ligação com um logótipo do cliente](/images/theme-design/frame2-connect.png)

![Ecrã de ligação sem logótipo do cliente](/images/theme-design/frame2-connect-nologo.png)

### Moldura 3 - o ecrã de espera

**O que tem:** quase nada - o logótipo do próprio quiz, ou os grafismos do tema.

Só partilha o fundo com o ecrã de ligação, por isso desenha-o como uma composição própria. Fica no ecrã enquanto o quizmaster lê uma pergunta em voz alta, o que o mantém visível durante mais tempo do que quase tudo o resto no jogo. Merece mais atenção do que um ecrã vazio costuma receber.

![Ecrã de espera](/images/theme-design/frame2-pending.png)

### Moldura 4 - o ecrã da pergunta

**O que tem:** a pergunta, um temporizador, quatro opções de resposta e uma linha de feedback. É o ecrã para onde a sala olha durante mais tempo. Repara que uma opção pode consistir apenas num emoji:

![Ecrã da pergunta com quatro opções de texto](/images/theme-design/frame3-question-options.png)

![Ecrã da pergunta com bandeiras como opções de resposta](/images/theme-design/frame3-question-emoji.png)

Uma pergunta sem opções: os jogadores escrevem a resposta no telemóvel. O ecrã está quase vazio e o temporizador passa a ser o elemento principal:

![Pergunta aberta apenas com a pergunta e um temporizador grande](/images/theme-design/frame3-question-open.png)

O momento em que o tempo acaba. O balão de feedback aparece por cima do ecrã e o temporizador fica vazio:

![Ecrã da pergunta a mostrar o estado de tempo esgotado](/images/theme-design/frame3-question-timeout.png)

### Moldura 5 - pergunta com anexo

**O que tem:** as mesmas partes da moldura 4, dispostas à volta de uma imagem ou de um vídeo. Pode ser uma composição diferente. O anexo é redimensionado para caber dentro da caixa que desenhas, por isso tanto uma imagem horizontal como uma vertical têm de ficar aceitáveis lá dentro.

**O que abrange:** o anexo em ecrã inteiro e os anexos mostrados entre perguntas.

Aqui com as opções à esquerda e à direita do anexo:

![Ecrã da pergunta com uma imagem ao centro](/images/theme-design/frame4-question-attachment.png)

Um anexo sozinho, a preencher o ecrã:

![Anexo em ecrã inteiro](/images/theme-design/frame4-attachment-fullscreen.png)

### Moldura 6 - o ecrã da resposta

**O que tem:** qual era a resposta correta, como as respostas da sala se distribuíram pelas opções, e uma linha de feedback.

**O que abrange:** o ecrã da resposta para perguntas abertas e para perguntas com anexo.

O ecrã passa por três momentos. Primeiro a distribuição, ainda sem nada assinalado:

![Ecrã da resposta a mostrar a distribuição](/images/theme-design/frame5-answer-mc-spread.png)

Depois a opção correta é assinalada e as erradas são riscadas:

![Ecrã da resposta com a opção correta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

E se a pergunta trouxer uma explicação, cai um balão por cima dos grafismos. Deixa-lhe espaço: aterra por cima do que quer que tenhas desenhado:

![Ecrã da resposta com o balão de explicação](/images/theme-design/frame5-answer-mc-explanation.png)

Com um grupo pequeno, o mesmo momento é uma lista de pontuações em vez de um gráfico:

![Ecrã da resposta para um grupo pequeno](/images/theme-design/frame5-answer-mc-small.png)

Numa pergunta aberta, o gráfico mostra quantos jogadores acertaram:

![Ecrã da resposta para uma pergunta aberta](/images/theme-design/frame5-answer-open.png)

### Moldura 7 - classificação e vencedor

**O que tem:** uma lista de jogadores com posição, avatar, nome e pontuação. Entrega a **linha de jogador** como um elemento separado e reutilizável: por predefinição repete-se seis vezes, até um máximo de dez.

**O que abrange:** a classificação entre rondas e o vencedor final.

A classificação depois de uma ronda, com seis linhas de jogador:

![Classificação com seis linhas de jogador](/images/theme-design/frame6-roundoutro.png)

A contagem decrescente final nomeia um jogador de cada vez, do último lugar ao primeiro: lugar, pontuação e nome da equipa em destaque. É também aqui que os [emoji voadores](#flying-emoji-land-on-top-of-everything) são mais intensos:

![A contagem decrescente do vencedor a nomear um jogador](/images/theme-design/frame6-winner-countdown.png)

![A classificação final](/images/theme-design/frame6-winner.png)

### Moldura 8 - a intro da ronda

**O que tem:** um anúncio curto por categoria de ronda. Há seis categorias: ciência e tecnologia, natureza, entretenimento e música, desporto, arte, história.

**O que abrange:** todas as seis categorias. Um mesmo design pode servir várias delas.

Aqui, uma composição com uma variante por categoria:

![Intro da ronda para a categoria natureza](/images/theme-design/frame7-roundintro-nature.png)

![Intro da ronda para a categoria ciência](/images/theme-design/frame7-roundintro-science.png)

**Uma personagem é opcional.** O tema QuizWitz de origem tem uma que fala e reage; o [tema Emerald](/docs/advanced/emerald-theme) vem sem ela, e prescindir dela elimina o trabalho de animação mais caro - sincronização labial, olhos, braços.

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

- **Os telemóveis dos jogadores.** Uma disposição HTML fixa.
- **O punhado de coisas que o motor desenha sozinho** - os filetes entre linhas na escada de pontos, a linha realçada no seletor de perguntas, o código QR. As suas cores vêm de [A cor como lista](#colour-as-a-list).
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

Na prática:

- as quatro opções de resposta são quatro camadas separadas, não uma
- o temporizador está separado do fundo
- um botão e a sua etiqueta são dois elementos
- uma linha de jogador é um grupo que pode ser duplicado

O que pode ser fundido: grafismos de fundo puramente decorativos que funcionem como uma única imagem fixa.

Esta é a única regra que dói mesmo quando não é seguida: os grafismos têm depois de ser desmontados ou redesenhados, que é exatamente o custo que esta forma de trabalhar pretende evitar.

### Efeitos que não sobrevivem

O motor desenha sobre uma tela HTML5. Estes têm de ser **fundidos na imagem** ou deixados de fora:

| Efeito                                                            | O que fazer em alternativa |
| ----------------------------------------------------------------- | -------------------------- |
| Desfocagem ao vivo, sombras projetadas e brilho como filtros      | Entrega-os como grafismos  |
| Modos de mistura (multiplicar, ecrã, sobrepor) | Converte-os em cor plana   |
| Efeitos de camada e camadas de ajuste                             | Funde-os na imagem         |
| Gradientes **dentro** de texto, ou texto com contorno por caráter | Deixa-os de fora           |
| Máscaras que mudam a cada fotograma                               | Deixa-os de fora           |

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

**O que a construção precisa de saber sobre cada caixa de texto:** onde está, que tamanho tem, como está alinhada, que cor e que tipo de letra. Não: em que corpo.

**Podes tirar partido disto.** Uma caixa grande com texto curto torna-se por si só uma composição tipográfica forte, e uma caixa que fazes deliberadamente estreita e alta obriga o texto a formar uma coluna. Usa o ajuste como recurso de design; só não desenhes contra ele.

### O temporizador - obrigatório, e é uma animação

**Todos os ecrãs de pergunta têm um temporizador**; a sala tem de ver quanto tempo falta.

**O temporizador não é um número que conta, mas uma animação cuja cabeça de leitura o motor desloca.** Desenhas uma progressão de "cheio" a "vazio": uma barra a esvaziar, um anel a fechar, uma ampulheta, uma linha a encolher. O motor reproduz essa animação exatamente à velocidade que faz coincidir o último fotograma com o fim da pergunta.

Daqui decorre o seguinte:

- **A duração da pergunta não é fixa.** É definida por quiz: muitas vezes de vinte a trinta segundos, mas pode ser mais curta ou mais longa. A tua animação é esticada ou comprimida para encaixar.
- **Sem números nem marcas por segundo.** Um temporizador que conta "20, 19, 18…" deixa de ser verdadeiro assim que a duração muda.
- **Os últimos segundos são o momento de maior tensão do jogo.** Ajuda que a progressão se torne mais clara ou mais urgente para o fim.
- **Legível do fundo da sala**, num relance.
- **Vários temporizadores são permitidos.** Uma barra em cima e um anel junto à pergunta são ambos acionados, desde que cada um se chame `timer`.

Entrega o temporizador como uma série de fotogramas-chave ou como uma descrição da progressão: "a barra esvazia da direita para a esquerda e passa de verde a vermelho" chega.

### Os emoji voadores aterram por cima de tudo

Cada jogador escolhe um emoji ao entrar, e o jogo atira esses emoji pelo ecrã. São desenhados pelo motor numa camada por cima do tema. **Aqui não há nada para desenhares** - mas há algo à volta do qual desenhar, porque não são um adorno raro.

Aparecem em três momentos:

- **Quando um jogador responde.** O emoji desse jogador sobe a partir da margem inferior numa posição horizontal aleatória, descreve um arco e volta a cair para fora do enquadramento.
- **Quando um jogador atira um.** Os jogadores podem atirar o seu emoji a partir do telemóvel; o ângulo e a velocidade vêm do gesto de deslize, e ele parte do centro inferior, a rodopiar.
- **Quando um lugar é revelado na contagem decrescente final.** Uma rajada dos emoji do jogador nomeado: vinte para um lugar comum, cinquenta para o terceiro, setenta e cinco para o segundo e **cento e cinquenta para o vencedor.**

O que isso significa para o design:

- **Mantém o terço inferior dos ecrãs de classificação e de vencedor livre de tudo o que seja pequeno ou crítico.** Durante a contagem decrescente aquilo ali em baixo fica mesmo cheio.
- **Parte do princípio de que vão chocar com a tua paleta.** São emoji a cores plenas vindos de todos os cantos da tabela Unicode, e nenhum tema os controla. Um design que só se aguenta dentro de uma gama de cores apertada vai parecer acidental durante esses segundos.
- **Os lançamentos são suprimidos enquanto estiver a ser mostrada uma imagem ou um vídeo**, por isso os ecrãs com anexo mantêm-se limpos.
- **A camada inteira pode ser desativada por jogo**, por isso também não construas uma composição que dependa da presença deles.

### Tipos de letra

- **Os tipos de letra têm de poder ser incorporados.** É preciso o ficheiro `.ttf` ou `.otf`, mais uma licença que permita a incorporação numa aplicação. Um tipo de letra licenciado apenas como webfont, ou apenas para impressão, não pode ser usado. Verifica isto antes de desenhares com ele; depois é uma correção cara.
- Tipos de letra com ascendentes ou descendentes invulgarmente grandes podem ser compensados, mas assinala-o se usares algum.

### A cor como lista

O tema lê uma lista de cores de um ficheiro de configuração, e os telemóveis dos jogadores recebem o estilo a partir dessa mesma lista. Entrega a tua paleta como uma **lista com nomes**, e não apenas como cores nos grafismos:

| Onde                             | Cores                                                                                                                                                                                                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ecrã de jogo**                 | Cor principal, cor de destaque, fundo, cor do painel ou contentor, fundo do temporizador, cor de texto predefinida, cor do texto do cabeçalho, cor do texto da pergunta, texto dos botões, texto das caixas de diálogo e das explicações, texto do nome e da pontuação dos jogadores, a cor para certo, a cor para errado |
| **As quatro opções de resposta** | Para cada opção: uma cor de fundo, uma cor de contorno e uma cor plana para os telemóveis e para os gráficos                                                                                                                                                                                              |
| **Telemóveis dos jogadores**     | Fundo, cor do texto, cor do contorno, cor do contorno das opções, e a cor de fundo e do texto do contentor de respostas                                                                                                                                                                                                   |

No ecrã de jogo são permitidos gradientes: indica-os como dois valores hexadecimais.

Algumas cores são o _único_ meio de controlar partes que o motor desenha sozinho, por isso vale a pena decidi-las em vez de ficar com as predefinições:

- o **separador** - os filetes entre linhas onde não há painel, e na escada de pontos
- os estados **ativo**, **inativo** e **selecionado** de uma linha no seletor de perguntas
- o texto das **caixas de diálogo**
- as cores de **frente e fundo do código QR**

Se as deixares de fora, recaem em predefinições internas - branco, cinzento, vermelho, preto e branco - que raramente combinam com um design.

### O logótipo QuizWitz

Os designs à medida incluem o logótipo QuizWitz. Reserva-lhe um lugar onde não atrapalhe o design.

---

## O que entregar

### Ficheiro de origem - de preferência Illustrator

O tema é construído no Adobe Animate, e aquilo que o Animate consegue importar decide quanto do teu trabalho sobrevive intacto à entrega:

| Ferramenta                                       | O que acontece na importação                                                                                                                                                                                                                                                                                                                     | Usar para                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| **Adobe Illustrator** (`.ai`) | O Animate importa-o diretamente e converte as tuas camadas em camadas do Animate ou em símbolos separados, mantendo os nomes das camadas e deixando os vetores editáveis. É exatamente esse passo que poupa os grafismos de terem de ser reconstruídos à mão.                                                    | **Preferido** para o entregável final         |
| **Adobe Photoshop**                              | É importado com as camadas intactas, tal como o Illustrator, mas dá rasterizado em vez de vetorial.                                                                                                                                                                                                                              | Possível                                      |
| **Figma**                                        | Tudo passa pela exportação em SVG e PNG, e é precisamente aí que se perde a estrutura de camadas necessária aqui. Se ainda assim usares o Figma, entrega **cada elemento separadamente em SVG**, com nomes de ficheiro correspondentes aos nomes das camadas, para que a estrutura possa ser reconstruída à mão. | A fase de conceito, se fores mais rápido nele |

Estrutura do ficheiro:

- Uma prancheta por ecrã, com o nome das molduras acima.
- As peças reutilizáveis (botão, linha de jogador, opção de resposta, temporizador) como **símbolos** ou componentes, não como cópias soltas.
- Nomes de camada em inglês, sem espaços: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Cores como amostras com nome e texto como estilos com nome, em vez de definidos objeto a objeto.

### Lista de entregáveis

1. O **ficheiro de origem**, estruturado como acima.
2. **Cada moldura em PNG**, 1920 × 1080 - uma referência de como deve ficar. Para a moldura 2, tanto a versão com como a versão sem logótipo do cliente.
3. **A folha de elementos** como uma única prancheta: os [blocos de conteúdo e os controlos](#the-element-sheet).
4. **Cada elemento gráfico separado em PNG transparente a 2×**, numa pasta, com o nome de ficheiro igual ao nome da camada.
5. **O temporizador** como fotogramas-chave ou como descrição escrita da progressão.
6. **Os tipos de letra** em `.ttf` ou `.otf`, com comprovativo de licença.
7. **A lista de cores** de [A cor como lista](#colour-as-a-list), em valores hexadecimais.
8. **Meia página de notas**: qual é a ideia, como devem aparecer as opções, o que se move e o que fica parado. Não uma justificação de design de dez páginas: quem constrói o tema precisa de saber o que construir. As ideias de movimento podem ser descritas ou entregues como um animatic tosco.

### Ordem de trabalho

1. **Moldura 4, o ecrã da pergunta, juntamente com a folha de elementos.** Obtém a aprovação de ambos antes do resto. Entre os dois contêm o temporizador, as opções, o painel e todos os controlos, por isso definem o estilo de todo o tema.
2. **Molduras 1 a 3.** Decorrem naturalmente das duas primeiras.
3. **Molduras 6 a 8** ficam para o fim.

---

## Anexo - nomes dos símbolos

Para ficar completo, e para quem quiser saber exatamente onde vão parar os seus grafismos. **Não precisas de ler isto para fazer o trabalho**; as oito molduras e a folha de elementos acima chegam. Usar estes nomes como nomes de camada poupa um passo de tradução.

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

Cada elemento com `.text` à frente é uma caixa de texto ajustada, como descrito em [Como se comporta o texto](#how-text-behaves): um retângulo que o motor preenche sozinho. O elemento `timer` é um clipe de filme com uma linha temporal própria; o motor lê o seu número de fotogramas e desloca a cabeça de leitura proporcionalmente ao tempo decorrido, no máximo 24 vezes por segundo.

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

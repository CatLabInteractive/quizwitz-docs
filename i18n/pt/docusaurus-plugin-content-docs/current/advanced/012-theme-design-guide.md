---
id: theme-design-guide
title: Guia de design de temas
---

# Guia de design de temas

[Temas](/docs/advanced/theming) explica como é construído um tema QuizWitz: no Adobe Animate, exportado como biblioteca CreateJS. Esta página trata do passo anterior: o **design** do tema.

Está escrita para um designer gráfico e parte do princípio de que o design e a produção no Animate ficam a cargo de pessoas diferentes. Já poucos designers trabalham em Adobe Animate, por isso é habitual que um designer entregue os grafismos e que outra pessoa monte o tema. Isso funciona bem, mas só se os grafismos forem entregues numa forma que quem constrói o tema consiga realmente aproveitar. Esta página descreve essa forma e serve ao mesmo tempo de lista de entregáveis quando pedes um orçamento a um designer.

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

## Sete molduras e uma folha de elementos

O jogo tem dezenas de estados de ecrã distintos, mas a maioria são variantes da mesma disposição. **Desenhas sete molduras e uma folha de elementos; o resto deriva delas.** Não é um atalho: é assim que o motor funciona. Um ecrã sem grafismos próprios recorre a uma moldura geral.

A folha conta tanto como as molduras: um ecrã que recorre à moldura geral continua a precisar de mobiliário dentro da sua área de conteúdo - um painel, uma linha, um filete - e esse mobiliário é uma decisão de design, não algo que se possa deduzir de um fundo.

| #     | Moldura                      | O que tem                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | O que deriva dela                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Moldura geral**            | O fundo, um título de cabeçalho e uma área de conteúdo vazia por baixo. Não é uma composição acabada: é a moldura dentro da qual o resto é construído.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Treze estados de ecrã: explicação da ronda, classificação, apresentação dos jogadores, variantes de escolha múltipla, perguntas longas, avisos de Seats, definições. Cada um preenche essa área de conteúdo à sua maneira com elementos da folha, por isso tem de suportar coisas que não se parecem nada umas com as outras. O seletor de perguntas e a pergunta longa podem ter uma composição própria, se assim o quiseres; caso contrário usam esta moldura. |
| **2** | **Ligação e espera**         | Dois ecrãs, não um. O **ecrã de ligação** é o que a sala vê para entrar: cinco linhas de instruções, um código de jogo, um código QR, uma linha com o número de jogadores ligados e uma lista dos jogadores que vão chegando. Desenha-o **duas vezes**: com logótipo do cliente e sem ele. O código de jogo e o código QR são gerados pelo motor; reserva um quadrado para o código QR. O **ecrã de espera** mantém-se enquanto o quizmaster lê uma pergunta em voz alta e está quase vazio: o logótipo do próprio quiz, ou os grafismos do tema, e mais nada. Está no ecrã mais tempo do que quase tudo o resto no jogo. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **3** | **Ecrã da pergunta**         | A pergunta, um temporizador, quatro opções de resposta, uma linha de feedback. O ecrã para o qual a sala olha mais tempo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **4** | **Pergunta com anexo**       | O mesmo, disposto à volta de uma imagem ou de um vídeo. Pode ser uma composição diferente da moldura 3. O anexo é redimensionado para caber dentro da caixa que desenhas, por isso tanto uma imagem horizontal como uma vertical têm de ficar aceitáveis lá dentro.                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Também a variante de anexo em ecrã inteiro e os anexos mostrados entre perguntas.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **5** | **Ecrã da resposta**         | Qual a resposta correta, como se distribuíram as respostas da sala pelas opções, e uma linha de feedback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Também o ecrã da resposta para perguntas abertas e para perguntas com anexo.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **6** | **Classificação e vencedor** | Uma lista de jogadores com posição, avatar, nome e pontuação. Entrega a **linha de jogador** como um elemento separado e reutilizável: é repetida seis vezes por predefinição, até dez.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Tanto a classificação entre rondas como o vencedor final.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **7** | **Intro da ronda**           | Um anúncio curto por categoria de ronda. Há seis categorias: ciência e tecnologia, natureza, entretenimento e música, desporto, arte, história. Um mesmo design pode servir várias categorias.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | As seis categorias.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### A folha de elementos

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

### O que já está decidido

- **Os telemóveis dos jogadores.** Uma disposição HTML fixa, com estilo a partir da tua lista de cores.
- **O punhado de coisas que o próprio motor desenha.** Parte do mobiliário é desenhada no código em vez de vir do tema: os filetes entre linhas na escada de pontos, a linha realçada no seletor de perguntas, o código QR. Esses elementos tiram a cor da lista em **A cor como lista** e de mais nenhum lado, por isso essa lista é o único controlo que tens sobre eles.
- **Que ecrãs recorrem à moldura geral, e como.**
- **Como as seis categorias são associadas aos grafismos da intro da ronda.** Essa associação é uma definição de configuração, por isso uma mesma intro pode ser reutilizada para várias categorias.
- **Todo o ritmo e todas as durações de animação.**
- **O som.** Um tema pode trazer música e efeitos sonoros próprios, mas isso é um entregável à parte e não faz parte do briefing de design.

### A personagem é opcional

O tema de origem do QuizWitz tem uma personagem que fala e reage. Nada obriga a ter uma: o validador de temas apenas avisa acerca do elemento `ted`; sem ela não falha. O [tema Emerald](/docs/advanced/emerald-theme) vem sem personagem, e prescindir dela elimina o trabalho de animação mais caro: sincronia labial, olhos, braços.

Sem personagem, a intro da ronda passa a ser um momento gráfico, tipográfico ou ilustrativo. Duas abordagens mantêm o trabalho em proporção: uma composição com uma variante de cor ou de ícone por categoria, ou um único anúncio universal em que só muda o nome da ronda. Seis intros verdadeiramente diferentes dão muito trabalho para uns segundos de ecrã.

---

## Como são estas molduras na prática

Os ecrãs abaixo vêm de um tema existente. Estão aqui para mostrar **que elementos aparecem em cada ecrã e quando**. Não são uma referência de estilo _nem_ de disposição: onde este tema coloca a sua pergunta, as suas opções e o seu temporizador é decisão dele, e a tua pode ser completamente diferente. Lê-os pelo que tem de estar presente, não por onde fica colocado. Todos eles, e mais, podem ser jogados no [testador de temas](https://client.quizwitz.com/test.html).

### Moldura 1 - a moldura geral

Dois momentos de jogo na mesma moldura: um seletor de perguntas e uma escada de pontos.

Repara no pouco que têm em comum. O seletor põe as suas três linhas dentro de um painel com contorno; a escada não tem painel nenhum, apenas linhas separadas por filetes finos. O que os dois partilham é o fundo e a faixa de cabeçalho por cima: tudo o que está abaixo disso pertence ao ecrã concreto e é preenchido pelo jogo, não por ti.

![A moldura geral com um seletor de perguntas de três linhas](/images/theme-design/frame1-general-multiquestion.png)

![A moldura geral com uma escada de pontos de cinco níveis](/images/theme-design/frame1-general-strikeladder.png)

Esse painel e esses filetes são decisões de design, e cabem-te a ti: vêm da **folha de elementos**, não desta moldura. O que esta moldura tem de fazer é suportá-los: desenha a área de conteúdo como uma zona vazia, neutra e ampla, que funcione igualmente bem com um painel com contorno, com uma lista despida e com uma tabela de linhas. Um fundo carregado ao centro, ou um cabeçalho que só funciona com um painel encaixado logo por baixo, é onde isso se parte.

### Moldura 2 - ligação e espera

Com um logótipo do cliente ao lado do código de jogo, e sem ele, em que são os grafismos próprios do tema a suportar o ecrã:

![Ecrã de ligação com um logótipo do cliente](/images/theme-design/frame2-connect.png)

![Ecrã de ligação sem logótipo do cliente](/images/theme-design/frame2-connect-nologo.png)

O ecrã de espera é uma composição à parte e não uma variante do ecrã de ligação: os dois só partilham o fundo. Mantém-se enquanto o quizmaster lê uma pergunta em voz alta, e está quase vazio: o logótipo do próprio quiz, ou os grafismos do tema, e mais nada. Está no ecrã mais tempo do que quase tudo o resto no jogo, por isso merece mais atenção do que um ecrã vazio costuma receber.

![Ecrã de espera](/images/theme-design/frame2-pending.png)

### Moldura 3 - o ecrã da pergunta

Quatro opções, a pergunta por cima, o temporizador ao centro. Repara que uma opção pode consistir apenas num emoji.

![Ecrã da pergunta com quatro opções de texto](/images/theme-design/frame3-question-options.png)

![Ecrã da pergunta com bandeiras como opções de resposta](/images/theme-design/frame3-question-emoji.png)

Uma pergunta sem opções: os jogadores escrevem a resposta no telemóvel. O ecrã está quase vazio e o temporizador passa a ser o elemento principal:

![Pergunta aberta apenas com a pergunta e um temporizador grande](/images/theme-design/frame3-question-open.png)

O momento em que o tempo acaba. O balão de feedback aparece por cima do ecrã e o temporizador fica vazio:

![Ecrã da pergunta a mostrar o estado de tempo esgotado](/images/theme-design/frame3-question-timeout.png)

### Moldura 4 - anexo

As mesmas peças, redispostas à volta de uma área de anexo, com as opções à esquerda e à direita:

![Ecrã da pergunta com uma imagem ao centro](/images/theme-design/frame4-question-attachment.png)

Um anexo sozinho, a preencher o ecrã:

![Anexo em ecrã inteiro](/images/theme-design/frame4-attachment-fullscreen.png)

### Moldura 5 - o ecrã da resposta

Este ecrã passa por três momentos. Primeiro a distribuição, ainda sem nada assinalado:

![Ecrã da resposta a mostrar a distribuição](/images/theme-design/frame5-answer-mc-spread.png)

Depois a opção correta é assinalada e as erradas são riscadas:

![Ecrã da resposta com a opção correta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

E se a pergunta trouxer uma explicação, cai um balão por cima dos grafismos. Deixa-lhe espaço: aterra por cima do que quer que tenhas desenhado:

![Ecrã da resposta com o balão de explicação](/images/theme-design/frame5-answer-mc-explanation.png)

Com um grupo pequeno, o mesmo momento é uma lista de pontuações em vez de um gráfico:

![Ecrã da resposta para um grupo pequeno](/images/theme-design/frame5-answer-mc-small.png)

Numa pergunta aberta, o gráfico mostra quantos jogadores acertaram:

![Ecrã da resposta para uma pergunta aberta](/images/theme-design/frame5-answer-open.png)

### Moldura 6 - classificação e vencedor

A classificação depois de uma ronda. A linha de jogador é o elemento que se repete: posição, avatar, nome, pontuação.

![Classificação com seis linhas de jogador](/images/theme-design/frame6-roundoutro.png)

A contagem decrescente final nomeia um jogador de cada vez, do último lugar ao primeiro: lugar, pontuação e nome da equipa em destaque. É também aqui que os emoji voadores estão mais densos; vê a nota mais abaixo:

![A contagem decrescente do vencedor a nomear um jogador](/images/theme-design/frame6-winner-countdown.png)

![A classificação final](/images/theme-design/frame6-winner.png)

### Moldura 7 - a intro da ronda

Um único design, opcionalmente com uma variante por categoria:

![Intro da ronda para a categoria natureza](/images/theme-design/frame7-roundintro-nature.png)

![Intro da ronda para a categoria ciência](/images/theme-design/frame7-roundintro-science.png)

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

Na prática: as quatro opções de resposta são quatro camadas separadas, não uma. O temporizador está separado do fundo. Um botão e a sua etiqueta são dois elementos. Uma linha de jogador é um grupo que pode ser duplicado.

O que pode ser fundido: grafismos de fundo puramente decorativos que funcionem como uma única imagem fixa.

Esta é a única regra que dói mesmo quando não é seguida: os grafismos têm depois de ser desmontados ou redesenhados, que é exatamente o custo que esta forma de trabalhar pretende evitar.

### Efeitos que não sobrevivem

O motor desenha sobre uma tela HTML5. Estes têm de ser **fundidos na imagem** ou deixados de fora:

- Desfocagem, sombras projetadas e brilho em tempo real como filtros → entrega-os como grafismos
- Modos de fusão (multiplicar, tornar mais claro, sobrepor) → resolve-os em cor plana
- Efeitos de camada e camadas de ajuste
- Gradientes **dentro** de texto, ou texto com contorno por caráter
- Máscaras que mudam a cada fotograma

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
- **A caixa é um máximo, não uma promessa.** Desenhas as proporções dela; o enchimento varia.
- **Doze idiomas.** As palavras compostas alemãs são longas, e o húngaro não é mais benevolente. Uma caixa que fica justa em inglês desce para um tamanho ilegível em alemão.
- **Podem aparecer emoji dentro do texto.** Os jogadores escolhem um ao lado do nome da equipa, e uma pergunta ou uma opção pode conter um: às vezes uma opção não é mais do que um emoji. São desenhados a cores e são mais altos do que as letras à sua volta.

O que a construção precisa de saber sobre cada caixa de texto: onde está, que tamanho tem, como está alinhada, que cor e que tipo de letra leva. Não: em que corpo.

Daqui decorrem duas coisas que podes aproveitar: uma caixa grande com texto curto torna-se por si só uma composição tipográfica forte, e uma caixa que fazes deliberadamente estreita e alta obriga o texto a formar uma coluna. Podes usar esse ajuste como recurso de design; o que não deves é desenhar contra ele.

### O temporizador - obrigatório, e é uma animação

**Todos os ecrãs de pergunta têm temporizador.** Não é opcional; a sala tem de ver quanto tempo falta. As duas molduras de pergunta trazem um.

**O temporizador não é um número que conta, mas uma animação cuja cabeça de leitura o motor desloca.** Desenhas uma progressão de "cheio" a "vazio": uma barra a esvaziar, um anel a fechar, uma ampulheta, uma linha a encolher. O motor reproduz essa animação exatamente à velocidade que faz coincidir o último fotograma com o fim da pergunta.

Daqui decorre o seguinte:

- **A duração da pergunta não é fixa.** É definida por quiz: muitas vezes de vinte a trinta segundos, mas pode ser mais curta ou mais longa. A tua animação é esticada ou comprimida para encaixar. Desenha uma _progressão_, não uma animação com um número fixo de segundos.
- **Sem números nem marcas por segundo.** Um temporizador que conta "20, 19, 18…" deixa de ser verdadeiro assim que a duração muda.
- **Os últimos segundos são o momento de maior tensão do jogo.** Ajuda que a progressão se torne mais clara ou mais urgente para o fim.
- **Legível do fundo da sala**, num relance.
- **Vários temporizadores são permitidos.** Uma barra em cima e um anel junto à pergunta são ambos acionados, desde que cada um se chame `timer`.

Entrega o temporizador como uma série de fotogramas-chave ou como uma descrição da progressão: "a barra esvazia da direita para a esquerda e passa de verde a vermelho" chega.

### Os emoji voadores aterram por cima de tudo

Cada jogador escolhe um emoji ao entrar, e o jogo atira esses emoji pelo ecrã. São desenhados pelo motor numa camada acima do tema, nas cores que o emoji do jogador calhar ter. **Aqui não há nada para desenhares** - mas há algo à volta do qual desenhar, porque não são um adorno raro. Aparecem em três momentos:

- **Quando um jogador responde.** O emoji desse jogador sobe a partir da margem inferior numa posição horizontal aleatória, descreve um arco e volta a cair para fora do enquadramento.
- **Quando um jogador atira um.** Os jogadores podem atirar o seu emoji a partir do telemóvel; o ângulo e a velocidade vêm do gesto de deslize, e ele parte do centro inferior, a rodopiar.
- **Quando um lugar é revelado na contagem decrescente final.** Uma rajada dos emoji do jogador nomeado: vinte para um lugar comum, cinquenta para o terceiro, setenta e cinco para o segundo e **cento e cinquenta para o vencedor.**

Entram sempre pela margem inferior, descrevem um arco sob o efeito da gravidade e voltam a cair para fora. O que isso significa para o design:

- **Mantém o terço inferior dos ecrãs de classificação e de vencedor livre de tudo o que seja pequeno ou crítico.** Durante a contagem decrescente aquilo ali em baixo fica mesmo cheio.
- **Parte do princípio de que vão chocar com a tua paleta.** São emoji a cores plenas vindos de todos os cantos da tabela Unicode, e nenhum tema os controla. Um design que só se aguenta dentro de uma gama de cores apertada vai parecer acidental durante esses segundos.
- **Os lançamentos são suprimidos enquanto estiver a ser mostrada uma imagem ou um vídeo**, por isso os ecrãs com anexo mantêm-se limpos.
- A camada inteira pode ser desligada jogo a jogo, por isso também não construas uma composição que dependa de eles estarem lá.

### Tipos de letra

- **Os tipos de letra têm de poder ser incorporados.** É preciso o ficheiro `.ttf` ou `.otf`, mais uma licença que permita a incorporação numa aplicação. Um tipo de letra licenciado apenas como webfont, ou apenas para impressão, não pode ser usado. Verifica isto antes de desenhares com ele; depois é uma correção cara.
- Tipos de letra com ascendentes ou descendentes invulgarmente grandes podem ser compensados, mas assinala-o se usares algum.

### A cor como lista

O tema lê uma lista de cores de um ficheiro de configuração, e os telemóveis dos jogadores recebem o estilo a partir dessa mesma lista. Entrega a tua paleta como uma **lista com nomes**, e não apenas como cores nos grafismos:

- **Ecrã de jogo:** cor principal, cor de destaque, fundo, cor do painel ou do contentor, fundo do temporizador, cor de texto predefinida, cor do texto de cabeçalho, cor do texto da pergunta, texto dos botões, texto de diálogos e explicações, texto do nome do jogador e da pontuação, a cor do certo, a cor do errado.
- **As quatro opções de resposta:** cada uma com uma cor de fundo e uma de contorno, mais uma cor plana por opção para os telemóveis e para os gráficos.
- **Telemóveis dos jogadores:** fundo, cor do texto, cor do contorno, cor do contorno das opções, e a cor de fundo e de texto do contentor da resposta.

No ecrã de jogo são permitidos gradientes: indica-os como dois valores hexadecimais.

Algumas cores são o _único_ domínio que tens sobre partes que o próprio motor desenha, por isso vale a pena decidi-las em vez de as deixar por predefinição: o **separador** (os filetes entre linhas onde não há painel, e os da escada de pontos), os estados **ativo**, **inativo** e **selecionado** de uma linha do seletor de perguntas, o texto dos **diálogos**, e a **frente e o verso do código QR**. Se as deixares de fora, recaem em predefinições internas - branco, cinzento, vermelho, preto e branco - que raramente combinam com um design.

### O logótipo QuizWitz

Os designs à medida incluem o logótipo QuizWitz. Reserva-lhe um lugar onde não atrapalhe o design.

---

## O que entregar

### Ficheiro de origem - de preferência Illustrator

**O Adobe Illustrator (`.ai`) é preferível, e há uma razão concreta para isso.** O tema é construído no Adobe Animate, que importa ficheiros do Illustrator diretamente e converte as tuas camadas em camadas do Animate ou em símbolos separados, mantendo os nomes das camadas e deixando os vetores editáveis. É exatamente esse passo que poupa os grafismos de terem de ser reconstruídos à mão.

Figma ou Photoshop também dá, mas fica a saber o que custa: no Figma tudo passa por exportação para SVG e PNG, e é precisamente aí que se perde a estrutura de camadas necessária aqui. Se ainda assim usares o Figma, entrega **cada elemento separadamente em SVG**, com nomes de ficheiro correspondentes aos nomes das camadas, para que a estrutura possa ser reconstruída à mão. O Photoshop importa para o Animate com as camadas intactas, tal como o Illustrator, mas dá-te rasterizado em vez de vetorial.

Se fores mais rápido no Figma, usa-o para a fase de conceito e entrega a versão final em Illustrator.

Estrutura do ficheiro:

- Uma prancheta por ecrã, cada uma exatamente com 1920 × 1080, com o nome das molduras acima.
- As peças reutilizáveis (botão, linha de jogador, opção de resposta, temporizador) como **símbolos** ou componentes, não como cópias soltas.
- Nomes de camada em inglês, sem espaços: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Cores como amostras com nome e texto como estilos com nome, em vez de definidos objeto a objeto.

### Lista de entregáveis

1. O **ficheiro de origem**, estruturado como acima.
2. **Cada moldura em PNG**, 1920 × 1080 - uma referência de como deve ficar. Para a moldura 2, tanto a versão com como a versão sem logótipo do cliente.
3. **A folha de elementos** numa só prancheta: os blocos de conteúdo e os controlos enumerados acima.
4. **Cada elemento gráfico separado em PNG transparente a 2×**, numa pasta, com o nome de ficheiro igual ao nome da camada.
5. **O temporizador** como fotogramas-chave ou como descrição escrita da progressão.
6. **Os tipos de letra** em `.ttf` ou `.otf`, com comprovativo de licença.
7. **A lista de cores** descrita acima, em valores hexadecimais.
8. **Meia página de notas**: qual é a ideia, como devem aparecer as opções, o que se move e o que fica parado. Não uma justificação de design de dez páginas: quem constrói o tema precisa de saber o que construir. As ideias de movimento podem ser descritas ou entregues como um animatic tosco.

### Ordem de trabalho

Começa pela moldura 3, o ecrã da pergunta, juntamente com a folha de elementos, e faz aprovar as duas antes do resto. Entre elas levam o temporizador, as opções, o painel e todos os controlos, por isso fixam o estilo do tema inteiro, e o ecrã da pergunta é aquele para o qual a sala olha mais tempo. As molduras 1 e 2 decorrem naturalmente delas; as molduras 5 a 7 ficam para o fim.

---

## Anexo - nomes dos símbolos

Para ficar completo, e para quem quiser saber exatamente onde vão parar os seus grafismos. **Não precisas de ler isto para fazer o trabalho**; as sete molduras e a folha de elementos acima chegam. Usar estes nomes como nomes de camada poupa um passo de tradução.

| Moldura                                                  | Nome do símbolo                                                                                                                           | Peças obrigatórias                                                                                                                                                                                                   |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Moldura geral                  | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` opcional                                                                         | `placeholder` (a área de conteúdo); caixa de texto `title` opcional                                                                                                                               |
| 1b. Seletor de perguntas, pergunta longa | `MultiQuestionScreen`, `LongQuestionScreen`; ambos opcionais, recorrem à moldura geral                                                    | seletor: marcador `questions`, `timer`; pergunta longa: marcador `question`                                                                                                          |
| 2. Ecrã de ligação                | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` opcional, com um marcador `logo`                                         | `instructions.line1` a `line5`, `connectedPlayers`; marcador `qrCode` com a etiqueta de fotograma `showQrCode` opcional                                                                                              |
| 2b. Ecrã de espera                       | `PendingScreen`; `PendingScreenWithLogo` opcional                                                                                         | `header.text`                                                                                                                                                                                                        |
| 3. Ecrã da pergunta               | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` a `option4`, etiquetas de fotograma `showOptions` e `showFeedback`                                                                                              |
| 4. Pergunta com anexo             | `QuestionScreenAttachment`                                                                                                                | como acima, mais `attachment.placeholder`                                                                                                                                                                            |
| 4b. Anexo em ecrã inteiro                | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                        |
| 5. Ecrã da resposta               | `AnswerPieScreen`; `AnswerPieScreenAttachment` opcional                                                                                   | `option1` a `option4`, `answer.text`, `feedback.text`                                                                                                                                                                |
| 5b. Resposta a pergunta aberta           | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; variantes `…Attachment` opcionais                                                          | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                                |
| 6. Classificação                  | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` e `PlayerScoreNoImage` opcionais                                | `header.text`, `players`, `feedback.text` (`playAgain.text` opcional); na linha: `position`, `name`, `score`, `avatar` opcional                                                   |
| 7. Intro da ronda                 | um ou mais símbolos com qualquer nome; o ficheiro de configuração associa cada uma das seis categorias a um símbolo                       | -                                                                                                                                                                                                                    |
| -                                                        | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                                   |
| -                                                        | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | não precisam de grafismos próprios - construídos a partir do que aparece nas tuas molduras                                                                                                                           |
| -                                                        | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | só aparecem na aplicação de ambiente de trabalho, não num quiz ao vivo. Não fazem parte do briefing: são retirados do modelo do tema e restilizados com o teu fundo e os teus botões |

Os símbolos de intro da ronda do tema de origem chamam-se `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` e `RoundIntroTedCultHist`; arte e história partilham o último. O "Ted" nesses nomes é um resto da personagem do tema original e não significa que tenha de aparecer nelas uma personagem.

Cada elemento com `.text` a seguir é uma caixa de texto ajustada como se descreveu acima: um retângulo que o motor preenche sozinho. O elemento `timer` é um clipe de filme com uma linha temporal própria; o motor lê o seu número de fotogramas e desloca a cabeça de leitura proporcionalmente ao tempo decorrido, no máximo 24 vezes por segundo.

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

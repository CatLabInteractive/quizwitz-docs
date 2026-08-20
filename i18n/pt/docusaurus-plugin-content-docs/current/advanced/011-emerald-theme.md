---
id: emerald-theme
title: Tema Emerald
---

# Tema Emerald

O tema Emerald é a forma mais fácil de personalizar o visual do teu jogo QuizWitz. Por padrão, o tema tem um estilo limpo em azul / verde, com cores de opções vibrantes, mas ao combinares anexos de quiz e modificadores de tema podes mudar o visual dele — drasticamente.

:::tip
Podes usar o nosso [testador de tema](https://client.quizwitz.com/test.html?theme=emerald) para ver como as tuas definições vão ficar.
:::

![Uma captura de ecrã do tema emerald](/images/emerald/emerald.png)

## Seleciona o tema Emerald

Nas tuas **Definições do quiz**, seleciona **Tema** e ativa **Emerald**.

Podes testar um quiz usando o tema Emerald [aqui](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Uma captura de ecrã das definições do quiz](/images/emerald/quiz-settings.png)

## Anexos

### Anexos do quiz

De longe, a forma mais fácil de mudar o visual e a sensação do jogo é anexando imagens ao teu quiz. Abre as **Definições do quiz** e desce até à secção **Anexos**. Aqui podes carregar imagens que serão usadas como fundo, logótipo do cliente, ecrãs de ligação — e de espera (para quizzes de conferência — e ao vivo), e muito mais.

![Uma captura de ecrã dos anexos do quiz](/images/emerald/quiz-attachments.png)

### Anexos de ronda

Também podes carregar imagens ou vídeos que serão reproduzidos antes e depois do jogo. Isto também se aplica às rondas: encontra uma imagem que queiras usar como introdução da ronda, vai a **definições da ronda**, desativa **Mostrar introdução da ronda** para ocultar a introdução padrão da ronda e carrega a tua imagem ou vídeo como **Mostrar antes da ronda**. Quando a ronda começar, a imagem ou o vídeo será apresentado em vez da introdução padrão.

![Uma captura de ecrã dos anexos da ronda](/images/emerald/round-settings.png)

:::tip
Usa imagens e vídeos com resolução de 1920 x 1080 para obteres os melhores resultados.
:::

:::info
Depois de brincar com os anexos, ficamos com algo [assim](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Uma captura de ecrã do tema emerald com anexos de quiz](/images/emerald/emerald-with-attachments.png)

### Música

Toda a música no jogo também pode ser substituída por anexos. Quaisquer ficheiros de áudio carregados nos espaços **durante a pergunta** serão reproduzidos durante a contagem decrescente da pergunta.

## Modificadores do tema Emerald

Além dos anexos, também podes manipular o tema Emerald com **parâmetros de consulta**. Estes são parâmetros que podes adicionar ao URL das **opções avançadas do jogo** — e eles mudam o visual do tema.

Para isto, vamos começar com um quiz de exemplo (sem quaisquer anexos):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Quando iniciares o quiz acima, o jogo estará no estilo Emerald padrão. Vamos mudar isso.

:::tip
A forma mais fácil de experimentar estes parâmetros é usando o nosso [testador de tema](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Quando terminares de experimentar, podes copiar — colar os parâmetros no URL das tuas opções avançadas do jogo.
:::

Os modificadores disponíveis são:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 cores, separadas por vírgula)
- optionBorderColors (4 cores, separadas por vírgula)

Além disso, podes definir uma fonte padrão:

- defaultFont
- headerFont

Estas fontes devem ser URLs para ficheiros de fonte disponíveis publicamente.

Cada um destes modificadores pode conter uma única cor em formato hexadecimal HTML (ff0000), ou um gradiente linear fornecendo várias cores separadas por um símbolo de menos ( — por exemplo, ff1b6b-45caff). (Nota que o símbolo # não deve ser adicionado.)

:::note
Os parâmetros de consulta devem começar com um ponto de interrogação ( ? ) e cada parâmetro deve ser separado por um e comercial ( & ). Para mais informações sobre parâmetros de consulta, visita a [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Ao adicionares estes parâmetros ao URL do teu jogo, podes modificar as cores no tema:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Uma captura de ecrã do tema Emerald com modificadores personalizados](/images/emerald/theme_properties.png)

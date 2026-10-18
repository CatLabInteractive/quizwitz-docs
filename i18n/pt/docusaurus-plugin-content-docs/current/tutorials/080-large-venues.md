---
id: large-venues
title: Grandes espaços, iluminação e som
---

# 🏟️ Grandes espaços, iluminação e som

O QuizWitz Live adapta-se de um quiz de bar a grandes espaços com centenas de jogadores. Este guia explica o que muda quando passas para um palco maior: a rede, o som e a sincronização da tua iluminação (ou de outro equipamento de espetáculo) com o jogo.

> 🧭 Se és novo no QuizWitz Live, começa com o [**guia de inicialização do Quizmaster**](../quizmaster/002-startup.md).

---

## 🌐 Uma ligação à internet estável

Todas as partes de um jogo ao vivo comunicam entre si através dos nossos servidores em tempo real: o ecrã de jogo, a Quizmaster App, a app do júri, as ferramentas de regie e o dispositivo de cada jogador. Uma ligação à internet estável é o requisito mais importante para um grande evento.

- Liga o computador do ecrã de jogo e os computadores de regie com um **cabo de rede**. Não dependas do wifi do espaço nem de um hotspot móvel para estes.
- Garante que os jogadores têm boa cobertura de wifi ou de rede móvel (4G/5G) em toda a sala. Uma sala cheia pode sobrecarregar uma rede wifi pequena.
- Clica em **Carregar quiz** bem antes do início. O QuizWitz pré-carrega todas as imagens, áudio e vídeo, para que os anexos sejam reproduzidos sem falhas quando o quiz estiver a decorrer.

---

## 🔊 Som: tudo é reproduzido pelo ecrã de jogo

Todo o som é reproduzido pelo ecrã de jogo: a música e os efeitos sonoros do QuizWitz, e cada anexo de áudio ou vídeo que adicionas às tuas perguntas, rondas ou quiz (música do ecrã de ligação, música de fim de ronda, etc.). Tudo está sincronizado com o que acontece no ecrã.

Por isso, só precisas de ligar a **saída de áudio do computador do ecrã de jogo** à tua mesa de mistura ou ao sistema de som. Não há deixas de som separadas para disparar à mão.

- Usa o controlo de volume na barra de controlo do jogo para definir o nível ou para silenciar todos os sons do quiz.
- Para reproduzir apenas o teu próprio áudio carregado, adiciona `music=0` ao link do jogo (consulta os [parâmetros avançados](../advanced/020-advanced-parameters.md)). `connectMusic=0` desliga apenas a música no ecrã de ligação.

---

## 💡 Iluminação: o controlador MIDI

O controlador MIDI em [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) transforma eventos do jogo em notas MIDI. Associa essas notas a deixas no teu software ou mesa de iluminação, e as tuas luzes seguem o jogo automaticamente.

Nós usamo-lo com o [QLC+](https://www.qlcplus.org/) (software de iluminação gratuito que controla aparelhos DMX), mas como envia MIDI simples, funciona com a maioria das mesas e software de iluminação que aceitam entrada MIDI, bem como com mesas de som, misturadores de vídeo e outro equipamento de espetáculo.

### Ligar

1. Inicia o teu jogo QuizWitz Live. A Quizmaster App mostra o **código regie** ao lado do código de quizmaster e do código do júri.
2. No computador ligado ao teu sistema de iluminação, abre [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) no **Google Chrome**. O controlador usa Web MIDI, que outros navegadores podem não suportar.
3. Permite o acesso MIDI quando o Chrome o pedir.
4. Introduz o código regie e clica em **Connect**.
5. Seleciona o dispositivo MIDI de saída (**Output**) e o canal (canal 1 por predefinição).

Se o teu software de iluminação estiver no mesmo computador, usa uma porta MIDI virtual: o **IAC Driver** no macOS, ou uma ferramenta como o **loopMIDI** no Windows.

> ⚠️ Mantém o separador do controlador aberto durante todo o jogo. Fechá-lo interrompe as notas MIDI.

### Como funciona

Cada evento do jogo tem o seu próprio número de nota MIDI fixo. Quando o evento acontece, o controlador toca essa nota no canal de saída. O número da nota é mostrado em cada botão do controlador.

- **Carrega num botão** para enviar a sua nota manualmente. Usa isto para configurar e testar o teu mapeamento antes do espetáculo.
- Um botão fica **vermelho** por um momento quando o jogo o aciona.
- A maioria dos eventos só é enviada uma vez seguida: se o mesmo evento acontecer duas vezes seguidas, o segundo é ignorado. Resposta correta e resposta incorreta são enviadas sempre, para que possas fazer piscar as luzes a cada resposta revelada.
- **Feedback** (opcional): seleciona uma entrada MIDI e um canal (canal 2 por predefinição). As notas que o teu software de iluminação envia de volta acendem os botões correspondentes a verde, para que vejas que deixas estão ativas.

### Notas MIDI

| Nota | Evento |
|---|---|
| 1 | Introdução do jogo |
| 2 | Introdução do jogo: parar |
| 3 | Introdução da ronda |
| 4 | Introdução da ronda: parar |
| 5 | Introdução da ronda relâmpago |
| 6 | Introdução da ronda relâmpago: parar |
| 10 | Início da pergunta |
| 11 | Pergunta em curso |
| 12 | O temporizador da pergunta começa |
| 13 | O temporizador da pergunta para |
| 14 | Pergunta concluída |
| 20 | Temporizador da pergunta a 25% |
| 21 | Temporizador da pergunta a 33% |
| 22 | Temporizador da pergunta a 50% |
| 23 | Temporizador da pergunta a 66% |
| 24 | Temporizador da pergunta a 75% |
| 30 | Anexo mostrado |
| 31 | Anexo escondido |
| 40 | Antes do resultado da pergunta |
| 41 | Resultado da pergunta |
| 42 | Resposta correta revelada |
| 43 | Resposta incorreta revelada |
| 44 | Resultado da pergunta: parar |
| 45 | Todos responderam corretamente |
| 46 | Ninguém respondeu corretamente |
| 47 | Apenas uma resposta correta |
| 50 | Resultado da ronda |
| 51 | Resultado da ronda: parar |
| 52 | Resultado da ronda relâmpago |
| 53 | Resultado da ronda relâmpago: parar |
| 60 | Intervalo |
| 61 | Intervalo: parar |
| 70 | Resultado final |
| 71 | Resultado final: uma posição é revelada |
| 72 | Resultado final: o vencedor é revelado |
| 73 | Resultado final: parar |

### Iluminação por pergunta

Podes dar a cada pergunta o seu próprio ambiente de iluminação. No editor de quizzes, abre as definições da pergunta e adiciona **Iluminação** (em *Apresentação*). Quando o temporizador da pergunta começa, o controlador envia a nota desse ambiente. As perguntas sem ambiente de iluminação enviam a nota *Padrão*, para que as tuas luzes possam voltar ao estado normal.

| Nota | Iluminação |
|---|---|
| 100 | Padrão |
| 101 | Contagem decrescente |
| 102 | Festa disco |
| 103 | Zona de guerra |
| 104 | Alerta vermelho |
| 105 | Noite estrelada |
| 106 | Fuga prisional |
| 107 | Materiais perigosos |
| 108 | Rosa aconchegante |
| 109 | Atlantis |
| 110 | Selva |
| 111 | Oceano azul |
| 112 | Oceano amarelo |
| 113 | Oceano verde |
| 114 | Oceano roxo |
| 115 | Oceano laranja |
| 116 | Oceano vermelho |
| 117 | Vermelho contra azul |

Os nomes são sugestões: o que cada nota faz depende de ti e da tua configuração de iluminação.

---

## 🛠️ Mais ferramentas de regie

[**regie.catlab.eu**](https://regie.catlab.eu) tem mais ferramentas para grandes eventos. Todas usam o código regie.

- **Teleponto** - um segundo ecrã de quizmaster com deslocamento automático e espelhamento
- **Ecrã de realização** - envia mensagens aos apresentadores num ou mais monitores de palco
- **Controlador OBS** - muda as cenas do OBS automaticamente durante o jogo (consulta [quiz em livestream](040-livestreaming.md))
- **Temporizador** - mostra os temporizadores do QuizWitz num ecrã separado
- **Ecrã duplicado** - mostra uma cópia do ecrã de jogo noutro monitor

---

## ✅ Exemplo de configuração

- **Computador do ecrã de jogo** - ligado ao projetor ou à parede LED e ao sistema de som, com um cabo de rede
- **Computador de regie** - o controlador MIDI no Chrome, ligado ao teu sistema de iluminação, com um cabo de rede
- **Tablet ou telemóvel** - a Quizmaster App
- **Portátil ou tablet** - a app do júri, para ajustar pontuações e controlar o jogo

> 💡 Faz um ensaio completo no espaço antes do evento, para poderes testar as tuas deixas de iluminação, os níveis de som e a rede.

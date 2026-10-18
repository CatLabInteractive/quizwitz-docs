---
id: large-venues
title: Grandes recintos, iluminación y sonido
---

# 🏟️ Grandes recintos, iluminación y sonido

QuizWitz Live se adapta desde un quiz de bar hasta grandes recintos con cientos de jugadores. Esta guía explica qué cambia cuando pasas a un escenario más grande: la red, el sonido y la sincronización de tu iluminación (u otro equipo del espectáculo) con el juego.

> 🧭 Si eres nuevo en QuizWitz Live, empieza con la [**Guía de inicio del quizmaster**](../quizmaster/002-startup.md).

---

## 🌐 Una conexión a internet estable

Todas las partes de un juego en directo se comunican entre sí a través de nuestros servidores en tiempo real: la pantalla de juego, la Quizmaster App, la app del jurado, las herramientas regie y el dispositivo de cada jugador. Una conexión a internet estable es el requisito más importante para un evento grande.

- Conecta el ordenador de la pantalla de juego y cualquier ordenador regie con un **cable de red**. No dependas del wifi del recinto ni de un punto de acceso móvil para estos equipos.
- Asegúrate de que los jugadores tengan buena cobertura wifi o móvil (4G/5G) en toda la sala. Una sala llena puede sobrecargar una red wifi pequeña.
- Haz clic en **Cargar quiz** con bastante antelación. QuizWitz precarga todas las imágenes, el audio y el vídeo, para que los adjuntos se reproduzcan sin problemas una vez que el quiz esté en marcha.

---

## 🔊 Sonido: todo suena a través de la pantalla de juego

Todo el sonido lo reproduce la pantalla de juego: la música y los efectos de sonido de QuizWitz, y cada adjunto de audio o vídeo que añadas a tus preguntas, rondas o quiz (música de la pantalla de conexión, música de cierre de ronda, etc.). Todo está sincronizado con lo que ocurre en pantalla.

Así que solo tienes que conectar la **salida de audio del ordenador de la pantalla de juego** a tu mesa de mezclas o equipo de sonido (PA). No hay efectos de sonido separados que lanzar a mano.

- Usa el control deslizante de volumen de la barra de control del juego para ajustar el nivel o para silenciar todos los sonidos del quiz.
- Para reproducir solo tu propio audio subido, añade `music=0` al enlace del juego (consulta los [parámetros avanzados](../advanced/020-advanced-parameters.md)). `connectMusic=0` solo desactiva la música de la pantalla de conexión.

---

## 💡 Iluminación: el controlador MIDI

El controlador MIDI de [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) convierte los eventos del juego en notas MIDI. Asigna esas notas a cues de tu software o consola de iluminación, y tus luces seguirán el juego automáticamente.

Nosotros lo usamos con [QLC+](https://www.qlcplus.org/) (software de iluminación gratuito que controla aparatos DMX), pero envía MIDI estándar, así que funciona con la mayoría de consolas y programas de iluminación que aceptan entrada MIDI, además de mesas de sonido, mezcladores de vídeo y otro equipo del espectáculo.

### Conexión

1. Inicia tu juego de QuizWitz Live. La Quizmaster App muestra el **código regie** junto al código de quizmaster y el código del jurado.
2. En el ordenador conectado a tu sistema de iluminación, abre [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) en **Google Chrome**. El controlador usa Web MIDI, que puede que otros navegadores no admitan.
3. Permite el acceso MIDI cuando Chrome lo pida.
4. Introduce el código regie y haz clic en **Connect**.
5. Selecciona el dispositivo MIDI de **Output** y el canal (canal 1 por defecto).

Si tu software de iluminación se ejecuta en el mismo ordenador, usa un puerto MIDI virtual: el **IAC Driver** en macOS, o una herramienta como **loopMIDI** en Windows.

> ⚠️ Mantén abierta la pestaña del controlador durante todo el juego. Si la cierras, se dejan de enviar las notas MIDI.

### Cómo funciona

Cada evento del juego tiene su propio número de nota MIDI fijo. Cuando ocurre el evento, el controlador toca esa nota en el canal de salida. El número de nota aparece en cada botón del controlador.

- **Pulsa un botón** para enviar su nota a mano. Úsalo para configurar y probar tu asignación antes del espectáculo.
- Un botón se pone **rojo** por un momento cuando el juego lo activa.
- La mayoría de los eventos solo se envían una vez seguida: si el mismo evento ocurre dos veces seguidas, el segundo se omite. Respuesta correcta y respuesta incorrecta se envían siempre, para que puedas hacer destellar las luces con cada respuesta que se revela.
- **Feedback** (opcional): selecciona una entrada MIDI y un canal (canal 2 por defecto). Las notas que tu software de iluminación devuelve iluminan en verde los botones correspondientes, para que veas qué cues están activos.

### Notas MIDI

| Nota | Evento |
|---|---|
| 1 | Introducción del juego |
| 2 | Introducción del juego: parar |
| 3 | Introducción de la ronda |
| 4 | Introducción de la ronda: parar |
| 5 | Introducción de la ronda relámpago |
| 6 | Introducción de la ronda relámpago: parar |
| 10 | Inicio de la pregunta |
| 11 | Pregunta en curso |
| 12 | Empieza el temporizador de la pregunta |
| 13 | Se detiene el temporizador de la pregunta |
| 14 | Pregunta terminada |
| 20 | Temporizador de la pregunta al 25 % |
| 21 | Temporizador de la pregunta al 33 % |
| 22 | Temporizador de la pregunta al 50 % |
| 23 | Temporizador de la pregunta al 66 % |
| 24 | Temporizador de la pregunta al 75 % |
| 30 | Adjunto mostrado |
| 31 | Adjunto ocultado |
| 40 | Antes del resultado de la pregunta |
| 41 | Resultado de la pregunta |
| 42 | Respuesta correcta revelada |
| 43 | Respuesta incorrecta revelada |
| 44 | Resultado de la pregunta: parar |
| 45 | Todos respondieron correctamente |
| 46 | Nadie respondió correctamente |
| 47 | Solo una respuesta correcta |
| 50 | Resultado de la ronda |
| 51 | Resultado de la ronda: parar |
| 52 | Resultado de la ronda relámpago |
| 53 | Resultado de la ronda relámpago: parar |
| 60 | Intermedio |
| 61 | Intermedio: parar |
| 70 | Resultado final |
| 71 | Resultado final: se revela una posición |
| 72 | Resultado final: se revela el ganador |
| 73 | Resultado final: parar |

### Iluminación por pregunta

Puedes dar a cada pregunta su propio ambiente de iluminación. En el editor de quiz, abre los ajustes de la pregunta y añade **Iluminación** (en *Presentación*). Cuando empieza el temporizador de la pregunta, el controlador envía la nota de ese ambiente. Las preguntas sin ambiente de iluminación envían la nota *Predeterminado*, para que tus luces puedan volver a su estado normal.

| Nota | Iluminación |
|---|---|
| 100 | Predeterminado |
| 101 | Cuenta atrás |
| 102 | Fiesta disco |
| 103 | Zona de guerra |
| 104 | Alerta roja |
| 105 | Noche estrellada |
| 106 | Fuga de prisión |
| 107 | Materiales peligrosos |
| 108 | Rosa acogedor |
| 109 | Atlantis |
| 110 | Jungla |
| 111 | Océano azul |
| 112 | Océano amarillo |
| 113 | Océano verde |
| 114 | Océano púrpura |
| 115 | Océano naranja |
| 116 | Océano rojo |
| 117 | Rojo contra azul |

Los nombres son sugerencias: lo que hace cada nota depende de ti y de tu configuración de iluminación.

---

## 🛠️ Más herramientas regie

[**regie.catlab.eu**](https://regie.catlab.eu) tiene más herramientas para eventos grandes. Todas usan el código regie.

- **Teleprompter** - una segunda pantalla para el quizmaster con desplazamiento automático y modo espejo
- **Pantalla de dirección** - envía mensajes a los quizmasters en uno o más monitores de escenario
- **Controlador de OBS** - cambia escenas de OBS automáticamente durante el juego (consulta [quiz en directo](040-livestreaming.md))
- **Temporizador de cuenta atrás** - muestra los temporizadores de QuizWitz en una pantalla aparte
- **Pantalla duplicada** - muestra una copia de la pantalla de juego en otro monitor

---

## ✅ Ejemplo de configuración

- **Ordenador de la pantalla de juego** - conectado al proyector o pantalla LED y al equipo de sonido (PA), con un cable de red
- **Ordenador regie** - el controlador MIDI en Chrome, conectado a tu sistema de iluminación, con un cable de red
- **Tablet o teléfono** - la Quizmaster App
- **Portátil o tablet** - la app del jurado, para ajustar puntuaciones y controlar el juego

> 💡 Haz un ensayo completo en el recinto antes del evento, para poder probar los cues de iluminación, los niveles de sonido y la red.

---
id: theme-design-guide
title: Guía de diseño de temas
---

# Guía de diseño de temas

[Temas](/docs/advanced/theming) explica cómo se construye un tema de QuizWitz: en Adobe Animate, exportado como biblioteca de CreateJS. Esta página trata el paso anterior: el **diseño** del tema.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Esta página describe esa forma y sirve al mismo tiempo como lista de entregables cuando le pides un presupuesto a un diseñador.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Si solo quieres cambiar colores, fuentes y fondos, no necesitas nada de esto: personaliza en su lugar el [tema Emerald](/docs/advanced/emerald-theme).
:::

:::info[Verlo en marcha]
Todas las pantallas que se describen aquí se pueden jugar en directo, con datos de ejemplo, en el **probador de temas** en [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Carga un tema y ofrece un menú de pantallas de prueba: preguntas con y sin adjunto, la distribución de respuestas para un grupo pequeño y uno grande, la clasificación, las intros de ronda, la pantalla de conexión con y sin logotipo de cliente, y así sucesivamente. Añade `?theme=emerald` a la dirección para ver el [tema Emerald](/docs/advanced/emerald-theme). Quien construye el tema usa esa misma página para revisarlo mientras lo monta.
:::

---

## Qué estás diseñando

Una partida de QuizWitz la juega toda una sala a la vez, y siempre hay dos pantallas en juego:

- **La pantalla de juego**: un proyector o un televisor, 1920 × 1080. Preguntas, respuestas, cómo se repartieron las respuestas de la sala, la clasificación. Esto es lo que diseñas tú.
- **El móvil de cada jugador**, donde escribe su respuesta. Es una página web con una maquetación fija; se estiliza a partir de tu lista de colores, no la maquetas tú.

Un tema es la piel visual completa de la pantalla de juego: fondo, tipografía, color, la forma en que se presenta una pregunta con cuatro opciones, cómo se construye la clasificación, cómo se anuncia una ronda.

---

## Eight frames and an element sheet

El juego tiene decenas de estados de pantalla distintos, pero la mayoría son variantes de la misma maquetación. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Una pantalla sin material gráfico propio recae en un marco general.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Marco                                                           | Also covers                                                               |
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
Las pantallas de abajo provienen de un tema existente. They show **which elements appear on each screen and when**. No son una referencia de estilo _ni_ de maquetación: dónde coloca este tema su pregunta, sus opciones y su temporizador es decisión suya, y la tuya puede ser completamente distinta.
:::

### Marco 1: el marco general

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. El selector de preguntas y la pregunta larga pueden tener su propia composición si así lo quieres; si no, usan este marco.

Dos momentos de juego sobre el mismo marco: un selector de preguntas y una escalera de puntos.

![El marco general con un selector de preguntas de tres filas](/images/theme-design/frame1-general-multiquestion.png)

![El marco general con una escalera de puntos de cinco niveles](/images/theme-design/frame1-general-strikeladder.png)

Fíjate en lo poco que tienen en común. El selector pone sus tres filas dentro de un panel con borde; la escalera no tiene panel alguno, solo filas separadas por líneas finas. Lo que ambos comparten es el fondo y la banda de cabecera de arriba: todo lo que hay debajo pertenece a la pantalla concreta y lo llena el juego, no tú.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Lo que este marco tiene que hacer es sostenerlos: diseña el área de contenido como una zona vacía, neutra y amplia que funcione igual de bien con un panel con borde, con una lista desnuda y con una tabla de filas. Un fondo recargado en el centro, o una cabecera que solo funciona con un panel encajado justo debajo, es donde eso se rompe.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Pantalla de conexión con logotipo de cliente](/images/theme-design/frame2-connect.png)

![Pantalla de conexión sin logotipo de cliente](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Pantalla de espera](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Pantalla de pregunta con cuatro opciones de texto](/images/theme-design/frame3-question-options.png)

![Pantalla de pregunta con banderas como opciones de respuesta](/images/theme-design/frame3-question-emoji.png)

Una pregunta sin opciones: los jugadores escriben su respuesta en el móvil. La pantalla está casi vacía y el temporizador se convierte en el elemento principal:

![Pregunta abierta solo con la pregunta y un temporizador grande](/images/theme-design/frame3-question-open.png)

El momento en que se acaba el tiempo. El globo de feedback aparece sobre la pantalla y el temporizador queda vacío:

![Pantalla de pregunta mostrando el estado de tiempo agotado](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. El adjunto se escala para caber dentro del recuadro que dibujas, así que tanto una imagen apaisada como una vertical tienen que verse aceptables en él.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Pantalla de pregunta con una imagen en el medio](/images/theme-design/frame4-question-attachment.png)

Un adjunto por sí solo, ocupando la pantalla:

![Adjunto a pantalla completa](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Primero la distribución, todavía sin nada marcado:

![Pantalla de respuesta mostrando la distribución](/images/theme-design/frame5-answer-mc-spread.png)

Después se marca la opción correcta y se tachan las incorrectas:

![Pantalla de respuesta con la opción correcta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

Y si la pregunta lleva una explicación, cae un globo sobre el material gráfico. Déjale sitio: aterriza encima de lo que hayas diseñado:

![Pantalla de respuesta con el globo de explicación](/images/theme-design/frame5-answer-mc-explanation.png)

Con un grupo pequeño, ese mismo momento es una lista de puntuaciones en lugar de un gráfico:

![Pantalla de respuesta para un grupo pequeño](/images/theme-design/frame5-answer-mc-small.png)

En una pregunta abierta, el gráfico muestra cuántos jugadores acertaron:

![Pantalla de respuesta para una pregunta abierta](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Clasificación con seis filas de jugador](/images/theme-design/frame6-roundoutro.png)

La cuenta atrás final nombra a un jugador cada vez, del último puesto al primero: puesto, puntuación y nombre de equipo bajo los focos. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![La cuenta atrás del ganador nombrando a un jugador](/images/theme-design/frame6-winner-countdown.png)

![La clasificación final](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Hay seis categorías: ciencia y tecnología, naturaleza, entretenimiento y música, deporte, arte, historia.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Intro de ronda para la categoría naturaleza](/images/theme-design/frame7-roundintro-nature.png)

![Intro de ronda para la categoría ciencia](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Sin personaje, la intro de ronda se convierte en un momento gráfico, tipográfico o ilustrativo. Dos enfoques mantienen el trabajo en proporción: una composición con una variante de color o de icono por categoría, o un único anuncio universal en el que solo cambia el nombre de la ronda. Seis intros realmente distintas son mucho trabajo para unos pocos segundos en pantalla.

---

## La hoja de elementos

Dos grupos de elementos, en una sola hoja, cada uno dibujado una vez y reutilizado en todas partes.

**Bloques de contenido.** Estos llenan el área de contenido del marco general. Las pantallas que recaen en él se montan a partir de ellos, así que lo que dibujes aquí decide el aspecto de todas:

- un **panel**: relleno, borde, radio de esquina; el contenedor en el que va una lista o un bloque de texto
- una **fila de lista**: la unidad que se repite en cualquier lista, con fondo propio o sin él
- un **separador**: la línea entre filas, donde no hay panel
- un **par etiqueta-valor**: una etiqueta corta a la izquierda, un valor a la derecha

**Controles.** Dibujados una vez, usados en todas las pantallas:

- un **botón** en sus cuatro estados: reposo, hover, pulsado, desactivado
- los símbolos de **correcto** e **incorrecto**
- una **barra de desplazamiento**, una **casilla de verificación**, una **lista desplegable**
- dónde se sitúa el **logotipo de QuizWitz**

---

## Lo que ya está decidido

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Qué pantallas recaen en el marco general, y cómo.**
- **Cómo se asocian las seis categorías al material gráfico de la intro de ronda.** Esa asociación es un ajuste de configuración, así que una misma intro puede reutilizarse para varias categorías.
- **Todos los tiempos y todas las duraciones de animación.**
- **El sonido.** Un tema puede llevar su propia música y sus propios efectos de sonido, pero eso es un entregable aparte y no forma parte del encargo de diseño.

---

## Reglas de diseño

Ninguna de ellas limita tu diseño visual. Tienen que ver con cómo está construido el archivo.

### Formato

- **1920 × 1080 píxeles**, exactamente. Un marco por pantalla.
- Trabaja **en vectorial** siempre que puedas. Donde uses mapa de bits (fotos, texturas): al menos 2× el tamaño de visualización.
- El documento de Animate va a **24 fotogramas por segundo**. Relevante si aportas ideas de movimiento.
- Deja un **margen del 5 %** en los bordes libre de información esencial. Los proyectores recortan.

### Estructura de capas: la regla que más importa

**Todo lo que pueda moverse, aparecer o cambiar de valor va en su propia capa con nombre.** Nada combinado, nada acoplado.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Lo que sí puede combinarse: el material gráfico de fondo puramente decorativo que funcione como una sola imagen fija.

Esta es la única regla que duele de verdad cuando no se sigue: hay que despiezar o volver a dibujar el material gráfico, que es justo el coste que este planteamiento pretende evitar.

### Efectos que no sobreviven

El motor dibuja sobre un canvas HTML5. Estos hay que **hornearlos en la imagen** o dejarlos fuera:

| Effect                                                             | What to do instead          |
| ------------------------------------------------------------------ | --------------------------- |
| Live blur, drop shadows and glow as filters                        | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)         | Resolve them to flat colour |
| Efectos de capa y capas de ajuste                                  | Bake them in                |
| Degradados **dentro** del texto, o texto con contorno por carácter | Leave them out              |
| Máscaras que cambian en cada fotograma                             | Leave them out              |

Los degradados en formas van bien. La transparencia va bien. Las sombras como material gráfico fijo van bien.

### Cómo se comporta el texto

Aquí es donde diseñar para QuizWitz más se aparta del trabajo de diseño habitual.

**No fijas un cuerpo de letra. Dibujas un recuadro.**

Todo el texto lo dibuja en vivo un componente que recibe dos cosas: una cadena y el rectángulo que has dibujado. Después busca **el mayor cuerpo de letra con el que esa cadena, repartida en varias líneas, sigue cabiendo dentro del recuadro**. Una cadena larga se encoge para caber; una corta crece hasta llenar el recuadro.

![Un selector en el que tres líneas de distinta longitud reciben cada una un cuerpo distinto](/images/theme-design/frame1-general-multiquestion.png)

Tres filas, tres recuadros idénticos, y tres cuerpos de letra completamente distintos, únicamente porque el texto es más corto o más largo. "Where is love" se queda con toda la altura; la pregunta de encima tiene que arreglárselas con dos líneas pequeñas. Las etiquetas de la izquierda se comportan igual.

De ahí se deduce lo siguiente:

- **La misma pregunta se ve distinta en otra partida.** Una pregunta de seis palabras aparece grande y llena la pantalla; una de treinta y cinco palabras aparece pequeña en cinco líneas, en exactamente el mismo recuadro. Las dos tienen que verse bien.
- **Diseña cada recuadro de texto dos veces.** Llénalo una vez con un ejemplo muy corto y otra con uno muy largo, y comprueba que la composición aguanta en ambos casos. Como regla general: una opción de respuesta va de una a unas ocho palabras, una pregunta de cinco a cuarenta, un nombre de jugador de dos a veinte caracteres.
- **No cuentes con un número fijo de líneas.** Un título que "siempre va en una línea" aquí no existe.
- **No alinees el texto ópticamente con nada más.** El texto que tiene que cuadrar con una línea o una forma se desplazará en cuanto sea más corto o más largo. Usa recuadros lo bastante amplios y una alineación (izquierda, centrada, derecha) en lugar de posiciones exactas.
- **Doce idiomas.** Las palabras compuestas alemanas son largas, y el húngaro no es más benévolo. Un recuadro que va justo en inglés baja a un tamaño ilegible en alemán.
- **Pueden aparecer emoji dentro del texto.** Los jugadores eligen uno junto a su nombre de equipo, y una pregunta o una opción puede contener uno; a veces una opción no es más que un emoji. Se dibujan en color y son más altos que las letras que los rodean.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. No: a qué cuerpo.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### El temporizador: obligatorio, y es una animación

**Every question screen has a timer**; the room has to see how much time is left.

**El temporizador no es un número que cuenta, sino una animación cuyo cabezal de reproducción mueve el motor.** Diseñas una progresión de "lleno" a "vacío": una barra que se vacía, un anillo que se cierra, un reloj de arena, una línea que se encoge. El motor reproduce esa animación exactamente a la velocidad que hace coincidir el último fotograma con el final de la pregunta.

De ahí se deduce lo siguiente:

- **La duración de la pregunta no es fija.** Se define por quiz, a menudo de veinte a treinta segundos, pero puede ser más corta o más larga. Tu animación se estira o se comprime para encajar.
- **Sin números ni marcas por segundo.** Un temporizador que cuenta "20, 19, 18…" deja de ser cierto en cuanto cambia la duración.
- **Los últimos segundos son el momento de más tensión del juego.** Ayuda que la progresión se vuelva más clara o más urgente hacia el final.
- **Legible desde el fondo de la sala**, de un vistazo.
- **Se admiten varios temporizadores.** Una barra arriba y un anillo junto a la pregunta se accionan los dos, siempre que cada uno se llame `timer`.

Entrega el temporizador como una serie de fotogramas clave o como una descripción de la progresión: con "la barra se vacía de derecha a izquierda y pasa de verde a rojo" basta.

### Los emoji voladores aterrizan encima de todo

Cada jugador elige un emoji al entrar, y el juego lanza esos emoji por la pantalla. They are drawn by the engine on a layer above the theme. **Aquí no hay nada que diseñes tú**, pero sí hay algo alrededor de lo cual diseñar, porque no son un adorno puntual.

Aparecen en tres momentos:

- **Cuando un jugador responde.** Su emoji sube desde el borde inferior en una posición horizontal aleatoria, describe un arco y vuelve a caer fuera del encuadre.
- **Cuando un jugador lanza uno.** Los jugadores pueden lanzar su emoji desde el móvil; el ángulo y la velocidad salen del deslizamiento, y sale girando desde el centro inferior.
- **Cuando se revela un puesto en la cuenta atrás final.** Una descarga de los emoji del jugador nombrado: veinte para un puesto normal, cincuenta para el tercero, setenta y cinco para el segundo y **ciento cincuenta para el ganador.**

Lo que eso significa para el diseño:

- **Mantén el tercio inferior de las pantallas de clasificación y de ganador libre de todo lo pequeño o crítico.** Durante la cuenta atrás ahí abajo hay verdadera aglomeración.
- **Da por hecho que chocarán con tu paleta.** Son emoji a todo color de cualquier rincón de la tabla Unicode, y ningún tema los controla. Un diseño que solo se sostiene en una gama de colores cerrada parecerá accidental durante esos segundos.
- **Los lanzamientos se suprimen mientras se muestra una imagen o un vídeo**, así que las pantallas con adjunto se mantienen limpias.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Fuentes

- **Las fuentes tienen que poder incrustarse.** Hace falta el archivo `.ttf` u `.otf`, más una licencia que permita incrustarlas en una aplicación. Una fuente con licencia solo como fuente web, o solo para impresión, no se puede usar. Compruébalo antes de diseñar con ella; después es una corrección cara.
- Las fuentes con ascendentes o descendentes inusualmente grandes se pueden compensar, pero avisa si usas alguna.

### El color como lista

El tema lee una lista de colores de un archivo de configuración, y los móviles de los jugadores se estilizan a partir de esa misma lista. Entrega tu paleta como una **lista con nombres**, no solo como colores dentro del material gráfico:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

En la pantalla de juego se admiten degradados: indícalos como dos valores hexadecimales.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Si los dejas fuera, recaen en valores por defecto internos (blanco, gris, rojo, negro y blanco) que rara vez encajan con un diseño.

### El logotipo de QuizWitz

Los diseños a medida incluyen el logotipo de QuizWitz. Resérvale un sitio donde no estorbe al diseño.

---

## Qué hay que entregar

### Archivo fuente: preferiblemente Illustrator

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                                            | Use it for                                 |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. Ese es justo el paso que salva al material gráfico de tener que reconstruirse a mano.                                                     | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                                             | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Si aun así usas Figma, entrega **cada elemento por separado en SVG**, con nombres de archivo que coincidan con los nombres de capa, para poder reconstruir la estructura a mano. | The concept phase, if you are faster in it |

Estructura de archivos:

- One artboard per screen, named after the frames above.
- Las piezas reutilizables (botón, fila de jugador, opción de respuesta, temporizador) como **símbolos** o componentes, no como copias sueltas.
- Nombres de capa en inglés, sin espacios: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colores como muestras con nombre y texto como estilos con nombre, en vez de definidos objeto a objeto.

### Lista de entregables

1. El **archivo fuente**, estructurado como se indica arriba.
2. **Cada marco en PNG**, 1920 × 1080: una referencia de cómo debe verse. Para el marco 2, tanto la versión con logotipo de cliente como la versión sin él.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Cada elemento gráfico por separado en PNG transparente a 2×**, en una carpeta, con el nombre de archivo igual al nombre de capa.
5. **El temporizador** como fotogramas clave o como descripción escrita de la progresión.
6. **Las fuentes** en `.ttf` u `.otf`, con justificante de licencia.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Media página de notas**: cuál es la idea, cómo deben aparecer las opciones, qué se mueve y qué se queda quieto. No una justificación de diseño de diez páginas: quien construye el tema necesita saber qué construir. Las ideas de movimiento se pueden describir o entregar como una animática básica.

### Orden de trabajo

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Anexo: nombres de símbolos

Para que quede completo, y para quien quiera saber exactamente dónde acaba su material gráfico. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Usar estos nombres como nombres de capa ahorra un paso de traducción.

| Marco                                                     | Nombre del símbolo                                                                                                                        | Piezas obligatorias                                                                                                                                                                                              |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Marco general                   | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` opcional                                                                         | `placeholder` (el área de contenido); recuadro de texto `title` opcional                                                                                                                      |
| 1b. Selector de preguntas, pregunta larga | `MultiQuestionScreen`, `LongQuestionScreen`; ambos opcionales, recaen en el marco general                                                 | selector: marcador `questions`, `timer`; pregunta larga: marcador `question`                                                                                                     |
| 2. Pantalla de conexión            | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` opcional, con un marcador `logo`                                         | `instructions.line1` a `line5`, `connectedPlayers`; marcador `qrCode` con la etiqueta de fotograma `showQrCode` opcional                                                                                         |
| 3. Pantalla de espera              | `PendingScreen`; `PendingScreenWithLogo` opcional                                                                                         | `header.text`                                                                                                                                                                                                    |
| 4. Pantalla de pregunta            | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` a `option4`, etiquetas de fotograma `showOptions` y `showFeedback`                                                                                          |
| 5. Pregunta con adjunto            | `QuestionScreenAttachment`                                                                                                                | como arriba, más `attachment.placeholder`                                                                                                                                                                        |
| 5b. Adjunto a pantalla completa           | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                    |
| 6. Pantalla de respuesta           | `AnswerPieScreen`; `AnswerPieScreenAttachment` opcional                                                                                   | `option1` a `option4`, `answer.text`, `feedback.text`                                                                                                                                                            |
| 6b. Respuesta a pregunta abierta          | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; variantes `…Attachment` opcionales                                                         | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                            |
| 7. Clasificación                   | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` y `PlayerScoreNoImage` opcionales                               | `header.text`, `players`, `feedback.text` (`playAgain.text` opcional); en la fila: `position`, `name`, `score`, `avatar` opcional                                             |
| 8. Intro de ronda                  | uno o varios símbolos con cualquier nombre; el archivo de configuración asocia cada una de las seis categorías a un símbolo               | -                                                                                                                                                                                                                |
| -                                                         | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                               |
| -                                                         | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no necesitan material gráfico propio: se construyen a partir de lo que aparece en tus marcos                                                                                                     |
| -                                                         | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | solo se ven en la aplicación de escritorio, no en un quiz en directo. No forman parte del encargo: se toman de la plantilla del tema y se reestilizan con tu fondo y tus botones |

Los símbolos de intro de ronda del tema de serie se llaman `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` y `RoundIntroTedCultHist`; arte e historia comparten el último. El "Ted" de esos nombres es un resto del personaje del tema original y no significa que tenga que aparecer un personaje en ellos.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. El elemento `timer` es un clip de película con su propia línea de tiempo; el motor lee su número de fotogramas y mueve el cabezal de reproducción en proporción al tiempo transcurrido, como mucho 24 veces por segundo.

### Qué toma el archivo de configuración de tu diseño

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

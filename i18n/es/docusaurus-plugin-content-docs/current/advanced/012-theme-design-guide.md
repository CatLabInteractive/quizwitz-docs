---
id: theme-design-guide
title: Guía de diseño del tema
---

# Guía de diseño del tema

[Theming](/docs/advanced/theming) explica cómo se construye un tema de prueba: en Adobe Animate, exportado como una biblioteca de CreateJS. This page covers the step before that - **designing** the theme.

Está escrito para un diseñador gráfico, y asume que el diseño y la producción de Animate son realizadas por diferentes personas. Los diseñadores aún trabajan en Adobe Animate, por lo que un acuerdo común es que un diseñador entrega obras de arte y alguien más monta el tema. Eso funciona bien, pero sólo si la obra de arte es entregada en una forma que la construcción puede realmente utilizar. This page describes that shape, and doubles as the list of deliverables when you ask a designer for a quote.

:::tip
If you only want to change colours, fonts and backgrounds, you do not need any of this - customise the [Emerald theme](/docs/advanced/emerald-theme) instead.
:::

:::info[See it running]
Every screen described here can be played live, with sample data, in the **theme tester** at [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). It loads a theme and offers a menu of test screens: questions with and without an attachment, the answer spread for a small and a large group, the standings, the round intros, the connect screen with and without a client logo, and so on. Add `?theme=emerald` to the address to see the [Emerald theme](/docs/advanced/emerald-theme). Whoever builds the theme uses the same page to check it while it is being assembled.
:::

---

## Lo que estás diseñando

Un juego de prueba Witz es jugado por una sala entera a la vez, y dos pantallas siempre están cubiertas:

- **The game screen** - a projector or TV, 1920 × 1080. Preguntas, respuestas, cómo se difundieron las respuestas de la sala, las clasificaciones. Esto es lo que diseñas.
- **Teléfono de cada jugador**, donde escriben su respuesta. That is a web page with a fixed layout; it is styled from your colour list, not laid out by you.

A theme is the complete visual skin of the game screen: background, typography, colour, the way a question with four options is presented, how the standings build up, how a round is announced.

---

## Seven frames and an element sheet

The game has dozens of distinct screen states, but most are variants of the same layout. **You design seven frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Una pantalla sin artwork propio cae de vuelta a un marco general.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule - and that furniture is a design decision, not something that can be inferred from a background.

| #     | Frame                        | ¿Qué hay en él                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Lo que se deriva de él                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Marco general**            | El fondo, un título de la cabecera y un área de contenido vacía debajo de él. Not a finished composition - the frame the rest is built inside.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Trece pantallas indican: explicación redonda, clasificación, introducción del jugador, variantes de elección múltiple, preguntas largas, advertencias de asientos, ajustes. Each fills that content area its own way with elements from the sheet, so it has to hold things that look nothing alike. The question picker and the long question may get a composition of their own if you want them to; otherwise they use this frame. |
| **2** | **Connect and waiting**      | Two screens, not one. The **connect screen** is what the room sees to join: five lines of instruction, a join code, a QR code, a line with the number of connected players, and a list of players trickling in. Design it **twice**: with a client logo and without one. The join code and the QR code are generated by the engine; reserve a square for the QR code. The **waiting screen** stays up while the quizmaster reads a question aloud and is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **3** | **Pantalla de pregunta**     | La pregunta, un temporizador, cuatro opciones de respuesta, una línea de retroalimentación. La pantalla que la habitación se ve más tiempo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **4** | **Question with attachment** | Lo mismo, ordenado alrededor de una imagen o vídeo. Puede ser una composición diferente del marco 3. The attachment is scaled to fit inside the box you draw, so both a landscape and a portrait image must look acceptable in it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Also the full-screen attachment variant, and attachments shown between questions.                                                                                                                                                                                                                                                                                                                                                                                                     |
| **5** | **Pantalla de respuesta**    | ¿Cuál fue la respuesta correcta, cómo las respuestas de la sala se difundieron a través de las opciones y una línea de comentarios.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Also the answer screen for open questions and for questions with an attachment.                                                                                                                                                                                                                                                                                                                                                                                                       |
| **6** | **Clasificación y ganador**  | A list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element - it is repeated six times by default, up to ten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Tanto la clasificación entre las rondas como el ganador final.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **7** | **Redondear intro**          | Un breve anuncio por categoría. Hay seis categorías: ciencia y tecnología, naturaleza, entretenimiento y música, deporte, arte, historia. One design may serve several categories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Las seis categorías.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

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

### Lo que se decide por ti

- **The players' phones.** A fixed HTML layout, styled from your colour list.
- **The handful of things the engine draws itself.** Some furniture is drawn in code rather than taken from the theme - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Those take their colour from the list in **Colour as a list** and nothing else, so that list is the only control you have over them.
- **¿Cuáles pantallas caen de vuelta al marco general, y cómo.**
- **How the six categories map onto the round intro artwork.** That mapping is a configuration setting, so one intro can be reused for several categories.
- **Duración de todas las temporizaciones y animaciones.**
- **Sound.** A theme can carry its own music and sound effects, but that is a separate deliverable and not part of the design brief.

### Un carácter es opcional

El tema de las existencias Witz tiene un carácter que habla y reacciona. Nada requiere uno: el validador del tema sólo advierte sobre el elemento `ted`; no fallará sin él. The [Emerald theme](/docs/advanced/emerald-theme) ships without a character, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Sin un personaje, la introducción redonda se convierte en un momento gráfico, tipográfico o ilustrativo. Dos enfoques mantienen el trabajo en proporción: una composición con un color o una variante de icono por categoría, o un único anuncio universal con sólo el cambio de nombre de la ronda. Seis intros auténticamente diferentes es un montón de trabajo por unos segundos de tiempo de pantalla.

---

## Cómo se ven estos marcos en la práctica

Las pantallas a continuación provienen de un tema existente. They are here to show **which elements appear on each screen and when**. They are not a reference for style _or_ layout: where this theme puts its question, its options and its timer is its own decision, and yours can differ completely. Read them for what has to be present, not for where it goes. All of them, and more, can be played in the [theme tester](https://client.quizwitz.com/test.html).

### Frame 1 - the general frame

Two game moments on the same frame: a question picker and a points ladder.

Look at how little they have in common. The picker puts its three rows inside a panel with a border; the ladder has no panel at all, just rows separated by thin rules. What the two share is the background and the header band above them - everything below that belongs to the individual screen and is filled by the game, not by you.

![El marco general con un selector de preguntas de tres filas](/images/theme-design/frame1-general-multiquestion.png)

![El marco general con una escalera de cinco niveles de puntos](/images/theme-design/frame1-general-strikeladder.png)

That panel and those rules are design decisions, and they are yours to make - they come from the **element sheet**, not from this frame. What this frame has to do is hold them: design the content area as an empty, neutral, roomy zone that works with a bordered panel, a bare list and a table of rows alike. A background that is busy in the middle, or a header that only works with a panel tucked right underneath it, is where that breaks.

### Frame 2 - connect and waiting

Con un logotipo de cliente junto al código de unidad, y sin uno, donde el propio diseño del tema lleva la pantalla:

![Conectar pantalla con un logo](/images/theme-design/frame2-connect.png)

![Pantalla de conexión sin un logo](/images/theme-design/frame2-connect-nologo.png)

The waiting screen is a separate composition rather than a variant of the connect screen - the two share only a background. It stays up while the quizmaster reads a question aloud, and it is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game, so it deserves more attention than an empty screen usually gets.

![Esperando pantalla](/images/theme-design/frame2-pending.png)

### Frame 3 - the question screen

Cuatro opciones, la pregunta anterior, el temporizador en el medio. Tenga en cuenta que una opción no puede consistir más que en un emoji.

![Pantalla de pregunta con cuatro opciones de texto](/images/theme-design/frame3-question-options.png)

![Pantalla de pregunta con banderas como opciones de respuesta](/images/theme-design/frame3-question-emoji.png)

A question with no options - players type their answer on their phone. La pantalla está casi vacía y el temporizador se convierte en el elemento principal:

![Pregunta abierta con solo la pregunta y un temporizador grande](/images/theme-design/frame3-question-open.png)

El tiempo se acaba. El globo de retroalimentación aparece en la pantalla y el temporizador está vacío:

![Pantalla de pregunta que muestra el estado del tiempo](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - attachment

The same parts, rearranged around an attachment area, with the options to the left and right:

![Pantalla de pregunta con una imagen en el medio](/images/theme-design/frame4-question-attachment.png)

An attachment on its own, filling the screen:

![Full-screen attachment](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - the answer screen

Esta pantalla pasa por tres momentos. Primero el spread, sin nada marcado aún:

![Pantalla de respuesta mostrando el spread](/images/theme-design/frame5-answer-mc-spread.png)

Entonces se marca la opción correcta y se cruzan las equivocadas:

![Pantalla de respuesta con la opción correcta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

Y si la pregunta lleva una explicación, un globo cae sobre la obra de arte. Leave room for it - it lands on top of whatever you designed:

![Pantalla de respuesta con el globo de explicación](/images/theme-design/frame5-answer-mc-explanation.png)

Con un grupo pequeño, el mismo momento es una lista de puntuaciones en lugar de un gráfico:

![Pantalla de respuesta para un grupo pequeño](/images/theme-design/frame5-answer-mc-small.png)

Para una pregunta abierta, el gráfico muestra cuántos jugadores lo hicieron bien:

![Pantalla de respuesta para una pregunta abierta](/images/theme-design/frame5-answer-open.png)

### Frame 6 - standings and winner

La clasificación después de una ronda. La fila del jugador es el elemento que se repite: posición, avatar, nombre, partitura.

![Clasificación con seis filas de jugador](/images/theme-design/frame6-roundoutro.png)

The final countdown names one player at a time, from last place to first - place, score and team name in the spotlight. This is also where the flying emoji are heaviest; see the note further down:

![La cuenta regresiva del ganador nombrando a un jugador](/images/theme-design/frame6-winner-countdown.png)

![La posición final](/images/theme-design/frame6-winner.png)

### Frame 7 - the round intro

Un diseño, opcionalmente con una variante por categoría:

![Redondea la introducción para la categoría de la naturaleza](/images/theme-design/frame7-roundintro-nature.png)

![Redondea la introducción a la categoría de ciencia](/images/theme-design/frame7-roundintro-science.png)

---

## Reglas de diseño

Ninguno de estos limita su diseño visual. Se trata de cómo se construye el archivo.

### Formatear

- **1920 × 1080 píxeles**, exactamente. Un marco por pantalla.
- Trabaja **en vector** donde puedas. Donde usted utiliza raster (fotos, texturas): al menos 2× tamaño de la pantalla.
- The Animate document runs at **24 frames per second**. Importante si usted suministra ideas de movimiento.
- Mantén un **5% de margen** en los bordes libres de información esencial. Proyectos recortados.

### Layer structure - the rule that matters most

**Cualquier cosa que pueda moverse, aparecer o cambiar el valor se encuentra en su propia capa nombrada.** Nada fusionado, nada aplanado.

En la práctica: las cuatro opciones de respuesta son cuatro capas separadas, no una. El temporizador está separado del fondo. Un botón y su etiqueta son dos elementos. Una fila de jugador es un grupo que puede ser duplicado.

Lo que se puede fusionar: obra de fondo puramente decorativa que funciona como una sola imagen todavía.

This is the one rule that genuinely hurts when it is not followed - the artwork then has to be pulled apart or redrawn, which is exactly the cost this arrangement is meant to avoid.

### Efectos que no sobreviven

El motor se basa en un lienzo HTML5. Estos tienen que ser **horneados en la imagen** o dejados fuera:

- Desenfoque vivo, suelta sombras y resplandece como filtros → suministrarlos como obra de arte
- Mezclar modos (múltiple, pantalla, superposición) → resolverlos a un color plano
- Efectos de capas y ajustes de capas
- Gradientes **dentro** texto, o texto con un contorno por carácter
- Máscaras que cambian por fotograma

Los degradados en formas son buenos. La transparencia está bien. Las sombras como artwork fijo son buenas.

### Cómo se comporta el texto

Aquí es donde el diseño para el ensayo Witz más difiere del trabajo de diseño ordinario.

**No establece un tamaño de fuente. Dibujas una caja.**

Todo el texto es dibujado en vivo por un componente que recibe dos cosas: una cadena, y el rectángulo que usted soñó. Luego encuentra **el tamaño de fuente más grande en el que esa cadena, envuelta a través de líneas, todavía cabe dentro de la caja**. Un encogimiento largo de cuerda; uno corto crece hasta que la caja está llena.

![Un selector donde tres líneas de longitud diferente obtienen cada una un tamaño de fuente diferente](/images/theme-design/frame1-general-multiquestion.png)

Three rows, three identical boxes - and three completely different font sizes, purely because the text is shorter or longer. "Donde está el amor" consigue la altura completa; la cuestión anterior tiene que arreglárselas con dos líneas pequeñas. Las etiquetas de la izquierda se comportan de la misma manera.

Lo que se deduce de eso:

- \*\*La misma pregunta se ve diferente en otro juego. \* Una pregunta de seis palabras aparece grande y llena de pantalla; una de treinta y cinco palabras aparece pequeña en cinco líneas, exactamente en la misma caja. Ambos tienen que mirar bien.
- \*\*Diseña cada cuadro de texto dos veces. \* Llénalo una vez con una muestra muy corta y una vez con una muy larga, y comprueba que la composición se mantenga en ambos. Por regla general, una opción de respuesta va de una a unas ocho palabras, aproximadamente, una pregunta de cinco a cuarenta, un nombre de jugador de dos a veinte caracteres.
- **No cuentes con un número fijo de líneas.** No existe aquí un título que sea "siempre en una línea".
- \*\*No alinee de forma óptica el texto con otra cosa. \* El texto que tiene que alinearse con una regla o una forma se desviará tan pronto como sea más corto o más largo. Utilice cajas suficientemente espaciosas y una alineación (izquierda, centrada, derecha) en lugar de posiciones exactas.
- **La caja es un máximo, no una promesa.** Diseñas sus proporciones; el relleno varía.
- **Twelve languages.** German compounds are long, and Hungarian is no kinder. Una caja apretada en inglés cae a un tamaño incomprensiblemente pequeño en alemán.
- **Emoji can appear inside text.** Players pick one next to their team name, and a question or an option can contain one - sometimes an option is nothing but an emoji. Se dibujan en color y son más altas que las letras que les rodean.

Qué necesita saber la compilación sobre cada cuadro de texto: dónde está, cuán grande es, cómo se alinea, qué color y qué fuente. No: en qué punto el tamaño.

Hay dos cosas que puedes usar: una caja grande con texto corto se convierte en una fuerte composición tipográfica por sí misma y una caja que deliberadamente hacer estrecho y alto fuerza texto en una columna. You can use the fitting as a design device - you just should not design against it.

### The timer - required, and it is an animation

**Cada pantalla de preguntas tiene un temporizador.** No es opcional; la habitación tiene que ver cuánto tiempo queda. Ambos marcos de preguntas llevan uno.

**The timer is not a counting number but an animation whose playhead the engine moves.** You design a progression from "full" to "empty" - a bar draining, a ring closing, an hourglass, a shrinking line. El motor reproduce esa animación exactamente a la velocidad que hace que el último fotograma coincida con el final de la pregunta.

¿Qué sigue:

- **The question duration is not fixed.** It is set per quiz - often twenty to thirty seconds, but it can be shorter or longer. Tu animación se estira o se comprime para ajustarla. Diseñe una _progresión_, no una animación de un número determinado de segundos.
- **No hay números ni ticks por segundo.** Un temporizador que cuenta "20, 19, 18…deja de ser verdadero tan pronto como la duración cambia.
- **Los últimos segundos son el momento más tenso del juego.** Ayuda si la progresión se hace más clara o más urgente hacia el final.
- **Legible desde la parte trasera de la habitación**, de un vistazo.
- **Múltiples temporizadores están permitidos.** Una barra en la parte superior y un anillo cerca de la pregunta se conducen, siempre y cuando cada uno se llame `timer`.

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

### Fuentes

- **Las fuentes deben ser incrustables.** El archivo `.ttf` o `.otf` es necesario, además de una licencia que permite incrustar en una aplicación. Una fuente con licencia sólo como fuente web, o sólo para impresión, no se puede utilizar. Compruebe esto antes de diseñar con él; es una corrección costosa después.
- Las fuentes con ascendientes o descendientes inusualmente grandes pueden ser compensadas, pero marcarlas si usas una.

### Colorear como lista

The theme reads a colour list from a configuration file, and the players' phones are styled from the same list. Suministra tu paleta como una **lista nombrada**, no solo como colores en la obra:

- **Game screen:** main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong.
- **The four answer options:** each with a background and a border colour, plus one flat colour per option for the phones and the charts.
- **Players' phones:** background, text colour, outline colour, option outline colour, and the background and text colour of the answer container.

Gradients are allowed on the game screen: give them as two hex values.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting: the **separator** (the rules between rows where there is no panel, and on the points ladder), the **active**, **inactive** and **selected** states of a row in the question picker, the **dialog** text, and the **front and back of the QR code**. If you leave them out they fall back to built-in defaults - white, grey, red, black and white - which rarely match a design.

### El logo del Witz

Los diseños personalizados incluyen el logotipo Pruebas Witz. Reserve un lugar donde no se interponga en el camino del diseño.

---

## Qué entregar

### Source file - Illustrator preferred

\*\*Se prefiere Adobe Illustrator (`.ai`) y hay una razón concreta. \* El tema está construido en Adobe Animate, que importa archivos Illustrator directamente y convierte sus capas en capas Animadas o símbolos separados, mantener los nombres de las capas y dejar los vectores editables. Ese es exactamente el paso que evita que la obra de arte se reconstruya a mano.

Figma o Photoshop es posible, pero conoce el coste: con Figma todo va a través de la exportación de SVG y PNG, y ahí es precisamente donde se pierde la estructura de capa que se necesita aquí. Si usas Figma, suministra **cada elemento por separado como SVG**, con nombres de archivo que coincidan con los nombres de las capas, por lo que la estructura puede ser reconstruida a mano. Photoshop importa a Animate con sus capas intactas, como Illustrator, pero te da raster en lugar de vector.

Si usted es más rápido en Figma, úselo para la fase conceptual y entregue la versión final en Illustrator.

Estructura de archivo:

- Un cuadro de arte por pantalla, cada uno exactamente 1920 × 1080, llamado después de los fotogramas anteriores.
- Piezas reutilizables (botón, fila del jugador, opción de respuesta, temporizador) como **símbolos** o componentes, no como copias sueltas.
- Nombres de capas en inglés, sin espacios: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colores como las muestras nombradas y el texto como estilos nombrados, en lugar de establecerse individualmente en cada objeto.

### Deliverables checklist

1. The **source file**, structured as above.
2. **Each frame as a PNG**, 1920 × 1080 - a reference for how it should look. For frame 2, both the version with and the version without a client logo.
3. **The element sheet** as one artboard: the content building blocks and the controls listed above.
4. **Each separate graphic element as a transparent PNG at 2×**, in one folder, filename matching the layer name.
5. **The timer** as keyframes or a written description of the progression.
6. **Fonts** as `.ttf` or `.otf`, with proof of licence.
7. **The colour list** described above, as hex values.
8. **Half a page of notes**: what the idea is, how the options should appear, what moves and what stays still. Not a ten-page design rationale - whoever builds the theme needs to know what to build. Las ideas de movimiento pueden ser descritas o proporcionadas como una animación áspera.

### Order of work

Start with frame 3, the question screen, together with the element sheet, and get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme, and the question screen is the one the room looks at longest. Frames 1 and 2 follow naturally from them; frames 5 to 7 come last.

---

## Appendix - symbol names

Para la integridad, y para cualquiera que quiera saber exactamente dónde acaba su obra de arte. **You do not need to read this to do the work**; the seven frames and the element sheet above are enough. Usar estos nombres como nombres de capas guarda un paso de traducción.

| Frame                                              | Nombre del símbolo                                                                                                                        | Piezas requeridas                                                                                                                                                                              |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Marco general            | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (the content area); `title` text box optional                                                                                                                 |
| 1b. Question picker, long question | `MultiQuestionScreen`, `LongQuestionScreen`; both optional, fall back to the general frame                                                | picker: `questions` placeholder, `timer`; long question: `question` placeholder                                                                                |
| 2. Conectar pantalla        | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, with a `logo` placeholder                                      | `instructions.line1` to `line5`, `connectedPlayers`; `qrCode` placeholder with frame label `showQrCode` optional                                                                               |
| 2b. Esperando pantalla             | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | `header.text`                                                                                                                                                                                  |
| 3. Pantalla de preguntas    | `Pantalla de Pregunta`                                                                                                                    | `question.text`, `timer`, `feedback.text`, `option1` a `option4`, frame labels `showOptions` y `showFeedback`                                                                                  |
| 4. Question with attachment | `Adjunto de pantalla de pregunta`                                                                                                         | como arriba, más `attachment.placeholder`                                                                                                                                                      |
| 4b. Full-screen attachment         | `Adjuntar pantalla`                                                                                                                       | `marcador de posición`                                                                                                                                                                         |
| 5. Pantalla de respuesta    | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` a `option4`, `answer.text`, `feedback.text`                                                                                                                                          |
| 5b. Respuesta de pregunta abierta  | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` variants optional                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 6. Piedra                   | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` and `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in the row: `position`, `name`, `score`, `avatar` optional                           |
| 7. Entrada redonda          | one or more symbols of any name; the configuration file maps each of the six categories to a symbol                                       | -                                                                                                                                                                                              |
| -                                                  | `Pantalla de Carga`                                                                                                                       | `text`, `progreso`                                                                                                                                                                             |
| -                                                  | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no artwork of their own needed - built from what appears in your frames                                                                                                                        |
| -                                                  | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | only shown in the desktop app, not in a live quiz. Not part of the brief: they are taken from the theme template and restyled with your background and buttons |

The stock theme's round intro symbols are called `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` and `RoundIntroTedCultHist`; art and history share the last one. The "Ted" in those names is a leftover from the original theme's character and does not mean a character has to appear in them.

Cada elemento con `.text` después de que es un cuadro de texto ajustado como se describe anteriormente: un rectángulo el motor se llena. The `timer` element is a movie clip with its own timeline; the engine reads its frame count and moves the playhead in proportion to elapsed time, at most 24 times per second.

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

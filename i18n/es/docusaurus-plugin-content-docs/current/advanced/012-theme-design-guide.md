---
id: theme-design-guide
title: Guía de diseño del tema
---

# Guía de diseño del tema

[Theming](/docs/advanced/theming) explica cómo se construye un tema de prueba: en Adobe Animate, exportado como una biblioteca de CreateJS. Esta página cubre el paso anterior que — **diseñando** el tema.

Está escrito para un diseñador gráfico, y asume que el diseño y la producción de Animate son realizadas por diferentes personas. Los diseñadores aún trabajan en Adobe Animate, por lo que un acuerdo común es que un diseñador entrega obras de arte y alguien más monta el tema. Eso funciona bien, pero sólo si la obra de arte es entregada en una forma que la construcción puede realmente utilizar. Esta página describe esa forma.

:::tip
Si solo quieres cambiar colores, fuentes y fondos, no necesitas nada de esto — personaliza el [tema Esmeralda](/docs/advanced/emerald-theme) en su lugar.
:::

---

## Lo que estás diseñando

Un juego de prueba Witz es jugado por una sala entera a la vez, y dos pantallas siempre están cubiertas:

- **La pantalla compartida** — un proyector o televisión, 1920 × 1080. Preguntas, respuestas, cómo se difundieron las respuestas de la sala, las clasificaciones. Esto es lo que diseñas.
- **Teléfono de cada jugador**, donde escriben su respuesta. Esta es una página web con un diseño fijo; está diseñada a partir de tus colores y fuentes, no distribuida por ti.

Un tema es la piel visual completa de la pantalla compartida: fondo, tipografía, color, la forma en que se presenta una pregunta con cuatro opciones, cómo se acumula la clasificación, cómo se anuncia una ronda.

---

## Siete fotogramas

El juego tiene aproximadamente veinticinco estados de pantalla distintos, pero la mayoría son variantes del mismo diseño. **Diseñas siete marcos; el resto se deriva de ellos.** No es un atajo — es como funciona el motor. Una pantalla sin artwork propio cae de vuelta a un marco general.

| #     | Frame                       | ¿Qué hay en él                                                                                                                                                                                          | Lo que se deriva de él                                                                                                                                                                                      |
| ----- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Marco general**           | El fondo, un título de la cabecera y un área de contenido vacía debajo de él. La plantilla visual para todo el tema.                                                    | Trece pantallas indican: explicación redonda, clasificación, introducción del jugador, variantes de elección múltiple, preguntas largas, advertencias de asientos, ajustes. |
| **2** | **Conectar pantalla**       | Lo que la sala ve para unirse: cinco líneas de instrucción, espacio para un código de unión o código QR, y una lista de jugadores engañando.                            | También se muestra la pantalla de espera mientras el cuestionario lee la pregunta en voz alta.                                                                                              |
| **3** | **Pantalla de pregunta**    | La pregunta, un temporizador, cuatro opciones de respuesta, una línea de retroalimentación. La pantalla que la habitación se ve más tiempo.                             | —                                                                                                                                                                                                           |
| **4** | **Pregunta con medios**     | Lo mismo, ordenado alrededor de una imagen o vídeo. Puede ser una composición diferente del marco 3.                                                                    | También la variante de medios de pantalla completa, y los medios mostrados entre preguntas.                                                                                                 |
| **5** | **Pantalla de respuesta**   | ¿Cuál fue la respuesta correcta, cómo las respuestas de la sala se difundieron a través de las opciones y una línea de comentarios.                                                     | También la pantalla de respuesta para preguntas abiertas y preguntas con medios de comunicación.                                                                                            |
| **6** | **Clasificación y ganador** | Una lista de jugadores con nombre, puntuación y posición. Suministra la **fila del jugador** como un elemento reutilizable y separado — se repite de seis a diez veces. | Tanto la clasificación entre las rondas como el ganador final.                                                                                                                              |
| **7** | **Redondear intro**         | Un breve anuncio por categoría. Hay seis categorías: ciencia y tecnología, naturaleza, entretenimiento y música, deporte, arte, historia.               | Las seis categorías.                                                                                                                                                                        |

### Lo que se decide por ti

- \*\*Los controles individuales. \* Los botones en sus cuatro estados, los símbolos correctos e incorrectos, la barra de desplazamiento, las casillas de verificación y las selecciones se derivan de lo que aparece en sus siete marcos. Asegúrate de que aparece un botón en algún lugar, así que hay un estilo del que tomarlos.
- **Los teléfonos de los jugadores.** Un diseño HTML fijo, diseñado con tu lista de colores y fuentes.
- **¿Cuáles pantallas caen de vuelta al marco general, y cómo.**
- **Cómo funcionan las seis categorías de mapeo en la entrada redonda.**
- **Duración de todas las temporizaciones y animaciones.**

### Un carácter es opcional

El tema de las existencias Witz tiene un carácter que habla y reacciona. Nada requiere uno: el validador del tema sólo advierte sobre el elemento `ted`; no fallará sin él. El [Tema Esmeralda](/docs/advanced/emerald-theme) viene sin personaje, y al soltarlo elimina el trabajo de animación más caro: sincronización de labios, ojos, brazos.

Sin un personaje, la introducción redonda se convierte en un momento gráfico, tipográfico o ilustrativo. Dos enfoques mantienen el trabajo en proporción: una composición con un color o una variante de icono por categoría, o un único anuncio universal con sólo el cambio de nombre de la ronda. Seis intros auténticamente diferentes es un montón de trabajo por unos segundos de tiempo de pantalla.

---

## Cómo se ven estos marcos en la práctica

Las pantallas a continuación provienen de un tema existente. Están aquí para mostrar **lo que sucede en cada pantalla**; no son una referencia de estilo.

### Fotograma 1 — el marco general

Dos momentos de juego muy diferentes en la misma plantilla: un selector de preguntas y una escalera de puntos. Muestra cuánto trabajo hace un marco por ti y por qué su área de contenido necesita ser espaciosa y neutral.

![El marco general con un selector de preguntas de tres filas](/images/theme-design/frame1-general-multiquestion.png)

![El marco general con una escalera de cinco niveles de puntos](/images/theme-design/frame1-general-strikeladder.png)

### Fotograma 2 — conectar y esperar

Con un logotipo de cliente junto al código de unidad, y sin uno, donde el propio diseño del tema lleva la pantalla:

![Conectar pantalla con un logo](/images/theme-design/frame2-connect.png)

![Pantalla de conexión sin un logo](/images/theme-design/frame2-connect-nologo.png)

La pantalla de espera que sigue, en pantalla mientras que el examinador lee la pregunta en voz alta:

![Esperando pantalla](/images/theme-design/frame2-pending.png)

### Fotograma 3 — la pantalla de preguntas

Cuatro opciones, la pregunta anterior, el temporizador en el medio. Tenga en cuenta que una opción no puede consistir más que en un emoji.

![Pantalla de pregunta con cuatro opciones de texto](/images/theme-design/frame3-question-options.png)

![Pantalla de pregunta con banderas como opciones de respuesta](/images/theme-design/frame3-question-emoji.png)

Una pregunta sin opciones — los jugadores escriben su respuesta en su teléfono. La pantalla está casi vacía y el temporizador se convierte en el elemento principal:

![Pregunta abierta con solo la pregunta y un temporizador grande](/images/theme-design/frame3-question-open.png)

El tiempo se acaba. El globo de retroalimentación aparece en la pantalla y el temporizador está vacío:

![Pantalla de pregunta que muestra el estado del tiempo](/images/theme-design/frame3-question-timeout.png)

### Marco 4 — medios

Las mismas partes, reorganizadas alrededor de un área multimedia, con las opciones a la izquierda y a la derecha:

![Pantalla de pregunta con una imagen en el medio](/images/theme-design/frame4-question-attachment.png)

Medios por sí solos, llenando la pantalla:

![Medios a pantalla completa](/images/theme-design/frame4-attachment-fullscreen.png)

### Fotograma 5 — la pantalla de respuesta

Esta pantalla pasa por tres momentos. Primero el spread, sin nada marcado aún:

![Pantalla de respuesta mostrando el spread](/images/theme-design/frame5-answer-mc-spread.png)

Entonces se marca la opción correcta y se cruzan las equivocadas:

![Pantalla de respuesta con la opción correcta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

Y si la pregunta lleva una explicación, un globo cae sobre la obra de arte. Deja espacio para ello — aterriza sobre lo que tú diseñes:

![Pantalla de respuesta con el globo de explicación](/images/theme-design/frame5-answer-mc-explanation.png)

Con un grupo pequeño, el mismo momento es una lista de puntuaciones en lugar de un gráfico:

![Pantalla de respuesta para un grupo pequeño](/images/theme-design/frame5-answer-mc-small.png)

Para una pregunta abierta, el gráfico muestra cuántos jugadores lo hicieron bien:

![Pantalla de respuesta para una pregunta abierta](/images/theme-design/frame5-answer-open.png)

### Marco 6 — clasificación y ganador

La clasificación después de una ronda. La fila del jugador es el elemento que se repite: posición, avatar, nombre, partitura.

![Clasificación con seis filas de jugador](/images/theme-design/frame6-roundoutro.png)

La cuenta regresiva final nombra un jugador a la vez, desde el último lugar hasta el primero — lugar, puntuación y nombre del equipo en el spotlight:

![La cuenta regresiva del ganador nombrando a un jugador](/images/theme-design/frame6-winner-countdown.png)

![La posición final](/images/theme-design/frame6-winner.png)

### Marco 7 — la introducción redonda

Un diseño, opcionalmente con una variante por categoría:

![Redondea la introducción para la categoría de la naturaleza](/images/theme-design/frame7-roundintro-nature.png)

![Redondea la introducción a la categoría de ciencia](/images/theme-design/frame7-roundintro-science.png)

---

## Reglas de diseño

Ninguno de estos limita su diseño visual. Se trata de cómo se construye el archivo.

### Formatear

- **1920 × 1080 píxeles**, exactamente. Un marco por pantalla.
- Trabaja **en vector** donde puedas. Donde usted utiliza raster (fotos, texturas): al menos 2× tamaño de la pantalla.
- El juego corre en **24 fotogramas por segundo**. Importante si usted suministra ideas de movimiento.
- Mantén un **5% de margen** en los bordes libres de información esencial. Proyectos recortados.

### Estructura de capa — la regla que más importa

**Cualquier cosa que pueda moverse, aparecer o cambiar el valor se encuentra en su propia capa nombrada.** Nada fusionado, nada aplanado.

En la práctica: las cuatro opciones de respuesta son cuatro capas separadas, no una. El temporizador está separado del fondo. Un botón y su etiqueta son dos elementos. Una fila de jugador es un grupo que puede ser duplicado.

Lo que se puede fusionar: obra de fondo puramente decorativa que funciona como una sola imagen todavía.

Esta es la regla que realmente perjudica cuando no se sigue — la obra de arte tiene que separarse o retirarse, cuál es exactamente el coste que esta disposición debe evitar.

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

Tres filas, tres cajas idénticas — y tres tamaños de fuente completamente diferentes, simplemente porque el texto es más corto o más largo. "Donde está el amor" consigue la altura completa; la cuestión anterior tiene que arreglárselas con dos líneas pequeñas. Las etiquetas de la izquierda se comportan de la misma manera.

Lo que se deduce de eso:

- \*\*La misma pregunta se ve diferente en otro juego. \* Una pregunta de seis palabras aparece grande y llena de pantalla; una de treinta y cinco palabras aparece pequeña en cinco líneas, exactamente en la misma caja. Ambos tienen que mirar bien.
- \*\*Diseña cada cuadro de texto dos veces. \* Llénalo una vez con una muestra muy corta y una vez con una muy larga, y comprueba que la composición se mantenga en ambos. Por regla general, una opción de respuesta va de una a unas ocho palabras, aproximadamente, una pregunta de cinco a cuarenta, un nombre de jugador de dos a veinte caracteres.
- **No cuentes con un número fijo de líneas.** No existe aquí un título que sea "siempre en una línea".
- \*\*No alinee de forma óptica el texto con otra cosa. \* El texto que tiene que alinearse con una regla o una forma se desviará tan pronto como sea más corto o más largo. Utilice cajas suficientemente espaciosas y una alineación (izquierda, centrada, derecha) en lugar de posiciones exactas.
- **La caja es un máximo, no una promesa.** Diseñas sus proporciones; el relleno varía.
- **once idiomas.** Los compuestos alemanes son largos y el húngaro no es pariente. Una caja apretada en inglés cae a un tamaño incomprensiblemente pequeño en alemán.
- \*\*Los emoji pueden aparecer dentro del texto. \* Los jugadores eligen uno al lado del nombre de su equipo, y una pregunta o una opción puede contener una — a veces una opción no es más que un emoji. Se dibujan en color y son más altas que las letras que les rodean.

Qué necesita saber la compilación sobre cada cuadro de texto: dónde está, cuán grande es, cómo se alinea, qué color y qué fuente. No: en qué punto el tamaño.

Hay dos cosas que puedes usar: una caja grande con texto corto se convierte en una fuerte composición tipográfica por sí misma y una caja que deliberadamente hacer estrecho y alto fuerza texto en una columna. Puede utilizar el ajuste como un dispositivo de diseño, simplemente no debería diseñar en su contra.

### El temporizador — requerido, y es una animación

**Cada pantalla de preguntas tiene un temporizador.** No es opcional; la habitación tiene que ver cuánto tiempo queda. Ambos marcos de preguntas llevan uno.

\*\*El temporizador no es un número de cuenta, sino una animación cuya cabeza de reproducción se mueve el motor. \* Diseñas una progresión de "lleno" a "vacío" — un barra, un anillo de cierre, un cristal de hora, una línea de encogimiento. El motor reproduce esa animación exactamente a la velocidad que hace que el último fotograma coincida con el final de la pregunta.

¿Qué sigue:

- **La duración de la pregunta no es fija.** Se establece por cuestionario — a menudo entre veinte y treinta segundos, pero puede ser más corta o más larga. Tu animación se estira o se comprime para ajustarla. Diseñe una _progresión_, no una animación de un número determinado de segundos.
- **No hay números ni ticks por segundo.** Un temporizador que cuenta "20, 19, 18…deja de ser verdadero tan pronto como la duración cambia.
- **Los últimos segundos son el momento más tenso del juego.** Ayuda si la progresión se hace más clara o más urgente hacia el final.
- **Legible desde la parte trasera de la habitación**, de un vistazo.
- **Múltiples temporizadores están permitidos.** Una barra en la parte superior y un anillo cerca de la pregunta se conducen, siempre y cuando cada uno se llame `timer`.

Suministrar el temporizador como una serie de fotogramas clave o como una descripción de la progresión — "la barra drena de derecha a izquierda y cambia de verde a rojo" es suficiente.

### Fuentes

- **Las fuentes deben ser incrustables.** El archivo `.ttf` o `.otf` es necesario, además de una licencia que permite incrustar en una aplicación. Una fuente con licencia sólo como fuente web, o sólo para impresión, no se puede utilizar. Compruebe esto antes de diseñar con él; es una corrección costosa después.
- Las fuentes con ascendientes o descendientes inusualmente grandes pueden ser compensadas, pero marcarlas si usas una.

### Colorear como lista

El tema lee una lista de colores de un archivo de configuración. Suministra tu paleta como una **lista nombrada**, no solo como colores en la obra:

color principal, color de actitud, fondo del texto, color de texto predeterminado, color de texto de cabecera, color de texto de la pregunta, texto del botón, texto del texto, los cuatro colores responden (cada uno con un fondo y un color de borde), el color correcto, el color por mal.

Se permiten los permisos: dales como dos valores hexadecimales.

### El logo del Witz

Los diseños personalizados incluyen el logotipo Pruebas Witz. Reserve un lugar donde no se interponga en el camino del diseño.

---

## Qué entregar

### Archivo fuente — Illustrator preferido

\*\*Se prefiere Adobe Illustrator (`.ai`) y hay una razón concreta. \* El tema está construido en Adobe Animate, que importa archivos Illustrator directamente y convierte sus capas en capas Animadas o símbolos separados, mantener los nombres de las capas y dejar los vectores editables. Ese es exactamente el paso que evita que la obra de arte se reconstruya a mano.

Figma o Photoshop es posible, pero conoce el coste: con Figma todo va a través de la exportación de SVG y PNG, y ahí es precisamente donde se pierde la estructura de capa que se necesita aquí. Si usas Figma, suministra **cada elemento por separado como SVG**, con nombres de archivo que coincidan con los nombres de las capas, por lo que la estructura puede ser reconstruida a mano. Photoshop importa a Animate con sus capas intactas, como Illustrator, pero te da raster en lugar de vector.

Si usted es más rápido en Figma, úselo para la fase conceptual y entregue la versión final en Illustrator.

Estructura de archivo:

- Un cuadro de arte por pantalla, cada uno exactamente 1920 × 1080, llamado después de los fotogramas anteriores.
- Piezas reutilizables (botón, fila del jugador, opción de respuesta, temporizador) como **símbolos** o componentes, no como copias sueltas.
- Nombres de capas en inglés, sin espacios: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colores como las muestras nombradas y el texto como estilos nombrados, en lugar de establecerse individualmente en cada objeto.

### Exportaciones

- Cada marco como un PNG, 1920 × 1080 — como una referencia para cómo debe lucir.
- Cada elemento gráfico separado como un **PNG transparente a 2×**, en una carpeta, nombre de archivo que coincida con el nombre de la capa.
- Fuentes como `.ttf` o `.otf`, con prueba de licencia.

### Media de una página de notas

Una breve nota escrita: cuál es la idea, cómo deberían aparecer las opciones, qué se mueve y qué se queda aún. No un racionale de diseño de diez páginas — quien construya el tema necesita saber qué construir.

Las ideas de movimiento pueden ser descritas o proporcionadas como una animación áspera.

---

## Apéndice — nombres de símbolos

Para la integridad, y para cualquiera que quiera saber exactamente dónde acaba su obra de arte. **No necesitas leer esto para hacer el trabajo**; los siete marcos anteriores son suficientes. Usar estos nombres como nombres de capas guarda un paso de traducción.

| Frame                                             | Nombre del símbolo                                                                                                                                                                           | Piezas requeridas                                                                                             |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1. Marco general           | `GeneralPurposeScreen`, `GeneralPurposeScreenWithHeader`                                                                                                                                     | `header.text`, área de contenido                                                                              |
| 2. Conectar pantalla       | `PresentationConnectScreen`                                                                                                                                                                  | `instructions.line1` a `line5`                                                                                |
| 2b. Esperando pantalla            | `Pantalla`                                                                                                                                                                                   | `header.text`                                                                                                 |
| 3. Pantalla de preguntas   | `Pantalla de Pregunta`                                                                                                                                                                       | `question.text`, `timer`, `feedback.text`, `option1` a `option4`, frame labels `showOptions` y `showFeedback` |
| 4. Pregunta con medios     | `Adjunto de pantalla de pregunta`                                                                                                                                                            | como arriba, más `attachment.placeholder`                                                                     |
| 4b. Medios a pantalla completa    | `Adjuntar pantalla`                                                                                                                                                                          | `marcador de posición`                                                                                        |
| 5. Pantalla de respuesta   | `Responder PieScreen`                                                                                                                                                                        | `option1` a `option4`, `answer.text`, `feedback.text`                                                         |
| 5b. Respuesta de pregunta abierta | `Pantalla de respuesta`, `RespuestaOpenQuestionPieScreen`                                                                                                                                    | `answer.text`, `feedback.text`, `players`, `piechart`                                                         |
| 6. Piedra                  | `WinnerScreen` + `PlayerScore`                                                                                                                                                               | `header.text`, `players`, `feedback.text` (`play.Uin.text` opcional)                       |
| 7. Entrada redonda         | `RoundIntroTedMusic`, `RoundIntroTedSport`, `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedCultHist`                                                                   | —                                                                                                             |
| —                                                 | `Pantalla de Carga`                                                                                                                                                                          | `text`, `progreso`                                                                                            |
| —                                                 | `Botón`, `Checkbox`, `Slider`, `QuestionSelect`, `SymbolCorrect`, `SymbolWrong`, `SettingsScreenScrollarea`, `AlertScreen`, `ActivityScreen`, `MenuScreen`, `SettingsScreen`, `PackListItem` | no hay obras de arte propias - construidas a partir de tus marcos y del marco general                         |

Los nombres de introducción redonda contienen "Ted" por razones históricas. Eso es un resto del tema original y no significa que un personaje tenga que aparecer en ellos.

Cada elemento con `.text` después de que es un cuadro de texto ajustado como se describe anteriormente: un rectángulo el motor se llena. El elemento `temporizador` es un clip de película con su propia línea de tiempo; el motor lee su recuento de marcos y mueve la cabeza de reproducción en proporción al tiempo transcurrido.

### Qué toma el archivo de configuración de tu diseño

```json
{
  "fonts": { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "default": "#…", "header": "#…", "question": "#…",
    "botones": "#…", "diálogo": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "booleanResultColors": { "correcto": "#…", "error": "#…" },
  "overlay": "light | dark"
}
```

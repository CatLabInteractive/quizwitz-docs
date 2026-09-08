---
id: theme-design-guide
title: Guía de diseño de temas
---

# Guía de diseño de temas

[Temas](/docs/advanced/theming) explica cómo se construye un tema de QuizWitz: en Adobe Animate, exportado como biblioteca de CreateJS. Esta página trata el paso anterior: el **diseño** del tema.

Está escrita para un diseñador gráfico y da por hecho que el diseño y la producción en Animate corren a cargo de personas distintas. Ya quedan pocos diseñadores que trabajen en Adobe Animate, así que lo habitual es que un diseñador entregue el material gráfico y otra persona monte el tema. Eso funciona bien, pero solo si el material gráfico se entrega en una forma que la construcción pueda aprovechar de verdad. Esta página describe esa forma y sirve al mismo tiempo como lista de entregables cuando le pides un presupuesto a un diseñador.

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

## Siete marcos y una hoja de elementos

El juego tiene decenas de estados de pantalla distintos, pero la mayoría son variantes de la misma maquetación. **Diseñas siete marcos y una hoja de elementos; el resto se deriva de ellos.** No es un atajo: así funciona el motor. Una pantalla sin material gráfico propio recae en un marco general.

La hoja importa tanto como los marcos: una pantalla que recae en el marco general sigue necesitando mobiliario dentro de su área de contenido (un panel, una fila, una línea) y ese mobiliario es una decisión de diseño, no algo que pueda deducirse de un fondo.

| #     | Marco                       | Qué hay en él                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Qué se deriva de él                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1** | **Marco general**           | El fondo, un título de cabecera y un área de contenido vacía debajo. No es una composición terminada: es el marco dentro del cual se construye el resto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Trece estados de pantalla: explicación de ronda, clasificación, presentación de jugadores, variantes de opción múltiple, preguntas largas, avisos de Seats, ajustes. Cada uno llena esa área de contenido a su manera con elementos de la hoja, así que tiene que sostener cosas que no se parecen en nada. El selector de preguntas y la pregunta larga pueden tener su propia composición si así lo quieres; si no, usan este marco. |
| **2** | **Conexión y espera**       | Dos pantallas, no una. La **pantalla de conexión** es lo que ve la sala para unirse: cinco líneas de instrucciones, un código de juego, un código QR, una línea con el número de jugadores conectados y una lista de los jugadores que van llegando. Diséñala **dos veces**: con logotipo de cliente y sin él. El código de juego y el código QR los genera el motor; reserva un cuadrado para el código QR. La **pantalla de espera** permanece mientras el quizmaster lee una pregunta en voz alta y está casi vacía: el logotipo del propio quiz, o el material gráfico del tema, y nada más. Está en pantalla más tiempo que casi cualquier otra cosa del juego. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **3** | **Pantalla de pregunta**    | La pregunta, un temporizador, cuatro opciones de respuesta, una línea de feedback. La pantalla que la sala mira durante más tiempo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **4** | **Pregunta con adjunto**    | Lo mismo, dispuesto alrededor de una imagen o un vídeo. Puede ser una composición distinta a la del marco 3. El adjunto se escala para caber dentro del recuadro que dibujas, así que tanto una imagen apaisada como una vertical tienen que verse aceptables en él.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | También la variante de adjunto a pantalla completa y los adjuntos que se muestran entre preguntas.                                                                                                                                                                                                                                                                                                                                                                                     |
| **5** | **Pantalla de respuesta**   | Qué respuesta era la correcta, cómo se repartieron las respuestas de la sala entre las opciones, y una línea de feedback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | También la pantalla de respuesta para preguntas abiertas y para preguntas con adjunto.                                                                                                                                                                                                                                                                                                                                                                                                 |
| **6** | **Clasificación y ganador** | Una lista de jugadores con posición, avatar, nombre y puntuación. Entrega la **fila de jugador** como un elemento aparte y reutilizable: se repite seis veces por defecto, hasta diez.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Tanto la clasificación entre rondas como el ganador final.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **7** | **Intro de ronda**          | Un anuncio breve por categoría de ronda. Hay seis categorías: ciencia y tecnología, naturaleza, entretenimiento y música, deporte, arte, historia. Un mismo diseño puede servir para varias categorías.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Las seis categorías.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### La hoja de elementos

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

### Lo que ya está decidido

- **Los móviles de los jugadores.** Una maquetación HTML fija, estilizada a partir de tu lista de colores.
- **El puñado de cosas que dibuja el propio motor.** Parte del mobiliario se dibuja en código en lugar de tomarse del tema: las líneas entre filas de la escalera de puntos, la fila resaltada del selector de preguntas, el código QR. Esos elementos toman su color de la lista de **El color como lista** y de ningún otro sitio, así que esa lista es el único control que tienes sobre ellos.
- **Qué pantallas recaen en el marco general, y cómo.**
- **Cómo se asocian las seis categorías al material gráfico de la intro de ronda.** Esa asociación es un ajuste de configuración, así que una misma intro puede reutilizarse para varias categorías.
- **Todos los tiempos y todas las duraciones de animación.**
- **El sonido.** Un tema puede llevar su propia música y sus propios efectos de sonido, pero eso es un entregable aparte y no forma parte del encargo de diseño.

### El personaje es opcional

El tema de serie de QuizWitz tiene un personaje que habla y reacciona. Nada obliga a tener uno: el validador de temas solo avisa sobre el elemento `ted`; sin él no falla. El [tema Emerald](/docs/advanced/emerald-theme) viene sin personaje, y prescindir de él elimina el trabajo de animación más caro: sincronía labial, ojos, brazos.

Sin personaje, la intro de ronda se convierte en un momento gráfico, tipográfico o ilustrativo. Dos enfoques mantienen el trabajo en proporción: una composición con una variante de color o de icono por categoría, o un único anuncio universal en el que solo cambia el nombre de la ronda. Seis intros realmente distintas son mucho trabajo para unos pocos segundos en pantalla.

---

## Cómo son estos marcos en la práctica

Las pantallas de abajo provienen de un tema existente. Están aquí para mostrar **qué elementos aparecen en cada pantalla y cuándo**. No son una referencia de estilo _ni_ de maquetación: dónde coloca este tema su pregunta, sus opciones y su temporizador es decisión suya, y la tuya puede ser completamente distinta. Léelas por lo que tiene que estar presente, no por dónde va colocado. Todas ellas, y más, se pueden jugar en el [probador de temas](https://client.quizwitz.com/test.html).

### Marco 1: el marco general

Dos momentos de juego sobre el mismo marco: un selector de preguntas y una escalera de puntos.

Fíjate en lo poco que tienen en común. El selector pone sus tres filas dentro de un panel con borde; la escalera no tiene panel alguno, solo filas separadas por líneas finas. Lo que ambos comparten es el fondo y la banda de cabecera de arriba: todo lo que hay debajo pertenece a la pantalla concreta y lo llena el juego, no tú.

![El marco general con un selector de preguntas de tres filas](/images/theme-design/frame1-general-multiquestion.png)

![El marco general con una escalera de puntos de cinco niveles](/images/theme-design/frame1-general-strikeladder.png)

Ese panel y esas líneas son decisiones de diseño, y te corresponden a ti: vienen de la **hoja de elementos**, no de este marco. Lo que este marco tiene que hacer es sostenerlos: diseña el área de contenido como una zona vacía, neutra y amplia que funcione igual de bien con un panel con borde, con una lista desnuda y con una tabla de filas. Un fondo recargado en el centro, o una cabecera que solo funciona con un panel encajado justo debajo, es donde eso se rompe.

### Marco 2: conexión y espera

Con un logotipo de cliente junto al código de juego, y sin él, donde es el material gráfico propio del tema el que sostiene la pantalla:

![Pantalla de conexión con logotipo de cliente](/images/theme-design/frame2-connect.png)

![Pantalla de conexión sin logotipo de cliente](/images/theme-design/frame2-connect-nologo.png)

La pantalla de espera es una composición aparte y no una variante de la pantalla de conexión: las dos solo comparten el fondo. Permanece mientras el quizmaster lee una pregunta en voz alta, y está casi vacía: el logotipo del propio quiz, o el material gráfico del tema, y nada más. Está en pantalla más tiempo que casi cualquier otra cosa del juego, así que merece más atención de la que suele recibir una pantalla vacía.

![Pantalla de espera](/images/theme-design/frame2-pending.png)

### Marco 3: la pantalla de pregunta

Cuatro opciones, la pregunta encima, el temporizador en el medio. Ten en cuenta que una opción puede consistir únicamente en un emoji.

![Pantalla de pregunta con cuatro opciones de texto](/images/theme-design/frame3-question-options.png)

![Pantalla de pregunta con banderas como opciones de respuesta](/images/theme-design/frame3-question-emoji.png)

Una pregunta sin opciones: los jugadores escriben su respuesta en el móvil. La pantalla está casi vacía y el temporizador se convierte en el elemento principal:

![Pregunta abierta solo con la pregunta y un temporizador grande](/images/theme-design/frame3-question-open.png)

El momento en que se acaba el tiempo. El globo de feedback aparece sobre la pantalla y el temporizador queda vacío:

![Pantalla de pregunta mostrando el estado de tiempo agotado](/images/theme-design/frame3-question-timeout.png)

### Marco 4: adjunto

Las mismas piezas, recolocadas alrededor de un área de adjunto, con las opciones a izquierda y derecha:

![Pantalla de pregunta con una imagen en el medio](/images/theme-design/frame4-question-attachment.png)

Un adjunto por sí solo, ocupando la pantalla:

![Adjunto a pantalla completa](/images/theme-design/frame4-attachment-fullscreen.png)

### Marco 5: la pantalla de respuesta

Esta pantalla pasa por tres momentos. Primero la distribución, todavía sin nada marcado:

![Pantalla de respuesta mostrando la distribución](/images/theme-design/frame5-answer-mc-spread.png)

Después se marca la opción correcta y se tachan las incorrectas:

![Pantalla de respuesta con la opción correcta revelada](/images/theme-design/frame5-answer-mc-reveal.png)

Y si la pregunta lleva una explicación, cae un globo sobre el material gráfico. Déjale sitio: aterriza encima de lo que hayas diseñado:

![Pantalla de respuesta con el globo de explicación](/images/theme-design/frame5-answer-mc-explanation.png)

Con un grupo pequeño, ese mismo momento es una lista de puntuaciones en lugar de un gráfico:

![Pantalla de respuesta para un grupo pequeño](/images/theme-design/frame5-answer-mc-small.png)

En una pregunta abierta, el gráfico muestra cuántos jugadores acertaron:

![Pantalla de respuesta para una pregunta abierta](/images/theme-design/frame5-answer-open.png)

### Marco 6: clasificación y ganador

La clasificación después de una ronda. La fila de jugador es el elemento que se repite: posición, avatar, nombre, puntuación.

![Clasificación con seis filas de jugador](/images/theme-design/frame6-roundoutro.png)

La cuenta atrás final nombra a un jugador cada vez, del último puesto al primero: puesto, puntuación y nombre de equipo bajo los focos. Aquí es también donde los emoji voladores son más densos; mira la nota más abajo:

![La cuenta atrás del ganador nombrando a un jugador](/images/theme-design/frame6-winner-countdown.png)

![La clasificación final](/images/theme-design/frame6-winner.png)

### Marco 7: la intro de ronda

Un solo diseño, opcionalmente con una variante por categoría:

![Intro de ronda para la categoría naturaleza](/images/theme-design/frame7-roundintro-nature.png)

![Intro de ronda para la categoría ciencia](/images/theme-design/frame7-roundintro-science.png)

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

En la práctica: las cuatro opciones de respuesta son cuatro capas separadas, no una. El temporizador va separado del fondo. Un botón y su etiqueta son dos elementos. Una fila de jugador es un grupo que se puede duplicar.

Lo que sí puede combinarse: el material gráfico de fondo puramente decorativo que funcione como una sola imagen fija.

Esta es la única regla que duele de verdad cuando no se sigue: hay que despiezar o volver a dibujar el material gráfico, que es justo el coste que este planteamiento pretende evitar.

### Efectos que no sobreviven

El motor dibuja sobre un canvas HTML5. Estos hay que **hornearlos en la imagen** o dejarlos fuera:

- Desenfoque, sombras paralelas y resplandor en vivo como filtros → entrégalos como material gráfico
- Modos de fusión (multiplicar, trama, superponer) → resuélvelos a color plano
- Efectos de capa y capas de ajuste
- Degradados **dentro** del texto, o texto con contorno por carácter
- Máscaras que cambian en cada fotograma

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
- **El recuadro es un máximo, no una promesa.** Tú diseñas sus proporciones; el relleno varía.
- **Doce idiomas.** Las palabras compuestas alemanas son largas, y el húngaro no es más benévolo. Un recuadro que va justo en inglés baja a un tamaño ilegible en alemán.
- **Pueden aparecer emoji dentro del texto.** Los jugadores eligen uno junto a su nombre de equipo, y una pregunta o una opción puede contener uno; a veces una opción no es más que un emoji. Se dibujan en color y son más altos que las letras que los rodean.

Lo que la construcción necesita saber de cada recuadro de texto: dónde está, cómo de grande es, cómo está alineado, qué color y qué fuente lleva. No: a qué cuerpo.

De ahí salen dos cosas que puedes aprovechar: un recuadro grande con texto corto se convierte por sí solo en una composición tipográfica potente, y un recuadro que haces deliberadamente estrecho y alto obliga al texto a formar una columna. Puedes usar ese ajuste como recurso de diseño; lo que no conviene es diseñar en su contra.

### El temporizador: obligatorio, y es una animación

**Todas las pantallas de pregunta tienen temporizador.** No es opcional; la sala tiene que ver cuánto tiempo queda. Los dos marcos de pregunta llevan uno.

**El temporizador no es un número que cuenta, sino una animación cuyo cabezal de reproducción mueve el motor.** Diseñas una progresión de "lleno" a "vacío": una barra que se vacía, un anillo que se cierra, un reloj de arena, una línea que se encoge. El motor reproduce esa animación exactamente a la velocidad que hace coincidir el último fotograma con el final de la pregunta.

De ahí se deduce lo siguiente:

- **La duración de la pregunta no es fija.** Se define por quiz, a menudo de veinte a treinta segundos, pero puede ser más corta o más larga. Tu animación se estira o se comprime para encajar. Diseña una _progresión_, no una animación de un número concreto de segundos.
- **Sin números ni marcas por segundo.** Un temporizador que cuenta "20, 19, 18…" deja de ser cierto en cuanto cambia la duración.
- **Los últimos segundos son el momento de más tensión del juego.** Ayuda que la progresión se vuelva más clara o más urgente hacia el final.
- **Legible desde el fondo de la sala**, de un vistazo.
- **Se admiten varios temporizadores.** Una barra arriba y un anillo junto a la pregunta se accionan los dos, siempre que cada uno se llame `timer`.

Entrega el temporizador como una serie de fotogramas clave o como una descripción de la progresión: con "la barra se vacía de derecha a izquierda y pasa de verde a rojo" basta.

### Los emoji voladores aterrizan encima de todo

Cada jugador elige un emoji al entrar, y el juego lanza esos emoji por la pantalla. Los dibuja el motor en una capa por encima del tema, con los colores que tenga el emoji del jugador. **Aquí no hay nada que diseñes tú**, pero sí hay algo alrededor de lo cual diseñar, porque no son un adorno puntual. Aparecen en tres momentos:

- **Cuando un jugador responde.** Su emoji sube desde el borde inferior en una posición horizontal aleatoria, describe un arco y vuelve a caer fuera del encuadre.
- **Cuando un jugador lanza uno.** Los jugadores pueden lanzar su emoji desde el móvil; el ángulo y la velocidad salen del deslizamiento, y sale girando desde el centro inferior.
- **Cuando se revela un puesto en la cuenta atrás final.** Una descarga de los emoji del jugador nombrado: veinte para un puesto normal, cincuenta para el tercero, setenta y cinco para el segundo y **ciento cincuenta para el ganador.**

Siempre entran por el borde inferior, describen un arco bajo la gravedad y vuelven a caer fuera. Lo que eso significa para el diseño:

- **Mantén el tercio inferior de las pantallas de clasificación y de ganador libre de todo lo pequeño o crítico.** Durante la cuenta atrás ahí abajo hay verdadera aglomeración.
- **Da por hecho que chocarán con tu paleta.** Son emoji a todo color de cualquier rincón de la tabla Unicode, y ningún tema los controla. Un diseño que solo se sostiene en una gama de colores cerrada parecerá accidental durante esos segundos.
- **Los lanzamientos se suprimen mientras se muestra una imagen o un vídeo**, así que las pantallas con adjunto se mantienen limpias.
- La capa entera se puede desactivar por partida, así que tampoco construyas una composición que dependa de que estén ahí.

### Fuentes

- **Las fuentes tienen que poder incrustarse.** Hace falta el archivo `.ttf` u `.otf`, más una licencia que permita incrustarlas en una aplicación. Una fuente con licencia solo como fuente web, o solo para impresión, no se puede usar. Compruébalo antes de diseñar con ella; después es una corrección cara.
- Las fuentes con ascendentes o descendentes inusualmente grandes se pueden compensar, pero avisa si usas alguna.

### El color como lista

El tema lee una lista de colores de un archivo de configuración, y los móviles de los jugadores se estilizan a partir de esa misma lista. Entrega tu paleta como una **lista con nombres**, no solo como colores dentro del material gráfico:

- **Pantalla de juego:** color principal, color de acento, fondo, color de panel o contenedor, fondo del temporizador, color de texto por defecto, color del texto de cabecera, color del texto de la pregunta, texto de los botones, texto de diálogos y explicaciones, texto del nombre y la puntuación del jugador, el color de lo correcto, el color de lo incorrecto.
- **Las cuatro opciones de respuesta:** cada una con un color de fondo y uno de borde, más un color plano por opción para los móviles y los gráficos.
- **Móviles de los jugadores:** fondo, color de texto, color de contorno, color de contorno de las opciones, y el color de fondo y de texto del contenedor de respuesta.

En la pantalla de juego se admiten degradados: indícalos como dos valores hexadecimales.

Unos pocos colores son el _único_ control sobre partes que dibuja el propio motor, así que conviene decidirlos en lugar de dejarlos por defecto: el **separador** (las líneas entre filas donde no hay panel, y las de la escalera de puntos), los estados **activo**, **inactivo** y **seleccionado** de una fila del selector de preguntas, el texto de los **diálogos** y el **anverso y el reverso del código QR**. Si los dejas fuera, recaen en valores por defecto internos (blanco, gris, rojo, negro y blanco) que rara vez encajan con un diseño.

### El logotipo de QuizWitz

Los diseños a medida incluyen el logotipo de QuizWitz. Resérvale un sitio donde no estorbe al diseño.

---

## Qué hay que entregar

### Archivo fuente: preferiblemente Illustrator

**Adobe Illustrator (`.ai`) es lo preferible, y hay una razón concreta.** El tema se construye en Adobe Animate, que importa archivos de Illustrator directamente y convierte tus capas en capas de Animate o en símbolos separados, conservando los nombres de capa y dejando los vectores editables. Ese es justo el paso que salva al material gráfico de tener que reconstruirse a mano.

Figma o Photoshop también valen, pero conoce el coste: con Figma todo pasa por exportación a SVG y PNG, y ahí es precisamente donde se pierde la estructura de capas que hace falta aquí. Si aun así usas Figma, entrega **cada elemento por separado en SVG**, con nombres de archivo que coincidan con los nombres de capa, para poder reconstruir la estructura a mano. Photoshop se importa en Animate con sus capas intactas, igual que Illustrator, pero te da mapa de bits en lugar de vectorial.

Si eres más rápido en Figma, úsalo para la fase de concepto y entrega la versión final en Illustrator.

Estructura de archivos:

- Una mesa de trabajo por pantalla, cada una exactamente de 1920 × 1080, con el nombre de los marcos de arriba.
- Las piezas reutilizables (botón, fila de jugador, opción de respuesta, temporizador) como **símbolos** o componentes, no como copias sueltas.
- Nombres de capa en inglés, sin espacios: `question`, `option1` a `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colores como muestras con nombre y texto como estilos con nombre, en vez de definidos objeto a objeto.

### Lista de entregables

1. El **archivo fuente**, estructurado como se indica arriba.
2. **Cada marco en PNG**, 1920 × 1080: una referencia de cómo debe verse. Para el marco 2, tanto la versión con logotipo de cliente como la versión sin él.
3. **La hoja de elementos** en una sola mesa de trabajo: los bloques de contenido y los controles enumerados arriba.
4. **Cada elemento gráfico por separado en PNG transparente a 2×**, en una carpeta, con el nombre de archivo igual al nombre de capa.
5. **El temporizador** como fotogramas clave o como descripción escrita de la progresión.
6. **Las fuentes** en `.ttf` u `.otf`, con justificante de licencia.
7. **La lista de colores** descrita arriba, en valores hexadecimales.
8. **Media página de notas**: cuál es la idea, cómo deben aparecer las opciones, qué se mueve y qué se queda quieto. No una justificación de diseño de diez páginas: quien construye el tema necesita saber qué construir. Las ideas de movimiento se pueden describir o entregar como una animática básica.

### Orden de trabajo

Empieza por el marco 3, la pantalla de pregunta, junto con la hoja de elementos, y consigue que se aprueben los dos antes que el resto. Entre ambos llevan el temporizador, las opciones, el panel y todos los controles, así que fijan el estilo de todo el tema, y la pantalla de pregunta es la que la sala mira durante más tiempo. Los marcos 1 y 2 salen de ellos de forma natural; los marcos 5 a 7 van al final.

---

## Anexo: nombres de símbolos

Para que quede completo, y para quien quiera saber exactamente dónde acaba su material gráfico. **No necesitas leer esto para hacer el trabajo**; con los siete marcos y la hoja de elementos de arriba basta. Usar estos nombres como nombres de capa ahorra un paso de traducción.

| Marco                                                     | Nombre del símbolo                                                                                                                        | Piezas obligatorias                                                                                                                                                                                              |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Marco general                   | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` opcional                                                                         | `placeholder` (el área de contenido); recuadro de texto `title` opcional                                                                                                                      |
| 1b. Selector de preguntas, pregunta larga | `MultiQuestionScreen`, `LongQuestionScreen`; ambos opcionales, recaen en el marco general                                                 | selector: marcador `questions`, `timer`; pregunta larga: marcador `question`                                                                                                     |
| 2. Pantalla de conexión            | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` opcional, con un marcador `logo`                                         | `instructions.line1` a `line5`, `connectedPlayers`; marcador `qrCode` con la etiqueta de fotograma `showQrCode` opcional                                                                                         |
| 2b. Pantalla de espera                    | `PendingScreen`; `PendingScreenWithLogo` opcional                                                                                         | `header.text`                                                                                                                                                                                                    |
| 3. Pantalla de pregunta            | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` a `option4`, etiquetas de fotograma `showOptions` y `showFeedback`                                                                                          |
| 4. Pregunta con adjunto            | `QuestionScreenAttachment`                                                                                                                | como arriba, más `attachment.placeholder`                                                                                                                                                                        |
| 4b. Adjunto a pantalla completa           | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                    |
| 5. Pantalla de respuesta           | `AnswerPieScreen`; `AnswerPieScreenAttachment` opcional                                                                                   | `option1` a `option4`, `answer.text`, `feedback.text`                                                                                                                                                            |
| 5b. Respuesta a pregunta abierta          | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; variantes `…Attachment` opcionales                                                         | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                            |
| 6. Clasificación                   | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` y `PlayerScoreNoImage` opcionales                               | `header.text`, `players`, `feedback.text` (`playAgain.text` opcional); en la fila: `position`, `name`, `score`, `avatar` opcional                                             |
| 7. Intro de ronda                  | uno o varios símbolos con cualquier nombre; el archivo de configuración asocia cada una de las seis categorías a un símbolo               | -                                                                                                                                                                                                                |
| -                                                         | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                               |
| -                                                         | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no necesitan material gráfico propio: se construyen a partir de lo que aparece en tus marcos                                                                                                     |
| -                                                         | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | solo se ven en la aplicación de escritorio, no en un quiz en directo. No forman parte del encargo: se toman de la plantilla del tema y se reestilizan con tu fondo y tus botones |

Los símbolos de intro de ronda del tema de serie se llaman `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` y `RoundIntroTedCultHist`; arte e historia comparten el último. El "Ted" de esos nombres es un resto del personaje del tema original y no significa que tenga que aparecer un personaje en ellos.

Cada elemento con `.text` detrás es un recuadro de texto ajustado como se ha descrito arriba: un rectángulo que el motor rellena solo. El elemento `timer` es un clip de película con su propia línea de tiempo; el motor lee su número de fotogramas y mueve el cabezal de reproducción en proporción al tiempo transcurrido, como mucho 24 veces por segundo.

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

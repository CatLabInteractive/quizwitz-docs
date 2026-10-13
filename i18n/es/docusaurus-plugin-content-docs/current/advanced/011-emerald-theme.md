---
id: emerald-theme
title: Tema Emerald
---

# Tema Emerald

El tema Emerald es la forma más fácil de personalizar la apariencia de tu juego QuizWitz. Por defecto, el tema es un estilo limpio azul / verde con colores de opciones vivos, pero combinando los adjuntos del quiz y los modificadores del tema puedes cambiar drásticamente su apariencia.

:::tip
Puedes usar nuestro [probador de tema](https://client.quizwitz.com/test.html?theme=emerald) para ver cómo se verán tus ajustes.
:::

![Una captura de pantalla del tema emerald](/images/emerald/emerald.png)

## Selecciona el tema Emerald

En tus **Configuraciones de Quiz**, selecciona **Tema** y activa **Emerald**.

Puedes probar un quiz usando el tema Emerald [aquí](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Una captura de pantalla de las configuraciones del quiz](/images/emerald/quiz-settings.png)

## Adjuntos

### Adjuntos del quiz

Sin duda, la forma más fácil de cambiar la apariencia y sensación del juego es adjuntando imágenes a tu quiz. Abre las **Configuraciones de Quiz** y desplázate hasta la sección de **Adjuntos**. Aquí puedes subir imágenes que se usarán como fondo, logo del cliente, pantallas de conexión, espera (para quizzes en conferencias y en vivo), y más.

![Una captura de pantalla de los adjuntos del quiz](/images/emerald/quiz-attachments.png)

### Adjuntos de ronda

También puedes subir imágenes o videos que se reproducirán antes y después del juego. Esto también aplica para las rondas: encuentra una imagen que quieras usar como introducción de la ronda, ve a las **configuraciones de ronda**, desactiva **Mostrar introducción de ronda** para ocultar la introducción por defecto, y sube tu imagen o video como **Mostrar antes de la ronda**. Cuando comience la ronda, la imagen o video se mostrará en lugar de la introducción predeterminada.

![Una captura de pantalla de los adjuntos de ronda](/images/emerald/round-settings.png)

:::tip
Usa imágenes y videos con una resolución de 1920 x 1080 para mejores resultados.
:::

:::info
Después de jugar con los adjuntos, terminamos con algo [como esto](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Una captura de pantalla del tema emerald con adjuntos del quiz](/images/emerald/emerald-with-attachments.png)

### Música

Toda la música en el juego también puede ser reemplazada con adjuntos. Cualquier archivo de audio subido en los espacios **durante la pregunta** se reproducirá durante la cuenta regresiva de la pregunta.

## Modificadores del tema Emerald

Además de los adjuntos, también puedes manipular el tema Emerald con **parámetros de consulta**. Estos son parámetros que puedes añadir a la URL de las **opciones avanzadas del juego** - y cambian la apariencia del tema.

Para esto, empezaremos con un quiz de ejemplo (sin adjuntos):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Cuando inicies el quiz anterior, el juego estará en el estilo Emerald predeterminado. Cambiémoslo.

:::tip
La forma más fácil de experimentar con estos parámetros es usando nuestro [probador de tema](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Cuando hayas terminado de experimentar, puedes copiar y pegar los parámetros a la URL de las opciones avanzadas del juego.
:::

Los modificadores disponibles son:

- backgroundColor
- mainColor
- accentColor
- containerColor (el contenedor de la pregunta; puede llevar un valor alfa, por ejemplo ffffff40)
- timerBackgroundColor
- headerTextColor
- optionTextColor
- dialogTextColor
- pieChartLabelColor
- ladderColor
- optionColors (4 colores, separados por comas)
- optionBorderColors (4 colores, separados por comas)

Los dispositivos de los jugadores también se pueden personalizar:

- remoteBackgroundColor
- remoteTextColor
- remoteQuestionColor
- remoteQuestionTextColor
- remoteOptionOutlineColor
- remoteOutlineColor
- remoteContainerBackground
- remoteContainerText
- remoteOptionColors (4 colores, separados por comas)

Además, puedes establecer una fuente predeterminada:

- defaultFont
- headerFont

Estas fuentes deben ser URLs a archivos de fuentes públicos disponibles.

Por último, `hideLogo=1` oculta el logo de QuizWitz.

Cada uno de estos modificadores puede contener un solo color en formato hexadecimal HTML (ff0000) o un degradado lineal indicando varios colores separados por un signo menos (por ejemplo, ff1b6b-45caff). (Ten en cuenta que el símbolo # no debe añadirse.)

:::note
Los parámetros de consulta deben comenzar con un signo de interrogación ( ? ) y cada parámetro debe estar separado por un ampersand ( & ). Para más información sobre parámetros de consulta, visita [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Al añadir estos parámetros a la URL de tu juego, puedes modificar los colores del tema:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Una captura de pantalla del tema Emerald con modificadores personalizados](/images/emerald/theme_properties.png)

### Guardar los modificadores en tu quiz

No tienes que añadir los parámetros a cada enlace a mano. Abre **Compartir o insertar** en el editor de quizzes, despliega **Opciones avanzadas de juego**, pega los parámetros (sin el signo de interrogación inicial, por ejemplo `backgroundColor=ff1b6b-45caff&accentColor=00ff87`) en el campo **cadena de consulta sin procesar** y haz clic en **Guardar ajustes en el quiz**. A partir de entonces, todos los enlaces para jugar y para compartir el quiz los incluyen.

El asistente de IA de QuizWitz también puede hacerlo por ti: pídele que cambie el color de fondo de tu quiz y pasará el quiz al tema Emerald y guardará los modificadores.

## Vistas de pregunta personalizadas

El tema Emerald también ofrece dos diseños de pantalla adicionales para una pregunta con una imagen o un vídeo en su ranura **Durante la pregunta**, que se eligen para cada pregunta con la opción **Vista personalizada** en los ajustes de la pregunta:

- **Adjunto a pantalla completa** - la imagen o el vídeo ocupa toda la pantalla de juego; el texto de la pregunta y las opciones no se muestran
- **Adjunto a pantalla completa sin temporizador** - lo mismo, pero también se oculta la cuenta atrás

Los jugadores leen la pregunta y responden en sus propios dispositivos. Consulta [escribir preguntas](../editor/005-writing-questions.md) para más detalles.

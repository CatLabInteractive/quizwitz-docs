---
id: emerald-theme
name: Tema Emerald
---

# Tema Emerald

El tema Emerald es la forma más fácil de personalizar el aspecto de tu juego QuizWitz. Por defecto, el tema tiene un estilo limpio azul/verde con colores vivos en las opciones, pero combinando anexos de quiz y modificadores de tema puedes cambiar radicalmente su apariencia.

:::tip
Puedes usar nuestro [probador de temas](https://client.quizwitz.com/test.html?theme=emerald) para ver cómo quedarán tus ajustes.
:::

![Una captura del tema emerald](/images/emerald/emerald.png)

## Selecciona el tema Emerald

En tus **Ajustes del Quiz**, selecciona **Tema** y activa **Emerald**.

Puedes probar un quiz usando el tema Emerald [aquí](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Una captura de los ajustes del quiz](/images/emerald/quiz-settings.png)

## Anexos

### Anexos del Quiz

Sin duda, la forma más sencilla de cambiar el aspecto y sensación del juego es añadiendo imágenes a tu quiz. Abre los **Ajustes del Quiz** y desplázate hasta la sección de **Anexos**. Aquí puedes subir imágenes que se usarán como fondo, logo del cliente, pantallas de conexión — y espera (para quizzes de conferencia — y en vivo), y más.

![Una captura de los anexos del quiz](/images/emerald/quiz-attachments.png)

### Anexos de la ronda

También puedes subir imágenes o vídeos que se reproducirán antes y después del juego. Esto también aplica para las rondas: busca una imagen que quieras usar como introducción a la ronda, ve a los **ajustes de la ronda**, desactiva **Mostrar introducción de la ronda** para ocultar la introducción predeterminada, y sube tu imagen o vídeo como **Mostrar antes de la ronda**. Cuando comience la ronda, se mostrará la imagen o el vídeo en lugar de la introducción predeterminada.

![Una captura de los anexos de las rondas](/images/emerald/round-settings.png)

:::tip
Usa imágenes y vídeos con resolución de 1920 x 1080 para mejores resultados.
:::

:::info
Después de jugar con los anexos, obtenemos algo [como esto](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Una captura del tema emerald con anexos del quiz](/images/emerald/emerald-with-attachments.png)

### Música

Toda la música del juego también puede ser reemplazada con anexos. Cualquier archivo de audio subido en los espacios **durante la pregunta** se reproducirá durante la cuenta atrás de la pregunta.

## Modificadores del tema Emerald

Además de los anexos, también puedes manipular el tema Emerald con **parámetros de consulta**. Estos son parámetros que puedes añadir a la URL de las **opciones avanzadas del juego** — y cambian la apariencia del tema.

For this, we will start with an example quiz (without any attachments):\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Cuando comiences el quiz anterior, el juego tendrá el estilo Emerald predeterminado. Cambiémoslo.

:::tip
La forma más fácil de experimentar con estos parámetros es usando nuestro probador de temas.\
The easiest way to experiment with these parameters is by using our theme tester.\
When you are done experimenting, you can copy — paste the parameters to your advanced game options URL.
:::

Los modificadores disponibles son:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colores, separados por coma)
- optionBorderColors (4 colores, separados por coma)

Adicionalmente, puedes configurar una fuente predeterminada:

- defaultFont
- headerFont

Estas fuentes deben ser URLs a archivos de fuentes públicamente disponibles.

Cada uno de estos modificadores puede contener un solo color en formato hexadecimal HTML (ff0000), o un degradado lineal proporcionando múltiples colores divididos por un guion ( — por ejemplo ff1b6b-45caff). (Ten en cuenta que no se debe añadir el símbolo #).

:::note
Los parámetros de consulta deben comenzar con un signo de interrogación ( ? ) y cada parámetro debe estar separado con un ampersand ( & ). Para más información sobre parámetros de consulta, visita [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Al añadir estos parámetros a la URL de tu juego, puedes modificar los colores del tema:\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Una captura del tema Emerald con modificadores personalizados](/images/emerald/theme_properties.png)

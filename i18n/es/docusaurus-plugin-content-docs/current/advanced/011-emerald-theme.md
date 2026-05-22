---
id: emerald-theme
name: Tema Emerald
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

Además de los adjuntos, también puedes manipular el tema Emerald con **parámetros de consulta**. Estos son parámetros que puedes añadir a la URL de las **opciones avanzadas del juego** — y cambian la apariencia del tema.

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
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colores, separados por comas)
- optionBorderColors (4 colores, separados por comas)

Además, puedes establecer una fuente predeterminada:

- defaultFont
- headerFont

Estas fuentes deben ser URLs a archivos de fuentes públicos disponibles.

Cada uno de estos modificadores puede contener un solo color en formato hexadecimal HTML (ff0000) o un degradado lineal proporcionando múltiples colores divididos por un símbolo menos ( — por ejemplo ff1b6b-45caff). (Ten en cuenta que el símbolo # no debe añadirse.)

:::note
Los parámetros de consulta deben comenzar con un signo de interrogación ( ? ) y cada parámetro debe estar separado por un ampersand ( & ). Para más información sobre parámetros de consulta, visita [wikipedia](https://es.wikipedia.org/wiki/Cadena_de_consulta).
:::

Al añadir estos parámetros a la URL de tu juego, puedes modificar los colores del tema:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Una captura de pantalla del tema Emerald con modificadores personalizados](/images/emerald/theme_properties.png)

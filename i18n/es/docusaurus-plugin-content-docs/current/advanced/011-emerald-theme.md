---
id: emerald-theme
title: Tema Emerald
---

# Tema Emerald

El tema Emerald es la forma más fácil de personalizar la apariencia de tu juego QuizWitz. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks - drastically.

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

Sin duda, la forma más fácil de cambiar la apariencia y sensación del juego es adjuntando imágenes a tu quiz. Abre las **Configuraciones de Quiz** y desplázate hasta la sección de **Adjuntos**. Here you can upload images that will be used as background, client logo, connect - and wait screens (for conference - and live quizzes), and more.

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

Además de los adjuntos, también puedes manipular el tema Emerald con **parámetros de consulta**. These are parameters you can add to the **advanced game options** URL - and they change the look of the theme.

Para esto, empezaremos con un quiz de ejemplo (sin adjuntos):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Cuando inicies el quiz anterior, el juego estará en el estilo Emerald predeterminado. Cambiémoslo.

:::tip
La forma más fácil de experimentar con estos parámetros es usando nuestro [probador de tema](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
When you are done experimenting, you can copy - paste the parameters to your advanced game options URL.
:::

Los modificadores disponibles son:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma - separated)
- optionBorderColors (4 colors, comma - separated)

Además, puedes establecer una fuente predeterminada:

- defaultFont
- headerFont

Estas fuentes deben ser URLs a archivos de fuentes públicos disponibles.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( - for example ff1b6b-45caff). (Ten en cuenta que el símbolo # no debe añadirse.)

:::note
Los parámetros de consulta deben comenzar con un signo de interrogación ( ? ) y cada parámetro debe estar separado por un ampersand ( & ). Para más información sobre parámetros de consulta, visita [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Al añadir estos parámetros a la URL de tu juego, puedes modificar los colores del tema:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Una captura de pantalla del tema Emerald con modificadores personalizados](/images/emerald/theme_properties.png)

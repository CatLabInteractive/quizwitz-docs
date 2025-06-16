---
id: emerald-theme
name: Tema Esmeralda
---

# Tema Esmeralda

El tema Esmeralda es la manera más fácil de personalizar el aspecto de su juego Witz. Por defecto, el tema es un estilo azul / verde limpio con colores de opción, pero combinando los archivos adjuntos del cuestionario y los modificadores del tema, puede cambiar drásticamente su apariencia.

:::tip
Puedes usar nuestro [probador de temas](https://client.quizwitz.com/test.html?theme=emerald) para ver cómo se verán tus ajustes.
:::

![Una captura de pantalla del tema esmeralda](/images/emerald/emerald.png)

## Selecciona el tema Esmeralda

En tu **Ajustes del Cuestionario**, selecciona **Tema** y activa **Esmerald**.

Puedes probar un cuestionario usando el tema Esmeralda [here](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Una captura de pantalla de los ajustes de los exámenes](/images/emerald/quiz-settings.png)

## Adjuntos

### Archivos adjuntos

Con mucho, la forma más fácil de cambiar la apariencia del juego es adjuntando imágenes a tu cuestionario. Abre los **Ajustes del Cuestionario** y desplázate hacia abajo a la sección **Adjuntos**. Aquí puedes subir imágenes que se usarán como segundo plano, logo del cliente, conecte — y espere pantallas (para conferencias — y tests en vivo), y más.

![Una captura de pantalla del cuestionario adjunto](/images/emerald/quiz-attachments.png)

### Redondear archivos adjuntos

También puedes subir imágenes o vídeos que se reproducirán antes y después del juego. Esto también se aplica a las rondas: busca una imagen que quieras usar como introducción redonda, ve a **ajustes redondos**, deshabilita **Mostrar entrada de ronda** para ocultar la introducción por defecto de la ronda, y sube tu imagen o vídeo como **Mostrar antes de la ronda**. Cuando la ronda se inicia, la imagen o video se mostrará en lugar de la introducción predeterminada.

![Una captura de pantalla de los archivos adjuntos redondos](/images/emerald/round-settings.png)

:::tip
Utilice imágenes y vídeos de resolución de 1920 x 1080 para obtener mejores resultados.
:::

:::info
Después de jugar con los archivos adjuntos, terminamos con algo [como esto](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Una captura de pantalla del tema esmeralda con archivos adjuntos de cuestionarios](/images/emerald/emerald-with-attachments.png)

### Música

Toda la música en el juego también puede ser reemplazada por archivos adjuntos. Cualquier archivo de audio subido en las ranuras **durante la pregunta** se reproducirá durante la cuenta regresiva de preguntas.

## Modificadores del tema Esmeralda

Además de los archivos adjuntos, también puedes manipular el tema Esmeralda con **parámetros de consulta**. Estos son parámetros que puedes añadir a la URL **opciones de juego avanzadas** — y cambian la apariencia del tema.

Para esto, comenzaremos con un cuestionario de ejemplo (sin ningún archivo adjunto):\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Cuando comiences el cuestionario anterior, el juego estará en el estilo predeterminado de Esmeralda. Vamos a cambiar eso.

:::tip
La forma más fácil de experimentar con estos parámetros es usando nuestro test de temas.\
La forma más fácil de experimentar con estos parámetros es usando nuestro test de temas.\
Cuando termines de experimentar, puedes copiar — pegar los parámetros a la URL de tus opciones de juego avanzadas.
:::

Los modificadores disponibles son:

- Color de fondo
- color principal
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colores, coma — separado)
- optionBorderColors (4 colores, coma — separado)

Adicionalmente, puede establecer una fuente predeterminada:

- defaultFont
- tipografía

Estas fuentes deben ser URLs para archivos de fuentes disponibles públicamente.

Cada uno de estos modificadores puede contener un solo color en formato HTML hexadecimal (ff0000), o un degradado lineal proporcionando varios colores divididos por un símbolo menos ( por ejemplo ff1b6b-45caff). (Nota que el símbolo # no debe ser añadido.)

:::note
Los parámetros de la consulta deben comenzar con un signo de interrogación ( ? ) y cada parámetro debe dividirse con un ampersand ( & ). Para más información sobre parámetros de consulta, visite [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Al añadir estos parámetros a la URL de tu juego, puedes modificar los colores del tema:\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Una captura de pantalla del tema Esmeralda con modificadores personalizados](/images/emerald/theme_properties.png)

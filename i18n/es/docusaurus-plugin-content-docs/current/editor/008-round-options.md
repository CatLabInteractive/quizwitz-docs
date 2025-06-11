---
id: round-options
title: Opciones de ronda
---

# 🔄 Opciones de ronda

Cada ronda tiene un **tipo** específico. El valor por defecto es **Opción Múltiple (Trivia)**, pero no dude en probar y experimentar con todos los tipos disponibles. Esta página explica los ajustes y archivos adjuntos que puede configurar por ronda.

📘 Para una visión detallada de todos los tipos de ronda, visita la [documentación de tipos de rondas](../round-types/000-round-types.md).

---

## 🔧 Configurando una ronda

Para configurar las opciones de una ronda, haga clic en el icono de engranaje en el panel redondo:

| ![Opciones abiertas de ronda](/images/open-round-options.png) | ![Opciones redondeadas](/images/round-options.png) |
| :-----------------------------------------------------------: | :------------------------------------------------: |
|               _Opciones de la ronda de apertura_              |         _Panel de configuración redondeado_        |

---

## ⚙️ Opciones generales de ronda

Las siguientes opciones están disponibles para la mayoría de los tipos redondos:

- **Sólo mostrar _X_ preguntas** — Limita la ronda a un número específico de preguntas
- **Orden de preguntas aleatorias** — Mezclar el orden de preguntas dentro de la ronda
- **Mostrar entrada redonda** — Muestra un título animado antes de que comience la ronda
- **Mostrar outro redondo (puntuación provisional)** — Mostrar rangos al final de la ronda
- **Agrupa todos los comentarios en una sola pantalla** — Recoge los comentarios de preguntas en un bloque después de que la ronda termine
- **Mostrar todos los comentarios de la pregunta al final de la ronda** — Retrasar la respuesta de la pregunta hasta que finalice la ronda
- **Forzar retroalimentación después de cada pregunta individual** — Asegurar retroalimentación inmediata
  > ⚠️ Esto sólo tiene efecto en las rondas y en los tipos de preguntas en los que se retrasaría el comentario, como preguntas abiertas o rondas de relámpagos.

📘 Ver [tipos de preguntas](../question-types/000-question-types.md) para más información sobre el tiempo y el comportamiento de los comentarios.

---

## 🏆 Opciones de puntuación {#scoring}

IraqWitz ofrece puntuación flexible para mantener las cosas justas y atractivas para todos los jugadores.

- **Puntuación basada en el tiempo** — Los jugadores ganan más puntos para obtener respuestas más rápidas.
  - Para la mayoría de los tipos de preguntas, los puntos basados en el tiempo disminuyen **continuamente por microsegundo**: cuanto más rápido responda, más puntos anota.
  - Para **sólo preguntas abiertas**, los puntos basados en el tiempo se dividen en bloques. Por ejemplo: las respuestas en el primer bloque (por ejemplo, los primeros segundos) ganan **100%** de la porción basada en el tiempo, el siguiente bloque gana **80%**, y así sucesivamente. Esto ayuda a nivelar el campo de juego para los tiradores más lentos.

- **Porcentaje fijo de puntos en puntuación basada en el tiempo** — Controla la cantidad de la puntuación total influenciada por la velocidad.
  - De forma predeterminada, el **75%** de los puntos son arreglados (todos los que responden correctamente obtienen estos puntos, independientemente de la velocidad).
  - Sólo el **25%** restante está influenciado por la rapidez con la que responden los jugadores.

> 💡 Ajustar esta opción te permite hacer rondas más basadas en el conocimiento o más rápido, dependiendo de tu estilo de cuestionario.

Estas opciones de puntuación se pueden encontrar en el panel de opciones redondas al editar una ronda.

---

## 📜 Instrucciones Pruebmaster

Puedes añadir un **texto de introducción de rondas** personalizado que aparecerá sólo en la [aplicación Principal](../quizmaster/001-introduction.md) al comienzo de la ronda. Utilice esto para informar al presentador o añadir un toque personal.

---

## 📎 Adjuntos

Mejora tu ronda con los medios mostrados en momentos específicos:

- **Antes de la ronda** — se muestra después de la animación de introducción redonda
- **Después de la ronda** — Mostrar después de la ronda outro
- **Antes de la ronda exterior** — Mostrar después de la última pregunta, justo antes de la outro
- **Durante la ronda exterior** — _(solo en audio)_ Se muestran las reproducciones mientras se muestran los rangos
- ...

📘 Para los tipos de archivos soportados y consejos de uso, vea la [guía de adjuntos](../editor/006-attachments.md).

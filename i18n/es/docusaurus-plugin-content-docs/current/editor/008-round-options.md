---
id: round-options
title: Opciones de ronda
---

# 🔄 Opciones de ronda

Cada ronda tiene un **tipo** específico. El valor predeterminado es **Trivia**, pero te invitamos a probar y experimentar con todos los tipos disponibles. Esta página explica los ajustes y archivos adjuntos que puedes configurar por ronda.

📘 Para una descripción detallada de todos los tipos de ronda, visita la [documentación de tipos de ronda](../round-types/000-round-types.md).

---

## 🔧 Configurar una ronda

Para configurar las opciones de una ronda, haz clic en el icono de engranaje en el panel de la ronda:

| ![Abrir opciones de ronda](/images/open-round-options.png) | ![Opciones de ronda](/images/round-options.png) |
| :--------------------------------------------------------: | :---------------------------------------------: |
|              _Abriendo las opciones de ronda_              |        _Panel de configuración de ronda_        |

---

## ⚙️ Opciones generales para la ronda

Las siguientes opciones están disponibles para la mayoría de los tipos de ronda:

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ Esto solo tiene efecto en tipos de ronda y pregunta donde el feedback normalmente se retrasaría, como preguntas abiertas o rondas relámpago.

📘 Consulta los [tipos de pregunta](../question-types/000-question-types.md) para más información sobre los tiempos y el comportamiento del feedback.

---

## 🏆 Opciones de puntuación {#scoring}

QuizWitz ofrece puntuación flexible para mantener todo justo y entretenido para todos los jugadores.

- **Time-based scoring** - Players earn more points for faster answers.
  - Para la mayoría de los tipos de pregunta, los puntos basados en tiempo disminuyen **continuamente por microsegundo**: cuanto más rápido respondas, más puntos obtienes.
  - Para **preguntas abiertas**, los puntos basados en tiempo se dividen en bloques. Por ejemplo: respuestas en el primer bloque (por ejemplo, primeros segundos) obtienen **100%** de la porción basada en tiempo, el siguiente bloque obtiene **80%**, y así sucesivamente. Esto ayuda a nivelar el terreno para quienes escriben más despacio.

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - Por defecto, el **75%** de los puntos son fijos (todos los que respondan correcto obtienen estos puntos, sin importar la velocidad).
  - Solo el **25%** restante está influenciado por la rapidez con la que responden los jugadores.

> 💡 Ajustar esta configuración te permite hacer las rondas más basadas en conocimiento o más basadas en rapidez, dependiendo de tu estilo de quiz.

Estas opciones de puntuación se encuentran en el panel de opciones de ronda al editar una ronda.

---

## 📜 Instrucciones para el quizmaster

Puedes añadir un **texto de introducción de la ronda** personalizado que aparecerá solo en la [Quizmaster App](../quizmaster/001-introduction.md) al inicio de la ronda. Usa esto para informar al quizmaster o añadir un toque personal.

---

## 📎 Archivos adjuntos

Mejora tu ronda con archivos adjuntos que se muestran en momentos específicos:

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- ...

📘 Para tipos de archivo soportados y consejos de uso, consulta la [guía de archivos adjuntos](../editor/006-attachments.md).

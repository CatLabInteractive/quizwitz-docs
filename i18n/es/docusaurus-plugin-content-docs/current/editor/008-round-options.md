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

- **Mostrar solo _X_ preguntas** — Limita la ronda a un número específico de preguntas
- **Orden aleatorio de preguntas** — Mezcla el orden de las preguntas dentro de la ronda
- **Mostrar introducción de ronda** — Muestra un título animado antes de que comience la ronda
- **Mostrar final de ronda (puntuación provisional)** — Revela las clasificaciones al final de la ronda
- **Agrupar todo el feedback en una única pantalla** — Recoge el feedback de las preguntas en un solo bloque después de que termine la ronda
- **Mostrar todo el feedback de las preguntas al final de la ronda** — Retrasa el feedback hasta que termine la ronda
- **Forzar feedback después de cada pregunta individual** — Garantiza feedback inmediato
  > ⚠️ Esto solo tiene efecto en tipos de ronda y pregunta donde el feedback normalmente se retrasaría, como preguntas abiertas o rondas relámpago.

📘 Consulta los [tipos de pregunta](../question-types/000-question-types.md) para más información sobre los tiempos y el comportamiento del feedback.

---

## 🏆 Opciones de puntuación {#scoring}

QuizWitz ofrece puntuación flexible para mantener todo justo y entretenido para todos los jugadores.

- **Puntuación basada en tiempo** — Los jugadores obtienen más puntos por respuestas más rápidas.
  - Para la mayoría de los tipos de pregunta, los puntos basados en tiempo disminuyen **continuamente por microsegundo**: cuanto más rápido respondas, más puntos obtienes.
  - Para **preguntas abiertas**, los puntos basados en tiempo se dividen en bloques. Por ejemplo: respuestas en el primer bloque (por ejemplo, primeros segundos) obtienen **100%** de la porción basada en tiempo, el siguiente bloque obtiene **80%**, y así sucesivamente. Esto ayuda a nivelar el terreno para quienes escriben más despacio.

- **Porcentaje fijo de puntos en la puntuación basada en tiempo** — Tú controlas cuánto de la puntuación total está influenciado por la rapidez.
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

- **Antes de la ronda** — Se muestra después de la animación de introducción de la ronda
- **Después de la ronda** — Se muestra después de la conclusión de la ronda
- **Antes del final de ronda** — Se muestra después de la última pregunta, justo antes del final
- **Durante el final de ronda** — _(solo audio)_ Se reproduce mientras se muestran las clasificaciones
- ...

📘 Para tipos de archivo soportados y consejos de uso, consulta la [guía de archivos adjuntos](../editor/006-attachments.md).

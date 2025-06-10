---
id: round-options
title: Opciones de ronda
---

# 🔄 Opciones de ronda

Cada ronda tiene un **tipo** específico. El predeterminado es **Elección múltiple (Trivia)**, pero siéntete libre de probar y experimentar con todos los tipos disponibles. Esta página explica la configuración y los adjuntos que puedes configurar por ronda.

📘 Para una descripción detallada de todos los tipos de ronda, visita la [documentación de tipos de ronda](../round-types/000-round-types.md).

---

## 🔧 Configurando una ronda

Para configurar las opciones de una ronda, haz clic en el icono de engranaje en el panel de la ronda:

| ![Abrir opciones de ronda](/images/open-round-options.png) | ![Opciones de ronda](/images/round-options.png) |
| :--------------------------------------------------------: | :---------------------------------------------: |
|                   _Opening round options_                  |           _Round configuration panel_           |

---

## ⚙️ Opciones generales de ronda

Las siguientes opciones están disponibles para la mayoría de los tipos de ronda:

- **Mostrar solo _X_ preguntas** — Limita la ronda a un número específico de preguntas
- **Orden aleatorio de preguntas** — Baraja el orden de las preguntas dentro de la ronda
- **Mostrar introducción de la ronda** — Muestra un título animado antes de que comience la ronda
- **Mostrar conclusión de la ronda (puntuación provisional)** — Revela el ranking al final de la ronda
- **Agrupar toda la retroalimentación en una sola pantalla** — Recolecta la retroalimentación de las preguntas en un solo bloque después de que termina la ronda
- **Mostrar toda la retroalimentación de preguntas al final de la ronda** — Retrasa la retroalimentación de preguntas hasta que la ronda termine
- **Forzar retroalimentación después de cada pregunta individual** — Asegura retroalimentación inmediata
  > ⚠️ Esto solo tiene efecto en tipos de ronda y pregunta donde la retroalimentación se retrasaría de otra forma, como preguntas abiertas o rondas rápidas.

📘 Mira los [tipos de pregunta](../question-types/000-question-types.md) para más información sobre el tiempo y comportamiento de la retroalimentación.

---

## 🏆 Opciones de puntuación {#scoring}

QuizWitz ofrece una puntuación flexible para mantener todo justo y entretenido para todos los jugadores.

- **Puntuación basada en tiempo** — Los jugadores ganan más puntos por respuestas rápidas.
  - Para la mayoría de los tipos de pregunta, los puntos basados en tiempo disminuyen **continuamente por microsegundo**: mientras más rápido respondas, más puntos acumulas.
  - Solo para **preguntas abiertas**, los puntos basados en tiempo se dividen en bloques. Por ejemplo: las respuestas en el primer bloque (ej., primeros segundos) ganan el **100%** de la parte basada en tiempo, el siguiente bloque gana el **80%**, y así sucesivamente. Esto ayuda a nivelar el campo para los que escriben más lento.

- **Porcentaje fijo de puntos en la puntuación basada en tiempo** — Controlas cuánto de la puntuación total está influenciada por la velocidad.
  - Por defecto, el **75%** de los puntos son fijos (todos los que responden correctamente obtienen estos puntos, sin importar la velocidad).
  - Solo el **25%** restante está influenciado por qué tan rápido responden los jugadores.

> 💡 Ajustar esta configuración te permite hacer las rondas más basadas en conocimiento o más basadas en velocidad, según tu estilo de quiz.

Estas opciones de puntuación están disponibles en el panel de opciones de ronda al editar una ronda.

---

## 📜 Instrucciones para quizmaster

Puedes añadir un **texto de introducción personalizado para la ronda** que aparecerá solo en la [app Quizmaster](../quizmaster/001-introduction.md) al inicio de la ronda. Úsalo para informar al presentador o añadir un toque personal.

---

## 📎 Adjuntos

Mejora tu ronda con medios que se muestran en momentos específicos:

- **Antes de la ronda** — Mostrado después de la animación de introducción de la ronda
- **Después de la ronda** — Mostrado después de la conclusión de la ronda
- **Antes de la conclusión de la ronda** — Mostrado después de la última pregunta, justo antes de la conclusión
- **During round outro** — _(audio only)_ Plays while rankings are displayed
- ...

📘 Para tipos de archivos compatibles y consejos de uso, consulta la [guía de adjuntos](../editor/006-attachments.md).

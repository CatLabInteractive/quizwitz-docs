---
id: list-question
title: Pregunta de lista
---

# 📝 Pregunta de lista

Una **pregunta de lista** pide a los jugadores que proporcionen varias respuestas correctas de una lista más amplia — perfecta para indicaciones como “Enumera los primeros 5 presidentes de los Estados Unidos de América” o “Nombra tres elementos de la tabla periódica.”

---

![Ejemplo: Pregunta de lista con presidentes de EE.UU.](/images/question-modes/list-question/list-question.png)

---

## 📝 Cómo funciona

- **Pregunta:** Indica claramente lo que quieres que los jugadores enumeren.
- **Elementos de la lista:** Ingresa todas las respuestas correctas posibles.
  - Marca algunos como **‘Dado’** para mostrarlos como ejemplos en pantalla; estos NO necesitan ser respondidos.
  - El orden **no** importa — los jugadores pueden ingresar respuestas correctas en cualquier orden.
- **Entrada del jugador:** Los jugadores deben proporcionar un número determinado de respuestas (por ejemplo, entre 1 y 5). Se otorgan puntos por cada respuesta correcta que entreguen.
- **Adjuntos:** Añade imágenes, audio o video para contexto. Completa la atribución si vas a publicar.

---

## ⚙️ Configuración ampliada

- **Respuestas mínimas y máximas:** Define cuántas respuestas debe dar un jugador.
- **Puntos por respuesta:** Se pueden otorgar puntos por cada respuesta correcta o solo cuando se cumple el número mínimo.
- **Opciones dadas:** Úsalas como ejemplos en la pregunta.
- **Corrección:**
  - **Forzar corrección automática:** Cuando está activado, QuizWitz revisa todas las respuestas automáticamente (aceptando pequeños errores tipográficos y variaciones). No se necesita jurado.
  - **Revisión manual:** Cuando no está activado, cada respuesta debe ser revisada por la [aplicación de jurado](../quizmaster/004-jury-app.md).

---

## 🏆 Puntuación

- **Puntos por respuesta correcta:** Los jugadores ganan puntos por cada respuesta correcta.
- **Time-based scoring** (if enabled):\
  Follows the **open question rules** for fairness:
  - Los puntos disponibles se dividen en bloques de tiempo (no por milisegundo).\
    The available points are split into blocks of time (not by the millisecond).\
    For example: full points in the first block, 80% in the next, and so on.
  - **Solo el 25%** de los puntos dependen de la velocidad.\
    **Only 25%** of the points depend on speed.\
    The other **75%** is fixed — so even slower typers get most of the points if they answer correctly.
  - Esto reduce la penalización por velocidad de escritura y hace que la puntuación sea más justa para todos.

Para más detalles, consulta las [opciones de puntuación de la ronda](../editor/008-round-options.md#scoring).

---

## 💡 Consejos para preguntas de lista

- **Sé específico:** Define claramente las respuestas válidas.
- **Muestra ejemplos:** Usa la función ‘Dado’.
- **Enumera variantes:** Incluye ortografías/variaciones comunes.
- **Reduce el trabajo del jurado:** Usa la corrección automática si es posible.

---

Para más información, consulta la [documentación de la aplicación de jurado](../quizmaster/004-jury-app.md).

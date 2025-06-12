---
id: quizmaster-app
title: App master
---

# 🎛️ Utilizando la aplicación master

Como maestro, tienes el control total del juego de Prueba Witz Live. Lo más importante es saber esto:

> El juego **solo progresa cuando haces click** — nada se mueve en la pantalla principal hasta que se lo digas.

Esto te da un control total sobre el ritmo y el tiempo, pero también significa que harás un montón de tapping. Caminemos por cómo funciona la aplicación.

---

## 🔁 El flujo del cuestionario

La estructura del cuestionario sigue cómo se construyó en el editor, pero la mayoría de los cuestionarios se moverán a través de las siguientes etapas:

---

### 🎬 Introducción redonda

Antes de que comience cada ronda, verás una pantalla de introducción redonda.

- Controla cuando se reproduce la **animación de entrada redonda**.
- Haga clic en **‘Empezar’** para comenzar la ronda y moverse a la primera pregunta.

---

### ❓ Hacer una pregunta

Cada pregunta tiene su propia pantalla en la aplicación de prueba:

![Aplicación Principal - Iniciar pregunta](/images/quizmaster-app-start-question.png)

Verás:

- **Número de pregunta** — por ejemplo, `1.1` significa la primera pregunta de la primera ronda
- **Tipo de pregunta** — como opción múltiple, con modificadores de puntuación relevantes
- **Versión larga de la pregunta** — para que puedas leer en voz alta
- **Información de la pregunta** - incluyendo la duración del temporizador y los puntos disponibles
- **Pregunta corta** — la versión que se muestra en la pantalla grande
- **Botón Iniciar pregunta** — inicia inmediatamente el temporizador
- **Respuestas posibles** — mostradas en el orden correcto (por opción múltiple)

La pregunta permanecerá visible en tu aplicación hasta que sea:

- Todos los jugadores han respondido
- Se acaba el temporizador

> 🔎 Para más información sobre los tipos de preguntas y redondas, consulta la **Guía del diseñador**.

---

### ✅ Comentarios de preguntas

Una vez que termina una pregunta, se revela la respuesta correcta. Lo que ves depende del tipo de pregunta — este ejemplo muestra una pantalla de resultado de opción múltiple:

![Aplicación maestra - Comentarios de preguntas](/images/quizmaster-app-question-feedback.png)

Incluye:

- **Número de pregunta**
- **Texto corto de la pregunta**
- **Respuesta correcta**
- **Spread de respuesta** — en números y porcentajes
- **Comentarios largos** — información extra para leer en voz alta
- **Botón de continuación** — avanza a la siguiente pregunta
- **Las 100 respuestas más rápidas** — se muestran en la parte inferior de la pantalla

---

### 📊 Round outro

Cuando una ronda termine, verás una pantalla de **Ronda de Tro** que revela la clasificación hasta ahora.

![Quizmaster app - round outro](/images/quizmaster-app-round-outro.png)\
![QuizWitz - round outro big screen](/images/round-outro.png)

En tu aplicación:

- Verás a los **top 100 jugadores**, y puedes desplazarte a través de ellos
- Toca la posición de un jugador para resaltarlos en la pantalla grande
- De la ronda 2 en adelante, también verás cuántos lugares se ha movido cada jugador:
    - **Verde** = movido arriba
    - **Rojo** = se movió hacia abajo
    - **Blanco** = sin cambios

Los jugadores verán **su propia posición** en su dispositivo durante el exterior.

---

### 🏆 El final del cuestionario

Al final del cuestionario, es el momento de que un **grupo ganador revele la fiesta** — completo con confetti y emojis de jugador volando por toda la pantalla.

![Prueba Witz - pantalla grande del juego](/images/game-outro.png)

- La configuración predeterminada muestra a los **mejores 12 jugadores**
- Puedes personalizar cuántos jugadores aparecen en los **ajustes avanzados del juego**

> 🎉 El emoji que tus jugadores elijan bailará alrededor de la pantalla, incluso si eligieron la turba sonriente.

---

Eso es todo lo que necesitas saber para ejecutar tu cuestionario con la aplicación del buffer. ¡Ahora estás completamente equipado para liderar tu evento con confianza y estilo!

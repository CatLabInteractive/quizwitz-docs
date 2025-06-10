---
id: livestream-tutorial
title: Quiz en transmisión en vivo
---

# 📺 Organizando un quiz en transmisión en vivo

Con QuizWitz Live, es fácil organizar un quiz totalmente interactivo en plataformas como **Twitch**, **YouTube Live** o **Facebook Live**, incluso para grandes audiencias. Esta guía te lleva paso a paso por la configuración, el manejo del retraso y las mejores prácticas de presentación.

> 🧭 Si eres nuevo en la app Quizmaster, comienza con la [**guía de inicio de Quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 La configuración del quizmaster

El quizmaster es el corazón de tu evento. Controla el ritmo, presenta las preguntas y mantiene a tu audiencia interesada.

Utiliza la **app Quizmaster** para dirigir el juego. Inicia QuizWitz Live desde el editor de quiz haciendo clic en **Start QuizWitz Live**.

> 💡 La app Quizmaster es una **web app** — no necesita instalación. Solo ve a [**quizwitz.tv**](https://quizwitz.tv) en tu dispositivo de presentación y escribe el **Master Code**.

Recomendamos usar una **tablet o smartphone** para que el quizmaster pueda moverse libremente durante el show.

---

## 🧩 Eligiendo el modo de juego adecuado

Al iniciar QuizWitz Live, se te pedirá que elijas un modo:

- **Modo regular** — Los jugadores o equipos reciben un código único. Útil para eventos con equipos pre-registrados.
- **Modo ad hoc** — Un código de juego compartido para todos los jugadores. Ideal para transmisiones en vivo con registro abierto.

> Para transmisiones en vivo, siempre elige **modo ad hoc** y haz clic en **Start ad-hoc game**.

Una vez que el quiz cargue, la app Quizmaster mostrará:

- **Master Code** — para el quizmaster
- **Jury Code** — para revisar preguntas abiertas
- **Regie Code** — para controlar visuales/audio
- **Game Code** — para que los jugadores se unan

Tu pantalla del juego ahora muestra la **pantalla de conexión**, que es lo que debes transmitir a tu audiencia.

---

## 🎥 Transmitiendo en Twitch (u otros)

Para transmitir tu quiz, usa software de transmisión. Recomendamos:

- **OBS Studio** (Open Broadcast Software) — gratuito y potente
- Alternativas: Streamlabs, vMix o opciones nativas para Zoom/Meet

Si usas **software de reuniones** como Zoom o Google Meet:

- Simplemente comparte tu pantalla
- Presiona **Start** en la app Quizmaster
- Los jugadores pueden participar casi en tiempo real

Para **Twitch, YouTube Live o Facebook Live**, experimentarás un **retraso de transmisión** (también llamado retraso por transcodificación).

> ✅ Recomendamos **Twitch** para mejores resultados — ofrece rendimiento de baja latencia y buena sincronización con los espectadores.

---

## ⏱️ Ajustar el retraso para los jugadores de QuizWitz

Para compensar el retraso de la transmisión, usa el **retraso de interacción del jugador** en la app Jury.

Aquí te explicamos cómo:

1. Inicia la vista previa de tu transmisión — no es necesario salir en vivo aún
2. Abre la **app Jury** ingresando tu Jury Code en [**catlab.tv**](https://catlab.tv)
3. Ve a **Control del juego**
4. Abre tu transmisión en otra ventana, con sonido
5. Usa un cronómetro
6. En la app Jury, presiona el botón **Buzzer** y comienza a medir el tiempo
7. Cuando escuches el buzzer en la transmisión, detén el cronómetro
8. Redondea el retraso (en segundos) e ingrésalo en el campo **Retraso de interacción del jugador**
9. Haz clic en **Confirmar ajuste**

> 🎯 Es mejor sobreestimar un poco el retraso. Así te aseguras de que los jugadores vean las opciones de respuesta **después de** que hayas terminado de leer la pregunta.

---

## 🚀 Salir en vivo

Una vez que el retraso esté configurado y tus jugadores estén conectados:

- Inicia tu transmisión en Twitch
- Usa la app Quizmaster para **lanzar el quiz**
- QuizWitz manejará el tiempo en segundo plano — no necesitas pausar entre preguntas

---

## 💡 Consejos para presentaciones en transmisión en vivo

- **No dejes que el quizmaster vea la transmisión con retraso** — solo debe usar la app Quizmaster en vivo para evitar pausas incómodas.

- Para interactuar con la audiencia, monitorea **comentarios en vivo** en una pantalla separada — no el video.

- ¿Quieres cambiar automáticamente las escenas de OBS? Use:\
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- ¿Quieres activar dispositivos MIDI durante el juego? Try:\
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- ¿Buscas más herramientas? Visita [**regie.catlab.eu**](https://regie.catlab.eu) — un centro central con utilidades adicionales para automatización, cambio de escenas, efectos y más.

> Todas las herramientas requieren tu **Regie Code** de la app Quizmaster.

---

¡Estás listo para salir en vivo! Twitch ofrece una plataforma fluida y receptiva para organizar eventos de quiz a gran escala. Combina eso con QuizWitz Live — y tu noche de quiz estará lista para impresionar.

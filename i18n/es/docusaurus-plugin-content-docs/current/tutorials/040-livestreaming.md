---
id: livestream-tutorial
title: Quiz en directo
---

# 📺 Organizando un quiz en directo

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Esta guía te lleva paso a paso por la configuración, manejo del retraso y mejores prácticas de presentación.

> 🧭 Si eres nuevo en la Quizmaster App, empieza con la [**Guía de inicio del quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 La configuración del quizmaster

El quizmaster es el corazón de tu evento. Controla el ritmo, presenta las preguntas y mantiene a tu audiencia comprometida.

Usa la **Quizmaster App** para ejecutar el juego. Lanza QuizWitz Live desde el editor de quiz haciendo clic en **Iniciar QuizWitz Live**.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Solo ve a [**quizwitz.tv**](https://quizwitz.tv) en tu dispositivo de quizmaster e introduce el **código de quizmaster**.

Recomendamos usar una **tablet o smartphone** para que el quizmaster pueda moverse libremente durante el show.

---

## 🧩 Elegir el modo de juego correcto

Cuando inicies QuizWitz Live, se te pedirá que elijas cómo se conectan los jugadores:

- **Team codes** - Players or teams each receive a unique code. Útil para eventos de equipos pre-registrados.
- **Single game code** - One shared game code for all players. Lo mejor para directos con registro abierto.

> Para las transmisiones en vivo, elige siempre el **Código de juego compartido** y haz clic en _Iniciar juego_.

Una vez que se cargue el quiz, la Quizmaster App mostrará lo siguiente:

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

Tu pantalla de juego ahora muestra la **pantalla de conexión**, que es lo que debes transmitir a tu audiencia.

---

## 🎥 Transmitiendo en Twitch (u otros)

Para transmitir tu quiz, usa software de transmisión. Recomendamos:

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Alternativas: Streamlabs, vMix, o opciones nativas para Zoom/Meet

Si usas **software de reuniones** como Zoom o Google Meet:

- Simplemente comparte tu pantalla
- Presiona **Inicio** en la Quizmaster App
- Los jugadores pueden participar casi en tiempo real

Para **Twitch, YouTube Live o Facebook Live**, experimentarás un **retraso de transmisión** (también llamado retraso de transcodificación).

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Configurando el retraso del jugador en QuizWitz

Para compensar el retraso de la transmisión, utiliza el **retraso de interacción del jugador** en la app del jurado.

Así es como:

1. Start your stream preview - no need to go live yet
2. Abre la **app del jurado** introduciendo tu código del jurado en [**quizwitz.tv**](https://quizwitz.tv)
3. Ve a **Control del juego**
4. Abre tu livestream en otra ventana, con sonido
5. Usa un cronómetro
6. En la app del jurado, pulsa el botón **Buzzer** y empieza a cronometrar
7. Cuando escuches el Buzzer en la transmisión, para el cronómetro
8. Redondea el retraso (en segundos) e introdúcelo en el campo **Retraso de interacción del jugador**
9. Haz clic en **Confirmar configuración**

> 🎯 Es mejor sobreestimar ligeramente el retraso. Esto asegura que los jugadores vean las opciones de respuesta sólo **después** de que hayas terminado de leer la pregunta.

---

## 🚀 Empezando en vivo

Una vez que el retraso esté configurado y tus jugadores conectados:

- Inicia tu transmisión en Twitch
- Usa la Quizmaster App para **iniciar el quiz**
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Consejos para la presentación en directo

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- ¿Quieres cambiar escenas de OBS automáticamente? Usa:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- ¿Quieres activar dispositivos MIDI durante el juego? Prueba:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- ¿Buscas más herramientas? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Todas las herramientas requieren tu **código regie** de la Quizmaster App.

---

¡Estás listo/a para salir en vivo! Twitch ofrece una plataforma fluida y receptiva para organizar eventos de quiz a gran escala. Combine that with QuizWitz Live - and your quiz night is set to impress.

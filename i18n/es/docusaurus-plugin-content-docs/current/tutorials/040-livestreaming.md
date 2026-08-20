---
id: livestream-tutorial
title: Quiz en directo
---

# 📺 Organizando un quiz en directo

Con QuizWitz Live, es fácil organizar un quiz totalmente interactivo en directo en plataformas como **Twitch**, **YouTube Live** o **Facebook Live** — incluso para grandes audiencias. Esta guía te lleva paso a paso por la configuración, manejo del retraso y mejores prácticas de presentación.

> 🧭 Si eres nuevo en la Quizmaster App, empieza con la [**Guía de inicio del quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 La configuración del quizmaster

El quizmaster es el corazón de tu evento. Controla el ritmo, presenta las preguntas y mantiene a tu audiencia comprometida.

Usa la **Quizmaster App** para ejecutar el juego. Lanza QuizWitz Live desde el editor de quiz haciendo clic en **Iniciar QuizWitz Live**.

> 💡 La Quizmaster App es una **aplicación web** — no hay instalación. Solo ve a [**quizwitz.tv**](https://quizwitz.tv) en tu dispositivo de quizmaster e introduce el **código de quizmaster**.

Recomendamos usar una **tablet o smartphone** para que el quizmaster pueda moverse libremente durante el show.

---

## 🧩 Elegir el modo de juego correcto

Cuando inicies QuizWitz Live, se te pedirá que elijas cómo se conectan los jugadores:

- **Códigos de equipo** — Los jugadores o equipos reciben cada uno un código único. Útil para eventos de equipos pre-registrados.
- **Código de juego compartido** — Un código compartido para todos los jugadores. Lo mejor para directos con registro abierto.

> Para las transmisiones en vivo, elige siempre el **Código de juego compartido** y haz clic en _Iniciar juego_.

Una vez que se cargue el quiz, la Quizmaster App mostrará lo siguiente:

- **Código de quizmaster** — para el quizmaster
- **Código del jurado** — para revisar preguntas abiertas
- **Código regie** — para controlar visuales/audio
- **Código de juego** — para que los jugadores se unan

Tu pantalla de juego ahora muestra la **pantalla de conexión**, que es lo que debes transmitir a tu audiencia.

---

## 🎥 Transmitiendo en Twitch (u otros)

Para transmitir tu quiz, usa software de transmisión. Recomendamos:

- **OBS Studio** (Open Broadcast Software) — gratis y potente
- Alternativas: Streamlabs, vMix, o opciones nativas para Zoom/Meet

Si usas **software de reuniones** como Zoom o Google Meet:

- Simplemente comparte tu pantalla
- Presiona **Inicio** en la Quizmaster App
- Los jugadores pueden participar casi en tiempo real

Para **Twitch, YouTube Live o Facebook Live**, experimentarás un **retraso de transmisión** (también llamado retraso de transcodificación).

> ✅ Recomendamos **Twitch** para mejores resultados — ofrece consistentemente bajo retardo y buena sincronización con los espectadores.

---

## ⏱️ Configurando el retraso del jugador en QuizWitz

Para compensar el retraso de la transmisión, utiliza el **retraso de interacción del jugador** en la app del jurado.

Así es como:

1. Inicia la vista previa de tu transmisión — no necesitas ir en vivo aún
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
- QuizWitz manejará el tiempo en segundo plano — no es necesario pausar entre preguntas

---

## 💡 Consejos para la presentación en directo

- **No dejes que el quizmaster vea la transmisión retrasada** — debe usar solo la Quizmaster App en directo para evitar pausas incómodas.

- Para interactuar con la audiencia, monitorea los **comentarios en vivo** en una pantalla separada — no el flujo de vídeo.

- ¿Quieres cambiar escenas de OBS automáticamente? Usa:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- ¿Quieres activar dispositivos MIDI durante el juego? Prueba:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- ¿Buscas más herramientas? Visita [**regie.catlab.eu**](https://regie.catlab.eu) — un centro con utilidades adicionales para automatización, cambio de escenas, efectos y más.

> Todas las herramientas requieren tu **código regie** de la Quizmaster App.

---

¡Estás listo/a para salir en vivo! Twitch ofrece una plataforma fluida y receptiva para organizar eventos de quiz a gran escala. Combina eso con QuizWitz Live — y tu noche de quiz estará lista para impresionar.

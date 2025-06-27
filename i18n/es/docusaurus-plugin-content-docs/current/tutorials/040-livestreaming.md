---
id: livestream-tutorial
title: Cuestionario en directo
---

# 📺 Organizando un cuestionario en directo

Con QuizWitz Live, es fácil organizar un cuestionario totalmente interactivo en directo en plataformas como **Twitch**, **YouTube Live** o **Facebook Live** — incluso para grandes audiencias. Esta guía te lleva paso a paso por la configuración, manejo del retraso y mejores prácticas de presentación.

> 🧭 Si eres nuevo/a en la app Quizmaster, comienza con la [**guía de inicio de Quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 La configuración del Quizmaster

El quizmaster es el corazón de tu evento. Controla el ritmo, presenta las preguntas y mantiene a tu audiencia comprometida.

Usa la **app Quizmaster** para dirigir el juego. Lanza QuizWitz Live desde el editor de cuestionarios haciendo clic en **Iniciar QuizWitz Live**.

> 💡 La app Quizmaster es una **app web** — no requiere instalación. Sólo accede a [**quizwitz.tv**](https://quizwitz.tv) en tu dispositivo de presentación e introduce el **Código Maestro**.

Recomendamos usar una **tablet o smartphone** para que el quizmaster pueda moverse libremente durante el show.

---

## 🧩 Elegir el modo de juego correcto

Al iniciar QuizWitz Live, se te pedirá elegir un modo:

- **Modo regular** — Los jugadores o equipos reciben un código único. Útil para eventos de equipos pre-registrados.
- **Modo ad-hoc** — Un único Código de Juego compartido para todos los jugadores. Lo mejor para directos con registro abierto.

> Para los directos, siempre elige **Modo ad-hoc** y haz clic en **Iniciar juego ad-hoc**.

Una vez que el cuestionario carga, la app Quizmaster mostrará:

- **Código Maestro** — para el quizmaster
- **Código de Jurado** — para revisar preguntas abiertas
- **Código Regie** — para controlar visuales/audio
- **Código de Juego** — para que los jugadores se unan

Tu pantalla de juego ahora muestra la **pantalla Conectar**, que es lo que debes transmitir a tu audiencia.

---

## 🎥 Transmitiendo en Twitch (u otros)

Para transmitir tu cuestionario, usa software de transmisión. Recomendamos:

- **OBS Studio** (Open Broadcast Software) — gratis y potente
- Alternativas: Streamlabs, vMix, o opciones nativas para Zoom/Meet

Si usas **software de reuniones** como Zoom o Google Meet:

- Simplemente comparte tu pantalla
- Pulsa **Iniciar** en la app Quizmaster
- Los jugadores pueden participar casi en tiempo real

Para **Twitch, YouTube Live o Facebook Live**, experimentarás un **retraso de transmisión** (también llamado retraso de transcodificación).

> ✅ Recomendamos **Twitch** para mejores resultados — ofrece consistentemente bajo retardo y buena sincronización con los espectadores.

---

## ⏱️ Configurando el retraso del jugador en QuizWitz

Para compensar el retraso de la transmisión, usa el **retraso de interacción del jugador** en la app Jurado.

Así es cómo:

1. Inicia la vista previa de tu transmisión — no necesitas ir en vivo aún
2. Abre la **app Jurado** ingresando tu Código de Jurado en [**catlab.tv**](https://catlab.tv)
3. Ve a **Control del juego**
4. Abre tu livestream en otra ventana, con sonido
5. Usa un cronómetro
6. En la app Jurado, pulsa el botón **Zumbador** y comienza a medir el tiempo
7. Cuando escuches el zumbador en la transmisión, para el cronómetro
8. Redondea el retraso (en segundos) e introdúcelo en el campo **Retraso de interacción del jugador**
9. Haz clic en **Confirmar configuración**

> 🎯 Es mejor sobreestimar ligeramente el retraso. Esto asegura que los jugadores vean las opciones de respuesta sólo **después** de que hayas terminado de leer la pregunta.

---

## 🚀 Empezando en vivo

Una vez que el retraso esté configurado y tus jugadores conectados:

- Inicia tu transmisión en Twitch
- Usa la app Quizmaster para **lanzar el cuestionario**
- QuizWitz manejará el tiempo en segundo plano — no es necesario pausar entre preguntas

---

## 💡 Consejos para la presentación en directo

- **No permitas que el quizmaster vea la transmisión con retraso** — debe usar sólo la app Quizmaster en tiempo real para evitar pausas incómodas.

- Para interactuar con la audiencia, monitorea los **comentarios en vivo** en una pantalla separada — no el flujo de vídeo.

- ¿Quieres cambiar escenas de OBS automáticamente? Usa:\
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- ¿Quieres activar dispositivos MIDI durante el juego? Prueba:\
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- ¿Buscas más herramientas? Visita [**regie.catlab.eu**](https://regie.catlab.eu) — un centro con utilidades adicionales para automatización, cambio de escenas, efectos y más.

> Todas las herramientas necesitan tu **Código Regie** de la app Quizmaster.

---

¡Estás listo/a para salir en vivo! Twitch ofrece una plataforma fluida y receptiva para organizar eventos de cuestionarios a gran escala. Combina eso con QuizWitz Live — y tu noche de cuestionarios estará lista para impresionar.

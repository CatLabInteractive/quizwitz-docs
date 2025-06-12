---
id: livestream-tutorial
title: Cuestionario de Livestream
---

# 📺 Organizar un cuestionario en vivo

Witz Live, es fácil albergar un cuestionario en vivo totalmente interactivo en plataformas como **Twitch**, **YouTube Live**, o **Facebook Live** — incluso para grandes audiencias. Esta guía le guiará a través de la configuración, el manejo de demoras y las mejores prácticas de presentación.

> 🧭 Si eres nuevo en la aplicación Principal, empieza con la [**Guía de inicio del Prensa**](../quizmaster/002-startup.md).

---

## :micrófono: La configuración del test maestro

El experto es el corazón de su evento. Controlan el ritmo, presentan las preguntas y mantienen a tu audiencia comprometida.

Usa la **aplicación Pruebmaster** para ejecutar el juego. Inicie la prueba de Witz Live desde el editor de pruebas haciendo clic en **Iniciar prueba Witz Live**.

> 💡 La aplicación Femaster es una **aplicación web** — no hay instalación. Solo ve a [**quizwitz.tv**](https://quizwitz.tv) en tu dispositivo de presentación e introduce el **código maestro**.

Recomendamos usar un **tableta o smartphone** para que el cuestionario pueda moverse libremente durante el espectáculo.

---

## 🧩 Elegir el modo de juego correcto

Al iniciar Witz Live, se te pedirá que elijas un modo:

- **Modo normal** — Los jugadores o equipos reciben cada uno un código único. Útil para eventos de equipo pre-registrados.
- **Modo Ad-hoc** — Un código de juego compartido para todos los jugadores. Lo mejor para livestreams con registro abierto.

> Para imágenes en vivo, elige siempre el **modo Ad-hoc** y haz clic en **Inicio de juego ad-hoc**.

Una vez que se cargue el cuestionario, se mostrará la aplicación del prospecto:

- **Código maestro** — para el cuestionario
- **Código del Jurado** — para revisar preguntas abiertas
- **Código de región** — para controlar visuales/audio
- **Código de Juego** — para que los jugadores se unan

La pantalla de tu juego ahora muestra la **pantalla de conexión**, que es lo que deberías transmitir a tu público.

---

## :mo.U_camera: Transmitiendo a Twitch (o a otros)

Para transmitir su cuestionario, utilice el software de radiodifusión. Recomendamos:

- **OBS Studio** (Open Broadcast Software) — libre y potente
- Alternativas: Streamlabs, vMix, o opciones nativas para Zoom/Meet

Si estás usando **software de reuniones** como Zoom, Google Union:

- Simplemente comparte tu pantalla
- Presiona **Inicio** en la aplicación Principal
- Los jugadores pueden participar en tiempo real

Para **Twitch, YouTube Live, o Facebook Live**, experimentarás un **retraso en la transcodificación** (también conocido como delay).

> ✅ Recomendamos **Twitch** para mejores resultados — constantemente ofrece bajo rendimiento de latencia y buena sincronización del espectador.

---

## ⏱️ Ajuste la demora del Reproductor Witz

Para compensar el retraso del stream, utilice el **retraso de interacción del jugador** en la aplicación Jurado.

Así es:

1. Iniciar la vista previa de su stream — no hay necesidad de ir en vivo aún
2. Abre la **aplicación del Jurado** ingresando tu Código del Jurado en [**catlab.tv**](https://catlab.tv)
3. Ir al **control de juegos**
4. Abre tu livestream en otra ventana, con sonido
5. Usa un cronómetro
6. En la aplicación del Jurado, pulse el botón **Buzzer** y comience a sincronizar
7. Cuando oigas el zumbido en el live stream, detén el cronómetro
8. Redondea el retraso (en segundos) e introdúzcalo en el campo **Retraso de interacción del jugador**
9. Haga clic en **Confirmar configuración**

> 🎯 Es mejor sobreestimar ligeramente el retraso. Esto asegura que los jugadores vean las opciones de respuesta sólo **después** de que hayas terminado de leer la pregunta.

---

## 🚀 Viendo

Una vez establecido el retraso y tus jugadores están conectados:

- Inicia tu flujo de Twitch
- Usa la aplicación Principal para **iniciar el cuestionario**
- Witz manejará el tiempo en segundo plano — no hay necesidad de pausar entre preguntas

---

## 💡 Consejos de presentación de Livestream

- **No dejes que el cuestionario mire el flujo retrasado** — deberían usar sólo la aplicación de prueba en vivo para evitar pausas incómodas.

- Para interactuar con el público, monitorea **comentarios en vivo** en una pantalla separada — no la fuente de vídeo.

- ¿Quieres cambiar automáticamente las escenas OBS? Uso:\
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- ¿Quieres activar dispositivos MIDI durante el juego? Prueba:\
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- ¿Buscando más herramientas? Visita [**regie.catlab.eu**](https://regie.catlab.eu) — un centro central con utilidades adicionales para automatización, cambio de escena, efectos y más.

> Todas las herramientas requieren tu **Código Región** de la aplicación Prueba.

---

¡Estás listo para ir en directo! Twitch ofrece una plataforma suave y receptiva para albergar eventos de prueba a gran escala. Combine eso con la prueba Witz Live — y su noche de prueba será impresionante.

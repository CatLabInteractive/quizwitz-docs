---
id: livestream-tutorial
title: Élő közvetítéses kvíz
---

# 📺 Élő közvetítéses kvíz vezetése

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Ez az útmutató végigvezet a beállításon, a késleltetés kezelésén és a prezentációs bevált gyakorlatokon.

> 🧭 Ha új vagy a Quizmaster appban, kezdd a [**quizmaster indítási útmutatóval**](../quizmaster/002-startup.md).

---

## 🎤 A quizmaster beállítása

A quizmaster az eseményed szíve. Ő irányítja a tempót, bemutatja a kérdéseket, és leköti a közönségedet.

A játék levezetéséhez használd a **Quizmaster appot**. Indítsd el a QuizWitz Live-ot a kvízszerkesztőből a **QuizWitz Live indítása** gombra kattintva.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Csak menj a [**quizwitz.tv**](https://quizwitz.tv) oldalra a quizmaster eszközödön, és írd be a **quizmaster kódot**.

Javasoljuk, hogy **tablet vagy okostelefon** használj, így a quizmaster szabadon mozoghat a műsor alatt.

---

## 🧩 A megfelelő játékmód kiválasztása

A QuizWitz Live indításakor meg kell adnod, hogyan csatlakozzanak a játékosok:

- **Team codes** - Players or teams each receive a unique code. Előre regisztrált csapateseményekhez hasznos.
- **Single game code** - One shared game code for all players. Nyílt regisztrációjú élő közvetítésekhez a legjobb.

> Livestreamekhez mindig a **Közös játékkódot** válaszd, és kattints az _Ad-hoc játék indítása_ gombra.

Amint a kvíz betölt, a Quizmaster app megjeleníti:

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

A játék képernyője most a **Csatlakozási képernyőt** mutatja, ezt kell közvetítened a közönségednek.

---

## 🎥 Közvetítés Twitchre (vagy máshová)

A kvíz közvetítéséhez használj műsorszóró szoftvert. Ezt javasoljuk:

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Alternatívák: Streamlabs, vMix, vagy a Zoom/Meet beépített lehetőségei

Ha **megbeszéléses szoftvert** használsz, például Zoomot vagy Google Meetet:

- Egyszerűen oszd meg a képernyődet
- Nyomd meg a **Start** gombot a Quizmaster appban
- A játékosok közel valós időben vehetnek részt

A **Twitch, YouTube Live vagy Facebook Live** esetén **közvetítési késleltetést** (más néven transzkódolási késleltetést) fogsz tapasztalni.

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ A QuizWitz játékoskésleltetés beállítása

A stream késleltetésének kiegyenlítésére használd a **játékos-interakció késleltetését** a zsűri appban.

Így csináld:

1. Start your stream preview - no need to go live yet
2. Nyisd meg a **zsűri appot** a zsűrikódod megadásával itt: [**quizwitz.tv**](https://quizwitz.tv)
3. Menj a **Játékvezérlés** részhez
4. Nyisd meg az élő közvetítésedet egy másik ablakban, hanggal
5. Használj stoppert
6. A zsűri appban nyomd meg a **Buzzer** gombot, és indítsd az időmérést
7. Amikor meghallod a berregőt az élő közvetítésben, állítsd meg a stoppert
8. Kerekítsd felfelé a késleltetést (másodpercben), és írd be a **Player interaction delay** mezőbe
9. Kattints a **Confirm setting** gombra

> 🎯 Jobb egy kicsit túlbecsülni a késleltetést. Ez biztosítja, hogy a játékosok csak **azután** lássák a válaszlehetőségeket, hogy befejezted a kérdés felolvasását.

---

## 🚀 Éles indulás

Miután a késleltetés be van állítva, és a játékosok csatlakoztak:

- Indítsd el a Twitch streamedet
- A **kvíz indításához** használd a Quizmaster appot
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Élő közvetítéses prezentációs tippek

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- Szeretnéd automatikusan váltani az OBS-jeleneteket? Használd:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Szeretnél MIDI-eszközöket indítani a játék közben? Próbáld ki:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- További eszközöket keresel? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Minden eszközhöz szükség van a Quizmaster appból származó **rendezői kódodra**.

---

Készen állsz az élő adásra! A Twitch gördülékeny, gyorsan reagáló platformot kínál nagyszabású kvízesemények vezetéséhez. Combine that with QuizWitz Live - and your quiz night is set to impress.

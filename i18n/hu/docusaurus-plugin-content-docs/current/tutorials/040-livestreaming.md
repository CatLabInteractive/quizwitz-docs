---
id: livestream-tutorial
title: Élő közvetítéses kvíz
---

# 📺 Élő közvetítéses kvíz vezetése

A QuizWitz Live-val könnyű teljesen interaktív élő közvetítéses kvízt vezetni olyan platformokon, mint a **Twitch**, a **YouTube Live** vagy a **Facebook Live** — akár nagy közönség előtt is. Ez az útmutató végigvezet a beállításon, a késleltetés kezelésén és a prezentációs bevált gyakorlatokon.

> 🧭 Ha új vagy a Quizmaster appban, kezdd a [**quizmaster indítási útmutatóval**](../quizmaster/002-startup.md).

---

## 🎤 A quizmaster beállítása

A quizmaster az eseményed szíve. Ő irányítja a tempót, bemutatja a kérdéseket, és leköti a közönségedet.

A játék levezetéséhez használd a **Quizmaster appot**. Indítsd el a QuizWitz Live-ot a kvízszerkesztőből a **QuizWitz Live indítása** gombra kattintva.

> 💡 A Quizmaster app egy **webalkalmazás** - nincs telepítés. Csak menj a [**quizwitz.tv**](https://quizwitz.tv) oldalra a quizmaster eszközödön, és írd be a **quizmaster kódot**.

Javasoljuk, hogy **tablet vagy okostelefon** használj, így a quizmaster szabadon mozoghat a műsor alatt.

---

## 🧩 A megfelelő játékmód kiválasztása

A QuizWitz Live indításakor meg kell adnod, hogyan csatlakozzanak a játékosok:

- **Csapatkódok** - minden játékos vagy csapat egyedi kódot kap. Előre regisztrált csapateseményekhez hasznos.
- **Közös játékkód** - egyetlen közös játékkód minden játékosnak. Nyílt regisztrációjú élő közvetítésekhez a legjobb.

> Livestreamekhez mindig a **Közös játékkódot** válaszd, és kattints az _Ad-hoc játék indítása_ gombra.

Amint a kvíz betölt, a Quizmaster app megjeleníti:

- **Quizmaster kód** - a quizmasternek
- **Jury Code** — a nyitott kérdések ellenőrzéséhez
- **Regie Code** — a vizuális elemek/hang vezérléséhez
- **Game Code** — hogy a játékosok csatlakozhassanak

A játék képernyője most a **Csatlakozási képernyőt** mutatja, ezt kell közvetítened a közönségednek.

---

## 🎥 Közvetítés Twitchre (vagy máshová)

A kvíz közvetítéséhez használj műsorszóró szoftvert. Ezt javasoljuk:

- **OBS Studio** (Open Broadcast Software) — ingyenes és erős
- Alternatívák: Streamlabs, vMix, vagy a Zoom/Meet beépített lehetőségei

Ha **megbeszéléses szoftvert** használsz, például Zoomot vagy Google Meetet:

- Egyszerűen oszd meg a képernyődet
- Nyomd meg a **Start** gombot a Quizmaster appban
- A játékosok közel valós időben vehetnek részt

A **Twitch, YouTube Live vagy Facebook Live** esetén **közvetítési késleltetést** (más néven transzkódolási késleltetést) fogsz tapasztalni.

> ✅ A legjobb eredményhez a **Twitch** használatát javasoljuk — következetesen alacsony késleltetésű teljesítményt és jó nézői szinkront kínál.

---

## ⏱️ A QuizWitz játékoskésleltetés beállítása

A stream késleltetésének kiegyenlítésére használd a **játékos-interakció késleltetését** a zsűri appban.

Így csináld:

1. Indítsd el a stream előnézetét — még nem kell élőbe menned
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
- A QuizWitz a háttérben kezeli az időzítést — nem kell szünetet tartanod a kérdések között

---

## 💡 Élő közvetítéses prezentációs tippek

- **Ne hagyd, hogy a quizmaster a késleltetett streamet nézze** - csak az élő Quizmaster appot használja, hogy elkerüljétek a kínos szüneteket.

- A közönséggel való interakcióhoz figyeld az **élő kommenteket** egy külön képernyőn — ne a videóképet.

- Szeretnéd automatikusan váltani az OBS-jeleneteket? Használd:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Szeretnél MIDI-eszközöket indítani a játék közben? Próbáld ki:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- További eszközöket keresel? Látogass el a [**regie.catlab.eu**](https://regie.catlab.eu) oldalra — ez egy központi gyűjtőhely további automatizálási, jelenetváltási, effekt- és egyéb segédeszközökkel.

> Minden eszközhöz szükség van a Quizmaster appból származó **rendezői kódodra**.

---

Készen állsz az élő adásra! A Twitch gördülékeny, gyorsan reagáló platformot kínál nagyszabású kvízesemények vezetéséhez. Kombináld ezt a QuizWitz Live-val — és a kvízested garantáltan nagyot fog szólni.

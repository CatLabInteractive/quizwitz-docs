---
id: livestream-tutorial
title: Élő közvetítéses kvíz
---

# 📺 Élő közvetítéses kvíz vezetése

A QuizWitz Live-val könnyű teljesen interaktív élő közvetítéses kvízt vezetni olyan platformokon, mint a **Twitch**, a **YouTube Live** vagy a **Facebook Live** — akár nagy közönség előtt is. Ez az útmutató végigvezet a beállításon, a késleltetés kezelésén és a prezentációs bevált gyakorlatokon.

> 🧭 If you're new to the Quizmaster App, start with the [**Quizmaster startup guide**](../quizmaster/002-startup.md).

---

## 🎤 A quizmaster beállítása

A quizmaster az eseményed szíve. Ő irányítja a tempót, bemutatja a kérdéseket, és leköti a közönségedet.

Use the **Quizmaster App** to run the game. Indítsd el a QuizWitz Live-ot a kvízszerkesztőből a **QuizWitz Live indítása** gombra kattintva.

> 💡 The Quizmaster App is a **web app** — there’s no installation. Just go to [**quizwitz.tv**](https://quizwitz.tv) on your quizmaster device and enter the **quizmaster code**.

Javasoljuk, hogy **tablet vagy okostelefon** használj, így a quizmaster szabadon mozoghat a műsor alatt.

---

## 🧩 A megfelelő játékmód kiválasztása

When starting QuizWitz Live, you’ll be asked to choose how players connect:

- **Team codes** — Players or teams each receive a unique code. Előre regisztrált csapateseményekhez hasznos.
- **Single game code** — One shared game code for all players. Nyílt regisztrációjú élő közvetítésekhez a legjobb.

> For livestreams, always choose **Single game code** and click _Start ad-hoc game_.

Once the quiz loads, the Quizmaster App will display:

- **Quizmaster code** — for the quizmaster
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
- Press **Start** in the Quizmaster App
- A játékosok közel valós időben vehetnek részt

A **Twitch, YouTube Live vagy Facebook Live** esetén **közvetítési késleltetést** (más néven transzkódolási késleltetést) fogsz tapasztalni.

> ✅ A legjobb eredményhez a **Twitch** használatát javasoljuk — következetesen alacsony késleltetésű teljesítményt és jó nézői szinkront kínál.

---

## ⏱️ A QuizWitz játékoskésleltetés beállítása

To compensate for stream delay, use the **player interaction delay** in the Jury App.

Így csináld:

1. Indítsd el a stream előnézetét — még nem kell élőbe menned
2. Open the **Jury App** by entering your Jury Code at [**quizwitz.tv**](https://quizwitz.tv)
3. Menj a **Játékvezérlés** részhez
4. Nyisd meg az élő közvetítésedet egy másik ablakban, hanggal
5. Használj stoppert
6. In the Jury App, hit the **Buzzer** button and start timing
7. Amikor meghallod a berregőt az élő közvetítésben, állítsd meg a stoppert
8. Kerekítsd felfelé a késleltetést (másodpercben), és írd be a **Player interaction delay** mezőbe
9. Kattints a **Confirm setting** gombra

> 🎯 Jobb egy kicsit túlbecsülni a késleltetést. Ez biztosítja, hogy a játékosok csak **azután** lássák a válaszlehetőségeket, hogy befejezted a kérdés felolvasását.

---

## 🚀 Éles indulás

Miután a késleltetés be van állítva, és a játékosok csatlakoztak:

- Indítsd el a Twitch streamedet
- Use the Quizmaster App to **launch the quiz**
- A QuizWitz a háttérben kezeli az időzítést — nem kell szünetet tartanod a kérdések között

---

## 💡 Élő közvetítéses prezentációs tippek

- **Do not let the quizmaster watch the delayed stream** — they should use only the live Quizmaster App to avoid awkward pauses.

- A közönséggel való interakcióhoz figyeld az **élő kommenteket** egy külön képernyőn — ne a videóképet.

- Szeretnéd automatikusan váltani az OBS-jeleneteket? Használd:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Szeretnél MIDI-eszközöket indítani a játék közben? Próbáld ki:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- További eszközöket keresel? Látogass el a [**regie.catlab.eu**](https://regie.catlab.eu) oldalra — ez egy központi gyűjtőhely további automatizálási, jelenetváltási, effekt- és egyéb segédeszközökkel.

> All tools require your **Regie Code** from the Quizmaster App.

---

Készen állsz az élő adásra! A Twitch gördülékeny, gyorsan reagáló platformot kínál nagyszabású kvízesemények vezetéséhez. Kombináld ezt a QuizWitz Live-val — és a kvízested garantáltan nagyot fog szólni.

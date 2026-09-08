---
id: livestream-tutorial
title: Livestream куиз
---

# 📺 Водене на livestream куиз

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Това ръководство ще те преведе през настройката, справянето със забавянето и добрите практики за представяне.

> 🧭 Ако тепърва започваш с Quizmaster App, тръгни от [**ръководството за стартиране за quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 Настройка за quizmaster

quizmaster е сърцето на твоето събитие. Той контролира темпото, представя въпросите и държи публиката ангажирана.

Използвай **Quizmaster App**, за да водиш играта. Стартирай QuizWitz Live от редактора на куиза, като кликнеш върху **Start QuizWitz Live**.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Просто отиди на [**quizwitz.tv**](https://quizwitz.tv) на устройството си за quizmaster и въведи **quizmaster кода**.

Препоръчваме да използваш **таблет или смартфон**, за да може quizmaster да се движи свободно по време на шоуто.

---

## 🧩 Избор на правилния режим на игра

Когато стартираш QuizWitz Live, трябва да избереш как да се присъединяват играчите:

- **Team codes** - Players or teams each receive a unique code. Полезно за предварително регистрирани отборни събития.
- **Single game code** - One shared game code for all players. Най-подходящо за livestream-и с отворена регистрация.

> За livestream винаги избирай **Споделен код за игра** и щракни върху _Стартирай ad-hoc игра_.

Щом куизът се зареди, Quizmaster App показва:

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

Екранът на играта вече показва **екрана за свързване**, който трябва да стриймваш към публиката си.

---

## 🎥 Стриймване към Twitch (или други)

За да стриймваш куиза си, използвай софтуер за излъчване. Препоръчваме:

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Алтернативи: Streamlabs, vMix или вградените опции на Zoom/Meet

Ако използваш **софтуер за срещи** като Zoom или Google Meet:

- Просто сподели екрана си
- Натисни бутона **Старт** в Quizmaster App
- Играчите могат да участват почти в реално време

При **Twitch, YouTube Live или Facebook Live** ще има **забавяне на стрийма** (известно още като забавяне при транскодиране).

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Настройване на забавянето за играчите в QuizWitz

За да компенсираш забавянето на стрийма, използвай **забавяне на взаимодействието с играчите** в приложението за жури.

Ето как:

1. Start your stream preview - no need to go live yet
2. Отвори **приложението за жури**, като въведеш кода си за жури на [**quizwitz.tv**](https://quizwitz.tv)
3. Отиди на **Game control**
4. Отвори livestream-а си в друг прозорец, със звук
5. Използвай хронометър
6. В приложението за жури натисни бутона **Бъзер** и започни отброяването
7. Когато чуеш зумера в livestream-а, спри хронометъра
8. Закръгли забавянето нагоре (в секунди) и го въведи в полето **Player interaction delay**
9. Кликни върху **Confirm setting**

> 🎯 По-добре е леко да надцениш забавянето. Това гарантира, че играчите виждат опциите за отговор едва **след като** си приключил с прочитането на въпроса.

---

## 🚀 Излизане на живо

След като забавянето е настроено и играчите са свързани:

- Стартирай своя Twitch стрийм
- Използвай Quizmaster App, за да **стартираш куиза**
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Съвети за представяне на livestream

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- Искаш автоматично да сменяш сцените в OBS? Използвай:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Искаш да задействаш MIDI устройства по време на играта? Пробвай:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Търсиш още инструменти? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Всички инструменти изискват **режисьорския ти код** от Quizmaster App.

---

Готов си да излезеш на живо! Twitch предлага гладка и отзивчива платформа за водене на мащабни куиз събития. Combine that with QuizWitz Live - and your quiz night is set to impress.

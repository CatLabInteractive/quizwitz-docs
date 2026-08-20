---
id: livestream-tutorial
title: Livestream куиз
---

# 📺 Водене на livestream куиз

С QuizWitz Live е лесно да водиш напълно интерактивен livestream куиз в платформи като **Twitch**, **YouTube Live** или **Facebook Live** — дори за голяма публика. Това ръководство ще те преведе през настройката, справянето със забавянето и добрите практики за представяне.

> 🧭 If you're new to the Quizmaster App, start with the [**Quizmaster startup guide**](../quizmaster/002-startup.md).

---

## 🎤 Настройка за quizmaster

quizmaster е сърцето на твоето събитие. Той контролира темпото, представя въпросите и държи публиката ангажирана.

Use the **Quizmaster App** to run the game. Стартирай QuizWitz Live от редактора на куиза, като кликнеш върху **Start QuizWitz Live**.

> 💡 The Quizmaster App is a **web app** — there’s no installation. Just go to [**quizwitz.tv**](https://quizwitz.tv) on your quizmaster device and enter the **quizmaster code**.

Препоръчваме да използваш **таблет или смартфон**, за да може quizmaster да се движи свободно по време на шоуто.

---

## 🧩 Избор на правилния режим на игра

When starting QuizWitz Live, you’ll be asked to choose how players connect:

- **Team codes** — Players or teams each receive a unique code. Полезно за предварително регистрирани отборни събития.
- **Single game code** — One shared game code for all players. Най-подходящо за livestream-и с отворена регистрация.

> For livestreams, always choose **Single game code** and click _Start ad-hoc game_.

Once the quiz loads, the Quizmaster App will display:

- **Quizmaster code** — for the quizmaster
- **Jury Code** — за преглеждане на отворени въпроси
- **Regie Code** — за управление на визуализации/аудио
- **Game Code** — за присъединяване на играчите

Екранът на играта вече показва **екрана за свързване**, който трябва да стриймваш към публиката си.

---

## 🎥 Стриймване към Twitch (или други)

За да стриймваш куиза си, използвай софтуер за излъчване. Препоръчваме:

- **OBS Studio** (Open Broadcast Software) — безплатен и мощен
- Алтернативи: Streamlabs, vMix или вградените опции на Zoom/Meet

Ако използваш **софтуер за срещи** като Zoom или Google Meet:

- Просто сподели екрана си
- Press **Start** in the Quizmaster App
- Играчите могат да участват почти в реално време

При **Twitch, YouTube Live или Facebook Live** ще има **забавяне на стрийма** (известно още като забавяне при транскодиране).

> ✅ Препоръчваме **Twitch** за най-добри резултати — платформата постоянно предлага ниска латентност и добра синхронизация на зрителите.

---

## ⏱️ Настройване на забавянето за играчите в QuizWitz

To compensate for stream delay, use the **player interaction delay** in the Jury App.

Ето как:

1. Стартирай предварителния преглед на стрийма — още няма нужда да излизаш на живо
2. Open the **Jury App** by entering your Jury Code at [**quizwitz.tv**](https://quizwitz.tv)
3. Отиди на **Game control**
4. Отвори livestream-а си в друг прозорец, със звук
5. Използвай хронометър
6. In the Jury App, hit the **Buzzer** button and start timing
7. Когато чуеш зумера в livestream-а, спри хронометъра
8. Закръгли забавянето нагоре (в секунди) и го въведи в полето **Player interaction delay**
9. Кликни върху **Confirm setting**

> 🎯 По-добре е леко да надцениш забавянето. Това гарантира, че играчите виждат опциите за отговор едва **след като** си приключил с прочитането на въпроса.

---

## 🚀 Излизане на живо

След като забавянето е настроено и играчите са свързани:

- Стартирай своя Twitch стрийм
- Use the Quizmaster App to **launch the quiz**
- QuizWitz ще се погрижи за тайминга във фонов режим — няма нужда да правиш пауза между въпросите

---

## 💡 Съвети за представяне на livestream

- **Do not let the quizmaster watch the delayed stream** — they should use only the live Quizmaster App to avoid awkward pauses.

- За да взаимодействаш с публиката, следи **коментарите на живо** на отделен екран — не видео сигнала.

- Искаш автоматично да сменяш сцените в OBS? Използвай:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Искаш да задействаш MIDI устройства по време на играта? Пробвай:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Търсиш още инструменти? Посети [**regie.catlab.eu**](https://regie.catlab.eu) — централен хъб с допълнителни помощни инструменти за автоматизация, смяна на сцени, ефекти и още.

> All tools require your **Regie Code** from the Quizmaster App.

---

Готов си да излезеш на живо! Twitch предлага гладка и отзивчива платформа за водене на мащабни куиз събития. Комбинирай това с QuizWitz Live — и твоята куиз вечер ще впечатли всички.

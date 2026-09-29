---
id: round-options
title: Опции на кръга
---

# 🔄 Опции на кръга

Всеки кръг има конкретен **тип**. По подразбиране е **Trivia**, но те каним да тестваш и експериментираш с всички налични типове. Тази страница обяснява настройките и прикачените файлове, които можеш да конфигурираш за всеки кръг.

📘 За подробен преглед на всички типове кръгове виж [документацията за типовете кръгове](../round-types/000-round-types.md).

---

## 🔧 Конфигуриране на кръг

За да конфигурираш опциите на кръг, щракни върху иконата със зъбно колело в панела на кръга:

| ![Отвори опциите на кръга](/images/open-round-options.png) | ![Опции на кръга](/images/round-options.png) |
| :--------------------------------------------------------: | :------------------------------------------: |
|               _Отваряне на опциите на кръга_               |       _Панел за конфигуриране на кръга_      |

---

## ⚙️ Общи опции на кръга

Следните опции са налични за повечето типове кръгове:

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ Това влиза в сила само при типове кръгове и въпроси, при които обратната връзка иначе би била отложена, като отворени въпроси или светкавични кръгове.

📘 Виж [типове въпроси](../question-types/000-question-types.md) за повече информация относно времето и поведението на обратната връзка.

---

## 🏆 Опции за точкуване {#scoring}

QuizWitz предлага гъвкаво точкуване, за да бъде всичко честно и увлекателно за всички играчи.

- **Time-based scoring** - Players earn more points for faster answers.
  - За повечето типове въпроси точките според времето намаляват **непрекъснато на микросекунда**: колкото по-бързо отговориш, толкова повече точки получаваш.
  - За **отворени въпроси** точките според времето са разделени на блокове. Например: отговорите в първия блок (напр. първите няколко секунди) носят **100%** от частта според времето, следващият блок носи **80%** и т.н. Това помага да се изравнят шансовете за по-бавните пишещи.

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - По подразбиране **75%** от точките са фиксирани (всеки, който отговори правилно, получава тези точки, независимо от скоростта).
  - Само останалите **25%** се влияят от това колко бързо отговарят играчите.

> 💡 Регулирането на тази настройка ти позволява да направиш кръговете по-ориентирани към знания или по-ориентирани към скорост, според стила на твоя quiz.

Тези опции за точкуване могат да бъдат намерени в панела с опции на кръга, когато редактираш кръг.

---

## 📜 Инструкции за quizmaster

Можеш да зададеш собствен **интро текст за рунда**, който се показва в началото на рунда само в [Quizmaster App](../quizmaster/001-introduction.md). Използвай го, за да инструктираш quizmaster или да добавиш лична бележка.

---

## 📎 Прикачени файлове

Подобри кръга си с медия, показвана в конкретни моменти:

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- ...

📘 За поддържаните типове файлове и съвети за употреба виж [ръководството за прикачени файлове](../editor/006-attachments.md).

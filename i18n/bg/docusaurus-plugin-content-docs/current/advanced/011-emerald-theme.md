---
id: emerald-theme
title: Тема Emerald
---

# Тема Emerald

Темата Emerald е най-лесният начин да персонализираш изгледа на твоята QuizWitz игра. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks - drastically.

:::tip
Можеш да използваш нашия [тестер за теми](https://client.quizwitz.com/test.html?theme=emerald), за да видиш как ще изглеждат настройките ти.
:::

![Екранна снимка на темата emerald](/images/emerald/emerald.png)

## Избери темата Emerald

В твоите **Настройки на quiz-а** избери **Тема** и активирай **Emerald**.

Можеш да тестваш quiz с темата Emerald [тук](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Екранна снимка на настройките на quiz-а](/images/emerald/quiz-settings.png)

## Прикачени файлове

### Прикачени файлове към quiz-а

Определено най-лесният начин да промениш изгледа и усещането на играта е като прикачиш изображения към твоя quiz. Отвори **Настройки на quiz-а** и превърти надолу до секцията **Прикачени файлове**. Here you can upload images that will be used as background, client logo, connect - and wait screens (for conference - and live quizzes), and more.

![Екранна снимка на прикачените файлове към quiz-а](/images/emerald/quiz-attachments.png)

### Прикачени файлове към рунд

Можеш също да качваш изображения или видеа, които ще се пускат преди и след играта. Това важи и за рундовете: намери изображение, което искаш да използваш като въведение към рунда, отиди в **настройки на рунда**, деактивирай **Показване на въведение към рунда**, за да скриеш въведението по подразбиране, и качи своето изображение или видео като **Показване преди рунда**. Когато рундът започне, изображението или видеото ще се показва вместо въведението по подразбиране.

![Екранна снимка на прикачените файлове към рунда](/images/emerald/round-settings.png)

:::tip
Използвай изображения и видеа с резолюция 1920 x 1080 за най-добри резултати.
:::

:::info
След като си поиграем с прикачените файлове, получаваме нещо [като това](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Екранна снимка на темата emerald с прикачени файлове към quiz-а](/images/emerald/emerald-with-attachments.png)

### Музика

Цялата музика в играта също може да бъде заменена с прикачени файлове. Всички аудиофайлове, качени в слотовете **по време на въпроса**, ще се пускат по време на обратното броене за въпроса.

## Модификатори на темата Emerald

Освен прикачени файлове, можеш също да променяш темата Emerald с **параметри на заявката**. These are parameters you can add to the **advanced game options** URL - and they change the look of the theme.

За това ще започнем с примерен quiz (без никакви прикачени файлове):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Когато стартираш quiz-а по-горе, играта ще бъде в стандартния стил Emerald. Нека променим това.

:::tip
Най-лесният начин да експериментираш с тези параметри е като използваш нашия [тестер за теми](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
When you are done experimenting, you can copy - paste the parameters to your advanced game options URL.
:::

Наличните модификатори са:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma - separated)
- optionBorderColors (4 colors, comma - separated)

Освен това можеш да зададеш шрифт по подразбиране:

- defaultFont
- headerFont

Тези шрифтове трябва да са URL адреси към публично достъпни файлове с шрифтове.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( - for example ff1b6b-45caff). (Имай предвид, че символът # не трябва да се добавя.)

:::note
Параметрите на заявката трябва да започват с въпросителен знак ( ? ) и всеки параметър трябва да бъде разделен с амперсанд ( & ). За повече информация относно параметрите на заявката посети [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

Като добавиш тези параметри към URL адреса на играта, можеш да промениш цветовете в темата:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Екранна снимка на темата Emerald с персонализирани модификатори](/images/emerald/theme_properties.png)

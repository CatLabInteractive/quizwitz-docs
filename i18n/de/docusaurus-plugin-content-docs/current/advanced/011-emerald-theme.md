---
id: emerald-theme
name: Emerald theme
---

# Emerald theme

The Emerald theme is the easiest way to customize the look of your QuizWitz game. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks — drastically.

:::tip
You can use our [theme tester](https://client.quizwitz.com/test.html?theme=emerald) to see what your settings will look like.
:::

![A screenshot of the emerald theme](/images/emerald/emerald.png)

## Select the Emerald theme

In your **Quiz settings**, select **Theme** and enable **Emerald**.

You can test a quiz using the Emerald theme [here](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![A screenshot of the quiz settings](/images/emerald/quiz-settings.png)

## Attachments

### Quiz attachments

By far the easiest way to change the look and feel of the game is by attaching images to your quiz. Open the **Quiz settings** and scroll down to the **Attachments** section. Here you can upload images that will be used as background, client logo, connect — and wait screens (for conference — and live quizzes), and more.

![A screenshot of the quiz attachments](/images/emerald/quiz-attachments.png)

### Round attachments

You can also upload images or videos that will be played before and after the game. This goes for rounds as well: find an image that you want to use as round introduction, go to **round settings**, disable **Show round intro** to hide the default round introduction, and upload your image or video as **Show before round**. When the round starts, the image or video will be displayed instead of the default introduction.

![A screenshot of the round attachments](/images/emerald/round-settings.png)

:::tip
Use images and videos of a 1920 x 1080 resolution for best results.
:::

:::info
After playing with the attachments, we end up with something [like this](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![A screenshot of the emerald theme with quiz attachments](/images/emerald/emerald-with-attachments.png)

### Music

All music in the game can be replaced with attachments as well. Any audio files uploaded in the **during question** slots will be played during the question countdown.

## Emerald theme modifiers

In addition to attachments, you can also manipulate the Emerald theme with **query parameters**. These are parameters you can add to the **advanced game options** URL — and they change the look of the theme.

For this, we will start with an example quiz (without any attachments):\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

When you start the above quiz, the game will be in the default Emerald style. Let's change that.

:::tip
The easiest way to experiment with these parameters is by using our [theme tester](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).\
When you are done experimenting, you can copy — paste the parameters to your advanced game options URL.
:::

The available modifiers are:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma — separated)
- optionBorderColors (4 colors, comma — separated)

Additionally, you can set a default font:

- defaultFont
- headerFont

These fonts must be URLs to publicly available font files.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( — for example ff1b6b-45caff). (Note that the # symbol should not be added.)

:::note
The query parameters must start with a question mark ( ? ) and each parameter must be divided with an ampersand ( & ). For more information on query parameters, visit [wikipedia](https://en.wikipedia.org/wiki/Query_string).
:::

By adding these parameters to your game URL, you can modify the colors in the theme:\
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![A screenshot of the Emerald theme with custom modifiers](/images/emerald/theme_properties.png)

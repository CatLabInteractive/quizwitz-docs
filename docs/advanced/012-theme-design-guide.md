---
id: theme-design-guide
title: Theme design guide
---

# Theme design guide

[Theming](/docs/advanced/theming) explains how a QuizWitz theme is built: in Adobe Animate, exported as a CreateJS library. This page covers the step before that - **designing** the theme.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. This page describes that shape, and doubles as the list of deliverables when you ask a designer for a quote.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The seven frames](#seven-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
If you only want to change colours, fonts and backgrounds, you do not need any of this - customise the [Emerald theme](/docs/advanced/emerald-theme) instead.
:::

:::info[See it running]
Every screen described here can be played live, with sample data, in the **theme tester** at [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). It loads a theme and offers a menu of test screens: questions with and without an attachment, the answer spread for a small and a large group, the standings, the round intros, the connect screen with and without a client logo, and so on. Add `?theme=emerald` to the address to see the [Emerald theme](/docs/advanced/emerald-theme). Whoever builds the theme uses the same page to check it while it is being assembled.
:::

---

## What you are designing

A game of QuizWitz is played by a whole room at once, and two screens are always involved:

- **The game screen** - a projector or TV, 1920 × 1080. Questions, answers, how the room's answers were spread, the standings. This is what you design.
- **Each player's phone**, where they type their answer. That is a web page with a fixed layout; it is styled from your colour list, not laid out by you.

A theme is the complete visual skin of the game screen: background, typography, colour, the way a question with four options is presented, how the standings build up, how a round is announced.

---

## Seven frames and an element sheet

The game has dozens of distinct screen states, but most are variants of the same layout. **You design seven frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. A screen with no artwork of its own falls back to a general frame.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule - and that furniture is a design decision, not something that can be inferred from a background.

| # | Frame | Also covers |
|---|---|---|
| 1 | [General frame](#frame-1---the-general-frame) | Thirteen screen states with no artwork of their own |
| 2 | [Connect and waiting](#frame-2---connect-and-waiting) | - |
| 3 | [Question screen](#frame-3---the-question-screen) | - |
| 4 | [Question with attachment](#frame-4---question-with-attachment) | The full-screen attachment, and attachments shown between questions |
| 5 | [Answer screen](#frame-5---the-answer-screen) | The answer screen for open questions and for questions with an attachment |
| 6 | [Standings and winner](#frame-6---standings-and-winner) | The standings between rounds and the final winner |
| 7 | [Round intro](#frame-7---the-round-intro) | All six round categories |

:::note[About the screenshots]
The screens below come from an existing theme. They show **which elements appear on each screen and when**. They are not a reference for style *or* layout: where this theme puts its question, its options and its timer is its own decision, and yours can differ completely. Read them for what has to be present, not for where it goes. All of them, and more, can be played in the [theme tester](https://client.quizwitz.com/test.html).
:::

### Frame 1 - the general frame

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. The question picker and the long question may get a composition of their own if you want them to; otherwise they use this frame.

Two game moments on the same frame: a question picker and a points ladder.

![The general frame with a three-row question picker](/images/theme-design/frame1-general-multiquestion.png)

![The general frame with a five-level points ladder](/images/theme-design/frame1-general-strikeladder.png)

Look at how little they have in common. The picker puts its three rows inside a panel with a border; the ladder has no panel at all, just rows separated by thin rules. What the two share is the background and the header band above them - everything below that belongs to the individual screen and is filled by the game, not by you.

That panel and those rules are your decisions too, but they come from the [element sheet](#the-element-sheet), not from this frame. What this frame has to do is hold them: design the content area as an empty, neutral, roomy zone that works with a bordered panel, a bare list and a table of rows alike. A background that is busy in the middle, or a header that only works with a panel tucked right underneath it, is where that breaks.

### Frame 2 - connect and waiting

Two screens, not one.

**The connect screen** is what the room sees to join. It holds:

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

Design it **twice**: with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Connect screen with a client logo](/images/theme-design/frame2-connect.png)

![Connect screen without a client logo](/images/theme-design/frame2-connect-nologo.png)

**The waiting screen** stays up while the quizmaster reads a question aloud. It is a separate composition rather than a variant of the connect screen - the two share only a background - and it is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game, so it deserves more attention than an empty screen usually gets.

![Waiting screen](/images/theme-design/frame2-pending.png)

### Frame 3 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest.

In the screenshots below: four options, the question above, the timer in the middle. Note that an option can consist of nothing but an emoji.

![Question screen with four text options](/images/theme-design/frame3-question-options.png)

![Question screen with flags as answer options](/images/theme-design/frame3-question-emoji.png)

A question with no options - players type their answer on their phone. The screen is nearly empty and the timer becomes the main element:

![Open question with only the question and a large timer](/images/theme-design/frame3-question-open.png)

The moment time runs out. The feedback balloon appears over the screen and the timer is empty:

![Question screen showing the time's-up state](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - question with attachment

**What is on it:** the same parts as frame 3, arranged around an image or video. It may be a different composition. The attachment is scaled to fit inside the box you draw, so both a landscape and a portrait image must look acceptable in it.

**What it covers:** the full-screen attachment, and attachments shown between questions.

The same parts, rearranged around an attachment area, with the options to the left and right:

![Question screen with an image in the middle](/images/theme-design/frame4-question-attachment.png)

An attachment on its own, filling the screen:

![Full-screen attachment](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. First the spread, with nothing marked yet:

![Answer screen showing the spread](/images/theme-design/frame5-answer-mc-spread.png)

Then the correct option is ticked and the wrong ones crossed:

![Answer screen with the correct option revealed](/images/theme-design/frame5-answer-mc-reveal.png)

And if the question carries an explanation, a balloon drops over the artwork. Leave room for it - it lands on top of whatever you designed:

![Answer screen with the explanation balloon](/images/theme-design/frame5-answer-mc-explanation.png)

With a small group, the same moment is a score list rather than a chart:

![Answer screen for a small group](/images/theme-design/frame5-answer-mc-small.png)

For an open question, the chart shows how many players got it right:

![Answer screen for an open question](/images/theme-design/frame5-answer-open.png)

### Frame 6 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round. The player row is the element that repeats: position, avatar, name, score.

![Standings with six player rows](/images/theme-design/frame6-roundoutro.png)

The final countdown names one player at a time, from last place to first - place, score and team name in the spotlight. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![The winner countdown naming one player](/images/theme-design/frame6-winner-countdown.png)

![The final standings](/images/theme-design/frame6-winner.png)

### Frame 7 - the round intro

**What is on it:** a short announcement per round category. There are six categories: science & technology, nature, entertainment & music, sport, art, history.

**What it covers:** all six categories. One design may serve several of them; the mapping from category to artwork is a configuration setting.

One design, optionally with a variant per category:

![Round intro for the nature category](/images/theme-design/frame7-roundintro-nature.png)

![Round intro for the science category](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has a character that talks and reacts. Nothing requires one: the theme validator only warns about the `ted` element; it does not fail without it. The [Emerald theme](/docs/advanced/emerald-theme) ships without a character, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Without a character, the round intro becomes a graphic, typographic or illustrative moment. Two approaches keep the work in proportion: one composition with a colour or icon variant per category, or a single universal announcement with only the round name changing. Six genuinely different intros is a lot of work for a few seconds of screen time.

---

## The element sheet

Two groups of elements, on one sheet, each drawn once and reused everywhere.

**Content building blocks.** These fill the content area of the general frame. The screens that fall back to it are assembled from these, so whatever you draw here decides how all of them look:

- a **panel**: fill, border, corner radius - the container a list or a block of text sits in
- a **list row**: the repeating unit of any list, with its own background or none
- a **separator**: the rule between rows, where there is no panel
- a **label and value pair**: a short label on the left, a value on the right

**Controls.** Drawn once, used on every screen:

- a **button** in its four states: rest, hover, pressed, disabled
- the **correct** and **wrong** symbols
- a **scrollbar**, a **checkbox**, a **select**
- where the **QuizWitz logo** sits

---

## What is decided for you

- **The players' phones.** A fixed HTML layout, styled from your colour list.
- **The handful of things the engine draws itself.** Some furniture is drawn in code rather than taken from the theme - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Those take their colour from the list in [Colour as a list](#colour-as-a-list) and nothing else, so that list is the only control you have over them.
- **Which screens fall back to the general frame, and how.**
- **How the six categories map onto the round intro artwork.** That mapping is a configuration setting, so one intro can be reused for several categories.
- **All timing and animation duration.**
- **Sound.** A theme can carry its own music and sound effects, but that is a separate deliverable and not part of the design brief.

---

## Design rules

None of these limit your visual design. They are about how the file is built.

### Format

- **1920 × 1080 pixels**, exactly. One frame per screen.
- Work **in vector** where you can. Where you use raster (photos, textures): at least 2× display size.
- The Animate document runs at **24 frames per second**. Relevant if you supply motion ideas.
- Keep a **5% margin** at the edges free of essential information. Projectors crop.

### Layer structure - the rule that matters most

**Anything that can move, appear or change value sits on its own named layer.** Nothing merged, nothing flattened.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

What may be merged: purely decorative background artwork that works as a single still image.

This is the one rule that genuinely hurts when it is not followed - the artwork then has to be pulled apart or redrawn, which is exactly the cost this arrangement is meant to avoid.

### Effects that do not survive

The engine draws on an HTML5 canvas. These have to be **baked into the image** or left out:

| Effect | What to do instead |
|---|---|
| Live blur, drop shadows and glow as filters | Supply them as artwork |
| Blend modes (multiply, screen, overlay) | Resolve them to flat colour |
| Layer effects and adjustment layers | Bake them in |
| Gradients **inside** text, or text with a per-character outline | Leave them out |
| Masks that change per frame | Leave them out |

Gradients in shapes are fine. Transparency is fine. Shadows as fixed artwork are fine.

### How text behaves

This is where designing for QuizWitz differs most from ordinary design work.

**You do not set a font size. You draw a box.**

All text is drawn live by a component that receives two things: a string, and the rectangle you drew. It then finds **the largest font size at which that string, wrapped across lines, still fits inside the box**. A long string shrinks to fit; a short one grows until the box is full.

![A picker where three lines of different length each get a different font size](/images/theme-design/frame1-general-multiquestion.png)

Three rows, three identical boxes - and three completely different font sizes, purely because the text is shorter or longer. "Where is love" gets the full height; the question above it has to make do with two small lines. The labels on the left behave the same way.

What follows from that:

- **The same question looks different in another game.** A six-word question appears large and screen-filling; a thirty-five-word one appears small across five lines, in exactly the same box. Both have to look right.
- **Design every text box twice.** Fill it once with a very short sample and once with a very long one, and check that the composition holds in both. As a rule of thumb: an answer option runs from one to about eight words, a question from five to forty, a player name from two to twenty characters.
- **Do not count on a fixed number of lines.** A title that is "always on one line" does not exist here.
- **Do not optically align text with anything else.** Text that has to line up with a rule or a shape will drift as soon as it is shorter or longer. Use boxes that are roomy enough and an alignment (left, centred, right) instead of exact positions.
- **The box is a maximum, not a promise.** You design its proportions; the fill varies.
- **Twelve languages.** German compounds are long, and Hungarian is no kinder. A box that is tight in English drops to an unreadably small size in German.
- **Emoji can appear inside text.** Players pick one next to their team name, and a question or an option can contain one - sometimes an option is nothing but an emoji. They are drawn in colour and are taller than the letters around them.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Not: at what point size.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### The timer - required, and it is an animation

**Every question screen has a timer.** It is not optional; the room has to see how much time is left. Both question frames carry one.

**The timer is not a counting number but an animation whose playhead the engine moves.** You design a progression from "full" to "empty" - a bar draining, a ring closing, an hourglass, a shrinking line. The engine plays that animation at exactly the speed that makes the last frame coincide with the end of the question.

What follows:

- **The question duration is not fixed.** It is set per quiz - often twenty to thirty seconds, but it can be shorter or longer. Your animation is stretched or compressed to fit. Design a *progression*, not an animation of a set number of seconds.
- **No numbers or per-second ticks.** A timer counting "20, 19, 18…" stops being true as soon as the duration changes.
- **The last seconds are the tensest moment of the game.** It helps if the progression becomes clearer or more urgent towards the end.
- **Legible from the back of the room**, at a glance.
- **Multiple timers are allowed.** A bar at the top and a ring near the question are both driven, as long as each is named `timer`.

Supply the timer as a series of keyframes or as a description of the progression - "the bar drains right to left and shifts from green to red" is enough.

### Flying emoji land on top of everything

Every player picks an emoji when they join, and the game throws those emoji across the screen. They are drawn by the engine on a layer above the theme, in whatever colours the player's emoji happens to have. **There is nothing here for you to design** - but there is something to design around, because they are not a rare flourish.

They appear at three moments:

- **When a player answers.** Their emoji rises from the bottom edge at a random horizontal position, arcs up and falls back out of frame.
- **When a player flings one.** Players can fling their emoji from their phone; angle and speed come from the swipe, and it launches from the bottom centre, spinning.
- **When a place is revealed in the final countdown.** A burst of the named player's emoji: twenty for an ordinary place, fifty for third, seventy-five for second, and **a hundred and fifty for the winner.**

They always enter from the bottom edge, arc under gravity and fall back out. What that means for the design:

- **Keep the bottom third of the standings and winner screens clear of anything small or critical.** During the countdown it is genuinely crowded down there.
- **Assume they will clash with your palette.** They are full-colour emoji from every corner of the Unicode chart, and no theme controls them. A design that only holds together in a tight colour range will look accidental for those seconds.
- **Flings are suppressed while an image or video is showing**, so the attachment screens stay clean.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Fonts

- **Fonts must be embeddable.** The `.ttf` or `.otf` file is needed, plus a licence that allows embedding in an application. A font licensed only as a webfont, or only for print, cannot be used. Check this before designing with it; it is an expensive correction afterwards.
- Fonts with unusually large ascenders or descenders can be compensated for, but flag it if you use one.

### Colour as a list

The theme reads a colour list from a configuration file, and the players' phones are styled from the same list. Supply your palette as a **named list**, not only as colours in the artwork:

| Where | Colours |
|---|---|
| **Game screen** | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts |
| **Players' phones** | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container |

Gradients are allowed on the game screen: give them as two hex values.

A few colours are the *only* handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

If you leave them out they fall back to built-in defaults - white, grey, red, black and white - which rarely match a design.

### The QuizWitz logo

Custom designs include the QuizWitz logo. Reserve a place for it where it does not get in the way of the design.

---

## What to hand over

### Source file - Illustrator preferred

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool | What happens on import | Use it for |
|---|---|---|
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. That is exactly the step that saves the artwork from being rebuilt by hand. | **Preferred.** The final deliverable. |
| **Adobe Photoshop** | Imports with its layers intact, like Illustrator, but gives raster instead of vector. | Possible |
| **Figma** | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. If you do use Figma, supply **each element separately as SVG**, with filenames matching the layer names, so the structure can be rebuilt by hand. | The concept phase, if you are faster in it. Deliver the final version in Illustrator. |

File structure:

- One artboard per screen, each exactly 1920 × 1080, named after the frames above.
- Reusable parts (button, player row, answer option, timer) as **symbols** or components, not as loose copies.
- Layer names in English, without spaces: `question`, `option1` to `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Colours as named swatches and text as named styles, rather than set on each object individually.

### Deliverables checklist

1. The **source file**, structured as above.
2. **Each frame as a PNG**, 1920 × 1080 - a reference for how it should look. For frame 2, both the version with and the version without a client logo.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Each separate graphic element as a transparent PNG at 2×**, in one folder, filename matching the layer name.
5. **The timer** as keyframes or a written description of the progression.
6. **Fonts** as `.ttf` or `.otf`, with proof of licence.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Half a page of notes**: what the idea is, how the options should appear, what moves and what stays still. Not a ten-page design rationale - whoever builds the theme needs to know what to build. Motion ideas may be described or supplied as a rough animatic.

### Order of work

1. **Frame 3, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme, and the question screen is the one the room looks at longest.
2. **Frames 1 and 2.** They follow naturally from the first two.
3. **Frames 5 to 7** come last.

---

## Appendix - symbol names

For completeness, and for anyone who wants to know exactly where their artwork ends up. **You do not need to read this to do the work**; the seven frames and the element sheet above are enough. Using these names as layer names saves a translation step.

| Frame | Symbol name | Required parts |
|---|---|---|
| 1. General frame | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional | `placeholder` (the content area); `title` text box optional |
| 1b. Question picker, long question | `MultiQuestionScreen`, `LongQuestionScreen`; both optional, fall back to the general frame | picker: `questions` placeholder, `timer`; long question: `question` placeholder |
| 2. Connect screen | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, with a `logo` placeholder | `instructions.line1` to `line5`, `connectedPlayers`; `qrCode` placeholder with frame label `showQrCode` optional |
| 2b. Waiting screen | `PendingScreen`; `PendingScreenWithLogo` optional | `header.text` |
| 3. Question screen | `QuestionScreen` | `question.text`, `timer`, `feedback.text`, `option1` to `option4`, frame labels `showOptions` and `showFeedback` |
| 4. Question with attachment | `QuestionScreenAttachment` | as above, plus `attachment.placeholder` |
| 4b. Full-screen attachment | `AttachmentScreen` | `placeholder` |
| 5. Answer screen | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional | `option1` to `option4`, `answer.text`, `feedback.text` |
| 5b. Open question answer | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` variants optional | `answer.text`, `feedback.text`, `players`, `piechart` |
| 6. Standings | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` and `PlayerScoreNoImage` optional | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in the row: `position`, `name`, `score`, `avatar` optional |
| 7. Round intro | one or more symbols of any name; the configuration file maps each of the six categories to a symbol | - |
| - | `LoadingScreen` | `text`, `progress` |
| - | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no artwork of their own needed - built from what appears in your frames |
| - | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen` | only shown in the desktop app, not in a live quiz. Not part of the brief: they are taken from the theme template and restyled with your background and buttons |

The stock theme's round intro symbols are called `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` and `RoundIntroTedCultHist`; art and history share the last one. The "Ted" in those names is a leftover from the original theme's character and does not mean a character has to appear in them.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. The `timer` element is a movie clip with its own timeline; the engine reads its frame count and moves the playhead in proportion to elapsed time, at most 24 times per second.

### What the configuration file takes from your design

```json
{
  "fontFiles": { "<body font>": "fonts/body.ttf", "<heading font>": "fonts/heading.ttf" },
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "_container_": "#…", "_timerBackground_": "#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…", "player": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "optionColors": [ "#…", "#…", "#…", "#…" ],
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "remoteColors": {
    "background": "#…", "text": "#…", "outline": "#…",
    "options-outline": "#…", "container-background": "#…", "container-text": "#…"
  },
  "roundIntros": { "science": "<symbol>", "nature": "<symbol>", "entertainment": "<symbol>",
                   "sports": "<symbol>", "art": "<symbol>", "history": "<symbol>" },
  "overlay": "light | dark"
}
```

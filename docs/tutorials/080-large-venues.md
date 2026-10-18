---
id: large-venues
title: Large venues, lighting and sound
---

# 🏟️ Large venues, lighting and sound

QuizWitz Live scales from a pub quiz to large venues with hundreds of players. This guide covers what changes when you move to a bigger stage: the network, sound, and syncing your lighting (or other show equipment) with the game.

> 🧭 If you're new to QuizWitz Live, start with the [**Quizmaster startup guide**](../quizmaster/002-startup.md).

---

## 🌐 A stable internet connection

Every part of a live game talks to the others through our servers in real time: the game screen, the Quizmaster App, the Jury App, the regie tools and every player's device. A stable internet connection is the most important requirement for a large event.

- Connect the game screen computer and any regie computers with a **network cable**. Don't rely on venue wifi or a mobile hotspot for these.
- Make sure players have good wifi or mobile (4G/5G) coverage in the whole room. A full room can overload a small wifi network.
- Click **Load quiz** well before the start. QuizWitz preloads all images, audio and video, so attachments play smoothly once the quiz is running.

---

## 🔊 Sound: everything plays through the game screen

All sound is played by the game screen: the QuizWitz music and sound effects, and every audio or video attachment you add to your questions, rounds or quiz (connect screen music, round outro music, and so on). Everything is timed with what happens on screen.

So you only need to connect the **audio output of the game screen computer** to your mixing desk or PA. There are no separate sound cues to fire by hand.

- Use the volume slider in the game's control bar to set the level, or to mute all quiz sounds.
- To play only your own uploaded audio, add `music=0` to the game link (see [advanced parameters](../advanced/020-advanced-parameters.md)). `connectMusic=0` only turns off the music on the connect screen.

---

## 💡 Lighting: the MIDI controller

The MIDI controller at [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) turns game events into MIDI notes. Map those notes to cues in your lighting software or console, and your lights follow the game automatically.

We use it with [QLC+](https://www.qlcplus.org/) (free lighting software that drives DMX fixtures), but it sends plain MIDI, so it works with most lighting consoles and software that accept MIDI input, as well as sound boards, video mixers and other show equipment.

### Connecting

1. Start your QuizWitz Live game. The Quizmaster App shows the **regie code** next to the quizmaster code and jury code.
2. On the computer connected to your lighting system, open [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) in **Google Chrome**. The controller uses Web MIDI, which other browsers may not support.
3. Allow MIDI access when Chrome asks for it.
4. Enter the regie code and click **Connect**.
5. Select the **Output** MIDI device and channel (channel 1 by default).

If your lighting software runs on the same computer, use a virtual MIDI port: the **IAC Driver** on macOS, or a tool like **loopMIDI** on Windows.

> ⚠️ Keep the controller tab open for the whole game. Closing it stops the MIDI notes.

### How it works

Each game event has its own fixed MIDI note number. When the event happens, the controller plays that note on the output channel. The note number is shown on each button in the controller.

- **Press a button** to send its note by hand. Use this to set up and test your mapping before the show.
- A button turns **red** for a moment when the game triggers it.
- Most events are only sent once in a row: if the same event happens twice in a row, the second one is skipped. Correct answer and incorrect answer are sent every time, so you can flash the lights for each answer that is revealed.
- **Feedback** (optional): select a MIDI input and channel (channel 2 by default). Notes your lighting software sends back light up the matching buttons in green, so you can see which cues are active.

### MIDI notes

| Note | Event |
|---|---|
| 1 | Game intro |
| 2 | Game intro: stop |
| 3 | Round intro |
| 4 | Round intro: stop |
| 5 | Lightning round intro |
| 6 | Lightning round intro: stop |
| 10 | Question start |
| 11 | Question in progress |
| 12 | Question timer starts |
| 13 | Question timer stops |
| 14 | Question done |
| 20 | Question timer at 25% |
| 21 | Question timer at 33% |
| 22 | Question timer at 50% |
| 23 | Question timer at 66% |
| 24 | Question timer at 75% |
| 30 | Attachment shown |
| 31 | Attachment hidden |
| 40 | Before the question result |
| 41 | Question result |
| 42 | Correct answer revealed |
| 43 | Incorrect answer revealed |
| 44 | Question result: stop |
| 45 | Everyone answered correctly |
| 46 | Nobody answered correctly |
| 47 | Only one correct answer |
| 50 | Round result |
| 51 | Round result: stop |
| 52 | Lightning round result |
| 53 | Lightning round result: stop |
| 60 | Intermission |
| 61 | Intermission: stop |
| 70 | Final result |
| 71 | Final result: a position is revealed |
| 72 | Final result: the winner is revealed |
| 73 | Final result: stop |

### Lighting per question

You can give each question its own lighting mood. In the quiz editor, open the question's settings and add **Lighting** (under *Presentation*). When the question timer starts, the controller sends the note for that mood. Questions without a lighting mood send the *Default* note, so your lights can return to their normal state.

| Note | Lighting |
|---|---|
| 100 | Default |
| 101 | Countdown |
| 102 | Disco party |
| 103 | War zone |
| 104 | Red alert |
| 105 | Starry night |
| 106 | Prison escape |
| 107 | Hazardous materials |
| 108 | Cozy pink |
| 109 | Atlantis |
| 110 | Jungle |
| 111 | Blue ocean |
| 112 | Yellow ocean |
| 113 | Green ocean |
| 114 | Purple ocean |
| 115 | Orange ocean |
| 116 | Red ocean |
| 117 | Red versus blue |

The names are suggestions: what each note does is up to you and your lighting setup.

---

## 🛠️ More regie tools

[**regie.catlab.eu**](https://regie.catlab.eu) has more tools for large events. All of them use the regie code.

- **Teleprompter** - a second quizmaster screen with auto-scrolling and mirroring
- **Director screen** - send messages to presenters on one or more stage monitors
- **OBS controller** - switch OBS scenes automatically during the game (see [livestream quiz](040-livestreaming.md))
- **Countdown timer** - show QuizWitz timers on a separate screen
- **Duplicate screen** - show a copy of the game screen on another monitor

---

## ✅ Example setup

- **Game screen computer** - connected to the projector or LED wall and to the PA, with a network cable
- **Regie computer** - the MIDI controller in Chrome, connected to your lighting system, with a network cable
- **Tablet or phone** - the Quizmaster App
- **Laptop or tablet** - the Jury App, to adjust scores and control the game

> 💡 Do a full run-through in the venue before the event, so you can test your lighting cues, sound levels and the network.

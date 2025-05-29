---
id: livestream-tutorial
title: Livestream quiz
---

# 📺 Hosting a livestream quiz

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** — even for large audiences. This guide walks you through setup, delay handling, and presentation best practices.

> 🧭 If you're new to the Quizmaster app, start with the [**Quizmaster startup guide**](../quizmaster/002-startup.md).

---

## 🎤 The quizmaster setup

The quizmaster is the heart of your event. They control the pacing, present the questions, and keep your audience engaged.

Use the **Quizmaster app** to run the game. Launch QuizWitz Live from the quiz editor by clicking **Start QuizWitz Live**.

> 💡 The Quizmaster app is a **web app** — there’s no installation. Just go to [**quizwitz.tv**](https://quizwitz.tv) on your presentation device and enter the **Master Code**.

We recommend using a **tablet or smartphone** so the quizmaster can move freely during the show.

---

## 🧩 Choosing the right game mode

When starting QuizWitz Live, you’ll be asked to choose a mode:

- **Regular mode** — Players or teams each receive a unique code. Useful for pre-registered team events.
- **Ad-hoc mode** — One shared Game Code for all players. Best for livestreams with open registration.

> For livestreams, always choose **Ad-hoc mode** and click **Start ad-hoc game**.

Once the quiz loads, the Quizmaster app will display:

- **Master Code** — for the quizmaster
- **Jury Code** — for reviewing open questions
- **Regie Code** — for controlling visuals/audio
- **Game Code** — for players to join

Your game screen now shows the **Connect screen**, which is what you should stream to your audience.

---

## 🎥 Streaming to Twitch (or others)

To stream your quiz, use broadcasting software. We recommend:

- **OBS Studio** (Open Broadcast Software) — free and powerful
- Alternatives: Streamlabs, vMix, or native options for Zoom/Meet

If you're using **meeting software** like Zoom or Google Meet:

- Simply share your screen
- Press **Start** in the Quizmaster app
- Players can participate in near real time

For **Twitch, YouTube Live, or Facebook Live**, you’ll experience a **streaming delay** (aka transcoding delay).

> ✅ We recommend **Twitch** for best results — it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Setting the QuizWitz player delay

To compensate for stream delay, use the **player interaction delay** in the Jury app.

Here’s how:

1. Start your stream preview — no need to go live yet
2. Open the **Jury app** by entering your Jury Code at [**catlab.tv**](https://catlab.tv)
3. Go to **Game control**
4. Open your livestream in another window, with sound
5. Use a stopwatch
6. In the Jury app, hit the **Buzzer** button and start timing
7. When you hear the buzzer on the livestream, stop the stopwatch
8. Round up the delay (in seconds) and enter it in the **Player interaction delay** field
9. Click **Confirm setting**

> 🎯 It’s better to slightly overestimate the delay. This ensures players see the answer options only **after** you’ve finished reading the question.

---

## 🚀 Going live

Once the delay is set and your players are connected:

- Start your Twitch stream
- Use the Quizmaster app to **launch the quiz**
- QuizWitz will handle timing in the background — no need to pause between questions

---

## 💡 Livestream presentation tips

- **Do not let the quizmaster watch the delayed stream** — they should use only the live Quizmaster app to avoid awkward pauses.
- To interact with the audience, monitor **live comments** on a separate screen — not the video feed.
- Want to switch OBS scenes automatically? Use:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Want to trigger MIDI devices during the game? Try:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Looking for more tools? Visit [**regie.catlab.eu**](https://regie.catlab.eu) — a central hub with additional utilities for automation, scene switching, effects, and more.

> All tools require your **Regie Code** from the Quizmaster app.

---

You're ready to go live! Twitch offers a smooth, responsive platform for hosting large-scale quiz events. Combine that with QuizWitz Live — and your quiz night is set to impress.

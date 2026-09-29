---
id: livestream-tutorial
title: Livestream kvíz
---

# 📺 Pořádání livestream kvízu

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Tahle příručka tě provede nastavením, řešením zpoždění a osvědčenými postupy pro prezentaci.

> 🧭 Pokud jste noví v Quizmaster aplikaci, začněte s [**Quizmaster startup**](../quizmaster/002-startup.md).

---

## 🎤 Nastavení quizmaster

quizmaster je srdcem celé tvé akce. Řídí tempo, prezentuje otázky a udržuje publikum zapojené.

Použij **Quizmaster aplikaci** ke spuštění hry. Spusť QuizWitz Live z editoru kvízu kliknutím na **Start QuizWitz Live**.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Stačí jít na [**kvízwitz.tv**](https://quizwitz.tv) na svém kvízu zařízení a zadat **kvízmaster kód**.

Doporučujeme použít **tablet nebo smartphone**, aby se quizmaster mohl během show volně pohybovat.

---

## 🧩 Výběr správného herního režimu

Když začnete s QuizWitz Live, budete požádáni, abyste si vybrali, jak se hráči připojují:

- **Team codes** - Players or teams each receive a unique code. Hodí se pro předem registrované týmové akce.
- **Single game code** - One shared game code for all players. Nejlepší pro livestreamy s otevřenou registrací.

> Pro dobytek vždy zvolte **Kód hry** a klikněte _Spustit hru ad hoc_.

Po načtení kvízu se aplikace Quizmaster zobrazí:

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

Na herní obrazovce se teď zobrazuje **obrazovka připojení**, kterou bys měl/a streamovat publiku.

---

## 🎥 Streamování na Twitch (nebo jinde)

Ke streamování kvízu použij vysílací software. Doporučujeme:

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Alternativy: Streamlabs, vMix nebo nativní možnosti pro Zoom/Meet

Pokud používáš **software pro schůzky** jako Zoom nebo Google Meet:

- Jednoduše sdílej svou obrazovku
- Stiskněte **Start** v aplikaci Quizmaster
- Hráči se můžou zapojit téměř v reálném čase

U **Twitch, YouTube Live nebo Facebook Live** narazíš na **zpoždění streamu** (také zpoždění překódování).

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Nastavení zpoždění hráče QuizWitz

Chcete-li kompenzovat zpoždění streamu, použijte **zpoždění interakce hráčů** v aplikaci Jury

Tady je postup:

1. Start your stream preview - no need to go live yet
2. Otevřete **Jury App** zadáním vašeho Jury Code na [**kvízwitz.tv**](https://quizwitz.tv)
3. Přejdi na **Game control**
4. Otevři svůj livestream v jiném okně, se zvukem
5. Použij stopky
6. V porotě aplikaci, stiskni tlačítko **Buzzer** a začni načasovat
7. Až v livestreamu uslyšíš bzučák, zastav stopky
8. Zaokrouhli zpoždění nahoru (v sekundách) a zadej ho do pole **Player interaction delay**
9. Klikni na **Confirm setting**

> 🎯 Je lepší zpoždění mírně nadhodnotit. Tím zajistíš, že hráči uvidí možnosti odpovědí až **poté**, co dočteš otázku.

---

## 🚀 Jdeme živě

Jakmile je zpoždění nastavené a hráči jsou připojení:

- Spusť svůj stream na Twitch
- Použijte aplikaci Quizmaster k **spuštění kvízu**
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Tipy pro prezentaci livestreamu

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- Chceš automaticky přepínat scény v OBS? Použij:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Chceš během hry spouštět MIDI zařízení? Vyzkoušej:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Hledáš další nástroje? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Všechny nástroje vyžadují váš **Regie kód** od aplikace Quizmaster

---

Jsi připravený/á jít živě! Twitch nabízí plynulou a svižnou platformu pro pořádání velkých kvízových akcí. Combine that with QuizWitz Live - and your quiz night is set to impress.

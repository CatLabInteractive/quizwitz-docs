---
id: livestream-tutorial
title: Livestream kvíz
---

# 📺 Ako hostovať livestream kvíz

With QuizWitz Live, it’s easy to host a fully interactive livestream quiz on platforms like **Twitch**, **YouTube Live**, or **Facebook Live** - even for large audiences. Táto príručka ťa prevedie nastavením, prácou s oneskorením a osvedčenými postupmi pri prezentovaní.

> 🧭 Ak si v Quizmaster App nový, začni [**sprievodcom spustením pre quizmastera**](../quizmaster/002-startup.md).

---

## 🎤 Nastavenie quizmaster

Quizmaster je srdcom tvojho podujatia. Riadi tempo, prezentuje otázky a udržiava publikum zapojené.

Na vedenie hry použi **Quizmaster App**. Spusť QuizWitz Live z editora kvízu kliknutím na **Spustiť QuizWitz Live**.

> 💡 The Quizmaster App is a **web app** - there’s no installation. Stačí ísť na [**quizwitz.tv**](https://quizwitz.tv) na svojom zariadení quizmastera a zadať **kód quizmastera**.

Odporúčame použiť **tablet alebo smartfón**, aby sa quizmaster mohol počas show voľne pohybovať.

---

## 🧩 Výber správneho herného režimu

Pri spustení QuizWitz Live si vyberieš, ako sa hráči pripoja:

- **Team codes** - Players or teams each receive a unique code. Užitočné pre vopred registrované tímové podujatia.
- **Single game code** - One shared game code for all players. Najlepšie pre livestreamy s otvorenou registráciou.

> Pre livestreamy vždy zvoľ **Zdieľaný herný kód** a klikni na _Spustiť ad-hoc hru_.

Keď sa kvíz načíta, Quizmaster App zobrazí:

- **Quizmaster code** - for the quizmaster
- **Jury Code** - for reviewing open questions
- **Regie Code** - for controlling visuals/audio
- **Game Code** - for players to join

Obrazovka hry teraz zobrazuje **obrazovku pripojenia**, ktorú máš streamovať svojmu publiku.

---

## 🎥 Streamovanie na Twitch (alebo inde)

Na streamovanie kvízu použi vysielací softvér. Odporúčame:

- **OBS Studio** (Open Broadcast Software) - free and powerful
- Alternatívy: Streamlabs, vMix alebo natívne možnosti pre Zoom/Meet

Ak používaš **softvér na stretnutia**, napríklad Zoom alebo Google Meet:

- Jednoducho zdieľaj svoju obrazovku
- V Quizmaster App stlač **Štart**
- Hráči sa môžu zapojiť takmer v reálnom čase

Pri **Twitch, YouTube Live alebo Facebook Live** narazíš na **oneskorenie streamu** (tzv. oneskorenie transkódovania).

> ✅ We recommend **Twitch** for best results - it consistently offers low-latency performance and good viewer sync.

---

## ⏱️ Nastavenie oneskorenia hráča v QuizWitz

Na vyrovnanie oneskorenia streamu použi **oneskorenie interakcie hráčov** v aplikácii poroty.

Takto na to:

1. Start your stream preview - no need to go live yet
2. **Aplikáciu poroty** otvoríš zadaním svojho kódu poroty na [**quizwitz.tv**](https://quizwitz.tv)
3. Prejdi na **Ovládanie hry**
4. Otvor svoj livestream v inom okne, aj so zvukom
5. Použi stopky
6. V aplikácii poroty stlač tlačidlo **Bzučiak** a začni merať čas
7. Keď v livestreame začuješ bzučiak, zastav stopky
8. Zaokrúhli oneskorenie nahor (v sekundách) a zadaj ho do poľa **Oneskorenie interakcie hráča**
9. Klikni na **Potvrdiť nastavenie**

> 🎯 Je lepšie oneskorenie mierne nadhodnotiť. Vďaka tomu hráči uvidia možnosti odpovedí až **po tom**, čo dočítaš otázku.

---

## 🚀 Ideme naživo

Keď je oneskorenie nastavené a hráči sú pripojení:

- Spusti svoj stream na Twitch
- Na **spustenie kvízu** použi Quizmaster App
- QuizWitz will handle timing in the background - no need to pause between questions

---

## 💡 Tipy na prezentovanie livestreamu

- **Do not let the quizmaster watch the delayed stream** - they should use only the live Quizmaster App to avoid awkward pauses.

- To interact with the audience, monitor **live comments** on a separate screen - not the video feed.

- Chceš automaticky prepínať scény v OBS? Použi:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Chceš počas hry spúšťať MIDI zariadenia? Vyskúšaj:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Hľadáš ďalšie nástroje? Visit [**regie.catlab.eu**](https://regie.catlab.eu) - a central hub with additional utilities for automation, scene switching, effects, and more.

> Všetky nástroje vyžadujú tvoj **režijný kód** z Quizmaster App.

---

Si pripravený ísť naživo! Twitch ponúka plynulú a responzívnu platformu na hostovanie rozsiahlych kvízových podujatí. Combine that with QuizWitz Live - and your quiz night is set to impress.

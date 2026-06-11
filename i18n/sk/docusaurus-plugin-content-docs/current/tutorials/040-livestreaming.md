---
id: livestream-tutorial
title: Livestream kvíz
---

# 📺 Ako hostovať livestream kvíz

S QuizWitz Live je jednoduché hostovať plne interaktívny livestream kvíz na platformách ako **Twitch**, **YouTube Live** alebo **Facebook Live** — aj pre veľké publikum. Táto príručka ťa prevedie nastavením, prácou s oneskorením a osvedčenými postupmi pri prezentovaní.

> 🧭 Ak si v aplikácii Quizmaster nový, začni s [**úvodnou príručkou Quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 Nastavenie quizmaster

Quizmaster je srdcom tvojho podujatia. Riadi tempo, prezentuje otázky a udržiava publikum zapojené.

Na spustenie hry použi **aplikáciu Quizmaster**. Spusť QuizWitz Live z editora kvízu kliknutím na **Spustiť QuizWitz Live**.

> 💡 Aplikácia Quizmaster je **webová aplikácia** — nič netreba inštalovať. Stačí prejsť na [**quizwitz.tv**](https://quizwitz.tv) na prezentačnom zariadení a zadať **Master kód**.

Odporúčame použiť **tablet alebo smartfón**, aby sa quizmaster mohol počas show voľne pohybovať.

---

## 🧩 Výber správneho herného režimu

Pri spúšťaní QuizWitz Live si vyberieš režim:

- **Bežný režim** — hráči alebo tímy dostanú každý svoj jedinečný kód. Užitočné pre vopred registrované tímové podujatia.
- **Ad-hoc režim** — jeden spoločný herný kód pre všetkých hráčov. Najlepšie pre livestreamy s otvorenou registráciou.

> Pri livestreamoch vždy vyber **Ad-hoc režim** a klikni na **Spustiť ad-hoc hru**.

Po načítaní kvízu aplikácia Quizmaster zobrazí:

- **Master kód** — pre quizmaster
- **Kód poroty** — na kontrolu otvorených otázok
- **Regie kód** — na ovládanie vizuálov/zvuku
- **Herný kód** — aby sa hráči mohli pripojiť

Obrazovka hry teraz zobrazuje **obrazovku pripojenia**, ktorú máš streamovať svojmu publiku.

---

## 🎥 Streamovanie na Twitch (alebo inde)

Na streamovanie kvízu použi vysielací softvér. Odporúčame:

- **OBS Studio** (Open Broadcast Software) — bezplatný a výkonný
- Alternatívy: Streamlabs, vMix alebo natívne možnosti pre Zoom/Meet

Ak používaš **softvér na stretnutia**, napríklad Zoom alebo Google Meet:

- Jednoducho zdieľaj svoju obrazovku
- Stlač **Štart** v aplikácii Quizmaster
- Hráči sa môžu zapojiť takmer v reálnom čase

Pri **Twitch, YouTube Live alebo Facebook Live** narazíš na **oneskorenie streamu** (tzv. oneskorenie transkódovania).

> ✅ Pre najlepšie výsledky odporúčame **Twitch** — konzistentne ponúka nízku latenciu a dobrú synchronizáciu divákov.

---

## ⏱️ Nastavenie oneskorenia hráča v QuizWitz

Na vykompenzovanie oneskorenia streamu použi **oneskorenie interakcie hráča** v aplikácii Jury.

Takto na to:

1. Spusti náhľad streamu — ešte nemusíš ísť naživo
2. Otvor **aplikáciu Jury** zadaním svojho kódu poroty na [**catlab.tv**](https://catlab.tv)
3. Prejdi na **Ovládanie hry**
4. Otvor svoj livestream v inom okne, aj so zvukom
5. Použi stopky
6. V aplikácii Jury stlač tlačidlo **Bzučiak** a začni merať čas
7. Keď v livestreame začuješ bzučiak, zastav stopky
8. Zaokrúhli oneskorenie nahor (v sekundách) a zadaj ho do poľa **Oneskorenie interakcie hráča**
9. Klikni na **Potvrdiť nastavenie**

> 🎯 Je lepšie oneskorenie mierne nadhodnotiť. Vďaka tomu hráči uvidia možnosti odpovedí až **po tom**, čo dočítaš otázku.

---

## 🚀 Ideme naživo

Keď je oneskorenie nastavené a hráči sú pripojení:

- Spusti svoj stream na Twitch
- Použi aplikáciu Quizmaster na **spustenie kvízu**
- QuizWitz sa postará o časovanie na pozadí — medzi otázkami nemusíš robiť pauzy

---

## 💡 Tipy na prezentovanie livestreamu

- **Nedovoľ quizmaster sledovať oneskorený stream** — mal by používať iba živú aplikáciu Quizmaster, aby sa predišlo trápnym pauzám.

- Ak chceš komunikovať s publikom, sleduj **živé komentáre** na samostatnej obrazovke — nie video prenos.

- Chceš automaticky prepínať scény v OBS? Použi:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Chceš počas hry spúšťať MIDI zariadenia? Vyskúšaj:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Hľadáš ďalšie nástroje? Navštív [**regie.catlab.eu**](https://regie.catlab.eu) — centrálny hub s ďalšími nástrojmi na automatizáciu, prepínanie scén, efekty a ďalšie veci.

> Všetky nástroje vyžadujú tvoj **Regie kód** z aplikácie Quizmaster.

---

Si pripravený ísť naživo! Twitch ponúka plynulú a responzívnu platformu na hostovanie rozsiahlych kvízových podujatí. Skombinuj to s QuizWitz Live — a tvoj kvízový večer určite zaujme.

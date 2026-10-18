---
id: large-venues
title: Veľké priestory, osvetlenie a zvuk
---

# 🏟️ Veľké priestory, osvetlenie a zvuk

QuizWitz Live sa prispôsobí všetkému od kvízu v bare až po veľké priestory so stovkami hráčov. Táto príručka popisuje, čo sa zmení, keď prejdeš na väčšie pódium: sieť, zvuk a synchronizácia osvetlenia (alebo iného javiskového vybavenia) s hrou.

> 🧭 Ak s QuizWitz Live začínaš, pozri si najprv [**sprievodcu spustením pre quizmastera**](../quizmaster/002-startup.md).

---

## 🌐 Stabilné internetové pripojenie

Všetky časti živej hry spolu komunikujú v reálnom čase cez naše servery: herná obrazovka, Quizmaster App, aplikácia poroty, nástroje réžie a zariadenie každého hráča. Stabilné internetové pripojenie je pri veľkom podujatí najdôležitejšou požiadavkou.

- Počítač hernej obrazovky a všetky počítače réžie pripoj **sieťovým káblom**. Nespoliehaj sa pri nich na wifi v priestoroch ani na mobilný hotspot.
- Uisti sa, že hráči majú v celej miestnosti dobré pokrytie wifi alebo mobilnej siete (4G/5G). Plná miestnosť môže preťažiť malú wifi sieť.
- Klikni na **Načítať kvíz** dostatočne pred začiatkom. QuizWitz vopred načíta všetky obrázky, zvuk a video, takže prílohy sa počas kvízu prehrávajú plynulo.

---

## 🔊 Zvuk: všetko hrá cez hernú obrazovku

Všetok zvuk prehráva herná obrazovka: hudbu a zvukové efekty QuizWitz aj každú zvukovú alebo video prílohu, ktorú pridáš k otázkam, kolám alebo kvízu (hudba na obrazovke pripojenia, hudba na konci kola a podobne). Všetko je načasované podľa toho, čo sa deje na obrazovke.

Stačí teda pripojiť **zvukový výstup počítača hernej obrazovky** k mixážnemu pultu alebo ozvučeniu. Nie sú tu žiadne samostatné zvukové pokyny, ktoré by bolo treba spúšťať ručne.

- Posuvníkom hlasitosti na ovládacej lište hry nastavíš úroveň alebo stlmíš všetky zvuky kvízu.
- Ak chceš prehrávať iba vlastný nahraný zvuk, pridaj do odkazu na hru `music=0` (pozri [pokročilé parametre](../advanced/020-advanced-parameters.md)). `connectMusic=0` vypne iba hudbu na obrazovke pripojenia.

---

## 💡 Osvetlenie: MIDI ovládač

MIDI ovládač na [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) premieňa herné udalosti na MIDI noty. Priraď tieto noty k cue vo svojom svetelnom softvéri alebo pulte a svetlá budú automaticky sledovať hru.

My ho používame s [QLC+](https://www.qlcplus.org/) (bezplatný svetelný softvér, ktorý ovláda DMX zariadenia), ale keďže posiela obyčajné MIDI, funguje s väčšinou svetelných pultov a softvérov, ktoré prijímajú MIDI vstup, ako aj so zvukovými pultmi, video mixérmi a ďalším javiskovým vybavením.

### Pripojenie

1. Spusti svoju hru QuizWitz Live. Quizmaster App zobrazí **režijný kód** vedľa kódu quizmastera a kódu poroty.
2. Na počítači pripojenom k tvojmu svetelnému systému otvor [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) v **Google Chrome**. Ovládač používa Web MIDI, ktoré iné prehliadače nemusia podporovať.
3. Keď o to Chrome požiada, povoľ prístup k MIDI.
4. Zadaj režijný kód a klikni na **Connect**.
5. Vyber výstupné MIDI zariadenie (**Output**) a kanál (predvolene kanál 1).

Ak tvoj svetelný softvér beží na tom istom počítači, použi virtuálny MIDI port: **IAC Driver** v macOS alebo nástroj ako **loopMIDI** vo Windows.

> ⚠️ Kartu s ovládačom nechaj otvorenú počas celej hry. Ak ju zatvoríš, MIDI noty sa prestanú posielať.

### Ako to funguje

Každá herná udalosť má vlastné pevné číslo MIDI noty. Keď udalosť nastane, ovládač zahrá túto notu na výstupnom kanáli. Číslo noty je zobrazené na každom tlačidle ovládača.

- **Stlač tlačidlo**, ak chceš poslať jeho notu ručne. Takto si pred show nastavíš a otestuješ priradenie.
- Tlačidlo na chvíľu **sčervenie**, keď ho spustí hra.
- Väčšina udalostí sa posiela iba raz za sebou: ak tá istá udalosť nastane dvakrát po sebe, druhá sa preskočí. Správna a nesprávna odpoveď sa posielajú vždy, takže môžeš bliknúť svetlami pri každej odhalenej odpovedi.
- **Feedback** (voliteľné): vyber MIDI vstup a kanál (predvolene kanál 2). Noty, ktoré tvoj svetelný softvér pošle späť, rozsvietia zodpovedajúce tlačidlá nazeleno, takže vidíš, ktoré cue sú aktívne.

### MIDI noty

| Nota | Udalosť |
|---|---|
| 1 | Úvod hry |
| 2 | Úvod hry: stop |
| 3 | Úvod kola |
| 4 | Úvod kola: stop |
| 5 | Úvod bleskového kola |
| 6 | Úvod bleskového kola: stop |
| 10 | Začiatok otázky |
| 11 | Otázka prebieha |
| 12 | Časovač otázky sa spustí |
| 13 | Časovač otázky sa zastaví |
| 14 | Otázka ukončená |
| 20 | Časovač otázky na 25 % |
| 21 | Časovač otázky na 33 % |
| 22 | Časovač otázky na 50 % |
| 23 | Časovač otázky na 66 % |
| 24 | Časovač otázky na 75 % |
| 30 | Príloha zobrazená |
| 31 | Príloha skrytá |
| 40 | Pred výsledkom otázky |
| 41 | Výsledok otázky |
| 42 | Odhalená správna odpoveď |
| 43 | Odhalená nesprávna odpoveď |
| 44 | Výsledok otázky: stop |
| 45 | Všetci odpovedali správne |
| 46 | Nikto neodpovedal správne |
| 47 | Iba jedna správna odpoveď |
| 50 | Výsledok kola |
| 51 | Výsledok kola: stop |
| 52 | Výsledok bleskového kola |
| 53 | Výsledok bleskového kola: stop |
| 60 | Prestávka |
| 61 | Prestávka: stop |
| 70 | Konečný výsledok |
| 71 | Konečný výsledok: odhalí sa pozícia |
| 72 | Konečný výsledok: odhalí sa víťaz |
| 73 | Konečný výsledok: stop |

### Osvetlenie pre každú otázku

Každej otázke môžeš dať vlastnú svetelnú náladu. V editore kvízu otvor nastavenia otázky a pridaj **Osvetlenie** (v časti *Prezentácia*). Keď sa spustí časovač otázky, ovládač pošle notu pre danú náladu. Otázky bez svetelnej nálady posielajú notu *Predvolené*, aby sa svetlá mohli vrátiť do normálneho stavu.

| Nota | Osvetlenie |
|---|---|
| 100 | Predvolené |
| 101 | Odpočítavanie |
| 102 | Disco párty |
| 103 | Vojnová zóna |
| 104 | Červený alarm |
| 105 | Hviezdna noc |
| 106 | Útek z väzenia |
| 107 | Nebezpečné materiály |
| 108 | Útulná ružová |
| 109 | Atlantis |
| 110 | Džungľa |
| 111 | Modrý oceán |
| 112 | Žltý oceán |
| 113 | Zelený oceán |
| 114 | Fialový oceán |
| 115 | Oranžový oceán |
| 116 | Červený oceán |
| 117 | Červení proti modrým |

Názvy sú len návrhy: čo jednotlivé noty robia, je na tebe a na tvojom svetelnom nastavení.

---

## 🛠️ Ďalšie nástroje réžie

[**regie.catlab.eu**](https://regie.catlab.eu) ponúka ďalšie nástroje pre veľké podujatia. Všetky používajú režijný kód.

- **Teleprompter** - druhá obrazovka quizmastera s automatickým posúvaním a zrkadlením
- **Režisérska obrazovka** - posielaj správy moderátorom na jeden alebo viac javiskových monitorov
- **OBS ovládač** - počas hry automaticky prepína scény v OBS (pozri [livestream kvíz](040-livestreaming.md))
- **Odpočítavací časovač** - zobrazuje časovače QuizWitz na samostatnej obrazovke
- **Duplicitná obrazovka** - zobrazuje kópiu hernej obrazovky na inom monitore

---

## ✅ Príklad zostavy

- **Počítač hernej obrazovky** - pripojený k projektoru alebo LED stene a k ozvučeniu, so sieťovým káblom
- **Počítač réžie** - MIDI ovládač v Chrome, pripojený k tvojmu svetelnému systému, so sieťovým káblom
- **Tablet alebo telefón** - Quizmaster App
- **Notebook alebo tablet** - aplikácia poroty na úpravu skóre a ovládanie hry

> 💡 Pred podujatím urob v priestoroch kompletnú generálku, aby sa dali otestovať svetelné cue, úrovne zvuku a sieť.

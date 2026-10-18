---
id: large-venues
title: Velké prostory, světla a zvuk
---

# 🏟️ Velké prostory, světla a zvuk

QuizWitz Live zvládne hospodský kvíz stejně jako velké prostory se stovkami hráčů. Tahle příručka popisuje, co se změní, když přejdeš na větší pódium: síť, zvuk a synchronizaci tvých světel (nebo jiné scénické techniky) se hrou.

> 🧭 Pokud s QuizWitz Live teprve začínáš, začni [**úvodní příručkou pro quizmastera**](../quizmaster/002-startup.md).

---

## 🌐 Stabilní připojení k internetu

Všechny části živé hry spolu komunikují v reálném čase přes naše servery: herní obrazovka, Quizmaster App, aplikace poroty, nástroje režie i zařízení každého hráče. Stabilní připojení k internetu je pro velkou akci nejdůležitějším požadavkem.

- Počítač pro herní obrazovku i všechny počítače režie připoj **síťovým kabelem**. Nespoléhej u nich na wifi v místě konání ani na mobilní hotspot.
- Zajisti, aby hráči měli v celém sále dobrý signál wifi nebo mobilní sítě (4G/5G). Plný sál dokáže přetížit malou wifi síť.
- Klikni na **Načíst kvíz** s dostatečným předstihem. QuizWitz předem načte všechny obrázky, zvuky a videa, takže se přílohy během kvízu přehrávají plynule.

---

## 🔊 Zvuk: všechno hraje přes herní obrazovku

Veškerý zvuk přehrává herní obrazovka: hudbu a zvukové efekty QuizWitz a každou zvukovou nebo video přílohu, kterou přidáš ke svým otázkám, kolům nebo kvízu (hudba na obrazovce připojení, hudba na konec kola a tak dále). Všechno je načasované podle toho, co se děje na obrazovce.

Stačí tedy připojit **zvukový výstup počítače pro herní obrazovku** k mixážnímu pultu nebo ozvučení. Žádné samostatné zvukové cue není potřeba spouštět ručně.

- Posuvníkem hlasitosti v ovládací liště hry nastavíš úroveň nebo ztlumíš všechny zvuky kvízu.
- Pokud chceš přehrávat jen vlastní nahraný zvuk, přidej k odkazu na hru `music=0` (viz [pokročilé parametry](../advanced/020-advanced-parameters.md)). `connectMusic=0` vypne jen hudbu na obrazovce připojení.

---

## 💡 Světla: MIDI ovladač

MIDI ovladač na [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) převádí herní události na MIDI noty. Přiřaď tyto noty k cue ve svém světelném softwaru nebo pultu a světla budou hru sledovat automaticky.

My ho používáme s [QLC+](https://www.qlcplus.org/) (bezplatný světelný software, který ovládá DMX světla), ale posílá obyčejné MIDI, takže funguje s většinou světelných pultů a programů s MIDI vstupem a také se zvukovými pulty, video mixy a další scénickou technikou.

### Připojení

1. Spusť svou hru QuizWitz Live. Quizmaster App zobrazí **kód režie** vedle kódu quizmastera a kódu poroty.
2. Na počítači připojeném ke světelnému systému otevři [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) v **Google Chrome**. Ovladač používá Web MIDI, které jiné prohlížeče nemusí podporovat.
3. Až se Chrome zeptá, povol přístup k MIDI.
4. Zadej kód režie a klikni na **Connect**.
5. V části **Output** vyber MIDI zařízení a kanál (výchozí je kanál 1).

Pokud světelný software běží na stejném počítači, použij virtuální MIDI port: **IAC Driver** v macOS nebo nástroj jako **loopMIDI** ve Windows.

> ⚠️ Nech kartu s ovladačem otevřenou po celou dobu hry. Když ji zavřeš, MIDI noty se přestanou posílat.

### Jak to funguje

Každá herní událost má vlastní pevné číslo MIDI noty. Když událost nastane, ovladač zahraje tuto notu na výstupním kanálu. Číslo noty je uvedené na každém tlačítku ovladače.

- **Stiskem tlačítka** pošleš jeho notu ručně. Využij to k nastavení a otestování přiřazení před show.
- Když hra tlačítko spustí, na chvíli se rozsvítí **červeně**.
- Většina událostí se posílá jen jednou po sobě: pokud stejná událost nastane dvakrát za sebou, druhá se přeskočí. Správná a špatná odpověď se posílají pokaždé, takže můžeš bliknout světly u každé odhalené odpovědi.
- **Zpětná vazba** (volitelné): vyber MIDI vstup a kanál (výchozí je kanál 2). Noty, které světelný software pošle zpět, rozsvítí odpovídající tlačítka zeleně, takže vidíš, která cue jsou aktivní.

### MIDI noty

| Nota | Událost |
|---|---|
| 1 | Úvod hry |
| 2 | Úvod hry: stop |
| 3 | Úvod kola |
| 4 | Úvod kola: stop |
| 5 | Úvod bleskového kola |
| 6 | Úvod bleskového kola: stop |
| 10 | Začátek otázky |
| 11 | Otázka probíhá |
| 12 | Časovač otázky se spouští |
| 13 | Časovač otázky se zastavuje |
| 14 | Otázka skončila |
| 20 | Časovač otázky na 25 % |
| 21 | Časovač otázky na 33 % |
| 22 | Časovač otázky na 50 % |
| 23 | Časovač otázky na 66 % |
| 24 | Časovač otázky na 75 % |
| 30 | Příloha zobrazena |
| 31 | Příloha skryta |
| 40 | Před výsledkem otázky |
| 41 | Výsledek otázky |
| 42 | Odhalena správná odpověď |
| 43 | Odhalena špatná odpověď |
| 44 | Výsledek otázky: stop |
| 45 | Všichni odpověděli správně |
| 46 | Nikdo neodpověděl správně |
| 47 | Jen jedna správná odpověď |
| 50 | Výsledek kola |
| 51 | Výsledek kola: stop |
| 52 | Výsledek bleskového kola |
| 53 | Výsledek bleskového kola: stop |
| 60 | Přestávka |
| 61 | Přestávka: stop |
| 70 | Konečný výsledek |
| 71 | Konečný výsledek: odhalení pořadí |
| 72 | Konečný výsledek: odhalení vítěze |
| 73 | Konečný výsledek: stop |

### Osvětlení pro každou otázku

Každé otázce můžeš dát vlastní světelnou náladu. V editoru kvízu otevři nastavení otázky a přidej **Osvětlení** (v části *Zobrazení*). Když se spustí časovač otázky, ovladač pošle notu pro tuto náladu. Otázky bez světelné nálady posílají notu *Výchozí*, aby se světla mohla vrátit do běžného stavu.

| Nota | Osvětlení |
|---|---|
| 100 | Výchozí |
| 101 | Odpočet |
| 102 | Disco párty |
| 103 | Válečná zóna |
| 104 | Červený alarm |
| 105 | Hvězdná noc |
| 106 | Útěk z vězení |
| 107 | Nebezpečné materiály |
| 108 | Útulná růžová |
| 109 | Atlantis |
| 110 | Džungle |
| 111 | Modrý oceán |
| 112 | Žlutý oceán |
| 113 | Zelený oceán |
| 114 | Fialový oceán |
| 115 | Oranžový oceán |
| 116 | Červený oceán |
| 117 | Červení versus modří |

Názvy jsou jen návrhy: co která nota udělá, záleží na tobě a tvém světelném nastavení.

---

## 🛠️ Další nástroje režie

[**regie.catlab.eu**](https://regie.catlab.eu) nabízí další nástroje pro velké akce. Všechny používají kód režie.

- **Teleprompter** - druhá obrazovka pro quizmastera s automatickým posouváním a zrcadlením
- **Director screen** - posílej zprávy lidem na pódiu na jeden nebo více pódiových monitorů
- **OBS controller** - automaticky přepínej scény v OBS během hry (viz [livestream kvíz](040-livestreaming.md))
- **Countdown timer** - zobraz časovače QuizWitz na samostatné obrazovce
- **Duplicate screen** - zobraz kopii herní obrazovky na dalším monitoru

---

## ✅ Ukázková sestava

- **Počítač pro herní obrazovku** - připojený k projektoru nebo LED stěně a k ozvučení, se síťovým kabelem
- **Počítač režie** - MIDI ovladač v Chrome, připojený ke světelnému systému, se síťovým kabelem
- **Tablet nebo telefon** - Quizmaster App
- **Notebook nebo tablet** - aplikace poroty, pro úpravu skóre a ovládání hry

> 💡 Před akcí udělej na místě kompletní zkoušku, abys mohl/a otestovat světelná cue, úrovně zvuku a síť.

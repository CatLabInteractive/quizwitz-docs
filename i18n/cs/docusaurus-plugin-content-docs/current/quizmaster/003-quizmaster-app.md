---
id: quizmaster-app
title: Aplikace Quizmaster
---

# 🎛️ Použití aplikace Quizmaster

Jako quizmaster máš hru QuizWitz Live plně pod kontrolou. Nejdůležitější je vědět tohle:

> The game **only progresses when you click** - nothing moves on the game screen until you tell it to.

Díky tomu máš tempo a načasování plně pod kontrolou, ale zároveň to znamená, že budeš hodně klepat. Pojďme si projít, jak aplikace funguje.

---

## 🔁 Průběh kvízu

Struktura kvízu odpovídá tomu, jak byl vytvořen v editoru, ale většina kvízů projde těmito fázemi:

---

### 🎬 Úvod kola

Před začátkem každého kola uvidíš obrazovku s úvodem kola.

- Ty řídíš, kdy se přehraje **animace úvodu kola**.
- Kliknutím na **„Start“** spustíš kolo a přejdeš na první otázku.

---

### ❓ Pokládání otázky

Každá otázka má svou vlastní obrazovku v aplikaci Quizmaster:

![Quizmaster App - spustit otázku](/images/quizmaster-app-start-question.png)

Uvidíš:

- **Question number** - e.g. `1.1` means the first question of the first round
- **Question type** - such as Multiple Choice, with relevant scoring modifiers
- **Long version of the question** - for you to read out loud
- **Question info** - including timer duration and available points
- **Short question** - the version shown on the game screen
- **Start question button** - immediately starts the timer
- **Possible answers** - displayed in the correct order (for multiple choice)

Otázka zůstane v tvé aplikaci viditelná, dokud nenastane jedna z těchto možností:

- Všichni hráči odpověděli
- Vypršel časovač

> 🔎 Více o typech otázek a kol najdeš v **Průvodci tvůrce kvízu**.

---

### ✅ Zpětná vazba k otázce

Po skončení otázky se odhalí správná odpověď. What you see depends on the question type - this example shows a multiple choice result screen:

![Quizmaster App - zpětná vazba](/images/quizmaster-app-question-feedback.png)

Obsahuje:

- **Číslo otázky**
- **Krátký text otázky**
- **Správná odpověď**
- **Answer spread** - in numbers and percentages
- **Long feedback** - extra info to read aloud
- **Continue button** - advances to the next question
- **Fastest 100 answers** - shown at the bottom of the screen

---

### 📊 Závěr kola

Když kolo skončí, uvidíš obrazovku **Round Outro**, která odhalí dosavadní pořadí.

![Quizmaster App - round outro](/images/quizmaster-app-round-outro.png)  
![QuizWitz - round outro game screen](/images/round-outro.png)

Ve své aplikaci:

- Uvidíš **100 nejlepších hráčů** a můžeš v nich posouvat
- Klepnutím na pozici hráče je zvýrazníte na obrazovce hry
- Od 2. kola dál také uvidíš, o kolik míst se každý hráč posunul:
  - **Zelená** = posun nahoru
  - **Červená** = posun dolů
  - **Bílá** = beze změny

Hráči během závěru uvidí **své vlastní umístění** na svém zařízení.

---

### 🏆 Konec kvízu

At the end of the quiz, it’s time for a **winner reveal party** - complete with confetti and player emojis flying across the screen.

![QuizWitz - obrazovka hry](/images/game-outro.png)

- Výchozí nastavení zobrazí **12 nejlepších hráčů**
- Počet zobrazených hráčů si můžeš upravit v **pokročilých nastaveních hry**

> 🎉 Fun tip: The emoji your players choose will dance around the screen - even if they picked the smiling turd.

---

To je vše, co potřebujete vědět, abyste mohli spustit kvíz pomocí aplikace Quizmaster . Teď máš všechno připravené, abys svou akci vedl/a sebejistě a se stylem!

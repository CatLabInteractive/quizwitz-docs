---
id: emerald-theme
title: Téma Emerald
---

# Motív Emerald

Motív Emerald je najjednoduchší spôsob, ako si prispôsobiť vzhľad tvojej hry v QuizWitz. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks - drastically.

:::tip
Môžeš použiť náš [tester motívu](https://client.quizwitz.com/test.html?theme=emerald), aby si videl/a, ako budú tvoje nastavenia vyzerať.
:::

![Snímka obrazovky motívu Emerald](/images/emerald/emerald.png)

## Vyber motív Emerald

V **nastaveniach kvízu** vyber **Motív** a zapni **Emerald**.

Kvíz s motívom Emerald si môžeš otestovať [tu](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Snímka obrazovky nastavení kvízu](/images/emerald/quiz-settings.png)

## Prílohy

### Prílohy kvízu

Jednoznačne najjednoduchší spôsob, ako zmeniť vzhľad a dojem z hry, je priložiť ku kvízu obrázky. Otvor **nastavenia kvízu** a posuň sa nadol do sekcie **Prílohy**. Here you can upload images that will be used as background, client logo, connect - and wait screens (for conference - and live quizzes), and more.

![Snímka obrazovky príloh kvízu](/images/emerald/quiz-attachments.png)

### Prílohy kola

Môžeš nahrať aj obrázky alebo videá, ktoré sa prehrajú pred hrou a po nej. Platí to aj pre kolá: nájdi obrázok, ktorý chceš použiť ako úvod kola, prejdi do **nastavení kola**, vypni **Zobraziť úvod kola**, aby sa skryl predvolený úvod kola, a nahraj svoj obrázok alebo video ako **Zobraziť pred kolom**. Keď sa kolo začne, namiesto predvoleného úvodu sa zobrazí obrázok alebo video.

![Snímka obrazovky príloh kola](/images/emerald/round-settings.png)

:::tip
Pre najlepšie výsledky použi obrázky a videá s rozlíšením 1920 x 1080.
:::

:::info
Po pohraní sa s prílohami skončíme s niečím [takýmto](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Snímka obrazovky motívu Emerald s prílohami kvízu](/images/emerald/emerald-with-attachments.png)

### Hudba

Všetku hudbu v hre môžeš tiež nahradiť prílohami. Všetky zvukové súbory nahrané do slotov **počas otázky** sa budú prehrávať počas odpočítavania otázky.

## Modifikátory motívu Emerald

Okrem príloh môžeš motív Emerald upravovať aj pomocou **query parameters**. These are parameters you can add to the **advanced game options** URL - and they change the look of the theme.

Na to začneme s ukážkovým kvízom (bez akýchkoľvek príloh):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Keď spustíš vyššie uvedený kvíz, hra bude v predvolenom štýle Emerald. Poďme to zmeniť.

:::tip
Najjednoduchší spôsob, ako s týmito parametrami experimentovať, je použiť náš [tester motívu](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
When you are done experimenting, you can copy - paste the parameters to your advanced game options URL.
:::

Dostupné modifikátory sú:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma - separated)
- optionBorderColors (4 colors, comma - separated)

Navyše si môžeš nastaviť predvolené písmo:

- defaultFont
- headerFont

Tieto písma musia byť URL adresy verejne dostupných súborov písiem.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( - for example ff1b6b-45caff). (Nezabudni, že symbol # sa nemá pridávať.)

:::note
Query parameters sa musia začínať otáznikom ( ? ) a každý parameter musí byť oddelený ampersandom ( & ). Viac informácií o query parameters nájdeš na [wikipédii](https://en.wikipedia.org/wiki/Query_string).
:::

Pridaním týchto parametrov do URL svojej hry môžeš upraviť farby v motíve:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Snímka obrazovky motívu Emerald s vlastnými modifikátormi](/images/emerald/theme_properties.png)

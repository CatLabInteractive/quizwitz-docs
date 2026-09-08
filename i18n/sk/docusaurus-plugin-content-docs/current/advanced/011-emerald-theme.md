---
id: emerald-theme
title: Téma Emerald
---

# Motív Emerald

Motív Emerald je najjednoduchší spôsob, ako si prispôsobiť vzhľad tvojej hry v QuizWitz. Predvolene má motív čistý modro-zelený štýl s výraznými farbami možností, ale kombinovaním príloh kvízu a modifikátorov motívu môžeš jeho vzhľad zmeniť — poriadne výrazne.

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

Jednoznačne najjednoduchší spôsob, ako zmeniť vzhľad a dojem z hry, je priložiť ku kvízu obrázky. Otvor **nastavenia kvízu** a posuň sa nadol do sekcie **Prílohy**. Tu môžeš nahrať obrázky, ktoré sa použijú ako pozadie, logo klienta, obrazovky pripojenia a čakania (pre konferenčné a živé kvízy) a ďalšie.

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

Okrem príloh môžeš motív Emerald upravovať aj pomocou **query parameters**. Sú to parametre, ktoré môžeš pridať do URL **pokročilých možností hry** — a zmenia vzhľad motívu.

Na to začneme s ukážkovým kvízom (bez akýchkoľvek príloh):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Keď spustíš vyššie uvedený kvíz, hra bude v predvolenom štýle Emerald. Poďme to zmeniť.

:::tip
Najjednoduchší spôsob, ako s týmito parametrami experimentovať, je použiť náš [tester motívu](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Keď budeš s experimentovaním hotový/á, môžeš parametre skopírovať a vložiť do svojej URL pokročilých možností hry.
:::

Dostupné modifikátory sú:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 farby oddelené čiarkou)
- optionBorderColors (4 farby oddelené čiarkou)

Navyše si môžeš nastaviť predvolené písmo:

- defaultFont
- headerFont

Tieto písma musia byť URL adresy verejne dostupných súborov písiem.

Každý z týchto modifikátorov môže obsahovať jednu farbu vo formáte HTML hex (ff0000) alebo lineárny prechod zadaním viacerých farieb oddelených znamienkom mínus (napríklad ff1b6b-45caff). (Nezabudni, že symbol # sa nemá pridávať.)

:::note
Query parameters sa musia začínať otáznikom ( ? ) a každý parameter musí byť oddelený ampersandom ( & ). Viac informácií o query parameters nájdeš na [wikipédii](https://en.wikipedia.org/wiki/Query_string).
:::

Pridaním týchto parametrov do URL svojej hry môžeš upraviť farby v motíve:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Snímka obrazovky motívu Emerald s vlastnými modifikátormi](/images/emerald/theme_properties.png)

---
id: emerald-theme
title: Emerald motiv
---

# Motiv Emerald

Motiv Emerald je nejjednodušší způsob, jak upravit vzhled tvé hry QuizWitz. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks - drastically.

:::tip
Můžeš použít náš [tester motivu](https://client.quizwitz.com/test.html?theme=emerald), abys viděl/a, jak budou tvoje nastavení vypadat.
:::

![Snímek obrazovky motivu Emerald](/images/emerald/emerald.png)

## Vyber motiv Emerald

V **Nastavení kvízu** vyber **Motiv** a zapni **Emerald**.

Kvíz s motivem Emerald si můžeš vyzkoušet [tady](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Snímek obrazovky nastavení kvízu](/images/emerald/quiz-settings.png)

## Přílohy

### Přílohy kvízu

Zdaleka nejjednodušší způsob, jak změnit vzhled a dojem ze hry, je připojit ke kvízu obrázky. Otevři **Nastavení kvízu** a sjeď dolů do sekce **Přílohy**. Here you can upload images that will be used as background, client logo, connect - and wait screens (for conference - and live quizzes), and more.

![Snímek obrazovky příloh kvízu](/images/emerald/quiz-attachments.png)

### Přílohy kola

Můžeš také nahrát obrázky nebo videa, která se přehrají před hrou a po ní. To platí i pro kola: najdi obrázek, který chceš použít jako úvod kola, přejdi do **nastavení kola**, vypni **Zobrazit úvod kola**, aby se skryl výchozí úvod kola, a nahraj svůj obrázek nebo video jako **Zobrazit před kolem**. Když kolo začne, místo výchozího úvodu se zobrazí obrázek nebo video.

![Snímek obrazovky příloh kola](/images/emerald/round-settings.png)

:::tip
Pro nejlepší výsledky používej obrázky a videa v rozlišení 1920 × 1080.
:::

:::info
Po hraní si s přílohami skončíme u něčeho [takového](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Snímek obrazovky motivu Emerald s přílohami kvízu](/images/emerald/emerald-with-attachments.png)

### Hudba

Veškerou hudbu ve hře můžeš také nahradit přílohami. Všechny zvukové soubory nahrané do slotů **během otázky** se budou přehrávat během odpočtu otázky.

## Úpravy motivu Emerald

Kromě příloh můžeš motiv Emerald upravovat také pomocí **parametrů dotazu**. These are parameters you can add to the **advanced game options** URL - and they change the look of the theme.

Začneme ukázkovým kvízem (bez jakýchkoli příloh):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Když spustíš výše uvedený kvíz, hra bude ve výchozím stylu Emerald. Pojďme to změnit.

:::tip
Nejjednodušší způsob, jak s těmito parametry experimentovat, je použít náš [tester motivu](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
When you are done experimenting, you can copy - paste the parameters to your advanced game options URL.
:::

Dostupné úpravy jsou:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma - separated)
- optionBorderColors (4 colors, comma - separated)

Navíc můžeš nastavit výchozí písmo:

- defaultFont
- headerFont

Tato písma musí být URL adresy veřejně dostupných souborů písem.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( - for example ff1b6b-45caff). (Pozor, symbol # se nemá přidávat.)

:::note
Parametry dotazu musí začínat otazníkem ( ? ) a jednotlivé parametry musí být oddělené ampersandem ( & ). Další informace o parametrech dotazu najdeš na [Wikipedii](https://en.wikipedia.org/wiki/Query_string).
:::

Přidáním těchto parametrů do URL hry můžeš upravit barvy v motivu:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Snímek obrazovky motivu Emerald s vlastními úpravami](/images/emerald/theme_properties.png)

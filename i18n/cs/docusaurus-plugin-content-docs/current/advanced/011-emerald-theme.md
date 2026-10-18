---
id: emerald-theme
title: Emerald motiv
---

# Motiv Emerald

Motiv Emerald je nejjednodušší způsob, jak upravit vzhled tvé hry QuizWitz. Ve výchozím nastavení má motiv čistý modro-zelený styl s výraznými barvami možností, ale kombinací příloh kvízu a úprav motivu můžeš jeho vzhled změnit - a to pořádně.

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

Zdaleka nejjednodušší způsob, jak změnit vzhled a dojem ze hry, je připojit ke kvízu obrázky. Otevři **Nastavení kvízu** a sjeď dolů do sekce **Přílohy**. Tady můžeš nahrát obrázky, které se použijí jako pozadí, logo klienta, obrazovky připojení a čekací obrazovky (pro konferenční a živé kvízy) a další.

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

Kromě příloh můžeš motiv Emerald upravovat také pomocí **parametrů dotazu**. Jsou to parametry, které můžeš přidat do URL **pokročilých možností hry** - a změní vzhled motivu.

Začneme ukázkovým kvízem (bez jakýchkoli příloh):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Když spustíš výše uvedený kvíz, hra bude ve výchozím stylu Emerald. Pojďme to změnit.

:::tip
Nejjednodušší způsob, jak s těmito parametry experimentovat, je použít náš [tester motivu](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Až budeš s experimentováním hotový/á, můžeš parametry zkopírovat a vložit do URL pokročilých možností hry.
:::

Dostupné úpravy jsou:

- backgroundColor
- mainColor
- accentColor
- containerColor (kontejner otázky; může obsahovat hodnotu alfa, například ffffff40)
- timerBackgroundColor
- headerTextColor
- optionTextColor
- dialogTextColor
- pieChartLabelColor
- ladderColor
- optionColors (4 barvy oddělené čárkou)
- optionBorderColors (4 barvy oddělené čárkou)

Upravit lze i vzhled zařízení hráčů:

- remoteBackgroundColor
- remoteTextColor
- remoteQuestionColor
- remoteQuestionTextColor
- remoteOptionOutlineColor
- remoteOutlineColor
- remoteContainerBackground
- remoteContainerText
- remoteOptionColors (4 barvy oddělené čárkou)

Navíc můžeš nastavit výchozí písmo:

- defaultFont
- headerFont

Tato písma musí být URL adresy veřejně dostupných souborů písem.

Nakonec `hideLogo=1` skryje logo QuizWitz.

Každá z těchto úprav může obsahovat jednu barvu ve formátu HTML hex (ff0000), nebo lineární přechod zadáním více barev oddělených symbolem mínus ( - například ff1b6b-45caff). (Pozor, symbol # se nemá přidávat.)

:::note
Parametry dotazu musí začínat otazníkem ( ? ) a jednotlivé parametry musí být oddělené ampersandem ( & ). Další informace o parametrech dotazu najdeš na [Wikipedii](https://en.wikipedia.org/wiki/Query_string).
:::

Přidáním těchto parametrů do URL hry můžeš upravit barvy v motivu:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Snímek obrazovky motivu Emerald s vlastními úpravami](/images/emerald/theme_properties.png)

### Přizpůsobení motivu z editoru kvízu

Nejrychlejší způsob, jak nastavit úpravy, je tlačítko **Přizpůsobit motiv** v nastavení kvízu, pod seznamem motivů. Otevře tester motivu s tvým kvízem, kde můžeš vybrat barvy a písma, které motiv nabízí, a hned vidět výsledek. Klikni na **Použít nastavení na kvíz** a editor vybere motiv a uloží úpravy do tvého kvízu.

Tlačítko vyžaduje uložený kvíz a Premium a funguje na počítači: tester motivu se na telefon nevejde.

### Uložení úprav do kvízu

Parametry nemusíš ručně přidávat ke každému odkazu. V editoru kvízu otevři **Sdílet nebo vložit**, rozbal **Pokročilé možnosti hry**, vlož parametry (bez úvodního otazníku, například `backgroundColor=ff1b6b-45caff&accentColor=00ff87`) do pole **surový dotaz** a klikni na **Uložit nastavení do kvízu**. Od té doby je obsahuje každý herní i sdílecí odkaz kvízu.

Asistent QuizWitz AI to může udělat i za tebe: požádej ho, aby změnil barvu pozadí kvízu, a on přepne kvíz na motiv Emerald a úpravy uloží.

## Vlastní zobrazení otázek

Motiv Emerald nabízí také dvě další rozvržení obrazovky pro otázku s obrázkem nebo videem ve slotu **Během otázky**; vybírají se u každé otázky volbou **Vlastní zobrazení** v nastavení otázky:

- **Příloha přes celou obrazovku** - obrázek nebo video vyplní celou herní obrazovku, text otázky a možnosti se nevykreslí
- **Příloha přes celou obrazovku bez časovače** - totéž, navíc se skryje i odpočet

Hráči čtou otázku a odpovídají na svých zařízeních. Podrobnosti najdeš v části [psaní otázek](../editor/005-writing-questions.md).

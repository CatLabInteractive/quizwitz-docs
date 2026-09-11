---
id: theme-design-guide
title: Průvodce návrhem motivu
---

# Průvodce návrhem motivu

[Motivy](/docs/advanced/theming) vysvětlují, jak se motiv QuizWitz staví: v Adobe Animate, exportovaný jako knihovna CreateJS. Tato stránka se věnuje kroku, který tomu předchází - **návrhu** motivu.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Tato stránka tuto podobu popisuje a zároveň slouží jako seznam podkladů k dodání, když si od grafika vyžádáš cenovou nabídku.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Pokud chceš změnit jen barvy, písma a pozadí, nic z tohoto nepotřebuješ - uprav si místo toho [motiv Emerald](/docs/advanced/emerald-theme).
:::

:::info[Podívej se, jak to běží]
Každou zde popsanou obrazovku si můžeš naživo přehrát s ukázkovými daty v **testeru motivů** na adrese [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Načte motiv a nabídne nabídku testovacích obrazovek: otázky s přílohou i bez ní, rozložení odpovědí pro malou i velkou skupinu, pořadí, intra kol, obrazovku připojení s logem klienta i bez něj a tak dále. Přidej do adresy `?theme=emerald`, aby ses podíval na [motiv Emerald](/docs/advanced/emerald-theme). Ten, kdo motiv staví, používá stejnou stránku ke kontrole během skládání.
:::

---

## Co navrhuješ

Hru QuizWitz hraje celý sál najednou a vždy jsou ve hře dvě obrazovky:

- **Herní obrazovka** - projektor nebo televize, 1920 × 1080. Otázky, odpovědi, jak se rozložily odpovědi sálu, pořadí. Tohle navrhuješ ty.
- **Telefon každého hráče**, na kterém píše svou odpověď. To je webová stránka s pevným rozvržením; styluje se z tvého seznamu barev, rozvržení neurčuješ ty.

Motiv je celý vizuální plášť herní obrazovky: pozadí, typografie, barva, způsob, jakým se prezentuje otázka se čtyřmi možnostmi, jak se buduje pořadí, jak se ohlašuje kolo.

---

## Eight frames and an element sheet

Hra má desítky odlišných stavů obrazovky, ale většina jsou varianty téhož rozvržení. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Obrazovka bez vlastní grafiky se vrací k obecnému rámci.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Rámec                                                           | Also covers                                                               |
| - | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1 | [General frame](#frame-1---the-general-frame)                   | Thirteen screen states with no artwork of their own                       |
| 2 | [Connect screen](#frame-2---the-connect-screen)                 | Draw it twice: with a client logo and without one         |
| 3 | [Waiting screen](#frame-3---the-waiting-screen)                 | -                                                                         |
| 4 | [Question screen](#frame-4---the-question-screen)               | -                                                                         |
| 5 | [Question with attachment](#frame-5---question-with-attachment) | The full-screen attachment, and attachments shown between questions       |
| 6 | [Answer screen](#frame-6---the-answer-screen)                   | The answer screen for open questions and for questions with an attachment |
| 7 | [Standings and winner](#frame-7---standings-and-winner)         | The standings between rounds and the final winner                         |
| 8 | [Round intro](#frame-8---the-round-intro)                       | All six round categories                                                  |

:::note[About the screenshots]
Obrazovky níže pocházejí z existujícího motivu. They show **which elements appear on each screen and when**. Nejsou referencí pro styl _ani_ pro rozvržení: kam tento motiv umisťuje svou otázku, své možnosti a svůj časovač, je jeho vlastní rozhodnutí, a to tvoje se může úplně lišit.
:::

### Rámec 1 - obecný rámec

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. Výběr otázek a dlouhá otázka mohou dostat vlastní kompozici, pokud to tak chceš; jinak používají tento rámec.

Dva herní momenty na tomtéž rámci: výběr otázek a bodový žebříček.

![Obecný rámec s výběrem otázek o třech řádcích](/images/theme-design/frame1-general-multiquestion.png)

![Obecný rámec s bodovým žebříčkem o pěti úrovních](/images/theme-design/frame1-general-strikeladder.png)

Podívej se, jak málo mají společného. Výběr dává své tři řádky do panelu s obrysem; žebříček nemá panel vůbec, jen řádky oddělené tenkými linkami. Co ty dva sdílejí, je pozadí a pruh záhlaví nad nimi - všechno pod tím patří konkrétní obrazovce a vyplňuje to hra, ne ty.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Co musí tenhle rámec zvládnout, je unést je: navrhni obsahovou plochu jako prázdnou, neutrální a prostornou zónu, která funguje stejně dobře s orámovaným panelem, s holým seznamem i s tabulkou řádků. Pozadí, které je uprostřed rušné, nebo záhlaví, které funguje jen s panelem zastrčeným těsně pod ním, je místo, kde se to láme.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Obrazovka připojení s logem klienta](/images/theme-design/frame2-connect.png)

![Obrazovka připojení bez loga klienta](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Čekací obrazovka](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Obrazovka otázky se čtyřmi textovými možnostmi](/images/theme-design/frame3-question-options.png)

![Obrazovka otázky s vlajkami jako možnostmi odpovědi](/images/theme-design/frame3-question-emoji.png)

Otázka bez možností - hráči píší odpověď na telefonu. Obrazovka je skoro prázdná a hlavním prvkem se stává časovač:

![Otevřená otázka jen s otázkou a velkým časovačem](/images/theme-design/frame3-question-open.png)

Okamžik, kdy vyprší čas. Přes obrazovku se objeví bublina zpětné vazby a časovač je prázdný:

![Obrazovka otázky ve stavu vypršení času](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. Příloha se zmenší tak, aby se vešla do rámečku, který nakreslíš, takže v něm musí přijatelně vypadat obrázek na šířku i na výšku.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Obrazovka otázky s obrázkem uprostřed](/images/theme-design/frame4-question-attachment.png)

Příloha sama o sobě, přes celou obrazovku:

![Příloha na celou obrazovku](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Nejdřív rozložení, zatím bez čehokoli označeného:

![Obrazovka odpovědi s rozložením](/images/theme-design/frame5-answer-mc-spread.png)

Pak se správná možnost zaškrtne a špatné se přeškrtnou:

![Obrazovka odpovědi s odhalenou správnou možností](/images/theme-design/frame5-answer-mc-reveal.png)

A pokud má otázka vysvětlení, spadne přes grafiku bublina. Nech na ni místo - přistane přes všechno, co jsi navrhl:

![Obrazovka odpovědi s bublinou vysvětlení](/images/theme-design/frame5-answer-mc-explanation.png)

U malé skupiny je tentýž moment seznamem skóre místo grafu:

![Obrazovka odpovědi pro malou skupinu](/images/theme-design/frame5-answer-mc-small.png)

U otevřené otázky graf ukazuje, kolik hráčů ji mělo správně:

![Obrazovka odpovědi pro otevřenou otázku](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Pořadí se šesti řádky hráčů](/images/theme-design/frame6-roundoutro.png)

Závěrečné odpočítávání jmenuje jednoho hráče po druhém, od posledního místa k prvnímu - místo, skóre a název týmu ve světle reflektorů. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![Odpočítávání vítěze jmenující jednoho hráče](/images/theme-design/frame6-winner-countdown.png)

![Konečné pořadí](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Kategorií je šest: věda a technika, příroda, zábava a hudba, sport, umění, historie.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Intro kola pro kategorii příroda](/images/theme-design/frame7-roundintro-nature.png)

![Intro kola pro kategorii věda](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Bez postavy se z intra kola stává grafický, typografický nebo ilustrativní moment. Dva přístupy udrží práci v rozumném rozsahu: jedna kompozice s barevnou nebo ikonovou variantou pro každou kategorii, nebo jediné univerzální ohlášení, ve kterém se mění jen název kola. Šest opravdu odlišných inter je hodně práce na pár sekund na obrazovce.

---

## List prvků

Dvě skupiny prvků na jednom listu, každý nakreslený jednou a používaný všude.

**Stavební kameny obsahu.** Ty vyplňují obsahovou plochu obecného rámce. Obrazovky, které se k němu vracejí, se z nich skládají, takže to, co tu nakreslíš, rozhoduje o vzhledu jich všech:

- **panel**: výplň, obrys, zaoblení rohů - kontejner, ve kterém sedí seznam nebo blok textu
- **řádek seznamu**: opakující se jednotka jakéhokoli seznamu, s vlastním pozadím nebo bez něj
- **oddělovač**: linka mezi řádky tam, kde není panel
- **dvojice popisek a hodnota**: krátký popisek vlevo, hodnota vpravo

**Ovládací prvky.** Nakreslené jednou, používané na každé obrazovce:

- **tlačítko** ve svých čtyřech stavech: klid, najetí myší, stisknuto, zakázáno
- symboly pro **správně** a **špatně**
- **posuvník**, **zaškrtávací políčko**, **rozbalovací seznam**
- kde sedí **logo QuizWitz**

---

## Co je rozhodnuto za tebe

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Které obrazovky se vracejí k obecnému rámci a jak.**
- **Jak se šest kategorií mapuje na grafiku intra kola.** To přiřazení je nastavení v konfiguraci, takže jedno intro se dá znovu použít pro několik kategorií.
- **Veškeré časování a všechny délky animací.**
- **Zvuk.** Motiv může mít vlastní hudbu a zvukové efekty, ale to je samostatný podklad k dodání a není součástí zadání návrhu.

---

## Pravidla návrhu

Žádné z nich neomezuje tvůj vizuální návrh. Týkají se toho, jak je postavený soubor.

### Formát

- **1920 × 1080 pixelů**, přesně. Jeden rámec na obrazovku.
- Pracuj **vektorově**, kde to jde. Tam, kde použiješ rastr (fotky, textury): alespoň 2× velikost zobrazení.
- Dokument Animate běží na **24 snímcích za sekundu**. Podstatné, pokud dodáváš nápady na pohyb.
- Nech **5% okraj** u krajů volný od podstatných informací. Projektory ořezávají.

### Struktura vrstev - pravidlo, na kterém záleží nejvíc

**Všechno, co se může hýbat, objevit nebo změnit hodnotu, leží ve vlastní pojmenované vrstvě.** Nic sloučeného, nic slitého.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Co sloučené být smí: čistě dekorativní grafika pozadí, která funguje jako jediný statický obrázek.

Tohle je to jediné pravidlo, které opravdu bolí, když se nedodrží - grafiku je pak nutné rozebrat nebo překreslit, a přesně tomu nákladu má tohle uspořádání předejít.

### Efekty, které to nepřežijí

Engine kreslí na plátno HTML5. Tyhle je nutné **zapéct do obrázku** nebo je vynechat:

| Effect                                                             | What to do instead          |
| ------------------------------------------------------------------ | --------------------------- |
| Live blur, drop shadows and glow as filters                        | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)         | Resolve them to flat colour |
| Efekty vrstev a vrstvy úprav                                       | Bake them in                |
| Přechody **uvnitř** textu nebo text s obrysem u jednotlivých znaků | Leave them out              |
| Masky, které se mění snímek od snímku                              | Leave them out              |

Přechody v tvarech jsou v pořádku. Průhlednost je v pořádku. Stíny jako pevná grafika jsou v pořádku.

### Jak se chová text

Tady se navrhování pro QuizWitz nejvíc liší od běžné návrhářské práce.

**Nenastavuješ velikost písma. Kreslíš rámeček.**

Veškerý text kreslí naživo komponenta, která dostane dvě věci: řetězec a obdélník, který jsi nakreslil. Pak hledá **největší velikost písma, při které se ten řetězec zalomený do řádků ještě vejde do rámečku**. Dlouhý řetězec se zmenší, aby se vešel; krátký roste, dokud není rámeček plný.

![Výběr, ve kterém tři různě dlouhé řádky dostávají každý jinou velikost písma](/images/theme-design/frame1-general-multiquestion.png)

Tři řádky, tři stejné rámečky - a tři úplně různé velikosti písma, čistě proto, že text je kratší nebo delší. „Where is love“ dostane celou výšku; otázka nad ním si musí vystačit se dvěma malými řádky. Popisky vlevo se chovají stejně.

Z toho plyne:

- **Tatáž otázka vypadá v jiné hře jinak.** Šestislovná otázka se objeví velká a vyplní obrazovku; pětatřicetislovná se objeví malá na pěti řádcích, v přesně stejném rámečku. Obě musí vypadat dobře.
- **Navrhni každý textový rámeček dvakrát.** Naplň ho jednou velmi krátkou ukázkou a jednou velmi dlouhou a zkontroluj, že kompozice drží v obou případech. Jako pravidlo palce: možnost odpovědi má od jednoho do zhruba osmi slov, otázka od pěti do čtyřiceti, jméno hráče od dvou do dvaceti znaků.
- **Nepočítej s pevným počtem řádků.** Titulek, který je „vždycky na jednom řádku“, tady neexistuje.
- **Nezarovnávej text opticky s ničím jiným.** Text, který se má srovnat s linkou nebo tvarem, se posune, jakmile bude kratší nebo delší. Používej rámečky, které jsou dost prostorné, a zarovnání (vlevo, na střed, vpravo) místo přesných pozic.
- **Dvanáct jazyků.** Německé složeniny jsou dlouhé a maďarština není o nic vlídnější. Rámeček, který je v angličtině těsný, spadne v němčině na nečitelně malou velikost.
- **Uvnitř textu se mohou objevit emoji.** Hráči si jedno vybírají vedle názvu týmu a otázka nebo možnost může nějaké obsahovat - někdy je možnost jen emoji a nic víc. Kreslí se barevně a jsou vyšší než písmena kolem nich.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Ne: v jaké velikosti bodů.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### Časovač - povinný, a je to animace

**Every question screen has a timer**; the room has to see how much time is left.

**Časovač není odpočítávající číslo, ale animace, jejíž přehrávací hlavu posouvá engine.** Navrhuješ postup od „plno“ k „prázdno“ - vyprazdňující se pruh, uzavírající se kruh, přesýpací hodiny, zkracující se linka. Engine přehraje tu animaci přesně takovou rychlostí, aby poslední snímek padl na konec otázky.

Z toho plyne:

- **Délka otázky není pevná.** Nastavuje se pro každý kvíz - často dvacet až třicet sekund, ale může být kratší i delší. Tvoje animace se natáhne nebo stlačí, aby seděla.
- **Žádná čísla ani tikání po sekundách.** Časovač, který odpočítává „20, 19, 18…“, přestane platit, jakmile se délka změní.
- **Poslední sekundy jsou nejnapínavější moment hry.** Pomáhá, když je postup ke konci zřetelnější nebo naléhavější.
- **Čitelné ze zadní části sálu**, na první pohled.
- **Více časovačů je povoleno.** Pruh nahoře i kruh u otázky jsou oba řízené, pokud se každý jmenuje `timer`.

Dodej časovač jako sérii klíčových snímků nebo jako popis postupu - „pruh se vyprazdňuje zprava doleva a mění barvu ze zelené na červenou“ stačí.

### Létající emoji přistávají přes všechno

Každý hráč si při připojení vybere emoji a hra ta emoji rozhazuje po obrazovce. They are drawn by the engine on a layer above the theme. **Tady pro tebe není co navrhovat** - ale je kolem čeho navrhovat, protože to není vzácná ozdoba.

Objevují se ve třech momentech:

- **Když hráč odpoví.** Emoji toho hráče stoupá od spodního okraje na náhodné vodorovné pozici, opíše oblouk a spadne zpátky mimo obraz.
- **Když ho hráč vymrští.** Hráči můžou své emoji vymrštit z telefonu; úhel a rychlost vycházejí ze švihu prstem a emoji startuje zespodu ze středu, roztočené.
- **Když se v závěrečném odpočítávání odhalí místo.** Salva emoji jmenovaného hráče: dvacet za běžné místo, padesát za třetí, sedmdesát pět za druhé a **sto padesát za vítěze.**

Co to znamená pro návrh:

- **Nech spodní třetinu obrazovek s pořadím a vítězem volnou od čehokoli malého nebo zásadního.** Během odpočítávání je tam dole opravdu plno.
- **Počítej s tím, že se budou tlouct s tvou paletou.** Jsou to plnobarevná emoji ze všech koutů tabulky Unicode a žádný motiv je neovládá. Návrh, který drží pohromadě jen v úzkém barevném rozsahu, bude po ty sekundy působit nahodile.
- **Vymršťování je potlačené, dokud se zobrazuje obrázek nebo video**, takže obrazovky s přílohou zůstávají čisté.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Písma

- **Písma musí být vložitelná.** Je potřeba soubor `.ttf` nebo `.otf` a k tomu licence, která povoluje vložení do aplikace. Písmo licencované jen jako webfont nebo jen pro tisk použít nelze. Ověř si to dřív, než s ním začneš navrhovat; dodatečná oprava je drahá.
- Písma s neobvykle velkými horními nebo dolními dotažnicemi se dají vykompenzovat, ale dej vědět, pokud nějaké použiješ.

### Barva jako seznam

Motiv čte seznam barev z konfiguračního souboru a telefony hráčů se stylují z téhož seznamu. Dodej svou paletu jako **pojmenovaný seznam**, ne jen jako barvy v grafice:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

Na herní obrazovce jsou povolené přechody: uveď je jako dvě hexadecimální hodnoty.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Když je vynecháš, spadnou na vestavěné výchozí hodnoty - bílou, šedou, červenou, černou a bílou - které k návrhu málokdy sedí.

### Logo QuizWitz

Vlastní návrhy obsahují logo QuizWitz. Vyhraď pro ně místo tam, kde nepřekáží návrhu.

---

## Co odevzdat

### Zdrojový soubor - nejlépe Illustrator

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                  | Use it for                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. Přesně tenhle krok zachrání grafiku před tím, aby se musela stavět ručně znovu.                                 | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                   | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Pokud Figmu přesto použiješ, dodej **každý prvek zvlášť jako SVG**, s názvy souborů odpovídajícími názvům vrstev, aby se struktura dala ručně obnovit. | The concept phase, if you are faster in it |

Struktura souboru:

- One artboard per screen, named after the frames above.
- Opakovaně použitelné části (tlačítko, řádek hráče, možnost odpovědi, časovač) jako **symboly** nebo komponenty, ne jako volné kopie.
- Názvy vrstev anglicky, bez mezer: `question`, `option1` až `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Barvy jako pojmenované vzorníky a text jako pojmenované styly, místo nastavení na každém objektu zvlášť.

### Seznam podkladů k dodání

1. **Zdrojový soubor**, strukturovaný jak je popsáno výše.
2. **Každý rámec jako PNG**, 1920 × 1080 - reference toho, jak to má vypadat. U rámce 2 verzi s logem klienta i verzi bez něj.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Každý samostatný grafický prvek jako průhledné PNG v 2×**, v jedné složce, s názvem souboru odpovídajícím názvu vrstvy.
5. **Časovač** jako klíčové snímky nebo písemný popis postupu.
6. **Písma** jako `.ttf` nebo `.otf`, s dokladem o licenci.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Půl stránky poznámek**: jaká je myšlenka, jak se mají možnosti objevovat, co se hýbe a co zůstává stát. Ne desetistránkové zdůvodnění návrhu - ten, kdo motiv staví, potřebuje vědět, co má postavit. Nápady na pohyb můžou být popsané nebo dodané jako hrubý animatic.

### Pořadí práce

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Příloha - názvy symbolů

Pro úplnost a pro toho, kdo chce přesně vědět, kde jeho grafika skončí. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Používat tyhle názvy jako názvy vrstev ušetří jeden překladový krok.

| Rámec                                           | Název symbolu                                                                                                                             | Povinné části                                                                                                                                                                            |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Obecný rámec          | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` volitelně                                                                        | `placeholder` (obsahová plocha); textový rámeček `title` volitelně                                                                                                    |
| 1b. Výběr otázek, dlouhá otázka | `MultiQuestionScreen`, `LongQuestionScreen`; oba volitelně, vracejí se k obecnému rámci                                                   | výběr: zástupný prvek `questions`, `timer`; dlouhá otázka: zástupný prvek `question`                                                                     |
| 2. Obrazovka připojení   | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` volitelně, se zástupným prvkem `logo`                                    | `instructions.line1` až `line5`, `connectedPlayers`; zástupný prvek `qrCode` s návěštím snímku `showQrCode` volitelně                                                                    |
| 3. Čekací obrazovka      | `PendingScreen`; `PendingScreenWithLogo` volitelně                                                                                        | `header.text`                                                                                                                                                                            |
| 4. Obrazovka otázky      | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` až `option4`, návěští snímků `showOptions` a `showFeedback`                                                                         |
| 5. Otázka s přílohou     | `QuestionScreenAttachment`                                                                                                                | jako výše, plus `attachment.placeholder`                                                                                                                                                 |
| 5b. Příloha na celou obrazovku  | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                            |
| 6. Obrazovka odpovědi    | `AnswerPieScreen`; `AnswerPieScreenAttachment` volitelně                                                                                  | `option1` až `option4`, `answer.text`, `feedback.text`                                                                                                                                   |
| 6b. Odpověď na otevřenou otázku | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; varianty `…Attachment` volitelně                                                           | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                    |
| 7. Pořadí                | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` a `PlayerScoreNoImage` volitelně                                | `header.text`, `players`, `feedback.text` (`playAgain.text` volitelně); v řádku: `position`, `name`, `score`, `avatar` volitelně                      |
| 8. Intro kola            | jeden nebo více symbolů s libovolným názvem; konfigurační soubor přiřazuje každé ze šesti kategorií jeden symbol                          | -                                                                                                                                                                                        |
| -                                               | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                       |
| -                                               | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | vlastní grafiku nepotřebují - staví se z toho, co se objeví v tvých rámcích                                                                                                              |
| -                                               | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | zobrazují se jen v desktopové aplikaci, ne v živém kvízu. Nejsou součástí zadání: přebírají se ze šablony motivu a přestylují se tvým pozadím a tlačítky |

Symboly intra kola ve výchozím motivu se jmenují `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` a `RoundIntroTedCultHist`; umění a historie sdílejí ten poslední. „Ted“ v těch názvech je pozůstatek postavy z původního motivu a neznamená, že se v nich postava musí objevit.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. Prvek `timer` je filmový klip s vlastní časovou osou; engine si přečte počet jeho snímků a posouvá přehrávací hlavu úměrně uplynulému času, nejvýše 24krát za sekundu.

### Co si konfigurační soubor bere z tvého návrhu

```json
{
  "fontFiles": { "<body font>": "fonts/body.ttf", "<heading font>": "fonts/heading.ttf" },
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "_container_": "#…", "_timerBackground_": "#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…", "player": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "optionColors": [ "#…", "#…", "#…", "#…" ],
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "remoteColors": {
    "background": "#…", "text": "#…", "outline": "#…",
    "options-outline": "#…", "container-background": "#…", "container-text": "#…"
  },
  "roundIntros": { "science": "<symbol>", "nature": "<symbol>", "entertainment": "<symbol>",
                   "sports": "<symbol>", "art": "<symbol>", "history": "<symbol>" },
  "overlay": "light | dark"
}
```

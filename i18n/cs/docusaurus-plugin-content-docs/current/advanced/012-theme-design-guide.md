---
id: theme-design-guide
title: Návod pro vzhled
---

# Návod pro vzhled

[Theming](/docs/advanced/theming) vysvětluje, jak je vytvořen QuizWitz: v Adobe Animate, exportováno jako CreateJS knihovna. This page covers the step before that - **designing** the theme.

Je napsán pro grafického designéra a předpokládá, že design a impozantní výroba jsou prováděny různými lidmi. Jen málo designérů stále pracuje v Adobe Animate, takže společné uspořádání je, že designér přináší umělecké dílo a někdo jiný montuje téma. To funguje dobře, ale pouze v případě, že je umělecká díla předávána ve tvaru, kterou může stavba skutečně využít. This page describes that shape, and doubles as the list of deliverables when you ask a designer for a quote.

:::tip
If you only want to change colours, fonts and backgrounds, you do not need any of this - customise the [Emerald theme](/docs/advanced/emerald-theme) instead.
:::

:::info[See it running]
Every screen described here can be played live, with sample data, in the **theme tester** at [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). It loads a theme and offers a menu of test screens: questions with and without an attachment, the answer spread for a small and a large group, the standings, the round intros, the connect screen with and without a client logo, and so on. Add `?theme=emerald` to the address to see the [Emerald theme](/docs/advanced/emerald-theme). Whoever builds the theme uses the same page to check it while it is being assembled.
:::

---

## Co navrhujete

Hru QuizWitz hraje celý pokoj najednou a dvě obrazovky jsou vždy zapojeny:

- **The game screen** - a projector or TV, 1920 × 1080. Otázky, odpovědi, jak se šířily odpovědi místnosti, postavení. Toto navrhujete.
- **Telefon každého hráče**, kde napíší svou odpověď. That is a web page with a fixed layout; it is styled from your colour list, not laid out by you.

A theme is the complete visual skin of the game screen: background, typography, colour, the way a question with four options is presented, how the standings build up, how a round is announced.

---

## Seven frames and an element sheet

The game has dozens of distinct screen states, but most are variants of the same layout. **You design seven frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Obrazovka bez vlastního obrazu se vrátí k obecnému rámečku.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule - and that furniture is a design decision, not something that can be inferred from a background.

| #     | Frame                        | Co je na tom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Co z toho vyplývá                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Obecný rám**               | Pozadí, nadpis záhlaví a prázdná oblast obsahu, která je pod ním. Not a finished composition - the frame the rest is built inside.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Třináct stavů obrazovky: kulaté vysvětlení, postavení, úvod hráče, varianty s možností více možností, dlouhé otázky, upozornění na sedadlo, nastavení. Each fills that content area its own way with elements from the sheet, so it has to hold things that look nothing alike. The question picker and the long question may get a composition of their own if you want them to; otherwise they use this frame. |
| **2** | **Connect and waiting**      | Two screens, not one. The **connect screen** is what the room sees to join: five lines of instruction, a join code, a QR code, a line with the number of connected players, and a list of players trickling in. Design it **twice**: with a client logo and without one. The join code and the QR code are generated by the engine; reserve a square for the QR code. The **waiting screen** stays up while the quizmaster reads a question aloud and is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **3** | **Obrazovka úlohy**          | Otázka, časopis, čtyři možnosti odpovědi, linie zpětné vazby. Obrazovka místnost se dívá nejdéle.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **4** | **Question with attachment** | Stejné, uspořádané kolem obrázku nebo videa. Může být jiné složení než rám 3. The attachment is scaled to fit inside the box you draw, so both a landscape and a portrait image must look acceptable in it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Also the full-screen attachment variant, and attachments shown between questions.                                                                                                                                                                                                                                                                                                                                                                                |
| **5** | **Obrazovka k odpovědi**     | Která odpověď byla správná, jak byly odpovědi místnosti rozloženy napříč možnostmi a linie zpětných vazeb.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Also the answer screen for open questions and for questions with an attachment.                                                                                                                                                                                                                                                                                                                                                                                  |
| **6** | **Postavení a vítěze**       | A list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element - it is repeated six times by default, up to ten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Postavení mezi koly a konečným vítězem.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **7** | **Úvodní kolo**              | Krátké oznámení pro každou kategorii kola. Existuje šest kategorií: věda a technika, příroda, zábava a hudba, sport, umění, historie. One design may serve several categories.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Všech šest kategorií.                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### The element sheet

Two groups of elements, on one sheet, each drawn once and reused everywhere.

**Content building blocks.** These fill the content area of the general frame. The screens that fall back to it are assembled from these, so whatever you draw here decides how all of them look:

- a **panel**: fill, border, corner radius - the container a list or a block of text sits in
- a **list row**: the repeating unit of any list, with its own background or none
- a **separator**: the rule between rows, where there is no panel
- a **label and value pair**: a short label on the left, a value on the right

**Controls.** Drawn once, used on every screen:

- a **button** in its four states: rest, hover, pressed, disabled
- the **correct** and **wrong** symbols
- a **scrollbar**, a **checkbox**, a **select**
- where the **QuizWitz logo** sits

### Co se pro vás rozhodlo

- **The players' phones.** A fixed HTML layout, styled from your colour list.
- **The handful of things the engine draws itself.** Some furniture is drawn in code rather than taken from the theme - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Those take their colour from the list in **Colour as a list** and nothing else, so that list is the only control you have over them.
- **Které obrazovky se vrátí k obecnému rámu a jak.**
- **How the six categories map onto the round intro artwork.** That mapping is a configuration setting, so one intro can be reused for several categories.
- **Všechny časování a trvání animace.**
- **Sound.** A theme can carry its own music and sound effects, but that is a separate deliverable and not part of the design brief.

### Znak je volitelný

Téma QuizWitz má postavu, která hovoří a reaguje. Nic nevyžaduje: validátor motivu pouze varuje před prvkem `ted`; bez něj se to nepodaří. The [Emerald theme](/docs/advanced/emerald-theme) ships without a character, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Bez postavy se úvod stává grafickým, typografickým nebo ilustrativním momentem. Dvě přístupy udržují práci v úměru: jedno složení s variantou barvy nebo ikony pro každou kategorii, nebo jediné univerzální oznámení s jedinou změnou názvu kola. Šest skutečně odlišných útesů je spousta práce po několik sekund obrazovky času.

---

## Jak tyto rámy vypadají v praxi

Obrazovky níže pocházejí z existujícího tématu. They are here to show **which elements appear on each screen and when**. They are not a reference for style _or_ layout: where this theme puts its question, its options and its timer is its own decision, and yours can differ completely. Read them for what has to be present, not for where it goes. All of them, and more, can be played in the [theme tester](https://client.quizwitz.com/test.html).

### Frame 1 - the general frame

Two game moments on the same frame: a question picker and a points ladder.

Look at how little they have in common. The picker puts its three rows inside a panel with a border; the ladder has no panel at all, just rows separated by thin rules. What the two share is the background and the header band above them - everything below that belongs to the individual screen and is filled by the game, not by you.

![Obecný rámec s třířádkovým výběrem otázek](/images/theme-design/frame1-general-multiquestion.png)

![Obecný rámec s pětiúrovňovým žebříkem](/images/theme-design/frame1-general-strikeladder.png)

That panel and those rules are design decisions, and they are yours to make - they come from the **element sheet**, not from this frame. What this frame has to do is hold them: design the content area as an empty, neutral, roomy zone that works with a bordered panel, a bare list and a table of rows alike. A background that is busy in the middle, or a header that only works with a panel tucked right underneath it, is where that breaks.

### Frame 2 - connect and waiting

S klientským logem vedle spojovacího kódu a bez něho, kde má na sobě vlastní obrázek:

![Připojte obrazovku s logem klienta](/images/theme-design/frame2-connect.png)

![Připojit obrazovku bez loga klienta](/images/theme-design/frame2-connect-nologo.png)

The waiting screen is a separate composition rather than a variant of the connect screen - the two share only a background. It stays up while the quizmaster reads a question aloud, and it is nearly empty: the quiz's own logo, or the theme's artwork, and nothing else. It is on screen longer than almost anything else in the game, so it deserves more attention than an empty screen usually gets.

![Čekací obrazovka](/images/theme-design/frame2-pending.png)

### Frame 3 - the question screen

Čtyři možnosti, otázka výše, časovač uprostřed. Všimněte si, že možnost nemůže obsahovat nic jiného než emoji.

![Obrazovka úloh se čtyřmi textovými možnostmi](/images/theme-design/frame3-question-options.png)

![Obrazovka úloh se vlajkami jako možnosti odpovědí](/images/theme-design/frame3-question-emoji.png)

A question with no options - players type their answer on their phone. Obrazovka je téměř prázdná a časovač se stává hlavním prvkem:

![Otevřená otázka pouze s otázkou a velkým časovačem](/images/theme-design/frame3-question-open.png)

Čas vyprší. Zpětný balón se objeví přes obrazovku a časovač je prázdný:

![Obrazovka úloh zobrazující časový stav](/images/theme-design/frame3-question-timeout.png)

### Frame 4 - attachment

The same parts, rearranged around an attachment area, with the options to the left and right:

![Obrazovka otázky s obrázkem uprostřed](/images/theme-design/frame4-question-attachment.png)

An attachment on its own, filling the screen:

![Full-screen attachment](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 5 - the answer screen

Tato obrazovka prochází třemi okamžiky. Nejprve spread, zatím nic není označeno:

![Obrazovka odpovědi zobrazující spread](/images/theme-design/frame5-answer-mc-spread.png)

Pak je zaškrtnuta správná možnost a chybná možnost je křížována:

![Obrazovka odpovědi se správnou volbou](/images/theme-design/frame5-answer-mc-reveal.png)

A pokud tato otázka přináší vysvětlení, pak se nad uměleckým dílem shazuje balón. Leave room for it - it lands on top of whatever you designed:

![Obrazovka odpovědi s vysvětlením balónu](/images/theme-design/frame5-answer-mc-explanation.png)

Se malou skupinou je tentýž okamžik spíše seznam skóre než graf:

![Obrazovka odpovědi pro malou skupinu](/images/theme-design/frame5-answer-mc-small.png)

Pro otevřenou otázku graf ukazuje, kolik hráčů to má pravdu:

![Obrazovka odpovědi na otevřenou otázku](/images/theme-design/frame5-answer-open.png)

### Frame 6 - standings and winner

Pozastavení po kolu. Řádek hráčů je prvek, který se opakuje: pozice, avatar, jméno, skóre.

![Postavení se šesti řadami hráčů](/images/theme-design/frame6-roundoutro.png)

The final countdown names one player at a time, from last place to first - place, score and team name in the spotlight. This is also where the flying emoji are heaviest; see the note further down:

![Vítěz odpočítávání pojmenování jednoho hráče](/images/theme-design/frame6-winner-countdown.png)

![Konečná nastavení](/images/theme-design/frame6-winner.png)

### Frame 7 - the round intro

Jedna konstrukce, volitelně s variantou pro každou kategorii:

![Úvod ke kolu pro kategorii přírody](/images/theme-design/frame7-roundintro-nature.png)

![Úvod ke kategorii vědy](/images/theme-design/frame7-roundintro-science.png)

---

## Pravidla pro návrh

Nic z toho neomezuje váš vizuální design. Jsou o tom, jak je soubor sestaven.

### Formát

- **1920 × 1080 pixelů**, přesně Jeden rám na obrazovku.
- Pracujte **ve vektoru** tam, kde je to možné. Pokud používáte rastr (fotografie, texty): alespoň 2 × velikost zobrazení.
- The Animate document runs at **24 frames per second**. Relevantní, pokud dodáváte myšlenky pohybu.
- Udržujte **5% marži** na okraji bez základních informací. Projektory plodiny.

### Layer structure - the rule that matters most

**Cokoliv, co se může pohybovat, zobrazit nebo změnit hodnotu, sedí na vlastní pojmenované vrstvě.** Nic není sloučeno, nic zarovnáno.

V praxi: čtyři možnosti odpovědi jsou čtyři samostatné vrstvy, ne jedné. Časovač je oddělen od pozadí. Tlačítko a jeho štítek jsou dva prvky. Řádek hráčů je jedna skupina, která může být duplikována.

Co může být sloučeno: čistě dekorativní obrazy na pozadí, které fungují jako jediný statický obraz.

This is the one rule that genuinely hurts when it is not followed - the artwork then has to be pulled apart or redrawn, which is exactly the cost this arrangement is meant to avoid.

### Účinky, které nepřežívají

Motor čerpá HTML5 plátno. Tohle musí být **upečeny do obrázku** nebo vynechány:

- Živé rozmazání, rozmazání stínů a záři jako filtry → jejich poskytnutí jako umělecká díla
- Míchání režimů (násobení, obrazovka, překrytí) → jejich rozlišení na plochou barvu
- Vrstvové efekty a seřizovací vrstvy
- Gradienty **uvnitř** text, nebo text s obrysem jednotlivých znaků
- Masky, které se mění podle snímku

Sklony ve tvaru jsou v pořádku. Transparentnost je v pořádku. Stíny jako fixní kresba jsou v pořádku.

### Jak se text chová

Zde se návrh pro QuizWitz nejvíce liší od běžné návrhové práce.

**Nenastavuješ velikost písma. Nakreslíš políčko.**

Veškerý text je nakreslený živou komponentou, která přijímá dvě věci: řetězec a obdélník, který sníte. Najde **největší font, na kterém se tento řetězec zabalený přes čáry, stále vejde dovnitř krabice**. Dlouhý řetězec se zmenšuje; krátce roste, dokud není krabice plná.

![Výběr kde tři řádky různé délky každé mají jinou velikost písma](/images/theme-design/frame1-general-multiquestion.png)

Three rows, three identical boxes - and three completely different font sizes, purely because the text is shorter or longer. "Kde je láska" dostává celou výšku; otázka nad ní musí dělat s dvěma malými čárkami. Štítky na levé straně se chovají stejně.

Z toho plyne, že:

- \*\*Stejná otázka vypadá v jiné hře. \* Šestistránková otázka se jeví jako velká a vrstevnatá; třicet pět slov se jeví jako malá přes pět řádků v přesně stejném rámečku. Oba musí vypadat správně.
- \*\*Navrhněte každé pole dvakrát. \* Vyplňte jednou velmi krátkým vzorkem a jednou velmi dlouhou a zkontrolujte, zda je složení v obou. Jako pravidlo náhledu: možnost odpovědi běží z jednoho na osm slov, otázka od pěti do čtyřiceti, jméno hráče od dvou do dvaceti znaků.
- **Nepočítat s pevným počtem řádků.** Titulek, který je "vždy na jednom řádku", zde neexistuje.
- \*\*Neopticky nezarovnejte text s ničím jiným. \* Text, který se musí spojit s pravidlem nebo tvarem se posune, jakmile bude kratší nebo delší. Použijte políčka, která mají dostatek místnosti a zarovnání (levé, středové, pravé) místo přesných poloh.
- **Krabice je maximum, ne slib.** Navrhuješ její poměr; výplň se liší.
- **Twelve languages.** German compounds are long, and Hungarian is no kinder. Bedna, která je v angličtině napjatá na nekonečně malou velikost v němčině.
- **Emoji can appear inside text.** Players pick one next to their team name, and a question or an option can contain one - sometimes an option is nothing but an emoji. Jsou vytištěny v barvě a jsou vyšší než kolem nich.

Co sestavení potřebuje vědět o každém textovém pole: kde je, Jak velká je, jak je zarovnaná, jakou barvu a který font. Ne: v jakém bodě velikost

Z toho plynou dvě věci: velké políčko s krátkým textem se stává silné typografické složení samo o sobě, a krabice, kterou záměrně uděláte úzký a vysoký, vynutí text do sloupce. You can use the fitting as a design device - you just should not design against it.

### The timer - required, and it is an animation

**Každá obrazovka úloh má časovač.** Není volitelná; místnost musí vidět, kolik času zbývá. Oba otazníky jsou nosné.

**The timer is not a counting number but an animation whose playhead the engine moves.** You design a progression from "full" to "empty" - a bar draining, a ring closing, an hourglass, a shrinking line. Motor hraje tuto animaci přesně při otáčkách, díky nimž se poslední rám shoduje s koncem otázky.

Co je následující:

- **The question duration is not fixed.** It is set per quiz - often twenty to thirty seconds, but it can be shorter or longer. Vaše animace je natažena nebo zkomprimována, aby se dala do obrazu. Navrhněte _průběhu_, ne animaci nastaveného počtu sekund.
- **Žádná čísla nebo tečka na sekundu.** Časovač počítající "20, 19, 18…" přestane být pravdivý, jakmile se změní doba trvání.
- **Posledních vteřin jsou nejnapnutější okamžik hry.** Pomáhá, když se postup stává jasnější nebo naléhavější směrem ke konci.
- **Čitelné ze zadní strany místnosti**, na pohled.
- **Povoleno je více časovačů.** Čára nahoře a kruh poblíž úlohy jsou řízeny, dokud je každá pojmenována `časovačem`.

Supply the timer as a series of keyframes or as a description of the progression - "the bar drains right to left and shifts from green to red" is enough.

### Flying emoji land on top of everything

Every player picks an emoji when they join, and the game throws those emoji across the screen. They are drawn by the engine on a layer above the theme, in whatever colours the player's emoji happens to have. **There is nothing here for you to design** - but there is something to design around, because they are not a rare flourish. They appear at three moments:

- **When a player answers.** Their emoji rises from the bottom edge at a random horizontal position, arcs up and falls back out of frame.
- **When a player flings one.** Players can fling their emoji from their phone; angle and speed come from the swipe, and it launches from the bottom centre, spinning.
- **When a place is revealed in the final countdown.** A burst of the named player's emoji: twenty for an ordinary place, fifty for third, seventy-five for second, and **a hundred and fifty for the winner.**

They always enter from the bottom edge, arc under gravity and fall back out. What that means for the design:

- **Keep the bottom third of the standings and winner screens clear of anything small or critical.** During the countdown it is genuinely crowded down there.
- **Assume they will clash with your palette.** They are full-colour emoji from every corner of the Unicode chart, and no theme controls them. A design that only holds together in a tight colour range will look accidental for those seconds.
- **Flings are suppressed while an image or video is showing**, so the attachment screens stay clean.
- The whole layer can be switched off per game, so do not build a composition that depends on them being there either.

### Písma

- **Písma musí být vložena.** Potřebný soubor `.ttf` nebo `.otf` plus licenci, která umožňuje vložení aplikace. Písmo licencované pouze jako webový font, nebo pouze pro tisk nelze použít. Zkontrolujte, než ho navrhnete. Poté se jedná o nákladnou korekci.
- Písma s neobvykle velkými povyšujícími nebo potomci mohou být kompenzováni za to, ale pokud používáte jednu z nich.

### Barva jako seznam

The theme reads a colour list from a configuration file, and the players' phones are styled from the same list. Dodejte svou paletu jako **pojmenovaný seznam**, nejen jako barvy v uměleci:

- **Game screen:** main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong.
- **The four answer options:** each with a background and a border colour, plus one flat colour per option for the phones and the charts.
- **Players' phones:** background, text colour, outline colour, option outline colour, and the background and text colour of the answer container.

Gradients are allowed on the game screen: give them as two hex values.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting: the **separator** (the rules between rows where there is no panel, and on the points ladder), the **active**, **inactive** and **selected** states of a row in the question picker, the **dialog** text, and the **front and back of the QR code**. If you leave them out they fall back to built-in defaults - white, grey, red, black and white - which rarely match a design.

### Logo QuizWitz

Vlastní návrhy obsahují logo QuizWitz. Rezervujte si pro ni místo, kde se nedostane do podoby designu.

---

## Co předat

### Source file - Illustrator preferred

\*\*Adobe Illustrátor (`.ai`) je preferován a existuje konkrétní důvod. \* Motiv je postaven v Adobe Animate, který importuje soubory Illustrátoru přímo a přeměňuje vaše vrstvy na animované vrstvy nebo samostatné symboly, udržují názvy vrstev a ponechávají vektory editovatelné. To je přesně ten krok, který zachrání umělecká díla před přestavbou rukou.

Figma nebo Photoshop je možná, ale vědět náklady: s Figma vše prochází přes SVG a PNG export, a to je přesně místo, kde je zde potřebná vrstva ztracena. Pokud používáte Figma, dodáváte **každý prvek samostatně jako SVG**, s názvy souborů odpovídajícími názvům vrstev, takže struktura může být přestavěna ručně. Fotoshop importuje do Animate s jeho vrstvami, jako je ilustrátor, ale dává vám rastr místo vektoru.

Pokud jste rychlejší ve Figma, použijte ji pro konceptovou fázi a dodejte konečnou verzi v Ilustrator.

Struktura souboru:

- Jedna tabule na obrazovku, každá přesně 1920 × 1080, pojmenovaná podle výše uvedených snímků.
- Opětovně použitelné díly (tlačítko, hráčský řádek, volba odpovědi, časovač) jako **symboly** nebo komponenty, ne jako volně přístupné kopie.
- Názvy vrstev v angličtině, bez mezer: `question`, `option1` to `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Barvy jako pojmenované hodinky a text jako pojmenované styly, místo aby byly nastaveny na každý objekt jednotlivě.

### Deliverables checklist

1. The **source file**, structured as above.
2. **Each frame as a PNG**, 1920 × 1080 - a reference for how it should look. For frame 2, both the version with and the version without a client logo.
3. **The element sheet** as one artboard: the content building blocks and the controls listed above.
4. **Each separate graphic element as a transparent PNG at 2×**, in one folder, filename matching the layer name.
5. **The timer** as keyframes or a written description of the progression.
6. **Fonts** as `.ttf` or `.otf`, with proof of licence.
7. **The colour list** described above, as hex values.
8. **Half a page of notes**: what the idea is, how the options should appear, what moves and what stays still. Not a ten-page design rationale - whoever builds the theme needs to know what to build. Myšlenky pohybu lze popsat nebo dodat jako hrubý animatik.

### Order of work

Start with frame 3, the question screen, together with the element sheet, and get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme, and the question screen is the one the room looks at longest. Frames 1 and 2 follow naturally from them; frames 5 to 7 come last.

---

## Appendix - symbol names

Pro úplnost a pro každého, kdo chce přesně vědět, kde jejich umělecká díla končí. **You do not need to read this to do the work**; the seven frames and the element sheet above are enough. Použití těchto jmen jako názvy vrstev uloží krok překladu.

| Frame                                                                                                                                                                                                     | Název symbolu                                                                                                                             | Požadované díly                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Obecný rám                                                                                                                                                                      | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` optional                                                                         | `placeholder` (the content area); `title` text box optional                                                                                                                 |
| 1b. Question picker, long question                                                                                                                                                        | `MultiQuestionScreen`, `LongQuestionScreen`; both optional, fall back to the general frame                                                | picker: `questions` placeholder, `timer`; long question: `question` placeholder                                                                                |
| 2. Připojit obrazovku                                                                                                                                                              | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` optional, with a `logo` placeholder                                      | `instructions.line1` to `line5`, `connectedPlayers`; `qrCode` placeholder with frame label `showQrCode` optional                                                                               |
| „Technologie“ ve smyslu všeobecné poznámky k technologii pro „vývoj“, „výrobu“ nebo „užití“ zařízení nebo „softwaru“ uvedených v položkách 3A, 3B nebo 3D. Obrazovka s čekáním            | `PendingScreen`; `PendingScreenWithLogo` optional                                                                                         | `hlavička.text`                                                                                                                                                                                |
| 3. Obrazovka úloh                                                                                                                                                                  | `Obrazovka úlohy`                                                                                                                         | `question.text`, `timer`, `feedback.text`, `option1` to `option4`, frame label `showOptions` a `showFeedback`                                                                                  |
| 4. Question with attachment                                                                                                                                                        | `Doplněk úlohy`                                                                                                                           | podle výše, plus `attachment.placeholder`                                                                                                                                                      |
| „Technologie“ ve smyslu všeobecné poznámky k technologii pro „vývoj“, „výrobu“ nebo „užití“ zařízení nebo „softwaru“ uvedených v položkách 7A, 7B nebo 7C. Full-screen attachment         | `AttachmentScreen`                                                                                                                        | `zástupce`                                                                                                                                                                                     |
| 5. Obrazovka odpovědi                                                                                                                                                              | `AnswerPieScreen`; `AnswerPieScreenAttachment` optional                                                                                   | `option1` to `option4`, `answer.text`, `feedback.text`                                                                                                                                         |
| Položka 1C010.b. nezahrnuje materiály uvedené v položce 1C010.b. nebo 1C010.b. Otevřená odpověď na otázku | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` variants optional                                                            | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 6. Úkoly                                                                                                                                                                           | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` and `PlayerScoreNoImage` optional                               | `header.text`, `players`, `feedback.text` (`playAgain.text` optional); in the row: `position`, `name`, `score`, `avatar` optional                           |
| 7. Úvod zaokrouhlený                                                                                                                                                               | one or more symbols of any name; the configuration file maps each of the six categories to a symbol                                       | -                                                                                                                                                                                              |
| -                                                                                                                                                                                                         | `Načítání obrazovky`                                                                                                                      | `text`, `progres`                                                                                                                                                                              |
| -                                                                                                                                                                                                         | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | no artwork of their own needed - built from what appears in your frames                                                                                                                        |
| -                                                                                                                                                                                                         | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | only shown in the desktop app, not in a live quiz. Not part of the brief: they are taken from the theme template and restyled with your background and buttons |

The stock theme's round intro symbols are called `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` and `RoundIntroTedCultHist`; art and history share the last one. The "Ted" in those names is a leftover from the original theme's character and does not mean a character has to appear in them.

Každý prvek s `.text` po namontovaném textovém poli, jak je popsáno výše: obdélník, který motor vyplní. The `timer` element is a movie clip with its own timeline; the engine reads its frame count and moves the playhead in proportion to elapsed time, at most 24 times per second.

### Co z vašeho designu odebere konfigurační soubor

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

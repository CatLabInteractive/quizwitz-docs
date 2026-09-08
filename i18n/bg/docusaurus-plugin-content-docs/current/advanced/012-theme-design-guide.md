---
id: theme-design-guide
title: Ръководство за дизайн на теми
---

# Ръководство за дизайн на теми

[Темите](/docs/advanced/theming) обясняват как се изгражда тема на QuizWitz: в Adobe Animate, експортирана като библиотека CreateJS. Тази страница разглежда стъпката преди това - **дизайна** на темата.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Тази страница описва тази форма и същевременно служи като списък с материалите за предаване, когато поискаш оферта от дизайнер.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Ако искаш да смениш само цветовете, шрифтовете и фоновете, нищо от това не ти трябва - вместо това персонализирай [темата Emerald](/docs/advanced/emerald-theme).
:::

:::info[Виж я в действие]
Всеки описан тук екран може да се изиграе на живо, с примерни данни, в **тестера на теми** на адрес [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Той зарежда тема и предлага меню с тестови екрани: въпроси с и без прикачен файл, разпределението на отговорите за малка и за голяма група, класирането, интрата на рундовете, екрана за свързване с и без клиентско лого, и така нататък. Добави `?theme=emerald` към адреса, за да видиш [темата Emerald](/docs/advanced/emerald-theme). Този, който изгражда темата, използва същата страница, за да я проверява по време на сглобяването.
:::

---

## Какво проектираш

Една игра на QuizWitz се играе от цяла зала едновременно и винаги участват два екрана:

- **Екранът на играта** - проектор или телевизор, 1920 × 1080. Въпроси, отговори, как са се разпределили отговорите на залата, класирането. Това проектираш ти.
- **Телефонът на всеки играч**, на който той въвежда отговора си. Това е уеб страница с фиксирано оформление; тя се стилизира от твоя списък с цветове, не ти я оформяш.

Темата е цялата визуална обвивка на екрана на играта: фон, типография, цвят, начинът, по който се представя въпрос с четири опции, как се изгражда класирането, как се обявява рунд.

---

## Eight frames and an element sheet

Играта има десетки различни състояния на екрана, но повечето са варианти на едно и също оформление. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Екран без собствена графика се връща към обща рамка.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Рамка                                                           | Also covers                                                               |
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
Екраните по-долу идват от съществуваща тема. They show **which elements appear on each screen and when**. Не са еталон нито за стил, _нито_ за оформление: къде тази тема поставя своя въпрос, своите опции и своя таймер, е нейно собствено решение, а твоето може да е съвсем различно.
:::

### Рамка 1 - общата рамка

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. Изборът на въпроси и дългият въпрос могат да получат собствена композиция, ако така искаш; иначе използват тази рамка.

Два момента от играта върху една и съща рамка: избор на въпроси и стълбица с точки.

![Общата рамка с избор на въпроси в три реда](/images/theme-design/frame1-general-multiquestion.png)

![Общата рамка със стълбица с точки на пет нива](/images/theme-design/frame1-general-strikeladder.png)

Виж колко малко общо имат. Изборът поставя трите си реда в панел с контур; стълбицата няма никакъв панел, само редове, разделени с тънки линии. Това, което двете споделят, е фонът и лентата на горната част над тях - всичко под нея принадлежи на конкретния екран и се запълва от играта, не от теб.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Това, което тази рамка трябва да прави, е да ги носи: проектирай зоната за съдържание като празна, неутрална и просторна зона, която работи еднакво добре с панел с контур, с гол списък и с таблица от редове. Фон, който е натоварен в средата, или горна лента, която работи само с панел, пъхнат точно под нея, е мястото, където това се чупи.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Екран за свързване с клиентско лого](/images/theme-design/frame2-connect.png)

![Екран за свързване без клиентско лого](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Екран за изчакване](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Екран с въпроса с четири текстови опции](/images/theme-design/frame3-question-options.png)

![Екран с въпроса със знамена като опции за отговор](/images/theme-design/frame3-question-emoji.png)

Въпрос без опции - играчите въвеждат отговора си на телефона. Екранът е почти празен и таймерът се превръща в главния елемент:

![Отворен въпрос само с въпроса и голям таймер](/images/theme-design/frame3-question-open.png)

Моментът, в който времето изтича. Балонът с обратна връзка се появява върху екрана, а таймерът е празен:

![Екран с въпроса в състояние на изтекло време](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. Прикаченият файл се мащабира така, че да се побере в правоъгълника, който начертаеш, затова в него трябва да изглежда приемливо както хоризонтално, така и вертикално изображение.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Екран с въпроса с изображение в средата](/images/theme-design/frame4-question-attachment.png)

Прикачен файл сам по себе си, запълващ екрана:

![Прикачен файл на цял екран](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Първо разпределението, все още без нищо отбелязано:

![Екран с отговора, показващ разпределението](/images/theme-design/frame5-answer-mc-spread.png)

След това вярната опция се отмята, а грешните се зачеркват:

![Екран с отговора с разкрита вярна опция](/images/theme-design/frame5-answer-mc-reveal.png)

А ако въпросът носи обяснение, върху графиката пада балон. Остави му място - той каца върху всичко, което си проектирал:

![Екран с отговора с балона с обяснението](/images/theme-design/frame5-answer-mc-explanation.png)

При малка група същият момент е списък с резултати вместо диаграма:

![Екран с отговора при малка група](/images/theme-design/frame5-answer-mc-small.png)

При отворен въпрос диаграмата показва колко играчи са отговорили вярно:

![Екран с отговора при отворен въпрос](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Класиране с шест реда на играчи](/images/theme-design/frame6-roundoutro.png)

Финалното отброяване назовава по един играч, от последното място към първото - място, резултат и име на отбора в светлината на прожекторите. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![Отброяването на победителя, назоваващо един играч](/images/theme-design/frame6-winner-countdown.png)

![Крайното класиране](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Категориите са шест: наука и техника, природа, забавление и музика, спорт, изкуство, история.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Интро на рунда за категорията природа](/images/theme-design/frame7-roundintro-nature.png)

![Интро на рунда за категорията наука](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Без герой интрото на рунда се превръща в графичен, типографски или илюстративен момент. Два подхода държат работата в разумни граници: една композиция с цветови или иконен вариант за всяка категория, или едно универсално обявяване, в което се сменя само името на рунда. Шест наистина различни интра са много работа за няколко секунди на екрана.

---

## Листът с елементи

Две групи елементи на един лист, всеки начертан веднъж и използван навсякъде.

**Градивни елементи на съдържанието.** Те запълват зоната за съдържание на общата рамка. Екраните, които се връщат към нея, се сглобяват от тях, така че това, което начертаеш тук, решава как изглеждат всички те:

- **панел**: запълване, контур, радиус на ъглите - контейнерът, в който стои списък или блок текст
- **ред от списък**: повтарящата се единица на всеки списък, със собствен фон или без
- **разделител**: линията между редовете там, където няма панел
- **двойка етикет и стойност**: кратък етикет вляво, стойност вдясно

**Контроли.** Начертани веднъж, използвани на всеки екран:

- **бутон** в четирите му състояния: покой, посочен с мишката, натиснат, изключен
- символите за **вярно** и **грешно**
- **лента за превъртане**, **отметка**, **падащ списък**
- къде стои **логото на QuizWitz**

---

## Какво е решено вместо теб

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Кои екрани се връщат към общата рамка и как.**
- **Как шестте категории се съотнасят към графиката на интрото на рунда.** Това съответствие е настройка в конфигурацията, така че едно интро може да се използва повторно за няколко категории.
- **Цялото времетраене и всички продължителности на анимациите.**
- **Звукът.** Една тема може да носи собствена музика и звукови ефекти, но това е отделен материал за предаване и не е част от заданието за дизайн.

---

## Правила за дизайна

Нито едно от тях не ограничава визуалния ти дизайн. Те са за това как е изграден файлът.

### Формат

- **1920 × 1080 пиксела**, точно. Една рамка на екран.
- Работи **във вектор**, където можеш. Където използваш растер (снимки, текстури): поне 2× размера на показване.
- Документът на Animate върви на **24 кадъра в секунда**. Има значение, ако предлагаш идеи за движение.
- Остави **5% поле** по краищата, свободно от съществена информация. Проекторите режат.

### Структура на слоевете - правилото, което има най-голямо значение

**Всичко, което може да се движи, да се появява или да сменя стойност, стои в собствен именуван слой.** Нищо слято, нищо сплескано.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Какво може да бъде слято: чисто декоративна фонова графика, която работи като едно неподвижно изображение.

Това е единственото правило, което наистина боли, когато не се спазва - тогава графиката трябва да се разглоби или да се преначертае, а точно този разход тази организация цели да избегне.

### Ефекти, които не оцеляват

Двигателят чертае върху HTML5 платно. Тези трябва да бъдат **вградени в изображението** или да отпаднат:

| Effect                                                        | What to do instead          |
| ------------------------------------------------------------- | --------------------------- |
| Live blur, drop shadows and glow as filters                   | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)    | Resolve them to flat colour |
| Ефекти на слоеве и коригиращи слоеве                          | Bake them in                |
| Градиенти **вътре** в текст, или текст с контур на всеки знак | Leave them out              |
| Маски, които се сменят при всеки кадър                        | Leave them out              |

Градиентите във фигури са наред. Прозрачността е наред. Сенките като фиксирана графика са наред.

### Как се държи текстът

Тук проектирането за QuizWitz се различава най-много от обичайната дизайнерска работа.

**Не задаваш размер на шрифта. Чертаеш правоъгълник.**

Целият текст се чертае на живо от компонент, който получава две неща: низ и правоъгълника, който си начертал. След това той търси **най-големия размер на шрифта, при който този низ, пренесен на редове, все още се побира в правоъгълника**. Дългият низ се смалява, за да се побере; късият расте, докато правоъгълникът се напълни.

![Избор, в който три реда с различна дължина получават различен размер на шрифта](/images/theme-design/frame1-general-multiquestion.png)

Три реда, три еднакви правоъгълника - и три напълно различни размера на шрифта, само защото текстът е по-къс или по-дълъг. „Where is love“ получава цялата височина; въпросът над него трябва да се справи с два малки реда. Етикетите отляво се държат по същия начин.

От това следва:

- **Един и същ въпрос изглежда различно в друга игра.** Въпрос от шест думи се появява голям и запълва екрана; въпрос от тридесет и пет думи се появява малък на пет реда, в точно същия правоъгълник. И двата трябва да изглеждат добре.
- **Проектирай всяко текстово поле два пъти.** Напълни го веднъж с много кратък пример и веднъж с много дълъг, и провери дали композицията се държи и в двата случая. Като ориентир: опция за отговор е от една до около осем думи, въпрос - от пет до четиридесет, име на играч - от два до двадесет знака.
- **Не разчитай на фиксиран брой редове.** Заглавие, което е „винаги на един ред“, тук не съществува.
- **Не подравнявай текста оптически с нищо друго.** Текст, който трябва да съвпадне с линия или с фигура, ще се измести веднага щом стане по-къс или по-дълъг. Използвай достатъчно просторни правоъгълници и подравняване (вляво, центрирано, вдясно) вместо точни позиции.
- **Дванадесет езика.** Немските сложни думи са дълги, а унгарският не е по-милостив. Правоъгълник, който е тесен на английски, пада до нечетливо малък размер на немски.
- **Вътре в текста може да се появят емоджита.** Играчите избират по едно до името на отбора си, а въпрос или опция може да съдържа някое - понякога една опция не е нищо друго освен емоджи. Те се чертаят в цвят и са по-високи от буквите около тях.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Не: при какъв кегел.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### Таймерът - задължителен, и е анимация

**Every question screen has a timer**; the room has to see how much time is left.

**Таймерът не е броящо число, а анимация, чиято глава за възпроизвеждане двигателят движи.** Ти проектираш преход от „пълно“ към „празно“ - изпразваща се лента, затварящ се пръстен, пясъчен часовник, скъсяваща се линия. Двигателят възпроизвежда тази анимация точно с такава скорост, че последният кадър да съвпадне с края на въпроса.

От това следва:

- **Продължителността на въпроса не е фиксирана.** Тя се задава за всеки куиз - често двадесет до тридесет секунди, но може да е по-къса или по-дълга. Твоята анимация се разтяга или свива, за да пасне.
- **Без цифри и без отброяване на всяка секунда.** Таймер, който брои „20, 19, 18…“, престава да е верен веднага щом продължителността се промени.
- **Последните секунди са най-напрегнатият момент от играта.** Помага, ако преходът става по-ясен или по-настоятелен към края.
- **Четлив от дъното на залата**, с един поглед.
- **Разрешени са няколко таймера.** Лента отгоре и пръстен до въпроса се управляват и двата, стига всеки да се казва `timer`.

Предай таймера като поредица от ключови кадри или като описание на прехода - „лентата се изпразва отдясно наляво и преминава от зелено към червено“ е достатъчно.

### Летящите емоджита кацат върху всичко

Всеки играч избира емоджи при присъединяването си, а играта хвърля тези емоджита из екрана. They are drawn by the engine on a layer above the theme. **Тук няма какво да проектираш** - но има около какво да проектираш, защото те не са рядка украса.

Появяват се в три момента:

- **Когато играч отговори.** Емоджито на този играч се издига от долния ръб на произволна хоризонтална позиция, описва дъга и пада обратно извън кадъра.
- **Когато играч хвърли някое.** Играчите могат да хвърлят емоджито си от телефона; ъгълът и скоростта идват от плъзгането, а то тръгва отдолу от средата, въртейки се.
- **Когато при финалното отброяване се разкрие място.** Залп от емоджитата на назования играч: двадесет за обикновено място, петдесет за третото, седемдесет и пет за второто и **сто и петдесет за победителя.**

Какво означава това за дизайна:

- **Дръж долната трета на екраните с класирането и с победителя свободна от всичко дребно или съществено.** По време на отброяването там долу наистина е претъпкано.
- **Приеми, че ще се бият с палитрата ти.** Това са пълноцветни емоджита от всяко ъгълче на таблицата Unicode и никоя тема не ги контролира. Дизайн, който се държи само в тесен цветови диапазон, ще изглежда случаен през тези секунди.
- **Хвърлянето е потиснато, докато се показва изображение или видео**, така че екраните с прикачен файл остават чисти.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Шрифтове

- **Шрифтовете трябва да могат да се вграждат.** Нужен е файлът `.ttf` или `.otf`, плюс лиценз, който разрешава вграждане в приложение. Шрифт, лицензиран само като уеб шрифт или само за печат, не може да се използва. Провери това, преди да проектираш с него; след това корекцията е скъпа.
- Шрифтове с необичайно големи горни или долни удължения могат да се компенсират, но съобщи, ако използваш такъв.

### Цветът като списък

Темата чете списък с цветове от конфигурационен файл, а телефоните на играчите се стилизират от същия списък. Предай палитрата си като **именуван списък**, а не само като цветове в графиката:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

На екрана на играта са разрешени градиенти: подай ги като две шестнадесетични стойности.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Ако ги пропуснеш, те падат до вградени стойности по подразбиране - бяло, сиво, червено, черно и бяло - които рядко пасват на един дизайн.

### Логото на QuizWitz

Персонализираните дизайни включват логото на QuizWitz. Запази му място там, където не пречи на дизайна.

---

## Какво да предадеш

### Изходен файл - за предпочитане Illustrator

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                                                | Use it for                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. Точно тази стъпка спасява графиката от това да бъде изграждана наново на ръка.                                                                | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                                                 | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Ако все пак използваш Figma, предай **всеки елемент поотделно като SVG**, с имена на файлове, съответстващи на имената на слоевете, за да може структурата да се възстанови на ръка. | The concept phase, if you are faster in it |

Структура на файла:

- One artboard per screen, named after the frames above.
- Частите за многократна употреба (бутон, ред на играч, опция за отговор, таймер) като **символи** или компоненти, а не като отделни копия.
- Имена на слоевете на английски, без интервали: `question`, `option1` до `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Цветовете като именувани мостри и текстът като именувани стилове, вместо зададени за всеки обект поотделно.

### Списък с материалите за предаване

1. **Изходният файл**, структуриран както е описано по-горе.
2. **Всяка рамка като PNG**, 1920 × 1080 - еталон за това как трябва да изглежда. За рамка 2 както версията с клиентско лого, така и версията без него.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Всеки отделен графичен елемент като прозрачен PNG в 2×**, в една папка, с име на файла, съответстващо на името на слоя.
5. **Таймерът** като ключови кадри или като писмено описание на прехода.
6. **Шрифтовете** като `.ttf` или `.otf`, с доказателство за лиценз.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Половин страница бележки**: каква е идеята, как трябва да се появяват опциите, какво се движи и какво остава неподвижно. Не десетстранична дизайнерска обосновка - този, който изгражда темата, трябва да знае какво да изгради. Идеите за движение могат да бъдат описани или предадени като груб аниматик.

### Ред на работа

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Приложение - имена на символите

За пълнота и за онзи, който иска да знае точно къде попада графиката му. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Използването на тези имена като имена на слоеве спестява една стъпка на превод.

| Рамка                                              | Име на символа                                                                                                                            | Задължителни части                                                                                                                                                                                |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Обща рамка               | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` по избор                                                                         | `placeholder` (зоната за съдържание); текстово поле `title` по избор                                                                                                           |
| 1b. Избор на въпроси, дълъг въпрос | `MultiQuestionScreen`, `LongQuestionScreen`; и двата по избор, връщат се към общата рамка                                                 | избор: заместител `questions`, `timer`; дълъг въпрос: заместител `question`                                                                                       |
| 2. Екран за свързване       | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` по избор, със заместител `logo`                                          | `instructions.line1` до `line5`, `connectedPlayers`; заместител `qrCode` с етикет на кадър `showQrCode` по избор                                                                                  |
| 3. Екран за изчакване       | `PendingScreen`; `PendingScreenWithLogo` по избор                                                                                         | `header.text`                                                                                                                                                                                     |
| 4. Екран с въпроса          | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` до `option4`, етикети на кадри `showOptions` и `showFeedback`                                                                                |
| 5. Въпрос с прикачен файл   | `QuestionScreenAttachment`                                                                                                                | както по-горе, плюс `attachment.placeholder`                                                                                                                                                      |
| 5b. Прикачен файл на цял екран     | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                     |
| 6. Екран с отговора         | `AnswerPieScreen`; `AnswerPieScreenAttachment` по избор                                                                                   | `option1` до `option4`, `answer.text`, `feedback.text`                                                                                                                                            |
| 6b. Отговор на отворен въпрос      | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; вариантите `…Attachment` по избор                                                          | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                             |
| 7. Класиране                | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` и `PlayerScoreNoImage` по избор                                 | `header.text`, `players`, `feedback.text` (`playAgain.text` по избор); в реда: `position`, `name`, `score`, `avatar` по избор                                  |
| 8. Интро на рунда           | един или повече символа с произволно име; конфигурационният файл свързва всяка от шестте категории със символ                             | -                                                                                                                                                                                                 |
| -                                                  | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                |
| -                                                  | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | не се нуждаят от собствена графика - изграждат се от това, което се появява в твоите рамки                                                                                                        |
| -                                                  | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | показват се само в настолното приложение, не в куиз на живо. Не са част от заданието: взети са от шаблона на темата и се престилизират с твоя фон и твоите бутони |

Символите за интро на рунда в стандартната тема се казват `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` и `RoundIntroTedCultHist`; изкуството и историята споделят последния. „Ted“ в тези имена е остатък от героя на оригиналната тема и не означава, че в тях трябва да се появява герой.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. Елементът `timer` е филмов клип със собствена времева линия; двигателят чете броя на кадрите му и мести главата за възпроизвеждане пропорционално на изминалото време, най-много 24 пъти в секунда.

### Какво взема конфигурационният файл от твоя дизайн

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

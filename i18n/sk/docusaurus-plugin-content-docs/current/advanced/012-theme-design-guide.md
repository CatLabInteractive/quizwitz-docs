---
id: theme-design-guide
title: Sprievodca návrhom témy
---

# Sprievodca návrhom témy

[Témy](/docs/advanced/theming) vysvetľujú, ako sa téma QuizWitz stavia: v Adobe Animate, exportovaná ako knižnica CreateJS. Táto stránka sa venuje kroku, ktorý tomu predchádza - **návrhu** témy.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Táto stránka túto podobu opisuje a zároveň slúži ako zoznam podkladov na dodanie, keď si od grafika vyžiadaš cenovú ponuku.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Ak chceš zmeniť len farby, písma a pozadia, nič z tohto nepotrebuješ - uprav si namiesto toho [tému Emerald](/docs/advanced/emerald-theme).
:::

:::info[Pozri sa, ako to beží]
Každú tu opísanú obrazovku si môžeš naživo prehrať s ukážkovými údajmi v **testeri tém** na adrese [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Načíta tému a ponúkne ponuku testovacích obrazoviek: otázky s prílohou aj bez nej, rozloženie odpovedí pre malú aj veľkú skupinu, rebríček, intrá kôl, obrazovku pripojenia s logom klienta aj bez neho a tak ďalej. Pridaj do adresy `?theme=emerald`, aby si si pozrel [tému Emerald](/docs/advanced/emerald-theme). Ten, kto tému stavia, používa tú istú stránku na kontrolu počas skladania.
:::

---

## Čo navrhuješ

Hru QuizWitz hrá celá sála naraz a vždy sú v hre dve obrazovky:

- **Herná obrazovka** - projektor alebo televízor, 1920 × 1080. Otázky, odpovede, ako sa rozložili odpovede sály, rebríček. Toto navrhuješ ty.
- **Telefón každého hráča**, na ktorom píše svoju odpoveď. To je webová stránka s pevným rozložením; štýluje sa z tvojho zoznamu farieb, rozloženie neurčuješ ty.

Téma je celý vizuálny plášť hernej obrazovky: pozadie, typografia, farba, spôsob, akým sa prezentuje otázka so štyrmi možnosťami, ako sa buduje rebríček, ako sa ohlasuje kolo.

---

## Eight frames and an element sheet

Hra má desiatky odlišných stavov obrazovky, ale väčšina sú varianty toho istého rozloženia. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Obrazovka bez vlastnej grafiky sa vracia k všeobecnému rámcu.

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
Obrazovky nižšie pochádzajú z existujúcej témy. They show **which elements appear on each screen and when**. Nie sú referenciou pre štýl _ani_ pre rozloženie: kam táto téma umiestňuje svoju otázku, svoje možnosti a svoju časomieru, je jej vlastné rozhodnutie, a to tvoje sa môže úplne líšiť.
:::

### Rámec 1 - všeobecný rámec

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. Výber otázok a dlhá otázka môžu dostať vlastnú kompozíciu, ak to tak chceš; inak používajú tento rámec.

Dva herné momenty na tom istom rámci: výber otázok a bodový rebrík.

![Všeobecný rámec s výberom otázok o troch riadkoch](/images/theme-design/frame1-general-multiquestion.png)

![Všeobecný rámec s bodovým rebríkom o piatich úrovniach](/images/theme-design/frame1-general-strikeladder.png)

Pozri sa, ako málo majú spoločné. Výber dáva svoje tri riadky do panela s obrysom; rebrík nemá panel vôbec, len riadky oddelené tenkými linkami. Čo tie dva zdieľajú, je pozadie a pruh hlavičky nad nimi - všetko pod tým patrí konkrétnej obrazovke a vypĺňa to hra, nie ty.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Čo musí tento rámec zvládnuť, je uniesť ich: navrhni obsahovú plochu ako prázdnu, neutrálnu a priestrannú zónu, ktorá funguje rovnako dobre s orámovaným panelom, s holým zoznamom aj s tabuľkou riadkov. Pozadie, ktoré je uprostred rušné, alebo hlavička, ktorá funguje len s panelom zastrčeným tesne pod ňou, je miesto, kde sa to láme.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Obrazovka pripojenia s logom klienta](/images/theme-design/frame2-connect.png)

![Obrazovka pripojenia bez loga klienta](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Čakacia obrazovka](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Obrazovka otázky so štyrmi textovými možnosťami](/images/theme-design/frame3-question-options.png)

![Obrazovka otázky s vlajkami ako možnosťami odpovede](/images/theme-design/frame3-question-emoji.png)

Otázka bez možností - hráči píšu odpoveď na telefóne. Obrazovka je takmer prázdna a hlavným prvkom sa stáva časomiera:

![Otvorená otázka len s otázkou a veľkou časomierou](/images/theme-design/frame3-question-open.png)

Okamih, keď vyprší čas. Cez obrazovku sa objaví bublina spätnej väzby a časomiera je prázdna:

![Obrazovka otázky v stave vypršania času](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. Príloha sa zmenší tak, aby sa zmestila do rámčeka, ktorý nakreslíš, takže v ňom musí prijateľne vyzerať obrázok na šírku aj na výšku.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Obrazovka otázky s obrázkom uprostred](/images/theme-design/frame4-question-attachment.png)

Príloha sama osebe, cez celú obrazovku:

![Príloha na celú obrazovku](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Najprv rozloženie, zatiaľ bez čohokoľvek označeného:

![Obrazovka odpovede s rozložením](/images/theme-design/frame5-answer-mc-spread.png)

Potom sa správna možnosť začiarkne a nesprávne sa prečiarknu:

![Obrazovka odpovede s odhalenou správnou možnosťou](/images/theme-design/frame5-answer-mc-reveal.png)

A ak má otázka vysvetlenie, spadne cez grafiku bublina. Nechaj na ňu miesto - pristane cez všetko, čo si navrhol:

![Obrazovka odpovede s bublinou vysvetlenia](/images/theme-design/frame5-answer-mc-explanation.png)

Pri malej skupine je ten istý moment zoznamom skóre namiesto grafu:

![Obrazovka odpovede pre malú skupinu](/images/theme-design/frame5-answer-mc-small.png)

Pri otvorenej otázke graf ukazuje, koľko hráčov ju malo správne:

![Obrazovka odpovede pre otvorenú otázku](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Rebríček so šiestimi riadkami hráčov](/images/theme-design/frame6-roundoutro.png)

Záverečné odpočítavanie menuje jedného hráča po druhom, od posledného miesta k prvému - miesto, skóre a názov tímu vo svetle reflektorov. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![Odpočítavanie víťaza menujúce jedného hráča](/images/theme-design/frame6-winner-countdown.png)

![Konečný rebríček](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Kategórií je šesť: veda a technika, príroda, zábava a hudba, šport, umenie, história.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Intro kola pre kategóriu príroda](/images/theme-design/frame7-roundintro-nature.png)

![Intro kola pre kategóriu veda](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Bez postavy sa z intra kola stáva grafický, typografický alebo ilustratívny moment. Dva prístupy udržia prácu v rozumnom rozsahu: jedna kompozícia s farebným alebo ikonovým variantom pre každú kategóriu, alebo jediné univerzálne ohlásenie, v ktorom sa mení len názov kola. Šesť naozaj odlišných inter je veľa práce na pár sekúnd na obrazovke.

---

## Hárok prvkov

Dve skupiny prvkov na jednom hárku, každý nakreslený raz a používaný všade.

**Stavebné kamene obsahu.** Tie vypĺňajú obsahovú plochu všeobecného rámca. Obrazovky, ktoré sa k nemu vracajú, sa z nich skladajú, takže to, čo tu nakreslíš, rozhoduje o vzhľade všetkých:

- **panel**: výplň, obrys, zaoblenie rohov - kontajner, v ktorom sedí zoznam alebo blok textu
- **riadok zoznamu**: opakujúca sa jednotka akéhokoľvek zoznamu, s vlastným pozadím alebo bez neho
- **oddeľovač**: linka medzi riadkami tam, kde nie je panel
- **dvojica popis a hodnota**: krátky popis vľavo, hodnota vpravo

**Ovládacie prvky.** Nakreslené raz, používané na každej obrazovke:

- **tlačidlo** v jeho štyroch stavoch: pokoj, prejdenie myšou, stlačené, zakázané
- symboly pre **správne** a **nesprávne**
- **posuvník**, **začiarkavacie políčko**, **rozbaľovací zoznam**
- kde sedí **logo QuizWitz**

---

## Čo je rozhodnuté za teba

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Ktoré obrazovky sa vracajú k všeobecnému rámcu a ako.**
- **Ako sa šesť kategórií mapuje na grafiku intra kola.** To priradenie je nastavenie v konfigurácii, takže jedno intro sa dá znovu použiť pre viac kategórií.
- **Všetko časovanie a všetky dĺžky animácií.**
- **Zvuk.** Téma môže mať vlastnú hudbu a zvukové efekty, ale to je samostatný podklad na dodanie a nie je súčasťou zadania návrhu.

---

## Pravidlá návrhu

Žiadne z nich neobmedzuje tvoj vizuálny návrh. Týkajú sa toho, ako je postavený súbor.

### Formát

- **1920 × 1080 pixelov**, presne. Jeden rámec na obrazovku.
- Pracuj **vektorovo**, kde sa dá. Tam, kde použiješ raster (fotky, textúry): aspoň 2× veľkosť zobrazenia.
- Dokument Animate beží na **24 snímkach za sekundu**. Podstatné, ak dodávaš nápady na pohyb.
- Nechaj **5% okraj** pri krajoch voľný od podstatných informácií. Projektory orezávajú.

### Štruktúra vrstiev - pravidlo, na ktorom záleží najviac

**Všetko, čo sa môže hýbať, objaviť alebo zmeniť hodnotu, leží vo vlastnej pomenovanej vrstve.** Nič zlúčené, nič zliate.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Čo zlúčené byť smie: čisto dekoratívna grafika pozadia, ktorá funguje ako jediný statický obrázok.

Toto je to jediné pravidlo, ktoré naozaj bolí, keď sa nedodrží - grafiku je potom nutné rozobrať alebo prekresliť, a presne tomu nákladu má toto usporiadanie predísť.

### Efekty, ktoré to neprežijú

Engine kreslí na plátno HTML5. Tieto je nutné **zapiecť do obrázka** alebo ich vynechať:

| Effect                                                                  | What to do instead          |
| ----------------------------------------------------------------------- | --------------------------- |
| Live blur, drop shadows and glow as filters                             | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)              | Resolve them to flat colour |
| Efekty vrstiev a vrstvy úprav                                           | Bake them in                |
| Prechody **vnútri** textu alebo text s obrysom pri jednotlivých znakoch | Leave them out              |
| Masky, ktoré sa menia snímka od snímky                                  | Leave them out              |

Prechody v tvaroch sú v poriadku. Priehľadnosť je v poriadku. Tiene ako pevná grafika sú v poriadku.

### Ako sa správa text

Tu sa navrhovanie pre QuizWitz najviac líši od bežnej návrhárskej práce.

**Nenastavuješ veľkosť písma. Kreslíš rámček.**

Celý text kreslí naživo komponent, ktorý dostane dve veci: reťazec a obdĺžnik, ktorý si nakreslil. Potom hľadá **najväčšiu veľkosť písma, pri ktorej sa ten reťazec zalomený do riadkov ešte zmestí do rámčeka**. Dlhý reťazec sa zmenší, aby sa zmestil; krátky rastie, kým nie je rámček plný.

![Výber, v ktorom tri rôzne dlhé riadky dostávajú každý inú veľkosť písma](/images/theme-design/frame1-general-multiquestion.png)

Tri riadky, tri rovnaké rámčeky - a tri úplne rôzne veľkosti písma, čisto preto, že text je kratší alebo dlhší. „Where is love“ dostane celú výšku; otázka nad ním si musí vystačiť s dvoma malými riadkami. Popisy vľavo sa správajú rovnako.

Z toho vyplýva:

- **Tá istá otázka vyzerá v inej hre inak.** Šesťslovná otázka sa objaví veľká a vyplní obrazovku; tridsaťpäťslovná sa objaví malá na piatich riadkoch, v presne tom istom rámčeku. Obe musia vyzerať dobre.
- **Navrhni každý textový rámček dvakrát.** Naplň ho raz veľmi krátkou ukážkou a raz veľmi dlhou a skontroluj, že kompozícia drží v oboch prípadoch. Ako orientačné pravidlo: možnosť odpovede má od jedného do zhruba ôsmich slov, otázka od piatich do štyridsiatich, meno hráča od dvoch do dvadsiatich znakov.
- **Nepočítaj s pevným počtom riadkov.** Titulok, ktorý je „vždy na jednom riadku“, tu neexistuje.
- **Nezarovnávaj text opticky s ničím iným.** Text, ktorý sa má zrovnať s linkou alebo tvarom, sa posunie, len čo bude kratší alebo dlhší. Používaj rámčeky, ktoré sú dosť priestranné, a zarovnanie (vľavo, na stred, vpravo) namiesto presných pozícií.
- **Dvanásť jazykov.** Nemecké zloženiny sú dlhé a maďarčina nie je o nič láskavejšia. Rámček, ktorý je v angličtine tesný, spadne v nemčine na nečitateľne malú veľkosť.
- **Vnútri textu sa môžu objaviť emoji.** Hráči si jedno vyberajú vedľa názvu tímu a otázka alebo možnosť môže nejaké obsahovať - niekedy je možnosť len emoji a nič viac. Kreslia sa farebne a sú vyššie než písmená okolo nich.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Nie: v akej veľkosti bodov.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### Časomiera - povinná, a je to animácia

**Every question screen has a timer**; the room has to see how much time is left.

**Časomiera nie je odpočítavajúce číslo, ale animácia, ktorej prehrávaciu hlavu posúva engine.** Navrhuješ postup od „plno“ k „prázdno“ - vyprázdňujúci sa pruh, uzatvárajúci sa kruh, presýpacie hodiny, skracujúca sa linka. Engine prehrá tú animáciu presne takou rýchlosťou, aby posledná snímka padla na koniec otázky.

Z toho vyplýva:

- **Dĺžka otázky nie je pevná.** Nastavuje sa pre každý kvíz - často dvadsať až tridsať sekúnd, ale môže byť kratšia aj dlhšia. Tvoja animácia sa natiahne alebo stlačí, aby sedela.
- **Žiadne čísla ani tikanie po sekundách.** Časomiera, ktorá odpočítava „20, 19, 18…“, prestane platiť, len čo sa dĺžka zmení.
- **Posledné sekundy sú najnapínavejší moment hry.** Pomáha, keď je postup ku koncu zreteľnejší alebo naliehavejší.
- **Čitateľné zo zadnej časti sály**, na prvý pohľad.
- **Viac časomier je povolených.** Pruh hore aj kruh pri otázke sú oba riadené, pokiaľ sa každý volá `timer`.

Dodaj časomieru ako sériu kľúčových snímok alebo ako opis postupu - „pruh sa vyprázdňuje sprava doľava a mení farbu zo zelenej na červenú“ stačí.

### Lietajúce emoji pristávajú cez všetko

Každý hráč si pri pripojení vyberie emoji a hra tie emoji rozhadzuje po obrazovke. They are drawn by the engine on a layer above the theme. **Tu pre teba nie je čo navrhovať** - ale je okolo čoho navrhovať, lebo to nie je vzácna ozdoba.

Objavujú sa v troch momentoch:

- **Keď hráč odpovie.** Emoji toho hráča stúpa od spodného okraja na náhodnej vodorovnej pozícii, opíše oblúk a spadne späť mimo obrazu.
- **Keď ho hráč vymrští.** Hráči môžu svoje emoji vymrštiť z telefónu; uhol a rýchlosť vychádzajú zo švihu prstom a emoji štartuje zospodu zo stredu, roztočené.
- **Keď sa v záverečnom odpočítavaní odhalí miesto.** Salva emoji menovaného hráča: dvadsať za bežné miesto, päťdesiat za tretie, sedemdesiatpäť za druhé a **stopäťdesiat za víťaza.**

Čo to znamená pre návrh:

- **Nechaj spodnú tretinu obrazoviek s rebríčkom a víťazom voľnú od čohokoľvek malého alebo zásadného.** Počas odpočítavania je tam dole naozaj plno.
- **Počítaj s tým, že sa budú biť s tvojou paletou.** Sú to plnofarebné emoji zo všetkých kútov tabuľky Unicode a žiadna téma ich neovláda. Návrh, ktorý drží pokope len v úzkom farebnom rozsahu, bude po tie sekundy pôsobiť náhodne.
- **Vymršťovanie je potlačené, kým sa zobrazuje obrázok alebo video**, takže obrazovky s prílohou zostávajú čisté.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Písma

- **Písma musia byť vložiteľné.** Je potrebný súbor `.ttf` alebo `.otf` a k tomu licencia, ktorá povoľuje vloženie do aplikácie. Písmo licencované len ako webfont alebo len pre tlač použiť nemožno. Over si to skôr, než s ním začneš navrhovať; dodatočná oprava je drahá.
- Písma s nezvyčajne veľkými hornými alebo dolnými dotiahnutiami sa dajú vykompenzovať, ale daj vedieť, ak nejaké použiješ.

### Farba ako zoznam

Téma číta zoznam farieb z konfiguračného súboru a telefóny hráčov sa štýlujú z toho istého zoznamu. Dodaj svoju paletu ako **pomenovaný zoznam**, nie len ako farby v grafike:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

Na hernej obrazovke sú povolené prechody: uveď ich ako dve hexadecimálne hodnoty.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Keď ich vynecháš, spadnú na vstavané predvolené hodnoty - bielu, sivú, červenú, čiernu a bielu - ktoré k návrhu málokedy sedia.

### Logo QuizWitz

Vlastné návrhy obsahujú logo QuizWitz. Vyhraď preň miesto tam, kde neprekáža návrhu.

---

## Čo odovzdať

### Zdrojový súbor - najlepšie Illustrator

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                  | Use it for                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. Presne tento krok zachráni grafiku pred tým, aby sa musela stavať ručne znovu.                                  | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                   | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Ak Figmu aj tak použiješ, dodaj **každý prvok zvlášť ako SVG**, s názvami súborov zodpovedajúcimi názvom vrstiev, aby sa štruktúra dala ručne obnoviť. | The concept phase, if you are faster in it |

Štruktúra súboru:

- One artboard per screen, named after the frames above.
- Opakovane použiteľné časti (tlačidlo, riadok hráča, možnosť odpovede, časomiera) ako **symboly** alebo komponenty, nie ako voľné kópie.
- Názvy vrstiev po anglicky, bez medzier: `question`, `option1` až `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farby ako pomenované vzorkovníky a text ako pomenované štýly, namiesto nastavenia na každom objekte zvlášť.

### Zoznam podkladov na dodanie

1. **Zdrojový súbor**, štruktúrovaný ako je opísané vyššie.
2. **Každý rámec ako PNG**, 1920 × 1080 - referencia toho, ako to má vyzerať. Pri rámci 2 verziu s logom klienta aj verziu bez neho.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Každý samostatný grafický prvok ako priehľadné PNG v 2×**, v jednom priečinku, s názvom súboru zodpovedajúcim názvu vrstvy.
5. **Časomiera** ako kľúčové snímky alebo písomný opis postupu.
6. **Písma** ako `.ttf` alebo `.otf`, s dokladom o licencii.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Pol strany poznámok**: aká je myšlienka, ako sa majú možnosti objavovať, čo sa hýbe a čo zostáva stáť. Nie desaťstranové zdôvodnenie návrhu - ten, kto tému stavia, potrebuje vedieť, čo má postaviť. Nápady na pohyb môžu byť opísané alebo dodané ako hrubý animatic.

### Poradie práce

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Príloha - názvy symbolov

Pre úplnosť a pre toho, kto chce presne vedieť, kde jeho grafika skončí. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Používať tieto názvy ako názvy vrstiev ušetrí jeden prekladový krok.

| Rámec                                          | Názov symbolu                                                                                                                             | Povinné časti                                                                                                                                                                                  |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Všeobecný rámec      | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` voliteľne                                                                        | `placeholder` (obsahová plocha); textový rámček `title` voliteľne                                                                                                           |
| 1b. Výber otázok, dlhá otázka  | `MultiQuestionScreen`, `LongQuestionScreen`; oba voliteľne, vracajú sa k všeobecnému rámcu                                                | výber: zástupný prvok `questions`, `timer`; dlhá otázka: zástupný prvok `question`                                                                             |
| 2. Obrazovka pripojenia | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` voliteľne, so zástupným prvkom `logo`                                    | `instructions.line1` až `line5`, `connectedPlayers`; zástupný prvok `qrCode` s návestím snímky `showQrCode` voliteľne                                                                          |
| 3. Čakacia obrazovka    | `PendingScreen`; `PendingScreenWithLogo` voliteľne                                                                                        | `header.text`                                                                                                                                                                                  |
| 4. Obrazovka otázky     | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` až `option4`, návestia snímok `showOptions` a `showFeedback`                                                                              |
| 5. Otázka s prílohou    | `QuestionScreenAttachment`                                                                                                                | ako vyššie, plus `attachment.placeholder`                                                                                                                                                      |
| 5b. Príloha na celú obrazovku  | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                  |
| 6. Obrazovka odpovede   | `AnswerPieScreen`; `AnswerPieScreenAttachment` voliteľne                                                                                  | `option1` až `option4`, `answer.text`, `feedback.text`                                                                                                                                         |
| 6b. Odpoveď na otvorenú otázku | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; varianty `…Attachment` voliteľne                                                           | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 7. Rebríček             | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` a `PlayerScoreNoImage` voliteľne                                | `header.text`, `players`, `feedback.text` (`playAgain.text` voliteľne); v riadku: `position`, `name`, `score`, `avatar` voliteľne                           |
| 8. Intro kola           | jeden alebo viac symbolov s ľubovoľným názvom; konfiguračný súbor priraďuje každej zo šiestich kategórií jeden symbol                     | -                                                                                                                                                                                              |
| -                                              | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                             |
| -                                              | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | vlastnú grafiku nepotrebujú - stavajú sa z toho, čo sa objaví v tvojich rámcoch                                                                                                                |
| -                                              | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | zobrazujú sa len v desktopovej aplikácii, nie v živom kvíze. Nie sú súčasťou zadania: preberajú sa zo šablóny témy a preštýlujú sa tvojím pozadím a tlačidlami |

Symboly intra kola v predvolenej téme sa volajú `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` a `RoundIntroTedCultHist`; umenie a história zdieľajú ten posledný. „Ted“ v tých názvoch je pozostatok postavy z pôvodnej témy a neznamená, že sa v nich postava musí objaviť.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. Prvok `timer` je filmový klip s vlastnou časovou osou; engine si prečíta počet jeho snímok a posúva prehrávaciu hlavu úmerne uplynulému času, najviac 24-krát za sekundu.

### Čo si konfiguračný súbor berie z tvojho návrhu

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

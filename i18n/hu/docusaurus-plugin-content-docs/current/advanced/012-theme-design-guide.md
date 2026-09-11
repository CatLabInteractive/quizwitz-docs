---
id: theme-design-guide
title: Témakészítési útmutató
---

# Témakészítési útmutató

A [témák](/docs/advanced/theming) leírják, hogyan épül fel egy QuizWitz-téma: Adobe Animate-ben, CreateJS-könyvtárként exportálva. Ez az oldal az azt megelőző lépésről szól - a téma **megtervezéséről**.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. Ez az oldal ezt a formát írja le, és egyben a leadandó anyagok listájaként is szolgál, amikor árajánlatot kérsz egy grafikustól.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
Ha csak a színeket, a betűtípusokat és a hátteret akarod megváltoztatni, ebből semmire nincs szükséged - inkább az [Emerald témát](/docs/advanced/emerald-theme) szabd testre.
:::

:::info[Nézd meg működés közben]
Az itt leírt összes képernyő élőben, mintaadatokkal kipróbálható a **témateszterben** a [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html) címen. Betölt egy témát, és tesztképernyők menüjét kínálja: kérdések melléklettel és anélkül, a válaszok megoszlása kis és nagy csoportnál, a rangsor, a fordulóintrók, a csatlakozási képernyő ügyféllogóval és anélkül, és így tovább. Írd a cím végére a `?theme=emerald` paramétert, hogy lásd az [Emerald témát](/docs/advanced/emerald-theme). Aki a témát építi, ugyanezt az oldalt használja az ellenőrzésre az összeállítás közben.
:::

---

## Mit tervezel

Egy QuizWitz-játékot egy egész terem játszik egyszerre, és mindig két képernyő van játékban:

- **A játékképernyő** - projektor vagy tévé, 1920 × 1080. Kérdések, válaszok, hogyan oszlottak meg a terem válaszai, a rangsor. Ezt tervezed te.
- **Minden játékos telefonja**, amin begépeli a válaszát. Ez egy rögzített elrendezésű weboldal; a te színlistádból kapja a stílusát, nem te rendezed el.

A téma a játékképernyő teljes vizuális burka: háttér, tipográfia, szín, ahogy egy négy válaszlehetőséges kérdés megjelenik, ahogy a rangsor felépül, ahogy egy forduló bejelentésre kerül.

---

## Eight frames and an element sheet

A játéknak több tucat különálló képernyőállapota van, de a legtöbb ugyanannak az elrendezésnek a változata. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. Az a képernyő, amelynek nincs saját grafikája, egy általános keretre esik vissza.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | Keret                                                           | Also covers                                                               |
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
Az alábbi képernyők egy létező témából származnak. They show **which elements appear on each screen and when**. Sem a stílusra, sem az elrendezésre nem referenciák: hogy ez a téma hova teszi a kérdését, a válaszlehetőségeit és az időzítőjét, az a saját döntése, és a tiéd ettől teljesen eltérhet.
:::

### Keret 1 - az általános keret

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. A kérdésválasztó és a hosszú kérdés kaphat saját kompozíciót, ha úgy szeretnéd; egyébként ezt a keretet használják.

Két játékpillanat ugyanazon a kereten: egy kérdésválasztó és egy pontlétra.

![Az általános keret háromsoros kérdésválasztóval](/images/theme-design/frame1-general-multiquestion.png)

![Az általános keret ötszintes pontlétrával](/images/theme-design/frame1-general-strikeladder.png)

Nézd meg, milyen kevés bennük a közös. A választó a három sorát keretvonalas panelbe teszi; a létrának egyáltalán nincs panelje, csak vékony vonalakkal elválasztott sorai. Ami a kettőben közös, az a háttér és a fölöttük lévő fejlécsáv - minden, ami ez alatt van, az egyes képernyőhöz tartozik, és a játék tölti ki, nem te.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. Amit ennek a keretnek tennie kell, az az, hogy elbírja őket: a tartalomterületet üres, semleges, tágas zónaként tervezd meg, amely ugyanúgy működik keretvonalas panellel, csupasz listával és sortáblázattal is. Egy középen zsúfolt háttér, vagy egy olyan fejléc, amely csak közvetlenül alá bújtatott panellel működik, ott törik el ez.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![Csatlakozási képernyő ügyféllogóval](/images/theme-design/frame2-connect.png)

![Csatlakozási képernyő ügyféllogó nélkül](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![Várakozó képernyő](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![Kérdésképernyő négy szöveges válaszlehetőséggel](/images/theme-design/frame3-question-options.png)

![Kérdésképernyő zászlókkal mint válaszlehetőségekkel](/images/theme-design/frame3-question-emoji.png)

Válaszlehetőségek nélküli kérdés - a játékosok a telefonjukon gépelik be a választ. A képernyő majdnem üres, és az időzítő lesz a fő elem:

![Nyílt kérdés csak a kérdéssel és egy nagy időzítővel](/images/theme-design/frame3-question-open.png)

Az a pillanat, amikor lejár az idő. A visszajelzési buborék megjelenik a képernyő fölött, az időzítő pedig üres:

![Kérdésképernyő a lejárt idő állapotában](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. A mellékletet a rendszer az általad rajzolt dobozba illeszti, ezért fekvő és álló képnek egyaránt elfogadhatóan kell kinéznie benne.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![Kérdésképernyő középen egy képpel](/images/theme-design/frame4-question-attachment.png)

Egy melléklet önmagában, a képernyőt kitöltve:

![Teljes képernyős melléklet](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. Először a megoszlás, még jelölés nélkül:

![Válaszképernyő a megoszlással](/images/theme-design/frame5-answer-mc-spread.png)

Aztán a helyes válaszlehetőséget kipipálja, a rosszakat pedig áthúzza:

![Válaszképernyő a felfedett helyes válaszlehetőséggel](/images/theme-design/frame5-answer-mc-reveal.png)

És ha a kérdéshez tartozik magyarázat, egy buborék ereszkedik a grafika fölé. Hagyj neki helyet - bármire ráérkezik, amit terveztél:

![Válaszképernyő a magyarázatbuborékkal](/images/theme-design/frame5-answer-mc-explanation.png)

Kis csoportnál ugyanez a pillanat pontlista, nem diagram:

![Válaszképernyő kis csoport esetén](/images/theme-design/frame5-answer-mc-small.png)

Nyílt kérdésnél a diagram azt mutatja, hány játékos találta el:

![Válaszképernyő nyílt kérdés esetén](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![Rangsor hat játékossorral](/images/theme-design/frame6-roundoutro.png)

A záró visszaszámlálás egyszerre egy játékost nevez meg, az utolsó helytől az elsőig - helyezés, pontszám és csapatnév a reflektorfényben. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![A győzteseket visszaszámláló képernyő egy játékost megnevezve](/images/theme-design/frame6-winner-countdown.png)

![A végső rangsor](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. Hat kategória van: tudomány és technika, természet, szórakozás és zene, sport, művészet, történelem.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![Fordulóintró a természet kategóriához](/images/theme-design/frame7-roundintro-nature.png)

![Fordulóintró a tudomány kategóriához](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

Figura nélkül a fordulóintróból grafikai, tipográfiai vagy illusztratív pillanat lesz. Két megközelítés tartja arányban a munkát: egy kompozíció kategóriánként egy szín- vagy ikonváltozattal, vagy egyetlen univerzális bejelentés, amelyben csak a forduló neve változik. Hat valóban különböző intró sok munka néhány másodpercnyi képernyőidőért.

---

## Az elemlap

Két elemcsoport egy lapon, mindegyik egyszer megrajzolva és mindenhol újrafelhasználva.

**Tartalmi építőelemek.** Ezek töltik ki az általános keret tartalomterületét. A rá visszaeső képernyők ezekből állnak össze, tehát amit ide rajzolsz, az dönti el, hogyan néznek ki mindannyian:

- egy **panel**: kitöltés, keretvonal, sarokkerekítés - az a tároló, amiben egy lista vagy egy szövegblokk ül
- egy **listasor**: bármely lista ismétlődő egysége, saját háttérrel vagy anélkül
- egy **elválasztó**: a sorok közötti vonal ott, ahol nincs panel
- egy **címke-érték pár**: rövid címke balra, érték jobbra

**Vezérlők.** Egyszer megrajzolva, minden képernyőn használva:

- egy **gomb** a négy állapotában: nyugalmi, ráhúzott egér, lenyomott, letiltott
- a **helyes** és **helytelen** szimbólumok
- egy **görgetősáv**, egy **jelölőnégyzet**, egy **legördülő lista**
- hol van a **QuizWitz-logó**

---

## Amit eldöntöttek helyetted

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **Mely képernyők esnek vissza az általános keretre, és hogyan.**
- **Hogyan feleltethető meg a hat kategória a fordulóintró grafikájának.** Ez a hozzárendelés egy konfigurációs beállítás, tehát egy intró több kategóriához is újrafelhasználható.
- **Minden időzítés és minden animációhossz.**
- **A hang.** Egy téma hozhat saját zenét és hangeffekteket, de ez külön leadandó anyag, és nem része a tervezési feladatnak.

---

## Tervezési szabályok

Ezek közül egyik sem korlátozza a vizuális tervedet. Arról szólnak, hogyan épül fel a fájl.

### Formátum

- **1920 × 1080 képpont**, pontosan. Képernyőnként egy keret.
- Dolgozz **vektorosan**, ahol csak tudsz. Ahol rasztert használsz (fotók, textúrák): legalább a megjelenítési méret 2×-ese.
- Az Animate-dokumentum **másodpercenként 24 képkockával** fut. Akkor lényeges, ha mozgásötleteket is adsz.
- Hagyj **5% margót** a széleken, lényeges információtól mentesen. A projektorok levágnak.

### Rétegszerkezet - a szabály, amely a legtöbbet számít

**Minden, ami mozoghat, megjelenhet vagy értéket válthat, saját, elnevezett rétegen van.** Semmi összevonva, semmi lapítva.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

Amit össze lehet vonni: a tisztán dekoratív háttérgrafika, amely egyetlen állóképként működik.

Ez az az egyetlen szabály, amelynek a megszegése tényleg fáj - a grafikát ilyenkor szét kell szedni vagy újra kell rajzolni, és pontosan ezt a költséget hivatott elkerülni ez a felállás.

### Effektek, amelyek nem élik túl

A motor HTML5-vászonra rajzol. Ezeket **bele kell égetni a képbe**, vagy el kell hagyni:

| Effect                                                                   | What to do instead          |
| ------------------------------------------------------------------------ | --------------------------- |
| Live blur, drop shadows and glow as filters                              | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)               | Resolve them to flat colour |
| Rétegeffektek és korrekciós rétegek                                      | Bake them in                |
| Színátmenet a szövegen **belül**, vagy karakterenkénti körvonalas szöveg | Leave them out              |
| Képkockánként változó maszkok                                            | Leave them out              |

Az alakzatokban lévő színátmenetek rendben vannak. Az átlátszóság rendben van. Az állandó grafikaként megadott árnyékok rendben vannak.

### Hogyan viselkedik a szöveg

Itt tér el leginkább a QuizWitzre tervezés a megszokott tervezői munkától.

**Nem betűméretet állítasz be. Egy dobozt rajzolsz.**

Minden szöveget élőben rajzol egy komponens, amely két dolgot kap: egy szöveget és az általad megrajzolt téglalapot. Ezután megkeresi **azt a legnagyobb betűméretet, amellyel az a szöveg sorokra tördelve még elfér a dobozban**. A hosszú szöveg összemegy, hogy elférjen; a rövid addig nő, amíg a doboz meg nem telik.

![Egy választó, amelyben három különböző hosszúságú sor mind más betűméretet kap](/images/theme-design/frame1-general-multiquestion.png)

Három sor, három azonos doboz - és három teljesen különböző betűméret, pusztán azért, mert a szöveg rövidebb vagy hosszabb. A „Where is love” megkapja a teljes magasságot; a fölötte lévő kérdésnek két kis sorral kell beérnie. A bal oldali címkék ugyanígy viselkednek.

Ebből az következik:

- **Ugyanaz a kérdés másik játékban máshogy néz ki.** Egy hatszavas kérdés nagyban, a képernyőt kitöltve jelenik meg; egy harmincöt szavas kicsiben, öt soron, pontosan ugyanabban a dobozban. Mindkettőnek jól kell kinéznie.
- **Tervezd meg minden szövegdobozt kétszer.** Töltsd fel egyszer egy nagyon rövid és egyszer egy nagyon hosszú mintával, és ellenőrizd, hogy a kompozíció mindkét esetben megáll-e. Hüvelykujjszabályként: egy válaszlehetőség egytől körülbelül nyolc szóig terjed, egy kérdés öttől negyvenig, egy játékosnév kettőtől húsz karakterig.
- **Ne számíts rögzített sorszámra.** Olyan cím, amely „mindig egy sorban van”, itt nem létezik.
- **Ne igazítsd a szöveget optikailag semmi máshoz.** Az a szöveg, amelynek egy vonalhoz vagy egy alakzathoz kell illeszkednie, elcsúszik, amint rövidebb vagy hosszabb lesz. Használj elég tágas dobozokat és igazítást (balra, középre, jobbra) a pontos pozíciók helyett.
- **Tizenkét nyelv.** A német összetett szavak hosszúak, és a magyar sem kegyesebb. Az a doboz, amely angolul szűk, németül olvashatatlanul kicsi méretre esik vissza.
- **A szövegen belül emojik is megjelenhetnek.** A játékosok egyet választanak a csapatnevük mellé, és egy kérdés vagy egy válaszlehetőség is tartalmazhat egyet - néha egy válaszlehetőség nem más, mint egy emoji. Színesen vannak megrajzolva, és magasabbak a körülöttük lévő betűknél.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. Nem azt: hány pontos.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### Az időzítő - kötelező, és animáció

**Every question screen has a timer**; the room has to see how much time is left.

**Az időzítő nem számláló szám, hanem animáció, amelynek a lejátszófejét a motor mozgatja.** Egy „tele” állapotból „üres” állapotba tartó folyamatot tervezel - kiürülő sáv, bezáruló gyűrű, homokóra, zsugorodó vonal. A motor pontosan olyan sebességgel játssza le ezt az animációt, hogy az utolsó képkocka egybeessen a kérdés végével.

Ebből az következik:

- **A kérdés hossza nem rögzített.** Kvízenként állítható be - gyakran húsz-harminc másodperc, de lehet rövidebb vagy hosszabb is. Az animációdat megnyújtja vagy összenyomja, hogy illeszkedjen.
- **Se számok, se másodpercenkénti ketyegés.** Az az időzítő, amely „20, 19, 18…” módra számol vissza, azonnal érvényét veszti, amint a hossz megváltozik.
- **Az utolsó másodpercek a játék legfeszültebb pillanatai.** Segít, ha a folyamat a vége felé egyértelműbbé vagy sürgetőbbé válik.
- **A terem hátuljából is olvasható**, egy pillantásra.
- **Több időzítő is megengedett.** Egy fenti sávot és egy kérdés melletti gyűrűt egyaránt vezérel a rendszer, amíg mindegyik neve `timer`.

Az időzítőt kulcsképkockák sorozataként vagy a folyamat leírásaként add le - a „a sáv jobbról balra ürül ki, és zöldből pirosba vált” elég.

### A repülő emojik mindenre ráérkeznek

Minden játékos választ egy emojit belépéskor, a játék pedig szétdobálja ezeket az emojikat a képernyőn. They are drawn by the engine on a layer above the theme. **Itt neked nincs mit tervezned** - de van mi köré tervezni, mert nem ritka díszítésről van szó.

Három pillanatban jelennek meg:

- **Amikor egy játékos válaszol.** Az adott játékos emojija véletlenszerű vízszintes pozícióban emelkedik fel az alsó szélről, ívet ír le, és visszaesik a képen kívülre.
- **Amikor egy játékos elhajít egyet.** A játékosok elhajíthatják az emojijukat a telefonjukról; a szög és a sebesség a húzásból adódik, az emoji pedig alulról, középről indul, pörögve.
- **Amikor a záró visszaszámlálásban felfedik az egyik helyezést.** A megnevezett játékos emojijainak sortüze: húsz egy szokásos helyezésért, ötven a harmadikért, hetvenöt a másodikért, és **százötven a győztesért.**

Ez a következőt jelenti a tervezés szempontjából:

- **Tartsd a rangsor- és győzteseképernyők alsó harmadát szabadon minden apró vagy fontos dologtól.** A visszaszámlálás alatt ott lent tényleg zsúfolt.
- **Számíts rá, hogy ütni fognak a palettáddal.** Teljes színes emojik ezek a Unicode-tábla minden szegletéből, és egyik téma sem uralja őket. Az a terv, amely csak szűk színtartományban áll össze, ezekben a másodpercekben esetlegesnek fog tűnni.
- **Az elhajítás le van tiltva, amíg kép vagy videó látszik**, így a mellékletes képernyők tiszták maradnak.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### Betűtípusok

- **A betűtípusoknak beágyazhatóknak kell lenniük.** Kell a `.ttf` vagy `.otf` fájl, és mellé egy licenc, amely engedi az alkalmazásba ágyazást. Az a betűtípus, amely csak webfontként vagy csak nyomtatásra van licencelve, nem használható. Ezt még azelőtt ellenőrizd, hogy tervezni kezdenél vele; utólag drága javítás.
- A szokatlanul nagy felső vagy alsó szárral rendelkező betűtípusok kompenzálhatók, de jelezd, ha ilyet használsz.

### Szín mint lista

A téma egy konfigurációs fájlból olvassa be a színlistát, és a játékosok telefonjai ugyanebből a listából kapják a stílusukat. A palettádat **elnevezett listaként** add le, ne csak a grafikában szereplő színekként:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

A játékképernyőn megengedettek a színátmenetek: két hexadecimális értékként add meg őket.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

Ha kihagyod őket, beépített alapértékekre esnek vissza - fehér, szürke, piros, fekete és fehér -, amelyek ritkán illenek egy tervhez.

### A QuizWitz-logó

Az egyedi tervek tartalmazzák a QuizWitz-logót. Tarts fenn neki helyet ott, ahol nincs útjában a tervnek.

---

## Mit kell leadni

### Forrásfájl - lehetőleg Illustrator

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                    | Use it for                                 |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. Pontosan ez az a lépés, amely megmenti a grafikát attól, hogy kézzel kelljen újraépíteni.                         | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                     | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. Ha mégis Figmát használsz, **minden elemet külön SVG-ként** adj le, a rétegnevekkel egyező fájlnevekkel, hogy a szerkezet kézzel visszaállítható legyen. | The concept phase, if you are faster in it |

Fájlszerkezet:

- One artboard per screen, named after the frames above.
- Az újrafelhasználható részek (gomb, játékossor, válaszlehetőség, időzítő) **szimbólumként** vagy komponensként, nem különálló másolatokként.
- Rétegnevek angolul, szóközök nélkül: `question`, `option1`-től `option4`-ig, `timer`, `feedback`, `header`, `background`, `playerScore`.
- A színek elnevezett színmintaként, a szöveg elnevezett stílusként, ne objektumonként külön beállítva.

### A leadandó anyagok listája

1. A **forrásfájl**, a fentiek szerint felépítve.
2. **Minden keret PNG-ként**, 1920 × 1080 - referencia arról, hogyan kell kinéznie. A második kerethez az ügyféllogós és a logó nélküli változat is.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **Minden különálló grafikai elem átlátszó PNG-ként, 2×-es méretben**, egy mappában, a rétegnévvel egyező fájlnévvel.
5. **Az időzítő** kulcsképkockákként vagy a folyamat írásos leírásaként.
6. **A betűtípusok** `.ttf` vagy `.otf` formátumban, licencigazolással.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **Fél oldalnyi jegyzet**: mi az ötlet, hogyan jelenjenek meg a válaszlehetőségek, mi mozog és mi marad állva. Nem tízoldalas tervezői indoklás - aki a témát építi, azt kell tudnia, mit építsen. A mozgásötletek leírhatók, vagy durva animatikként is leadhatók.

### A munka sorrendje

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## Függelék - szimbólumnevek

A teljesség kedvéért, és annak, aki pontosan tudni akarja, hova kerül a grafikája. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. Ha ezeket a neveket használod rétegnévként, azzal megspórolsz egy fordítási lépést.

| Keret                                             | Szimbólumnév                                                                                                                              | Kötelező részek                                                                                                                                                                                        |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Általános keret         | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` opcionális                                                                       | `placeholder` (a tartalomterület); `title` szövegdoboz opcionális                                                                                                                   |
| 1b. Kérdésválasztó, hosszú kérdés | `MultiQuestionScreen`, `LongQuestionScreen`; mindkettő opcionális, az általános keretre esnek vissza                                      | választó: `questions` helykitöltő, `timer`; hosszú kérdés: `question` helykitöltő                                                                                      |
| 2. Csatlakozási képernyő   | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` opcionális, `logo` helykitöltővel                                        | `instructions.line1`-től `line5`-ig, `connectedPlayers`; `qrCode` helykitöltő a `showQrCode` képkockacímkével, opcionális                                                                              |
| 3. Várakozó képernyő       | `PendingScreen`; `PendingScreenWithLogo` opcionális                                                                                       | `header.text`                                                                                                                                                                                          |
| 4. Kérdésképernyő          | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1`-től `option4`-ig, `showOptions` és `showFeedback` képkockacímkék                                                                                  |
| 5. Kérdés melléklettel     | `QuestionScreenAttachment`                                                                                                                | mint fent, plusz `attachment.placeholder`                                                                                                                                                              |
| 5b. Teljes képernyős melléklet    | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                          |
| 6. Válaszképernyő          | `AnswerPieScreen`; `AnswerPieScreenAttachment` opcionális                                                                                 | `option1`-től `option4`-ig, `answer.text`, `feedback.text`                                                                                                                                             |
| 6b. Nyílt kérdés válasza          | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; a `…Attachment` változatok opcionálisak                                                    | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                  |
| 7. Rangsor                 | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` és `PlayerScoreNoImage` opcionális                              | `header.text`, `players`, `feedback.text` (`playAgain.text` opcionális); a sorban: `position`, `name`, `score`, `avatar` opcionális                                 |
| 8. Fordulóintró            | egy vagy több, tetszőleges nevű szimbólum; a konfigurációs fájl mind a hat kategóriához egy szimbólumot rendel                            | -                                                                                                                                                                                                      |
| -                                                 | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                     |
| -                                                 | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | nem kell hozzájuk saját grafika - abból épülnek fel, ami a kereteidben megjelenik                                                                                                                      |
| -                                                 | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | csak az asztali alkalmazásban látszanak, élő kvízben nem. Nem részei a feladatnak: a témasablonból veszik át őket, és a te háttereddel és gombjaiddal stílusozzák újra |

Az alapértelmezett téma fordulóintró-szimbólumainak neve `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` és `RoundIntroTedCultHist`; a művészet és a történelem az utolsón osztozik. A „Ted” ezekben a nevekben az eredeti téma figurájának maradványa, és nem jelenti azt, hogy figurának kellene bennük szerepelnie.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. A `timer` elem saját idővonallal rendelkező filmklip; a motor beolvassa a képkockaszámát, és az eltelt idővel arányosan mozgatja a lejátszófejet, másodpercenként legfeljebb 24-szer.

### Mit vesz át a konfigurációs fájl a tervedből

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

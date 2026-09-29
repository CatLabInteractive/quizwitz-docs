---
id: theme-design-guide
title: Témakészítési útmutató
---

# Témakészítési útmutató

A [témák](/docs/advanced/theming) leírják, hogyan épül fel egy QuizWitz-téma: Adobe Animate-ben, CreateJS-könyvtárként exportálva. Ez az oldal az azt megelőző lépésről szól - a téma **megtervezéséről**.

Grafikusoknak szól, és abból indul ki, hogy a tervezést és az Animate-es kivitelezést különböző emberek végzik. Kevés grafikus dolgozik még Adobe Animate-ben, ezért általában a grafikus leadja a grafikát, és valaki más rakja össze belőle a témát. Ez jól működik, feltéve, hogy a grafika olyan formában érkezik, amellyel az építés dolgozni tud. Ez az oldal ezt a formát írja le, és egyben a leadandó anyagok listájaként is szolgál, amikor árajánlatot kérsz egy grafikustól.

Az oldal négy részből áll:

1. [Mit tervezel](#what-you-are-designing) - a képernyők, amelyeket egy téma lefed.
2. [A nyolc keret](#eight-frames-and-an-element-sheet) és [az elemlap](#the-element-sheet), egyenként, képernyőképekkel.
3. [Tervezési szabályok](#design-rules) - hogyan kell felépíteni a fájlt, hogy a motor használni tudja.
4. [Mit kell leadni](#what-to-hand-over) - forrásfájl, leadandó anyagok és a munka sorrendje.

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

## Nyolc keret és egy elemlap

A játéknak több tucat különálló képernyőállapota van, de a legtöbb ugyanannak az elrendezésnek a változata. **Nyolc keretet és egy elemlapot tervezel; a többi ezekből származik.** Ez nem rövidítés - így működik a motor. Az a képernyő, amelynek nincs saját grafikája, egy általános keretre esik vissza.

Az elemlap ugyanannyira számít, mint a keretek: egy visszaeső képernyőnek is kell berendezés a tartalomterületén belül - egy panel, egy sor, egy vonal.

| # | Keret                                                      | Ezeket is lefedi                                                          |
| - | ---------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1 | [Általános keret](#frame-1---the-general-frame)            | Tizenhárom képernyőállapot saját grafika nélkül                           |
| 2 | [Csatlakozási képernyő](#frame-2---the-connect-screen)     | Rajzold meg kétszer: ügyféllogóval és anélkül             |
| 3 | [Várakozó képernyő](#frame-3---the-waiting-screen)         | -                                                                         |
| 4 | [Kérdésképernyő](#frame-4---the-question-screen)           | -                                                                         |
| 5 | [Kérdés melléklettel](#frame-5---question-with-attachment) | A teljes képernyős melléklet és a kérdések között megjelenő mellékletek   |
| 6 | [Válaszképernyő](#frame-6---the-answer-screen)             | A válaszképernyő nyílt kérdésekhez és melléklettel rendelkező kérdésekhez |
| 7 | [Rangsor és győztes](#frame-7---standings-and-winner)      | A fordulók közötti rangsor és a végső győztes                             |
| 8 | [Fordulóintró](#frame-8---the-round-intro)                 | Mind a hat fordulókategória                                               |

:::note[A képernyőképekről]
Az alábbi képernyők egy létező témából származnak. Azt mutatják meg, **mely elemek jelennek meg az egyes képernyőkön, és mikor**. Sem a stílusra, sem az elrendezésre nem referenciák: hogy ez a téma hova teszi a kérdését, a válaszlehetőségeit és az időzítőjét, az a saját döntése, és a tiéd ettől teljesen eltérhet.
:::

### Keret 1 - az általános keret

**Mi van rajta:** a háttér, egy fejléccím és alatta egy üres tartalomterület. Nem kész kompozíció, hanem a keret, amelyen belül a többi felépül.

**Mit fed le:** tizenhárom képernyőállapotot - fordulómagyarázat, rangsor, játékosbemutató, feleletválasztós változatok, hosszú kérdések, seat-figyelmeztetések, beállítások. Mindegyik a maga módján tölti ki a tartalomterületet az [elemlap](#the-element-sheet) elemeivel, ezért a keretnek egymásra egyáltalán nem hasonlító dolgokat is el kell bírnia. A kérdésválasztó és a hosszú kérdés kaphat saját kompozíciót, ha úgy szeretnéd; egyébként ezt a keretet használják.

Két játékpillanat ugyanazon a kereten: egy kérdésválasztó és egy pontlétra.

![Az általános keret háromsoros kérdésválasztóval](/images/theme-design/frame1-general-multiquestion.png)

![Az általános keret ötszintes pontlétrával](/images/theme-design/frame1-general-strikeladder.png)

Nézd meg, milyen kevés bennük a közös. A választó a három sorát keretvonalas panelbe teszi; a létrának egyáltalán nincs panelje, csak vékony vonalakkal elválasztott sorai. Ami a kettőben közös, az a háttér és a fölöttük lévő fejlécsáv - minden, ami ez alatt van, az egyes képernyőhöz tartozik, és a játék tölti ki, nem te.

Az a panel és azok a vonalak az [elemlapról](#the-element-sheet) származnak, nem erről a keretről. Amit ennek a keretnek tennie kell, az az, hogy elbírja őket: a tartalomterületet üres, semleges, tágas zónaként tervezd meg, amely ugyanúgy működik keretvonalas panellel, csupasz listával és sortáblázattal is. Egy középen zsúfolt háttér, vagy egy olyan fejléc, amely csak közvetlenül alá bújtatott panellel működik, ott törik el ez.

### Keret 2 - a csatlakozási képernyő

**Mi van rajta:** minden, amire a teremnek a csatlakozáshoz szüksége van.

- öt sornyi útmutatás
- egy csatlakozási kód és egy QR-kód, mindkettőt a motor generálja - tarts fenn egy négyzetet a QR-kódnak
- egy sor a csatlakozott játékosok számával
- a szállingózva érkező játékosok listája

**Rajzold meg kétszer:** ügyféllogóval a csatlakozási kód mellett, és anélkül, amikor a téma saját grafikája viszi a képernyőt.

![Csatlakozási képernyő ügyféllogóval](/images/theme-design/frame2-connect.png)

![Csatlakozási képernyő ügyféllogó nélkül](/images/theme-design/frame2-connect-nologo.png)

### Keret 3 - a várakozó képernyő

**Mi van rajta:** szinte semmi - a kvíz saját logója vagy a téma grafikája.

A csatlakozási képernyővel csak a háttere közös, ezért önálló kompozícióként tervezd meg. Addig marad a képernyőn, amíg a quizmaster felolvas egy kérdést, így hosszabb ideig látható, mint szinte bármi más a játékban. Több figyelmet érdemel, mint amennyit egy üres képernyő általában kap.

![Várakozó képernyő](/images/theme-design/frame2-pending.png)

### Keret 4 - a kérdésképernyő

**Mi van rajta:** a kérdés, egy időzítő, négy válaszlehetőség és egy visszajelzési sor. Ezt a képernyőt nézi a terem a legtovább. Figyelj rá, hogy egy válaszlehetőség akár csak egy emojiból is állhat:

![Kérdésképernyő négy szöveges válaszlehetőséggel](/images/theme-design/frame3-question-options.png)

![Kérdésképernyő zászlókkal mint válaszlehetőségekkel](/images/theme-design/frame3-question-emoji.png)

Válaszlehetőségek nélküli kérdés - a játékosok a telefonjukon gépelik be a választ. A képernyő majdnem üres, és az időzítő lesz a fő elem:

![Nyílt kérdés csak a kérdéssel és egy nagy időzítővel](/images/theme-design/frame3-question-open.png)

Az a pillanat, amikor lejár az idő. A visszajelzési buborék megjelenik a képernyő fölött, az időzítő pedig üres:

![Kérdésképernyő a lejárt idő állapotában](/images/theme-design/frame3-question-timeout.png)

### Keret 5 - kérdés melléklettel

**Mi van rajta:** ugyanazok a részek, mint a 4. keretben, egy kép vagy videó köré rendezve. Lehet eltérő kompozíció is. A mellékletet a rendszer az általad rajzolt dobozba illeszti, ezért fekvő és álló képnek egyaránt elfogadhatóan kell kinéznie benne.

**Mit fed le:** a teljes képernyős mellékletet és a kérdések között megjelenő mellékleteket.

Itt a válaszlehetőségekkel a melléklet bal és jobb oldalán:

![Kérdésképernyő középen egy képpel](/images/theme-design/frame4-question-attachment.png)

Egy melléklet önmagában, a képernyőt kitöltve:

![Teljes képernyős melléklet](/images/theme-design/frame4-attachment-fullscreen.png)

### Keret 6 - a válaszképernyő

**Mi van rajta:** melyik válasz volt helyes, hogyan oszlottak meg a terem válaszai a válaszlehetőségek között, és egy visszajelzési sor.

**Mit fed le:** a válaszképernyőt nyílt kérdésekhez és melléklettel rendelkező kérdésekhez.

A képernyő három pillanaton megy keresztül. Először a megoszlás, még jelölés nélkül:

![Válaszképernyő a megoszlással](/images/theme-design/frame5-answer-mc-spread.png)

Aztán a helyes válaszlehetőséget kipipálja, a rosszakat pedig áthúzza:

![Válaszképernyő a felfedett helyes válaszlehetőséggel](/images/theme-design/frame5-answer-mc-reveal.png)

És ha a kérdéshez tartozik magyarázat, egy buborék ereszkedik a grafika fölé. Hagyj neki helyet - bármire ráérkezik, amit terveztél:

![Válaszképernyő a magyarázatbuborékkal](/images/theme-design/frame5-answer-mc-explanation.png)

Kis csoportnál ugyanez a pillanat pontlista, nem diagram:

![Válaszképernyő kis csoport esetén](/images/theme-design/frame5-answer-mc-small.png)

Nyílt kérdésnél a diagram azt mutatja, hány játékos találta el:

![Válaszképernyő nyílt kérdés esetén](/images/theme-design/frame5-answer-open.png)

### Keret 7 - rangsor és győztes

**Mi van rajta:** a játékosok listája helyezéssel, avatarral, névvel és pontszámmal. A **játékossort** külön, újrafelhasználható elemként add le: alapértelmezés szerint hatszor ismétlődik, legfeljebb tízszer.

**Mit fed le:** a fordulók közötti rangsort és a végső győztest.

A rangsor egy forduló után, hat játékossorral:

![Rangsor hat játékossorral](/images/theme-design/frame6-roundoutro.png)

A záró visszaszámlálás egyszerre egy játékost nevez meg, az utolsó helytől az elsőig - helyezés, pontszám és csapatnév a reflektorfényben. Itt a legsűrűbbek a [repülő emojik](#flying-emoji-land-on-top-of-everything) is:

![A győzteseket visszaszámláló képernyő egy játékost megnevezve](/images/theme-design/frame6-winner-countdown.png)

![A végső rangsor](/images/theme-design/frame6-winner.png)

### Keret 8 - a fordulóintró

**Mi van rajta:** egy rövid bejelentés fordulókategóriánként. Hat kategória van: tudomány és technika, természet, szórakozás és zene, sport, művészet, történelem.

**Mit fed le:** mind a hat kategóriát. Egy terv többet is kiszolgálhat közülük.

Itt egy kompozíció kategóriánként egy változattal:

![Fordulóintró a természet kategóriához](/images/theme-design/frame7-roundintro-nature.png)

![Fordulóintró a tudomány kategóriához](/images/theme-design/frame7-roundintro-science.png)

**A figura opcionális.** Az alap QuizWitz-témában van egy, amely beszél és reagál; az [Emerald téma](/docs/advanced/emerald-theme) figura nélkül érkezik, és ha elhagyod, azzal a legdrágább animációs munka is kiesik - szájszinkron, szemek, karok.

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

- **A játékosok telefonjai.** Rögzített HTML-elrendezés.
- **Az a néhány dolog, amit a motor maga rajzol** - a sorok közötti vonalak a pontlétrán, a kiemelt sor a kérdésválasztóban, a QR-kód. A színüket a [Szín mint lista](#colour-as-a-list) részből kapják.
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

A gyakorlatban:

- a négy válaszlehetőség négy külön réteg, nem egy
- az időzítő külön van a háttértől
- egy gomb és a felirata két elem
- egy játékossor egyetlen csoport, amely megkettőzhető

Amit össze lehet vonni: a tisztán dekoratív háttérgrafika, amely egyetlen állóképként működik.

Ez az az egyetlen szabály, amelynek a megszegése tényleg fáj - a grafikát ilyenkor szét kell szedni vagy újra kell rajzolni, és pontosan ezt a költséget hivatott elkerülni ez a felállás.

### Effektek, amelyek nem élik túl

A motor HTML5-vászonra rajzol. Ezeket **bele kell égetni a képbe**, vagy el kell hagyni:

| Effekt                                                                   | Mit tegyél helyette                  |
| ------------------------------------------------------------------------ | ------------------------------------ |
| Élő elmosás, vetett árnyék és ragyogás szűrőként                         | Add le őket grafikaként              |
| Keverési módok (szorzás, szitanyomás, átfedés)        | Alakítsd át őket egyszínű kitöltéssé |
| Rétegeffektek és korrekciós rétegek                                      | Égesd bele őket a képbe              |
| Színátmenet a szövegen **belül**, vagy karakterenkénti körvonalas szöveg | Hagyd el őket                        |
| Képkockánként változó maszkok                                            | Hagyd el őket                        |

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

**Amit az építésnek tudnia kell minden szövegdobozról:** hol van, mekkora, hogyan van igazítva, milyen színű és milyen betűtípusú. Nem azt: hány pontos.

**Ezt ki is használhatod.** Egy nagy doboz rövid szöveggel önmagában is erős tipográfiai kompozícióvá válik, egy szándékosan keskenyre és magasra rajzolt doboz pedig oszlopba kényszeríti a szöveget. Használd az illesztést tervezési eszközként; csak ne tervezz ellene.

### Az időzítő - kötelező, és animáció

**Minden kérdésképernyőn van időzítő**; a teremnek látnia kell, mennyi idő van még hátra.

**Az időzítő nem számláló szám, hanem animáció, amelynek a lejátszófejét a motor mozgatja.** Egy „tele” állapotból „üres” állapotba tartó folyamatot tervezel - kiürülő sáv, bezáruló gyűrű, homokóra, zsugorodó vonal. A motor pontosan olyan sebességgel játssza le ezt az animációt, hogy az utolsó képkocka egybeessen a kérdés végével.

Ebből az következik:

- **A kérdés hossza nem rögzített.** Kvízenként állítható be - gyakran húsz-harminc másodperc, de lehet rövidebb vagy hosszabb is. Az animációdat megnyújtja vagy összenyomja, hogy illeszkedjen.
- **Se számok, se másodpercenkénti ketyegés.** Az az időzítő, amely „20, 19, 18…” módra számol vissza, azonnal érvényét veszti, amint a hossz megváltozik.
- **Az utolsó másodpercek a játék legfeszültebb pillanatai.** Segít, ha a folyamat a vége felé egyértelműbbé vagy sürgetőbbé válik.
- **A terem hátuljából is olvasható**, egy pillantásra.
- **Több időzítő is megengedett.** Egy fenti sávot és egy kérdés melletti gyűrűt egyaránt vezérel a rendszer, amíg mindegyik neve `timer`.

Az időzítőt kulcsképkockák sorozataként vagy a folyamat leírásaként add le - a „a sáv jobbról balra ürül ki, és zöldből pirosba vált” elég.

### A repülő emojik mindenre ráérkeznek

Minden játékos választ egy emojit belépéskor, a játék pedig szétdobálja ezeket az emojikat a képernyőn. A motor rajzolja őket, a téma fölötti rétegen. **Itt neked nincs mit tervezned** - de van mi köré tervezni, mert nem ritka díszítésről van szó.

Három pillanatban jelennek meg:

- **Amikor egy játékos válaszol.** Az adott játékos emojija véletlenszerű vízszintes pozícióban emelkedik fel az alsó szélről, ívet ír le, és visszaesik a képen kívülre.
- **Amikor egy játékos elhajít egyet.** A játékosok elhajíthatják az emojijukat a telefonjukról; a szög és a sebesség a húzásból adódik, az emoji pedig alulról, középről indul, pörögve.
- **Amikor a záró visszaszámlálásban felfedik az egyik helyezést.** A megnevezett játékos emojijainak sortüze: húsz egy szokásos helyezésért, ötven a harmadikért, hetvenöt a másodikért, és **százötven a győztesért.**

Ez a következőt jelenti a tervezés szempontjából:

- **Tartsd a rangsor- és győzteseképernyők alsó harmadát szabadon minden apró vagy fontos dologtól.** A visszaszámlálás alatt ott lent tényleg zsúfolt.
- **Számíts rá, hogy ütni fognak a palettáddal.** Teljes színes emojik ezek a Unicode-tábla minden szegletéből, és egyik téma sem uralja őket. Az a terv, amely csak szűk színtartományban áll össze, ezekben a másodpercekben esetlegesnek fog tűnni.
- **Az elhajítás le van tiltva, amíg kép vagy videó látszik**, így a mellékletes képernyők tiszták maradnak.
- **Az egész réteg játékonként kikapcsolható**, ezért olyan kompozíciót se építs, amely attól függ, hogy ott vannak.

### Betűtípusok

- **A betűtípusoknak beágyazhatóknak kell lenniük.** Kell a `.ttf` vagy `.otf` fájl, és mellé egy licenc, amely engedi az alkalmazásba ágyazást. Az a betűtípus, amely csak webfontként vagy csak nyomtatásra van licencelve, nem használható. Ezt még azelőtt ellenőrizd, hogy tervezni kezdenél vele; utólag drága javítás.
- A szokatlanul nagy felső vagy alsó szárral rendelkező betűtípusok kompenzálhatók, de jelezd, ha ilyet használsz.

### Szín mint lista

A téma egy konfigurációs fájlból olvassa be a színlistát, és a játékosok telefonjai ugyanebből a listából kapják a stílusukat. A palettádat **elnevezett listaként** add le, ne csak a grafikában szereplő színekként:

| Hol                        | Színek                                                                                                                                                                                                                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Játékképernyő**          | Fő szín, kiemelő szín, háttér, panel- vagy tárolószín, az időzítő háttere, alapértelmezett szövegszín, fejlécszöveg színe, kérdésszöveg színe, gombfelirat, párbeszéd- és magyarázatszöveg, játékosnév és pontszám szövege, a helyes válasz színe, a helytelen válasz színe |
| **A négy válaszlehetőség** | Válaszlehetőségenként: egy háttérszín, egy keretszín, és egy egyszínű szín a telefonokhoz és a diagramokhoz                                                                                                                                                 |
| **A játékosok telefonjai** | Háttér, szövegszín, körvonalszín, a válaszlehetőségek körvonalszíne, valamint a választároló háttér- és szövegszíne                                                                                                                                                         |

A játékképernyőn megengedettek a színátmenetek: két hexadecimális értékként add meg őket.

Néhány szín az _egyetlen_ fogódzó azokhoz a részekhez, amelyeket a motor maga rajzol, ezért érdemes ezeket tudatosan eldönteni, ahelyett hogy az alapértéken hagynád őket:

- az **elválasztó** - a sorok közötti vonalak ott, ahol nincs panel, és a pontlétrán
- egy sor **aktív**, **inaktív** és **kiválasztott** állapota a kérdésválasztóban
- a **párbeszéd** szövege
- a **QR-kód előtere és háttere**

Ha kihagyod őket, beépített alapértékekre esnek vissza - fehér, szürke, piros, fekete és fehér -, amelyek ritkán illenek egy tervhez.

### A QuizWitz-logó

Az egyedi tervek tartalmazzák a QuizWitz-logót. Tarts fenn neki helyet ott, ahol nincs útjában a tervnek.

---

## Mit kell leadni

### Forrásfájl - lehetőleg Illustrator

A téma Adobe Animate-ben készül, és az, hogy mit tud importálni az Animate, dönti el, a munkádból mennyi éli túl épen az átadást:

| Eszköz                                           | Mi történik importáláskor                                                                                                                                                                                                                                                                                  | Mire használd                               |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Az Animate közvetlenül importálja, és a rétegeidet Animate-rétegekké vagy különálló szimbólumokká alakítja, megtartva a rétegneveket és szerkeszthetőn hagyva a vektorokat. Pontosan ez az a lépés, amely megmenti a grafikát attól, hogy kézzel kelljen újraépíteni.      | **Ajánlott** a végleges leadandó anyaghoz   |
| **Adobe Photoshop**                              | Az Illustratorhoz hasonlóan a rétegeivel együtt importálódik, de vektor helyett rasztert ad.                                                                                                                                                                                               | Lehetséges                                  |
| **Figma**                                        | Minden SVG- és PNG-exporton keresztül megy, és pontosan itt vész el az a rétegszerkezet, amelyre itt szükség van. Ha mégis Figmát használsz, **minden elemet külön SVG-ként** adj le, a rétegnevekkel egyező fájlnevekkel, hogy a szerkezet kézzel visszaállítható legyen. | A koncepciófázishoz, ha abban gyorsabb vagy |

Fájlszerkezet:

- Képernyőnként egy rajztábla, a fenti keretek szerint elnevezve.
- Az újrafelhasználható részek (gomb, játékossor, válaszlehetőség, időzítő) **szimbólumként** vagy komponensként, nem különálló másolatokként.
- Rétegnevek angolul, szóközök nélkül: `question`, `option1`-től `option4`-ig, `timer`, `feedback`, `header`, `background`, `playerScore`.
- A színek elnevezett színmintaként, a szöveg elnevezett stílusként, ne objektumonként külön beállítva.

### A leadandó anyagok listája

1. A **forrásfájl**, a fentiek szerint felépítve.
2. **Minden keret PNG-ként**, 1920 × 1080 - referencia arról, hogyan kell kinéznie. A második kerethez az ügyféllogós és a logó nélküli változat is.
3. **Az elemlap** egyetlen rajztáblaként: a [tartalmi építőelemek és a vezérlők](#the-element-sheet).
4. **Minden különálló grafikai elem átlátszó PNG-ként, 2×-es méretben**, egy mappában, a rétegnévvel egyező fájlnévvel.
5. **Az időzítő** kulcsképkockákként vagy a folyamat írásos leírásaként.
6. **A betűtípusok** `.ttf` vagy `.otf` formátumban, licencigazolással.
7. **A színlista** a [Szín mint lista](#colour-as-a-list) rész szerint, hexadecimális értékekként.
8. **Fél oldalnyi jegyzet**: mi az ötlet, hogyan jelenjenek meg a válaszlehetőségek, mi mozog és mi marad állva. Nem tízoldalas tervezői indoklás - aki a témát építi, azt kell tudnia, mit építsen. A mozgásötletek leírhatók, vagy durva animatikként is leadhatók.

### A munka sorrendje

1. **A 4. keret, a kérdésképernyő, az elemlappal együtt.** Mindkettőt hagyasd jóvá, mielőtt a többibe belekezdenél. Együtt hordozzák az időzítőt, a válaszlehetőségeket, a panelt és minden vezérlőt, így ezek határozzák meg az egész téma stílusát.
2. **Az 1-3. keret.** Ezek természetes módon következnek az első kettőből.
3. **A 6-8. keret** jön utoljára.

---

## Függelék - szimbólumnevek

A teljesség kedvéért, és annak, aki pontosan tudni akarja, hova kerül a grafikája. **A munkához nem kell elolvasnod**; a fenti nyolc keret és az elemlap elég. Ha ezeket a neveket használod rétegnévként, azzal megspórolsz egy fordítási lépést.

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

Minden elem, amelynek a neve után `.text` áll, illesztett szövegdoboz, ahogy a [Hogyan viselkedik a szöveg](#how-text-behaves) rész leírja: egy téglalap, amelyet a motor maga tölt ki. A `timer` elem saját idővonallal rendelkező filmklip; a motor beolvassa a képkockaszámát, és az eltelt idővel arányosan mozgatja a lejátszófejet, másodpercenként legfeljebb 24-szer.

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

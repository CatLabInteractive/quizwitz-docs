---
id: theme-design-guide
title: Průvodce návrhem motivu
---

# Průvodce návrhem motivu

[Motivy](/docs/advanced/theming) vysvětlují, jak se motiv QuizWitz staví: v Adobe Animate, exportovaný jako knihovna CreateJS. Tato stránka se věnuje kroku, který tomu předchází - **návrhu** motivu.

Je napsaná pro grafického designéra a předpokládá, že návrh a produkci v Animate dělají různí lidé. V Adobe Animate dnes pracuje už jen málo designérů, takže designér obvykle dodá grafiku a motiv sestaví někdo jiný. To funguje dobře, pokud grafika dorazí v podobě, se kterou se při stavbě dá pracovat. Tato stránka tuto podobu popisuje a zároveň slouží jako seznam podkladů k dodání, když si od grafika vyžádáš cenovou nabídku.

Stránka má čtyři části:

1. [Co navrhuješ](#what-you-are-designing) - obrazovky, které motiv pokrývá.
2. [Osm rámců](#eight-frames-and-an-element-sheet) a [list prvků](#the-element-sheet), jeden po druhém, se snímky obrazovky.
3. [Pravidla návrhu](#design-rules) - jak musí být soubor postavený, aby ho engine mohl použít.
4. [Co odevzdat](#what-to-hand-over) - zdrojový soubor, podklady k dodání a pořadí práce.

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

## Osm rámců a list prvků

Hra má desítky odlišných stavů obrazovky, ale většina jsou varianty téhož rozvržení. **Navrhneš osm rámců a jeden list prvků; zbytek se z nich odvodí.** Není to zkratka - tak engine funguje. Obrazovka bez vlastní grafiky se vrací k obecnému rámci.

List je stejně důležitý jako rámce: i obrazovka, která se vrací k obecnému rámci, potřebuje ve své obsahové ploše vybavení - panel, řádek, linku.

| # | Rámec                                                    | Pokrývá také                                                   |
| - | -------------------------------------------------------- | -------------------------------------------------------------- |
| 1 | [Obecný rámec](#frame-1---the-general-frame)             | Třináct stavů obrazovky bez vlastní grafiky                    |
| 2 | [Obrazovka připojení](#frame-2---the-connect-screen)     | Nakresli ji dvakrát: s logem klienta a bez něj |
| 3 | [Čekací obrazovka](#frame-3---the-waiting-screen)        | -                                                              |
| 4 | [Obrazovka otázky](#frame-4---the-question-screen)       | -                                                              |
| 5 | [Otázka s přílohou](#frame-5---question-with-attachment) | Příloha na celou obrazovku a přílohy zobrazované mezi otázkami |
| 6 | [Obrazovka odpovědi](#frame-6---the-answer-screen)       | Obrazovka odpovědi pro otevřené otázky a pro otázky s přílohou |
| 7 | [Pořadí a vítěz](#frame-7---standings-and-winner)        | Pořadí mezi koly a konečný vítěz                               |
| 8 | [Intro kola](#frame-8---the-round-intro)                 | Všech šest kategorií kol                                       |

:::note[O snímcích obrazovky]
Obrazovky níže pocházejí z existujícího motivu. Ukazují, **které prvky se na které obrazovce objevují a kdy**. Nejsou referencí pro styl _ani_ pro rozvržení: kam tento motiv umisťuje svou otázku, své možnosti a svůj časovač, je jeho vlastní rozhodnutí, a to tvoje se může úplně lišit.
:::

### Rámec 1 - obecný rámec

**Co na něm je:** pozadí, titulek v záhlaví a pod ním prázdná obsahová plocha. Není to hotová kompozice, ale rámec, uvnitř kterého se staví všechno ostatní.

**Co pokrývá:** třináct stavů obrazovky - vysvětlení kola, pořadí, představení hráčů, varianty výběru z možností, dlouhé otázky, varování ohledně seats, nastavení. Každý z nich vyplní obsahovou plochu po svém prvky z [listu prvků](#the-element-sheet), takže rámec musí unést věci, které si vůbec nejsou podobné. Výběr otázek a dlouhá otázka mohou dostat vlastní kompozici, pokud to tak chceš; jinak používají tento rámec.

Dva herní momenty na tomtéž rámci: výběr otázek a bodový žebříček.

![Obecný rámec s výběrem otázek o třech řádcích](/images/theme-design/frame1-general-multiquestion.png)

![Obecný rámec s bodovým žebříčkem o pěti úrovních](/images/theme-design/frame1-general-strikeladder.png)

Podívej se, jak málo mají společného. Výběr dává své tři řádky do panelu s obrysem; žebříček nemá panel vůbec, jen řádky oddělené tenkými linkami. Co ty dva sdílejí, je pozadí a pruh záhlaví nad nimi - všechno pod tím patří konkrétní obrazovce a vyplňuje to hra, ne ty.

Ten panel a ty linky pocházejí z [listu prvků](#the-element-sheet), ne z tohoto rámce. Co musí tenhle rámec zvládnout, je unést je: navrhni obsahovou plochu jako prázdnou, neutrální a prostornou zónu, která funguje stejně dobře s orámovaným panelem, s holým seznamem i s tabulkou řádků. Pozadí, které je uprostřed rušné, nebo záhlaví, které funguje jen s panelem zastrčeným těsně pod ním, je místo, kde se to láme.

### Rámec 2 - obrazovka připojení

**Co na ní je:** všechno, co sál potřebuje k připojení.

- pět řádků pokynů
- kód pro připojení a QR kód, oba generované enginem - vyhraď pro QR kód čtverec
- řádek s počtem připojených hráčů
- seznam postupně přicházejících hráčů

**Nakresli ji dvakrát:** s logem klienta vedle kódu pro připojení a bez něj, kdy obrazovku nese vlastní grafika motivu.

![Obrazovka připojení s logem klienta](/images/theme-design/frame2-connect.png)

![Obrazovka připojení bez loga klienta](/images/theme-design/frame2-connect-nologo.png)

### Rámec 3 - čekací obrazovka

**Co na ní je:** skoro nic - vlastní logo kvízu nebo grafika motivu.

S obrazovkou připojení sdílí jen pozadí, takže ji navrhni jako samostatnou kompozici. Zůstává zobrazená, zatímco quizmaster čte otázku nahlas, takže je na obrazovce déle než skoro cokoli jiného ve hře. Zaslouží si víc pozornosti, než jakou prázdná obrazovka obvykle dostává.

![Čekací obrazovka](/images/theme-design/frame2-pending.png)

### Rámec 4 - obrazovka otázky

**Co na ní je:** otázka, časovač, čtyři možnosti odpovědi a řádek zpětné vazby. Na tuhle obrazovku se sál dívá nejdéle. Všimni si, že možnost může obsahovat jen emoji a nic jiného:

![Obrazovka otázky se čtyřmi textovými možnostmi](/images/theme-design/frame3-question-options.png)

![Obrazovka otázky s vlajkami jako možnostmi odpovědi](/images/theme-design/frame3-question-emoji.png)

Otázka bez možností - hráči píší odpověď na telefonu. Obrazovka je skoro prázdná a hlavním prvkem se stává časovač:

![Otevřená otázka jen s otázkou a velkým časovačem](/images/theme-design/frame3-question-open.png)

Okamžik, kdy vyprší čas. Přes obrazovku se objeví bublina zpětné vazby a časovač je prázdný:

![Obrazovka otázky ve stavu vypršení času](/images/theme-design/frame3-question-timeout.png)

### Rámec 5 - otázka s přílohou

**Co na ní je:** stejné části jako v rámci 4, uspořádané kolem obrázku nebo videa. Může jít o jinou kompozici. Příloha se zmenší tak, aby se vešla do rámečku, který nakreslíš, takže v něm musí přijatelně vypadat obrázek na šířku i na výšku.

**Co pokrývá:** přílohu na celou obrazovku a přílohy zobrazované mezi otázkami.

Tady s možnostmi vlevo a vpravo od přílohy:

![Obrazovka otázky s obrázkem uprostřed](/images/theme-design/frame4-question-attachment.png)

Příloha sama o sobě, přes celou obrazovku:

![Příloha na celou obrazovku](/images/theme-design/frame4-attachment-fullscreen.png)

### Rámec 6 - obrazovka odpovědi

**Co na ní je:** která odpověď byla správná, jak se odpovědi sálu rozložily mezi možnosti, a řádek zpětné vazby.

**Co pokrývá:** obrazovku odpovědi pro otevřené otázky a pro otázky s přílohou.

Obrazovka prochází třemi momenty. Nejdřív rozložení, zatím bez čehokoli označeného:

![Obrazovka odpovědi s rozložením](/images/theme-design/frame5-answer-mc-spread.png)

Pak se správná možnost zaškrtne a špatné se přeškrtnou:

![Obrazovka odpovědi s odhalenou správnou možností](/images/theme-design/frame5-answer-mc-reveal.png)

A pokud má otázka vysvětlení, spadne přes grafiku bublina. Nech na ni místo - přistane přes všechno, co jsi navrhl:

![Obrazovka odpovědi s bublinou vysvětlení](/images/theme-design/frame5-answer-mc-explanation.png)

U malé skupiny je tentýž moment seznamem skóre místo grafu:

![Obrazovka odpovědi pro malou skupinu](/images/theme-design/frame5-answer-mc-small.png)

U otevřené otázky graf ukazuje, kolik hráčů ji mělo správně:

![Obrazovka odpovědi pro otevřenou otázku](/images/theme-design/frame5-answer-open.png)

### Rámec 7 - pořadí a vítěz

**Co na něm je:** seznam hráčů s pozicí, avatarem, jménem a skóre. Dodej **řádek hráče** jako samostatný, opakovaně použitelný prvek: ve výchozím nastavení se opakuje šestkrát, nejvýše desetkrát.

**Co pokrývá:** pořadí mezi koly a konečného vítěze.

Pořadí po kole se šesti řádky hráčů:

![Pořadí se šesti řádky hráčů](/images/theme-design/frame6-roundoutro.png)

Závěrečné odpočítávání jmenuje jednoho hráče po druhém, od posledního místa k prvnímu - místo, skóre a název týmu ve světle reflektorů. Tady je také nejvíc [létajících emoji](#flying-emoji-land-on-top-of-everything):

![Odpočítávání vítěze jmenující jednoho hráče](/images/theme-design/frame6-winner-countdown.png)

![Konečné pořadí](/images/theme-design/frame6-winner.png)

### Rámec 8 - intro kola

**Co na něm je:** krátké ohlášení pro každou kategorii kola. Kategorií je šest: věda a technika, příroda, zábava a hudba, sport, umění, historie.

**Co pokrývá:** všech šest kategorií. Jeden návrh může posloužit několika z nich.

Tady jedna kompozice s variantou pro každou kategorii:

![Intro kola pro kategorii příroda](/images/theme-design/frame7-roundintro-nature.png)

![Intro kola pro kategorii věda](/images/theme-design/frame7-roundintro-science.png)

**Postava je volitelná.** Standardní motiv QuizWitz má postavu, která mluví a reaguje; [motiv Emerald](/docs/advanced/emerald-theme) je bez ní a její vynechání odstraní nejdražší animační práci - synchronizaci rtů, oči, paže.

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

- **Telefony hráčů.** Pevné rozvržení HTML.
- **Hrstka věcí, které engine kreslí sám** - linky mezi řádky na bodovém žebříčku, zvýrazněný řádek ve výběru otázek, QR kód. Jejich barvy pocházejí z části [Barva jako seznam](#colour-as-a-list).
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

V praxi:

- čtyři možnosti odpovědi jsou čtyři samostatné vrstvy, ne jedna
- časovač je oddělený od pozadí
- tlačítko a jeho popisek jsou dva prvky
- řádek hráče je jedna skupina, kterou lze duplikovat

Co sloučené být smí: čistě dekorativní grafika pozadí, která funguje jako jediný statický obrázek.

Tohle je to jediné pravidlo, které opravdu bolí, když se nedodrží - grafiku je pak nutné rozebrat nebo překreslit, a přesně tomu nákladu má tohle uspořádání předejít.

### Efekty, které to nepřežijí

Engine kreslí na plátno HTML5. Tyhle je nutné **zapéct do obrázku** nebo je vynechat:

| Efekt                                                              | Co udělat místo toho     |
| ------------------------------------------------------------------ | ------------------------ |
| Živé rozostření, vržené stíny a záře jako filtry                   | Dodej je jako grafiku    |
| Režimy prolnutí (násobit, závoj, překrýt)       | Převeď je na plnou barvu |
| Efekty vrstev a vrstvy úprav                                       | Zapeč je do obrázku      |
| Přechody **uvnitř** textu nebo text s obrysem u jednotlivých znaků | Vynech je                |
| Masky, které se mění snímek od snímku                              | Vynech je                |

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

**Co stavba potřebuje vědět o každém textovém rámečku:** kde je, jak je velký, jak je zarovnaný, jakou má barvu a jaké písmo. Ne: v jaké velikosti bodů.

**Můžeš toho využít.** Velký rámeček s krátkým textem se sám stane silnou typografickou kompozicí a rámeček, který schválně uděláš úzký a vysoký, vtlačí text do sloupce. Využij přizpůsobování jako návrhový prostředek; jen nenavrhuj proti němu.

### Časovač - povinný, a je to animace

**Každá obrazovka otázky má časovač**; sál musí vidět, kolik času zbývá.

**Časovač není odpočítávající číslo, ale animace, jejíž přehrávací hlavu posouvá engine.** Navrhuješ postup od „plno“ k „prázdno“ - vyprazdňující se pruh, uzavírající se kruh, přesýpací hodiny, zkracující se linka. Engine přehraje tu animaci přesně takovou rychlostí, aby poslední snímek padl na konec otázky.

Z toho plyne:

- **Délka otázky není pevná.** Nastavuje se pro každý kvíz - často dvacet až třicet sekund, ale může být kratší i delší. Tvoje animace se natáhne nebo stlačí, aby seděla.
- **Žádná čísla ani tikání po sekundách.** Časovač, který odpočítává „20, 19, 18…“, přestane platit, jakmile se délka změní.
- **Poslední sekundy jsou nejnapínavější moment hry.** Pomáhá, když je postup ke konci zřetelnější nebo naléhavější.
- **Čitelné ze zadní části sálu**, na první pohled.
- **Více časovačů je povoleno.** Pruh nahoře i kruh u otázky jsou oba řízené, pokud se každý jmenuje `timer`.

Dodej časovač jako sérii klíčových snímků nebo jako popis postupu - „pruh se vyprazdňuje zprava doleva a mění barvu ze zelené na červenou“ stačí.

### Létající emoji přistávají přes všechno

Každý hráč si při připojení vybere emoji a hra ta emoji rozhazuje po obrazovce. Kreslí je engine na vrstvě nad motivem. **Tady pro tebe není co navrhovat** - ale je kolem čeho navrhovat, protože to není vzácná ozdoba.

Objevují se ve třech momentech:

- **Když hráč odpoví.** Emoji toho hráče stoupá od spodního okraje na náhodné vodorovné pozici, opíše oblouk a spadne zpátky mimo obraz.
- **Když ho hráč vymrští.** Hráči můžou své emoji vymrštit z telefonu; úhel a rychlost vycházejí ze švihu prstem a emoji startuje zespodu ze středu, roztočené.
- **Když se v závěrečném odpočítávání odhalí místo.** Salva emoji jmenovaného hráče: dvacet za běžné místo, padesát za třetí, sedmdesát pět za druhé a **sto padesát za vítěze.**

Co to znamená pro návrh:

- **Nech spodní třetinu obrazovek s pořadím a vítězem volnou od čehokoli malého nebo zásadního.** Během odpočítávání je tam dole opravdu plno.
- **Počítej s tím, že se budou tlouct s tvou paletou.** Jsou to plnobarevná emoji ze všech koutů tabulky Unicode a žádný motiv je neovládá. Návrh, který drží pohromadě jen v úzkém barevném rozsahu, bude po ty sekundy působit nahodile.
- **Vymršťování je potlačené, dokud se zobrazuje obrázek nebo video**, takže obrazovky s přílohou zůstávají čisté.
- **Celou vrstvu lze pro každou hru vypnout**, takže nestav ani kompozici, která závisí na tom, že tam budou.

### Písma

- **Písma musí být vložitelná.** Je potřeba soubor `.ttf` nebo `.otf` a k tomu licence, která povoluje vložení do aplikace. Písmo licencované jen jako webfont nebo jen pro tisk použít nelze. Ověř si to dřív, než s ním začneš navrhovat; dodatečná oprava je drahá.
- Písma s neobvykle velkými horními nebo dolními dotažnicemi se dají vykompenzovat, ale dej vědět, pokud nějaké použiješ.

### Barva jako seznam

Motiv čte seznam barev z konfiguračního souboru a telefony hráčů se stylují z téhož seznamu. Dodej svou paletu jako **pojmenovaný seznam**, ne jen jako barvy v grafice:

| Kde                         | Barvy                                                                                                                                                                                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Herní obrazovka**         | Hlavní barva, zvýrazňující barva, pozadí, barva panelu nebo kontejneru, pozadí časovače, výchozí barva textu, barva textu záhlaví, barva textu otázky, text tlačítek, text dialogů a vysvětlení, text jména hráče a skóre, barva pro správně, barva pro špatně |
| **Čtyři možnosti odpovědi** | Pro každou možnost: barva pozadí, barva ohraničení a jedna plná barva pro telefony a grafy                                                                                                                                                     |
| **Telefony hráčů**          | Pozadí, barva textu, barva obrysu, barva obrysu možností a barva pozadí a textu kontejneru odpovědí                                                                                                                                                            |

Na herní obrazovce jsou povolené přechody: uveď je jako dvě hexadecimální hodnoty.

Několik barev je _jediným_ nástrojem, jak ovlivnit části, které engine kreslí sám, takže stojí za to je zvolit, a ne nechat výchozí:

- **oddělovač** - linky mezi řádky tam, kde není panel, a na bodovém žebříčku
- stavy řádku ve výběru otázek: **aktivní**, **neaktivní** a **vybraný**
- text **dialogů**
- **přední a zadní strana QR kódu**

Když je vynecháš, spadnou na vestavěné výchozí hodnoty - bílou, šedou, červenou, černou a bílou - které k návrhu málokdy sedí.

### Logo QuizWitz

Vlastní návrhy obsahují logo QuizWitz. Vyhraď pro ně místo tam, kde nepřekáží návrhu.

---

## Co odevzdat

### Zdrojový soubor - nejlépe Illustrator

Motiv se staví v Adobe Animate a to, co Animate umí importovat, rozhoduje o tom, kolik tvé práce přežije předání neporušené:

| Nástroj                                          | Co se stane při importu                                                                                                                                                                                                                                                                   | Použij ho pro                            |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate ho importuje přímo a převede tvoje vrstvy na vrstvy Animate nebo samostatné symboly, přičemž zachová názvy vrstev a vektory ponechá upravitelné. Přesně tenhle krok zachrání grafiku před tím, aby se musela stavět ručně znovu.                  | **Preferovaný** pro finální podklad      |
| **Adobe Photoshop**                              | Importuje se s neporušenými vrstvami, jako Illustrator, ale dává rastr místo vektoru.                                                                                                                                                                                     | Možné                                    |
| **Figma**                                        | Všechno jde přes export do SVG a PNG, a právě tam se ztrácí struktura vrstev, která je tu potřeba. Pokud Figmu přesto použiješ, dodej **každý prvek zvlášť jako SVG**, s názvy souborů odpovídajícími názvům vrstev, aby se struktura dala ručně obnovit. | Koncepční fáze, pokud jsi v ní rychlejší |

Struktura souboru:

- Jedna kreslicí plocha na obrazovku, pojmenovaná podle rámců výše.
- Opakovaně použitelné části (tlačítko, řádek hráče, možnost odpovědi, časovač) jako **symboly** nebo komponenty, ne jako volné kopie.
- Názvy vrstev anglicky, bez mezer: `question`, `option1` až `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Barvy jako pojmenované vzorníky a text jako pojmenované styly, místo nastavení na každém objektu zvlášť.

### Seznam podkladů k dodání

1. **Zdrojový soubor**, strukturovaný jak je popsáno výše.
2. **Každý rámec jako PNG**, 1920 × 1080 - reference toho, jak to má vypadat. U rámce 2 verzi s logem klienta i verzi bez něj.
3. **List prvků** jako jedna kreslicí plocha: [stavební kameny obsahu a ovládací prvky](#the-element-sheet).
4. **Každý samostatný grafický prvek jako průhledné PNG v 2×**, v jedné složce, s názvem souboru odpovídajícím názvu vrstvy.
5. **Časovač** jako klíčové snímky nebo písemný popis postupu.
6. **Písma** jako `.ttf` nebo `.otf`, s dokladem o licenci.
7. **Seznam barev** z části [Barva jako seznam](#colour-as-a-list), jako hexadecimální hodnoty.
8. **Půl stránky poznámek**: jaká je myšlenka, jak se mají možnosti objevovat, co se hýbe a co zůstává stát. Ne desetistránkové zdůvodnění návrhu - ten, kdo motiv staví, potřebuje vědět, co má postavit. Nápady na pohyb můžou být popsané nebo dodané jako hrubý animatic.

### Pořadí práce

1. **Rámec 4, obrazovka otázky, spolu s listem prvků.** Nech si obojí schválit dřív než zbytek. Dohromady obsahují časovač, možnosti, panel a všechny ovládací prvky, takže určují styl celého motivu.
2. **Rámce 1 až 3.** Přirozeně vyplývají z prvních dvou.
3. **Rámce 6 až 8** přijdou na řadu nakonec.

---

## Příloha - názvy symbolů

Pro úplnost a pro toho, kdo chce přesně vědět, kde jeho grafika skončí. **Ke své práci tohle číst nepotřebuješ**; osm rámců a list prvků výše stačí. Používat tyhle názvy jako názvy vrstev ušetří jeden překladový krok.

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

Každý prvek, za kterým následuje `.text`, je přizpůsobivý textový rámeček, jak je popsáno v části [Jak se chová text](#how-text-behaves): obdélník, který engine vyplní sám. Prvek `timer` je filmový klip s vlastní časovou osou; engine si přečte počet jeho snímků a posouvá přehrávací hlavu úměrně uplynulému času, nejvýše 24krát za sekundu.

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

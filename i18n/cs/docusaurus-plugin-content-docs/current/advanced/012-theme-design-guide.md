---
id: theme-design-guide
title: Průvodce návrhem motivu
---

# Průvodce návrhem motivu

[Motivy](/docs/advanced/theming) vysvětlují, jak se motiv QuizWitz staví: v Adobe Animate, exportovaný jako knihovna CreateJS. Tato stránka se věnuje kroku, který tomu předchází - **návrhu** motivu.

Je psaná pro grafika a předpokládá, že návrh a produkci v Animate dělají různí lidé. Grafiků, kteří ještě pracují v Adobe Animate, je málo, takže je běžné, že grafik dodá grafiku a někdo jiný motiv poskládá. Funguje to dobře, ale jen tehdy, když je grafika předaná v podobě, se kterou se dá při stavbě opravdu pracovat. Tato stránka tuto podobu popisuje a zároveň slouží jako seznam podkladů k dodání, když si od grafika vyžádáš cenovou nabídku.

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

## Sedm rámců a list prvků

Hra má desítky odlišných stavů obrazovky, ale většina jsou varianty téhož rozvržení. **Navrhuješ sedm rámců a jeden list prvků; zbytek se z nich odvozuje.** Není to zkratka - takhle funguje engine. Obrazovka bez vlastní grafiky se vrací k obecnému rámci.

List je stejně důležitý jako rámce: obrazovka, která se vrací k obecnému rámci, pořád potřebuje nábytek ve své obsahové ploše - panel, řádek, linku - a ten nábytek je návrhové rozhodnutí, ne něco, co by se dalo odvodit z pozadí.

| #     | Rámec                  | Co na něm je                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Co se z něj odvozuje                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Obecný rámec**       | Pozadí, titulek v záhlaví a prázdná obsahová plocha pod ním. Není to hotová kompozice - je to rámec, uvnitř kterého se staví zbytek.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Třináct stavů obrazovky: vysvětlení kola, pořadí, představení hráčů, varianty s výběrem z možností, dlouhé otázky, upozornění na Seats, nastavení. Každý z nich vyplňuje tu obsahovou plochu po svém prvky z listu, takže musí unést věci, které si vůbec nejsou podobné. Výběr otázek a dlouhá otázka mohou dostat vlastní kompozici, pokud to tak chceš; jinak používají tento rámec. |
| **2** | **Připojení a čekání** | Dvě obrazovky, ne jedna. **Obrazovka připojení** je to, co sál vidí, aby se mohl připojit: pět řádků instrukcí, kód hry, QR kód, řádek s počtem připojených hráčů a seznam hráčů, kteří postupně přibývají. Navrhni ji **dvakrát**: s logem klienta a bez něj. Kód hry a QR kód generuje engine; vyhraď pro QR kód čtverec. **Čekací obrazovka** zůstává zobrazená, zatímco quizmaster nahlas čte otázku, a je téměř prázdná: vlastní logo kvízu, nebo grafika motivu, a nic dalšího. Je na obrazovce déle než skoro cokoli jiného ve hře. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **3** | **Obrazovka otázky**   | Otázka, časovač, čtyři možnosti odpovědi, řádek zpětné vazby. Obrazovka, na kterou se sál dívá nejdéle.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **4** | **Otázka s přílohou**  | Totéž, uspořádané kolem obrázku nebo videa. Může to být jiná kompozice než u rámce 3. Příloha se zmenší tak, aby se vešla do rámečku, který nakreslíš, takže v něm musí přijatelně vypadat obrázek na šířku i na výšku.                                                                                                                                                                                                                                                                                                                                                                                                                    | Také varianta s přílohou na celou obrazovku a přílohy zobrazené mezi otázkami.                                                                                                                                                                                                                                                                                                                                                          |
| **5** | **Obrazovka odpovědi** | Která odpověď byla správná, jak se odpovědi sálu rozložily mezi možnosti a řádek zpětné vazby.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Také obrazovka odpovědi pro otevřené otázky a pro otázky s přílohou.                                                                                                                                                                                                                                                                                                                                                                    |
| **6** | **Pořadí a vítěz**     | Seznam hráčů s pozicí, avatarem, jménem a skóre. Dodej **řádek hráče** jako samostatný, opakovaně použitelný prvek - ve výchozím nastavení se opakuje šestkrát, až do deseti.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Jak průběžné pořadí mezi koly, tak konečného vítěze.                                                                                                                                                                                                                                                                                                                                                                                    |
| **7** | **Intro kola**         | Krátké ohlášení pro každou kategorii kola. Kategorií je šest: věda a technika, příroda, zábava a hudba, sport, umění, historie. Jeden návrh může posloužit několika kategoriím.                                                                                                                                                                                                                                                                                                                                                                                                                                            | Všech šest kategorií.                                                                                                                                                                                                                                                                                                                                                                                                                   |

### List prvků

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

### Co je rozhodnuto za tebe

- **Telefony hráčů.** Pevné rozvržení v HTML, stylované z tvého seznamu barev.
- **Hrstka věcí, které engine kreslí sám.** Část nábytku se kreslí v kódu, místo aby se brala z motivu - linky mezi řádky na bodovém žebříčku, zvýrazněný řádek ve výběru otázek, QR kód. Ty berou barvu ze seznamu v části **Barva jako seznam** a odnikud jinud, takže ten seznam je jediné, čím je můžeš ovlivnit.
- **Které obrazovky se vracejí k obecnému rámci a jak.**
- **Jak se šest kategorií mapuje na grafiku intra kola.** To přiřazení je nastavení v konfiguraci, takže jedno intro se dá znovu použít pro několik kategorií.
- **Veškeré časování a všechny délky animací.**
- **Zvuk.** Motiv může mít vlastní hudbu a zvukové efekty, ale to je samostatný podklad k dodání a není součástí zadání návrhu.

### Postava je volitelná

Výchozí motiv QuizWitz má postavu, která mluví a reaguje. Nic ji nevyžaduje: validátor motivů jen upozorní na prvek `ted`; bez ní neselže. [Motiv Emerald](/docs/advanced/emerald-theme) se dodává bez postavy a její vypuštění odstraní nejdražší animační práci - synchronizaci rtů, oči, ruce.

Bez postavy se z intra kola stává grafický, typografický nebo ilustrativní moment. Dva přístupy udrží práci v rozumném rozsahu: jedna kompozice s barevnou nebo ikonovou variantou pro každou kategorii, nebo jediné univerzální ohlášení, ve kterém se mění jen název kola. Šest opravdu odlišných inter je hodně práce na pár sekund na obrazovce.

---

## Jak tyhle rámce vypadají v praxi

Obrazovky níže pocházejí z existujícího motivu. Jsou tu proto, aby ukázaly, **které prvky se na jaké obrazovce objevují a kdy**. Nejsou referencí pro styl _ani_ pro rozvržení: kam tento motiv umisťuje svou otázku, své možnosti a svůj časovač, je jeho vlastní rozhodnutí, a to tvoje se může úplně lišit. Čti je kvůli tomu, co tam musí být, ne kvůli tomu, kde to je. Všechny, a ještě víc, si můžeš přehrát v [testeru motivů](https://client.quizwitz.com/test.html).

### Rámec 1 - obecný rámec

Dva herní momenty na tomtéž rámci: výběr otázek a bodový žebříček.

Podívej se, jak málo mají společného. Výběr dává své tři řádky do panelu s obrysem; žebříček nemá panel vůbec, jen řádky oddělené tenkými linkami. Co ty dva sdílejí, je pozadí a pruh záhlaví nad nimi - všechno pod tím patří konkrétní obrazovce a vyplňuje to hra, ne ty.

![Obecný rámec s výběrem otázek o třech řádcích](/images/theme-design/frame1-general-multiquestion.png)

![Obecný rámec s bodovým žebříčkem o pěti úrovních](/images/theme-design/frame1-general-strikeladder.png)

Ten panel a ty linky jsou návrhová rozhodnutí a jsou na tobě - pocházejí z **listu prvků**, ne z tohoto rámce. Co musí tenhle rámec zvládnout, je unést je: navrhni obsahovou plochu jako prázdnou, neutrální a prostornou zónu, která funguje stejně dobře s orámovaným panelem, s holým seznamem i s tabulkou řádků. Pozadí, které je uprostřed rušné, nebo záhlaví, které funguje jen s panelem zastrčeným těsně pod ním, je místo, kde se to láme.

### Rámec 2 - připojení a čekání

S logem klienta vedle kódu hry a bez něj, kdy obrazovku nese vlastní grafika motivu:

![Obrazovka připojení s logem klienta](/images/theme-design/frame2-connect.png)

![Obrazovka připojení bez loga klienta](/images/theme-design/frame2-connect-nologo.png)

Čekací obrazovka je samostatná kompozice, ne varianta obrazovky připojení - ty dvě sdílejí jen pozadí. Zůstává zobrazená, zatímco quizmaster nahlas čte otázku, a je téměř prázdná: vlastní logo kvízu, nebo grafika motivu, a nic dalšího. Je na obrazovce déle než skoro cokoli jiného ve hře, takže si zaslouží víc pozornosti, než se prázdné obrazovce obvykle dostává.

![Čekací obrazovka](/images/theme-design/frame2-pending.png)

### Rámec 3 - obrazovka otázky

Čtyři možnosti, otázka nad nimi, časovač uprostřed. Všimni si, že možnost může být tvořená jen emoji.

![Obrazovka otázky se čtyřmi textovými možnostmi](/images/theme-design/frame3-question-options.png)

![Obrazovka otázky s vlajkami jako možnostmi odpovědi](/images/theme-design/frame3-question-emoji.png)

Otázka bez možností - hráči píší odpověď na telefonu. Obrazovka je skoro prázdná a hlavním prvkem se stává časovač:

![Otevřená otázka jen s otázkou a velkým časovačem](/images/theme-design/frame3-question-open.png)

Okamžik, kdy vyprší čas. Přes obrazovku se objeví bublina zpětné vazby a časovač je prázdný:

![Obrazovka otázky ve stavu vypršení času](/images/theme-design/frame3-question-timeout.png)

### Rámec 4 - příloha

Tytéž části, přeuspořádané kolem plochy pro přílohu, s možnostmi vlevo a vpravo:

![Obrazovka otázky s obrázkem uprostřed](/images/theme-design/frame4-question-attachment.png)

Příloha sama o sobě, přes celou obrazovku:

![Příloha na celou obrazovku](/images/theme-design/frame4-attachment-fullscreen.png)

### Rámec 5 - obrazovka odpovědi

Tato obrazovka prochází třemi momenty. Nejdřív rozložení, zatím bez čehokoli označeného:

![Obrazovka odpovědi s rozložením](/images/theme-design/frame5-answer-mc-spread.png)

Pak se správná možnost zaškrtne a špatné se přeškrtnou:

![Obrazovka odpovědi s odhalenou správnou možností](/images/theme-design/frame5-answer-mc-reveal.png)

A pokud má otázka vysvětlení, spadne přes grafiku bublina. Nech na ni místo - přistane přes všechno, co jsi navrhl:

![Obrazovka odpovědi s bublinou vysvětlení](/images/theme-design/frame5-answer-mc-explanation.png)

U malé skupiny je tentýž moment seznamem skóre místo grafu:

![Obrazovka odpovědi pro malou skupinu](/images/theme-design/frame5-answer-mc-small.png)

U otevřené otázky graf ukazuje, kolik hráčů ji mělo správně:

![Obrazovka odpovědi pro otevřenou otázku](/images/theme-design/frame5-answer-open.png)

### Rámec 6 - pořadí a vítěz

Pořadí po kole. Řádek hráče je prvek, který se opakuje: pozice, avatar, jméno, skóre.

![Pořadí se šesti řádky hráčů](/images/theme-design/frame6-roundoutro.png)

Závěrečné odpočítávání jmenuje jednoho hráče po druhém, od posledního místa k prvnímu - místo, skóre a název týmu ve světle reflektorů. Tady jsou také létající emoji nejhustší; viz poznámku níže:

![Odpočítávání vítěze jmenující jednoho hráče](/images/theme-design/frame6-winner-countdown.png)

![Konečné pořadí](/images/theme-design/frame6-winner.png)

### Rámec 7 - intro kola

Jeden návrh, případně s variantou pro každou kategorii:

![Intro kola pro kategorii příroda](/images/theme-design/frame7-roundintro-nature.png)

![Intro kola pro kategorii věda](/images/theme-design/frame7-roundintro-science.png)

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

V praxi: čtyři možnosti odpovědi jsou čtyři samostatné vrstvy, ne jedna. Časovač je oddělený od pozadí. Tlačítko a jeho popisek jsou dva prvky. Řádek hráče je jedna skupina, kterou lze duplikovat.

Co sloučené být smí: čistě dekorativní grafika pozadí, která funguje jako jediný statický obrázek.

Tohle je to jediné pravidlo, které opravdu bolí, když se nedodrží - grafiku je pak nutné rozebrat nebo překreslit, a přesně tomu nákladu má tohle uspořádání předejít.

### Efekty, které to nepřežijí

Engine kreslí na plátno HTML5. Tyhle je nutné **zapéct do obrázku** nebo je vynechat:

- Živé rozostření, vržené stíny a záře jako filtry → dodej je jako grafiku
- Režimy prolnutí (násobit, závoj, překrytí) → převeď je na plnou barvu
- Efekty vrstev a vrstvy úprav
- Přechody **uvnitř** textu nebo text s obrysem u jednotlivých znaků
- Masky, které se mění snímek od snímku

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
- **Rámeček je maximum, ne slib.** Ty navrhuješ jeho proporce; výplň se mění.
- **Dvanáct jazyků.** Německé složeniny jsou dlouhé a maďarština není o nic vlídnější. Rámeček, který je v angličtině těsný, spadne v němčině na nečitelně malou velikost.
- **Uvnitř textu se mohou objevit emoji.** Hráči si jedno vybírají vedle názvu týmu a otázka nebo možnost může nějaké obsahovat - někdy je možnost jen emoji a nic víc. Kreslí se barevně a jsou vyšší než písmena kolem nich.

Co potřebuje stavba vědět o každém textovém rámečku: kde je, jak je velký, jak je zarovnaný, jakou má barvu a jaké písmo. Ne: v jaké velikosti bodů.

Plynou z toho dvě věci, které můžeš využít: velký rámeček s krátkým textem se sám o sobě stane silnou typografickou kompozicí a rámeček, který záměrně uděláš úzký a vysoký, vtěsná text do sloupce. To přizpůsobování můžeš použít jako návrhový prostředek - jen bys neměl navrhovat proti němu.

### Časovač - povinný, a je to animace

**Každá obrazovka otázky má časovač.** Není volitelný; sál musí vidět, kolik času zbývá. Oba rámce s otázkou ho nesou.

**Časovač není odpočítávající číslo, ale animace, jejíž přehrávací hlavu posouvá engine.** Navrhuješ postup od „plno“ k „prázdno“ - vyprazdňující se pruh, uzavírající se kruh, přesýpací hodiny, zkracující se linka. Engine přehraje tu animaci přesně takovou rychlostí, aby poslední snímek padl na konec otázky.

Z toho plyne:

- **Délka otázky není pevná.** Nastavuje se pro každý kvíz - často dvacet až třicet sekund, ale může být kratší i delší. Tvoje animace se natáhne nebo stlačí, aby seděla. Navrhni _postup_, ne animaci na daný počet sekund.
- **Žádná čísla ani tikání po sekundách.** Časovač, který odpočítává „20, 19, 18…“, přestane platit, jakmile se délka změní.
- **Poslední sekundy jsou nejnapínavější moment hry.** Pomáhá, když je postup ke konci zřetelnější nebo naléhavější.
- **Čitelné ze zadní části sálu**, na první pohled.
- **Více časovačů je povoleno.** Pruh nahoře i kruh u otázky jsou oba řízené, pokud se každý jmenuje `timer`.

Dodej časovač jako sérii klíčových snímků nebo jako popis postupu - „pruh se vyprazdňuje zprava doleva a mění barvu ze zelené na červenou“ stačí.

### Létající emoji přistávají přes všechno

Každý hráč si při připojení vybere emoji a hra ta emoji rozhazuje po obrazovce. Kreslí je engine ve vrstvě nad motivem, v těch barvách, které emoji hráče zrovna má. **Tady pro tebe není co navrhovat** - ale je kolem čeho navrhovat, protože to není vzácná ozdoba. Objevují se ve třech momentech:

- **Když hráč odpoví.** Emoji toho hráče stoupá od spodního okraje na náhodné vodorovné pozici, opíše oblouk a spadne zpátky mimo obraz.
- **Když ho hráč vymrští.** Hráči můžou své emoji vymrštit z telefonu; úhel a rychlost vycházejí ze švihu prstem a emoji startuje zespodu ze středu, roztočené.
- **Když se v závěrečném odpočítávání odhalí místo.** Salva emoji jmenovaného hráče: dvacet za běžné místo, padesát za třetí, sedmdesát pět za druhé a **sto padesát za vítěze.**

Vždycky vstupují od spodního okraje, opisují oblouk pod vlivem gravitace a padají zase ven. Co to znamená pro návrh:

- **Nech spodní třetinu obrazovek s pořadím a vítězem volnou od čehokoli malého nebo zásadního.** Během odpočítávání je tam dole opravdu plno.
- **Počítej s tím, že se budou tlouct s tvou paletou.** Jsou to plnobarevná emoji ze všech koutů tabulky Unicode a žádný motiv je neovládá. Návrh, který drží pohromadě jen v úzkém barevném rozsahu, bude po ty sekundy působit nahodile.
- **Vymršťování je potlačené, dokud se zobrazuje obrázek nebo video**, takže obrazovky s přílohou zůstávají čisté.
- Celou vrstvu je možné pro jednotlivou hru vypnout, takže nestav ani kompozici, která by závisela na tom, že tam jsou.

### Písma

- **Písma musí být vložitelná.** Je potřeba soubor `.ttf` nebo `.otf` a k tomu licence, která povoluje vložení do aplikace. Písmo licencované jen jako webfont nebo jen pro tisk použít nelze. Ověř si to dřív, než s ním začneš navrhovat; dodatečná oprava je drahá.
- Písma s neobvykle velkými horními nebo dolními dotažnicemi se dají vykompenzovat, ale dej vědět, pokud nějaké použiješ.

### Barva jako seznam

Motiv čte seznam barev z konfiguračního souboru a telefony hráčů se stylují z téhož seznamu. Dodej svou paletu jako **pojmenovaný seznam**, ne jen jako barvy v grafice:

- **Herní obrazovka:** hlavní barva, doplňková barva, pozadí, barva panelu nebo kontejneru, pozadí časovače, výchozí barva textu, barva textu v záhlaví, barva textu otázky, text tlačítek, text dialogů a vysvětlení, text jména hráče a skóre, barva pro správně, barva pro špatně.
- **Čtyři možnosti odpovědi:** každá s barvou pozadí a barvou obrysu, plus jedna plná barva na možnost pro telefony a grafy.
- **Telefony hráčů:** pozadí, barva textu, barva obrysu, barva obrysu možností a barva pozadí a textu kontejneru odpovědi.

Na herní obrazovce jsou povolené přechody: uveď je jako dvě hexadecimální hodnoty.

Pár barev je _jediná_ páka na části, které engine kreslí sám, takže se vyplatí je rozhodnout, místo aby zůstaly výchozí: **oddělovač** (linky mezi řádky tam, kde není panel, a na bodovém žebříčku), stavy **aktivní**, **neaktivní** a **vybraný** u řádku ve výběru otázek, text **dialogů** a **přední a zadní strana QR kódu**. Když je vynecháš, spadnou na vestavěné výchozí hodnoty - bílou, šedou, červenou, černou a bílou - které k návrhu málokdy sedí.

### Logo QuizWitz

Vlastní návrhy obsahují logo QuizWitz. Vyhraď pro ně místo tam, kde nepřekáží návrhu.

---

## Co odevzdat

### Zdrojový soubor - nejlépe Illustrator

**Adobe Illustrator (`.ai`) je preferovaný a má to konkrétní důvod.** Motiv se staví v Adobe Animate, který soubory z Illustratoru importuje přímo a převádí tvoje vrstvy na vrstvy Animate nebo na samostatné symboly, přičemž zachovává názvy vrstev a nechává vektory upravitelné. Přesně tenhle krok zachrání grafiku před tím, aby se musela stavět ručně znovu.

Figma nebo Photoshop jsou možné, ale věz, co to stojí: u Figmy jde všechno přes export do SVG a PNG, a právě tam se ztrácí struktura vrstev, která je tady potřeba. Pokud Figmu přesto použiješ, dodej **každý prvek zvlášť jako SVG**, s názvy souborů odpovídajícími názvům vrstev, aby se struktura dala ručně obnovit. Photoshop se do Animate importuje s vrstvami netknutými, stejně jako Illustrator, ale dá ti rastr místo vektoru.

Pokud jsi ve Figmě rychlejší, použij ji pro fázi konceptu a finální verzi dodej v Illustratoru.

Struktura souboru:

- Jedno kreslicí plátno na obrazovku, každé přesně 1920 × 1080, pojmenované podle rámců výše.
- Opakovaně použitelné části (tlačítko, řádek hráče, možnost odpovědi, časovač) jako **symboly** nebo komponenty, ne jako volné kopie.
- Názvy vrstev anglicky, bez mezer: `question`, `option1` až `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Barvy jako pojmenované vzorníky a text jako pojmenované styly, místo nastavení na každém objektu zvlášť.

### Seznam podkladů k dodání

1. **Zdrojový soubor**, strukturovaný jak je popsáno výše.
2. **Každý rámec jako PNG**, 1920 × 1080 - reference toho, jak to má vypadat. U rámce 2 verzi s logem klienta i verzi bez něj.
3. **List prvků** jako jedno kreslicí plátno: stavební kameny obsahu a ovládací prvky vyjmenované výše.
4. **Každý samostatný grafický prvek jako průhledné PNG v 2×**, v jedné složce, s názvem souboru odpovídajícím názvu vrstvy.
5. **Časovač** jako klíčové snímky nebo písemný popis postupu.
6. **Písma** jako `.ttf` nebo `.otf`, s dokladem o licenci.
7. **Seznam barev** popsaný výše, v hexadecimálních hodnotách.
8. **Půl stránky poznámek**: jaká je myšlenka, jak se mají možnosti objevovat, co se hýbe a co zůstává stát. Ne desetistránkové zdůvodnění návrhu - ten, kdo motiv staví, potřebuje vědět, co má postavit. Nápady na pohyb můžou být popsané nebo dodané jako hrubý animatic.

### Pořadí práce

Začni rámcem 3, obrazovkou otázky, spolu s listem prvků, a nech oba schválit dřív než zbytek. Dohromady nesou časovač, možnosti, panel a všechny ovládací prvky, takže určují styl celého motivu, a obrazovka otázky je ta, na kterou se sál dívá nejdéle. Rámce 1 a 2 z nich přirozeně vyplynou; rámce 5 až 7 přijdou nakonec.

---

## Příloha - názvy symbolů

Pro úplnost a pro toho, kdo chce přesně vědět, kde jeho grafika skončí. **Abys tuhle práci udělal, tohle číst nemusíš**; sedm rámců a list prvků výše stačí. Používat tyhle názvy jako názvy vrstev ušetří jeden překladový krok.

| Rámec                                           | Název symbolu                                                                                                                             | Povinné části                                                                                                                                                                            |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Obecný rámec          | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` volitelně                                                                        | `placeholder` (obsahová plocha); textový rámeček `title` volitelně                                                                                                    |
| 1b. Výběr otázek, dlouhá otázka | `MultiQuestionScreen`, `LongQuestionScreen`; oba volitelně, vracejí se k obecnému rámci                                                   | výběr: zástupný prvek `questions`, `timer`; dlouhá otázka: zástupný prvek `question`                                                                     |
| 2. Obrazovka připojení   | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` volitelně, se zástupným prvkem `logo`                                    | `instructions.line1` až `line5`, `connectedPlayers`; zástupný prvek `qrCode` s návěštím snímku `showQrCode` volitelně                                                                    |
| 2b. Čekací obrazovka            | `PendingScreen`; `PendingScreenWithLogo` volitelně                                                                                        | `header.text`                                                                                                                                                                            |
| 3. Obrazovka otázky      | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` až `option4`, návěští snímků `showOptions` a `showFeedback`                                                                         |
| 4. Otázka s přílohou     | `QuestionScreenAttachment`                                                                                                                | jako výše, plus `attachment.placeholder`                                                                                                                                                 |
| 4b. Příloha na celou obrazovku  | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                            |
| 5. Obrazovka odpovědi    | `AnswerPieScreen`; `AnswerPieScreenAttachment` volitelně                                                                                  | `option1` až `option4`, `answer.text`, `feedback.text`                                                                                                                                   |
| 5b. Odpověď na otevřenou otázku | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; varianty `…Attachment` volitelně                                                           | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                    |
| 6. Pořadí                | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` a `PlayerScoreNoImage` volitelně                                | `header.text`, `players`, `feedback.text` (`playAgain.text` volitelně); v řádku: `position`, `name`, `score`, `avatar` volitelně                      |
| 7. Intro kola            | jeden nebo více symbolů s libovolným názvem; konfigurační soubor přiřazuje každé ze šesti kategorií jeden symbol                          | -                                                                                                                                                                                        |
| -                                               | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                       |
| -                                               | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | vlastní grafiku nepotřebují - staví se z toho, co se objeví v tvých rámcích                                                                                                              |
| -                                               | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | zobrazují se jen v desktopové aplikaci, ne v živém kvízu. Nejsou součástí zadání: přebírají se ze šablony motivu a přestylují se tvým pozadím a tlačítky |

Symboly intra kola ve výchozím motivu se jmenují `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` a `RoundIntroTedCultHist`; umění a historie sdílejí ten poslední. „Ted“ v těch názvech je pozůstatek postavy z původního motivu a neznamená, že se v nich postava musí objevit.

Každý prvek s `.text` na konci je přizpůsobený textový rámeček, jak je popsáno výše: obdélník, který engine sám vyplní. Prvek `timer` je filmový klip s vlastní časovou osou; engine si přečte počet jeho snímků a posouvá přehrávací hlavu úměrně uplynulému času, nejvýše 24krát za sekundu.

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

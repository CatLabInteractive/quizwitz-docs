---
id: theme-design-guide
title: Sprievodca návrhom témy
---

# Sprievodca návrhom témy

[Témy](/docs/advanced/theming) vysvetľujú, ako sa téma QuizWitz stavia: v Adobe Animate, exportovaná ako knižnica CreateJS. Táto stránka sa venuje kroku, ktorý tomu predchádza - **návrhu** témy.

Je napísaná pre grafického dizajnéra a predpokladá, že návrh a produkciu v Animate robia rôzni ľudia. V Adobe Animate dnes pracuje už len málo dizajnérov, takže dizajnér zvyčajne dodá grafiku a tému zostaví niekto iný. To funguje dobre, pokiaľ grafika príde v podobe, ktorú dokáže zostavenie použiť. Táto stránka túto podobu opisuje a zároveň slúži ako zoznam podkladov na dodanie, keď si od grafika vyžiadaš cenovú ponuku.

Stránka má štyri časti:

1. [Čo navrhuješ](#what-you-are-designing) - obrazovky, ktoré téma pokrýva.
2. [Osem rámcov](#eight-frames-and-an-element-sheet) a [hárok prvkov](#the-element-sheet), jeden po druhom, so snímkami obrazovky.
3. [Pravidlá návrhu](#design-rules) - ako musí byť súbor postavený, aby ho engine mohol použiť.
4. [Čo odovzdať](#what-to-hand-over) - zdrojový súbor, podklady na dodanie a poradie práce.

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

## Osem rámcov a hárok prvkov

Hra má desiatky odlišných stavov obrazovky, ale väčšina sú varianty toho istého rozloženia. **Navrhuješ osem rámcov a jeden hárok prvkov; zvyšok sa z nich odvodí.** Nie je to skratka - takto engine funguje. Obrazovka bez vlastnej grafiky sa vracia k všeobecnému rámcu.

Hárok je rovnako dôležitý ako rámce: aj záložná obrazovka potrebuje vo svojej obsahovej ploche vybavenie - panel, riadok, linku.

| # | Rámec                                                    | Pokrýva aj                                                      |
| - | -------------------------------------------------------- | --------------------------------------------------------------- |
| 1 | [Všeobecný rámec](#frame-1---the-general-frame)          | Trinásť stavov obrazovky bez vlastnej grafiky                   |
| 2 | [Obrazovka pripojenia](#frame-2---the-connect-screen)    | Nakresli ju dvakrát: s logom klienta a bez neho |
| 3 | [Čakacia obrazovka](#frame-3---the-waiting-screen)       | -                                                               |
| 4 | [Obrazovka otázky](#frame-4---the-question-screen)       | -                                                               |
| 5 | [Otázka s prílohou](#frame-5---question-with-attachment) | Príloha na celú obrazovku a prílohy zobrazené medzi otázkami    |
| 6 | [Obrazovka odpovede](#frame-6---the-answer-screen)       | Obrazovka odpovede pre otvorené otázky a pre otázky s prílohou  |
| 7 | [Rebríček a víťaz](#frame-7---standings-and-winner)      | Rebríček medzi kolami a konečný víťaz                           |
| 8 | [Intro kola](#frame-8---the-round-intro)                 | Všetkých šesť kategórií kôl                                     |

:::note[O snímkach obrazovky]
Obrazovky nižšie pochádzajú z existujúcej témy. Ukazujú, **ktoré prvky sa objavujú na ktorej obrazovke a kedy**. Nie sú referenciou pre štýl _ani_ pre rozloženie: kam táto téma umiestňuje svoju otázku, svoje možnosti a svoju časomieru, je jej vlastné rozhodnutie, a to tvoje sa môže úplne líšiť.
:::

### Rámec 1 - všeobecný rámec

**Čo je na ňom:** pozadie, nadpis v hlavičke a pod ním prázdna obsahová plocha. Nie je to hotová kompozícia, ale rámec, vnútri ktorého sa stavia všetko ostatné.

**Čo pokrýva:** trinásť stavov obrazovky - vysvetlenie kola, rebríček, predstavenie hráčov, varianty výberu z možností, dlhé otázky, upozornenia na Seats, nastavenia. Každý z nich vypĺňa obsahovú plochu po svojom prvkami z [hárku prvkov](#the-element-sheet), takže rámec musí uniesť veci, ktoré na seba vôbec nepodobajú. Výber otázok a dlhá otázka môžu dostať vlastnú kompozíciu, ak to tak chceš; inak používajú tento rámec.

Dva herné momenty na tom istom rámci: výber otázok a bodový rebrík.

![Všeobecný rámec s výberom otázok o troch riadkoch](/images/theme-design/frame1-general-multiquestion.png)

![Všeobecný rámec s bodovým rebríkom o piatich úrovniach](/images/theme-design/frame1-general-strikeladder.png)

Pozri sa, ako málo majú spoločné. Výber dáva svoje tri riadky do panela s obrysom; rebrík nemá panel vôbec, len riadky oddelené tenkými linkami. Čo tie dva zdieľajú, je pozadie a pruh hlavičky nad nimi - všetko pod tým patrí konkrétnej obrazovke a vypĺňa to hra, nie ty.

Ten panel a tie linky pochádzajú z [hárku prvkov](#the-element-sheet), nie z tohto rámca. Čo musí tento rámec zvládnuť, je uniesť ich: navrhni obsahovú plochu ako prázdnu, neutrálnu a priestrannú zónu, ktorá funguje rovnako dobre s orámovaným panelom, s holým zoznamom aj s tabuľkou riadkov. Pozadie, ktoré je uprostred rušné, alebo hlavička, ktorá funguje len s panelom zastrčeným tesne pod ňou, je miesto, kde sa to láme.

### Rámec 2 - obrazovka pripojenia

**Čo je na nej:** všetko, čo sála potrebuje na pripojenie.

- päť riadkov pokynov
- kód na pripojenie a QR kód, oba generuje engine - vyhraď štvorec pre QR kód
- riadok s počtom pripojených hráčov
- zoznam postupne pribúdajúcich hráčov

**Nakresli ju dvakrát:** s logom klienta vedľa kódu na pripojenie a bez neho, keď obrazovku nesie vlastná grafika témy.

![Obrazovka pripojenia s logom klienta](/images/theme-design/frame2-connect.png)

![Obrazovka pripojenia bez loga klienta](/images/theme-design/frame2-connect-nologo.png)

### Rámec 3 - čakacia obrazovka

**Čo je na nej:** takmer nič - vlastné logo kvízu alebo grafika témy.

S obrazovkou pripojenia zdieľa len pozadie, takže ju navrhni ako samostatnú kompozíciu. Zostáva zobrazená, kým quizmaster číta otázku nahlas, takže je na obrazovke dlhšie ako takmer čokoľvek iné v hre. Zaslúži si viac pozornosti, než akú prázdna obrazovka zvyčajne dostane.

![Čakacia obrazovka](/images/theme-design/frame2-pending.png)

### Rámec 4 - obrazovka otázky

**Čo je na nej:** otázka, časomiera, štyri možnosti odpovede a riadok spätnej väzby. Na túto obrazovku sa sála pozerá najdlhšie. Všimni si, že možnosť môže pozostávať iba z emoji:

![Obrazovka otázky so štyrmi textovými možnosťami](/images/theme-design/frame3-question-options.png)

![Obrazovka otázky s vlajkami ako možnosťami odpovede](/images/theme-design/frame3-question-emoji.png)

Otázka bez možností - hráči píšu odpoveď na telefóne. Obrazovka je takmer prázdna a hlavným prvkom sa stáva časomiera:

![Otvorená otázka len s otázkou a veľkou časomierou](/images/theme-design/frame3-question-open.png)

Okamih, keď vyprší čas. Cez obrazovku sa objaví bublina spätnej väzby a časomiera je prázdna:

![Obrazovka otázky v stave vypršania času](/images/theme-design/frame3-question-timeout.png)

### Rámec 5 - otázka s prílohou

**Čo je na nej:** tie isté časti ako v rámci 4, usporiadané okolo obrázka alebo videa. Môže to byť iná kompozícia. Príloha sa zmenší tak, aby sa zmestila do rámčeka, ktorý nakreslíš, takže v ňom musí prijateľne vyzerať obrázok na šírku aj na výšku.

**Čo pokrýva:** prílohu na celú obrazovku a prílohy zobrazené medzi otázkami.

Tu s možnosťami vľavo a vpravo od prílohy:

![Obrazovka otázky s obrázkom uprostred](/images/theme-design/frame4-question-attachment.png)

Príloha sama osebe, cez celú obrazovku:

![Príloha na celú obrazovku](/images/theme-design/frame4-attachment-fullscreen.png)

### Rámec 6 - obrazovka odpovede

**Čo je na nej:** ktorá odpoveď bola správna, ako sa odpovede sály rozložili medzi možnosti, a riadok spätnej väzby.

**Čo pokrýva:** obrazovku odpovede pre otvorené otázky a pre otázky s prílohou.

Obrazovka prechádza tromi momentmi. Najprv rozloženie, zatiaľ bez čohokoľvek označeného:

![Obrazovka odpovede s rozložením](/images/theme-design/frame5-answer-mc-spread.png)

Potom sa správna možnosť začiarkne a nesprávne sa prečiarknu:

![Obrazovka odpovede s odhalenou správnou možnosťou](/images/theme-design/frame5-answer-mc-reveal.png)

A ak má otázka vysvetlenie, spadne cez grafiku bublina. Nechaj na ňu miesto - pristane cez všetko, čo si navrhol:

![Obrazovka odpovede s bublinou vysvetlenia](/images/theme-design/frame5-answer-mc-explanation.png)

Pri malej skupine je ten istý moment zoznamom skóre namiesto grafu:

![Obrazovka odpovede pre malú skupinu](/images/theme-design/frame5-answer-mc-small.png)

Pri otvorenej otázke graf ukazuje, koľko hráčov ju malo správne:

![Obrazovka odpovede pre otvorenú otázku](/images/theme-design/frame5-answer-open.png)

### Rámec 7 - rebríček a víťaz

**Čo je na ňom:** zoznam hráčov s umiestnením, avatarom, menom a skóre. Dodaj **riadok hráča** ako samostatný, opakovane použiteľný prvok: predvolene sa opakuje šesťkrát, najviac desaťkrát.

**Čo pokrýva:** rebríček medzi kolami a konečného víťaza.

Rebríček po kole so šiestimi riadkami hráčov:

![Rebríček so šiestimi riadkami hráčov](/images/theme-design/frame6-roundoutro.png)

Záverečné odpočítavanie menuje jedného hráča po druhom, od posledného miesta k prvému - miesto, skóre a názov tímu vo svetle reflektorov. Práve tu je aj najviac [lietajúcich emoji](#flying-emoji-land-on-top-of-everything):

![Odpočítavanie víťaza menujúce jedného hráča](/images/theme-design/frame6-winner-countdown.png)

![Konečný rebríček](/images/theme-design/frame6-winner.png)

### Rámec 8 - intro kola

**Čo je na ňom:** krátke ohlásenie pre každú kategóriu kola. Kategórií je šesť: veda a technika, príroda, zábava a hudba, šport, umenie, história.

**Čo pokrýva:** všetkých šesť kategórií. Jeden návrh môže slúžiť viacerým z nich.

Tu jedna kompozícia s variantom pre každú kategóriu:

![Intro kola pre kategóriu príroda](/images/theme-design/frame7-roundintro-nature.png)

![Intro kola pre kategóriu veda](/images/theme-design/frame7-roundintro-science.png)

**Postava je voliteľná.** Štandardná téma QuizWitz má postavu, ktorá hovorí a reaguje; [téma Emerald](/docs/advanced/emerald-theme) sa dodáva bez nej a jej vynechanie odstráni najdrahšiu animačnú prácu - synchronizáciu pier, oči, ruky.

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

- **Telefóny hráčov.** Pevné rozloženie v HTML.
- **Tých pár vecí, ktoré engine kreslí sám** - linky medzi riadkami na bodovom rebríku, zvýraznený riadok vo výbere otázok, QR kód. Ich farby pochádzajú zo [zoznamu farieb](#colour-as-a-list).
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

V praxi:

- štyri možnosti odpovede sú štyri samostatné vrstvy, nie jedna
- časomiera je oddelená od pozadia
- tlačidlo a jeho popis sú dva prvky
- riadok hráča je jedna skupina, ktorú možno duplikovať

Čo zlúčené byť smie: čisto dekoratívna grafika pozadia, ktorá funguje ako jediný statický obrázok.

Toto je to jediné pravidlo, ktoré naozaj bolí, keď sa nedodrží - grafiku je potom nutné rozobrať alebo prekresliť, a presne tomu nákladu má toto usporiadanie predísť.

### Efekty, ktoré to neprežijú

Engine kreslí na plátno HTML5. Tieto je nutné **zapiecť do obrázka** alebo ich vynechať:

| Efekt                                                                   | Čo urobiť namiesto toho  |
| ----------------------------------------------------------------------- | ------------------------ |
| Živé rozostrenie, vrhané tiene a žiara ako filtre                       | Dodaj ich ako grafiku    |
| Režimy prelínania (násobenie, závoj, prekrytie)      | Preveď ich na plnú farbu |
| Efekty vrstiev a vrstvy úprav                                           | Zapeč ich do obrázka     |
| Prechody **vnútri** textu alebo text s obrysom pri jednotlivých znakoch | Vynechaj ich             |
| Masky, ktoré sa menia snímka od snímky                                  | Vynechaj ich             |

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

**Čo musí zostavenie vedieť o každom textovom rámčeku:** kde je, aký je veľký, ako je zarovnaný, akú má farbu a aké písmo. Nie: v akej veľkosti bodov.

**Môžeš to využiť.** Veľký rámček s krátkym textom sa sám stane silnou typografickou kompozíciou a rámček, ktorý zámerne urobíš úzky a vysoký, vtlačí text do stĺpca. Využi prispôsobovanie veľkosti ako návrhový prostriedok; len nenavrhuj proti nemu.

### Časomiera - povinná, a je to animácia

**Každá obrazovka otázky má časomieru**; sála musí vidieť, koľko času zostáva.

**Časomiera nie je odpočítavajúce číslo, ale animácia, ktorej prehrávaciu hlavu posúva engine.** Navrhuješ postup od „plno“ k „prázdno“ - vyprázdňujúci sa pruh, uzatvárajúci sa kruh, presýpacie hodiny, skracujúca sa linka. Engine prehrá tú animáciu presne takou rýchlosťou, aby posledná snímka padla na koniec otázky.

Z toho vyplýva:

- **Dĺžka otázky nie je pevná.** Nastavuje sa pre každý kvíz - často dvadsať až tridsať sekúnd, ale môže byť kratšia aj dlhšia. Tvoja animácia sa natiahne alebo stlačí, aby sedela.
- **Žiadne čísla ani tikanie po sekundách.** Časomiera, ktorá odpočítava „20, 19, 18…“, prestane platiť, len čo sa dĺžka zmení.
- **Posledné sekundy sú najnapínavejší moment hry.** Pomáha, keď je postup ku koncu zreteľnejší alebo naliehavejší.
- **Čitateľné zo zadnej časti sály**, na prvý pohľad.
- **Viac časomier je povolených.** Pruh hore aj kruh pri otázke sú oba riadené, pokiaľ sa každý volá `timer`.

Dodaj časomieru ako sériu kľúčových snímok alebo ako opis postupu - „pruh sa vyprázdňuje sprava doľava a mení farbu zo zelenej na červenú“ stačí.

### Lietajúce emoji pristávajú cez všetko

Každý hráč si pri pripojení vyberie emoji a hra tie emoji rozhadzuje po obrazovke. Kreslí ich engine vo vrstve nad témou. **Tu pre teba nie je čo navrhovať** - ale je okolo čoho navrhovať, lebo to nie je vzácna ozdoba.

Objavujú sa v troch momentoch:

- **Keď hráč odpovie.** Emoji toho hráča stúpa od spodného okraja na náhodnej vodorovnej pozícii, opíše oblúk a spadne späť mimo obrazu.
- **Keď ho hráč vymrští.** Hráči môžu svoje emoji vymrštiť z telefónu; uhol a rýchlosť vychádzajú zo švihu prstom a emoji štartuje zospodu zo stredu, roztočené.
- **Keď sa v záverečnom odpočítavaní odhalí miesto.** Salva emoji menovaného hráča: dvadsať za bežné miesto, päťdesiat za tretie, sedemdesiatpäť za druhé a **stopäťdesiat za víťaza.**

Čo to znamená pre návrh:

- **Nechaj spodnú tretinu obrazoviek s rebríčkom a víťazom voľnú od čohokoľvek malého alebo zásadného.** Počas odpočítavania je tam dole naozaj plno.
- **Počítaj s tým, že sa budú biť s tvojou paletou.** Sú to plnofarebné emoji zo všetkých kútov tabuľky Unicode a žiadna téma ich neovláda. Návrh, ktorý drží pokope len v úzkom farebnom rozsahu, bude po tie sekundy pôsobiť náhodne.
- **Vymršťovanie je potlačené, kým sa zobrazuje obrázok alebo video**, takže obrazovky s prílohou zostávajú čisté.
- **Celú vrstvu je možné pre konkrétnu hru vypnúť**, takže nestavaj ani kompozíciu, ktorá by závisela od toho, že tam budú.

### Písma

- **Písma musia byť vložiteľné.** Je potrebný súbor `.ttf` alebo `.otf` a k tomu licencia, ktorá povoľuje vloženie do aplikácie. Písmo licencované len ako webfont alebo len pre tlač použiť nemožno. Over si to skôr, než s ním začneš navrhovať; dodatočná oprava je drahá.
- Písma s nezvyčajne veľkými hornými alebo dolnými dotiahnutiami sa dajú vykompenzovať, ale daj vedieť, ak nejaké použiješ.

### Farba ako zoznam

Téma číta zoznam farieb z konfiguračného súboru a telefóny hráčov sa štýlujú z toho istého zoznamu. Dodaj svoju paletu ako **pomenovaný zoznam**, nie len ako farby v grafike:

| Kde                         | Farby                                                                                                                                                                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Herná obrazovka**         | Hlavná farba, akcentová farba, pozadie, farba panela alebo kontajnera, pozadie časomiery, predvolená farba textu, farba textu hlavičky, farba textu otázky, text tlačidiel, text dialógov a vysvetlení, text mena hráča a skóre, farba pre správne, farba pre nesprávne |
| **Štyri možnosti odpovede** | Pre každú možnosť: farba pozadia, farba okraja a jedna plná farba pre telefóny a grafy                                                                                                                                                                  |
| **Telefóny hráčov**         | Pozadie, farba textu, farba obrysu, farba obrysu možností a farba pozadia a textu kontajnera odpovede                                                                                                                                                                   |

Na hernej obrazovke sú povolené prechody: uveď ich ako dve hexadecimálne hodnoty.

Niekoľko farieb je _jediným_ spôsobom, ako ovplyvniť časti, ktoré engine kreslí sám, preto sa oplatí ich určiť, a nie nechať predvolené:

- **oddeľovač** - linky medzi riadkami tam, kde nie je panel, a na bodovom rebríku
- stavy riadku vo výbere otázok: **aktívny**, **neaktívny** a **vybraný**
- text **dialógov**
- **popredie a pozadie QR kódu**

Keď ich vynecháš, spadnú na vstavané predvolené hodnoty - bielu, sivú, červenú, čiernu a bielu - ktoré k návrhu málokedy sedia.

### Logo QuizWitz

Vlastné návrhy obsahujú logo QuizWitz. Vyhraď preň miesto tam, kde neprekáža návrhu.

---

## Čo odovzdať

### Zdrojový súbor - najlepšie Illustrator

Téma sa stavia v Adobe Animate a to, čo Animate dokáže importovať, rozhoduje o tom, koľko z tvojej práce prežije odovzdanie bez zmeny:

| Nástroj                                          | Čo sa stane pri importe                                                                                                                                                                                                                                                                   | Použi ho na                              |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate ho importuje priamo a tvoje vrstvy prevedie na vrstvy Animate alebo samostatné symboly, pričom zachová názvy vrstiev a vektory nechá upraviteľné. Presne tento krok zachráni grafiku pred tým, aby sa musela stavať ručne znovu.                  | **Uprednostňovaný** pre finálne podklady |
| **Adobe Photoshop**                              | Importuje sa s neporušenými vrstvami, podobne ako Illustrator, ale namiesto vektorov dáva raster.                                                                                                                                                                         | Možné                                    |
| **Figma**                                        | Všetko ide cez export do SVG a PNG, a práve tam sa stratí štruktúra vrstiev, ktorá je tu potrebná. Ak Figmu aj tak použiješ, dodaj **každý prvok zvlášť ako SVG**, s názvami súborov zodpovedajúcimi názvom vrstiev, aby sa štruktúra dala ručne obnoviť. | Fáza konceptu, ak si v nej rýchlejší     |

Štruktúra súboru:

- Jedna pracovná plocha na obrazovku, pomenovaná podľa rámcov vyššie.
- Opakovane použiteľné časti (tlačidlo, riadok hráča, možnosť odpovede, časomiera) ako **symboly** alebo komponenty, nie ako voľné kópie.
- Názvy vrstiev po anglicky, bez medzier: `question`, `option1` až `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farby ako pomenované vzorkovníky a text ako pomenované štýly, namiesto nastavenia na každom objekte zvlášť.

### Zoznam podkladov na dodanie

1. **Zdrojový súbor**, štruktúrovaný ako je opísané vyššie.
2. **Každý rámec ako PNG**, 1920 × 1080 - referencia toho, ako to má vyzerať. Pri rámci 2 verziu s logom klienta aj verziu bez neho.
3. **Hárok prvkov** ako jedna pracovná plocha: [stavebné kamene obsahu a ovládacie prvky](#the-element-sheet).
4. **Každý samostatný grafický prvok ako priehľadné PNG v 2×**, v jednom priečinku, s názvom súboru zodpovedajúcim názvu vrstvy.
5. **Časomiera** ako kľúčové snímky alebo písomný opis postupu.
6. **Písma** ako `.ttf` alebo `.otf`, s dokladom o licencii.
7. **Zoznam farieb** zo sekcie [Farba ako zoznam](#colour-as-a-list), ako hexadecimálne hodnoty.
8. **Pol strany poznámok**: aká je myšlienka, ako sa majú možnosti objavovať, čo sa hýbe a čo zostáva stáť. Nie desaťstranové zdôvodnenie návrhu - ten, kto tému stavia, potrebuje vedieť, čo má postaviť. Nápady na pohyb môžu byť opísané alebo dodané ako hrubý animatic.

### Poradie práce

1. **Rámec 4, obrazovka otázky, spolu s hárkom prvkov.** Nechaj si oboje schváliť pred zvyškom. Spolu obsahujú časomieru, možnosti, panel a všetky ovládacie prvky, takže určujú štýl celej témy.
2. **Rámce 1 až 3.** Prirodzene vyplývajú z prvých dvoch.
3. **Rámce 6 až 8** prichádzajú na rad nakoniec.

---

## Príloha - názvy symbolov

Pre úplnosť a pre toho, kto chce presne vedieť, kde jeho grafika skončí. **Na samotnú prácu to čítať nepotrebuješ**; osem rámcov a hárok prvkov vyššie stačia. Používať tieto názvy ako názvy vrstiev ušetrí jeden prekladový krok.

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

Každý prvok s `.text` za názvom je textový rámček s prispôsobovaním veľkosti, ako je opísané v časti [Ako sa správa text](#how-text-behaves): obdĺžnik, ktorý engine vypĺňa sám. Prvok `timer` je filmový klip s vlastnou časovou osou; engine si prečíta počet jeho snímok a posúva prehrávaciu hlavu úmerne uplynulému času, najviac 24-krát za sekundu.

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

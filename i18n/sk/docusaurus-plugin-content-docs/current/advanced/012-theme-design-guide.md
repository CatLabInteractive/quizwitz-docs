---
id: theme-design-guide
title: Sprievodca návrhom témy
---

# Sprievodca návrhom témy

[Témy](/docs/advanced/theming) vysvetľujú, ako sa téma QuizWitz stavia: v Adobe Animate, exportovaná ako knižnica CreateJS. Táto stránka sa venuje kroku, ktorý tomu predchádza - **návrhu** témy.

Je písaná pre grafika a predpokladá, že návrh a produkciu v Animate robia rôzni ľudia. Grafikov, ktorí ešte pracujú v Adobe Animate, je málo, takže je bežné, že grafik dodá grafiku a niekto iný tému poskladá. Funguje to dobre, ale len vtedy, keď je grafika odovzdaná v podobe, s ktorou sa dá pri stavbe naozaj pracovať. Táto stránka túto podobu opisuje a zároveň slúži ako zoznam podkladov na dodanie, keď si od grafika vyžiadaš cenovú ponuku.

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

## Sedem rámcov a hárok prvkov

Hra má desiatky odlišných stavov obrazovky, ale väčšina sú varianty toho istého rozloženia. **Navrhuješ sedem rámcov a jeden hárok prvkov; zvyšok sa z nich odvodzuje.** Nie je to skratka - takto funguje engine. Obrazovka bez vlastnej grafiky sa vracia k všeobecnému rámcu.

Hárok je rovnako dôležitý ako rámce: obrazovka, ktorá sa vracia k všeobecnému rámcu, stále potrebuje nábytok vo svojej obsahovej ploche - panel, riadok, linku - a ten nábytok je návrhové rozhodnutie, nie niečo, čo by sa dalo odvodiť z pozadia.

| #     | Rámec                    | Čo je na ňom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Čo sa z neho odvodzuje                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Všeobecný rámec**      | Pozadie, titulok v hlavičke a prázdna obsahová plocha pod ním. Nie je to hotová kompozícia - je to rámec, v ktorom sa stavia zvyšok.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Trinásť stavov obrazovky: vysvetlenie kola, rebríček, predstavenie hráčov, varianty s výberom z možností, dlhé otázky, upozornenia na Seats, nastavenia. Každý z nich vypĺňa tú obsahovú plochu po svojom prvkami z hárku, takže musí uniesť veci, ktoré si vôbec nie sú podobné. Výber otázok a dlhá otázka môžu dostať vlastnú kompozíciu, ak to tak chceš; inak používajú tento rámec. |
| **2** | **Pripojenie a čakanie** | Dve obrazovky, nie jedna. **Obrazovka pripojenia** je to, čo sála vidí, aby sa mohla pripojiť: päť riadkov pokynov, herný kód, QR kód, riadok s počtom pripojených hráčov a zoznam hráčov, ktorí postupne pribúdajú. Navrhni ju **dvakrát**: s logom klienta a bez neho. Herný kód a QR kód generuje engine; vyhraď pre QR kód štvorec. **Čakacia obrazovka** zostáva zobrazená, kým quizmaster nahlas číta otázku, a je takmer prázdna: vlastné logo kvízu, alebo grafika témy, a nič ďalšie. Je na obrazovke dlhšie než takmer čokoľvek iné v hre. | -                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **3** | **Obrazovka otázky**     | Otázka, časomiera, štyri možnosti odpovede, riadok spätnej väzby. Obrazovka, na ktorú sa sála pozerá najdlhšie.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **4** | **Otázka s prílohou**    | To isté, usporiadané okolo obrázka alebo videa. Môže to byť iná kompozícia než pri rámci 3. Príloha sa zmenší tak, aby sa zmestila do rámčeka, ktorý nakreslíš, takže v ňom musí prijateľne vyzerať obrázok na šírku aj na výšku.                                                                                                                                                                                                                                                                                                                                                                                                                    | Aj variant s prílohou na celú obrazovku a prílohy zobrazené medzi otázkami.                                                                                                                                                                                                                                                                                                                                                               |
| **5** | **Obrazovka odpovede**   | Ktorá odpoveď bola správna, ako sa odpovede sály rozložili medzi možnosti a riadok spätnej väzby.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Aj obrazovka odpovede pre otvorené otázky a pre otázky s prílohou.                                                                                                                                                                                                                                                                                                                                                                        |
| **6** | **Rebríček a víťaz**     | Zoznam hráčov s pozíciou, avatarom, menom a skóre. Dodaj **riadok hráča** ako samostatný, opakovane použiteľný prvok - v predvolenom nastavení sa opakuje šesťkrát, až do desiatich.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Priebežný rebríček medzi kolami aj konečného víťaza.                                                                                                                                                                                                                                                                                                                                                                                      |
| **7** | **Intro kola**           | Krátke ohlásenie pre každú kategóriu kola. Kategórií je šesť: veda a technika, príroda, zábava a hudba, šport, umenie, história. Jeden návrh môže poslúžiť viacerým kategóriám.                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Všetkých šesť kategórií.                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Hárok prvkov

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

### Čo je rozhodnuté za teba

- **Telefóny hráčov.** Pevné rozloženie v HTML, štýlované z tvojho zoznamu farieb.
- **Hŕstka vecí, ktoré engine kreslí sám.** Časť nábytku sa kreslí v kóde namiesto toho, aby sa brala z témy - linky medzi riadkami na bodovom rebríku, zvýraznený riadok vo výbere otázok, QR kód. Tie berú farbu zo zoznamu v časti **Farba ako zoznam** a odnikiaľ inde, takže ten zoznam je jediné, čím ich vieš ovplyvniť.
- **Ktoré obrazovky sa vracajú k všeobecnému rámcu a ako.**
- **Ako sa šesť kategórií mapuje na grafiku intra kola.** To priradenie je nastavenie v konfigurácii, takže jedno intro sa dá znovu použiť pre viac kategórií.
- **Všetko časovanie a všetky dĺžky animácií.**
- **Zvuk.** Téma môže mať vlastnú hudbu a zvukové efekty, ale to je samostatný podklad na dodanie a nie je súčasťou zadania návrhu.

### Postava je voliteľná

Predvolená téma QuizWitz má postavu, ktorá hovorí a reaguje. Nič ju nevyžaduje: validátor tém len upozorní na prvok `ted`; bez nej nezlyhá. [Téma Emerald](/docs/advanced/emerald-theme) sa dodáva bez postavy a jej vypustenie odstráni najdrahšiu animačnú prácu - synchronizáciu pier, oči, ruky.

Bez postavy sa z intra kola stáva grafický, typografický alebo ilustratívny moment. Dva prístupy udržia prácu v rozumnom rozsahu: jedna kompozícia s farebným alebo ikonovým variantom pre každú kategóriu, alebo jediné univerzálne ohlásenie, v ktorom sa mení len názov kola. Šesť naozaj odlišných inter je veľa práce na pár sekúnd na obrazovke.

---

## Ako tieto rámce vyzerajú v praxi

Obrazovky nižšie pochádzajú z existujúcej témy. Sú tu preto, aby ukázali, **ktoré prvky sa na akej obrazovke objavujú a kedy**. Nie sú referenciou pre štýl _ani_ pre rozloženie: kam táto téma umiestňuje svoju otázku, svoje možnosti a svoju časomieru, je jej vlastné rozhodnutie, a to tvoje sa môže úplne líšiť. Čítaj ich kvôli tomu, čo tam musí byť, nie kvôli tomu, kde to je. Všetky, a ešte viac, si môžeš prehrať v [testeri tém](https://client.quizwitz.com/test.html).

### Rámec 1 - všeobecný rámec

Dva herné momenty na tom istom rámci: výber otázok a bodový rebrík.

Pozri sa, ako málo majú spoločné. Výber dáva svoje tri riadky do panela s obrysom; rebrík nemá panel vôbec, len riadky oddelené tenkými linkami. Čo tie dva zdieľajú, je pozadie a pruh hlavičky nad nimi - všetko pod tým patrí konkrétnej obrazovke a vypĺňa to hra, nie ty.

![Všeobecný rámec s výberom otázok o troch riadkoch](/images/theme-design/frame1-general-multiquestion.png)

![Všeobecný rámec s bodovým rebríkom o piatich úrovniach](/images/theme-design/frame1-general-strikeladder.png)

Ten panel a tie linky sú návrhové rozhodnutia a sú na tebe - pochádzajú z **hárku prvkov**, nie z tohto rámca. Čo musí tento rámec zvládnuť, je uniesť ich: navrhni obsahovú plochu ako prázdnu, neutrálnu a priestrannú zónu, ktorá funguje rovnako dobre s orámovaným panelom, s holým zoznamom aj s tabuľkou riadkov. Pozadie, ktoré je uprostred rušné, alebo hlavička, ktorá funguje len s panelom zastrčeným tesne pod ňou, je miesto, kde sa to láme.

### Rámec 2 - pripojenie a čakanie

S logom klienta vedľa herného kódu a bez neho, keď obrazovku nesie vlastná grafika témy:

![Obrazovka pripojenia s logom klienta](/images/theme-design/frame2-connect.png)

![Obrazovka pripojenia bez loga klienta](/images/theme-design/frame2-connect-nologo.png)

Čakacia obrazovka je samostatná kompozícia, nie variant obrazovky pripojenia - tie dve zdieľajú len pozadie. Zostáva zobrazená, kým quizmaster nahlas číta otázku, a je takmer prázdna: vlastné logo kvízu, alebo grafika témy, a nič ďalšie. Je na obrazovke dlhšie než takmer čokoľvek iné v hre, takže si zaslúži viac pozornosti, než sa prázdnej obrazovke zvyčajne dostane.

![Čakacia obrazovka](/images/theme-design/frame2-pending.png)

### Rámec 3 - obrazovka otázky

Štyri možnosti, otázka nad nimi, časomiera uprostred. Všimni si, že možnosť môže byť tvorená len emoji.

![Obrazovka otázky so štyrmi textovými možnosťami](/images/theme-design/frame3-question-options.png)

![Obrazovka otázky s vlajkami ako možnosťami odpovede](/images/theme-design/frame3-question-emoji.png)

Otázka bez možností - hráči píšu odpoveď na telefóne. Obrazovka je takmer prázdna a hlavným prvkom sa stáva časomiera:

![Otvorená otázka len s otázkou a veľkou časomierou](/images/theme-design/frame3-question-open.png)

Okamih, keď vyprší čas. Cez obrazovku sa objaví bublina spätnej väzby a časomiera je prázdna:

![Obrazovka otázky v stave vypršania času](/images/theme-design/frame3-question-timeout.png)

### Rámec 4 - príloha

Tie isté časti, preusporiadané okolo plochy pre prílohu, s možnosťami vľavo a vpravo:

![Obrazovka otázky s obrázkom uprostred](/images/theme-design/frame4-question-attachment.png)

Príloha sama osebe, cez celú obrazovku:

![Príloha na celú obrazovku](/images/theme-design/frame4-attachment-fullscreen.png)

### Rámec 5 - obrazovka odpovede

Táto obrazovka prechádza tromi momentmi. Najprv rozloženie, zatiaľ bez čohokoľvek označeného:

![Obrazovka odpovede s rozložením](/images/theme-design/frame5-answer-mc-spread.png)

Potom sa správna možnosť začiarkne a nesprávne sa prečiarknu:

![Obrazovka odpovede s odhalenou správnou možnosťou](/images/theme-design/frame5-answer-mc-reveal.png)

A ak má otázka vysvetlenie, spadne cez grafiku bublina. Nechaj na ňu miesto - pristane cez všetko, čo si navrhol:

![Obrazovka odpovede s bublinou vysvetlenia](/images/theme-design/frame5-answer-mc-explanation.png)

Pri malej skupine je ten istý moment zoznamom skóre namiesto grafu:

![Obrazovka odpovede pre malú skupinu](/images/theme-design/frame5-answer-mc-small.png)

Pri otvorenej otázke graf ukazuje, koľko hráčov ju malo správne:

![Obrazovka odpovede pre otvorenú otázku](/images/theme-design/frame5-answer-open.png)

### Rámec 6 - rebríček a víťaz

Rebríček po kole. Riadok hráča je prvok, ktorý sa opakuje: pozícia, avatar, meno, skóre.

![Rebríček so šiestimi riadkami hráčov](/images/theme-design/frame6-roundoutro.png)

Záverečné odpočítavanie menuje jedného hráča po druhom, od posledného miesta k prvému - miesto, skóre a názov tímu vo svetle reflektorov. Tu sú aj lietajúce emoji najhustejšie; pozri poznámku nižšie:

![Odpočítavanie víťaza menujúce jedného hráča](/images/theme-design/frame6-winner-countdown.png)

![Konečný rebríček](/images/theme-design/frame6-winner.png)

### Rámec 7 - intro kola

Jeden návrh, prípadne s variantom pre každú kategóriu:

![Intro kola pre kategóriu príroda](/images/theme-design/frame7-roundintro-nature.png)

![Intro kola pre kategóriu veda](/images/theme-design/frame7-roundintro-science.png)

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

V praxi: štyri možnosti odpovede sú štyri samostatné vrstvy, nie jedna. Časomiera je oddelená od pozadia. Tlačidlo a jeho popis sú dva prvky. Riadok hráča je jedna skupina, ktorú možno duplikovať.

Čo zlúčené byť smie: čisto dekoratívna grafika pozadia, ktorá funguje ako jediný statický obrázok.

Toto je to jediné pravidlo, ktoré naozaj bolí, keď sa nedodrží - grafiku je potom nutné rozobrať alebo prekresliť, a presne tomu nákladu má toto usporiadanie predísť.

### Efekty, ktoré to neprežijú

Engine kreslí na plátno HTML5. Tieto je nutné **zapiecť do obrázka** alebo ich vynechať:

- Živé rozostrenie, vrhnuté tiene a žiara ako filtre → dodaj ich ako grafiku
- Režimy prelínania (násobiť, závoj, prekrytie) → preveď ich na plnú farbu
- Efekty vrstiev a vrstvy úprav
- Prechody **vnútri** textu alebo text s obrysom pri jednotlivých znakoch
- Masky, ktoré sa menia snímka od snímky

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
- **Rámček je maximum, nie sľub.** Ty navrhuješ jeho proporcie; výplň sa mení.
- **Dvanásť jazykov.** Nemecké zloženiny sú dlhé a maďarčina nie je o nič láskavejšia. Rámček, ktorý je v angličtine tesný, spadne v nemčine na nečitateľne malú veľkosť.
- **Vnútri textu sa môžu objaviť emoji.** Hráči si jedno vyberajú vedľa názvu tímu a otázka alebo možnosť môže nejaké obsahovať - niekedy je možnosť len emoji a nič viac. Kreslia sa farebne a sú vyššie než písmená okolo nich.

Čo potrebuje stavba vedieť o každom textovom rámčeku: kde je, aký je veľký, ako je zarovnaný, akú má farbu a aké písmo. Nie: v akej veľkosti bodov.

Vyplývajú z toho dve veci, ktoré môžeš využiť: veľký rámček s krátkym textom sa sám osebe stane silnou typografickou kompozíciou a rámček, ktorý zámerne urobíš úzky a vysoký, vtesná text do stĺpca. To prispôsobovanie môžeš použiť ako návrhový prostriedok - len by si nemal navrhovať proti nemu.

### Časomiera - povinná, a je to animácia

**Každá obrazovka otázky má časomieru.** Nie je voliteľná; sála musí vidieť, koľko času zostáva. Oba rámce s otázkou ju nesú.

**Časomiera nie je odpočítavajúce číslo, ale animácia, ktorej prehrávaciu hlavu posúva engine.** Navrhuješ postup od „plno“ k „prázdno“ - vyprázdňujúci sa pruh, uzatvárajúci sa kruh, presýpacie hodiny, skracujúca sa linka. Engine prehrá tú animáciu presne takou rýchlosťou, aby posledná snímka padla na koniec otázky.

Z toho vyplýva:

- **Dĺžka otázky nie je pevná.** Nastavuje sa pre každý kvíz - často dvadsať až tridsať sekúnd, ale môže byť kratšia aj dlhšia. Tvoja animácia sa natiahne alebo stlačí, aby sedela. Navrhni _postup_, nie animáciu na daný počet sekúnd.
- **Žiadne čísla ani tikanie po sekundách.** Časomiera, ktorá odpočítava „20, 19, 18…“, prestane platiť, len čo sa dĺžka zmení.
- **Posledné sekundy sú najnapínavejší moment hry.** Pomáha, keď je postup ku koncu zreteľnejší alebo naliehavejší.
- **Čitateľné zo zadnej časti sály**, na prvý pohľad.
- **Viac časomier je povolených.** Pruh hore aj kruh pri otázke sú oba riadené, pokiaľ sa každý volá `timer`.

Dodaj časomieru ako sériu kľúčových snímok alebo ako opis postupu - „pruh sa vyprázdňuje sprava doľava a mení farbu zo zelenej na červenú“ stačí.

### Lietajúce emoji pristávajú cez všetko

Každý hráč si pri pripojení vyberie emoji a hra tie emoji rozhadzuje po obrazovke. Kreslí ich engine vo vrstve nad témou, v tých farbách, ktoré emoji hráča práve má. **Tu pre teba nie je čo navrhovať** - ale je okolo čoho navrhovať, lebo to nie je vzácna ozdoba. Objavujú sa v troch momentoch:

- **Keď hráč odpovie.** Emoji toho hráča stúpa od spodného okraja na náhodnej vodorovnej pozícii, opíše oblúk a spadne späť mimo obrazu.
- **Keď ho hráč vymrští.** Hráči môžu svoje emoji vymrštiť z telefónu; uhol a rýchlosť vychádzajú zo švihu prstom a emoji štartuje zospodu zo stredu, roztočené.
- **Keď sa v záverečnom odpočítavaní odhalí miesto.** Salva emoji menovaného hráča: dvadsať za bežné miesto, päťdesiat za tretie, sedemdesiatpäť za druhé a **stopäťdesiat za víťaza.**

Vždy vstupujú od spodného okraja, opisujú oblúk pod vplyvom gravitácie a padajú zase von. Čo to znamená pre návrh:

- **Nechaj spodnú tretinu obrazoviek s rebríčkom a víťazom voľnú od čohokoľvek malého alebo zásadného.** Počas odpočítavania je tam dole naozaj plno.
- **Počítaj s tým, že sa budú biť s tvojou paletou.** Sú to plnofarebné emoji zo všetkých kútov tabuľky Unicode a žiadna téma ich neovláda. Návrh, ktorý drží pokope len v úzkom farebnom rozsahu, bude po tie sekundy pôsobiť náhodne.
- **Vymršťovanie je potlačené, kým sa zobrazuje obrázok alebo video**, takže obrazovky s prílohou zostávajú čisté.
- Celú vrstvu je možné pre jednotlivú hru vypnúť, takže nestavaj ani kompozíciu, ktorá by závisela od toho, že tam sú.

### Písma

- **Písma musia byť vložiteľné.** Je potrebný súbor `.ttf` alebo `.otf` a k tomu licencia, ktorá povoľuje vloženie do aplikácie. Písmo licencované len ako webfont alebo len pre tlač použiť nemožno. Over si to skôr, než s ním začneš navrhovať; dodatočná oprava je drahá.
- Písma s nezvyčajne veľkými hornými alebo dolnými dotiahnutiami sa dajú vykompenzovať, ale daj vedieť, ak nejaké použiješ.

### Farba ako zoznam

Téma číta zoznam farieb z konfiguračného súboru a telefóny hráčov sa štýlujú z toho istého zoznamu. Dodaj svoju paletu ako **pomenovaný zoznam**, nie len ako farby v grafike:

- **Herná obrazovka:** hlavná farba, doplnková farba, pozadie, farba panela alebo kontajnera, pozadie časomiery, predvolená farba textu, farba textu v hlavičke, farba textu otázky, text tlačidiel, text dialógov a vysvetlení, text mena hráča a skóre, farba pre správne, farba pre nesprávne.
- **Štyri možnosti odpovede:** každá s farbou pozadia a farbou obrysu, plus jedna plná farba na možnosť pre telefóny a grafy.
- **Telefóny hráčov:** pozadie, farba textu, farba obrysu, farba obrysu možností a farba pozadia a textu kontajnera odpovede.

Na hernej obrazovke sú povolené prechody: uveď ich ako dve hexadecimálne hodnoty.

Pár farieb je _jediná_ páka na časti, ktoré engine kreslí sám, takže sa oplatí ich rozhodnúť, namiesto aby zostali predvolené: **oddeľovač** (linky medzi riadkami tam, kde nie je panel, a na bodovom rebríku), stavy **aktívny**, **neaktívny** a **vybraný** pri riadku vo výbere otázok, text **dialógov** a **predná a zadná strana QR kódu**. Keď ich vynecháš, spadnú na vstavané predvolené hodnoty - bielu, sivú, červenú, čiernu a bielu - ktoré k návrhu málokedy sedia.

### Logo QuizWitz

Vlastné návrhy obsahujú logo QuizWitz. Vyhraď preň miesto tam, kde neprekáža návrhu.

---

## Čo odovzdať

### Zdrojový súbor - najlepšie Illustrator

**Adobe Illustrator (`.ai`) je preferovaný a má to konkrétny dôvod.** Téma sa stavia v Adobe Animate, ktorý súbory z Illustratora importuje priamo a prevádza tvoje vrstvy na vrstvy Animate alebo na samostatné symboly, pričom zachováva názvy vrstiev a necháva vektory upraviteľné. Presne tento krok zachráni grafiku pred tým, aby sa musela stavať ručne znovu.

Figma alebo Photoshop sú možné, ale vedz, čo to stojí: pri Figme ide všetko cez export do SVG a PNG, a práve tam sa stráca štruktúra vrstiev, ktorá je tu potrebná. Ak Figmu aj tak použiješ, dodaj **každý prvok zvlášť ako SVG**, s názvami súborov zodpovedajúcimi názvom vrstiev, aby sa štruktúra dala ručne obnoviť. Photoshop sa do Animate importuje s vrstvami nedotknutými, rovnako ako Illustrator, ale dá ti raster namiesto vektora.

Ak si vo Figme rýchlejší, použi ju pre fázu konceptu a finálnu verziu dodaj v Illustratore.

Štruktúra súboru:

- Jedno kresliace plátno na obrazovku, každé presne 1920 × 1080, pomenované podľa rámcov vyššie.
- Opakovane použiteľné časti (tlačidlo, riadok hráča, možnosť odpovede, časomiera) ako **symboly** alebo komponenty, nie ako voľné kópie.
- Názvy vrstiev po anglicky, bez medzier: `question`, `option1` až `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Farby ako pomenované vzorkovníky a text ako pomenované štýly, namiesto nastavenia na každom objekte zvlášť.

### Zoznam podkladov na dodanie

1. **Zdrojový súbor**, štruktúrovaný ako je opísané vyššie.
2. **Každý rámec ako PNG**, 1920 × 1080 - referencia toho, ako to má vyzerať. Pri rámci 2 verziu s logom klienta aj verziu bez neho.
3. **Hárok prvkov** ako jedno kresliace plátno: stavebné kamene obsahu a ovládacie prvky vymenované vyššie.
4. **Každý samostatný grafický prvok ako priehľadné PNG v 2×**, v jednom priečinku, s názvom súboru zodpovedajúcim názvu vrstvy.
5. **Časomiera** ako kľúčové snímky alebo písomný opis postupu.
6. **Písma** ako `.ttf` alebo `.otf`, s dokladom o licencii.
7. **Zoznam farieb** opísaný vyššie, v hexadecimálnych hodnotách.
8. **Pol strany poznámok**: aká je myšlienka, ako sa majú možnosti objavovať, čo sa hýbe a čo zostáva stáť. Nie desaťstranové zdôvodnenie návrhu - ten, kto tému stavia, potrebuje vedieť, čo má postaviť. Nápady na pohyb môžu byť opísané alebo dodané ako hrubý animatic.

### Poradie práce

Začni rámcom 3, obrazovkou otázky, spolu s hárkom prvkov, a nechaj oba schváliť skôr než zvyšok. Dohromady nesú časomieru, možnosti, panel a všetky ovládacie prvky, takže určujú štýl celej témy, a obrazovka otázky je tá, na ktorú sa sála pozerá najdlhšie. Rámce 1 a 2 z nich prirodzene vyplynú; rámce 5 až 7 prídu nakoniec.

---

## Príloha - názvy symbolov

Pre úplnosť a pre toho, kto chce presne vedieť, kde jeho grafika skončí. **Aby si túto prácu urobil, toto čítať nemusíš**; sedem rámcov a hárok prvkov vyššie stačí. Používať tieto názvy ako názvy vrstiev ušetrí jeden prekladový krok.

| Rámec                                          | Názov symbolu                                                                                                                             | Povinné časti                                                                                                                                                                                  |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Všeobecný rámec      | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` voliteľne                                                                        | `placeholder` (obsahová plocha); textový rámček `title` voliteľne                                                                                                           |
| 1b. Výber otázok, dlhá otázka  | `MultiQuestionScreen`, `LongQuestionScreen`; oba voliteľne, vracajú sa k všeobecnému rámcu                                                | výber: zástupný prvok `questions`, `timer`; dlhá otázka: zástupný prvok `question`                                                                             |
| 2. Obrazovka pripojenia | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` voliteľne, so zástupným prvkom `logo`                                    | `instructions.line1` až `line5`, `connectedPlayers`; zástupný prvok `qrCode` s návestím snímky `showQrCode` voliteľne                                                                          |
| 2b. Čakacia obrazovka          | `PendingScreen`; `PendingScreenWithLogo` voliteľne                                                                                        | `header.text`                                                                                                                                                                                  |
| 3. Obrazovka otázky     | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` až `option4`, návestia snímok `showOptions` a `showFeedback`                                                                              |
| 4. Otázka s prílohou    | `QuestionScreenAttachment`                                                                                                                | ako vyššie, plus `attachment.placeholder`                                                                                                                                                      |
| 4b. Príloha na celú obrazovku  | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                  |
| 5. Obrazovka odpovede   | `AnswerPieScreen`; `AnswerPieScreenAttachment` voliteľne                                                                                  | `option1` až `option4`, `answer.text`, `feedback.text`                                                                                                                                         |
| 5b. Odpoveď na otvorenú otázku | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; varianty `…Attachment` voliteľne                                                           | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                          |
| 6. Rebríček             | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` a `PlayerScoreNoImage` voliteľne                                | `header.text`, `players`, `feedback.text` (`playAgain.text` voliteľne); v riadku: `position`, `name`, `score`, `avatar` voliteľne                           |
| 7. Intro kola           | jeden alebo viac symbolov s ľubovoľným názvom; konfiguračný súbor priraďuje každej zo šiestich kategórií jeden symbol                     | -                                                                                                                                                                                              |
| -                                              | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                             |
| -                                              | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | vlastnú grafiku nepotrebujú - stavajú sa z toho, čo sa objaví v tvojich rámcoch                                                                                                                |
| -                                              | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | zobrazujú sa len v desktopovej aplikácii, nie v živom kvíze. Nie sú súčasťou zadania: preberajú sa zo šablóny témy a preštýlujú sa tvojím pozadím a tlačidlami |

Symboly intra kola v predvolenej téme sa volajú `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` a `RoundIntroTedCultHist`; umenie a história zdieľajú ten posledný. „Ted“ v tých názvoch je pozostatok postavy z pôvodnej témy a neznamená, že sa v nich postava musí objaviť.

Každý prvok s `.text` na konci je prispôsobený textový rámček, ako je opísané vyššie: obdĺžnik, ktorý engine sám vyplní. Prvok `timer` je filmový klip s vlastnou časovou osou; engine si prečíta počet jeho snímok a posúva prehrávaciu hlavu úmerne uplynulému času, najviac 24-krát za sekundu.

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

---
id: theme-design-guide
title: Návod pro vzhled
---

# Návod pro vzhled

[Theming](/docs/advanced/theming) vysvětluje, jak je vytvořen QuizWitz: v Adobe Animate, exportováno jako CreateJS knihovna. Tato stránka pokrývá krok před tím — **navrhování** tématu.

Je napsán pro grafického designéra a předpokládá, že design a impozantní výroba jsou prováděny různými lidmi. Jen málo designérů stále pracuje v Adobe Animate, takže společné uspořádání je, že designér přináší umělecké dílo a někdo jiný montuje téma. To funguje dobře, ale pouze v případě, že je umělecká díla předávána ve tvaru, kterou může stavba skutečně využít. Tato stránka popisuje tento tvar.

:::tip
Pokud chcete změnit pouze barvy, písma a pozadí, nepotřebujete žádné z těchto — upravujte si místo toho [Emerald motiv](/docs/advanced/emerald-theme).
:::

---

## Co navrhujete

Hru QuizWitz hraje celý pokoj najednou a dvě obrazovky jsou vždy zapojeny:

- **Sdílená obrazovka** – projektor nebo televize, 1920 × 1080. Otázky, odpovědi, jak se šířily odpovědi místnosti, postavení. Toto navrhujete.
- **Telefon každého hráče**, kde napíší svou odpověď. Toto je webová stránka s pevným rozložením; je stylizována podle barev a písem, které jste nevykázali.

Motiv je kompletní vizuální vzhled sdílené obrazovky: pozadí, typografie, barva, způsob, jakým je prezentována otázka se čtyřmi možnostmi, jak vznikají postavení, jak je oznámeno kolo.

---

## Sedm snímků

Hra má zhruba dvacet pět různých zobrazovacích států, ale většina z nich jsou varianty stejného rozložení. **Navrhuješ sedm snímků; zbytek z nich je odvozený.** Tohle není zkratka — je to způsob, jak motor funguje. Obrazovka bez vlastního obrazu se vrátí k obecnému rámečku.

| #     | Frame                    | Co je na tom                                                                                                                                                                          | Co z toho vyplývá                                                                                                                                                                      |
| ----- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1** | **Obecný rám**           | Pozadí, nadpis záhlaví a prázdná oblast obsahu, která je pod ním. Vizuální šablona pro celé téma.                                                     | Třináct stavů obrazovky: kulaté vysvětlení, postavení, úvod hráče, varianty s možností více možností, dlouhé otázky, upozornění na sedadlo, nastavení. |
| **2** | **Připojit obrazovku**   | Co místnost vidí k připojení: pět řádků výuky, místnost pro přidání kódu nebo QR kódu a seznam hráčů triklování.                                      | Také čekací obrazovka se zobrazí, zatímco kvízmaster nahlas čte otázku.                                                                                                |
| **3** | **Obrazovka úlohy**      | Otázka, časopis, čtyři možnosti odpovědi, linie zpětné vazby. Obrazovka místnost se dívá nejdéle.                                                     | —                                                                                                                                                                                      |
| **4** | **Otázka s médiem**      | Stejné, uspořádané kolem obrázku nebo videa. Může být jiné složení než rám 3.                                                                         | Také varianta médií na celou obrazovku a média zobrazená mezi otázkami.                                                                                                |
| **5** | **Obrazovka k odpovědi** | Která odpověď byla správná, jak byly odpovědi místnosti rozloženy napříč možnostmi a linie zpětných vazeb.                                                            | Také obrazovka odpovědí pro otevřené otázky a otázky s médii.                                                                                                          |
| **6** | **Postavení a vítěze**   | Seznam hráčů s jménem, skóre a pozicí. Napiš **řadu hráčů** jako oddělený, opakovaně použitelný prvek – opakuje se šestkrát až desetkrát.             | Postavení mezi koly a konečným vítězem.                                                                                                                                |
| **7** | **Úvodní kolo**          | Krátké oznámení pro každou kategorii kola. Existuje šest kategorií: věda a technika, příroda, zábava a hudba, sport, umění, historie. | Všech šest kategorií.                                                                                                                                                  |

### Co se pro vás rozhodlo

- \*\*Jednotlivé ovládací prvky. \* Tlačítka ve čtyřech státech, správné a špatné symboly, posuvník, zaškrtávací políčka a výběr jsou odvozeny od toho, co se objeví ve vašich sedmi snímcích. Ujistěte se, že se někde objeví tlačítko, takže je zde styl pro jejich převzetí.
- **Telefony hráčů** Opravené HTML rozložení, stylizované z tvého seznamu barev a písma.
- **Které obrazovky se vrátí k obecnému rámu a jak.**
- **Jak se šest kategorií mapová na úvodním umění kola.**
- **Všechny časování a trvání animace.**

### Znak je volitelný

Téma QuizWitz má postavu, která hovoří a reaguje. Nic nevyžaduje: validátor motivu pouze varuje před prvkem `ted`; bez něj se to nepodaří. [Emerald theme](/docs/advanced/emerald-theme) lodě bez postavy a její shození odstraní nejdražší animační dílo — synchronizace, oči, ruce.

Bez postavy se úvod stává grafickým, typografickým nebo ilustrativním momentem. Dvě přístupy udržují práci v úměru: jedno složení s variantou barvy nebo ikony pro každou kategorii, nebo jediné univerzální oznámení s jedinou změnou názvu kola. Šest skutečně odlišných útesů je spousta práce po několik sekund obrazovky času.

---

## Jak tyto rámy vypadají v praxi

Obrazovky níže pocházejí z existujícího tématu. Jsou tady, aby ukázaly, co se děje na každé obrazovce\*\*; nejsou to styl reference.

### Rámeček 1 – obecný rám

Dvě velmi odlišné herní momenty na stejné šabloně: výběr otázek a žebřík bodů. Ukazuje, kolik práce pro vás dělá jeden rámec a proč musí být jeho obsah prostý a neutrální.

![Obecný rámec s třířádkovým výběrem otázek](/images/theme-design/frame1-general-multiquestion.png)

![Obecný rámec s pětiúrovňovým žebříkem](/images/theme-design/frame1-general-strikeladder.png)

### Rámeček 2 – připojení a čekání

S klientským logem vedle spojovacího kódu a bez něho, kde má na sobě vlastní obrázek:

![Připojte obrazovku s logem klienta](/images/theme-design/frame2-connect.png)

![Připojit obrazovku bez loga klienta](/images/theme-design/frame2-connect-nologo.png)

Obrazovka čekání, která následuje, když kvíz načte nahlas:

![Čekací obrazovka](/images/theme-design/frame2-pending.png)

### Rámeček 3 – obrazovka s otázkami

Čtyři možnosti, otázka výše, časovač uprostřed. Všimněte si, že možnost nemůže obsahovat nic jiného než emoji.

![Obrazovka úloh se čtyřmi textovými možnostmi](/images/theme-design/frame3-question-options.png)

![Obrazovka úloh se vlajkami jako možnosti odpovědí](/images/theme-design/frame3-question-emoji.png)

Otázka bez možnosti - hráči napište odpověď na svůj telefon. Obrazovka je téměř prázdná a časovač se stává hlavním prvkem:

![Otevřená otázka pouze s otázkou a velkým časovačem](/images/theme-design/frame3-question-open.png)

Čas vyprší. Zpětný balón se objeví přes obrazovku a časovač je prázdný:

![Obrazovka úloh zobrazující časový stav](/images/theme-design/frame3-question-timeout.png)

### Rámeček 4 – média

Tytéž části, které se přeskupily kolem mediální oblasti, s možnostmi vlevo a vpravo:

![Obrazovka otázky s obrázkem uprostřed](/images/theme-design/frame4-question-attachment.png)

Média sama o sobě, vyplňování obrazovky:

![Full-screen media](/images/theme-design/frame4-attachment-fullscreen.png)

### Rámeček 5 – obrazovka pro odpověď

Tato obrazovka prochází třemi okamžiky. Nejprve spread, zatím nic není označeno:

![Obrazovka odpovědi zobrazující spread](/images/theme-design/frame5-answer-mc-spread.png)

Pak je zaškrtnuta správná možnost a chybná možnost je křížována:

![Obrazovka odpovědi se správnou volbou](/images/theme-design/frame5-answer-mc-reveal.png)

A pokud tato otázka přináší vysvětlení, pak se nad uměleckým dílem shazuje balón. Ponechte pro to místnost — přistane nad vším, co jste navrhl:

![Obrazovka odpovědi s vysvětlením balónu](/images/theme-design/frame5-answer-mc-explanation.png)

Se malou skupinou je tentýž okamžik spíše seznam skóre než graf:

![Obrazovka odpovědi pro malou skupinu](/images/theme-design/frame5-answer-mc-small.png)

Pro otevřenou otázku graf ukazuje, kolik hráčů to má pravdu:

![Obrazovka odpovědi na otevřenou otázku](/images/theme-design/frame5-answer-open.png)

### Rámec 6 – Postavení a vítěz

Pozastavení po kolu. Řádek hráčů je prvek, který se opakuje: pozice, avatar, jméno, skóre.

![Postavení se šesti řadami hráčů](/images/theme-design/frame6-roundoutro.png)

Konečné odpočítávání jména jednoho hráče najednou, od posledního místa do prvního dne – místo, skóre a jméno týmu v řadě:

![Vítěz odpočítávání pojmenování jednoho hráče](/images/theme-design/frame6-winner-countdown.png)

![Konečná nastavení](/images/theme-design/frame6-winner.png)

### Rámeček 7 – úvod do kola

Jedna konstrukce, volitelně s variantou pro každou kategorii:

![Úvod ke kolu pro kategorii přírody](/images/theme-design/frame7-roundintro-nature.png)

![Úvod ke kategorii vědy](/images/theme-design/frame7-roundintro-science.png)

---

## Pravidla pro návrh

Nic z toho neomezuje váš vizuální design. Jsou o tom, jak je soubor sestaven.

### Formát

- **1920 × 1080 pixelů**, přesně Jeden rám na obrazovku.
- Pracujte **ve vektoru** tam, kde je to možné. Pokud používáte rastr (fotografie, texty): alespoň 2 × velikost zobrazení.
- Hra běží v **24 snímcích za sekundu**. Relevantní, pokud dodáváte myšlenky pohybu.
- Udržujte **5% marži** na okraji bez základních informací. Projektory plodiny.

### Struktura vrstvy – pravidlo, na kterém záleží

**Cokoliv, co se může pohybovat, zobrazit nebo změnit hodnotu, sedí na vlastní pojmenované vrstvě.** Nic není sloučeno, nic zarovnáno.

V praxi: čtyři možnosti odpovědi jsou čtyři samostatné vrstvy, ne jedné. Časovač je oddělen od pozadí. Tlačítko a jeho štítek jsou dva prvky. Řádek hráčů je jedna skupina, která může být duplikována.

Co může být sloučeno: čistě dekorativní obrazy na pozadí, které fungují jako jediný statický obraz.

Toto je pravidlo, které skutečně poškozuje, když není dodržováno - umělecká díla musí být roztažena nebo vykreslena, což jsou přesně náklady, kterým se má toto uspořádání vyhnout.

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

Tři řádky, tři totožná pole – a tři zcela odlišné velikosti písma, pouze proto, že text je kratší nebo delší. "Kde je láska" dostává celou výšku; otázka nad ní musí dělat s dvěma malými čárkami. Štítky na levé straně se chovají stejně.

Z toho plyne, že:

- \*\*Stejná otázka vypadá v jiné hře. \* Šestistránková otázka se jeví jako velká a vrstevnatá; třicet pět slov se jeví jako malá přes pět řádků v přesně stejném rámečku. Oba musí vypadat správně.
- \*\*Navrhněte každé pole dvakrát. \* Vyplňte jednou velmi krátkým vzorkem a jednou velmi dlouhou a zkontrolujte, zda je složení v obou. Jako pravidlo náhledu: možnost odpovědi běží z jednoho na osm slov, otázka od pěti do čtyřiceti, jméno hráče od dvou do dvaceti znaků.
- **Nepočítat s pevným počtem řádků.** Titulek, který je "vždy na jednom řádku", zde neexistuje.
- \*\*Neopticky nezarovnejte text s ničím jiným. \* Text, který se musí spojit s pravidlem nebo tvarem se posune, jakmile bude kratší nebo delší. Použijte políčka, která mají dostatek místnosti a zarovnání (levé, středové, pravé) místo přesných poloh.
- **Krabice je maximum, ne slib.** Navrhuješ její poměr; výplň se liší.
- **Jedenáct jazyků.** Sloučeniny Německa jsou dlouhé a maďarština není žádná laskavost. Bedna, která je v angličtině napjatá na nekonečně malou velikost v němčině.
- \*\*Emoji se může zobrazit uvnitř textu. \* Hráči si zvolí vedle jména svého týmu, a otázka nebo možnost může obsahovat jednu — někdy je volba pouze emoji. Jsou vytištěny v barvě a jsou vyšší než kolem nich.

Co sestavení potřebuje vědět o každém textovém pole: kde je, Jak velká je, jak je zarovnaná, jakou barvu a který font. Ne: v jakém bodě velikost

Z toho plynou dvě věci: velké políčko s krátkým textem se stává silné typografické složení samo o sobě, a krabice, kterou záměrně uděláte úzký a vysoký, vynutí text do sloupce. Vybavení můžete použít jako konstrukční zařízení — prostě byste proti němu neměli navrhovat.

### Časovač – vyžadován a je to animace

**Každá obrazovka úloh má časovač.** Není volitelná; místnost musí vidět, kolik času zbývá. Oba otazníky jsou nosné.

\*\*Časovač není počítací číslo, ale animace, jejíž hráč se pohybuje v hlavičce. \* Navrhuješ postup z "plné" na "prázdný" — odčerpávání pruhů, zavírání kroužků, hodinové sklo, zmenšující se čára. Motor hraje tuto animaci přesně při otáčkách, díky nimž se poslední rám shoduje s koncem otázky.

Co je následující:

- **Doba trvání úlohy není pevná.** Je nastavena na jeden kvíz — často dvacet až třicet sekund, ale může být kratší nebo delší. Vaše animace je natažena nebo zkomprimována, aby se dala do obrazu. Navrhněte _průběhu_, ne animaci nastaveného počtu sekund.
- **Žádná čísla nebo tečka na sekundu.** Časovač počítající "20, 19, 18…" přestane být pravdivý, jakmile se změní doba trvání.
- **Posledních vteřin jsou nejnapnutější okamžik hry.** Pomáhá, když se postup stává jasnější nebo naléhavější směrem ke konci.
- **Čitelné ze zadní strany místnosti**, na pohled.
- **Povoleno je více časovačů.** Čára nahoře a kruh poblíž úlohy jsou řízeny, dokud je každá pojmenována `časovačem`.

Dodávka časovače jako řada klíčových rámců nebo jako popis postupu — "pruh odtéká zprava doleva a posun zzelené na červenou" je dostatečný.

### Písma

- **Písma musí být vložena.** Potřebný soubor `.ttf` nebo `.otf` plus licenci, která umožňuje vložení aplikace. Písmo licencované pouze jako webový font, nebo pouze pro tisk nelze použít. Zkontrolujte, než ho navrhnete. Poté se jedná o nákladnou korekci.
- Písma s neobvykle velkými povyšujícími nebo potomci mohou být kompenzováni za to, ale pokud používáte jednu z nich.

### Barva jako seznam

Motiv čte seznam barev z konfiguračního souboru. Dodejte svou paletu jako **pojmenovaný seznam**, nejen jako barvy v uměleci:

hlavní barvy, barva zvýraznění, pozadí, výchozí barva textu, barva záhlaví, barva textu úlohy, text tlačítka, čtyři barvy odpovědi (každá s pozadím a barvou okraje), barva pro správnost, barva pro chybné.

Sklony jsou povoleny: udávejte je jako dvě hex hodnoty.

### Logo QuizWitz

Vlastní návrhy obsahují logo QuizWitz. Rezervujte si pro ni místo, kde se nedostane do podoby designu.

---

## Co předat

### Zdrojový soubor – preferován illustrátor

\*\*Adobe Illustrátor (`.ai`) je preferován a existuje konkrétní důvod. \* Motiv je postaven v Adobe Animate, který importuje soubory Illustrátoru přímo a přeměňuje vaše vrstvy na animované vrstvy nebo samostatné symboly, udržují názvy vrstev a ponechávají vektory editovatelné. To je přesně ten krok, který zachrání umělecká díla před přestavbou rukou.

Figma nebo Photoshop je možná, ale vědět náklady: s Figma vše prochází přes SVG a PNG export, a to je přesně místo, kde je zde potřebná vrstva ztracena. Pokud používáte Figma, dodáváte **každý prvek samostatně jako SVG**, s názvy souborů odpovídajícími názvům vrstev, takže struktura může být přestavěna ručně. Fotoshop importuje do Animate s jeho vrstvami, jako je ilustrátor, ale dává vám rastr místo vektoru.

Pokud jste rychlejší ve Figma, použijte ji pro konceptovou fázi a dodejte konečnou verzi v Ilustrator.

Struktura souboru:

- Jedna tabule na obrazovku, každá přesně 1920 × 1080, pojmenovaná podle výše uvedených snímků.
- Opětovně použitelné díly (tlačítko, hráčský řádek, volba odpovědi, časovač) jako **symboly** nebo komponenty, ne jako volně přístupné kopie.
- Názvy vrstev v angličtině, bez mezer: `question`, `option1` to `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Barvy jako pojmenované hodinky a text jako pojmenované styly, místo aby byly nastaveny na každý objekt jednotlivě.

### Vývozy

- Každý rámec jako PNG, 1920 × 1080 – jako odkaz na to, jak by měl vypadat.
- Každý samostatný grafický prvek jako **průhledný PNG na 2×**, v jedné složce, název souboru odpovídající názvu vrstvy.
- Písma jako `.ttf` nebo `.otf`, s důkazem licence.

### Polovina stránky poznámek

Krátká napsaná poznámka: co je myšlenka, jak by se měly objevit, co se pohybuje a co zůstává. Není zdůvodnění designového designu – kdokoliv, kdo postaví téma, potřebuje vědět, co má být postaveno.

Myšlenky pohybu lze popsat nebo dodat jako hrubý animatik.

---

## Dodatek – Názvy symbolů

Pro úplnost a pro každého, kdo chce přesně vědět, kde jejich umělecká díla končí. **Nemusíš si přečíst tuto práci**; stačí sedm výše uvedených snímků. Použití těchto jmen jako názvy vrstev uloží krok překladu.

| Frame                                                                                                                                                                                                     | Název symbolu                                                                                                                                                                                 | Požadované díly                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 1. Obecný rám                                                                                                                                                                      | `GeneralPurposeScreen`, `GeneralPurposeScreenWithHeader`                                                                                                                                      | `hlavička`, obsah oblasti                                                                                     |
| 2. Připojit obrazovku                                                                                                                                                              | `PresentationConnectScreen`                                                                                                                                                                   | `instructions.line1` až `line5`                                                                               |
| „Technologie“ ve smyslu všeobecné poznámky k technologii pro „vývoj“, „výrobu“ nebo „užití“ zařízení nebo „softwaru“ uvedených v položkách 3A, 3B nebo 3D. Obrazovka s čekáním            | `Stránka čekající`                                                                                                                                                                            | `hlavička.text`                                                                                               |
| 3. Obrazovka úloh                                                                                                                                                                  | `Obrazovka úlohy`                                                                                                                                                                             | `question.text`, `timer`, `feedback.text`, `option1` to `option4`, frame label `showOptions` a `showFeedback` |
| 4. Otázka s médii                                                                                                                                                                  | `Doplněk úlohy`                                                                                                                                                                               | podle výše, plus `attachment.placeholder`                                                                     |
| „Technologie“ ve smyslu všeobecné poznámky k technologii pro „vývoj“, „výrobu“ nebo „užití“ zařízení nebo „softwaru“ uvedených v položkách 7A, 7B nebo 7C. Média na celou obrazovku       | `AttachmentScreen`                                                                                                                                                                            | `zástupce`                                                                                                    |
| 5. Obrazovka odpovědi                                                                                                                                                              | `Odpovědět PieScreen`                                                                                                                                                                         | `option1` to `option4`, `answer.text`, `feedback.text`                                                        |
| Položka 1C010.b. nezahrnuje materiály uvedené v položce 1C010.b. nebo 1C010.b. Otevřená odpověď na otázku | `Odpovědět na obrazovku`, `OdpovědětOpenQuestionPieScreen`                                                                                                                                    | `answer.text`, `feedback.text`, `players`, `piechart`                                                         |
| 6. Úkoly                                                                                                                                                                           | `WinnerScreen` + `PlayerScore`                                                                                                                                                                | `header.text`, `players`, `feedback.text` (`playAgain.text` volitelné)                     |
| 7. Úvod zaokrouhlený                                                                                                                                                               | `RoundIntroTedMusic`, `RoundIntroTedSport`, `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedCultHist`                                                                    | —                                                                                                             |
| —                                                                                                                                                                                                         | `Načítání obrazovky`                                                                                                                                                                          | `text`, `progres`                                                                                             |
| —                                                                                                                                                                                                         | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `SymbolCorrect`, `SymbolWrong`, `SettingsScreenScrollarea`, `AlertScreen`, `ActivityScreen`, `MenuScreen`, `SettingsScreen`, `PackListItem` | žádné vlastní umělecké dílo – postavené z tvých rámů a obecného rámu                                          |

Jména úvodního kola obsahují z historických důvodů "Ted". To je zbylá část původního tématu a neznamená, že se v nich musí objevit postava.

Každý prvek s `.text` po namontovaném textovém poli, jak je popsáno výše: obdélník, který motor vyplní. Prvek `timer` je filmový klip s vlastním časovým předstihem; motor odečte počet snímků a posune hlavu hráče v poměru k uplynulému času.

### Co z vašeho designu odebere konfigurační soubor

```json
{
  "fonts": { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "default": "#…", "header": "#…", "question": "#…",
    "tlačítka": "#…", "dialog": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "booleanResultColors": { "correct": "#…", "špatný": "#…" },
  "overlay": "light | temný"
}
```

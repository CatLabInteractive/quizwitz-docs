---
id: emerald-theme
title: Emerald téma
---

# Emerald téma

Az Emerald téma a legegyszerűbb módja annak, hogy testre szabd a QuizWitz játékod kinézetét. Alapértelmezés szerint a téma letisztult kék/zöld stílusú, élénk válaszopció-színekkel, de a kvíz mellékleteinek és a témamódosítóknak a kombinálásával drasztikusan megváltoztathatod a kinézetét.

:::tip
A [téma tesztelőnkkel](https://client.quizwitz.com/test.html?theme=emerald) megnézheted, hogyan fognak kinézni a beállításaid.
:::

![Képernyőkép az Emerald témáról](/images/emerald/emerald.png)

## Válaszd ki az Emerald témát

A **Kvízbeállításokban** válaszd ki a **Téma** opciót, és engedélyezd az **Emerald** témát.

[Itt](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default) kipróbálhatsz egy kvízt az Emerald témával.

![Képernyőkép a kvízbeállításokról](/images/emerald/quiz-settings.png)

## Mellékletek

### Kvíz mellékletei

A játék kinézetét és hangulatát messze a legegyszerűbben úgy változtathatod meg, ha képeket csatolsz a kvízedhez. Nyisd meg a **Kvízbeállításokat**, és görgess le a **Mellékletek** szakaszhoz. Itt olyan képeket tölthetsz fel, amelyeket háttérként, klienslogóként, csatlakozási és várakozási képernyőként (konferencia- és élő kvízekhez), valamint más célokra használhatsz.

![Képernyőkép a kvíz mellékleteiről](/images/emerald/quiz-attachments.png)

### Forduló mellékletei

Olyan képeket vagy videókat is feltölthetsz, amelyek a játék előtt és után lesznek lejátszva. Ez a fordulókra is igaz: keress egy képet, amelyet fordulóbevezetőként szeretnél használni, menj a **fordulóbeállításokhoz**, kapcsold ki a **Fordulóbevezető megjelenítése** opciót az alapértelmezett fordulóbevezető elrejtéséhez, majd töltsd fel a képedet vagy videódat a **Megjelenítés a forduló előtt** résznél. Amikor a forduló elindul, az alapértelmezett bevezető helyett a kép vagy videó jelenik meg.

![Képernyőkép a forduló mellékleteiről](/images/emerald/round-settings.png)

:::tip
A legjobb eredményhez használj 1920 x 1080 felbontású képeket és videókat.
:::

:::info
Miután kicsit játszottunk a mellékletekkel, [valami ilyesmit](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo) kapunk.
:::

![Képernyőkép az Emerald témáról kvízmellékletekkel](/images/emerald/emerald-with-attachments.png)

### Zene

A játékban minden zene lecserélhető mellékletekkel is. A **kérdés közben** helyekre feltöltött bármilyen hangfájl a kérdés visszaszámlálása alatt fog lejátszódni.

## Emerald témamódosítók

A mellékletek mellett **query paraméterekkel** is alakíthatod az Emerald témát. Ezek olyan paraméterek, amelyeket hozzáadhatsz a **haladó játékbeállítások** URL-jéhez - és megváltoztatják a téma kinézetét.

Ehhez egy példakvízzel kezdünk (mellékletek nélkül):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Amikor elindítod a fenti kvízt, a játék az alapértelmezett Emerald stílusban fog megjelenni. Változtassuk meg.

:::tip
Ezekkel a paraméterekkel a legegyszerűbben a [téma tesztelőnkkel](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b) kísérletezhetsz.  
Ha végeztél a kísérletezéssel, másold be a paramétereket a haladó játékbeállítások URL-jébe.
:::

Az elérhető módosítók:

- backgroundColor
- mainColor
- accentColor
- containerColor (a kérdés tárolója; alfa értéket is tartalmazhat, például ffffff40)
- timerBackgroundColor
- headerTextColor
- optionTextColor
- dialogTextColor
- pieChartLabelColor
- ladderColor
- optionColors (4 szín, vesszővel elválasztva)
- optionBorderColors (4 szín, vesszővel elválasztva)

A játékosok eszközei is testre szabhatók:

- remoteBackgroundColor
- remoteTextColor
- remoteQuestionColor
- remoteQuestionTextColor
- remoteOptionOutlineColor
- remoteOutlineColor
- remoteContainerBackground
- remoteContainerText
- remoteOptionColors (4 szín, vesszővel elválasztva)

Emellett beállíthatsz egy alapértelmezett betűtípust is:

- defaultFont
- headerFont

Ezeknek a betűtípusoknak nyilvánosan elérhető betűtípusfájlokra mutató URL-eknek kell lenniük.

Végül a `hideLogo=1` elrejti a QuizWitz logót.

Ezek a módosítók tartalmazhatnak egyetlen színt HTML hex formátumban (ff0000), vagy lineáris színátmenetet is, ha több színt adsz meg mínuszjellel elválasztva ( - például ff1b6b-45caff). (Figyelj rá, hogy a # szimbólumot nem kell hozzáadni.)

:::note
A query paramétereknek kérdőjellel kell kezdődniük ( ? ) és minden paramétert és jellel ( & ) kell elválasztani. A query paraméterekről további információt a [wikipedián](https://en.wikipedia.org/wiki/Query_string) találsz.
:::

Ha ezeket a paramétereket hozzáadod a játék URL-jéhez, módosíthatod a téma színeit:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Képernyőkép az Emerald témáról egyéni módosítókkal](/images/emerald/theme_properties.png)

### A téma testreszabása a kvízszerkesztőből

A módosítók beállításának leggyorsabb módja a kvízbeállításokban, a témák listája alatt található **Téma testreszabása** gomb. Megnyitja a téma tesztelőt a kvízeddel, ahol kiválaszthatod a téma által kínált színeket és betűtípusokat, és azonnal láthatod az eredményt. Kattints a **Beállítások alkalmazása a kvízre** gombra, és a szerkesztő kiválasztja a témát, majd elmenti a módosítókat a kvízedbe.

A gombhoz mentett kvíz és Premium kell, és számítógépen működik: a téma tesztelő nem fér el telefonon.

### A módosítók mentése a kvízbe

Nem kell minden linkhez kézzel hozzáadnod a paramétereket. Nyisd meg a kvízszerkesztőben a **Megosztás vagy beágyazás** ablakot, bontsd ki a **Speciális játékbeállítások** részt, illeszd be a paramétereket (a kezdő kérdőjel nélkül, például `backgroundColor=ff1b6b-45caff&accentColor=00ff87`) a **nyers lekérdezési karakterlánc** mezőbe, majd kattints a **Beállítások mentése a quizbe** gombra. Ettől kezdve a kvíz minden játék- és megosztási linkje tartalmazza őket.

A QuizWitz AI-asszisztens ezt is megteheti helyetted: kérd meg, hogy változtassa meg a kvízed háttérszínét, és átállítja a kvízt az Emerald témára, majd elmenti a módosítókat.

## Egyéni kérdésnézetek

Az Emerald téma két további képernyőelrendezést is kínál azokhoz a kérdésekhez, amelyeknek a **Kérdés közben** helyén kép vagy videó van. Ezeket kérdésenként, a kérdés beállításainak **Egyéni nézet** opciójával választhatod ki:

- **Teljes képernyős melléklet** - a kép vagy videó kitölti a teljes játékképernyőt, a kérdés szövege és a válaszlehetőségek nem jelennek meg
- **Teljes képernyős melléklet időzítő nélkül** - ugyanez, de a visszaszámlálás is rejtve marad

A játékosok a saját eszközükön olvassák el a kérdést és ott is válaszolnak. A részletekért lásd a [kérdések írása](../editor/005-writing-questions.md) oldalt.

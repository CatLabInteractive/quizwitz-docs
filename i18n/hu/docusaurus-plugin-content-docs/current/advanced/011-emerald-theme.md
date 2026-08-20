---
id: emerald-theme
title: Emerald theme
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

A mellékletek mellett **query paraméterekkel** is alakíthatod az Emerald témát. Ezek olyan paraméterek, amelyeket hozzáadhatsz a **haladó játékbeállítások** URL-jéhez — és megváltoztatják a téma kinézetét.

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
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 szín, vesszővel elválasztva)
- optionBorderColors (4 szín, vesszővel elválasztva)

Emellett beállíthatsz egy alapértelmezett betűtípust is:

- defaultFont
- headerFont

Ezeknek a betűtípusoknak nyilvánosan elérhető betűtípusfájlokra mutató URL-eknek kell lenniük.

Ezek a módosítók tartalmazhatnak egyetlen színt HTML hex formátumban (ff0000), vagy lineáris színátmenetet is, ha több színt adsz meg mínuszjellel elválasztva ( — például ff1b6b-45caff). (Figyelj rá, hogy a # szimbólumot nem kell hozzáadni.)

:::note
A query paramétereknek kérdőjellel kell kezdődniük ( ? ) és minden paramétert és jellel ( & ) kell elválasztani. A query paraméterekről további információt a [wikipedián](https://en.wikipedia.org/wiki/Query_string) találsz.
:::

Ha ezeket a paramétereket hozzáadod a játék URL-jéhez, módosíthatod a téma színeit:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Képernyőkép az Emerald témáról egyéni módosítókkal](/images/emerald/theme_properties.png)

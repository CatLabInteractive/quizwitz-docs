---
id: emerald-theme
title: Emerald téma
---

# Emerald téma

Az Emerald téma a legegyszerűbb módja annak, hogy testre szabd a QuizWitz játékod kinézetét. By default, the theme is a clean blue / green style with vivid option colors, but by combining quiz attachments and theme modifiers you can change the way it looks - drastically.

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

A játék kinézetét és hangulatát messze a legegyszerűbben úgy változtathatod meg, ha képeket csatolsz a kvízedhez. Nyisd meg a **Kvízbeállításokat**, és görgess le a **Mellékletek** szakaszhoz. Here you can upload images that will be used as background, client logo, connect - and wait screens (for conference - and live quizzes), and more.

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

A mellékletek mellett **query paraméterekkel** is alakíthatod az Emerald témát. These are parameters you can add to the **advanced game options** URL - and they change the look of the theme.

Ehhez egy példakvízzel kezdünk (mellékletek nélkül):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Amikor elindítod a fenti kvízt, a játék az alapértelmezett Emerald stílusban fog megjelenni. Változtassuk meg.

:::tip
Ezekkel a paraméterekkel a legegyszerűbben a [téma tesztelőnkkel](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b) kísérletezhetsz.  
When you are done experimenting, you can copy - paste the parameters to your advanced game options URL.
:::

Az elérhető módosítók:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 colors, comma - separated)
- optionBorderColors (4 colors, comma - separated)

Emellett beállíthatsz egy alapértelmezett betűtípust is:

- defaultFont
- headerFont

Ezeknek a betűtípusoknak nyilvánosan elérhető betűtípusfájlokra mutató URL-eknek kell lenniük.

Each of these modifiers can contain a single color in HTML hex format (ff0000), or a linear gradient by providing multiple colors divided by a minus symbol ( - for example ff1b6b-45caff). (Figyelj rá, hogy a # szimbólumot nem kell hozzáadni.)

:::note
A query paramétereknek kérdőjellel kell kezdődniük ( ? ) és minden paramétert és jellel ( & ) kell elválasztani. A query paraméterekről további információt a [wikipedián](https://en.wikipedia.org/wiki/Query_string) találsz.
:::

Ha ezeket a paramétereket hozzáadod a játék URL-jéhez, módosíthatod a téma színeit:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Képernyőkép az Emerald témáról egyéni módosítókkal](/images/emerald/theme_properties.png)

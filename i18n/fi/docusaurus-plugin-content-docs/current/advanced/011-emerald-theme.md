---
id: emerald-theme
title: Emerald-teema
---

# Emerald-teema

Emerald-teema on helpoin tapa mukauttaa QuizWitz-pelisi ulkoasua. Oletuksena teema on siisti sini-vihreä tyyli eloisine vaihtoehtoväreineen, mutta yhdistelemällä visan liitteitä ja teeman muokkaimia voit muuttaa sen ulkoasua - rajusti.

:::tip
[Teematestaajallamme](https://client.quizwitz.com/test.html?theme=emerald) näet, miltä asetuksesi näyttävät.
:::

![Kuvakaappaus Emerald-teemasta](/images/emerald/emerald.png)

## Valitse Emerald-teema

Valitse **Visan asetuksissa** kohta **Teema** ja ota käyttöön **Emerald**.

Voit testata Emerald-teemaa käyttävää visaa [täällä](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Kuvakaappaus visan asetuksista](/images/emerald/quiz-settings.png)

## Liitteet

### Visan liitteet

Ylivoimaisesti helpoin tapa muuttaa pelin ilmettä ja tunnelmaa on liittää visaan kuvia. Avaa **Visan asetukset** ja vieritä alas **Liitteet**-osioon. Täällä voit ladata kuvia, joita käytetään taustana, asiakkaan logona, liittymis- ja odotusnäyttöinä (konferenssi- ja live-visoissa) ja muuhun.

![Kuvakaappaus visan liitteistä](/images/emerald/quiz-attachments.png)

### Kierroksen liitteet

Voit myös ladata kuvia tai videoita, jotka toistetaan ennen peliä ja sen jälkeen. Sama pätee kierroksiin: etsi kuva, jota haluat käyttää kierroksen esittelynä, siirry **kierroksen asetuksiin**, poista käytöstä **Näytä kierroksen intro**, jolloin oletusesittely piilotetaan, ja lataa kuvasi tai videosi kohtaan **Näytä ennen kierrosta**. Kun kierros alkaa, kuva tai video näytetään oletusesittelyn sijaan.

![Kuvakaappaus kierroksen liitteistä](/images/emerald/round-settings.png)

:::tip
Käytä parhaan tuloksen saamiseksi kuvia ja videoita, joiden resoluutio on 1920 x 1080.
:::

:::info
Kun liitteillä on leikitelty, lopputulos on jotain [tällaista](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Kuvakaappaus Emerald-teemasta visan liitteiden kanssa](/images/emerald/emerald-with-attachments.png)

### Musiikki

Myös kaiken pelin musiikin voi korvata liitteillä. Kaikki **kysymyksen aikana** -paikkoihin ladatut äänitiedostot toistetaan kysymyksen lähtölaskennan aikana.

## Emerald-teeman muokkaimet

Liitteiden lisäksi voit muokata Emerald-teemaa myös **kyselyparametreilla**. Nämä ovat parametreja, joita voit lisätä **pelin lisäasetusten** URL-osoitteeseen - ja ne muuttavat teeman ulkoasua.

Aloitetaan tätä varten esimerkkivisasta (ilman liitteitä):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Kun aloitat yllä olevan visan, peli on Emeraldin oletustyylissä. Muutetaan sitä.

:::tip
Helpoin tapa kokeilla näitä parametreja on käyttää [teematestaajaamme](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Kun olet kokeillut tarpeeksi, voit kopioida ja liittää parametrit pelin lisäasetusten URL-osoitteeseen.
:::

Käytettävissä olevat muokkaimet ovat:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 väriä, pilkuilla erotettuina)
- optionBorderColors (4 väriä, pilkuilla erotettuina)

Lisäksi voit määrittää oletusfontin:

- defaultFont
- headerFont

Näiden fonttien on oltava julkisesti saatavilla olevien fonttitiedostojen URL-osoitteita.

Kukin näistä muokkaimista voi sisältää yhden värin HTML-heksamuodossa (ff0000) tai lineaarisen liukuvärin, kun annat useita värejä miinusmerkillä erotettuina ( - esimerkiksi ff1b6b-45caff). (Huomaa, että #-merkkiä ei pidä lisätä.)

:::note
Kyselyparametrien on alettava kysymysmerkillä ( ? ) ja parametrit on erotettava toisistaan et-merkillä ( & ). Lisätietoja kyselyparametreista löydät [Wikipediasta](https://en.wikipedia.org/wiki/Query_string).
:::

Lisäämällä nämä parametrit pelisi URL-osoitteeseen voit muuttaa teeman värejä:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Kuvakaappaus Emerald-teemasta omilla muokkaimilla](/images/emerald/theme_properties.png)

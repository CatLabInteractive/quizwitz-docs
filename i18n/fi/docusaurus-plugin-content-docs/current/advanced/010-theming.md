---
id: theming
title: "Teemat"
---

# Teemat

:::warning
Oman QuizWitz-teeman luominen tarjoaa eniten joustavuutta, mutta se on monimutkainen ja aikaa vievä prosessi. Useimmissa tapauksissa on paljon parempi mukauttaa [Emerald-teemaamme](011-emerald-theme.md), joka on suunniteltu nimenomaan helposti muokattavaksi.
:::

QuizWitz-teemat luodaan **Adobe Animatella**. Voit ladata [teemapohjan](https://themes.quizwitz.com/empty/quizwitz-empty-theme.zip) lähtökohdaksi. Huomaa, että QuizWitzin teemoittaminen on työlästä, ja se kannattaa jättää kokeneille suunnittelijoille, jotka tuntevat Adobe Animaten läpikotaisin.

Jätätkö mieluummin työn ammattilaisille? Lähetä meille sähköpostia osoitteeseen [support@catlab.be](mailto:support@catlab.be), niin annamme arvion siitä, mitä maksaa muuttaa suunnitelmasi käyttövalmiiksi QuizWitz-teemaksi.

:::tip
Yleinen järjestely on, että graafinen suunnittelija piirtää teeman ja joku muu kokoaa sen Animatessa. [Teeman suunnitteluopas](012-theme-design-guide.md) kertoo, mitä suunnittelijan on toimitettava, jotta tämä onnistuu.
:::

---

## 🧪 Teeman testityökalu

Kun olet valmis testaamaan teemaasi, **pakkaa suunnittelukansiosi sisältö zip-tiedostoksi** ( - ei itse kansiota; kun avaat zip-tiedoston, sinun pitäisi nähdä tiedostosi eikä vain yhtä kansiota - ) ja lataa se [teematestaajaamme](https://themes.quizwitz.com/). Näin näet reaaliaikaisesti, miltä teemasi näyttää pelissä.

Testauksen jälkeen lähetä zip-tiedosto meille sähköpostitse, niin liitämme sen tiliisi ja voit valita teemasi ja käyttää sitä visoissasi.

---

## 🏷️ QuizWitzin logo

Kaikissa omissa suunnitelmissa on oltava QuizWitzin logo.

---

## 🖥️ Näyttöjen yleiskatsaus

| Vaihe                                                     | Pelinäyttö                                                                                                             | Pelaajan laite (tabletti/puhelin)                   |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Liittymisnäyttö                                           |                                                                                                                        |                                                                        |
| Odotusnäyttö                                              | Visan logo. Näytetään, kun visamestari lukee kysymystä.                                | Lainaus, joka kehottaa pelaajaa kuuntelemaan tarkasti. |
| Pelin intro                                               | Animaatio ennen peliä.                                                                                 | Odotusnäyttö.                                          |
| Kierroksen intro                                          | Animaatio ennen jokaista kierrosta.                                                                    | Odotusnäyttö.                                          |
| Kysymykset                                                |                                                                                                                        |                                                                        |
| Liite                                                     | Koko näytön liitenäkymä ( - ennen kysymyksiä tai kierroksia tai niiden jälkeen - ). | Odotusnäyttö.                                          |
| Kysymys: monivalinta ilman liitettä       | Kysymys + 4 monivalintavaihtoehtoa.                                                                    | Monivalinnan vastausnäyttö.                            |
| Kysymys: monivalinta liitteen kanssa      | Kysymys + 4 monivalintavaihtoehtoa + visuaalinen liite.                                                | Monivalinnan vastausnäyttö.                            |
| Kysymys: avoin kysymys ilman liitettä     | Pelkkä kysymys.                                                                                        | Tekstikenttä ja lähetyspainike.                        |
| Kysymys: avoin kysymys liitteen kanssa    | Kysymys + visuaalinen liite.                                                                           | Tekstikenttä ja lähetyspainike.                        |
| Aktiviteetti: valitut joukkueet           | Aktiviteetin nimi.                                                                                     | Odotusnäyttö tai ”sinut on valittu” -näyttö.           |
| Palaute                                                   |                                                                                                                        |                                                                        |
| Kysymyksen palaute: monivalinta           | Kysymys, oikeat vaihtoehdot ja vastausten jakauma.                                                     | Oikein / väärin + ansaitut pisteet.                    |
| Kysymyksen palaute: avoin kysymys         | Kysymys, oikeat vaihtoehdot ja oikeiden vastausten %-osuus.                                            | Oikein / väärin + ansaitut pisteet.                    |
| Kysymyksen palaute: avoin kysymys + liite | Kysymys, oikeat vaihtoehdot, vastausten jakauma ja visuaalinen liite.                                  | Oikein / väärin + ansaitut pisteet.                    |
| Kysymyksen palaute: monivalinta + liite   | Kysymys, oikeat vaihtoehdot, vastausten jakauma ja visuaalinen liite.                                  | Oikein / väärin + ansaitut pisteet.                    |
| Aktiviteetin palaute                                      | Aktiviteettiin valitut joukkueet.                                                                      | Odotusnäyttö tai oikein/väärin-näyttö.                 |
| Pelaajien sijoitukset                                     |                                                                                                                        |                                                                        |
| Kierroksen lopetus                                        | Kaikkien pelaajien top 10.                                                                             | Nykyinen sijoitus ja kokonaispisteet.                  |
| Pelin lopetus                                             | Lähtölaskenta 10. sijasta 1. sijaan, sitten lopullinen top 10.         | Lopullinen sijoitus ja kokonaispisteet.                |

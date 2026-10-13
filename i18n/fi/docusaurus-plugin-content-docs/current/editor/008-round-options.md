---
id: round-options
title: Kierroksen asetukset
---

# 🔄 Kierroksen asetukset

Jokaisella kierroksella on tietty **tyyppi**. Oletus on **Trivia**, mutta kannustamme testaamaan ja kokeilemaan kaikkia saatavilla olevia tyyppejä. Tällä sivulla kerrotaan asetuksista ja liitteistä, jotka voit määrittää kierroskohtaisesti.

📘 Yksityiskohtainen yleiskatsaus kaikkiin kierrostyyppeihin löytyy [kierrostyyppien dokumentaatiosta](../round-types/000-round-types.md).

---

## 🔧 Kierroksen määrittäminen

Määritä kierroksen asetukset napsauttamalla kierrospaneelin rataskuvaketta:

| ![Kierroksen asetusten avaaminen](/images/open-round-options.png) | ![Kierroksen asetukset](/images/round-options.png) |
| :---------------------------------------------------------------: | :------------------------------------------------: |
|                  _Kierroksen asetusten avaaminen_                 |            _Kierroksen määrityspaneeli_            |

---

## ⚙️ Kierroksen yleiset asetukset

Seuraavat asetukset ovat käytettävissä useimmissa kierrostyypeissä:

- **Näytä vain _X_ kysymystä** - Rajaa kierroksen tiettyyn määrään kysymyksiä
- **Satunnainen kysymysjärjestys** - Sekoita kysymysten järjestys kierroksen sisällä
- **Näytä kierroksen intro** - Näytä animoitu otsikko ennen kierroksen alkua
- **Näytä kierroksen outro (välitilanne)** - Paljasta sijoitukset kierroksen lopussa
- **Ryhmittele kaikki palaute yhdelle näytölle** - Kokoa kysymysten palaute yhteen jaksoon kierroksen päätyttyä
- **Näytä kaikkien kysymysten palaute kierroksen lopussa** - Viivästä kysymysten palautetta kierroksen loppuun asti
- **Pakota palaute jokaisen yksittäisen kysymyksen jälkeen** - Varmista välitön palaute
  > ⚠️ Tällä on vaikutusta vain niissä kierros- ja kysymystyypeissä, joissa palaute muuten viivästyisi, kuten avoimissa kysymyksissä tai salamakierroksissa.

📘 Lisätietoja palautteen ajoituksesta ja toiminnasta löydät kohdasta [kysymystyypit](../question-types/000-question-types.md).

---

## 🏆 Pisteytysasetukset {#scoring}

QuizWitz tarjoaa joustavan pisteytyksen, joka pitää pelin reiluna ja kiinnostavana kaikille pelaajille.

- **Aikaan perustuva pisteytys** - Pelaajat saavat enemmän pisteitä nopeammista vastauksista.
  - Useimmissa kysymystyypeissä aikaan perustuvat pisteet vähenevät **jatkuvasti mikrosekunti kerrallaan**: mitä nopeammin vastaat, sitä enemmän pisteitä saat.
  - **Avoimissa kysymyksissä** aikaan perustuvat pisteet jaetaan jaksoihin. Esimerkiksi ensimmäisessä jaksossa (esim. ensimmäisten sekuntien aikana) annetut vastaukset saavat **100 %** aikaan perustuvasta osuudesta, seuraava jakso **80 %** ja niin edelleen. Tämä tasoittaa tilannetta hitaammin kirjoittaville.

- **Kiinteä pisteosuus aikaan perustuvassa pisteytyksessä** - Määrität, kuinka suureen osaan kokonaispisteistä nopeus vaikuttaa.
  - Oletuksena **75 %** pisteistä on kiinteitä (jokainen oikein vastannut saa nämä pisteet nopeudesta riippumatta).
  - Vain jäljelle jäävään **25 %:iin** vaikuttaa se, kuinka nopeasti pelaajat vastaavat.

> 💡 Säätämällä tätä asetusta voit tehdä kierroksista enemmän tietoon tai enemmän nopeuteen perustuvia visasi tyylin mukaan.

Nämä pisteytysasetukset löytyvät kierroksen asetuspaneelista kierrosta muokattaessa.

---

## 📜 Visamestarin ohjeet

Voit lisätä oman **kierroksen esittelytekstin**, joka näkyy kierroksen alussa vain [Quizmaster-sovelluksessa](../quizmaster/001-introduction.md). Tämän avulla voit perehdyttää visamestarin tai lisätä henkilökohtaisen kosketuksen.

---

## 📎 Liitteet

Rikasta kierrostasi liitteillä, jotka näytetään tietyillä hetkillä:

- **Ennen kierrosta** - Näytetään kierroksen intro-animaation jälkeen
- **Kierroksen jälkeen** - Näytetään kierroksen lopetuksen jälkeen
- **Ennen kierroksen lopetusta** - Näytetään viimeisen kysymyksen jälkeen, juuri ennen lopetusta
- **Kierroksen lopetuksen aikana** - _(vain ääni)_ Toistetaan, kun sijoitukset ovat näkyvissä
- ...

📘 Tuetut tiedostotyypit ja käyttövinkit löydät [liiteoppaasta](../editor/006-attachments.md).

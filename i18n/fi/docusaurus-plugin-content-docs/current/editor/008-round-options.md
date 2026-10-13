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

## 💬 Round explanation

Some round types and scoring options show a short explanation on the game screen before the first question, for example _"Answer consecutive questions correctly to reach higher levels and get bonus points."_ when a round uses strike scoring. Click **+ Round explanation** in the round opening to replace that text with your own. You can also use it to explain a regular trivia round, which has no explanation by default.

- Leave the field empty to keep the default explanation of the round type.
- The round explanation is translated like any other text: add it in every language of your quiz.
- When a quizmaster presents the quiz, the game screen skips the round explanation. Use the quizmaster script below instead.

---

## 📜 Visamestarin ohjeet

You can add a custom **round introduction text** (the **Quizmaster script**) that will appear only on the [Quizmaster App](../quizmaster/001-introduction.md) at the start of the round. Tämän avulla voit perehdyttää visamestarin tai lisätä henkilökohtaisen kosketuksen.

---

## 📎 Liitteet

Rikasta kierrostasi liitteillä, jotka näytetään tietyillä hetkillä:

- **Ennen kierrosta** - Näytetään kierroksen intro-animaation jälkeen
- **Kierroksen jälkeen** - Näytetään kierroksen lopetuksen jälkeen
- **Ennen kierroksen lopetusta** - Näytetään viimeisen kysymyksen jälkeen, juuri ennen lopetusta
- **Kierroksen lopetuksen aikana** - _(vain ääni)_ Toistetaan, kun sijoitukset ovat näkyvissä
- ...

📘 Tuetut tiedostotyypit ja käyttövinkit löydät [liiteoppaasta](../editor/006-attachments.md).

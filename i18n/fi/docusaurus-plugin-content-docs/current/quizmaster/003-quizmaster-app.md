---
id: quizmaster-app
title: Quizmaster-sovellus
---

# 🎛️ Quizmaster-sovelluksen käyttö

Visamestarina ohjaat QuizWitz Live -peliä täysin. Tärkein asia, joka sinun pitää tietää, on tämä:

> Peli **etenee vain, kun napsautat** - pelinäytöllä ei tapahdu mitään, ennen kuin käsket.

Näin hallitset tahtia ja ajoitusta täysin, mutta se tarkoittaa myös, että napautat paljon. Käydään läpi, miten sovellus toimii.

---

## 🔁 Visan kulku

Visan rakenne noudattaa sitä, miten se on koottu editorissa, mutta useimmat visat etenevät seuraavien vaiheiden kautta:

---

### 🎬 Kierroksen esittely

Ennen jokaisen kierroksen alkua näet kierroksen esittelynäytön.

- Sinä päätät, milloin **kierroksen esittelyanimaatio** toistetaan.
- Aloita kierros ja siirry ensimmäiseen kysymykseen napsauttamalla **”Aloita”**.

---

### ❓ Kysymyksen esittäminen

Jokaisella kysymyksellä on oma näyttönsä Quizmaster-sovelluksessa:

![Quizmaster-sovellus - aloita kysymys](/images/quizmaster-app-start-question.png)

Näet:

- **Kysymyksen numero** - esim. `1.1` tarkoittaa ensimmäisen kierroksen ensimmäistä kysymystä
- **Kysymystyyppi** - kuten monivalinta, asiaankuuluvine pisteytysmuuttujineen
- **Kysymyksen pitkä versio** - sinun luettavaksesi ääneen
- **Kysymyksen tiedot** - kuten ajastimen kesto ja jaossa olevat pisteet
- **Lyhyt kysymys** - pelinäytöllä näkyvä versio
- **Aloita kysymys -painike** - käynnistää ajastimen heti
- **Mahdolliset vastaukset** - näytetään oikeassa järjestyksessä (monivalinnassa)

Kysymys pysyy näkyvissä sovelluksessasi, kunnes joko:

- Kaikki pelaajat ovat vastanneet
- Ajastin loppuu

> 🔎 Lisätietoja kysymys- ja kierrostyypeistä löydät **visantekijän oppaasta**.

---

### ✅ Kysymyksen palaute

Kun kysymys päättyy, oikea vastaus paljastetaan. Näkymä riippuu kysymystyypistä - tämä esimerkki näyttää monivalintakysymyksen tulosnäytön:

![Quizmaster-sovellus - kysymyksen palaute](/images/quizmaster-app-question-feedback.png)

Sisältää:

- **Kysymyksen numeron**
- **Lyhyen kysymystekstin**
- **Oikean vastauksen**
- **Vastausten jakauma** - lukuina ja prosentteina
- **Pitkä palaute** - lisätietoa luettavaksi ääneen
- **Jatka-painike** - siirtyy seuraavaan kysymykseen
- **100 nopeinta vastausta** - näytetään näytön alareunassa

---

### 📊 Kierroksen lopetus

Kun kierros päättyy, näet **kierroksen lopetusnäytön**, joka paljastaa tähänastisen tilanteen.

![Quizmaster-sovellus - kierroksen lopetus](/images/quizmaster-app-round-outro.png)  
![QuizWitz - kierroksen lopetus pelinäytöllä](/images/round-outro.png)

Sovelluksessasi:

- Näet **100 parasta pelaajaa** ja voit selata listaa
- Napauta pelaajan sijoitusta korostaaksesi hänet pelinäytöllä
- Kierroksesta 2 alkaen näet myös, montako sijaa kukin pelaaja on noussut tai laskenut:
  - **Vihreä** = noussut
  - **Punainen** = laskenut
  - **Valkoinen** = ei muutosta

Pelaajat näkevät lopetuksen aikana **oman sijoituksensa** laitteellaan.

---

### 🏆 Visan loppu

Visan lopussa on aika **voittajien paljastusjuhlille** - konfetteineen ja ruudun poikki lentävine pelaajaemojeineen.

![QuizWitz - pelin lopetus pelinäytöllä](/images/game-outro.png)

- Oletusasetus näyttää **12 parasta pelaajaa**
- Voit muokata näytettävien pelaajien määrää **pelin lisäasetuksissa**

> 🎉 Hauska vinkki: Pelaajiesi valitsemat emojit tanssivat ruudulla - vaikka joku olisi valinnut hymyilevän kakkakasan.

---

Siinä kaikki, mitä sinun tarvitsee tietää visasi vetämisestä Quizmaster-sovelluksella. Nyt sinulla on kaikki tarvittava tapahtumasi johtamiseen itsevarmasti ja tyylillä!

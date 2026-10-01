---
id: advanced-player-parameters
title: Lisäparametrit
---

# ⚙️ Lisäparametrit

Kyselymerkkijonon parametreilla voit mukauttaa QuizWitz-pelisovelluksen toimintaa. Nämä parametrit voi lisätä mihin tahansa pelilinkkiin **Pelin lisäasetukset** -toiminnolla.

Esimerkki:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Mikä on kyselymerkkijono?](https://en.wikipedia.org/wiki/Query_string)

---

## Käytettävissä olevat parametrit:

| Parametri                |            Oletus           |          Esimerkki          | Selitys                                                                                                                                                                                                           |
| ------------------------ | :-------------------------: | :-------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (selain) |              en             | ISO-639-kielikoodi, joka ladataan ja jota käytetään peruskielenä                                                                                                                                                  |
| `theme`                  |           quizted           |           emerald           | Ladattavan teeman nimi (tai hyväksytty URL-osoite)                                                                                                                                             |
| `reservation`            |              /              |            abcdef           | Käytettävä varaustunniste (live-peleissä)                                                                                                                                                      |
| `remote`                 | quizwitz.tv | quizwitz.tv | Käytettävä CatLab Remote -palvelin                                                                                                                                                                                |
| `server`                 |              /              |              10             | Käytettävän CatLab Remote -palvelimen tunnus (automaattisella haulla)                                                                                                                          |
| `publisher`              |              /              |           QuizWitz          | Pelin isännöivän julkaisijan nimi. Tätä käytetään näkymien mukauttamiseen                                                                                                                         |
| `smileys`                |              1              |              0              | Aseta arvoksi 0, jos haluat poistaa hymiöt käytöstä pelissä                                                                                                                                                       |
| `outroPlayers`           |              12             |          5,4,3,1,2          | Määrittää pelin lopetuksessa julkistettavien pelaajien määrän (luku) TAI järjestyksen (pilkuilla erotettu sijoitusluettelo).                                |
| `focusPositions`         |              /              |            50,100           | Määrittää luettelon lisäsijoituksista, jotka näytetään Quizmaster-sovelluksessa                                                                                                                                   |
| `translations`           |              1              |              0              | Aseta arvoksi 0, jos et halua ladata ladattavan visan käännöksiä                                                                                                                                                  |
| `cycleTranslations`      |              0              |              1              | Aseta arvoksi 1, jos haluat vaihtaa kysymyskohtaisesti vuorotellen kaikkien visan saatavilla olevien kielten välillä                                                                                              |
| `showLongQuestions`      |              0              |              1              | Aseta arvoksi 1, jos haluat näyttää 'pitkän kysymyksen' pelinäytöllä                                                                                                                                              |
| `forcePiecharts`         |              0              |              1              | Aseta arvoksi 1, jos haluat näyttää aina kaiken palautteen piirakkakaavioina                                                                                                                                      |
| `forceNoPiecharts`       |              0              |              1              | Aseta arvoksi 1, jos et koskaan halua ryhmitellä kaikkea palautetta piirakkakaavioihin.                                                                                                           |
| `piechartPercentages`    |              0              |              1              | Aseta arvoksi 1, jos haluat näyttää kaikissa piirakkakaavioissa prosenttiosuudet absoluuttisten arvojen sijaan                                                                                                    |
| `monitors`               |              /              |            nl,fr            | Jos tämä on asetettu, live-peleissä luodaan erilliset koodit, joilla näytetään kyseisen kielen 'monitori' paikallisille visamestareille.                                                          |
| `allowLogin`             |              1              |              0              | Aseta arvoksi 0, jos et halua sallia käyttäjien kirjautua sisään                                                                                                                                                  |
| `tracker`                |              1              |              0              | Aseta arvoksi 0, jos haluat poistaa kaiken seurannan käytöstä. Visaraporttia ei tällöin ole saatavilla                                                                                            |
| `random`                 |              0              |              1              | Aseta arvoksi 1, jos haluat ladata 'satunnaisen visan'                                                                                                                                                            |
| `delay`                  |              0              |            30000            | Määrittää, kuinka monta millisekuntia kaikkea pelaajien vuorovaikutusta viivästetään (livestriimejä varten)                                                                                    |
| `countdown`              |              10             |              60             | Määrittää, kuinka monta sekuntia peli 'laskee alaspäin' esitystilassa.                                                                                                                            |
| `autoCountdown`          |              0              |              1              | Aseta arvoksi 1, jos haluat lähtölaskennan alkavan automaattisesti ensimmäisen pelaajan liityttyä esitystilassa.                                                                                  |
| `autoRestart`            |              0              |              1              | Aseta arvoksi 1, jos haluat pelin käynnistyvän automaattisesti uudelleen sen päätyttyä.                                                                                                           |
| `waitForPlayers`         |              0              |              1              | Aseta arvoksi 1, jos et halua odottaa pelaajia, kun `autoCountdown` on käytössä                                                                                                                                   |
| `askEmail`               |              1              |              0              | Aseta arvoksi 0, jos et halua kysyä käyttäjän sähköpostiosoitetta esitystilassa.                                                                                                                  |
| `beacon`                 |              /              |           my-beacn          | Aseta CatLab Remote -majakkatunniste, jolla Quizmaster-sovellus voidaan yhdistää automaattisesti.                                                                                                 |
| `rounds`                 |              5              |              7              | Määrittää, kuinka monta kierrosta satunnaiseen visaan luodaan.                                                                                                                                    |
| `questions`              |              7              |              7              | Määrittää, kuinka monta kysymystä satunnaisen visan kuhunkin kierrokseen luodaan.                                                                                                                 |
| `showListenQuotes`       |              1              |              0              | Aseta arvoksi 0, jos haluat poistaa käytöstä 'hauskat' ”kuuntele tarkasti” -lainaukset.                                                                                                           |
| `shared`                 |              /              |  123:abcdef | Jaetun sisällön käyttöoikeustunniste.                                                                                                                                                             |
| `music`                  |              1              |              0              | Aseta arvoksi 0, jos haluat poistaa kaiken (pelin) musiikin käytöstä. Ladatut äänitiedostot toistetaan silti.                                                  |
| `connectMusic`           |              1              |              0              | Aseta arvoksi 0, jos haluat poistaa käytöstä (pelin) musiikin, joka soi 'liittymisvaiheen' aikana.                                                                             |
| `slideshowVideoInterval` |             300             |             300             | Kun liittymisnäytön vaiheeseen on ladattu videoita, tämä määrittää, montako sekuntia kunkin videon toiston välillä on.                                                                            |
| `slideshowImageInterval` |              20             |              60             | Kun liittymisnäytön vaiheeseen on ladattu kuvia, tämä määrittää, montako sekuntia kutakin kuvaa näytetään.                                                                                        |
| `skipOnAllAnswered`      |              1              |              0              | Aseta arvoksi 0, jos haluat ohittaa sisällön asetuksen `skipOnAllAnswered`                                                                                                                                        |
| `departments`            |              1              |            A,B,C            | Aseta arvoksi 0, jos et halua ladata osastoja. Aseta arvoksi pilkuilla erotettu nimiluettelo, jos haluat liittää kaikki liittyvät pelaajat automaattisesti satunnaiseen osastoon. |
| `showRankInDepartment`   |              1              |              0              | Aseta arvoksi 0, jos et halua käyttäjien näkevän sijoitustaan osastonsa sisällä.                                                                                                                  |
| `showDepartmentRanking`  |              1              |              0              | Aseta arvoksi 0, jos et halua näyttää osastojen tuloksia kierrosten välillä.                                                                                                                      |
| `preloadVideo`           |              0              |              1              | Aseta arvoksi 1, jos haluat pakottaa kaikkien videokatkelmien esilataamisen.                                                                                                                      |
| `n`                      |              /              |          `_prompt_`         | Aseta (tai pyydä asettamalla arvoksi `_prompt_`) nimi peliä pelaavalle pelaajaryhmälle. Tämä nimi lähetetään visaraporttiin.                                   |

---

## 💡 Käyttövinkkejä

- Useita parametreja voi yhdistää merkillä `&`
- Käytä näitä vaihtoehtoja **Pelin lisäasetusten** kanssa, kun jaat tai upotat linkkejä
- Monet vaihtoehdot ovat hyödyllisiä livestriimien optimoinnissa tai monikielisissä tapahtumissa

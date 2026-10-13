---
id: theme-design-guide
title: Teeman suunnitteluopas
---

# Teeman suunnitteluopas

[Teemat](/docs/advanced/theming) kertoo, miten QuizWitz-teema rakennetaan: Adobe Animatessa, CreateJS-kirjastoksi vietynä. Tämä sivu käsittelee sitä edeltävää vaihetta - teeman **suunnittelua**.

Se on kirjoitettu graafiselle suunnittelijalle, ja siinä oletetaan, että suunnittelun ja Animate-tuotannon tekevät eri ihmiset. Harva suunnittelija työskentelee enää Adobe Animatessa, joten yleensä suunnittelija toimittaa grafiikan ja joku muu kokoaa teeman. Tämä toimii hyvin, kunhan grafiikka toimitetaan muodossa, jota rakentamisessa voi käyttää. Tämä sivu kuvaa tuon muodon, ja se toimii samalla toimitettavien luettelona, kun pyydät suunnittelijalta tarjousta.

Sivulla on neljä osaa:

1. [Mitä suunnittelet](#what-you-are-designing) - näytöt, jotka teema kattaa.
2. [Kahdeksan kehystä](#eight-frames-and-an-element-sheet) ja [elementtiarkki](#the-element-sheet) yksi kerrallaan kuvakaappausten kera.
3. [Suunnittelusäännöt](#design-rules) - miten tiedosto on rakennettava, jotta moottori voi käyttää sitä.
4. [Mitä luovutetaan](#what-to-hand-over) - lähdetiedosto, toimitettavat ja työjärjestys.

:::tip
Jos haluat muuttaa vain värejä, fontteja ja taustoja, et tarvitse mitään tästä - mukauta sen sijaan [Emerald-teemaa](/docs/advanced/emerald-theme).
:::

:::info[Katso se toiminnassa]
Jokaista tässä kuvattua näyttöä voi pelata reaaliajassa esimerkkidatalla **teematestaajassa** osoitteessa [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Se lataa teeman ja tarjoaa valikon testinäytöistä: kysymyksiä liitteen kanssa ja ilman, vastausten jakauma pienelle ja suurelle ryhmälle, tilanne, kierrosten introt, liittymisnäyttö asiakkaan logon kanssa ja ilman ja niin edelleen. Lisää osoitteeseen `?theme=emerald`, niin näet [Emerald-teeman](/docs/advanced/emerald-theme). Teeman rakentaja käyttää samaa sivua tarkistaakseen sen kokoamisen aikana.
:::

---

## Mitä suunnittelet

QuizWitz-peliä pelaa koko huone kerralla, ja mukana on aina kaksi näyttöä:

- **Pelinäyttö** - projektori tai televisio, 1920 × 1080. Kysymykset, vastaukset, miten huoneen vastaukset jakautuivat, tilanne. Tämän sinä suunnittelet.
- **Jokaisen pelaajan puhelin**, jolla hän kirjoittaa vastauksensa. Se on kiinteän asettelun verkkosivu; sen tyyli tulee väriluettelostasi, et suunnittele sen asettelua.

Teema on pelinäytön koko visuaalinen ulkoasu: tausta, typografia, värit, tapa, jolla neljän vaihtoehdon kysymys esitetään, miten tilanne rakentuu ja miten kierros julkistetaan.

---

## Kahdeksan kehystä ja elementtiarkki

Pelissä on kymmeniä erilaisia näyttötiloja, mutta useimmat ovat saman asettelun muunnelmia. **Suunnittelet kahdeksan kehystä ja yhden elementtiarkin; loput johdetaan niistä.** Se ei ole oikotie - moottori toimii näin. Näyttö, jolla ei ole omaa grafiikkaa, käyttää yleistä kehystä.

Arkki on yhtä tärkeä kuin kehykset: varakehystä käyttävä näyttö tarvitsee silti sisältöalueelleen kalusteita - paneelin, rivin, viivan.

| # | Kehys                                                          | Kattaa myös                                                              |
| - | -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1 | [Yleinen kehys](#frame-1---the-general-frame)                  | Kolmetoista näyttötilaa, joilla ei ole omaa grafiikkaa                   |
| 2 | [Liittymisnäyttö](#frame-2---the-connect-screen)               | Piirrä se kahdesti: asiakkaan logon kanssa ja ilman sitä |
| 3 | [Odotusnäyttö](#frame-3---the-waiting-screen)                  | -                                                                        |
| 4 | [Kysymysnäyttö](#frame-4---the-question-screen)                | -                                                                        |
| 5 | [Kysymys liitteen kanssa](#frame-5---question-with-attachment) | Koko näytön liite ja kysymysten välissä näytettävät liitteet             |
| 6 | [Vastausnäyttö](#frame-6---the-answer-screen)                  | Vastausnäyttö avoimille kysymyksille ja liitteellisille kysymyksille     |
| 7 | [Tilanne ja voittaja](#frame-7---standings-and-winner)         | Tilanne kierrosten välillä ja lopullinen voittaja                        |
| 8 | [Kierroksen intro](#frame-8---the-round-intro)                 | Kaikki kuusi kierroskategoriaa                                           |

:::note[Kuvakaappauksista]
Alla olevat näytöt ovat olemassa olevasta teemasta. Ne näyttävät, **mitkä elementit näkyvät kullakin näytöllä ja milloin**. Ne eivät ole mallina tyylille _eikä_ asettelulle: se, mihin tämä teema sijoittaa kysymyksensä, vaihtoehtonsa ja ajastimensa, on sen oma ratkaisu, ja sinun teemasi voi olla täysin erilainen.
:::

### Kehys 1 - yleinen kehys

**Mitä siinä on:** tausta, otsikko ja sen alla tyhjä sisältöalue. Se ei ole valmis sommitelma vaan kehys, jonka sisään muu rakennetaan.

**Mitä se kattaa:** kolmetoista näyttötilaa - kierroksen selitys, tilanne, pelaajaesittely, monivalintamuunnelmat, pitkät kysymykset, Seats-varoitukset, asetukset. Kukin täyttää sisältöalueen omalla tavallaan [elementtiarkin](#the-element-sheet) elementeillä, joten kehyksen on pystyttävä pitämään sisällään asioita, jotka eivät näytä lainkaan samalta. Kysymysvalitsin ja pitkä kysymys voivat halutessasi saada oman sommitelmansa; muuten ne käyttävät tätä kehystä.

Kaksi pelin hetkeä samassa kehyksessä: kysymysvalitsin ja pisteportaikko.

![Yleinen kehys, jossa on kolmirivinen kysymysvalitsin](/images/theme-design/frame1-general-multiquestion.png)

![Yleinen kehys, jossa on viisitasoinen pisteportaikko](/images/theme-design/frame1-general-strikeladder.png)

Huomaa, kuinka vähän niillä on yhteistä. Valitsin sijoittaa kolme riviään reunustettuun paneeliin; portaikossa ei ole paneelia lainkaan, vain ohuilla viivoilla erotettuja rivejä. Yhteistä niillä on tausta ja niiden yläpuolella oleva otsikkokaista - kaikki sen alapuolella kuuluu yksittäiselle näytölle, ja sen täyttää peli, et sinä.

Tuo paneeli ja nuo viivat tulevat [elementtiarkista](#the-element-sheet), eivät tästä kehyksestä. Tämän kehyksen tehtävä on pitää ne sisällään: suunnittele sisältöalue tyhjäksi, neutraaliksi ja väljäksi alueeksi, joka toimii yhtä hyvin reunustetun paneelin, pelkän luettelon ja rivitaulukon kanssa. Tausta, joka on keskeltä levoton, tai otsikko, joka toimii vain, jos paneeli on aivan sen alla, on se kohta, jossa tämä hajoaa.

### Kehys 2 - liittymisnäyttö

**Mitä siinä on:** kaikki, mitä huone tarvitsee liittyäkseen.

- viisi ohjeriviä
- liittymiskoodi ja QR-koodi, jotka molemmat moottori luo - varaa QR-koodille neliö
- rivi, jossa on liittyneiden pelaajien määrä
- luettelo vähitellen saapuvista pelaajista

**Piirrä se kahdesti:** asiakkaan logo liittymiskoodin vieressä ja ilman logoa, jolloin teeman oma grafiikka kantaa näyttöä.

![Liittymisnäyttö asiakkaan logon kanssa](/images/theme-design/frame2-connect.png)

![Liittymisnäyttö ilman asiakkaan logoa](/images/theme-design/frame2-connect-nologo.png)

### Kehys 3 - odotusnäyttö

**Mitä siinä on:** lähes ei mitään - visan oma logo tai teeman grafiikka.

Sillä on liittymisnäytön kanssa yhteinen vain tausta, joten suunnittele se omana sommitelmanaan. Se pysyy näkyvissä, kun visamestari lukee kysymystä ääneen, joten se on ruudulla pidempään kuin lähes mikään muu pelissä. Se ansaitsee enemmän huomiota kuin tyhjä näyttö yleensä saa.

![Odotusnäyttö](/images/theme-design/frame2-pending.png)

### Kehys 4 - kysymysnäyttö

**Mitä siinä on:** kysymys, ajastin, neljä vastausvaihtoehtoa ja palauterivi. Tätä näyttöä huone katsoo pisimpään. Huomaa, että vaihtoehto voi koostua pelkästä emojista:

![Kysymysnäyttö, jossa on neljä tekstivaihtoehtoa](/images/theme-design/frame3-question-options.png)

![Kysymysnäyttö, jossa vastausvaihtoehtoina on lippuja](/images/theme-design/frame3-question-emoji.png)

Kysymys ilman vaihtoehtoja - pelaajat kirjoittavat vastauksensa puhelimellaan. Näyttö on lähes tyhjä, ja ajastimesta tulee pääelementti:

![Avoin kysymys, jossa on vain kysymys ja suuri ajastin](/images/theme-design/frame3-question-open.png)

Hetki, jolloin aika loppuu. Palautekupla ilmestyy näytön päälle, ja ajastin on tyhjä:

![Kysymysnäyttö, jossa aika on loppunut](/images/theme-design/frame3-question-timeout.png)

### Kehys 5 - kysymys liitteen kanssa

**Mitä siinä on:** samat osat kuin kehyksessä 4 kuvan tai videon ympärille järjestettyinä. Se voi olla eri sommitelma. Liite skaalataan mahtumaan piirtämääsi laatikkoon, joten sekä vaaka- että pystykuvan on näytettävä siinä hyväksyttävältä.

**Mitä se kattaa:** koko näytön liitteen ja kysymysten välissä näytettävät liitteet.

Tässä vaihtoehdot ovat liitteen vasemmalla ja oikealla puolella:

![Kysymysnäyttö, jonka keskellä on kuva](/images/theme-design/frame4-question-attachment.png)

Pelkkä liite koko näytön kokoisena:

![Koko näytön liite](/images/theme-design/frame4-attachment-fullscreen.png)

### Kehys 6 - vastausnäyttö

**Mitä siinä on:** mikä vastaus oli oikea, miten huoneen vastaukset jakautuivat vaihtoehtojen kesken, ja palauterivi.

**Mitä se kattaa:** vastausnäytön avoimille kysymyksille ja liitteellisille kysymyksille.

Näyttö käy läpi kolme hetkeä. Ensin jakauma, jossa mitään ei ole vielä merkitty:

![Vastausnäyttö, jossa näkyy jakauma](/images/theme-design/frame5-answer-mc-spread.png)

Sitten oikea vaihtoehto merkitään rastilla ja väärät ristillä:

![Vastausnäyttö, jossa oikea vaihtoehto on paljastettu](/images/theme-design/frame5-answer-mc-reveal.png)

Ja jos kysymykseen liittyy selitys, grafiikan päälle putoaa kupla. Jätä sille tilaa - se laskeutuu kaiken suunnittelemasi päälle:

![Vastausnäyttö, jossa on selityskupla](/images/theme-design/frame5-answer-mc-explanation.png)

Pienellä ryhmällä sama hetki on kaavion sijaan pisteluettelo:

![Vastausnäyttö pienelle ryhmälle](/images/theme-design/frame5-answer-mc-small.png)

Avoimessa kysymyksessä kaavio näyttää, moniko pelaaja vastasi oikein:

![Vastausnäyttö avoimelle kysymykselle](/images/theme-design/frame5-answer-open.png)

### Kehys 7 - tilanne ja voittaja

**Mitä siinä on:** pelaajaluettelo, jossa on sijoitus, avatar, nimi ja pisteet. Toimita **pelaajarivi** erillisenä, uudelleenkäytettävänä elementtinä: sitä toistetaan oletuksena kuusi kertaa, enintään kymmenen.

**Mitä se kattaa:** tilanteen kierrosten välillä ja lopullisen voittajan.

Tilanne kierroksen jälkeen kuudella pelaajarivillä:

![Tilanne, jossa on kuusi pelaajariviä](/images/theme-design/frame6-roundoutro.png)

Loppulaskenta nimeää yhden pelaajan kerrallaan viimeisestä sijasta ensimmäiseen - sijoitus, pisteet ja joukkueen nimi valokeilassa. Tässä myös [lentäviä emojeja](#flying-emoji-land-on-top-of-everything) on eniten:

![Voittajan lähtölaskenta, jossa nimetään yksi pelaaja](/images/theme-design/frame6-winner-countdown.png)

![Lopputilanne](/images/theme-design/frame6-winner.png)

### Kehys 8 - kierroksen intro

**Mitä siinä on:** lyhyt ilmoitus kierroskategoriaa kohden. Kategorioita on kuusi: tiede ja tekniikka, luonto, viihde ja musiikki, urheilu, taide, historia.

**Mitä se kattaa:** kaikki kuusi kategoriaa. Yksi suunnitelma voi palvella useampaa niistä.

Tässä yksi sommitelma, jossa on muunnelma kutakin kategoriaa kohden:

![Kierroksen intro luonto-kategorialle](/images/theme-design/frame7-roundintro-nature.png)

![Kierroksen intro tiede-kategorialle](/images/theme-design/frame7-roundintro-science.png)

**Hahmo on valinnainen.** QuizWitzin vakioteemassa on hahmo, joka puhuu ja reagoi; [Emerald-teemassa](/docs/advanced/emerald-theme) sitä ei ole, ja hahmon pois jättäminen poistaa kalleimman animaatiotyön - huulisynkan, silmät, kädet.

Ilman hahmoa kierroksen introsta tulee graafinen, typografinen tai kuvituksellinen hetki. Kaksi lähestymistapaa pitää työmäärän kohtuullisena: yksi sommitelma, jossa on kategoriakohtainen väri- tai kuvakevariantti, tai yksi yleinen ilmoitus, jossa vain kierroksen nimi vaihtuu. Kuusi aidosti erilaista introa on paljon työtä muutaman sekunnin ruutuaikaa varten.

---

## Elementtiarkki

Kaksi elementtiryhmää yhdellä arkilla, kukin piirretty kerran ja käytetty kaikkialla uudelleen.

**Sisällön rakennuspalikat.** Nämä täyttävät yleisen kehyksen sisältöalueen. Sitä käyttävät näytöt kootaan näistä, joten se, mitä tähän piirrät, ratkaisee, miltä ne kaikki näyttävät:

- **paneeli**: täyttö, reunus, kulmien pyöristys - säiliö, jossa luettelo tai tekstilohko on
- **luettelorivi**: minkä tahansa luettelon toistuva yksikkö, omalla taustallaan tai ilman
- **erotin**: rivien välinen viiva silloin, kun paneelia ei ole
- **nimike-arvopari**: lyhyt nimike vasemmalla, arvo oikealla

**Ohjaimet.** Piirretään kerran, käytetään jokaisella näytöllä:

- **painike** neljässä tilassa: lepo, hover, painettu, pois käytöstä
- **oikein**- ja **väärin**-symbolit
- **vierityspalkki**, **valintaruutu**, **valintalista**
- mihin **QuizWitzin logo** sijoittuu

---

## Mitä on päätetty puolestasi

- **Pelaajien puhelimet.** Kiinteä HTML-asettelu.
- **Ne harvat asiat, jotka moottori piirtää itse** - pisteportaikon rivien väliset viivat, kysymysvalitsimen korostettu rivi, QR-koodi. Niiden värit tulevat kohdasta [Värit luettelona](#colour-as-a-list).
- **Mitkä näytöt käyttävät yleistä kehystä ja miten.**
- **Miten kuusi kategoriaa vastaavat kierrosten introjen grafiikkaa.** Tämä vastaavuus on määritysasetus, joten yhtä introa voidaan käyttää useille kategorioille.
- **Kaikki ajoitukset ja animaatioiden kestot.**
- **Ääni.** Teemalla voi olla omaa musiikkia ja ääniefektejä, mutta se on erillinen toimitus eikä osa suunnittelutoimeksiantoa.

---

## Suunnittelusäännöt

Mikään näistä ei rajoita visuaalista suunnitteluasi. Ne koskevat sitä, miten tiedosto rakennetaan.

### Muoto

- **1920 × 1080 pikseliä**, tarkalleen. Yksi kehys näyttöä kohden.
- Työskentele **vektoreina** aina kun voit. Kun käytät rasterigrafiikkaa (valokuvat, tekstuurit): vähintään 2× näyttökoko.
- Animate-dokumentti toimii nopeudella **24 kehystä sekunnissa**. Olennaista, jos toimitat liikeideoita.
- Jätä reunoille **5 %:n marginaali**, jossa ei ole olennaista tietoa. Projektorit rajaavat kuvaa.

### Tasorakenne - tärkein sääntö

**Kaikki, mikä voi liikkua, ilmestyä tai muuttaa arvoaan, on omalla nimetyllä tasollaan.** Mitään ei yhdistetä, mitään ei litistetä.

Käytännössä:

- neljä vastausvaihtoehtoa ovat neljä erillistä tasoa, eivät yksi
- ajastin on erillään taustasta
- painike ja sen teksti ovat kaksi elementtiä
- pelaajarivi on yksi ryhmä, jonka voi monistaa

Mitä saa yhdistää: puhtaasti koristeellisen taustagrafiikan, joka toimii yhtenä pysäytyskuvana.

Tämä on ainoa sääntö, jonka laiminlyönti todella tekee kipeää - grafiikka on silloin purettava osiin tai piirrettävä uudelleen, mikä on juuri se kustannus, jota tällä järjestelyllä pyritään välttämään.

### Efektit, jotka eivät säily

Moottori piirtää HTML5-canvakselle. Nämä on **poltettava kuvaan** tai jätettävä pois:

| Efekti                                                                        | Mitä tehdä sen sijaan        |
| ----------------------------------------------------------------------------- | ---------------------------- |
| Reaaliaikainen sumennus, varjostukset ja hehku suodattimina                   | Toimita ne grafiikkana       |
| Sekoitustilat (multiply, screen, overlay)                  | Muunna ne tasaiseksi väriksi |
| Tasoefektit ja säätötasot                                                     | Polta ne kuvaan              |
| Liukuvärit tekstin **sisällä** tai teksti, jossa on merkkikohtainen ääriviiva | Jätä ne pois                 |
| Maskit, jotka muuttuvat kehyksittäin                                          | Jätä ne pois                 |

Liukuvärit muodoissa ovat kunnossa. Läpinäkyvyys on kunnossa. Varjot kiinteänä grafiikkana ovat kunnossa.

### Miten teksti käyttäytyy

Tässä QuizWitzille suunnittelu eroaa eniten tavallisesta suunnittelutyöstä.

**Et määritä fonttikokoa. Piirrät laatikon.**

Kaiken tekstin piirtää reaaliajassa komponentti, joka saa kaksi asiaa: merkkijonon ja piirtämäsi suorakulmion. Sen jälkeen se etsii **suurimman fonttikoon, jolla merkkijono riveille rivitettynä vielä mahtuu laatikkoon**. Pitkä merkkijono pienenee mahtuakseen; lyhyt kasvaa, kunnes laatikko on täynnä.

![Valitsin, jossa kolme eripituista riviä saa kukin eri fonttikoon](/images/theme-design/frame1-general-multiquestion.png)

Kolme riviä, kolme identtistä laatikkoa - ja kolme täysin eri fonttikokoa, pelkästään siksi, että teksti on lyhyempi tai pidempi. ”Where is love” saa koko korkeuden; sen yläpuolella olevan kysymyksen on tyydyttävä kahteen pieneen riviin. Vasemmalla olevat nimikkeet käyttäytyvät samalla tavalla.

Tästä seuraa:

- **Sama kysymys näyttää erilaiselta toisessa pelissä.** Kuuden sanan kysymys näkyy suurena ja näytön täyttävänä; kolmenkymmenenviiden sanan kysymys näkyy pienenä viidellä rivillä, täsmälleen samassa laatikossa. Molempien on näytettävä hyvältä.
- **Suunnittele jokainen tekstilaatikko kahdesti.** Täytä se kerran hyvin lyhyellä ja kerran hyvin pitkällä esimerkillä ja tarkista, että sommitelma toimii molemmissa. Nyrkkisääntönä: vastausvaihtoehto on yhdestä noin kahdeksaan sanaa, kysymys viidestä neljäänkymmeneen sanaa, pelaajan nimi kahdesta kahteenkymmeneen merkkiä.
- **Älä luota kiinteään rivimäärään.** Otsikkoa, joka on ”aina yhdellä rivillä”, ei täällä ole olemassa.
- **Älä tasaa tekstiä optisesti minkään muun kanssa.** Teksti, jonka on oltava linjassa viivan tai muodon kanssa, siirtyy heti, kun se on lyhyempi tai pidempi. Käytä riittävän väljiä laatikoita ja tasausta (vasen, keskitetty, oikea) tarkkojen sijaintien sijaan.
- **Kaksitoista kieltä.** Saksan yhdyssanat ovat pitkiä, eikä unkari ole yhtään armollisempi. Laatikko, joka on tiukka englanniksi, putoaa saksaksi lukukelvottoman pieneen kokoon.
- **Tekstin sisällä voi olla emojeja.** Pelaajat valitsevat sellaisen joukkueensa nimen viereen, ja kysymys tai vaihtoehto voi sisältää emojin - joskus vaihtoehto on pelkkä emoji. Ne piirretään värillisinä, ja ne ovat ympäröiviä kirjaimia korkeampia.

**Mitä rakentamisessa on tiedettävä kustakin tekstilaatikosta:** missä se on, kuinka suuri se on, miten se on tasattu, mikä väri ja mikä fontti. Ei: minkä pistekoon.

**Voit hyödyntää tätä.** Suuri laatikko lyhyellä tekstillä muuttuu itsessään vahvaksi typografiseksi sommitelmaksi, ja tarkoituksella kapeaksi ja korkeaksi tehty laatikko pakottaa tekstin palstaksi. Käytä sovitusta suunnittelun keinona; älä vain suunnittele sitä vastaan.

### Ajastin - pakollinen, ja se on animaatio

**Jokaisella kysymysnäytöllä on ajastin**; huoneen on nähtävä, paljonko aikaa on jäljellä.

**Ajastin ei ole laskeva luku vaan animaatio, jonka toistokohtaa moottori siirtää.** Suunnittelet etenemisen ”täydestä” ”tyhjään” - tyhjenevän palkin, sulkeutuvan renkaan, tiimalasin, lyhenevän viivan. Moottori toistaa animaation täsmälleen sillä nopeudella, jolla viimeinen kehys osuu kysymyksen loppuun.

Tästä seuraa:

- **Kysymyksen kesto ei ole kiinteä.** Se määritetään visakohtaisesti - usein kahdestakymmenestä kolmeenkymmeneen sekuntia, mutta se voi olla lyhyempi tai pidempi. Animaatiotasi venytetään tai tiivistetään sopivaksi.
- **Ei numeroita eikä sekunnin välein tapahtuvia tikityksiä.** Ajastin, joka laskee ”20, 19, 18…”, lakkaa pitämästä paikkansa heti, kun kesto muuttuu.
- **Viimeiset sekunnit ovat pelin jännittävin hetki.** On hyvä, jos eteneminen muuttuu loppua kohden selkeämmäksi tai kiireellisemmäksi.
- **Luettavissa huoneen perältä** yhdellä silmäyksellä.
- **Useita ajastimia saa olla.** Sekä yläreunan palkkia että kysymyksen lähellä olevaa rengasta ohjataan, kunhan kummankin nimi on `timer`.

Toimita ajastin avainkehysten sarjana tai kuvauksena etenemisestä - ”palkki tyhjenee oikealta vasemmalle ja vaihtuu vihreästä punaiseksi” riittää.

### Lentävät emojit laskeutuvat kaiken päälle

Jokainen pelaaja valitsee liittyessään emojin, ja peli heittelee näitä emojeja näytön poikki. Moottori piirtää ne teeman yläpuolella olevalle tasolle. **Tässä ei ole sinulle mitään suunniteltavaa** - mutta on jotain, mikä suunnittelussa on otettava huomioon, sillä ne eivät ole harvinainen koriste.

Ne ilmestyvät kolmella hetkellä:

- **Kun pelaaja vastaa.** Hänen emojinsa nousee alareunasta satunnaisesta vaakasijainnista, kaartuu ylös ja putoaa takaisin kuvan ulkopuolelle.
- **Kun pelaaja sinkoaa emojin.** Pelaajat voivat singota emojinsa puhelimestaan; kulma ja nopeus tulevat pyyhkäisystä, ja emoji lähtee pyörien alareunan keskeltä.
- **Kun sijoitus paljastetaan loppulaskennassa.** Nimetyn pelaajan emojien ryöppy: kaksikymmentä tavallisesta sijoituksesta, viisikymmentä kolmannesta, seitsemänkymmentäviisi toisesta ja **sataviisikymmentä voittajalle.**

Mitä tämä tarkoittaa suunnittelulle:

- **Pidä tilanne- ja voittajanäyttöjen alin kolmannes vapaana kaikesta pienestä tai kriittisestä.** Loppulaskennan aikana siellä on todella ahdasta.
- **Oleta, että ne riitelevät palettisi kanssa.** Ne ovat täysvärisiä emojeja Unicode-taulukon joka kolkasta, eikä mikään teema hallitse niitä. Suunnittelu, joka pysyy koossa vain tiukalla värialueella, näyttää noina sekunteina sattumanvaraiselta.
- **Singotut emojit estetään, kun kuva tai video on näkyvissä**, joten liitenäytöt pysyvät siisteinä.
- **Koko tason voi kytkeä pois päältä pelikohtaisesti**, joten älä myöskään rakenna sommitelmaa, joka on riippuvainen niiden olemassaolosta.

### Fontit

- **Fonttien on oltava upotettavia.** Tarvitaan `.ttf`- tai `.otf`-tiedosto sekä lisenssi, joka sallii upottamisen sovellukseen. Fonttia, jonka lisenssi kattaa vain verkkofonttikäytön tai vain painotuotteet, ei voi käyttää. Tarkista tämä ennen kuin suunnittelet sillä; jälkikäteen korjaus on kallis.
- Epätavallisen suuria ylä- tai alapidennyksiä sisältäviä fontteja voidaan kompensoida, mutta mainitse asiasta, jos käytät sellaista.

### Värit luettelona

Teema lukee väriluettelon määritystiedostosta, ja pelaajien puhelimet muotoillaan samasta luettelosta. Toimita palettisi **nimettynä luettelona**, ei pelkästään grafiikassa käytettyinä väreinä:

| Missä                        | Värit                                                                                                                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Pelinäyttö**               | Pääväri, korostusväri, tausta, paneelin tai säiliön väri, ajastimen tausta, tekstin oletusväri, otsikkotekstin väri, kysymystekstin väri, painiketeksti, dialogi- ja selitysteksti, pelaajan nimen ja pisteiden teksti, oikein-väri, väärin-väri |
| **Neljä vastausvaihtoehtoa** | Kullekin vaihtoehdolle: taustaväri, reunuksen väri ja yksi tasainen väri puhelimia ja kaavioita varten                                                                                                                           |
| **Pelaajien puhelimet**      | Tausta, tekstin väri, ääriviivan väri, vaihtoehtojen ääriviivan väri sekä vastaussäiliön tausta- ja tekstiväri                                                                                                                                   |

Liukuvärit ovat pelinäytöllä sallittuja: anna ne kahtena heksa-arvona.

Muutamat värit ovat _ainoa_ tapa vaikuttaa osiin, jotka moottori piirtää itse, joten ne kannattaa päättää eikä jättää oletuksiksi:

- **erotin** - rivien väliset viivat silloin, kun paneelia ei ole, sekä pisteportaikossa
- kysymysvalitsimen rivin **aktiivinen**, **passiivinen** ja **valittu** tila
- **dialogin** teksti
- **QR-koodin etu- ja taustaväri**

Jos jätät ne pois, niiden tilalla käytetään sisäänrakennettuja oletuksia - valkoinen, harmaa, punainen, musta ja valkoinen - jotka harvoin sopivat suunnitteluun.

### QuizWitzin logo

Omissa suunnitelmissa on mukana QuizWitzin logo. Varaa sille paikka, jossa se ei ole suunnittelun tiellä.

---

## Mitä luovutetaan

### Lähdetiedosto - mieluiten Illustrator

Teema rakennetaan Adobe Animatessa, ja se, mitä Animate pystyy tuomaan, ratkaisee, kuinka suuri osa työstäsi säilyy luovutuksessa ehjänä:

| Työkalu                                          | Mitä tuonnissa tapahtuu                                                                                                                                                                                                                                                                            | Käytä sitä                                  |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate tuo sen suoraan ja muuntaa tasosi Animate-tasoiksi tai erillisiksi symboleiksi säilyttäen tasojen nimet ja jättäen vektorit muokattaviksi. Juuri tämä vaihe säästää grafiikan rakentamiselta uudelleen käsin.                                              | **Suositeltu** lopulliseen toimitukseen     |
| **Adobe Photoshop**                              | Tuodaan tasot ehjinä kuten Illustratorista, mutta tuloksena on rasteri eikä vektori.                                                                                                                                                                                               | Mahdollinen                                 |
| **Figma**                                        | Kaikki kulkee SVG- ja PNG-viennin kautta, ja juuri siinä tässä tarvittava tasorakenne katoaa. Jos käytät Figmaa, toimita **jokainen elementti erikseen SVG-muodossa** tiedostonimillä, jotka vastaavat tasojen nimiä, jotta rakenne voidaan koota uudelleen käsin. | Konseptivaiheeseen, jos olet siinä nopeampi |

Tiedostorakenne:

- Yksi piirtoalue näyttöä kohden, nimettynä yllä olevien kehysten mukaan.
- Uudelleenkäytettävät osat (painike, pelaajarivi, vastausvaihtoehto, ajastin) **symboleina** tai komponentteina, ei irrallisina kopioina.
- Tasojen nimet englanniksi ilman välilyöntejä: `question`, `option1`-`option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Värit nimettyinä väriruutuina ja teksti nimettyinä tyyleinä sen sijaan, että ne asetetaan kullekin objektille erikseen.

### Toimitettavien tarkistuslista

1. **Lähdetiedosto** yllä kuvatulla tavalla jäsenneltynä.
2. **Jokainen kehys PNG-kuvana**, 1920 × 1080 - malli siitä, miltä sen pitäisi näyttää. Kehyksestä 2 sekä versio asiakkaan logon kanssa että versio ilman sitä.
3. **Elementtiarkki** yhtenä piirtoalueena: [sisällön rakennuspalikat ja ohjaimet](#the-element-sheet).
4. **Jokainen erillinen grafiikkaelementti läpinäkyvänä PNG-kuvana 2×-koossa** yhdessä kansiossa, tiedostonimi tason nimen mukainen.
5. **Ajastin** avainkehyksinä tai kirjallisena kuvauksena etenemisestä.
6. **Fontit** `.ttf`- tai `.otf`-muodossa lisenssitodistuksen kanssa.
7. **Väriluettelo** kohdasta [Värit luettelona](#colour-as-a-list) heksa-arvoina.
8. **Puolen sivun muistiinpanot**: mikä idea on, miten vaihtoehtojen pitäisi ilmestyä, mikä liikkuu ja mikä pysyy paikallaan. Ei kymmenen sivun suunnitteluperustelua - teeman rakentajan on tiedettävä, mitä rakentaa. Liikeideat voi kuvailla tai toimittaa karkeana animaatioluonnoksena.

### Työjärjestys

1. **Kehys 4, kysymysnäyttö, yhdessä elementtiarkin kanssa.** Hyväksytä molemmat ennen muita. Yhdessä ne sisältävät ajastimen, vaihtoehdot, paneelin ja kaikki ohjaimet, joten ne ratkaisevat koko teeman tyylin.
2. **Kehykset 1-3.** Ne seuraavat luontevasti kahdesta ensimmäisestä.
3. **Kehykset 6-8** tulevat viimeisinä.

---

## Liite - symbolien nimet

Täydellisyyden vuoksi ja kaikille, jotka haluavat tietää tarkalleen, mihin heidän grafiikkansa päätyy. **Tätä ei tarvitse lukea työn tekemiseksi**; yllä olevat kahdeksan kehystä ja elementtiarkki riittävät. Näiden nimien käyttäminen tasojen niminä säästää yhden käännösvaiheen.

| Kehys                                              | Symbolin nimi                                                                                                                             | Pakolliset osat                                                                                                                                                                              |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Yleinen kehys            | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` valinnainen                                                                      | `placeholder` (sisältöalue); `title`-tekstilaatikko valinnainen                                                                                                           |
| 1b. Kysymysvalitsin, pitkä kysymys | `MultiQuestionScreen`, `LongQuestionScreen`; molemmat valinnaisia, oletuksena yleinen kehys                                               | valitsin: `questions`-paikkamerkki, `timer`; pitkä kysymys: `question`-paikkamerkki                                                                          |
| 2. Liittymisnäyttö          | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` valinnainen, `logo`-paikkamerkillä                                       | `instructions.line1`-`line5`, `connectedPlayers`; `qrCode`-paikkamerkki ja kehysnimike `showQrCode` valinnaisia                                                                              |
| 3. Odotusnäyttö             | `PendingScreen`; `PendingScreenWithLogo` valinnainen                                                                                      | `header.text`                                                                                                                                                                                |
| 4. Kysymysnäyttö            | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1`-`option4`, kehysnimikkeet `showOptions` ja `showFeedback`                                                                               |
| 5. Kysymys liitteen kanssa  | `QuestionScreenAttachment`                                                                                                                | kuten yllä sekä `attachment.placeholder`                                                                                                                                                     |
| 5b. Koko näytön liite              | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                |
| 6. Vastausnäyttö            | `AnswerPieScreen`; `AnswerPieScreenAttachment` valinnainen                                                                                | `option1`-`option4`, `answer.text`, `feedback.text`                                                                                                                                          |
| 6b. Avoimen kysymyksen vastaus     | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment`-muunnelmat valinnaisia                                                       | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                        |
| 7. Tilanne                  | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` ja `PlayerScoreNoImage` valinnaisia                             | `header.text`, `players`, `feedback.text` (`playAgain.text` valinnainen); rivillä: `position`, `name`, `score`, `avatar` valinnainen                      |
| 8. Kierroksen intro         | yksi tai useampi vapaasti nimetty symboli; määritystiedosto yhdistää kunkin kuudesta kategoriasta symboliin                               | -                                                                                                                                                                                            |
| -                                                  | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                           |
| -                                                  | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | ei tarvitse omaa grafiikkaa - kootaan siitä, mitä kehyksissäsi on                                                                                                                            |
| -                                                  | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | näytetään vain työpöytäsovelluksessa, ei live-visassa. Ei osa toimeksiantoa: ne otetaan teemapohjasta ja muotoillaan uudelleen taustallasi ja painikkeillasi |

Vakioteeman kierrosintrojen symbolien nimet ovat `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` ja `RoundIntroTedCultHist`; taide ja historia jakavat viimeisen. Nimien ”Ted” on jäänne alkuperäisen teeman hahmosta, eikä se tarkoita, että niissä pitäisi esiintyä hahmo.

Jokainen elementti, jonka perässä on `.text`, on sovitettu tekstilaatikko, kuten kohdassa [Miten teksti käyttäytyy](#how-text-behaves) on kuvattu: suorakulmio, jonka moottori täyttää itse. `timer`-elementti on movie clip, jolla on oma aikajanansa; moottori lukee sen kehysmäärän ja siirtää toistokohtaa suhteessa kuluneeseen aikaan enintään 24 kertaa sekunnissa.

### Mitä määritystiedosto ottaa suunnittelustasi

```json
{
  "fontFiles": { "<body font>": "fonts/body.ttf", "<heading font>": "fonts/heading.ttf" },
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "_container_": "#…", "_timerBackground_": "#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…", "player": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "optionColors": [ "#…", "#…", "#…", "#…" ],
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "remoteColors": {
    "background": "#…", "text": "#…", "outline": "#…",
    "options-outline": "#…", "container-background": "#…", "container-text": "#…"
  },
  "roundIntros": { "science": "<symbol>", "nature": "<symbol>", "entertainment": "<symbol>",
                   "sports": "<symbol>", "art": "<symbol>", "history": "<symbol>" },
  "overlay": "light | dark"
}
```

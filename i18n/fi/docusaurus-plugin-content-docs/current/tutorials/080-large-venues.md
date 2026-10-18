---
id: large-venues
title: Suuret tapahtumapaikat, valot ja ääni
---

# 🏟️ Suuret tapahtumapaikat, valot ja ääni

QuizWitz Live skaalautuu pubivisasta suuriin tapahtumapaikkoihin, joissa on satoja pelaajia. Tämä opas kertoo, mikä muuttuu, kun siirryt isommalle lavalle: verkko, ääni ja valojen (tai muun show-tekniikan) synkronointi pelin kanssa.

> 🧭 Jos QuizWitz Live on sinulle uusi, aloita [**visamestarin käynnistysoppaasta**](../quizmaster/002-startup.md).

---

## 🌐 Vakaa internetyhteys

Live-pelin kaikki osat viestivät keskenään palvelimiemme kautta reaaliajassa: pelinäyttö, Quizmaster-sovellus, tuomaristosovellus, ohjaamotyökalut ja jokaisen pelaajan laite. Vakaa internetyhteys on suuren tapahtuman tärkein vaatimus.

- Liitä pelinäytön tietokone ja kaikki ohjaamotietokoneet **verkkokaapelilla**. Älä luota näissä tapahtumapaikan wifiin tai mobiilitukiasemaan.
- Varmista, että pelaajilla on hyvä wifi- tai mobiiliverkon (4G/5G) kuuluvuus koko salissa. Täysi sali voi ylikuormittaa pienen wifi-verkon.
- Napsauta **Lataa visa** hyvissä ajoin ennen alkua. QuizWitz lataa etukäteen kaikki kuvat, äänet ja videot, joten liitteet toistuvat sujuvasti, kun visa on käynnissä.

---

## 🔊 Ääni: kaikki soi pelinäytön kautta

Pelinäyttö toistaa kaiken äänen: QuizWitzin musiikin ja äänitehosteet sekä jokaisen ääni- tai videoliitteen, jonka lisäät kysymyksiin, kierroksiin tai visaan (liittymisnäytön musiikki, kierroksen lopetusmusiikki ja niin edelleen). Kaikki on ajoitettu sen mukaan, mitä näytöllä tapahtuu.

Sinun tarvitsee siis liittää vain **pelinäytön tietokoneen äänilähtö** mikseriin tai PA-järjestelmään. Erillisiä äänicueita ei tarvitse käynnistää käsin.

- Säädä äänenvoimakkuutta pelin ohjauspalkin liukusäätimellä, tai mykistä sillä kaikki visan äänet.
- Jos haluat toistaa vain omaa ladattua ääntäsi, lisää pelilinkkiin `music=0` (katso [lisäparametrit](../advanced/020-advanced-parameters.md)). `connectMusic=0` sammuttaa vain liittymisnäytön musiikin.

---

## 💡 Valot: MIDI-ohjain

MIDI-ohjain osoitteessa [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) muuttaa pelin tapahtumat MIDI-nuoteiksi. Kytke nuotit valo-ohjelmistosi tai valopöytäsi cueihin, niin valot seuraavat peliä automaattisesti.

Käytämme sitä [QLC+](https://www.qlcplus.org/):n kanssa (ilmainen valo-ohjelmisto, joka ohjaa DMX-valaisimia), mutta se lähettää tavallista MIDIä, joten se toimii useimpien MIDI-tuloa tukevien valopöytien ja -ohjelmistojen sekä äänipöytien, videomiksereiden ja muun show-tekniikan kanssa.

### Yhdistäminen

1. Käynnistä QuizWitz Live -pelisi. Quizmaster-sovellus näyttää **ohjaamokoodin** visamestarikoodin ja tuomaristokoodin vieressä.
2. Avaa valojärjestelmääsi kytketyllä tietokoneella [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) **Google Chromessa**. Ohjain käyttää Web MIDIä, jota muut selaimet eivät välttämättä tue.
3. Salli MIDI-käyttö, kun Chrome kysyy sitä.
4. Syötä ohjaamokoodi ja napsauta **Connect**.
5. Valitse **Output**-MIDI-laite ja kanava (oletuksena kanava 1).

Jos valo-ohjelmistosi toimii samalla tietokoneella, käytä virtuaalista MIDI-porttia: macOS:ssä **IAC Driver**, Windowsissa esimerkiksi **loopMIDI**.

> ⚠️ Pidä ohjaimen välilehti auki koko pelin ajan. Jos suljet sen, MIDI-nuottien lähetys loppuu.

### Miten se toimii

Jokaisella pelin tapahtumalla on oma kiinteä MIDI-nuottinumeronsa. Kun tapahtuma sattuu, ohjain soittaa sen nuotin lähtökanavalla. Nuottinumero näkyy ohjaimen jokaisessa painikkeessa.

- **Paina painiketta** lähettääksesi sen nuotin käsin. Näin voit asettaa ja testata kytkennät ennen showta.
- Painike muuttuu hetkeksi **punaiseksi**, kun peli laukaisee sen.
- Useimmat tapahtumat lähetetään vain kerran peräkkäin: jos sama tapahtuma sattuu kahdesti peräkkäin, jälkimmäinen ohitetaan. Oikea vastaus ja väärä vastaus lähetetään joka kerta, joten voit välähdyttää valoja jokaisen paljastetun vastauksen kohdalla.
- **Feedback** (valinnainen): valitse MIDI-tulo ja kanava (oletuksena kanava 2). Valo-ohjelmistosi takaisin lähettämät nuotit sytyttävät vastaavat painikkeet vihreiksi, joten näet, mitkä cuet ovat aktiivisia.

### MIDI-nuotit

| Nuotti | Tapahtuma |
|---|---|
| 1 | Pelin intro |
| 2 | Pelin intro: pysäytys |
| 3 | Kierroksen intro |
| 4 | Kierroksen intro: pysäytys |
| 5 | Salamakierroksen intro |
| 6 | Salamakierroksen intro: pysäytys |
| 10 | Kysymys alkaa |
| 11 | Kysymys käynnissä |
| 12 | Kysymyksen ajastin käynnistyy |
| 13 | Kysymyksen ajastin pysähtyy |
| 14 | Kysymys valmis |
| 20 | Kysymyksen ajastin 25 %:ssa |
| 21 | Kysymyksen ajastin 33 %:ssa |
| 22 | Kysymyksen ajastin 50 %:ssa |
| 23 | Kysymyksen ajastin 66 %:ssa |
| 24 | Kysymyksen ajastin 75 %:ssa |
| 30 | Liite näytetään |
| 31 | Liite piilotetaan |
| 40 | Ennen kysymyksen tulosta |
| 41 | Kysymyksen tulos |
| 42 | Oikea vastaus paljastetaan |
| 43 | Väärä vastaus paljastetaan |
| 44 | Kysymyksen tulos: pysäytys |
| 45 | Kaikki vastasivat oikein |
| 46 | Kukaan ei vastannut oikein |
| 47 | Vain yksi oikea vastaus |
| 50 | Kierroksen tulos |
| 51 | Kierroksen tulos: pysäytys |
| 52 | Salamakierroksen tulos |
| 53 | Salamakierroksen tulos: pysäytys |
| 60 | Tauko |
| 61 | Tauko: pysäytys |
| 70 | Lopputulos |
| 71 | Lopputulos: sijoitus paljastetaan |
| 72 | Lopputulos: voittaja paljastetaan |
| 73 | Lopputulos: pysäytys |

### Valaistus kysymyskohtaisesti

Voit antaa jokaiselle kysymykselle oman valotunnelman. Avaa visaeditorissa kysymyksen asetukset ja lisää **Valaistus** (kohdassa *Esitys*). Kun kysymyksen ajastin käynnistyy, ohjain lähettää tunnelman nuotin. Kysymykset, joilla ei ole valotunnelmaa, lähettävät *Oletus*-nuotin, jotta valot voivat palata normaalitilaansa.

| Nuotti | Valaistus |
|---|---|
| 100 | Oletus |
| 101 | Lähtölaskenta |
| 102 | Diskobileet |
| 103 | Sota-alue |
| 104 | Punainen hälytys |
| 105 | Tähtiyö |
| 106 | Vankilapako |
| 107 | Vaaralliset aineet |
| 108 | Kodikas pinkki |
| 109 | Atlantis |
| 110 | Viidakko |
| 111 | Sininen valtameri |
| 112 | Keltainen valtameri |
| 113 | Vihreä valtameri |
| 114 | Violetti valtameri |
| 115 | Oranssi valtameri |
| 116 | Punainen valtameri |
| 117 | Punainen vastaan sininen |

Nimet ovat ehdotuksia: se, mitä kukin nuotti tekee, on sinun ja valokokoonpanosi päätettävissä.

---

## 🛠️ Lisää ohjaamotyökaluja

[**regie.catlab.eu**](https://regie.catlab.eu) tarjoaa lisää työkaluja suuriin tapahtumiin. Kaikki käyttävät ohjaamokoodia.

- **Teleprompteri** - toinen visamestarinäyttö automaattisella vierityksellä ja peilauksella
- **Ohjaajan näyttö** - lähetä viestejä visamestareille yhdelle tai useammalle lavamonitorille
- **OBS-ohjain** - vaihda OBS-näkymiä automaattisesti pelin aikana (katso [livelähetysvisa](040-livestreaming.md))
- **Lähtölaskenta-ajastin** - näytä QuizWitzin ajastimet erillisellä näytöllä
- **Kopionäyttö** - näytä kopio pelinäytöstä toisella monitorilla

---

## ✅ Esimerkkikokoonpano

- **Pelinäytön tietokone** - kytketty projektoriin tai LED-seinään ja PA-järjestelmään, verkkokaapelilla
- **Ohjaamotietokone** - MIDI-ohjain Chromessa, kytketty valojärjestelmääsi, verkkokaapelilla
- **Tabletti tai puhelin** - Quizmaster-sovellus
- **Kannettava tai tabletti** - tuomaristosovellus pisteiden säätämiseen ja pelin ohjaamiseen

> 💡 Tee täydellinen läpimeno tapahtumapaikalla ennen tapahtumaa, jotta voit testata valocuet, äänitasot ja verkon.

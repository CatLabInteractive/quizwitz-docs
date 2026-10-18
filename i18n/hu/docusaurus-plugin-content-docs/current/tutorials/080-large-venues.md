---
id: large-venues
title: Nagy helyszínek, világítás és hang
---

# 🏟️ Nagy helyszínek, világítás és hang

A QuizWitz Live a kocsmakvíztől egészen a több száz játékost befogadó nagy helyszínekig skálázható. Ez az útmutató bemutatja, mi változik, amikor nagyobb színpadra lépsz: a hálózat, a hang, és a világításod (vagy más show-technikád) szinkronizálása a játékkal.

> 🧭 Ha új vagy a QuizWitz Live-ban, kezdd a [**quizmaster indítási útmutatóval**](../quizmaster/002-startup.md).

---

## 🌐 Stabil internetkapcsolat

Egy élő játék minden része valós időben, a szervereinken keresztül kommunikál a többivel: a játékképernyő, a Quizmaster app, a zsűri app, a rendezői eszközök és minden játékos eszköze. Egy nagy eseményhez a stabil internetkapcsolat a legfontosabb követelmény.

- A játékképernyő számítógépét és az összes rendezői számítógépet **hálózati kábellel** csatlakoztasd. Ezeknél ne a helyszín wifijére vagy mobil hotspotra hagyatkozz.
- Győződj meg róla, hogy a játékosoknak az egész teremben jó wifi- vagy mobil (4G/5G) lefedettségük van. Egy telt ház túlterhelhet egy kis wifihálózatot.
- Kattints a **Kvíz betöltése** gombra jóval a kezdés előtt. A QuizWitz előre betölti az összes képet, hangot és videót, így a mellékletek zökkenőmentesen futnak, amikor a kvíz már megy.

---

## 🔊 Hang: minden a játékképernyőn keresztül szól

Minden hangot a játékképernyő játszik le: a QuizWitz zenéjét és hangeffektjeit, valamint minden hang- vagy videomellékletet, amelyet a kérdéseidhez, fordulóidhoz vagy a kvízedhez adsz (a csatlakozási képernyő zenéje, a forduló záró zenéje és így tovább). Minden ahhoz igazodik, ami a képernyőn történik.

Így csak a **játékképernyő számítógépének hangkimenetét** kell a keverőpultodhoz vagy a hangosításhoz csatlakoztatnod. Nincsenek külön hangok, amelyeket kézzel kellene elindítani.

- A játék vezérlősávjában lévő hangerő-csúszkával állíthatod be a hangerőt, vagy némíthatod el a kvíz összes hangját.
- Ha csak a saját feltöltött hanganyagaidat szeretnéd lejátszani, add hozzá a `music=0` paramétert a játék linkjéhez (lásd a [speciális paramétereket](../advanced/020-advanced-parameters.md)). A `connectMusic=0` csak a csatlakozási képernyő zenéjét kapcsolja ki.

---

## 💡 Világítás: a MIDI-vezérlő

A [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) címen elérhető MIDI-vezérlő a játék eseményeit MIDI-hangjegyekké alakítja. Rendeld hozzá ezeket a hangjegyeket a világítási szoftvered vagy pultod cue-jaihoz, és a fények automatikusan követik a játékot.

Mi a [QLC+](https://www.qlcplus.org/) programmal használjuk (ingyenes világítási szoftver, amely DMX-lámpákat vezérel), de sima MIDI-t küld, így a legtöbb MIDI-bemenetet fogadó világítási pulttal és szoftverrel működik, valamint keverőpultokkal, videokeverőkkel és más show-technikával is.

### Csatlakozás

1. Indítsd el a QuizWitz Live játékodat. A Quizmaster app a quizmaster kód és a zsűrikód mellett megjeleníti a **rendezői kódot** is.
2. A világítási rendszeredhez csatlakoztatott számítógépen nyisd meg a [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) oldalt **Google Chrome**-ban. A vezérlő Web MIDI-t használ, amelyet más böngészők nem feltétlenül támogatnak.
3. Engedélyezd a MIDI-hozzáférést, amikor a Chrome rákérdez.
4. Írd be a rendezői kódot, és kattints a **Connect** gombra.
5. Válaszd ki az **Output** MIDI-eszközt és a csatornát (alapértelmezés szerint 1. csatorna).

Ha a világítási szoftvered ugyanazon a számítógépen fut, használj virtuális MIDI-portot: macOS-en az **IAC Driver**-t, Windowson pedig egy olyan eszközt, mint a **loopMIDI**.

> ⚠️ A vezérlő lapját az egész játék alatt tartsd nyitva. Ha bezárod, a MIDI-hangjegyek küldése leáll.

### Hogyan működik

Minden játékeseménynek saját, rögzített MIDI-hangjegyszáma van. Amikor az esemény bekövetkezik, a vezérlő lejátssza ezt a hangjegyet a kimeneti csatornán. A hangjegy száma a vezérlő minden gombján látható.

- **Nyomj meg egy gombot**, hogy kézzel elküldd a hangjegyét. Ezzel a show előtt beállíthatod és tesztelheted a hozzárendeléseidet.
- Egy gomb egy pillanatra **pirosra** vált, amikor a játék aktiválja.
- A legtöbb esemény egymás után csak egyszer kerül elküldésre: ha ugyanaz az esemény kétszer egymás után következik be, a másodikat kihagyja. A helyes és a helytelen válasz mindig elküldésre kerül, így minden felfedett válasznál felvillanthatod a fényeket.
- **Feedback** (opcionális): válassz egy MIDI-bemenetet és csatornát (alapértelmezés szerint 2. csatorna). A világítási szoftvered által visszaküldött hangjegyek zölden kivilágítják a megfelelő gombokat, így láthatod, mely cue-k aktívak.

### MIDI-hangjegyek

| Hangjegy | Esemény |
|---|---|
| 1 | Játék intró |
| 2 | Játék intró: leállítás |
| 3 | Forduló intró |
| 4 | Forduló intró: leállítás |
| 5 | Villámkör intró |
| 6 | Villámkör intró: leállítás |
| 10 | Kérdés kezdete |
| 11 | Kérdés folyamatban |
| 12 | A kérdés időzítője elindul |
| 13 | A kérdés időzítője megáll |
| 14 | Kérdés vége |
| 20 | A kérdés időzítője 25%-nál |
| 21 | A kérdés időzítője 33%-nál |
| 22 | A kérdés időzítője 50%-nál |
| 23 | A kérdés időzítője 66%-nál |
| 24 | A kérdés időzítője 75%-nál |
| 30 | Melléklet megjelenítve |
| 31 | Melléklet elrejtve |
| 40 | A kérdés eredménye előtt |
| 41 | A kérdés eredménye |
| 42 | Helyes válasz felfedve |
| 43 | Helytelen válasz felfedve |
| 44 | A kérdés eredménye: leállítás |
| 45 | Mindenki helyesen válaszolt |
| 46 | Senki sem válaszolt helyesen |
| 47 | Csak egy helyes válasz |
| 50 | A forduló eredménye |
| 51 | A forduló eredménye: leállítás |
| 52 | A villámkör eredménye |
| 53 | A villámkör eredménye: leállítás |
| 60 | Szünet |
| 61 | Szünet: leállítás |
| 70 | Végeredmény |
| 71 | Végeredmény: egy helyezés felfedése |
| 72 | Végeredmény: a győztes felfedése |
| 73 | Végeredmény: leállítás |

### Világítás kérdésenként

Minden kérdésnek saját világítási hangulatot adhatsz. A kvízszerkesztőben nyisd meg a kérdés beállításait, és add hozzá a **Világítás** elemet (a *Prezentáció* alatt). Amikor a kérdés időzítője elindul, a vezérlő elküldi az adott hangulat hangjegyét. A világítási hangulat nélküli kérdések az *Alapértelmezett* hangjegyet küldik, így a fények visszatérhetnek a normál állapotukba.

| Hangjegy | Világítás |
|---|---|
| 100 | Alapértelmezett |
| 101 | Visszaszámlálás |
| 102 | Disco buli |
| 103 | Háborús zóna |
| 104 | Vörös riasztás |
| 105 | Csillagos éjszaka |
| 106 | Börtönszökés |
| 107 | Veszélyes anyagok |
| 108 | Barátságos rózsaszín |
| 109 | Atlantis |
| 110 | Dzsungel |
| 111 | Kék óceán |
| 112 | Sárga óceán |
| 113 | Zöld óceán |
| 114 | Lila óceán |
| 115 | Narancssárga óceán |
| 116 | Vörös óceán |
| 117 | Piros versus kék |

A nevek csak javaslatok: hogy az egyes hangjegyek mit csinálnak, az rajtad és a világítási beállításodon múlik.

---

## 🛠️ További rendezői eszközök

A [**regie.catlab.eu**](https://regie.catlab.eu) további eszközöket kínál nagy eseményekhez. Mindegyik a rendezői kódot használja.

- **Súgógép** - egy második quizmaster-képernyő automatikus görgetéssel és tükrözéssel
- **Rendezői képernyő** - üzenetek küldése a quizmastereknek egy vagy több színpadi monitorra
- **OBS-vezérlő** - OBS-jelenetek automatikus váltása a játék közben (lásd: [élő közvetítéses kvíz](040-livestreaming.md))
- **Visszaszámláló** - a QuizWitz időzítőinek megjelenítése egy külön képernyőn
- **Duplikált képernyő** - a játékképernyő másolatának megjelenítése egy másik monitoron

---

## ✅ Példa összeállítás

- **A játékképernyő számítógépe** - a projektorhoz vagy LED-falhoz és a hangosításhoz csatlakoztatva, hálózati kábellel
- **Rendezői számítógép** - a MIDI-vezérlő Chrome-ban, a világítási rendszeredhez csatlakoztatva, hálózati kábellel
- **Tablet vagy telefon** - a Quizmaster app
- **Laptop vagy tablet** - a zsűri app, a pontszámok módosításához és a játék vezérléséhez

> 💡 Az esemény előtt tarts egy teljes főpróbát a helyszínen, hogy kipróbálhasd a világítási cue-kat, a hangszinteket és a hálózatot.

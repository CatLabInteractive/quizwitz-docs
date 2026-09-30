---
id: theme-design-guide
title: Przewodnik po projektowaniu motywów
---

# Przewodnik po projektowaniu motywów

Strona [Motywy](/docs/advanced/theming) wyjaśnia, jak buduje się motyw QuizWitz: w Adobe Animate, z eksportem jako biblioteka CreateJS. Ta strona dotyczy etapu poprzedzającego - **projektowania** motywu.

Jest napisana dla grafika i zakłada, że projekt i produkcję w Animate wykonują różne osoby. Niewielu grafików pracuje jeszcze w Adobe Animate, więc zwykle grafik dostarcza grafikę, a ktoś inny składa motyw. To dobrze działa, o ile grafika trafia w formie, którą da się wykorzystać przy budowie. Ta strona opisuje tę formę i służy jednocześnie jako lista materiałów do dostarczenia, gdy prosisz grafika o wycenę.

Strona składa się z czterech części:

1. [Co projektujesz](#what-you-are-designing) - ekrany, które obejmuje motyw.
2. [Osiem plansz](#eight-frames-and-an-element-sheet) i [arkusz elementów](#the-element-sheet), po kolei, ze zrzutami ekranu.
3. [Zasady projektowania](#design-rules) - jak musi być zbudowany plik, żeby silnik mógł go użyć.
4. [Co przekazać](#what-to-hand-over) - plik źródłowy, materiały do dostarczenia i kolejność pracy.

:::tip
Jeśli chcesz zmienić tylko kolory, czcionki i tła, nic z tego nie jest ci potrzebne - dostosuj zamiast tego [motyw Emerald](/docs/advanced/emerald-theme).
:::

:::info[Zobacz, jak to działa]
Każdy opisany tu ekran można uruchomić na żywo, z przykładowymi danymi, w **testerze motywów** pod adresem [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html). Tester wczytuje motyw i oferuje menu ekranów testowych: pytania z załącznikiem i bez, rozkład odpowiedzi dla małej i dużej grupy, klasyfikację, intro rund, ekran dołączania z logo klienta i bez niego i tak dalej. Dodaj `?theme=emerald` do adresu, aby zobaczyć [motyw Emerald](/docs/advanced/emerald-theme). Osoba, która buduje motyw, używa tej samej strony, aby sprawdzać go w trakcie składania.
:::

---

## Co projektujesz

W grę QuizWitz gra jednocześnie cała sala i zawsze biorą w niej udział dwa ekrany:

- **Ekran gry** - projektor lub telewizor, 1920 × 1080. Pytania, odpowiedzi, rozkład odpowiedzi sali, klasyfikacja. To właśnie projektujesz.
- **Telefon każdego gracza**, na którym wpisuje on swoją odpowiedź. To strona internetowa o stałym układzie; jej wygląd wynika z twojej listy kolorów, a nie z twojego układu.

Motyw to kompletna szata graficzna ekranu gry: tło, typografia, kolory, sposób prezentacji pytania z czterema opcjami, sposób budowania klasyfikacji, sposób zapowiadania rundy.

---

## Osiem plansz i arkusz elementów

Gra ma dziesiątki różnych stanów ekranu, ale większość z nich to warianty tego samego układu. **Projektujesz osiem plansz i jeden arkusz elementów; reszta jest z nich wyprowadzana.** To nie jest droga na skróty - tak po prostu działa silnik. Ekran bez własnej grafiki korzysta z planszy ogólnej.

Arkusz jest równie ważny jak plansze: ekran zastępczy nadal potrzebuje wyposażenia w swoim obszarze treści - panelu, wiersza, linii.

| # | Plansza                                                       | Obejmuje też                                                          |
| - | ------------------------------------------------------------- | --------------------------------------------------------------------- |
| 1 | [Plansza ogólna](#frame-1---the-general-frame)                | Trzynaście stanów ekranu bez własnej grafiki                          |
| 2 | [Ekran dołączania](#frame-2---the-connect-screen)             | Narysuj go dwa razy: z logo klienta i bez niego       |
| 3 | [Ekran oczekiwania](#frame-3---the-waiting-screen)            | -                                                                     |
| 4 | [Ekran pytania](#frame-4---the-question-screen)               | -                                                                     |
| 5 | [Pytanie z załącznikiem](#frame-5---question-with-attachment) | Załącznik na pełnym ekranie i załączniki wyświetlane między pytaniami |
| 6 | [Ekran odpowiedzi](#frame-6---the-answer-screen)              | Ekran odpowiedzi dla pytań otwartych i dla pytań z załącznikiem       |
| 7 | [Klasyfikacja i zwycięzca](#frame-7---standings-and-winner)   | Klasyfikacja między rundami i ostateczny zwycięzca                    |
| 8 | [Intro rundy](#frame-8---the-round-intro)                     | Wszystkie sześć kategorii rund                                        |

:::note[O zrzutach ekranu]
Poniższe ekrany pochodzą z istniejącego motywu. Pokazują, **które elementy pojawiają się na każdym ekranie i kiedy**. Nie są wzorem stylu _ani_ układu: to, gdzie ten motyw umieszcza pytanie, opcje i licznik czasu, jest jego własną decyzją, a twój może wyglądać zupełnie inaczej.
:::

### Plansza 1 - plansza ogólna

**Co się na niej znajduje:** tło, tytuł w nagłówku i pusty obszar treści pod nim. To nie jest gotowa kompozycja, lecz rama, wewnątrz której buduje się resztę.

**Co obejmuje:** trzynaście stanów ekranu - wyjaśnienie rundy, klasyfikację, przedstawienie graczy, warianty wielokrotnego wyboru, długie pytania, ostrzeżenia dotyczące Seats, ustawienia. Każdy z nich wypełnia obszar treści na swój sposób elementami z [arkusza elementów](#the-element-sheet), więc plansza musi pomieścić rzeczy, które zupełnie nie są do siebie podobne. Wybór pytań i długie pytanie mogą dostać własną kompozycję, jeśli chcesz; w przeciwnym razie używają tej planszy.

Dwa momenty gry na tej samej planszy: wybór pytań i drabinka punktów.

![Plansza ogólna z trzywierszowym wyborem pytań](/images/theme-design/frame1-general-multiquestion.png)

![Plansza ogólna z pięciostopniową drabinką punktów](/images/theme-design/frame1-general-strikeladder.png)

Zobacz, jak mało mają ze sobą wspólnego. Wybór pytań umieszcza swoje trzy wiersze w panelu z obramowaniem; drabinka w ogóle nie ma panelu, tylko wiersze oddzielone cienkimi liniami. Łączy je tło i pas nagłówka nad nimi - wszystko poniżej należy do konkretnego ekranu i jest wypełniane przez grę, a nie przez ciebie.

Ten panel i te linie pochodzą z [arkusza elementów](#the-element-sheet), a nie z tej planszy. Zadaniem tej planszy jest je pomieścić: zaprojektuj obszar treści jako pustą, neutralną, obszerną strefę, która sprawdzi się zarówno z panelem z obramowaniem, jak i z samą listą czy tabelą wierszy. Tło, które jest pełne detali pośrodku, albo nagłówek, który działa tylko z panelem umieszczonym tuż pod nim - to w takich miejscach wszystko się sypie.

### Plansza 2 - ekran dołączania

**Co się na nim znajduje:** wszystko, czego sala potrzebuje, aby dołączyć.

- pięć wierszy instrukcji
- kod gry i kod QR, oba generowane przez silnik - zarezerwuj kwadrat na kod QR
- wiersz z liczbą połączonych graczy
- lista napływających graczy

**Narysuj go dwa razy:** z logo klienta obok kodu gry i bez niego, gdy ekran niesie sama grafika motywu.

![Ekran dołączania z logo klienta](/images/theme-design/frame2-connect.png)

![Ekran dołączania bez logo klienta](/images/theme-design/frame2-connect-nologo.png)

### Plansza 3 - ekran oczekiwania

**Co się na nim znajduje:** prawie nic - własne logo quizu albo grafika motywu.

Z ekranem dołączania łączy go tylko tło, więc zaprojektuj go jako osobną kompozycję. Jest wyświetlany, gdy quizmaster czyta pytanie na głos, przez co pozostaje na ekranie dłużej niż prawie cokolwiek innego w grze. Zasługuje na więcej uwagi, niż zwykle poświęca się pustemu ekranowi.

![Ekran oczekiwania](/images/theme-design/frame2-pending.png)

### Plansza 4 - ekran pytania

**Co się na nim znajduje:** pytanie, licznik czasu, cztery opcje odpowiedzi i wiersz informacji zwrotnej. Na ten ekran sala patrzy najdłużej. Pamiętaj, że opcja może składać się wyłącznie z emoji:

![Ekran pytania z czterema opcjami tekstowymi](/images/theme-design/frame3-question-options.png)

![Ekran pytania z flagami jako opcjami odpowiedzi](/images/theme-design/frame3-question-emoji.png)

Pytanie bez opcji - gracze wpisują odpowiedź na telefonie. Ekran jest prawie pusty, a głównym elementem staje się licznik czasu:

![Pytanie otwarte z samym pytaniem i dużym licznikiem czasu](/images/theme-design/frame3-question-open.png)

Moment, w którym kończy się czas. Na ekranie pojawia się dymek z informacją zwrotną, a licznik czasu jest pusty:

![Ekran pytania w stanie „koniec czasu”](/images/theme-design/frame3-question-timeout.png)

### Plansza 5 - pytanie z załącznikiem

**Co się na niej znajduje:** te same elementy co na planszy 4, rozmieszczone wokół obrazu lub filmu. Może to być inna kompozycja. Załącznik jest skalowany tak, aby zmieścił się w narysowanym przez ciebie polu, więc zarówno poziomy, jak i pionowy obraz muszą w nim wyglądać przyzwoicie.

**Co obejmuje:** załącznik na pełnym ekranie i załączniki wyświetlane między pytaniami.

Tutaj z opcjami po lewej i prawej stronie załącznika:

![Ekran pytania z obrazem pośrodku](/images/theme-design/frame4-question-attachment.png)

Sam załącznik, wypełniający ekran:

![Załącznik na pełnym ekranie](/images/theme-design/frame4-attachment-fullscreen.png)

### Plansza 6 - ekran odpowiedzi

**Co się na nim znajduje:** która odpowiedź była poprawna, jak odpowiedzi sali rozłożyły się na opcje oraz wiersz informacji zwrotnej.

**Co obejmuje:** ekran odpowiedzi dla pytań otwartych i dla pytań z załącznikiem.

Ekran przechodzi przez trzy momenty. Najpierw rozkład odpowiedzi, jeszcze bez żadnych oznaczeń:

![Ekran odpowiedzi z rozkładem odpowiedzi](/images/theme-design/frame5-answer-mc-spread.png)

Następnie poprawna opcja zostaje zaznaczona, a błędne przekreślone:

![Ekran odpowiedzi z odkrytą poprawną opcją](/images/theme-design/frame5-answer-mc-reveal.png)

A jeśli pytanie ma wyjaśnienie, na grafikę opada dymek. Zostaw na niego miejsce - ląduje on na wierzchu tego, co zaprojektujesz:

![Ekran odpowiedzi z dymkiem wyjaśnienia](/images/theme-design/frame5-answer-mc-explanation.png)

Przy małej grupie ten sam moment to lista wyników, a nie wykres:

![Ekran odpowiedzi dla małej grupy](/images/theme-design/frame5-answer-mc-small.png)

W pytaniu otwartym wykres pokazuje, ilu graczy odpowiedziało poprawnie:

![Ekran odpowiedzi dla pytania otwartego](/images/theme-design/frame5-answer-open.png)

### Plansza 7 - klasyfikacja i zwycięzca

**Co się na niej znajduje:** lista graczy z pozycją, awatarem, nazwą i wynikiem. Dostarcz **wiersz gracza** jako osobny element wielokrotnego użytku: domyślnie powtarza się sześć razy, maksymalnie dziesięć.

**Co obejmuje:** klasyfikację między rundami i ostatecznego zwycięzcę.

Klasyfikacja po rundzie, z sześcioma wierszami graczy:

![Klasyfikacja z sześcioma wierszami graczy](/images/theme-design/frame6-roundoutro.png)

Końcowe odliczanie przedstawia graczy po jednym, od ostatniego miejsca do pierwszego - miejsce, wynik i nazwa drużyny w centrum uwagi. Tu też [latających emoji](#flying-emoji-land-on-top-of-everything) jest najwięcej:

![Odliczanie zwycięzców z nazwą jednego gracza](/images/theme-design/frame6-winner-countdown.png)

![Klasyfikacja końcowa](/images/theme-design/frame6-winner.png)

### Plansza 8 - intro rundy

**Co się na niej znajduje:** krótka zapowiedź dla każdej kategorii rundy. Jest sześć kategorii: nauka i technika, przyroda, rozrywka i muzyka, sport, sztuka, historia.

**Co obejmuje:** wszystkie sześć kategorii. Jeden projekt może obsłużyć kilka z nich.

Tutaj jedna kompozycja z wariantem dla każdej kategorii:

![Intro rundy dla kategorii przyroda](/images/theme-design/frame7-roundintro-nature.png)

![Intro rundy dla kategorii nauka](/images/theme-design/frame7-roundintro-science.png)

**Postać jest opcjonalna.** Standardowy motyw QuizWitz ma postać, która mówi i reaguje; [motyw Emerald](/docs/advanced/emerald-theme) jest jej pozbawiony, a rezygnacja z niej usuwa najdroższą część pracy nad animacją - synchronizację ust, oczy, ręce.

Bez postaci intro rundy staje się momentem graficznym, typograficznym lub ilustracyjnym. Dwa podejścia pozwalają utrzymać nakład pracy w rozsądnych granicach: jedna kompozycja z wariantem koloru lub ikony dla każdej kategorii albo jedna uniwersalna zapowiedź, w której zmienia się tylko nazwa rundy. Sześć naprawdę różnych intro to dużo pracy jak na kilka sekund na ekranie.

---

## Arkusz elementów

Dwie grupy elementów na jednym arkuszu, każdy narysowany raz i używany wszędzie.

**Elementy składowe treści.** Wypełniają obszar treści planszy ogólnej. Ekrany, które korzystają z tej planszy, są składane z tych elementów, więc to, co tu narysujesz, decyduje o wyglądzie ich wszystkich:

- **panel**: wypełnienie, obramowanie, promień zaokrąglenia rogów - pojemnik, w którym znajduje się lista lub blok tekstu
- **wiersz listy**: powtarzalna jednostka każdej listy, z własnym tłem lub bez
- **separator**: linia między wierszami, tam gdzie nie ma panelu
- **para etykieta-wartość**: krótka etykieta po lewej, wartość po prawej

**Kontrolki.** Rysowane raz, używane na każdym ekranie:

- **przycisk** w czterech stanach: spoczynek, najechanie, wciśnięcie, nieaktywny
- symbole **dobrze** i **źle**
- **pasek przewijania**, **pole wyboru**, **lista rozwijana**
- miejsce, w którym znajduje się **logo QuizWitz**

---

## Co zostało ustalone za ciebie

- **Telefony graczy.** Stały układ HTML.
- **Kilka rzeczy, które silnik rysuje sam** - linie między wierszami na drabince punktów, wyróżniony wiersz w wyborze pytań, kod QR. Ich kolory pochodzą z sekcji [Kolory jako lista](#colour-as-a-list).
- **Które ekrany korzystają z planszy ogólnej i w jaki sposób.**
- **Jak sześć kategorii jest przypisanych do grafik intro rundy.** To przypisanie jest ustawieniem konfiguracji, więc jedno intro można wykorzystać dla kilku kategorii.
- **Wszystkie czasy i długości animacji.**
- **Dźwięk.** Motyw może mieć własną muzykę i efekty dźwiękowe, ale to osobny materiał, który nie jest częścią briefu projektowego.

---

## Zasady projektowania

Żadna z nich nie ogranicza twojego projektu wizualnego. Dotyczą tego, jak zbudowany jest plik.

### Format

- **1920 × 1080 pikseli**, dokładnie. Jedna plansza na ekran.
- Pracuj **wektorowo**, gdzie tylko się da. Tam, gdzie używasz grafiki rastrowej (zdjęcia, tekstury): co najmniej 2× rozmiar wyświetlania.
- Dokument Animate działa z prędkością **24 klatek na sekundę**. Istotne, jeśli dostarczasz pomysły na ruch.
- Zostaw przy krawędziach **5% marginesu** wolnego od istotnych informacji. Projektory przycinają obraz.

### Struktura warstw - zasada, która liczy się najbardziej

**Wszystko, co może się poruszać, pojawiać lub zmieniać wartość, znajduje się na własnej, nazwanej warstwie.** Nic nie jest scalone ani spłaszczone.

W praktyce:

- cztery opcje odpowiedzi to cztery osobne warstwy, a nie jedna
- licznik czasu jest oddzielony od tła
- przycisk i jego etykieta to dwa elementy
- wiersz gracza to jedna grupa, którą można powielić

Co można scalić: czysto dekoracyjną grafikę tła, która działa jako pojedynczy nieruchomy obraz.

To jedyna zasada, której nieprzestrzeganie naprawdę boli - grafikę trzeba wtedy rozbierać na części lub rysować od nowa, a to dokładnie ten koszt, którego ten podział pracy ma pozwolić uniknąć.

### Efekty, które nie przetrwają

Silnik rysuje na kanwie HTML5. Te efekty trzeba **wtopić w obraz** albo pominąć:

| Efekt                                                                | Co zrobić zamiast tego       |
| -------------------------------------------------------------------- | ---------------------------- |
| Rozmycie na żywo, cienie i poświata jako filtry                      | Dostarcz je jako grafikę     |
| Tryby mieszania (mnożenie, ekran, nakładka)       | Zamień je na jednolity kolor |
| Efekty warstw i warstwy dopasowania                                  | Wtop je w obraz              |
| Gradienty **wewnątrz** tekstu lub tekst z konturem dla każdego znaku | Pomiń je                     |
| Maski zmieniające się w każdej klatce                                | Pomiń je                     |

Gradienty w kształtach są w porządku. Przezroczystość jest w porządku. Cienie jako stała grafika są w porządku.

### Jak zachowuje się tekst

Tu projektowanie dla QuizWitz najbardziej różni się od zwykłej pracy projektowej.

**Nie ustawiasz rozmiaru czcionki. Rysujesz pole.**

Cały tekst jest rysowany na żywo przez komponent, który otrzymuje dwie rzeczy: ciąg znaków i narysowany przez ciebie prostokąt. Następnie znajduje **największy rozmiar czcionki, przy którym ten tekst, podzielony na wiersze, wciąż mieści się w polu**. Długi tekst się zmniejsza, aby się zmieścić; krótki rośnie, aż wypełni pole.

![Wybór pytań, w którym trzy wiersze o różnej długości mają różne rozmiary czcionki](/images/theme-design/frame1-general-multiquestion.png)

Trzy wiersze, trzy identyczne pola - i trzy zupełnie różne rozmiary czcionki, tylko dlatego, że tekst jest krótszy lub dłuższy. „Where is love” zajmuje całą wysokość; pytanie nad nim musi się zadowolić dwoma małymi wierszami. Etykiety po lewej zachowują się tak samo.

Co z tego wynika:

- **To samo pytanie wygląda inaczej w innej grze.** Pytanie z sześciu słów jest duże i wypełnia ekran; pytanie z trzydziestu pięciu słów jest małe i zajmuje pięć wierszy, w dokładnie tym samym polu. Oba muszą wyglądać dobrze.
- **Projektuj każde pole tekstowe dwa razy.** Wypełnij je raz bardzo krótkim przykładem, a raz bardzo długim, i sprawdź, czy kompozycja trzyma się w obu przypadkach. Orientacyjnie: opcja odpowiedzi ma od jednego do około ośmiu słów, pytanie od pięciu do czterdziestu, a nazwa gracza od dwóch do dwudziestu znaków.
- **Nie licz na stałą liczbę wierszy.** Tytuł, który jest „zawsze w jednym wierszu”, tutaj nie istnieje.
- **Nie wyrównuj tekstu optycznie do niczego innego.** Tekst, który ma się zgadzać z linią lub kształtem, rozjedzie się, gdy tylko będzie krótszy lub dłuższy. Zamiast dokładnych pozycji używaj wystarczająco obszernych pól i wyrównania (do lewej, do środka, do prawej).
- **Dwanaście języków.** Niemieckie złożenia są długie, a węgierski wcale nie jest łaskawszy. Pole, które jest ciasne po angielsku, po niemiecku spada do nieczytelnie małego rozmiaru.
- **W tekście mogą pojawiać się emoji.** Gracze wybierają je obok nazwy drużyny, a pytanie lub opcja może zawierać emoji - czasem opcja to wyłącznie emoji. Są rysowane w kolorze i są wyższe niż otaczające je litery.

**Co przy budowie trzeba wiedzieć o każdym polu tekstowym:** gdzie jest, jak jest duże, jak jest wyrównane, jaki ma kolor i jaką czcionkę. Nie: w jakim rozmiarze w punktach.

**Możesz to wykorzystać.** Duże pole z krótkim tekstem samo w sobie staje się mocną kompozycją typograficzną, a pole celowo wąskie i wysokie wymusza ułożenie tekstu w kolumnie. Wykorzystaj dopasowywanie jako środek projektowy; tylko nie projektuj wbrew niemu.

### Licznik czasu - obowiązkowy i jest animacją

**Każdy ekran pytania ma licznik czasu**; sala musi widzieć, ile czasu zostało.

**Licznik czasu to nie odliczająca liczba, lecz animacja, której głowicą odtwarzania steruje silnik.** Projektujesz przejście od „pełnego” do „pustego” - opróżniający się pasek, zamykający się pierścień, klepsydrę, kurczącą się linię. Silnik odtwarza tę animację dokładnie z taką prędkością, aby ostatnia klatka zbiegła się z końcem pytania.

Co z tego wynika:

- **Czas trwania pytania nie jest stały.** Ustawia się go dla każdego quizu - często od dwudziestu do trzydziestu sekund, ale może być krótszy lub dłuższy. Twoja animacja jest rozciągana lub skracana, aby pasowała.
- **Żadnych liczb ani tyknięć co sekundę.** Licznik odliczający „20, 19, 18…” przestaje być prawdziwy, gdy tylko zmieni się czas trwania.
- **Ostatnie sekundy to najbardziej napięty moment gry.** Pomaga, jeśli przebieg staje się pod koniec wyraźniejszy lub bardziej naglący.
- **Czytelny z końca sali**, na pierwszy rzut oka.
- **Dozwolonych jest kilka liczników czasu.** Pasek u góry i pierścień przy pytaniu są sterowane jednocześnie, o ile każdy z nich nazywa się `timer`.

Dostarcz licznik czasu jako serię klatek kluczowych lub jako opis przebiegu - „pasek opróżnia się od prawej do lewej i zmienia kolor z zielonego na czerwony” wystarczy.

### Latające emoji lądują na wierzchu wszystkiego

Każdy gracz wybiera emoji przy dołączaniu, a gra rzuca te emoji po ekranie. Rysuje je silnik na warstwie nad motywem. **Nie ma tu nic do zaprojektowania** - ale jest coś, co trzeba uwzględnić w projekcie, bo nie są one rzadkim ozdobnikiem.

Pojawiają się w trzech momentach:

- **Gdy gracz odpowiada.** Jego emoji wznosi się od dolnej krawędzi w losowym miejscu w poziomie, zatacza łuk i spada z powrotem poza kadr.
- **Gdy gracz je rzuca.** Gracze mogą rzucać swoje emoji z telefonu; kąt i prędkość zależą od przesunięcia palcem, a emoji startuje od środka dolnej krawędzi, obracając się.
- **Gdy w końcowym odliczaniu zostaje odkryte miejsce.** Wybuch emoji wymienionego gracza: dwadzieścia za zwykłe miejsce, pięćdziesiąt za trzecie, siedemdziesiąt pięć za drugie i **sto pięćdziesiąt dla zwycięzcy.**

Co to oznacza dla projektu:

- **Dolną jedną trzecią ekranów klasyfikacji i zwycięzcy zostaw wolną od wszystkiego, co małe lub istotne.** Podczas odliczania robi się tam naprawdę tłoczno.
- **Załóż, że będą gryzły się z twoją paletą.** To pełnokolorowe emoji z każdego zakątka tablicy Unicode i żaden motyw nad nimi nie panuje. Projekt, który trzyma się w całość tylko w wąskiej gamie kolorów, przez te kilka sekund będzie wyglądał przypadkowo.
- **Rzucanie emoji jest wyłączone, gdy wyświetlany jest obraz lub film**, więc ekrany załączników pozostają czyste.
- **Całą warstwę można wyłączyć dla danej gry**, więc nie buduj też kompozycji, która zależy od ich obecności.

### Czcionki

- **Czcionki muszą dać się osadzić.** Potrzebny jest plik `.ttf` lub `.otf` oraz licencja pozwalająca na osadzenie w aplikacji. Czcionki licencjonowanej tylko jako czcionka internetowa lub tylko do druku nie można użyć. Sprawdź to, zanim zaczniesz z nią projektować; późniejsza poprawka jest kosztowna.
- Czcionki z nietypowo dużymi wydłużeniami górnymi lub dolnymi można skompensować, ale zaznacz to, jeśli jej używasz.

### Kolory jako lista

Motyw odczytuje listę kolorów z pliku konfiguracyjnego, a telefony graczy są stylizowane na podstawie tej samej listy. Dostarcz swoją paletę jako **listę z nazwami**, a nie tylko jako kolory w grafice:

| Gdzie                       | Kolory                                                                                                                                                                                                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ekran gry**               | Kolor główny, kolor akcentu, tło, kolor panelu lub pojemnika, tło licznika czasu, domyślny kolor tekstu, kolor tekstu nagłówka, kolor tekstu pytania, tekst przycisków, tekst okien dialogowych i wyjaśnień, tekst nazwy i wyniku gracza, kolor dla poprawnej odpowiedzi, kolor dla błędnej odpowiedzi |
| **Cztery opcje odpowiedzi** | Dla każdej opcji: kolor tła, kolor obramowania i jeden jednolity kolor dla telefonów i wykresów                                                                                                                                                                                        |
| **Telefony graczy**         | Tło, kolor tekstu, kolor konturu, kolor konturu opcji oraz kolor tła i tekstu pojemnika na odpowiedź                                                                                                                                                                                                   |

Na ekranie gry dozwolone są gradienty: podaj je jako dwie wartości szesnastkowe.

Kilka kolorów to _jedyny_ sposób wpływania na części, które silnik rysuje sam, więc warto je świadomie wybrać, zamiast zostawiać wartości domyślne:

- **separator** - linie między wierszami tam, gdzie nie ma panelu, oraz na drabince punktów
- stany **aktywny**, **nieaktywny** i **wybrany** wiersza w wyborze pytań
- tekst **okien dialogowych**
- **przód i tył kodu QR**

Jeśli je pominiesz, zostaną użyte wbudowane wartości domyślne - biały, szary, czerwony, czarny i biały - które rzadko pasują do projektu.

### Logo QuizWitz

Własne projekty zawierają logo QuizWitz. Zarezerwuj dla niego miejsce, w którym nie będzie przeszkadzać w projekcie.

---

## Co przekazać

### Plik źródłowy - preferowany Illustrator

Motyw jest budowany w Adobe Animate, a to, co Animate potrafi zaimportować, decyduje o tym, jaka część twojej pracy przetrwa przekazanie w nienaruszonym stanie:

| Narzędzie                                        | Co dzieje się przy imporcie                                                                                                                                                                                                                                                                               | Do czego go używać                              |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate importuje go bezpośrednio i zamienia twoje warstwy na warstwy Animate lub osobne symbole, zachowując nazwy warstw i pozostawiając wektory edytowalne. To właśnie ten krok oszczędza ręcznego odtwarzania grafiki.                                                 | **Preferowany** do ostatecznego materiału       |
| **Adobe Photoshop**                              | Importuje się z nienaruszonymi warstwami, tak jak Illustrator, ale daje grafikę rastrową zamiast wektorowej.                                                                                                                                                                              | Możliwy                                         |
| **Figma**                                        | Wszystko przechodzi przez eksport do SVG i PNG, a właśnie tam traci się potrzebną tutaj strukturę warstw. Jeśli jednak używasz Figmy, dostarcz **każdy element osobno jako SVG**, z nazwami plików zgodnymi z nazwami warstw, aby strukturę można było odtworzyć ręcznie. | Faza koncepcji, jeśli pracujesz w niej szybciej |

Struktura pliku:

- Jeden obszar roboczy na ekran, nazwany zgodnie z powyższymi planszami.
- Części wielokrotnego użytku (przycisk, wiersz gracza, opcja odpowiedzi, licznik czasu) jako **symbole** lub komponenty, a nie jako luźne kopie.
- Nazwy warstw po angielsku, bez spacji: `question`, `option1` do `option4`, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Kolory jako nazwane próbki, a tekst jako nazwane style, zamiast ustawiania ich na każdym obiekcie osobno.

### Lista materiałów do dostarczenia

1. **Plik źródłowy**, zbudowany jak opisano powyżej.
2. **Każda plansza jako PNG**, 1920 × 1080 - wzór tego, jak ma wyglądać. Dla planszy 2 zarówno wersja z logo klienta, jak i bez niego.
3. **Arkusz elementów** jako jeden obszar roboczy: [elementy składowe treści i kontrolki](#the-element-sheet).
4. **Każdy osobny element graficzny jako przezroczysty PNG w rozdzielczości 2×**, w jednym folderze, z nazwą pliku zgodną z nazwą warstwy.
5. **Licznik czasu** jako klatki kluczowe lub pisemny opis przebiegu.
6. **Czcionki** jako `.ttf` lub `.otf`, z potwierdzeniem licencji.
7. **Lista kolorów** z sekcji [Kolory jako lista](#colour-as-a-list), jako wartości szesnastkowe.
8. **Pół strony notatek**: na czym polega pomysł, jak mają pojawiać się opcje, co się porusza, a co pozostaje nieruchome. Nie dziesięciostronicowe uzasadnienie projektu - osoba budująca motyw musi wiedzieć, co ma zbudować. Pomysły na ruch można opisać lub dostarczyć jako szkicowy animatik.

### Kolejność pracy

1. **Plansza 4, ekran pytania, razem z arkuszem elementów.** Uzyskaj akceptację obu przed resztą. Razem zawierają licznik czasu, opcje, panel i wszystkie kontrolki, więc przesądzają o stylu całego motywu.
2. **Plansze od 1 do 3.** Wynikają naturalnie z dwóch pierwszych.
3. **Plansze od 6 do 8** powstają na końcu.

---

## Dodatek - nazwy symboli

Dla porządku i dla każdego, kto chce dokładnie wiedzieć, gdzie trafia jego grafika. **Nie musisz tego czytać, żeby wykonać pracę**; osiem plansz i powyższy arkusz elementów wystarczą. Używanie tych nazw jako nazw warstw oszczędza krok tłumaczenia.

| Plansza                                          | Nazwa symbolu                                                                                                                             | Wymagane części                                                                                                                                                                                  |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Plansza ogólna         | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` opcjonalnie                                                                      | `placeholder` (obszar treści); pole tekstowe `title` opcjonalnie                                                                                                              |
| 1b. Wybór pytań, długie pytanie  | `MultiQuestionScreen`, `LongQuestionScreen`; oba opcjonalne, w razie braku używana jest plansza ogólna                                    | wybór pytań: `questions` placeholder, `timer`; długie pytanie: `question` placeholder                                                                            |
| 2. Ekran dołączania       | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` opcjonalnie, z placeholderem `logo`                                      | `instructions.line1` do `line5`, `connectedPlayers`; placeholder `qrCode` z etykietą klatki `showQrCode` opcjonalnie                                                                             |
| 3. Ekran oczekiwania      | `PendingScreen`; `PendingScreenWithLogo` opcjonalnie                                                                                      | `header.text`                                                                                                                                                                                    |
| 4. Ekran pytania          | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` do `option4`, etykiety klatek `showOptions` i `showFeedback`                                                                                |
| 5. Pytanie z załącznikiem | `QuestionScreenAttachment`                                                                                                                | jak wyżej, plus `attachment.placeholder`                                                                                                                                                         |
| 5b. Załącznik na pełnym ekranie  | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                    |
| 6. Ekran odpowiedzi       | `AnswerPieScreen`; `AnswerPieScreenAttachment` opcjonalnie                                                                                | `option1` do `option4`, `answer.text`, `feedback.text`                                                                                                                                           |
| 6b. Odpowiedź na pytanie otwarte | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; warianty `…Attachment` opcjonalnie                                                         | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                            |
| 7. Klasyfikacja           | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` i `PlayerScoreNoImage` opcjonalnie                              | `header.text`, `players`, `feedback.text` (`playAgain.text` opcjonalnie); w wierszu: `position`, `name`, `score`, `avatar` opcjonalnie                        |
| 8. Intro rundy            | jeden lub więcej symboli o dowolnej nazwie; plik konfiguracyjny przypisuje każdą z sześciu kategorii do symbolu                           | -                                                                                                                                                                                                |
| -                                                | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                               |
| -                                                | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | nie potrzebują własnej grafiki - są budowane z tego, co pojawia się na twoich planszach                                                                                                          |
| -                                                | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | wyświetlane tylko w aplikacji desktopowej, a nie w quizie na żywo. Nie są częścią briefu: są brane z szablonu motywu i dostosowywane do twojego tła i przycisków |

Symbole intro rundy w standardowym motywie nazywają się `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` i `RoundIntroTedCultHist`; sztuka i historia korzystają wspólnie z ostatniego. „Ted” w tych nazwach to pozostałość po postaci z oryginalnego motywu i nie oznacza, że postać musi się w nich pojawiać.

Każdy element z `.text` na końcu nazwy to dopasowywane pole tekstowe, opisane w sekcji [Jak zachowuje się tekst](#how-text-behaves): prostokąt, który silnik wypełnia sam. Element `timer` to klip filmowy z własną osią czasu; silnik odczytuje liczbę jego klatek i przesuwa głowicę odtwarzania proporcjonalnie do upływu czasu, maksymalnie 24 razy na sekundę.

### Co plik konfiguracyjny bierze z twojego projektu

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

---
id: large-venues
title: Duże obiekty, oświetlenie i dźwięk
---

# 🏟️ Duże obiekty, oświetlenie i dźwięk

QuizWitz Live sprawdza się zarówno w quizie w pubie, jak i w dużych obiektach z setkami graczy. Ten przewodnik opisuje, co się zmienia, gdy przenosisz się na większą scenę: sieć, dźwięk oraz synchronizację oświetlenia (lub innego sprzętu scenicznego) z grą.

> 🧭 Jeśli dopiero zaczynasz z QuizWitz Live, zacznij od [**przewodnika po uruchomieniu dla quizmastera**](../quizmaster/002-startup.md).

---

## 🌐 Stabilne połączenie z internetem

Każda część gry na żywo komunikuje się z pozostałymi w czasie rzeczywistym przez nasze serwery: ekran gry, Quizmaster App, aplikacja jury, narzędzia realizatora i urządzenie każdego gracza. Stabilne połączenie z internetem to najważniejszy wymóg przy dużym wydarzeniu.

- Podłącz komputer ekranu gry i wszystkie komputery realizatora **kablem sieciowym**. Nie polegaj w ich przypadku na wifi w obiekcie ani na mobilnym hotspocie.
- Upewnij się, że gracze mają dobry zasięg wifi lub sieci komórkowej (4G/5G) w całej sali. Pełna sala może przeciążyć małą sieć wifi.
- Kliknij **Wczytaj quiz** z dużym wyprzedzeniem. QuizWitz wczytuje z góry wszystkie obrazy, audio i wideo, więc załączniki odtwarzają się płynnie, gdy quiz już trwa.

---

## 🔊 Dźwięk: wszystko gra przez ekran gry

Cały dźwięk odtwarza ekran gry: muzykę i efekty dźwiękowe QuizWitz oraz każdy załącznik audio lub wideo dodany do pytań, rund lub quizu (muzykę na ekranie dołączania, muzykę na zakończenie rundy i tak dalej). Wszystko jest zsynchronizowane z tym, co dzieje się na ekranie.

Wystarczy więc podłączyć **wyjście audio komputera ekranu gry** do miksera lub nagłośnienia. Nie trzeba ręcznie odpalać żadnych osobnych dźwięków.

- Użyj suwaka głośności na pasku sterowania gry, aby ustawić poziom albo wyciszyć wszystkie dźwięki quizu.
- Aby odtwarzać tylko własne przesłane audio, dodaj `music=0` do linku gry (zobacz [parametry zaawansowane](../advanced/020-advanced-parameters.md)). `connectMusic=0` wyłącza tylko muzykę na ekranie dołączania.

---

## 💡 Oświetlenie: kontroler MIDI

Kontroler MIDI pod adresem [**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) zamienia zdarzenia w grze na nuty MIDI. Przypisz te nuty do cue w oprogramowaniu lub konsoli oświetleniowej, a światła będą automatycznie podążać za grą.

My używamy go z [QLC+](https://www.qlcplus.org/) (darmowe oprogramowanie oświetleniowe sterujące urządzeniami DMX), ale wysyła on zwykłe MIDI, więc działa z większością konsol i programów oświetleniowych przyjmujących sygnał MIDI, a także z mikserami audio, mikserami wideo i innym sprzętem scenicznym.

### Łączenie

1. Uruchom grę QuizWitz Live. Quizmaster App pokazuje **kod realizatora** obok kodu quizmastera i kodu jury.
2. Na komputerze podłączonym do systemu oświetlenia otwórz [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) w **Google Chrome**. Kontroler korzysta z Web MIDI, którego inne przeglądarki mogą nie obsługiwać.
3. Zezwól na dostęp do MIDI, gdy Chrome o to poprosi.
4. Wpisz kod realizatora i kliknij **Connect**.
5. Wybierz urządzenie MIDI w polu **Output** i kanał (domyślnie kanał 1).

Jeśli oprogramowanie oświetleniowe działa na tym samym komputerze, użyj wirtualnego portu MIDI: **IAC Driver** w macOS lub narzędzia takiego jak **loopMIDI** w Windows.

> ⚠️ Nie zamykaj karty kontrolera przez całą grę. Zamknięcie jej zatrzymuje wysyłanie nut MIDI.

### Jak to działa

Każde zdarzenie w grze ma własny, stały numer nuty MIDI. Gdy zdarzenie wystąpi, kontroler gra tę nutę na kanale wyjściowym. Numer nuty widać na każdym przycisku kontrolera.

- **Naciśnij przycisk**, aby ręcznie wysłać jego nutę. W ten sposób skonfigurujesz i przetestujesz przypisania przed występem.
- Przycisk na chwilę robi się **czerwony**, gdy gra go wyzwoli.
- Większość zdarzeń jest wysyłana tylko raz z rzędu: jeśli to samo zdarzenie wystąpi dwa razy pod rząd, drugie zostanie pominięte. Poprawna i błędna odpowiedź są wysyłane za każdym razem, więc możesz błysnąć światłami przy każdej odsłanianej odpowiedzi.
- **Feedback** (opcjonalnie): wybierz wejście MIDI i kanał (domyślnie kanał 2). Nuty odsyłane przez oprogramowanie oświetleniowe podświetlają odpowiednie przyciski na zielono, więc widać, które cue są aktywne.

### Nuty MIDI

| Nuta | Zdarzenie |
|---|---|
| 1 | Intro gry |
| 2 | Intro gry: stop |
| 3 | Intro rundy |
| 4 | Intro rundy: stop |
| 5 | Intro rundy błyskawicznej |
| 6 | Intro rundy błyskawicznej: stop |
| 10 | Start pytania |
| 11 | Pytanie w toku |
| 12 | Start licznika czasu pytania |
| 13 | Zatrzymanie licznika czasu pytania |
| 14 | Pytanie zakończone |
| 20 | Licznik czasu pytania na 25% |
| 21 | Licznik czasu pytania na 33% |
| 22 | Licznik czasu pytania na 50% |
| 23 | Licznik czasu pytania na 66% |
| 24 | Licznik czasu pytania na 75% |
| 30 | Załącznik pokazany |
| 31 | Załącznik ukryty |
| 40 | Przed wynikiem pytania |
| 41 | Wynik pytania |
| 42 | Odsłonięcie poprawnej odpowiedzi |
| 43 | Odsłonięcie błędnej odpowiedzi |
| 44 | Wynik pytania: stop |
| 45 | Wszyscy odpowiedzieli poprawnie |
| 46 | Nikt nie odpowiedział poprawnie |
| 47 | Tylko jedna poprawna odpowiedź |
| 50 | Wynik rundy |
| 51 | Wynik rundy: stop |
| 52 | Wynik rundy błyskawicznej |
| 53 | Wynik rundy błyskawicznej: stop |
| 60 | Przerwa |
| 61 | Przerwa: stop |
| 70 | Wynik końcowy |
| 71 | Wynik końcowy: odsłonięcie miejsca |
| 72 | Wynik końcowy: odsłonięcie zwycięzcy |
| 73 | Wynik końcowy: stop |

### Oświetlenie dla każdego pytania

Każdemu pytaniu możesz nadać własny nastrój świetlny. W edytorze quizu otwórz ustawienia pytania i dodaj **Oświetlenie** (w sekcji *Prezentacja*). Gdy startuje licznik czasu pytania, kontroler wysyła nutę tego nastroju. Pytania bez nastroju świetlnego wysyłają nutę *Domyślne*, dzięki czemu światła mogą wrócić do normalnego stanu.

| Nuta | Oświetlenie |
|---|---|
| 100 | Domyślne |
| 101 | Odliczanie |
| 102 | Impreza disco |
| 103 | Strefa wojny |
| 104 | Czerwony alarm |
| 105 | Gwiaździsta noc |
| 106 | Ucieczka z więzienia |
| 107 | Materiały niebezpieczne |
| 108 | Przytulny róż |
| 109 | Atlantyda |
| 110 | Dżungla |
| 111 | Błękitny ocean |
| 112 | Żółty ocean |
| 113 | Zielony ocean |
| 114 | Fioletowy ocean |
| 115 | Pomarańczowy ocean |
| 116 | Czerwony ocean |
| 117 | Czerwoni kontra niebiescy |

Nazwy to tylko sugestie: to, co robi każda nuta, zależy od ciebie i twojego systemu oświetlenia.

---

## 🛠️ Więcej narzędzi realizatora

[**regie.catlab.eu**](https://regie.catlab.eu) oferuje więcej narzędzi na duże wydarzenia. Wszystkie korzystają z kodu realizatora.

- **Teleprompter** - drugi ekran quizmastera z automatycznym przewijaniem i odbiciem lustrzanym
- **Ekran realizatora** - wysyłaj wiadomości do osób na scenie na jeden lub kilka monitorów scenicznych
- **Kontroler OBS** - automatycznie przełączaj sceny w OBS podczas gry (zobacz [quiz na żywo w transmisji](040-livestreaming.md))
- **Licznik odliczania** - pokazuj liczniki czasu QuizWitz na osobnym ekranie
- **Zduplikowany ekran** - pokazuj kopię ekranu gry na innym monitorze

---

## ✅ Przykładowa konfiguracja

- **Komputer ekranu gry** - podłączony do projektora lub ściany LED oraz do nagłośnienia, kablem sieciowym
- **Komputer realizatora** - kontroler MIDI w Chrome, podłączony do systemu oświetlenia, kablem sieciowym
- **Tablet lub telefon** - Quizmaster App
- **Laptop lub tablet** - aplikacja jury, do korygowania wyników i sterowania grą

> 💡 Zrób pełną próbę w obiekcie przed wydarzeniem, aby przetestować cue oświetlenia, poziomy dźwięku i sieć.

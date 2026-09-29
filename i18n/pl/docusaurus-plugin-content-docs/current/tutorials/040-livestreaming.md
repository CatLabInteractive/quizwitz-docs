---
id: livestream-tutorial
title: Quiz na żywo w transmisji
---

# 📺 Organizowanie quizu w transmisji na żywo

Z QuizWitz Live łatwo zorganizujesz w pełni interaktywny quiz w transmisji na żywo na platformach takich jak **Twitch**, **YouTube Live** czy **Facebook Live** - nawet dla dużej publiczności. Ten przewodnik przeprowadzi cię przez konfigurację, obsługę opóźnienia i dobre praktyki prezentacji.

> 🧭 Jeśli dopiero zaczynasz z Quizmaster App, zacznij od [**przewodnika po uruchomieniu dla quizmastera**](../quizmaster/002-startup.md).

---

## 🎤 Konfiguracja quizmastera

Quizmaster jest sercem twojego wydarzenia. To on nadaje tempo, przedstawia pytania i utrzymuje zaangażowanie publiczności.

Użyj **Quizmaster App**, aby prowadzić grę. Uruchom QuizWitz Live z edytora quizów, klikając **Uruchom QuizWitz Live**.

> 💡 Quizmaster App to **aplikacja webowa** - nie wymaga instalacji. Wystarczy wejść na [**quizwitz.tv**](https://quizwitz.tv) na urządzeniu quizmastera i wpisać **kod quizmastera**.

Zalecamy korzystanie z **tabletu lub smartfona**, aby quizmaster mógł swobodnie poruszać się podczas programu.

---

## 🧩 Wybór odpowiedniego trybu gry

Przy uruchamianiu QuizWitz Live musisz wybrać, w jaki sposób gracze się łączą:

- **Kody drużyn** - każdy gracz lub drużyna otrzymuje unikalny kod. Przydatne przy wydarzeniach drużynowych z wcześniejszą rejestracją.
- **Wspólny kod gry** - jeden wspólny kod gry dla wszystkich graczy. Najlepsze do transmisji na żywo z otwartą rejestracją.

> W przypadku transmisji na żywo zawsze wybieraj **Wspólny kod gry** i klikaj _Rozpocznij grę ad hoc_.

Po wczytaniu quizu Quizmaster App wyświetli:

- **Kod quizmastera** - dla quizmastera
- **Kod jury** - do oceniania pytań otwartych
- **Kod realizatora** - do sterowania obrazem/dźwiękiem
- **Kod gry** - do dołączania graczy

Ekran gry pokazuje teraz **ekran dołączania** - to właśnie jego należy transmitować publiczności.

---

## 🎥 Transmisja na Twitchu (lub innych platformach)

Aby transmitować quiz, użyj oprogramowania do nadawania. Polecamy:

- **OBS Studio** (Open Broadcast Software) - darmowe i funkcjonalne
- Alternatywy: Streamlabs, vMix lub wbudowane opcje Zoom/Meet

Jeśli korzystasz z **oprogramowania do spotkań**, takiego jak Zoom czy Google Meet:

- Po prostu udostępnij ekran
- Naciśnij **Start** w Quizmaster App
- Gracze mogą uczestniczyć niemal w czasie rzeczywistym

W przypadku **Twitcha, YouTube Live lub Facebook Live** wystąpi **opóźnienie transmisji** (czyli opóźnienie transkodowania).

> ✅ Dla najlepszych rezultatów polecamy **Twitcha** - konsekwentnie zapewnia niskie opóźnienia i dobrą synchronizację z widzami.

---

## ⏱️ Ustawianie opóźnienia graczy w QuizWitz

Aby zrekompensować opóźnienie transmisji, użyj **opóźnienia interakcji graczy** w aplikacji jury.

Oto jak to zrobić:

1. Uruchom podgląd transmisji - nie musisz jeszcze wchodzić na żywo
2. Otwórz **aplikację jury**, wpisując kod jury na [**quizwitz.tv**](https://quizwitz.tv)
3. Przejdź do **Sterowania grą**
4. Otwórz transmisję na żywo w innym oknie, z włączonym dźwiękiem
5. Użyj stopera
6. W aplikacji jury naciśnij przycisk **Buzzer** i zacznij mierzyć czas
7. Gdy usłyszysz buzzer w transmisji, zatrzymaj stoper
8. Zaokrąglij opóźnienie (w sekundach) w górę i wpisz je w polu **Opóźnienie interakcji graczy**
9. Kliknij **Potwierdź ustawienie**

> 🎯 Lepiej nieco przeszacować opóźnienie. Dzięki temu gracze zobaczą opcje odpowiedzi dopiero **po tym**, jak skończysz czytać pytanie.

---

## 🚀 Start na żywo

Gdy opóźnienie jest ustawione, a gracze połączeni:

- Rozpocznij transmisję na Twitchu
- Użyj Quizmaster App, aby **uruchomić quiz**
- QuizWitz zajmie się odmierzaniem czasu w tle - nie trzeba robić przerw między pytaniami

---

## 💡 Wskazówki dotyczące prezentacji w transmisji na żywo

- **Nie pozwól quizmasterowi oglądać opóźnionej transmisji** - powinien korzystać wyłącznie z Quizmaster App działającej na żywo, aby uniknąć niezręcznych pauz.

- Aby wchodzić w interakcję z publicznością, śledź **komentarze na żywo** na osobnym ekranie - nie obraz wideo.

- Chcesz automatycznie przełączać sceny w OBS? Użyj:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Chcesz sterować urządzeniami MIDI podczas gry? Wypróbuj:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Szukasz więcej narzędzi? Odwiedź [**regie.catlab.eu**](https://regie.catlab.eu) - centralne miejsce z dodatkowymi narzędziami do automatyzacji, przełączania scen, efektów i nie tylko.

> Wszystkie narzędzia wymagają **kodu realizatora** z Quizmaster App.

---

Możesz zaczynać transmisję! Twitch to płynna, responsywna platforma do organizowania quizów na dużą skalę. Połącz to z QuizWitz Live - a twój wieczór quizowy zrobi wrażenie.

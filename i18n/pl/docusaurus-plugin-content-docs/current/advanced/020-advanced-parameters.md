---
id: advanced-player-parameters
title: Parametry zaawansowane
---

# ⚙️ Parametry zaawansowane

Za pomocą parametrów w ciągu zapytania możesz dostosować działanie klienta gry QuizWitz. Parametry te można dołączyć do dowolnego linku do gry za pomocą funkcji **Zaawansowane ustawienia gry**.

Przykład:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Czym są ciągi zapytania?](https://en.wikipedia.org/wiki/Query_string)

---

## Dostępne parametry:

| Parametr                 |             Domyślnie             |           Przykład          | Wyjaśnienie                                                                                                                                                                                                |
| ------------------------ | :-------------------------------: | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (przeglądarka) |              en             | Kod języka ISO-639, który zostanie wczytany i użyty jako język bazowy                                                                                                                                      |
| `theme`                  |              quizted              |           emerald           | Nazwa (lub zatwierdzony adres URL) motywu do wczytania                                                                                                                                  |
| `reservation`            |                 /                 |            abcdef           | Token rezerwacji do użycia (w grach na żywo)                                                                                                                                            |
| `remote`                 |    quizwitz.tv    | quizwitz.tv | Serwer CatLab Remote do użycia                                                                                                                                                                             |
| `server`                 |                 /                 |              10             | Identyfikator serwera CatLab Remote do użycia (z automatycznym wykrywaniem)                                                                                                             |
| `publisher`              |                 /                 |           QuizWitz          | Nazwa profilu, który organizuje grę. Służy do dostosowywania widoków                                                                                                                       |
| `smileys`                |                 1                 |              0              | Ustaw na 0, aby wyłączyć emotikony w grze                                                                                                                                                                  |
| `outroPlayers`           |                 12                |          5,4,3,1,2          | Określa liczbę graczy (liczba) LUB kolejność graczy (lista pozycji oddzielonych przecinkami), którzy zostaną ogłoszeni podczas outro gry.            |
| `focusPositions`         |                 /                 |            50,100           | Zdefiniuj listę dodatkowych pozycji, które będą wyświetlane w Quizmaster App                                                                                                                               |
| `translations`           |                 1                 |              0              | Ustaw na 0, aby wyłączyć wczytywanie tłumaczeń wczytywanego quizu                                                                                                                                          |
| `cycleTranslations`      |                 0                 |              1              | Ustaw na 1, aby przy każdym pytaniu przełączać kolejno wszystkie dostępne języki quizu                                                                                                                     |
| `showLongQuestions`      |                 0                 |              1              | Ustaw na 1, aby wyświetlać „długie pytanie” na ekranie gry                                                                                                                                                 |
| `forcePiecharts`         |                 0                 |              1              | Ustaw na 1, aby zawsze pokazywać całą informację zwrotną na wykresach kołowych                                                                                                                             |
| `forceNoPiecharts`       |                 0                 |              1              | Ustaw na 1, aby nigdy nie grupować informacji zwrotnej na wykresach kołowych.                                                                                                              |
| `piechartPercentages`    |                 0                 |              1              | Ustaw na 1, aby na wszystkich wykresach kołowych pokazywać wartości procentowe zamiast bezwzględnych                                                                                                       |
| `monitors`               |                 /                 |            nl,fr            | Jeśli ustawiono, w grach na żywo zostaną utworzone osobne kody do wyświetlania „monitora” w tym konkretnym języku dla quizmasterów posługujących się tym językiem.                         |
| `allowLogin`             |                 1                 |              0              | Ustaw na 0, aby uniemożliwić użytkownikom logowanie                                                                                                                                                        |
| `tracker`                |                 1                 |              0              | Ustaw na 0, aby wyłączyć całe śledzenie. Raport z quizu nie będzie dostępny                                                                                                                |
| `random`                 |                 0                 |              1              | Ustaw na 1, aby wczytać „losowy quiz”                                                                                                                                                                      |
| `delay`                  |                 0                 |            30000            | Ustaw liczbę milisekund, o jaką będą opóźnione wszystkie interakcje graczy (na potrzeby transmisji na żywo)                                                                             |
| `countdown`              |                 10                |              60             | Ustaw liczbę sekund, przez jaką gra będzie „odliczać” w trybie prezentacji.                                                                                                                |
| `autoCountdown`          |                 0                 |              1              | Ustaw na 1, aby w trybie prezentacji automatycznie rozpocząć odliczanie po dołączeniu pierwszego gracza.                                                                                   |
| `autoRestart`            |                 0                 |              1              | Ustaw na 1, aby automatycznie uruchamiać grę ponownie po jej zakończeniu.                                                                                                                  |
| `waitForPlayers`         |                 0                 |              1              | Ustaw na 1, aby nie czekać na graczy, gdy włączone jest `autoCountdown`                                                                                                                                    |
| `askEmail`               |                 1                 |              0              | Ustaw na 0, aby w trybie prezentacji nie prosić o adres e-mail użytkownika.                                                                                                                |
| `beacon`                 |                 /                 |           my-beacn          | Ustaw token beacona CatLab Remote, którego można użyć do automatycznego połączenia Quizmaster App.                                                                                         |
| `rounds`                 |                 5                 |              7              | Ustaw liczbę rund, które zostaną wygenerowane w losowym quizie.                                                                                                                            |
| `questions`              |                 7                 |              7              | Ustaw liczbę pytań, które zostaną wygenerowane dla każdej rundy w losowym quizie.                                                                                                          |
| `showListenQuotes`       |                 1                 |              0              | Ustaw na 0, aby wyłączyć „zabawne” cytaty „prosimy o uwagę”.                                                                                                                               |
| `shared`                 |                 /                 |  123:abcdef | Token dostępu udostępnionego elementu.                                                                                                                                                     |
| `music`                  |                 1                 |              0              | Ustaw na 0, aby wyłączyć całą muzykę (w grze). Przesłane pliki audio nadal będą odtwarzane.                                                             |
| `connectMusic`           |                 1                 |              0              | Ustaw na 0, aby wyłączyć muzykę (w grze) odtwarzaną w fazie „dołączania”.                                                                                               |
| `slideshowVideoInterval` |                300                |             300             | Gdy na etapie ekranu dołączania przesłano filmy, określa liczbę sekund między kolejnymi odtworzeniami filmu.                                                                               |
| `slideshowImageInterval` |                 20                |              60             | Gdy na etapie ekranu dołączania przesłano obrazy, określa liczbę sekund, przez jaką będzie wyświetlany każdy obraz.                                                                        |
| `skipOnAllAnswered`      |                 1                 |              0              | Ustaw na 0, aby nadpisać ustawienie `skipOnAllAnswered` elementów                                                                                                                                          |
| `departments`            |                 1                 |            A,B,C            | Ustaw na 0, aby wyłączyć wczytywanie działów. Ustaw listę nazw oddzielonych przecinkami, aby automatycznie przypisywać wszystkich dołączających graczy do losowego działu. |
| `showRankInDepartment`   |                 1                 |              0              | Ustaw na 0, aby użytkownicy nie widzieli swojego miejsca w dziale.                                                                                                                         |
| `showDepartmentRanking`  |                 1                 |              0              | Ustaw na 0, aby wyłączyć wyświetlanie rankingu działów między rundami.                                                                                                                     |
| `preloadVideo`           |                 0                 |              1              | Ustaw na 1, aby wymusić wstępne wczytanie wszystkich fragmentów wideo.                                                                                                                     |
| `n`                      |                 /                 |          `_prompt_`         | Ustaw (lub poproś o nią, ustawiając `_prompt_`) nazwę grupy graczy, która bierze udział w grze. Ta nazwa jest wysyłana do raportu z quizu.              |

---

## 💡 Wskazówki

- Kilka parametrów można łączyć za pomocą `&`
- Używaj tych opcji z **Zaawansowanymi ustawieniami gry** przy udostępnianiu lub osadzaniu linków
- Wiele opcji przydaje się do optymalizacji transmisji na żywo lub wydarzeń wielojęzycznych

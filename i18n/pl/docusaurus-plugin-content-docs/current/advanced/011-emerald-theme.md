---
id: emerald-theme
title: Motyw Emerald
---

# Motyw Emerald

Motyw Emerald to najprostszy sposób na zmianę wyglądu gry QuizWitz. Domyślnie motyw ma czysty niebiesko-zielony styl z żywymi kolorami opcji, ale łącząc załączniki quizu i modyfikatory motywu, możesz zmienić jego wygląd - i to radykalnie.

:::tip
Możesz użyć naszego [testera motywów](https://client.quizwitz.com/test.html?theme=emerald), aby zobaczyć, jak będą wyglądać twoje ustawienia.
:::

![Zrzut ekranu motywu Emerald](/images/emerald/emerald.png)

## Wybierz motyw Emerald

W **ustawieniach quizu** wybierz **Motyw** i włącz **Emerald**.

Quiz z motywem Emerald możesz przetestować [tutaj](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default).

![Zrzut ekranu ustawień quizu](/images/emerald/quiz-settings.png)

## Załączniki

### Załączniki quizu

Zdecydowanie najprostszym sposobem na zmianę wyglądu i klimatu gry jest dołączenie obrazów do quizu. Otwórz **ustawienia quizu** i przewiń w dół do sekcji **Załączniki**. Tutaj możesz przesłać obrazy, które zostaną użyte jako tło, logo klienta, ekrany dołączania i oczekiwania (w quizach konferencyjnych i na żywo) i nie tylko.

![Zrzut ekranu załączników quizu](/images/emerald/quiz-attachments.png)

### Załączniki rundy

Możesz też przesłać obrazy lub filmy, które zostaną odtworzone przed grą i po niej. To samo dotyczy rund: znajdź obraz, którego chcesz użyć jako wprowadzenia do rundy, przejdź do **ustawień rundy**, wyłącz **Pokaż wstęp rundy**, aby ukryć domyślne wprowadzenie, i prześlij obraz lub film jako **Pokaż przed rundą**. Gdy runda się rozpocznie, zamiast domyślnego wprowadzenia zostanie wyświetlony obraz lub film.

![Zrzut ekranu załączników rundy](/images/emerald/round-settings.png)

:::tip
Aby uzyskać najlepsze efekty, używaj obrazów i filmów w rozdzielczości 1920 x 1080.
:::

:::info
Po zabawie z załącznikami otrzymujemy coś [takiego](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo).
:::

![Zrzut ekranu motywu Emerald z załącznikami quizu](/images/emerald/emerald-with-attachments.png)

### Muzyka

Całą muzykę w grze również można zastąpić załącznikami. Pliki audio przesłane w slotach **w trakcie pytania** będą odtwarzane podczas odliczania czasu na pytanie.

## Modyfikatory motywu Emerald

Oprócz załączników możesz też zmieniać motyw Emerald za pomocą **parametrów zapytania**. To parametry, które możesz dodać do adresu URL z **zaawansowanych opcji gry** - zmieniają one wygląd motywu.

Zaczniemy od przykładowego quizu (bez żadnych załączników):  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Gdy uruchomisz powyższy quiz, gra będzie miała domyślny styl Emerald. Zmieńmy to.

:::tip
Najłatwiej eksperymentować z tymi parametrami za pomocą naszego [testera motywów](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b).  
Gdy skończysz eksperymentować, możesz skopiować i wkleić parametry do adresu URL z zaawansowanych opcji gry.
:::

Dostępne modyfikatory to:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 kolory, oddzielone przecinkami)
- optionBorderColors (4 kolory, oddzielone przecinkami)

Dodatkowo możesz ustawić domyślną czcionkę:

- defaultFont
- headerFont

Czcionki muszą być adresami URL publicznie dostępnych plików czcionek.

Każdy z tych modyfikatorów może zawierać jeden kolor w formacie szesnastkowym HTML (ff0000) lub gradient liniowy, jeśli podasz kilka kolorów oddzielonych znakiem minus ( - na przykład ff1b6b-45caff). (Pamiętaj, że nie należy dodawać symbolu #.)

:::note
Parametry zapytania muszą zaczynać się od znaku zapytania ( ? ) i każdy parametr musi być oddzielony znakiem ampersand ( & ). Więcej informacji o parametrach zapytania znajdziesz w [Wikipedii](https://en.wikipedia.org/wiki/Query_string).
:::

Dodając te parametry do adresu URL gry, możesz zmienić kolory motywu:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Zrzut ekranu motywu Emerald z własnymi modyfikatorami](/images/emerald/theme_properties.png)

---
id: round-options
title: Opcje rundy
---

# 🔄 Opcje rundy

Każda runda ma określony **typ**. Domyślny typ to **Trivia**, ale zachęcamy do testowania i eksperymentowania ze wszystkimi dostępnymi typami. Na tej stronie wyjaśniono ustawienia i załączniki, które możesz skonfigurować dla każdej rundy.

📘 Szczegółowy przegląd wszystkich typów rund znajdziesz w [dokumentacji typów rund](../round-types/000-round-types.md).

---

## 🔧 Konfigurowanie rundy

Aby skonfigurować opcje rundy, kliknij ikonę koła zębatego w panelu rundy:

| ![Otwieranie opcji rundy](/images/open-round-options.png) | ![Opcje rundy](/images/round-options.png) |
| :-------------------------------------------------------: | :---------------------------------------: |
|                  _Otwieranie opcji rundy_                 |         _Panel konfiguracji rundy_        |

---

## ⚙️ Ogólne opcje rundy

Następujące opcje są dostępne dla większości typów rund:

- **Pokaż tylko _X_ pytań** - Ogranicza rundę do określonej liczby pytań
- **Losowa kolejność pytań** - Przetasuj kolejność pytań w rundzie
- **Pokaż wstęp rundy** - Wyświetl animowany tytuł przed rozpoczęciem rundy
- **Pokaż zakończenie rundy (wynik pośredni)** - Pokaż ranking na koniec rundy
- **Grupuj całą informację zwrotną na jednym ekranie** - Zbierz informację zwrotną do pytań w jednym bloku po zakończeniu rundy
- **Pokaż całą informację zwrotną do pytań na końcu rundy** - Opóźnij informację zwrotną do pytań do końca rundy
- **Wymuś informację zwrotną po każdym pytaniu** - Zapewnij natychmiastową informację zwrotną
  > ⚠️ Działa to tylko w typach rund i pytań, w których informacja zwrotna byłaby w przeciwnym razie opóźniona, np. w pytaniach otwartych lub rundach błyskawicznych.

📘 Więcej informacji o czasie i sposobie wyświetlania informacji zwrotnej znajdziesz w sekcji [typy pytań](../question-types/000-question-types.md).

---

## 🏆 Opcje punktacji {#scoring}

QuizWitz oferuje elastyczną punktację, dzięki której gra jest uczciwa i wciągająca dla wszystkich graczy.

- **Punktacja zależna od czasu** - Gracze zdobywają więcej punktów za szybsze odpowiedzi.
  - W większości typów pytań punkty zależne od czasu maleją **w sposób ciągły co mikrosekundę**: im szybciej odpowiesz, tym więcej punktów zdobędziesz.
  - W **pytaniach otwartych** punkty zależne od czasu są podzielone na bloki. Na przykład: odpowiedzi w pierwszym bloku (np. w pierwszych kilku sekundach) dostają **100%** części zależnej od czasu, w następnym bloku **80%** i tak dalej. Pomaga to wyrównać szanse wolniej piszących graczy.

- **Stały procent punktów przy punktacji zależnej od czasu** - Decydujesz, jaka część łącznego wyniku zależy od szybkości.
  - Domyślnie **75%** punktów jest stałe (każdy, kto odpowie poprawnie, dostaje te punkty niezależnie od szybkości).
  - Tylko pozostałe **25%** zależy od tego, jak szybko odpowiadają gracze.

> 💡 Zmieniając to ustawienie, możesz sprawić, że rundy będą bardziej oparte na wiedzy lub bardziej na szybkości, w zależności od stylu twojego quizu.

Te opcje punktacji znajdziesz w panelu opcji rundy podczas jej edycji.

---

## 📜 Instrukcje dla quizmastera

Możesz dodać własny **tekst wprowadzenia do rundy**, który pojawi się tylko w [Quizmaster App](../quizmaster/001-introduction.md) na początku rundy. Użyj go, aby przekazać quizmasterowi wskazówki lub dodać osobisty akcent.

---

## 📎 Załączniki

Wzbogać rundę o multimedia wyświetlane w określonych momentach:

- **Przed rundą** - Wyświetlane po animacji intro rundy
- **Po rundzie** - Wyświetlane po outro rundy
- **Przed outro rundy** - Wyświetlane po ostatnim pytaniu, tuż przed outro
- **W trakcie outro rundy** - _(tylko audio)_ Odtwarzane podczas wyświetlania rankingu
- ...

📘 Obsługiwane typy plików i wskazówki dotyczące użycia znajdziesz w [przewodniku po załącznikach](../editor/006-attachments.md).

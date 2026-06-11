---
id: image-map-question
title: Otázka s obrazovou mapou
---

# 🗺️ Obrazová mapa

V otázce s **obrazovou mapou** musí hráči vybrat správné místo (nebo místa) na obrázku zobrazeném na jejich zařízení. Tohle je ideální pro úkoly s vizuálním rozpoznáváním, například „Vyber Erlenmeyerovu baňku.“.

---

![Příklad: otázka s obrazovou mapou s baňkami](/images/question-modes/image-map/image-map-example.png)

---

## 📝 Jak to funguje

- **Otázka:** Jasně uveď, co mají hráči na obrázku najít.  
  _(Příklad: „Vyber Erlenmeyerovu baňku.“)_
- **Obrázek:** Nahraj kvalitní obrázek, který se zobrazí všem hráčům.
- **Body odpovědi:** Definuj jednu nebo více **cílových oblastí** („bodů“) na obrázku. Každou oblast můžeš nastavit jako kruh nebo jiný tvar a určit její polohu a velikost.
- **Výběr odpovědí:** Hráči klepnutím nebo kliknutím označí svou odpověď (nebo odpovědi) na obrázku.
  - Pokud odpověď spadne **do správné oblasti**, získají plný počet bodů.
  - Pokud odpověď spadne **mimo správnou oblast**, ale do okruhu „téměř správně“, můžou získat částečné body podle vzdálenosti (jak je definováno nastavením _score easing_).
- **Více odpovědí:** Pokud otázka vyžaduje víc než jednu odpověď, hráči musí vybrat každou správnou oblast.
  - Opakovaný výběr stejné oblasti **nepřidá** žádné extra body.
- **Metoda bodování:** Můžeš nastavit, jestli se body udělují za každou správnou oblast zvlášť, nebo až když je vybrán požadovaný minimální počet správných odpovědí.

---

## ⚙️ Rozšířená nastavení

- **Počet odpovědí:** Nastav požadovaný minimální a maximální počet bodů, které musí hráč určit.
- **Score easing:** Upravuje částečné hodnocení pro odpovědi „téměř správně“ podle toho, jak blízko je výběr ke správné oblasti (platí jen pro vzdálenost mezi správně a téměř správně).
- **Body za oblast:** Rozhodni, jestli se body udělují za každou správně určenou oblast, nebo jen tehdy, když jsou vybrány všechny minimálně požadované oblasti.
- **Možnosti příloh:** Přidej obrázky, zvuk nebo video pro bohatší kontext. Při publikování nastav uvedení autorství.

Obecná nastavení otázek najdeš v části [psaní otázek](../editor/005-writing-questions.md).

---

## ⏱️ Bodování podle času

**Bodování podle času je ve výchozím nastavení zapnuté.** Hráči, kteří odpoví rychle, získají víc bodů, ale za správnou odpověď vždy existuje pevná složka (výchozí: 75 %). Jen 25 % celkového skóre ovlivňuje to, jak rychle odpovíš.  
Pokud chceš, můžeš bodování podle času pro tento typ otázky vypnout.

📘 Podrobnosti o bodování a nastavení času najdeš v [dokumentaci k možnostem kola](../editor/008-round-options.md#scoring).

---

## 💡 Tipy pro skvělé otázky s obrazovou mapou

- **Používej jasné, nepřeplněné obrázky**, aby šlo vše snadno rozpoznat.
- **Oblasti odpovědí definuj pečlivě**, aby se nepřekrývaly a nemátly hráče.
- **Poskytuj konstruktivní zpětnou vazbu**, aby se hráči mohli poučit z chyb.
- **Částečné body:** Použij možnost „téměř správně“, odměň těsné netrefení a udrž věci fér.

---

Otázky s obrazovou mapou jsou perfektní pro popisování diagramů, určování oblastí nebo vizuální hry typu „najdi objekt“!

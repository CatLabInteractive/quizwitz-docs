---
id: list-question
title: Liste sorusu
---

# 📝 Liste sorusu

**Liste sorusu**, oyunculardan daha büyük bir listeden birkaç doğru cevap vermelerini ister - “Amerika Birleşik Devletleri'nin ilk 5 başkanını listele” veya “Periyodik tablodan üç element say.” gibi sorular için mükemmeldir.

---

![Örnek: ABD başkanlarıyla ilgili liste sorusu](/images/question-modes/list-question/list-question.png)

---

## 📝 Nasıl çalışır

- **Soru:** Oyuncuların neyi listelemesini istediğini açıkça belirt.
- **Liste öğeleri:** Tüm olası doğru cevapları gir.
  - Bazılarını ekranda örnek olarak göstermek için **‘Verilen’** olarak işaretle; bunların cevaplanması GEREKMEZ.
  - Sıra **önemli değildir** - oyuncular doğru cevapları istedikleri sırayla girebilir.
- **Oyuncu girişi:** Oyuncular belirli sayıda cevap vermelidir (ör. 1 ile 5 arasında). Gönderdikleri her doğru cevap için puan verilir.
- **Ekler:** Bağlam için görsel, ses veya video ekle. Yayınlıyorsan kaynak gösterimini doldur.

---

## ⚙️ Genişletilmiş ayarlar

- **En az ve en fazla cevap:** Bir oyuncunun kaç cevap vermesi gerektiğini belirle.
- **Cevap başına puan:** Puanlar her doğru cevap için ya da yalnızca en az sayıya ulaşıldığında verilebilir.
- **Verilen seçenekler:** Soru içinde örnek olarak kullan.
- **Düzeltme:**
  - **Otomatik düzeltmeyi zorla:** Etkinleştirildiğinde QuizWitz tüm cevapları otomatik olarak kontrol eder (küçük yazım hatalarını ve farklılıkları kabul eder). Jüriye gerek yok.
  - **Elle inceleme:** Etkin değilse, verilen her cevabın [Jüri Uygulaması](../quizmaster/004-jury-app.md) ile incelenmesi gerekir.

---

## 🏆 Puanlama

- **Doğru cevap başına puan:** Oyuncular her doğru cevap için puan kazanır.
- **Zamana dayalı puanlama** (etkinse):  
  Adalet için **açık uçlu soru kurallarını** izler:
  - Kullanılabilir puanlar zaman bloklarına bölünür (milisaniye bazında değil).  
    Örneğin: ilk blokta tam puan, sonrakinde %80 ve bu böyle devam eder.
  - Puanların **yalnızca %25**'i hıza bağlıdır.  
    Diğer **%75** sabittir - bu yüzden daha yavaş yazanlar bile doğru cevap verirlerse puanların çoğunu alır.
  - Bu, yazma hızının cezasını azaltır ve puanlamayı herkes için daha adil hale getirir.

Ayrıntılar için [tur puanlama seçeneklerine](../editor/008-round-options.md#scoring) bak.

---

## 💡 Liste soruları için ipuçları

- **Net ol:** Geçerli cevapları açıkça tanımla.
- **Örnek göster:** ‘Verilen’ özelliğini kullan.
- **Varyantları listele:** Yaygın yazımları/farklılıkları ekle.
- **Jürinin işini azalt:** Mümkünse otomatik düzeltmeyi kullan.

---

Daha fazlası için [Jüri Uygulaması belgelerine](../quizmaster/004-jury-app.md) bak.

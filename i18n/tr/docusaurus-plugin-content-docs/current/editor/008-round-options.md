---
id: round-options
title: Tur seçenekleri
---

# 🔄 Tur seçenekleri

Her turun belirli bir **türü** vardır. Varsayılan **Genel Kültür**'dür, ancak mevcut tüm türleri test etmeni ve denemeni öneririz. Bu sayfa, her tur için yapılandırabileceğin ayarları ve ekleri açıklar.

📘 Tüm tur türlerine ayrıntılı bir genel bakış için [tur türleri belgelerini](../round-types/000-round-types.md) ziyaret et.

---

## 🔧 Bir turu yapılandırma

Bir turun seçeneklerini yapılandırmak için tur panelindeki dişli simgesine tıkla:

| ![Tur seçeneklerini açma](/images/open-round-options.png) | ![Tur seçenekleri](/images/round-options.png) |
| :-------------------------------------------------------: | :-------------------------------------------: |
|                  _Tur seçeneklerini açma_                 |           _Tur yapılandırma paneli_           |

---

## ⚙️ Genel tur seçenekleri

Aşağıdaki seçenekler çoğu tur türü için kullanılabilir:

- **Yalnızca _X_ soru göster** - Turu belirli sayıda soruyla sınırlar
- **Rastgele soru sırası** - Tur içindeki soruların sırasını karıştır
- **Tur girişini göster** - Tur başlamadan önce animasyonlu bir başlık göster
- **Tur kapanışını göster (ara skor)** - Turun sonunda sıralamayı açıkla
- **Tüm geri bildirimleri tek ekranda grupla** - Tur bittikten sonra soru geri bildirimlerini tek blokta topla
- **Tüm soru geri bildirimlerini tur sonunda göster** - Soru geri bildirimini tur bitene kadar ertele
- **Her sorudan sonra geri bildirimi zorla** - Anında geri bildirim sağla
  > ⚠️ Bu yalnızca açık uçlu sorular veya şimşek turları gibi, geri bildirimin normalde erteleneceği tur ve soru türlerinde etkili olur.

📘 Geri bildirimin zamanlaması ve davranışı hakkında daha fazla bilgi için [soru türlerine](../question-types/000-question-types.md) göz at.

---

## 🏆 Puanlama seçenekleri {#scoring}

QuizWitz, her şeyi tüm oyuncular için adil ve ilgi çekici tutmak amacıyla esnek puanlama sunar.

- **Zamana dayalı puanlama** - Oyuncular daha hızlı cevaplar için daha fazla puan kazanır.
  - Çoğu soru türünde zamana dayalı puanlar **mikrosaniye başına sürekli olarak** azalır: ne kadar hızlı cevap verirsen o kadar çok puan kazanırsın.
  - **Açık uçlu sorularda** zamana dayalı puanlar bloklara bölünür. Örneğin: ilk bloktaki (ör. ilk birkaç saniye) cevaplar zamana dayalı kısmın **%100**'ünü, sonraki blok **%80**'ini kazanır ve bu böyle devam eder. Bu, daha yavaş yazanlar için eşit şartlar sağlamaya yardımcı olur.

- **Zamana dayalı puanlamada sabit puan yüzdesi** - Toplam skorun ne kadarının hızdan etkileneceğini sen kontrol edersin.
  - Varsayılan olarak puanların **%75**'i sabittir (doğru cevap veren herkes, hızından bağımsız olarak bu puanları alır).
  - Yalnızca kalan **%25**, oyuncuların ne kadar hızlı cevap verdiğinden etkilenir.

> 💡 Bu ayarı değiştirerek quiz tarzına bağlı olarak turları daha çok bilgiye veya daha çok hıza dayalı hale getirebilirsin.

Bu puanlama seçeneklerini bir turu düzenlerken tur seçenekleri panelinde bulabilirsin.

---

## 📜 Quizmaster talimatları

Turun başında yalnızca [Quizmaster Uygulamasında](../quizmaster/001-introduction.md) görünecek özel bir **tur giriş metni** ekleyebilirsin. Bunu quizmasterı bilgilendirmek veya kişisel bir dokunuş katmak için kullan.

---

## 📎 Ekler

Turunu belirli anlarda gösterilen eklerle zenginleştir:

- **Turdan önce** - Tur girişi animasyonundan sonra gösterilir
- **Turdan sonra** - Tur kapanışından sonra gösterilir
- **Tur kapanışından önce** - Son sorudan sonra, kapanıştan hemen önce gösterilir
- **Tur kapanışı sırasında** - _(yalnızca ses)_ Sıralama gösterilirken çalar
- ...

📘 Desteklenen dosya türleri ve kullanım ipuçları için [ekler kılavuzuna](../editor/006-attachments.md) göz at.

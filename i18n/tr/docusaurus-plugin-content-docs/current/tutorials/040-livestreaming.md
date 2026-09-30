---
id: livestream-tutorial
title: Canlı yayın quizi
---

# 📺 Canlı yayın quizi düzenlemek

QuizWitz Live ile **Twitch**, **YouTube Live** veya **Facebook Live** gibi platformlarda tamamen etkileşimli bir canlı yayın quizi düzenlemek kolaydır - büyük seyirci kitleleri için bile. Bu kılavuz sana kurulum, gecikme yönetimi ve sunumla ilgili en iyi uygulamalar konusunda yol gösterir.

> 🧭 Quizmaster Uygulaması'nda yeniysen [**Quizmaster başlangıç kılavuzu**](../quizmaster/002-startup.md) ile başla.

---

## 🎤 Quizmaster kurulumu

Quizmaster etkinliğinin kalbidir. Tempoyu kontrol eder, soruları sunar ve seyircinin ilgisini canlı tutar.

Oyunu yönetmek için **Quizmaster Uygulaması**'nı kullan. QuizWitz Live'ı quiz editöründen **QuizWitz Live başlat** düğmesine tıklayarak başlat.

> 💡 Quizmaster Uygulaması bir **web uygulamasıdır** - kurulum gerekmez. Quizmaster cihazında [**quizwitz.tv**](https://quizwitz.tv) adresine git ve **quizmaster kodunu** gir.

Quizmasterın gösteri sırasında serbestçe hareket edebilmesi için **tablet veya akıllı telefon** kullanmanı öneririz.

---

## 🧩 Doğru oyun modunu seçmek

QuizWitz Live'ı başlatırken oyuncuların nasıl bağlanacağını seçmen istenir:

- **Takım kodları** - Her oyuncu veya takım benzersiz bir kod alır. Önceden kayıtlı takım etkinlikleri için kullanışlı.
- **Ortak oyun kodu** - Tüm oyuncular için ortak tek bir oyun kodu. Kaydın herkese açık olduğu canlı yayınlar için en iyisi.

> Canlı yayınlar için her zaman **Ortak oyun kodu**'nu seç ve _Ortak oyun koduyla oyun başlat_ düğmesine tıkla.

Quiz yüklendikten sonra Quizmaster Uygulaması şunları gösterir:

- **Quizmaster kodu** - quizmaster için
- **Jüri kodu** - açık uçlu soruları incelemek için
- **Reji kodu** - görüntü/sesi kontrol etmek için
- **Oyun kodu** - oyuncuların katılması için

Oyun ekranın artık seyircine yayınlaman gereken **bağlantı ekranını** gösteriyor.

---

## 🎥 Twitch'e (veya başka platformlara) yayın yapmak

Quizini yayınlamak için bir yayın yazılımı kullan. Önerilerimiz:

- **OBS Studio** (Open Broadcast Software) - ücretsiz ve güçlü
- Alternatifler: Streamlabs, vMix veya Zoom/Meet'in yerleşik seçenekleri

Zoom veya Google Meet gibi **toplantı yazılımları** kullanıyorsan:

- Ekranını paylaşman yeterli
- Quizmaster Uygulaması'nda **Başlat** düğmesine bas
- Oyuncular neredeyse gerçek zamanlı olarak katılabilir

**Twitch, YouTube Live veya Facebook Live** için bir **yayın gecikmesi** (diğer adıyla kod dönüştürme gecikmesi) yaşarsın.

> ✅ En iyi sonuçlar için **Twitch**'i öneririz - sürekli olarak düşük gecikmeli performans ve iyi izleyici senkronizasyonu sunar.

---

## ⏱️ QuizWitz oyuncu gecikmesini ayarlamak

Yayın gecikmesini telafi etmek için Jüri Uygulaması'ndaki **oyuncu etkileşim gecikmesini** kullan.

Şöyle yapılır:

1. Yayın önizlemeni başlat - henüz yayına geçmene gerek yok
2. [**quizwitz.tv**](https://quizwitz.tv) adresinde jüri kodunu girerek **Jüri Uygulaması**'nı aç
3. **Oyun kontrolü** bölümüne git
4. Canlı yayınını sesi açık olarak başka bir pencerede aç
5. Bir kronometre kullan
6. Jüri Uygulaması'nda **Buzzer** düğmesine bas ve süre tutmaya başla
7. Canlı yayında buzzer sesini duyduğunda kronometreyi durdur
8. Gecikmeyi (saniye olarak) yukarı yuvarla ve **Oyuncu etkileşim gecikmesi** alanına gir
9. **Ayarı onayla** düğmesine tıkla

> 🎯 Gecikmeyi biraz fazla tahmin etmek daha iyidir. Bu, oyuncuların cevap seçeneklerini ancak sen soruyu okumayı bitirdikten **sonra** görmesini sağlar.

---

## 🚀 Yayına geçmek

Gecikme ayarlandıktan ve oyuncular bağlandıktan sonra:

- Twitch yayınını başlat
- **Quizi başlatmak** için Quizmaster Uygulaması'nı kullan
- QuizWitz zamanlamayı arka planda halleder - sorular arasında duraklamana gerek yok

---

## 💡 Canlı yayın sunum ipuçları

- **Quizmasterın gecikmeli yayını izlemesine izin verme** - garip duraklamalardan kaçınmak için yalnızca canlı Quizmaster Uygulaması'nı kullanmalıdır.

- Seyirciyle etkileşim kurmak için **canlı yorumları** video akışından değil, ayrı bir ekrandan takip et.

- OBS sahnelerini otomatik olarak değiştirmek mi istiyorsun? Şunu kullan:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Oyun sırasında MIDI cihazlarını tetiklemek mi istiyorsun? Şunu dene:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Daha fazla araç mı arıyorsun? [**regie.catlab.eu**](https://regie.catlab.eu) adresini ziyaret et - otomasyon, sahne geçişi, efektler ve daha fazlası için ek araçlar sunan merkezi bir platform.

> Tüm araçlar, Quizmaster Uygulaması'ndaki **reji kodunu** gerektirir.

---

Yayına geçmeye hazırsın! Twitch, büyük ölçekli quiz etkinlikleri düzenlemek için sorunsuz ve hızlı tepki veren bir platform sunar. Bunu QuizWitz Live ile birleştir - ve quiz gecen herkesi etkilemeye hazır.

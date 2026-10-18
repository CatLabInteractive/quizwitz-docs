---
id: large-venues
title: Büyük mekânlar, ışık ve ses
---

# 🏟️ Büyük mekânlar, ışık ve ses

QuizWitz Live, bir bar quizinden yüzlerce oyunculu büyük mekânlara kadar ölçeklenir. Bu kılavuz daha büyük bir sahneye geçtiğinde nelerin değiştiğini anlatır: ağ, ses ve ışıklarının (veya diğer gösteri ekipmanının) oyunla senkronize edilmesi.

> 🧭 QuizWitz Live'da yeniysen [**Quizmaster başlangıç kılavuzu**](../quizmaster/002-startup.md) ile başla.

---

## 🌐 Stabil bir internet bağlantısı

Canlı bir oyunun tüm parçaları sunucularımız üzerinden birbiriyle gerçek zamanlı iletişim kurar: oyun ekranı, Quizmaster Uygulaması, Jüri Uygulaması, reji araçları ve her oyuncunun cihazı. Büyük bir etkinlik için en önemli gereksinim stabil bir internet bağlantısıdır.

- Oyun ekranı bilgisayarını ve tüm reji bilgisayarlarını bir **ağ kablosuyla** bağla. Bunlar için mekânın wifi'sine veya bir mobil hotspot'a güvenme.
- Oyuncuların salonun her yerinde iyi wifi veya mobil (4G/5G) kapsama alanına sahip olduğundan emin ol. Dolu bir salon küçük bir wifi ağını aşırı yükleyebilir.
- Başlangıçtan çok önce **Quizi yükle** düğmesine tıkla. QuizWitz tüm görselleri, sesleri ve videoları önceden yükler, böylece quiz başladığında ekler sorunsuz oynatılır.

---

## 🔊 Ses: her şey oyun ekranından çalınır

Tüm sesleri oyun ekranı çalar: QuizWitz müziği ve ses efektleri ile sorularına, turlarına veya quizine eklediğin her ses ya da video eki (bağlantı ekranı müziği, tur kapanış müziği vb.). Her şey ekranda olanlarla zamanlanır.

Yani yalnızca **oyun ekranı bilgisayarının ses çıkışını** mikser masana veya ses sistemine bağlaman yeterli. Elle tetiklenecek ayrı ses cue'ları yoktur.

- Seviyeyi ayarlamak veya tüm quiz seslerini kapatmak için oyunun kontrol çubuğundaki ses kaydırıcısını kullan.
- Yalnızca kendi yüklediğin sesleri çalmak için oyun bağlantısına `music=0` ekle (bkz. [gelişmiş parametreler](../advanced/020-advanced-parameters.md)). `connectMusic=0` yalnızca bağlantı ekranındaki müziği kapatır.

---

## 💡 Işık: MIDI kontrolcüsü

[**regie.catlab.eu/midi.html**](https://regie.catlab.eu/midi.html) adresindeki MIDI kontrolcüsü oyun olaylarını MIDI notalarına dönüştürür. Bu notaları ışık yazılımındaki veya konsolundaki cue'lara eşle; ışıkların oyunu otomatik olarak takip eder.

Biz onu [QLC+](https://www.qlcplus.org/) (DMX armatürlerini süren ücretsiz bir ışık yazılımı) ile kullanıyoruz, ancak düz MIDI gönderdiği için MIDI girişi kabul eden çoğu ışık konsolu ve yazılımıyla, ayrıca ses masaları, video mikserleri ve diğer gösteri ekipmanlarıyla da çalışır.

### Bağlanma

1. QuizWitz Live oyununu başlat. Quizmaster Uygulaması, quizmaster kodunun ve jüri kodunun yanında **reji kodunu** gösterir.
2. Işık sistemine bağlı bilgisayarda [regie.catlab.eu/midi.html](https://regie.catlab.eu/midi.html) adresini **Google Chrome**'da aç. Kontrolcü Web MIDI kullanır ve diğer tarayıcılar bunu desteklemeyebilir.
3. Chrome sorduğunda MIDI erişimine izin ver.
4. Reji kodunu gir ve **Connect** düğmesine tıkla.
5. Çıkış MIDI cihazını (**Output**) ve kanalı seç (varsayılan olarak kanal 1).

Işık yazılımın aynı bilgisayarda çalışıyorsa sanal bir MIDI portu kullan: macOS'ta **IAC Driver**, Windows'ta ise **loopMIDI** gibi bir araç.

> ⚠️ Kontrolcü sekmesini oyun boyunca açık tut. Sekmeyi kapatırsan MIDI notaları durur.

### Nasıl çalışır

Her oyun olayının kendine ait sabit bir MIDI nota numarası vardır. Olay gerçekleştiğinde kontrolcü o notayı çıkış kanalında çalar. Nota numarası kontrolcüdeki her düğmenin üzerinde gösterilir.

- Notasını elle göndermek için **bir düğmeye bas**. Gösteriden önce eşlemeni kurmak ve test etmek için bunu kullan.
- Oyun bir düğmeyi tetiklediğinde düğme kısa bir süre **kırmızı** olur.
- Çoğu olay arka arkaya yalnızca bir kez gönderilir: aynı olay arka arkaya iki kez gerçekleşirse ikincisi atlanır. Doğru cevap ve yanlış cevap her seferinde gönderilir, böylece açıklanan her cevapta ışıkları yakıp söndürebilirsin.
- **Feedback** (isteğe bağlı): bir MIDI girişi ve kanal seç (varsayılan olarak kanal 2). Işık yazılımının geri gönderdiği notalar eşleşen düğmeleri yeşil yakar, böylece hangi cue'ların aktif olduğunu görebilirsin.

### MIDI notaları

| Nota | Olay |
|---|---|
| 1 | Oyun girişi |
| 2 | Oyun girişi: durdur |
| 3 | Tur girişi |
| 4 | Tur girişi: durdur |
| 5 | Şimşek Turu girişi |
| 6 | Şimşek Turu girişi: durdur |
| 10 | Soru başlangıcı |
| 11 | Soru devam ediyor |
| 12 | Soru zamanlayıcısı başlar |
| 13 | Soru zamanlayıcısı durur |
| 14 | Soru bitti |
| 20 | Soru zamanlayıcısı %25'te |
| 21 | Soru zamanlayıcısı %33'te |
| 22 | Soru zamanlayıcısı %50'de |
| 23 | Soru zamanlayıcısı %66'da |
| 24 | Soru zamanlayıcısı %75'te |
| 30 | Ek gösterildi |
| 31 | Ek gizlendi |
| 40 | Soru sonucundan önce |
| 41 | Soru sonucu |
| 42 | Doğru cevap açıklandı |
| 43 | Yanlış cevap açıklandı |
| 44 | Soru sonucu: durdur |
| 45 | Herkes doğru cevapladı |
| 46 | Kimse doğru cevaplamadı |
| 47 | Yalnızca bir doğru cevap |
| 50 | Tur sonucu |
| 51 | Tur sonucu: durdur |
| 52 | Şimşek Turu sonucu |
| 53 | Şimşek Turu sonucu: durdur |
| 60 | Ara |
| 61 | Ara: durdur |
| 70 | Final sonucu |
| 71 | Final sonucu: bir sıralama açıklandı |
| 72 | Final sonucu: kazanan açıklandı |
| 73 | Final sonucu: durdur |

### Soru başına ışık

Her soruya kendi ışık atmosferini verebilirsin. Quiz editöründe sorunun ayarlarını aç ve **Aydınlatma** ekle (*Sunum* altında). Soru zamanlayıcısı başladığında kontrolcü o atmosferin notasını gönderir. Işık atmosferi olmayan sorular *Varsayılan* notasını gönderir, böylece ışıkların normal durumlarına dönebilir.

| Nota | Aydınlatma |
|---|---|
| 100 | Varsayılan |
| 101 | Geri sayım |
| 102 | Disko partisi |
| 103 | Savaş bölgesi |
| 104 | Kırmızı alarm |
| 105 | Yıldızlı gece |
| 106 | Hapishaneden kaçış |
| 107 | Tehlikeli maddeler |
| 108 | Sıcak pembe |
| 109 | Atlantis |
| 110 | Orman |
| 111 | Mavi okyanus |
| 112 | Sarı okyanus |
| 113 | Yeşil okyanus |
| 114 | Mor okyanus |
| 115 | Turuncu okyanus |
| 116 | Kırmızı okyanus |
| 117 | Kırmızıya karşı mavi |

İsimler birer öneridir: her notanın ne yapacağı sana ve ışık kurulumuna bağlıdır.

---

## 🛠️ Diğer reji araçları

[**regie.catlab.eu**](https://regie.catlab.eu) adresinde büyük etkinlikler için başka araçlar da var. Hepsi reji kodunu kullanır.

- **Teleprompter** - otomatik kaydırma ve aynalama özellikli ikinci bir quizmaster ekranı
- **Yönetmen ekranı** - bir veya daha fazla sahne monitöründeki sunuculara mesaj gönder
- **OBS kontrolcüsü** - oyun sırasında OBS sahnelerini otomatik olarak değiştir (bkz. [canlı yayın quizi](040-livestreaming.md))
- **Geri sayım zamanlayıcısı** - QuizWitz zamanlayıcılarını ayrı bir ekranda göster
- **Kopya ekran** - oyun ekranının bir kopyasını başka bir monitörde göster

---

## ✅ Örnek kurulum

- **Oyun ekranı bilgisayarı** - projektöre veya LED duvara ve ses sistemine bağlı, ağ kablosuyla
- **Reji bilgisayarı** - Chrome'da MIDI kontrolcüsü, ışık sistemine bağlı, ağ kablosuyla
- **Tablet veya telefon** - Quizmaster Uygulaması
- **Dizüstü bilgisayar veya tablet** - puanları düzenlemek ve oyunu kontrol etmek için Jüri Uygulaması

> 💡 Işık cue'larını, ses seviyelerini ve ağı test edebilmek için etkinlikten önce mekânda baştan sona tam bir prova yap.

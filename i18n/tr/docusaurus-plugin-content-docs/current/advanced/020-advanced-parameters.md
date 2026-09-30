---
id: advanced-player-parameters
title: Gelişmiş parametreler
---

# ⚙️ Gelişmiş parametreler

QuizWitz oyun istemcisinin davranışını özelleştirmek için sorgu dizesi parametrelerini kullanabilirsin. Bu parametreler **Gelişmiş oyun ayarları** özelliği kullanılarak herhangi bir oyun bağlantısına eklenebilir.

Örnek:

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Sorgu dizeleri nedir?](https://en.wikipedia.org/wiki/Query_string)

---

## Kullanılabilen parametreler:

| Parametre                |           Varsayılan          |            Örnek            | Açıklama                                                                                                                                                                                                        |
| ------------------------ | :---------------------------: | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (tarayıcı) |              en             | Yüklenecek ve temel dil olarak kullanılacak ISO-639 dil kodu                                                                                                                                                    |
| `theme`                  |            quizted            |           emerald           | Yüklenecek temanın adı (veya onaylı URL'si)                                                                                                                                                  |
| `reservation`            |               /               |            abcdef           | Kullanılacak rezervasyon token'ı (canlı oyunlarda)                                                                                                                                           |
| `remote`                 |  quizwitz.tv  | quizwitz.tv | Kullanılacak CatLab Remote sunucusu                                                                                                                                                                             |
| `server`                 |               /               |              10             | Kullanılacak CatLab Remote sunucu kimliği (otomatik keşif ile)                                                                                                                               |
| `publisher`              |               /               |           QuizWitz          | Oyunu düzenleyen profilin adı. Bu, görünümleri özelleştirmek için kullanılır                                                                                                                    |
| `smileys`                |               1               |              0              | Oyundaki smiley'leri devre dışı bırakmak için 0 yap                                                                                                                                                             |
| `outroPlayers`           |               12              |          5,4,3,1,2          | Oyun kapanışında açıklanacak oyuncuların sayısını VEYA sırasını (virgülle ayrılmış sıra listesi) belirler.                                                                   |
| `focusPositions`         |               /               |            50,100           | Quizmaster Uygulamasında gösterilecek ek sıraların bir listesini tanımla                                                                                                                                        |
| `translations`           |               1               |              0              | Yüklediğin quizin çevirilerinin yüklenmesini devre dışı bırakmak için 0 yap                                                                                                                                     |
| `cycleTranslations`      |               0               |              1              | Her soruda quizin kullanılabilen tüm dilleri arasında dönüşümlü geçmek için 1 yap                                                                                                                               |
| `showLongQuestions`      |               0               |              1              | Oyun ekranında 'uzun soru'yu göstermek için 1 yap                                                                                                                                                               |
| `forcePiecharts`         |               0               |              1              | Tüm geri bildirimleri her zaman pasta grafiklerinde göstermek için 1 yap                                                                                                                                        |
| `forceNoPiecharts`       |               0               |              1              | Geri bildirimleri hiçbir zaman pasta grafiklerinde gruplamamak için 1 yap.                                                                                                                      |
| `piechartPercentages`    |               0               |              1              | Tüm pasta grafiklerinde mutlak değerler yerine yüzdeleri göstermek için 1 yap                                                                                                                                   |
| `monitors`               |               /               |            nl,fr            | Ayarlanırsa, canlı oyunlarda yerel quizmasterlar için o dilde bir 'monitör' göstermek üzere ayrı kodlar oluşturulur.                                                                            |
| `allowLogin`             |               1               |              0              | Kullanıcıların giriş yapmasını engellemek için 0 yap                                                                                                                                                            |
| `tracker`                |               1               |              0              | Tüm izlemeyi devre dışı bırakmak için 0 yap. Quiz raporu oluşturulmaz                                                                                                                           |
| `random`                 |               0               |              1              | 'Rastgele bir quiz' yüklemek için 1 yap                                                                                                                                                                         |
| `delay`                  |               0               |            30000            | Tüm oyuncu etkileşimlerinin kaç milisaniye geciktirileceğini ayarla (canlı yayınlar için)                                                                                                    |
| `countdown`              |               10              |              60             | Oyunun sunum modunda kaç saniye 'geri sayacağını' ayarla.                                                                                                                                       |
| `autoCountdown`          |               0               |              1              | Sunum modunda ilk oyuncu katıldıktan sonra geri sayımı otomatik olarak başlatmak için 1 yap.                                                                                                    |
| `autoRestart`            |               0               |              1              | Oyun bittikten sonra otomatik olarak yeniden başlatmak için 1 yap.                                                                                                                              |
| `waitForPlayers`         |               0               |              1              | `autoCountdown` etkinken hiçbir oyuncuyu beklememek için 1 yap                                                                                                                                                  |
| `askEmail`               |               1               |              0              | Sunum modunda kullanıcının e-posta adresini sormamak için 0 yap.                                                                                                                                |
| `beacon`                 |               /               |           my-beacn          | Quizmaster Uygulamasını otomatik olarak bağlamak için kullanılabilecek bir CatLab Remote beacon token'ı ayarla.                                                                                 |
| `rounds`                 |               5               |              7              | Rastgele bir quizde oluşturulacak tur sayısını ayarla.                                                                                                                                          |
| `questions`              |               7               |              7              | Rastgele bir quizde her tur için oluşturulacak soru sayısını ayarla.                                                                                                                            |
| `showListenQuotes`       |               1               |              0              | 'Komik' "lütfen dinle" alıntılarını devre dışı bırakmak için 0 yap.                                                                                                                             |
| `shared`                 |               /               |  123:abcdef | Paylaşılan bir öğenin erişim token'ı.                                                                                                                                                           |
| `music`                  |               1               |              0              | Tüm (oyun) müziklerini devre dışı bırakmak için 0 yap. Yüklenen sesler yine de çalınır.                                                                      |
| `connectMusic`           |               1               |              0              | 'Bağlantı' aşamasında çalan (oyun) müziğini devre dışı bırakmak için 0 yap.                                                                                                  |
| `slideshowVideoInterval` |              300              |             300             | Bağlantı ekranı aşamasında videolar yüklendiğinde, bu değer her video oynatımı arasındaki saniye sayısını belirler.                                                                             |
| `slideshowImageInterval` |               20              |              60             | Bağlantı ekranı aşamasında görseller yüklendiğinde, bu değer her görselin kaç saniye gösterileceğini belirler.                                                                                  |
| `skipOnAllAnswered`      |               1               |              0              | Öğelerin `skipOnAllAnswered` ayarını geçersiz kılmak için 0 yap                                                                                                                                                 |
| `departments`            |               1               |            A,B,C            | Departmanların yüklenmesini devre dışı bırakmak için 0 yap. Bağlanan tüm oyuncuları otomatik olarak rastgele bir departmana atamak için virgülle ayrılmış bir isim listesi ver. |
| `showRankInDepartment`   |               1               |              0              | Kullanıcıların kendi departmanlarındaki sıralarını görmesini engellemek için 0 yap.                                                                                                             |
| `showDepartmentRanking`  |               1               |              0              | Turlar arasında departman sıralamasının gösterilmesini devre dışı bırakmak için 0 yap.                                                                                                          |
| `preloadVideo`           |               0               |              1              | Tüm video parçalarının önceden yüklenmesini zorlamak için 1 yap.                                                                                                                                |
| `n`                      |               /               |          `_prompt_`         | Oyunu oynayan oyuncu grubu için bir isim belirle (veya `_prompt_` değerini vererek sor). Bu isim quiz raporuna gönderilir.                                   |

---

## 💡 Kullanım ipuçları

- Birden fazla parametre `&` ile birleştirilebilir
- Bağlantıları paylaşırken veya yerleştirirken bu seçenekleri **Gelişmiş oyun ayarları** ile kullan
- Birçok seçenek, canlı yayın optimizasyonu veya çok dilli etkinlikler için kullanışlıdır

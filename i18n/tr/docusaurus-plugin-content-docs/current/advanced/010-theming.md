---
id: theming
title: "Tema oluşturma"
---

# Tema oluşturma

:::warning
Kendi QuizWitz temanı oluşturmak en fazla esnekliği sunsa da karmaşık ve zaman alan bir süreçtir. Çoğu durumda, kolayca uyarlanabilmesi için özel olarak tasarlanmış [Emerald temamızı](011-emerald-theme.md) özelleştirmek çok daha iyi bir seçimdir.
:::

QuizWitz temaları **Adobe Animate** ile oluşturulur. Başlangıç noktası olarak kullanmak için bir [tema şablonu](https://themes.quizwitz.com/empty/quizwitz-empty-theme.zip) indirebilirsin. QuizWitz için tema hazırlamanın zahmetli bir iş olduğunu ve en iyisinin bunu Adobe Animate'in inceliklerini bilen deneyimli tasarımcılara bırakmak olduğunu unutma.

İşi profesyonellere bırakmayı mı tercih edersin? [support@catlab.be](mailto:support@catlab.be) adresine bize e-posta gönder; tasarımını kullanıma hazır bir QuizWitz temasına dönüştürmek için sana bir fiyat teklifi sunabiliriz.

:::tip
Temayı bir grafik tasarımcının çizmesi ve başka birinin Animate'te birleştirmesi yaygın bir düzenlemedir. [Tema tasarım kılavuzu](012-theme-design-guide.md), bunun işe yaraması için tasarımcının neler teslim etmesi gerektiğini açıklar.
:::

---

## 🧪 Tema test aracı

Temanı test etmeye hazır olduğunda **tasarım klasörünün içeriğini zip'le** (klasörün kendisini değil; zip'i açtığında tek bir klasör değil, dosyalarını görmelisin) ve [tema test aracımıza](https://themes.quizwitz.com/) yükle. Bu sana temanın oyunda nasıl görüneceğinin canlı bir önizlemesini sunar.

Testten sonra zip dosyasını bize e-postayla gönder; temanı quizlerinde seçip kullanabilmen için onu hesabına bağlayalım.

---

## 🏷️ QuizWitz logosu

Tüm özel tasarımlar QuizWitz logosunu içermelidir.

---

## 🖥️ Ekranlara genel bakış

| Aşama                                                    | Oyun ekranı                                                                                                       | Oyuncu cihazı (Tablet/Telefon)               |
| -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Bağlantı ekranı                                          |                                                                                                                   |                                                                 |
| Bekleme ekranı                                           | Quizin logosu. Quizmaster soruyu okurken gösterilir.                              | Oyuncuyu dikkatle dinlemeye çağıran bir alıntı. |
| Oyun girişi                                              | Oyundan önceki animasyon.                                                                         | Bekleme ekranı.                                 |
| Tur girişi                                               | Her turdan önceki animasyon.                                                                      | Bekleme ekranı.                                 |
| Sorular                                                  |                                                                                                                   |                                                                 |
| Ek                                                       | Tam ekran ek görünümü (sorulardan veya turlardan önce/sonra).                  | Bekleme ekranı.                                 |
| Soru: eksiz çoktan seçmeli               | Soru + 4 çoktan seçmeli seçenek.                                                                  | Çoktan seçmeli cevap ekranı.                    |
| Soru: ekli çoktan seçmeli                | Soru + 4 çoktan seçmeli seçenek + görsel bir ek.                                                  | Çoktan seçmeli cevap ekranı.                    |
| Soru: eksiz açık uçlu soru               | Yalnızca soru.                                                                                    | Metin girişi ve gönder düğmesi.                 |
| Soru: ekli açık uçlu soru                | Soru + görsel bir ek.                                                                             | Metin girişi ve gönder düğmesi.                 |
| Aktivite: seçilen takımlar               | Bir aktivitenin adı.                                                                              | Bekleme ekranı veya "seçildin" ekranı.          |
| Geri bildirim                                            |                                                                                                                   |                                                                 |
| Soru geri bildirimi: çoktan seçmeli      | Soru, doğru seçenekler ve cevapların dağılımı.                                                    | Doğru / yanlış + kazanılan puan.                |
| Soru geri bildirimi: açık uçlu soru      | Soru, doğru seçenekler ve doğru cevapların yüzdesi.                                               | Doğru / yanlış + kazanılan puan.                |
| Soru geri bildirimi: açık uçlu soru + ek | Soru, doğru seçenekler, cevap dağılımı ve görsel bir ek.                                          | Doğru / yanlış + kazanılan puan.                |
| Soru geri bildirimi: çoktan seçmeli + ek | Soru, doğru seçenekler, cevap dağılımı ve görsel bir ek.                                          | Doğru / yanlış + kazanılan puan.                |
| Aktivite geri bildirimi                                  | Bir aktivite için seçilen takımlar.                                                               | Bekleme veya doğru/yanlış ekranı.               |
| Oyuncu sıralaması                                        |                                                                                                                   |                                                                 |
| Tur kapanışı                                             | Tüm oyuncular arasında ilk 10.                                                                    | Mevcut sıra ve toplam puan.                     |
| Oyun kapanışı                                            | 10. sıradan 1. sıraya geri sayım, ardından final ilk 10'u. | Son sıra ve toplam puan.                        |

---
id: theme-design-guide
title: Tema tasarım kılavuzu
---

# Tema tasarım kılavuzu

[Tema oluşturma](/docs/advanced/theming), bir QuizWitz temasının nasıl oluşturulduğunu açıklar: Adobe Animate'te hazırlanır ve bir CreateJS kütüphanesi olarak dışa aktarılır. Bu sayfa bundan önceki adımı, yani temanın **tasarımını** ele alır.

Bir grafik tasarımcı için yazılmıştır ve tasarımın ve Animate prodüksiyonunun farklı kişiler tarafından yapıldığını varsayar. Artık çok az tasarımcı Adobe Animate'te çalışıyor; bu yüzden genellikle tasarımcı görselleri teslim eder ve temayı başka biri birleştirir. Görseller, oluşturma sürecinin kullanabileceği bir biçimde geldiği sürece bu iyi işler. Bu sayfa o biçimi açıklar ve bir tasarımcıdan fiyat teklifi istediğinde teslim edilecekler listesi olarak da işe yarar.

Sayfa dört bölümden oluşur:

1. [Neyi tasarlıyorsun?](#what-you-are-designing) - bir temanın kapsadığı ekranlar.
2. [Sekiz çerçeve](#eight-frames-and-an-element-sheet) ve [eleman sayfası](#the-element-sheet), ekran görüntüleriyle tek tek.
3. [Tasarım kuralları](#design-rules) - motorun kullanabilmesi için dosyanın nasıl oluşturulması gerektiği.
4. [Neleri teslim etmelisin?](#what-to-hand-over) - kaynak dosya, teslim edilecekler ve çalışma sırası.

:::tip
Yalnızca renkleri, yazı tiplerini ve arka planları değiştirmek istiyorsan bunların hiçbirine ihtiyacın yok; bunun yerine [Emerald temasını](/docs/advanced/emerald-theme) özelleştir.
:::

:::info[Çalışırken gör]
Burada anlatılan her ekran, [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html) adresindeki **tema test aracında** örnek verilerle canlı olarak oynatılabilir. Bir temayı yükler ve test ekranlarından oluşan bir menü sunar: ekli ve eksiz sorular, küçük ve büyük bir grup için cevap dağılımı, sıralama, tur girişleri, müşteri logolu ve logosuz bağlantı ekranı ve benzerleri. [Emerald temasını](/docs/advanced/emerald-theme) görmek için adrese `?theme=emerald` ekle. Temayı oluşturan kişi, tema birleştirilirken kontrol etmek için aynı sayfayı kullanır.
:::

---

## Neyi tasarlıyorsun?

Bir QuizWitz oyunu tüm oda tarafından aynı anda oynanır ve her zaman iki ekran söz konusudur:

- **Oyun ekranı** - bir projektör veya TV, 1920 × 1080. Sorular, cevaplar, odanın cevaplarının nasıl dağıldığı, sıralama. Tasarladığın şey budur.
- **Her oyuncunun telefonu**, cevabını yazdığı yer. Bu sabit düzenli bir web sayfasıdır; düzenini sen yapmazsın, senin renk listene göre stillendirilir.

Tema, oyun ekranının eksiksiz görsel kaplamasıdır: arka plan, tipografi, renk, dört seçenekli bir sorunun nasıl sunulduğu, sıralamanın nasıl oluştuğu, bir turun nasıl duyurulduğu.

---

## Sekiz çerçeve ve bir eleman sayfası

Oyunun onlarca farklı ekran durumu vardır, ancak çoğu aynı düzenin varyantlarıdır. **Sekiz çerçeve ve bir eleman sayfası tasarlarsın; geri kalan her şey bunlardan türetilir.** Bu bir kısayol değil - motor böyle çalışır. Kendine ait görseli olmayan bir ekran genel çerçeveye geri döner.

Sayfa da çerçeveler kadar önemlidir: geri dönüş ekranının da içerik alanında bir donanıma ihtiyacı vardır - bir panel, bir satır, bir çizgi.

| # | Çerçeve                                                | Ayrıca kapsadıkları                                    |
| - | ------------------------------------------------------ | ------------------------------------------------------ |
| 1 | [Genel çerçeve](#frame-1---the-general-frame)          | Kendine ait görseli olmayan on üç ekran durumu         |
| 2 | [Bağlantı ekranı](#frame-2---the-connect-screen)       | İki kez çiz: müşteri logolu ve logosuz |
| 3 | [Bekleme ekranı](#frame-3---the-waiting-screen)        | -                                                      |
| 4 | [Soru ekranı](#frame-4---the-question-screen)          | -                                                      |
| 5 | [Ekli soru](#frame-5---question-with-attachment)       | Tam ekran ek ve sorular arasında gösterilen ekler      |
| 6 | [Cevap ekranı](#frame-6---the-answer-screen)           | Açık uçlu sorular ve ekli sorular için cevap ekranı    |
| 7 | [Sıralama ve kazanan](#frame-7---standings-and-winner) | Turlar arasındaki sıralama ve final kazananı           |
| 8 | [Tur girişi](#frame-8---the-round-intro)               | Altı tur kategorisinin tümü                            |

:::note[Ekran görüntüleri hakkında]
Aşağıdaki ekranlar mevcut bir temadan alınmıştır. **Her ekranda hangi öğelerin ve ne zaman göründüğünü** gösterirler. Stil _veya_ düzen için bir referans değildirler: bu temanın sorusunu, seçeneklerini ve zamanlayıcısını nereye koyduğu kendi kararıdır ve seninki tamamen farklı olabilir.
:::

### Çerçeve 1 - genel çerçeve

**Üzerinde ne var:** arka plan, bir başlık ve altında boş bir içerik alanı. Bitmiş bir kompozisyon değil, geri kalanın içine kurulduğu çerçevedir.

**Neleri kapsar:** on üç ekran durumu - tur açıklaması, sıralama, oyuncu tanıtımı, çoktan seçmeli varyantlar, uzun sorular, Seats uyarıları, ayarlar. Her biri içerik alanını [eleman sayfasındaki](#the-element-sheet) elemanlarla kendi yöntemiyle doldurur; bu yüzden çerçevenin birbirine hiç benzemeyen şeyleri taşıyabilmesi gerekir. İstersen soru seçici ve uzun soru kendi kompozisyonlarını alabilir; aksi takdirde bu çerçeveyi kullanırlar.

Aynı çerçeve üzerinde iki oyun anı: bir soru seçici ve bir puan merdiveni.

![Üç satırlı bir soru seçicisi içeren genel çerçeve](/images/theme-design/frame1-general-multiquestion.png)

![Beş seviyeli bir puan merdiveni içeren genel çerçeve](/images/theme-design/frame1-general-strikeladder.png)

Ne kadar az ortak noktaları olduğuna bak. Seçici üç satırını kenarlıklı bir panelin içine yerleştirir; merdivende ise hiç panel yoktur, yalnızca ince çizgilerle ayrılmış satırlar vardır. İkisinin ortak noktası arka plan ve üstlerindeki başlık bandıdır - bunun altındaki her şey tek tek ekrana aittir ve sen değil, oyun tarafından doldurulur.

O panel ve o çizgiler bu çerçeveden değil, [eleman sayfasından](#the-element-sheet) gelir. Bu çerçevenin yapması gereken, onları taşımaktır: içerik alanını kenarlıklı bir panelle, yalın bir listeyle ve satırlardan oluşan bir tabloyla eşit derecede uyumlu çalışan boş, nötr ve geniş bir alan olarak tasarla. Ortası kalabalık bir arka plan ya da yalnızca hemen altına yerleştirilmiş bir panelle işe yarayan bir başlık, işte bu noktada bozulur.

### Çerçeve 2 - bağlantı ekranı

**Üzerinde ne var:** odanın katılmak için ihtiyaç duyduğu her şey.

- beş satırlık talimat
- her ikisi de motor tarafından oluşturulan bir katılım kodu ve bir QR kodu - QR kodu için kare bir alan ayır
- bağlı oyuncu sayısını gösteren bir satır
- teker teker gelen oyuncuların bir listesi

**İki kez çiz:** katılım kodunun yanında bir müşteri logosuyla ve logosuz, bu durumda ekranı temanın kendi görseli taşır.

![Müşteri logolu bağlantı ekranı](/images/theme-design/frame2-connect.png)

![Müşteri logosu olmayan bağlantı ekranı](/images/theme-design/frame2-connect-nologo.png)

### Çerçeve 3 - bekleme ekranı

**Üzerinde ne var:** neredeyse hiçbir şey - quizin kendi logosu veya temanın görseli.

Bağlantı ekranıyla yalnızca arka planı paylaşır; bu yüzden onu kendi başına bir kompozisyon olarak tasarla. Quizmaster bir soruyu sesli okurken ekranda kalır; bu da onu oyundaki neredeyse her şeyden daha uzun süre ekranda tutar. Boş bir ekranın genellikle gördüğünden daha fazla ilgiyi hak eder.

![Bekleme ekranı](/images/theme-design/frame2-pending.png)

### Çerçeve 4 - soru ekranı

**Üzerinde ne var:** soru, bir zamanlayıcı, dört cevap seçeneği ve bir geri bildirim satırı. Odanın en uzun süre baktığı ekran budur. Bir seçeneğin yalnızca bir emojiden oluşabileceğini unutma:

![Dört metin seçenekli soru ekranı](/images/theme-design/frame3-question-options.png)

![Cevap seçenekleri olarak bayraklar içeren soru ekranı](/images/theme-design/frame3-question-emoji.png)

Seçeneksiz bir soru - oyuncular cevaplarını telefonlarına yazar. Ekran neredeyse boştur ve zamanlayıcı ana öğe haline gelir:

![Yalnızca soru ve büyük bir zamanlayıcı içeren açık uçlu soru](/images/theme-design/frame3-question-open.png)

Sürenin dolduğu an. Geri bildirim balonu ekranın üzerinde belirir ve zamanlayıcı boştur:

![Süre doldu durumunu gösteren soru ekranı](/images/theme-design/frame3-question-timeout.png)

### Çerçeve 5 - ekli soru

**Üzerinde ne var:** çerçeve 4'teki parçaların aynısı, bir görsel veya videonun etrafına yerleştirilmiş. Farklı bir kompozisyon olabilir. Ek, çizdiğin kutuya sığacak şekilde ölçeklenir; bu yüzden hem yatay hem de dikey bir görsel içinde kabul edilebilir görünmelidir.

**Neleri kapsar:** tam ekran ek ve sorular arasında gösterilen ekler.

Burada seçenekler ekin solunda ve sağında:

![Ortasında bir görsel olan soru ekranı](/images/theme-design/frame4-question-attachment.png)

Ekranı dolduran tek başına bir ek:

![Tam ekran ek](/images/theme-design/frame4-attachment-fullscreen.png)

### Çerçeve 6 - cevap ekranı

**Üzerinde ne var:** hangi cevabın doğru olduğu, odanın cevaplarının seçeneklere nasıl dağıldığı ve bir geri bildirim satırı.

**Neleri kapsar:** açık uçlu sorular ve ekli sorular için cevap ekranı.

Ekran üç andan geçer. Önce dağılım, henüz hiçbir şey işaretlenmeden:

![Dağılımı gösteren cevap ekranı](/images/theme-design/frame5-answer-mc-spread.png)

Ardından doğru seçenek işaretlenir ve yanlış olanların üzeri çizilir:

![Doğru seçeneğin gösterildiği cevap ekranı](/images/theme-design/frame5-answer-mc-reveal.png)

Soruda bir açıklama varsa, görselin üzerine bir balon iner. Ona yer bırak - tasarladığın her şeyin üzerine gelir:

![Açıklama balonlu cevap ekranı](/images/theme-design/frame5-answer-mc-explanation.png)

Küçük bir grupta aynı an, grafik yerine bir skor listesidir:

![Küçük bir grup için cevap ekranı](/images/theme-design/frame5-answer-mc-small.png)

Açık uçlu bir soruda grafik, kaç oyuncunun doğru bildiğini gösterir:

![Açık uçlu bir soru için cevap ekranı](/images/theme-design/frame5-answer-open.png)

### Çerçeve 7 - sıralama ve kazanan

**Üzerinde ne var:** sıra, avatar, isim ve skor içeren bir oyuncu listesi. **Oyuncu satırını** ayrı ve yeniden kullanılabilir bir eleman olarak teslim et: varsayılan olarak altı kez, en fazla on kez tekrarlanır.

**Neleri kapsar:** turlar arasındaki sıralama ve final kazananı.

Bir turdan sonraki sıralama, altı oyuncu satırıyla:

![Altı oyuncu satırlı sıralama](/images/theme-design/frame6-roundoutro.png)

Final geri sayımı, sondan birinciye doğru her seferinde bir oyuncuyu açıklar - sıra, skor ve takım adı ilgi odağında. [Uçan emojilerin](#flying-emoji-land-on-top-of-everything) en yoğun olduğu yer de burasıdır:

![Tek bir oyuncuyu açıklayan kazanan geri sayımı](/images/theme-design/frame6-winner-countdown.png)

![Final sıralaması](/images/theme-design/frame6-winner.png)

### Çerçeve 8 - tur girişi

**Üzerinde ne var:** her tur kategorisi için kısa bir duyuru. Altı kategori vardır: bilim ve teknoloji, doğa, eğlence ve müzik, spor, sanat, tarih.

**Neleri kapsar:** altı kategorinin tümü. Tek bir tasarım bunların birkaçına hizmet edebilir.

Burada, kategori başına bir varyantı olan tek bir kompozisyon:

![Doğa kategorisi için tur girişi](/images/theme-design/frame7-roundintro-nature.png)

![Bilim kategorisi için tur girişi](/images/theme-design/frame7-roundintro-science.png)

**Karakter isteğe bağlıdır.** Hazır QuizWitz temasında konuşan ve tepki veren bir karakter vardır; [Emerald teması](/docs/advanced/emerald-theme) karaktersiz gelir ve karakterden vazgeçmek en pahalı animasyon işini ortadan kaldırır - dudak senkronu, gözler, kollar.

Karakter olmadan tur girişi grafik, tipografik veya illüstratif bir ana dönüşür. İşi makul boyutta tutan iki yaklaşım vardır: kategori başına bir renk veya simge varyantı olan tek bir kompozisyon ya da yalnızca tur adının değiştiği tek bir evrensel duyuru. Birbirinden gerçekten farklı altı giriş, ekranda birkaç saniyelik süre için çok fazla iştir.

---

## Eleman sayfası

Tek bir sayfada iki eleman grubu; her biri bir kez çizilir ve her yerde yeniden kullanılır.

**İçerik yapı taşları.** Bunlar genel çerçevenin içerik alanını doldurur. Genel çerçeveye geri dönen ekranlar bunlardan oluşturulur; bu yüzden burada ne çizersen hepsinin görünümünü o belirler:

- bir **panel**: dolgu, kenarlık, köşe yarıçapı - bir listenin veya metin bloğunun içinde durduğu kap
- bir **liste satırı**: her listenin tekrar eden birimi, kendi arka planıyla ya da arka plansız
- bir **ayırıcı**: panel olmayan yerlerde satırlar arasındaki çizgi
- bir **etiket ve değer çifti**: solda kısa bir etiket, sağda bir değer

**Kontroller.** Bir kez çizilir, her ekranda kullanılır:

- dört durumuyla bir **düğme**: normal, üzerine gelinmiş, basılmış, devre dışı
- **doğru** ve **yanlış** sembolleri
- bir **kaydırma çubuğu**, bir **onay kutusu**, bir **seçim kutusu**
- **QuizWitz logosunun** nerede durduğu

---

## Senin için belirlenenler

- **Oyuncuların telefonları.** Sabit bir HTML düzeni.
- **Motorun kendisinin çizdiği birkaç şey** - puan merdivenindeki satırlar arası çizgiler, soru seçicideki vurgulanan satır, QR kodu. Renkleri [Liste olarak renk](#colour-as-a-list) bölümünden gelir.
- **Hangi ekranların genel çerçeveye geri döndüğü ve nasıl döndüğü.**
- **Altı kategorinin tur girişi görsellerine nasıl eşlendiği.** Bu eşleme bir yapılandırma ayarıdır; bu sayede tek bir giriş birkaç kategori için yeniden kullanılabilir.
- **Tüm zamanlamalar ve animasyon süreleri.**
- **Ses.** Bir tema kendi müziğini ve ses efektlerini taşıyabilir, ancak bu ayrı bir teslimattır ve tasarım brifinin parçası değildir.

---

## Tasarım kuralları

Bunların hiçbiri görsel tasarımını sınırlamaz. Dosyanın nasıl oluşturulduğuyla ilgilidir.

### Biçim

- Tam olarak **1920 × 1080 piksel**. Her ekran için bir çerçeve.
- Mümkün olan yerlerde **vektörel** çalış. Raster kullandığın yerlerde (fotoğraflar, dokular): en az 2× görüntüleme boyutu.
- Animate belgesi **saniyede 24 kare** hızında çalışır. Hareket fikirleri sunuyorsan önemlidir.
- Kenarlarda temel bilgilerden arınmış **%5'lik bir kenar boşluğu** bırak. Projektörler kenarları kırpar.

### Katman yapısı - en önemli kural

**Hareket edebilen, belirebilen veya değeri değişebilen her şey kendi adlandırılmış katmanında durur.** Hiçbir şey birleştirilmez, hiçbir şey düzleştirilmez.

Pratikte:

- dört cevap seçeneği tek değil, dört ayrı katmandır
- zamanlayıcı arka plandan ayrıdır
- bir düğme ve etiketi iki ayrı elemandır
- bir oyuncu satırı çoğaltılabilen tek bir gruptur

Birleştirilebilecek olanlar: tek bir durağan görsel olarak işleyen, tamamen dekoratif arka plan görselleri.

Uyulmadığında gerçekten can yakan tek kural budur - görselin ayrıştırılması veya yeniden çizilmesi gerekir ve bu düzenin önlemeye çalıştığı maliyet tam olarak budur.

### Korunmayan efektler

Motor bir HTML5 canvas üzerine çizim yapar. Bunlar **görsele gömülmeli** ya da hiç kullanılmamalıdır:

| Efekt                                                               | Bunun yerine ne yapmalı?        |
| ------------------------------------------------------------------- | ------------------------------- |
| Filtre olarak canlı bulanıklık, gölgeler ve parlama                 | Bunları görsel olarak teslim et |
| Karışım modları (çarp, ekran, bindirme)          | Bunları düz renge dönüştür      |
| Katman efektleri ve ayarlama katmanları                             | Görsele göm                     |
| Metnin **içinde** gradyanlar veya karakter başına dış çizgili metin | Dışarıda bırak                  |
| Kareden kareye değişen maskeler                                     | Dışarıda bırak                  |

Şekillerdeki gradyanlar sorun değildir. Saydamlık sorun değildir. Sabit görsel olarak gölgeler sorun değildir.

### Metin nasıl davranır?

QuizWitz için tasarım yapmanın sıradan tasarım işinden en çok ayrıldığı nokta burasıdır.

**Bir yazı tipi boyutu belirlemezsin. Bir kutu çizersin.**

Tüm metinler, iki şey alan bir bileşen tarafından canlı olarak çizilir: bir metin dizesi ve senin çizdiğin dikdörtgen. Ardından **o metnin satırlara bölündüğünde kutuya hâlâ sığdığı en büyük yazı tipi boyutunu** bulur. Uzun bir metin sığmak için küçülür; kısa bir metin kutu dolana kadar büyür.

![Farklı uzunluktaki üç satırın her birinin farklı bir yazı tipi boyutu aldığı bir seçici](/images/theme-design/frame1-general-multiquestion.png)

Üç satır, üç özdeş kutu - ve yalnızca metin daha kısa veya daha uzun olduğu için tamamen farklı üç yazı tipi boyutu. "Where is love" tüm yüksekliği alır; üstündeki soru iki küçük satırla yetinmek zorundadır. Soldaki etiketler de aynı şekilde davranır.

Bundan çıkan sonuçlar:

- **Aynı soru başka bir oyunda farklı görünür.** Altı kelimelik bir soru büyük ve ekranı dolduran bir şekilde görünür; otuz beş kelimelik bir soru ise tam olarak aynı kutuda beş satıra yayılmış küçük bir şekilde görünür. İkisinin de doğru görünmesi gerekir.
- **Her metin kutusunu iki kez tasarla.** Bir kez çok kısa bir örnekle, bir kez de çok uzun bir örnekle doldur ve kompozisyonun her ikisinde de dengede kaldığını kontrol et. Genel bir kural olarak: bir cevap seçeneği bir ile yaklaşık sekiz kelime, bir soru beş ile kırk kelime, bir oyuncu adı iki ile yirmi karakter arasındadır.
- **Sabit bir satır sayısına güvenme.** "Her zaman tek satırda" olan bir başlık burada yoktur.
- **Metni başka hiçbir şeyle optik olarak hizalama.** Bir çizgi veya şekille hizalanması gereken metin, daha kısa veya daha uzun olduğu anda kayar. Kesin konumlar yerine yeterince geniş kutular ve bir hizalama (sola, ortaya, sağa) kullan.
- **On iki dil.** Almanca bileşik kelimeler uzundur ve Macarca da bu konuda daha insaflı değildir. İngilizcede dar olan bir kutu, Almancada okunamayacak kadar küçük bir boyuta düşer.
- **Metnin içinde emoji görünebilir.** Oyuncular takım adlarının yanına bir tane seçer ve bir soru veya seçenek de emoji içerebilir - bazen bir seçenek yalnızca bir emojiden ibarettir. Renkli çizilirler ve çevrelerindeki harflerden daha uzundurlar.

**Oluşturma sürecinin her metin kutusu hakkında bilmesi gerekenler:** nerede olduğu, ne kadar büyük olduğu, nasıl hizalandığı, hangi renk ve hangi yazı tipi. Şu değil: hangi punto boyutunda.

**Bunu kullanabilirsin.** Kısa metinli büyük bir kutu tek başına güçlü bir tipografik kompozisyon olur ve bilerek dar ve uzun yaptığın bir kutu metni bir sütuna zorlar. Sığdırmayı bir tasarım aracı olarak kullan; sadece ona karşı tasarım yapma.

### Zamanlayıcı - zorunludur ve bir animasyondur

**Her soru ekranında bir zamanlayıcı vardır**; oda ne kadar süre kaldığını görebilmelidir.

**Zamanlayıcı sayan bir rakam değil, oynatma kafasını motorun hareket ettirdiği bir animasyondur.** "Dolu"dan "boş"a bir ilerleme tasarlarsın - boşalan bir çubuk, kapanan bir halka, bir kum saati, kısalan bir çizgi. Motor bu animasyonu, son karenin sorunun bitişiyle tam olarak çakışacağı hızda oynatır.

Bundan çıkan sonuçlar:

- **Soru süresi sabit değildir.** Her quiz için ayrı ayarlanır - genellikle yirmi ile otuz saniye arasındadır, ancak daha kısa veya daha uzun olabilir. Animasyonun sığması için uzatılır veya sıkıştırılır.
- **Rakam veya saniye başına tik yok.** "20, 19, 18…" diye sayan bir zamanlayıcı, süre değiştiği anda doğru olmaktan çıkar.
- **Son saniyeler oyunun en gergin anıdır.** İlerleme sona doğru daha belirgin veya daha acil hale gelirse faydalı olur.
- Bir bakışta **odanın arka tarafından okunabilir** olmalı.
- **Birden fazla zamanlayıcıya izin verilir.** Her biri `timer` olarak adlandırıldığı sürece hem üstteki bir çubuk hem de sorunun yanındaki bir halka birlikte çalıştırılır.

Zamanlayıcıyı bir dizi anahtar kare ya da ilerlemenin bir açıklaması olarak teslim et - "çubuk sağdan sola boşalır ve yeşilden kırmızıya döner" yeterlidir.

### Uçan emojiler her şeyin üzerine konar

Her oyuncu katılırken bir emoji seçer ve oyun bu emojileri ekranın üzerinden fırlatır. Motor tarafından temanın üzerindeki bir katmanda çizilirler. **Burada senin tasarlayacağın bir şey yok** - ama göz önünde bulundurarak tasarlaman gereken bir şey var, çünkü nadir görülen bir süsleme değiller.

Üç anda ortaya çıkarlar:

- **Bir oyuncu cevap verdiğinde.** Emojisi alt kenardan rastgele bir yatay konumda yükselir, bir yay çizer ve kadrajın dışına geri düşer.
- **Bir oyuncu emoji fırlattığında.** Oyuncular emojilerini telefonlarından fırlatabilir; açı ve hız kaydırma hareketinden gelir ve emoji dönerek alt ortadan fırlatılır.
- **Final geri sayımında bir sıra açıklandığında.** Adı geçen oyuncunun emojilerinden bir patlama: sıradan bir sıra için yirmi, üçüncü için elli, ikinci için yetmiş beş ve **kazanan için yüz elli.**

Bunun tasarım açısından anlamı:

- **Sıralama ve kazanan ekranlarının alt üçte birini küçük veya kritik her şeyden arındır.** Geri sayım sırasında orası gerçekten kalabalıktır.
- **Paletinle çatışacaklarını varsay.** Unicode tablosunun her köşesinden gelen tam renkli emojilerdir ve hiçbir tema onları kontrol etmez. Yalnızca dar bir renk aralığında bütünlüğünü koruyan bir tasarım, o saniyeler boyunca rastlantısal görünür.
- **Bir görsel veya video gösterilirken emoji fırlatma bastırılır**, böylece ek ekranları temiz kalır.
- **Katmanın tamamı oyun başına kapatılabilir**, bu yüzden onların orada olmasına bağlı bir kompozisyon da kurma.

### Yazı tipleri

- **Yazı tipleri gömülebilir olmalıdır.** `.ttf` veya `.otf` dosyası ve bir uygulamaya gömmeye izin veren bir lisans gerekir. Yalnızca web yazı tipi olarak veya yalnızca baskı için lisanslanmış bir yazı tipi kullanılamaz. Bununla tasarım yapmadan önce kontrol et; sonradan düzeltmek pahalıya patlar.
- Alışılmadık derecede büyük üst veya alt uzantıları olan yazı tipleri telafi edilebilir, ancak böyle bir yazı tipi kullanıyorsan bunu belirt.

### Liste olarak renk

Tema bir yapılandırma dosyasından bir renk listesi okur ve oyuncuların telefonları da aynı listeye göre stillendirilir. Paletini yalnızca görseldeki renkler olarak değil, **adlandırılmış bir liste** olarak da teslim et:

| Nerede                      | Renkler                                                                                                                                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Oyun ekranı**             | Ana renk, vurgu rengi, arka plan, panel veya kap rengi, zamanlayıcı arka planı, varsayılan metin rengi, başlık metni rengi, soru metni rengi, düğme metni, diyalog ve açıklama metni, oyuncu adı ve skor metni, doğru rengi, yanlış rengi |
| **Dört cevap seçeneği**     | Her seçenek için: bir arka plan rengi, bir kenarlık rengi ve telefonlar ile grafikler için tek bir düz renk                                                                                                               |
| **Oyuncuların telefonları** | Arka plan, metin rengi, dış çizgi rengi, seçenek dış çizgi rengi ve cevap kabının arka plan ve metin rengi                                                                                                                                |

Oyun ekranında gradyanlara izin verilir: bunları iki hex değeri olarak ver.

Birkaç renk, motorun kendisinin çizdiği parçalar üzerindeki _tek_ kontrol aracıdır; bu yüzden varsayılana bırakmak yerine üzerinde karar vermeye değer:

- **ayırıcı** - panel olmayan yerlerde ve puan merdiveninde satırlar arasındaki çizgiler
- soru seçicideki bir satırın **aktif**, **pasif** ve **seçili** durumları
- **diyalog** metni
- **QR kodunun ön ve arka rengi**

Bunları dışarıda bırakırsan yerleşik varsayılanlara - beyaz, gri, kırmızı, siyah ve beyaz - geri dönerler; bunlar da nadiren bir tasarıma uyar.

### QuizWitz logosu

Özel tasarımlar QuizWitz logosunu içerir. Logo için tasarımın önüne geçmeyeceği bir yer ayır.

---

## Neleri teslim etmelisin?

### Kaynak dosya - tercihen Illustrator

Tema Adobe Animate'te oluşturulur ve Animate'in neyi içe aktarabildiği, emeğinin ne kadarının teslimattan sağlam çıkacağını belirler:

| Araç                                             | İçe aktarmada ne olur?                                                                                                                                                                                                                                                                                 | Ne için kullanılır?                   |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| **Adobe Illustrator** (`.ai`) | Animate onu doğrudan içe aktarır ve katmanlarını Animate katmanlarına veya ayrı sembollere dönüştürür; katman adlarını korur ve vektörleri düzenlenebilir bırakır. Görselin elle yeniden oluşturulmasını önleyen adım tam olarak budur.                                | Son teslimat için **tercih edilen**   |
| **Adobe Photoshop**                              | Illustrator gibi katmanlarını koruyarak içe aktarılır, ancak vektör yerine raster verir.                                                                                                                                                                                               | Mümkün                                |
| **Figma**                                        | Her şey SVG ve PNG dışa aktarımından geçer ve burada gereken katman yapısı tam olarak bu noktada kaybolur. Figma kullanıyorsan, yapının elle yeniden kurulabilmesi için **her öğeyi ayrı ayrı SVG olarak**, dosya adları katman adlarıyla eşleşecek şekilde teslim et. | Konsept aşaması, orada daha hızlıysan |

Dosya yapısı:

- Her ekran için bir çalışma yüzeyi, yukarıdaki çerçevelere göre adlandırılmış.
- Yeniden kullanılabilir parçalar (düğme, oyuncu satırı, cevap seçeneği, zamanlayıcı) serbest kopyalar olarak değil, **semboller** veya bileşenler olarak.
- Katman adları İngilizce ve boşluksuz: `question`, `option1` ile `option4` arası, `timer`, `feedback`, `header`, `background`, `playerScore`.
- Renkler her nesneye ayrı ayrı atanmak yerine adlandırılmış renk örnekleri, metinler ise adlandırılmış stiller olarak.

### Teslimat kontrol listesi

1. Yukarıdaki gibi yapılandırılmış **kaynak dosya**.
2. 1920 × 1080 boyutunda **her çerçeve bir PNG olarak** - nasıl görünmesi gerektiğine dair bir referans. Çerçeve 2 için hem müşteri logolu hem de logosuz sürüm.
3. Tek bir çalışma yüzeyi olarak **eleman sayfası**: [içerik yapı taşları ve kontroller](#the-element-sheet).
4. **Her ayrı grafik öğe 2× boyutunda saydam bir PNG olarak**, tek bir klasörde, dosya adı katman adıyla eşleşecek şekilde.
5. Anahtar kareler veya ilerlemenin yazılı bir açıklaması olarak **zamanlayıcı**.
6. Lisans kanıtıyla birlikte `.ttf` veya `.otf` olarak **yazı tipleri**.
7. Hex değerleri olarak [Liste olarak renk](#colour-as-a-list) bölümündeki **renk listesi**.
8. **Yarım sayfalık notlar**: fikrin ne olduğu, seçeneklerin nasıl görünmesi gerektiği, neyin hareket edip neyin sabit kaldığı. On sayfalık bir tasarım gerekçesi değil - temayı oluşturan kişinin neyi oluşturacağını bilmesi gerekir. Hareket fikirleri anlatılabilir veya kaba bir animatik olarak teslim edilebilir.

### Çalışma sırası

1. **Çerçeve 4, soru ekranı, eleman sayfasıyla birlikte.** Geri kalanına geçmeden önce ikisini de onaylat. Zamanlayıcıyı, seçenekleri, paneli ve tüm kontrolleri birlikte taşıdıkları için tüm temanın stilini belirlerler.
2. **Çerçeve 1 ile 3 arası.** İlk ikisinden doğal olarak çıkarlar.
3. **Çerçeve 6 ile 8 arası** en son gelir.

---

## Ek - sembol adları

Eksiksiz olması için ve görselinin tam olarak nereye gittiğini bilmek isteyen herkes için. **İşi yapmak için bunu okuman gerekmez**; yukarıdaki sekiz çerçeve ve eleman sayfası yeterlidir. Bu adları katman adı olarak kullanmak bir çeviri adımından tasarruf sağlar.

| Çerçeve                                    | Sembol adı                                                                                                                                | Gerekli parçalar                                                                                                                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. Genel çerçeve    | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` isteğe bağlı                                                                     | `placeholder` (içerik alanı); `title` metin kutusu isteğe bağlı                                                                                                                               |
| 1b. Soru seçici, uzun soru | `MultiQuestionScreen`, `LongQuestionScreen`; ikisi de isteğe bağlı, genel çerçeveye geri döner                                            | seçici: `questions` yer tutucusu, `timer`; uzun soru: `question` yer tutucusu                                                                                                    |
| 2. Bağlantı ekranı  | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` isteğe bağlı, bir `logo` yer tutucusuyla                                 | `instructions.line1` ile `line5` arası, `connectedPlayers`; `showQrCode` kare etiketiyle `qrCode` yer tutucusu isteğe bağlı                                                                                      |
| 3. Bekleme ekranı   | `PendingScreen`; `PendingScreenWithLogo` isteğe bağlı                                                                                     | `header.text`                                                                                                                                                                                                    |
| 4. Soru ekranı      | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` ile `option4` arası, `showOptions` ve `showFeedback` kare etiketleri                                                                                        |
| 5. Ekli soru        | `QuestionScreenAttachment`                                                                                                                | yukarıdakiyle aynı, artı `attachment.placeholder`                                                                                                                                                                |
| 5b. Tam ekran ek           | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                    |
| 6. Cevap ekranı     | `AnswerPieScreen`; `AnswerPieScreenAttachment` isteğe bağlı                                                                               | `option1` ile `option4` arası, `answer.text`, `feedback.text`                                                                                                                                                    |
| 6b. Açık uçlu soru cevabı  | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` varyantları isteğe bağlı                                                     | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                            |
| 7. Sıralama         | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` ve `PlayerScoreNoImage` isteğe bağlı                            | `header.text`, `players`, `feedback.text` (`playAgain.text` isteğe bağlı); satırda: `position`, `name`, `score`, `avatar` isteğe bağlı                                        |
| 8. Tur girişi       | herhangi bir adla bir veya daha fazla sembol; yapılandırma dosyası altı kategorinin her birini bir sembole eşler                          | -                                                                                                                                                                                                                |
| -                                          | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                               |
| -                                          | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | kendine ait görsel gerekmez - çerçevelerinde görünenlerden oluşturulur                                                                                                                                           |
| -                                          | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | yalnızca masaüstü uygulamasında gösterilir, canlı bir quizde değil. Brifin parçası değildir: tema şablonundan alınır ve senin arka planın ve düğmelerinle yeniden stillendirilir |

Hazır temanın tur girişi sembollerinin adları `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` ve `RoundIntroTedCultHist` şeklindedir; sanat ve tarih sonuncusunu paylaşır. Bu adlardaki "Ted", orijinal temanın karakterinden kalma bir kalıntıdır ve bu girişlerde bir karakterin yer alması gerektiği anlamına gelmez.

Arkasında `.text` olan her eleman, [Metin nasıl davranır?](#how-text-behaves) bölümünde anlatıldığı gibi sığdırılmış bir metin kutusudur: motorun kendisinin doldurduğu bir dikdörtgen. `timer` öğesi kendi zaman çizelgesi olan bir movie clip'tir; motor kare sayısını okur ve oynatma kafasını geçen süreyle orantılı olarak, saniyede en fazla 24 kez hareket ettirir.

### Yapılandırma dosyasının tasarımından aldıkları

```json
{
  "fontFiles": { "<body font>": "fonts/body.ttf", "<heading font>": "fonts/heading.ttf" },
  "fonts":  { "default": "<body font>", "header": "<heading font>" },
  "colors": {
    "_accent_": "#…", "_main_": "#…", "_background_": "#…-#…",
    "_container_": "#…", "_timerBackground_": "#…",
    "default": "#…", "header": "#…", "question": "#…",
    "buttons": "#…", "dialog": "#…", "player": "#…",
    "_optionColors_": [ { "background": "#…-#…", "border": "#…" } ]
  },
  "optionColors": [ "#…", "#…", "#…", "#…" ],
  "booleanResultColors": { "correct": "#…", "wrong": "#…" },
  "remoteColors": {
    "background": "#…", "text": "#…", "outline": "#…",
    "options-outline": "#…", "container-background": "#…", "container-text": "#…"
  },
  "roundIntros": { "science": "<symbol>", "nature": "<symbol>", "entertainment": "<symbol>",
                   "sports": "<symbol>", "art": "<symbol>", "history": "<symbol>" },
  "overlay": "light | dark"
}
```

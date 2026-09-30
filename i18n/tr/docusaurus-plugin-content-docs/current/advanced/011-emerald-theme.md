---
id: emerald-theme
title: Emerald teması
---

# Emerald teması

Emerald teması, QuizWitz oyununun görünümünü özelleştirmenin en kolay yoludur. Varsayılan olarak tema, canlı seçenek renklerine sahip sade bir mavi / yeşil stildedir; ancak quiz eklerini ve tema değiştiricilerini birleştirerek görünümünü büyük ölçüde değiştirebilirsin.

:::tip
Ayarlarının nasıl görüneceğini görmek için [tema test aracımızı](https://client.quizwitz.com/test.html?theme=emerald) kullanabilirsin.
:::

![Emerald temasının ekran görüntüsü](/images/emerald/emerald.png)

## Emerald temasını seç

**Quiz ayarları** bölümünde **Tema**'yı seç ve **Emerald**'ı etkinleştir.

Emerald temasını kullanan bir quizi [burada](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default) test edebilirsin.

![Quiz ayarlarının ekran görüntüsü](/images/emerald/quiz-settings.png)

## Ekler

### Quiz ekleri

Oyunun görünümünü ve havasını değiştirmenin açık ara en kolay yolu, quizine görseller eklemektir. **Quiz ayarları**nı aç ve **Ekler** bölümüne kadar aşağı kaydır. Burada arka plan, müşteri logosu, bağlantı ve bekleme ekranları (konferans ve canlı quizler için) ve daha fazlası için kullanılacak görseller yükleyebilirsin.

![Quiz eklerinin ekran görüntüsü](/images/emerald/quiz-attachments.png)

### Tur ekleri

Oyundan önce ve sonra oynatılacak görseller veya videolar da yükleyebilirsin. Bu turlar için de geçerlidir: tur girişi olarak kullanmak istediğin bir görsel bul, **tur ayarları**na git, varsayılan tur girişini gizlemek için **Tur girişini göster** seçeneğini devre dışı bırak ve görselini veya videonu **Turdan önce göster** olarak yükle. Tur başladığında varsayılan giriş yerine görsel veya video gösterilir.

![Tur eklerinin ekran görüntüsü](/images/emerald/round-settings.png)

:::tip
En iyi sonuç için 1920 x 1080 çözünürlüğünde görseller ve videolar kullan.
:::

:::info
Eklerle biraz oynadıktan sonra [bunun gibi](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo) bir sonuç elde ederiz.
:::

![Quiz ekleriyle Emerald temasının ekran görüntüsü](/images/emerald/emerald-with-attachments.png)

### Müzik

Oyundaki tüm müzikler de eklerle değiştirilebilir. **Soru sırasında** yuvalarına yüklenen tüm ses dosyaları, soru geri sayımı sırasında çalınır.

## Emerald teması değiştiricileri

Eklerin yanı sıra Emerald temasını **sorgu parametreleriyle** de değiştirebilirsin. Bunlar, **gelişmiş oyun seçenekleri** URL'sine ekleyebileceğin ve temanın görünümünü değiştiren parametrelerdir.

Bunun için örnek bir quizle (hiç eki olmayan) başlayacağız:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

Yukarıdaki quizi başlattığında oyun varsayılan Emerald stilinde olacaktır. Hadi bunu değiştirelim.

:::tip
Bu parametrelerle denemeler yapmanın en kolay yolu [tema test aracımızı](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b) kullanmaktır.  
Denemeyi bitirdiğinde parametreleri kopyalayıp gelişmiş oyun seçenekleri URL'ne yapıştırabilirsin.
:::

Kullanılabilen değiştiriciler şunlardır:

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors (4 renk, virgülle ayrılmış)
- optionBorderColors (4 renk, virgülle ayrılmış)

Ayrıca varsayılan bir yazı tipi de ayarlayabilirsin:

- defaultFont
- headerFont

Bu yazı tipleri, herkese açık yazı tipi dosyalarının URL'leri olmalıdır.

Bu değiştiricilerin her biri HTML hex biçiminde tek bir renk (ff0000) ya da eksi işaretiyle ayrılmış birden fazla renk vererek doğrusal bir gradyan (örneğin ff1b6b-45caff) içerebilir. (# simgesinin eklenmemesi gerektiğini unutma.)

:::note
Sorgu parametreleri bir soru işaretiyle ( ? ) başlamalı ve her parametre bir ve işaretiyle ( & ) ayrılmalıdır. Sorgu parametreleri hakkında daha fazla bilgi için [Wikipedia](https://en.wikipedia.org/wiki/Query_string)'yı ziyaret et.
:::

Bu parametreleri oyun URL'ne ekleyerek temadaki renkleri değiştirebilirsin:  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![Özel değiştiricilerle Emerald temasının ekran görüntüsü](/images/emerald/theme_properties.png)

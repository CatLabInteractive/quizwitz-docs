---
id: theme-design-guide
title: थीम डिज़ाइन गाइड
---

# थीम डिज़ाइन गाइड

[थीमिंग](/docs/advanced/theming) बताती है कि QuizWitz थीम कैसे बनाई जाती है: Adobe Animate में, CreateJS लाइब्रेरी के रूप में एक्सपोर्ट करके. यह पेज उससे पहले वाले कदम के बारे में है - थीम को **डिज़ाइन** करने के बारे में.

It is written for a graphic designer, and it assumes that design and Animate production are done by different people. Few designers still work in Adobe Animate, so a designer usually delivers artwork and someone else assembles the theme. That works well, as long as the artwork arrives in a shape the build can use. यह पेज उसी रूप का वर्णन करता है, और साथ ही उन चीज़ों की सूची भी है जो आप किसी डिज़ाइनर से कोटेशन माँगते समय माँगेंगे.

The page has four parts:

1. [What you are designing](#what-you-are-designing) - the screens a theme covers.
2. [The eight frames](#eight-frames-and-an-element-sheet) and [the element sheet](#the-element-sheet), one by one, with screenshots.
3. [Design rules](#design-rules) - how the file has to be built so the engine can use it.
4. [What to hand over](#what-to-hand-over) - source file, deliverables and order of work.

:::tip
अगर आप सिर्फ़ रंग, फ़ॉन्ट और बैकग्राउंड बदलना चाहते हैं, तो आपको इनमें से कुछ भी नहीं चाहिए - इसके बजाय [Emerald थीम](/docs/advanced/emerald-theme) को अपने हिसाब से बदलें.
:::

:::info[इसे चलते हुए देखें]
यहाँ बताई गई हर स्क्रीन को नमूना डेटा के साथ लाइव खेलकर देखा जा सकता है, **थीम टेस्टर** में [client.quizwitz.com/test.html](https://client.quizwitz.com/test.html) पर. यह एक थीम लोड करता है और टेस्ट स्क्रीनों का मेन्यू देता है: अटैचमेंट के साथ और बिना अटैचमेंट वाले सवाल, छोटे और बड़े समूह के लिए जवाबों का फैलाव, रैंकिंग, राउंड इंट्रो, क्लाइंट लोगो के साथ और बिना लोगो वाली कनेक्ट स्क्रीन, वगैरह. पते में `?theme=emerald` जोड़ें ताकि [Emerald थीम](/docs/advanced/emerald-theme) दिख सके. जो थीम बनाता है, वह उसे जोड़ते समय जाँचने के लिए यही पेज इस्तेमाल करता है.
:::

---

## आप क्या डिज़ाइन कर रहे हैं

QuizWitz का एक गेम पूरा हॉल एक साथ खेलता है, और हमेशा दो स्क्रीन शामिल रहती हैं:

- **गेम स्क्रीन** - एक प्रोजेक्टर या टीवी, 1920 × 1080. सवाल, जवाब, हॉल के जवाब कैसे बँटे, रैंकिंग. यही आप डिज़ाइन करते हैं.
- **हर खिलाड़ी का फ़ोन**, जिस पर वह अपना जवाब टाइप करता है. वह एक तय लेआउट वाला वेब पेज है; उसकी स्टाइल आपकी रंगों की सूची से आती है, उसका लेआउट आप नहीं बनाते.

थीम गेम स्क्रीन की पूरी दृश्य परत है: बैकग्राउंड, टाइपोग्राफ़ी, रंग, चार विकल्पों वाला सवाल जिस तरह दिखाया जाता है, रैंकिंग जिस तरह बनती है, राउंड की घोषणा जिस तरह होती है.

---

## Eight frames and an element sheet

गेम में दर्जनों अलग-अलग स्क्रीन अवस्थाएँ हैं, लेकिन ज़्यादातर एक ही लेआउट के रूप हैं. **You design eight frames and one sheet of elements; the rest is derived from them.** That is not a shortcut - it is how the engine works. जिस स्क्रीन का अपना आर्टवर्क नहीं होता, वह सामान्य फ़्रेम पर लौट आती है.

The sheet matters as much as the frames: a fall-back screen still needs furniture inside its content area - a panel, a row, a rule.

| # | फ़्रेम                                                          | Also covers                                                               |
| - | --------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1 | [General frame](#frame-1---the-general-frame)                   | Thirteen screen states with no artwork of their own                       |
| 2 | [Connect screen](#frame-2---the-connect-screen)                 | Draw it twice: with a client logo and without one         |
| 3 | [Waiting screen](#frame-3---the-waiting-screen)                 | -                                                                         |
| 4 | [Question screen](#frame-4---the-question-screen)               | -                                                                         |
| 5 | [Question with attachment](#frame-5---question-with-attachment) | The full-screen attachment, and attachments shown between questions       |
| 6 | [Answer screen](#frame-6---the-answer-screen)                   | The answer screen for open questions and for questions with an attachment |
| 7 | [Standings and winner](#frame-7---standings-and-winner)         | The standings between rounds and the final winner                         |
| 8 | [Round intro](#frame-8---the-round-intro)                       | All six round categories                                                  |

:::note[About the screenshots]
नीचे दी गई स्क्रीन एक मौजूदा थीम से हैं. They show **which elements appear on each screen and when**. ये न शैली की और _न ही_ लेआउट की मिसाल हैं: यह थीम अपना सवाल, अपने विकल्प और अपना टाइमर कहाँ रखती है, यह उसका अपना फ़ैसला है, और आपका बिलकुल अलग हो सकता है.
:::

### फ़्रेम 1 - सामान्य फ़्रेम

**What is on it:** the background, a header title and an empty content area below it. It is not a finished composition but the frame the rest is built inside.

**What it covers:** thirteen screen states - round explanation, standings, player introduction, multiple-choice variants, long questions, seat warnings, settings. Each fills the content area its own way with elements from the [element sheet](#the-element-sheet), so the frame has to hold things that look nothing alike. सवाल पिकर और लंबे सवाल को अपनी अलग रचना मिल सकती है, अगर आप चाहें; वरना वे यही फ़्रेम इस्तेमाल करते हैं.

एक ही फ़्रेम पर गेम के दो पल: एक सवाल पिकर और एक पॉइंट्स लैडर.

![तीन पंक्तियों वाले सवाल पिकर के साथ सामान्य फ़्रेम](/images/theme-design/frame1-general-multiquestion.png)

![पाँच स्तरों वाले पॉइंट्स लैडर के साथ सामान्य फ़्रेम](/images/theme-design/frame1-general-strikeladder.png)

देखिए कि इनमें कितना कम एक जैसा है. पिकर अपनी तीन पंक्तियाँ किनारे वाले पैनल के अंदर रखता है; लैडर में पैनल है ही नहीं, बस पतली लकीरों से अलग की गई पंक्तियाँ. दोनों में जो साझा है वह बैकग्राउंड और उनके ऊपर की हेडर पट्टी है - उसके नीचे जो कुछ है वह अलग-अलग स्क्रीन का है और उसे गेम भरता है, आप नहीं.

That panel and those rules come from the [element sheet](#the-element-sheet), not from this frame. इस फ़्रेम को बस उन्हें सँभालना है: कॉन्टेंट एरिया को एक खाली, तटस्थ, खुली जगह की तरह डिज़ाइन करें जो किनारे वाले पैनल, सादी सूची और पंक्तियों की तालिका, तीनों के साथ बराबर चले. बीच में भरा-भरा बैकग्राउंड, या ऐसा हेडर जो सिर्फ़ ठीक नीचे लगे पैनल के साथ चलता हो, वहीं यह टूटता है.

### Frame 2 - the connect screen

**What is on it:** everything the room needs in order to join.

- five lines of instruction
- a join code and a QR code, both generated by the engine - reserve a square for the QR code
- a line with the number of connected players
- a list of players trickling in

**Draw it twice:** with a client logo beside the join code, and without one, where the theme's own artwork carries the screen.

![क्लाइंट लोगो के साथ कनेक्ट स्क्रीन](/images/theme-design/frame2-connect.png)

![क्लाइंट लोगो के बिना कनेक्ट स्क्रीन](/images/theme-design/frame2-connect-nologo.png)

### Frame 3 - the waiting screen

**What is on it:** almost nothing - the quiz's own logo, or the theme's artwork.

It shares only a background with the connect screen, so design it as its own composition. It stays up while the quizmaster reads a question aloud, which puts it on screen longer than almost anything else in the game. It deserves more attention than an empty screen usually gets.

![वेटिंग स्क्रीन](/images/theme-design/frame2-pending.png)

### Frame 4 - the question screen

**What is on it:** the question, a timer, four answer options and a feedback line. This is the screen the room looks at longest. Note that an option can consist of nothing but an emoji:

![चार टेक्स्ट विकल्पों वाली सवाल स्क्रीन](/images/theme-design/frame3-question-options.png)

![जवाब विकल्पों के रूप में झंडों वाली सवाल स्क्रीन](/images/theme-design/frame3-question-emoji.png)

बिना विकल्पों वाला सवाल - खिलाड़ी अपना जवाब अपने फ़ोन पर टाइप करते हैं. स्क्रीन लगभग खाली रहती है और टाइमर मुख्य एलिमेंट बन जाता है:

![सिर्फ़ सवाल और एक बड़े टाइमर के साथ ओपन सवाल](/images/theme-design/frame3-question-open.png)

वह पल जब समय ख़त्म होता है. फ़ीडबैक का गुब्बारा स्क्रीन के ऊपर आ जाता है और टाइमर खाली रहता है:

![समय ख़त्म होने की अवस्था दिखाती सवाल स्क्रीन](/images/theme-design/frame3-question-timeout.png)

### Frame 5 - question with attachment

**What is on it:** the same parts as frame 4, arranged around an image or video. It may be a different composition. अटैचमेंट को आपके बनाए बॉक्स में समाने के लिए स्केल किया जाता है, इसलिए उसमें चौड़ी और लंबी दोनों तरह की तस्वीरें ठीक दिखनी चाहिए.

**What it covers:** the full-screen attachment, and attachments shown between questions.

Here with the options to the left and right of the attachment:

![बीच में तस्वीर के साथ सवाल स्क्रीन](/images/theme-design/frame4-question-attachment.png)

अकेला अटैचमेंट, पूरी स्क्रीन भरता हुआ:

![पूरी स्क्रीन वाला अटैचमेंट](/images/theme-design/frame4-attachment-fullscreen.png)

### Frame 6 - the answer screen

**What is on it:** which answer was correct, how the room's answers were spread across the options, and a feedback line.

**What it covers:** the answer screen for open questions and for questions with an attachment.

The screen goes through three moments. पहले फैलाव, जिसमें अभी कुछ भी चिह्नित नहीं है:

![फैलाव दिखाती जवाब स्क्रीन](/images/theme-design/frame5-answer-mc-spread.png)

फिर सही विकल्प पर निशान लगता है और ग़लत विकल्प काट दिए जाते हैं:

![सही विकल्प खुलने के साथ जवाब स्क्रीन](/images/theme-design/frame5-answer-mc-reveal.png)

और अगर सवाल के साथ व्याख्या हो, तो आर्टवर्क के ऊपर एक गुब्बारा उतरता है. उसके लिए जगह छोड़ें - वह आपकी बनाई हर चीज़ के ऊपर आकर बैठता है:

![व्याख्या के गुब्बारे के साथ जवाब स्क्रीन](/images/theme-design/frame5-answer-mc-explanation.png)

छोटे समूह में वही पल चार्ट के बजाय स्कोर की सूची होता है:

![छोटे समूह के लिए जवाब स्क्रीन](/images/theme-design/frame5-answer-mc-small.png)

ओपन सवाल के लिए चार्ट दिखाता है कि कितने खिलाड़ियों ने सही जवाब दिया:

![ओपन सवाल के लिए जवाब स्क्रीन](/images/theme-design/frame5-answer-open.png)

### Frame 7 - standings and winner

**What is on it:** a list of players with position, avatar, name and score. Supply the **player row** as a separate, reusable element: it is repeated six times by default, up to ten.

**What it covers:** the standings between rounds and the final winner.

The standings after a round, with six player rows:

![छह खिलाड़ी रो के साथ रैंकिंग](/images/theme-design/frame6-roundoutro.png)

आख़िरी उलटी गिनती एक बार में एक खिलाड़ी का नाम लेती है, आख़िरी स्थान से पहले स्थान तक - स्थान, स्कोर और टीम का नाम रोशनी में. This is also where the [flying emoji](#flying-emoji-land-on-top-of-everything) are heaviest:

![एक खिलाड़ी का नाम लेती विजेता की उलटी गिनती](/images/theme-design/frame6-winner-countdown.png)

![आख़िरी रैंकिंग](/images/theme-design/frame6-winner.png)

### Frame 8 - the round intro

**What is on it:** a short announcement per round category. छह कैटेगरी हैं: विज्ञान और तकनीक, प्रकृति, मनोरंजन और संगीत, खेल, कला, इतिहास.

**What it covers:** all six categories. One design may serve several of them.

Here, one composition with a variant per category:

![प्रकृति कैटेगरी के लिए राउंड इंट्रो](/images/theme-design/frame7-roundintro-nature.png)

![विज्ञान कैटेगरी के लिए राउंड इंट्रो](/images/theme-design/frame7-roundintro-science.png)

**A character is optional.** The stock QuizWitz theme has one that talks and reacts; the [Emerald theme](/docs/advanced/emerald-theme) ships without, and dropping it removes the most expensive animation work - lip sync, eyes, arms.

किरदार के बिना राउंड इंट्रो एक ग्राफ़िक, टाइपोग्राफ़िक या चित्रात्मक पल बन जाता है. दो तरीक़े काम को अनुपात में रखते हैं: हर कैटेगरी के लिए एक रंग या आइकॉन रूप वाली एक रचना, या एक ही सार्वभौमिक घोषणा जिसमें सिर्फ़ राउंड का नाम बदलता है. छह सचमुच अलग इंट्रो कुछ सेकंड की स्क्रीन के लिए बहुत काम हैं.

---

## एलिमेंट शीट

एलिमेंट के दो समूह, एक ही शीट पर, हर एक एक बार बनाया और हर जगह दोबारा इस्तेमाल किया गया.

**कॉन्टेंट की बुनियादी इकाइयाँ.** ये सामान्य फ़्रेम का कॉन्टेंट एरिया भरती हैं. जो स्क्रीन उस पर लौटती हैं वे इन्हीं से जुड़ती हैं, इसलिए आप यहाँ जो बनाते हैं वही तय करता है कि वे सब कैसी दिखेंगी:

- एक **पैनल**: भराव, किनारा, कोनों की गोलाई - वह कंटेनर जिसमें कोई सूची या टेक्स्ट का हिस्सा बैठता है
- एक **लिस्ट रो**: किसी भी सूची की दोहराई जाने वाली इकाई, अपने बैकग्राउंड के साथ या बिना
- एक **सेपरेटर**: पंक्तियों के बीच की लकीर, जहाँ पैनल नहीं है
- एक **लेबल और मान की जोड़ी**: बाईं ओर छोटा लेबल, दाईं ओर मान

**नियंत्रण.** एक बार बनाए, हर स्क्रीन पर इस्तेमाल किए गए:

- एक **बटन** अपनी चार अवस्थाओं में: सामान्य, होवर, दबा हुआ, निष्क्रिय
- **सही** और **ग़लत** के चिह्न
- एक **स्क्रॉलबार**, एक **चेकबॉक्स**, एक **ड्रॉपडाउन**
- **QuizWitz लोगो** कहाँ बैठता है

---

## आपके लिए क्या तय है

- **The players' phones.** A fixed HTML layout.
- **The handful of things the engine draws itself** - the rules between rows on the points ladder, the highlighted row in the question picker, the QR code. Their colours come from [Colour as a list](#colour-as-a-list).
- **कौन-सी स्क्रीन सामान्य फ़्रेम पर लौटती हैं, और कैसे.**
- **छह कैटेगरी राउंड इंट्रो के आर्टवर्क से किस तरह जुड़ती हैं.** यह जोड़ एक कॉन्फ़िगरेशन सेटिंग है, इसलिए एक इंट्रो कई कैटेगरी के लिए दोबारा इस्तेमाल हो सकता है.
- **सारा समय-निर्धारण और सभी एनिमेशन अवधियाँ.**
- **ध्वनि.** थीम अपना संगीत और ध्वनि प्रभाव रख सकती है, लेकिन वह अलग से दी जाने वाली चीज़ है और डिज़ाइन के काम का हिस्सा नहीं है.

---

## डिज़ाइन के नियम

इनमें से कोई भी आपके दृश्य डिज़ाइन को सीमित नहीं करता. ये इस बारे में हैं कि फ़ाइल कैसे बनी है.

### फ़ॉर्मैट

- **1920 × 1080 पिक्सल**, ठीक इतना ही. हर स्क्रीन के लिए एक फ़्रेम.
- जहाँ हो सके **वेक्टर में** काम करें. जहाँ रैस्टर इस्तेमाल करें (तस्वीरें, टेक्सचर): कम से कम दिखाई देने वाले आकार का 2×.
- Animate का दस्तावेज़ **24 फ़्रेम प्रति सेकंड** पर चलता है. यह तब मायने रखता है जब आप गति के सुझाव दें.
- किनारों पर **5% हाशिया** ज़रूरी जानकारी से खाली रखें. प्रोजेक्टर किनारे काट देते हैं.

### लेयर संरचना - सबसे ज़्यादा मायने रखने वाला नियम

**जो कुछ भी हिल सकता है, दिख सकता है या जिसका मान बदल सकता है, वह अपनी अलग नाम वाली लेयर पर होता है.** कुछ भी मिलाया हुआ नहीं, कुछ भी चपटा किया हुआ नहीं.

In practice:

- the four answer options are four separate layers, not one
- the timer is separate from the background
- a button and its label are two elements
- a player row is one group that can be duplicated

क्या मिलाया जा सकता है: विशुद्ध सजावटी बैकग्राउंड आर्टवर्क जो एक स्थिर तस्वीर की तरह काम करे.

यही वह अकेला नियम है जिसका पालन न होने पर सचमुच तकलीफ़ होती है - तब आर्टवर्क को अलग-अलग करना या दोबारा बनाना पड़ता है, और यही वह ख़र्च है जिससे बचने के लिए यह पूरी व्यवस्था बनी है.

### वे प्रभाव जो टिक नहीं पाते

इंजन HTML5 कैनवस पर बनाता है. इन्हें **तस्वीर में पका देना** पड़ता है या छोड़ देना पड़ता है:

| Effect                                                                | What to do instead          |
| --------------------------------------------------------------------- | --------------------------- |
| Live blur, drop shadows and glow as filters                           | Supply them as artwork      |
| Blend modes (multiply, screen, overlay)            | Resolve them to flat colour |
| लेयर प्रभाव और समायोजन लेयर                                           | Bake them in                |
| टेक्स्ट के **अंदर** ग्रेडिएंट, या हर अक्षर पर अलग किनारे वाला टेक्स्ट | Leave them out              |
| हर फ़्रेम पर बदलने वाले मास्क                                         | Leave them out              |

आकृतियों में ग्रेडिएंट ठीक हैं. पारदर्शिता ठीक है. तय आर्टवर्क के रूप में परछाइयाँ ठीक हैं.

### टेक्स्ट कैसा बर्ताव करता है

यहीं QuizWitz के लिए डिज़ाइन करना आम डिज़ाइन काम से सबसे ज़्यादा अलग है.

**आप फ़ॉन्ट का आकार तय नहीं करते. आप एक बॉक्स बनाते हैं.**

सारा टेक्स्ट एक कंपोनेंट लाइव बनाता है, जिसे दो चीज़ें मिलती हैं: एक टेक्स्ट, और वह आयत जो आपने बनाई. फिर वह **वह सबसे बड़ा फ़ॉन्ट आकार खोजता है जिस पर वह टेक्स्ट, पंक्तियों में बँटकर, बॉक्स के भीतर समा जाए**. लंबा टेक्स्ट समाने के लिए छोटा हो जाता है; छोटा टेक्स्ट तब तक बड़ा होता है जब तक बॉक्स भर न जाए.

![एक पिकर जिसमें अलग-अलग लंबाई की तीन पंक्तियों को अलग-अलग फ़ॉन्ट आकार मिलता है](/images/theme-design/frame1-general-multiquestion.png)

तीन पंक्तियाँ, तीन एक जैसे बॉक्स - और तीन बिलकुल अलग फ़ॉन्ट आकार, सिर्फ़ इसलिए कि टेक्स्ट छोटा या लंबा है. "Where is love" को पूरी ऊँचाई मिलती है; उसके ऊपर वाले सवाल को दो छोटी पंक्तियों से काम चलाना पड़ता है. बाईं ओर के लेबल भी ऐसा ही बर्ताव करते हैं.

इससे यह निकलता है:

- **वही सवाल किसी दूसरे गेम में अलग दिखता है.** छह शब्दों का सवाल बड़ा और स्क्रीन भरता हुआ दिखता है; पैंतीस शब्दों वाला उसी बॉक्स में पाँच पंक्तियों में छोटा दिखता है. दोनों को ठीक दिखना चाहिए.
- **हर टेक्स्ट बॉक्स को दो बार डिज़ाइन करें.** उसे एक बार बहुत छोटे नमूने से और एक बार बहुत लंबे नमूने से भरें, और जाँचें कि रचना दोनों हालात में टिकती है. मोटे तौर पर: एक जवाब विकल्प एक से लगभग आठ शब्दों तक होता है, एक सवाल पाँच से चालीस तक, एक खिलाड़ी का नाम दो से बीस अक्षरों तक.
- **पंक्तियों की तय संख्या पर भरोसा न करें.** ऐसा शीर्षक जो "हमेशा एक ही पंक्ति में" हो, यहाँ होता ही नहीं.
- **टेक्स्ट को किसी और चीज़ से आँख से मिलाकर न सजाएँ.** जिस टेक्स्ट को किसी लकीर या आकृति से मिलना है, वह छोटा या लंबा होते ही खिसक जाएगा. सटीक जगहों के बजाय ऐसे बॉक्स इस्तेमाल करें जो काफ़ी खुले हों, और एक संरेखण (बाएँ, बीच में, दाएँ).
- **बारह भाषाएँ.** जर्मन के जोड़ शब्द लंबे होते हैं, और हंगेरियन भी कम दयालु नहीं है. जो बॉक्स अंग्रेज़ी में तंग है, वह जर्मन में न पढ़े जा सकने वाले छोटे आकार पर आ जाता है.
- **टेक्स्ट के अंदर इमोजी आ सकती हैं.** खिलाड़ी अपनी टीम के नाम के पास एक चुनते हैं, और किसी सवाल या विकल्प में भी एक हो सकती है - कभी-कभी विकल्प सिर्फ़ एक इमोजी ही होता है. वे रंग में बनती हैं और अपने आसपास के अक्षरों से ऊँची होती हैं.

**What the build needs to know about each text box:** where it is, how big it is, how it is aligned, which colour and which font. यह नहीं: किस पॉइंट आकार पर.

**You can use this.** A large box with short text becomes a strong typographic composition by itself, and a box you deliberately make narrow and tall forces text into a column. Use the fitting as a design device; just do not design against it.

### टाइमर - अनिवार्य, और यह एक एनिमेशन है

**Every question screen has a timer**; the room has to see how much time is left.

**टाइमर कोई गिनती करता हुआ अंक नहीं है, बल्कि एक एनिमेशन है जिसका प्लेहेड इंजन चलाता है.** आप "भरे" से "खाली" तक की एक प्रगति डिज़ाइन करते हैं - खाली होती पट्टी, बंद होता छल्ला, रेत घड़ी, सिकुड़ती लकीर. इंजन उस एनिमेशन को ठीक उसी रफ़्तार से चलाता है जिससे आख़िरी फ़्रेम सवाल के अंत के साथ मिले.

इससे यह निकलता है:

- **सवाल की अवधि तय नहीं होती.** वह हर क्विज़ के लिए सेट होती है - अक्सर बीस से तीस सेकंड, लेकिन कम या ज़्यादा भी हो सकती है. आपका एनिमेशन उसमें बैठने के लिए खींचा या दबाया जाता है.
- **कोई अंक नहीं, हर सेकंड की टिक भी नहीं.** जो टाइमर "20, 19, 18…" गिनता है, वह अवधि बदलते ही सही नहीं रह जाता.
- **आख़िरी सेकंड गेम के सबसे तनाव वाले पल होते हैं.** अच्छा हो अगर प्रगति अंत की ओर ज़्यादा साफ़ या ज़्यादा ज़रूरी लगने लगे.
- **हॉल के पिछले हिस्से से भी पढ़ी जा सके**, एक नज़र में.
- **कई टाइमर रखे जा सकते हैं.** ऊपर एक पट्टी और सवाल के पास एक छल्ला, दोनों चलाए जाते हैं, बशर्ते हर एक का नाम `timer` हो.

टाइमर को कीफ़्रेम की एक श्रृंखला के रूप में दें या प्रगति के विवरण के रूप में - "पट्टी दाएँ से बाएँ खाली होती है और हरे से लाल हो जाती है" काफ़ी है.

### उड़ती इमोजी हर चीज़ के ऊपर आकर गिरती हैं

हर खिलाड़ी जुड़ते समय एक इमोजी चुनता है, और गेम उन इमोजी को स्क्रीन पर उछालता है. They are drawn by the engine on a layer above the theme. **यहाँ आपके लिए डिज़ाइन करने को कुछ नहीं है** - लेकिन इनके इर्द-गिर्द डिज़ाइन करने को ज़रूर कुछ है, क्योंकि ये कोई विरली सजावट नहीं हैं.

ये तीन पलों पर दिखती हैं:

- **जब कोई खिलाड़ी जवाब देता है.** उस खिलाड़ी की इमोजी किसी भी क्षैतिज जगह से नीचे के किनारे से ऊपर उठती है, एक चाप बनाती है और वापस फ़्रेम से बाहर गिर जाती है.
- **जब कोई खिलाड़ी उसे उछालता है.** खिलाड़ी अपनी इमोजी अपने फ़ोन से उछाल सकते हैं; कोण और रफ़्तार उँगली फेरने से आते हैं, और वह नीचे बीच से घूमती हुई निकलती है.
- **जब आख़िरी उलटी गिनती में कोई स्थान खुलता है.** नामित खिलाड़ी की इमोजी की बौछार: सामान्य स्थान के लिए बीस, तीसरे के लिए पचास, दूसरे के लिए पचहत्तर, और **विजेता के लिए एक सौ पचास.**

डिज़ाइन के लिए इसका मतलब यह है:

- **रैंकिंग और विजेता स्क्रीन के निचले तिहाई हिस्से को छोटी या ज़रूरी हर चीज़ से ख़ाली रखें.** उलटी गिनती के दौरान वहाँ नीचे सचमुच भीड़ हो जाती है.
- **मान लें कि ये आपके रंग-संयोजन से टकराएँगी.** ये Unicode तालिका के हर कोने से आई पूरे रंगों वाली इमोजी हैं, और कोई थीम इन पर काबू नहीं रखती. जो डिज़ाइन सिर्फ़ तंग रंग दायरे में टिकता है, वह उन सेकंडों में बेतरतीब लगेगा.
- **जब तक कोई तस्वीर या वीडियो दिख रहा हो तब तक उछालना रोक दिया जाता है**, इसलिए अटैचमेंट वाली स्क्रीन साफ़ रहती हैं.
- **The whole layer can be switched off per game**, so do not build a composition that depends on them being there either.

### फ़ॉन्ट

- **फ़ॉन्ट एम्बेड किए जा सकने चाहिए.** `.ttf` या `.otf` फ़ाइल चाहिए, और साथ में ऐसा लाइसेंस जो किसी एप्लिकेशन में एम्बेड करने की इजाज़त दे. जिस फ़ॉन्ट का लाइसेंस सिर्फ़ वेबफ़ॉन्ट के लिए है, या सिर्फ़ छपाई के लिए, उसे इस्तेमाल नहीं किया जा सकता. उससे डिज़ाइन करने से पहले यह जाँच लें; बाद में यह महँगा सुधार होता है.
- असामान्य रूप से बड़ी ऊपरी या निचली लंबाई वाले फ़ॉन्ट की भरपाई की जा सकती है, लेकिन अगर आप ऐसा कोई इस्तेमाल करें तो बता दें.

### रंग एक सूची के रूप में

थीम एक कॉन्फ़िगरेशन फ़ाइल से रंगों की सूची पढ़ती है, और खिलाड़ियों के फ़ोन की स्टाइल भी उसी सूची से आती है. अपना रंग-संयोजन एक **नाम वाली सूची** के रूप में दें, सिर्फ़ आर्टवर्क में रंगों के रूप में नहीं:

| Where                       | Colours                                                                                                                                                                                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Game screen**             | Main colour, accent colour, background, panel or container colour, timer background, default text colour, header text colour, question text colour, button text, dialog and explanation text, player name and score text, the colour for correct, the colour for wrong |
| **The four answer options** | For each option: a background colour, a border colour, and one flat colour for the phones and the charts                                                                                                                                               |
| **Players' phones**         | Background, text colour, outline colour, option outline colour, and the background and text colour of the answer container                                                                                                                                             |

गेम स्क्रीन पर ग्रेडिएंट चल सकते हैं: उन्हें दो हेक्स मानों के रूप में दें.

A few colours are the _only_ handle on parts the engine draws itself, so they are worth deciding rather than defaulting:

- the **separator** - the rules between rows where there is no panel, and on the points ladder
- the **active**, **inactive** and **selected** states of a row in the question picker
- the **dialog** text
- the **front and back of the QR code**

अगर आप इन्हें छोड़ देते हैं तो ये अंदर से तय डिफ़ॉल्ट पर लौट जाते हैं - सफ़ेद, धूसर, लाल, काला और सफ़ेद - जो किसी डिज़ाइन से कम ही मेल खाते हैं.

### QuizWitz लोगो

ख़ास डिज़ाइनों में QuizWitz लोगो शामिल होता है. उसके लिए ऐसी जगह रखें जहाँ वह डिज़ाइन के आड़े न आए.

---

## क्या सौंपना है

### स्रोत फ़ाइल - Illustrator बेहतर

The theme is built in Adobe Animate, and what Animate can import decides how much of your work survives the hand-over intact:

| Tool                                             | What happens on import                                                                                                                                                                                                                                                                                           | Use it for                                 |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **Adobe Illustrator** (`.ai`) | Animate imports it directly and converts your layers into Animate layers or separate symbols, keeping the layer names and leaving the vectors editable. यही वह क़दम है जो आर्टवर्क को हाथ से दोबारा बनाए जाने से बचाता है.                                                       | **Preferred** for the final deliverable    |
| **Adobe Photoshop**                              | Imports with its layers intact, like Illustrator, but gives raster instead of vector.                                                                                                                                                                                                            | Possible                                   |
| **Figma**                                        | Everything goes through SVG and PNG export, and that is precisely where the layer structure needed here is lost. अगर आप फिर भी Figma इस्तेमाल करें, तो **हर एलिमेंट अलग से SVG के रूप में** दें, फ़ाइल के नाम लेयर के नामों से मिलते हुए, ताकि संरचना हाथ से दोबारा बनाई जा सके. | The concept phase, if you are faster in it |

फ़ाइल की संरचना:

- One artboard per screen, named after the frames above.
- दोबारा इस्तेमाल होने वाले हिस्से (बटन, खिलाड़ी रो, जवाब विकल्प, टाइमर) **सिंबल** या कंपोनेंट के रूप में, अलग-अलग नक़लों के रूप में नहीं.
- लेयर के नाम अंग्रेज़ी में, बिना स्पेस के: `question`, `option1` से `option4` तक, `timer`, `feedback`, `header`, `background`, `playerScore`.
- रंग नाम वाले स्वैच के रूप में और टेक्स्ट नाम वाली स्टाइल के रूप में, हर वस्तु पर अलग से सेट करने के बजाय.

### सौंपी जाने वाली चीज़ों की सूची

1. **स्रोत फ़ाइल**, ऊपर बताए ढंग से बनी हुई.
2. **हर फ़्रेम PNG के रूप में**, 1920 × 1080 - इस बात की मिसाल कि वह कैसा दिखना चाहिए. फ़्रेम 2 के लिए क्लाइंट लोगो वाला और बिना लोगो वाला, दोनों संस्करण.
3. **The element sheet** as one artboard: the [content building blocks and the controls](#the-element-sheet).
4. **हर अलग ग्राफ़िक एलिमेंट पारदर्शी PNG के रूप में 2× पर**, एक ही फ़ोल्डर में, फ़ाइल का नाम लेयर के नाम से मिलता हुआ.
5. **टाइमर** कीफ़्रेम के रूप में या प्रगति के लिखित विवरण के रूप में.
6. **फ़ॉन्ट** `.ttf` या `.otf` के रूप में, लाइसेंस के प्रमाण के साथ.
7. **The colour list** from [Colour as a list](#colour-as-a-list), as hex values.
8. **आधे पन्ने के नोट्स**: विचार क्या है, विकल्प कैसे दिखने चाहिए, क्या हिलता है और क्या स्थिर रहता है. दस पन्नों की डिज़ाइन व्याख्या नहीं - जो थीम बनाता है उसे यह जानना है कि क्या बनाना है. गति के सुझाव लिखकर बताए जा सकते हैं या मोटे एनिमैटिक के रूप में दिए जा सकते हैं.

### काम का क्रम

1. **Frame 4, the question screen, together with the element sheet.** Get both approved before the rest. Between them they carry the timer, the options, the panel and every control, so they settle the style of the whole theme.
2. **Frames 1 to 3.** They follow naturally from the first two.
3. **Frames 6 to 8** come last.

---

## परिशिष्ट - सिंबल के नाम

पूर्णता के लिए, और उनके लिए जो ठीक-ठीक जानना चाहते हैं कि उनका आर्टवर्क कहाँ जाता है. **You do not need to read this to do the work**; the eight frames and the element sheet above are enough. इन नामों को लेयर के नाम के रूप में इस्तेमाल करने से एक अनुवाद का क़दम बच जाता है.

| फ़्रेम                                         | सिंबल का नाम                                                                                                                              | ज़रूरी हिस्से                                                                                                                                                                                                      |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1. सामान्य फ़्रेम       | `GeneralPurposeScreen`; `GeneralPurposeScreenWithHeader` वैकल्पिक                                                                         | `placeholder` (कॉन्टेंट एरिया); `title` टेक्स्ट बॉक्स वैकल्पिक                                                                                                                                  |
| 1b. सवाल पिकर, लंबा सवाल       | `MultiQuestionScreen`, `LongQuestionScreen`; दोनों वैकल्पिक, सामान्य फ़्रेम पर लौटते हैं                                                  | पिकर: `questions` प्लेसहोल्डर, `timer`; लंबा सवाल: `question` प्लेसहोल्डर                                                                                                          |
| 2. कनेक्ट स्क्रीन       | `PresentationConnectScreen`; `PresentationConnectScreenWithLogo` वैकल्पिक, एक `logo` प्लेसहोल्डर के साथ                                   | `instructions.line1` से `line5` तक, `connectedPlayers`; `qrCode` प्लेसहोल्डर के साथ फ़्रेम लेबल `showQrCode` वैकल्पिक                                                                                              |
| 3. वेटिंग स्क्रीन       | `PendingScreen`; `PendingScreenWithLogo` वैकल्पिक                                                                                         | `header.text`                                                                                                                                                                                                      |
| 4. सवाल स्क्रीन         | `QuestionScreen`                                                                                                                          | `question.text`, `timer`, `feedback.text`, `option1` से `option4` तक, फ़्रेम लेबल `showOptions` और `showFeedback`                                                                                                  |
| 5. अटैचमेंट वाला सवाल   | `QuestionScreenAttachment`                                                                                                                | ऊपर की तरह, साथ में `attachment.placeholder`                                                                                                                                                                       |
| 5b. पूरी स्क्रीन वाला अटैचमेंट | `AttachmentScreen`                                                                                                                        | `placeholder`                                                                                                                                                                                                      |
| 6. जवाब स्क्रीन         | `AnswerPieScreen`; `AnswerPieScreenAttachment` वैकल्पिक                                                                                   | `option1` से `option4` तक, `answer.text`, `feedback.text`                                                                                                                                                          |
| 6b. ओपन सवाल का जवाब           | `AnswerScreen`, `AnswerOpenQuestionPieScreen`; `…Attachment` रूप वैकल्पिक                                                                 | `answer.text`, `feedback.text`, `players`, `piechart`                                                                                                                                                              |
| 7. रैंकिंग              | `WinnerScreen` + `PlayerScore`; `WinnerScreen_round`, `WinnerScreen_game` और `PlayerScoreNoImage` वैकल्पिक                                | `header.text`, `players`, `feedback.text` (`playAgain.text` वैकल्पिक); पंक्ति में: `position`, `name`, `score`, `avatar` वैकल्पिक                                               |
| 8. राउंड इंट्रो         | किसी भी नाम के एक या अधिक सिंबल; कॉन्फ़िगरेशन फ़ाइल छहों कैटेगरी में से हर एक को एक सिंबल से जोड़ती है                                    | -                                                                                                                                                                                                                  |
| -                                              | `LoadingScreen`                                                                                                                           | `text`, `progress`                                                                                                                                                                                                 |
| -                                              | `Button`, `Checkbox`, `Slider`, `QuestionSelect`, `Scrollbar`, `SettingsScreenScrollarea`, `SymbolCorrect`, `SymbolWrong`, `PackListItem` | इनके लिए अपना आर्टवर्क नहीं चाहिए - ये उसी से बनते हैं जो आपके फ़्रेमों में दिखता है                                                                                                                               |
| -                                              | `IntroScreen`, `IntroScreenBranded`, `MenuScreen`, `SettingsScreen`, `AlertScreen`, `ActivityScreen`, `ActivityVotePieScreen`             | ये सिर्फ़ डेस्कटॉप ऐप में दिखते हैं, लाइव क्विज़ में नहीं. ये काम का हिस्सा नहीं हैं: इन्हें थीम टेम्प्लेट से लिया जाता है और आपके बैकग्राउंड और बटनों से नए सिरे से सजाया जाता है |

मूल थीम के राउंड इंट्रो सिंबल के नाम `RoundIntroScienceAndTech`, `RoundIntroFloraAndFauna`, `RoundIntroTedMusic`, `RoundIntroTedSport` और `RoundIntroTedCultHist` हैं; कला और इतिहास आख़िरी वाला साझा करते हैं. इन नामों में आया "Ted" मूल थीम के किरदार का बचा हुआ अंश है और इसका मतलब यह नहीं कि उनमें कोई किरदार होना चाहिए.

Every element with `.text` after it is a fitted text box as described under [How text behaves](#how-text-behaves): a rectangle the engine fills itself. `timer` एलिमेंट अपनी टाइमलाइन वाला एक मूवी क्लिप है; इंजन उसके फ़्रेमों की गिनती पढ़ता है और बीते समय के अनुपात में प्लेहेड को चलाता है, सेकंड में ज़्यादा से ज़्यादा 24 बार.

### कॉन्फ़िगरेशन फ़ाइल आपके डिज़ाइन से क्या लेती है

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

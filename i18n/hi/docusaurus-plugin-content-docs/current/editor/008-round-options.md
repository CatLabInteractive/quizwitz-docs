---
id: round-options
title: राउंड विकल्प
---

# 🔄 राउंड विकल्प

हर राउंड का एक खास **प्रकार** होता है। डिफ़ॉल्ट **Trivia** है, लेकिन हम आपको सभी उपलब्ध प्रकारों को टेस्ट करने और आज़माने के लिए आमंत्रित करते हैं। इस पेज में बताया गया है कि हर राउंड के लिए आप कौन-सी सेटिंग्स और अटैचमेंट कॉन्फ़िगर कर सकते हैं।

📘 सभी राउंड प्रकारों की विस्तृत जानकारी के लिए, [राउंड प्रकार दस्तावेज़](../round-types/000-round-types.md) देखें।

---

## 🔧 राउंड कॉन्फ़िगर करना

किसी राउंड के विकल्प कॉन्फ़िगर करने के लिए, राउंड पैनल में गियर आइकन पर क्लिक करें:

| ![राउंड विकल्प खोलें](/images/open-round-options.png) | ![राउंड विकल्प](/images/round-options.png) |
| :---------------------------------------------------: | :----------------------------------------: |
|                  _राउंड विकल्प खोलना_                 |          _राउंड कॉन्फ़िगरेशन पैनल_         |

---

## ⚙️ सामान्य राउंड विकल्प

ज़्यादातर राउंड प्रकारों के लिए ये विकल्प उपलब्ध हैं:

- **Only show _X_ questions** - Limits the round to a specific number of questions
- **Random question order** - Shuffle the question order within the round
- **Show round intro** - Display an animated title before the round begins
- **Show round outro (interim score)** - Reveal rankings at the end of the round
- **Group all feedback in a single screen** - Collect question feedback in one block after the round ends
- **Show all question feedback at the end of the round** - Delay question feedback until the round ends
- **Force feedback after each individual question** - Ensure immediate feedback
  > ⚠️ यह सिर्फ़ उन राउंड और सवाल प्रकारों में असर करता है जहाँ फ़ीडबैक आम तौर पर देर से दिखाया जाता, जैसे ओपन सवाल या लाइटनिंग राउंड।

📘 फ़ीडबैक के समय और व्यवहार के बारे में ज़्यादा जानकारी के लिए [सवाल प्रकार](../question-types/000-question-types.md) देखें।

---

## 🏆 स्कोरिंग विकल्प {#scoring}

QuizWitz सभी खिलाड़ियों के लिए चीज़ों को निष्पक्ष और मज़ेदार बनाए रखने के लिए लचीली स्कोरिंग देता है।

- **Time-based scoring** - Players earn more points for faster answers.
  - ज़्यादातर सवाल प्रकारों के लिए, समय-आधारित पॉइंट **हर माइक्रोसेकंड लगातार** घटते हैं: आप जितनी तेज़ी से जवाब देते हैं, उतने ज़्यादा पॉइंट स्कोर करते हैं।
  - **ओपन सवालों** के लिए, समय-आधारित पॉइंट ब्लॉक में बाँटे जाते हैं। उदाहरण के लिए: पहले ब्लॉक में दिए गए जवाब (जैसे, शुरुआती कुछ सेकंड में) समय-आधारित हिस्से का **100%** कमाते हैं, अगला ब्लॉक **80%** कमाता है, और इसी तरह आगे। इससे धीमे टाइप करने वालों के लिए मुकाबला बराबरी का बना रहता है।

- **Fixed percentage of points on time-based scoring** - You control how much of the total score is influenced by speed.
  - डिफ़ॉल्ट रूप से, पॉइंट्स के **75%** तय होते हैं (जो भी सही जवाब देता है उसे ये पॉइंट मिलते हैं, चाहे स्पीड कुछ भी हो)।
  - सिर्फ़ बचे हुए **25%** पर खिलाड़ियों की जवाब देने की तेज़ी का असर पड़ता है।

> 💡 इस सेटिंग को एडजस्ट करके आप अपनी क्विज़ स्टाइल के हिसाब से राउंड को ज़्यादा ज्ञान-आधारित या ज़्यादा स्पीड-आधारित बना सकते हैं।

राउंड एडिट करते समय ये स्कोरिंग विकल्प राउंड विकल्प पैनल में मिलेंगे।

---

## 📜 Quizmaster निर्देश

तुम अपना **राउंड इंट्रो टेक्स्ट** सेट कर सकते हो, जो राउंड की शुरुआत में सिर्फ़ [Quizmaster ऐप](../quizmaster/001-introduction.md) में दिखता है। इसका इस्तेमाल क्विज़मास्टर को निर्देश देने या कोई निजी बात जोड़ने के लिए करो।

---

## 📎 अटैचमेंट

अपने राउंड को उन मीडिया से बेहतर बनाएँ जो खास पलों पर दिखाए जाते हैं:

- **Before round** - Displayed after the round intro animation
- **After round** - Shown after the round outro
- **Before round outro** - Shown after the last question, just before the outro
- **During round outro** - _(audio only)_ Plays while rankings are displayed
- …

📘 समर्थित फ़ाइल प्रकारों और इस्तेमाल के टिप्स के लिए, [अटैचमेंट गाइड](../editor/006-attachments.md) देखें।

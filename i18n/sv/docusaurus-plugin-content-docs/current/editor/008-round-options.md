---
id: round-options
title: Rundalternativ
---

# 🔄 Rundalternativ

Varje runda har en specifik **typ**. Standard är **Trivia**, men vi uppmuntrar dig att testa och experimentera med alla tillgängliga typer. Den här sidan förklarar inställningarna och bilagorna som du kan konfigurera per runda.

📘 En detaljerad översikt över alla rundtyper finns i [dokumentationen om rundtyper](../round-types/000-round-types.md).

---

## 🔧 Konfigurera en runda

Klicka på kugghjulsikonen i rundpanelen för att konfigurera rundans alternativ:

| ![Öppna rundalternativ](/images/open-round-options.png) | ![Rundalternativ](/images/round-options.png) |
| :-----------------------------------------------------: | :------------------------------------------: |
|                  _Öppna rundalternativ_                 |         _Panel för rundkonfiguration_        |

---

## ⚙️ Allmänna rundalternativ

Följande alternativ finns för de flesta rundtyper:

- **Visa bara _X_ frågor** - Begränsar rundan till ett visst antal frågor
- **Slumpmässig frågeordning** - Blanda frågornas ordning inom rundan
- **Visa rundans intro** - Visa en animerad titel innan rundan börjar
- **Visa rundans avslutning (mellanställning)** - Visa rankningen i slutet av rundan
- **Gruppera all feedback på en skärm** - Samla feedbacken för frågorna i ett block när rundan är slut
- **Visa all feedback för frågorna i slutet av rundan** - Fördröj feedbacken för frågorna tills rundan är slut
- **Tvinga feedback efter varje enskild fråga** - Säkerställ omedelbar feedback
  > ⚠️ Det här gäller bara i rund- och frågetyper där feedbacken annars skulle fördröjas, till exempel öppna frågor eller blixtrundor.

📘 Se [frågetyper](../question-types/000-question-types.md) för mer information om när och hur feedback visas.

---

## 🏆 Poängalternativ {#scoring}

QuizWitz erbjuder flexibel poängsättning för att hålla spelet rättvist och engagerande för alla spelare.

- **Tidsbaserad poängsättning** - Spelarna får fler poäng för snabbare svar.
  - För de flesta frågetyper minskar de tidsbaserade poängen **kontinuerligt per mikrosekund**: ju snabbare du svarar, desto fler poäng får du.
  - För **öppna frågor** delas de tidsbaserade poängen in i block. Till exempel: svar i det första blocket (t.ex. de första sekunderna) ger **100 %** av den tidsbaserade delen, nästa block ger **80 %**, och så vidare. Det jämnar ut förutsättningarna för spelare som skriver långsammare.

- **Fast procentandel av poängen vid tidsbaserad poängsättning** - Du styr hur stor del av den totala poängen som påverkas av hastigheten.
  - Som standard är **75 %** av poängen fasta (alla som svarar rätt får de poängen, oavsett hastighet).
  - Bara de återstående **25 %** påverkas av hur snabbt spelarna svarar.

> 💡 Genom att justera den här inställningen kan du göra rundor mer kunskapsbaserade eller mer hastighetsbaserade, beroende på din quizstil.

De här poängalternativen finns i panelen med rundalternativ när du redigerar en runda.

---

## 💬 Round explanation

Some round types and scoring options show a short explanation on the game screen before the first question, for example _"Answer consecutive questions correctly to reach higher levels and get bonus points."_ when a round uses strike scoring. Click **+ Round explanation** in the round opening to replace that text with your own. You can also use it to explain a regular trivia round, which has no explanation by default.

- Leave the field empty to keep the default explanation of the round type.
- The round explanation is translated like any other text: add it in every language of your quiz.
- When a quizmaster presents the quiz, the game screen skips the round explanation. Use the quizmaster script below instead.

---

## 📜 Instruktioner för quizmastern

You can add a custom **round introduction text** (the **Quizmaster script**) that will appear only on the [Quizmaster App](../quizmaster/001-introduction.md) at the start of the round. Använd den för att informera quizmastern eller för att ge en personlig touch.

---

## 📎 Bilagor

Enhance your round with attachments shown at specific moments:

- **Före rundan** - Visas efter rundintrots animation
- **Efter rundan** - Visas efter rundoutrot
- **Före rundoutrot** - Visas efter den sista frågan, precis före outrot
- **Under rundoutrot** - _(endast ljud)_ Spelas upp medan rankningen visas
- ...

📘 Filtyper som stöds och användningstips finns i [guiden om bilagor](../editor/006-attachments.md).

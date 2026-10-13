---
id: livestream-tutorial
title: Livestreamquiz
---

# 📺 Arrangera ett livestreamquiz

Med QuizWitz Live är det enkelt att arrangera ett helt interaktivt livestreamquiz på plattformar som **Twitch**, **YouTube Live** eller **Facebook Live** - även för en stor publik. Den här guiden tar dig igenom konfiguration, hantering av fördröjning och bästa praxis för presentationen.

> 🧭 Om du är ny i Quizmaster-appen, börja med [**uppstartsguiden för quizmaster**](../quizmaster/002-startup.md).

---

## 🎤 Quizmasterns uppsättning

Quizmastern är hjärtat i ditt evenemang. Quizmastern styr tempot, presenterar frågorna och håller publiken engagerad.

Använd **Quizmaster-appen** för att köra spelet. Starta QuizWitz Live från quizredigeraren genom att klicka på **Starta QuizWitz Live**.

> 💡 Quizmaster-appen är en **webbapp** - det krävs ingen installation. Gå bara till [**quizwitz.tv**](https://quizwitz.tv) på quizmasterns enhet och ange **quizmasterkoden**.

Vi rekommenderar en **surfplatta eller smartphone** så att quizmastern kan röra sig fritt under showen.

---

## 🧩 Välj rätt spelläge

När du startar QuizWitz Live får du välja hur spelarna ska ansluta:

- **Lagkoder** - Varje spelare eller lag får en unik kod. Användbart för lagevenemang med föranmälan.
- **Gemensam spelkod** - En gemensam spelkod för alla spelare. Passar bäst för livestreamar med öppen anmälan.

> För livestreamar väljer du alltid **Gemensam spelkod** och klickar på _Starta ad hoc-spel_.

När quizet har laddats visar Quizmaster-appen:

- **Quizmasterkod** - för quizmastern
- **Jurykod** - för att granska öppna frågor
- **Regikod** - för att styra bild och ljud
- **Spelkod** - för att spelarna ska kunna ansluta

Spelskärmen visar nu **anslutningsskärmen**, som är det du ska streama till din publik.

---

## 🎥 Streama till Twitch (eller andra)

Använd sändningsprogramvara för att streama ditt quiz. Vi rekommenderar:

- **OBS Studio** (Open Broadcast Software) - gratis och kraftfullt
- Alternativ: Streamlabs, vMix eller inbyggda alternativ för Zoom/Meet

Om du använder **mötesprogram** som Zoom eller Google Meet:

- Dela bara din skärm
- Tryck på **Starta** i Quizmaster-appen
- Spelarna kan delta i nästan realtid

På **Twitch, YouTube Live eller Facebook Live** får du en **streamingfördröjning** (även kallad omkodningsfördröjning).

> ✅ Vi rekommenderar **Twitch** för bäst resultat - det ger genomgående låg latens och god synkning för tittarna.

---

## ⏱️ Ställa in spelarfördröjningen i QuizWitz

För att kompensera för streamingfördröjningen använder du **fördröjningen för spelarinteraktion** i juryappen.

Så här gör du:

1. Starta förhandsvisningen av din stream - du behöver inte sända live än
2. Öppna **juryappen** genom att ange din jurykod på [**quizwitz.tv**](https://quizwitz.tv)
3. Gå till **Spelkontroll**
4. Öppna din livestream i ett annat fönster, med ljud
5. Använd ett stoppur
6. Tryck på knappen **Buzzer** i juryappen och starta tidtagningen
7. När du hör buzzern i livestreamen stoppar du stoppuret
8. Avrunda fördröjningen uppåt (i sekunder) och ange den i fältet **Fördröjning för spelarinteraktion**
9. Klicka på **Bekräfta inställning**

> 🎯 Det är bättre att överskatta fördröjningen något. Då ser spelarna svarsalternativen först **efter** att du har läst klart frågan.

---

## 🚀 Sända live

När fördröjningen är inställd och dina spelare är anslutna:

- Starta din Twitch-stream
- Använd Quizmaster-appen för att **starta quizet**
- QuizWitz sköter tidtagningen i bakgrunden - du behöver inte pausa mellan frågorna

---

## 💡 Tips för presentationen i livestreamen

- **Låt inte quizmastern titta på den fördröjda streamen** - quizmastern ska bara använda Quizmaster-appen i realtid för att undvika pinsamma pauser.

- För att interagera med publiken, håll koll på **livekommentarerna** på en separat skärm - inte i videoflödet.

- Vill du byta OBS-scener automatiskt? Använd:  
  [`https://regie.catlab.eu/obs.html`](https://regie.catlab.eu/obs.html)

- Vill du styra MIDI-enheter under spelet? Prova:  
  [`https://regie.catlab.eu/midi.html`](https://regie.catlab.eu/midi.html)

- Letar du efter fler verktyg? Besök [**regie.catlab.eu**](https://regie.catlab.eu) - ett centralt nav med fler verktyg för automatisering, scenbyten, effekter och mycket mer.

> Alla verktyg kräver din **regikod** från Quizmaster-appen.

---

Nu är du redo att sända live! Twitch erbjuder en smidig och responsiv plattform för att arrangera storskaliga quizevenemang. Kombinera det med QuizWitz Live - så blir din quizkväll garanterat imponerande.

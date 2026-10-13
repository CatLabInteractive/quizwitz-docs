---
id: emerald-theme
title: Emerald 테마
---

# Emerald 테마

Emerald 테마는 QuizWitz 게임의 모양을 커스터마이즈하는 가장 쉬운 방법입니다. 기본적으로 이 테마는 선명한 선택지 색상을 사용한 깔끔한 파랑 / 초록 스타일이지만, 퀴즈 첨부 파일과 테마 수정자를 조합하면 모양을 완전히 바꿀 수 있습니다 - 극적으로.

:::tip
[테마 테스터](https://client.quizwitz.com/test.html?theme=emerald)로 설정이 어떻게 보일지 확인할 수 있습니다.
:::

![Emerald 테마 스크린샷](/images/emerald/emerald.png)

## Emerald 테마 선택하기

**퀴즈 설정**에서 **테마**를 선택하고 **Emerald**를 활성화하세요.

Emerald 테마를 사용하는 퀴즈를 [여기](https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default)에서 테스트해 볼 수 있습니다.

![퀴즈 설정 스크린샷](/images/emerald/quiz-settings.png)

## 첨부 파일

### 퀴즈 첨부 파일

게임의 분위기를 바꾸는 가장 쉬운 방법은 단연 퀴즈에 이미지를 첨부하는 것입니다. **퀴즈 설정**을 열고 **첨부 파일** 섹션까지 아래로 스크롤하세요. 여기에서 배경, 고객 로고, 접속 화면 및 대기 화면(컨퍼런스 퀴즈와 라이브 퀴즈용) 등에 사용할 이미지를 업로드할 수 있습니다.

![퀴즈 첨부 파일 스크린샷](/images/emerald/quiz-attachments.png)

### 라운드 첨부 파일

게임 전후에 재생될 이미지나 동영상을 업로드할 수도 있습니다. 라운드도 마찬가지입니다. 라운드 소개로 사용할 이미지를 찾아 **라운드 설정**으로 이동한 다음, **라운드 인트로 표시**를 비활성화하여 기본 라운드 소개를 숨기고, 이미지나 동영상을 **라운드 전 표시**로 업로드하세요. 라운드가 시작되면 기본 소개 대신 해당 이미지나 동영상이 표시됩니다.

![라운드 첨부 파일 스크린샷](/images/emerald/round-settings.png)

:::tip
최상의 결과를 얻으려면 1920 x 1080 해상도의 이미지와 동영상을 사용하세요.
:::

:::info
첨부 파일을 이것저것 적용해 보면 [이런 결과](https://play.quizwitz.com/11487:ACz546ejAV/emerald-theme-tutorial-background-logo)를 얻을 수 있습니다.
:::

![퀴즈 첨부 파일을 적용한 Emerald 테마 스크린샷](/images/emerald/emerald-with-attachments.png)

### 음악

게임의 모든 음악도 첨부 파일로 바꿀 수 있습니다. **문제 진행 중** 슬롯에 업로드한 오디오 파일은 문제 카운트다운 동안 재생됩니다.

## Emerald 테마 수정자

첨부 파일 외에도 **쿼리 매개변수**로 Emerald 테마를 조정할 수 있습니다. **고급 게임 옵션** URL에 추가할 수 있는 매개변수로 - 테마의 모양을 바꿉니다.

이를 위해 예제 퀴즈(첨부 파일 없음)로 시작해 보겠습니다.  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default

위 퀴즈를 시작하면 게임이 기본 Emerald 스타일로 표시됩니다. 이제 바꿔 보겠습니다.

:::tip
이 매개변수를 실험해 보는 가장 쉬운 방법은 [테마 테스터](https://client.quizwitz.com/test.html?theme=emerald&backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b)를 사용하는 것입니다.  
실험이 끝나면 매개변수를 복사 - 붙여넣기하여 고급 게임 옵션 URL에 넣으면 됩니다.
:::

사용할 수 있는 수정자는 다음과 같습니다.

- backgroundColor
- mainColor
- accentColor
- timerBackgroundColor
- headerTextColor
- optionTextColor
- optionColors(색상 4개, 쉼표 - 구분)
- optionBorderColors(색상 4개, 쉼표 - 구분)

또한 기본 글꼴을 설정할 수 있습니다.

- defaultFont
- headerFont

이 글꼴은 공개적으로 접근 가능한 글꼴 파일의 URL이어야 합니다.

각 수정자에는 HTML 16진수 형식(ff0000)의 단일 색상을 넣거나, 여러 색상을 빼기 기호로 구분하여 선형 그라데이션을 지정할 수 있습니다( - 예: ff1b6b-45caff). (# 기호는 붙이지 않아야 합니다.)

:::note
쿼리 매개변수는 물음표( ? )로 시작해야 하며, 각 매개변수는 앰퍼샌드( & )로 구분해야 합니다. 쿼리 매개변수에 대한 자세한 내용은 [위키백과](https://en.wikipedia.org/wiki/Query_string)를 참조하세요.
:::

게임 URL에 이 매개변수를 추가하면 테마의 색상을 수정할 수 있습니다.  
https://play.quizwitz.com/11486:gFUabUFh7i/emerald-theme-tutorial-default?backgroundColor=ff1b6b-45caff&accentColor=00ff87&mainColor=ffffff&timerBackgroundColor=fff95b

![맞춤 수정자를 적용한 Emerald 테마 스크린샷](/images/emerald/theme_properties.png)

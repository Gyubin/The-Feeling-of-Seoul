# 어떤 분석을 할 것인가

이것을 먼저 고민했어야 했다. 아쉽지만 일단 진행하고 추가로 필요한 것들은 다시 모은다.

## 1. 기존 데이터로 할 수 있는 일

### 1.1 사용 가능 variable

- 글 제목과 내용(텍스트 뭉치)
- 별점(1-5)
- 날짜
- 국가

### 1.2 분석 가능한 내용

국가는 대부분의 분석에서 적용될 수 있다. '국가 별'로 비교해서 볼 수 있음을 염두에 두자.

- 글&국가 : 국가 별로 두드러지는 단어
    + 국가별로 가장 빈도 수 높은 거 뽑기
    + 국가 별 비교
    + 왜 다를까? 우리끼리의 결론
- 글 : 두드러지는 단어끼리의 연관성
    + 예를 들어 'bad'와 'souvevir'가 동시에 자주 나왔다면 어떤 점에서 불만족했는지 짚어낼 수 있지 않을까.
- 글&별점: 리뷰의 긍부정 정도와 별점의 상관관계
    + 리뷰를 각각 긍정/부정 퍼센티지로 나타내고
    + 별점과 연관시켜보기.
    + 너무 당연하게 연관이 되겠지만.
- 글: 리뷰의 긍부정 정도와 주요 형태소 분포의 상관관계
    + 긍정적일 수록 자주 나타나는 단어. 부정적일수록 자주 나오는 단어를 뽑아본다면.
- 글&날짜&별점
    + 시간이 흐를 수록 달라지는 주요 단어 혹은 별점
    + 왜 달라졌을까. 당시의 사회적 현상 등과 연관
- 별점: 주간, 월간, 혹은 연간 평균 별점의 변화를 그래프로
- 날짜: 명소별로 어떤 날짜에, 어떤 요일, 어떤 계절, 어떤 월에 여행자들이 많이 방문했을까.
- 국가: 국가별로 선호하는 명소가 있다면
- 국가&별점: 어떤 국가가 우리나라에 호감을 갖고 있을까.

## 2. 추가로 데이터를 모은다면

### 2.1 추가할 variable

- 날씨 기록

### 2.2 분석 가능한 내용

- 날씨에 따라 리뷰 긍부정이나 별점, 리뷰 수가 어떻게 달라졌는지

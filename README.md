# 원티드 프리온보딩 챌린지

## 🔴프로젝트 설명
React-Query, TypeScript 학습을 위해 원티드 프리온보딩 챌린지에 신청.

사전과제 수행 후 수강기간 중 리팩토링을 통해 새로운 기술에 대해 효율적으로 학습하고 배울 수 있다고 기대하여 진행한 프로젝트

[원티드 프리온보딩 챌린지](https://www.wanted.co.kr/events/pre_challenge_fe_5)의 선택적 사전과제로, CRUD 구현 및 React-Query의 활용으로 기술 역량 향상 챌린지이다.

## 🔴빌드 및 실행방법
1. [프리온보딩 API](https://github.com/postop09/wanted-pre-onboarding-challenge-fe-1-api) Repository 클론
2. 실행이 안되는 경우 `npm update`
3. 서버 실행

```
> yarn
> yarn start
```

4. 현재 Repository (wanted-pre-onboarding-challenge-fe-1) 클론
5. 환경 설치 및 실행

```
> npm install
> npm start
```

## 🔴개발 환경
- 개발 기간: 22.12.29 ~ 23.01.10
- 원티드 로컬서버 API 제공
- React.js
- TypeScript
- React-Query

## 🔴제작 과정 및 기능

|로그인/로그아웃|회원가입|
|---|---|
|<img src="https://user-images.githubusercontent.com/93017923/211478170-42a09f29-ab8e-4a52-9fe9-0ae893afafb1.gif" width="400px"/>|<img src="https://user-images.githubusercontent.com/93017923/211478441-1a756107-e3f8-41e6-a9da-d23401f965ea.gif" width="400px"/>|
|이메일/비밀번호 유효성 검사 통과 시 버튼 활성화|로그인과 동일|
|토큰이 있는 경우 토큰 로그인||

|등록|
|---|
|<img src="https://user-images.githubusercontent.com/93017923/211479186-8e598525-6a2d-49e6-bd9f-fe7f99a690a1.gif" width="400px"/>|

|상세조회|
|---|
|<img src="https://user-images.githubusercontent.com/93017923/211479681-e7a7f3d5-bead-4db8-9c9e-a23d39b4b58c.gif" width="400px"/>|
|뒤로가기 시 이전 조회 불러오기|

|수정|
|---|
|<img src="https://user-images.githubusercontent.com/93017923/211479211-e97251e8-149f-4ff8-bc8d-b8671038f9b2.gif" width="400px"/>|

|삭제|
|---|
|<img src="https://user-images.githubusercontent.com/93017923/211479500-b0873f3d-f4f5-4c2d-ac90-263f85855e20.gif" width="400px"/>|

## 🔴정리
### 👹개발 전 목표/고려사항
- TypeScript 최적화
- api 호출 로직
- 컴포넌트 구조 (관심사 분리)
- React-Query 시도

### 👹배우고 느낀 점
- React-Query: 러닝커브가 높지 않다는 생각이 들었다. (Redux는 따로 설치해야하는 라이브러리도 있었고 너무 복잡했던 기억이 있다...) 물론 더 자세하게 알기 위해서는 많은 노력이 필요하겠지만, 문서를 보고 금방 따라할 수 있었다. React-Query 는 props 가 불필요하게 늘어나는 것을 방지해준다. PUT, POST, DELETE 등 목록을 수정시키는 api 요청이 있고난 후, GET 요청 함수를 따로 전달해 주지 않아도 목록을 최신화 시킬 수 있다.

### 👹아쉬운 점
- 1차적으로 개발을 완료하고 React-Query 를 적용시켜서 리팩토링 해봤다. React-Query 에 더 최적화된 코드가 궁금하다. `useQuery` 나 `useMutation` 의 네이밍(name) 은 어떻게 하는 편일지, `onLoading` 등 메소드의 활용법이나, 데이터 호출 성공시 필요한 함수 로직은 어느 위치에서 정의해서 사용하는 것이 좋은지 더 알아봐야 할 것같다.
- history 컨트롤이 생각보다 깔끔한 구현이 안됐다.

## 🔴리마인드
- React-query useQuery/useMutation
- React-query naming/최적화
- 브라우저 history 컨트롤
- 코드 리팩토링

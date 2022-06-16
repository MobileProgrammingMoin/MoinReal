Moin
===

📖 Introduction
---
- 2022학년도 1학기 명지대학교 Mobile Programming 과목에 React-native expo를 이용하여 독일 한인들을 위한 커뮤니티 서비스 `Moin`을 제작하는 프로젝트입니다.

  ```
  “여기 MOIN 여러분들을 위한 정보 ”
  ```
  
  ```
  “다양한 정보가 MOIN 곳 ”
  ```

<br><br>


🏁 설치 및 실행 방법
---

### 1. git clone

원하는 폴더에 레포지토리를 클론해주세요.

```bash
$ git clone https://github.com/MobileProgrammingMoin/Moin.git
```

### 2. 패키지 설치

라이브러리 설치를 위해 yarn을 입력해주세요.

```bash
$ yarn
```

### 3. 실행하기

expo start를 입력해주세요.

```bash
$ expo start
```

<br><br>


🧱 파일 구조
---
    .
    ├── asset
    ├── public
    | ├── images                   // 개발에 사용한 테스트 사진 및 몇몇 이미지 저장
    ├── src
    | ├── Components
    | | ├── Auth                   // 로그인, 마이페이지 등 유저 정보와 관련된 컴포넌트
    | | ├── SharingInfo            // 정보공유 관련 컴포넌트
    | | ├── Market                 // 중고 거래 관련 컴포넌트
    | | ├── JobOpening             // 구인 관련 컴포넌트
    | | └── JobFinding             // 구직 관련 컴포넌트
    | ├── pages
    | | ├── Auth                   // 로그인, 마이페이지 등 유저 정보와 관련된 화면 (구현도 90%)
    | | ├── SharingInfo            // 정보공유 관련 화면 (구현도 80%)
    | | ├── Market                 // 중고 거래 관련 화면 (구현도 20%)
    | | ├── JobOpening             // 구인 관련 화면 (구현도 40%)
    | | └── JobFinding             // 구직 관련 화면 (구현도 40%)
    | ├── styles.js                // 미리 정의해둔 스타일 (사용도가 낮다..)
    | ├── theme.js                 // 미리 정의해둔 스타일 테마 (color 및 font-size의 일관성 유지)
    | └── App.js                   // Navigation 및 실질적 루트
    ├── setting
    | ├── Firebase.json            // for web
    | ├── google-services.json     // for android
    | └── GoogleService-Info.plist // for ios
    ├── .gitignore
    ├── App.js 
    ├── app.json
    ├── babel.config.js
    ├── package.json
    ├── package-lock.json
    ├── yarn.lock
    └── README.md


- Component와 pages를 구분해 pages를 Component폴더 하위의 컴포넌트들로 구성 (코드 재사용성 및 유지보수성 향상)
- 도메인별로 파일을 나눠 최대한 충돌을 방지 (코드에 집중하기 좋은 환경 마련)
- styles.ts및 theme.js를 사용해 색, 폰트 크기 등의 수정 및 변경을 용이하게 함. (코드 재사용성 및 유시보수성 향상)

<br><br>

    
🖌️ 설계 디자인 및 프로토타입
---
![Group 146](https://user-images.githubusercontent.com/48820696/174017676-5eb6b22e-2e67-41ce-a5df-bed11e703528.jpg)
<a href="https://www.figma.com/file/TphxHJ3bMoSvw3o1TjTD9y/MobileProgramming">
  <img alt="Figma" src ="https://img.shields.io/badge/FigmaDesign-F9EB6C.svg?&style=for-the-badge&logo=Figma&logoColor=purple"/>
</a>

<br><br>


🧑‍💻 협업도구
---
- Github (코드 통합 관리)
- GoogleDocs (기획안 및 문서 작업) 
  - 동시에 문서를 작성하고 댓글로 피드백을 주고받음<br>
    ![image](https://user-images.githubusercontent.com/48820696/174015342-e054587a-9f75-4476-a47b-51f27d6b858c.png)  
- Notion (회의록 기록 및 내용정리) <br>
  - 회의록 작성 및 작업 방식 공유
    ![image](https://user-images.githubusercontent.com/48820696/174016140-8cdd4e8a-cb8b-4abd-b6bd-7ecb5892835c.png)
   - 링크 관리
     ![image](https://user-images.githubusercontent.com/48820696/174016235-09e132b8-6a14-438d-b7cf-0005750f9006.png)
   - 명예의 전당
     ![image](https://user-images.githubusercontent.com/48820696/174016324-b2ce4d7f-37ce-4b71-a7b6-2ef1874336aa.png)

   
<br><br>

😢 아쉬운점 (거의 해커톤과 비슷한 시간과 촉박함이었습니다.... )
---
- 코드 몇몇 `ui`를 피그마대로 구현하지 못함.
- 코드 `로직 연결`을 전부 못함. 
- 코드 `리팩토링` 및 `구조화` 작업을 수행하지 못해 코드에 불필요한 코드 및 기능을 잃은 주석이 많다.
- style 및 동작을 좀 더 추상화하여 재사용성을 많이 높이지 못함.
- Chatting을 구현해보고싶었으나 구현하지 못함...




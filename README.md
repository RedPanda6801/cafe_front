# MyStamp

## 디렉토리 및 파일 구조
```
├── .vscode                         # VSCode 관련 환경 세팅 디렉토리
│   └── settings.json
├── dist                            # 'npm run build'시 js로 변환된 파일 디렉토리
│   └── ...                         # 실제 nginx를 통해 서비스 되는 파일들(js, css, html)
├── node_modules                    # 'npm install'을 통해 설치되는 모듈 파일 디렉토리
│   └── ...
├── public                          # index.html 관련 파일이 들어가는 공간
│   └── ...
├── src                             # 각종 vue파일과 js파일들이 작성되는 공간
│   ├── assets                      # 정적파일 서비스 공간
│   │   └── style                   # css파일들
│   ├── components                  # 각종 component 공간
│   │   ├── chart                   # 차트관련 컴포넌트
│   │   │   └── lineChart.js        # 라인차트 컴포넌트
│   │   ├── layout                  # 레이아웃 컴포넌트(헤더, 사이드바)
│   │   │   ├── Header.vue          # 헤더 컴포넌트
│   │   │   └── Sidebar.vue         # 사이드바 컴포넌트
│   │   └── NotFound.vue            # File Not Found 컴포넌트(404 처리 컴포넌트)
│   ├── router                      # 라우터 관련 디텍토리
│   │   └── index.ts                # 라우터 파일
│   ├── store                       # Store 공간
│   │   ├── models                  # Store에서 사용할 각종 모델들 디렉토리
│   │   │   ├── auth.js             # 로그인 관련 Store
│   │   │   └── ...                 # 각종 모델 파일
│   │   ├── apiUtil.js              # axios 처리 유틸 파일
│   │   └── index.js                # Store의 인덱스 파일
│   ├── views                       # 페이지 뷰(화면)파일 디렉토리
│   │   ├── auth                    # 로그인 화면 처리디렉토리
│   │   │   └── ...                 # 로그인 처리 파일들
│   │   ├── ...                     # 각종 화면 처리 디렉토리
│   │   │   └── ...                 # 각종 화면 처리 파일들
│   │   ├── Home.vue                # 홈화면 파일
│   │   └── index.vue               # Body부분의 화면 파일
│   ├── App.vue                     # 전체 화면 제어 파일
│   └── main.js                     # vuejs의 메인 실행 파일
├── .env                            # 환경설정 파일
├── .eslintrc.js                    # eslint 환경설정 파일
├── .gitignore                      # git의 ignore설정 파일
├── babel.config.js
├── dockerBuild.sh                  # docker build를 실행시키기 위한 파일
├── Dockerfile                      # docker 이미지를 만들기 위한 파일
├── dockerRun.sh                    # docker 컨테이너를 만들기 위한 파일
├── nginx-default.conf              # docker내의 nginx 설정 파일
├── package-lock.json
├── package.json                    # nodejs 패키지 파일(npm install관련)
├── README.md
└── vue.config.js                   # vue설정 파일(proxy 설정)
```

## 백엔드 연동
본 프로젝트와 연동되는 백엔드는 `cafe-backend`를 사용한다.
(https://github.com/RedPanda6801/cafe-backend.git)


## 개발 환경
개발용 PC의 OS는 `windows 10`을 사용 한다.


## vue-cli 설치 옵션
```console
Vue CLI v4.5.15
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Router, Vuex, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) N
```

## eslint + prettier 설정
> /.eslintrc.js
```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "prettier/prettier": [
      "error", {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: "none",
        printWidth: 120,
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto",
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
  },
};
```

## VS Code의 setting.json 설정
`VS Code`의 `File > Preferences > Setting -> Workspace -> Text Editor > Code Actions On Save --> Edit in settings.json`

> /.vscode/settings.json
```json
{
  "eslint.validate": [
    "vue", "javascript", "html"
  ],
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```
## npm 패키지 설치
생성된 프로젝트 폴더로 이동 한 후 npm을 이용해서 패키지들을 설치 한다.

```
> npm i
> $env:NODE_OPTIONS="--openssl-legacy-provider"  // node 버전이 낮을 때 windows 환경에서 사용
```

## vue cli 실행

```
npm run serve
```

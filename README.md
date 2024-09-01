# Study-React
React 학습 레포지토리

### React 환경설정
<details>
<summary>React 환경설정</summary>
<div markdown="1">

1. node.js 설치
    - https://nodejs.org/en, Download Node.js(LTS) 클릭
2. `terminal` 버전 확인
    ```Bash
    node -v
    npm -v
    npx -v
    ```
3. 리액트 패키지 설치
    - VS Code에서 터미널 열기
    ```Bash
    npm uninstall -g create-react-app
    npm install -g create-react-app
    ```
4. 리액트 프로젝트 초기화(파일 설치)
    ```Bash
    npx create-react-app [파일명]
    ```

5. 리액트 실행
    - 콘솔위에서 만든 프로젝트 앱 이름까지 진입 `cd 파일명`
    ```Bash
    npm start
    ```
    - http://localhost:3000 웹브라우저 서버 확인
지 등등 입력
</div>
</details>

### TypeScript 환경설정
<details>
<summary>TypeScript 환경설정</summary>
<div markdown="1">

1. 프로젝트 폴더 생성, 타입스크립트 적용
```bash
$ npx create-react-app [폴더명] --template typescript
$ npm i --save-dev @types/styled-components
$ npm i styled-components
```
2. tsconfig.json 수정
```bash
...
  "include": [
    "next-env.d.ts",
    "src/**/*.ts",
    "src/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
 
```
</div>
</details>

### [Style Component](https://github.com/KangJeoungMi/Study-React/blob/master/markdown/styleComponent.md)

> 0. styleComponent 패키지 설치
> 1. Props(Properties)
> 2. 확장 컴포넌트
> 3. `as`
> 4. `attrs`, `&:`, `${}`
> 5. Theme(다크모드, 라이트모드)
---
### [TypeScript](https://github.com/KangJeoungMi/Study-React/blob/master/markdown/TypeScript.md)
> 1. `TypeScript`란

 ‼️Tip‼️ 설치 방법
> 2. 타입정의
> 3. React Props 타입 정의
> 4. Theme(다크모드, 라이트모드)
---
### [ReactRouterDom](https://github.com/KangJeoungMi/Study-React/blob/master/markdown/ReactRouterDom.md)

> [install React-Router-Dom](https://www.npmjs.com/package/react-router-dom?activeTab=readme)

` $ npm i react-router-dom@6.4 `

![ReacRouterDom.png](/markdown/image/ReacRouterDom.png)

1. `ReactRouter`란
2. `BrouserRouter`, `createBrowserRouter`
3. `errorElement`, `useNavigate`, `useParams`
4. `Outlet`, `useOutletContext`
---

### 투두리스트 만들기

<img src='../todo-list/img/result.gif' width='400px'>


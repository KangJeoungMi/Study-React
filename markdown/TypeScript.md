TypeScript : js를 기반으로 한 프로그래밍 언어

기존에 리액트 프로젝트에 타입스크립트를 추가하기

1. npm install --save typescript @types/node @types/react @types/react-dom @types/jest
2. src 폴더 안에 있던 App.js와 index.js 파일을 App.tsx와 index.tsx 로 바꾼다.
3. "npx tsc --init" 명령어로 tsconfig.json 파일 생성한 후, tsconfig.json 파일에 "jsx": "react-jsx"추가
-------------------------------------------
{
"compilerOptions": {
......
"jsx": "react-jsx"
}
}
-------------------------------------------
4. src/index.tsx에서 수정
--------------------------------------------------------------
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
---------------------------------------------------------------
5. npm i --save-dev @types/styled-components

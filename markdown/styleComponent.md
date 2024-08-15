### StyleComponent 학습

## 목차
0. styleComponent 패키지 설치
1. Props(Properties)
2. 확장 컴포넌트
3. as
4. attrs
5. Theme(다크모드, 라이트모드)
---

- styleComponent 패키지 설치
  > $ npm install styled-components

1. Props(Properties)
- `Props(Properties)` : 컴포넌트 간에 데이터를 전달할떄 사용
  - 속성 전달 : `props`는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 떄 사용. 자식 컴포넌트는 부모로부터 전달받은 `props`를 통해 데이터나 함수에 접근할 수 있음.
  - 읽기 전용 : 자식 컴포넌트 내에서 수정할 수 없음. 데이터를 전달받은 컴포넌트는 이 데이터를 사용하는 데만 책임이 있음

```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
function App() {
  return (
    <Box  bgColor = "teal" />
    <Box  bgColor = "tomato" />
  );
}
```
![SC01_png](/markdown/image/SC_1.png)
---
2. 확장 컴포넌트
> 기존의 styledComponent 를 확장하여 새로운 스타일을 적용하는 방법이다.
> 이미 정의된 스타일드 컴포넌트를 기반으로 하여 새로운 스타일드 컴포넌트를 쉽게 생성 가능.
```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
  const Circle = styled(Box)`
   border-radius : 50px;
 `;

function App() {
  return (
    <Box  bgColor = "teal" />
    <Circle  bgColor = "tomato" />
  );
}
```
![SC02_png](/markdown/image/SC_2.png)

---
3. as
> 기존 styledComponent 를 다른 HTML요소나 컴포넌트로 변환 할 수 있음. 
> 이 기능을 사용하면 컴포넌트를 재사용하면서, 특정상황에 맞게 렌더링될 요소를 동적으로 변경 가능
```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
  const Circle = styled(Box)`
   border-radius : 50px;
 `;

function App() {
  return (
    <Box  bgColor = "teal" />
    <Circle  bgColor = "tomato" />
    <Btn as="a">Login</Btn>
  );
}
```
- 장점
1. `유연성` : 동일한 스타일을 유지하면서 다양한 요소로 렌더링 할 수 있어 **컴포넌트의 재사용성이 높아짐**
2. `동적 요소 변경` : 상황에 따라 동적으로 요소를 변경해야 할 떄 유용하다. 예를 들어 버튼이 링크로 동락해야 할 떄 `as="a"`로 바꿀 수 있음
3. `스타일 재사용` : 스타일을 공유하면서 요소타입을 변경할 수 있어 코드의 중복을 줄일 수 있음
---
4. attrs
> 추가적인 속성이나 기본속성을 설정할 때 사용
```javascript
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
`;
const rotation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0%
  }50%{
  border-radius: 50%
  }100%{
    transform:rotate(360deg);
    border-radius: 100%
  }
`;
const Emoji = styled.span`
    font-size: 60px;
`
 const Box_1 = styled.div`
  height: 200px;
  width: 200px;
  background-color: pink;
  display:flex;
  align-items: center;
  justify-content: center;
  animation: ${rotation} 1s linear infinite;
  ${Emoji}:hover{
      font-size: 30px;
    }
    &:active{
      opacity: 0%;
    }
  }

 `;

function App() {
  return (
   <Wrapper>
       <Box_1>
         <Emoji>🐶</Emoji>
       </Box_1>
     </Wrapper>
  );
}
### StyleComponent 학습

## 목차
0. styleComponent 패키지 설치
1. Props(Properties)
2. 확장 컴포넌트
3. as
4. attrs
---

- styleComponent 패키지 설치
  > $ npm install styled-components

1. Props(Properties)
- `Props(Properties)` : 컴포넌트 간에 데이터를 전달할떄 사용
  - 속성 전달 : `props`는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 떄 사용. 자식 컴포넌트는 부모로부터 전달받은 `props`를 통해 데이터나 함수에 접근할 수 있음.
  - 읽기 전용 : 자식 컴포넌트 내에서 수정할 수 없음. 데이터를 전달받은 컴포넌트는 이 데이터를 사용하는 데만 책임이 있음

```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
function App() {
  return (
    <Box  bgColor = "teal" />
    <Box  bgColor = "tomato" />
  );
}
```
![SC01_png](/markdown/image/SC_1.png)
---
2. 확장 컴포넌트
> 기존의 styledComponent 를 확장하여 새로운 스타일을 적용하는 방법이다.
> 이미 정의된 스타일드 컴포넌트를 기반으로 하여 새로운 스타일드 컴포넌트를 쉽게 생성 가능.
```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
  const Circle = styled(Box)`
   border-radius : 50px;
 `;

function App() {
  return (
    <Box  bgColor = "teal" />
    <Circle  bgColor = "tomato" />
  );
}
```
![SC02_png](/markdown/image/SC_2.png)

---
3. as
> 기존 styledComponent 를 다른 HTML요소나 컴포넌트로 변환 할 수 있음. 
> 이 기능을 사용하면 컴포넌트를 재사용하면서, 특정상황에 맞게 렌더링될 요소를 동적으로 변경 가능
```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
  const Circle = styled(Box)`
   border-radius : 50px;
 `;

function App() {
  return (
    <Box  bgColor = "teal" />
    <Circle  bgColor = "tomato" />
    <Btn as="a">Login</Btn>
  );
}
```
- 장점
1. `유연성` : 동일한 스타일을 유지하면서 다양한 요소로 렌더링 할 수 있어 **컴포넌트의 재사용성이 높아짐**
2. `동적 요소 변경` : 상황에 따라 동적으로 요소를 변경해야 할 떄 유용하다. 예를 들어 버튼이 링크로 동락해야 할 떄 `as="a"`로 바꿀 수 있음
3. `스타일 재사용` : 스타일을 공유하면서 요소타입을 변경할 수 있어 코드의 중복을 줄일 수 있음
---
4. attrs
> 추가적인 속성이나 기본속성을 설정할 때 사용
```javascript
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
`;
const rotation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0%
  }50%{
  border-radius: 50%
  }100%{
    transform:rotate(360deg);
    border-radius: 100%
  }
`;
const Emoji = styled.span`
    font-size: 60px;
`
 const Box_1 = styled.div`
  height: 200px;
  width: 200px;
  background-color: pink;
  display:flex;
  align-items: center;
  justify-content: center;
  animation: ${rotation} 1s linear infinite;
  ${Emoji}:hover{
      font-size: 30px;
    }
    &:active{
      opacity: 0%;
    }
  }

 `;

function App() {
  return (
   <Wrapper>
       <Box_1>
         <Emoji>🐶</Emoji>
       </Box_1>
     </Wrapper>
  );
}
### StyleComponent 학습

## 목차
0. styleComponent 패키지 설치
1. Props(Properties)
2. 확장 컴포넌트
3. as
4. attrs
---

- styleComponent 패키지 설치
  > $ npm install styled-components

1. Props(Properties)
- `Props(Properties)` : 컴포넌트 간에 데이터를 전달할떄 사용
  - 속성 전달 : `props`는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 떄 사용. 자식 컴포넌트는 부모로부터 전달받은 `props`를 통해 데이터나 함수에 접근할 수 있음.
  - 읽기 전용 : 자식 컴포넌트 내에서 수정할 수 없음. 데이터를 전달받은 컴포넌트는 이 데이터를 사용하는 데만 책임이 있음

```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
function App() {
  return (
    <Box  bgColor = "teal" />
    <Box  bgColor = "tomato" />
  );
}
```
![SC01_png](/markdown/image/SC_1.png)
---
2. 확장 컴포넌트
> 기존의 styledComponent 를 확장하여 새로운 스타일을 적용하는 방법이다.
> 이미 정의된 스타일드 컴포넌트를 기반으로 하여 새로운 스타일드 컴포넌트를 쉽게 생성 가능.
```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
  const Circle = styled(Box)`
   border-radius : 50px;
 `;

function App() {
  return (
    <Box  bgColor = "teal" />
    <Circle  bgColor = "tomato" />
  );
}
```
![SC02_png](/markdown/image/SC_2.png)

---
3. as
> 기존 styledComponent 를 다른 HTML요소나 컴포넌트로 변환 할 수 있음. 
> 이 기능을 사용하면 컴포넌트를 재사용하면서, 특정상황에 맞게 렌더링될 요소를 동적으로 변경 가능
```javascript
import styled from 'styled-components';

 const Box = styled.div`
   height: 100px;
   width: 100px;
   background-color: ${(props) => props.bgColor};
 `;
  const Circle = styled(Box)`
   border-radius : 50px;
 `;

function App() {
  return (
    <Box  bgColor = "teal" />
    <Circle  bgColor = "tomato" />
    <Btn as="a">Login</Btn>
  );
}
```
- 장점
1. `유연성` : 동일한 스타일을 유지하면서 다양한 요소로 렌더링 할 수 있어 **컴포넌트의 재사용성이 높아짐**
2. `동적 요소 변경` : 상황에 따라 동적으로 요소를 변경해야 할 떄 유용하다. 예를 들어 버튼이 링크로 동락해야 할 떄 `as="a"`로 바꿀 수 있음
3. `스타일 재사용` : 스타일을 공유하면서 요소타입을 변경할 수 있어 코드의 중복을 줄일 수 있음
---
4. attrs
> 추가적인 속성이나 기본속성을 설정할 때 사용
```javascript
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Enter text here'
})`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
`;
```
장점
1. `기본값 설정`: 컴포넌트에 기본 속성을 설정하여, 반복적인 속성 설정을 피할 수 있습니다.
2. `동적 속성 설정`: props를 기반으로 동적으로 속성 값을 설정할 수 있어 유연성이 높아집니다.
3. `재사용성`: 여러 컴포넌트에서 동일한 속성 세트를 사용할 때 유용합니다. 한 번 정의하면 다른 곳에서 쉽게 재사용할 수 있습니다.

|`attrs`|`as`|
|-------|----|
|컴포넌트의 속성을 설정하거나 추가할 때 사용됩니다. 주로 HTML 속성이나 이벤트 핸들러를 정의하는 데 유용|컴포넌트를 다른 HTML 요소나 컴포넌트로 변환할 때 사용됩니다. 컴포넌트의 렌더링 결과를 변경하는 데 사용|

---

5. Theme(다크모드, 라이트모드)
> 전체 애플리케이션의 스타일을 다크모드와 화이트 모드로 전환할 수 있다.
> `ThemeProvider`활용

`index.js`
```javascript
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111"
};

const whiteTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke"
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    <ThemeProvider/>
  </React.StrictMode>
);
```
`App.js`
```javascript
const Title =  styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height:100vh;
  width:100vw;
  justify-content:center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
function App() {
  return (
 <Wrapper>
      <Title>Hello</Title>
  </Wrapper>
  );
};
```

![SC03_png](/markdown/image/SC_3.png)

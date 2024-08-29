### 환경설정
1. > $ npx create-react-app [폴더명] --template typescript
2. > $ npm i --save-dev @types/styled-components
3. > $ npm i styled-components
4. > $ npm i react-router-dom@6.4
5. > $ npm i react-query

6. 지정할 주소 예시

|경로|설명|예시|
|---|---|---|
|/|All coins||
|/:id|BitCoin(btc) => Coin Detail|`/btc/information`, `btc/chart`|

7. 스타일 속성
    - [Reset CSS](https://github.com/zacanger/styled-reset/blob/master/src/index.ts)
    - [Google Fonts](https://fonts.google.com)
        - Source Sans Pro 폰트
        - @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
        - font-family: 'Source Sans Pro', sans-serif;
    - [Flat UI Color](https://flatuicolors.com/palette/gb)
    - [createGlobalStyle (전역 스타일을 처리함)](https://styled-components.com/docs/api#createglobalstyle)
        - 전역 스타일을 처리하는 특수 Styled Component를 생성하는 helper 함수입니다.
    - [CoinPaprika JSON](https://api.coinpaprika.com/v1/coins)
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 0 20px
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
    background-color: white;
    color:  ${(props) => props.theme.bgColor};
    border-radius: 10px;
    margin-bottom: 10px;
    a{
        padding : 20px;
        transition : color 0.2s ease-in;
        display: flex;
        align-items: center;

    }
    &:hover{
        a{
            color: ${(props) => props.theme.accentColor}
        }
    }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
  
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;
interface CoinInterface {
    "id": string,
    "name": string,
    "symbol": string,
    "rank": number,
    "is_new": boolean,
    "is_active": boolean,
    "type": string,
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loding, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const respose = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await respose.json();
            setCoins(json.slice(0,100));
            setLoading(false);
        })();
    },[]);
    console.log(coins);
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      {loding ? (
        <Loader>
            Loading...
        </Loader>
      ) : (
      <CoinsList>
        {coins.map((coin) => (
          <Coin key={coin.id}>
            <Link to={{
                pathname: `/${coin.id}`,
                search: `?name=${coin.name}`,
            }}
            >
                    <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`} alt="" />
                    {coin.name} ▶︎
            </Link>
          </Coin>
        ))}
      </CoinsList>
      )}
    </Container>
  );
}

export default Coins;

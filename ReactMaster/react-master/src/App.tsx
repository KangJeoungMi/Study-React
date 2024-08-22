import styled from 'styled-components';
import './App.css';
// Props Types 는 prop이 거기에 있는지 없는지 확인해주지만, 코드를 실행 한 "후"에만 확인이 가능하다.
// typeScript

const Container = styled.div`
  background-color: ${(props)=> props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props)=> props.theme.textColor};
`;

function App() {
  // const [value, setvalue]= useState("");
  // const onChange = (event : React.FormEvent<HTMLInputElement>) => {
  //   // console.log(event.currentTarget.value);
  //   const {
  //     currentTarget: {value},
  //   } = event;
  //   setvalue(value);
  // };
  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("hello", value);
  // };
  return (
    <div className="App">
      {/* <Circle borderColor="yellow" bgColor="teal"/> */}
      {/* <Circle bgColor="tomato"/> */}
      {/* <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder='username' />
        <button>Log in</button>
      </form> */}
      <Container>
        <H1>Hello</H1>
      </Container>
    </div>
  );
}

export default App;

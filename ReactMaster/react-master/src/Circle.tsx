import { useState } from "react";
import styled from "styled-components";

interface ContainerProps{
    bgColor: string ;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border: 1px solid ${(props) => props.borderColor};
    border-radius: 100px;
`;

// const x = (a:number, b:number) => a+b;
interface CircleProps{
    bgColor: string ;
    borderColor?: string; // ? : 있을수도 있고 없을 수도 있음(optoinal)
    text? : string;
}


function Circle({bgColor, borderColor, text = "default text"}:CircleProps){
    const [counter, setCounter] = useState<number|string>(0);
    // setCounter(1);
    // setCounter("hello");
    return <Container bgColor={bgColor} borderColor = {borderColor ?? bgColor}/>;
}

export default Circle;

// interface playershape{
//     name: string;
//     age: number;
// }

// const sayHello = (palyerObj: playershape) => 
// `Hello ${palyerObj.name} you are ${palyerObj.age} years old`;

// sayHello({name:"A", age: 12});
import './App.css';
import Circle from './Circle';
// Props Types 는 prop이 거기에 있는지 없는지 확인해주지만, 코드를 실행 한 "후"에만 확인이 가능하다.
// typeScript
function App() {
  return (
    <div>
      <Circle />
    </div>
     
  );
}

export default App;

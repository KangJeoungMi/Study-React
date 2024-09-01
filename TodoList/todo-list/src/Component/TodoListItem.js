import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import styled from 'styled-components'; // 수정: styled import 방식

const Remove = styled.div`
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
`;

const Checkbox = styled.div`
    font-size: 1.5rem;
    cursor: pointer;
    span {
        color: ${props => props.checked ? '#adb5bd' : 'inherit'};
        text-decoration: ${props => props.checked ? 'line-through' : 'none'};
    }
`;

//TodoListItem에 todo를 prop으로 전달한다. todo는 상위 컴포넌트인 ToDoList에서 받아온 것이고, todos 배열에 들어있는 각 원소(객체) 이다
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    // 구조 분해 할당으로  todo.id, todo.text, todo.checked를 id, text, checked에 할당했다
    // id=todo.id, text=todo.text, checked=todo.checked가 된다
    const { text, checked, id } = todo; // 객체 구조 분해 [참고자료]

    return (
        <li className="list-group-item border-1 rounded d-flex flex-column mb-2">
            <div className="d-flex align-items-center justify-content-between">
                <Checkbox checked={checked} onClick={() => onToggle(id)}>
                    {/* checked 가 true이면 MdCheckBox, false MdCheckBoxOutlineBlank*/}
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <span className='fs-6 mx-2 text'>{text}</span>
                </Checkbox>
                {/* 삭제 아이콘에 onClick 이벤트로 onRemove(id)를 넘긴다. 
                    그러면 삭제 아이콘을 클릭 했을 때 해당 일정 항목의 id가 onRemove의 인자로 넘어간다 */}
                <Remove onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </Remove>
            </div>
        </li>
    );
};

export default TodoListItem;

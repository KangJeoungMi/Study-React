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

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { text, checked, id } = todo; // 객체 구조 분해

    return (
        <li className="list-group-item border-1 rounded d-flex flex-column mb-2">
            <div className="d-flex align-items-center justify-content-between">
                <Checkbox checked={checked} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <span className='fs-6 mx-2 text'>{text}</span>
                </Checkbox>
                <Remove onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </Remove>
            </div>
        </li>
    );
};

export default TodoListItem;

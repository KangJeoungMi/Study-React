import { useCallback, useState } from "react";
import { Form } from "react-bootstrap";

// onInsert가 함수로 전달되어야 하는데, 함수 인자로 받아와야 합니다.
//올바른 방법은 ({ onInsert })와 같이 prop으로 받아오는 것입니다.
const TodoInsert = ({onInsert}) => {
    // Hooks 중 useState로 컴포넌트 상태를 관리한다.
    // useState(''); 초기상태는 공백이다
    const [value, setValue] = useState('');
    // Hooks 중 useCallback으로 특정 함수를 새로 만들지 않고 재사용하고 싶을 떄 사용한다
    // useCallback(() => {return value;}, []);
    // onChange는 이벤트핸들러로 <input>태그에서 사용할 수 있다
    const onChange = useCallback(e => {
        // e는 이벤트 객체로 타겟 값을 가져온다
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
            e.preventDefault(); // 기본 폼 제출 동작(페이지 리로드) 방지 (비동기 작업이 아니며, 이벤트 처리 함수가 호출된 순간에 이벤트의 기본 동작을 즉시 취소한다)
            if (value.trim()) { // 입력 값이 비어 있지 않은 경우에만 호출
                onInsert(value); // 비어있지 않은 입력값 `value`값을 `onInsert`함수에 전달한다.
                // onInsert는 부모 컴포넌트에서 전달받은 콜백 함수로, 입력 값을 처리하는 기능을 담당
                setValue(''); // 폼 제출 후 입력 필드를 비우누다
            }
        },
        [onInsert,value] // useCallback이 onSubmit 함수를 재생성할 조건을 지정한다.
        // onInsert 또는 value가 변경될 떄 onSubmit함수가 새로 생성된다
    );

    const onClick = useCallback(() => { // onClick은 onSubmit과 동일한 방식으로 진행된다
            onInsert(value);
            setValue('');
    }, [onInsert,value]);
    

    return (
        <Form className="d-flex input-group" onSubmit={onSubmit}>
            <input id="item" className="form-control" type="text" placeholder="할일을 입력하세요." value={value} onChange={onChange} />
            <button type="button" className="btn btn-outline-warning fw-bold" onClick={onClick}> + </button>
        </Form>
    );
};
export default TodoInsert;

// 비동기 처리 예: 비동기 작업은 fetch API를 사용하여 데이터를 가져오거나,
// setTimeout을 사용하여 일정 시간 후에 코드를 실행하는 경우에 발생합니다.
// 이런 작업들은 이벤트 핸들러 내부에서 동기적으로 처리된 후, 비동기적으로 실행됩니다.
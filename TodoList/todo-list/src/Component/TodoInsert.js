import { useCallback, useState } from "react";
import { Form } from "react-bootstrap";

const TodoInsert = ({onInsert}) => { // onInsert가 함수로 전달되어야 하는데, 함수 인자로 받아와야 합니다. 올바른 방법은 ({ onInsert })와 같이 프롭으로 받아오는 것입니다.
    const [value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            if (value.trim()) { // 입력 값이 비어 있지 않은 경우에만 호출
                onInsert(value);
                setValue('');
            }
        },
        [onInsert,value]
    );

    const onClick = useCallback(
        () => {
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
export default TodoInsert
// 부트스트랩 적용 컴포넌트
import { Card, Container } from "react-bootstrap";

const TodoTemplate = ({children}) => { // 함수형 컴포넌트로 정의 되어 있음. `children`이라는 prop받기
    return (
        <Container className="d-flex justify-content-center mt-4" style={{ height: '90vh' }}>
            <Card className="w-100 shadow-sm p-2 bg-body rounded " style={{ overflowY: 'auto' }} >
                <Card.Body className="di">
                    <h2 className="text-center fw-bold">Todo List</h2>
                    <hr />
                    {children}
                </Card.Body>
            </Card>
        </Container>
    );
}
export default TodoTemplate;

// 투두리스트를 이루는 컨테이너 박스
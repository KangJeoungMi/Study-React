import { Card, Container } from "react-bootstrap";

const TodoTemplate = ({children}) => {
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
import { Col, Container, Row } from "react-bootstrap";
import BookList from "../BookList/BookList";


function Home() {
    return (
        <Container>
            <Row className="text-center">
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <BookList />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
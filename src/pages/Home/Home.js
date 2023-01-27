import { Col, Container, Row } from "react-bootstrap";

function Home() {
    return (
        <>
            <Container fluid className="bg-dark">
                <Row className="text-center">
                    <Col>
                        <h2>Home</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
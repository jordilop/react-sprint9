import { Col, Container, Row } from "react-bootstrap";
import Slide from "../../components/Slide/Slide";

function Home() {
    return (
        <>
            <Slide />

            <Container fluid>
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
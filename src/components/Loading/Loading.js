import { Col, Container, Row, Spinner } from "react-bootstrap";

function Loading() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <Row>
                <Col>
                    <Spinner animation="grow" variant="secondary" />
                </Col>
                <Col>
                    <Spinner animation="grow" variant="secondary" style={{ animationDelay: ".1s" }} />
                </Col>
                <Col>
                    <Spinner animation="grow" variant="secondary" style={{ animationDelay: ".2s" }} />
                </Col>
            </Row>
        </Container>
    )
}

export default Loading;
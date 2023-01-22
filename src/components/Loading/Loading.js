import { Col, Row, Spinner } from "react-bootstrap";

function Loading() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
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
        </div >
    )
}

export default Loading;
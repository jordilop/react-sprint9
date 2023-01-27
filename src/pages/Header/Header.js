import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/NavBar/NavBar";


function Header() {


    return (
        <header>
            <Container>
                <Row className="align-items-center">
                    <Col md={12}>
                        <NavBar />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
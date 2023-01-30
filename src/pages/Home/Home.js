import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Slide from "../../components/Slide/Slide";
import img from "../../assets/img/slide.png";
import "./index.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* <Slide /> */}
            <Container fluid>
                <Row className="banner justify-content-center align-items-center text-white">
                    <Col md={5} className="text-center">
                        <h4 className="mb-3">Proyecto IT Academy para buscar libros mediante la API Google Books</h4>
                        <Button variant="warning" as={Link} to='/books'>Ir al buscador</Button>
                    </Col>
                </Row>
                <Row className="justify-content-center my-3 ">
                    <Col md={3} className="d-flex my-3 my-md-0 justify-content-center">
                        <Card style={{ width: '20rem' }} className="shadow border-0 text-center">
                            <Card.Img variant="top" src={img} className="img-fluid w-75 mx-auto mt-4" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="d-flex my-3 my-md-0 justify-content-center">
                        <Card style={{ width: '20rem' }} className="shadow border-0 text-center">
                            <Card.Img variant="top" src={img} className="img-fluid w-75 mx-auto mt-4" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="d-flex my-3 my-md-0 justify-content-center">
                        <Card style={{ width: '20rem' }} className="shadow border-0 text-center">
                            <Card.Img variant="top" src={img} className="img-fluid w-75 mx-auto mt-4" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center my-3">
                    <Col md={6}>
                        <Slide />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
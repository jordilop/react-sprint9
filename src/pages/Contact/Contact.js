import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function Contact() {

    const handleSubmit = e => {
        alert("Mensaje enviado!")
    }

    return (
        <Container className="my-5">
            <Row className="vh-100 justify-content-center align-items-center">
                <Col md={6} className="border rounded p-3 p-md-5">
                    <h4 className="text-center mb-4">Formulario de contacto</h4>
                    <Form className="text-black" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <InputGroup>
                                <Form.Control type="email" name="email" placeholder="Email" />
                                <InputGroup.Text id="btnEmail">@</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Control
                                as="textarea"
                                placeholder="Escribe aquí tu mensaje"
                                style={{ height: '15rem' }}
                            />
                        </Form.Group>
                        <Col lg={6} className="d-grid mx-auto">
                            <Button variant="primary" type="submit">Enviar</Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;
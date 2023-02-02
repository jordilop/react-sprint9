import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Alert, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function ResetPassword() {

    const [user, setUser] = useState({
        email: '',
    });

    const { resetPassword } = useAuth();
    const [error, setError] = useState();
    const [valid, setValid] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        setValid('');
        try {
            await resetPassword(user.email);
            setValid('We have sent you an email to reset your password');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <Container>
            <Row className="vh-100 justify-content-center align-items-center">
                <Col md={6} className="border rounded p-3 p-md-5">
                    <h4 className="text-center mb-4">Restaurar Password</h4>
                    <Form className="text-muted" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Ingresa tu email a continuación y recibirás un correo electrónico para restablecer su contraseña.</Form.Label>
                            <InputGroup className="my-2">
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
                                <InputGroup.Text id="btnEmail">@</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Col lg={6} className="d-grid mx-auto my-3">
                            <Button variant="secondary" type="submit">Enviar</Button>
                        </Col>
                        {
                            error &&
                            <Row className="text-center">
                                <Alert variant="danger">
                                    {error}
                                </Alert>
                            </Row>
                        }
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ResetPassword;
import { useState } from "react";
import { Alert, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

function Login() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        showPassword: false
    });

    const { login, loginWithGoogle } = useAuth();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    const handleGoogleSignIn = async () => {
        setError('');
        try {
            await loginWithGoogle();
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }

    const handleShowPassword = () => {
        setUser({
            ...user,
            showPassword: !user.showPassword
        });
    }

    return (
        <Container>
            <Row className="vh-100 justify-content-center align-items-center">
                <Col md={6} className="border rounded p-3 p-md-5">
                    <h4 className="text-center mb-4">Login</h4>
                    <Form className="text-black" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                                <InputGroup.Text id="btnEmail">@</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={user.showPassword ? " text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                                <InputGroup.Text id="btnEmail" type="button" onClick={handleShowPassword}>
                                    {user.showPassword ? <FaEyeSlash /> : <FaEye />}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3 text-center" controlId="formForgot">
                            <Form.Label>
                                No recuerdas el password?<Link className="link-primary ms-1" to='/reset'>Click</Link>
                            </Form.Label>
                        </Form.Group>
                        <Col lg={6} className="d-grid mx-auto">
                            <Button variant="primary" type="submit">Login</Button>
                        </Col>
                        <div className="border-bottom my-3"></div>
                        <Col lg={6} className="d-grid mx-auto">
                            <Button variant="outline-danger" onClick={handleGoogleSignIn}>
                                <BsGoogle className="me-2" />
                                Login with Google
                            </Button>
                        </Col>
                        <Form.Group className="my-3 text-center" controlId="formRegister">
                            <Form.Label>
                                No estas registrado?<Link className="link-primary ms-1" to='/register'>Registrate</Link>
                            </Form.Label>
                        </Form.Group>
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

export default Login;
import { useState } from "react";
import { Alert, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        showPassword: false
    });

    const { signup } = useAuth();
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
            await signup(user.email, user.password);
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
                    <h4 className="text-center mb-4">Register</h4>
                    <Form className="text-secondary" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <InputGroup>
                                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
                                <InputGroup.Text id="btnEmail">@</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control type={user.showPassword ? " text" : "password"} name="password" placeholder="Password" onChange={handleChange} />
                                <InputGroup.Text id="btnEmail" type="button" onClick={handleShowPassword}>
                                    {user.showPassword ? <FaEyeSlash /> : <FaEye />}
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <Col lg={6} className="d-grid mx-auto">
                            <Button variant="warning" type="submit">Sign up</Button>
                        </Col>
                        <div className="border-bottom my-3"></div>
                        <Form.Group className="my-3 text-center" controlId="formRegister">
                            <Form.Label>
                                Do you have an account?<Link className="link-primary ms-1" to='/login'>Login</Link>
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

        // <div>
        //     <h2>Register</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="email">Email</label>
        //             <input
        //                 type="email"
        //                 name="email"
        //                 placeholder="mail@mail.com"
        //                 onChange={handleChange}
        //             />
        //         </div>
        //         <div className="d-flex">
        //             <label htmlFor="password">Password</label>
        //             <input
        //                 type={user.showPassword ? "text" : "password"}
        //                 name="password"
        //                 placeholder="******"
        //                 onChange={handleChange}
        //             />
        //             <Button variant="light" onClick={handleShowPassword} size="sm">
        //                 {
        //                     user.showPassword ?
        //                         <FaEyeSlash />
        //                         :
        //                         <FaEye />
        //                 }
        //             </Button>
        //         </div>
        //         <button>Sign up</button>
        //     </form>
        //     <p>Do you have an account?<Link className="link-dark ms-1" to='/login'>Login</Link></p>
        //     {
        //         error
        //         &&
        //         <div className="d-flex">
        //             <Alert variant="danger" className="mt-2">
        //                 <Alert.Heading>Error</Alert.Heading>
        //                 {error}
        //             </Alert>
        //         </div>
        //     }
        // </div>
    )
}

export default Register;
import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./index.css";

function Footer() {

    const date = new Date();

    return (
        <footer>
            <Container fluid>
                <Row className="footer-links text-white align-items-center justify-content-center py-3">
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link as={Link} to='/' className="text-white py-0">Inicio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/books' className="text-white py-0">Libros</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/contact' className="text-white py-0">Contacto</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='login' className="text-white py-0">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/register' className="text-white py-0">Registro</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link as={Link} to='#' className="text-white py-0">Derechos de privacidad</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='#' className="text-white py-0">Aviso legal</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='#' className="text-white py-0">Política de cookies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='#' className="text-white py-0">Baja de usuario</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link onClick={() => window.open(`https://facebook.com`)} className="text-white py-0 footer-logos"><FaFacebook size="1.5rem" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => window.open(`https://instagram.com`)} className="text-white py-0 footer-logos"><FaInstagram size="1.5rem" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => window.open(`https://twitter.com`)} className="text-white py-0 footer-logos"><FaTwitter size="1.5rem" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => window.open(`https://youtube.com`)} className="text-white py-0 footer-logos"><FaYoutube size="1.5rem" /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row className="bg-white justify-content-center">
                    <Col className="text-center my-3">
                        <p className="mb-0">
                            <FaGithub size="1.5rem" className="me-2" />
                            repositorio <Link onClick={() => window.open(`https://github.com/jordilop/sprint9`)} >aquí</Link></p>
                        <p className="mb-0">© jordilop - {date.getFullYear()}. Reservados todos los derechos.</p>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer;
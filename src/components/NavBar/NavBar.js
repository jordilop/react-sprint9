import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar expand="md" bg="light" variant="light" className="mt-2 px-2" >
            <Container fluid>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="d-flex" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/register'>Sign up</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { FaRegUser, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function NavBar() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // console.log(user);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    }

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
                    {
                        user ?
                            <Nav className="d-flex align-items-center">
                                <Nav.Item className="me-2">
                                    Welcome {user.email}!
                                </Nav.Item>
                                <Nav.Item>
                                    <Button onClick={handleLogout} variant="outline-secondary" size="sm">
                                        <FaSignOutAlt />
                                        Logout
                                    </Button>
                                </Nav.Item>
                            </Nav>
                            :
                            <Nav className="d-flex" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link as={Link} to='/login'>
                                        <FaRegUser />
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link as={Link} to='/register'>
                                        <FaUser />
                                        Sign up
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
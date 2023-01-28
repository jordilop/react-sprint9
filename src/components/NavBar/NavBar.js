import { Nav, Navbar, Button } from "react-bootstrap";
import { MdLogin, MdLogout, MdPersonOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/img/logo-book.png";

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
        <Navbar expand="md">
            <Navbar.Brand as={Link} to='/'>
                <img
                    src={logo}
                    width="120"
                    className="d-inline-block align-top"
                    alt="logo-book"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                <Nav className="me-auto" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to='/books'>Books</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
                {
                    user ?
                        <Nav className="align-items-center">
                            <Nav.Item className="mb-2 mb-md-0 me-0 me-md-2">
                                Welcome {user.email}!
                            </Nav.Item>
                            <Nav.Item>
                                <Button onClick={handleLogout} variant="outline-secondary" size="sm">
                                    <MdLogout size="1.5rem" className="me-2" />
                                    Logout
                                </Button>
                            </Nav.Item>
                        </Nav>
                        :
                        <Nav as="ul">
                            <Nav.Item as="li" className="border-end">
                                <Nav.Link as={Link} to='/login'>
                                    <Button variant="outline-primary" size="sm">
                                        <MdLogin size="1.5rem" className="me-2" />
                                        Login
                                    </Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link as={Link} to='/register'>
                                    <Button variant="outline-warning" size="sm">
                                        <MdPersonOutline size="1.5rem" className="me-2" />
                                        Sign up
                                    </Button>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
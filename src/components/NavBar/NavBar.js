import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { MdLogin, MdLogout, MdPersonOutline, MdAccountCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/img/logo-book-w.png";

import "./index.css"

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
        <Navbar expand="md" variant="dark">
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
                        <Nav.Link as={Link} to='/' className="text-white">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to='/books' className="text-white">Libros</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link as={Link} to='/contact' className="text-white">Contacto</Nav.Link>
                    </Nav.Item>
                </Nav>
                {
                    user ?
                        <Nav className="align-items-center">
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    <MdAccountCircle size="1.5rem" className="me-2" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Header>{user.email}</Dropdown.Header>
                                    {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleLogout}><MdLogout size="1.5rem" className="me-2" />Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        :
                        <Nav className="align-items-center">
                            <Dropdown align="end" >
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    <MdAccountCircle size="1.5rem" className="me-2" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='/login'>
                                        <MdLogin size="1.5rem" className="me-2" />Login
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as={Link} to='/register'>
                                        <MdPersonOutline size="1.5rem" className="me-2" />Registro
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                }
            </Navbar.Collapse>
        </Navbar >
    )
}

export default NavBar;
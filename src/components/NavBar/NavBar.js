import { Link } from "react-router-dom";

function NavBar() {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Sign up</Link></li>
        </ul>
    )
}

export default NavBar;
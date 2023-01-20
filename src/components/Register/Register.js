import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
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
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="mail@mail.com"
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex">
                    <label htmlFor="password">Password</label>
                    <input
                        type={user.showPassword ? "text" : "password"}
                        name="password"
                        placeholder="******"
                        onChange={handleChange}
                    />
                    <Button variant="light" onClick={handleShowPassword} size="sm">
                        {
                            user.showPassword ?
                                <FaEyeSlash />
                                :
                                <FaEye />
                        }
                    </Button>
                </div>
                <button>Sign up</button>
            </form>
            <p>Do you have an account?<Link className="link-dark ms-1" to='/login'>Login</Link></p>
            {
                error
                &&
                <div className="d-flex">
                    <Alert variant="danger" className="mt-2">
                        <Alert.Heading>Error</Alert.Heading>
                        {error}
                    </Alert>
                </div>
            }
        </div>
    )
}

export default Register;
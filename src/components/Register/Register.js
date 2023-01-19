import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function Register() {

    const [user, setUser] = useState({
        email: '',
        password: ''
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
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="******"
                        onChange={handleChange}
                    />
                </div>
                <button>Register</button>
            </form>
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
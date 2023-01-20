import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Alert } from "react-bootstrap";

function ResetPassword() {

    const [user, setUser] = useState({
        email: '',
    });

    const { resetPassword } = useAuth();
    const [error, setError] = useState();
    const [valid, setValid] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleResetPassword = async e => {
        e.preventDefault();
        setError('');
        setValid('');
        try {
            await resetPassword(user.email);
            setValid('We have sent you an email to reset your password');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>ResetPassword</h2>
            <form onSubmit={handleResetPassword}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="mail@mail.com"
                        onChange={handleChange}
                    />
                </div>
                <button>Reset Password</button>
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
            {
                valid
                &&
                <div className="d-flex">
                    <Alert variant="success" className="mt-2">
                        {valid}
                    </Alert>
                </div>
            }
        </div>
    )
}

export default ResetPassword;
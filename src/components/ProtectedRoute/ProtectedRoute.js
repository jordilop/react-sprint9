import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Loading from "../Loading/Loading";

function ProtectedRoute({ children, loading }) {

    const { user } = useAuth();

    if (loading) return <Loading />

    if (!user) return <Navigate to='/login' />

    return <>{children}</>
}

export default ProtectedRoute;
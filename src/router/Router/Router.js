import {
    Routes,
    Route,
} from 'react-router-dom';
import BookDetail from '../../components/BookDetail/BookDetail';
import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='*' element={<Error />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/reset' element={<ResetPassword />} />
                <Route path='/book/:bookId' element={<ProtectedRoute><BookDetail /></ProtectedRoute>} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default Router;
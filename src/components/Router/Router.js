import {
    Routes,
    Route,
} from 'react-router-dom';
import BookDetail from '../BookDetail/BookDetail';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ResetPassword from '../ResetPassword/ResetPassword';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='*' element={<div><h3>Error page in construction</h3></div>} />
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
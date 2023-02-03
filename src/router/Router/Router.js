import {
    Routes,
    Route,
} from 'react-router-dom';
import BookDetail from '../../components/BookDetail/BookDetail';
import Books from '../../pages/Books/Books';
import Error from '../../pages/Error/Error';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Contact from '../../pages/Contact/Contact';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function Router() {
    return (
        <div>
            <Routes>
                <Route path={process.env.PUBLIC_URL}>
                    <Route path='*' element={<Error />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='reset' element={<ResetPassword />} />
                    <Route path='books' element={<Books />} />
                    <Route path='books/:bookId' element={<ProtectedRoute><BookDetail /></ProtectedRoute>} />
                    <Route path='' element={<Home />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Router;
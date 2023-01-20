import {
    Routes,
    Route,
} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ResetPassword from '../ResetPassword/ResetPassword';

function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/reset' element={<ResetPassword />} />
            </Routes>
        </div>
    )
}

export default Router;
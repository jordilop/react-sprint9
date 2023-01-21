import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Router from './components/Router/Router';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <div className='vh-100 bg-white'>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

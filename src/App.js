import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router/Router/Router';
import { AuthProvider } from './context/authContext';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className='vh-100 bg-white'>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Router />
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

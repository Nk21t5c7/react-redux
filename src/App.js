import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.users.isAuthenticated)

  return (
    <Routes>
      <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;

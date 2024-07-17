import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BoardPage from './pages/Board/Board';
import { Login } from './pages/Auth/Login';
import { Signup } from './pages/Auth/Signup';
import { AuthProvider } from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kanban" element={<PrivateRoute><BoardPage /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

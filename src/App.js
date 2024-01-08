// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './Components/styles/Login.css';
import './Components/styles/profile.css';
import Home from './Components/Pages/Home';
import LoginButtons from './Components/Buttons/LoginButtons';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home user={user} logout={logout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <div>
                  <h1 className="login-container-title">Social Network</h1>
                  <LoginButtons />
                </div>
              ) : (
                <Navigate to="/home" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

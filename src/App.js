// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './Components/styles/Login.css';
import './Components/styles/profile.css';
import Home from './Components/Pages/Home';
import LoginButtons from './Components/Buttons/LoginButtons';
import { useAuth0 } from '@auth0/auth0-react';
import Nav from './Components/Menu/Nav';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
 
const [backgroundColor, setBackgroundColor] = useState("rgba(255, 255, 255, 255)");


  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <Router>
      <div className="App" style={{ backgroundColor }}>
      <Nav setBackgroundColor={setBackgroundColor} />
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
                <Home />
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
};

export default App;

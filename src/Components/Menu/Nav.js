// Nav.js

import React from 'react';
import User from "./User"; 
import Logo from "./Logo";
import Navigation from "./Navigation";  // Cambiado a un import por defecto

const Nav = ({ user, logout }) => {
  return (
    <header className="nav fixed">
      <div className="nav justify-content-center " >
        <Logo />
        <Navigation />
        <User />
        <small onClick={logout} >Cerrar Sesión</small>
      </div>
    </header>
  );
};

export default Nav;

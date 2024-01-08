// Home.js
import React from 'react';

const Home = ({ user, logout }) => {
  return (
    <div>
      <h1>Bienvenido {user.name}</h1>
      <button onClick={() => logout()}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;

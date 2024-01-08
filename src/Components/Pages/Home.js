// Home.js
import React from 'react';
import Nav from '../Menu/Nav';


export const Home = ({ logout }) => {
  return (
    <div>
      <Nav logout={logout}/>
      
    </div>
  );
};

export default Home;

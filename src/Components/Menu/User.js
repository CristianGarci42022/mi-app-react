// User.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const User = ({  prop, handleShow}) => {
  const { user, home } = useAuth0();

  return (
    <div className="user">
      <div >
        <h1 > {user?.name} </h1>
        {home === "home" ? (
        <picture className={prop} onClick={handleShow} style={{ cursor: "pointer" }}>
         
        </picture>
      ) : (
        <picture className={prop}>
          <img src={user?.picture} alt={user?.name} />
        </picture>
      )}
      </div>
    </div>
  );
};

export default User;

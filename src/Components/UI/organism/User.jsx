import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Username } from '../atoms/UserName';
import { Profile } from '../atoms/Profile';


export const User = ({ prop, handleShow }) => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setProfile(user);
    }
  }, [isAuthenticated, user]);

  const handleLogin = () => {
    loginWithRedirect();
  };

 

  return (
    <div className="user">
      <div>
        {isAuthenticated ? (
          <>
            <Username name={profile?.name} prop="username" />
          
          </>
        ) : (
          // Si el usuario no está autenticado, mostrar un botón de login
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
      {isAuthenticated && <Profile src={profile?.picture} />}
    </div>
  );
};

export default User;

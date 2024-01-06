import './App.css';
import LoginButtons from './Components/LoginButtons';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
function App() {

  const {isAuthenticated,isLoadig,user} = useAuth0()
  if (isLoadig) return <h1>Cargando .....</h1>
  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <div>
            <h1>Bienvenido {user.name} </h1>
           
          </div>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <>
          <div>
            <h1>Primero debes Iniciar sesión</h1>
            <LoginButtons />
          </div>
        </>
      )}
    </div>
  );
}

export default App;

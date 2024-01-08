
import { useAuth0 } from "@auth0/auth0-react";
const LoginButtons = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="login-container">
      <button
        className="login-container-button"
        onClick={() => loginWithRedirect()}
      >
        Iniciar Sesion
      </button>
    </div>
  );
};

export default LoginButtons;

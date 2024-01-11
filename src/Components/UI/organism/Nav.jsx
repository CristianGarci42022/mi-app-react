

import Logo from "../molecules/Logo";
import { Navigation } from "../molecules/Navigation";

import User from "../molecules/User";



export const Nav = ({logout}) => {
  return (
    <header className="nav fixed">
      <div className="nav justify-content-center " >
      <Logo/>
        <Navigation />
        <User />
        <small onClick={logout} >Cerrar Sesión</small>
      </div>
    </header>
  )
}
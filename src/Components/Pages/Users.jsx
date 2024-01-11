import { Nav } from "../UI/organism/Nav"
import { UsersTemplate } from "../templates/UsersTemplate"

export const Users = ({logout}) => {
  return (
    <>
      <Nav logout={logout}/>
      <UsersTemplate />
    </>
  )
}
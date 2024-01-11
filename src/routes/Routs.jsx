import { Route, Routes } from "react-router-dom";
import  {Home}  from "../Components/Pages/Home";
import { Users } from "../Components/Pages/Users";
export const Routs = () => {
  return (
    <>
   
      <Routes>
        <Route path="/:home" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      
    </>
  );
};

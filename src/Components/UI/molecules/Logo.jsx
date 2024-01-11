
import React from 'react';
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <a onClick={() => navigate("/home")}>Social Network</a>
    </div>
  );
};

export default Logo;

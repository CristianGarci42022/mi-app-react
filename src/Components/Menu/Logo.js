/* eslint-disable jsx-a11y/anchor-is-valid */
// Logo.js
import React from 'react';
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <a onClick={() => navigate("/home")}>Social Network</a>
    </div>
  );
};

export default Logo;

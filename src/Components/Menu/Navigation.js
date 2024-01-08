/* eslint-disable jsx-a11y/anchor-is-valid */
// Navigation.js
import React from 'react';
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <div>
        <a onClick={() => navigate("/")}>Posts</a>
        <a onClick={() => navigate("/users")}>Users</a>
      </div>
    </div>
  );
};

export default Navigation;

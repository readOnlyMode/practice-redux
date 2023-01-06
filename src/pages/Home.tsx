import React from "react";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/profile">Profile</Link>
    </>
  );
};

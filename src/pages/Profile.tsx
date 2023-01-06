import React from "react";
import { Link } from "react-router-dom";

const ProfilePage: React.FC = () => {
  return (
    <>
      <h1>Profile page</h1>

      <Link to="/">Home</Link>
    </>
  );
};

export default ProfilePage;

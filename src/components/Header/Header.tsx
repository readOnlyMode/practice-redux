import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <Nav as="ul" defaultActiveKey="/posts">
      <Nav.Item as="li">
        <Link to="/posts">Posts</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/todos">Todos</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/users">Users</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/counter">Counter</Link>
      </Nav.Item>
    </Nav>
  );
};

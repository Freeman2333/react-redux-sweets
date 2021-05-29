import React from "react";
import { Navbar, Badge } from "react-bootstrap";

const Nav = () => {
  return <Navbar className="d-flex flex-wrap" style={navbar} />;
};

const navbar = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  minHeight: "100px",
  zIndex: "15",
  background: "rgba(0, 0, 0, 0.75)",
};
export default Nav;

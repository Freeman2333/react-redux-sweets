import React from "react";
import { Navbar, Badge } from "react-bootstrap";
import { Animated } from "react-animated-css";
const Nav = () => {
  return (
    <Navbar className="d-flex flex-wrap" style={navbar}>
      <Animated
        animationIn="slideInDown"
        className="d-flex justify-content-between col-12"
      >
        ss
      </Animated>
    </Navbar>
  );
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

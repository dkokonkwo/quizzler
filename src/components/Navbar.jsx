import React from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LampCharge, TextalignLeft } from "iconsax-react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const handleNavClick = () => setExpanded(false);
  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand>
          <NavLink onClick={handleNavClick} className="nav-logo" to={"/"}>
            <LampCharge size="32" color="#26b5c5" />
            <h2>QUIZZLER</h2>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav"
          className="tg-icon"
        >
          <TextalignLeft size="32" color="#ffffff" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="navy">
          <Nav className="me-auto"></Nav>
          <Nav className="right-links">
            <NavLink
              to={"/"}
              className={({ isActive }) => {
                return isActive
                  ? "active-link top-link nav-link"
                  : "top-link nav-link";
              }}
              onClick={handleNavClick}
            >
              Home
            </NavLink>
            <NavLink
              to={"/play"}
              className={({ isActive }) => {
                return isActive
                  ? "active-link top-link nav-link"
                  : "top-link nav-link";
              }}
              onClick={handleNavClick}
            >
              Play
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) => {
                return isActive
                  ? "active-link top-link nav-link"
                  : "top-link nav-link";
              }}
              onClick={handleNavClick}
            >
              About the Creator
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

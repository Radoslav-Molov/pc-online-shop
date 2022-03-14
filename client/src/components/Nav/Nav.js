import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="w-100"
    >
      <Container>
        <Navbar.Brand href="/">Compute Yourself</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/catalog">Catalog</Nav.Link>
            <Nav.Link href="#catalog">Build you PC</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="display-11">
              Login
            </Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

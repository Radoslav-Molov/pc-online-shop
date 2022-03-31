import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from '../Nav/Nav.module.css'


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
        <Navbar.Brand><Link id={style.title} to='/'>Compute Yourself</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link className={style.anchor} to='/catalog'>Catalog</Link> </Nav.Link>
            <Nav.Link><Link className={style.anchor} to='/configurator'>Configurator</Link></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="display-11">
              <Link className={style.anchor} to='/login'>Login</Link>
            </Nav.Link>
            <Nav.Link><Link className={style.anchor} to='/register'>Register</Link></Nav.Link>
            <Nav.Link><Link className={style.anchor} to='/profile'>Profile</Link></Nav.Link>
            <Button id={style.logout_btn}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

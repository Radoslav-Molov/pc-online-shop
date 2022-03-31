import React, { useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../Nav/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import LargeModal from "../LargeModal/LargeModal";

function Navigation() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="w-100"
    >
      <Container>
        <Navbar.Brand>
          <Link id={style.title} to="/">
            Compute Yourself
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className={style.anchor} to="/catalog">
                Catalog
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link className={style.anchor} to="/configurator">
                Configurator
              </Link>
            </Nav.Link>
          </Nav>
          <Button
            variant="link"
            onClick={() => {
              setModalShow(true);
            }}
          >
            <FontAwesomeIcon id={style.cart_icon} icon={faCartShopping} />
          </Button>
          <Button variant="link">
            <FontAwesomeIcon icon={faPlus} id={style.create_icon} />
            <Link to="/create"></Link>
          </Button>

          <LargeModal
            show={modalShow}
            onHide={() => {
              setModalShow(false);
            }}
            onInfoShow={() => {
              setModalShow(false);
            }}
          />
          <Nav>
            <Nav.Link className="display-11">
              <Link className={style.anchor} to="/login">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.anchor} to="/register">
                Register
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className={style.anchor} to="/profile">
                Profile
              </Link>
            </Nav.Link>

            <Button id={style.logout_btn}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

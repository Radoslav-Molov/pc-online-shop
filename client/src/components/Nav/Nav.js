import React, { useContext, useEffect, useState } from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../Nav/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import LargeModal from "../LargeModal/LargeModal";
import Create from "../CreateProducts/Create";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

function Navigation({}) {
  const [modalShow, setModalShow] = useState(false);
  const [modalCreateShow, setModalCreateShow] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogoutHandler = (e) => {
    localStorage.removeItem("token");
    setUser(undefined);
    setIsAdmin(false);
    navigate("/");
  };

  useEffect(() => {
    if (user !== undefined) {
      if (user.email === "admin@gmail.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    }
  }, [user]);

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
            {user ? (
              <Nav.Link>
                <Link className={style.anchor} to="/configurator">
                  Configurator
                </Link>
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
          {user ? (
            <Button
              variant="link"
              onClick={() => {
                setModalShow(true);
              }}
            >
              <FontAwesomeIcon id={style.cart_icon} icon={faCartShopping} />
            </Button>
          ) : (
            ""
          )}
          {isAdmin ? (
            <Button
              variant="link"
              onClick={() => {
                setModalCreateShow(true);
              }}
            >
              <FontAwesomeIcon icon={faPlus} id={style.create_icon} />
              <Link to="/create"></Link>
            </Button>
          ) : (
            ""
          )}

          <LargeModal
            user={user}
            show={modalShow}
            onHide={() => {
              setModalShow(false);
            }}
          />
          <Create
            show={modalCreateShow}
            onHide={() => {
              setModalCreateShow(false);
            }}
          />
          <Nav>
            {isAdmin ? (
              <Nav.Link className="display-11">
                <Link className={style.anchor} to="/admin">
                  Admin
                </Link>
              </Nav.Link>
            ) : (
              ""
            )}
            {user
              ? [
                  <Nav.Link>
                    <Link className={style.anchor} to="/profile">
                      Profile
                    </Link>
                  </Nav.Link>,

                  <Button id={style.logout_btn} onClick={onLogoutHandler}>
                    Logout
                  </Button>,
                ]
              : [
                  <Nav.Link className="display-11">
                    <Link className={style.anchor} to="/login">
                      Login
                    </Link>
                  </Nav.Link>,
                  <Nav.Link>
                    <Link className={style.anchor} to="/register">
                      Register
                    </Link>
                  </Nav.Link>,
                ]}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

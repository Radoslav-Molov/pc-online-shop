import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../Register/Register.module.css";

function Register() {
  return (
    <div className={style.register_container}>
      <h1>Register</h1>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group controlId="formSurname">
          <Form.Label>Surname:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="surname"
            placeholder="Enter your surname"
          />
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Label>City:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="city"
            placeholder="Enter your city"
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <p>
          Already have an account?{" "}
          <Link className={style.log_tag} to="/login">
            <strong>Login</strong>
          </Link>
        </p>

        <Button variant="secondary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;

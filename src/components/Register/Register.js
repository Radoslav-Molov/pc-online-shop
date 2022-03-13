import React from "react";
import { Form, Button } from "react-bootstrap";
import style from "../Register/Register.module.css";

function Register() {
  return (
    <div className={style.register_container}>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group controlId="formRepeatEmail">
          <Form.Label>Repeat email address:</Form.Label>
          <Form.Control
            id={style.formEmail}
            type="email"
            placeholder="Repeat your email"
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
          <a className={style.log_tag} href="/register">
            Login
          </a>
        </p>

        <Button variant="secondary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;

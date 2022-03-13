import React from "react";
import { Form, Button } from "react-bootstrap";
import style from "../Login/Login.module.css";

function Login() {
  return (
    <div className={style.login_container}>
      <Form>
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
          Don't have an account?{" "}
          <a className={style.reg_tag} href="/register">
            Register
          </a>
        </p>

        <Button variant="secondary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;

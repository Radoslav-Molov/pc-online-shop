import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../Login/Login.module.css";

function Login() {
  return (
    <div className={style.login_container}>
      <h1 id={style.login_title}> Login </h1>
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
          <Link className={style.reg_tag} to="/register">
            Register
          </Link>
        </p>

        <Button variant="secondary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;

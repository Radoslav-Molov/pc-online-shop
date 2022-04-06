import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../Login/Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onLoginHandler = (e) => {
    e.preventDefault();

    if (email && password) {
      axios
        .post("http://localhost:5000/api/auth", {
          email: email,
          password: password,
        })
        .then((res) => setUser(res.data));
    }
  };

  useEffect(() => {
    localStorage.setItem("token", user.token);
  }, [user]);

  return (
    <div className={style.login_container}>
      <h1 id={style.login_title}> Login </h1>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            className={style.formEmail}
            type="email"
            placeholder="Enter your email"
            onBlur={onEmailHandler}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            className={style.formEmail}
            type="password"
            placeholder="Enter your password"
            onBlur={onPasswordHandler}
          />
        </Form.Group>
        <p>
          Don't have an account?{" "}
          <Link className={style.reg_tag} to="/register">
            <strong>Register</strong>
          </Link>
        </p>

        <Button variant="secondary" type="submit" onClick={onLoginHandler}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;

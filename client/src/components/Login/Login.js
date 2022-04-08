import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
import style from "../Login/Login.module.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { loginSchema } from "../Validation";

function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(true);

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onLoginHandler = async (e) => {
    e.preventDefault();

    const isValid = await loginSchema.isValid({ email, password });
    setValidated(isValid);

    if (isValid) {
      axios
        .post("http://localhost:5000/api/auth", {
          email: email,
          password: password,
        })
        .then((res) => {
          setUser(res.data.user);
          localStorage.setItem("token", res.data.token);
          navigate("/");
          setShow(true);
        });
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [show]);

  return (
    <div>
      {show ? (
        <Alert
          className={style.notification}
          variant="danger"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Invalid credentials!</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
      <div className={style.login_container}>
        <h1 id={style.login_title}> Login </h1>
        <Form noValidate validated={validated}>
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
    </div>
  );
}

export default Login;

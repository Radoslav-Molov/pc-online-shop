import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../Register/Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../Validation";
import { baseURL } from "../../util/http-request-url";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(true);

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onSurnameHandler = (e) => {
    setSurname(e.target.value);
  };

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onRegisterHandler = async (e) => {
    e.preventDefault();

    const isValid = await registerSchema.isValid({
      name,
      surname,
      email,
      password,
    });
    setValidated(isValid);

    if (isValid) {
      axios
        .post(`${baseURL}/users`, {
          name: name,
          surname: surname,
          email: email,
          password: password,
        })
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
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
      <div className={style.register_container}>
        <h1>Register</h1>
        <Form noValidate validated={validated}>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              className={style.formEmail}
              type="name"
              placeholder="Enter your name"
              onBlur={onNameHandler}
            />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label>Surname:</Form.Label>
            <Form.Control
              className={style.formEmail}
              type="surname"
              placeholder="Enter your surname"
              onBlur={onSurnameHandler}
            />
          </Form.Group>
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
            Already have an account?{" "}
            <Link className={style.log_tag} to="/login">
              <strong>Login</strong>
            </Link>
          </p>

          <Button variant="secondary" type="submit" onClick={onRegisterHandler}>
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;

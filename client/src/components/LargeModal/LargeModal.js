import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Modal, Container, Button, Form, Alert } from "react-bootstrap";
import { UserContext } from "../../UserContext";
import style from "../LargeModal/LargeModal.module.css";
import { loginSchema } from "../Validation";
import EachProduct from "./EachProduct/EachProduct";

function LargeModal(props) {
  const [cartProducts, setCartProducts] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [changes, setChanges] = useState(0);
  let [total, setTotal] = useState(0);
  let [orderNumber, setOrderNumber] = useState(0);
  const { user, setUser } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(true);

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onSurnameHandler = (e) => {
    setSurname(e.target.value);
  };

  const onNumberHandler = (e) => {
    setNumber(e.target.value);
  };

  const onCityHandler = (e) => {
    setCity(e.target.value);
  };

  const onAddressHandler = (e) => {
    setAddress(e.target.value);
  };

  const onProductDelete = () => {
    setChanges(changes + 1);
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/api/cart", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setCartProducts(res.data);
      });
  }, [changes, props.show]);

  useEffect(() => {
    let price = 0;
    cartProducts.forEach((product) => {
      price += product.price;

      setTotal(price);
    });
  }, [cartProducts]);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [show]);

  const onOrderHandler = async (e) => {
    e.preventDefault();

    const isValid = await loginSchema.isValid({
      name,
      surname,
      number,
      city,
      address,
    });
    setValidated(isValid);

    if (isValid) {
      setOrderNumber(orderNumber++);

      axios
        .post("http://localhost:5000/api/orders", {
          uid: user.id,
          order: orderNumber,
          total: total,
          name: name,
          surname: surname,
          number: number,
          city: city,
          address: address,
        })
        .then((res) => {
          setShow(true);
          setCartProducts([]);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Modal size="lg" {...props} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <strong>Make an order</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {show ? (
          <Alert
            className={style.notification}
            variant="success"
            onClose={() => setShow(false)}
            dismissible
          >
            <Alert.Heading>Successful order</Alert.Heading>
          </Alert>
        ) : (
          ""
        )}
        <Container>
          {cartProducts.length === 0 ? (
            <h3 id={style.cart_heading}>No items in cart</h3>
          ) : (
            cartProducts.map((product) => (
              <EachProduct
                key={product._id}
                id={product._id}
                image={product.image}
                title={product.title}
                price={product.price}
                onDelete={onProductDelete}
              />
            ))
          )}
          <p id={style.total}>
            <strong>Total:</strong> {cartProducts.length === 0 ? 0 : total}$
          </p>
        </Container>
        <Container>
          <h4>
            <strong>Delivery information</strong>
          </h4>
          <Form noValidate validated={validated} id={style.order_form}>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onBlur={onNameHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter surname"
                onBlur={onSurnameHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                onBlur={onNumberHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                onBlur={onCityHandler}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                onBlur={onAddressHandler}
              />
            </Form.Group>
            <Button
              onClick={onOrderHandler}
              className="mt-2"
              variant="secondary"
              type="submit"
            >
              PLACE ORDER
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default LargeModal;

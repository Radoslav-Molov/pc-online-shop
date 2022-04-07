import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Container, Button, Form } from "react-bootstrap";
import style from "../LargeModal/LargeModal.module.css";
import EachProduct from "./EachProduct/EachProduct";

function LargeModal(props) {
  const [cartProducts, setCartProducts] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  let [total, setTotal] = useState(0);
  let [orderNumber, setOrderNumber] = useState(0);
  const [currUser, setCurrUser] = useState("");
  let filtered = [];

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

  useEffect(() => {
    if (props.user !== null && props.user !== undefined) {
      setCurrUser(props.user);
    }

    axios.get("http://localhost:5000/api/cart").then((res) => {
      filtered = res.data.filter((order) => order.uid === currUser._id);
      setCartProducts(filtered);
    });
  }, []);

  useEffect(() => {
    cartProducts.forEach((product) => {
      let price = 0;
      price += product.price;

      setTotal(price);
    });
  }, [cartProducts]);

  const onOrderHandler = (e) => {
    e.preventDefault();

    setOrderNumber(orderNumber++);

    axios
      .post("http://localhost:5000/api/orders", {
        uid: currUser._id,
        order: orderNumber,
        total: total,
        name: name,
        surname: surname,
        number: number,
        city: city,
        address: address,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Modal size="lg" {...props} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <strong>Make an order</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <Form id={style.order_form}>
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

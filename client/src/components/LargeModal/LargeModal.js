import React from "react";
import { Modal, Container, Button, Row, Col, Form } from "react-bootstrap";
import style from "../LargeModal/LargeModal.module.css";

function LargeModal(props) {
  return (
    <Modal size="lg" {...props} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <strong>Make an order</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className={style.cart_item}>
            <Col xs={6} md={4}>
              <img
                className={style.modal_img}
                src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
                alt="itemImg"
              ></img>
              {/* .col-xs-6 .col-md-4 */}
            </Col>
            <Col className={style.cart_item_text} xs={6} md={5}>
              Some computer name
              {/* .col-xs-6 .col-md-4 */}
            </Col>
            <Col className={style.cart_item_text} xs={5} md={2}>
              Price
            </Col>
            <Col className={style.cart_item_text} xs={3} md={1}>
              <button className={style.item_remove}>X</button>
            </Col>
          </Row>
          <Row className={style.cart_item}>
            <Col xs={6} md={4}>
              <img
                className={style.modal_img}
                src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
                alt="itemImg"
              ></img>
              {/* .col-xs-6 .col-md-4 */}
            </Col>
            <Col className={style.cart_item_text} xs={6} md={5}>
              Some computer name
              {/* .col-xs-6 .col-md-4 */}
            </Col>
            <Col className={style.cart_item_text} xs={5} md={2}>
              Price
            </Col>
            <Col className={style.cart_item_text} xs={3} md={1}>
              <button className={style.item_remove}>X</button>
            </Col>
          </Row>
        </Container>
        <Container>
          <h4>
            <strong>Delivery information</strong>
          </h4>
          <Form id={style.order_form}>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Enter surname" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>
            <Button className="mt-2" variant="secondary" type="submit">
              PLACE ORDER
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default LargeModal;

import React, { useContext, useEffect, useState } from "react";
import style from "../Details/Details.module.css";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import { UserContext } from "../../UserContext";
import { baseURL } from "../../util/http-request-url";

function Details() {
  const [productId] = useState(window.location.pathname.split("/")[2]);
  const [productInfo, setProductInfo] = useState("");
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/products/${productId}`)
      .then((res) => setProductInfo(res.data))
      .catch((err) => console.log(err));
  }, [productId]);

  const onOrderHandler = () => {
    axios
      .post(`${baseURL}/cart`, {
        uid: user.id,
        image: productInfo.image,
        title: productInfo.title,
        price: productInfo.price,
      })
      .then((res) => setShow(true))
      .catch((err) => console.log(err));
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
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Item added to cart!</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}

      <div className={style.details_wrapper}>
        <div className={style.item_card}>
          {/* <h3>Details:</h3> */}
          <Card id={style.details_card}>
            <Row id={style.content}>
              <Col id={style.img_wrapper}>
                <Card.Img
                  className={style.img}
                  variant="top"
                  src={productInfo.image}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>{productInfo.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <strong>Case: {productInfo.case}</strong>
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Motherboard: {productInfo.motherboard}</strong>
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>CPU: {productInfo.cpu}</strong>
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>RAM: {productInfo.ram}</strong>
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>Storage: {productInfo.storage}</strong>
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>GPU: {productInfo.gpu}</strong>
                  </ListGroupItem>
                  <ListGroupItem>
                    <strong>PSU: {productInfo.psu}</strong>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <ListGroupItem id={style.price}>
                    <strong>Price:</strong> {productInfo.price} $
                  </ListGroupItem>
                  {user ? (
                    <Button
                      onClick={onOrderHandler}
                      className={style.cart_btn}
                      variant="secondary"
                    >
                      Add to cart
                    </Button>
                  ) : (
                    <h5>Cannot order if not logged in</h5>
                  )}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
        <div className={style.yt_review}>
          <h3>
            <strong>Product Review</strong>
          </h3>
          <iframe
            title="review-video"
            className={style.video}
            src={productInfo.reviewLink}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Details;

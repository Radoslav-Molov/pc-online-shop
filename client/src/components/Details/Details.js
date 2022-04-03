import React, { useEffect, useState } from "react";
import style from "../Details/Details.module.css";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Details() {
  const [productId, setProductId] = useState(
    window.location.pathname.split("/")[2]
  );
  const [productInfo, setProductInfo] = useState("");

  useEffect(() => {
    // setProductId(window.location.pathname.split("/")[2]);

    axios
      .get(`http://localhost:5000/api/products/${productId}`)
      .then((res) => setProductInfo(res.data));
  }, []);

  const onOrderHandler = () => {
    console.log("ue");
    axios
      .post("http://localhost:5000/api/cart", {
        image: productInfo.image,
        title: productInfo.title,
        price: productInfo.price,
      })
      .then((res) => console.log(res));
  };

  return (
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
                <Button
                  onClick={onOrderHandler}
                  className={style.cart_btn}
                  variant="secondary"
                >
                  <Link className={style.anchor} to="/profile">
                    Add to cart
                  </Link>
                </Button>
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
  );
}

export default Details;

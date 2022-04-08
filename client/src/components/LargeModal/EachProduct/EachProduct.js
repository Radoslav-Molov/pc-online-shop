import axios from "axios";
import React from "react";
import { Row, Col } from "react-bootstrap";
import style from "../EachProduct/LargeModal.module.css";

function EachProduct(props) {
  const onProductRemoveHandler = () => {
    axios
      .delete(`http://localhost:5000/api/cart/${props.id}`)
      .then((res) => {
        console.log(res);
        props.onDelete();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Row className={style.cart_item}>
      <Col xs={6} md={3}>
        <img className={style.modal_img} src={props.image} alt="itemImg"></img>
        {/* .col-xs-6 .col-md-4 */}
      </Col>
      <Col className={style.cart_item_text} xs={6} md={5}>
        {props.title}
        {/* .col-xs-6 .col-md-4 */}
      </Col>
      <Col className={style.cart_item_text} xs={5} md={3}>
        Price: {props.price}$
      </Col>
      <Col className={style.cart_item_text} xs={3} md={1}>
        <button className={style.item_remove} onClick={onProductRemoveHandler}>
          X
        </button>
      </Col>
    </Row>
  );
}

export default EachProduct;

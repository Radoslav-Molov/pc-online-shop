import React from "react";
import style from "../EachOrder/EachOrder.module.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function EachOrder(props) {
  return (
    <div className={style.cart_item}>
      <div className={style.cart_item_info}>
        <Card.Text>
          <strong>Order #:</strong> {props.number}
        </Card.Text>
        <Card.Text>
          <strong>Date:</strong> {props.date}
        </Card.Text>
        <Card.Text>
          <strong>Total:</strong> {props.total}
        </Card.Text>
      </div>
      <Button variant="secondary">
        <Link className={style.link} to={`/invoice/${props.id}`}>
          Details
        </Link>
      </Button>
    </div>
  );
}

export default EachOrder;

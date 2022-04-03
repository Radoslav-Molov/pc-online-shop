import React, { useEffect, useState } from "react";
import style from "../Profile/Profile.module.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import EachOrder from "./EachOrder/EachOrder";
function Profile() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data));
  }, []);

  console.log(orders);
  return (
    <div className={style.profile_container}>
      <div className={style.user_info}>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          />
          <Card.Body>
            <Card.Title>Radoslav</Card.Title>
            <Card.Title>Molov</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>City:</strong> Smolyan
            </ListGroupItem>
          </ListGroup>
          <Card.Body></Card.Body>
        </Card>
      </div>
      <div className={style.cart}>
        <Card className={style.cart_container}>
          <Card.Header as="h5">Orders</Card.Header>
          <Card.Body>
            {orders.map((order) => (
              <EachOrder
                key={order._id}
                id={order._id}
                number={order.number}
                date={order.date.split("T")[0]}
                total={order.total}
              />
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Profile;

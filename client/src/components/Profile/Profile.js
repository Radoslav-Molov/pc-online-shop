import React, { useEffect, useState } from "react";
import style from "../Profile/Profile.module.css";
import { Card } from "react-bootstrap";
import axios from "axios";
import EachOrder from "./EachOrder/EachOrder";

function Profile({ user }) {
  const [orders, setOrders] = useState([]);
  const [currUser, setCurrUser] = useState("");

  useEffect(() => {
    if (user !== null && user !== undefined) {
      setCurrUser(user);
    }

    let filtered = [];

    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => {
        setOrders(res.data);
        filtered = res.data.filter((order) => order.uid === currUser.id);
        setOrders(filtered);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(currUser._id);

  return (
    <div className={style.profile_container}>
      <div className={style.user_info}>
        <Card>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/vectors/user-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM="
          />
          <Card.Body>
            <Card.Title>{currUser.name}</Card.Title>
            <Card.Title>{currUser.surname}</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className={style.cart}>
        <Card className={style.cart_container}>
          <Card.Header as="h5">Orders</Card.Header>
          <Card.Body>
            {orders.length > 0 ? (
              orders.map((order) => (
                <EachOrder
                  key={order._id}
                  id={order._id}
                  number={order.number}
                  date={order.date.split("T")[0]}
                  total={order.total}
                />
              ))
            ) : (
              <h3>No order history</h3>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Profile;

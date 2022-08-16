import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import style from "../Admin/Admin.module.css";
import Feedbacks from "./Feedbacks/Feedback";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";
import Users from "./Users/Users";
import { baseURL } from "../../util/http-request-url";

function Admin() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [products, setProducts] = useState([]);
  const [bread, setBread] = useState("products");

  useEffect(() => {
    axios.get(`${baseURL}/products`).then((res) => setProducts(res.data));

    axios.get(`${baseURL}/users`).then((res) => setUsers(res.data));

    axios.get(`${baseURL}/orders/admin`).then((res) => setOrders(res.data));

    axios.get(`${baseURL}/feedbacks`).then((res) => setFeedbacks(res.data));
  }, []);

  const onProductsHandler = () => {
    setBread("products");
  };

  const onUsersHandler = () => {
    setBread("users");
  };

  const onFeedbacksHandler = () => {
    setBread("feedbacks");
  };

  return (
    <div id={style.admin_panel}>
      <Breadcrumb id={style.breadcrumb}>
        <Breadcrumb.Item className={style.link} onClick={onProductsHandler}>
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item className={style.link} onClick={onUsersHandler}>
          Users
        </Breadcrumb.Item>
        <Breadcrumb.Item className={style.link} onClick={onFeedbacksHandler}>
          Feedbacks
        </Breadcrumb.Item>
      </Breadcrumb>
      {bread === "products" ? (
        <div id={style.products_wrapper}>
          <h4>Products</h4>
          {products.map((product) => (
            <Products
              key={product._id}
              id={product._id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      {bread === "users" ? (
        <div id={style.users_wrapper}>
          <div id={style.orders_container}>
            <h4>Orders</h4>
            {orders.map((order) => (
              <Orders
                key={order._id}
                id={order._id}
                orderNumber={order.order}
                date={order.date}
                total={order.total}
              />
            ))}
          </div>
          ,
          <div id={style.users_container}>
            <h4>Users</h4>
            {users.map((user) => (
              <Users
                key={user._id}
                id={user._id}
                name={user.name}
                surname={user.surname}
                email={user.email}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {bread === "feedbacks" ? (
        <div id={style.feedbacks_container}>
          <h4>Feedbacks</h4>
          {feedbacks.map((feedback) => (
            <Feedbacks
              key={feedback._id}
              id={feedback._id}
              email={feedback.email}
              content={feedback.content}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Admin;

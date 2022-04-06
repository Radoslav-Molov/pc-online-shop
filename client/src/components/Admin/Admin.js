import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../Admin/Admin.module.css";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";
import Users from "./Users/Users";

function Admin() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data));

    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data));

    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => setOrders(res.data));
  }, []);

  return (
    <div id={style.admin_panel}>
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
        <div id={style.users_container}>
          <h4>Users</h4>
          {users.map((user) => (
            <Users
              key={user._id}
              name={user.name}
              surname={user.surname}
              email={user.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;

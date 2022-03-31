import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import style from "../Catalog/Catalog.module.css";

function Catalog() {
  useEffect(() => {
    fetch("http://localhost:5000/api/products", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => JSON.stringify(res))
      .then((res) => console.log(res));
  });

  return (
    <div>
      <Breadcrumb className={style.crumb}>
        <Breadcrumb.Item href="#">Gaming</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          Business
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Catalog;

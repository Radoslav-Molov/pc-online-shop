import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import style from "../Products/Products.module.css";

function Products(props) {
  const onDeleteHandler = () => {
    axios
      .delete(`http://localhost:5000/api/products/${props.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div id={style.product_list}>
      <img className={style.list_image} src={props.image} alt="productImg" />
      <div className={style.info_wrapper}>
        <span className={style.info}>{props.title}</span>
      </div>
      <div className={style.info_wrapper}>
        <span className={style.info}>Price: {props.price}$</span>
      </div>
      <div className={style.button_wrapper}>
        <Button className={style.action_btn} variant="secondary">
          {" "}
          Edit
        </Button>
        <Button
          className={style.action_btn}
          variant="secondary"
          onClick={onDeleteHandler}
        >
          {" "}
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Products;

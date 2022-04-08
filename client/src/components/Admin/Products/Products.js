import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Create from "../../CreateProducts/Create";
import style from "../Products/Products.module.css";

function Products(props) {
  const [modalCreateShow, setModalCreateShow] = useState(false);
  const [onEdit, setOnEdit] = useState("false");

  const onDeleteHandler = () => {
    axios
      .delete(`http://localhost:5000/api/products/${props.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onEditHandler = (e) => {
    // console.log(e.target);
    setModalCreateShow(true);
    setOnEdit("true");
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
        <Button
          className={style.action_btn}
          onClick={onEditHandler}
          variant="secondary"
        >
          {" "}
          Edit
        </Button>
        <Create
          edit={onEdit}
          id={props.id}
          show={modalCreateShow}
          onHide={() => {
            setModalCreateShow(false);
          }}
        />
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

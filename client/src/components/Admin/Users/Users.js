import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import style from "../Users/Users.module.css";
import { baseURL } from "../../../util/http-request-url";

function Users(props) {
  const onRemoveHandler = () => {
    axios
      .delete(`${baseURL}/users/${props.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.user_list}>
      <span>
        <strong>
          {props.name} {props.surname}
        </strong>{" "}
        - <strong>{props.email}</strong>
      </span>
      <Button
        variant="secondary"
        className={style.user_btn}
        onClick={onRemoveHandler}
      >
        Remove account
      </Button>
    </div>
  );
}

export default Users;

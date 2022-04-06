import React from "react";
import { Button } from "react-bootstrap";
import style from "../Users/Users.module.css";

function Users(props) {
  return (
    <div className={style.user_list}>
      <span>
        <strong>
          {props.name} {props.surname}
        </strong>{" "}
        - <strong>{props.email}</strong>
      </span>
      <Button variant="secondary" className={style.user_btn}>
        Remove account
      </Button>
    </div>
  );
}

export default Users;

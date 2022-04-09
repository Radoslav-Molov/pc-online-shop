import React from "react";
import style from "../Feedbacks/Feedbacks.module.css";

function Feedbacks(props) {
  return (
    <div className={style.user_list}>
      <span>
        <strong>{props.email}</strong> said:
      </span>
      <p>
        <strong>{props.content}</strong>
      </p>
    </div>
  );
}

export default Feedbacks;

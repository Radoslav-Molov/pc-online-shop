import React from "react";
import style from "../Feedbacks/Feedbacks.module.css";

function Feedbacks(props) {
  return (
    <div className={style.user_list}>
      <span>
        <strong>{props.email}</strong> said: <strong>{props.content}</strong>
      </span>
    </div>
  );
}

export default Feedbacks;

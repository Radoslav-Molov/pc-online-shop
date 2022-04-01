import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Footer/Footer.module.css";
// import { ListGroup, Row, Col } from "react-bootstrap";

function Footer() {
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const emailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const contentHandler = (e) => {
    setContent(e.currentTarget.value);
  };

  const onFeedbackSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/feedbacks", {
        email: email,
        content: content,
      })
      .then((res) => console.log(res));
  };

  return (
    <div className={style.wrapper}>
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase">Content</h5>
              <p className={style.text}>
                Here you can browse through a variety of pc builds.
              </p>
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-0"/> */}

            <div className="col-md-4 mr-3">
              <h5 className="text-uppercase">QUICK LINKS</h5>
              <ul className="list-unstyled mt-3">
                <li>
                  <Link className={style.links} to="/catalog">
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link className={style.links} to="/configurator">
                    Configurator
                  </Link>
                </li>
                <li>
                  <Link className={style.links} to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className={style.links} to="/about">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-2">
              <h5 className="text-uppercase">Leave feedback:</h5>

              <form id={style.form}>
                <fieldset className="form-group">
                  <input
                    id={style.mail}
                    onBlur={emailHandler}
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </fieldset>
                <fieldset className="form-group mt-1">
                  <textarea
                    id={style.area}
                    onBlur={contentHandler}
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </fieldset>
                <fieldset className="form-group text-xs-right">
                  <button
                    type="button"
                    id={style.btn}
                    onClick={onFeedbackSubmit}
                  >
                    Send
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3" id={style.bottom}>
          © 2022 ComputeYourself
        </div>
      </footer>
    </div>
  );
}

export default Footer;

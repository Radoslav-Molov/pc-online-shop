import React from "react";
import style from "../Footer/Footer.module.css";
import { ListGroup, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className={style.container}>
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item className={style.title}>Menu:</ListGroup.Item>
            <ListGroup.Item className={style.item}>Catalog</ListGroup.Item>
            <ListGroup.Item className={style.item}>
              Build your PC
            </ListGroup.Item>
            <ListGroup.Item className={style.item}>Profile</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col>
          <ListGroup className={style.list} variant="flush">
            <ListGroup.Item className={style.title}>More:</ListGroup.Item>
            <ListGroup.Item className={style.day}>
              Contacts:
              <p>+359876162930</p>
            </ListGroup.Item>
            <ListGroup.Item className={style.day}>
              <a className={style.about} href="/about">
                About us
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item className={style.title}>Work time:</ListGroup.Item>
            <ListGroup.Item className={style.day}>
              Monday-Fiday
              <p>08:00 - 20:00</p>
            </ListGroup.Item>
            <ListGroup.Item className={style.day}>
              Saturday and Sunday
              <p>10:00 - 18:00</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;

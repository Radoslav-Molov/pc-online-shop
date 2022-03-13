import React from "react";
import style from "../Details/Details.module.css";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Table,
} from "react-bootstrap";

function Details() {
  return (
    <div className={style.details_wrapper}>
      <div className={style.item_card}>
        <Card>
          <Row>
            <Col>
              <Card.Img
                className={style.img}
                variant="top"
                src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>PC Name</Card.Title>
                <Card.Text>
                  <strong>Description:</strong>
                  <p>The best budget PC you can run everything on</p>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <strong>CPU:</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>RAM:</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Storage:</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>GPU:</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Motherboard</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>PSU:</strong>
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <ListGroupItem className={style.price}>
                  <strong>Price:</strong> 2000$
                </ListGroupItem>
                <Button variant="secondary">Add to cart</Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
      <div className={style.add_component}>
        <Table className={style.options_table} bordered>
          <thead>
            <tr className={style.table_title}>Upgrade options:</tr>
          </thead>
          <tbody>
            <tr>
              <th>RAM</th>
              <td>
                <div className={style.option}>+4GB (50$)</div>
                <div className={style.option}>+8GB (100$)</div>
                <div className={style.option}>+12GB (150$)</div>
              </td>
            </tr>
            <tr>
              <th>Storage:</th>
              <td>
                <div className={style.option}>+256GB SSD (100$)</div>
                <div className={style.option}>+512GB SSD (200$)</div>
                <div className={style.option}>+1TB SSD (300$)</div>
              </td>
            </tr>
            <tr>
              <th>Operation system:</th>
              <td>
                <div className={style.option}>Windows 10 (40$)</div>
                <div className={style.option}>Windows 11 (70$)</div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className={style.yt_review}>
        <h3>Review:</h3>
        <iframe
          className={style.video}
          src="https://www.youtube.com/embed/g0drhJlZGCk"
        ></iframe>
      </div>
    </div>
  );
}

export default Details;

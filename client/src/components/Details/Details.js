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
        {/* <h3>Details:</h3> */}
        <Card id={style.details_card}>
          <Row>
            <Col id={style.img_wrapper}>
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
                  <strong>Case: Some data</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Motherboard: Some data</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>CPU: Some data</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>RAM: Some data</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>Storage: Some data</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>GPU: Some data</strong>
                </ListGroupItem>
                <ListGroupItem>
                  <strong>PSU: Some data</strong>
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <ListGroupItem id={style.price}>
                  <strong>Price:</strong> 2000$
                </ListGroupItem>
                <Button className={style.cart_btn} variant="secondary">
                  Add to cart
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
      <div className={style.yt_review}>
        <h3>Review:</h3>
        <iframe
          title="review-video"
          className={style.video}
          src="https://www.youtube.com/embed/-dLoif6vazI"
        ></iframe>
      </div>
      {/* <div className={style.add_component}>
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
      </div> */}
    </div>
  );
}

export default Details;
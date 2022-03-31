import React from "react";
import style from "../Profile/Profile.module.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className={style.profile_container}>
      <div className={style.user_info}>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
          />
          <Card.Body>
            <Card.Title>Radoslav</Card.Title>
            <Card.Title>Molov</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <strong>City:</strong> Smolyan
            </ListGroupItem>
          </ListGroup>
          <Card.Body></Card.Body>
        </Card>
      </div>
      <div className={style.cart}>
        <Card className={style.cart_container}>
          <Card.Header as="h5">Orders</Card.Header>
          <Card.Body>
            <div className={style.cart_item}>
              <div className={style.cart_item_info}>
                <Card.Text>
                  <strong>Order #:</strong>
                </Card.Text>
                <Card.Text>
                  <strong>Date:</strong>{" "}
                </Card.Text>
                <Card.Text>
                  <strong>Total:</strong> 2000$
                </Card.Text>
              </div>
              <Button variant="secondary">
                <Link className={style.link} to="/invoice/1">
                  Details
                </Link>
              </Button>
            </div>
            <div className={style.cart_item}>
              <div className={style.cart_item_info}>
                <Card.Text>
                  <strong>Order #:</strong>
                </Card.Text>
                <Card.Text>
                  <strong>Date:</strong>{" "}
                </Card.Text>
                <Card.Text>
                  <strong>Total:</strong> 2000$
                </Card.Text>
              </div>
              <Button variant="secondary">
                <Link className={style.link} to="/invoice/1">
                  Details
                </Link>
              </Button>
            </div>
            <div className={style.cart_item}>
              <div className={style.cart_item_info}>
                <Card.Text>
                  <strong>Order #:</strong> 315
                </Card.Text>
                <Card.Text>
                  <strong>Date:</strong> 20.20.2022g
                </Card.Text>
                <Card.Text>
                  <strong>Total:</strong> 2000$
                </Card.Text>
              </div>
              <Button variant="secondary">
                <Link className={style.link} to="/invoice/1">
                  Details
                </Link>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Profile;

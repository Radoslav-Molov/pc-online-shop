import React from "react";
import style from "../Profile/Profile.module.css";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
  Table,
} from "react-bootstrap";
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
          <Card.Header as="h5">Cart</Card.Header>
          <Card.Body>
            {/* <div className={style.cart_item}>
              <Card.Title>Gaming PC</Card.Title>
              <Card.Text>
                <strong>Price:</strong> 2000$
              </Card.Text>
              <Button variant="secondary">Remove</Button>
            </div> */}
            <div className={style.cart_item}>
              <Card.Title>Gaming PC</Card.Title>
              <Card.Text>
                <strong>Price:</strong> 2000$
              </Card.Text>
              <Button variant="secondary">Remove</Button>
            </div>
            <div className={style.cart_item}>
              <Card.Title>Gaming PC</Card.Title>
              <Card.Text>
                <strong>Price:</strong> 2000$
              </Card.Text>
              <Button variant="secondary">Remove</Button>
            </div>
            <Button className={style.checkout_btn} variant="secondary">
              Go to checkout
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Profile;

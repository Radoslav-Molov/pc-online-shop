import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../CatalogCard/CatalogCard.module.css";

function CatalogCard(props) {
  return (
    <Card className={style.each_card} style={{ width: "18rem" }}>
      <Card.Img className={style.image} variant="top" src={props.image} />
      <Card.Body>
        <Container className={style.info_container}>
          <Card.Title>
            <strong>{props.title}</strong>
          </Card.Title>
          <Card.Text>
            <strong>CPU</strong>: {props.cpu}
          </Card.Text>
          <Card.Text>
            <strong>RAM</strong>: {props.ram}
          </Card.Text>
          <Card.Text>
            <strong>GPU</strong>: {props.gpu}
          </Card.Text>
          <Card.Text>
            <strong>Price</strong>: {props.price} $
          </Card.Text>
        </Container>

        <Button className={style.button} variant="secondary">
          <Link className={style.anchor} to={`/details/${props.id}`}>
            Details
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CatalogCard;

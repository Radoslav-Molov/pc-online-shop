import React from "react";
import { Breadcrumb, Card, Button } from "react-bootstrap";
import style from "../Catalog/Catalog.module.css";

function Catalog() {
  return (
    <div>
      <Breadcrumb className={style.crumb}>
        <Breadcrumb.Item href="#">Gaming</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          Business
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className={style.cards_container}>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card className={style.each_card} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.digitalstorm.com/img/products/lynx/2021-hero-mobile-2.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Catalog;

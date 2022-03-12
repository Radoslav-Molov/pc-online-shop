import React from "react";
import Carousel from "react-bootstrap/Carousel";
import flagStyle from "../Home/Carousel.module.css";

function Flag() {
  return (
    <Carousel className={flagStyle.flag} overflow-hidden>
      <Carousel.Item className={flagStyle.caption}>
        <img
          className="d-block w-100 h-100 "
          src="https://img.freepik.com/free-vector/black-carbon-fiber-texture-pattern-background_1017-33436.jpg?size=626&ext=jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Your PC supplier</h3>
          <p>
            Browse through our selection of ready to use PC builds in our
            Catalog.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={flagStyle.caption}>
        <img
          className="d-block w-100 h-10"
          src="https://img.freepik.com/free-vector/black-carbon-fiber-texture-pattern-background_1017-33436.jpg?size=626&ext=jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Build your dream PC</h3>
          <p>
            Build your PC - choose between the OG and the latest components on
            the best prices.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Flag;

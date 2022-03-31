import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import homeStyle from "../Home/Home.module.css";

function Home() {
  return (
    <div>
      <Carousel className={homeStyle.flag} overflow-hidden>
        <Carousel.Item className={homeStyle.caption}>
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
        <Carousel.Item className={homeStyle.caption}>
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
      <div className={homeStyle.posts_wrapper}>
        <CardGroup className={homeStyle.cards_wrapper}>
          <Card body className={homeStyle.add}>
            <img
              className={homeStyle.svg}
              src="https://www.pinclipart.com/picdir/middle/71-710741_list-analyze-todo-svg-icon-clipart.png"
              alt="order"
            ></img>
            <p>Easy to order</p>
          </Card>
          <Card body className={homeStyle.add}>
            <img
              className={homeStyle.svg}
              src="https://www.pinclipart.com/picdir/middle/79-797570_warehouse-clipart-black-and-white-warehouse-png-black.png"
              alt="warehouse"
            ></img>
            <p>Everything in stock</p>
          </Card>
          <Card body className={homeStyle.add}>
            <img
              className={homeStyle.svg}
              src="https://www.pngfind.com/pngs/m/612-6123041_express-delivery-free-icon-express-delivery-svg-hd.png"
              alt="delivery"
            ></img>
            <p>Free delivery</p>
          </Card>
        </CardGroup>
        <h2>Blog:</h2>

        <CardGroup>
          <Card className={homeStyle.cards}>
            <Card.Img
              className={homeStyle.img}
              variant="top"
              src="https://icdn.digitaltrends.com/image/digitaltrends/pcbuiltkid01-720x720.jpg"
              alt="How to build a PC"
            />
            <Card.Body>
              <Card.Title>How to build a PC </Card.Title>
              <Card.Text>
                Learning how to build a PC is easier than you might think. The
                process mostly involves screwing in the right screws and
                connecting the right cables, so as long as you're careful with
                your components and take the proper safety precautions, you can
                build your own PC. We've broken down the process into a series of easy-to-follow steps. 
                From gathering your components to putting on the finishing touches, 
                our guide will walk you through how to easily build a PC.
              </Card.Text>
              <Card.Link href="https://www.digitaltrends.com/computing/how-to-build-a-pc/">
                Read more..
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className={homeStyle.cards}>
            <Card.Img
              className={homeStyle.img}
              variant="top"
              src="https://i.ebayimg.com/00/s/MTM1MFgxMDgw/z/NSkAAOSwgiJiFrPg/$_59.JPG"
              alt="MSI graphic cards"
            />
            <Card.Body>
              <Card.Title>MSI RTX 30 series GPU's</Card.Title>
              <Card.Text>
                MSI GeForce RTX 30 Series graphics cards are well-reputed
                internationally and got over 300 awards by worldwide
                authoritative media since launch. Built with the MSI essentials,
                MSI GeForce RTX 30 Series graphics card products have excellent
                cooling, optimized circuit board designs, and the latest in
                graphics card componentry. No matter what your needs might be,
                MSI graphics cards offer outstanding performance for both
                extreme gaming and demanding creator applications.
              </Card.Text>
              <Card.Link href="https://my.msi.com/Landing/GeForce-RTX-30-Series/graphics-cards">
                Read more..
              </Card.Link>
            </Card.Body>
          </Card>
          <Card className={homeStyle.cards}>
            <Card.Img
              className={homeStyle.img}
              variant="top"
              src="https://www.cgdirector.com/wp-content/uploads/media/2021/08/Gaming-Desktop-vs-Workstation-PCs-An-Overview.jpg"
              alt="choose a type"
            />
            <Card.Body>
              <Card.Title>
                Workstation vs Gaming PC – What’s the Difference
              </Card.Title>
              <Card.Text>
                Have you ever wondered what makes one computer a ‘Workstation’
                and another, a ‘Gaming’ PC? Surely, it can’t just be the RGB (or
                lack thereof). You often hear manufacturers promote their latest
                product as ‘the best in the gaming market,’ but then you see
                them listed in professional setups. What’s that about? The world of PC 
                hardware includes a vast array of terminology. Hence, finding minor 
                differences between various types of hardware, like those used in 
                workstations and/or gaming PCs, can get really confusing at times.
              </Card.Text>
              <Card.Link href="https://www.cgdirector.com/workstation-vs-gaming-pc/">
                Read more..
              </Card.Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Home;

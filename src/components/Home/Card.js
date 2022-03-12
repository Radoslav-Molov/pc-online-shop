import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import cardStyle from "../Home/Card.module.css";

function Cards() {
  return (
    <div className={cardStyle.posts_wrapper}>
      <CardGroup className={cardStyle.cards_wrapper}>
        <Card body className={cardStyle.add}>
          <img
            className={cardStyle.svg}
            src="https://www.pinclipart.com/picdir/middle/71-710741_list-analyze-todo-svg-icon-clipart.png"
          ></img>
          <p>Easy to order</p>
        </Card>
        <Card body className={cardStyle.add}>
          <img
            className={cardStyle.svg}
            src="https://www.pinclipart.com/picdir/middle/79-797570_warehouse-clipart-black-and-white-warehouse-png-black.png"
          ></img>
          <p>Everything in stock</p>
        </Card>
        <Card body className={cardStyle.add}>
          <img
            className={cardStyle.svg}
            src="https://www.pngfind.com/pngs/m/612-6123041_express-delivery-free-icon-express-delivery-svg-hd.png"
          ></img>
          <p>Free delivery</p>
        </Card>
      </CardGroup>
      <h2>Blog:</h2>

      <CardGroup>
        <Card className={cardStyle.cards}>
          <Card.Img
            className={cardStyle.img}
            variant="top"
            src="https://icdn.digitaltrends.com/image/digitaltrends/pcbuiltkid01-720x720.jpg"
          />
          <Card.Body>
            <Card.Title>How to build a PC </Card.Title>
            <Card.Text>
              Learning how to build a PC is easier than you might think. The
              process mostly involves screwing in the right screws and
              connecting the right cables, so as long as you're careful with
              your components and take the proper safety precautions, you can
              build your own PC.
            </Card.Text>
            <Card.Link href="https://www.digitaltrends.com/computing/how-to-build-a-pc/">
              Read more..
            </Card.Link>
          </Card.Body>
        </Card>
        <Card className={cardStyle.cards}>
          <Card.Img
            className={cardStyle.img}
            variant="top"
            src="https://i.ebayimg.com/00/s/MTM1MFgxMDgw/z/NSkAAOSwgiJiFrPg/$_59.JPG"
          />
          <Card.Body>
            <Card.Title>MSI RTX 30 series GPU's</Card.Title>
            <Card.Text>
              MSI GeForce RTX 30 Series graphics cards are well-reputed
              internationally and got over 300 awards by worldwide authoritative
              media since launch. Built with the MSI essentials, MSI GeForce RTX
              30 Series graphics card products have excellent cooling, optimized
              circuit board designs, and the latest in graphics card
              componentry. No matter what your needs might be, MSI graphics
              cards offer outstanding performance for both extreme gaming and
              demanding creator applications.
            </Card.Text>
            <Card.Link href="https://my.msi.com/Landing/GeForce-RTX-30-Series/graphics-cards">
              Read more..
            </Card.Link>
          </Card.Body>
        </Card>
        <Card className={cardStyle.cards}>
          <Card.Img
            className={cardStyle.img}
            variant="top"
            src="https://www.cgdirector.com/wp-content/uploads/media/2021/08/Gaming-Desktop-vs-Workstation-PCs-An-Overview.jpg"
          />
          <Card.Body>
            <Card.Title>
              Workstation vs Gaming PC – What’s the Difference
            </Card.Title>
            <Card.Text>
              Have you ever wondered what makes one computer a ‘Workstation’ and
              another, a ‘Gaming’ PC? Surely, it can’t just be the RGB (or lack
              thereof). You often hear manufacturers promote their latest
              product as ‘the best in the gaming market,’ but then you see them
              listed in professional setups. What’s that about?
            </Card.Text>
            <Card.Link href="https://www.cgdirector.com/workstation-vs-gaming-pc/">
              Read more..
            </Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Cards;

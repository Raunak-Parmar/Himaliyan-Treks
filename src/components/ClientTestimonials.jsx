import React from "react";
import { Card, Carousel, CarouselItem } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/test.css";

function ClientTestimonials() {
  return (
    <>
      <div className="TestimonialSection desktop">
        <Card className="TestCardComponent">
          <Card.Img
            className="CardImages"
            variant="top"
            src="https://images.thequint.com/thequint%2F2022-06%2F81c04f6e-bc6f-4c11-96c1-168153c1d157%2FSurajPatel2022.jpeg?auto=format%2Ccompress&fmt=webp&width=120&w=1200"
          />
          <Card.Body>
            <Card.Title className="title">Anurag Sharma</Card.Title>
            <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
            <span>
              I have enjoyed this journey a lot. Himalayan Explorations have
              best staff work, excellent food facility. Home stay was amazing
              too.
            </span>
          </Card.Body>
        </Card>
        <Card className="TestCardComponent">
          <Card.Img
            className="CardImages"
            variant="top"
            src="https://images.theconversation.com/files/420831/original/file-20210913-17-1yymqmm.jpg?ixlib=rb-1.1.0&rect=16%2C0%2C2779%2C1865&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
          />
          <Card.Body>
            <Card.Title className="title">Sharmila Thakur</Card.Title>
            <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
            <span>
              Himalayan Explorations have the best staff and expert trek
              guides.Really love their hospitality and stay!! Must recommend for
              Bali Trek.
            </span>
          </Card.Body>
        </Card>
        <Card className="TestCardComponent">
          <Card.Img
            className="CardImages"
            variant="top"
            src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg"
          />
          <Card.Body>
            <Card.Title className="title">Manish Chaubey</Card.Title>
            <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
            <span>
              One of the best experience by joining their team for the trek and
              Activities. I recommend for the others as well for best
              experience.
            </span>
          </Card.Body>
        </Card>
        <Card className="TestCardComponent">
          <Card.Img
            className="CardImages"
            variant="top"
            src="https://img.etimg.com/thumb/msid-88760386,width-300,imgsize-30906,,resizemode-4,quality-100/kovid-kapoor-twitter.jpg"
          />
          <Card.Body>
            <Card.Title className="title">Siddharth Nihari</Card.Title>
            <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
            <span>
              Its been an amazing jouney for me to travel with Himalayan
              Explorations, they are quite humble and empathetic people.
            </span>
          </Card.Body>
        </Card>
      </div>

      {/* mobile carousel */}
      <div className="TestimonialSection mobile">
        <Carousel>
          <CarouselItem>
            <Card className="TestCardComponent">
              <Card.Img
                className="CardImages"
                variant="top"
                src="https://images.thequint.com/thequint%2F2022-06%2F81c04f6e-bc6f-4c11-96c1-168153c1d157%2FSurajPatel2022.jpeg?auto=format%2Ccompress&fmt=webp&width=120&w=1200"
              />
              <Card.Body>
                <Card.Title className="title">Anurag Sharma</Card.Title>
                <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
                <span>
                  I have enjoyed this journey a lot. Himalayan Explorations have
                  best staff work, excellent food facility. Home stay was
                  amazing too.
                </span>
              </Card.Body>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card className="TestCardComponent">
              <Card.Img
                className="CardImages"
                variant="top"
                src="https://images.theconversation.com/files/420831/original/file-20210913-17-1yymqmm.jpg?ixlib=rb-1.1.0&rect=16%2C0%2C2779%2C1865&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
              />
              <Card.Body>
                <Card.Title className="title">Sharmila Thakur</Card.Title>
                <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
                <span>
                  Himalayan Explorations have the best staff and expert trek
                  guides.Really love their hospitality and stay!! Must recommend
                  for Bali Trek.
                </span>
              </Card.Body>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card className="TestCardComponent">
              <Card.Img
                className="CardImages"
                variant="top"
                src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg"
              />
              <Card.Body>
                <Card.Title className="title">Manish Chaubey</Card.Title>
                <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
                <span>
                  One of the best experience by joining their team for the trek
                  and Activities. I recommend for the others as well for best
                  experience.
                </span>
              </Card.Body>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card className="TestCardComponent">
              <Card.Img
                className="CardImages"
                variant="top"
                src="https://img.etimg.com/thumb/msid-88760386,width-300,imgsize-30906,,resizemode-4,quality-100/kovid-kapoor-twitter.jpg"
              />
              <Card.Body>
                <Card.Title className="title">Siddharth Nihari</Card.Title>
                <Card.Title className="stars">⭐⭐⭐⭐⭐</Card.Title>
                <span>
                  Its been an amazing jouney for me to travel with Himalayan
                  Explorations, they are quite humble and empathetic people.
                </span>
              </Card.Body>
            </Card>
          </CarouselItem>
        </Carousel>
      </div>
    </>
  );
}

export default ClientTestimonials;

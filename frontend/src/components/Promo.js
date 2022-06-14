import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

const Promo = () => {
  return (
    <section className="section2">
      <Row className="promo-bg text-center p-5">
        <Col md={4} className="align-self-center ">
          <h1 className="text-light">Free Shipping</h1>
        </Col>
        <Col md={4} className="align-self-center">
          <h1 className="text-warning">2 Day Delivery</h1>
        </Col>
        <Col md={4} className="align-self-center">
          <i className="fa-solid fa-truck-fast fa-5x text-light"></i>
        </Col>
      </Row>
      <Container className="p-3">
        <Row className="mt-5 p-3">
          <Col md={6} lg={4} className="align-self-center promo1"></Col>
          <Col md={6} className="align-self-center">
            <h2 className="text-light">
              Introducing the best deals on the market.
            </h2>
            <p className="text-warning">Sleek, light, on the go performance.</p>
            <Button varient="Dark" className="mt-2">
              Shop Now
            </Button>
          </Col>
        </Row>
        <Row className="mt-3 p-3">
          <Col md={6} lg={4} className="align-self-center promo2"></Col>
          <Col md={6} className="align-self-center">
            <h2 className="text-light">Personalize your products with ease.</h2>
            <p className="text-warning">Let your inner self shine.</p>
            <Button varient="Dark" className="mt-2">
              Shop Now
            </Button>
          </Col>
        </Row>
        <Row className="mt-3 p-3 ">
          <Col md={6} lg={4} className="align-self-center promo3"></Col>
          <Col md={6} className="align-self-center">
            <h2 className="text-light">Personalize your products with ease.</h2>
            <p className="text-warning">Let your inner self shine.</p>
            <Button varient="Dark" className="mt-2">
              Shop Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promo;

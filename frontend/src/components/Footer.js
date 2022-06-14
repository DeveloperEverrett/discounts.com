import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <section>
      <Container className="p-5 text-info">
        <Row>
          <Col xl={10} lg={9} md={8} className="ml-auto">
            <Row className="border-top pt-3">
              <Col lg={6} className="text-center">
                <ul className="list-inline">
                  <li className="list-inline-item mr-2">Discounts.com</li>
                  <li className="list-inline-item mr-2">Contact</li>
                  <li className="list-inline-item mr-2">Help</li>
                  <li className="list-inline-item mr-2">Support</li>
                  <li className="list-inline-item mr-2">Blog</li>
                </ul>
              </Col>
              <Col lg={6} className="text-center">
                &copy; 2022 Copyright. Made with
                <i className="fas fa-heart text-danger"></i>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;

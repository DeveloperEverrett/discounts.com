import { Row, Col, Container, Button } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <section>
        <Row>
          <Col className="p-5 text-center ">
            <h1 className="text-info">Welcome to my Discounts</h1>
            <p className="mt-4">
              Check out the latest tech gadgets at prices you just wont get
              anywhere else.
            </p>
            <Button varient="Dark" className="mt-4">
              Shop Now
            </Button>
          </Col>
        </Row>
      </section>

      <Container>
        <h1 className="mt-4">Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col
              key={product._id}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className="mb-2"
            >
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;

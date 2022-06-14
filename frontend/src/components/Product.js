import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className="border-0 my-3 shadow-sm">
      <Card.Img src={product.image} variant="top" />

      <Card.Body>
        <Card.Title>
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3" className="text-info">
          <strong>${product.price}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

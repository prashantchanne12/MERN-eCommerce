import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
    return (
        <>
          <h1>Latest Products</h1>  
          <Row>
              {
                  products.map(product => (
                      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                      </Col>
                  ))
              }
          </Row>
        </>
    )
}

export default HomeScreen;

// <Col sm={12} md={6} lg={4} xl={3}>
// sm - small screen - 12 - one single column 
// md - medium screen - 6 - two columns 
// lg - large screen - 4 - three columns
// xl - large screen - 3 - four columns
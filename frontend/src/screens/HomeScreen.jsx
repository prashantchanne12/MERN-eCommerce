import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

const HomeScreen = ({match}) => {

    const keyword = match.params.keyword;
    const pageNumber = match.params.pageNumber || 1;

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, error, products, page, pages } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber]);

    return (
        <>
          <h1>Latest Products</h1>  

           { loading ? <Loader /> : error ? <Message variant='danger'> {error} </Message> :
           <>
           <Row>
            {
                products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                ))
            }
        </Row>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>

        }
  
        </>
    )
}

export default HomeScreen;

// <Col sm={12} md={6} lg={4} xl={3}>
// sm - small screen - 12 - one single column 
// md - medium screen - 6 - two columns 
// lg - large screen - 4 - three columns
// xl - large screen - 3 - four columns
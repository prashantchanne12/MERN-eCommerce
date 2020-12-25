import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {  Button, Col, Row, ListGroup, Image, Card  } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';

const PlaceOrderScreen = ({history}) => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { shippingAddress, paymentMethod, cartItems } = cart;

    // Calculate Prices
    const addDecimals = (num) => (Math.round(num * 100) / 100 ).toFixed(2);

    cart.itemsPrice = addDecimals(cartItems.reduce((acc, item) => acc+ (item.price * item.qty ), 0))

    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 10);

    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice)).toFixed(2));

    cart.totalPrice = addDecimals(Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice));

    const orderCreate = useSelector(state => state.orderCreate);
    const { orders, success, error } = orderCreate;

    useEffect(() => {
        if(success){
            history.push(`order/${orders._id}`);
        }
        // eslint-disable-next-line
    }, [success, history])

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: shippingAddress,
            paymentMethod: paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup>
                        <ListGroup.Item variant='flush'>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                { shippingAddress.address },
                                { shippingAddress.city },
                                { shippingAddress.postalCode },
                                { shippingAddress.country },
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            { paymentMethod }
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            { cartItems.length === 0 ? <Message>Your cart is empty</Message> : (

                                <ListGroup variant='flsuh'>
                                    {
                                        cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                      <Image src={item.image} alt={item.name} fluid rounded/>  
                                                    </Col>
                                                    <Col>
                                                      <Link to={`/product/${item.product}`} >
                                                      { item.name }    
                                                      </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x {item.price} = {item.qty * item.price}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
                            )
                            }
                           
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>

                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                   <Col>Items</Col> 
                                   <Col>${cart.itemsPrice}</Col> 
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                   <Col>Shpping</Col> 
                                   <Col>${cart.shippingPrice}</Col> 
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                   <Col>Tax</Col> 
                                   <Col>${cart.taxPrice}</Col> 
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                   <Col>Total</Col> 
                                   <Col>${cart.totalPrice}</Col> 
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                {
                                    error && <Message variant='danger'>{error}</Message>
                                }
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button type='button' className='btn-block'
                                disabled={cartItems.length === 0}
                                onClick={placeOrderHandler}
                                >
                                Place Order
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen;

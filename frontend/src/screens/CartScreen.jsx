import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'; 

// Components
import Message from '../components/Message';

// Actions
import { addToCart } from '../actions/cartActions';

const CartScreen = ({match, location, history}) => {

    const productId = match.params.id;

    const qty = location.search;

    console.log(qty);

    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen;

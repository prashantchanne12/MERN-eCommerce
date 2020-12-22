import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <Spinner animation='boder' role='status' style={{
            width: '100px',
            height: '100px',
            display: 'block',
            margin: 'auto'
        }}>
            <span className='sr-only'>Loding...</span>
        </Spinner>
    )
}

export default Loader;

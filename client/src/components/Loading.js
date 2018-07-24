import React from 'react';
import { Container } from 'reactstrap';
import Loading from '../assets/images/loading.gif';

const Loader = () => {
    return (
        <Container className='text-center'>
            <img className='img-fluid' src={Loading} alt='loading gif of rotating circles' />
        </Container>
    )
}

export default Loader;
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Checkout.css'

const Checkout = () => {
    const [loading] = useAuthState(auth);

    if(loading){
        <Loading/>
    }
    const handleSubmit = event => {
        event.preventDefault();
        toast('Thanks for confirm booking!');
    }
    return (
        <div className='checkout container py-5'>
            <h2>Booking Information</h2>
            <Row>
                <Col lg='3'></Col>
                <Col lg='6'>
                    <div className=' border mt-4'>
                        <Form onSubmit={handleSubmit} className='text-start p-4 mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control className='py-2' type="text" name='name' placeholder="Enter your name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='py-2' type="email" name='email' placeholder="Enter your email address" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control className='py-2' type="number" name='email' placeholder="Enter your phone number" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control className='py-2' type="text" name='password' placeholder="Enter your Address"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Additional Information</Form.Label>
                                <Form.Control className='py-2' type="text" name='password' placeholder="Enter additional details if you want"  />
                            </Form.Group>
                            <Button
                                style={{ fontSize: '18px' }} className='w-100 py-2' variant="primary" type="submit">
                                Confirm Booking
                            </Button>
                        </Form>
                        <ToastContainer/>
                    </div>
                </Col>
                <Col lg='3'></Col>
            </Row>

        </div>
    );
};

export default Checkout;
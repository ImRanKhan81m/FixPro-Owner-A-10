import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../Authentication/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <div className='container py-4' style={{ height: '86vh' }}>
            <h2>Please Login</h2>
            <Row className='pb-4'>
                <Col lg='3'></Col>
                <Col lg='6' sm='12'>
                    <div className='m-auto border mt-4'>
                        <Form className='text-start p-4 mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='py-2' ref={emailRef} type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className='py-2' ref={passwordRef} type="password" placeholder="Password" autoComplete='on' required />
                            </Form.Group>
                            <Button style={{ fontSize: '18px' }} className='w-100 py-2' variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p>New Customer? <span onClick={navigateRegister} className='text-primary' style={{ cursor: 'pointer' }}>Please Register Now</span></p>
                        <p>Forgot Password? <span className='text-primary' style={{ cursor: 'pointer' }}>Reset</span></p>
                        <SocialLogin />
                    </div>
                </Col>
                <Col lg='6' ></Col>
            </Row>

        </div>
    );
};

export default Login;
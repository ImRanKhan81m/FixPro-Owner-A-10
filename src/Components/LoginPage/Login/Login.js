import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../Authentication/SocialLogin';
import Loading from '../../Loading/Loading';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigateRegister = () => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true })
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Incorrect username or password.</p>
    }
    

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Please enter your email address.')
        }
    }
    if (loading, sending) {
        return <Loading />
    }

    return (
        <div className='container py-4' style={{ height: '86vh' }}>
            <h2>Please Login</h2>
            <Row className='pb-4'>
                <Col lg='3'></Col>
                <Col lg='6' sm='12'>
                    <div className='m-auto border mt-4'>
                        <Form onSubmit={handleSubmit} className='text-start p-4 mt-4'>
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
                        {errorElement}
                        <p>New Customer? <span onClick={navigateRegister} className='text-primary' style={{ cursor: 'pointer' }}> Register Now</span></p>
                        <p>Forgot Password? <span onClick={resetPassword} className='text-primary' style={{ cursor: 'pointer' }}>Reset</span></p>
                        <SocialLogin />
                        <ToastContainer />
                    </div>
                </Col>
                <Col lg='6' ></Col>
            </Row>

        </div>
    );
};

export default Login;
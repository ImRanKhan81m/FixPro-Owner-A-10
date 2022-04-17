import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h1 className='pt-4'>This is blog page.</h1>
            <Container>
                <Row>
                    <Col lg='2'></Col>
                    <Col lg='8'>
                        <div className='border p-4 text-start my-3'>
                            <h5>1) What Difference between authorization and authentication?</h5>
                            <p> <b>Answer:</b> <br />
                                <b>Authorization:</b> In authentication process, the identity of users are checked for providing the access to the system. In authentication process, users or persons are verified. It is done before the authorization process. 	It needs usually user’s login details. Authentication determines whether the person is user or not.</p><br />
                            <p><b>Authentication: </b>In authorization process, person’s or user’s authorities are checked for accessing the resources. While in this process, users or persons are validated. This process is done after the authentication process. It needs user’s privilege or security levels. It determines What permission do user have?</p>
                        </div>
                        <div className='border p-4 text-start  my-3'>
                            <h5>2) What are you using Firebase? What other option do you have to implement authentication?</h5>
                            <p> <b>Answer:</b><br />
                                #Firebase Authentication can help me to implement the feature that a newbie can dream of, like doing email/SMS verification, letting users sign in/sign up. It saves a lot of time by providing a simple way to handle the sign-in/signup process. The best part is that it builds trust and increases the users’ base app that makes it more professional, better, and faster. So, I use it a lot easier.</p>
                            <p><b>#</b> Auth0, MongoDB, Passport, Okta are the most popular alternatives and competitors to Firebase Authentication.</p>
                        </div>
                        <div className='border p-4 text-start  my-3'>
                            <h5>2) What other service does firebase provide other than authentication?</h5>
                            <p> <b>Answer:</b><br />
                                There are many services which Firebase provides:</p>
                                <span>1. Cloud Firestore.</span><br />
                                <span>2. Cloud Functions.</span><br />
                                <span>3. Hosting.</span><br />
                                <span>4. Cloud Storage.</span><br />
                                <span>5. Google Analytics.</span><br />
                                <span>5. Predictions.</span><br />
                                <span>5. Cloud Messaging.</span><br />
                        </div>
                    </Col>
                    <Col lg='2'></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog; 
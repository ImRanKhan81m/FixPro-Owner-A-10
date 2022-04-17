import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import homeimage from '../../images/home-img.svg'

const HomePage = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='6'sm='12' order='2'>
                        <div>
                            <img src={homeimage} alt="" />
                        </div>
                    </Col>
                    <Col  lg='6' sm='12' order='1' className='d-flex align-items-center'>
                        <div>
                            <h2>Why Fix It Yourself Leave It To The Pros.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam harum molestiae voluptatem quia unde sequi incidunt laudantium commodi tempora quis!</p>
                            <button href="#service" className='btn btn-primary'>Get Started</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
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
                            <p>Free Repair Evaluation. Free Warranties On All US Sales And Repairs. Buy A Refurbished Unit Today Or Get Your Unit Repaired Fast By House Tech Staff. Servo Drive Sales Repair. Industrial Sales. Backed With Warranties. General Electric.</p>
                            <button href="#service" className='btn btn-primary'>Get Started</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
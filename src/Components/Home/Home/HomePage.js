import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import homeimage from '../../images/gallery/front-view-man-troubleshooting-computer.jpg'
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <Container className='home-container pt-lg-5 mt-5'>
                <Row>
                    <Col lg='6'sm='12' order='2' className=''>
                        <div className='homepage d-flex align-items-center'>
                            <img src={homeimage} alt="" />
                        </div>
                    </Col>
                    <Col  lg='6' sm='12' order='1' className='d-flex align-items-center mt-3 mt-lg-0'>
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
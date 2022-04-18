import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import image from '../images/Imran.jpeg'

const About = () => {
    return (
        <Container className='about-section pt-lg-5 pt-md-5 mt-lg-4 pt-4 '>
            <div>
                <Row>
                    <Col lg='6' md='6'>
                        <div>
                            <img className='w-75' src={image} alt="" />
                        </div>
                    </Col>
                    <Col lg='6' md='6' className='d-flex align-items-center mt-3 mt-lg-0'>
                        <div className='text-start'>
                             <h3><b>Name:</b> MD Imran Hossen</h3>
                             <h3><b>Age:</b> 21</h3>
                             <p><b>Goal:</b> I want to be a Full-Stack Web Developer.  I have a passion for learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind.  I enjoy working with include ReactJS and JavaScript. In the future I will learn more Programming Language.</p>

                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default About 
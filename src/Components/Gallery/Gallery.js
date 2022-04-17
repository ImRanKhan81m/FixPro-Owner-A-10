import React from 'react';
import img1 from '../images/g-img-1.jpg'
import img2 from '../images/g-img-2.jpg'
import img3 from '../images/g-img-3.jpg'
import img4 from '../images/g-img-4.jpg'
import img5 from '../images/g-img-5.jpg'
import img6 from '../images/g-img-6.jpg'
import img7 from '../images/gallery/front-view-person-repairing-motherboard.jpg'
import img8 from '../images/gallery/front-view-person-repairing-motherboard_23-2148419143.jpg'
import img9 from '../images/gallery/front-view-man-troubleshooting-computer.jpg'

import './Gallery.css'
import { Container } from 'react-bootstrap';

const Gallery = () => {
    return (
        <>
            <Container className='mt-5 py-5' id='gallery'>
                <h1 className='mb-3 pt-5'>My Gallery</h1>
                <div className='gallery mb-5 mt-4' >
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img7} alt="" />
                    <img src={img4} alt="" />
                    <img src={img8} alt="" />
                    <img src={img6} alt="" />
                    <img src={img3} alt="" />
                    <img src={img5} alt="" />
                    <img src={img9} alt="" />
                </div>
            </Container>
        </>
    );
};

export default Gallery;
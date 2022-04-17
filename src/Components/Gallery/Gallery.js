import React from 'react';
import img1 from '../images/g-img-1.jpg'
import img2 from '../images/g-img-2.jpg'
import img3 from '../images/g-img-3.jpg'
import img4 from '../images/g-img-4.jpg'
import img5 from '../images/g-img-5.jpg'
import img6 from '../images/g-img-6.jpg'
import './Gallery.css'

const Gallery = () => {
    return (
        <>
            <h1 className='mt-5 mb-3 pt-5'>My Gallery</h1>
            <div className='gallery container mb-5 mt-4' id='gallery'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div>
        </>
    );
};

export default Gallery;
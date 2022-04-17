
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-section'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4><b>Price:</b> {price}</h4>
            <p>{description}</p>
            <Link to="/checkout">
                <Button className='btn btn-primary' >Book Now</Button>
            </Link>
        </div>
    );
};

export default Service;
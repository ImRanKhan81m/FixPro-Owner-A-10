import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from './Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <Container className='py-5'>
                <h1>Services:{services.length}</h1>
                <div className='services-section'>
                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default Services;
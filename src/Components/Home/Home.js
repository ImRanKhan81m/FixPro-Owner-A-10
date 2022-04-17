import React from 'react';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import HomePage from './Home/HomePage';

const Home = () => {
    return (
        <div>
            <HomePage></HomePage>
            {/* <Banner></Banner> */}
            <Services></Services>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;
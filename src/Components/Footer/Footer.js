import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return (
        <footer className='py-3 mt-5' style={{backgroundColor:'#081646', color:'white'}}>
            <p className='mt-3 px-3'>Copyright &copy; {getCurrentYear()}-{getCurrentYear() + 2} All Rights Reserved by Imran Hossen </p>
        </footer>
    );
};

export default Footer;
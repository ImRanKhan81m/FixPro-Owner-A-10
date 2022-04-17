import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar className='shadow-sm py-2' collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <span style={{ fontSize: '25px' }}>Fixpro Owner</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ fontSize: '18px', color: 'white' }} className="ms-auto">
                            <Nav.Link href="/#services">Services</Nav.Link>
                            <Nav.Link href="/#gallery">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut}>
                                        Log Out
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
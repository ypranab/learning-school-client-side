import React from 'react';
import { useContext } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const logoURL = 'https://icon-library.com/images/logo-icon-png/logo-icon-png-11.jpg';
    //console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <Navbar collapseOnSelect className='mb-5 bg-opacity-50' expand="lg" bg="success" variant="success">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logoURL}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    <Link to='/' className='text-decoration-none fw-bolder '>Learning School</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/course'>All Courses</Nav.Link>
                        <Nav.Link href='/'>Blog</Nav.Link>
                        <Nav.Link href='/'>FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {['bottom'].map((placement) => (
                                            <OverlayTrigger
                                                key={placement}
                                                placement={placement}
                                                overlay={<Tooltip id={`tooltip-${placement}`}>{user?.displayName}</Tooltip>}>
                                                <img className="rounded-circle" src={user?.photoURL} alt="" style={{ height: '2rem', width: '2rem' }} />
                                            </OverlayTrigger>))}
                                        <Button onClick={handleLogOut} variant="success" className="ms-3">log out</Button>
                                    </>
                                    :
                                    <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                                        <Button variant="light"><Link to='/login' className='text-decoration-none me-2 text-success'>Login</Link></Button>
                                        <Button variant="warning"><Link to='/register' className='text-decoration-none me-3 text-success'>Register</Link></Button>
                                    </div>
                            }
                        </>
                    </Nav>
                    <div className='d-lg-none'>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const logoURL = '../../logo.png';
    //console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="info" variant="info">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logoURL}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    <Link to='/' className='text-decoration-none fw-bolder'>Learning School</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/course'>All Courses</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {user?.email}
                                        <img src={user?.photoURL} alt="" style={{ height: '30px' }} />
                                        <Button onClick={handleLogOut} variant="success">log out</Button>
                                    </>
                                    :
                                    <>
                                        <Button variant="danger"><Link to='/login'>Login</Link></Button>
                                        <Button variant="warning"><Link to='/register'>Register</Link></Button>
                                    </>
                            }
                        </>
                    </Nav>
                    <div className='d-lg-none'>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
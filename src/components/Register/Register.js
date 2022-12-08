import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Register = () => {
    const { createUser, handleUpdate, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState();
    const [accept, setAccept] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleAccept = (event) => {
        setAccept(event.target.checked);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError("Your Password should be 6 character long.");
            return;
        }

        if (password !== confirm) {
            setError("Password didn't match!!");
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateProfile(displayName, photoURL);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                handleEmailVerify();
                toast.success("Verify email.")
            })
            .catch(error => {
                //const errorCode = error.code;
                setError(error.message);
                //console.error(errorCode, errorMessage);
            })
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        handleUpdate(profile)
            .then(() => { })
            .catch(() => { })
    }

    const handleEmailVerify = () => {
        verifyEmail()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="name" type="name" placeholder="Your Name" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Photo URL
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="photo" type="photo" placeholder="Photo URL" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="email" type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Confirm Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control name="confirm" type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>
                <input onClick={handleAccept} type="checkbox" id="" name="accept" value="terms and conditons" />
                <label htmlFor="accept"> Accept <Link to='/terms'>Terms and Conditon</Link></label><br /><br />
                <Button variant="primary" type="submit" disabled={!accept} >
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default Register;
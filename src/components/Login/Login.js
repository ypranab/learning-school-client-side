import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";


const Login = () => {
    const { signIn, setLoading } = useContext(AuthContext);
    const gitHubProvider = new GithubAuthProvider();
    const { googleSignIn, gitHubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState();
    const provider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(email, password);

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                //console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                console.log(location);
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // }
                // else {
                //     toast.error('Email is not verified')
                // }
            })
            .catch(error => {
                const errorCode = error.code;
                setError(error.message);
                console.error(errorCode);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then(res => {
                const user = res.user;
                navigate(from, { replace: true });
                //console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGitHubSignIn = () => {
        gitHubSignIn(gitHubProvider)
            .then(res => {
                const user = res.user;
                navigate(from, { replace: true });
                //console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <h2>Please Login to access premium courses</h2>
            <Form onSubmit={handleSubmit}>
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
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>New to Learning School <Link to='/register'>Sign Up</Link></p>
                <p>{error}</p>
            </Form>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handleGitHubSignIn} variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;
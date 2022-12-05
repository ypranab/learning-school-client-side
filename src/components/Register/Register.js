import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Register = () => {
    const { createUser, handleUpdate, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState();
    const [accept, setAccept] = useState(false);
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
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="photo">photoURL</label>
                    <input type="photo" name='photo' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input onClick={handleAccept} type="checkbox" id="" name="accept" value="terms and conditons" />
                <label htmlFor="accept"> Accept <Link to='/terms'>Terms and Conditon</Link></label><br />
                <input className='btn-submit' type="submit" value="sign up" id="" disabled={!accept} />
                <p>Already have an account <Link to='/login'>Login</Link></p>
                <h4>{error}</h4>
            </form>
        </div>
    );
};

export default Register;
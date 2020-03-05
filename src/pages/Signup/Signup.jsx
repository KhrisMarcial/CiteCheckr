import React from 'react';
import styles from './Signup.module.scss';
import SignupForm from '../../components/SignupForm/SignupForm';

const Signup = (props) => {
    return (
        <main>
            <h1>Signup</h1>
            <SignupForm {...props} handleSignupOrLogin={props.handleSignupOrLogin}/>
        </main>
    )
};

export default Signup;
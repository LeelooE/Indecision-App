import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';
const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <p>Login with Google and set up your next Google task with Indecision.</p>
            {props.startLogin}
        </div>
    </div>
);

export default LoginPage;

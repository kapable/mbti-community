import React, { Fragment } from 'react';
import Head from 'next/head';
import LoginForm from '../components/User/LoginForm';

const Login = () => {

    return (
        <Fragment>
            <Head>
                <title>로그인 페이지</title>
            </Head>
            <LoginForm />
        </Fragment>
    );
};

export default Login;
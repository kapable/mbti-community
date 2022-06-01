import React, { Fragment } from 'react';
import Head from 'next/head';
import SignupForm from '../components/User/SignupForm';

const signup = () => {
    return (
        <Fragment>
            <Head>
                <title>회원가입 페이지</title>
            </Head>
            <SignupForm />
        </Fragment>
    );
};

export default signup;
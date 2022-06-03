import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Router from "next/router";
import LoginForm from '../components/User/LoginForm';
import { useSelector } from 'react-redux';

const Login = () => {
    const { logInDone } = useSelector((state) => state.user);
    useEffect(() => {
        if(logInDone) {
            Router.push('/');
        }
    }, [logInDone]);

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
import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import Router from "next/router";
import SignupForm from '../components/User/SignupForm';
import { useSelector } from 'react-redux';

const signup = () => {
    const { signUpDone } = useSelector((state) => state.user);
    useEffect(() => {
        if(signUpDone) {
            alert('두들링 회원가입을 축하합니다!')
            Router.replace('/login');
        }
    }, [signUpDone]);

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
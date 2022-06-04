import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import UserProfile from '../../components/User/UserProfile';
import { useDispatch } from 'react-redux';
import { LOAD_USER_INFO_REQUEST } from '../../reducers/user';

const Profile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { userId } = router.query;

    useEffect(() => {
        dispatch({
            type: LOAD_USER_INFO_REQUEST,
            data: userId
        })
    }, [userId]);

    return (
        <Fragment>
            <Head>
                <title>MBTI 커뮤니티 | 프로필</title>
                <meta charSet='utf-8'/>
                <meta name="language" content="Korean" />
                <meta name="author" content="쿠키로켓" />
                <meta name="description" content="MBTI 커뮤니티" />
                <meta name="keywords" content="MBTI, 커뮤니티" />
            </Head>
            <UserProfile />
        </Fragment>
    );
};

export default Profile;
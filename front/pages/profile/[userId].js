import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import UserProfile from '../../components/User/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_INFO_REQUEST } from '../../reducers/user';

const Profile = () => {
    const router = useRouter();
    const { userId } = router.query;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: LOAD_USER_INFO_REQUEST,
            data: userId
        })
    }, [userId]);

    const { userInfo } = useSelector((state) => state.user);

    return (
        <Fragment>
            <Head>
                {/* <title>{`${userInfo.nickname} 프로필 | 두들링`}</title> */}
                <meta charSet='utf-8'/>
                <meta name="language" content="Korean" />
                <meta name="author" content="쿠키로켓" />
                <meta name="description" content="MBTI 커뮤니티" />
                <meta name="keywords" content="MBTI, 커뮤니티" />
            </Head>
            <UserProfile userInfo={userInfo}/>
        </Fragment>
    );
};

export default Profile;
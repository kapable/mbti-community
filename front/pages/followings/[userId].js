import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import FollowList from '../../components/Main/FollowList';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_INFO_REQUEST } from '../../reducers/user';
import { useRouter } from 'next/router';

const Followings = () => {
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
                <title>{`${userInfo.nickname} 팔로잉 리스트 | 두들링`}</title>
            </Head>
            <FollowList userList={userInfo.Followings} />
        </Fragment>
    );
};

export default Followings;
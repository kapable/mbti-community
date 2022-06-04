import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import FollowList from '../../components/Main/FollowList';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_INFO_REQUEST } from '../../reducers/user';

const Followers = () => {
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
    const followersList = [
        {
            userId: 1,
            nickname: 'be_seeyong',
            type: 'ISTJ'
        },
        {
            userId: 2,
            nickname: 'seeyong',
            type: 'ENTP'
        }
    ];

    return (
        <Fragment>
            <Head>
                <title>{`${userInfo.nickname} 팔로우 리스트 | 두들링`}</title>
            </Head>
            <FollowList userList={userInfo.Followers} />
        </Fragment>
    );
};

export default Followers;
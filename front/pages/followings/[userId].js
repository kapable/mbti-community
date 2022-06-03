import React, { Fragment } from 'react';
import Head from 'next/head';
import FollowList from '../../components/Main/FollowList';

const Followings = () => {
    const followingsList = [
        {
            userId: 3,
            nickname: 'abcd',
            type: 'ISTJ'
        },
        {
            userId: 4,
            nickname: 'qwer',
            type: 'ENTP'
        }
    ];

    return (
        <Fragment>
            <Head>
                <title>Seeyong 팔로잉 리스트 | 두들링</title>
            </Head>
            <FollowList userList={followingsList} />
        </Fragment>
    );
};

export default Followings;
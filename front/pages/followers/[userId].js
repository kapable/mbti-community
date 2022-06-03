import React, { Fragment } from 'react';
import Head from 'next/head';
import FollowList from '../../components/Main/FollowList';

const Followers = () => {
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
                <title>Seeyong 팔로우 리스트 | 두들링</title>
            </Head>
            <FollowList userList={followersList} />
        </Fragment>
    );
};

export default Followers;
import React, { Fragment } from 'react';
import Head from 'next/head';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Profile = () => {
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
            <div className='profile-head-div'>
                <div className='profile-head-name'>웡아잉</div>
                <div className='profile-head-email'>ellen0@gmail.com</div>
                <div className='profile-head-type'>ENTP</div>
            </div>
            <Tabs className='profile-menu-tab' tabBarStyle={{margin:"0 auto", width:"fit-content"}} tabPosition='top' size='default' type='line'>
                <TabPane tab="작성글" key="1">
                    작성글
                </TabPane>
                <TabPane tab="작성댓글" key="2">
                    작성댓글
                </TabPane>
                <TabPane tab="댓글단 글" key="3">
                    댓글단 글
                </TabPane>
                <TabPane tab="좋아요한 글" key="4">
                    좋아요한 글
                </TabPane>
            </Tabs>
        </Fragment>
    );
};

export default Profile;
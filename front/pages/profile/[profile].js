import React, { Fragment, useCallback, useState } from 'react';
import Head from 'next/head';
import { Tabs, Row, Col, Button } from 'antd';
import { CheckOutlined, EditOutlined, PlusOutlined, WechatOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const Profile = () => {
    const [isFollow, setIsFollow] = useState(false);
    const onFollowButtonClick = useCallback(() => {
        setIsFollow(!isFollow);
    }, [isFollow]);

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
            <Row className='profile-head-div'>
                <Col span={16}>
                    <div className='profile-head-name'>웡아잉</div>
                    <div className='profile-head-email'>ellen0@gmail.com</div>
                    <div className='profile-head-type'>ENTP</div>
                </Col>
                <Col span={8}>
                    <div className='profile-head-right-upper-div'>
                        <div className='profile-head-follower-div'><span>850</span><br />팔로워</div>
                        <div className='profile-head-following-div'><span>850</span><br />팔로잉</div>
                    </div>
                    <div className='profile-head-right-below-div'>
                        <Button
                            style={{ border: 'none', backgroundColor: isFollow ? '#b7bed1' : "#375cb7", color: 'white' }}
                            onClick={onFollowButtonClick}
                            shape='round'
                            className='profile-head-follow-button'>
                                {isFollow ? <span><CheckOutlined /> 팔로잉</span> : <span><PlusOutlined /> 팔로우</span>}
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row className='profile-introduction-row'>
                <Col className='profile-introduction-icon' span={4}><WechatOutlined style={{color: "#375cb7"}} /></Col>
                <Col className='profile-introduction-text' span={16}>안녕하세요! 인간 엔팁 웡아잉입니다!<br />고민 해결 해드릴게요! 팔로우 부탁드립니다!</Col>
                <Col className='profile-introduction-edit' span={4}><EditOutlined style={{color: "#b7bed1"}} /></Col>
            </Row>
            <Tabs className='profile-menu-tab' tabBarStyle={{margin:"0 auto", width:"fit-content"}} tabPosition='top' size='default' type='line'>
                <TabPane style={{padding: "16px"}} tab="작성글" key="1">
                    작성글
                </TabPane>
                <TabPane style={{padding: "16px"}} tab="작성댓글" key="2">
                    작성댓글
                </TabPane>
                <TabPane style={{padding: "16px"}} tab="좋아요한 글" key="4">
                    좋아요한 글
                </TabPane>
            </Tabs>
        </Fragment>
    );
};

export default Profile;
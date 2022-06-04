import { CheckOutlined, DownOutlined, EditOutlined, PlusOutlined, WechatOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Form, Input, Menu, Row, Space, Tabs } from 'antd';
import React, { Fragment, useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DESCRIPTION_REQUEST, CHANGE_NICKNAME_REQUEST } from '../../reducers/user';

const { TabPane } = Tabs;

const UserProfile = () => {
    const dispatch = useDispatch();
    const { userInfo, myInfo } = useSelector((state) => state.user);

    const [nickname, setNickname] = useInput(userInfo.nickname);
    const [description, setDescription] = useInput(userInfo.description);
    const [myMBTI, setMyMBTI] = useState(userInfo.type);

    const [nicknameEditMode, setNicknameEditMode] = useState(false);
    const [descriptionEditMode, setDescriptionEditMode] = useState(false);
    const [typeEditMode, setTypeEditMode] = useState(false);

    const onNicknameEditMode = useCallback(() => {
        setNicknameEditMode(!nicknameEditMode);
    }, [nicknameEditMode]);

    const onDescriptionEditMode = useCallback(() => {
        setDescriptionEditMode(!descriptionEditMode);
    }, [descriptionEditMode]);

    const onMBTIClick = useCallback((e) => {
        setMyMBTI(e.key)
        setTypeEditMode(false);
    }, [myMBTI]);

    const categories = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
    const menu = (
        <Menu
            onClick={onMBTIClick}
            items={categories.map((type, _) => ({ label: type, key: type }))}
        />
    );

    const onNicknameSubmit = useCallback(() => {
        if (!nickname) {
            alert('닉네임을 적어주세요!');
        } else if (nickname.length > 20) {
            alert('닉네임은 20자 이내로 적어주세요!');
        } else {
            dispatch({
                type: CHANGE_NICKNAME_REQUEST,
                data: nickname,
            });
            setNicknameEditMode(false);
        };
    }, [nickname]);

    const onDescriptionSubmit = useCallback(() => {
        if(description.length > 100) {
            alert('소개는 100자 이내로 적어주세요!');
        } else if (!description) {
            alert('소개를 적어주세요!')
        } else {
            dispatch({
                type: CHANGE_DESCRIPTION_REQUEST,
                data: description,
            });
            setDescriptionEditMode(false);
        };
        
    }, [description]);

    const [isFollow, setIsFollow] = useState(false);
    const onFollowButtonClick = useCallback(() => {
        setIsFollow(!isFollow);
    }, [isFollow]);

    return (
        <div>
            <Row className='profile-head-div'>
                <Col span={16}>
                    {nicknameEditMode
                    ? (<Input.Search 
                        className='user-nickname-edit-input'
                        value={nickname}
                        onChange={setNickname}
                        addonBefore="닉네임"
                        enterButton="수정"
                        onSearch={onNicknameSubmit}
                    />)
                    : (<div className='profile-head-name'>{nickname} <EditOutlined onClick={onNicknameEditMode} className="profile-head-name-edit-button" /></div>)
                    }
                    
                    <div className='profile-head-email'>ellen0@gmail.com</div>
                    {typeEditMode
                    ? (<Dropdown overlay={menu} trigger={['click']}>
                            <Button style={{ width: '6rem' }}>
                                <Space>
                                    {myMBTI ? myMBTI : 'MBTI'}
                                <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>)
                    : (<div onClick={() => (setTypeEditMode(true))} className='profile-head-type'>{myMBTI}</div>)
                    }
                </Col>
                <Col span={8}>
                    <div className='profile-head-right-upper-div'>
                        <Link href={`/followers/1`}><a><div className='profile-head-follower-div'><span>{userInfo.Followers.length}</span><br />팔로워</div></a></Link>
                        <Link href={`/followings/1`}><a><div className='profile-head-following-div'><span>{userInfo.Followings.length}</span><br />팔로잉</div></a></Link>
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
                {descriptionEditMode
                ? (
                    <Input.Search
                        className='user-description-edit-input'
                        value={description}
                        onChange={setDescription}
                        addonBefore="소개"
                        enterButton="수정"
                        onSearch={onDescriptionSubmit}
                    />
                )
                : (
                    <Fragment>
                        <Col className='profile-introduction-text' span={16}>{userInfo.description}</Col>
                        <Col className='profile-introduction-edit' span={4}><EditOutlined onClick={onDescriptionEditMode} style={{color: "#b7bed1"}} /></Col>
                    </Fragment>
                )
                }
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
        </div>
    );
};

export default UserProfile;
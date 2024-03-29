import { CheckOutlined, DownOutlined, EditOutlined, PlusOutlined, WechatOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Form, Input, Menu, Row, Space, Tabs } from 'antd';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import useInput from '../../hooks/useInput';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DESCRIPTION_REQUEST, CHANGE_NICKNAME_REQUEST, categoriesColorObj, UNFOLLOW_REQUEST, FOLLOW_REQUEST } from '../../reducers/user';
import MyPosts from '../../components/User/MyPosts';
import MyComments from '../../components/User/MyComments';
import MyLikePosts from '../../components/User/MyLikePosts';

const { TabPane } = Tabs;

const UserProfile = ({ userInfo }) => {
    const dispatch = useDispatch();
    
    const { myInfo, followLoading, unfollowLoading } = useSelector((state) => state.user);
    const [isMyProfile, setIsMyProfile] = useState();

    const [nickname, onChangeNickname, setNickname] = useInput('');
    const [description, onChangeDescription, setDescription] = useInput('');
    const [myMBTI, setMyMBTI] = useState('');
    const [myColor, setMyColor] = useState('');

    useEffect(() => {
        setIsMyProfile(userInfo.id === myInfo?.id);
        setNickname(userInfo.nickname);
        setDescription(userInfo.description);
        setMyColor(categoriesColorObj[userInfo.type])
        setMyMBTI(userInfo.type);
    }, [userInfo, myInfo, categoriesColorObj]);
    
    useEffect(() => {
        setMyColor(categoriesColorObj[myMBTI]);
    }, [myMBTI, categoriesColorObj]);


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

    const menu = (
        <Menu
            onClick={onMBTIClick}
            items={Object.keys(categoriesColorObj).map((type, _) => ({ label: type, key: type }))}
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
            setNickname(nickname);
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
            setDescription(description);
            setDescriptionEditMode(false);
        };
        
    }, [description]);

    const isFollowingUser = myInfo?.Followings.find((v) => v.id === userInfo.id);
    const onFollowButtonClick = useCallback(() => {
        if(isFollowingUser) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: {
                    fromInfo: { id:myInfo.id },
                    toInfo: { id:userInfo.id }
                },
            });
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: {
                        fromInfo: { id:myInfo.id, nickname:myInfo.nickname, type:myInfo.type },
                        toInfo: { id:userInfo.id, nickname:userInfo.nickname, type:userInfo.type }
                    },
            });
        }
    }, [isFollowingUser, userInfo, myInfo]);

    return (
        <div>
            <Row className='profile-head-div'>
                <Col span={16}>
                    {nicknameEditMode && isMyProfile
                    ? (<Input.Search 
                        className='user-nickname-edit-input'
                        value={nickname}
                        onChange={onChangeNickname}
                        addonBefore="닉네임"
                        enterButton="수정"
                        onSearch={onNicknameSubmit}
                    />)
                    : (<div className='profile-head-name'>{nickname} {isMyProfile ? <EditOutlined onClick={onNicknameEditMode} className="profile-head-name-edit-button" /> : null}</div>)
                    }
                    
                    <div className='profile-head-email'>{userInfo.email}</div>
                    {typeEditMode && isMyProfile
                    ? (<Dropdown overlay={menu} trigger={['click']}>
                            <Button style={{ width: '6rem' }}>
                                <Space>
                                    {myMBTI ? myMBTI : 'MBTI'}
                                <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>)
                    : (<div onClick={isMyProfile ? () => (setTypeEditMode(true)) : null} className='profile-head-type' style={userInfo ? { backgroundColor: myColor } : null}>{myMBTI}</div>)
                    }
                </Col>
                <Col span={8}>
                    <div className='profile-head-right-upper-div'>
                        <Link href={`/followers/1`}><a><div className='profile-head-follower-div'><span>{userInfo.Followers.length}</span><br />팔로워</div></a></Link>
                        <Link href={`/followings/1`}><a><div className='profile-head-following-div'><span>{userInfo.Followings.length}</span><br />팔로잉</div></a></Link>
                    </div>
                    <div className='profile-head-right-below-div'>
                        {isMyProfile || !myInfo // 내 프로필 or 로그인을 하지 않았다면 -> 팔로우 버튼 안보이기
                        ? null
                        : (
                            <Button
                                style={{ border: 'none', backgroundColor: isFollowingUser ? '#b7bed1' : "#375cb7", color: 'white' }}
                                onClick={onFollowButtonClick}
                                loading={followLoading || unfollowLoading}
                                shape='round'
                                className='profile-head-follow-button'>
                                    {isFollowingUser ? <span><CheckOutlined /> 팔로잉</span> : <span><PlusOutlined /> 팔로우</span>}
                            </Button>
                        )
                        }
                    </div>
                </Col>
            </Row>
            <Row className='profile-introduction-row'>
                <Col className='profile-introduction-icon' span={4}><WechatOutlined style={{color: "#375cb7"}} /></Col>
                {descriptionEditMode && isMyProfile
                ? (
                    <Input.Search
                        className='user-description-edit-input'
                        value={description}
                        onChange={onChangeDescription}
                        addonBefore="소개"
                        enterButton="수정"
                        onSearch={onDescriptionSubmit}
                    />
                )
                : (
                    <Fragment>
                        <Col className='profile-introduction-text' span={16}>{description}</Col>
                        <Col className='profile-introduction-edit' span={4}>{isMyProfile? <EditOutlined onClick={onDescriptionEditMode} style={{color: "#b7bed1"}} /> : null}</Col>
                    </Fragment>
                )
                }
            </Row>
            <Tabs className='profile-menu-tab' tabBarStyle={{margin:"0 auto", width:"fit-content"}} tabPosition='top' size='default' type='line'>
                <TabPane style={{padding: "16px"}} tab="작성글" key="1">
                    <MyPosts userId={userInfo.id}/>
                </TabPane>
                <TabPane style={{padding: "16px"}} tab="작성댓글" key="2">
                    <MyComments userId={userInfo.id}/>
                </TabPane>
                <TabPane style={{padding: "16px"}} tab="좋아요한 글" key="4">
                    <MyLikePosts userId={userInfo.id}/>
                </TabPane>
            </Tabs>
        </div>
    );
};

export default UserProfile;
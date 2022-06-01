import { CheckOutlined, DownOutlined, EditOutlined, PlusOutlined, WechatOutlined } from '@ant-design/icons';
import { Button, Col, Dropdown, Form, Input, Menu, Row, Space, Tabs } from 'antd';
import React, { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';

const { TabPane } = Tabs;

const UserProfile = () => {
    const [nickname, setNickname] = useInput('');
    const [description, setDescription] = useInput('');
    const [myMBTI, setMyMBTI] = useState('');
    const [nicknameEditMode, setNicknameEditMode] = useState(false);
    const onInfoEditMode = useCallback(() => {
        setNicknameEditMode(!nicknameEditMode);
    }, [nicknameEditMode]);

    const onMBTIClick = useCallback((e) => {
        setMyMBTI(e.key)
        console.log(myMBTI);
    }, [myMBTI]);

    const categories = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
    const menu = (
        <Menu
            onClick={onMBTIClick}
            items={categories.map((type, _) => ({ label: type, key: type }))}
        />
    )

    const onNicknameSubmit = useCallback(() => {
        if (!nickname) {
            alert('닉네임을 적어주세요!');
        } else if (nickname.length > 20) {
            alert('닉네임은 20자 이내로 적어주세요!');
        } else {
            setNicknameEditMode(false);
        };
    }, [nickname]);

    // const onDescriptionSubmit = useCallback(() => {
    //     if(description.length > 100) {
    //         alert('소개는 100자 이내로 적어주세요!');
    //     } else if (!description) {
    //         alert('소개를 적어주세요!')
    //     } else {
    //         setInfoEditMode(false);
    //     };
        
    // }, [description]);

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
                        className='user-profile-edit-input'
                        value={nickname}
                        onChange={setNickname}
                        addonBefore="닉네임"
                        enterButton="수정"
                        onSearch={onNicknameSubmit}
                    />)
                    : (<div className='profile-head-name'>웡아잉 <EditOutlined onClick={onInfoEditMode} className="profile-head-name-edit-button" /></div>)
                    }
                    
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
            {/* {infoEditMode
            ? (
                <Form className='user-profile-edit-form'>
                    <Input.Search 
                        className='user-profile-edit-input'
                        value={nickname}
                        onChange={setNickname}
                        addonBefore="닉네임"
                        enterButton="수정"
                        onSearch={onNicknameSubmit}
                    />
                    <Input.Search
                        className='user-profile-edit-input'
                        value={description}
                        onChange={setDescription}
                        addonBefore="소개"
                        enterButton="수정"
                        onSearch={onDescriptionSubmit}
                    />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button style={{ width: '100%' }}>
                            <Space>
                                {myMBTI ? myMBTI : 'MBTI'}
                            <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </Form>
            )
            : (
                null
            )} */}
            <Row className='profile-introduction-row'>
                <Col className='profile-introduction-icon' span={4}><WechatOutlined style={{color: "#375cb7"}} /></Col>
                <Col className='profile-introduction-text' span={16}>안녕하세요! 인간 엔팁 웡아잉입니다!<br />고민 해결 해드릴게요! 팔로우 부탁드립니다!</Col>
                <Col className='profile-introduction-edit' span={4}><EditOutlined onClick={onInfoEditMode} style={{color: "#b7bed1"}} /></Col>
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
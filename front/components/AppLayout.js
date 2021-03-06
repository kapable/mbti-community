import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import { Drawer, Layout, Collapse } from 'antd';
import { BellFilled, BellOutlined, EditOutlined, MenuOutlined } from '@ant-design/icons';
import { categoriesColorObj, LOG_OUT_REQUEST } from '../reducers/user';

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

const AppLayout = ({ children }) => {
    const dispatch = useDispatch();
    const { myInfo } = useSelector((state) => state.user);
    
    const categoriesObj = {"Hot 게시글":false, "고민상담소":false, 'ENFJ':false, 'ENFP':false, 'ENTJ':false, 'ENTP':false, 'ESFJ':false, 'ESFP':false, 'ESTJ':false, 'ESTP':false, 'INFJ':false, 'INFP':false, 'INTJ':false, 'INTP':false, 'ISFJ':false, 'ISFP':false, 'ISTJ':false, 'ISTP':false};
    const account = <div><div className='applayout-drawer-account-name-div'>{myInfo ? myInfo.nickname : '두들링 | MBTI 커뮤니티'}</div><div className='applayout-drawer-account-type-div' style={myInfo ? { backgroundColor: categoriesColorObj[myInfo.type]} : null}>{myInfo ? myInfo.type : null}</div></div>
    const [bellClicked, setBellClicked] = useState(categoriesObj);
    const onBellClick = useCallback((type) => () => {
        setBellClicked((bellClicked) => ({...bellClicked, [type]: !bellClicked[type]}));
    }, [bellClicked]);

    const [showDrawer, setShowDrawer] = useState(false);

    const onClickHamburger = useCallback(() => {
        setShowDrawer(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);

    const onLogOut = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST
        });
        alert('로그아웃 되었습니다!');
    }, []);

    const onEditButtonClick = useCallback(() => {
        if(myInfo) {
            Router.push(`/upload`);
        } else {
            alert('로그인이 필요합니다!');
            Router.push(`/login`);
        };
    }, [myInfo]);

    return (
        <Layout className='applayout'>
            <Header className='applayout-header'>
            <Link href='/'><a><img className='applayout-header-main-logo' src={'https://d3edqqquyf396f.cloudfront.net/basic/doodling-logo.png'} alt='두들링' /></a></Link>
                <div className='applayout-header-hamburger' onClick={onClickHamburger}><MenuOutlined /></div>
                <div className='applayout-header-write' onClick={onEditButtonClick}><EditOutlined /></div>
                <Drawer
                    className='applayout-drawer'
                    title={account}
                    placement='right'
                    closable={false}
                    onClose={onCloseDrawer}
                    visible={showDrawer}
                    key="applayout-drawer"
                    width={270}
                >   
                    {myInfo
                    ? (
                        <>
                            <div className='applayout-drawer-fixed-menu-div'>
                                {Object.keys(bellClicked).slice(0, 2).map(menu => (
                                    <p key={menu}>{menu}<span onClick={onBellClick(menu)} className='applayout-drawer-bell-icon'>{bellClicked[menu] ? <BellFilled /> : <BellOutlined />}</span></p>
                                ))}
                            </div>
                            <Collapse ghost accordion defaultActiveKey={['1']}>
                                <Panel key="1" header="즐겨보는 게시판">
                                    {Object.keys(bellClicked).map((key) => {
                                        if(bellClicked[key] === true) {
                                            return<p key={key}>{key}<span onClick={onBellClick(key)} className='applayout-drawer-bell-icon'>{bellClicked[key] ? <BellFilled /> : <BellOutlined />}</span></p>
                                        }
                                    })}
                                </Panel>
                                <Panel key="2" header="E형">
                                    {Object.keys(bellClicked).map(type => {
                                        if(type.startsWith('E')) {
                                            return <p key={type}>{type}<span onClick={onBellClick(type)} className='applayout-drawer-bell-icon'>{bellClicked[type] ? <BellFilled /> : <BellOutlined />}</span></p>
                                        }
                                    })}
                                </Panel>
                                <Panel key="3" header="I형">
                                {Object.keys(bellClicked).map(type => {
                                        if(type.startsWith('I')) {
                                            return <p key={type}>{type}<span onClick={onBellClick(type)} className='applayout-drawer-bell-icon'>{bellClicked[type] ? <BellFilled /> : <BellOutlined />}</span></p>
                                        }
                                    })}
                                </Panel>
                                
                            </Collapse>
                        </>
                    )
                    : (
                        <div className='applayout-drawer-fixed-menu-logout-div'>로그인 해주세요!</div>
                    )}
                </Drawer>
            </Header>
            <div className='applayout-nav'>
                {myInfo
                ? (
                    <>
                        <div className='applayout-nav-signup-div'><Link href={`/profile/${myInfo.id}`}><a className='applayout-nav-signup-div-a'>내 정보</a></Link></div> {/* 50 | myInfo.id */}
                        <div onClick={onLogOut} className='applayout-nav-login-div'><a className='applayout-nav-login-div-a'>로그아웃</a></div>
                    </>
                )
                : (
                    <>
                        <div className='applayout-nav-signup-div'><Link href='/signup'><a className='applayout-nav-signup-div-a'>회원가입</a></Link></div>
                        <div className='applayout-nav-login-div'><Link href='/login'><a className='applayout-nav-login-div-a'>로그인</a></Link></div>
                    </>
                )
                }
            </div>
            <Content className='applayout-content'>
                { children }
            </Content>
            <Footer className='applayout-footer'>
                광고 및 후원 문의<br></br>
                Advertising and Sponsorship Contact<br></br>
                soumy21@naver.com<br></br>
                <br></br>
                Also service..<br></br>
                <a href='https://ktestone.com/' target="_blank" rel='noreferrer noopener'>🔗 케이테스트</a><br></br>
                <a href='https://niair.xyz/' target="_blank" rel='noreferrer noopener'>🔗 케이퍼니</a><br></br>
                <a href='https://jellinggame.com/' target="_blank" rel='noreferrer noopener'>🔗 젤링게임즈</a><br></br>
                <br></br>
                Disclaimer:<br></br>
                All content is provided for fun and entertainment purposes only<br></br>
                ©주식회사 쿠키로켓 All Rights Reserved. 2022.
            </Footer>
        </Layout>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
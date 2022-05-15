import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Drawer, Layout, Collapse } from 'antd';
import { BellFilled, BellOutlined, MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

const AppLayout = ({ children }) => {
    const categories = ["Hot 게시글", "고민상담소", 'ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
    const account = <div><div className='applayout-drawer-account-name-div'>My Name</div><div className='applayout-drawer-account-type-div'>ENTP</div></div>
    const [bellClicked, setBellClicked] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const onClickHamburger = useCallback(() => {
        setShowDrawer(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);

    const onBellClick = useCallback((type) => () => {
        setBellClicked(!bellClicked);
    }, [bellClicked]);

    return (
        <Layout className='applayout'>
            <Header className='applayout-header'>
            <Link href='/'><a><img className='applayout-header-main-logo' src='https://images.niair.xyz/basic/kfunny_logo.png' alt='케이퍼니' /></a></Link>
                <div className='applayout-header-hamburger' onClick={onClickHamburger}><MenuOutlined /></div>
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
                    <div className='applayout-drawer-fixed-menu-div'>
                        {categories.slice(0, 2).map(menu => (
                            <p key={menu}>{menu}<span onClick={onBellClick({menu})} className='applayout-drawer-bell-icon'>{bellClicked ? <BellFilled /> : <BellOutlined />}</span></p>
                        ))}
                    </div>
                    <Collapse ghost accordion defaultActiveKey={['1']}>
                        <Panel key="1" header="즐겨찾는 게시판">
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Panel>
                        <Panel key="2" header="E형">
                            {categories.map(type => {
                                if(type.startsWith('E')) {
                                    return <p key={type}>{type}<span onClick={onBellClick({type})} className='applayout-drawer-bell-icon'>{bellClicked ? <BellFilled /> : <BellOutlined />}</span></p>
                                }
                            })}
                        </Panel>
                        <Panel key="3" header="I형">
                        {categories.map(type => {
                                if(type.startsWith('I')) {
                                    return <p key={type}>{type}<span onClick={onBellClick({type})} className='applayout-drawer-bell-icon'>{bellClicked ? <BellFilled /> : <BellOutlined />}</span></p>
                                }
                            })}
                        </Panel>
                        
                    </Collapse>
                </Drawer>
            </Header>
            <div className='applayout-nav'>
                <div className='applayout-nav-signup-div'><Link href='/signup'><a className='applayout-nav-signup-div-a'>회원가입</a></Link></div>
                <div className='applayout-nav-login-div'><Link href='/login'><a className='applayout-nav-login-div-a'>로그인</a></Link></div>
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
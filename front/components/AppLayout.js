import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Drawer, Layout, Divider } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const onClickHamburger = useCallback(() => {
        setShowDrawer(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);

    return (
        <Layout className='applayout'>
            <Header className='applayout-header'>
                <img className='applayout-header-main-logo' src='https://images.niair.xyz/basic/kfunny_logo.png' alt='케이퍼니' />
                <div className='applayout-header-hamburger' onClick={onClickHamburger}><MenuOutlined /></div>
                <Drawer
                    title="MBTI 커뮤니티"
                    placement='right'
                    closable={false}
                    onClose={onCloseDrawer}
                    visible={showDrawer}
                    key="applayout-drawer"
                    width={270}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </Header>
            <div className='applayout-nav'>
                <div className='applayout-nav-signup-div'><Link href='/signup'><a className='applayout-nav-signup-div-a'>회원가입</a></Link></div>
                <div className='applayout-nav-login-div'><Link href='/login'><a className='applayout-nav-login-div-a'>로그인</a></Link></div>
            </div>
            {/* <Divider /> */}
                {/* <br style={{clear: "all"}}/> */}
            <Content className='applayout-content'>
                { children }
            </Content>
        </Layout>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
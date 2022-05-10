import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const AppLayout = ({ children }) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const onClickHamburger = useCallback(() => {
        setShowDrawer(true);
    }, []);
    const onCloseDrawer = useCallback(() => {
        setShowDrawer(false);
    }, []);

    return (
        <div className='applayout'>
            <div className='applayout-header'>
                <div className='applayout-header-inner-div'>
                    <img className='applayout-header-main-logo' src='https://images.niair.xyz/basic/kfunny_logo.png' alt='케이퍼니' />
                    <div className='applayout-header-hamburger' onClick={onClickHamburger}><MenuOutlined /></div>
                </div>
            </div>
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
            <div>
                <Link href='/'><a>Home</a></Link>
                <Link href='/login'><a>로그인</a></Link>
                <Link href='/signup'><a>회원가입</a></Link>
            </div>
            { children }
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
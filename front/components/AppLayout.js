import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/login'><a>로그인</a></Link>
            <Link href='/signup'><a>회원가입</a></Link>
            { children }
        </div>
    );
};

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
import React, { Fragment } from 'react';
import Head from 'next/head';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>MBTI 커뮤니티</title>
                <meta charSet='utf-8'/>
                <meta name="language" content="Korean" />
                <meta name="author" content="쿠키로켓" />
                <meta name="description" content="MBTI 커뮤니티" />
                <meta name="keywords" content="MBTI, 커뮤니티" />
            </Head>
            <div>메인 페이지</div>
        </Fragment>
    );
};

export default Home;
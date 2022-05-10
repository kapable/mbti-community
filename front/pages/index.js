import React, { Fragment } from 'react';
import { Tabs } from 'antd';
import Head from 'next/head';

const { TabPane } = Tabs;

const Home = () => {
    const categories = ["Hot 게시글", "고민상담소", 'ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
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
            <Tabs className='home-category-tab' tabPosition='top' size='default' type='line' tabBarGutter={20} tabBarStyle={{backgroundColor: '#f3f3f3', height:'1.7rem'}} > 
                {categories.map((category) => (
                    <TabPane key={category} tab={category}>
                        {category}
                    </TabPane>
                ))}
            </Tabs>
            <Tabs className='home-category-tab' tabPosition='top' size='default' type='line' tabBarGutter={20} tabBarStyle={{backgroundColor: '#f3f3f3', height:'1.7rem'}} > 
                {categories.map((category) => (
                    <TabPane key={category} tab={category}>
                        {category}
                    </TabPane>
                ))}
            </Tabs>
        </Fragment>
    );
};

export default Home;
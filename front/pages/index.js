import React, { Fragment, useCallback, useState } from 'react';
import { Tabs } from 'antd';
import Head from 'next/head';
import HotRanking from '../components/Main/HotRanking';

const { TabPane } = Tabs;

const Home = () => {
    const categories = ["Hot 게시글", "고민상담소", 'ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedUnderCategory, setSelectedUnderCategory] = useState(categories[1]);
    const onChangeCategory = useCallback((category) => {
        setSelectedCategory(category);
    }, []);

    const onChangeUnderCategory = useCallback((category) => {
        setSelectedUnderCategory(category);
    }, []);

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
            <Tabs className='home-category-tab' onChange={onChangeCategory} tabPosition='top' size='default' type='line' tabBarGutter={20} tabBarStyle={{backgroundColor: '#f3f3f3', height:'1.7rem'}} moreIcon={false}> 
                {categories.map((category) => (
                    <TabPane key={category} tab={category}>
                        {selectedCategory === "Hot 게시글"
                        ? <HotRanking />
                        : <div>{selectedCategory}</div>
                        }
                    </TabPane>
                ))}
            </Tabs>
            <Tabs className='home-category-tab' onChange={onChangeUnderCategory} tabPosition='top' size='default' type='line' tabBarGutter={20} tabBarStyle={{backgroundColor: '#f3f3f3', height:'1.7rem'}} moreIcon={false}> 
                {categories.slice(1, -1).map((category) => (
                    <TabPane key={category} tab={category}>
                        <div>{selectedUnderCategory}</div>
                    </TabPane>
                ))}
            </Tabs>
        </Fragment>
    );
};

export default Home;
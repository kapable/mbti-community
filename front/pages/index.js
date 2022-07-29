import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Tabs } from 'antd';
import Head from 'next/head';
import HotRanking from '../components/Main/HotRanking';
import TypeForum from '../components/Main/TypeForum';
import { useDispatch } from 'react-redux';
import { LOAD_HOT_POSTS_REQUEST } from '../reducers/post';
import { EllipsisOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: LOAD_HOT_POSTS_REQUEST,
        })
    }, []);
    const Categories = {
        "Hot 게시글" : [],
        "MBTI" : ['전체', '연애&썸', '끄적끄적'],
        "이슈두들링" : ['전체'],
        "공지" : ['전체', '필독사항', '이벤트']
    };
    const [selectedCategory, setSelectedCategory] = useState("Hot 게시글");
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const onChangeCategory = useCallback((category) => {
        setSelectedCategory(category);
        setSelectedSubCategory(Categories[category][0]);
    }, []);

    const onChangeSubCategory = useCallback((subCategory) => {
        setSelectedSubCategory(subCategory);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>MBTI 커뮤니티</title>
                <link rel='shortcut icon' href='/doodling-favicon.png'/>
                <meta charSet='utf-8'/>
                <meta name="language" content="Korean" />
                <meta name="author" content="쿠키로켓" />
                <meta name="description" content="MBTI 커뮤니티" />
                <meta name="keywords" content="MBTI, 커뮤니티" />
            </Head>
            <Tabs className='home-category-tab' onChange={onChangeCategory} tabPosition='top' size='default' type='line' tabBarGutter={20} tabBarStyle={{backgroundColor: '#f3f3f3', height:'1.7rem'}} moreIcon={<EllipsisOutlined />}>
                {Object.entries(Categories).map((pair) => (
                    <TabPane key={pair[0]} tab={pair[0]}>
                        {selectedCategory === "Hot 게시글"
                        ? <HotRanking />
                        :
                        // Sub NavBar in case of ordinary Menu
                        <Tabs onChange={onChangeSubCategory} activeKey={selectedSubCategory} tabPosition='top' size='default' type='line' tabBarGutter={20} tabBarStyle={{backgroundColor: '#f3f3f3', height:'1.7rem'}} moreIcon={<EllipsisOutlined />}>
                            {pair[1].map((subCategory) => (
                                <TabPane key={subCategory} tab={subCategory}>
                                    <TypeForum category={selectedCategory} subCategory={selectedSubCategory} />
                                </TabPane>
                            ))}
                        </Tabs>}
                    </TabPane>
                ))}
            </Tabs>
        </Fragment>
    );
};

export default Home;
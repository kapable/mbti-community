import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Tabs, Row, Col } from 'antd';
import CategoryHotPost from './CategoryHotPost';
import SwipeableViews from 'react-swipeable-views';
import shortId from 'shortid';

const { TabPane } = Tabs;
const pointColor = '#375cb7';
const greyColor = '#f3f3f3';

const HotRanking = () => {
    const [screenWidth, setScreenWidth] = useState();
    useEffect(() => {
        setScreenWidth(window.screen.width)
    }, []);

    const [swipeIndex, setSwipeIndex] = useState(0);
    const onSwipe = useCallback((index) => {
        setSwipeIndex(index);
    }, []);
    const onFirstSwipeBtnClick = useCallback(() => {
        setSwipeIndex(0);
    }, []);

    const onSecondSwipeBtnClick = useCallback(() => {
        setSwipeIndex(1);
    }, []);

    const categories = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const onChangeCategory = useCallback((category) => {
        setSelectedCategory(category);
    }, []);

    const sampleTopten = [
        {
            id: shortId.generate(),
            type: 'ENFJ',
            title: '엔프제 남친에게 서운할 때',
            views: 34
        },
        {
            id: shortId.generate(),
            type: 'ENFJ',
            title: '엔프제 남친에게 서운할 때',
            views: 34
        },
        {
            id: shortId.generate(),
            type: 'ENFJ',
            title: '엔프제 남친에게 서운할 때',
            views: 34
        },
        {
            id: shortId.generate(),
            type: 'ENFJ',
            title: '엔프제 남친에게 서운할 때',
            views: 34
        },
        {
            id: shortId.generate(),
            type: 'ENFJ',
            title: '엔프제 남친에게 서운할 때',
            views: 34
        }
    ];

    return (
        <Fragment>
            <Row className='home-hot-ranking-title-div'>
                <button className='home-hot-ranking-title-btn'>Hot 게시글</button>
                <p className='home-hot-ranking-first-p'>1 바리스타가 내린 에스프레소</p>
            </Row>
            {screenWidth < 600
            ? (
                <Fragment>
                    <SwipeableViews index={swipeIndex} onChangeIndex={onSwipe} enableMouseEvents resistance>
                        <div>
                            <Row className='home-hot-ranking-row' justify='center'>
                                <Col span={20}>
                                    {sampleTopten.map((content, index) => (
                                        <Link key={`${content.id}`} href={`post/1`}><a>
                                            <div key={content.title + index} className='home-hot-ranking-topten-div'>
                                                <p className='home-hot-ranking-topten-p'>
                                                    <span className='home-hot-ranking-topten-number'>{index+1}</span> <span className='home-hot-ranking-topten-type'>{content.type}</span> <span className='home-hot-ranking-topten-title'>{content.title}</span> <span className='home-hot-ranking-topten-views'>{content.views}</span>
                                                </p>
                                            </div>
                                        </a></Link>
                                    ))}
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='home-hot-ranking-row' justify='center'>
                                <Col span={20}>
                                    {sampleTopten.map((content, index) => (
                                        <Link key={`${content.id}`} href={`post/1`}><a>
                                            <div key={content.title + index} className='home-hot-ranking-topten-div'>
                                                <p className='home-hot-ranking-topten-p'>
                                                    <span className='home-hot-ranking-topten-number'>{index+6}</span> <span className='home-hot-ranking-topten-type'>{content.type}</span> <span className='home-hot-ranking-topten-title'>{content.title}</span> <span className='home-hot-ranking-topten-views'>{content.views}</span>
                                                </p>
                                            </div>
                                        </a></Link>
                                    ))}
                                </Col>
                            </Row>
                        </div>
                    </SwipeableViews>
                    <div className='type-forum-swipe-button-div'>
                        <button onClick={onFirstSwipeBtnClick} style={swipeIndex ? {backgroundColor:greyColor}:{backgroundColor:pointColor}} className='type-forum-swipe-first-button'></button>
                        <button onClick={onSecondSwipeBtnClick} style={swipeIndex ? {backgroundColor:pointColor}:{backgroundColor:greyColor}} className='type-forum-swipe-second-button'></button>
                    </div>
                </Fragment>
            )
            : (
                <Row className='home-hot-ranking-row' justify='center'>
                    <Col span={12}>
                        {sampleTopten.map((content, index) => (
                            <Link key={`${content.id}`} href={`post/1`}><a>
                                <div key={content.title + index} className='home-hot-ranking-topten-div'>
                                    <p className='home-hot-ranking-topten-p'>
                                        <span className='home-hot-ranking-topten-number'>{index+1}</span> <span className='home-hot-ranking-topten-type'>{content.type}</span> <span className='home-hot-ranking-topten-title'>{content.title}</span> <span className='home-hot-ranking-topten-views'>{content.views}</span>
                                    </p>
                                </div>
                            </a></Link>
                        ))}
                    </Col>
                    <Col span={12}>
                        {sampleTopten.map((content, index) => (
                            <Link key={`${content.id}`} href={`post/1`}><a>
                                <div key={content.title + index} className='home-hot-ranking-topten-div'>
                                    <p className='home-hot-ranking-topten-p'>
                                        <span className='home-hot-ranking-topten-number'>{index+6}</span> <span className='home-hot-ranking-topten-type'>{content.type}</span> <span className='home-hot-ranking-topten-title'>{content.title}</span> <span className='home-hot-ranking-topten-views'>{content.views}</span>
                                    </p>
                                </div>
                            </a></Link>
                        ))}
                    </Col>
                </Row>
            )}
            <Tabs className='home-category-under-tab' onChange={onChangeCategory} tabPosition='top' size='default' type='line' tabBarGutter={20} tabBarStyle={{height:'1.7rem'}} moreIcon={false}> 
                {categories.map((category) => (
                    <TabPane key={category} tab={category}>
                        <CategoryHotPost category={selectedCategory} />
                    </TabPane>
                ))}
            </Tabs>
        </Fragment>
    );
};

export default HotRanking;
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Tabs, Row, Col, Carousel } from 'antd';
import CategoryHotPost from './CategoryHotPost';
import SwipeableViews from 'react-swipeable-views';
import { useDispatch, useSelector } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const { TabPane } = Tabs;
const pointColor = '#375cb7';
const greyColor = '#f3f3f3';

const HotRanking = () => {
    // const topTen = useSelector((state) => state.post.mainPosts.slice(1, 11));
    const topTen = useSelector((state) => state.post.totalHotTen);
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
    return (
        <Fragment>
            <Row className='home-hot-ranking-title-div'>
                <button className='home-hot-ranking-title-btn'>Hot 게시글</button>
                <AliceCarousel
                    autoPlay
                    autoPlayControls={false}
                    autoPlayStrategy="none"
                    autoPlayInterval={4000}
                    animationDuration={500}
                    animationType="fadeout"
                    infinite
                    innerWidth={8}
                    touchTracking={false}
                    disableDotsControls={true}
                    disableButtonsControls={true}
                    items={topTen.map((post, index) => (
                        <Link href={`post/${post.id}`}><a>
                            <div className='home-hot-ranking-first-p'>{screenWidth < 600 ? `${index+1} ${post.title.slice(0, 18)}...` : `${index+1} ${post.title}`}</div>
                        </a></Link>
                    ))}
                />
            </Row>
            {screenWidth < 600
            ? (
                <Fragment>
                    <SwipeableViews index={swipeIndex} onChangeIndex={onSwipe} enableMouseEvents resistance>
                        <div>
                            <Row className='home-hot-ranking-row' justify='center'>
                                <Col span={20}>
                                    {topTen.slice(0, 5).map((content, index) => (
                                        <Link key={`${content.id}-${content.title}`} href={`post/${content.id}`}><a>
                                            <div key={content.title + index} className='home-hot-ranking-topten-div'>
                                                <p className='home-hot-ranking-topten-p'>
                                                    <span className='home-hot-ranking-topten-number'>{index+1}</span> <span className='home-hot-ranking-topten-type'>{content.category}</span> <span className='home-hot-ranking-topten-title'>{content.title.slice(0, 16) + "..."}</span> <span className='home-hot-ranking-topten-views'>{content.views}</span>
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
                                    {topTen.slice(5).map((content, index) => (
                                        <Link key={`${content.id}-${content.title}`} href={`post/${content.id}`}><a>
                                            <div key={content.title + index} className='home-hot-ranking-topten-div'>
                                                <p className='home-hot-ranking-topten-p'>
                                                    <span className='home-hot-ranking-topten-number'>{index+6}</span> <span className='home-hot-ranking-topten-type'>{content.category}</span> <span className='home-hot-ranking-topten-title'>{content.title.slice(0, 18) + "..."}</span> <span className='home-hot-ranking-topten-views'>{content.views}</span>
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
                        {topTen.slice(0, 5).map((content, index) => (
                            <Link key={`${content.id}-${content.title}`} href={`post/${content.id}`}><a>
                                <div key={content.title + index} className='home-hot-ranking-topten-div'>
                                    <p className='home-hot-ranking-topten-p'>
                                        <span className='home-hot-ranking-topten-number'>{index+1}</span> <span className='home-hot-ranking-topten-type'>{content.category}</span> <span className='home-hot-ranking-topten-title'>{content.title.slice(0, 18) + "..."}</span> <span className='home-hot-ranking-topten-views'>{content.views}</span>
                                    </p>
                                </div>
                            </a></Link>
                        ))}
                    </Col>
                    <Col span={12}>
                        {topTen.slice(5).map((content, index) => (
                            <Link key={`${content.id}-${content.title}`} href={`post/${content.id}`}><a>
                                <div key={content.title + index} className='home-hot-ranking-topten-div'>
                                    <p className='home-hot-ranking-topten-p'>
                                        <span className='home-hot-ranking-topten-number'>{index+6}</span> <span className='home-hot-ranking-topten-type'>{content.category}</span> <span className='home-hot-ranking-topten-title'>{content.title.slice(0, 18) + "..."}</span> <span className='home-hot-ranking-topten-views'>{content.views}</span>
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